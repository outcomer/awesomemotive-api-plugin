/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/blocks/block-remote-host.js":
/*!*************************************************!*\
  !*** ./src/scripts/blocks/block-remote-host.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

(function () {
	async function BlockInit() {
		let remoteContent = []

		const findBlocks = () => {
			return document.querySelectorAll(
				'.david-ev-asm-block[data-name="david-ev-asm/block-remote-host"]'
			)
		}

		const init = async () => {
			try {
				const formData = new FormData()

				formData.append('action', blockNodes[0].dataset.name)
				formData.append(
					'nonce',
					__webpack_require__.g.DavidEvAsmApiPlugin.constants.pluginNonce
				)

				const response = await fetch(
					__webpack_require__.g.DavidEvAsmApiPlugin.constants.ajaxUrl,
					{
						method: 'POST',
						cache: 'no-cache',
						body: formData,
					}
				)

				if (response.ok && 200 === response.status) {
					const body = await response.json()

					if (200 !== body.data.code) {
						throw new Error(body.data)
					}
					remoteContent = body.data.content
					return
				}

				throw new Error(response.status)
			} catch (error) {
				window.DavidEvAsmApiPlugin.logger.error(error)
			}
		}

		const jsonToTable = () => {
			const table = document.createElement('TABLE')
			let row = table.insertRow(-1)
			const titleCell = document.createElement('TH')
			titleCell.innerText = remoteContent.title
			titleCell.colSpan = remoteContent.data.headers.length
			row.appendChild(titleCell)

			// headers
			row = table.insertRow(-1)
			for (let i = 0; i < remoteContent.data.headers.length; i++) {
				const headerCell = document.createElement('TH')
				headerCell.innerText = remoteContent.data.headers[i]
				row.appendChild(headerCell)
			}

			// rows
			for (const i in remoteContent.data.rows) {
				const element = remoteContent.data.rows[i]
				row = table.insertRow(-1)

				for (const z in element) {
					let value
					switch (z) {
						case 'date':
							value = new Date(element[z] * 1000).toLocaleDateString('en-US')
							break

						default:
							value = element[z]
							break
					}

					const cell = row.insertCell(-1)
					cell.innerText = value
				}
			}

			return table
		}

		const fillContainers = ($html) => {
			blockNodes.forEach((blockNode) => {
				blockNode.innerHTML = null
				blockNode.appendChild($html)
			})
		}

		const getErrorMarkup = () => {
			const error = document.createElement('DIV')
			const errorWrapper = document.createElement('DIV')
			error.classList.add('error')
			errorWrapper.classList.add('error-wrapper')
			errorWrapper.appendChild(error)

			return errorWrapper
		}

		const blockNodes = findBlocks()

		if (blockNodes.length === 0) return

		await init()

		let html = getErrorMarkup()

		try {
			html = jsonToTable()
		} catch (error) {
			__webpack_require__.g.DavidEvAsmApiPlugin.logger.error(error)
		}

		fillContainers(html)
	}

	BlockInit.call(BlockInit)
})()


/***/ }),

/***/ "./src/styles/blocks/block-remote-host.scss":
/*!**************************************************!*\
  !*** ./src/styles/blocks/block-remote-host.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************************!*\
  !*** ./src/_entries/blocks/entry-block-remote-host.js ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_blocks_block_remote_host_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/blocks/block-remote-host.scss */ "./src/styles/blocks/block-remote-host.scss");
/* harmony import */ var _scripts_blocks_block_remote_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/blocks/block-remote-host.js */ "./src/scripts/blocks/block-remote-host.js");
/* harmony import */ var _scripts_blocks_block_remote_host_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_blocks_block_remote_host_js__WEBPACK_IMPORTED_MODULE_1__);
// Styles


// Scripts

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7O0FBRUE7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUcscUJBQU07QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMUhEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNvRDs7QUFFcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3Quc2Nzcz9iNjI2Iiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvX2VudHJpZXMvYmxvY2tzL2VudHJ5LWJsb2NrLXJlbW90ZS1ob3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuOyhmdW5jdGlvbiAoKSB7XG5cdGFzeW5jIGZ1bmN0aW9uIEJsb2NrSW5pdCgpIHtcblx0XHRsZXQgcmVtb3RlQ29udGVudCA9IFtdXG5cblx0XHRjb25zdCBmaW5kQmxvY2tzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdCcuZGF2aWQtZXYtYXNtLWJsb2NrW2RhdGEtbmFtZT1cImRhdmlkLWV2LWFzbS9ibG9jay1yZW1vdGUtaG9zdFwiXSdcblx0XHRcdClcblx0XHR9XG5cblx0XHRjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnYWN0aW9uJywgYmxvY2tOb2Rlc1swXS5kYXRhc2V0Lm5hbWUpXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZChcblx0XHRcdFx0XHQnbm9uY2UnLFxuXHRcdFx0XHRcdGdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luLmNvbnN0YW50cy5wbHVnaW5Ob25jZVxuXHRcdFx0XHQpXG5cblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRnbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbi5jb25zdGFudHMuYWpheFVybCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRcdGNhY2hlOiAnbm8tY2FjaGUnLFxuXHRcdFx0XHRcdFx0Ym9keTogZm9ybURhdGEsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rICYmIDIwMCA9PT0gcmVzcG9uc2Uuc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRcdFx0aWYgKDIwMCAhPT0gYm9keS5kYXRhLmNvZGUpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihib2R5LmRhdGEpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlbW90ZUNvbnRlbnQgPSBib2R5LmRhdGEuY29udGVudFxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cylcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHdpbmRvdy5EYXZpZEV2QXNtQXBpUGx1Z2luLmxvZ2dlci5lcnJvcihlcnJvcilcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBqc29uVG9UYWJsZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEFCTEUnKVxuXHRcdFx0bGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdygtMSlcblx0XHRcdGNvbnN0IHRpdGxlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RIJylcblx0XHRcdHRpdGxlQ2VsbC5pbm5lclRleHQgPSByZW1vdGVDb250ZW50LnRpdGxlXG5cdFx0XHR0aXRsZUNlbGwuY29sU3BhbiA9IHJlbW90ZUNvbnRlbnQuZGF0YS5oZWFkZXJzLmxlbmd0aFxuXHRcdFx0cm93LmFwcGVuZENoaWxkKHRpdGxlQ2VsbClcblxuXHRcdFx0Ly8gaGVhZGVyc1xuXHRcdFx0cm93ID0gdGFibGUuaW5zZXJ0Um93KC0xKVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdGVDb250ZW50LmRhdGEuaGVhZGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBoZWFkZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEgnKVxuXHRcdFx0XHRoZWFkZXJDZWxsLmlubmVyVGV4dCA9IHJlbW90ZUNvbnRlbnQuZGF0YS5oZWFkZXJzW2ldXG5cdFx0XHRcdHJvdy5hcHBlbmRDaGlsZChoZWFkZXJDZWxsKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByb3dzXG5cdFx0XHRmb3IgKGNvbnN0IGkgaW4gcmVtb3RlQ29udGVudC5kYXRhLnJvd3MpIHtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IHJlbW90ZUNvbnRlbnQuZGF0YS5yb3dzW2ldXG5cdFx0XHRcdHJvdyA9IHRhYmxlLmluc2VydFJvdygtMSlcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHogaW4gZWxlbWVudCkge1xuXHRcdFx0XHRcdGxldCB2YWx1ZVxuXHRcdFx0XHRcdHN3aXRjaCAoeikge1xuXHRcdFx0XHRcdFx0Y2FzZSAnZGF0ZSc6XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gbmV3IERhdGUoZWxlbWVudFt6XSAqIDEwMDApLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnKVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IGVsZW1lbnRbel1cblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoLTEpXG5cdFx0XHRcdFx0Y2VsbC5pbm5lclRleHQgPSB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0YWJsZVxuXHRcdH1cblxuXHRcdGNvbnN0IGZpbGxDb250YWluZXJzID0gKCRodG1sKSA9PiB7XG5cdFx0XHRibG9ja05vZGVzLmZvckVhY2goKGJsb2NrTm9kZSkgPT4ge1xuXHRcdFx0XHRibG9ja05vZGUuaW5uZXJIVE1MID0gbnVsbFxuXHRcdFx0XHRibG9ja05vZGUuYXBwZW5kQ2hpbGQoJGh0bWwpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGNvbnN0IGdldEVycm9yTWFya3VwID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKVxuXHRcdFx0Y29uc3QgZXJyb3JXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJylcblx0XHRcdGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcblx0XHRcdGVycm9yV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdlcnJvci13cmFwcGVyJylcblx0XHRcdGVycm9yV3JhcHBlci5hcHBlbmRDaGlsZChlcnJvcilcblxuXHRcdFx0cmV0dXJuIGVycm9yV3JhcHBlclxuXHRcdH1cblxuXHRcdGNvbnN0IGJsb2NrTm9kZXMgPSBmaW5kQmxvY2tzKClcblxuXHRcdGlmIChibG9ja05vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cblx0XHRhd2FpdCBpbml0KClcblxuXHRcdGxldCBodG1sID0gZ2V0RXJyb3JNYXJrdXAoKVxuXG5cdFx0dHJ5IHtcblx0XHRcdGh0bWwgPSBqc29uVG9UYWJsZSgpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luLmxvZ2dlci5lcnJvcihlcnJvcilcblx0XHR9XG5cblx0XHRmaWxsQ29udGFpbmVycyhodG1sKVxuXHR9XG5cblx0QmxvY2tJbml0LmNhbGwoQmxvY2tJbml0KVxufSkoKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU3R5bGVzXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvYmxvY2tzL2Jsb2NrLXJlbW90ZS1ob3N0LnNjc3NcIjtcblxuLy8gU2NyaXB0c1xuaW1wb3J0IFwiLi4vLi4vc2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanNcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=