/**
 * ==========================================================================
 * GeoGrok Quiz Application Master JavaScript Core Configuration
 * ==========================================================================
 */

// 1. COMPREHENSIVE 100+ QUESTION CENTRAL DATA BANK
const QUESTION_BANK = {
    geography: [
        { q: "Which country has the longest coastline in the world?", o: ["Canada", "Russia", "Indonesia", "Australia"], a: "Canada" },
        { q: "What is the capital city of Australia?", o: ["Canberra", "Sydney", "Melbourne", "Brisbane"], a: "Canberra" },
        { q: "Which African country has the largest population?", o: ["Nigeria", "Egypt", "Ethiopia", "South Africa"], a: "Nigeria" },
        { q: "What is the largest landlocked country in the world?", o: ["Kazakhstan", "Mongolia", "Bolivia", "Chad"], a: "Kazakhstan" },
        { q: "Which river flows through Paris?", o: ["Seine", "Thames", "Danube", "Rhine"], a: "Seine" },
        { q: "In which country is the deepest lake in the world, Lake Baikal, located?", o: ["Russia", "Canada", "United States", "China"], a: "Russia" },
        { q: "What is the highest mountain peak in Africa?", o: ["Mount Kilimanjaro", "Mount Kenya", "Mount Stanley", "Ras Dashen"], a: "Mount Kilimanjaro" },
        { q: "Which desert is the driest non-polar desert on Earth?", o: ["Atacama Desert", "Sahara Desert", "Gobi Desert", "Kalahari Desert"], a: "Atacama Desert" },
        { q: "Which body of water separates Saudi Arabia from Africa?", o: ["Red Sea", "Persian Gulf", "Mediterranean Sea", "Arabian Sea"], a: "Red Sea" },
        { q: "What is the smallest independent nation state in the world?", o: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], a: "Vatican City" },
        { q: "Which country is known as the Land of the Rising Sun?", o: ["Japan", "South Korea", "China", "Thailand"], a: "Japan" },
        { q: "The historic city of Timbuktu is located in which modern African nation?", o: ["Mali", "Niger", "Algeria", "Morocco"], a: "Mali" },
        { q: "Which strait connects the Atlantic Ocean to the Mediterranean Sea?", o: ["Strait of Gibraltar", "Strait of Malacca", "Bosporus Strait", "Bering Strait"], a: "Strait of Gibraltar" },
        { q: "What is the largest island in the world?", o: ["Greenland", "New Guinea", "Madagascar", "Borneo"], a: "Greenland" },
        { q: "Which European capital city is built across 14 separate islands?", o: ["Stockholm", "Amsterdam", "Copenhagen", "Helsinki"], a: "Stockholm" },
        { q: "What is the capital city of Canada?", o: ["Ottawa", "Toronto", "Vancouver", "Montreal"], a: "Ottawa" },
        { q: "Which Central American country has coasts on both the Caribbean Sea and Pacific Ocean but no military?", o: ["Costa Rica", "Panama", "Nicaragua", "Honduras"], a: "Costa Rica" },
        { q: "Which state is the largest by area in the United States?", o: ["Alaska", "Texas", "California", "Montana"], a: "Alaska" },
        { q: "What is the capital of New Zealand?", o: ["Wellington", "Auckland", "Christchurch", "Hamilton"], a: "Wellington" },
        { q: "The Dolomites mountain range is primarily located in which country?", o: ["Italy", "Austria", "Switzerland", "France"], a: "Italy" },
        { q: "Which Asian river is known as the 'Mother of Rivers' and flows through 6 nations?", o: ["Mekong", "Yangtze", "Ganges", "Indus"], a: "Mekong" },
        { q: "What is the capital city of Turkey?", o: ["Ankara", "Istanbul", "Izmir", "Antalya"], a: "Ankara" },
        { q: "Which South American nation shares a border with every other country on the continent except Ecuador and Chile?", o: ["Brazil", "Argentina", "Peru", "Colombia"], a: "Brazil" },
        { q: "What is the official currency of South Africa?", o: ["Rand", "Dollar", "Shilling", "Pula"], a: "Rand" },
        { q: "Which country controls the Galápagos Islands?", o: ["Ecuador", "Peru", "Chile", "Colombia"], a: "Ecuador" }
    ],
    history: [
        { q: "Who was the first Emperor of the Roman Empire?", o: ["Augustus", "Julius Caesar", "Nero", "Marcus Aurelius"], a: "Augustus" },
        { q: "In which year did the Berlin Wall fall?", o: ["1989", "1991", "1985", "1993"], a: "1989" },
        { q: "Which civilization constructed the ancient city of Machu Picchu?", o: ["Inca", "Aztec", "Maya", "Olmec"], a: "Inca" },
        { q: "Who was the British Prime Minister during most of World War II?", o: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Anthony Eden"], a: "Winston Churchill" },
        { q: "The signing of the Magna Carta occurred in which year?", o: ["1215", "1066", "1348", "1492"], a: "1215" },
        { q: "Who was the first president of the United States?", o: ["George Washington", "John Adams", "Thomas Jefferson", "Benjamin Franklin"], a: "George Washington" },
        { q: "Which empire was ruled by Suleiman the Magnificent?", o: ["Ottoman Empire", "Byzantine Empire", "Persian Empire", "Mughal Empire"], a: "Ottoman Empire" },
        { q: "The ancient library of Alexandria was located in which modern country?", o: ["Egypt", "Greece", "Italy", "Turkey"], a: "Egypt" },
        { q: "Which explorer led the first expedition to circumnavigate the globe?", o: ["Ferdinand Magellan", "Christopher Columbus", "Vasco da Gama", "James Cook"], a: "Ferdinand Magellan" },
        { q: "In which century did the Black Death pandemic devastate Europe?", o: ["14th Century", "12th Century", "16th Century", "10th Century"], a: "14th Century" },
        { q: "Who was the last active ruler of the Ptolemaic Kingdom of Egypt?", o: ["Cleopatra VII", "Nefertiti", "Hatshepsut", "Arsinoe IV"], a: "Cleopatra VII" },
        { q: "The Treaty of Versailles, signed in 1919, officially concluded which major conflict?", o: ["World War I", "World War II", "Franco-Prussian War", "Napoleonic Wars"], a: "World War I" },
        { q: "Which famous leader marched elephants across the Alps during the Second Punic War?", o: ["Hannibal Barca", "Alexander the Great", "Julius Caesar", "Scipio Africanus"], a: "Hannibal Barca" },
        { q: "What was the name of the first artificial Earth satellite, launched by the USSR in 1957?", o: ["Sputnik 1", "Vostok 1", "Soyuz 1", "Salyut 1"], a: "Sputnik 1" },
        { q: "Who wrote the famous dynamic work 'Common Sense' in 1776?", o: ["Thomas Paine", "Alexander Hamilton", "John Jay", "Ben Franklin"], a: "Thomas Paine" },
        { q: "Which dynasty was the last imperial dynasty of China?", o: ["Qing Dynasty", "Ming Dynasty", "Tang Dynasty", "Han Dynasty"], a: "Qing Dynasty" },
        { q: "The code of laws known as the Code Hammurabi originated in which ancient civilization?", o: ["Babylonia", "Assyria", "Egypt", "Persia"], a: "Babylonia" },
        { q: "In what year did the French Revolution officially begin?", o: ["1789", "1799", "1776", "1804"], a: "1789" },
        { q: "Who was the historical founder of Buddhism?", o: ["Siddhartha Gautama", "Mahavira", "Ashoka", "Chandragupta"], a: "Siddhartha Gautama" },
        { q: "Which country was divided into occupation zones at the Potsdam Conference?", o: ["Germany", "Austria", "Japan", "Korea"], a: "Germany" },
        { q: "The Battle of Waterloo in 1815 marked the definitive defeat of which leader?", o: ["Napoleon Bonaparte", "King Louis XVI", "Kaiser Wilhelm", "Duke of Wellington"], a: "Napoleon Bonaparte" },
        { q: "Which Native American empire was conquered by Spanish conquistador Hernán Cortés?", o: ["Aztec Empire", "Inca Empire", "Maya Civilization", "Cherokee Nation"], a: "Aztec Empire" },
        { q: "Who was the primary author of the Declaration of Independence?", o: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"], a: "Thomas Jefferson" },
        { q: "The ancient city-states of Sparta and Athens fought each other in which war?", o: ["Peloponnesian War", "Persian Wars", "Punic Wars", "Trojan War"], a: "Peloponnesian War" },
        { q: "Which modern country was formerly known as Persia?", o: ["Iran", "Iraq", "Turkey", "Saudi Arabia"], a: "Iran" }
    ],
    politics: [
        { q: "What is the term for a system of government where power is divided between a central authority and constituent political units?", o: ["Federalism", "Monarchy", "Unitary State", "Confederation"], a: "Federalism" },
        { q: "How many voting members serve in the United States House of Representatives?", o: ["435", "100", "538", "450"], a: "435" },
        { q: "What is the highest judicial authority in the United Kingdom?", o: ["Supreme Court", "House of Lords", "High Court", "Court of Appeal"], a: "Supreme Court" },
        { q: "The concept of 'Separation of Powers' was significantly advanced by which Enlightenment philosopher?", o: ["Montesquieu", "John Locke", "Thomas Hobbes", "Jean-Jacques Rousseau"], a: "Montesquieu" },
        { q: "What is the term used to describe a parliamentary layout where no single party holds an absolute majority?", o: ["Hung Parliament", "Coalition Bloc", "Divided Chamber", "Deadlock Assembly"], a: "Hung Parliament" },
        { q: "How many states are members of the European Union?", o: ["27", "28", "25", "30"], a: "27" },
        { q: "What is the minimum age requirement to run for President of the United States?", o: ["35", "30", "40", "25"], a: "35" },
        { q: "Which political philosophy prioritizes traditional institutions and gradual social evolution?", o: ["Conservativism", "Liberalism", "Socialism", "Libertarianism"], a: "Conservativism" },
        { q: "What constitutional procedure allows citizens to vote directly on a specific legislative proposal?", o: ["Referendum", "Veto", "Impeachment", "Filibuster"], a: "Referendum" },
        { q: "Who is the chief executive officer of Germany's federal government?", o: ["Chancellor", "President", "Prime Minister", "Governor-General"], a: "Chancellor" },
        { q: "The voting process by which an electorate can remove an elected official from office before their term ends is called what?", o: ["Recall", "Impeachment", "Primary", "Censure"], a: "Recall" },
        { q: "Which document serves as the supreme law of the land in the United States?", o: ["The Constitution", "Declaration of Independence", "Articles of Confederation", "The Federalist Papers"], a: "The Constitution" },
        { q: "What type of monarchy is found in Japan?", o: ["Constitutional Monarchy", "Absolute Monarchy", "Elective Monarchy", "Semi-Constitutional Monarchy"], a: "Constitutional Monarchy" },
        { q: "In the context of US politics, what does a 'filibuster' aim to achieve?", o: ["Delay or block legislative action", "Expedite a bill's approval", "Override a presidential veto", "Alter committee assignments"], a: "Delay or block legislative action" },
        { q: "What body elects the President of the United States?", o: ["Electoral College", "Popular Ballot", "Senate Majority", "House Delegation"], a: "Electoral College" },
        { q: "The political concept of 'Gerrymandering' explicitly manipulates what process?", o: ["Electoral district boundaries", "Campaign finance contributions", "Voter registration rules", "Cabinet configurations"], a: "Electoral district boundaries" },
        { q: "Which country has a unique unwritten constitution composed of various statutes, court judgments, and treaties?", o: ["United Kingdom", "United States", "France", "Germany"], a: "United Kingdom" },
        { q: "What system of government grants all primary decision-making authorities to a single, central governing framework?", o: ["Unitary System", "Federal System", "Confederation", "Oligarchy"], a: "Unitary System" },
        { q: "What is the term for a political system dominated by a privileged wealthy elite class?", o: ["Plutocracy", "Oligarchy", "Meritocracy", "Autocracy"], a: "Plutocracy" },
        { q: "Who serves as the formal Head of State in Canada?", o: ["British Monarch", "Prime Minister", "Governor General", "Chief Justice"], a: "British Monarch" },
        { q: "What is the fundamental objective of an interest group or political action committee (PAC)?", o: ["Influence public policy configuration", "Elect internal members to seats", "Operate localized judiciaries", "Draft constitutional statutes"], a: "Influence public policy configuration" },
        { q: "In which year did women officially gain the constitutional right to vote across the USA via the 19th Amendment?", o: ["1920", "1912", "1933", "1898"], a: "1920" },
        { q: "Which political party system is characterized by the absolute governance of a single vanguard organization, such as in China?", o: ["One-party state", "Two-party system", "Coalition block", "Non-partisan structure"], a: "One-party state" },
        { q: "What is the term for a legislative assembly consisting of two separate chambers or houses?", o: ["Bicameral", "Unicameral", "Duopoly", "Bi-parliamentary"], a: "Bicameral" },
        { q: "The iconic system of checks and balances in government is explicitly designed to prevent what?", o: ["Concentration of autocratic power", "Multiparty system emergence", "Electoral tie scenarios", "Economic recession cycles"], a: "Concentration of autocratic power" }
    ],
    international_affairs: [
        { q: "Where is the main headquarters of the United Nations located?", o: ["New York City", "Geneva", "Vienna", "The Hague"], a: "New York City" },
        { q: "What international treaty framework, signed in 1949, established the North Atlantic Treaty Organization?", o: ["North Atlantic Treaty", "Treaty of Brussels", "Washington Accord", "Paris Agreement"], a: "North Atlantic Treaty" },
        { q: "Which judicial body acts as the principal judicial organ of the United Nations?", o: ["International Court of Justice", "International Criminal Court", "European Court of Human Rights", "UN Security Council"], a: "International Court of Justice" },
        { q: "What is the term for an economic strategy where a country completely stops trade with another nation as a political punishment?", o: ["Embargo", "Tariff", "Quota", "Subsidization Policy"], a: "Embargo" },
        { q: "How many permanent members hold absolute veto power on the UN Security Council?", o: ["5", "10", "15", "6"], a: "5" },
        { q: "What international institution is primarily responsible for monitoring global financial systems and providing emergency loans?", o: ["International Monetary Fund", "World Bank", "World Trade Organization", "Federal Reserve System"], a: "International Monetary Fund" },
        { q: "The 'Geneva Conventions' are internationally recognized treaties that primarily regulate what?", o: ["Humanitarian treatment in war", "Maritime commercial shipping routes", "Global carbon emission structures", "Nuclear non-proliferation bounds"], a: "Humanitarian treatment in war" },
        { q: "Which alliance group is explicitly designated by the economic acronym BRICS?", o: ["Brazil, Russia, India, China, South Africa", "Britain, Russia, Italy, Canada, Sweden", "Belgium, Romania, Indonesia, Chile, Spain", "Brazil, Russia, Iran, China, Singapore"], a: "Brazil, Russia, India, China, South Africa" },
        { q: "The term 'Cold War' describes the geopolitical rivalry primarily between which two global superpowers?", o: ["United States and USSR", "United States and China", "USSR and China", "Germany and Great Britain"], a: "United States and USSR" },
        { q: "What global environmental treaty framework was established in 2015 to combat global climate change?", o: ["Paris Agreement", "Kyoto Protocol", "Copenhagen Accord", "Montreal Protocol"], a: "Paris Agreement" },
        { q: "Where is the official administrative headquarters of the North Atlantic Treaty Organization (NATO) located?", o: ["Brussels, Belgium", "Paris, France", "London, UK", "Washington D.C., USA"], a: "Brussels, Belgium" },
        { q: "What is the name of the official collective defense clause of the NATO alliance?", o: ["Article 5", "Article 10", "Article 2", "Article 4"], a: "Article 5" },
        { q: "The Schengen Area of Europe is best recognized for establishing what system?", o: ["A border-free passport zone", "A single unified currency network", "A shared corporate tax code", "A joint military command"], a: "A border-free passport zone" },
        { q: "Which agency of the United Nations is explicitly tasked with preserving world cultural and natural heritage?", o: ["UNESCO", "UNICEF", "WHO", "UNHCR"], a: "UNESCO" },
        { q: "What specific term describes a diplomat of the highest rank sent by one country as its long-term representative to another?", o: ["Ambassador", "Consul", "Envoy", "Chargé d'affaires"], a: "Ambassador" },
        { q: "The strategic waterway known as the Strait of Hormuz is critical to global security due to the transport of what asset?", o: ["Petroleum and oil products", "Grain and agricultural crops", "Microchip hardware supplies", "Liquefied natural gas only"], a: "Petroleum and oil products" },
        { q: "Which international organization replaced the League of Nations following the conclusion of WWII?", o: ["United Nations", "European Union", "G20 Forum", "World Bank Group"], a: "United Nations" },
        { q: "What is the primary target objective of the nuclear non-proliferation treaty (NPT)?", o: ["Prevent spread of nuclear weapons", "Dismantle all commercial reactors", "Regulate global uranium prices", "Establish safe waste repositories"], a: "Prevent spread of nuclear weapons" },
        { q: "The standard diplomatic acronym 'G20' stands for what specific phrasing?", o: ["Group of Twenty", "Global Twenty Coalition", "Government of Twenty", "Grand Twenty Congress"], a: "Group of Twenty" },
        { q: "Which country initiated the article 50 declaration process resulting in the geopolitical event known as 'Brexit'?", o: ["United Kingdom", "Greece", "France", "Italy"], a: "United Kingdom" },
        { q: "What type of foreign aid is explicitly directed toward alleviating immediate crises caused by natural disasters or wars?", o: ["Humanitarian Aid", "Development Aid", "Military Assistance", "Structural Adjustment Loan"], a: "Humanitarian Aid" },
        { q: "The universal declaration of human rights (UDHR) was officially adopted by the UN General Assembly in what year?", o: ["1948", "1945", "1950", "1962"], a: "1948" },
        { q: "What specialized agency of the United Nations is headquartered in Rome and directs worldwide efforts to defeat hunger?", o: ["FAO", "WHO", "ILO", "IMF"], a: "FAO" },
        { q: "Which bilateral arms reduction treaties were signed between the US and USSR starting in 1972?", o: ["SALT", "START", "INF Treaty", "Test Ban Treaty"], a: "SALT" },
        { q: "What is the primary function of the World Trade Organization (WTO)?", o: ["Regulate and facilitate global trade", "Provide development capital loans", "Enforce international maritime law", "Arbitrate currency exchange rates"], a: "Regulate and facilitate global trade" }
    ]
};

// 2. CENTRAL RUNTIME APPLICATION STATE ENGINE
let quizState = {
    currentCategory: 'geography',
    quizSize: 5,
    questions: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    incorrectCount: 0,
    timer: null,
    timeLeft: 15,
    canAnswer: false
};

// 3. SOUND SYNTHESIS ENGINE (WEB AUDIO API - NO EXTERNAL DEPENDENCIES)
const SoundEngine = {
    ctx: null,
    
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },
    
    playCorrect() {
        this.init();
        const now = this.ctx.currentTime;
        
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        
        osc1.type = 'sine';
        osc2.type = 'triangle';
        
        // Crisp, clean harmony major chord jump
        osc1.frequency.setValueAtTime(523.25, now); // C5
        osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5
        
        osc2.frequency.setValueAtTime(392.00, now); // G4
        osc2.frequency.setValueAtTime(523.25, now + 0.08); // C5

        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        
        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.35);
        osc2.stop(now + 0.35);
    },
    
    playIncorrect() {
        this.init();
        const now = this.ctx.currentTime;
        
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        
        // Low downward slide frequency
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.25);
        
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        
        // Smooth out sawtooth harshness
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, now);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.3);
    }
};

// 4. ALGORITHMIC SHUFFLE UTILITIES
function fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 5. DOM ELEMENT SELECTORS HUB
const DOM = {
    themeToggle: document.getElementById('theme-toggle'),
    homeScreen: document.getElementById('home-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultsScreen: document.getElementById('results-screen'),
    categoryGrid: document.getElementById('category-grid'),
    sizeContainer: document.getElementById('size-container'),
    startBtn: document.getElementById('start-btn'),
    leaderboardList: document.getElementById('leaderboard-list'),
    
    // Quiz Screen Variables
    questionCounter: document.getElementById('question-counter'),
    categoryBadge: document.getElementById('category-badge'),
    timerText: document.getElementById('timer-text'),
    timerProgress: document.getElementById('timer-progress'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    nextBtn: document.getElementById('next-btn'),
    
    // Results Screen Variables
    resultEmoji: document.getElementById('result-emoji'),
    performanceMsg: document.getElementById('performance-message'),
    finalPercentage: document.getElementById('final-percentage'),
    finalScoreText: document.getElementById('final-score-text'),
    statCorrect: document.getElementById('stat-correct'),
    statIncorrect: document.getElementById('stat-incorrect'),
    playerName: document.getElementById('player-name'),
    saveScoreBtn: document.getElementById('save-score-btn'),
    leaderboardEntry: document.getElementById('leaderboard-entry'),
    retryBtn: document.getElementById('retry-btn'),
    homeBtn: document.getElementById('home-btn')
};

// 6. SCREEN MANAGER TRANSITION ENGINE
function switchScreen(screenElement) {
    [DOM.homeScreen, DOM.quizScreen, DOM.resultsScreen].forEach(s => {
        s.classList.remove('active');
    });
    screenElement.classList.add('active');
}

// 7. INITIALIZATION AND EVENT REGISTRATION
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderLeaderboard();
    
    // Event Hooking for System Setups
    DOM.themeToggle.addEventListener('click', toggleTheme);
    DOM.categoryGrid.addEventListener('click', handleCategorySelection);
    DOM.sizeContainer.addEventListener('click', handleSizeSelection);
    DOM.startBtn.addEventListener('click', initQuizSession);
    DOM.nextBtn.addEventListener('click', advanceQuizSequence);
    DOM.saveScoreBtn.addEventListener('click', handleScoreSubmission);
    DOM.retryBtn.addEventListener('click', initQuizSession);
    DOM.homeBtn.addEventListener('click', () => {
        renderLeaderboard();
        switchScreen(DOM.homeScreen);
    });
});

// 8. CUSTOM STYLING & THEMING CONTROLS
function initializeTheme() {
    const savedTheme = localStorage.getItem('geogrok-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('geogrok-theme', targetTheme);
}

function handleCategorySelection(e) {
    const card = e.target.closest('.category-card');
    if (!card) return;
    
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    quizState.currentCategory = card.dataset.category;
}

function handleSizeSelection(e) {
    const btn = e.target.closest('.size-btn');
    if (!btn) return;
    
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    quizState.quizSize = parseInt(btn.dataset.size, 10);
}

// 9. CORE QUIZ PROGRAM LOGIC RUNTIME
function initQuizSession() {
    const rawQuestions = QUESTION_BANK[quizState.currentCategory];
    // Randomize entire bank and slice matching selected requested dimension
    const randomizedPool = fisherYatesShuffle(rawQuestions);
    quizState.questions = randomizedPool.slice(0, quizState.quizSize);
    
    // Reset performance arrays
    quizState.currentIndex = 0;
    quizState.score = 0;
    quizState.correctCount = 0;
    quizState.incorrectCount = 0;
    
    DOM.saveScoreBtn.disabled = false;
    DOM.saveScoreBtn.textContent = "Submit";
    DOM.playerName.value = "";
    DOM.leaderboardEntry.style.display = "block";
    
    switchScreen(DOM.quizScreen);
    displayActiveQuestion();
}

function displayActiveQuestion() {
    clearInterval(quizState.timer);
    quizState.canAnswer = true;
    DOM.nextBtn.disabled = true;
    
    const currentQ = quizState.questions[quizState.currentIndex];
    
    // UI Metadata Elements Sync
    DOM.categoryBadge.textContent = quizState.currentCategory.replace('_', ' ');
    DOM.questionCounter.textContent = `Question ${quizState.currentIndex + 1} of ${quizState.quizSize}`;
    DOM.questionText.textContent = currentQ.q;
    
    // Smooth progress bar calculation updates
    const progressPercent = (quizState.currentIndex / quizState.quizSize) * 100;
    DOM.progressBarFill.style.width = `${progressPercent}%`;
    
    // Options Shuffling Setup
    const randomizedOptions = fisherYatesShuffle(currentQ.o);
    DOM.optionsContainer.innerHTML = '';
    
    randomizedOptions.forEach(opt => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = opt;
        button.addEventListener('click', () => evaluateSelectedAnswer(button, opt));
        DOM.optionsContainer.appendChild(button);
    });
    
    executeCountdownTimer();
}

function executeCountdownTimer() {
    quizState.timeLeft = 15;
    DOM.timerText.textContent = quizState.timeLeft;
    DOM.timerProgress.classList.remove('warning');
    setTimerStrokeDash(100);
    
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        DOM.timerText.textContent = quizState.timeLeft;
        
        // Stroke percent compute matching native SVG specs
        const percentRemaining = (quizState.timeLeft / 15) * 100;
        setTimerStrokeDash(percentRemaining);
        
        if (quizState.timeLeft <= 5) {
            DOM.timerProgress.classList.add('warning');
        }
        
        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timer);
            processTimeoutScenario();
        }
    }, 1000);
}

function setTimerStrokeDash(percent) {
    // Circumference bounding box calculation matching 15.9155 radius
    DOM.timerProgress.style.strokeDasharray = `${percent}, 100`;
}

function evaluateSelectedAnswer(selectedButton, selectedValue) {
    if (!quizState.canAnswer) return;
    quizState.canAnswer = false;
    clearInterval(quizState.timer);
    
    const currentQ = quizState.questions[quizState.currentIndex];
    const optionButtons = DOM.optionsContainer.querySelectorAll('.option-btn');
    
    // Lock remaining dynamic interface buttons
    optionButtons.forEach(btn => btn.disabled = true);
    
    if (selectedValue === currentQ.a) {
        selectedButton.classList.add('correct-state');
        quizState.score++;
        quizState.correctCount++;
        SoundEngine.playCorrect();
    } else {
        selectedButton.classList.add('incorrect-state');
        quizState.incorrectCount++;
        SoundEngine.playIncorrect();
        // Expose correct layout item to user visually
        exposeCorrectAnswer();
    }
    
    DOM.nextBtn.disabled = false;
    
    // Automatic micro-delay screen navigation trigger for dynamic pacing
    setTimeout(() => {
        advanceQuizSequence();
    }, 1200);
}

function processTimeoutScenario() {
    if (!quizState.canAnswer) return;
    quizState.canAnswer = false;
    
    const optionButtons = DOM.optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.disabled = true);
    
    quizState.incorrectCount++;
    SoundEngine.playIncorrect();
    exposeCorrectAnswer();
    
    DOM.nextBtn.disabled = false;
    
    setTimeout(() => {
        advanceQuizSequence();
    }, 1500);
}

function exposeCorrectAnswer() {
    const currentQ = quizState.questions[quizState.currentIndex];
    const optionButtons = DOM.optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        if (btn.textContent === currentQ.a) {
            btn.classList.add('correct-state');
        }
    });
}

function advanceQuizSequence() {
    // Clear double-fire triggers
    clearInterval(quizState.timer);
    
    if (quizState.currentIndex + 1 < quizState.quizSize) {
        quizState.currentIndex++;
        displayActiveQuestion();
    } else {
        DOM.progressBarFill.style.width = '100%';
        displayFinalResults();
    }
}

// 10. SYSTEM RESULTS & SCORE CALCULATORS
function displayFinalResults() {
    switchScreen(DOM.resultsScreen);
    
    const percentage = Math.round((quizState.score / quizState.quizSize) * 100);
    DOM.finalPercentage.textContent = `${percentage}%`;
    DOM.finalScoreText.textContent = `You scored ${quizState.score} out of ${quizState.quizSize} points`;
    DOM.statCorrect.textContent = quizState.correctCount;
    DOM.statIncorrect.textContent = quizState.incorrectCount;
    
    // Evaluate performance rating tiers
    let rating = "";
    let emoji = "";
    
    if (percentage >= 85) {
        rating = "Excellent Performance!";
        emoji = "🏆";
    } else if (percentage >= 65) {
        rating = "Good Job!";
        emoji = "✨";
    } else if (percentage >= 45) {
        rating = "Average Rating";
        emoji = "📈";
    } else {
        rating = "Needs Improvement";
        emoji = "📚";
    }
    
    DOM.performanceMsg.textContent = rating;
    DOM.resultEmoji.textContent = emoji;
}

// 11. LOCAL STORAGE PERSISTENCE METRICS (LEADERBOARD)
function handleScoreSubmission() {
    const name = DOM.playerName.value.trim();
    if (!name) {
        alert("Please enter a valid player name to save metrics.");
        return;
    }
    
    const percentage = Math.round((quizState.score / quizState.quizSize) * 100);
    const scoreRecord = {
        name: name,
        category: quizState.currentCategory,
        score: quizState.score,
        total: quizState.quizSize,
        percentage: percentage,
        timestamp: Date.now()
    };
    
    let localLeaderboard = JSON.parse(localStorage.getItem('geogrok-leaderboard')) || [];
    localLeaderboard.push(scoreRecord);
    
    // Sort logic parameters: Rank descending via final percentage performance value
    localLeaderboard.sort((a, b) => b.percentage - a.percentage || b.score - a.score);
    
    // Retain absolute maximum top 5 limits
    localLeaderboard = localLeaderboard.slice(0, 5);
    localStorage.setItem('geogrok-leaderboard', JSON.stringify(localLeaderboard));
    
    DOM.saveScoreBtn.disabled = true;
    DOM.saveScoreBtn.textContent = "Saved!";
    DOM.leaderboardEntry.style.delay = "none";
    
    setTimeout(() => {
        renderLeaderboard();
        switchScreen(DOM.homeScreen);
    }, 800);
}

function renderLeaderboard() {
    const board = JSON.parse(localStorage.getItem('geogrok-leaderboard')) || [];
    DOM.leaderboardList.innerHTML = '';
    
    if (board.length === 0) {
        DOM.leaderboardList.innerHTML = `<li class="leaderboard-item" style="color: var(--text-muted); justify-content: center;">No records mapped yet. Secure the first spot!</li>`;
        return;
    }
    
    board.forEach((item, idx) => {
        const li = document.createElement('li');
        li.className = 'leaderboard-item';
        
        let medal = `#${idx + 1}`;
        if (idx === 0) medal = "🥇";
        if (idx === 1) medal = "🥈";
        if (idx === 2) medal = "🥉";
        
        const cleanCat = item.category.replace('_', ' ');
        
        li.innerHTML = `
            <div>
                <span class="rank">${medal}</span>
                <strong>${escapeHTML(item.name)}</strong>
                <span style="color: var(--text-muted); font-size: 0.8rem; margin-left: 6px;">(${cleanCat})</span>
            </div>
            <span class="score-val">${item.score}/${item.total} (${item.percentage}%)</span>
        `;
        DOM.leaderboardList.appendChild(li);
    });
}

// XSS Prevention Utility
function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}