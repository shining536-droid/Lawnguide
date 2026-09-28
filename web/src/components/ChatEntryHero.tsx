import { getDomainMeta } from '@/lib/domains';
import ExampleQuestions, { type ExampleQuestion } from './ExampleQuestions';
import ResultPreviewCard from './ResultPreviewCard';

/**
 * /chat 진입 히어로 (서버 컴포넌트).
 *
 * 왜 domain 유무로 "전부 숨김/전부 표시" 를 하지 않는가:
 *   이전 구현은 `showWelcome = !searchParams.domain` 이어서, 블로그 CTA 로 들어오는
 *   `?domain=` 유입자(= 주요 유입 경로)가 헤드라인·신뢰배지를 **하나도 보지 못했다.**
 *   그래서 헤드라인/보조문구/신뢰배지는 항상 보여주고, 자리를 많이 차지하는
 *   예시질문·결과 예시카드만 domain 이 없을 때(탐색 모드)로 제한한다.
 *   domain 이 있을 때는 compact 레이아웃 + 도메인 한 줄 안내만 붙여 입력 흐름을 막지 않는다.
 *
 * 톤: 판단형 금지. "정리해드립니다" 까지만 말하고 결과를 약속하지 않는다.
 */

const TRUST_BADGES: { label: string; className: string }[] = [
  { label: '무료', className: 'bg-amber-50 text-amber-700' },
  { label: '회원가입 없음', className: 'bg-amber-50 text-amber-700' },
  { label: '평균 1~3분', className: 'bg-emerald-50 text-emerald-700' },
  { label: '개인정보 저장 안 함', className: 'bg-gray-100 text-gray-700' },
  // 정확한 도메인 개수는 하드코딩하지 않는다 (허브 통합·추가 시 유지보수 리스크).
  { label: '30여 개 법률 분야', className: 'bg-primary-50 text-primary-700' },
];

export default function ChatEntryHero({
  domain,
  examples,
}: {
  domain?: string;
  examples: ExampleQuestion[];
}) {
  const meta = domain ? getDomainMeta(domain) : undefined;
  const compact = Boolean(meta);

  return (
    <section className="border-b border-gray-200 bg-white px-4 pt-5 pb-4">
      <div className="mx-auto max-w-3xl">
        {/* 헤드라인 — domain 유무와 무관하게 항상 표시 */}
        <h1
          className={
            compact
              ? 'text-center text-base font-bold leading-snug text-navy-700 md:text-lg'
              : 'text-center text-lg font-bold leading-snug text-navy-700 md:text-2xl'
          }
        >
          변호사 상담 전, 내 상황을 AI로 먼저 정리하세요
        </h1>

        {/* 보조 문구 — 항상 표시 */}
        <p
          className={
            compact
              ? 'mx-auto mt-1.5 max-w-xl text-center text-xs leading-relaxed text-gray-500'
              : 'mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed text-gray-600'
          }
        >
          상담 시간을 줄이고, 핵심 쟁점·준비서류·부족한 증거를 미리 확인할 수 있습니다.
        </p>

        {/* 신뢰 배지 — 항상 표시. 거부감 제거(무료·가입없음·저장안함) → 소요시간 → 규모 순 */}
        <div
          className={
            compact
              ? 'mt-2.5 flex flex-wrap justify-center gap-1.5 text-[10px]'
              : 'mt-4 flex flex-wrap justify-center gap-2 text-[11px] md:text-xs'
          }
        >
          {TRUST_BADGES.map((b) => (
            <span
              key={b.label}
              className={`rounded-full px-2.5 py-1 font-semibold ${b.className}`}
            >
              {b.label}
            </span>
          ))}
        </div>

        {meta ? (
          /* domain 유입: 한 줄 문맥 안내만. 예시질문·예시카드는 넣지 않는다(입력 흐름 방해 방지). */
          <p className="mt-3 rounded-lg bg-primary-50/60 px-3 py-2 text-center text-xs text-primary-800">
            <span className="mr-1">{meta.icon}</span>
            <strong className="font-semibold">{meta.name}</strong> 관련 상황을 정리합니다 — 아래 질문에
            답하면 지금 챙길 자료와 절차를 정리해드립니다.
          </p>
        ) : (
          /* 탐색 모드: 예시질문 + 결과 예시카드 */
          <>
            <ExampleQuestions questions={examples} />
            <ResultPreviewCard />
          </>
        )}
      </div>
    </section>
  );
}
