// We will use the index of the questions array to get the current question
Quiz.prototype.getQuestionIndex = function() {
    return this.questionIndex;
}

// Quiz Ended/Over script
Quiz.prototype.isEnded = function() {
}

// This function is called when the user clicks on the start button
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Store the user's choice here
Question.prototype.userChoice = function(choice) {
    return choice === this.answer;
};


// A function for the user's chouce
function answer(id, choice) {
    // Find the ID's in the HTML
    var button = document.getElementById(id);
}

// show progress
function showProgress() {
    const currentQuestionNumber = quiz.questionIndex + 1;
    const element = document.getElementById('progress');
    element.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// Create an array of questions here
var questions = [
    {
      question: "What type of car do you want?",
      answers: {
        a: "Compact",
        b: "Mid-Size",
        c: "SUV"
      },
      userAnswer: ""
    },
    {
      question: "What is your annual mileage?",
      answers: {
        a: "Less than 10,000",
        b: "10,000 - 20,000",
        c: "More than 20,000"
      },
      userAnswer: ""
    },
    {
      question: "What is your budget?",
      answers: {
        a: "Less than $30,000",
        b: "$30,000 - $50,000",
        c: "$More than $50,000"
      },
      userAnswer: ""
    }
  ];


// Used the questions defined about to create the quiz
function Quiz(questions) {
    this.score = 0;
    this.questions = 0;
    this.questionIndex = 0;
}

var quiz = new Quiz(questions);
