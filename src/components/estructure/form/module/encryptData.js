import CryptoJS from 'crypto-js';

const encryptData = (data) => {
	const encriptPs = import.meta.env.VITE_PASSWORD_ENCRYPT;
	return CryptoJS.AES.encrypt(data, encriptPs).toString();
};
export {encryptData}