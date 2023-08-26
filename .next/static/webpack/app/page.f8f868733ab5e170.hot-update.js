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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mui-datatables */ \"(app-pages-browser)/./node_modules/mui-datatables/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst IndexTable = (param)=>{\n    let {} = param;\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedRows, setSelectedRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchTasks = async ()=>{\n        await (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            url: \"\".concat(\"http://localhost:8000/\", \"list-tasks\"),\n            method: \"GET\"\n        }).then((param)=>{\n            let { data } = param;\n            setTasks(data.data);\n        }).catch((err)=>{});\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTasks();\n    }, []);\n    const columns = [\n        {\n            name: \"name\",\n            label: \"Name\",\n            options: {\n                filter: true,\n                sort: true\n            }\n        }\n    ];\n    const data = [\n        {\n            name: \"Joe James\",\n            company: \"Test Corp\",\n            city: \"Yonkers\",\n            state: \"NY\"\n        },\n        {\n            name: \"John Walsh\",\n            company: \"Test Corp\",\n            city: \"Hartford\",\n            state: \"CT\"\n        },\n        {\n            name: \"Bob Herm\",\n            company: \"Test Corp\",\n            city: \"Tampa\",\n            state: \"FL\"\n        },\n        {\n            name: \"James Houston\",\n            company: \"Test Corp\",\n            city: \"Dallas\",\n            state: \"TX\"\n        }\n    ];\n    const rowSelection = (rowsSelectedData)=>{\n        const row = tasks[rowsSelectedData[0][\"dataIndex\"]]._id;\n        setSelectedRows([\n            ...selectedRows,\n            row\n        ]);\n    };\n    const deleteRows = async ()=>{\n        await (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            url: \"\".concat(\"http://localhost:8000/\", \"tasks/bulk\"),\n            method: \"DELETE\",\n            data: selectedRows\n        }).then((param)=>{\n            let { data } = param;\n            fetchTasks();\n        }).catch((err)=>{});\n    };\n    const options = {\n        filterType: \"checkbox\",\n        selectableRowsHeader: false,\n        onRowSelectionChange: rowSelection,\n        onRowsDelete: deleteRows\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"ag-theme-alpine\",\n            style: {\n                height: 600,\n                width: \"50%\",\n                margin: \"auto\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mui_datatables__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Task List\",\n                data: tasks,\n                columns: columns,\n                options: options\n            }, void 0, false, {\n                fileName: \"/media/sajjad/c3c76b01-6d29-4726-a63d-b205682d0bd9/projects/Task Management/client/app/components/Tasks/Tasks.tsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/media/sajjad/c3c76b01-6d29-4726-a63d-b205682d0bd9/projects/Task Management/client/app/components/Tasks/Tasks.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(IndexTable, \"pfqwqZKLVazKXfxWGV8BO6xbyQQ=\");\n_c = IndexTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexTable);\nvar _c;\n$RefreshReg$(_c, \"IndexTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Rhc2tzL1Rhc2tzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUN6QjtBQUNnQjtBQU8xQyxNQUFNSyxhQUFhO1FBQUMsRUFBRTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFrQixFQUFFO0lBQ3RELE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFFN0QsTUFBTVEsYUFBYTtRQUNqQixNQUFNUCxpREFBS0EsQ0FBQztZQUNWUSxLQUFLLEdBQXdDLE9BQXJDQyx3QkFBb0MsRUFBQztZQUM3Q0csUUFBUTtRQUNWLEdBQ0dDLElBQUksQ0FBQztnQkFBQyxFQUFFQyxJQUFJLEVBQUU7WUFDYlYsU0FBU1UsS0FBS0EsSUFBSTtRQUNwQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsT0FBUztJQUNyQjtJQUVBbEIsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNVSxVQUFVO1FBQ2Q7WUFDRUMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFNBQVM7Z0JBQ1BDLFFBQVE7Z0JBQ1JDLE1BQU07WUFDUjtRQUNGO0tBQ0Q7SUFFRCxNQUFNUixPQUFPO1FBQ1g7WUFBRUksTUFBTTtZQUFhSyxTQUFTO1lBQWFDLE1BQU07WUFBV0MsT0FBTztRQUFLO1FBQ3hFO1lBQUVQLE1BQU07WUFBY0ssU0FBUztZQUFhQyxNQUFNO1lBQVlDLE9BQU87UUFBSztRQUMxRTtZQUFFUCxNQUFNO1lBQVlLLFNBQVM7WUFBYUMsTUFBTTtZQUFTQyxPQUFPO1FBQUs7UUFDckU7WUFDRVAsTUFBTTtZQUNOSyxTQUFTO1lBQ1RDLE1BQU07WUFDTkMsT0FBTztRQUNUO0tBQ0Q7SUFFRCxNQUFNQyxlQUFlLENBQ25CQztRQUVBLE1BQU1DLE1BQU16QixLQUFLLENBQUN3QixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUNFLEdBQUc7UUFDdkR2QixnQkFBZ0I7ZUFBSUQ7WUFBY3VCO1NBQUk7SUFDeEM7SUFFQSxNQUFNRSxhQUFhO1FBQ2pCLE1BQU05QixpREFBS0EsQ0FBQztZQUNWUSxLQUFLLEdBQXdDLE9BQXJDQyx3QkFBb0MsRUFBQztZQUM3Q0csUUFBUTtZQUNSRSxNQUFNVDtRQUNSLEdBQ0dRLElBQUksQ0FBQztnQkFBQyxFQUFFQyxJQUFJLEVBQUU7WUFDYlA7UUFDRixHQUNDUSxLQUFLLENBQUMsQ0FBQ0MsT0FBUztJQUNyQjtJQUVBLE1BQU1JLFVBQVU7UUFDZFcsWUFBWTtRQUNaQyxzQkFBc0I7UUFDdEJDLHNCQUFzQlA7UUFDdEJRLGNBQWNKO0lBQ2hCO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNLO1lBQ0NDLFdBQVU7WUFDVkMsT0FBTztnQkFBRUMsUUFBUTtnQkFBS0MsT0FBTztnQkFBT0MsUUFBUTtZQUFPO3NCQUVuRCw0RUFBQ3ZDLHNEQUFZQTtnQkFDWHdDLE9BQU87Z0JBQ1AzQixNQUFNWDtnQkFDTmMsU0FBU0E7Z0JBQ1RHLFNBQVNBOzs7Ozs7Ozs7Ozs7QUFLbkI7R0FsRk1sQjtLQUFBQTtBQW1GTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UYXNrcy9UYXNrcy50c3g/MTEyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE1VSURhdGFUYWJsZSBmcm9tIFwibXVpLWRhdGF0YWJsZXNcIjtcblxuaW50ZXJmYWNlIFRhc2tJbnRlcmZhY2Uge1xuICBfaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBJbmRleFRhYmxlID0gKHt9KSA9PiB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza0ludGVyZmFjZVtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIGNvbnN0IGZldGNoVGFza3MgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgYXhpb3Moe1xuICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkx9bGlzdC10YXNrc2AsXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBzZXRUYXNrcyhkYXRhLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRhc2tzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBmaWx0ZXI6IHRydWUsXG4gICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7IG5hbWU6IFwiSm9lIEphbWVzXCIsIGNvbXBhbnk6IFwiVGVzdCBDb3JwXCIsIGNpdHk6IFwiWW9ua2Vyc1wiLCBzdGF0ZTogXCJOWVwiIH0sXG4gICAgeyBuYW1lOiBcIkpvaG4gV2Fsc2hcIiwgY29tcGFueTogXCJUZXN0IENvcnBcIiwgY2l0eTogXCJIYXJ0Zm9yZFwiLCBzdGF0ZTogXCJDVFwiIH0sXG4gICAgeyBuYW1lOiBcIkJvYiBIZXJtXCIsIGNvbXBhbnk6IFwiVGVzdCBDb3JwXCIsIGNpdHk6IFwiVGFtcGFcIiwgc3RhdGU6IFwiRkxcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSmFtZXMgSG91c3RvblwiLFxuICAgICAgY29tcGFueTogXCJUZXN0IENvcnBcIixcbiAgICAgIGNpdHk6IFwiRGFsbGFzXCIsXG4gICAgICBzdGF0ZTogXCJUWFwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3Qgcm93U2VsZWN0aW9uID0gKFxuICAgIHJvd3NTZWxlY3RlZERhdGE6IGFueSxcbiAgKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gdGFza3Nbcm93c1NlbGVjdGVkRGF0YVswXVtcImRhdGFJbmRleFwiXV0uX2lkO1xuICAgIHNldFNlbGVjdGVkUm93cyhbLi4uc2VsZWN0ZWRSb3dzLCByb3ddKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVSb3dzID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGF4aW9zKHtcbiAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMfXRhc2tzL2J1bGtgLFxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgZGF0YTogc2VsZWN0ZWRSb3dzLFxuICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgZmV0Y2hUYXNrcygpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBmaWx0ZXJUeXBlOiBcImNoZWNrYm94XCIsXG4gICAgc2VsZWN0YWJsZVJvd3NIZWFkZXI6IGZhbHNlLFxuICAgIG9uUm93U2VsZWN0aW9uQ2hhbmdlOiByb3dTZWxlY3Rpb24sXG4gICAgb25Sb3dzRGVsZXRlOiBkZWxldGVSb3dzLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFnLXRoZW1lLWFscGluZVwiXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogNjAwLCB3aWR0aDogXCI1MCVcIiwgbWFyZ2luOiBcImF1dG9cIiB9fVxuICAgICAgPlxuICAgICAgICA8TVVJRGF0YVRhYmxlXG4gICAgICAgICAgdGl0bGU9e1wiVGFzayBMaXN0XCJ9XG4gICAgICAgICAgZGF0YT17dGFza3N9XG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSW5kZXhUYWJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJNVUlEYXRhVGFibGUiLCJJbmRleFRhYmxlIiwidGFza3MiLCJzZXRUYXNrcyIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsImZldGNoVGFza3MiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwibWV0aG9kIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbHVtbnMiLCJuYW1lIiwibGFiZWwiLCJvcHRpb25zIiwiZmlsdGVyIiwic29ydCIsImNvbXBhbnkiLCJjaXR5Iiwic3RhdGUiLCJyb3dTZWxlY3Rpb24iLCJyb3dzU2VsZWN0ZWREYXRhIiwicm93IiwiX2lkIiwiZGVsZXRlUm93cyIsImZpbHRlclR5cGUiLCJzZWxlY3RhYmxlUm93c0hlYWRlciIsIm9uUm93U2VsZWN0aW9uQ2hhbmdlIiwib25Sb3dzRGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Tasks/Tasks.tsx\n"));

/***/ })

});