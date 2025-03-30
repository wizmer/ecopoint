// @ts-check
import { join } from 'path';

import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

import { appTheme } from './app-theme.js';

const config = {
	// darkMode: 'media',
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	theme: {
		extend: {
			colors: {
				'silver-chalice': '#A9A9A9',
				mirage: '#181632',
				'main-blue': '#124568',
			},
			screens: {
				'mh-1080': { raw: '(max-height: 1080px)' },
			},
		},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		forms,
		skeleton({
			themes: {
				custom: [appTheme],
			},
		}),
	],
} satisfies Config;

export default config;
