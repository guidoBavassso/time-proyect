import { Route, Router } from 'wouter';
import './assets/css/index.css';
import PageLayout from './components/estructure/layouts/page.layout';
import IndexView from './app/views/indexView/indexView';
import NuevoProyecto from './app/pages/nuevoProyecto/nuevoProyecto';
import Proyecto from './app/pages/proyecto/proyecto';

function App() {
	return (
		<PageLayout className="pageIndex">
			<Router base='/time-proyect'>
				<Route path="/" component={IndexView} />
				<Route path="/nuevoProyecto" component={NuevoProyecto} />
				<Route path="/proyectos/:proyecto" component={Proyecto} />
			</Router>
		</PageLayout>
	);
}

export default App;
