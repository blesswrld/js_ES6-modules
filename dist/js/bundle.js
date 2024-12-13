/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sayHi),
/* harmony export */   one: () => (/* binding */ one),
/* harmony export */   two: () => (/* binding */ two)
/* harmony export */ });
// Экспорт переменной one
// Используем ключевое слово `export` перед объявлением переменной `one`, чтобы сделать её доступной для импорта в других файлах.
let one = 1;

// Создание переменной two
// Эта переменная создаётся локально в модуле, но далее экспортируется отдельно.
let two = 2;

// Экспорт переменной two
// Используем конструкцию `export {}` для экспорта уже существующей переменной `two`.
// После этого её можно импортировать в других файлах.


// Экспорт функции по умолчанию
// `export default` позволяет экспортировать одну сущность как основную из модуля.
// Здесь экспортируется анонимная функция, которая выводит в консоль строку 'Hello'.
function sayHi() {
    console.log('Hello');
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");
// Пример 1: Импорт именованных экспортов и их использование
// Закомментированный код, который показывает, как можно импортировать переменные `one` и `two` из файла `main.js`:
// import {one, two} from './main';
// console.log(`${one} and ${two}`);



// Пример 2: Импорт именованного экспорта с использованием псевдонима
// Здесь `one` импортируется из `main.js`, но при этом переименовывается в `first`:
// import {one as first} from './main';
// console.log(first);



// Пример 3: Импорт всех экспортов как объект
// Здесь импортируются все именованные экспорты из `main.js` и сохраняются в объекте `data`:
// import * as data from './main';
// console.log(`${data.one} and ${data.two}`); // Доступ к переменным через объект
// data.sayHi(); // Вызов функции через объект



// Пример 4: Импорт именованных экспортов и экспорта по умолчанию
// Импортируем переменные `one` и `two` как именованные экспорты из `main.js`




// Пример 5: Импортируем экспорт по умолчанию из `main.js`. Это может быть функция, объект или другое значение.


// Используем импортированные значения
console.log(`${_main_js__WEBPACK_IMPORTED_MODULE_0__.one} and ${_main_js__WEBPACK_IMPORTED_MODULE_0__.two}`); // Выводим значения `one` и `two` в консоль
(0,_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Вызываем функцию `sayHi`, импортированную как экспорт по умолчанию

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map