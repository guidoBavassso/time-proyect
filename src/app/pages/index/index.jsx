import PageLayout from '../../../components/estructure/layouts/page.layout';
import IndexView from '../../views/indexView/indexView';
import { Route, Router } from 'wouter';
import NuevoProyecto from '../nuevoProyecto/nuevoProyecto';
import Proyecto from '../proyecto/proyecto';

function Index() {
	return (
		<PageLayout className="pageIndex">
			<Router>
				<Route path="/" component={IndexView} />
				<Route path="/nuevoProyecto" component={NuevoProyecto} />
				<Route path="/proyectos/:proyecto" component={Proyecto} />
			</Router>
		</PageLayout>
	);
}

export default Index;
