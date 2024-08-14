/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cross-fetch";
exports.ids = ["vendor-chunks/cross-fetch"];
exports.modules = {

/***/ "(rsc)/./node_modules/cross-fetch/dist/node-polyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/node-polyfill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const fetchNode = __webpack_require__(/*! ./node-ponyfill */ \"(rsc)/./node_modules/cross-fetch/dist/node-ponyfill.js\");\nconst fetch = fetchNode.fetch.bind({});\nfetch.polyfill = true;\nif (!global.fetch) {\n    global.fetch = fetch;\n    global.Response = fetchNode.Response;\n    global.Headers = fetchNode.Headers;\n    global.Request = fetchNode.Request;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9ub2RlLXBvbHlmaWxsLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFlBQVlDLG1CQUFPQSxDQUFDO0FBQzFCLE1BQU1DLFFBQVFGLFVBQVVFLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUM7QUFFcENELE1BQU1FLFFBQVEsR0FBRztBQUVqQixJQUFJLENBQUNDLE9BQU9ILEtBQUssRUFBRTtJQUNqQkcsT0FBT0gsS0FBSyxHQUFHQTtJQUNmRyxPQUFPQyxRQUFRLEdBQUdOLFVBQVVNLFFBQVE7SUFDcENELE9BQU9FLE9BQU8sR0FBR1AsVUFBVU8sT0FBTztJQUNsQ0YsT0FBT0csT0FBTyxHQUFHUixVQUFVUSxPQUFPO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpbGwvLi9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9ub2RlLXBvbHlmaWxsLmpzPzI2M2MiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmV0Y2hOb2RlID0gcmVxdWlyZSgnLi9ub2RlLXBvbnlmaWxsJylcbmNvbnN0IGZldGNoID0gZmV0Y2hOb2RlLmZldGNoLmJpbmQoe30pXG5cbmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxuXG5pZiAoIWdsb2JhbC5mZXRjaCkge1xuICBnbG9iYWwuZmV0Y2ggPSBmZXRjaFxuICBnbG9iYWwuUmVzcG9uc2UgPSBmZXRjaE5vZGUuUmVzcG9uc2VcbiAgZ2xvYmFsLkhlYWRlcnMgPSBmZXRjaE5vZGUuSGVhZGVyc1xuICBnbG9iYWwuUmVxdWVzdCA9IGZldGNoTm9kZS5SZXF1ZXN0XG59XG4iXSwibmFtZXMiOlsiZmV0Y2hOb2RlIiwicmVxdWlyZSIsImZldGNoIiwiYmluZCIsInBvbHlmaWxsIiwiZ2xvYmFsIiwiUmVzcG9uc2UiLCJIZWFkZXJzIiwiUmVxdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/cross-fetch/dist/node-polyfill.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/cross-fetch/dist/node-ponyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/node-ponyfill.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nconst nodeFetch = __webpack_require__(/*! node-fetch */ \"(rsc)/./node_modules/node-fetch/lib/index.js\");\nconst realFetch = nodeFetch.default || nodeFetch;\nconst fetch = function(url, options) {\n    // Support schemaless URIs on the server for parity with the browser.\n    // Ex: //github.com/ -> https://github.com/\n    if (/^\\/\\//.test(url)) {\n        url = \"https:\" + url;\n    }\n    return realFetch.call(this, url, options);\n};\nfetch.ponyfill = true;\nmodule.exports = exports = fetch;\nexports.fetch = fetch;\nexports.Headers = nodeFetch.Headers;\nexports.Request = nodeFetch.Request;\nexports.Response = nodeFetch.Response;\n// Needed for TypeScript consumers without esModuleInterop.\nexports[\"default\"] = fetch;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9ub2RlLXBvbnlmaWxsLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZQyxtQkFBT0EsQ0FBQztBQUMxQixNQUFNQyxZQUFZRixVQUFVRyxPQUFPLElBQUlIO0FBRXZDLE1BQU1JLFFBQVEsU0FBVUMsR0FBRyxFQUFFQyxPQUFPO0lBQ2xDLHFFQUFxRTtJQUNyRSwyQ0FBMkM7SUFDM0MsSUFBSSxRQUFRQyxJQUFJLENBQUNGLE1BQU07UUFDckJBLE1BQU0sV0FBV0E7SUFDbkI7SUFDQSxPQUFPSCxVQUFVTSxJQUFJLENBQUMsSUFBSSxFQUFFSCxLQUFLQztBQUNuQztBQUVBRixNQUFNSyxRQUFRLEdBQUc7QUFFakJDLE9BQU9DLE9BQU8sR0FBR0EsVUFBVVA7QUFDM0JPLGFBQWEsR0FBR1A7QUFDaEJPLGVBQWUsR0FBR1gsVUFBVVksT0FBTztBQUNuQ0QsZUFBZSxHQUFHWCxVQUFVYSxPQUFPO0FBQ25DRixnQkFBZ0IsR0FBR1gsVUFBVWMsUUFBUTtBQUVyQywyREFBMkQ7QUFDM0RILGtCQUFlLEdBQUdQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpbGwvLi9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9ub2RlLXBvbnlmaWxsLmpzPzUzN2EiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZUZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXG5jb25zdCByZWFsRmV0Y2ggPSBub2RlRmV0Y2guZGVmYXVsdCB8fCBub2RlRmV0Y2hcblxuY29uc3QgZmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIC8vIFN1cHBvcnQgc2NoZW1hbGVzcyBVUklzIG9uIHRoZSBzZXJ2ZXIgZm9yIHBhcml0eSB3aXRoIHRoZSBicm93c2VyLlxuICAvLyBFeDogLy9naXRodWIuY29tLyAtPiBodHRwczovL2dpdGh1Yi5jb20vXG4gIGlmICgvXlxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gJ2h0dHBzOicgKyB1cmxcbiAgfVxuICByZXR1cm4gcmVhbEZldGNoLmNhbGwodGhpcywgdXJsLCBvcHRpb25zKVxufVxuXG5mZXRjaC5wb255ZmlsbCA9IHRydWVcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmV0Y2hcbmV4cG9ydHMuZmV0Y2ggPSBmZXRjaFxuZXhwb3J0cy5IZWFkZXJzID0gbm9kZUZldGNoLkhlYWRlcnNcbmV4cG9ydHMuUmVxdWVzdCA9IG5vZGVGZXRjaC5SZXF1ZXN0XG5leHBvcnRzLlJlc3BvbnNlID0gbm9kZUZldGNoLlJlc3BvbnNlXG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBjb25zdW1lcnMgd2l0aG91dCBlc01vZHVsZUludGVyb3AuXG5leHBvcnRzLmRlZmF1bHQgPSBmZXRjaFxuIl0sIm5hbWVzIjpbIm5vZGVGZXRjaCIsInJlcXVpcmUiLCJyZWFsRmV0Y2giLCJkZWZhdWx0IiwiZmV0Y2giLCJ1cmwiLCJvcHRpb25zIiwidGVzdCIsImNhbGwiLCJwb255ZmlsbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJIZWFkZXJzIiwiUmVxdWVzdCIsIlJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/cross-fetch/dist/node-ponyfill.js\n");

/***/ })

};
;