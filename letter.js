function Letter(word) {
	this.word = word;
	this.letterArr = [];
	this.blankWord = [];
};

Letter.prototype.displayBlankWord = function() {
	for (let i = 0; i < this.word.length; i++) {
		this.blankWord[i] = "_ "
	};
};

Letter.prototype.guessedLetters = function(lettersAlreadyUsed) {
	this.letterArr.push(lettersAlreadyUsed);
	console.log(`Letters Used: ${this.letterArr} \n`);


	for (let i = 0; i < this.word.length; i++) {
		if (lettersAlreadyUsed === this.word.charAt(i)) {
			this.blankWord[i] = lettersAlreadyUsed;
		};
	};
	console.log(`${this.blankWord} \n`);
}

Letter.prototype.wordProgression = function() {
	let wordProgression = "";

	for(let i = 0; i < this.blankWord.length; i++) {
		wordProgression = wordProgression + this.blankWord[i];
	};
	return wordProgression;
}

module.exports = Letter;