from __future__ import annotations

import json
import re
import sys
import zipfile
from datetime import datetime
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(r"C:\Users\alexi\Downloads")
OUT = Path(r"C:\Users\alexi\apec-english\documentacion_hesds\inventario_busqueda.json")

PATTERNS = {
    "hesds": r"HESDS|Hogar\s+Escuela\s+Santo\s+Domingo\s+Savio",
    "sigce": r"SIGCE|Sistema\s+Integral\s+de\s+Gesti[oó]n\s+del\s+Centro",
    "obra_salesiana": r"Obra\s+Salesiana|Obra\s+Educativo.?Pastoral|Inspector[ií]a\s+Salesiana",
    "sistema_preventivo": r"Sistema\s+Preventivo|raz[oó]n.{0,80}religi[oó]n.{0,80}amor|amorevolezza",
    "poi_pepsi": r"POI.?PEPSI|Proyecto\s+Org[aá]nico\s+Inspectorial|Proyecto\s+Educativo.?Pastoral\s+Salesiano",
    "marco_minerd": r"Manual\s+Operativo\s+de\s+Centro|Ley\s+(?:General\s+de\s+Educaci[oó]n\s+)?66.?97|Ordenanza\s+0?[124].?20(?:18|23)",
}


def pdf_text(path: Path) -> str:
    reader = PdfReader(str(path), strict=False)
    chunks = []
    # Search enough pages to identify a source without fully loading very large PDFs.
    page_indexes = list(range(min(12, len(reader.pages))))
    if len(reader.pages) > 12:
        page_indexes += list(range(max(12, len(reader.pages) - 3), len(reader.pages)))
    for idx in page_indexes:
        try:
            chunks.append(reader.pages[idx].extract_text() or "")
        except Exception:
            continue
    return "\n".join(chunks)


def docx_text(path: Path) -> str:
    with zipfile.ZipFile(path) as zf:
        xml = zf.read("word/document.xml").decode("utf-8", errors="ignore")
    return re.sub(r"<[^>]+>", " ", xml)


def plain_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")


def main() -> int:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    results = []
    supported = {".pdf", ".docx", ".md", ".txt"}
    for path in ROOT.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in supported:
            continue
        if datetime.fromtimestamp(path.stat().st_mtime) < datetime(2026, 6, 20):
            continue
        try:
            if path.suffix.lower() == ".pdf":
                text = pdf_text(path)
            elif path.suffix.lower() == ".docx":
                text = docx_text(path)
            else:
                text = plain_text(path)
        except Exception as exc:
            results.append({"path": str(path), "error": str(exc)[:300]})
            continue
        matches = [name for name, pattern in PATTERNS.items() if re.search(pattern, text, re.I | re.S)]
        if matches:
            results.append({
                "path": str(path),
                "matches": matches,
                "size": path.stat().st_size,
                "modified": path.stat().st_mtime,
            })
    OUT.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Resultados: {len(results)}")
    for item in results:
        if "matches" in item:
            print(f"{','.join(item['matches'])}\t{item['path']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
