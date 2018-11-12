//used to store related pieces of information
// Object literal

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

//challenge area
// name, age, location
// generate string name is age and lives in city
// increase age by one and print again

let person = {
    name: 'James',
    age: 36,
    location: 'Toronto'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

