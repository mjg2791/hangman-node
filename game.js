const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./animal.js');

let guessesRemaining = 8; 

let userWord = new Word();
userWord.selectRandomWord();

let letters = new Letter(userWord.word);
letters.displayBlankWord();

function game() {
	console.log("Animal Hangman!");
	if (guessesRemaining > 0) {
		inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter!",
				name: "guessLetter"
			}
		]).then(function(inquirerResponse) {
			letters.guessedLetters(inquirerResponse.guessLetter);

			let wordProgression = letters.wordProgression();

			if (userWord.word === wordProgression) {
				console.log("Great!");
				return;
			} else {
				guessesRemaining--;
				console.log(`Remaining Guesses: ${guessesRemaining}`);
				game();
			}
		})
	} else {
		console.log(`Oh no! The correct word was ${userWord.word}.`);
	};
};

game();