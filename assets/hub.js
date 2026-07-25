(function () {
  "use strict";
  var container = document.getElementById("lesson-route");
  if (!container || !window.COURSE_LESSONS) return;

  function isComplete(id) {
    return localStorage.getItem("linkit2-lesson-" + id) === "complete";
  }

  container.innerHTML = window.COURSE_LESSONS.map(function (lesson) {
    var unitTwo = lesson.id > 2 ? " unit-two" : "";
    var complete = isComplete(lesson.id) ? " completed" : "";
    var dateBits = lesson.shortDate.split(" ");
    return '<a class="lesson-card' + unitTwo + complete + '" href="classroom.html?lesson=' + lesson.id + '">' +
      '<div class="date-medallion"><small>' + dateBits[0] + '</small><strong>' + dateBits[1] + '</strong></div>' +
      '<div class="lesson-main"><small>' + lesson.unit.toUpperCase() + ' · ' + lesson.pages.toUpperCase() + '</small><h3>' + lesson.title + '</h3><p>' + lesson.subtitle + '</p></div>' +
      '<div class="lesson-product"><strong>Final evidence</strong><p>' + lesson.product + '</p></div>' +
      '<span class="lesson-open" aria-hidden="true">→</span></a>';
  }).join("");
}());
