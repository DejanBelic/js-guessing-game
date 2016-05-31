// Global Variables
var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

// game function
function start_game() {
	// random number from 1 - 100
	var random_number = Math.random() * 100;
	var random_number_integer = Math.floor(random_number);
	target = random_number_integer + 1;
				// user input 
	while (!finished) {
		guess_input_text = prompt("I am thinking of a number between 1  to 100 . \n" + "Can you guess number that im thinking of?");
		guess_input = parseInt(guess_input_text);
		guesses += 1;
		finished = check_guess();
	}			// checking inputs
	function check_guess() {
		if (isNaN(guess_input)) {
			alert("Please enter a number");
			return false;
		}
		if ((guess_input < 1) || (guess_input > 100)) {
			alert("Please enter number between 1 and 100");
			return false;
		}
		if (guess_input > target) {
			alert("Your number is too large!");
			return false;
		}
		if (guess_input < target) {
			alert("Your number is too small!");
			return false;
		}
		alert("You got it number was " + target + "it took you " + guesses + " to find a number ");
		return true;
	}
}