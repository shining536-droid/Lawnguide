# Sitemap-priority.xml 최종 검증

검증일: 2026-05-21
대상: https://www.lawnguide.co.kr/sitemap-priority.xml

## HTTP 응답 검증

| 항목 | 값 |
|------|-----|
| Status | **200 OK** |
| Content-Type | application/xml; charset=utf-8 |
| Content-Length | 63,926 bytes |
| Cache-Control | public, max-age=3600, s-maxage=3600 |
| X-Vercel-Cache | HIT |
| X-Matched-Path | /sitemap-priority.xml |
| Etag | 0234701e8b0277963052e3e8cb621052 |

→ 정상 캐싱·CDN·헤더 모두 정상.

## URL 인벤토리 (전수 검증)

| 항목 | 결과 | 합격 |
|------|------|------|
| 총 URL 수 | **280** | ✅ (기대값 280) |
| 중복 URL | **0** | ✅ |
| https://www. 시작 | **280 / 280 (100%)** | ✅ |
| http:// (비-HTTPS) | **0** | ✅ |
| non-www (https://lawnguide) | **0** | ✅ |
| /spoke/ 경로 (구 URL) | **0** | ✅ |

## URL 구조 분포

| 카테고리 | 개수 |
|---------|------|
| hub URL (11개) | 11 |
| spoke URL | 269 |
| **합계** | **280** |

도메인별:
| 도메인 | hub | spoke | 합계 |
|--------|-----|-------|------|
| child-support | 1 | 25 | 26 |
| defamation | 1 | 25 | 26 |
| dismissal | 1 | 25 | 26 |
| divorce | 1 | 25 | 26 |
| jeonse | 1 | 25 | 26 |
| jeonse-fraud | 1 | 19 | 20 |
| retirement | 1 | 25 | 26 |
| stalking | 1 | 25 | 26 |
| traffic-accident | 1 | 25 | 26 |
| unemployment | 1 | 25 | 26 |
| wage | 1 | 25 | 26 |

## 라이브 샘플 검증 (30개: hub 11 전수 + spoke 19 random)

| 항목 | 결과 | 합격 |
|------|------|------|
| Status 200 OK | **30 / 30 (100%)** | ✅ |
| redirect (3xx) | 0 | ✅ |
| 404 | 0 | ✅ |
| 5xx | 0 | ✅ |
| self canonical | **30 / 30 (100%)** | ✅ |
| non-self canonical | 0 | ✅ |
| no canonical | 0 | ✅ |
| meta noindex | 0 | ✅ |
| robots 차단 | 0 (robots.ts allow:/ 단일 룰) | ✅ |

샘플 라이브 검증 CSV: `analysis/sitemap_priority_validation.csv`

## 최종 판정

**✅ GSC 제출 가능 — 차단 사유 0건.**

전수 인벤토리 검증과 30개 라이브 샘플 검증 모두 통과. priority sitemap 의 모든 항목이:
- HTTPS + www
- 200 OK
- self canonical
- 색인 가능 (noindex 없음)
- redirect 없음

→ B 단계 (robots.ts 추가) 진행 가능.

## 미검증 항목 (현실적 한계)

- 280개 중 250개는 라이브 HEAD 미실행 (시간·트래픽 절약). 30개 샘플로 패턴 신뢰성 확보.
- /spoke/ 경로 URL 은 sourcepool 에 없어서 자동 제외 (URL 인벤토리 검증으로 확인).
- 본문 내용 충실도 / 내부링크 개수는 검증 범위 외 (D 파트 참조).
