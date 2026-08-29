const GROUPS_KEY = "english02-random-groups";
const CHECKLIST_KEY = "eng2-final-project-checklist";

const PROJECTS = [
  {
    number: 1, code: "CAREER EXPO", title: "The Global Career Fair", color: "coral",
    hook: "Design an international career booth that helps visitors discover a place, a lifestyle and the right profession for them.",
    question: "What job fits this place and this way of life?",
    scenario: "Your team represents one city or country at a school career fair. Visitors need to understand daily life there, where to live and eat, how to move around, and what a selected professional can and has to do.",
    product: "An interactive career-fair booth with a city profile, one professional profile, a mini map and a live recruiter–applicant interview.",
    scenes: [["Welcome", "Introduce the destination, a family or household, one routine and a realistic weekly schedule."], ["Live there", "Show a neighborhood map and guide a newcomer from home to two important places."], ["Eat there", "Recommend a healthy workday meal and explain what to buy and in what quantities."], ["Work there", "Present one profession; interview an applicant about abilities, limits and workplace obligations."]],
    deliverables: ["5–8 slide booth or poster", "labeled neighborhood map", "professional profile / job card", "shopping list or meal card", "live job interview"],
    language: ["usually / every day / at…", "there is / there are", "some / any / much / many", "go straight / turn / next to", "worked / visited / went / had", "can / can’t / must / has to"],
    roles: [["Destination host", "opens the booth and presents daily life"], ["City guide", "explains the map and gives directions"], ["Wellness planner", "presents food, shopping and quantities"], ["Recruiter / applicant", "leads the job profile and interview"]]
  },
  {
    number: 2, code: "WELCOME KIT", title: "A New Employee’s First Week", color: "blue",
    hook: "Create a survival guide for an international employee who is moving to your city for a new job.",
    question: "How can we help a newcomer live, eat, travel and work successfully?",
    scenario: "A new employee arrives with little knowledge of the city. Your team is the orientation department. Plan the employee’s first week and prevent the most common problems.",
    product: "A newcomer welcome kit with a schedule, neighborhood guide, food plan, first-day story and workplace orientation role-play.",
    scenes: [["Meet the newcomer", "Invent a respectful personal profile, household and normal routine."], ["Plan the week", "Show work hours and two scheduled activities with clear times."], ["Survive the city", "Give directions from the new home to work and a place to buy food."], ["Start the job", "Narrate what happened on the first day, then explain skills and workplace rules."]],
    deliverables: ["one-page welcome guide or 5–8 slides", "weekly timetable", "route map with landmarks", "starter grocery list", "orientation role-play"],
    language: ["simple-present routine", "time and schedules", "some / any + 4 quantities", "first / then / after that / finally", "4+ past-tense events", "can / can’t / must / have to"],
    roles: [["Welcome coordinator", "introduces the employee and schedule"], ["Neighborhood guide", "presents the home area and directions"], ["Food adviser", "creates the first-week shopping plan"], ["Workplace trainer", "narrates day one and explains job rules"]]
  },
  {
    number: 3, code: "SOCIAL ENTERPRISE", title: "World Café: From Market to Team", color: "gold",
    hook: "Launch a healthy international café and prove that its menu, location and staff can work together.",
    question: "What does a successful, healthy and responsible café need?",
    scenario: "Your team has been invited to pitch a café inspired by a country or culture. The investors want a clear daily operation, a healthy menu, an accessible location and a capable staff.",
    product: "A café pitch with a menu, shopping plan, town map, opening-day story and a live hiring/training scene.",
    scenes: [["The concept", "Name the café, destination inspiration, target customer and normal opening schedule."], ["The menu", "Present a healthy meal or menu with countable and uncountable ingredients and quantities."], ["The location", "Show where the café is, give directions and explain why the site is convenient."], ["The team", "Tell an opening-day story and hire workers based on skills, abilities and obligations."]],
    deliverables: ["café identity + 5–8 slide pitch", "menu with prices or portions", "shopping list with quantities", "location map", "hiring or training role-play"],
    language: ["opens / serves / usually", "there is / are + place words", "a/an/some/any/much/many", "directions + 4 past events", "cook / server / manager / cashier", "can / can’t / must / have to"],
    roles: [["Founder", "presents the concept, audience and routine"], ["Menu designer", "explains healthy choices and quantities"], ["Location manager", "presents the map, route and opening day"], ["HR manager", "runs the hiring or training conversation"]]
  },
  {
    number: 4, code: "MINI DOCUMENTARY", title: "A Day with a Professional", color: "violet",
    hook: "Produce a live documentary episode about one professional and the community around their work.",
    question: "How does one person’s work connect to everyday community life?",
    scenario: "Your media team follows a professional in any country for one day. The episode must show the person’s routine, lunch, travel through town, a memorable past event and the realities of the job.",
    product: "A documentary-style presentation with host narration, an interview, a day map/timeline and one recreated scene.",
    scenes: [["Before work", "Introduce the professional, family context, routine and work schedule."], ["Lunch break", "Describe what the person eats, what is available and the quantities needed."], ["On location", "Use a map to give directions and narrate a past work event in sequence."], ["Inside the job", "Interview the professional about skills, things they can’t do, and rules they must follow."]],
    deliverables: ["5–8 documentary slides or storyboard", "day timeline", "route map", "meal card", "live interview + recreated past scene"],
    language: ["third-person simple present", "frequency + schedule expressions", "food and quantity language", "sequenced simple past", "direction phrases", "can / can’t / must / has to"],
    roles: [["Studio host", "introduces and connects the documentary"], ["Field reporter", "covers routine, schedule and city route"], ["Professional", "answers the interview and explains the job"], ["Producer / eyewitness", "covers food and recreates the past event"]]
  },
  {
    number: 5, code: "COMMUNITY DESIGN", title: "The Skills Center for Everyone", color: "mint",
    hook: "Propose an inclusive community center where people can learn practical skills for life and work.",
    question: "How can one place help different people live and work better?",
    scenario: "The city wants to transform an empty building. Your team must convince the community council that your center is useful, easy to reach, healthy and connected to real professions.",
    product: "A council proposal with a floor plan, weekly program, healthy café plan, community success story and live public meeting.",
    scenes: [["The community", "Introduce two fictional users, their families or routines, and the needs the center solves."], ["The program", "Present a weekly timetable of classes connected to skills and professions."], ["The place", "Explain the floor plan, give directions to the center and include a healthy café shopping plan."], ["The impact", "Tell a past success story, then explain what staff and users can, must and have to do."]],
    deliverables: ["5–8 slide council proposal", "floor plan + town route", "weekly program", "café list with quantities", "public-meeting role-play"],
    language: ["routines + schedules", "there is / are + prepositions", "some / any / much / many", "directions + sequenced past", "skills and profession words", "can / can’t / must / have to"],
    roles: [["Community researcher", "presents users, routines and needs"], ["Program director", "presents classes, jobs and schedule"], ["Space & food designer", "explains maps, directions and café plan"], ["Council spokesperson", "tells the impact story and leads questions"]]
  }
];

const tabs = document.getElementById("group-tabs");
const panel = document.getElementById("project-panel");
const syncStatus = document.getElementById("group-sync-status");
let storedGroups = [];

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));
}

function readGroups() {
  try {
    const value = JSON.parse(localStorage.getItem(GROUPS_KEY) || "[]");
    return Array.isArray(value) && value.length === 5 ? value : [];
  } catch { return []; }
}

function memberMarkup(project) {
  const saved = storedGroups.find(group => Number(group.number) === project.number);
  if (!saved || !Array.isArray(saved.members)) return `<div class="missing-members"><p><strong>Members not found on this device.</strong> Generate or open the saved teams first, then return here.</p><a href="../english-02/grupos.html">Open grupos.html →</a></div>`;
  return `<ol class="member-list">${saved.members.map((member, index) => `<li><span>${index + 1}</span>${escapeHtml(member)}</li>`).join("")}</ol>`;
}

function renderProject(number, updateHistory = true) {
  const project = PROJECTS.find(item => item.number === number) || PROJECTS[0];
  [...tabs.querySelectorAll("button")].forEach(button => {
    const selected = Number(button.dataset.group) === project.number;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  panel.className = `project-panel theme-${project.color}`;
  panel.innerHTML = `<div class="project-masthead"><div class="project-number"><span>GROUP</span><strong>${String(project.number).padStart(2, "0")}</strong></div><div class="project-title"><p>${project.code}</p><h2>${project.title}</h2><blockquote>${project.hook}</blockquote></div><div class="driving-question"><span>DRIVING QUESTION</span><p>${project.question}</p></div></div>
    <div class="project-body"><section class="mission-copy"><p class="mini-label">YOUR SCENARIO</p><p class="scenario">${project.scenario}</p><div class="final-product"><span>FINAL PRODUCT</span><p>${project.product}</p></div></section>
    <aside class="team-card"><div class="team-card-head"><span>YOUR TEAM</span><b>4 members</b></div>${memberMarkup(project)}</aside>
    <section class="scene-section"><p class="mini-label">PERFORMANCE ARC</p><h3>Tell one story in four scenes</h3><div class="scene-grid">${project.scenes.map((scene, index) => `<article><span>${index + 1}</span><div><b>${scene[0]}</b><p>${scene[1]}</p></div></article>`).join("")}</div></section>
    <section class="project-details"><div><p class="mini-label">WHAT TO CREATE</p><h3>Mission deliverables</h3><ul class="deliverable-list">${project.deliverables.map(item => `<li>${item}</li>`).join("")}</ul></div><div><p class="mini-label">LANGUAGE TO SHOW</p><h3>Evidence bank</h3><div class="language-chips">${project.language.map(item => `<span>${item}</span>`).join("")}</div></div></section>
    <section class="roles-section"><p class="mini-label">SUGGESTED RESPONSIBILITIES</p><h3>Four visible roles</h3><p class="role-note">Adapt the roles to your strengths, but keep the workload and speaking time balanced.</p><div class="roles-grid">${project.roles.map((role, index) => `<article><span>0${index + 1}</span><b>${role[0]}</b><p>${role[1]}</p></article>`).join("")}</div></section>
    <div class="success-strip"><strong>Success sounds like:</strong><span>clear English</span><span>one connected story</span><span>equal voices</span><span>useful visuals</span><span>live interaction</span></div></div>`;
  if (updateHistory) history.replaceState(null, "", `#group-${project.number}`);
}

function initializeTabs() {
  tabs.innerHTML = PROJECTS.map(project => `<button type="button" role="tab" data-group="${project.number}" aria-controls="project-panel"><span>Group ${project.number}</span><b>${project.code}</b></button>`).join("");
  tabs.addEventListener("click", event => { const button = event.target.closest("button[data-group]"); if (button) renderProject(Number(button.dataset.group)); });
  tabs.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    const current = PROJECTS.findIndex(item => item.number === Number(document.activeElement.dataset.group));
    const next = (current + (event.key === "ArrowRight" ? 1 : -1) + PROJECTS.length) % PROJECTS.length;
    const nextButton = tabs.querySelector(`[data-group="${PROJECTS[next].number}"]`);
    nextButton.focus(); renderProject(PROJECTS[next].number);
  });
}

function initializeChecklist() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || "{}"); } catch { saved = {}; }
  document.querySelectorAll("[data-check]").forEach(input => {
    input.checked = Boolean(saved[input.dataset.check]);
    input.addEventListener("change", () => {
      const state = {};
      document.querySelectorAll("[data-check]").forEach(item => { state[item.dataset.check] = item.checked; });
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
    });
  });
}

storedGroups = readGroups();
syncStatus.innerHTML = storedGroups.length ? `<strong>Groups synchronized.</strong> The saved members appear inside each assigned mission.` : `No saved groups were found on this device. The five missions are available; <a href="../english-02/grupos.html">open grupos.html</a> to create or view the teams.`;
initializeTabs(); initializeChecklist();
const requestedGroup = Number(location.hash.match(/group-(\d)/)?.[1]);
renderProject(requestedGroup >= 1 && requestedGroup <= 5 ? requestedGroup : 1, false);
document.getElementById("print-button").addEventListener("click", () => window.print());
