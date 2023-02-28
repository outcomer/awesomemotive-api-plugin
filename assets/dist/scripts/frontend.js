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

/***/ "./src/scripts/frontend.js":
/*!*********************************!*\
  !*** ./src/scripts/frontend.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components/logger.js */ "./src/scripts/_components/logger.js");
/* harmony import */ var _components_logger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_logger_js__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./src/styles/frontend.scss":
/*!**********************************!*\
  !*** ./src/styles/frontend.scss ***!
  \**********************************/
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
/*!****************************************!*\
  !*** ./src/_entries/entry-frontend.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/frontend.scss */ "./src/styles/frontend.scss");
/* harmony import */ var _scripts_frontend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/frontend.js */ "./src/scripts/frontend.js");
// Styles


// Scripts

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9mcm9udGVuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQjtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7O0FDcERnQzs7Ozs7Ozs7Ozs7OztBQ0FoQzs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDaUM7O0FBRWpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvX2NvbXBvbmVudHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZnJvbnRlbmQuc2Nzcz82NDVlIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvX2VudHJpZXMvZW50cnktZnJvbnRlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb25zb2xlIGxvZ2dlci4gU2VsZiBpbnZva2VkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gQ2FsbGJhY2tzLlxuICovXG5jb25zdCBsb2dnZXJGbiA9ICgoKSA9PiB7XG5cdGNvbnN0IG1ldGhvZFRvQ29sb3JNYXAgPSB7XG5cdFx0ZGVidWc6ICcjN2Y4YzhkJyxcblx0XHRsb2c6ICcjMmVjYzcxJyxcblx0XHR3YXJuOiAnI2YzOWMxMicsXG5cdFx0ZXJyb3I6ICcjYzAzOTJiJyxcblx0XHR0YWJsZTogJyNjMDM5MmInLFxuXHR9XG5cblx0Y29uc3QgcHJpbnQgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG5cdFx0Y29uc3Qgc3R5bGVzID0gW1xuXHRcdFx0XHRgYmFja2dyb3VuZDogJHttZXRob2RUb0NvbG9yTWFwW21ldGhvZF19YCxcblx0XHRcdFx0YGJvcmRlci1yYWRpdXM6IDAuM2VtYCxcblx0XHRcdFx0YGNvbG9yOiB3aGl0ZWAsXG5cdFx0XHRcdGBmb250LXdlaWdodDogYm9sZGAsXG5cdFx0XHRcdGBwYWRkaW5nOiAycHggMC41ZW1gLFxuXHRcdFx0XSxcblx0XHRcdGxvZ1ByZWZpeCA9IFsnJWNkYXZpZC1ldi1hc20tbG9nZ2VyJywgc3R5bGVzLmpvaW4oJzsnKV1cblxuXHRcdGlmICh3aW5kb3cuRGF2aWRFdkFzbUFwaVBsdWdpbi5jb25zdGFudHMuc2NyaXB0RGVidWcgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdFx0Y29uc29sZVttZXRob2RdKC4uLmxvZ1ByZWZpeCwgLi4uYXJncylcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblx0fVxuXG5cdGNvbnN0IGFwaSA9IHt9XG5cdGNvbnN0IGxvZ2dlck1ldGhvZHMgPSBPYmplY3Qua2V5cyhtZXRob2RUb0NvbG9yTWFwKVxuXG5cdGZvciAoY29uc3Qga2V5IG9mIGxvZ2dlck1ldGhvZHMpIHtcblx0XHRjb25zdCBtZXRob2QgPSBrZXlcblxuXHRcdGFwaVttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcblx0XHRcdHByaW50KG1ldGhvZCwgYXJncylcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXBpXG59KSgpXG5cbndpbmRvdy5EYXZpZEV2QXNtQXBpUGx1Z2luID0gd2luZG93LkRhdmlkRXZBc21BcGlQbHVnaW4gfHwge31cblxud2luZG93LkRhdmlkRXZBc21BcGlQbHVnaW4gPSB7XG5cdC4uLndpbmRvdy5EYXZpZEV2QXNtQXBpUGx1Z2luLFxuXHQuLi57IGxvZ2dlcjogbG9nZ2VyRm4gfSxcbn1cbiIsImltcG9ydCAnLi9fY29tcG9uZW50cy9sb2dnZXIuanMnXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU3R5bGVzXG5pbXBvcnQgXCIuLi9zdHlsZXMvZnJvbnRlbmQuc2Nzc1wiO1xuXG4vLyBTY3JpcHRzXG5pbXBvcnQgXCIuLi9zY3JpcHRzL2Zyb250ZW5kLmpzXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9