'use strict';

const guessEl = document.querySelector('.guess');
console.log(guessEl);
const messageEl = document.querySelector('.message');
const checkButtonEl = document.querySelector('.check');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

let highScore;

function checkGuess() {
  const randomNum = Math.trunc(Math.random() * 10) + 1;
  const inputValue = Number(guessEl.value);
  console.log(rando);
  console.log(inputValue);
  if (inputValue === 0) {
    messageEl.innerHTML = 'Please enter number!';
  } else if (inputValue < randomNum) {
    messageEl.innerHTML = 'Too Low';
  } else if (inputValue > randomNum) {
    messageEl.innerHTML = 'Too high';
  } else if (inputValue === randomNum) {
    messageEl.innerHTML = 'Correct';
    evaluateHighScore();
  }
  console.log(guessEl.value);
  console.log(typeof inputValue);
}

function evaluateHighScore() {
  if (Number(highScoreEl.value) < highScore) {
    highScoreEl.innerHTML = highScore;
  }
}

function resetGame() {
  if (guessEl.type === 'number') {
    document.querySelector('input').type = 'hidden';
    checkButtonEl.textContent = 'Play Again!';
  }
  if (guessEl.type !== 'number') {
    guessEl.type = 'number';
    checkButtonEl.textContent = 'Check';
  }
}

checkButtonEl.addEventListener('click', checkGuess);

console.log();
