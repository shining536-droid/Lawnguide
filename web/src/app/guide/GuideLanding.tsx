'use client';

import { useId, useMemo, useState } from 'react';
import Link from 'next/link';
import type { DomainMeta } from '@/lib/domains';
import DomainCard from '@/components/DomainCard';
import DomainIcon from '@/components/DomainIcon';

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

// 카테고리 필터 (필터 id 는 기존과 동일 — 외부 링크·계측 영향 없음)
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
  'industrial-accident': 'labor',
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

/** "전체 분야" 섹션 묶음 — 홈의 분야별 안내와 같은 구분을 쓴다. 모든 분야 링크를 항상 HTML 에 렌더한다. */
const GROUPS: { id: string; label: string; ids: string[] }[] = [
  { id: 'labor', label: '노동 · 산재', ids: ['wage', 'retirement', 'dismissal', 'unemployment', 'industrial-accident', 'industrial-accident1', 'industrial-accident2', 'sexual-harassment'] },
  { id: 'criminal', label: '형사 · 범죄', ids: ['fraud', 'assault', 'defamation', 'drug-crime', 'school-violence'] },
  { id: 'safety', label: '성범죄 · 안전', ids: ['sex-crime', 'digital-sex-crime', 'child-sex-crime', 'stalking', 'prostitution'] },
  { id: 'family', label: '가족 · 상속', ids: ['divorce', 'child-support', 'inheritance'] },
  { id: 'housing', label: '주거 · 부동산', ids: ['jeonse', 'jeonse-fraud', 'sangga', 'real-estate-sale', 'real-estate-auction', 'neighbor-dispute'] },
  { id: 'traffic', label: '교통', ids: ['dui', 'traffic-accident'] },
  { id: 'debt', label: '채무 · 소액분쟁', ids: ['small-claims', 'rehabilitation', 'bankruptcy'] },
];

/** 검색 보조 키워드 — 사용자가 실제로 치는 표현을 분야 이름·설명 외에 추가로 매칭한다. */
const SEARCH_KEYWORDS: Record<string, string> = {
  jeonse: '전세 월세 보증금 반환 임대인 집주인 계약갱신 임차권등기',
  'jeonse-fraud': '전세사기 깡통전세 보증금 피해지원 HUG',
  sangga: '상가 권리금 임대차 갱신 명도',
  wage: '임금체불 월급 급여 수당 야근 최저임금 포괄임금 노동청 진정',
  retirement: '퇴직금 퇴직연금 DB DC 중간정산',
  dismissal: '해고 부당해고 권고사직 징계 노동위원회 구제신청 사직서',
  'small-claims': '소액 지급명령 민사 소송 떼인돈 빌려준돈 차용증',
  rehabilitation: '개인회생 채무 빚 변제계획 신용회복',
  bankruptcy: '개인파산 면책 빚 탕감',
  inheritance: '상속 유류분 상속포기 한정승인 유언 상속세',
  divorce: '이혼 협의이혼 재판이혼 재산분할 위자료 양육권 외도 불륜',
  'child-support': '양육비 미지급 이행명령 감치 양육비이행관리원',
  'neighbor-dispute': '층간소음 누수 경계 이웃 아파트 반려동물',
  defamation: '명예훼손 모욕 악플 댓글 허위사실 고소',
  'real-estate-sale': '부동산 매매 계약해제 하자 중개 잔금 계약금',
  'real-estate-auction': '경매 배당 명도 낙찰 유치권',
  'industrial-accident': '산재 산업재해 업무상 재해 요양급여 근로복지공단 출퇴근',
  'industrial-accident1': '산재 산업재해 업무상 재해 요양',
  'industrial-accident2': '산재 장해급여 유족급여 보험급여',
  unemployment: '실업급여 구직급여 고용보험 자진퇴사 권고사직 수급자격',
  'digital-sex-crime': '불법촬영 몰카 유포 딥페이지 딥페이크 리벤지포르노 사진 영상',
  'sex-crime': '성폭행 성추행 강제추행 성범죄 고소 무고',
  'sexual-harassment': '성희롱 직장 상사 회식',
  stalking: '스토킹 따라다님 연락 접근금지 잠정조치',
  assault: '폭행 상해 협박 싸움 쌍방폭행 합의',
  'child-sex-crime': '아동 청소년 성범죄 미성년자',
  'school-violence': '학교폭력 학폭 학폭위 심의위원회 따돌림',
  fraud: '사기 보이스피싱 중고거래 투자사기 코인 돈 안갚음 고소',
  dui: '음주운전 면허취소 면허정지 행정심판 윤창호법',
  'traffic-accident': '교통사고 합의 보험 과실비율 뺑소니 후유증',
  'drug-crime': '마약 대마 필로폰 투약 소지',
  prostitution: '성매매 조건만남 알선',
};

function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, '');
}

export default function GuideLanding({ domains }: { domains: DomainMeta[] }) {
  const [filter, setFilter] = useState<FilterId>('all');
  const [query, setQuery] = useState('');
  const searchId = useId();
  const resultsId = useId();

  const byId = useMemo(() => new Map(domains.map((d) => [d.id, d])), [domains]);

  const popular = POPULAR_IDS.map((id) => byId.get(id)).filter((d): d is DomainMeta => d !== undefined);

  // 그룹에 배정되지 않은 분야도 누락되지 않도록 "기타" 로 모은다.
  const groups = useMemo(() => {
    const assigned = new Set(GROUPS.flatMap((g) => g.ids));
    const rest = domains.filter((d) => !assigned.has(d.id));
    const list = GROUPS.map((g) => ({
      ...g,
      items: g.ids.map((id) => byId.get(id)).filter((d): d is DomainMeta => d !== undefined),
    })).filter((g) => g.items.length > 0);
    if (rest.length > 0) list.push({ id: 'etc', label: '기타', ids: rest.map((d) => d.id), items: rest });
    return list;
  }, [domains, byId]);

  const trimmed = query.trim();
  const searching = trimmed.length > 0;

  const searchResults = useMemo(() => {
    if (!searching) return [];
    const tokens = normalize(trimmed).split(/[,/·]/).filter(Boolean);
    return domains.filter((d) => {
      const hay = normalize(`${d.name} ${d.description} ${SEARCH_KEYWORDS[d.id] ?? ''}`);
      return tokens.every((t) => hay.includes(t));
    });
  }, [domains, searching, trimmed]);

  const filteredMode = filter !== 'all';
  const filteredList = domains.filter((d) => DOMAIN_CATEGORY[d.id] === filter);
  const activeFilterLabel = FILTERS.find((f) => f.id === filter)?.label;

  const clearSearch = () => setQuery('');

  return (
    <main className="mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-6 md:pb-16 md:pt-10">
      {/* ── 소개 ── */}
      <section className="space-y-1.5">
        <h1 className="break-keep text-[22px] font-bold leading-tight text-navy-700 md:text-3xl">
          어떤 법률 문제로 고민 중이신가요?
        </h1>
        <p className="break-keep text-sm text-brand-muted md:text-base">
          분야를 선택하면 필요한 절차와 준비자료를 확인할 수 있어요.
        </p>
      </section>

      {/* ── 검색 ── */}
      <section className="mt-5">
        <label htmlFor={searchId} className="sr-only">
          분야 검색
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-brand-muted">
            <DomainIcon name="search" size={18} />
          </span>
          <input
            id={searchId}
            type="search"
            inputMode="search"
            autoComplete="off"
            enterKeyHint="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape' && query) {
                e.preventDefault();
                clearSearch();
              }
            }}
            placeholder="예: 보증금, 해고, 합의"
            aria-controls={resultsId}
            aria-describedby={`${searchId}-hint`}
            className="h-12 w-full rounded-[14px] border border-brand-line bg-brand-surface pl-10 pr-10 text-[15px] text-navy-700 placeholder:text-brand-muted/80 focus:border-brand-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="검색어 지우기"
              className="absolute inset-y-0 right-2 my-auto flex h-8 w-8 items-center justify-center rounded-full text-brand-muted hover:bg-white hover:text-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40"
            >
              <DomainIcon name="x" size={16} />
            </button>
          )}
        </div>
        <p id={`${searchId}-hint`} className="sr-only">
          분야 이름이나 상황을 입력하면 아래 목록이 바로 걸러집니다. Esc 키로 지울 수 있습니다.
        </p>
      </section>

      {/* ── 카테고리 필터 (검색 중에는 숨김) ── */}
      {!searching && (
        <div className="mt-4 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap" role="group" aria-label="분야 묶음 필터">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f.id)}
                  className={
                    active
                      ? 'h-9 rounded-full bg-navy-700 px-4 text-sm font-semibold text-white'
                      : 'h-9 rounded-full border border-brand-line bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:border-brand-accent hover:text-brand-accent'
                  }
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── 본문 ── */}
      <div id={resultsId} className="mt-7 space-y-9" aria-live="polite">
        {searching ? (
          searchResults.length > 0 ? (
            <section>
              <SectionHeading>
                &lsquo;{trimmed}&rsquo; 검색 결과 <span className="text-brand-muted">{searchResults.length}개</span>
              </SectionHeading>
              <DomainGrid items={searchResults} />
            </section>
          ) : (
            <section className="rounded-[14px] border border-dashed border-brand-line bg-brand-surface px-5 py-8 text-center">
              <p className="text-[15px] font-semibold text-navy-700">&lsquo;{trimmed}&rsquo;에 맞는 분야를 찾지 못했어요</p>
              <p className="mt-1.5 break-keep text-sm text-brand-muted">
                다른 표현(예: 보증금, 해고, 합의)으로 다시 검색하거나, 어느 분야인지 모르겠다면 상황 정리부터 시작해보세요.
              </p>
              <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={clearSearch}
                  className="h-10 rounded-full border border-brand-line bg-white px-5 text-sm font-medium text-navy-700 hover:border-brand-accent hover:text-brand-accent"
                >
                  전체 분야 보기
                </button>
                <Link
                  href="/chat"
                  className="inline-flex h-10 items-center rounded-full bg-navy-700 px-5 text-sm font-semibold text-white hover:bg-navy-800"
                >
                  상황 정리 시작하기
                </Link>
              </div>
            </section>
          )
        ) : filteredMode ? (
          <section>
            <SectionHeading>
              {activeFilterLabel} 분야 <span className="text-brand-muted">{filteredList.length}개</span>
            </SectionHeading>
            <DomainGrid items={filteredList} />
          </section>
        ) : (
          <>
            <section aria-labelledby="popular-heading">
              <SectionHeading id="popular-heading">많이 찾는 분야</SectionHeading>
              <DomainGrid items={popular} />
            </section>

            <section aria-labelledby="all-heading">
              <SectionHeading id="all-heading">
                전체 분야 <span className="text-brand-muted">{domains.length}개</span>
              </SectionHeading>
              <div className="space-y-7">
                {groups.map((g) => (
                  <div key={g.id}>
                    <h3 className="mb-3 text-[13px] font-semibold tracking-wide text-brand-muted">{g.label}</h3>
                    <DomainGrid items={g.items} />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      {/* ── 전환: 기존 무료 상황 정리(/chat) 안내 ── */}
      <section className="mt-10 rounded-[16px] border border-brand-line bg-brand-surface p-5 md:flex md:items-center md:justify-between md:p-6">
        <div>
          <h2 className="break-keep text-base font-bold text-navy-700 md:text-lg">어느 분야인지 모르겠다면</h2>
          <p className="mt-1 break-keep text-sm text-brand-muted">
            몇 가지 질문에 답하면 상담 전에 확인할 절차와 준비자료를 정리해 드려요. 무료이고 회원가입이 없으며, 답변은
            서버에 저장되지 않아요.
          </p>
        </div>
        <Link
          href="/chat"
          className="mt-4 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-navy-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 md:mt-0 md:w-auto md:shrink-0"
        >
          상황 정리 시작하기
          <DomainIcon name="chevron-right" size={16} />
        </Link>
      </section>
    </main>
  );
}

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-3.5 text-[15px] font-bold text-navy-700 md:text-base">
      {children}
    </h2>
  );
}

function DomainGrid({ items }: { items: DomainMeta[] }) {
  if (items.length === 0) {
    return <p className="py-8 text-center text-sm text-brand-muted">해당 분야가 없습니다.</p>;
  }
  return (
    <ul className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4" role="list">
      {items.map((d) => (
        <li key={d.id} className="min-w-0">
          <DomainCard href={`/guide/${d.id}`} domainId={d.id} name={d.name} description={d.description} />
        </li>
      ))}
    </ul>
  );
}
