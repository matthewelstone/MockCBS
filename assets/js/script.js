//-----adding constants for the home page
const startButton = document.getElementById("start-test");
const home = document.getElementById("home");
const questionBox = document.getElementById("test-container");
const questionElement = document.getElementById("question-container")
const answerButtons = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-div");

let randomisedQuestions, currentQuestions

startButton.addEventListener("click", startTest);

function startTest(){
    startButton.classList.add("hide");
    home.classList.add("hide");
    questionBox.classList.remove("hide");
    submitButton.classList.remove("hide");
    randomisedQuestions = questions.sort(() => Math.random() - .5);
    currentQuestions = 0;
    nextQuestion()

};

function nextQuestion(){
    showQuestion(randomisedQuestions[currentQuestions])

};

function showQuestion(question){
    questionElement.innerText = question.question
   
    

};


function selectAnswer(){

}


// -------- Questions
const questions = [
    {
        question: "In the three tier system for alcohol sales, an Importer can sell to?",
        answers: [
            {text:"retailers", correct:"false"},
            {text:"Wholesalers", correct:"true"},
            {text:"Breweries", correct:"false"},
            {text:"Consumers", correct:"false"}
        ]
    }
]