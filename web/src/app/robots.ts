import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: [
      'https://www.lawnguide.co.kr/sitemap.xml',
      'https://www.lawnguide.co.kr/sitemap-priority.xml',
    ],
  };
}
