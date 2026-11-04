// @ts-check
// Web de ejemplo. Estática; los formularios apuntan a PUBLIC_FORM_ENDPOINT (vacío = modo demostración).
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.vatiotraining.example',
  integrations: [sitemap()],
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { layout: 'constrained' },
});
