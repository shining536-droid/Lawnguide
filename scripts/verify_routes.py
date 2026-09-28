#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""내부링크·라우트 무결성 게이트 (LawnGuide)

왜 필요한가
-----------
`web/src/app/guide/[domain]/[slug]/page.tsx` 와 `[domain]/page.tsx` 는 둘 다
`export const dynamicParams = false` 다. 따라서

  · generateStaticParams 가 내놓지 않은 (domain, slug) 조합  → 하드 404
  · isValidDomain(domain) 이 false 인 domain                  → notFound() → 하드 404

즉 스포크 데이터에 도메인/슬러그가 있어도 DOMAINS 에 도메인이 없으면 그 페이지는
빌드 시점에 404 가 된다. 2026-09 에 `industrial-accident` 55페이지가 정확히 이 경우였고,
거기로 향하는 내부링크 224개 + sitemap URL 55개가 전부 죽어 있었다.
사람 눈으로는 (domain, slug) 쌍이 데이터에 "있으니까" 멀쩡해 보이기 때문에 놓친다.

검사 항목
---------
E1 broken-href        : 내부 /guide/{d}/{s} 링크의 타깃이 스포크 데이터에 없음
E2 domain-without-hub : 스포크 domain 값이 DOMAINS(=허브)에 없음 → 해당 도메인 전 페이지 404
E3 broken-hub-href    : 내부 /guide/{d} 링크의 도메인이 DOMAINS 에 없음
E4 duplicate-route    : (domain, slug) 중복 → generateStaticParams 충돌
E5 broken-route-href  : /diagnosis/{d} 링크의 도메인이 DOMAINS 에 없음
E6 domains-desync     : domains.ts 와 domains-client.ts 의 DOMAINS id 집합 불일치
W1 self-link          : 페이지가 자기 자신을 링크
W2 dup-link-in-page   : 한 페이지가 같은 href 를 2번 이상 링크
W3 orphan             : 인바운드 내부링크 0 (정보용, 실패시키지 않음)
W4 redirected-href    : 제거된 슬러그로 향하지만 next.config.js 에 301 이 있음
                        (사용자에게 안 깨지므로 에러가 아니다. 다만 내부링크가 301 을
                         한 번 거치는 낭비라 canonical 로 바꾸면 좋다.)

주석 처리된 스포크 주의
-----------------------
데이터 파일에는 2026-05-01 에 제거된 스포크가 `/* ... */` 로 남아 있다.
줄 단위로 파싱하면 그 안의 domain/slug 를 실재하는 라우트로 오판해서,
해당 슬러그로 향하는 내부링크가 "유효" 로 통과된다(2026-09-28 발견, 8건).
그래서 파싱 전에 strip_comments_keep_lines() 로 주석을 비운다 (줄 번호는 보존).

사용법
------
  python scripts/verify_routes.py              # 요약 + 에러 시 exit 1
  python scripts/verify_routes.py --verbose    # 위반 전량 출력
  python scripts/verify_routes.py --json out.json
  python scripts/verify_routes.py --warn-as-error

배치 QA 에 넣는 위치: 스포크 생성(_b*_gen_ts) 직후, `npx next build` 앞.
빌드 앞에 두는 이유 — 빌드는 이 문제로 실패하지 않고 조용히 404 페이지를 만들기 때문.
"""
from __future__ import annotations
import re, sys, os, json, glob, argparse
from collections import defaultdict, Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPOKE_DIR = os.path.join(ROOT, 'web', 'src', 'data', 'spoke')
DOMAINS_TS = os.path.join(ROOT, 'web', 'src', 'lib', 'domains.ts')
DOMAINS_CLIENT_TS = os.path.join(ROOT, 'web', 'src', 'lib', 'domains-client.ts')
NEXT_CONFIG = os.path.join(ROOT, 'web', 'next.config.js')

DOM_LINE = re.compile(r"^ {2,6}domain: '([^']*)',?\s*$")
SLUG_LINE = re.compile(r"^ {2,6}slug: '([^']*)',?\s*$")
HREF_SPOKE = re.compile(r"href: '/guide/([a-z0-9-]+)/([a-z0-9-]+)'")
HREF_HUB = re.compile(r"href: '/guide/([a-z0-9-]+)'")
HREF_DIAG = re.compile(r"href: '/diagnosis/([a-z0-9-]+)'")
CTA_LINK = re.compile(r"link: '(/[^']*)'")
DOMAIN_ID = re.compile(r"^\s*(?://.*)?\{\s*id: '([a-z0-9-]+)'", re.M)


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
    # DOMAINS 배열 블록만 추출 (파일 내 다른 객체 리터럴 오검출 방지)
    m = re.search(r"export const DOMAINS: DomainMeta\[\] = \[(.*?)\n\];", src, re.S)
    if not m:
        raise SystemExit('ERROR DOMAINS 배열을 찾지 못함: %s' % path)
    return re.findall(r"id: '([a-z0-9-]+)'", m.group(1))


def load_spokes():
    """스포크 객체를 (domain, slug, file, line, hrefs, cta_link) 로 파싱."""
    objs = []
    for fp in sorted(glob.glob(os.path.join(SPOKE_DIR, '*.ts'))):
        lines = strip_comments_keep_lines(open(fp, encoding='utf-8').read()).split('\n')
        starts = [i for i, l in enumerate(lines) if DOM_LINE.match(l)] + [len(lines)]
        for n in range(len(starts) - 1):
            lo, hi = starts[n], starts[n + 1]
            dom = DOM_LINE.match(lines[lo]).group(1)
            sm = next((SLUG_LINE.match(l) for l in lines[lo:hi] if SLUG_LINE.match(l)), None)
            if not sm:
                continue
            hrefs, hubs, diags = [], [], []
            for j in range(lo, hi):
                for d, s in HREF_SPOKE.findall(lines[j]):
                    hrefs.append((d, s, j + 1))
                for d in HREF_HUB.findall(lines[j]):
                    hubs.append((d, j + 1))
                for d in HREF_DIAG.findall(lines[j]):
                    diags.append((d, j + 1))
            cm = CTA_LINK.search('\n'.join(lines[lo:hi]))
            objs.append({
                'domain': dom, 'slug': sm.group(1),
                'file': os.path.relpath(fp, ROOT).replace('\\', '/'), 'line': lo + 1,
                'hrefs': hrefs, 'hubs': hubs, 'diags': diags,
                'cta': cm.group(1) if cm else None,
            })
    return objs


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--verbose', action='store_true', help='위반 전량 출력')
    ap.add_argument('--json', metavar='PATH', help='결과를 JSON 으로 저장')
    ap.add_argument('--warn-as-error', action='store_true', help='경고도 실패로 취급')
    args = ap.parse_args()

    hub_ids = read_domain_ids(DOMAINS_TS)
    client_ids = read_domain_ids(DOMAINS_CLIENT_TS)
    HUBS = set(hub_ids)

    objs = load_spokes()
    routes = {(o['domain'], o['slug']) for o in objs}
    redirects = load_redirect_sources(NEXT_CONFIG)

    errors: dict[str, list] = defaultdict(list)
    warns: dict[str, list] = defaultdict(list)

    # E4 duplicate-route
    for key, cnt in Counter((o['domain'], o['slug']) for o in objs).items():
        if cnt > 1:
            errors['E4 duplicate-route'].append(
                '/guide/%s/%s 가 %d번 정의됨 (generateStaticParams 충돌)' % (key[0], key[1], cnt))

    # E2 domain-without-hub
    for dom, cnt in sorted(Counter(o['domain'] for o in objs).items()):
        if dom not in HUBS:
            errors['E2 domain-without-hub'].append(
                "domain '%s' 가 DOMAINS 에 없음 → /guide/%s 및 소속 스포크 %d개가 하드 404"
                % (dom, dom, cnt))

    # E6 domains-desync
    only_server = sorted(HUBS - set(client_ids))
    only_client = sorted(set(client_ids) - HUBS)
    if only_server or only_client:
        errors['E6 domains-desync'].append(
            'domains.ts 만: %s / domains-client.ts 만: %s' % (only_server or '-', only_client or '-'))

    # 인바운드 집계 + E1/E3/E5/W1/W2
    inbound: Counter = Counter()
    for o in objs:
        seen = Counter()
        for d, s, ln in o['hrefs']:
            inbound[(d, s)] += 1
            seen[(d, s)] += 1
            if (d, s) not in routes:
                # 제거된 스포크라도 301 이 있으면 사용자에겐 안 깨진다 → 경고로만.
                if '/guide/%s/%s' % (d, s) in redirects:
                    warns['W4 redirected-href'].append(
                        '%s:%d  %s → /guide/%s/%s (제거됨, 301 경유)' % (o['file'], ln, o['slug'], d, s))
                else:
                    errors['E1 broken-href'].append(
                        '%s:%d  %s → /guide/%s/%s (타깃 없음)' % (o['file'], ln, o['slug'], d, s))
            elif d not in HUBS:
                errors['E1 broken-href'].append(
                    '%s:%d  %s → /guide/%s/%s (도메인에 허브 없음 → 404)' % (o['file'], ln, o['slug'], d, s))
            elif (d, s) == (o['domain'], o['slug']):
                warns['W1 self-link'].append('%s:%d  %s 가 자기 자신을 링크' % (o['file'], ln, o['slug']))
        for key, c in seen.items():
            if c > 1:
                warns['W2 dup-link-in-page'].append(
                    '%s  %s 가 /guide/%s/%s 를 %d번 링크' % (o['file'], o['slug'], key[0], key[1], c))
        for d, ln in o['hubs']:
            if d not in HUBS:
                errors['E3 broken-hub-href'].append(
                    '%s:%d  %s → /guide/%s (허브 없음)' % (o['file'], ln, o['slug'], d))
        for d, ln in o['diags']:
            if d not in HUBS:
                errors['E5 broken-route-href'].append(
                    '%s:%d  %s → /diagnosis/%s (도메인 무효)' % (o['file'], ln, o['slug'], d))
        # cta.link 도 같은 규칙으로 검사
        if o['cta']:
            m = re.match(r'^/guide/([a-z0-9-]+)/([a-z0-9-]+)$', o['cta'])
            mh = re.match(r'^/guide/([a-z0-9-]+)$', o['cta'])
            md = re.match(r'^/(?:diagnosis)/([a-z0-9-]+)$', o['cta'])
            mc = re.match(r'^/chat\?domain=([a-z0-9-]+)$', o['cta'])
            if m and (m.group(1), m.group(2)) not in routes:
                errors['E1 broken-href'].append(
                    '%s  %s cta.link → %s (타깃 없음)' % (o['file'], o['slug'], o['cta']))
            elif mh and mh.group(1) not in HUBS:
                errors['E3 broken-hub-href'].append(
                    '%s  %s cta.link → %s (허브 없음)' % (o['file'], o['slug'], o['cta']))
            elif md and md.group(1) not in HUBS:
                errors['E5 broken-route-href'].append(
                    '%s  %s cta.link → %s (도메인 무효)' % (o['file'], o['slug'], o['cta']))
            elif mc and mc.group(1) not in HUBS:
                errors['E5 broken-route-href'].append(
                    '%s  %s cta.link → %s (도메인 무효)' % (o['file'], o['slug'], o['cta']))

    orphans = [o for o in objs if inbound.get((o['domain'], o['slug']), 0) == 0]
    for o in orphans:
        warns['W3 orphan'].append('%s  /guide/%s/%s' % (o['file'], o['domain'], o['slug']))

    n_err = sum(len(v) for v in errors.values())
    # W3(고아)·W4(301 경유)는 '깨짐'이 아니라 개선 항목이라 --warn-as-error 대상에서 뺀다.
    n_warn_hard = sum(len(v) for k, v in warns.items()
                      if not (k.startswith('W3') or k.startswith('W4')))

    print('=' * 72)
    print('내부링크·라우트 무결성 게이트')
    print('=' * 72)
    print('스포크 %d개 / 라우트 %d개 / 허브 도메인 %d개 / 내부링크 %d개'
          % (len(objs), len(routes), len(HUBS), sum(inbound.values())))
    print()
    if n_err == 0:
        print('[OK] 에러 0건')
    else:
        print('[FAIL] 에러 %d건' % n_err)
    for k in sorted(errors):
        print('  %-24s %d건' % (k, len(errors[k])))
        show = errors[k] if args.verbose else errors[k][:5]
        for s in show:
            print('      - %s' % s)
        if not args.verbose and len(errors[k]) > 5:
            print('      ... +%d건 (--verbose)' % (len(errors[k]) - 5))
    print()
    print('경고')
    for k in sorted(warns):
        print('  %-24s %d건' % (k, len(warns[k])))
        if args.verbose and not k.startswith('W3'):  # 고아 1,600여 건은 전량 출력하지 않는다
            for s in warns[k]:
                print('      - %s' % s)
    if not warns:
        print('  없음')

    if args.json:
        os.makedirs(os.path.dirname(os.path.abspath(args.json)) or '.', exist_ok=True)
        json.dump({
            'spokes': len(objs), 'routes': len(routes), 'hubs': len(HUBS),
            'internal_links': sum(inbound.values()),
            'errors': {k: v for k, v in errors.items()},
            'error_count': n_err,
            'warn_counts': {k: len(v) for k, v in warns.items()},
            'orphans': len(orphans),
        }, open(args.json, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print('\nJSON 저장: %s' % args.json)

    if n_err:
        return 1
    if args.warn_as_error and n_warn_hard:
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
