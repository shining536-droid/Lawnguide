'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ─── 인기 도메인 8개 ─── */
const POPULAR_DOMAINS = [
  { label: '사기/재산범죄', icon: '🎭', domain: 'fraud', desc: '사기 피해·혐의 대응' },
  { label: '폭행/상해', icon: '⚠️', domain: 'assault', desc: '폭행·상해·협박' },
  { label: '성범죄', icon: '🛡️', domain: 'sex-crime', desc: '성폭행·성추행' },
  { label: '이혼/가족', icon: '💔', domain: 'divorce', desc: '이혼·재산분할·양육권' },
  { label: '전세/부동산', icon: '🏠', domain: 'jeonse', desc: '보증금·전세사기' },
  { label: '해고/임금', icon: '💰', domain: 'dismissal', desc: '부당해고·임금체불' },
  { label: '음주운전', icon: '🚗', domain: 'dui', desc: '단속·사고 대응' },
  { label: '교통사고', icon: '🚦', domain: 'traffic-accident', desc: '합의·보험·과실' },
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
      {/* ========== 히어로 섹션 ========== */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-to-br from-[#0f1a2e] via-[#162240] to-[#1e3050] pt-28 pb-16 md:pt-36 md:pb-20">
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
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-bold tracking-tight text-white" style={{ lineHeight: '1.6' }}>
              <span className="block text-[1.5rem] sm:text-[1.8rem] md:text-4xl lg:text-5xl">변호사 만나기 전,</span>
              <span className="block mt-2 text-[1.5rem] sm:text-[1.8rem] md:text-4xl lg:text-5xl">1분 정리가 결과를 바꿉니다</span>
            </h1>
          </div>

          <div className="mx-auto mt-10 max-w-md text-center md:mt-12">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-10 py-5 text-lg font-bold text-navy-900 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98] md:text-xl"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              AI 무료 법률진단
            </Link>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-white/80 md:text-lg">
              변호사 만나기 전,{' '}<br className="sm:hidden" />AI가 빠르게 대응 전략을 세워드립니다.
            </p>
            <p className="mt-2 text-sm text-white/50">
              평균 1분 소요 · 20,455건 판례 기반
            </p>
          </div>
        </div>
      </section>

      {/* ========== 인기 도메인 8개 ========== */}
      <section className="border-b border-gray-100 bg-white py-12 md:py-16">
        <div className="container-wide">
          <h2 className="mb-8 text-center text-lg font-bold text-navy-700 md:text-xl">
            많은 분들이 이런 문제를 정리하고 있어요
          </h2>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
            {POPULAR_DOMAINS.map((d) => (
              <Link
                key={d.domain}
                href={`/chat?domain=${d.domain}`}
                className="group flex flex-col items-center rounded-2xl border-2 border-gray-200 bg-white px-4 py-5 text-center transition-all hover:border-primary-500 hover:bg-primary-50 hover:shadow-md active:scale-[0.98]"
              >
                <span className="text-2xl">{d.icon}</span>
                <span className="mt-2 text-sm font-bold text-navy-700 group-hover:text-primary-600">{d.label}</span>
                <span className="mt-1 text-xs text-gray-500">{d.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 신뢰 섹션 ========== */}
      <section className="border-b border-gray-100 bg-gray-50 py-12 md:py-16">
        <div className="container-wide">
          <h2 className="mb-3 text-center text-lg font-bold text-navy-700 md:text-xl">
            데이터 기반 법률 준비 도우미
          </h2>
          <p className="mb-8 text-center text-sm text-gray-500 md:text-base">
            20,455건 판례 · 6,493개 법조문 · 5,471건 상담사례 기반
          </p>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {/* 카드 1: 판례 분석 */}
            <div className="flex flex-col items-center rounded-2xl bg-white px-6 py-7 text-center shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <span className="mt-3 text-2xl font-bold text-navy-700">20,455건</span>
              <span className="mt-1 text-sm font-semibold text-primary-600">판례 분석</span>
              <span className="mt-2 text-xs text-gray-500">법제처 공공데이터 기반<br />실제 판례에서 핵심만 추출</span>
            </div>
            {/* 카드 2: 법조문 해설 */}
            <div className="flex flex-col items-center rounded-2xl bg-white px-6 py-7 text-center shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
                <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <span className="mt-3 text-2xl font-bold text-navy-700">6,493개</span>
              <span className="mt-1 text-sm font-semibold text-amber-600">법조문 해설</span>
              <span className="mt-2 text-xs text-gray-500">이지법 데이터 기반<br />어려운 법을 쉽게 설명</span>
            </div>
            {/* 카드 3: 31개 분야 */}
            <div className="flex flex-col items-center rounded-2xl bg-white px-6 py-7 text-center shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="mt-3 text-2xl font-bold text-navy-700">31개 분야</span>
              <span className="mt-1 text-sm font-semibold text-emerald-600">무료 법률 진단</span>
              <span className="mt-2 text-xs text-gray-500">피해자·가해자·무고까지<br />관점별 맞춤 안내</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== "이 외에도 31개 분야" 연결 문구 ========== */}
      <div className="bg-white py-8 text-center md:py-10">
        <p className="text-sm text-gray-600 md:text-base">보증금·사기·해고·폭행 외에도</p>
        <p className="mt-1 text-sm text-gray-600 md:text-base">
          <span className="font-bold">음주운전</span>, <span className="font-bold">명예훼손</span>, <span className="font-bold">이혼</span>, <span className="font-bold">성범죄</span> 등
        </p>
        <p className="mt-1 text-sm text-gray-600 md:text-base">
          <span className="font-bold text-amber-600">31개 법률 분야</span>를 지원합니다
        </p>
      </div>

      {/* ========== 분야별 안내 (접기/펼치기) ========== */}
      <section className="border-t border-gray-100 bg-gray-50 py-14 md:py-20">
        <div className="container-wide">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-navy-700 md:text-2xl">
              분야별 안내
            </h2>
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
                      href={`/chat?domain=${domain.id}`}
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
                        href={`/chat?domain=${domain.id}`}
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

      {/* ========== FAQ ========== */}
      <section className="border-t border-gray-100 bg-white py-14 md:py-16">
        <div className="container-wide">
          <h2 className="mb-8 text-center text-lg font-bold text-navy-700 md:text-xl">
            자주 묻는 질문
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {[
              { q: '로앤가이드는 어떤 서비스인가요?', a: '법률 문제가 생겼을 때, 변호사를 만나기 전에 지금 해야 할 일, 준비서류, 주의사항을 1분 안에 정리해주는 무료 AI 법률 준비 도우미입니다.' },
              { q: '정말 무료인가요?', a: '네, 완전 무료입니다. 회원가입도 필요 없고, 모든 진단과 결과 확인에 비용이 없습니다.' },
              { q: '어떤 분야를 지원하나요?', a: '사기, 폭행, 성범죄, 이혼, 전세, 해고, 음주운전, 교통사고, 명예훼손, 마약, 상속, 학교폭력 등 31개 법률 분야를 지원합니다.' },
              { q: 'AI 진단 결과는 법적 효력이 있나요?', a: '아닙니다. 로앤가이드의 결과는 법적 효력을 갖는 유권해석이 아닙니다. 정확한 판단은 전문가 상담을 받으시기 바랍니다. 상담 전 준비를 돕는 참고 자료로 활용해주세요.' },
              { q: '개인정보는 안전한가요?', a: '입력하신 정보는 서버에 저장되지 않습니다. 모든 진단은 브라우저에서 처리되며, 페이지를 닫으면 사라집니다.' },
            ].map((item, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-navy-700 md:text-base">
                  <span>{item.q}</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 하단 CTA ========== */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold leading-snug text-navy-700 md:text-2xl">
              변호사 만나기 전,<br />준비가 결과를 바꿉니다
            </h2>
            <div className="mt-8">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-navy-900 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                무료 AI 법률 도우미 시작
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
