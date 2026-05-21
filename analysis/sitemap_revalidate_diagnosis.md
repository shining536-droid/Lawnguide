# Sitemap Revalidate 주기 점검

작성일: 2026-05-21
배경: ISR Reads 무료 100만 소진 → Pro 업그레이드. 추가 비용 리스크 점검 필요.

## 1) 현재 sitemap route 목록

`find web/src/app -name "sitemap*"` 결과:

| 경로 | 타입 | revalidate / cache 정책 |
|------|------|----------------------|
| `web/src/app/sitemap.ts` | MetadataRoute.Sitemap | **자동 정적 생성** — 명시적 revalidate 없음 |
| `web/src/app/sitemap-priority.xml/route.ts` | Route handler GET | **`force-static` 지정** + `Cache-Control: public, max-age=3600, s-maxage=3600` |

→ 두 route 모두 **build time 정적 생성**. 런타임 revalidate 없음 (next build 후 변경되지 않음).

## 2) sitemap.ts 내부 changeFrequency 분석

```ts
// web/src/app/sitemap.ts
const spoke = SPOKE_PAGES.map((p) => ({
  url: `${baseUrl}/guide/${p.domain}/${p.slug}`,
  lastModified,
  changeFrequency: 'daily' as const,  // ⚠️ 모든 2,319 spoke 가 daily
  priority: 0.8,
}));
```

| URL 그룹 | 개수 | changeFrequency | priority |
|---------|------|----------------|----------|
| home | 1 | weekly | 1.0 |
| guide hub | 29 | weekly | 0.7 |
| guide spoke | 2,319 | **daily** | 0.8 |

→ spoke 2,319 가 `daily` 로 설정됨. **이게 Google 등 봇에게 "매일 크롤 검토하라" 신호.**

## 3) sitemap-priority.xml route 분석

```ts
// web/src/app/sitemap-priority.xml/route.ts
export const dynamic = 'force-static';
// XML 내부:
//   <changefreq>weekly</changefreq>  ← hub 11 + spoke 269 모두 weekly
```

→ **이미 weekly 설정**. 추가 변경 불필요.

## 4) ISR Reads 절감 가능성

### 가설 (E 파트에서 다룬 내용 재확인)

- 봇이 sitemap.xml 의 `<changefreq>daily</changefreq>` 신호를 보고 매일 spoke 페이지 재크롤 시도
- 2,319 spoke × 4~5 봇 (Googlebot, Naverbot, Bingbot, AI 봇) = **일 11,595 reads/일**
- 월 환산: 348,000 reads/월
- **100만 무료 한도의 약 35%** 가 spoke daily revalidate 신호로 인한 봇 재크롤 수요

### 변경 시뮬레이션

| 설정 | 봇 일일 크롤 요청 추정 | 월 reads | 무료 한도 % |
|------|--------------------|----------|-------------|
| 현재 (spoke daily) | 11,595 | 348,000 | 35% |
| spoke `weekly` | 1,656 | 50,000 | 5% |
| spoke `monthly` | 386 | 11,600 | 1.2% |

→ **spoke `daily` → `weekly` 변경 시 ISR Reads ~85% 감소 가능.**

다만 봇 크롤 빈도는 sitemap changefreq 단독으로 결정되지 않고:
- 페이지 새로움 (lastModified)
- 페이지 권한 (PageRank·domain authority)
- 봇 자체 정책 (Googlebot 은 changefreq 를 강력한 신호로 받지 않음)

→ 실제 절감은 50~70% 정도 추정. ISR Reads 추적은 Pro 한도 (10M/월) 대비 안전.

## 5) 변경 권장안 (보고 후 결정)

### 권장 A: spoke 를 `weekly` 로 다운그레이드 (이번 작업 X)

```ts
// 변경안 (이번 작업에서 적용 X — 보고만)
const spoke = SPOKE_PAGES.map((p) => ({
  url: `${baseUrl}/guide/${p.domain}/${p.slug}`,
  lastModified,
  changeFrequency: 'weekly' as const,  // ✅ 'daily' → 'weekly'
  priority: 0.8,
}));
```

- 효과: ISR Reads ~50% 감소 추정
- 리스크: 신규 콘텐츠 색인 1~3일 지연 (5/16 사고 회복 진행 중이라 신중)
- **결정 보류**: 5/22 메인 노출 측정 후 결정 권장

### 권장 B: spoke `lastModified` 동적 계산 (선택)

현재는 `new Date()` (빌드 시점) — 모든 spoke 의 lastModified 가 동일.
spoke 별 실제 생성/수정 시점 (frontmatter date 등)을 사용하면 봇이 "변경 안 된 페이지" 를 인식해 크롤 자제.

```ts
// 변경안 (현재 SPOKE_PAGES 에 date 없음 — 추가 필요)
const spoke = SPOKE_PAGES.map((p) => ({
  url: `${baseUrl}/guide/${p.domain}/${p.slug}`,
  lastModified: p.lastModified ?? lastModified,  // spoke 별 date 있으면 사용
  changeFrequency: 'weekly' as const,
  priority: 0.8,
}));
```

- 효과: 봇이 If-Modified-Since 활용해 크롤 효율 ↑
- 리스크: SPOKE_PAGES 인터페이스 변경 (대규모 코드 수정에 해당) → 이번 작업 X

## 6) 이번 작업에서 실제 변경한 항목

✅ **변경 없음** — 보고만.

CLAUDE.md 룰: "이번 작업에서 무리하게 전체 sitemap revalidate 변경 금지" 준수.

priority sitemap 은 이미 `weekly` 라 추가 작업 없음.

## 7) 결론

- 현재 sitemap 구조는 **빌드 시점 정적 생성 + 런타임 캐시 1시간**.
- spoke 2,319 가 `daily` changefreq → 봇 크롤 부담 ~35%/100만 한도 추정.
- spoke `weekly` 다운그레이드 시 ISR Reads ~50% 감소 가능.
- **결정 보류**: 5/22 네이버 메인 노출 측정 결과 본 후 정착 결정과 함께 결정 권장.
- 이번 작업: 변경 0건, 리포트만.

## 다음 단계

1. (사용자) Vercel Dashboard 에서 실제 ISR Reads 5/1~5/21 추이 캡처 → E-vercel-usage-diagnosis.md 와 결합 분석
2. (사용자) 5/22 메인 노출 측정 결과 확인
3. (사용자) spoke daily→weekly 다운그레이드 여부 결정
4. (작업자) 결정 후 1줄 변경 + 빌드 + push
