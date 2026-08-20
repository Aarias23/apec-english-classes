const questions = [
  { section: "Everyday English", type: "Multiple Choice", text: "Laura is Pedro’s mother. Pedro is Laura’s _____.", options: ["uncle", "son", "cousin", "husband"], answer: "B — son" },
  { section: "Everyday English", type: "Multiple Choice", text: "Choose the correct sentence about Sofia.", options: ["Sofia have two brothers.", "Sofia has two brothers.", "Sofia haves two brothers.", "Sofia is two brothers."], answer: "B — Sofia has two brothers." },
  { section: "Everyday English", type: "Fill in the Blank", text: "Mia is Lucas’s sister. Lucas is _____ brother.", wordBank: ["Mia’s", "Mias’", "Mia", "Mias"], answer: "Mia’s" },
  { section: "Everyday English", type: "True / False", text: "My parents’ house means the house belongs to both of my parents.", instruction: "Write True or False in Blackboard.", answer: "True" },
  { section: "Everyday English", type: "Matching", text: "Match each family word with its description.", left: ["1. aunt", "2. cousin", "3. grandparents", "4. brother-in-law"], right: ["A. your parents’ parents", "B. your spouse’s brother", "C. your parent’s sister", "D. your aunt or uncle’s child"], answer: "1-C, 2-D, 3-A, 4-B" },
  { section: "Everyday English", type: "Multiple Choice", text: "Which sentence correctly describes a daily habit?", options: ["He study every night.", "He studies every night.", "He studying every night.", "He does studies every night."], answer: "B — He studies every night." },
  { section: "Everyday English", type: "Multiple Choice", text: "Complete the question: What time _____ you wake up?", options: ["are", "does", "do", "is"], answer: "C — do" },
  { section: "Everyday English", type: "Fill in the Blank", text: "Carla _____ exercises before class; she does it every day.", wordBank: ["never", "always", "sometimes", "doesn’t"], answer: "always" },
  { section: "Everyday English", type: "True / False", text: "The sentence ‘She doesn’t studies on Sunday’ is grammatically correct.", instruction: "Write True or False. If false, correct the sentence.", answer: "False — She doesn’t study on Sunday." },
  { section: "Everyday English", type: "Multiple Choice", text: "The pharmacy is directly on the other side of the street from the bank. It is _____ the bank.", options: ["between", "behind", "across from", "in"], answer: "C — across from" },
  { section: "Everyday English", type: "Multiple Choice", text: "Choose the correct description of a neighborhood with two parks.", options: ["There is two parks.", "There are two parks.", "There have two parks.", "There two parks are."], answer: "B — There are two parks." },
  { section: "Everyday English", type: "Multiple Choice", text: "How do we commonly say 7:45?", options: ["A quarter past seven", "Half past seven", "A quarter to eight", "A quarter to seven"], answer: "C — A quarter to eight" },
  { section: "Everyday English", type: "Fill in the Blank", text: "English class is _____ Monday _____ eight o’clock.", wordBank: ["on / at", "at / on", "in / at", "on / in"], answer: "on / at" },
  { section: "Everyday English", type: "Multiple Choice", text: "Which question correctly asks about someone’s place of origin?", options: ["Where you are from?", "Where do you from?", "Where are you from?", "Where does you come from?"], answer: "C — Where are you from?" },
  { section: "Everyday English", type: "Matching", text: "Match each question with the information it requests.", left: ["1. How do you spell it?", "2. Where do you live?", "3. What do you do in your free time?", "4. Could you repeat that?"], right: ["A. a place of residence", "B. clarification", "C. spelling", "D. interests"], answer: "1-C, 2-A, 3-D, 4-B" },
  { section: "Town to Table", type: "Multiple Choice", text: "Daniel needs medicine. Where should he go?", options: ["The bakery", "The pharmacy", "The library", "The gym"], answer: "B — The pharmacy" },
  { section: "Town to Table", type: "Matching", text: "Match each need with the correct place.", left: ["1. send a package", "2. borrow a book", "3. get some bread", "4. catch a bus"], right: ["A. bakery", "B. bus stop", "C. post office", "D. library"], answer: "1-C, 2-D, 3-A, 4-B" },
  { section: "Town to Table", type: "Multiple Choice", text: "Which list contains only countable nouns?", options: ["rice, water, sugar", "apples, eggs, carrots", "milk, bread, cheese", "water, bananas, rice"], answer: "B — apples, eggs, carrots" },
  { section: "Town to Table", type: "True / False", text: "Rice is normally an uncountable noun in English.", instruction: "Write True or False in Blackboard.", answer: "True" },
  { section: "Town to Table", type: "Multiple Choice", text: "We need _____ apple and _____ rice for the meal.", options: ["a / an", "an / some", "some / a", "an / a"], answer: "B — an / some" },
  { section: "Town to Table", type: "Fill in the Blank", text: "We don’t have _____ eggs in the refrigerator.", wordBank: ["a", "an", "some", "any"], answer: "any" },
  { section: "Town to Table", type: "Multiple Choice", text: "Choose the best question for the noun water.", options: ["How many water do we need?", "How much water do we need?", "How any water do we need?", "How a few water do we need?"], answer: "B — How much water do we need?" },
  { section: "Town to Table", type: "Multiple Choice", text: "Choose the correct small quantity expression.", options: ["a few rice", "a little apples", "a few bananas", "a little eggs"], answer: "C — a few bananas" },
  { section: "Town to Table", type: "Matching", text: "Match each noun with the most natural quantity expression.", left: ["1. apples", "2. milk", "3. rice", "4. water"], right: ["A. a bag of", "B. two bottles of", "C. a few", "D. a little"], answer: "1-C, 2-D, 3-A, 4-B" },
  { section: "Town to Table", type: "True / False", text: "We normally use some in positive statements and any in most questions and negative statements.", instruction: "Write True or False in Blackboard.", answer: "True" },
  { section: "Town to Table", type: "Multiple Choice", text: "Which sentence is grammatically correct?", options: ["There are much apples.", "There is an bread.", "We have some cheese.", "We don’t have some milk."], answer: "C — We have some cheese." },
  { section: "Integrated Use", type: "Multiple Choice", text: "A friend is sick and you need medicine, fruit, and water. Which plan is most logical?", options: ["Go to the pharmacy and supermarket.", "Go to the library and gym.", "Go to the bank and movie theater.", "Go to the school and post office."], answer: "A — Go to the pharmacy and supermarket." },
  { section: "Integrated Use", type: "Fill in the Blank", text: "Complete the exchange: ‘Do we have _____ tomatoes?’ ‘No, we don’t. How _____ do we need?’", wordBank: ["some / much", "any / many", "any / much", "a / many"], answer: "any / many" },
  { section: "Integrated Use", type: "Multiple Choice", text: "Which sentence correctly connects a routine, place, day, and time?", options: ["I usually exercise at the gym on Thursday at six.", "I exercise usually in the gym at Thursday on six.", "I usually exercises at the gym on Thursday in six.", "I am usually exercise at gym Thursday at six."], answer: "A — I usually exercise at the gym on Thursday at six." },
  { section: "Integrated Use", type: "Multiple Choice", text: "Choose the best complete response: ‘Could I have your name, please?’", options: ["Yes, I have two sisters.", "There is a bank near my house.", "It’s Maya Rodríguez. That’s R-O-D-R-I-G-U-E-Z.", "I need a little rice."], answer: "C — It’s Maya Rodríguez…" }
];

let current = 0;
let timerId = null;
let timeLeft = 60;
const $ = (id) => document.getElementById(id);
const welcomeView = $("welcomeView");
const workspace = $("examWorkspace");
const questionContent = $("questionContent");

function formatTime(seconds) { return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`; }
function stopTimer() { clearInterval(timerId); timerId = null; }
function resetTimer() {
  stopTimer(); timeLeft = Number($("timerLength").value);
  $("timerDisplay").textContent = formatTime(timeLeft); $("timerDisplay").style.color = "";
}
function startTimer() {
  if (timerId) return;
  timerId = setInterval(() => {
    timeLeft = Math.max(0, timeLeft - 1); $("timerDisplay").textContent = formatTime(timeLeft);
    if (timeLeft <= 10) $("timerDisplay").style.color = "var(--coral)";
    if (timeLeft === 0) { stopTimer(); showToast("Time is up."); }
  }, 1000);
}
function buildContent(question) {
  if (question.options) return `<div class="option-list">${question.options.map((option, index) => `<div><strong>${String.fromCharCode(65 + index)}</strong>${option}</div>`).join("")}</div>`;
  if (question.wordBank) return `<div class="response-frame"><div class="word-bank">${question.wordBank.map((word) => `<span>${word}</span>`).join("")}</div>Write the missing word or expression in Blackboard.</div>`;
  if (question.left && question.right) return `<div class="matching-grid"><article><h3>Items</h3><ul>${question.left.map((item) => `<li>${item}</li>`).join("")}</ul></article><article><h3>Options</h3><ul>${question.right.map((item) => `<li>${item}</li>`).join("")}</ul></article></div>`;
  return `<div class="response-frame">${question.instruction || "Write True or False in Blackboard."}</div>`;
}
function renderQuestion() {
  const question = questions[current];
  const sectionNumber = question.section === "Everyday English" ? "1" : question.section === "Town to Table" ? "2" : "3";
  $("sectionLabel").textContent = `SECTION ${sectionNumber} · ${question.section}`;
  $("slideIndicator").textContent = `Question ${current + 1} of ${questions.length}`;
  $("questionType").textContent = question.type; $("questionLabel").textContent = `Question ${current + 1}`;
  $("questionText").textContent = question.text; questionContent.innerHTML = buildContent(question); questionContent.hidden = false;
  $("toggleOptions").textContent = "Hide options"; $("toggleOptions").setAttribute("aria-expanded", "true");
  $("prevQuestion").disabled = current === 0; $("nextQuestion").textContent = current === questions.length - 1 ? "Finish ✓" : "Next →";
  $("progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
  document.querySelectorAll(".question-map button").forEach((button, index) => button.classList.toggle("active", index === current));
  resetTimer();
}
function openExam() { welcomeView.hidden = true; workspace.hidden = false; renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" }); }
function showOverview() { stopTimer(); workspace.hidden = true; welcomeView.hidden = false; window.scrollTo({ top: 0, behavior: "smooth" }); }
function showToast(message) {
  const toast = $("toast"); toast.textContent = message; toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

$("questionMap").innerHTML = questions.map((question, index) => `<button type="button" data-index="${index}" class="${index === 15 || index === 26 ? "section-start" : ""}" aria-label="Go to question ${index + 1}">${index + 1}</button>`).join("");
$("questionMap").addEventListener("click", (event) => { const button = event.target.closest("[data-index]"); if (button) { current = Number(button.dataset.index); renderQuestion(); } });
$("answerGrid").innerHTML = questions.map((question, index) => `<div class="answer-item"><strong>${index + 1}.</strong> ${question.answer}</div>`).join("");
$("answerKeyButton").addEventListener("click", () => $("answerDialog").showModal());
$("closeAnswers").addEventListener("click", () => $("answerDialog").close());
$("answerDialog").addEventListener("click", (event) => { if (event.target === $("answerDialog")) $("answerDialog").close(); });
$("startExam").addEventListener("click", openExam); $("backButton").addEventListener("click", showOverview);
$("startTimer").addEventListener("click", startTimer); $("pauseTimer").addEventListener("click", stopTimer);
$("resetTimer").addEventListener("click", resetTimer); $("timerLength").addEventListener("change", resetTimer);
$("prevQuestion").addEventListener("click", () => { if (current > 0) { current -= 1; renderQuestion(); } });
$("nextQuestion").addEventListener("click", () => { if (current < questions.length - 1) { current += 1; renderQuestion(); } else { showToast("Exam complete."); showOverview(); } });
$("toggleOptions").addEventListener("click", () => {
  questionContent.hidden = !questionContent.hidden; $("toggleOptions").textContent = questionContent.hidden ? "Show options" : "Hide options";
  $("toggleOptions").setAttribute("aria-expanded", String(!questionContent.hidden));
});
$("fullscreenButton").addEventListener("click", async () => {
  const target = workspace.hidden ? document.documentElement : $("examSlide");
  if (!document.fullscreenElement) await target.requestFullscreen(); else await document.exitFullscreen();
});
document.addEventListener("fullscreenchange", () => { $("fullscreenButton").innerHTML = document.fullscreenElement ? '<span aria-hidden="true">⤢</span> Exit' : '<span aria-hidden="true">⛶</span> Present'; });
document.addEventListener("keydown", (event) => {
  if (workspace.hidden || $("answerDialog").open || event.target.matches("select, button")) return;
  if (event.key === "ArrowRight" && current < questions.length - 1) { current += 1; renderQuestion(); }
  if (event.key === "ArrowLeft" && current > 0) { current -= 1; renderQuestion(); }
  if (event.key === " ") { event.preventDefault(); timerId ? stopTimer() : startTimer(); }
});
resetTimer();
