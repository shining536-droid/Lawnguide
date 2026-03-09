# Claude Code 실행 프롬프트 (YOLO 모드)

이 프로젝트 루트에 있는 `easylaw-pipeline-design-v2.md` 설계서를 읽고,
아래 순서대로 구현해줘. 멈추지 말고 끝까지 진행해.

## 프로젝트 초기화

```
mkdir easylaw-scraper && cd easylaw-scraper
npm init -y
npm install cheerio node-fetch@2 typescript ts-node @types/node
```

## 수집 대상 6개 도메인

아래 6개를 순서대로 수집한다.
csmSeq는 이지법 URL에서 확인해야 함.
주택임대차(629)는 확인됨, 나머지는 이지법 사이트에서 자동으로 찾아야 함.

| 순서 | 도메인 ID | 이지법 콘텐츠명 | csmSeq |
|------|---------|------------|--------|
| 1 | jeonse | 주택임대차 | 629 |
| 2 | jeonse-fraud | 전세사기 피해자 지원 | 자동탐색 |
| 3 | sangga | 상가건물 임대차 | 자동탐색 |
| 4 | wage | 임금 | 자동탐색 |
| 5 | retirement | 퇴직급여제도 | 자동탐색 |
| 6 | dismissal | 해고근로자 | 자동탐색 |

csmSeq 자동탐색 방법:
이지법 카테고리 페이지(https://www.easylaw.go.kr/CSP/CsmSortRetrieveLst.laf?sortType=cate)에서
각 콘텐츠의 csmSeq를 찾거나,
직접 해당 콘텐츠 메인 페이지를 fetch해서 URL 파라미터에서 추출해.

## Step 0: 프로토타입 (csmSeq=629, 임차권등기명령 페이지)

1. PC 본문 파싱: https://www.easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=629&ccfNo=5&cciNo=2&cnpClsNo=1
2. 모바일 본문 파싱: https://m.easylaw.go.kr/MOB/CsmInfoRetrieve.laf?csmSeq=629
3. 관련법령 페이지 파싱: https://www.easylaw.go.kr/CSP/SysChartRetrievePLst.laf?csmSeq=629

파싱해서 추출할 것:
- 본문 텍스트 블록들
- 조건문 ("~한 경우", "~여부", "~경우에는")
- 법령 참조 (「법명」 제X조 제X항 패턴)
- 수치 데이터 (금액, 기간, 비율이 포함된 테이블/문장)
- 사이드바 목차 구조 (전체 페이지 URL 파라미터 맵)

셀렉터를 확정하고 config/selectors.json으로 저장해.
프로토타입 결과를 raw/629/prototype-5-2-1.json으로 저장해.

## Step 1: 전체 수집 (6개 도메인)

각 도메인별로:

### 1-A. 목차 수집
PC 사이드바 HTML에서 모든 하위 페이지 URL 파라미터를 추출
→ config/sitemap-{csmSeq}.json

### 1-B. 본문 수집
sitemap의 각 URL을 순회하며 PC 본문 파싱
- 2초 간격, 동시 요청 1개
- User-Agent: 'LegalHelper/1.0 (research; contact@bebeplan.kr)'
→ raw/{csmSeq}/{ccfNo}-{cciNo}-{cnpClsNo}.json

### 1-C. 관련법령 수집
각 도메인의 관련법령 페이지 파싱
→ raw/{csmSeq}/law-refs.json

### 1-D. 100문100답 수집 (있으면)
→ raw/{csmSeq}/qna.json

## Step 2: 정규화

각 도메인별로 raw 데이터를 정규화:

```typescript
interface NormalizedUnit {
  page_id: string;           // "629/5-2-1"
  title: string;             // "임차권등기명령 신청"
  breadcrumb: string[];      // ["임대차관계 종료", "보증금의 회수", "임차권등기명령 신청"]
  text_blocks: string[];     // 본문 텍스트 블록 배열
  conditions: string[];      // "~한 경우", "~여부" 등 조건문
  law_refs: LawRef[];        // {law_name, article, paragraph, url}
  amounts: AmountData[];     // 수치 데이터 (금액, 기간, 비율)
  procedures: string[];      // 절차/단계 설명
  source_url: string;
  fetched_at: string;
}
```

→ kb/{domain}/normalized_units.json

## Step 3: 법률 사실 추출

normalized_units에서 legal_facts를 추출:

```typescript
interface LegalFact {
  id: string;                // "F001"
  topic: string;             // "대항력_취득"
  statement: string;         // 한 문장 요약
  law_refs: string[];        // ["주택임대차보호법 제3조 제1항"]
  prerequisites: string[];   // 이 사실이 성립하기 위한 전제 조건
  exceptions?: string[];     // 예외
  source_pages: string[];    // 어떤 페이지에서 추출했는지
}
```

→ kb/{domain}/legal_facts.json

조건문 추출 패턴:
```
/(?:경우|때|경우에는)/g
/여부/g
/(?:있는|없는|않은|못한)\s*경우/g
/(?:이상|이하|초과|미만)/g
```

법령 참조 추출 패턴:
```
/「([^」]+)」\s*제(\d+)조(?:의(\d+))?(?:제(\d+)항)?/g
```

## Step 4: 수치 데이터 분리

각 도메인에서 금액/기간/비율 관련 수치를 별도 JSON으로 분리
→ kb/{domain}/amounts.json

## Step 5: 엔진 데이터 초안 생성 (주택임대차만)

주택임대차(jeonse) 도메인에 대해서만:

### questions.json
설계서의 질문 설계 원칙(섹션 5) 참고해서 8~12문항 생성

### branches.json
설계서의 분기 유형(섹션 7) 참고: TYPE_A ~ TYPE_OK

### results.json (초안)
각 유형별 결과 카드 초안 생성
- 현재 상태 한 줄
- 지금 할 일 3가지
- 챙길 자료
- 관련 제도
- 연결 (공공기관 + 전문가)
- 법적 근거

⚠️ results.json은 초안이므로 나중에 수동 검수 필요하다는 주석 포함

## 최종 출력 구조

```
easylaw-scraper/
├── config/
│   ├── targets.json
│   ├── selectors.json
│   ├── sitemap-629.json
│   ├── sitemap-{기타csmSeq}.json
│   ...
├── raw/
│   ├── 629/               # 주택임대차
│   ├── {csmSeq}/          # 전세사기
│   ├── {csmSeq}/          # 상가임대차
│   ├── {csmSeq}/          # 임금
│   ├── {csmSeq}/          # 퇴직급여
│   └── {csmSeq}/          # 해고근로자
├── kb/
│   ├── jeonse/
│   │   ├── normalized_units.json
│   │   ├── legal_facts.json
│   │   └── amounts.json
│   ├── jeonse-fraud/
│   ├── sangga/
│   ├── wage/
│   ├── retirement/
│   └── dismissal/
├── domains/
│   └── jeonse/             # 주택임대차만 엔진 데이터
│       ├── questions.json
│       ├── branches.json
│       ├── question_map.json
│       └── results.json    # ⚠️ 초안, 수동 검수 필요
├── scripts/
│   ├── 00-prototype.ts
│   ├── 01-discover-csmseq.ts
│   ├── 02-crawl-sitemap.ts
│   ├── 03-crawl-pages.ts
│   ├── 04-crawl-law-refs.ts
│   ├── 05-crawl-qna.ts
│   ├── 06-normalize.ts
│   ├── 07-extract-facts.ts
│   ├── 08-extract-amounts.ts
│   └── 09-build-engine.ts
└── utils/
    ├── fetcher.ts
    ├── parser.ts
    └── law-ref-extractor.ts
```

## 중요 규칙

1. 수집 속도: 반드시 2초 이상 간격, 동시 요청 1개
2. 에러 처리: 한 페이지 실패해도 멈추지 말고 다음 페이지로 진행. 실패 목록은 별도 기록
3. 각 Step 완료 후 콘솔에 요약 출력 (수집 페이지 수, 추출된 법률사실 수 등)
4. 모든 JSON 파일은 pretty-print (indent 2)
5. 스크립트는 개별 실행 가능하게 (npm run step0, npm run step1 등)

시작해.
