from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

from pypdf import PdfReader


BASE = Path(r"C:\Users\alexi\apec-english\documentacion_hesds")
TEXT_DIR = BASE / "texto_extraido"
INDEX_PATH = BASE / "indice_corpus.json"


def safe_name(path: Path) -> str:
    rel = path.relative_to(BASE).with_suffix("")
    return "__".join(rel.parts) + ".txt"


def normalize(text: str) -> str:
    text = text.replace("\x00", "")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{4,}", "\n\n\n", text)
    return text.strip()


def main() -> None:
    TEXT_DIR.mkdir(parents=True, exist_ok=True)
    records = []
    for pdf in sorted(BASE.rglob("*.pdf")):
        if TEXT_DIR in pdf.parents:
            continue
        digest = hashlib.sha256(pdf.read_bytes()).hexdigest()
        record = {
            "archivo": str(pdf.relative_to(BASE)),
            "sha256": digest,
            "tamano_bytes": pdf.stat().st_size,
        }
        try:
            reader = PdfReader(str(pdf), strict=False)
            pages = []
            nonempty = 0
            for number, page in enumerate(reader.pages, start=1):
                try:
                    content = normalize(page.extract_text() or "")
                except Exception as exc:
                    content = f"[ERROR DE EXTRACCION EN PAGINA {number}: {exc}]"
                if len(content) >= 30:
                    nonempty += 1
                pages.append(f"\n\n===== PAGINA {number} =====\n\n{content}")
            output = TEXT_DIR / safe_name(pdf)
            output.write_text("".join(pages).strip() + "\n", encoding="utf-8")
            record.update({
                "paginas": len(reader.pages),
                "paginas_con_texto": nonempty,
                "texto_extraido": str(output.relative_to(BASE)),
                "requiere_ocr": nonempty < max(1, len(reader.pages) // 3),
            })
        except Exception as exc:
            record.update({"error": str(exc), "requiere_ocr": True})
        records.append(record)
        print(f"{record['archivo']} -> {record.get('paginas_con_texto', 0)}/{record.get('paginas', '?')}")
    INDEX_PATH.write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Indice: {INDEX_PATH}")


if __name__ == "__main__":
    main()
