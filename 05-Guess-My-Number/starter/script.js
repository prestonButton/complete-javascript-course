'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('⛔️ No Number');

    //when input is outside of scope of game
  } else if (guess < 0 || guess > 20) {
    displayMessage('❌ Invalid Guess');
    
    //when user wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //if guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔻 Too High' : '🔺 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🗑️ You Lose');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

/*Coding Challenge #1 
Implement a game reset functionality, so that the player can make a new guess! 
Your tasks: 
1. Select the element with the 'again' class and attach a click event handler 
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables 
3. Restore the initial conditions of the message, number, score and guess input 
fields 
4. Also restore the original background color (#222) and number width (15rem) 
 
GOOD LUCK 😀*/

document.querySelector('.again').addEventListener('click', function () {
  //reset all variables and their associated elements to initial value
  //score
  score = 20;
  document.querySelector('.score').textContent = score;

  //guess
  document.querySelector('.guess').value = '';

  //message
  displayMessage('Start Guessing...');

  //secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  //background color
  document.querySelector('body').style.backgroundColor = '#222';

  //box width
    document.querySelector('.number').style.width = '15rem';
});
