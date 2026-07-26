import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lifeofsamir.com',   // ← your domain. Needed for OG tags + sitemap.
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',  // code blocks match the dark UI
      wrap: false,
    },
  },
});
