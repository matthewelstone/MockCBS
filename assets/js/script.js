//-----adding constants for the home page
const startButton = document.getElementById("start-test");
const home = document.getElementById("home");
const questionBox = document.getElementById("test-container");
const questionElement = document.getElementById("question-container")
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("submit-div");
const score = document.getElementById("score");


// -------- Questions
const questions = [
    {
        question: "In the three tier system for alcohol sales, an Importer can sell to?",
        options: ["Retailers",
                "Wholesalers",
                "Breweries",
                "Consumers"],
        answer: "Wholesalers"},
       
    {  
        question: "Which of these beers has the highest perceived bitterness?",
        options: ["Kolsch",
                "Bohemian Pilsner",
                "Doppelbock",
                "German Pilsner"],
        answer: "German Pilsner"},
    {
        question:"a common exception to the three tier system for alcohol sales is?",
        options: ["A bar that runs out of a certain beer can buy it at a grocery storeand sell it to consumers", 
                "A bottle shop can go to a special bottle release at a brewery, purchase bottles and sell them to consumers",
                "A brewery can operate a taproom where they can sell to consumers",
                "Saying 'It's cool just keep it on the down low'."],
        answer:"A brewery can operate a taproom where they can sell to consumers"},
    {
        question:"If beer is pouring foamy at the tap, which of these could not be the cause?",
        options: ["A kink in the beer line",
                "The beer is too cold",
                "The keg is not under enough pressure",
                "The beer lines are too clean"],
        answer:"The beer lines are too clean"},
    {
        question:"Which is not an aspect of mouthfeel?",
        options:["Thinness",
                "Body",
                "Bitterness",
                "Carbonation"],
        answer:"Bitterness"},
    {}
]