import PropTypes from 'prop-types';
import PlayIcon from '../../../estructure/icons/users/play';
import PauseIcon from '../../../estructure/icons/users/pause';

function BtnPlayPause({ toggle, ...props }) {
	return (
		<button type="button" className="playPuase" {...props}>
			<div>{!toggle ? <PlayIcon className="icons" /> : <PauseIcon className="icons" />}</div>
			<span>{!toggle ? 'Seguir' : 'Parar'}</span>
		</button>
	);
}

BtnPlayPause.propTypes = {
	toggle: PropTypes.bool,
};

export default BtnPlayPause;
