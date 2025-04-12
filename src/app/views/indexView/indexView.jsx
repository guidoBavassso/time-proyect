import { Link } from 'wouter';
import GroupTitles from '../../../components/estructure/groupTitles/groupTitles';
import { usePageNavigation } from '../../../global/usePageNavigation';
import classNames from 'classnames';
import useHeaderStore from '../../../global/useHeaderStore';

function IndexView() {
	const { toggleHeader } = useHeaderStore((state) => state);
	const { animationClass, handleAnimationEnd, clickNavigate } = usePageNavigation();

	const sectionClass = classNames('sectionIndex', animationClass);

	return (
		<section className={sectionClass} onAnimationEnd={handleAnimationEnd}>
			<GroupTitles secondTitle="En que proyecto vas a trabajar ahora?" />
			<div>
				<Link href="/nuevoProyecto" onClick={clickNavigate}>
					<span>proyecto nuevo</span>
				</Link>
				<button type="button" onClick={toggleHeader}>
					<span>proyecto existente</span>
				</button>
			</div>
		</section>
	);
}

export default IndexView;
