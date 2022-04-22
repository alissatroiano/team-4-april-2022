
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startQuiz = document.getElementById('startQuiz');

// This function is called when the user clicks on the start button
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

function showResults(){}

// Create an array of questions here
const quizQuestions = [
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

// Create the actual quiz here
function buildQuiz() {
    // variable to store the html output
    const output = [];
    // Use forEach to loop through the quiz and create the HTML for each question
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        // Now we want to store the list of answer choices in an empty array so we can calculate the final saving price result later
        const answers = []
        for(answer in currentQuestion.answers) {
            // Give users the ability to select their answer/choice
            answers.push(
            ` <a class="stretched-link" href="question${questionNumber}">
                  <div class="card h-100">
                      <div class="card-header">
                          <h5 class="card-title" value="${answer}"></h5>
                          ${answer}
                      </div>
                      <div class="card-body py-5">
                          <i class="fas fa-car fa-3x"></i>
                      </div>
                  </div>
                  </a>
            `
            );
              quizContainer.innerHTML = output.join('');
        }

    // add HTML for choice selection
});
}
