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

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Board = /** @class */ (function () {\n    function Board(rows, cols, element) {\n        this.rows = rows;\n        this.cols = cols;\n        this.boardEl = element;\n    }\n    Board.prototype.fragment = function () {\n        var fragment = document.createDocumentFragment();\n        for (var i = 0; i < this.rows * this.cols; i++) {\n            var box = document.createElement(\"div\");\n            box.classList.add(\"box\");\n            fragment.append(box);\n        }\n        return fragment;\n    };\n    Board.prototype.setGrid = function () {\n        this.boardEl.style.gridTemplateRows = \"repeat(\".concat(this.rows, \", 30px)\");\n        this.boardEl.style.gridTemplateColumns = \"repeat(\".concat(this.cols, \", 30px)\");\n    };\n    Board.prototype.draw = function () {\n        this.boardEl.append(this.fragment());\n        this.setGrid();\n    };\n    Board.prototype.init = function () {\n        this.draw();\n    };\n    return Board;\n}());\nexports[\"default\"] = Board;\n\n\n//# sourceURL=webpack://pixel-art/./src/Board.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Board_1 = __importDefault(__webpack_require__(/*! ./Board */ \"./src/Board.ts\"));\nvar rows = 16;\nvar cols = 16;\nconsole.log(\"anyaaa\");\nvar boardElement = document.getElementById(\"board\");\nvar board = new Board_1.default(rows, cols, boardElement);\nboard.init();\nvar isMouseDown = false;\nboardElement.addEventListener(\"mousedown\", function (evt) {\n    var target = evt.target;\n    if (target.classList.contains(\"box\")) {\n        target.classList.add(\"bg-green-500\");\n    }\n    isMouseDown = true;\n});\nboardElement.addEventListener(\"mouseover\", function (evt) {\n    if (isMouseDown) {\n        var target = evt.target;\n        if (target.classList.contains(\"box\")) {\n            target.classList.add(\"bg-green-500\");\n        }\n    }\n});\nboardElement.addEventListener(\"mouseup\", function () {\n    isMouseDown = false;\n});\n\n\n//# sourceURL=webpack://pixel-art/./src/app.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;