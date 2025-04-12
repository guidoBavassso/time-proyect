import GroupTitles from '../../../components/estructure/groupTitles/groupTitles';
import FormNewProyect from '../../views/nuevoProyectoView/formNewProyect';
import SectionLayout from '../../../components/estructure/sectionLayout/sectionLayout';

function NuevoProyecto() {
	return (
		<SectionLayout plussClass="sectionNuevoProyecto">
			<GroupTitles secondTitle="Agregar nuevo proyecto" />
			<FormNewProyect />
		</SectionLayout>
	);
}

export default NuevoProyecto;
