import { useForm } from '../../../components/estructure/form/module/useForm';
import { objToSenduseForm } from './configToForm';
import BodyFormNewProyect from '../bodyFormNewProyect/bodyFormNewProyect';
import Form from '../../../components/estructure/form/form';

function FormNewProyect() {
	const { form, handleSubmit } = useForm(objToSenduseForm);

	return (
		<Form autoComplete="off" onSubmit={handleSubmit}> 
			<BodyFormNewProyect form={{ ...form }} />
		</Form>
	);
}

export default FormNewProyect;
