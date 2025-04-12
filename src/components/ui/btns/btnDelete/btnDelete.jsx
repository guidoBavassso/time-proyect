import PropTypes from 'prop-types';
import DeleteIcon from '../../../estructure/icons/users/delete';

function BtnDelete({...props}) {
	return (
		<button type="button" className="deleteBtn" {...props}>
			<div>
				<DeleteIcon className="icons" />
			</div>
			<span>Eliminar</span>
		</button>
	);
}

BtnDelete.propTypes = {};

export default BtnDelete;
