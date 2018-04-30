function Letter(word) {
	this.word = word;
	this.letterArr = [];
	this.blankWord = [];
};

//creating "displayBlankWord" method to replace letters in word with "_" character before they are guessed
Letter.prototype.displayBlankWord = function() {
	for (let i = 0; i < this.word.length; i++) {
		this.blankWord[i] = "_ "
	};
};

Letter.prototype.guessedLetters = function(lettersAlreadyUsed) {
	this.letterArr.push(lettersAlreadyUsed);
	console.log(`Letters Used: ${this.letterArr} \n`);

	//creating for loop that will run through which letters have been guessed
	for (let i = 0; i < this.word.length; i++) {
		//if letter guessed = letter in word, push that letter to display in the blankWord array
		if (lettersAlreadyUsed === this.word.charAt(i)) {
			this.blankWord[i] = lettersAlreadyUsed;
		};
	};
	console.log(`${this.blankWord} \n`);
}

//creating method to follow and show the progress of the word being guessed 
Letter.prototype.wordProgression = function() {
	let wordProgression = "";

	for(let i = 0; i < this.blankWord.length; i++) {
		wordProgression = wordProgression + this.blankWord[i];
	};
	return wordProgression;
}

module.exports = Letter;