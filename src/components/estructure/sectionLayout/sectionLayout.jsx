import PropTypes from 'prop-types';
import BtnBack from '../../ui/btns/btnBack/btnBack';
import ArrowBack from '@webg/components/src/icons/arrows/arrowBack';
import { usePageNavigation } from '../../../global/usePageNavigation';
import classNames from 'classnames';

function SectionLayout({ children, plussClass, ...props }) {
	const { animationClass, handleAnimationEnd, clickNavigate } = usePageNavigation();

	const sectionClass = classNames(plussClass, animationClass);

	return (
		<section className={sectionClass} {...props} onAnimationEnd={handleAnimationEnd}>
			<BtnBack urlBack="/" onClick={clickNavigate}>
				<ArrowBack className="icons" />
			</BtnBack>
			{children}
		</section>
	);
}

SectionLayout.propTypes = {
	plussClass: PropTypes.string,
};

export default SectionLayout;
