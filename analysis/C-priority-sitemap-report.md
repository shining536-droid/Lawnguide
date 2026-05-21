# C. Priority Sitemap 초안

생성일: 2026-05-21
경로: `https://www.lawnguide.co.kr/sitemap-priority.xml`

## 생성 결과

- 총 URL: **280개** (목표 100~300 범위 내)
- 구성: 핵심 hub 11 + 핵심 도메인 신규 spoke 269
- 도메인별 spoke 25개 (jeonse-fraud 만 19개 — 풀 전체)

## 포함 기준 (제한된 데이터 환경)

❗ GA4 Organic Search 유입 / GSC 노출·클릭 데이터 미가용으로, **다음 heuristic 으로 대체**:
1. 사용자가 명시한 핵심 수익 도메인 11개 (실업급여·퇴직금·임금·해고·전세·전세사기·교통사고·명예훼손·스토킹·이혼·양육비)
2. 각 도메인 spoke 중 **batch 번호 최신순 상위 25개** (= 가장 최근 보강된 콘텐츠, 본문·판례 신선도 보장)

→ GA4/GSC 도착 시 실제 노출·클릭 상위 URL 로 교체 필요.

## 도메인별 분포

| 도메인 | 총 spoke | 우선 선정 |
|--------|---------|-----------|
| unemployment | 161 | 25 |
| retirement | 132 | 25 |
| wage | 193 | 25 |
| dismissal | 216 | 25 |
| jeonse | 92 | 25 |
| jeonse-fraud | 19 | 19 |
| traffic-accident | 221 | 25 |
| defamation | 125 | 25 |
| stalking | 83 | 25 |
| divorce | 191 | 25 |
| child-support | 71 | 25 |
| **합계** | **1,504** | **269** |

+ hub 11 = 280 URL total.

## 제외 기준 (자동 적용됨)

✅ heuristic 기반 자동 제외:
- 그 외 18개 도메인 (sangga, small-claims, neighbor-dispute, real-estate-sale, real-estate-auction, industrial-accident1/2, digital-sex-crime, sex-crime, sexual-harassment, child-sex-crime, school-violence, prostitution, drug-crime, dui, assault, fraud, inheritance, rehabilitation, bankruptcy) — 우선순위 외
- 각 도메인의 구버전 spoke (batch 60 미만) — 본문 깊이·판례 신선도 낮음
- redirect URL (next.config.js 22개) — 자동 제외 (sourcepool 에 없음)
- 404 URL — 사용 가능한 데이터 부족, 추가 검증 필요

⚠️ 미검증 항목 (export 도착 후 검증 필요):
- self canonical 인지
- index 가능 (noindex 없음)
- 본문 충실도 (얇은 페이지 제외)
- 내부링크 ≥1

## 코드 변경

✅ 신규 파일 2개:
1. `web/src/data/priority-urls.ts` — 280개 URL 데이터 (자동 생성, 다시 빌드해도 동일)
2. `web/src/app/sitemap-priority.xml/route.ts` — Next.js route handler, XML 응답

❌ 변경하지 않은 파일:
- `web/src/app/sitemap.ts` 기존 전체 사이트맵 (2,349개) 유지
- `web/src/app/robots.ts` 기존 robots 유지 (sitemap-priority 미추가)

## 배포 후 GSC 등록 절차 (사용자 수동)

1. Vercel 배포 확인: `https://www.lawnguide.co.kr/sitemap-priority.xml` 200 OK 응답
2. GSC > Sitemaps > 새 사이트맵 추가 > `sitemap-priority.xml` 제출
3. 1~2주 후 색인 통계 확인 (priority sitemap 페이지 색인율 vs 전체 색인율)

## robots.ts 에 추가할지 결정 — 보고 후 결정

CLAUDE.md 룰: "기존 sitemap index 에 추가할지 여부는 보고 후 결정."

**현재 상태**: 추가 안 함 (robots.ts 변경 없음).
**대안**:
- A) robots.ts 의 sitemap 줄에 두 번째 entry 추가:
  ```ts
  sitemap: ['https://www.lawnguide.co.kr/sitemap.xml', 'https://www.lawnguide.co.kr/sitemap-priority.xml']
  ```
- B) robots.ts 변경 없이 GSC 에 직접 제출 (덜 visible 하지만 안전).

→ 사용자 결정 대기. 권장: **A) robots.ts 에 추가** (Google 이 자동 발견).

## 다음 단계

1. ✅ 코드 생성 완료 (priority-urls.ts + route.ts)
2. ⏳ 로컬 빌드 확인 (다음 단계)
3. ⏳ push → Vercel 배포
4. ⏳ 사용자: GSC sitemap 제출
5. ⏳ 1주 후 GSC priority sitemap 색인율 측정
