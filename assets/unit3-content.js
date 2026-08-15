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
  function page(config) {
    return C.bookStop({
      title: config.title, time: config.time, lead: config.lead,
      source: source(config.page, config.refs, config.audio, config.workbook),
      image: "assets/book/unit3/" + config.image,
      imageLabel: "Student Book page " + config.page,
      exercises: config.exercises,
      noBook: "Use the projected page and prompts. Zoom or open the full page when needed; write answers in your notebook.",
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
  function start(config) {
    return C.standard({
      title: config.title, kicker: config.kicker, time: config.time, lead: config.lead,
      body: '<div class="slide-tags">' + config.tags.map(function (tag) { return "<span>" + tag + "</span>"; }).join("") + '</div><div class="prompt-box"><strong>Learning evidence:</strong> ' + config.evidence + "</div>",
      teacher: teacher(config.purpose, config.say, config.notes, config.answer)
    });
  }

  lessons.push({
    id: 5,
    date: "Saturday, August 15",
    shortDate: "AUG 15",
    unit: "Unit 3 - Places",
    pages: "Student Book 36-41",
    title: "Find your way around town",
    subtitle: "Places, regular past verbs and directions",
    product: "Give a route and describe a recent visit to a place in town.",
    color: "teal",
    bookStops: 5,
    checkpoints: 3,
    slides: [
      start({
        title: "Find your way around town", kicker: "CLASS 05 &middot; UNIT 3 &middot; PLACES", time: "0-12 MIN",
        lead: "Name places, describe a past visit and help someone reach a destination.",
        tags: ["Places around town", "Regular past", "Directions", "Speaking"],
        evidence: "A clear route dialogue plus a short account of a recent place visited.",
        purpose: "Launch Unit 3 around authentic movement through a town.", say: "Today our language must help another person get somewhere.",
        notes: ["Retrieve two Unit 2 past sentences.", "Preview the projected book-page viewer."], answer: "Students state the two final products."
      }),
      page({
        title: "Meet the unit: Places", time: "12-38 MIN", page: "36-37", image: "unit3-pages-036-037.png",
        refs: "Exercises 1-6", audio: "Tracks 031-032",
        lead: "Read a conversation, repair past-tense mistakes and create a short personal exchange.",
        exercises: [
          { label: "1", task: "<strong>Read and listen.</strong> Who does not know about the recycling bins? Underline the place words." },
          { label: "2", task: "<strong>Comprehension.</strong> Complete the four sentences with one or two words from Exercise 1." },
          { label: "3", task: "<strong>Language repair.</strong> Find five more mistakes in the dialogues and rewrite the sentences correctly." },
          { label: "4", task: "<strong>Listen and repeat.</strong> Copy the rhythm of the corrected dialogue." },
          { label: "5", task: "<strong>Choose.</strong> Select a place, food and recent time; plan what you did there." },
          { label: "6", task: "<strong>Pairwork.</strong> Practice the dialogue, react naturally and switch roles." }
        ],
        purpose: "Establish the Unit 3 context and diagnose simple past control.", say: "A correction is complete only when you can explain what changed.",
        notes: ["Zoom the spread for Exercise 3.", "Accept imagined experiences."], answer: "Place vocabulary + corrected simple-past sentences + short personalized exchange."
      }),
      check({
        title: "Can we repair a past story?", time: "38-51 MIN",
        lead: "Use the corrected dialogue as evidence.",
        task: '<p><strong>Repair and explain:</strong> She <u>tryed</u> fish soup. / They <u>buy</u> electric buses. / I <u>stay</u> there last week.</p>',
        support: "Circle the time signal, identify the base verb, then consult the regular/irregular pattern.",
        ready: "Correct all three and explain why each form changes or stays.",
        challenge: "Add one negative and one question about the same events.",
        purpose: "Distinguish regular spelling from irregular past forms.", say: "Past time is the clue; the verb pattern determines the form.",
        notes: ["Expected: tried, bought, stayed.", "Keep errors visible as teaching examples."], answer: "tried; bought; stayed, with a valid form explanation."
      }),
      page({
        title: "Map the places around town", time: "51-82 MIN", page: "38", image: "unit3-page-038.png",
        refs: "Exercises 1-6", audio: "Tracks 033-035", workbook: "Workbook W14",
        lead: "Connect sixteen place words to a map, then describe locations using street and landmark clues.",
        exercises: [
          { label: "1", task: "<strong>Match.</strong> Label map numbers 1-16: bank, parking lot, train station, bus station, cafe, market, movie theater, supermarket, hospital, post office, library, bus stop, park, police station, sports center and mall." },
          { label: "2", task: "<strong>Listen and repeat.</strong> Mark the stressed word or syllable." },
          { label: "3", task: "<strong>Listen and number.</strong> Number bank, market, library, movie theater and mall." },
          { label: "4", task: "<strong>Pronounce.</strong> Listen, check and repeat." },
          { label: "5", task: "<strong>Location clues.</strong> Complete six sentences with places from the map." },
          { label: "6", task: "<strong>Pairwork.</strong> Ask and answer where places are; use streets and landmarks." }
        ],
        purpose: "Build a functional map-based lexical set.", say: "Do not memorize a list; attach each word to a location and a clue.",
        notes: ["Use the full-page link for map detail.", "Students without books draw a simple 4-street map."], answer: "Accurate place labels and location sentences using across from, in front of, behind, between and next to."
      }),
      page({
        title: "Regular verbs: form and spelling", time: "82-112 MIN", page: "39", image: "unit3-page-039.png",
        refs: "Grammar chart + Exercises 1-3 + Challenge", workbook: "Workbook W14",
        lead: "Use the same simple-past form for every subject and apply four spelling patterns.",
        exercises: [
          { label: "Think", task: "<strong>Complete the rule.</strong> The verb form is the same for all persons; the simple past of <em>play</em> is ___." },
          { label: "1", task: "<strong>Complete.</strong> Put the verbs in parentheses into the simple past." },
          { label: "2", task: "<strong>Story.</strong> Complete the paragraph with verbs from the box in the simple past." },
          { label: "3", task: "<strong>Spelling.</strong> Complete seven sentences using jog, cry, play, close, stop, study, tidy or bake." },
          { label: "Challenge", task: "<strong>Write.</strong> Produce five true sentences about yesterday using five verbs from the box." }
        ],
        purpose: "Systematize regular-past spelling and use.", say: "Meaning chooses past time; the final letters choose the spelling.",
        notes: ["Pause for a 10-minute break after the chart.", "Sort examples: +ed, +d, consonant+y, double consonant."], answer: "play-played; like-liked; try-tried; stop-stopped."
      }),
      check({
        title: "Which -ed spelling?", time: "122-136 MIN",
        lead: "Sort, produce and explain.",
        task: '<div class="mini-board"><p><strong>Sort:</strong> arrive, study, plan, stay, copy, bake, stop, watch.</p><p>Then write one true sentence with a verb from each pattern.</p></div>',
        support: "Use four headers: +ed, +d, consonant+y to ied, double final consonant +ed.",
        ready: "Sort all verbs and explain one spelling choice per pattern.",
        challenge: "Add two new verbs to each group and use three in a connected story.",
        purpose: "Check transfer of spelling rules.", say: "A rule is useful when it helps with a new verb.",
        notes: ["Have pairs compare before feedback.", "Listen for past meaning as well as spelling."], answer: "+ed: stay/watch; +d: arrive/bake; ied: study/copy; doubled: plan/stop."
      }),
      page({
        title: "Ask for and give directions", time: "136-172 MIN", page: "40", image: "unit3-page-040.png",
        refs: "Exercises 1-3", audio: "Tracks 036-037",
        lead: "Follow model dialogues and build a polite route from a starting point to a destination.",
        exercises: [
          { label: "1", task: "<strong>Map search.</strong> Find the traffic lights, traffic circle and intersection." },
          { label: "2.1", task: "<strong>Library route.</strong> Listen/read, follow the directions and mark the destination." },
          { label: "2.2", task: "<strong>Bank route.</strong> Listen/read and identify the destination near the cafe." },
          { label: "2.3", task: "<strong>Post office route.</strong> Complete the dialogue from the map, then listen and check." },
          { label: "3", task: "<strong>Language bank.</strong> Listen and repeat the polite opening, route verbs and location phrases." }
        ],
        purpose: "Model polite, sequenced direction exchanges.", say: "A route needs a polite opening, ordered actions and a clear landmark.",
        notes: ["Trace each route with a finger.", "Choral-drill chunks, not the entire dialogue."], answer: "Excuse me + go/turn + street/intersection + landmark location."
      }),
      page({
        title: "Make directions usable", time: "172-204 MIN", page: "41", image: "unit3-page-041.png",
        refs: "Exercises 4-7", audio: "Track 038", workbook: "Workbook W16",
        lead: "Choose logical destinations, follow routes and organize direction words into a lexical set.",
        exercises: [
          { label: "4", task: "<strong>Situations.</strong> Choose where to go for coffee, a movie, clothes, books, a bus and outdoor reading." },
          { label: "5", task: "<strong>Listen and follow.</strong> Trace three routes from the cafe, post office and movie theater; write each destination." },
          { label: "6", task: "<strong>Lexical set.</strong> Complete the diagram with direction verbs and prepositions." },
          { label: "7", task: "<strong>Pairwork.</strong> Ask for and give directions to places on the page 40 map." }
        ],
        purpose: "Consolidate direction language through purposeful map use.", say: "The listener should arrive without guessing.",
        notes: ["Play Track 038 one route at a time.", "Partners verify by tracing."], answer: "Logical destination choices, correctly traced routes and complete direction phrases."
      }),
      check({
        title: "Will your listener arrive?", time: "204-218 MIN",
        lead: "Test directions with a silent map trace.",
        task: '<p>Speaker chooses a start and destination on page 40. Listener may not ask questions on the first attempt: trace silently, then reveal the destination and identify the first unclear instruction.</p>',
        support: "Use: Excuse me. Go down ___. Turn left/right at ___. It is next to/across from ___.",
        ready: "Give a route that a partner traces correctly; improve one instruction.",
        challenge: "Give a route with two turns, an intersection and two landmarks without pointing.",
        purpose: "Check whether spoken directions are complete and usable.", say: "Success is the listener arriving, not the speaker finishing.",
        notes: ["Pair strategically from the spelling checkpoint.", "Require polite opening and closing."], answer: "Correct destination reached from sequenced oral directions."
      }),
      C.standard({
        title: "Town mission", kicker: "FINAL PERFORMANCE &middot; NAVIGATE + NARRATE", time: "218-236 MIN",
        lead: "Combine a route with a simple-past visit.",
        body: '<div class="goal-grid"><div><span>1</span><h3>Navigate</h3><p>Give directions from one town place to another.</p></div><div><span>2</span><h3>Narrate</h3><p>At the destination, say what you did there using three regular past verbs.</p></div><div><span>3</span><h3>Verify</h3><p>The listener traces the route and checks the past-verb spellings.</p></div></div>',
        teacher: teacher("Integrate map language and regular past.", "First help us arrive; then tell us what happened there.", ["Assess in rotating pairs.", "Record one common route issue and one verb issue."], "Accurate destination + three meaningful regular-past sentences.")
      }),
      C.standard({
        title: "Exit route", kicker: "REFLECT &middot; NEXT STEP", time: "236-240 MIN",
        lead: "Leave one piece of evidence for each class goal.",
        body: '<div class="exit-grid"><div><span>P</span><p>Name one town place and its purpose.</p></div><div><span>V</span><p>Write one correctly spelled regular past verb.</p></div><div><span>D</span><p>Write one complete direction.</p></div></div><div class="prompt-box"><strong>Next:</strong> SB 42-47 and Culture 116. Practice by evidence: Workbook W14 or W16.</div>',
        teacher: teacher("Capture individual evidence.", "Your exit route tells us exactly where to restart.", ["Collect three-part tickets.", "Assign only the relevant workbook practice."], "One accurate place, past form and direction.")
      })
    ]
  });

  lessons.push({
    id: 6,
    date: "Saturday, August 22",
    shortDate: "AUG 22",
    unit: "Unit 3 - Places",
    pages: "Student Book 42-47 + 116",
    title: "A place with a story",
    subtitle: "Irregular past, sequencing, city history and inclusive places",
    product: "Create a sequenced day-trip story and propose a more inclusive town center.",
    color: "teal",
    bookStops: 7,
    checkpoints: 3,
    slides: [
      start({
        title: "A place with a story", kicker: "CLASS 06 &middot; UNIT 3 &middot; PLACES", time: "0-12 MIN",
        lead: "Use irregular past verbs and sequence words to tell a city story, then improve a shared place.",
        tags: ["Irregular past", "Sequencing", "Reading", "Writing", "Global skills"],
        evidence: "A coherent day-trip account plus one evidence-based inclusive-town proposal.",
        purpose: "Connect grammar to meaningful stories about places.", say: "Places become memorable when events are clear, ordered and meaningful.",
        notes: ["Retrieve two regular past forms and two directions.", "Clarify that page 116 belongs to Unit 3; page 117 begins Unit 4."], answer: "Students identify the story and proposal products."
      }),
      page({
        title: "Irregular verbs tell the story", time: "12-43 MIN", page: "42", image: "unit3-page-042.png",
        refs: "Exercises 1-5 + Challenge", audio: "Track 039", workbook: "Workbook W15",
        lead: "Recognize, retrieve and use common irregular simple-past forms.",
        exercises: [
          { label: "1", task: "<strong>Listen and repeat.</strong> Read the base/past table and check meaning." },
          { label: "2", task: "<strong>Classify.</strong> Decide whether each past verb is regular or irregular." },
          { label: "3", task: "<strong>Find.</strong> Locate seven more simple-past verbs in the word search." },
          { label: "4", task: "<strong>Rewrite.</strong> Change five present-time sentences to the simple past." },
          { label: "5", task: "<strong>Sequence.</strong> Use Cristiano's list to complete the summary of his day." },
          { label: "Challenge", task: "<strong>Write.</strong> Tell an imagined shopping trip with go, meet, buy, have, get and take." }
        ],
        purpose: "Build rapid access to high-frequency irregular past forms.", say: "Irregular does not mean random in use; the sentence still needs a clear past context.",
        notes: ["Use retrieval before showing the table.", "Keep a class verb bank."], answer: "Accurate irregular forms in complete past-time sentences."
      }),
      check({
        title: "Can we retrieve without the table?", time: "43-56 MIN",
        lead: "Fast retrieval supports fluent storytelling.",
        task: '<p>Close the page. Write the past of <strong>go, buy, take, meet, eat, have, get, see</strong>. Then use four forms in a four-event mini-story.</p>',
        support: "Reopen the table for 30 seconds, group the forms by sound or spelling, then try again.",
        ready: "Produce at least 7/8 forms and a logical four-event story.",
        challenge: "Add a negative, a time phrase and one regular past verb.",
        purpose: "Check form retrieval and contextual use.", say: "Memorize through a story, not an isolated chant.",
        notes: ["Expected: went, bought, took, met, ate, had, got, saw.", "Use the result to pair students."], answer: "At least 7 correct forms and coherent use of four."
      }),
      page({
        title: "Understand a day in sequence", time: "56-84 MIN", page: "43", image: "unit3-page-043.png",
        refs: "Exercises 1-4", audio: "Track 040", workbook: "Workbook W16",
        lead: "Listen for morning, afternoon and evening events, then use sequencing words to organize them.",
        exercises: [
          { label: "1", task: "<strong>First listen.</strong> Check the activities Jaden did in each part of the day." },
          { label: "2", task: "<strong>Second listen.</strong> Choose before/after and then use the sentences to reconstruct the order." },
          { label: "3", task: "<strong>Pairwork.</strong> Complete the paragraph about yesterday and compare routines." },
          { label: "4", task: "<strong>Present.</strong> Tell the class about your day with ordered past events." }
        ],
        purpose: "Listen for event order and transfer sequencing to speaking.", say: "Sequence words are road signs for the listener.",
        notes: ["Play once for categories, once for order.", "Students may invent a safe routine."], answer: "Events correctly assigned and linked with before, then and after."
      }),
      check({
        title: "Is the order clear?", time: "84-98 MIN",
        lead: "A listener should reconstruct the timeline.",
        task: '<p>Tell four events from yesterday using <strong>first, then, after that, finally</strong>. Your partner writes 1-4 and repeats the timeline back.</p>',
        support: "Write four verb phrases first; place one sequencing word before each.",
        ready: "Partner reconstructs all four events correctly.",
        challenge: "Add one sentence with before and one with after without confusing the timeline.",
        purpose: "Check comprehensible sequencing.", say: "If the listener changes the order, improve the connector or time clue.",
        notes: ["Pause for a 10-minute break after this checkpoint.", "Hear one model timeline."], answer: "All four events reconstructed in the intended order."
      }),
      page({
        title: "Read the history of New Orleans", time: "108-139 MIN", page: "44", image: "unit3-page-044.png",
        refs: "Check it out + Exercises 1-3", audio: "Track 041",
        lead: "Use dates, headings and examples to understand how a city's history shaped its culture.",
        exercises: [
          { label: "Words", task: "<strong>Check it out.</strong> Infer trading, colonized, grid, slaves, take control and founded." },
          { label: "1", task: "<strong>Timeline.</strong> Complete the dated sentences with words and phrases from the text." },
          { label: "2", task: "<strong>Examples.</strong> Match three city features to the example each one illustrates." },
          { label: "3", task: "<strong>Respond.</strong> Decide whether you enjoy learning city history and explain why." }
        ],
        purpose: "Read an informational text for chronology and examples.", say: "Dates organize change; examples make an idea concrete.",
        notes: ["Handle references to enslavement accurately and respectfully.", "Require text evidence for Exercise 2."], answer: "Completed chronology and three example matches supported by the article."
      }),
      check({
        title: "Claim, date and example", time: "139-152 MIN",
        lead: "Turn reading evidence into a concise historical explanation.",
        task: '<p>Complete orally: <strong>New Orleans changed when ___ in ___. One example of that change is ___.</strong> Point to the supporting part of the text.</p>',
        support: "Choose one dated event from the timeline and one visible city/culture example.",
        ready: "State an accurate claim with a date and relevant example.",
        challenge: "Connect two periods with before, after or later.",
        purpose: "Check synthesis of chronology and examples.", say: "A strong history answer combines what happened, when and what shows the change.",
        notes: ["Accept paraphrase, not invented facts.", "Save two models for writing."], answer: "Accurate event + date + relevant example from the text."
      }),
      page({
        title: "Write a day-trip description", time: "152-184 MIN", page: "45", image: "unit3-page-045.png",
        refs: "Exercises 1-4", workbook: "Workbook W17",
        lead: "Study Matt's Sydney schedule and organize a message with clear sequencing words.",
        exercises: [
          { label: "1", task: "<strong>Model.</strong> Use the schedule to complete Matt's message about Sydney." },
          { label: "2", task: "<strong>Imagine.</strong> Choose a city or place and plan what you did at different times." },
          { label: "3", task: "<strong>Language focus.</strong> Choose the correct sequencing alternatives." },
          { label: "4", task: "<strong>Write.</strong> Create a message about a day trip using your notes and sequencing words." }
        ],
        purpose: "Write an ordered personal account from notes.", say: "The schedule supplies content; sequence words shape it for a reader.",
        notes: ["Require first, next/after that and finally.", "Peer check order before verb accuracy."], answer: "Coherent message with times, simple past and clear sequencing."
      }),
      page({
        title: "Design a town center for everyone", time: "184-209 MIN", page: "46", image: "unit3-page-046.png",
        refs: "Exercises 1-6",
        lead: "Identify barriers, consider different users and propose realistic improvements.",
        exercises: [
          { label: "1-2", task: "<strong>Observe.</strong> Identify who uses the center and what problems the picture shows." },
          { label: "3", task: "<strong>Read.</strong> Match the forum comments to traffic, distance, sidewalk and parking problems." },
          { label: "4", task: "<strong>Groupwork.</strong> Discuss six access questions and propose improvements." },
          { label: "5", task: "<strong>Perspectives.</strong> Add ideas for children, teenagers, students, parents and older people." },
          { label: "6", task: "<strong>Compare.</strong> Present one proposal and record one useful idea from another group." }
        ],
        purpose: "Apply intercultural competence and critical thinking to public space.", say: "An inclusive solution begins by asking who might be excluded.",
        notes: ["Assign each group a user perspective.", "Require problem + solution + benefit."], answer: "A feasible proposal connected to a specific user and access problem."
      }),
      page({
        title: "Culture: Magical Malls", time: "209-224 MIN", page: "116", image: "unit3-page-116.png",
        refs: "Exercises 1-4", audio: "Track 101",
        lead: "Compare unusual malls and select evidence for a short cultural presentation.",
        exercises: [
          { label: "1", task: "<strong>Read/listen.</strong> Check the correct main idea of the article." },
          { label: "2", task: "<strong>Compare.</strong> Choose the correct mall for four details." },
          { label: "3", task: "<strong>Answer.</strong> Respond to the four comprehension questions." },
          { label: "4", task: "<strong>Presentation.</strong> Research or imagine a local mall; answer the six guide questions." }
        ],
        purpose: "Extend Unit 3 place language through cultural comparison.", say: "We include page 116 because its badge and content identify it as Unit 3 Culture.",
        notes: ["Page 117 is not assigned; it begins Unit 4.", "If research is unavailable, use a familiar local place."], answer: "Accurate comparison and concise presentation using the guide questions."
      }),
      page({
        title: "Prove your Unit 3 progress", time: "224-234 MIN", page: "47", image: "unit3-page-047.png",
        refs: "Language practice 1-4 + Reflect", workbook: "Workbook W14-W19",
        lead: "Complete the unit check and choose practice from evidence.",
        exercises: [
          { label: "1", task: "<strong>Places.</strong> Complete four sentences with town vocabulary." },
          { label: "2", task: "<strong>Directions.</strong> Complete two dialogues, then practice with a partner." },
          { label: "3", task: "<strong>Regular past.</strong> Complete the sentences with correct forms and spellings." },
          { label: "4", task: "<strong>Irregular past.</strong> Complete the London paragraph with eat, go, see and take." },
          { label: "Reflect", task: "<strong>Can do.</strong> Choose one strong skill and one skill that needs practice." }
        ],
        purpose: "Consolidate and direct selective practice.", say: "Choose a workbook page because of evidence, not because everyone needs the same work.",
        notes: ["W14 vocabulary/regular past; W15 irregular; W16 listening/directions; W17 writing; W18-W19 review.", "Record class-wide needs."], answer: "Completed practice and a specific, evidence-based next target."
      }),
      C.standard({
        title: "A place with a story", kicker: "FINAL PERFORMANCE &middot; CONNECT", time: "234-239 MIN",
        lead: "Make one concise contribution to the shared class story.",
        body: '<div class="goal-grid"><div><span>1</span><h3>Sequence</h3><p>Say one day-trip event with an irregular past verb and a sequence word.</p></div><div><span>2</span><h3>Explain</h3><p>Add one fact or example that makes the place meaningful.</p></div><div><span>3</span><h3>Improve</h3><p>Propose one change that makes the place easier for more people to use.</p></div></div>',
        teacher: teacher("Integrate language, literacy and global skills.", "Tell what happened, why the place matters and how it could include more people.", ["Use rapid round-robin contributions.", "Collect longer written versions after class if needed."], "Sequenced past event + meaningful evidence + inclusive proposal.")
      }),
      C.standard({
        title: "Exit route", kicker: "REFLECT &middot; UNIT 3 COMPLETE", time: "239-240 MIN",
        lead: "One sentence can show the next instructional decision.",
        body: '<div class="prompt-box"><strong>Complete:</strong> I can now ___, and my next practice target is ___ because today I ___.</div>',
        teacher: teacher("Close with metacognitive evidence.", "Name the evidence that led to your target.", ["Collect responses.", "Use them to plan Unit 4 retrieval."], "Specific Can do statement + evidence + target.")
      })
    ]
  });
}());
