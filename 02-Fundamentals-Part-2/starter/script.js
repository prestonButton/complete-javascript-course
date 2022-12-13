`use strict`;

function logger() {
    console.log(`My name is Preston`);
}

logger();


function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges!!!`;
    return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

console.log(fruitProcessor(3, 9));

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

console.log(describeCountry('USA', 328, 'DC'));