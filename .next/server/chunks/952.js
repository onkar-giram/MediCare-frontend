"use strict";
exports.id = 952;
exports.ids = [952];
exports.modules = {

/***/ 3952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EHRHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppShell_ConnectButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1999);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useIsPatient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6191);
/* harmony import */ var _hooks_useIsDoctorRegistered__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5911);
/* harmony import */ var _hooks_useIsAdmin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1440);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8998);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SwitchNetworkButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AppShell_ConnectButton__WEBPACK_IMPORTED_MODULE_2__, _hooks_useIsPatient__WEBPACK_IMPORTED_MODULE_4__, _hooks_useIsDoctorRegistered__WEBPACK_IMPORTED_MODULE_5__, _hooks_useIsAdmin__WEBPACK_IMPORTED_MODULE_6__, wagmi__WEBPACK_IMPORTED_MODULE_7__, _SwitchNetworkButton__WEBPACK_IMPORTED_MODULE_10__]);
([_components_AppShell_ConnectButton__WEBPACK_IMPORTED_MODULE_2__, _hooks_useIsPatient__WEBPACK_IMPORTED_MODULE_4__, _hooks_useIsDoctorRegistered__WEBPACK_IMPORTED_MODULE_5__, _hooks_useIsAdmin__WEBPACK_IMPORTED_MODULE_6__, wagmi__WEBPACK_IMPORTED_MODULE_7__, _SwitchNetworkButton__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({
        header: {
            position: "fixed",
            padding: theme.spacing.lg,
            boxShadow: `1px -7px 10px 0px ${theme.black}`,
            // backgroundColor: "rgba(255, 255, 255, 0.15)",
            // backdropFilter: `blur(250px)`,
            zIndex: 101
        },
        connectBtn: {
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            borderRadius: theme.radius.sm,
            fontSize: theme.fontSizes.md,
            fontWeight: "bold",
            color: theme.colors.blue[5]
        }
    }));
function EHRHeader({ opened , setOpened  }) {
    const { colorScheme , toggleColorScheme  } = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineColorScheme)();
    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount)();
    const { isPatient  } = (0,_hooks_useIsPatient__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(address);
    const { isDoctorRegistered  } = (0,_hooks_useIsDoctorRegistered__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(address);
    const { isAdmin  } = (0,_hooks_useIsAdmin__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(address);
    const { classes  } = useStyles();
    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useNetwork)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();
    const dark = colorScheme === "dark";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Header, {
        height: {
            base: 50,
            md: 70
        },
        className: classes.header,
        id: "header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            justify: "space-between",
            align: "center",
            h: "100%",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.MediaQuery, {
                    largerThan: "sm",
                    styles: {
                        display: "none"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Burger, {
                        opened: opened,
                        onClick: ()=>setOpened((o)=>!o),
                        size: "sm",
                        color: theme.colors.gray[6],
                        mr: "xl"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                    onClick: ()=>router.push("/"),
                    sx: {
                        cursor: "pointer"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        size: "lg",
                        fw: "bold",
                        variant: "gradient",
                        children: "MediCare"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                    spacing: "xs",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                            href: "/",
                            variant: "subtle",
                            children: "Home"
                        }),
                        !isPatient && !isDoctorRegistered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                            href: "/register",
                            variant: "subtle",
                            children: "Register"
                        }),
                        isAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                            href: "/admin/all-doctors",
                            variant: "subtle",
                            children: "Admin Dashboard"
                        }),
                        isPatient && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                            href: "/patient/dashboard",
                            variant: "subtle",
                            children: "Patient Dashboard"
                        }),
                        isDoctorRegistered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),
                            href: "/doctor/dashboard",
                            variant: "subtle",
                            children: "Doctor Dashboard"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                            variant: "subtle",
                            color: dark ? "yellow" : "blue",
                            onClick: toggleColorScheme,
                            title: `Change to ${dark ? "light" : "dark"} mode`,
                            children: dark ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__.IconSun, {
                                size: "1.1rem"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__.IconMoonStars, {
                                size: "1.1rem"
                            })
                        })
                    ]
                }),
                router.asPath == "/" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                    className: classes.connectBtn,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwitchNetworkButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            align: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__.IconPlug, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AppShell_ConnectButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SwitchNetworkButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_4__]);
wagmi__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function SwitchNetworkButton() {
    const { isConnected , isDisconnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();
    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork)();
    const { chains , switchNetwork  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSwitchNetwork)();
    const [isDefinitelyConnected, setIsDefinitelyConnected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setIsDefinitelyConnected(isConnected);
    }, [
        isConnected,
        isDisconnected
    ]);
    return isDefinitelyConnected && chain && chain.id !== 80001 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
        spacing: "2px",
        onClick: ()=>{
            switchNetwork(80001);
        },
        sx: {
            cursor: "pointer"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconSwitch, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: [
                    "Switch Network",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        c: "dimmed",
                        size: "xs",
                        children: "Polygon (Mumbai)"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useIsAdmin)
/* harmony export */ });
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5439);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__]);
([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useIsAdmin(address) {
    const { contractAddress , enabled , abi  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { data: isAdmin , isFetched  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "isAdmin",
        args: [
            address
        ],
        enabled: enabled && address
    });
    return {
        isAdmin,
        isFetched
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useIsDoctorRegistered)
/* harmony export */ });
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5439);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__]);
([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useIsDoctorRegistered(address) {
    const { contractAddress , enabled , abi  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { data: isDoctorRegistered , isFetched , refetch: runIsDoctorRegistered  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "isDrRegistered",
        args: [
            address
        ],
        enabled: enabled && address
    });
    return {
        isDoctorRegistered,
        isFetched,
        runIsDoctorRegistered
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useIsPatient)
/* harmony export */ });
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5439);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__]);
([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useIsPatient(address) {
    const { contractAddress , enabled , abi  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { data: isPatient , isFetched  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "isPatient",
        args: [
            address
        ],
        enabled: enabled && address
    });
    return {
        isPatient,
        isFetched
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;