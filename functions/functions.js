//challenge
//a 25% tip on $40 dollers

let tip = function (percent, total) {
    let amount = (percent / 100) * total;
    return `The total tip amount at ${percent}% is: $${amount}`;
}

let totalTip = tip(25, 40);

console.log(totalTip);

