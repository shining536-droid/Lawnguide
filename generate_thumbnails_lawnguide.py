#!/usr/bin/env python3
"""
로앤가이드 네이버 블로그 썸네일 + 핵심팁 카드 자동 생성
- 법률 도메인별 배경색 + 뱃지
- 제목/팁 텍스트 정중앙 배치
- Pillow만 사용
"""
import os, re, glob
from PIL import Image, ImageDraw, ImageFont

CONTENT_DIR = "./content/blog"
OUTPUT_DIR = "./content/thumbnails"
BRAND_TEXT = "로앤가이드"
WIDTH, HEIGHT = 1200, 630

CATEGORIES = {
    "사기": {"keywords":["사기","횡령","배임","보이스피싱","중고거래"],"bg":(220,53,69),"sub":(180,40,55),"accent":(255,120,130),"badge":"FRAUD"},
    "성범죄": {"keywords":["성범죄","성폭력","성추행","강제추행","성폭행"],"bg":(128,0,128),"sub":(100,0,100),"accent":(180,100,180),"badge":"CRIME"},
    "폭행": {"keywords":["폭행","상해","협박","정당방위","쌍방폭행"],"bg":(255,127,0),"sub":(210,100,0),"accent":(255,180,80),"badge":"ASSAULT"},
    "이혼": {"keywords":["이혼","양육비","재산분할","양육권","위자료"],"bg":(41,98,255),"sub":(30,75,200),"accent":(100,160,255),"badge":"DIVORCE"},
    "전세": {"keywords":["전세","보증금","임대차","전세사기","깡통"],"bg":(0,150,100),"sub":(0,120,80),"accent":(80,200,150),"badge":"LEASE"},
    "명예훼손": {"keywords":["명예훼손","모욕","악플","허위사실"],"bg":(0,51,102),"sub":(0,40,80),"accent":(60,120,180),"badge":"HONOR"},
    "음주운전": {"keywords":["음주운전","음주측정","면허취소","혈중알콜"],"bg":(153,0,0),"sub":(120,0,0),"accent":(200,80,80),"badge":"DUI"},
    "스토킹": {"keywords":["스토킹","접근금지","전연인"],"bg":(75,0,130),"sub":(55,0,100),"accent":(140,80,180),"badge":"STALK"},
    "마약": {"keywords":["마약","필로폰","대마","투약","소지"],"bg":(30,30,30),"sub":(20,20,20),"accent":(100,100,100),"badge":"DRUG"},
    "노동": {"keywords":["해고","임금","퇴직금","산재","최저임금","실업급여","밀린"],"bg":(0,40,80),"sub":(0,30,60),"accent":(60,100,160),"badge":"LABOR"},
    "학폭": {"keywords":["학폭","학교폭력","따돌림","왕따"],"bg":(140,100,200),"sub":(110,75,170),"accent":(180,150,230),"badge":"SCHOOL"},
    "상속": {"keywords":["상속","한정승인","유류분","상속포기"],"bg":(120,80,40),"sub":(90,60,30),"accent":(170,130,80),"badge":"INHERIT"},
    "기본": {"keywords":[],"bg":(45,52,54),"sub":(30,35,38),"accent":(120,130,135),"badge":"LAW"},
}

TIP_COLORS = [
    {"bg":(0,123,255),"sub":(0,90,200),"accent":(80,180,255),"badge":"TIP"},
    {"bg":(40,167,69),"sub":(30,130,55),"accent":(100,210,130),"badge":"CHECK"},
    {"bg":(255,127,0),"sub":(210,100,0),"accent":(255,180,80),"badge":"POINT"},
]

def detect_category(title):
    for k,v in CATEGORIES.items():
        if k=="기본": continue
        for kw in v["keywords"]:
            if kw in title.lower(): return v
    return CATEGORIES["기본"]

def get_font(size, bold=False):
    paths = [
        f"C:/Windows/Fonts/{'malgunbd' if bold else 'malgun'}.ttf",
        f"C:/Windows/Fonts/{'NanumGothicBold' if bold else 'NanumGothic'}.ttf",
        "C:/Windows/Fonts/gulim.ttc",
        "/System/Library/Fonts/AppleSDGothicNeo.ttc",
        f"/usr/share/fonts/truetype/nanum/{'NanumGothicBold' if bold else 'NanumGothic'}.ttf",
    ]
    for p in paths:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, size)
            except: continue
    return ImageFont.load_default()

def wrap_text(text, max_chars=18):
    if len(text) <= max_chars: return [text]
    lines, cur = [], ""
    for ch in text:
        cur += ch
        if len(cur) >= max_chars:
            sp = cur.rfind(' ')
            if sp > max_chars//2: lines.append(cur[:sp]); cur = cur[sp+1:]
            else: lines.append(cur); cur = ""
    if cur: lines.append(cur)
    return lines[:3]

def draw_bg(draw, w, h, bg, sub):
    draw.rectangle([0,0,w,h], fill=bg)
    for i in range(-h, w+h, 80): draw.line([(i,0),(i+h,h)], fill=sub, width=2)

def generate_thumbnail(title, output_path, brand=BRAND_TEXT):
    cat = detect_category(title)
    img = Image.new('RGB', (WIDTH,HEIGHT), cat["bg"])
    draw = ImageDraw.Draw(img)
    draw_bg(draw, WIDTH, HEIGHT, cat["bg"], cat["sub"])

    # 카드 배경
    m = 60
    card_top, card_bottom = 80, HEIGHT - 80
    card_color = tuple(min(c+25,255) for c in cat["bg"])
    draw.rounded_rectangle([m, card_top, WIDTH-m, card_bottom], radius=20, fill=card_color)

    # 제목 텍스트 — 정중앙 계산
    font = get_font(44, True)
    lines = wrap_text(title, 20)
    line_height = 60

    line_widths = []
    for line in lines:
        bbox = draw.textbbox((0,0), line, font=font)
        line_widths.append(bbox[2] - bbox[0])

    total_text_height = len(lines) * line_height
    badge_height = 45
    badge_gap = 20
    content_height = badge_height + badge_gap + total_text_height

    # 카드 내 수직 중앙
    card_center_y = (card_top + card_bottom) / 2
    content_start_y = card_center_y - content_height / 2

    # 카테고리 뱃지 — 수평 중앙
    badge_font = get_font(22, True)
    badge_text = cat["badge"]
    badge_bbox = draw.textbbox((0,0), badge_text, font=badge_font)
    badge_w = badge_bbox[2] - badge_bbox[0]
    badge_x = (WIDTH - badge_w - 24) / 2
    draw.rounded_rectangle(
        [badge_x, content_start_y, badge_x + badge_w + 24, content_start_y + badge_height],
        radius=22, fill=cat["accent"]
    )
    draw.text((badge_x + 12, content_start_y + 8), badge_text, font=badge_font, fill=cat["sub"])

    # 제목 각 줄 — 수평 중앙
    text_start_y = content_start_y + badge_height + badge_gap
    for i, line in enumerate(lines):
        x = (WIDTH - line_widths[i]) / 2
        y = text_start_y + i * line_height
        draw.text((x+2, y+2), line, font=font, fill=(0,0,0,80))
        draw.text((x, y), line, font=font, fill=(255,255,255))

    # 브랜드 — 우하단
    bf = get_font(24, True)
    bbox = draw.textbbox((0,0), brand, font=bf)
    draw.text((WIDTH-m-(bbox[2]-bbox[0])-30, card_bottom-50), brand, font=bf, fill=cat["accent"])
    draw.line([(m+30, card_bottom-70), (WIDTH-m-30, card_bottom-70)], fill=cat["accent"], width=2)

    img.save(output_path, 'JPEG', quality=90)

def generate_tip_card(tip_text, tip_num, output_path, brand=BRAND_TEXT):
    color = TIP_COLORS[(tip_num-1)%len(TIP_COLORS)]
    img = Image.new('RGB', (WIDTH,HEIGHT), color["bg"])
    draw = ImageDraw.Draw(img)
    draw_bg(draw, WIDTH, HEIGHT, color["bg"], color["sub"])

    m = 80
    card_top, card_bottom = 60, HEIGHT - 60
    card_color = tuple(min(c+30,255) for c in color["bg"])
    draw.rounded_rectangle([m, card_top, WIDTH-m, card_bottom], radius=25, fill=card_color)

    # 뱃지 — 수평 중앙
    bf = get_font(28, True)
    badge = f"핵심팁 {tip_num}"
    badge_bbox = draw.textbbox((0,0), badge, font=bf)
    badge_w = badge_bbox[2] - badge_bbox[0]
    badge_x = (WIDTH - badge_w - 30) / 2
    draw.rounded_rectangle([badge_x, card_top+25, badge_x+badge_w+30, card_top+65], radius=10, fill=color["accent"])
    draw.text((badge_x+15, card_top+30), badge, font=bf, fill=color["sub"])

    # 팁 텍스트 — 정중앙
    font = get_font(36, True)
    lines = wrap_text(tip_text, 22)
    line_height = 55

    line_widths = []
    for line in lines:
        bbox = draw.textbbox((0,0), line, font=font)
        line_widths.append(bbox[2] - bbox[0])

    total_text_height = len(lines) * line_height
    available_top = card_top + 80
    available_bottom = card_bottom - 60
    text_center_y = (available_top + available_bottom) / 2
    text_start_y = text_center_y - total_text_height / 2

    for i, line in enumerate(lines):
        x = (WIDTH - line_widths[i]) / 2
        y = text_start_y + i * line_height
        draw.text((x+2, y+2), line, font=font, fill=(0,0,0,60))
        draw.text((x, y), line, font=font, fill=(255,255,255))

    # 브랜드 좌하단
    bf2 = get_font(20, True)
    draw.text((m+30, card_bottom-45), brand, font=bf2, fill=color["accent"])

    img.save(output_path, 'JPEG', quality=90)

def parse_md(filepath):
    """content/blog/ YAML frontmatter 형식 파싱

    파일 구조:
    ---
    title: "제목"
    ...
    ---
    ## 소제목
    ### Tip 1. 핵심팁 내용
    ### Tip 2. ...
    ### Tip 3. ...
    """
    with open(filepath,'r',encoding='utf-8') as f: content=f.read()

    title=""
    # YAML frontmatter에서 title 추출
    parts = content.split('---', 2)
    if len(parts) >= 3:
        frontmatter = parts[1]
        body = parts[2]
        title_match = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
        if title_match:
            title = title_match.group(1).strip()
    else:
        body = content

    # fallback: 본문에서 H1/H2 추출
    if not title:
        h = re.search(r'^#{1,2}\s+(.+)', body, re.MULTILINE)
        if h: title = re.sub(r'\*\*(.+?)\*\*', r'\1', h.group(1)).strip()

    # 팁 추출: ### Tip N. 텍스트 형식
    tips = []
    for m in re.finditer(r'###\s+Tip\s+\d+[.．]\s*(.+)', body):
        tip_text = m.group(1).strip()
        # 마크다운 볼드 제거
        tip_text = re.sub(r'\*\*(.+?)\*\*', r'\1', tip_text)
        # "— " 뒤의 부연설명 제거 (썸네일에 너무 길어짐)
        tip_text = re.split(r'\s*[—\-]{1,2}\s+', tip_text)[0]
        if len(tip_text) > 5:
            tips.append(tip_text)

    # fallback: 핵심팁/포인트 패턴
    if not tips:
        for m in re.finditer(r'핵심\s*(?:팁|포인트)\s*\d*[：:]\s*(.+)', body):
            tips.append(m.group(1).strip())

    return title, tips[:3]

def generate_all_images(content_dir=CONTENT_DIR, output_dir=OUTPUT_DIR, brand=BRAND_TEXT):
    os.makedirs(output_dir, exist_ok=True)
    md_files = sorted(glob.glob(os.path.join(content_dir,'*.md')))
    if not md_files: print(f"❌ {content_dir}에 md 파일 없음"); return
    print(f"📂 {len(md_files)}개 md 파일\n📁 저장: {output_dir}\n")
    total=0
    for fp in md_files:
        base=os.path.basename(fp).replace('.md','')
        title,tips=parse_md(fp)
        print(f"  📄 {os.path.basename(fp)}")
        tp=os.path.join(output_dir,f"{base}.jpg")
        if not os.path.exists(tp):
            try:
                generate_thumbnail(title,tp,brand)
                cn=[k for k,v in CATEGORIES.items() if v==detect_category(title)][0]
                print(f"     ✅ 썸네일 [{cn}]"); total+=1
            except Exception as e: print(f"     ❌ 썸네일: {e}")
        else:
            print(f"     ⏭️ 썸네일 이미 존재")
        for i,tip in enumerate(tips):
            tp2=os.path.join(output_dir,f"{base}_tip{i+1}.jpg")
            if not os.path.exists(tp2):
                try:
                    generate_tip_card(tip,i+1,tp2,brand)
                    print(f"     ✅ 팁{i+1}: {tip[:30]}..."); total+=1
                except Exception as e: print(f"     ❌ 팁{i+1}: {e}")
        if not tips: print(f"     ⚠️ 핵심팁 없음")
        print()
    print(f"{'='*50}\n📊 완료: {total}개 이미지 ({len(md_files)}개 글)")

if __name__=='__main__':
    import argparse
    p=argparse.ArgumentParser()
    p.add_argument('--content-dir',default=CONTENT_DIR)
    p.add_argument('--output-dir',default=OUTPUT_DIR)
    p.add_argument('--brand',default=BRAND_TEXT)
    a=p.parse_args()
    generate_all_images(a.content_dir,a.output_dir,a.brand)
