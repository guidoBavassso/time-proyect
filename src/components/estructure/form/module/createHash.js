import CryptoJS from 'crypto-js';

const createHash = (data, pass) => {
	return CryptoJS.HmacSHA256(data, import.meta.VITE_PASSWORD_HASH).toString(CryptoJS.enc.Base64);
};

export {createHash};
