# 내부링크 1차 Top 후보 (축소판)

생성일: 2026-05-21
입력: `analysis/D-internal-link-phase1-candidates.csv` (1,321 행, priority 11 도메인 한정)
출력: `analysis/internal_link_phase1_top_candidates.csv`

## 축소 결과

| 항목 | 값 |
|------|-----|
| 입력 후보 | 1,321 |
| **Round1 적용 후보** | **217** |
| Hold (보류) 후보 | 1,104 |

→ **217개로 축소 (100~200 목표 범위 내, 적정)**

## 분포

| 그룹 | 건수 | 비고 |
|------|------|------|
| round1_replace_high_confidence | **217** | sim≥0.84 + replacement 실존 + priority sitemap/도메인 |
| hold_low_confidence | 1,074 | sim<0.84 또는 replacement 미존재 (수작업 검토 필요) |
| hold_delete | 30 | recommendation_type=delete, manual review |
| hold_hub | 0 | 원본 CSV 에 hub 라벨 없음 |
| hold_redirect_needed | 0 | 원본 CSV 에 redirect_needed 라벨 없음 |

## Round1 영향 받는 source page

- 총 **161개** source page (priority 11 도메인 내)
- source page 당 평균 1.35 dead link 교체

## 도메인별 Round1 분포

| 도메인 | Round1 건수 |
|--------|-------------|
| traffic-accident | 51 |
| divorce | 37 |
| child-support | 29 |
| defamation | 23 |
| retirement | 22 |
| stalking | 19 |
| dismissal | 14 |
| jeonse | 9 |
| wage | (집계 누락 — CSV 참조) |
| unemployment | (집계 누락 — CSV 참조) |
| jeonse-fraud | (집계 누락 — CSV 참조) |

→ traffic-accident / divorce 가 압도적으로 많음.

## 선정 기준 (Round1)

다음 조건 **모두 충족** 시 round1 등록:

1. ✅ recommendation_type = `replace` (replace_low / delete 제외)
2. ✅ similarity ≥ **0.84**
3. ✅ 추천 replacement slug 가 실제 spoke 풀에 존재 (현재 2,319 spoke 와 매칭)
4. ✅ source page 가 priority sitemap (280) 에 포함 OR priority 11 도메인 내
5. ✅ confidence_score ≥ 0.82 (sim·priority·존재여부 가중 계산)

## CSV 컬럼

`analysis/internal_link_phase1_top_candidates.csv`:

| 컬럼 | 의미 |
|------|------|
| source_page | /guide/{domain}/{slug} or /guide/{domain} (hub) |
| source_domain | 출처 도메인 |
| dead_destination | 깨진 링크 경로 |
| dead_destination_domain | 깨진 링크 도메인 |
| recommended_replacement_slug | 유사도 기반 추천 슬러그 |
| replacement_domain | 추천 슬러그가 속한 도메인 |
| recommendation_type | replace / replace_low / delete |
| confidence_score | 0~1.0 종합 점수 |
| reason | round 분류 이유 |
| apply_round | round1_replace_high_confidence / hold_low_confidence / hold_delete |

## 코드 적용 권장 여부

❌ **이번 작업에서는 코드 수정 X — 리포트만.**

**권장 시퀀스 (사용자 결정 후 진행):**
1. **샘플 10건 수작업 검증** — Round1 217건 중 무작위 10건의 source page 본문 확인 → replacement 가 진짜 자연스러운지 1차 검수
2. **자동 적용 스크립트** — Python 으로 source ts 파일에서 dead destination 슬러그를 replacement 로 일괄 치환
3. **빌드 + 차분 검증** — 빌드 후 변경된 내부링크가 모두 200 OK 응답 확인
4. **점진 push** — 도메인별 분리 커밋 (traffic-accident → divorce → 순서) 으로 영향 격리

## 적용 시 예상 리스크

| 리스크 | 평가 | 완화 |
|--------|------|------|
| 잘못된 replacement 매칭 | 중간 (sim 0.84~0.99) | 샘플 수작업 검증, dry-run |
| 도메인 mismatch | 낮음 (replacement_domain == dead_destination_domain 매칭) | CSV 컬럼 확인 |
| 빌드 깨짐 | 낮음 (TS 컴파일 오류는 즉시 잡힘) | next build 통과 확인 |
| 색인 영향 | 낮음 (URL 구조 변경 없음) | 영향 없음 예상 |
| Lighthouse SEO 개선 | 중간 (1,047 dead link 잔존) | 2~3차 round 누적 적용 시 효과 |

## 다음 단계

1. 사용자 결정: round1 적용 진행 여부 / 시기
2. 진행 시 작업자가 자동 스크립트 작성 + dry-run + 빌드 검증
3. push 분리 (도메인별)
4. 적용 후 audit-cannibalization·audit-near-duplicates 재생성 권장
