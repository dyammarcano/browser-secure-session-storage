// encrypt session storage using AES-256-CBC algorithm with a random key and iv (initialization vector) and store it in local storage
function encryptedSessionStorage() {
    var key = CryptoJS.lib.WordArray.random(128 / 8);
    var iv = CryptoJS.lib.WordArray.random(128 / 8);
    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(sessionStorage), key, { iv: iv });
    localStorage.setItem('sessionStorage', encrypted.toString());
    localStorage.setItem('sessionStorageKey', key.toString());
    localStorage.setItem('sessionStorageIv', iv.toString());
}


// decrypt session storage using AES-256-CBC algorithm with the same key and iv and store it in session storage
function decryptedSessionStorage() {
    var encrypted = localStorage.getItem('sessionStorage');
    var key = localStorage.getItem('sessionStorageKey');
    var iv = localStorage.getItem('sessionStorageIv');
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv });
    sessionStorage.clear();
    sessionStorage.setItem('sessionStorage', decrypted.toString(CryptoJS.enc.Utf8));
}


function loadKey(str) {
    var encrypted = CryptoJS.AES.encrypt(str, 'Caesar Cipher');
    return encrypted.toString();
}


function saveKey(str) {
    var decrypted = CryptoJS.AES.decrypt(str, 'Caesar Cipher');
    return decrypted.toString(CryptoJS.enc.Utf8);
}


// encrypt string by using AES-256-CBC algorithm with random key and iv (initialization vector) and return encrypted string and iv as a json object (key, iv) 
function encrypt(str) {
    var cipher = crypto.createCipheriv('aes-256-cbc', crypto.randomBytes(32), crypto.randomBytes(16));
    var encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        key: cipher.getAuthTag().toString('hex'),
        iv: cipher.getIV().toString('hex'),
        encrypted: encrypted
    };
}

// iife to load the page
(function () {
    // if session storage is empty, encrypt it
    if (sessionStorage.length === 0) {
        encryptedSessionStorage();
    }
    // if session storage is not empty, decrypt it
    else {
        decryptedSessionStorage();
    }
    // if local storage is empty, encrypt it
    if (localStorage.length === 0) {
        encryptedLocalStorage();
    }
    // if local storage is not empty, decrypt it
    else {
        decryptedLocalStorage();
    }
    // if session storage is empty, encrypt it
    if (sessionStorage.length === 0) {
        encryptedSessionStorage();
    }
    // if session storage is not empty, decrypt it
    else {
        decryptedSessionStorage();
    }
    // if local storage is empty, encrypt it
    if (localStorage.length === 0) {
        encryptedLocalStorage();
    }
    // if local storage is not empty, decrypt it
    else {
        decryptedLocalStorage();
    }
    // if session storage is empty, encrypt it
    if (sessionStorage.length === 0) {
        encryptedSessionStorage();
    }
    // if session storage is not empty, decrypt it
    else {
        decryptedSessionStorage();
    }
    // if local storage is empty, encrypt it
    if (localStorage.length === 0) {
        encryptedLocalStorage();
    }
    // if local storage is not empty, decrypt it
    else {
        decryptedLocalStorage();
    }
    // if session storage is empty, encrypt it
    if (sessionStorage.length === 0) {
        encryptedSessionStorage();
    }
    // if session storage is not empty, decrypt it
    else {
        decryptedSessionStorage();
    }
    // if local storage is empty, encrypt it
    if (localStorage.length === 0) {
        encryptedLocalStorage();
    }
    // if local storage is not empty, decrypt it
    else {
        decryptedLocalStorage();
    }
    // if session storage is empty, encrypt it
    if (sessionStorage.length === 0) {
        encryptedSessionStorage();
    }
    // if session storage is not empty, decrypt it
    else {
        decryptedSessionStorage();
    }
    // if local storage is empty, encrypt it
    if (localStorage.length === 0) {
        encryptedLocalStorage();
    }
    // if local storage is not empty, decrypt it
    else {
        decryptedLocalStorage();
    }
    // if session storage is empty, encrypt it
    if (sessionStorage.length === 0) {
        encryptedSessionStorage();
    }
    // if session storage is not empty, decrypt it  and load the page
    else {
        decryptedSessionStorage();
        loadPage();
    }
})();