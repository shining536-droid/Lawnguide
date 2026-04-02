# SEO Spoke Near-Duplicate Audit Report

Generated: 2026-03-30

## Summary

| Metric | Value |
|--------|-------|
| Total spokes | 429 |
| Total domains | 31 |
| Intra-domain duplicate pairs | 202 |
| Cross-domain similar pairs | 14 |
| **Literal duplicate slugs (same slug in 2+ files)** | **63** |
| MERGE recommended | 49 |
| DIFFERENTIATE needed | 35 |
| REVIEW needed | 47 |
| OK (false positive / different perspective) | 71 |

## Spokes per Domain

| Domain | Count |
|--------|-------|
| sex-crime | 39 |
| fraud | 34 |
| defamation | 32 |
| assault | 29 |
| divorce | 28 |
| dui | 24 |
| jeonse-fraud | 21 |
| stalking | 21 |
| drug-crime | 17 |
| digital-sex-crime | 16 |
| inheritance | 16 |
| jeonse | 15 |
| school-violence | 15 |
| traffic-accident | 14 |
| wage | 11 |
| bankruptcy | 10 |
| child-support | 10 |
| child-sex-crime | 9 |
| rehabilitation | 8 |
| prostitution | 7 |
| retirement | 7 |
| sexual-harassment | 6 |
| small-claims | 6 |
| unemployment | 6 |
| dismissal | 5 |
| industrial-accident2 | 5 |
| industrial-accident1 | 4 |
| neighbor-dispute | 4 |
| sangga | 4 |
| real-estate-sale | 3 |
| real-estate-auction | 3 |

## CRITICAL: Merge Recommended (49 pairs)

These pairs target essentially the same search intent and should be merged into a single page.

**NOTE:** Many of the highest-severity pairs (severity 25+) are LITERAL DUPLICATES -- the same slug defined in both a domain-specific `.ts` file AND a `spokes-batch*.ts` file. These must be deduplicated by removing one of the two definitions, or they will cause routing conflicts.

### Literal Duplicate Slugs (63 slugs defined 2+ times)

These are the most urgent issues -- the same slug appears in multiple source files.

**Triple duplicates (3x):**
- `defamation-settlement-amount-guide`: spokes-batch12-21to25.ts, spokes-batch8-11to15.ts, spokes-batch9-part2.ts
- `will-i-lose-house-and-car`: spokes-batch13-31to35.ts, spokes-batch8-16to20.ts, spokes-batch9-16to20.ts
- `sex-crime-false-accusation-defense`: spokes-batch14-part1.ts, spokes-batch8-part2.ts, spokes-batch9-part1.ts
- `workplace-sexual-violence-response`: spokes-batch14-part2.ts, spokes-batch8-part2.ts, spokes-batch9-11to15.ts

**Double duplicates (domain file + batch file):**
- `assault-evidence-checklist`: assault.ts + spokes-batch12-11to15.ts
- `application-to-discharge-full-procedure`: bankruptcy.ts + spokes-batch13-31to35.ts
- `defamation-requirements-checklist`: defamation.ts + spokes-batch12-21to25.ts
- `legitimate-criticism-prosecution`: defamation.ts + spokes-batch9-part2.ts
- `defamation-accused-response`: defamation.ts + spokes-batch9-11to15.ts
- `hidden-camera-found-immediate-response`: digital-sex-crime.ts + spokes-batch14-part2.ts
- `ex-threatens-to-share-intimate-video`: digital-sex-crime.ts + spokes-batch14-part2.ts
- `property-division-vs-alimony-comparison`: divorce.ts + spokes-batch12-part2.ts
- `decided-divorce-where-to-begin`: divorce.ts + spokes-batch12-part2.ts
- `positive-urine-test-response`: drug-crime.ts + spokes-batch9-part1.ts
- `dui-caught-where-to-start`: dui.ts + spokes-batch12-part2.ts
- `fraud-crime-establishment-requirements`: fraud.ts + spokes-batch12-part1.ts
- `fraud-accused-response`: fraud.ts + spokes-batch14-31to35.ts
- `inheritance-renunciation-deadline`: inheritance.ts + spokes-batch12-26to30.ts
- `jeonse-fraud-report-procedure`: jeonse-fraud.ts + spokes-batch12-11to15.ts
- `jeonse-fraud-vs-deposit-default`: jeonse-fraud.ts + spokes-batch14-21to25.ts
- `floor-noise-report-to-mediation-procedure`: neighbor-dispute.ts + spokes-batch13-21to25.ts
- `rehabilitation-application-procedure-atoz`: rehabilitation.ts + spokes-batch13-26to30.ts
- `retirement-pay-calculation`: retirement.ts + spokes-batch10-26to30.ts
- `child-beaten-at-school-response`: school-violence.ts + spokes-batch12-26to30.ts
- `false-sexual-assault-report-response`: sex-crime.ts + spokes-batch9-16to20.ts
- `sexual-assault-investigation-to-trial`: sex-crime.ts + spokes-batch12-16to20.ts
- `common-mistakes-when-accused`: sex-crime.ts + spokes-batch14-part1.ts
- `stalking-false-report-defense`: stalking.ts + spokes-batch10-16to20.ts
- `stalking-report-and-restraining-order`: stalking.ts + spokes-batch12-21to25.ts
- `accident-settlement-process`: traffic-accident.ts + spokes-batch13-11to15.ts
- `unpaid-wage-report-procedure-timeline`: wage.ts + spokes-batch13-16to20.ts

**Double duplicates (batch file + batch file):**
- `workplace-harassment-where-to-start`: spokes-batch10-21to25.ts + spokes-batch12-31to35.ts
- `workers-comp-medical-claim-process`: spokes-batch11-21to25.ts + spokes-batch13-21to25.ts
- `employer-report-obligation-process`: spokes-batch11-26to30.ts + spokes-batch14-26to30.ts
- `jeonse-fraud-relief-timeline`: spokes-batch11-part2.ts + spokes-batch14-21to25.ts
- `empty-jeonse-verification-method`: spokes-batch12-11to15.ts + spokes-batch7-11to15.ts
- `assault-vs-injury-penalties`: spokes-batch12-11to15.ts + spokes-batch9-16to20.ts
- `sexual-violence-complaint-process`: spokes-batch12-16to20.ts + spokes-batch9-part1.ts
- `online-defamation-evidence-collection`: spokes-batch12-16to20.ts + spokes-batch9-part2.ts
- `deepfake-distribution-legal-response`: spokes-batch12-21to25.ts + spokes-batch7-11to15.ts
- `drug-use-investigation-response`: spokes-batch12-26to30.ts + spokes-batch9-part1.ts
- `physical-contact-at-company-dinner`: spokes-batch12-31to35.ts + spokes-batch7-16to20.ts
- `fraud-prosecution-procedure-overview`: spokes-batch12-part1.ts + spokes-batch8-part1.ts
- `spouse-affair-divorce-response`: spokes-batch12-part1.ts + spokes-batch8-part1.ts
- `dui-traffic-accident-response`: spokes-batch12-part2.ts + spokes-batch8-part2.ts
- `recommended-resignation-unemployment-benefit`: spokes-batch13-16to20.ts + spokes-batch9-16to20.ts
- `retirement-pay-formula-guide`: spokes-batch13-26to30.ts + spokes-batch7-16to20.ts
- `trial-divorce-lawsuit-procedure`: spokes-batch13-31to35.ts + spokes-batch7-part1.ts
- `voice-phishing-immediate-response`: spokes-batch13-part1.ts + spokes-batch8-part1.ts
- `emergency-protective-measures`: spokes-batch13-part1.ts + spokes-batch8-11to15.ts
- `cyber-stalking-repeated-dm`: spokes-batch13-part1.ts + spokes-batch7-part2.ts
- `victim-response-complete-checklist`: spokes-batch14-11to15.ts + spokes-batch7-11to15.ts
- `inheritance-dispute-where-to-start`: spokes-batch14-21to25.ts + spokes-batch9-11to15.ts
- `accused-where-to-start`: spokes-batch14-part1.ts + spokes-batch9-11to15.ts
- `sex-crime-settlement`: spokes-batch14-part1.ts + spokes-batch9-part1.ts
- `anonymous-poster-identification`: spokes-batch8-part2.ts + spokes-batch9-part2.ts

**Within same file (self-duplicates in spokes-batch15-part1.ts):**
- `loan-fraud-response-guide` (2x)
- `used-car-fraud-evidence-prep` (2x)
- `fraud-repeat-offense-sentencing` (2x)
- `fraud-debt-vs-crime-distinction` (2x)
- `divorce-pension-division-timeline` (2x)
- `divorce-child-custody-father-strategy` (2x)
- `divorce-false-adultery-accusation` (2x)

### [digital-sex-crime] severity=35

| | Page A | Page B |
|---|--------|--------|
| Slug | `ex-threatens-to-share-intimate-video` | `ex-threatens-to-share-intimate-video` |
| Keyword | 헤어진 연인이 사적 영상 유포 협박할 때 대처법 | 헤어진 연인이 사적 영상 유포 협박할 때 대처 |
| Question | 헤어진 연인이 사적 영상을 유포하겠다고 협박하면 어떻게 해야 하나요? | 헤어진 연인이 사적 영상을 유포하겠다고 협박하면 어떻게 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 6개 (Jaccard 86%): 사적, 연인이, 영상, 유포, 헤어진, 협박할 | 질문 공유 7개 (Jaccard 100%): 사적, 연인이, 영상을, 유포하겠다고, 하나요, 헤어진, 협박하면

**Action:** MERGE 권장 (높은 중복)

---

### [school-violence] severity=33

| | Page A | Page B |
|---|--------|--------|
| Slug | `child-beaten-at-school-response` | `child-beaten-at-school-response` |
| Keyword | 우리 아이가 학교에서 맞고 왔을 때 대처법 | 우리 아이가 학교에서 맞고 왔을 때 대처법 |
| Question | 아이가 학교에서 맞고 왔는데 어떻게 대처해야 하나요? | 아이가 학교에서 맞고 왔는데 부모는 어떻게 대처해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 6개 (Jaccard 100%): 대처법, 맞고, 아이가, 왔을, 우리, 학교에서 | 질문 공유 6개 (Jaccard 86%): 대처해야, 맞고, 아이가, 왔는데, 하나요, 학교에서

**Action:** MERGE 권장 (높은 중복)

---

### [assault] severity=31

| | Page A | Page B |
|---|--------|--------|
| Slug | `assault-evidence-collection-procedure` | `assault-immediate-evidence-steps` |
| Keyword | 폭행 피해 직후 증거 확보 절차 | 폭행 피해 직후 증거 확보 절차 |
| Question | 폭행을 당한 직후 어떤 증거를 어떻게 확보해야 하나요? | 폭행을 당한 직후 어떤 증거를 확보해야 하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 증거, 직후, 폭행, 피해, 확보 | 질문 공유 6개 (Jaccard 100%): 당한, 증거를, 직후, 폭행을, 하나요, 확보해야

**Action:** MERGE 권장 (높은 중복)

---

### [bankruptcy] severity=31

| | Page A | Page B |
|---|--------|--------|
| Slug | `application-to-discharge-full-procedure` | `application-to-discharge-full-procedure` |
| Keyword | 개인파산 신청에서 면책 결정까지 전체 절차 | 개인파산 신청에서 면책 결정까지 전체 절차 |
| Question | 개인파산 신청부터 면책 결정까지 어떤 절차를 거치나요? | 개인파산 신청부터 면책 결정까지 어떤 절차를 거치나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 개인파산, 결정까지, 면책, 신청에서, 전체 | 질문 공유 6개 (Jaccard 100%): 개인파산, 거치나요, 결정까지, 면책, 신청부터, 절차를

**Action:** MERGE 권장 (높은 중복)

---

### [jeonse-fraud] severity=29

| | Page A | Page B |
|---|--------|--------|
| Slug | `jeonse-fraud-relief-timeline` | `jeonse-fraud-relief-timeline` |
| Keyword | 전세사기 피해 구제 타임라인 | 전세사기 피해 구제 타임라인 |
| Question | 전세사기 피해를 입었을 때 구제 절차는 어떻게 진행되나요? | 전세사기 피해를 입었을 때 구제 절차는 어떤 순서로 진행되나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 구제, 전세사기, 타임라인, 피해 | 질문 공유 6개 (Jaccard 86%): 구제, 입었을, 전세사기, 절차는, 진행되나요, 피해를

**Action:** MERGE 권장 (높은 중복)

---

### [assault] severity=27

| | Page A | Page B |
|---|--------|--------|
| Slug | `assault-evidence-checklist` | `assault-evidence-checklist` |
| Keyword | 폭행 피해 증거 체크리스트 | 폭행 피해 증거 체크리스트 |
| Question | 폭행 피해를 입었을 때 어떤 증거를 모아야 하나요? | 폭행 피해를 입었을 때 어떤 증거를 확보해야 하나요? |
| Type | 체크리스트형 | 체크리스트형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 증거, 체크리스트, 폭행, 피해 | 질문 공유 5개 (Jaccard 71%): 입었을, 증거를, 폭행, 피해를, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [child-support] severity=27

| | Page A | Page B |
|---|--------|--------|
| Slug | `child-support-lawsuit-process` | `child-support-lawsuit-procedure` |
| Keyword | 양육비 청구 소송 절차와 기간 | 양육비 청구 소송 절차와 기간 |
| Question | 양육비 청구 소송은 어떻게 진행되나요? | 양육비 청구 소송은 어떻게 진행되나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 기간, 소송, 양육비, 절차와, 청구 | 질문 공유 4개 (Jaccard 100%): 소송은, 양육비, 진행되나요, 청구

**Action:** MERGE 권장 (높은 중복)

---

### [neighbor-dispute] severity=27

| | Page A | Page B |
|---|--------|--------|
| Slug | `floor-noise-report-to-mediation-procedure` | `floor-noise-report-to-mediation-procedure` |
| Keyword | 층간소음 피해 신고에서 조정까지 절차 | 층간소음 피해 신고에서 조정까지 절차 |
| Question | 층간소음 피해를 신고하면 조정까지 어떤 절차를 거치나요? | 층간소음 피해를 신고하면 어떤 절차를 거치나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 신고에서, 조정까지, 층간소음, 피해 | 질문 공유 5개 (Jaccard 83%): 거치나요, 신고하면, 절차를, 층간소음, 피해를

**Action:** MERGE 권장 (높은 중복)

---

### [sex-crime] severity=27

| | Page A | Page B |
|---|--------|--------|
| Slug | `workplace-sexual-violence-response` | `workplace-sexual-violence-response` |
| Keyword | 직장 내 성폭력 피해 시 대처 방법 | 직장 내 성폭력 피해 시 대처 방법 |
| Question | 직장에서 성폭력 피해를 당했을 때 어떻게 대처해야 하나요? | 직장에서 성폭력 피해를 당했을 때 어떻게 대처해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 성폭력, 직장, 피해 | 질문 공유 6개 (Jaccard 100%): 당했을, 대처해야, 성폭력, 직장에서, 피해를, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [industrial-accident1] severity=25

| | Page A | Page B |
|---|--------|--------|
| Slug | `workers-comp-claim-process` | `workers-comp-medical-claim-process` |
| Keyword | 산재보험 요양급여 신청 절차와 기한 | 산재보험 요양급여 신청 절차와 기한 |
| Question | 산재보험 요양급여는 어떻게 신청하나요? | 산재보험 요양급여는 어떻게 신청하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 기한, 산재보험, 신청, 요양급여, 절차와 | 질문 공유 3개 (Jaccard 100%): 산재보험, 신청하나요, 요양급여는

**Action:** MERGE 권장 (높은 중복)

---

### [industrial-accident1] severity=25

| | Page A | Page B |
|---|--------|--------|
| Slug | `workers-comp-claim-process` | `workers-comp-medical-claim-process` |
| Keyword | 산재보험 요양급여 신청 절차와 기한 | 산재보험 요양급여 신청 절차와 기한 |
| Question | 산재보험 요양급여는 어떻게 신청하나요? | 산재보험 요양급여는 어떻게 신청하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 기한, 산재보험, 신청, 요양급여, 절차와 | 질문 공유 3개 (Jaccard 100%): 산재보험, 신청하나요, 요양급여는

**Action:** MERGE 권장 (높은 중복)

---

### [industrial-accident1] severity=25

| | Page A | Page B |
|---|--------|--------|
| Slug | `workers-comp-medical-claim-process` | `workers-comp-medical-claim-process` |
| Keyword | 산재보험 요양급여 신청 절차와 기한 | 산재보험 요양급여 신청 절차와 기한 |
| Question | 산재보험 요양급여는 어떻게 신청하나요? | 산재보험 요양급여는 어떻게 신청하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 기한, 산재보험, 신청, 요양급여, 절차와 | 질문 공유 3개 (Jaccard 100%): 산재보험, 신청하나요, 요양급여는

**Action:** MERGE 권장 (높은 중복)

---

### [sex-crime] severity=25

| | Page A | Page B |
|---|--------|--------|
| Slug | `sex-crime-false-accusation-process` | `sex-crime-false-accusation-defense` |
| Keyword | 성범죄 무고 대응 방법과 절차 | 성범죄 무고 대응 방법과 절차 |
| Question | 성범죄로 사실과 다르게 신고되었을 때 어떻게 대응해야 하나요? | 성범죄로 사실과 다르게 신고되었다면 어떻게 대응해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 무고, 방법과, 성범죄 | 질문 공유 5개 (Jaccard 71%): 다르게, 대응해야, 사실과, 성범죄로, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [dui] severity=24

| | Page A | Page B |
|---|--------|--------|
| Slug | `dui-bac-penalty-reference-table` | `dui-bac-penalty-by-level` |
| Keyword | 음주운전 혈중알코올농도별 처벌 기준표 | 음주운전 처벌 기준 혈중알코올농도별 안내 |
| Question | 음주운전 혈중알코올농도에 따라 처벌이 어떻게 달라지나요? | 혈중알코올농도에 따라 음주운전 처벌이 어떻게 달라지나요? |
| Type | 수치기한형 | Q&A형 |

**Reasons:** 키워드 공유 3개 (Jaccard 60%): 음주운전, 처벌, 혈중알코올농도별 | 질문 공유 5개 (Jaccard 100%): 달라지나요, 따라, 음주운전, 처벌이, 혈중알코올농도에

**Action:** MERGE 권장 (높은 중복)

---

### [defamation] severity=23

| | Page A | Page B |
|---|--------|--------|
| Slug | `defamation-settlement-amount-guide` | `defamation-settlement-amount-guide` |
| Keyword | 명예훼손죄 합의금 적정 금액 가이드 | 명예훼손 합의금 적정 금액 기준 |
| Question | 명예훼손 합의금은 보통 얼마 정도인가요? | 명예훼손 합의금은 보통 얼마 정도인가요? |
| Type | 수치기한형 | 수치기한형 |

**Reasons:** 키워드 공유 3개 (Jaccard 60%): 금액, 적정, 합의금 | 질문 공유 4개 (Jaccard 100%): 명예훼손, 보통, 정도인가요, 합의금은

**Action:** MERGE 권장 (높은 중복)

---

### [drug-crime] severity=23

| | Page A | Page B |
|---|--------|--------|
| Slug | `drug-types-punishment-comparison` | `use-vs-possession-vs-dealing-penalty` |
| Keyword | 마약 투약 vs 소지 vs 매매 처벌 비교 | 마약 투약 vs 소지 vs 매매 처벌 비교 |
| Question | 마약 투약, 소지, 매매의 처벌 수위는 각각 어떻게 다른가요? | 마약 투약, 소지, 매매는 처벌이 어떻게 다른가요? |
| Type | 비교형 | 비교형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 마약, 매매, 소지, 처벌, 투약 | 질문 공유 4개 (Jaccard 40%): 다른가요, 마약, 소지, 투약

**Action:** MERGE 권장 (높은 중복)

---

### [inheritance] severity=23

| | Page A | Page B |
|---|--------|--------|
| Slug | `inheritance-dispute-where-to-start` | `inheritance-dispute-where-to-start` |
| Keyword | 상속 분쟁 어디부터 시작해야 하나 | 상속 분쟁 어디서부터 시작해야 하나 |
| Question | 상속 분쟁이 생겼을 때 가장 먼저 무엇을 해야 하나요? | 상속 분쟁이 생겼을 때 가장 먼저 해야 할 일은 무엇인가요? |
| Type | 어디부터형 | 어디부터형 |

**Reasons:** 키워드 공유 4개 (Jaccard 67%): 분쟁, 상속, 시작해야, 하나 | 질문 공유 5개 (Jaccard 56%): 가장, 먼저, 분쟁이, 상속, 생겼을

**Action:** MERGE 권장 (높은 중복)

---

### [prostitution] severity=23

| | Page A | Page B |
|---|--------|--------|
| Slug | `prostitution-entrapment-response` | `sting-operation-response` |
| Keyword | 성매매 함정수사 적발 시 대처 방법 | 성매매 함정수사 적발 시 대처 방법 |
| Question | 성매매 함정수사에 적발되었을 때 어떻게 대처해야 하나요? | 성매매 함정수사에 걸렸다면 어떻게 대처해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 성매매, 적발, 함정수사 | 질문 공유 4개 (Jaccard 67%): 대처해야, 성매매, 하나요, 함정수사에

**Action:** MERGE 권장 (높은 중복)

---

### [stalking] severity=23

| | Page A | Page B |
|---|--------|--------|
| Slug | `cyber-stalking-repeated-dm` | `cyber-stalking-repeated-dm` |
| Keyword | 온라인 DM 반복 전송 사이버 스토킹 처벌 기준 | 온라인 DM 반복 전송 사이버 스토킹 처벌 기준 |
| Question | 온라인에서 DM을 계속 보내는 것도 스토킹으로 처벌되나요? | 인스타그램 DM을 계속 보내는 것도 스토킹인가요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 6개 (Jaccard 100%): 반복, 사이버, 스토킹, 온라인, 전송, 처벌 | 질문 공유 3개 (Jaccard 38%): 것도, 계속, 보내는

**Action:** MERGE 권장 (높은 중복)

---

### [jeonse] severity=22

| | Page A | Page B |
|---|--------|--------|
| Slug | `no-registration-deposit-protection` | `no-move-in-report-deposit-protection` |
| Keyword | 전입신고 안 했을 때 보증금 보호 방법 | 전입신고 안 했을 때 보증금 보호받는 방법 |
| Question | 전입신고를 안 했는데 보증금 보호받을 수 있나요? | 전입신고를 안 했는데 보증금을 보호받을 수 있나요? |
| Type | 실수/함정형 | 실수함정형 |

**Reasons:** 키워드 공유 3개 (Jaccard 60%): 보증금, 전입신고, 했을 | 질문 공유 4개 (Jaccard 67%): 보호받을, 있나요, 전입신고를, 했는데

**Action:** MERGE 권장 (높은 중복)

---

### [jeonse-fraud] severity=22

| | Page A | Page B |
|---|--------|--------|
| Slug | `jeonse-fraud-victim-application-docs` | `jeonse-fraud-victim-recognition-process` |
| Keyword | 전세사기 피해자 인정 신청 전 준비 서류 | 전세사기 피해자 인정 신청 절차와 필요 서류 |
| Question | 전세사기 피해자 인정을 받으려면 어떤 서류가 필요한가요? | 전세사기 피해자 인정 신청은 어떤 절차로 진행되고 어떤 서류가 필요한가요? |
| Type | 준비서류형 | 절차형 |

**Reasons:** 키워드 공유 5개 (Jaccard 83%): 서류, 신청, 인정, 전세사기, 피해자 | 질문 공유 4개 (Jaccard 40%): 서류가, 전세사기, 피해자, 필요한가요

**Action:** MERGE 권장 (높은 중복)

---

### [divorce] severity=21

| | Page A | Page B |
|---|--------|--------|
| Slug | `property-division-vs-alimony-comparison` | `property-division-vs-alimony-comparison` |
| Keyword | 재산분할 vs 위자료 차이점 비교 | 재산분할 vs 위자료 차이점 비교 |
| Question | 재산분할과 위자료는 어떻게 다른가요? | 재산분할과 위자료는 어떻게 다른가요? |
| Type | 비교형 | 비교형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 위자료, 재산분할, 차이점 | 질문 공유 3개 (Jaccard 100%): 다른가요, 위자료는, 재산분할과

**Action:** MERGE 권장 (높은 중복)

---

### [divorce] severity=21

| | Page A | Page B |
|---|--------|--------|
| Slug | `decided-divorce-where-to-begin` | `decided-divorce-where-to-begin` |
| Keyword | 이혼을 결심했는데 어디부터 시작해야 할까 | 이혼을 결심했는데 어디부터 시작해야 할까 |
| Question | 이혼을 결심했는데 어디부터 시작해야 하나요? | 이혼을 결심했는데 가장 먼저 무엇을 해야 하나요? |
| Type | 어디부터형 | 어디부터형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 결심했는데, 시작해야, 어디부터, 이혼을, 할까 | 질문 공유 3개 (Jaccard 38%): 결심했는데, 이혼을, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [drug-crime] severity=21

| | Page A | Page B |
|---|--------|--------|
| Slug | `positive-urine-test-response` | `drug-urine-positive-response` |
| Keyword | 마약 소변검사 양성 시 대응법 | 마약 투약 혐의 소변검사 양성 시 대응 |
| Question | 마약 소변검사에서 양성이 나왔는데 어떻게 대응해야 하나요? | 마약 소변검사에서 양성이 나왔을 때 어떻게 대응해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 50%): 마약, 소변검사, 양성 | 질문 공유 5개 (Jaccard 71%): 대응해야, 마약, 소변검사에서, 양성이, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [drug-crime] severity=21

| | Page A | Page B |
|---|--------|--------|
| Slug | `drug-urine-positive-response` | `positive-urine-test-response` |
| Keyword | 마약 투약 혐의 소변검사 양성 시 대응 | 마약 투약 혐의 소변검사 양성 시 대응 |
| Question | 마약 소변검사에서 양성이 나왔을 때 어떻게 대응해야 하나요? | 소변검사에서 양성 반응이 나왔을 때 어떻게 해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 마약, 소변검사, 양성, 투약, 혐의 | 질문 공유 3개 (Jaccard 38%): 나왔을, 소변검사에서, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [fraud] severity=21

| | Page A | Page B |
|---|--------|--------|
| Slug | `voice-phishing-immediate-response` | `voice-phishing-immediate-response` |
| Keyword | 보이스피싱 피해 발생 시 즉시 대응법 | 보이스피싱 피해 발생 시 즉시 해야 할 일 |
| Question | 보이스피싱 피해를 당했는데 지금 당장 뭘 해야 하나요? | 보이스피싱에 당했는데 지금 당장 뭘 해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 4개 (Jaccard 80%): 발생, 보이스피싱, 즉시, 피해 | 질문 공유 4개 (Jaccard 57%): 당장, 당했는데, 지금, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [sex-crime] severity=21

| | Page A | Page B |
|---|--------|--------|
| Slug | `accused-where-to-start` | `accused-where-to-start` |
| Keyword | 성범죄 혐의 받으면 어디부터 해야 하나 | 성범죄 혐의 받으면 어디부터 해야 하나 |
| Question | 성범죄 혐의를 받았는데 지금 당장 뭘 해야 하나요? | 성범죄 혐의를 받게 되면 가장 먼저 무엇을 해야 하나요? |
| Type | 어디부터형 | 어디부터형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 받으면, 성범죄, 어디부터, 하나, 혐의 | 질문 공유 3개 (Jaccard 27%): 성범죄, 하나요, 혐의를

**Action:** MERGE 권장 (높은 중복)

---

### [wage] severity=21

| | Page A | Page B |
|---|--------|--------|
| Slug | `unpaid-wage-report-procedure-timeline` | `unpaid-wage-report-procedure-timeline` |
| Keyword | 임금체불 신고 절차와 처리 기간 | 임금체불 신고 절차와 처리 기간 |
| Question | 임금체불 신고는 어떤 절차로 진행되고 ��마나 걸리나요? | 임금체불 신고는 어떻게 하고 처리까지 얼마나 걸리나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 기간, 신고, 임금체불, 절차와, 처리 | 질문 공유 3개 (Jaccard 33%): 걸리나요, 신고는, 임금체불

**Action:** MERGE 권장 (높은 중복)

---

### [digital-sex-crime] severity=19

| | Page A | Page B |
|---|--------|--------|
| Slug | `deepfake-distribution-legal-response` | `deepfake-distribution-legal-response` |
| Keyword | 딥페이크 합성물 유포 시 법적 대응 절차 | 딥페이크 합성물 유포 시 법적 대응 절차 |
| Question | 딥페이크 합성물이 유포되었는데 어떻게 법적 대응하나요? | 딥페이크 합성물이 유포되었을 때 어떻게 법적으로 대응하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 딥페이크, 법적, 유포, 합성물 | 질문 공유 3개 (Jaccard 43%): 대응하나요, 딥페이크, 합성물이

**Action:** MERGE 권장 (높은 중복)

---

### [dui] severity=19

| | Page A | Page B |
|---|--------|--------|
| Slug | `dui-traffic-accident-response` | `dui-traffic-accident-response` |
| Keyword | 음주운전 교통사고 발생 시 대처법 | 음주운전 교통사고 발생 시 대처법 |
| Question | 음주운전 중 교통사고가 발생하면 어떻게 대처해야 하나요? | 음주운전 중 교통사고가 나면 어떻게 해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 교통사고, 대처법, 발생, 음주운전 | 질문 공유 3개 (Jaccard 50%): 교통사고가, 음주운전, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [school-violence] severity=19

| | Page A | Page B |
|---|--------|--------|
| Slug | `school-violence-committee-procedure` | `report-to-committee-procedure` |
| Keyword | 학교폭력 피해 신고 후 자치위원회 절차 | 학교폭력 피해 신고 후 자치위원회 절차 |
| Question | 학교폭력 피해를 신고하면 자치위원회 절차가 어떻게 되나요? | 학교폭력 피해를 신고한 뒤 자치위원회 절차는 어떻게 진행되나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 신고, 자치위원회, 피해, 학교폭력 | 질문 공유 3개 (Jaccard 33%): 자치위원회, 피해를, 학교폭력

**Action:** MERGE 권장 (높은 중복)

---

### [sex-crime] severity=19

| | Page A | Page B |
|---|--------|--------|
| Slug | `sexual-violence-complaint-process` | `sexual-violence-complaint-process` |
| Keyword | 성폭력 피해 고소 절차와 방법 | 성폭력 피해 고소 절차와 방법 |
| Question | 성폭력 피해를 입었을 때 고소는 어떻게 진행하나요? | 성폭력 피해를 당했을 때 고소는 어떻게 하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 고소, 성폭력, 절차와, 피해 | 질문 공유 3개 (Jaccard 43%): 고소는, 성폭력, 피해를

**Action:** MERGE 권장 (높은 중복)

---

### [sex-crime] severity=19

| | Page A | Page B |
|---|--------|--------|
| Slug | `workplace-sexual-violence-response` | `workplace-sexual-violence-response` |
| Keyword | 직장 내 성폭력 피해 시 대처 방법 | 직장 내 성폭력 피해 시 대처 방법 |
| Question | 직장에서 성폭력 피해를 당했을 때 어떻게 대처해야 하나요? | 직장에서 성폭력 피해를 당했는데 어떻게 해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 성폭력, 직장, 피해 | 질문 공유 4개 (Jaccard 57%): 성폭력, 직장에서, 피해를, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [sex-crime] severity=19

| | Page A | Page B |
|---|--------|--------|
| Slug | `workplace-sexual-violence-response` | `workplace-sexual-violence-response` |
| Keyword | 직장 내 성폭력 피해 시 대처 방법 | 직장 내 성폭력 피해 시 대처 방법 |
| Question | 직장에서 성폭력 피해를 당했는데 어떻게 해야 하나요? | 직장에서 성폭력 피해를 당했을 때 어떻게 대처해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 성폭력, 직장, 피해 | 질문 공유 4개 (Jaccard 57%): 성폭력, 직장에서, 피해를, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [sexual-harassment] severity=19

| | Page A | Page B |
|---|--------|--------|
| Slug | `physical-contact-at-company-dinner` | `physical-contact-at-company-dinner` |
| Keyword | 회식 자리에서 신체 접촉 성희롱 해당 여부 | 회식 자리에서 신체 접촉 성희롱 해당 여부 |
| Question | 회식에서 어깨를 만졌다고 성희롱으로 신고당했는데, 실제로 성립하나요? | 회식 자리에서 신체 접촉을 당했는데 성희롱에 해당하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 7개 (Jaccard 100%): 성희롱, 신체, 여부, 자리에서, 접촉, 해당, 회식

**Action:** MERGE 권장 (높은 중복)

---

### [jeonse] severity=18

| | Page A | Page B |
|---|--------|--------|
| Slug | `no-registration-deposit-protection` | `no-move-in-report-protection` |
| Keyword | 전입신고 안 했을 때 보증금 보호 방법 | 전입신고 안 한 전세 보증금 보호 가능성 |
| Question | 전입신고를 안 했는데 보증금 보호받을 수 있나요? | 전입신고를 안 했는데 전세보증금을 보호받을 수 있나요? |
| Type | 실수/함정형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 50%): 보증금, 보호, 전입신고 | 질문 공유 4개 (Jaccard 67%): 보호받을, 있나요, 전입신고를, 했는데

**Action:** MERGE 권장 (높은 중복)

---

### [wage] severity=18

| | Page A | Page B |
|---|--------|--------|
| Slug | `unpaid-salary-after-resignation` | `unpaid-salary-after-quit-guide` |
| Keyword | 퇴사 후 밀린 월급 받는 방법 | 퇴사 후 밀린 월급 받는 법 총정리 |
| Question | 퇴사했는데 밀린 월급을 어떻게 받나요? | 퇴사했는데 밀린 월급을 어떻게 받을 수 있나요? |
| Type | 상황형 | 절차형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 밀린, 받는, 월급, 퇴사 | 질문 공유 3개 (Jaccard 50%): 밀린, 월급을, 퇴사했는데

**Action:** MERGE 권장 (높은 중복)

---

### [defamation] severity=17

| | Page A | Page B |
|---|--------|--------|
| Slug | `anonymous-post-identify-method` | `anonymous-poster-identification` |
| Keyword | 익명 게시글 작성자 특정 방법 | 인터넷 게시글 작성자 특정 방법 |
| Question | 익명으로 올라온 악성 게시글, 작성자를 어떻게 찾을 수 있나요? | 인터넷에 악성 글을 쓴 사람을 어떻게 찾을 수 있나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 3개 (Jaccard 60%): 게시글, 작성자, 특정 | 질문 공유 3개 (Jaccard 30%): 악성, 있나요, 찾을

**Action:** MERGE 권장 (높은 중복)

---

### [retirement] severity=17

| | Page A | Page B |
|---|--------|--------|
| Slug | `retirement-pay-calculation` | `retirement-pay-formula-guide` |
| Keyword | 퇴직금 계산 방법과 공식 상세 안내 | 퇴직금 계산 방법과 공식 상세 안내 |
| Question | 퇴직금은 정확히 어떻게 계산하나요? | 퇴직금은 어떻게 계산하나요? 공식과 기준을 알려주세요. |
| Type | 수치기한형 | 수치기한형 |

**Reasons:** 키워드 공유 6개 (Jaccard 100%): 계산, 공식, 방법과, 상세, 안내, 퇴직금

**Action:** MERGE 권장 (높은 중복)

---

### [retirement] severity=17

| | Page A | Page B |
|---|--------|--------|
| Slug | `retirement-pay-calculation` | `retirement-pay-formula-guide` |
| Keyword | 퇴직금 계산 방법과 공식 상세 안내 | 퇴직금 계산 방법과 공식 상세 안내 |
| Question | 퇴직금은 정확히 어떻게 계산하나요? | 퇴직금은 어떻게 계산하나요? |
| Type | 수치기한형 | 수치기한형 |

**Reasons:** 키워드 공유 6개 (Jaccard 100%): 계산, 공식, 방법과, 상세, 안내, 퇴직금

**Action:** MERGE 권장 (높은 중복)

---

### [retirement] severity=17

| | Page A | Page B |
|---|--------|--------|
| Slug | `retirement-pay-formula-guide` | `retirement-pay-formula-guide` |
| Keyword | 퇴직금 계산 방법과 공식 상세 안내 | 퇴직금 계산 방법과 공식 상세 안내 |
| Question | 퇴직금은 어떻게 계산하나요? 공식과 기준을 알려주세요. | 퇴직금은 어떻게 계산하나요? |
| Type | 수치기한형 | 수치기한형 |

**Reasons:** 키워드 공유 6개 (Jaccard 100%): 계산, 공식, 방법과, 상세, 안내, 퇴직금

**Action:** MERGE 권장 (높은 중복)

---

### [stalking] severity=17

| | Page A | Page B |
|---|--------|--------|
| Slug | `stalking-report-and-restraining-order` | `stalking-report-and-restraining-order` |
| Keyword | 스토킹 피해 신고 절차와 접근금지 신청법 | 스토킹 피해 신고 절차와 접근금지 신청법 |
| Question | 스토킹 피해를 신고하고 접근금지를 신청하려면 어떻게 하나요? | 스토킹 피해 신고는 어떻게 하고 접근금지는 어떻게 신청하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 6개 (Jaccard 100%): 스토킹, 신고, 신청법, 절차와, 접근금지, 피해

**Action:** MERGE 권장 (높은 중복)

---

### [fraud] severity=16

| | Page A | Page B |
|---|--------|--------|
| Slug | `investment-fraud-evidence-collection` | `used-car-fraud-evidence-prep` |
| Keyword | 투자 사기 피해 증거 모으는 법 | 중고차 사기 증거 수집 체크리스트 |
| Question | 투자 사기를 당한 것 같은데 증거를 어떻게 모아야 하나요? | 중고차 사기를 당한 것 같은데 어떤 증거를 모아야 하나요? |
| Type | 상황형 | 체크리스트형 |

**Reasons:** 질문 공유 6개 (Jaccard 75%): 같은데, 당한, 모아야, 사기를, 증거를, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [child-sex-crime] severity=15

| | Page A | Page B |
|---|--------|--------|
| Slug | `mandatory-reporting-procedure` | `mandatory-reporting-and-procedure` |
| Keyword | 아동성범죄 피해 발견 시 신고 의무와 절차 | 아동성범죄 피해 발견 시 신고 의무와 절차 |
| Question | 아동성범죄를 발견하면 신고 의무가 있나요? 절차는 어떻게 되나요? | 아동성범죄 피해를 발견하면 어떻게 신고해야 하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 발견, 신고, 아동성범죄, 의무와, 피해

**Action:** MERGE 권장 (높은 중복)

---

### [fraud] severity=15

| | Page A | Page B |
|---|--------|--------|
| Slug | `used-market-fraud-evidence` | `used-market-fraud-police-prep` |
| Keyword | 중고거래 사기 당했을 때 증거 모으는 법 | 중고거래 사기 당했을 때 경찰 신고 전 준비할 것 |
| Question | 중고거래 사기를 당했는데 증거를 어떻게 모아야 하나요? | 중고거래 사기를 당했는데 경찰 신고 전에 뭘 준비해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 38%): 당했을, 사기, 중고거래 | 질문 공유 4개 (Jaccard 40%): 당했는데, 사기를, 중고거래, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [fraud] severity=15

| | Page A | Page B |
|---|--------|--------|
| Slug | `used-market-fraud-evidence` | `investment-fraud-evidence-collection` |
| Keyword | 중고거래 사기 당했을 때 증거 모으는 법 | 투자 사기 피해 증거 모으는 법 |
| Question | 중고거래 사기를 당했는데 증거를 어떻게 모아야 하나요? | 투자 사기를 당한 것 같은데 증거를 어떻게 모아야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 43%): 모으는, 사기, 증거 | 질문 공유 4개 (Jaccard 44%): 모아야, 사기를, 증거를, 하나요

**Action:** MERGE 권장 (높은 중복)

---

### [inheritance] severity=15

| | Page A | Page B |
|---|--------|--------|
| Slug | `inheritance-renunciation-deadline` | `inheritance-renunciation-deadline` |
| Keyword | 상속 포기 신청 절차와 기한 | 상속 포기 신청 절차와 기한 |
| Question | 상속 포기 기한은 언제까지이고 절차는 어떻게 되나요? | 상속 포기 신청은 어떻게, 언제까지 해야 하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 기한, 상속, 신청, 절차와, 포기

**Action:** MERGE 권장 (높은 중복)

---

### [sexual-harassment] severity=15

| | Page A | Page B |
|---|--------|--------|
| Slug | `workplace-harassment-where-to-start` | `workplace-harassment-where-to-start` |
| Keyword | 직장 내 성희롱 당했을 때 어디부터 시작하나 | 직장 내 성희롱 당했을 때 어디부터 시작하나 |
| Question | 직장 내 성희롱을 당했을 때 가장 먼저 해야 할 일은 무엇인가요? | 직장에서 성희롱을 당했는데 어디부터 시작해야 하나요? |
| Type | 어디부터형 | 어디부터형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 당했을, 성희롱, 시작하나, 어디부터, 직장

**Action:** MERGE 권장 (높은 중복)

---

### [real-estate-sale] severity=14

| | Page A | Page B |
|---|--------|--------|
| Slug | `contract-cancel-deposit-return` | `contract-cancellation-deposit-return` |
| Keyword | 매매계약 해제 시 계약금 반환 청구 방법 | 매매계약 해제 시 계약금 반환 청구 방법 |
| Question | 매매계약이 해제되면 계약금을 돌려받을 수 있나요? | 매매계약이 해제되면 계약금 반환을 어떻게 청구하나요? |
| Type | 상황형 | 절차타임라인형 |

**Reasons:** 키워드 공유 5개 (Jaccard 100%): 계약금, 매매계약, 반환, 청구, 해제

**Action:** MERGE 권장 (높은 중복)

---

## WARNING: Differentiation Needed (35 pairs)

These pairs have significant overlap but may serve slightly different intents. They need clearer differentiation in titles, content structure, and target keywords.

### [assault] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `assault-complaint-template` | `assault-complaint-writing` |
| Keyword | 폭행 피해자 고소장 작성법 | 폭행 피해자 고소장 작성법 |
| Question | 폭행 피해를 당해서 고소장을 쓰려는데 어떻게 작성하나요? | 폭행당했는데 고소장을 어떻게 작성해야 하나요? |
| Type | 템플릿형 | 템플릿형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 고소장, 작성법, 폭행, 피해자

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [defamation] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `defamation-requirements-checklist` | `defamation-requirements-checklist` |
| Keyword | 명예훼손 성립 요건 체크리스트 | 명예훼손 성립 요건 체크리스트 |
| Question | 명예훼손이 성립하려면 어떤 요건이 필요한가요? | 명예훼손 혐의를 받고 있는데 성립 요건을 어떻게 확인하나요? |
| Type | 체크리스트형 | 체크리스트형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 명예훼손, 성립, 요건, 체크리스트

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [defamation] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `anonymous-post-identify-method` | `anonymous-poster-identification` |
| Keyword | 익명 게시글 작성자 특정 방법 | 익명 게시글 작성자 특정 방법 |
| Question | 익명으로 올라온 악성 게시글, 작성자를 어떻게 찾을 수 있나요? | 익명으로 올린 명예훼손 게시글의 작성자를 어떻게 찾나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 게시글, 익명, 작성자, 특정

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [defamation] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `defamation-settlement-amount-guide` | `defamation-settlement-amount-guide` |
| Keyword | 명예훼손 합의금 적정 금액 기준 | 명예훼손 합의금 적정 금액 기준 |
| Question | 명예훼손 합의금은 얼마가 적정한가요? | 명예훼손 합의금은 보통 얼마 정도인가요? |
| Type | 수치기한형 | 수치기한형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 금액, 명예훼손, 적정, 합의금

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [divorce] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `trial-divorce-lawsuit-procedure` | `trial-divorce-lawsuit-procedure` |
| Keyword | 재판이혼 소송 절차 총정리 | 재판이혼 소송 절차 총정리 |
| Question | 재판이혼 소송은 어떤 순서로 진행되나요? | 재판이혼 소송은 어떤 순서로 진행되나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 질문 공유 4개 (Jaccard 100%): 소송은, 순서로, 재판이혼, 진행되나요

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [drug-crime] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `drug-use-investigation-response` | `drug-use-investigation-response` |
| Keyword | 마약 투약 혐의 수사 대응 절차 | 마약 투약 혐의 수사 대응 절차 |
| Question | 마약 투약 혐의를 받으면 수사 절차는 어떻게 진행되나요? | 마약 투약 혐의로 수사를 받게 되면 어떻게 대응해야 하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 마약, 수사, 투약, 혐의

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [dui] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `dui-caught-where-to-start` | `dui-caught-where-to-start` |
| Keyword | 음주운전으로 적발됐는데 어디부터 해야 할까 | 음주운전으로 적발됐는데 어디부터 해야 할까 |
| Question | 음주운전으로 적발됐는데 어디부터 해야 할까요? | 음주운전 적발 후 가장 먼저 무엇을 해야 하나요? |
| Type | 어디부터형 | 어디부터형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 어디부터, 음주운전으로, 적발됐는데, 할까

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [fraud] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `fraud-crime-establishment-requirements` | `fraud-crime-establishment-requirements` |
| Keyword | 사기죄 성립 요건은 무엇인가요? | 사기죄 성립 요건은 무엇인가요? |
| Question | 사기죄가 성립하려면 어떤 요건이 필요한가요? | 어떤 경우에 사기죄가 성립하나요? |
| Type | Q&A형 | Q&A형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 무엇인가요, 사기죄, 성립, 요건은

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [jeonse] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `lease-expired-landlord-wont-leave` | `landlord-no-contact-after-expiry` |
| Keyword | 전세 계약 만료 후 집주인이 안 나가라고 할 때 | 전세 만료 후 집주인이 연락 안 될 때 대처법 |
| Question | 전세 계약이 끝났는데 집주인이 안 나가라고 합니다. 어떻게 해야 하나요? | 전세 만료 후 집주인이 연락이 안 되면 어떻게 해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 43%): 만료, 전세, 집주인이 | 질문 공유 3개 (Jaccard 30%): 전세, 집주인이, 하나요

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [jeonse-fraud] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `jeonse-fraud-vs-deposit-default` | `jeonse-fraud-vs-deposit-default` |
| Keyword | 전세사기 vs 전세보증금 미반환 차이 | 전세사기와 단순 보증금 미반환 차이점 |
| Question | 전세사기와 보증금 미반환은 뭐가 다른가요? | 전세사기와 단순 보증금 미반환은 어떻게 다른가요? |
| Type | 비교형 | 비교형 |

**Reasons:** 질문 공유 4개 (Jaccard 67%): 다른가요, 미반환은, 보증금, 전세사기와

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [sex-crime] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `forced-molestation-standard` | `what-exactly-is-sexual-assault-qa` |
| Keyword | 강제추행 기준이 정확히 뭔가요 | 강제추행 기준이 정확히 뭔가요 |
| Question | 어디까지가 강제추행이고, 법적 기준은 어떻게 되나요? | 강제추행이 되려면 어떤 행위가 있어야 하나요? |
| Type | Q&A형 | Q&A형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 강제추행, 기준이, 뭔가요, 정확히

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [sex-crime] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `sexual-assault-procedure-trial` | `sexual-assault-investigation-to-trial` |
| Keyword | 강제추행 혐의 수사부터 재판까지 절차 | 강제추행 혐의 수사부터 재판까지 절차 |
| Question | 강제추행 혐의를 받고 있을 때 수사와 재판은 어떻게 진행되나요? | 강제추행 혐의를 받으면 수사부터 재판까지 어떤 절차를 거치나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 강제추행, 수사부터, 재판까지, 혐의

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [stalking] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `emergency-protective-measures` | `emergency-protective-measures` |
| Keyword | 스토킹 피해자 긴급응급조치 요청 방법 | 스토킹 피해자 긴급응급조치 요청 방법 |
| Question | 스토킹 피해자인데 긴급응급조치를 요청하려면 어떻게 해야 하나요? | 스토킹 피해를 당하고 있는데 긴급응급조치는 어떻게 요청하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 긴급응급조치, 스토킹, 요청, 피해자

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [traffic-accident] severity=13

| | Page A | Page B |
|---|--------|--------|
| Slug | `accident-settlement-process` | `accident-settlement-process` |
| Keyword | 교통사고 발생 후 합의 절차와 방법 | 교통사고 발생 후 합의 절차와 방법 |
| Question | 교통사고 발생 후 합의 절차는 어떻게 되나요? | 교통사고 후 합의는 어떤 절차로 진행하나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 교통사고, 발생, 절차와, 합의

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [assault] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `assault-evidence-collection-procedure` | `assault-evidence-checklist` |
| Keyword | 폭행 피해 직후 증거 확보 절차 | 폭행 피해 증거 체크리스트 |
| Question | 폭행을 당한 직후 어떤 증거를 어떻게 확보해야 하나요? | 폭행 피해를 입었을 때 어떤 증거를 확보해야 하나요? |
| Type | 절차타임라인형 | 체크리스트형 |

**Reasons:** 키워드 공유 3개 (Jaccard 50%): 증거, 폭행, 피해 | 질문 공유 3개 (Jaccard 33%): 증거를, 하나요, 확보해야

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [assault] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `assault-immediate-evidence-steps` | `assault-evidence-checklist` |
| Keyword | 폭행 피해 직후 증거 확보 절차 | 폭행 피해 증거 체크리스트 |
| Question | 폭행을 당한 직후 어떤 증거를 확보해야 하나요? | 폭행 피해를 입었을 때 어떤 증거를 확보해야 하나요? |
| Type | 절차타임라인형 | 체크리스트형 |

**Reasons:** 키워드 공유 3개 (Jaccard 50%): 증거, 폭행, 피해 | 질문 공유 3개 (Jaccard 33%): 증거를, 하나요, 확보해야

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [child-support] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `child-support-enforcement-method` | `child-support-overdue-collection` |
| Keyword | 양육비 강제집행 방법과 절차 | 양육비 안 주면 어떻게 받아낼 수 있나요 |
| Question | 양육비를 안 주면 강제집행으로 받아낼 수 있나요? | 양육비를 안 주면 어떻게 받아낼 수 있나요? |
| Type | 절차타임라인형 | 상황형 |

**Reasons:** 질문 공유 4개 (Jaccard 80%): 받아낼, 양육비를, 있나요, 주면

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [defamation] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `online-defamation-evidence-collection` | `online-defamation-evidence-collection` |
| Keyword | 온라인 명예훼손 증거 수집 방법 | 온라인 명예훼손 증거 수집 방법 |
| Question | 온라인 명예훼손 피해를 입었을 때 증거는 어떻게 수집하나요? | 온라인에서 명예훼손을 당했을 때 증거는 어떻게 모아야 하나요? |
| Type | 준비서류형 | 체크리스트형 |

**Reasons:** 키워드 공유 4개 (Jaccard 100%): 명예훼손, 수집, 온라인, 증거

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [drug-crime] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `drug-investigation-response` | `drug-use-investigation-response` |
| Keyword | 마약 혐의 수사 연락 받았을 때 대응법 | 마약 투약 혐의 수사 대응 절차 |
| Question | 마약 혐의로 수사 연락을 받았는데 어떻게 해야 하나요? | 마약 투약 혐의로 수사를 받게 되면 어떻게 대응해야 하나요? |
| Type | 상황형 | 절차타임라인형 |

**Reasons:** 키워드 공유 3개 (Jaccard 43%): 마약, 수사, 혐의 | 질문 공유 3개 (Jaccard 27%): 마약, 하나요, 혐의로

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [drug-crime] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `drug-urine-positive-response` | `drug-use-investigation-response` |
| Keyword | 마약 투약 혐의 소변검사 양성 시 대응 | 마약 투약 혐의 수사 대응 절차 |
| Question | 마약 소변검사에서 양성이 나왔을 때 어떻게 대응해야 하나요? | 마약 투약 혐의로 수사를 받게 되면 어떻게 대응해야 하나요? |
| Type | 상황형 | 절차타임라인형 |

**Reasons:** 키워드 공유 3개 (Jaccard 50%): 마약, 투약, 혐의 | 질문 공유 3개 (Jaccard 27%): 대응해야, 마약, 하나요

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [jeonse] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `lease-expired-landlord-wont-leave` | `lease-expiry-deposit-return-steps` |
| Keyword | 전세 계약 만료 후 집주인이 안 나가라고 할 때 | 전세 계약 만료 후 보증금 돌려받는 절차 |
| Question | 전세 계약이 끝났는데 집주인이 안 나가라고 합니다. 어떻게 해야 하나요? | 전세 계약이 만료됐는데 보증금을 돌려받으려면 어떻게 하나요? |
| Type | 상황형 | 절차형 |

**Reasons:** 키워드 공유 3개 (Jaccard 43%): 계약, 만료, 전세 | 질문 공유 3개 (Jaccard 30%): 계약이, 전세, 하나요

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [jeonse] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `no-move-in-report-deposit-protection` | `no-move-in-report-protection` |
| Keyword | 전입신고 안 했을 때 보증금 보호받는 방법 | 전입신고 안 한 전세 보증금 보호 가능성 |
| Question | 전입신고를 안 했는데 보증금을 보호받을 수 있나요? | 전입신고를 안 했는데 전세보증금을 보호받을 수 있나요? |
| Type | 실수함정형 | 상황형 |

**Reasons:** 질문 공유 4개 (Jaccard 67%): 보호받을, 있나요, 전입신고를, 했는데

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [neighbor-dispute] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `floor-noise-dispute-response` | `floor-noise-report-to-mediation-procedure` |
| Keyword | 층간소음 피해 신고에서 조정까지 대응법 | 층간소음 피해 신고에서 조정까지 절차 |
| Question | 층간소음 피해를 입으면 어떻게 대응해야 하나요? | 층간소음 피해를 신고하면 조정까지 어떤 절차를 거치나요? |
| Type | 상황형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 80%): 신고에서, 조정까지, 층간소음, 피해

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [neighbor-dispute] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `floor-noise-dispute-response` | `floor-noise-report-to-mediation-procedure` |
| Keyword | 층간소음 피해 신고에서 조정까지 대응법 | 층간소음 피해 신고에서 조정까지 절차 |
| Question | 층간소음 피해를 입으면 어떻게 대응해야 하나요? | 층간소음 피해를 신고하면 어떤 절차를 거치나요? |
| Type | 상황형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 80%): 신고에서, 조정까지, 층간소음, 피해

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [prostitution] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `prostitution-arrest-response` | `prostitution-arrest-criminal-process` |
| Keyword | 성매매 단속 적발 후 형사 절차와 대응 | 성매매 단속 적발 후 형사 절차 |
| Question | 성매매로 단속에 적발됐는데 어떻게 대응해야 하나요? | 성매매 단속에 적발되면 형사 절차가 어떻게 진행되나요? |
| Type | 상황형 | 절차타임라인형 |

**Reasons:** 키워드 공유 4개 (Jaccard 80%): 단속, 성매매, 적발, 형사

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [retirement] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `retirement-pay-complaint` | `unpaid-retirement-report-procedure` |
| Keyword | 퇴직금 안 줄 때 신고하는 방법 | 퇴직금 미지급 시 신고 절차 |
| Question | 퇴직금을 안 주면 어디에 신고하나요? | 퇴직금을 안 주면 어디에 어떻게 신고하나요? |
| Type | 절차형 | 절차타임라인형 |

**Reasons:** 질문 공유 4개 (Jaccard 100%): 신고하나요, 어디에, 주면, 퇴직금을

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [sex-crime] severity=12

| | Page A | Page B |
|---|--------|--------|
| Slug | `sexual-assault-accusation-defense` | `quasi-rape-charge-response` |
| Keyword | 성추행 혐의 받았을 때 대응 방법 | 준강간 혐의 받았을 때 대응 방법 |
| Question | 성추행 혐의를 받았을 때 어떻게 대응해야 하나요? | 준강간 혐의를 받았을 때 어떻게 대응해야 하나요? |
| Type | 어디부터형 | 상황형 |

**Reasons:** 질문 공유 4개 (Jaccard 67%): 대응해야, 받았을, 하나요, 혐의를

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [defamation] severity=11

| | Page A | Page B |
|---|--------|--------|
| Slug | `legitimate-criticism-prosecution` | `legitimate-criticism-prosecution` |
| Keyword | 정당한 비판인데 고소당했을때 | 정당한 비판인데 고소당했을때 |
| Question | 정당한 비판을 했는데 명예훼손으로 고소당했을 때 어떻게 하나요? | 사실을 말했을 뿐인데 명예훼손으로 고소당했다면 어떻게 해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 고소당했을때, 비판인데, 정당한

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [defamation] severity=11

| | Page A | Page B |
|---|--------|--------|
| Slug | `defamation-settlement-amount-guide` | `defamation-settlement-amount-guide` |
| Keyword | 명예훼손 합의금 적정 금액 기준 | 명예훼손죄 합의금 적정 금액 가이드 |
| Question | 명예훼손 합의금은 얼마가 적정한가요? | 명예훼손 합의금은 보통 얼마 정도인가요? |
| Type | 수치기한형 | 수치기한형 |

**Reasons:** 키워드 공유 3개 (Jaccard 60%): 금액, 적정, 합의금

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [defamation] severity=11

| | Page A | Page B |
|---|--------|--------|
| Slug | `anonymous-poster-identification` | `anonymous-poster-identification` |
| Keyword | 인터넷 게시글 작성자 특정 방법 | 익명 게시글 작성자 특정 방법 |
| Question | 인터넷에 악성 글을 쓴 사람을 어떻게 찾을 수 있나요? | 익명으로 올린 명예훼손 게시글의 작성자를 어떻게 찾나요? |
| Type | 절차타임라인형 | 절차타임라인형 |

**Reasons:** 키워드 공유 3개 (Jaccard 60%): 게시글, 작성자, 특정

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [inheritance] severity=11

| | Page A | Page B |
|---|--------|--------|
| Slug | `inheritance-limited-vs-renounce` | `limited-acceptance-vs-renunciation` |
| Keyword | 한정승인과 상속포기 차이점 비교 | 한정승인과 상속포기 차이점 비교 |
| Question | 한정승인과 상속포기는 어떻게 다른가요? | 한정승인과 상속포기는 어떤 차이가 있고 어느 쪽이 유리한가요? |
| Type | 비교형 | 비교형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 상속포기, 차이점, 한정승인과

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [sex-crime] severity=11

| | Page A | Page B |
|---|--------|--------|
| Slug | `false-sexual-assault-report-response` | `false-sexual-assault-report-response` |
| Keyword | 허위 성폭력 신고 대응 방법 | 허위 성폭력 신고 대응 방법 |
| Question | 허위 성폭력 신고를 당했을 때 어떻게 대응해야 하나요? | 사실과 다르게 성폭력으로 신고되었다면 어떻게 해야 하나요? |
| Type | 상황형 | 상황형 |

**Reasons:** 키워드 공유 3개 (Jaccard 100%): 성폭력, 신고, 허위

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [assault] severity=10

| | Page A | Page B |
|---|--------|--------|
| Slug | `assault-evidence-collection` | `assault-evidence-checklist` |
| Keyword | 폭행 피해 증거 모으는 법 | 폭행 피해 증거 체크리스트 |
| Question | 폭행을 당했는데 증거를 어떻게 모으나요? | 폭행 피해를 입었을 때 어떤 증거를 모아야 하나요? |
| Type | 상황형 | 체크리스트형 |

**Reasons:** 키워드 공유 3개 (Jaccard 60%): 증거, 폭행, 피해

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [assault] severity=10

| | Page A | Page B |
|---|--------|--------|
| Slug | `assault-evidence-collection` | `assault-evidence-checklist` |
| Keyword | 폭행 피해 증거 모으는 법 | 폭행 피해 증거 체크리스트 |
| Question | 폭행을 당했는데 증거를 어떻게 모으나요? | 폭행 피해를 입었을 때 어떤 증거를 확보해야 하나요? |
| Type | 상황형 | 체크리스트형 |

**Reasons:** 키워드 공유 3개 (Jaccard 60%): 증거, 폭행, 피해

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

### [fraud] severity=10

| | Page A | Page B |
|---|--------|--------|
| Slug | `fraud-accused-response` | `fraud-false-accusation-defense` |
| Keyword | 사기 고소당했을때 | 사기 무고 대응 |
| Question | 사기로 고소당했는데 어떻게 대응해야 하나요? | 사기로 무고당했을 때 어떻게 대응해야 하나요? |
| Type | 어디부터형 | 상황형 |

**Reasons:** 질문 공유 3개 (Jaccard 60%): 대응해야, 사기로, 하나요

**Action:** DIFFERENTIATE 필요 (상당한 중복)

---

## INFO: Review Needed (47 pairs)

Lower-risk pairs that should be monitored. If both pages rank poorly, consider merging.

- **[sex-crime]** `sex-crime-false-accusation-process` vs `sex-crime-false-accusation-defense` (severity=9)
  - A: 성범죄 무고 대응 방법과 절차 | B: 성범죄 무고 대응 방법
  - 질문 공유 4개 (Jaccard 57%): 다르게, 사실과, 성범죄로, 하나요

- **[sex-crime]** `sex-crime-false-accusation-defense` vs `sex-crime-false-accusation-defense` (severity=9)
  - A: 성범죄 무고 대응 방법 | B: 성범죄 무고 대응 방법과 절차
  - 질문 공유 4개 (Jaccard 57%): 다르게, 사실과, 성범죄로, 하나요

- **[sex-crime]** `false-sexual-assault-report-response` vs `sex-crime-false-accusation-defense` (severity=9)
  - A: 허위 성폭력 신고 대응 방법 | B: 성범죄 무고 대응 방법과 절차
  - 질문 공유 4개 (Jaccard 57%): 다르게, 사실과, 신고되었다면, 하나요

- **[assault]** `assault-evidence-checklist` vs `assault-victim-where-to-start` (severity=8)
  - A: 폭행 피해 증거 체크리스트 | B: 폭행 피해 어디부터 시작해야 하나
  - 질문 공유 4개 (Jaccard 50%): 입었을, 폭행, 피해를, 하나요

- **[assault]** `assault-evidence-checklist` vs `assault-victim-where-to-start` (severity=8)
  - A: 폭행 피해 증거 체크리스트 | B: 폭행 피해 어디부터 시작해야 하나
  - 질문 공유 4개 (Jaccard 50%): 입었을, 폭행, 피해를, 하나요

- **[defamation]** `defamation-requirements-checklist` vs `defamation-employer-review-response` (severity=8)
  - A: 명예훼손 성립 요건 체크리스트 | B: 회사 리뷰 명예훼손 혐의 대응법
  - 질문 공유 4개 (Jaccard 36%): 명예훼손, 받고, 있는데, 혐의를

- **[digital-sex-crime]** `hidden-camera-evidence-report` vs `hidden-camera-report-and-deletion-procedure` (severity=8)
  - A: 불법촬영 피해 발견 시 증거 확보와 신고 | B: 불법촬영 피해 발견 시 신고 및 삭제 요청 절차
  - 키워드 공유 4개 (Jaccard 50%): 발견, 불법촬영, 신고, 피해

- **[drug-crime]** `positive-urine-test-response` vs `drug-crime-hair-test-positive-defense` (severity=8)
  - A: 마약 소변검사 양성 시 대응법 | B: 마약 모발검사 양성 대응 방법
  - 질문 공유 4개 (Jaccard 57%): 나왔는데, 대응해야, 양성이, 하나요

- **[fraud]** `used-market-fraud-evidence` vs `used-car-fraud-evidence-prep` (severity=8)
  - A: 중고거래 사기 당했을 때 증거 모으는 법 | B: 중고차 사기 증거 수집 체크리스트
  - 질문 공유 4개 (Jaccard 44%): 모아야, 사기를, 증거를, 하나요

- **[fraud]** `investment-fraud-evidence-collection` vs `fraud-victim-where-to-start` (severity=8)
  - A: 투자 사기 피해 증거 모으는 법 | B: 사기 피해 어디부터 시작해야 하나
  - 질문 공유 4개 (Jaccard 44%): 같은데, 당한, 사기를, 하나요

- **[fraud]** `fraud-victim-where-to-start` vs `used-car-fraud-evidence-prep` (severity=8)
  - A: 사기 피해 어디부터 시작해야 하나 | B: 중고차 사기 증거 수집 체크리스트
  - 질문 공유 4개 (Jaccard 44%): 같은데, 당한, 사기를, 하나요

- **[jeonse]** `lease-expiry-deposit-return-steps` vs `deposit-return-checklist` (severity=8)
  - A: 전세 계약 만료 후 보증금 돌려받는 절차 | B: 전세보증금 반환 체크리스트
  - 질문 공유 4개 (Jaccard 44%): 돌려받으려면, 보증금을, 전세, 하나요

- **[prostitution]** `online-chat-arrest-response` vs `prostitution-charge-defense-method` (severity=8)
  - A: 온라인 성매매 채팅 적발 시 대응법 | B: 성매매 혐의 방어 방법
  - 질문 공유 4개 (Jaccard 44%): 받고, 성매매, 하나요, 혐의를

- **[sex-crime]** `sexual-assault-report-to-trial` vs `sexual-assault-investigation-to-trial` (severity=8)
  - A: 성범죄 신고부터 재판까지 전체 절차 | B: 강제추행 피해 수사에서 재판까지 절차
  - 질문 공유 4개 (Jaccard 44%): 거치나요, 재판까지, 절차를, 피해를

- **[sex-crime]** `workplace-sexual-violence-response` vs `sexual-violence-complaint-process` (severity=8)
  - A: 직장 내 성폭력 피해 시 대처 방법 | B: 성폭력 피해 고소 절차와 방법
  - 질문 공유 4개 (Jaccard 57%): 당했을, 성폭력, 피해를, 하나요

- **[sex-crime]** `workplace-sexual-violence-response` vs `sexual-violence-complaint-process` (severity=8)
  - A: 직장 내 성폭력 피해 시 대처 방법 | B: 성폭력 피해 고소 절차와 방법
  - 질문 공유 4개 (Jaccard 57%): 당했을, 성폭력, 피해를, 하나요

- **[sexual-harassment]** `workplace-harassment-first-check` vs `workplace-harassment-where-to-start` (severity=8)
  - A: 직장 내 성희롱 피해 시 먼저 확인할 것 | B: 직장 내 성희롱 당했을 때 어디부터 시작하나
  - 질문 공유 4개 (Jaccard 44%): 당했는데, 성희롱을, 직장에서, 하나요

- **[stalking]** `stalking-victim-checklist` vs `stalking-victim-where-to-start` (severity=8)
  - A: 스토킹 피해 대응 완벽 체크리스트 | B: 스토킹 피해 어디부터 시작해야 하나
  - 질문 공유 4개 (Jaccard 50%): 당하고, 스토킹, 피해를, 하나요

- **[stalking]** `stalking-victim-where-to-start` vs `emergency-protective-measures` (severity=8)
  - A: 스토킹 피해 어디부터 시작해야 하나 | B: 스토킹 피해자 긴급응급조치 요청 방법
  - 질문 공유 4개 (Jaccard 50%): 당하고, 스토킹, 있는데, 피해를

- **[stalking]** `stalking-victim-where-to-start` vs `stalking-evidence-collection-faq` (severity=8)
  - A: 스토킹 피해 어디부터 시작해야 하나 | B: 스토킹 증거 수집 방법 FAQ
  - 질문 공유 4개 (Jaccard 50%): 당하고, 스토킹, 있는데, 피해를

- **[stalking]** `emergency-protective-measures` vs `stalking-evidence-collection-faq` (severity=8)
  - A: 스토킹 피해자 긴급응급조치 요청 방법 | B: 스토킹 증거 수집 방법 FAQ
  - 질문 공유 4개 (Jaccard 50%): 당하고, 스토킹, 있는데, 피해를

- **[bankruptcy]** `bankruptcy-to-discharge-process` vs `application-to-discharge-full-procedure` (severity=7)
  - A: 개인파산 신청에서 면책까지 전체 절차 | B: 개인파산 신청에서 면책 결정까지 전체 절차
  - 키워드 공유 3개 (Jaccard 50%): 개인파산, 신청에서, 전체

- **[bankruptcy]** `bankruptcy-to-discharge-process` vs `application-to-discharge-full-procedure` (severity=7)
  - A: 개인파산 신청에서 면책까지 전체 절차 | B: 개인파산 신청에서 면책 결정까지 전체 절차
  - 키워드 공유 3개 (Jaccard 50%): 개인파산, 신청에서, 전체

- **[defamation]** `online-defamation-response` vs `workplace-defamation-by-colleague` (severity=7)
  - A: 악플로 명예훼손 당했을 때 대응법 | B: 직장 동료에게 명예훼손 당했을 때 대응법
  - 키워드 공유 3개 (Jaccard 50%): 당했을, 대응법, 명예훼손

- **[defamation]** `truth-defamation-accused-response` vs `legitimate-criticism-prosecution` (severity=7)
  - A: 사실을 말했는데 명예훼손으로 고소당했을 때 | B: 정당한 비판인데 고소당했을때
  - 질문 공유 3개 (Jaccard 33%): 명예훼손으로, 사실을, 하나요

- **[defamation]** `defamation-accused-response` vs `defamation-accused-response` (severity=7)
  - A: 명예훼손으로 고소당했을 때 대응법 | B: 명예훼손 고소당했을때
  - 질문 공유 3개 (Jaccard 50%): 대응해야, 명예훼손으로, 하나요

- **[divorce]** `spouse-affair-divorce-response` vs `spouse-affair-divorce-response` (severity=7)
  - A: 배우자 외도 발견 시 이혼 대응법 | B: 배우자 외도 발각 후 이혼 진행법
  - 키워드 공유 3개 (Jaccard 43%): 배우자, 외도, 이혼

- **[drug-crime]** `positive-urine-test-response` vs `positive-urine-test-response` (severity=7)
  - A: 마약 소변검사 양성 시 대응법 | B: 마약 투약 혐의 소변검사 양성 시 대응
  - 키워드 공유 3개 (Jaccard 50%): 마약, 소변검사, 양성

- **[fraud]** `used-market-fraud-evidence` vs `online-shopping-fraud-response` (severity=7)
  - A: 중고거래 사기 당했을 때 증거 모으는 법 | B: 온라인 쇼핑몰 사기 당했을 때 대응법
  - 질문 공유 3개 (Jaccard 33%): 당했는데, 사기를, 하나요

- **[fraud]** `used-market-fraud-police-prep` vs `online-shopping-fraud-response` (severity=7)
  - A: 중고거래 사기 당했을 때 경찰 신고 전 준비할 것 | B: 온라인 쇼핑몰 사기 당했을 때 대응법
  - 질문 공유 3개 (Jaccard 27%): 당했는데, 사기를, 하나요

- **[industrial-accident2]** `employer-report-obligation-process` vs `employer-report-obligation-process` (severity=7)
  - A: 산재 발생 시 사업주 신고 의무와 절차 | B: 산재 사업주 보고 의무와 절차
  - 키워드 공유 3개 (Jaccard 50%): 사업주, 산재, 의무와

- **[inheritance]** `inheritance-family-dispute-mediation` vs `inheritance-real-estate-valuation-dispute` (severity=7)
  - A: 상속 분쟁 조정 vs 소송 비교 | B: 상속 부동산 감정 분쟁 해결법
  - 질문 공유 3개 (Jaccard 23%): 분쟁이, 상속, 생겼는데

- **[jeonse]** `deposit-lawsuit-preparation` vs `deposit-lawsuit-docs` (severity=7)
  - A: 보증금 반환 소송 전 준비할 서류 | B: 전세보증금 반환 소송 전 준비 서류
  - 키워드 공유 3개 (Jaccard 50%): 반환, 서류, 소송

- **[jeonse-fraud]** `jeonse-fraud-relief-timeline` vs `jeonse-fraud-report-procedure` (severity=7)
  - A: 전세사기 피해 구제 타임라인 | B: 전세사기 신고 절차 총정리
  - 질문 공유 3개 (Jaccard 33%): 전세사기, 절차는, 피해를

- **[jeonse-fraud]** `jeonse-fraud-report-procedure` vs `jeonse-fraud-relief-timeline` (severity=7)
  - A: 전세사기 신고 절차 총정리 | B: 전세사기 피해 구제 타임라인
  - 질문 공유 3개 (Jaccard 30%): 전세사기, 절차는, 피해를

- **[sex-crime]** `false-sexual-assault-report-response` vs `workplace-sexual-violence-response` (severity=7)
  - A: 허위 성폭력 신고 대응 방법 | B: 직장 내 성폭력 피해 시 대처 방법
  - 질문 공유 3개 (Jaccard 33%): 당했을, 성폭력, 하나요

- **[sex-crime]** `false-sexual-assault-report-response` vs `workplace-sexual-violence-response` (severity=7)
  - A: 허위 성폭력 신고 대응 방법 | B: 직장 내 성폭력 피해 시 대처 방법
  - 질문 공유 3개 (Jaccard 33%): 당했을, 성폭력, 하나요

- **[sex-crime]** `sexual-assault-procedure-trial` vs `sex-crime-settlement` (severity=7)
  - A: 강제추행 혐의 수사부터 재판까지 절차 | B: 성범죄 합의 절차와 방법
  - 질문 공유 3개 (Jaccard 30%): 받고, 있을, 혐의를

- **[sex-crime]** `sex-crime-false-accusation-process` vs `sex-crime-dating-relationship-accusation` (severity=7)
  - A: 성범죄 무고 대응 방법과 절차 | B: 연인관계 성범죄 무고 대응법
  - 질문 공유 3개 (Jaccard 38%): 대응해야, 성범죄로, 하나요

- **[sex-crime]** `sex-crime-false-accusation-process` vs `false-sexual-assault-report-response` (severity=7)
  - A: 성범죄 무고 대응 방법과 절차 | B: 허위 성폭력 신고 대응 방법
  - 질문 공유 3개 (Jaccard 38%): 다르게, 사실과, 하나요

- **[sex-crime]** `quasi-rape-charge-response` vs `drinking-party-assault-response` (severity=7)
  - A: 준강간 혐의 받았을 때 대응 방법 | B: 술자리 강제추행 혐의 대응법
  - 질문 공유 3개 (Jaccard 38%): 대응해야, 하나요, 혐의를

- **[sex-crime]** `sex-crime-false-accusation-defense` vs `false-sexual-assault-report-response` (severity=7)
  - A: 성범죄 무고 대응 방법 | B: 허위 성폭력 신고 대응 방법
  - 질문 공유 3개 (Jaccard 43%): 다르게, 사실과, 하나요

- **[sex-crime]** `sex-crime-dating-relationship-accusation` vs `sex-crime-false-accusation-defense` (severity=7)
  - A: 연인관계 성범죄 무고 대응법 | B: 성범죄 무고 대응 방법과 절차
  - 질문 공유 3개 (Jaccard 38%): 대응해야, 성범죄로, 하나요

- **[traffic-accident]** `insurance-claim-process-summary` vs `accident-settlement-process` (severity=7)
  - A: 교통사고 보험금 청구 절차 총정리 | B: 교통사고 발생 후 합의 절차와 방법
  - 질문 공유 3개 (Jaccard 43%): 교통사고, 되나요, 절차는

- **[unemployment]** `recommended-resignation-unemployment-benefit` vs `voluntary-resignation-benefit-eligible-cases` (severity=7)
  - A: 권고사직 당했을 때 실업급여 받는 법 | B: 자진 퇴사했는데 실업급여 받을 수 있는 경우
  - 질문 공유 3개 (Jaccard 38%): 받을, 실업급여를, 있나요

- **[unemployment]** `recommended-resignation-unemployment-benefit` vs `recommended-resignation-unemployment-benefit` (severity=7)
  - A: 권고사직 당했을 때 실업급여 받는 법 | B: 권고사직 실업급여 수급 자격
  - 질문 공유 3개 (Jaccard 43%): 받을, 실업급여를, 있나요

- **[unemployment]** `voluntary-resignation-benefit-eligible-cases` vs `recommended-resignation-unemployment-benefit` (severity=7)
  - A: 자진 퇴사했는데 실업급여 받을 수 있는 경우 | B: 권고사직 실업급여 수급 자격
  - 질문 공유 3개 (Jaccard 38%): 받을, 실업급여를, 있나요

## Cross-Domain Similar Pairs (top 30)

These pages span different domains but share many keywords. Usually OK if domain context differs.

- **divorce** `child-support-calculation-standard` (양육비 산정 기준표와 계산 방법) vs **child-support** `child-support-calculation-table` (양육비 산정 기준표와 계산 방법)
  - Shared words (4): 계산, 기준표와, 산정, 양육비

- **retirement** `retirement-pay-claim-where-to-start` (퇴직금 청구 어디부터 시작해야 하나) vs **child-support** `child-support-claim-where-to-start` (양육비 청구 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 청구, 하나

- **defamation** `defamation-victim-where-to-start` (명예훼손 피해 어디부터 시작해야 하나) vs **assault** `assault-victim-where-to-start` (폭행 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **defamation** `defamation-victim-where-to-start` (명예훼손 피해 어디부터 시작해야 하나) vs **stalking** `stalking-victim-where-to-start` (스토킹 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **defamation** `defamation-victim-where-to-start` (명예훼손 피해 어디부터 시작해야 하나) vs **fraud** `fraud-victim-where-to-start` (사기 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **defamation** `defamation-victim-where-to-start` (명예훼손 피해 어디부터 시작해야 하나) vs **digital-sex-crime** `digital-sex-crime-where-to-start` (디지털성범죄 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **assault** `assault-victim-where-to-start` (폭행 피해 어디부터 시작해야 하나) vs **stalking** `stalking-victim-where-to-start` (스토킹 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **assault** `assault-victim-where-to-start` (폭행 피해 어디부터 시작해야 하나) vs **fraud** `fraud-victim-where-to-start` (사기 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **assault** `assault-victim-where-to-start` (폭행 피해 어디부터 시작해야 하나) vs **digital-sex-crime** `digital-sex-crime-where-to-start` (디지털성범죄 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **stalking** `stalking-victim-where-to-start` (스토킹 피해 어디부터 시작해야 하나) vs **fraud** `fraud-victim-where-to-start` (사기 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **stalking** `stalking-victim-where-to-start` (스토킹 피해 어디부터 시작해야 하나) vs **digital-sex-crime** `digital-sex-crime-where-to-start` (디지털성범죄 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

- **drug-crime** `drug-charge-where-to-start` (마약 혐의 받으면 어디부터 해야 하나) vs **sex-crime** `accused-where-to-start` (성범죄 혐의 받으면 어디부터 해야 하나)
  - Shared words (4): 받으면, 어디부터, 하나, 혐의

- **drug-crime** `drug-charge-where-to-start` (마약 혐의 받으면 어디부터 해야 하나) vs **sex-crime** `accused-where-to-start` (성범죄 혐의 받으면 어디부터 해야 하나)
  - Shared words (4): 받으면, 어디부터, 하나, 혐의

- **fraud** `fraud-victim-where-to-start` (사기 피해 어디부터 시작해야 하나) vs **digital-sex-crime** `digital-sex-crime-where-to-start` (디지털성범죄 피해 어디부터 시작해야 하나)
  - Shared words (4): 시작해야, 어디부터, 피해, 하나

## OK: Different Perspectives (71 pairs)

These pairs were flagged by keyword overlap but target different perspectives (victim vs offender). No action needed.

- **[sex-crime]** `common-mistakes-when-accused` vs `sex-crime-common-mistakes` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `common-mistakes-when-accused` vs `common-mistakes-when-accused` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `sexual-assault-investigation-to-trial` vs `sexual-assault-investigation-to-trial` -- OK (다른 관점: 피해자 vs 가해자)
- **[assault]** `assault-accused-where-to-start` vs `assault-victim-where-to-start` -- OK (다른 관점: 피해자 vs 가해자)
- **[assault]** `assault-evidence-collection` vs `assault-evidence-collection-procedure` -- OK (낮은 위험)
- **[assault]** `assault-evidence-collection` vs `assault-immediate-evidence-steps` -- OK (낮은 위험)
- **[assault]** `assault-settlement-amount-process` vs `assault-settlement-amount-guide` -- OK (낮은 위험)
- **[assault]** `assault-evidence-checklist` vs `assault-evidence-collection-procedure` -- OK (낮은 위험)
- **[assault]** `assault-evidence-checklist` vs `assault-immediate-evidence-steps` -- OK (낮은 위험)
- **[assault]** `assault-charged-first-response` vs `assault-accusation-defense` -- OK (낮은 위험)
- **[child-sex-crime]** `preventing-secondary-harm-to-child` vs `parent-response-checklist` -- OK (낮은 위험)
- **[child-sex-crime]** `child-disclosed-abuse-where-to-start` vs `parent-response-checklist` -- OK (낮은 위험)
- **[defamation]** `truth-defamation-accused-response` vs `defamation-accused-response` -- OK (낮은 위험)
- **[defamation]** `truth-defamation-accused-response` vs `defamation-truth-still-guilty` -- OK (낮은 위험)
- **[defamation]** `truth-defamation-accused-response` vs `defamation-accused-response` -- OK (낮은 위험)
- **[defamation]** `legitimate-criticism-prosecution` vs `defamation-accused-where-to-start` -- OK (낮은 위험)
- **[defamation]** `defamation-accused-public-criticism` vs `defamation-accused-response` -- OK (낮은 위험)
- **[defamation]** `defamation-reverse-false-accusation` vs `defamation-accused-response` -- OK (낮은 위험)
- **[defamation]** `fact-vs-false-defamation` vs `public-interest-immunity` -- OK (낮은 위험)
- **[divorce]** `consensual-divorce-process` vs `consensual-divorce-timeline-docs` -- OK (낮은 위험)
- **[drug-crime]** `drug-investigation-response` vs `drug-use-investigation-response` -- OK (낮은 위험)
- **[drug-crime]** `positive-urine-test-response` vs `drug-use-investigation-response` -- OK (낮은 위험)
- **[drug-crime]** `drug-self-report-reduction` vs `first-offense-probation-conditions` -- OK (낮은 위험)
- **[drug-crime]** `drug-urine-positive-response` vs `drug-use-investigation-response` -- OK (낮은 위험)
- **[drug-crime]** `drug-urine-positive-response` vs `drug-crime-hair-test-positive-defense` -- OK (낮은 위험)
- **[drug-crime]** `drug-use-investigation-response` vs `drug-charge-where-to-start` -- OK (낮은 위험)
- **[drug-crime]** `drug-use-investigation-response` vs `positive-urine-test-response` -- OK (낮은 위험)
- **[drug-crime]** `drug-use-investigation-response` vs `positive-urine-test-response` -- OK (낮은 위험)
- **[dui]** `dui-license-revocation-appeal` vs `dui-administrative-license-hearing` -- OK (낮은 위험)
- **[dui]** `dui-victim-compensation-checklist` vs `dui-accident-victim-fault-dispute` -- OK (낮은 위험)
- **[fraud]** `investment-fraud-checklist` vs `investment-fraud-evidence-collection` -- OK (낮은 위험)
- **[fraud]** `fraud-accused-settlement-penalty` vs `fraud-penalty-settlement-reduction` -- OK (다른 관점: 피해자 vs 가해자)
- **[fraud]** `voice-phishing-immediate-5steps` vs `voice-phishing-immediate-response` -- OK (낮은 위험)
- **[fraud]** `voice-phishing-immediate-5steps` vs `voice-phishing-immediate-response` -- OK (낮은 위험)
- **[fraud]** `loan-default-vs-fraud-checklist` vs `fraud-debt-vs-crime-distinction` -- OK (낮은 위험)
- **[fraud]** `fraud-civil-lawsuit-procedure` vs `criminal-vs-civil-fraud-lawsuit` -- OK (낮은 위험)
- **[inheritance]** `inheritance-renunciation-process` vs `inheritance-renunciation-deadline` -- OK (낮은 위험)
- **[inheritance]** `limited-inheritance-acceptance-process` vs `inheritance-renunciation-deadline` -- OK (낮은 위험)
- **[inheritance]** `limited-inheritance-acceptance-process` vs `inheritance-renunciation-deadline` -- OK (낮은 위험)
- **[inheritance]** `inheritance-dispute-where-to-start` vs `inheritance-real-estate-valuation-dispute` -- OK (낮은 위험)
- **[jeonse]** `lease-renewal-rejection` vs `deposit-return-checklist` -- OK (낮은 위험)
- **[jeonse]** `landlord-no-contact-after-expiry` vs `deposit-return-checklist` -- OK (낮은 위험)
- **[jeonse-fraud]** `jeonse-fraud-report-procedure` vs `jeonse-fraud-deposit-priority-order` -- OK (낮은 위험)
- **[jeonse-fraud]** `jeonse-fraud-relief-timeline` vs `jeonse-fraud-deposit-priority-order` -- OK (낮은 위험)
- **[school-violence]** `school-violence-false-report-evidence` vs `victim-response-complete-checklist` -- OK (낮은 위험)
- **[school-violence]** `school-violence-where-to-start` vs `child-beaten-at-school-response` -- OK (낮은 위험)
- **[school-violence]** `school-violence-where-to-start` vs `school-violence-social-media-bullying` -- OK (낮은 위험)
- **[sex-crime]** `groping-accused-response` vs `sex-crime-false-accusation-defense` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `sexual-assault-accusation-defense` vs `common-mistakes-when-accused` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `sexual-assault-accusation-defense` vs `drinking-party-assault-response` -- OK (낮은 위험)
- **[sex-crime]** `false-sexual-assault-report-response` vs `sexual-violence-complaint-process` -- OK (낮은 위험)
- **[sex-crime]** `sexual-assault-report-to-trial` vs `sexual-assault-investigation-to-trial` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `common-mistakes-when-accused` vs `quasi-rape-charge-response` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `common-mistakes-when-accused` vs `accused-where-to-start` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `common-mistakes-when-accused` vs `accused-where-to-start` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `sex-crime-common-mistakes` vs `common-mistakes-when-accused` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `sexual-assault-investigation-to-trial` vs `drinking-party-assault-response` -- OK (낮은 위험)
- **[sex-crime]** `common-mistakes-when-accused` vs `accused-where-to-start` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `common-mistakes-when-accused` vs `accused-where-to-start` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `common-mistakes-when-accused` vs `sex-crime-settlement` -- OK (다른 관점: 피해자 vs 가해자)
- **[sex-crime]** `workplace-sexual-violence-response` vs `sexual-violence-complaint-process` -- OK (낮은 위험)
- **[sexual-harassment]** `workplace-harassment-where-to-start` vs `workplace-harassment-report-procedure` -- OK (낮은 위험)
- **[stalking]** `stalking-victim-checklist` vs `stalking-report-and-restraining-order` -- OK (낮은 위험)
- **[stalking]** `stalking-victim-checklist` vs `emergency-protective-measures` -- OK (낮은 위험)
- **[stalking]** `stalking-victim-checklist` vs `stalking-evidence-collection-faq` -- OK (낮은 위험)
- **[stalking]** `stalking-report-and-restraining-order` vs `stalking-victim-where-to-start` -- OK (낮은 위험)
- **[stalking]** `stalking-victim-where-to-start` vs `stalking-immediate-response` -- OK (낮은 위험)
- **[stalking]** `stalking-workplace-harassment-stalking` vs `ex-partner-contact-stalking-criteria` -- OK (낮은 위험)
- **[unemployment]** `unemployment-voluntary-quit-benefits` vs `recommended-resignation-unemployment-benefit` -- OK (낮은 위험)
- **[unemployment]** `unemployment-voluntary-quit-benefits` vs `voluntary-resignation-benefit-eligible-cases` -- OK (낮은 위험)
- **[unemployment]** `unemployment-voluntary-quit-benefits` vs `recommended-resignation-unemployment-benefit` -- OK (낮은 위험)
