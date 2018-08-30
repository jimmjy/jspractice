let name = ' Jay Fink ';

// Length property
console.log(name.length);

// Convert to uppercase method
console.log(name.toUpperCase());

// Convert to lowercase
console.log(name.toLowerCase());

// includes method
let password = 'abc123password098';
console.log(password.includes('password'));

//trim (cust out extra space on front and back)
console.log(name.trim(), name.blink());

// challenge area
// isValidPassword
// only return true if length > 8 - and it does not contain the word password

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true;
    }
    return false;
};

let passwordOne = 'jlajks';
let passwordTwo = 'lksafjldsjldjlksda';
let passwordThree = 'kljsdjldpasswordjlksd';

console.log(isValidPassword(passwordOne));
console.log(isValidPassword(passwordTwo));
console.log(isValidPassword(passwordThree));