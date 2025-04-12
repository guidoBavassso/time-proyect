import { sendData } from './sendData';
import z from 'zod';
import { generateToast } from '../../../ui/toast/generateToast';
import { useState } from 'react';

const useSendData = ({
	configToSend,
	nextToSubmit,
	schemaValidate,
	setLoading,
	typeUser = 'invitado',
}) => {
	const [result, setResult] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			schemaValidate.parse(configToSend.data);
		} catch (e) {
			if (e instanceof z.ZodError) {
				console.log(e);
				generateToast({ typeStatus: 'error', msg: e.errors[0].message });
			}
			return;
		}

		if (typeUser === 'invitado') {
			const itemLocal = JSON.parse(localStorage.getItem('timeProyect')) || [];

			configToSend.data.iconProyect = '';
			itemLocal.push(configToSend.data);
			localStorage.setItem('timeProyect', JSON.stringify(itemLocal));
		} else {
			const r = await sendData({ configToSend, setLoading });
			setResult(r);
		}

		if (nextToSubmit) {
			nextToSubmit(result);
		}
	};

	return { handleSubmit };
};

export {useSendData};
