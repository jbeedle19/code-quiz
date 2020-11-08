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
        answer: '3. setItem()'
    },
    {
        title: '________ converts a JavaScript object or value to a JSON string.',
        choices: [
            '1. JSON.stringify',
            '2. X',
            '3. X',
            '4. X'
        ],
        answer: '1. JSON.stringify'
    },
    {
        title: 'JSON stands for:',
        choices: [
            '1. X',
            '2. JavaScript Object Notation',
            '3. X',
            '4. X'
        ],
        answer: '2. JavaScript Object Notation'
    },
    {
        title: 'JavaScript arrays star at index ___.',
        choices: [
            '1. -1',
            '2. 0',
            '3. 1',
            '4. 2'
        ],
        answer: '2. 0'
    },
    {
        title:'Which is not a correct DOM event to use with addEventListener?',
        choices: [
            '1. X',
            '2. X',
            '3. X',
            '4. addEventListener()"delete", function());'
        ],
        answer: '4. addEventListener("delete", function());'
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
    //Set timer to 75 and display it also start counting down
    timer = 75;
    timerEl.textContent = timer;
    //Loop through and display questions
    //for (var i = 0; i < questions.length; i++) {
        // Clear landing page/main content 
        document.getElementById("page-content").innerHTML = "";
        // Display question
        var questionEl = document.createElement("h2");
        questionEl.className = "title-question";
        questionEl.textContent = questions[0].title;
        pageContentEl.appendChild(questionEl);
        // Display choices
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
        // Check if correct answer was clicked
        //if ()
    //}
    
    
    //Allow for button to be clicked and move to new question
    //If the answer is correct
}
//Function to check answer
function checkAnswer(event) {
    var targetEl = event.target;
    if (targetEl.matches(".answers")) {
        if (questions[0].choices[i].value === questions[0].answer.value)
        console.log('CORRECT');   
    }
}
// Event Listeners Here:

viewHighScoresEl.addEventListener("click", viewHighScores);
pageContentEl.addEventListener("click", startQuizClick);
pageContentEl.addEventListener("click", checkAnswer);


// Load the landing page for the quiz
loadLandingPage();