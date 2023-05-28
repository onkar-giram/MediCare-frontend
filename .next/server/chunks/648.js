"use strict";
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 3648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetPatientData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8998);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4480);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_ipfs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8174);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_metamask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9766);
/* harmony import */ var _utils_metamask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_metamask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cryptography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6066);
/* harmony import */ var _utils_cryptography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_cryptography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _useGetPatientHash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(774);
/* harmony import */ var _useStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useGetPatientHash__WEBPACK_IMPORTED_MODULE_6__]);
([wagmi__WEBPACK_IMPORTED_MODULE_1__, _useGetPatientHash__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function useGetPatientData(address, enabled = true) {
    const { address: curraddress  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount)();
    const { generalHash , keyHash , certificatesHash  } = (0,_useGetPatientHash__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(address);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        generalData: {},
        certificatesData: {},
        keyData: {}
    });
    const [isRetrieving, setIsRetrieving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [retrieved, setHasRetrieved] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [failed, setHasFailed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const message = (0,_useStatus__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        retrieving: isRetrieving,
        success: retrieved,
        failure: failed
    });
    async function getFromIPFS() {
        const cipherGeneralData = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_2__.retrieveIPFS)(generalHash);
        const cipherKey = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_2__.retrieveIPFS)(keyHash);
        const cipherCertificatesData = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_2__.retrieveIPFS)(certificatesHash);
        return {
            cipherGeneralData,
            cipherKey,
            cipherCertificatesData
        };
    }
    async function finalStepDecryption(ciphers) {
        const { cipherGeneralData , cipherKey , cipherCertificatesData  } = ciphers;
        const { key , iv  } = JSON.parse(await (0,_utils_metamask__WEBPACK_IMPORTED_MODULE_4__.decryptData)(curraddress, cipherKey.keys[curraddress]));
        const generalData = JSON.parse((0,_utils_cryptography__WEBPACK_IMPORTED_MODULE_5__.symmetricDecrypt)(cipherGeneralData, Buffer.from(key, "hex"), Buffer.from(iv, "hex")));
        const certificatesData = {
            ...cipherCertificatesData,
            data: JSON.parse((0,_utils_cryptography__WEBPACK_IMPORTED_MODULE_5__.symmetricDecrypt)(cipherCertificatesData.data, Buffer.from(key, "hex"), Buffer.from(iv, "hex")))
        };
        generalData && certificatesData && setData({
            generalData,
            certificatesData,
            keyData: cipherKey
        });
    }
    async function master() {
        setIsRetrieving(true);
        try {
            const ciphers = await getFromIPFS();
            await finalStepDecryption(ciphers);
            setHasRetrieved(true);
        } catch (err) {
            console.log(err);
            setHasFailed(true);
        }
        setIsRetrieving(false);
    }
    // this useEffect is triggered when hashes are available
    // these hashes are made available by previous useEffect
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        enabled && generalHash && keyHash && master();
    }, [
        enabled,
        generalHash,
        keyHash
    ]);
    return {
        status: message,
        generalHash,
        keyHash,
        certificatesHash,
        ...data,
        getData: master
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;