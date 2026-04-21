'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ─── 실제 결과 예시 3개 ─── */
interface ResultExample {
  domain: string;
  badge: string;
  scenario: string;
  lawRef: string;
  documents: { label: string; have: boolean }[];
  actions: string[];
}

const RESULT_EXAMPLES: ResultExample[] = [
  {
    domain: 'fraud',
    badge: '사기 피해',
    scenario: '친구한테 500만원 빌려줬는데 안 갚아요',
    lawRef: '형법 제347조(사기죄) · 민법 제598조(금전소비대차)',
    documents: [
      { label: '카톡 대화·송금 내역', have: true },
      { label: '차용증 (없어도 가능)', have: false },
    ],
    actions: [
      '계좌이체 내역·카톡 대화 증거 일체 보관',
      '내용증명으로 상환 촉구 발송',
      '300만원 이상이면 지급명령 신청 검토',
    ],
  },
  {
    domain: 'wage',
    badge: '임금체불',
    scenario: '3개월째 월급이 밀리고 있어요',
    lawRef: '근로기준법 제43조(임금 지급) · 제36조(금품청산 14일)',
    documents: [
      { label: '급여명세서·근로계약서', have: true },
      { label: '출퇴근 기록·업무 지시 메신저', have: false },
    ],
    actions: [
      '고용노동부 임금체불 진정 접수 (증빙 일괄 제출)',
      '간이대지급금 신청 가능 여부 점검',
      '퇴사 시 이직확인서 사유 정확히 기재 요청',
    ],
  },
  {
    domain: 'divorce',
    badge: '외도 이혼',
    scenario: '배우자 외도 증거가 있는데 이혼하고 싶어요',
    lawRef: '민법 제840조 1호(부정행위) · 제843조(위자료)',
    documents: [
      { label: '사진·통화내역·메시지 기록', have: true },
      { label: '호텔·카드 결제 내역 (있으면 유리)', have: false },
    ],
    actions: [
      '외도 증거를 시간순으로 정리 (위자료 입증용)',
      '재산 현황 파악 — 분할 대상 재산 특정',
      '양육권·양육비 청구 전략 설계',
    ],
  },
];

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
              <span className="block mt-2 text-[1.5rem] sm:text-[1.8rem] md:text-4xl lg:text-5xl">3분 정리가 결과를 바꿉니다</span>
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
              평균 3분 · 무료 · 회원가입 없음
            </p>
          </div>
        </div>
      </section>

      {/* ========== 숫자로 증명 (4-배지) ========== */}
      <section className="border-b border-gray-100 bg-white py-10 md:py-12">
        <div className="container-wide">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl font-bold text-navy-700 md:text-3xl lg:text-4xl">110,000+</span>
              <span className="mt-2 text-xs font-medium text-gray-600 md:text-sm">법률 데이터</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl font-bold text-navy-700 md:text-3xl lg:text-4xl">31개</span>
              <span className="mt-2 text-xs font-medium text-gray-600 md:text-sm">법률 분야</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl font-bold text-navy-700 md:text-3xl lg:text-4xl">3분</span>
              <span className="mt-2 text-xs font-medium text-gray-600 md:text-sm">진단 소요</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl font-bold text-amber-600 md:text-3xl lg:text-4xl">무료</span>
              <span className="mt-2 text-xs font-medium text-gray-600 md:text-sm">회원가입 없음</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 이런 결과가 나옵니다 (실제 결과 예시 3개) ========== */}
      <section className="border-b border-gray-100 bg-gray-50 py-14 md:py-20">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-navy-700 md:text-2xl">
              이런 결과가 나옵니다
            </h2>
            <p className="mt-3 text-sm text-gray-600 md:text-base">
              상담 전 AI가 법조문 · 필요 자료 · 지금 할 일을 한 번에 정리해드립니다
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {RESULT_EXAMPLES.map((ex) => (
              <div
                key={ex.domain}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                {/* 시나리오 헤더 */}
                <div className="mb-5 rounded-lg bg-gray-100 px-4 py-3">
                  <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-700">
                    {ex.badge}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-navy-700">
                    &ldquo;{ex.scenario}&rdquo;
                  </p>
                </div>

                {/* 해당 법조문 */}
                <div className="mb-4">
                  <h3 className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-600">
                    해당 법조문
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-700">{ex.lawRef}</p>
                </div>

                {/* 필요 자료 */}
                <div className="mb-4">
                  <h3 className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    필요 자료
                  </h3>
                  <ul className="space-y-1 text-[13px] text-gray-700">
                    {ex.documents.map((doc) => (
                      <li key={doc.label} className="flex items-start gap-2">
                        <span
                          className={
                            doc.have
                              ? 'mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700'
                              : 'mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-[10px] font-bold text-gray-500'
                          }
                          aria-hidden="true"
                        >
                          {doc.have ? '✓' : '○'}
                        </span>
                        <span>{doc.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 지금 할 일 */}
                <div className="mb-5">
                  <h3 className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    지금 할 일
                  </h3>
                  <ol className="space-y-1.5 text-[13px] text-gray-700">
                    {ex.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{action}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* CTA */}
                <Link
                  href={`/chat?domain=${ex.domain}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold text-navy-900 transition-all hover:bg-amber-400 hover:shadow-md active:scale-[0.98]"
                >
                  내 상황 AI로 무료 정리하기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-500">
            위 결과는 AI 요약 예시이며, 법적 효력을 갖는 유권해석이 아닙니다.
          </p>
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
      <section className="border-b border-gray-100 bg-gray-50 py-14 md:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-xl font-bold text-navy-700 md:text-2xl">
              왜 상담 전 준비가 중요한가요?
            </h2>

            {/* 블록 1: 비용 문제 */}
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-7">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">💰</span>
                <div>
                  <p className="text-sm font-bold text-navy-700 md:text-base">
                    변호사 상담은 보통 30분에 10만원 내외입니다
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                    준비 없이 가면 30분 중 20분을 상황 설명에 쓰고, 정작 전략 논의는 10분밖에 못 합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 블록 2: 사전 정리 효과 */}
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-7">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">⏱</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-navy-700 md:text-base">
                    로앤가이드로 미리 정리하면
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700 md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary-500">✓</span>
                      <span>내 상황이 어떤 법률 쟁점인지 정리됩니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary-500">✓</span>
                      <span>필요한 증거와 서류가 무엇인지 파악됩니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary-500">✓</span>
                      <span>보유 자료와 부족한 자료가 구분됩니다</span>
                    </li>
                  </ul>
                  <p className="mt-4 rounded-lg bg-primary-50 px-4 py-3 text-sm leading-relaxed text-primary-800">
                    정리된 내용을 변호사에게 보여주면 상담 시간을 줄이고 핵심 전략 논의로 바로 들어갈 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 블록 3: 결정적 차이 */}
            <div className="mb-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-7">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">📋</span>
                <div>
                  <p className="text-sm leading-relaxed text-amber-900 md:text-base">
                    <strong>&ldquo;뭘 준비해야 할지 몰라서요&rdquo;</strong> 보다
                    <br />
                    <strong>&ldquo;여기까지 정리해왔습니다&rdquo;</strong>가
                    <br />
                    훨씬 정확한 상담으로 이어집니다.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-navy-900 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98]"
              >
                무료로 내 상황 정리하기
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-xs text-gray-500">
                개인정보 저장 안 함 · 무료 · 회원가입 없음
              </p>
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
              { q: '로앤가이드는 어떤 서비스인가요?', a: '법률 문제가 생겼을 때, 변호사를 만나기 전에 지금 해야 할 일, 준비서류, 주의사항을 3분 안에 정리해주는 무료 AI 법률 준비 도우미입니다.' },
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
            <p className="mt-6 text-xs text-gray-500">
              개인정보 저장 안 함 · 무료 · 회원가입 없음
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
