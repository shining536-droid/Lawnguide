#!/usr/bin/env python3
"""IndexNow 수동 ping — 로앤가이드 본사이트 /guide URL 제출 (1차: 수동 전용, 자동화 X).

목적:
  - 매일 생성/수정되는 본사이트 https://www.lawnguide.co.kr/guide/[domain]/[slug] URL을
    IndexNow(api.indexnow.org)에 제출 → Bing·Naver 등 IndexNow 지원 엔진에 변경 알림.
  - Google은 IndexNow 미지원이므로 대상 아님 (Search Console 색인요청과 별개).
  - 네이버 블로그/티스토리/베베플랜/외부 URL은 제출 대상 아님.

키 처리(보안):
  - 키는 코드에 하드코딩하지 않음.
  - 우선순위: 환경변수 INDEXNOW_KEY  →  없으면 scripts/.indexnow_key (gitignore 처리됨).
  - 공개 키 파일(web/public/<key>.txt)은 소유검증용이라 공개 배포가 정상.
  - 로그/출력에 키 전체값을 찍지 않음 (앞 8자만).

URL 수집 방식(선택: batch slug 기준):
  - 본사이트 스포크는 web/src/data/spoke/spokes-batch{N}-*.ts 에 {domain, slug}로 정의됨.
  - "오늘 새로 생성된 /guide URL" = 가장 최근(또는 --batch 로 지정한) batch 파일의 slug.
  - git diff/sitemap diff 대비 장점: 오늘 추가분만 정확히 잡고, 무관한 수정에 따른 오탐이 없음.
    (대안: --urls 로 임의 지정, 또는 외부에서 만든 목록을 --url-file 로 주입)

사용 예:
  python scripts/indexnow_ping.py --dry-run                # 최신 batch URL 미리보기(POST 안 함)
  python scripts/indexnow_ping.py --batch 78 --test 3      # batch78 앞 3개만 제출(테스트)
  python scripts/indexnow_ping.py --batch 78               # batch78 신규 URL 전체 제출
  python scripts/indexnow_ping.py --urls https://www.lawnguide.co.kr/guide/fraud/foo
  python scripts/indexnow_ping.py --batch 78 --resubmit    # 제출이력 무시하고 재제출
"""
from __future__ import annotations

import argparse
import glob
import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT = Path(__file__).resolve().parent.parent
HOST = "www.lawnguide.co.kr"
BASE = f"https://{HOST}"
GUIDE_PREFIX = f"{BASE}/guide/"
ENDPOINT = "https://api.indexnow.org/indexnow"
SPOKE_DIR = ROOT / "web" / "src" / "data" / "spoke"
KEY_FILE_LOCAL = ROOT / "scripts" / ".indexnow_key"
SUBMIT_LOG = ROOT / "scripts" / "indexnow_submitted.log"

DOMAIN_RE = re.compile(r"domain:\s*'([^']+)'")
SLUG_RE = re.compile(r"slug:\s*'([^']+)'")


def load_key() -> str:
    """env INDEXNOW_KEY → scripts/.indexnow_key. Never hardcoded."""
    key = os.environ.get("INDEXNOW_KEY", "").strip()
    src = "env:INDEXNOW_KEY"
    if not key and KEY_FILE_LOCAL.is_file():
        key = KEY_FILE_LOCAL.read_text(encoding="utf-8").strip()
        src = str(KEY_FILE_LOCAL)
    if not key:
        sys.exit(
            "❌ IndexNow 키를 찾을 수 없습니다. 환경변수 INDEXNOW_KEY 를 설정하거나 "
            f"{KEY_FILE_LOCAL} 파일에 키를 넣어주세요."
        )
    if not re.fullmatch(r"[A-Za-z0-9\-]{8,128}", key):
        sys.exit("❌ 키 형식 오류 (8~128자 영숫자/하이픈만 허용).")
    print(f"🔑 키 로드: {key[:8]}… (출처: {src})")
    return key


def collect_batch_urls(batch: int | None, explicit_files: list[str] | None) -> list[str]:
    if explicit_files:
        files = [Path(f) for f in explicit_files]
    else:
        if batch is None:
            nums = []
            for p in SPOKE_DIR.glob("spokes-batch*.ts"):
                m = re.search(r"spokes-batch(\d+)", p.name)
                if m:
                    nums.append(int(m.group(1)))
            if not nums:
                sys.exit("❌ spokes-batch*.ts 파일을 찾지 못했습니다.")
            batch = max(nums)
        files = sorted(SPOKE_DIR.glob(f"spokes-batch{batch}-*.ts"))
        if not files:
            sys.exit(f"❌ spokes-batch{batch}-*.ts 파일이 없습니다.")
        print(f"📦 batch{batch} 파일 {len(files)}개에서 slug 수집")
    urls: list[str] = []
    for f in files:
        cur_domain = None
        for line in f.read_text(encoding="utf-8").splitlines():
            md = DOMAIN_RE.search(line)
            if md:
                cur_domain = md.group(1)
            ms = SLUG_RE.search(line)
            if ms and cur_domain:
                urls.append(f"{BASE}/guide/{cur_domain}/{ms.group(1)}")
    return urls


def filter_urls(urls: list[str]) -> list[str]:
    """www canonical /guide URL만, 중복 제거, /spoke·non-www·외부 제외."""
    seen: set[str] = set()
    out: list[str] = []
    for u in urls:
        u = u.strip()
        if not u.startswith(GUIDE_PREFIX):
            continue  # /guide 외, non-www, 외부(블로그/티스토리) 전부 제외
        if "/spoke/" in u or u.rstrip("/").endswith("/spoke"):
            continue
        if u in seen:
            continue
        seen.add(u)
        out.append(u)
    return out


def already_submitted() -> set[str]:
    done: set[str] = set()
    if SUBMIT_LOG.is_file():
        for line in SUBMIT_LOG.read_text(encoding="utf-8").splitlines():
            parts = line.split("\t")
            if len(parts) >= 3 and parts[1] in ("200", "202"):
                done.add(parts[2])
    return done


def check_key_live(key: str) -> None:
    loc = f"{BASE}/{key}.txt"
    try:
        with urllib.request.urlopen(loc, timeout=20) as r:
            body = r.read().decode("utf-8", "replace").strip()
            if r.getcode() == 200 and body == key:
                print(f"✅ 키 파일 라이브 확인: {BASE}/{key[:8]}….txt → 200, 본문 일치")
            else:
                print(f"⚠️ 키 파일 응답 {r.getcode()} / 본문 일치={body == key} — 제출이 거부될 수 있음")
    except Exception as e:
        print(f"⚠️ 키 파일 라이브 확인 실패({e}) — 배포 전이면 IndexNow가 403 줄 수 있음")


def submit(urls: list[str], key: str, dry_run: bool) -> int:
    key_location = f"{BASE}/{key}.txt"
    ts = datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")
    print(f"\n🕒 {ts}  제출 대상 {len(urls)}개 URL")
    for u in urls:
        print(f"   • {u}")
    if dry_run:
        print("\n(--dry-run: POST 하지 않고 종료)")
        return 0
    if not urls:
        print("제출할 URL이 없습니다.")
        return 0

    body = {"host": HOST, "key": key, "keyLocation": key_location, "urlList": urls}
    data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT, data=data,
        headers={"Content-Type": "application/json; charset=utf-8"}, method="POST",
    )
    code = 0
    resp_text = ""
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            code = r.getcode()
            resp_text = r.read().decode("utf-8", "replace")[:300]
    except urllib.error.HTTPError as e:
        code = e.code
        resp_text = e.read().decode("utf-8", "replace")[:300]
    except Exception as e:
        code = -1
        resp_text = str(e)

    ok = code in (200, 202)
    status = "✅ 정상" if ok else "❌ 에러"
    print(f"\n{status}  HTTP {code}")
    if resp_text:
        print(f"   응답: {resp_text!r}")

    # 로그 기록 (성공/실패 모두). 성공 URL은 중복방지 이력에 사용.
    SUBMIT_LOG.parent.mkdir(parents=True, exist_ok=True)
    with SUBMIT_LOG.open("a", encoding="utf-8") as f:
        for u in urls:
            f.write(f"{ts}\t{code}\t{u}\n")
    print(f"📝 로그 기록: {SUBMIT_LOG}  (제출시각/응답코드/URL)")
    if not ok:
        print("   (코드 의미: 400 형식오류 · 403 키검증실패(키파일 라이브 확인) · 422 host/key 불일치 · 429 과다요청)")
    return 0 if ok else 1


def main() -> int:
    ap = argparse.ArgumentParser(description="IndexNow 수동 ping (lawnguide /guide URL 전용)")
    ap.add_argument("--batch", type=int, default=None, help="대상 batch 번호 (기본: 최신 batch 자동감지)")
    ap.add_argument("--files", nargs="+", help="특정 spoke .ts 파일에서 slug 수집")
    ap.add_argument("--urls", nargs="+", help="임의 URL 직접 지정 (www /guide 만 통과)")
    ap.add_argument("--test", type=int, default=0, help="앞 N개만 제출(테스트). 이력 무시.")
    ap.add_argument("--resubmit", action="store_true", help="제출 이력 무시하고 재제출")
    ap.add_argument("--dry-run", action="store_true", help="POST 없이 대상만 출력")
    args = ap.parse_args()

    key = load_key()
    check_key_live(key)

    if args.urls:
        raw = args.urls
    else:
        raw = collect_batch_urls(args.batch, args.files)
    urls = filter_urls(raw)
    print(f"🔎 수집 {len(raw)}개 → www /guide 필터·중복제거 후 {len(urls)}개")

    if args.test and args.test > 0:
        urls = urls[: args.test]
        print(f"🧪 테스트 모드: 앞 {len(urls)}개만 제출")
    elif not args.resubmit:
        done = already_submitted()
        before = len(urls)
        urls = [u for u in urls if u not in done]
        if before != len(urls):
            print(f"⏭️ 이미 제출된 {before - len(urls)}개 제외(이력 로그 기준). --resubmit 으로 재제출 가능")

    return submit(urls, key, args.dry_run)


if __name__ == "__main__":
    sys.exit(main())
