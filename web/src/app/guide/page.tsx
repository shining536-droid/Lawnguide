import Link from 'next/link';
import type { Metadata } from 'next';
import { DOMAINS } from '@/lib/domains';

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
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">
          분야별 법률 가이드
        </h1>
        <p className="text-gray-500 text-sm">
          내 상황에 해당하는 분야를 선택하면 관련 법률 정보를 확인할 수 있습니다.
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {DOMAINS.map((d) => (
          <Link
            key={d.id}
            href={`/guide/${d.id}`}
            className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-center"
          >
            <span className="text-2xl">{d.icon}</span>
            <span className="text-sm font-semibold text-gray-800">
              {d.name}
            </span>
            <span className="text-xs text-gray-500 line-clamp-2">
              {d.description}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
