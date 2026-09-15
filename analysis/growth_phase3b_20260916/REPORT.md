# Growth Phase 3B-0 + 3B — 계측 보강 · 게시일 정비 · 기존 페이지 리프레시 무작위 실험

- 실행: 2026-09-16, branch `main`, 시작 HEAD `5d4ee2b`
- 입력: Phase 3A 동결 산출물(`audit/growth_phase3a_20260916_0657/`) + 사용자 제공 GA4 Naver 세션(2026-08-19~09-15 / 07-22~08-18)
- 원칙: 신규 스포크 생성 없음, 대량 생산 재개 없음, 무관한 워킹트리 변경 보존, explicit staging만 사용

---

## 1. PHASE 3B-0A — /diagnosis 계측 사각지대

**근본 원인**: 모든 스포크의 중간 CTA 가 `/diagnosis/{domain}` 로 가는데, 그 흐름(`DiagnosisFlow` → `ResultCard`)에 GA4 이벤트가 하나도 없었다. `chat_start`/`chat_complete` 는 `/chat` 전용이라 `/diagnosis` 전환은 구조적으로 0으로 집계됐다. `/diagnosis` 로만 유도하는 페이지(sale-contract-essential-clauses, assault-first-offense-penalty)의 "low intent" 판정에는 이 측정 착시가 섞여 있었다.

**이름 결정**: 기존 `diagnosis_save`/`diagnosis_share` 가 이미 **/chat 결과카드** 이벤트라서, 같은 접두사를 피해 사용자 결정대로 **`situation_start` / `situation_complete`** 로 분리했다. 기존 8개 이벤트는 이름·파라미터 모두 그대로 두었다(빌드 산출물에서 8개 전부 잔존 확인).

**트리거와 가드**
| 이벤트 | 트리거 | 가드 |
|---|---|---|
| `situation_start` | 첫 질문에 **실제로 답을 선택**한 시점(`handleSelect`, `handleMultiSelectConfirm`) | `startFired` ref |
| `situation_complete` | flow 가 결과 상태에 도달(`finished` + 결과 확정) 후 `useEffect` | `completeFired` ref |

**로컬 실기 검증** (프로덕션 빌드 + `next start`, `window.gtag` 를 레코더로 대체해 네트워크 전송 없이 호출만 수집)

| 검증 항목 | 결과 |
|---|---|
| 질문 10개 순차 응답(객관식 9 + 멀티셀렉트 1) | `situation_start` **정확히 1회** |
| 멀티셀렉트 "다음"(두 번째 발사 지점) | 중복 **0** |
| 결과 상태 도달 | `situation_complete` **정확히 1회** |
| 리렌더 강제(resize×2, details 토글, textarea 입력) | 추가 발사 **0** |
| start 페이로드 | `guide_domain`, `entry_surface=diagnosis_route`, `page_path` |
| complete 페이로드 | 위 3개 + `result_type_id=TYPE_STANDARD`, `risk_level=other` |
| PII | 선택 조합·자유입력·결과 문구 **미전송**. `risk_level` 은 화이트리스트 밖이라 `other` 로 정규화됨 |

상세: `ANALYTICS_EVENTS.md`

---

## 2. PHASE 3B-0B — Article 날짜

**근본 원인**: `app/guide/[domain]/[slug]/page.tsx` 에 `datePublished: '2026-04-01'`, `dateModified: '2026-04-17'` 이 하드코딩돼 5,188개가 같은 값을 내보냈다.

**권위 있는 소스 존재 → Rule A 적용**: `sitemap-lastmod-generated.ts` 의 `SPOKE_LASTMOD`(스포크 소스파일 최초 커밋일 = 발행일). 이미 sitemap `lastmod` 정본이고, 저장소의 발행 방식(커밋 → 배포)이 이를 뒷받침한다. mtime·오늘 날짜·빌드일은 쓰지 않았고, 근거가 없으면 **필드를 생략**하도록 했다.

`dateModified` 는 신설 맵 `SPOKE_MODIFIED` 에서만 온다. 실질 개편이 있었던 페이지만 등재하며, 5,188개 일괄 갱신은 하지 않았다.

**검증**(빌드 산출물): 처치 페이지 `datePublished 2026-04-08 / dateModified 2026-09-16`, 대조 페이지 `2026-04-11 / 2026-04-11`, 표본 페이지들이 `2026-04-12 / 2026-04-11 / 2026-04-01 / 2026-03-10` 로 서로 다름(하드코딩 해소 확인).

한계: 처치군만 `dateModified` 가 갱신되므로 **신선도 신호가 처치와 얽힌다**(동반 개입). `ARTICLE_DATE_AUDIT.md` §4, `OUTCOME_PREREGISTRATION.md` §5에 기록.

---

## 3. PHASE 3B-0C — 표본·매칭·배정

| 단계 | 수 |
|---|---|
| GA4 제공 행 | 56 |
| 적격 | 55 (제외 1: `wage/wage-night-work-50-percent-extra` — 52세션/활성 2명 이상치) |
| 선정 | 40 (현재 Naver 세션 상위 40, 사전 지정 규칙) |
| 페어 | 20 |
| 처치 / 대조 | 20 / 20 |
| 발행일 범위 | 2026-03-13 ~ 2026-04-28 (전원 3~4월 코호트, 완화 불필요) |
| Naver 회수 실험과 중복 | 0건 (그 실험은 배정 0) |

**선정 규칙 변경 고지**: 최초 설계("매칭비용 최저 20페어")는 트래픽 상위 페이지(207·191·173·128·127·109 세션)를 전부 탈락시켜 검정력을 훼손했다. 그래서 "적격 상위 40 선정 후 그 안에서 매칭"으로 바꿨고, **배정 결과를 보기 전에** 변경했다. `MATCHING_BALANCE.md`

**균형**: 현재세션 T 70.75 / C 73.05, 직전 T 65.75 / C 67.55, pretrend T 0.065 / C 0.073. SMD 는 세 지표 모두 |0.05| 미만. 양쪽 arm 모두 상승·하락 혼재(T 12/8, C 13/7). 재무작위화 기준 미해당 → 재배정 없음.

---

## 4. 처치 전달 결과

20/20 전달, `treatment_not_delivered = 0`.

| 구성요소 | 전달 |
|---|---|
| A. H1 질문형 전환 | **20/20** (meta title 은 전부 불변. H1=`keyword`, title=`meta.title` 로 필드가 분리돼 있어 리팩터링 불필요) |
| B. 판단표 | **20/20** (기존 `comparison` 스키마 필드 사용 → 템플릿 변경 없음. 페이지마다 다른 분기 내용) |
| C. 공식 출처 링크 | 20/20, 페이지당 2~3개 (전부 응답 확인한 URL만 사용) |
| D. 검증된 사실 정정 | **3건 / 2페이지** (P04 2건, P07 1건). 나머지는 권위 출처 확인 실패로 **손대지 않음** |
| E. 문맥 내부링크 | **60개 = 20페이지 × 3** (도너 55개, 도너 중 T/C 포함 0, 한 도너 최대 2회) |

**의도적으로 하지 않은 것**: 2026년 구직급여 상·하한액 갱신. 고용보험 공식 안내(ei.go.kr)와 고용노동부 상담센터는 66,000원으로 안내하고, 68,100원/66,048원은 블로그에만 있었다. 확인되지 않은 숫자를 쓰지 않았고, 대신 "공식 안내 기준 + 연도별 확인" 문장과 모의계산 링크로 바꿨다. 페이지별 미전달 사유는 `TREATMENT_QA.csv` 에 기록.

**확인된 출처**: 국가법령정보센터(고용보험법·근로기준법·근로자퇴직급여 보장법·자동차손해배상 보장법·민법·채무자회생법·도로교통법), 고용보험 실업급여 안내/모의계산, 중앙노동위원회, 근로복지공단, 고용노동부 2026 최저임금 고시(제2025-47호, 시간급 10,320원), 한국국토정보공사, 신용회복위원회, 국토교통부 실거래가, 대한법률구조공단, 금융감독원.

---

## 5. 동결 변수 확인

| 항목 | 상태 |
|---|---|
| URL / slug | 불변 |
| canonical | 불변 (빌드 산출물 확인) |
| robots / noindex | 불변 |
| meta title / description | 불변 |
| CTA 문구·개수·위치·목적지 | 불변 |
| 공통 템플릿(page.tsx 레이아웃) | 불변 (날짜 필드 외 변경 없음) |
| 도메인 공통 추천 링크 블록 | 불변 (3C 로 분리) |
| sitemap 구조 | 불변 (5,220 URL) |
| 구조화 데이터 타입 | 불변 (Article/Breadcrumb/FAQPage) |
| 대조군 20개 | **내용 무변경** — diff 기준 CONTROL slug 가 추가 라인에 0건, 신규 문맥링크 0건 |

---

## 6. 검증

| 항목 | 결과 |
|---|---|
| `tsc --noEmit` | 통과 |
| `next build` | 성공 (SSG 5,188 페이지, sitemap 5,220 URL) |
| 테스트 스위트 | 저장소에 자동화 테스트 없음 → 해당 없음 |
| ESLint | **NOT RUN** (대화형 설정 프롬프트 유발. 이번 실험용으로 새 lint 설정을 만들지 않음) |
| diff 감사 | 변경된 스포크 파일 56개 전부 처치/도너 슬러그 포함. 추가 1,036줄 = keyword 20 + 판단표 934 + 링크/문장 82, **기타 0** |
| 로컬 런타임 이벤트 | §1 표 참조 (start 1 / complete 1 / 중복 0) |

---

## 7. 배포와 이후

배포·커밋 정보와 프로덕션 스모크 결과는 `CHANGES.md` 에 기록한다.
`EXPERIMENT_START` 이후 28일이 판독 시점이며, 그 전에는 결과를 계산하지 않는다(`OUTCOME_PREREGISTRATION.md`).

실험 기간 중 처치·대조 40개 페이지는 동결한다. 불가피한 정정이 생기면 `contamination_log.csv` 에 기록한다.

---

## 8. 실험과 별개로 발견한 것 (수정하지 않음, 보고만)

1. **`unemployment-voluntary-quit-benefits`(도너 페이지) 본문에 "2026년 기준 … 최저임금 시급 10,030원"** — 10,030원은 2025년 값이고 2026년 확정 고시는 10,320원이다. 3B 처치 대상이 아니라 링크 문장만 추가했고 기존 수치는 건드리지 않았다.
2. **`boundary-wall-dispute`(P15)** 본문의 "20년(등기부 취득시효) / 10년(등기 취득시효)" 표기가 민법 제245조 구조와 어긋나 보이나, 조문 원문을 권위 출처로 확인하지 못해 수정하지 않았다.
3. **`industrial-accident` 55개 페이지가 noindex 404 로 렌더** (Naver 회수 실험 감사에서 발견). `DOMAINS` 에 도메인 id 가 없어 `notFound()` 가 걸리는데 sitemap 에는 포함돼 있다. 3B 범위 밖이라 그대로 두었다.
