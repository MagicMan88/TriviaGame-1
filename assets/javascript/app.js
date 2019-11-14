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
  ques: "Who is Harry Potter's Godfather?",
  ans: ["Severus Snape", "Sirius Black", "Remus Lupin", "Albus Dumbledore"],
  name: "godfather",
  correct: "Sirius Black",
  divClass: ".godfather"
},]
var myQuestions = [{
  ques: "Who is Harry Potter's Godfather?",
  ans: ["Severus Snape", "Sirius Black", "Remus Lupin", "Albus Dumbledore"],
  name: "godfather",
  correct: "Sirius Black",
  divClass: ".godfather"
},]
var myQuestions = [{
  ques: "Who is Harry Potter's Godfather?",
  ans: ["Severus Snape", "Sirius Black", "Remus Lupin", "Albus Dumbledore"],
  name: "godfather",
  correct: "Sirius Black",
  divClass: ".godfather"
},]
var myQuestions = [{
  ques: "Who is Harry Potter's Godfather?",
  ans: ["Severus Snape", "Sirius Black", "Remus Lupin", "Albus Dumbledore"],
  name: "godfather",
  correct: "Sirius Black",
  divClass: ".godfather"
},]

var myAnswer = [""]


// setTimeout 
setTimeout(timeUp, 1000 * 60);

// Create Functions
// ============================================
// Start countdown on load
window.onload = function () {
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

 
};

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
