#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""주간 성과 리포트 — 1단계: inventory / technical 지표만 자동 산출.

Phase 1 범위 (GA4·GSC 자격증명 없이 계산 가능한 것만):
  - 스포크 총계 / 신규(직전 실행 대비)
  - 도메인(허브) 개수, 스포크 도메인 개수
  - 고아 스포크 수 (인바운드 내부링크 0)
  - 깨진 내부링크 수 (scripts/verify_routes.py 와 같은 판정 규칙)
  - 무효 도메인 값 (DOMAINS 에 허브가 없는 스포크 domain)
  - 카니발 클러스터 수 (_audit_seo/top.json 이 있으면 재사용)
  - sitemap URL 수 (web/src/app/sitemap.ts 가 만드는 구성을 그대로 계산)
  - 블로그/티스토리 발행 파일 수
  - 한 페이지 내 중복 내부링크 수

GA4 / Search Console 은 이 단계에서 다루지 않는다. 자격증명이 확보되면
`traffic` / `funnel` / `search` / `index` 키를 같은 스키마에 채우면 된다
(analysis/overhaul_20260928/E-weekly-report-structure.md §6 참조).

출력
  analysis/weekly_metrics/latest_inventory.json     (최신 스냅샷, 덮어씀)
  analysis/weekly_metrics/metrics_history.jsonl     (append-only, 주차당 1줄)

사용법
  python scripts/weekly_report.py                # 오늘이 속한 ISO 주차로 기록
  python scripts/weekly_report.py --week 2026-W40
  python scripts/weekly_report.py --dry-run      # 파일 쓰지 않고 출력만
"""
from __future__ import annotations
import os, re, sys, json, glob, argparse, datetime
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPOKE_DIR = os.path.join(ROOT, 'web', 'src', 'data', 'spoke')
DOMAINS_TS = os.path.join(ROOT, 'web', 'src', 'lib', 'domains.ts')
DOMAINS_CLIENT_TS = os.path.join(ROOT, 'web', 'src', 'lib', 'domains-client.ts')
NEXT_CONFIG = os.path.join(ROOT, 'web', 'next.config.js')
SITEMAP_TS = os.path.join(ROOT, 'web', 'src', 'app', 'sitemap.ts')
OUT_DIR = os.path.join(ROOT, 'analysis', 'weekly_metrics')
LATEST = os.path.join(OUT_DIR, 'latest_inventory.json')
HISTORY = os.path.join(OUT_DIR, 'metrics_history.jsonl')
CANNIBAL_PAIRS = os.path.join(ROOT, '_audit_seo', 'top.json')

DOM_LINE = re.compile(r"^ {2,6}domain: '([^']*)',?\s*$")
SLUG_LINE = re.compile(r"^ {2,6}slug: '([^']*)',?\s*$")
HREF_SPOKE = re.compile(r"href: '/guide/([a-z0-9-]+)/([a-z0-9-]+)'")
HREF_HUB = re.compile(r"href: '/guide/([a-z0-9-]+)'")


COMMENT_BLOCK = re.compile(r"/\*.*?\*/", re.S)


def strip_comments_keep_lines(src: str) -> str:
    """주석을 지우되 줄 수와 줄 번호를 보존한다 (에러 메시지의 line 이 맞아야 하므로).

    스포크 데이터에는 제거된 스포크가 /* ... */ 로 남아 있다. 이걸 세면
    존재하지 않는 라우트를 유효하다고 오판한다 (2026-09-28 발견, 8건).
    """
    def blank(m: re.Match) -> str:
        return re.sub(r"[^\n]", " ", m.group(0))

    src = COMMENT_BLOCK.sub(blank, src)
    out = []
    for line in src.split("\n"):
        # 문자열 안의 // 는 건드리지 않는다. 스포크 데이터의 라인 주석은
        # 항상 들여쓰기 뒤 단독으로 오므로 그 형태만 제거한다.
        if re.match(r"^\s*//", line):
            out.append("")
        else:
            out.append(line)
    return "\n".join(out)


def load_redirect_sources(next_config: str) -> set:
    """next.config.js 의 redirects source 경로 집합. 제거된 슬러그 판별용."""
    if not os.path.exists(next_config):
        return set()
    src = open(next_config, encoding="utf-8").read()
    return set(re.findall(r"source:\s*'(/guide/[^']+)'", src))


def read_domain_ids(path: str) -> list[str]:
    src = open(path, encoding='utf-8').read()
    m = re.search(r"export const DOMAINS: DomainMeta\[\] = \[(.*?)\n\];", src, re.S)
    if not m:
        raise SystemExit('ERROR DOMAINS 배열을 찾지 못함: %s' % path)
    return re.findall(r"id: '([a-z0-9-]+)'", m.group(1))


def load_spokes() -> list[dict]:
    objs = []
    for fp in sorted(glob.glob(os.path.join(SPOKE_DIR, '*.ts'))):
        lines = strip_comments_keep_lines(open(fp, encoding='utf-8').read()).split('\n')
        starts = [i for i, l in enumerate(lines) if DOM_LINE.match(l)] + [len(lines)]
        for n in range(len(starts) - 1):
            lo, hi = starts[n], starts[n + 1]
            sm = next((SLUG_LINE.match(l) for l in lines[lo:hi] if SLUG_LINE.match(l)), None)
            if not sm:
                continue
            spoke_hrefs, hub_hrefs = [], []
            for j in range(lo, hi):
                spoke_hrefs += HREF_SPOKE.findall(lines[j])
                # 2세그먼트에 먼저 매칭된 줄은 허브로 다시 세지 않는다
                if not HREF_SPOKE.search(lines[j]):
                    hub_hrefs += HREF_HUB.findall(lines[j])
            objs.append({
                'domain': DOM_LINE.match(lines[lo]).group(1),
                'slug': sm.group(1),
                'spoke_hrefs': spoke_hrefs,
                'hub_hrefs': hub_hrefs,
            })
    return objs


def iso_week(d: datetime.date) -> str:
    y, w, _ = d.isocalendar()
    return '%d-W%02d' % (y, w)


def count_sitemap_urls(hub_ids: list[str], n_spokes: int) -> dict:
    """sitemap.ts 구성을 코드에서 읽어 URL 수를 계산한다 (빌드 산출물이 없어도 되게)."""
    src = open(SITEMAP_TS, encoding='utf-8').read()
    # 정적 경로 배열의 `url:` 항목 수에서 DOMAINS/SPOKE_PAGES map 을 제외한 나머지를 센다
    # sitemap.ts 는 baseUrl 변수를 쓰므로 URL 리터럴 정규식으로는 잡히지 않는다.
    # home 배열 항목 수를 센다 (`url: baseUrl,` 형태).
    static_n = len(re.findall(r"url:\s*baseUrl\s*,", src))
    return {
        'static': static_n,
        'hubs': len(hub_ids),
        'spokes': n_spokes,
        'total': static_n + len(hub_ids) + n_spokes,
    }


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--week', help='ISO 주차 (예: 2026-W40). 미지정 시 오늘 기준')
    ap.add_argument('--dry-run', action='store_true')
    args = ap.parse_args()

    today = datetime.date.today()
    week = args.week or iso_week(today)

    hub_ids = read_domain_ids(DOMAINS_TS)
    client_ids = read_domain_ids(DOMAINS_CLIENT_TS)
    HUBS = set(hub_ids)

    objs = load_spokes()
    routes = {(o['domain'], o['slug']) for o in objs}

    # 인바운드 / 깨진 링크 / 중복 링크
    inbound: Counter = Counter()
    broken_href = 0
    broken_hub_href = 0
    redirected_href = 0
    redirects = load_redirect_sources(NEXT_CONFIG)
    dup_link = 0
    self_link = 0
    for o in objs:
        seen: Counter = Counter()
        for d, s in o['spoke_hrefs']:
            inbound[(d, s)] += 1
            seen[(d, s)] += 1
            if (d, s) not in routes or d not in HUBS:
                if '/guide/%s/%s' % (d, s) in redirects:
                    redirected_href += 1      # 301 경유 — 깨짐 아님
                else:
                    broken_href += 1
            elif (d, s) == (o['domain'], o['slug']):
                self_link += 1
        dup_link += sum(1 for c in seen.values() if c > 1)
        for d in o['hub_hrefs']:
            if d not in HUBS:
                broken_hub_href += 1

    invalid_domains = {d: c for d, c in Counter(o['domain'] for o in objs).items() if d not in HUBS}
    orphans = sum(1 for o in objs if inbound.get((o['domain'], o['slug']), 0) == 0)
    dup_routes = sum(1 for c in Counter((o['domain'], o['slug']) for o in objs).values() if c > 1)

    # 카니발 클러스터 (감사 산출물이 있으면 재사용, 없으면 null)
    cannibal = {'available': False, 'clusters': None, 'pages': None, 'pairs': None}
    if os.path.exists(CANNIBAL_PAIRS):
        try:
            pairs = json.load(open(CANNIBAL_PAIRS, encoding='utf-8'))
            par: dict = {}

            def find(x):
                while par.setdefault(x, x) != x:
                    par[x] = par[par[x]]
                    x = par[x]
                return x

            for p in pairs:
                a, b = (p['domain'], p['a']), (p['domain'], p['b'])
                ra, rb = find(a), find(b)
                if ra != rb:
                    par[ra] = rb
            groups = defaultdict(list)
            for k in list(par):
                groups[find(k)].append(k)
            cl = [v for v in groups.values() if len(v) > 1]
            cannibal = {
                'available': True,
                'clusters': len(cl),
                'pages': sum(len(v) for v in cl),
                'pairs': len(pairs),
                'source': os.path.relpath(CANNIBAL_PAIRS, ROOT).replace('\\', '/'),
            }
        except Exception as e:  # 감사 산출물이 깨져 있어도 리포트는 계속 나오게
            cannibal['error'] = str(e)[:120]

    blog = len(glob.glob(os.path.join(ROOT, 'content', 'blog', '*.md')))
    tistory = len(glob.glob(os.path.join(ROOT, 'content', 'tistory', '*.md')))

    # 직전 스냅샷과 비교해 신규 스포크 수 산출
    prev = None
    if os.path.exists(LATEST):
        try:
            prev = json.load(open(LATEST, encoding='utf-8'))
        except Exception:
            prev = None
    prev_spokes = (prev or {}).get('inventory', {}).get('spokes_total')
    spokes_new = (len(objs) - prev_spokes) if isinstance(prev_spokes, int) else None

    metrics = {
        'week': week,
        'generated_at': datetime.datetime.now().replace(microsecond=0).isoformat(),
        'phase': 'inventory-only',
        'inventory': {
            'spokes_total': len(objs),
            'spokes_new_since_last_run': spokes_new,
            'routes_unique': len(routes),
            'hub_domains': len(hub_ids),
            'spoke_domains': len(set(o['domain'] for o in objs)),
            'spokes_orphan': orphans,
            'internal_links': sum(inbound.values()),
            'blog_files': blog,
            'tistory_files': tistory,
        },
        'integrity': {
            'broken_internal_links': broken_href + broken_hub_href,
            'broken_spoke_href': broken_href,
            'broken_hub_href': broken_hub_href,
            'invalid_domain_values': invalid_domains,
            'duplicate_routes': dup_routes,
            'self_links': self_link,
            'duplicate_links_in_page': dup_link,
            'redirected_links': redirected_href,
            'domains_desync': {
                'only_server': sorted(HUBS - set(client_ids)),
                'only_client': sorted(set(client_ids) - HUBS),
            },
        },
        'cannibalization': cannibal,
        'sitemap': count_sitemap_urls(hub_ids, len(objs)),
        # 아래 4개는 GA4/GSC 자격증명 확보 후 채운다 (스키마 자리만 확보)
        'traffic': None,
        'funnel': None,
        'search': None,
        'index': None,
    }

    print('=' * 68)
    print('주간 리포트 (inventory) — %s' % week)
    print('=' * 68)
    inv, integ = metrics['inventory'], metrics['integrity']
    print('스포크 %d (신규 %s) / 라우트 %d / 허브 도메인 %d'
          % (inv['spokes_total'],
             '집계 불가(첫 실행)' if spokes_new is None else '%+d' % spokes_new,
             inv['routes_unique'], inv['hub_domains']))
    print('고아 스포크 %d (%.0f%%) / 내부링크 %d'
          % (inv['spokes_orphan'], inv['spokes_orphan'] / max(1, inv['spokes_total']) * 100,
             inv['internal_links']))
    print('블로그 %d / 티스토리 %d' % (inv['blog_files'], inv['tistory_files']))
    print('sitemap URL %d (정적 %d + 허브 %d + 스포크 %d)'
          % (metrics['sitemap']['total'], metrics['sitemap']['static'],
             metrics['sitemap']['hubs'], metrics['sitemap']['spokes']))
    print()
    status = 'OK' if integ['broken_internal_links'] == 0 and not integ['invalid_domain_values'] else 'FAIL'
    print('[%s] 깨진 내부링크 %d / 무효 도메인 %s / 중복 라우트 %d'
          % (status, integ['broken_internal_links'],
             integ['invalid_domain_values'] or '없음', integ['duplicate_routes']))
    print('     자기링크 %d / 페이지 내 중복링크 %d / 301 경유 링크 %d'
          % (integ['self_links'], integ['duplicate_links_in_page'], integ['redirected_links']))
    if cannibal['available']:
        print('카니발 클러스터 %d / 소속 페이지 %d (출처 %s)'
              % (cannibal['clusters'], cannibal['pages'], cannibal['source']))
    else:
        print('카니발: 감사 산출물 없음 (_audit_seo/top.json) — 집계 생략')
    print()
    print('GA4/GSC 지표(traffic·funnel·search·index)는 자격증명 확보 후 단계. 현재 null.')

    if args.dry_run:
        print('\n--dry-run: 파일 쓰지 않음')
        return 0

    os.makedirs(OUT_DIR, exist_ok=True)
    json.dump(metrics, open(LATEST, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

    # 같은 주차를 다시 돌리면 덮어쓰지 않고 append 한다 (주중 여러 번 실행 이력 보존).
    with open(HISTORY, 'a', encoding='utf-8') as f:
        f.write(json.dumps(metrics, ensure_ascii=False) + '\n')

    print('\n저장: %s' % os.path.relpath(LATEST, ROOT).replace('\\', '/'))
    print('추가: %s' % os.path.relpath(HISTORY, ROOT).replace('\\', '/'))
    return 0


if __name__ == '__main__':
    sys.exit(main())
