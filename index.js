var readlineSync = require("readline-sync");

var score = 0;
var highScores = [
  {
    name: "onkar",
    score: 5,
  },

  {
    name: "Pappu",
    score: 4,
  },
  {
    name: "GK   ",
    score: 3,
  },
  {
    name: "Kundi",
    score: 3,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "deoghar"
}, {
  question: "My favorite superhero would be? ",
  answer: "Batman"
},
{
  question: "Where do I work/study? ",
  answer: "bit"
}, {
  question: "My favorite sportsperson would be? ",
  answer: "dhoni"
}, {
  question: "cricket vs football ? ",
  answer: "cricket"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW onke?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }
  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  for(var i=0;i<highScores.length;i++){
    var scores = highScores[i];
    console.log(scores.name, " : ", scores.score);
  }
}


welcome();
game();
showScores();
