var letters = require("./letters.js")
//word constructor function
var word = function word() {
    console.log("hi");
    //array to hold the empty spaces
    this.underScore = [];
    //add underscores to replace letters
    this.showUnderScore = function showUnderScore() {
        for (var i = 0; i < this.wordToUse.length; i++) {
            this.underScore.push("_");
        }
    };
    //display the letter in place of underscores
    this.showLetter = function(letter) {
        for (var h = 0; h < this.wordToUse.length; h++) {
            if (letter === this.wordToUse[h]) {
                //this will also need to include the underscore array in some way
                letters.displayLetter(letter);
                console.log(letters.displayLetter(letter));
            }
        }
    };
}

module.exports = word;
