# B. GSC 색인 정체 진단

생성일: 2026-05-21
현황: 색인 1.19천 / 미색인 1.08천 / 발견됨-현재 색인이 생성되지 않음 795개

## 데이터 상태

❌ **로컬에 GSC export 없음.** 본 리포트는 (1) 가설 + (2) 사용자가 export 해줄 항목 + (3) 로컬에서 추정 가능한 패턴을 작성.

## 1) 필요한 GSC Export 항목

GSC → 색인 → 페이지 → 색인이 생성되지 않은 페이지 → 각 사유별 우측 상단 export 버튼.

| 파일명 | GSC 경로 | 우선순위 |
|--------|----------|----------|
| `gsc_discovered_not_indexed_795.csv` | 페이지 > 발견됨 - 현재 색인이 생성되지 않음 | **HIGH** (795개 가장 큼) |
| `gsc_crawled_not_indexed.csv` | 페이지 > 크롤링됨 - 현재 색인이 생성되지 않음 | HIGH |
| `gsc_redirect_error.csv` | 페이지 > 리디렉션 오류 | MED |
| `gsc_404.csv` | 페이지 > 찾을 수 없음(404) | MED |
| `gsc_alternate_with_canonical.csv` | 페이지 > 대체 페이지 (적절한 표준 태그 있음) | LOW |
| `gsc_sitemap_status.csv` | Sitemaps > 각 sitemap 상태 | LOW |
| `gsc_crawl_stats_total.png` | 설정 > 크롤링 통계 → 호스트 상태 (이미지 캡처) | MED |
| `gsc_crawl_stats_response.png` | 설정 > 크롤링 통계 → 응답 (200/3xx/4xx/5xx 분포) | MED |

→ 보관 경로: `C:\Users\shini\easylaw-scraper\analysis\gsc-exports\` 권장

## 2) 가설 (export 도착 후 검증)

### H1. /spoke 구 URL 잔존 가능성
- 2026-04-21 audit 에서 87개 스포크 제거 + 22개 redirect 완료 (next.config.js).
- redirect 가 308 이어서 Google 이 redirect chain 으로 재색인 지연 가능.
- 검증: 발견됨 export 의 URL 패턴이 `/guide/{domain}/{old-slug}` 인지 확인.

### H2. 신규 스포크 색인 대기열 (가장 큼)
- 5/19~5/21 사이 batch69, batch70, batch71 로 120 페이지 추가 (40×3일).
- 신규 페이지는 Google 이 크롤 → 발견 → 색인까지 1~4주 걸리는 영역.
- 발견됨 795개 중 다수가 batch63 이후 신규 스포크일 가능성 높음.

### H3. 카니발리제이션 잔재
- audit-cannibalization.md, audit-near-duplicates.md 가 로컬에 존재 (4/21 작성).
- 60~85% 유사 93쌍 중 16개만 301, 나머지는 유지.
- Google 이 "충분히 다르지 않다" 평가로 색인 보류 가능.

### H4. 내부링크 부족
- broken_internal_links_report.csv 에 1,921 dead internal links 있음.
- Google 은 내부링크 신호로 PageRank 분배 → dead link 가 많으면 신규 페이지로 권한 전달 약함.
- 발견됨 페이지 중 내부링크 0~1개 페이지 비율 추정 필요.

### H5. 본문 얇음
- 일부 구버전 스포크 (batch 1~30) 본문이 800~1,500자 수준.
- Google 의 "Helpful Content" 평가에서 신선도·깊이·유일성 약함.

## 3) 로컬에서 가능한 추정

### 3-1. 스포크 슬러그 풀 현황
- 전체 SPOKE_PAGES: 2,319개 (web/src/data/spoke/*.ts grep 결과)
- 사이트맵 자동 생성 URL (sitemap.ts): 
  - home 1 + guide hub 29 + spoke 2,319 = **2,349 URLs**
- GSC 색인 1,190 vs 사이트맵 2,349 → 색인율 약 50.7%
- 발견됨 795 추가 색인 시 1,985 / 2,349 = 84.5% 도달

### 3-2. 카니발 후보 (audit-cannibalization.md 기반)
근접중복 27쌍 + 60~85% 93쌍 중 미정리 분이 색인 정체 원인 가능.
구체적인 미색인 URL 매칭은 GSC export 도착 후 진행.

### 3-3. broken_internal_links_report.csv 분석
- 총 1,921개 dead internal links
- source_gsc_impressions / clicks 컬럼은 비어 있음 (GSC 조인 미수행)
- 도메인별 dead link 분포 (아래 표 D 파트 참조)

## 4) 우선 처리 그룹 (가설)

GSC export 도착 전 잠정 권장 :

1. **신규 스포크 (batch65~71)** - priority sitemap 으로 우선 노출 → C 파트
2. **노동 핵심 hub** (실업급여, 퇴직금, 부당해고, 임금) - 메인 hub 페이지 우선
3. **비노동 핵심 hub** (전세, 교통사고, 명예훼손, 스토킹, 이혼, 양육비)
4. **카니발 정리 대기 27쌍** - 노출 100회 이상 키워드 나올 때 정리 (CLAUDE.md PENDING)

## 5) 다음 액션 (export 도착 후)

1. discovered-not-indexed 795 URLs 패턴 분류 (스포크 vs 블로그 vs 기타)
2. 각 URL 의 status code / canonical / 내부링크 count 자동 점검
3. URL 별 추천 조치 라벨링 (`keep / priority / rewrite / merge / remove_from_sitemap / redirect / noindex_candidate`)
4. priority sitemap 에 포함된 URL 이 미색인이면 GSC URL 검사 도구로 1건씩 재크롤 요청

## 결론

GSC export 7개 파일 필요. 도착 시 본 리포트 채워서 재제출.
