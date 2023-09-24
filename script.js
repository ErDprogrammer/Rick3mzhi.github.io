'use strict';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 5;
// document.querySelector('.guess').value = 23;

let number = Math.trunc(Math.random()*20) + 1;
// console.log(number);
let highscore = 0;

let score = 20;
let varmessage = document.querySelector('.message');
let varnumber = document.querySelector('.number');

function displayMessage(message){
document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof (guess));

    if(!guess){
        displayMessage('⛔ No Number');
    }else if(guess === number){
        displayMessage('🍕 correct number');
document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem'; 
document.querySelector('.number').textContent = number; 
// console.log(score > highscore);

if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}
    }else if (guess !== number) {
      if (score > 1) {
        displayMessage(guess > number ? '📉 too high' : '📈 too low');;
        score--;
        document.querySelector('.score').textContent = score;
      }else{
        displayMessage('💥Looser!!!!!!!');
document.querySelector('.score').textContent = 0;      
      }
    } 
});

document.querySelector('.again').addEventListener('click', function(){
number = Math.trunc(Math.random()*20) + 1;
score = 20;
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem'; 
document.querySelector('.number').textContent = number; 
document.querySelector('.score').textContent = score;
document.querySelector('.guess').value = '';
displayMessage('Start guessing...');
document.querySelector('.number').textContent = '?'; 
});
