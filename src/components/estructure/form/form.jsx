import PropTypes from 'prop-types';

function Form({ children, ...props }) {
	return (
		<form {...props}>
			{children}
			<button type="submit" className="btnForm">
				<span>Enviar</span>
			</button>
		</form>
	);
}

Form.propTypes = {
	children: PropTypes.node,
	configToSend: PropTypes.object,
	nextToSubmit: PropTypes.func,
};

export default Form;
