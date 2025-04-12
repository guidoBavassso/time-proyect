const STORAGE_KEY = 'timeProyect';

function getProjectTime(proyecto) {
	try {
		const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
		const found = data.find((item) => item.projectName === proyecto);

		return found?.time || 0;
	} catch {
		return 0;
	}
}

function saveProjectTime(proyecto, time) {
	try {
		const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
		const existingIndex = data.findIndex((item) => item.projectName === proyecto);

		if (existingIndex >= 0) {
			data[existingIndex].time = time;

			localStorage.removeItem(STORAGE_KEY);
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		}

		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	} catch {
		// manejar errores si hace falta
	}
}

export { saveProjectTime, getProjectTime };
