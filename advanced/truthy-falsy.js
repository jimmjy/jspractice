const products = [];
const product = products[0];

// truthy - values that resolve to true in a boolean context
// falsy - values that resolve to false in a boolean context
// falsy values (easier to define these and know that the rest is true) 
// false, 0, empty string, null, undefinded, NaN
// empty arrays and objects will always be true
// these are typically used to see if something exists

if (product) {
    console.log('Product found');
} else {
    console.log('Product not found');
};