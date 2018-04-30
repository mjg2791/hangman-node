const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');

let guessesRemaining = 8; 

let userWord = new Word();
userWord.selectRandomWord();

let letters = new Letter(userWord.word);
letters.displayBlankWord();


function game() {
	console.log("Welcome to Animal Hangman!");
	if (guessesRemaining > 0) {
		inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter to guess what animal it is",
				name: "guessLetter"
			}
		]).then(function(inquirerResponse) {
			letters.guessedLetters(inquirerResponse.guessLetter);

			let wordProgression = letters.wordProgression();

			if (userWord.word === wordProgression) {
				console.log("Correct!");
				return;
			} else {
				guessesRemaining--;
				console.log(`Remaining Guesses: ${guessesRemaining}`);
				game();
			}
		})
	} else {
		console.log(`Oh now! The animal was ${userWord.word}.`);
	};
};

game();