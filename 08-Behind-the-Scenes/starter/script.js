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