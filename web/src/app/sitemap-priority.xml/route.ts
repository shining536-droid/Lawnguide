import { PRIORITY_HUBS, PRIORITY_SPOKES } from '@/data/priority-urls';

const baseUrl = 'https://www.lawnguide.co.kr';

export const dynamic = 'force-static';

export async function GET() {
  const lastmod = new Date().toISOString().split('T')[0];

  const entries: string[] = [];

  for (const hub of PRIORITY_HUBS) {
    entries.push(
      `  <url>\n    <loc>${baseUrl}/guide/${hub}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`,
    );
  }

  for (const s of PRIORITY_SPOKES) {
    entries.push(
      `  <url>\n    <loc>${baseUrl}/guide/${s.domain}/${s.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`,
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
