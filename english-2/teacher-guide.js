(function () {
  "use strict";
  var guides = window.ENGLISH2_TEACHER_GUIDE || [];
  var params = new URLSearchParams(window.location.search);
  var current = Math.min(guides.length - 1, Math.max(0, Number(params.get("slide")) || 0));
  var list = document.getElementById("guide-list");
  var content = document.getElementById("guide-content");
  var previous = document.getElementById("guide-previous");
  var next = document.getElementById("guide-next");
  var classroomWindow = window.opener && !window.opener.closed ? window.opener : null;

  function listMarkup(items, ordered) {
    var tag = ordered ? "ol" : "ul";
    return "<" + tag + ">" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</" + tag + ">";
  }
  function render() {
    var guide = guides[current];
    if (!guide) return;
    document.getElementById("guide-position").textContent = "Slide " + String(current + 1).padStart(2, "0") + " / " + String(guides.length).padStart(2, "0");
    document.getElementById("guide-resource").textContent = guide.resource;
    document.getElementById("guide-counter").textContent = String(current + 1).padStart(2, "0") + " / " + String(guides.length).padStart(2, "0");
    document.getElementById("guide-progress-bar").style.width = ((current + 1) / guides.length * 100) + "%";
    content.innerHTML = '<section class="guide-hero"><div class="guide-kicker"><span>SLIDE ' + String(current + 1).padStart(2, "0") + ' · ' + guide.resource + '</span><span>' + guide.duration + '</span></div><h1>' + guide.title + '</h1><p class="objective"><strong>Objetivo docente:</strong> ' + guide.objective + '</p></section>' +
      '<div class="guide-grid">' +
      '<section class="guide-card wide"><h2><span>◎</span> Explicación que debes enseñar</h2>' + guide.explain.map(function (paragraph) { return "<p>" + paragraph + "</p>"; }).join("") + '</section>' +
      '<section class="guide-card"><h2><span>Aa</span> Lenguaje clave</h2><div class="language-chips">' + guide.language.map(function (item) { return "<span>" + item + "</span>"; }).join("") + '</div></section>' +
      '<section class="guide-card"><h2><span>✓</span> Ejemplos para modelar</h2><div class="example-list">' + guide.examples.map(function (item) { return '<div class="example">' + item + '</div>'; }).join("") + '</div></section>' +
      '<section class="guide-card"><h2><span>◷</span> Secuencia sugerida</h2>' + listMarkup(guide.flow, true) + '</section>' +
      '<section class="guide-card accent"><h2><span>✎</span> Plan para la pizarra</h2><div class="board-plan">' + guide.board + '</div></section>' +
      '<section class="guide-card"><h2><span>?</span> Comprueba comprensión</h2>' + listMarkup(guide.checks, false) + '</section>' +
      '<section class="guide-card warning"><h2><span>!</span> Errores frecuentes</h2>' + listMarkup(guide.pitfalls, false) + '</section>' +
      '<section class="guide-card"><h2><span>↘</span> Apoyo</h2><p>' + guide.support + '</p></section>' +
      '<section class="guide-card"><h2><span>↗</span> Extensión</h2><p>' + guide.extension + '</p></section>' +
      '</div>';
    previous.disabled = current === 0;
    next.disabled = current === guides.length - 1;
    list.querySelectorAll(".guide-jump").forEach(function (button, index) { button.classList.toggle("active", index === current); });
    var active = list.children[current];
    if (active) active.scrollIntoView({ block: "nearest", inline: "nearest" });
    history.replaceState(null, "", "teacher-guide.html?slide=" + current);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function selectSlide(index, notifyClassroom) {
    current = Math.min(guides.length - 1, Math.max(0, index));
    render();
    if (notifyClassroom && classroomWindow && !classroomWindow.closed) classroomWindow.postMessage({ type: "english2-guide-slide", slide: current }, "*");
  }
  list.innerHTML = guides.map(function (guide, index) {
    return '<button class="guide-jump" data-index="' + index + '" type="button"><span>' + String(index + 1).padStart(2, "0") + '</span><div><strong>' + guide.title + '</strong><small>' + guide.resource + '</small></div></button>';
  }).join("");
  list.addEventListener("click", function (event) { var button = event.target.closest("[data-index]"); if (button) selectSlide(Number(button.getAttribute("data-index")), true); });
  previous.addEventListener("click", function () { if (current > 0) selectSlide(current - 1, true); });
  next.addEventListener("click", function () { if (current < guides.length - 1) selectSlide(current + 1, true); });
  document.getElementById("show-classroom").addEventListener("click", function () {
    if (!classroomWindow || classroomWindow.closed) classroomWindow = window.open("index.html?slide=" + current, "english2-classroom");
    else { classroomWindow.postMessage({ type: "english2-guide-slide", slide: current }, "*"); classroomWindow.focus(); }
  });
  window.addEventListener("message", function (event) { if (event.data && event.data.type === "english2-class-slide") selectSlide(Number(event.data.slide), false); });
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "PageDown") next.click();
    if (event.key === "ArrowLeft" || event.key === "PageUp") previous.click();
  });
  render();
}());
