// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this to the real domain before going live — share links and
// social previews (Facebook, WhatsApp, X…) are built from it.
export const SITE_URL = process.env.SITE_URL ?? 'https://yajaswirai.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap({ filter: (page) => !page.includes('/admin') })],
});
