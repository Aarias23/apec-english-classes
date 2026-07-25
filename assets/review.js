(function () {
  "use strict";
  var stationState = {};
  var checks = Array.from(document.querySelectorAll(".readiness-check"));
  var oral = document.getElementById("oral-check");

  function updateReadiness() {
    var correctStations = Object.keys(stationState).filter(function (key) { return stationState[key]; }).length;
    var checked = checks.filter(function (box) { return box.checked; }).length;
    var oralPoint = oral.checked ? 1 : 0;
    var total = 3 + checks.length + 1;
    var score = Math.round((correctStations + checked + oralPoint) / total * 100);
    document.getElementById("readiness-fill").style.width = score + "%";
    document.getElementById("readiness-text").textContent = score + "% ready";
    localStorage.setItem("linkit2-readiness", String(score));
  }

  document.querySelectorAll(".review-options").forEach(function (group) {
    var card = group.closest("[data-station]");
    var station = card.getAttribute("data-station");
    var correct = group.getAttribute("data-answer");
    var feedback = card.querySelector(".review-feedback");
    group.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        group.querySelectorAll("button").forEach(function (item) { item.classList.remove("correct", "wrong"); });
        var isCorrect = button.textContent.trim() === correct;
        button.classList.add(isCorrect ? "correct" : "wrong");
        stationState[station] = isCorrect;
        feedback.textContent = isCorrect ? "Correct — explain why." : "Review this station and try again.";
        updateReadiness();
      });
    });
  });
  checks.concat([oral]).forEach(function (box) { box.addEventListener("change", updateReadiness); });
  updateReadiness();
}());
