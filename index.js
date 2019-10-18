let Word = require("./assets/scripts/Word");
let inquirer = require("inquirer");

// * Word Array of selections
let wordBank = [
    "Testing", 
    "Coding",
    "Node JS",
    "Constructor",
    "Callback",
    "Function",
    "Promise",
    "Javascript",
    "Prototype"
];

let word, guesses;
let divider = "\n------------------------------\n";

start();

function start() {
    word = wordSelect();
    guesses = 3;

    console.log(divider);

    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play a word guessing game?",
            choices: ["Yes", "No"],
            name: "toPlay"
        }
    ]).then( answer => {
        let choice = answer.toPlay;
        //console.log(choice);

        if(choice==="Yes") {
            word.toString();
            prompter()
        }  else {
            console.log(divider + "Exiting game." + divider);
        }
        
    }).catch(function (err) {
        console.log(err);
    });
}

//randomly selects a word and uses the Word constructor to store it
function wordSelect() {
    // Select a word
    //Math.floor(Math.random() * (max - min) + min)
    let rnd = Math.floor(Math.random() * wordBank.length);

    let word = wordBank[rnd].toLowerCase();
    // let word = "node js"; // for testing
    //console.log(word);
    
    let result = new Word(word);
    // store the word
    return result;
}


// * prompts the user for each guess and keep track of the user's remaining guesses
function prompter() {
    console.log(" ");
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "guess"
        }
    ])
    .then(answer => {
        let guess = answer.guess;
        //console.log(guess);

        // * Setting up a way to exit during testing
        guess === "," ?
            console.log(divider + "escaping" + divider) : 
            runGame(guess);

    }).catch(function (err) {
        console.log(err);
    });
}

function runGame(guess) {
    //console.log("running game");

    let isRight = word.checker(guess);

    // * Checking if we're done
    let isDone = true,
        wordArr = word.wordArr;
    for(let i = 0; i < wordArr.length; i++ ){
        // * If there's a single false
        if(!wordArr[i].guessed) {
            //console.log(wordArr[i].guessed);
            isDone = false; // * we are not done;
            break;
        }
        //console.log("Are we done? " + isDone);
    }

    if(isDone) {
        //console.log("Are we done? " + isDone);
        start();
    } else {
        /** Tracking guesses left */
        if(!isRight) {
            guesses--;
            console.log("\nGuesses left: " + guesses);

            if (guesses <= 0) {
                console.log("\nWe're out of guesses :(" + divider);
                start();
            } 
        };
        //console.log("We are not done, prompting");
        prompter();
    }
    
}

function test() {
    // console.log("\n---------------\n");
    //console.log(word);
    // console.log("\n---------------\n");

    //console.log(word.word);

    if(!word.checker("m")) {
        let isDone = true,
            wordArr = word.word;

        for(let i = 0; i < wordArr.length; i++ ){
            // * If there's a single false
            if(!wordArr[i].guessed) {
                console.log(wordArr[i].guessed);
                isDone = false;
                break;
            }
            
        }
        //console.log("Are we done? " + isDone);

        if(isDone === true) {

        }
    };
}

//test();