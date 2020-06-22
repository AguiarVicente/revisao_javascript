/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (72)\\nFor more information on which environments are supported please see:\\nhttps://github.com/sass/node-sass/releases/tag/v4.0.0\\n    at module.exports (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/node-sass/lib/binding.js:13:13)\\n    at Object.<anonymous> (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/node-sass/lib/index.js:14:35)\\n    at Module._compile (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)\\n    at Module.load (internal/modules/cjs/loader.js:986:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:879:14)\\n    at Module.require (internal/modules/cjs/loader.js:1026:19)\\n    at require (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at getDefaultSassImpl (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/sass-loader/lib/loader.js:203:10)\\n    at Object.sassLoader (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/sass-loader/lib/loader.js:79:31)\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/webpack/lib/NormalModule.js:252:20\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at runSyncOrAsync (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\\n    at Array.<anonymous> (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\\n    at Storage.finished (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/graceful-fs/graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)\");\n\n//# sourceURL=webpack:///./src/assets/css/estilo.css?");

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (72)\\nFor more information on which environments are supported please see:\\nhttps://github.com/sass/node-sass/releases/tag/v4.0.0\\n    at module.exports (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/node-sass/lib/binding.js:13:13)\\n    at Object.<anonymous> (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/node-sass/lib/index.js:14:35)\\n    at Module._compile (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)\\n    at Module.load (internal/modules/cjs/loader.js:986:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:879:14)\\n    at Module.require (internal/modules/cjs/loader.js:1026:19)\\n    at require (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at getDefaultSassImpl (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/sass-loader/lib/loader.js:203:10)\\n    at Object.sassLoader (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/sass-loader/lib/loader.js:79:31)\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/webpack/lib/NormalModule.js:252:20\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at runSyncOrAsync (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\\n    at Array.<anonymous> (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\\n    at Storage.finished (/Users/dev/Cursos/curso_javascript/13_webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\\n    at /Users/dev/Cursos/curso_javascript/13_webpack/node_modules/graceful-fs/graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)\");\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?");

/***/ }),

/***/ "./src/modulos/moduloA.js":
/*!********************************!*\
  !*** ./src/modulos/moduloA.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduloB = __webpack_require__(/*! ./moduloB */ \"./src/modulos/moduloB.js\")\nconsole.log(moduloB.saudacao())\n\n//# sourceURL=webpack:///./src/modulos/moduloA.js?");

/***/ }),

/***/ "./src/modulos/moduloB.js":
/*!********************************!*\
  !*** ./src/modulos/moduloB.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  saudacao(){return 'Olá, eu sou o moduloB!'}\n}\n\n//# sourceURL=webpack:///./src/modulos/moduloB.js?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/moduloA */ \"./src/modulos/moduloA.js\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modulos_moduloA__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Pessoa {\n  cumprimentar(){\n    return 'Bom dia!!'\n  }\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/estilo.css */ \"./src/assets/css/estilo.css\");\n/* harmony import */ var _assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scss/index.scss */ \"./src/assets/scss/index.scss\");\n/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });