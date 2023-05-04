import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';
import critters from "astro-critters";
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://workers-types.pages.dev',
  base: '/',
  trailingSlash: 'never',
  output: 'static',
  integrations: [
    tailwind({
    config: {
      applyBaseStyles: false
    }
  }), 
    image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), 
    mdx(), 
    /*compress({
    css: true,
    html: {
      removeAttributeQuotes: false
    },
    img: false,
    js: true,
    svg: true,
    logger: 1
  }),*/
    critters()],
  vite: {
    resolve: {
      alias: {
        '~': resolve(__dirname, './src')
      }
    }
  }
});
