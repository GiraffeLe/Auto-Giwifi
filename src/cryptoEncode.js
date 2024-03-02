const CryptoJS = require('crypto-js');

function cryptoEncode(oriData, iv) {

    var key = CryptoJS.enc.Utf8.parse('1234567887654321');
    var ivv = CryptoJS.enc.Utf8.parse(iv);
    var encrypted = CryptoJS.AES.encrypt(oriData, key, {
        iv: ivv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    let cryptoData = encrypted.toString();
    return cryptoData;
}

module.exports = cryptoEncode;