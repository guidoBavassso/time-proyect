import PropTypes from 'prop-types';
import Textarea from '../../../components/estructure/inputs/textarea/textarea';
import {
	projectDescription,
	projectName,
	image,
} from '@schemas/schemas/src/endpoints/timeProyect/newProyect/newProyect';
import InputApp from '../../../components/estructure/inputs/input/InputApp';
import InputFile from '../../../components/estructure/inputs/inputFile/inputFile';

function BodyFormNewProyect({ form }) {
	return (
		<fieldset>
			<InputApp
				type="text"
				nameInput="projectName"
				textLabel="Nombre proyecto"
				dataForm={{ ...form }}
				schemaValidate={projectName}
			/>
			<InputFile
				nameInput="iconProyect"
				textLabel="Subir imagen"
				dataForm={{ ...form }}
				schemaValidate={image}
			/>
			<Textarea nameInput='projectDescription' schemaValidate={projectDescription} rows="6" dataForm={{ ...form }} />
		</fieldset>
	);
}

BodyFormNewProyect.propTypes = {
	form: PropTypes.object,
};

export default BodyFormNewProyect;
