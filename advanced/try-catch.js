const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25;
    } else {
        throw Error('Argument must be a number'); // need this line to get error for catch below
    }
};

// boilerplate try catch
try {
    const result = getTip('e');
    console.log(result);
} catch (e) {
    console.log('catch block is running');
};

