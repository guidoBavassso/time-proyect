import PropTypes from 'prop-types';
import { Link } from 'wouter';

function BtnBack({ urlBack, onClick, children }) {
	return (
		<button className="prompt-regular backPage">
			<Link href={urlBack} onClick={onClick}>
				{children}
			</Link>
		</button>
	);
}

BtnBack.propTypes = {
	urlBack: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
};

export default BtnBack;
