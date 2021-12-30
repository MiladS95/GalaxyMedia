"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Loading_Screen_loading_screen___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading-Screen/loading-screen  */ \"./src/components/Loading-Screen/loading-screen .jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var onRouteChangeDone = function() {\n        var noScroll = function noScroll() {\n            window.scrollTo(0, 0);\n        };\n        var open = false, navDark = document.querySelector(\".topnav.dark\"), logoChan = document.querySelector(\".topnav.dark .logo img\"), menuIcon = document.querySelector(\".topnav .menu-icon\");\n        if (menuIcon) {\n            menuIcon.addEventListener(\"click\", function() {\n                open = !open;\n                document.querySelector(\".hamenu\").classList.toggle(\"open\");\n                if (open) {\n                    animateEl(document.querySelector(\".hamenu\"), \"0px\");\n                    document.querySelector(\".topnav .menu-icon \").classList.add(\"open\");\n                    if (navDark) {\n                        navDark.classList.add(\"navlit\");\n                    }\n                    if (logoChan) {\n                        logoChan.setAttribute(\"src\", \"/img/logo-light.png\");\n                    }\n                    window.addEventListener(\"scroll\", noScroll);\n                } else {\n                    delay(300, animateEl(document.querySelector(\".hamenu\"), \"-100%\"));\n                    document.querySelector(\".topnav .menu-icon\").classList.remove(\"open\");\n                    if (navDark) {\n                        navDark.classList.remove(\"navlit\");\n                    }\n                    if (logoChan) {\n                        logoChan.setAttribute(\"src\", \"/img/logo-dark.png\");\n                    }\n                    window.removeEventListener(\"scroll\", noScroll);\n                }\n            });\n            document.querySelectorAll(\".main-menu a\").forEach(function(item) {\n                item.addEventListener(\"click\", function() {\n                    delay(300, animateEl(document.querySelector(\".hamenu\"), \"-100%\"));\n                    document.querySelector(\".topnav .menu-icon\").classList.remove(\"open\");\n                    if (navDark) {\n                        navDark.classList.remove(\"navlit\");\n                    }\n                    if (logoChan) {\n                        logoChan.setAttribute(\"src\", \"/img/logo-dark.png\");\n                    }\n                    window.removeEventListener(\"scroll\", noScroll);\n                });\n            });\n        }\n        document.querySelectorAll(\".hamenu .menu-links .main-menu > li\").forEach(function(item1) {\n            item1.addEventListener(\"mouseenter\", function() {\n                this.style.opacity = \"1\";\n                getSiblings(this).forEach(function(item) {\n                    item.style.opacity = \".5\";\n                });\n            });\n            item1.addEventListener(\"mouseleave\", function() {\n                document.querySelectorAll(\".hamenu .menu-links .main-menu > li\").forEach(function(item2) {\n                    item2.style.opacity = \"1\";\n                });\n            });\n        });\n        if (document.querySelectorAll(\".main-menu > li .dmenu\").length) {\n            document.querySelectorAll(\".main-menu > li .dmenu\").forEach(function(item) {\n                item.addEventListener(\"click\", function() {\n                    document.querySelector(\".main-menu\").classList.add(\"gosub\");\n                    this.parentNode.parentNode.childNodes[1].classList.add(\"sub-open\");\n                });\n            });\n        }\n        if (document.querySelectorAll(\".main-menu .sub-menu li .sub-link.back\").length) {\n            document.querySelectorAll(\".main-menu .sub-menu li .sub-link.back\").forEach(function(item) {\n                item.addEventListener(\"click\", function() {\n                    document.querySelector(\".main-menu\").classList.remove(\"gosub\");\n                    document.querySelector(\".main-menu\").classList.remove(\"sub-open\");\n                });\n            });\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        onRouteChangeDone();\n        router.events.on(\"routeChangeComplete\", onRouteChangeDone);\n        return function() {\n            router.events.off(\"routeChangeComplete\", onRouteChangeDone);\n        };\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 108,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                            lineNumber: 109,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"GalaxyMedia\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/img/Logo_Transparent.png\",\n                        __source: {\n                            fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                            lineNumber: 110,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"mouse-cursor cursor-outer\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 112,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"mouse-cursor cursor-inner\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 113,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Loading_Screen_loading_screen___WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 115,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n            }, pageProps, {\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 116,\n                    columnNumber: 7\n                },\n                __self: this\n            })),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"progress-wrap cursor-pointer\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 117,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                    className: \"progress-circle svg-content\",\n                    width: \"100%\",\n                    height: \"100%\",\n                    viewBox: \"-1 -1 102 102\",\n                    __source: {\n                        fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                        d: \"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98\",\n                        __source: {\n                            fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"pace\",\n                src: \"/js/pace.min.js\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 127,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"wow\",\n                src: \"/js/wow.min.js\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 128,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"bootstrap\",\n                src: \"/js/bootstrap.min.js\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 129,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"beforeInteractive\",\n                id: \"splitting\",\n                src: \"/js/splitting.min.js\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 130,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"simpleParallax\",\n                src: \"/js/simpleParallax.min.js\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 135,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"isotope\",\n                src: \"/js/isotope.pkgd.min.js\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 136,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/js/main.js\",\n                strategy: \"lazyOnload\",\n                __source: {\n                    fileName: \"/Users/miladsakhizadah/Downloads/Main_files 2/vie/src/pages/_app.js\",\n                    lineNumber: 137,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s(MyApp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBQ0o7QUFDNEM7QUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFOUJLLEtBQUssQ0FBQyxLQUF3QixFQUFFLENBQUM7UUFBekJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7O0lBQ25DLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSixzREFBUztJQUN4QixHQUFLLENBQUNLLGlCQUFpQixHQUFHLFFBQVEsR0FBRixDQUFDO1lBQ3RCQyxRQUFRLEdBQWpCLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLENBQUM7WUFDbkJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFFRCxHQUFHLENBQUNDLElBQUksR0FBRyxLQUFLLEVBQ2RDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBYyxnQkFDL0NDLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBd0IsMEJBQzFERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQW9CO1FBRXhELEVBQUUsRUFBRUUsUUFBUSxFQUFFLENBQUM7WUFDYkEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFPLFFBQUUsUUFBUSxHQUFJLENBQUM7Z0JBQzlDTixJQUFJLElBQUlBLElBQUk7Z0JBQ1pFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVMsVUFBRUksU0FBUyxDQUFDQyxNQUFNLENBQUMsQ0FBTTtnQkFDekQsRUFBRSxFQUFFUixJQUFJLEVBQUUsQ0FBQztvQkFDVFMsU0FBUyxDQUFDUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFTLFdBQUcsQ0FBSztvQkFDbERELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQXFCLHNCQUFFSSxTQUFTLENBQUNHLEdBQUcsQ0FBQyxDQUFNO29CQUNsRSxFQUFFLEVBQUVULE9BQU8sRUFBRSxDQUFDO3dCQUNaQSxPQUFPLENBQUNNLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLENBQVE7b0JBQ2hDLENBQUM7b0JBQ0QsRUFBRSxFQUFFTixRQUFRLEVBQUUsQ0FBQzt3QkFDYkEsUUFBUSxDQUFDTyxZQUFZLENBQUMsQ0FBSyxNQUFFLENBQXFCO29CQUNwRCxDQUFDO29CQUNEYixNQUFNLENBQUNRLGdCQUFnQixDQUFDLENBQVEsU0FBRVQsUUFBUTtnQkFDNUMsQ0FBQyxNQUFNLENBQUM7b0JBQ05lLEtBQUssQ0FBQyxHQUFHLEVBQUVILFNBQVMsQ0FBQ1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBUyxXQUFHLENBQU87b0JBQy9ERCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFvQixxQkFBRUksU0FBUyxDQUFDTSxNQUFNLENBQUMsQ0FBTTtvQkFDcEUsRUFBRSxFQUFFWixPQUFPLEVBQUUsQ0FBQzt3QkFDWkEsT0FBTyxDQUFDTSxTQUFTLENBQUNNLE1BQU0sQ0FBQyxDQUFRO29CQUNuQyxDQUFDO29CQUVELEVBQUUsRUFBRVQsUUFBUSxFQUFFLENBQUM7d0JBQ2JBLFFBQVEsQ0FBQ08sWUFBWSxDQUFDLENBQUssTUFBRSxDQUFvQjtvQkFDbkQsQ0FBQztvQkFDRGIsTUFBTSxDQUFDZ0IsbUJBQW1CLENBQUMsQ0FBUSxTQUFFakIsUUFBUTtnQkFDL0MsQ0FBQztZQUNILENBQUM7WUFDREssUUFBUSxDQUFDYSxnQkFBZ0IsQ0FBQyxDQUFjLGVBQUVDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO2dCQUMzREEsSUFBSSxDQUFDWCxnQkFBZ0IsQ0FBQyxDQUFPLFFBQUUsUUFBUSxHQUFGLENBQUM7b0JBQ3BDTSxLQUFLLENBQUMsR0FBRyxFQUFFSCxTQUFTLENBQUNQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVMsV0FBRyxDQUFPO29CQUMvREQsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBb0IscUJBQUVJLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLENBQU07b0JBQ3BFLEVBQUUsRUFBRVosT0FBTyxFQUFFLENBQUM7d0JBQ1pBLE9BQU8sQ0FBQ00sU0FBUyxDQUFDTSxNQUFNLENBQUMsQ0FBUTtvQkFDbkMsQ0FBQztvQkFFRCxFQUFFLEVBQUVULFFBQVEsRUFBRSxDQUFDO3dCQUNiQSxRQUFRLENBQUNPLFlBQVksQ0FBQyxDQUFLLE1BQUUsQ0FBb0I7b0JBQ25ELENBQUM7b0JBQ0RiLE1BQU0sQ0FBQ2dCLG1CQUFtQixDQUFDLENBQVEsU0FBRWpCLFFBQVE7Z0JBQy9DLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNESyxRQUFRLENBQ0xhLGdCQUFnQixDQUFDLENBQXFDLHNDQUN0REMsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsS0FBSSxFQUFLLENBQUM7WUFDbEJBLEtBQUksQ0FBQ1gsZ0JBQWdCLENBQUMsQ0FBWSxhQUFFLFFBQVEsR0FBSSxDQUFDO2dCQUMvQyxJQUFJLENBQUNZLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUc7Z0JBQ3hCQyxXQUFXLENBQUMsSUFBSSxFQUFFSixPQUFPLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztvQkFDbkNBLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBSTtnQkFDM0IsQ0FBQztZQUNILENBQUM7WUFDREYsS0FBSSxDQUFDWCxnQkFBZ0IsQ0FBQyxDQUFZLGFBQUUsUUFBUSxHQUFJLENBQUM7Z0JBQy9DSixRQUFRLENBQ0xhLGdCQUFnQixDQUFDLENBQXFDLHNDQUN0REMsT0FBTyxDQUFDLFFBQVEsQ0FBUEssS0FBSyxFQUFLLENBQUM7b0JBQ25CQSxLQUFLLENBQUNILEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUc7Z0JBQzNCLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztRQUNILEVBQUUsRUFBRWpCLFFBQVEsQ0FBQ2EsZ0JBQWdCLENBQUMsQ0FBd0IseUJBQUVPLE1BQU0sRUFBRSxDQUFDO1lBQy9EcEIsUUFBUSxDQUFDYSxnQkFBZ0IsQ0FBQyxDQUF3Qix5QkFBRUMsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7Z0JBQ3JFQSxJQUFJLENBQUNYLGdCQUFnQixDQUFDLENBQU8sUUFBRSxRQUFRLEdBQUksQ0FBQztvQkFDMUNKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVksYUFBRUksU0FBUyxDQUFDRyxHQUFHLENBQUMsQ0FBTztvQkFDMUQsSUFBSSxDQUFDYSxVQUFVLENBQUNBLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsRUFBRWpCLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLENBQVU7Z0JBQ25FLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNELEVBQUUsRUFDQVIsUUFBUSxDQUFDYSxnQkFBZ0IsQ0FBQyxDQUF3Qyx5Q0FBRU8sTUFBTSxFQUMxRSxDQUFDO1lBQ0RwQixRQUFRLENBQ0xhLGdCQUFnQixDQUFDLENBQXdDLHlDQUN6REMsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7Z0JBQ2xCQSxJQUFJLENBQUNYLGdCQUFnQixDQUFDLENBQU8sUUFBRSxRQUFRLEdBQUksQ0FBQztvQkFDMUNKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVksYUFBRUksU0FBUyxDQUFDTSxNQUFNLENBQUMsQ0FBTztvQkFDN0RYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVksYUFBRUksU0FBUyxDQUFDTSxNQUFNLENBQUMsQ0FBVTtnQkFDbEUsQ0FBQztZQUNILENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUNEMUIsc0RBQWUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNyQlMsaUJBQWlCO1FBQ2pCRCxNQUFNLENBQUMrQixNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRS9CLGlCQUFpQjtRQUN6RCxNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDWkQsTUFBTSxDQUFDK0IsTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBcUIsc0JBQUVoQyxpQkFBaUI7UUFDNUQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDRDtRQUFBQSxNQUFNLENBQUMrQixNQUFNO0lBQUEsQ0FBQztJQUNsQixNQUFNOztrRkFFRHJDLGtEQUFJOzs7Ozs7Ozt5RkFDRndDLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBVzs7eUZBQ2pCQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQTJCOzs7Ozs7Ozs7O2lGQUVsREMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTJCOzs7Ozs7OztpRkFDekNELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUEyQjs7Ozs7Ozs7aUZBRXpDNUMsa0ZBQWE7Ozs7Ozs7O2lGQUNiRyxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7O2lGQUN2QnVDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7OzsrRkFDMUNDLENBQUc7b0JBQ0ZELFNBQVMsRUFBQyxDQUE2QjtvQkFDdkNFLEtBQUssRUFBQyxDQUFNO29CQUNaQyxNQUFNLEVBQUMsQ0FBTTtvQkFDYkMsT0FBTyxFQUFDLENBQWU7Ozs7Ozs7bUdBRXRCQyxDQUFJO3dCQUFDQyxDQUFDLEVBQUMsQ0FBNEM7Ozs7Ozs7Ozs7aUZBR3ZEcEQsb0RBQU07Z0JBQUNxRCxFQUFFLEVBQUMsQ0FBTTtnQkFBQ0MsR0FBRyxFQUFDLENBQWlCOzs7Ozs7OztpRkFDdEN0RCxvREFBTTtnQkFBQ3FELEVBQUUsRUFBQyxDQUFLO2dCQUFDQyxHQUFHLEVBQUMsQ0FBZ0I7Ozs7Ozs7O2lGQUNwQ3RELG9EQUFNO2dCQUFDcUQsRUFBRSxFQUFDLENBQVc7Z0JBQUNDLEdBQUcsRUFBQyxDQUFzQjs7Ozs7Ozs7aUZBQ2hEdEQsb0RBQU07Z0JBQ0x1RCxRQUFRLEVBQUMsQ0FBbUI7Z0JBQzVCRixFQUFFLEVBQUMsQ0FBVztnQkFDZEMsR0FBRyxFQUFDLENBQXNCOzs7Ozs7OztpRkFFM0J0RCxvREFBTTtnQkFBQ3FELEVBQUUsRUFBQyxDQUFnQjtnQkFBQ0MsR0FBRyxFQUFDLENBQTJCOzs7Ozs7OztpRkFDMUR0RCxvREFBTTtnQkFBQ3FELEVBQUUsRUFBQyxDQUFTO2dCQUFDQyxHQUFHLEVBQUMsQ0FBeUI7Ozs7Ozs7O2lGQUNqRHRELG9EQUFNO2dCQUFDc0QsR0FBRyxFQUFDLENBQWE7Z0JBQUNDLFFBQVEsRUFBQyxDQUFZOzs7Ozs7Ozs7O0FBR3JELENBQUM7R0FySVFuRCxLQUFLOztRQUNHRCxrREFBUzs7O0tBRGpCQyxLQUFLO0FBdUlkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZy1TY3JlZW4vbG9hZGluZy1zY3JlZW4gXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgb25Sb3V0ZUNoYW5nZURvbmUgPSAoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBub1Njcm9sbCgpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvcGVuID0gZmFsc2UsXHJcbiAgICAgIG5hdkRhcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcG5hdi5kYXJrXCIpLFxyXG4gICAgICBsb2dvQ2hhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wbmF2LmRhcmsgLmxvZ28gaW1nXCIpLFxyXG4gICAgICBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wbmF2IC5tZW51LWljb25cIik7XHJcblxyXG4gICAgaWYgKG1lbnVJY29uKSB7XHJcbiAgICAgIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb3BlbiA9ICFvcGVuO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICBhbmltYXRlRWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1lbnVcIiksIFwiMHB4XCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BuYXYgLm1lbnUtaWNvbiBcIikuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICAgICAgICBpZiAobmF2RGFyaykge1xyXG4gICAgICAgICAgICBuYXZEYXJrLmNsYXNzTGlzdC5hZGQoXCJuYXZsaXRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobG9nb0NoYW4pIHtcclxuICAgICAgICAgICAgbG9nb0NoYW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL2ltZy9sb2dvLWxpZ2h0LnBuZ1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG5vU2Nyb2xsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsYXkoMzAwLCBhbmltYXRlRWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1lbnVcIiksIFwiLTEwMCVcIikpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BuYXYgLm1lbnUtaWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICAgIGlmIChuYXZEYXJrKSB7XHJcbiAgICAgICAgICAgIG5hdkRhcmsuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmxpdFwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAobG9nb0NoYW4pIHtcclxuICAgICAgICAgICAgbG9nb0NoYW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL2ltZy9sb2dvLWRhcmsucG5nXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbm9TY3JvbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1tZW51IGFcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGRlbGF5KDMwMCwgYW5pbWF0ZUVsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtZW51XCIpLCBcIi0xMDAlXCIpKTtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wbmF2IC5tZW51LWljb25cIikuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgICBpZiAobmF2RGFyaykge1xyXG4gICAgICAgICAgICBuYXZEYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZsaXRcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGxvZ29DaGFuKSB7XHJcbiAgICAgICAgICAgIGxvZ29DaGFuLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9pbWcvbG9nby1kYXJrLnBuZ1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG5vU2Nyb2xsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5oYW1lbnUgLm1lbnUtbGlua3MgLm1haW4tbWVudSA+IGxpXCIpXHJcbiAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgIGdldFNpYmxpbmdzKHRoaXMpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5vcGFjaXR5ID0gXCIuNVwiO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5oYW1lbnUgLm1lbnUtbGlua3MgLm1haW4tbWVudSA+IGxpXCIpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtMikgPT4ge1xyXG4gICAgICAgICAgICAgIGl0ZW0yLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1tZW51ID4gbGkgLmRtZW51XCIpLmxlbmd0aCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tbWVudSA+IGxpIC5kbWVudVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIikuY2xhc3NMaXN0LmFkZChcImdvc3ViXCIpO1xyXG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKFwic3ViLW9wZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tbWVudSAuc3ViLW1lbnUgbGkgLnN1Yi1saW5rLmJhY2tcIikubGVuZ3RoXHJcbiAgICApIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLW1lbnUgLnN1Yi1tZW51IGxpIC5zdWItbGluay5iYWNrXCIpXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIikuY2xhc3NMaXN0LnJlbW92ZShcImdvc3ViXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3ViLW9wZW5cIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvblJvdXRlQ2hhbmdlRG9uZSgpO1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgb25Sb3V0ZUNoYW5nZURvbmUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIG9uUm91dGVDaGFuZ2VEb25lKTtcclxuICAgIH07XHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkdhbGF4eU1lZGlhPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWcvTG9nb19UcmFuc3BhcmVudC5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW91c2UtY3Vyc29yIGN1cnNvci1vdXRlclwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdXNlLWN1cnNvciBjdXJzb3ItaW5uZXJcIj48L2Rpdj5cclxuXHJcbiAgICAgIDxMb2FkaW5nU2NyZWVuIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy13cmFwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY2lyY2xlIHN2Zy1jb250ZW50XCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCItMSAtMSAxMDIgMTAyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTUwLDEgYTQ5LDQ5IDAgMCwxIDAsOTggYTQ5LDQ5IDAgMCwxIDAsLTk4XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTY3JpcHQgaWQ9XCJwYWNlXCIgc3JjPVwiL2pzL3BhY2UubWluLmpzXCI+PC9TY3JpcHQ+XHJcbiAgICAgIDxTY3JpcHQgaWQ9XCJ3b3dcIiBzcmM9XCIvanMvd293Lm1pbi5qc1wiPjwvU2NyaXB0PlxyXG4gICAgICA8U2NyaXB0IGlkPVwiYm9vdHN0cmFwXCIgc3JjPVwiL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIGlkPVwic3BsaXR0aW5nXCJcclxuICAgICAgICBzcmM9XCIvanMvc3BsaXR0aW5nLm1pbi5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdCBpZD1cInNpbXBsZVBhcmFsbGF4XCIgc3JjPVwiL2pzL3NpbXBsZVBhcmFsbGF4Lm1pbi5qc1wiPjwvU2NyaXB0PlxyXG4gICAgICA8U2NyaXB0IGlkPVwiaXNvdG9wZVwiIHNyYz1cIi9qcy9pc290b3BlLnBrZ2QubWluLmpzXCI+PC9TY3JpcHQ+XHJcbiAgICAgIDxTY3JpcHQgc3JjPVwiL2pzL21haW4uanNcIiBzdHJhdGVneT1cImxhenlPbmxvYWRcIj48L1NjcmlwdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTY3JpcHQiLCJIZWFkIiwiTG9hZGluZ1NjcmVlbiIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwib25Sb3V0ZUNoYW5nZURvbmUiLCJub1Njcm9sbCIsIndpbmRvdyIsInNjcm9sbFRvIiwib3BlbiIsIm5hdkRhcmsiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dvQ2hhbiIsIm1lbnVJY29uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFuaW1hdGVFbCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImRlbGF5IiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlIiwib3BhY2l0eSIsImdldFNpYmxpbmdzIiwiaXRlbTIiLCJsZW5ndGgiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsInVzZUVmZmVjdCIsImV2ZW50cyIsIm9uIiwib2ZmIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBhdGgiLCJkIiwiaWQiLCJzcmMiLCJzdHJhdGVneSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

});