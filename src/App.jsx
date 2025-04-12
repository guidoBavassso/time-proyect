import { Route } from 'wouter';
import './assets/css/index.css';
import Index from './app/pages/index';
import { useEffect, useState } from 'react';
import Modal from '@webg/components/src/modal/modal';

function App() {
	const [open, setOpen] = useState(false);
	/* const [visibilityState, setVisibilityState] = useState(false);

	useEffect(() => {
		document.addEventListener('visibilitychange', () => {
			setVisibilityState(document.visibilityState === 'visible');
		});

		window.addEventListener('beforeunload', (event) => {
			if (visibilityState) {
				event.preventDefault();
				setOpen(open);
			}
		});
	}, []); */

	return (
		<>
			<Route path="/*" component={Index} />
			{/* <Modal open={{ open, setOpen }} titleModal="reset page">
				<section className="bodyModalWindowsClose">
					<h2>Advertencia!!!</h2>
					<p>
						Si estas por cerrar la pentaña, ten en cuenta que al no tener cuenta o una
						sesion iniciada en blapstore tus aplicaciones no van a estar conectadas, por
						lo tanto no comparten informacion entre si.
					</p>
				</section>
			</Modal> */}
		</>
	);
}

export default App;
