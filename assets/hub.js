(function () {
  "use strict";
  var container = document.getElementById("lesson-route");
  if (!container || !window.COURSE_LESSONS) return;
  function isComplete(id) { return localStorage.getItem("linkit2-lesson-" + id) === "complete"; }
  container.innerHTML = window.COURSE_LESSONS.map(function (lesson) {
    var unitClass = lesson.id <= 2 ? " unit-one" : (lesson.id <= 4 ? " unit-two" : (lesson.id <= 6 ? " unit-three" : " unit-four"));
    var complete = isComplete(lesson.id) ? " completed" : "";
    var dateBits = lesson.shortDate.split(" ");
    var badges = "";
    if (lesson.bookStops) badges += '<span>' + lesson.bookStops + ' Book Stops</span>';
    if (lesson.checkpoints) badges += '<span>' + lesson.checkpoints + ' Checkpoints</span>';
    return '<a class="lesson-card' + unitClass + complete + '" href="classroom.html?lesson=' + lesson.id + '">' +
      '<div class="date-medallion"><small>' + dateBits[0] + '</small><strong>' + dateBits[1] + '</strong></div>' +
      '<div class="lesson-main"><small>' + lesson.unit.toUpperCase() + ' &middot; ' + lesson.pages.toUpperCase() + '</small><h3>' + lesson.title + '</h3><p>' + lesson.subtitle + '</p><div class="route-badges">' + badges + '</div></div>' +
      '<div class="lesson-product"><strong>Final evidence</strong><p>' + lesson.product + '</p></div><span class="lesson-open" aria-hidden="true">&rarr;</span></a>';
  }).join("");
}());
