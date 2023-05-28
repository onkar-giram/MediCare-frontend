"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 5450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetPatientsOfDoctor)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__]);
([wagmi__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useGetPatientsOfDoctor(runnow = true) {
    const { contractAddress , abi , enabled  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: signer  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSigner)();
    const [patients, setPatients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    async function getPatientsOfDoctor() {
        try {
            const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(contractAddress, abi, signer);
            setPatients(await contract.getPtsOfDr());
        } catch (err) {
            console.log(err);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        runnow && enabled && signer && getPatientsOfDoctor();
    }, [
        enabled,
        signer,
        runnow
    ]);
    return {
        patients
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useUpdateDoctor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
/* harmony import */ var _useAddDoctorData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7213);
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5439);
/* harmony import */ var _useStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__]);
([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useUpdateDoctor() {
    const { address , contractAddress , abi  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { isLoading: uploading , dataCID , setupCID , resetCID  } = (0,_useAddDoctorData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(address);
    const { writeAsync: setDrHash , isLoading: txnLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)({
        address: contractAddress,
        abi,
        functionName: "setDrHash",
        args: [
            dataCID
        ]
    });
    const [txnWaiting, setTxnWaiting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const message = (0,_useStatus__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        uploading,
        txnLoading,
        txnWaiting,
        success
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        dataCID && (async ()=>{
            try {
                const res = await setDrHash();
                setTxnWaiting(true);
                await res.wait(1);
                setTxnWaiting(false);
                setSuccess(true);
            } catch (err) {
                console.log(err);
                resetCID();
            }
        })();
    }, [
        dataCID
    ]);
    async function updateData(generalData, certificates) {
        try {
            await setupCID({
                ...generalData,
                certificates
            });
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