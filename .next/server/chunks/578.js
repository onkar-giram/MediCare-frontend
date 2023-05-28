"use strict";
exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 6914:
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
            borderRadius: theme.radius.md
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
                    data.name,
                    "'s profile"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                mt: "xs",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Grid.Col, {
                        span: 3,
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
                                    `${address && address.slice(0, 6)}...${address.slice(address.length - 6, address.length)}`
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
                            p: "md",
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

/***/ 8768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MedicalCertificates)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8174);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utils_AddCertificateButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8978);
/* harmony import */ var _Utils_EditCertificateButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7657);
/* harmony import */ var _components_Utils_InsertCertificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(688);






function MedicalCertificates({ access , certificates , setEditedCertificates  }) {
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
                                access >= 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Utils_InsertCertificate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    index: index,
                                    certificate: certificate,
                                    insertCertificate: insertCertificate,
                                    BtnIcon: _Utils_EditCertificateButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                                }),
                                access >= 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
            access >= 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Utils_InsertCertificate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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

/***/ 3578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Patient)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetPatientData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3648);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GeneralDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6914);
/* harmony import */ var _MedicalCertificates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8768);
/* harmony import */ var _Utils_ConfirmChangesDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5422);
/* harmony import */ var _hooks_useUpdatePatient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3449);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8998);
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
/* harmony import */ var _hooks_useSignCertificates__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6981);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useGetPatientData__WEBPACK_IMPORTED_MODULE_2__, _hooks_useUpdatePatient__WEBPACK_IMPORTED_MODULE_7__, wagmi__WEBPACK_IMPORTED_MODULE_8__, _hooks_useCheckAccess__WEBPACK_IMPORTED_MODULE_9__, _hooks_useSignCertificates__WEBPACK_IMPORTED_MODULE_17__]);
([_hooks_useGetPatientData__WEBPACK_IMPORTED_MODULE_2__, _hooks_useUpdatePatient__WEBPACK_IMPORTED_MODULE_7__, wagmi__WEBPACK_IMPORTED_MODULE_8__, _hooks_useCheckAccess__WEBPACK_IMPORTED_MODULE_9__, _hooks_useSignCertificates__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function Patient({ user , address , setData  }) {
    // get data
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { address: curraddress  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount)();
    const { status: statusOfGet , generalData , certificatesData: { previousVersion , data , digitalSignatureOfLastUpdater  } , keyData , getData  } = (0,_hooks_useGetPatientData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(address);
    const { status: statusOfUpdate , updateData  } = (0,_hooks_useUpdatePatient__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(address, curraddress);
    const { access  } = (0,_hooks_useCheckAccess__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(address);
    const { recoverSigner  } = (0,_hooks_useSignCertificates__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)();
    // console.log(data);
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("general-details");
    const [editedGeneralData, setEditedGeneralData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [editedCertificates, setEditedCertificates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isEdited, setIsEdited] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (generalData && data) {
            setEditedGeneralData(generalData);
            data && setEditedCertificates(data.certificates);
            setData && setData({
                generalData,
                certificatesData: {
                    previousVersion,
                    data,
                    digitalSignatureOfLastUpdater
                },
                keyData
            });
        }
    }, [
        generalData,
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        generalData && data && setIsEdited(!(_utils_deepEqual__WEBPACK_IMPORTED_MODULE_16___default()(generalData, editedGeneralData) && _utils_deepEqual__WEBPACK_IMPORTED_MODULE_16___default()(data.certificates, editedCertificates)));
    }, [
        editedGeneralData,
        editedCertificates
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        statusOfUpdate == "success" && router.reload(window.location.pathname);
    }, [
        statusOfUpdate
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_BlurLoader__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                visible: Boolean(statusOfUpdate),
                status: statusOfUpdate
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Tabs, {
                value: activeTab,
                onTabChange: setActiveTab,
                orientation: "horizontal",
                px: "xl",
                mt: "md",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Tabs.List, {
                        grow: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Tabs.Tab, {
                                value: "general-details",
                                children: "General Details"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Tabs.Tab, {
                                value: "certificates",
                                children: "Medical Certificates"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Tabs.Panel, {
                        value: "general-details",
                        mt: "md",
                        h: "100%",
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Tabs.Panel, {
                        value: "certificates",
                        mt: "md",
                        h: "100%",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_SkeletonLoader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            status: statusOfGet,
                            SkeletonComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_CertificatesSkeleton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    status: statusOfGet
                                }),
                            RetryComponent: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_Retry__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    status: statusOfGet,
                                    retryHandler: getData
                                }),
                            DataComponent: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {
                                            mb: "xs",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                    c: "blue",
                                                    size: "sm",
                                                    fw: "bold",
                                                    children: [
                                                        "Last Updated by:",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                            c: "dimmed",
                                                            span: true,
                                                            children: data.metadata.lastUpdatedBy
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                    c: "blue",
                                                    size: "sm",
                                                    fw: "bold",
                                                    children: [
                                                        "Last Updated Date:",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                            c: "dimmed",
                                                            span: true,
                                                            children: data.metadata.lastUpdatedDate
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                    c: "blue",
                                                    size: "sm",
                                                    fw: "bold",
                                                    children: [
                                                        "Version:",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                            c: "dimmed",
                                                            span: true,
                                                            children: data.metadata.version
                                                        })
                                                    ]
                                                }),
                                                recoverSigner(data, digitalSignatureOfLastUpdater) === data.metadata.lastUpdatedBy.toLowerCase() ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Badge, {
                                                    color: "green",
                                                    children: "Valid signature"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Badge, {
                                                    color: "red",
                                                    children: "Invalid signature"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MedicalCertificates__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            access: access,
                                            certificates: editedCertificates,
                                            setEditedCertificates: setEditedCertificates
                                        })
                                    ]
                                })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utils_ConfirmChangesDialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                isEdited: isEdited,
                handleOnConfirm: async ()=>{
                    await updateData({
                        prevCertificatesData: {
                            previousVersion,
                            data,
                            digitalSignatureOfLastUpdater
                        },
                        prevKeyData: keyData
                    }, !_utils_deepEqual__WEBPACK_IMPORTED_MODULE_16___default()(generalData, editedGeneralData) ? editedGeneralData : null, !_utils_deepEqual__WEBPACK_IMPORTED_MODULE_16___default()(data.certificates, editedCertificates) ? editedCertificates : null, keyData);
                },
                handleOnReset: ()=>{
                    setEditedGeneralData(generalData);
                    setEditedCertificates(data.certificates);
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useUpdatePatient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
/* harmony import */ var _useAddPatientData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7086);
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5439);
/* harmony import */ var _useStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useAddPatientData__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__]);
([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useAddPatientData__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useUpdatePatient(ptAddress, updater) {
    const { contractAddress , abi  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { isLoading: uploading , CIDs , setupCIDs , resetCIDs  } = (0,_useAddPatientData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ptAddress, updater);
    const [txnWaiting, setTxnWaiting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { writeAsync: setPtGeneralHash , isLoading: txnGeneralLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)({
        address: contractAddress,
        abi,
        functionName: "setPtGeneralHash",
        args: [
            CIDs.generalDataCID
        ]
    });
    const { writeAsync: setPtRecordHash , isLoading: txnRecordLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)({
        address: contractAddress,
        abi,
        functionName: "setPtRecordHash",
        args: [
            ptAddress,
            CIDs.keyDataCID
        ]
    });
    const message = (0,_useStatus__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        uploading,
        txnLoading: txnGeneralLoading || txnRecordLoading,
        txnWaiting,
        success
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const { generalDataCID , keyDataCID  } = CIDs;
        (async ()=>{
            try {
                const res1 = generalDataCID && await setPtGeneralHash();
                const res2 = keyDataCID && await setPtRecordHash();
                setTxnWaiting(true);
                res1 && await res1.wait(1);
                res2 && await res2.wait(1);
                setTxnWaiting(false);
                (generalDataCID || keyDataCID) && setSuccess(true);
            } catch (err) {
                console.log(err);
                resetCIDs();
            }
        })();
    }, [
        CIDs
    ]);
    async function updateData(previousData, generalData, certificates, keyData) {
        try {
            await setupCIDs(previousData, generalData, certificates, keyData);
        } catch (err) {
            console.log(err);
        }
    }
    return {
        status: message,
        updateData
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;