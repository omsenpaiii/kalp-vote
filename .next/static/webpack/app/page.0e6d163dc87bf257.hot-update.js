"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/ReverseScrollViewSplits.tsx":
/*!****************************************************!*\
  !*** ./app/components/ReverseScrollViewSplits.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Initial candidate data with votes\nconst initialCandidates = [\n    {\n        id: \"1\",\n        name: \"Narendra Modi\",\n        votes: 0\n    },\n    {\n        id: \"2\",\n        name: \"Donald Trump\",\n        votes: 0\n    },\n    {\n        id: \"3\",\n        name: \"Bobby Kennedy\",\n        votes: 0\n    }\n];\n// Candidate images\nconst candidateImages = {\n    \"1\": \"/images/modi-image.png\",\n    \"2\": \"/images/trump-image\",\n    \"3\": \"/images/kennedy-image.jpeg\"\n};\nconst ReverseScrollViewSplits = ()=>{\n    _s();\n    const [candidates, setCandidates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialCandidates);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const data = localStorage.getItem(\"votes\");\n        if (data) {\n            setCandidates(JSON.parse(data));\n        }\n    }, []);\n    const [loadingState, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref,\n        offset: [\n            \"start 1.2\",\n            \"center 0.35\"\n        ]\n    });\n    const rotate = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"10deg\",\n        \"0deg\"\n    ]);\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"-20rem\",\n        \"0rem\"\n    ]);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"-20rem\",\n        \"0rem\"\n    ]);\n    const fetchCandidateVotes = async ()=>{\n        try {\n            var _response_data_result;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/GetResults\", {\n                network: \"TESTNET\",\n                blockchain: \"KALP\",\n                walletAddress: \"5023f7fc565eb7de7f6256a3be204e75fe575225\"\n            }, {\n                headers: {\n                    \"x-api-key\": \"39f479233c21e4754e9f4caeea52a5626ead3bcd5fbee9328f7073f1feea224221eb51d408780a6f8897a577038192c13ffa78d81cf46e442eec758d51c66134bb6003\"\n                }\n            });\n            const results = ((_response_data_result = response.data.result) === null || _response_data_result === void 0 ? void 0 : _response_data_result.votes) || {};\n            const updatedCandidates = candidates.map((candidate)=>({\n                    ...candidate,\n                    votes: results[candidate.id] || 0\n                }));\n            setCandidates(updatedCandidates);\n            localStorage.setItem(\"votes\", JSON.stringify(updatedCandidates)); // Store updated votes\n        } catch (error) {\n            console.error(\"Error fetching votes:\", error);\n        }\n    };\n    const handleVote = async (id)=>{\n        if (loadingState[id] === \"voting\") return;\n        setLoadingState((prevState)=>({\n                ...prevState,\n                [id]: \"voting\"\n            }));\n        const updatedCandidates = candidates.map((candidate)=>candidate.id === id ? {\n                ...candidate,\n                votes: candidate.votes + 1\n            } : candidate);\n        setCandidates(updatedCandidates);\n        localStorage.setItem(\"votes\", JSON.stringify(updatedCandidates)); // Store updated votes immediately\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/Vote\", {\n                network: \"TESTNET\",\n                blockchain: \"KALP\",\n                walletAddress: \"5023f7fc565eb7de7f6256a3be204e75fe575225\",\n                args: {\n                    candidateID: id\n                }\n            }, {\n                headers: {\n                    \"x-api-key\": \"39f479233c21e4754e9f4caeea52a5626ead3bcd5fbee9328f7073f1feea224221eb51d408780a6f8897a577038192c13ffa78d81cf46e442eec758d51c66134bb6003\"\n                }\n            });\n            console.log(\"Vote response:\", response.data);\n            alert(\"Vote successful for candidate ID: \".concat(id));\n        // No need to fetch votes again; they are already updated locally\n        } catch (error) {\n            console.error(\"Error voting for candidate ID \".concat(id, \":\"), error);\n            alert(\"Voting failed for candidate ID: \".concat(id, \". Please try again.\"));\n        // Do not revert vote count; keep the count updated\n        } finally{\n            setLoadingState((prevState)=>({\n                    ...prevState,\n                    [id]: null\n                }));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedVotes = localStorage.getItem(\"votes\");\n        if (savedVotes) {\n            setCandidates(JSON.parse(savedVotes)); // Restore votes from localStorage\n        } else {\n            fetchCandidateVotes(); // Fetch fresh votes\n        }\n    }, []);\n    // Filter candidate with ID 2 (Donald Trump)\n    const trumpCandidate = candidates.find((candidate)=>candidate.id === \"2\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"w-full h-[50vh] flex justify-between items-center\",\n        children: [\n            trumpCandidate && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                style: {\n                    rotate,\n                    x\n                },\n                className: \"bg-white transition-all duration-300 ease-out origin-bottom-left rounded-2xl h-full flex-[1.5]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: candidateImages[trumpCandidate.id],\n                    alt: \"\".concat(trumpCandidate.name, \" image\"),\n                    className: \"h-full w-full object-cover rounded-2xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omtom\\\\OneDrive\\\\Documents\\\\GitHub\\\\kalp-vote\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omtom\\\\OneDrive\\\\Documents\\\\GitHub\\\\kalp-vote\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                lineNumber: 133,\n                columnNumber: 9\n            }, undefined),\n            trumpCandidate && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                style: {\n                    y\n                },\n                className: \"flex-1 text-white h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-[3rem] font-bold uppercase text-right\",\n                        children: trumpCandidate.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omtom\\\\OneDrive\\\\Documents\\\\GitHub\\\\kalp-vote\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-right\",\n                        children: [\n                            \"Votes: \",\n                            trumpCandidate.votes\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omtom\\\\OneDrive\\\\Documents\\\\GitHub\\\\kalp-vote\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-end mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleVote(trumpCandidate.id),\n                            disabled: loadingState[trumpCandidate.id] === \"voting\",\n                            className: \"p-5 px-10 rounded-full border-[0.25px] border-white\",\n                            children: loadingState[trumpCandidate.id] === \"voting\" ? \"Loading...\" : \"Vote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omtom\\\\OneDrive\\\\Documents\\\\GitHub\\\\kalp-vote\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omtom\\\\OneDrive\\\\Documents\\\\GitHub\\\\kalp-vote\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\omtom\\\\OneDrive\\\\Documents\\\\GitHub\\\\kalp-vote\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                lineNumber: 147,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omtom\\\\OneDrive\\\\Documents\\\\GitHub\\\\kalp-vote\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReverseScrollViewSplits, \"ckCzE/57Zwdda3R7n2wtp6u1lGg=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = ReverseScrollViewSplits;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReverseScrollViewSplits);\nvar _c;\n$RefreshReg$(_c, \"ReverseScrollViewSplits\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1JldmVyc2VTY3JvbGxWaWV3U3BsaXRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJEO0FBQ0s7QUFDdEM7QUFFMUIsb0NBQW9DO0FBQ3BDLE1BQU1RLG9CQUFvQjtJQUN4QjtRQUFFQyxJQUFJO1FBQUtDLE1BQU07UUFBaUJDLE9BQU87SUFBRTtJQUMzQztRQUFFRixJQUFJO1FBQUtDLE1BQU07UUFBZ0JDLE9BQU87SUFBRTtJQUMxQztRQUFFRixJQUFJO1FBQUtDLE1BQU07UUFBaUJDLE9BQU87SUFBRTtDQUM1QztBQUVELG1CQUFtQjtBQUNuQixNQUFNQyxrQkFBMEM7SUFDOUMsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0FBQ1A7QUFFQSxNQUFNQywwQkFBMEI7O0lBTzlCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBa0JPO0lBRTlETixnREFBU0EsQ0FBQztRQUNSLE1BQU1jLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJRixNQUFNO1lBQ1JELGNBQWNJLEtBQUtDLEtBQUssQ0FBQ0o7UUFDM0I7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHckIsK0NBQVFBLENBQXFDLENBQUM7SUFFdEYsTUFBTXNCLE1BQU1wQiw2Q0FBTUEsQ0FBaUI7SUFDbkMsTUFBTSxFQUFFcUIsZUFBZSxFQUFFLEdBQUdwQix3REFBU0EsQ0FBQztRQUNwQ3FCLFFBQVFGO1FBQ1JHLFFBQVE7WUFBQztZQUFhO1NBQWM7SUFDdEM7SUFFQSxNQUFNQyxTQUFTdEIsMkRBQVlBLENBQUNtQixpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVM7S0FBTztJQUN0RSxNQUFNSSxJQUFJdkIsMkRBQVlBLENBQUNtQixpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVU7S0FBTztJQUNsRSxNQUFNSyxJQUFJeEIs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Viw0RUFBQ0U7b0JBQ0NDLEtBQUtsRCxlQUFlLENBQUM0QyxlQUFlL0MsRUFBRSxDQUFDO29CQUN2Q3NELEtBQUssR0FBdUIsT0FBcEJQLGVBQWU5QyxJQUFJLEVBQUM7b0JBQzVCaUQsV0FBVTs7Ozs7Ozs7Ozs7WUFLZkgsZ0NBQ0MsOERBQUNsRCxpREFBTUEsQ0FBQ29ELEdBQUc7Z0JBQUNFLE9BQU87b0JBQUUvQjtnQkFBRTtnQkFBRzhCLFdBQVU7O2tDQUNsQyw4REFBQ0s7d0JBQUdMLFdBQVU7a0NBQThDSCxlQUFlOUMsSUFBSTs7Ozs7O2tDQUMvRSw4REFBQ3VEO3dCQUFFTixXQUFVOzs0QkFBeUI7NEJBQVFILGVBQWU3QyxLQUFLOzs7Ozs7O2tDQUNsRSw4REFBQytDO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDTzs0QkFDQ0MsU0FBUyxJQUFNbEIsV0FBV08sZUFBZS9DLEVBQUU7NEJBQzNDMkQsVUFBVS9DLFlBQVksQ0FBQ21DLGVBQWUvQyxFQUFFLENBQUMsS0FBSzs0QkFDOUNrRCxXQUFVO3NDQUVUdEMsWUFBWSxDQUFDbUMsZUFBZS9DLEVBQUUsQ0FBQyxLQUFLLFdBQVcsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0U7R0FoSk1JOztRQW1Cd0JULG9EQUFTQTtRQUt0QkMsdURBQVlBO1FBQ2pCQSx1REFBWUE7UUFDWkEsdURBQVlBOzs7S0ExQmxCUTtBQWtKTiwrREFBZUEsdUJBQXVCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1JldmVyc2VTY3JvbGxWaWV3U3BsaXRzLnRzeD9lZmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0sIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vLyBJbml0aWFsIGNhbmRpZGF0ZSBkYXRhIHdpdGggdm90ZXNcclxuY29uc3QgaW5pdGlhbENhbmRpZGF0ZXMgPSBbXHJcbiAgeyBpZDogXCIxXCIsIG5hbWU6IFwiTmFyZW5kcmEgTW9kaVwiLCB2b3RlczogMCB9LFxyXG4gIHsgaWQ6IFwiMlwiLCBuYW1lOiBcIkRvbmFsZCBUcnVtcFwiLCB2b3RlczogMCB9LFxyXG4gIHsgaWQ6IFwiM1wiLCBuYW1lOiBcIkJvYmJ5IEtlbm5lZHlcIiwgdm90ZXM6IDAgfSxcclxuXTtcclxuXHJcbi8vIENhbmRpZGF0ZSBpbWFnZXNcclxuY29uc3QgY2FuZGlkYXRlSW1hZ2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gIFwiMVwiOiBcIi9pbWFnZXMvbW9kaS1pbWFnZS5wbmdcIiwgICAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhzXHJcbiAgXCIyXCI6IFwiL2ltYWdlcy90cnVtcC1pbWFnZVwiLFxyXG4gIFwiM1wiOiBcIi9pbWFnZXMva2VubmVkeS1pbWFnZS5qcGVnXCIsXHJcbn07XHJcblxyXG5jb25zdCBSZXZlcnNlU2Nyb2xsVmlld1NwbGl0cyA9ICgpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xyXG4gIHR5cGUgY2FuZGlkYXRlVHlwZSA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2b3RlczogbnVtYmVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzXSA9IHVzZVN0YXRlPGNhbmRpZGF0ZVR5cGVbXT4oaW5pdGlhbENhbmRpZGF0ZXMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidm90ZXNcIik7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRDYW5kaWRhdGVzKEpTT04ucGFyc2UoZGF0YSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogJ3ZvdGluZycgfCBudWxsIH0+KHt9KTtcclxuXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcclxuICAgIHRhcmdldDogcmVmLFxyXG4gICAgb2Zmc2V0OiBbXCJzdGFydCAxLjJcIiwgXCJjZW50ZXIgMC4zNVwiXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm90YXRlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbXCIxMGRlZ1wiLCBcIjBkZWdcIl0pO1xyXG4gIGNvbnN0IHggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFtcIi0yMHJlbVwiLCBcIjByZW1cIl0pO1xyXG4gIGNvbnN0IHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFtcIi0yMHJlbVwiLCBcIjByZW1cIl0pO1xyXG5cclxuICBjb25zdCBmZXRjaENhbmRpZGF0ZVZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICdodHRwczovL2dhdGV3YXktYXBpLmthbHAuc3R1ZGlvL3YxL2NvbnRyYWN0L2thbHAvaW52b2tlLzNMazd5MWJXRkhEdnA4WjBWZWJCSkxUbVFIamRpVk85MTcyNjk1MTAxNjI3My9HZXRSZXN1bHRzJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuZXR3b3JrOiBcIlRFU1RORVRcIixcclxuICAgICAgICAgIGJsb2NrY2hhaW46IFwiS0FMUFwiLFxyXG4gICAgICAgICAgd2FsbGV0QWRkcmVzczogXCI1MDIzZjdmYzU2NWViN2RlN2Y2MjU2YTNiZTIwNGU3NWZlNTc1MjI1XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICd4LWFwaS1rZXknOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19YX0FQSV9LRVksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IHJlc3BvbnNlLmRhdGEucmVzdWx0Py52b3RlcyB8fCB7fTtcclxuICAgICAgY29uc3QgdXBkYXRlZENhbmRpZGF0ZXM6IGNhbmRpZGF0ZVR5cGVbXSA9IGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUpID0+ICh7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIHZvdGVzOiByZXN1bHRzW2NhbmRpZGF0ZS5pZF0gfHwgMCxcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgc2V0Q2FuZGlkYXRlcyh1cGRhdGVkQ2FuZGlkYXRlcyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidm90ZXNcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhbmRpZGF0ZXMpKTsgLy8gU3RvcmUgdXBkYXRlZCB2b3Rlc1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHZvdGVzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVm90ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZ1N0YXRlW2lkXSA9PT0gJ3ZvdGluZycpIHJldHVybjtcclxuXHJcbiAgICBzZXRMb2FkaW5nU3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBbaWRdOiAndm90aW5nJyB9KSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZENhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlKSA9PlxyXG4gICAgICBjYW5kaWRhdGUuaWQgPT09IGlkID8geyAuLi5jYW5kaWRhdGUsIHZvdGVzOiBjYW5kaWRhdGUudm90ZXMgKyAxIH0gOiBjYW5kaWRhdGVcclxuICAgICk7XHJcblxyXG4gICAgc2V0Q2FuZGlkYXRlcyh1cGRhdGVkQ2FuZGlkYXRlcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZvdGVzXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7IC8vIFN0b3JlIHVwZGF0ZWQgdm90ZXMgaW1tZWRpYXRlbHlcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgJ2h0dHBzOi8vZ2F0ZXdheS1hcGkua2FscC5zdHVkaW8vdjEvY29udHJhY3Qva2FscC9pbnZva2UvM0xrN3kxYldGSER2cDhaMFZlYkJKTFRtUUhqZGlWTzkxNzI2OTUxMDE2MjczL1ZvdGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5ldHdvcms6IFwiVEVTVE5FVFwiLFxyXG4gICAgICAgICAgYmxvY2tjaGFpbjogXCJLQUxQXCIsXHJcbiAgICAgICAgICB3YWxsZXRBZGRyZXNzOiBcIjUwMjNmN2ZjNTY1ZWI3ZGU3ZjYyNTZhM2JlMjA0ZTc1ZmU1NzUyMjVcIixcclxuICAgICAgICAgIGFyZ3M6IHtcclxuICAgICAgICAgICAgY2FuZGlkYXRlSUQ6IGlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ3gtYXBpLWtleSc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1hfQVBJX0tFWSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1ZvdGUgcmVzcG9uc2U6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIGFsZXJ0KGBWb3RlIHN1Y2Nlc3NmdWwgZm9yIGNhbmRpZGF0ZSBJRDogJHtpZH1gKTtcclxuICAgICAgLy8gTm8gbmVlZCB0byBmZXRjaCB2b3RlcyBhZ2FpbjsgdGhleSBhcmUgYWxyZWFkeSB1cGRhdGVkIGxvY2FsbHlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHZvdGluZyBmb3IgY2FuZGlkYXRlIElEICR7aWR9OmAsIGVycm9yKTtcclxuICAgICAgYWxlcnQoYFZvdGluZyBmYWlsZWQgZm9yIGNhbmRpZGF0ZSBJRDogJHtpZH0uIFBsZWFzZSB0cnkgYWdhaW4uYCk7XHJcbiAgICAgIC8vIERvIG5vdCByZXZlcnQgdm90ZSBjb3VudDsga2VlcCB0aGUgY291bnQgdXBkYXRlZFxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZ1N0YXRlKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgW2lkXTogbnVsbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNhdmVkVm90ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZvdGVzXCIpO1xyXG4gICAgaWYgKHNhdmVkVm90ZXMpIHtcclxuICAgICAgc2V0Q2FuZGlkYXRlcyhKU09OLnBhcnNlKHNhdmVkVm90ZXMpKTsgLy8gUmVzdG9yZSB2b3RlcyBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2hDYW5kaWRhdGVWb3RlcygpOyAvLyBGZXRjaCBmcmVzaCB2b3Rlc1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gRmlsdGVyIGNhbmRpZGF0ZSB3aXRoIElEIDIgKERvbmFsZCBUcnVtcClcclxuICBjb25zdCB0cnVtcENhbmRpZGF0ZSA9IGNhbmRpZGF0ZXMuZmluZCgoY2FuZGlkYXRlKSA9PiBjYW5kaWRhdGUuaWQgPT09IFwiMlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInctZnVsbCBoLVs1MHZoXSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAge3RydW1wQ2FuZGlkYXRlICYmIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgcm90YXRlLCB4IH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgb3JpZ2luLWJvdHRvbS1sZWZ0IHJvdW5kZWQtMnhsIGgtZnVsbCBmbGV4LVsxLjVdXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogQ2FuZGlkYXRlIGltYWdlICovfVxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2NhbmRpZGF0ZUltYWdlc1t0cnVtcENhbmRpZGF0ZS5pZF19XHJcbiAgICAgICAgICAgIGFsdD17YCR7dHJ1bXBDYW5kaWRhdGUubmFtZX0gaW1hZ2VgfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLTJ4bFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHt0cnVtcENhbmRpZGF0ZSAmJiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3sgeSB9fSBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC13aGl0ZSBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVszcmVtXSBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtcmlnaHRcIj57dHJ1bXBDYW5kaWRhdGUubmFtZX08L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1yaWdodFwiPlZvdGVzOiB7dHJ1bXBDYW5kaWRhdGUudm90ZXN9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZCBtdC01XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWb3RlKHRydW1wQ2FuZGlkYXRlLmlkKX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ1N0YXRlW3RydW1wQ2FuZGlkYXRlLmlkXSA9PT0gJ3ZvdGluZyd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC01IHB4LTEwIHJvdW5kZWQtZnVsbCBib3JkZXItWzAuMjVweF0gYm9yZGVyLXdoaXRlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nU3RhdGVbdHJ1bXBDYW5kaWRhdGUuaWRdID09PSAndm90aW5nJyA/IFwiTG9hZGluZy4uLlwiIDogXCJWb3RlXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmVyc2VTY3JvbGxWaWV3U3BsaXRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIm1vdGlvbiIsImF4aW9zIiwiaW5pdGlhbENhbmRpZGF0ZXMiLCJpZCIsIm5hbWUiLCJ2b3RlcyIsImNhbmRpZGF0ZUltYWdlcyIsIlJldmVyc2VTY3JvbGxWaWV3U3BsaXRzIiwiY2FuZGlkYXRlcyIsInNldENhbmRpZGF0ZXMiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsInJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsInJvdGF0ZSIsIngiLCJ5IiwiZmV0Y2hDYW5kaWRhdGVWb3RlcyIsInJlc3BvbnNlIiwicG9zdCIsIm5ldHdvcmsiLCJibG9ja2NoYWluIiwid2FsbGV0QWRkcmVzcyIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfWF9BUElfS0VZIiwicmVzdWx0cyIsInJlc3VsdCIsInVwZGF0ZWRDYW5kaWRhdGVzIiwibWFwIiwiY2FuZGlkYXRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVZvdGUiLCJwcmV2U3RhdGUiLCJhcmdzIiwiY2FuZGlkYXRlSUQiLCJsb2ciLCJhbGVydCIsInNhdmVkVm90ZXMiLCJ0cnVtcENhbmRpZGF0ZSIsImZpbmQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImltZyIsInNyYyIsImFsdCIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ReverseScrollViewSplits.tsx\n"));

/***/ })

});