import PropTypes from 'prop-types';
import Header from '../header/header';
import { usePageLayout } from './modules/hooks/usePageLayout';
import useHeaderStore from '../../../global/useHeaderStore';

function PageLayout({ children, ...props }) {
	const { headerOpen } = useHeaderStore((state) => state);
	const { refHeader, refMain } = usePageLayout({ headerOpen });

	return (
		<>
			{refHeader && <Header ref={refHeader} />}
			<main {...props} ref={refMain}>
				{children}
			</main>
		</>
	);
}

PageLayout.propTypes = {
	children: PropTypes.node,
};

export default PageLayout;
