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
export const SPOKE_MODIFIED: Record<string, string> = {};
