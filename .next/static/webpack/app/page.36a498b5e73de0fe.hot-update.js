/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/process.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nvar _global_process, _global_process1;\nmodule.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === \"object\" ? __webpack_require__.g.process : __webpack_require__(/*! next/dist/compiled/process */ \"(app-pages-browser)/./node_modules/next/dist/compiled/process/browser.js\");\n\n//# sourceMappingURL=process.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3Byb2Nlc3MuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBLHFDQUFxQyxxQkFBTSxpRkFBaUYscUJBQU0sa0VBQWtFLHFCQUFNLFdBQVcsbUJBQU8sQ0FBQyw0R0FBNEI7O0FBRXpQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3Byb2Nlc3MuanM/MmRkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfZ2xvYmFsX3Byb2Nlc3MsIF9nbG9iYWxfcHJvY2VzczE7XG5tb2R1bGUuZXhwb3J0cyA9ICgoX2dsb2JhbF9wcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3MpID09IG51bGwgPyB2b2lkIDAgOiBfZ2xvYmFsX3Byb2Nlc3MuZW52KSAmJiB0eXBlb2YgKChfZ2xvYmFsX3Byb2Nlc3MxID0gZ2xvYmFsLnByb2Nlc3MpID09IG51bGwgPyB2b2lkIDAgOiBfZ2xvYmFsX3Byb2Nlc3MxLmVudikgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwucHJvY2VzcyA6IHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcHJvY2Vzc1wiKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvY2Vzcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/dist/compiled/process/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/compiled/process/browser.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error(\"setTimeout has not been defined\")}function defaultClearTimeout(){throw new Error(\"clearTimeout has not been defined\")}(function(){try{if(typeof setTimeout===\"function\"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout===\"function\"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title=\"browser\";t.browser=true;t.env={};t.argv=[];t.version=\"\";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error(\"process.binding is not supported\")};t.cwd=function(){return\"/\"};t.chdir=function(e){throw new Error(\"process.chdir is not supported\")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var r=__nccwpck_require__(229);module.exports=r})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcHJvY2Vzcy9icm93c2VyLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxZQUFZLE9BQU8sZ0JBQWdCLG1CQUFtQixNQUFNLE1BQU0sNEJBQTRCLG1EQUFtRCwrQkFBK0IscURBQXFELFlBQVksSUFBSSxtQ0FBbUMsYUFBYSxLQUFLLG9CQUFvQixTQUFTLG1CQUFtQixJQUFJLHFDQUFxQyxlQUFlLEtBQUssdUJBQXVCLFNBQVMsdUJBQXVCLElBQUksdUJBQXVCLG1CQUFtQix1QkFBdUIsMkNBQTJDLGFBQWEsdUJBQXVCLElBQUksY0FBYyxTQUFTLElBQUksd0JBQXdCLFNBQVMsMEJBQTBCLDRCQUE0QixxQkFBcUIsdUJBQXVCLGdEQUFnRCxlQUFlLHVCQUF1QixJQUFJLFlBQVksU0FBUyxJQUFJLHNCQUFzQixTQUFTLHdCQUF3QixTQUFTLFlBQVksTUFBTSxTQUFTLDJCQUEyQixXQUFXLE9BQU8sUUFBUSxhQUFhLGNBQWMsS0FBSyxLQUFLLGFBQWEsY0FBYyxzQkFBc0IsTUFBTSxPQUFPLGtDQUFrQyxPQUFPLGVBQWUsU0FBUyxJQUFJLEtBQUssYUFBYSxNQUFNLFlBQVksS0FBSyxXQUFXLE9BQU8sUUFBUSxtQkFBbUIsdUJBQXVCLG9DQUFvQyx1QkFBdUIsWUFBWSxtQkFBbUIsS0FBSyxxQkFBcUIsc0JBQXNCLHFCQUFxQix5QkFBeUIsbUJBQW1CLFdBQVcsYUFBYSw4QkFBOEIsaUNBQWlDLGtCQUFrQixlQUFlLFNBQVMsVUFBVSxhQUFhLGNBQWMsaUJBQWlCLFVBQVUsbUJBQW1CLFlBQVksV0FBVyxzQkFBc0IsMEJBQTBCLFlBQVksdUJBQXVCLDJCQUEyQix3QkFBd0IsVUFBVSxzQkFBc0IscURBQXFELGlCQUFpQixXQUFXLG9CQUFvQixtREFBbUQsbUJBQW1CLFlBQVksU0FBUyxnQ0FBZ0MsV0FBVyxrQkFBa0IsaUJBQWlCLFlBQVksWUFBWSxXQUFXLElBQUksc0NBQXNDLFFBQVEsUUFBUSxpQkFBaUIsaUJBQWlCLG1FQUFtRSxTQUFTLEtBQUssK0JBQStCLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Byb2Nlc3MvYnJvd3Nlci5qcz83MGI1Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe3ZhciBlPXsyMjk6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5leHBvcnRzPXt9O3ZhciByO3ZhciBuO2Z1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9KGZ1bmN0aW9uKCl7dHJ5e2lmKHR5cGVvZiBzZXRUaW1lb3V0PT09XCJmdW5jdGlvblwiKXtyPXNldFRpbWVvdXR9ZWxzZXtyPWRlZmF1bHRTZXRUaW1vdXR9fWNhdGNoKGUpe3I9ZGVmYXVsdFNldFRpbW91dH10cnl7aWYodHlwZW9mIGNsZWFyVGltZW91dD09PVwiZnVuY3Rpb25cIil7bj1jbGVhclRpbWVvdXR9ZWxzZXtuPWRlZmF1bHRDbGVhclRpbWVvdXR9fWNhdGNoKGUpe249ZGVmYXVsdENsZWFyVGltZW91dH19KSgpO2Z1bmN0aW9uIHJ1blRpbWVvdXQoZSl7aWYocj09PXNldFRpbWVvdXQpe3JldHVybiBzZXRUaW1lb3V0KGUsMCl9aWYoKHI9PT1kZWZhdWx0U2V0VGltb3V0fHwhcikmJnNldFRpbWVvdXQpe3I9c2V0VGltZW91dDtyZXR1cm4gc2V0VGltZW91dChlLDApfXRyeXtyZXR1cm4gcihlLDApfWNhdGNoKHQpe3RyeXtyZXR1cm4gci5jYWxsKG51bGwsZSwwKX1jYXRjaCh0KXtyZXR1cm4gci5jYWxsKHRoaXMsZSwwKX19fWZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChlKXtpZihuPT09Y2xlYXJUaW1lb3V0KXtyZXR1cm4gY2xlYXJUaW1lb3V0KGUpfWlmKChuPT09ZGVmYXVsdENsZWFyVGltZW91dHx8IW4pJiZjbGVhclRpbWVvdXQpe249Y2xlYXJUaW1lb3V0O3JldHVybiBjbGVhclRpbWVvdXQoZSl9dHJ5e3JldHVybiBuKGUpfWNhdGNoKHQpe3RyeXtyZXR1cm4gbi5jYWxsKG51bGwsZSl9Y2F0Y2godCl7cmV0dXJuIG4uY2FsbCh0aGlzLGUpfX19dmFyIGk9W107dmFyIG89ZmFsc2U7dmFyIHU7dmFyIGE9LTE7ZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCl7aWYoIW98fCF1KXtyZXR1cm59bz1mYWxzZTtpZih1Lmxlbmd0aCl7aT11LmNvbmNhdChpKX1lbHNle2E9LTF9aWYoaS5sZW5ndGgpe2RyYWluUXVldWUoKX19ZnVuY3Rpb24gZHJhaW5RdWV1ZSgpe2lmKG8pe3JldHVybn12YXIgZT1ydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7bz10cnVlO3ZhciB0PWkubGVuZ3RoO3doaWxlKHQpe3U9aTtpPVtdO3doaWxlKCsrYTx0KXtpZih1KXt1W2FdLnJ1bigpfX1hPS0xO3Q9aS5sZW5ndGh9dT1udWxsO289ZmFsc2U7cnVuQ2xlYXJUaW1lb3V0KGUpfXQubmV4dFRpY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtmb3IodmFyIHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXt0W3ItMV09YXJndW1lbnRzW3JdfX1pLnB1c2gobmV3IEl0ZW0oZSx0KSk7aWYoaS5sZW5ndGg9PT0xJiYhbyl7cnVuVGltZW91dChkcmFpblF1ZXVlKX19O2Z1bmN0aW9uIEl0ZW0oZSx0KXt0aGlzLmZ1bj1lO3RoaXMuYXJyYXk9dH1JdGVtLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfTt0LnRpdGxlPVwiYnJvd3NlclwiO3QuYnJvd3Nlcj10cnVlO3QuZW52PXt9O3QuYXJndj1bXTt0LnZlcnNpb249XCJcIjt0LnZlcnNpb25zPXt9O2Z1bmN0aW9uIG5vb3AoKXt9dC5vbj1ub29wO3QuYWRkTGlzdGVuZXI9bm9vcDt0Lm9uY2U9bm9vcDt0Lm9mZj1ub29wO3QucmVtb3ZlTGlzdGVuZXI9bm9vcDt0LnJlbW92ZUFsbExpc3RlbmVycz1ub29wO3QuZW1pdD1ub29wO3QucHJlcGVuZExpc3RlbmVyPW5vb3A7dC5wcmVwZW5kT25jZUxpc3RlbmVyPW5vb3A7dC5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuW119O3QuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX07dC5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn07dC5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9O3QudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe3ZhciBuPXRbcl07aWYobiE9PXVuZGVmaW5lZCl7cmV0dXJuIG4uZXhwb3J0c312YXIgaT10W3JdPXtleHBvcnRzOnt9fTt2YXIgbz10cnVlO3RyeXtlW3JdKGksaS5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO289ZmFsc2V9ZmluYWxseXtpZihvKWRlbGV0ZSB0W3JdfXJldHVybiBpLmV4cG9ydHN9aWYodHlwZW9mIF9fbmNjd3Bja19yZXF1aXJlX18hPT1cInVuZGVmaW5lZFwiKV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3ZhciByPV9fbmNjd3Bja19yZXF1aXJlX18oMjI5KTttb2R1bGUuZXhwb3J0cz1yfSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/process/browser.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/ScrollViewSplits.tsx":
/*!*********************************************!*\
  !*** ./app/components/ScrollViewSplits.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n// Initial candidate data\nconst initialCandidates = [\n    {\n        id: \"1\",\n        name: \"Narendra Modi\",\n        votes: 0\n    },\n    {\n        id: \"2\",\n        name: \"Donald Trump\",\n        votes: 0\n    },\n    {\n        id: \"3\",\n        name: \"Bobby Kennedy\",\n        votes: 0\n    }\n];\nconst VotingScrollView = ()=>{\n    _s();\n    const [candidates, setCandidates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialCandidates);\n    const [loadingState, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const ref = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref,\n        offset: [\n            \"start 1.2\",\n            \"center 0.3\"\n        ]\n    });\n    const rotate = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"10deg\",\n        \"0deg\"\n    ]);\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"20rem\",\n        \"0rem\"\n    ]);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"20rem\",\n        \"0rem\"\n    ]);\n    // Initialize candidates and fetch their vote counts\n    const initializeCandidates = async ()=>{\n        try {\n            const response = await axios.post(\"https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/Initialize\", {\n                network: \"TESTNET\",\n                blockchain: \"KALP\",\n                walletAddress: \"5023f7fc565eb7de7f6256a3be204e75fe575225\",\n                args: {\n                    candidateNames: candidates.map((c)=>c.name)\n                }\n            }, {\n                headers: {\n                    \"x-api-key\": process.env.NEXT_PUBLIC_X_API_KEY\n                }\n            });\n            const updatedCandidates = candidates.map((candidate, index)=>{\n                var _response_data_result_quantities, _response_data_result;\n                return {\n                    ...candidate,\n                    votes: Number((_response_data_result = response.data.result) === null || _response_data_result === void 0 ? void 0 : (_response_data_result_quantities = _response_data_result.quantities) === null || _response_data_result_quantities === void 0 ? void 0 : _response_data_result_quantities[index]) || 0\n                };\n            });\n            setCandidates(updatedCandidates);\n        } catch (error) {\n            console.error(\"Error initializing candidates:\", error);\n        }\n    };\n    // Handle voting logic\n    const handleVote = async (id)=>{\n        setLoadingState((prevState)=>({\n                ...prevState,\n                [id]: \"voting\"\n            }));\n        setCandidates((prevCandidates)=>prevCandidates.map((candidate)=>candidate.id === id ? {\n                    ...candidate,\n                    votes: candidate.votes + 1\n                } : candidate));\n        try {\n            const response = await axios.post(\"https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/Vote\", {\n                network: \"TESTNET\",\n                blockchain: \"KALP\",\n                walletAddress: \"5023f7fc565eb7de7f6256a3be204e75fe575225\",\n                args: {\n                    candidateID: id\n                }\n            }, {\n                headers: {\n                    \"x-api-key\": process.env.NEXT_PUBLIC_X_API_KEY\n                }\n            });\n            console.log(\"Vote response:\", response.data);\n            alert(\"Vote successful for candidate ID: \".concat(id));\n        } catch (error) {\n            console.error(\"Error voting for candidate ID \".concat(id, \":\"), error);\n            alert(\"Voting failed for candidate ID: \".concat(id, \". Please try again.\"));\n        } finally{\n            setLoadingState((prevState)=>({\n                    ...prevState,\n                    [id]: null\n                }));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initializeCandidates();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"w-full h-[50vh] flex justify-between items-center\",\n        children: candidates.map((candidate)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                style: {\n                    rotate,\n                    x,\n                    y\n                },\n                className: \"bg-white transition-all duration-300 ease-out origin-bottom-right rounded-2xl h-full flex-[1.5] p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-[2.5rem] font-bold uppercase text-left\",\n                        children: candidate.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ScrollViewSplits.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-left\",\n                        children: [\n                            \"Vote Count: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NumberTicker, {\n                                value: candidate.votes\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ScrollViewSplits.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 72\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ScrollViewSplits.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-start mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                            variant: \"outline\",\n                            size: \"sm\",\n                            onClick: ()=>handleVote(candidate.id),\n                            disabled: loadingState[candidate.id] === \"voting\",\n                            children: loadingState[candidate.id] === \"voting\" ? \"Loading...\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Plus, {\n                                        className: \"mr-2 h-4 w-4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ScrollViewSplits.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 89\n                                    }, undefined),\n                                    \" Vote\"\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ScrollViewSplits.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ScrollViewSplits.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, candidate.id, true, {\n                fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ScrollViewSplits.tsx\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ScrollViewSplits.tsx\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VotingScrollView, \"RbukTvbQ+EDXUdJxAgXfd7nbwuI=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = VotingScrollView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VotingScrollView);\nvar _c;\n$RefreshReg$(_c, \"VotingScrollView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Njcm9sbFZpZXdTcGxpdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYTtBQUVoRSx5QkFBeUI7QUFDekIsTUFBTU0sb0JBQW9CO0lBQ3RCO1FBQUVDLElBQUk7UUFBS0MsTUFBTTtRQUFpQkMsT0FBTztJQUFFO0lBQzNDO1FBQUVGLElBQUk7UUFBS0MsTUFBTTtRQUFnQkMsT0FBTztJQUFFO0lBQzFDO1FBQUVGLElBQUk7UUFBS0MsTUFBTTtRQUFpQkMsT0FBTztJQUFFO0NBQzlDO0FBRUQsTUFBTUMsbUJBQW1COztJQUNyQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUNLO0lBQzdDLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDLENBQUM7SUFFbEQsTUFBTWMsTUFBdUNmLG1EQUFZLENBQWlCO0lBQzFFLE1BQU0sRUFBRWlCLGVBQWUsRUFBRSxHQUFHZCx3REFBU0EsQ0FBQztRQUNsQ2UsUUFBUUg7UUFDUkksUUFBUTtZQUFDO1lBQWE7U0FBYTtJQUN2QztJQUVBLE1BQU1DLFNBQVNoQiwyREFBWUEsQ0FBQ2EsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFTO0tBQU87SUFDdEUsTUFBTUksSUFBSWpCLDJEQUFZQSxDQUFDYSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVM7S0FBTztJQUNqRSxNQUFNSyxJQUFJbEIsMkRBQVlBLENBQUNhLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBUztLQUFPO0lBRWpFLG9EQUFvRDtJQUNwRCxNQUFNTSx1QkFBdUI7UUFDekIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUMsSUFBSSxDQUM3QixvSEFDQTtnQkFDSUMsU0FBUztnQkFDVEMsWUFBWTtnQkFDWkMsZUFBZTtnQkFDZkMsTUFBTTtvQkFDRkMsZ0JBQWdCcEIsV0FBV3FCLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRXpCLElBQUk7Z0JBQzlDO1lBQ0osR0FDQTtnQkFDSTBCLFNBQVM7b0JBQ0wsYUFBYUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxxQkFBcUI7Z0JBQ2xEO1lBQ0o7WUFHSixNQUFNQyxvQkFBb0IzQixXQUFXcUIsR0FBRyxDQUFDLENBQUNPLFdBQVdDO29CQUVuQ2hCLGtDQUFBQTt1QkFGOEM7b0JBQzVELEdBQUdlLFNBQVM7b0JBQ1o5QixPQUFPZ0MsUUFBT2pCLHdCQUFBQSxTQUFTa0IsSUFBSSxDQUFDQyxNQUFNLGNBQXBCbkIsNkNBQUFBLG1DQUFBQSxzQkFBc0JvQixVQUFVLGNBQWhDcEIsdURBQUFBLGdDQUFrQyxDQUFDZ0IsTUFBTSxLQUFLO2dCQUNoRTs7WUFFQTVCLGNBQWMwQjtRQUNsQixFQUFFLE9BQU9PLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDcEQ7SUFDSjtJQUVBLHNCQUFzQjtJQUN0QixNQUFNRSxhQUFhLE9BQU94QztRQUN0Qk8sZ0JBQWdCLENBQUNrQyxZQUFlO2dCQUFFLEdBQUdBLFNBQVM7Z0JBQUUsQ0FBQ3pDLEdBQUcsRUFBRTtZQUFTO1FBRS9ESyxjQUFjLENBQUNxQyxpQkFDWEEsZUFBZWpCLEdBQUcsQ0FBQ08sQ0FBQUEsWUFDZkEsVUFBVWhDLEVBQUUsS0FBS0EsS0FBSztvQkFBRSxHQUFHZ0MsU0FBUztvQkFBRTlCLE9BQU84QixVQUFVOUIsS0FBSyxHQUFHO2dCQUFFLElBQUk4QjtRQUk3RSxJQUFJO1lBQ0EsTUFBTWYsV0FBVyxNQUFNQyxNQUFNQyxJQUFJLENBQzdCLDhHQUNBO2dCQUNJQyxTQUFTO2dCQUNUQyxZQUFZO2dCQUNaQyxlQUFlO2dCQUNmQyxNQUFNO29CQUNGb0IsYUFBYTNDO2dCQUNqQjtZQUNKLEdBQ0E7Z0JBQ0kyQixTQUFTO29CQUNMLGFBQWFDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MscUJBQXFCO2dCQUNsRDtZQUNKO1lBR0pTLFFBQVFLLEdBQUcsQ0FBQyxrQkFBa0IzQixTQUFTa0IsSUFBSTtZQUMzQ1UsTUFBTSxxQ0FBd0MsT0FBSDdDO1FBQy9DLEVBQUUsT0FBT3NDLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLGlDQUFvQyxPQUFIdEMsSUFBRyxNQUFJc0M7WUFDdERPLE1BQU0sbUNBQXNDLE9BQUg3QyxJQUFHO1FBQ2hELFNBQVU7WUFDTk8sZ0JBQWdCLENBQUNrQyxZQUFlO29CQUFFLEdBQUdBLFNBQVM7b0JBQUUsQ0FBQ3pDLEdBQUcsRUFBRTtnQkFBSztRQUMvRDtJQUNKO0lBRUFMLGdEQUFTQSxDQUFDO1FBQ05xQjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDOEI7UUFBSXRDLEtBQUtBO1FBQUt1QyxXQUFZO2tCQUN0QjNDLFdBQVdxQixHQUFHLENBQUMsQ0FBQ08sMEJBQ2IsOERBQUNsQyxpREFBTUEsQ0FBQ2dELEdBQUc7Z0JBRVBFLE9BQU87b0JBQUVuQztvQkFBUUM7b0JBQUdDO2dCQUFFO2dCQUN0QmdDLFdBQVk7O2tDQUNaLDhEQUFDRTt3QkFBR0YsV0FBWTtrQ0FDWGYsVUFBVS9CLElBQUk7Ozs7OztrQ0FFbkIsOERBQUNpRDt3QkFBRUgsV0FBWTs7NEJBQXdCOzBDQUFZLDhEQUFDSTtnQ0FBYUMsT0FBT3BCLFVBQVU5QixLQUFLOzs7Ozs7Ozs7Ozs7a0NBQ3ZGLDhEQUFDNEM7d0JBQUlDLFdBQVk7a0NBQ2IsNEVBQUNNOzRCQUNHQyxTQUFROzRCQUNSQyxNQUFLOzRCQUNMQyxTQUFTLElBQU1oQixXQUFXUixVQUFVaEMsRUFBRTs0QkFDdEN5RCxVQUFVbkQsWUFBWSxDQUFDMEIsVUFBVWhDLEVBQUUsQ0FBQyxLQUFLO3NDQUV4Q00sWUFBWSxDQUFDMEIsVUFBVWhDLEVBQUUsQ0FBQyxLQUFLLFdBQVcsNkJBQWU7O2tEQUFFLDhEQUFDMEQ7d0NBQUtYLFdBQVU7Ozs7OztvQ0FBaUI7Ozs7Ozs7Ozs7Ozs7O2VBZGhHZixVQUFVaEMsRUFBRTs7Ozs7Ozs7OztBQXFCckM7R0FoSE1HOztRQUswQlAsb0RBQVNBO1FBS3RCQyx1REFBWUE7UUFDakJBLHVEQUFZQTtRQUNaQSx1REFBWUE7OztLQVpwQk07QUFrSE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TY3JvbGxWaWV3U3BsaXRzLnRzeD81ZjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0sIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vLyBJbml0aWFsIGNhbmRpZGF0ZSBkYXRhXG5jb25zdCBpbml0aWFsQ2FuZGlkYXRlcyA9IFtcbiAgICB7IGlkOiBcIjFcIiwgbmFtZTogXCJOYXJlbmRyYSBNb2RpXCIsIHZvdGVzOiAwIH0sXG4gICAgeyBpZDogXCIyXCIsIG5hbWU6IFwiRG9uYWxkIFRydW1wXCIsIHZvdGVzOiAwIH0sXG4gICAgeyBpZDogXCIzXCIsIG5hbWU6IFwiQm9iYnkgS2VubmVkeVwiLCB2b3RlczogMCB9LFxuXTtcblxuY29uc3QgVm90aW5nU2Nyb2xsVmlldyA9ICgpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzXSA9IHVzZVN0YXRlKGluaXRpYWxDYW5kaWRhdGVzKTtcbiAgICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3QgcmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICAgICAgdGFyZ2V0OiByZWYsXG4gICAgICAgIG9mZnNldDogW1wic3RhcnQgMS4yXCIsIFwiY2VudGVyIDAuM1wiXVxuICAgIH0pO1xuXG4gICAgY29uc3Qgcm90YXRlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbXCIxMGRlZ1wiLCBcIjBkZWdcIl0pO1xuICAgIGNvbnN0IHggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFtcIjIwcmVtXCIsIFwiMHJlbVwiXSk7XG4gICAgY29uc3QgeSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgW1wiMjByZW1cIiwgXCIwcmVtXCJdKTtcblxuICAgIC8vIEluaXRpYWxpemUgY2FuZGlkYXRlcyBhbmQgZmV0Y2ggdGhlaXIgdm90ZSBjb3VudHNcbiAgICBjb25zdCBpbml0aWFsaXplQ2FuZGlkYXRlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9nYXRld2F5LWFwaS5rYWxwLnN0dWRpby92MS9jb250cmFjdC9rYWxwL2ludm9rZS8zTGs3eTFiV0ZIRHZwOFowVmViQkpMVG1RSGpkaVZPOTE3MjY5NTEwMTYyNzMvSW5pdGlhbGl6ZScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiBcIlRFU1RORVRcIixcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogXCJLQUxQXCIsXG4gICAgICAgICAgICAgICAgICAgIHdhbGxldEFkZHJlc3M6IFwiNTAyM2Y3ZmM1NjVlYjdkZTdmNjI1NmEzYmUyMDRlNzVmZTU3NTIyNVwiLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGVOYW1lczogY2FuZGlkYXRlcy5tYXAoYyA9PiBjLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3gtYXBpLWtleSc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1hfQVBJX0tFWSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5tYXAoKGNhbmRpZGF0ZSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uY2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgIHZvdGVzOiBOdW1iZXIocmVzcG9uc2UuZGF0YS5yZXN1bHQ/LnF1YW50aXRpZXM/LltpbmRleF0pIHx8IDBcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgc2V0Q2FuZGlkYXRlcyh1cGRhdGVkQ2FuZGlkYXRlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5pdGlhbGl6aW5nIGNhbmRpZGF0ZXM6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdm90aW5nIGxvZ2ljXG4gICAgY29uc3QgaGFuZGxlVm90ZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nU3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBbaWRdOiAndm90aW5nJyB9KSk7XG5cbiAgICAgICAgc2V0Q2FuZGlkYXRlcygocHJldkNhbmRpZGF0ZXMpID0+XG4gICAgICAgICAgICBwcmV2Q2FuZGlkYXRlcy5tYXAoY2FuZGlkYXRlID0+XG4gICAgICAgICAgICAgICAgY2FuZGlkYXRlLmlkID09PSBpZCA/IHsgLi4uY2FuZGlkYXRlLCB2b3RlczogY2FuZGlkYXRlLnZvdGVzICsgMSB9IDogY2FuZGlkYXRlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9nYXRld2F5LWFwaS5rYWxwLnN0dWRpby92MS9jb250cmFjdC9rYWxwL2ludm9rZS8zTGs3eTFiV0ZIRHZwOFowVmViQkpMVG1RSGpkaVZPOTE3MjY5NTEwMTYyNzMvVm90ZScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiBcIlRFU1RORVRcIixcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogXCJLQUxQXCIsXG4gICAgICAgICAgICAgICAgICAgIHdhbGxldEFkZHJlc3M6IFwiNTAyM2Y3ZmM1NjVlYjdkZTdmNjI1NmEzYmUyMDRlNzVmZTU3NTIyNVwiLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGVJRDogaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAneC1hcGkta2V5JzogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfWF9BUElfS0VZXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVm90ZSByZXNwb25zZTonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIGFsZXJ0KGBWb3RlIHN1Y2Nlc3NmdWwgZm9yIGNhbmRpZGF0ZSBJRDogJHtpZH1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHZvdGluZyBmb3IgY2FuZGlkYXRlIElEICR7aWR9OmAsIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGBWb3RpbmcgZmFpbGVkIGZvciBjYW5kaWRhdGUgSUQ6ICR7aWR9LiBQbGVhc2UgdHJ5IGFnYWluLmApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZ1N0YXRlKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgW2lkXTogbnVsbCB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaW5pdGlhbGl6ZUNhbmRpZGF0ZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2B3LWZ1bGwgaC1bNTB2aF0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyYH0+XG4gICAgICAgICAgICB7Y2FuZGlkYXRlcy5tYXAoKGNhbmRpZGF0ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2FuZGlkYXRlLmlkfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyByb3RhdGUsIHgsIHkgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IG9yaWdpbi1ib3R0b20tcmlnaHQgcm91bmRlZC0yeGwgaC1mdWxsIGZsZXgtWzEuNV0gcC01YH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LVsyLjVyZW1dIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1sZWZ0YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuZGlkYXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZvbnQtbm9ybWFsIHRleHQtbGVmdGB9PlZvdGUgQ291bnQ6IDxOdW1iZXJUaWNrZXIgdmFsdWU9e2NhbmRpZGF0ZS52b3Rlc30gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXgganVzdGlmeS1zdGFydCBtdC01YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVm90ZShjYW5kaWRhdGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nU3RhdGVbY2FuZGlkYXRlLmlkXSA9PT0gJ3ZvdGluZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdTdGF0ZVtjYW5kaWRhdGUuaWRdID09PSAndm90aW5nJyA/IFwiTG9hZGluZy4uLlwiIDogPD48UGx1cyBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPiBWb3RlPC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWb3RpbmdTY3JvbGxWaWV3O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJtb3Rpb24iLCJpbml0aWFsQ2FuZGlkYXRlcyIsImlkIiwibmFtZSIsInZvdGVzIiwiVm90aW5nU2Nyb2xsVmlldyIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwicmVmIiwidXNlUmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwib2Zmc2V0Iiwicm90YXRlIiwieCIsInkiLCJpbml0aWFsaXplQ2FuZGlkYXRlcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwibmV0d29yayIsImJsb2NrY2hhaW4iLCJ3YWxsZXRBZGRyZXNzIiwiYXJncyIsImNhbmRpZGF0ZU5hbWVzIiwibWFwIiwiYyIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfWF9BUElfS0VZIiwidXBkYXRlZENhbmRpZGF0ZXMiLCJjYW5kaWRhdGUiLCJpbmRleCIsIk51bWJlciIsImRhdGEiLCJyZXN1bHQiLCJxdWFudGl0aWVzIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlVm90ZSIsInByZXZTdGF0ZSIsInByZXZDYW5kaWRhdGVzIiwiY2FuZGlkYXRlSUQiLCJsb2ciLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaDEiLCJwIiwiTnVtYmVyVGlja2VyIiwidmFsdWUiLCJCdXR0b24iLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIlBsdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ScrollViewSplits.tsx\n"));

/***/ })

});