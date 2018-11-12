let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}; 

const getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//challenge
// Create function, take fahrenheit in  - return object with all three

const tempConvert = function (temp) {
    return {
        fahrenheit: temp,
        celcius: (temp - 32) * 5 / 9,
        kelvin: (temp + 459.67) * 5 / 9
    };
};

console.log(tempConvert(80));