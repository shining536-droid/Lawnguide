import { SpokePage } from '../spoke-pages';

// batch75 assault + dui — 7개 (2026-05-23)
//
// 고유 존재 이유:
// assault 4:
// 1. 경기장 응원석 폭행 — '야구장 + 상대팀 팬 + 음료수병 + 전치 3주' 트랙
// 2. 주차 시비 폭행 (가해 혐의) — '마트 주차장 + 출차 시비 + 손으로 밀침' 트랙
// 3. 엘리베이터 시비 폭행 — '아파트 + 층간소음·반려동물 + CCTV 확보' 트랙
// 4. 요양보호사 노인 폭행 — '75세 부친 + 요양시설 + 골절 + 한 달 뒤 CCTV 확인' 트랙
//
// dui 3:
// 5. 캠핑카 시동 켠 채 음주 — '캠핑장 + RV + 에어컨 가동 + 운전 의사 없음 항변' 트랙
// 6. 전기자전거 음주 — '페달 보조 + 전동킥보드 X + 도로교통법 적용 다툼' 트랙
// 7. 측정 지연·입헹굼 항변 — '30분 뒤 측정 + 입헹굼 요청 없음 + 절차 위반 다툼' 트랙

export const spokesBatch75AssaultDui: SpokePage[] = [
  // ─── 1. assault-stadium-fan-rival-team-track ───
  {
    domain: 'assault',
    slug: 'assault-stadium-fan-rival-team-track',
    keyword: '경기장 응원석 폭행',
    questionKeyword: '야구장 응원석에서 상대팀 팬과 시비가 붙어 음료수병으로 가격당했어요. 전치 3주 진단인데 어떻게 대응하나요?',
    ctaKeyword: '경기장 응원석 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경기장 응원석 폭행 — 5단계 특수상해 다툼 | 로앤가이드',
      description:
        '야구장·축구장 응원석 폭행 시 특수상해·증거 보존·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"잠실야구장 외야 응원석에서 본인은 응원하던 중 옆자리 상대팀 팬과 응원 소리·자리 문제로 시비가 시작됐고, 상대가 갑자기 들고 있던 음료수병(500ml 페트병에 얼음·음료 가득)을 본인 머리·얼굴 부위에 휘둘러 가격했습니다. 본인은 즉시 의식 흐려졌고 119 이송 + 응급실 진료 결과 전치 3주(타박상·찰과상·뇌진탕 의심) 진단을 받았어요. 경기장 안전요원이 즉시 제지했고 CCTV 영상·주변 관중 증언·구급 기록이 확보된 상태입니다. 상대는 \'우발적이었다\'며 합의금 100만 원을 제시했지만 본인은 거부하고 형사·민사 동시 대응을 검토 중이에요." 형법 제258조의2는 \'위험한 물건 휴대 상해\'를 특수상해로 가중 평가하고, 음료수병은 사안에 따라 위험한 물건으로 평가될 소지가 있는 영역입니다. 피해자라면 ① 특수상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 평가 ② 증거 ③ 고소 ④ 합의 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경기장 응원석 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 특수상해 평가</strong> — 음료수병 = 위험한 물건 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — CCTV·증인·구급 기록.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제258조의2 특수상해.</li>\n<li><strong>④ 합의</strong> — 처벌불원 + 합의금.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음료수병이라도 가격 부위·강도·내용물(얼음·액체 가득)에 따라 위험한 물건으로 평가될 소지가 있습니다. 특수상해는 1년 이상 10년 이하 가중. 합의금 100만 원은 전치 3주 + 뇌진탕 의심 영역에서 과소 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 응급실 기록·MRI·진단서.</li>\n<li><strong>2단계 — 경기장 CCTV·증인 확보 (1주)</strong> — 구단·안전요원에 영상 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 특수상해 + 폭행 고소.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 적정 합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경기장 응원석 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>응급실 기록·진단서(전치 3주)·MRI</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>경기장 CCTV 영상</strong></li>\n<li><strong>안전요원·주변 관중 증언</strong></li>\n<li><strong>119 구급 기록·이송 자료</strong></li>\n<li><strong>티켓·좌석 자료·경기 시간 자료</strong></li>\n<li><strong>음료수병·잔해 사진·압수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경기장 CCTV는 보존 기간이 짧을 수 있으므로 1주 안에 구단·안전요원에 보존 요청 권장. 뇌진탕 의심은 후속 진료·MRI로 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특수상해 평가</strong> — 음료수병 = 위험한 물건.</li>\n<li><strong>우발성 다툼</strong> — 가해자 \'우발\' 항변.</li>\n<li><strong>합의금 산정</strong> — 전치 3주 + 후유증.</li>\n<li><strong>구단 책임</strong> — 안전 관리 의무.</li>\n<li><strong>민사 배상</strong> — 치료·위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 평가 영역',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 상해 사건에서 상해진단서의 증명력 평가 영역을 다루면서, 진단서의 발급 경위·진료 기록·치료 경과 등이 결합되어 평가되어야 한다고 본 사례 흐름이 있고, 경기장 응원석 폭행에서도 동일하게 진단서·CCTV·구급 기록 결합 입증이 핵심 트랙입니다.',
        takeaway: '응원석 폭행은 CCTV + 진단서 + 증인 결합 입증 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '음료수병이 위험한 물건으로 평가되나요?',
        answer:
          '<strong>가격 부위·내용물·강도에 따라 평가될 소지가 있는 영역입니다.</strong> 사례 분석 필요.',
      },
      {
        question: '합의금 100만 원은 적정한가요?',
        answer:
          '<strong>전치 3주 + 뇌진탕 의심은 과소 평가 영역입니다.</strong> 후유증 평가 추가.',
      },
      {
        question: 'CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>구단·안전요원에 즉시 보존 요청 영역입니다.</strong> 1주 안에 진행.',
      },
      {
        question: '구단도 책임 청구 가능한가요?',
        answer:
          '<strong>안전 관리 의무 위반 평가 영역입니다.</strong> 정황 자료 결정.',
      },
      {
        question: '뇌진탕 후유증은 어떻게 입증하나요?',
        answer:
          '<strong>후속 진료·MRI·신경과 진단 결정 영역입니다.</strong> 치료 기록 보존.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 합의금 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '폭행 형사·민사 청구', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '폭행 의료비·일실 청구', href: '/guide/assault/assault-medical-cost-timeline' },
    ],
  },

  // ─── 2. assault-parking-lot-blocking-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-parking-lot-blocking-dispute-track',
    keyword: '주차 시비 폭행 — 가해 혐의',
    questionKeyword: '마트 주차장에서 출차 시비 중 상대를 손으로 밀쳤는데 폭행으로 고소한다고 합니다. 어떻게 대응하나요?',
    ctaKeyword: '주차 시비 폭행 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '주차 시비 폭행 혐의 — 5단계 정당방위 다툼 | 로앤가이드',
      description:
        '주차장 출차 시비 폭행 혐의를 받고 있다면 정당방위·합의·양형 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 대형마트 지하주차장에서 장보기를 마치고 출차하려는데 옆 차량이 본인 차 뒤에 비스듬히 주차해 출차가 막힌 상황이었습니다. 차주를 기다리다 15분이 지나 마침내 나타난 상대(50대 남성)에게 \'좀 비켜 달라\'고 요청했는데 상대가 욕설·반말로 응대하며 본인 차를 발로 차려 했고, 본인은 이를 막으려 상대의 어깨를 손으로 밀쳤습니다. 상대는 \'폭행으로 고소하겠다\'며 경찰에 신고했고 본인은 폭행 혐의를 받고 있는 상황이에요. 마트 CCTV는 일부 사각지대이지만 본인 차 블랙박스가 시비 정황의 일부를 기록하고 있습니다." 형법 제260조 폭행은 신체 접촉만으로도 성립 평가 영역이지만, 정당방위(제21조)·과잉방위 + 우발 + 상호 시비 평가가 종합 사정으로 평가될 소지가 있는 트랙입니다. 혐의를 받고 있다면 ① 정당방위 평가 ② 증거 보존 ③ 합의 ④ 진술 전략 ⑤ 양형 5중 트랙이 가능한 영역. 대응은 ① 방위 ② 증거 ③ 합의 ④ 진술 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 주차 시비 폭행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 방위·증거·합의·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정당방위 평가</strong> — 상대 발길 시도 = 부당 침해 평가 가능.</li>\n<li><strong>② 증거 보존</strong> — 블랙박스·CCTV·주변 증인.</li>\n<li><strong>③ 합의</strong> — 처벌불원 = 양형 핵심.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 정황 일관 진술.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·반성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상대가 본인 차에 발길질 시도 = 재물·신체 침해 평가 가능 영역. 다만 \'어깨를 미는\' 행위가 방위 한계 안인지 다툼 사정. 합의·초범·블랙박스 정황이 양형 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·합의·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 자문 권장.</li>\n<li><strong>2단계 — 블랙박스·CCTV 보존 (1주)</strong> — 시비 정황 영상 확보.</li>\n<li><strong>3단계 — 합의 협의 (1~2주)</strong> — 처벌불원 의사 협의.</li>\n<li><strong>4단계 — 경찰·검찰 진술 (1~2개월)</strong> — 정당방위·우발 일관 진술.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 반성문·자원봉사·합의서.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차 시비 폭행 혐의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 방위·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>본인 차량 블랙박스 영상</strong></li>\n<li><strong>마트 주차장 CCTV (구역별)</strong></li>\n<li><strong>주변 증인·동행자 진술</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>본인 신원·직장·가족·초범 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블랙박스 영상이 \'상대 발길 시도 → 본인 방어\' 흐름을 보여주면 정당방위 평가에 결정 사정. 경찰 출석 전 변호인 자문 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당방위 한계</strong> — 어깨 미는 행위.</li>\n<li><strong>상호 시비 평가</strong> — 욕설·반말 정황.</li>\n<li><strong>합의 협의</strong> — 처벌불원.</li>\n<li><strong>초범 평가</strong> — 전과 부재.</li>\n<li><strong>양형 자료</strong> — 반성·자원봉사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭력행위 범죄단체 평가 영역',
        summary:
          '대법원 2025도14142(대법원, 2026.01.15 선고) 영역에서 법원은 폭력행위 등 처벌에 관한 법률 범죄단체 평가 영역을 다루면서, 폭행·상해 사건에서 정황·상호 관계·우발성 평가가 결정 사정이라고 본 사례 흐름이 있고, 주차 시비 폭행에서도 동일하게 시비 정황·상호 행위·방위성 평가가 핵심 트랙입니다.',
        takeaway: '주차 시비 폭행은 블랙박스 + 정당방위 평가 결합 영역 — 변호인 상담·합의 권장.',
      },
    ],
    faq: [
      {
        question: '어깨를 미는 정도도 폭행인가요?',
        answer:
          '<strong>신체 접촉만으로도 폭행 성립 평가 영역입니다.</strong> 다만 정당방위·합의로 감경 가능.',
      },
      {
        question: '상대가 차에 발길 시도하면 정당방위인가요?',
        answer:
          '<strong>부당 침해 + 상당성 평가 영역입니다.</strong> 블랙박스 정황 결정.',
      },
      {
        question: '합의금은 얼마 정도 필요한가요?',
        answer:
          '<strong>상대 부상 정도·전과에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '초범인데 처분은 어떻게 되나요?',
        answer:
          '<strong>합의 + 반성 시 기소유예·약식 가능한 영역입니다.</strong> 양형 자료 결정.',
      },
      {
        question: '경찰 출석 전에 변호인 자문 받아야 하나요?',
        answer:
          '<strong>진술 일관성·정당방위 입증에 결정 사정 영역입니다.</strong> 자문 권장.',
      },
    ],
    cta: { text: '폭행 혐의 대응 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 혐의 첫 대응', href: '/guide/assault/assault-charged-first-response' },
      { label: '정당방위 평가 기준', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 합의금 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 형사·민사 청구', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 3. assault-elevator-confrontation-track ───
  {
    domain: 'assault',
    slug: 'assault-elevator-confrontation-track',
    keyword: '엘리베이터 시비 폭행',
    questionKeyword: '아파트 엘리베이터에서 층간소음·반려동물 시비 끝에 폭행당했고 CCTV 영상도 확보했어요. 어떻게 대응하나요?',
    ctaKeyword: '엘리베이터 시비 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '엘리베이터 시비 폭행 — 5단계 CCTV·고소 다툼 | 로앤가이드',
      description:
        '아파트 엘리베이터 폭행 시 CCTV 보존·층간소음·고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 아파트 1101호 거주자이고 평소 위층(1201호) 거주자와 층간소음·반려동물 짖음 문제로 갈등을 겪어왔습니다. 사건 당일 본인이 강아지를 안고 엘리베이터에 탑승했는데 위층 거주자가 함께 탑승하며 \'개 좀 어떻게 해라\'며 시비를 시작했고, 1층 도착 직전 상대가 본인 얼굴을 손바닥으로 1회 때리고 강아지 목줄을 잡아챘어요. 본인은 입술이 찢어지고 강아지도 놀라 도망갔으며, 다행히 엘리베이터 내 CCTV에 사건 전 과정이 녹화돼 관리사무소를 통해 영상을 확보했습니다. 진단서는 전치 2주 + 동물병원 진료비도 발생했어요." 형법 제257조 상해·제260조 폭행은 명확한 입증 사정 영역이고, 엘리베이터 CCTV는 결정적 증거로 평가됩니다. 피해자라면 ① 상해 평가 ② CCTV 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상(강아지 포함) 5중 트랙이 가능한 영역. 대응은 ① 평가 ② 증거 ③ 고소 ④ 합의 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 엘리베이터 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 2주 + 입술 찢어짐.</li>\n<li><strong>② CCTV 보존</strong> — 관리사무소 영상 확보.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해.</li>\n<li><strong>④ 합의</strong> — 처벌불원 + 합의금.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·동물병원비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 엘리베이터 CCTV는 가장 결정적 증거. 층간소음·반려동물 갈등 정황은 동기 사정으로 평가. 강아지 피해도 민사 배상 청구 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·CCTV 확보 (즉시)</strong> — 응급실 + 관리사무소 영상.</li>\n<li><strong>2단계 — 동물병원 진료·증거 (1주)</strong> — 강아지 진료 기록.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원 + 합의금.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료·위자료·동물 손해.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">엘리베이터 시비 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>응급실 진단서(전치 2주)·치료 기록</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>엘리베이터 CCTV 영상(관리사무소)</strong></li>\n<li><strong>강아지 동물병원 진료비·진단</strong></li>\n<li><strong>층간소음·반려동물 갈등 자료(과거 민원)</strong></li>\n<li><strong>관리사무소 사건 보고서</strong></li>\n<li><strong>이웃 증언·아파트 동·호수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 엘리베이터 CCTV는 보존 기간이 보통 1~2주이므로 즉시 관리사무소에 보존 요청. 과거 층간소음 민원 기록도 동기 사정으로 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해 평가</strong> — 전치 2주 + 후유증.</li>\n<li><strong>CCTV 보존</strong> — 관리사무소 협조.</li>\n<li><strong>강아지 손해</strong> — 동물병원·정신적 손해.</li>\n<li><strong>층간소음 정황</strong> — 동기 사정.</li>\n<li><strong>합의 협의</strong> — 처벌불원.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 평가 영역',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 상해 사건에서 상해진단서의 증명력 평가 영역을 다루면서, 진단서·진료 경과·CCTV 등 객관적 자료 결합 평가가 결정 사정이라고 본 사례 흐름이 있고, 엘리베이터 시비 폭행에서도 동일하게 진단서 + CCTV + 갈등 정황 결합 입증이 핵심 트랙입니다.',
        takeaway: '엘리베이터 폭행은 CCTV + 진단서 + 동기 정황 결합 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '엘리베이터 CCTV 보존 기간이 얼마나 되나요?',
        answer:
          '<strong>보통 1~2주 영역입니다.</strong> 즉시 관리사무소에 보존 요청 권장.',
      },
      {
        question: '강아지 피해도 배상 청구 가능한가요?',
        answer:
          '<strong>동물병원비·정신적 손해 청구 가능 영역입니다.</strong> 진료 기록 보존.',
      },
      {
        question: '층간소음 갈등이 동기로 평가되나요?',
        answer:
          '<strong>과거 민원 기록이 정황 자료로 평가 영역입니다.</strong> 관리사무소 자료 결정.',
      },
      {
        question: '합의금은 얼마 정도 필요한가요?',
        answer:
          '<strong>전치 2주 + 동물 피해 종합 평가 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '형사·민사 동시 진행 가능한가요?',
        answer:
          '<strong>별도 트랙으로 동시 진행 가능 영역입니다.</strong> 형사 후 민사 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 합의금 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '폭행 의료비·일실 청구', href: '/guide/assault/assault-medical-cost-timeline' },
      { label: '폭행 형사·민사 청구', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 4. assault-elderly-grandparent-shove-injury-track ───
  {
    domain: 'assault',
    slug: 'assault-elderly-grandparent-shove-injury-track',
    keyword: '요양보호사 노인 폭행',
    questionKeyword: '75세 부친이 요양시설에서 보호사에 의해 떠밀려 골절됐는데 한 달 뒤에야 CCTV로 확인했어요. 어떻게 대응하나요?',
    ctaKeyword: '요양시설 노인 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '요양시설 노인 폭행 — 5단계 노인학대 다툼 | 로앤가이드',
      description:
        '요양시설 노인 폭행·학대 시 CCTV·노인학대 신고·시설 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인의 부친(75세, 치매 경증·거동 불편)은 약 6개월 전부터 경기도 소재 노인요양시설에 입소해 있었고, 한 달 전 시설로부터 \'어르신이 화장실에서 넘어져 좌측 대퇴부 골절\'이라는 연락을 받았습니다. 본인은 시설 보고를 그대로 믿었지만, 부친이 병원에 옮겨진 뒤 \'그 보호사가 나를 밀쳤다\'고 반복해 말했고, 본인이 시설에 CCTV 영상 열람을 강력히 요청해 사건 한 달 뒤 영상을 확인했어요. 영상에는 보호사가 부친의 식사 거부에 화를 내며 어깨를 강하게 떠밀어 부친이 뒤로 넘어지는 장면이 명확히 녹화돼 있었고, 시설은 \'단순 낙상\'으로 보고를 조작한 정황이 있습니다." 노인복지법 제39조의9는 노인학대를 처벌 평가하고, 형법 폭행·상해와 결합 평가됩니다. 시설 측 보고 조작은 추가 책임 사정. 가족(보호자)이라면 ① 노인학대 신고 ② CCTV 보존 ③ 형사 고소 ④ 시설 행정 책임 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 신고 ② 증거 ③ 고소 ④ 행정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 요양시설 노인 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·증거·고소·행정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 노인학대 신고</strong> — 노인보호전문기관 1577-1389.</li>\n<li><strong>② CCTV 보존</strong> — 시설 영상 + 진료 기록.</li>\n<li><strong>③ 형사 고소</strong> — 노인복지법 + 형법 상해.</li>\n<li><strong>④ 시설 행정 책임</strong> — 지자체·복지부 신고.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·시설 책임.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 노인학대는 가중처벌 + 시설 행정 책임 별도 영역. 시설 보고 조작은 추가 평가 사정. CCTV는 결정적 증거. 1577-1389(노인보호전문기관) 즉시 신고.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·증거·고소·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 노인보호전문기관 신고 (즉시)</strong> — 1577-1389.</li>\n<li><strong>2단계 — CCTV·진료·시설 자료 보존 (1주)</strong> — 영상·진료·계약서.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 노인복지법 + 상해 고소.</li>\n<li><strong>4단계 — 지자체·복지부 신고 (1~2개월)</strong> — 시설 행정 조사 요청.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·시설 책임.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요양시설 노인 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원 진단서·MRI·골절 자료</strong></li>\n<li><strong>치료비·재활비 영수증</strong></li>\n<li><strong>요양시설 CCTV 영상</strong></li>\n<li><strong>시설 사건 보고서(조작 정황 자료)</strong></li>\n<li><strong>부친 진술·간병인·동료 노인 증언</strong></li>\n<li><strong>요양시설 계약서·입소 자료</strong></li>\n<li><strong>노인보호전문기관 신고 접수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 요양시설 CCTV는 의무 설치 영역이지만 보존 기간이 짧을 수 있어 즉시 보존 요청. 시설의 \'단순 낙상\' 보고와 CCTV 불일치 = 조작 책임 평가.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>노인학대 평가</strong> — 가중처벌.</li>\n<li><strong>CCTV 보존</strong> — 시설 협조 의무.</li>\n<li><strong>시설 보고 조작</strong> — 추가 책임.</li>\n<li><strong>시설 사용자 책임</strong> — 보호사 + 시설 다중.</li>\n<li><strong>행정 처분</strong> — 시설 영업 정지·취소.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>노인보호전문기관 1577-1389</strong></li>\n<li><strong>경찰 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 평가 영역',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 상해 사건에서 상해진단서의 증명력 평가 영역을 다루면서, 진단서·진료 경과·외부 증거 결합 평가가 결정 사정이라고 본 사례 흐름이 있고, 요양시설 노인 폭행에서도 동일하게 골절 진단 + CCTV + 시설 보고 모순 결합 입증이 핵심 트랙입니다.',
        takeaway: '요양시설 노인 폭행은 노인복지법 + 시설 책임 다중 영역 — 변호인 상담·즉시 신고 권장.',
      },
    ],
    faq: [
      {
        question: '요양시설 CCTV는 의무인가요?',
        answer:
          '<strong>노인복지법상 일정 규모 시설은 의무 설치 영역입니다.</strong> 보존 기간 즉시 확인.',
      },
      {
        question: '시설이 \'단순 낙상\'으로 보고 조작했다면?',
        answer:
          '<strong>추가 책임 평가 + 행정 처분 사정 영역입니다.</strong> CCTV 모순 증거 결정.',
      },
      {
        question: '보호사 + 시설 다중 책임 청구 가능한가요?',
        answer:
          '<strong>사용자 책임 + 안전 의무 다중 영역입니다.</strong> 시설법인 + 개인 모두.',
      },
      {
        question: '노인보호전문기관 신고는 어떻게 하나요?',
        answer:
          '<strong>1577-1389 전화 신고 영역입니다.</strong> 즉시 조사·보호 조치.',
      },
      {
        question: '시설 영업 정지·취소도 가능한가요?',
        answer:
          '<strong>지자체·복지부 행정 처분 영역입니다.</strong> 행정 신고 별도 트랙.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 합의금 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '폭행 의료비·일실 청구', href: '/guide/assault/assault-medical-cost-timeline' },
      { label: '폭행 형사·민사 청구', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 5. dui-camping-rv-parking-engine-on-track ───
  {
    domain: 'dui',
    slug: 'dui-camping-rv-parking-engine-on-track',
    keyword: '캠핑카 시동 켠 채 음주',
    questionKeyword: '캠핑장에서 RV 시동을 켠 채 에어컨 가동하며 음주 중 단속됐는데 운전 의사가 없었어요. 음주운전인가요?',
    ctaKeyword: '캠핑카 시동 음주 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '캠핑카 시동 음주 — 5단계 운전 의사 다툼 | 로앤가이드',
      description:
        '캠핑장 RV 시동 켠 채 음주 단속을 받고 있다면 운전 의사·도교법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 8월 한여름 강원도 캠핑장에서 가족과 캠핑 중 본인 소유 캠핑카(RV) 안에서 에어컨을 가동하며 휴식을 취하고 있었습니다. 더위 때문에 엔진 시동을 켜둔 상태로 차내에서 맥주 3캔을 마셨고, 캠핑카는 캠핑장 지정 사이트(흙바닥, 도로 아님)에 주차된 상태였어요. 새벽 1시경 캠핑장 인근을 순찰하던 경찰이 \'시동 켠 차내 음주\'를 발견하고 음주측정을 요구해 0.07% 결과가 나왔습니다. 경찰은 \'시동을 켰고 운전 가능 상태\'라며 음주운전 입건 절차를 진행했고, 본인은 \'캠핑장 사이트 + 에어컨 가동 + 운전 의사 전혀 없음\'을 주장하는 상황이에요." 도로교통법 제2조는 \'도로\' 정의 + \'운전\' 개념 평가 영역이고, 대법원은 \'시동 + 운전 의사 + 출발 가능성\' 종합 평가로 음주운전 성립 여부를 본 사례가 있는 트랙입니다. 혐의를 받고 있다면 ① 도로 평가 ② 운전 의사 ③ 시동 + 출발 가능성 ④ 형사 절차 ⑤ 양형 5중 트랙이 가능한 영역. 대응은 ① 도로 ② 의사 ③ 출발 ④ 형사 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 캠핑카 시동 음주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로·의사·출발·형사·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도로 평가</strong> — 캠핑장 사이트 = 도로 평가 다툼.</li>\n<li><strong>② 운전 의사</strong> — 에어컨 가동 정황.</li>\n<li><strong>③ 시동 + 출발 가능성</strong> — 종합 평가 사정.</li>\n<li><strong>④ 형사 절차</strong> — 입건·기소·재판.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·정황 종합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도로교통법은 \'도로에서의 운전\' 처벌. 캠핑장 사이트가 도로인지 + 운전 의사가 있었는지가 핵심 다툼. \'에어컨 가동 목적\'이 입증되면 운전 의사 부인 자료로 평가 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후.</li>\n<li><strong>2단계 — 캠핑장·차량 정황 자료 (1주)</strong> — 사이트 사진·기온·예약 기록.</li>\n<li><strong>3단계 — 운전 의사 부인 자료 (1~2주)</strong> — 동행 가족 진술·캠핑 일정.</li>\n<li><strong>4단계 — 형사 절차 (1~3개월)</strong> — 진술 + 정황 자료 제출.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 반성문·자원봉사·기부.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">캠핑카 시동 음주 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로·의사·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과</strong></li>\n<li><strong>캠핑장 예약·사이트 사진·지도</strong></li>\n<li><strong>당일 기온·에어컨 가동 자료</strong></li>\n<li><strong>동행 가족·일행 진술</strong></li>\n<li><strong>차량 정차 위치·도로 비교 자료</strong></li>\n<li><strong>본인 반성문·자원봉사·기부 자료</strong></li>\n<li><strong>면허 처분 통지서·행정심판 청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 캠핑장 사이트 사진 + 기온 자료(폭염) + 가족 진술이 \'에어컨 목적 + 운전 의사 부재\' 입증의 핵심. 변호인 자문이 양형 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로 평가</strong> — 캠핑장 사이트.</li>\n<li><strong>운전 의사</strong> — 에어컨 가동 정황.</li>\n<li><strong>출발 가능성</strong> — 종합 평가.</li>\n<li><strong>형사 절차</strong> — 입건·기소.</li>\n<li><strong>양형</strong> — 초범·반성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혈중알코올 상승기 추정 평가 영역',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 영역에서 법원은 도로교통법위반(음주운전) 사건에서 혈중알코올농도 상승기 추정 평가 영역을 다루면서, 음주 시점·측정 시점·운전 시점 평가가 결정 사정이라고 본 사례 흐름이 있고, 캠핑카 시동 음주 평가에도 \'운전 시점·의사·도로\' 종합 평가가 핵심 트랙입니다.',
        takeaway: '캠핑카 시동 음주는 \'도로 + 운전 의사\' 결합 평가 영역 — 변호인 상담·정황 자료 권장.',
      },
    ],
    faq: [
      {
        question: '캠핑장 사이트도 도로인가요?',
        answer:
          '<strong>일반 공중 통행이 가능한 곳이면 도로 평가 영역입니다.</strong> 사례별 판단.',
      },
      {
        question: '시동만 켰고 운전 안 했어도 음주운전인가요?',
        answer:
          '<strong>운전 의사 + 출발 가능성 종합 평가 영역입니다.</strong> 정황 결정.',
      },
      {
        question: '에어컨 가동 목적은 어떻게 입증하나요?',
        answer:
          '<strong>기온·동행자 진술·차량 위치 결정 영역입니다.</strong> 사진·기록 보존.',
      },
      {
        question: '면허는 어떻게 되나요?',
        answer:
          '<strong>0.07%는 정지 구간 영역입니다.</strong> 90일 내 행정심판 가능.',
      },
      {
        question: '초범인데 처분은 어떻게 되나요?',
        answer:
          '<strong>도로·의사 평가에 따라 다른 영역입니다.</strong> 변호인 자문 결정.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 처분', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 면허 취소', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부 효과', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '음주운전 재범 가중', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '측정 거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },

  // ─── 6. dui-electric-bike-power-assisted-track ───
  {
    domain: 'dui',
    slug: 'dui-electric-bike-power-assisted-track',
    keyword: '전기자전거 음주',
    questionKeyword: '페달 보조 전기자전거(전동킥보드 아님)로 음주 주행 중 단속됐어요. 도로교통법이 적용되나요?',
    ctaKeyword: '전기자전거 음주 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '전기자전거 음주 — 5단계 도로교통법 적용 다툼 | 로앤가이드',
      description:
        '페달 보조 전기자전거 음주 단속을 받고 있다면 PAS·도교법 분류·처벌 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 회사 회식 후 평소 출퇴근에 쓰던 페달 보조 방식(PAS, Pedal Assist System) 전기자전거를 타고 약 2km 거리 자택으로 귀가하던 중 동네 단속에 적발됐습니다. 본인 자전거는 전동킥보드(개인형 이동장치)가 아니라 \'페달을 밟아야 모터가 보조되는\' 일반 전기자전거이고, 최고속도는 25km/h 미만, 모터 출력 350W 영역이에요. 경찰은 음주측정을 요구해 0.06% 결과가 나왔고, \'전기자전거도 자전거 영역에서 음주 처벌 대상\'이라며 입건 절차를 진행했습니다. 본인은 \'전동킥보드와 다르고 자전거는 도로교통법 처벌 범위 다르다\'고 주장하는 상황이에요." 도로교통법은 자전거 음주(제44조 + 제156조)에 대해 \'20만 원 이하 벌금·구류·과료\' 영역을, 개인형 이동장치(전동킥보드)에 대해 \'10만 원 범칙금\' 영역을 별도 평가합니다. 페달 보조 전기자전거는 도로교통법상 \'자전거\' 평가 영역으로 분류되는 사례 흐름. 혐의를 받고 있다면 ① 자전거 분류 ② 도교법 적용 ③ 처벌 범위 ④ 면허 평가 ⑤ 양형 5중 트랙이 가능한 영역. 대응은 ① 분류 ② 적용 ③ 처벌 ④ 면허 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전기자전거 음주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분류·적용·처벌·면허·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자전거 분류</strong> — PAS = 자전거 평가 영역.</li>\n<li><strong>② 도교법 적용</strong> — 자전거 음주 처벌(제44조·제156조).</li>\n<li><strong>③ 처벌 범위</strong> — 20만 원 이하 벌금·구류·과료.</li>\n<li><strong>④ 면허 평가</strong> — 자전거는 면허 처분 없음(보유 면허 별개).</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·정황 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 페달 보조 전기자전거는 도교법상 자전거 평가 영역으로 자동차 음주(2년·1천만 원)보다 가벼운 영역. 다만 자동차 면허 보유자라면 처분에 영향이 있을 수 있는지 별도 검토. 전동킥보드와 분류 다른 점 입증이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·분류·정황 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후.</li>\n<li><strong>2단계 — 자전거 분류 자료 (1주)</strong> — 모델·출력·최고속도·인증.</li>\n<li><strong>3단계 — 운행 정황 자료 (1~2주)</strong> — 거리·시간·코스.</li>\n<li><strong>4단계 — 형사 절차 (1~2개월)</strong> — 진술 + 분류 자료.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 반성문·자원봉사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">전기자전거 음주 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 분류·정황·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과</strong></li>\n<li><strong>전기자전거 모델·인증 자료(KS·KC)</strong></li>\n<li><strong>모터 출력·최고속도 자료(350W·25km/h)</strong></li>\n<li><strong>구매 영수증·등록증·소유 자료</strong></li>\n<li><strong>운행 코스·거리 자료(지도·기록)</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>본인 신원·직장·가족 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 페달 보조 전기자전거의 \'PAS 방식 + 25km/h + 350W\' 인증 자료가 \'자전거 분류\' 입증의 핵심. 전동킥보드(스로틀 방식)와 명확히 구분.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자전거 분류</strong> — PAS = 자전거.</li>\n<li><strong>도교법 적용</strong> — 자전거 음주.</li>\n<li><strong>처벌 범위</strong> — 20만 원 이하.</li>\n<li><strong>면허 평가</strong> — 자전거는 별개.</li>\n<li><strong>전동킥보드 구분</strong> — 분류 다른 점.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혈중알코올 상승기 추정 평가 영역',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 영역에서 법원은 도로교통법위반(음주운전) 사건에서 혈중알코올농도 상승기 추정 평가 영역을 다루면서, 음주 시점·측정 시점·차량 분류 평가가 결정 사정이라고 본 사례 흐름이 있고, 전기자전거 음주 평가에도 \'차량 분류 + 도교법 적용 범위\' 평가가 핵심 트랙입니다.',
        takeaway: '전기자전거 음주는 \'PAS = 자전거\' 분류 평가 영역 — 변호인 상담·분류 자료 권장.',
      },
    ],
    faq: [
      {
        question: '전기자전거도 음주운전 처벌되나요?',
        answer:
          '<strong>자전거 음주(도교법 제156조) 평가 영역입니다.</strong> 20만 원 이하 영역.',
      },
      {
        question: '전동킥보드와 어떻게 다른가요?',
        answer:
          '<strong>PAS(페달 보조) = 자전거 / 스로틀 = 개인형 이동장치 영역입니다.</strong> 인증 결정.',
      },
      {
        question: '자동차 면허에 영향 있나요?',
        answer:
          '<strong>자전거 음주는 면허 처분 별개 영역입니다.</strong> 보유 면허 검토 권장.',
      },
      {
        question: '벌금은 얼마 정도인가요?',
        answer:
          '<strong>20만 원 이하 벌금·구류·과료 영역입니다.</strong> 정황·반성에 따라 변동.',
      },
      {
        question: '초범인데 어떻게 대응해야 하나요?',
        answer:
          '<strong>분류 자료 + 반성문이 결정 사정 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 처분', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 면허 취소', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부 효과', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '음주운전 재범 가중', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '측정 거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },

  // ─── 7. dui-test-delay-mouth-rinse-defense-track ───
  {
    domain: 'dui',
    slug: 'dui-test-delay-mouth-rinse-defense-track',
    keyword: '측정 지연·입헹굼 항변',
    questionKeyword: '음주측정 거부 후 30분 뒤 측정에서 입헹굼 요청도 없이 0.08% 나왔어요. 절차 위반 다툼 가능한가요?',
    ctaKeyword: '측정 지연 입헹굼 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주측정 지연 입헹굼 — 5단계 절차 위반 다툼 | 로앤가이드',
      description:
        '음주측정 지연·입헹굼 절차 위반을 받고 있다면 절차 무효·재측정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 회사 회식 후 자가용을 타고 귀가하던 중 야간 단속에 적발됐고, 처음에는 측정에 응하기 망설여 약 5분간 \'잠시만요\'라며 측정을 미뤘습니다. 경찰은 \'측정 거부\'로 입건 절차를 시작하려 했고, 본인이 그제서야 \'측정 받겠다\'고 응했으나 약 30분이 지난 시점에 측정이 이뤄졌어요. 그 과정에서 본인은 \'입헹굼 물을 달라\'고 요청했지만 경찰은 \'필요 없다\'며 거부했고, 직전에 본인이 구강청결제(알코올 함유 가능성)를 사용한 적도 있었습니다. 측정 결과 0.08%(취소 구간)가 나왔고 본인은 측정 절차 + 입헹굼 미실시 + 30분 지연으로 정확도 다툼 가능성을 검토 중이에요." 도로교통법 시행규칙 + 경찰청 지침은 \'음주측정 전 입헹굼·구강 내 잔류 알코올 제거·재측정\' 절차를 정하고, 대법원은 절차 미준수 시 측정 결과 증거능력 평가에 영향을 미친다고 본 사례 흐름 영역입니다. 혐의를 받고 있다면 ① 절차 위반 ② 입헹굼 미실시 ③ 측정 지연 ④ 재측정 요구 ⑤ 양형 5중 트랙이 가능한 영역. 대응은 ① 절차 ② 입헹굼 ③ 지연 ④ 재측정 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 측정 지연 입헹굼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 절차·입헹굼·지연·재측정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 절차 위반</strong> — 경찰청 지침 입헹굼 누락.</li>\n<li><strong>② 입헹굼 미실시</strong> — 구강청결제 잔류 사정.</li>\n<li><strong>③ 측정 지연</strong> — 30분 + 상승·하강 평가.</li>\n<li><strong>④ 재측정 요구</strong> — 혈액 채취 + 정확도 확보.</li>\n<li><strong>⑤ 양형</strong> — 절차·정황·반성 종합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주측정 절차 위반(입헹굼 누락·30분 지연)은 측정 결과 신뢰도 평가에 영향. 구강청결제 잔류는 측정값 왜곡 사정. 혈액 채취 재측정이 정확도 확보 트랙. 변호인 자문이 양형 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·절차·재측정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후.</li>\n<li><strong>2단계 — 측정 절차 자료 (1주)</strong> — 측정 시각·블랙박스·경찰 보고서.</li>\n<li><strong>3단계 — 입헹굼 미실시 입증 (1~2주)</strong> — 구강청결제·정황·증인.</li>\n<li><strong>4단계 — 형사 절차 (1~3개월)</strong> — 진술 + 절차 위반 주장.</li>\n<li><strong>5단계 — 양형 자료 + 행정심판</strong> — 반성문·자원봉사·90일 심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">측정 지연·입헹굼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 절차·정확도·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과·측정 시각</strong></li>\n<li><strong>경찰 측정 보고서·녹화 영상</strong></li>\n<li><strong>본인 차량 블랙박스·음성</strong></li>\n<li><strong>구강청결제 구매·사용 자료</strong></li>\n<li><strong>혈액 채취 결과(가능 시)</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>면허 처분 통지서·행정심판 청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경찰 측정 보고서·녹화 영상에 \'입헹굼 요청 거부\'·\'30분 지연\' 정황이 기록되면 절차 위반 입증의 핵심. 가능하면 측정 직후 병원 혈액 채취 별도 요청.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>절차 위반</strong> — 입헹굼 누락.</li>\n<li><strong>측정 지연</strong> — 30분 + 상승기.</li>\n<li><strong>구강청결제 잔류</strong> — 측정값 왜곡.</li>\n<li><strong>재측정 권리</strong> — 혈액 채취.</li>\n<li><strong>행정심판</strong> — 90일 별도 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혈중알코올 상승기 추정 평가 영역',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 영역에서 법원은 도로교통법위반(음주운전) 사건에서 혈중알코올농도 상승기 추정 평가 영역을 다루면서, 음주 시점·측정 시점·절차 평가가 결정 사정이라고 본 사례 흐름이 있고, 측정 지연·입헹굼 미실시 평가에서도 동일하게 절차 신뢰도·측정값 정확도 평가가 핵심 트랙입니다.',
        takeaway: '측정 지연·입헹굼 미실시는 절차 신뢰도 평가 영역 — 변호인 상담·재측정 자료 권장.',
      },
    ],
    faq: [
      {
        question: '입헹굼 미실시는 절차 위반인가요?',
        answer:
          '<strong>경찰청 지침상 입헹굼 권고 영역입니다.</strong> 다툼 자료로 평가 가능.',
      },
      {
        question: '30분 지연은 측정 결과에 어떻게 영향 있나요?',
        answer:
          '<strong>상승·하강기 평가 + 정확도 다툼 영역입니다.</strong> 시점 자료 결정.',
      },
      {
        question: '구강청결제도 측정값 영향 있나요?',
        answer:
          '<strong>알코올 함유 시 잔류 평가 영역입니다.</strong> 사용 자료 결정.',
      },
      {
        question: '혈액 채취 재측정은 어떻게 요청하나요?',
        answer:
          '<strong>측정 직후 본인 요청 + 병원 채취 영역입니다.</strong> 가능한 한 빠르게.',
      },
      {
        question: '면허 취소를 다툴 수 있나요?',
        answer:
          '<strong>90일 내 행정심판 청구 영역입니다.</strong> 형사와 별도 트랙.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 처분', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 면허 취소', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부 효과', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '음주운전 재범 가중', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '측정 거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },
];
