// Variables Here:
// Variable to hold Time and start at 0
var timer = 0;

var viewHighScoresEl = document.querySelector(".view-high-scores");
var timerEl = document.querySelector(".time-left");
var pageContentEl = document.querySelector("#page-content");

// Array for questions
var questions = [
    {
        title: 'How do you save data to localStorage?',
        choices: [
            '1',
            '2',
            'setItem()',
            '4'
        ],
        answer: 'setItem()'
    },
    {
        title: '________ converts a JavaScript object or value to a JSON string.',
        choices: [
            'JSON.stringify',
            '2',
            '3',
            '4'
        ],
        answer: 'JSON.stringify'
    },
    {
        title: 'JSON stands for:',
        choices: [
            '1',
            '2',
            '3',
            'JavaScript Object Notation'
        ],
        answer: 'JavaScript Object Notation'
    },
    {
        title: 'JavaScript arrays star at index ___.',
        choices: [
            '-1',
            '0',
            '1',
            '2'
        ],
        answer: '0'
    },
    {
        title:'Which is not a correct DOM event to use with addEventListener?',
        choices: [
            '1',
            '2',
            'addEventListener("delete", function());',
            '4'
        ],
        answer: 'addEventListner("delete", function());'
    }
]

// Functions Here:

// Function to load the landing page for the quiz
function loadLandingPage() {
    var quizTitleEl = document.createElement("h2");
    quizTitleEl.className = "title-question";
    quizTitleEl.textContent = "Coding Quiz Challenge";
    pageContentEl.appendChild(quizTitleEl);

    var quizDescriptionEl = document.createElement("p");
    quizDescriptionEl.className = "quiz-description";
    quizDescriptionEl.textContent = 'Answer all of the following coding-related questions within the time limit. If you choose the incorrect answer your score/time will be reduced by ten seconds!'
    pageContentEl.appendChild(quizDescriptionEl);

    var startBtnContainerEl = document.createElement("div");
    startBtnContainerEl.className = "start-btn-container";
    startBtnContainerEl.innerHTML = "<button class='btn'>Start Quiz</button>";
    pageContentEl.appendChild(startBtnContainerEl);
}

function viewHighScores() {
    console.log("You want to see your high score!");
}

// Event Listeners Here:

viewHighScoresEl.addEventListener("click", viewHighScores);

// Load the landing page for the quiz
loadLandingPage();