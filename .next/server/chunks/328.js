"use strict";
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 7213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAddDoctorData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4480);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_ipfs__WEBPACK_IMPORTED_MODULE_1__);


function useAddDoctorData(address) {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [dataCID, setDataCID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    function resetCID() {
        setDataCID(null);
    }
    async function setupCID(data) {
        setIsLoading(true);
        try {
            // store data to IPFS and set dataCID
            console.log("Uploading data....");
            const dataFiles = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_1__.makeFileObjects)([
                data
            ], [
                address
            ]);
            const cid = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_1__.storeIPFS)(dataFiles, {
                wrapWithDirectory: false
            });
            console.log(cid);
            setDataCID(cid);
        } catch (err) {
            setIsLoading(false);
            throw err;
        }
        setIsLoading(false);
    }
    return {
        isLoading,
        dataCID,
        setupCID,
        resetCID
    };
}


/***/ }),

/***/ 3204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// {uploading, retrieving, encrypting, decrypting, signing, txnLoading, txnWaiting}
function useStatus(statuses) {
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const { loading , uploading , retrieving , encrypting , decrypting , signing , txnLoading , txnWaiting , success , failure  } = statuses;
        if (loading) setStatus("loading");
        else if (uploading) setStatus("uploading");
        else if (retrieving) setStatus("retrieving");
        else if (encrypting) setStatus("encrypting");
        else if (decrypting) setStatus("decrypting");
        else if (signing) setStatus("signing");
        else if (txnLoading) setStatus("txnLoading");
        else if (txnWaiting) setStatus("txnWaiting");
        else if (success) setStatus("success");
        else if (failure) setStatus("failure");
        else setStatus(null);
    }, [
        statuses
    ]);
    return status;
}


/***/ }),

/***/ 4480:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(2648)/* ["default"] */ .Z);
const _web3Storage = __webpack_require__(5994);
const _axios = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(2167));
async function makeStorageClient() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE4QjU5NDUzMzNjRDdkMmI0MERDMTczMzlmNDkxODQxODE0YmY0NkUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODQ1ODM4NjU4NTIsIm5hbWUiOiJtZWRpY2FyZSJ9.WGeDiWh2Oh0eBjC53k8qDVdWfEPgY3ZvZhsuUI2J8ok";
    return new _web3Storage.Web3Storage({
        token
    });
}
async function makeFileObjects(objects, filenames) {
    let files = [];
    for(let i = 0; i < objects.length; i++){
        const object = objects[i];
        const filename = filenames[i];
        const blob = typeof object === "string" ? new Blob([
            object
        ], {
            type: "application/json"
        }) : new Blob([
            JSON.stringify(object)
        ], {
            type: "application/json"
        });
        files.push(new File([
            blob
        ], filename));
    }
    return files;
}
async function storeIPFS(files, options) {
    const client = await makeStorageClient();
    const cid = await client.put(files, options);
    return cid;
}
async function retrieveIPFS(cid) {
    const res = await _axios.default.get(`https://w3s.link/ipfs/${cid}`);
    return res.data;
}
module.exports = {
    makeFileObjects,
    storeIPFS,
    retrieveIPFS
};


/***/ }),

/***/ 9766:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _ethSigUtil = __webpack_require__(7303);
async function getPublicKey(address) {
    return await window.ethereum.request({
        method: "eth_getEncryptionPublicKey",
        params: [
            address
        ]
    });
}
async function encryptData(address, data, publicKey) {
    const enc = (0, _ethSigUtil.encrypt)({
        publicKey: publicKey || await getPublicKey(address),
        data: data,
        version: "x25519-xsalsa20-poly1305"
    });
    return enc;
}
async function decryptData(address, data) {
    const decrypt = await window.ethereum.request({
        method: "eth_decrypt",
        params: [
            data,
            address
        ]
    });
    return decrypt;
}
async function sign(address, message) {
    console.log(address);
    console.log(message);
    window.ethereum.request({
        method: "eth_signTypedData_v4",
        params: [
            address,
            JSON.stringify(message)
        ]
    }).then((retVal)=>{
        console.log(retVal);
    }).catch((err)=>{
        console.log(err);
    });
// return signature;
}
module.exports = {
    getPublicKey,
    encryptData,
    decryptData,
    sign
};


/***/ }),

/***/ 8174:
/***/ ((module) => {


function readAsDataURLAsync(file) {
    return new Promise((resolve)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>resolve(reader.result);
    });
}
function readAsTextAsync(file) {
    return new Promise((resolve)=>{
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = ()=>resolve(reader.result);
    });
}
module.exports = {
    readAsDataURLAsync,
    readAsTextAsync
};


/***/ })

};
;