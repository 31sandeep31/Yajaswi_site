import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nDisallow: /admin/\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`);
