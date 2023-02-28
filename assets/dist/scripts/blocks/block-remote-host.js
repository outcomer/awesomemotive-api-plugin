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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7O0FBRUE7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUcscUJBQU07QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMUhEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNvRDs7QUFFcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3Quc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL19lbnRyaWVzL2Jsb2Nrcy9lbnRyeS1ibG9jay1yZW1vdGUtaG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbjsoZnVuY3Rpb24gKCkge1xuXHRhc3luYyBmdW5jdGlvbiBCbG9ja0luaXQoKSB7XG5cdFx0bGV0IHJlbW90ZUNvbnRlbnQgPSBbXVxuXG5cdFx0Y29uc3QgZmluZEJsb2NrcyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHQnLmRhdmlkLWV2LWFzbS1ibG9ja1tkYXRhLW5hbWU9XCJkYXZpZC1ldi1hc20vYmxvY2stcmVtb3RlLWhvc3RcIl0nXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2FjdGlvbicsIGJsb2NrTm9kZXNbMF0uZGF0YXNldC5uYW1lKVxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoXG5cdFx0XHRcdFx0J25vbmNlJyxcblx0XHRcdFx0XHRnbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbi5jb25zdGFudHMucGx1Z2luTm9uY2Vcblx0XHRcdFx0KVxuXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRcdFx0Z2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4uY29uc3RhbnRzLmFqYXhVcmwsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0XHRjYWNoZTogJ25vLWNhY2hlJyxcblx0XHRcdFx0XHRcdGJvZHk6IGZvcm1EYXRhLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZS5vayAmJiAyMDAgPT09IHJlc3BvbnNlLnN0YXR1cykge1xuXHRcdFx0XHRcdGNvbnN0IGJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0XHRcdGlmICgyMDAgIT09IGJvZHkuZGF0YS5jb2RlKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYm9keS5kYXRhKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZW1vdGVDb250ZW50ID0gYm9keS5kYXRhLmNvbnRlbnRcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHR3aW5kb3cuRGF2aWRFdkFzbUFwaVBsdWdpbi5sb2dnZXIuZXJyb3IoZXJyb3IpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QganNvblRvVGFibGUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJylcblx0XHRcdGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coLTEpXG5cdFx0XHRjb25zdCB0aXRsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUSCcpXG5cdFx0XHR0aXRsZUNlbGwuaW5uZXJUZXh0ID0gcmVtb3RlQ29udGVudC50aXRsZVxuXHRcdFx0dGl0bGVDZWxsLmNvbFNwYW4gPSByZW1vdGVDb250ZW50LmRhdGEuaGVhZGVycy5sZW5ndGhcblx0XHRcdHJvdy5hcHBlbmRDaGlsZCh0aXRsZUNlbGwpXG5cblx0XHRcdC8vIGhlYWRlcnNcblx0XHRcdHJvdyA9IHRhYmxlLmluc2VydFJvdygtMSlcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3RlQ29udGVudC5kYXRhLmhlYWRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaGVhZGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RIJylcblx0XHRcdFx0aGVhZGVyQ2VsbC5pbm5lclRleHQgPSByZW1vdGVDb250ZW50LmRhdGEuaGVhZGVyc1tpXVxuXHRcdFx0XHRyb3cuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbClcblx0XHRcdH1cblxuXHRcdFx0Ly8gcm93c1xuXHRcdFx0Zm9yIChjb25zdCBpIGluIHJlbW90ZUNvbnRlbnQuZGF0YS5yb3dzKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSByZW1vdGVDb250ZW50LmRhdGEucm93c1tpXVxuXHRcdFx0XHRyb3cgPSB0YWJsZS5pbnNlcnRSb3coLTEpXG5cblx0XHRcdFx0Zm9yIChjb25zdCB6IGluIGVsZW1lbnQpIHtcblx0XHRcdFx0XHRsZXQgdmFsdWVcblx0XHRcdFx0XHRzd2l0Y2ggKHopIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2RhdGUnOlxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IG5ldyBEYXRlKGVsZW1lbnRbel0gKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJylcblx0XHRcdFx0XHRcdFx0YnJlYWtcblxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBlbGVtZW50W3pdXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKC0xKVxuXHRcdFx0XHRcdGNlbGwuaW5uZXJUZXh0ID0gdmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGFibGVcblx0XHR9XG5cblx0XHRjb25zdCBmaWxsQ29udGFpbmVycyA9ICgkaHRtbCkgPT4ge1xuXHRcdFx0YmxvY2tOb2Rlcy5mb3JFYWNoKChibG9ja05vZGUpID0+IHtcblx0XHRcdFx0YmxvY2tOb2RlLmlubmVySFRNTCA9IG51bGxcblx0XHRcdFx0YmxvY2tOb2RlLmFwcGVuZENoaWxkKCRodG1sKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRjb25zdCBnZXRFcnJvck1hcmt1cCA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJylcblx0XHRcdGNvbnN0IGVycm9yV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpXG5cdFx0XHRlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG5cdFx0XHRlcnJvcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZXJyb3Itd3JhcHBlcicpXG5cdFx0XHRlcnJvcldyYXBwZXIuYXBwZW5kQ2hpbGQoZXJyb3IpXG5cblx0XHRcdHJldHVybiBlcnJvcldyYXBwZXJcblx0XHR9XG5cblx0XHRjb25zdCBibG9ja05vZGVzID0gZmluZEJsb2NrcygpXG5cblx0XHRpZiAoYmxvY2tOb2Rlcy5sZW5ndGggPT09IDApIHJldHVyblxuXG5cdFx0YXdhaXQgaW5pdCgpXG5cblx0XHRsZXQgaHRtbCA9IGdldEVycm9yTWFya3VwKClcblxuXHRcdHRyeSB7XG5cdFx0XHRodG1sID0ganNvblRvVGFibGUoKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRnbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbi5sb2dnZXIuZXJyb3IoZXJyb3IpXG5cdFx0fVxuXG5cdFx0ZmlsbENvbnRhaW5lcnMoaHRtbClcblx0fVxuXG5cdEJsb2NrSW5pdC5jYWxsKEJsb2NrSW5pdClcbn0pKClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFN0eWxlc1xuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC5zY3NzXCI7XG5cbi8vIFNjcmlwdHNcbmltcG9ydCBcIi4uLy4uL3NjcmlwdHMvYmxvY2tzL2Jsb2NrLXJlbW90ZS1ob3N0LmpzXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9