import PropTypes from 'prop-types';
import { useInput } from '../modules/useInputs';

function Textarea({ nameInput = 'msg', schemaValidate, dataForm, ...props }) {
	const { idInput, handleChange } = useInput({ schemaValidate, dataForm });

	return <textarea name={nameInput} id={idInput} onBlur={handleChange} {...props}></textarea>;
}

Textarea.propTypes = {
	nameInput: PropTypes.string,
	dataForm: PropTypes.object,
	schemaValidate: PropTypes.shape({
		parse: PropTypes.func.isRequired,
	}).isRequired,
};

export default Textarea;
