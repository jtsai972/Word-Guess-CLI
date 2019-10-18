let Letter = require("./Letter")

let Word = function(word) {
    // * An array of new letter objects representing the letters of the underlying word
    this.wordArr = addLetters(word);

    // ToDo: function that returns a string representing the word
    // ToDo: this function should call the function on each letter object from Letter that displays the character or an underscore and concatenate those together (function 1 in letter.js)
    this.toString = function() {
        let str = "";
        for(let i = 0; i < this.wordArr.length; i++) {
            str += this.wordArr[i].results() + " ";
            
        }
        console.log(str);
    }

    // ToDo: function that takes a character as an argument and calls the guess function in each letter object (function 2 in letter.js)
    this.checker = function(guess) {
        console.log(guess);
        // * Check if any are right
        let isRight = false;

        // * Check all the letters
        for(let i = 0; i < this.wordArr.length; i++) {

            this.wordArr[i].check(guess);
            //console.log("\t" + wordVar.guessed);

            if(this.wordArr[i].guessed) {isRight = true};
        }
        //console.log(results);
        console.log(isRight);
        return isRight;
    }
}

function addLetters(word) {
    //console.log("correct length " + word.length);
    let arr = [];

    for(let i = 0; i < word.length; i++) {
        isSpace = (word[i] === " ");
        let letter = isSpace ? " " : new Letter(word[i]);

        arr.push(letter);
    }

    return arr;
}

module.exports = Word;


function test() {
    console.log("Adding Hello");
    let word = new Word("Hello");

    console.log("\n---------------\n");

    word.checker("g");

    console.log("\n---------------\n");

    console.log(word.toString());

    console.log("\n---------------\n");

    console.log("seeing letters");
    //console.log(word.word);
}

//test();