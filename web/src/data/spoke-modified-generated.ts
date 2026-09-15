// 스포크 '실질 수정일(dateModified)' — 내용이 실제로 고쳐진 페이지만 기록한다.
//
// 왜 별도 파일인가:
//   datePublished 는 sitemap-lastmod-generated.ts 의 발행일(소스파일 최초 커밋일)을 쓴다.
//   dateModified 는 "실질적으로 내용을 고친 날"이어야 하므로, 오타·링크 일괄정정 같은 비실질 커밋으로는
//   갱신하지 않는다. 그래서 자동 생성이 아니라, 실질 개편이 있을 때만 명시적으로 추가하는 맵으로 둔다.
//
// 규칙:
//   - 값이 없으면 page.tsx 가 dateModified 를 datePublished 와 동일하게 둔다(허위 신선도 금지).
//   - 전 페이지를 오늘 날짜로 일괄 갱신하지 않는다.
//   - 형식: 'slug': 'YYYY-MM-DD'
//
// 2026-09-16: growth phase 3B 처치군 20개. H1 질문형 전환 + 판단표 추가 + 공식 출처 링크 +
//   (검증된 항목에 한해) 사실 정정이 실제로 이루어진 페이지들이라 실질 수정일을 기록한다.
//   대조군 20개는 내용을 바꾸지 않았으므로 여기에 넣지 않는다.
export const SPOKE_MODIFIED: Record<string, string> = {
  'outpatient-treatment-count-settlement-impact': '2026-09-16',
  'sale-contract-essential-clauses': '2026-09-16',
  'unemployment-internship-training-end': '2026-09-16',
  'unemployment-60-retirement-benefit': '2026-09-16',
  'unemployment-reapply-after-expiry': '2026-09-16',
  'unemployment-weekly-52-hour-violation-quit': '2026-09-16',
  'unemployment-disability-worker-special-eligibility': '2026-09-16',
  'unemployment-180days-insurance-period-calc': '2026-09-16',
  'unemployment-probation-fired': '2026-09-16',
  'wage-freelancer-worker-status-claim': '2026-09-16',
  'retirement-small-business-5': '2026-09-16',
  'retirement-night-overtime-included-calculation': '2026-09-16',
  'dismissal-tardiness-repeated-discipline': '2026-09-16',
  'traffic-accident-parking-lot-door-ding': '2026-09-16',
  'boundary-wall-dispute': '2026-09-16',
  'unemployment-sexual-harassment-quit-benefit': '2026-09-16',
  'traffic-accident-bus-sudden-stop-passenger-claim': '2026-09-16',
  'unemployment-waiting-7days': '2026-09-16',
  'bankruptcy-credit-recovery-timeline': '2026-09-16',
  'dismissal-during-sick-leave': '2026-09-16',
};
