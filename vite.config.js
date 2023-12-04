import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [UnoCSS(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
