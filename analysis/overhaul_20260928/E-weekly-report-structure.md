# E. 주간 성과 리포트 구조 제안

작성 2026-09-28 · 설계만

---

## 1. 전제 — 지금 자동화가 막혀 있는 실제 이유

| 데이터 소스 | 프로그래밍 접근 | 현재 상태 |
|---|---|---|
| GA4 (`G-DVMXWW15NR`) | Data API v1 (`google-analytics-data`) | ❌ 서비스 계정·OAuth 자격증명 없음. `scripts/` 에 GA 관련 스크립트 0개 |
| Search Console | Search Analytics API | ❌ 동일. 메모리 `project_uv_growth_levers` 에 "GSC/네이버 라이브 접근불가 → export 필요" 기록 |
| 네이버 애널리틱스 / 블로그 통계 | 공개 API 없음 | ❌ 구조적으로 자동화 불가 (수동 캡처·수기 입력만) |
| 사이트 내부 데이터 (스포크·블로그·색인대상 URL) | 로컬 파일 | ✅ 완전 자동 |
| Vercel 배포·번들 | CLI | ✅ 자동 |

**따라서 "주간 리포트 자동화"는 두 단계로 나뉩니다.**
- **1단계 (지금 가능)**: 사이트 내부 데이터 + 수동 export CSV 를 받아 리포트를 조립하는 스크립트
- **2단계 (자격증명 확보 후)**: GA4/GSC API 직결

1단계를 먼저 만들어 두면 2단계에서 데이터 수집부만 갈아끼우면 됩니다. 그래서 **아래 데이터 구조는 "CSV 로 들어오든 API 로 들어오든 같은 스키마"** 로 설계했습니다.

---

## 2. 지표 15개 분류

| # | 지표 | 소스 | 자동화 | 비고 |
|---|---|---|---|---|
| 1 | 네이버블로그 일/주간 조회수 | 네이버 블로그 통계 | ❌ 수동 | 주 1회 숫자 4개 입력 |
| 2 | 블로그 평균 체류시간 | 네이버 블로그 통계 | ❌ 수동 | 메인 노출 폭락 판정의 핵심 지표 |
| 3 | GA4 활성 사용자 | GA4 | ⚠️ CSV→API | `activeUsers` |
| 4 | Organic Social | GA4 | ⚠️ | `sessionDefaultChannelGroup` |
| 5 | Organic Search | GA4 | ⚠️ | 동일 |
| 6 | Direct | GA4 | ⚠️ | 네이버 인앱 referrer 누락분이 여기로 섞임 — UTM(B) 적용 후 Organic Social 로 이동 예상 |
| 7 | /chat 진입 수 | GA4 `chat_start` | ⚠️ | 이미 계측됨 |
| 8 | domain별 /chat 진입 | GA4 `chat_start.page_domain` | ⚠️ | 이미 계측됨 |
| 9 | 허브 클릭 상위 20 | GSC (page filter `/guide/{domain}` 정확일치) | ⚠️ CSV | |
| 10 | 스포크 클릭 상위 20 | GSC (`/guide/*/*`) | ⚠️ CSV | |
| 11 | GSC 쿼리 상위 30 | GSC Queries | ⚠️ CSV | |
| 12 | 노출 많고 클릭 낮은 페이지 | GSC 파생 (노출≥100 & CTR<1%) | ✅ 계산은 자동 | **retitle 대상 산출의 정본. A 감사와 직결** |
| 13 | 신규 색인 수 | GSC 색인 커버리지 | ❌ 수동 | 커버리지 리포트는 API 미제공 (URL Inspection 은 건당) |
| 14 | 색인 제외 URL 사유별 | GSC 커버리지 | ❌ 수동 | 동일 |
| 15 | CTA 클릭 / UTM 성과 | GA4 `cta_click` + UTM | ⚠️ | **B 작업 완료가 선행 조건** |

추가로 넣을 것을 권하는 3개 (지금 계측이 이미 되어 있어 공짜):

| # | 지표 | 소스 | 왜 |
|---|---|---|---|
| 16 | `chat_start → chat_complete` 완주율 | GA4 | 전환 병목이 진입인지 이탈인지 구분하는 유일한 지표. C 판정 기준 |
| 17 | `situation_start → situation_complete` 완주율 | GA4 | 스포크 중간 CTA 는 `/diagnosis` 로 가므로 `/chat` 만 보면 절반을 놓침 |
| 18 | `diagnosis_save` 수 | GA4 | "저장 가치" 가설의 직접 증거. D 우선순위 판정 기준 |

---

## 3. 주간 리포트 템플릿

```markdown
# LawnGuide 주간 리포트 — {YYYY-WW} ({시작}~{종료})

## 0. 한 줄 판정
{성장 / 정체 / 악화} — 근거: {가장 크게 움직인 지표 1개}

## 1. 유입
| 지표 | 이번 주 | 지난 주 | WoW | 4주 평균 |
|---|---|---|---|---|
| 네이버블로그 조회수 (주간) | | | | |
| 블로그 평균 체류시간 | | | | |
| GA4 활성 사용자 | | | | |
| Organic Search | | | | |
| Organic Social | | | | |
| Direct | | | | |

## 2. 전환 퍼널
| 단계 | 수 | 전 단계 대비 |
|---|---|---|
| 세션 | | — |
| chat_start | | |
| chat_complete | | ← 완주율 |
| situation_start | | |
| situation_complete | | |
| diagnosis_save | | |
| cta_click (expert_match) | | |

### 도메인별 /chat 진입 상위 10
| 도메인 | chat_start | chat_complete | 완주율 |

## 3. 검색 성과 (GSC)
| 지표 | 이번 주 | WoW |
|---|---|---|
| 총 노출 | | |
| 총 클릭 | | |
| 평균 CTR | | |
| 평균 게재순위 | | |

### 3-1. 허브 클릭 상위 20 / 3-2. 스포크 클릭 상위 20 / 3-3. 쿼리 상위 30

### 3-4. ⚠️ 노출 많고 클릭 낮은 페이지 (노출≥100, CTR<1%)
| URL | 노출 | 클릭 | CTR | 순위 | 조치 |
→ 이 표가 다음 주 retitle 작업지시서가 된다.

### 3-5. 카니발 의심 (같은 쿼리에 2개 이상 URL 노출)
| 쿼리 | URL 수 | 각 URL 노출/클릭 | 조치 |
→ A 감사의 정적 유사도와 GSC 실측을 교차. 여기 걸린 것만 merge 한다.

## 4. 색인
| 항목 | 수 | WoW |
|---|---|---|
| 색인됨 | | |
| 신규 색인 | | |
| 제외 — 크롤됨·색인 안 됨 | | |
| 제외 — 중복·대체 표준 선택됨 | | ← 카니발의 직접 증거 |
| 제외 — 404 | | ← 깨진 내부링크 재발 감시 |

## 5. UTM 성과 (B 적용 후)
| 채널 | 캠페인(도메인) | 세션 | chat_start | 완주 |
### 유입 상위 블로그 글 20 (utm_term)
| slug | 세션 | chat_start | 완주율 |
→ 이 표가 "어떤 블로그 글이 실제로 회수되는지" 의 정본.

## 6. 콘텐츠 재고 (자동 계산)
| 항목 | 수 |
| 스포크 총계 / 신규 / 고아(inbound=0) | |
| 깨진 내부링크 타깃 | |
| 카니발 클러스터(0.55+) / 소속 페이지 | |
| 블로그 발행 / 티스토리 발행 | |
| 판례풀 잔량 (도메인별 supreme/lower) | |

## 7. 이번 주 결정
1. …
## 8. 다음 주 작업
1. …
```

---

## 4. 항목별 취득 방법

### 수동 (주 1회, 약 10분)
1. 네이버 블로그 통계 → 조회수·체류시간·메인 노출 비중 (지표 1·2)
2. GSC → 색인 커버리지 스크린샷 또는 숫자 (지표 13·14)
3. 위 숫자를 `analysis/weekly/{YYYY-WW}/manual.json` 에 입력

```json
{
  "week": "2026-W40",
  "naver": { "views_week": 0, "avg_dwell_sec": 0, "main_exposure_pct": 0 },
  "gsc_coverage": {
    "indexed": 0, "new_indexed": 0,
    "excluded_crawled_not_indexed": 0,
    "excluded_duplicate_alternate_canonical": 0,
    "excluded_404": 0
  }
}
```

### CSV export (주 1회, 약 5분) → 2단계에서 API 로 대체
- GSC → Pages / Queries 를 각각 CSV export → `analysis/weekly/{YYYY-WW}/gsc_pages.csv`, `gsc_queries.csv`
- GSC → **Queries × Pages 교차** export (카니발 탐지용, 지표 3-5 의 원천). 이게 없으면 카니발을 실측으로 확인할 수 없습니다.
- GA4 탐색분석 → 이벤트별 CSV → `ga4_events.csv`, `ga4_channels.csv`

### 완전 자동 (스크립트)
- 지표 6번 섹션 전체 — `_audit_seo/extract_spokes.py` + `richness.py` 재사용
- 지표 12·3-5 — CSV 를 읽어 필터·조인만 하므로 계산은 100% 자동

---

## 5. 자동화 가능 여부 판정

| 단계 | 작업 | 즉시 가능 |
|---|---|---|
| 1 | `scripts/weekly_report.py` — manual.json + CSV 4개 → 리포트 MD 생성 | ✅ |
| 2 | 콘텐츠 재고 섹션 자동 계산 (스포크/고아/깨진링크/카니발/판례잔량) | ✅ |
| 3 | 지표 12·3-5 파생 계산 | ✅ (CSV 가 들어오면) |
| 4 | WoW·4주평균 — 지난 주 산출물 JSON 을 읽어 비교 | ✅ (2주차부터 의미 생김) |
| 5 | GA4 Data API 직결 | ❌ 서비스 계정 JSON 필요 (사용자 발급) |
| 6 | GSC Search Analytics API 직결 | ❌ 동일. **커버리지(13·14)는 API 자체가 없어 영구 수동** |
| 7 | 네이버 통계 | ❌ 영구 수동 |

**현실적 목표**: 수동 입력 항목을 3개(네이버 3숫자 + 커버리지 5숫자 + CSV 4개 저장)로 고정하고, 나머지 전부 스크립트. 주당 15분.

---

## 6. dashboard 로 확장할 때 필요한 데이터 구조

주차별 단일 JSON 을 append-only 로 쌓습니다. 이 스키마만 지키면 나중에 어떤 시각화든 붙습니다.

```
analysis/weekly/
  2026-W40/
    manual.json          ← 수동 입력
    gsc_pages.csv        ← export 원본 보존
    gsc_queries.csv
    gsc_query_page.csv
    ga4_events.csv
    ga4_channels.csv
    metrics.json         ← ★ 스크립트 산출 정규화 결과 (dashboard 의 단일 진실)
    REPORT.md            ← 사람이 읽는 산출물
  metrics_history.jsonl  ← ★ metrics.json 을 주차별로 한 줄씩 append
```

### `metrics.json` 스키마

```json
{
  "week": "2026-W40",
  "period": { "start": "2026-09-28", "end": "2026-10-04" },

  "traffic": {
    "naver_blog_views": 0,
    "naver_avg_dwell_sec": 0,
    "naver_main_exposure_pct": 0,
    "ga4_active_users": 0,
    "channels": { "organic_search": 0, "organic_social": 0, "direct": 0, "referral": 0 }
  },

  "funnel": {
    "sessions": 0,
    "chat_start": 0, "chat_complete": 0,
    "situation_start": 0, "situation_complete": 0,
    "diagnosis_save": 0, "diagnosis_share": 0,
    "cta_click": { "guide_mid": 0, "guide_bottom": 0, "result_bottom": 0, "chat_entry_example": 0 },
    "expert_modal_view": 0, "expert_waitlist_click": 0,
    "by_domain": { "wage": { "chat_start": 0, "chat_complete": 0 } }
  },

  "search": {
    "impressions": 0, "clicks": 0, "ctr": 0.0, "avg_position": 0.0,
    "top_hubs":   [ { "url": "", "clicks": 0, "impressions": 0, "ctr": 0.0, "position": 0.0 } ],
    "top_spokes": [ { "url": "", "clicks": 0, "impressions": 0, "ctr": 0.0, "position": 0.0 } ],
    "top_queries":[ { "query": "", "clicks": 0, "impressions": 0, "ctr": 0.0, "position": 0.0 } ],
    "high_impression_low_ctr": [ { "url": "", "impressions": 0, "ctr": 0.0, "action": "retitle" } ],
    "cannibal_observed": [ { "query": "", "urls": [ { "url": "", "impressions": 0, "clicks": 0 } ] } ]
  },

  "index": {
    "indexed": 0, "new_indexed": 0,
    "excluded": { "crawled_not_indexed": 0, "duplicate_alternate_canonical": 0, "not_found_404": 0, "other": 0 }
  },

  "utm": {
    "by_channel":  { "naverblog": { "sessions": 0, "chat_start": 0, "chat_complete": 0 } },
    "by_campaign": { "wage": { "sessions": 0, "chat_start": 0 } },
    "by_post":     [ { "slug": "", "sessions": 0, "chat_start": 0, "chat_complete": 0 } ],
    "by_placement":{ "body_end_a": { "sessions": 0 } }
  },

  "inventory": {
    "spokes_total": 0, "spokes_new": 0, "spokes_orphan": 0,
    "broken_link_targets": 0,
    "cannibal_clusters": 0, "cannibal_pages": 0,
    "blog_published": 0, "tistory_published": 0,
    "case_pool": { "defamation": { "supreme": 0, "lower": 0 } }
  },

  "build": { "function_bundle_mb": 0.0, "largest_chunk_mb": 0.0, "ssg_pages": 0 }
}
```

### 설계 근거
- **`metrics_history.jsonl`** 이 대시보드의 유일한 입력. 주차 단위 1줄이면 1년에 52줄 → 파일 하나를 그대로 프런트에서 fetch 해도 됩니다. DB 불필요.
- **CSV 원본을 지우지 않습니다.** 지표 정의를 나중에 바꿀 때(예: 노출 임계값 100→50) 과거 주차를 재계산할 수 있어야 하기 때문입니다.
- **`inventory` 를 리포트에 넣는 이유**: 유입·전환이 나빠졌을 때 "콘텐츠를 잘못 만들어서"인지 "알고리즘 변동"인지 구분하려면 같은 주의 재고 상태가 옆에 있어야 합니다. 5/15 폭락 때 이 열이 없어서 원인 추정에 그쳤습니다.
- **`build`** 열은 CLAUDE.md 의 함수 번들 250MB 모니터링 트리거를 주간 리포트가 대신 감시하게 만듭니다 (현재는 수동 점검).
- **PII**: `by_post` 는 우리 slug, `by_domain` 은 도메인 id 뿐. 사용자 입력·질의 원문은 어디에도 넣지 않습니다.

### 대시보드 만들 때
`/admin/metrics` 같은 라우트를 만들 경우 **`metrics_history.jsonl` 을 `web/public/` 에 복사해 정적 fetch** 하십시오. `web/src/` 에서 `fs.readFileSync` 로 읽으면 CLAUDE.md 가 금지한 NFT 패턴을 또 만듭니다. 그리고 이 데이터는 공개돼도 무해한 집계값이지만, 공개가 싫으면 `web/` 밖에 두고 로컬 전용 HTML 로 보는 쪽이 안전합니다.
