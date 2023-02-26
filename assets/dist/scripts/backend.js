/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/_components/logger.js":
/*!*******************************************!*\
  !*** ./src/scripts/_components/logger.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

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

		if (DavidEvAsmApiPlugin.constants.scriptDebug === false) {
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

__webpack_require__.g.DavidEvAsmApiPlugin = __webpack_require__.g.DavidEvAsmApiPlugin || {}

__webpack_require__.g.DavidEvAsmApiPlugin = {
	...__webpack_require__.g.DavidEvAsmApiPlugin,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9iYWNrZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQscUJBQU0sdUJBQXVCLHFCQUFNOztBQUVuQyxxQkFBTTtBQUNOLElBQUkscUJBQU07QUFDVixNQUFNLGtCQUFrQjtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7O0FDbkRDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLHFCQUFNLHVCQUF1QixxQkFBTTtBQUNwQyxDQUFDLHFCQUFNO0FBQ1AsS0FBSyxxQkFBTTtBQUNYO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkNEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNnQzs7QUFFaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9fY29tcG9uZW50cy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2JhY2tlbmQuc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL19lbnRyaWVzL2VudHJ5LWJhY2tlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb25zb2xlIGxvZ2dlci4gU2VsZiBpbnZva2VkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gQ2FsbGJhY2tzLlxuICovXG5jb25zdCBsb2dnZXJGbiA9ICgoKSA9PiB7XG5cdGNvbnN0IG1ldGhvZFRvQ29sb3JNYXAgPSB7XG5cdFx0ZGVidWc6ICcjN2Y4YzhkJyxcblx0XHRsb2c6ICcjMmVjYzcxJyxcblx0XHR3YXJuOiAnI2YzOWMxMicsXG5cdFx0ZXJyb3I6ICcjYzAzOTJiJyxcblx0XHR0YWJsZTogJyNjMDM5MmInLFxuXHR9XG5cblx0Y29uc3QgcHJpbnQgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG5cdFx0Y29uc3Qgc3R5bGVzID0gW1xuXHRcdFx0XHRgYmFja2dyb3VuZDogJHttZXRob2RUb0NvbG9yTWFwW21ldGhvZF19YCxcblx0XHRcdFx0YGJvcmRlci1yYWRpdXM6IDAuM2VtYCxcblx0XHRcdFx0YGNvbG9yOiB3aGl0ZWAsXG5cdFx0XHRcdGBmb250LXdlaWdodDogYm9sZGAsXG5cdFx0XHRcdGBwYWRkaW5nOiAycHggMC41ZW1gLFxuXHRcdFx0XSxcblx0XHRcdGxvZ1ByZWZpeCA9IFsnJWNkYXZpZC1ldi1hc20tbG9nZ2VyJywgc3R5bGVzLmpvaW4oJzsnKV1cblxuXHRcdGlmIChEYXZpZEV2QXNtQXBpUGx1Z2luLmNvbnN0YW50cy5zY3JpcHREZWJ1ZyA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlW21ldGhvZF0oLi4ubG9nUHJlZml4LCAuLi5hcmdzKVxuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXHR9XG5cblx0Y29uc3QgYXBpID0ge31cblx0Y29uc3QgbG9nZ2VyTWV0aG9kcyA9IE9iamVjdC5rZXlzKG1ldGhvZFRvQ29sb3JNYXApXG5cblx0Zm9yIChjb25zdCBrZXkgb2YgbG9nZ2VyTWV0aG9kcykge1xuXHRcdGNvbnN0IG1ldGhvZCA9IGtleVxuXG5cdFx0YXBpW21ldGhvZF0gPSAoLi4uYXJncykgPT4ge1xuXHRcdFx0cHJpbnQobWV0aG9kLCBhcmdzKVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhcGlcbn0pKClcblxuZ2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4gPSBnbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbiB8fCB7fVxuXG5nbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbiA9IHtcblx0Li4uZ2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4sXG5cdC4uLnsgbG9nZ2VyOiBsb2dnZXJGbiB9LFxufVxuIiwiaW1wb3J0ICcuL19jb21wb25lbnRzL2xvZ2dlci5qcydcbjsoZnVuY3Rpb24gKCkge1xuXHQvKipcblx0ICogTW9iaWxlIHNjZW5hcmlvIGhhbmRsZXIuIFBlcmZvbSBhIHNldCBvZiBvcGVyYXRpb25cblx0ICogaWYgcGFnZSBpcyBvbiBtb2JpbGUgdmlldy5cblx0ICovXG5cdGNvbnN0IGlzTW9iaWxlID0gYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vYmlsZVBsYXRmb3JtID1cblx0XHRcdC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcblx0XHRcdFx0bmF2aWdhdG9yLnVzZXJBZ2VudFxuXHRcdFx0KVxuXG5cdFx0aWYgKHRydWUgPT09IG1vYmlsZVBsYXRmb3JtKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cblx0LyoqXG5cdCAqIEFjdGlvbnMgb24gZG9jdW1lbnQucmVhZHkgZXZlbnQuXG5cdCAqL1xuXHRjb25zdCBpbml0QWN0aW9ucyA9ICgpID0+IHtcblx0XHRpc01vYmlsZSgpXG5cdH1cblxuXHRnbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbiA9IGdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luIHx8IHt9XG5cdGdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luID0ge1xuXHRcdC4uLmdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luLFxuXHRcdC4uLntcblx0XHRcdGlzTW9iaWxlLFxuXHRcdH0sXG5cdH1cblxuXHRpbml0QWN0aW9ucygpXG59KSgpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBTdHlsZXNcbmltcG9ydCBcIi4uL3N0eWxlcy9iYWNrZW5kLnNjc3NcIjtcblxuLy8gU2NyaXB0c1xuaW1wb3J0IFwiLi4vc2NyaXB0cy9iYWNrZW5kLmpzXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9