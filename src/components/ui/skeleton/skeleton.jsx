import PropTypes from 'prop-types';
import { skeleton } from './skeleton.module.css';
import classNames from 'classnames';

function Skeleton({ plusClass, ...props }) {
	const styles = classNames(skeleton, plusClass);

	return <div className={styles} {...props}></div>;
}

Skeleton.propTypes = {
	plusClass: PropTypes.string,
};

export default Skeleton;
