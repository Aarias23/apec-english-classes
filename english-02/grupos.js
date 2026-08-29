const STUDENTS = [
  "YOLENNY ARIAS ARIAS",
  "ODETTE ABRIL AYBAR DIAZ",
  "JOHANNA ALEXANDRA BELTRE JAVIER",
  "YENNIFER CASILLA FRANJUL",
  "YORQUIRY DE LEON GAVILAN",
  "LEONARDO DIAZ RAMIREZ",
  "EDERLYN ELIAS ENCARNACION",
  "DOMINIC YUDELYS FABIAN GARCIA",
  "WILNER FRANCISCO MATEO SANTANA",
  "DINANYELI MENDEZ VASQUEZ",
  "VIANNY MONTERO CASTILLO",
  "CHEISI NOVA MORFA",
  "JAROLY NICOLE PAYANO GARCIA",
  "YANEIRIS ALTAGRACIA PEÑA TORIBIO",
  "MICHAEL REYES BAEZ",
  "CYNTHIA NICOLE RODRIGUEZ CRISOSTOMO",
  "MARIA CLARA SORIANO PINALES",
  "DIEGO ISRAEL TERUEL BATISTA",
  "JASMIN TIBURCIO MELO",
  "NATALIA MICHEL VASQUEZ MATIAS"
];

const TOPICS = [
  { id:"a", short:"Town-to-Table", title:"Town-to-Table Healthy Shopping" },
  { id:"b", short:"Everyday World", title:"Our Everyday World" }
];

const CRITERIA = ["participation","english","collaboration","speaking"];
const GROUPS_KEY = "english02-random-groups";
const SCORES_KEY = "english02-individual-rubric";

function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index],result[swapIndex]] = [result[swapIndex],result[index]];
  }
  return result;
}

function createGroups(students, random = Math.random) {
  if (students.length !== 20) throw new Error("Se requieren exactamente 20 estudiantes.");
  const mixed = shuffle(students,random);
  return Array.from({length:5},(_,index) => ({ number:index + 1, members:mixed.slice(index * 4,index * 4 + 4), topic:null }));
}

function assignTwoTopics(groups, random = Math.random) {
  const updated = groups.map(group => ({...group,topic:null}));
  const chosenGroups = shuffle(updated.map((_,index) => index),random).slice(0,2);
  const topics = shuffle(TOPICS,random);
  chosenGroups.forEach((groupIndex,index) => { updated[groupIndex].topic = topics[index]; });
  return updated;
}

function scoreTotal(studentScores = {}) {
  return CRITERIA.reduce((sum,criterion) => sum + Number(studentScores[criterion] || 0),0);
}

if (typeof document !== "undefined") {
  let groups = JSON.parse(localStorage.getItem(GROUPS_KEY) || "null");
  let scores = JSON.parse(localStorage.getItem(SCORES_KEY) || "{}");
  let toastTimer;

  const groupsGrid = document.getElementById("groups-grid");
  const rubricGroups = document.getElementById("rubric-groups");
  const emptyState = document.getElementById("empty-state");
  const topicsButton = document.getElementById("topics-button");
  const status = document.getElementById("generation-status");

  function safeId(name) { return name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]+/g,"-").toLowerCase(); }
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"),2200);
  }
  function persistGroups() { localStorage.setItem(GROUPS_KEY,JSON.stringify(groups)); }
  function persistScores() { localStorage.setItem(SCORES_KEY,JSON.stringify(scores)); }

  function renderGroups() {
    const hasGroups = Array.isArray(groups) && groups.length === 5;
    emptyState.hidden = hasGroups;
    topicsButton.disabled = !hasGroups;
    if (!hasGroups) { groupsGrid.innerHTML = ""; rubricGroups.innerHTML = ""; return; }
    groupsGrid.innerHTML = groups.map(group => {
      const stateClass = group.topic ? `assigned-${group.topic.id}` : "unassigned";
      const badge = group.topic ? `Tema ${group.topic.id.toUpperCase()}` : "Sin tema";
      const topic = group.topic ? `<strong>${group.topic.title}</strong>Proyecto asignado para este grupo.` : `<strong>Sin tema asignado</strong>Este grupo no presenta uno de los dos proyectos.`;
      return `<article class="group-card ${stateClass}"><div class="group-head"><div class="group-number"><strong>Grupo ${group.number}</strong><span class="assignment-badge">${badge}</span></div></div><div class="members">${group.members.map(member => `<div class="member">${member}</div>`).join("")}</div><div class="group-topic">${topic}</div></article>`;
    }).join("");
    renderRubrics();
    const assigned = groups.filter(group => group.topic).map(group => `Grupo ${group.number}: ${group.topic.short}`).join(" · ");
    status.textContent = assigned;
  }

  function scoreOptions(selected) {
    return [0,.25,.5].map(value => `<option value="${value}" ${Number(selected) === value ? "selected" : ""}>${value.toFixed(2)}</option>`).join("");
  }

  function renderRubrics() {
    rubricGroups.innerHTML = groups.map((group,index) => `<details class="rubric-group" ${index === 0 ? "open" : ""}><summary>Grupo ${group.number}<span>${group.topic ? group.topic.title : "Sin tema asignado"}</span></summary><div class="table-wrap"><table class="rubric-table"><thead><tr><th>Estudiante</th><th>Participación</th><th>Inglés objetivo</th><th>Colaboración</th><th>Contribución oral</th><th>Total / 2.0</th></tr></thead><tbody>${group.members.map(student => {
      const id = safeId(student);
      const studentScores = scores[student] || {};
      return `<tr data-student="${student}"><td>${student}</td>${CRITERIA.map(criterion => `<td><label class="sr-only" for="${id}-${criterion}">${criterion} de ${student}</label><select class="score-select" id="${id}-${criterion}" data-criterion="${criterion}">${scoreOptions(studentScores[criterion])}</select></td>`).join("")}<td><output class="student-total">${scoreTotal(studentScores).toFixed(2)}</output></td></tr>`;
    }).join("")}</tbody></table></div></details>`).join("");
  }

  document.getElementById("generate-button").addEventListener("click",() => {
    groups = assignTwoTopics(createGroups(STUDENTS));
    scores = {};
    persistGroups(); persistScores(); renderGroups();
    showToast("5 grupos creados; 2 temas asignados al azar.");
  });

  topicsButton.addEventListener("click",() => {
    groups = assignTwoTopics(groups);
    persistGroups(); renderGroups();
    showToast("Los dos temas fueron reasignados.");
  });

  rubricGroups.addEventListener("change",event => {
    const select = event.target.closest(".score-select");
    if (!select) return;
    const row = select.closest("[data-student]");
    const student = row.dataset.student;
    scores[student] = scores[student] || {};
    scores[student][select.dataset.criterion] = Number(select.value);
    row.querySelector(".student-total").textContent = scoreTotal(scores[student]).toFixed(2);
    persistScores();
  });

  document.getElementById("reset-scores").addEventListener("click",() => {
    if (!Object.keys(scores).length || window.confirm("¿Deseas borrar todas las calificaciones registradas?")) {
      scores = {}; persistScores();
      if (groups) renderRubrics();
      showToast("Calificaciones reiniciadas.");
    }
  });
  document.getElementById("print-button").addEventListener("click",() => window.print());

  let printOpenStates = [];
  window.addEventListener("beforeprint",() => {
    const sections = [...document.querySelectorAll(".rubric-group")];
    printOpenStates = sections.map(section => section.open);
    sections.forEach(section => { section.open = true; });
  });
  window.addEventListener("afterprint",() => {
    document.querySelectorAll(".rubric-group").forEach((section,index) => { section.open = printOpenStates[index] ?? false; });
  });

  renderGroups();
}

if (typeof module !== "undefined") module.exports = { STUDENTS, TOPICS, CRITERIA, shuffle, createGroups, assignTwoTopics, scoreTotal };
