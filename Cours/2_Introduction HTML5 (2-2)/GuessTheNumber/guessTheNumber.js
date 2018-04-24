var numberToGuess;
var numberOfRounds = 1;
var numbersFromUser = [];
var start = false;

/**
 * This function initialize our game. It will set/reset all our variables
 */
function startGame(){
	//We define a random number between 0 and 100
	numberToGuess = Math.round(Math.random() * 100.0);
	//We set the number of rounds to 1
	numberOfRounds = 1;
	//we initialize the array of numbers suggested by the player
	numbersFromUser = [];
	//we set the boolean of the game has true
	start = true;
}

/**
 * This function allow user to guess a number
 */
function guess(value){
	//if the game if start we guess the number, else we invite the game to launch the game
	if(start){
		//check if user has not play its max number of round
		if(numberOfRounds <= 10){
			//we check the user's number
			checkValue(value);
			//we increment the round
			numberOfRounds ++;
		}else{
			//The player has not found the number in 10 round, the game is over
			console.log("You have past the 10 rounds.\nGame Over");
		}
	}else{
		//The game is over, we invite the player to replay
		console.log("The game hasn't start yet or is over, use start() to play");
	}
}

/**
 * This function check if the user's guess is equals, greater or less than the random number
 */
function checkValue(value){
	if(value === numberToGuess){
		//We congratulate the user
		console.log("Congratulation, you have guess the number, It was : "+numberToGuess);
		//the stop the game
		start = false;
	}else{
		if(value > numberToGuess){
			//we indicate to the user its number to greater than the number to guess
			console.log("Sorry your number is greater than the number to guess");
		}else{
			//we indicate to the user its number to lesser than the number to guess
			console.log("Sorry your number is lesser than the number to guess");
		}
		//We add the number to the array of guesses
		numbersFromUser.push(value);
		//we say to the user which numbers he has already suggested
		console.log("You have already suggested the following numbers : ");
		for(var i=0; i<numbersFromUser.length; i++){
			var previous = numbersFromUser[i];
			console.log("\t"+previous);
		}
	}
}
