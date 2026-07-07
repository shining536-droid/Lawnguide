import { MetadataRoute } from 'next';
import { DOMAINS } from '@/lib/domains';
import { SPOKE_PAGES } from '@/data/spoke-pages';
import { SPOKE_LASTMOD, DOMAIN_LASTMOD, SITE_LASTMOD } from '@/data/sitemap-lastmod-generated';

const baseUrl = 'https://www.lawnguide.co.kr';

// lastmod 정직화: build-time 일괄 날짜 대신 페이지별 실제 발행일(최초 커밋일)을 사용.
// 데이터: web/src/data/sitemap-lastmod-generated.ts (재생성: node scripts/generate-sitemap-lastmod.mjs)
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: SITE_LASTMOD,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  const guide: MetadataRoute.Sitemap = DOMAINS.map((d) => ({
    url: `${baseUrl}/guide/${d.id}`,
    lastModified: DOMAIN_LASTMOD[d.id] ?? SITE_LASTMOD,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const spoke: MetadataRoute.Sitemap = SPOKE_PAGES.map((p) => ({
    url: `${baseUrl}/guide/${p.domain}/${p.slug}`,
    lastModified: SPOKE_LASTMOD[p.slug] ?? DOMAIN_LASTMOD[p.domain] ?? SITE_LASTMOD,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...home, ...guide, ...spoke];
}
