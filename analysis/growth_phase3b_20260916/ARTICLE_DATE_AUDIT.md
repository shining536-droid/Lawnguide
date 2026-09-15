# ARTICLE_DATE_AUDIT — 구조화 데이터 게시일/수정일 감사 (growth phase 3B-0B)

## 1. 문제 (Phase 3A 관찰의 근원 추적)

`web/src/app/guide/[domain]/[slug]/page.tsx` 의 Article JSON-LD 에 날짜가 **하드코딩**돼 있었다.

```
datePublished: '2026-04-01',
dateModified: '2026-04-17',
```

이 컴포넌트가 5,188개 스포크 전부를 렌더하므로, **모든 페이지가 같은 두 날짜**를 내보내고 있었다. 실제 발행일(3월~9월)과 무관한 값이고, 4월 이후에 만든 페이지는 "발행일이 수정일보다 늦은" 모순도 생긴다.

가시 텍스트(본문)에는 발행일·수정일 표기가 없다. 즉 **문제는 구조화 데이터에만** 있었다.

## 2. 권위 있는 per-page 날짜 소스가 있는가 → 있다

| 후보 | 판정 |
|---|---|
| `web/src/data/sitemap-lastmod-generated.ts` 의 `SPOKE_LASTMOD` | ✅ **채택**. slug → 해당 스포크 소스파일의 **최초 커밋일**. `scripts/generate-sitemap-lastmod.mjs` 가 `git log --follow --reverse` 로 생성하며, 주석에 "발행일(최초 커밋일)"이라고 명시. 이미 `sitemap.xml` 의 `lastModified` 정본으로 쓰이고 있다 |
| 파일시스템 mtime | ❌ 사용 안 함(빌드·체크아웃으로 바뀜) |
| 현재 날짜 / 빌드 날짜 | ❌ 사용 안 함 |
| 일반 커밋 시각 | ❌ 단독으로는 사용 안 함 |
| `kb/*/legal_facts.json` | ❌ 날짜 메타 없음. 게다가 `kb/unemployment/legal_facts.json` 은 인코딩이 깨져 있어(모지바케) 소스로 쓸 수 없다 |

**저장소 규약상 "최초 커밋 = 발행"이 성립하는 이유**: 이 저장소의 일일 루틴은 스포크를 batch 파일로 만들어 **커밋 → push → Vercel 배포**로 공개한다(CLAUDE.md 일일루틴). 즉 소스파일의 첫 커밋 시점이 곧 공개 시점이고, 저장소가 이미 그 값을 sitemap 발행일로 사용 중이다. 임의의 커밋 시각을 발행일로 간주한 것이 아니라, **이미 확립된 발행 메타데이터를 재사용**한 것이다.

한계: 날짜 단위가 **batch 파일 단위**다(같은 파일에 담긴 스포크는 같은 발행일). batch 파일 = 그날 발행분이므로 실질적으로 페이지 발행일과 일치한다.

## 3. 적용한 수정 (Rule A)

```ts
const publishedDate = SPOKE_LASTMOD[params.slug] ?? DOMAIN_LASTMOD[params.domain];
const modifiedDate = SPOKE_MODIFIED[params.slug] ?? publishedDate;
...
...(publishedDate ? { datePublished: publishedDate } : {}),
...(modifiedDate ? { dateModified: modifiedDate } : {}),
```

- 근거 날짜가 없으면(미커밋 신규 파일 등) **필드를 아예 넣지 않는다.** 허위 날짜를 쓰지 않는다(Rule B).
- `dateModified` 는 신설한 `web/src/data/spoke-modified-generated.ts` 의 `SPOKE_MODIFIED` 맵에서만 온다. **실질적으로 내용을 고친 페이지만** 등재한다. 오타·링크 일괄정정으로는 갱신하지 않는다(Rule C).
- 5,188개를 오늘 날짜로 일괄 갱신하지 **않았다**.

## 4. 처치군 dateModified — 실험 설계상 고지

`SPOKE_MODIFIED` 에는 현재 **3B 처치군 20개만** 들어 있다(값 `2026-09-16`). 이 20개는 실제로 H1·판단표·공식 출처·(검증된) 사실 정정이 이루어졌으므로 수정일 기재가 **사실에 부합**한다(Rule D).

다만 실험 해석상 중요한 점을 명시한다:

> **처치군만 `dateModified` 가 최신으로 바뀐다.** 이는 처치 묶음에 포함된 **동반 개입(co-intervention)** 이며, 3B 의 효과가 "내용 개선" 때문인지 "신선도 신호" 때문인지 분리하지 못한다. OUTCOME_PREREGISTRATION.md 에 한계로 기록했다.

반대로, **하드코딩 제거 자체(datePublished 정직화)는 처치·대조 구분 없이 5,188개 전부에 동일하게 적용**된다. 이 부분은 실험 처치가 아니라 전역 버그 수정이며 Commit A 로 분리했다.

## 5. 검증

- `tsc --noEmit` 통과
- 빌드 후 샘플 페이지의 JSON-LD 에서 `datePublished` 가 페이지별로 다른지 확인 → REPORT.md 검증 절
