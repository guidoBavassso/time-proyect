import { useCallback } from 'react';
import { useId } from 'react';
import z from 'zod';
import { generateToast } from '../../../ui/toast/generateToast';

const useInput = ({ schemaValidate, dataForm }) => {
	const { setObjForm, objForm } = dataForm;
	const idInput = useId();

	const handleChange = useCallback(
		(e) => {
			const { value, name } = e.target;
			const newValue = value.trim();

			try {
				schemaValidate.parse(newValue);
				setObjForm((prev) => ({ ...prev, [name]: value }));
			} catch (e) {
				if (e instanceof z.ZodError) {
					delete objForm[[name]];

					setObjForm(objForm);
					generateToast({ typeStatus: 'error', msg: e.errors[0].message });
				}
			}
		},
		[objForm, schemaValidate, setObjForm],
	);

	return { idInput, handleChange };
};
export {useInput};