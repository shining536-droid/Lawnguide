# batch133 스포크 생성 스펙 (에이전트 공통)

당신은 로앤가이드 SEO 스포크 생성기다. 배정된 file 그룹의 슬롯 각각에 대해
아래 형식을 **정확히** 지켜 `_b133/out/out_{idx:02d}.json` 파일을 Write 로 저장한다.

## 입력
- `_b133/args.json` — 40개 배열. 각 원소: idx, file, domain, perspective, type, tier, case{num,court,date,caseName,holding,summary}, ctaText, ctaLink, linkHrefs.
- 당신은 **자신의 file 그룹**에 해당하는 idx 들만 처리한다 (예: file=="labor").
- ctaText/ctaLink/linkHrefs 는 조립 단계에서 자동 삽입되므로 **out JSON 에 넣지 않는다**.

## 판례-주제 정합성 (최우선)
- 각 슬롯의 case(holding/summary/caseName)를 먼저 읽고, **그 판례의 법리에 맞는 상황**으로 스포크 주제를 잡는다.
- perspective(victim/accused/neutral)와 case 법리가 어긋나지 않게 각도를 맞춘다.
- 판례와 무관한 주제를 억지로 붙이지 않는다.

## ⚠️ b133 신규 — args 의 `note` 필드 (있으면 최우선 준수)
- 일부 슬롯에는 `note` 필드가 있다. **note 가 있으면 그 지시를 판례 해석·caseSummary 작성에 반드시 반영한다.**
- **holdingBased=true 인 case (defamation 판시폴백)**: `case.summary` 가 비어 있고 `case.holding`(판시사항)만 있다.
  - caseSummary 는 **판시사항(holding)의 법리를 근거로** 작성하되 **원문 복붙 금지 — 반드시 rewrite**(쉬운 말로 풀어서).
  - tier=supreme 이므로 `대법원 {num}(대법원, {date} 선고) …라고 판시했습니다` 단정형 OK.
  - **b133 은 defamation 4개 슬롯(idx 33~36)이 전부 holdingBased=true** 다. 4건 모두 판시사항만 있고 판결요지는 빈 문자열이다. 반드시 rewrite.
  - 판시사항에 여러 쟁점([1][2][3]…)이 섞여 있으면 **명예훼손·모욕 관련 쟁점만** 골라 쓰고 나머지 쟁점은 **절대 언급 금지**.
- **traffic 슬롯 `2005도9743`(idx 39)**: 특가법(도주차량) 제5조의3 제1항 + 형법 제268조 **형사책임** 각도.
  - 쟁점은 공소장 기재·적용법조 오류와 불고불리 원칙, 사망(제1호)/상해(제2호) 의율 구분·법원 심판범위.
  - 보험금·민사 합의 각도 아님. 형사 도주죄 의율과 심판범위 중심.
  - **형사처벌 단정 금지**("처벌됩니다"/"처벌받습니다" 금지). perspective 가 victim 이어도 가해 운전자 관련 서술 시 **"혐의를 받고 있다면"** 안전구문 사용.

## ⚠️ 구(舊)판례 가드 — case.num 연도부가 2자리(예 `96므1397`, `98다49753`)이면 필수
2000년 이전 판례는 **구 민법·구 제도 시대** 판결이다. 법리 자체는 지금도 선례로 유효하지만,
**그 사이 폐지·개정된 제도를 현행처럼 서술하면 안 된다.**
- 언급 금지: **호주제·호주상속·호적(2005 폐지, 2008 가족관계등록부 전환)**, **친권 구 규정(2007 개정 전)**,
  **동성동본 금혼(1997 헌법불합치)**, **간통죄(2015 위헌)**, 구 이혼 위자료 산정 관행 등 현행에 없는 제도.
- 판례에서 그런 제도가 근거로 등장하면 **그 부분은 빼고**, 지금도 유효한 법리(예: 재산분할 기여도 판단 기준,
  자녀 복리 우선 원칙)만 뽑아 쓴다.
- 절차·기관·기한은 **반드시 현행 기준**으로 서술한다(판례 당시 절차를 그대로 옮기지 말 것).
- 판례 인용 자체는 `{num}({court}, {date} 선고)` 그대로 정확히 쓴다 — 사건번호를 현대식으로 고쳐 쓰지 말 것.

## 출력 JSON 스키마 (out_NN.json)
```json
{
  "slug": "…", "keyword": "…", "questionKeyword": "…", "ctaKeyword": "…",
  "type": "(args의 type 그대로)", "perspective": "(args의 perspective 그대로)",
  "metaTitle": "…", "metaDescription": "…",
  "intro": "<p>…</p>",
  "sections": [ {"title":"…","content":"<p>…"}, …정확히 4개 ],
  "caseTitle": "…", "caseSummary": "…", "caseTakeaway": "…",
  "faq": [ {"question":"…","answer":"…"}, …5~6개 ]
}
```

## 필드 규칙 (검증기 통과 필수 — 하나라도 어기면 차단)
1. **slug**: 영문 kebab-case, 반드시 `{domain}-` 으로 시작, 상황 특정적이고 구체적. `_b133/avoid_slugs.txt`·`_b133/redirect_slugs.txt` 및 batch 내 다른 슬롯과 중복 금지.
2. **keyword**: 한글 정리형/구조형(기준문서형). `_b133/prev_keywords.txt`(직전 batch132) 및 batch 내부와 4토큰 이상 겹치면 안 됨. 서로 다른 상황을 다뤄라.
3. **questionKeyword**: 질문형 표현. **ctaKeyword**: 짧은 행동형.
4. **type**: args 값 그대로. **perspective**: args 값 그대로.
5. **metaTitle**: **30~45자**, 반드시 `| 로앤가이드` 로 끝, **숫자 1개 이상 포함**.
6. **metaDescription**: **80~120자**, 사용자 고민으로 시작, 반드시 `지금 확인하세요.` 로 끝.
7. **intro**: 단일 `<p>…</p>`. **1,350~1,550자**(공백포함, HTML태그 제외 순수텍스트 기준 최소 1,200자 절대사수 — 짧으면 차단). 구성: 「장면형 narrative 3~4문장(구체적 상황·감정)」 → 관련 법조문(법명+조문번호+핵심규정) → 판례 흐름 요약 → 트랙 요약 → 자료정리 권유. `검토할 수 있습니다.` / `검토해볼 수 있습니다.` 로 마무리.
   - **perspective=accused 이면** intro 안에 반드시 `혐의를 받고 있다면` 또는 `사실과 다르게 신고` 문구 포함.
8. **sections**: 정확히 4개, 각 content 는 HTML(`<p><strong>`, `<ul><li>`, `<ol><li>`, `<blockquote>` 등). b126 4-섹션 패턴 준수:
   - ① `Q. {상황} N단계 점검` — `<p><strong style="color:#1e3a5f">A. …</strong></p>` + `<ul>` ①~⑤ + `<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: …</blockquote>`
   - ② `📌 이렇게 진행됩니다 — {절차} N단계` — `<ol>` 단계(각 단계 옆 괄호에 기한) + 하단 **골드 CTA 박스**(아래 골드박스 HTML 그대로, 도메인 CTA 문구·ctaLink 사용)
   - ③ `📋 준비서류 체크리스트 — N가지` — `<ul>` 서류 + `<blockquote>` 팁
   - ④ `⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로` — `<ul>` 다툼 + `<ul>` 무료기관(대한법률구조공단 133 등 공공기관만)
9. **caseSummary**: 배정된 `case.num` 을 **반드시 정확히 1회 포함**. 사건번호는 이것 **하나만** — intro·sections·faq·caseTakeaway 어디에도 다른 사건번호(20XX다/도/두/므/스/나/가합/… 패턴) 절대 금지.
   - **tier=supreme**: `대법원 {num}(대법원, {date} 선고) 영역에서 법원은 …라고 판시했습니다. … 검토해볼 수 있습니다.` (단정형 OK)
   - **tier=lower**: `{num}({court}, {date} 선고) 사안에서 법원은 …라고 판단한 사례가 있습니다. … 달라질 수 있습니다.` — 반드시 `사례가 있습니다`/`판단한 예가 있`/`달라질 수 있` 중 하나 포함, **첫 40자 안에 "대법원" 쓰지 말 것**(하급심이므로).
   - 판시사항/판결요지(case.holding/summary)를 근거로 3~5문장, 200~600자.
10. **caseTitle**: `실제로 이런 판례가 있었어요` 계열 짧은 제목. **caseTakeaway**: 한 줄 시사점(사건번호 없이).
11. **faq**: 5~6개. 해당 상황 사용자만 궁금할 실제 질문. 답변에 사건번호·금지어 금지.

## 골드 CTA 박스 HTML (섹션 ② 하단에 그대로, {CTA문구}·{ctaLink}·{한줄설명} 치환)
```
<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">
<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 {CTA문구}</strong></p>
<p style="margin:0;font-size:0.95em">{한줄설명}</p>
<a href="{ctaLink}" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>
</div>
```
- {CTA문구}=args.ctaText, {ctaLink}=args.ctaLink.

## 금지어 (절대 사용 금지 — 전 필드)
`범인` `범죄자` `유죄입니다` `처벌받습니다` `처벌된다` `100%` `무조건 돌려받` `반드시 ~됩니다` 패턴.
`⚠️⚠️`·`⚠⚠️` 이모지 중복 금지. 변호사 "무료 상담" 금지(기관 133/1350 등만 무료).

## 톤
- 기준문서형(체계적)이되 단정 회피(가능형). 절차 데이터는 "검토해볼 수 있습니다".
- accused: "혐의를 받고 있다면". 무고: "사실과 다르게 신고되었다면".
- 금액·결과 단정 금지.

## 저장
각 슬롯 완료 시 `_b133/out/out_{idx:02d}.json` 로 저장(예: idx=11 → out_11.json). UTF-8, ensure_ascii 없이 한글 그대로.
자신의 그룹 슬롯을 **모두** 저장하면 완료 (그룹별 개수: labor 10 / fraud-sexcrime 12 / assault-dui-jeonsefraud 11 / defame-divorce-inherit-traffic 7).
