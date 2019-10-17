let Letter = function(char, rightChar) {
    // * str, Should store the underlying character for a letter 
    let rightChar;

    // * bool, should store whether this letter has been guessed yet 
    let guessed;

    // * return the character if the letter has been guessed or an underscore if the letter has not been guessed 
    let results = (char, guessed) => { return guessed ? char : "_" }

    // * takes a character as an argument and checks it against the underlying character to update the bool to if it's true if it was guessed correctly 
    let check = (char, rightChar) => {
        guessed = char === rightChar ? true : false;
        console.log(guessed);

        let res = results(char, guessed);
        console.log(res);
    }

    // ? try using a hash table?
}

Letter("c","a");


// module.exports = Letter;