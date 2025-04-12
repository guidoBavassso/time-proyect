import { useState } from 'react';
import { useSendData } from './useSendData.js';

const useForm = ({ config, entity, action, schemaValidate }) => {
	const [objForm, setObjForm] = useState({});

	const configToSend = {
		data: { ...objForm },
		config,
		entity,
		action,
	};

	const { handleSubmit } = useSendData({ configToSend, schemaValidate });

	return { form: { objForm, setObjForm }, handleSubmit };
};

export {useForm}