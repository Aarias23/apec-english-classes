(function () {
  "use strict";

  var slides = [
    {
      title: "Everyday English starts here.", kicker: "UNIT 1 · ENGLISH 2", time: "WELCOME", theme: "cover",
      lead: "Talk about the people, routines, places, schedules, and personal details that shape your day.",
      body: '<div class="tag-row"><span>Family members</span><span>Daily routines</span><span>Places</span><span>Time & timetables</span><span>Personal information</span></div><div class="prompt-box"><strong>Essential question:</strong> How can I introduce my world clearly and confidently in English?</div>',
      teacher: { purpose: "Launch Unit 1 as one connected communication journey.", say: "English becomes useful when it helps another person understand your world.", notes: ["Invite two quick examples of English used outside class.", "Preview the final integrated speaking mission."], answer: "Final evidence: a clear 60-second introduction to one student's everyday world." }
    },
    {
      title: "Five resources. One real-life story.", kicker: "UNIT MAP", time: "5 RESOURCES",
      lead: "Each resource gives you one part of a complete personal introduction.",
      body: '<div class="objective-grid"><div class="objective-card"><small>01 · PEOPLE</small><p>Identify and describe family members.</p></div><div class="objective-card"><small>02 · ACTIONS</small><p>Explain routines and habits.</p></div><div class="objective-card"><small>03 · PLACES</small><p>Describe home, neighborhood, and city.</p></div><div class="objective-card"><small>04 · SCHEDULE</small><p>Tell time and discuss a timetable.</p></div><div class="objective-card"><small>05 · IDENTITY</small><p>Ask for and give personal information.</p></div><div class="objective-card"><small>FINAL MISSION</small><p>Connect all five in a natural conversation.</p></div></div>',
      teacher: { purpose: "Make the learning sequence transparent.", say: "We are building one conversation, one useful layer at a time.", notes: ["Students choose the resource they expect to find easiest.", "Revisit their prediction at the end."], answer: "Students can name the communicative purpose of each resource." }
    },
    {
      title: "Meet the family.", kicker: "RESOURCE 1 · FAMILY MEMBERS", time: "VOCABULARY",
      lead: "Organize family words by generation and relationship.",
      body: '<div class="content-grid"><div class="content-card"><small>PARENTS</small><p>mother · father · stepmother · stepfather</p></div><div class="content-card"><small>CHILDREN</small><p>son · daughter · brother · sister</p></div><div class="content-card"><small>EXTENDED FAMILY</small><p>grandparents · aunt · uncle · cousin</p></div><div class="content-card"><small>BY MARRIAGE</small><p>husband · wife · mother-in-law · brother-in-law</p></div></div><div class="prompt-box"><strong>Quick sort:</strong> Which words belong to your generation? Which belong to the generation before yours?</div>',
      teacher: { purpose: "Build a usable family vocabulary network.", say: "Do not memorize a random list; connect every word to a relationship.", notes: ["Sketch a three-generation tree on the whiteboard.", "Model cousin and in-law carefully."], answer: "Students classify family words accurately by relationship and generation." }
    },
    {
      title: "Whose family is it?", kicker: "RESOURCE 1 · GRAMMAR + SPEAKING", time: "HAVE / HAS · POSSESSIVE 'S",
      lead: "Use have/has for family facts and possessive 's to show relationships.",
      body: '<div class="sentence-stack"><div class="sentence"><b>I have</b> two brothers. · <b>She has</b> one daughter.</div><div class="sentence">Mia is <b>Lucas’s sister</b>. · My <b>parents’ house</b> is nearby.</div><div class="sentence"><b>Who is he?</b> He is my uncle. · <b>How many cousins do you have?</b></div></div><div class="choice-grid" data-quiz data-answer="2"><button class="choice-button" data-choice="1">She have two cousins.</button><button class="choice-button" data-choice="2">She has two cousins.</button><button class="choice-button" data-choice="3">She is two cousins.</button><button class="choice-button" data-choice="4">She having two cousins.</button></div><p class="quiz-feedback" aria-live="polite"></p>',
      teacher: { purpose: "Turn family vocabulary into accurate personal statements.", say: "The subject decides have or has; the apostrophe shows whose.", notes: ["Pairs create a fictional family of six people.", "Partner asks three relationship questions."], answer: "Correct answer: She has two cousins." }
    },
    {
      title: "A day in action.", kicker: "RESOURCE 2 · DAILY ROUTINES AND HABITS", time: "VOCABULARY",
      lead: "Use action phrases to move from morning to night.",
      body: '<div class="word-cloud"><span class="word-chip">wake up</span><span class="word-chip">get dressed</span><span class="word-chip">have breakfast</span><span class="word-chip">go to class</span><span class="word-chip">study</span><span class="word-chip">have lunch</span><span class="word-chip">exercise</span><span class="word-chip">do homework</span><span class="word-chip">relax</span><span class="word-chip">go to bed</span></div><ol class="task-steps"><li>Put the actions in your usual order.</li><li>Add two routines that are not in the list.</li><li>Compare your sequence with a partner.</li></ol>',
      teacher: { purpose: "Establish high-frequency routine collocations.", say: "Learn the complete action: not breakfast, but have breakfast.", notes: ["Use mime for rapid retrieval.", "Ask students to notice go to class but go home."], answer: "Students produce a logical daily sequence using verb-noun phrases." }
    },
    {
      title: "Habits need frequency.", kicker: "RESOURCE 2 · SIMPLE PRESENT", time: "GRAMMAR + SPEAKING",
      lead: "The simple present tells what usually happens; frequency tells how often.",
      body: '<div class="content-grid"><div class="content-card"><small>AFFIRMATIVE</small><p>I study at night.<br>He studies at night.</p></div><div class="content-card"><small>NEGATIVE</small><p>I don’t study on Sunday.<br>She doesn’t study on Sunday.</p></div><div class="content-card"><small>QUESTION</small><p>What time do you wake up?<br>Does he exercise?</p></div><div class="content-card"><small>FREQUENCY</small><p>always · usually · often · sometimes · never</p></div></div><div class="prompt-box"><strong>Speak:</strong> Tell your partner one thing you always do, two things you usually do, and one thing you never do.</div>',
      teacher: { purpose: "Combine simple present form with frequency adverbs.", say: "Frequency usually stands before the action verb, but after be.", notes: ["Contrast: I usually study / I am usually tired.", "Monitor third-person -s during partner reports."], answer: "Partner report: Ana usually wakes up at six, but she never exercises before class." }
    },
    {
      title: "Zoom out: home to city.", kicker: "RESOURCE 3 · DESCRIBING PLACES", time: "VOCABULARY",
      lead: "Choose place words at the right scale.",
      body: '<div class="content-grid"><div class="content-card"><small>HOME</small><p>bedroom · kitchen · living room · balcony · yard</p></div><div class="content-card"><small>NEIGHBORHOOD</small><p>street · park · pharmacy · grocery store · bus stop</p></div><div class="content-card"><small>CITY</small><p>hospital · university · stadium · museum · shopping mall</p></div><div class="content-card"><small>QUALITIES</small><p>quiet · crowded · safe · modern · convenient · lively</p></div></div><div class="prompt-box"><strong>Three-level description:</strong> In my home there is… Near my home there is… In my city there are…</div>',
      teacher: { purpose: "Organize place vocabulary from immediate to wider environment.", say: "Good descriptions tell the listener where to look.", notes: ["Draw three nested circles on the whiteboard.", "Students add two local places to each level."], answer: "Students distinguish home, neighborhood, and city vocabulary." }
    },
    {
      title: "Put every place on the map.", kicker: "RESOURCE 3 · THERE IS / ARE + PREPOSITIONS", time: "SPEAKING LAB",
      lead: "Existence plus location creates a useful place description.",
      body: '<div class="sentence-stack"><div class="sentence"><b>There is</b> a pharmacy <b>next to</b> the supermarket.</div><div class="sentence"><b>There are</b> two parks <b>near</b> my house.</div><div class="sentence">The bank is <b>between</b> the café and the hospital.</div></div><div class="word-cloud"><span class="word-chip">next to</span><span class="word-chip">across from</span><span class="word-chip">between</span><span class="word-chip">behind</span><span class="word-chip">in front of</span><span class="word-chip">near</span></div><div class="prompt-box"><strong>Map challenge:</strong> Draw five places. Partner asks: “Is there a…?” and reconstructs your map.</div>',
      teacher: { purpose: "Use there is/are and prepositions communicatively.", say: "First say what exists; then locate it.", notes: ["Model singular/plural agreement.", "Use the whiteboard grid for a live map."], answer: "Minimum: five places, four accurate prepositions, two there is/are questions." }
    },
    {
      title: "What time is it?", kicker: "RESOURCE 4 · TELLING THE TIME", time: "FUNCTIONAL LANGUAGE",
      lead: "Read digital time and use common conversational forms.",
      body: '<div class="example-grid"><div class="example-card"><h3>7:00</h3><p>seven o’clock</p></div><div class="example-card"><h3>7:15</h3><p>a quarter past seven</p></div><div class="example-card"><h3>7:30</h3><p>half past seven</p></div><div class="example-card"><h3>7:45</h3><p>a quarter to eight</p></div></div><div class="prompt-box"><strong>Precision:</strong> 7:05 = seven oh five / five past seven. 7:50 = seven fifty / ten to eight.</div>',
      teacher: { purpose: "Build flexible clock-reading language.", say: "Past belongs to the hour we just passed; to points to the next hour.", notes: ["Draw four clocks on the whiteboard.", "Use a.m., p.m., noon, and midnight in context."], answer: "Students express five times in both digital and conversational forms." }
    },
    {
      title: "Read the timetable.", kicker: "RESOURCE 4 · TIME + TIMETABLES", time: "ASKING ABOUT SCHEDULES",
      lead: "Ask for the event, day, starting time, and finishing time.",
      body: '<div class="content-grid"><div class="content-card"><small>MONDAY · 8:00</small><p>English class</p></div><div class="content-card"><small>TUESDAY · 2:30</small><p>Computer lab</p></div><div class="content-card"><small>THURSDAY · 4:15</small><p>Basketball practice</p></div><div class="content-card"><small>FRIDAY · 6:00</small><p>Movie club</p></div></div><div class="sentence-stack"><div class="sentence"><b>When is</b> English class? · It is <b>on Monday at eight</b>.</div><div class="sentence"><b>What time does</b> basketball practice start? · It starts at 4:15.</div></div>',
      teacher: { purpose: "Interpret and discuss a simple weekly timetable.", say: "Use on for days and at for exact clock times.", notes: ["Pairs ask four timetable questions.", "Students add one event to create an information gap."], answer: "Students ask and answer when/what time questions with on + day and at + time." }
    },
    {
      title: "Personal information, safely shared.", kicker: "RESOURCE 5 · ASKING AND GIVING PERSONAL INFORMATION", time: "QUESTION FORMS",
      lead: "Match each question to the type of information you genuinely need.",
      body: '<div class="content-grid"><div class="content-card"><small>IDENTITY</small><p>What is your full name?<br>How do you spell it?</p></div><div class="content-card"><small>ORIGIN</small><p>Where are you from?<br>Where do you live?</p></div><div class="content-card"><small>CONTACT</small><p>What is your email address?<br>What is your phone number?</p></div><div class="content-card"><small>INTERESTS</small><p>What do you do in your free time?<br>What is your favorite…?</p></div></div><div class="prompt-box"><strong>Privacy rule:</strong> In practice activities, you may invent contact details. Never pressure someone to share private information.</div>',
      teacher: { purpose: "Teach accurate personal-information questions with privacy awareness.", say: "A good question has a reason and respects a boundary.", notes: ["Model alphabet and number clarification.", "Use fictional phone numbers and emails."], answer: "Students distinguish be questions from do questions and respond appropriately." }
    },
    {
      title: "Information desk role-play.", kicker: "RESOURCE 5 · SPEAKING", time: "REAL-LIFE CONVERSATION",
      lead: "Ask, answer, clarify, and confirm.",
      body: '<div class="sentence-stack"><div class="sentence">A: <b>Could I have your name, please?</b><br>B: It’s Maya Rodríguez.</div><div class="sentence">A: <b>Could you spell your last name?</b><br>B: R-O-D-R-I-G-U-E-Z.</div><div class="sentence">A: <b>Let me confirm:</b> your class starts at 9:15 on Tuesday.<br>B: That’s right.</div></div><ol class="task-steps"><li>Student A is registering a new student.</li><li>Student B uses a fictional identity card.</li><li>Ask six questions and clarify twice.</li><li>Switch roles and improve fluency.</li></ol>',
      teacher: { purpose: "Practice polite information exchange and repair strategies.", say: "Communication succeeds when both people leave with the same information.", notes: ["Require Could you repeat that? and Let me confirm.", "Focus feedback on clarity, not speed."], answer: "Six relevant questions, complete answers, two clarification moves, accurate confirmation." }
    },
    {
      title: "Your everyday world in 60 seconds.", kicker: "INTEGRATED MISSION", time: "FINAL PRODUCT", theme: "warm",
      lead: "Connect all five resources into one coherent introduction.",
      body: '<div class="content-grid"><div class="content-card"><small>PEOPLE</small><p>Introduce one family member.</p></div><div class="content-card"><small>ROUTINE</small><p>Describe two daily habits.</p></div><div class="content-card"><small>PLACE</small><p>Locate one useful place nearby.</p></div><div class="content-card"><small>SCHEDULE</small><p>Give one day and time.</p></div></div><div class="prompt-box"><strong>Partner’s job:</strong> Ask two natural follow-up questions and confirm one detail.</div><ol class="task-steps"><li>Prepare six keywords—no full script.</li><li>Speak for 60 seconds.</li><li>Answer follow-up questions.</li><li>Switch roles and give one specific compliment.</li></ol>',
      teacher: { purpose: "Integrate Unit 1 language in a meaningful oral product.", say: "Your ideas are connected because they all describe the same world: yours.", notes: ["Allow fictionalized personal information.", "Assess intelligibility, range, accuracy, and interaction."], answer: "Success: content from four categories + two responses + one confirmed detail." }
    },
    {
      title: "What can you do now?", kicker: "EXIT CHECK", time: "REFLECT", theme: "cover",
      lead: "Turn today’s evidence into one clear next step.",
      body: '<div class="objective-grid"><div class="objective-card"><small>I CAN</small><p>talk about family relationships.</p></div><div class="objective-card"><small>I CAN</small><p>describe routines and frequency.</p></div><div class="objective-card"><small>I CAN</small><p>describe and locate places.</p></div><div class="objective-card"><small>I CAN</small><p>tell time and read a timetable.</p></div><div class="objective-card"><small>I CAN</small><p>exchange personal information politely.</p></div><div class="objective-card"><small>NEXT</small><p>I need more practice with ___ because ___.</p></div></div>',
      teacher: { purpose: "Close with evidence-based self-assessment.", say: "Choose one target, not everything. Specific practice creates progress.", notes: ["Students submit one strong sentence and one question.", "Use responses to select the next warm-up."], answer: "Exit evidence: one accurate statement, one accurate question, and one specific practice target." }
    }
  ];

  var stage = document.getElementById("slide-stage");
  var list = document.getElementById("slide-list");
  var previous = document.getElementById("previous");
  var next = document.getElementById("next");
  var counter = document.getElementById("slide-counter");
  var teacherPanel = document.getElementById("teacher-panel");
  var teacherContent = document.getElementById("teacher-content");
  var params = new URLSearchParams(window.location.search);
  var current = Math.min(slides.length - 1, Math.max(0, Number(params.get("slide")) || 0));
  var guideWindow = null;

  function teacherMarkup(teacher) {
    return '<section class="teacher-section"><small>PURPOSE</small><p>' + teacher.purpose + '</p></section>' +
      '<section class="teacher-section"><small>TEACHER SAYS</small><p>“' + teacher.say + '”</p></section>' +
      '<section class="teacher-section"><small>FACILITATION NOTES</small><ul>' + teacher.notes.map(function (note) { return "<li>" + note + "</li>"; }).join("") + '</ul></section>' +
      '<section class="teacher-section"><small>SUCCESS EVIDENCE</small><div class="teacher-answer">' + teacher.answer + '</div></section>';
  }

  function bindSlideActions() {
    stage.querySelectorAll("[data-quiz]").forEach(function (quiz) {
      var answer = quiz.getAttribute("data-answer");
      var feedback = quiz.parentElement.querySelector(".quiz-feedback");
      quiz.querySelectorAll("[data-choice]").forEach(function (button) {
        button.addEventListener("click", function () {
          quiz.querySelectorAll("[data-choice]").forEach(function (option) { option.classList.remove("correct", "wrong"); });
          var correct = button.getAttribute("data-choice") === answer;
          button.classList.add(correct ? "correct" : "wrong");
          feedback.textContent = correct ? "Correct — explain the rule to your partner." : "Not yet — check the subject and verb form.";
        });
      });
    });
    stage.querySelectorAll(".reveal-button").forEach(function (button) {
      button.addEventListener("click", function () {
        var content = button.nextElementSibling;
        content.classList.toggle("visible");
        button.textContent = content.classList.contains("visible") ? "Hide answer" : "Reveal answer";
      });
    });
  }

  function renderSlide() {
    var slide = slides[current];
    stage.className = "slide-stage " + (slide.theme || "");
    stage.innerHTML = '<div class="slide-kicker"><span>' + slide.kicker + '</span><span>' + slide.time + '</span></div>' +
      (current === 0 ? "<h1>" : "<h2>") + slide.title + (current === 0 ? "</h1>" : "</h2>") +
      '<p class="slide-lead">' + slide.lead + '</p>' + slide.body;
    teacherContent.innerHTML = teacherMarkup(slide.teacher);
    counter.textContent = String(current + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    document.getElementById("progress-bar").style.width = ((current + 1) / slides.length * 100) + "%";
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    list.querySelectorAll(".slide-jump").forEach(function (button, index) { button.classList.toggle("active", index === current); });
    var active = list.children[current];
    if (active) active.scrollIntoView({ block: "nearest" });
    history.replaceState(null, "", "index.html?slide=" + current);
    bindSlideActions();
    if (guideWindow && !guideWindow.closed) guideWindow.postMessage({ type: "english2-class-slide", slide: current }, "*");
  }

  list.innerHTML = slides.map(function (slide, index) {
    return '<button class="slide-jump" data-index="' + index + '" type="button"><span>' + String(index + 1).padStart(2, "0") + '</span><small>' + slide.title + '</small></button>';
  }).join("");
  list.addEventListener("click", function (event) {
    var target = event.target.closest("[data-index]");
    if (!target) return;
    current = Number(target.getAttribute("data-index"));
    renderSlide();
  });
  previous.addEventListener("click", function () { if (current > 0) { current -= 1; renderSlide(); } });
  next.addEventListener("click", function () { if (current < slides.length - 1) { current += 1; renderSlide(); } });

  function setTeacher(open) {
    teacherPanel.classList.toggle("open", open);
    teacherPanel.setAttribute("aria-hidden", String(!open));
    document.getElementById("teacher-toggle").setAttribute("aria-pressed", String(open));
  }
  document.getElementById("teacher-toggle").addEventListener("click", function () { setTeacher(!teacherPanel.classList.contains("open")); });
  document.getElementById("teacher-close").addEventListener("click", function () { setTeacher(false); });
  document.getElementById("guide-open").addEventListener("click", function () {
    guideWindow = window.open("teacher-guide.html?slide=" + current, "english2-teacher-guide");
    if (guideWindow) guideWindow.focus();
  });
  document.getElementById("rail-toggle").addEventListener("click", function () {
    var shell = document.querySelector(".deck-shell");
    if (window.innerWidth <= 720) shell.classList.toggle("mobile-rail");
    else shell.classList.toggle("rail-collapsed");
  });
  document.getElementById("fullscreen").addEventListener("click", function () {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(function () {});
    else document.exitFullscreen();
  });

  // Timer
  var timerDialog = document.getElementById("timer-dialog");
  var timerDisplay = document.getElementById("timer-display");
  var timerInitial = 300;
  var timerSeconds = timerInitial;
  var timerHandle = null;
  function drawTimer() {
    timerDisplay.textContent = String(Math.floor(timerSeconds / 60)).padStart(2, "0") + ":" + String(timerSeconds % 60).padStart(2, "0");
  }
  function stopTimer() {
    clearInterval(timerHandle);
    timerHandle = null;
    document.getElementById("timer-start").textContent = timerSeconds === 0 ? "Done" : "Start";
  }
  document.getElementById("timer-open").addEventListener("click", function () { timerDialog.showModal(); });
  timerDialog.querySelectorAll("[data-minutes]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      stopTimer();
      timerInitial = Number(button.getAttribute("data-minutes")) * 60;
      timerSeconds = timerInitial;
      drawTimer();
    });
  });
  document.getElementById("timer-start").addEventListener("click", function (event) {
    event.preventDefault();
    if (timerHandle) { stopTimer(); return; }
    if (timerSeconds === 0) timerSeconds = timerInitial;
    event.currentTarget.textContent = "Pause";
    timerHandle = setInterval(function () { timerSeconds -= 1; drawTimer(); if (timerSeconds <= 0) { stopTimer(); timerDisplay.textContent = "TIME!"; } }, 1000);
  });
  document.getElementById("timer-reset").addEventListener("click", function (event) { event.preventDefault(); stopTimer(); timerSeconds = timerInitial; drawTimer(); });

  // Whiteboard
  var board = document.getElementById("whiteboard");
  var surface = document.getElementById("board-surface");
  var canvas = document.getElementById("board-canvas");
  var context = canvas.getContext("2d");
  var editor = document.getElementById("board-text-editor");
  var boardStatus = document.getElementById("board-status");
  var storageKey = "english2-unit1-whiteboard";
  var items = [];
  var redoItems = [];
  var activeStroke = null;
  var activeTool = "pen";
  var activeColor = "#17251f";
  var activeSize = 6;
  var textSize = 40;
  var background = "blank";

  function loadBoard() {
    try {
      var saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      items = Array.isArray(saved.items) ? saved.items : [];
      background = saved.background || "blank";
    } catch (error) { items = []; background = "blank"; }
    setBackground(background);
  }
  function saveBoard() {
    try { localStorage.setItem(storageKey, JSON.stringify({ items: items, background: background })); } catch (error) {}
  }
  function wrapText(ctx, text, x, y, maxWidth, size) {
    var lineHeight = size * 1.23;
    text.split("\n").forEach(function (paragraph) {
      var words = paragraph.split(/\s+/);
      var line = words.shift() || "";
      words.forEach(function (word) {
        var test = line ? line + " " + word : word;
        if (ctx.measureText(test).width > maxWidth && line) { ctx.fillText(line, x, y); line = word; y += lineHeight; }
        else line = test;
      });
      ctx.fillText(line, x, y);
      y += lineHeight;
    });
    return y;
  }
  function drawItem(ctx, item, width, height) {
    if (item.type === "text" || item.type === "note") {
      var x = item.x * width;
      var y = item.y * height;
      var size = item.size || 40;
      var maxWidth = Math.min(item.width || 520, width - x - 24);
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.font = "700 " + size + "px Inter, ui-sans-serif, system-ui, sans-serif";
      ctx.textBaseline = "top";
      if (item.type === "note") {
        var lines = Math.max(2, item.text.split("\n").length + Math.ceil(item.text.length / 28));
        ctx.fillStyle = item.noteColor || "#fff0a9";
        ctx.shadowColor = "rgba(70,55,10,.16)";
        ctx.shadowBlur = 14;
        ctx.fillRect(x - 12, y - 12, maxWidth + 24, Math.max(120, lines * size * .8));
        ctx.shadowBlur = 0;
      }
      ctx.fillStyle = item.color || activeColor;
      wrapText(ctx, item.text, x, y, maxWidth, size);
      ctx.restore();
      return;
    }
    if (!item.points || !item.points.length) return;
    ctx.save();
    ctx.globalCompositeOperation = item.tool === "eraser" ? "destination-out" : "source-over";
    ctx.globalAlpha = item.tool === "highlighter" ? .28 : 1;
    ctx.strokeStyle = item.color;
    ctx.fillStyle = item.color;
    ctx.lineWidth = item.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(item.points[0].x * width, item.points[0].y * height);
    item.points.slice(1).forEach(function (point) { ctx.lineTo(point.x * width, point.y * height); });
    if (item.points.length === 1) { ctx.arc(item.points[0].x * width, item.points[0].y * height, item.size / 2, 0, Math.PI * 2); ctx.fill(); }
    else ctx.stroke();
    ctx.restore();
  }
  function renderBoard() {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);
    items.forEach(function (item) { drawItem(context, item, width, height); });
    if (activeStroke) drawItem(context, activeStroke, width, height);
    document.getElementById("board-undo").disabled = !items.length;
    document.getElementById("board-redo").disabled = !redoItems.length;
  }
  function resizeBoard() {
    var width = Math.max(1, canvas.clientWidth);
    var height = Math.max(1, canvas.clientHeight);
    var ratio = devicePixelRatio || 1;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    renderBoard();
  }
  function boardPoint(event) {
    var bounds = canvas.getBoundingClientRect();
    return { x: Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)), y: Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)) };
  }
  function commitEditor() {
    if (editor.hidden) return;
    var text = editor.value.trim();
    if (text) {
      items.push({ type: editor.classList.contains("note-mode") ? "note" : "text", x: Number(editor.dataset.x), y: Number(editor.dataset.y), text: text, color: activeColor, size: textSize, width: Math.min(520, canvas.clientWidth * .48), noteColor: "#fff0a9" });
      redoItems = [];
      saveBoard();
    }
    editor.hidden = true;
    editor.value = "";
    editor.classList.remove("note-mode");
    renderBoard();
  }
  function cancelEditor() { editor.hidden = true; editor.value = ""; editor.classList.remove("note-mode"); renderBoard(); }
  function openEditor(point, noteMode) {
    commitEditor();
    var surfaceBounds = surface.getBoundingClientRect();
    var canvasBounds = canvas.getBoundingClientRect();
    var width = Math.min(520, Math.max(260, canvasBounds.width * .48));
    var left = point.x * canvasBounds.width;
    var top = point.y * canvasBounds.height;
    if (left + width > canvasBounds.width - 14) left = Math.max(14, canvasBounds.width - width - 14);
    if (top > canvasBounds.height - 120) top = Math.max(14, canvasBounds.height - 120);
    editor.style.left = (canvasBounds.left - surfaceBounds.left + left) + "px";
    editor.style.top = (canvasBounds.top - surfaceBounds.top + top) + "px";
    editor.style.width = width + "px";
    editor.style.fontSize = textSize + "px";
    editor.style.color = activeColor;
    editor.dataset.x = String(left / canvasBounds.width);
    editor.dataset.y = String(top / canvasBounds.height);
    editor.classList.toggle("note-mode", noteMode);
    editor.hidden = false;
    editor.focus();
  }
  function toolMessage(tool) {
    return { pen: "Pen · click and drag to draw", highlighter: "Highlighter · drag across key ideas", text: "Text · click anywhere, type, then Ctrl+Enter", note: "Note · click anywhere and type a sticky note", eraser: "Eraser · drag across marks" }[tool];
  }
  function selectTool(tool) {
    commitEditor();
    activeTool = tool;
    board.dataset.activeTool = tool;
    boardStatus.textContent = toolMessage(tool);
    document.querySelectorAll("[data-board-tool]").forEach(function (button) {
      var selected = button.getAttribute("data-board-tool") === tool;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }
  function setBackground(value) {
    background = value;
    surface.classList.remove("blank", "grid", "lines");
    surface.classList.add(value);
    document.querySelectorAll("[data-board-background]").forEach(function (button) { button.classList.toggle("active", button.getAttribute("data-board-background") === value); });
    saveBoard();
  }
  function openBoard() { setTeacher(false); board.classList.add("open"); board.setAttribute("aria-hidden", "false"); requestAnimationFrame(resizeBoard); }
  function closeBoard() { commitEditor(); board.classList.remove("open"); board.setAttribute("aria-hidden", "true"); }
  canvas.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    var point = boardPoint(event);
    if (activeTool === "text" || activeTool === "note") { openEditor(point, activeTool === "note"); return; }
    commitEditor();
    canvas.setPointerCapture(event.pointerId);
    activeStroke = { tool: activeTool, color: activeColor, size: activeTool === "eraser" ? activeSize * 4 : (activeTool === "highlighter" ? activeSize * 4 : activeSize), points: [point] };
    renderBoard();
  });
  canvas.addEventListener("pointermove", function (event) {
    if (!activeStroke) return;
    event.preventDefault();
    var point = boardPoint(event);
    var last = activeStroke.points[activeStroke.points.length - 1];
    if (Math.abs(point.x - last.x) + Math.abs(point.y - last.y) < .001) return;
    activeStroke.points.push(point);
    renderBoard();
  });
  function finishStroke(event) {
    if (!activeStroke) return;
    if (event && canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    items.push(activeStroke);
    activeStroke = null;
    redoItems = [];
    saveBoard();
    renderBoard();
  }
  canvas.addEventListener("pointerup", finishStroke);
  canvas.addEventListener("pointercancel", finishStroke);
  document.querySelectorAll("[data-board-tool]").forEach(function (button) { button.addEventListener("click", function () { selectTool(button.getAttribute("data-board-tool")); }); });
  document.querySelectorAll("[data-board-color]").forEach(function (button) {
    button.addEventListener("click", function () {
      activeColor = button.getAttribute("data-board-color");
      document.querySelectorAll("[data-board-color]").forEach(function (item) { item.classList.toggle("active", item === button); });
      if (activeTool === "eraser") selectTool("pen");
    });
  });
  document.querySelectorAll("[data-board-size]").forEach(function (button) {
    button.addEventListener("click", function () {
      activeSize = Number(button.getAttribute("data-board-size"));
      textSize = Number(button.getAttribute("data-text-size"));
      document.querySelectorAll("[data-board-size]").forEach(function (item) { item.classList.toggle("active", item === button); });
    });
  });
  document.querySelectorAll("[data-board-background]").forEach(function (button) { button.addEventListener("click", function () { setBackground(button.getAttribute("data-board-background")); }); });
  editor.addEventListener("keydown", function (event) {
    if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); cancelEditor(); }
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") { event.preventDefault(); event.stopPropagation(); commitEditor(); }
  });
  editor.addEventListener("blur", commitEditor);
  document.getElementById("board-open").addEventListener("click", openBoard);
  document.getElementById("board-close").addEventListener("click", closeBoard);
  document.getElementById("board-undo").addEventListener("click", function () { commitEditor(); if (items.length) { redoItems.push(items.pop()); saveBoard(); renderBoard(); } });
  document.getElementById("board-redo").addEventListener("click", function () { if (redoItems.length) { items.push(redoItems.pop()); saveBoard(); renderBoard(); } });
  document.getElementById("board-clear").addEventListener("click", function () { if (!items.length || confirm("Clear everything from the teaching canvas?")) { cancelEditor(); items = []; redoItems = []; saveBoard(); renderBoard(); } });
  document.getElementById("board-export").addEventListener("click", function () {
    commitEditor();
    var output = document.createElement("canvas");
    output.width = 1600; output.height = 900;
    var ctx = output.getContext("2d");
    ctx.fillStyle = "#fffefa"; ctx.fillRect(0, 0, output.width, output.height);
    if (background === "grid") { ctx.strokeStyle = "#dfe8e1"; ctx.lineWidth = 1; for (var x = 0; x < output.width; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,output.height); ctx.stroke(); } for (var y = 0; y < output.height; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(output.width,y); ctx.stroke(); } }
    if (background === "lines") { ctx.strokeStyle = "#d9e5dd"; for (var lineY = 40; lineY < output.height; lineY += 40) { ctx.beginPath(); ctx.moveTo(0,lineY); ctx.lineTo(output.width,lineY); ctx.stroke(); } }
    items.forEach(function (item) { drawItem(ctx, item, output.width, output.height); });
    var link = document.createElement("a"); link.download = "english-2-whiteboard.png"; link.href = output.toDataURL("image/png"); link.click();
  });

  document.addEventListener("keydown", function (event) {
    if (event.target.matches("textarea, input, [contenteditable=true]")) return;
    if (board.classList.contains("open")) {
      if (event.key === "Escape") closeBoard();
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") { event.preventDefault(); document.getElementById(event.shiftKey ? "board-redo" : "board-undo").click(); }
      var shortcuts = { p: "pen", h: "highlighter", t: "text", n: "note", e: "eraser" };
      if (shortcuts[event.key.toLowerCase()]) selectTool(shortcuts[event.key.toLowerCase()]);
      return;
    }
    if (timerDialog.open) return;
    if (event.key === "ArrowRight" || event.key === "PageDown") next.click();
    if (event.key === "ArrowLeft" || event.key === "PageUp") previous.click();
    if (event.key.toLowerCase() === "t") setTeacher(!teacherPanel.classList.contains("open"));
  });
  window.addEventListener("message", function (event) {
    if (!event.data || event.data.type !== "english2-guide-slide") return;
    current = Math.min(slides.length - 1, Math.max(0, Number(event.data.slide) || 0));
    renderSlide();
    window.focus();
  });
  window.addEventListener("resize", function () { if (board.classList.contains("open")) resizeBoard(); });

  loadBoard();
  renderSlide();
}());
