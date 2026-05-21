# D. 내부링크 1차 정리 후보 리포트

생성일: 2026-05-21
원본 CSV: `broken_internal_links_report.csv` (전체 1,921 dead links)

## 데이터 제약

❗ `source_gsc_impressions` / `source_gsc_clicks` 컬럼은 비어 있음 (GSC 조인 미수행).
→ "GA4 Organic Search 유입" / "GSC 노출·클릭" 기준 우선순위 불가.
→ 대체: **C 파트 priority sitemap 의 11개 핵심 도메인 source page** 로 1차 후보 한정.

## 1차 후보 추출 결과

- **총 후보**: 1,321 dead links (전체 1,921 의 **68.8%**)
- **영향받는 source page 수**: **438개** (priority 11 도메인 내)
- 다른 600 dead links 는 비-priority 도메인 (sangga·sex-crime·assault·dui·fraud·inheritance·rehab·bankruptcy·small-claims·neighbor-dispute·real-estate-sale 등)에 있음 → 2차 처리 후보

## 추천 조치 분포

| 조치 | 건수 | 비율 |
|------|------|------|
| replace (유사 실존 페이지로 교체) | 1,291 | 97.7% |
| delete (관련성 낮음, 링크 제거) | 30 | 2.3% |
| hub (도메인 hub 로 연결) | 0 | 0% |
| redirect_needed (외부 유입 우려) | 0 | 0% |

→ 거의 모두 **replace** (similarity 자동 추천 있음, similarity 값은 0.5~0.9 범위).
→ delete 30건은 관련성 낮은 dead link.
→ hub / redirect_needed 는 0건 — 원본 CSV의 recommendation_type 컬럼에 해당 라벨 없음.

## 도메인별 dead link 분포 (priority 11 도메인)

| 도메인 | dead links | 비고 |
|--------|------------|------|
| traffic-accident | 240 | 가장 큼 |
| divorce | 189 | |
| dismissal | 158 | |
| defamation | 137 | |
| wage | 122 | |
| retirement | 114 | |
| jeonse | 110 | |
| child-support | 97 | |
| unemployment | 86 | |
| stalking | 68 | |
| jeonse-fraud | 0 | (CSV 에 없음 — 최근 도메인) |

## 적용 시 예상 영향

- **438개 source page** 가 영향받음 (priority sitemap 280 URL 중 일부 포함)
- 코드 수정 시 한 source page 당 평균 3.0 dead link 교체
- Lighthouse SEO 점수 / Google PageRank 분배 개선 효과 가능

## CSV 파일

`analysis/D-internal-link-phase1-candidates.csv` (1,321 행)

컬럼:
- source_domain, source_slug, dead_destination_domain, dead_destination_slug
- link_label (실제 표시 텍스트)
- recommended_replacement_slug (유사도 기반 추천)
- recommendation_type (replace / replace_low / delete)
- similarity_note (similarity=0.xx)

## 운영 제약 (CLAUDE.md 룰 준수)

✅ 본 단계는 **리포트만** — 코드 수정 X.
✅ 사용자 결정 대기:
- 일괄 적용 방식 (스크립트로 1,291 replace) vs 점진 적용 (트래픽 페이지부터)
- replace_low (similarity 0.5~0.7) 항목은 수작업 검토 권장

## 다음 단계 (사용자 결정 후)

1. GSC export 도착 시 dead link source page 의 노출·클릭 데이터 결합
2. 노출 ≥100 한 source page 부터 우선 처리 (CLAUDE.md PENDING 의 근접중복 MERGE 와 동일 기준)
3. replace 1,291건은 자동 스크립트 가능 (similarity 검증 후)
4. delete 30건은 source 본문 컨텍스트 확인 후 적용
5. 정리 후 audit-cannibalization·audit-near-duplicates 재생성

## 결론

priority sitemap 11개 핵심 도메인에 1,321 dead links 집중. 438 source page 가 영향. GSC export 도착하면 노출 기준 우선순위 재정렬 가능. 현재는 코드 수정 없음, 리포트만 생성.
