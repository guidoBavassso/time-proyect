import PropTypes from 'prop-types';
import FirstTitle from '../FirstTitle/FirstTitle';

function GroupTitles({ secondTitle }) {
	return (
		<>
			<FirstTitle />
			<h2 className="prompt-semibold">{secondTitle}</h2>
		</>
	);
}

GroupTitles.propTypes = {
	secondTitle: PropTypes.string,
};

export default GroupTitles;
