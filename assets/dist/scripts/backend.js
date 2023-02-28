/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/_components/logger.js":
/*!*******************************************!*\
  !*** ./src/scripts/_components/logger.js ***!
  \*******************************************/
/***/ (function() {

/**
 * Console logger. Self invoked.
 *
 * @return {Object} Callbacks.
 */
const loggerFn = (() => {
	const methodToColorMap = {
		debug: '#7f8c8d',
		log: '#2ecc71',
		warn: '#f39c12',
		error: '#c0392b',
		table: '#c0392b',
	}

	const print = function (method, args) {
		const styles = [
				`background: ${methodToColorMap[method]}`,
				`border-radius: 0.3em`,
				`color: white`,
				`font-weight: bold`,
				`padding: 2px 0.5em`,
			],
			logPrefix = ['%cdavid-ev-asm-logger', styles.join(';')]

		if (window.DavidEvAsmApiPlugin.constants.scriptDebug === false) {
			return
		}

		/* eslint-disable no-console */
		console[method](...logPrefix, ...args)
		/* eslint-enable no-console */
	}

	const api = {}
	const loggerMethods = Object.keys(methodToColorMap)

	for (const key of loggerMethods) {
		const method = key

		api[method] = (...args) => {
			print(method, args)
		}
	}

	return api
})()

window.DavidEvAsmApiPlugin = window.DavidEvAsmApiPlugin || {}

window.DavidEvAsmApiPlugin = {
	...window.DavidEvAsmApiPlugin,
	...{ logger: loggerFn },
}


/***/ }),

/***/ "./src/scripts/backend.js":
/*!********************************!*\
  !*** ./src/scripts/backend.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components/logger.js */ "./src/scripts/_components/logger.js");
/* harmony import */ var _components_logger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_logger_js__WEBPACK_IMPORTED_MODULE_0__);
(function () {
	/**
	 * Mobile scenario handler. Perfom a set of operation
	 * if page is on mobile view.
	 */
	const isMobile = async () => {
		const mobilePlatform =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)

		if (true === mobilePlatform) {
			return true
		}

		return false
	}

	/**
	 * Actions on document.ready event.
	 */
	const initActions = () => {
		isMobile()
	}

	__webpack_require__.g.DavidEvAsmApiPlugin = __webpack_require__.g.DavidEvAsmApiPlugin || {}
	__webpack_require__.g.DavidEvAsmApiPlugin = {
		...__webpack_require__.g.DavidEvAsmApiPlugin,
		...{
			isMobile,
		},
	}

	initActions()
})()


/***/ }),

/***/ "./src/styles/backend.scss":
/*!*********************************!*\
  !*** ./src/styles/backend.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************************!*\
  !*** ./src/_entries/entry-backend.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_backend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/backend.scss */ "./src/styles/backend.scss");
/* harmony import */ var _scripts_backend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/backend.js */ "./src/scripts/backend.js");
// Styles


// Scripts

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9iYWNrZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU0sa0JBQWtCO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7QUNuREM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMscUJBQU0sdUJBQXVCLHFCQUFNO0FBQ3BDLENBQUMscUJBQU07QUFDUCxLQUFLLHFCQUFNO0FBQ1g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2dDOztBQUVoQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL19jb21wb25lbnRzL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYWNrZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYmFja2VuZC5zY3NzPzBlYTAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9fZW50cmllcy9lbnRyeS1iYWNrZW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29uc29sZSBsb2dnZXIuIFNlbGYgaW52b2tlZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IENhbGxiYWNrcy5cbiAqL1xuY29uc3QgbG9nZ2VyRm4gPSAoKCkgPT4ge1xuXHRjb25zdCBtZXRob2RUb0NvbG9yTWFwID0ge1xuXHRcdGRlYnVnOiAnIzdmOGM4ZCcsXG5cdFx0bG9nOiAnIzJlY2M3MScsXG5cdFx0d2FybjogJyNmMzljMTInLFxuXHRcdGVycm9yOiAnI2MwMzkyYicsXG5cdFx0dGFibGU6ICcjYzAzOTJiJyxcblx0fVxuXG5cdGNvbnN0IHByaW50ID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuXHRcdGNvbnN0IHN0eWxlcyA9IFtcblx0XHRcdFx0YGJhY2tncm91bmQ6ICR7bWV0aG9kVG9Db2xvck1hcFttZXRob2RdfWAsXG5cdFx0XHRcdGBib3JkZXItcmFkaXVzOiAwLjNlbWAsXG5cdFx0XHRcdGBjb2xvcjogd2hpdGVgLFxuXHRcdFx0XHRgZm9udC13ZWlnaHQ6IGJvbGRgLFxuXHRcdFx0XHRgcGFkZGluZzogMnB4IDAuNWVtYCxcblx0XHRcdF0sXG5cdFx0XHRsb2dQcmVmaXggPSBbJyVjZGF2aWQtZXYtYXNtLWxvZ2dlcicsIHN0eWxlcy5qb2luKCc7JyldXG5cblx0XHRpZiAod2luZG93LkRhdmlkRXZBc21BcGlQbHVnaW4uY29uc3RhbnRzLnNjcmlwdERlYnVnID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXHRcdGNvbnNvbGVbbWV0aG9kXSguLi5sb2dQcmVmaXgsIC4uLmFyZ3MpXG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cdH1cblxuXHRjb25zdCBhcGkgPSB7fVxuXHRjb25zdCBsb2dnZXJNZXRob2RzID0gT2JqZWN0LmtleXMobWV0aG9kVG9Db2xvck1hcClcblxuXHRmb3IgKGNvbnN0IGtleSBvZiBsb2dnZXJNZXRob2RzKSB7XG5cdFx0Y29uc3QgbWV0aG9kID0ga2V5XG5cblx0XHRhcGlbbWV0aG9kXSA9ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRwcmludChtZXRob2QsIGFyZ3MpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFwaVxufSkoKVxuXG53aW5kb3cuRGF2aWRFdkFzbUFwaVBsdWdpbiA9IHdpbmRvdy5EYXZpZEV2QXNtQXBpUGx1Z2luIHx8IHt9XG5cbndpbmRvdy5EYXZpZEV2QXNtQXBpUGx1Z2luID0ge1xuXHQuLi53aW5kb3cuRGF2aWRFdkFzbUFwaVBsdWdpbixcblx0Li4ueyBsb2dnZXI6IGxvZ2dlckZuIH0sXG59XG4iLCJpbXBvcnQgJy4vX2NvbXBvbmVudHMvbG9nZ2VyLmpzJ1xuOyhmdW5jdGlvbiAoKSB7XG5cdC8qKlxuXHQgKiBNb2JpbGUgc2NlbmFyaW8gaGFuZGxlci4gUGVyZm9tIGEgc2V0IG9mIG9wZXJhdGlvblxuXHQgKiBpZiBwYWdlIGlzIG9uIG1vYmlsZSB2aWV3LlxuXHQgKi9cblx0Y29uc3QgaXNNb2JpbGUgPSBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9iaWxlUGxhdGZvcm0gPVxuXHRcdFx0L0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuXHRcdFx0XHRuYXZpZ2F0b3IudXNlckFnZW50XG5cdFx0XHQpXG5cblx0XHRpZiAodHJ1ZSA9PT0gbW9iaWxlUGxhdGZvcm0pIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHQvKipcblx0ICogQWN0aW9ucyBvbiBkb2N1bWVudC5yZWFkeSBldmVudC5cblx0ICovXG5cdGNvbnN0IGluaXRBY3Rpb25zID0gKCkgPT4ge1xuXHRcdGlzTW9iaWxlKClcblx0fVxuXG5cdGdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luID0gZ2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4gfHwge31cblx0Z2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4gPSB7XG5cdFx0Li4uZ2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4sXG5cdFx0Li4ue1xuXHRcdFx0aXNNb2JpbGUsXG5cdFx0fSxcblx0fVxuXG5cdGluaXRBY3Rpb25zKClcbn0pKClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFN0eWxlc1xuaW1wb3J0IFwiLi4vc3R5bGVzL2JhY2tlbmQuc2Nzc1wiO1xuXG4vLyBTY3JpcHRzXG5pbXBvcnQgXCIuLi9zY3JpcHRzL2JhY2tlbmQuanNcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=