import PropTypes from 'prop-types';
import { useParams } from 'wouter';
import BodySectionProyect from '../../views/bodySectionProyect/bodySectionProyect';
import SectionLayout from '../../../components/estructure/sectionLayout/sectionLayout';

function Proyecto() {
	const params = useParams();

	return (
		<SectionLayout plussClass="sectionProyecto">
			<BodySectionProyect proyecto={params.proyecto} />
		</SectionLayout>
	);
}

Proyecto.propTypes = {};

export default Proyecto;
