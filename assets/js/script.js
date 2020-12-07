// Variables Here:
var timer = 75;
var i = 0

var viewHighScoresEl = document.querySelector(".view-high-scores");
var timerEl = document.querySelector("#time-left");
var startBtnEl = document.querySelector(".start-btn");
var timerContentEl = document.querySelector(".timer-container");
var headerContentEl = document.querySelector(".header-content");
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
        title: 'JavaScript arrays start at index ___.',
        choices: [
            '1. -1',
            '2. 0',
            '3. 1',
            '4. 2'
        ],
        answer: '2. 0'
    },
    {
        title: 'Which is not a correct DOM event to use with addEventListener?',
        choices: [
            '1. X',
            '2. X',
            '3. X',
            '4. addEventListener("delete", function());'
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
    highScoresPage();
}

// This function runs when 'Start Quiz' is clicked in order to run startQuiz function
function startQuizClick(event) {
    var targetEl = event.target;
    if (targetEl.matches(".start-btn")) {
        startQuiz();
    }
}

function printQuestion() {
    // Clear landing page/main content 
    document.getElementById("page-content").innerHTML = "";
    // Display question
    var questionEl = document.createElement("h2");
    questionEl.className = "title-question";
    questionEl.textContent = questions[i].title;
    pageContentEl.appendChild(questionEl);
    // Display choices
    var answersContainerEl = document.createElement("div");
    answersContainerEl.className = "answers-container";
    pageContentEl.appendChild(answersContainerEl)
    var answer1El = document.createElement("button");
    answer1El.className = "answers";
    answer1El.value = "1";
    answer1El.textContent = questions[i].choices[0];
    answersContainerEl.appendChild(answer1El);
    var answer2El = document.createElement("button");
    answer2El.className = "answers";
    answer2El.value = "2";
    answer2El.textContent = questions[i].choices[1];
    answersContainerEl.appendChild(answer2El);
    var answer3El = document.createElement("button");
    answer3El.className = "answers";
    answer3El.value = "3";
    answer3El.textContent = questions[i].choices[2];
    answersContainerEl.appendChild(answer3El);
    var answer4El = document.createElement("button");
    answer4El.className = "answers";
    answer4El.value = "4";
    answer4El.textContent = questions[i].choices[3];
    answersContainerEl.appendChild(answer4El);
}

// Function to start the quiz/timer and display the first question
function startQuiz() {
    timerEl.textContent = timer;
    var countdown = setInterval(function() {
        timer --
        timerEl.textContent = timer;
        if (timer === 0) {
            clearInterval(countdown);
        }  
    },1000);
    printQuestion();
    //Set timer to 75 and display it and start counting down
    //timer = 75;
}
// Function to check answer
function checkAnswer(event) {
    var targetEl = event.target;
    if (targetEl.matches(".answers")) {
        console.log(questions[i].answer.charAt(0) === targetEl.value);
        if (questions[i].answer.charAt(0) === targetEl.value) {
            //print correct on screen for 1 second 
            i++;
            if (i < questions.length && timer > 0) {
                printQuestion();
            } else {
                displayScore();
            }
        } else {
            //print incorrect on screen for 1 second
            timer -= 10
            i++;
            if (i < questions.length && timer > 0) {
                printQuestion();
            } else {
                displayScore();
            }
        }
    }
}

// Function to finish quiz and display results
function displayScore() {
    document.getElementById("header-content").innerHTML = "";
    document.getElementById("page-content").innerHTML = "";
    var completedEl = document.createElement("h2");
    completedEl.className = "title-question";
    completedEl.textContent = "Quiz Completed!";
    pageContentEl.appendChild(completedEl);
    var finalScoreEl = document.createElement("p");
    finalScoreEl.className = "final-score";
    finalScoreEl.textContent = "Your final score is " + timer + "!";
    pageContentEl.appendChild(finalScoreEl);
    var initialsFormEl = document.createElement("form");
    initialsFormEl.className = "initials-form";
    initialsFormEl.innerHTML = '<label class="initials-label" for="name">Enter initials:</label>'
    pageContentEl.appendChild(initialsFormEl);
    var initialsInputEl = document.createElement("input");
    initialsInputEl.className = "initials-input";
    initialsFormEl.appendChild(initialsInputEl);
    var submitBtnEl = document.createElement("button");
    submitBtnEl.className = "submit-btn";
    submitBtnEl.textContent = "Submit";
    initialsFormEl.appendChild(submitBtnEl);
}

// Function to handle when user submits their initials for High Score
function initialSubmitHandler(event) {
    event.preventDefault();
    var initialsInput = document.querySelector(".initials-input").value;
    console.log(initialsInput.toUpperCase());
    console.log(timer);
    highScoresPage();
}

// Function to display High Scores Page
function highScoresPage() {
    document.getElementById("header-content").innerHTML = "";
    document.getElementById("page-content").innerHTML = "";
    var scoreTitleEl = document.createElement("h2");
    scoreTitleEl.className = "title-question";
    scoreTitleEl.textContent = "High Scores";
    pageContentEl.appendChild(scoreTitleEl);
    var scoresListContainerEl = document.createElement("div");
    scoresListContainerEl.className = "scores-list-container";
    pageContentEl.appendChild(scoresListContainerEl);
    var scoresOlEl = document.createElement("ol");
    scoresOlEl.className = "scores-list-ol";
    scoresListContainerEl.appendChild(scoresOlEl);
    var scoresLiEl = document.createElement("li");
    scoresLiEl.className = "scores-list-li";
    scoresLiEl.textContent = "Test 1";
    scoresOlEl.appendChild(scoresLiEl);
    var scoresLiEl2 = document.createElement("li");
    scoresLiEl2.className = "scores-list-li";
    scoresLiEl2.textContent = "Test 2";
    scoresOlEl.appendChild(scoresLiEl2);
    var scoresLiEl3 = document.createElement("li");
    scoresLiEl3.className = "scores-list-li";
    scoresLiEl3.textContent = "Test 3";
    scoresOlEl.appendChild(scoresLiEl3);
    var buttonsContainerEl = document.createElement("div");
    buttonsContainerEl.className = "buttons-container";
    pageContentEl.appendChild(buttonsContainerEl);
    var backBtn = document.createElement("button");
    backBtn.className = "back-btn";
    backBtn.textContent = "Go Back";
    buttonsContainerEl.appendChild(backBtn);
    var clearBtn = document.createElement("button");
    clearBtn.className = "clear-btn";
    clearBtn.textContent = "Clear High Scores";
    buttonsContainerEl.appendChild(clearBtn);

}

function restart(event) {
    var targetEl = event.target;
    if (targetEl.matches(".back-btn")) {
        location.reload();
    }
}

function clearStorage(event) {
    var targetEl = event.target;
    if (targetEl.matches(".clear-btn")) {
        console.log("You clicked me")
    }
}

// Event Listeners Here:
viewHighScoresEl.addEventListener("click", viewHighScores);
pageContentEl.addEventListener("click", startQuizClick);
pageContentEl.addEventListener("click", checkAnswer);
pageContentEl.addEventListener("submit", initialSubmitHandler);
pageContentEl.addEventListener("click", restart);
pageContentEl.addEventListener("click", clearStorage);


// Load the landing page for the quiz
loadLandingPage();