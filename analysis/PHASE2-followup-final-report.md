# Phase 2 후속 작업 최종 보고서 (2026-05-21)

## 작업 결과 요약

| 파트 | 상태 | 산출물 | 코드 변경 |
|------|------|--------|----------|
| A. sitemap-priority 검증 | ✅ 완료 | `sitemap_priority_validation.md` + `.csv` | 없음 |
| B. robots.ts 추가 | ✅ 완료 | robots.ts 1줄 → 4줄 (sitemap 배열) | **1 파일 수정** |
| C. GSC 제출 가이드 | ✅ 완료 | `gsc_priority_sitemap_submission_guide.md` | 없음 |
| D. 내부링크 1차 축소 | ✅ 완료 | `internal_link_phase1_top_*.csv/.md` | **없음 (리포트만)** |
| E. sitemap revalidate | ✅ 완료 | `sitemap_revalidate_diagnosis.md` | **없음 (리포트만)** |
| F. Export 체크리스트 | ✅ 완료 | `export_request_checklist.md` | 없음 |

## 11항목 보고

### 1. sitemap-priority.xml 최종 검증 결과
✅ **GSC 제출 가능 — 차단 사유 0건**.

전수 인벤토리 + 30개 라이브 샘플 검증 모두 통과:
- 총 URL **280** (중복 0)
- 모두 https://www. (non-www 0, http 0, /spoke/ 0)
- 30개 라이브 샘플: 200 OK 30/30, self canonical 30/30, noindex 0
- HTTP/1.1 200, Content-Type application/xml, Cache HIT

### 2. robots.ts 추가 여부
✅ **추가 완료**.

변경 전:
```ts
sitemap: 'https://www.lawnguide.co.kr/sitemap.xml',
```

변경 후:
```ts
sitemap: [
  'https://www.lawnguide.co.kr/sitemap.xml',
  'https://www.lawnguide.co.kr/sitemap-priority.xml',
],
```

기존 sitemap 유지, allow/disallow 변경 없음.

### 3. robots.txt 라이브 검증 결과
✅ **빌드 산출물 검증 완료** (`.next/server/app/robots.txt.body`):

```
User-Agent: *
Allow: /

Sitemap: https://www.lawnguide.co.kr/sitemap.xml
Sitemap: https://www.lawnguide.co.kr/sitemap-priority.xml
```

push 후 5-10분 내 Vercel 배포되면 라이브에서 동일 출력 기대. 사용자 검증: `curl https://www.lawnguide.co.kr/robots.txt`

### 4. GSC 제출용 sitemap URL
```
https://www.lawnguide.co.kr/sitemap-priority.xml
```

GSC → Sitemaps → "새 사이트맵 추가" 에 `sitemap-priority.xml` 입력. 상세 절차는 `analysis/gsc_priority_sitemap_submission_guide.md` 참조.

### 5. 내부링크 1차 top 후보 수
- **Round1 적용 후보**: **217 dead links**
- **영향 받는 source page**: **161개**
- 보류: hold_low_confidence 1,074 / hold_delete 30
- 도메인별 TOP: traffic-accident 51 / divorce 37 / child-support 29 / defamation 23 / retirement 22

### 6. 내부링크 실제 코드 수정 여부
❌ **없음 (CLAUDE.md 룰 준수)**. 리포트만 (`analysis/internal_link_phase1_top_*.csv/.md`).

사용자 결정 후 별도 작업으로 진행 권장.

### 7. sitemap revalidate 점검 결과
- `sitemap-priority.xml`: 이미 `weekly` (changefreq XML + force-static + 1시간 캐시) ✅
- `sitemap.xml`: spoke 2,319 가 `daily` changefreq → 봇 크롤 부담 ~35% 100만 한도 추정
- **이번 변경 0건** (보고만). 5/22 메인 노출 측정 후 다운그레이드 결정 권장.

상세: `analysis/sitemap_revalidate_diagnosis.md`

### 8. GA4 / GSC / Vercel export 필요 목록
✅ **체크리스트 완성**: `analysis/export_request_checklist.md`

요약:
- **GA4**: 5개 CSV (source/medium + 4개 채널별 landing TOP20)
- **GSC**: 7개 CSV + 4개 캡처 (색인 사유별 + sitemap + crawl stats)
- **Vercel**: 4개 캡처 (usage) + 4개 CSV (logs) + 1개 user-agent

우선순위: GSC discovered-not-indexed 795 가 즉시 최우선.

### 9. build 결과
✅ **next 14.2.35 build 통과**:
- 정적 페이지 2,376 (변화 없음)
- /robots.txt + /sitemap.xml + /sitemap-priority.xml 모두 정적 라우트
- 컴파일 오류 0
- 함수 번들 변화 없음 (route handler 정적 응답)

### 10. push 여부와 commit hash
✅ **push 예정**. 본 보고서 끝에 commit 결과 추가.

### 11. 다음 사용자 액션
1. **즉시 (5분)**: 라이브 robots.txt 확인
   ```bash
   curl https://www.lawnguide.co.kr/robots.txt
   ```
2. **즉시 (10분)**: GSC 에 `sitemap-priority.xml` 제출
3. **선택 (10분)**: Bing Webmaster Tools 에 동일 sitemap 제출
4. **1주 내**: GSC + GA4 + Vercel export (`export_request_checklist.md` 참조)
5. **1주 내**: 내부링크 Round1 217건 적용 여부 결정
6. **2주 내**: GSC 색인 통계 추이 측정 (priority sitemap 효과)
7. **5/22 후**: sitemap.ts spoke daily→weekly 다운그레이드 여부 결정

## 안전 가드 준수 체크 (CLAUDE.md)

| 룰 | 준수 |
|----|------|
| 대규모 코드 수정 금지 | ✅ robots.ts 1줄→4줄 (sitemap 배열) — 최소 변경 |
| URL 구조 변경 금지 | ✅ |
| noindex 대량 추가 금지 | ✅ |
| 내부링크 1,321개 일괄 적용 금지 | ✅ 리포트만 |
| priority sitemap + robots 외 코드 수정 금지 | ✅ |
| push 전 build | ✅ next 14.2.35 통과 후 push |
| 변경사항 최소화 | ✅ 1 파일 4줄 변경 |

## 변경 파일 목록 (이번 작업)

```
M  web/src/app/robots.ts  (sitemap 1줄 → 배열 4줄)
A  analysis/sitemap_priority_validation.md
A  analysis/sitemap_priority_validation.csv
A  analysis/gsc_priority_sitemap_submission_guide.md
A  analysis/internal_link_phase1_top_candidates.csv
A  analysis/internal_link_phase1_top_summary.md
A  analysis/sitemap_revalidate_diagnosis.md
A  analysis/export_request_checklist.md
A  analysis/PHASE2-followup-final-report.md
```

(보조 .json / .py 파일 제외)
