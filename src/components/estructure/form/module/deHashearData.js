import CryptoJS from 'crypto-js';

const deHashearData = (data) => {
	const { encryptedData, hmac } = data;
	if (!encryptedData || !hmac) return { error: 'Encrypted data or HMAC is missing' };

	const recalculatedHmac = CryptoJS.HmacSHA256(
		JSON.stringify(encryptedData),
		import.meta.env.VITE_PASSWORD_HASH,
	).toString(CryptoJS.enc.Base64);

	if (hmac === recalculatedHmac) return { error: 'Invalid HMAC' };
	return true;
};

export {deHashearData}