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

Hangman.prototype.render = function (puzzleResult) {
    const puzzle = document.getElementById('puzzle');
    puzzle.textContent = puzzleResult;

    const guesses = document.getElementById('guesses');
    guesses.textContent = `You have ${this.guesses} guesses left`;
}

