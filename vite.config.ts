import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import lightningcss from 'vite-plugin-lightningcss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		lightningcss(),
	],
	resolve: {
		alias: {
			'@lib': resolve(__dirname, './src/lib'),
		}
	},
})
