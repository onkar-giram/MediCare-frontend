"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 2642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PatientList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({
        patientBtn: {
            cursor: "pointer",
            padding: theme.spacing.lg,
            backgroundColor: theme.colorScheme == "light" ? theme.white : theme.colors.dark[6],
            border: `1px solid ${theme.colorScheme == "light" ? theme.colors.gray[1] : theme.black}`,
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.xs,
            transition: "200ms",
            "&:hover": {
                transform: "scale(1.005)",
                backgroundColor: theme.colorScheme == "light" ? theme.colors.gray[0] : theme.colors.dark[5],
                boxShadow: theme.shadows.sm,
                border: `1px solid ${theme.colorScheme == "light" ? theme.colors.gray[2] : theme.colors.gray[9]}`
            },
            "&:active": {
                transform: "scale(0.99)"
            }
        }
    }));
function PatientListItem({ index , patient , onClick  }) {
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        className: classes.patientBtn,
        onClick: onClick,
        mt: "xs",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                span: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    fz: "sm",
                    fw: 500,
                    children: index + 1
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                span: "auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fz: "sm",
                        fw: 500,
                        children: patient
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                span: 2,
                dir: "rtl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                    color: "green",
                    children: "Active"
                })
            })
        ]
    });
}
function PatientList({ patients , setActiveTab  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
        px: "xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fz: "xl",
                fw: 500,
                children: "All Patients"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
            patients && patients.map((patient, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PatientListItem, {
                        index: index,
                        patient: patient,
                        onClick: ()=>setActiveTab(patient)
                    })
                }, index);
            })
        ]
    });
}


/***/ })

};
;