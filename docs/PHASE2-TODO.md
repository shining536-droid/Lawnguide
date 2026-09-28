# Phase 2 TODO — Overhaul 이월 항목

Phase 1(2026-09-28, 저위험 구조 수정)에서 의도적으로 **실행하지 않고 넘긴** 항목 기록.
Phase 1 원칙: URL 변경 금지 / 301 금지 / 페이지 삭제 금지 / 대량 slug·domain 필드 변경 금지.

---

## P2-1. 산재 허브 3개 통합 검토 (우선순위 최상)

### 현재 상태 (Phase 1 조치 후)

| 도메인 id | 허브 제목 | 스포크 | 진단 문답 데이터 | 관점 |
|---|---|---|---|---|
| `industrial-accident` | 산재·산업재해 종합 가이드 | **55** | 없음 → `industrial-accident1` alias | 업무상 재해·질병 인정, 요양급여 |
| `industrial-accident1` | 산재 신청·요양급여 준비 가이드 | 13 | `domains/industrial-accident1/` | 근로자 급여 신청 |
| `industrial-accident2` | 산재 장해급여·유족급여 준비 가이드 | 10 | `domains/industrial-accident2/` | 사업주 의무·형사책임 |

### Phase 1 에서 한 일
`industrial-accident` 가 `DOMAINS` 에 없어 소속 스포크 55개가 `isValidDomain()` 실패 →
`notFound()` → **하드 404** 였다. 내부링크 224개와 sitemap URL 55개가 전부 죽어 있었다.
URL 을 바꾸지 않기 위해 **DOMAINS 에 허브를 추가하는 방향**으로 되살렸다 (사용자 결정).

### Phase 2 에서 판단할 것
1. **`industrial-accident` 과 `industrial-accident1` 은 주제가 겹친다.** 둘 다 근로자 관점의
   업무상 재해 인정·요양급여다. 허브 수준 카니발리제이션이 발생할 수 있다.
   - `industrial-accident2` 는 사업주 관점이라 성격이 다르다 → 유지 타당.
2. 통합 시 방향 후보
   - (A) `industrial-accident1` 13개를 `industrial-accident` 로 흡수 → 허브 2개(종합/사업주).
     `industrial-accident1` 은 301. RICH_GUIDES·DOMAIN_GUIDES·subtypes 이관 필요.
   - (B) `industrial-accident` 55개를 `industrial-accident1` 로 이동 → 허브 2개.
     55개 URL 변경 + 301. **단 Phase 1 에서 이미 live 로 만들었으므로 이제는 301 이 필요해졌다.**
     (Phase 1 이전이라면 404 → 301 불필요였다. 이 비용은 Phase 1 선택의 대가로 기록.)
   - (C) 3개 유지 + 내부링크로 상하관계만 부여 (종합 → I/II 로 분기).
     URL 변경 0. 가장 저위험이지만 카니발 해소는 안 됨.
3. 판단 근거는 **GSC 실측**으로 잡을 것 — 3개 허브가 같은 쿼리에 동시 노출되는지, 각 허브의
   노출·클릭이 어떤지. 정적 유사도만으로 결정하지 말 것.

### 사전 확인된 사실
- `industrial-accident` → `industrial-accident1` 로 옮길 때 **슬러그 충돌 0건** (역방향도 0건).
- `procedure-data-generated.ts` 의 comwel(근로복지공단) 절차 데이터는 키가 `industrial-accident`
  **하나뿐**이다. `industrial-accident1/2` 는 procedure 데이터가 없다.
  → 통합 방향이 (A) 라면 procedure 연동은 그대로 살고, (B) 라면 키를 옮겨야 한다.
- `cluster.ts` 의 `DOMAINS_WITH_PROCEDURE` 에는 3개가 모두 등록되어 있다.

---

## P2-2. `industrial-accident` 진단 문답·subtypes 전용 데이터

- 현재 `/diagnosis/industrial-accident` 와 `/chat?domain=industrial-accident` 는
  `domains.ts` 의 `DIAGNOSIS_DATA_ALIAS` 로 `industrial-accident1` 데이터를 빌려 쓴다.
- `domains/chat-config/subtypes-2.json` 에는 `industrial-accident1/2` 만 있고
  `industrial-accident` 키는 없다 → `ChatBot.startAfterDomain()` 이 **legacy flow 로 폴백**한다
  (크래시 없음, 다단계 perspective/subtype UX 만 미적용).
- P2-1 통합 방향이 정해지면 alias 를 없애고 정본 데이터로 정리할 것.
  통합 전에 전용 subtypes 를 먼저 만들면 통합 시 버려진다 → **P2-1 뒤에 할 일**.

---

## P2-3. 사이트 카피의 분야 개수 표기 — Phase 1 에서 완화 완료

- 2026-09-28 사용자 결정으로 "31개" 하드코딩 8곳을 **숫자 없는 표현으로 완화**했다.
  - `주요 법률 분야` : layout.tsx ×2, page.tsx ×2, chat/page.tsx ×2, guide/page.tsx ×1
  - `30여 개 법률 분야` : page.tsx(JSON-LD), HomeContent.tsx(통계 타일·연결 문구·FAQ), ChatEntryHero 신뢰배지
- 이유: 허브 통합·추가 때마다 8곳을 고쳐야 하는 유지보수 리스크를 없애기 위함.
- **앞으로도 마케팅 문구에 정확한 개수를 하드코딩하지 않는다.** 실제 개수가 필요한 화면에서만
  `DOMAINS.length` 를 쓴다 (현재 그런 화면은 없다).
- 남은 것: `guide/[domain]/page.tsx:8` 의 주석 "31개 도메인 …" (코드 동작과 무관한 설명 주석).

---

## P2-4. 고아 스포크 1,656개 인바운드 회수

- `python scripts/verify_routes.py --verbose` 의 `W3 orphan` 이 현재 개수를 출력한다.
- 감사 기록: `analysis/overhaul_20260928/A-cannibalization-audit.md` §7-2.
- 2026-07 시점 893개 → 현재 1,656개. 일 40개 신규 생성이 인바운드 없이 쌓이는 구조.
- 작업 시 주의: 대량 파일 수정이므로 **객체 수 + href 엔트리 수 불변 검사** 필수
  (`_audit_seo/apply_link_fixes.py` 의 검사 방식 참조).
- 동시에 배치 파이프라인에 "신규 스포크 1개당 기존 스포크에서 들어오는 링크 최소 2개" 게이트 추가.

---

## P2-5. 카니발 클러스터 156개 / 754페이지

- 후보 목록: `analysis/overhaul_20260928/A-cannibalization-audit.md` §3·§5·§6.
- **정적 유사도만으로 merge 하지 말 것.** GSC Queries×Pages 교차 export 로
  "같은 쿼리에 2개 이상 URL 이 실제로 노출되는지" 확인된 것만 대상으로.
- 밀도 1위는 우선지정 밖의 `assault`(378개/662페어)·`sex-crime`(317/472).

---

## P2-6. metaTitle 템플릿 획일화 (근본 원인)

- 스포크 중 3,652개(70%)가 metaTitle 에 "N단계" 포함, 1,854개(36%)가 "점검 | 로앤가이드" 로 끝남.
  (감사 당시 총계 5,196 은 주석 처리된 스포크 8개를 포함한 값이었다. 실제 라우트는 5,188.)
- "5단계 점검" 으로 끝나는 페이지만 249개.
- 개별 retitle 보다 **생성 게이트**가 먼저: "같은 도메인 직전 20개 스포크의 metaTitle 끝 2어절과 중복 금지".
- 상세: `analysis/overhaul_20260928/A-cannibalization-audit.md` §8.

---

## P2-7. `chat/page.tsx` 의 런타임 `fs.readFileSync`

- `loadSubtypesData()` 가 `path.join(process.cwd(), '..', 'domains', 'chat-config')` 를 런타임에 읽는다.
- CLAUDE.md 가 금지한 2026-04-26 procedure-data NFT 사고와 **동일 패턴**. 대상이
  `kb/`(405MB) 가 아니라 `domains/`(2.1MB) 라서 아직 250MB 한도를 넘기지 않은 것뿐이다.
- `catch` 로 조용히 삼키므로 경로가 틀어지면 subtypes 가 통째로 비어도 빌드가 통과한다.
- 해결: `scripts/generate-procedure-data.mjs` 방식으로 빌드타임 TS 상수 사전생성.
- 겸사겸사 `web/src/` 전체에 런타임 `fs.readFileSync` 가 더 있는지 전수 감사.

---

## P2-8. 함수 번들 재측정

- CLAUDE.md 모니터링 기준: `chunks/978.js` > 100MB 또는 함수 번들 NFT > 150MB.
- 마지막 실측은 2026-05-06, 스포크 1,800개 / 16.13MB. 현재 스포크 5,188개.
- 5개월간 미측정. Phase 2 착수 시 1회 측정해서 추세를 갱신할 것.

---

## P2-9. 한 페이지 내 중복 내부링크 21건

- `python scripts/verify_routes.py --verbose` 의 `W2 dup-link-in-page`.
- 같은 페이지가 같은 href 를 2번 링크한다. 404 는 아니라서 경고로만 둔다.
- 링크 슬롯 1개를 낭비하는 셈이므로 고아 회수(P2-4) 작업과 함께 처리하면 효율적.

---

## P2-10. `/chat` subtype 흐름의 사실관계 라벨 (Phase 1 잔여)

- 상담 준비 리포트의 "내가 입력한 사실관계" 는 `answers` 키 → 라벨 매핑으로 렌더한다.
  - legacy 진단 흐름(`/diagnosis`, `/chat` 레거시): `web/src/data/answer-field-labels.ts` 의 FIELD_LABELS
  - multi-step(subtype) 흐름: ChatBot 의 `buildAnswerLabels()` 가 subtypes factChecks 에서 id→질문문을 만든다
- **subtype 에 factChecks 가 없는 도메인/서브타입은 answers 가 비어 사실관계 섹션이 통째로 숨겨진다.**
  라벨을 못 찾은 키를 버리는 것은 의도된 설계(원시 field 명 노출 방지)라 버그는 아니지만,
  해당 경로 사용자는 리포트의 핵심 블록 하나를 못 본다.
- Phase 2 선택지
  1) subtypes 에 factChecks 가 비어 있는 조합을 찾아 질문을 보강한다 (콘텐츠 작업)
  2) evidence 선택값(evidenceSelected)도 사실관계 행으로 올린다 (코드 작업, 소)
- 점검 방법: `/chat?domain={d}` 를 완주해 `dl` 요소가 렌더되는지 확인.

---

## P2-11. 인쇄 CSS 후속

- 현재 `@media print` 는 `globals.css` 하단에 있고, `.report-hide` / `.report-block` /
  `[data-report="hide"]` 세 훅으로 동작한다.
- 다음에 결과 화면에 UI 를 추가할 때 **화면 전용 요소에는 `report-hide` 를 붙이는 것이 규칙**이다.
  안 붙이면 조용히 인쇄물에 섞인다 (2026-09-28 에 플로팅 위젯·스크롤 앵커·대화 기록이 그랬다).
- 미검증: 실제 프린터 출력(페이지 넘김 위치). 브라우저 인쇄 미리보기까지만 확인했다.

---

## P2-12. `/diagnosis` 인쇄 계측 없음

- `/chat` 의 PDF 저장은 `afterprint` → `diagnosis_save` 로 계측된다.
- `/diagnosis` 의 저장 버튼(`SaveReportButton`, `ShareButtons`)은 **이벤트를 발사하지 않는다.**
  Phase 1 에서 새 이벤트를 임의로 늘리지 않기로 해서 의도적으로 비워 뒀다.
- 주간 리포트에 "리포트 저장" 지표를 넣으려면 `/diagnosis` 쪽도 `situation_save` 같은 이름으로
  추가해야 한다. 이름은 `ANALYTICS_EVENTS.md` 의 경로별 분리 원칙(`chat_*` vs `situation_*`)을 따를 것.
