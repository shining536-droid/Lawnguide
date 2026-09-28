# LawnGuide SEO 카니발리제이션 감사 리포트

생성일: 2026-09-28 · 분석대상 스포크 **5196개** / 727 배치파일 / 32 도메인값

> 측정만 수행. 삭제·리디렉션·파일수정 **일체 없음**.

## 0. 스케일 정정
- 문서상 "스포크 1,000개+" → 실제 **5196개** (약 5배). 카니발 위험도도 그만큼 큼.
- 내부링크 인바운드 0인 고아 스포크: **1656개 (32%)**
- 도메인값 오염: `industrial-accident1`(13개) / `industrial-accident2`(10개) → `/guide/industrial-accident1/...` 로 배포되는 잘못된 URL 네임스페이스. 허브 없음 = 고아 확정.

## 1. 유사도 스코어링 방식
```
score = 0.32 * J(키워드 + questionKeyword 형태소)
      + 0.24 * J(slug 토큰)
      + 0.24 * J(metaTitle 형태소)
      + 0.12 * J(intent 태그)
      + 0.05 * (type 동일) + 0.03 * (perspective 동일)

intent 태그 11종: procedure / documents / eligibility / report / settlement /
                accused / amount / deadline / evidence / refusal / appeal

대표페이지 선정값 val = inbound*3 + chars/1200 + FAQ수 + (timeline ? 2 : 0)
```

| 유사도 밴드 | 페어 수 | 해석 |
|---|---|---|
| 0.80+ | 22 | 사실상 동일 페이지 (슬러그 어순만 바뀜) |
| 0.70~0.80 | 97 | 검색의도 완전 중복 |
| 0.60~0.70 | 436 | 의도 중복, 세부쟁점만 다름 |
| 0.55~0.60 | 640 | 경계 — 내부링크 종속으로 해결 |

0.55 이상 연결성분 클러스터 **156개 / 소속 페이지 754개**. 최대 클러스터 61페이지.

## 2. 도메인별 카니발 밀도

| 도메인 | 스포크 | 0.55+ 페어 | 밀도(페어/페이지) | 고아 | 판정 |
|---|---|---|---|---|---|
| assault | 378 | 372 | 0.98 | 134 | 정리필요 |
| sex-crime | 317 | 203 | 0.64 | 112 | 정리필요 |
| (우선) divorce | 472 | 151 | 0.32 | 148 | 정리필요 |
| defamation | 410 | 111 | 0.27 | 141 | 관찰 |
| (우선) fraud | 646 | 75 | 0.12 | 219 | 관찰 |
| (우선) wage | 334 | 49 | 0.15 | 121 | 관찰 |
| (우선) traffic-accident | 297 | 47 | 0.16 | 73 | 관찰 |
| retirement | 263 | 46 | 0.17 | 76 | 관찰 |
| industrial-accident | 55 | 34 | 0.62 | 7 | 정리필요 |
| dismissal | 468 | 29 | 0.06 | 187 | 양호 |
| (우선) dui | 267 | 28 | 0.10 | 89 | 관찰 |
| (우선) unemployment | 309 | 22 | 0.07 | 102 | 양호 |
| (우선) jeonse-fraud | 234 | 17 | 0.07 | 80 | 양호 |
| (우선) inheritance | 199 | 7 | 0.04 | 43 | 양호 |
| (우선) child-support | 73 | 2 | 0.03 | 8 | 양호 |
| rehabilitation | 46 | 1 | 0.02 | 14 | 양호 |
| (우선) stalking | 86 | 1 | 0.01 | 20 | 양호 |

(우선) = 사용자 지정 우선 점검 도메인. `assault`(378개/662페어, 밀도 1.75)·`sex-crime`(317개/472페어)는 지정 밖이지만 밀도가 가장 높음 — 다음 차수 필수.

## 3. 카니발 후보 Top 50 (우선도메인 우선 정렬)

| # | 도메인 | score | 대표 (inb/자수) | 경쟁 (inb/자수) | 겹친 intent | 조치 |
|---|---|---|---|---|---|---|
| 1 | traffic-accident | 0.90 | `traffic-accident-night-jaywalk-pedestrian-fault-ratio-track` (6/7993) | `traffic-accident-pedestrian-jaywalk-night-fault-ratio-track` (3/8483) | procedure | **merge** |
| 2 | wage | 0.87 | `wage-annual-leave-allowance-unused-nonpayment-claim-track` (14/7789) | `wage-unused-annual-leave-allowance-nonpayment-claim-track` (0/7995) | amount,procedure | **merge** |
| 3 | divorce | 0.84 | `divorce-spouse-retirement-pension-future-division-track` (3/8766) | `divorce-spouse-retirement-pension-future-benefit-division-track` (1/9107) | procedure | **merge** |
| 4 | traffic-accident | 0.84 | `traffic-accident-bicycle-lane-collision-fault-ratio-track` (7/7898) | `traffic-accident-bicycle-lane-car-collision-fault-ratio-track` (6/8694) | procedure | **merge** |
| 5 | divorce | 0.83 | `divorce-inherited-property-division-contribution-track` (9/7842) | `divorce-inherited-property-contribution-division-track` (8/8040) | procedure | **merge** |
| 6 | divorce | 0.81 | `divorce-spouse-business-debt-marriage-breakdown-alimony-track` (5/8384) | `divorce-spouse-gambling-debt-marriage-breakdown-alimony-track` (4/8285) | evidence,procedure | **merge** |
| 7 | divorce | 0.80 | `divorce-business-goodwill-property-division-track` (7/7950) | `divorce-business-entity-goodwill-asset-division-track` (5/7835) | procedure | **merge** |
| 8 | divorce | 0.80 | `divorce-spouse-business-goodwill-division-track` (2/8726) | `divorce-spouse-business-goodwill-value-division-track` (0/8614) | procedure | **merge** |
| 9 | traffic-accident | 0.79 | `traffic-accident-pedestrian-jaywalking-fault-ratio-track` (3/9012) | `traffic-accident-pedestrian-jaywalk-night-fault-ratio-track` (3/8483) | procedure | **merge** |
| 10 | unemployment | 0.79 | `unemployment-contract-expiry-renewal-refusal-allowance-track` (7/7886) | `unemployment-contract-expiry-nonrenewal-just-cause-track` (5/7960) | deadline,eligibility,procedure,refusal | **merge** |
| 11 | divorce | 0.78 | `divorce-domestic-violence-marriage-breakdown-alimony-track` (7/8412) | `divorce-spouse-domestic-violence-breakdown-alimony-track` (0/8606) | evidence,procedure | **merge** |
| 12 | divorce | 0.76 | `divorce-spouse-infidelity-breakdown-alimony-track` (2/8555) | `divorce-spouse-infidelity-affair-breakdown-alimony-track` (0/8827) | evidence,procedure | **merge** |
| 13 | divorce | 0.76 | `divorce-spouse-retirement-pension-division-track` (5/7641) | `divorce-spouse-retirement-pension-future-division-track` (3/8766) | procedure | **merge** |
| 14 | fraud | 0.76 | `fraud-acquaintance-loan-default-falsely-accused-defense` (7/6650) | `fraud-loan-default-falsely-accused-defense` (2/6731) | accused,procedure,report | **merge** |
| 15 | traffic-accident | 0.75 | `traffic-accident-crosswalk-pedestrian-fault-ratio-track` (11/7642) | `traffic-accident-pedestrian-crosswalk-signal-fault-ratio-track` (6/7922) | procedure | **merge** |
| 16 | divorce | 0.75 | `divorce-spouse-infidelity-breakdown-alimony-track` (2/8555) | `divorce-spouse-domestic-violence-breakdown-alimony-track` (0/8606) | evidence,procedure | **merge** |
| 17 | divorce | 0.75 | `divorce-title-trust-real-estate-division-track` (4/7894) | `divorce-spouse-name-trust-real-estate-division-track` (0/8664) | procedure | **merge** |
| 18 | divorce | 0.74 | `divorce-in-law-mistreatment-marriage-breakdown-alimony-track` (6/8003) | `divorce-inlaws-mistreatment-marriage-breakdown-alimony-track` (0/8920) | evidence,procedure | **merge** |
| 19 | divorce | 0.74 | `divorce-business-goodwill-property-division-track` (7/7950) | `divorce-business-goodwill-valuation-property-division-track` (5/8009) | procedure | **merge** |
| 20 | divorce | 0.73 | `divorce-future-retirement-pension-property-division-track` (6/7981) | `divorce-spouse-retirement-pension-future-division-track` (3/8766) | procedure | **merge** |
| 21 | divorce | 0.73 | `divorce-business-goodwill-valuation-property-division-track` (5/8009) | `divorce-spouse-business-goodwill-value-division-track` (0/8614) | procedure | **merge** |
| 22 | divorce | 0.73 | `divorce-concealed-asset-division-track` (5/7519) | `divorce-hidden-asset-concealment-track` (0/7665) | procedure | **merge** |
| 23 | divorce | 0.73 | `divorce-spouse-gambling-debt-marriage-breakdown-alimony-track` (4/8285) | `divorce-spouse-gambling-waste-breakdown-alimony-track` (0/8393) | evidence,procedure | **merge** |
| 24 | traffic-accident | 0.73 | `traffic-accident-motorcycle-lane-filtering-fault-ratio-track` (6/7610) | `traffic-accident-motorcycle-lane-splitting-fault-ratio-track` (4/9024) | procedure | **merge** |
| 25 | traffic-accident | 0.73 | `traffic-accident-night-jaywalk-pedestrian-fault-ratio-track` (6/7993) | `traffic-accident-pedestrian-jaywalk-fault-ratio-track` (5/7558) | procedure | **merge** |
| 26 | divorce | 0.73 | `divorce-spouse-hidden-overseas-asset-division-track` (1/8524) | `divorce-hidden-asset-concealment-track` (0/7665) | procedure | **merge** |
| 27 | divorce | 0.72 | `divorce-business-goodwill-valuation-property-division-track` (5/8009) | `divorce-spouse-business-goodwill-division-track` (2/8726) | procedure | **merge** |
| 28 | divorce | 0.72 | `divorce-unvested-stock-option-property-division-track` (1/8224) | `divorce-unvested-stock-option-division-track` (1/7846) | procedure | **retitle** |
| 29 | dui | 0.72 | `dui-hangover-next-morning-driving-falsely-accused-defense` (4/8142) | `dui-next-morning-residual-alcohol-falsely-accused-defense` (4/7975) | accused,eligibility,procedure | **merge** |
| 30 | divorce | 0.72 | `divorce-future-severance-pay-retirement-division-track` (2/8108) | `divorce-future-severance-pay-property-division-track` (1/8348) | procedure | **retitle** |
| 31 | wage | 0.71 | `wage-annual-leave-allowance-unused-nonpayment-claim-track` (14/7789) | `wage-unused-annual-leave-allowance-unpaid-claim-track` (13/7910) | amount,procedure | **merge** |
| 32 | traffic-accident | 0.71 | `traffic-accident-crosswalk-pedestrian-fault-ratio-track` (11/7642) | `traffic-accident-pedestrian-jaywalking-fault-ratio-track` (3/9012) | procedure | **merge** |
| 33 | fraud | 0.71 | `fraud-used-electric-scooter-prepay-nondelivery-track` (1/7330) | `fraud-used-musical-instrument-direct-deal-prepay-no-delivery-track` (0/7284) | deadline,eligibility,procedure,report | **merge** |
| 34 | traffic-accident | 0.71 | `traffic-accident-pedestrian-crosswalk-signal-fault-ratio-track` (6/7922) | `traffic-accident-bicycle-crosswalk-pedestrian-collision-fault-ratio-track` (0/8835) | procedure | **merge** |
| 35 | fraud | 0.71 | `fraud-gym-membership-prepaid-sudden-closure-track` (24/7014) | `fraud-membership-gym-prepaid-sudden-closure-track` (0/7623) | amount,eligibility,procedure,report | **merge** |
| 36 | traffic-accident | 0.71 | `traffic-accident-pedestrian-jaywalk-fault-ratio-track` (5/7558) | `traffic-accident-pedestrian-jaywalking-fault-ratio-track` (3/9012) | procedure | **merge** |
| 37 | traffic-accident | 0.70 | `traffic-accident-night-jaywalk-pedestrian-fault-ratio-track` (6/7993) | `traffic-accident-pedestrian-jaywalking-fault-ratio-track` (3/9012) | procedure | **merge** |
| 38 | wage | 0.70 | `wage-annual-leave-allowance-unused-unpaid-claim-track` (15/7681) | `wage-unused-annual-leave-allowance-unpaid-claim-track` (13/7910) | amount,procedure | **merge** |
| 39 | divorce | 0.70 | `divorce-spouse-gambling-debt-marital-breakdown-grounds-track` (5/7839) | `divorce-spouse-gambling-debt-accumulation-grounds-track` (3/8026) | procedure | **merge** |
| 40 | unemployment | 0.70 | `unemployment-workplace-relocation-track` (2/7989) | `unemployment-worksite-relocation-track` (0/7686) | amount,procedure | **merge** |
| 41 | traffic-accident | 0.70 | `traffic-accident-crosswalk-pedestrian-fault-ratio-track` (11/7642) | `traffic-accident-bicycle-crosswalk-pedestrian-collision-fault-ratio-track` (0/8835) | procedure | **merge** |
| 42 | divorce | 0.70 | `divorce-business-goodwill-property-division-track` (7/7950) | `divorce-spouse-business-goodwill-division-track` (2/8726) | procedure | **merge** |
| 43 | divorce | 0.70 | `divorce-adultery-marriage-breakdown-alimony-track` (8/7950) | `divorce-spouse-infidelity-breakdown-alimony-track` (2/8555) | evidence,procedure | **merge** |
| 44 | unemployment | 0.70 | `unemployment-contract-expiry-track` (4/7570) | `unemployment-fixed-term-end-track` (0/7959) | procedure | **merge** |
| 45 | divorce | 0.69 | `divorce-adultery-marriage-breakdown-alimony-track` (8/7950) | `divorce-domestic-violence-marriage-breakdown-alimony-track` (7/8412) | evidence,procedure | **merge** |
| 46 | divorce | 0.69 | `divorce-business-goodwill-property-division-track` (7/7950) | `divorce-spouse-business-goodwill-value-division-track` (0/8614) | procedure | **merge** |
| 47 | divorce | 0.69 | `divorce-spouse-retirement-pension-division-track` (5/7641) | `divorce-spouse-retirement-pension-future-benefit-division-track` (1/9107) | procedure | **merge** |
| 48 | divorce | 0.69 | `divorce-inherited-asset-property-division-contribution-track` (10/7972) | `divorce-inherited-asset-marital-contribution-division-track` (4/7645) | procedure | **merge** |
| 49 | unemployment | 0.69 | `unemployment-workplace-harassment-resignation-track` (3/7476) | `unemployment-workplace-bullying-resignation-track` (1/7807) | procedure | **merge** |
| 50 | unemployment | 0.69 | `unemployment-contract-condition-breach-resignation-just-cause-track` (23/8351) | `unemployment-labor-condition-violation-resignation-just-cause-track` (23/8297) | amount,eligibility,evidence,procedure | **merge** |

### Top 50 키워드 대조 (같은 질문인지 눈으로 확인용)

**1. [traffic-accident] 0.90 → merge**
- 대표 `traffic-accident-night-jaywalk-pedestrian-fault-ratio-track`
- 경쟁 `traffic-accident-pedestrian-jaywalk-night-fault-ratio-track`
- A: 야간 무단횡단 보행자 과실비율 판단 `판단형/victim`
- B: 무단횡단 야간 보행자 사고 과실비율 판단 `판단형/victim`
- A메타: 야간 무단횡단 보행자 과실비율 — 5단계 신호위반 인과관계 점검 | 로앤가이드
- B메타: 무단횡단 야간 보행자 사고 과실비율 — 5단계 인과관계 점검 | 로앤가이드

**2. [wage] 0.87 → merge**
- 대표 `wage-annual-leave-allowance-unused-nonpayment-claim-track`
- 경쟁 `wage-unused-annual-leave-allowance-nonpayment-claim-track`
- A: 연차수당 미사용 미지급 청구 판단 `판단형/victim`
- B: 미사용 연차 연차수당 미지급 청구 판단 `판단형/victim`
- A메타: 미사용 연차수당 미지급 — 5단계 발생·차액 점검 | 로앤가이드
- B메타: 미사용 연차수당 미지급 5단계 청구 점검 | 로앤가이드

**3. [divorce] 0.84 → merge**
- 대표 `divorce-spouse-retirement-pension-future-division-track`
- 경쟁 `divorce-spouse-retirement-pension-future-benefit-division-track`
- A: 배우자 퇴직연금 장래 재산분할 판단 `판단형/neutral`
- B: 배우자 퇴직연금 장래 수령분 재산분할 판단 `판단형/neutral`
- A메타: 배우자 퇴직연금 장래 재산분할 — 5단계 기준시점 점검 | 로앤가이드
- B메타: 배우자 퇴직연금 장래 수령분 재산분할 — 5단계 사전포기 점검 | 로앤가이드

**4. [traffic-accident] 0.84 → merge**
- 대표 `traffic-accident-bicycle-lane-collision-fault-ratio-track`
- 경쟁 `traffic-accident-bicycle-lane-car-collision-fault-ratio-track`
- A: 자전거도로 충돌 과실비율 판단 `판단형/victim`
- B: 자전거도로 차량 충돌 과실비율 판단 `판단형/victim`
- A메타: 자전거도로 충돌 과실비율 — 5단계 공단 대위·책임보험금 점검 | 로앤가이드
- B메타: 자전거도로 차량 충돌 과실비율 — 5단계 공단 대위 범위 점검 | 로앤가이드

**5. [divorce] 0.83 → merge**
- 대표 `divorce-inherited-property-division-contribution-track`
- 경쟁 `divorce-inherited-property-contribution-division-track`
- A: 상속받은 재산 재산분할 기여도 판단 `판단형/neutral`
- B: 상속받은 재산 기여도 재산분할 대상 판단 `판단형/neutral`
- A메타: 상속받은 재산 재산분할 기여도 — 5단계 채무초과·분담 점검 | 로앤가이드
- B메타: 상속재산 기여도 재산분할 — 5단계 채무 초과 분담 점검 | 로앤가이드

**6. [divorce] 0.81 → merge**
- 대표 `divorce-spouse-business-debt-marriage-breakdown-alimony-track`
- 경쟁 `divorce-spouse-gambling-debt-marriage-breakdown-alimony-track`
- A: 배우자 도박 채무 혼인파탄 위자료 판단 `판단형/neutral`
- B: 배우자 사업 채무 혼인파탄 위자료 판단 `판단형/neutral`
- A메타: 배우자 도박 채무 혼인파탄 위자료 — 5단계 중대한 사유 점검 | 로앤가이드
- B메타: 배우자 사업 채무 혼인파탄 위자료 — 5단계 중대한 사유 점검 | 로앤가이드

**7. [divorce] 0.80 → merge**
- 대표 `divorce-business-goodwill-property-division-track`
- 경쟁 `divorce-business-entity-goodwill-asset-division-track`
- A: 사업체 영업권 재산분할 판단 `판단형/neutral`
- B: 영업권 사업체 재산분할 판단 `판단형/neutral`
- A메타: 사업체 영업권 재산분할 판단 — 5단계 채무 공제·분할 비율 점검 | 로앤가이드
- B메타: 영업권 사업체 재산분할 판단 — 5단계 채무초과·분담 기준 점검 | 로앤가이드

**8. [divorce] 0.80 → merge**
- 대표 `divorce-spouse-business-goodwill-division-track`
- 경쟁 `divorce-spouse-business-goodwill-value-division-track`
- A: 배우자 사업체 영업권 재산분할 판단 `판단형/neutral`
- B: 배우자 사업체 영업권 가치 재산분할 판단 `판단형/neutral`
- A메타: 배우자 사업체 영업권 재산분할 — 5단계 제척기간 점검 | 로앤가이드
- B메타: 배우자 사업체 영업권 재산분할 — 5단계 분할비율 점검 | 로앤가이드

**9. [traffic-accident] 0.79 → merge**
- 대표 `traffic-accident-pedestrian-jaywalking-fault-ratio-track`
- 경쟁 `traffic-accident-pedestrian-jaywalk-night-fault-ratio-track`
- A: 무단횡단 야간 보행자 사고 과실비율 판단 `판단형/victim`
- B: 무단횡단 보행자 사고 과실비율 판단 `판단형/victim`
- A메타: 무단횡단 야간 보행자 사고 과실비율 — 5단계 인과관계 점검 | 로앤가이드
- B메타: 무단횡단 보행자 사고 과실비율 — 5단계 대위 점검 | 로앤가이드

**10. [unemployment] 0.79 → merge**
- 대표 `unemployment-contract-expiry-renewal-refusal-allowance-track`
- 경쟁 `unemployment-contract-expiry-nonrenewal-just-cause-track`
- A: 계약기간 만료 갱신거절 구직급여 수급 절차 `절차형/victim`
- B: 계약기간 만료 갱신거절 구직급여 절차 `절차형/victim`
- A메타: 계약만료 갱신거절 실업급여 — 5단계 수급자격 점검 | 로앤가이드
- B메타: 계약만료 갱신거절 실업급여 — 5단계 수급자격 점검 | 로앤가이드

**11. [divorce] 0.78 → merge**
- 대표 `divorce-domestic-violence-marriage-breakdown-alimony-track`
- 경쟁 `divorce-spouse-domestic-violence-breakdown-alimony-track`
- A: 가정폭력 혼인파탄 위자료 판단 `판단형/neutral`
- B: 배우자 가정폭력 혼인파탄 위자료 판단 `판단형/neutral`
- A메타: 가정폭력 혼인파탄 위자료 — 5단계 중대한 사유 점검 | 로앤가이드
- B메타: 배우자 가정폭력 혼인파탄 위자료 — 5단계 책임 점검 | 로앤가이드

**12. [divorce] 0.76 → merge**
- 대표 `divorce-spouse-infidelity-breakdown-alimony-track`
- 경쟁 `divorce-spouse-infidelity-affair-breakdown-alimony-track`
- A: 배우자 부정행위 혼인파탄 위자료 판단 `판단형/neutral`
- B: 배우자 외도 부정행위 혼인파탄 위자료 판단 `판단형/neutral`
- A메타: 배우자 부정행위 혼인파탄 위자료 — 5단계 책임 점검 | 로앤가이드
- B메타: 배우자 외도 부정행위 위자료 — 5단계 상간자·시효 점검 | 로앤가이드

**13. [divorce] 0.76 → merge**
- 대표 `divorce-spouse-retirement-pension-division-track`
- 경쟁 `divorce-spouse-retirement-pension-future-division-track`
- A: 배우자 퇴직연금 재산분할 청산 판단 `판단형/neutral`
- B: 배우자 퇴직연금 장래 재산분할 판단 `판단형/neutral`
- A메타: 배우자 퇴직연금 재산분할 — 5단계 채무초과·분할비율 점검 | 로앤가이드
- B메타: 배우자 퇴직연금 장래 재산분할 — 5단계 기준시점 점검 | 로앤가이드

**14. [fraud] 0.76 → merge**
- 대표 `fraud-acquaintance-loan-default-falsely-accused-defense`
- 경쟁 `fraud-loan-default-falsely-accused-defense`
- A: 지인 차용금 변제지체 사기 무고 `판단형/accused`
- B: 차용금 변제지체 사기 무고 `판단형/accused`
- A메타: 차용금 변제지체 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드
- B메타: 차용금 변제지체 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드

**15. [traffic-accident] 0.75 → merge**
- 대표 `traffic-accident-crosswalk-pedestrian-fault-ratio-track`
- 경쟁 `traffic-accident-pedestrian-crosswalk-signal-fault-ratio-track`
- A: 횡단보도 보행자 사고 과실비율 판단 `판단형/victim`
- B: 보행자 횡단보도 신호위반 과실비율 판단 `판단형/victim`
- A메타: 횡단보도 보행자 사고 과실비율 — 5단계 공단 구상·책임보험금 점검 | 로앤가이드
- B메타: 보행자 횡단보도 신호위반 과실비율 — 5단계 과실상계·공단 대위 점검 | 로앤가이드

**16. [divorce] 0.75 → merge**
- 대표 `divorce-spouse-infidelity-breakdown-alimony-track`
- 경쟁 `divorce-spouse-domestic-violence-breakdown-alimony-track`
- A: 배우자 부정행위 혼인파탄 위자료 판단 `판단형/neutral`
- B: 배우자 가정폭력 혼인파탄 위자료 판단 `판단형/neutral`
- A메타: 배우자 부정행위 혼인파탄 위자료 — 5단계 책임 점검 | 로앤가이드
- B메타: 배우자 가정폭력 혼인파탄 위자료 — 5단계 책임 점검 | 로앤가이드

**17. [divorce] 0.75 → merge**
- 대표 `divorce-title-trust-real-estate-division-track`
- 경쟁 `divorce-spouse-name-trust-real-estate-division-track`
- A: 명의신탁 부동산 재산분할 판단 `판단형/neutral`
- B: 배우자 명의신탁 부동산 재산분할 판단 `판단형/neutral`
- A메타: 명의신탁 부동산 재산분할 판단 — 5단계 사전포기·포기약정 점검 | 로앤가이드
- B메타: 배우자 명의신탁 부동산 재산분할 — 5단계 명의 점검 | 로앤가이드

**18. [divorce] 0.74 → merge**
- 대표 `divorce-in-law-mistreatment-marriage-breakdown-alimony-track`
- 경쟁 `divorce-inlaws-mistreatment-marriage-breakdown-alimony-track`
- A: 시댁 처가 부당대우 혼인파탄 위자료 판단 `판단형/neutral`
- B: 시댁 부당대우 혼인파탄 유책 위자료 판단 `판단형/neutral`
- A메타: 시댁·처가 부당대우 혼인파탄 위자료 — 5단계 중대한 사유 점검 | 로앤가이드
- B메타: 시댁 부당대우 혼인파탄 위자료 — 5단계 유책배우자 점검 | 로앤가이드

**19. [divorce] 0.74 → merge**
- 대표 `divorce-business-goodwill-property-division-track`
- 경쟁 `divorce-business-goodwill-valuation-property-division-track`
- A: 영업권 사업체 재산분할 판단 `판단형/neutral`
- B: 배우자 사업체 영업권 평가 재산분할 판단 `판단형/neutral`
- A메타: 영업권 사업체 재산분할 판단 — 5단계 채무초과·분담 기준 점검 | 로앤가이드
- B메타: 배우자 사업체 영업권 재산분할 — 5단계 사전포기 효력 점검 | 로앤가이드

**20. [divorce] 0.73 → merge**
- 대표 `divorce-future-retirement-pension-property-division-track`
- 경쟁 `divorce-spouse-retirement-pension-future-division-track`
- A: 장래 퇴직금 퇴직연금 재산분할 대상 판단 `판단형/neutral`
- B: 배우자 퇴직연금 장래 재산분할 판단 `판단형/neutral`
- A메타: 장래 퇴직금·퇴직연금 재산분할 — 5단계 분할 기준시점 점검 | 로앤가이드
- B메타: 배우자 퇴직연금 장래 재산분할 — 5단계 기준시점 점검 | 로앤가이드

**21. [divorce] 0.73 → merge**
- 대표 `divorce-business-goodwill-valuation-property-division-track`
- 경쟁 `divorce-spouse-business-goodwill-value-division-track`
- A: 배우자 사업체 영업권 평가 재산분할 판단 `판단형/neutral`
- B: 배우자 사업체 영업권 가치 재산분할 판단 `판단형/neutral`
- A메타: 배우자 사업체 영업권 재산분할 — 5단계 사전포기 효력 점검 | 로앤가이드
- B메타: 배우자 사업체 영업권 재산분할 — 5단계 분할비율 점검 | 로앤가이드

**22. [divorce] 0.73 → merge**
- 대표 `divorce-concealed-asset-division-track`
- 경쟁 `divorce-hidden-asset-concealment-track`
- A: 배우자 재산 은닉 재산분할 `판단형/neutral`
- B: 재산 은닉 재산분할 `판단형/neutral`
- A메타: 배우자 재산 은닉 재산분할 — 5단계 사전포기·은닉재산 점검 | 로앤가이드
- B메타: 재산 은닉 재산분할 — 5단계 은닉·사전포기 점검 | 로앤가이드

**23. [divorce] 0.73 → merge**
- 대표 `divorce-spouse-gambling-debt-marriage-breakdown-alimony-track`
- 경쟁 `divorce-spouse-gambling-waste-breakdown-alimony-track`
- A: 배우자 도박 채무 혼인파탄 위자료 판단 `판단형/neutral`
- B: 배우자 도박 낭비 혼인파탄 위자료 판단 `판단형/neutral`
- A메타: 배우자 도박 채무 혼인파탄 위자료 — 5단계 중대한 사유 점검 | 로앤가이드
- B메타: 배우자 도박 낭비 혼인파탄 위자료 — 5단계 유책 점검 | 로앤가이드

**24. [traffic-accident] 0.73 → merge**
- 대표 `traffic-accident-motorcycle-lane-filtering-fault-ratio-track`
- 경쟁 `traffic-accident-motorcycle-lane-splitting-fault-ratio-track`
- A: 이륜차 차로 사이 주행 사고 과실비율 판단 `판단형/victim`
- B: 오토바이 차로 사이 주행 사고 과실비율 판단 `판단형/victim`
- A메타: 이륜차 차로 사이 주행 사고 과실비율 — 5단계 일실수익·과실상계 점검 | 로앤가이드
- B메타: 오토바이 차로 사이 주행 사고 과실비율 — 5단계 점검 | 로앤가이드

**25. [traffic-accident] 0.73 → merge**
- 대표 `traffic-accident-night-jaywalk-pedestrian-fault-ratio-track`
- 경쟁 `traffic-accident-pedestrian-jaywalk-fault-ratio-track`
- A: 보행자 무단횡단 과실비율 판단 `판단형/victim`
- B: 야간 무단횡단 보행자 과실비율 판단 `판단형/victim`
- A메타: 보행자 무단횡단 과실비율 판단 — 5단계 일실수익·과실상계 점검 | 로앤가이드
- B메타: 야간 무단횡단 보행자 과실비율 — 5단계 신호위반 인과관계 점검 | 로앤가이드

**26. [divorce] 0.73 → merge**
- 대표 `divorce-spouse-hidden-overseas-asset-division-track`
- 경쟁 `divorce-hidden-asset-concealment-track`
- A: 배우자 재산 은닉 재산분할 `판단형/neutral`
- B: 배우자 은닉 해외 재산 재산분할 판단 `판단형/neutral`
- A메타: 배우자 재산 은닉 재산분할 — 5단계 사전포기·은닉재산 점검 | 로앤가이드
- B메타: 배우자 은닉 해외 재산 재산분할 — 5단계 사전포기 점검 | 로앤가이드

**27. [divorce] 0.72 → merge**
- 대표 `divorce-business-goodwill-valuation-property-division-track`
- 경쟁 `divorce-spouse-business-goodwill-division-track`
- A: 배우자 사업체 영업권 평가 재산분할 판단 `판단형/neutral`
- B: 배우자 사업체 영업권 재산분할 판단 `판단형/neutral`
- A메타: 배우자 사업체 영업권 재산분할 — 5단계 사전포기 효력 점검 | 로앤가이드
- B메타: 배우자 사업체 영업권 재산분할 — 5단계 제척기간 점검 | 로앤가이드

**28. [divorce] 0.72 → retitle**
- 대표 `divorce-unvested-stock-option-property-division-track`
- 경쟁 `divorce-unvested-stock-option-division-track`
- A: 미확정 스톡옵션 재산분할 판단 `판단형/neutral`
- B: 미확정 스톡옵션 재산분할 대상 판단 `절차형/neutral`
- A메타: 미확정 스톡옵션 재산분할 판단 — 5단계 실질 청산·상속 승계 점검 | 로앤가이드
- B메타: 미확정 스톡옵션 재산분할 — 5단계 공동재산 처분 점검 | 로앤가이드

**29. [dui] 0.72 → merge**
- 대표 `dui-hangover-next-morning-driving-falsely-accused-defense`
- 경쟁 `dui-next-morning-residual-alcohol-falsely-accused-defense`
- A: 다음날 아침 숙취 잔류알코올 음주운전 여부 `판단형/accused`
- B: 숙취 다음날 아침 음주운전 처벌 여부 `판단형/accused`
- A메타: 다음날 아침 숙취 음주 — 5단계 위드마크 전제 점검 | 로앤가이드
- B메타: 숙취 다음날 아침 음주 — 5단계 위드마크 전제 점검 | 로앤가이드

**30. [divorce] 0.72 → retitle**
- 대표 `divorce-future-severance-pay-retirement-division-track`
- 경쟁 `divorce-future-severance-pay-property-division-track`
- A: 장래 퇴직금 재산분할 대상 판단 `절차형/neutral`
- B: 장래 퇴직금 재산분할 판단 `판단형/neutral`
- A메타: 장래 퇴직금 재산분할 — 5단계 상속인 승계 청구 절차 점검 | 로앤가이드
- B메타: 장래 퇴직금 재산분할 — 5단계 채무초과 분담 점검 | 로앤가이드

**31. [wage] 0.71 → merge**
- 대표 `wage-annual-leave-allowance-unused-nonpayment-claim-track`
- 경쟁 `wage-unused-annual-leave-allowance-unpaid-claim-track`
- A: 미사용 연차휴가 미지급 수당 청구 판단 `판단형/victim`
- B: 연차수당 미사용 미지급 청구 판단 `판단형/victim`
- A메타: 미사용 연차수당 — 5단계 통상임금 기초 차액 점검 | 로앤가이드
- B메타: 미사용 연차수당 미지급 — 5단계 발생·차액 점검 | 로앤가이드

**32. [traffic-accident] 0.71 → merge**
- 대표 `traffic-accident-crosswalk-pedestrian-fault-ratio-track`
- 경쟁 `traffic-accident-pedestrian-jaywalking-fault-ratio-track`
- A: 횡단보도 보행자 사고 과실비율 판단 `판단형/victim`
- B: 무단횡단 보행자 사고 과실비율 판단 `판단형/victim`
- A메타: 횡단보도 보행자 사고 과실비율 — 5단계 공단 구상·책임보험금 점검 | 로앤가이드
- B메타: 무단횡단 보행자 사고 과실비율 — 5단계 대위 점검 | 로앤가이드

**33. [fraud] 0.71 → merge**
- 대표 `fraud-used-electric-scooter-prepay-nondelivery-track`
- 경쟁 `fraud-used-musical-instrument-direct-deal-prepay-no-delivery-track`
- A: 중고 전동킥보드 직거래 입금 미인도 사기 `절차형/victim`
- B: 중고 악기 직거래 입금 후 미인도 사기 `절차형/victim`
- A메타: 중고 전동킥보드 직거래 입금 미인도 사기 — 5단계 편취 점검 | 로앤가이드
- B메타: 중고 악기 직거래 미인도 사기 — 5단계 편취 점검 | 로앤가이드

**34. [traffic-accident] 0.71 → merge**
- 대표 `traffic-accident-pedestrian-crosswalk-signal-fault-ratio-track`
- 경쟁 `traffic-accident-bicycle-crosswalk-pedestrian-collision-fault-ratio-track`
- A: 보행자 횡단보도 신호위반 과실비율 판단 `판단형/victim`
- B: 자전거 횡단보도 보행자 충돌 과실비율 판단 `판단형/victim`
- A메타: 보행자 횡단보도 신호위반 과실비율 — 5단계 과실상계·공단 대위 점검 | 로앤가이드
- B메타: 자전거 횡단보도 보행자 충돌 과실비율 — 5단계 공단 대위 점검 | 로앤가이드

**35. [fraud] 0.71 → merge**
- 대표 `fraud-gym-membership-prepaid-sudden-closure-track`
- 경쟁 `fraud-membership-gym-prepaid-sudden-closure-track`
- A: 헬스장 회원권 선결제 후 폐업 잠적 사기 `판단형/victim`
- B: 헬스장 회원권 선불 결제 갑작스런 폐업 기망 사기 `판단형/victim`
- A메타: 헬스장 회원권 선결제 후 폐업 잠적 사기 — 5단계 편취 점검 | 로앤가이드
- B메타: 헬스장 선불 회원권 폐업 사기 — 5단계 편취 점검 | 로앤가이드

**36. [traffic-accident] 0.71 → merge**
- 대표 `traffic-accident-pedestrian-jaywalk-fault-ratio-track`
- 경쟁 `traffic-accident-pedestrian-jaywalking-fault-ratio-track`
- A: 보행자 무단횡단 과실비율 판단 `판단형/victim`
- B: 무단횡단 보행자 사고 과실비율 판단 `판단형/victim`
- A메타: 보행자 무단횡단 과실비율 판단 — 5단계 일실수익·과실상계 점검 | 로앤가이드
- B메타: 무단횡단 보행자 사고 과실비율 — 5단계 대위 점검 | 로앤가이드

**37. [traffic-accident] 0.70 → merge**
- 대표 `traffic-accident-night-jaywalk-pedestrian-fault-ratio-track`
- 경쟁 `traffic-accident-pedestrian-jaywalking-fault-ratio-track`
- A: 야간 무단횡단 보행자 과실비율 판단 `판단형/victim`
- B: 무단횡단 보행자 사고 과실비율 판단 `판단형/victim`
- A메타: 야간 무단횡단 보행자 과실비율 — 5단계 신호위반 인과관계 점검 | 로앤가이드
- B메타: 무단횡단 보행자 사고 과실비율 — 5단계 대위 점검 | 로앤가이드

**38. [wage] 0.70 → merge**
- 대표 `wage-annual-leave-allowance-unused-unpaid-claim-track`
- 경쟁 `wage-unused-annual-leave-allowance-unpaid-claim-track`
- A: 미사용 연차휴가 미지급 수당 청구 판단 `판단형/victim`
- B: 연차 미사용수당 미지급 청구 판단 `판단형/victim`
- A메타: 미사용 연차수당 — 5단계 통상임금 기초 차액 점검 | 로앤가이드
- B메타: 연차 미사용수당 — 5단계 통상임금 기초·차액 점검 | 로앤가이드

**39. [divorce] 0.70 → merge**
- 대표 `divorce-spouse-gambling-debt-marital-breakdown-grounds-track`
- 경쟁 `divorce-spouse-gambling-debt-accumulation-grounds-track`
- A: 배우자 도박 채무 누적 이혼 사유 `판단형/neutral`
- B: 배우자 도박 채무 혼인파탄 이혼 사유 `판단형/neutral`
- A메타: 배우자 도박 채무 누적 이혼 사유 — 5단계 부당대우·중대한 사유 점검 | 로앤가이드
- B메타: 배우자 도박 채무 혼인파탄 이혼 — 5단계 분할 대상·기준시기 점검 | 로앤가이드

**40. [unemployment] 0.70 → merge**
- 대표 `unemployment-workplace-relocation-track`
- 경쟁 `unemployment-worksite-relocation-track`
- A: 사업장 이전 통근곤란 구직급여 `절차형/victim`
- B: 사업장 이전 통근곤란 자진퇴사 구직급여 `절차형/victim`
- A메타: 사업장 이전 통근곤란 구직급여 — 5단계 이직·재취업수당 점검 | 로앤가이드
- B메타: 사업장 이전 통근곤란 자진퇴사 구직급여 — 5단계 재취업·조기수당 점검 | 로앤가이드

**41. [traffic-accident] 0.70 → merge**
- 대표 `traffic-accident-crosswalk-pedestrian-fault-ratio-track`
- 경쟁 `traffic-accident-bicycle-crosswalk-pedestrian-collision-fault-ratio-track`
- A: 횡단보도 보행자 사고 과실비율 판단 `판단형/victim`
- B: 자전거 횡단보도 보행자 충돌 과실비율 판단 `판단형/victim`
- A메타: 횡단보도 보행자 사고 과실비율 — 5단계 공단 구상·책임보험금 점검 | 로앤가이드
- B메타: 자전거 횡단보도 보행자 충돌 과실비율 — 5단계 공단 대위 점검 | 로앤가이드

**42. [divorce] 0.70 → merge**
- 대표 `divorce-business-goodwill-property-division-track`
- 경쟁 `divorce-spouse-business-goodwill-division-track`
- A: 영업권 사업체 재산분할 판단 `판단형/neutral`
- B: 배우자 사업체 영업권 재산분할 판단 `판단형/neutral`
- A메타: 영업권 사업체 재산분할 판단 — 5단계 채무초과·분담 기준 점검 | 로앤가이드
- B메타: 배우자 사업체 영업권 재산분할 — 5단계 제척기간 점검 | 로앤가이드

**43. [divorce] 0.70 → merge**
- 대표 `divorce-adultery-marriage-breakdown-alimony-track`
- 경쟁 `divorce-spouse-infidelity-breakdown-alimony-track`
- A: 부정행위 혼인파탄 위자료 판단 `판단형/neutral`
- B: 배우자 부정행위 혼인파탄 위자료 판단 `판단형/neutral`
- A메타: 부정행위 혼인파탄 위자료 판단 — 5단계 중대한 사유·파탄 점검 | 로앤가이드
- B메타: 배우자 부정행위 혼인파탄 위자료 — 5단계 책임 점검 | 로앤가이드

**44. [unemployment] 0.70 → merge**
- 대표 `unemployment-contract-expiry-track`
- 경쟁 `unemployment-fixed-term-end-track`
- A: 계약만료 자진퇴사 구직급여 `절차형/victim`
- B: 계약만료 자진퇴사 구직급여 수급 `절차형/victim`
- A메타: 계약만료 자진퇴사 구직급여 — 5단계 부정수급·반환 점검 | 로앤가이드
- B메타: 계약만료 자진퇴사 구직급여 — 5단계 반환·추가징수 점검 | 로앤가이드

**45. [divorce] 0.69 → merge**
- 대표 `divorce-adultery-marriage-breakdown-alimony-track`
- 경쟁 `divorce-domestic-violence-marriage-breakdown-alimony-track`
- A: 부정행위 혼인파탄 위자료 판단 `판단형/neutral`
- B: 가정폭력 혼인파탄 위자료 판단 `판단형/neutral`
- A메타: 부정행위 혼인파탄 위자료 판단 — 5단계 중대한 사유·파탄 점검 | 로앤가이드
- B메타: 가정폭력 혼인파탄 위자료 — 5단계 중대한 사유 점검 | 로앤가이드

**46. [divorce] 0.69 → merge**
- 대표 `divorce-business-goodwill-property-division-track`
- 경쟁 `divorce-spouse-business-goodwill-value-division-track`
- A: 영업권 사업체 재산분할 판단 `판단형/neutral`
- B: 배우자 사업체 영업권 가치 재산분할 판단 `판단형/neutral`
- A메타: 영업권 사업체 재산분할 판단 — 5단계 채무초과·분담 기준 점검 | 로앤가이드
- B메타: 배우자 사업체 영업권 재산분할 — 5단계 분할비율 점검 | 로앤가이드

**47. [divorce] 0.69 → merge**
- 대표 `divorce-spouse-retirement-pension-division-track`
- 경쟁 `divorce-spouse-retirement-pension-future-benefit-division-track`
- A: 배우자 퇴직연금 재산분할 청산 판단 `판단형/neutral`
- B: 배우자 퇴직연금 장래 수령분 재산분할 판단 `판단형/neutral`
- A메타: 배우자 퇴직연금 재산분할 — 5단계 채무초과·분할비율 점검 | 로앤가이드
- B메타: 배우자 퇴직연금 장래 수령분 재산분할 — 5단계 사전포기 점검 | 로앤가이드

**48. [divorce] 0.69 → merge**
- 대표 `divorce-inherited-asset-property-division-contribution-track`
- 경쟁 `divorce-inherited-asset-marital-contribution-division-track`
- A: 상속재산 혼인 기여 재산분할 판단 `판단형/neutral`
- B: 혼인 중 상속재산 재산분할 대상 여부 판단 `판단형/neutral`
- A메타: 상속재산 혼인 기여 재산분할 — 5단계 기여도·공동재산 청산 점검 | 로앤가이드
- B메타: 혼인 중 상속재산 재산분할 대상 — 5단계 채무 공제·기여도 점검 | 로앤가이드

**49. [unemployment] 0.69 → merge**
- 대표 `unemployment-workplace-harassment-resignation-track`
- 경쟁 `unemployment-workplace-bullying-resignation-track`
- A: 직장내 괴롭힘 자진퇴사 구직급여 `절차형/victim`
- B: 직장내 괴롭힘 자진퇴사 구직급여 수급 `절차형/victim`
- A메타: 직장내 괴롭힘 자진퇴사 구직급여 — 5단계 반환·추가징수 점검 | 로앤가이드
- B메타: 직장내 괴롭힘 자진퇴사 구직급여 — 5단계 부정수급·증명책임 점검 | 로앤가이드

**50. [unemployment] 0.69 → merge**
- 대표 `unemployment-contract-condition-breach-resignation-just-cause-track`
- 경쟁 `unemployment-labor-condition-violation-resignation-just-cause-track`
- A: 근로조건 저하 자진퇴사 구직급여 절차 `절차형/victim`
- B: 채용 조건 위반 자진퇴사 구직급여 절차 `절차형/victim`
- A메타: 근로조건 저하 자진퇴사 실업급여 — 5단계 수급 점검 | 로앤가이드
- B메타: 채용 조건 위반 자진퇴사 실업급여 — 5단계 수급 점검 | 로앤가이드

## 4. 도메인별 대표 스포크 유지 전략

클러스터별 대표 1개만 남기고 나머지는 대표로 내부링크를 집중. 클러스터 크기 상위 12개:

| # | 도메인 | 페이지수 | 대표 스포크 | 대표 inb | 종속 후보(인바운드 낮은 순 4개) |
|---|---|---|---|---|---|
| 1 | assault | 61 | `assault-bus-priority-seat-dispute-strike-report-track` | 20 | `assault-parking-space-quarrel-track`, `assault-pub-drunk-stranger-shove-strike-report-track`, `assault-elevator-dispute-track`, `assault-pub-drunken-fight-track` |
| 2 | sex-crime | 54 | `sex-crime-club-crowded-dancefloor-touch-report-track` | 23 | `sex-crime-water-park-track`, `sex-crime-dance-academy-choreography-guidance-touch-report-track`, `sex-crime-waxing-shop-service-pretext-touch-report-track`, `sex-crime-outdoor-festival-grope-track` |
| 3 | divorce | 43 | `divorce-inherited-asset-property-division-contribution-track` | 10 | `divorce-spouse-business-goodwill-value-division-track`, `divorce-hidden-asset-concealment-track`, `divorce-spouse-stock-account-hidden-asset-division-track`, `divorce-spouse-honorary-retirement-lumpsum-division-track` |
| 4 | wage | 35 | `wage-comprehensive-salary-fixed-overtime-difference-claim-track` | 18 | `wage-unused-annual-leave-allowance-nonpayment-claim-track`, `wage-annual-paid-leave-allowance-track`, `wage-night-shift-allowance-track`, `wage-comprehensive-salary-overtime-shortfall-difference-claim-track` |
| 5 | divorce | 26 | `divorce-desertion-ground-track` | 9 | `divorce-spouse-domestic-violence-breakdown-alimony-track`, `divorce-spouse-infidelity-affair-breakdown-alimony-track`, `divorce-inlaws-mistreatment-marriage-breakdown-alimony-track`, `divorce-spouse-gambling-waste-breakdown-alimony-track` |
| 6 | assault | 25 | `assault-amateur-soccer-match-tackle-scuffle-falsely-accused-defense` | 20 | `assault-pub-table-dispute-mutual-falsely-accused-defense`, `assault-pub-accidental-contact-falsely-accused-defense`, `assault-dating-couple-falsely-accused-defense`, `assault-group-brawl-falsely-accused-defense` |
| 7 | traffic-accident | 23 | `traffic-accident-crosswalk-pedestrian-fault-ratio-track` | 11 | `traffic-accident-bicycle-crosswalk-pedestrian-collision-fault-ratio-track`, `traffic-accident-motorcycle-right-turn-collision-fault-ratio-track`, `traffic-accident-parking-lot-reversing-fault-track`, `traffic-accident-bicycle-pedestrian-fault-track` |
| 8 | industrial-accident | 17 | `industrial-accident-overwork-cerebral-cardiac-disease-track` | 6 | `industrial-accident-overwork-cardiocerebrovascular-disease-recognition-track`, `industrial-accident-commute-route-traffic-accident-recognition-track`, `industrial-accident-overwork-cerebral-cardiac-disease-recognition-track`, `industrial-accident-overwork-cerebral-track` |
| 9 | defamation | 16 | `defamation-open-chat-false-fact-spread-report-track` | 11 | `defamation-blind-app-anonymous-post-report-track`, `defamation-mom-cafe-false-review-store-posting-report-track`, `defamation-open-chat-room-rumor-report-track`, `defamation-openchat-anonymous-rumor-spread-report-track` |
| 10 | defamation | 15 | `defamation-delivery-app-false-review-report-track` | 10 | `defamation-review-site-false-experience-report-track`, `defamation-review-platform-false-review-track`, `defamation-apartment-bulletin-track`, `defamation-neighborhood-momcafe-false-post-report-track` |
| 11 | defamation | 14 | `defamation-true-fact-public-interest-purpose-falsely-accused-defense` | 10 | `defamation-truthful-review-falsely-accused-defense`, `defamation-public-institution-service-criticism-review-falsely-accused-defense`, `defamation-press-interview-falsely-accused-defense`, `defamation-news-article-comment-falsely-accused-defense` |
| 12 | sex-crime | 14 | `sex-crime-afterwork-drink-contact-falsely-accused-defense` | 11 | `sex-crime-workplace-dinner-falsely-accused-defense`, `sex-crime-noraebang-room-falsely-accused-defense`, `sex-crime-business-trip-lodging-falsely-accused-defense`, `sex-crime-taxi-rideshare-contact-falsely-accused-defense` |

### 클러스터 상세 (상위 5개 전체 목록)

**클러스터 1 — assault (61페이지)** 대표: `assault-bus-priority-seat-dispute-strike-report-track`
- [대표] `assault-bus-priority-seat-dispute-strike-report-track` inb20 8208c — 버스 좌석 시비 폭행 상해 신고
- [종속] `assault-bus-alighting-bell-dispute-strike-report-track` inb19 8763c — 버스 하차벨 시비 폭행 상해 신고
- [종속] `assault-parking-doording-dispute-strike-report-track` inb19 8740c — 주차장 문콕 시비 폭행 상해 신고
- [종속] `assault-convenience-store-queue-dispute-strike-report-track` inb19 8683c — 편의점 계산 순서 시비 폭행 상해 신고
- [종속] `assault-convenience-store-clerk-dispute-strike-report-track` inb19 7894c — 편의점 점원 시비 폭행 상해 신고
- [종속] `assault-delivery-rider-passage-dispute-strike-report-track` inb18 8408c — 배달 라이더 통행 시비 폭행 상해 신고
- [종속] `assault-street-smoking-dispute-strike-report-track` inb18 8406c — 길거리 흡연 시비 폭행 상해 신고
- [종속] `assault-floor-noise-complaint-visit-strike-report-track` inb18 8364c — 층간소음 항의 방문 폭행 상해 신고
- [종속] `assault-elevator-pet-leash-dispute-strike-report-track` inb18 8071c — 엘리베이터 반려견 시비 폭행 상해 신고
- [종속] `assault-parking-dispute-driver-strike-report-track` inb11 7506c — 주차 시비 운전자 폭행 상해 신고
- [종속] `assault-bar-shoulder-bump-dispute-strike-report-track` inb10 7951c — 술집 어깨 부딪힘 시비 폭행 상해 신고
- [종속] `assault-parking-lot-dispute-strike-injury-report-track` inb9 7621c — 주차 시비 폭행 상해 신고
- [종속] `assault-apartment-hallway-dispute-injury-report-track` inb9 7386c — 공동주택 복도 시비 폭행 상해 신고
- [종속] `assault-apartment-noise-complaint-visit-strike-report-track` inb8 8108c — 아파트 층간소음 항의 방문 폭행 상해 신고
- [종속] `assault-apartment-floor-noise-complaint-strike-report-track` inb8 7603c — 아파트 층간소음 항의 폭행 상해 신고
- [종속] `assault-delivery-rider-road-dispute-strike-report-track` inb7 7541c — 배달 라이더 도로 시비 폭행 상해 신고
- [종속] `assault-bar-shoulder-bump-dispute-injury-report-track` inb7 7331c — 술집 어깨 시비 폭행 상해 신고
- [종속] `assault-bar-drunk-stranger-strike-report-track` inb7 7201c — 술집 취객 폭행 상해 신고
- [종속] `assault-taxi-fare-dispute-driver-strike-report-track` inb6 7352c — 택시 요금 시비 기사 폭행 상해 신고
- [종속] `assault-dog-leash-dispute-injury-report-track` inb6 7174c — 반려견 목줄 시비 폭행 상해 신고
- [종속] `assault-parking-spot-quarrel-injury-track` inb6 7089c — 주차 자리 시비 폭행 상해
- [종속] `assault-noise-complaint-neighbor-track` inb6 7007c — 층간소음 항의 이웃 폭행 상해
- [종속] `assault-public-bath-sauna-seat-dispute-strike-report-track` inb5 7734c — 목욕탕 사우나 자리 시비 폭행 상해 신고
- [종속] `assault-mart-parking-space-dispute-strike-report-track` inb5 7680c — 마트 주차장 자리 시비 폭행 상해 신고
- [종속] `assault-parking-dispute-pushing-injury-track` inb5 7240c — 주차 시비 밀침 상해 신고
- [종속] `assault-baseball-stadium-cheering-dispute-strike-report-track` inb4 8397c — 야구장 응원 시비 폭행 상해 신고
- [종속] `assault-parking-lot-space-dispute-strike-injury-report-track` inb4 7947c — 주차장 자리 시비 폭행 상해 신고
- [종속] `assault-convenience-store-clerk-customer-strike-report-track` inb4 7804c — 편의점 점원 손님 폭행 상해 신고
- [종속] `assault-taxi-fare-dispute-strike-injury-report-track` inb4 7753c — 택시 요금 시비 폭행 상해 신고
- [종속] `assault-parking-lot-confrontation-injury-report-track` inb4 7270c — 주차장 시비 폭행 상해 신고
- [종속] `assault-elevator-confrontation-injury-report-track` inb4 7185c — 아파트 엘리베이터 시비 폭행 상해 신고
- [종속] `assault-road-rage-retaliation-track` inb4 6984c — 운전 시비 보복 폭행 상해
- [종속] `assault-floor-noise-complaint-track` inb4 6767c — 윗집 층간소음 폭행 상해
- [종속] `assault-convenience-store-counter-dispute-strike-report-track` inb3 7993c — 편의점 계산대 시비 폭행 상해 신고
- [종속] `assault-mart-cart-collision-dispute-strike-report-track` inb3 7847c — 마트 카트 충돌 시비 폭행 상해 신고
- [종속] `assault-villa-upstairs-noise-complaint-strike-report-track` inb3 7719c — 빌라 윗집 소음 항의 폭행 상해 신고
- [종속] `assault-park-dog-leash-dispute-strike-report-track` inb3 7631c — 공원 반려견 목줄 시비 폭행 상해 신고
- [종속] `assault-gym-equipment-dispute-injury-report-track` inb3 7443c — 헬스장 기구 시비 폭행 상해 신고
- [종속] `assault-noise-complaint-confrontation-track` inb3 6918c — 층간소음 항의 폭행
- [종속] `assault-floor-noise-complaint-neighbor-strike-report-track` inb2 8382c — 층간소음 항의 이웃 폭행 상해 신고
- [종속] `assault-floor-noise-complaint-strike-report-track` inb2 8079c — 층간소음 항의 폭행 상해 신고
- [종속] `assault-gym-equipment-use-dispute-injury-report-track` inb2 7449c — 헬스장 기구 사용 시비 폭행 상해 신고
- [종속] `assault-elevator-shove-injury-track` inb2 6955c — 엘리베이터 시비 폭행 상해
- [종속] `assault-parking-conflict-injury-track` inb2 6842c — 주차 시비 폭행 상해
- [종속] `assault-taxi-fare-dispute-driver-violence-track` inb2 5692c — 택시 요금 시비 기사 폭행
- [종속] `assault-parking-space-dispute-strike-report-track` inb1 8106c — 주차 자리 시비 폭행 상해 신고
- [종속] `assault-parking-space-quarrel-strike-report-track` inb1 8000c — 주차 자리 다툼 폭행 상해 신고
- [종속] `assault-elevator-hold-door-dispute-strike-report-track` inb1 7891c — 엘리베이터 문 잡기 시비 폭행 상해 신고
- [종속] `assault-taxi-fare-dispute-driver-passenger-strike-report-track` inb1 7780c — 택시 요금 시비 운전자 승객 폭행 상해 신고
- [종속] `assault-hiking-trail-passage-dispute-injury-report-track` inb1 7744c — 등산로 통행 시비 폭행 상해 신고
- [종속] `assault-parking-space-dispute-track` inb1 7080c — 주차장 진입로 시비 폭행 상해
- [종속] `assault-convenience-store-clerk-customer-track` inb1 7019c — 편의점 점원 손님 폭행 상해
- [종속] `assault-pub-quarrel-injury-track` inb1 6820c — 술집 시비 폭행 상해
- [종속] `assault-delivery-rider-dispute-track` inb1 6681c — 배달기사 시비 폭행
- [고아] `assault-club-entrance-line-cutting-strike-report-track` inb0 7939c — 클럽 입장 줄 새치기 시비 폭행 상해 신고
- [고아] `assault-pub-drunk-stranger-shove-strike-report-track` inb0 7882c — 술집 취객 시비 폭행 상해 신고
- [고아] `assault-delivery-rider-track` inb0 7100c — 배달기사 배송 시비 폭행 상해
- [고아] `assault-parking-space-quarrel-track` inb0 6882c — 주차장 시비 상해
- [고아] `assault-pub-drunken-fight-track` inb0 6845c — 술집 만취 시비 폭행
- [고아] `assault-taxi-fare-dispute-track` inb0 6795c — 택시요금 시비 폭행
- [고아] `assault-elevator-dispute-track` inb0 6745c — 아파트 엘리베이터 폭행

**클러스터 2 — sex-crime (54페이지)** 대표: `sex-crime-club-crowded-dancefloor-touch-report-track`
- [대표] `sex-crime-club-crowded-dancefloor-touch-report-track` inb23 7463c — 클럽 혼잡 무대 추행 신고
- [종속] `sex-crime-private-tutoring-guidance-pretext-touch-report-track` inb23 7404c — 과외 교습 지도 빙자 추행 신고
- [종속] `sex-crime-academy-instructor-pretext-touch-report-track` inb23 7044c — 학원 강사 지도 빙자 추행 신고
- [종속] `sex-crime-massage-shop-improper-touch-report-track` inb22 7609c — 마사지샵 부당 추행 신고
- [종속] `sex-crime-festival-crowd-touch-report-track` inb22 7436c — 축제 인파 추행 신고
- [종속] `sex-crime-subway-escalator-touch-report-track` inb21 7475c — 지하철 에스컬레이터 추행 신고
- [종속] `sex-crime-gym-pt-guidance-touch-report-track` inb21 7424c — 헬스장 PT 지도 중 추행 신고
- [종속] `sex-crime-library-reading-room-touch-report-track` inb21 7292c — 도서관 열람실 추행 신고
- [종속] `sex-crime-pc-room-next-seat-touch-report-track` inb20 7455c — 피시방 옆자리 추행 신고
- [종속] `sex-crime-gym-pt-guidance-pretext-touch-report-track` inb12 7030c — 헬스장 PT 지도 빙자 추행 신고
- [종속] `sex-crime-massage-shop-forced-touch-report-track` inb9 6867c — 마사지샵 불법 추행 신고
- [종속] `sex-crime-club-dancefloor-track` inb9 6704c — 클럽 댄스플로어 강제추행
- [종속] `sex-crime-crowded-bus-rush-hour-touch-report-track` inb8 7207c — 만원 버스 혼잡 틈탄 추행 신고
- [종속] `sex-crime-massage-shop-treatment-pretext-touch-report-track` inb7 6918c — 마사지샵 시술 빙자 추행 신고
- [종속] `sex-crime-massage-shop-service-pretext-touch-report-track` inb6 7391c — 마사지샵 서비스 빙자 추행 신고
- [종속] `sex-crime-nail-salon-service-pretext-touch-report-track` inb6 7164c — 네일샵 시술 빙자 추행 신고
- [종속] `sex-crime-festival-crowd-grope-report-track` inb6 6931c — 축제 인파 기습 추행 신고
- [종속] `sex-crime-massage-shop-owner-track` inb6 6630c — 마사지샵 업주 강제추행
- [종속] `sex-crime-city-bus-crowd-track` inb6 6611c — 시내버스 혼잡 강제추행
- [종속] `sex-crime-pilates-instructor-posture-correction-touch-report-track` inb5 7225c — 필라테스 강사 자세교정 빙자 추행 신고
- [종속] `sex-crime-skincare-shop-care-pretext-touch-report-track` inb5 7187c — 피부관리실 관리 빙자 추행 신고
- [종속] `sex-crime-swimming-pool-lesson-guidance-touch-report-track` inb4 7676c — 수영장 강습 지도 중 추행 신고
- [종속] `sex-crime-nightclub-dancefloor-crowd-touch-report-track` inb4 7280c — 클럽 댄스플로어 인파 추행 신고
- [종속] `sex-crime-subway-rush-hour-grope-report-track` inb4 6742c — 지하철 혼잡 출근길 기습 추행
- [종속] `sex-crime-festival-crowd-grope-track` inb4 6495c — 축제 인파 기습추행
- [종속] `sex-crime-massage-shop-track` inb4 6285c — 마사지샵 추행
- [종속] `sex-crime-club-dancefloor-contact-track` inb4 6219c — 클럽 댄스플로어 추행
- [종속] `sex-crime-festival-dense-crowd-touch-report-track` inb3 7281c — 축제 인파 밀집 틈탄 추행 신고
- [종속] `sex-crime-swimming-lesson-posture-correction-touch-report-track` inb3 7203c — 수영 강습 자세교정 빙자 추행 신고
- [종속] `sex-crime-photo-studio-posing-pretext-touch-report-track` inb3 7185c — 사진관 포즈 지도 빙자 추행 신고
- [종속] `sex-crime-foot-massage-shop-track` inb3 6401c — 발마사지 업소 추행
- [종속] `sex-crime-festival-crowd-track` inb3 6394c — 축제 인파 강제추행
- [종속] `sex-crime-massage-shop-treatment-track` inb3 6342c — 마사지샵 시술 중 추행
- [종속] `sex-crime-club-dancefloor-stranger-groping-track` inb3 6327c — 클럽 댄스플로어 모르는 사람 밀착 신체접촉 추행
- [종속] `sex-crime-taxi-passenger-asleep-track` inb3 6284c — 택시 승객 잠든 사이 추행
- [종속] `sex-crime-taxi-passenger-driver-contact-track` inb3 6274c — 심야 택시 기사 승객 신체접촉 추행
- [종속] `sex-crime-gym-personal-training-guidance-touch-report-track` inb2 7707c — 헬스장 PT 자세 교정 추행 신고
- [종속] `sex-crime-academy-instructor-guidance-touch-report-track` inb2 7697c — 학원 강사 지도 신체접촉 추행 신고
- [종속] `sex-crime-gym-pt-posture-correction-touch-report-track` inb2 7349c — 헬스장 PT 자세 교정 빙자 추행 신고
- [종속] `sex-crime-water-park-pool-crowd-track` inb2 6686c — 워터파크 수영장 혼잡 강제추행
- [종속] `sex-crime-city-bus-track` inb2 6431c — 시내버스 추행
- [종속] `sex-crime-subway-bus-molestation-track` inb2 6387c — 지하철 버스 추행
- [종속] `sex-crime-taxi-passenger-track` inb2 6271c — 택시기사 승객 강제추행
- [종속] `sex-crime-golf-lesson-posture-guidance-touch-report-track` inb1 7750c — 골프 레슨 자세 지도 빙자 추행 신고
- [종속] `sex-crime-nightclub-dance-floor-touch-report-track` inb1 7650c — 클럽 댄스 플로어 추행 신고
- [종속] `sex-crime-subway-crowded-car-press-touch-report-track` inb1 7414c — 지하철 혼잡 차량 밀착 추행 신고
- [종속] `sex-crime-waterpark-shower-room-touch-report-track` inb1 7354c — 워터파크 샤워실 추행 신고
- [종속] `sex-crime-outdoor-festival-grope-track` inb1 6657c — 축제 인파 속 기습 추행
- [종속] `sex-crime-study-cafe-close-contact-track` inb1 6376c — 스터디카페 밀착 추행
- [종속] `sex-crime-swimming-lesson-track` inb1 6304c — 수영강습 강제추행
- [종속] `sex-crime-taxi-passenger-contact-track` inb1 6189c — 택시 승객 추행
- [고아] `sex-crime-dance-academy-choreography-guidance-touch-report-track` inb0 7550c — 댄스학원 안무 지도 빙자 추행 신고
- [고아] `sex-crime-waxing-shop-service-pretext-touch-report-track` inb0 7512c — 왁싱샵 시술 빙자 추행 신고
- [고아] `sex-crime-water-park-track` inb0 6672c — 워터파크 물놀이장 강제추행

**클러스터 3 — divorce (43페이지)** 대표: `divorce-inherited-asset-property-division-contribution-track`
- [대표] `divorce-inherited-asset-property-division-contribution-track` inb10 7972c — 혼인 중 상속재산 재산분할 대상 여부 판단
- [종속] `divorce-inherited-property-division-contribution-track` inb9 7842c — 상속받은 재산 재산분할 기여도 판단
- [종속] `divorce-gambling-debt-division-track` inb9 7668c — 배우자 도박 빚 재산분할
- [종속] `divorce-inherited-property-contribution-division-track` inb8 8040c — 상속받은 재산 기여도 재산분할 대상 판단
- [종속] `divorce-severance-asset-division-track` inb8 7401c — 배우자 명예퇴직금 재산분할
- [종속] `divorce-business-goodwill-property-division-track` inb7 7950c — 영업권 사업체 재산분할 판단
- [종속] `divorce-future-retirement-pension-property-division-track` inb6 7981c — 장래 퇴직금 퇴직연금 재산분할 대상 판단
- [종속] `divorce-future-retirement-pension-division-track` inb6 7806c — 장래 퇴직연금 재산분할 인정 판단
- [종속] `divorce-business-goodwill-valuation-property-division-track` inb5 8009c — 배우자 사업체 영업권 평가 재산분할 판단
- [종속] `divorce-business-entity-goodwill-asset-division-track` inb5 7835c — 사업체 영업권 재산분할 판단
- [종속] `divorce-spouse-retirement-pension-division-track` inb5 7641c — 배우자 퇴직연금 재산분할 청산 판단
- [종속] `divorce-concealed-asset-division-track` inb5 7519c — 재산 은닉 재산분할
- [종속] `divorce-spouse-inherited-property-contribution-division-track` inb4 8499c — 배우자 상속재산 기여 재산분할 판단
- [종속] `divorce-premarital-property-increase-contribution-division-track` inb4 8493c — 혼인 전 재산 증가분 기여도 재산분할 판단
- [종속] `divorce-inherited-asset-marital-contribution-division-track` inb4 7645c — 상속재산 혼인 기여 재산분할 판단
- [종속] `divorce-spouse-retirement-pension-future-division-track` inb3 8766c — 배우자 퇴직연금 장래 재산분할 판단
- [종속] `divorce-company-stock-option-property-division-track` inb3 8491c — 배우자 회사 스톡옵션 재산분할 판단
- [종속] `divorce-overseas-hidden-asset-property-division-track` inb3 7996c — 배우자 해외 은닉재산 재산분할 판단
- [종속] `divorce-self-employed-business-asset-contribution-division-track` inb3 7839c — 자영업 사업체 재산분할 기여도 판단
- [종속] `divorce-spouse-hidden-account-asset-tracing-division-track` inb3 7778c — 배우자 은닉 계좌 재산 재산분할 판단
- [종속] `divorce-business-entity-asset-division-track` inb3 7601c — 배우자 사업체 재산분할
- [종속] `divorce-spouse-business-goodwill-division-track` inb2 8726c — 배우자 사업체 영업권 재산분할 판단
- [종속] `divorce-spouse-hidden-cryptocurrency-property-division-track` inb2 8422c — 배우자 은닉 가상자산 재산분할 판단
- [종속] `divorce-spouse-business-debt-burden-property-division-track` inb2 8267c — 배우자 사업 채무 분담 재산분할 판단
- [종속] `divorce-unlisted-company-shares-property-division-track` inb2 8149c — 배우자 비상장주식 재산분할 판단
- [종속] `divorce-future-severance-pay-retirement-division-track` inb2 8108c — 장래 퇴직금 재산분할 대상 판단
- [종속] `divorce-severance-retirement-pay-division-track` inb2 7984c — 장래 퇴직급여 재산분할 판단
- [종속] `divorce-spouse-retirement-pension-future-benefit-division-track` inb1 9107c — 배우자 퇴직연금 장래 수령분 재산분할 판단
- [종속] `divorce-inherited-asset-maintenance-contribution-division-track` inb1 8781c — 상속받은 재산 유지 기여 재산분할 판단
- [종속] `divorce-spouse-hidden-overseas-asset-division-track` inb1 8524c — 배우자 은닉 해외 재산 재산분할 판단
- [종속] `divorce-future-severance-pay-property-division-track` inb1 8348c — 장래 퇴직금 재산분할 판단
- [종속] `divorce-unvested-stock-option-property-division-track` inb1 8224c — 미확정 스톡옵션 재산분할 대상 판단
- [종속] `divorce-unvested-stock-option-division-track` inb1 7846c — 미확정 스톡옵션 재산분할 판단
- [종속] `divorce-spouse-stock-investment-loss-debt-division-track` inb1 7609c — 배우자 주식투자 손실 채무 재산분할 판단
- [종속] `divorce-post-breakup-asset-change-division-track` inb1 7239c — 파탄 후 재산 변동 재산분할
- [고아] `divorce-inherited-separate-property-realestate-division-track` inb0 9311c — 상속받은 특유재산 부동산 재산분할 판단
- [고아] `divorce-spouse-professional-license-contribution-division-track` inb0 8865c — 배우자 전문직 자격 취득 기여 재산분할 판단
- [고아] `divorce-spouse-national-pension-split-annuity-division-track` inb0 8789c — 배우자 국민연금 분할연금 재산분할 판단
- [고아] `divorce-spouse-stock-account-hidden-asset-division-track` inb0 8662c — 배우자 주식계좌 은닉재산 재산분할 판단
- [고아] `divorce-spouse-business-goodwill-value-division-track` inb0 8614c — 배우자 사업체 영업권 가치 재산분할 판단
- [고아] `divorce-spouse-honorary-retirement-lumpsum-division-track` inb0 8527c — 배우자 명예퇴직금 일시금 재산분할 판단
- [고아] `divorce-hidden-asset-concealment-track` inb0 7665c — 배우자 재산 은닉 재산분할
- [고아] `divorce-spouse-third-party-joint-ownership-property-division-track` inb0 7610c — 배우자 제3자 합유 재산 재산분할 방법 판단

**클러스터 4 — wage (35페이지)** 대표: `wage-comprehensive-salary-fixed-overtime-difference-claim-track`
- [대표] `wage-comprehensive-salary-fixed-overtime-difference-claim-track` inb18 7816c — 포괄임금 고정연장수당 차액 청구 판단
- [종속] `wage-comprehensive-salary-overtime-recalc-claim-track` inb15 7937c — 포괄임금 약정 연장근로수당 차액 청구 판단
- [종속] `wage-holiday-work-premium-unpaid-claim-track` inb15 7928c — 휴일근로 가산수당 미지급 청구 판단
- [종속] `wage-minimum-wage-violation-fixed-salary-difference-claim-track` inb15 7684c — 최저임금 위반 고정급 차액 청구 판단
- [종속] `wage-annual-leave-allowance-unused-unpaid-claim-track` inb15 7681c — 연차 미사용수당 미지급 청구 판단
- [종속] `wage-weekly-holiday-allowance-part-time-unpaid-claim-track` inb15 7662c — 주휴수당 단시간근로 미지급 청구 판단
- [종속] `wage-night-holiday-overtime-allowance-unpaid-claim-track` inb14 8053c — 야간 휴일 연장근로수당 미지급 청구 판단
- [종속] `wage-annual-leave-allowance-unused-nonpayment-claim-track` inb14 7789c — 연차수당 미사용 미지급 청구 판단
- [종속] `wage-night-work-allowance-comprehensive-salary-unpaid-claim-track` inb14 7774c — 야간근로수당 포괄임금 미산입 청구 판단
- [종속] `wage-unused-annual-leave-allowance-unpaid-claim-track` inb13 7910c — 미사용 연차휴가 미지급 수당 청구 판단
- [종속] `wage-holiday-work-premium-substitute-unpaid-claim-track` inb13 7805c — 휴일근로 가산수당 대체휴무 미지급 청구 판단
- [종속] `wage-night-shift-premium-calculation-unpaid-claim-track` inb12 7708c — 야간근로 가산수당 산정 미지급 청구 판단
- [종속] `wage-overtime-fixed-allowance-shortfall-claim-track` inb8 7778c — 연장근로 고정수당 미달 차액 청구 판단
- [종속] `wage-annual-leave-allowance-unpaid-claim-track` inb7 8051c — 연차휴가 미사용수당 미지급 임금 청구 판단
- [종속] `wage-night-holiday-premium-unpaid-claim-track` inb7 7732c — 야간 휴일 가산수당 미지급 임금 청구 판단
- [종속] `wage-minimum-wage-shortfall-track` inb5 7492c — 최저임금 미달 임금 청구
- [종속] `wage-annual-leave-unused-allowance-unpaid-claim-track` inb4 8143c — 연차휴가 미사용수당 미지급 청구 판단
- [종속] `wage-night-work-premium-unpaid-claim-track` inb4 8054c — 야간근로 가산수당 미지급 청구 판단
- [종속] `wage-weekly-holiday-allowance-unpaid-claim-track` inb4 7929c — 주휴수당 미지급 청구 판단
- [종속] `wage-weekly-holiday-allowance-track` inb4 6834c — 주휴수당 미지급
- [종속] `wage-annual-leave-allowance-unpaid-track` inb4 6046c — 연차수당 미지급
- [종속] `wage-unused-annual-leave-allowance-claim-track` inb3 8049c — 미사용 연차수당 청구 가능 여부 판단
- [종속] `wage-probation-period-minimum-wage-shortfall-claim-track` inb3 7785c — 수습 최저임금 미달 임금 차액 청구 판단
- [종속] `wage-comprehensive-salary-overtime-track` inb2 7133c — 포괄임금 연장수당 미지급
- [종속] `wage-comprehensive-overtime-track` inb2 6820c — 포괄임금 연장수당 다툼
- [종속] `wage-holiday-work-allowance-unpaid-claim-track` inb1 7799c — 휴일근로수당 미지급 청구 판단
- [종속] `wage-night-holiday-premium-unpaid-track` inb1 7419c — 야간 휴일 가산수당 미지급
- [종속] `wage-comprehensive-salary-fixed-overtime-track` inb1 6684c — 포괄임금 고정연장수당
- [고아] `wage-minimum-wage-violation-weekly-holiday-allowance-claim-track` inb0 8205c — 최저임금 미달 주휴수당 미지급 차액 청구 판단
- [고아] `wage-comprehensive-salary-overtime-shortfall-difference-claim-track` inb0 8159c — 포괄임금제 실제 연장근로 차액 청구 판단
- [고아] `wage-unused-annual-leave-allowance-nonpayment-claim-track` inb0 7995c — 미사용 연차 연차수당 미지급 청구 판단
- [고아] `wage-inclusive-salary-overtime-excess-claim-track` inb0 7901c — 포괄임금 연장근로 초과분 차액 청구 판단
- [고아] `wage-unused-annual-leave-allowance-track` inb0 7803c — 연차수당 미지급 임금 청구 판단
- [고아] `wage-night-shift-allowance-track` inb0 7780c — 야간근로 가산수당 미지급 청구
- [고아] `wage-annual-paid-leave-allowance-track` inb0 7584c — 연차수당 미지급 청구

**클러스터 5 — divorce (26페이지)** 대표: `divorce-desertion-ground-track`
- [대표] `divorce-desertion-ground-track` inb9 7433c — 배우자 악의적 유기 이혼 사유
- [종속] `divorce-adultery-marriage-breakdown-alimony-track` inb8 7950c — 부정행위 혼인파탄 위자료 판단
- [종속] `divorce-domestic-violence-marriage-breakdown-alimony-track` inb7 8412c — 가정폭력 혼인파탄 위자료 판단
- [종속] `divorce-domestic-violence-marriage-breakdown-track` inb7 7816c — 가정폭력 혼인파탄 이혼 판단
- [종속] `divorce-in-law-mistreatment-marriage-breakdown-alimony-track` inb6 8003c — 시댁 처가 부당대우 혼인파탄 위자료 판단
- [종속] `divorce-spouse-business-debt-marriage-breakdown-alimony-track` inb5 8384c — 배우자 사업 채무 혼인파탄 위자료 판단
- [종속] `divorce-spouse-gambling-debt-marital-breakdown-grounds-track` inb5 7839c — 배우자 도박 채무 혼인파탄 이혼 사유
- [종속] `divorce-spouse-gambling-debt-marriage-breakdown-alimony-track` inb4 8285c — 배우자 도박 채무 혼인파탄 위자료 판단
- [종속] `divorce-spouse-continuous-domestic-violence-grounds-track` inb4 7943c — 배우자 지속 폭력 이혼 사유
- [종속] `divorce-domestic-violence-consolation-track` inb4 7265c — 가정폭력 이혼 위자료
- [종속] `divorce-spouse-affair-third-party-companion-alimony-track` inb3 8400c — 배우자 부정행위 상간자 위자료 판단
- [종속] `divorce-spouse-gambling-debt-accumulation-grounds-track` inb3 8026c — 배우자 도박 채무 누적 이혼 사유
- [종속] `divorce-spouse-verbal-abuse-mental-cruelty-grounds-track` inb3 7974c — 배우자 폭언 정서적 학대 이혼 사유
- [종속] `divorce-adultery-third-party-companion-alimony-track` inb3 7884c — 부정행위 상간자 위자료 청구 인정
- [종속] `divorce-spouse-overseas-desertion-abandonment-grounds-track` inb3 7762c — 배우자 해외 거주 악의 유기 이혼 사유
- [종속] `divorce-spouse-affair-third-party-damages-track` inb3 7485c — 배우자 부정행위 상간자 손해배상 판단
- [종속] `divorce-spouse-infidelity-breakdown-alimony-track` inb2 8555c — 배우자 부정행위 혼인파탄 위자료 판단
- [종속] `divorce-inlaw-interference-ground-track` inb1 7540c — 시부모 부당대우 이혼 사유
- [종속] `divorce-domestic-violence-ground-track` inb1 6952c — 가정폭력 이혼 사유
- [고아] `divorce-inlaws-mistreatment-marriage-breakdown-alimony-track` inb0 8920c — 시댁 부당대우 혼인파탄 유책 위자료 판단
- [고아] `divorce-spouse-infidelity-affair-breakdown-alimony-track` inb0 8827c — 배우자 외도 부정행위 혼인파탄 위자료 판단
- [고아] `divorce-spouse-domestic-violence-breakdown-alimony-track` inb0 8606c — 배우자 가정폭력 혼인파탄 위자료 판단
- [고아] `divorce-spouse-gambling-waste-breakdown-alimony-track` inb0 8393c — 배우자 도박 낭비 혼인파탄 위자료 판단
- [고아] `divorce-spouse-alcoholism-ground-track` inb0 7543c — 배우자 알코올중독 이혼 사유
- [고아] `divorce-malicious-desertion-track` inb0 7310c — 가출 악의적 유기 이혼
- [고아] `divorce-gambling-debt-ground-track` inb0 7153c — 도박 채무 이혼 사유

## 5. 즉시 제목/메타 수정 후보 20개 (retitle)

선정 기준: score 0.60+ 이면서 type 또는 perspective 가 달라 **페이지 자체는 존재 이유가 있으나 제목이 구분되지 않는** 케이스, 또는 인바운드 0으로 대표에 가려진 케이스.

| # | 도메인 | 수정대상 slug | 현재 metaTitle | 문제 | 제목 수정 방향 |
|---|---|---|---|---|---|
| 1 | wage | `wage-unused-annual-leave-allowance-nonpayment-claim-track` | 미사용 연차수당 미지급 5단계 청구 점검 \| 로앤가이드 | 대표와 메타 67% 동일; 슬러그 100% 동일; 인바운드 0 | 고유 토큰 없음 → retitle 로 해결 불가, merge 재검토 |
| 2 | divorce | `divorce-spouse-business-goodwill-value-division-track` | 배우자 사업체 영업권 재산분할 — 5단계 분할비율 점검 \| 로앤가이드 | 대표와 메타 78% 동일; 슬러그 86% 동일; 인바운드 0 | 고유 토큰 `value` 를 제목 앞쪽으로 |
| 3 | divorce | `divorce-spouse-domestic-violence-breakdown-alimony-track` | 배우자 가정폭력 혼인파탄 위자료 — 5단계 책임 점검 \| 로앤가이드 | 대표와 메타 60% 동일; 슬러그 75% 동일; 인바운드 0 | 고유 토큰 `spouse` 를 제목 앞쪽으로 |
| 4 | divorce | `divorce-spouse-infidelity-affair-breakdown-alimony-track` | 배우자 외도 부정행위 위자료 — 5단계 상간자·시효 점검 \| 로앤가이드 | 대표와 메타 55% 동일; 슬러그 86% 동일; 인바운드 0 | 고유 토큰 `affair` 를 제목 앞쪽으로 |
| 5 | divorce | `divorce-spouse-name-trust-real-estate-division-track` | 배우자 명의신탁 부동산 재산분할 — 5단계 명의 점검 \| 로앤가이드 | 대표와 메타 55% 동일; 슬러그 67% 동일; 인바운드 0 | 고유 토큰 `spouse`, `name` 를 제목 앞쪽으로 |
| 6 | divorce | `divorce-inlaws-mistreatment-marriage-breakdown-alimony-track` | 시댁 부당대우 혼인파탄 위자료 — 5단계 유책배우자 점검 \| 로앤가이드 | 대표와 메타 64% 동일; 슬러그 67% 동일; 인바운드 0 | 고유 토큰 `inlaws` 를 제목 앞쪽으로 |
| 7 | divorce | `divorce-hidden-asset-concealment-track` | 배우자 재산 은닉 재산분할 — 5단계 사전포기·은닉재산 점검 \| 로앤가이드 | 대표와 메타 78% 동일; 인바운드 0 | 고유 토큰 `hidden`, `concealment` 를 제목 앞쪽으로 |
| 8 | divorce | `divorce-spouse-gambling-waste-breakdown-alimony-track` | 배우자 도박 낭비 혼인파탄 위자료 — 5단계 유책 점검 \| 로앤가이드 | 대표와 메타 58% 동일; 슬러그 67% 동일; 인바운드 0 | 고유 토큰 `waste` 를 제목 앞쪽으로 |
| 9 | divorce | `divorce-unvested-stock-option-division-track` | 미확정 스톡옵션 재산분할 판단 — 5단계 실질 청산·상속 승계 점검 \| 로앤가이드 | 슬러그 86% 동일 | 유형축 분리 — "~인지 판단 기준" 프레임 로 재작성 (type=판단형) |
| 10 | divorce | `divorce-future-severance-pay-property-division-track` | 장래 퇴직금 재산분할 — 5단계 채무초과 분담 점검 \| 로앤가이드 | 대표와 메타 55% 동일; 슬러그 75% 동일 | 유형축 분리 — "~인지 판단 기준" 프레임 로 재작성 (type=판단형) |
| 11 | fraud | `fraud-used-musical-instrument-direct-deal-prepay-no-delivery-track` | 중고 악기 직거래 미인도 사기 — 5단계 편취 점검 \| 로앤가이드 | 대표와 메타 73% 동일; 인바운드 0 | 고유 토큰 `musical`, `instrument`, `direct` 를 제목 앞쪽으로 |
| 12 | traffic-accident | `traffic-accident-bicycle-crosswalk-pedestrian-collision-fault-ratio-track` | 자전거 횡단보도 보행자 충돌 과실비율 — 5단계 공단 대위 점검 \| 로앤가이드 | 대표와 메타 67% 동일; 슬러그 70% 동일; 인바운드 0 | 고유 토큰 `bicycle`, `collision` 를 제목 앞쪽으로 |
| 13 | fraud | `fraud-membership-gym-prepaid-sudden-closure-track` | 헬스장 선불 회원권 폐업 사기 — 5단계 편취 점검 \| 로앤가이드 | 대표와 메타 73% 동일; 슬러그 100% 동일; 인바운드 0 | 고유 토큰 없음 → retitle 로 해결 불가, merge 재검토 |
| 14 | unemployment | `unemployment-worksite-relocation-track` | 사업장 이전 통근곤란 구직급여 — 5단계 이직·재취업수당 점검 \| 로앤가이드 | 대표와 메타 58% 동일; 슬러그 60% 동일; 인바운드 0 | 고유 토큰 `worksite` 를 제목 앞쪽으로 |
| 15 | unemployment | `unemployment-fixed-term-end-track` | 계약만료 자진퇴사 구직급여 — 5단계 반환·추가징수 점검 \| 로앤가이드 | 대표와 메타 78% 동일; 인바운드 0 | 고유 토큰 `fixed`, `term`, `end` 를 제목 앞쪽으로 |
| 16 | divorce | `divorce-foreign-spouse-citizenship-process` | 외국인 배우자 이혼 후 체류자격 5단계 정리 \| 로앤가이드 | 대표와 메타 62% 동일; 인바운드 0 | 고유 토큰 `citizenship`, `process` 를 제목 앞쪽으로 |
| 17 | divorce | `divorce-future-severance-pay-retirement-division-track` | 장래 퇴직금 재산분할 — 5단계 상속인 승계 청구 절차 점검 \| 로앤가이드 | 대표와 메타 50% 동일; 슬러그 56% 동일 | 유형축 분리 — "~하는 순서" 프레임 로 재작성 (type=절차형) |
| 18 | divorce | `divorce-spouse-hidden-overseas-asset-division-track` | 배우자 은닉 해외 재산 재산분할 — 5단계 사전포기 점검 \| 로앤가이드 | 대표와 메타 54% 동일; 슬러그 67% 동일 | 유형축 분리 — "~인지 판단 기준" 프레임 로 재작성 (type=판단형) |
| 19 | divorce | `divorce-gambling-debt-ground-track` | 도박 채무 이혼 사유 — 5단계 파탄·책임 점검 \| 로앤가이드 | 대표와 메타 54% 동일; 슬러그 50% 동일; 인바운드 0 | 고유 토큰 `ground` 를 제목 앞쪽으로 |
| 20 | wage | `wage-annual-paid-leave-allowance-track` | 연차수당 미지급 청구 — 5단계 포괄임금·최저임금 점검 \| 로앤가이드 | 대표와 메타 67% 동일; 슬러그 56% 동일; 인바운드 0 | 고유 토큰 `paid` 를 제목 앞쪽으로 |

## 6. 통합/종속 처리 후보 20개 (merge / internal-link-only)

선정 기준: score 0.65+ · type·perspective 동일 · 경쟁 페이지 인바운드가 대표보다 낮음 → 독립 존재 이유 없음.

| # | 도메인 | 유지(대표) | 흡수대상 | score | inb 대표/흡수 | 권고 |
|---|---|---|---|---|---|---|
| 1 | traffic-accident | `traffic-accident-night-jaywalk-pedestrian-fault-ratio-track` | `traffic-accident-pedestrian-jaywalk-night-fault-ratio-track` | 0.90 | 6/3 | merge 후 내부링크 3개 재배선 필요 |
| 2 | wage | `wage-annual-leave-allowance-unused-nonpayment-claim-track` | `wage-unused-annual-leave-allowance-nonpayment-claim-track` | 0.87 | 14/0 | merge 후 301 (인바운드 소실 위험 낮음) |
| 3 | divorce | `divorce-spouse-retirement-pension-future-division-track` | `divorce-spouse-retirement-pension-future-benefit-division-track` | 0.84 | 3/1 | merge 후 301 (인바운드 소실 위험 낮음) |
| 4 | traffic-accident | `traffic-accident-bicycle-lane-collision-fault-ratio-track` | `traffic-accident-bicycle-lane-car-collision-fault-ratio-track` | 0.84 | 7/6 | merge 후 내부링크 6개 재배선 필요 |
| 5 | divorce | `divorce-inherited-property-division-contribution-track` | `divorce-inherited-property-contribution-division-track` | 0.83 | 9/8 | merge 후 내부링크 8개 재배선 필요 |
| 6 | divorce | `divorce-spouse-business-debt-marriage-breakdown-alimony-track` | `divorce-spouse-gambling-debt-marriage-breakdown-alimony-track` | 0.81 | 5/4 | merge 후 내부링크 4개 재배선 필요 |
| 7 | divorce | `divorce-business-goodwill-property-division-track` | `divorce-business-entity-goodwill-asset-division-track` | 0.80 | 7/5 | merge 후 내부링크 5개 재배선 필요 |
| 8 | divorce | `divorce-spouse-business-goodwill-division-track` | `divorce-spouse-business-goodwill-value-division-track` | 0.80 | 2/0 | merge 후 301 (인바운드 소실 위험 낮음) |
| 9 | unemployment | `unemployment-contract-expiry-renewal-refusal-allowance-track` | `unemployment-contract-expiry-nonrenewal-just-cause-track` | 0.79 | 7/5 | merge 후 내부링크 5개 재배선 필요 |
| 10 | divorce | `divorce-domestic-violence-marriage-breakdown-alimony-track` | `divorce-spouse-domestic-violence-breakdown-alimony-track` | 0.78 | 7/0 | merge 후 301 (인바운드 소실 위험 낮음) |
| 11 | divorce | `divorce-spouse-infidelity-breakdown-alimony-track` | `divorce-spouse-infidelity-affair-breakdown-alimony-track` | 0.76 | 2/0 | merge 후 301 (인바운드 소실 위험 낮음) |
| 12 | divorce | `divorce-spouse-retirement-pension-division-track` | `divorce-spouse-retirement-pension-future-division-track` | 0.76 | 5/3 | merge 후 내부링크 3개 재배선 필요 |
| 13 | fraud | `fraud-acquaintance-loan-default-falsely-accused-defense` | `fraud-loan-default-falsely-accused-defense` | 0.76 | 7/2 | merge 후 내부링크 2개 재배선 필요 |
| 14 | traffic-accident | `traffic-accident-crosswalk-pedestrian-fault-ratio-track` | `traffic-accident-pedestrian-crosswalk-signal-fault-ratio-track` | 0.75 | 11/6 | merge 후 내부링크 6개 재배선 필요 |
| 15 | divorce | `divorce-title-trust-real-estate-division-track` | `divorce-spouse-name-trust-real-estate-division-track` | 0.75 | 4/0 | merge 후 301 (인바운드 소실 위험 낮음) |
| 16 | divorce | `divorce-in-law-mistreatment-marriage-breakdown-alimony-track` | `divorce-inlaws-mistreatment-marriage-breakdown-alimony-track` | 0.74 | 6/0 | merge 후 301 (인바운드 소실 위험 낮음) |
| 17 | divorce | `divorce-business-goodwill-property-division-track` | `divorce-business-goodwill-valuation-property-division-track` | 0.74 | 7/5 | merge 후 내부링크 5개 재배선 필요 |
| 18 | divorce | `divorce-concealed-asset-division-track` | `divorce-hidden-asset-concealment-track` | 0.73 | 5/0 | merge 후 301 (인바운드 소실 위험 낮음) |
| 19 | traffic-accident | `traffic-accident-motorcycle-lane-filtering-fault-ratio-track` | `traffic-accident-motorcycle-lane-splitting-fault-ratio-track` | 0.73 | 6/4 | merge 후 내부링크 4개 재배선 필요 |
| 20 | traffic-accident | `traffic-accident-night-jaywalk-pedestrian-fault-ratio-track` | `traffic-accident-pedestrian-jaywalk-fault-ratio-track` | 0.73 | 6/5 | merge 후 내부링크 5개 재배선 필요 |

## 7. 부수 발견 (카니발과 별개, 즉시 고칠 가치 있음)

### 7-1. 깨진 내부링크 재발 — 13개 타깃 / 34개 href

| 깨진 링크 타깃 | 참조 횟수 |
|---|---|
| `/guide/unemployment/unemployment-part-time-income-limit` | 8 |
| `/guide/traffic-accident/insurance-claim-process-summary` | 5 |
| `/guide/assault/injury-vs-assault-penalty` | 4 |
| `/guide/assault/assault-immediate-evidence-steps` | 4 |
| `/guide/sex-crime/common-mistakes-when-accused` | 3 |
| `/guide/retirement/retirement-contract-worker-under-1year` | 3 |
| `/guide/inheritance/limited-acceptance-vs-renunciation` | 1 |
| `/guide/jeonse/deposit-lawsuit-preparation` | 1 |
| `/guide/unemployment/unemployment-recognized-job-search-activity-guide` | 1 |
| `/guide/real-estate-sale/defect-damage-claim` | 1 |
| `/guide/unemployment/unemployment-harassment-quit` | 1 |
| `/guide/traffic-accident/post-settlement-aftereffect-additional-claim` | 1 |
| `/guide/traffic-accident/accident-settlement-fair-amount` | 1 |

메모리 기록상 2026-07-03 에 broken 5,827 → 0 전량 정리 완료였으나 이후 배치에서 **다시 유입**. `dynamicParams=false` 이므로 전부 하드 404 → 구글 크롤 예산 낭비.

권고: `_b*_verify.py` 에 "internalLinks href 타깃이 실존 스포크인지" 검사를 상시 게이트로 추가.

### 7-2. 고아 스포크 1656개

| 도메인 | 고아 수 | 해당 도메인 스포크 | 고아율 |
|---|---|---|---|
| fraud | 219 | 646 | 34% |
| divorce | 148 | 472 | 31% |
| dismissal | 187 | 468 | 40% |
| defamation | 141 | 410 | 34% |
| assault | 134 | 378 | 35% |
| wage | 121 | 334 | 36% |
| sex-crime | 112 | 317 | 35% |
| unemployment | 102 | 309 | 33% |
| traffic-accident | 73 | 297 | 25% |
| dui | 89 | 267 | 33% |
| retirement | 76 | 263 | 29% |
| jeonse-fraud | 80 | 234 | 34% |
| inheritance | 43 | 199 | 22% |
| jeonse | 16 | 94 | 17% |
| stalking | 20 | 86 | 23% |
| child-support | 8 | 73 | 11% |
| industrial-accident | 7 | 55 | 13% |
| rehabilitation | 14 | 46 | 30% |
| bankruptcy | 11 | 44 | 25% |
| school-violence | 6 | 22 | 27% |
| neighbor-dispute | 5 | 20 | 25% |
| sexual-harassment | 8 | 20 | 40% |
| digital-sex-crime | 3 | 17 | 18% |
| drug-crime | 4 | 17 | 24% |
| real-estate-sale | 4 | 16 | 25% |
| sangga | 5 | 16 | 31% |
| small-claims | 3 | 16 | 19% |
| real-estate-auction | 8 | 14 | 57% |
| industrial-accident1 | 1 | 13 | 8% |
| prostitution | 1 | 12 | 8% |
| child-sex-crime | 3 | 11 | 27% |
| industrial-accident2 | 4 | 10 | 40% |

메모리 `project_uv_growth_levers` 의 "고아 893페이지"가 현재 1656개로 약 2배 악화. 일일 40개 신규 생성이 인바운드 없이 쌓이는 구조.

권고: 배치 파이프라인 `_b*_gen_ts.py` 단계에 "신규 스포크 1개당 기존 스포크에서 들어오는 링크 최소 2개 추가" 를 강제.

### 7-3. 도메인 네임스페이스 오염
- `industrial-accident`: 55개
- `industrial-accident1`: 13개
- `industrial-accident2`: 10개

`industrial-accident1/2` 23개는 `/guide/industrial-accident1/{slug}` 로 색인됨. 허브가 없어 breadcrumb·relatedHubs 가 끊김. 정본 도메인으로 통합 + 301 필요.

## 8. 근본 원인 — metaTitle 템플릿 획일화

개별 페이지를 고치는 것보다 이쪽이 먼저입니다. 메타 유사도가 높은 진짜 이유는 주제가 겹쳐서가 아니라 **제목 틀이 하나**여서입니다.

| 패턴 | 해당 스포크 | 비율 |
|---|---|---|
| metaTitle 에 "N단계" 포함 | 3652 | 70% |
| "... 점검 \| 로앤가이드" 로 끝남 | 1854 | 36% |

### 제목 끝 2어절 상위 10

| 끝 2어절 | 페이지 수 |
|---|---|
| 5단계 점검 | 249 |
| 편취 점검 | 80 |
| 해당성 점검 | 67 |
| 4단계 정리 | 54 |
| 환급 점검 | 47 |
| 5단계 정리 | 45 |
| 4단계 절차 | 41 |
| 5단계 절차 | 40 |
| 방어 점검 | 39 |
| 3가지 기준 | 39 |

전체 5196개 중 **"5단계 점검" 으로 끝나는 페이지가 249개**입니다. 구글 SERP 에서 같은 도메인 결과가 나란히 뜨면 사용자는 구분하지 못하고, 구글은 "중복·대체 표준 선택됨" 으로 접을 근거를 얻습니다.

CLAUDE.md 의 메타 타이틀 규칙("30~45자, 숫자 필수")이 **"N단계"라는 한 가지 방식으로만 지켜지고 있는 것**이 원인입니다. 숫자를 넣는 방법을 다양화해야 합니다.

| 현재 | 대안 프레임 예시 |
|---|---|
| N단계 ~ 점검 | 기한형: "퇴직 후 14일, 놓치면 못 받는 것" |
| N단계 ~ 점검 | 비율형: "과실 70% 통보받았을 때 다투는 근거" |
| N단계 ~ 점검 | 금액형: "3,000만원 이하면 소액심판이 빠른 이유" |
| N단계 ~ 점검 | 조건형: "180일 못 채웠는데 받는 3가지 예외" |
| N단계 ~ 점검 | 부정형: "이 서류 없으면 진정이 반려됩니다" |

권고: 일일배치 생성 단계에 **"같은 도메인 직전 20개 스포크의 metaTitle 끝 2어절과 중복 금지"** 게이트를 추가. 이게 없으면 리스트를 손으로 고쳐도 다음 주에 40개가 같은 틀로 다시 쌓입니다.

