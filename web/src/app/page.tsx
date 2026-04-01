import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: '로앤가이드 - 변호사 만나기 전에 이것만 챙기세요',
  description:
    '전세보증금, 사기, 해고, 폭행 등 법률 문제 상담 전 준비사항을 1분 안에 정리해드립니다. 31개 분야 무료 진단.',
  alternates: {
    canonical: 'https://www.lawnguide.co.kr',
  },
  openGraph: {
    title: '로앤가이드 - 변호사 만나기 전에 이것만 챙기세요',
    description:
      '전세보증금, 사기, 해고, 폭행 등 법률 문제 상담 전 준비사항을 1분 안에 정리해드립니다. 31개 분야 무료 진단.',
    url: 'https://www.lawnguide.co.kr',
    siteName: '로앤가이드',
    type: 'website',
  },
};

// Organization + SearchAction structured data
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '로앤가이드',
  url: 'https://www.lawnguide.co.kr',
  description: '31개 법률 분야 무료 AI 법률 진단 서비스',
  sameAs: [],
};

const searchActionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '로앤가이드',
  url: 'https://www.lawnguide.co.kr',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.lawnguide.co.kr/chat?domain={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
