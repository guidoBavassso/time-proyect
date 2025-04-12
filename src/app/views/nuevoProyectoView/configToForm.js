import { schemaNewProyect } from '@schemas/schemas/src/endpoints/timeProyect/newProyect/newProyect';

const config = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		originApp: 'time-proyect',
	},
};

export const objToSenduseForm = {
	config,
	entity: 'newProyect',
	action: 'create',
	schemaValidate: schemaNewProyect,
};
