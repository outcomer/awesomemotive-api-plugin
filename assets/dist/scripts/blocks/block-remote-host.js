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
						throw new Error(body.data.content)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7O0FBRUE7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUcscUJBQU07QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMUhEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNvRDs7QUFFcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3Quc2Nzcz9iNjI2Iiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvX2VudHJpZXMvYmxvY2tzL2VudHJ5LWJsb2NrLXJlbW90ZS1ob3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuOyhmdW5jdGlvbiAoKSB7XG5cdGFzeW5jIGZ1bmN0aW9uIEJsb2NrSW5pdCgpIHtcblx0XHRsZXQgcmVtb3RlQ29udGVudCA9IFtdXG5cblx0XHRjb25zdCBmaW5kQmxvY2tzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdCcuZGF2aWQtZXYtYXNtLWJsb2NrW2RhdGEtbmFtZT1cImRhdmlkLWV2LWFzbS9ibG9jay1yZW1vdGUtaG9zdFwiXSdcblx0XHRcdClcblx0XHR9XG5cblx0XHRjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnYWN0aW9uJywgYmxvY2tOb2Rlc1swXS5kYXRhc2V0Lm5hbWUpXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZChcblx0XHRcdFx0XHQnbm9uY2UnLFxuXHRcdFx0XHRcdGdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luLmNvbnN0YW50cy5wbHVnaW5Ob25jZVxuXHRcdFx0XHQpXG5cblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRnbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbi5jb25zdGFudHMuYWpheFVybCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRcdGNhY2hlOiAnbm8tY2FjaGUnLFxuXHRcdFx0XHRcdFx0Ym9keTogZm9ybURhdGEsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rICYmIDIwMCA9PT0gcmVzcG9uc2Uuc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRcdFx0aWYgKDIwMCAhPT0gYm9keS5kYXRhLmNvZGUpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihib2R5LmRhdGEuY29udGVudClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVtb3RlQ29udGVudCA9IGJvZHkuZGF0YS5jb250ZW50XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0d2luZG93LkRhdmlkRXZBc21BcGlQbHVnaW4ubG9nZ2VyLmVycm9yKGVycm9yKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGpzb25Ub1RhYmxlID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUQUJMRScpXG5cdFx0XHRsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KC0xKVxuXHRcdFx0Y29uc3QgdGl0bGVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEgnKVxuXHRcdFx0dGl0bGVDZWxsLmlubmVyVGV4dCA9IHJlbW90ZUNvbnRlbnQudGl0bGVcblx0XHRcdHRpdGxlQ2VsbC5jb2xTcGFuID0gcmVtb3RlQ29udGVudC5kYXRhLmhlYWRlcnMubGVuZ3RoXG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQodGl0bGVDZWxsKVxuXG5cdFx0XHQvLyBoZWFkZXJzXG5cdFx0XHRyb3cgPSB0YWJsZS5pbnNlcnRSb3coLTEpXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlbW90ZUNvbnRlbnQuZGF0YS5oZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGhlYWRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUSCcpXG5cdFx0XHRcdGhlYWRlckNlbGwuaW5uZXJUZXh0ID0gcmVtb3RlQ29udGVudC5kYXRhLmhlYWRlcnNbaV1cblx0XHRcdFx0cm93LmFwcGVuZENoaWxkKGhlYWRlckNlbGwpXG5cdFx0XHR9XG5cblx0XHRcdC8vIHJvd3Ncblx0XHRcdGZvciAoY29uc3QgaSBpbiByZW1vdGVDb250ZW50LmRhdGEucm93cykge1xuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gcmVtb3RlQ29udGVudC5kYXRhLnJvd3NbaV1cblx0XHRcdFx0cm93ID0gdGFibGUuaW5zZXJ0Um93KC0xKVxuXG5cdFx0XHRcdGZvciAoY29uc3QgeiBpbiBlbGVtZW50KSB7XG5cdFx0XHRcdFx0bGV0IHZhbHVlXG5cdFx0XHRcdFx0c3dpdGNoICh6KSB7XG5cdFx0XHRcdFx0XHRjYXNlICdkYXRlJzpcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBuZXcgRGF0ZShlbGVtZW50W3pdICogMTAwMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycpXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gZWxlbWVudFt6XVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgtMSlcblx0XHRcdFx0XHRjZWxsLmlubmVyVGV4dCA9IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRhYmxlXG5cdFx0fVxuXG5cdFx0Y29uc3QgZmlsbENvbnRhaW5lcnMgPSAoJGh0bWwpID0+IHtcblx0XHRcdGJsb2NrTm9kZXMuZm9yRWFjaCgoYmxvY2tOb2RlKSA9PiB7XG5cdFx0XHRcdGJsb2NrTm9kZS5pbm5lckhUTUwgPSBudWxsXG5cdFx0XHRcdGJsb2NrTm9kZS5hcHBlbmRDaGlsZCgkaHRtbClcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgZ2V0RXJyb3JNYXJrdXAgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpXG5cdFx0XHRjb25zdCBlcnJvcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKVxuXHRcdFx0ZXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuXHRcdFx0ZXJyb3JXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLXdyYXBwZXInKVxuXHRcdFx0ZXJyb3JXcmFwcGVyLmFwcGVuZENoaWxkKGVycm9yKVxuXG5cdFx0XHRyZXR1cm4gZXJyb3JXcmFwcGVyXG5cdFx0fVxuXG5cdFx0Y29uc3QgYmxvY2tOb2RlcyA9IGZpbmRCbG9ja3MoKVxuXG5cdFx0aWYgKGJsb2NrTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuXHRcdGF3YWl0IGluaXQoKVxuXG5cdFx0bGV0IGh0bWwgPSBnZXRFcnJvck1hcmt1cCgpXG5cblx0XHR0cnkge1xuXHRcdFx0aHRtbCA9IGpzb25Ub1RhYmxlKClcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Z2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4ubG9nZ2VyLmVycm9yKGVycm9yKVxuXHRcdH1cblxuXHRcdGZpbGxDb250YWluZXJzKGh0bWwpXG5cdH1cblxuXHRCbG9ja0luaXQuY2FsbChCbG9ja0luaXQpXG59KSgpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBTdHlsZXNcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3Quc2Nzc1wiO1xuXG4vLyBTY3JpcHRzXG5pbXBvcnQgXCIuLi8uLi9zY3JpcHRzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC5qc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==