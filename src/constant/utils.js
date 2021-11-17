import React from "react";
import { AUTH_KEY } from "./string";

var CryptoJS = require("crypto-js");

const encryptData = (data) => {
    let stringifyData = JSON.stringify(data);

    var ciphertext = CryptoJS.AES.encrypt(stringifyData, AUTH_KEY).toString();

    return ciphertext;
}

const decryptData = (data) => {
    var bytes = CryptoJS.AES.decrypt(data, AUTH_KEY);
    var decrypt = bytes.toString(CryptoJS.enc.Utf8);

    return decrypt;
}

export { encryptData, decryptData };