"""Validate Naver blog and Tistory content against CLAUDE.md rules.

CLAUDE.md 블로그/티스토리 필수 규칙:
  1. 본문 1,500~1,800자 (순수 본문 기준)
  2. 공감 도입 150~200자 + 공감 어미
  3. Tip 3개 × 4 서브섹션 (왜 중요한가요?/쉽게 설명하면/바로 할 일/흔한 실수)
  4. 판례 1개 + 사건번호가 kb/{domain}/cases.json 에 실제 존재
  5. CTA
     - 네이버 블로그: 본문에 CTA 텍스트 없음 (publish 스크립트 자동 삽입)
     - 티스토리: 본문 하단에 도메인별 CTA 1안 + 공식 URL

Usage:
  python check_blog_length.py                 # 오늘 날짜 기준 전체 검사
  python check_blog_length.py 2026-04-21      # 특정 날짜
  python check_blog_length.py --all           # content/blog + content/tistory 전체
  python check_blog_length.py --strict        # 위반 시 exit 1 (CI/publish 게이팅)
  python check_blog_length.py --files <path>* # 특정 파일만 검사

Programmatic use (publish 스크립트용):
  from check_blog_length import validate_files
  ok, summary = validate_files([Path('content/blog/foo.md'), ...])
  if not ok: raise SystemExit(summary)
"""

from __future__ import annotations

import glob
import json
import re
import sys
from datetime import date
from pathlib import Path
from typing import Iterable, NamedTuple

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

MIN_CHARS = 1500           # 하한: 미만 시 차단
RECOMMENDED_MIN = 1700     # 권장 하한
RECOMMENDED_MAX = 1800     # 권장 상한
MAX_CHARS = 2200           # 상한: 초과 시 경고
INTRO_MIN_CHARS = 100   # 목표 150~200, 하한 100
TIP_MIN_CHARS = 300     # 목표 400~450, 하한 300

FRONTMATTER_RE = re.compile(r"^---\n.*?\n---\n", re.DOTALL)
MARKDOWN_SYMBOLS_RE = re.compile(r"[#*`\[\]()\-=>|_!]")
WHITESPACE_RE = re.compile(r"\s+")
DATE_RE = re.compile(r'^date:\s*"([^"]+)"', re.MULTILINE)
DOMAIN_RE = re.compile(r'^domain:\s*"([^"]+)"', re.MULTILINE)
FIRST_TIP_RE = re.compile(r"💡\s*\*?\*?\s*Tip", re.IGNORECASE)
TIP_SPLIT_RE = re.compile(r"(?=💡\s*\*?\*?\s*Tip\s*\d+\.?)", re.IGNORECASE)
EMPATHY_HOOK_RE = re.compile(
    r"(죠[.\n\s!?]|이시죠|하실지|드시죠|시겠죠|어렵죠|답답|막막|걱정|고민|속상|"
    r"힘드시|당황|난감|막상|갑자기|어느\s*날|놓치|헤매|혼란|불안|무섭|떨리|"
    r"나요\?|까요\?|아실\s*거예요|이실\s*거예요|당연합니다|~시죠|되시죠)"
)
CASE_NUMBER_RE = re.compile(
    r"\b(20\d{2}(?:다|도|두|스|므|모|노|고합|구합|허|드|누|누라|하|마|재)(?:\d+))\b"
)
BLOG_SUBSECTIONS = [
    ("왜 중요", r"왜\s*중요|중요한가요"),
    ("쉽게 설명", r"쉽게\s*설명|쉽게\s*풀어|쉬운\s*설명"),
    ("바로 할 일", r"바로\s*할\s*일|바로할일|지금\s*할\s*일"),
    ("흔한 실수", r"흔한\s*실수|자주\s*하는\s*실수"),
]
TISTORY_SUBSECTIONS = [
    ("바로 할 일", r"바로\s*할\s*일|바로할일|지금\s*할\s*일"),
    ("흔한 실수", r"흔한\s*실수|자주\s*하는\s*실수"),
]

# CLAUDE.md 도메인별 CTA 문구표 (1안)
CTA_TABLE: dict[str, tuple[str, str]] = {
    "unemployment": ("실업급여 받을 수 있는지 AI로 점검하기", "/chat?domain=unemployment"),
    "wage": ("임금체불 대응 순서, AI로 바로 정리하기", "/chat?domain=wage"),
    "divorce": ("협의이혼 준비서류, AI로 정리하기", "/chat?domain=divorce"),
    "child-support": ("양육비 산정기준표, AI로 계산해보기", "/chat?domain=child-support"),
    "inheritance": ("한정승인 필요서류, AI로 정리하기", "/chat?domain=inheritance"),
    "fraud": ("사기 고소 전 준비자료, AI로 체크하기", "/chat?domain=fraud"),
    "traffic-accident": ("교통사고 합의 전 체크리스트, AI로 정리하기", "/chat?domain=traffic-accident"),
    "dui": ("음주운전 행정심판 준비서류, AI로 체크하기", "/chat?domain=dui"),
    "stalking": ("스토킹 고소 대응 순서, AI로 점검하기", "/chat?domain=stalking"),
    "defamation": ("명예훼손 고소당했을 때 대응, AI로 정리하기", "/chat?domain=defamation"),
    "jeonse": ("전세보증금 반환 절차, AI로 정리하기", "/chat?domain=jeonse"),
    "jeonse-fraud": ("전세사기 피해 대응 순서, AI로 정리하기", "/chat?domain=jeonse-fraud"),
    "dismissal": ("부당해고 구제신청 순서, AI로 정리하기", "/chat?domain=dismissal"),
    "retirement": ("퇴직금 계산과 청구 절차, AI로 정리하기", "/chat?domain=retirement"),
    "rehabilitation": ("개인회생 신청 자격, AI로 점검하기", "/chat?domain=rehabilitation"),
    "bankruptcy": ("파산 면책 가능성, AI로 점검하기", "/chat?domain=bankruptcy"),
    "assault": ("폭행 증거 수집 순서, AI로 정리하기", "/chat?domain=assault"),
    "sex-crime": ("성범죄 피해 대응 순서, AI로 정리하기", "/chat?domain=sex-crime"),
}

KB_ROOT = Path("kb")
CONTENT_BLOG_DIR = Path("content/blog")
CONTENT_TISTORY_DIR = Path("content/tistory")

# ── 기발행 슬러그 레지스트리 ───────────────────────────
# publish_lawnguide.py / publish_tistory.py 의 results JSON 을 스캔해
# 같은 filename 이 이미 발행 처리된 적 있으면 차단 (덮어쓰기 → 발행스킵 사고 방지)
PUBLISHED_REGISTRY: dict[str, str] | None = None  # filename → scheduled_date


def _load_published_registry() -> dict[str, str]:
    global PUBLISHED_REGISTRY
    if PUBLISHED_REGISTRY is not None:
        return PUBLISHED_REGISTRY
    registry: dict[str, str] = {}
    patterns = [
        "publish_lawnguide_results_*.json",
        "publish_tistory_lawnguide_results_*.json",
    ]
    for pat in patterns:
        for rf in glob.glob(pat):
            try:
                with open(rf, "r", encoding="utf-8") as f:
                    data = json.load(f)
            except Exception:
                continue
            for item in data:
                if item.get("status") != "published":
                    continue
                fn = item.get("filename", "")
                if not fn:
                    continue
                sched = str(item.get("scheduled_time", ""))[:10] or "unknown"
                # 가장 오래된 발행일 우선 (동일 filename 다수 결과 중 첫 발행)
                if fn not in registry or sched < registry[fn]:
                    registry[fn] = sched
    PUBLISHED_REGISTRY = registry
    return registry

# ── 중복 제목 체크용 ────────────────────────────────────
TITLE_RE = re.compile(r'^title:\s*"([^"]+)"', re.MULTILINE)
TITLE_KEYWORD_RE = re.compile(r"[가-힣]{2,}")
# 일반 동사 어미·조사 — 접미형으로 잘라 stem 추출
KOREAN_ENDINGS = (
    "했는데요", "했는데", "했어요", "합니다", "습니다", "인가요", "은가요",
    "한가요", "하는", "하면", "해야", "했을", "인지", "인데", "없나요",
    "있나요", "받나요", "되나요", "하나요", "나요", "까요", "어요", "예요",
    "이에요", "이죠", "된다", "한다", "있다", "없다", "이다", "이고", "하고",
    "부터", "까지", "보다", "처럼", "에서", "에게", "으로", "로서", "으로",
    "이나", "이든", "인가", "한", "할", "한", "은", "는", "이", "가", "을",
    "를", "과", "와", "에", "도", "만", "도", "의",
)

# ── 톤 체크 ─────────────────────────────────────────────
FORMAL_ENDING_RE = re.compile(
    r"(입니다[.\s]|됩니다[.\s]|합니다[.\s]|것이다[.\s]|한다[.\s]|있다[.\s]|"
    r"없다[.\s]|된다[.\s]|이다[.\s]|라고\s*본다|라\s*할\s*것이다|라\s*하겠다)"
)
INFORMAL_ENDING_RE = re.compile(
    r"(해요[.\s!?]|돼요[.\s!?]|있어요[.\s!?]|없어요[.\s!?]|세요[.\s!?]|네요[.\s!?]|"
    r"예요[.\s!?]|이에요[.\s!?]|에요[.\s!?]|거예요[.\s!?]|드려요[.\s!?]|봐요[.\s!?]|"
    r"드세요[.\s!?]|가요[.\s!?]|와요[.\s!?]|이죠[.\s!?]|이시죠[.\s!?]|되시죠[.\s!?])"
)
FORMAL_WARN_THRESHOLD = 0.5  # 문어체 비율이 이 이상이면 경고

# ── 가해자/무고 표현 체크 ───────────────────────────────
FORBIDDEN_VERDICT_WORDS = [
    ("범인", r"\b범인\b"),
    ("범죄자", r"\b범죄자\b"),
    ("유죄입니다", r"유죄입니다"),
    ("유죄다", r"유죄다[.\s]"),
    ("처벌받습니다", r"처벌받습니다"),
    ("처벌된다", r"처벌된다[.\s]"),
    ("처벌받을\\s*것입니다", r"처벌받을\s*것입니다"),
]
ACCUSED_REQUIRED_PATTERNS = [
    r"혐의를\s*받고\s*있다면",
    r"해당할\s*소지가\s*있",
    r"해당할\s*가능성이\s*있",
    r"처벌\s*받을\s*소지",
    r"문제가\s*될\s*소지",
]
MUGO_REQUIRED_PATTERNS = [
    r"사실과\s*다르게\s*신고",
    r"허위로\s*신고",
    r"무고",
]
CATEGORY_RE = re.compile(r'^category:\s*"([^"]+)"', re.MULTILINE)

# ── cases.json 로딩 캐시 ────────────────────────────────
_CASES_CACHE: dict[str, set[str]] = {}


def _load_cases(domain: str) -> set[str]:
    if domain in _CASES_CACHE:
        return _CASES_CACHE[domain]
    ids: set[str] = set()
    path = KB_ROOT / domain / "cases.json"
    if path.is_file():
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
            if isinstance(data, list):
                for c in data:
                    for key in ("판례ID", "caseId", "case_id", "사건번호"):
                        v = c.get(key) if isinstance(c, dict) else None
                        if isinstance(v, str) and v.strip():
                            ids.add(v.strip())
        except Exception:
            pass
    _CASES_CACHE[domain] = ids
    return ids


# ── 파싱 헬퍼 ───────────────────────────────────────────
def _strip_to_body(text: str) -> str:
    m = FRONTMATTER_RE.match(text)
    return text[m.end():] if m else text


def _extract_field(text: str, pattern: re.Pattern[str]) -> str | None:
    m = pattern.search(text)
    return m.group(1) if m else None


def count_body_chars(text: str) -> int:
    body = _strip_to_body(text)
    body = MARKDOWN_SYMBOLS_RE.sub("", body)
    body = WHITESPACE_RE.sub("", body)
    return len(body)


def check_empathy_intro(text: str) -> tuple[bool, int, bool]:
    body = _strip_to_body(text)
    m = FIRST_TIP_RE.search(body)
    intro_raw = body[:m.start()] if m else body[:500]
    intro_clean = MARKDOWN_SYMBOLS_RE.sub("", intro_raw)
    intro_clean = WHITESPACE_RE.sub("", intro_clean)
    chars = len(intro_clean)
    has_hook = bool(EMPATHY_HOOK_RE.search(intro_raw))
    has_intro = chars >= INTRO_MIN_CHARS and has_hook
    return has_intro, chars, has_hook


def check_tip_sections(text: str, is_tistory: bool) -> tuple[int, list[tuple[int, list[str]]]]:
    """Return (tip_count, [(tip_index, missing_subsections)]).

    Blog (네이버): requires 4 sub-sections (왜중요/쉽게설명/바로할일/흔한실수).
    Tistory: requires 2 sub-sections (바로할일/흔한실수).
    """
    body = _strip_to_body(text)
    case_match = re.search(r"(?:📌|### )\s*\*?\*?\s*(?:실제\s*판례|실제로 이런 판례)", body)
    tip_region = body[:case_match.start()] if case_match else body
    parts = TIP_SPLIT_RE.split(tip_region)
    tips = [p for p in parts if FIRST_TIP_RE.match(p)]
    markers = TISTORY_SUBSECTIONS if is_tistory else BLOG_SUBSECTIONS
    results: list[tuple[int, list[str]]] = []
    for i, tip in enumerate(tips, start=1):
        missing: list[str] = []
        for label, pat in markers:
            if not re.search(pat, tip):
                missing.append(label)
        if missing:
            results.append((i, missing))
    return len(tips), results


def check_case_numbers(text: str, domain: str | None) -> tuple[list[str], list[str]]:
    """Return (found_numbers, unknown_numbers_in_cases_json).

    Unknown = not present in kb/{domain}/cases.json 판례ID field.
    If domain has no cases.json, all numbers are "not checkable" and returned as empty.
    """
    body = _strip_to_body(text)
    nums = sorted(set(CASE_NUMBER_RE.findall(body)))
    if not domain:
        return nums, []
    known = _load_cases(domain)
    if not known:
        return nums, []  # 도메인 cases.json 없음 → 검증 불가
    unknown = [n for n in nums if n not in known]
    return nums, unknown


def _title_stems(title: str) -> set[str]:
    """Extract normalized Korean noun-candidate stems from a title."""
    tokens = TITLE_KEYWORD_RE.findall(title)
    stems: set[str] = set()
    for t in tokens:
        stem = t
        for end in KOREAN_ENDINGS:
            if len(stem) > len(end) + 1 and stem.endswith(end):
                stem = stem[: -len(end)]
                break
        if len(stem) >= 2:
            stems.add(stem)
    return stems


_DOMAIN_TITLES_CACHE: dict[str, list[tuple[str, str]]] = {}  # domain → [(path, title)]


def _load_existing_titles(domain: str, self_path: Path) -> list[tuple[str, str]]:
    if domain in _DOMAIN_TITLES_CACHE:
        return [(p, t) for p, t in _DOMAIN_TITLES_CACHE[domain] if p != str(self_path)]
    items: list[tuple[str, str]] = []
    for d in (CONTENT_BLOG_DIR, CONTENT_TISTORY_DIR):
        if not d.is_dir():
            continue
        for md in d.glob("*.md"):
            try:
                txt = md.read_text(encoding="utf-8")
            except Exception:
                continue
            dm = DOMAIN_RE.search(txt)
            if not dm or dm.group(1) != domain:
                continue
            tm = TITLE_RE.search(txt)
            if not tm:
                continue
            items.append((str(md), tm.group(1)))
    _DOMAIN_TITLES_CACHE[domain] = items
    return [(p, t) for p, t in items if p != str(self_path)]


def check_title_overlap(text: str, path: Path, domain: str | None) -> list[tuple[str, int, list[str]]]:
    """Return [(other_path, overlap_count, shared_stems)] for overlap ≥3."""
    if not domain:
        return []
    tm = TITLE_RE.search(text)
    if not tm:
        return []
    new_stems = _title_stems(tm.group(1))
    if len(new_stems) < 3:
        return []
    out: list[tuple[str, int, list[str]]] = []
    for other_path, other_title in _load_existing_titles(domain, path):
        other_stems = _title_stems(other_title)
        shared = new_stems & other_stems
        if len(shared) >= 3:
            out.append((other_path, len(shared), sorted(shared)))
    out.sort(key=lambda x: -x[1])
    return out[:3]


def check_tone(text: str, is_tistory: bool) -> tuple[int, int, float]:
    """Return (formal_count, informal_count, formal_ratio)."""
    body = _strip_to_body(text)
    # Exclude 판례 section (학술 톤 필연) and 마무리
    case_m = re.search(r"(?:📌|### )\s*\*?\*?\s*(?:실제\s*판례|실제로 이런 판례)", body)
    if case_m:
        body = body[: case_m.start()]
    formal = len(FORMAL_ENDING_RE.findall(body))
    informal = len(INFORMAL_ENDING_RE.findall(body))
    total = formal + informal
    ratio = formal / total if total else 0.0
    return formal, informal, ratio


def check_perspective_language(text: str, category: str | None) -> list[str]:
    """Return list of perspective/language violations.

    - 가해자 단정 표현 금지 ("범인", "범죄자", "유죄입니다", "처벌받습니다"...)
    - category=accused 인 경우 소지가 있는 표현 필수
    - category=neutral/victim/accused 상관없이 단정적 유죄 단어는 차단
    """
    body = _strip_to_body(text)
    violations: list[str] = []
    for label, pat in FORBIDDEN_VERDICT_WORDS:
        if re.search(pat, body):
            violations.append(f"단정적 유죄 표현 '{label}' 발견 (→ '혐의자/대상자/~소지가 있습니다'로 교체)")
    if category == "accused":
        if not any(re.search(pat, body) for pat in ACCUSED_REQUIRED_PATTERNS):
            violations.append("가해자 관점 필수 표현 누락 ('혐의를 받고 있다면' / '해당할 소지가 있' 필수)")
    return violations


def check_cta(text: str, domain: str | None, is_tistory: bool) -> list[str]:
    """Return list of CTA rule violations."""
    body = _strip_to_body(text)
    violations: list[str] = []

    cta = CTA_TABLE.get(domain or "")
    if is_tistory:
        # 티스토리: 본문 하단에 1안 CTA 문구 + 공식 URL 필수
        if not cta:
            violations.append(f"도메인 '{domain}' CTA 문구표에 없음")
            return violations
        phrase, path = cta
        if phrase not in body:
            violations.append(f"CTA 문구 '{phrase}' 누락")
        expected_url = f"https://www.lawnguide.co.kr{path}"
        # www 없는 non-www URL 쓴 경우도 탐지
        if expected_url not in body:
            if re.search(rf"https?://(?!www\.){re.escape('lawnguide.co.kr')}{re.escape(path)}", body):
                violations.append(f"URL www 누락 (non-www 금지) — 기대: {expected_url}")
            else:
                violations.append(f"CTA URL 누락 또는 불일치 — 기대: {expected_url}")
    else:
        # 네이버 블로그: 본문에 CTA 텍스트·URL이 있으면 안 됨 (publish 스크립트가 자동 삽입)
        if cta and cta[0] in body:
            violations.append(f"CTA 문구가 본문에 포함됨 (publish가 자동 삽입, 중복)")
        if re.search(r"/chat\?domain=", body):
            violations.append("CTA URL(/chat?domain=)이 본문에 포함됨 (네이버는 본문 금지)")
        if re.search(r"lawnguide\.co\.kr", body):
            violations.append("도메인 URL이 본문에 포함됨 (네이버는 본문 금지)")
    return violations


# ── 통합 결과 ────────────────────────────────────────────
class Report(NamedTuple):
    path: Path
    body_chars: int
    intro_chars: int
    has_intro: bool
    tip_count: int
    missing_subsections: list[tuple[int, list[str]]]
    case_numbers: list[str]
    unknown_cases: list[str]
    cta_violations: list[str]
    title_overlaps: list[tuple[str, int, list[str]]]
    formal_count: int
    informal_count: int
    formal_ratio: float
    perspective_violations: list[str]
    category: str | None
    already_published_at: str | None

    @property
    def is_tistory(self) -> bool:
        return "tistory" in str(self.path).lower()

    @property
    def blocking_errors(self) -> list[str]:
        errs: list[str] = []
        if self.body_chars < MIN_CHARS:
            errs.append(f"본문 {self.body_chars}자 (<{MIN_CHARS})")
        if not self.has_intro:
            reasons = []
            if self.intro_chars < INTRO_MIN_CHARS:
                reasons.append(f"도입 {self.intro_chars}자")
            if not self.has_intro and self.intro_chars >= INTRO_MIN_CHARS:
                reasons.append("공감어미 없음")
            errs.append(f"공감도입 부족 ({', '.join(reasons) or '누락'})")
        if self.tip_count < 3:
            errs.append(f"Tip {self.tip_count}개 (<3)")
        if self.missing_subsections:
            items = ", ".join(
                f"Tip{i}:{'/'.join(m)}" for i, m in self.missing_subsections
            )
            errs.append(f"서브섹션 누락 [{items}]")
        if self.cta_violations:
            errs.append("CTA: " + "; ".join(self.cta_violations))
        # 단정적 유죄 표현은 차단 (가해자/무고 관점 오류)
        verdict_hits = [v for v in self.perspective_violations if "단정적 유죄" in v]
        if verdict_hits:
            errs.extend(verdict_hits)
        # 같은 filename 이 이미 발행 레지스트리에 있으면 차단 (덮어쓰기 사고 방지)
        if self.already_published_at:
            errs.append(
                f"filename 이미 발행됨 ({self.already_published_at}) — 슬러그 변경(예: -v2 추가) 후 재시도"
            )
        return errs

    @property
    def warnings(self) -> list[str]:
        warns: list[str] = []
        if self.body_chars > MAX_CHARS:
            warns.append(f"본문 {self.body_chars}자 (>{MAX_CHARS})")
        if self.unknown_cases:
            warns.append(f"판례 사건번호 kb에 없음: {', '.join(self.unknown_cases)}")
        if self.title_overlaps:
            items = []
            for p, n, stems in self.title_overlaps:
                name = Path(p).name
                items.append(f"{name} (공유 {n}개: {', '.join(stems[:4])})")
            warns.append(f"제목 핵심어 3개+ 중복: {' | '.join(items)}")
        if self.formal_ratio > FORMAL_WARN_THRESHOLD and (self.formal_count + self.informal_count) >= 10:
            warns.append(
                f"문어체 비율 {self.formal_ratio:.0%} (문어 {self.formal_count}/구어 {self.informal_count}) — 블로그는 구어체 필수"
            )
        # accused 필수 표현 누락은 경고
        missing_accused = [v for v in self.perspective_violations if "단정적 유죄" not in v]
        if missing_accused:
            warns.extend(missing_accused)
        return warns


def analyze_file(path: Path) -> Report:
    text = path.read_text(encoding="utf-8")
    domain = _extract_field(text, DOMAIN_RE)
    category = _extract_field(text, CATEGORY_RE)
    body_chars = count_body_chars(text)
    has_intro, intro_chars, _ = check_empathy_intro(text)
    is_tistory = "tistory" in str(path).lower()
    tip_count, missing = check_tip_sections(text, is_tistory)
    nums, unknown = check_case_numbers(text, domain)
    cta_v = check_cta(text, domain, is_tistory)
    overlaps = check_title_overlap(text, path, domain)
    formal, informal, ratio = check_tone(text, is_tistory)
    persp_v = check_perspective_language(text, category)
    # 덮어쓰기 사고 방지: frontmatter date 이전에 같은 filename 이 이미 발행된 경우만 차단
    # (오늘 date 인데 과거에 발행된 적 있음 = 이번 달 새로 만든 슬러그와 레지스트리 충돌 → 재작명 필요)
    registry = _load_published_registry()
    published_at = registry.get(path.name)
    file_date = _extract_field(text, DATE_RE)
    already_at: str | None = None
    if published_at and file_date and published_at < file_date:
        already_at = published_at
    return Report(
        path=path,
        body_chars=body_chars,
        intro_chars=intro_chars,
        has_intro=has_intro,
        tip_count=tip_count,
        missing_subsections=missing,
        case_numbers=nums,
        unknown_cases=unknown,
        cta_violations=cta_v,
        title_overlaps=overlaps,
        formal_count=formal,
        informal_count=informal,
        formal_ratio=ratio,
        perspective_violations=persp_v,
        category=category,
        already_published_at=already_at,
    )


# ── Public API for publish scripts ──────────────────────
def validate_files(paths: Iterable[Path]) -> tuple[bool, str]:
    """Return (ok, multiline summary). ok=True if every file passes blocking rules."""
    reports = [analyze_file(Path(p)) for p in paths]
    bad = [r for r in reports if r.blocking_errors]
    lines = [
        f"[check_blog_length] 검사 {len(reports)}개 / 차단 {len(bad)}개",
    ]
    for r in bad:
        lines.append(f"  ❌ {r.path}")
        for e in r.blocking_errors:
            lines.append(f"      - {e}")
    return len(bad) == 0, "\n".join(lines)


# ── CLI ─────────────────────────────────────────────────
def collect_files(target_date: str | None, scan_all: bool, explicit: list[str]) -> list[Path]:
    if explicit:
        return [Path(p) for p in explicit]
    dirs = ["content/blog", "content/tistory"]
    paths: list[Path] = []
    for d in dirs:
        for p in glob.glob(f"{d}/*.md"):
            paths.append(Path(p))
    if scan_all:
        return paths
    out: list[Path] = []
    for p in paths:
        text = p.read_text(encoding="utf-8")
        d = _extract_field(text, DATE_RE)
        if d == target_date:
            out.append(p)
    return out


def main() -> int:
    args = sys.argv[1:]
    strict = "--strict" in args
    scan_all = "--all" in args
    # --failing-only: 차단된 파일 경로만 한 줄씩 출력 (재생성 루프용)
    failing_only = "--failing-only" in args
    files_idx = args.index("--files") if "--files" in args else -1
    explicit: list[str] = []
    if files_idx >= 0:
        explicit = [a for a in args[files_idx + 1:] if not a.startswith("--")]
    date_args = [a for a in args if not a.startswith("--") and a not in explicit]
    target_date = date_args[0] if date_args else date.today().isoformat()

    if explicit:
        files = collect_files(None, False, explicit)
        header = f"명시 파일 {len(files)}개"
    elif scan_all:
        files = collect_files(None, True, [])
        header = f"전체 스캔 — {len(files)}개 파일"
    else:
        files = collect_files(target_date, False, [])
        header = f"날짜 {target_date} — {len(files)}개 파일"

    if not files:
        print(f"[check_blog_length] {header} (없음)")
        return 0

    reports = [analyze_file(p) for p in sorted(files)]
    bad = [r for r in reports if r.blocking_errors]
    warn = [r for r in reports if r.warnings and r not in bad]

    if failing_only:
        # 재생성 루프용: 차단 파일 경로만 한 줄씩
        for r in bad:
            print(r.path)
        return 1 if bad else 0

    print(f"[check_blog_length] {header}")
    print(f"  목표: 본문 {MIN_CHARS}~{MAX_CHARS}자 (권장 {RECOMMENDED_MIN}~{RECOMMENDED_MAX}) / 공감도입 ≥{INTRO_MIN_CHARS}자 / Tip 3개+4서브섹션 / 판례 kb검증 / CTA / 제목중복 / 톤 / 가해자 표현")
    print(f"  OK          {len(reports) - len(bad):>3}개")
    print(f"  차단(block) {len(bad):>3}개")
    print(f"  경고(warn)  {len(warn):>3}개")

    if bad:
        print(f"\n❌ 차단 — 발행 금지 ({len(bad)}개):")
        for r in bad:
            print(f"  {r.path}")
            for e in r.blocking_errors:
                print(f"    - {e}")

    if warn:
        print(f"\n⚠️ 경고 — 확인 권장 ({len(warn)}개):")
        for r in warn:
            print(f"  {r.path}")
            for w in r.warnings:
                print(f"    - {w}")

    if strict and bad:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
