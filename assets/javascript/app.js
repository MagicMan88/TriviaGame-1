var card = $("#quiz");
// Question set
var questions = [
  {
    question: "Who is Harry Potter's Godfather?",
    answers: ["Sirius Black", "Severus Snape", "Remus Lupin", "Albus Dumbledore"],
    correctAnswer: "Sirius Black"
  },
  {
    question: "What is the name of the elf that saves Harry's life?",
    answers: ["Winky", "Dobby", "Kreacher", "Hedwig"],
    correctAnswer: "Dobby"
  },
  {
    question: "How many Weasley children are there?",
    answers: [6,7,8,9],
    correctAnswer: 7
  },
  {
    question: "What is the message written on the snitch Dumbledore gave to Harry?",
    answers: ["I open at the close", "With great power comes great responsibility", "Death is but the next great adventure", "I solemnly swear that I am up to no good"],
    correctAnswer: "I open at the close"
  },
  {
    question: "What is the name of the dark wizard Harry must defeat?",
    answers: ["Grindelwald", "Draco Malfoy", "Sirius Black", "Voldemort"],
    correctAnswer: "Voldemort"
  }
];


// Timer // Countdown Function
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 90,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  // Start Everything
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#container").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    card.append("<button id='done'>Done</button>");
  },


  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  // Results
  result: function() {
    clearInterval(timer);
    $("#container h2").remove();
    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};


// ON-CLICK EVENTS// Start and Finish
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});