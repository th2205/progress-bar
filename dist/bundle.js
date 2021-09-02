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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ProgressBar = /** @class */ (function () {\n    function ProgressBar() {\n        this._body = document.querySelector(\"body\");\n        this._isRun = false;\n    }\n    ProgressBar.prototype.init = function () {\n        var $container = document.createElement(\"div\");\n        var $progressBar = document.createElement(\"div\");\n        $container.style.position = \"absolute\";\n    };\n    ProgressBar.prototype.start = function () { };\n    ProgressBar.prototype.end = function () { };\n    return ProgressBar;\n}());\nexports.default = new ProgressBar();\n\n\n//# sourceURL=webpack://@thlim/progress-bar/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;