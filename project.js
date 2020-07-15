//BUTTONS
const newGame = document.querySelector("#new-game");
const truthy = document.querySelector("#true-button");
//Register if answer is correct
const falsey = document.querySelector("#false-button")
//Register if answer is correct
const next = document.querySelector("#next");

//QUESTIONS
const queries = [
	{
		question: 'The currency of France is the Franc',
		answers: [
			{ text: 'True!', correct: false },
			{ text: 'False!', correct: true },
		],
	},

	{
		question:
			'Japan and China did not sign a peace treaty after World War Two, and so are technically still at war',
		answers: [
			{ text: 'True!', correct: true },
			{ text: 'False!', correct: false },
		],
	},
	{
		question:
			'The can-opener was not invented until over 45 years after the tin can',
		answers: [
			{ text: 'True!', correct: true },
			{ text: 'False!', correct: false },
		],
	},
	{
		question: 'As of the year 2020 there is a Mcdonalds franchise on every continent',
		answers: [
			{ text: 'True!', correct: false },
			{ text: 'False!', correct: true },
		],
	},
	{
		question: 'Sydney is the capital city of Australia',
		answers: [
			{ text: 'True!', correct: false },
			{ text: 'False!', correct: true },
		],
	},
	{
		question:
			'In Alabama it is illegal to throw confetti or spray silly string',
		answers: [
			{ text: 'True!', correct: true },
			{ text: 'False!', correct: false },
		],
	},
	{
		question:
			'In the UK it is illegal to operate a cow while under the influence',
		answers: [
			{ text: 'True!', correct: true },
			{ text: 'False!', correct: false },
		],
	},
	{
		question: 'In Japan it is illegal to be clinically obese',
		answers: [
			{ text: 'True!', correct: true },
			{ text: 'False!', correct: false },
		],
	},
	{
		question:
			'In California it is illegal to wear cowboy boots unless you own at least two cows',
		answers: [
			{ text: 'True!', correct: true },
			{ text: 'False!', correct: false },
		],
	},
	{
		question: "In France it is illegal to name your pig,'Napoleon'",
		answers: [
        {text: "True!", correct: false}, 
        {text: "False!", correct: true}
    ]
    }
];
const queryElement = document.querySelector(".query");
const buttonZoneElement = document.querySelector(".button-zone")
let randomQuestions
let currentQuestion
//EVENT LISTENERS
newGame.addEventListener("click", newQuestion());
next.addEventListener("click", () => { 
    currentQuestion++
    newQuestion()
});



//FUNCTIONS
function newQuestion() {
    randomQuestions = queries.sort(() => Math.random() - .5)
    currentQuestion = 0
    displayQuestion(randomQuestions[currentQuestion])
}

function displayQuestion(question) {
   queryElement.innerText = question.question
}

