const name = 'Jen';
console.log(name);

class Hangman {
    myMethod() {
        return 'Testing';
    };

    myNewMethod() {
        return 'Hello';
    };
};

const hangman = new Hangman();
console.log(hangman.myMethod());
console.log(hangman.myNewMethod());

let t = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await request.json;

    return data;
}

console.log(t());

