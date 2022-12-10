(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@arcgis/core/core/workers/request.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/request.js ***!
  \***********************************************************/
/*! exports provided: execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return a; });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global.js */ "./node_modules/@arcgis/core/core/global.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s;function a(a,n={}){let o=n.responseType;o?"array-buffer"!==o&&"blob"!==o&&"json"!==o&&"native"!==o&&"native-request-init"!==o&&"text"!==o&&(o="text"):o="json";const i=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(n.signal);return delete n.signal,_global_js__WEBPACK_IMPORTED_MODULE_1__["default"].invokeStaticMessage("request",{url:a,options:n},{signal:i}).then((async t=>{let r,l,u,c,f;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==o&&"text"!==o&&"blob"!==o||(r=new Blob([t.data]),"json"!==o&&"text"!==o||(s||(s=new FileReaderSync),c=s.readAsText(r),"json"!==o)))){try{l=JSON.parse(c||null)}catch(b){const t={...b,url:a,requestOptions:n};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("request:server",b.message,t)}if(l.error){const t={...l.error,url:a,requestOptions:n};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("request:server",l.error.message,t)}}}else"native"===o&&(t.data.signal=i,u=await fetch(t.data.url,t.data));switch(o){case"blob":f=r;break;case"json":f=l;break;case"native":f=u;break;case"text":f=c;break;default:f=t.data}return{data:f,requestOptions:n,ssl:t.ssl,url:a}}))}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2NvcmUvd29ya2Vycy9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDNEYsTUFBTSxpQkFBaUIsRUFBRSxxQkFBcUIsdUhBQXVILFFBQVEsd0RBQUMsV0FBVyx1QkFBdUIsa0RBQUMsZ0NBQWdDLGdCQUFnQixFQUFFLFNBQVMsa0JBQWtCLGNBQWMsNENBQTRDLG1KQUFtSixJQUFJLHNCQUFzQixTQUFTLFNBQVMsNkJBQTZCLFVBQVUsaURBQUMsK0JBQStCLFlBQVksU0FBUyxtQ0FBbUMsVUFBVSxpREFBQyx1Q0FBdUMscUVBQXFFLFVBQVUsZUFBZSxNQUFNLGVBQWUsTUFBTSxpQkFBaUIsTUFBTSxlQUFlLE1BQU0saUJBQWlCLE9BQU8seUNBQXlDLEdBQXdCIiwiZmlsZSI6IjEuZTIzNWM5MWMzODk2Njk2NDI0ZDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yMC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0IGUgZnJvbVwiLi4vRXJyb3IuanNcIjtpbXBvcnQgdCBmcm9tXCIuLi9nbG9iYWwuanNcIjtpbXBvcnR7dW53cmFwIGFzIHJ9ZnJvbVwiLi4vbWF5YmUuanNcIjtsZXQgcztmdW5jdGlvbiBhKGEsbj17fSl7bGV0IG89bi5yZXNwb25zZVR5cGU7bz9cImFycmF5LWJ1ZmZlclwiIT09byYmXCJibG9iXCIhPT1vJiZcImpzb25cIiE9PW8mJlwibmF0aXZlXCIhPT1vJiZcIm5hdGl2ZS1yZXF1ZXN0LWluaXRcIiE9PW8mJlwidGV4dFwiIT09byYmKG89XCJ0ZXh0XCIpOm89XCJqc29uXCI7Y29uc3QgaT1yKG4uc2lnbmFsKTtyZXR1cm4gZGVsZXRlIG4uc2lnbmFsLHQuaW52b2tlU3RhdGljTWVzc2FnZShcInJlcXVlc3RcIix7dXJsOmEsb3B0aW9uczpufSx7c2lnbmFsOml9KS50aGVuKChhc3luYyB0PT57bGV0IHIsbCx1LGMsZjtpZih0LmRhdGEpaWYodC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpe2lmKCEoXCJqc29uXCIhPT1vJiZcInRleHRcIiE9PW8mJlwiYmxvYlwiIT09b3x8KHI9bmV3IEJsb2IoW3QuZGF0YV0pLFwianNvblwiIT09byYmXCJ0ZXh0XCIhPT1vfHwoc3x8KHM9bmV3IEZpbGVSZWFkZXJTeW5jKSxjPXMucmVhZEFzVGV4dChyKSxcImpzb25cIiE9PW8pKSkpe3RyeXtsPUpTT04ucGFyc2UoY3x8bnVsbCl9Y2F0Y2goYil7Y29uc3QgdD17Li4uYix1cmw6YSxyZXF1ZXN0T3B0aW9uczpufTt0aHJvdyBuZXcgZShcInJlcXVlc3Q6c2VydmVyXCIsYi5tZXNzYWdlLHQpfWlmKGwuZXJyb3Ipe2NvbnN0IHQ9ey4uLmwuZXJyb3IsdXJsOmEscmVxdWVzdE9wdGlvbnM6bn07dGhyb3cgbmV3IGUoXCJyZXF1ZXN0OnNlcnZlclwiLGwuZXJyb3IubWVzc2FnZSx0KX19fWVsc2VcIm5hdGl2ZVwiPT09byYmKHQuZGF0YS5zaWduYWw9aSx1PWF3YWl0IGZldGNoKHQuZGF0YS51cmwsdC5kYXRhKSk7c3dpdGNoKG8pe2Nhc2VcImJsb2JcIjpmPXI7YnJlYWs7Y2FzZVwianNvblwiOmY9bDticmVhaztjYXNlXCJuYXRpdmVcIjpmPXU7YnJlYWs7Y2FzZVwidGV4dFwiOmY9YzticmVhaztkZWZhdWx0OmY9dC5kYXRhfXJldHVybntkYXRhOmYscmVxdWVzdE9wdGlvbnM6bixzc2w6dC5zc2wsdXJsOmF9fSkpfWV4cG9ydHthIGFzIGV4ZWN1dGV9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==