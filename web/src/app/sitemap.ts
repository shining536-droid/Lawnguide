import { MetadataRoute } from 'next';
import { DOMAINS } from '@/lib/domains';
import { SPOKE_PAGES } from '@/data/spoke-pages';

const baseUrl = 'https://lawnguide.co.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  const diagnosis: MetadataRoute.Sitemap = DOMAINS.map((d) => ({
    url: `${baseUrl}/diagnosis/${d.id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const guide: MetadataRoute.Sitemap = DOMAINS.map((d) => ({
    url: `${baseUrl}/guide/${d.id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const spoke: MetadataRoute.Sitemap = SPOKE_PAGES.map((p) => ({
    url: `${baseUrl}/guide/${p.domain}/${p.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...home, ...diagnosis, ...guide, ...spoke];
}
