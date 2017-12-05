var letters = require("./letters.js");
var letterChoice;
var count = 5;
var inquirer = require("inquirer");
var word = require("./word.js");
var randWord;

//Get letter input
function typeLetter() {
    inquirer.prompt([{
            type: "input",
            name: "guess",
            message: "Type a letter to play!"
        },

    ]).then(function(response) {
        //set letter variable to pay through letter constructor
        var letter = response.guess;
        //each time a letter is typed reduce count by one
        count--;
        //if guesses are still available, showLetter is going to be a function
        if ("showLetter" && count >= 5) {
            typeLetter();
        }

        else if (word.showLetter) {
            newGame();
        }
    });
}
//start game constructor
var startHangman = function startHangman() {
    //randomize word choice based on word bank
    this.randomWord = function() {
        var wordList = ["tree", "table", "couch", "chair"];
        randWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(randWord);
    };
    //run random word function
    this.randomWord();
    //pull in word constructor to display array of underscores based on length of selected work **NOT WORKING**
    this.displayWord = word();

}

function newGame() {
    if (count <= 0) {
        inquirer.prompt([{
            confirm: "confirm",
            message: "Would you like to play again?"
        }]).then(function(response) {
            if (response === "y") {
                startHangman();
            }
        })
    }
}
startHangman();
typeLetter();


module.exports = startHangman;
