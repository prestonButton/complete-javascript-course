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

function calcAge1(birthYear) {
    return (2022 - birthYear);
}

console.log(calcAge1(2001));

const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

// console.log(calcAge2(2002));

function percentageOfWorld1(population){
    return (population/79);
}

// console.log(percentageOfWorld1(1441));

const percentageOfWorld2 = function(population) {
    return (population/79);
}

// console.log(percentageOfWorld2(790));

const calcAge3 = birthYear => 2022 - birthYear;

// console.log(calcAge3(2001))

const ageToRetirement = birthYear => {
    const currentAge = 2022 - birthYear;
    return 65 - currentAge;
}

console.log(ageToRetirement(2001));

const percentageOfWorld3 = population => population/79;

console.log(percentageOfWorld3(790));