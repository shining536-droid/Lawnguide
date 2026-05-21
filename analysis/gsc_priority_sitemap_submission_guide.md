# GSC Priority Sitemap 제출 가이드

작성일: 2026-05-21
대상 URL: `https://www.lawnguide.co.kr/sitemap-priority.xml`

## 제출 절차 (3단계)

### 1단계 — GSC 로그인 + 속성 선택
1. https://search.google.com/search-console 접속
2. 좌상단 속성 드롭다운 → **lawnguide.co.kr** 또는 **https://www.lawnguide.co.kr** 선택

### 2단계 — Sitemaps 메뉴 진입
1. 좌측 메뉴 → **색인 생성** → **Sitemaps**
2. 기존 제출 상태 확인:
   - `sitemap.xml` 이미 제출됐는지 확인 (제출 안 됐으면 함께 제출)

### 3단계 — 새 sitemap 추가
1. "새 사이트맵 추가" 입력란에 다음 입력:
   ```
   sitemap-priority.xml
   ```
   (도메인 prefix 는 자동 추가됨 — 전체 경로 입력 불필요)
2. **제출** 클릭
3. 즉시 결과 확인: "성공" / "가져올 수 없음" 표시
   - "성공" 이면 정상 처리
   - "가져올 수 없음" 이면 5분 후 재시도 (CDN propagation)

## 제출 후 즉시 기대 금지

**중요**: GSC sitemap 제출은 색인 즉시 증가 신호가 **아닙니다**.

| 시점 | 기대 결과 |
|------|----------|
| 제출 직후 | "검색됨" → "처리됨" 상태 |
| +1~3일 | Google 이 280 URL 크롤 시도 |
| +1주 | 신규 발견 URL 일부 색인 진입 |
| **+2주** | priority sitemap 페이지 색인율 측정 시점 |
| +4주 | 전체 280개 색인 안정화 (대부분 페이지 색인) |

## 추적 KPI (1~2주 단위)

### KPI 1: priority sitemap 처리 상태
GSC → Sitemaps → `sitemap-priority.xml` 클릭 → "발견된 URL" 수
- 기대: 280
- 차이 시 sitemap 파싱 오류 가능 (재제출)

### KPI 2: 색인 생성됨 vs 미색인 추이 (5/21 기준선)
GSC → 색인 → 페이지 → 전체 통계
- 5/21 기준선:
  - 색인 생성됨: 1.19천
  - 미색인: 1.08천
  - 발견됨-색인안됨: 795
- +2주 후 비교:
  - 색인 생성됨 +50~+100 = 효과 있음
  - 색인 생성됨 변화 없음 = priority sitemap 미반영 또는 다른 차단 사유 존재

### KPI 3: priority 도메인 노출·클릭
GSC → 검색결과 → 쿼리 또는 페이지
- 필터: 페이지 contains `/guide/unemployment/` 등 priority 도메인
- +2주 후 노출 / 클릭 증가 여부 확인

## 추가 권장 사항

### A) URL 검사 도구로 1건씩 색인 요청 (선택)
GSC → URL 검사 → 핵심 hub 11개 입력 → "색인 생성 요청"
- 효과: hub 페이지 즉시 재크롤 요청
- 제한: 일 10회 한도

### B) Bing Webmaster Tools 에도 제출
- https://www.bing.com/webmasters
- 동일 sitemap-priority.xml URL 제출
- 효과: Bing 색인 가속 (5/19~20 Bing 32 세션 → 추가 증가 기대)

### C) Naver Search Advisor 등록 (선택)
- https://searchadvisor.naver.com
- 사이트 소유권 인증 후 sitemap 제출
- 효과: Naver 검색 색인 가속 (현재 가장 큰 referral 소스)

## robots.txt 라이브 검증

robots.ts 수정 + 빌드 + push 완료 후 (5-10분 후):
```bash
curl https://www.lawnguide.co.kr/robots.txt
```

기대 출력:
```
User-Agent: *
Allow: /

Sitemap: https://www.lawnguide.co.kr/sitemap.xml
Sitemap: https://www.lawnguide.co.kr/sitemap-priority.xml
```

→ 두 Sitemap 라인 모두 출력되면 정상.

## 다음 단계

1. (사용자) GSC 에 sitemap-priority.xml 제출 — 위 3단계 진행
2. (사용자) Bing Webmaster Tools 에 동일 sitemap 제출 (선택)
3. (작업자) +2주 후 KPI 측정 결과 받아 색인율 비교
