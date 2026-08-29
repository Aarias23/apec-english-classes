(function () {
  "use strict";
  var C = window.LINKIT_COMPONENTS;
  var lessons = window.COURSE_LESSONS;
  if (!C || !lessons) return;

  function teacher(purpose, say, notes, answer) {
    return { purpose: purpose, say: say, notes: notes, answer: answer };
  }
  function page(config) {
    return C.bookStop({
      title: config.title, time: config.time, lead: config.lead,
      source: { material: "Student Book", page: config.page, exercises: config.refs, audio: config.audio, workbook: config.workbook },
      image: config.visual ? "assets/book/unit4/" + config.visual : "",
      imageLabel: config.visualLabel || "Unit 4 visual support",
      exercises: config.exercises,
      noBook: "Use the projected exercise guide and language frames. Record answers in your notebook.",
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
    id: 7,
    date: "Saturday, August 29",
    shortDate: "AUG 29",
    unit: "Unit 4 - Entertainment",
    pages: "Student Book 48-53",
    title: "Choose a movie and buy tickets",
    subtitle: "Movie types, simple past negative and arrangements",
    product: "Recommend a movie and complete a natural ticket-buying dialogue.",
    color: "coral",
    bookStops: 5,
    checkpoints: 3,
    slides: [
      start({
        title: "Lights! Camera! Communicate!", kicker: "CLASS 07 &middot; UNIT 4 &middot; ENTERTAINMENT", time: "0-12 MIN",
        lead: "Talk about movie preferences, say what did not happen and make a complete theater arrangement.",
        tags: ["Movie types", "Simple past negative", "Making arrangements", "Buying tickets"],
        evidence: "A supported movie recommendation and a successful customer-clerk role-play.",
        purpose: "Launch the unit through a familiar entertainment context.", say: "Today English helps us choose, arrange and buy.",
        notes: ["Elicit favorite movie types without requiring titles.", "Retrieve four irregular past verbs from Unit 3."], answer: "Students identify the two final products."
      }),
      page({
        title: "Meet the unit: make a movie", time: "12-40 MIN", page: "48-49", refs: "Exercises 1-6", audio: "Audio 042-043",
        visual: "movie-night-sequence.png", visualLabel: "Entertainment conversation and movie-making visual prompt",
        lead: "Follow a student video about fossil fuels and notice how past questions and answers work in a real exchange.",
        exercises: [
          { label: "1", task: "<strong>Read and listen.</strong> Identify the two problems with fossil fuels mentioned in the video." },
          { label: "2", task: "<strong>Comprehension.</strong> Answer the five questions about the video, the school and the students' plan." },
          { label: "3", task: "<strong>Choose.</strong> Select the correct simple-past alternative in each exchange." },
          { label: "4", task: "<strong>Listen and repeat.</strong> Copy the question and answer rhythm." },
          { label: "5-6", task: "<strong>Create and perform.</strong> Write three mini-dialogues about last night; ask, answer and react naturally." }
        ],
        purpose: "Establish context and diagnose simple-past question control.", say: "Use the whole conversation to decide which form fits.",
        notes: ["Clarify documentary, lines and fossil fuels.", "Accept truthful or invented last-night activities."], answer: "Fossil fuels are expensive and harmful to the environment; accurate did questions and past answers."
      }),
      check({
        title: "Did the question keep its base verb?", time: "40-54 MIN", lead: "Past questions use did plus the base form.",
        task: '<p>Repair and answer: <strong>Did you learned your lines?</strong> / <strong>What did the school decided?</strong> / <strong>Did she went out?</strong></p>',
        support: "Circle did, return the following verb to its base form, then answer with a past form when needed.",
        ready: "Correct all three and give complete short answers.", challenge: "Add a question-word question and a negative answer.",
        purpose: "Prevent double marking of the past.", say: "Did carries the past; the next verb stays simple.",
        notes: ["Expected: learn, decide, go.", "Contrast the question with a past affirmative answer."], answer: "Did you learn...? What did the school decide? Did she go out?"
      }),
      page({
        title: "Build a movie vocabulary", time: "54-84 MIN", page: "50", refs: "Exercises 1-4", audio: "Audio 044-045", workbook: "Workbook W20",
        visual: "movie-genres.png", visualLabel: "Nine visual clues for movie genres",
        lead: "Classify movies, listen for preferences and conduct a short survey.",
        exercises: [
          { label: "1", task: "<strong>Match.</strong> Connect nine posters to action, animated, fantasy, horror, sci-fi, comedy, romcom, romance and musical." },
          { label: "2", task: "<strong>Listen and repeat.</strong> Mark the stressed word in each movie type." },
          { label: "3", task: "<strong>Listen for preference.</strong> Complete Mia and her dad's conversation with movie types." },
          { label: "4", task: "<strong>Survey.</strong> Complete the preference stems, compare choices and report one similarity." }
        ],
        purpose: "Develop a usable movie-type lexical set.", say: "A preference becomes useful when you can explain it.",
        notes: ["Model I love, I like, I don't mind, I don't like, I can't stand.", "Allow romcom as the informal form of romantic comedy."], answer: "Nine movie types plus a preference with a reason."
      }),
      page({
        title: "Say what did not happen", time: "84-112 MIN", page: "51", refs: "Grammar chart + Exercises 1-4 + Challenge", workbook: "Workbook W20",
        visual: "movie-night-sequence.png", visualLabel: "Past-event visual support for affirmative and negative sentences",
        lead: "Form the simple past negative with did not or didn't plus the base verb.",
        exercises: [
          { label: "Think", task: "<strong>Choose the rule.</strong> We form the negative with did not + base verb." },
          { label: "1", task: "<strong>Complete.</strong> Use the negative forms of pass, bring, sleep, win, see and clean." },
          { label: "2", task: "<strong>Rewrite.</strong> Change six affirmative past sentences to negative sentences." },
          { label: "3", task: "<strong>Correct the account.</strong> Use the clues to say what Leah did not do and what she did instead." },
          { label: "4 + Challenge", task: "<strong>Personalize.</strong> Check yesterday's activities, then write five affirmative or negative weekend sentences." }
        ],
        purpose: "Systematize simple-past negatives with regular and irregular verbs.", say: "Didn't carries the past, so the main verb returns to base form.",
        notes: ["Pause for a 10-minute break after this Book Stop.", "Contrast didn't see with not didn't saw."], answer: "Subject + didn't + base verb; the form is identical for every subject."
      }),
      check({
        title: "One past marker is enough", time: "122-136 MIN", lead: "Find and remove the double past markers.",
        task: '<div class="mini-board"><p>Correct: I didn\'t <u>went</u> out. / She <u>didn\'t bought</u> popcorn. / We <u>not watched</u> TV.</p><p>Then write one true affirmative-negative contrast.</p></div>',
        support: "Build each negative from: subject + didn't + base verb.", ready: "Correct all three and explain the pattern.",
        challenge: "Write three corrections using new irregular verbs.", purpose: "Check negative form independently.",
        say: "Keep the time meaning, but mark past only once.", notes: ["Expected: didn't go; didn't buy; didn't watch."], answer: "I didn't go out. She didn't buy popcorn. We didn't watch TV."
      }),
      page({
        title: "Make arrangements and buy tickets", time: "136-174 MIN", page: "52", refs: "Exercises 1-2", audio: "Audio 046-047", workbook: "Workbook W22",
        visual: "movie-night-sequence.png", visualLabel: "Choose, arrange, buy and review: visual sequence",
        lead: "Complete two connected conversations: choosing a movie and buying tickets.",
        exercises: [
          { label: "1A", task: "<strong>Choose a movie.</strong> Complete Sofia and Luis's conversation using the four planning questions." },
          { label: "1B", task: "<strong>Buy tickets.</strong> Complete the theater exchange with quantity, price and screen information." },
          { label: "2", task: "<strong>Skill focus.</strong> Use Let me see and Just a second to take time to think without ending the conversation." },
          { label: "Practice", task: "<strong>Rebuild.</strong> Perform both conversations with a new movie, theater, price and screen." }
        ],
        purpose: "Model the complete sequence from plan to purchase.", say: "A natural speaker can pause and still hold the turn.",
        notes: ["Drill What do you want to see? and Can I have two tickets?", "Require please and thank you."], answer: "Plan: movie/place/time. Purchase: number/type of tickets, price, screen and thanks."
      }),
      page({
        title: "Use theater information", time: "174-202 MIN", page: "53", refs: "Exercises 3-4 + Challenge", audio: "Audio 048", workbook: "Workbook W22",
        visual: "movie-night-sequence.png", visualLabel: "Movie-theater interaction support",
        lead: "Listen for exact details, use a movie listing and adapt a ticket dialogue.",
        exercises: [
          { label: "3", task: "<strong>Listen.</strong> Choose the correct game, movie type, title, age, price, change and screen." },
          { label: "Beat the clock", task: "<strong>Classify.</strong> List movies currently playing and decide each type." },
          { label: "4", task: "<strong>Pairwork.</strong> Select a screen and role-play customer and clerk using the listing." },
          { label: "Challenge", task: "<strong>Create.</strong> Write a ticket dialogue for a festival, theater show or sports event." }
        ],
        purpose: "Transfer the model to real information and varied events.", say: "Listen for the numbers that change the transaction.",
        notes: ["Students calculate change aloud.", "Switch roles and details for round two."], answer: "A complete, polite and numerically accurate ticket exchange."
      }),
      check({
        title: "Can the customer leave with the right ticket?", time: "202-217 MIN", lead: "The transaction must be complete and accurate.",
        task: '<p>Customer secretly chooses an event, ticket quantity and age category. Clerk asks enough questions to issue the correct tickets, price, change and location.</p>',
        support: "Use: What do you want to see? / Can I have ___? / That's ___. / What screen is it on?",
        ready: "Complete the transaction with no missing detail and one natural thinking phrase.", challenge: "Add a sold-out problem and negotiate a different time or screen.",
        purpose: "Check functional independence.", say: "The correct ticket is the evidence that the conversation worked.",
        notes: ["Use invented prices and play money.", "Assess clarity before speed."], answer: "Correct event, quantity, category, total, change and screen."
      }),
      C.standard({
        title: "Movie-night mission", kicker: "FINAL PERFORMANCE &middot; RECOMMEND + ARRANGE + BUY", time: "217-237 MIN",
        lead: "Move from preference to a completed plan.",
        body: '<div class="goal-grid"><div><span>1</span><h3>Recommend</h3><p>Compare two movie types and recommend one with a reason.</p></div><div><span>2</span><h3>Arrange</h3><p>Agree on the movie, theater and time.</p></div><div><span>3</span><h3>Buy</h3><p>Purchase the correct tickets and confirm the screen.</p></div></div>',
        teacher: teacher("Integrate the first half of Unit 4.", "Start with what you like; finish with tickets in hand.", ["Groups of three: two friends and a clerk.", "Use a simple performance checklist."], "Preference + reason, complete arrangement and accurate purchase.")
      }),
      C.standard({
        title: "Exit scene", kicker: "REFLECT &middot; NEXT STEP", time: "237-240 MIN", lead: "Leave evidence from vocabulary, grammar and speaking.",
        body: '<div class="exit-grid"><div><span>V</span><p>Name two contrasting movie types.</p></div><div><span>G</span><p>Write one correct past negative.</p></div><div><span>S</span><p>Write one ticket request.</p></div></div><div class="prompt-box"><strong>Next:</strong> SB 54-59. Bring one remembered movie experience or invent one.</div>',
        teacher: teacher("Capture individual evidence.", "Your exit scene tells us what needs a replay.", ["Sort tickets by vocabulary, negative form and transaction language."], "Two types, one didn't sentence and one polite request.")
      })
    ]
  });

  lessons.push({
    id: 8,
    date: "Saturday, September 5",
    shortDate: "SEP 05",
    unit: "Unit 4 - Entertainment",
    pages: "Student Book 54-59",
    title: "Tell the story and review the movie",
    subtitle: "Past questions, weekend listening, movie reading and review writing",
    product: "Interview a partner about a weekend and write a balanced movie review.",
    color: "coral",
    bookStops: 6,
    checkpoints: 3,
    slides: [
      start({
        title: "From questions to reviews", kicker: "CLASS 08 &middot; UNIT 4 &middot; ENTERTAINMENT", time: "0-12 MIN",
        lead: "Ask precise past questions, understand an exciting weekend and turn movie evidence into a useful review.",
        tags: ["Past questions", "Listening", "Movie interview", "Review writing", "Critical thinking"],
        evidence: "A clear weekend interview and a balanced, spoiler-free movie review.",
        purpose: "Frame the second half as evidence-based communication.", say: "Good questions recover details; good reviews help another person decide.",
        notes: ["Retrieve didn't + base verb.", "Preview the final review criteria."], answer: "Students identify interview and written review products."
      }),
      page({
        title: "Ask about the past", time: "12-44 MIN", page: "54", refs: "Exercises 1-4 + Challenge", workbook: "Workbook W21",
        visual: "movie-night-sequence.png", visualLabel: "Visual prompts for simple-past questions",
        lead: "Form yes/no and information questions with did, then answer with useful detail.",
        exercises: [
          { label: "1", task: "<strong>Complete.</strong> Build six questions and short answers with did and didn't." },
          { label: "2", task: "<strong>Write.</strong> Form questions from prompts, then add affirmative or negative short answers." },
          { label: "3", task: "<strong>Question words.</strong> Complete what, who, why, when, where and what time questions." },
          { label: "4", task: "<strong>Dialogue.</strong> Complete the conversation with simple-past forms and explain each choice." },
          { label: "Challenge", task: "<strong>Interview.</strong> Write five weekend questions and record your partner's answers." }
        ],
        purpose: "Consolidate simple-past interrogatives and short answers.", say: "Choose the question word from the missing information.",
        notes: ["Contrast Who did you go with? and Who went with you? only if useful.", "Require base verbs after did."], answer: "Question word + did + subject + base verb; Did + subject + base verb?"
      }),
      check({
        title: "Does the question match the answer?", time: "44-58 MIN", lead: "Form and meaning must work together.",
        task: '<p>Write a question for each answer: <strong>At 7:30.</strong> / <strong>With my cousin.</strong> / <strong>Because it was funny.</strong> / <strong>No, I didn\'t.</strong></p>',
        support: "Identify the missing category first: time, person, reason or yes/no.", ready: "Write four correctly formed matching questions.",
        challenge: "Add a natural follow-up to every answer.", purpose: "Check question-word selection and word order.",
        say: "The answer tells you which door the question must open.", notes: ["Accept multiple logical base verbs."], answer: "What time...? Who ... with? Why...? Did...?"
      }),
      page({
        title: "Understand an exciting weekend", time: "58-88 MIN", page: "55", refs: "Exercises 1-4", audio: "Audio 049", workbook: "Workbook W22",
        visual: "movie-night-sequence.png", visualLabel: "Weekend entertainment sequence for prediction and listening",
        lead: "Use posters to predict, listen for key information and retell a weekend experience.",
        exercises: [
          { label: "Skill focus", task: "<strong>Read.</strong> Look at questions before listening and focus only on the information needed." },
          { label: "1", task: "<strong>First listen.</strong> Choose Mia's day, companion, number of rides and ticket information." },
          { label: "2", task: "<strong>Second listen.</strong> Complete Ryan's four questions with question words and key nouns." },
          { label: "3-4", task: "<strong>Imagine and present.</strong> Choose a poster, answer the questions and tell the class about the weekend." }
        ],
        purpose: "Teach selective listening for key information.", say: "Read the questions first; they tell your ears what to collect.",
        notes: ["Use the Fantasy Fun Park, Dovedale Studios and music festival posters.", "Pause for a 10-minute break after presentation."], answer: "Accurate day, companion, activities, price/payer details and a sequenced retell."
      }),
      check({
        title: "Can a listener rebuild the weekend?", time: "98-112 MIN", lead: "Ask until the event has who, what, when, where and evaluation.",
        task: '<p>Partner A tells only: “I had a great weekend.” Partner B asks five different past questions and reports the reconstructed experience.</p>',
        support: "Use Who...? What...? When...? Where...? How much...? Why...?",
        ready: "Ask five accurate questions and report four correct details.", challenge: "Include one negative question and one follow-up based on an answer.",
        purpose: "Check questioning as an information-building skill.", say: "Do not read a list; listen and choose the next useful question.",
        notes: ["Allow imagined weekends.", "Reporter should use past forms."], answer: "A coherent retell supported by answers to five varied questions."
      }),
      page({
        title: "Read a movie fan interview", time: "112-144 MIN", page: "56", refs: "Exercises 1-3", audio: "Audio 050",
        visual: "movie-genres.png", visualLabel: "Movie genres for prediction and discussion",
        lead: "Use paraphrasing to connect questions and answers in an interview.",
        exercises: [
          { label: "Skill focus", task: "<strong>Notice paraphrasing.</strong> Match different words that express the same idea." },
          { label: "1", task: "<strong>Read and choose.</strong> Identify Jenny's usual movies, frequency and preferences." },
          { label: "2", task: "<strong>Answer.</strong> Locate evidence about the challenge, languages, Bollywood movie, popcorn and phones." },
          { label: "3", task: "<strong>Respond.</strong> Decide whether you would take the challenge and support your answer." }
        ],
        purpose: "Build reading comprehension through paraphrase recognition.", say: "The question and the text may point to the same idea with different words.",
        notes: ["Clarify subtitles, special effects and ending.", "Require line or phrase evidence before opinions."], answer: "Accurate comprehension plus one evidence-supported response."
      }),
      page({
        title: "Plan and write a theater visit", time: "144-178 MIN", page: "57", refs: "Exercises 1-4", workbook: "Workbook W23",
        visual: "movie-night-sequence.png", visualLabel: "Visual sequence for planning a theater-visit description",
        lead: "Organize a three-paragraph description with context, positive detail and constructive criticism.",
        exercises: [
          { label: "1", task: "<strong>Complete the model.</strong> Use simple-past verbs to finish the MovieWorld customer survey." },
          { label: "2", task: "<strong>Analyze.</strong> Match each paragraph to basic information, likes or dislikes." },
          { label: "3", task: "<strong>Plan.</strong> Note when, who, what, positive details and negative details." },
          { label: "4", task: "<strong>Draft.</strong> Write a three-paragraph description of a movie-theater visit." }
        ],
        purpose: "Use paragraph purpose to organize past experience writing.", say: "Give the reader context before evaluation.",
        notes: ["Plan 6 minutes, draft 15, peer check 7.", "A fictional visit is acceptable."], answer: "Paragraph 1 context; paragraph 2 likes; paragraph 3 dislikes, with accurate past forms."
      }),
      page({
        title: "Review a movie responsibly", time: "178-208 MIN", page: "58", refs: "Exercises 1-5", workbook: "Workbook W24-25",
        visual: "movie-night-sequence.png", visualLabel: "Visual prompt for a balanced movie review",
        lead: "Describe, evaluate and recommend without spoilers or personal information.",
        exercises: [
          { label: "1", task: "<strong>Discuss.</strong> Compare four movie images and choose what you would prefer to see." },
          { label: "2", task: "<strong>Read the guide.</strong> Identify what information helps a reader choose a movie." },
          { label: "3", task: "<strong>Evaluate.</strong> Read two reviews and check whether each follows the four review rules." },
          { label: "4", task: "<strong>Groupwork.</strong> Discuss a familiar movie using the question bank." },
          { label: "5", task: "<strong>Pairwork.</strong> Compare movie preferences and explain the last movie you saw." }
        ],
        purpose: "Develop critical, balanced and digitally responsible reviewing.", say: "A review is useful when it gives reasons without giving away the story.",
        notes: ["Teach constructive criticism, script, spoiler, plot, recommend and rubbish.", "Take a 10-minute break after the checklist."], answer: "Describe; evaluate clearly; include positives and negatives; protect privacy and avoid spoilers."
      }),
      check({
        title: "Would this review help you choose?", time: "218-231 MIN", lead: "Test a review against four reader needs.",
        task: '<div class="mini-board"><p>Review: “It was good. I liked it. Watch it.”</p><p>Improve it with a movie type, one plot detail without a spoiler, one positive, one constructive negative and a recommendation.</p></div>',
        support: "Use: It is a ___. It is about ___. I liked __ because __. However, __. I recommend it to __.",
        ready: "Produce a balanced five-sentence review that supports its judgment.", challenge: "Add a title, star rating and precise audience recommendation.",
        purpose: "Check whether review criteria transfer to new writing.", say: "Replace empty praise with evidence a reader can use.",
        notes: ["Check privacy and spoilers as well as language."], answer: "Type, spoiler-free description, positive, constructive negative and recommendation."
      }),
      page({
        title: "Prove your Unit 4 progress", time: "231-237 MIN", page: "59", refs: "Language practice 1-4 + Reflect",
        visual: "movie-genres.png", visualLabel: "Movie genre retrieval support",
        lead: "Retrieve movie vocabulary, arrangements, past negatives and past questions.",
        exercises: [
          { label: "1", task: "<strong>Vocabulary.</strong> Read five descriptions and write the movie type." },
          { label: "2", task: "<strong>Communication.</strong> Reorder the movie-arrangement dialogue." },
          { label: "3", task: "<strong>Negative.</strong> Complete past-negative sentences with the verbs in the box." },
          { label: "4", task: "<strong>Questions.</strong> Choose correct simple-past question forms and short answers." },
          { label: "Reflect", task: "<strong>Self-assess.</strong> Name new information, useful language and the lesson you enjoyed most." }
        ],
        purpose: "Gather concise end-of-unit evidence.", say: "Use the result to choose your next practice target.",
        notes: ["Students rate each I can statement honestly.", "Assign targeted practice, not every exercise."], answer: "Independent evidence across vocabulary, communication and both simple-past forms."
      }),
      C.standard({
        title: "The critic's desk", kicker: "FINAL PERFORMANCE &middot; INTERVIEW + REVIEW", time: "237-239 MIN", lead: "Turn a conversation into a recommendation.",
        body: '<div class="goal-grid"><div><span>1</span><h3>Interview</h3><p>Ask five varied questions about a movie experience.</p></div><div><span>2</span><h3>Evaluate</h3><p>Record positive and negative evidence.</p></div><div><span>3</span><h3>Review</h3><p>Give a balanced, spoiler-free recommendation.</p></div></div>',
        teacher: teacher("Integrate Unit 4 receptive and productive goals.", "Ask for evidence, then write for a real reader.", ["Complete orally now; collect the polished review as follow-up if needed."], "Five accurate questions plus a balanced recommendation based on answers.")
      }),
      C.standard({
        title: "Unit 4: final cut", kicker: "REFLECT &middot; UNIT COMPLETE", time: "239-240 MIN", lead: "Name one strength and one next target.",
        body: '<div class="exit-grid"><div><span>Q</span><p>Write your strongest past question.</p></div><div><span>R</span><p>State one rule for a useful review.</p></div><div><span>&#9733;</span><p>Choose: ready, review or challenge.</p></div></div>',
        teacher: teacher("Close the unit with metacognitive evidence.", "The final cut keeps what works and marks what needs another take.", ["Save one anonymous model question and review sentence."], "One accurate question, one valid review principle and an honest next step.")
      })
    ]
  });
}());
