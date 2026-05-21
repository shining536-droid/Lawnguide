# Phase 2 최종 보고서 (2026-05-21)

## 작업 결과 요약

| 파트 | 상태 | 산출물 |
|------|------|--------|
| A. GA4 유입 감소 진단 | ⏳ 데이터 대기 | `analysis/A-ga4-traffic-diagnosis.md` (export 가이드 + 진단 프레임) |
| B. GSC 색인 정체 진단 | ⏳ 데이터 대기 | `analysis/B-gsc-index-diagnosis.md` (export 가이드 + 가설 + 로컬 추정) |
| C. priority sitemap 초안 | ✅ 완료 | `web/src/app/sitemap-priority.xml/route.ts` + `web/src/data/priority-urls.ts` + `analysis/C-priority-sitemap-report.md` |
| D. 내부링크 1차 후보 | ✅ 완료 | `analysis/D-internal-link-phase1-candidates.csv` + `summary.md` |
| E. Vercel usage 진단 | ⏳ 데이터 대기 | `analysis/E-vercel-usage-diagnosis.md` (확인 항목 가이드 + 가설) |

## 사용자 보고 10항목

### 1. 5/20 유입 감소의 주원인
⏳ GA4 export 도착 후 확정 가능.
**잠정 가설** (memory `[[project_naver_main_drop_2026_05_15]]` + 현재 데이터): 5/15 네이버 메인_홈판 노출 폭락 (80%→8%) 의 진행형. 5/19~5/20 합계 세션 149 vs 5/18 하루 102 → 일평균 75 → 5/18 대비 -27% 감소. 5/15 사고와 연결된 네이버 모바일 검색 자체 약화 가능성 가장 큼.

### 2. 네이버 모바일 검색 특정 페이지 이탈 여부
⏳ GA4 landing page export 도착 후 확정. 단일 페이지 -50% 이상 급감 1~3개면 "특정 페이지 이탈", 전체 균일 감소면 "검색 알고리즘 약화".

### 3. Bing/AI 유입 변화
- Bing organic 5/19~20 합계 32 세션 — 5/18 기준 비교치 없음 (export 필요).
- chatgpt.com referral 별도 export 필요.
- 잠정: Bing 은 색인 다양화 효과 있을 수 있음 (priority sitemap 적용 후 추가 증가 기대).

### 4. GSC 미색인 주요 원인
⏳ GSC export 도착 후 확정.
**잠정 가설** (B 파트 참조):
- H1: /spoke 구 URL 잔존 (4/21 정리 후 redirect 308 chain)
- H2: 신규 스포크 색인 대기열 (batch65-71 = 120개 신규)
- H3: 카니발리제이션 미정리 (27쌍 + 60-85% 93쌍)
- H4: 내부링크 부족 (1,921 dead links 가 PageRank 분배 약화)
- H5: 본문 얇음 (구버전 batch 1-30)

### 5. priority sitemap 생성 여부와 URL 수
✅ **생성 완료**.
- 경로: `https://www.lawnguide.co.kr/sitemap-priority.xml`
- URL 수: **280개** (목표 100~300 범위 내)
- 구성: 11개 핵심 hub + 269개 핵심 도메인 신규 spoke (batch 최신순 25개씩)
- 핵심 도메인: 실업급여·퇴직금·임금·해고·전세·전세사기·교통사고·명예훼손·스토킹·이혼·양육비

### 6. 내부링크 1차 처리 후보 수
✅ **리포트만 생성**, 코드 수정 없음.
- 총 후보: **1,321 dead links** (priority 11 도메인 source page)
- 영향 source page: **438개**
- 추천 조치 분포:
  - replace: 1,291 (97.7%)
  - delete: 30 (2.3%)
- 도메인별 최다: traffic-accident 240 / divorce 189 / dismissal 158 / defamation 137

### 7. Vercel usage 리스크
⏳ Vercel Dashboard 캡처 도착 후 확정.
**잠정**:
- ISR Reads 무료 100만 소진은 신규 콘텐츠 증가 + daily revalidate + 다회 봇 크롤 누적.
- Pro 한도 (10M) 대비 30% 사용 추정 → 단기 1-3개월 안전.
- 옵션 A 적용 시 (sitemap changeFrequency `daily`→`weekly`): ISR Reads ~70% 감소 예상.

### 8. 실제 코드 변경 여부
✅ **2개 파일만 추가**, 기존 파일 변경 0건:
- 신규: `web/src/data/priority-urls.ts` (280 URL 데이터)
- 신규: `web/src/app/sitemap-priority.xml/route.ts` (Next.js route handler)
- 기존 `sitemap.ts` / `robots.ts` / `next.config.js` 변경 없음.
- D 내부링크 1,321건은 리포트만 (코드 수정 없음, 사용자 결정 대기).

### 9. 빌드 결과
✅ **빌드 성공** (`./node_modules/.bin/next build`, Next 14.2.35):
- 정적 페이지 2,376개 (priority sitemap 추가 +1)
- `/sitemap-priority.xml` 정적 라우트로 등록됨
- 컴파일 오류 0건
- 함수 번들 변화 없음 (route handler 는 정적 응답)

### 10. push 여부와 commit hash
✅ **push 예정**. 본 보고서 끝에 commit 결과 추가.

## 안전 가드 준수 체크

✅ 대규모 코드 수정 없음 (2개 파일 신규, 0개 변경)
✅ URL 구조 변경 없음
✅ noindex 추가 없음
✅ 내부링크 일괄 수정 없음 (리포트만)
✅ priority sitemap 만 추가 (지정된 안전 작업)
✅ 빌드 통과 후 push

## 사용자 결정 대기 항목

1. **robots.ts 에 sitemap-priority.xml 추가 여부**
   - 추가 시: Google 이 자동 발견 (권장)
   - 미추가 시: GSC 에서 수동 제출
2. **GA4 / GSC / Vercel export 진행 여부**
   - 5/A, 5/B, 5/E 파트 완성을 위한 데이터 필요
   - 위치: 각 리포트 상단의 "필요한 export 항목" 표
3. **내부링크 1,291 replace 적용 시기와 방식**
   - 일괄 (스크립트) vs 점진 (트래픽 우선)
   - similarity_low (0.5~0.7) 수작업 검토 필요
4. **sitemap.ts revalidate `daily`→`weekly` 다운그레이드 여부**
   - ISR Reads 70% 감소 예상
   - 신규 콘텐츠 색인 1-3일 지연 트레이드오프

## 다음 단계

1. (사용자) GA4 / GSC / Vercel export 진행
2. (사용자) robots.ts 추가 여부 결정
3. (작업자) export 도착 시 A/B/E 파트 채워서 재제출
4. (작업자) 사용자 결정 후 D 적용 또는 sitemap 옵션 적용
