import PageLayout from '../../../components/estructure/layouts/page.layout';
import IndexView from '../../views/indexView/indexView';
import { Route } from 'wouter';
import NuevoProyecto from '../nuevoProyecto/nuevoProyecto';
import Proyecto from '../proyecto/proyecto';

function Index() {
	return (
		<PageLayout className="pageIndex">
			<Route path="/" component={IndexView} />
			<Route path="/nuevoProyecto" component={NuevoProyecto} />
			<Route path="/proyectos/:proyecto" component={Proyecto} />
		</PageLayout>
	);
}

export default Index;
