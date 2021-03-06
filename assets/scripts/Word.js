let Letter = require("./Letter")

let Word = function(word) {
    // * An array of new letter objects representing the letters of the underlying word
    this.wordArr = addLetters(word);

    // // ToDo: function that returns a string representing the word
    // // ToDo: this function should call the function on each letter object from Letter that displays the character or an underscore and concatenate those together (function 1 in letter.js)
    this.toString = function() {
        //console.log("stringing");
        let str = "";
        for(let i = 0; i < this.wordArr.length; i++) {
            str += this.wordArr[i].results() + " ";
            //console.log(`${this.wordArr[i].character}: ${this.wordArr[i].guessed}`);
        }
        console.log("\n" + str);

        //return str;
    }

    // // ToDo: function that takes a character as an argument and calls the guess function in each letter object (function 2 in letter.js)
    this.checker = function(guess) {
        //console.log("In the checker");
        //console.log(guess);
        // * Check if any are right
        let isRight = false;
        //console.log(isRight);

        // * Check all the letters
        for(let i = 0; i < this.wordArr.length; i++) {
            let arr = this.wordArr[i];
            //console.log(arr);

            arr.check(guess);
            //console.log("\t" + wordVar.guessed);
            if(arr.guessed && arr.character === guess) {
                isRight = true
            };
        }
        
        console.log("\n" + (isRight ? "Correct!" : "Incorrect!"));

        this.toString();

        //console.log(isRight);
        return isRight;
    }
}

function addLetters(word) {
    //console.log("correct length " + word.length);
    let arr = [];

    for(let i = 0; i < word.length; i++) {
        let isSpace = (word[i] === " ");
        let letter = new Letter(word[i]);

        if(isSpace) {
            letter.guessed = true;
            console.log(letter.guessed);
        }

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