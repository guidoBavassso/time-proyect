import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/time-proyect',
	build: {
		rollupOptions: {
		  external: [],
		  output: {
			globals: {
			  "@formater/config-formater": "ConfigFormater",
			  "@schemas/schemas": "Schemas",
			  "@webg/components": "WebgComponents"
			}
		  }
		}
	  }	  
});
