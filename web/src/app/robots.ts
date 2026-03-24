import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/diagnosis/',
      },
    ],
    sitemap: 'https://lawnguide.co.kr/sitemap.xml',
  };
}
