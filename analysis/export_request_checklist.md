# Export 요청 체크리스트 (GA4 / GSC / Vercel)

작성일: 2026-05-21
용도: Phase 2 A·B·E 리포트 완성을 위한 사용자 export 가이드

---

## 1) GA4 Export (5개 파일)

### 1-1) source/medium 비교
- **목적**: 5/18 고점 vs 5/19~5/20 감소 채널별 진단
- **GA4 경로**: 보고서 → 획득 → 트래픽 획득
- **기간 비교**: 기간 A 2026-05-18 / 기간 B 2026-05-19~2026-05-20
- **dimensions**: session source / medium
- **metrics**:
  - sessions
  - active_users
  - engaged_sessions
  - engagement_rate
  - average_engagement_time_per_session
  - event_count
  - key_events (가능하면)
  - session_key_event_rate (가능하면)
- **filter**: source/medium IN
  - `m.search.naver.com / referral`
  - `naver / organic`
  - `bing / organic`
  - `chatgpt.com / referral`
  - `chatgpt.com / (not set)`
  - `(direct) / (none)`
- **출력 파일**: `ga4_source_medium_compare_20260518_vs_20260519_20.csv`

### 1-2) m.search.naver.com / referral 랜딩페이지 TOP 20
- **목적**: 네이버 모바일 referral 가장 큰 채널의 페이지별 추세
- **기간 A**: 2026-05-18 / **기간 B**: 2026-05-19~2026-05-20
- **dimensions**: landing page + query string
- **filter**: session source/medium = `m.search.naver.com / referral`
- **metrics**: sessions / active_users / engaged_sessions / engagement_rate / avg_engagement_time / event_count
- **출력 파일**: `ga4_landing_naver_mobile_TOP20.csv`

### 1-3) naver / organic 랜딩페이지 TOP 20
- 동일 패턴 (1-2 와 동일 metrics)
- filter: `naver / organic`
- **출력**: `ga4_landing_naver_organic_TOP20.csv`

### 1-4) bing / organic 랜딩페이지 TOP 20
- filter: `bing / organic`
- **출력**: `ga4_landing_bing_organic_TOP20.csv`

### 1-5) chatgpt.com referral 랜딩페이지 TOP 20
- filter: `chatgpt.com / referral` OR `chatgpt.com / (not set)`
- **출력**: `ga4_landing_chatgpt_referral_TOP20.csv`

→ 보관 권장: `C:\Users\shini\easylaw-scraper\analysis\ga4-exports\`

---

## 2) GSC Export (8개 파일)

### 2-1) 페이지 색인 상태 export (CSV)
GSC → 색인 → 페이지 → 좌하단 "색인이 생성되지 않은 이유" 클릭 → 각 사유별 우상단 export

| 파일명 | GSC 경로 | 우선순위 |
|--------|----------|----------|
| `gsc_discovered_not_indexed_795.csv` | 발견됨 - 현재 색인이 생성되지 않음 | **HIGH** |
| `gsc_crawled_not_indexed.csv` | 크롤링됨 - 현재 색인이 생성되지 않음 | HIGH |
| `gsc_redirect_page.csv` | 페이지에 리디렉션이 있음 | MED |
| `gsc_redirect_error.csv` | 리디렉션 오류 | MED |
| `gsc_404.csv` | 찾을 수 없음 (404) | MED |
| `gsc_alternate_canonical.csv` | 대체 페이지 (적절한 표준 태그 있음) | LOW |
| `gsc_duplicate_canonical_chosen.csv` | 중복 (Google 이 선택한 표준 태그가 사용자와 다름) | MED |

### 2-2) Sitemap 제출 현황
GSC → 색인 → Sitemaps → 우상단 export 또는 화면 캡처

- 각 sitemap 의 "검색됨", "마지막 읽음", "발견된 URL" 표시
- **출력**: `gsc_sitemaps_status.csv` 또는 `gsc_sitemaps_status.png`

### 2-3) 크롤링 통계 캡처
GSC → 설정 → 크롤링 통계 → 다음 4개 화면 캡처

| 캡처 | 항목 |
|------|------|
| `gsc_crawl_host_status.png` | 호스트 상태 (DNS / 서버 연결 / robots.txt 가져오기) |
| `gsc_crawl_total_requests.png` | 총 크롤링 요청 수 (5/1~5/21 추이) |
| `gsc_crawl_response_codes.png` | 응답 (200 / 301 / 404 / 5xx 분포) |
| `gsc_crawl_googlebot_type.png` | Googlebot 유형 (스마트폰 / 데스크톱 / 이미지 / 동영상) |

→ 보관 권장: `C:\Users\shini\easylaw-scraper\analysis\gsc-exports\`

---

## 3) Vercel Export (2개 파일 + 캡처)

### 3-1) Usage 추이 (5/1~5/21)
Vercel Dashboard → Project: lawnguide → Usage 탭 → 각 metric 우상단 export 또는 화면 캡처

| Metric | 무료 한도 | Pro 한도 | 캡처 우선순위 |
|--------|----------|----------|---------------|
| ISR Reads | 1M | 10M | **HIGH** |
| ISR Writes | 1M | 10M | HIGH |
| Edge Requests | 1M | 10M | HIGH |
| Function Invocations | 1M | 1M+overages | MED |
| Function Duration | - | - | MED |
| Function CPU | - | - | LOW |
| Fast Data Transfer | 100GB | 1TB | MED |
| Image Optimization | 1K | 10K | LOW |

→ 캡처 파일: `vercel_usage_metric_name.png` (예: `vercel_usage_isr_reads.png`)

### 3-2) Logs 분석
Vercel Dashboard → Project → Logs → Filter

| 필터 | 확인 목적 | 출력 |
|------|----------|------|
| status:200, sort by count desc | Top 20 most-requested URLs | `vercel_logs_top_200.csv` |
| status:404, sort by count desc | 반복 404 URL (낭비 요청 식별) | `vercel_logs_top_404.csv` |
| status:301 OR status:308 | redirect chain 확인 | `vercel_logs_top_redirect.csv` |
| status:500 OR status:502 OR status:503 | 서버 오류 추세 | `vercel_logs_5xx.csv` |

### 3-3) User-Agent 분포
Vercel Logs → Edge Requests → group by user-agent

| User-Agent 패턴 | 추정 비중 캡처 |
|----------------|--------------|
| Googlebot / Mediapartners-Google | ? |
| naverbot / Yeti | ? |
| Bingbot | ? |
| GPTBot (OpenAI) | ? |
| ClaudeBot (Anthropic) | ? |
| PerplexityBot | ? |
| Copilot (Microsoft) | ? |
| 일반 브라우저 (Chrome / Safari / Edge) | ? |

→ 출력: `vercel_user_agent_distribution.csv` 또는 화면 캡처

→ 보관 권장: `C:\Users\shini\easylaw-scraper\analysis\vercel-exports\`

---

## 4) Export 도착 후 작업 흐름

1. 사용자 export → `analysis/{ga4|gsc|vercel}-exports/` 폴더에 저장
2. 작업자에게 "5/21 Phase 2 export 도착, A·B·E 재제출 요청" 알림
3. 작업자가 export 파싱 + 다음 리포트 업데이트:
   - `analysis/A-ga4-traffic-diagnosis.md` (5/20 감소 주원인 확정)
   - `analysis/B-gsc-index-diagnosis.md` (795 미색인 패턴 분류 + 추천 조치)
   - `analysis/E-vercel-usage-diagnosis.md` (ISR Reads 실측 + revalidate 결정)
4. 신규 리포트:
   - `analysis/F-final-traffic-recovery-plan.md` (3주 회복 플랜)

## 5) 우선순위

| 우선순위 | 파일 | 이유 |
|---------|------|------|
| 🔴 즉시 | gsc_discovered_not_indexed_795.csv | 색인 회복 핵심 |
| 🔴 즉시 | gsc_crawled_not_indexed.csv | 색인 회복 핵심 |
| 🟡 1주 | ga4_source_medium_compare_*.csv | 5/20 감소 진단 |
| 🟡 1주 | ga4_landing_naver_mobile_TOP20.csv | 네이버 모바일 특정 페이지 진단 |
| 🟢 2주 | vercel_usage_*.png + logs_*.csv | 비용 리스크 |
| 🟢 2주 | 그 외 GSC / GA4 부속 | 상세 패턴 |
