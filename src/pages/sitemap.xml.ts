import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/portfolio';

export const GET: APIRoute = () => {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const lastMod = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
  <url>
    <loc>${baseUrl}/pt/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
