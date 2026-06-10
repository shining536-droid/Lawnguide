import { SpokePage } from '../spoke-pages';

// batch93 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-10)

export const spokesBatch93AssaultDuiJeonseFraud: SpokePage[] = [
{
    domain: 'assault',
    slug: 'assault-parking-space-quarrel-track',
    keyword: '주차장 시비 상해',
    questionKeyword: '주차 자리·이중주차 문제로 상대와 말다툼이 붙었는데, 감정이 격해진 상대가 저를 밀치고 때려 병원에서 상해진단서까지 받았어요. 그런데 상대는 \'밀친 적 없고 다친 것도 원래 있던 통증 아니냐\'며 진단서의 신빙성까지 따지고 듭니다. 주차장 시비에서 생긴 상해를 어디부터 정리해 고소를 준비해야 하는지 막막합니다.',
    ctaKeyword: '주차장 시비 상해 진단서·상해 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '주차장 시비 상해 — 5단계 진단서·상해 점검 | 로앤가이드',
      description:
        '주차 시비로 맞아 진단서를 받았는데 상대가 진단서 신빙성을 따진다면 형법 제257조 상해와 상해진단서 증명력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트·상가·노상 주차장에서 주차 자리, 이중주차, 차 빼달라는 요구를 둘러싸고 상대와 언쟁이 붙었는데, 감정이 격해진 상대가 저를 손으로 밀치거나 멱살을 잡고 때려 다친 피해자입니다. 통증이 가시지 않아 병원에서 진료를 받고 상해진단서까지 발급받았는데, 정작 상대는 \'밀친 적도 없고 설령 부딪쳤어도 그 정도로 다칠 리 없다, 진단서에 적힌 통증은 원래 있던 것 아니냐\'며 진단서의 신빙성 자체를 따지고 듭니다. 주관적인 통증 호소를 바탕으로 발급된 진단서만으로 상해가 인정되는지, 폭행에 그치는지 상해까지 인정되는지, 어디부터 신고·고소를 준비해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를, 같은 법 제257조 제1항은 사람의 신체를 상해한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 상해진단서가 피해자의 진술과 함께 유력한 증거가 될 수 있지만, 주로 피해자의 주관적인 통증 호소 등에 의존하여 의학적 가능성만으로 발급된 때에는 진단일자와 상해 발생 시점의 근접성, 진단서 발급 경위, 상해 부위·정도와 주장 원인의 일치 여부, 진료 시점·동기·경과 등을 면밀히 살펴 그 증명력을 신중하게 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 주차장 시비 + 밀침·구타 + 진단서 결합은 \'상해진단서 증명력·상해 정도 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 진단서 증명력 ② 상해 정도 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단서 ② 상해 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차장 시비 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단서 증명력·상해 정도·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단서 증명력</strong> — 진단일자와 상해 시점의 근접성, 발급 경위, 부위·정도와 원인의 일치 정리.</li>\n<li><strong>② 상해 정도</strong> — 멱살·구타로 생긴 부상의 부위·치유기간과 일상 지장 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 어디까지 다툴지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주관적 통증 호소에 주로 의존해 발급된 상해진단서는 진단 시점의 근접성·발급 경위·진료 경과까지 살펴 증명력을 신중히 판단하는 영역이라, 사건 직후 빠른 진료와 부위·경위가 일치하는 기록을 남기는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진료·영상 확보 (즉시~당일)</strong> — 사건 직후 병원 진료·상해진단서, 주차장 CCTV·블랙박스·휴대폰 영상과 부상 사진 확보.</li>\n<li><strong>2단계 — 진단서·상해 정리 (수일 내)</strong> — 진단일자·발급 경위와 부위·정도가 시비 경위와 일치하는지 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차장 시비 상해 진단서·상해 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단서 증명력·상해 정도·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (진단일자·부위·치유기간)</strong></li>\n<li><strong>주차장 CCTV·블랙박스 영상 (시비·구타 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (시비·폭언)</strong></li>\n<li><strong>다친 부위·차량 손상 사진 (시간정보 포함)</strong></li>\n<li><strong>시비·운전 경위 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>입주민·주차요원·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상해진단서가 주로 주관적 통증 호소에 의존해 발급된 경우 증명력을 신중하게 판단하므로, 사건 직후 가능한 빨리 진료를 받아 진단일자를 상해 시점에 근접시키고 부위·정도가 시비 경위와 일치하도록 기록해두는 것이 핵심입니다. 주차장 CCTV·블랙박스는 보관 기간이 짧을 수 있어 관리실·차주에게 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진단서 증명력</strong> — 주관적 통증에 의존한 진단서의 신빙성이 인정되는지.</li>\n<li><strong>상해 인과</strong> — 진단서 부상이 밀침·구타로 생긴 것인지.</li>\n<li><strong>폭행·상해 구분</strong> — 폭행에 그치는지 상해까지 인정되는지.</li>\n<li><strong>쌍방 여부</strong> — 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 주관적 통증에 의존한 상해진단서의 증명력 판단기준',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 형사사건에서 상해진단서는 피해자의 진술과 함께 유력한 증거가 될 수 있지만 상해 사실의 존재 및 인과관계는 합리적 의심이 없는 정도로 증명되어야 하므로, 상해진단서가 주로 피해자의 주관적인 통증 호소 등에 의존하여 의학적 가능성만으로 발급된 때에는 진단일자·작성일자가 상해 발생 시점과 근접한지, 발급 경위에 신빙성을 의심할 사정이 없는지, 기재된 부위·정도가 주장하는 원인·경위와 일치하는지, 진료 시점·동기·경위와 그 후 경과를 면밀히 살펴 논리와 경험법칙에 따라 증명력을 판단해야 한다고 판시했습니다. 주차장 시비 상해 사안에서도 진단서의 증명력과 상해 정도를 함께 검토해볼 수 있습니다.',
        takeaway: '주차장 시비 + 밀침·구타 + 진단서 결합 시 상해진단서 증명력·상해 정도 검토 영역 — 사건 직후 진료·CCTV·부상 사진·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '통증만 호소해 받은 진단서도 증거가 되나요?',
        answer:
          '<strong>유력한 증거가 될 수 있지만 발급 경위·진료 경과까지 살펴 증명력을 신중히 보는 영역입니다.</strong> 사건 직후 진료 기록을 남겨두세요.',
      },
      {
        question: '진단을 며칠 늦게 받으면 불리한가요?',
        answer:
          '<strong>진단일자가 상해 시점과 근접할수록 증명력 판단에 유리해지는 영역입니다.</strong> 가능한 빨리 진료받는 것을 검토하세요.',
      },
      {
        question: '원래 있던 통증이라고 우기면 어떻게 하나요?',
        answer:
          '<strong>기왕증과 새 원인의 구분이 쟁점이 되는 영역입니다.</strong> 부위·경위가 일치하는 진료기록과 영상을 함께 확보하세요.',
      },
      {
        question: '주차장 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>시비·밀침·구타 흐름을 보여줄 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧아 관리실에 보존 요청을 먼저 하세요.',
      },
      {
        question: '폭행으로만 처리될 수도 있나요?',
        answer:
          '<strong>상해 인과·정도에 따라 폭행에 그칠지 상해까지 다툴지 갈리는 영역입니다.</strong> 부상의 부위·치유기간 자료를 정리하세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '상해진단서 증명력 기준', href: '/guide/assault/assault-injury-certificate-evidence' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '블랙박스·CCTV 확보', href: '/guide/assault/assault-blackbox-cctv-evidence' },
      { label: '치료비·위자료 손해배상', href: '/guide/assault/assault-medical-damages-claim' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-noise-complaint-confrontation-track',
    keyword: '층간소음 항의 폭행',
    questionKeyword: '윗집 층간소음에 항의하러 올라갔다가 상대가 현관에서 물건을 집어 들고 위협하며 저를 때려 다쳤어요. 상대는 \'물건은 그냥 손에 있었을 뿐 휘두른 적 없다\'며 위험한 물건 휴대가 아니라고 우깁니다. 층간소음 항의 과정에서 생긴 폭행과 흉기 위협을 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '층간소음 항의 폭행 위험한물건·휴대 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '층간소음 항의 폭행 — 5단계 흉기 위협 점검 | 로앤가이드',
      description:
        '층간소음 항의 중 물건을 들고 위협당하며 맞았는데 휘두른 적 없다고 우긴다면 형법 제258조의2 특수상해와 위험한 물건 휴대 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"윗집·아랫집 층간소음 문제로 항의하러 갔다가, 또는 항의를 받던 중에 감정이 격해진 상대가 현관·복도에서 손에 잡히는 물건을 집어 들고 위협하면서 저를 밀치거나 때려 다친 피해자입니다. 상대는 \'물건은 그냥 손에 들려 있었을 뿐 휘두르지도 던지지도 않았으니 흉기 휴대는 아니다\'라고 발뺌하는데, 위험한 물건을 실제로 휘둘러야만 특수상해·특수협박이 되는 건지, 그냥 손에 쥐고 위협만 해도 \'휴대\'로 평가되는지, 상해와 협박이 어떻게 나뉘는지 헷갈립니다. 층간소음이라는 감정적 갈등 속에서 벌어진 일이라 더 막막한데, 어디부터 신고·고소를 정리해야 하는지 모르겠는 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제258조의2 제1항은 위험한 물건을 휴대하여 상해한 특수상해를, 제283조 제1항·제284조는 협박·특수협박을 처벌하도록 규정하는 영역입니다. 판례·실무는 위험한 물건을 \'휴대하여\'란 범행 현장에서 사용하려는 의도 아래 소지하거나 몸에 지니는 경우를 의미하고, 범행 현장에 있는 위험한 물건을 사실상 지배하면서 언제든 곧바로 사용할 수 있는 상태에 두면 충분하며, 실제로 범행에 사용하였을 것까지 요구되지 않는다고 보는 본 사례 흐름이 있는 영역입니다. 층간소음 항의 + 물건 위협 + 구타 결합은 \'위험한 물건 휴대·상해·협박 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 휴대 평가 ② 상해 정도 ③ 협박 평가 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 휴대 ② 상해 ③ 협박 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 층간소음 항의 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴대 평가·상해 정도·협박 평가·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴대 평가</strong> — 물건을 사용 의도로 지배·소지했는지, 실제 사용 여부와 무관한지 정리.</li>\n<li><strong>② 상해 정도</strong> — 구타·밀침으로 생긴 부상의 부위·치유기간 정리.</li>\n<li><strong>③ 협박 평가</strong> — 물건을 든 위협이 해악 고지로 협박·특수협박에 해당하는지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위험한 물건을 손에 쥐고 위협한 행위는 실제로 휘두르지 않았더라도 사용 의도 아래 지배·소지했다면 \'휴대\'로 평가될 여지가 있는 영역이라, 물건의 종류·휴대 경위와 위협 정황을 영상·진단서로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 현관·복도 CCTV·휴대폰 영상, 병원 진료·상해진단서와 부상·물건 사진 확보.</li>\n<li><strong>2단계 — 휴대·상해·협박 정리 (수일 내)</strong> — 물건 종류·휴대 경위, 위협 발언, 구타로 생긴 부상 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 항의·시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">층간소음 항의 폭행 위험한물건·휴대 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 휴대 평가·상해 정도·협박 평가 갈래입니다.</strong></p>\n<ul>\n<li><strong>현관·복도 CCTV 영상 (물건 휴대·위협·구타 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (위협 발언·폭언)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>위협에 쓰인 물건 사진·특정 자료 (종류·크기)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>관리실·이웃·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위험한 물건을 실제로 휘두르지 않았더라도 사용 의도 아래 사실상 지배하며 곧바로 사용할 수 있는 상태에 두면 \'휴대\'로 평가될 여지가 있으므로, 물건의 종류·크기와 손에 쥔 경위·위협 발언을 영상·사진으로 구체적으로 특정해두는 것이 핵심입니다. 현관·복도 CCTV는 보관 기간이 짧을 수 있어 관리실에 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위험한 물건 휴대</strong> — 휘두르지 않고 손에 쥐고 위협만 해도 휴대로 보는지.</li>\n<li><strong>사용 의도</strong> — 범행 현장에서 사용하려는 의도가 있었는지.</li>\n<li><strong>상해·협박 구분</strong> — 상해와 협박이 어떻게 나뉘는지.</li>\n<li><strong>쌍방 여부</strong> — 항의·시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위험한 물건을 \'휴대하여\'의 의미와 실제 사용 요부',
        summary:
          '대법원 2023도18812(대법원, 2024.06.13 선고) 영역에서 법원은 특수상해죄·특수협박죄의 구성요건인 위험한 물건을 \'휴대하여\'는 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지하거나 몸에 지니는 경우를 의미하고, 사용 의도가 있었는지는 범행 동기·휴대 경위·사용 방법·인적 관계·전후 정황을 합리적으로 고려해 판단하며, 사용 의도 아래 소지하거나 몸에 지닌 이상 실제로 범행에 사용하였을 것까지 요구되지 않고, 범행 현장의 위험한 물건을 사실상 지배하면서 언제든 곧바로 사용할 수 있는 상태에 두면 충분하여 현실적으로 손에 쥐는 등 물리적으로 부착되어 있어야 하는 것은 아니라고 판시했습니다. 층간소음 항의 폭행 사안에서도 물건을 든 위협이 \'휴대\'에 해당하는지를 검토해볼 수 있습니다.',
        takeaway: '층간소음 항의 + 물건 위협 + 구타 결합 시 위험한 물건 휴대·상해·협박 평가 검토 영역 — CCTV·진단서·물건 특정·위협 발언 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '물건을 휘두르지 않고 들고만 있어도 흉기인가요?',
        answer:
          '<strong>사용 의도 아래 지배·소지하면 휴대로 평가될 여지가 있는 영역입니다.</strong> 물건 종류·휴대 경위를 영상으로 특정하세요.',
      },
      {
        question: '실제로 맞지 않고 위협만 받았으면 어떻게 다투나요?',
        answer:
          '<strong>해악 고지가 있으면 협박·특수협박으로 다툴 여지가 있는 영역입니다.</strong> 위협 발언과 정황을 녹취·영상으로 확보하세요.',
      },
      {
        question: '상해와 협박을 같이 다툴 수 있나요?',
        answer:
          '<strong>구타로 인한 상해와 물건을 든 위협은 별도로 검토되는 영역입니다.</strong> 부상 기록과 위협 정황을 나눠 정리하세요.',
      },
      {
        question: '층간소음으로 시작했는데 쌍방으로 몰리면요?',
        answer:
          '<strong>먼저 가해한 쪽과 행위 정도를 영상으로 구분해 다투는 영역입니다.</strong> 관리실·이웃 목격자 진술을 확보하세요.',
      },
      {
        question: '어떤 물건이 위험한 물건으로 평가되나요?',
        answer:
          '<strong>물건의 종류·크기와 사용 방법·정황으로 판단되는 영역입니다.</strong> 위협에 쓰인 물건을 사진으로 특정해두세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '특수상해·흉기 휴대 기준', href: '/guide/assault/assault-special-injury-weapon-standard' },
      { label: '협박·특수협박 대응', href: '/guide/assault/assault-intimidation-response' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: 'CCTV·영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-road-rage-track',
    keyword: '운전 중 보복 폭행',
    questionKeyword: '운전 중 끼어들기 시비로 상대 차가 제 앞을 막아서더니 내려서 차 문을 두드리고 저를 끌어내려 때렸어요. 신고를 받고 온 경찰을 밀치기까지 했습니다. 보복 운전·폭행에 공무집행방해까지 얽힌 이 상황을 어디부터 신고·정리해야 하는지 막막합니다.',
    ctaKeyword: '운전 중 보복 폭행 신고·절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '운전 중 보복 폭행 — 5단계 신고·절차 가이드 | 로앤가이드',
      description:
        '운전 중 보복 폭행에 공무집행방해까지 얽혀 막막하다면 형법 제260조 폭행·제136조 공무집행방해와 신고 절차 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"운전 중 끼어들기·경적·진로변경 시비로 상대 차량이 제 앞을 가로막거나 급정거해 진로를 방해하더니, 차에서 내려 제 차 문을 두드리고 저를 끌어내려 때리는 보복 운전·폭행을 당한 피해자입니다. 112 신고를 받고 출동한 경찰관이 상황을 정리하려는데, 흥분한 상대가 경찰관까지 밀치거나 걷어차는 바람에 폭행·상해에 공무집행방해까지 여러 갈래가 얽힌 상태입니다. 도로 한복판이라 블랙박스·CCTV는 있는데 어디부터 신고·고소를 정리해야 하는지, 보복 운전과 폭행을 어떻게 구분해 진행하는지, 경찰을 밀친 부분은 별개로 처리되는지 헷갈려 막막합니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를, 제136조 제1항은 직무를 집행하는 공무원에 대한 폭행·협박을 처벌하도록 규정하는 영역입니다. 판례·실무는 공무집행방해죄의 \'폭행\'은 사람에 대한 유형력 행사로 족하고 반드시 신체에 대한 것임을 요하지 않으며 추상적 위험범으로 직무집행 방해라는 결과 발생을 요하지 않고, \'직무를 집행하는\'은 112 신고처리·순찰근무처럼 직무수행을 위해 근무 중인 상태를 포괄한다고 보는 본 사례 흐름이 있는 영역입니다. 보복 운전 + 차에서 내려 폭행 + 출동 경찰 밀침 결합은 \'폭행·상해·공무집행방해 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 보복 운전 ② 폭행·상해 ③ 공무집행방해 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 보복 ② 폭행 ③ 공무 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 운전 중 보복 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보복 운전·폭행 상해·공무집행방해·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보복 운전</strong> — 진로 방해·급정거 등 위협 운전 정황과 영상 정리.</li>\n<li><strong>② 폭행·상해</strong> — 차에서 끌어내려 때린 행위와 부상의 부위·치유기간 정리.</li>\n<li><strong>③ 공무집행방해</strong> — 출동 경찰을 밀친 행위가 직무 중 유형력 행사인지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 출동 경찰을 밀친 행위는 신체에 대한 것이 아니어도 유형력 행사면 공무집행방해의 폭행으로 평가될 여지가 있고, 112 신고처리 중인 상태도 직무집행에 포함되는 영역. 보복 운전·폭행·공무 부분을 블랙박스·영상으로 시간순 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 블랙박스·도로 CCTV·휴대폰 영상, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 보복·폭행·공무 정리 (수일 내)</strong> — 진로 방해, 끌어내려 때린 정황, 출동 경찰 밀친 부분을 시간순으로 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 보복 운전 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">운전 중 보복 폭행 신고·절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 보복 운전·폭행 상해·공무집행방해 갈래입니다.</strong></p>\n<ul>\n<li><strong>차량 블랙박스 영상 (보복 운전·진로 방해)</strong></li>\n<li><strong>도로 CCTV·휴대폰 영상 (끌어내림·구타 정황)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위·차량 손상 사진 (시간정보 포함)</strong></li>\n<li><strong>112 신고·출동 기록·현장 경위 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>동승자·출동 경찰·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보복 운전·폭행·공무집행방해가 한 사건에 얽힐 수 있으므로 블랙박스·CCTV 영상을 진로 방해 → 끌어내림·구타 → 경찰 밀침 순서로 시간순 정리해두는 것이 핵심입니다. 블랙박스 영상은 덮어쓰기로 사라지기 쉬워 해당 구간을 즉시 별도 저장하고, 출동 경찰의 신고 처리 기록도 함께 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보복 운전</strong> — 진로 방해·급정거가 위협 운전으로 평가되는지.</li>\n<li><strong>유형력 행사</strong> — 끌어내려 때린 행위가 폭행·상해인지.</li>\n<li><strong>공무집행방해</strong> — 출동 경찰을 밀친 것이 직무 중 폭행인지.</li>\n<li><strong>쌍방 여부</strong> — 운전 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공무집행방해죄의 \'폭행\'과 \'직무를 집행하는\'의 의미',
        summary:
          '대법원 2017도21537(대법원, 2018.03.29 선고) 영역에서 법원은 공무집행방해죄의 폭행은 사람에 대한 유형력의 행사로 족하고 반드시 신체에 대한 것임을 요하지 않으며 추상적 위험범으로서 구체적으로 직무집행 방해라는 결과 발생을 요하지 않고, \'직무를 집행하는\'은 직무수행에 직접 필요한 행위를 현실적으로 행하는 때만이 아니라 직무수행을 위해 근무 중인 상태를 포괄한다고 보면서, 주차문제로 언쟁 중 112 신고로 출동한 경찰관의 가슴을 밀친 행위가 112 신고처리·순찰근무 중인 공무원에 대한 유형력 행사로서 공무집행방해죄의 폭행에 해당한다고 판시했습니다. 운전 중 보복 폭행 후 출동 경찰을 밀친 사안에서도 같은 기준을 검토해볼 수 있습니다.',
        takeaway: '보복 운전 + 차에서 내려 폭행 + 출동 경찰 밀침 결합 시 폭행·상해·공무집행방해 평가 검토 영역 — 블랙박스·CCTV·진단서·신고 기록 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보복 운전과 폭행은 따로 다투나요?',
        answer:
          '<strong>진로 방해 등 위협 운전과 차에서 내려 때린 폭행은 별도로 검토되는 영역입니다.</strong> 블랙박스로 두 부분을 나눠 정리하세요.',
      },
      {
        question: '출동 경찰을 밀친 것도 처리되나요?',
        answer:
          '<strong>신체에 대한 것이 아니어도 유형력 행사면 공무집행방해의 폭행으로 평가될 여지가 있는 영역입니다.</strong> 출동·신고 기록을 확보하세요.',
      },
      {
        question: '경찰이 신고만 받고 있던 상태도 직무집행인가요?',
        answer:
          '<strong>112 신고처리·순찰근무 중인 상태도 직무집행에 포함되는 영역입니다.</strong> 현장 경위와 시각을 메모로 남기세요.',
      },
      {
        question: '블랙박스는 어떻게 보존하나요?',
        answer:
          '<strong>덮어쓰기로 사라지기 쉬워 해당 구간을 즉시 별도 저장하는 것이 중요한 영역입니다.</strong> 원본 파일을 그대로 보관하세요.',
      },
      {
        question: '운전 시비라 쌍방으로 몰리면 어떻게 하나요?',
        answer:
          '<strong>먼저 가해한 쪽과 행위 정도를 영상으로 구분해 다투는 영역입니다.</strong> 동승자·목격자 진술을 확보하세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '보복 운전 대응 절차', href: '/guide/assault/assault-road-rage-response' },
      { label: '공무집행방해 성립 기준', href: '/guide/assault/assault-obstruction-of-duty-standard' },
      { label: '블랙박스·CCTV 확보', href: '/guide/assault/assault-blackbox-cctv-evidence' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-workplace-supervisor-falsely-accused-defense',
    keyword: '직장 상사 폭행 무고',
    questionKeyword: '직장 회식 자리에서 상사와 다툼이 있었는데, 며칠 뒤 상사가 제가 유리컵 조각으로 자기 팔을 찔러 상해를 입혔다며 진단서를 들고 고소했어요. 저는 그런 적이 없고 진단서 부위도 제 행동과 맞지 않습니다. 사실과 다르게 신고되어 혐의를 받고 있다면 어떻게 방어해야 하는지 막막합니다.',
    ctaKeyword: '직장 상사 폭행 무고 방어 순서 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '직장 상사 폭행 무고 — 5단계 방어 점검 | 로앤가이드',
      description:
        '회식 자리 다툼 뒤 상사가 진단서로 상해 고소를 해 막막하다면 형법 제257조 상해와 상해진단서 증명력·합리적 의심 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장 회식이나 근무 중 상사와 말다툼·실랑이가 있었는데, 며칠 지나 상사가 \'네가 유리컵 조각이나 물건으로 내 팔을 찔러 상해를 입혔다\'며 상해진단서를 들고 고소·신고해 입건된 피고인입니다. 저는 상사를 찌르거나 흉기를 사용한 적이 없고, 진단서에 적힌 상해 부위·정도도 그날 제 행동이나 다툼 경위와 들어맞지 않습니다. 사실과 다르게 신고되었는데도 상사의 진술과 상해진단서만으로 제가 가해자로 몰리는 건 아닌지, 진단서가 곧바로 제 행위로 생긴 상해를 증명하는 것은 아닌지, 혐의를 받고 있다면 어디부터 방어를 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 형사소송법 제308조는 증거의 증명력을 법관의 자유판단에 맡기는 자유심증주의를 정하는 영역입니다. 판례·실무는 상해진단서는 피해자 진술을 토대로 작성된 것이라 거기 기재된 상해가 곧 피고인의 범죄행위로 생긴 것이라는 사실을 직접 증명하기에는 부족하고, 유죄 인정을 위한 심증은 합리적 의심이 없을 정도여야 하되 그 합리적 의심은 막연한 의심이 아니라 요증사실과 양립할 수 없는 사실의 개연성에 대한 합리성 있는 의문을 의미한다고 보는 본 사례 흐름이 있는 영역입니다. 회식 다툼 + 상사 고소 + 상해진단서 결합은 \'상해진단서 증명력·합리적 의심 평가\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 진단서 증명력 ② 행위 일치 ③ 진술 신빙성 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 진단서 ② 행위 ③ 진술 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 상사 폭행 무고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단서 증명력·행위 일치·진술 신빙성·형사 절차·방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단서 증명력</strong> — 진단서가 곧바로 내 행위로 생긴 상해를 증명하는지 정리.</li>\n<li><strong>② 행위 일치</strong> — 진단서 부위·정도가 내 행동·다툼 경위와 맞는지 정리.</li>\n<li><strong>③ 진술 신빙성</strong> — 상사 진술이 일관·합리적인지, 합리적 의심 여지가 있는지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 고소 접수·조사·대질·검찰 처분 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 회식 영상·목격자·다툼 경위 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상해진단서는 피해자 진술을 토대로 작성되어 곧바로 피고인의 행위로 생긴 상해를 직접 증명하기에 부족할 수 있고, 유죄 심증은 합리적 의심이 없을 정도를 요하는 영역. 진단서 부위·정도가 행동·경위와 맞지 않는 점과 진술의 불일치를 자료로 정리해두는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건·자료 확인 (즉시~당일)</strong> — 고소장·진단서 사본, 회식 CCTV·휴대폰 영상, 메신저·통화 기록 확보.</li>\n<li><strong>2단계 — 행위·진단서 대조 (수일 내)</strong> — 진단서 부위·정도가 내 행동·다툼 경위와 일치하는지 대조 정리.</li>\n<li><strong>3단계 — 진술·신빙성 검토 (조사 전)</strong> — 상사 진술의 일관성·합리적 의심 여지, 시간상 근접성 점검.</li>\n<li><strong>4단계 — 조사·대질 대응 (수사기관 일정)</strong> — 진술·영상·목격자 정리 후 조사 출석, 방어권·국선변호인 활용.</li>\n<li><strong>5단계 — 처분 대응 (검찰 처분 일정)</strong> — 혐의없음·불기소 의견서나 정상 자료 제출 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 무고 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 상사 폭행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단서 증명력·행위 일치·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>고소장·상해진단서 사본 (부위·정도·발급 시점)</strong></li>\n<li><strong>회식·근무지 CCTV·휴대폰 영상 (다툼 경위)</strong></li>\n<li><strong>메신저·통화·문자 기록 (전후 정황)</strong></li>\n<li><strong>다툼 경위·내 행동 메모 (육하원칙)</strong></li>\n<li><strong>상사 진술 불일치·기왕증 단서 자료 (합리적 의심)</strong></li>\n<li><strong>동석자·목격자 진술·연락처 (행위 부인 입증)</strong></li>\n<li><strong>반성·정상·관계 회복 등 정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상해진단서는 피해자 진술을 토대로 작성된 것이라 거기 기재된 상해가 곧 피고인의 행위로 생긴 것이라는 사실을 직접 증명하기에는 부족할 수 있으므로, 진단서의 상해 부위·정도가 그날 내 행동·다툼 경위와 어긋나는 지점을 영상·진술로 구체적으로 짚어두는 것이 핵심입니다. 회식 CCTV·메신저 기록은 시간이 지나면 삭제되기 쉬워 즉시 보존 요청·캡처를 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진단서 증명력</strong> — 진단서가 곧바로 내 행위로 생긴 상해를 증명하는지.</li>\n<li><strong>행위 일치</strong> — 진단서 부위·정도가 내 행동·경위와 맞는지.</li>\n<li><strong>진술 신빙성</strong> — 상사 진술에 합리적 의심 여지가 있는지.</li>\n<li><strong>기왕증·제3원인</strong> — 상해가 다른 원인으로 생겼을 가능성이 있는지.</li>\n<li><strong>방어권</strong> — 조사·대질에서 방어권이 충분히 보장되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서의 증명력과 합리적 의심의 의미',
        summary:
          '대법원 2010도12728(대법원, 2011.01.27 선고) 영역에서 법원은 상해죄 피해자가 제출하는 상해진단서는 일반적으로 의사가 피해자의 진술을 토대로 관찰·판단한 부위와 정도를 기재한 것으로서 거기 기재된 상해가 곧 피고인의 범죄행위로 발생한 것이라는 사실을 직접 증명하는 증거가 되기에는 부족하다고 보면서, 유죄 인정을 위한 심증 형성은 합리적 의심이 없을 정도여야 하나 합리적 의심이란 모든 의문·불신이 아니라 논리와 경험칙에 기하여 요증사실과 양립할 수 없는 사실의 개연성에 대한 합리성 있는 의문을 의미하고 단순히 관념적·추상적 가능성에 기초한 의심은 포함되지 않으며, 다만 진단 시점이 상해 발생과 근접하고 발급 경위에 의심할 사정이 없고 부위·정도가 주장 원인과 일치하면 유력한 증거가 될 수 있다고 판시했습니다. 직장 상사 폭행 무고 방어 사안에서도 진단서 증명력과 합리적 의심을 검토해볼 수 있습니다.',
        takeaway: '회식 다툼 + 상사 고소 + 상해진단서 결합 시 상해진단서 증명력·합리적 의심 평가 검토 영역 — 진단서 대조·영상·진술 불일치·정상 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상사 진술과 진단서만으로 가해자로 몰리나요?',
        answer:
          '<strong>진단서는 곧바로 내 행위로 생긴 상해를 직접 증명하기에 부족할 수 있는 영역입니다.</strong> 혐의를 받고 있다면 부위·경위 불일치부터 정리하세요.',
      },
      {
        question: '진단서 부위가 제 행동과 안 맞으면 도움이 되나요?',
        answer:
          '<strong>부위·정도가 주장 원인·경위와 어긋나면 증명력 판단의 다툼 지점이 되는 영역입니다.</strong> 행동·경위를 영상·진술로 대조하세요.',
      },
      {
        question: '합리적 의심만 있으면 무죄가 되나요?',
        answer:
          '<strong>막연한 의심이 아니라 요증사실과 양립 불가한 개연성에 대한 합리성 있는 의문이어야 하는 영역입니다.</strong> 구체적 근거 자료를 모으세요.',
      },
      {
        question: '회식 CCTV는 꼭 필요한가요?',
        answer:
          '<strong>다툼 경위와 내 행동을 보여줄 핵심 방어 자료가 되는 영역입니다.</strong> 삭제되기 쉬워 즉시 보존 요청·캡처를 해두세요.',
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
    slug: 'dui-engine-on-not-moving-track',
    keyword: '시동만 켠 음주운전',
    questionKeyword: '술을 마신 뒤 차 안에서 잠깐 시동만 켜고 있었는데 음주측정을 요구받았고, 음주감지기에 반응이 나왔다는 이유로 측정거부로 입건됐어요. 저는 운전할 생각이 없었고 술도 많이 마시지 않았습니다. 혐의를 받고 있다면 측정 요구가 정당했는지, 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '시동만 켠 음주운전 측정거부·상당한 이유 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '시동만 켠 음주운전 — 5단계 측정거부 점검 | 로앤가이드',
      description:
        '시동만 켜고 있다 음주감지기 반응으로 측정거부 입건돼 막막하다면 도로교통법 제44조와 상당한 이유·측정거부 성립 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 대리운전을 기다리거나 차 안에서 쉬려고 시동만 켜 둔 상태였는데, 단속 경찰이 음주측정을 요구했고 호흡측정 전 음주감지기에 반응이 나왔다는 이유로 측정에 응하지 않았다며 음주측정거부로 입건된 운전자입니다. 저는 실제로 운전할 의사가 없었고 술도 많이 마시지 않아 혈중알코올농도가 처벌 기준에 이르지 않을 수 있다고 생각하는데, 감지기 반응만으로 곧바로 측정거부가 성립하는지, 측정 요구 자체가 정당했는지 헷갈립니다. 시동만 켰을 뿐 움직이지 않은 상황에서 음주측정 요구의 \'상당한 이유\'가 있었는지, 혐의를 받고 있다면 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항·제2항은 술에 취한 상태의 운전 금지와 음주측정에 응할 의무를, 같은 법 제148조의2는 음주운전·음주측정거부의 처벌을 정하는 영역입니다. 판례·실무는 음주측정거부가 성립하려면 측정 요구 당시 \'술에 취한 상태\'에 있다고 인정할 만한 상당한 이유가 있어야 하고, 음주감지기는 낮은 농도에서부터 반응하므로 감지기 반응만으로 곧바로 처벌 기준 농도의 상당한 이유를 인정할 수 없으며, 운전자의 외관·태도·운전 행태 등 객관적 사정을 종합해 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 시동만 켬 + 감지기 반응 + 측정 요구 결합은 \'상당한 이유·측정거부 성립 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 상당한 이유 ② 감지기 반응 ③ 측정거부 성립 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 상당한 이유 ② 감지기 ③ 성립 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 시동만 켠 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상당한 이유·감지기 반응·측정거부 성립·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상당한 이유</strong> — 측정 요구 당시 처벌 기준 농도의 음주상태로 볼 상당한 이유가 있었는지 정리.</li>\n<li><strong>② 감지기 반응</strong> — 음주감지기 반응만으로 상당한 이유가 인정되는지 정리.</li>\n<li><strong>③ 측정거부 성립</strong> — 외관·태도·운전 행태 등 객관적 사정을 종합한 거부 성립 여부 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주감지기는 낮은 농도에서부터 반응하므로 반응만으로 곧바로 처벌 기준 농도의 \'상당한 이유\'가 인정되지 않고 외관·태도·운전 행태 등 객관적 사정을 종합하는 영역. 측정 요구 당시 정황과 운전 의사·행태 자료를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·정황 자료 확인 (즉시~당일)</strong> — 적발보고서·감지기 반응 기록·측정 요구 경위, 블랙박스·CCTV 영상 확인.</li>\n<li><strong>2단계 — 상당한 이유 정리 (수일 내)</strong> — 외관·태도·운전 행태와 음주량·운전 의사 등 객관적 사정 점검.</li>\n<li><strong>3단계 — 측정거부 성립 정리 (공판 전)</strong> — 감지기 반응만으로 거부가 성립하는지, 요구가 정당했는지 정리.</li>\n<li><strong>4단계 — 행정 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 상당한 이유·측정거부 성립 변론, 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">시동만 켠 음주운전 측정거부·상당한 이유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상당한 이유·감지기 반응·측정거부 성립 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서·측정 요구 경위 자료 (요구 정당성)</strong></li>\n<li><strong>음주감지기 반응 기록 (반응 농도·시점)</strong></li>\n<li><strong>블랙박스·단속 현장 CCTV 영상 (운전 행태·정황)</strong></li>\n<li><strong>차량 위치·시동·이동 여부 자료 (운전 의사)</strong></li>\n<li><strong>음주량·동석자 진술 자료 (객관적 사정)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 음주감지기는 낮은 농도에서부터 반응하므로 반응만으로 처벌 기준 농도의 상당한 이유가 곧바로 인정되지는 않고, 외관·태도·운전 행태 등 객관적 사정을 종합해야 하므로 측정 요구 당시 운전 의사·차량 이동 여부와 정황을 영상·진술로 정리해두는 것이 핵심입니다. 면허 처분은 안 날부터 90일 내 이의신청·행정심판으로 별개로 정리하고 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상당한 이유</strong> — 측정 요구 당시 처벌 기준 농도의 음주상태로 볼 상당한 이유가 있었는지.</li>\n<li><strong>감지기 반응</strong> — 감지기 반응만으로 상당한 이유가 인정되는지.</li>\n<li><strong>측정거부 성립</strong> — 외관·태도·운전 행태로 거부가 성립하는지.</li>\n<li><strong>운전 여부</strong> — 시동만 켜고 움직이지 않은 점이 운전·운전 의사에 영향을 주는지.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주감지기 반응과 음주측정거부죄의 \'상당한 이유\'',
        summary:
          '대법원 2002도6632(대법원, 2003.01.24 선고) 영역에서 법원은 음주측정거부죄는 술에 취한 상태에 있다고 인정할 만한 상당한 이유가 있는 사람이 경찰공무원의 측정에 응하지 않은 경우에 성립하고, 여기서 \'술에 취한 상태\'는 처벌 기준 음주수치 이상의 상태를 말하므로 적어도 그러한 상태에 있다고 인정할 상당한 이유가 있어야 하며, 호흡측정 전 음주감지기 시험에서 반응이 나왔더라도 감지기가 낮은 농도에서부터 반응하는 점을 고려하면 그것만으로 곧바로 상당한 이유가 있다고 볼 수 없고 운전자의 외관·태도·운전 행태 등 객관적 사정을 종합해 판단해야 한다고 판시했습니다. 시동만 켠 음주운전 측정거부 사안에서도 상당한 이유와 측정거부 성립을 검토해볼 수 있습니다.',
        takeaway: '시동만 켬 + 감지기 반응 + 측정 요구 결합 시 상당한 이유·측정거부 성립 평가 검토 영역 — 적발보고서·감지기 기록·정황 영상·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '감지기 반응만으로 측정거부가 성립하나요?',
        answer:
          '<strong>감지기는 낮은 농도에서부터 반응해 그것만으로 곧바로 상당한 이유가 인정되기 어려운 영역입니다.</strong> 혐의를 받고 있다면 측정 요구 정황부터 정리하세요.',
      },
      {
        question: '시동만 켜고 움직이지 않았으면 다툼 여지가 있나요?',
        answer:
          '<strong>운전 의사·차량 이동 여부가 정황 판단에 영향을 주는 영역입니다.</strong> 차량 위치·시동·이동 여부 자료를 확보하세요.',
      },
      {
        question: '상당한 이유는 무엇으로 판단하나요?',
        answer:
          '<strong>운전자의 외관·태도·운전 행태 등 객관적 사정을 종합해 판단하는 영역입니다.</strong> 단속 영상·진술로 정황을 정리하세요.',
      },
      {
        question: '면허 처분도 같이 다퉈야 하나요?',
        answer:
          '<strong>측정거부는 면허 처분으로 이어지기 쉬워 행정심판을 별도로 검토하는 영역입니다.</strong> 처분 통지서·90일 청구기한을 점검하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·감지기 기록·측정 요구 경위 확보가 출발점인 영역입니다.</strong> 정황 영상과 행정 청구기한을 함께 점검하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-measurement-refusal-track' },
      { label: '음주측정 상당한 이유 기준', href: '/guide/dui/dui-reasonable-grounds-standard' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },
// ─── 1. dui-off-road-parking-lot-track ───
  {
    domain: 'dui',
    slug: 'dui-off-road-parking-lot-track',
    keyword: '도로 외 장소 음주운전',
    questionKeyword: '아파트 단지 주차장처럼 도로가 아닌 곳에서 술을 마신 뒤 차를 잠깐 움직이다가 음주운전으로 입건됐어요. 운전이 끝난 뒤 시간이 좀 지나서 측정했는데 수치가 처벌기준을 살짝 넘었다고 합니다. 도로 외 장소인데도, 또 측정 시점이 늦었는데도 처벌되는지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '도로 외 장소 음주운전·측정 시점 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '도로 외 장소 음주운전 — 5단계 측정 점검 | 로앤가이드',
      description:
        '주차장 등 도로 외 장소에서 음주운전으로 입건돼 막막하다면 도로교통법 제44조와 측정 시점·상승기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트 단지 주차장이나 건물 부설주차장처럼 일반 교통에 사용되는 도로가 아닌 곳에서 술을 마신 뒤 차를 잠깐 이동시키다가 음주운전으로 입건된 운전자입니다. 사고 신고나 단속으로 경찰이 출동했고, 정작 제가 운전을 멈춘 시점과 호흡측정을 한 시점 사이에 시간 간격이 좀 있었는데 그때 측정된 혈중알코올농도가 처벌기준치를 아주 살짝 넘는 수준이었습니다. 도로가 아닌 장소에서의 운전인데도 음주운전으로 처벌되는지, 운전 직후가 아니라 시간이 지나 측정된 데다 마침 술기운이 오르던 상승기였을 수 있다는 점이 다툼이 되는지 헷갈립니다. 운전 시점의 실제 수치가 정말 기준을 넘었는지, 혐의를 받고 있다면 측정 절차와 시점을 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 누구든지 술에 취한 상태에서 자동차를 운전하여서는 안 된다고 정하고, 같은 법 제2조 제26호는 도로 외의 곳에서의 운전도 음주운전 등에 한해 운전에 포함한다고 규정하는 영역입니다. 판례·실무는 운전 시점과 측정 시점 사이에 시간 간격이 있고 그때가 혈중알코올농도의 상승기로 보인다는 사정만으로 언제나 운전 시점 수치의 증명이 불가능하다고 볼 수는 없고, 운전과 측정 사이의 시간 간격, 측정 수치와 기준치의 차이, 음주량, 단속 당시 행동 양상, 사고 경위 등을 종합해 논리와 경험칙에 따라 합리적으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 도로 외 장소 + 늦은 측정 + 근소 초과 결합은 \'측정 시점·상승기 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 운전 장소 ② 측정 시점 ③ 수치 차이 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 장소 ② 시점 ③ 수치 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 도로 외 장소 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전 장소·측정 시점·수치 차이·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전 장소</strong> — 주차장 등 도로 외 장소도 음주운전에 포함되는지 정리.</li>\n<li><strong>② 측정 시점</strong> — 운전 종료와 측정 사이 시간 간격·상승기 여부 정리.</li>\n<li><strong>③ 수치 차이</strong> — 측정 수치와 처벌기준치의 차이가 근소한지 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운전과 측정 사이 시간 간격이 있고 상승기로 보인다는 사정만으로 곧바로 증명 불가가 되는 것은 아니고, 시간 간격·수치 차이·음주량·행동 양상·사고 경위를 종합해 운전 당시 수치가 기준 이상이었는지 판단하는 영역. 측정 경위와 시간 간격을 시간순으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·측정 결과지·공소장, 면허 처분 통지서·사유 확인.</li>\n<li><strong>2단계 — 운전 장소 정리 (수일 내)</strong> — 운전한 곳이 도로 외 장소인지와 이동 경위·거리 기록.</li>\n<li><strong>3단계 — 측정 시점 정리 (공판 전)</strong> — 운전 종료 시각과 측정 시각의 간격, 음주 종료 시각·음주량 정리.</li>\n<li><strong>4단계 — 행정 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 측정 시점·수치 차이 변론, 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">도로 외 장소 음주운전·측정 시점 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 운전 장소·측정 시점·행정 대응 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서·측정 결과지 (수치·시각)</strong></li>\n<li><strong>운전 장소·이동 경위·거리 자료 (도로 외 장소 확인)</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 메모 (상승기 판단)</strong></li>\n<li><strong>현장 CCTV·블랙박스·사고 경위 자료 (정황)</strong></li>\n<li><strong>측정 요구·생수 헹굼·재측정 요구 경위 메모 (절차)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운전과 측정 사이 시간 간격이 있고 상승기로 보인다는 사정만으로 운전 당시 수치 증명이 곧바로 불가능해지는 것은 아니므로, 음주 종료 시각·음주량·운전 종료 시각·측정 시각을 시간순으로 구체적으로 정리해두는 것이 핵심입니다. 면허 처분은 안 날부터 90일 내 이의신청·행정심판으로 별개로 챙기고 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운전 장소</strong> — 도로 외 장소 운전도 음주운전에 포함되는지.</li>\n<li><strong>측정 시점</strong> — 운전 종료와 측정 사이 간격·상승기 여부.</li>\n<li><strong>수치 차이</strong> — 측정 수치와 기준치의 차이가 근소한지.</li>\n<li><strong>측정 절차</strong> — 측정 방법·고지·재측정 요구 경위의 적정성.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상승기 측정과 운전 당시 혈중알코올농도 증명',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 영역에서 법원은 운전 시점과 혈중알코올농도 측정 시점 사이에 시간 간격이 있고 그때가 상승기로 보이는 경우라도 그러한 사정만으로 언제나 운전 시점 수치의 증명이 불가능하다고 볼 수는 없고, 운전과 측정 사이의 시간 간격·측정 수치와 처벌기준치의 차이·음주를 지속한 시간 및 음주량·단속 당시 행동 양상·사고 경위 등을 종합해 논리와 경험칙에 따라 합리적으로 판단해야 한다고 보아, 혈중알코올농도 0.037%로 측정된 사안에서 음주 종료 후 약 30m를 운전하다 사고를 낸 뒤 운전 종료로부터 약 12분 후에 통상적 단속 절차에 따라 측정되었고 당시 이의나 채혈 재측정 요구가 없었던 점 등에 비추어 운전 당시 수치가 0.03% 이상이었다고 보는 것이 논리와 경험칙에 부합한다고 판시했습니다. 도로 외 장소 음주운전 사안에서도 측정 시점·상승기와 수치 차이를 검토해볼 수 있습니다.',
        takeaway: '도로 외 장소 + 늦은 측정 + 근소 초과 결합 시 측정 시점·상승기 평가 검토 영역 — 적발·측정 자료·음주 시각·운전 경위·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '주차장 등 도로 외 장소도 음주운전으로 처벌되나요?',
        answer:
          '<strong>음주운전 등은 도로 외의 곳에서의 운전도 포함될 여지가 있는 영역입니다.</strong> 운전 장소·이동 경위를 먼저 정리.',
      },
      {
        question: '측정이 운전보다 늦었으면 다툴 수 있나요?',
        answer:
          '<strong>시간 간격·상승기 사정과 수치 차이를 종합해 다퉈질 여지가 있는 영역입니다.</strong> 음주·운전·측정 시각을 시간순으로 정리.',
      },
      {
        question: '수치가 기준을 살짝 넘은 정도면 어떻게 되나요?',
        answer:
          '<strong>측정 수치와 기준치의 차이가 근소하면 더 신중하게 판단되는 영역입니다.</strong> 음주량·행동 양상 자료를 확보.',
      },
      {
        question: '측정 절차가 잘못됐으면 다툴 수 있나요?',
        answer:
          '<strong>측정 방법·고지·재측정 요구 경위가 쟁점이 되는 영역입니다.</strong> 측정 경위·결과지를 함께 정리.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발·측정 자료와 음주·운전 시각 정리가 출발점인 영역입니다.</strong> 운전 장소와 행정 청구기한을 함께 점검.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-measurement-refusal-track' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
    ],
  },

  // ─── 2. dui-widmark-estimation-track ───
  {
    domain: 'dui',
    slug: 'dui-widmark-estimation-track',
    keyword: '위드마크 추정 음주운전',
    questionKeyword: '운전한 뒤에 추가로 술을 더 마셨는데, 경찰이 위드마크 공식으로 운전 당시 수치를 거꾸로 추정해 음주운전으로 기소했어요. 음주 시작·종료 시각과 음주량을 정확히 확인할 자료가 없는데도 추정 수치만으로 처벌되는지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '위드마크 추정 음주운전·증명 정도 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '위드마크 추정 음주운전 — 5단계 증명 점검 | 로앤가이드',
      description:
        '운전 후 추가 음주로 위드마크 추정만으로 기소돼 막막하다면 도로교통법 제44조와 위드마크 증명 정도 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"운전을 끝낸 뒤에 편의점 등에서 술을 추가로 더 마셨는데, 한참 뒤 측정된 혈중알코올농도를 근거로 경찰이 위드마크 공식을 사용해 \'운전 당시\'의 수치를 거꾸로 추정해 음주운전으로 기소한 운전자입니다. 문제는 제가 1차로 마신 술의 시작·종료 시각과 정확한 음주량을 확인할 수 있는 구체적이고 객관적인 자료가 거의 없다는 점입니다. 운전 시점이 술기운이 오르던 상승기였는지 내려가던 하강기였는지조차 확정하기 어려운데, 운전 종료로부터 상당한 시간이 지나 측정된 수치가 기준치를 약간 넘는 정도였습니다. 이렇게 추정 수치만으로 운전 당시 기준을 넘었다고 단정할 수 있는지, 혐의를 받고 있다면 위드마크 추정의 전제와 증명 정도를 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제148조의2는 그 처벌을 정하는 영역입니다. 판례·실무는 음주운전 시점이 상승시점인지 하강시점인지 확정할 수 없는 상황에서 운전 종료로부터 상당한 시간이 지나 측정된 수치가 기준치를 약간 넘은 경우 운전 시점 수치가 기준을 초과했다고 단정할 수 없고, 위드마크 공식 적용의 전제가 되는 개별적·구체적 사실은 합리적 의심의 여지가 없을 정도로 증명되어야 하며, 산출 수치가 기준치를 근소하게 초과하는 정도면 더욱 신중하게 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 추가 음주 + 위드마크 추정 + 근소 초과 결합은 \'위드마크 전제·증명 정도 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 추가 음주 ② 추정 전제 ③ 증명 정도 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 음주 ② 전제 ③ 증명 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 위드마크 추정 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 추가 음주·추정 전제·증명 정도·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 추가 음주</strong> — 운전 후 추가 음주 시각·종류·양을 정리.</li>\n<li><strong>② 추정 전제</strong> — 위드마크 공식 적용의 음주 시각·양 등 전제 사실 정리.</li>\n<li><strong>③ 증명 정도</strong> — 운전 시점 수치가 합리적 의심 없이 증명됐는지 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운전 시점이 상승·하강 어느 쪽인지 확정할 수 없고 측정이 늦어 수치가 기준을 약간 넘은 경우 운전 당시 초과를 단정하기 어렵고, 위드마크 전제 사실은 합리적 의심 없이 증명되어야 하며 근소 초과면 더욱 신중히 판단되는 영역. 추가 음주 시각·양과 측정 경위를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·측정 결과지·위드마크 산출 근거·공소장, 면허 처분 통지서 확인.</li>\n<li><strong>2단계 — 추가 음주 정리 (수일 내)</strong> — 운전 후 추가 음주 시각·종류·양과 구매 영수증·CCTV 등 자료 정리.</li>\n<li><strong>3단계 — 추정 전제 점검 (공판 전)</strong> — 위드마크 공식 적용의 음주 시각·양 등 전제가 객관적 자료로 뒷받침되는지 점검.</li>\n<li><strong>4단계 — 행정 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 추정 전제·증명 정도 변론, 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">위드마크 추정 음주운전·증명 정도 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 추가 음주·추정 전제·행정 대응 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서·측정 결과지 (수치·시각)</strong></li>\n<li><strong>위드마크 산출 근거·전제 자료 (공식 적용 검증)</strong></li>\n<li><strong>운전 후 추가 음주 구매 영수증·CCTV (추가 음주 입증)</strong></li>\n<li><strong>1차 음주 시작·종료 시각·음주량 메모 (전제 사실)</strong></li>\n<li><strong>운전 종료 시각·이동 경위 자료 (시간 간격)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위드마크 공식 적용의 전제가 되는 음주 시각·음주량 같은 개별적·구체적 사실은 합리적 의심의 여지가 없을 정도로 증명되어야 하고 산출 수치가 기준을 근소하게 초과하면 더욱 신중히 판단되므로, 운전 후 추가 음주를 보여주는 영수증·CCTV와 1차 음주 시각·양 자료를 확보해두는 것이 핵심입니다. 면허 처분은 안 날부터 90일 내 이의신청·행정심판으로 별개로 챙기고 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추가 음주</strong> — 운전 후 추가 음주가 측정 수치에 반영됐는지.</li>\n<li><strong>추정 전제</strong> — 위드마크 적용의 음주 시각·양 전제가 증명됐는지.</li>\n<li><strong>상승·하강</strong> — 운전 시점이 상승·하강 어느 쪽인지 확정되는지.</li>\n<li><strong>증명 정도</strong> — 운전 당시 수치가 합리적 의심 없이 증명됐는지.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위드마크 공식 적용의 전제와 증명 정도',
        summary:
          '대법원 2024도11906(대법원, 2025.07.18 선고) 영역에서 법원은 음주운전 시점이 상승시점인지 하강시점인지 확정할 수 없는 상황에서 운전 종료로부터 상당한 시간이 지나 측정된 수치가 처벌기준치를 약간 넘은 경우 운전 시점 수치가 기준을 초과했다고 단정할 수 없고, 위드마크 공식으로 운전 당시 수치를 추정하려면 그 법칙 적용의 전제가 되는 개별적·구체적 사실이 합리적 의심의 여지가 없을 정도로 증명되어야 하며 산출 수치가 기준치를 근소하게 초과하는 정도면 더욱 신중하게 판단해야 한다고 보아, 운전 후 추가 음주가 있었고 1차 음주 시각·양을 확인할 객관적 자료가 부족한 사안에서 운전 당시 0.03% 이상의 음주 상태였다는 사실이 합리적 의심을 배제할 정도로 증명되었다고 보기 어렵다고 판시했습니다. 위드마크 추정 음주운전 사안에서도 추정 전제와 증명 정도를 검토해볼 수 있습니다.',
        takeaway: '추가 음주 + 위드마크 추정 + 근소 초과 결합 시 위드마크 전제·증명 정도 평가 검토 영역 — 측정 자료·산출 근거·추가 음주 입증·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운전 후에 더 마셨는데도 음주운전으로 추정되나요?',
        answer:
          '<strong>추가 음주가 측정 수치에 반영됐는지가 핵심 쟁점이 되는 영역입니다.</strong> 추가 음주 영수증·CCTV를 먼저 확보.',
      },
      {
        question: '위드마크 추정 수치만으로 처벌되나요?',
        answer:
          '<strong>추정 전제 사실이 합리적 의심 없이 증명되어야 다퉈질 여지가 있는 영역입니다.</strong> 음주 시각·양 자료를 정리.',
      },
      {
        question: '운전 시점이 상승기인지 모를 때는요?',
        answer:
          '<strong>상승·하강을 확정할 수 없으면 운전 당시 초과를 단정하기 어려운 영역입니다.</strong> 음주·운전·측정 시각을 시간순으로 정리.',
      },
      {
        question: '수치가 기준을 살짝 넘은 정도면 어떻게 되나요?',
        answer:
          '<strong>근소하게 초과한 경우 더욱 신중하게 판단되는 영역입니다.</strong> 산출 근거·전제 자료를 점검.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>추가 음주 입증과 음주·운전 시각 정리가 출발점인 영역입니다.</strong> 측정 자료와 행정 청구기한을 함께 점검.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '도로 외 장소 음주운전', href: '/guide/dui/dui-off-road-parking-lot-track' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
    ],
  },

  // ─── 3. jeonse-fraud-late-move-in-priority-loss-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-late-move-in-priority-loss-track',
    keyword: '전입 지연 대항력 후순위',
    questionKeyword: '전세로 들어가 살다가 그 집을 제가 매수해 소유권까지 넘겨받았는데, 대출이 얽혀 있고 보증보험 문제가 생기니 \'당신은 소유자가 됐으니 임차인 대항력·우선변제권은 사라졌다\'는 말을 들었어요. 임차인이 그 집을 사면 대항력이 정말 없어지는 건지, 제 보증금은 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '임차주택 매수 대항력·우선변제권 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임차인 주택 매수 — 5단계 대항력 점검 | 로앤가이드',
      description:
        '전세 살던 집을 매수했더니 대항력·우선변제권이 사라졌다는 말을 들어 막막하다면 주택임대차보호법 제3조 대항력 소멸 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세로 살던 집에 대항요건(주택 인도+전입신고)을 갖추고 확정일자까지 받아 우선변제권을 확보해 둔 임차인이었는데, 사정상 그 임차주택을 제가 직접 매수해 소유권이전등기까지 마친 거주자입니다. 그런데 전세금안심대출이나 보증보험이 얽혀 있다 보니, 보증기관이나 금융기관 측에서 \'임차인이 그 집의 소유자가 된 순간 임대차의 대항력과 우선변제권은 사라진다\'며 보증 면책을 주장하는 상황입니다. 주민등록은 그대로 되어 있는데도 소유권을 취득했다는 이유만으로 임차인으로서의 보호가 정말 없어지는 건지, 만약 그렇다면 그 효력은 언제부터 소멸하는지, 제 보증금 반환채권은 어떻게 정리해야 하는지 헷갈립니다. 임차인 보호와 소유권 취득이 겹친 이 상황을 어디부터 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택의 인도와 주민등록을 마치면 그다음 날부터 제3자에 대해 대항력이 생긴다고 정하고, 같은 조항의 대항요건은 취득 시뿐 아니라 유지를 위해서도 계속 존속해야 하는 영역입니다. 판례·실무는 주민등록이 대항력의 공시방법이 되려면 임차권을 매개로 한 점유임을 제3자가 인식할 수 있어야 하고, 대항력을 갖춘 임차인이 그 임차주택을 양수해 소유자가 된 경우에는 소유권이전등기 이후의 주민등록은 더 이상 임대차의 유효한 공시방법이 될 수 없어 대항력은 소유권 취득 시에 소멸한다고 보는 본 사례 흐름이 있는 영역입니다. 임차인 매수 + 소유권 취득 + 보증 면책 결합은 \'대항력 소멸 시기·보증금 정리\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 대항요건 ② 소멸 시기 ③ 우선변제권 ④ 보증·회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 대항 ② 소멸 ③ 변제권 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임차인 주택 매수 대항력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대항요건·소멸 시기·우선변제권·보증/회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대항요건</strong> — 주택 인도·전입신고·확정일자 취득 경과 정리.</li>\n<li><strong>② 소멸 시기</strong> — 임차주택을 매수해 소유권을 취득한 시점 정리.</li>\n<li><strong>③ 우선변제권</strong> — 소유권 취득 전후의 우선변제권 존속 여부 정리.</li>\n<li><strong>④ 보증·회수</strong> — 보증보험·대출보증 면책 주장과 보증금 회수 경로 점검.</li>\n<li><strong>⑤ 대응</strong> — 잔여 채권·경매 배당 등 정리·대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항력을 갖춘 임차인이 그 임차주택을 양수해 소유자가 되면 소유권이전등기 이후의 주민등록은 임대차의 유효한 공시방법이 될 수 없어 대항력은 소유권 취득 시에 소멸하는 영역. 소유권 취득 시점과 그 전후 권리 경과를 등기·확정일자 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 정리 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·분쟁조정 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리 경과 정리 (즉시~수일)</strong> — 전입·확정일자·소유권이전등기 일자를 등기부·전입세대확인서로 시간순 정리.</li>\n<li><strong>2단계 — 소멸 시기 확인 (수일 내)</strong> — 소유권 취득 시점과 대항력·우선변제권 존속 여부 확인.</li>\n<li><strong>3단계 — 보증·면책 검토 (분쟁 발생 시)</strong> — 보증보험·대출보증 면책 주장과 약관·고지 의무 경과 검토.</li>\n<li><strong>4단계 — 피해 상담·조정 (필요 시)</strong> — 전세사기피해지원센터 상담, 주임분조위 분쟁조정 신청 검토.</li>\n<li><strong>5단계 — 회수·대응 (병행)</strong> — 잔여 채권·경매 배당·반환청구 등 회수 경로 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임차주택 매수 대항력·우선변제권 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 대항요건·소멸 시기·보증/회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자 자료 (우선변제권 확인)</strong></li>\n<li><strong>전입세대확인서·주민등록 자료 (대항요건 경과)</strong></li>\n<li><strong>등기부등본 (소유권이전등기 일자 확인)</strong></li>\n<li><strong>전세금안심대출·보증보험 약관·증서 (면책 사유 확인)</strong></li>\n<li><strong>보증기관 고지·통지 경과 자료 (면책 주장 대응)</strong></li>\n<li><strong>매매계약서·대금 정산 자료 (취득 경위)</strong></li>\n<li><strong>경매·배당·반환청구 관련 자료 (회수 경로)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대항력을 갖춘 임차인이 그 임차주택을 양수해 소유자가 되면 소유권 취득 시에 대항력이 소멸할 여지가 있으므로, 전입·확정일자·소유권이전등기 일자를 등기부와 전입세대확인서로 시간순으로 정리해 소멸 시점을 명확히 해두는 것이 핵심입니다. 보증보험·대출보증의 면책 약관과 고지·통지 경과도 함께 확인해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항력 소멸</strong> — 임차주택 매수로 대항력이 소멸했는지.</li>\n<li><strong>소멸 시기</strong> — 대항력·우선변제권이 언제 소멸하는지.</li>\n<li><strong>공시방법</strong> — 소유권 취득 후 주민등록이 유효한 공시방법인지.</li>\n<li><strong>보증 면책</strong> — 보증보험·대출보증 면책 주장이 약관에 맞는지.</li>\n<li><strong>보증금 회수</strong> — 잔여 채권·배당·반환청구로 회수할 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인의 주택 매수와 대항력·우선변제권 소멸',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항의 주민등록은 임차권을 매개로 한 점유임을 제3자가 인식할 수 있어야 유효한 공시방법이 되고, 주택의 인도·주민등록이라는 대항요건은 대항력 취득 시뿐 아니라 유지를 위해서도 계속 존속해야 하므로, 대항력을 갖춘 임차인이 그 임차주택을 양수해 소유자가 된 경우 소유권이전등기 이후의 주민등록은 더 이상 임대차의 대항력 인정요건이 되는 유효한 공시방법이 될 수 없고 대항력은 소유권 취득 시에 소멸한다고 보아, 전세금안심대출 보증약관상 대항력·우선변제권 상실을 면책사유로 정한 사안에서 보증공사가 면책되었다고 본 원심에 법리오해가 없다고 판시했습니다. 임차인 주택 매수 사안에서도 대항력·우선변제권의 소멸 시기를 검토해볼 수 있습니다.',
        takeaway: '임차인 매수 + 소유권 취득 + 보증 면책 결합 시 대항력 소멸 시기·보증금 정리 검토 영역 — 전입·확정일자·등기 일자·보증약관 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '전세 살던 집을 사면 임차인 대항력이 없어지나요?',
        answer:
          '<strong>임차주택을 양수해 소유자가 되면 대항력이 소멸할 여지가 있는 영역입니다.</strong> 소유권이전등기 일자를 먼저 확인.',
      },
      {
        question: '주민등록이 그대로인데도 대항력이 사라지나요?',
        answer:
          '<strong>소유권 취득 후 주민등록은 임대차의 유효한 공시방법이 되기 어려운 영역입니다.</strong> 전입·등기 경과를 시간순으로 정리.',
      },
      {
        question: '대항력은 정확히 언제 소멸하나요?',
        answer:
          '<strong>임차주택의 소유권을 취득한 시점이 소멸 시기가 되는 영역입니다.</strong> 등기부로 취득 시점을 특정.',
      },
      {
        question: '보증보험 면책 주장은 어떻게 다투나요?',
        answer:
          '<strong>약관 면책사유와 고지·통지 경과로 다투는 영역입니다.</strong> 보증약관·증서·통지 자료를 확보.',
      },
      {
        question: '보증금은 어떻게 회수하나요?',
        answer:
          '<strong>잔여 채권·경매 배당·반환청구로 회수 경로를 검토하는 영역입니다.</strong> 매매·정산·배당 자료를 정리.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '대항력·우선변제권 기준', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-priority-standard' },
      { label: '확정일자·전입신고 순서', href: '/guide/jeonse-fraud/jeonse-fraud-fixed-date-move-in-order' },
      { label: '전세보증보험 면책 분쟁', href: '/guide/jeonse-fraud/jeonse-fraud-guarantee-exemption-dispute' },
      { label: '전세사기 피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },

  // ─── 4. jeonse-fraud-new-owner-deposit-takeover-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-new-owner-deposit-takeover-track',
    keyword: '매수인 임대인 지위 승계 보증금',
    questionKeyword: '다가구주택에 전세로 들어갔는데, 중개사가 이미 살고 있는 다른 세입자들의 선순위 보증금이 얼마나 되는지 제대로 확인해 설명해주지 않았어요. 나중에 경매에서 선순위 임차인들이 먼저 배당받아 저는 한 푼도 못 받았습니다. 중개사에게 책임을 물을 수 있는지, 보증금은 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '다가구주택 선순위 보증금 미설명·중개사 책임 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '다가구주택 선순위 보증금 — 5단계 설명의무 점검 | 로앤가이드',
      description:
        '중개사가 선순위 보증금을 설명하지 않아 경매에서 배당을 못 받아 막막하다면 공인중개사법 제30조 설명의무 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 가구가 한 건물에 사는 다가구주택의 한 호실에 전세로 들어간 임차인입니다. 그런데 계약 당시 개업공인중개사가 등기부상 근저당 정도만 알려줬을 뿐, 이미 그 건물에 살고 있는 다른 세입자들의 선순위 임대차보증금이 합쳐서 얼마나 되는지는 \'임대인이 자료를 안 준다\'며 제대로 조사·확인해 설명해주지 않았습니다. 중개대상물 확인·설명서에도 \'선순위 다수 있음을 구두 설명\' 정도로만 적혀 있었어요. 나중에 그 건물이 경매로 넘어가자 먼저 대항력·확정일자를 갖춘 선순위 임차인들이 보증금을 우선 배당받았고, 정작 저는 한 푼도 배당받지 못했습니다. 중개사가 선순위 보증금 규모를 확인해 설명할 의무를 다하지 않은 것인지, 그 책임을 어떻게 묻고 제 보증금은 어떻게 정리해야 하는지 막막한 상태입니다." 공인중개사법 제25조는 중개대상물의 권리관계 등을 확인해 설명하고 확인·설명서를 교부할 의무를, 같은 법 제30조는 고의·과실로 의무를 위반해 손해를 입힌 경우의 배상책임을 정하는 영역입니다. 판례·실무는 다가구주택 일부에 대한 임대차를 중개하는 개업공인중개사는 등기부상 권리관계 확인·설명에 그치지 않고 이미 거주하는 다른 임차인의 보증금·임대차 시기와 종기 등 자료를 요구·확인해 설명해야 하며, 임대인이 자료 제공을 거부하더라도 규모·세대수·시세에 비추어 선순위 보증금채권이 얼마나 있을 수 있는지 정도는 확인할 수 있으므로 이를 게을리하면 선량한 관리자의 주의의무를 다했다고 볼 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 다가구주택 + 선순위 보증금 + 미설명 결합은 \'중개사 설명의무·배상책임\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 설명의무 ② 확인·설명서 ③ 배상책임 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 의무 ② 서면 ③ 배상 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다가구주택 선순위 보증금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 설명의무·확인·설명서·배상책임·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 설명의무</strong> — 중개사가 선순위 보증금 규모를 조사·확인해 설명했는지 정리.</li>\n<li><strong>② 확인·설명서</strong> — 확인·설명서의 \'실제 권리관계\'란 기재 내용 정리.</li>\n<li><strong>③ 배상책임</strong> — 의무 위반과 보증금 손해 사이 인과 정리.</li>\n<li><strong>④ 회수</strong> — 경매 배당·임대인 청구 등 보증금 회수 경로 점검.</li>\n<li><strong>⑤ 대응</strong> — 공제·손해배상 청구와 분쟁조정 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다가구주택 중개사는 등기부 확인에 그치지 않고 선순위 임차인의 보증금·임대차 기간 자료를 요구·확인해 설명해야 하며, 임대인이 자료를 거부해도 규모·세대수·시세로 선순위 보증금채권이 얼마나 될 수 있는지 정도는 확인할 수 있는 영역. 확인·설명서 기재와 선순위 보증금 현황을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 정리 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·분쟁조정 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·서면 정리 (즉시~수일)</strong> — 전세계약서·중개대상물 확인·설명서·중개수수료 자료를 확보하고 기재 내용 정리.</li>\n<li><strong>2단계 — 선순위 현황 확인 (수일 내)</strong> — 등기부·경매 배당표로 선순위 보증금·확정일자·배당 결과 확인.</li>\n<li><strong>3단계 — 설명의무 위반 검토 (분쟁 발생 시)</strong> — 중개사의 조사·확인·설명 경과와 확인·설명서 기재의 적정성 검토.</li>\n<li><strong>4단계 — 피해 상담·조정 (필요 시)</strong> — 전세사기피해지원센터 상담, 주임분조위 분쟁조정 신청 검토.</li>\n<li><strong>5단계 — 배상·회수 대응 (병행)</strong> — 중개사·공제 손해배상 청구, 경매 배당·임대인 청구 등 회수 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다가구주택 선순위 보증금 미설명·중개사 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 설명의무·확인·설명서·배상책임 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서 (계약 내용·보증금)</strong></li>\n<li><strong>중개대상물 확인·설명서 (실제 권리관계란 기재)</strong></li>\n<li><strong>등기부등본 (근저당·소유관계)</strong></li>\n<li><strong>경매 배당표·배당 결과 자료 (선순위 배당 확인)</strong></li>\n<li><strong>선순위 임차 현황·세대수·시세 자료 (보증금 규모)</strong></li>\n<li><strong>중개사 설명·문자·녹취 (설명 경과)</strong></li>\n<li><strong>공인중개사 공제증서·손해 자료 (배상 청구)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다가구주택 중개사는 임대인이 자료 제공을 거부하더라도 건물 규모·세대수·시세에 비추어 선순위 보증금채권이 얼마나 있을 수 있는지 정도는 확인할 수 있으므로, 확인·설명서의 \'실제 권리관계\'란 기재와 중개사의 설명 경과를 문자·녹취로 정리해두는 것이 핵심입니다. 경매 배당표로 선순위 배당과 본인 미배당 현황을 함께 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>설명의무 범위</strong> — 선순위 보증금 규모 확인·설명까지 의무인지.</li>\n<li><strong>자료 거부</strong> — 임대인이 자료를 거부했을 때 중개사의 확인 범위.</li>\n<li><strong>확인·설명서</strong> — 실제 권리관계란 기재가 충분했는지.</li>\n<li><strong>인과·과실</strong> — 미설명과 보증금 손해 사이 인과·과실 정도.</li>\n<li><strong>배상·회수</strong> — 공제·손해배상과 경매 배당 회수 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 선순위 보증금 조사·설명의무와 배상책임',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 다가구주택 일부에 대한 임대차를 중개하는 개업공인중개사는 등기부상 권리관계 확인·설명에 그쳐서는 안 되고 이미 거주하는 다른 임차인의 보증금·임대차의 시기와 종기 등 자료를 임대인에게 요구해 확인한 다음 설명하고 자료를 제시해야 하며 임대인이 자료 제공을 거부하면 그 내용을 확인·설명서에 기재해야 하고, 설령 임대인이 자료 제공을 거부하더라도 다가구주택의 규모·전체 세대수·주변 시세에 비추어 선순위 임대차보증금채권이 얼마나 있을 수 있는지 정도는 확인할 수 있다고 보아, 이를 게을리한 중개사가 선량한 관리자의 주의의무를 다했다고 볼 수 없고 공인중개사법 제30조에 따른 배상책임을 부담할 수 있다고 판시했습니다. 다가구주택 선순위 보증금 미설명 사안에서도 중개사의 설명의무와 배상책임을 검토해볼 수 있습니다.',
        takeaway: '다가구주택 + 선순위 보증금 + 미설명 결합 시 중개사 설명의무·배상책임 검토 영역 — 계약서·확인·설명서·배당표·공제증서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사가 선순위 보증금까지 설명할 의무가 있나요?',
        answer:
          '<strong>다가구주택 중개사는 선순위 임차인 보증금 규모 확인·설명 의무가 있을 여지가 있는 영역입니다.</strong> 확인·설명서 기재를 먼저 점검.',
      },
      {
        question: '임대인이 자료를 안 줬다는데 그럼 면책되나요?',
        answer:
          '<strong>자료 거부 시에도 규모·세대수·시세로 확인 가능한 범위가 쟁점이 되는 영역입니다.</strong> 세대수·시세 자료를 정리.',
      },
      {
        question: '확인·설명서에 \'선순위 다수\'라고만 적혀 있어도 되나요?',
        answer:
          '<strong>실제 권리관계란 기재가 충분했는지가 쟁점이 되는 영역입니다.</strong> 확인·설명서 원본을 확보.',
      },
      {
        question: '중개사에게 손해배상을 청구할 수 있나요?',
        answer:
          '<strong>의무 위반과 손해 인과가 인정되면 배상책임을 물을 여지가 있는 영역입니다.</strong> 공제증서·손해 자료를 정리.',
      },
      {
        question: '보증금은 어떻게 회수하나요?',
        answer:
          '<strong>경매 배당·임대인 청구와 함께 중개사 배상으로 회수를 검토하는 영역입니다.</strong> 배당표·미배당 내역을 확보.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '다가구주택 선순위 확인', href: '/guide/jeonse-fraud/jeonse-fraud-multi-household-priority-check' },
      { label: '중개사 설명의무·배상책임', href: '/guide/jeonse-fraud/jeonse-fraud-broker-explanation-liability' },
      { label: '확정일자·전입신고 순서', href: '/guide/jeonse-fraud/jeonse-fraud-fixed-date-move-in-order' },
      { label: '전세사기 피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },

  // ─── 5. jeonse-fraud-prior-mortgage-nondisclosure-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-prior-mortgage-nondisclosure-track',
    keyword: '선순위 근저당 미고지',
    questionKeyword: '보증금을 못 돌려받아 임차권등기명령을 받아두고 한참을 기다렸는데, 임대인이 갑자기 \'소멸시효가 지났다\'고 주장해요. 임차권등기를 해두면 시효가 멈추는 줄 알았는데 아니라는 말도 듣고 혼란스럽습니다. 임차권등기로 시효가 중단되는지, 보증금반환은 어떤 순서로 정리해야 하는지 막막합니다.',
    ctaKeyword: '임차권등기명령 소멸시효·보증금반환 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임차권등기 소멸시효 — 5단계 보증금반환 점검 | 로앤가이드',
      description:
        '임차권등기를 해뒀는데 임대인이 시효 완성을 주장해 막막하다면 주택임대차보호법 제3조의3과 시효 중단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세계약이 끝났는데도 임대인이 보증금을 돌려주지 않아, 이사를 나가면서 대항력·우선변제권을 유지하려고 주택임대차보호법상 임차권등기명령을 받아 등기를 마쳐 둔 임차인입니다. 등기를 해두면 안심이라고 생각하고 한동안 기다렸는데, 시간이 꽤 흐른 뒤 보증금반환을 청구하자 임대인 측이 \'보증금반환채권의 소멸시효가 이미 완성됐다\'고 주장하기 시작했습니다. 저는 임차권등기를 해두면 압류·가압류처럼 소멸시효가 중단되어 멈추는 줄 알았는데, 그게 아니라는 말을 듣고 혼란스럽습니다. 임차권등기명령에 따른 등기가 소멸시효를 중단시키는 효력이 있는지, 만약 없다면 보증금반환채권의 시효는 어떻게 관리하고 어떤 순서로 청구를 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조의3은 임대차가 끝난 뒤 보증금을 돌려받지 못한 임차인이 임차권등기명령을 신청할 수 있도록 하고 그 등기로 대항력·우선변제권을 취득·유지하도록 정하며, 민법 제168조는 청구·압류·가압류·가처분 등을 소멸시효 중단사유로 정하는 영역입니다. 판례·실무는 임차권등기명령에 따른 임차권등기는 대항력·우선변제권을 취득·유지하게 하는 담보적 기능을 주목적으로 하는 것이어서, 일부 가압류 절차규정을 준용하더라도 그 자체에 민법 제168조 제2호의 압류·가압류·가처분에 준하는 소멸시효 중단의 효력이 있다고 볼 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 임차권등기 + 시효 관리 + 보증금반환 결합은 \'시효 중단·반환청구 절차\' 검토가 가능한 트랙입니다. 피해자라면 ① 등기 효력 ② 시효 관리 ③ 중단 조치 ④ 반환청구 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 등기 ② 시효 ③ 중단 ④ 청구 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임차권등기 소멸시효 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기 효력·시효 관리·중단 조치·반환청구·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 등기 효력</strong> — 임차권등기가 대항력·우선변제권 유지에 갖는 효력 정리.</li>\n<li><strong>② 시효 관리</strong> — 보증금반환채권의 소멸시효 기산·경과를 정리.</li>\n<li><strong>③ 중단 조치</strong> — 임차권등기 외 청구·압류 등 별도 시효 중단 조치 정리.</li>\n<li><strong>④ 반환청구</strong> — 지급명령·보증금반환소송 등 청구 경로 점검.</li>\n<li><strong>⑤ 대응</strong> — 경매 배당·집행 등 회수·대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차권등기명령에 따른 등기는 대항력·우선변제권을 유지하는 담보적 기능이 주목적이어서 그 자체로는 소멸시효 중단의 효력이 있다고 보기 어려운 영역. 등기만 믿지 말고 청구·소송 등 별도 시효 중단 조치를 시간 안에 챙기는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금반환 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·법률구조 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기·채권 정리 (즉시~수일)</strong> — 임차권등기 완료 등기부와 계약서·확정일자·미반환 경과를 시간순 정리.</li>\n<li><strong>2단계 — 시효 기산 확인 (수일 내)</strong> — 보증금반환채권의 시효 기산점과 경과 기간 확인.</li>\n<li><strong>3단계 — 시효 중단 조치 (시효 임박 전)</strong> — 내용증명 청구·지급명령·소 제기 등 별도 중단 조치 검토.</li>\n<li><strong>4단계 — 반환청구·소송 (필요 시)</strong> — 지급명령·보증금반환소송으로 집행권원 확보 검토.</li>\n<li><strong>5단계 — 배당·회수 대응 (병행)</strong> — 경매 배당·강제집행 등 회수 경로 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임차권등기명령 소멸시효·보증금반환 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 등기 효력·시효 관리·반환청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자 자료 (채권 내용)</strong></li>\n<li><strong>임차권등기명령 결정·완료 등기부등본 (등기 효력)</strong></li>\n<li><strong>계약 종료·보증금 미반환 경과 자료 (시효 기산)</strong></li>\n<li><strong>내용증명·청구 발송 자료 (시효 중단 조치)</strong></li>\n<li><strong>지급명령·소장·판결 등 집행권원 자료 (반환청구)</strong></li>\n<li><strong>등기부·근저당·경매 자료 (배당·회수)</strong></li>\n<li><strong>전세보증·임대인 재산 관련 자료 (회수 경로)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차권등기명령에 따른 임차권등기는 대항력·우선변제권을 유지하게 하는 담보적 기능이 주목적이어서 그 자체에 압류·가압류·가처분에 준하는 소멸시효 중단의 효력이 있다고 보기 어려우므로, 등기를 해두었더라도 내용증명 청구·지급명령·소 제기 같은 별도 시효 중단 조치를 시효 기간 안에 따로 챙겨두는 것이 핵심입니다. 시효 기산점과 경과 기간을 계약 종료·미반환 경과 자료로 명확히 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>등기 효력</strong> — 임차권등기가 시효 중단 효력까지 갖는지.</li>\n<li><strong>시효 기산</strong> — 보증금반환채권의 시효 기산점·경과 기간.</li>\n<li><strong>중단 조치</strong> — 청구·지급명령·소 제기가 제때 이뤄졌는지.</li>\n<li><strong>대항력 유지</strong> — 등기로 대항력·우선변제권이 유지되는지.</li>\n<li><strong>반환·회수</strong> — 집행권원 확보와 경매 배당 회수 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기명령에 따른 등기와 소멸시효 중단',
        summary:
          '대법원 2017다226629(대법원, 2019.05.16 선고) 영역에서 법원은 주택임대차보호법 제3조의3에서 정한 임차권등기명령에 따른 임차권등기는 특정 목적물에 대한 구체적 집행행위나 보전처분의 실행을 내용으로 하는 압류·가압류·가처분과 달리 주택임차인이 대항력·우선변제권을 취득·유지하도록 하는 담보적 기능을 주목적으로 하는 것이고, 비록 임차권등기명령의 신청·집행에 가압류에 관한 절차규정을 일부 준용하더라도 이는 절차가 비슷한 데서 비롯된 것일 뿐이므로, 임차권등기명령에 따른 임차권등기에는 민법 제168조 제2호에서 정하는 소멸시효 중단사유인 압류·가압류·가처분에 준하는 효력이 있다고 볼 수 없다고 판시했습니다. 임차권등기 소멸시효 사안에서도 별도의 시효 중단 조치 필요성을 검토해볼 수 있습니다.',
        takeaway: '임차권등기 + 시효 관리 + 보증금반환 결합 시 시효 중단·반환청구 절차 검토 영역 — 계약서·등기부·미반환 경과·청구 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임차권등기를 해두면 소멸시효가 멈추나요?',
        answer:
          '<strong>임차권등기 자체에는 시효 중단 효력이 있다고 보기 어려운 영역입니다.</strong> 별도 청구·소송 조치를 함께 챙기기.',
      },
      {
        question: '임대인이 시효 완성을 주장하면 어떻게 하나요?',
        answer:
          '<strong>시효 기산점·경과와 별도 중단 조치 유무로 다투는 영역입니다.</strong> 청구 발송·소 제기 자료를 정리.',
      },
      {
        question: '시효를 멈추려면 무엇을 해야 하나요?',
        answer:
          '<strong>내용증명 청구·지급명령·소 제기 같은 조치를 검토하는 영역입니다.</strong> 시효 임박 전에 청구를 발송.',
      },
      {
        question: '등기로 대항력·우선변제권은 유지되나요?',
        answer:
          '<strong>임차권등기는 대항력·우선변제권을 유지하는 담보적 기능이 주목적인 영역입니다.</strong> 등기 완료 등기부를 확보.',
      },
      {
        question: '보증금반환은 어떤 순서로 청구하나요?',
        answer:
          '<strong>지급명령·보증금반환소송으로 집행권원을 확보하는 순서로 정리하는 영역입니다.</strong> 계약서·미반환 경과 자료를 먼저 준비.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '임차권등기명령 절차', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-order-procedure' },
      { label: '보증금반환소송 순서', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit-order' },
      { label: '보증금 소멸시효 관리', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-prescription-management' },
      { label: '전세사기 피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },
];
