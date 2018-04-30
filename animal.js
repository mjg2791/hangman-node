function Word() {
	this.word = "";
	this.wordBankArr = ["panda", "bat", "snake", "rabbit", "dog", "elephant", "rhino", "tutle", "dolphin"];
}

Word.prototype.selectRandomWord = function() {
	this.word = this.wordBankArr[Math.floor(Math.random() * this.wordBankArr.length)];
};

module.exports = Word;