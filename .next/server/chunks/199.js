"use strict";
exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 5199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AllDoctors)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Doctor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4600);
/* harmony import */ var _DoctorsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9781);
/* harmony import */ var _hooks_useGetAllDoctors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var _hooks_useGetPendingDoctors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1892);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Doctor__WEBPACK_IMPORTED_MODULE_3__, _hooks_useGetAllDoctors__WEBPACK_IMPORTED_MODULE_5__, _hooks_useGetPendingDoctors__WEBPACK_IMPORTED_MODULE_6__]);
([_Doctor__WEBPACK_IMPORTED_MODULE_3__, _hooks_useGetAllDoctors__WEBPACK_IMPORTED_MODULE_5__, _hooks_useGetPendingDoctors__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function AllDoctors({ user , setDoctor  }) {
    // 'all' shows list of all doctors, else doctor with address of activeTab
    const { allDoctors  } = (0,_hooks_useGetAllDoctors__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { pendingDoctors  } = (0,_hooks_useGetPendingDoctors__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        activeTab == "all" && setDoctor && setDoctor(null);
    }, [
        activeTab
    ]);
    return allDoctors && allDoctors.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        orientation: "vertical",
        onTabChange: setActiveTab,
        value: activeTab,
        keepMounted: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs.Panel, {
                value: "all",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs.List, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DoctorsList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        allDoctors: allDoctors,
                        pendingDoctors: pendingDoctors,
                        setActiveTab: setActiveTab
                    })
                })
            }),
            allDoctors && allDoctors.map((doctor, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs.Panel, {
                    value: doctor,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "light",
                            onClick: ()=>setActiveTab("all"),
                            w: "100%",
                            leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__.IconArrowLeft, {}),
                            children: "Back to all doctors"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                            my: "sm"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Doctor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            address: doctor,
                            user: user,
                            setDoctor: setDoctor
                        })
                    ]
                }, index);
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
        order: 4,
        children: "No doctor registered yet"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DoctorList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({
        doctorBtn: {
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
function DoctorListItem({ index , doctor , pending , onClick  }) {
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        className: classes.doctorBtn,
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
                        children: doctor
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                span: 2,
                dir: "rtl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                    color: pending ? "green" : "red",
                    children: pending ? "Approved" : "Not approved"
                })
            })
        ]
    });
}
function DoctorList({ allDoctors , pendingDoctors , setActiveTab  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
        px: "xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fz: "xl",
                fw: 500,
                children: "All doctors"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
            allDoctors && allDoctors.map((doctor, index)=>{
                return pendingDoctors && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DoctorListItem, {
                        index: index,
                        doctor: doctor,
                        pending: pendingDoctors.indexOf(doctor) == -1,
                        onClick: ()=>setActiveTab(doctor)
                    })
                }, index);
            })
        ]
    });
}


/***/ }),

/***/ 1185:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetAllDoctors)
/* harmony export */ });
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8998);
/* harmony import */ var _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_0__, _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__]);
([wagmi__WEBPACK_IMPORTED_MODULE_0__, _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useGetAllDoctors() {
    const { contractAddress , abi , enabled  } = (0,_hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { data: allDoctors  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "getAllDrs",
        enabled
    });
    return {
        allDoctors
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetPendingDoctors)
/* harmony export */ });
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8998);
/* harmony import */ var _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_0__, _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__]);
([wagmi__WEBPACK_IMPORTED_MODULE_0__, _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useGetPendingDoctors() {
    const { contractAddress , abi , enabled  } = (0,_hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { data: pendingDoctors  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "getPendingDrs",
        enabled
    });
    return {
        pendingDoctors
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;