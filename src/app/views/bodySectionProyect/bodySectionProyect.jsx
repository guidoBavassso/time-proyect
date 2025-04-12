import PropTypes from 'prop-types';
import VisualTime from '../../../components/ui/visualTime/visualTime';
import GroupBtnsActionProyect from '../../../components/ui/groupBtnsActionProyect/groupBtnsActionProyect';
import { useProyectoTimer } from '../../../global/useProyectTimer';

function BodySectionProyect({ proyecto }) {
	const { tiempo, isRunning: toggle, toggleTimer: groupActions } = useProyectoTimer(proyecto);

	return (
		<>
			<h2>Proyecto: {proyecto}</h2>
			<aside>
				{tiempo.map((data, index) => (
					<VisualTime
						key={index}
						className="visualTime"
						tiempo={tiempo}
						data={{ data, index }}
					/>
				))}
			</aside>
			<GroupBtnsActionProyect
				groupActions={groupActions}
				toggle={toggle}
				className="groupBtns"
			/>
		</>
	);
}

BodySectionProyect.propTypes = {
	proyecto: PropTypes.string,
};

export default BodySectionProyect;
