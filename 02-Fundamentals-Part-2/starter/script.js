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

// function calcAge1(birthYear) {
//     return (2022 - birthYear);
// }

// console.log(calcAge1(2001));

// const calcAge2 = function(birthYear) {
//     return 2022 - birthYear;
// }

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
const prestonArray = [firstName, 'Button', (2022 - 2001), 'student', friends];
cl(prestonArray)

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

const neighbors = ['Canada', 'Mexico'];
neighbors.push('Utopia');
neighbors.pop();

if(neighbors.includes('Germany') === false) console.log(`probably not a central european country`);

neighbors[neighbors.indexOf('Canada')] = 'Communist State of Canada';
cl(neighbors);

const myCountry = {
    country: 'USA',
    capital: 'DC',
    language: 'English',
    population: '330',
    neighbors: ['Canada', 'Mexico'],

    describe: function() {
        return `${this.country}'s capital is ${this.capital}. It's ${this.population} million people speak 
        ${this.language} and it has ${this.neighbors.length} neighbors, ${this.neighbors[0]} and ${this.neighbors[1]}`;
    },

    checkIsland: function() {
        this.neighbors.length === 0 ? this.isIsland = true : this.isIsland = false;
        return this.isIsland;
    }
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());


// const input = prompt(`What do you want to know about Preston? Choose between firstName or lastName`)
// cl(prestonObject[input]);

cl(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} 
speaking people and ${myCountry.neighbors.length} neighboring countries, and its 
capital is ${myCountry.capital}`);

myCountry.population += 2;
cl(myCountry.population);
cl(myCountry.population);

myCountry['population'] -= 2;
cl(myCountry.population);

const prestonObject = {
    firstName: 'Preston',
    lastName: 'Button',
    birthYear: 2001,
    job: 'student',
    friends: ['Mike', 'Pete', 'Steven'],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return(`${this.firstName} is a ${this.calcAge()} year-old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`);
    }
}

prestonObject.calcAge();
console.log(prestonObject.age);

console.log(prestonObject.getSummary());

// for(let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep}` );
// }

// for(let vote = 1; vote <= 50; vote++) {
//     console.log(`Voter number ${vote} is voting`);
// }
const types = [];

console.log(`--ONLY STRING--`)
for(let i = 0; i < prestonArray.length; i++){
    if(typeof prestonArray[i] != 'string') continue;

    console.log(prestonArray[i], typeof prestonArray[i]);
    types.push(typeof prestonArray[i]);
}

const newYears = [1991, 2007, 1969, 2020];
const newAges = [];

for(let i = 0; i < newYears.length; i++) {
    newAges.push(calcAge3(newYears[i]));
}

console.log(newAges);

console.log(`--Break With Number--`)
for(let i = 0; i < prestonArray.length; i++){
    if(typeof prestonArray[i] === 'number') break;

    console.log(prestonArray[i], typeof prestonArray[i]);
    types.push(typeof prestonArray[i]);
}

// for(let i = prestonArray.length - 1; i >= 0; i--) {
//     console.log()
// }