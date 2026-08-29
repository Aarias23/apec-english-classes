const places = [
  ["🛒", "supermarket", "buy groceries"], ["🏥", "hospital", "see a doctor"], ["💊", "pharmacy", "buy medicine"],
  ["🏦", "bank", "get money"], ["🏫", "school", "study"], ["📚", "library", "borrow a book"],
  ["🍽️", "restaurant", "eat a meal"], ["🌳", "park", "relax outside"], ["🎬", "movie theater", "watch a movie"],
  ["👮", "police station", "ask the police for help"], ["🥖", "bakery", "get some bread"], ["🚏", "bus stop", "catch a bus"],
  ["🏋️", "gym", "exercise"], ["📮", "post office", "send a package"], ["🛍️", "shopping mall", "go shopping"]
];

const foods = [
  ["🍎", "apple", "fruit"], ["🍌", "banana", "fruit"], ["🥕", "carrot", "vegetable"], ["🥦", "broccoli", "vegetable"],
  ["🥚", "egg", "protein"], ["🍅", "tomato", "vegetable"], ["🍚", "rice", "grain"], ["🍞", "bread", "grain"],
  ["🥛", "milk", "drink"], ["💧", "water", "drink"], ["🧀", "cheese", "dairy"], ["🍗", "chicken", "protein"],
  ["🐟", "fish", "protein"], ["🥗", "salad", "meal"], ["🍟", "fries", "fast food"], ["🍕", "pizza", "fast food"],
  ["🍔", "burger", "fast food"], ["🍩", "donut", "sweet"], ["🍬", "candy", "sweet"], ["🥤", "soda", "drink"],
  ["🧃", "juice", "drink"], ["🍪", "cookie", "sweet"], ["🧂", "salt", "seasoning"], ["🍬", "sugar", "sweetener"]
];

const placeGrid = () => `<div class="vocab-grid">${places.map(([icon,word,use]) => `<div class="vocab-card"><span class="icon">${icon}</span><strong>${word}</strong><small>${use}</small></div>`).join("")}</div>`;
const foodGrid = () => `<div class="vocab-grid food-grid">${foods.map(([icon,word,type]) => `<div class="vocab-card"><span class="icon">${icon}</span><strong>${word}</strong><small>${type}</small></div>`).join("")}</div>`;
const choice = (label, answer, group) => `<button class="choice-button" type="button" data-choice-answer="${answer}" data-choice-group="${group}">${label}</button>`;
const reveal = (label, answer) => `<button class="reveal-button" type="button" data-reveal>Reveal ${label}</button><div class="answer-panel">${answer}</div>`;
const sortButtons = (items, categories, id) => `<div class="sort-bank" data-sort-id="${id}" data-categories="${categories.join("|")}">${items.map(item => `<button class="category-button" type="button" data-correct="${item[1]}">${item[0]}</button>`).join("")}</div><div class="button-row"><button class="primary-button" type="button" data-check-sort="${id}">Check categories</button><button class="secondary-button" type="button" data-reset-sort="${id}">Reset</button></div><p class="feedback-line" data-sort-feedback="${id}">Tap each word to choose a category.</p>`;

const stages = [
  {
    phase: "Warm-up / Activation", short: "Activate", time: 10, theme: "theme-coral", interaction: "Whole class → pairs",
    title: "Your town. <em>Your table.</em>", lead: "Start with what students already know. Move, choose, explain — no notebooks yet.",
    instruction: "Stand on the LEFT for town, RIGHT for food. Then tell a partner why.",
    body: `<div class="content-grid three">
      <section class="activity-card"><span class="mini-label">MOVE · 3 MIN</span><h2>Town or food?</h2><p class="big-prompt">bakery · rice · park · apple · pharmacy · water</p><p class="micro-copy">Teacher says a word. Students move left or right.</p></section>
      <section class="activity-card accent"><span class="mini-label">PAIR · 4 MIN</span><h2>Quick connections</h2><div class="prompt-line">Where do you buy food?</div><div class="prompt-line">What food do you eat every week?</div><div class="prompt-line">What place do you visit often?</div></section>
      <section class="activity-card"><span class="mini-label">PREDICT · 3 MIN</span><h2>Complete the mission</h2><p>Today we will go from the <strong>_____</strong> to the <strong>_____</strong>.</p>${reveal("mission", "Today we will go from the <strong>town</strong> to the <strong>table</strong> — and talk about what we need.")}</section>
    </div>`,
    teacher: { objective: "Activate known vocabulary and establish the town-to-food connection.", flow: ["Call six words quickly; students point or move.", "Model one personal answer: “I visit the supermarket every Saturday.”", "Do not correct grammar yet. Collect useful words on the board."], evidence: "Students can connect at least one place with one food or activity." }
  },
  {
    phase: "Places Around Town", short: "Town words", time: 15, theme: "", interaction: "Teacher ↔ students",
    title: "Meet the <em>neighborhood.</em>", lead: "See the place, say the name, connect it to a real purpose.",
    instruction: "Look for 20 seconds. Then cover the screen and recall as many places as possible.",
    body: `${placeGrid()}<div class="question-box"><strong>Fast check</strong><p>Which place is new for you? Which three places are near your home?</p></div>`,
    teacher: { objective: "Build a useful bank of 15 town places through image, sound, and purpose.", flow: ["Choral drill once, then vary volume and speed.", "Hide the screen for a 60-second pair recall.", "Ask students to group places: services, leisure, food, transport."], evidence: "Pairs recall 10+ places and explain the purpose of 5." }
  },
  {
    phase: "Interactive Vocabulary Practice", short: "Town mission", time: 15, theme: "theme-forest", interaction: "Pairs → whole class",
    title: "Where should <em>we go?</em>", lead: "Turn vocabulary into a decision. Every answer needs a place and a reason.",
    instruction: "Partner A reads the need. Partner B answers: “Let’s go to the ___ because…”",
    body: `<div class="content-grid four">
      <section class="scenario-card"><span class="scenario-icon">🤒</span><h3>I need medicine.</h3><div class="button-row">${choice("pharmacy",1,"p1")}${choice("library",0,"p1")}</div></section>
      <section class="scenario-card"><span class="scenario-icon">🥖</span><h3>We need some bread.</h3><div class="button-row">${choice("bakery",1,"p2")}${choice("bank",0,"p2")}</div></section>
      <section class="scenario-card"><span class="scenario-icon">📦</span><h3>I need to send this.</h3><div class="button-row">${choice("post office",1,"p3")}${choice("gym",0,"p3")}</div></section>
      <section class="scenario-card"><span class="scenario-icon">🚌</span><h3>We need transportation.</h3><div class="button-row">${choice("bus stop",1,"p4")}${choice("hospital",0,"p4")}</div></section>
    </div>
    <div class="content-grid two" style="margin-top:14px"><section class="activity-card accent"><span class="mini-label">GUESSING GAME · 6 MIN</span><h2>What place am I?</h2><p>“You can ___ here. You can see ___. It is near/far from my home.”</p><p class="micro-copy">Describe without saying the place. Your partner guesses.</p></section><section class="activity-card"><span class="mini-label">CREATE · 4 MIN</span><h2>Your turn</h2><p>Create one new need. Challenge another pair to choose the best place.</p>${reveal("model", "“I want to exercise, but it is raining.” → “Let’s go to the gym.”")}</section></div>`,
    teacher: { objective: "Use places to solve everyday needs and produce purpose language.", flow: ["Model: “Where can I buy medicine?” / “At the pharmacy.”", "Pairs complete the four checks and create two clues.", "Invite three pairs to challenge the class."], evidence: "Students respond to a need with an appropriate place and a complete reason." }
  },
  {
    phase: "Healthy & Unhealthy Food", short: "Food words", time: 15, theme: "theme-sun", interaction: "Whole class → pairs",
    title: "What’s <em>on the table?</em>", lead: "A rich food bank gives us the raw material for grammar — and better choices.",
    instruction: "Name it, mime it, then add one sentence: “I eat/drink ___.”",
    body: `${foodGrid()}<div class="question-box"><strong>Memory sprint</strong><p>Close your eyes. With a partner, list 5 drinks, 5 healthy foods, and 5 treats from the screen.</p></div>`,
    teacher: { objective: "Develop a broad food and drink vocabulary set for later grammar work.", flow: ["Elicit before revealing pronunciation.", "Contrast easy pairs: chicken/kitchen, juice/Jews only if relevant to learners.", "Run a pair memory sprint; award one point per accurate item."], evidence: "Students name at least 15 foods and sort them by everyday category." }
  },
  {
    phase: "Healthy Choices", short: "Food choices", time: 15, theme: "", interaction: "Small groups",
    title: "Healthy, unhealthy… <em>or it depends?</em>", lead: "Food choices are more interesting than simple labels. Classify, defend, and reconsider.",
    instruction: "Tap each word: H = healthy, U = unhealthy. Then defend one difficult choice.",
    body: `<div class="content-grid two"><section class="activity-card"><span class="mini-label">CLASSIFY · 7 MIN</span><h2>Make the call</h2>${sortButtons([["water","healthy"],["broccoli","healthy"],["soda","unhealthy"],["candy","unhealthy"],["fish","healthy"],["fries","unhealthy"]],["healthy","unhealthy"],"health")}</section>
      <section class="activity-card coral"><span class="mini-label">DISCUSS · 5 MIN</span><h2>It depends!</h2><div class="prompt-line">Is juice always healthy?</div><div class="prompt-line">Is pizza always unhealthy?</div><div class="prompt-line">How much is too much?</div><p class="micro-copy">Use: “I think ___ because ___.”</p></section></div>
      <div class="content-grid three" style="margin-top:14px"><section class="activity-card"><h3>Describe a habit</h3><p>I usually eat ___ for breakfast.</p></section><section class="activity-card"><h3>Compare</h3><p>___ is healthier than ___.</p></section><section class="activity-card accent"><h3>Recommend</h3><p>You should eat/drink more ___.</p></section></div>`,
    teacher: { objective: "Classify foods and justify choices using simple opinion language.", flow: ["Accept nuanced answers after the digital check.", "Assign each group one ‘it depends’ question.", "Ask speakers to use because and a quantity idea."], evidence: "Groups make and justify at least three food recommendations." }
  },
  {
    phase: "Countable & Uncountable", short: "Discover C / U", time: 20, theme: "theme-violet", interaction: "Think → pair → share",
    title: "Can we count <em>the noun?</em>", lead: "Students notice the pattern first. The rule comes after the evidence.",
    instruction: "Tap each noun: C = countable, U = uncountable. What changes in the examples?",
    body: `<div class="content-grid two"><section class="activity-card"><span class="mini-label">NOTICE</span><h2>One, two, three…</h2><div class="formula">an apple → two apples → three apples</div><p>A <strong>countable noun</strong> has singular and plural forms. We can use a number.</p><span class="example-chip">a carrot</span><span class="example-chip">four eggs</span><span class="example-chip">many bananas</span></section>
      <section class="activity-card"><span class="mini-label">NOTICE</span><h2>Some, but not “two”</h2><div class="formula">some rice · some water · some sugar</div><p>An <strong>uncountable noun</strong> is treated as a mass. It normally has no plural form.</p><span class="example-chip">some bread</span><span class="example-chip">much milk</span><span class="example-chip">a little salt</span></section></div>
      <section class="activity-card" style="margin-top:14px"><h3>Immediate check</h3>${sortButtons([["apple","countable"],["rice","uncountable"],["eggs","countable"],["water","uncountable"],["tomato","countable"],["cheese","uncountable"],["cookies","countable"],["sugar","uncountable"]],["countable","uncountable"],"count")}</section>`,
    teacher: { objective: "Induce the difference between countable and uncountable nouns from examples.", flow: ["Ask: Can I say one apple? two apples? one rice?", "Pairs classify before you formalize the definitions.", "Clarify that meaning can change: chicken (food) / a chicken (animal)."], evidence: "Students classify 7/8 nouns and explain the number/plural test." }
  },
  {
    phase: "Grammar in Context", short: "a / an / some", time: 15, theme: "", interaction: "Teacher ↔ students → pairs",
    title: "One item or <em>an amount?</em>", lead: "Choose the determiner by asking two questions: Can I count it? Is it one or more than one?",
    instruction: "Predict the missing word before selecting. Say the whole phrase aloud.",
    body: `<table class="grammar-table"><thead><tr><th>Form</th><th>Use</th><th>Town-to-table example</th></tr></thead><tbody>
      <tr><td>a</td><td>one singular countable noun + consonant sound</td><td>a banana · a supermarket · a useful store</td></tr>
      <tr><td>an</td><td>one singular countable noun + vowel sound</td><td>an apple · an egg · an hour</td></tr>
      <tr><td>some</td><td>plural countable or uncountable; positive idea</td><td>some carrots · some rice · some water</td></tr></tbody></table>
      <div class="content-grid three" style="margin-top:14px">
        <section class="activity-card"><p>We need ___ apple.</p><div class="button-row">${choice("a",0,"a1")}${choice("an",1,"a1")}${choice("some",0,"a1")}</div></section>
        <section class="activity-card"><p>Let’s buy ___ rice.</p><div class="button-row">${choice("a",0,"a2")}${choice("an",0,"a2")}${choice("some",1,"a2")}</div></section>
        <section class="activity-card"><p>There are ___ vegetables.</p><div class="button-row">${choice("a",0,"a3")}${choice("an",0,"a3")}${choice("some",1,"a3")}</div></section>
      </div><div class="question-box"><strong>Create your own:</strong> In pairs, make one sentence with <em>a</em>, one with <em>an</em>, and one with <em>some</em>.</div>`,
    teacher: { objective: "Select a, an, or some according to sound, countability, and number.", flow: ["Say ‘a useful store’ and ‘an hour’ to show sound—not spelling—controls a/an.", "Students vote, then explain why before clicking.", "Pairs create examples using the town or food vocabulary."], evidence: "Students produce three accurate original examples and self-correct determiner errors." }
  },
  {
    phase: "Questions & Negatives", short: "some / any", time: 15, theme: "theme-sky", interaction: "Pairs",
    title: "Do we have <em>any?</em>", lead: "A shopping conversation creates a natural reason for questions, positive answers, and negative answers.",
    instruction: "Partner A asks. Partner B answers yes or no. Swap roles after every item.",
    body: `<div class="content-grid two"><section class="activity-card"><span class="mini-label">PATTERN</span><h2>Shopping check</h2><div class="dialogue"><div class="speech">Do we have <strong>any apples</strong>?</div><div class="speech b">Yes, we have <strong>some apples</strong>.</div><div class="speech">Is there <strong>any milk</strong>?</div><div class="speech b">No, there isn’t <strong>any milk</strong>.</div></div></section>
      <section class="activity-card"><span class="mini-label">RULE</span><h2>Default pattern</h2><p><strong>some</strong> → positive statements</p><p><strong>any</strong> → most questions and negative statements</p><div class="question-box"><p>Offers and requests can use <strong>some</strong>:</p><p>Would you like <strong>some</strong> water?</p></div></section></div>
      <div class="content-grid three" style="margin-top:14px"><section class="activity-card"><p>Do you need ___ bread?</p><div class="button-row">${choice("some",0,"s1")}${choice("any",1,"s1")}</div></section><section class="activity-card"><p>We don’t have ___ eggs.</p><div class="button-row">${choice("some",0,"s2")}${choice("any",1,"s2")}</div></section><section class="activity-card"><p>We have ___ cheese.</p><div class="button-row">${choice("some",1,"s3")}${choice("any",0,"s3")}</div></section></div>`,
    teacher: { objective: "Use some and any in affirmative statements, questions, and negatives.", flow: ["Build the dialogue one line at a time.", "Drill natural short answers: Yes, we do / No, we don’t.", "Pairs replace the bold nouns with six foods."], evidence: "Pairs sustain a six-turn pantry check with accurate some/any choices." }
  },
  {
    phase: "Quantity Language", short: "much / many", time: 20, theme: "theme-forest", interaction: "Think → pair → share",
    title: "How much? <em>How many?</em>", lead: "Match the question to the noun, then answer with a useful quantity expression.",
    instruction: "First identify C or U. Then choose much or many and give a realistic answer.",
    body: `<div class="content-grid two"><section class="activity-card"><span class="mini-label">COUNTABLE</span><h2>How many…?</h2><div class="formula">How <span class="highlight">many</span> bananas do we need?</div><p>many · a few · not many · lots of + <strong>plural noun</strong></p><p><strong>Answer:</strong> We need six bananas.</p></section><section class="activity-card"><span class="mini-label">UNCOUNTABLE</span><h2>How much…?</h2><div class="formula">How <span class="highlight">much</span> water do we need?</div><p>much · a little · not much · lots of + <strong>uncountable noun</strong></p><p><strong>Answer:</strong> We need two bottles of water.</p></section></div>
      <table class="grammar-table" style="margin-top:14px"><thead><tr><th>Noun type</th><th>Small quantity</th><th>Large quantity</th><th>Container / unit</th></tr></thead><tbody><tr><td>Countable</td><td>a few apples</td><td>many / lots of apples</td><td>six apples</td></tr><tr><td>Uncountable</td><td>a little rice</td><td>much / lots of rice</td><td>a bag of rice</td></tr><tr><td>Uncountable</td><td>a little water</td><td>much / lots of water</td><td>two bottles of water</td></tr></tbody></table>
      <div class="question-box"><strong>Find the mistake</strong><p><span class="mistake">How many rice</span> do we need? · We don’t have <span class="mistake">many milk</span>.</p>${reveal("corrections", "<span class='correction'>How much rice</span> do we need? · We don’t have <span class='correction'>much milk</span>.")}</div>`,
    teacher: { objective: "Distinguish much/many and expand answers with quantity expressions and units.", flow: ["Always ask C or U before much or many.", "Contrast a few (some) with few (almost none) only if level allows.", "Students repair the mistakes, then write two new incorrect sentences for another pair."], evidence: "Students ask and answer four quantity questions with accurate noun agreement." }
  },
  {
    phase: "Guided Practice", short: "Grammar clinic", time: 20, theme: "", interaction: "Pairs → teams",
    title: "The grammar <em>clinic.</em>", lead: "Diagnose the problem, repair it, and explain the rule in plain English.",
    instruction: "One point for the correction. One bonus point for a clear reason.",
    body: `<div class="content-grid two"><section class="activity-card coral"><span class="mini-label">FIND THE MISTAKE</span><h2>Repair shop</h2><div class="prompt-line">1. I need an bread.</div><div class="prompt-line">2. There are much apples.</div><div class="prompt-line">3. We don’t have some water.</div><div class="prompt-line">4. How many sugar do you want?</div>${reveal("answers", "1. <strong>some bread</strong> · 2. <strong>many apples</strong> · 3. <strong>any water</strong> · 4. <strong>How much sugar…?</strong>")}</section>
      <section class="activity-card"><span class="mini-label">CHOOSE + EXPLAIN</span><h2>Quick rounds</h2><p>There is ___ orange in the bag.</p><div class="button-row">${choice("a",0,"g1")}${choice("an",1,"g1")}${choice("some",0,"g1")}</div><p>How ___ vegetables do we need?</p><div class="button-row">${choice("much",0,"g2")}${choice("many",1,"g2")}</div><p>We have ___ rice, but not much.</p><div class="button-row">${choice("a few",0,"g3")}${choice("a little",1,"g3")}</div></section></div>
      <div class="content-grid three" style="margin-top:14px"><section class="activity-card"><h3>Level 1 · Name it</h3><p>Countable or uncountable?</p></section><section class="activity-card"><h3>Level 2 · Build it</h3><p>Add a/an, some/any, much/many.</p></section><section class="activity-card accent"><h3>Level 3 · Use it</h3><p>Make it true about your kitchen.</p></section></div>`,
    teacher: { objective: "Consolidate all target grammar through correction, selection, and explanation.", flow: ["Teams use mini whiteboards or paper.", "Reveal only after every team commits.", "For the final round, require a true personal sentence—not a copied model."], evidence: "Teams correct 3/4 errors and accurately explain the noun type behind each choice." }
  },
  {
    phase: "Real-life Situation", short: "Supermarket lab", time: 20, theme: "theme-sun", interaction: "Pair role play",
    title: "At the <em>supermarket.</em>", lead: "Plan a real shopping trip: check what you have, decide quantities, and negotiate priorities.",
    instruction: "Choose a scenario. Partner A checks the pantry; Partner B manages the shopping list.",
    body: `<div class="content-grid three"><section class="scenario-card"><span class="scenario-icon">🥞</span><h3>Breakfast for 4</h3><p>You have bread and sugar. You need a healthy breakfast and two drinks.</p></section><section class="scenario-card"><span class="scenario-icon">🧺</span><h3>Picnic for 6</h3><p>Two people don’t eat meat. Choose portable food and enough water.</p></section><section class="scenario-card"><span class="scenario-icon">🍲</span><h3>Dinner for 5</h3><p>You have chicken and rice. Add vegetables, a drink, and dessert.</p></section></div>
      <div class="content-grid two" style="margin-top:14px"><section class="activity-card"><span class="mini-label">LANGUAGE BANK</span><div class="dialogue"><div class="speech">Do we have any ___?</div><div class="speech b">Yes, we have some ___.</div><div class="speech">How much / many ___ do we need?</div><div class="speech b">We need a little / a few / ___.</div><div class="speech">Let’s go to the supermarket.</div></div></section><section class="activity-card accent"><span class="mini-label">LIVE LIST</span><div class="shopping-list"><label><input type="checkbox"> a fruit</label><label><input type="checkbox"> a vegetable</label><label><input type="checkbox"> some protein</label><label><input type="checkbox"> a healthy drink</label><label><input type="checkbox"> one treat</label></div><p class="micro-copy">Success: 8+ lines of conversation and a complete list.</p></section></div>`,
    teacher: { objective: "Integrate food vocabulary and quantity grammar in a purposeful shopping exchange.", flow: ["Assign or let pairs choose one scenario.", "Preparation: 4 min; role play: 5 min; swap scenario: 5 min.", "Listen for intelligibility first; record two class-wide corrections for delayed feedback."], evidence: "Pairs complete an 8-line exchange including any, some, much/many, and two quantity answers." }
  },
  {
    phase: "Healthy Meal Challenge", short: "Build a meal", time: 20, theme: "theme-coral", interaction: "Small groups",
    title: "Build a meal <em>worth sharing.</em>", lead: "Create, quantify, pitch, and improve a healthy meal for a real audience.",
    instruction: "Pick a meal and audience. Your pitch must include 6 foods, 4 quantities, and 2 reasons.",
    body: `<div class="content-grid four"><section class="activity-card"><span class="mini-label">1 · CHOOSE</span><h2>Meal</h2><p>breakfast · lunch · dinner · picnic</p></section><section class="activity-card"><span class="mini-label">2 · AUDIENCE</span><h2>For whom?</h2><p>a child · an athlete · a busy student · a family</p></section><section class="activity-card"><span class="mini-label">3 · BUILD</span><h2>Quantify</h2><p>some rice · three eggs · a little sugar · two bottles of water</p></section><section class="activity-card accent"><span class="mini-label">4 · PITCH</span><h2>Recommend</h2><p>“Our meal is healthy because…”</p></section></div>
      <div class="content-grid two" style="margin-top:14px"><section class="activity-card"><h3>Success checklist</h3><div class="shopping-list"><label><input type="checkbox"> 6 food or drink words</label><label><input type="checkbox"> a / an / some / any</label><label><input type="checkbox"> much or many</label><label><input type="checkbox"> 4 clear quantities</label><label><input type="checkbox"> 2 health reasons</label></div></section><section class="activity-card"><span class="mini-label">PEER RESPONSE</span><h2>Two stars + one upgrade</h2><p>⭐ One strong food choice</p><p>⭐ One accurate grammar choice</p><p>↗ One way to make the meal healthier or clearer</p></section></div>`,
    teacher: { objective: "Design and present a healthy meal using precise quantity language.", flow: ["Groups of 3–4 assign roles: planner, language coach, speaker, checker.", "Give 9 minutes to design and 1 minute per pitch.", "Audience records two stars and one upgrade for one group."], evidence: "The pitch meets four of five checklist targets and every student speaks." }
  },
  {
    phase: "Speaking Challenge", short: "Town to table", time: 20, theme: "theme-forest", interaction: "Rotating pairs",
    title: "Town-to-table <em>missions.</em>", lead: "No script. Draw a mission, solve the situation, and keep the conversation moving.",
    instruction: "Generate a mission. Speak for 60–90 seconds. Change partners and generate again.",
    body: `<div class="content-grid two"><section class="activity-card"><span class="mini-label">RANDOM MISSION</span><h2>Your situation</h2><div class="generator-output" id="mission-output">Press the button when your partner is ready.</div><button class="generator-button" type="button" data-generator="mission">Generate mission</button></section><section class="activity-card accent"><span class="mini-label">MUST-USE LANGUAGE</span><div class="prompt-line">Where can we get ___?</div><div class="prompt-line">Do we have any ___?</div><div class="prompt-line">We need some ___.</div><div class="prompt-line">How much / many ___?</div><div class="prompt-line">Let’s go to the ___.</div></section></div>
      <div class="question-box"><strong>Listener challenge:</strong> count accurate target phrases on your fingers. At the end, give one useful correction and one compliment.</div>`,
    teacher: { objective: "Transfer all target language to unscripted problem-solving conversations.", flow: ["Run three rotations of 4 minutes: 1 prepare, 2 speak, 1 feedback.", "Students must generate a new mission each rotation.", "Stop between rounds for one 30-second class-wide language upgrade."], evidence: "Students sustain a 60-second exchange using at least three target structures." }
  },
  {
    phase: "Review & Exit Ticket", short: "Review / exit", time: 20, theme: "theme-violet", interaction: "Teams → individual",
    title: "Prove it. <em>Then use it.</em>", lead: "A fast team review checks accuracy. The exit ticket checks independent communication.",
    instruction: "Teams answer the five rapid-fire prompts. Finish independently with the exit ticket.",
    body: `<div class="content-grid two"><section class="activity-card"><span class="mini-label">TEAM REVIEW · 10 MIN</span><h2>Five-point finish</h2><ol><li>Name a place where you can buy medicine.</li><li>Give 3 countable + 3 uncountable foods.</li><li>Correct: “We need an rice.”</li><li>Ask a question with <strong>any</strong>.</li><li>Ask one <strong>How much…?</strong> and one <strong>How many…?</strong> question.</li></ol>${reveal("sample answers", "pharmacy · apples/eggs/carrots + rice/water/sugar · We need some rice. · Do we have any milk? · How much water…? / How many bananas…?")}</section>
      <section class="activity-card accent"><span class="mini-label">EXIT TICKET · 10 MIN</span><h2>Your real-life plan</h2><p>Write or record <strong>5 connected sentences</strong>:</p><ol><li>Choose a meal.</li><li>Say what you have.</li><li>Say what you don’t have.</li><li>Add two quantities.</li><li>Say where you need to go.</li></ol><p class="micro-copy">“For dinner, we have some… We don’t have any…”</p></section></div>
      <div class="content-grid three" style="margin-top:14px"><section class="activity-card"><h3>I can name places</h3><p>🟢 yes · 🟡 almost · 🔴 not yet</p></section><section class="activity-card"><h3>I can talk about food quantities</h3><p>🟢 yes · 🟡 almost · 🔴 not yet</p></section><section class="activity-card"><h3>I can shop in English</h3><p>🟢 yes · 🟡 almost · 🔴 not yet</p></section></div>`,
    teacher: { objective: "Check retrieval, grammar accuracy, and independent communicative transfer.", flow: ["Teams answer on paper or mini whiteboards before reveals.", "Exit ticket is individual and silent; collect or listen to recordings.", "Sort results into Ready / Quick review / Reteach for the next class."], evidence: "Students produce five connected sentences with at least three accurate target structures." }
  }
];

const missions = [
  "You are planning breakfast for four. You have eggs, but no bread or milk. Decide what to buy and where to go.",
  "Your friend feels sick and needs medicine, water, and some fruit. Plan the stops around town.",
  "Create a healthy picnic for six people with $25. Ask about quantities and choose two places to visit.",
  "The supermarket is closed. You need bread, a healthy drink, and food for dinner. Find alternatives around town.",
  "Plan a birthday meal for eight people. Include a healthy main dish and one treat. Decide exact quantities.",
  "A new student asks where to exercise, borrow a cookbook, and buy groceries. Give a route and shopping advice.",
  "Your kitchen has some rice and chicken, but there aren’t any vegetables. Make a dinner plan and shopping conversation.",
  "You are buying food for an athlete. Compare healthy and unhealthy options, then create a complete list."
];

let current = Number(sessionStorage.getItem("townToTableStage")) || 0;
let completed = new Set(JSON.parse(localStorage.getItem("townToTableComplete") || "[]"));
let timerSeconds = 300;
let timerInitial = 300;
let timerId = null;
let toastId = null;

const stageEl = document.getElementById("lesson-stage");
const navEl = document.getElementById("lesson-nav");
const shellEl = document.querySelector(".classroom-shell");
const teacherDrawer = document.getElementById("teacher-drawer");
const teacherButton = document.getElementById("teacher-button");
const completeButton = document.getElementById("complete-button");

function renderNav() {
  navEl.innerHTML = stages.map((stage,index) => `<button class="rail-item ${index === current ? "active" : ""} ${completed.has(index) ? "done" : ""}" type="button" data-stage="${index}" aria-current="${index === current ? "step" : "false"}"><span class="rail-index">${completed.has(index) ? "✓" : String(index + 1).padStart(2,"0")}</span><span class="rail-copy"><strong>${stage.short}</strong><small>${stage.time} min · ${stage.interaction.split("→")[0].trim()}</small></span></button>`).join("");
}

function elapsedBefore(index) { return stages.slice(0,index).reduce((sum,stage) => sum + stage.time,0); }

function renderTeacher(stage) {
  document.getElementById("teacher-content").innerHTML = `<div class="teacher-meta"><div><small>TIME</small><strong>${stage.time} minutes</strong></div><div><small>INTERACTION</small><strong>${stage.interaction}</strong></div></div><section class="note-block"><h3>Objective</h3><p>${stage.teacher.objective}</p></section><section class="note-block"><h3>Suggested flow</h3><ul>${stage.teacher.flow.map(item => `<li>${item}</li>`).join("")}</ul></section><section class="note-block"><h3>Look for this evidence</h3><p>${stage.teacher.evidence}</p></section><section class="note-block"><h3>Classroom pattern</h3><p>Explain → Model → Check understanding → Practice → Communicate</p></section>`;
}

function renderStage(index, focus = false) {
  current = Math.max(0,Math.min(stages.length - 1,index));
  sessionStorage.setItem("townToTableStage",current);
  const stage = stages[current];
  stageEl.className = `lesson-stage ${stage.theme}`;
  stageEl.innerHTML = `<header class="stage-header"><div><p class="eyebrow">${String(current + 1).padStart(2,"0")} · ${stage.phase}</p><h1>${stage.title}</h1><p class="stage-lead">${stage.lead}</p></div><span class="time-pill"><strong>${stage.time}</strong> MIN</span></header><div class="instruction-strip"><span class="interaction-badge">${stage.interaction}</span><strong>Do this:</strong> ${stage.instruction}</div>${stage.body}`;
  stageEl.scrollTop = 0;
  document.getElementById("phase-label").textContent = stage.phase;
  document.getElementById("elapsed-label").textContent = `${elapsedBefore(current)} / 240 min`;
  document.getElementById("stage-counter").textContent = `${String(current + 1).padStart(2,"0")} / ${stages.length}`;
  document.getElementById("progress-bar").style.width = `${((current + 1) / stages.length) * 100}%`;
  document.getElementById("prev-button").disabled = current === 0;
  document.getElementById("next-button").disabled = current === stages.length - 1;
  completeButton.setAttribute("aria-pressed",completed.has(current));
  completeButton.textContent = completed.has(current) ? "✓ Completed" : "○ Mark complete";
  renderNav();
  renderTeacher(stage);
  if (focus) stageEl.focus();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastId);
  toastId = setTimeout(() => toast.classList.remove("show"),2200);
}

function closeTeacher() {
  teacherDrawer.classList.remove("open");
  teacherDrawer.setAttribute("aria-hidden","true");
  teacherButton.setAttribute("aria-pressed","false");
  document.getElementById("drawer-backdrop").classList.remove("visible");
}

function formatTimer() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  document.getElementById("timer-display").textContent = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timerSeconds = timerInitial;
  formatTimer();
  document.getElementById("timer-start").textContent = "Start";
}

function toggleTimer() {
  const button = document.getElementById("timer-start");
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    button.textContent = "Resume";
    return;
  }
  button.textContent = "Pause";
  timerId = setInterval(() => {
    timerSeconds -= 1;
    formatTimer();
    if (timerSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      button.textContent = "Start";
      showToast("Time! Bring the class back together.");
    }
  },1000);
}

navEl.addEventListener("click",event => {
  const button = event.target.closest("[data-stage]");
  if (button) renderStage(Number(button.dataset.stage),true);
});
document.getElementById("prev-button").addEventListener("click",() => renderStage(current - 1,true));
document.getElementById("next-button").addEventListener("click",() => renderStage(current + 1,true));
document.getElementById("home-button").addEventListener("click",() => renderStage(0,true));
document.getElementById("rail-toggle").addEventListener("click",event => {
  shellEl.classList.toggle("rail-collapsed");
  const collapsed = shellEl.classList.contains("rail-collapsed");
  event.currentTarget.setAttribute("aria-expanded",String(!collapsed));
});
completeButton.addEventListener("click",() => {
  if (completed.has(current)) completed.delete(current); else completed.add(current);
  localStorage.setItem("townToTableComplete",JSON.stringify([...completed]));
  renderStage(current);
  showToast(completed.has(current) ? "Stage marked complete" : "Stage reopened");
});

stageEl.addEventListener("click",event => {
  const revealButton = event.target.closest("[data-reveal]");
  if (revealButton) {
    const panel = revealButton.nextElementSibling;
    panel.classList.toggle("visible");
    revealButton.textContent = panel.classList.contains("visible") ? "Hide answer" : revealButton.textContent.replace("Hide answer","Reveal answer");
    if (!panel.classList.contains("visible")) revealButton.textContent = "Reveal answer";
  }
  const answerButton = event.target.closest("[data-choice-answer]");
  if (answerButton) {
    const group = answerButton.dataset.choiceGroup;
    stageEl.querySelectorAll(`[data-choice-group="${group}"]`).forEach(button => {
      button.disabled = true;
      if (button.dataset.choiceAnswer === "1") button.classList.add("correct");
    });
    if (answerButton.dataset.choiceAnswer !== "1") answerButton.classList.add("wrong");
  }
  const categoryButton = event.target.closest(".category-button[data-correct]");
  if (categoryButton) {
    const bank = categoryButton.closest("[data-categories]");
    const categories = bank.dataset.categories.split("|");
    const currentChoice = categoryButton.dataset.choice;
    const nextIndex = currentChoice ? (categories.indexOf(currentChoice) + 1) % categories.length : 0;
    categoryButton.dataset.choice = categories[nextIndex];
  }
  const checkButton = event.target.closest("[data-check-sort]");
  if (checkButton) {
    const id = checkButton.dataset.checkSort;
    const bank = stageEl.querySelector(`[data-sort-id="${id}"]`);
    const buttons = [...bank.querySelectorAll(".category-button")];
    const answered = buttons.filter(button => button.dataset.choice).length;
    const score = buttons.filter(button => button.dataset.choice === button.dataset.correct).length;
    const feedback = stageEl.querySelector(`[data-sort-feedback="${id}"]`);
    feedback.textContent = answered < buttons.length ? `Choose a category for all ${buttons.length} words first.` : `${score} / ${buttons.length} correct${score === buttons.length ? " — excellent!" : ". Reconsider the highlighted choices."}`;
    buttons.forEach(button => {
      if (button.dataset.choice && button.dataset.choice !== button.dataset.correct) button.classList.add("wrong");
      else button.classList.remove("wrong");
    });
  }
  const resetButton = event.target.closest("[data-reset-sort]");
  if (resetButton) {
    const id = resetButton.dataset.resetSort;
    const bank = stageEl.querySelector(`[data-sort-id="${id}"]`);
    bank.querySelectorAll(".category-button").forEach(button => { delete button.dataset.choice; button.classList.remove("wrong"); });
    stageEl.querySelector(`[data-sort-feedback="${id}"]`).textContent = "Tap each word to choose a category.";
  }
  const generatorButton = event.target.closest("[data-generator]");
  if (generatorButton) {
    const output = document.getElementById("mission-output");
    let next = missions[Math.floor(Math.random() * missions.length)];
    if (missions.length > 1 && output.textContent === next) next = missions[(missions.indexOf(next) + 1) % missions.length];
    output.textContent = next;
  }
});

teacherButton.addEventListener("click",() => {
  const open = !teacherDrawer.classList.contains("open");
  teacherDrawer.classList.toggle("open",open);
  teacherDrawer.setAttribute("aria-hidden",String(!open));
  teacherButton.setAttribute("aria-pressed",String(open));
  document.getElementById("drawer-backdrop").classList.toggle("visible",open);
});
document.getElementById("teacher-close").addEventListener("click",closeTeacher);
document.getElementById("drawer-backdrop").addEventListener("click",closeTeacher);
document.getElementById("fullscreen-button").addEventListener("click",async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch { showToast("Full screen is not available in this browser."); }
});

const timerDialog = document.getElementById("timer-dialog");
document.getElementById("timer-button").addEventListener("click",() => timerDialog.showModal());
document.querySelector(".timer-presets").addEventListener("click",event => {
  const button = event.target.closest("[data-minutes]");
  if (!button) return;
  timerInitial = Number(button.dataset.minutes) * 60;
  document.querySelectorAll(".timer-presets button").forEach(item => item.classList.toggle("active",item === button));
  resetTimer();
});
document.getElementById("timer-start").addEventListener("click",toggleTimer);
document.getElementById("timer-reset").addEventListener("click",resetTimer);

document.addEventListener("keydown",event => {
  if (event.target.matches("input, textarea") || timerDialog.open) return;
  if (event.key === "ArrowRight" || event.key === "PageDown") renderStage(current + 1,true);
  if (event.key === "ArrowLeft" || event.key === "PageUp") renderStage(current - 1,true);
  if (event.key.toLowerCase() === "t") teacherButton.click();
  if (event.key === "Escape") closeTeacher();
});

renderStage(current);
formatTimer();
