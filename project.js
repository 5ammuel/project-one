//BUTTONS
const newGame = document.querySelector("#new-game");
const truthy = document.querySelector("#true-button");
const falsey = document.querySelector("#false-button");
const next = document.querySelector("#next");

//QUESTIONS
let questions = [
[1,"The currency of France is the Franc","false"],
[2,"Japan and China did not sign a peace treaty after World War Two, and so are technically still at war", "true"],
[3,"The can-opener was not invented until over 45 years after the tin can", "true"],
[4,"As of the year 2020 there is a Mcdonalds franchise on every continent", "false"],
[5,"Sydney is the capital city of Australia", "false"],
[6,"In Alabama it is illegal to throw confetti or spray silly string", "true"],
[7,"In the UK it is illegal to operate a cow while under the influence", "true"],
[8,"In Japan it is illegal to be clinically obese", "true"],
[9,"In California it is illegal to wear cowboy boots unless you own at least two cows", "true"],
[10,"In France it is illegal to name your pig, 'Napoleon'", "false"]
];
//VARIABLES
const queryElement = document.querySelector(".query");
const buttonZoneElement = document.querySelector(".button-zone")
const answerElement = document.querySelector(".answer-zone")
let feedback = "true";

//EVENT LISTENERS
newGame.addEventListener("mousedown", () => {
	{location.reload()}
});
next.addEventListener("click", () => { 
    currentQuestion++
    newQuestion()
});
newGame.addEventListener("mouseup", newQuestion())
truthy.addEventListener("click", superTruth());
falsey.addEventListener('click', superFalse());

// for (let i = 0; i < questions.length -5; i++) {

// if (feedback === questions[i][2]){
// 	document.write("You got it right!");
// }else{
// 	document.write("Oops!");
// }

// }
//FUNCTIONS
function superTruth() {
	feedback = "true"
};
function superFalse() {
	feedback = "false"
};
function newQuestion() {
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    displayQuestion(randomQuestions[currentQuestion])
};

function displayQuestion(question) {
   queryElement.innerText = questions[0][1]
};
function displayAnswers(answer) {
	if (feedback === questions[i][2]) {
		answerElement.innerText ='You got it right!';
	} else {
		answerElement.innertext ='Oops!';
	}};