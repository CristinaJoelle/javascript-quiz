const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const counterText = document.getElementById("counter");
let countdown = document.getElementById("countdown");
var timeLeft = 60;
var timerId;

function timer() {
  timeLeft--;
  countdown.innerHTML = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timerId);
  }
}

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Which comparison operator is used to show values are NOT equal?",
    choice1: "==",
    choice2: ">",
    choice3: ">=",
    choice4: "!=",
    answer: 4,
  },
  {
    question: "How would you write 'Hello World' in the console?",
    choice1: "alert('Hello World')",
    choice2: "console.log('Hello World')",
    choice3: "let('Hello World')",
    choice4: "msBox('Hello World')",
    answer: 2,
  },
  {
    question:
      "What element would you use to link the JavaScript file to the HTML file?",
    choice1: "<link>",
    choice2: "<tag>",
    choice3: "<script>",
    choice4: "<a>",
    answer: 3,
  },
  {
    question: "Which of the following is a boolean value?",
    choice1: "true",
    choice2: "1997",
    choice3: "'Hello'",
    choice4: "null",
    answer: 1,
  },
  {
    question: "How would you find an element by it's ID?",
    choice1: "getelementsByClassName",
    choice2: "querySelectorAll",
    choice3: "getElementById",
    choice4: "getElementsByTagName",
    answer: 3,
  },
];

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  countdown.innerHTML = timeLeft;
  timerId = setInterval(timer, 1000);
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", timeLeft);
    clearInterval(timerId);
    window.location = "./end.html";
    return;
  }
  questionCounter++;
  counterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    console.log(classToApply);
    if (classToApply == "incorrect") {
      timeLeft = timeLeft - 5;
    }

    getNewQuestion();
  });
});

startGame();
