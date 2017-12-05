var index = require("./index.js");
var word = require("./word.js")
//function to see if the letter input is in the word
function letters() {
    //don't display letter until it is checked
    word.showLetter = false;
    this.displayLetter = function(letter) {
        //check the entire word
        for (var i = 0; i < word.wordChoice.underScore.length; i++) {
            //if letter is in the word then show it
            if (letter === word.wordChoice.wordToUse[i]) {
                word.showLetter = true;
            }
        }
    };
}

module.exports = letters;
