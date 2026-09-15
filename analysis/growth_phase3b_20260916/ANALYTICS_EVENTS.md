# ANALYTICS_EVENTS — /diagnosis 퍼널 계측 (growth phase 3B-0A)

## 1. 왜 필요했나 (사각지대의 실제 원인)

- 모든 스포크 페이지의 **중간 CTA 는 `/diagnosis/{domain}` 로 간다** (`app/guide/[domain]/[slug]/page.tsx` mid CTA).
- 그런데 `/diagnosis` 흐름(`DiagnosisFlow` → `ResultCard`)에는 **GA4 이벤트가 하나도 없었다.** 클릭은 `cta_click` 으로 잡히지만, 그 뒤 사용자가 진단을 시작했는지·끝냈는지는 전혀 측정되지 않았다.
- 기존 `chat_start`/`chat_complete` 는 `/chat` 경로 전용이다(`ChatStartTracker` 는 `/chat` 마운트, `chat_complete` 는 `ChatResultCard` 마운트).
- 따라서 `/diagnosis` 로만 유도하는 페이지(예: `real-estate-sale/sale-contract-essential-clauses`, `assault/assault-first-offense-penalty`)는 **본문 CTA 에서 전환이 발생해도 구조적으로 0 으로 집계**됐다. Phase 3A 의 "low intent" 판정 일부는 이 측정 착시였다.

## 2. 이름 충돌과 최종 결정

처음 제안은 `diagnosis_start` / `diagnosis_complete` 였다. 그런데 기존 이벤트 중 `diagnosis_save`·`diagnosis_share` 가 **/chat 결과카드**에서 발사된다. 같은 접두사를 쓰면 GA4 에서 두 경로가 섞인다.

→ 사용자 결정: **`/diagnosis` 경로는 화면 명칭("상황 정리")을 따라 `situation_*` 로 분리**한다. 기존 이벤트는 이름·파라미터 모두 그대로 둔다.

| 경로 | 이벤트 | 상태 |
|---|---|---|
| `/chat` | `chat_start`, `chat_complete`, `diagnosis_save`, `diagnosis_share` | **변경 없음** |
| `/guide/*` | `cta_click`, `scroll_depth_reached` | **변경 없음** |
| `/chat` 결과카드 | `expert_modal_view`, `expert_waitlist_click` | **변경 없음** |
| `/diagnosis/{domain}` | **`situation_start`, `situation_complete`** | **신규** |

## 3. 신규 이벤트 정의

### `situation_start`
| 항목 | 내용 |
|---|---|
| 의미 | 사용자가 상황 정리 flow 를 **실제로 시작**함 |
| trigger | 첫 질문에 **실제로 답을 선택**했을 때(`handleSelect` / `handleMultiSelectConfirm` 진입 시점) |
| 발사하지 않는 경우 | 페이지 렌더, CTA 노출, 질문 화면만 보고 이탈 |
| 중복 방지 | `startFired` ref. 리렌더·StrictMode 재실행에도 1회 |
| 재발사 | "다시 정리하기"(`handleRestart`)로 새 flow 를 시작해 다시 답하면 1회 더 |
| 파라미터 | `guide_domain`(도메인 id), `entry_surface`='diagnosis_route', `page_path` |

### `situation_complete`
| 항목 | 내용 |
|---|---|
| 의미 | flow 가 **결과 상태에 도달**함 |
| trigger | `finished === true` 이고 결과 엔트리가 확정된 뒤 `useEffect` 1회 |
| 중복 방지 | `completeFired` ref |
| 파라미터 | `guide_domain`, `entry_surface`='diagnosis_route', `page_path`, `result_type_id`, `risk_level` |
| `risk_level` 정규화 | `['높음','보통','낮음']` 화이트리스트, 그 외 `'other'` — `ChatResultCard` 와 동일 방식(결과 경로에 따라 문장이 들어올 수 있어서) |

구현 위치: `web/src/components/DiagnosisFlow.tsx` (도메인 id 는 `app/diagnosis/[domain]/page.tsx` 에서 `domain` prop 으로 전달).

## 4. PII 차단

전송하는 값은 **앱이 정의한 카테고리 값뿐**이다.

- 전송 **안 함**: `answers`(사용자가 고른 선택지 조합), 자유 입력, `status_summary`(사용자 값이 섞인 문장), 결과 본문, 이름·연락처·주소·사건 내용
- 전송 함: 도메인 id, 결과 type_id, 정규화된 risk_level, 경로(`page_path` = `location.pathname`, 쿼리스트링 미포함), `entry_surface` 고정 문자열

## 5. 검증 상태

| 항목 | 상태 |
|---|---|
| TypeScript(`tsc --noEmit`) | ✅ 통과 |
| 프로덕션 빌드 | 아래 REPORT.md 의 검증 절에 기록 |
| 로컬 실기 검증(시작 1회 / 완료 1회 / 리렌더 중복 0) | REPORT.md 검증 절 참조 |
| 프로덕션 스모크 | REPORT.md 배포 절 참조 |

로컬 검증 시 **프로덕션 GA4 오염 방지**: 측정 ID `G-DVMXWW15NR` 은 `app/layout.tsx` 에 하드코딩돼 있어 로컬에서도 같은 속성으로 전송된다. 그래서 로컬 검증은 `gtag` 호출을 가로채 콘솔로 확인하는 방식(네트워크 전송 없이 호출 인자만 확인)으로 수행하고, 실제 GA4 로 테스트 트래픽을 대량 발생시키지 않는다.

## 6. 분석 시 주의

- `situation_*` 는 **2026-09-16 배포 이후부터만** 존재한다. 사전 기간 동등 지표가 없으므로 3B 의 전환 지표는 **사후 탐색적(post-period exploratory)** 으로만 해석한다(OUTCOME_PREREGISTRATION.md).
- `/chat` 과 `/diagnosis` 전환을 합산할 때는 `chat_*` 와 `situation_*` 를 더하되, `entry_surface`/`page_path` 로 경로를 구분해서 본다.
