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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Initial candidate data\nconst initialCandidates = [\n    {\n        id: \"1\",\n        name: \"Narendra Modi\",\n        votes: 0\n    },\n    {\n        id: \"2\",\n        name: \"Donald Trump\",\n        votes: 0\n    },\n    {\n        id: \"3\",\n        name: \"Bobby Kennedy\",\n        votes: 0\n    }\n];\n// Static candidate images\nconst candidateImages = {\n    \"1\": \"path/to/modi-image.jpg\",\n    \"2\": \"path/to/trump-image.jpg\",\n    \"3\": \"path/to/kennedy-image.jpg\"\n};\nconst ReverseScrollViewSplits = ()=>{\n    _s();\n    const [candidates, setCandidates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialCandidates);\n    const [loadingState, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Start with candidate 1\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref,\n        offset: [\n            \"start 1.2\",\n            \"center 0.35\"\n        ]\n    });\n    const rotate = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"-10deg\",\n        \"0deg\"\n    ]);\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"-20rem\",\n        \"0rem\"\n    ]);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"20rem\",\n        \"0rem\"\n    ]);\n    const fetchCandidateVotes = async ()=>{\n        try {\n            var _response_data_result;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/GetResults\", {\n                network: \"TESTNET\",\n                blockchain: \"KALP\",\n                walletAddress: \"5023f7fc565eb7de7f6256a3be204e75fe575225\"\n            }, {\n                headers: {\n                    \"x-api-key\": \"39f479233c21e4754e9f4caeea52a5626ead3bcd5fbee9328f7073f1feea224221eb51d408780a6f8897a577038192c13ffa78d81cf46e442eec758d51c66134bb6003\"\n                }\n            });\n            const results = ((_response_data_result = response.data.result) === null || _response_data_result === void 0 ? void 0 : _response_data_result.votes) || {};\n            const updatedCandidates = candidates.map((candidate)=>({\n                    ...candidate,\n                    votes: results[candidate.id] || 0\n                }));\n            setCandidates(updatedCandidates);\n        } catch (error) {\n            console.error(\"Error fetching votes:\", error);\n        }\n    };\n    const initializeCandidates = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/Initialize\", {\n                network: \"TESTNET\",\n                blockchain: \"KALP\",\n                walletAddress: \"5023f7fc565eb7f6256a3be204e75fe575225\",\n                args: {\n                    candidateNames: candidates.map((c)=>c.name)\n                }\n            }, {\n                headers: {\n                    \"x-api-key\": \"39f479233c21e4754e9f4caeea52a5626ead3bcd5fbee9328f7073f1feea224221eb51d408780a6f8897a577038192c13ffa78d81cf46e442eec758d51c66134bb6003\"\n                }\n            });\n            const updatedCandidates = candidates.map((candidate, index)=>{\n                var _response_data_result_quantities, _response_data_result;\n                return {\n                    ...candidate,\n                    votes: Number((_response_data_result = response.data.result) === null || _response_data_result === void 0 ? void 0 : (_response_data_result_quantities = _response_data_result.quantities) === null || _response_data_result_quantities === void 0 ? void 0 : _response_data_result_quantities[index]) || 0\n                };\n            });\n            setCandidates(updatedCandidates);\n        } catch (error) {\n            console.error(\"Error initializing candidates:\", error);\n        }\n    };\n    const handleVote = async (id)=>{\n        if (loadingState[id] === \"voting\") return;\n        setLoadingState((prevState)=>({\n                ...prevState,\n                [id]: \"voting\"\n            }));\n        // Optimistically update local vote count\n        setCandidates((prevCandidates)=>prevCandidates.map((candidate)=>candidate.id === id ? {\n                    ...candidate,\n                    votes: candidate.votes + 1\n                } : candidate));\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/Vote\", {\n                network: \"TESTNET\",\n                blockchain: \"KALP\",\n                walletAddress: \"5023f7fc565eb7f6256a3be204e75fe575225\",\n                args: {\n                    candidateID: id\n                }\n            }, {\n                headers: {\n                    \"x-api-key\": \"39f479233c21e4754e9f4caeea52a5626ead3bcd5fbee9328f7073f1feea224221eb51d408780a6f8897a577038192c13ffa78d81cf46e442eec758d51c66134bb6003\"\n                }\n            });\n            console.log(\"Vote response:\", response.data);\n            alert(\"Vote successful for candidate ID: \".concat(id));\n            fetchCandidateVotes();\n        } catch (error) {\n            console.error(\"Error voting for candidate ID \".concat(id, \":\"), error);\n            alert(\"Voting failed for candidate ID: \".concat(id, \". Please try again.\"));\n            setCandidates((prevCandidates)=>prevCandidates.map((candidate)=>candidate.id === id ? {\n                        ...candidate,\n                        votes: candidate.votes - 1\n                    } : candidate));\n        } finally{\n            setLoadingState((prevState)=>({\n                    ...prevState,\n                    [id]: null\n                }));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initializeCandidates();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"w-full h-[50vh] flex justify-between items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            style: {\n                rotate,\n                x\n            },\n            className: \"bg-white transition-all duration-300 ease-out origin-bottom-left rounded-2xl h-full flex-[1.5] flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>setCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1),\n                    className: \"cursor-pointer mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: candidateImages[candidates[currentIndex].id],\n                        alt: candidates[currentIndex].name,\n                        className: \"w-24 h-24 object-cover rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                    lineNumber: 146,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-[2rem] font-bold text-center\",\n                    children: candidates[currentIndex].name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-normal text-center\",\n                    children: [\n                        \"Votes: \",\n                        candidates[currentIndex].votes\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                    lineNumber: 151,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full flex justify-center mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleVote(candidates[currentIndex].id),\n                        disabled: loadingState[candidates[currentIndex].id] === \"voting\",\n                        className: \"p-5 px-10 rounded-full bg-blue-500 text-white\",\n                        children: loadingState[candidates[currentIndex].id] === \"voting\" ? \"Loading...\" : \"Vote\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n                    lineNumber: 153,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n            lineNumber: 144,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\omtom\\\\Downloads\\\\om-uiux-works-main\\\\om-uiux-works-main\\\\app\\\\components\\\\ReverseScrollViewSplits.tsx\",\n        lineNumber: 143,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ReverseScrollViewSplits, \"Q4/j/kqvvaDDl6bF7x2jtQ4o6T8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = ReverseScrollViewSplits;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReverseScrollViewSplits);\nvar _c;\n$RefreshReg$(_c, \"ReverseScrollViewSplits\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1JldmVyc2VTY3JvbGxWaWV3U3BsaXRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJEO0FBQ0s7QUFDdEM7QUFFMUIseUJBQXlCO0FBQ3pCLE1BQU1RLG9CQUFvQjtJQUN0QjtRQUFFQyxJQUFJO1FBQUtDLE1BQU07UUFBaUJDLE9BQU87SUFBRTtJQUMzQztRQUFFRixJQUFJO1FBQUtDLE1BQU07UUFBZ0JDLE9BQU87SUFBRTtJQUMxQztRQUFFRixJQUFJO1FBQUtDLE1BQU07UUFBaUJDLE9BQU87SUFBRTtDQUM5QztBQUVELDBCQUEwQjtBQUMxQixNQUFNQyxrQkFBMEM7SUFDNUMsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0FBQ1Q7QUFFQSxNQUFNQywwQkFBMEI7O0lBQzVCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQ087SUFDN0MsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFxQyxDQUFDO0lBQ3RGLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQUMsSUFBSSx5QkFBeUI7SUFFOUUsTUFBTW1CLE1BQU1qQiw2Q0FBTUEsQ0FBaUI7SUFDbkMsTUFBTSxFQUFFa0IsZUFBZSxFQUFFLEdBQUdqQix3REFBU0EsQ0FBQztRQUNsQ2tCLFFBQVFGO1FBQ1JHLFFBQVE7WUFBQztZQUFhO1NBQWM7SUFDeEM7SUFFQSxNQUFNQyxTQUFTbkIsMkRBQVlBLENBQUNnQixpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVU7S0FBTztJQUN2RSxNQUFNSSxJQUFJcEIsMkRBQVlBLENBQUNnQixpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVU7S0FBTztJQUNsRSxNQUFNSyxJQUFJckIsMkRBQVlBLENBQUNnQixpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQVM7S0FBTztJ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TTBCVCxvREFBU0E7UUFLdEJDLHVEQUFZQTtRQUNqQkEsdURBQVlBO1FBQ1pBLHVEQUFZQTs7O0tBYnBCUTtBQW9KTiwrREFBZUEsdUJBQXVCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1JldmVyc2VTY3JvbGxWaWV3U3BsaXRzLnRzeD9lZmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gSW5pdGlhbCBjYW5kaWRhdGUgZGF0YVxuY29uc3QgaW5pdGlhbENhbmRpZGF0ZXMgPSBbXG4gICAgeyBpZDogXCIxXCIsIG5hbWU6IFwiTmFyZW5kcmEgTW9kaVwiLCB2b3RlczogMCB9LFxuICAgIHsgaWQ6IFwiMlwiLCBuYW1lOiBcIkRvbmFsZCBUcnVtcFwiLCB2b3RlczogMCB9LFxuICAgIHsgaWQ6IFwiM1wiLCBuYW1lOiBcIkJvYmJ5IEtlbm5lZHlcIiwgdm90ZXM6IDAgfSxcbl07XG5cbi8vIFN0YXRpYyBjYW5kaWRhdGUgaW1hZ2VzXG5jb25zdCBjYW5kaWRhdGVJbWFnZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgXCIxXCI6IFwicGF0aC90by9tb2RpLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhzXG4gICAgXCIyXCI6IFwicGF0aC90by90cnVtcC1pbWFnZS5qcGdcIixcbiAgICBcIjNcIjogXCJwYXRoL3RvL2tlbm5lZHktaW1hZ2UuanBnXCIsXG59O1xuXG5jb25zdCBSZXZlcnNlU2Nyb2xsVmlld1NwbGl0cyA9ICgpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzXSA9IHVzZVN0YXRlKGluaXRpYWxDYW5kaWRhdGVzKTtcbiAgICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiAndm90aW5nJyB8IG51bGwgfT4oe30pO1xuICAgIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTsgLy8gU3RhcnQgd2l0aCBjYW5kaWRhdGUgMVxuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICAgICAgdGFyZ2V0OiByZWYsXG4gICAgICAgIG9mZnNldDogW1wic3RhcnQgMS4yXCIsIFwiY2VudGVyIDAuMzVcIl1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgW1wiLTEwZGVnXCIsIFwiMGRlZ1wiXSk7XG4gICAgY29uc3QgeCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgW1wiLTIwcmVtXCIsIFwiMHJlbVwiXSk7XG4gICAgY29uc3QgeSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgW1wiMjByZW1cIiwgXCIwcmVtXCJdKTtcblxuICAgIGNvbnN0IGZldGNoQ2FuZGlkYXRlVm90ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2F0ZXdheS1hcGkua2FscC5zdHVkaW8vdjEvY29udHJhY3Qva2FscC9pbnZva2UvM0xrN3kxYldGSER2cDhaMFZlYkJKTFRtUUhqZGlWTzkxNzI2OTUxMDE2MjczL0dldFJlc3VsdHMnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yazogXCJURVNUTkVUXCIsXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrY2hhaW46IFwiS0FMUFwiLFxuICAgICAgICAgICAgICAgICAgICB3YWxsZXRBZGRyZXNzOiBcIjUwMjNmN2ZjNTY1ZWI3ZGU3ZjYyNTZhM2JlMjA0ZTc1ZmU1NzUyMjVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3gtYXBpLWtleSc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1hfQVBJX0tFWSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXNwb25zZS5kYXRhLnJlc3VsdD8udm90ZXMgfHwge307XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMubWFwKGNhbmRpZGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgICAgICAgICAgICB2b3RlczogcmVzdWx0c1tjYW5kaWRhdGUuaWRdIHx8IDBcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgc2V0Q2FuZGlkYXRlcyh1cGRhdGVkQ2FuZGlkYXRlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdm90ZXM6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBpbml0aWFsaXplQ2FuZGlkYXRlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9nYXRld2F5LWFwaS5rYWxwLnN0dWRpby92MS9jb250cmFjdC9rYWxwL2ludm9rZS8zTGs3eTFiV0ZIRHZwOFowVmViQkpMVG1RSGpkaVZPOTE3MjY5NTEwMTYyNzMvSW5pdGlhbGl6ZScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrOiBcIlRFU1RORVRcIixcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogXCJLQUxQXCIsXG4gICAgICAgICAgICAgICAgICAgIHdhbGxldEFkZHJlc3M6IFwiNTAyM2Y3ZmM1NjVlYjdmNjI1NmEzYmUyMDRlNzVmZTU3NTIyNVwiLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGVOYW1lczogY2FuZGlkYXRlcy5tYXAoYyA9PiBjLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3gtYXBpLWtleSc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1hfQVBJX0tFWSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5tYXAoKGNhbmRpZGF0ZSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uY2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgIHZvdGVzOiBOdW1iZXIocmVzcG9uc2UuZGF0YS5yZXN1bHQ/LnF1YW50aXRpZXM/LltpbmRleF0pIHx8IDBcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgc2V0Q2FuZGlkYXRlcyh1cGRhdGVkQ2FuZGlkYXRlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5pdGlhbGl6aW5nIGNhbmRpZGF0ZXM6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVWb3RlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGxvYWRpbmdTdGF0ZVtpZF0gPT09ICd2b3RpbmcnKSByZXR1cm47XG5cbiAgICAgICAgc2V0TG9hZGluZ1N0YXRlKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgW2lkXTogJ3ZvdGluZycgfSkpO1xuXG4gICAgICAgIC8vIE9wdGltaXN0aWNhbGx5IHVwZGF0ZSBsb2NhbCB2b3RlIGNvdW50XG4gICAgICAgIHNldENhbmRpZGF0ZXMoKHByZXZDYW5kaWRhdGVzKSA9PlxuICAgICAgICAgICAgcHJldkNhbmRpZGF0ZXMubWFwKGNhbmRpZGF0ZSA9PlxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5pZCA9PT0gaWQgPyB7IC4uLmNhbmRpZGF0ZSwgdm90ZXM6IGNhbmRpZGF0ZS52b3RlcyArIDEgfSA6IGNhbmRpZGF0ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2F0ZXdheS1hcGkua2FscC5zdHVkaW8vdjEvY29udHJhY3Qva2FscC9pbnZva2UvM0xrN3kxYldGSER2cDhaMFZlYkJKTFRtUUhqZGlWTzkxNzI2OTUxMDE2MjczL1ZvdGUnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yazogXCJURVNUTkVUXCIsXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrY2hhaW46IFwiS0FMUFwiLFxuICAgICAgICAgICAgICAgICAgICB3YWxsZXRBZGRyZXNzOiBcIjUwMjNmN2ZjNTY1ZWI3ZjYyNTZhM2JlMjA0ZTc1ZmU1NzUyMjVcIixcbiAgICAgICAgICAgICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlSUQ6IGlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3gtYXBpLWtleSc6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1hfQVBJX0tFWVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZvdGUgcmVzcG9uc2U6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBhbGVydChgVm90ZSBzdWNjZXNzZnVsIGZvciBjYW5kaWRhdGUgSUQ6ICR7aWR9YCk7XG4gICAgICAgICAgICBmZXRjaENhbmRpZGF0ZVZvdGVzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB2b3RpbmcgZm9yIGNhbmRpZGF0ZSBJRCAke2lkfTpgLCBlcnJvcik7XG4gICAgICAgICAgICBhbGVydChgVm90aW5nIGZhaWxlZCBmb3IgY2FuZGlkYXRlIElEOiAke2lkfS4gUGxlYXNlIHRyeSBhZ2Fpbi5gKTtcbiAgICAgICAgICAgIHNldENhbmRpZGF0ZXMoKHByZXZDYW5kaWRhdGVzKSA9PlxuICAgICAgICAgICAgICAgIHByZXZDYW5kaWRhdGVzLm1hcChjYW5kaWRhdGUgPT5cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLmlkID09PSBpZCA/IHsgLi4uY2FuZGlkYXRlLCB2b3RlczogY2FuZGlkYXRlLnZvdGVzIC0gMSB9IDogY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmdTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIFtpZF06IG51bGwgfSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGluaXRpYWxpemVDYW5kaWRhdGVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwidy1mdWxsIGgtWzUwdmhdIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3sgcm90YXRlLCB4IH19IGNsYXNzTmFtZT1cImJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBvcmlnaW4tYm90dG9tLWxlZnQgcm91bmRlZC0yeGwgaC1mdWxsIGZsZXgtWzEuNV0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7LyogQ2FuZGlkYXRlIGltYWdlIGRpc3BsYXkgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ID09PSAyID8gMCA6IGN1cnJlbnRJbmRleCArIDEpfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYW5kaWRhdGVJbWFnZXNbY2FuZGlkYXRlc1tjdXJyZW50SW5kZXhdLmlkXX0gYWx0PXtjYW5kaWRhdGVzW2N1cnJlbnRJbmRleF0ubmFtZX0gY2xhc3NOYW1lPVwidy0yNCBoLTI0IG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWzJyZW1dIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPntjYW5kaWRhdGVzW2N1cnJlbnRJbmRleF0ubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtY2VudGVyXCI+Vm90ZXM6IHtjYW5kaWRhdGVzW2N1cnJlbnRJbmRleF0udm90ZXN9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZvdGUoY2FuZGlkYXRlc1tjdXJyZW50SW5kZXhdLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nU3RhdGVbY2FuZGlkYXRlc1tjdXJyZW50SW5kZXhdLmlkXSA9PT0gJ3ZvdGluZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTUgcHgtMTAgcm91bmRlZC1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ1N0YXRlW2NhbmRpZGF0ZXNbY3VycmVudEluZGV4XS5pZF0gPT09ICd2b3RpbmcnID8gXCJMb2FkaW5nLi4uXCIgOiBcIlZvdGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZlcnNlU2Nyb2xsVmlld1NwbGl0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwibW90aW9uIiwiYXhpb3MiLCJpbml0aWFsQ2FuZGlkYXRlcyIsImlkIiwibmFtZSIsInZvdGVzIiwiY2FuZGlkYXRlSW1hZ2VzIiwiUmV2ZXJzZVNjcm9sbFZpZXdTcGxpdHMiLCJjYW5kaWRhdGVzIiwic2V0Q2FuZGlkYXRlcyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsInJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsInJvdGF0ZSIsIngiLCJ5IiwiZmV0Y2hDYW5kaWRhdGVWb3RlcyIsInJlc3BvbnNlIiwicG9zdCIsIm5ldHdvcmsiLCJibG9ja2NoYWluIiwid2FsbGV0QWRkcmVzcyIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfWF9BUElfS0VZIiwicmVzdWx0cyIsImRhdGEiLCJyZXN1bHQiLCJ1cGRhdGVkQ2FuZGlkYXRlcyIsIm1hcCIsImNhbmRpZGF0ZSIsImVycm9yIiwiY29uc29sZSIsImluaXRpYWxpemVDYW5kaWRhdGVzIiwiYXJncyIsImNhbmRpZGF0ZU5hbWVzIiwiYyIsImluZGV4IiwiTnVtYmVyIiwicXVhbnRpdGllcyIsImhhbmRsZVZvdGUiLCJwcmV2U3RhdGUiLCJwcmV2Q2FuZGlkYXRlcyIsImNhbmRpZGF0ZUlEIiwibG9nIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsInAiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ReverseScrollViewSplits.tsx\n"));

/***/ })

});