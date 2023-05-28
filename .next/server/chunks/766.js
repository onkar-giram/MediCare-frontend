"use strict";
exports.id = 766;
exports.ids = [766];
exports.modules = {

/***/ 910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EHRAppShell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EHRHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3952);
/* harmony import */ var _EHRNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8876);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EHRHeader__WEBPACK_IMPORTED_MODULE_3__, _EHRNavbar__WEBPACK_IMPORTED_MODULE_4__]);
([_EHRHeader__WEBPACK_IMPORTED_MODULE_3__, _EHRNavbar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function EHRAppShell({ loading , navlinks , Controller  }) {
    const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.useMantineTheme)();
    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.LoadingOverlay, {
                visible: loading,
                overlayBlur: 4
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.AppShell, {
                styles: {
                    main: {
                        background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
                    }
                },
                header: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EHRHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    opened: opened,
                    setOpened: setOpened
                }),
                navbar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EHRNavbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    navlinks: navlinks,
                    opened: opened
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Controller, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EHRNavbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppShell_ConnectButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1999);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utils_Icons_MetamaskIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2147);
/* harmony import */ var _SwitchNetworkButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3015);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AppShell_ConnectButton__WEBPACK_IMPORTED_MODULE_5__, _SwitchNetworkButton__WEBPACK_IMPORTED_MODULE_8__, wagmi__WEBPACK_IMPORTED_MODULE_9__]);
([_components_AppShell_ConnectButton__WEBPACK_IMPORTED_MODULE_5__, _SwitchNetworkButton__WEBPACK_IMPORTED_MODULE_8__, wagmi__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({
        header: {
            paddingBottom: theme.spacing.md,
            marginBottom: `calc(${theme.spacing.md} * 1.5)`,
            borderBottom: `${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
        },
        footer: {
            paddingTop: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderTop: `${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`
        },
        link: {
            ...theme.fn.focusStyles(),
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,
            "&:hover": {
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === "dark" ? theme.white : theme.black,
                [`& .${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.getStylesRef)("icon")}`]: {
                    color: theme.colorScheme === "dark" ? theme.white : theme.black
                }
            }
        },
        linkIcon: {
            ref: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.getStylesRef)("icon"),
            color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
            marginRight: theme.spacing.sm
        },
        linkActive: {
            "&, &:hover": {
                backgroundColor: theme.fn.variant({
                    variant: "light",
                    color: theme.primaryColor
                }).background,
                color: theme.fn.variant({
                    variant: "light",
                    color: theme.primaryColor
                }).color,
                [`& .${(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.getStylesRef)("icon")}`]: {
                    color: theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor
                    }).color
                }
            }
        }
    }));
function EHRNavbar({ navlinks , opened  }) {
    const { classes , cx  } = useStyles();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { location  } = router.query;
    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useNetwork)();
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const basePath = location ? router.asPath.slice(0, router.asPath.indexOf(location)) : router.pathname;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setActive(location);
    }, [
        location
    ]);
    const links = navlinks.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: cx(classes.link, {
                [classes.linkActive]: link.location === active
            }),
            href: `${basePath}${link.location}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(link.icon, {
                    className: classes.linkIcon,
                    stroke: 1.5
                }),
                link.label
            ]
        }, link.label));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
        hiddenBreakpoint: "sm",
        hidden: !opened,
        width: {
            sm: 200,
            lg: 300
        },
        p: "md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Navbar.Section, {
                grow: true,
                children: links
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Navbar.Section, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: classes.link,
                    onClick: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.ActionIcon, {
                            className: classes.linkIcon,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_Icons_MetamaskIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AppShell_ConnectButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CertificateInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9445);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_form__WEBPACK_IMPORTED_MODULE_2__);



function CertificateInput({ index , initialValues , insertCertificate  }) {
    const form = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        initialValues: initialValues || {
            media: null,
            title: "",
            description: ""
        },
        validate: {
            media: (value)=>{
                return !value ? "Photo cannot be empty" : value.size / 1024 > 250 ? "Size of file must be less than or equal to 250KB" : null;
            },
            title: (0,_mantine_form__WEBPACK_IMPORTED_MODULE_2__.isNotEmpty)("Title cannot be empty"),
            description: (0,_mantine_form__WEBPACK_IMPORTED_MODULE_2__.isNotEmpty)("Description cannot be empty")
        }
    });
    function runInsertCertificate() {
        if (form.validate().hasErrors) return;
        form.setValues({
            media: "",
            title: "",
            description: ""
        });
        insertCertificate(index, form.values);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                cols: 2,
                pb: "md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.FileInput, {
                        name: "media",
                        ...form.getInputProps("media")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                        name: "title",
                        type: "text",
                        placeholder: "Title",
                        ...form.getInputProps("title")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                pb: "md",
                name: "description",
                placeholder: "Description",
                ...form.getInputProps("description"),
                autosize: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: runInsertCertificate,
                children: "Add certificate"
            })
        ]
    });
}


/***/ }),

/***/ 6837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GeneralDataInputs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8277);
/* harmony import */ var _mantine_dates__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_dates__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function GeneralDataInputs({ form  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        form.setValues({
            ...form.values,
            age: form.values.dob && new Date().getYear() - form.values.dob.getYear() - (new Date().getMonth() - form.values.dob.getMonth() < 0 ? 1 : 0)
        });
    }, [
        form.values.dob
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.FileInput, {
                placeholder: "Your photo",
                ...form.getInputProps("photo")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                placeholder: "Name",
                ...form.getInputProps("name")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_dates__WEBPACK_IMPORTED_MODULE_2__.DateInput, {
                placeholder: "Date of birth",
                valueFormat: "DD MMM YYYY",
                ...form.getInputProps("dob")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.NumberInput, {
                placeholder: "Age, autofilled using DOB",
                ...form.getInputProps("age"),
                disabled: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                placeholder: "Gender",
                ...form.getInputProps("gender")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                placeholder: "Address",
                ...form.getInputProps("address")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                placeholder: "Phone no.",
                ...form.getInputProps("phone")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                placeholder: "Email",
                ...form.getInputProps("email")
            })
        ]
    });
}


/***/ }),

/***/ 9193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SocialInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__);



function SocialInput({ form  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                    variant: "gradient",
                    gradient: {
                        from: "yellow",
                        to: "purple",
                        deg: 45
                    },
                    size: "sm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandInstagram, {})
                }),
                placeholder: "Instagram username",
                ...form.getInputProps("instagram")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                    color: "indigo",
                    size: "sm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandFacebook, {})
                }),
                placeholder: "Facebook username",
                ...form.getInputProps("facebook")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                    color: "blue",
                    size: "sm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandTwitter, {})
                }),
                placeholder: "Twitter username",
                ...form.getInputProps("twitter")
            })
        ]
    });
}


/***/ }),

/***/ 1263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BlurLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8836);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);



function BlurLoader({ visible , status  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.LoadingOverlay, {
        visible: visible,
        overlayBlur: 5,
        loader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Notification, {
                loading: true,
                title: (_utils_messages__WEBPACK_IMPORTED_MODULE_1___default())[status],
                withCloseButton: false,
                sx: {
                    border: "none",
                    backgroundColor: "transparent",
                    boxShadow: "none"
                },
                children: "Please wait, check for wallet popups (if any)"
            })
        })
    });
}


/***/ }),

/***/ 8836:
/***/ ((module) => {


module.exports = {
    loading: "Loading",
    uploading: "Uploading data",
    retrieving: "Retrieving data",
    encrypting: "Encrypting data",
    decrypting: "Decrypting data",
    signing: "Signing data",
    txnLoading: "Sending transaction",
    txnWaiting: "Waiting for confirmation",
    success: "Success, please reload the page",
    failure: "Failure, please reload the page"
};


/***/ })

};
;