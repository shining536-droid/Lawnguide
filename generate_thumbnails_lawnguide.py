#!/usr/bin/env python3
"""
로앤가이드 네이버 블로그 썸네일 + 핵심팁 카드 자동 생성
- domain 기반 카테고리 매핑
- 제목/팁 텍스트 정중앙 배치
- Pillow만 사용
"""
import os, re, glob
from PIL import Image, ImageDraw, ImageFont

CONTENT_DIR = "./content/blog"
OUTPUT_DIR = "./content/thumbnails"
BRAND_TEXT = "로앤가이드"
WIDTH, HEIGHT = 1200, 630

# 카테고리 색상 정의 (keywords 제거 — domain 매핑으로 대체)
CAT_FRAUD = {"bg":(220,53,69),"sub":(180,40,55),"accent":(255,120,130),"badge":"FRAUD"}
CAT_CRIME = {"bg":(128,0,128),"sub":(100,0,100),"accent":(180,100,180),"badge":"CRIME"}
CAT_ASSAULT = {"bg":(255,127,0),"sub":(210,100,0),"accent":(255,180,80),"badge":"ASSAULT"}
CAT_DIVORCE = {"bg":(41,98,255),"sub":(30,75,200),"accent":(100,160,255),"badge":"DIVORCE"}
CAT_LEASE = {"bg":(0,150,100),"sub":(0,120,80),"accent":(80,200,150),"badge":"LEASE"}
CAT_HONOR = {"bg":(0,51,102),"sub":(0,40,80),"accent":(60,120,180),"badge":"HONOR"}
CAT_DUI = {"bg":(153,0,0),"sub":(120,0,0),"accent":(200,80,80),"badge":"DUI"}
CAT_STALK = {"bg":(75,0,130),"sub":(55,0,100),"accent":(140,80,180),"badge":"STALK"}
CAT_DRUG = {"bg":(30,30,30),"sub":(20,20,20),"accent":(100,100,100),"badge":"DRUG"}
CAT_LABOR = {"bg":(0,40,80),"sub":(0,30,60),"accent":(60,100,160),"badge":"LABOR"}
CAT_SCHOOL = {"bg":(140,100,200),"sub":(110,75,170),"accent":(180,150,230),"badge":"SCHOOL"}
CAT_INHERIT = {"bg":(120,80,40),"sub":(90,60,30),"accent":(170,130,80),"badge":"INHERIT"}
CAT_DEFAULT = {"bg":(45,52,54),"sub":(30,35,38),"accent":(120,130,135),"badge":"LAW"}

DOMAIN_CATEGORIES = {
    "fraud": CAT_FRAUD,
    "sex-crime": CAT_CRIME,
    "child-sex-crime": CAT_CRIME,
    "digital-sex-crime": CAT_CRIME,
    "assault": CAT_ASSAULT,
    "divorce": CAT_DIVORCE,
    "child-support": CAT_DIVORCE,
    "jeonse": CAT_LEASE,
    "jeonse-fraud": CAT_LEASE,
    "defamation": CAT_HONOR,
    "dui": CAT_DUI,
    "stalking": CAT_STALK,
    "drug-crime": CAT_DRUG,
    "wage": CAT_LABOR,
    "dismissal": CAT_LABOR,
    "retirement": CAT_LABOR,
    "industrial-accident": CAT_LABOR,
    "unemployment": CAT_LABOR,
    "sexual-harassment": CAT_LABOR,
    "school-violence": CAT_SCHOOL,
    "inheritance": CAT_INHERIT,
    "rehabilitation": CAT_INHERIT,
    "bankruptcy": CAT_INHERIT,
    "small-claims": CAT_DEFAULT,
    "real-estate-sale": CAT_LEASE,
    "real-estate-auction": CAT_LEASE,
    "neighbor-dispute": CAT_DEFAULT,
    "sangga": CAT_LEASE,
    "prostitution": CAT_DRUG,
    "traffic-accident": CAT_DUI,
}

# badge → 카테고리명 역매핑 (로그 출력용)
BADGE_TO_NAME = {
    "FRAUD":"사기","CRIME":"성범죄","ASSAULT":"폭행","DIVORCE":"이혼",
    "LEASE":"전세","HONOR":"명예훼손","DUI":"음주운전","STALK":"스토킹",
    "DRUG":"마약","LABOR":"노동","SCHOOL":"학폭","INHERIT":"상속","LAW":"기본",
}

TIP_COLORS = [
    {"bg":(0,123,255),"sub":(0,90,200),"accent":(80,180,255),"badge":"TIP"},
    {"bg":(40,167,69),"sub":(30,130,55),"accent":(100,210,130),"badge":"CHECK"},
    {"bg":(255,127,0),"sub":(210,100,0),"accent":(255,180,80),"badge":"POINT"},
]

def get_category(domain):
    """domain 문자열로 카테고리 색상 딕셔너리 반환"""
    return DOMAIN_CATEGORIES.get(domain, CAT_DEFAULT)

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

def generate_thumbnail(title, output_path, cat=None, brand=BRAND_TEXT):
    if cat is None: cat = CAT_DEFAULT
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
    """content/blog/ YAML frontmatter 형식 파싱 — title + domain + tips 추출"""
    with open(filepath,'r',encoding='utf-8') as f: content=f.read()

    title=""
    domain=""
    parts = content.split('---', 2)
    if len(parts) >= 3:
        frontmatter = parts[1]
        body = parts[2]
        title_match = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
        if title_match:
            title = title_match.group(1).strip()
        domain_match = re.search(r'^domain:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
        if domain_match:
            domain = domain_match.group(1).strip()
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
        tip_text = re.sub(r'\*\*(.+?)\*\*', r'\1', tip_text)
        tip_text = re.split(r'\s*[—\-]{1,2}\s+', tip_text)[0]
        if len(tip_text) > 5:
            tips.append(tip_text)

    # fallback: 핵심팁/포인트 패턴
    if not tips:
        for m in re.finditer(r'핵심\s*(?:팁|포인트)\s*\d*[：:]\s*(.+)', body):
            tips.append(m.group(1).strip())

    return title, domain, tips[:3]

def generate_all_images(content_dir=CONTENT_DIR, output_dir=OUTPUT_DIR, brand=BRAND_TEXT, force=False):
    os.makedirs(output_dir, exist_ok=True)
    md_files = sorted(glob.glob(os.path.join(content_dir,'*.md')))
    if not md_files: print(f"❌ {content_dir}에 md 파일 없음"); return
    print(f"📂 {len(md_files)}개 md 파일\n📁 저장: {output_dir}")
    if force: print("🔄 강제 덮어쓰기 모드")
    print()
    total=0
    for fp in md_files:
        base=os.path.basename(fp).replace('.md','')
        title, domain, tips = parse_md(fp)
        cat = get_category(domain)
        cat_name = BADGE_TO_NAME.get(cat["badge"], "기본")
        print(f"  📄 {os.path.basename(fp)} [{cat_name}]")
        tp=os.path.join(output_dir,f"{base}.jpg")
        if force or not os.path.exists(tp):
            try:
                generate_thumbnail(title, tp, cat, brand)
                print(f"     ✅ 썸네일 [{cat_name}]"); total+=1
            except Exception as e: print(f"     ❌ 썸네일: {e}")
        else:
            print(f"     ⏭️ 썸네일 이미 존재")
        for i,tip in enumerate(tips):
            tp2=os.path.join(output_dir,f"{base}_tip{i+1}.jpg")
            if force or not os.path.exists(tp2):
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
    p.add_argument('--force',action='store_true',help='기존 이미지 덮어쓰기')
    a=p.parse_args()
    generate_all_images(a.content_dir,a.output_dir,a.brand,a.force)
