import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.BASE_URL,
		},
		alias: {
			$lib: './src/lib',
			$server: './src/lib/server',
			$routes: './src/routes',
			$components: './src/lib/components',
			$stores: './src/lib/stores',
			$utils: './src/lib/utils',
			$services: './src/lib/services',
			$models: './src/lib/db/models',
			$api: './src/lib/api',
		},
	},
};

export default config;
