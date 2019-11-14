// Declare variables
// ============================================
var seconds = 60;
var intervalId;
var timeUp;

//


// Create Functions
// ============================================
// Start countdown on click
  var startGame = $("#start-btn").on("click", function () {
  var seconds = 60;
  var intervalId;
  var timeUp;

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

// Function to show results
$("#submit-btn").on("click", function onSubmit() {
  var score = 0;
  var numOfQuestions = 5;
  var answerArray = ['b', 'b', 'b', 'a', 'd'];

  // get the quiz
  var q1 = document.forms['quiz']['q1'].value;
  var q1 = document.forms['quiz']['q1'].value;
  var q1 = document.forms['quiz']['q1'].value;
  var q1 = document.forms['quiz']['q1'].value;
  var q1 = document.forms['quiz']['q1'].value;

  // Loop through answers
  for (var i = 1; i <= numOfQuestions; i++){
    if(eval('q' + i) == '') {
      alert("You messed up question " + i);
    }

    for (var i = 1; i <= numOfQuestions; i++){
      if(eval('q' + i) == answerArray[i - 1]) {
        score++;
      }
    }

    // Add results to html
    var results = $("#results")
    results.text("<h2> You messed up </h2>")
    alert("You scored " + score + " out of " (numOfQuestions)
  }
})


// Main Processes 
// ============================================
// setTimeout 
setTimeout(timeUp, 1000 * 60);

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
