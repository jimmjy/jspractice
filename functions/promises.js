// callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, "this is dummy data");
        callback(undefined, "this is dummy data");
    }, 2000);
};

getDataCallback((err, data) => {
    if (err) {
        //do one thing
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