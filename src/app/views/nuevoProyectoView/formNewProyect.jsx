import Form from '@webg/components/src/form/form';
import { useForm } from '@webg/components/src/form/module/useForm';
import { objToSenduseForm } from './configToForm';
import BodyFormNewProyect from '../bodyFormNewProyect/bodyFormNewProyect';

function FormNewProyect() {
	const { form, handleSubmit } = useForm(objToSenduseForm);

	return (
		<Form autoComplete="off" onSubmit={handleSubmit}> 
			<BodyFormNewProyect form={{ ...form }} />
		</Form>
	);
}

export default FormNewProyect;
