// script.js
const quizData = [
  {
  question: "What is the capital of India?",
    options: ["New Delhi", "Bengaluru", "Mumbai", "Dehradun"],
    answer: "New Delhi",
  },
  {
    question: "Which programming language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Ruby"],
    answer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question:"Who is the CEO of Zomato?",
    options: ["Pankaj Chaddah","Sriharsha Majety","Deepinder Goyal","Sameer Khetarpal"],
    answer: "Deepinder Goyal",
  },
  {
    question:"Who holds the most record for the most runs in IPL history?",
    options:["Rohit Sharma","Virat Kohli","M S Dhoni","David Warner"],
    answer:"Virat Kohli",
  },
  {
    question:"Who is the youngest player to score an IPL half-century?",
    options:["Rishab Pant","Shubman Gill","Prithvi Shaw","Yashasvi Jaiswal"],
    answer : "Yashasvi Jaiswal",
  },
  {
    question:"Which is the highest-grossing Bollywood movie of all time?",
    options:["Dangal","Pathan","Gadar2","PK"],
    answer : "Dangal",
  },
  
];

// DOM Elements
const welcomeScreen = document.getElementById("welcome");
const startButton = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next");
const resultContainer = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartButton = document.getElementById("restart");

let currentQuestion = 0;
let score = 0;

// Load question and reset styles
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText = currentQuizData.question;
  options.forEach((btn, index) => {
    btn.innerText = currentQuizData.options[index];
    btn.className = "option";
    btn.style.backgroundColor = "";
    btn.disabled = false;
  });
  nextButton.classList.add("hidden");
}
function checkAnswer(selected) {
  const answer = quizData[currentQuestion].answer;
  if (selected.innerText === answer) {
    selected.style.backgroundColor = "green";
    score++;
  } else {
    selected.style.backgroundColor = "red";
    options.forEach((btn) => {
      if (btn.innerText === answer) {
        btn.style.backgroundColor = "green";
      }
    });
  }

  // Disable all buttons after an answer is selected
  options.forEach((btn) => (btn.disabled = true));
  nextButton.classList.remove("hidden");
}
function showResult() {
  quiz.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreEl.innerText = `${score}/${quizData.length}`;
}
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
}
function startQuiz() {
  welcomeScreen.classList.add("hidden");
  quiz.classList.remove("hidden");
  loadQuestion();
}
options.forEach((btn) => {
  btn.addEventListener("click", () => checkAnswer(btn));
});
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});
restartButton.addEventListener("click", restartQuiz);
restartQuiz();
