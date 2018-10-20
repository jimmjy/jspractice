//closure example one allows printMessage to keep the lexical scope of message even though it gets called outside of the myFunction technically
const myFunction = () => {
    const message = 'This is a message';
    const printMessage = () => {
        console.log(message);
    }

    return printMessage;
};

const myPrintMessage = myFunction();
myPrintMessage();


// second example with a variable that is only accessible with returned methods(object)
const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count;
        }
    };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.getCount());

//Adder
const createAdder = (a) => {
    return (b) => {
        return a + b;
    };
};

//curried version
const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

//non curried
const add = (a, b) => a + b;

// simple tipper
const createTipper = (tip) => {
    tip = tip / 100;
    return (billAmount) => {
        return billAmount * tip;
    };
};

const tip = createTipper(15);
console.log(tip(500));