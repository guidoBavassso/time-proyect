import { createHash } from './createHash';
import { decryptedData } from './decryptedData';
import { deHashearData } from './deHashearData';
import { encryptData } from './encryptData';
import { generateToast } from '../../../ui/toast/generateToast';
import { sanitizeValues } from './sanitizeValues';

const sendData = async ({ configToSend }) => {
	const sanitizedData = sanitizeValues(configToSend.data);
	console.log(sanitizedData);

	const objSendJson = JSON.stringify({
		entity: configToSend.entity,
		action: configToSend.action,
		data: sanitizedData,
	});

	const resultHash = createHash(objSendJson);
	const resultEncrypt = encryptData(objSendJson);

	configToSend.config.body = JSON.stringify({ hmac: resultHash, encryptedData: resultEncrypt });

	generateToast({ typeStatus: 'loading', msg: 'Cargando...' });

	return await fetch('http://localhost:3001/api', configToSend.config)
		.then((res) => res.json())
		.then((data) => {
			if (deHashearData(data)) {
				const result = decryptedData(data.encryptedData);

				if (result.error) throw new Error(result.error);

				generateToast({ typeStatus: result.status ? 'success' : 'error', msg: result.msg });

				return result;
			}
		})
		.catch((error) => {
			console.log(error.message);
			generateToast({ typeStatus: 'error', msg: error.message });
		})
		.finally(() => {
			// setLoading(false);
		});
};

export {sendData};
