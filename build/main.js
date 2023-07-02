/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   run: () => (/* binding */ run)\n/* harmony export */ });\nconst run = (notif, toggle, choseToggle) => {\n  notif.onClick = cb => {\n    if (cb === \"login\") {\n      notif.setNotif(alert(\"belum bisa login\"));\n    } else {\n      notif.setNotif(alert(\"belum bisa mulai\"));\n    }\n  };\n  toggle.onClick(() => {\n    toggle.show(\"block\", 0);\n  });\n  choseToggle.onClick(() => {\n    choseToggle.show(180);\n  });\n};\n\n//# sourceURL=webpack://latihan-project-1/./src/app/app.js?");

/***/ }),

/***/ "./src/app/chose.js":
/*!**************************!*\
  !*** ./src/app/chose.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chose: () => (/* binding */ Chose)\n/* harmony export */ });\nclass Chose {\n  constructor() {\n    this.toggle = document.querySelector(\"#img-toggle\");\n  }\n  show(str) {\n    if (!this.toggle.classList.contains(\"rotate\")) {\n      this.toggle.classList.add(\"rotate\");\n      //   const rotate = document.querySelector(\".rotate\");\n      //   rotate.style.transform = `rotateY(${str}deg)`;\n    } else {\n      this.toggle.classList.remove(\"rotate\");\n      //   this.rotate.style.transform = `rotateY(0)`;\n    }\n  }\n\n  onClick(cb) {\n    this.toggle.addEventListener(\"click\", cb);\n  }\n}\n\n//# sourceURL=webpack://latihan-project-1/./src/app/chose.js?");

/***/ }),

/***/ "./src/app/notif.js":
/*!**************************!*\
  !*** ./src/app/notif.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Notif: () => (/* binding */ Notif)\n/* harmony export */ });\nclass Notif {\n  constructor() {\n    this.btnLogin = document.querySelector(\"#login\");\n    this.btnStart = document.querySelector(\"#start\");\n    this.btnLogin.addEventListener(\"click\", () => {\n      this.onClick(this.btnLogin.id);\n    });\n    this.btnStart.addEventListener(\"click\", () => {\n      this.onClick(this.btnStart.id);\n    });\n  }\n  setNotif(str) {\n    console.log(str);\n  }\n  onClick(cb) {\n    if (cb === \"login\") {\n      console.log(\"belum bisa login\");\n    } else if (cb === \"start\") {\n      console.log(\"belum bisa mulai\");\n    }\n  }\n}\n\n//# sourceURL=webpack://latihan-project-1/./src/app/notif.js?");

/***/ }),

/***/ "./src/app/toggle.js":
/*!***************************!*\
  !*** ./src/app/toggle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Toggle: () => (/* binding */ Toggle)\n/* harmony export */ });\nclass Toggle {\n  constructor() {\n    this.btnToggle = document.querySelector(\"#hamburger\");\n    this.navbar = document.querySelector(\"#navbar-toggle\");\n  }\n  show() {\n    for (var _len = arguments.length, inp = new Array(_len), _key = 0; _key < _len; _key++) {\n      inp[_key] = arguments[_key];\n    }\n    const [str, num] = inp;\n    if (this.navbar.classList.contains(\"show\")) {\n      this.navbar.classList.remove(\"show\");\n    } else {\n      this.navbar.classList.add(\"show\");\n      const showing = document.querySelector(\".show\");\n    }\n  }\n  onClick(cb) {\n    this.btnToggle.addEventListener(\"click\", cb);\n  }\n}\n\n//# sourceURL=webpack://latihan-project-1/./src/app/toggle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n/* harmony import */ var _app_notif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/notif */ \"./src/app/notif.js\");\n/* harmony import */ var _app_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/toggle */ \"./src/app/toggle.js\");\n/* harmony import */ var _app_chose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/chose */ \"./src/app/chose.js\");\n\n\n\n\n\nconst notif = new _app_notif__WEBPACK_IMPORTED_MODULE_2__.Notif();\nconst toggle = new _app_toggle__WEBPACK_IMPORTED_MODULE_3__.Toggle();\nconst choseTogle = new _app_chose__WEBPACK_IMPORTED_MODULE_4__.Chose();\n(0,_app_app__WEBPACK_IMPORTED_MODULE_1__.run)(notif, toggle, choseTogle);\n\n//# sourceURL=webpack://latihan-project-1/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://latihan-project-1/./src/style.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;