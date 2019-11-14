// Declare variables
// ============================================
var seconds = 60;
var intervalId;
var correct;
var inCorrect;
var timeUp;

// Object containing questions and answers
var myQuestions = [{
  ques: "Who is Harry Potter's Godfather?",
  ans: ["Severus Snape", "Sirius Black", "Remus Lupin", "Albus Dumbledore"],
  name: "godfather",
  correct: "Sirius Black",
  divClass: ".godfather"
},]

var myQuestions = [{
  ques: "What is the name of the elf that saves Harry's life?",
  ans: ["Winky", "Dobby", "Kreacher", "Hedwig"],
  name: "elf",
  correct: "Dobby",
  divClass: ".elf"
},]

var myQuestions = [{
  ques: "How many Weasley children are there?",
  ans: [8, 7, 6, 9],
  name: "weasley",
  correct: 7,
  divClass: ".weasley"
},]

var myQuestions = [{
  ques: "What is the message written on the snitch Dumbledore gave to Harry?",
  ans: ["I open at the close.", "With great power comes great responsibility", "Death is but the next great adventure.", "I solemnly swear that I am up to no good."],
  name: "snitch",
  correct: "I open at the close.",
  divClass: ".snitch"
},]

var myQuestions = [{
  ques: "What is the name of the dark wizard Harry must defeat?",
  ans: ["Grindelwald", "Draco Malfoy", "Sirius Black", "Voldemort"],
  name: "wizard",
  correct: "Voldemort",
  divClass: ".wizard"
},] // end the object.


var myAnswer = [""]


// setTimeout 
setTimeout(timeUp, 1000 * 60);

// Create Functions
// ============================================
// Start countdown on load
var startGame = $("#start-btn").on("click",  function () {
  var seconds = 60;
  var intervalId;
  var correct;
  var inCorrect;
  var timeUp;
  var myQuestions = []
  var myAnswer = [""]

  setTimeout(timeUp, 1000 * 60);

  // Start function 
  function start() {
    intervalId = setInterval(count, 1000);
  }

  // Count function
  function count() {
    // DONE: increment time by 1, remember we cant use "this" here.
    seconds--;
    var converted = timeConverter(seconds);
    console.log(converted);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#time-left").text(converted);
  }
  start();

  // Time's up function
  function timeUp() {
    $("#time-left").text("Time's up!");
    clearInterval(intervalId);
    // Alert when time's up
    alert("Time's up!");
  }

 
});

// Main Processes 
// ============================================
// Start countdown 
$("#time-left").text("00:60");

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
