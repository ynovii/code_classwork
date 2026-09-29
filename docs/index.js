/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

console.log('hey');
var wins = 0;
var loses = 0;
function play(playerChoice) {
  var choices = ['камень', 'ножницы', 'бумага'];
  var computerChoice = choices[Math.floor(Math.random() * 3)];
  var result = '';
  if (playerChoice === computerChoice) {
    result = 'Ничья';
  } else if (playerChoice === 'камень' && computerChoice === 'ножницы' || playerChoice === 'ножницы' && computerChoice === 'бумага' || playerChoice === 'бумага' && computerChoice === 'камень') {
    result = 'Победа';
    wins = wins + 1;
  } else {
    result = 'Проигрыш';
    loses = loses + 1;
  }
  document.getElementById('winScore').innerHTML = wins;
  document.getElementById('loseScore').innerHTML = loses;
  document.getElementById('result').innerHTML = playerChoice + ' vs ' + computerChoice + ' — ' + result;
  var historyList = document.getElementById('historyList');
  var newItem = document.createElement('li');
  newItem.innerHTML = playerChoice + ' vs ' + computerChoice + ' — ' + result;
  historyList.insertBefore(newItem, historyList.firstChild);
}
function resetGame() {
  wins = 0;
  loses = 0;
  document.getElementById('winScore').innerHTML = 0;
  document.getElementById('loseScore').innerHTML = 0;
  document.getElementById('result').innerHTML = 'Сделайте ход';
  document.getElementById('historyList').innerHTML = '';
}
window.play = play;
window.resetGame = resetGame;
/******/ })()
;