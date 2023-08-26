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

/***/ "(app-pages-browser)/./app/components/Tasks/Tasks.tsx":
/*!****************************************!*\
  !*** ./app/components/Tasks/Tasks.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mui-datatables */ \"(app-pages-browser)/./node_modules/mui-datatables/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst IndexTable = (param)=>{\n    let {} = param;\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedRows, setSelectedRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchTasks = async ()=>{\n        await (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            url: \"\".concat(\"http://localhost:8000/\", \"list-tasks\"),\n            method: \"GET\"\n        }).then((param)=>{\n            let { data } = param;\n            setTasks(data.data);\n        }).catch((err)=>{});\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTasks();\n    }, []);\n    const columns = [\n        {\n            name: \"name\",\n            label: \"Name\",\n            options: {\n                filter: true,\n                sort: true\n            }\n        }\n    ];\n    const data = [\n        {\n            name: \"Joe James\",\n            company: \"Test Corp\",\n            city: \"Yonkers\",\n            state: \"NY\"\n        },\n        {\n            name: \"John Walsh\",\n            company: \"Test Corp\",\n            city: \"Hartford\",\n            state: \"CT\"\n        },\n        {\n            name: \"Bob Herm\",\n            company: \"Test Corp\",\n            city: \"Tampa\",\n            state: \"FL\"\n        },\n        {\n            name: \"James Houston\",\n            company: \"Test Corp\",\n            city: \"Dallas\",\n            state: \"TX\"\n        }\n    ];\n    const rowSelection = (currentRowsSelected, allRowsSelected, rowsSelected)=>{\n        const row = tasks[currentRowsSelected[\"dataIndex\"]];\n        console.log(\"row\", row);\n    // setSelectedRows([...selectedRows, row]);\n    };\n    const deleteRows = (rowsDeleted)=>{\n        console.log(\"Hi\", selectedRows);\n    };\n    const options = {\n        filterType: \"checkbox\",\n        onRowSelectionChange: rowSelection,\n        onRowsDelete: deleteRows\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"ag-theme-alpine\",\n            style: {\n                height: 600,\n                width: \"50%\",\n                margin: \"auto\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mui_datatables__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Task List\",\n                data: tasks,\n                columns: columns,\n                options: options\n            }, void 0, false, {\n                fileName: \"/media/sajjad/c3c76b01-6d29-4726-a63d-b205682d0bd9/projects/Task Management/client/app/components/Tasks/Tasks.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/media/sajjad/c3c76b01-6d29-4726-a63d-b205682d0bd9/projects/Task Management/client/app/components/Tasks/Tasks.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(IndexTable, \"pfqwqZKLVazKXfxWGV8BO6xbyQQ=\");\n_c = IndexTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexTable);\nvar _c;\n$RefreshReg$(_c, \"IndexTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Rhc2tzL1Rhc2tzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUN6QjtBQUNnQjtBQU8xQyxNQUFNSyxhQUFhO1FBQUMsRUFBRTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFrQixFQUFFO0lBQ3RELE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFFN0QsTUFBTVEsYUFBYTtRQUNqQixNQUFNUCxpREFBS0EsQ0FBQztZQUNWUSxLQUFLLEdBQXdDLE9BQXJDQyx3QkFBb0MsRUFBQztZQUM3Q0csUUFBUTtRQUNWLEdBQ0dDLElBQUksQ0FBQztnQkFBQyxFQUFFQyxJQUFJLEVBQUU7WUFDYlYsU0FBU1UsS0FBS0EsSUFBSTtRQUNwQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsT0FBUztJQUNyQjtJQUVBbEIsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNVSxVQUFVO1FBQ2Q7WUFDRUMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFNBQVM7Z0JBQ1BDLFFBQVE7Z0JBQ1JDLE1BQU07WUFDUjtRQUNGO0tBQ0Q7SUFFRCxNQUFNUixPQUFPO1FBQ1g7WUFBRUksTUFBTTtZQUFhSyxTQUFTO1lBQWFDLE1BQU07WUFBV0MsT0FBTztRQUFLO1FBQ3hFO1lBQUVQLE1BQU07WUFBY0ssU0FBUztZQUFhQyxNQUFNO1lBQVlDLE9BQU87UUFBSztRQUMxRTtZQUFFUCxNQUFNO1lBQVlLLFNBQVM7WUFBYUMsTUFBTTtZQUFTQyxPQUFPO1FBQUs7UUFDckU7WUFDRVAsTUFBTTtZQUNOSyxTQUFTO1lBQ1RDLE1BQU07WUFDTkMsT0FBTztRQUNUO0tBQ0Q7SUFFRCxNQUFNQyxlQUFlLENBQ25CQyxxQkFDQUMsaUJBQ0FDO1FBRUEsTUFBTUMsTUFBTTNCLEtBQUssQ0FBQ3dCLG1CQUFtQixDQUFDLFlBQVksQ0FBQztRQUNuREksUUFBUUMsR0FBRyxDQUFDLE9BQU1GO0lBQ2xCLDJDQUEyQztJQUM3QztJQUVBLE1BQU1HLGFBQWEsQ0FBQ0M7UUFDbEJILFFBQVFDLEdBQUcsQ0FBQyxNQUFNM0I7SUFDcEI7SUFFQSxNQUFNZSxVQUFVO1FBQ2RlLFlBQVk7UUFDWkMsc0JBQXNCVjtRQUN0QlcsY0FBY0o7SUFDaEI7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0s7WUFDQ0MsV0FBVTtZQUNWQyxPQUFPO2dCQUFFQyxRQUFRO2dCQUFLQyxPQUFPO2dCQUFPQyxRQUFRO1lBQU87c0JBRW5ELDRFQUFDMUMsc0RBQVlBO2dCQUNYMkMsT0FBTztnQkFDUDlCLE1BQU1YO2dCQUNOYyxTQUFTQTtnQkFDVEcsU0FBU0E7Ozs7Ozs7Ozs7OztBQUtuQjtHQTVFTWxCO0tBQUFBO0FBNkVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Rhc2tzL1Rhc2tzLnRzeD8xMTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTVVJRGF0YVRhYmxlIGZyb20gXCJtdWktZGF0YXRhYmxlc1wiO1xuXG5pbnRlcmZhY2UgVGFza0ludGVyZmFjZSB7XG4gIF9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IEluZGV4VGFibGUgPSAoe30pID0+IHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrSW50ZXJmYWNlW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkUm93cywgc2V0U2VsZWN0ZWRSb3dzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3QgZmV0Y2hUYXNrcyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBheGlvcyh7XG4gICAgICB1cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTH1saXN0LXRhc2tzYCxcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9KVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHNldFRhc2tzKGRhdGEuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVGFza3MoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGZpbHRlcjogdHJ1ZSxcbiAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHsgbmFtZTogXCJKb2UgSmFtZXNcIiwgY29tcGFueTogXCJUZXN0IENvcnBcIiwgY2l0eTogXCJZb25rZXJzXCIsIHN0YXRlOiBcIk5ZXCIgfSxcbiAgICB7IG5hbWU6IFwiSm9obiBXYWxzaFwiLCBjb21wYW55OiBcIlRlc3QgQ29ycFwiLCBjaXR5OiBcIkhhcnRmb3JkXCIsIHN0YXRlOiBcIkNUXCIgfSxcbiAgICB7IG5hbWU6IFwiQm9iIEhlcm1cIiwgY29tcGFueTogXCJUZXN0IENvcnBcIiwgY2l0eTogXCJUYW1wYVwiLCBzdGF0ZTogXCJGTFwiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKYW1lcyBIb3VzdG9uXCIsXG4gICAgICBjb21wYW55OiBcIlRlc3QgQ29ycFwiLFxuICAgICAgY2l0eTogXCJEYWxsYXNcIixcbiAgICAgIHN0YXRlOiBcIlRYXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCByb3dTZWxlY3Rpb24gPSAoXG4gICAgY3VycmVudFJvd3NTZWxlY3RlZDogYW55LFxuICAgIGFsbFJvd3NTZWxlY3RlZDogYW55LFxuICAgIHJvd3NTZWxlY3RlZDogYW55XG4gICkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHRhc2tzW2N1cnJlbnRSb3dzU2VsZWN0ZWRbXCJkYXRhSW5kZXhcIl1dO1xuICAgIGNvbnNvbGUubG9nKCdyb3cnLHJvdylcbiAgICAvLyBzZXRTZWxlY3RlZFJvd3MoWy4uLnNlbGVjdGVkUm93cywgcm93XSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUm93cyA9IChyb3dzRGVsZXRlZDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIaVwiLCBzZWxlY3RlZFJvd3MpO1xuICB9O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZmlsdGVyVHlwZTogXCJjaGVja2JveFwiLFxuICAgIG9uUm93U2VsZWN0aW9uQ2hhbmdlOiByb3dTZWxlY3Rpb24sXG4gICAgb25Sb3dzRGVsZXRlOiBkZWxldGVSb3dzLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFnLXRoZW1lLWFscGluZVwiXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogNjAwLCB3aWR0aDogXCI1MCVcIiwgbWFyZ2luOiBcImF1dG9cIiB9fVxuICAgICAgPlxuICAgICAgICA8TVVJRGF0YVRhYmxlXG4gICAgICAgICAgdGl0bGU9e1wiVGFzayBMaXN0XCJ9XG4gICAgICAgICAgZGF0YT17dGFza3N9XG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSW5kZXhUYWJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJNVUlEYXRhVGFibGUiLCJJbmRleFRhYmxlIiwidGFza3MiLCJzZXRUYXNrcyIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsImZldGNoVGFza3MiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwibWV0aG9kIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbHVtbnMiLCJuYW1lIiwibGFiZWwiLCJvcHRpb25zIiwiZmlsdGVyIiwic29ydCIsImNvbXBhbnkiLCJjaXR5Iiwic3RhdGUiLCJyb3dTZWxlY3Rpb24iLCJjdXJyZW50Um93c1NlbGVjdGVkIiwiYWxsUm93c1NlbGVjdGVkIiwicm93c1NlbGVjdGVkIiwicm93IiwiY29uc29sZSIsImxvZyIsImRlbGV0ZVJvd3MiLCJyb3dzRGVsZXRlZCIsImZpbHRlclR5cGUiLCJvblJvd1NlbGVjdGlvbkNoYW5nZSIsIm9uUm93c0RlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Tasks/Tasks.tsx\n"));

/***/ })

});