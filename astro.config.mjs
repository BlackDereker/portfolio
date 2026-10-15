import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://brunagodoi.vercel.app';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    react({
      compiler: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
