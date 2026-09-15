# CHANGES — Growth Phase 3B-0 + 3B (2026-09-16)

## 커밋

| 순서 | 해시 | 메시지 | 범위 |
|---|---|---|---|
| Commit A | `e65d0f2` | 진단 경로 계측 보강 및 게시일 메타데이터 정비 | 전역 기술 수정 (처치·대조 동일 적용) |
| Commit B | `d2c8fd3` | 기존 고유입 페이지 리프레시 실험 적용 | 실험 처치 + 분석 산출물 |

시작 HEAD `5d4ee2b` → `e65d0f2` → `d2c8fd3`. push: `5d4ee2b..d2c8fd3 main -> main` (force push 없음).

### Commit A — 4개 파일 (+81 / −8)
- `web/src/components/DiagnosisFlow.tsx` — `situation_start` / `situation_complete` 추가, ref 가드, `domain` prop 수신
- `web/src/app/diagnosis/[domain]/page.tsx` — `domain` prop 전달 1줄
- `web/src/app/guide/[domain]/[slug]/page.tsx` — Article 날짜 하드코딩 제거, `SPOKE_LASTMOD` / `SPOKE_MODIFIED` 기반으로 교체
- `web/src/data/spoke-modified-generated.ts` — **신규**, 이 커밋에서는 빈 맵 (전역 수정이 특정 arm 을 겨냥하지 않도록)

### Commit B — 69개 파일 (+1,713 / −127)
- 스포크 소스 56개: 처치 20페이지(H1 20 + 판단표 20 + 공식출처 + 사실정정 3) + 도너 문맥링크 60개
- `web/src/data/spoke-modified-generated.ts` — 처치군 20개의 실질 수정일(2026-09-16) 기록
- `analysis/growth_phase3b_20260916/` 12개 문서

staged diff 검증: `keyword:` 20, `comparison:` 20, 도너 `href` 60, `meta:`/`cta:` 추가 0, canonical·robots 변경 0, 신규 `slug:` 0, **CONTROL slug 0건**, 대조군을 향하는 신규 링크 0건.

## 배포

| 항목 | 값 |
|---|---|
| push (EXPERIMENT_START) | **2026-09-16T08:43:16+09:00** (UTC 2026-09-15T23:43:16Z) |
| 배포 방식 | 기존 Vercel push-to-deploy (새 배포 수단 도입 없음) |
| 프로덕션 반영 확인 | push 후 약 270초 |
| 판독 시점 | EXPERIMENT_START 다음 날부터 28일 → **2026-09-17 ~ 2026-10-14** |

## 프로덕션 스모크 테스트 (배포 후 실측)

**A. /diagnosis 계측** — `https://www.lawnguide.co.kr/diagnosis/unemployment`, 질문 10개 완주(객관식 9 + 멀티셀렉트 1)

| 항목 | 결과 |
|---|---|
| `situation_start` | **1회** (payload: guide_domain, entry_surface=diagnosis_route, page_path) |
| `situation_complete` | **1회** (payload: 위 3개 + result_type_id=TYPE_STANDARD, risk_level=other) |
| 리렌더 강제 후 중복 | **0** |
| PII | 선택 조합·자유입력·결과 문구 미전송 확인 |
| GA4 오염 방지 | 클릭 전에 `window.gtag` 를 레코더로 교체해 실제 전송 없음 |

**B. 처치 5개** — 전부 HTTP 200 / 질문형 H1 / 판단표 / 공식 확인처 / self-canonical / CTA 불변 / `dateModified 2026-09-16`
`outpatient-treatment-count-settlement-impact`(04-08), `unemployment-reapply-after-expiry`(04-12), `retirement-small-business-5`(04-11), `boundary-wall-dispute`(04-08), `bankruptcy-credit-recovery-timeline`(04-01)

**C. 대조 5개** — 전부 HTTP 200 / 판단표 0 / 공식 확인처 0 / H1 원본 유지 / `dateModified == datePublished`
`unemployment-dual-job-one-lost`(04-11), `delayed-salary-labor-office-report`(04-08), `traffic-accident-passenger-injury-claim`(04-10), `assault-first-offense-penalty`(03-13), `dismissal-small-business-under5-options`(04-15)

**D. 도너 링크 10개** — 10/10 도너 페이지에 의도한 처치 URL 링크 존재, 대상 전부 HTTP 200

## 보존된 무관 작업

`git add` 는 항상 명시적 경로만 사용했다 (`git add .` / `-A` 미사용). 커밋 후에도 워킹트리에 약 3,498개 항목이 그대로 남아 있다: `_b145_*.py`, `content/blog/*.md`, `naver_cookies_lawnguide.json`, `tistory_cookies_lawnguide.json`, `__pycache__/`, `web/tsconfig.tsbuildinfo`, `audit/` 디렉토리 등. reset·clean·stash 하지 않았다.

## 실행하지 않은 것

- 신규 스포크 생성 0건, 대량 생산 재개 없음
- CTA 문구·개수·위치·목적지 변경 없음
- 공통 템플릿·도메인 추천 링크 블록 변경 없음 (3C 로 분리)
- 2026년 구직급여 상·하한액 갱신 안 함 (권위 출처 확인 실패)
- ESLint: **NOT RUN** (대화형 설정 프롬프트 유발, 새 lint 설정을 만들지 않음)
- 환경변수·시크릿 변경 없음, force push 없음
