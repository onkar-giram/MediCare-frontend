"use strict";
exports.id = 600;
exports.ids = [600];
exports.modules = {

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Certifications)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8174);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utils_AddCertificateButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8978);
/* harmony import */ var _Utils_EditCertificateButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7657);
/* harmony import */ var _Utils_InsertCertificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(688);






function Certifications({ access , certificates , setEditedCertificates  }) {
    async function insertCertificate(index, certificate) {
        const { media  } = certificate;
        if (media && media.constructor.name == "File") certificate.media = await (0,_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1__.readAsDataURLAsync)(media);
        const temp = [
            ...certificates
        ];
        if (index < certificates.length) temp[index] = {
            ...certificate
        };
        else temp.push(certificate);
        setEditedCertificates(temp);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            certificates && certificates.map((certificate, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    shadow: "xs",
                    padding: "lg",
                    mb: "lg",
                    radius: "md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            weight: 500,
                            children: certificate.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            size: "sm",
                            color: "dimmed",
                            children: certificate.description
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                            mt: "xs",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    component: "a",
                                    href: certificate.media,
                                    download: true,
                                    compact: true,
                                    children: "Download certificate"
                                }),
                                access == 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_InsertCertificate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    index: index,
                                    certificate: certificate,
                                    insertCertificate: insertCertificate,
                                    BtnIcon: _Utils_EditCertificateButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                                }),
                                access == 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    onClick: ()=>{
                                        setEditedCertificates([
                                            ...certificates.slice(0, index),
                                            ...certificates.slice(index + 1, certificates.length)
                                        ]);
                                    },
                                    variant: "subtle",
                                    color: "red",
                                    compact: true,
                                    children: "Delete"
                                })
                            ]
                        })
                    ]
                }, index);
            }),
            access == 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_InsertCertificate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                index: certificates ? certificates.length : 1,
                certificate: {
                    media: "",
                    title: "",
                    description: ""
                },
                insertCertificate: insertCertificate,
                BtnIcon: _Utils_AddCertificateButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
            })
        ]
    });
}


/***/ }),

/***/ 4600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Doctor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useGetDoctorData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5974);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GeneralDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3170);
/* harmony import */ var _Certifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7526);
/* harmony import */ var _DoctorButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6907);
/* harmony import */ var _Utils_ConfirmChangesDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5422);
/* harmony import */ var _hooks_useUpdateDoctor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(506);
/* harmony import */ var _hooks_useCheckAccess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9066);
/* harmony import */ var _Utils_GeneralDataSkeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8985);
/* harmony import */ var _Utils_CertificatesSkeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2466);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utils_Retry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(503);
/* harmony import */ var _Utils_SkeletonLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3934);
/* harmony import */ var _Utils_BlurLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1263);
/* harmony import */ var _utils_deepEqual__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4355);
/* harmony import */ var _utils_deepEqual__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_utils_deepEqual__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useGetDoctorData__WEBPACK_IMPORTED_MODULE_1__, _DoctorButtons__WEBPACK_IMPORTED_MODULE_6__, _hooks_useUpdateDoctor__WEBPACK_IMPORTED_MODULE_8__, _hooks_useCheckAccess__WEBPACK_IMPORTED_MODULE_9__]);
([_hooks_useGetDoctorData__WEBPACK_IMPORTED_MODULE_1__, _DoctorButtons__WEBPACK_IMPORTED_MODULE_6__, _hooks_useUpdateDoctor__WEBPACK_IMPORTED_MODULE_8__, _hooks_useCheckAccess__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({
        tabs: {}
    }));
function Doctor({ user , address , setDoctor  }) {
    // get data
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { status: statusOfGet , generalData , certificates , getData  } = (0,_hooks_useGetDoctorData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(address);
    const { status: statusOfUpdate , updateData  } = (0,_hooks_useUpdateDoctor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { access  } = (0,_hooks_useCheckAccess__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(address);
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("general-details");
    const [editedGeneralData, setEditedGeneralData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [editedCertificates, setEditedCertificates] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [isEdited, setIsEdited] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { classes  } = useStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setEditedGeneralData(generalData);
        setEditedCertificates(certificates);
    }, [
        generalData,
        certificates
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setIsEdited(!(_utils_deepEqual__WEBPACK_IMPORTED_MODULE_16___default()(generalData, editedGeneralData) && _utils_deepEqual__WEBPACK_IMPORTED_MODULE_16___default()(certificates, editedCertificates)));
    }, [
        editedGeneralData,
        editedCertificates
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        statusOfUpdate == "success" && router.reload(window.location.pathname);
    }, [
        statusOfUpdate
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setDoctor && setDoctor(address);
    }, [
        address
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_BlurLoader__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                visible: Boolean(statusOfUpdate),
                status: statusOfUpdate
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                value: activeTab,
                onTabChange: setActiveTab,
                orientation: "horizontal",
                px: "xl",
                mt: "md",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs.List, {
                        className: classes.tabs,
                        grow: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs.Tab, {
                                value: "general-details",
                                children: "General Details"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs.Tab, {
                                value: "certificates",
                                children: "Doctor's Certificates"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        my: "md",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DoctorButtons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                access: access,
                                address: address
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs.Panel, {
                                value: "general-details",
                                mt: "md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_SkeletonLoader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    status: statusOfGet,
                                    SkeletonComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_GeneralDataSkeleton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            status: statusOfGet
                                        }),
                                    RetryComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_Retry__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            status: statusOfGet,
                                            retryHandler: getData
                                        }),
                                    DataComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GeneralDetails__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            address: address,
                                            access: access,
                                            data: editedGeneralData,
                                            setEditedGeneralData: setEditedGeneralData
                                        })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tabs.Panel, {
                                value: "certificates",
                                mt: "md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_SkeletonLoader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    status: statusOfGet,
                                    SkeletonComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_CertificatesSkeleton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            status: statusOfGet
                                        }),
                                    RetryComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_Retry__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            status: statusOfGet,
                                            retryHandler: getData
                                        }),
                                    DataComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Certifications__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            access: access,
                                            certificates: editedCertificates,
                                            setEditedCertificates: setEditedCertificates
                                        })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_ConfirmChangesDialog__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                isEdited: isEdited,
                handleOnConfirm: async ()=>{
                    await updateData(editedGeneralData, editedCertificates);
                },
                handleOnReset: ()=>{
                    setEditedGeneralData(generalData);
                    setEditedCertificates(certificates);
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DoctorButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useIsDoctorPending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6459);
/* harmony import */ var _hooks_useRegisterDoctorConfirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2235);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useIsDoctorPending__WEBPACK_IMPORTED_MODULE_1__, _hooks_useRegisterDoctorConfirm__WEBPACK_IMPORTED_MODULE_2__]);
([_hooks_useIsDoctorPending__WEBPACK_IMPORTED_MODULE_1__, _hooks_useRegisterDoctorConfirm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function DoctorButtons({ access , address  }) {
    const { isDoctorPending  } = (0,_hooks_useIsDoctorPending__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(address);
    const { isLoading , isDoctor , registerDrConfirm  } = (0,_hooks_useRegisterDoctorConfirm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {
        children: [
            isDoctorPending ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Badge, {
                color: "red",
                children: "Not Approved"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Badge, {
                color: "green",
                children: "Approved"
            }),
            access == 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: !isDoctorPending && !isDoctor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    onClick: registerDrConfirm,
                    variant: "subtle",
                    disabled: isLoading,
                    compact: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
                            size: "sm",
                            color: "blue",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconKey, {})
                        }),
                        " ",
                        "Confirm Registration"
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GeneralDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Forms_EditGeneralDataForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2289);




const useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({
        image: {
            border: `1px solid ${theme.colors.dark[0]}`
        },
        socialcard: {
            border: `1px solid ${theme.colors.dark[0]}`,
            borderRadius: theme.radius.md,
            padding: theme.spacing.md
        }
    }));
function GeneralDetails({ address , access , data , setEditedGeneralData  }) {
    const { classes  } = useStyles();
    return data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            access == 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Forms_EditGeneralDataForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                initialValues: data,
                setEditedGeneralData: setEditedGeneralData
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
                order: 3,
                children: [
                    "Dr. ",
                    data.name,
                    "'s profile "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                mt: "xs",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                        span: 3,
                        bor: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            src: data.photo,
                            height: 200,
                            width: 200,
                            radius: 100,
                            classNames: {
                                image: "mantine-Image-image"
                            },
                            styles: {
                                image: classes.image
                            },
                            caption: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fw: 500,
                                        children: data.name
                                    }),
                                    address && `${address.slice(0, 6)}...${address.slice(address.length - 6, address.length)}`
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                        span: 5,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Table, {
                            verticalSpacing: "sm",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    tt: "capitalize",
                                                    children: "Chain Address"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    c: "dimmed",
                                                    tt: "capitalize",
                                                    span: true,
                                                    children: address
                                                })
                                            })
                                        ]
                                    }),
                                    Object.keys(data).map((key, index)=>{
                                        if ([
                                            "photo",
                                            "instagram",
                                            "facebook",
                                            "twitter"
                                        ].indexOf(key) != -1) return;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        tt: "capitalize",
                                                        children: key
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        c: "dimmed",
                                                        tt: "capitalize",
                                                        span: true,
                                                        children: data[key]
                                                    })
                                                })
                                            ]
                                        }, index);
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                        span: 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                        span: 3,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
                            className: classes.socialcard,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fw: "bold",
                                    children: "Social"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                                    mt: "lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                                            component: "a",
                                            href: `https://instagram.com/${data.instagram}`,
                                            target: "_blank",
                                            variant: "gradient",
                                            gradient: {
                                                from: "yellow",
                                                to: "purple",
                                                deg: 45
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandInstagram, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                                            component: "a",
                                            href: `https://facebook.com/${data.facebook}`,
                                            target: "_blank",
                                            color: "indigo",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandFacebookFilled, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {
                                            component: "a",
                                            href: `https://twitter.com/${data.twitter}`,
                                            target: "_blank",
                                            color: "blue",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandTwitterFilled, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditGeneralDataForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8174);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9445);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CustomInputs_GeneralDataInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6837);
/* harmony import */ var _CustomInputs_SocialInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9193);










function EditGeneralDataForm({ initialValues , setEditedGeneralData  }) {
    const [opened, { open , close  }] = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_4__.useDisclosure)(false);
    const form = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        initialValues: {},
        validate: {
            photo: (value)=>value ? value.size / 1024 > 250 ? "Size of file must be less than or equal to 250KB" : null : null,
            name: (value)=>value ? (0,_mantine_form__WEBPACK_IMPORTED_MODULE_3__.hasLength)({
                    min: 2,
                    max: 25
                }, "Name must be 2-25 characters")(value) : null,
            age: (value)=>value ? value < 18 || value > 99 ? "You must be 18-99 years old to register" : null : value == 0 ? "Age cannot be 0" : null,
            gender: (value)=>value ? (0,_mantine_form__WEBPACK_IMPORTED_MODULE_3__.matches)(/^(male|female|Male|Female)$/, "Input must be Male/male or Female/female")(value) : null,
            phone: (value)=>value ? (0,_mantine_form__WEBPACK_IMPORTED_MODULE_3__.hasLength)(10, "Phone number must be a 10 digit number")(value) : null,
            email: (value)=>value ? (0,_mantine_form__WEBPACK_IMPORTED_MODULE_3__.isEmail)("Invalid Email")(value) : null
        },
        validateInputOnChange: [
            "photo"
        ],
        validateInputOnBlur: [
            "name",
            "age",
            "gender",
            "phone",
            "email"
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
        mb: "xs",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                opened: opened,
                onClose: close,
                title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    children: [
                        "Edit your general data",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            c: "dimmed",
                            size: "xs",
                            children: "Fill out the fields you want to edit, leave empty to keep unchanged"
                        })
                    ]
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: form.onSubmit(async (formdata)=>{
                        const data = {
                            ...formdata
                        };
                        const { dob  } = data;
                        if (dob) data.dob = data.dob.toDateString();
                        const { photo  } = data;
                        if (photo && photo.constructor.name == "File") data.photo = await (0,_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1__.readAsDataURLAsync)(photo);
                        Object.keys(data).forEach((key)=>!data[key] && delete data[key]);
                        setEditedGeneralData({
                            ...initialValues,
                            ...data
                        });
                        form.reset();
                        close();
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
                        cols: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomInputs_GeneralDataInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                form: form
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomInputs_SocialInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                form: form
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                type: "submit",
                                children: "Update fields"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: open,
                variant: "subtle",
                p: "0",
                compact: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__.IconEdit, {}),
                    " Edit data"
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddCertificateButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const { Center , Button , ActionIcon  } = __webpack_require__(2247);
const { IconPlus  } = __webpack_require__(2236);
function AddCertificateButton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Center, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
            variant: "light",
            w: "100%",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconPlus, {})
        })
    });
}


/***/ }),

/***/ 2466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CertificatesSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8836);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);



function CertificatesSkeleton({ status  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
        my: "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                height: 120,
                w: "100%",
                radius: "md"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                height: 120,
                w: "100%",
                radius: "md",
                mt: "lg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                height: 120,
                w: "100%",
                radius: "md",
                mt: "lg"
            })
        ]
    });
}


/***/ }),

/***/ 5422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfirmChangesDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function ConfirmChangesDialog({ isEdited , handleOnConfirm , handleOnReset  }) {
    const [opened, { open , close  }] = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(isEdited);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        isEdited ? open() : close();
    }, [
        isEdited
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
        opened: opened,
        onClose: close,
        size: "lg",
        radius: "md",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                size: "sm",
                mb: "xs",
                weight: 500,
                children: [
                    "Confirm or reset all profile data and certificates changes",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "dimmed",
                        size: "xs",
                        children: "Confirm to save, reset to restore last saved state"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                align: "flex-end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        onClick: handleOnConfirm,
                        variant: "outline",
                        compact: true,
                        children: "Confirm"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        onClick: handleOnReset,
                        color: "red",
                        variant: "outline",
                        compact: true,
                        children: "Reset"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditCertificateButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const { ActionIcon  } = __webpack_require__(2247);
const { IconEdit  } = __webpack_require__(2236);
function EditCertificateButton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActionIcon, {
        component: "button",
        color: "blue",
        variant: "subtle",
        radius: "xl",
        sx: {
            "&:hover": {
                backgroundColor: "none"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconEdit, {})
    });
}


/***/ }),

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GeneralDataSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8836);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);



function GeneralDataSkeleton({ status , details  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                height: 25,
                w: "20%",
                my: "lg",
                radius: "xl"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                my: "xs",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Grid.Col, {
                        span: 3,
                        bor: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                            height: 200,
                            mt: 15,
                            circle: true
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Grid.Col, {
                        span: 5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                height: 20,
                                radius: "xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                height: 20,
                                mt: 15,
                                radius: "xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                height: 20,
                                mt: 15,
                                radius: "xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                height: 20,
                                mt: 15,
                                radius: "xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                height: 20,
                                mt: 15,
                                radius: "xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                height: 20,
                                mt: 15,
                                radius: "xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                height: 20,
                                mt: 15,
                                radius: "xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                height: 20,
                                mt: 15,
                                radius: "xl"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Grid.Col, {
                        span: 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Grid.Col, {
                        span: 3,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    height: 40,
                                    mt: 6,
                                    circle: true,
                                    radius: "xl"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    height: 40,
                                    mt: 6,
                                    circle: true,
                                    radius: "xl"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                    height: 40,
                                    mt: 6,
                                    circle: true,
                                    radius: "xl"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InsertCertificate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Forms_CustomInputs_CertificateInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1020);




function InsertCertificate({ index , certificate , insertCertificate , BtnIcon  }) {
    const [opened, { open , close  }] = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                opened: opened,
                onClose: close,
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    children: "Add/Edit a certificate"
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Forms_CustomInputs_CertificateInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    index: index,
                    initialValues: certificate || {},
                    insertCertificate: insertCertificate
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                onClick: open,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BtnIcon, {})
            })
        ]
    });
}


/***/ }),

/***/ 503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Retry)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8836);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__);




function Retry({ status , retryHandler  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        align: "center",
        direction: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                fw: "700",
                children: (_utils_messages__WEBPACK_IMPORTED_MODULE_1___default())[status]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
                color: "red",
                variant: "filled",
                onClick: ()=>retryHandler(),
                compact: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconReload, {}),
                    " Reload"
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SkeletonLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8836);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);



function SkeletonLoader({ status , SkeletonComponent , RetryComponent , DataComponent  }) {
    return status == "success" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataComponent, {}) : status == "failure" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RetryComponent, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkeletonComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Notification, {
                loading: true,
                title: (_utils_messages__WEBPACK_IMPORTED_MODULE_1___default())[status],
                withCloseButton: false,
                sx: {
                    border: "none",
                    backgroundColor: "transparent",
                    boxShadow: "none"
                },
                children: "Please wait, check for metamask popups"
            })
        ]
    });
}


/***/ }),

/***/ 9066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCheckAccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
/* harmony import */ var _useGetPatientsOfDoctor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5450);
/* harmony import */ var _useIsDoctor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6417);
/* harmony import */ var _useIsPatient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useGetPatientsOfDoctor__WEBPACK_IMPORTED_MODULE_2__, _useIsDoctor__WEBPACK_IMPORTED_MODULE_3__, _useIsPatient__WEBPACK_IMPORTED_MODULE_4__]);
([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useGetPatientsOfDoctor__WEBPACK_IMPORTED_MODULE_2__, _useIsDoctor__WEBPACK_IMPORTED_MODULE_3__, _useIsPatient__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useCheckAccess(dataOwner) {
    const { address: dataAccessor  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount)();
    const { isPatient: ownerIsPatient  } = (0,_useIsPatient__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(dataOwner);
    const { isDoctor: accessorIsDoctor  } = (0,_useIsDoctor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(dataAccessor);
    const { patients  } = (0,_useGetPatientsOfDoctor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(accessorIsDoctor);
    const [access, setAccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (dataOwner == dataAccessor) setAccess(2);
        else if (ownerIsPatient && accessorIsDoctor && patients.indexOf(dataOwner) != -1) setAccess(1);
    }, [
        dataOwner,
        dataAccessor,
        ownerIsPatient,
        accessorIsDoctor,
        patients
    ]);
    return {
        access
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetDoctorData)
/* harmony export */ });
/* harmony import */ var _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4480);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_ipfs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8174);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_2__]);
([_hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// This hook gets patient or doctor hash from contract, gets corresponding data from IPFS
// and returns hash, data and certificates of data
function useGetDoctorData(address) {
    const { contractAddress , abi , enabled  } = (0,_hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        generalData: {},
        certificates: []
    });
    const [isRetrieving, setIsRetrieving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [retrieved, setRetrieved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [failed, setFailed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const status = (0,_useStatus__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        retrieving: isRetrieving,
        success: retrieved,
        failure: failed
    });
    // get hash
    const { data: hashData  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "getDrHash",
        args: [
            address
        ],
        enabled: enabled && address
    });
    async function getData() {
        setIsRetrieving(true);
        try {
            const ipfsData = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_3__.retrieveIPFS)(hashData);
            const certificates = ipfsData.certificates;
            delete ipfsData.certificates;
            ipfsData && certificates && setData({
                generalData: ipfsData,
                certificates
            });
            setRetrieved(true);
        } catch (err) {
            console.log(err);
            setFailed(true);
        }
        setIsRetrieving(false);
    }
    // get data from IPFS
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        hashData && getData();
    }, [
        hashData
    ]);
    return {
        status,
        hashData,
        ...data,
        getData
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useIsDoctor)
/* harmony export */ });
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5439);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__]);
([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useIsDoctor(address) {
    const { contractAddress , enabled , abi  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { data: isDoctor , refetch: runIsDoctor  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "isDoctor",
        args: [
            address
        ],
        enabled: enabled && address
    });
    return {
        isDoctor,
        runIsDoctor
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useIsDoctorPending)
/* harmony export */ });
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5439);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__]);
([_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__, wagmi__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useIsDoctorPending(address) {
    const { contractAddress , enabled , abi  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { data: isDoctorPending , refetch: runIsDoctorPending  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "isDrPending",
        args: [
            address
        ],
        enabled: enabled && address
    });
    return {
        isDoctorPending,
        runIsDoctorPending
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRegisterDoctorConfirm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
/* harmony import */ var _hooks_useIsDoctor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6417);
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5439);
/* harmony import */ var _utils_metamask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9766);
/* harmony import */ var _utils_metamask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_metamask__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _hooks_useIsDoctor__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__]);
([wagmi__WEBPACK_IMPORTED_MODULE_1__, _hooks_useIsDoctor__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useRegisterDoctorConfirm() {
    const { address , contractAddress , abi , enabled  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { isDoctor , runIsDoctor  } = (0,_hooks_useIsDoctor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(address);
    const [publicKey, setPublicKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { writeAsync: runRegisterDrConfirm  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)({
        address: contractAddress,
        abi,
        functionName: "registerDrConfirm",
        args: [
            publicKey
        ],
        enabled: enabled && publicKey
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        publicKey && (async ()=>{
            try {
                const response = await runRegisterDrConfirm();
                await response.wait(1);
                await runIsDoctor();
            } catch (err) {
                console.log(err);
            }
            setPublicKey(null);
            setIsLoading(false);
        })();
    }, [
        publicKey
    ]);
    async function registerDrConfirm() {
        setIsLoading(true);
        try {
            setPublicKey(await (0,_utils_metamask__WEBPACK_IMPORTED_MODULE_4__.getPublicKey)(address));
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }
    return {
        isLoading,
        isDoctor,
        runIsDoctor,
        registerDrConfirm
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4355:
/***/ ((module) => {


module.exports = function deepEqual(x, y) {
    return x && y && typeof x === "object" && typeof y === "object" ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).reduce(function(isEqual, key) {
        return isEqual && deepEqual(x[key], y[key]);
    }, true) : x === y;
};


/***/ })

};
;