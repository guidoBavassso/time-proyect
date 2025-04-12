import CamaraIcon from '../../icons/users/camara';
import { useInput } from '../modules/useInputs';
import PropTypes from 'prop-types';
import { useRef } from 'react';

function InputFile({ nameInput, schemaValidate, dataForm, textLabel, ...props }) {
	const refFile = useRef(null);
	const { idInput, handleChange } = useInput({ schemaValidate, dataForm });

	const handleClick = (e) => refFile.current.click();

	return (
		<div onClick={handleClick}>
			<input
				type="file"
				name={nameInput}
				id={idInput}
				onChange={handleChange}
				ref={refFile}
				{...props}
			/>
			<button type="button">
				<CamaraIcon className="icons" />
			</button>
			<label htmlFor={idInput}>{dataForm.objForm.iconProyect || textLabel}</label>
		</div>
	);
}

InputFile.propTypes = {};

export default InputFile;
