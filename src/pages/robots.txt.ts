import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/portfolio';

export const GET: APIRoute = () => {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
