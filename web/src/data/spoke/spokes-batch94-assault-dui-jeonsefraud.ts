import { SpokePage } from '../spoke-pages';

// batch94 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-11)

export const spokesBatch94AssaultDuiJeonseFraud: SpokePage[] = [
  {
    domain: 'assault',
    slug: 'assault-pub-quarrel-injury-track',
    keyword: '술집 시비 폭행 상해',
    questionKeyword: '술집에서 옆자리 손님과 사소한 말다툼이 붙었는데, 상대가 갑자기 멱살을 잡고 주먹을 휘둘러 얼굴과 팔에 상처를 입었어요. 정식 상해진단서는 아직 못 받았는데 상대는 \'그 정도로 다칠 리 없다\'며 상해가 아니라고 우깁니다. 술집 시비에서 생긴 상해를 어디부터 정리해 고소를 준비해야 하는지 막막합니다.',
    ctaKeyword: '술집 시비 폭행 상해 정도·진단서 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '술집 시비 폭행 상해 — 5단계 상해 정도 점검 | 로앤가이드',
      description:
        '술집 시비로 맞아 상처를 입었는데 상대가 상해가 아니라고 우긴다면 형법 제257조 상해와 상해 판단기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술집·호프집에서 옆자리 손님이나 일행과 사소한 말이 오가다 시비가 붙었는데, 감정이 격해진 상대가 멱살을 잡고 주먹을 휘두르거나 밀쳐 얼굴·팔·머리에 상처를 입은 피해자입니다. 정식 상해진단서를 아직 못 받았거나 상처가 겉보기에 크지 않다 보니, 상대는 \'살짝 부딪힌 정도로 다칠 리 없다, 그건 상해도 아니고 그냥 가벼운 다툼이었다\'며 상해를 부인하고 있습니다. 멍·찰과상·붓기처럼 비교적 경미해 보이는 상처라도 상해로 인정되는지, 폭행에 그치는지 상해까지 다툴 수 있는지, 어디부터 신고·고소를 준비해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를, 같은 법 제257조 제1항은 사람의 신체를 상해한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 폭행에 수반해 생긴 상처가 극히 경미해 굳이 치료할 필요 없이 자연 치유되고 일상생활에 아무 지장이 없는 경우가 아니라면 상해에 해당할 수 있고, 피해자의 건강상태가 나쁘게 변경되고 생활기능에 장애가 초래되었는지는 객관적·일률적으로가 아니라 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 술집 시비 + 멱살·구타 + 상처 결합은 \'상해 정도·진단서 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 상해 정도 ② 진단서 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 상해 ② 진단서 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술집 시비 폭행 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 정도·진단서·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 정도</strong> — 멍·찰과상이 일상 지장·치유기간 기준으로 상해에 해당하는지 정리.</li>\n<li><strong>② 진단서</strong> — 상처 부위·정도와 시비 경위가 일치하는 진료기록 확보.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 어디까지 다툴지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 겉보기에 경미한 상처라도 굳이 치료할 필요 없이 자연 치유되고 일상에 지장이 없는 정도를 넘으면 상해로 평가될 여지가 있고, 그 판단은 피해자의 연령·체격 등 구체적 상태를 기준으로 하는 영역이라, 사건 직후 진료를 받아 부위·정도를 기록하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진료·영상 확보 (즉시~당일)</strong> — 사건 직후 병원 진료·상해진단서, 술집 CCTV·휴대폰 영상과 부상 사진 확보.</li>\n<li><strong>2단계 — 상해·진단서 정리 (수일 내)</strong> — 상처 부위·치유기간과 시비 경위가 일치하는지 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집 시비 폭행 상해 정도·진단서 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 정도·진단서·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (진단일자·부위·치유기간)</strong></li>\n<li><strong>술집 CCTV·매장 영상 (시비·구타 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (시비·폭언)</strong></li>\n<li><strong>다친 부위 사진 (시간정보 포함)</strong></li>\n<li><strong>시비·다툼 경위 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>동석자·종업원·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경미해 보이는 상처라도 일상에 지장을 줄 정도면 상해로 평가될 여지가 있고 판단은 피해자의 구체적 상태를 기준으로 하므로, 사건 직후 가능한 빨리 진료를 받아 부위·정도가 시비 경위와 일치하도록 기록해두는 것이 핵심입니다. 술집 CCTV는 보관 기간이 짧을 수 있어 업주에게 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해 인정</strong> — 경미한 상처가 상해로 평가되는지.</li>\n<li><strong>상해 인과</strong> — 부상이 멱살·구타로 생긴 것인지.</li>\n<li><strong>폭행·상해 구분</strong> — 폭행에 그치는지 상해까지 인정되는지.</li>\n<li><strong>쌍방 여부</strong> — 술자리 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해죄에서 상해의 판단기준',
        summary:
          '대법원 2003도4606(대법원, 2003.09.26 선고) 영역에서 법원은 폭행 등에 수반해 생긴 상해가 극히 경미해 굳이 치료할 필요 없이 자연적으로 치유되며 일상생활에 아무런 지장이 없는 경우에는 상해에 해당하지 않을 수 있으나 그러한 정도를 넘는 상처가 폭행·협박에 의해 생긴 경우라면 상해에 해당하며, 피해자의 건강상태가 나쁘게 변경되고 생활기능에 장애가 초래된 것인지는 객관적·일률적으로 판단할 것이 아니라 피해자의 연령·성별·체격 등 신체·정신상의 구체적 상태를 기준으로 판단해야 한다고 보아, 정식 상해진단서가 없더라도 상처의 부위·내용·정도·치유기간에 비추어 건강상태가 불량하게 변경되지 않았다고 단정할 수 없는데도 상해가 아니라고 본 원심을 파기했습니다. 술집 시비 폭행 상해 사안에서도 상처의 부위·정도와 일상 지장을 함께 검토해볼 수 있습니다.',
        takeaway: '술집 시비 + 멱살·구타 + 상처 결합 시 상해 정도·진단서 검토 영역 — 사건 직후 진료·CCTV·부상 사진·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '멍이나 찰과상도 상해가 되나요?',
        answer:
          '<strong>일상에 지장을 줄 정도면 상해로 평가될 여지가 있는 영역입니다.</strong> 부위·치유기간을 진료기록으로 남기세요.',
      },
      {
        question: '진단서가 없으면 상해를 다툴 수 없나요?',
        answer:
          '<strong>진단서가 없어도 상처의 부위·정도·치유기간으로 판단되는 영역입니다.</strong> 가능한 빨리 진료를 받아두세요.',
      },
      {
        question: '상해 정도는 어떤 기준으로 판단하나요?',
        answer:
          '<strong>피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단하는 영역입니다.</strong> 부상의 부위·내용을 구체적으로 기록하세요.',
      },
      {
        question: '술집 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>시비·멱살·구타 흐름을 보여줄 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧아 업주에게 보존 요청을 먼저 하세요.',
      },
      {
        question: '폭행으로만 처리될 수도 있나요?',
        answer:
          '<strong>상해 정도·인과에 따라 폭행에 그칠지 상해까지 다툴지 갈리는 영역입니다.</strong> 부상의 부위·치유기간 자료를 정리하세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '상해 판단기준·정도', href: '/guide/assault/assault-injury-standard-degree' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: 'CCTV·영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '치료비·위자료 손해배상', href: '/guide/assault/assault-medical-damages-claim' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-sports-facility-dispute-track',
    keyword: '운동시설 다툼 폭행',
    questionKeyword: '헬스장·체육시설에서 기구 사용 순서로 시비가 붙었는데, 상대가 제 앞을 가로막고 길을 막아서더니 몸으로 밀치며 위협했어요. 그런데 상대는 \'직접 때린 적도 없는데 무슨 폭행이냐\'고 합니다. 직접 몸을 때리지 않은 길막음·밀침도 폭행으로 다툴 수 있는지 막막합니다.',
    ctaKeyword: '운동시설 다툼 폭행 간접 유형력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '운동시설 다툼 폭행 — 5단계 유형력 점검 | 로앤가이드',
      description:
        '운동시설에서 길을 막고 밀쳐 위협당했는데 직접 때리지 않았다고 우긴다면 형법 제260조 폭행과 간접 유형력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"헬스장·실내체육시설·운동장에서 기구나 자리 사용 순서, 진로를 둘러싸고 상대와 시비가 붙었는데, 감정이 격해진 상대가 제 앞을 가로막고 길을 막아서거나 몸으로 밀치고 어깨를 부딪치며 위협한 피해자입니다. 상대는 \'직접 주먹으로 때린 적도 없고 그냥 막아섰을 뿐인데 무슨 폭행이냐\'며 발뺌하는데, 직접 신체를 가격하지 않은 길막음·밀침·물건을 이용한 위협 같은 행위도 폭행으로 평가되는지, 신체에 직접 닿지 않은 간접적인 유형력 행사도 다툴 수 있는지 헷갈립니다. 운동시설이라는 공간에서 벌어진 일이라 CCTV는 있는데 어디부터 신고·고소를 정리해야 하는지, 폭행과 단순 실랑이를 어떻게 구분하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를 처벌하도록 규정하고, 폭행은 사람의 신체에 대한 유형력의 행사를 의미하는 영역입니다. 판례·실무는 폭행은 사람에 대한 직접적인 유형력의 행사뿐 아니라 간접적인 유형력의 행사도 포함하며 반드시 사람의 신체에 대한 것에 한정되지 않고, 간접적 유형력 행사를 폭행으로 평가할 때는 유형력을 행사한 의도와 방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계 등을 종합적으로 고려해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 운동시설 시비 + 길막음·밀침 + 위협 결합은 \'간접 유형력·폭행 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 유형력 평가 ② 근접성 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 유형력 ② 근접성 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 운동시설 다툼 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 유형력 평가·근접성·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유형력 평가</strong> — 길막음·밀침이 직접·간접 유형력 행사로 평가되는지 정리.</li>\n<li><strong>② 근접성</strong> — 행위와 피해자의 근접성·위협 의도·방법 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)으로 다툴지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행은 직접적인 유형력 행사뿐 아니라 간접적인 유형력 행사도 포함될 여지가 있고 반드시 신체에 직접 닿아야 하는 것은 아니어서, 유형력을 행사한 의도·방법과 행위·피해자의 근접성을 영상으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·자료 확보 (즉시~당일)</strong> — 운동시설 CCTV·휴대폰 영상, 부상이 있으면 병원 진료·상해진단서와 사진 확보.</li>\n<li><strong>2단계 — 유형력·근접성 정리 (수일 내)</strong> — 길막음·밀침·위협 행위와 행위·피해자의 근접성을 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">운동시설 다툼 폭행 간접 유형력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 유형력 평가·근접성·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>운동시설 CCTV 영상 (길막음·밀침·위협 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (시비·폭언)</strong></li>\n<li><strong>상해진단서·진료기록 (부상 있을 시)</strong></li>\n<li><strong>위협에 쓰인 물건·기구 사진 (종류·정황)</strong></li>\n<li><strong>시비·진로 경위 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>이용객·관리자·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 신체를 가격하지 않은 길막음·밀침도 유형력을 행사한 의도·방법과 행위·피해자의 근접성에 따라 폭행으로 평가될 여지가 있으므로, CCTV로 행위와 피해자의 거리·동작·위협 정황을 구체적으로 특정해두는 것이 핵심입니다. 운동시설 CCTV는 보관 기간이 짧을 수 있어 관리자에게 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유형력 평가</strong> — 직접 때리지 않은 길막음·밀침도 폭행인지.</li>\n<li><strong>간접 유형력</strong> — 신체에 직접 닿지 않은 위협도 폭행으로 보는지.</li>\n<li><strong>근접성·의도</strong> — 행위와 피해자의 근접성·위협 의도가 있었는지.</li>\n<li><strong>쌍방 여부</strong> — 운동시설 시비가 쌍방으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행에서 간접적 유형력 행사의 평가기준',
        summary:
          '대법원 2018도1346(대법원, 2021.11.25 선고) 영역에서 법원은 강요죄의 폭행은 사람에 대한 직접적인 유형력의 행사뿐만 아니라 간접적인 유형력의 행사도 포함하며 반드시 사람의 신체에 대한 것에 한정되지 않고, 사람에 대한 간접적인 유형력의 행사를 폭행으로 평가하기 위해서는 유형력을 행사한 의도와 방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계 등을 종합적으로 고려해야 한다고 보면서, 피해자 주택 대문 앞에 차량을 주차해 출입을 막은 사안에서 물리적 접촉이나 유형력 행사로 볼 사정이 없고 피해자가 차량을 정상적으로 사용할 수 있었던 점을 종합해 폭행으로 평가하기 어렵다고 판시했습니다. 운동시설 다툼 사안에서도 길막음·밀침이 유형력 행사로 평가되는지를 의도·근접성 기준으로 검토해볼 수 있습니다.',
        takeaway: '운동시설 시비 + 길막음·밀침 + 위협 결합 시 간접 유형력·폭행 평가 검토 영역 — CCTV·근접성·위협 정황·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '직접 때리지 않고 길만 막아도 폭행인가요?',
        answer:
          '<strong>의도·방법과 근접성에 따라 유형력 행사로 평가될 여지가 있는 영역입니다.</strong> 행위와 거리·동작을 영상으로 특정하세요.',
      },
      {
        question: '신체에 직접 닿지 않은 위협도 다툴 수 있나요?',
        answer:
          '<strong>간접적 유형력 행사도 폭행에 포함될 여지가 있는 영역입니다.</strong> 위협 정황과 근접성을 영상·진술로 확보하세요.',
      },
      {
        question: '폭행과 단순 실랑이는 어떻게 구분하나요?',
        answer:
          '<strong>유형력 행사 의도·방법·근접성을 종합해 판단하는 영역입니다.</strong> 시비 경위와 행위 동작을 구체적으로 정리하세요.',
      },
      {
        question: '운동시설 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>길막음·밀침의 근접성과 위협 정황을 보여줄 핵심 자료가 되는 영역입니다.</strong> 관리자에게 보존 요청을 먼저 하세요.',
      },
      {
        question: '다치지 않았어도 폭행으로 다툴 수 있나요?',
        answer:
          '<strong>상해 없이도 유형력 행사가 인정되면 폭행으로 다툴 여지가 있는 영역입니다.</strong> 행위 정황을 영상·진술로 확보하세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '폭행 성립 기준', href: '/guide/assault/assault-establishment-standard' },
      { label: '간접 유형력·폭행 평가', href: '/guide/assault/assault-indirect-force-standard' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: 'CCTV·영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-care-facility-resident-track',
    keyword: '요양시설 입소자 폭행 상해',
    questionKeyword: '요양시설에 계신 가족이 다른 입소자나 종사자에게 맞아 멍과 상처를 입었는데, 정작 본인은 진술이 오락가락하고 정식 상해진단서도 늦게야 받았어요. 시설 측은 피해자 진술이 일관되지 않는다며 발뺌합니다. 요양시설 입소자 폭행 상해를 어떤 절차로 정리해 신고해야 하는지 막막합니다.',
    ctaKeyword: '요양시설 입소자 폭행 상해 신고·절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '요양시설 입소자 폭행 상해 — 5단계 신고·절차 가이드 | 로앤가이드',
      description:
        '요양시설 입소자가 맞아 상처를 입었는데 진술이 오락가락해 막막하다면 형법 제257조 상해와 피해자 진술 신빙성 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"요양원·요양병원·복지시설에 계신 부모님이나 가족이 다른 입소자나 종사자에게 맞아 얼굴·팔·몸에 멍과 상처를 입은 것을 뒤늦게 발견한 보호자입니다. 정작 피해 당사자는 고령이거나 인지·거동에 어려움이 있어 \'누가 언제 때렸다\'는 진술이 오락가락하고, 정식 상해진단서도 한참 뒤에야 받게 되는 경우가 많습니다. 시설 측은 \'피해자 진술이 일관되지 않는다, 본인이 부딪힌 것 같다\'며 책임을 회피하는데, 진술이 다소 흔들린다는 이유만으로 폭행·상해가 묻히는 건 아닌지, 피해자 진술의 신빙성을 어떻게 다투고 어떤 절차로 신고·고소를 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 형사소송법 제308조는 증거의 증명력을 법관의 자유판단에 맡기는 자유심증주의를 정하는 영역입니다. 판례·실무는 피해자 등의 진술은 그 주요 부분이 일관되며 경험칙에 비추어 비합리적이거나 진술 자체로 모순되지 않고 허위로 불리한 진술을 할 동기가 분명히 드러나지 않는 이상 특별한 이유 없이 함부로 배척해서는 안 되고, 개별적·구체적 사건에서 피해자가 처한 특별한 사정을 충분히 고려해 진술의 증명력을 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 요양시설 + 입소자 부상 + 진술 흔들림 결합은 \'피해자 진술 신빙성·상해 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 진술 신빙성 ② 상해 정도 ③ 신고 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진술 ② 상해 ③ 신고 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 요양시설 입소자 폭행 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진술 신빙성·상해 정도·신고·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진술 신빙성</strong> — 피해자 진술의 주요 부분이 일관·합리적인지, 특별한 사정을 고려했는지 정리.</li>\n<li><strong>② 상해 정도</strong> — 멍·상처의 부위·치유기간과 발생 경위 정리.</li>\n<li><strong>③ 신고</strong> — 경찰 신고·노인보호전문기관·시설 신고 경로 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피해자 진술이 다소 흔들려도 주요 부분이 일관되고 허위 진술 동기가 드러나지 않으면 함부로 배척하기 어렵고, 피해자가 처한 특별한 사정을 고려해 증명력을 판단하는 영역. 부상 사진·진료기록·시설 CCTV로 발생 경위를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·노인보호전문기관·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부상·영상 확보 (즉시~당일)</strong> — 부상 부위 사진, 병원 진료·상해진단서, 시설 CCTV 보존 요청.</li>\n<li><strong>2단계 — 진술·경위 정리 (수일 내)</strong> — 피해자 진술의 주요 부분과 발생 시점·경위, 진술이 흔들리는 사정을 기록.</li>\n<li><strong>3단계 — 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 노인보호전문기관 1577-1389 신고 병행.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요양시설 입소자 폭행 상해 신고·절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진술 신빙성·상해 정도·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>부상 부위 사진 (시간정보 포함·경과 기록)</strong></li>\n<li><strong>요양시설 CCTV 영상 (발생 정황)</strong></li>\n<li><strong>피해자 진술·보호자 청취 메모 (주요 사실)</strong></li>\n<li><strong>시설 사고보고서·간호일지 (발생 경위)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>동료 입소자·종사자·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 피해자 진술이 다소 흔들리더라도 주요 부분이 일관되고 허위로 불리한 진술을 할 동기가 드러나지 않으면 함부로 배척하기 어려우므로, 피해자가 처한 특별한 사정과 함께 부상 사진·진료기록·시설 CCTV로 발생 경위를 구체적으로 남겨두는 것이 핵심입니다. 시설 CCTV는 보관 기간이 짧을 수 있어 즉시 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 진술이 흔들린다는 이유로 배척되는지.</li>\n<li><strong>상해 인과</strong> — 부상이 폭행으로 생긴 것인지 부딪힘인지.</li>\n<li><strong>특별한 사정</strong> — 고령·인지 어려움 등 사정이 고려되는지.</li>\n<li><strong>시설 책임</strong> — 시설의 관리·보호 책임이 있는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>노인보호전문기관 1577-1389</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술의 신빙성 판단과 특별한 사정 고려',
        summary:
          '대법원 2018도7709(대법원, 2018.10.25 선고) 영역에서 법원은 증거의 증명력은 법관의 자유판단에 맡겨져 있으나 그 판단은 논리와 경험칙에 합치해야 하고, 피해자 등의 진술은 그 주요한 부분이 일관되며 경험칙에 비추어 비합리적이거나 진술 자체로 모순되는 부분이 없고 허위로 불리한 진술을 할 동기나 이유가 분명히 드러나지 않는 이상 특별한 이유 없이 함부로 배척해서는 안 되며, 개별적·구체적 사건에서 피해자가 처한 특별한 사정을 충분히 고려하지 않은 채 진술의 증명력을 가볍게 배척하는 것은 정의와 형평의 이념에 입각한 증거판단이라 볼 수 없다고 판시했습니다. 요양시설 입소자 폭행 상해 사안에서도 피해자 진술의 신빙성과 특별한 사정을 함께 검토해볼 수 있습니다.',
        takeaway: '요양시설 + 입소자 부상 + 진술 흔들림 결합 시 피해자 진술 신빙성·상해 평가 검토 영역 — 부상 사진·진료기록·CCTV·시설 보고서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '피해자 진술이 오락가락하면 폭행이 묻히나요?',
        answer:
          '<strong>주요 부분이 일관되고 허위 동기가 없으면 함부로 배척하기 어려운 영역입니다.</strong> 진술의 주요 사실을 메모로 정리하세요.',
      },
      {
        question: '고령·인지 어려움은 신빙성 판단에 고려되나요?',
        answer:
          '<strong>피해자가 처한 특별한 사정을 충분히 고려해 판단하는 영역입니다.</strong> 인지 상태·진술 경위를 함께 기록하세요.',
      },
      {
        question: '진단서를 늦게 받았으면 불리한가요?',
        answer:
          '<strong>발생 경위와 부위·정도가 일치하면 다툴 여지가 있는 영역입니다.</strong> 부상 사진을 경과별로 남겨두세요.',
      },
      {
        question: '시설 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>발생 정황을 보여줄 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧아 즉시 보존 요청을 하세요.',
      },
      {
        question: '어디에 신고해야 하나요?',
        answer:
          '<strong>경찰 신고와 노인보호전문기관 신고를 병행할 수 있는 영역입니다.</strong> 112와 1577-1389를 함께 활용하세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '피해자 진술 신빙성 기준', href: '/guide/assault/assault-victim-statement-credibility' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: 'CCTV·영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '치료비·위자료 손해배상', href: '/guide/assault/assault-medical-damages-claim' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-dating-couple-falsely-accused-defense',
    keyword: '연인 다툼 폭행 무고',
    questionKeyword: '연인과 말다툼을 하다 헤어지자고 했더니, 며칠 뒤 상대가 제가 자기를 때려 다치게 했다며 상해진단서를 들고 고소했어요. 저는 그런 적이 없고 진단서도 통증을 호소해 받은 것 같습니다. 사실과 다르게 신고되어 혐의를 받고 있다면 어떻게 방어해야 하는지 막막합니다.',
    ctaKeyword: '연인 다툼 폭행 무고 방어 순서 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '연인 다툼 폭행 무고 — 5단계 진단서 방어 점검 | 로앤가이드',
      description:
        '연인 다툼 뒤 상대가 통증을 호소해 받은 진단서로 상해 고소를 해 막막하다면 형법 제257조 상해와 상해진단서 증명력 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"연인·동거인과 감정적인 말다툼이나 실랑이가 있었는데, 헤어지자는 말이 오간 며칠 뒤 상대가 \'네가 나를 때려 다치게 했다\'며 상해진단서를 들고 고소·신고해 입건된 피고인입니다. 저는 상대를 때리거나 다치게 한 적이 없고, 진단서도 정작 다친 모습 없이 \'통증이 있다\'는 주관적인 호소만으로 늦게 발급된 것으로 보입니다. 사실과 다르게 신고되었는데도 상대의 진술과 상해진단서만으로 제가 가해자로 몰리는 건 아닌지, 통증 호소에 주로 의존해 발급된 진단서가 곧바로 제 행위로 생긴 상해를 증명하는 것은 아닌지, 혐의를 받고 있다면 어디부터 방어를 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 형사소송법 제308조는 증거의 증명력을 법관의 자유판단에 맡기는 자유심증주의를 정하는 영역입니다. 판례·실무는 상해진단서가 피해자 진술과 함께 유력한 증거가 될 수 있으나 상해 사실의 존재 및 인과관계도 합리적 의심이 없는 정도로 증명되어야 하므로, 진단서가 주로 통증이 있다는 피해자의 주관적 호소에 의존해 의학적 가능성만으로 발급된 때에는 진단·작성일자가 상해 발생 시점과 근접한지, 발급 경위에 신빙성을 의심할 사정이 없는지, 기재된 부위·정도가 주장 원인·경위와 일치하는지, 진료 시점·동기·경과 등을 면밀히 살펴 증명력을 신중하게 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 연인 다툼 + 상대 고소 + 통증 진단서 결합은 \'상해진단서 증명력·인과 평가\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 진단서 증명력 ② 인과 ③ 진술 신빙성 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 진단서 ② 인과 ③ 진술 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 연인 다툼 폭행 무고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단서 증명력·인과·진술 신빙성·형사 절차·방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단서 증명력</strong> — 통증 호소에 의존한 진단서가 곧바로 내 행위로 생긴 상해를 증명하는지 정리.</li>\n<li><strong>② 인과</strong> — 진단서 부위·정도가 내 행동·다툼 경위와 맞는지, 기왕증 가능성 정리.</li>\n<li><strong>③ 진술 신빙성</strong> — 상대 진술이 일관·합리적인지, 합리적 의심 여지가 있는지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 고소 접수·조사·대질·검찰 처분 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 메신저·통화·목격자·다툼 경위 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주로 통증 호소에 의존해 발급된 상해진단서는 진단 시점의 근접성·발급 경위·진료 경과까지 살펴 증명력을 신중히 판단하는 영역이고, 상해 사실과 인과도 합리적 의심 없이 증명되어야 하는 영역. 진단서 부위·정도가 행동·경위와 맞지 않는 점과 발급 경위를 자료로 정리해두는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건·자료 확인 (즉시~당일)</strong> — 고소장·진단서 사본, 메신저·통화·SNS 기록, 다툼 장소 CCTV 보존 요청.</li>\n<li><strong>2단계 — 진단서·인과 대조 (수일 내)</strong> — 진단·작성일자가 상해 시점과 근접한지, 부위·정도가 내 행동·경위와 일치하는지 대조 정리.</li>\n<li><strong>3단계 — 진술·신빙성 검토 (조사 전)</strong> — 상대 진술의 일관성·합리적 의심 여지, 발급 경위·진료 시점 점검.</li>\n<li><strong>4단계 — 조사·대질 대응 (수사기관 일정)</strong> — 진술·기록·목격자 정리 후 조사 출석, 방어권·국선변호인 활용.</li>\n<li><strong>5단계 — 처분 대응 (검찰 처분 일정)</strong> — 혐의없음·불기소 의견서나 정상 자료 제출 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 무고 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연인 다툼 폭행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단서 증명력·인과·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>고소장·상해진단서 사본 (부위·정도·발급 시점)</strong></li>\n<li><strong>메신저·통화·SNS 기록 (전후 정황·다툼 경위)</strong></li>\n<li><strong>다툼 장소 CCTV·영상 (행동 정황)</strong></li>\n<li><strong>다툼 경위·내 행동 메모 (육하원칙)</strong></li>\n<li><strong>상대 진술 불일치·기왕증 단서 자료 (합리적 의심)</strong></li>\n<li><strong>동석자·목격자 진술·연락처 (행위 부인 입증)</strong></li>\n<li><strong>반성·정상·관계 회복 등 정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상해진단서가 주로 통증이 있다는 피해자의 주관적 호소에 의존해 의학적 가능성만으로 발급된 때에는 진단·작성일자가 상해 시점과 근접한지, 부위·정도가 주장 원인·경위와 일치하는지, 진료 시점·동기·경과까지 살펴 증명력을 신중히 판단하므로, 진단서가 다친 모습 없이 늦게 발급된 정황과 내 행동·경위와 어긋나는 지점을 구체적으로 짚어두는 것이 핵심입니다. 메신저·CCTV는 시간이 지나면 삭제되기 쉬워 즉시 보존 요청·캡처를 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진단서 증명력</strong> — 통증 호소에 의존한 진단서가 곧바로 상해를 증명하는지.</li>\n<li><strong>인과</strong> — 진단서 부위·정도가 내 행동·경위와 맞는지.</li>\n<li><strong>발급 경위</strong> — 진단·작성일자가 상해 시점과 근접한지.</li>\n<li><strong>기왕증·제3원인</strong> — 통증이 다른 원인으로 생겼을 가능성이 있는지.</li>\n<li><strong>방어권</strong> — 조사·대질에서 방어권이 충분히 보장되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통증 호소에 의존한 상해진단서의 증명력 판단기준',
        summary:
          '대법원 2016도15018(대법원, 2016.11.25 선고) 영역에서 법원은 형사사건에서 상해진단서는 피해자 진술과 함께 피고인의 범죄사실을 증명하는 유력한 증거가 될 수 있으나 상해 사실의 존재 및 인과관계도 합리적 의심이 없는 정도의 증명에 이르러야 하므로 객관성·신빙성을 의심할 사정이 있는 때에는 증명력 판단에 매우 신중해야 하고, 특히 진단서가 주로 통증이 있다는 피해자의 주관적 호소에 의존해 의학적 가능성만으로 발급된 때에는 진단·작성일자가 상해 발생 시점과 근접한지, 발급 경위에 신빙성을 의심할 사정이 없는지, 기재된 부위·정도가 주장하는 원인·경위와 일치하는지, 진료 시점·동기·경위와 그 후 경과를 면밀히 살펴 논리와 경험법칙에 따라 증명력을 판단해야 한다고 판시했습니다. 연인 다툼 폭행 무고 방어 사안에서도 진단서 증명력과 인과를 검토해볼 수 있습니다.',
        takeaway: '연인 다툼 + 상대 고소 + 통증 진단서 결합 시 상해진단서 증명력·인과 평가 검토 영역 — 진단서 대조·메신저·진술 불일치·정상 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '통증만 호소해 받은 진단서로 가해자로 몰리나요?',
        answer:
          '<strong>발급 경위·진료 경과까지 살펴 증명력을 신중히 보는 영역입니다.</strong> 혐의를 받고 있다면 발급 경위·시점부터 정리하세요.',
      },
      {
        question: '진단서 부위가 제 행동과 안 맞으면 도움이 되나요?',
        answer:
          '<strong>부위·정도가 주장 원인·경위와 어긋나면 증명력 판단의 다툼 지점이 되는 영역입니다.</strong> 행동·경위를 메신저·진술로 대조하세요.',
      },
      {
        question: '진단을 늦게 받은 점이 다툼이 되나요?',
        answer:
          '<strong>진단·작성일자가 상해 시점과 근접한지가 증명력 판단에서 살펴지는 영역입니다.</strong> 발급 시점·경위 자료를 확보하세요.',
      },
      {
        question: '메신저 기록은 꼭 챙겨야 하나요?',
        answer:
          '<strong>다툼 경위와 내 행동을 보여줄 핵심 방어 자료가 되는 영역입니다.</strong> 삭제되기 쉬워 즉시 캡처·보존하세요.',
      },
      {
        question: '조사받을 때 변호인 도움을 받을 수 있나요?',
        answer:
          '<strong>방어권 보장과 국선변호인 제도를 활용할 수 있는 영역입니다.</strong> 조사 전 진술·자료를 정리해 출석을 준비하세요.',
      },
    ],
    cta: { text: '폭행 무고 대응 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '사실과 다른 고소 방어', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '상해진단서 증명력 기준', href: '/guide/assault/assault-injury-certificate-evidence' },
      { label: '경찰 조사 대응', href: '/guide/assault/assault-police-investigation-response' },
      { label: '국선변호인·방어권', href: '/guide/assault/assault-public-defender-rights' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-morning-hangover-track',
    keyword: '숙취 다음날 음주운전',
    questionKeyword: '전날 술을 마시고 푹 잤다고 생각해 다음날 아침 출근길에 운전했는데, 단속에 걸려 음주측정을 요구받았어요. 저는 술이 깬 줄 알았고 측정을 어떻게 해야 할지 몰라 머뭇거렸는데 측정거부로 입건됐습니다. 혐의를 받고 있다면 숙취 운전 측정 요구와 거부 성립을 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '숙취 다음날 음주운전 측정거부·일시 거부 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '숙취 다음날 음주운전 — 5단계 측정거부 점검 | 로앤가이드',
      description:
        '숙취 운전 단속에서 머뭇거리다 측정거부로 입건돼 막막하다면 도로교통법 제148조의2와 측정거부 성립·일시 거부 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전날 밤늦게까지 술을 마시고 잠을 충분히 잤다고 생각해 다음날 아침 출근길에 운전했다가, 단속이나 신고로 음주측정을 요구받은 운전자입니다. 저는 이미 술이 깬 줄 알았고 측정 절차를 어떻게 따라야 하는지 몰라 잠시 머뭇거리거나 숨을 약하게 내쉬었을 뿐인데, 경찰이 이를 측정 불응으로 보아 음주측정거부로 입건했습니다. 1차 요구에 곧바로 응하지 못한 것이 곧 측정거부가 되는지, 잠시 머뭇거린 일시적인 거부도 거부로 성립하는지, 측정에 응할 의사가 없음이 객관적으로 명백했는지 헷갈립니다. 숙취 상태에서 운전했다는 사정만으로 측정거부가 곧바로 인정되는 건지, 혐의를 받고 있다면 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제2항은 운전자가 경찰공무원의 음주측정에 응할 의무를, 같은 법 제148조의2 제1항 제2호는 측정 불응의 처벌을 정하는 영역입니다. 판례·실무는 처벌조항의 \'측정에 응하지 아니한 경우\'란 술에 취한 상태에 있다고 인정할 상당한 이유가 있는 운전자가 측정에 응할 의사가 없음이 객관적으로 명백하다고 인정되는 때를 의미하므로, 1차 측정에만 불응했을 뿐 곧이어 2차 측정에 응한 경우처럼 측정거부가 일시적인 것에 불과한 경우까지 측정불응죄가 성립한다고 볼 수 없고, 소극적 거부는 일정 시간 계속·반복되어 측정불응 의사가 객관적으로 명백할 때 비로소 성립한다고 보는 본 사례 흐름이 있는 영역입니다. 숙취 운전 + 머뭇거림 + 측정 요구 결합은 \'측정거부 성립·일시 거부 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 측정거부 성립 ② 일시 거부 ③ 거부 의사 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 성립 ② 일시 ③ 의사 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 숙취 다음날 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정거부 성립·일시 거부·거부 의사·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정거부 성립</strong> — 측정 불응 의사가 객관적으로 명백했는지 정리.</li>\n<li><strong>② 일시 거부</strong> — 1차에만 머뭇거리고 이후 응했는지 등 일시성 정리.</li>\n<li><strong>③ 거부 의사</strong> — 명시적·적극적 거부였는지, 소극적 거부의 계속·반복 여부 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정거부는 측정에 응할 의사가 없음이 객관적으로 명백할 때 성립하므로 1차에만 머뭇거린 일시적 거부만으로 곧바로 성립한다고 보기 어렵고, 소극적 거부는 일정 시간 계속·반복되어야 하는 영역. 측정 요구 경위와 응답 과정을 시간순으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·정황 자료 확인 (즉시~당일)</strong> — 주취운전자 적발보고서·측정 요구 경위·고지 내용, 블랙박스·단속 영상 확인.</li>\n<li><strong>2단계 — 거부 성립 정리 (수일 내)</strong> — 1차·2차 측정 요구 경과와 머뭇거림·응답 여부를 시간순 정리.</li>\n<li><strong>3단계 — 거부 의사 정리 (공판 전)</strong> — 명시적·적극적 거부였는지, 소극적 거부의 계속·반복 여부 점검.</li>\n<li><strong>4단계 — 행정 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 측정거부 성립·일시성 변론, 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">숙취 다음날 음주운전 측정거부·일시 거부 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정거부 성립·일시 거부·행정 대응 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서·측정 요구 경위 자료 (요구 정당성)</strong></li>\n<li><strong>측정 고지·불이익 고지 횟수·시각 기록 (계속·반복)</strong></li>\n<li><strong>블랙박스·단속 현장 CCTV 영상 (응답 과정)</strong></li>\n<li><strong>1차·2차 측정 요구·응답 경과 메모 (일시성)</strong></li>\n<li><strong>전날 음주·수면 시각·음주량 자료 (정황)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정거부는 측정에 응할 의사가 없음이 객관적으로 명백할 때 성립하고 1차에만 불응한 뒤 곧이어 2차에 응한 일시적 거부는 측정불응죄로 보기 어려우므로, 측정 요구·고지 횟수·시각과 머뭇거림·응답 과정을 시간순으로 구체적으로 정리해두는 것이 핵심입니다. 면허 처분은 안 날부터 90일 내 이의신청·행정심판으로 별개로 챙기고 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정거부 성립</strong> — 측정 불응 의사가 객관적으로 명백했는지.</li>\n<li><strong>일시 거부</strong> — 1차에만 머뭇거린 일시적 거부도 성립하는지.</li>\n<li><strong>거부 의사</strong> — 명시·적극적 거부였는지, 소극적 거부의 계속·반복 여부.</li>\n<li><strong>고지·경위</strong> — 측정 요구·불이익 고지가 제대로 이뤄졌는지.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정불응죄의 성립 시기와 일시적 거부',
        summary:
          '대법원 2013도8481(대법원, 2015.12.24 선고) 영역에서 법원은 도로교통법상 음주측정불응죄의 \'경찰공무원의 측정에 응하지 아니한 경우\'란 술에 취한 상태에 있다고 인정할 상당한 이유가 있는 운전자가 음주측정에 응할 의사가 없음이 객관적으로 명백하다고 인정되는 때를 의미하고, 운전자가 1차 측정에만 불응하였을 뿐 곧이어 이어진 2차 측정에 응한 경우처럼 측정거부가 일시적인 것에 불과한 경우까지 측정불응죄가 성립한다고 볼 수 없으며, 호흡측정기에 숨을 내쉬는 시늉만 하는 등 소극적으로 거부한 경우라면 그 거부행위가 일정 시간 계속·반복되어 측정불응 의사가 객관적으로 명백하다고 인정될 때 비로소 성립하고, 명시적·적극적으로 거부 의사를 표명한 경우라면 즉시 성립할 수 있다고 판시했습니다. 숙취 다음날 음주운전 측정거부 사안에서도 거부의 일시성과 객관적 명백성을 검토해볼 수 있습니다.',
        takeaway: '숙취 운전 + 머뭇거림 + 측정 요구 결합 시 측정거부 성립·일시 거부 평가 검토 영역 — 적발보고서·고지 횟수·응답 경과·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '1차 측정에 곧바로 응하지 못하면 거부인가요?',
        answer:
          '<strong>일시적 거부만으로 곧바로 측정불응죄가 성립하기 어려운 영역입니다.</strong> 혐의를 받고 있다면 1차·2차 응답 경과부터 정리하세요.',
      },
      {
        question: '머뭇거린 소극적 태도도 거부로 보나요?',
        answer:
          '<strong>소극적 거부는 일정 시간 계속·반복되어야 명백한 거부로 보는 영역입니다.</strong> 요구·응답 시각을 시간순으로 정리하세요.',
      },
      {
        question: '거부 의사가 명백했는지는 어떻게 판단하나요?',
        answer:
          '<strong>운전자의 언행·태도와 요구 경위·고지 내용을 종합해 판단하는 영역입니다.</strong> 단속 영상·고지 횟수를 확보하세요.',
      },
      {
        question: '숙취 운전이면 측정거부가 곧바로 인정되나요?',
        answer:
          '<strong>음주상태 정황과 별개로 거부 성립은 객관적 명백성으로 판단되는 영역입니다.</strong> 응답 과정 자료를 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·고지 횟수·측정 요구 경위 확보가 출발점인 영역입니다.</strong> 응답 경과와 행정 청구기한을 함께 점검하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-measurement-refusal-track' },
      { label: '측정거부 성립·일시 거부', href: '/guide/dui/dui-refusal-establishment-standard' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-second-offense-aggravation-track',
    keyword: '음주운전 2회 가중처벌',
    questionKeyword: '예전에 음주운전으로 벌금을 받은 적이 있는데, 식당에서 신고를 받고 온 경찰이 제게 다가와 음주운전 여부를 묻고 측정을 했어요. 영장도 없이 식당에 들어와 측정한 게 위법은 아닌지, 2회째라 가중처벌된다는데 어떻게 다퉈야 하는지 막막합니다. 혐의를 받고 있다면 측정 적법성과 가중처벌을 정리하고 싶습니다.',
    ctaKeyword: '음주운전 2회 가중처벌·측정 적법성 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주운전 2회 가중처벌 — 5단계 측정 적법성 점검 | 로앤가이드',
      description:
        '식당에서 영장 없이 음주측정을 받고 2회째 가중처벌이 막막하다면 도로교통법 제148조의2와 임의수사·측정 적법성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"예전에 음주운전으로 벌금 이상의 처벌을 받은 전력이 있는데, 이번에 \'만취한 사람이 차를 주차하고 식당에 들어갔다\'는 112 신고를 받고 출동한 경찰이 식당 안으로 들어와 제게 다가와 음주운전을 했는지 묻고 곧바로 음주측정을 한 운전자입니다. 영장도 없이 경찰이 식당에 들어와 저를 찾아 측정한 것이 위법한 수색이나 강제수사는 아닌지, 그렇게 얻은 측정 결과가 증거로 쓰일 수 있는지 헷갈립니다. 게다가 과거 음주운전 전력이 있어 \'2회 이상\' 가중처벌 대상이 된다는데, 측정 절차의 적법성과 가중처벌 적용을 어떻게 다퉈야 하는지 막막합니다. 혐의를 받고 있다면 식당 출입·측정의 적법성과 가중처벌 쟁점을 어떤 순서로 정리해야 하는지 모르겠는 상태입니다." 형사소송법 제199조 제1항은 임의수사의 원칙을, 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제148조의2는 음주운전·반복 위반의 가중처벌을 정하는 영역입니다. 판례·실무는 수사기관이 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 아무런 물리력이나 강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾는 등 위법행위를 확인하는 것은 특별한 사정이 없는 한 임의수사로서 허용되므로 영장 없이 이루어졌다고 하여 위법하다고 할 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 음주 전력 + 식당 출입 + 측정 결합은 \'측정 적법성·가중처벌 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 측정 적법성 ② 임의수사 ③ 가중처벌 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 적법성 ② 임의수사 ③ 가중 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주운전 2회 가중처벌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 적법성·임의수사·가중처벌·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 적법성</strong> — 영장 없는 식당 출입·측정이 적법한지 정리.</li>\n<li><strong>② 임의수사</strong> — 물리력·강제력 없이 통상적 방법으로 피의자를 찾았는지 정리.</li>\n<li><strong>③ 가중처벌</strong> — 과거 전력·기간·적용 조항 등 가중 요건이 맞는지 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 불특정·다수가 출입 가능한 장소에 통상적인 방법으로 출입해 물리력 없이 피의자를 찾는 것은 임의수사로서 허용될 여지가 있어 영장 없이도 곧바로 위법하다고 보기 어려운 영역. 식당 출입 경위와 측정 과정, 가중처벌 적용 요건을 함께 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·측정 결과지·신고 출동 기록·공소장, 면허 처분 통지서 확인.</li>\n<li><strong>2단계 — 출입·측정 경위 정리 (수일 내)</strong> — 식당 출입 방법, 물리력·퇴거 요구 유무, 측정 요구·고지 과정을 시간순 정리.</li>\n<li><strong>3단계 — 가중처벌 요건 점검 (공판 전)</strong> — 과거 전력·확정 시점·기간과 적용 조항이 맞는지 점검.</li>\n<li><strong>4단계 — 행정 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 측정 적법성·가중처벌 쟁점 변론, 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주운전 2회 가중처벌·측정 적법성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 적법성·임의수사·가중처벌 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서·측정 결과지 (수치·시각)</strong></li>\n<li><strong>112 신고·출동 기록·현장 경위 자료 (출입 경위)</strong></li>\n<li><strong>식당 출입·종업원 응대 정황 자료 (물리력·퇴거 유무)</strong></li>\n<li><strong>CCTV·블랙박스 영상 (측정·응대 과정)</strong></li>\n<li><strong>과거 음주운전 전력·확정 시점 자료 (가중 요건)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 불특정·다수가 출입 가능한 장소에 통상적인 방법으로 출입해 물리력이나 강제력 없이 통상적인 방법으로 피의자를 찾는 것은 임의수사로 허용될 여지가 있으므로, 식당 출입 방법·종업원의 제지나 퇴거 요구 유무·측정 요구 과정을 시간순으로 정리해두는 것이 핵심입니다. 가중처벌은 과거 전력의 확정 시점·기간과 적용 조항이 맞는지 함께 점검하고, 면허 처분은 안 날부터 90일 내 행정심판으로 별개로 챙기는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 적법성</strong> — 영장 없는 식당 출입·측정이 적법한지.</li>\n<li><strong>임의수사</strong> — 물리력 없이 통상적 방법으로 피의자를 찾았는지.</li>\n<li><strong>퇴거 요구</strong> — 종업원이 출입을 제지·퇴거 요구했는지.</li>\n<li><strong>가중 요건</strong> — 과거 전력의 시점·기간·적용 조항이 맞는지.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영장 없는 식당 출입·음주측정과 임의수사',
        summary:
          '대법원 2025도6752(대법원, 2025.12.11 선고) 영역에서 법원은 형사소송법 제199조 제1항이 임의수사의 원칙을 밝히고 있고, 수사기관이 범죄를 수사하면서 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 아무런 물리력이나 강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾는 등 위법행위를 확인하는 것은 특별한 사정이 없는 한 임의수사의 한 방법으로서 허용되므로 영장 없이 이루어졌다고 하여 위법하다고 할 수 없다고 보아, 만취 신고로 출동한 경찰관들이 24시간 운영되는 식당에 통상적으로 출입해 물리력 없이 피고인을 찾아 음주측정을 한 사안에서 그 출입과 측정이 적법하다고 판시했습니다. 음주운전 2회 가중처벌 사안에서도 측정의 적법성과 가중처벌 요건을 검토해볼 수 있습니다.',
        takeaway: '음주 전력 + 식당 출입 + 측정 결합 시 측정 적법성·가중처벌 평가 검토 영역 — 적발·측정 자료·출동 기록·전력 자료·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '영장 없이 식당에 들어와 측정한 것도 적법한가요?',
        answer:
          '<strong>물리력 없이 통상적으로 피의자를 찾는 것은 임의수사로 허용될 여지가 있는 영역입니다.</strong> 혐의를 받고 있다면 출입 경위부터 정리하세요.',
      },
      {
        question: '종업원이 막지 않았으면 출입이 적법한가요?',
        answer:
          '<strong>제지·퇴거 요구 유무가 출입 적법성 판단의 한 사정이 되는 영역입니다.</strong> 출입·응대 정황을 영상·진술로 확보하세요.',
      },
      {
        question: '2회째라 가중처벌은 무조건 적용되나요?',
        answer:
          '<strong>과거 전력의 시점·기간과 적용 조항이 맞는지 따지는 영역입니다.</strong> 전력·확정 시점 자료를 점검하세요.',
      },
      {
        question: '측정 결과가 증거에서 빠질 수도 있나요?',
        answer:
          '<strong>출입·측정이 위법하면 증거능력이 다퉈질 여지가 있는 영역입니다.</strong> 측정 경위·결과지를 함께 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발·측정 자료와 출동·출입 경위 정리가 출발점인 영역입니다.</strong> 전력 자료와 행정 청구기한을 함께 점검하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주운전 반복 가중처벌', href: '/guide/dui/dui-repeat-aggravation-standard' },
      { label: '음주측정 적법성·임의수사', href: '/guide/dui/dui-measurement-legality-standard' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-accident-flee-scene-track',
    keyword: '음주 사고 후 도주 처벌',
    questionKeyword: '음주 상태로 운전하다 접촉 사고를 내고 당황해 현장을 잠시 벗어났는데, 도주치상과 사고후미조치까지 얽혀 기소됐어요. 그런데 공소장에 적힌 적용 법조와 다른 무거운 조항이 적용될 수 있다는 말도 듣고 혼란스럽습니다. 혐의를 받고 있다면 적용 법조와 방어권을 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '음주 사고 후 도주 적용법조·방어권 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 사고 후 도주 — 5단계 적용법조 점검 | 로앤가이드',
      description:
        '음주 사고 후 도주로 도주치상까지 기소돼 막막하다면 도로교통법 제148조의2와 불고불리·적용법조 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술에 취한 상태로 운전하다 접촉 사고를 낸 뒤 당황하거나 겁이 나 현장을 잠시 벗어났다가, 특정범죄가중처벌법상 도주치상·도로교통법상 사고후미조치·음주운전까지 여러 갈래로 얽혀 기소된 운전자입니다. 그런데 검사가 공소장에 기재한 적용 법조보다 법원이 직권으로 더 무거운 조항을 적용해 처벌할 수 있다는 말을 듣고 혼란스럽습니다. 공소사실에 적힌 음주운전 적용 법조와 다른 더 무거운 조항이 공소장 변경 없이 적용되면 제 방어에 실질적인 불이익이 생기는 건 아닌지, 음주운전·도주·미조치 각 부분을 어떻게 나눠 다퉈야 하는지 헷갈립니다. 혐의를 받고 있다면 적용 법조와 방어권, 도주·미조치 쟁점을 어떤 순서로 정리해야 하는지 막막한 상태입니다." 형사소송법 제298조는 공소장변경을, 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제148조의2는 반복 위반 등의 가중처벌을 정하는 영역입니다. 판례·실무는 피고인의 방어권 행사에 실질적 불이익을 초래할 염려가 없는 경우에는 법원이 공소장변경 없이 일부 다른 사실을 인정하거나 적용법조를 수정해도 불고불리 원칙에 위배되지 않으나, 실질적 불이익을 초래하는지는 공소사실의 기본적 동일성과 함께 법정형의 경중·방어 노력의 차이 가능성 등을 종합해 판단해야 하므로, 검사가 형이 가벼운 조항으로 기소했는데 법원이 직권으로 더 무거운 조항을 적용하는 것은 방어권에 실질적 불이익을 초래해 불고불리 원칙에 반할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 음주 사고 + 현장 이탈 + 적용법조 결합은 \'불고불리·적용법조 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 적용법조 ② 불고불리 ③ 도주·미조치 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 법조 ② 불고불리 ③ 도주 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 사고 후 도주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적용법조·불고불리·도주·미조치·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적용법조</strong> — 공소장 적용 법조와 법정형, 직권 변경 가능성 정리.</li>\n<li><strong>② 불고불리</strong> — 더 무거운 조항의 직권 적용이 방어권에 불이익인지 정리.</li>\n<li><strong>③ 도주·미조치</strong> — 현장 이탈 경위, 구호·신고 조치 유무를 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 검사가 형이 가벼운 조항으로 기소했는데 법원이 공소장변경 없이 직권으로 더 무거운 조항을 적용하면 방어권에 실질적 불이익을 초래해 불고불리 원칙에 반할 여지가 있는 영역. 공소장 적용 법조와 도주·미조치 경위를 함께 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건·공소장 확인 (즉시~당일)</strong> — 공소장·적용 법조·적발보고서·측정 결과지, 면허 처분 통지서 확인.</li>\n<li><strong>2단계 — 적용법조 정리 (수일 내)</strong> — 공소장 적용 조항과 법정형, 직권 변경 가능성·방어 영향 정리.</li>\n<li><strong>3단계 — 도주·미조치 경위 정리 (공판 전)</strong> — 사고 후 현장 이탈 경위, 구호·신고 조치 유무·시각 정리.</li>\n<li><strong>4단계 — 행정 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 불고불리·적용법조 변론, 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 사고 후 도주 적용법조·방어권 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 적용법조·불고불리·도주·미조치 갈래입니다.</strong></p>\n<ul>\n<li><strong>공소장·적용 법조 자료 (조항·법정형)</strong></li>\n<li><strong>주취운전자 적발보고서·측정 결과지 (수치·시각)</strong></li>\n<li><strong>사고 현장·블랙박스·CCTV 영상 (이탈 경위)</strong></li>\n<li><strong>구호·신고 조치 기록·통화 내역 (미조치 다툼)</strong></li>\n<li><strong>피해 정도·합의·치료 자료 (정상·양형)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 법원이 공소장변경 없이 직권으로 더 무거운 적용법조를 적용하는 것은 법정형의 경중과 방어 노력의 차이 가능성에 따라 방어권에 실질적 불이익을 초래할 여지가 있으므로, 공소장에 기재된 적용 조항·법정형과 도주·미조치 경위를 구체적으로 정리해두는 것이 핵심입니다. 면허 처분은 안 날부터 90일 내 이의신청·행정심판으로 별개로 챙기고 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용법조</strong> — 공소장 적용 조항과 법정형이 맞는지.</li>\n<li><strong>불고불리</strong> — 더 무거운 조항의 직권 적용이 방어권 불이익인지.</li>\n<li><strong>도주 성립</strong> — 현장 이탈이 도주로 평가되는지.</li>\n<li><strong>미조치</strong> — 구호·신고 조치 유무가 미조치 다툼에 영향을 주는지.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직권 적용법조 변경과 불고불리 원칙',
        summary:
          '대법원 2019도4608(대법원, 2019.06.13 선고) 영역에서 법원은 피고인의 방어권 행사에 실질적 불이익을 초래할 염려가 없는 경우에는 법원이 공소장변경절차 없이 일부 다른 사실을 인정하거나 적용법조를 수정하더라도 불고불리 원칙에 위배되지 않으나 실질적 불이익을 초래하는지는 공소사실의 기본적 동일성과 함께 법정형의 경중·방어 노력의 차이 가능성 등을 종합해 판단해야 한다고 보면서, 검사가 음주운전을 형이 가벼운 도로교통법 제148조의2 제2항 제2호로 기소하였는데 법원이 공소장변경 없이 직권으로 그보다 무거운 같은 조 제1항 제1호를 적용해 처벌하는 것은 불고불리 원칙에 반하여 피고인의 방어권 행사에 실질적 불이익을 초래한다고 판시했습니다. 음주 사고 후 도주 사안에서도 적용법조와 방어권을 검토해볼 수 있습니다.',
        takeaway: '음주 사고 + 현장 이탈 + 적용법조 결합 시 불고불리·적용법조 평가 검토 영역 — 공소장·적용 조항·도주 경위·구호 조치·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '공소장보다 무거운 조항이 적용될 수 있나요?',
        answer:
          '<strong>방어권에 실질적 불이익을 주는 직권 변경은 불고불리 원칙에 반할 여지가 있는 영역입니다.</strong> 혐의를 받고 있다면 공소장 적용 조항부터 확인하세요.',
      },
      {
        question: '적용법조가 바뀌면 방어에 불이익인가요?',
        answer:
          '<strong>법정형의 경중과 방어 노력 차이로 불이익 여부를 판단하는 영역입니다.</strong> 적용 조항·법정형을 비교 정리하세요.',
      },
      {
        question: '잠깐 현장을 벗어난 것도 도주인가요?',
        answer:
          '<strong>이탈 경위와 구호·신고 조치 유무로 도주 성립을 따지는 영역입니다.</strong> 이탈 경위·복귀 시각을 정리하세요.',
      },
      {
        question: '구호 조치를 했으면 미조치 다툼이 되나요?',
        answer:
          '<strong>구호·신고 조치 유무가 미조치 다툼에 영향을 주는 영역입니다.</strong> 통화·신고 기록을 확보하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>공소장·적용 법조와 사고·이탈 경위 정리가 출발점인 영역입니다.</strong> 측정 자료와 행정 청구기한을 함께 점검하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주 사고 후 도주·미조치', href: '/guide/dui/dui-hit-and-run-standard' },
      { label: '적용법조·불고불리 기준', href: '/guide/dui/dui-applicable-law-standard' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-multi-household-deposit-excess-track',
    keyword: '다가구주택 보증금 합계 초과',
    questionKeyword: '경매로 넘어간 집을 낙찰받은 사람과 임차권을 양수하는 계약을 맺고 전입신고까지 했는데, 그 뒤 다른 권리자가 본등기를 하고 집을 팔아버렸어요. 저는 보증금을 돌려받으려 했는데 \'대항력 있는 임차인이 아니다\'라는 말을 들었습니다. 채권 회수 목적으로 임차권을 양수한 경우 대항력이 인정되는지 막막합니다.',
    ctaKeyword: '임차권 양수 대항력·진정 임대차 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임차권 양수 대항력 — 5단계 진정 임대차 점검 | 로앤가이드',
      description:
        '채권 회수 목적으로 임차권을 양수했더니 대항력이 없다는 말을 들어 막막하다면 주택임대차보호법 제3조 대항력 요건 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"경매로 넘어간 주택을 낙찰받아 소유권을 취득한 사람과 사이에, 그 집에 살던 임차인의 임차권을 양도·양수하는 계약을 맺고 전입신고까지 마친 양수인입니다. 그런데 그 뒤 그 주택에 가등기를 해두었던 다른 권리자가 본등기를 마치고 제3자에게 집을 팔아버리자, 저는 임차인으로서 임대차보증금을 돌려받으려 했지만 상대방은 \'당신은 사실은 주택을 사용·수익하려는 진짜 임차인이 아니라 채권을 우선 회수하려고 임차권을 양수한 것이라 대항력 있는 임차인이 아니다\'라고 주장합니다. 주택을 실제로 사용·수익하려는 목적이 아니라 후순위권리자보다 우선해 채권을 회수하려는 목적으로 임차권을 양수해 주민등록을 한 경우에도 주택임대차보호법상 대항력이 인정되는지, 제 보증금은 어떻게 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택의 인도와 주민등록을 마치면 그다음 날부터 제3자에 대해 대항력이 생긴다고 정하고, 그 주민등록은 임차권을 매개로 한 점유임을 제3자가 인식할 수 있는 공시방법이어야 하는 영역입니다. 판례·실무는 임대차계약의 주된 목적이 주택을 사용·수익하려는 것이 아니고 대항력 있는 임차인으로 보호받아 후순위권리자 기타 채권자보다 우선해 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상 대항력을 부여할 수 없고, 주민등록이 대항력 요건을 충족하는 공시방법이 되려면 임차권을 매개로 하는 점유임을 제3자가 인식할 수 있어야 한다고 보는 본 사례 흐름이 있는 영역입니다. 임차권 양수 + 채권 회수 목적 + 대항력 결합은 \'진정 임대차·대항력 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 임대차 목적 ② 점유·공시 ③ 대항력 ④ 보증금 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 목적 ② 점유 ③ 대항력 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임차권 양수 대항력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 임대차 목적·점유/공시·대항력·보증금 회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임대차 목적</strong> — 주택 사용·수익 목적인지 채권 회수 목적인지 정리.</li>\n<li><strong>② 점유·공시</strong> — 주민등록이 임차권을 매개로 한 점유로 인식될 수 있는지 정리.</li>\n<li><strong>③ 대항력</strong> — 양수 경위·점유 실태로 대항력이 인정되는지 정리.</li>\n<li><strong>④ 보증금 회수</strong> — 경매 배당·반환청구 등 회수 경로 점검.</li>\n<li><strong>⑤ 대응</strong> — 잔여 채권·분쟁조정 등 정리·대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대차의 주된 목적이 주택 사용·수익이 아니라 채권 회수에 있으면 대항력을 부여하기 어렵고, 주민등록도 임차권을 매개로 한 점유임을 제3자가 인식할 수 있어야 공시방법이 되는 영역. 양수 경위·실제 점유 실태를 계약·전입 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 정리 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·분쟁조정 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·점유 정리 (즉시~수일)</strong> — 임차권 양수계약·전입신고·확정일자·점유 경과를 등기부·전입세대확인서로 시간순 정리.</li>\n<li><strong>2단계 — 임대차 목적 확인 (수일 내)</strong> — 양수 경위와 주택 사용·수익 실태, 채권 회수 목적 여부 확인.</li>\n<li><strong>3단계 — 대항력 검토 (분쟁 발생 시)</strong> — 주민등록이 임차권 매개 점유로 인식될 수 있는지, 대항력 인정 여부 검토.</li>\n<li><strong>4단계 — 피해 상담·조정 (필요 시)</strong> — 전세사기피해지원센터 상담, 주임분조위 분쟁조정 신청 검토.</li>\n<li><strong>5단계 — 회수·대응 (병행)</strong> — 잔여 채권·경매 배당·반환청구 등 회수 경로 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임차권 양수 대항력·진정 임대차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 임대차 목적·점유/공시·보증금 회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>임차권 양도양수계약서 (양수 경위·보증금)</strong></li>\n<li><strong>전입세대확인서·주민등록 자료 (대항요건 경과)</strong></li>\n<li><strong>확정일자·임대차계약서 (우선변제권 확인)</strong></li>\n<li><strong>등기부등본·가등기·본등기 자료 (권리 변동)</strong></li>\n<li><strong>실제 점유·사용 실태 자료 (임대차 목적)</strong></li>\n<li><strong>경매·배당 관련 자료 (회수 경로)</strong></li>\n<li><strong>반환청구·잔여 채권 자료 (대응)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대차의 주된 목적이 주택 사용·수익이 아니라 채권 회수에 있다고 보이면 대항력이 부정될 여지가 있고 주민등록도 임차권을 매개로 한 점유임을 제3자가 인식할 수 있어야 공시방법이 되므로, 임차권 양수 경위와 실제 거주·사용 실태를 계약·전입·점유 자료로 구체적으로 정리해두는 것이 핵심입니다. 가등기·본등기·소유권이전 경과도 등기부로 함께 확인해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대차 목적</strong> — 주택 사용·수익 목적인지 채권 회수 목적인지.</li>\n<li><strong>점유·공시</strong> — 주민등록이 임차권 매개 점유로 인식되는지.</li>\n<li><strong>대항력</strong> — 양수 경위·점유 실태로 대항력이 인정되는지.</li>\n<li><strong>우선변제</strong> — 후순위권리자보다 우선 변제받을 수 있는지.</li>\n<li><strong>보증금 회수</strong> — 경매 배당·반환청구로 회수할 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채권 회수 목적 임차권 양수와 대항력',
        summary:
          '대법원 2024다268508(대법원, 2025.08.14 선고) 영역에서 법원은 임대차계약의 주된 목적이 주택을 사용·수익하려는 것이 아니고 대항력 있는 임차인으로 보호받아 후순위권리자 기타 채권자보다 우선해 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상의 대항력을 인정할 수 없고, 주택임대차보호법 제3조 제1항에서 정한 주민등록이 대항력 요건을 충족하는 공시방법이 되려면 임차권을 매개로 하는 점유임을 제3자가 인식할 수 있어야 한다고 보면서, 강제경매로 소유권을 취득한 사람이 임차인과 임차권 양도양수계약을 체결하고 전입신고를 한 사안에서 그 주된 목적이 임대차보증금 상당액을 회수하려는 것으로 보이고 소유자였던 자의 주민등록으로 표상되는 점유가 임차권을 매개로 한 점유임을 제3자가 인식할 수 있는 정도라고 보기 어려운데도 대항력을 취득했다고 본 원심에 법리오해가 있다고 판시했습니다. 임차권 양수 대항력 사안에서도 임대차 목적과 점유·공시를 검토해볼 수 있습니다.',
        takeaway: '임차권 양수 + 채권 회수 목적 + 대항력 결합 시 진정 임대차·대항력 평가 검토 영역 — 양수계약·전입·점유 실태·등기 경과 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '채권 회수 목적으로 임차권을 양수해도 대항력이 있나요?',
        answer:
          '<strong>주된 목적이 채권 회수면 대항력이 부정될 여지가 있는 영역입니다.</strong> 양수 경위·거주 실태를 먼저 정리.',
      },
      {
        question: '전입신고만 하면 대항력이 생기나요?',
        answer:
          '<strong>주민등록이 임차권 매개 점유로 인식될 수 있어야 공시방법이 되는 영역입니다.</strong> 실제 점유·사용 실태를 기록.',
      },
      {
        question: '주택을 실제로 사용하지 않은 점이 문제가 되나요?',
        answer:
          '<strong>주택 사용·수익 목적인지가 대항력 판단의 핵심이 되는 영역입니다.</strong> 거주·사용 자료를 확보.',
      },
      {
        question: '본등기·매매로 집이 넘어가면 어떻게 되나요?',
        answer:
          '<strong>권리 변동 경과와 대항력 인정 여부로 다투는 영역입니다.</strong> 등기부·가등기·본등기 경과를 정리.',
      },
      {
        question: '보증금은 어떻게 회수하나요?',
        answer:
          '<strong>잔여 채권·경매 배당·반환청구로 회수 경로를 검토하는 영역입니다.</strong> 배당·반환청구 자료를 정리.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '대항력·우선변제권 기준', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-priority-standard' },
      { label: '임차권 양수·진정 임대차', href: '/guide/jeonse-fraud/jeonse-fraud-lease-assignment-standard' },
      { label: '확정일자·전입신고 순서', href: '/guide/jeonse-fraud/jeonse-fraud-fixed-date-move-in-order' },
      { label: '전세사기 피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-proxy-fake-landlord-track',
    keyword: '대리계약 가짜 임대인 전세사기',
    questionKeyword: '우선변제권을 갖춘 임차인인데 임대인이 개인파산으로 면책 결정을 받았어요. 파산절차에서 보증금 중 우선변제권 있는 부분조차 배당받지 못했는데, 면책됐으니 임대인에게 보증금을 청구할 수 없다는 말을 들었습니다. 우선변제권이 있는 보증금반환채권도 면책에 걸리는지, 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '임대인 파산 면책 보증금반환·우선변제권 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임대인 파산 면책 보증금 — 5단계 우선변제 점검 | 로앤가이드',
      description:
        '임대인이 파산 면책을 받아 보증금 청구가 막혀 막막하다면 채무자회생법 제566조와 우선변제권·면책 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"주택임대차보호법상 대항요건과 확정일자를 갖춰 우선변제권을 확보한 임차인인데, 보증금을 돌려받기 전에 임대인이 개인파산을 신청해 면책 결정을 받은 상황의 임차인입니다. 임대인의 파산절차에서 저는 보증금 중 우선변제권이 인정되는 부분조차 제대로 배당받지 못한 채 절차가 폐지·종결되었는데, 그 뒤 면책 결정이 확정되자 임대인 측은 \'면책됐으니 더 이상 임대인 개인에게 보증금반환을 청구할 수 없다\'고 주장합니다. 우선변제권이 있는 보증금반환채권만큼은 면책에서 빠지는 게 아닌지, 우선변제권이 인정되는 부분조차 변제받지 못했는데도 임대인을 상대로 한 청구가 막히는 건지, 그렇다면 제 보증금은 어떤 경로로 정리해야 하는지 막막한 상태입니다." 채무자 회생 및 파산에 관한 법률 제566조는 면책을 받은 채무자가 파산절차에 의한 배당을 제외하고 파산채권자에 대한 채무 전부에 관하여 책임을 면한다고 정하고, 그 단서 각 호에 비면책채권을 열거하는 영역입니다. 판례·실무는 같은 법 제415조의 대항요건·확정일자를 갖춘 주택임차인의 보증금반환채권 및 그 중 우선변제권이 인정되는 부분이 위 비면책채권으로 열거되어 있지 않으므로, 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 보증금반환채권 전부에 미치고, 임차인이 우선변제권 부분조차 변제받지 못한 채 파산절차가 폐지되고 면책이 확정된 경우 이후 주택이 환가되면 그 환가대금에 우선변제권을 주장할 수 있을 뿐 채무자를 상대로 보증금반환채권의 이행을 소구할 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 임대인 파산 + 면책 확정 + 우선변제권 결합은 \'면책 효력·우선변제 행사\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 면책 효력 ② 우선변제권 ③ 환가 배당 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 면책 ② 변제권 ③ 환가 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 파산 면책 보증금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 면책 효력·우선변제권·환가 배당·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 면책 효력</strong> — 면책결정이 보증금반환채권 전부에 미치는지 정리.</li>\n<li><strong>② 우선변제권</strong> — 우선변제권 부분이 비면책채권인지 정리.</li>\n<li><strong>③ 환가 배당</strong> — 주택 환가 시 환가대금에 우선변제권을 주장할 수 있는지 정리.</li>\n<li><strong>④ 회수</strong> — 환가 배당·잔여 권리 등 회수 경로 점검.</li>\n<li><strong>⑤ 대응</strong> — 분쟁조정·상담 등 정리·대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 보증금반환채권 전부에 미칠 여지가 있어 채무자 개인에게 이행을 소구하기 어렵고, 다만 주택이 환가되면 환가대금에 우선변제권을 주장할 수 있는 영역. 면책·파산 경과와 우선변제권 자료를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 정리 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·법률구조 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·파산 경과 정리 (즉시~수일)</strong> — 계약서·확정일자·전입 자료와 임대인 파산·면책 결정 경과를 시간순 정리.</li>\n<li><strong>2단계 — 면책 효력 확인 (수일 내)</strong> — 면책결정이 보증금반환채권 전부에 미치는지, 우선변제권 부분 포함 여부 확인.</li>\n<li><strong>3단계 — 우선변제 행사 검토 (환가 시)</strong> — 주택 환가 시 환가대금에 우선변제권을 주장할 수 있는지 검토.</li>\n<li><strong>4단계 — 피해 상담·조정 (필요 시)</strong> — 전세사기피해지원센터 상담, 주임분조위 분쟁조정 신청 검토.</li>\n<li><strong>5단계 — 회수·대응 (병행)</strong> — 환가 배당·잔여 권리 등 회수 경로 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 파산 면책 보증금반환·우선변제권 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 면책 효력·우선변제권·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자 자료 (우선변제권 확인)</strong></li>\n<li><strong>전입세대확인서·주민등록 자료 (대항요건)</strong></li>\n<li><strong>임대인 파산·면책 결정문 (면책 효력)</strong></li>\n<li><strong>파산절차 배당·폐지·종결 자료 (변제 경과)</strong></li>\n<li><strong>등기부등본 (주택 환가·권리 변동)</strong></li>\n<li><strong>경매·환가 배당 자료 (우선변제 행사)</strong></li>\n<li><strong>잔여 채권·반환청구 관련 자료 (회수 경로)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 보증금반환채권 전부에 미칠 여지가 있어 임대인 개인을 상대로 한 이행 소구가 어려울 수 있으므로, 파산·면책 결정문과 배당·폐지 경과를 시간순으로 정리해두는 것이 핵심입니다. 다만 주택이 환가되면 환가대금에 우선변제권을 주장할 수 있으므로 확정일자·대항요건 자료를 함께 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>면책 효력</strong> — 면책이 보증금반환채권 전부에 미치는지.</li>\n<li><strong>우선변제권</strong> — 우선변제권 부분이 면책에서 빠지는지.</li>\n<li><strong>이행 소구</strong> — 채무자 개인에게 보증금반환을 청구할 수 있는지.</li>\n<li><strong>환가 배당</strong> — 주택 환가 시 환가대금에 우선변제권을 주장할 수 있는지.</li>\n<li><strong>보증금 회수</strong> — 환가 배당·잔여 권리로 회수할 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정의 효력과 우선변제권 있는 보증금반환채권',
        summary:
          '대법원 2022다247378(대법원, 2025.06.12 선고) 영역에서 법원은 채무자 회생 및 파산에 관한 법률 제566조가 면책을 받은 채무자는 파산절차에 의한 배당을 제외하고 파산채권자에 대한 채무 전부에 관하여 책임이 면제된다고 하면서 각 호에 비면책채권을 열거하는데, 제415조의 대항요건·확정일자를 갖춘 주택임차인의 보증금반환채권과 그 중 우선변제권이 인정되는 부분이 면책 제외 청구권으로 규정되어 있지 않으므로 제564조에 의한 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 보증금반환채권 전부에 미치고, 임차인이 우선변제권 부분조차 변제받지 못한 상태에서 파산절차가 폐지되고 면책결정이 확정된 이상 이후 주택이 환가되면 그 환가대금에 우선변제권을 주장할 수 있을 뿐 채무자를 상대로 보증금반환채권의 이행을 소구할 수 없다고 판시했습니다. 임대인 파산 면책 사안에서도 면책 효력과 우선변제 행사를 검토해볼 수 있습니다.',
        takeaway: '임대인 파산 + 면책 확정 + 우선변제권 결합 시 면책 효력·우선변제 행사 검토 영역 — 계약서·확정일자·면책 결정문·배당 경과 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임대인이 파산 면책을 받으면 보증금을 못 받나요?',
        answer:
          '<strong>면책결정 효력이 보증금반환채권 전부에 미칠 여지가 있는 영역입니다.</strong> 면책·파산 결정문을 먼저 확인.',
      },
      {
        question: '우선변제권 있는 부분도 면책에 걸리나요?',
        answer:
          '<strong>우선변제권 부분도 비면책채권으로 열거되지 않아 면책 효력이 미칠 여지가 있는 영역입니다.</strong> 확정일자·대항요건을 정리.',
      },
      {
        question: '임대인 개인에게 청구할 수는 없나요?',
        answer:
          '<strong>면책이 확정되면 채무자 개인에게 이행을 소구하기 어려운 영역입니다.</strong> 환가 배당 경로를 함께 검토.',
      },
      {
        question: '주택이 경매로 넘어가면 우선변제를 받나요?',
        answer:
          '<strong>주택이 환가되면 환가대금에 우선변제권을 주장할 수 있는 영역입니다.</strong> 확정일자·배당 자료를 확보.',
      },
      {
        question: '보증금은 어떤 경로로 회수하나요?',
        answer:
          '<strong>환가 배당과 잔여 권리로 회수 경로를 검토하는 영역입니다.</strong> 등기부·배당 자료를 정리.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '임대인 파산·면책 대응', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-bankruptcy-response' },
      { label: '우선변제권·확정일자 기준', href: '/guide/jeonse-fraud/jeonse-fraud-priority-fixed-date-standard' },
      { label: '경매 배당·보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-recovery' },
      { label: '전세사기 피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-auction-distribution-recovery-track',
    keyword: '경매 배당 보증금 회수',
    questionKeyword: '다세대주택 한 호실에 전세로 들어갔는데, 중개사가 같은 건물의 다른 호실에 공동저당이 잡혀 있다는 사실과 그 호실 임차인들의 보증금을 제대로 확인해 설명해주지 않았어요. 경매가 진행되자 소액임차인들이 먼저 배당받아 저는 보증금을 회수하지 못했습니다. 중개사 책임과 배당 회수를 어떤 절차로 정리해야 하는지 막막합니다.',
    ctaKeyword: '공동저당 다세대 경매 배당·중개사 설명의무 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공동저당 다세대 경매 배당 — 5단계 설명의무 가이드 | 로앤가이드',
      description:
        '중개사가 공동저당과 다른 호실 임차 현황을 설명하지 않아 배당을 못 받아 막막하다면 공인중개사법 제30조와 민법 제368조 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 호실이 한 건물에 있는 다세대주택의 한 호실에 전세로 들어간 임차인입니다. 그런데 계약 당시 개업공인중개사가 제가 들어가는 호실의 권리관계만 대략 알려줬을 뿐, 같은 건물의 다른 호실들에 공동저당(공동근저당)이 함께 설정되어 있다는 사실과, 그 호실들에 이미 살고 있는 임차인들의 보증금·임대차 기간이 얼마나 되는지는 제대로 조사·확인해 설명해주지 않았습니다. 중개대상물 확인·설명서에도 건물이 단독주택으로 잘못 표시되거나 실제 권리관계란이 비어 있었어요. 이후 그 건물의 여러 호실이 경매로 넘어가자, 공동저당과 소액보증금 최우선변제권을 보유한 임차인들이 먼저 배당을 받았고 정작 저는 보증금을 회수하지 못했습니다. 공동저당이 잡힌 다른 호실의 선순위 권리와 임차 현황까지 확인·설명할 의무가 있었는지, 그 책임을 어떻게 묻고 배당·회수를 어떤 절차로 정리해야 하는지 막막한 상태입니다." 공인중개사법 제25조는 중개대상물의 권리관계 등을 확인해 설명하고 확인·설명서를 교부할 의무를, 같은 법 제30조는 의무 위반으로 손해를 입힌 경우의 배상책임을 정하며, 민법 제368조는 공동저당 부동산의 경매대가 배당 방식을 정하는 영역입니다. 판례·실무는 다세대주택 중 임대의뢰인 소유 특정 호실의 임대차를 중개하는 개업공인중개사는 그 호실뿐 아니라 공동저당이 설정된 다른 호실의 등기부상 선순위권리를 확인·설명해야 하고, 그 호실에 거주하는 임차인이 있으면 보증금·임대차 시기와 종기 등도 확인·설명해 확인·설명서에 기재·교부해야 하며, 이를 게을리해 손해를 입히면 공인중개사법 제30조에 따른 배상책임을 부담할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 공동저당 다세대 + 미설명 + 경매 배당 결합은 \'중개사 설명의무·배상책임\' 검토가 가능한 트랙입니다. 피해자라면 ① 설명의무 ② 확인·설명서 ③ 배상책임 ④ 배당 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 의무 ② 서면 ③ 배상 ④ 배당 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공동저당 다세대 경매 배당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 설명의무·확인·설명서·배상책임·배당 회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 설명의무</strong> — 공동저당이 설정된 다른 호실의 선순위권리·임차 현황까지 설명했는지 정리.</li>\n<li><strong>② 확인·설명서</strong> — 확인·설명서의 권리관계·실제 권리관계란 기재 내용 정리.</li>\n<li><strong>③ 배상책임</strong> — 의무 위반과 보증금 손해 사이 인과 정리.</li>\n<li><strong>④ 배당 회수</strong> — 공동저당 경매대가 배당·소액 최우선변제 경과 점검.</li>\n<li><strong>⑤ 대응</strong> — 공제·손해배상 청구와 분쟁조정 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다세대주택 중개사는 임차 호실뿐 아니라 공동저당이 설정된 다른 호실의 선순위권리와 거주 임차인의 보증금·기간까지 확인·설명하고 확인·설명서에 기재할 의무가 있을 여지가 있는 영역. 확인·설명서 기재와 공동저당·임차 현황을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 배당·정리 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·분쟁조정 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·서면 정리 (즉시~수일)</strong> — 전세계약서·중개대상물 확인·설명서·중개수수료 자료를 확보하고 기재 내용 정리.</li>\n<li><strong>2단계 — 공동저당·임차 현황 확인 (수일 내)</strong> — 등기부·경매 배당표로 공동저당·다른 호실 임차·소액 최우선변제 경과 확인.</li>\n<li><strong>3단계 — 설명의무 위반 검토 (분쟁 발생 시)</strong> — 중개사의 조사·확인·설명 경과와 확인·설명서 기재의 적정성 검토.</li>\n<li><strong>4단계 — 피해 상담·조정 (필요 시)</strong> — 전세사기피해지원센터 상담, 주임분조위 분쟁조정 신청 검토.</li>\n<li><strong>5단계 — 배상·회수 대응 (병행)</strong> — 중개사·공제 손해배상 청구, 경매 배당·잔여 권리 회수 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동저당 다세대 경매 배당·중개사 설명의무 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 설명의무·확인·설명서·배당 회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서 (계약 내용·보증금)</strong></li>\n<li><strong>중개대상물 확인·설명서 (권리관계·실제 권리관계란)</strong></li>\n<li><strong>등기부등본 (공동저당·근저당·소유관계)</strong></li>\n<li><strong>경매 배당표·배당 결과 자료 (소액·선순위 배당)</strong></li>\n<li><strong>다른 호실 임차 현황·시세 자료 (선순위 보증금)</strong></li>\n<li><strong>중개사 설명·문자·녹취 (설명 경과)</strong></li>\n<li><strong>공인중개사 공제증서·손해 자료 (배상 청구)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공동저당이 설정된 다세대주택은 다른 호실의 선순위권리와 거주 임차인의 보증금·임대차 기간까지 확인·설명하고 확인·설명서에 기재할 의무가 있을 여지가 있으므로, 확인·설명서의 권리관계·실제 권리관계란 기재와 중개사의 설명 경과를 문자·녹취로 정리해두는 것이 핵심입니다. 경매 배당표로 공동저당 경매대가 배당과 소액 최우선변제·본인 미배당 현황을 함께 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>설명의무 범위</strong> — 공동저당 다른 호실의 선순위·임차 현황까지 의무인지.</li>\n<li><strong>확인·설명서</strong> — 권리관계·실제 권리관계란 기재가 충분했는지.</li>\n<li><strong>경매대가 배당</strong> — 공동저당 경매대가 배당이 어떻게 산정되는지.</li>\n<li><strong>인과·과실</strong> — 미설명과 보증금 손해 사이 인과·과실 정도.</li>\n<li><strong>배상·회수</strong> — 공제·손해배상과 경매 배당 회수 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동저당 다세대 중개사의 선순위 확인·설명의무와 배상책임',
        summary:
          '대법원 2024다305087(대법원, 2025.12.04 선고) 영역에서 법원은 개업공인중개사는 중개가 완성되기 전에 중개대상물의 권리관계 등을 확인해 중개의뢰인에게 성실·정확하게 설명하고 근거자료를 제시해야 하며 확인·설명서에 기재해 교부해야 하고, 공동저당에 관한 민법 제368조는 공동근저당의 경우에도 적용되어 각 부동산의 경매대가는 매각대금에서 선순위 임대차보증금·소액보증금 등을 공제해 산정되므로, 다세대주택 중 특정 호실의 임대차를 중개하는 중개사는 그 호실뿐 아니라 공동저당이 설정된 다른 호실의 선순위권리를 확인·설명하고 그 호실에 임차인이 있으면 보증금·임대차 시기와 종기 등도 확인·설명해 확인·설명서에 기재·교부해야 하며 이를 게을리해 손해를 입히면 공인중개사법 제30조에 따른 배상책임을 부담할 수 있다고 판시했습니다. 공동저당 다세대 경매 배당 사안에서도 중개사의 설명의무와 배상책임을 검토해볼 수 있습니다.',
        takeaway: '공동저당 다세대 + 미설명 + 경매 배당 결합 시 중개사 설명의무·배상책임 검토 영역 — 계약서·확인·설명서·배당표·공제증서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사가 다른 호실의 공동저당까지 설명할 의무가 있나요?',
        answer:
          '<strong>공동저당이 설정된 다른 호실의 선순위권리·임차 현황 설명 의무가 있을 여지가 있는 영역입니다.</strong> 확인·설명서 기재를 먼저 점검.',
      },
      {
        question: '확인·설명서에 단독주택으로 잘못 적혔으면 어떻게 되나요?',
        answer:
          '<strong>권리관계·실제 권리관계란 기재의 적정성이 쟁점이 되는 영역입니다.</strong> 확인·설명서 원본을 확보.',
      },
      {
        question: '공동저당 경매대가 배당은 어떻게 산정되나요?',
        answer:
          '<strong>매각대금에서 선순위·소액보증금 등을 공제해 산정되는 영역입니다.</strong> 경매 배당표로 배당 경과를 확인.',
      },
      {
        question: '중개사에게 손해배상을 청구할 수 있나요?',
        answer:
          '<strong>의무 위반과 손해 인과가 인정되면 배상책임을 물을 여지가 있는 영역입니다.</strong> 공제증서·손해 자료를 정리.',
      },
      {
        question: '보증금은 어떻게 회수하나요?',
        answer:
          '<strong>경매 배당과 함께 중개사 배상으로 회수를 검토하는 영역입니다.</strong> 배당표·미배당 내역을 확보.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '공동저당·경매 배당 기준', href: '/guide/jeonse-fraud/jeonse-fraud-joint-mortgage-distribution-standard' },
      { label: '중개사 설명의무·배상책임', href: '/guide/jeonse-fraud/jeonse-fraud-broker-explanation-liability' },
      { label: '소액 최우선변제 기준', href: '/guide/jeonse-fraud/jeonse-fraud-minimum-priority-standard' },
      { label: '전세사기 피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },
];
