import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://almtav08.github.io',
  integrations: [partytown()]
});