(function () {
  "use strict";
  var params = new URLSearchParams(window.location.search);
  var defaultLesson = Number(document.documentElement.getAttribute("data-lesson")) || 1;
  var maxLessonId = Math.max.apply(null, window.COURSE_LESSONS.map(function (item) { return item.id; }));
  var lessonId = Math.min(maxLessonId, Math.max(1, Number(params.get("lesson")) || defaultLesson));
  var lesson = window.COURSE_LESSONS.find(function (item) { return item.id === lessonId; }) || window.COURSE_LESSONS[0];
  var current = Math.min(lesson.slides.length - 1, Math.max(0, Number(params.get("slide")) || 0));
  var stage = document.getElementById("slide-stage");
  var list = document.getElementById("slide-list");
  var teacherPanel = document.getElementById("teacher-panel");
  var teacherContent = document.getElementById("teacher-content");
  var previous = document.getElementById("prev-slide");
  var next = document.getElementById("next-slide");
  var timerDialog = document.getElementById("timer-dialog");
  var timerDisplay = document.getElementById("timer-display");
  var timerSeconds = 300;
  var timerInitial = 300;
  var timerHandle = null;
  var whiteboard = document.getElementById("whiteboard");
  var whiteboardCanvas = document.getElementById("whiteboard-canvas");
  var whiteboardContext = whiteboardCanvas.getContext("2d");
  var whiteboardTextEditor = document.getElementById("whiteboard-text-editor");
  var whiteboardMode = params.get("whiteboard") === "1";
  var whiteboardKey = "linkit2-whiteboard-lesson-" + lesson.id;
  var whiteboardStrokes = [];
  var activeStroke = null;
  var boardTool = "pen";
  var boardColor = "#17211c";
  var boardSize = 7;
  var boardTextSize = 42;
  var whiteboardOpenButton = document.createElement("button");
  whiteboardOpenButton.id = "whiteboard-open";
  whiteboardOpenButton.className = "tool-button";
  whiteboardOpenButton.type = "button";
  whiteboardOpenButton.setAttribute("aria-label", "Open whiteboard");
  whiteboardOpenButton.setAttribute("aria-pressed", "false");
  whiteboardOpenButton.innerHTML = "&#9998; <span>Whiteboard</span>";
  document.querySelector(".class-tools").insertBefore(whiteboardOpenButton, document.querySelector(".class-tools").firstChild);

  document.title = lesson.title + " | Link It! 2";
  document.getElementById("lesson-label").textContent = "Class " + String(lesson.id).padStart(2, "0");
  document.getElementById("lesson-date").textContent = lesson.date;
  document.getElementById("page-range").textContent = lesson.pages.replace("Student Book", "SB");

  function teacherMarkup(teacher) {
    return '<section class="teacher-section"><small>PURPOSE</small><p>' + teacher.purpose + '</p></section>' +
      '<section class="teacher-section"><small>TEACHER SAYS</small><p>&ldquo;' + teacher.say + '&rdquo;</p></section>' +
      '<section class="teacher-section"><small>FACILITATION NOTES</small><ul>' + teacher.notes.map(function (note) { return "<li>" + note + "</li>"; }).join("") + '</ul></section>' +
      '<section class="teacher-section"><small>ANSWER / SUCCESS EVIDENCE</small><div class="teacher-answer">' + teacher.answer + '</div></section>';
  }

  function bindSlideActions() {
    stage.querySelectorAll(".reveal-button").forEach(function (button) {
      button.addEventListener("click", function () {
        var answer = button.nextElementSibling;
        answer.classList.toggle("visible");
        button.textContent = answer.classList.contains("visible") ? "Hide answer" : "Reveal answer";
      });
    });
    stage.querySelectorAll("[data-quiz]").forEach(function (quiz) {
      var answer = quiz.getAttribute("data-answer");
      var feedback = quiz.parentElement.querySelector(".quiz-feedback");
      quiz.querySelectorAll("[data-choice]").forEach(function (button) {
        button.addEventListener("click", function () {
          quiz.querySelectorAll("[data-choice]").forEach(function (option) { option.classList.remove("correct", "wrong"); });
          if (button.getAttribute("data-choice") === answer) {
            button.classList.add("correct");
            feedback.textContent = "Correct - explain the evidence to a partner.";
          } else {
            button.classList.add("wrong");
            feedback.textContent = "Not yet - look for the subject, time signal or context.";
          }
        });
      });
    });
    stage.querySelectorAll("[data-checkpoint]").forEach(function (button) {
      button.addEventListener("click", function () {
        var route = button.getAttribute("data-checkpoint");
        var feedback = stage.querySelector(".checkpoint-feedback");
        stage.querySelectorAll("[data-checkpoint]").forEach(function (option) { option.classList.toggle("active", option === button); });
        feedback.textContent = button.getAttribute("data-guidance");
        feedback.setAttribute("data-route", route);
        localStorage.setItem("linkit2-checkpoint-" + lesson.id + "-" + current, route);
      });
    });
    var savedRoute = localStorage.getItem("linkit2-checkpoint-" + lesson.id + "-" + current);
    var savedButton = savedRoute && stage.querySelector("[data-checkpoint=" + savedRoute + "]");
    if (savedButton) savedButton.click();
  }

  function updateUrl() {
    history.replaceState(null, "", "classroom.html?lesson=" + lesson.id + "&slide=" + current);
  }

  function render() {
    var slide = lesson.slides[current];
    var theme = lesson.color === "coral" && (current === 0 || current === lesson.slides.length - 1) ? "coral-slide" : (current === 0 ? "dark-slide" : "");
    if (slide.kind === "book") theme = "book-slide";
    if (slide.kind === "checkpoint") theme = "checkpoint-slide";
    stage.className = "slide-stage " + theme;
    stage.innerHTML = '<div class="slide-kicker"><span>' + slide.kicker + '</span><span class="slide-time">' + slide.time + '</span></div>' +
      (current === 0 ? "<h1>" : "<h2>") + slide.title + (current === 0 ? "</h1>" : "</h2>") +
      '<p class="slide-lead">' + slide.lead + '</p>' + slide.body;
    teacherContent.innerHTML = teacherMarkup(slide.teacher);
    document.getElementById("slide-count").textContent = String(current + 1).padStart(2, "0") + " / " + String(lesson.slides.length).padStart(2, "0");
    document.getElementById("progress-bar").style.width = ((current + 1) / lesson.slides.length * 100) + "%";
    previous.disabled = current === 0;
    next.disabled = current === lesson.slides.length - 1;
    list.querySelectorAll(".slide-jump").forEach(function (item, index) { item.classList.toggle("active", index === current); });
    var activeJump = list.children[current];
    if (activeJump) activeJump.scrollIntoView({ block: "nearest" });
    bindSlideActions();
    updateUrl();
    if (current === lesson.slides.length - 1) localStorage.setItem("linkit2-lesson-" + lesson.id, "complete");
  }

  list.innerHTML = lesson.slides.map(function (slide, index) {
    return '<button class="slide-jump" type="button" data-index="' + index + '"><span>' + String(index + 1).padStart(2, "0") + '</span><small>' + slide.title + '</small></button>';
  }).join("");
  list.addEventListener("click", function (event) {
    var jump = event.target.closest("[data-index]");
    if (jump) { current = Number(jump.getAttribute("data-index")); render(); }
  });
  previous.addEventListener("click", function () { if (current > 0) { current -= 1; render(); } });
  next.addEventListener("click", function () { if (current < lesson.slides.length - 1) { current += 1; render(); } });

  function setTeacher(open) {
    teacherPanel.classList.toggle("open", open);
    teacherPanel.setAttribute("aria-hidden", String(!open));
    document.getElementById("teacher-toggle").setAttribute("aria-pressed", String(open));
  }
  document.getElementById("teacher-toggle").addEventListener("click", function () { setTeacher(!teacherPanel.classList.contains("open")); });
  document.getElementById("teacher-close").addEventListener("click", function () { setTeacher(false); });
  document.getElementById("rail-toggle").addEventListener("click", function () { document.querySelector(".deck-shell").classList.toggle("rail-collapsed"); });
  document.getElementById("fullscreen-button").addEventListener("click", function () {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(function () {});
    else document.exitFullscreen();
  });
  document.addEventListener("keydown", function (event) {
    if (whiteboard.classList.contains("open")) {
      if (event.key === "Escape") closeWhiteboard();
      return;
    }
    if (timerDialog.open) return;
    if (event.key === "ArrowRight" || event.key === "PageDown") next.click();
    if (event.key === "ArrowLeft" || event.key === "PageUp") previous.click();
    if (event.key.toLowerCase() === "t") setTeacher(!teacherPanel.classList.contains("open"));
  });

  function loadWhiteboard() {
    try {
      var saved = JSON.parse(localStorage.getItem(whiteboardKey) || "[]");
      whiteboardStrokes = Array.isArray(saved) ? saved : [];
    } catch (error) {
      whiteboardStrokes = [];
    }
  }

  function saveWhiteboard() {
    try {
      localStorage.setItem(whiteboardKey, JSON.stringify(whiteboardStrokes));
    } catch (error) {}
  }

  function drawTextItem(item) {
    var width = whiteboardCanvas.clientWidth;
    var x = item.x * width;
    var y = item.y * whiteboardCanvas.clientHeight;
    var size = Number(item.size) || 42;
    var lineHeight = size * 1.22;
    var maxWidth = Math.max(size * 4, width - x - 24);
    whiteboardContext.save();
    whiteboardContext.globalCompositeOperation = "source-over";
    whiteboardContext.fillStyle = item.color || boardColor;
    whiteboardContext.font = "700 " + size + "px Inter, ui-sans-serif, system-ui, sans-serif";
    whiteboardContext.textBaseline = "top";
    item.text.split("\n").forEach(function (paragraph) {
      if (!paragraph) {
        y += lineHeight;
        return;
      }
      var words = paragraph.split(/\s+/);
      var line = words.shift() || "";
      words.forEach(function (word) {
        var candidate = line + " " + word;
        if (whiteboardContext.measureText(candidate).width > maxWidth) {
          whiteboardContext.fillText(line, x, y);
          line = word;
          y += lineHeight;
        } else {
          line = candidate;
        }
      });
      whiteboardContext.fillText(line, x, y);
      y += lineHeight;
    });
    whiteboardContext.restore();
  }

  function drawStroke(stroke) {
    if (stroke && stroke.type === "text") {
      drawTextItem(stroke);
      return;
    }
    if (!stroke || !stroke.points || !stroke.points.length) return;
    var width = whiteboardCanvas.clientWidth;
    var height = whiteboardCanvas.clientHeight;
    whiteboardContext.save();
    whiteboardContext.globalCompositeOperation = stroke.tool === "eraser" ? "destination-out" : "source-over";
    whiteboardContext.strokeStyle = stroke.color;
    whiteboardContext.fillStyle = stroke.color;
    whiteboardContext.lineWidth = stroke.size;
    whiteboardContext.lineCap = "round";
    whiteboardContext.lineJoin = "round";
    if (stroke.points.length === 1) {
      whiteboardContext.beginPath();
      whiteboardContext.arc(stroke.points[0].x * width, stroke.points[0].y * height, stroke.size / 2, 0, Math.PI * 2);
      whiteboardContext.fill();
    } else {
      whiteboardContext.beginPath();
      whiteboardContext.moveTo(stroke.points[0].x * width, stroke.points[0].y * height);
      stroke.points.slice(1).forEach(function (point) {
        whiteboardContext.lineTo(point.x * width, point.y * height);
      });
      whiteboardContext.stroke();
    }
    whiteboardContext.restore();
  }

  function renderWhiteboard() {
    whiteboardContext.clearRect(0, 0, whiteboardCanvas.clientWidth, whiteboardCanvas.clientHeight);
    whiteboardStrokes.forEach(drawStroke);
    if (activeStroke) drawStroke(activeStroke);
  }

  function resizeWhiteboard() {
    var width = Math.max(1, whiteboardCanvas.clientWidth);
    var height = Math.max(1, whiteboardCanvas.clientHeight);
    var ratio = window.devicePixelRatio || 1;
    whiteboardCanvas.width = Math.round(width * ratio);
    whiteboardCanvas.height = Math.round(height * ratio);
    whiteboardContext.setTransform(ratio, 0, 0, ratio, 0, 0);
    renderWhiteboard();
  }

  function boardPoint(event) {
    var bounds = whiteboardCanvas.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)),
      y: Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height))
    };
  }

  function hideTextEditor() {
    whiteboardTextEditor.hidden = true;
    whiteboardTextEditor.value = "";
    delete whiteboardTextEditor.dataset.x;
    delete whiteboardTextEditor.dataset.y;
  }

  function commitTextEditor() {
    if (whiteboardTextEditor.hidden) return;
    var text = whiteboardTextEditor.value.trim();
    if (text) {
      whiteboardStrokes.push({
        type: "text",
        x: Number(whiteboardTextEditor.dataset.x),
        y: Number(whiteboardTextEditor.dataset.y),
        text: text,
        color: boardColor,
        size: boardTextSize
      });
      saveWhiteboard();
    }
    hideTextEditor();
    renderWhiteboard();
  }

  function cancelTextEditor() {
    if (whiteboardTextEditor.hidden) return;
    hideTextEditor();
    renderWhiteboard();
  }

  function openTextEditor(point) {
    commitTextEditor();
    var surfaceBounds = whiteboardCanvas.parentElement.getBoundingClientRect();
    var canvasBounds = whiteboardCanvas.getBoundingClientRect();
    var editorWidth = Math.min(560, Math.max(240, canvasBounds.width - 24));
    var left = point.x * canvasBounds.width;
    var top = point.y * canvasBounds.height;
    if (left + editorWidth > canvasBounds.width - 12) left = Math.max(12, canvasBounds.width - editorWidth - 12);
    if (top > canvasBounds.height - 90) top = Math.max(12, canvasBounds.height - 90);
    whiteboardTextEditor.style.left = (canvasBounds.left - surfaceBounds.left + left) + "px";
    whiteboardTextEditor.style.top = (canvasBounds.top - surfaceBounds.top + top) + "px";
    whiteboardTextEditor.style.width = editorWidth + "px";
    whiteboardTextEditor.style.fontSize = boardTextSize + "px";
    whiteboardTextEditor.style.color = boardColor;
    whiteboardTextEditor.dataset.x = String(left / canvasBounds.width);
    whiteboardTextEditor.dataset.y = String(top / canvasBounds.height);
    whiteboardTextEditor.hidden = false;
    whiteboardTextEditor.focus();
  }

  function openWhiteboard() {
    setTeacher(false);
    whiteboard.classList.add("open");
    whiteboard.setAttribute("aria-hidden", "false");
    whiteboardOpenButton.setAttribute("aria-pressed", "true");
    window.requestAnimationFrame(resizeWhiteboard);
  }

  function closeWhiteboard() {
    commitTextEditor();
    if (whiteboardMode && window.opener) {
      window.close();
      return;
    }
    if (whiteboardMode) {
      window.location.href = "classroom.html?lesson=" + lesson.id + "&slide=" + current;
      return;
    }
    whiteboard.classList.remove("open");
    whiteboard.setAttribute("aria-hidden", "true");
    whiteboardOpenButton.setAttribute("aria-pressed", "false");
  }

  whiteboardCanvas.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    if (boardTool === "text") {
      openTextEditor(boardPoint(event));
      return;
    }
    commitTextEditor();
    whiteboardCanvas.setPointerCapture(event.pointerId);
    activeStroke = {
      tool: boardTool,
      color: boardColor,
      size: boardTool === "eraser" ? boardSize * 3 : boardSize,
      points: [boardPoint(event)]
    };
    renderWhiteboard();
  });
  whiteboardCanvas.addEventListener("pointermove", function (event) {
    if (!activeStroke) return;
    event.preventDefault();
    var point = boardPoint(event);
    var previousPoint = activeStroke.points[activeStroke.points.length - 1];
    if (Math.abs(point.x - previousPoint.x) + Math.abs(point.y - previousPoint.y) < .001) return;
    activeStroke.points.push(point);
    renderWhiteboard();
  });
  function finishStroke(event) {
    if (!activeStroke) return;
    if (event && whiteboardCanvas.hasPointerCapture(event.pointerId)) whiteboardCanvas.releasePointerCapture(event.pointerId);
    whiteboardStrokes.push(activeStroke);
    activeStroke = null;
    saveWhiteboard();
    renderWhiteboard();
  }
  whiteboardCanvas.addEventListener("pointerup", finishStroke);
  whiteboardCanvas.addEventListener("pointercancel", finishStroke);

  document.querySelectorAll("[data-board-tool]").forEach(function (button) {
    button.addEventListener("click", function () {
      commitTextEditor();
      boardTool = button.getAttribute("data-board-tool");
      whiteboard.classList.toggle("eraser-active", boardTool === "eraser");
      whiteboard.classList.toggle("text-active", boardTool === "text");
      document.querySelectorAll("[data-board-tool]").forEach(function (item) {
        var active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });
  });
  document.querySelectorAll("[data-board-color]").forEach(function (button) {
    button.addEventListener("click", function () {
      boardColor = button.getAttribute("data-board-color");
      if (boardTool !== "text") boardTool = "pen";
      whiteboard.classList.remove("eraser-active");
      whiteboard.classList.toggle("text-active", boardTool === "text");
      document.querySelectorAll("[data-board-color]").forEach(function (item) {
        var active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll("[data-board-tool]").forEach(function (item) {
        var active = item.getAttribute("data-board-tool") === boardTool;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });
  });
  document.querySelectorAll("[data-board-size]").forEach(function (button) {
    button.addEventListener("click", function () {
      boardSize = Number(button.getAttribute("data-board-size"));
      boardTextSize = Number(button.getAttribute("data-text-size"));
      document.querySelectorAll("[data-board-size]").forEach(function (item) {
        var active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });
  });
  whiteboardTextEditor.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      cancelTextEditor();
    }
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      commitTextEditor();
    }
  });
  whiteboardTextEditor.addEventListener("blur", commitTextEditor);
  whiteboardOpenButton.addEventListener("click", openWhiteboard);
  document.getElementById("whiteboard-close").addEventListener("click", closeWhiteboard);
  document.getElementById("whiteboard-new-tab").addEventListener("click", function () {
    commitTextEditor();
    var whiteboardWindow = window.open("classroom.html?lesson=" + lesson.id + "&slide=" + current + "&whiteboard=1", "linkit2-whiteboard");
    if (whiteboardWindow) {
      whiteboardWindow.focus();
      if (!whiteboardMode) closeWhiteboard();
    }
  });
  document.getElementById("whiteboard-undo").addEventListener("click", function () {
    commitTextEditor();
    whiteboardStrokes.pop();
    saveWhiteboard();
    renderWhiteboard();
  });
  document.getElementById("whiteboard-clear").addEventListener("click", function () {
    if (!whiteboardStrokes.length || window.confirm("Clear everything from this whiteboard?")) {
      cancelTextEditor();
      whiteboardStrokes = [];
      activeStroke = null;
      saveWhiteboard();
      renderWhiteboard();
    }
  });
  window.addEventListener("resize", function () {
    if (whiteboard.classList.contains("open")) resizeWhiteboard();
  });
  window.addEventListener("storage", function (event) {
    if (event.key === whiteboardKey) {
      loadWhiteboard();
      renderWhiteboard();
    }
  });
  function drawTimer() {
    var minutes = Math.floor(timerSeconds / 60);
    var seconds = timerSeconds % 60;
    timerDisplay.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  }
  function stopTimer() {
    window.clearInterval(timerHandle);
    timerHandle = null;
    document.getElementById("timer-start").textContent = timerSeconds === 0 ? "Done" : "Start";
  }
  document.getElementById("timer-open").addEventListener("click", function () { timerDialog.showModal(); });
  timerDialog.querySelectorAll("[data-minutes]").forEach(function (button) {
    button.addEventListener("click", function () {
      stopTimer();
      timerInitial = Number(button.getAttribute("data-minutes")) * 60;
      timerSeconds = timerInitial;
      drawTimer();
    });
  });
  document.getElementById("timer-start").addEventListener("click", function () {
    if (timerHandle) { stopTimer(); return; }
    if (timerSeconds === 0) timerSeconds = timerInitial;
    document.getElementById("timer-start").textContent = "Pause";
    timerHandle = window.setInterval(function () {
      timerSeconds -= 1;
      drawTimer();
      if (timerSeconds <= 0) {
        stopTimer();
        timerDisplay.textContent = "TIME!";
      }
    }, 1000);
  });
  document.getElementById("timer-reset").addEventListener("click", function () { stopTimer(); timerSeconds = timerInitial; drawTimer(); });
  loadWhiteboard();
  render();
  if (whiteboardMode) {
    document.getElementById("whiteboard-close").textContent = "Close tab";
    openWhiteboard();
  }
}());
