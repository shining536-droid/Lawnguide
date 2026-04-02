#!/usr/bin/env python3
"""
베베플랜 티스토리 블로그 자동 즉시발행 스크립트
- Playwright 기반
- md 파일 → 티스토리 에디터 → 즉시 공개 발행
- 카카오 로그인 (쿠키 재사용)

사용법:
  python publish_tistory.py --dry-run
  python publish_tistory.py
  python publish_tistory.py --files content/tistory/0313-01-leave-18months.md
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
    print("❌ playwright 설치 필요: py -m pip install playwright && py -m playwright install chromium")
    exit(1)

# ── 설정 ──────────────────────────────────────────────
BLOG_URL = "https://bebeplan.tistory.com"
CONTENT_DIR = "./content/tistory"
COOKIE_FILE = "tistory_cookies.json"
RESULTS_FILE = f"tistory_results_{datetime.now().strftime('%Y%m%d_%H%M')}.json"

# Human-like delays (ms)
TITLE_DELAY_MIN = 40
TITLE_DELAY_MAX = 90
BODY_DELAY_MIN = 30
BODY_DELAY_MAX = 80
LINE_PAUSE_MIN = 200
LINE_PAUSE_MAX = 500
TAG_DELAY_MIN = 40
TAG_DELAY_MAX = 80
POST_PUBLISH_WAIT_MIN = 15000
POST_PUBLISH_WAIT_MAX = 30000


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


# ── md 파일 파싱 ──────────────────────────────────────
def parse_md_file(filepath: str) -> dict:
    """md 파일에서 제목, 본문, 태그 추출"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    title = ""
    body_lines = []
    tags = []

    section = 'header'
    body_started = False

    for i, line in enumerate(lines):
        stripped = line.strip()

        if section == 'header' and re.match(r'^#\s+(.+)', stripped):
            title = re.match(r'^#\s+(.+)', stripped).group(1).strip()
            continue

        if re.match(r'^(\*\*|#{1,4}\s*)제목\s*후보', stripped):
            section = 'title_candidates'
            continue

        if re.match(r'^(\*\*|#{1,4}\s*)태그(\*\*)?$', stripped) or stripped == '태그':
            section = 'tags_section'
            continue

        if re.match(r'^-{3,}$', stripped):
            section = 'body'
            body_started = True
            continue

        if section == 'title_candidates':
            if re.match(r'^\d+[.)]\s', stripped) or not stripped:
                continue
            if stripped.startswith('**') or stripped.startswith('#'):
                section = 'header'
                if re.match(r'^(\*\*|#{1,4}\s*)태그(\*\*)?$', stripped) or stripped == '태그':
                    section = 'tags_section'
                    continue
            continue

        if section == 'tags_section':
            if stripped and not re.match(r'^-{3,}$', stripped):
                found_tags = re.findall(r'#(\S+)', stripped)
                if found_tags:
                    tags.extend(found_tags)
                continue
            elif re.match(r'^-{3,}$', stripped):
                section = 'body'
                body_started = True
                continue
            continue

        if body_started:
            body_lines.append(line)

        if section == 'header' and not stripped:
            continue

    if not title:
        for line in lines:
            h_match = re.match(r'^#{1,2}\s+(.+)', line.strip())
            if h_match:
                title = h_match.group(1).strip()
                break

    if not title:
        title = os.path.basename(filepath).replace('.md', '').replace('-', ' ')

    body = '\n'.join(body_lines).strip()
    body = md_to_plain_text(body)

    body = re.sub(r'^제목\s*후보\s*\d*개?\s*\n?', '', body, flags=re.MULTILINE)
    body = re.sub(r'^(?:#\S+\s*)+$', '', body, flags=re.MULTILINE)
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
                    print(f"    🔕 팝업 닫음: {text}")
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
        print("    ⚠️ 태그 입력 필드 못 찾음 (발행 계속)")
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

    print(f"    🏷️ 태그 {entered}/{len(tags)}개 입력")
    return entered > 0


# ── CTA 링크 삽입 ────────────────────────────────────
async def insert_cta_link(page) -> bool:
    """본문 끝에 CTA 소개글 + 링크 삽입"""
    try:
        cta_intro = [
            "",
            "\u2501" * 20,
            "",
            "육아휴직 급여, 대출 상환, 연말정산까지 한번에 계산해보세요.",
            "베베플랜에서 1분이면 내 상황에 맞는 결과를 확인할 수 있습니다.",
            "",
        ]
        for line in cta_intro:
            if line:
                await page.keyboard.type(line, delay=random.randint(BODY_DELAY_MIN, BODY_DELAY_MAX))
            await page.keyboard.press('Enter')
            await page.wait_for_timeout(random.randint(200, 400))

        await page.keyboard.type("https://bebeplan.kr", delay=random.randint(30, 60))
        await page.wait_for_timeout(300)
        await page.keyboard.press('Enter')
        await page.wait_for_timeout(random.randint(1000, 2000))

        await page.keyboard.press('Enter')
        await page.wait_for_timeout(300)
        cta_footer = "육아휴직 급여 계산기 · 신생아 특례대출 시뮬레이터 · 동네 추천"
        await page.keyboard.type(cta_footer, delay=random.randint(BODY_DELAY_MIN, BODY_DELAY_MAX))
        await page.wait_for_timeout(random.randint(300, 500))

        print("    🔗 CTA 링크 삽입 완료: https://bebeplan.kr")
        return True

    except Exception as e:
        print(f"    ⚠️ CTA 삽입 실패: {str(e)[:50]} (발행 계속)")
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
            print("    ⚠️ 페이지 로딩 재시도...")
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
                    print(f"    📝 제목 입력: {post['title'][:50]}...")
                    break
            except Exception:
                continue

        if not title_entered:
            print("    ❌ 제목 입력 실패")

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
                    print(f"    📄 본문 입력 완료 - iframe innerHTML ({char_count}자)")
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
                    print(f"    📄 본문 입력 완료 - contenteditable ({char_count}자)")
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
                            await page.wait_for_timeout(random.randint(LINE_PAUSE_MIN, LINE_PAUSE_MAX))
                    if total_chars > 0:
                        body_entered = True
                        print(f"    📄 본문 입력 완료 - keyboard ({total_chars}자)")
            except Exception as e:
                print(f"    [DEBUG] keyboard 입력 실패: {str(e)[:50]}")

        if not body_entered:
            print("    ❌ 본문 입력 실패 (3가지 방법 모두)")

        await page.wait_for_timeout(random.randint(1000, 2000))

        # === 3. CTA 링크 삽입 ===
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

        # === 4. 태그 입력 ===
        await input_tags(page, post.get('tags', []))
        await page.wait_for_timeout(random.randint(300, 600))

        # === 5. 완료 버튼 → 발행 팝업 ===
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
            print("    📤 발행 팝업 열기")
            await page.wait_for_timeout(random.randint(1500, 2500))
        else:
            print("    ❌ 완료 버튼 못 찾음")
            result['status'] = 'failed'
            return result

        # === 6. 공개 발행 버튼 클릭 ===
        final_clicked = False
        for sel in ['button.btn_publish', 'button.btn-publish']:
            try:
                elem = await page.query_selector(sel)
                if elem and await elem.is_visible():
                    await elem.click()
                    final_clicked = True
                    break
            except Exception:
                continue

        if not final_clicked:
            try:
                buttons = await page.query_selector_all('button')
                for btn in buttons:
                    text = (await btn.inner_text()).strip()
                    if '발행' in text or '공개' in text:
                        if await btn.is_visible():
                            await btn.click()
                            final_clicked = True
                            break
            except Exception:
                pass

        if final_clicked:
            print("    ✅ 발행 완료!")
            await page.wait_for_timeout(random.randint(2000, 3000))
            result['status'] = 'published'
        else:
            print("    ⚠️ 발행 버튼 못 찾음")
            result['status'] = 'failed'

        # === 7. 발행 후 새 글쓰기 페이지 이동 ===
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
        print(f"    ❌ 에러: {str(e)[:100]}")

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
    print("  ✅ 쿠키 저장 완료 (다음부터 자동 로그인)")


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

    parser = argparse.ArgumentParser(description='티스토리 블로그 즉시 공개 발행')
    parser.add_argument('--content-dir', default=CONTENT_DIR, help='md 파일 폴더 경로')
    parser.add_argument('--blog-url', default=BLOG_URL, help='티스토리 블로그 URL')
    parser.add_argument('--dry-run', action='store_true', help='실제 발행하지 않고 파싱만 확인')
    parser.add_argument('--limit', type=int, default=7, help='최대 발행 수 (기본: 7)')
    parser.add_argument('--files', nargs='+', help='특정 파일만 발행')
    args = parser.parse_args()

    BLOG_URL = args.blog_url
    CONTENT_DIR = args.content_dir

    # md 파일 수집
    if args.files:
        md_files = args.files
    else:
        md_files = sorted(glob.glob(os.path.join(CONTENT_DIR, '*.md')))

    # --limit 적용
    md_files = md_files[:args.limit]

    if not md_files:
        print(f"❌ {CONTENT_DIR}에 md 파일이 없습니다.")
        return

    print(f"📂 {len(md_files)}개 md 파일 발견")

    # 파싱
    posts = []
    for fp in md_files:
        post = parse_md_file(fp)
        posts.append(post)

    if args.dry_run:
        print(f"\n🔍 드라이런 모드 — 실제 발행하지 않습니다.\n")
        for i, post in enumerate(posts):
            print(f"  📄 {post['filename']}")
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
            print("  🔑 저장된 쿠키로 로그인 시도...")

        # 로그인 확인
        write_url = f'{BLOG_URL}/manage/newpost/?type=post'
        try:
            await page.goto(write_url, wait_until='domcontentloaded', timeout=30000)
        except Exception:
            print("  ⚠️ 페이지 로딩 재시도...")
            await page.wait_for_timeout(2000)
            await page.goto(write_url, wait_until='commit', timeout=30000)
        await page.wait_for_timeout(3000)

        if 'accounts.kakao.com' in page.url or 'tistory.com/auth' in page.url or 'login' in page.url.lower():
            print("\n  🔐 카카오 로그인이 필요합니다.")
            print("  브라우저에서 직접 로그인해주세요.")
            input("  로그인 완료 후 Enter 키를 누르세요...")
            await save_cookies(context)
        else:
            print("  ✅ 로그인 상태 확인됨")

        print(f"\n{'='*50}")

        # 글 발행 루프
        for i, post in enumerate(posts):
            print(f"\n[{i+1}/{len(posts)}] {post['filename']}")

            result = await write_and_publish(page, post)
            results.append(result)

            status_emoji = {'published': '✅', 'failed': '❌', 'error': '❌'}.get(result['status'], '❓')
            print(f"  {status_emoji} 결과: {result['status']}")

            # 결과 파일 저장
            with open(RESULTS_FILE, 'w', encoding='utf-8') as f:
                json.dump(results, f, ensure_ascii=False, indent=2)

            # 다음 글까지 대기
            if i < len(posts) - 1:
                wait_ms = random.randint(POST_PUBLISH_WAIT_MIN, POST_PUBLISH_WAIT_MAX)
                print(f"  ⏳ 다음 글까지 {wait_ms // 1000}초 대기...")
                await page.wait_for_timeout(wait_ms)

        # 최종 결과
        print(f"\n{'='*50}")
        print(f"\n📊 발행 결과:")
        status_counts = {}
        for r in results:
            status_counts[r['status']] = status_counts.get(r['status'], 0) + 1
        for status, count in status_counts.items():
            print(f"  {status}: {count}개")
        print(f"\n📄 상세 결과: {RESULTS_FILE}")

        await browser.close()


if __name__ == '__main__':
    asyncio.run(main())
