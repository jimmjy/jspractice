const game1 = new Hangman('cat', 2);

// Guess c, t, z
// Print remaining guesses (should be 1)
const game2 = new Hangman('New Jersey', 4);
// Guess w, 
game2.getPuzzle();

window.addEventListener('keypress', function (e) {
    document.getElementsByTagName('body').innerText = '';
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    game1.render(game1.getPuzzle());
});