import CryptoJS from 'crypto-js';

const decryptedData = (data) => {
	if (!data) return { error: 'Encrypted data is missing' };

	const decryptPs = import.meta.env.VITE_PASSWORD_DECRYPTED;
	const decryptedData = CryptoJS.AES.decrypt(data, decryptPs);
	const decryptedDataStr = decryptedData.toString(CryptoJS.enc.Utf8);
	const objSend = JSON.parse(decryptedDataStr);

	return objSend;
};

export {decryptedData}