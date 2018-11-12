// callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2);
        } else {
            callback('Number must be provided', undefined);
        }
    }, 2000);
};

getDataCallback( 2, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// promise, it expects a function
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my success data: ${data}`);
        // reject('This is promise error');
        // reject('This is promise error');
    }, 2000);
});

const myPromise = getDataPromise(123);

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

//another example 
const getDataPromiseTwo = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 2000);
});

getDataPromiseTwo(2).then((data) => {
    getDataPromiseTwo(data).then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});

getDataPromiseTwo('2').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


// const getCountry = (code) => new Promise((resolve, reject) => {
//     //http
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             // const data = JSON.parse(e.target.response);
//             // const dataTwo = data.find((country) => country.alpha2Code === countryCode);

//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((alpha) => alpha.alpha2Code === code);
//             resolve(country);
//         } else if (e.target.readyState === 4) {
//             reject('The country was not found');
//         }
//     });

//     request.open('GET', 'https://restcountries.eu/rest/v2/all');
//     request.send();


// });
// const alphaCode = 'CA';
// getCountry(alphaCode).then((ca) => {
//     console.log(`Country: ${ca.name}`);
// }, (err) => {
//     console.log(`Error: ${err}`);
// });

// //example call to ipinfo
// const geoLocation = () => {
//     return fetch('https://ipinfo.io/json?token=ee2efac384b0c6').then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Something went wrong!!');
//         }
//     }).then((data) => {
//         return data;
//     });
// };

// geoLocation().then((data) => {
//     console.log(`You are currently in ${data.city} ${data.region} ${data.country}`);
// }).catch((err) => console.log(err));

//get country with fetch

// const getAnotherCountry = (countryCode) => {
//     return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Country not found');
//         }
//     }).then((data) => country = data.find((data) => data.alpha2Code === countryCode));
// };

// getAnotherCountry('CA').then((data) => {
//     console.log(data.name);
// }).catch((err) => {
//     console.log(err);
// });