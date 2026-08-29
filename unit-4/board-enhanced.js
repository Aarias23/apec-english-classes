(function () {
  "use strict";

  var board = document.getElementById("whiteboard");
  var canvas = document.getElementById("board-canvas");
  var status = document.getElementById("board-status");
  var editor = document.getElementById("board-text-editor");
  var surface = document.querySelector(".board-surface");
  var exportButton = document.getElementById("board-export");
  var clearButton = document.getElementById("board-clear");
  if (!board || !canvas || !status) return;

  var savedSurface = localStorage.getItem("english2-unit4-whiteboard-surface") || "grid";
  if (surface) surface.className = "board-surface " + savedSurface;

  document.querySelectorAll("[data-board-surface]").forEach(function (button) {
    button.classList.toggle("active", button.getAttribute("data-board-surface") === savedSurface);
    button.addEventListener("click", function () {
      var selected = button.getAttribute("data-board-surface");
      if (surface) surface.className = "board-surface " + selected;
      document.querySelectorAll("[data-board-surface]").forEach(function (item) { item.classList.toggle("active", item === button); });
      localStorage.setItem("english2-unit4-whiteboard-surface", selected);
      setStatus(selected.charAt(0).toUpperCase() + selected.slice(1) + " surface selected.");
    });
  });

  function setStatus(message) {
    status.textContent = message;
  }

  document.querySelectorAll("[data-board-tool]").forEach(function (button) {
    button.addEventListener("click", function () {
      var tool = button.getAttribute("data-board-tool");
      setStatus(tool === "text" ? "Text selected. Click the board and type." : tool === "eraser" ? "Eraser selected. Drag across marks." : "Pen selected. Drag to draw.");
    });
  });

  document.querySelectorAll("[data-board-color]").forEach(function (button) {
    button.addEventListener("click", function () { setStatus("Color selected. Choose a tool or keep drawing."); });
  });

  document.querySelectorAll("[data-board-size]").forEach(function (button) {
    button.addEventListener("click", function () { setStatus("Size " + button.textContent.trim() + " selected."); });
  });

  if (exportButton) {
    exportButton.addEventListener("click", function () {
      var link = document.createElement("a");
      link.download = "english-2-unit-4-whiteboard.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      setStatus("Board exported as a PNG image.");
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      setStatus("New board ready. Start with Pen or Text.");
    });
  }

  document.addEventListener("keydown", function (event) {
    if (!board.classList.contains("open")) return;
    if (event.target === editor) return;
    var key = event.key.toLowerCase();
    if (key === "p" || key === "t" || key === "e") {
      event.preventDefault();
      event.stopPropagation();
      var toolButton = document.querySelector('[data-board-tool="' + (key === "p" ? "pen" : key === "t" ? "text" : "eraser") + '"]');
      if (toolButton) toolButton.click();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      if (editor && !editor.hidden) return;
      document.getElementById("board-close").click();
    }
  }, true);

  canvas.addEventListener("pointerdown", function () {
    if (document.querySelector('[data-board-tool="text"].active')) return;
    setStatus("Drawing... release to save the mark.");
  });
  canvas.addEventListener("pointerdown", function (event) {
    if (!document.querySelector('[data-board-tool="text"].active') || !editor) return;
    window.setTimeout(function () {
      var editorWidth = Math.min(520, Math.max(240, window.innerWidth * .45));
      editor.style.position = "fixed";
      editor.style.left = Math.max(12, Math.min(event.clientX, window.innerWidth - editorWidth - 12)) + "px";
      editor.style.top = Math.max(84, Math.min(event.clientY, window.innerHeight - 120)) + "px";
      editor.style.width = editorWidth + "px";
      editor.focus({ preventScroll: true });
    }, 0);
  });
  canvas.addEventListener("pointerup", function () {
    if (document.querySelector('[data-board-tool="pen"].active')) setStatus("Pen selected. Drag to draw.");
  });
}());
