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

let questionCounter = 0;
let currentQuestion ;
let availableQuestions = [];

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
questionCounter++;
}

nextButton.addEventListener("click", next)

function next(){
    if(questionCounter === questions.length){
        console.log("Test over");
    } else{
        newQuestion();
    }

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


