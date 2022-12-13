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

function cutFruitPieces(fruit) {
    return fruit*4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges!!!`;
    return juice;
}

const describePopulation = (country, population) => {
    let percentage = percentageOfWorld1(population)
    return `${country} has ${population} million people which is about ${percentage}% of the worlds population!!!`
}

console.log(describePopulation('USA', 790));

function cl(n) {
    console.log(n);
}

const friends = ['Mike', 'Peter', 'Steve', 'Jim'];
cl(friends);
cl(friends[1])
cl(friends.length)

friends[2] = 'Jay';
cl(friends)

const firstName = "Preston"
const preston = [firstName, 'Button', (2022 - 2001), 'student', friends];
cl(preston)

const years = [1990, 1967, 2002, 2010, 2018];
const ages = []

const populations = [10, 20, 30, 40];

populations.length === 4 ? cl(true) : cl(false)

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]

cl(percentages);

friends.push('sallie');
cl(friends);

friends.unshift('Jon');
cl(friends);

friends.pop();
cl(friends);

cl(friends.shift());
cl(friends);

cl(friends.indexOf('Peter'))

cl(friends.includes('Peter'));

