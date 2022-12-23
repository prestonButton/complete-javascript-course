// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = (birthYear) => 2022 - birthYear;

// console.log(calcAge(2009));

/*
Problem: given an array of temp0eratures, calculate the amplitude of all the temps. 
Note that the sensor may return errors */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//Roadmap:
//ignore errors
//compute min and max solutions
//subtract min from max and return result

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    else if (currentTemp > max) max = currentTemp;
    else if (currentTemp < min) min = currentTemp;
  }

  console.log(max);
  console.log(min);
  let amplitude = max - min;
  console.log(amplitude);
  return amplitude;
};

calcTempAmplitude(temperatures);

console.log('');

//Should now take an input of two arrays, but otherwise work the same

//merge two arrays into one

const calcTempAmplitudeNew = function (temps1, temps2) {

  const temps = temps1.concat(temps2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    else if (currentTemp > max) max = currentTemp;
    else if (currentTemp < min) min = currentTemp;
  }

  console.log(max);
  console.log(min);
  let amplitude = max - min;
  console.log(amplitude);
  return amplitude;
};

calcTempAmplitude(temperatures);

