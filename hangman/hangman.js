const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.guessedLetters = [];
}

Hangman.prototype.makeGuess = function (character) {
    character = character.toLowerCase();

    if (!this.guessedLetters.includes(character)) {
        this.guessedLetters.push(character);

        if(!this.word.includes(character)) {
            this.guesses -= 1;
        }
    } 
};

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        };
    });

    return puzzle;
};

const game1 = new Hangman('cat', 2);

// Guess c, t, z
// Print remaining guesses (should be 1)
const game2 = new Hangman('New Jersey', 4);
// Guess w, 
game2.getPuzzle();

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    console.log(game1.getPuzzle());
    console.log(game1.guesses);
});