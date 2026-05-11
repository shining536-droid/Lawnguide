# 노동 hub 설계안 (2026-05-11)

> ⚠️ 본 문서는 설계안 검토용. 코드 변경·hub 페이지 생성·내부링크 변경 모두 진행하지 않음. 5/15 측정 후 결정.

## 배경

현재 사이트 구조:
- /guide/{domain} 형태로 28개 도메인 hub 존재 (jeonse, dismissal, wage, retirement, unemployment, ...)
- 도메인 간 cross-link 산발적
- 노동 카테고리(고용·임금·해고·실업·퇴직·산재 등)는 분산되어 있어 사용자 입장에서 "노동 문제 = 어디부터?" 진입점 모호
- 노무사 슬롯 매출화(9월 시범 모집) 대비 노동 클러스터 인덱스화 필요성

## 1. /guide/labor 신규 hub 생성안

### 라우팅 부담
- 기존 `[domain]` 라우트가 `DOMAINS` 배열에 의존 → `labor` 도메인 추가만으로는 자동 라우팅 안 됨
- `labor` 는 메타 도메인(meta-domain)이라 별도 `web/src/app/guide/labor/page.tsx` 필요
- 또는 일반 도메인 패턴에 가짜 도메인으로 등록 → 다른 hub 와 형평성 어긋날 위험

### sitemap·canonical 영향
- sitemap 에 `/guide/labor` 1 URL 추가
- canonical `https://www.lawnguide.co.kr/guide/labor` 신규
- 기존 노동 도메인 hub(/guide/dismissal 등) canonical 영향 없음
- robots index 가능, sitemap priority 0.7 (다른 hub 와 동일)

### 다른 도메인 hub 와 형평성
- 노동만 메타 hub 가 있으면 비노동(이혼·사기·전세 등) 도메인 사용자 입장에서 "왜 노동만?" 의문
- 해결: `/guide/family`, `/guide/property`, `/guide/criminal` 등 메타 hub 군 동시 도입 → 라우팅·콘텐츠 부담 4배
- 또는 노동만 특수 케이스로 두기

## 2. 기존 도메인 hub 활용안

### 강화 대상
- /guide/dismissal · /guide/wage · /guide/retirement · /guide/unemployment · /guide/industrial-accident1 · /guide/industrial-accident2

### 활용 방법
- 각 도메인 hub 상단에 "노동 문제 전체 탐색" 가로 메뉴 (다른 노동 도메인 6개로 cross-link)
- 도메인 hub 내 인기 스포크 3~5개 카드형 노출
- 도메인 hub footer 에 "노무사 무료 상담 신청" CTA (9월 노무사 슬롯 매출화 연동)

### 장점
- 코드 변경 최소 (각 hub 페이지에 cross-link 섹션만 추가)
- 라우팅 부담 없음
- sitemap 변경 없음
- 형평성 문제 없음 (기존 hub 강화 형태)

### 단점
- "노동" 통합 검색어("노동 문제", "노동법 상담") 캡처 어려움
- 사용자 입장 진입점 모호 (어느 도메인 hub 로 들어가야 할지)

## 3. SEO·개발 부담 비교 + 권장안

| 항목 | 신규 /guide/labor hub | 기존 hub 강화 |
|------|----------------------|---------------|
| SEO 효과 | "노동" 통합 검색어 캡처 가능 | 기존 도메인별 검색어 강화 |
| 개발 부담 | 신규 페이지 1개 + DOMAINS 처리 분기 | 기존 hub 6개 컴포넌트 수정 |
| 콘텐츠 부담 | hub 페이지 신규 작성 | 기존 hub 강화 컨텐츠 |
| 위험 | 메타 hub 형평성 논쟁 | 낮음 |
| 노무사 매출화 | hub 단위 광고 슬롯 가능 | 도메인별 분산 |
| 5/15 측정 변수 | 큰 구조 변경, 측정 변수 오염 | 영향 없음 |

### 권장안 (5/15 이후 재검토)
- **단기 (5/15 측정 후)**: 기존 hub 강화 — 6개 노동 hub 에 cross-link 가로 메뉴 + 노무사 CTA 슬롯 추가
- **중기 (6월 이후 GSC 데이터 충분)**: "노동 문제" 통합 검색어 노출이 의미 있으면 그때 /guide/labor 신규 hub 추가 검토
- **메타 hub 형평성**: /guide/labor 만 도입할 수 없다는 점은 5/15 이후 결정 시점에 다시 논의

## 4. hub 생성 시 영향 (참고용, 실제 진행 아님)

### sitemap 영향
- 1 URL 추가 (`/guide/labor`, priority 0.7)
- 변경 영향 미미

### canonical 영향
- 신규 canonical 1개
- 노동 도메인 hub canonical 변경 없음

### 내부 링크 변경 범위
- 모든 노동 도메인 스포크(약 600~800개)의 `internalLinks` 에 `/guide/labor` 추가 시 600~800 파일 변경
- 작업량 크지만 자동화 가능
- C-1a 같은 dead link 정리와 동시 진행 가능

### 비-노동 도메인 영향
- 비-노동 스포크(약 1,200개)의 internalLinks 에 영향 없음

## 5. 노무사 슬롯 매출화 연결 가능성

### 기여 시나리오 1: 변호사 vs 노무사 슬롯 분리
- 기존 /guide/{domain} hub 에는 변호사 슬롯 (현재 운영)
- /guide/labor 메타 hub 에 노무사 슬롯 별도 노출
- 사용자 의도 분리: "변호사 상담"(법적 다툼) vs "노무사 상담"(체계적 신고/구제)

### 기여 시나리오 2: 도메인별 노무사 슬롯
- /guide/wage, /guide/dismissal 등 도메인 hub 각각 하단에 노무사 슬롯
- 메타 hub 없이 도메인별 슬롯 운영
- 9월 시범 모집 → 6개 도메인에 분산 → 슬롯 단가 낮을 수 있음

### 시범 모집 활용 방안
- **9월 시범**: 도메인 hub 강화 안에서 진행 (위험 낮음)
- 노무사 측 노출 데이터·전환율 측정 후 메타 hub 도입 ROI 평가
- 메타 hub 도입 시점은 9월 데이터 확보 후 (10~11월)

## 권장 결정

| 옵션 | 권장도 | 시기 |
|------|---------|------|
| 기존 hub 강화 (cross-link + 노무사 CTA) | **권장** | 5/15 측정 후 즉시 |
| /guide/labor 메타 hub 신규 생성 | 보류 | 6월 이후 GSC 데이터 평가 |
| 메타 hub 군 동시 도입 (family/property/criminal) | 보류 | 9월 노무사 데이터 평가 후 |

### 핵심 근거
- 5/15 측정 변수 통제: 큰 구조 변경 회피
- 위험 낮은 ROI 우선
- 노무사 시범 모집 단계에서는 기존 인프라 활용이 효율적
- 메타 hub 형평성 문제는 GSC 데이터로 결정 우선
