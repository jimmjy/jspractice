// function - input, code, output

//convert fahrenheit to celcius

let fToC = function(temp) {
    let conversion = ((temp) - 32) * .5556;
    return conversion;
}

let value = fToC(68);
console.log(value);

