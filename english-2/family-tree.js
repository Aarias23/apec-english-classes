(function () {
  "use strict";
  var relationships = {
    carlos: ["Carlos is Camila’s grandfather.", "He is Miguel and Lucía’s father."],
    elena: ["Elena is Camila’s grandmother.", "She is Miguel and Lucía’s mother."],
    miguel: ["Miguel is Camila’s father.", "He is Sofía’s husband and Lucía’s brother."],
    sofia: ["Sofía is Camila’s mother.", "She is Miguel’s wife and Mateo’s mother."],
    lucia: ["Lucía is Camila’s aunt.", "She is Miguel’s sister and Leo’s mother."],
    daniel: ["Daniel is Camila’s uncle.", "He is Lucía’s husband and Leo’s father."],
    mateo: ["Mateo is Camila’s brother.", "He is Miguel and Sofía’s son."],
    camila: ["Camila is the focus person.", "She is Mateo’s sister and Leo’s cousin."],
    leo: ["Leo is Camila’s cousin.", "He is Lucía and Daniel’s son."]
  };
  var sentence = document.getElementById("relation-sentence");
  var detail = document.getElementById("relation-detail");
  document.querySelectorAll("[data-person]").forEach(function (card) {
    card.addEventListener("click", function () {
      document.querySelectorAll("[data-person]").forEach(function (item) { item.classList.remove("active"); });
      card.classList.add("active");
      var information = relationships[card.getAttribute("data-person")];
      sentence.textContent = information[0];
      detail.textContent = information[1];
    });
  });
  var selects = Array.from(document.querySelectorAll("#quiz select"));
  selects.forEach(function (select) {
    select.addEventListener("change", function () {
      var label = select.closest("label");
      var correct = select.value === select.getAttribute("data-answer");
      label.classList.toggle("correct", correct);
      label.classList.toggle("incorrect", Boolean(select.value) && !correct);
      label.querySelector(".result").textContent = select.value ? (correct ? "✓" : "×") : "";
      document.getElementById("score").textContent = selects.filter(function (item) { return item.value === item.getAttribute("data-answer"); }).length;
    });
  });
}());
