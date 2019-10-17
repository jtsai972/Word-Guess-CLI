let Letter = require("./Letter")

let Word = function(correct, guess) {
    // ToDo: An array of new letter objects representing the letters of the underlying word
    let correctWord = [];

    // ToDo: function that returns a string representing the word
    // ToDo: this function should call the function on each letter object from Letter that displays the character or an underscore and concatenate those together (function 1 in letter.js)
    function toString() {
        let str = "";
        for(let i = 0; i < correctWord.length-1; i++) {
            str +=checker(guess);
        }
        
        return str;
    }

    // ToDo: function that takes a character as an argument and calls the guess function in each letter object (function 2 in letter.js)
    function checker(guess) {
        for(let i = 0; i < correctWord.length; i++) {
            Letter.check(guess, correctWord[i]);
        }
    }

    // ? maybe a hashtable here?
}

module.exports = Word;