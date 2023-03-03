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

		const fillContainers = (blockHtml) => {
			blockNodes.forEach((blockNode) => {
				blockNode.innerHTML = null
				const atts = JSON.parse(blockNode.dataset.atts)
				if ('undefined' !== typeof atts.blockTitle && '' !== atts.blockTitle) {
					const H4 = document.createElement('H4')
					H4.innerText = atts.blockTitle
					blockNode.appendChild(H4)
				}
				blockNode.appendChild(blockHtml)
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

		let blockHtml = getErrorMarkup()

		try {
			blockHtml = jsonToTable()
		} catch (error) {
			__webpack_require__.g.DavidEvAsmApiPlugin.logger.error(error)
		}

		fillContainers(blockHtml)
	}

	document.addEventListener(
		'DOMContentLoaded',
		() => BlockInit.call(BlockInit),
		false
	)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7O0FBRUE7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUcscUJBQU07QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNwSUQ7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ29EOztBQUVwRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC5zY3NzP2I2MjYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9fZW50cmllcy9ibG9ja3MvZW50cnktYmxvY2stcmVtb3RlLWhvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG47KGZ1bmN0aW9uICgpIHtcblx0YXN5bmMgZnVuY3Rpb24gQmxvY2tJbml0KCkge1xuXHRcdGxldCByZW1vdGVDb250ZW50ID0gW11cblxuXHRcdGNvbnN0IGZpbmRCbG9ja3MgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0Jy5kYXZpZC1ldi1hc20tYmxvY2tbZGF0YS1uYW1lPVwiZGF2aWQtZXYtYXNtL2Jsb2NrLXJlbW90ZS1ob3N0XCJdJ1xuXHRcdFx0KVxuXHRcdH1cblxuXHRcdGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdhY3Rpb24nLCBibG9ja05vZGVzWzBdLmRhdGFzZXQubmFtZSlcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFxuXHRcdFx0XHRcdCdub25jZScsXG5cdFx0XHRcdFx0Z2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4uY29uc3RhbnRzLnBsdWdpbk5vbmNlXG5cdFx0XHRcdClcblxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcdGdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luLmNvbnN0YW50cy5hamF4VXJsLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdFx0Y2FjaGU6ICduby1jYWNoZScsXG5cdFx0XHRcdFx0XHRib2R5OiBmb3JtRGF0YSxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblxuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2sgJiYgMjAwID09PSByZXNwb25zZS5zdGF0dXMpIHtcblx0XHRcdFx0XHRjb25zdCBib2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdFx0XHRpZiAoMjAwICE9PSBib2R5LmRhdGEuY29kZSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGJvZHkuZGF0YS5jb250ZW50KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZW1vdGVDb250ZW50ID0gYm9keS5kYXRhLmNvbnRlbnRcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHR3aW5kb3cuRGF2aWRFdkFzbUFwaVBsdWdpbi5sb2dnZXIuZXJyb3IoZXJyb3IpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QganNvblRvVGFibGUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJylcblx0XHRcdGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coLTEpXG5cdFx0XHRjb25zdCB0aXRsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUSCcpXG5cdFx0XHR0aXRsZUNlbGwuaW5uZXJUZXh0ID0gcmVtb3RlQ29udGVudC50aXRsZVxuXHRcdFx0dGl0bGVDZWxsLmNvbFNwYW4gPSByZW1vdGVDb250ZW50LmRhdGEuaGVhZGVycy5sZW5ndGhcblx0XHRcdHJvdy5hcHBlbmRDaGlsZCh0aXRsZUNlbGwpXG5cblx0XHRcdC8vIGhlYWRlcnNcblx0XHRcdHJvdyA9IHRhYmxlLmluc2VydFJvdygtMSlcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3RlQ29udGVudC5kYXRhLmhlYWRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaGVhZGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RIJylcblx0XHRcdFx0aGVhZGVyQ2VsbC5pbm5lclRleHQgPSByZW1vdGVDb250ZW50LmRhdGEuaGVhZGVyc1tpXVxuXHRcdFx0XHRyb3cuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbClcblx0XHRcdH1cblxuXHRcdFx0Ly8gcm93c1xuXHRcdFx0Zm9yIChjb25zdCBpIGluIHJlbW90ZUNvbnRlbnQuZGF0YS5yb3dzKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSByZW1vdGVDb250ZW50LmRhdGEucm93c1tpXVxuXHRcdFx0XHRyb3cgPSB0YWJsZS5pbnNlcnRSb3coLTEpXG5cblx0XHRcdFx0Zm9yIChjb25zdCB6IGluIGVsZW1lbnQpIHtcblx0XHRcdFx0XHRsZXQgdmFsdWVcblx0XHRcdFx0XHRzd2l0Y2ggKHopIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2RhdGUnOlxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IG5ldyBEYXRlKGVsZW1lbnRbel0gKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJylcblx0XHRcdFx0XHRcdFx0YnJlYWtcblxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBlbGVtZW50W3pdXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKC0xKVxuXHRcdFx0XHRcdGNlbGwuaW5uZXJUZXh0ID0gdmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGFibGVcblx0XHR9XG5cblx0XHRjb25zdCBmaWxsQ29udGFpbmVycyA9IChibG9ja0h0bWwpID0+IHtcblx0XHRcdGJsb2NrTm9kZXMuZm9yRWFjaCgoYmxvY2tOb2RlKSA9PiB7XG5cdFx0XHRcdGJsb2NrTm9kZS5pbm5lckhUTUwgPSBudWxsXG5cdFx0XHRcdGNvbnN0IGF0dHMgPSBKU09OLnBhcnNlKGJsb2NrTm9kZS5kYXRhc2V0LmF0dHMpXG5cdFx0XHRcdGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGF0dHMuYmxvY2tUaXRsZSAmJiAnJyAhPT0gYXR0cy5ibG9ja1RpdGxlKSB7XG5cdFx0XHRcdFx0Y29uc3QgSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdINCcpXG5cdFx0XHRcdFx0SDQuaW5uZXJUZXh0ID0gYXR0cy5ibG9ja1RpdGxlXG5cdFx0XHRcdFx0YmxvY2tOb2RlLmFwcGVuZENoaWxkKEg0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrTm9kZS5hcHBlbmRDaGlsZChibG9ja0h0bWwpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGNvbnN0IGdldEVycm9yTWFya3VwID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKVxuXHRcdFx0Y29uc3QgZXJyb3JXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJylcblx0XHRcdGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcblx0XHRcdGVycm9yV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdlcnJvci13cmFwcGVyJylcblx0XHRcdGVycm9yV3JhcHBlci5hcHBlbmRDaGlsZChlcnJvcilcblxuXHRcdFx0cmV0dXJuIGVycm9yV3JhcHBlclxuXHRcdH1cblxuXHRcdGNvbnN0IGJsb2NrTm9kZXMgPSBmaW5kQmxvY2tzKClcblxuXHRcdGlmIChibG9ja05vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cblx0XHRhd2FpdCBpbml0KClcblxuXHRcdGxldCBibG9ja0h0bWwgPSBnZXRFcnJvck1hcmt1cCgpXG5cblx0XHR0cnkge1xuXHRcdFx0YmxvY2tIdG1sID0ganNvblRvVGFibGUoKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRnbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbi5sb2dnZXIuZXJyb3IoZXJyb3IpXG5cdFx0fVxuXG5cdFx0ZmlsbENvbnRhaW5lcnMoYmxvY2tIdG1sKVxuXHR9XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnRE9NQ29udGVudExvYWRlZCcsXG5cdFx0KCkgPT4gQmxvY2tJbml0LmNhbGwoQmxvY2tJbml0KSxcblx0XHRmYWxzZVxuXHQpXG59KSgpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBTdHlsZXNcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3Quc2Nzc1wiO1xuXG4vLyBTY3JpcHRzXG5pbXBvcnQgXCIuLi8uLi9zY3JpcHRzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC5qc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==