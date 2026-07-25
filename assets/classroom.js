(function () {
  "use strict";
  var params = new URLSearchParams(window.location.search);
  var lessonId = Math.min(4, Math.max(1, Number(params.get("lesson")) || 1));
  var lesson = window.COURSE_LESSONS.find(function (item) { return item.id === lessonId; });
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

  document.title = lesson.title + " · Link It! 2";
  document.getElementById("lesson-label").textContent = "Class " + String(lesson.id).padStart(2, "0");
  document.getElementById("lesson-date").textContent = lesson.date;
  document.getElementById("page-range").textContent = lesson.pages.replace("Student Book", "SB");

  function teacherMarkup(teacher) {
    return '<section class="teacher-section"><small>PURPOSE</small><p>' + teacher.purpose + '</p></section>' +
      '<section class="teacher-section"><small>TEACHER SAYS</small><p>“' + teacher.say + '”</p></section>' +
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
            feedback.textContent = "Correct — explain the evidence to a partner.";
          } else {
            button.classList.add("wrong");
            feedback.textContent = "Not yet — look for the subject, time signal or context.";
          }
        });
      });
    });
  }

  function updateUrl() {
    history.replaceState(null, "", "classroom.html?lesson=" + lesson.id + "&slide=" + current);
  }

  function render() {
    var slide = lesson.slides[current];
    var theme = lesson.color === "coral" && (current === 0 || current === lesson.slides.length - 1) ? "coral-slide" : (current === 0 ? "dark-slide" : "");
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
    if (timerDialog.open) return;
    if (event.key === "ArrowRight" || event.key === "PageDown") next.click();
    if (event.key === "ArrowLeft" || event.key === "PageUp") previous.click();
    if (event.key.toLowerCase() === "t") setTeacher(!teacherPanel.classList.contains("open"));
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
  render();
}());
