import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import Skeleton from '@webg/components/src/skeleton/skeleton';

const BtnEdit = lazy(() => import('@webg/components/src/btn/btnEdit/btnEdit'));
const BtnDelete = lazy(() => import('@webg/components/src/btn/btnDelete/btnDelete'));
const BtnPlayPause = lazy(() => import('@webg/components/src/btn/btnPlayPause/btnPlayPause'));

function GroupBtnsActionProyect({ groupActions, toggle, ...props }) {
	return (
		<div {...props}>
			<Suspense fallback={<Skeleton style={{ width: '100%', heigth: '110px' }} />}>
				<BtnPlayPause onClick={groupActions} toggle={toggle} />
				<BtnEdit />
				<BtnDelete />
			</Suspense>
		</div>
	);
}

GroupBtnsActionProyect.propTypes = {
	groupActions: PropTypes.func,
	toggle: PropTypes.bool,
};

export default GroupBtnsActionProyect;
