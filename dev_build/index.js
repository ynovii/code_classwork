/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXRzL3N0eWxlLmNzcz8zMjlkIiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2IyNGRzMDgvLi9zcmMvamF2YXNjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc3R5bGVzaGVldHMvc3R5bGUuY3NzJ1xuXG5jb25zb2xlLmxvZygnaGV5JylcblxudmFyIHdpbnMgPSAwO1xudmFyIGxvc2VzID0gMDtcblxuZnVuY3Rpb24gcGxheShwbGF5ZXJDaG9pY2UpIHtcbiAgdmFyIGNob2ljZXMgPSBbJ9C60LDQvNC10L3RjCcsICfQvdC+0LbQvdC40YbRiycsICfQsdGD0LzQsNCz0LAnXTtcbiAgdmFyIGNvbXB1dGVyQ2hvaWNlID0gY2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV07XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGlmIChwbGF5ZXJDaG9pY2UgPT09IGNvbXB1dGVyQ2hvaWNlKSB7XG4gICAgcmVzdWx0ID0gJ9Cd0LjRh9GM0Y8nO1xuICB9XG4gIGVsc2UgaWYgKFxuICAgIChwbGF5ZXJDaG9pY2UgPT09ICfQutCw0LzQtdC90YwnICYmIGNvbXB1dGVyQ2hvaWNlID09PSAn0L3QvtC20L3QuNGG0YsnKSB8fFxuICAgIChwbGF5ZXJDaG9pY2UgPT09ICfQvdC+0LbQvdC40YbRiycgJiYgY29tcHV0ZXJDaG9pY2UgPT09ICfQsdGD0LzQsNCz0LAnKSB8fFxuICAgIChwbGF5ZXJDaG9pY2UgPT09ICfQsdGD0LzQsNCz0LAnICYmIGNvbXB1dGVyQ2hvaWNlID09PSAn0LrQsNC80LXQvdGMJylcbiAgKSB7XG4gICAgcmVzdWx0ID0gJ9Cf0L7QsdC10LTQsCc7XG4gICAgd2lucyA9IHdpbnMgKyAxO1xuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9ICfQn9GA0L7QuNCz0YDRi9GIJztcbiAgICBsb3NlcyA9IGxvc2VzICsgMTtcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5TY29yZScpLmlubmVySFRNTCA9IHdpbnM7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3NlU2NvcmUnKS5pbm5lckhUTUwgPSBsb3NlcztcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykuaW5uZXJIVE1MID1cbiAgICBwbGF5ZXJDaG9pY2UgKyAnIHZzICcgKyBjb21wdXRlckNob2ljZSArICcg4oCUICcgKyByZXN1bHQ7XG5cbiAgdmFyIGhpc3RvcnlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnlMaXN0Jyk7XG4gIHZhciBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbmV3SXRlbS5pbm5lckhUTUwgPSBwbGF5ZXJDaG9pY2UgKyAnIHZzICcgKyBjb21wdXRlckNob2ljZSArICcg4oCUICcgKyByZXN1bHQ7XG4gIGhpc3RvcnlMaXN0Lmluc2VydEJlZm9yZShuZXdJdGVtLCBoaXN0b3J5TGlzdC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICB3aW5zID0gMDtcbiAgbG9zZXMgPSAwO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luU2NvcmUnKS5pbm5lckhUTUwgPSAwO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9zZVNjb3JlJykuaW5uZXJIVE1MID0gMDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLmlubmVySFRNTCA9ICfQodC00LXQu9Cw0LnRgtC1INGF0L7QtCc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5TGlzdCcpLmlubmVySFRNTCA9ICcnO1xufVxud2luZG93LnBsYXkgPSBwbGF5O1xud2luZG93LnJlc2V0R2FtZSA9IHJlc2V0R2FtZTtcbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwid2lucyIsImxvc2VzIiwicGxheSIsInBsYXllckNob2ljZSIsImNob2ljZXMiLCJjb21wdXRlckNob2ljZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlc3VsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJoaXN0b3J5TGlzdCIsIm5ld0l0ZW0iLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInJlc2V0R2FtZSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=