'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ─── Wedge (핵심 4개) ─── */
const WEDGES = [
  {
    title: '보증금 못 받을 때',
    desc: '오늘 할 일부터 정리',
    href: '/diagnosis/jeonse-fraud',
  },
  {
    title: '사기 당했을 때',
    desc: '경찰 가기 전 준비',
    href: '/diagnosis/fraud',
  },
  {
    title: '해고당했을 때',
    desc: '내일까지 챙길 것',
    href: '/diagnosis/dismissal',
  },
  {
    title: '폭행당했을 때',
    desc: '지금 확보할 증거',
    href: '/diagnosis/assault',
  },
];

/* ─── 상황 카드 8개 ─── */
const SITUATIONS = [
  { text: '전세보증금을 안 돌려줘요', href: '/diagnosis/jeonse-fraud' },
  { text: '중고거래 사기를 당했어요', href: '/diagnosis/fraud' },
  { text: '회사에서 갑자기 해고당했어요', href: '/diagnosis/dismissal' },
  { text: '폭행당했는데 뭘 해야 할지 모르겠어요', href: '/diagnosis/assault' },
  { text: '음주운전으로 적발됐어요', href: '/diagnosis/dui' },
  { text: '명예훼손으로 고소당했어요', href: '/diagnosis/defamation' },
  { text: '이혼을 준비하고 있어요', href: '/diagnosis/divorce' },
  { text: '성범죄 혐의를 받고 있어요', href: '/diagnosis/sex-crime' },
];

/* ─── 분야별 카테고리 ─── */
interface DomainItem {
  id: string;
  name: string;
  desc: string;
}

interface Category {
  id: string;
  label: string;
  domains: DomainItem[];
}

const CATEGORIES: Category[] = [
  {
    id: 'safety',
    label: '성범죄/안전',
    domains: [
      { id: 'digital-sex-crime', name: '디지털성범죄', desc: '불법촬영, 유포, 딥페이크 등' },
      { id: 'sex-crime', name: '성범죄', desc: '성폭행, 성추행 등' },
      { id: 'sexual-harassment', name: '성희롱', desc: '직장 내 성희롱 등' },
      { id: 'stalking', name: '스토킹', desc: '반복적 따라다님, 연락 등' },
      { id: 'child-sex-crime', name: '아동성범죄', desc: '아동·청소년 대상 성범죄' },
      { id: 'prostitution', name: '성매매', desc: '성매매 피해 지원, 혐의 대응 등' },
    ],
  },
  {
    id: 'violence',
    label: '폭행/학교폭력',
    domains: [
      { id: 'assault', name: '폭행', desc: '폭행, 상해, 협박 등' },
      { id: 'school-violence', name: '학교폭력', desc: '물리적·언어적·사이버 폭력' },
    ],
  },
  {
    id: 'criminal',
    label: '형사/범죄',
    domains: [
      { id: 'fraud', name: '사기/재산범죄', desc: '사기 피해, 혐의 대응 등' },
      { id: 'drug-crime', name: '마약범죄', desc: '마약 관련 수사, 혐의 대응 등' },
      { id: 'defamation', name: '명예훼손/모욕', desc: '온라인·오프라인 명예훼손, 모욕 등' },
    ],
  },
  {
    id: 'traffic',
    label: '교통',
    domains: [
      { id: 'dui', name: '음주운전', desc: '음주운전 단속, 사고 대응 등' },
      { id: 'traffic-accident', name: '교통사고', desc: '합의, 보험, 과실 문제 등' },
    ],
  },
  {
    id: 'housing',
    label: '주거/부동산',
    domains: [
      { id: 'jeonse', name: '주택임대차', desc: '보증금 반환, 계약 갱신 등' },
      { id: 'jeonse-fraud', name: '전세사기 피해', desc: '전세사기 피해지원 제도 확인 등' },
      { id: 'sangga', name: '상가건물 임대차', desc: '권리금, 계약 해지 등' },
      { id: 'real-estate-sale', name: '부동산 매매', desc: '매매계약, 중도금, 하자 등' },
      { id: 'real-estate-auction', name: '부동산 경매', desc: '경매 절차, 배당 등' },
      { id: 'neighbor-dispute', name: '이웃 간 분쟁', desc: '소음, 누수, 경계 등' },
    ],
  },
  {
    id: 'labor',
    label: '노동/산재',
    domains: [
      { id: 'wage', name: '임금', desc: '체불임금, 최저임금 등' },
      { id: 'retirement', name: '퇴직급여', desc: '퇴직금 계산, DB/DC 등' },
      { id: 'dismissal', name: '해고근로자', desc: '부당해고, 해고예고 등' },
      { id: 'industrial-accident1', name: '산업재해보상보험 I', desc: '업무상 재해, 요양급여 등' },
      { id: 'industrial-accident2', name: '산업재해보상보험 II', desc: '장해급여, 유족급여 등' },
      { id: 'unemployment', name: '실업급여', desc: '수급자격, 신청 절차 등' },
    ],
  },
  {
    id: 'debt',
    label: '채무/금융',
    domains: [
      { id: 'small-claims', name: '소액사건재판', desc: '소액소송 절차 등' },
      { id: 'rehabilitation', name: '개인회생', desc: '채무 조정, 변제계획 등' },
      { id: 'bankruptcy', name: '개인파산', desc: '파산 신청, 면책 등' },
    ],
  },
  {
    id: 'family',
    label: '가족/상속',
    domains: [
      { id: 'divorce', name: '이혼', desc: '협의이혼, 재판이혼 등' },
      { id: 'child-support', name: '양육비', desc: '양육비 청구, 이행확보 등' },
      { id: 'inheritance', name: '상속', desc: '상속순위, 유류분 등' },
    ],
  },
];

/* ─── Arrow icon ─── */
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ─── Chevron icon for accordion ─── */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function HomeContent() {
  const [expandedCategories, setExpandedCategories] = useState(false);

  return (
    <div>
      {/* ========== 작업 1: 히어로 섹션 ========== */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-to-br from-[#0f1a2e] via-[#162240] to-[#1e3050] pt-28 pb-16 md:pt-36 md:pb-20">
        {/* Background decorative SVGs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <svg
            className="absolute -right-10 top-10 h-72 w-72 text-white/[0.04] md:h-[28rem] md:w-[28rem] md:-right-16 md:top-4"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <line x1="100" y1="20" x2="100" y2="180" />
            <line x1="40" y1="50" x2="160" y2="50" />
            <path d="M40 50 L25 100 Q25 120 40 120 Q55 120 55 100 Z" />
            <path d="M160 50 L145 100 Q145 120 160 120 Q175 120 175 100 Z" />
            <line x1="75" y1="180" x2="125" y2="180" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          {/* Main copy */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[1.5rem] font-bold leading-tight tracking-tight text-white sm:text-[1.8rem] md:text-4xl lg:text-5xl">
              변호사 만나기 전에, 이것만 챙기세요
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              1분 안에 지금 할 일, 준비서류, 연결 경로를 정리해드립니다
            </p>
          </div>

          {/* 결과 배지 3개 */}
          <div className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-4 text-sm text-white/60 md:gap-6 md:text-base">
            <span>지금 할 일</span>
            <span className="text-white/30">|</span>
            <span>준비서류</span>
            <span className="text-white/30">|</span>
            <span>무료 기관/전문가 경로</span>
          </div>

          {/* 웨지 4개 버튼 */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:max-w-4xl md:gap-4">
            {WEDGES.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="group flex flex-col items-center justify-center rounded-2xl bg-amber-500 px-4 py-5 text-center transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98] md:py-6"
                style={{ minHeight: '100px' }}
              >
                <span className="text-base font-bold text-navy-900 md:text-lg">
                  {w.title}
                </span>
                <span className="mt-1.5 text-sm text-navy-900/70">
                  {w.desc}
                </span>
              </Link>
            ))}
          </div>

          {/* 웨지 아래 한 줄 */}
          <p className="mx-auto mt-6 max-w-lg text-center text-sm text-white/50 md:text-base">
            선택한 상황에 맞춰 준비서류와 다음 단계를 정리해드립니다
          </p>
        </div>
      </section>

      {/* ========== 작업 2: 신뢰 섹션 ========== */}
      <section className="border-b border-gray-100 bg-gray-50 py-10 md:py-12">
        <div className="container-wide">
          <p className="mb-6 text-center text-sm font-medium text-gray-500 md:text-base">
            법제처 공공데이터 기반, 31개 법률 분야 지원
          </p>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            <div className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <span className="text-sm font-medium text-navy-700">31개 법률 분야 지원</span>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span className="text-sm font-medium text-navy-700">피해자·혐의자·억울한 상황까지 나눠서 안내</span>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span className="text-sm font-medium text-navy-700">상담 전 준비 요약본 제공</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 작업 3: "이런 상황이신가요?" 섹션 ========== */}
      <section className="py-14 md:py-20">
        <div className="container-wide">
          <h2 className="mb-8 text-center text-xl font-bold text-navy-700 md:text-2xl">
            이런 상황이신가요?
          </h2>

          {/* 모바일: 가로 스크롤 / PC: 2x4 그리드 */}
          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
              {SITUATIONS.map((s) => (
                <Link
                  key={s.href + s.text}
                  href={s.href}
                  className="group flex min-w-[260px] flex-shrink-0 items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition-all hover:border-primary-400 hover:shadow-md"
                >
                  <span className="text-sm font-medium text-navy-700 group-hover:text-primary-600">{s.text}</span>
                  <ArrowRight className="ml-3 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-500" />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {SITUATIONS.map((s) => (
              <Link
                key={s.href + s.text}
                href={s.href}
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-5 transition-all hover:border-primary-400 hover:shadow-md"
              >
                <span className="text-sm font-medium text-navy-700 group-hover:text-primary-600">{s.text}</span>
                <ArrowRight className="ml-3 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 작업 4: 분야별 안내 (접기/펼치기) ========== */}
      <section className="border-t border-gray-100 bg-gray-50 py-14 md:py-20">
        <div className="container-wide">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-navy-700 md:text-2xl">
              분야별 안내
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              31개 법률 분야에서 내 상황에 맞는 안내를 받아보세요
            </p>
          </div>

          {/* 항상 보이는 카테고리 (상위 4개) */}
          <div className="space-y-8">
            {CATEGORIES.slice(0, 4).map((cat) => (
              <div key={cat.id}>
                <h3 className="mb-4 border-b border-gray-200 pb-2 text-base font-bold text-navy-700 md:text-lg">
                  {cat.label}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.domains.map((domain) => (
                    <Link
                      key={domain.id}
                      href={`/diagnosis/${domain.id}`}
                      className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition-all hover:border-primary-400 hover:shadow-md"
                    >
                      <div>
                        <span className="font-semibold text-navy-700 group-hover:text-primary-600">{domain.name}</span>
                        <p className="mt-0.5 text-sm text-gray-500">{domain.desc}</p>
                      </div>
                      <ArrowRight className="ml-3 h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-primary-500" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 접기/펼치기: 나머지 카테고리 */}
          {!expandedCategories && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setExpandedCategories(true)}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-navy-700 transition-all hover:border-primary-400 hover:text-primary-600"
              >
                더 많은 분야 보기
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}

          {expandedCategories && (
            <div className="mt-8 space-y-8">
              {CATEGORIES.slice(4).map((cat) => (
                <div key={cat.id}>
                  <h3 className="mb-4 border-b border-gray-200 pb-2 text-base font-bold text-navy-700 md:text-lg">
                    {cat.label}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.domains.map((domain) => (
                      <Link
                        key={domain.id}
                        href={`/diagnosis/${domain.id}`}
                        className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition-all hover:border-primary-400 hover:shadow-md"
                      >
                        <div>
                          <span className="font-semibold text-navy-700 group-hover:text-primary-600">{domain.name}</span>
                          <p className="mt-0.5 text-sm text-gray-500">{domain.desc}</p>
                        </div>
                        <ArrowRight className="ml-3 h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-primary-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-4 text-center">
                <button
                  onClick={() => setExpandedCategories(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-navy-700 transition-all hover:border-primary-400 hover:text-primary-600"
                >
                  접기
                  <ChevronDown className="h-4 w-4 rotate-180" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========== 작업 5: 하단 CTA ========== */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-navy-700 md:text-2xl">
              상담 전에 보여줄 준비 요약본을 만들어보세요
            </h2>
            <div className="mt-8">
              <Link
                href="#categories-section"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-navy-900 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                지금 시작하기
              </Link>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              이 정보는 법적 효력을 갖는 유권해석이 아닙니다
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
