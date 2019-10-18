let Letter = function(character) {
    // console.log("-------------------");
    // console.log(`Inputs: ${guess} ${answer}`);

    // * str, Should store the underlying character for a letter
    this.character = character;
    // * bool, should store whether this letter has been guessed yet
    this.guessed = false; 

    // * return the character if the letter has been guessed or an underscore if the letter has not been guessed 
    this.results = function() {
        return this.guessed ? this.character : "_"; 
    }

    // * takes a character as an argument and checks it against the underlying character to update the bool to if it's true if it was guessed correctly 
    this.check = function(guess) {
        //console.log("Running check");
        if(guess === this.character) {
            this.guessed = true;
        }
        //console.log(`Guessed right? ${ this.guessed }`);

        //console.log(this.guessed);
    }
}


module.exports = Letter;

function test() {
    let tester = new Letter("e");
    console.log(tester);

    tester.check("g");
    console.log(tester.guessed);

    console.log(tester.results());
}

//test();