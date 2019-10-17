let Word = require("./Word");

// ToDo: Word Array of selections
// * Word Array
let wordBank = [];

//randomly selects a word and uses the Word constructor to store it

function wordSelect() {
    // Select a word
    //Math.floor(Math.random() * (max - min) + min)
    let rnd = Math.floor(Math.random() * wordBank.length);

    // store the word
    word = wordBank[rnd];
}


//prompts the user for each guess and keep track of the user's remaining guesses
function prompter() {
    /** Think we can put a guess counter here? */
    let guesses = 9;
    
    // * Make it loop for 9 guesses;
    while(guesses > 0) {
        console.log(`Guesses left: ${guesses}`)
        /** Prompter */
        inquirer.prompt([
            {
                type: "input",
                message: "guess a letter",
                name: "guess"
            }
        ])
        .then(answers => {
            let guess = answers.guess;
            console.log(guess);

            Word(word, guess);

            /** Tracking guesses left */
            guesses--; 
        });
    }
    
}