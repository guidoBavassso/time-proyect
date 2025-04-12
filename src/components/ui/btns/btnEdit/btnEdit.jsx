import PropTypes from 'prop-types';
import EditIcon from '../../../estructure/icons/users/edit';

function BtnEdit({...props}) {
	return (
		<button type="button" className="editBtn" {...props}>
			<div>
				<EditIcon className="icons" />
			</div>
			<span>Editar</span>
		</button>
	);
}

BtnEdit.propTypes = {};

export default BtnEdit;
