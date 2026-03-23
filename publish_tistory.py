#!/usr/bin/env python3
"""
로앤가이드 티스토리 블로그 자동 즉시발행 스크립트
- Playwright 기반
- content/tistory/*.md → 티스토리 에디터 → 즉시 공개 발행
- 카카오 로그인 (쿠키 재사용)

사용법:
  python publish_tistory.py --dry-run
  python publish_tistory.py
  python publish_tistory.py --files content/tistory/stalking-police-no-help.md
"""

import asyncio
import argparse
import json
import os
import re
import glob
import random
from datetime import datetime
from pathlib import Path

try:
    from playwright.async_api import async_playwright
except ImportError:
    print("playwright 설치 필요: py -m pip install playwright && py -m playwright install chromium")
    exit(1)

# ── 설정 ──────────────────────────────────────────────
BLOG_URL = "https://lawnguide.tistory.com"
CONTENT_DIR = "./content/tistory"
COOKIE_FILE = "tistory_cookies_lawnguide.json"
RESULTS_FILE = f"publish_tistory_lawnguide_results_{datetime.now().strftime('%Y%m%d_%H%M')}.json"
DAILY_LIMIT = 7

# Human-like delays (ms)
BODY_DELAY_MIN = 30
BODY_DELAY_MAX = 80
TAG_DELAY_MIN = 40
TAG_DELAY_MAX = 80
POST_PUBLISH_WAIT_MIN = 45000
POST_PUBLISH_WAIT_MAX = 90000


# ── 마크다운 → 순수 텍스트 변환 ──────────────────────
def md_to_plain_text(md_text: str) -> str:
    """마크다운 문법을 제거하고 순수 텍스트로 변환"""
    text = md_text

    text = re.sub(r'^#{1,6}\s+', '', text, flags=re.MULTILINE)
    text = re.sub(r'\*\*\*(.+?)\*\*\*', r'\1', text)
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    text = re.sub(r'\*(.+?)\*', r'\1', text)
    text = re.sub(r'___(.+?)___', r'\1', text)
    text = re.sub(r'__(.+?)__', r'\1', text)
    text = re.sub(r'_(.+?)_', r'\1', text)
    text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)
    text = re.sub(r'!\[([^\]]*)\]\([^\)]+\)', r'\1', text)
    text = re.sub(r'`(.+?)`', r'\1', text)
    text = re.sub(r'```[\s\S]*?```', '', text)

    lines = text.split('\n')
    converted_lines = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if re.match(r'^\|[\s\-:]+\|', line):
            i += 1
            continue
        if line.startswith('|') and line.endswith('|'):
            cells = [c.strip() for c in line.strip('|').split('|')]
            cells = [c for c in cells if c]
            converted_lines.append(' / '.join(cells))
        else:
            converted_lines.append(lines[i])
        i += 1
    text = '\n'.join(converted_lines)

    text = re.sub(r'^[\s]*[-*+]\s+', '• ', text, flags=re.MULTILINE)
    text = re.sub(r'^[\s]*\d+\.\s+', '', text, flags=re.MULTILINE)
    text = re.sub(r'^[\s]*[-*_]{3,}[\s]*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'^>\s?', '', text, flags=re.MULTILINE)
    text = re.sub(r'\n{3,}', '\n\n', text)

    return text.strip()


# ── md 파일 파싱 (YAML frontmatter 기반) ──────────────
def parse_md_file(filepath: str) -> dict:
    """content/tistory/*.md 파일에서 제목, 본문, 태그 추출"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # YAML frontmatter 파싱 (yaml 모듈 없이 직접 파싱)
    title = ""
    tags = []
    body = content

    fm_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if fm_match:
        fm_text = fm_match.group(1)

        # title 추출
        t_match = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', fm_text, re.MULTILINE)
        if t_match:
            title = t_match.group(1).strip()

        # tags 추출: tags: ["a", "b", "c"] 형식
        tags_match = re.search(r'^tags:\s*\[(.+?)\]', fm_text, re.MULTILINE)
        if tags_match:
            tags = [t.strip().strip('"\'') for t in tags_match.group(1).split(',')]

        # category fallback
        if not tags:
            cat_match = re.search(r'^category:\s*["\']?(.+?)["\']?\s*$', fm_text, re.MULTILINE)
            if cat_match:
                tags = [cat_match.group(1).strip()]

        body = content[fm_match.end():]

    # title fallback
    if not title:
        h_match = re.search(r'^#{1,2}\s+(.+)', body, re.MULTILINE)
        if h_match:
            title = h_match.group(1).strip()
        else:
            title = os.path.basename(filepath).replace('.md', '').replace('-', ' ')

    body = md_to_plain_text(body)
    # 기존 CTA 텍스트 제거 (publish 시 새로 삽입)
    body = re.sub(r'📌\s*로앤가이드에서 내 상황 정리해보기\s*\n*', '', body)
    body = re.sub(r'https?://lawnguide\.co\.kr\s*', '', body)
    body = re.sub(r'\n{3,}', '\n\n', body).strip()

    title = re.sub(r'\*\*(.+?)\*\*', r'\1', title)
    title = re.sub(r'\*(.+?)\*', r'\1', title)
    title = title.strip('"\'""''')

    tags = [t.strip() for t in tags if t.strip()][:10]

    return {
        'title': title[:100],
        'body': body,
        'tags': tags,
        'filename': os.path.basename(filepath)
    }


# ── 팝업 닫기 ────────────────────────────────────────
async def dismiss_popups(page):
    """티스토리 에디터 팝업 자동 닫기"""
    try:
        buttons = await page.query_selector_all('button')
        for btn in buttons:
            text = (await btn.inner_text()).strip()
            if text in ['닫기', '취소', '아니오', '아니요']:
                if await btn.is_visible():
                    await btn.click()
                    print(f"    팝업 닫음: {text}")
                    await page.wait_for_timeout(random.randint(500, 1000))
                    return True
    except Exception:
        pass
    return False


async def dismiss_all_popups(page, max_attempts=3):
    for _ in range(max_attempts):
        closed = await dismiss_popups(page)
        if not closed:
            break
        await page.wait_for_timeout(300)


# ── 태그 입력 ────────────────────────────────────────
async def input_tags(page, tags: list) -> bool:
    """태그 입력: input#tagText"""
    if not tags:
        return True

    tag_input = None
    tag_selectors = [
        'input#tagText',
        'input[title="태그"]',
        'input[placeholder*="태그"]',
        '.tag_input input',
    ]

    for selector in tag_selectors:
        try:
            elem = await page.query_selector(selector)
            if elem and await elem.is_visible():
                tag_input = elem
                break
        except Exception:
            continue

    if not tag_input:
        print("    태그 입력 필드 못 찾음 (발행 계속)")
        return False

    entered = 0
    for tag in tags[:10]:
        try:
            await tag_input.click()
            await page.wait_for_timeout(random.randint(200, 400))
            await tag_input.type(tag, delay=random.randint(TAG_DELAY_MIN, TAG_DELAY_MAX))
            await page.keyboard.press('Enter')
            await page.wait_for_timeout(random.randint(500, 1000))
            entered += 1
        except Exception:
            continue

    print(f"    태그 {entered}/{len(tags)}개 입력")
    return entered > 0


# ── CTA 링크 삽입 ────────────────────────────────────
async def insert_cta_link(page) -> bool:
    """본문 끝에 CTA 소개글 + OG 카드 링크 삽입"""
    try:
        cta_lines = [
            "",
            "\u2501" * 20,
            "",
            "법률 문제, 어디서부터 시작해야 할지 막막하신가요?",
            "로앤가이드에서 1분이면 지금 할 일과 준비서류, 변호사를 안내해드립니다.",
            "",
        ]
        for line in cta_lines:
            if line:
                await page.keyboard.type(line, delay=random.randint(BODY_DELAY_MIN, BODY_DELAY_MAX))
            await page.keyboard.press('Enter')
            await page.wait_for_timeout(random.randint(200, 400))

        # URL 단독 줄 (티스토리 OG 카드 자동 생성)
        await page.keyboard.type("https://lawnguide.co.kr", delay=random.randint(30, 60))
        await page.wait_for_timeout(300)
        await page.keyboard.press('Enter')
        await page.wait_for_timeout(random.randint(1000, 2000))

        # 푸터
        await page.keyboard.press('Enter')
        await page.wait_for_timeout(300)
        cta_footer = "31개 법률 분야 무료 진단 · 변호사 만나기 전 필수 체크"
        await page.keyboard.type(cta_footer, delay=random.randint(BODY_DELAY_MIN, BODY_DELAY_MAX))
        await page.wait_for_timeout(random.randint(300, 500))

        print("    CTA 링크 삽입 완료: https://lawnguide.co.kr")
        return True

    except Exception as e:
        print(f"    CTA 삽입 실패: {str(e)[:50]} (발행 계속)")
        return False


# ── 글 작성 + 즉시 발행 ──────────────────────────────
async def write_and_publish(page, post: dict) -> dict:
    """단일 글 작성 및 즉시 공개 발행"""
    result = {
        'filename': post['filename'],
        'title': post['title'],
        'status': 'unknown',
        'error': None
    }

    try:
        # 글쓰기 페이지 이동
        write_url = f"{BLOG_URL}/manage/newpost/?type=post"
        try:
            await page.goto(write_url, wait_until='domcontentloaded', timeout=60000)
        except Exception:
            print("    페이지 로딩 재시도...")
            await page.wait_for_timeout(2000)
            await page.goto(write_url, wait_until='commit', timeout=60000)
        await page.wait_for_timeout(random.randint(4000, 6000))

        # 팝업 닫기
        await dismiss_all_popups(page)
        await page.wait_for_timeout(random.randint(500, 1000))

        # === 1. 제목 입력 ===
        title_entered = False
        for sel in ['textarea#post-title-inp', 'textarea[placeholder*="제목"]', '#post-title-inp']:
            try:
                title_input = await page.query_selector(sel)
                if title_input and await title_input.is_visible():
                    await title_input.click()
                    await page.wait_for_timeout(300)
                    await title_input.fill(post['title'])
                    title_entered = True
                    print(f"    제목 입력: {post['title'][:50]}...")
                    break
            except Exception:
                continue

        if not title_entered:
            print("    제목 입력 실패")

        await page.wait_for_timeout(random.randint(500, 1000))

        # === 2. 본문 입력 (3단계 시도) ===
        body_entered = False
        body_html = post['body'].replace('\n', '<br>\n')

        # 1순위: TinyMCE iframe → innerHTML
        frame = None
        try:
            frame_element = await page.query_selector('iframe#editor-tistory-ifr')
            if frame_element:
                frame = await frame_element.content_frame()
            if not frame:
                frame = page.frame('editor-tistory-ifr')
        except Exception:
            pass

        if frame:
            try:
                char_count = await frame.evaluate("""
                    (html) => {
                        document.body.innerHTML = html;
                        return document.body.innerText.length;
                    }
                """, body_html)
                if char_count and char_count > 0:
                    body_entered = True
                    print(f"    본문 입력 완료 - iframe innerHTML ({char_count}자)")
            except Exception as e:
                print(f"    [DEBUG] iframe innerHTML 실패: {str(e)[:50]}")

        # 2순위: contenteditable div
        if not body_entered:
            try:
                char_count = await page.evaluate("""
                    (html) => {
                        const editor = document.querySelector('#kakao-editor-container [contenteditable="true"]');
                        if (editor) {
                            editor.innerHTML = html;
                            return editor.innerText.length;
                        }
                        const divs = document.querySelectorAll('[contenteditable="true"]');
                        for (const d of divs) {
                            if (d.offsetParent !== null && d.clientHeight > 100) {
                                d.innerHTML = html;
                                return d.innerText.length;
                            }
                        }
                        return 0;
                    }
                """, body_html)
                if char_count and char_count > 0:
                    body_entered = True
                    print(f"    본문 입력 완료 - contenteditable ({char_count}자)")
            except Exception as e:
                print(f"    [DEBUG] contenteditable 실패: {str(e)[:50]}")

        # 3순위: 클릭 + keyboard.type
        if not body_entered:
            try:
                clicked = False
                for sel in ['.post-editor', '#content', '[contenteditable="true"]', '.mce-content-body']:
                    try:
                        elem = await page.query_selector(sel)
                        if elem and await elem.is_visible():
                            await elem.click()
                            clicked = True
                            break
                    except Exception:
                        continue

                if not clicked and frame:
                    body_elem = await frame.query_selector('body#tinymce, body')
                    if body_elem:
                        await body_elem.click()
                        clicked = True

                if clicked:
                    await page.wait_for_timeout(300)
                    lines = post['body'].split('\n')
                    total_chars = 0
                    for i, line in enumerate(lines):
                        if line.strip():
                            await page.keyboard.type(line, delay=random.randint(BODY_DELAY_MIN, BODY_DELAY_MAX))
                            total_chars += len(line)
                        if i < len(lines) - 1:
                            await page.keyboard.press('Enter')
                            await page.wait_for_timeout(random.randint(200, 500))
                    if total_chars > 0:
                        body_entered = True
                        print(f"    본문 입력 완료 - keyboard ({total_chars}자)")
            except Exception as e:
                print(f"    [DEBUG] keyboard 입력 실패: {str(e)[:50]}")

        if not body_entered:
            print("    본문 입력 실패 (3가지 방법 모두)")

        await page.wait_for_timeout(random.randint(1000, 2000))

        # === CTA 삽입 ===
        if body_entered and frame:
            try:
                body_elem = await frame.query_selector('body#tinymce, body')
                if body_elem:
                    await body_elem.click()
                    await page.wait_for_timeout(300)
                    await page.keyboard.press('Control+End')
                    await page.wait_for_timeout(300)
            except Exception:
                pass
        await insert_cta_link(page)
        await page.wait_for_timeout(random.randint(500, 1000))

        # 팝업 체크
        await dismiss_all_popups(page)

        # === 3. 태그 입력 ===
        await input_tags(page, post.get('tags', []))
        await page.wait_for_timeout(random.randint(300, 600))

        # === 4. 완료 버튼 → 발행 팝업 ===
        publish_btn = await page.query_selector('button#publish-layer-btn')
        if not publish_btn:
            buttons = await page.query_selector_all('button')
            for btn in buttons:
                text = (await btn.inner_text()).strip()
                if text in ['완료', '발행', '저장']:
                    if await btn.is_visible():
                        publish_btn = btn
                        break

        if publish_btn:
            await publish_btn.click()
            print("    발행 팝업 열기")
            await page.wait_for_timeout(random.randint(2000, 3000))
        else:
            print("    완료 버튼 못 찾음")
            result['status'] = 'failed'
            return result

        # === 5. 공개 발행 버튼 클릭 (최대 3회 시도) ===
        final_clicked = False
        for attempt in range(3):
            # 1순위: button#publish-btn
            try:
                elem = await page.query_selector('button#publish-btn')
                if elem and await elem.is_visible():
                    await elem.click()
                    final_clicked = True
                    break
            except Exception:
                pass

            # 2순위: button.btn-default:has-text("공개 발행")
            try:
                buttons = await page.query_selector_all('button.btn-default')
                for btn in buttons:
                    text = (await btn.inner_text()).strip()
                    if '공개 발행' in text or '공개발행' in text:
                        if await btn.is_visible():
                            await btn.click()
                            final_clicked = True
                            break
                if final_clicked:
                    break
            except Exception:
                pass

            # 3순위: button[type="submit"].btn-default
            try:
                elem = await page.query_selector('button[type="submit"].btn-default')
                if elem and await elem.is_visible():
                    await elem.click()
                    final_clicked = True
                    break
            except Exception:
                pass

            if attempt < 2:
                print(f"    공개 발행 버튼 재시도 ({attempt + 2}/3)...")
                await page.wait_for_timeout(random.randint(1500, 2500))

        if final_clicked:
            print("    발행 완료!")
            await page.wait_for_timeout(random.randint(3000, 5000))
            result['status'] = 'published'
        else:
            print("    발행 버튼 못 찾음")
            result['status'] = 'failed'

        # === 6. 발행 후 새 글쓰기 페이지 이동 ===
        await page.wait_for_timeout(1000)
        await dismiss_all_popups(page)
        await page.wait_for_timeout(random.randint(1000, 2000))

        try:
            next_url = f"{BLOG_URL}/manage/newpost/?type=post"
            await page.goto(next_url, wait_until='domcontentloaded', timeout=30000)
        except Exception:
            try:
                await page.goto(next_url, wait_until='commit', timeout=30000)
            except Exception:
                pass
        await page.wait_for_timeout(random.randint(2000, 3000))

    except Exception as e:
        result['status'] = 'error'
        result['error'] = str(e)[:200]
        print(f"    에러: {str(e)[:100]}")

        try:
            await dismiss_all_popups(page)
        except Exception:
            pass

    return result


# ── 쿠키 관리 ────────────────────────────────────────
async def save_cookies(context):
    cookies = await context.cookies()
    with open(COOKIE_FILE, 'w') as f:
        json.dump(cookies, f)
    print("  쿠키 저장 완료 (다음부터 자동 로그인)")


async def load_cookies(context):
    if os.path.exists(COOKIE_FILE):
        with open(COOKIE_FILE, 'r') as f:
            cookies = json.load(f)
        await context.add_cookies(cookies)
        return True
    return False


# ── 메인 ────────────────────────────────────────────
async def main():
    global BLOG_URL, CONTENT_DIR

    parser = argparse.ArgumentParser(description='로앤가이드 티스토리 블로그 즉시 공개 발행')
    parser.add_argument('--content-dir', default=CONTENT_DIR, help='md 파일 폴더 경로')
    parser.add_argument('--blog-url', default=BLOG_URL, help='티스토리 블로그 URL')
    parser.add_argument('--dry-run', action='store_true', help='실제 발행하지 않고 파싱만 확인')
    parser.add_argument('--limit', type=int, default=DAILY_LIMIT, help=f'최대 발행 수 (기본: {DAILY_LIMIT})')
    parser.add_argument('--files', nargs='+', help='특정 파일만 발행')
    args = parser.parse_args()

    BLOG_URL = args.blog_url
    CONTENT_DIR = args.content_dir

    # 이전 results 파일에서 발행 완료된 파일명 로드 (중복 발행 방지)
    published_files = set()
    for rf in glob.glob("publish_tistory_lawnguide_results_*.json"):
        try:
            with open(rf, 'r', encoding='utf-8') as f:
                for item in json.load(f):
                    if item.get('status') == 'published':
                        published_files.add(item.get('filename', ''))
        except Exception:
            continue
    if published_files:
        print(f"이전 발행 기록: {len(published_files)}개 파일")

    # md 파일 수집
    if args.files:
        md_files = args.files
    else:
        md_files = sorted(glob.glob(os.path.join(CONTENT_DIR, '*.md')))

    # 중복 발행 방지: 이미 발행된 파일 스킵
    filtered = []
    for fp in md_files:
        fname = os.path.basename(fp)
        if fname in published_files:
            print(f"  ⏭️ 이미 발행됨: {fname}")
        else:
            filtered.append(fp)
    md_files = filtered

    # --limit 적용
    md_files = md_files[:args.limit]

    if not md_files:
        print(f"{CONTENT_DIR}에 md 파일이 없습니다.")
        return

    print(f"{len(md_files)}개 md 파일 발견")

    # 파싱
    posts = []
    for fp in md_files:
        post = parse_md_file(fp)
        posts.append(post)

    if args.dry_run:
        print(f"\n드라이런 모드 - 실제 발행하지 않습니다.\n")
        for i, post in enumerate(posts):
            print(f"  {post['filename']}")
            print(f"     제목: {post['title']}")
            print(f"     본문: {len(post['body'])}자")
            print(f"     태그: {', '.join(post['tags']) if post['tags'] else '(없음)'}")
            print()
        return

    # 실제 발행
    results = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=False,
            args=[
                '--disable-blink-features=AutomationControlled',
                '--no-sandbox',
                '--disable-popup-blocking',
                '--disable-notifications',
            ]
        )
        context = await browser.new_context(
            viewport={'width': 1280, 'height': 900},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
            permissions=['notifications'],
        )

        # navigator.webdriver 우회
        await context.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
            Object.defineProperty(navigator, 'languages', { get: () => ['ko-KR', 'ko', 'en-US', 'en'] });
            window.chrome = { runtime: {} };
        """)

        page = await context.new_page()

        # dialog 자동 수락
        async def _auto_accept_dialog(dialog):
            try:
                await dialog.accept()
            except Exception:
                pass

        page.on("dialog", _auto_accept_dialog)

        # 쿠키 로드
        cookie_loaded = await load_cookies(context)

        if cookie_loaded:
            try:
                await page.goto(BLOG_URL, wait_until='domcontentloaded', timeout=30000)
            except Exception:
                await page.goto(BLOG_URL, wait_until='commit', timeout=30000)
            await page.wait_for_timeout(3000)
            print("  저장된 쿠키로 로그인 시도...")

        # 로그인 확인
        write_url = f'{BLOG_URL}/manage/newpost/?type=post'
        try:
            await page.goto(write_url, wait_until='domcontentloaded', timeout=30000)
        except Exception:
            print("  페이지 로딩 재시도...")
            await page.wait_for_timeout(2000)
            await page.goto(write_url, wait_until='commit', timeout=30000)
        await page.wait_for_timeout(3000)

        if 'accounts.kakao.com' in page.url or 'tistory.com/auth' in page.url or 'login' in page.url.lower():
            print("\n  카카오 로그인이 필요합니다.")
            print("  브라우저에서 직접 로그인해주세요.")
            input("  로그인 완료 후 Enter 키를 누르세요...")
            await save_cookies(context)
        else:
            print("  로그인 상태 확인됨")

        print(f"\n{'='*50}")

        # 글 발행 루프
        for i, post in enumerate(posts):
            print(f"\n[{i+1}/{len(posts)}] {post['filename']}")

            result = await write_and_publish(page, post)
            results.append(result)

            status_icon = {'published': 'OK', 'failed': 'FAIL', 'error': 'ERR'}.get(result['status'], '?')
            print(f"  [{status_icon}] 결과: {result['status']}")

            # 결과 파일 저장
            with open(RESULTS_FILE, 'w', encoding='utf-8') as f:
                json.dump(results, f, ensure_ascii=False, indent=2)

            # 다음 글까지 대기 (45~90초)
            if i < len(posts) - 1:
                wait_ms = random.randint(POST_PUBLISH_WAIT_MIN, POST_PUBLISH_WAIT_MAX)
                print(f"  다음 글까지 {wait_ms // 1000}초 대기...")
                await page.wait_for_timeout(wait_ms)

        # 최종 결과
        print(f"\n{'='*50}")
        print(f"\n발행 결과:")
        status_counts = {}
        for r in results:
            status_counts[r['status']] = status_counts.get(r['status'], 0) + 1
        for status, count in status_counts.items():
            print(f"  {status}: {count}개")
        print(f"\n상세 결과: {RESULTS_FILE}")

        await browser.close()


if __name__ == '__main__':
    asyncio.run(main())
