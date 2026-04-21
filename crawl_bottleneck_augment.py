"""병목 도메인 보강 크롤러 — unemployment / child-support / rehabilitation.

법제처 Open API(prec, expc) 확장 쿼리로 기존 cases.json에 없는 신규 판례·해석례만 추출.
기존 judge ID 집합에 없는 것만 append → 기존 데이터 건들지 않음.

사용법:
  python crawl_bottleneck_augment.py                 # 3개 도메인 전부
  python crawl_bottleneck_augment.py unemployment    # 특정 도메인만
"""

from __future__ import annotations

import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

API_LIST = "http://www.law.go.kr/DRF/lawSearch.do"
API_DETAIL = "http://www.law.go.kr/DRF/lawService.do"
OC = "lawnguide2026"
API_DELAY = 0.5

# 병목 도메인별 확장 쿼리 (target별)
DOMAIN_CONFIG: dict[str, dict[str, list[str]]] = {
    "unemployment": {
        "prec": ["실업급여", "구직급여", "고용보험", "이직사유", "부정수급", "수급자격제한"],
        "expc": ["고용보험", "실업급여", "이직사유", "구직급여"],
    },
    "child-support": {
        "prec": ["양육비", "양육비이행", "친권자지정", "양육권", "면접교섭", "양육비감액", "양육비증액"],
        "expc": ["양육비", "친권"],
    },
    "rehabilitation": {
        "prec": ["개인회생", "회생절차", "변제계획", "채무자 회생", "개인회생절차", "회생 인가"],
        "expc": ["개인회생", "회생절차", "변제계획"],
    },
}


def clean_html(text: str | None) -> str:
    if not text:
        return ""
    return re.sub(r"<[^>]+>", "", text).strip()


def fetch_url(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8")


def search_prec(query: str) -> list[dict]:
    """Return list of prec items (id/사건명/사건번호/선고일자)."""
    out: list[dict] = []
    page = 1
    display = 100
    while True:
        params = urllib.parse.urlencode({
            "OC": OC, "target": "prec", "type": "XML",
            "query": query, "display": display, "sort": "ddes", "page": page,
        })
        try:
            text = fetch_url(f"{API_LIST}?{params}")
            root = ET.fromstring(text)
        except Exception as e:
            print(f"  ⚠️ prec '{query}' p{page}: {e}")
            break
        precs = root.findall(".//prec")
        if not precs:
            break
        for e in precs:
            d = {c.tag: (c.text or "").strip() for c in e}
            if "국세" in d.get("데이터출처명", ""):
                continue
            out.append({
                "id": d.get("판례일련번호", ""),
                "사건명": clean_html(d.get("사건명", "")),
                "사건번호": d.get("사건번호", ""),
                "선고일자": d.get("선고일자", ""),
            })
        if len(precs) < display:
            break
        page += 1
        time.sleep(API_DELAY)
    return out


def fetch_prec_detail(case_id: str) -> dict | None:
    params = urllib.parse.urlencode({"OC": OC, "target": "prec", "type": "XML", "ID": case_id})
    try:
        text = fetch_url(f"{API_DETAIL}?{params}")
    except Exception as e:
        print(f"  ⚠️ detail {case_id}: {e}")
        return None
    if "일치하는" in text and "없습니다" in text:
        return None
    try:
        root = ET.fromstring(text)
    except Exception:
        return None
    return {
        "법원명": root.findtext("법원명", "").strip(),
        "판시사항": clean_html(root.findtext("판시사항", "")),
        "판결요지": clean_html(root.findtext("판결요지", "")),
    }


def search_expc(query: str) -> list[dict]:
    out: list[dict] = []
    page = 1
    display = 100
    while True:
        params = urllib.parse.urlencode({
            "OC": OC, "target": "expc", "type": "XML",
            "query": query, "display": display, "sort": "ddes", "page": page,
        })
        try:
            text = fetch_url(f"{API_LIST}?{params}")
            root = ET.fromstring(text)
        except Exception as e:
            print(f"  ⚠️ expc '{query}' p{page}: {e}")
            break
        items = root.findall(".//expc")
        if not items:
            break
        for e in items:
            out.append({
                "id": (e.findtext("법령해석례일련번호") or "").strip(),
                "안건명": clean_html(e.findtext("안건명")),
                "안건번호": (e.findtext("안건번호") or "").strip(),
                "회신기관명": (e.findtext("회신기관명") or "").strip(),
                "회신일자": (e.findtext("회신일자") or "").strip(),
            })
        if len(items) < display:
            break
        page += 1
        time.sleep(API_DELAY)
    return out


def fetch_expc_detail(doc_id: str) -> dict | None:
    params = urllib.parse.urlencode({"OC": OC, "target": "expc", "type": "XML", "ID": doc_id})
    try:
        text = fetch_url(f"{API_DETAIL}?{params}")
    except Exception as e:
        print(f"  ⚠️ expc detail {doc_id}: {e}")
        return None
    if "일치하는" in text and "없습니다" in text:
        return None
    try:
        root = ET.fromstring(text)
    except Exception:
        return None
    return {
        "회신기관명": (root.findtext("회신기관명") or "").strip(),
        "질의기관명": (root.findtext("질의기관명") or "").strip(),
        "안건명": clean_html(root.findtext("안건명")),
        "질의요지": clean_html(root.findtext("질의요지")),
        "회답": clean_html(root.findtext("회답")),
        "이유": clean_html(root.findtext("이유")),
    }


def load_existing_case_ids(domain: str) -> set[str]:
    path = Path(f"kb/{domain}/cases.json")
    if not path.is_file():
        return set()
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return set()
    ids: set[str] = set()
    for c in data or []:
        if not isinstance(c, dict):
            continue
        for k in ("판례일련번호", "판례ID", "caseId", "case_id", "사건번호"):
            v = c.get(k)
            if isinstance(v, str) and v.strip():
                ids.add(v.strip())
    return ids


def crawl_domain(domain: str) -> tuple[int, int]:
    """Return (new_prec_count, new_expc_count)."""
    cfg = DOMAIN_CONFIG[domain]
    existing_ids = load_existing_case_ids(domain)
    print(f"\n📂 [{domain}] 기존 ID {len(existing_ids)}개 확보 — 크롤 시작")

    # 1) prec
    prec_new: list[dict] = []
    seen = set(existing_ids)
    for q in cfg.get("prec", []):
        print(f"  🔍 prec '{q}'")
        try:
            items = search_prec(q)
        except Exception as e:
            print(f"     ERR: {e}")
            continue
        for it in items:
            cid = it["id"]
            sagun = it.get("사건번호", "")
            if not cid or cid in seen or (sagun and sagun in seen):
                continue
            seen.add(cid)
            if sagun:
                seen.add(sagun)
            detail = fetch_prec_detail(cid)
            time.sleep(API_DELAY)
            if detail is None:
                continue
            prec_new.append({
                "판례일련번호": cid,
                "사건번호": sagun,
                "사건명": it["사건명"],
                "선고일자": it.get("선고일자", ""),
                "법원명": detail["법원명"],
                "판시사항": detail["판시사항"],
                "판결요지": detail["판결요지"],
            })
        print(f"     누적 신규 {len(prec_new)}건")

    # 2) expc
    expc_new: list[dict] = []
    expc_seen: set[str] = set()
    # Load existing expc if we've saved before
    expc_path = Path(f"kb/{domain}/expc_augment.json")
    if expc_path.is_file():
        try:
            prev = json.loads(expc_path.read_text(encoding="utf-8"))
            for e in prev or []:
                if e.get("법령해석례일련번호"):
                    expc_seen.add(e["법령해석례일련번호"])
        except Exception:
            pass
    for q in cfg.get("expc", []):
        print(f"  🔍 expc '{q}'")
        try:
            items = search_expc(q)
        except Exception as e:
            print(f"     ERR: {e}")
            continue
        for it in items:
            did = it["id"]
            if not did or did in expc_seen:
                continue
            expc_seen.add(did)
            detail = fetch_expc_detail(did)
            time.sleep(API_DELAY)
            if detail is None:
                continue
            expc_new.append({
                "법령해석례일련번호": did,
                "안건번호": it["안건번호"],
                "안건명": it["안건명"],
                "회신기관명": detail["회신기관명"] or it.get("회신기관명", ""),
                "질의기관명": detail["질의기관명"],
                "회신일자": it.get("회신일자", ""),
                "질의요지": detail["질의요지"],
                "회답": detail["회답"],
                "이유": detail["이유"],
            })
        print(f"     누적 신규 {len(expc_new)}건")

    # 저장
    if prec_new:
        cases_path = Path(f"kb/{domain}/cases.json")
        cases_path.parent.mkdir(parents=True, exist_ok=True)
        existing = []
        if cases_path.is_file():
            try:
                existing = json.loads(cases_path.read_text(encoding="utf-8"))
            except Exception:
                existing = []
        merged = existing + prec_new
        cases_path.write_text(json.dumps(merged, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"  💾 {cases_path} 병합: 기존 {len(existing)} + 신규 {len(prec_new)} = 총 {len(merged)}")

    if expc_new:
        expc_path.write_text(json.dumps(expc_new, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"  💾 {expc_path} 신규 {len(expc_new)}건")

    return len(prec_new), len(expc_new)


def main() -> int:
    domains = sys.argv[1:] or list(DOMAIN_CONFIG.keys())
    for d in domains:
        if d not in DOMAIN_CONFIG:
            print(f"❌ 알 수 없는 도메인: {d}")
            return 1

    total_prec = 0
    total_expc = 0
    for d in domains:
        p, e = crawl_domain(d)
        total_prec += p
        total_expc += e

    print()
    print(f"=== 완료 ===")
    print(f"신규 판례 총 {total_prec:,}건, 법령해석례 총 {total_expc:,}건")
    return 0


if __name__ == "__main__":
    sys.exit(main())
