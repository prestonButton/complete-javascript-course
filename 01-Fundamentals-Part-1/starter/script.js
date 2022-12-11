let country = "United States";
let continent = "North America";
let population = 328.2;
console.log(country);

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English";

halfPopulation = population / 2;
console.log(population++);

console.log(population > 6);
console.log(population < 33);
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;

const firstName = 'Preston';
const job = 'student'
const birthYear = 2001;
const year = 2022;

const preston = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(preston)

const prestonNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;

console.log(prestonNew)

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

let age = 15;

if(age >= 18) {
    console.log(`${firstName} can get a license 🚗`)
}else{
    const yearsLeft = 18 - age;
    console.log(`${firstName} is too young. wait ${yearsLeft} more years and try again`)
}

let century;

if(birthYear >= 2000){
    century = 21;
}else{
    century = 20
}

console.log(century);

if(population > 33){
    console.log(`${country} population is above average`);
}else{
    let lessThan = 33 - population;
    console.log(`${country} population is ${lessThan} million below average`)
}

console.log(Boolean(0));
console.log(Boolean(7));

const money = 3;

if(money) {
    console.log(`Don't spend it all`);
}else{
    console.log(`Get a job`);
}


// age = 18;

// if( age === 18) console.log(`You just became an adult!`);

// const favorite = Number(prompt(`What is your favorite number?`));
// console.log(favorite);

// if(favorite === 23) console.log(`Cool, 23 is an amazing number`)

// let numNeighbors = Number(prompt(`How many neighbors does your country have?`));

// if(numNeighbors === 1){
//     console.log(`Only 1 border!`)
// }else if(numNeighbors > 1) {
//     console.log(`More than one border!!!`)
// }else {
//     console.log(`No Borders :(`)
// }

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense || hasGoodVision); console.log(`I can drive a car`)

if(language == "English" && population < 50 && isIsland === false){
    console.log(`You should move to ${country}`)
}else {
    console.log(`${country} does not meet these requirements`)
}