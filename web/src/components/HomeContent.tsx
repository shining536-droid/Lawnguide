'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface DomainItem {
  id: string;
  name: string;
  desc: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.FC<{ className?: string }>;
  domains: DomainItem[];
}

/* Category icons */
function HouseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073c0 1.078-.882 1.952-1.969 1.952H5.719c-1.087 0-1.969-.874-1.969-1.952V14.15M12 12.75V3m0 0L8.25 6.75M12 3l3.75 3.75M3.375 14.15h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

function BanknotesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function ExclamationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

const CATEGORIES: Category[] = [
  {
    id: 'housing',
    label: '주거/부동산',
    icon: HouseIcon,
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
    icon: BriefcaseIcon,
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
    label: '채무/회생',
    icon: BanknotesIcon,
    domains: [
      { id: 'small-claims', name: '소액사건재판', desc: '소액소송 절차 등' },
      { id: 'rehabilitation', name: '개인회생', desc: '채무 조정, 변제계획 등' },
      { id: 'bankruptcy', name: '개인파산', desc: '파산 신청, 면책 등' },
    ],
  },
  {
    id: 'family',
    label: '가족/상속',
    icon: HeartIcon,
    domains: [
      { id: 'divorce', name: '이혼', desc: '협의이혼, 재판이혼 등' },
      { id: 'child-support', name: '양육비', desc: '양육비 청구, 이행확보 등' },
      { id: 'inheritance', name: '상속', desc: '상속순위, 유류분 등' },
      { id: 'defamation', name: '인터넷 명예훼손', desc: '게시물 삭제, 손해배상 등' },
    ],
  },
  {
    id: 'safety',
    label: '성범죄/안전',
    icon: ShieldIcon,
    domains: [
      { id: 'digital-sex-crime', name: '디지털성범죄', desc: '불법촬영, 유포, 딥페이크 등' },
      { id: 'sex-crime', name: '성범죄', desc: '성폭행, 성추행 등' },
      { id: 'sexual-harassment', name: '성희롱', desc: '직장 내 성희롱 등' },
      { id: 'stalking', name: '스토킹', desc: '반복적 따라다님, 연락 등' },
      { id: 'child-sex-crime', name: '아동성범죄', desc: '아동·청소년 대상 성범죄' },
    ],
  },
  {
    id: 'violence',
    label: '폭행/학교폭력',
    icon: ExclamationIcon,
    domains: [
      { id: 'assault', name: '폭행', desc: '폭행, 상해, 협박 등' },
      { id: 'school-violence', name: '학교폭력', desc: '물리적·언어적·사이버 폭력' },
    ],
  },
];

/* SVG icons for "How it works" steps */
function ClipboardStepIcon() {
  return (
    <svg className="h-10 w-10 text-navy-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function ChecklistStepIcon() {
  return (
    <svg className="h-10 w-10 text-navy-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SearchStepIcon() {
  return (
    <svg className="h-10 w-10 text-navy-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

const STEPS = [
  {
    num: '1',
    title: '상황 정리',
    desc: '간단한 질문에 답하면 현재 상황과 준비 정도를 정리해드립니다',
    Icon: ClipboardStepIcon,
  },
  {
    num: '2',
    title: '준비사항 안내',
    desc: '오늘 확인할 것, 이번 주 준비할 것, 체크리스트를 한눈에',
    Icon: ChecklistStepIcon,
  },
  {
    num: '3',
    title: '기관·전문가 연결',
    desc: '공공기관 안내와 전문가 연결 경로를 확인할 수 있습니다',
    Icon: SearchStepIcon,
  },
];

export default function HomeContent() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    for (const cat of CATEGORIES) {
      const el = sectionRefs.current[cat.id];
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  function scrollToCategory(catId: string) {
    setActiveCategory(catId);
    isClickScrolling.current = true;
    const el = sectionRefs.current[catId];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  }

  return (
    <div>
      {/* ========== Hero + Category Nav ========== */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-to-br from-[#0f1a2e] via-[#162240] to-[#1e3050] pt-28 pb-12 md:pt-36 md:pb-16">
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
          <svg
            className="absolute -left-8 bottom-4 h-52 w-52 text-white/[0.04] md:h-80 md:w-80 md:-left-10 md:bottom-0"
            viewBox="0 0 160 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="55" y="20" width="50" height="25" rx="4" transform="rotate(-30 80 32)" />
            <line x1="80" y1="45" x2="65" y2="110" />
            <rect x="35" y="120" width="80" height="10" rx="3" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          {/* Title area */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-bold leading-loose tracking-tighter text-white">
              <span className="block whitespace-nowrap text-[1.3rem] sm:text-[1.7rem] md:text-4xl lg:text-5xl"><span className="text-yellow-300">변호사 상담비 아껴주는</span> 준비물 리스트,</span>
              <span className="block text-[1.3rem] sm:text-[1.7rem] md:text-4xl lg:text-5xl"><span className="text-yellow-300">1분</span> 만에 받으세요</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              어려운 법률 용어 없이 내 상황만 입력하면,
              <br />
              <span className="text-yellow-300">꼭 챙겨야 할 서류</span>와 <span className="text-yellow-300">무료법률기관/법률전문가</span>를 바로 안내해드려요
            </p>
          </div>

          {/* Category nav inside hero */}
          <div className="mt-10 md:mt-14">
            {/* PC: single row of 6 */}
            <div className="hidden md:flex md:justify-center md:gap-3 lg:gap-5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`group flex flex-col items-center gap-2.5 rounded-xl px-5 py-4 transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white/15 ring-1 ring-white/30'
                      : 'bg-white/[0.06] hover:bg-white/10'
                  }`}
                >
                  <cat.icon className={`h-7 w-7 ${activeCategory === cat.id ? 'text-primary-300' : 'text-white/60 group-hover:text-white/80'}`} />
                  <span className={`text-sm font-medium whitespace-nowrap ${activeCategory === cat.id ? 'text-white' : 'text-white/70 group-hover:text-white/90'}`}>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile: 2x3 grid */}
            <div className="grid grid-cols-3 gap-2.5 md:hidden">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`flex flex-col items-center gap-2 rounded-xl px-3 py-4 transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white/15 ring-1 ring-white/30'
                      : 'bg-white/[0.06]'
                  }`}
                >
                  <cat.icon className={`h-6 w-6 ${activeCategory === cat.id ? 'text-primary-300' : 'text-white/60'}`} />
                  <span className={`text-xs font-medium ${activeCategory === cat.id ? 'text-white' : 'text-white/70'}`}>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Domain Detail Cards ========== */}
      <section id="categories" className="scroll-mt-16 py-16 md:py-24">
        <div className="container-wide">
          <div className="lg:flex lg:gap-10">
            {/* Desktop sidebar */}
            <nav className="hidden lg:block lg:w-56 lg:flex-shrink-0">
              <div className="sticky top-20">
                <ul className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => scrollToCategory(cat.id)}
                        className={`w-full rounded-lg px-4 py-3 text-left text-lg transition-colors ${
                          activeCategory === cat.id
                            ? 'bg-primary-50 font-bold text-primary-600'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Domain grid */}
            <div className="flex-1 space-y-12">
              {CATEGORIES.map((cat) => (
                <section
                  key={cat.id}
                  id={cat.id}
                  ref={(el) => { sectionRefs.current[cat.id] = el; }}
                  className="scroll-mt-20"
                >
                  <h3 className="mb-5 border-b border-gray-200 pb-3 text-lg font-bold text-navy-700">
                    {cat.label}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {cat.domains.map((domain) => (
                      <Link
                        key={domain.id}
                        href={`/diagnosis/${domain.id}`}
                        className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary-400 hover:shadow-lg hover:shadow-primary-100/50 md:p-8"
                      >
                        <span className="text-xl font-semibold text-navy-700 group-hover:text-primary-600 md:text-2xl">
                          {domain.name}
                        </span>
                        <p className="mt-1.5 text-base leading-relaxed text-gray-500 md:text-lg">
                          {domain.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== How it works ========== */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <h2 className="mb-14 text-center text-2xl font-bold text-navy-700 md:text-3xl">
            어떻게 작동하나요?
          </h2>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100">
                  <step.Icon />
                </div>
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-navy-700">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-base leading-relaxed text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
