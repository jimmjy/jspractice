let num = 103.941;

//specify decimal places
console.log(num.toFixed(2));

//round
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// between 5 - 20
let max = 20;
let min = 5;
let random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);

//challenge
// 1 - 5 - true if correct - false if not correct

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let rand = Math.floor(Math.random() * (max - min +1) + min);
    console.log(rand);
    return guess === rand;
};

console.log(makeGuess(3));
