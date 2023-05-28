"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 7086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAddPatientData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useGetDoctorPubKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6403);
/* harmony import */ var _useGetPatientHash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(774);
/* harmony import */ var _hooks_useSignCertificates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6981);
/* harmony import */ var _utils_cryptography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6066);
/* harmony import */ var _utils_cryptography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_cryptography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_metamask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9766);
/* harmony import */ var _utils_metamask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_metamask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4480);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_ipfs__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetDoctorPubKey__WEBPACK_IMPORTED_MODULE_1__, _useGetPatientHash__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSignCertificates__WEBPACK_IMPORTED_MODULE_3__]);
([_useGetDoctorPubKey__WEBPACK_IMPORTED_MODULE_1__, _useGetPatientHash__WEBPACK_IMPORTED_MODULE_2__, _hooks_useSignCertificates__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// it expects ptAddress (data owner), drAddress (one who can access data)
// it returns a function setupCIDs that expects generalData and certificates, plane format
// setupCIDs
// 1. generate new key (if required)
// 2. encrypt generalData and certificatesData
// 3. encrypt symmetric key using ptAddress and drAddress public key
// 3. store generaldata, certificatesdata and keys to IPFS
// 4. setCIDs
// 5. Further actions are performed by functions that use this hook
function useAddPatientData(ptAddress, drAddress) {
    const { signCertificates  } = (0,_hooks_useSignCertificates__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { publicKey: drPublicKey  } = (0,_useGetDoctorPubKey__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(drAddress || null);
    const { certificatesHash  } = (0,_useGetPatientHash__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ptAddress);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [CIDs, setCIDs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        generalDataCID: null,
        keyDataCID: null
    });
    function resetCIDs() {
        setCIDs({
            generalDataCID: null,
            keyDataCID: null
        });
    }
    // complex logic, but all data addition and updation stuff gets done from single function
    // decrypter is ptAddress if drAddress or keyData is absent
    // else decrypter is drAddress if decryption key for drAddress is present in keyData
    // else decrypter is again ptAddress
    // if generalData is provided create new data and save it to ipfs
    // if certificates is provided create new certificates and save it to ipfs
    // if keyData is provided, use the provided key, do not generate a new key
    // change keyData if keyData, certificates are changed or drAddress is provided and drAddress is not the decrypter
    // update keyData such that, keys are encrypted if they have changed
    async function setupCIDs({ prevCertificatesData , prevKeyData  }, generalData, certificates, keyData) {
        setIsLoading(true);
        try {
            const decrypter = drAddress && keyData ? keyData.keys[drAddress] ? drAddress : ptAddress : ptAddress;
            let { key , iv  } = keyData ? JSON.parse(await (0,_utils_metamask__WEBPACK_IMPORTED_MODULE_5__.decryptData)(decrypter, keyData.keys[decrypter])) : (0,_utils_cryptography__WEBPACK_IMPORTED_MODULE_4__.generateKey)();
            if (keyData) {
                key = Buffer.from(key, "hex");
                iv = Buffer.from(iv, "hex");
            }
            let generalDataCID, certificatesCID, keyDataCID;
            if (generalData) {
                // store encrypted general data to IPFS
                console.log("changing general data");
                const cipherGeneralData = (0,_utils_cryptography__WEBPACK_IMPORTED_MODULE_4__.symmetricEncrypt)(JSON.stringify(generalData), key, iv);
                const generalDataFile = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_6__.makeFileObjects)([
                    cipherGeneralData
                ], [
                    drAddress
                ]);
                generalDataCID = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_6__.storeIPFS)(generalDataFile, {
                    wrapWithDirectory: false
                });
            } else generalDataCID = null;
            if (certificates) {
                // store encrypted certificates to IPFS
                console.log("changing certificates");
                const certificatesData = {
                    certificates,
                    metadata: {
                        version: prevCertificatesData && prevCertificatesData.metadata ? prevCertificatesData.metadata.version + 1 : 1,
                        lastUpdatedDate: new Date(Date.now()).toDateString(),
                        lastUpdatedBy: decrypter
                    }
                };
                const cipherCertificatesData = (0,_utils_cryptography__WEBPACK_IMPORTED_MODULE_4__.symmetricEncrypt)(JSON.stringify(certificatesData), key, iv);
                const certificatesFile = {
                    previousVersion: {
                        hash: certificatesHash,
                        key: prevKeyData && prevKeyData.keys && prevKeyData.keys[ptAddress]
                    },
                    data: cipherCertificatesData,
                    digitalSignatureOfLastUpdater: await signCertificates(certificatesData)
                };
                const certificatesFiles = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_6__.makeFileObjects)([
                    certificatesFile
                ], [
                    drAddress
                ]);
                certificatesCID = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_6__.storeIPFS)(certificatesFiles, {
                    wrapWithDirectory: false
                });
            } else certificatesCID = null;
            if (certificates || !keyData || drAddress && decrypter != drAddress) {
                console.log("changing keys");
                // encrypt newly generated key
                const S = JSON.stringify({
                    key: key.toString("hex"),
                    iv: iv.toString("hex")
                });
                const keyDataFile = {
                    keys: drAddress ? {
                        [ptAddress]: keyData ? keyData.keys[ptAddress] : JSON.stringify(await (0,_utils_metamask__WEBPACK_IMPORTED_MODULE_5__.encryptData)(ptAddress, S)),
                        [drAddress]: keyData ? keyData.keys[drAddress] : JSON.stringify(await (0,_utils_metamask__WEBPACK_IMPORTED_MODULE_5__.encryptData)(null, S, drPublicKey))
                    } : {
                        [ptAddress]: keyData ? keyData.keys[ptAddress] : JSON.stringify(await (0,_utils_metamask__WEBPACK_IMPORTED_MODULE_5__.encryptData)(ptAddress, S))
                    },
                    medicalRecordCID: certificatesCID || certificatesHash
                };
                const keyDataFiles = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_6__.makeFileObjects)([
                    keyDataFile
                ], [
                    drAddress
                ]);
                keyDataCID = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_6__.storeIPFS)(keyDataFiles, {
                    wrapWithDirectory: false
                });
            } else keyDataCID = null;
            // finally change the state of cids
            setCIDs({
                generalDataCID,
                keyDataCID
            });
            console.log(generalDataCID);
            console.log(certificatesCID);
            console.log(keyDataCID);
        } catch (err) {
            setIsLoading(false);
            throw err;
        }
        setIsLoading(false);
    }
    return {
        isLoading,
        CIDs,
        setupCIDs,
        resetCIDs
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useContractCall)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__]);
([wagmi__WEBPACK_IMPORTED_MODULE_2__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useContractCall() {
    const { contractAddress , abi , enabled  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: signer  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSigner)();
    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            enabled && signer && setContract(new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(contractAddress, abi, signer));
        } catch (err) {}
    }, [
        enabled,
        signer
    ]);
    return {
        contract
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetDoctorPubKey)
/* harmony export */ });
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8998);
/* harmony import */ var _useValidTxnData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_0__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_1__]);
([wagmi__WEBPACK_IMPORTED_MODULE_0__, _useValidTxnData__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useGetDoctorPubKey(address) {
    const { contractAddress , abi , enabled  } = (0,_useValidTxnData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { data: publicKey , isFetched  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useContractRead)({
        address: contractAddress,
        abi,
        functionName: "getDrPubKey",
        args: [
            address
        ],
        enabled: enabled && address
    });
    return {
        isFetched,
        publicKey
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetPatientHash)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useContractCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4352);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4480);
/* harmony import */ var _utils_ipfs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_ipfs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8174);
/* harmony import */ var _utils_readFileAsync__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_readFileAsync__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useContractCall__WEBPACK_IMPORTED_MODULE_1__]);
_useContractCall__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useGetPatientHash(address) {
    const { contract  } = (0,_useContractCall__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const [hashData, setHashData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        generalHash: null,
        keyHash: null,
        certificatesHash: null
    });
    async function getHash() {
        try {
            const generalHash = await contract.getPtGeneralHash(address);
            const keyHash = await contract.getPtRecordHash(address);
            const cipherKeyEnc = await (0,_utils_ipfs__WEBPACK_IMPORTED_MODULE_2__.retrieveIPFS)(keyHash);
            const certificatesHash = cipherKeyEnc.medicalRecordCID;
            setHashData({
                generalHash,
                keyHash,
                certificatesHash
            });
        } catch (err) {
            console.log(err);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        contract && address && getHash();
    }, [
        contract,
        address
    ]);
    return hashData;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useSignCertificates)
/* harmony export */ });
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8998);
/* harmony import */ var _metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7303);
/* harmony import */ var _metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_0__]);
wagmi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useSignCertificates() {
    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useNetwork)();
    const domain = {
        name: "MedicalRecord signature"
    };
    const types = {
        EIP712Domain: [
            {
                name: "name",
                type: "string"
            }
        ],
        Certificate: [
            {
                name: "title",
                type: "string"
            },
            {
                name: "description",
                type: "string"
            },
            {
                name: "media",
                type: "string"
            }
        ],
        MetaData: [
            {
                name: "lastUpdatedDate",
                type: "string"
            },
            {
                name: "lastUpdatedBy",
                type: "address"
            },
            {
                name: "version",
                type: "int256"
            }
        ],
        Data: [
            {
                name: "certificates",
                type: "Certificate[]"
            },
            {
                name: "metadata",
                type: "MetaData"
            }
        ]
    };
    const { signTypedDataAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useSignTypedData)({
        domain,
        types
    });
    const recoverSigner = (data, signature)=>(0,_metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_1__.recoverTypedSignature)({
            data: {
                domain,
                message: data,
                primaryType: "Data",
                types
            },
            signature,
            version: _metamask_eth_sig_util__WEBPACK_IMPORTED_MODULE_1__.SignTypedDataVersion.V4
        });
    return {
        signCertificates: async (value)=>await signTypedDataAsync({
                value
            }),
        recoverSigner
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6066:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _crypto = __webpack_require__(6113);
function generateKey() {
    const key = (0, _crypto.randomBytes)(32);
    const iv = (0, _crypto.randomBytes)(16);
    return {
        key,
        iv
    };
}
function symmetricEncrypt(data, key, iv) {
    const cipher = (0, _crypto.createCipheriv)("aes-256-gcm", key, iv);
    const cipherData = cipher.update(data, "utf-8", "hex");
    return cipherData;
}
function symmetricDecrypt(cipherData, key, iv) {
    const decipher = (0, _crypto.createDecipheriv)("aes-256-gcm", key, iv);
    const data = decipher.update(cipherData, "hex", "utf-8");
    return data;
}
module.exports = {
    generateKey,
    symmetricEncrypt,
    symmetricDecrypt
};


/***/ })

};
;