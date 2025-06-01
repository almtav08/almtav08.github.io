// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: "https://almtav08.github.io",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact()],
});