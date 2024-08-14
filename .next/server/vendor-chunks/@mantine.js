"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@mantine";
exports.ids = ["vendor-chunks/@mantine"];
exports.modules = {

/***/ "(ssr)/./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useIntersection: () => (/* binding */ useIntersection)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n'use client';\n\n\nfunction useIntersection(options) {\n  const [entry, setEntry] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (element) => {\n      if (observer.current) {\n        observer.current.disconnect();\n        observer.current = null;\n      }\n      if (element === null) {\n        setEntry(null);\n        return;\n      }\n      observer.current = new IntersectionObserver(([_entry]) => {\n        setEntry(_entry);\n      }, options);\n      observer.current.observe(element);\n    },\n    [options?.rootMargin, options?.root, options?.threshold]\n  );\n  return { ref, entry };\n}\n\n\n//# sourceMappingURL=use-intersection.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQG1hbnRpbmUvaG9va3MvZXNtL3VzZS1pbnRlcnNlY3Rpb24vdXNlLWludGVyc2VjdGlvbi5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNzRDs7QUFFdEQ7QUFDQSw0QkFBNEIsK0NBQVE7QUFDcEMsbUJBQW1CLDZDQUFNO0FBQ3pCLGNBQWMsa0RBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUUyQjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aWxsLy4vbm9kZV9tb2R1bGVzL0BtYW50aW5lL2hvb2tzL2VzbS91c2UtaW50ZXJzZWN0aW9uL3VzZS1pbnRlcnNlY3Rpb24ubWpzPzgwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbihvcHRpb25zKSB7XG4gIGNvbnN0IFtlbnRyeSwgc2V0RW50cnldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9ic2VydmVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCByZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKG9ic2VydmVyLmN1cnJlbnQpIHtcbiAgICAgICAgb2JzZXJ2ZXIuY3VycmVudC5kaXNjb25uZWN0KCk7XG4gICAgICAgIG9ic2VydmVyLmN1cnJlbnQgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgc2V0RW50cnkobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9ic2VydmVyLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtfZW50cnldKSA9PiB7XG4gICAgICAgIHNldEVudHJ5KF9lbnRyeSk7XG4gICAgICB9LCBvcHRpb25zKTtcbiAgICAgIG9ic2VydmVyLmN1cnJlbnQub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9LFxuICAgIFtvcHRpb25zPy5yb290TWFyZ2luLCBvcHRpb25zPy5yb290LCBvcHRpb25zPy50aHJlc2hvbGRdXG4gICk7XG4gIHJldHVybiB7IHJlZiwgZW50cnkgfTtcbn1cblxuZXhwb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.mjs\n");

/***/ })

};
;