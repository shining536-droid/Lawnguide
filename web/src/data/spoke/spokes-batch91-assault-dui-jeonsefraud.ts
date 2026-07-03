import { SpokePage } from '../spoke-pages';

// batch91 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-08)
//
// 고유 존재 이유:
// 1. assault-elevator-dispute-track — 아파트 엘리베이터 시비 폭행에서 경미한 상처가 상해로 평가되는지 다투는 피해자 판단형 트랙. 상해 판단기준·구체적 신체상태가 핵심.
// 2. assault-pub-drunken-fight-track — 술집 만취 시비 폭행에서 직접·간접 유형력 행사가 폭행으로 평가되는지 다투는 피해자 판단형 트랙. 유형력 행사 범위·폭행 경계가 핵심.
// 3. assault-taxi-fare-dispute-track — 택시요금 시비 폭행에서 피해자 진술의 신빙성과 폭행·협박 정도를 다투는 피해자 절차형 트랙. 진술 신빙성 판단·고소 절차가 핵심.
// 4. assault-pickup-basketball-injury-track — 농구 경기 중 상해에서 상해진단서의 증명력을 다투는 피해자 판단형 트랙. 진단서 객관성·인과관계 증명이 핵심.
// 5. dui-next-morning-hangover-driving-track — 숙취 잔존알코올 음주운전에서 음주측정 응부·거부 성립을 다투는 accused 판단형 트랙. 측정 응답 경위·측정불응 의미가 핵심.
// 6. dui-mouthwash-false-reading-track — 구강청결제 음주측정 오인에서 측정 경위·임의수사 적법성을 다투는 accused 판단형 트랙. 측정 절차·임의수사 적법성이 핵심.
// 7. dui-property-damage-flee-after-drinking-track — 음주 후 물피도주에서 측정거부 가중조항 위헌·적용 법조를 다투는 accused 절차형 트랙. 가중조항 효력·행정 90일 트랙이 핵심.
// 8. jeonse-fraud-officetel-underwater-deposit-track — 오피스텔 깡통전세에서 임대차의 주된 목적이 채권회수일 때 대항력 부정을 다투는 피해자 판단형 트랙. 사용·수익 목적·대항력이 핵심.
// 9. jeonse-fraud-newbuild-villa-underwater-track — 신축빌라 깡통전세에서 임대인 파산·면책 후 보증금반환채권 회수를 다투는 피해자 판단형 트랙. 면책 효력·우선변제권 범위가 핵심.
// 10. jeonse-fraud-double-contract-broker-track — 이중계약 중개사 전세사기에서 보증금채권 양수·배당 후 임대차관계 존속을 다투는 피해자 절차형 트랙. 대항요건 존속·양수인 책임이 핵심.

export const spokesBatch91AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-elevator-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-elevator-dispute-track',
    keyword: '아파트 엘리베이터 폭행',
    questionKeyword: '아파트 엘리베이터 안에서 사소한 시비가 붙은 이웃이 저를 밀치고 때려 얼굴과 팔에 멍과 찰과상이 생겼어요. 상대는 \'그 정도 긁힌 건 상해도 아니다\'라며 폭행조차 아니라고 우깁니다. 이렇게 가벼워 보이는 상처도 상해로 다툴 수 있는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '아파트 엘리베이터 폭행 상해 판단 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '엘리베이터 폭행 — 5단계 상해 판단 점검 | 로앤가이드',
      description:
        '엘리베이터에서 시비로 밀치고 맞아 멍·찰과상이 생겼는데 상해가 아니라고 우긴다면 형법 제257조 상해의 판단기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트·오피스텔 엘리베이터 안에서 인사·소음·반려동물 등 사소한 문제로 이웃과 시비가 붙었는데, 감정이 격해진 상대가 저를 밀치고 손으로 때려 얼굴과 팔에 멍과 찰과상이 생긴 피해자입니다. 상대는 \'그 정도 긁힌 자국은 며칠이면 사라지는데 무슨 상해냐, 밀친 것뿐이라 폭행도 아니다\'라며 발뺌하는데, 이렇게 가벼워 보이는 상처도 상해로 평가될 수 있는지, 밀침·구타가 폭행으로 다퉈지는지 헷갈립니다. 좁은 엘리베이터에서 벌어진 일이라 더 당황스러운데, 어떤 순서로 진단·신고·고소를 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를, 같은 법 제257조 제1항은 상해한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 상해가 극히 경미해 굳이 치료할 필요가 없고 자연적으로 치유되며 일상생활에 지장이 없는 정도를 넘는 상처가 폭행으로 생긴 경우라면 상해에 해당할 수 있고, 신체 건강상태가 나쁘게 변경됐는지는 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 엘리베이터 + 시비 + 밀침·구타 결합은 \'상해 인정·폭행 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 상해 정도 ② 폭행 유형력 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 상해 ② 유형력 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 아파트 엘리베이터 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 정도·폭행 유형력·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 정도</strong> — 멍·찰과상의 부위·치유기간과 일상생활 지장 여부 정리.</li>\n<li><strong>② 폭행 유형력</strong> — 밀침·구타 등 신체에 대한 유형력 행사 정황 정리.</li>\n<li><strong>③ 고소</strong> — 상해(형법 제257조)·폭행(제260조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상처가 극히 경미해 치료가 필요 없는 정도를 넘는다면 상해로 평가될 여지가 있고, 그 판단은 피해자의 연령·성별·체격 등 구체적 신체상태를 기준으로 하는 영역. 엘리베이터 CCTV와 진단서로 밀침·구타 흐름과 상처 정도를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 엘리베이터 CCTV·휴대폰 영상, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 상해·유형력 정리 (수일 내)</strong> — 멍·찰과상의 부위·치유기간과 밀침·구타 정황 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·CCTV·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">아파트 엘리베이터 폭행 상해 판단 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 정도·폭행 유형력·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>엘리베이터 CCTV 영상 (밀침·구타 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (시비·폭언)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위·멍·찰과상 사진 (시간정보 포함)</strong></li>\n<li><strong>시비 경위 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>이웃·관리실·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 멍·찰과상이 가벼워 보여도 치료가 필요 없는 정도를 넘으면 상해로 평가될 여지가 있고 그 판단은 연령·성별·체격 등 구체적 신체상태를 기준으로 하므로, 상처 직후 사진과 진료기록·진단서로 부위·치유기간을 구체적으로 정리해두는 것이 도움이 됩니다. 엘리베이터 CCTV는 보관 기간이 짧을 수 있어 관리실에 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해 인정</strong> — 멍·찰과상이 상해로 평가될 정도인지.</li>\n<li><strong>경미성 다툼</strong> — 치료 필요 없는 극히 경미한 상처인지.</li>\n<li><strong>폭행 유형력</strong> — 밀침·구타가 폭행으로 인정되는지.</li>\n<li><strong>쌍방 여부</strong> — 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경미한 상처와 상해의 판단기준',
        summary:
          '대법원 2003도4606(대법원, 2003.09.26 선고) 영역에서 법원은 폭행에 수반하여 생긴 상처가 극히 경미해 굳이 치료할 필요가 없이 자연적으로 치유되고 일상생활에 아무런 지장이 없는 경우에는 상해에 해당하지 않을 수 있으나 그러한 정도를 넘는 상처라면 상해에 해당하며, 피해자의 건강상태가 나쁘게 변경되고 생활기능에 장애가 초래된 것인지는 객관적·일률적으로가 아니라 피해자의 연령·성별·체격 등 신체·정신상의 구체적 상태를 기준으로 판단해야 한다고 보아, 정식 상해진단서가 없더라도 상처의 부위·내용·정도·치유기간에 비추어 상해가 아니라고 단정한 원심판결을 파기했습니다. 아파트 엘리베이터 폭행 사안에서도 멍·찰과상이 상해에 해당하는지를 구체적 신체상태를 기준으로 검토해볼 수 있습니다.',
        takeaway: '엘리베이터 + 시비 + 밀침·구타 결합 시 상해 인정·폭행 평가 검토 영역 — CCTV·진단서·상처 사진·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '며칠이면 낫는 멍·찰과상도 상해가 되나요?',
        answer:
          '<strong>치료가 필요 없는 극히 경미한 정도를 넘으면 상해로 평가될 여지가 있는 영역입니다.</strong> 부위·치유기간을 진단서로 정리.',
      },
      {
        question: '상해 판단은 어떤 기준으로 하나요?',
        answer:
          '<strong>피해자의 연령·성별·체격 등 구체적 신체상태를 기준으로 판단하는 영역입니다.</strong> 상처 사진·진료기록을 함께 확보.',
      },
      {
        question: '밀친 것도 폭행으로 다툴 수 있나요?',
        answer:
          '<strong>신체에 대한 유형력 행사면 밀침도 폭행으로 평가될 여지가 있는 영역입니다.</strong> 밀침·구타 정황을 CCTV로 확보.',
      },
      {
        question: '엘리베이터 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>밀침·구타 흐름을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧을 수 있어 관리실에 보존 요청.',
      },
      {
        question: '진단서 없이도 고소가 되나요?',
        answer:
          '<strong>상처의 부위·정도·치유기간 정황으로도 다퉈질 여지가 있는 영역입니다.</strong> 가능하면 진단서·진료기록을 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '층간소음 항의 폭행 상해 신고', href: '/guide/assault/assault-floor-noise-complaint-strike-report-track' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '폭행 진단서 CCTV 증거 우열 다툼', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '장애인 폭행 가중처벌', href: '/guide/assault/assault-disabled-victim-aggravated-track' },
    ],
  },

  // ─── 2. assault-pub-drunken-fight-track ───
  {
    domain: 'assault',
    slug: 'assault-pub-drunken-fight-track',
    keyword: '술집 만취 시비 폭행',
    questionKeyword: '술집에서 옆 테이블 만취 손님과 시비가 붙었는데, 상대가 제 어깨를 잡아채고 술잔·의자를 던지며 위협하다 밀쳐 넘어뜨렸어요. 상대는 \'직접 주먹으로 때린 것도 아닌데 무슨 폭행이냐\'며 우깁니다. 이런 잡아채기·던지기·밀침도 폭행으로 다툴 수 있는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '술집 만취 시비 폭행 유형력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '술집 만취 시비 폭행 — 5단계 유형력 점검 | 로앤가이드',
      description:
        '술집에서 만취 손님이 잡아채고 물건을 던지며 밀쳤는데 폭행이 아니라고 우긴다면 형법 제260조 폭행의 유형력 행사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술집·호프집에서 옆 테이블의 만취한 손님과 자리·소음 문제로 시비가 붙었는데, 감정이 격해진 상대가 제 어깨와 옷을 잡아채고 술잔·의자 같은 물건을 던지며 위협하다 결국 저를 밀쳐 넘어뜨려 다친 피해자입니다. 상대는 \'주먹으로 직접 세게 때린 것도 아니고 취해서 그런 것뿐인데 무슨 폭행이냐\'며 발뺌하는데, 옷·어깨를 잡아채거나 물건을 던지고 밀치는 행위, 위협적으로 다가서는 행위도 폭행으로 평가될 수 있는지 헷갈립니다. 반드시 몸을 직접 가격해야만 폭행이 되는 건지, 잡아채기·던지기·밀침 정도로도 다툴 수 있는지, 어디부터 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를, 같은 법 제257조 제1항은 상해한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 폭행죄·강요죄 등에서 말하는 \'폭행\'은 사람에 대한 직접적인 유형력 행사뿐 아니라 간접적인 유형력 행사도 포함하고 반드시 사람의 신체에 대한 것에 한정되지 않으며, 간접적 유형력을 폭행으로 평가할 때에는 유형력을 행사한 의도와 방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계 등을 종합적으로 고려해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 술집 + 만취 시비 + 잡아채기·던지기·밀침 결합은 \'유형력 행사 범위·폭행 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 유형력 행사 ② 위협 정황 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 유형력 ② 정황 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술집 만취 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 유형력 행사·위협 정황·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유형력 행사</strong> — 잡아채기·물건 던지기·밀침 등 직접·간접 유형력 정황 정리.</li>\n<li><strong>② 위협 정황</strong> — 위협적 접근·기물 손괴 등 위험성·전후 정황 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·협박(제283조)·상해(제257조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행은 직접 가격뿐 아니라 간접적 유형력 행사도 포함할 수 있고, 간접 유형력을 폭행으로 볼지는 의도·방법·근접성·객체와 피해자 관계를 종합해 판단하는 영역. 잡아채기·던지기·밀침의 흐름을 매장 CCTV·영상으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 매장 CCTV·휴대폰 영상, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 유형력·위협 정리 (수일 내)</strong> — 잡아채기·물건 던지기·밀침과 위협적 접근 정황 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·CCTV·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집 만취 시비 폭행 유형력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 유형력·위협 정황·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>매장 CCTV 영상 (잡아채기·던지기·밀침 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (위협·폭언)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위·기물 손상 사진 (시간정보 포함)</strong></li>\n<li><strong>시비 경위 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>업주·종업원·동석자·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 주먹으로 때리지 않았더라도 옷·어깨를 잡아채거나 물건을 던지고 밀치는 행위는 직접·간접 유형력 행사로 폭행으로 평가될 여지가 있으므로, 매장 CCTV·휴대폰 영상으로 시비부터 밀침까지 흐름을 구체적으로 정리해두는 것이 도움이 됩니다. 매장 CCTV는 보관 기간이 짧을 수 있어 업주에게 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유형력 행사</strong> — 잡아채기·던지기·밀침이 폭행의 유형력에 해당하는지.</li>\n<li><strong>간접 유형력</strong> — 물건을 던지는 등 간접적 행위도 폭행으로 인정되는지.</li>\n<li><strong>만취·심신상태</strong> — 상대의 만취가 책임에 어떻게 작용하는지.</li>\n<li><strong>쌍방 여부</strong> — 술자리 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강요죄·폭행의 \'유형력\'에 간접적 행사가 포함되는지',
        summary:
          '대법원 2018도1346(대법원, 2021.11.25 선고) 영역에서 법원은 폭행은 사람에 대한 직접적인 유형력의 행사뿐 아니라 간접적인 유형력의 행사도 포함하며 반드시 사람의 신체에 대한 것에 한정되지 않으나, 사람에 대한 간접적인 유형력 행사를 폭행으로 평가하려면 유형력을 행사한 의도와 방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계 등을 종합적으로 고려해야 한다고 보아, 피해자 주택 대문 앞에 차량을 주차해 차량 출입을 막은 행위만으로는 피해자를 폭행해 권리행사를 방해했다고 평가하기 어렵다고 본 사례입니다. 술집 만취 시비 폭행 사안에서도 잡아채기·던지기·밀침이 직접·간접 유형력으로 폭행에 해당하는지를 의도·방법·근접성을 기준으로 검토해볼 수 있습니다.',
        takeaway: '술집 + 만취 시비 + 잡아채기·던지기·밀침 결합 시 유형력 행사 범위·폭행 평가 검토 영역 — CCTV·영상·진단서·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '주먹으로 때리지 않았는데도 폭행이 되나요?',
        answer:
          '<strong>잡아채기·밀침 등 신체에 대한 유형력 행사면 폭행으로 평가될 여지가 있는 영역입니다.</strong> 유형력 정황을 CCTV로 정리.',
      },
      {
        question: '물건을 던진 것도 폭행으로 다툴 수 있나요?',
        answer:
          '<strong>간접적 유형력도 의도·방법·근접성에 따라 폭행으로 평가될 여지가 있는 영역입니다.</strong> 던진 경위·근접성을 기록.',
      },
      {
        question: '상대가 취해서 그랬다면 책임이 줄어드나요?',
        answer:
          '<strong>만취·심신상태는 책임 판단에서 따로 다퉈지는 영역입니다.</strong> 시비·폭행 경위를 영상으로 구체적으로 확보.',
      },
      {
        question: '매장 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>시비부터 밀침까지 흐름을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 업주에게 보존 요청을 먼저 해두기.',
      },
      {
        question: '술자리 시비라며 쌍방으로 몰리면요?',
        answer:
          '<strong>먼저 가해한 쪽과 행위 정도를 영상으로 구분해 다투는 영역입니다.</strong> 동석자·종업원 진술을 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '윗집 층간소음 폭행 상해', href: '/guide/assault/assault-floor-noise-complaint-track' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '공동주택 엘리베이터 폭행 CCTV', href: '/guide/assault/assault-apartment-elevator-cctv-evidence-track' },
      { label: '형제자매 폭행 가정폭력', href: '/guide/assault/assault-domestic-sibling-violence-victim-track' },
    ],
  },

  // ─── 3. assault-taxi-fare-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-taxi-fare-dispute-track',
    keyword: '택시요금 시비 폭행',
    questionKeyword: '심야에 택시요금 문제로 시비가 붙어 상대에게 멱살을 잡히고 맞았는데, CCTV 사각이라 제 진술 말고는 직접 증거가 부족합니다. 상대는 \'먼저 시비 건 건 너\'라며 발뺌하는데, 피해자 진술만으로도 폭행을 다툴 수 있는지, 어떤 순서로 고소를 준비해야 하는지 막막합니다.',
    ctaKeyword: '택시요금 시비 폭행 진술·고소 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '택시요금 시비 폭행 — 5단계 진술·고소 점검 | 로앤가이드',
      description:
        '택시요금 시비로 멱살 잡히고 맞았는데 증거가 부족해 막막하다면 형법 제260조 폭행과 피해자 진술 신빙성·고소 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"심야에 택시요금·경로 문제로 운전기사 또는 승객과 시비가 붙었는데, 감정이 격해진 상대가 제 멱살을 잡고 밀치거나 때려 다친 피해자입니다. 그런데 차량 블랙박스가 실내를 제대로 담지 못했거나 도로 CCTV 사각이라 제 진술 말고는 직접 증거가 부족한 상황이에요. 상대는 \'먼저 시비를 건 건 너고 나는 막은 것뿐\'이라며 발뺌하는데, 이렇게 객관적 영상이 부족하고 사실상 제 진술이 핵심인 경우에도 폭행·상해를 다툴 수 있는지, 제 진술이 어느 정도면 받아들여지는지, 어떤 순서로 신고·고소를 준비해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 규정하는 영역입니다. 판례·실무는 증거의 증명력은 법관의 자유판단에 맡겨져 있으나 논리와 경험칙에 합치해야 하고, 피해자 등의 진술은 그 주요 부분이 일관되며 경험칙에 비추어 비합리적이거나 모순되지 않고 허위로 불리한 진술을 할 동기가 분명히 드러나지 않는 이상 특별한 이유 없이 함부로 신빙성을 배척해서는 안 된다고 보는 본 사례 흐름이 있는 영역입니다. 택시요금 시비 + 멱살·구타 + 진술 위주 결합은 \'진술 신빙성·폭행 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 진술 정리 ② 보강 증거 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진술 ② 보강 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시요금 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진술 정리·보강 증거·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진술 정리</strong> — 시비·폭행 경위를 시간순·일관되게 진술 정리.</li>\n<li><strong>② 보강 증거</strong> — 블랙박스·통화·메시지·진단서 등 진술 보강 자료 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접 영상이 부족해도 피해자 진술이 주요 부분에서 일관되고 경험칙에 모순되지 않으며 허위 진술 동기가 드러나지 않으면 신빙성을 함부로 배척하기 어려운 영역. 진술을 시간순으로 정리하고 블랙박스·통화·진단서 같은 보강 자료를 모으는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진술·진단 확보 (즉시~당일)</strong> — 시비·폭행 경위를 시간순으로 기록하고 병원 진료·상해진단서·부상 사진 확보.</li>\n<li><strong>2단계 — 보강 증거 정리 (수일 내)</strong> — 블랙박스·도로 CCTV·통화·메시지 등 진술을 뒷받침할 자료 수집.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 진술·보강 자료 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시요금 시비 폭행 진술·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진술·보강 증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>시비·폭행 경위 진술 기록 (시간순·육하원칙)</strong></li>\n<li><strong>차량 블랙박스·도로 CCTV 영상 (확보 가능 범위)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위 사진 (시간정보 포함)</strong></li>\n<li><strong>통화·문자·앱 호출 기록 (정황·시각)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>동승자·목격자·기사 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 영상이 부족하더라도 피해자 진술이 시간순으로 일관되고 경험칙에 모순되지 않으면 신빙성이 인정될 여지가 있으므로, 시비부터 폭행까지 경위를 구체적으로 기록하고 블랙박스·도로 CCTV·통화·앱 호출 기록 같은 보강 자료를 빨리 확보해두는 것이 핵심입니다. CCTV·블랙박스는 보관 기간이 짧을 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 진술의 일관성·경험칙 부합·허위 동기 유무.</li>\n<li><strong>보강 증거</strong> — 진술을 뒷받침할 영상·기록이 있는지.</li>\n<li><strong>폭행·상해 정도</strong> — 멱살·구타가 폭행·상해로 평가되는지.</li>\n<li><strong>쌍방 여부</strong> — 요금 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술의 신빙성 판단과 자유심증주의의 한계',
        summary:
          '대법원 2018도7709(대법원, 2018.10.25 선고) 영역에서 법원은 증거의 증명력은 법관의 자유판단에 맡겨져 있으나 그 판단은 논리와 경험칙에 합치해야 하고, 증명력 있는 증거를 합리적 근거 없는 의심으로 배척하는 것은 자유심증주의의 한계를 벗어난 것으로 허용되지 않으며, 피해자 등의 진술은 그 주요 부분이 일관되고 경험칙에 비추어 비합리적이거나 모순되지 않으며 허위로 불리한 진술을 할 동기가 분명히 드러나지 않는 이상 특별한 이유 없이 함부로 신빙성을 배척해서는 안 된다고 판시했습니다. 택시요금 시비 폭행 사안에서도 직접 영상이 부족할 때 피해자 진술의 신빙성과 보강 증거를 함께 검토해볼 수 있습니다.',
        takeaway: '택시요금 시비 + 멱살·구타 + 진술 위주 결합 시 진술 신빙성·폭행 평가 검토 영역 — 진술 기록·블랙박스·진단서·통화 기록 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: 'CCTV가 없고 제 진술뿐인데도 다툴 수 있나요?',
        answer:
          '<strong>진술이 일관되고 경험칙에 모순되지 않으면 신빙성이 인정될 여지가 있는 영역입니다.</strong> 경위를 시간순으로 정리.',
      },
      {
        question: '진술은 어느 정도여야 받아들여지나요?',
        answer:
          '<strong>주요 부분이 일관되고 허위 진술 동기가 드러나지 않는지가 쟁점인 영역입니다.</strong> 모순 없는 시간순 기록을 준비.',
      },
      {
        question: '블랙박스 일부만 남았는데 도움이 되나요?',
        answer:
          '<strong>일부 영상도 진술을 뒷받침하는 보강 증거가 될 여지가 있는 영역입니다.</strong> 보관 기간이 짧으니 빨리 확보·보존.',
      },
      {
        question: '먼저 시비 걸었다고 몰리면 어떻게 하나요?',
        answer:
          '<strong>먼저 가해한 쪽과 정도를 보강 증거로 구분해 다투는 영역입니다.</strong> 통화·앱 호출 기록·목격자를 확보.',
      },
      {
        question: '어떤 순서로 고소를 준비하나요?',
        answer:
          '<strong>진단·진술 → 보강 증거 → 고소장 접수 순서로 정리하는 영역입니다.</strong> 진료기록과 경위 기록을 먼저 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '헬스장 라커룸 시비 폭행', href: '/guide/assault/assault-gym-locker-room-stranger-shove-injury-track' },
      { label: '폭행 합의금 산정 피해 정도 전과 재범', href: '/guide/assault/assault-settlement-amount-factors-prior-record-injury-degree' },
      { label: '폭행 진단서 CCTV 증거 우열 다툼', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '요양보호사 환자 보호자 폭행 피해', href: '/guide/assault/assault-elder-care-worker-patient-attacker-victim-track' },
    ],
  },

  // ─── 4. assault-pickup-basketball-injury-track ───
  {
    domain: 'assault',
    slug: 'assault-pickup-basketball-injury-track',
    keyword: '농구 경기 중 상해',
    questionKeyword: '동호회 농구 경기 중 상대가 거칠게 부딪쳐 손목을 다쳐 병원에서 상해진단서를 받았어요. 그런데 상대는 \'그 진단서는 네가 아프다고 한 것만 적힌 것\'이라며 상해 자체를 부정합니다. 통증 호소로 발급된 진단서만으로 상해를 인정받을 수 있는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '농구 경기 중 상해 진단서 증명력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '농구 경기 중 상해 — 5단계 진단서 증명력 점검 | 로앤가이드',
      description:
        '농구 경기 중 다쳐 상해진단서를 받았는데 통증 호소뿐이라고 부정당한다면 형법 제257조 상해와 진단서 증명력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동호회·동네 농구나 픽업 게임을 하던 중 상대 선수가 거칠게 부딪치거나 팔로 가격해 손목·발목·어깨 등을 다쳐 병원에서 통증을 호소하고 상해진단서를 받은 피해자입니다. 그런데 상대는 \'그 진단서는 네가 아프다고 말한 것을 의사가 적어준 것뿐이고 실제로 다친 것도 아니다, 운동하다 원래 안 좋던 부위가 아픈 것 아니냐\'라며 상해 자체를 부정합니다. 엑스레이·MRI 같은 객관적 소견이 뚜렷하지 않고 주로 통증 호소로 발급된 진단서만 있는 경우에도 상해를 인정받을 수 있는지, 부상과 경기 행위 사이의 인과관계는 어떻게 정리해야 하는지 헷갈립니다. 어디부터 자료를 모으고 다퉈야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제266조 제1항은 과실치상을 규정하는 영역입니다. 판례·실무는 상해진단서가 피해자 진술과 함께 범죄사실을 증명하는 유력한 증거가 될 수 있으나, 상해 사실의 존재와 인과관계도 합리적 의심이 없는 정도로 증명돼야 하므로 진단서의 객관성·신빙성을 의심할 사정이 있는 때, 특히 주로 통증 호소 등 주관적 사정에 의존해 의학적 가능성만으로 발급된 때에는 진단 시점·발급 경위·기왕증 유무·진료 경과 등을 면밀히 살펴 증명력을 신중히 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 농구 + 거친 충돌 + 통증 진단서 결합은 \'진단서 증명력·상해 인정\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 진단서 ② 인과관계 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단서 ② 인과 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 농구 경기 중 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단서·인과관계·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단서</strong> — 진단 시점·발급 경위·검사 소견 등 진단서 객관성 정리.</li>\n<li><strong>② 인과관계</strong> — 충돌·가격과 부상 부위·기왕증 유무 등 인과관계 정리.</li>\n<li><strong>③ 고소</strong> — 상해(형법 제257조)·과실치상(제266조) 고소·고발 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·일실수입·위자료 손해배상 또는 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상해진단서는 유력한 증거가 될 수 있으나 상해 사실과 인과관계도 합리적 의심 없이 증명돼야 하고, 주로 통증 호소에 의존한 진단서는 진단 시점·발급 경위·기왕증·진료 경과 등을 살펴 증명력을 신중히 판단하는 영역. 진단서와 함께 충돌 영상·진료 경과를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 경기 촬영 영상·구장 CCTV, 병원 진료·상해진단서와 검사 소견 확보.</li>\n<li><strong>2단계 — 진단서·인과관계 정리 (수일 내)</strong> — 진단 시점·발급 경위·검사 소견과 충돌·부상 부위·기왕증 유무 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 경기 정황 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서·진료기록 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·일실수입·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">농구 경기 중 상해 진단서 증명력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단서·인과관계·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>엑스레이·MRI 등 검사 소견 자료 (객관성)</strong></li>\n<li><strong>경기 촬영 영상·구장 CCTV (충돌·가격 시점)</strong></li>\n<li><strong>부상 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>진료 경과·통원 내역 (진단 시점·경과)</strong></li>\n<li><strong>기왕증·과거 진료 이력 정리 (인과관계 다툼)</strong></li>\n<li><strong>동료 선수·심판·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통증 호소 위주로 발급된 진단서는 진단 시점이 부상과 얼마나 근접한지, 검사 소견이 있는지, 기왕증과 무관한 새 원인인지, 이후 진료 경과가 어떤지를 함께 살펴 증명력을 판단하므로, 진단서와 함께 검사 소견·진료 경과·충돌 영상을 정리해두는 것이 핵심입니다. 구장 CCTV·경기 촬영본은 보관 기간이 짧을 수 있어 빨리 확보·보존해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진단서 객관성</strong> — 통증 호소 위주 발급인지 검사 소견이 있는지.</li>\n<li><strong>인과관계</strong> — 충돌·가격과 부상 사이 인과관계가 증명되는지.</li>\n<li><strong>기왕증</strong> — 원래 있던 신체 이상과 무관한 새 원인인지.</li>\n<li><strong>고의·과실</strong> — 고의 상해인지 과실치상으로 평가되는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서의 증명력과 신중한 판단',
        summary:
          '대법원 2016도15018(대법원, 2016.11.25 선고) 영역에서 법원은 상해진단서가 피해자 진술과 함께 범죄사실을 증명하는 유력한 증거가 될 수 있으나 상해 사실의 존재 및 인과관계도 합리적 의심이 없는 정도의 증명에 이르러야 하므로, 진단서의 객관성과 신빙성을 의심할 사정이 있는 때에는 증명력 판단에 매우 신중해야 하고, 특히 주로 통증이 있다는 피해자의 주관적 호소 등에 의존해 의학적 가능성만으로 발급된 때에는 진단·작성일자가 상해 발생 시점과 근접한지, 발급 경위에 신빙성을 의심할 사정이 없는지, 기재된 상해 부위·정도가 주장하는 원인·경위와 일치하는지, 기왕증과 무관한 새 원인인지, 진료 시점·경위·경과 등을 면밀히 살펴 증명력을 판단해야 한다고 판시했습니다. 농구 경기 중 상해 사안에서도 진단서 증명력과 상해 인정을 검토해볼 수 있습니다.',
        takeaway: '농구 + 거친 충돌 + 통증 진단서 결합 시 진단서 증명력·상해 인정 검토 영역 — 진단서·검사 소견·진료 경과·충돌 영상 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '통증 호소로 받은 진단서만으로 상해가 인정되나요?',
        answer:
          '<strong>진단 시점·발급 경위·진료 경과를 함께 살펴 신중히 판단하는 영역입니다.</strong> 검사 소견·진료기록을 함께 확보.',
      },
      {
        question: '원래 안 좋던 부위라며 부정하면 어떻게 하나요?',
        answer:
          '<strong>기왕증과 무관한 새 원인인지가 인과관계의 쟁점이 되는 영역입니다.</strong> 과거 진료 이력과 경과를 정리.',
      },
      {
        question: '경기 영상이 꼭 필요한가요?',
        answer:
          '<strong>충돌·가격 시점과 인과관계를 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 구장 CCTV도 함께 보존 요청.',
      },
      {
        question: '고의가 아니었다면 처벌이 안 되나요?',
        answer:
          '<strong>고의가 부정돼도 과실치상으로 평가될 여지가 있는 영역입니다.</strong> 충돌 정황·위험성을 영상으로 기록.',
      },
      {
        question: '치료비 말고 다른 손해도 청구되나요?',
        answer:
          '<strong>치료비 외에 일실수입·위자료도 손해배상으로 검토되는 영역입니다.</strong> 통원 내역·소득 자료를 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '등산로 통행 시비 폭행 상해 신고', href: '/guide/assault/assault-hiking-trail-passage-dispute-injury-report-track' },
      { label: '아마추어 운동경기 폭행 상해', href: '/guide/assault/assault-amateur-sports-injury-track' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '노약자 폭행 가중처벌', href: '/guide/assault/assault-elderly-victim-aggravated-sentencing' },
    ],
  },

  // ─── 5. dui-next-morning-hangover-driving-track ───
  {
    domain: 'dui',
    slug: 'dui-next-morning-hangover-driving-track',
    keyword: '숙취 잔존알코올 음주운전',
    questionKeyword: '전날 밤 늦게까지 마시고 다음 날 아침 출근길에 운전했는데 단속에 걸렸어요. 술이 다 깬 줄 알았는데 잔존 알코올이 기준을 살짝 넘었고, 측정 과정에서 제가 잠깐 머뭇거린 것이 측정거부로 몰리고 있습니다. 혐의를 받고 있다면 측정 응답과 거부 성립을 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '숙취 잔존알코올 음주 측정 응답·거부 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '숙취 음주운전 — 5단계 측정 응답·거부 점검 | 로앤가이드',
      description:
        '다음 날 아침 잔존 알코올로 단속됐는데 머뭇거림이 측정거부로 몰려 막막하다면 도로교통법 제44조와 측정불응 성립 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전날 밤 늦게까지 술을 마시고 다음 날 아침 출근길에 차를 몰았는데 음주단속에 걸린 운전자입니다. 본인은 충분히 자고 술이 다 깼다고 생각했는데 잔존 알코올(숙취 음주) 수치가 처벌 기준을 아슬아슬하게 넘었고, 게다가 측정 과정에서 호흡측정기에 제대로 불기까지 잠깐 머뭇거리거나 다시 불어보겠다고 한 것이 \'측정에 불응했다\'며 음주측정거부로까지 몰리고 있어요. 한 번 머뭇거렸다고 곧바로 측정거부가 되는 건지, 이어서 다시 측정에 응했는데도 거부로 처벌되는 건지, 혐의를 받고 있다면 측정 응답 경위와 거부 성립을 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제2항은 경찰공무원의 음주측정 요구와 운전자의 응할 의무를, 같은 법 제148조의2는 음주측정거부의 처벌을 정하는 영역입니다. 판례·실무는 처벌조항에서 말하는 \'경찰공무원의 측정에 응하지 아니한 경우\'란 술에 취한 상태에 있다고 인정할 상당한 이유가 있는 운전자가 측정에 응할 의사가 없음이 객관적으로 명백하다고 인정되는 때를 의미하고, 1차 측정에만 불응했다가 곧이어 2차 측정에 응한 경우처럼 측정거부가 일시적인 것에 불과하면 측정불응죄가 성립한다고 보기 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 숙취 + 근소 초과 + 측정 머뭇거림 결합은 \'측정 응답·거부 성립 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 거부 성립 ③ 근소 초과 ④ 양형·행정 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 성립 ③ 수치 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 숙취 잔존알코올 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·거부 성립·근소 초과·양형/행정·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 측정 요구·고지·응답 경위와 1차·2차 측정 흐름 정리.</li>\n<li><strong>② 거부 성립</strong> — 측정 불응 의사가 객관적으로 명백했는지, 일시적 머뭇거림인지 정리.</li>\n<li><strong>③ 근소 초과</strong> — 잔존 알코올 수치가 기준을 약간 넘는 정도인지 정리.</li>\n<li><strong>④ 양형·행정</strong> — 초범·반성 등 양형과 면허 취소·정지 처분 점검.</li>\n<li><strong>⑤ 대응</strong> — 측정거부 성립 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'측정에 응하지 아니한 경우\'는 측정 불응 의사가 객관적으로 명백한 때를 뜻하고, 1차에만 불응했다가 곧이어 2차에 응한 일시적 머뭇거림은 측정불응죄가 성립한다고 보기 어려운 영역. 측정 요구·고지·응답 경위를 시간순으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·정황진술보고서, 측정 결과지·측정 요구 경위 확인.</li>\n<li><strong>2단계 — 측정 응답 경위 정리 (수일 내)</strong> — 고지·머뭇거림·재측정 등 1차·2차 측정 흐름을 시간순으로 점검.</li>\n<li><strong>3단계 — 거부 성립·수치 정리 (공판 전)</strong> — 불응 의사의 객관적 명백성과 잔존 알코올 근소 초과 여부 정리.</li>\n<li><strong>4단계 — 양형·행정 준비 (병행)</strong> — 초범·반성·생계 자료 준비, 면허 처분 통지서·행정 청구기한 점검.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 측정거부 성립 쟁점 변론, 감경·집행정지 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">숙취 잔존알코올 음주 측정 응답·거부 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·거부 성립·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정 요구·경위)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각·횟수)</strong></li>\n<li><strong>측정 요구·고지·응답 경위 메모 (1차·2차 시간순)</strong></li>\n<li><strong>전날 음주 시작·종료 시각·음주량 자료 (숙취 경위)</strong></li>\n<li><strong>채혈 측정·재측정 요구 기록 (있는 경우)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'측정에 응하지 아니한 경우\'는 측정 불응 의사가 객관적으로 명백한 때를 뜻하므로 한 번 머뭇거렸다가 곧이어 다시 측정에 응한 일시적 거부라면 측정불응죄 성립을 다툴 여지가 있고, 잔존 알코올이 기준을 약간 넘는 근소 초과라면 그 수치도 함께 점검하는 것이 도움이 됩니다. 측정거부는 면허 취소로 이어지기 쉬우므로 처분 통지서와 행정 청구기한도 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거부 성립</strong> — 측정 불응 의사가 객관적으로 명백했는지.</li>\n<li><strong>일시적 머뭇거림</strong> — 1차 불응 후 2차에 응한 일시적 거부인지.</li>\n<li><strong>근소 초과</strong> — 잔존 알코올 수치가 기준을 약간 넘는 정도인지.</li>\n<li><strong>측정 절차</strong> — 측정 요구·고지·재측정이 적법했는지.</li>\n<li><strong>양형·행정</strong> — 초범·반성과 면허 처분 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정불응죄의 \'측정에 응하지 아니한 경우\'의 의미',
        summary:
          '대법원 2013도8481(대법원, 2015.12.24 선고) 영역에서 법원은 도로교통법 제148조의2 제1항 처벌조항에서 말하는 \'경찰공무원의 측정에 응하지 아니한 경우\'란 술에 취한 상태에 있다고 인정할 상당한 이유가 있는 운전자가 음주측정에 응할 의사가 없음이 객관적으로 명백하다고 인정되는 때를 의미하고, 운전자가 1차 측정에만 불응했을 뿐 곧이어 이어진 2차 측정에 응한 경우처럼 측정거부가 일시적인 것에 불과한 경우까지 측정불응죄가 성립한다고 볼 것은 아니며, 호흡측정기에 숨을 내쉬는 시늉만 하는 등 소극적 거부는 그 행위가 일정 시간 계속·반복되어 측정 불응 의사가 객관적으로 명백할 때 비로소 성립한다고 판시했습니다. 숙취 잔존알코올 음주운전 사안에서도 측정 응답 경위와 거부 성립을 검토해볼 수 있습니다.',
        takeaway: '숙취 + 근소 초과 + 측정 머뭇거림 결합 시 측정 응답·거부 성립 평가 검토 영역 — 측정 경위·응답 흐름·수치·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '한 번 머뭇거린 것도 측정거부가 되나요?',
        answer:
          '<strong>곧이어 다시 측정에 응한 일시적 거부면 성립을 다툴 여지가 있는 영역입니다.</strong> 1차·2차 측정 경위를 시간순으로 정리.',
      },
      {
        question: '측정거부는 언제 성립하나요?',
        answer:
          '<strong>측정 불응 의사가 객관적으로 명백할 때 성립하는 영역입니다.</strong> 측정 요구·고지·응답 경위를 확인.',
      },
      {
        question: '다음 날 아침 잔존 알코올도 처벌되나요?',
        answer:
          '<strong>운전 당시 기준 초과가 인정되면 처벌될 수 있는 영역입니다.</strong> 전날 음주 시각·음주량과 측정 수치를 점검.',
      },
      {
        question: '수치가 기준을 살짝 넘었는데 다툴 수 있나요?',
        answer:
          '<strong>근소 초과는 측정·전제사실과 함께 신중히 살펴지는 영역입니다.</strong> 측정 결과지·측정 시각을 확보.',
      },
      {
        question: '면허 취소도 같이 다퉈야 하나요?',
        answer:
          '<strong>음주·측정거부는 면허 처분으로 이어지기 쉬워 행정심판을 별도로 검토하는 영역입니다.</strong> 처분 통지서·90일 청구기한을 점검.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-measurement-refusal-track' },
      { label: '음주측정 과호흡 불응 측정거부 여부', href: '/guide/dui/dui-breath-test-hyperventilation-refusal-falsely-accused-defense' },
      { label: '음주운전 행정심판 90일 면허취소 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '2회 음주 면허취소 행정심판', href: '/guide/dui/dui-second-revoke-administrative-appeal' },
    ],
  },

  // ─── 6. dui-mouthwash-false-reading-track ───
  {
    domain: 'dui',
    slug: 'dui-mouthwash-false-reading-track',
    keyword: '구강청결제 음주측정 오인',
    questionKeyword: '식당 안에 있는데 경찰이 신고를 받고 들어와 음주운전 여부를 묻고 곧바로 음주측정을 했어요. 구강청결제·약 때문에 입안 알코올이 남아 수치가 부풀려진 것 같고, 영장 없이 식당에서 측정한 절차도 위법하지 않나 싶습니다. 혐의를 받고 있다면 측정 경위와 절차를 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '구강청결제 음주측정 오인·측정 경위 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '구강청결제 음주측정 — 5단계 측정 경위 점검 | 로앤가이드',
      description:
        '식당에서 영장 없이 측정했고 구강청결제로 수치가 부풀려진 것 같아 막막하다면 도로교통법 제44조와 측정 경위·임의수사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"식당이나 매장 안에 있다가 \'음주운전을 한 것 같다\'는 112 신고를 받고 출동한 경찰관이 들어와 음주운전 여부를 묻고는 그 자리에서 곧바로 음주측정을 한 운전자입니다. 본인은 구강청결제(가글)·감기약·스프레이 등으로 입안에 알코올 성분이 남아 호흡측정 수치가 실제보다 부풀려진 것 같고, 입을 헹굴 시간이나 채혈 측정 기회도 충분히 주어지지 않았다고 느낍니다. 게다가 영장도 없이 식당 안까지 들어와 측정한 절차 자체가 위법한 수색에 해당하는 것은 아닌지 의문이 듭니다. 그렇다면 입안 잔류 알코올로 인한 측정 오류와 측정 절차의 적법성을 함께 다툴 수 있는지, 혐의를 받고 있다면 어떤 순서로 정리해야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 형사소송법 제199조 제1항은 임의수사의 원칙을 정하는 영역입니다. 판례·실무는 수사기관이 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 물리력이나 강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾아 위법행위를 확인하는 것은 특별한 사정이 없는 한 임의수사로서 허용되고 영장 없이 이루어졌다고 하여 위법하다고 할 수 없으며, 이어진 음주측정 역시 적법할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 구강청결제 + 입안 잔류 + 측정 경위 결합은 \'측정 정확성·측정 절차 적법성\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 입안 잔류 ③ 측정 절차 ④ 양형·행정 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 잔류 ③ 절차 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구강청결제 음주측정 오인 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·입안 잔류·측정 절차·양형/행정·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 신고·출동·진입과 측정 요구·시각 등 측정 경위 정리.</li>\n<li><strong>② 입안 잔류</strong> — 구강청결제·약 등 입안 잔류 알코올과 입헹굼·대기 여부 정리.</li>\n<li><strong>③ 측정 절차</strong> — 임의수사·영장 여부, 호흡측정·채혈 요구 적법성 정리.</li>\n<li><strong>④ 양형·행정</strong> — 초범·반성 등 양형과 면허 취소·정지 처분 점검.</li>\n<li><strong>⑤ 대응</strong> — 측정 정확성·절차 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수사기관이 불특정·다수가 출입 가능한 장소에 통상적 방법으로 들어가 물리력 없이 피의자를 찾아 확인하는 것은 임의수사로 허용될 수 있고 이어진 음주측정도 적법할 여지가 있는 영역. 입안 잔류 알코올로 인한 측정 정확성은 입헹굼·대기·채혈 요구 경위로 따로 점검하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·정황진술보고서, 측정 결과지·신고·출동 경위 확인.</li>\n<li><strong>2단계 — 측정 경위·입안 잔류 정리 (수일 내)</strong> — 진입·측정 요구 경위와 구강청결제·약 복용, 입헹굼·대기 여부 기록.</li>\n<li><strong>3단계 — 측정 절차 검토 (공판 전)</strong> — 임의수사·영장 여부, 호흡측정·채혈 요구의 적법성 정리.</li>\n<li><strong>4단계 — 양형·행정 준비 (병행)</strong> — 초범·반성·생계 자료 준비, 면허 처분 통지서·행정 청구기한 점검.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 측정 정확성·절차 쟁점 변론, 감경·집행정지 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">구강청결제 음주측정 오인·측정 경위 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·입안 잔류·측정 절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정 경위·시각)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각·횟수)</strong></li>\n<li><strong>신고·출동·진입 경위 메모 (시간순)</strong></li>\n<li><strong>구강청결제·약 복용 자료 (성분·시각)</strong></li>\n<li><strong>입헹굼·대기·채혈 요구 기록 (측정 정확성)</strong></li>\n<li><strong>현장 CCTV·바디캠 등 영상 (확보 가능 범위)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 불특정·다수가 출입 가능한 장소에 통상적 방법으로 들어가 물리력 없이 피의자를 찾는 것은 임의수사로 허용될 여지가 있어 영장만으로 위법을 단정하기 어려우므로, 측정 정확성 쪽은 구강청결제·약 복용 시각과 입헹굼·대기·채혈 요구 경위로 따로 정리해두는 것이 도움이 됩니다. 면허 처분 통지서와 행정 청구기한도 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 절차 적법성</strong> — 식당 진입·측정이 임의수사로 허용되는지.</li>\n<li><strong>영장 요부</strong> — 영장 없이 한 진입·측정이 위법한지.</li>\n<li><strong>입안 잔류</strong> — 구강청결제·약으로 수치가 부풀려졌는지.</li>\n<li><strong>입헹굼·채혈</strong> — 입헹굼·대기·채혈 요구가 보장됐는지.</li>\n<li><strong>양형·행정</strong> — 초범·반성과 면허 처분 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 식당 내 임의수사와 음주측정의 적법성',
        summary:
          '대법원 2025도6752(대법원, 2025.12.11 선고) 영역에서 법원은 수사기관이 범죄를 수사하면서 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 아무런 물리력이나 강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾는 등 위법행위를 확인하는 것은 특별한 사정이 없는 한 임의수사로서 허용되므로 영장 없이 이루어졌다고 하여 위법하다고 할 수 없다고 보아, \'만취한 사람이 차를 주차하고 식당으로 들어갔다\'는 112 신고를 받고 24시간 식당에 들어가 피고인을 찾아 음주운전 여부를 묻고 한 음주측정 역시 적법하다는 이유로, 이를 위법한 수색 상태에서 이루어진 것으로 보아 무죄로 판단한 원심에 임의수사·위법수집증거 등에 관한 법리오해가 있다고 판시했습니다. 구강청결제 음주측정 오인 사안에서도 측정 경위·절차의 적법성과 측정 정확성을 검토해볼 수 있습니다.',
        takeaway: '구강청결제 + 입안 잔류 + 측정 경위 결합 시 측정 정확성·측정 절차 적법성 검토 영역 — 측정 경위·약 복용 시각·입헹굼·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '영장 없이 식당에서 측정한 것도 적법한가요?',
        answer:
          '<strong>통상적 방법으로 들어가 물리력 없이 찾은 임의수사는 허용될 여지가 있는 영역입니다.</strong> 진입·측정 경위를 시간순으로 정리.',
      },
      {
        question: '구강청결제로 수치가 부풀려진 건 어떻게 다투나요?',
        answer:
          '<strong>입헹굼·대기·채혈 요구 경위로 측정 정확성을 따로 점검하는 영역입니다.</strong> 약 복용 성분·시각을 기록.',
      },
      {
        question: '입을 헹굴 시간을 안 줬으면 다툴 수 있나요?',
        answer:
          '<strong>입헹굼·대기 절차가 보장됐는지가 측정 정확성의 쟁점이 되는 영역입니다.</strong> 현장 경위와 측정 결과지를 확보.',
      },
      {
        question: '채혈 측정을 요구할 수 있나요?',
        answer:
          '<strong>채혈 측정 요구 여부가 측정 다툼에 영향을 줄 수 있는 영역입니다.</strong> 채혈·재측정 요구 기록을 확보.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 결과·진입 경위 확보가 출발점인 영역입니다.</strong> 약 복용 시각과 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주측정 거부 강요 주장 측정거부 여부', href: '/guide/dui/dui-breath-test-refusal-coercion-claim-falsely-accused-defense' },
      { label: '음주 직후 상승기 측정 시점 수치 다툼', href: '/guide/dui/dui-post-drinking-rising-bac-measurement-time-gap-track' },
      { label: '음주운전 행정심판 90일 면허취소 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 행정심판 준비서류와 절차', href: '/guide/dui/dui-administrative-appeal-required-docs' },
    ],
  },

  // ─── 7. dui-property-damage-flee-after-drinking-track ───
  {
    domain: 'dui',
    slug: 'dui-property-damage-flee-after-drinking-track',
    keyword: '음주 후 물피도주',
    questionKeyword: '술을 마신 뒤 주차된 차를 긁고 그냥 가버렸다가 음주·물피도주로 입건됐는데, 과거 음주 전력이 있다며 가중처벌 조항까지 적용해 기소됐어요. 그 조항이 위헌으로 효력을 잃었다는 말을 들었습니다. 혐의를 받고 있다면 적용 법조와 절차를 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '음주 후 물피도주 가중조항·적용 법조 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 물피도주 — 5단계 가중조항·적용 법조 점검 | 로앤가이드',
      description:
        '음주 후 물피도주로 가중처벌까지 적용돼 막막하다면 도로교통법 제148조의2와 위헌 가중조항 효력·행정 90일 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 상태에서 운전하다가 주차된 차량 등 물건을 긁거나 부딪치고 그대로 가버려(물피도주) 음주운전·물피도주로 입건된 운전자입니다. 그런데 검사는 제게 과거 음주운전·음주측정거부 전력이 있다는 이유로 단순 음주운전이 아니라 \'2회 이상 위반\' 같은 가중처벌 조항까지 적용해 기소했어요. 문제는 그 가중처벌 조항이 책임과 형벌의 비례원칙에 어긋난다는 위헌 논란이 있고 헌법재판소가 일부 조항에 대해 위헌결정을 해 효력을 잃었다는 말을 들었다는 점입니다. 위헌으로 효력을 잃은 조항으로 기소된 경우 그 부분은 어떻게 처리되는지, 물피도주 부분과 행정처분은 별개로 다퉈야 하는 건 아닌지, 혐의를 받고 있다면 적용 법조와 절차를 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항·제2항은 술에 취한 상태의 운전 금지와 음주측정 응할 의무를, 같은 법 제148조의2는 음주운전·음주측정거부의 처벌과 일정 전력에 따른 가중처벌을 정하는 영역입니다. 판례·실무는 헌법재판소가 음주운전·음주측정거부 가중처벌 조항 일부에 대해 위헌결정을 선고하면 그 법률조항 부분은 소급하여 효력을 상실하므로 해당 법조를 적용해 기소한 피고사건은 \'범죄로 되지 아니하는 때\'에 해당해 무죄가 선고될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 음주 + 물피도주 + 가중조항 결합은 \'적용 법조·위헌 효력·행정 처분 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 적용 법조 ② 위헌 효력 ③ 물피도주 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 법조 ② 위헌 ③ 물피 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 후 물피도주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적용 법조·위헌 효력·물피도주·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적용 법조</strong> — 단순 음주운전인지 전력에 따른 가중조항이 적용됐는지 정리.</li>\n<li><strong>② 위헌 효력</strong> — 적용 조항이 위헌결정으로 소급 효력 상실된 부분인지 정리.</li>\n<li><strong>③ 물피도주</strong> — 물피사고 후 조치의무 위반 부분의 성립·정황 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가중처벌 조항이 위헌결정으로 소급 효력을 상실하면 그 법조를 적용해 기소한 부분은 범죄가 되지 않는 때에 해당해 무죄가 선고될 수 있는 영역. 적용 법조를 단순/가중으로 구분하고 물피도주·행정처분을 별개로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·처분 자료 확인 (즉시~당일)</strong> — 적발보고서·공소장, 면허 취소·정지 처분 통지서·사유 확인.</li>\n<li><strong>2단계 — 적용 법조 구분 (수일 내)</strong> — 단순/가중 조항 구분과 과거 음주 전력·처분 이력 점검.</li>\n<li><strong>3단계 — 위헌 효력 정리 (공판 전)</strong> — 적용 조항이 위헌결정으로 소급 효력 상실된 부분인지 정리.</li>\n<li><strong>4단계 — 물피·행정 준비 (안 날부터 90일 내)</strong> — 물피도주 성립·정황 점검, 이의신청·행정심판 청구기한·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 적용 법조·위헌 효력 변론, 취소 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 후 물피도주 가중조항·적용 법조 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 적용 법조·위헌 효력·행정 대응 갈래입니다.</strong></p>\n<ul>\n<li><strong>공소장·적용 법조 확인 자료 (단순/가중 구분)</strong></li>\n<li><strong>과거 음주 전력·처분 이력 자료 (가중 요건)</strong></li>\n<li><strong>주취운전자 적발보고서·측정 결과지 (음주 부분)</strong></li>\n<li><strong>물피사고 경위·블랙박스·CCTV·피해 자료 (물피도주)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n<li><strong>초범·반성·피해 회복·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가중처벌 조항이 위헌결정으로 소급 효력을 상실하면 그 조항을 적용해 기소한 부분은 범죄가 되지 않는 때에 해당할 여지가 있으므로 공소장의 적용 법조가 단순/가중 어느 쪽인지부터 구분해두는 것이 핵심입니다. 물피도주 부분은 사고 경위·피해 회복으로, 면허 처분은 안 날부터 90일 내 이의신청·행정심판으로 별개로 정리하고 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용 법조</strong> — 단순 음주운전인지 전력 가중조항이 적용됐는지.</li>\n<li><strong>위헌 효력</strong> — 적용 조항이 위헌결정으로 소급 효력 상실됐는지.</li>\n<li><strong>물피도주 성립</strong> — 물피사고 후 조치의무 위반이 인정되는지.</li>\n<li><strong>피해 회복</strong> — 물피 피해 회복·합의가 처리에 미치는 영향.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위헌결정으로 효력을 잃은 음주 가중조항의 처리',
        summary:
          '대법원 2022도3075(대법원, 2022.06.30 선고) 영역에서 법원은 음주측정거부 1회, 음주운전 2회 형사처벌 전력이 있는 피고인이 음주측정 요구에 불응했다는 공소사실에 대해 원심이 도로교통법 제148조의2 제1항, 제44조 제1항·제2항을 적용해 유죄를 선고했는데, 원심판결 선고 후 헌법재판소가 같은 항 중 \'제44조 제1항을 1회 이상 위반한 사람으로서 다시 같은 조 제2항을 위반한 사람\'에 관한 부분에 대해 위헌결정을 선고한 사안에서, 위 법률조항 부분은 소급하여 효력을 상실하였으므로 해당 법조를 적용해 기소한 피고사건은 범죄로 되지 아니하는 경우에 해당한다고 판시했습니다. 음주 후 물피도주 사안에서도 적용 법조가 위헌으로 효력을 잃은 가중조항인지를 검토해볼 수 있습니다.',
        takeaway: '음주 + 물피도주 + 가중조항 결합 시 적용 법조·위헌 효력·행정 처분 평가 검토 영역 — 공소장·전력 이력·물피 경위·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '위헌으로 효력을 잃은 조항으로 기소되면 어떻게 되나요?',
        answer:
          '<strong>소급 효력 상실 부분은 범죄가 되지 않는 때로 다퉈질 여지가 있는 영역입니다.</strong> 공소장의 적용 법조를 먼저 확인.',
      },
      {
        question: '가중조항인지 단순 음주운전인지 어떻게 구분하나요?',
        answer:
          '<strong>공소장 적용 법조와 과거 전력 요건으로 구분하는 영역입니다.</strong> 처분 이력·전력 자료를 정리.',
      },
      {
        question: '물피도주는 따로 처리되나요?',
        answer:
          '<strong>물피사고 후 조치의무 위반은 별개로 성립·정황을 살피는 영역입니다.</strong> 사고 경위·피해 회복 자료를 확보.',
      },
      {
        question: '면허 취소도 같이 다퉈야 하나요?',
        answer:
          '<strong>음주·물피도주는 면허 처분으로 이어지기 쉬워 행정심판을 별도로 검토하는 영역입니다.</strong> 처분 통지서·90일 청구기한을 점검.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>공소장·적용 법조·전력 이력 확보가 출발점인 영역입니다.</strong> 물피 경위와 행정 청구기한을 함께 점검.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주운전 재범 가중처벌 추가 음주', href: '/guide/dui/dui-repeat-offense-aggravation-track' },
      { label: '음주운전 교통사고 발생 시 대처법', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '음주운전 면허 행정처분 절차', href: '/guide/dui/dui-administrative-license-procedure' },
      { label: '처음 음주운전 면허정지 면허취소 분기', href: '/guide/dui/dui-first-offense-license-suspension-vs-revocation-criteria' },
    ],
  },

  // ─── 8. jeonse-fraud-officetel-underwater-deposit-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-officetel-underwater-deposit-track',
    keyword: '오피스텔 깡통전세',
    questionKeyword: '시세보다 보증금이 과한 오피스텔에 전세로 들어왔는데, 알고 보니 선순위 권리가 잔뜩 끼어 보증금이 매매가에 육박하는 깡통전세였어요. 게다가 일부 임차인은 실제 거주가 아니라 빌려준 돈을 회수하려고 임차인 지위를 빌린 것 같습니다. 이런 임차인의 대항력과 제 보증금을 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '오피스텔 깡통전세 대항력·보증금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '오피스텔 깡통전세 — 5단계 대항력 점검 | 로앤가이드',
      description:
        '오피스텔 깡통전세로 보증금이 매매가에 육박해 걱정된다면 주택임대차보호법 제3조 대항력과 임대차 주된 목적 판단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"시세보다 보증금이 과하게 책정된 오피스텔에 전세로 들어왔는데, 알고 보니 선순위 근저당·임차권이 잔뜩 끼어 보증금이 매매가·시세에 육박하는 이른바 깡통전세였던 임차인입니다. 더 큰 문제는 같은 건물의 일부 선순위 임차인이 실제로 그곳에 살며 사용·수익하려던 것이 아니라, 임대인에게 빌려준 돈이나 기존 채권을 \'대항력 있는 임차인\' 지위를 빌려 우선 회수하려는 목적으로 형식만 임대차를 꾸민 것으로 보인다는 점입니다. 경매가 진행되면 정작 진짜 거주 목적인 제 보증금은 회수하기 어려운 상황이에요. 이렇게 거주가 아니라 채권 회수를 주된 목적으로 한 임차인에게도 대항력이 인정되는지, 제 보증금은 어떤 순서로 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 임차인의 대항력을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 임대차계약의 주된 목적이 주택을 사용·수익하려는 데 있지 않고 실제로는 대항력 있는 임차인으로 보호받아 후순위권리자 등보다 우선해 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상 대항력을 인정하지 않을 여지가 있고, 주민등록이 임차권을 매개로 한 점유임을 제3자가 인식할 수 있는 공시방법이 되는지도 함께 살펴야 한다고 보는 본 사례 흐름이 있는 영역입니다. 오피스텔 + 깡통전세 + 채권회수 목적 임차인 결합은 \'임대차 주된 목적·대항력 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리·배당 ② 선순위 성격 ③ 대항력 판단 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 배당 ② 성격 ③ 대항력 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 오피스텔 깡통전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리/배당·선순위 성격·대항력 판단·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·배당</strong> — 등기부·확정일자·전입, 시세·선순위 규모와 배당 가능성 확인.</li>\n<li><strong>② 선순위 성격</strong> — 선순위 임차인이 실제 거주·사용·수익 목적인지 정리.</li>\n<li><strong>③ 대항력 판단</strong> — 주된 목적이 채권회수면 대항력이 부정될 여지 정리.</li>\n<li><strong>④ 회수</strong> — 배당이의·우선변제·잔여 권리 등 회수 경로 정리.</li>\n<li><strong>⑤ 대응</strong> — 가장 임차인 다툼과 형사·민사 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대차의 주된 목적이 거주·사용·수익이 아니라 채권 회수에 있는 경우라면 주택임대차보호법상 대항력이 인정되지 않을 여지가 있고, 주민등록이 임차권을 매개로 한 점유임을 제3자가 인식할 수 있는 공시방법인지도 함께 살피는 영역. 선순위 임차인의 실제 거주·자금 성격을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·배당 자료 확인 (즉시)</strong> — 등기부·확정일자·전입, 시세·선순위 규모와 배당 가능성 점검.</li>\n<li><strong>2단계 — 선순위 성격 정리 (수일 내)</strong> — 선순위 임차인의 실제 거주·사용·수익 여부, 자금 성격·당사자 관계 확인.</li>\n<li><strong>3단계 — 대항력 다툼 정리 (가능한 빨리)</strong> — 주된 목적이 채권회수인지 가장 임차인 여부 정리.</li>\n<li><strong>4단계 — 배당이의·회수 정리 (종기 내/병행)</strong> — 배당이의·우선변제·잔여 권리 등 회수 경로 정리.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 미회수 잔액 처리, 형사 고소·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">오피스텔 깡통전세 대항력·보증금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리·배당·선순위 성격 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·소유관계)</strong></li>\n<li><strong>시세·감정가 자료 (깡통전세·보증금 비율)</strong></li>\n<li><strong>선순위 임차인 전입·확정일자 현황 자료 (선순위 규모)</strong></li>\n<li><strong>선순위 임차인 거주·자금 성격 관련 자료 (가장 임차인 다툼)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거주가 아니라 임대인에 대한 채권 회수를 주된 목적으로 한 선순위 임차인이라면 대항력이 부정될 여지가 있으므로, 선순위 임차인의 실제 거주 여부·자금 성격·당사자 관계를 정리해 가장 임차인인지 다툴 자료를 모아두는 것이 핵심입니다. 오피스텔은 시세·선순위 규모로 깡통전세 여부를 함께 점검하고 배당표·전입 현황·송금 내역도 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대차 주된 목적</strong> — 거주·사용·수익인지 채권 회수인지.</li>\n<li><strong>대항력 인정</strong> — 채권 회수 목적이면 대항력이 부정되는지.</li>\n<li><strong>공시방법</strong> — 주민등록이 임차권 매개 점유로 인식되는지.</li>\n<li><strong>배당 순위</strong> — 선순위 규모와 배당 순위·잔여 회수 가능성.</li>\n<li><strong>회수 경로</strong> — 배당이의·우선변제·형사 고소 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채권 회수가 주된 목적인 임대차와 대항력',
        summary:
          '대법원 2024다268508(대법원, 2025.08.14 선고) 영역에서 법원은 임대차계약의 주된 목적이 주택을 사용·수익하려는 데 있지 않고 실제로는 대항력 있는 임차인으로 보호받아 후순위권리자 기타 채권자보다 우선해 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상 대항력이 있다고 보기 어렵고, 주민등록이 대항력 요건을 충족시키는 공시방법이 되려면 임차권을 매개로 하는 점유임을 제3자가 인식할 수 있어야 한다고 보아, 주택의 소유자였던 자가 임차권 양도양수계약을 체결한 주된 목적이 임대차보증금 상당액 회수에 있고 그 주민등록이 임차권 매개 점유로 인식될 정도가 아닌데도 대항력 취득을 인정한 원심에 법리오해가 있다고 판시했습니다. 오피스텔 깡통전세 사안에서도 선순위 임차인의 임대차 주된 목적과 대항력을 검토해볼 수 있습니다.',
        takeaway: '오피스텔 + 깡통전세 + 채권회수 목적 임차인 결합 시 임대차 주된 목적·대항력 평가 검토 영역 — 전입 현황·거주·자금 성격·시세·배당표 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '거주가 아니라 돈 회수 목적 임차인도 대항력이 있나요?',
        answer:
          '<strong>주된 목적이 채권 회수면 대항력이 부정될 여지가 있는 영역입니다.</strong> 선순위 임차인의 거주·자금 성격을 정리.',
      },
      {
        question: '보증금이 시세에 육박하면 무조건 위험한가요?',
        answer:
          '<strong>시세·선순위 규모로 깡통전세·배당 가능성을 점검하는 영역입니다.</strong> 시세·감정가·등기부를 함께 확인.',
      },
      {
        question: '주민등록만 되어 있으면 대항력이 인정되나요?',
        answer:
          '<strong>임차권 매개 점유로 인식되는 공시방법인지가 함께 쟁점이 되는 영역입니다.</strong> 전입·점유 경위를 정리.',
      },
      {
        question: '배당에서 밀렸는데 다툴 방법이 있나요?',
        answer:
          '<strong>가장 임차인이 의심되면 배당이의 등으로 다툴 여지가 있는 영역입니다.</strong> 배당표·선순위 현황을 정리.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 대항력·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-lease-employee-opposing-power-track' },
      { label: '임대인 행세 가짜 전세계약 보증금', href: '/guide/jeonse-fraud/jeonse-fraud-fake-landlord-impersonation-track' },
      { label: '선순위 근저당 경매 배당 보증금 회수 절차', href: '/guide/jeonse-fraud/jeonse-fraud-priority-mortgage-auction-distribution-recovery-track' },
      { label: '신혼부부 이중계약 보증금 회수 판단', href: '/guide/jeonse-fraud/jeonse-fraud-newlywed-couple-dual-contract-deposit-track' },
    ],
  },

  // ─── 9. jeonse-fraud-newbuild-villa-underwater-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-newbuild-villa-underwater-track',
    keyword: '신축빌라 깡통전세',
    questionKeyword: '신축빌라에 전세로 들어왔는데 임대인이 빚을 감당 못 해 파산·면책을 받았어요. 저는 확정일자·전입을 갖춰 우선변제권이 있는데, 면책되면 임대인에게 보증금을 청구조차 못 하게 되는 건지, 우선변제권 부분은 어떻게 회수해야 하는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '신축빌라 깡통전세 면책·우선변제권 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '신축빌라 깡통전세 — 5단계 면책·우선변제권 점검 | 로앤가이드',
      description:
        '신축빌라 임대인 파산·면책으로 보증금이 걱정된다면 주택임대차보호법 우선변제권과 면책 효력 범위 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신축빌라에 전세로 들어왔는데 임대인이 여러 채를 무리하게 분양·임대하다 빚을 감당하지 못해 개인파산을 신청하고 면책결정까지 받은 임차인입니다. 저는 주택 인도와 전입신고를 마치고 확정일자까지 받아 우선변제권이 있는 임차인인데, 임대인이 면책을 받으면 보증금반환채권 자체를 임대인에게 청구조차 할 수 없게 되는 건지, 우선변제권이 인정되는 부분만이라도 따로 보호받는 건지 헷갈립니다. 파산절차가 폐지되고 면책결정이 확정된 뒤에 제 보증금은 어떤 방법으로 회수해야 하는지, 경매 환가대금에서는 우선변제를 받을 수 있는 건지, 어디부터 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조의2는 대항요건과 확정일자를 갖춘 임차인의 우선변제권을, 채무자 회생 및 파산에 관한 법률 제564조·제566조는 면책결정의 효력과 면책에서 제외되는 청구권을 정하는 영역입니다. 판례·실무는 면책결정의 효력이 우선변제권이 인정되는 부분을 포함해 주택임차인의 보증금반환채권 전부에 미치므로, 우선변제권이 인정되는 부분조차 변제받지 못한 상태에서 파산절차가 폐지되고 면책결정이 확정된 경우 임차인은 이후 주택이 환가되면 그 환가대금에 관해 우선변제권을 주장할 수 있을 뿐 채무자(임대인)를 상대로 보증금반환채권의 이행을 소구할 수는 없다고 보는 본 사례 흐름이 있는 영역입니다. 신축빌라 + 깡통전세 + 임대인 면책 결합은 \'면책 효력·우선변제권 회수 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리·면책 ② 우선변제권 ③ 환가·배당 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 변제권 ③ 환가 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신축빌라 깡통전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리/면책·우선변제권·환가/배당·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·면책</strong> — 대항요건·확정일자와 임대인 파산·면책 진행 상황 정리.</li>\n<li><strong>② 우선변제권</strong> — 우선변제권 인정 범위와 면책 효력이 미치는 범위 정리.</li>\n<li><strong>③ 환가·배당</strong> — 주택 환가 시 환가대금에서 우선변제 주장 가능성 정리.</li>\n<li><strong>④ 회수</strong> — 배당요구·우선변제·잔여 권리 등 회수 경로 정리.</li>\n<li><strong>⑤ 대응</strong> — 임대인 상대 소구 제한 쟁점과 환가 절차 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면책결정의 효력은 우선변제권 인정 부분을 포함해 보증금반환채권 전부에 미쳐 임대인을 상대로 한 이행 소구는 제한될 수 있으나, 주택이 환가되면 그 환가대금에 관해 우선변제권을 주장할 여지는 남는 영역. 대항요건·확정일자와 환가·배당 경로를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·면책 자료 확인 (즉시)</strong> — 등기부·확정일자·전입, 임대인 파산·면책결정·폐지 여부 점검.</li>\n<li><strong>2단계 — 우선변제권 정리 (수일 내)</strong> — 우선변제권 인정 범위와 면책 효력이 미치는 범위 확인.</li>\n<li><strong>3단계 — 환가·배당 정리 (가능한 빨리)</strong> — 주택 환가 시 환가대금에서 우선변제 주장 경로 정리.</li>\n<li><strong>4단계 — 배당요구·회수 정리 (종기 내/병행)</strong> — 경매 배당요구·우선변제·잔여 권리 등 회수 경로 정리.</li>\n<li><strong>5단계 — 잔액 처리·지원 (병행)</strong> — 미회수 잔액 처리, 전세피해 지원·상담 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">신축빌라 깡통전세 면책·우선변제권 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리·면책·우선변제권 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·소유관계)</strong></li>\n<li><strong>임대인 파산·면책결정·폐지 결정문 (면책 효력 범위)</strong></li>\n<li><strong>경매·환가 진행 자료·배당요구 자료 (환가대금)</strong></li>\n<li><strong>시세·감정가 자료 (깡통전세·배당 가능성)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인이 면책을 받으면 우선변제권 인정 부분을 포함한 보증금반환채권 전부에 면책 효력이 미쳐 임대인을 상대로 한 이행 소구는 제한될 수 있으나, 주택이 환가되면 그 환가대금에 관해 우선변제권을 주장할 여지는 남으므로 대항요건·확정일자와 환가·배당 경로를 정리해두는 것이 핵심입니다. 면책결정문과 경매·환가 진행 자료를 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>면책 효력 범위</strong> — 우선변제권 부분까지 면책 효력이 미치는지.</li>\n<li><strong>소구 제한</strong> — 임대인을 상대로 이행을 소구할 수 있는지.</li>\n<li><strong>환가대금 우선변제</strong> — 환가 시 환가대금에서 우선변제를 주장할 수 있는지.</li>\n<li><strong>배당 순위</strong> — 선순위 규모와 배당 순위·잔여 회수 가능성.</li>\n<li><strong>회수 경로</strong> — 배당요구·우선변제·전세피해 지원 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정의 효력과 임차인의 우선변제권',
        summary:
          '대법원 2022다247378(대법원, 2025.06.12 선고) 영역에서 법원은 채무자 회생 및 파산에 관한 법률 제564조에 의한 면책결정의 효력이 우선변제권이 인정되는 부분을 포함하여 주택임차인의 보증금반환채권 전부에 미치므로, 주택임차인이 보증금반환채권 중 우선변제권이 인정되는 부분조차 변제받지 못한 상태에서 파산절차가 폐지되었더라도 면책결정이 확정된 이상 이후 주택이 환가되는 경우 그 환가대금에 관해 자신의 우선변제권을 주장할 수 있을 뿐 채무자를 상대로 보증금반환채권의 이행을 소구할 수는 없다고 판시했습니다. 신축빌라 깡통전세 사안에서도 임대인 면책 후 보증금 회수가 임대인 상대 소구가 아니라 환가대금에 대한 우선변제권 행사로 검토될 수 있다는 점을 살펴볼 수 있습니다.',
        takeaway: '신축빌라 + 깡통전세 + 임대인 면책 결합 시 면책 효력·우선변제권 회수 평가 검토 영역 — 대항요건·확정일자·면책결정문·환가 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임대인이 면책받으면 보증금을 못 받나요?',
        answer:
          '<strong>임대인을 상대로 한 이행 소구는 제한될 수 있으나 환가대금 우선변제는 남는 영역입니다.</strong> 면책결정문·환가 진행을 확인.',
      },
      {
        question: '우선변제권 부분도 면책에 포함되나요?',
        answer:
          '<strong>면책 효력이 우선변제권 부분을 포함해 채권 전부에 미치는 영역입니다.</strong> 우선변제권 인정 범위를 정리.',
      },
      {
        question: '그럼 제 보증금은 어떻게 회수하나요?',
        answer:
          '<strong>주택이 환가되면 환가대금에서 우선변제권을 주장하는 경로로 검토되는 영역입니다.</strong> 배당요구·환가 진행을 점검.',
      },
      {
        question: '확정일자·전입은 왜 중요한가요?',
        answer:
          '<strong>우선변제권의 전제가 되는 대항요건·확정일자 충족 여부가 핵심인 영역입니다.</strong> 등기부·전입·확정일자를 먼저 확인.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 우선변제·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-tenant-opposing-power-track' },
      { label: '경매 배당 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-recovery-track' },
      { label: '선순위 근저당 경매 배당 보증금 회수 절차', href: '/guide/jeonse-fraud/jeonse-fraud-priority-mortgage-auction-distribution-recovery-track' },
      { label: '무월차임 전세 보증금 미반환 점유', href: '/guide/jeonse-fraud/jeonse-fraud-no-rent-deposit-holdover-track' },
    ],
  },

  // ─── 10. jeonse-fraud-double-contract-broker-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-double-contract-broker-track',
    keyword: '이중계약 중개사 전세사기',
    questionKeyword: '중개사를 통해 전세계약을 했는데, 알고 보니 한 집을 여러 명과 이중계약하거나 보증금을 가로채는 구조였어요. 저는 대항요건을 갖췄고 일부는 금융기관이 보증금채권을 양수해 배당까지 받았는데, 집이 경매로 넘어가 새 소유자가 생긴 지금 임대차관계와 잔액 보증금을 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '이중계약 중개사 전세사기 대항요건·회수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이중계약 전세사기 — 5단계 대항요건·회수 점검 | 로앤가이드',
      description:
        '이중계약 전세사기로 집이 경매에 넘어가 보증금 잔액이 걱정된다면 주택임대차보호법 대항요건 존속과 양수인 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공인중개사를 통해 전세계약을 했는데, 알고 보니 같은 집을 여러 임차인과 이중으로 계약하거나 임대인·중개 보조원이 보증금을 가로채는 구조의 전세사기였던 임차인입니다. 저는 주택 인도와 전입신고를 마쳐 대항요건을 갖췄고, 보증금 일부에 대해서는 금융기관이 보증금반환채권을 양수해 경매절차에서 배당요구를 하여 일부를 배당받기도 했어요. 그런데 집이 경매로 넘어가 새 소유자(양수인)가 생겼는데, 대항요건을 계속 유지하고 있는 제가 그 양수인을 상대로 임대차관계의 존속을 주장할 수 있는지, 배당받지 못한 보증금 잔액은 누구를 상대로 어떻게 회수해야 하는지 헷갈립니다. 어디부터 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록을 갖춘 임차인의 대항력을, 같은 법 제3조의2 제7항은 금융기관 등이 보증금반환채권을 양수해 우선변제권을 승계하는 경우를 정하는 영역입니다. 판례·실무는 대항력과 우선변제권을 겸유한 임차인이 우선변제권을 선택해 경매절차에서 배당요구를 했으나 보증금 전액을 배당받지 못한 경우 여전히 대항요건을 유지함으로써 임대차관계의 존속을 주장할 수 있고, 그 임차주택을 양수한 자는 임대인 지위를 승계하며, 이는 금융기관이 보증금반환채권을 양수해 일부를 배당받은 경우에도 마찬가지여서 대항요건이 존속하는 한 임차인은 금융기관이 잔액을 반환받을 때까지 양수인을 상대로 임대차관계 존속을 주장할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 이중계약 + 중개사 + 경매·양수인 결합은 \'대항요건 존속·양수인 책임 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리·배당 ② 대항요건 존속 ③ 양수인 책임 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 배당 ② 존속 ③ 승계 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이중계약 중개사 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리/배당·대항요건 존속·양수인 책임·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·배당</strong> — 등기부·확정일자·전입, 배당요구·미수령 잔액 확인.</li>\n<li><strong>② 대항요건 존속</strong> — 주택 인도·전입 등 대항요건이 계속 유지되는지 정리.</li>\n<li><strong>③ 양수인 책임</strong> — 경매로 임차주택을 양수한 자의 임대인 지위 승계 정리.</li>\n<li><strong>④ 회수</strong> — 금융기관 양수·우선변제 승계와 잔액 회수 경로 정리.</li>\n<li><strong>⑤ 대응</strong> — 이중계약·중개 과실 관련 형사·민사 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 우선변제권을 선택해 배당요구를 했으나 보증금 전액을 배당받지 못해도 대항요건이 존속하는 한 임차인은 양수인을 상대로 임대차관계 존속을 주장할 수 있고, 금융기관이 채권을 양수해 일부를 배당받은 경우에도 잔액을 반환받을 때까지 마찬가지인 영역. 대항요건 유지와 미수령 잔액을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·배당 자료 확인 (즉시)</strong> — 등기부·확정일자·전입, 배당요구·배당표·미수령 잔액 점검.</li>\n<li><strong>2단계 — 대항요건 존속 정리 (수일 내)</strong> — 주택 인도·전입 등 대항요건이 계속 유지되는지 확인.</li>\n<li><strong>3단계 — 양수인 승계 정리 (가능한 빨리)</strong> — 경매로 임차주택을 양수한 새 소유자의 임대인 지위 승계 정리.</li>\n<li><strong>4단계 — 잔액 회수 정리 (병행)</strong> — 금융기관 양수·우선변제 승계와 잔액 회수 경로 정리.</li>\n<li><strong>5단계 — 형사·민사 대응 (병행)</strong> — 이중계약·중개 과실 관련 고소·손해배상, 전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">이중계약 중개사 전세사기 대항요건·회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리·배당·대항요건 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건 존속)</strong></li>\n<li><strong>부동산등기부등본 (소유권 이전·근저당)</strong></li>\n<li><strong>경매 배당표·배당요구 자료 (미수령 잔액)</strong></li>\n<li><strong>금융기관 보증금채권 양수 관련 자료 (우선변제 승계)</strong></li>\n<li><strong>중개대상물 확인·설명서·중개 경위 자료 (이중계약·중개 과실)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 우선변제권을 선택해 배당요구를 했으나 보증금 전액을 배당받지 못했더라도 대항요건이 존속하는 한 임차인은 임차주택 양수인을 상대로 임대차관계 존속을 주장할 수 있고 이는 금융기관이 채권을 양수해 일부를 배당받은 경우에도 마찬가지이므로, 전입·점유 등 대항요건 유지와 미수령 잔액을 정리해두는 것이 핵심입니다. 중개대상물 확인·설명서 등 중개 경위 자료도 중개 과실 다툼을 위해 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 존속</strong> — 주택 인도·전입 등 대항요건이 계속 유지되는지.</li>\n<li><strong>임대차 존속</strong> — 배당 부족 시 양수인에게 임대차 존속을 주장할 수 있는지.</li>\n<li><strong>양수인 승계</strong> — 경매 양수인이 임대인 지위를 승계하는지.</li>\n<li><strong>금융기관 양수</strong> — 채권 양수·우선변제 승계가 잔액 회수에 미치는 영향.</li>\n<li><strong>중개 과실</strong> — 이중계약·설명의무 위반에 따른 책임.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 배당 부족 시 대항요건 존속과 양수인에 대한 임대차 존속 주장',
        summary:
          '대법원 2022다255126(대법원, 2023.02.02 선고) 영역에서 법원은 대항력과 우선변제권을 겸유한 임차인이 우선변제권을 선택해 경매절차에서 배당요구를 했으나 보증금 전액을 배당받지 못한 경우 여전히 대항요건을 유지함으로써 임대차관계의 존속을 주장할 수 있고, 그 임차주택을 양수한 자는 존속되는 임대차의 임대인 지위를 당연히 승계하며, 이는 주택임대차보호법 제3조의2 제7항의 금융기관이 임차인으로부터 보증금반환채권을 양수해 우선변제권을 승계한 다음 배당요구를 하여 보증금 중 일부를 배당받은 경우에도 마찬가지이므로, 대항요건이 존속하는 한 임차인은 금융기관이 보증금 잔액을 반환받을 때까지 임차주택의 양수인을 상대로 임대차관계의 존속을 주장할 수 있다고 판시했습니다. 이중계약 중개사 전세사기 사안에서도 대항요건 존속과 양수인의 임대인 지위 승계를 검토해볼 수 있습니다.',
        takeaway: '이중계약 + 중개사 + 경매·양수인 결합 시 대항요건 존속·양수인 책임 평가 검토 영역 — 전입·확정일자·배당표·양수·중개 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '배당으로 다 못 받았는데 새 소유자에게 주장할 수 있나요?',
        answer:
          '<strong>대항요건이 존속하는 한 양수인에게 임대차 존속을 주장할 여지가 있는 영역입니다.</strong> 전입·점유 유지와 배당표를 정리.',
      },
      {
        question: '경매로 집을 산 사람도 임대인 책임을 지나요?',
        answer:
          '<strong>존속되는 임대차의 임대인 지위를 승계할 여지가 있는 영역입니다.</strong> 소유권 이전 등기부와 대항요건을 확인.',
      },
      {
        question: '금융기관이 제 채권을 양수했는데 잔액은 어떻게 되나요?',
        answer:
          '<strong>금융기관이 잔액을 반환받을 때까지 양수인에게 존속을 주장할 여지가 있는 영역입니다.</strong> 채권 양수·배당 자료를 정리.',
      },
      {
        question: '대항요건을 잃으면 어떻게 되나요?',
        answer:
          '<strong>대항요건 존속 여부가 임대차 존속 주장의 전제가 되는 영역입니다.</strong> 전입·점유를 함부로 이전하지 말고 먼저 확인.',
      },
      {
        question: '이중계약한 중개사 책임도 물을 수 있나요?',
        answer:
          '<strong>이중계약·설명의무 위반은 중개 과실로 별도로 다퉈지는 영역입니다.</strong> 중개대상물 확인·설명서·중개 경위를 확보.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-lease-employee-opposing-power-track' },
      { label: '임대인 변경 후 보증금 승계 깡통전세', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-change-deposit-succession-track' },
      { label: '경매 배당 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-recovery-track' },
      { label: '오피스텔 사업자등록 보증금 판단', href: '/guide/jeonse-fraud/jeonse-fraud-officetel-business-registration-deposit-track' },
    ],
  },
];
