(function () {
  "use strict";
  var C = window.LINKIT_COMPONENTS;
  var lessons = window.COURSE_LESSONS;
  if (!C || !lessons) return;

  function teacher(purpose, say, notes, answer) {
    return { purpose: purpose, say: say, notes: notes, answer: answer };
  }
  function source(page, exercises, audio, workbook) {
    return { material: "Student Book", page: page, exercises: exercises, audio: audio, workbook: workbook };
  }
  function start(config) {
    return C.standard({
      title: config.title,
      kicker: config.kicker,
      time: config.time,
      lead: config.lead,
      body: '<div class="slide-tags">' + config.tags.map(function (tag) { return "<span>" + tag + "</span>"; }).join("") + '</div><div class="prompt-box"><strong>Learning evidence:</strong> ' + config.evidence + "</div>",
      teacher: teacher(config.purpose, config.say, config.notes, config.answer)
    });
  }
  function book(config) {
    var pageImages = config.images || config.page.split("-").map(function (pageNumber) {
      return "assets/book/unit2/unit2-page-" + String(Number(pageNumber)).padStart(3, "0") + ".png";
    });
    var pageLabels = config.page.split("-").map(function (pageNumber) { return "Student Book page " + pageNumber; });
    return C.bookStop({
      title: config.title, time: config.time, lead: config.lead,
      source: source(config.page, config.refs, config.audio, config.workbook),
      image: pageImages,
      imageLabel: pageLabels,
      exercises: config.exercises, noBook: config.noBook,
      teacher: teacher(config.purpose, config.say, config.notes, config.answer)
    });
  }
  function check(config) {
    return C.checkpoint({
      title: config.title, time: config.time, lead: config.lead, task: config.task,
      support: config.support, ready: config.ready, challenge: config.challenge,
      teacher: teacher(config.purpose, config.say, config.notes, config.answer)
    });
  }

  var lesson3 = lessons.find(function (item) { return item.id === 3; });
  if (lesson3) {
    lesson3.unit = "Unit 2 - On Vacation";
    lesson3.pages = "Student Book 22-27";
    lesson3.title = "People in the picture";
    lesson3.subtitle = "Appearance, personality and the past of be";
    lesson3.product = "Describe and identify a person in a vacation photo.";
    lesson3.bookStops = 5;
    lesson3.checkpoints = 3;
    lesson3.slides = [
      start({
        title: "People in the picture", kicker: "CLASS 03 &middot; UNIT 2 &middot; ON VACATION", time: "0-12 MIN",
        lead: "Use a vacation photo to describe people, personality and past location.",
        tags: ["Vacation context", "Appearance", "Personality", "was / were"],
        evidence: "A respectful 45-second photo description and a successful identify-the-person exchange.",
        purpose: "Launch Unit 2 with a familiar visual context.", say: "A photo gives us details, but good language turns details into a story.",
        notes: ["Ask for three words students already know.", "Preview Book Stops and Checkpoints."], answer: "Students name the final evidence."
      }),
      book({
        title: "Vacation stories begin", time: "12-35 MIN", page: "22-23", refs: "Exercises 1-6", audio: "Tracks 016-017",
        lead: "Read, listen and notice how the speakers connect vacation details with the past.",
        exercises: [
          { label: "1", task: "<strong>Listen and read.</strong> Identify the vacation place and one problem." },
          { label: "2", task: "<strong>Comprehension.</strong> Complete each sentence with one or two words from the dialogue." },
          { label: "3", task: "<strong>Sequence.</strong> Put the dialogue lines in order; then listen and check." },
          { label: "4", task: "<strong>Listen and repeat.</strong> Copy the speakers' rhythm and stress." },
          { label: "5", task: "<strong>Personalize.</strong> Choose a vacation place, food and activity. Ask: <em>How was it?</em>" },
          { label: "6", task: "<strong>Pairwork.</strong> Practice the new dialogue twice, then switch roles." }
        ],
        purpose: "Build context and extract useful past-language chunks.", say: "Listen for meaning first; confirm exact language on the second pass.",
        notes: ["Project every prompt before audio.", "Accept notebook answers from students without books."], answer: "Students locate evidence and complete a short past exchange."
      }),
      check({
        title: "Can we tell the vacation story?", time: "35-47 MIN",
        lead: "Use evidence before choosing the next route.",
        task: '<p><strong>Quick proof:</strong> In pairs, say where the speakers were, what happened and how the experience was. Use at least two past forms.</p>',
        support: "Reopen SB 22-23 and highlight the subject + past verb in three sentences.",
        ready: "Continue to appearance vocabulary. Keep one strong model sentence visible.",
        challenge: "Retell the exchange from another character's point of view.",
        purpose: "Check comprehension and past reference.", say: "Do not vote by confidence; vote by the sentence you can produce.",
        notes: ["Hear two pairs.", "Choose Review if past meaning is unclear."], answer: "Clear setting + event + reaction with two accurate past forms."
      }),
      book({
        title: "Build a respectful description", time: "47-73 MIN", page: "24", refs: "Exercises 1-4", workbook: "Workbook W8",
        lead: "Sort words by the grammar they need: <em>be</em> + adjective or <em>have</em> + feature.",
        exercises: [
          { label: "1", task: "<strong>Match.</strong> Connect the appearance words to the people in the picture." },
          { label: "2", task: "<strong>Listen and repeat.</strong> Mark the stressed syllable in each word." },
          { label: "3", task: "<strong>Complete.</strong> Choose <em>is/are</em> or <em>has/have</em> for each description." },
          { label: "4", task: "<strong>Apply.</strong> Write three respectful clues about one person; do not say the name." }
        ],
        purpose: "Develop precise and respectful appearance language.", say: "Describe observable features; do not judge the person.",
        notes: ["Build two board columns: BE and HAVE.", "Workbook W8 is optional follow-up."], answer: "be + adjective; have/has + hair, eyes or features."
      }),
      book({
        title: "Place people in the past", time: "73-100 MIN", page: "25", refs: "Grammar chart + Exercises 1-6", workbook: "Workbook W8-W9",
        lead: "Choose <em>was/were</em> or the negative form, then add a clear past-time expression.",
        exercises: [
          { label: "1-2", task: "<strong>Notice.</strong> Complete the grammar rule and affirmative/negative chart." },
          { label: "3", task: "<strong>Choose.</strong> Complete the sentences with <em>was, were, wasn't</em> or <em>weren't</em>." },
          { label: "4", task: "<strong>Time clues.</strong> Match sentences with yesterday, last week, or ago." },
          { label: "5", task: "<strong>Write.</strong> Make one true and one false sentence about last weekend." },
          { label: "6", task: "<strong>Check.</strong> A partner identifies the false sentence and corrects it." }
        ],
        purpose: "Control past forms of be in meaningful sentences.", say: "Find the subject first; the subject chooses was or were.",
        notes: ["Pause for a 10-minute break after this stop.", "Use mini-whiteboards if available."], answer: "I/he/she/it was; you/we/they were; add not for negatives."
      }),
      check({
        title: "Was or were?", time: "110-122 MIN",
        lead: "Four sentences reveal whether the class is ready.",
        task: '<div class="mini-board"><p>1. My friends ___ at the beach yesterday.</p><p>2. I ___ not tired.</p><p>3. Where ___ you last Saturday?</p><p>4. The hotel ___ near the ocean.</p></div>',
        support: "Color-code singular and plural subjects, then rebuild all four sentences.",
        ready: "Compare answers and explain the subject-verb match.",
        challenge: "Turn each statement into a question or negative without changing the meaning.",
        purpose: "Diagnose form selection quickly.", say: "Show the reason, not only the answer.",
        notes: ["Answers: were, was, were, was.", "Move on at 80% accurate plus explanation."], answer: "were; was; were; was."
      }),
      book({
        title: "Appearance or personality?", time: "122-151 MIN", page: "26", refs: "Exercises 1-6", audio: "Tracks 019-020",
        lead: "Use different questions for observable appearance and personal qualities.",
        exercises: [
          { label: "1-2", task: "<strong>Listen.</strong> Identify which question asks about appearance and which asks about personality." },
          { label: "3", task: "<strong>Sort.</strong> Put each adjective under APPEARANCE or PERSONALITY." },
          { label: "4", task: "<strong>Complete.</strong> Build questions with <em>look like</em> and <em>be like</em>." },
          { label: "5", task: "<strong>Plan.</strong> Choose a person and write two appearance clues plus one personality clue." },
          { label: "6", task: "<strong>Speak.</strong> Ask, answer and add one follow-up question." }
        ],
        purpose: "Separate two easily confused question patterns.", say: "What does someone look like opens the camera; what are they like opens the relationship.",
        notes: ["Model both questions side by side.", "Insist on respectful adjectives."], answer: "look like = appearance; be like = personality."
      }),
      book({
        title: "Listen for person clues", time: "151-177 MIN", page: "27", refs: "Exercises 1-5", audio: "Track 021",
        lead: "Match people by recording the exact clue that proves each answer.",
        exercises: [
          { label: "1-2", task: "<strong>Preview.</strong> Study the people and predict useful appearance words." },
          { label: "3", task: "<strong>First listen.</strong> Match each speaker to a person." },
          { label: "4", task: "<strong>Second listen.</strong> Write one appearance and one personality clue for each match." },
          { label: "5", task: "<strong>Personalize.</strong> Describe someone familiar; your partner identifies the person and explains why." }
        ],
        purpose: "Listen for discriminating details and transfer them to speaking.", say: "A correct match needs a clue you heard.",
        notes: ["Play once for gist, once for evidence.", "Pause before feedback."], answer: "Each match is supported by a precise descriptive clue."
      }),
      check({
        title: "Can a partner identify the person?", time: "177-195 MIN",
        lead: "Final rehearsal before the performance.",
        task: '<p><strong>Describe without naming:</strong> include height/build or hair, one other feature, one personality adjective and one past location with <em>was/were</em>.</p>',
        support: "Use the frame: He/She is ___. He/She has ___. He/She is ___. Last ___, he/she was ___.",
        ready: "Perform for a partner; the partner identifies and repeats the evidence.",
        challenge: "Add two follow-up questions and answer without notes.",
        purpose: "Integrate vocabulary and grammar.", say: "If the listener cannot identify the person, improve the evidence.",
        notes: ["Monitor respectful word choice.", "Use the checkpoint result to group students."], answer: "Four required elements, intelligible delivery and successful identification."
      }),
      C.standard({
        title: "Photo-story studio", kicker: "FINAL PERFORMANCE &middot; CREATE", time: "195-230 MIN",
        lead: "Turn one photo into a short, organized story.",
        body: '<div class="goal-grid"><div><span>1</span><h3>Plan</h3><p>Who? What do they look like? What are they like? Where were they?</p></div><div><span>2</span><h3>Speak</h3><p>Give a 45-second description. Your partner listens for the four elements.</p></div><div><span>3</span><h3>Improve</h3><p>Repeat with one clearer clue and one accurate past sentence.</p></div></div>',
        teacher: teacher("Collect integrated oral evidence.", "Clarity grows when we repeat with better evidence.", ["Time first and second attempts.", "Use peer feedback: one strength, one next step."], "Successful product: respectful description + personality + past location.")
      }),
      C.standard({
        title: "Exit route", kicker: "REFLECT &middot; NEXT STEP", time: "230-240 MIN",
        lead: "Show what you can do and choose one target.",
        body: '<div class="exit-grid"><div><span>V</span><p>Write one precise appearance clue.</p></div><div><span>G</span><p>Write one sentence with was/were.</p></div><div><span>S</span><p>Ask one appearance or personality question.</p></div></div><div class="prompt-box"><strong>Next:</strong> Student Book 28-33. Optional practice: Workbook W8-W9.</div>',
        teacher: teacher("Close with individual evidence.", "Your exit ticket tells us where to begin next class.", ["Collect before dismissal.", "Sort into vocabulary, grammar and speaking needs."], "Three accurate responses or a specific practice target.")
      })
    ];
  }

  var lesson4 = lessons.find(function (item) { return item.id === 4; });
  if (lesson4) {
    lesson4.unit = "Unit 2 - On Vacation";
    lesson4.pages = "Student Book 28-33 + Extra 34-35";
    lesson4.title = "A vacation worth reviewing";
    lesson4.subtitle = "Past questions, listening, reading and review writing";
    lesson4.product = "Interview a traveler and write an evidence-based vacation review.";
    lesson4.bookStops = 7;
    lesson4.checkpoints = 3;
    lesson4.slides = [
      start({
        title: "A vacation worth reviewing", kicker: "CLASS 04 &middot; UNIT 2 &middot; ON VACATION", time: "0-12 MIN",
        lead: "Ask about a past trip, interpret details and write a recommendation.",
        tags: ["Past questions", "had", "Listening", "Reading", "Review writing"],
        evidence: "A traveler interview plus an organized 80-100 word vacation review.",
        purpose: "Frame the class as an integrated Unit 2 performance.", say: "Good reviews begin with good questions and specific evidence.",
        notes: ["Retrieve was/were with two oral questions.", "Preview the final review."], answer: "Students state the interview and review goals."
      }),
      book({
        title: "Ask about the past", time: "12-39 MIN", page: "28", refs: "Exercises 1-6", workbook: "Workbook W12-W13",
        lead: "Build yes/no and information questions with <em>was/were</em>, then use past <em>had</em>.",
        exercises: [
          { label: "1", task: "<strong>Complete.</strong> Add <em>was/were</em> to questions and short answers." },
          { label: "2", task: "<strong>Question words.</strong> Complete who, where, when and what questions." },
          { label: "3", task: "<strong>Prepare.</strong> Write true answers about when you were eight." },
          { label: "4", task: "<strong>Interview.</strong> Ask, react, follow up and report one answer." },
          { label: "5", task: "<strong>Choose.</strong> Use <em>have, has</em> or <em>had</em> according to the time." },
          { label: "6", task: "<strong>Explain.</strong> Identify the present and past sentences." }
        ],
        purpose: "Form and use past questions and had.", say: "The question word asks for information; was or were carries past time.",
        notes: ["Model one question chain.", "Students without books copy only answers, not all prompts."], answer: "Accurate auxiliary/subject order and had for past possession or experience."
      }),
      check({
        title: "Can we sustain an interview?", time: "39-53 MIN",
        lead: "A question chain is stronger evidence than isolated forms.",
        task: '<p>Ask a partner: <strong>Where were you last weekend? Who was with you? What was it like? Did you have a good time?</strong> Report one answer.</p>',
        support: "Rebuild the four questions from color-coded chunks.",
        ready: "Interview, react and report with one accurate past sentence.",
        challenge: "Add two original follow-up questions and a natural reaction.",
        purpose: "Check usable question formation.", say: "The goal is a connected conversation, not four disconnected answers.",
        notes: ["Listen for word order.", "Model correction by recasting."], answer: "Four comprehensible questions + one reported detail."
      }),
      book({
        title: "Create a vacation fact file", time: "53-84 MIN", page: "29", refs: "Exercises 1-7", audio: "Tracks 022-024",
        lead: "Listen for destination, people, activities, food and opinion, then conduct your own interview.",
        exercises: [
          { label: "1-2", task: "<strong>Predict and listen.</strong> Identify the destination and general experience." },
          { label: "3", task: "<strong>Fact file.</strong> Complete place, companions, activities, food and opinion." },
          { label: "4", task: "<strong>Listen again.</strong> Answer the detail questions with evidence." },
          { label: "5", task: "<strong>Plan.</strong> Complete your own real or imagined vacation fact file." },
          { label: "6", task: "<strong>Interview.</strong> Ask a partner and take brief notes." },
          { label: "7", task: "<strong>Report.</strong> Present your partner's vacation in the past." }
        ],
        purpose: "Move from listening model to learner-generated interview.", say: "Notes are keywords; your report turns them into complete sentences.",
        notes: ["Pause for a 10-minute break after the fact file.", "Use Track 024 for detailed confirmation."], answer: "Complete fact file and accurate oral report."
      }),
      check({
        title: "Which details make a trip memorable?", time: "94-107 MIN",
        lead: "Select evidence before reading a travel advertisement.",
        task: '<p>From your partner\'s fact file, choose the <strong>three most useful details</strong> for a review. Explain why each one matters to a reader.</p>',
        support: "Use the categories place, activity, food and feeling; choose one detail from three categories.",
        ready: "State three details and a reason for each selection.",
        challenge: "Rank the details and write a one-sentence recommendation.",
        purpose: "Prepare evidence selection for reading and writing.", say: "A review includes details that help another person decide.",
        notes: ["Collect one example per category.", "Keep the selected notes for page 31."], answer: "Specific, relevant details linked to reader needs."
      }),
      book({
        title: "Read a vacation advertisement", time: "107-135 MIN", page: "30", refs: "Check it out + Exercises 1-4", audio: "Track 025",
        lead: "Use headings, images and details to identify the purpose and evaluate destinations.",
        exercises: [
          { label: "Words", task: "<strong>Check it out.</strong> Infer the highlighted travel words from context." },
          { label: "1", task: "<strong>Identify.</strong> Decide which text is an advertisement and cite one feature." },
          { label: "2", task: "<strong>Read and listen.</strong> Find the destinations and the main attraction of each." },
          { label: "3", task: "<strong>Scan.</strong> Answer the detail questions; underline the supporting phrase." },
          { label: "4", task: "<strong>Choose.</strong> Select one destination and give two text-based reasons." }
        ],
        purpose: "Read a functional text for purpose and evidence.", say: "An answer becomes convincing when you can point to the phrase that supports it.",
        notes: ["First read without audio.", "Compare options in pairs."], answer: "Purpose identified + supported answers + justified destination choice."
      }),
      check({
        title: "Evidence or opinion?", time: "135-147 MIN",
        lead: "Separate what the text states from what a reader thinks.",
        task: '<div class="mini-board"><p><strong>A.</strong> Copy one fact from the advertisement.</p><p><strong>B.</strong> Write one opinion about that fact.</p><p><strong>C.</strong> Connect them with <em>because</em>.</p></div>',
        support: "Use: The text says ___. I think ___ because ___.",
        ready: "Share a fact-opinion pair with a clear connection.",
        challenge: "Compare two destinations using one fact from each.",
        purpose: "Check evidence use before review writing.", say: "Facts come from the source; opinions come from the reader.",
        notes: ["Reject unsupported claims gently.", "Save a strong model for the next slide."], answer: "Accurate source fact + distinct opinion + logical because clause."
      }),
      book({
        title: "Write a vacation review", time: "147-183 MIN", page: "31", refs: "Exercises 1-3", workbook: "Workbook W13",
        lead: "Analyze a model, plan specific details and draft an organized recommendation.",
        exercises: [
          { label: "1", task: "<strong>Analyze.</strong> Find the opening, past details, opinion and recommendation in Cristina's model." },
          { label: "2", task: "<strong>Plan.</strong> Note destination, companions, activities, best detail and overall opinion." },
          { label: "3", task: "<strong>Draft.</strong> Write 80-100 words. Use past forms, sequence words and a recommendation." }
        ],
        purpose: "Produce a coherent genre-based review.", say: "Each paragraph has a job: introduce, describe and recommend.",
        notes: ["Model a four-part outline.", "Peer check content before grammar."], answer: "Organized 80-100 words with past detail, opinion and recommendation."
      }),
      book({
        title: "Choose a healthy response", time: "183-207 MIN", page: "32", refs: "Exercises 1-7",
        lead: "Compare two situations and propose realistic well-being strategies.",
        exercises: [
          { label: "1-2", task: "<strong>Observe and read.</strong> Identify each person's situation and feeling." },
          { label: "3-4", task: "<strong>Compare.</strong> Decide which response is healthier and explain why." },
          { label: "5", task: "<strong>Suggest.</strong> Use <em>I think ... can help because ...</em>" },
          { label: "6-7", task: "<strong>Discuss.</strong> Choose a strategy, anticipate a difficulty and improve the plan." }
        ],
        purpose: "Apply language to a well-being decision.", say: "A useful strategy is specific, realistic and supported by a reason.",
        notes: ["Allow students to discuss a fictional case.", "Respect personal boundaries."], answer: "A realistic strategy with a reason and possible adjustment."
      }),
      book({
        title: "Prove your Unit 2 progress", time: "207-222 MIN", page: "33", refs: "Language practice 1-4 + Reflect",
        lead: "Complete the unit check, then identify a precise next step.",
        exercises: [
          { label: "1", task: "<strong>Vocabulary.</strong> Complete the appearance and personality items." },
          { label: "2", task: "<strong>Grammar.</strong> Complete sentences with past forms of <em>be</em>." },
          { label: "3", task: "<strong>Questions.</strong> Form questions and short answers about the past." },
          { label: "4", task: "<strong>Transfer.</strong> Use <em>had</em> and past-time expressions in context." },
          { label: "Reflect", task: "<strong>Choose.</strong> Mark one Can do statement as strong and one as the next practice target." }
        ],
        purpose: "Make progress visible and actionable.", say: "Your next target should name a skill, not simply say grammar.",
        notes: ["Use results to assign Workbook W8-W13 selectively.", "Do not grade self-reflection for accuracy."], answer: "Completed practice plus a specific Can do target."
      }),
      book({
        title: "Extend Unit 2 practice", time: "222-232 MIN", page: "34-35", refs: "Extra practice 1-7 + Extra communication 1-5", audio: "Tracks 026-029 + VideoLink",
        lead: "Choose the practice that responds to today's evidence; the full pages remain available for projection.",
        exercises: [
          { label: "34.1-3", task: "<strong>Vocabulary.</strong> Complete the weather descriptions, find the odd word and complete the physical-appearance charts." },
          { label: "34.4-5", task: "<strong>Time.</strong> Sort time expressions, then identify present habit, present action, past state/action or future plan." },
          { label: "34.6-7", task: "<strong>Grammar.</strong> Complete the verb forms and write six sentences using the time expressions." },
          { label: "35.1", task: "<strong>Communication.</strong> Complete the dialogues with the phrase box; listen, check and practice." },
          { label: "35.2-4", task: "<strong>Pronunciation.</strong> Mark stress, distinguish pronunciations and count syllables." },
          { label: "35.5", task: "<strong>VideoLink.</strong> Watch/listen and choose the correct answers about the people." }
        ],
        purpose: "Provide differentiated consolidation after the Unit 2 progress check.", say: "Do the task your evidence says you need, not every task at the same speed.",
        notes: ["Assign one vocabulary or grammar route plus one communication route.", "Open either page full-screen when checking answers."], answer: "Students complete a targeted practice route and explain why it matches their need."
      }),
      C.standard({
        title: "Traveler interview + review", kicker: "FINAL PERFORMANCE &middot; INTEGRATE", time: "232-238 MIN",
        lead: "Use questions to collect evidence, then turn evidence into a recommendation.",
        body: '<div class="goal-grid"><div><span>1</span><h3>Interview</h3><p>Ask four connected past questions and record keywords.</p></div><div><span>2</span><h3>Review</h3><p>Write a concise opening, two past details, an opinion and recommendation.</p></div><div><span>3</span><h3>Verify</h3><p>Underline two correct past forms and circle the evidence for your opinion.</p></div></div>',
        teacher: teacher("Collect the final integrated Unit 2 evidence.", "Questions collect the story; evidence makes the review trustworthy.", ["Use a short oral rotation.", "Collect or photograph reviews."], "Question chain + coherent evidence-based review.")
      }),
      C.standard({
        title: "Exit route", kicker: "REFLECT &middot; UNIT 2 COMPLETE", time: "238-240 MIN",
        lead: "Name what you can now do and what needs practice.",
        body: '<div class="exit-grid"><div><span>Q</span><p>Write one accurate past question.</p></div><div><span>E</span><p>Write one fact + opinion connection.</p></div><div><span>N</span><p>Name one specific next target.</p></div></div><div class="prompt-box"><strong>Selective practice:</strong> Workbook W8-W13 according to your checkpoint evidence.</div>',
        teacher: teacher("Close Unit 2 with actionable evidence.", "Progress is knowing both what works and what to practice next.", ["Record common needs.", "Preview Unit 3: Places."], "One question, one evidence statement and one specific target.")
      })
    ];
  }
}());
