#!/usr/bin/env python3
"""
베베플랜 네이버 블로그 썸네일 + 핵심팁 카드 자동 생성
- 카테고리별 배경색 + 아이콘
- 제목/팁 텍스트 정중앙 배치
- Pillow만 사용
"""
import os, re, glob
from PIL import Image, ImageDraw, ImageFont

CONTENT_DIR = "./content/naver-blog"
OUTPUT_DIR = "./content/thumbnails"
BRAND_TEXT = "베베플랜"
WIDTH, HEIGHT = 1200, 630

CATEGORIES = {
    "대출": {"keywords":["대출","특례","전세","매매","금리","상환","대환","보금자리","주담대"],"bg":(41,98,255),"sub":(30,75,200),"accent":(100,160,255),"badge":"LOAN"},
    "육아휴직": {"keywords":["육아휴직","육휴","6+6","단축근무","급여","실수령","계약직","교사","공무원","연봉"],"bg":(0,184,148),"sub":(0,150,120),"accent":(100,220,190),"badge":"LEAVE"},
    "연말정산": {"keywords":["연말정산","세액공제","환급","공제","세금","결혼세액","의료비","연금저축","산후조리원"],"bg":(108,92,231),"sub":(85,70,200),"accent":(160,150,240),"badge":"TAX"},
    "동네추천": {"keywords":["동네","소아과","어린이집","야간진료","인프라","서울","경기"],"bg":(253,121,168),"sub":(220,90,140),"accent":(255,170,200),"badge":"AREA"},
    "기본": {"keywords":[],"bg":(45,52,54),"sub":(30,35,38),"accent":(120,130,135),"badge":"INFO"},
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
    with open(filepath,'r',encoding='utf-8') as f: content=f.read()
    title=""
    h = re.search(r'^#\s+(.+)', content, re.MULTILINE)
    if h: title=re.sub(r'\*\*(.+?)\*\*',r'\1',h.group(1)).strip()
    tips=[]
    for m in re.finditer(r'핵심\s*(?:팁|포인트)\s*\d*[：:]\s*(.+)', content):
        tips.append(m.group(1).strip())
    if not tips:
        for m in re.finditer(r'💡\s*(.+)', content):
            t=m.group(1).strip()
            if len(t)>10: tips.append(t)
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
