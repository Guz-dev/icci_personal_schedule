"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/bloque_horario.js":
/*!******************************************!*\
  !*** ./src/components/bloque_horario.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bloque_horario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Bloque_horario(param) {\n    let { params , bloque  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: bloque.bloques_horario.dia === params.dia && bloque.bloques_horario.bloques_horas.inicio === params.hora[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-gray-500 mr-4\",\n                    children: [\n                        \"Semestre \",\n                        bloque.semestre,\n                        \" - \",\n                        bloque.bloques_horario.ramos.ramo\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Araceli\\\\Documents\\\\GitHub\\\\icci_personal_schedule\\\\src\\\\components\\\\bloque_horario.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-gray-500 mr-4\",\n                    children: [\n                        \"Grupo \",\n                        bloque.bloques_horario.grupo\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Araceli\\\\Documents\\\\GitHub\\\\icci_personal_schedule\\\\src\\\\components\\\\bloque_horario.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-gray-500 mr-4\",\n                    children: [\n                        \"Profesor \",\n                        bloque.bloques_horario.profesor\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Araceli\\\\Documents\\\\GitHub\\\\icci_personal_schedule\\\\src\\\\components\\\\bloque_horario.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this),\n                \"Sala \",\n                bloque.bloques_horario.sala\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Araceli\\\\Documents\\\\GitHub\\\\icci_personal_schedule\\\\src\\\\components\\\\bloque_horario.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Bloque_horario;\nvar _c;\n$RefreshReg$(_c, \"Bloque_horario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ibG9xdWVfaG9yYXJpby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2lCO0FBQ2pCO0FBQ0k7QUFFbEIsU0FBU0ksZUFBZSxLQUFrQixFQUFFO1FBQXBCLEVBQUVDLE9BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQWxCO0lBQ3JDLHFCQUNFO2tCQUNHQSxPQUFPQyxlQUFlLENBQUNDLEdBQUcsS0FBS0gsT0FBT0csR0FBRyxJQUFJRixPQUFPQyxlQUFlLENBQUNFLGFBQWEsQ0FBQ0MsTUFBTSxLQUFLTCxPQUFPTSxJQUFJLENBQUMsRUFBRSxrQkFDMUcsOERBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7d0JBQXFCO3dCQUN4QlAsT0FBT1EsUUFBUTt3QkFBQzt3QkFBSVIsT0FBT0MsZUFBZSxDQUFDUSxLQUFLLENBQUNDLElBQUk7Ozs7Ozs7OEJBRWpFLDhEQUFDSjtvQkFBSUMsV0FBVTs7d0JBQXFCO3dCQUMzQlAsT0FBT0MsZUFBZSxDQUFDVSxLQUFLOzs7Ozs7OzhCQUVyQyw4REFBQ0w7b0JBQUlDLFdBQVU7O3dCQUFxQjt3QkFDeEJQLE9BQU9DLGVBQWUsQ0FBQ1csUUFBUTs7Ozs7OztnQkFDckM7Z0JBQ0FaLE9BQU9DLGVBQWUsQ0FBQ1ksSUFBSTs7Ozs7Ozs7QUFLM0MsQ0FBQztLQW5CdUJmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Jsb3F1ZV9ob3JhcmlvLmpzP2JkODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvcXVlX2hvcmFyaW8oeyBwYXJhbXMsIGJsb3F1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtibG9xdWUuYmxvcXVlc19ob3JhcmlvLmRpYSA9PT0gcGFyYW1zLmRpYSAmJiBibG9xdWUuYmxvcXVlc19ob3JhcmlvLmJsb3F1ZXNfaG9yYXMuaW5pY2lvID09PSBwYXJhbXMuaG9yYVswXSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbXItNFwiPlxyXG4gICAgICAgICAgICBTZW1lc3RyZSB7YmxvcXVlLnNlbWVzdHJlfSAtIHtibG9xdWUuYmxvcXVlc19ob3JhcmlvLnJhbW9zLnJhbW99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtci00XCI+XHJcbiAgICAgICAgICAgIEdydXBvIHtibG9xdWUuYmxvcXVlc19ob3JhcmlvLmdydXBvfSAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtci00XCI+XHJcbiAgICAgICAgICAgIFByb2Zlc29yIHtibG9xdWUuYmxvcXVlc19ob3JhcmlvLnByb2Zlc29yfSAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFNhbGEge2Jsb3F1ZS5ibG9xdWVzX2hvcmFyaW8uc2FsYX0gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiTGluayIsInVzZVN0YXRlIiwiQmxvcXVlX2hvcmFyaW8iLCJwYXJhbXMiLCJibG9xdWUiLCJibG9xdWVzX2hvcmFyaW8iLCJkaWEiLCJibG9xdWVzX2hvcmFzIiwiaW5pY2lvIiwiaG9yYSIsImRpdiIsImNsYXNzTmFtZSIsInNlbWVzdHJlIiwicmFtb3MiLCJyYW1vIiwiZ3J1cG8iLCJwcm9mZXNvciIsInNhbGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/bloque_horario.js\n"));

/***/ })

});