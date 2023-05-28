"use strict";
exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 9010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useChangeEditorAccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5439);
/* harmony import */ var _useAddPatientData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7086);
/* harmony import */ var _useGetPatientData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3648);
/* harmony import */ var _useStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_2__, _useAddPatientData__WEBPACK_IMPORTED_MODULE_3__, _useGetPatientData__WEBPACK_IMPORTED_MODULE_4__]);
([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_2__, _useAddPatientData__WEBPACK_IMPORTED_MODULE_3__, _useGetPatientData__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function useChangeEditorAccess(drAddress) {
    const { address: curraddress , contractAddress , abi , enabled  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const [txnWaiting, setTxnWaiting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { isLoading: uploading , CIDs , setupCIDs , resetCIDs  } = (0,_useAddPatientData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(curraddress, drAddress);
    const { writeAsync: changeEditorAccess , isLoading: txnLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)({
        address: contractAddress,
        abi,
        functionName: "changeEditorAccess",
        args: [
            drAddress,
            CIDs.generalDataCID,
            CIDs.keyDataCID
        ],
        enabled: enabled && drAddress && CIDs.generalDataCID && CIDs.keyDataCID
    });
    const status = (0,_useStatus__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        uploading,
        txnLoading,
        txnWaiting,
        success
    });
    // storing hashes (CIDs) to smart contract happens here
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        CIDs.generalDataCID && CIDs.keyDataCID && (async ()=>{
            try {
                const res = await changeEditorAccess();
                setTxnWaiting(true);
                await res.wait(1);
                setTxnWaiting(false);
                setSuccess(true);
            } catch (err) {
                console.log(err);
            }
            resetCIDs();
        })();
    }, [
        CIDs
    ]);
    // work of encryption and storing to ipfs happens here
    async function runChangeEditorAccess({ generalData , certificatesData , keyData  }) {
        try {
            await setupCIDs({
                prevCertificatesData: certificatesData,
                prevKeyData: keyData
            }, generalData, certificatesData.data.certificates);
        } catch (err) {
            console.log(err);
        }
    }
    return {
        status,
        runChangeEditorAccess
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetDoctorOfPatient)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5439);
/* harmony import */ var _useStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__]);
([wagmi__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useGetDoctorOfPatient() {
    const { contractAddress , abi , enabled  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: signer  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSigner)();
    const [doctor, setDoctor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [txnLoading, setTxnLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const status = (0,_useStatus__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        txnLoading,
        success
    });
    async function getDoctorOfPatient() {
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(contractAddress, abi, signer);
        return await contract.getDrOfPt();
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            try {
                if (enabled && signer) {
                    setTxnLoading(true);
                    const drAddress = await getDoctorOfPatient();
                    setDoctor(drAddress);
                    setTxnLoading(false);
                    setSuccess(true);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [
        enabled,
        signer
    ]);
    return {
        status,
        doctor,
        getDoctorOfPatient
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;