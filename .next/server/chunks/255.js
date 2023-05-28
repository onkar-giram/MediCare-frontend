"use strict";
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRegisterPatient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
/* harmony import */ var _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5439);
/* harmony import */ var _useAddPatientData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7086);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8174);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_2__, _useAddPatientData__WEBPACK_IMPORTED_MODULE_3__]);
([wagmi__WEBPACK_IMPORTED_MODULE_1__, _hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_2__, _useAddPatientData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function useRegisterPatient() {
    const { address , contractAddress , abi , enabled  } = (0,_hooks_useValidTxnData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { isLoading: uploading , CIDs , setupCIDs , resetCIDs  } = (0,_useAddPatientData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(address);
    const [txnWaiting, setTxnWaiting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // check if user is patient
    const { data: isPatient , refetch: runIsPatient  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "isPatient",
        args: [
            address
        ],
        enabled
    });
    // perform registration
    const { writeAsync: registerPatient , isLoading: txnLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)({
        address: contractAddress,
        abi,
        functionName: "registerPt",
        args: [
            CIDs.generalDataCID,
            CIDs.keyDataCID
        ],
        enabled: enabled && CIDs.generalDataCID && CIDs.keyDataCID
    });
    // registers patient when CIDs are available
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const { generalDataCID , keyDataCID: keyCID  } = CIDs;
        generalDataCID && keyCID && (async ()=>{
            try {
                const response = await registerPatient();
                setTxnWaiting(true);
                await response.wait(1);
                setTxnWaiting(false);
                await runIsPatient();
            } catch (err) {
                console.log(err);
            }
            resetCIDs();
        })();
    }, [
        CIDs
    ]);
    const message = (0,_useStatus__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        uploading,
        txnLoading,
        txnWaiting
    });
    /* Handler functions */ async function handleOnSumbit(data) {
        try {
            const { certificates  } = data;
            delete data.certificates;
            // convert date to string
            const { dob  } = data;
            if (dob && dob.constructor.name == "Date") data.dob = dob.toDateString();
            // change photo from File to data url
            const { photo  } = data;
            if (photo && photo.constructor.name == "File") data.photo = await (0,_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_4__.readAsDataURLAsync)(photo);
            // changes media in certificates to dataURLS in data
            for(let i in certificates){
                const { media  } = certificates[i];
                if (media && media.constructor.name == "File") certificates[i].media = await (0,_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_4__.readAsDataURLAsync)(media);
            }
            await setupCIDs({
                prevCertificatesData: {},
                prevKeyData: {}
            }, data, certificates);
        } catch (err) {
            console.log(err);
        }
    /* Contract function runAddPatient (addPatient) is performed in
      useEffect hook triggered by change in CIDs because we don't get
      updated value of changed state of CIDs here */ }
    return {
        isPatient,
        status: message,
        handleOnSumbit
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;