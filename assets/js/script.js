// Variables Here:
// Variable to hold Time and start at 0
var timer = 0;

var viewHighScoresEl = document.querySelector(".view-high-scores");
var timerEl = document.querySelector("#time-left");
var startBtnEl = document.querySelector(".start-btn");
var timerContentEl = document.querySelector(".timer-container");
var pageContentEl = document.querySelector("#page-content");

// Array for questions
var questions = [
    {
        title: 'How do you save data to localStorage?',
        choices: [
            '1. X',
            '2. X',
            '3. setItem()',
            '4. X'
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
    startBtnContainerEl.innerHTML = "<button class='start-btn'>Start Quiz</button>";
    pageContentEl.appendChild(startBtnContainerEl);
}

// Function to view High Scores when 'View High Scores' is clicked
function viewHighScores() {
    // When this runs it should bring you to the High Score 'screen'
    // with High Scores that were saved in localStorage
    console.log("You want to see your high score!");
}

// This function runs when 'Start Quiz' is clicked in order to run startQuiz function
function startQuizClick(event) {
    var targetEl = event.target;
    if (targetEl.matches(".start-btn")) {
        startQuiz();
    }
}

// Function to start the quiz/timer and display the first question
// Example Timer starts at 75
function startQuiz() {
    //Clear landing page/main content 
    document.getElementById("page-content").innerHTML = "";
    //Set timer to 75 and display it
    timer = 75;
    timerEl.textContent = timer;
    //Display Question
    var questionEl = document.createElement("h2");
    questionEl.className = "title-question";
    questionEl.textContent = questions[0].title;
    pageContentEl.appendChild(questionEl);
    //Display choices
    var answersContainerEl = document.createElement("div");
    answersContainerEl.className = "answers-container";
    pageContentEl.appendChild(answersContainerEl)
    var answer1El = document.createElement("button");
    answer1El.className = "answers";
    answer1El.textContent = questions[0].choices[0];
    answersContainerEl.appendChild(answer1El);
    var answer2El = document.createElement("button");
    answer2El.className = "answers";
    answer2El.textContent = questions[0].choices[1];
    answersContainerEl.appendChild(answer2El);
    var answer3El = document.createElement("button");
    answer3El.className = "answers";
    answer3El.textContent = questions[0].choices[2];
    answersContainerEl.appendChild(answer3El);
    var answer4El = document.createElement("button");
    answer4El.className = "answers";
    answer4El.textContent = questions[0].choices[3];
    answersContainerEl.appendChild(answer4El);
    //Allow for button to be clicked and move to new question
    //If the answer is correct
}

// Event Listeners Here:

viewHighScoresEl.addEventListener("click", viewHighScores);
pageContentEl.addEventListener("click", startQuizClick);


// Load the landing page for the quiz
loadLandingPage();