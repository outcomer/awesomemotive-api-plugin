/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/blocks/block-remote-host-editor.jsx":
/*!*********************************************************!*\
  !*** ./src/scripts/blocks/block-remote-host-editor.jsx ***!
  \*********************************************************/
/***/ (function() {

;
(function (wp) {
  const {
    registerBlockType
  } = wp.blocks;
  const {
    Fragment,
    useState,
    useEffect
  } = wp.element;
  const {
    apiFetch
  } = wp;
  const {
    BlockControls,
    BlockIcon
  } = wp.blockEditor;
  const {
    __
  } = wp.i18n;
  const {
    Flex,
    FlexItem,
    Placeholder,
    ToolbarGroup,
    ToolbarButton,
    Spinner,
    __experimentalSpacer: Spacer,
    __experimentalInputControl: InputControl,
    __experimentalHeading: Heading
  } = wp.components;

  /* eslint-disable max-len */
  const exampleImageData = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 274 165",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m127.03842,33.42546c-20.95784,0 -37.99545,17.03761 -37.99545,37.99545c0,20.95784 17.03761,37.99545 37.99545,37.99545c8.29727,0 15.95619,-2.70197 22.21057,-7.2289l29.38711,29.38709l6.32092,-6.32092l-29.11645,-29.11647c5.71456,-6.65052 9.19329,-15.27632 9.19329,-24.71624c0,-20.95784 -17.03761,-37.99545 -37.99545,-37.99545zm0,4.47005c18.54205,0 33.5254,14.98335 33.5254,33.5254c0,18.54205 -14.98335,33.5254 -33.5254,33.5254c-18.54205,0 -33.5254,-14.98335 -33.5254,-33.5254c0,-18.54205 14.98335,-33.5254 33.5254,-33.5254zm-17.88021,29.05534a4.47005,4.47005 0 0 0 -4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,-4.47005a4.47005,4.47005 0 0 0 -4.47005,-4.47005zm17.88021,0a4.47005,4.47005 0 0 0 -4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,-4.47005a4.47005,4.47005 0 0 0 -4.47005,-4.47005zm17.88021,0a4.47005,4.47005 0 0 0 -4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,4.47005a4.47005,4.47005 0 0 0 4.47005,-4.47005a4.47005,4.47005 0 0 0 -4.47005,-4.47005z",
    fill: "black",
    id: "svg_1"
  }));
  const icon = /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "m10.26818,0.68033c-0.23253,0 -0.43057,0.16886 -0.46806,0.39855l-0.45323,2.77778c-0.56851,0.16324 -1.11543,0.38776 -1.63126,0.67012l-2.29211,-1.63775c-0.1884,-0.13477 -0.448,-0.11367 -0.61172,0.05005l-1.84537,1.84444c-0.16277,0.16277 -0.18523,0.41962 -0.05283,0.60802l1.61273,2.30694c-0.28663,0.51963 -0.5156,1.06915 -0.68216,1.64146l-2.76666,0.46157c-0.22873,0.03796 -0.39669,0.23508 -0.39669,0.46714l0,2.61002c0,0.23016 0.16477,0.42727 0.39113,0.46713l2.76759,0.49123c0.16562,0.57041 0.39364,1.1204 0.68216,1.64146l-1.63311,2.28377c-0.13477,0.18887 -0.11274,0.44753 0.05098,0.61173l1.84444,1.84722c0.16324,0.16324 0.42104,0.18476 0.60802,0.05283l2.31157,-1.61828c0.51963,0.28568 1.06696,0.51148 1.63404,0.67567l0.46343,2.78149c0.03796,0.22873 0.23508,0.39669 0.46714,0.39669l2.61002,0c0.22968,0 0.4268,-0.16477 0.46713,-0.39113l0.1242,-0.70163c-0.30086,-0.21972 -0.57893,-0.46677 -0.83139,-0.73963l-0.15756,0.88329l-1.80922,0l-0.44767,-2.68695c-0.03085,-0.18745 -0.16994,-0.33723 -0.35406,-0.38279c-0.68383,-0.16847 -1.33895,-0.43913 -1.94732,-0.80358c-0.16135,-0.09681 -0.36345,-0.08964 -0.51626,0.01761l-2.23187,1.5636l-1.27906,-1.27998l1.57658,-2.20591c0.1101,-0.15423 0.11862,-0.35952 0.02039,-0.52182c-0.36778,-0.6079 -0.64156,-1.26526 -0.81193,-1.95288c-0.04556,-0.18175 -0.19356,-0.31994 -0.37816,-0.35221l-2.67212,-0.47362l0,-1.81014l2.67027,-0.44489c0.1865,-0.03085 0.33676,-0.16996 0.38279,-0.35313c0.17321,-0.69142 0.44557,-1.34783 0.81192,-1.95288c0.09728,-0.16087 0.09057,-0.36435 -0.01668,-0.51811l-1.55897,-2.22909l1.27999,-1.27906l2.2124,1.58121c0.15328,0.1101 0.35767,0.11955 0.51996,0.02132c0.60315,-0.36208 1.25873,-0.63094 1.94825,-0.79988c0.18507,-0.04556 0.32414,-0.19672 0.35499,-0.38464l0.43747,-2.68324l1.80829,0l0.47177,2.69807c0.03227,0.18507 0.16998,0.33352 0.35221,0.37908c0.68383,0.17036 1.33765,0.44329 1.94176,0.80821c0.16277,0.09871 0.36804,0.08973 0.52275,-0.02132l2.21981,-1.59604l1.27906,1.27813l-1.58121,2.25411c-0.1082,0.15328 -0.11487,0.35539 -0.01854,0.51626c0.36018,0.59936 0.62856,1.25011 0.79988,1.93156c0.04603,0.18413 0.19719,0.32276 0.38464,0.35313l2.70827,0.44303l0,1.80829l-0.88514,0.15478c0.27381,0.25293 0.52177,0.53188 0.74148,0.83417l0.69978,-0.12327c0.22731,-0.03986 0.39206,-0.23698 0.39206,-0.46714l0,-2.61002c0,-0.23253 -0.16886,-0.43057 -0.39855,-0.46806l-2.80374,-0.45879c-0.16467,-0.56282 -0.38871,-1.10347 -0.67012,-1.61551l1.63683,-2.33289c0.1324,-0.1884 0.10994,-0.44525 -0.05283,-0.60802l-1.84629,-1.84537c-0.16419,-0.1642 -0.42378,-0.18532 -0.61265,-0.04913l-2.29767,1.65165c-0.51678,-0.28568 -1.0628,-0.51146 -1.62941,-0.6766l-0.48845,-2.79446c-0.04034,-0.22731 -0.23791,-0.39299 -0.46806,-0.39299l-2.61002,0zm1.32633,7.11824c-2.09324,0 -3.79639,1.70316 -3.79639,3.79639c0,1.99738 1.55149,3.63585 3.51185,3.78249c0.08447,-0.32459 0.19605,-0.63853 0.33367,-0.93798c-0.01661,0 -0.03252,0.00278 -0.04913,0.00278c-1.57028,0 -2.8473,-1.27701 -2.8473,-2.8473c0,-1.57028 1.27701,-2.8473 2.8473,-2.8473c1.57028,0 2.8473,1.27701 2.8473,2.8473c0,0.01661 -0.00278,0.03252 -0.00278,0.04913c0.29944,-0.13762 0.61338,-0.2492 0.93798,-0.33367c-0.14664,-1.96036 -1.78511,-3.51185 -3.78249,-3.51185zm5.22004,4.27094c-2.61524,0 -4.74549,2.13025 -4.74549,4.74549c0,2.61524 2.13025,4.74549 4.74549,4.74549c1.13726,0 2.18169,-0.40385 3.00023,-1.07422l2.83339,2.83339l0.67104,-0.67104l-2.83339,-2.83339c0.67038,-0.81854 1.07422,-1.86297 1.07422,-3.00023c0,-2.61524 -2.13025,-4.74549 -4.74549,-4.74549zm0,0.9491c2.10231,0 3.79639,1.69408 3.79639,3.79639c0,2.10231 -1.69408,3.79639 -3.79639,3.79639c-2.10231,0 -3.79639,-1.69408 -3.79639,-3.79639c0,-2.10231 1.69408,-3.79639 3.79639,-3.79639z",
    fill: "black",
    id: "svg_1"
  })));
  /* eslint-disable max-len */

  let fetchController;
  let fetchError;
  let remoteContent = [];
  function BlockHandler(props) {
    const {
      attributes,
      setAttributes,
      className,
      name
    } = props;
    const [editMode, setEditMode] = useState(true);
    const [termsFetched, setTermsFetched] = useState();
    const resetState = () => {
      setEditMode(true);
      setTermsFetched(null);
    };
    const notice = () => {
      if (fetchError) {
        return /*#__PURE__*/React.createElement("p", null, __('Can not render block. Browser console provided with more details.', 'david-ev-asm-api-plugin'));
      }
    };
    const jsonToTable = (title, theadData, tbodyData) => {
      const mapping = {
        ID: 'id',
        'First Name': 'fname',
        'Last Name': 'lname',
        Email: 'email',
        Date: 'date'
      };
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Heading, {
        level: "4"
      }, title), /*#__PURE__*/React.createElement(Spacer, {
        marginTop: 1,
        style: {
          width: '100%'
        }
      }), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, theadData.map(heading => {
        return /*#__PURE__*/React.createElement("th", {
          key: heading
        }, heading);
      }))), /*#__PURE__*/React.createElement("tbody", null, tbodyData.map((row, index) => {
        return /*#__PURE__*/React.createElement("tr", {
          key: index
        }, theadData.map(key => {
          let value;
          if ('Date' === key) {
            value = new Date(row[mapping[key]] * 1000).toLocaleDateString('en-US');
          } else {
            value = row[mapping[key]];
          }
          return /*#__PURE__*/React.createElement("td", {
            key: row[mapping[key]]
          }, value);
        }));
      }))));
    };
    const getExample = () => {
      return exampleImageData;
    };
    const getBlockControls = () => {
      return /*#__PURE__*/React.createElement(BlockControls, {
        key: "block-controls"
      }, /*#__PURE__*/React.createElement(ToolbarGroup, {
        label: __('Options', 'david-ev-asm-api-plugin')
      }, /*#__PURE__*/React.createElement(ToolbarButton, {
        label: editMode ? __('Preview', 'david-ev-asm-api-plugin') : __('Edit', 'david-ev-asm-api-plugin'),
        icon: editMode ? 'visibility' : 'edit',
        onClick: () => {
          if (!editMode) {
            fetchController?.abort();
          }
          setTermsFetched(!editMode);
          setEditMode(!editMode);
        }
      })));
    };
    const getBlockEdit = () => {
      const block = wp.blocks.getBlockType(name);
      return /*#__PURE__*/React.createElement(Placeholder, {
        key: "block-editor",
        icon: /*#__PURE__*/React.createElement(BlockIcon, {
          icon: icon
        }),
        label: block.title,
        className: className,
        instructions: __('Block does not provide any specific options.', 'david-ev-asm-api-plugin')
      }, /*#__PURE__*/React.createElement("div", {
        className: "editor-inner"
      }, /*#__PURE__*/React.createElement(InputControl, {
        label: __('But you may set block heading', 'david-ev-asm-api-plugin'),
        labelPosition: "top",
        value: attributes.blockTitle,
        onChange: nextValue => {
          return setAttributes({
            blockTitle: nextValue
          });
        }
      })), /*#__PURE__*/React.createElement(Spacer, {
        marginTop: 1,
        style: {
          width: '100%'
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "editor-errors"
      }, notice()));
    };
    const getBlockPreview = () => {
      if (termsFetched) {
        try {
          const content = jsonToTable(remoteContent.title, remoteContent.data.headers, Object.values(remoteContent.data.rows));
          return /*#__PURE__*/React.createElement("div", {
            className: `preview-inner ${window.DavidEvAsmApiPlugin.constants.cssNamespaces.front}`,
            key: "block-preview"
          }, content);
        } catch (error) {
          window.DavidEvAsmApiPlugin.logger.error(error);
          fetchError = true;
          resetState();
        }
      }
      return /*#__PURE__*/React.createElement(Placeholder, {
        className: "preview-inner",
        key: "block-preview"
      }, /*#__PURE__*/React.createElement(Flex, {
        style: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(FlexItem, null, /*#__PURE__*/React.createElement(Spinner, null))));
    };
    useEffect(async () => {
      let isMounted = true;
      if (!termsFetched && !editMode && !attributes.isExample) {
        try {
          if (isMounted) {
            fetchController = typeof AbortController === 'undefined' ? undefined : new AbortController();
            const response = await apiFetch({
              path: name.split('/').join('/v1/'),
              method: 'GET',
              signal: fetchController?.signal
            });
            if (200 === response.code) {
              remoteContent = response.content;
              setTermsFetched(true);
              fetchError = false;
              return;
            }
            throw new Error(response.content);
          }
        } catch (error) {
          if ('AbortError' === error.name) {
            window.DavidEvAsmApiPlugin.logger.warn(__('Request aborted by user', 'david-ev-asm-api-plugin'));
            fetchError = false;
          } else {
            window.DavidEvAsmApiPlugin.logger.error(error);
            fetchError = true;
          }
          resetState();
        }
      }
      return () => {
        isMounted = false;
      };
    }, [termsFetched]);
    const render = () => {
      if (attributes.isExample) {
        return getExample();
      }
      const classes = [className];
      const content = [getBlockControls()];
      if (editMode) {
        content.push(getBlockEdit());
      } else {
        content.push(getBlockPreview());
      }
      return /*#__PURE__*/React.createElement("div", {
        className: classes.join(' ')
      }, content);
    };
    return render();
  }
  registerBlockType('david-ev-asm/block-remote-host', {
    title: __('Remote host fetcher (click preview button)', 'david-ev-asm-api-plugin'),
    description: __('Interacts with 3rd party host via WP block.', 'david-ev-asm-api-plugin'),
    icon,
    category: 'david-ev-asm-plugin-blocks',
    keywords: ['ASM'],
    styles: [],
    variations: [],
    attributes: {
      isExample: {
        type: 'boolean',
        default: false
      },
      blockTitle: {
        type: 'string',
        default: ''
      }
    },
    example: {
      attributes: {
        isExample: true
      }
    },
    supports: {
      multiple: true
    },
    edit: BlockHandler,
    save(props) {
      return null;
    }
  });
})(window.wp);

/***/ }),

/***/ "./src/styles/blocks/block-remote-host-editor.scss":
/*!*********************************************************!*\
  !*** ./src/styles/blocks/block-remote-host-editor.scss ***!
  \*********************************************************/
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
/*!***************************************************************!*\
  !*** ./src/_entries/blocks/entry-block-remote-host-editor.js ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_blocks_block_remote_host_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/blocks/block-remote-host-editor.scss */ "./src/styles/blocks/block-remote-host-editor.scss");
/* harmony import */ var _scripts_blocks_block_remote_host_editor_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/blocks/block-remote-host-editor.jsx */ "./src/scripts/blocks/block-remote-host-editor.jsx");
/* harmony import */ var _scripts_blocks_block_remote_host_editor_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_blocks_block_remote_host_editor_jsx__WEBPACK_IMPORTED_MODULE_1__);
// Styles


// Scripts

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QtZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQUMsQ0FBQyxVQUFVQSxFQUFFLEVBQUU7RUFDZixNQUFNO0lBQUVDO0VBQWtCLENBQUMsR0FBR0QsRUFBRSxDQUFDRSxNQUFNO0VBQ3ZDLE1BQU07SUFBRUMsUUFBUTtJQUFFQyxRQUFRO0lBQUVDO0VBQVUsQ0FBQyxHQUFHTCxFQUFFLENBQUNNLE9BQU87RUFDcEQsTUFBTTtJQUFFQztFQUFTLENBQUMsR0FBR1AsRUFBRTtFQUN2QixNQUFNO0lBQUVRLGFBQWE7SUFBRUM7RUFBVSxDQUFDLEdBQUdULEVBQUUsQ0FBQ1UsV0FBVztFQUNuRCxNQUFNO0lBQUVDO0VBQUcsQ0FBQyxHQUFHWCxFQUFFLENBQUNZLElBQUk7RUFDdEIsTUFBTTtJQUNMQyxJQUFJO0lBQ0pDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsT0FBTztJQUNQQyxvQkFBb0IsRUFBRUMsTUFBTTtJQUM1QkMsMEJBQTBCLEVBQUVDLFlBQVk7SUFDeENDLHFCQUFxQixFQUFFQztFQUN4QixDQUFDLEdBQUd4QixFQUFFLENBQUN5QixVQUFVOztFQUVqQjtFQUNBLE1BQU1DLGdCQUFnQixnQkFDckJDLEtBQUEsQ0FBQUMsYUFBQTtJQUFLQyxPQUFPLEVBQUMsYUFBYTtJQUFDQyxLQUFLLEVBQUM7RUFBNEIsZ0JBQzVESCxLQUFBLENBQUFDLGFBQUE7SUFDQ0csQ0FBQyxFQUFDLHlnQ0FBeWdDO0lBQzNnQ0MsSUFBSSxFQUFDLE9BQU87SUFDWkMsRUFBRSxFQUFDO0VBQU8sRUFDVCxDQUVIO0VBQ0QsTUFBTUMsSUFBSSxnQkFDVFAsS0FBQSxDQUFBQyxhQUFBO0lBQUtPLEtBQUssRUFBQyxJQUFJO0lBQUNDLE1BQU0sRUFBQyxJQUFJO0lBQUNOLEtBQUssRUFBQztFQUE0QixnQkFDN0RILEtBQUEsQ0FBQUMsYUFBQSx5QkFDQ0QsS0FBQSxD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QTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDMkQ7O0FBRTNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmxvY2tzL2Jsb2NrLXJlbW90ZS1ob3N0LWVkaXRvci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ibG9ja3MvYmxvY2stcmVtb3RlLWhvc3QtZWRpdG9yLnNjc3M/ZmEwOSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL19lbnRyaWVzL2Jsb2Nrcy9lbnRyeS1ibG9jay1yZW1vdGUtaG9zdC1lZGl0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAod3ApIHtcblx0Y29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzXG5cdGNvbnN0IHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcblx0Y29uc3QgeyBhcGlGZXRjaCB9ID0gd3Bcblx0Y29uc3QgeyBCbG9ja0NvbnRyb2xzLCBCbG9ja0ljb24gfSA9IHdwLmJsb2NrRWRpdG9yXG5cdGNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblx0Y29uc3Qge1xuXHRcdEZsZXgsXG5cdFx0RmxleEl0ZW0sXG5cdFx0UGxhY2Vob2xkZXIsXG5cdFx0VG9vbGJhckdyb3VwLFxuXHRcdFRvb2xiYXJCdXR0b24sXG5cdFx0U3Bpbm5lcixcblx0XHRfX2V4cGVyaW1lbnRhbFNwYWNlcjogU3BhY2VyLFxuXHRcdF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sOiBJbnB1dENvbnRyb2wsXG5cdFx0X19leHBlcmltZW50YWxIZWFkaW5nOiBIZWFkaW5nLFxuXHR9ID0gd3AuY29tcG9uZW50c1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblx0Y29uc3QgZXhhbXBsZUltYWdlRGF0YSA9IChcblx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjc0IDE2NVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdDxwYXRoXG5cdFx0XHRcdGQ9XCJtMTI3LjAzODQyLDMzLjQyNTQ2Yy0yMC45NTc4NCwwIC0zNy45OTU0NSwxNy4wMzc2MSAtMzcuOTk1NDUsMzcuOTk1NDVjMCwyMC45NTc4NCAxNy4wMzc2MSwzNy45OTU0NSAzNy45OTU0NSwzNy45OTU0NWM4LjI5NzI3LDAgMTUuOTU2MTksLTIuNzAxOTcgMjIuMjEwNTcsLTcuMjI4OWwyOS4zODcxMSwyOS4zODcwOWw2LjMyMDkyLC02LjMyMDkybC0yOS4xMTY0NSwtMjkuMTE2NDdjNS43MTQ1NiwtNi42NTA1MiA5LjE5MzI5LC0xNS4yNzYzMiA5LjE5MzI5LC0yNC43MTYyNGMwLC0yMC45NTc4NCAtMTcuMDM3NjEsLTM3Ljk5NTQ1IC0zNy45OTU0NSwtMzcuOTk1NDV6bTAsNC40NzAwNWMxOC41NDIwNSwwIDMzLjUyNTQsMTQuOTgzMzUgMzMuNTI1NCwzMy41MjU0YzAsMTguNTQyMDUgLTE0Ljk4MzM1LDMzLjUyNTQgLTMzLjUyNTQsMzMuNTI1NGMtMTguNTQyMDUsMCAtMzMuNTI1NCwtMTQuOTgzMzUgLTMzLjUyNTQsLTMzLjUyNTRjMCwtMTguNTQyMDUgMTQuOTgzMzUsLTMzLjUyNTQgMzMuNTI1NCwtMzMuNTI1NHptLTE3Ljg4MDIxLDI5LjA1NTM0YTQuNDcwMDUsNC40NzAwNSAwIDAgMCAtNC40NzAwNSw0LjQ3MDA1YTQuNDcwMDUsNC40NzAwNSAwIDAgMCA0LjQ3MDA1LDQuNDcwMDVhNC40NzAwNSw0LjQ3MDA1IDAgMCAwIDQuNDcwMDUsLTQuNDcwMDVhNC40NzAwNSw0LjQ3MDA1IDAgMCAwIC00LjQ3MDA1LC00LjQ3MDA1em0xNy44ODAyMSwwYTQuNDcwMDUsNC40NzAwNSAwIDAgMCAtNC40NzAwNSw0LjQ3MDA1YTQuNDcwMDUsNC40NzAwNSAwIDAgMCA0LjQ3MDA1LDQuNDcwMDVhNC40NzAwNSw0LjQ3MDA1IDAgMCAwIDQuNDcwMDUsLTQuNDcwMDVhNC40NzAwNSw0LjQ3MDA1IDAgMCAwIC00LjQ3MDA1LC00LjQ3MDA1em0xNy44ODAyMSwwYTQuNDcwMDUsNC40NzAwNSAwIDAgMCAtNC40NzAwNSw0LjQ3MDA1YTQuNDcwMDUsNC40NzAwNSAwIDAgMCA0LjQ3MDA1LDQuNDcwMDVhNC40NzAwNSw0LjQ3MDA1IDAgMCAwIDQuNDcwMDUsLTQuNDcwMDVhNC40NzAwNSw0LjQ3MDA1IDAgMCAwIC00LjQ3MDA1LC00LjQ3MDA1elwiXG5cdFx0XHRcdGZpbGw9XCJibGFja1wiXG5cdFx0XHRcdGlkPVwic3ZnXzFcIlxuXHRcdFx0Lz5cblx0XHQ8L3N2Zz5cblx0KVxuXHRjb25zdCBpY29uID0gKFxuXHRcdDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0PGc+XG5cdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0ZD1cIm0xMC4yNjgxOCwwLjY4MDMzYy0wLjIzMjUzLDAgLTAuNDMwNTcsMC4xNjg4NiAtMC40NjgwNiwwLjM5ODU1bC0wLjQ1MzIzLDIuNzc3NzhjLTAuNTY4NTEsMC4xNjMyNCAtMS4xMTU0MywwLjM4Nzc2IC0xLjYzMTI2LDAuNjcwMTJsLTIuMjkyMTEsLTEuNjM3NzVjLTAuMTg4NCwtMC4xMzQ3NyAtMC40NDgsLTAuMTEzNjcgLTAuNjExNzIsMC4wNTAwNWwtMS44NDUzNywxLjg0NDQ0Yy0wLjE2Mjc3LDAuMTYyNzcgLTAuMTg1MjMsMC40MTk2MiAtMC4wNTI4MywwLjYwODAybDEuNjEyNzMsMi4zMDY5NGMtMC4yODY2MywwLjUxOTYzIC0wLjUxNTYsMS4wNjkxNSAtMC42ODIxNiwxLjY0MTQ2bC0yLjc2NjY2LDAuNDYxNTdjLTAuMjI4NzMsMC4wMzc5NiAtMC4zOTY2OSwwLjIzNTA4IC0wLjM5NjY5LDAuNDY3MTRsMCwyLjYxMDAyYzAsMC4yMzAxNiAwLjE2NDc3LDAuNDI3MjcgMC4zOTExMywwLjQ2NzEzbDIuNzY3NTksMC40OTEyM2MwLjE2NTYyLDAuNTcwNDEgMC4zOTM2NCwxLjEyMDQgMC42ODIxNiwxLjY0MTQ2bC0xLjYzMzExLDIuMjgzNzdjLTAuMTM0NzcsMC4xODg4NyAtMC4xMTI3NCwwLjQ0NzUzIDAuMDUwOTgsMC42MTE3M2wxLjg0NDQ0LDEuODQ3MjJjMC4xNjMyNCwwLjE2MzI0IDAuNDIxMDQsMC4xODQ3NiAwLjYwODAyLDAuMDUyODNsMi4zMTE1NywtMS42MTgyOGMwLjUxOTYzLDAuMjg1NjggMS4wNjY5NiwwLjUxMTQ4IDEuNjM0MDQsMC42NzU2N2wwLjQ2MzQzLDIuNzgxNDljMC4wMzc5NiwwLjIyODczIDAuMjM1MDgsMC4zOTY2OSAwLjQ2NzE0LDAuMzk2NjlsMi42MTAwMiwwYzAuMjI5NjgsMCAwLjQyNjgsLTAuMTY0NzcgMC40NjcxMywtMC4zOTExM2wwLjEyNDIsLTAuNzAxNjNjLTAuMzAwODYsLTAuMjE5NzIgLTAuNTc4OTMsLTAuNDY2NzcgLTAuODMxMzksLTAuNzM5NjNsLTAuMTU3NTYsMC44ODMyOWwtMS44MDkyMiwwbC0wLjQ0NzY3LC0yLjY4Njk1Yy0wLjAzMDg1LC0wLjE4NzQ1IC0wLjE2OTk0LC0wLjMzNzIzIC0wLjM1NDA2LC0wLjM4Mjc5Yy0wLjY4MzgzLC0wLjE2ODQ3IC0xLjMzODk1LC0wLjQzOTEzIC0xLjk0NzMyLC0wLjgwMzU4Yy0wLjE2MTM1LC0wLjA5NjgxIC0wLjM2MzQ1LC0wLjA4OTY0IC0wLjUxNjI2LDAuMDE3NjFsLTIuMjMxODcsMS41NjM2bC0xLjI3OTA2LC0xLjI3OTk4bDEuNTc2NTgsLTIuMjA1OTFjMC4xMTAxLC0wLjE1NDIzIDAuMTE4NjIsLTAuMzU5NTIgMC4wMjAzOSwtMC41MjE4MmMtMC4zNjc3OCwtMC42MDc5IC0wLjY0MTU2LC0xLjI2NTI2IC0wLjgxMTkzLC0xLjk1Mjg4Yy0wLjA0NTU2LC0wLjE4MTc1IC0wLjE5MzU2LC0wLjMxOTk0IC0wLjM3ODE2LC0wLjM1MjIxbC0yLjY3MjEyLC0wLjQ3MzYybDAsLTEuODEwMTRsMi42NzAyNywtMC40NDQ4OWMwLjE4NjUsLTAuMDMwODUgMC4zMzY3NiwtMC4xNjk5NiAwLjM4Mjc5LC0wLjM1MzEzYzAuMTczMjEsLTAuNjkxNDIgMC40NDU1NywtMS4zNDc4MyAwLjgxMTkyLC0xLjk1Mjg4YzAuMDk3MjgsLTAuMTYwODcgMC4wOTA1NywtMC4zNjQzNSAtMC4wMTY2OCwtMC41MTgxMWwtMS41NTg5NywtMi4yMjkwOWwxLjI3OTk5LC0xLjI3OTA2bDIuMjEyNCwxLjU4MTIxYzAuMTUzMjgsMC4xMTAxIDAuMzU3NjcsMC4xMTk1NSAwLjUxOTk2LDAuMDIxMzJjMC42MDMxNSwtMC4zNjIwOCAxLjI1ODczLC0wLjYzMDk0IDEuOTQ4MjUsLTAuNzk5ODhjMC4xODUwNywtMC4wNDU1NiAwLjMyNDE0LC0wLjE5NjcyIDAuMzU0OTksLTAuMzg0NjRsMC40Mzc0NywtMi42ODMyNGwxLjgwODI5LDBsMC40NzE3NywyLjY5ODA3YzAuMDMyMjcsMC4xODUwNyAwLjE2OTk4LDAuMzMzNTIgMC4zNTIyMSwwLjM3OTA4YzAuNjgzODMsMC4xNzAzNiAxLjMzNzY1LDAuNDQzMjkgMS45NDE3NiwwLjgwODIxYzAuMTYyNzcsMC4wOTg3MSAwLjM2ODA0LDAuMDg5NzMgMC41MjI3NSwtMC4wMjEzMmwyLjIxOTgxLC0xLjU5NjA0bDEuMjc5MDYsMS4yNzgxM2wtMS41ODEyMSwyLjI1NDExYy0wLjEwODIsMC4xNTMyOCAtMC4xMTQ4NywwLjM1NTM5IC0wLjAxODU0LDAuNTE2MjZjMC4zNjAxOCwwLjU5OTM2IDAuNjI4NTYsMS4yNTAxMSAwLjc5OTg4LDEuOTMxNTZjMC4wNDYwMywwLjE4NDEzIDAuMTk3MTksMC4zMjI3NiAwLjM4NDY0LDAuMzUzMTNsMi43MDgyNywwLjQ0MzAzbDAsMS44MDgyOWwtMC44ODUxNCwwLjE1NDc4YzAuMjczODEsMC4yNTI5MyAwLjUyMTc3LDAuNTMxODggMC43NDE0OCwwLjgzNDE3bDAuNjk5NzgsLTAuMTIzMjdjMC4yMjczMSwtMC4wMzk4NiAwLjM5MjA2LC0wLjIzNjk4IDAuMzkyMDYsLTAuNDY3MTRsMCwtMi42MTAwMmMwLC0wLjIzMjUzIC0wLjE2ODg2LC0wLjQzMDU3IC0wLjM5ODU1LC0wLjQ2ODA2bC0yLjgwMzc0LC0wLjQ1ODc5Yy0wLjE2NDY3LC0wLjU2MjgyIC0wLjM4ODcxLC0xLjEwMzQ3IC0wLjY3MDEyLC0xLjYxNTUxbDEuNjM2ODMsLTIuMzMyODljMC4xMzI0LC0wLjE4ODQgMC4xMDk5NCwtMC40NDUyNSAtMC4wNTI4MywtMC42MDgwMmwtMS44NDYyOSwtMS44NDUzN2MtMC4xNjQxOSwtMC4xNjQyIC0wLjQyMzc4LC0wLjE4NTMyIC0wLjYxMjY1LC0wLjA0OTEzbC0yLjI5NzY3LDEuNjUxNjVjLTAuNTE2NzgsLTAuMjg1NjggLTEuMDYyOCwtMC41MTE0NiAtMS42Mjk0MSwtMC42NzY2bC0wLjQ4ODQ1LC0yLjc5NDQ2Yy0wLjA0MDM0LC0wLjIyNzMxIC0wLjIzNzkxLC0wLjM5Mjk5IC0wLjQ2ODA2LC0wLjM5Mjk5bC0yLjYxMDAyLDB6bTEuMzI2MzMsNy4xMTgyNGMtMi4wOTMyNCwwIC0zLjc5NjM5LDEuNzAzMTYgLTMuNzk2MzksMy43OTYzOWMwLDEuOTk3MzggMS41NTE0OSwzLjYzNTg1IDMuNTExODUsMy43ODI0OWMwLjA4NDQ3LC0wLjMyNDU5IDAuMTk2MDUsLTAuNjM4NTMgMC4zMzM2NywtMC45Mzc5OGMtMC4wMTY2MSwwIC0wLjAzMjUyLDAuMDAyNzggLTAuMDQ5MTMsMC4wMDI3OGMtMS41NzAyOCwwIC0yLjg0NzMsLTEuMjc3MDEgLTIuODQ3MywtMi44NDczYzAsLTEuNTcwMjggMS4yNzcwMSwtMi44NDczIDIuODQ3MywtMi44NDczYzEuNTcwMjgsMCAyLjg0NzMsMS4yNzcwMSAyLjg0NzMsMi44NDczYzAsMC4wMTY2MSAtMC4wMDI3OCwwLjAzMjUyIC0wLjAwMjc4LDAuMDQ5MTNjMC4yOTk0NCwtMC4xMzc2MiAwLjYxMzM4LC0wLjI0OTIgMC45Mzc5OCwtMC4zMzM2N2MtMC4xNDY2NCwtMS45NjAzNiAtMS43ODUxMSwtMy41MTE4NSAtMy43ODI0OSwtMy41MTE4NXptNS4yMjAwNCw0LjI3MDk0Yy0yLjYxNTI0LDAgLTQuNzQ1NDksMi4xMzAyNSAtNC43NDU0OSw0Ljc0NTQ5YzAsMi42MTUyNCAyLjEzMDI1LDQuNzQ1NDkgNC43NDU0OSw0Ljc0NTQ5YzEuMTM3MjYsMCAyLjE4MTY5LC0wLjQwMzg1IDMuMDAwMjMsLTEuMDc0MjJsMi44MzMzOSwyLjgzMzM5bDAuNjcxMDQsLTAuNjcxMDRsLTIuODMzMzksLTIuODMzMzljMC42NzAzOCwtMC44MTg1NCAxLjA3NDIyLC0xLjg2Mjk3IDEuMDc0MjIsLTMuMDAwMjNjMCwtMi42MTUyNCAtMi4xMzAyNSwtNC43NDU0OSAtNC43NDU0OSwtNC43NDU0OXptMCwwLjk0OTFjMi4xMDIzMSwwIDMuNzk2MzksMS42OTQwOCAzLjc5NjM5LDMuNzk2MzljMCwyLjEwMjMxIC0xLjY5NDA4LDMuNzk2MzkgLTMuNzk2MzksMy43OTYzOWMtMi4xMDIzMSwwIC0zLjc5NjM5LC0xLjY5NDA4IC0zLjc5NjM5LC0zLjc5NjM5YzAsLTIuMTAyMzEgMS42OTQwOCwtMy43OTYzOSAzLjc5NjM5LC0zLjc5NjM5elwiXG5cdFx0XHRcdFx0ZmlsbD1cImJsYWNrXCJcblx0XHRcdFx0XHRpZD1cInN2Z18xXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cblx0KVxuXHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cblx0bGV0IGZldGNoQ29udHJvbGxlclxuXHRsZXQgZmV0Y2hFcnJvclxuXHRsZXQgcmVtb3RlQ29udGVudCA9IFtdXG5cblx0ZnVuY3Rpb24gQmxvY2tIYW5kbGVyKHByb3BzKSB7XG5cdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5hbWUgfSA9IHByb3BzXG5cdFx0Y29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZSh0cnVlKVxuXHRcdGNvbnN0IFt0ZXJtc0ZldGNoZWQsIHNldFRlcm1zRmV0Y2hlZF0gPSB1c2VTdGF0ZSgpXG5cblx0XHRjb25zdCByZXNldFN0YXRlID0gKCkgPT4ge1xuXHRcdFx0c2V0RWRpdE1vZGUodHJ1ZSlcblx0XHRcdHNldFRlcm1zRmV0Y2hlZChudWxsKVxuXHRcdH1cblxuXHRcdGNvbnN0IG5vdGljZSA9ICgpID0+IHtcblx0XHRcdGlmIChmZXRjaEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdCdDYW4gbm90IHJlbmRlciBibG9jay4gQnJvd3NlciBjb25zb2xlIHByb3ZpZGVkIHdpdGggbW9yZSBkZXRhaWxzLicsXG5cdFx0XHRcdFx0XHRcdCdkYXZpZC1ldi1hc20tYXBpLXBsdWdpbidcblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QganNvblRvVGFibGUgPSAodGl0bGUsIHRoZWFkRGF0YSwgdGJvZHlEYXRhKSA9PiB7XG5cdFx0XHRjb25zdCBtYXBwaW5nID0ge1xuXHRcdFx0XHRJRDogJ2lkJyxcblx0XHRcdFx0J0ZpcnN0IE5hbWUnOiAnZm5hbWUnLFxuXHRcdFx0XHQnTGFzdCBOYW1lJzogJ2xuYW1lJyxcblx0XHRcdFx0RW1haWw6ICdlbWFpbCcsXG5cdFx0XHRcdERhdGU6ICdkYXRlJyxcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdDxIZWFkaW5nIGxldmVsPVwiNFwiPnt0aXRsZX08L0hlYWRpbmc+XG5cdFx0XHRcdFx0PFNwYWNlclxuXHRcdFx0XHRcdFx0bWFyZ2luVG9wPXsxfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHR7dGhlYWREYXRhLm1hcCgoaGVhZGluZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDx0aCBrZXk9e2hlYWRpbmd9PntoZWFkaW5nfTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHR7dGJvZHlEYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGVhZERhdGEubWFwKChrZXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoJ0RhdGUnID09PSBrZXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlID0gbmV3IERhdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvd1ttYXBwaW5nW2tleV1dICogMTAwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSByb3dbbWFwcGluZ1trZXldXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHRkIGtleT17cm93W21hcHBpbmdba2V5XV19Pnt2YWx1ZX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdClcblx0XHR9XG5cblx0XHRjb25zdCBnZXRFeGFtcGxlID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGV4YW1wbGVJbWFnZURhdGFcblx0XHR9XG5cblx0XHRjb25zdCBnZXRCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiYmxvY2stY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8VG9vbGJhckdyb3VwIGxhYmVsPXtfXygnT3B0aW9ucycsICdkYXZpZC1ldi1hc20tYXBpLXBsdWdpbicpfT5cblx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtcblx0XHRcdFx0XHRcdFx0XHRlZGl0TW9kZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXygnUHJldmlldycsICdkYXZpZC1ldi1hc20tYXBpLXBsdWdpbicpXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCdFZGl0JywgJ2RhdmlkLWV2LWFzbS1hcGktcGx1Z2luJylcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpY29uPXtlZGl0TW9kZSA/ICd2aXNpYmlsaXR5JyA6ICdlZGl0J31cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghZWRpdE1vZGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZldGNoQ29udHJvbGxlcj8uYWJvcnQoKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZXRUZXJtc0ZldGNoZWQoIWVkaXRNb2RlKVxuXHRcdFx0XHRcdFx0XHRcdHNldEVkaXRNb2RlKCFlZGl0TW9kZSlcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Ub29sYmFyR3JvdXA+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdClcblx0XHR9XG5cblx0XHRjb25zdCBnZXRCbG9ja0VkaXQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBibG9jayA9IHdwLmJsb2Nrcy5nZXRCbG9ja1R5cGUobmFtZSlcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0a2V5PVwiYmxvY2stZWRpdG9yXCJcblx0XHRcdFx0XHRpY29uPXs8QmxvY2tJY29uIGljb249e2ljb259IC8+fVxuXHRcdFx0XHRcdGxhYmVsPXtibG9jay50aXRsZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdFx0XHRpbnN0cnVjdGlvbnM9e19fKFxuXHRcdFx0XHRcdFx0J0Jsb2NrIGRvZXMgbm90IHByb3ZpZGUgYW55IHNwZWNpZmljIG9wdGlvbnMuJyxcblx0XHRcdFx0XHRcdCdkYXZpZC1ldi1hc20tYXBpLXBsdWdpbidcblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItaW5uZXJcIj5cblx0XHRcdFx0XHRcdDxJbnB1dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFxuXHRcdFx0XHRcdFx0XHRcdCdCdXQgeW91IG1heSBzZXQgYmxvY2sgaGVhZGluZycsXG5cdFx0XHRcdFx0XHRcdFx0J2RhdmlkLWV2LWFzbS1hcGktcGx1Z2luJ1xuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2F0dHJpYnV0ZXMuYmxvY2tUaXRsZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXh0VmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJsb2NrVGl0bGU6IG5leHRWYWx1ZSB9KVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8U3BhY2VyXG5cdFx0XHRcdFx0XHRtYXJnaW5Ub3A9ezF9XG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLWVycm9yc1wiPntub3RpY2UoKX08L2Rpdj5cblx0XHRcdFx0PC9QbGFjZWhvbGRlcj5cblx0XHRcdClcblx0XHR9XG5cblx0XHRjb25zdCBnZXRCbG9ja1ByZXZpZXcgPSAoKSA9PiB7XG5cdFx0XHRpZiAodGVybXNGZXRjaGVkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgY29udGVudCA9IGpzb25Ub1RhYmxlKFxuXHRcdFx0XHRcdFx0cmVtb3RlQ29udGVudC50aXRsZSxcblx0XHRcdFx0XHRcdHJlbW90ZUNvbnRlbnQuZGF0YS5oZWFkZXJzLFxuXHRcdFx0XHRcdFx0T2JqZWN0LnZhbHVlcyhyZW1vdGVDb250ZW50LmRhdGEucm93cylcblx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BwcmV2aWV3LWlubmVyICR7d2luZG93LkRhdmlkRXZBc21BcGlQbHVnaW4uY29uc3RhbnRzLmNzc05hbWVzcGFjZXMuZnJvbnR9YH1cblx0XHRcdFx0XHRcdFx0a2V5PVwiYmxvY2stcHJldmlld1wiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtjb250ZW50fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHdpbmRvdy5EYXZpZEV2QXNtQXBpUGx1Z2luLmxvZ2dlci5lcnJvcihlcnJvcilcblx0XHRcdFx0XHRmZXRjaEVycm9yID0gdHJ1ZVxuXG5cdFx0XHRcdFx0cmVzZXRTdGF0ZSgpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFBsYWNlaG9sZGVyIGNsYXNzTmFtZT1cInByZXZpZXctaW5uZXJcIiBrZXk9XCJibG9jay1wcmV2aWV3XCI+XG5cdFx0XHRcdFx0PEZsZXhcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxGbGV4SXRlbT5cblx0XHRcdFx0XHRcdFx0PFNwaW5uZXIgLz5cblx0XHRcdFx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHQ8L1BsYWNlaG9sZGVyPlxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG5cdFx0XHRsZXQgaXNNb3VudGVkID0gdHJ1ZVxuXHRcdFx0aWYgKCF0ZXJtc0ZldGNoZWQgJiYgIWVkaXRNb2RlICYmICFhdHRyaWJ1dGVzLmlzRXhhbXBsZSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChpc01vdW50ZWQpIHtcblx0XHRcdFx0XHRcdGZldGNoQ29udHJvbGxlciA9XG5cdFx0XHRcdFx0XHRcdHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPT09ICd1bmRlZmluZWQnXG5cdFx0XHRcdFx0XHRcdFx0PyB1bmRlZmluZWRcblx0XHRcdFx0XHRcdFx0XHQ6IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlGZXRjaCh7XG5cdFx0XHRcdFx0XHRcdHBhdGg6IG5hbWUuc3BsaXQoJy8nKS5qb2luKCcvdjEvJyksXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0XHRcdHNpZ25hbDogZmV0Y2hDb250cm9sbGVyPy5zaWduYWwsXG5cdFx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0XHRpZiAoMjAwID09PSByZXNwb25zZS5jb2RlKSB7XG5cdFx0XHRcdFx0XHRcdHJlbW90ZUNvbnRlbnQgPSByZXNwb25zZS5jb250ZW50XG5cdFx0XHRcdFx0XHRcdHNldFRlcm1zRmV0Y2hlZCh0cnVlKVxuXHRcdFx0XHRcdFx0XHRmZXRjaEVycm9yID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5jb250ZW50KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRpZiAoJ0Fib3J0RXJyb3InID09PSBlcnJvci5uYW1lKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuRGF2aWRFdkFzbUFwaVBsdWdpbi5sb2dnZXIud2Fybihcblx0XHRcdFx0XHRcdFx0X18oJ1JlcXVlc3QgYWJvcnRlZCBieSB1c2VyJywgJ2RhdmlkLWV2LWFzbS1hcGktcGx1Z2luJylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdGZldGNoRXJyb3IgPSBmYWxzZVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuRGF2aWRFdkFzbUFwaVBsdWdpbi5sb2dnZXIuZXJyb3IoZXJyb3IpXG5cdFx0XHRcdFx0XHRmZXRjaEVycm9yID0gdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNldFN0YXRlKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0aXNNb3VudGVkID0gZmFsc2Vcblx0XHRcdH1cblx0XHR9LCBbdGVybXNGZXRjaGVkXSlcblxuXHRcdGNvbnN0IHJlbmRlciA9ICgpID0+IHtcblx0XHRcdGlmIChhdHRyaWJ1dGVzLmlzRXhhbXBsZSkge1xuXHRcdFx0XHRyZXR1cm4gZ2V0RXhhbXBsZSgpXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBbY2xhc3NOYW1lXVxuXHRcdFx0Y29uc3QgY29udGVudCA9IFtnZXRCbG9ja0NvbnRyb2xzKCldXG5cblx0XHRcdGlmIChlZGl0TW9kZSkge1xuXHRcdFx0XHRjb250ZW50LnB1c2goZ2V0QmxvY2tFZGl0KCkpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250ZW50LnB1c2goZ2V0QmxvY2tQcmV2aWV3KCkpXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9Pntjb250ZW50fTwvZGl2PlxuXHRcdH1cblxuXHRcdHJldHVybiByZW5kZXIoKVxuXHR9XG5cblx0cmVnaXN0ZXJCbG9ja1R5cGUoJ2RhdmlkLWV2LWFzbS9ibG9jay1yZW1vdGUtaG9zdCcsIHtcblx0XHR0aXRsZTogX18oXG5cdFx0XHQnUmVtb3RlIGhvc3QgZmV0Y2hlciAoY2xpY2sgcHJldmlldyBidXR0b24pJyxcblx0XHRcdCdkYXZpZC1ldi1hc20tYXBpLXBsdWdpbidcblx0XHQpLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyhcblx0XHRcdCdJbnRlcmFjdHMgd2l0aCAzcmQgcGFydHkgaG9zdCB2aWEgV1AgYmxvY2suJyxcblx0XHRcdCdkYXZpZC1ldi1hc20tYXBpLXBsdWdpbidcblx0XHQpLFxuXHRcdGljb24sXG5cdFx0Y2F0ZWdvcnk6ICdkYXZpZC1ldi1hc20tcGx1Z2luLWJsb2NrcycsXG5cdFx0a2V5d29yZHM6IFsnQVNNJ10sXG5cdFx0c3R5bGVzOiBbXSxcblx0XHR2YXJpYXRpb25zOiBbXSxcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRpc0V4YW1wbGU6IHtcblx0XHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHRibG9ja1RpdGxlOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRkZWZhdWx0OiAnJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRleGFtcGxlOiB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGlzRXhhbXBsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdXBwb3J0czoge1xuXHRcdFx0bXVsdGlwbGU6IHRydWUsXG5cdFx0fSxcblx0XHRlZGl0OiBCbG9ja0hhbmRsZXIsXG5cdFx0c2F2ZShwcm9wcykge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9LFxuXHR9KVxufSkod2luZG93LndwKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFN0eWxlc1xuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC1lZGl0b3Iuc2Nzc1wiO1xuXG4vLyBTY3JpcHRzXG5pbXBvcnQgXCIuLi8uLi9zY3JpcHRzL2Jsb2Nrcy9ibG9jay1yZW1vdGUtaG9zdC1lZGl0b3IuanN4XCI7Il0sIm5hbWVzIjpbIndwIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZWxlbWVudCIsImFwaUZldGNoIiwiQmxvY2tDb250cm9scyIsIkJsb2NrSWNvbiIsImJsb2NrRWRpdG9yIiwiX18iLCJpMThuIiwiRmxleCIsIkZsZXhJdGVtIiwiUGxhY2Vob2xkZXIiLCJUb29sYmFyR3JvdXAiLCJUb29sYmFyQnV0dG9uIiwiU3Bpbm5lciIsIl9fZXhwZXJpbWVudGFsU3BhY2VyIiwiU3BhY2VyIiwiX19leHBlcmltZW50YWxJbnB1dENvbnRyb2wiLCJJbnB1dENvbnRyb2wiLCJfX2V4cGVyaW1lbnRhbEhlYWRpbmciLCJIZWFkaW5nIiwiY29tcG9uZW50cyIsImV4YW1wbGVJbWFnZURhdGEiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJ2aWV3Qm94IiwieG1sbnMiLCJkIiwiZmlsbCIsImlkIiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZmV0Y2hDb250cm9sbGVyIiwiZmV0Y2hFcnJvciIsInJlbW90ZUNvbnRlbnQiLCJCbG9ja0hhbmRsZXIiLCJwcm9wcyIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwibmFtZSIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJ0ZXJtc0ZldGNoZWQiLCJzZXRUZXJtc0ZldGNoZWQiLCJyZXNldFN0YXRlIiwibm90aWNlIiwianNvblRvVGFibGUiLCJ0aXRsZSIsInRoZWFkRGF0YSIsInRib2R5RGF0YSIsIm1hcHBpbmciLCJJRCIsIkVtYWlsIiwiRGF0ZSIsImxldmVsIiwibWFyZ2luVG9wIiwic3R5bGUiLCJtYXAiLCJoZWFkaW5nIiwia2V5Iiwicm93IiwiaW5kZXgiLCJ2YWx1ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImdldEV4YW1wbGUiLCJnZXRCbG9ja0NvbnRyb2xzIiwibGFiZWwiLCJvbkNsaWNrIiwiYWJvcnQiLCJnZXRCbG9ja0VkaXQiLCJibG9jayIsImdldEJsb2NrVHlwZSIsImluc3RydWN0aW9ucyIsImxhYmVsUG9zaXRpb24iLCJibG9ja1RpdGxlIiwib25DaGFuZ2UiLCJuZXh0VmFsdWUiLCJnZXRCbG9ja1ByZXZpZXciLCJjb250ZW50IiwiZGF0YSIsImhlYWRlcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyb3dzIiwid2luZG93IiwiRGF2aWRFdkFzbUFwaVBsdWdpbiIsImNvbnN0YW50cyIsImNzc05hbWVzcGFjZXMiLCJmcm9udCIsImVycm9yIiwibG9nZ2VyIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaXNNb3VudGVkIiwiaXNFeGFtcGxlIiwiQWJvcnRDb250cm9sbGVyIiwidW5kZWZpbmVkIiwicmVzcG9uc2UiLCJwYXRoIiwic3BsaXQiLCJqb2luIiwibWV0aG9kIiwic2lnbmFsIiwiY29kZSIsIkVycm9yIiwid2FybiIsInJlbmRlciIsImNsYXNzZXMiLCJwdXNoIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImtleXdvcmRzIiwic3R5bGVzIiwidmFyaWF0aW9ucyIsInR5cGUiLCJkZWZhdWx0IiwiZXhhbXBsZSIsInN1cHBvcnRzIiwibXVsdGlwbGUiLCJlZGl0Iiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=