'use strict';

function calcAge(birthyear) {
    const age = 2037 - birthyear;

    function printAge(){
        const output = `${firstName}, you are ${age}, born in ${birthyear}`;
        console.log(output);

        if(birthyear >= 1981 && birthyear <= 1986) {
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
    }
    printAge();

    return age;
}

const firstName = 'Preston';
calcAge(2001);



var me = 'Preston';
let job = 'student';
const year = 2001;

function addDecl(a, b){return a + b;};
const addExpr = function(a, b) {return a+b};
const addArrow = (a, b) => a + b;


const getAge = function(birthyear) {
    console.log(2022 - birthyear);
    console.log(this);
}

getAge(2007 );

const preston = {
    firstName: "preston",
    lastName: 'Button',
    birthyear: 2001,
    family: ['Ev', 'Luke']
};

const prestonCopy = Object.assign({}, preston);

prestonCopy.firstName = 'Preston';
console.log(prestonCopy);