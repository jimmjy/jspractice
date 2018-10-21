
// making and HTTP request
const request = new XMLHttpRequest();

//detect when we get it the information and allows us to do something with it
request.addEventListener('readystatechange', (e) => {
    let p = document.getElementById('test');

    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = e.target.responseText;
        p.textContent = JSON.parse(data).puzzle;
        console.log(e.target);
    } else if (e.target.readyState == 4) {
        p.textContent = 'Error loading';
    }
});

// initialize request
//request.open(method (get), url)
request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3'); //get information
request.send(); //this sends off the request to initiate the process

const countryCode = "mx".toUpperCase();
const requestTwo = new XMLHttpRequest();

requestTwo.open('GET', 'http://restcountries.eu/rest/v2/all');
requestTwo.send();

requestTwo.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const list = JSON.parse(e.target.response);
        const country = list.find((country) => country.alpha2Code === countryCode);

        document.getElementById('test').textContent = country.name;
    } else {
        document.getElementById('test').textContent = 'Loading';
    };
});

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {

//     // http request
//     const request = new XMLHttpRequest();

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         } else if (e.target.readyState === 4) {
//             reject('Unable to find words for puzzle');
//         }
//     });
// });