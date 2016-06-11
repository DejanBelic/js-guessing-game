// Global Variables
var target;
var guessInputText;
var guessInput;
var finished = false;
var guesses = 0;

// Game Function
function startGame() {
	// Random Number From 1 - 100
	var randomNumber = Math.random() * 100;
	var randomNumberInteger = Math.floor(randomNumber);
	target = randomNumberInteger + 1;
				// User Input 
	while (!finished) {
		guessInputText = prompt("I am thinking of a number between 1  to 100 . \n" + "Can you guess number that im thinking of?");
		guessInput = parseInt(guessInputText);
		guesses += 1;
		finished = checkGuess();
	}			// Checking Inputs
	function checkGuess() {
		if (isNaN(guessInput)) {
			alert("Please enter a number");
			return false;
		}
		if ((guessInput < 1) || (guessInput > 100)) {
			alert("Please enter number between 1 and 100");
			return false;
		}
		if (guessInput > target) {
			alert("Your number is too large!");
			return false;
		}
		if (guessInput < target) {
			alert("Your number is too small!");
			return false;
		}
		alert("You got it number was " + target + "it took you " + guesses + " to find a number ");
		return true;
	}
}
