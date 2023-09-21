import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://workers-types.pages.dev',
  base: '/',
  trailingSlash: 'never',
  build: {
		inlineStylesheets: "always",
	},
  output: 'static',
  integrations: [
    tailwind({
    applyBaseStyles: false
  }),
    mdx()],
  vite: {
    resolve: {
      alias: {
        '~': resolve(__dirname, './src')
      }
    }
  }
});
