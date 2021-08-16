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
    {
        question:"Which beer style typically has the highest ABV?",
        options:["Marzen",
                "Doppelbock",
                "Munich Dunkel",
                "Lambic"],
        answer:1
    },
    {
        question:"Which of these beer styles is golden in colour?",
        options:["Wit",
                "Munich Dunkel",
                "Tripel",
                "California Common"],
        answer:2
    },
    {
        question:"When a beer is light struck, it will have an off-flavour described as?",
        options:["Buttery",
                "Skunky",
                "Papery",
                "Vinegary"],
        answer:1
    },
    {
        question:"A general description of the flavour combination of American hops is?",
        options:["Floral & perfumey",
                "Earthy & woody",
                "Tropical & fruit like",
                "Citrusy & piney"],
        answer:3
    },
    {
        question:"Which beer has a yeast profile typically described as peppery?",
        options:["Saison",
                "American Brown Ale",
                "Hefeweizen",
                "Gueuze"],
        answer:0
    },
    {
        question:"It's primarily better to drink beer from a glass rather than a bottle or a can because?",
        options:["The presentation is nicer for the consumer",
                "The beer is less likely to skunk",
                "The consumer will experience more of the aroma",
                "It's less likely to spill"],
        answer:2
    },
    {
        question:"Which is not a primary flavour?",
        options:["Bitter",
                "Roast",
                "Sour",
                "Sweet"],
        answer:1
    },
    {
        question:"Which off-flavour are you most likely to encounter if a draft system has not been properly cleaned?",
        options:["Buttery",
                "Skunky",
                "Papery",
                "Astringent"],
        answer:0
    },
    {
        question:"How often must a draft system be cleaned?",
        options:["Once a week",
                "Every two weeks",
                "Once a month",
                "Every three months"],
        answer:1
    },
    {
        question:"What's the affect of serving a beer too cold?",
        options:["The consumer will experience less aroma and flavour",
                "It will be overly foamy at the tap",
                "It will taste sweeter",
                "It will bring out the aroma of the beer"],
        answer:0
    },
    {
        question:"What should a retailer do when they discover they have a beer in inventory that is beond its best by date?",
        options:["Put it on sale to move it quickly",
                "Rotate the inventory so there is fresher beer for sale",
                "Remove it from inventory",
                "Blend it with fresh beer and put it on draft"],
        answer:2
    },
    {
        question:"Why shouldn't you dunk the faucet in the glass of beer when pouring draft beer?",
        options:["You won't get enough head on beer",
                "You may accidently pour some beer over the side of the glass and create waste",
                "It's lazy and looks bad to the customer",
                "There will be cross contamination, it creates a breeding ground for bacteria"],
        answer:3
    },
    {
        question:"What is one way to check if a glass is beer clean when it is full of beer?",
        options:["Check for buttery and vinegary off-flavours in the beer",
                "Check to see if salt will stick evenly off the inside of the glass",
                "Check to see if water will sheet evenly off the inside of the glass",
                "Check for the formation of bubbles along the inside of the glass"],
        answer:3
    },
    {
        question:"At what BAC level is someone too incapacitated to drive?",
        options:["0.80 BAC",
                "0.08 BAC",
                "0.008 BAC",
                "8.0 BAC"],
        answer:1
    },
    {
        question:"At least how long should a keg be put in a cooler before it is served from?",
        options:["4 hours",
                "10 hours",
                "24 hours",
                "48 hours"],
        answer:2
    },
    {
        question:"One of the most common causes of beer that is overly foamy at the tap is?",
        options:["The beer is too warm",
                "Bartenders dunking the tap in beer",
                "The beer is too cold",
                "Bartenders Pulling the tap all the way down"],
        answer:0
    },
    {
        question:"Which statement is the most accurate?",
        options:["American ale yeast strains are typically quite 'clean', British ale yeast strains commonly create a more fruitly character,  while many Belgian ale yeast strains are extremely characterful and create fruity and spicy characteristics",
                "British ale yeast strains are typically quite 'clean', German ale yeast strains commonly create a more fruitly character,  while many American ale yeast strains are extremely characterful and create fruity and spicy characteristics",
                "Belgian ale yeast strains are typically quite 'clean', American ale yeast strains commonly create a more fruitly character,  while many British ale yeast strains are extremely characterful and create fruity and spicy characteristics",
                "German ale yeast strains are typically quite 'clean', British ale yeast strains commonly create a more fruitly character,  while many American ale yeast strains are extremely characterful and create fruity and spicy characteristics"],
        answer:0
    },
    {
        question:"Which glass is most appropriate for a Barleywine?",
        options:["Stemmed tulip",
                "Shaker pint",
                "Snifter",
                "Nonic imperial pint"],
        answer:2
    },
    {
        question:"Which glass is most appropriate for a British Mild?",
        options:["Stemmed tulip",
                "Shaker pint",
                "Snifter",
                "Nonic imperial pint"],
        answer:3
    },
    {
        question:"Which glass is most appropriate for a American IPA?",
        options:["Stemmed tulip",
                "Shaker pint",
                "Snifter",
                "Nonic imperial pint"],
        answer:1
    },
    {
        question:"Which glass is most appropriate for a Belgian Tripel?",
        options:["Stemmed tulip",
                "Shaker pint",
                "Snifter",
                "Nonic imperial pint"],
        answer:0
    },
    {
        question:"Hops grow on?",
        options:["Catkins",
                "Vines",
                "Bushes",
                "Bines"],
        answer:3
    },
    {
        question:"The primary purposes for cleaning the draft line is?",
        options:["Rid them of foreign microbes and beer stone",
                "Rid them of the flavour of the previous beer and beer stone",
                "Rid them of skunky and papery off flavours",
                "Rid them of foreign microbes and the flavour of the previous beer that was on draft"],
        answer:0
    },
    {
        question:"In the three tier system for alcohol sales, a Wholesaler can sell beer to?",
        options:["Consumers",
                "Retailers",
                "Breweries",
                "Importers"],
        answer:1
    },
    {
        question:"Keg couplers:",
        options:["Must be vented each time you change a keg on that beer line",
                "Must be cleaned every three months",
                "Let gas in to the keg and beer out of the keg",
                "Attach to the faucet"],
        answer:2
    },
    {
        question:"Which of these beers is a showcase for flavours that come from malt?",
        options:["British Bitter",
                "Wee Heavy",
                "Saison",
                "American IPA"],
        answer:1
    },
    {
        question:"Which is a style associated with Trappist breweries?",
        options:["Saison",
                "Doppelbock",
                "Dubbel",
                "Flanders Red"],
        answer:3
    },
    {
        question:"This dark UK ale has low to moderate perceived bitterness, is dark brown to black in colour, and has a lower to normal ABV?",
        options:["British Mild",
                "Sweet Stout",
                "Irish Stout",
                "Dutch Porter"],
        answer:1
    },
    {
        question:"Which Belgian style is typically made with coriander and orange peel?",
        options:["Saison",
                "Dubbel",
                "Belgian Blond",
                "Wit"],
        answer:3
    },
    {
        question:"Which American ale has highly assertive perceived bitterness, is light amber to light brown in colour, and has a high to very high ABV?",
        options:["American Barleywine",
                "Imperial IPA",
                "American Imperial Stout",
                "AMerican Brown Ale"],
        answer:0
    },
    {
        question:"Whih is most true?",
        options:["German hafeweizens have a 'clean' yeast character, whereas American wheat beer has clove and banana yeast character. They're both cloudy from wheat protein and yeast that is in suspension. They both have ABVs in the normal range",
                "German hafeweizens have a clove and banana yeast character, whereas American wheat beer has a 'clean' yeast character. They're both cloudy from wheat protein and yeast that is in suspension. They both have ABVs in the elevated range",
                "German hafeweizens have a clove and banana yeast character, whereas American wheat beer has a 'clean' yeast character and can be slightly hoppier. They're both cloudy from wheat protein and yeast that is in suspension. They both have ABVs in the normal range",
                "German hafeweizens have a clove and banana yeast character and can be slightly hoppier, whereas American wheat beer has a 'clean' yeast character. They're both cloudy from wheat protein and yeast that is in suspension. They both have ABVs in the elevated range"],
        answer:2
    },
    {
        question:"Which style is associated with the Rhine Valley of Germany?",
        options:["Kolsch",
                "Marzen",
                "Helles bock",
                "Hefeweizen"],
        answer:0
    },
    {
        question:"Which style is typically the least tart, sour or acidic?",
        options:["Gueuze",
                "Kriek",
                "Flanders Red",
                "Dubbel"],
        answer:3
    }
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


