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
        options: ["Kölsch",
                "Bohemian Pilsner",
                "Doppelbock",
                "German Pilsner"],
        answer: 3
    },
    {
        question:"A common exception to the three tier system for alcohol sales is?",
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
        question:"What's the effect of serving a beer too cold?",
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
        options:["American ale yeast strains are typically quite 'clean', British ale yeast strains commonly create a more fruity character,  while many Belgian ale yeast strains are extremely characterful and create fruity and spicy characteristics",
                "British ale yeast strains are typically quite 'clean', German ale yeast strains commonly create a more fruity character,  while many American ale yeast strains are extremely characterful and create fruity and spicy characteristics",
                "Belgian ale yeast strains are typically quite 'clean', American ale yeast strains commonly create a more fruity character,  while many British ale yeast strains are extremely characterful and create fruity and spicy characteristics",
                "German ale yeast strains are typically quite 'clean', British ale yeast strains commonly create a more fruity character,  while many American ale yeast strains are extremely characterful and create fruity and spicy characteristics"],
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
        question:"Which American ale has highly assertive perceived bitterness, is dark gold to dark amber in colour, and has a high ABV?",
        options:["American Barleywine",
                "Imperial IPA",
                "American Imperial Stout",
                "American Brown Ale"],
        answer:1

    },
    {
        question:"What are some malt flavours typically associated with pale beers?",
        options:["Uncooked flour, bread dough",
                "White Bread, Wheat bread, water cracker",
                "Toast, caramel, piecrust",
                "Nutty, toffee, chocolate"],
        answer:0

    },
    {
        question:"Which American ale has highly assertive perceived bitterness, is light amber to light brown in colour, and has a high to very high ABV?",
        options:["American Barleywine",
                "Imperial IPA",
                "American Imperial Stout",
                "American Brown Ale"],
        answer:0
    },
    {
        question:"Which is most true?",
        options:["German hefeweizens have a 'clean' yeast character, whereas American wheat beer has clove and banana yeast character. They're both cloudy from wheat protein and yeast that is in suspension. They both have ABVs in the normal range",
                "German hefeweizens have a clove and banana yeast character, whereas American wheat beer has a 'clean' yeast character. They're both cloudy from wheat protein and yeast that is in suspension. They both have ABVs in the elevated range",
                "German hefeweizens have a clove and banana yeast character, whereas American wheat beer has a 'clean' yeast character and can be slightly hoppier. They're both cloudy from wheat protein and yeast that is in suspension. They both have ABVs in the normal range",
                "German hefeweizens have a clove and banana yeast character and can be slightly hoppier, whereas American wheat beer has a 'clean' yeast character. They're both cloudy from wheat protein and yeast that is in suspension. They both have ABVs in the elevated range"],
        answer:2
    },
    {
        question:"Which style is associated with the Rhine Valley of Germany?",
        options:["Kölsch",
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
    },
    {
        question:"What flavours and aromas would most likely come from hops?",
        options:["Roasty, chocolaty",
                "Floral, earthy",
                "Bread dough, bread crust",
                "Banana, clove"],
        answer:1
    },
    {
        question:"What flavours and aromas would most likely come from malt?",
        options:["Nutty, toast",
                "Citrus, resin",
                "Peppery, tart",
                "Banana, clove"],
        answer:0
    },
    {
        question:"What flavours and aromas would most likely come from yeast?",
        options:["Roasty, chocolaty",
                "Floral, earthy",
                "Bread dough, bread crust",
                "Banana, clove"],
        answer:3
    },
    {
        question:"Which is most true about the primary differences between lager and ale yeast?",
        options:["Lager yeast likes to ferment a a lower temperature than ale yeast and results in a less characterful yeast profile in the final beer, allowing the malt or hops to play the central role",
                "Ale yeast likes to ferment a a lower temperature than lager yeast and results in a less characterful yeast profile in the final beer, allowing the malt or hops to play the central role",
                "Lager yeast prefers to ferment at a higher temperature than ale yeast and results in a more characterful yeast profile in the final beer that often plays the central role",
                "Lager yeast prefers to ferment at a lower temperature than ale yeast and results in a more spicy yeast profile in the final beer that balances pefectly with the malt character"],
        answer:0
    },
    {
        question:"A bartender would use a glass rinser before pouring a draft beer into a glass in order to?",
        options:["Clean remnants of old beer from the glass",
                "Rinse out any remaining sanitizer and dust",
                "Rinse off any lipstick or any other oily residue on the glass",
                "To impress the customer"],
        answer:1
    },
    {
        question:"Which beer is not an example of an American style that originated in Europe?",
        options:["American IPA",
                "American Pale Ale",
                "Robust Porter",
                "California Common"],
        answer:3
    },
    {
        question:"Frozen frosted glasswear:",
        options:["Is acceptable, especially for pale lagers",
                "Is not recomended, can cause foaming and makes beer too cold",
                "Is recomended if the draft system temperature is too warm",
                "Is not recomended, causes glasswear to break more easily"],
        answer:1
    },
    {
        question:"To change a common keg you must:",
        options:["Grip the keg coupler handle, pull out and raise to the 'up' or 'off' position to disengage. Turn the coupler 90 degrees counterclockwise to unseat it. Lift it off the keg, seat it on the new keg and do the same in reverse",
                "Unscrew the keg coupler counterclockwise to disengage. Lift it off the keg, seat it on the new keg and do the same in reverse",
                "Grip the keg coupler handle, turn the coupler 90 degrees counterclockwise to unseat it. Lift it off the keg, seat it on the new keg and do the same in reverse",
                "Wait for the bar back to get to it"],
        answer:0
    },
    {
        question:"If a draft system has foam-on-beer (FOB) detectors:",
        options:["They will fill the draft line with beer when the keg runs out",
                "They need to be reset after a keg change, usually by venting to release foam and gas from the chamber",
                "They must be cleaned in-line at least every three months during the regular cleaning",
                "It is most likely a direct draw draft system"],
        answer:1 
    },
    {
        question:"What is the most popular style of beer in the world?",
        options:["German Pilsner",
                "Czech Premium Pale Lager",
                "American Lager",
                "IPA"],
        answer:2
    },
    {
        question:"Which brown to roasty beer associated with London and the industrial revolution era has a pronounced perceived bitterness and a normal to elevated ABV?",
        options:["Porter",
                "Irish Stout",
                "Sweet Stout",
                "Mild"],
        answer:0
    },
    {
        question:"Which gold coloured beer has a low perceived bitterness and an elevated ABV of 6-7%. It typically features a subtle spicy phenol character",
        options:["American Blond",
                "Belgian Golden Strong Ale",
                "American IPA",
                "Belgian Blond"],
        answer:3
    },
    {
        question:"What are some malt flavours typically associated with amber beers?",
        options:["White bread, wheat bread, water cracker",
                "Toast, caramel, piecrust",
                "Nutty, toffee, chocolate, dark/dried fruit",
                "Roast, burnt, coffee"],
        answer:1
    },
    {
        question:"What are some hop aromas and flavours typically associated with German and Czech hops?",
        options:["Earthy, woody",
                "Piney,citrus",
                "Resiny, herbal",
                "Floral, spicy"],
        answer:3
    },
    {
        question:"How much does water typically take up of a beer?",
        options:["60%",
                "70%",
                "80%",
                "90%"],
        answer:3
    },
    {
        question:"Which golden to brown German beer is descended from monastic tradition, was known as 'liquid bread' and has an elevated to high ABV?",
        options:["Helles Bock",
                "Doppelbock",
                "Oktoberfest",
                "Belgian Dubbel"],
        answer:1
    },
    {
        question:"Which beer is similar to a Tripel,but is cleaner, simpler, lighter and drier? Duvel is the classic example. its perceived bitterness is moderate. Color is gold. ABV is high to very high.",
        options:["Belgian Blonde",
                "Belgian Golden Strong",
                "Belgian Pale",
                "Saison"],
        answer:1
    },
    {
        question:"What is the typical draft system operating temperature?",
        options:["38°F",
                "36°F",
                "34°F",
                "32°F"],
        answer:0
    },
    {
        question:"What should you have for a proper pour?",
        options:["Approximately a half an inch of foam head. Weizens and Belgian ales can have 1.5 inches of head",
                "Approximately 3 inches of foam head. Weizens and Belgian ales can have 4-6 inches of head",
                "Approximately 1 inch of foam head. Weizens and Belgian ales can have 2-4 inches of head",
                "Very little head. Weizens and Belgian ales can have 1 inch of head"],
        answer:2
    },
    {
        question:"What beer style is typically brewed with salt?",
        options:["Eisbock",
                "Gose",
                "Gueuze",
                "Bière de Garde"],
        answer:1
    } 
]

// ------- Modal adjusted from W3 schools//
var modal = document.getElementById("rules-modal");
var btn = document.getElementById("rules-link");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display="block";
}
span.onclick = function(){
    modal.style.display= "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    } 
}







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
const jumbotron = document.getElementById("jumbotron");

let numberOfQuestions = document.getElementById("total-number-of-questions");
let correctInTable = document.getElementById("display-correct-answers");
let wrongInTable = document.getElementById("display-wrong-answers");
let percentage = document.getElementById("display-percentage");
let finalScore = document.getElementById("total-score");
let congratulationsComisorations = document.getElementById("did-they-pass");

let questionCounter = 0;
let currentQuestion ;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0 ;
let wrongAnswers = 0 ;



// adapted quiz from Coding Nepal 

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
nextButton.classList.add("hide");
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
    nextButton.classList.remove("hide");

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
    percentage.innerHTML = ((correctAnswers/questions.length)*100).toFixed(1) +"%";
    finalScore.innerHTML = correctAnswers + "/" + questions.length;
    
    var passPercentage =(correctAnswers/questions.length)*100;
    if ( passPercentage >= 75 ){
        console.log("PASS")
        congratulationsComisorations.innerHTML = "Congratulations! you passed!</br> Now its time to sit the real thing!";
        jumbotron.classList.add("pass");
    }
    else{
        console.log("FAIL");
        congratulationsComisorations.innerHTML = "Sorry you didn't pass this time. <br>Study some more and try again.";
        jumbotron.classList.add("fail");
    }

}

startButton.addEventListener("click", startTest);


// adapted countdown from falak786 on codepen

function startTimer(){
var count = document.getElementById("timer");
var sec = 1800;
function secPass(){
    "use strict";
    var min = Math.floor(sec/60)
    var remSec = sec % 60;

    if (remSec < 10){
        remSec = "0" + remSec;
    }
    if (min <10){
        min = "0"+min;
    }
    count.innerHTML = min + ":" + remSec;

    if (sec > 0){
        sec = sec - 1;
    } else {
        clearInterval(countDown);
        testFinished();
    }

}
var secpass;
var countDown = setInterval(function(){
    "use strict";
    secPass();
}, 1000);
}

function startTest(){
    startButton.classList.add("hide");
    home.classList.add("hide");
    questionElement.classList.remove("hide")
    nextButton.classList.remove("hide");

    setAvailableQuestions();
    newQuestion();
    startTimer();
}


