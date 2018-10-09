
// primitive value: string, number, boolean, null, undefined

//object: myObject --> Object.prototype --> null
    const product = new Object({
        name: 'The War of Art'
    });
    
    Object.prototype.someNewMethod = () => 'This is the new function';
    
    // hasOwnProperty
    
    console.log(product.someNewMethod());
    console.log(product);
    console.log('-------------------------------');

//Array: myArray --> Array.prototype --> Object.prototype --> null

const team = ['Luke', 'Madison'];
console.log(team);
console.log(team.hasOwnProperty(length));

//function: function --> Function.prototype --> Object.prototype --> null
const getScore = () => 1;

console.log(getScore);

//String: myString --> String.prototype --> Object.prototype --> null

const newProduct = 'Computer';
console.log(newProduct);

const otherProduct = new String('Phone');
console.log(otherProduct);