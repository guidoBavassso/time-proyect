import PropTypes from 'prop-types';

function VisualTime({ tiempo, data }) {
	return (
		<>
			<span>{data.data}</span>
			{data.index < tiempo.length - 1 && <span>:</span>}
		</>
	);
}

VisualTime.propTypes = {
	tiempo: PropTypes.array,
};

export default VisualTime;
