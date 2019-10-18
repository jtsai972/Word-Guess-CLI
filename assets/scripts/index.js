let Word = require("./Word");
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

start();

function start() {
    word = wordSelect();
    guesses = 3;

    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play a word guessing game?",
            choices: ["Yes", "No"],
            name: "toPlay"
        }
    ]).then( answer => {
        let choice = answer.toPlay;
        console.log(choice);

        choice==="Yes" ? prompter() : console.log("\nExiting game.");
        
    }).catch(function (err) {
        console.log(err);
    });
}

//randomly selects a word and uses the Word constructor to store it
function wordSelect() {
    // Select a word
    //Math.floor(Math.random() * (max - min) + min)
    let rnd = Math.floor(Math.random() * wordBank.length);

    let word = wordBank[rnd]
    console.log(word);
    
    let result = new Word(word);
    // store the word
    return result;
}


// * prompts the user for each guess and keep track of the user's remaining guesses
function prompter() {
    inquirer.prompt([
        {
            type: "input",
            message: "guess a letter",
            name: "guess"
        }
    ])
    .then(answer => {
        let guess = answer.guess;
        console.log(guess);

        runGame(guess);
    }).catch(function (err) {
        console.log(err);
    });

    // * Make it loop until 3 failed guesses or fully answered;
    // while(guesses > 0) {
    //     console.log(`Guesses left: ${guesses}`)
    //     /** Prompter */
        

            
        
    // }
    // start(); // start over again
}

function runGame(guess) {
    console.log("running game");

    word.checker(guess);

    //     // * Checking if we're done
    //     let isDone = true,
    //         wordArr = word.word;
    //     for(let i = 0; i < wordArr.length; i++ ){
    //         // * If there's a single false
    //         if(!wordArr[i].guessed) {
    //             //console.log(wordArr[i].guessed);
    //             isDone = false; // * we are not done;
    //             break;
    //         }
    //         //console.log("Are we done? " + isDone);
    //     }

        // if(isDone) {
        //     break;
        // } else {
        //     /** Tracking guesses left */
        //     if(!word.checker("m")) {
        //         guesses--;
        //     };
        // }
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