const product = new Object({
    name: 'The War of Art'
});

Object.prototype.someNewMethod = () => 'This is the new function';

// hasOwnProperty

console.log(product.someNewMethod());
console.log(product);