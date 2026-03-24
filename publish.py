#!/usr/bin/env python3
"""
베베플랜 네이버 블로그 자동 예약발행 스크립트 v2.1
- 팝업 자동 닫기 (임시저장 불러오기 등)
- 발행 버튼 다중 셀렉터 시도
- 비밀글 설정 다중 셀렉터 시도
- 마크다운 → 순수 텍스트 변환 (표/링크/볼드 등 제거)
- human-like 타이핑 딜레이
- 발행 결과 JSON 로그
"""

import asyncio
import argparse
import json
import os
import re
import glob
import random
from datetime import datetime, timedelta
from pathlib import Path

try:
    from playwright.async_api import async_playwright
except ImportError:
    print("❌ playwright 설치 필요: py -m pip install playwright && py -m playwright install chromium")
    exit(1)

# ── 설정 ──────────────────────────────────────────────
BLOG_ID = "good_daddy_"
CONTENT_DIR = "./content/naver-blog"
THUMBNAIL_DIR = "./content/thumbnails"
COOKIE_FILE = "naver_cookies.json"
RESULTS_FILE = f"publish_results_{datetime.now().strftime('%Y%m%d_%H%M')}.json"

DAILY_LIMIT = 7
START_HOUR = 9
END_HOUR = 21
INTERVAL_HOURS = 2

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

    # 헤더 제거 (### 제목 → 제목)
    text = re.sub(r'^#{1,6}\s+', '', text, flags=re.MULTILINE)

    # 볼드/이탤릭 제거
    text = re.sub(r'\*\*\*(.+?)\*\*\*', r'\1', text)
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    text = re.sub(r'\*(.+?)\*', r'\1', text)
    text = re.sub(r'___(.+?)___', r'\1', text)
    text = re.sub(r'__(.+?)__', r'\1', text)
    text = re.sub(r'_(.+?)_', r'\1', text)

    # 링크 [텍스트](url) → 텍스트
    text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)

    # 이미지 제거
    text = re.sub(r'!\[([^\]]*)\]\([^\)]+\)', r'\1', text)

    # 인라인 코드
    text = re.sub(r'`(.+?)`', r'\1', text)

    # 코드블록 제거
    text = re.sub(r'```[\s\S]*?```', '', text)

    # 표를 텍스트로 변환
    lines = text.split('\n')
    converted_lines = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        # 표 구분선 (|---|---|) 스킵
        if re.match(r'^\|[\s\-:]+\|', line):
            i += 1
            continue
        # 표 행 (| a | b |) → a / b
        if line.startswith('|') and line.endswith('|'):
            cells = [c.strip() for c in line.strip('|').split('|')]
            cells = [c for c in cells if c]
            converted_lines.append(' / '.join(cells))
        else:
            converted_lines.append(lines[i])
        i += 1
    text = '\n'.join(converted_lines)

    # 리스트 마커 제거
    text = re.sub(r'^[\s]*[-*+]\s+', '• ', text, flags=re.MULTILINE)
    text = re.sub(r'^[\s]*\d+\.\s+', '', text, flags=re.MULTILINE)

    # 수평선 제거
    text = re.sub(r'^[\s]*[-*_]{3,}[\s]*$', '', text, flags=re.MULTILINE)

    # 인용 제거
    text = re.sub(r'^>\s?', '', text, flags=re.MULTILINE)

    # 연속 빈 줄 정리
    text = re.sub(r'\n{3,}', '\n\n', text)

    return text.strip()


# ── md 파일 파싱 ──────────────────────────────────────
def parse_md_file(filepath: str) -> dict:
    """md 파일에서 제목, 본문, 태그 추출
    
    실제 md 파일 구조:
    # 제목 텍스트
    **제목 후보 3개**
    1. 후보1
    2. 후보2  
    3. 후보3
    **태그**
    #태그1 #태그2 ...
    ---
    본문 시작...
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    title = ""
    body_lines = []
    tags = []
    
    # 상태: header, title_candidates, tags_section, separator, body
    section = 'header'
    body_started = False
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # === H1 제목 (# 으로 시작) ===
        if section == 'header' and re.match(r'^#\s+(.+)', stripped):
            title = re.match(r'^#\s+(.+)', stripped).group(1).strip()
            continue
        
        # === "제목 후보" 감지 (볼드 또는 헤더) ===
        if re.match(r'^(\*\*|#{1,4}\s*)제목\s*후보', stripped):
            section = 'title_candidates'
            continue
        
        # === "태그" 감지 (볼드 또는 헤더) ===
        if re.match(r'^(\*\*|#{1,4}\s*)태그(\*\*)?$', stripped) or stripped == '태그':
            section = 'tags_section'
            continue
        
        # === 구분선 --- (본문 시작 신호) ===
        if re.match(r'^-{3,}$', stripped):
            section = 'body'
            body_started = True
            continue
        
        # === 제목 후보 섹션: 스킵 ===
        if section == 'title_candidates':
            # 번호 리스트 (1. 2. 3.) 또는 빈 줄이면 계속 스킵
            if re.match(r'^\d+[.)]\s', stripped) or not stripped:
                continue
            # 다른 내용이 나오면 섹션 전환
            if stripped.startswith('**') or stripped.startswith('#'):
                # 다음 섹션 헤더 — 다시 루프 돌기
                section = 'header'
                # re-process this line
                if re.match(r'^(\*\*|#{1,4}\s*)태그(\*\*)?$', stripped) or stripped == '태그':
                    section = 'tags_section'
                    continue
            continue
        
        # === 태그 섹션: 태그 추출 ===
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
        
        # === 본문 ===
        if body_started:
            body_lines.append(line)
        
        # header 상태에서 빈 줄이면 스킵
        if section == 'header' and not stripped:
            continue
    
    # 제목 못 찾았으면 fallback
    if not title:
        for line in lines:
            h_match = re.match(r'^#{1,2}\s+(.+)', line.strip())
            if h_match:
                title = h_match.group(1).strip()
                break
    
    if not title:
        title = os.path.basename(filepath).replace('.md', '').replace('-', ' ')
    
    # 본문 조합
    body = '\n'.join(body_lines).strip()
    
    # 마크다운 → 순수 텍스트 변환
    body = md_to_plain_text(body)
    
    # 본문 앞부분에 혹시 남아있는 제목/후보/태그 잔여물 제거
    body = re.sub(r'^제목\s*후보\s*\d*개?\s*\n?', '', body, flags=re.MULTILINE)
    body = re.sub(r'^(?:#\S+\s*)+$', '', body, flags=re.MULTILINE)  # 태그 줄 제거
    body = re.sub(r'\n{3,}', '\n\n', body).strip()
    
    # 제목에서 마크다운/따옴표 제거
    title = re.sub(r'\*\*(.+?)\*\*', r'\1', title)
    title = re.sub(r'\*(.+?)\*', r'\1', title)
    title = title.strip('"\'""''')
    
    # 태그 정리
    tags = [t.strip() for t in tags if t.strip()][:10]

    return {
        'title': title[:100],
        'body': body,
        'tags': tags,
        'filename': os.path.basename(filepath)
    }


# ── 스케줄 생성 ──────────────────────────────────────
def generate_schedule(file_count: int, start_date: str) -> list:
    """하루 DAILY_LIMIT개, INTERVAL_HOURS 간격 스케줄"""
    start = datetime.strptime(start_date, '%Y-%m-%d')
    schedule = []
    day = 0
    idx = 0

    while idx < file_count:
        for hour_slot in range(DAILY_LIMIT):
            if idx >= file_count:
                break
            hour = START_HOUR + (hour_slot * INTERVAL_HOURS)
            if hour > END_HOUR:
                break
            dt = start + timedelta(days=day, hours=hour)
            schedule.append(dt)
            idx += 1
        day += 1

    return schedule


# ── 팝업 닫기 ────────────────────────────────────────
async def dismiss_popups(page):
    """SE One 에디터의 모든 팝업 자동 닫기"""
    popup_selectors = [
        # 임시저장 불러오기 팝업 - "아니오" 버튼
        '.se-popup-alert-confirm .se-popup-button-cancel',
        '.se-popup-alert-confirm button:last-child',
        '.se-popup-alert .se-popup-button-cancel',
        # 일반 팝업 닫기
        '.se-popup-close',
        '.se-popup-alert button.se-popup-button-cancel',
        # "확인" 버튼 (단일 버튼 팝업)
        '.se-popup-alert-alert .se-popup-button-confirm',
        # 팝업 dim 레이어 위의 버튼들
        'button[data-name="cancel"]',
        '.se-popup-content button:nth-child(2)',  # 두 번째 버튼 (보통 취소)
    ]

    for selector in popup_selectors:
        try:
            elem = await page.query_selector(selector)
            if elem and await elem.is_visible():
                await elem.click()
                print(f"    🔕 팝업 닫음: {selector}")
                await page.wait_for_timeout(random.randint(500, 1000))
                return True
        except Exception:
            continue

    # 텍스트 기반 팝업 버튼 찾기
    try:
        buttons = await page.query_selector_all('.se-popup button, .se-popup-alert button')
        for btn in buttons:
            text = await btn.inner_text()
            text_lower = text.strip().lower()
            if text_lower in ['아니오', '아니요', '취소', 'cancel', '닫기']:
                if await btn.is_visible():
                    await btn.click()
                    print(f"    🔕 팝업 닫음 (텍스트: {text.strip()})")
                    await page.wait_for_timeout(random.randint(500, 1000))
                    return True
    except Exception:
        pass

    return False


async def dismiss_all_popups(page, max_attempts=3):
    """여러 개 팝업이 겹쳐있을 수 있으므로 반복 시도"""
    for _ in range(max_attempts):
        closed = await dismiss_popups(page)
        if not closed:
            break
        await page.wait_for_timeout(300)


# ── 발행 패널 열기 ───────────────────────────────────
async def open_publish_panel(page) -> bool:
    """상단 '발행' 버튼 클릭하여 설정 패널 열기"""
    
    # CSS 셀렉터 시도
    main_button_selectors = [
        'button.publish_btn__m9KHH',
        'button[data-name="save-publish"]',
        '.se-toolbar-item-publish button',
        '.se-publish-button',
        'button.se-document-toolbar-btn-publish',
    ]

    for selector in main_button_selectors:
        try:
            elem = await page.query_selector(selector)
            if elem and await elem.is_visible():
                await elem.click()
                print(f"    📤 발행 패널 열기: {selector}")
                await page.wait_for_timeout(random.randint(1500, 2500))
                return True
        except Exception:
            continue

    # 텍스트로 상단 발행 버튼 찾기 (우상단 빨간 버튼)
    try:
        buttons = await page.query_selector_all('button')
        for btn in buttons:
            text = (await btn.inner_text()).strip()
            if text in ['발행', '발행하기']:
                box = await btn.bounding_box()
                # 상단 버튼 (y < 120)
                if box and box['y'] < 120 and await btn.is_visible():
                    await btn.click()
                    print(f"    📤 발행 패널 열기 (텍스트: {text})")
                    await page.wait_for_timeout(random.randint(1500, 2500))
                    return True
    except Exception:
        pass

    print("    ❌ 발행 버튼 못 찾음")
    return False


async def click_final_publish(page) -> bool:
    """패널 하단 초록색 '✓ 발행' 버튼 클릭"""
    
    # 방법 1: 패널 하단의 발행 버튼 (y 좌표가 높은 것)
    try:
        buttons = await page.query_selector_all('button')
        publish_candidates = []
        for btn in buttons:
            text = (await btn.inner_text()).strip()
            if '발행' in text and await btn.is_visible():
                box = await btn.bounding_box()
                if box:
                    publish_candidates.append((btn, text, box['y']))
        
        # y좌표 가장 높은 (화면 아래쪽) 발행 버튼 = 패널 내 최종 버튼
        if publish_candidates:
            publish_candidates.sort(key=lambda x: x[2], reverse=True)
            btn, text, y = publish_candidates[0]
            await btn.click()
            print(f"    ✅ 최종 발행 클릭 (y={y:.0f}, 텍스트: {text})")
            await page.wait_for_timeout(random.randint(2000, 3000))
            return True
    except Exception as e:
        print(f"    ⚠️ 발행 버튼 클릭 에러: {str(e)[:50]}")

    # 방법 2: JavaScript로 강제 클릭
    try:
        result = await page.evaluate("""
            () => {
                const buttons = document.querySelectorAll('button');
                let best = null;
                let bestY = 0;
                for (const btn of buttons) {
                    if (btn.textContent.includes('발행') && btn.offsetParent !== null) {
                        const rect = btn.getBoundingClientRect();
                        if (rect.y > bestY) {
                            bestY = rect.y;
                            best = btn;
                        }
                    }
                }
                if (best) { best.click(); return true; }
                return false;
            }
        """)
        if result:
            print(f"    ✅ 최종 발행 클릭 (JS)")
            await page.wait_for_timeout(random.randint(2000, 3000))
            return True
    except Exception:
        pass

    print("    ⚠️ 최종 발행 버튼 못 찾음")
    return False


# ── 비밀글(비공개) 설정 ──────────────────────────────
async def set_secret_post(page) -> bool:
    """발행 설정 패널에서 비공개 선택 (스크린샷 기반 UI 매칭)"""
    
    # 네이버 블로그 공개 설정: 전체공개 / 이웃공개 / 서로이웃공개 / 비공개
    # 텍스트 기반으로 "비공개" 라디오 버튼 찾기
    try:
        # 방법 1: 텍스트가 "비공개"인 라벨/span 클릭
        labels = await page.query_selector_all('label, span')
        for label in labels:
            text = (await label.inner_text()).strip()
            if text == '비공개':
                if await label.is_visible():
                    await label.click()
                    print(f"    🔒 비공개 설정 완료")
                    await page.wait_for_timeout(500)
                    return True
    except Exception:
        pass

    # 방법 2: 라디오 input 직접 찾기
    radio_selectors = [
        'input[value="close"]',      # 비공개
        'input[value="private"]',
        'input[value="secret"]',
        'input[name="open.type"][value="close"]',
    ]
    for selector in radio_selectors:
        try:
            elem = await page.query_selector(selector)
            if elem:
                await elem.click()
                print(f"    🔒 비공개 설정: {selector}")
                await page.wait_for_timeout(500)
                return True
        except Exception:
            continue

    # 방법 3: JavaScript로 라디오 강제 클릭
    try:
        result = await page.evaluate("""
            () => {
                const labels = document.querySelectorAll('label, span');
                for (const el of labels) {
                    if (el.textContent.trim() === '비공개') {
                        el.click();
                        return true;
                    }
                }
                return false;
            }
        """)
        if result:
            print(f"    🔒 비공개 설정 (JS)")
            await page.wait_for_timeout(500)
            return True
    except Exception:
        pass

    print("    ⚠️ 비공개 설정 실패 (기본 공개로 발행)")
    return False


# ── 태그 입력 ────────────────────────────────────────
async def input_tags(page, tags: list) -> bool:
    """발행 패널에서 태그 입력 (최대 30개)"""
    if not tags:
        return True

    # 디버깅: 태그 입력 필드 후보 목록 출력
    try:
        candidates = await page.evaluate("""
            () => {
                const results = [];
                const els = document.querySelectorAll('input, textarea');
                for (const el of els) {
                    if (el.offsetParent === null) continue;  // hidden 제외
                    const tag = el.tagName.toLowerCase();
                    const ph = el.placeholder || '';
                    const cls = el.className || '';
                    const type = el.type || '';
                    results.push(`${tag}[type=${type}] placeholder="${ph}" class="${cls.substring(0,60)}"`);
                }
                return results;
            }
        """)
        for c in candidates:
            print(f"    [DEBUG] 입력필드 후보: {c}")
    except Exception:
        pass

    tag_input = None
    tag_selectors = [
        'input[placeholder*="태그"]',
        'textarea[placeholder*="태그"]',
        '.tag_inner input',
        '.tag_inner textarea',
        'input.tag_input',
        'input[placeholder*="#태그"]',
        'textarea[placeholder*="#태그"]',
    ]

    for selector in tag_selectors:
        try:
            elems = await page.query_selector_all(selector)
            for elem in elems:
                if await elem.is_visible():
                    tag_input = elem
                    break
            if tag_input:
                break
        except Exception:
            continue

    if not tag_input:
        # JS fallback: placeholder 텍스트로 찾기
        try:
            found = await page.evaluate("""
                () => {
                    const els = document.querySelectorAll('input, textarea');
                    for (const el of els) {
                        const ph = el.placeholder || '';
                        if (ph.includes('태그') || ph.includes('#')) {
                            return true;
                        }
                    }
                    return false;
                }
            """)
            if found:
                tag_input = await page.query_selector(
                    'input[placeholder*="태그"], textarea[placeholder*="태그"], '
                    'input[placeholder*="#태그"], textarea[placeholder*="#태그"]'
                )
        except Exception:
            pass

    if not tag_input:
        print("    ⚠️ 태그 입력 필드 못 찾음 (발행 계속)")
        return False

    entered = 0
    for tag in tags[:30]:
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


# ── CTA 링크 삽입 (OG링크 카드) ──────────────────────
async def insert_cta_link(page) -> bool:
    """본문 끝에 OG링크 카드 삽입 (텍스트 블록 지정 없이 링크 버튼만 클릭)"""
    # 브라우저 dialog(alert/confirm/prompt) 자동 수락
    async def _handle_dialog(dialog):
        print(f"    [DEBUG] dialog 감지: {dialog.type} - {dialog.message[:50]}")
        await dialog.accept()

    page.on("dialog", _handle_dialog)

    try:
        # 빈 줄 2개
        await page.keyboard.press('Enter')
        await page.wait_for_timeout(300)
        await page.keyboard.press('Enter')
        await page.wait_for_timeout(300)

        # oglink 버튼 클릭 (텍스트 선택 없이 바로!)
        link_btn = await page.query_selector('button[data-name="oglink"]')
        if not link_btn:
            buttons = await page.query_selector_all('button[data-name]')
            for btn in buttons:
                name = await btn.get_attribute('data-name')
                if name and 'link' in name.lower():
                    link_btn = btn
                    break

        if not link_btn:
            print("    ⚠️ 링크 버튼 못 찾음 (발행 계속)")
            return False

        await link_btn.click()
        await page.wait_for_timeout(random.randint(2000, 3000))

        # URL 입력 필드 찾기
        url_input = None
        url_selectors = [
            'input[placeholder*="URL"]',
            'input[placeholder*="url"]',
            'input[placeholder*="입력"]',
            'input[placeholder*="http"]',
            'input[placeholder*="링크"]',
            '.se-popup input[type="text"]',
            '.se-oglink-input input',
        ]
        for sel in url_selectors:
            try:
                elems = await page.query_selector_all(sel)
                for elem in elems:
                    if await elem.is_visible():
                        url_input = elem
                        break
                if url_input:
                    break
            except Exception:
                continue

        if not url_input:
            print("    ⚠️ URL 입력 필드 못 찾음 (발행 계속)")
            await page.keyboard.press('Escape')
            await page.wait_for_timeout(300)
            return False

        await url_input.click()
        await page.wait_for_timeout(200)
        await url_input.type("https://bebeplan.kr", delay=random.randint(30, 60))
        await page.wait_for_timeout(500)

        # 돋보기(검색) 버튼 클릭 — input 옆 버튼/아이콘
        search_clicked = await page.evaluate("""
            () => {
                // 방법 1: input 부모 내 버튼
                const inp = document.querySelector(
                    'input[placeholder*="URL"], input[placeholder*="url"], ' +
                    'input[placeholder*="입력"], input[placeholder*="http"]'
                );
                if (inp) {
                    const parent = inp.closest('.se-oglink-input, .se-popup-content, .se-popup') || inp.parentElement;
                    if (parent) {
                        const btn = parent.querySelector('button, a, span[role="button"]');
                        if (btn) { btn.click(); return 'parent-btn'; }
                    }
                    // 방법 2: 바로 옆 형제
                    const next = inp.nextElementSibling;
                    if (next) { next.click(); return 'sibling'; }
                }
                return null;
            }
        """)

        if not search_clicked:
            await page.keyboard.press('Enter')

        # 미리보기 로딩 대기
        await page.wait_for_timeout(random.randint(3000, 5000))

        # 확인 버튼 클릭
        confirm_clicked = False

        # 셀렉터 기반
        confirm_selectors = [
            '.se-popup-button-confirm',
            'button.se-popup-button-confirm',
            '.se-oglink-btn-confirm',
            'button.confirm',
        ]
        for sel in confirm_selectors:
            try:
                elem = await page.query_selector(sel)
                if elem and await elem.is_visible():
                    await elem.click()
                    confirm_clicked = True
                    break
            except Exception:
                continue

        # 텍스트 기반 fallback
        if not confirm_clicked:
            try:
                popups = await page.query_selector_all('.se-popup button, .se-popup-content button')
                for btn in popups:
                    text = (await btn.inner_text()).strip()
                    if text in ['확인', '삽입', '적용']:
                        if await btn.is_visible():
                            await btn.click()
                            confirm_clicked = True
                            break
            except Exception:
                pass

        if confirm_clicked:
            print("    🔗 CTA 링크 삽입 완료: https://bebeplan.kr")
            await page.wait_for_timeout(random.randint(500, 1000))
            return True
        else:
            print("    ⚠️ CTA 확인 버튼 못 찾음 (발행 계속)")
            await page.keyboard.press('Escape')
            await page.wait_for_timeout(500)
            return False

    except Exception as e:
        print(f"    ⚠️ CTA 삽입 실패: {str(e)[:50]} (발행 계속)")
        try:
            await page.keyboard.press('Escape')
            await page.wait_for_timeout(300)
        except Exception:
            pass
        return False
    finally:
        page.remove_listener("dialog", _handle_dialog)


# ── 예약시간 설정 ────────────────────────────────────
async def set_schedule_time(page, scheduled_time: datetime) -> bool:
    """발행 설정 패널에서 예약 선택 + 달력/드롭다운 UI 클릭으로 날짜/시간 설정"""

    # 1) "예약" 라디오 버튼 클릭 (발행 패널 내에서만 검색)
    schedule_clicked = False

    # 발행 패널 컨테이너 찾기
    panel_selectors = [
        '.se-publish-setting', '.publish_setting',
        '.se-popup-publish', '[class*="publish_setting"]',
        '[class*="PublishSetting"]', '.se-publish-option',
    ]
    panel = None
    for sel in panel_selectors:
        try:
            elem = await page.query_selector(sel)
            if elem and await elem.is_visible():
                panel = elem
                break
        except Exception:
            continue

    # 디버깅: 발행 패널 내 라디오/라벨 후보 목록 출력
    try:
        radio_candidates = await page.evaluate("""
            () => {
                const results = [];
                // 발행 패널 찾기
                const panelSels = [
                    '.se-publish-setting', '.publish_setting',
                    '[class*="publish_setting"]', '[class*="PublishSetting"]',
                    '.se-publish-option'
                ];
                let scope = null;
                for (const sel of panelSels) {
                    const el = document.querySelector(sel);
                    if (el && el.offsetParent !== null) { scope = el; break; }
                }
                scope = scope || document;
                results.push(`panel: ${scope === document ? 'document(전체)' : scope.className.substring(0,60)}`);

                const labels = scope.querySelectorAll('label, span, input[type="radio"]');
                for (const el of labels) {
                    if (el.offsetParent === null) continue;
                    const tag = el.tagName.toLowerCase();
                    const text = el.textContent.trim().substring(0, 30);
                    const cls = el.className || '';
                    const type = el.type || '';
                    if (text) results.push(`${tag}[${type}] "${text}" class="${cls.substring(0,40)}"`);
                }
                return results;
            }
        """)
        for c in radio_candidates:
            print(f"    [DEBUG] 예약 후보: {c}")
    except Exception:
        pass

    # 패널 내에서 "예약" 라벨/span 찾기
    search_scope = panel if panel else page
    try:
        labels = await search_scope.query_selector_all('label, span')
        for label in labels:
            text = (await label.inner_text()).strip()
            if text == '예약':
                if await label.is_visible():
                    await label.click()
                    schedule_clicked = True
                    print(f"    ⏰ 예약 선택")
                    await page.wait_for_timeout(random.randint(800, 1200))
                    break
    except Exception:
        pass

    if not schedule_clicked:
        # JS fallback: 발행 패널 내에서만 검색
        try:
            result = await page.evaluate("""
                () => {
                    // 발행 패널 찾기
                    const panelSels = [
                        '.se-publish-setting', '.publish_setting',
                        '[class*="publish_setting"]', '[class*="PublishSetting"]',
                        '.se-publish-option'
                    ];
                    let scope = null;
                    for (const sel of panelSels) {
                        const el = document.querySelector(sel);
                        if (el && el.offsetParent !== null) { scope = el; break; }
                    }
                    scope = scope || document;

                    // label/span 에서 "예약" 찾기
                    const labels = scope.querySelectorAll('label, span');
                    for (const el of labels) {
                        if (el.textContent.trim() === '예약') {
                            el.click();
                            return 'label';
                        }
                    }
                    // radio input 직접 찾기
                    const radios = scope.querySelectorAll('input[type="radio"]');
                    for (const r of radios) {
                        const parent = r.closest('label') || r.parentElement;
                        if (parent && parent.textContent.includes('예약')) {
                            r.click();
                            return 'radio';
                        }
                    }
                    return null;
                }
            """)
            if result:
                schedule_clicked = True
                print(f"    ⏰ 예약 선택 (JS: {result})")
                await page.wait_for_timeout(random.randint(800, 1200))
        except Exception:
            pass

    if not schedule_clicked:
        print("    ⚠️ 예약 라디오 못 찾음 (즉시 발행)")
        return False

    # 2) 날짜 설정 — jQuery UI datepicker API 또는 달력 UI 클릭
    target_year = scheduled_time.year
    target_month = scheduled_time.month
    target_day = scheduled_time.day

    try:
        # 날짜 input 클릭 → 달력 열기
        date_input = await page.query_selector('input[class*="input_date"]')
        if not date_input:
            date_input = await page.query_selector('input.input_date__QmA0s')
        if not date_input:
            # fallback: readonly input with date value
            for inp in await page.query_selector_all('input[readonly]'):
                val = await inp.get_attribute('value') or ''
                if re.search(r'20\d{2}', val) and await inp.is_visible():
                    date_input = inp
                    break

        if not date_input:
            print("    ⚠️ 날짜 input 못 찾음")
        else:
            await date_input.click()
            await page.wait_for_timeout(random.randint(800, 1200))

            # 방법 1: jQuery UI datepicker API
            jquery_ok = await page.evaluate("""
                (args) => {
                    const [year, month, day] = args;
                    const input = document.querySelector('input[class*="input_date"]')
                                || document.querySelector('input.input_date__QmA0s');
                    if (input && window.jQuery) {
                        try {
                            jQuery(input).datepicker('setDate', new Date(year, month - 1, day));
                            return true;
                        } catch(e) { return false; }
                    }
                    return false;
                }
            """, [target_year, target_month, target_day])

            if jquery_ok:
                print(f"    📅 날짜 설정 (jQuery): {target_year}-{target_month:02d}-{target_day:02d}")
            else:
                # 방법 2: 달력 UI에서 직접 클릭
                print("    [DEBUG] jQuery 없음 → 달력 UI 직접 클릭")

                # 달력 스크롤
                await page.evaluate("""
                    () => {
                        const dp = document.querySelector('.ui-datepicker, [class*="calendar"], [class*="datepicker"]');
                        if (dp) dp.scrollIntoView({ block: 'center', behavior: 'instant' });
                    }
                """)
                await page.wait_for_timeout(random.randint(300, 500))

                # 현재 월 확인 → 같으면 바로 날짜 클릭, 다르면 다음달 이동
                for nav_attempt in range(12):
                    cal_info = await page.evaluate("""
                        () => {
                            // jQuery UI datepicker 헤더: "2026년 3월" 등
                            const title = document.querySelector('.ui-datepicker-title');
                            if (title) {
                                const text = title.textContent.trim();
                                // "2026년 3월" or "3월 2026" 등에서 숫자 추출
                                const match = text.match(/(20\\d{2})\\D+(\\d{1,2})/);
                                if (match) return { year: parseInt(match[1]), month: parseInt(match[2]) };
                                // 역순: "3월 2026"
                                const match2 = text.match(/(\\d{1,2})\\D+(20\\d{2})/);
                                if (match2) return { year: parseInt(match2[2]), month: parseInt(match2[1]) };
                            }
                            // 기타 달력 헤더
                            const els = document.querySelectorAll('[class*="calendar"] strong, [class*="calendar"] span');
                            for (const el of els) {
                                const t = el.textContent.trim();
                                const m = t.match(/(20\\d{2})\\D+(\\d{1,2})/);
                                if (m) return { year: parseInt(m[1]), month: parseInt(m[2]) };
                            }
                            return null;
                        }
                    """)

                    if not cal_info:
                        print("    [DEBUG] 달력 헤더 읽기 실패")
                        break

                    cur_year = cal_info['year']
                    cur_month = cal_info['month']
                    print(f"    [DEBUG] 달력: {cur_year}.{cur_month:02d} → 목표: {target_year}.{target_month:02d}")

                    # 목표 월과 같으면 루프 탈출 → 날짜 클릭으로
                    if cur_year == target_year and cur_month == target_month:
                        break

                    # 다음달 버튼 클릭
                    next_ok = await page.evaluate("""
                        () => {
                            const btn = document.querySelector('.ui-datepicker-next, button.ui-datepicker-next');
                            if (btn) { btn.click(); return true; }
                            const btns = document.querySelectorAll('[class*="calendar"] button, [class*="datepicker"] button');
                            for (const b of btns) {
                                const t = b.textContent.trim();
                                const c = (b.className || '') + ' ' + (b.getAttribute('aria-label') || '');
                                if (t === '>' || t === '›' || c.includes('next') || c.includes('다음')) {
                                    b.click(); return true;
                                }
                            }
                            return false;
                        }
                    """)
                    if not next_ok:
                        print("    ⚠️ 다음달 버튼 못 찾음")
                        break
                    await page.wait_for_timeout(random.randint(400, 700))

                # 목표 날짜 클릭 — JS 직접 클릭 (콘솔 테스트 성공 확인)
                day_str = str(target_day)
                day_clicked = await page.evaluate("""
                    (dayText) => {
                        const buttons = document.querySelectorAll('.ui-datepicker button.ui-state-default');
                        for (const b of buttons) {
                            if (b.textContent.trim() === dayText) {
                                b.click();
                                return true;
                            }
                        }
                        return false;
                    }
                """, day_str)

                if day_clicked:
                    print(f"    📅 날짜 선택 (UI): {target_year}-{target_month:02d}-{target_day:02d}")
                else:
                    print(f"    ⚠️ 날짜 {target_day}일 클릭 실패")

            await page.wait_for_timeout(random.randint(500, 800))
    except Exception as e:
        print(f"    ⚠️ 날짜 설정 실패: {str(e)[:50]}")

    await page.wait_for_timeout(300)

    # 3) 시간 설정 — <select> 태그 select_option()
    hour_str = f"{scheduled_time.hour:02d}"

    try:
        hour_select = None
        hour_selectors = [
            'select[title*="시간"]',
            'select[class*="hour_option"]',
            'select.hour_option__J_heO',
        ]
        for sel in hour_selectors:
            try:
                elem = await page.query_selector(sel)
                if elem and await elem.is_visible():
                    hour_select = elem
                    break
            except Exception:
                continue

        if hour_select:
            try:
                await hour_select.select_option(value=hour_str)
            except Exception:
                await hour_select.select_option(label=hour_str)
            await page.wait_for_timeout(random.randint(500, 800))
            print(f"    🕐 시간 선택: {hour_str}시")
        else:
            print("    ⚠️ 시간 select 못 찾음")
    except Exception as e:
        print(f"    ⚠️ 시간 설정 실패: {str(e)[:50]}")

    await page.wait_for_timeout(300)

    # 4) 분 설정 — <select> 태그 select_option()
    try:
        min_select = None
        min_selectors = [
            'select[title*="분"]',
            'select[class*="minute_option"]',
            'select.minute_option__Vb3xB',
        ]
        for sel in min_selectors:
            try:
                elem = await page.query_selector(sel)
                if elem and await elem.is_visible():
                    min_select = elem
                    break
            except Exception:
                continue

        if min_select:
            try:
                await min_select.select_option(value='00')
            except Exception:
                await min_select.select_option(label='00')
            await page.wait_for_timeout(random.randint(500, 800))
            print(f"    🕐 분 선택: 00분")
        else:
            print("    ⚠️ 분 select 못 찾음")
    except Exception as e:
        print(f"    ⚠️ 분 설정 실패: {str(e)[:50]}")

    return True


# ── 임시저장 ────────────────────────────────────────
async def try_temp_save(page) -> bool:
    """발행 실패 시 임시저장"""
    save_selectors = [
        'button[data-name="save-temp"]',
        '.se-toolbar-item-save button',
        'button.se-document-toolbar-btn-save',
    ]

    for selector in save_selectors:
        try:
            elem = await page.query_selector(selector)
            if elem and await elem.is_visible():
                await elem.click()
                print(f"    💾 임시저장 완료")
                await page.wait_for_timeout(1000)
                return True
        except Exception:
            continue

    # 텍스트로 찾기
    try:
        buttons = await page.query_selector_all('button')
        for btn in buttons:
            text = (await btn.inner_text()).strip()
            if text in ['임시저장', '저장', '임시 저장']:
                if await btn.is_visible():
                    await btn.click()
                    print(f"    💾 임시저장 완료 (텍스트: {text})")
                    await page.wait_for_timeout(1000)
                    return True
    except Exception:
        pass

    return False


# ── 이미지 업로드 ─────────────────────────────────────
async def _upload_single_image(page, img_path: Path) -> bool:
    """사진 버튼 클릭 + file chooser로 이미지 1개 업로드. 성공 시 True."""
    try:
        img_btn = await page.query_selector('button[data-name="image"]')
        if not img_btn:
            buttons = await page.query_selector_all('button[data-name]')
            for btn in buttons:
                name = await btn.get_attribute('data-name')
                if name and 'image' in name.lower():
                    img_btn = btn
                    break

        if not img_btn:
            print(f"    ⚠️ 사진 버튼 못 찾음")
            return False

        async with page.expect_file_chooser(timeout=5000) as fc_info:
            await img_btn.click()
        file_chooser = await fc_info.value

        await file_chooser.set_files(str(img_path.resolve()))
        await page.wait_for_timeout(random.randint(3000, 5000))
        return True

    except Exception as e:
        print(f"    ⚠️ 이미지 업로드 실패 ({img_path.name}): {str(e)[:60]}")
        return False


async def upload_thumbnail(page, post_filename: str) -> bool:
    """썸네일 1개 업로드 ({stem}.jpg). 없으면 스킵."""
    stem = Path(post_filename).stem
    thumb = Path(THUMBNAIL_DIR) / f"{stem}.jpg"

    if not thumb.exists():
        print(f"    🖼️ 썸네일 없음 ({thumb.name})")
        return False

    ok = await _upload_single_image(page, thumb)
    if ok:
        print(f"    🖼️ 썸네일 업로드: {thumb.name}")
    return ok


async def upload_tip_cards(page, post_filename: str) -> int:
    """팁카드 3개 업로드 ({stem}_tip1~3.jpg). 없는 파일은 스킵."""
    stem = Path(post_filename).stem
    thumbnail_dir = Path(THUMBNAIL_DIR)

    tips = [
        thumbnail_dir / f"{stem}_tip1.jpg",
        thumbnail_dir / f"{stem}_tip2.jpg",
        thumbnail_dir / f"{stem}_tip3.jpg",
    ]
    tip_files = [p for p in tips if p.exists()]

    if not tip_files:
        print(f"    🖼️ 팁카드 없음 (thumbnails/{stem}_tip*.jpg)")
        return 0

    uploaded = 0
    for img_path in tip_files:
        ok = await _upload_single_image(page, img_path)
        if ok:
            uploaded += 1
            print(f"    🖼️ 팁카드 업로드 ({uploaded}/{len(tip_files)}): {img_path.name}")

    print(f"    🖼️ 팁카드 {uploaded}/{len(tip_files)}개 업로드")
    return uploaded


# ── 글 작성 + 발행 ───────────────────────────────────
async def write_and_publish(page, post: dict, scheduled_time: datetime, blog_id: str) -> dict:
    """단일 글 작성 및 발행"""
    result = {
        'filename': post['filename'],
        'title': post['title'],
        'scheduled_time': scheduled_time.isoformat(),
        'status': 'unknown',
        'error': None
    }

    try:
        # 글쓰기 페이지 이동
        write_url = f"https://blog.naver.com/{blog_id}/postwrite"
        await page.goto(write_url, wait_until='networkidle', timeout=60000)
        await page.wait_for_timeout(random.randint(4000, 6000))

        # 팝업 닫기 (임시저장 불러오기 등)
        await dismiss_all_popups(page)
        await page.wait_for_timeout(random.randint(500, 1000))

        # 제목 입력 — 에디터 로딩 대기 후 찾기
        # 먼저 페이지 최상단으로 스크롤
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(500)
        
        title_selectors = [
            '.se-documentTitle .se-text-paragraph',
            '.se-title-text .se-text-paragraph',
            'div[data-name="documentTitle"] .se-text-paragraph',
            '.se-component-document-title .se-text-paragraph',
            '.se-section-documentTitle .se-text-paragraph',
        ]

        title_input = None
        for attempt in range(3):
            for selector in title_selectors:
                try:
                    elem = await page.query_selector(selector)
                    if elem and await elem.is_visible():
                        title_input = elem
                        break
                except Exception:
                    continue
            if title_input:
                break
            print(f"    ⏳ 에디터 로딩 대기 ({attempt+1}/3)...")
            await page.wait_for_timeout(3000)

        if not title_input:
            try:
                paragraphs = await page.query_selector_all('.se-text-paragraph')
                for p in paragraphs:
                    text = await p.inner_text()
                    if '제목' in text or text.strip() == '':
                        title_input = p
                        break
            except Exception:
                pass

        # === 제목 입력 ===
        # SE One은 contenteditable이라 JS focus()가 안 먹힘
        # 좌표 클릭 + dispatchEvent 조합으로 제목 필드 활성화
        
        title_entered = False
        
        # 방법 1: 좌표 클릭 — 제목 영역은 항상 페이지 상단 (y=150~200 근처)
        try:
            await page.evaluate("window.scrollTo(0, 0)")
            await page.wait_for_timeout(500)
            
            # 제목 영역 좌표 클릭 (x=300, y=180 — 에디터 중앙 상단)
            await page.mouse.click(300, 180)
            await page.wait_for_timeout(500)
            
            # placeholder "제목"이 사라졌는지 확인
            placeholder_gone = await page.evaluate("""
                () => {
                    const ph = document.querySelector('.se-placeholder-focused');
                    return ph !== null;
                }
            """)
            
            if placeholder_gone:
                # 제목 필드 활성화됨! 기존 내용 삭제 후 입력
                await page.keyboard.press('Control+a')
                await page.wait_for_timeout(100)
                await page.keyboard.press('Backspace')
                await page.wait_for_timeout(200)
                delay = random.randint(TITLE_DELAY_MIN, TITLE_DELAY_MAX)
                await page.keyboard.type(post['title'], delay=delay)
                title_entered = True
                print(f"    📝 제목 입력 (좌표 클릭): {post['title'][:50]}...")
            else:
                # 좌표가 안 맞았을 수 있음 — y값 조정해서 재시도
                for y_pos in [160, 170, 180, 190, 200, 150]:
                    await page.mouse.click(300, y_pos)
                    await page.wait_for_timeout(300)
                    # 제목 영역인지 확인
                    is_title = await page.evaluate("""
                        () => {
                            const sel = window.getSelection();
                            if (sel && sel.anchorNode) {
                                const el = sel.anchorNode.parentElement || sel.anchorNode;
                                // 제목 영역의 부모에 documentTitle 관련 클래스가 있는지
                                let node = el;
                                for (let i = 0; i < 10; i++) {
                                    if (!node) break;
                                    if (node.className && (
                                        node.className.includes('documentTitle') ||
                                        node.className.includes('title') ||
                                        node.getAttribute && node.getAttribute('data-name') === 'documentTitle'
                                    )) return true;
                                    node = node.parentElement;
                                }
                            }
                            return false;
                        }
                    """)
                    if is_title:
                        await page.keyboard.press('Control+a')
                        await page.wait_for_timeout(100)
                        await page.keyboard.press('Backspace')
                        await page.wait_for_timeout(200)
                        delay = random.randint(TITLE_DELAY_MIN, TITLE_DELAY_MAX)
                        await page.keyboard.type(post['title'], delay=delay)
                        title_entered = True
                        print(f"    📝 제목 입력 (y={y_pos}): {post['title'][:50]}...")
                        break
        except Exception as e:
            print(f"    ⚠️ 좌표 클릭 실패: {str(e)[:50]}")

        # 방법 2: Playwright locator로 "제목" placeholder 텍스트 클릭
        if not title_entered:
            try:
                title_loc = page.get_by_text("제목", exact=True).first
                await title_loc.click(timeout=5000)
                await page.wait_for_timeout(300)
                delay = random.randint(TITLE_DELAY_MIN, TITLE_DELAY_MAX)
                await page.keyboard.type(post['title'], delay=delay)
                title_entered = True
                print(f"    📝 제목 입력 (locator): {post['title'][:50]}...")
            except Exception:
                pass

        if not title_entered:
            print(f"    ❌ 제목 입력 실패 — 본문만 입력합니다")

        await page.wait_for_timeout(random.randint(500, 1000))

        # 썸네일 업로드 (본문 입력 전 — 글 상단에 배치)
        await upload_thumbnail(page, post['filename'])
        await page.wait_for_timeout(random.randint(500, 1000))

        # 본문 영역으로 이동 (좌표 클릭 — 이미지 아래 본문 영역)
        await page.mouse.click(300, 450)
        await page.wait_for_timeout(random.randint(300, 600))

        # 팝업 다시 체크
        await dismiss_all_popups(page)

        # 본문 입력 (줄 단위)
        lines = post['body'].split('\n')
        total_chars = 0
        for i, line in enumerate(lines):
            if line.strip():
                delay = random.randint(BODY_DELAY_MIN, BODY_DELAY_MAX)
                await page.keyboard.type(line, delay=delay)
                total_chars += len(line)
            if i < len(lines) - 1:
                await page.keyboard.press('Enter')
                await page.wait_for_timeout(random.randint(LINE_PAUSE_MIN, LINE_PAUSE_MAX))

        print(f"    📄 본문 입력 완료 ({total_chars}자)")
        await page.wait_for_timeout(random.randint(1000, 2000))

        # CTA 링크 삽입
        await insert_cta_link(page)
        await page.wait_for_timeout(random.randint(500, 1000))

        # 팁카드 이미지 업로드 (본문 하단)
        await page.keyboard.press('Enter')
        await page.wait_for_timeout(300)
        await page.keyboard.press('Enter')
        await page.wait_for_timeout(300)
        await upload_tip_cards(page, post['filename'])
        await page.wait_for_timeout(random.randint(500, 1000))

        # CTA 링크 삽입 (2차 — 팁카드 후 맨 마지막)
        await insert_cta_link(page)
        await page.wait_for_timeout(random.randint(500, 1000))

        # 팝업 체크
        await dismiss_all_popups(page)

        # === 발행 흐름: 패널 열기 → 비공개 설정 → 최종 발행 ===
        
        # 1) 상단 발행 버튼 클릭 → 설정 패널 열기
        panel_opened = await open_publish_panel(page)

        if panel_opened:
            # 2) 태그 입력
            await input_tags(page, post.get('tags', []))
            await page.wait_for_timeout(random.randint(300, 600))

            # 3) 예약 시간 설정 (전체공개 유지)
            await set_schedule_time(page, scheduled_time)
            await page.wait_for_timeout(random.randint(300, 600))

            # 4) 최종 "✓ 발행" 버튼 클릭
            final_clicked = await click_final_publish(page)

            # 발행 후 팝업 닫기
            await page.wait_for_timeout(1000)
            await dismiss_all_popups(page)

            result['status'] = 'published' if final_clicked else 'panel_opened'
        else:
            # 임시저장 시도
            saved = await try_temp_save(page)
            result['status'] = 'temp_saved' if saved else 'failed'

        await page.wait_for_timeout(random.randint(1000, 2000))

    except Exception as e:
        result['status'] = 'error'
        result['error'] = str(e)[:200]
        print(f"    ❌ 에러: {str(e)[:100]}")

        # 에러 후 팝업 닫기 시도
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
    global BLOG_ID, CONTENT_DIR

    parser = argparse.ArgumentParser(description='네이버 블로그 자동 예약발행')
    parser.add_argument('--content-dir', default=CONTENT_DIR, help='md 파일 폴더 경로')
    parser.add_argument('--blog-id', default=BLOG_ID, help='네이버 블로그 ID')
    parser.add_argument('--start-date', default=None, help='예약 시작일 (YYYY-MM-DD)')
    parser.add_argument('--daily-limit', type=int, default=DAILY_LIMIT, help='하루 발행 수')
    parser.add_argument('--dry-run', action='store_true', help='실제 발행하지 않고 파싱만 확인')
    parser.add_argument('--all', action='store_true', help='모든 md 파일 발행')
    parser.add_argument('--files', nargs='+', help='특정 파일만 발행')
    args = parser.parse_args()

    BLOG_ID = args.blog_id
    CONTENT_DIR = args.content_dir

    # md 파일 수집
    if args.files:
        md_files = args.files
    else:
        md_files = sorted(glob.glob(os.path.join(CONTENT_DIR, '*.md')))

    if not md_files:
        print(f"❌ {CONTENT_DIR}에 md 파일이 없습니다.")
        return

    # 이전 results 파일에서 발행 완료된 파일명 로드 (중복 발행 방지)
    published_files = set()
    for rf in glob.glob("publish_results_*.json"):
        try:
            with open(rf, 'r', encoding='utf-8') as f:
                for item in json.load(f):
                    if item.get('status') == 'published':
                        published_files.add(item.get('filename', ''))
        except Exception:
            continue
    if published_files:
        print(f"📋 이전 발행 기록: {len(published_files)}개 파일")

    # 중복 발행 방지: 이미 발행된 파일 스킵
    filtered = []
    for fp in md_files:
        fname = os.path.basename(fp)
        if fname in published_files:
            print(f"  ⏭️ 이미 발행됨: {fname}")
        else:
            filtered.append(fp)
    md_files = filtered

    if not md_files:
        print("✅ 모든 파일이 이미 발행되었습니다.")
        return

    print(f"📂 {len(md_files)}개 md 파일 발행 예정")

    # 스케줄 생성
    start_date = args.start_date or (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
    schedule = generate_schedule(len(md_files), start_date)

    end_date = schedule[-1].strftime('%m/%d') if schedule else '?'
    start_date_fmt = datetime.strptime(start_date, '%Y-%m-%d').strftime('%m/%d')
    print(f"📅 스케줄: {start_date_fmt} ~ {end_date} ({len(md_files)}개, 하루 {args.daily_limit}개)")

    # 파싱 및 미리보기
    posts = []
    for fp in md_files:
        post = parse_md_file(fp)
        posts.append(post)

    if args.dry_run:
        print(f"\n🔍 드라이런 모드 — 실제 발행하지 않습니다.\n")
        for i, (post, sched) in enumerate(zip(posts, schedule)):
            print(f"  📄 {post['filename']}")
            print(f"     제목: {post['title']}")
            print(f"     본문: {len(post['body'])}자")
            print(f"     태그: {', '.join(post['tags']) if post['tags'] else '(없음)'}")
            print(f"     예약: {sched.strftime('%m/%d %H:%M')}")
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

        # 쿠키 로드 시도
        cookie_loaded = await load_cookies(context)

        if cookie_loaded:
            # 로그인 상태 확인
            await page.goto('https://blog.naver.com/' + BLOG_ID, wait_until='domcontentloaded')
            await page.wait_for_timeout(2000)
            print("  🔑 저장된 쿠키로 로그인 시도...")
        
        # 로그인 확인 — 글쓰기 페이지 접근
        await page.goto(f'https://blog.naver.com/{BLOG_ID}/postwrite', wait_until='domcontentloaded', timeout=30000)
        await page.wait_for_timeout(2000)

        # 로그인 페이지로 리디렉트됐는지 확인
        if 'nid.naver.com' in page.url or 'login' in page.url.lower():
            print("\n  🔐 네이버 로그인이 필요합니다.")
            print("  브라우저에서 직접 로그인해주세요.")
            input("  로그인 완료 후 Enter 키를 누르세요...")
            await save_cookies(context)
        else:
            print("  ✅ 로그인 상태 확인됨")

        print(f"\n{'='*50}")

        # 글 발행 루프
        for i, (post, sched) in enumerate(zip(posts, schedule)):
            print(f"\n[{i+1}/{len(posts)}] {post['filename']}")
            print(f"  예약시간: {sched.strftime('%Y-%m-%d %H:%M')}")

            result = await write_and_publish(page, post, sched, BLOG_ID)
            results.append(result)

            status_emoji = {'published': '✅', 'temp_saved': '💾', 'failed': '❌', 'error': '❌'}.get(result['status'], '❓')
            print(f"  {status_emoji} 결과: {result['status']}")

            # 결과 파일 저장 (매 글마다 — 중간에 중단해도 기록 남김)
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
