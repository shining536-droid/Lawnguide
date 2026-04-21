import type { Metadata } from 'next';
import { DOMAINS } from '@/lib/domains';
import GuideLanding from './GuideLanding';

export const metadata: Metadata = {
  title: '법률 가이드 — 분야별 법률 정보 | 로앤가이드',
  description:
    '이혼, 상속, 임금체불, 전세사기, 폭행, 사기 등 31개 분야별 법률 가이드를 확인하세요. 내 상황에 맞는 법률 정보를 쉽게 찾을 수 있습니다.',
  alternates: {
    canonical: 'https://www.lawnguide.co.kr/guide',
  },
  openGraph: {
    title: '법률 가이드 — 분야별 법률 정보 | 로앤가이드',
    description:
      '31개 분야별 법률 가이드를 확인하세요. 내 상황에 맞는 법률 정보를 쉽게 찾을 수 있습니다.',
    url: 'https://www.lawnguide.co.kr/guide',
    siteName: '로앤가이드',
    type: 'website',
  },
};

export default function GuidePage() {
  return <GuideLanding domains={DOMAINS} />;
}
