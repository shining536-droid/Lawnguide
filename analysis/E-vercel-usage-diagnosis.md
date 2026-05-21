# E. Vercel Usage / ISR 진단

생성일: 2026-05-21
현황: ISR Reads 무료 100만 소진 → Pro 업그레이드 완료

## 데이터 상태

❌ **로컬에 Vercel usage / log 데이터 없음.** Vercel CLI 인증·credentials 없음. 본 리포트는 (1) 사용자가 대시보드에서 확인할 항목 + (2) 가설 + (3) revalidate 조정 옵션을 작성.

## 1) Vercel 대시보드에서 확인할 항목 (사용자 수동)

Vercel Dashboard → Project: lawnguide → Usage 탭.

### 1-1) 핵심 metrics 5월 추이
| Metric | 무료 한도 | 확인 항목 |
|--------|---------|----------|
| ISR Reads | 1M / mo (Pro: 10M) | 5/1~5/21 일별 추이 |
| ISR Writes | 1M / mo (Pro: 10M) | 5/1~5/21 일별 추이 |
| Edge Requests | 1M / mo (Pro: 10M) | 5/1~5/21 |
| Function Invocations | 1M / mo (Pro: 1M+overages) | 5/1~5/21 |
| Fast Data Transfer | 100 GB / mo | 5/1~5/21 |
| Image Optimization | 1K / mo (Pro: 10K) | 5/1~5/21 |

→ 캡처 후 `analysis/vercel-screenshots/` 에 저장 권장.

### 1-2) Logs → Top Requests
Vercel Dashboard → Project → Logs → Filter by status.

| 필터 | 확인 목적 |
|------|----------|
| status:200 + most-requested | ISR Reads 가장 많이 발생하는 URL TOP 20 |
| status:404 | 반복 404 URL (낭비 요청) |
| status:301/308 | 반복 redirect URL (chain 있는지) |
| status:500/502/503 | 서버 오류 확인 |

### 1-3) User-Agent 분포 (Logs → Edge Logs)
필터: user-agent CONTAINS
| User-Agent | 추정 비중 |
|------------|----------|
| Googlebot / Mediapartners-Google | ? |
| naverbot / Yeti | ? |
| Bingbot | ? |
| AI 크롤러 (GPTBot / ClaudeBot / PerplexityBot) | ? |
| 일반 브라우저 (Chrome / Safari / Edge) | ? |

→ 봇 비중이 30%↑ 이면 비용 추가 부담 가능, robots.txt crawl-delay 검토.

## 2) ISR Reads 100만 소진 원인 가설

### H1. 신규 콘텐츠 폭증으로 인한 재크롤 증가
- 5월 일평균 80개 (스포크 40 + 블로그 25 + 티스토리 15) 추가
- Googlebot 이 sitemap.xml 의 새 URL 발견 시 즉시 크롤 → ISR revalidate trigger
- 신규 URL × 봇 다회 방문 (Google / Naver / Bing / AI) = read 누적

### H2. revalidate 주기 짧음
- `web/src/app/sitemap.ts`: `changeFrequency: 'daily'` for all spokes (2,319개)
- 매일 revalidate 요청 가능 → 일평균 약 2,319 × 5 봇 = 11,595 reads/일 = 350,000/월

### H3. 404 / redirect chain 낭비
- next.config.js redirect 22개 → 봇이 old URL → new URL 두 번 fetch
- 4월 carnival 정리 87개 spoke 제거 → 일부 redirect 누락 가능 (404 발생)

### H4. broken_internal_links_report 1,921 dead links
- 내부 dead link 도 봇이 따라가 404 → revalidate attempt 발생 가능
- 발생 빈도는 sitemap 우선이라 미미하나 누적 가능

### H5. ChatGPT / Claude crawler 증가
- AI 크롤러 (GPTBot, ClaudeBot, PerplexityBot) 가 robots.txt 허용 시 전체 사이트맵 크롤
- 5/20 chatgpt.com referral 증가 트렌드 → AI 크롤 증가 가능성

## 3) revalidate 조정 옵션 (사용자 결정)

### Option A: spoke `changeFrequency` 를 `weekly` 로 다운그레이드
```ts
// web/src/app/sitemap.ts
const spoke: MetadataRoute.Sitemap = SPOKE_PAGES.map((p) => ({
  url: `${baseUrl}/guide/${p.domain}/${p.slug}`,
  lastModified,
  changeFrequency: 'weekly' as const,  // 'daily' → 'weekly'
  priority: 0.8,
}));
```
- 예상 효과: Googlebot 재크롤 빈도 1/7 → ISR Reads ~70% 감소
- 리스크: 신규 콘텐츠 색인 지연 (1~3일 추가)
- 권장: priority sitemap (C 파트) 280개는 `weekly`, 나머지는 `monthly`

### Option B: AI 크롤러 부분 차단 (robots.txt)
```ts
// web/src/app/robots.ts
{
  userAgent: 'GPTBot',
  disallow: '/',
},
{
  userAgent: 'CCBot',  // Common Crawl
  disallow: '/',
},
```
- 예상 효과: AI 학습 차단 (referral 트래픽엔 영향 X — referral 은 사용자 클릭이라 별개)
- 리스크: AI 답변에서 사이트 인용 줄어들 가능 (장기 referral 감소)
- 권장: ClaudeBot, PerplexityBot 은 허용 유지 (사용자 검색 referral)

### Option C: ISR revalidate 시간 명시
- 현재 SSG 페이지는 next build 시 정적 생성됨
- `export const revalidate = 86400 * 7` (7일) 명시로 Pro 환경에서 자동 갱신 주기 제어

## 4) 비용 리스크 (Pro 기준)

| 시나리오 | 월 ISR Reads | Pro 한도 (10M) | 추가 비용 |
|---------|-------------|----------------|----------|
| 현재 (changeFrequency daily) | 약 3M 추정 | 30% 사용 | 없음 |
| 콘텐츠 1.5배 + AI 봇 허용 | 약 6M 추정 | 60% 사용 | 없음 |
| 콘텐츠 2배 + 모든 봇 | 약 12M 추정 | 한도 초과 | ~$20/M 추가 |

→ 단기 1~3개월 안전. 콘텐츠 4,000개 이상 도달 시 (지금 추세로 1년 이내) Pro 한도 도달 가능.

## 5) 권장 액션 (우선순위)

1. **즉시**: Vercel Dashboard → Usage → 5/1~5/21 추이 캡처 (사용자)
2. **즉시**: Logs → Top 404/redirect URL 확인 (낭비 요청 식별)
3. **검토**: Option A 적용 (sitemap changeFrequency 다운그레이드) — ISR Reads 70% 감소 예상
4. **모니터**: 6월 ISR Reads 추이 → Pro 한도 대비 추세 확인
5. **장기**: priority sitemap (C) 활용으로 Google 이 핵심 URL 우선 크롤하도록 유도

## 결론

ISR Reads 100만 소진은 신규 콘텐츠 증가 + daily revalidate + 봇 다회 크롤 누적 결과 추정. Pro 한도 (10M) 대비 30% 사용 추정이라 단기 안전. revalidate 다운그레이드 옵션 A 적용 시 70% 감소 가능. 실제 데이터는 Vercel Dashboard 캡처 후 정밀 진단 가능.
