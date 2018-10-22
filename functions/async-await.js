// const getDataPromiseTwo = (num) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
//     }, 2000);
// });

// const processData = async () => {
//     let data = await getDataPromiseTwo('abc');
//     data = await getDataPromiseTwo(data);
//     return data;
// };

// processData().then((data) => {
//     console.log("data", data, 'Fuck');
// }).catch((err) => {
//     console.log("Error", err);
// });

// const testAwait = async () => {
//     const data = await fetch('http://restcountries.eu/rest/v2/all');
//     console.log(data);
// };

// //done in other file
// const getLocation = async () => {
//     const response = await fetch('https://ipinfo.io/json?token=ee2efac384b0c6');
//     if (response.status === 200) {
//         const data = await response.json();
//         return data;
//     } else {
//         throw new Error('Country not found');
//     }
// };

// const getCountry = async (countryCode) => {
//     const response = await fetch('https://restcountries.eu/rest/v2/all');
//     if (response.status === 200) {
//         const data = await response.json();
//         return data.find((list) => list.alpha2Code === countryCode);
//     } else {
//         throw new Error('Country not found');
//     };
// };

// getCurrentCountry = async () => {
//     const location = await getLocation();
//     const country = await getCountry(location.country);

//     return country;
// }

// getCurrentCountry();