# A. GA4 유입 감소 진단

생성일: 2026-05-21
대상 기간: 5/18 (고점) vs 5/19~5/20 (감소)

## 데이터 상태

❌ **로컬에 GA4 export 없음.** 본 리포트는 분석 프레임만 제공하며, 사용자가 아래 export 후 다시 분석 요청 시 가능.

## 필요한 GA4 Export 항목 (정확히 4 종)

### 1) source/medium 비교 export (5/18 vs 5/19~5/20)
GA4 → 보고서 → 획득 → 트래픽 획득 → 비교 두 기간 추가

지표 열 (반드시 포함):
- sessions
- active_users (또는 total_users)
- engaged_sessions
- engagement_rate
- average_engagement_time_per_session
- event_count
- conversions / key_events
- session_key_event_rate (or session_conversion_rate)

행 필터 (다음 6개 source/medium 만):
- `m.search.naver.com / referral`
- `naver / organic`
- `bing / organic`
- `chatgpt.com / referral`
- `chatgpt.com / (not set)`
- `(direct) / (none)`

출력 파일명: `ga4_source_medium_compare_20260518_vs_20260519_20.csv`

### 2) m.search.naver.com / referral 랜딩 페이지 TOP 20 (5/18)
탐색 → 자유 형식 → 행: landing_page+query_string / 필터: session_source_medium = m.search.naver.com / referral / 기간: 2026-05-18

지표: sessions / engaged_sessions / engagement_rate / avg_engagement_time / event_count

### 3) m.search.naver.com / referral 랜딩 페이지 TOP 20 (5/19~5/20)
동일 설정, 기간만 변경.

→ 두 파일 병합해 `ga4_landing_page_compare_naver_mobile.csv` 생성. 일평균 계산.

### 4) naver / organic, bing / organic 랜딩 페이지 TOP 10 (각 기간별 4개 view)
동일 패턴, source/medium 만 교체.

## 진단 프레임 (export 도착 후 적용)

### Q1. 감소의 주원인 source/medium
- 5/18 sessions vs 5/19~5/20 일평균 sessions 비교
- 감소량 큰 순서로 정렬
- 가설: m.search.naver.com 모바일 검색 약화 vs naver organic 약화 vs Bing 정체

### Q2. 특정 랜딩페이지 이탈 여부 vs 전반 동반 감소
- TOP 20 랜딩페이지의 5/18 vs 5/19~20 일평균 비교
- 단일 페이지 -50%↓ 1~3개 있으면 "특정 페이지 이탈"
- TOP 20 전체가 -20%~-30% 균일 감소면 "검색 알고리즘 / 노출 감소"

### Q3. 네이버 모바일 검색 전체 약화 여부
- m.search.naver.com / referral 의 sessions + active_users 비율 변화
- 메인_홈판 노출 폭락 (5/15) 후 진행형인지 확인
- CLAUDE.md 의 5/15 사고 컨텍스트 ([[project_naver_main_drop_2026_05_15]] memory) 와 결합 해석

### Q4. Bing 증가 여부
- bing / organic sessions 변화
- 증가했다면 chunk 다양화 효과 + 5/15 이후 Bing 보완 트렌드

### Q5. AI referral 비중
- chatgpt.com / referral + chatgpt.com / (not set) 합계 변화
- 전체 sessions 대비 비율
- AI 검색 유입 변동 모니터링 (장기 트렌드)

### Q6. 다음 액션 추천 (조건부)
- 특정 페이지 이탈 → 해당 페이지 본문 보강·CTA 위치·OG 카드 점검
- 전반 약화 → 네이버 메인 노출 회복까지 시간 + 검색 다양화 (5/16~ 시범 25개 정책 유지)
- Bing 증가 → 영어/구글 색인 강화 (priority sitemap C 파트)

## 결론

데이터 도착 시 본 리포트 채워서 재제출. export 위치는 사용자 환경 (Windows / GA4 dashboard).
