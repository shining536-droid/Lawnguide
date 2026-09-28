# B. 블로그 CTA 추적용 UTM 규칙 설계

작성 2026-09-28 · 설계만, 코드 미수정

---

## 1. 현재 CTA 자동삽입 규칙 (코드 실측)

### 네이버 — `publish_lawnguide.py`

| 항목 | 실제 구현 | 위치 |
|---|---|---|
| 목적지 | `https://www.lawnguide.co.kr/chat?domain={domain}` 고정 | `CTA_BASE_URL` L50, `get_cta_url()` L596 |
| 문구 | `DOMAIN_CTA_TEXT` 30개 도메인 딕셔너리 + `CTA_DEFAULT` 폴백 | L561~593 |
| 삽입 횟수 | **본문 끝 1회만** | `type_single_cta()` L614 |
| 삽입 위치 | 팁카드 이미지 업로드 **직후**, 발행 패널 열기 직전 | L1423 |
| 삽입 빈도 | 파일명 MD5 해시 기반 deterministic 50% | `should_insert_cta()` L603 |
| 형태 | 구분선 → 도메인 문구 → `👉 내 상황 AI로 무료 정리하기 → {url}` 평문 URL | L621~626 |
| OG 링크카드 | **삽입되지 않음** (함수 L698 정의되어 있으나 호출부 없음) | — |

### 티스토리 — `publish_tistory.py`
- 목적지·문구는 MD 본문에 직접 작성 (`check_blog_length.py` 규칙 5로 강제)
- **추가로** `insert_cta_link()` OG 카드가 L497 에서 실제 호출됨 → 네이버와 반대

### 사이트 내부 (`/guide/{domain}/{slug}`)
| 위치 | 목적지 | GA4 |
|---|---|---|
| 중간 CTA | `/diagnosis/{domain}` | `cta_click` · `cta_location=guide_mid` · `cta_type=mid_diagnosis` |
| 하단 CTA | `page.cta.link` (스포크 데이터값) | `cta_click` · `cta_location=guide_bottom` · `cta_type=bottom_diagnosis` |

---

## 2. 현재 추적이 약한 정확한 이유

1. **목적지 URL이 전 글 동일** — `?domain=wage` 뿐. GA4 에서 `/chat?domain=wage` 랜딩 100건을 봐도 그게 1,000개 중 어느 글에서 왔는지 알 수 없다.
2. **유입원 구분 불가** — 네이버 블로그·티스토리·네이버 검색·다이렉트가 모두 `naver.com` referrer 또는 `(direct)` 로 섞인다. 티스토리는 `tistory.com` referrer 가 잡히지만 네이버 블로그는 모바일 앱 인앱 브라우저에서 referrer 가 누락되는 비율이 높다.
3. **`chat_start` 이벤트에 유입 맥락 파라미터 없음** — `page_domain` 하나만 보낸다 (`ChatStartTracker.tsx` L15).
4. **문서·코드 불일치** — CLAUDE.md 는 "OG카드 자동 삽입" 이라 적혀 있으나 네이버 경로에서는 호출되지 않는다. 따라서 "OG 카드 클릭이 안 팔린다"는 판단 자체가 성립하지 않는 상태.
5. **A/B 불가** — 문구는 도메인당 1개 고정이므로 문구 성능 비교가 구조적으로 불가능.

---

## 3. UTM 규칙 (확정안)

```
utm_source   = naverblog | tistory          (채널)
utm_medium   = cta                           (고정)
utm_campaign = {domain}                      (예: wage, jeonse-fraud)
utm_content   = {placement}_{variant}        (예: body_end_a)
utm_term      = {slug}                       (frontmatter 파일명 확장자 제거)
```

### `utm_content` placement 값 — 사용자 제안안 대신 **코드 실측에 맞춘 값**

제안하신 `middle / bottom / final` 은 현재 구현과 맞지 않습니다. 네이버는 CTA 가 1회뿐이고 위치도 항상 본문 끝입니다. 실제로 존재하는 지점만 값으로 둡니다.

| placement | 채널 | 실제 지점 | 지금 존재? |
|---|---|---|---|
| `body_end` | 네이버·티스토리 | 본문 마지막 평문 CTA | ✅ |
| `oglink` | 티스토리 | OG 링크카드 | ✅ |
| `body_mid` | 네이버·티스토리 | Tip 2와 Tip 3 사이 | ❌ 신설 필요 |

`_a` / `_b` variant suffix 는 CTA 문구 2안(CLAUDE.md 도메인별 CTA 문구표에 이미 1안·2안이 있음) A/B 용. 1단계에서는 `_a` 고정으로 두고 자리만 확보.

### `utm_term` 를 slug 로 두는 이유
- 블로그 제목은 한글이라 URL 인코딩되면 GA4 리포트에서 읽기 어렵다.
- slug 는 `content/blog/{slug}-blog.md` 파일명에서 그대로 나오고, 스포크 slug 와 네이밍 규칙이 같아 조인이 된다.
- `-blog` 접미사는 제거해 티스토리/스포크와 키가 맞게 한다.

### 완성 예시
```
https://www.lawnguide.co.kr/chat?domain=wage
  &utm_source=naverblog&utm_medium=cta&utm_campaign=wage
  &utm_content=body_end_a&utm_term=wage-overtime-unpaid-no-record
```

---

## 4. 적용 예시 10개

| # | 채널 | 도메인 | 글 유형 | 목적지 | 최종 URL |
|---|---|---|---|---|---|
| 1 | naverblog | wage | 질문형 | /chat | `/chat?domain=wage&utm_source=naverblog&utm_medium=cta&utm_campaign=wage&utm_content=body_end_a&utm_term=wage-overtime-unpaid-no-record` |
| 2 | naverblog | unemployment | 질문형 | /chat | `/chat?domain=unemployment&utm_source=naverblog&utm_medium=cta&utm_campaign=unemployment&utm_content=body_end_a&utm_term=unemployment-contract-expiry-eligible` |
| 3 | naverblog | dismissal | 상황형 | /chat | `/chat?domain=dismissal&utm_source=naverblog&utm_medium=cta&utm_campaign=dismissal&utm_content=body_end_a&utm_term=dismissal-pip-impossible-target-low-rating` |
| 4 | naverblog | divorce | 절차형 | 대표 스포크 | `/guide/divorce/divorce-agreement-documents-track?utm_source=naverblog&utm_medium=cta&utm_campaign=divorce&utm_content=body_end_a&utm_term=divorce-agreement-what-documents` |
| 5 | naverblog | jeonse-fraud | 상황형 | /chat | `/chat?domain=jeonse-fraud&utm_source=naverblog&utm_medium=cta&utm_campaign=jeonse-fraud&utm_content=body_end_a&utm_term=jeonse-fraud-house-fire-deposit-recovery` |
| 6 | naverblog | fraud | 넓은 정리형 | 허브 | `/guide/fraud?utm_source=naverblog&utm_medium=cta&utm_campaign=fraud&utm_content=body_end_a&utm_term=fraud-types-overview` |
| 7 | naverblog | traffic-accident | 비교형 | /chat | `/chat?domain=traffic-accident&utm_source=naverblog&utm_medium=cta&utm_campaign=traffic-accident&utm_content=body_end_a&utm_term=traffic-accident-settlement-too-low` |
| 8 | tistory | retirement | 절차형 | 대표 스포크 | `/guide/retirement/retirement-pay-calculation-track?utm_source=tistory&utm_medium=cta&utm_campaign=retirement&utm_content=body_end_a&utm_term=retirement-pay-how-to-calculate` |
| 9 | tistory | defamation | 질문형 | /chat | `/chat?domain=defamation&utm_source=tistory&utm_medium=cta&utm_campaign=defamation&utm_content=oglink_a&utm_term=defamation-medical-malpractice-anonymous-blog-doctor` |
| 10 | naverblog | stalking | 상황형 | /chat | `/chat?domain=stalking&utm_source=naverblog&utm_medium=cta&utm_campaign=stalking&utm_content=body_end_a&utm_term=stalking-coworker-after-work-following` |

---

## 5. 구현 설계

### 5-1. `publish_lawnguide.py` — 함수 시그니처 변경

```python
# 현재
def get_cta_url(domain: str = "") -> str:
    if domain:
        return f"{CTA_BASE_URL}?domain={domain}"
    return CTA_BASE_URL

# 변경안
from urllib.parse import urlencode

UTM_SOURCE = "naverblog"          # publish_tistory.py 는 "tistory"
SITE_BASE  = "https://www.lawnguide.co.kr"

def cta_slug(filename: str) -> str:
    """content/blog/xxx-blog.md → xxx"""
    s = filename.rsplit('/', 1)[-1]
    for suf in ('-blog.md', '.md'):
        if s.endswith(suf):
            s = s[: -len(suf)]
    return s

def get_cta_url(domain: str = "", filename: str = "",
                placement: str = "body_end", variant: str = "a",
                dest_path: str = "") -> str:
    """도메인별 딥링크 CTA URL + UTM.
    dest_path 미지정 시 /chat?domain= (기존 동작 유지)."""
    params = {}
    if dest_path:
        base = SITE_BASE + dest_path
    else:
        base = CTA_BASE_URL
        if domain:
            params['domain'] = domain
    params.update({
        'utm_source':   UTM_SOURCE,
        'utm_medium':   'cta',
        'utm_campaign': domain or 'unknown',
        'utm_content':  f'{placement}_{variant}',
        'utm_term':     cta_slug(filename) if filename else 'unknown',
    })
    return f'{base}?{urlencode(params)}'
```

호출부 2곳만 인자 추가:
- `type_single_cta(page, domain)` → `type_single_cta(page, domain, filename, placement='body_end')`
- L1424 `await type_single_cta(page, domain=post_domain)` → `filename=post['filename']` 추가

### 5-2. 글 유형별 목적지 분기 — `dest_path` 결정 로직

CLAUDE.md 의 4분기 표를 코드로 옮깁니다. 판정 입력은 **frontmatter title + length_category**.

```python
HUB_DOMAINS = {...}              # /guide/{domain} 허브 존재 도메인
REP_SPOKE = {                    # 도메인별 대표 스포크 (A 감사 리포트 §4에서 확정)
    'divorce': '/guide/divorce/divorce-agreement-documents-track',
    ...
}

def pick_dest(title: str, domain: str, length_category: str) -> str:
    if any(k in title for k in ('총정리', '완벽', '유형', '한눈에', '비교표')):
        return f'/guide/{domain}'                    # 넓은 정리형 → 허브
    if any(k in title for k in ('절차', '서류', '준비물', '체크리스트', '방법', '어떻게')):
        return REP_SPOKE.get(domain, '')             # 절차형 → 대표 스포크
    return ''                                        # 질문형·비교형 → /chat (기본)
```

**주의**: `REP_SPOKE` 는 A 감사에서 확정한 대표 스포크만 넣습니다. 미확정 도메인은 빈 값 → `/chat` 폴백. 대표 스포크가 나중에 merge 대상이 되면 이 표도 같이 고쳐야 하므로 A 조치와 순서 의존이 있습니다.

### 5-3. GA4 쪽 수신 — 여기가 실제 병목

UTM 만 붙여도 `utm_source`/`medium`/`campaign` 은 GA4 세션 소스/매체/캠페인에 자동 들어갑니다. 그런데 **`utm_content`·`utm_term` 은 GA4 표준 리포트에 기본 차원이 없습니다.** 다음 중 하나가 반드시 같이 가야 추적이 실제로 됩니다.

**옵션 1 (권장, 코드 1파일)** — `ChatStartTracker.tsx` 에서 URL 파라미터를 읽어 이벤트 파라미터로 동봉:

```tsx
const q = new URLSearchParams(window.location.search);
window.gtag('event', 'chat_start', {
  page_domain: domain || 'unknown',
  cta_source:    q.get('utm_source')   ?? '(none)',
  cta_campaign:  q.get('utm_campaign') ?? '(none)',
  cta_placement: q.get('utm_content')  ?? '(none)',
  cta_post:      q.get('utm_term')     ?? '(none)',
});
```
+ GA4 관리 화면에서 `cta_source`/`cta_campaign`/`cta_placement`/`cta_post` 를 **맞춤 측정기준(이벤트 범위)** 으로 등록. 등록 없이는 파라미터가 수집만 되고 리포트에 뜨지 않습니다.

**옵션 2** — GA4 탐색분석에서 `페이지 경로 + 쿼리 문자열` 차원으로 직접 쪼갠다. 등록 불필요하지만 문자열 파싱을 매번 손으로 해야 하고 `/chat` 의 `robots: index:false` 와 무관하게 URL 이 길어 가독성이 나쁩니다. 임시용.

**PII 주의**: `utm_term` 은 우리가 만든 slug 뿐이므로 PII 아님. 기존 `ANALYTICS_EVENTS.md` 의 PII 차단 원칙(사용자 입력 미전송)과 충돌하지 않습니다.

### 5-4. 내부링크에는 UTM 금지 — 반드시 지켜야 하는 제약

`/guide` → `/diagnosis`, `/guide` → `/chat` 같은 **사이트 내부 이동에 UTM 을 붙이면 GA4 세션이 끊기고 기존 유입원이 자기참조로 덮어써집니다.** 내부 CTA 는 지금처럼 `cta_click` 이벤트(`cta_location`)로만 측정합니다. UTM 은 **외부 채널(네이버·티스토리) → 사이트** 구간 전용입니다.

---

## 6. CLAUDE.md 반영안 (추가할 문단, 그대로 붙여넣기 가능)

`### 블로그 CTA 삽입 위치` 아래에 신설:

```markdown
### CTA UTM 추적 규칙 (2026-09-28 신설)

외부 채널(네이버·티스토리) → 사이트 유입 CTA URL 에만 UTM 을 붙인다.
사이트 내부 링크(/guide → /chat, /guide → /diagnosis)에는 절대 붙이지 않는다
(GA4 세션 자기참조 덮어쓰기 발생).

| 파라미터 | 값 | 비고 |
|---|---|---|
| utm_source | naverblog / tistory | 채널 |
| utm_medium | cta | 고정 |
| utm_campaign | {domain} | 예: wage, jeonse-fraud |
| utm_content | {placement}_{variant} | placement=body_end / oglink / body_mid, variant=a/b |
| utm_term | {slug} | content/blog/{slug}-blog.md 의 slug (-blog 제거) |

- 생성은 publish 스크립트의 get_cta_url() 이 담당. MD 본문에 UTM 을 직접 쓰지 않는다.
- placement 는 실제 삽입 지점만 사용한다. 현재 네이버는 body_end 1회뿐이므로
  middle/final 같은 미존재 값을 쓰지 않는다.
- 목적지 분기는 기존 "글 유형별 CTA 목적지 분기" 표를 따르고, 대표 스포크는
  카니발 감사에서 확정된 대표 slug 만 사용한다.
- GA4 수신: ChatStartTracker 가 utm_* 를 읽어 chat_start 이벤트 파라미터
  (cta_source/cta_campaign/cta_placement/cta_post)로 동봉. GA4 맞춤 측정기준
  등록이 선행돼야 리포트에 나타난다.
```

---

## 7. 바로 적용 가능 여부

| 작업 | 난이도 | 즉시 가능 | 비고 |
|---|---|---|---|
| `get_cta_url()` UTM 부착 | 낮음 | ✅ | 20줄. 기존 인자 기본값 유지로 하위호환 |
| `type_single_cta` 호출부 filename 전달 | 낮음 | ✅ | 1줄 |
| `publish_tistory.py` 동일 적용 (`UTM_SOURCE='tistory'`) | 낮음 | ✅ | |
| `ChatStartTracker` utm 수신 | 낮음 | ✅ | 빌드 영향 없음 |
| GA4 맞춤 측정기준 4개 등록 | — | ❌ | **사용자 수동 작업** (GA4 콘솔) |
| 목적지 분기 (`pick_dest`) | 중간 | ⚠️ | A 감사 대표 스포크 확정 후 |
| `body_mid` placement 신설 | 중간 | ⚠️ | 네이버 CTA 2회로 늘리는 것 = 5/15 폭락 원인으로 의심된 "외부 CTA 시그널" 증가. **메인 노출 회복 확인 전에는 보류 권장** |

**핵심 주의**: UTM 부착은 네이버 본문에 들어가는 URL 문자열을 약 120자 길게 만듭니다. 평문 URL 이 길어지면 모바일에서 줄바꿈이 지저분해지고, 네이버 자동 링크 변환이 URL 끝을 잘라먹는 사례가 있습니다. → **1차 적용 시 파라미터를 `utm_source`/`utm_campaign`/`utm_term` 3개로 축약하고(medium·content는 채널·위치가 현재 각 1개뿐이라 정보량 0), 소수 글로 실제 링크가 온전히 걸리는지 확인 후 확장**하는 것을 권합니다.
