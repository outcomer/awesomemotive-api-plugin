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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7O0FBRUE7QUFDQSxLQUFLLHFCQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUcscUJBQU07QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5SEQ7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ29EOztBQUVwRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC5zY3NzP2I2MjYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9fZW50cmllcy9ibG9ja3MvZW50cnktYmxvY2stcmVtb3RlLWhvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG47KGZ1bmN0aW9uICgpIHtcblx0YXN5bmMgZnVuY3Rpb24gQmxvY2tJbml0KCkge1xuXHRcdGxldCByZW1vdGVDb250ZW50ID0gW11cblxuXHRcdGNvbnN0IGZpbmRCbG9ja3MgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0Jy5kYXZpZC1ldi1hc20tYmxvY2tbZGF0YS1uYW1lPVwiZGF2aWQtZXYtYXNtL2Jsb2NrLXJlbW90ZS1ob3N0XCJdJ1xuXHRcdFx0KVxuXHRcdH1cblxuXHRcdGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdhY3Rpb24nLCBibG9ja05vZGVzWzBdLmRhdGFzZXQubmFtZSlcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFxuXHRcdFx0XHRcdCdub25jZScsXG5cdFx0XHRcdFx0Z2xvYmFsLkRhdmlkRXZBc21BcGlQbHVnaW4uY29uc3RhbnRzLnBsdWdpbk5vbmNlXG5cdFx0XHRcdClcblxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcdGdsb2JhbC5EYXZpZEV2QXNtQXBpUGx1Z2luLmNvbnN0YW50cy5hamF4VXJsLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdFx0Y2FjaGU6ICduby1jYWNoZScsXG5cdFx0XHRcdFx0XHRib2R5OiBmb3JtRGF0YSxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblxuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2sgJiYgMjAwID09PSByZXNwb25zZS5zdGF0dXMpIHtcblx0XHRcdFx0XHRjb25zdCBib2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdFx0XHRpZiAoMjAwICE9PSBib2R5LmRhdGEuY29kZSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGJvZHkuZGF0YS5jb250ZW50KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZW1vdGVDb250ZW50ID0gYm9keS5kYXRhLmNvbnRlbnRcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHR3aW5kb3cuRGF2aWRFdkFzbUFwaVBsdWdpbi5sb2dnZXIuZXJyb3IoZXJyb3IpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QganNvblRvVGFibGUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJylcblx0XHRcdGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coLTEpXG5cdFx0XHRjb25zdCB0aXRsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUSCcpXG5cdFx0XHR0aXRsZUNlbGwuaW5uZXJUZXh0ID0gcmVtb3RlQ29udGVudC50aXRsZVxuXHRcdFx0dGl0bGVDZWxsLmNvbFNwYW4gPSByZW1vdGVDb250ZW50LmRhdGEuaGVhZGVycy5sZW5ndGhcblx0XHRcdHJvdy5hcHBlbmRDaGlsZCh0aXRsZUNlbGwpXG5cblx0XHRcdC8vIGhlYWRlcnNcblx0XHRcdHJvdyA9IHRhYmxlLmluc2VydFJvdygtMSlcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3RlQ29udGVudC5kYXRhLmhlYWRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaGVhZGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RIJylcblx0XHRcdFx0aGVhZGVyQ2VsbC5pbm5lclRleHQgPSByZW1vdGVDb250ZW50LmRhdGEuaGVhZGVyc1tpXVxuXHRcdFx0XHRyb3cuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbClcblx0XHRcdH1cblxuXHRcdFx0Ly8gcm93c1xuXHRcdFx0Zm9yIChjb25zdCBpIGluIHJlbW90ZUNvbnRlbnQuZGF0YS5yb3dzKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSByZW1vdGVDb250ZW50LmRhdGEucm93c1tpXVxuXHRcdFx0XHRyb3cgPSB0YWJsZS5pbnNlcnRSb3coLTEpXG5cblx0XHRcdFx0Zm9yIChjb25zdCB6IGluIGVsZW1lbnQpIHtcblx0XHRcdFx0XHRsZXQgdmFsdWVcblx0XHRcdFx0XHRzd2l0Y2ggKHopIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2RhdGUnOlxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IG5ldyBEYXRlKGVsZW1lbnRbel0gKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJylcblx0XHRcdFx0XHRcdFx0YnJlYWtcblxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBlbGVtZW50W3pdXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKC0xKVxuXHRcdFx0XHRcdGNlbGwuaW5uZXJUZXh0ID0gdmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGFibGVcblx0XHR9XG5cblx0XHRjb25zdCBmaWxsQ29udGFpbmVycyA9ICgkaHRtbCkgPT4ge1xuXHRcdFx0YmxvY2tOb2Rlcy5mb3JFYWNoKChibG9ja05vZGUpID0+IHtcblx0XHRcdFx0YmxvY2tOb2RlLmlubmVySFRNTCA9IG51bGxcblx0XHRcdFx0YmxvY2tOb2RlLmFwcGVuZENoaWxkKCRodG1sKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRjb25zdCBnZXRFcnJvck1hcmt1cCA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJylcblx0XHRcdGNvbnN0IGVycm9yV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpXG5cdFx0XHRlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG5cdFx0XHRlcnJvcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZXJyb3Itd3JhcHBlcicpXG5cdFx0XHRlcnJvcldyYXBwZXIuYXBwZW5kQ2hpbGQoZXJyb3IpXG5cblx0XHRcdHJldHVybiBlcnJvcldyYXBwZXJcblx0XHR9XG5cblx0XHRjb25zdCBibG9ja05vZGVzID0gZmluZEJsb2NrcygpXG5cblx0XHRpZiAoYmxvY2tOb2Rlcy5sZW5ndGggPT09IDApIHJldHVyblxuXG5cdFx0YXdhaXQgaW5pdCgpXG5cblx0XHRsZXQgaHRtbCA9IGdldEVycm9yTWFya3VwKClcblxuXHRcdHRyeSB7XG5cdFx0XHRodG1sID0ganNvblRvVGFibGUoKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRnbG9iYWwuRGF2aWRFdkFzbUFwaVBsdWdpbi5sb2dnZXIuZXJyb3IoZXJyb3IpXG5cdFx0fVxuXG5cdFx0ZmlsbENvbnRhaW5lcnMoaHRtbClcblx0fVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J0RPTUNvbnRlbnRMb2FkZWQnLFxuXHRcdCgpID0+IEJsb2NrSW5pdC5jYWxsKEJsb2NrSW5pdCksXG5cdFx0ZmFsc2Vcblx0KVxufSkoKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU3R5bGVzXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvYmxvY2tzL2Jsb2NrLXJlbW90ZS1ob3N0LnNjc3NcIjtcblxuLy8gU2NyaXB0c1xuaW1wb3J0IFwiLi4vLi4vc2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QuanNcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=