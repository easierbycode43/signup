import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import base from './src/lib/base.js';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			assets: 'docs',
			pages: 'docs'
		}),
		paths: {
			base
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
