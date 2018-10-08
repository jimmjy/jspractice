const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('');
    this.guesse = guesses;
    this.guessedLetters = ['a', 'o'];
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        };
    });

    console.log(puzzle);
};

const game1 = new Hangman('cat', 3);
game1.getPuzzle();

const game2 = new Hangman('eat booger', 5);
game2.getPuzzle();

// console.log(game1);
// console.log(game2);