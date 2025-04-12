import PropTypes from 'prop-types';
import { useInput } from '../modules/useInputs';

function InputApp({ nameInput, schemaValidate, dataForm, textLabel, children, ...props }) {
	const { idInput, handleChange } = useInput({ schemaValidate, dataForm });

	return (
		<div className="inputs" style={{ width: '100%' }}>
			<input
				name={nameInput}
				id={idInput}
				placeholder={nameInput}
				onBlur={handleChange}
				{...props}
			/>
			<label htmlFor={idInput}>{textLabel}</label>
			{children}
		</div>
	);
}

InputApp.propTypes = {
	data: PropTypes.object,
	nameInput: PropTypes.string,
	textLabel: PropTypes.string,
	children: PropTypes.node,
	dataForm: PropTypes.object,
	schemaValidate: PropTypes.shape({
		parse: PropTypes.func.isRequired,
	}).isRequired,
};

export default InputApp;
