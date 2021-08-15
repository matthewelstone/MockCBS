// -------- Questions
const questions = [
    {
        question: "In the three tier system for alcohol sales, an Importer can sell to?",
        options: ["Retailers",
                "Wholesalers",
                "Breweries",
                "Consumers"],
        answer:1
    },   
    {  
        question: "Which of these beers has the highest perceived bitterness?",
        options: ["Kolsch",
                "Bohemian Pilsner",
                "Doppelbock",
                "German Pilsner"],
        answer: 3
    },
    {
        question:"a common exception to the three tier system for alcohol sales is?",
        options: ["A bar that runs out of a certain beer can buy it at a grocery storeand sell it to consumers", 
                "A bottle shop can go to a special bottle release at a brewery, purchase bottles and sell them to consumers",
                "A brewery can operate a taproom where they can sell to consumers",
                "Saying 'It's cool just keep it on the down low'."],
        answer:2
    },
    {
        question:"If beer is pouring foamy at the tap, which of these could not be the cause?",
        options: ["A kink in the beer line",
                "The beer is too cold",
                "The keg is not under enough pressure",
                "The beer lines are too clean"],
        answer:3
    },
    {
        question:"Which is not an aspect of mouthfeel?",
        options:["Thinness",
                "Body",
                "Bitterness",
                "Carbonation"],
        answer:2
    },
    
]
//-----adding constants 
const startButton = document.getElementById("start-test");
const home = document.getElementById("home");
const questionBox = document.getElementById("test-container");
const questionNumber = document.getElementById("question-number");
const questionElement = document.getElementById("question-text");
const options = document.getElementById("options");
const nextButton = document.getElementById("next-div");
const score = document.getElementById("score");
const resultsContainer = document.getElementById("results-container");

let numberOfQuestions = document.getElementById("total-number-of-questions");
let correctInTable = document.getElementById("display-correct-answers");
let wrongInTable = document.getElementById("display-wrong-answers");
let percentage = document.getElementById("display-percentage");
let finalScore = document.getElementById("total-score");

let questionCounter = 0;
let currentQuestion ;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0 ;
let wrongAnswers = 0 ;

function setAvailableQuestions(){
        const totalQuestions = questions.length;
        for(let i=0; i<totalQuestions; i++){
            availableQuestions.push(questions[i]);
        }
};


function newQuestion(){
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " +questions.length;

const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
currentQuestion = questionIndex;
questionElement.innerHTML = currentQuestion.question;

const index1 = availableQuestions.indexOf(questionIndex);
availableQuestions.splice(index1,1);
const optionsLength = currentQuestion.options.length;

for(let i=0;i<optionsLength; i++){
    availableOptions.push(i);
}
options.innerHTML="";
for(let i=0; i<optionsLength; i++){
    const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
    const index2 = availableOptions.indexOf(optionIndex);
    availableOptions.splice(index2,1);
    
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[i];
    option.id = i;
    option.className = "option";
    options.appendChild(option);
    option.setAttribute("onclick","getResult(this)");
    }
questionCounter++;
}

function getResult(optionElement){
    const id = parseInt(optionElement.id);
    if(id === currentQuestion.answer){
        optionElement.classList.add("correct");
        correctAnswers++;
        console.log("correct:", correctAnswers);
    } 
    else {
        optionElement.classList.add("wrong");
        wrongAnswers++;

        const optionLength = options.children.length;
    for(let i=0; i<optionLength; i++){
        if(parseInt(options.children[i].id) === currentQuestion.answer){
           options.children[i].classList.add("correct"); 
        }
        }
    };
    alreadyAnswered();

};
function alreadyAnswered(){
    const optionLength = options.children.length;
    for(let i=0; i<optionLength; i++){
        options.children[i].classList.add("already-answered");
    }
}

nextButton.addEventListener("click", next)

function next(){
    if(questionCounter === questions.length){
        console.log("Test over");
        testFinished();
    } else{
        newQuestion();
    }
}

function testFinished(){
    questionBox.classList.add("hide");
    nextButton.classList.add("hide");
    resultsContainer.classList.remove("hide");
    displayResults();
}

function displayResults(){
    numberOfQuestions.innerHTML = questions.length; 
    correctInTable.innerHTML = correctAnswers;
    wrongInTable.innerHTML = wrongAnswers;
    percentage.innerHTML = (correctAnswers/questions.length)*100 +"%";
    finalScore.innerHTML = correctAnswers + "/" + questions.length;

}


startButton.addEventListener("click", startTest);

function startTest(){
    startButton.classList.add("hide");
    home.classList.add("hide");
    questionElement.classList.remove("hide")
    nextButton.classList.remove("hide");

    setAvailableQuestions();
    newQuestion();
}


