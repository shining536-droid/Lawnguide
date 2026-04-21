'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { DomainMeta } from '@/lib/domains';

// 인기 8개 (기본 노출)
const POPULAR_IDS = [
  'fraud',
  'assault',
  'sex-crime',
  'divorce',
  'jeonse',
  'dismissal',
  'dui',
  'traffic-accident',
];

// 카테고리 필터
const FILTERS = [
  { id: 'all', label: '전체' },
  { id: 'labor', label: '노동' },
  { id: 'criminal', label: '형사' },
  { id: 'family', label: '가족' },
  { id: 'housing', label: '부동산' },
  { id: 'traffic', label: '교통' },
] as const;

type FilterId = typeof FILTERS[number]['id'];

const DOMAIN_CATEGORY: Record<string, Exclude<FilterId, 'all'>> = {
  // 노동
  wage: 'labor',
  retirement: 'labor',
  dismissal: 'labor',
  unemployment: 'labor',
  'industrial-accident1': 'labor',
  'industrial-accident2': 'labor',
  'sexual-harassment': 'labor',
  // 형사
  fraud: 'criminal',
  assault: 'criminal',
  'sex-crime': 'criminal',
  'child-sex-crime': 'criminal',
  'digital-sex-crime': 'criminal',
  defamation: 'criminal',
  stalking: 'criminal',
  'drug-crime': 'criminal',
  prostitution: 'criminal',
  'school-violence': 'criminal',
  // 가족
  divorce: 'family',
  'child-support': 'family',
  inheritance: 'family',
  // 부동산
  jeonse: 'housing',
  'jeonse-fraud': 'housing',
  sangga: 'housing',
  'real-estate-sale': 'housing',
  'real-estate-auction': 'housing',
  'neighbor-dispute': 'housing',
  // 교통
  dui: 'traffic',
  'traffic-accident': 'traffic',
  // 기타 (소액)
  'small-claims': 'criminal',
  rehabilitation: 'criminal',
  bankruptcy: 'criminal',
};

export default function GuideLanding({ domains }: { domains: DomainMeta[] }) {
  const [filter, setFilter] = useState<FilterId>('all');
  const [expanded, setExpanded] = useState(false);

  const popular = POPULAR_IDS.map((id) => domains.find((d) => d.id === id)).filter(
    (d): d is DomainMeta => d !== undefined,
  );
  const others = domains.filter((d) => !POPULAR_IDS.includes(d.id));

  const filterDomain = (d: DomainMeta) => {
    if (filter === 'all') return true;
    return DOMAIN_CATEGORY[d.id] === filter;
  };

  // 필터 활성화 시 인기/나머지 구분 없이 모두 보여줌
  const filteredMode = filter !== 'all';
  const filteredList = domains.filter(filterDomain);

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-10">
      <section className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">분야별 법률 가이드</h1>
        <p className="text-sm text-gray-500 md:text-base">
          내 상황에 해당하는 분야를 선택하면 관련 법률 정보를 확인할 수 있습니다.
        </p>
      </section>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              setFilter(f.id);
              if (f.id !== 'all') setExpanded(true);
            }}
            className={
              filter === f.id
                ? 'rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white'
                : 'rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-primary-400 hover:text-primary-600'
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {filteredMode ? (
        /* 필터 적용: 해당 카테고리 전부 */
        <section>
          <h2 className="mb-4 text-sm font-bold text-navy-700">
            {FILTERS.find((f) => f.id === filter)?.label} 분야 ({filteredList.length}개)
          </h2>
          <DomainGrid items={filteredList} />
        </section>
      ) : (
        <>
          {/* 인기 8개 */}
          <section>
            <h2 className="mb-4 text-sm font-bold text-navy-700">많이 찾는 분야</h2>
            <DomainGrid items={popular} />
          </section>

          {/* 더보기 */}
          {!expanded && (
            <div className="text-center">
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-navy-700 transition-all hover:border-primary-400 hover:text-primary-600"
              >
                나머지 {others.length}개 분야 더보기
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>
          )}

          {expanded && (
            <section>
              <h2 className="mb-4 text-sm font-bold text-navy-700">전체 분야</h2>
              <DomainGrid items={others} />
              <div className="mt-6 text-center">
                <button
                  onClick={() => setExpanded(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-navy-700 transition-all hover:border-primary-400 hover:text-primary-600"
                >
                  접기
                  <svg className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}

function DomainGrid({ items }: { items: DomainMeta[] }) {
  if (items.length === 0) {
    return <p className="py-8 text-center text-sm text-gray-500">해당 분야가 없습니다.</p>;
  }
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {items.map((d) => (
        <Link
          key={d.id}
          href={`/guide/${d.id}`}
          className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-all hover:border-primary-400 hover:shadow-md"
        >
          <span className="text-2xl">{d.icon}</span>
          <span className="text-sm font-semibold text-gray-800">{d.name}</span>
          <span className="line-clamp-2 text-xs text-gray-500">{d.description}</span>
        </Link>
      ))}
    </div>
  );
}
