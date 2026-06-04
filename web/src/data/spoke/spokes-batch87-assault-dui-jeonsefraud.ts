import { SpokePage } from '../spoke-pages';

// batch87 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-04)
//
// 고유 존재 이유:
// 1. assault-bar-drunken-brawl-track — 술집 취중 시비 폭행 피해자 판단형 트랙. 통증 호소 위주로 발급된 상해진단서의 증명력과 상해 인정 기준이 핵심.
// 2. assault-parking-conflict-track — 주차 시비 폭행에서 상대가 위험한 물건을 휴대했는지 다투는 피해자 판단형 트랙. 특수상해·특수협박의 '휴대' 의미가 핵심.
// 3. assault-sports-team-track — 운동부 선후배 사이 훈육·기합을 빙자한 폭행 피해자 절차형 트랙. 사회상규상 정당행위 한계와 신고 절차가 핵심.
// 4. assault-lineal-ascendant-track — 부모 등 직계존속을 향한 존속폭행·존속상해 피해자 판단형 트랙. 상습 폭력습벽과 존속범죄 죄수가 핵심.
// 5. dui-license-revocation-appeal-track — 음주 면허취소 행정심판과 음주측정 정확성을 함께 다투는 accused 절차형 트랙. 측정 절차·위드마크 전제사실 증명이 핵심.
// 6. dui-personal-mobility-track — 개인형이동장치(전동킥보드) 음주운전에서 상승기 측정 시점이 문제된 accused 판단형 트랙. 운전 시점 혈중알코올농도 증명이 핵심.
// 7. dui-repeat-offense-aggravation-track — 재범 가중처벌 국면에서 운전 종료 후 추가 음주가 겹친 accused 판단형 트랙. 추가 음주·상승기와 위드마크 신중 적용이 핵심.
// 8. jeonse-fraud-multi-household-deposit-track — 다가구주택에서 보증금 회수를 다투는 피해자 절차형 트랙. 대항요건 존속·소유권 취득에 따른 대항력 소멸이 핵심.
// 9. jeonse-fraud-agent-embezzlement-track — 중개사가 선순위 보증금을 제대로 설명하지 않은 전세사기 피해자 판단형 트랙. 개업공인중개사 주의의무·공제금 청구가 핵심.
// 10. jeonse-fraud-tax-arrears-priority-track — 세금체납 우선순위에 밀려 회수가 막힌 피해자 판단형 트랙. 임차권등기명령의 시효 중단 효력 한계와 우선순위가 핵심.

export const spokesBatch87AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-bar-drunken-brawl-track ───
  {
    domain: 'assault',
    slug: 'assault-bar-drunken-brawl-track',
    keyword: '술집 취중 시비 폭행 상해진단서',
    questionKeyword: '술집에서 옆 테이블 손님과 시비가 붙어 상대가 저를 밀치고 때려 통증이 생겼어요. 병원에서 상해진단서는 받았는데 뚜렷한 외상은 없고 제 통증 호소만으로 발급된 거라, 이걸로 상해가 인정돼 고소가 되는지 막막합니다.',
    ctaKeyword: '술집 취중 시비 폭행 상해진단서 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '술집 취중 시비 폭행 — 5단계 상해진단서 점검 | 로앤가이드',
      description:
        '술집에서 취중 시비로 맞아 다쳤는데 진단서가 통증 호소에만 의존해 막막하다면 형법 제257조 상해 인정 기준과 진단 근접성 등 증명력 점검 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술집에서 술을 마시다 옆 테이블 손님과 사소한 말다툼이 시비로 번졌고, 상대가 갑자기 일어나 저를 밀치고 멱살을 잡으며 얼굴과 어깨를 때려 통증이 생긴 피해자입니다. 곧장 병원에 가서 상해진단서를 받기는 했는데, 영상검사에선 뚜렷한 골절·외상이 잡히지 않고 제 통증 호소를 근거로 발급된 것이라 마음이 놓이지 않아요. 상대는 \'멍 하나 없는데 무슨 상해냐, 취해서 서로 밀친 것뿐\'이라며 발뺌하는데, 이런 진단서만으로 상해가 인정돼 고소·치료비 청구가 되는지 막막한 상태입니다." 형법 제257조 제1항은 사람의 신체를 상해한 자를, 같은 법 제260조 제1항은 폭행한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 상해진단서가 피해자의 진술과 함께 유력한 증거가 될 수 있으나, 주로 피해자의 주관적인 통증 호소에 의존해 발급된 때에는 진단일자와 상해 발생 시점의 근접성, 진단 부위·정도가 주장하는 경위와 일치하는지, 진료를 받게 된 동기·경과 등을 두루 살펴 그 증명력을 신중히 판단해야 하고, 상해는 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 술집 시비 + 취중 폭행 + 통증 위주 진단서 결합은 \'상해 인정·진단서 증명력\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 진단 근접성 ② 부위 일치 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 일치 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술집 취중 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단 근접성·부위 일치·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단 근접성</strong> — 폭행 시점과 진료·진단일이 시간상 가까운지 정리.</li>\n<li><strong>② 부위 일치</strong> — 진단된 상해 부위·정도가 밀침·구타 경위와 일치하는지 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조), 취중 시비 정황까지 함께 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통증 호소 위주로 발급된 상해진단서라도, 진료가 폭행 직후로 근접하고 진단 부위·정도가 시비·구타 경위와 일치하며 상처가 일상생활에 지장이 없는 극히 경미한 정도를 넘으면 상해로 인정될 여지가 있는 영역. 진료 시점·경과와 시비·구타 정황을 함께 정리해둘수록 증명력 판단에서 유리해지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신속 진료·진단 확보 (즉시~당일)</strong> — 폭행 직후 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 진단·경위 일치 정리 (수일 내)</strong> — 진료 시점·동기, 진단 부위와 밀침·구타 경위의 일치 여부 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 취중 시비 정황 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·매장 CCTV 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집 취중 시비 폭행 상해진단서·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단 근접성·부위 일치·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (진단일·부위·치료기간)</strong></li>\n<li><strong>술집 매장 CCTV·주변 영상 (시비·구타 정황)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>최초 진료 시점·동기 기록 (근접성 입증)</strong></li>\n<li><strong>시비·폭행 경위·시간 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>동석자·목격자·종업원 연락처·진술</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통증 위주로 발급된 진단서일수록 폭행 직후 가능한 한 빨리 진료를 받아 시점을 근접시키고, 진단 부위가 맞은 부위와 일치하도록 경위를 명확히 정리해두는 것이 도움이 됩니다. 술집 매장 CCTV는 시비부터 폭행까지 정황을 보여줄 수 있으나 보관 기간이 짧을 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해 인정</strong> — 통증이 일상생활에 지장 없는 극히 경미한 정도를 넘는지.</li>\n<li><strong>진단서 증명력</strong> — 통증 호소 위주 진단서의 신빙성·근접성.</li>\n<li><strong>부위 일치</strong> — 진단 부위·정도가 시비·구타 경위와 맞는지.</li>\n<li><strong>쌍방 여부</strong> — 취중 다툼이 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통증 호소 위주 상해진단서의 증명력 판단기준',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 상해진단서가 피해자의 진술과 함께 유력한 증거가 될 수 있으나 상해 사실과 인과관계 역시 합리적 의심이 없는 정도로 증명돼야 하므로, 주로 피해자의 주관적인 통증 호소에 의존해 의학적 가능성만으로 발급된 진단서는 진단일자와 상해 발생 시점의 근접성, 진단 부위·정도가 주장하는 경위와 일치하는지, 진료를 받게 된 동기·경과 등을 두루 살펴 그 증명력을 신중히 판단해야 하고, 폭행에 수반된 상처가 극히 경미해 굳이 치료가 필요 없이 자연 치유되고 일상생활에 지장이 없는 경우에는 상해라고 할 수 없으며 신체의 완전성 훼손 여부는 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단해야 한다고 판시했습니다. 술집 취중 시비 폭행 사안에서도 상해 인정과 진단서 증명력을 검토해볼 수 있습니다.',
        takeaway: '술집 시비 + 취중 폭행 + 통증 위주 진단서 결합 시 상해 인정·진단서 증명력 검토 영역 — 진료 근접성·부위 일치·매장 CCTV 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '뚜렷한 외상이 없고 통증만 있어도 상해가 되나요?',
        answer:
          '<strong>일상생활에 지장 없는 극히 경미한 정도를 넘고 경위와 일치하면 상해로 인정될 여지가 있는 영역입니다.</strong> 진료 시점·경과를 정리.',
      },
      {
        question: '진단서를 며칠 늦게 받으면 불리한가요?',
        answer:
          '<strong>상해 발생과 진단 시점의 근접성이 증명력 판단에 영향을 줄 수 있는 영역입니다.</strong> 가능한 한 빨리 진료를 받아 기록을 남길 것.',
      },
      {
        question: '취해서 서로 밀쳤다고 쌍방으로 몰리면 어떻게 하나요?',
        answer:
          '<strong>먼저 가해한 쪽과 부상 정도를 정황·영상으로 구분해 다투는 영역입니다.</strong> 매장 CCTV·목격자 진술을 확보.',
      },
      {
        question: '술집 CCTV는 꼭 필요한가요?',
        answer:
          '<strong>시비부터 폭행까지 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧을 수 있어 즉시 보존 요청.',
      },
      {
        question: '상대가 멍도 없다고 우기면 어떻게 하나요?',
        answer:
          '<strong>진단서 근접성·부위 일치와 영상·정황 자료로 다투는 영역입니다.</strong> 진료기록·CCTV를 시간순으로 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '상해진단서 증명력 다툼', href: '/guide/assault/assault-diagnosis-evidentiary-value' },
      { label: '술자리 시비 폭행 대응', href: '/guide/assault/assault-drunken-conflict-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 2. assault-parking-conflict-track ───
  {
    domain: 'assault',
    slug: 'assault-parking-conflict-track',
    keyword: '주차 시비 폭행 위험한 물건 휴대',
    questionKeyword: '주차 문제로 시비가 붙은 상대가 차에서 공구나 골프채 같은 물건을 들고 나와 위협하며 저를 밀치고 때려 다쳤어요. 직접 그 물건으로 때리진 않았는데도 위험한 물건을 휴대한 특수상해·특수협박으로 함께 물을 수 있는지 막막합니다.',
    ctaKeyword: '주차 시비 폭행 위험한 물건 휴대 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '주차 시비 폭행 — 5단계 위험한 물건 휴대 점검 | 로앤가이드',
      description:
        '주차 시비 끝에 상대가 공구·골프채를 들고 나와 위협·폭행해 다쳤다면 형법 제258조의2 특수상해의 위험한 물건 휴대 판단 기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"좁은 주차장에서 주차 문제로 상대 운전자와 시비가 붙었는데, 상대가 갑자기 자기 차 트렁크에서 공구나 골프채 같은 물건을 꺼내 들고 나와 \'가만 안 둔다\'며 위협하더니 저를 밀치고 때려 팔과 어깨에 통증과 멍이 생긴 피해자입니다. 그 물건으로 직접 내리치지는 않았지만, 손에 든 채 다가와 겁을 주고 그 상태에서 저를 폭행한 거예요. 직접 그 물건으로 가격하지 않았는데도 위험한 물건을 \'휴대\'한 특수상해·특수협박으로 함께 책임을 물을 수 있는지, 어디부터 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제258조의2 제1항은 위험한 물건을 휴대해 상해한 특수상해를, 같은 법 제284조는 위험한 물건을 휴대한 특수협박을 규정하는 영역입니다. 판례·실무는 위험한 물건을 \'휴대하여\'란 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지하거나 몸에 지니는 경우를 의미하고, 그 의도가 있었는지는 범행 동기·휴대 경위·사용 방법·인적 관계·전후 정황을 합리적으로 고려해 판단하며, 실제로 그 물건을 범행에 사용했을 것까지 요구되지는 않고 현실적으로 손에 쥐고 있을 필요도 없다고 보는 본 사례 흐름이 있는 영역입니다. 주차 시비 + 물건 소지 + 위협·폭행 결합은 \'위험한 물건 휴대·특수상해 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 휴대 의도 ② 사용 정황 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 휴대 ② 정황 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴대 의도·사용 정황·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴대 의도</strong> — 상대가 현장에서 사용하려는 의도로 물건을 소지·지녔는지 정리.</li>\n<li><strong>② 사용 정황</strong> — 물건의 종류·크기, 위협 방법, 다가온 거리 등 정황 정리.</li>\n<li><strong>③ 고소</strong> — 특수상해(제258조의2)·특수협박(제284조)·상해 적용 갈래 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위험한 물건을 \'휴대하여\'는 현장에서 사용하려는 의도로 소지하거나 몸에 지닌 경우를 뜻하고, 실제로 그 물건으로 가격했을 것까지 요구되지 않으며 반드시 손에 쥐고 있어야 하는 것도 아닌 영역. 물건의 종류·위협 방법·다가온 거리 등 사용 의도를 드러내는 정황을 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위·문제된 물건 사진 확보.</li>\n<li><strong>2단계 — 휴대·위협 정황 정리 (수일 내)</strong> — 물건 종류·소지 경위, 위협 방법·다가온 거리 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·블랙박스 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차 시비 폭행 위험한 물건 휴대·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 휴대 의도·사용 정황·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>주차장 CCTV·차량 블랙박스 영상 (물건 소지·위협)</strong></li>\n<li><strong>문제된 물건·다친 부위 사진 (시간정보 포함)</strong></li>\n<li><strong>주차 시비·위협·폭행 경위 메모 (육하원칙)</strong></li>\n<li><strong>물건 종류·크기·다가온 거리 기록 (휴대 의도)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>목격자·관리사무소 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위험한 물건을 직접 휘두르지 않았더라도 현장에서 사용하려는 의도로 소지·지녔다면 특수상해·특수협박이 검토될 수 있으므로, 물건의 종류·크기와 위협 방법·다가온 거리 등 의도를 드러내는 정황을 구체적으로 정리해두는 것이 도움이 됩니다. 주차장 CCTV·블랙박스는 물건 소지와 위협 정황을 보여줄 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>휴대 의도</strong> — 현장에서 사용하려는 의도로 물건을 소지했는지.</li>\n<li><strong>위험한 물건</strong> — 그 물건이 위험한 물건으로 평가되는지.</li>\n<li><strong>실제 사용 여부</strong> — 직접 가격하지 않아도 휴대로 인정되는지.</li>\n<li><strong>상해·협박 성립</strong> — 상해 정도와 위협의 협박 해당 여부.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위험한 물건을 \'휴대하여\'의 의미와 판단기준',
        summary:
          '대법원 2023도18812(대법원, 2024.06.13 선고) 영역에서 법원은 특수상해죄·특수협박죄의 구성요건인 위험한 물건을 \'휴대하여\'는 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지하거나 몸에 지니는 경우를 의미하고, 그 의도가 있었는지는 범행 동기·휴대 경위·사용 방법·인적 관계·전후 정황 등을 합리적으로 고려해 판단해야 하며, 범행 현장에서 사용하려는 의도 아래 소지·지닌 이상 실제로 그 물건을 범행에 사용했을 것까지 요구되지 않고, 현장에 있는 위험한 물건을 사실상 지배하면서 언제든 곧바로 사용할 수 있는 상태에 두면 충분하므로 반드시 현실적으로 손에 쥐고 있는 등 물리적으로 부착돼 있어야 하는 것은 아니라고 판시했습니다. 주차 시비 폭행 사안에서도 위험한 물건 휴대와 특수상해 성립을 검토해볼 수 있습니다.',
        takeaway: '주차 시비 + 물건 소지 + 위협·폭행 결합 시 위험한 물건 휴대·특수상해 평가 검토 영역 — 물건 종류·위협 정황·CCTV 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '물건으로 직접 때리지 않았는데도 특수상해가 되나요?',
        answer:
          '<strong>현장에서 사용하려는 의도로 소지했다면 직접 사용하지 않아도 휴대로 평가될 수 있는 영역입니다.</strong> 소지 경위·위협 정황을 정리.',
      },
      {
        question: '손에 쥐고 있어야만 휴대가 인정되나요?',
        answer:
          '<strong>사실상 지배해 곧바로 사용할 수 있는 상태면 반드시 손에 쥐고 있을 필요는 없는 영역입니다.</strong> 물건의 위치·접근성을 기록.',
      },
      {
        question: '공구나 골프채도 위험한 물건인가요?',
        answer:
          '<strong>물건의 종류·크기·사용 방법에 따라 위험한 물건으로 평가될 수 있는 영역입니다.</strong> 물건 사진·정황을 확보.',
      },
      {
        question: '블랙박스·CCTV가 꼭 필요한가요?',
        answer:
          '<strong>물건 소지와 위협 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 영상이 덮어쓰이지 않도록 즉시 보존.',
      },
      {
        question: '협박만 받고 안 맞아도 다툴 수 있나요?',
        answer:
          '<strong>위험한 물건을 휴대한 위협은 특수협박으로 다툴 수 있는 영역입니다.</strong> 위협 발언·정황을 시간순으로 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '특수상해·특수협박 성립', href: '/guide/assault/assault-special-injury-threat-standard' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '주차 시비 분쟁 대응', href: '/guide/assault/assault-parking-conflict-response' },
      { label: 'CCTV·블랙박스 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 3. assault-sports-team-track ───
  {
    domain: 'assault',
    slug: 'assault-sports-team-track',
    keyword: '운동부 선후배 폭행 훈육 빙자',
    questionKeyword: '운동부에서 선배가 훈육·기합이라며 반복적으로 저를 때리고 신체를 제압해 다쳤어요. 지도나 기합이라는 명목이면 폭행이 정당행위로 넘어가는 건지, 어떤 순서로 신고해야 하는지 막막합니다.',
    ctaKeyword: '운동부 선후배 폭행 훈육 빙자 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '운동부 선후배 폭행 — 5단계 정당행위·신고 점검 | 로앤가이드',
      description:
        '운동부에서 훈육·기합을 빙자한 폭행으로 다쳤다면 형법 제257조·제260조 적용과 사회상규상 정당행위 한계, 신고 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"운동부 생활을 하면서 선배가 \'정신 차리게 하는 훈육\'이라거나 \'기합\'이라며 반복적으로 저를 밀치고 때리고, 때로는 오랫동안 신체를 강하게 제압해 멍과 통증이 생긴 피해자입니다. 지도나 군기라는 명목으로 벌어지다 보니 주변에서도 \'운동부는 원래 그렇다\'며 넘어가려 하는데, 정작 저는 다치고 위축돼 견디기 힘들어요. 지도·훈육·기합이라는 명목만 붙으면 이런 폭행이 정당행위로 넘어가는 것인지, 아니면 그래도 폭행·상해로 신고할 수 있는지, 어떤 순서로 진행해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을, 같은 법 제20조는 사회상규에 위배되지 않는 행위의 정당행위를 규정하는 영역입니다. 판례·실무는 어떤 목적이 정당하다 해도 통상의 방식·정도를 벗어나 신체에 비정상적이거나 과도한 유형력을 행사하고 신체의 자유를 과도하게 제압해 상해까지 입힌 경우라면, 비록 지도·훈육 등의 명목으로 이뤄졌더라도 사회상규상 용인되는 정당행위라고 볼 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 운동부 + 선후배 위계 + 훈육 빙자 폭행 결합은 \'정당행위 한계·폭행/상해 신고\' 검토가 가능한 트랙입니다. 피해자라면 ① 행위 정리 ② 정당행위 한계 ③ 신고·고소 ④ 형사 절차 ⑤ 민사·기관 5중 트랙이 가능한 영역. 대응은 ① 행위 ② 한계 ③ 신고 ④ 형사 ⑤ 병행 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 운동부 선후배 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위 정리·정당행위 한계·신고/고소·형사 절차·민사/기관 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 정리</strong> — 폭행·제압의 일시·방법·반복성과 부상 정도를 시간순으로 정리.</li>\n<li><strong>② 정당행위 한계</strong> — 통상의 지도 방식·정도를 벗어난 과도한 유형력인지 정리.</li>\n<li><strong>③ 신고·고소</strong> — 폭행(제260조)·상해(제257조) 고소장 접수 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사·기관</strong> — 손해배상과 학교·체육단체 등 기관 신고 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지도·훈육·기합이라는 명목이 붙더라도 통상의 방식·정도를 벗어나 과도한 유형력을 행사하고 신체의 자유를 과도하게 제압해 상해까지 입힌 경우라면 사회상규상 정당행위로 보기 어려운 영역. 행위의 반복성·과도함과 부상 정도를 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 행위·정황 정리 (수일 내)</strong> — 폭행·제압의 일시·방법·반복성, 훈육 빙자 정황 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·정황 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 민사·기관 병행 (병행)</strong> — 손해배상, 학교·체육단체 신고 등 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">운동부 선후배 폭행 정당행위·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위 정리·정당행위 한계·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>폭행·제압 일시·방법·반복성 메모 (시간순)</strong></li>\n<li><strong>훈련장·기숙사 CCTV·촬영 영상 (정황)</strong></li>\n<li><strong>다친 부위 사진·통원 내역 (부상 입증)</strong></li>\n<li><strong>동료·목격 부원 진술·연락처</strong></li>\n<li><strong>메신저·SNS 등 폭행·지시 정황 기록</strong></li>\n<li><strong>학교·체육단체 신고·면담 자료 (해당 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'지도\'나 \'기합\'이라는 명목이 붙더라도 통상의 방식·정도를 벗어난 과도한 유형력은 정당행위로 보기 어려우므로, 폭행·제압의 반복성과 과도함, 부상 정도를 구체적으로 정리해두는 것이 도움이 됩니다. 훈련장·기숙사 CCTV나 동료 진술, 메신저 정황은 사라지기 쉬워 가능한 한 빨리 확보·보존해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당행위 한계</strong> — 통상의 지도 방식·정도를 벗어났는지.</li>\n<li><strong>과도한 유형력</strong> — 신체 제압·구타가 과도한지.</li>\n<li><strong>반복성·상습</strong> — 반복된 폭행습벽으로 평가되는지.</li>\n<li><strong>위계·동조</strong> — 위계로 신고·진술 확보가 어려운지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명목이 붙은 유형력의 정당행위 한계',
        summary:
          '대법원 2008도2695(대법원, 2008.08.21 선고) 영역에서 법원은 어떤 목적의 정당성이 인정되는 한도 내에서 신체에 가볍게 손을 얹거나 약간 누르는 정도의 행위는 그 목적과 수단 면에서 정당성이 인정될 수 있으나, 그러한 명목을 내세워 통상의 일반적인 방식과 정도를 벗어나 신체에 비정상적이거나 과도한 유형력을 행사하고 신체의 자유를 과도하게 제압해 상해까지 입힌 경우라면 비록 그 명목과 방법으로 이뤄졌더라도 사회상규상 용인되는 정당행위라고 볼 수 없다고 판시했습니다. 치료 목적을 내세워 장시간 신체를 강제로 제압하는 등 과도한 유형력을 행사해 상해를 입힌 사안에서 정당행위에 해당하지 않는다고 본 사례입니다. 운동부 선후배 훈육 빙자 폭행 사안에서도 정당행위 한계를 검토해볼 수 있습니다.',
        takeaway: '운동부 + 선후배 위계 + 훈육 빙자 폭행 결합 시 정당행위 한계·폭행/상해 신고 검토 영역 — 행위 반복성·부상 정도·정황 영상 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '훈육·기합이라고 하면 폭행이 아닌 게 되나요?',
        answer:
          '<strong>통상의 방식·정도를 벗어난 과도한 유형력은 정당행위로 보기 어려운 영역입니다.</strong> 행위의 과도함·반복성을 정리.',
      },
      {
        question: '선배가 군기라고 우기면 어떻게 다투나요?',
        answer:
          '<strong>지도 명목이라도 신체 자유를 과도하게 제압해 상해를 입혔다면 정당행위 한계를 넘는 영역입니다.</strong> 부상 정도·정황을 입증.',
      },
      {
        question: '반복적으로 맞았는데 한꺼번에 신고할 수 있나요?',
        answer:
          '<strong>반복된 폭행·상해를 시간순으로 정리해 함께 신고할 수 있는 영역입니다.</strong> 일시·방법·반복성을 기록.',
      },
      {
        question: '학교·체육단체에도 같이 신고할 수 있나요?',
        answer:
          '<strong>형사 신고와 학교·체육단체 신고를 병행할 수 있는 영역입니다.</strong> 각 절차에 맞는 자료를 정리.',
      },
      {
        question: '동료들이 증언을 꺼리면 어떻게 하나요?',
        answer:
          '<strong>진단서·메신저·CCTV 등 정황 증거로 보강하는 영역입니다.</strong> 사라지기 쉬운 자료를 먼저 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '정당행위·사회상규 판단', href: '/guide/assault/assault-justifiable-act-standard' },
      { label: '운동부·단체 내 폭행 대응', href: '/guide/assault/assault-sports-team-violence-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 4. assault-lineal-ascendant-track ───
  {
    domain: 'assault',
    slug: 'assault-lineal-ascendant-track',
    keyword: '존속폭행 부모 폭행 상습',
    questionKeyword: '같이 사는 가족이 부모인 저를 반복적으로 밀치고 때려 멍과 통증이 생겼어요. 가족 사이 일이라 신고를 망설였는데, 부모를 향한 폭행·상해가 더 무겁게 다뤄지는지, 반복되면 어떻게 정리되는지 막막합니다.',
    ctaKeyword: '존속폭행 부모 폭행 상습 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '존속폭행 부모 폭행 — 5단계 상습·죄수 점검 | 로앤가이드',
      description:
        '자녀에게 반복적으로 폭행·상해를 당해 막막하다면 형법 제257조·제260조 존속 가중과 상습존속상해 죄수, 신고 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"함께 사는 자녀가 부모인 저를 반복적으로 밀치고 때리고, 때로는 물건을 던지거나 거칠게 몸을 잡아 멍과 통증이 생긴 피해자입니다. 가족 사이의 일이라 \'그래도 자식인데\' 하는 마음에 오래 참고 신고를 망설여 왔는데, 폭행이 점점 잦아지고 정도도 심해져 더는 견디기 어려워요. 부모를 향한 폭행·상해가 일반 폭행보다 더 무겁게 다뤄지는지, 이렇게 반복적으로 벌어진 경우 어떻게 정리되는지, 어떤 순서로 신고·대응해야 하는지 막막한 상태입니다." 형법 제260조 제2항은 자기 또는 배우자의 직계존속에 대한 존속폭행을, 같은 법 제257조 제2항은 존속상해를 일반 폭행·상해보다 무겁게 규정하고, 상습으로 범한 경우에는 상습범 가중이 적용되는 영역입니다. 판례·실무는 직계존속인 피해자를 폭행하고 상해를 가한 것이 존속에 대한 동일한 폭력습벽의 발현에 의한 것으로 인정되는 경우, 그중 법정형이 더 중한 상습존속상해죄에 나머지 행위들을 포괄시켜 하나의 죄가 성립한다고 보는 본 사례 흐름이 있는 영역입니다. 직계존속 + 반복 폭행·상해 + 동일 폭력습벽 결합은 \'존속 가중·상습 죄수\' 검토가 가능한 트랙입니다. 피해자라면 ① 관계·행위 ② 존속 가중 ③ 신고·고소 ④ 형사 절차 ⑤ 보호·민사 5중 트랙이 가능한 영역. 대응은 ① 관계 ② 가중 ③ 신고 ④ 형사 ⑤ 보호 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 존속폭행 부모 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·행위·존속 가중·신고/고소·형사 절차·보호/민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관계·행위</strong> — 직계존속 관계와 폭행·상해의 일시·방법·반복성 정리.</li>\n<li><strong>② 존속 가중</strong> — 존속폭행(제260조 제2항)·존속상해(제257조 제2항) 적용 여부 정리.</li>\n<li><strong>③ 신고·고소</strong> — 반복 정황까지 포함한 신고·고소장 접수 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 보호·민사</strong> — 접근금지 등 보호조치와 손해배상 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부모 등 직계존속에 대한 폭행·상해는 일반 폭행·상해보다 무겁게 규정되고, 동일한 폭력습벽에서 비롯된 반복 폭행·상해는 법정형이 더 중한 상습존속상해죄에 포괄돼 하나의 죄로 정리될 수 있는 영역. 관계 입증과 반복 정황을 시간순으로 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 관계·반복 정황 정리 (수일 내)</strong> — 가족관계 입증, 폭행·상해의 일시·방법·반복성 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·정황 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 보호·민사 병행 (병행)</strong> — 접근금지 등 보호조치, 손해배상 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">존속폭행 부모 폭행 상습·죄수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관계·존속 가중·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서 (직계존속 관계 입증)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>폭행·상해 일시·방법·반복성 메모 (시간순)</strong></li>\n<li><strong>다친 부위 사진·통원 내역 (부상 입증)</strong></li>\n<li><strong>집안 CCTV·녹취·메신저 정황 기록</strong></li>\n<li><strong>목격 가족·이웃 진술·연락처</strong></li>\n<li><strong>보호조치·상담 신청 자료 (해당 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부모 등 직계존속에 대한 폭행·상해는 가중되고 동일 폭력습벽의 반복은 상습존속상해로 포괄될 수 있으므로, 가족관계증명서로 관계를 입증하고 반복된 폭행·상해의 일시·방법을 시간순으로 정리해두는 것이 도움이 됩니다. 가족 사이라 신고를 망설이기 쉽지만 신변 위협이 있다면 보호조치·상담 기관을 함께 활용해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>존속 가중</strong> — 직계존속 관계로 가중이 적용되는지.</li>\n<li><strong>상습·죄수</strong> — 동일 폭력습벽의 반복으로 포괄되는지.</li>\n<li><strong>관계 입증</strong> — 직계존속 관계가 명확히 입증되는지.</li>\n<li><strong>처벌 의사</strong> — 가족이라 처벌·합의 의사가 변하는지.</li>\n<li><strong>보호 필요</strong> — 동거·신변 위협으로 보호조치가 필요한지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 존속에 대한 상습 폭행·상해의 죄수',
        summary:
          '대법원 2002도7335(대법원, 2003.02.28 선고) 영역에서 법원은 직계존속인 피해자를 폭행하고 상해를 가한 것이 존속에 대한 동일한 폭력습벽의 발현에 의한 것으로 인정되는 경우, 그중 법정형이 더 중한 상습존속상해죄에 나머지 행위들을 포괄시켜 하나의 죄만이 성립한다고 판시했습니다. 또한 죄수평가를 잘못했더라도 결과적으로 처단형의 범위에는 아무런 차이가 없는 경우에는 판결 결과에 영향을 미친 위법이 있다고 보기 어렵다고 본 사례입니다. 부모를 향한 반복 폭행·상해 사안에서도 존속 가중과 상습 죄수를 검토해볼 수 있습니다.',
        takeaway: '직계존속 + 반복 폭행·상해 + 동일 폭력습벽 결합 시 존속 가중·상습 죄수 검토 영역 — 가족관계·반복 정황·진단서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '부모를 때린 폭행은 더 무겁게 다뤄지나요?',
        answer:
          '<strong>직계존속에 대한 폭행·상해는 존속 가중으로 더 무겁게 규정된 영역입니다.</strong> 가족관계증명서로 관계를 입증.',
      },
      {
        question: '반복적으로 맞았는데 한 사건으로 정리되나요?',
        answer:
          '<strong>동일 폭력습벽의 반복은 상습존속상해로 포괄될 수 있는 영역입니다.</strong> 반복 정황을 시간순으로 기록.',
      },
      {
        question: '가족이라 신고를 망설이게 되는데 가능할까요?',
        answer:
          '<strong>가족 사이여도 폭행·상해로 신고할 수 있는 영역입니다.</strong> 신변 위협이 있으면 보호조치·상담을 함께 검토.',
      },
      {
        question: '집안 일이라 증거가 거의 없는데 어떻게 하나요?',
        answer:
          '<strong>진단서·사진·녹취·메신저 등 정황 증거로 보강하는 영역입니다.</strong> 사라지기 쉬운 자료를 먼저 확보.',
      },
      {
        question: '신고 후 같이 살기 불안하면 어떻게 하나요?',
        answer:
          '<strong>접근금지 등 보호조치와 상담 기관 활용을 검토하는 영역입니다.</strong> 신변 위협 정황을 함께 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '존속폭행·존속상해 가중', href: '/guide/assault/assault-lineal-ascendant-aggravation' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '가정 내 폭력 대응', href: '/guide/assault/assault-family-violence-response' },
      { label: '접근금지·보호조치', href: '/guide/assault/assault-protective-order' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 5. dui-license-revocation-appeal-track ───
  {
    domain: 'dui',
    slug: 'dui-license-revocation-appeal-track',
    keyword: '음주 면허취소 행정심판 측정 정확성',
    questionKeyword: '음주운전으로 면허가 취소됐는데, 측정 당시 입 헹굼 같은 절차도 제대로 안 거치고 위드마크로 계산했다는 말을 들었어요. 혐의를 받고 있다면 측정·계산이 부정확했다며 면허취소를 행정심판으로 다툴 수 있는지, 청구 기한은 언제까지인지 막막합니다.',
    ctaKeyword: '음주 면허취소 행정심판 측정 정확성 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 면허취소 행정심판 — 5단계 측정·90일 점검 | 로앤가이드',
      description:
        '음주 면허취소를 측정 절차·위드마크 정확성 문제로 다투고 싶다면 도로교통법 제44조 측정 요건과 행정심판 90일 청구기한 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전으로 적발돼 운전면허가 취소되면서 출퇴근과 생계가 막막해진 사람입니다. 그런데 측정 당시 구강 내 잔류 알코올을 없애기 위한 입 헹굼 같은 절차가 제대로 이뤄졌는지 의문이 들고, 시간이 지나 위드마크 공식으로 운전 시점 수치를 계산했다는 말도 들었어요. 측정·계산이 정확하지 않았다면 그 결과만으로 면허취소를 그대로 받아들이기 어렵다는 생각이 들어, 혐의를 받고 있다면 측정 절차·계산의 부정확성을 들어 행정심판으로 면허취소를 다툴 수 있는지, 청구 기한은 언제까지인지 막막한 상태입니다." 도로교통법 제44조 제1항·제2항은 술에 취한 상태의 운전 금지와 음주측정을, 같은 법 제93조는 음주운전에 따른 면허 취소·정지를, 행정심판법 제27조는 처분이 있음을 안 날부터 90일 이내의 청구기한을 정하는 영역입니다. 판례·실무는 음주측정 결과가 불이익한 처분의 근거가 될 수 있으므로 잔류 알코올로 잘못된 결과가 나오지 않도록 미리 필요한 조치를 취하는 등 정확성·객관성이 담보되는 공정한 방법·절차에 따라 이뤄져야 하고, 위드마크 공식 적용의 전제가 되는 음주량·음주 시각·체중 등 개별 사실은 엄격한 증명을 요한다고 보는 본 사례 흐름이 있는 영역입니다. 음주 면허취소 + 측정 절차 의문 + 위드마크 계산 결합은 \'측정 정확성·재량권·90일 청구\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 처분 내용 ② 청구기한 ③ 측정 정확성 ④ 정상자료 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 처분 ② 기한 ③ 측정 ④ 정상 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 면허취소 행정심판 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분 내용·청구기한·측정 정확성·정상자료·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 내용</strong> — 취소된 면허 종류·처분 사유·혈중알코올농도 확인.</li>\n<li><strong>② 청구기한</strong> — 처분을 안 날부터 90일 이내 행정심판 청구기한 점검.</li>\n<li><strong>③ 측정 정확성</strong> — 입 헹굼 등 잔류 알코올 조치·측정 절차, 위드마크 전제사실 정리.</li>\n<li><strong>④ 정상자료</strong> — 생계·운전 필요성·반성 등 감경 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 행정심판 청구·집행정지·재결 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주측정은 잔류 알코올로 잘못된 결과가 나오지 않도록 미리 필요한 조치를 취하는 등 정확성·객관성이 담보되는 절차로 이뤄져야 하고, 위드마크 계산은 음주량·음주 시각·체중 등 전제사실의 엄격한 증명이 요구되는 영역. 청구기한(처분을 안 날부터 90일)을 지키면서 측정·계산의 정확성을 점검하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 행정심판 5단계',
        content:
          '<p><strong>A. 중앙행정심판위·도로교통공단·경찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지 확인 (즉시)</strong> — 운전면허취소처분 통지서·처분 사유·혈중알코올농도 확인.</li>\n<li><strong>2단계 — 청구기한 점검 (안 날부터 90일 내)</strong> — 처분을 안 날 기준 90일 청구기한, 집행정지 필요성 점검.</li>\n<li><strong>3단계 — 측정·계산 자료 정리 (가능한 빨리)</strong> — 적발보고서·측정 절차, 위드마크 전제사실(음주량·시각·체중) 점검.</li>\n<li><strong>4단계 — 행정심판 청구·집행정지 (기한 내)</strong> — 중앙행정심판위 청구서 제출, 집행정지 신청 검토.</li>\n<li><strong>5단계 — 재결 대응 (재결 후)</strong> — 인용·기각 재결에 따른 후속(행정소송 등) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 면허취소 행정심판 측정·90일 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 처분 내용·측정 정확성·정상자료 갈래입니다.</strong></p>\n<ul>\n<li><strong>운전면허취소처분 통지서 (처분 사유·일자)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>주취운전자 적발보고서 (측정 절차·경위)</strong></li>\n<li><strong>위드마크 전제사실 자료 (음주량·시각·체중)</strong></li>\n<li><strong>행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n<li><strong>생계·운전 필요성·반성 등 정상 자료</strong></li>\n<li><strong>처분을 안 날 입증 자료 (송달·수령 기록)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정심판은 처분이 있음을 안 날부터 90일 이내에 청구해야 하므로 통지서 수령일부터 기한을 점검하고, 측정 절차나 위드마크 계산의 정확성에 의문이 있다면 적발보고서·측정 결과지와 전제사실(음주량·시각·체중) 자료를 함께 정리해두는 것이 도움이 됩니다. 면허 공백을 줄이려면 청구와 함께 집행정지 신청도 검토하는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 절차</strong> — 잔류 알코올 조치 등 정확성·객관성이 담보됐는지.</li>\n<li><strong>위드마크 전제</strong> — 음주량·시각·체중 등 전제사실이 엄격히 증명됐는지.</li>\n<li><strong>재량권 일탈·남용</strong> — 처분이 현저히 타당성을 잃었는지.</li>\n<li><strong>청구기한</strong> — 처분을 안 날부터 90일 준수 여부.</li>\n<li><strong>집행정지</strong> — 재결 전 면허 공백을 줄일 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 결과와 위드마크 전제사실의 증명',
        summary:
          '대법원 2008도5531(대법원, 2008.08.21 선고) 영역에서 법원은 음주측정 결과가 운전면허 취소·정지 등 불이익한 처분의 근거가 될 수 있으므로 측정기나 구강 내 잔류 알코올로 잘못된 결과가 나오지 않도록 미리 필요한 조치를 취하는 등 정확성과 객관성이 담보되는 공정한 방법·절차에 따라 이뤄져야 하고, 그러한 방법·절차에 의하지 않은 결과는 쉽사리 유죄의 증거로 삼을 수 없으며, 위드마크 공식 적용의 전제가 되는 음주량·음주 시각·체중 등 개별 사실은 엄격한 증명을 요하므로 피고인을 평균인이라 쉽게 단정해서는 안 된다고 판시했습니다. 잔류 알코올 과다측정 방지 조치를 전혀 취하지 않았고 부적합한 체중 인수를 적용한 사정 등에 비추어 음주운전을 단정할 수 없다고 본 사례입니다. 음주 면허취소 행정심판 사안에서도 측정·계산의 정확성을 검토해볼 수 있습니다.',
        takeaway: '음주 면허취소 + 측정 절차 의문 + 위드마크 계산 결합 시 측정 정확성·재량권·90일 청구 검토 영역 — 통지서·측정 자료·청구기한 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '측정 절차가 부실했으면 면허취소를 다툴 수 있나요?',
        answer:
          '<strong>정확성·객관성이 담보되는 절차로 측정되지 않았다면 결과의 증명력을 다툴 수 있는 영역입니다.</strong> 적발보고서·측정 절차를 점검.',
      },
      {
        question: '위드마크 계산이 맞는지 어떻게 다투나요?',
        answer:
          '<strong>음주량·시각·체중 등 전제사실의 엄격한 증명이 요구되는 영역입니다.</strong> 전제사실 자료의 정확성을 정리.',
      },
      {
        question: '청구 기한은 언제까지인가요?',
        answer:
          '<strong>처분이 있음을 안 날부터 90일 이내에 청구하는 것이 원칙인 영역입니다.</strong> 통지서 수령일부터 기한을 계산.',
      },
      {
        question: '재결 전까지 운전은 어떻게 하나요?',
        answer:
          '<strong>집행정지 신청으로 면허 공백을 줄일 수 있는지 검토하는 영역입니다.</strong> 청구와 함께 집행정지를 함께 신청.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>취소처분 통지서·측정 결과·청구기한 점검이 출발점인 영역입니다.</strong> 측정 절차·위드마크 자료와 정상자료를 함께 준비.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '음주 측정 절차·정확성', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '위드마크 공식·혈중농도 추정', href: '/guide/dui/dui-widmark-bac-estimation' },
      { label: '집행정지 신청', href: '/guide/dui/dui-suspension-of-execution' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },

  // ─── 6. dui-personal-mobility-track ───
  {
    domain: 'dui',
    slug: 'dui-personal-mobility-track',
    keyword: '개인형이동장치 음주운전 상승기 측정',
    questionKeyword: '전동킥보드 같은 개인형이동장치를 음주 상태로 타다 단속됐는데, 측정이 운전 직후가 아니라 시간이 좀 지나 이뤄졌고 그때가 혈중알코올농도 상승기였다고 들었어요. 혐의를 받고 있다면 운전 당시 수치가 기준치 이상이었는지 다툴 수 있는지 막막합니다.',
    ctaKeyword: '개인형이동장치 음주운전 상승기 측정 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '킥보드 음주운전 — 5단계 상승기·측정시점 점검 | 로앤가이드',
      description:
        '개인형이동장치 음주운전이 상승기 측정 시점 때문에 운전 당시 수치가 다퉈진다면 도로교통법 제44조 음주운전과 측정시점 증명 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전동킥보드 같은 개인형이동장치를 음주 상태로 잠깐 타다가 단속에 걸린 사람입니다. 그런데 음주측정이 운전을 마친 직후가 아니라 어느 정도 시간이 지난 뒤에 이뤄졌고, 마침 그 시점이 혈중알코올농도가 오르고 있는 상승기였다는 말을 들었어요. 측정된 수치는 처벌기준치를 약간 넘었지만, 정작 운전하던 그 순간에는 아직 기준치에 이르지 않았을 수도 있다는 생각이 들어요. 혐의를 받고 있다면 상승기 측정이라는 사정만으로 운전 당시 수치가 기준치 이상이었는지 다툴 수 있는지, 어떻게 정리해야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항·제4항은 술에 취한 상태의 운전 금지와 처벌기준 혈중알코올농도를, 같은 법 제148조의2는 그 위반에 대한 처벌을 정하는 영역입니다. 판례·실무는 운전 시점과 측정 시점 사이에 시간 간격이 있고 그때가 상승기로 보이더라도 그 사정만으로 운전 시점 수치가 기준치를 초과했다는 증명이 언제나 불가능한 것은 아니고, 운전과 측정 사이의 시간 간격·측정 수치와 기준치의 차이·음주 지속 시간 및 음주량·단속 당시 행동 양상·사고 경위 등 여러 사정을 종합해 논리와 경험칙에 따라 합리적으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 개인형이동장치 + 상승기 측정 + 기준치 근소 초과 결합은 \'운전 시점 혈중알코올농도 증명\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 시점 ② 수치 차이 ③ 음주 정황 ④ 운전 양상 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 시점 ② 수치 ③ 음주 ④ 양상 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 개인형이동장치 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 시점·수치 차이·음주 정황·운전 양상·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 시점</strong> — 운전 종료와 측정 사이의 시간 간격, 상승기 여부 정리.</li>\n<li><strong>② 수치 차이</strong> — 측정된 혈중알코올농도와 처벌기준치의 차이 정리.</li>\n<li><strong>③ 음주 정황</strong> — 음주 시작·종료 시각, 음주량 등 정황 정리.</li>\n<li><strong>④ 운전 양상</strong> — 단속·측정 당시 행동, 사고가 있었다면 그 경위 정리.</li>\n<li><strong>⑤ 대응</strong> — 운전 시점 수치 증명 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정 시점이 상승기로 보인다는 사정만으로 운전 시점 수치 초과 증명이 언제나 불가능한 것은 아니고, 운전·측정 사이 간격, 수치와 기준치의 차이, 음주 지속 시간·음주량, 행동 양상·사고 경위 등을 종합해 합리적으로 판단하는 영역. 측정 시점·수치 차이·음주 정황을 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 측정·단속 자료 확인 (즉시~당일)</strong> — 측정 결과지·측정 시각, 운전 종료 시각·적발보고서 확인.</li>\n<li><strong>2단계 — 시간 간격·수치 차이 정리 (수일 내)</strong> — 운전·측정 간격, 측정 수치와 기준치의 차이 점검.</li>\n<li><strong>3단계 — 음주·운전 정황 정리 (공판 전)</strong> — 음주 시작·종료 시각·음주량, 운전 양상·사고 경위 정리.</li>\n<li><strong>4단계 — 양형·합의 자료 정리 (병행)</strong> — 사고 시 피해 회복·합의, 초범·반성 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 운전 시점 수치 증명 쟁점 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">개인형이동장치 음주운전 상승기 측정 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 시점·수치 차이·음주 정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>주취운전자 적발보고서 (운전 종료 시각·경위)</strong></li>\n<li><strong>운전·측정 시간 간격 정리 메모 (시간순)</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 기록</strong></li>\n<li><strong>단속·운전 정황 영상·CCTV (행동 양상)</strong></li>\n<li><strong>사고가 있었다면 사고 경위·진단서 (해당 시)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정 시점이 상승기였다면 운전 당시 수치가 기준치에 이르렀는지가 핵심 쟁점이 되므로 운전 종료 시각과 측정 시각의 간격, 측정 수치와 기준치의 차이를 정확히 정리해두는 것이 도움이 됩니다. 다만 시간 간격이 짧고 정황이 뒷받침되면 운전 당시에도 기준치 이상이라고 인정될 수 있어, 음주 시각·음주량 등 정황을 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 시점</strong> — 운전·측정 간격과 상승기 여부.</li>\n<li><strong>수치 차이</strong> — 측정 수치와 기준치의 차이 정도.</li>\n<li><strong>운전 시점 증명</strong> — 운전 당시 수치가 기준치 이상이었는지.</li>\n<li><strong>음주·행동 정황</strong> — 음주 지속 시간·음주량·행동 양상.</li>\n<li><strong>양형 사정</strong> — 사고 유무·피해 회복·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상승기 측정과 운전 시점 혈중알코올농도 증명',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 영역에서 법원은 운전 시점과 측정 시점 사이에 시간 간격이 있고 그때가 혈중알코올농도 상승기로 보이는 경우라 하더라도 그 사정만으로 운전 시점 수치가 처벌기준치를 초과했다는 증명이 언제나 불가능하다고 볼 수는 없고, 운전 당시에도 기준치 이상이었는지는 운전과 측정 사이의 시간 간격, 측정 수치와 기준치의 차이, 음주 지속 시간 및 음주량, 단속·측정 당시 행동 양상, 사고가 있었다면 그 경위 등 여러 사정을 종합해 논리와 경험칙에 따라 합리적으로 판단해야 한다고 판시했습니다. 운전 종료 후 불과 약 12분 뒤에 측정된 사정 등에 비추어 상승기 가능성을 감안하더라도 운전 당시 기준치 이상으로 보는 것이 경험칙에 부합한다고 본 사례입니다. 개인형이동장치 음주운전 사안에서도 운전 시점 수치 증명을 검토해볼 수 있습니다.',
        takeaway: '개인형이동장치 + 상승기 측정 + 기준치 근소 초과 결합 시 운전 시점 혈중알코올농도 증명 검토 영역 — 측정 시점·수치 차이·음주 정황 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상승기에 측정됐으면 운전 당시엔 기준치 미만 아닌가요?',
        answer:
          '<strong>상승기라는 사정만으로 운전 시점 초과 증명이 언제나 부정되는 것은 아닌 영역입니다.</strong> 시간 간격·수치 차이·정황을 종합해 판단.',
      },
      {
        question: '측정 시각과 운전 시각 차이가 중요한가요?',
        answer:
          '<strong>운전·측정 사이 간격이 짧을수록 운전 당시 수치 인정에 영향을 줄 수 있는 영역입니다.</strong> 운전 종료·측정 시각을 정확히 정리.',
      },
      {
        question: '킥보드도 음주운전 처벌 대상인가요?',
        answer:
          '<strong>개인형이동장치 음주운전도 처벌 대상이 될 수 있는 영역입니다.</strong> 측정 수치와 운전 정황을 함께 확인.',
      },
      {
        question: '측정 수치가 기준치를 살짝 넘었는데 다툴 여지가 있나요?',
        answer:
          '<strong>수치와 기준치의 차이가 작을수록 운전 시점 증명을 더 신중히 보는 영역입니다.</strong> 수치 차이·음주 정황을 정리.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 결과지·적발보고서·운전 종료 시각 확보가 출발점인 영역입니다.</strong> 음주 시각·음주량과 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '개인형이동장치 음주운전 성립', href: '/guide/dui/dui-personal-mobility-standard' },
      { label: '혈중알코올농도 상승기 측정', href: '/guide/dui/dui-rising-phase-measurement' },
      { label: '운전 시점 수치 증명', href: '/guide/dui/dui-driving-time-bac-proof' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
    ],
  },

  // ─── 7. dui-repeat-offense-aggravation-track ───
  {
    domain: 'dui',
    slug: 'dui-repeat-offense-aggravation-track',
    keyword: '음주운전 재범 가중처벌 추가 음주',
    questionKeyword: '음주운전 재범으로 가중처벌이 걸린 상황인데, 사고 직후 편의점에서 술을 더 사 마신 뒤 한참 지나 측정돼 수치가 높게 나왔어요. 혐의를 받고 있다면 운전 당시 수치가 기준치 이상이었다고 단정할 수 있는지 막막합니다.',
    ctaKeyword: '음주운전 재범 가중처벌 추가 음주 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주운전 재범 — 5단계 추가 음주·측정시점 점검 | 로앤가이드',
      description:
        '음주운전 재범 가중에 운전 후 추가 음주가 겹쳐 측정 수치가 높게 나왔다면 도로교통법 제148조의2 가중과 운전 시점 증명 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"과거 음주운전 전력이 있어 이번에는 재범으로 가중처벌이 문제 되는 상황의 운전자입니다. 그런데 사고가 난 직후 경황이 없어 편의점에서 술을 더 사 거의 다 마셨고, 그 뒤 한참 지나 음주측정을 받았더니 수치가 상당히 높게 나왔어요. 측정 수치만 보면 높지만, 그건 운전을 마친 뒤 추가로 마신 술까지 합쳐진 것일 수 있어서, 정작 운전하던 순간의 수치가 처벌기준치 이상이었는지는 따로 따져봐야 할 것 같아요. 혐의를 받고 있다면 운전 당시 음주 시작·종료 시각이나 음주량을 확인할 구체적 자료가 부족한 상태에서 운전 당시 수치가 기준치 이상이었다고 단정할 수 있는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제148조의2는 위반 횟수에 따른 가중처벌을 정하는 영역입니다. 판례·실무는 음주운전 시점이 상승시점인지 하강시점인지 확정할 수 없는 상황에서 운전 종료 후 상당한 시간이 지나 측정된 수치가 기준치를 약간 넘은 경우 운전 시점 수치가 기준치를 초과했다고 단정하기 어렵고, 위드마크 공식 적용의 전제사실은 엄격한 증명을 요하며 산출치가 기준치를 근소하게 초과하는 경우 더욱 신중히 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 음주운전 재범 + 운전 후 추가 음주 + 측정 지연 결합은 \'운전 시점 증명·위드마크 신중 적용\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 시점 ② 추가 음주 ③ 전제사실 ④ 가중·양형 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 시점 ② 추가음주 ③ 전제 ④ 가중 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주운전 재범 가중처벌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 시점·추가 음주·전제사실·가중/양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 시점</strong> — 운전 종료와 측정 사이의 시간 간격, 상승·하강 여부 정리.</li>\n<li><strong>② 추가 음주</strong> — 운전 후 추가로 마신 술의 시각·양과 측정 수치 영향 정리.</li>\n<li><strong>③ 전제사실</strong> — 음주 시작·종료 시각·음주량 등 위드마크 전제사실 정리.</li>\n<li><strong>④ 가중·양형</strong> — 재범 가중 여부와 피해 회복·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 운전 시점 수치 증명 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운전 시점이 상승·하강 어느 쪽인지 확정할 수 없는 상황에서 운전 종료 후 상당한 시간이 지나 측정된 수치가 기준치를 약간 넘은 경우 운전 당시 수치 초과를 단정하기 어렵고, 운전 후 추가 음주가 겹치면 더욱 신중히 판단해야 하는 영역. 측정 시점·추가 음주·전제사실을 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 측정·단속 자료 확인 (즉시~당일)</strong> — 측정 결과지·측정 시각, 운전 종료 시각·적발보고서 확인.</li>\n<li><strong>2단계 — 추가 음주·시간 간격 정리 (수일 내)</strong> — 운전 후 음주 시각·양, 운전·측정 간격 점검.</li>\n<li><strong>3단계 — 전제사실·수치 정리 (공판 전)</strong> — 음주 시작·종료 시각·음주량, 측정 수치와 기준치 차이 정리.</li>\n<li><strong>4단계 — 가중·양형 자료 정리 (병행)</strong> — 재범 여부 확인, 피해 회복·초범·반성 등 양형 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 운전 시점 수치 증명·위드마크 쟁점 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주운전 재범 가중처벌 추가 음주 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 시점·추가 음주·전제사실 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>주취운전자 적발보고서 (운전 종료 시각·경위)</strong></li>\n<li><strong>운전 후 추가 음주 시각·양 기록 (영수증 등)</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 정리 메모</strong></li>\n<li><strong>편의점·매장 CCTV·구매 내역 (추가 음주 입증)</strong></li>\n<li><strong>과거 전력·재범 여부 확인 자료</strong></li>\n<li><strong>피해 회복·초범 정상·반성 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운전 종료 후 추가로 술을 마신 경우 측정 수치는 그 추가 음주분까지 합쳐진 것이라 운전 당시 수치와 다를 수 있으므로, 운전 후 음주 시각·양을 구매 내역·CCTV로 입증해두는 것이 핵심입니다. 음주 시작·종료 시각·음주량 같은 위드마크 전제사실은 엄격한 증명이 요구되므로 관련 자료를 가능한 한 구체적으로 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 시점</strong> — 상승·하강 확정 곤란과 운전·측정 간격.</li>\n<li><strong>추가 음주</strong> — 운전 후 음주가 측정 수치에 미친 영향.</li>\n<li><strong>위드마크 전제</strong> — 음주 시각·음주량 등 전제사실의 엄격한 증명.</li>\n<li><strong>재범 가중</strong> — 과거 전력에 따른 가중 적용 여부.</li>\n<li><strong>양형 사정</strong> — 피해 회복·초범 정상·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운전 후 추가 음주·측정 지연과 운전 시점 증명',
        summary:
          '대법원 2024도11906(대법원, 2025.07.18 선고) 영역에서 법원은 음주운전 시점이 혈중알코올농도의 상승시점인지 하강시점인지 확정할 수 없는 상황에서 운전 종료 후 상당한 시간이 지나 측정된 수치가 처벌기준치를 약간 넘은 경우 실제 운전 시점 수치가 기준치를 초과했다고 단정할 수 없고, 위드마크 공식 적용의 전제가 되는 개별적·구체적 사실은 엄격한 증명을 요하며 산출된 수치가 기준치를 근소하게 초과하는 정도라면 구성요건 사실 인정에 더욱 신중해야 한다고 판시했습니다. 운전 후 편의점에서 소주를 추가로 거의 마셨고 음주 시작·종료 시각·음주량을 확인할 객관적 자료가 부족한 상황에서 운전 당시 기준치 이상이었다는 사실이 합리적 의심을 배제할 정도로 증명됐다고 보기 어렵다고 본 사례입니다. 음주운전 재범 가중처벌 사안에서도 운전 시점 수치 증명을 검토해볼 수 있습니다.',
        takeaway: '음주운전 재범 + 운전 후 추가 음주 + 측정 지연 결합 시 운전 시점 증명·위드마크 신중 적용 검토 영역 — 측정 시점·추가 음주·전제사실 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운전 후에 술을 더 마셨는데 측정 수치가 그대로 적용되나요?',
        answer:
          '<strong>추가 음주분이 합쳐진 수치라 운전 당시 수치와 다를 수 있는 영역입니다.</strong> 운전 후 음주 시각·양을 입증.',
      },
      {
        question: '측정이 한참 뒤에 이뤄졌으면 다툴 수 있나요?',
        answer:
          '<strong>운전 종료 후 상당한 시간이 지나 측정됐다면 운전 시점 수치 초과 단정이 어려운 영역입니다.</strong> 운전·측정 간격을 정리.',
      },
      {
        question: '위드마크로 계산하면 그대로 인정되나요?',
        answer:
          '<strong>음주량·시각 등 전제사실이 엄격히 증명돼야 하고 근소 초과면 더 신중히 보는 영역입니다.</strong> 전제사실 자료를 확보.',
      },
      {
        question: '재범이면 무조건 가중되나요?',
        answer:
          '<strong>과거 전력에 따라 가중이 적용될 수 있으나 운전 당시 음주운전 성립이 전제인 영역입니다.</strong> 전력·성립 여부를 함께 점검.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 결과지·운전 종료 시각·추가 음주 입증 자료 확보가 출발점인 영역입니다.</strong> 전제사실과 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 재범 가중처벌', href: '/guide/dui/dui-repeat-offense-aggravation' },
      { label: '운전 후 추가 음주·측정', href: '/guide/dui/dui-post-driving-drinking-measurement' },
      { label: '위드마크 공식·혈중농도 추정', href: '/guide/dui/dui-widmark-bac-estimation' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주운전 적용법조·가중', href: '/guide/dui/dui-applicable-law-aggravation' },
    ],
  },

  // ─── 8. jeonse-fraud-multi-household-deposit-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-multi-household-deposit-track',
    keyword: '다가구주택 보증금 사기 대항요건 존속',
    questionKeyword: '다가구주택에 전세로 들어와 전입·확정일자를 갖췄는데 보증금을 못 돌려받고 경매까지 넘어갔어요. 전입을 계속 유지해야 대항력이 지켜지는지, 이사나 소유권 변동이 생기면 권리가 어떻게 되는지, 보증금을 어떤 순서로 회수해야 하는지 막막합니다.',
    ctaKeyword: '다가구주택 보증금 사기 대항요건 회수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다가구 보증금 사기 — 5단계 대항요건·회수 점검 | 로앤가이드',
      description:
        '다가구주택 전세보증금을 못 돌려받고 경매까지 넘어갔다면 주택임대차보호법 제3조 대항요건 존속과 우선변제·회수 순서 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 세대가 한 건물에 사는 다가구주택에 전세로 들어와 전입신고와 확정일자를 갖춰둔 임차인입니다. 그런데 임대인이 계약 종료 후에도 보증금을 돌려주지 못한 채 건물이 경매로 넘어갔고, 선순위 임차인·근저당이 많아 제 보증금을 온전히 회수하지 못할까 걱정돼요. 전입을 계속 유지해야 대항력이 끝까지 지켜지는지, 직장 문제로 이사를 가거나 소유관계에 변동이 생기면 제 권리가 어떻게 되는지도 헷갈립니다. 대항요건을 어떻게 지키고, 임차권등기·배당요구·반환소송을 어떤 순서로 진행해야 보증금을 지킬 수 있는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 대항력을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 대항력의 요건인 주민등록은 임차권의 존재를 제3자가 인식할 수 있는 공시방법이 돼야 하고, 주택 인도와 주민등록이라는 대항요건은 취득 시에만이 아니라 대항력을 유지하기 위해서도 계속 존속해야 하며, 대항력을 갖춘 임차인이 임차주택을 양수해 소유자가 되면 그 주민등록은 더 이상 유효한 공시방법이 될 수 없어 대항력은 소유권 취득 시 소멸한다고 보는 본 사례 흐름이 있는 영역입니다. 다가구주택 + 보증금 미반환 + 경매 결합은 \'대항요건 존속·우선변제권·회수 순서\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항요건 존속 ③ 임차권등기 ④ 배당·잔액 ⑤ 소송 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 존속 ③ 등기 ④ 배당 ⑤ 소송 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다가구주택 보증금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항요건 존속·임차권등기·배당/잔액·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·선순위 임차, 경매 진행과 보증금 비율 확인.</li>\n<li><strong>② 대항요건 존속</strong> — 전입·점유·확정일자가 계속 유지되는지 정리.</li>\n<li><strong>③ 임차권등기</strong> — 이사 필요 시 전출 전 임차권등기명령(통상 1~2개월) 검토.</li>\n<li><strong>④ 배당·잔액</strong> — 경매 배당요구와 낙찰가 대비 회수 가능 잔액 확인.</li>\n<li><strong>⑤ 소송</strong> — 미배당 잔액 회수·보증금반환소송 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항요건인 주민등록은 임차권 존재를 제3자가 인식할 수 있는 공시방법이어야 하고, 취득 시뿐 아니라 대항력을 유지하기 위해서도 계속 존속해야 하는 영역. 함부로 전출하지 않고 전입·점유를 유지하는 것이 핵심이며, 임차주택을 직접 양수해 소유자가 되면 대항력이 소멸할 수 있다는 점도 함께 점검하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·HUG·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계·선순위 확인 (즉시)</strong> — 등기부·근저당, 선순위 임차·보증금 비율, 경매개시 점검.</li>\n<li><strong>2단계 — 대항요건 점검 (수일 내)</strong> — 전입·점유·확정일자 유지 여부, 함부로 전출하지 않도록 점검.</li>\n<li><strong>3단계 — 임차권등기·배당요구 (이사 전/종기 내)</strong> — 이사 시 임차권등기명령(통상 1~2개월), 경매 배당요구.</li>\n<li><strong>4단계 — 배당 결과·잔액 확인 (배당 후)</strong> — 배당표·낙찰가, 보증금 잔액 산정.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 미배당 잔액 회수, 보증금반환소송·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다가구주택 보증금 사기 대항요건·회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위·경매개시)</strong></li>\n<li><strong>선순위 임차·보증금 현황 자료 (다가구 권리관계)</strong></li>\n<li><strong>실제 거주·점유 입증 자료 (관리비·우편 등)</strong></li>\n<li><strong>임차권등기명령 신청·완료 자료 (이사 시)</strong></li>\n<li><strong>경매 배당표·배당요구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다가구주택은 한 건물에 선순위 임차인이 많아 회수 가능 범위가 낙찰가·선순위에 좌우되므로 등기부·선순위 보증금 현황을 정리해두는 것이 도움이 됩니다. 대항력은 전입·점유가 계속 유지돼야 지켜지므로 이사 시에는 전출 전 임차권등기명령(통상 1~2개월)을 마치고, 관리비·우편 등 실제 거주 입증 자료를 함께 모아두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 존속</strong> — 전입·점유·확정일자가 계속 유지되는지.</li>\n<li><strong>공시방법</strong> — 주민등록이 임차권을 공시하는 방법이 되는지.</li>\n<li><strong>소유권 변동</strong> — 임차주택 양수 시 대항력 소멸 여부.</li>\n<li><strong>선순위·배당</strong> — 선순위 보증금·근저당 후 회수 가능 잔액.</li>\n<li><strong>잔액 회수</strong> — 미배당 잔액의 반환·소송 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대항요건의 존속과 소유권 취득 시 대항력 소멸',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항의 주민등록이 대항력의 공시방법이 되려면 그 주민등록으로 제3자가 임차권의 존재를 인식할 수 있는 정도여야 하고, 주택 인도와 주민등록이라는 대항요건은 대항력 취득 시에만 구비하면 되는 것이 아니라 대항력을 유지하기 위해서도 계속 존속해야 하며, 대항력을 갖춘 임차인이 임차주택을 양수해 소유자가 된 경우 그 임차인의 주민등록은 소유권이전등기 이후에는 유효한 공시방법이 될 수 없어 대항력은 소유권 취득 시 소멸한다고 판시했습니다. 임차인이 임차주택을 매수해 소유권을 취득함으로써 대항력과 우선변제권을 상실했다고 본 사례입니다. 다가구주택 보증금 사기 사안에서도 대항요건 존속과 회수 순서를 검토해볼 수 있습니다.',
        takeaway: '다가구주택 + 보증금 미반환 + 경매 결합 시 대항요건 존속·우선변제권·회수 순서 검토 영역 — 전입·점유 유지·선순위 현황·임차권등기 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '전입을 계속 유지해야 대항력이 지켜지나요?',
        answer:
          '<strong>대항요건은 취득 시뿐 아니라 유지하기 위해서도 계속 존속해야 하는 영역입니다.</strong> 함부로 전출하지 말고 전입·점유를 유지.',
      },
      {
        question: '이사를 가야 하면 권리가 사라지나요?',
        answer:
          '<strong>전출 전 임차권등기명령(통상 1~2개월)으로 대항력·우선변제권을 유지할 수 있는 영역입니다.</strong> 등기 완료 후 이사 진행.',
      },
      {
        question: '그 집을 제가 사면 보증금은 어떻게 되나요?',
        answer:
          '<strong>임차주택을 양수해 소유자가 되면 대항력이 소멸할 수 있는 영역입니다.</strong> 매수 전 권리 변동을 신중히 점검.',
      },
      {
        question: '선순위 임차인이 많으면 한 푼도 못 받나요?',
        answer:
          '<strong>낙찰가·선순위·소액임차인 보호 등에 따라 회수 범위가 달라질 수 있는 영역입니다.</strong> 선순위 현황·배당표부터 확인.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 보증금반환·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '다가구주택 전세 권리관계', href: '/guide/jeonse-fraud/jeonse-fraud-multi-household-rights' },
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '임차권등기명령 신청', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-order' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 9. jeonse-fraud-agent-embezzlement-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-agent-embezzlement-track',
    keyword: '중개사 보증금 전세사기 주의의무',
    questionKeyword: '공인중개사가 다가구주택 전세를 중개하면서 선순위 보증금이 얼마나 있는지 제대로 조사·설명하지 않아, 나중에 경매에서 한 푼도 배당받지 못했어요. 중개사에게 손해배상이나 공제금을 물을 수 있는지, 어떤 순서로 정리해야 하는지 막막합니다.',
    ctaKeyword: '중개사 보증금 전세사기 주의의무 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중개사 보증금 전세사기 — 5단계 주의의무·공제금 점검 | 로앤가이드',
      description:
        '중개사가 선순위 보증금을 제대로 설명하지 않아 보증금을 못 받았다면 공인중개사법 제30조 손해배상과 주의의무·공제금 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공인중개사를 통해 다가구주택에 전세로 들어온 임차인입니다. 계약 당시 중개사가 \'선순위가 좀 있다\'고 구두로만 말하고, 정작 이미 살고 있는 다른 세입자들의 보증금이 얼마나 되는지는 제대로 조사·확인해 설명해주지 않았어요. 그런데 나중에 건물이 경매로 넘어가니 선순위 채권자들이 먼저 배당받아 저는 보증금을 한 푼도 회수하지 못했습니다. 중개대상물 확인·설명서에도 \'임대인 불응으로 선순위 다수 있음을 구두로 설명함\' 정도로만 적혀 있었어요. 중개사가 선순위 보증금을 제대로 조사·설명하지 않은 책임을 물어 손해배상이나 공제금을 청구할 수 있는지, 어떤 순서로 정리해야 하는지 막막한 상태입니다." 공인중개사법 제25조는 개업공인중개사의 확인·설명의무를, 같은 법 제29조 제1항은 신의·성실로써 공정하게 업무를 수행할 의무를, 같은 법 제30조는 중개행위로 거래당사자에게 재산상 손해를 발생하게 한 경우의 손해배상책임을 정하는 영역입니다. 판례·실무는 개업공인중개사가 다가구주택 일부에 대한 임대차를 중개할 때 임차의뢰인이 보증금을 반환받을 수 있는지 판단하는 데 필요한 권리관계 자료를 성실·정확하게 제공해야 하고, 임대인이 자료 제공을 거부했더라도 규모·세대수·시세에 비추어 선순위 보증금채권이 얼마나 있을 수 있는지는 조사·확인해 설명할 의무가 있다고 보는 본 사례 흐름이 있는 영역입니다. 다가구 중개 + 선순위 미설명 + 배당 실패 결합은 \'중개사 주의의무·손해배상·공제금\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 주의의무 위반 ③ 손해·인과 ④ 공제금 청구 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 위반 ③ 손해 ④ 공제 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중개사 보증금 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·주의의무 위반·손해/인과·공제금 청구·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부·선순위 보증금, 경매·배당 결과와 미회수 금액 확인.</li>\n<li><strong>② 주의의무 위반</strong> — 중개사가 선순위 보증금을 조사·확인·설명했는지 정리.</li>\n<li><strong>③ 손해·인과</strong> — 미설명과 보증금 미회수 손해 사이 인과관계 정리.</li>\n<li><strong>④ 공제금 청구</strong> — 중개사 손해배상·공제사업자 공제금 청구 검토.</li>\n<li><strong>⑤ 회수</strong> — 임대인·중개사·공제 등 회수 경로 우선순위 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개업공인중개사는 다가구주택 임대차를 중개할 때 선순위 보증금채권이 얼마나 있을 수 있는지 조사·확인해 설명할 의무가 있고, 임대인이 자료 제공을 거부했더라도 규모·세대수·시세에 비추어 확인 가능한 범위는 설명하고 확인·설명서에 기재해야 하는 영역. 미설명과 미회수 손해 사이 인과관계를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·공제사업자·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·배당 자료 확인 (즉시)</strong> — 등기부·선순위 보증금, 경매 배당표·미회수 금액 확인.</li>\n<li><strong>2단계 — 중개 자료 점검 (수일 내)</strong> — 중개대상물 확인·설명서, 중개사 설명 정황·녹취·메시지 정리.</li>\n<li><strong>3단계 — 주의의무 위반·손해 정리 (가능한 빨리)</strong> — 선순위 미조사·미설명 여부와 손해·인과관계 정리.</li>\n<li><strong>4단계 — 손해배상·공제금 청구 (자료 준비 후)</strong> — 중개사 손해배상, 공제사업자 공제금 청구 검토.</li>\n<li><strong>5단계 — 회수·소송 (병행)</strong> — 임대인 상대 회수와 중개사·공제 청구 병행, 불이행 시 소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중개사 보증금 전세사기 주의의무·공제금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·주의의무·공제금 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>중개대상물 확인·설명서 (권리관계 기재 내용)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위)</strong></li>\n<li><strong>선순위 보증금 현황·배당표 (손해 산정)</strong></li>\n<li><strong>중개사 설명 정황 (녹취·메시지·문자)</strong></li>\n<li><strong>개업공인중개사 등록·공제증서 자료</strong></li>\n<li><strong>보증금 송금 내역·반환 요구 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중개사의 책임을 다투려면 중개대상물 확인·설명서에 선순위 보증금이 어떻게 기재됐는지와 실제 설명 정황(녹취·메시지)을 함께 정리해두는 것이 도움이 됩니다. 손해배상·공제금 청구를 위해서는 미설명과 미회수 손해 사이 인과관계를 보여줄 등기부·배당표·선순위 현황 자료가 핵심이어서 함께 갖춰두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>주의의무 위반</strong> — 선순위 보증금을 조사·확인·설명했는지.</li>\n<li><strong>확인·설명서 기재</strong> — 자료 불응 시 그 내용을 기재했는지.</li>\n<li><strong>손해·인과</strong> — 미설명과 보증금 미회수 사이 인과관계.</li>\n<li><strong>공제금 범위</strong> — 공제사업자 공제금의 한도·범위.</li>\n<li><strong>회수 우선순위</strong> — 임대인·중개사·공제 중 회수 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구 중개 개업공인중개사의 선순위 조사·설명의무',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 개업공인중개사는 다가구주택 일부에 대한 임대차를 중개할 때 임차의뢰인이 임대차 종료 후 보증금을 제대로 반환받을 수 있는지 판단하는 데 필요한 권리관계 자료를 성실·정확하게 제공할 의무가 있고, 등기부상 권리관계 확인·설명에 그쳐서는 안 되며 이미 거주 중인 다른 임차인의 보증금·임대차 시기·종기 자료를 요구·확인해 설명하고 자료를 제시해야 하며, 임대인이 자료 제공을 거부했더라도 규모·세대수·시세에 비추어 선순위 임대차보증금채권이 얼마나 있을 수 있는지는 확인할 수 있으므로 이를 조사·확인해 설명할 의무가 있다고 판시했습니다. 확인·설명서에 \'임대인 자료 제출 불응으로 선순위 다수 있음을 구두로 설명함\'이라고만 기재한 사안에서 선량한 관리자의 주의의무를 다했다고 볼 수 없다고 본 사례입니다. 중개사 보증금 전세사기 사안에서도 주의의무 위반과 손해배상·공제금을 검토해볼 수 있습니다.',
        takeaway: '다가구 중개 + 선순위 미설명 + 배당 실패 결합 시 중개사 주의의무·손해배상·공제금 검토 영역 — 확인·설명서·설명 정황·배당표 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사가 선순위를 제대로 설명 안 했으면 책임을 물을 수 있나요?',
        answer:
          '<strong>선순위 보증금 조사·확인·설명의무 위반이 인정되면 손해배상 책임을 물을 수 있는 영역입니다.</strong> 확인·설명서와 설명 정황을 확보.',
      },
      {
        question: '임대인이 자료를 안 줬다고 하면 중개사는 면책되나요?',
        answer:
          '<strong>자료 거부 시에도 규모·시세로 확인 가능한 범위는 조사·설명할 의무가 있는 영역입니다.</strong> 확인·설명서 기재 여부를 점검.',
      },
      {
        question: '\'구두로 설명했다\'고만 적혀 있으면 충분한가요?',
        answer:
          '<strong>구체적 자료 확인·기재 없이 구두 설명만으로는 주의의무를 다했다고 보기 어려운 영역입니다.</strong> 설명서 기재 내용을 정리.',
      },
      {
        question: '중개사에게 받을 돈은 어디서 받나요?',
        answer:
          '<strong>중개사 손해배상과 공제사업자 공제금 청구를 검토하는 영역입니다.</strong> 공제증서·등록 자료를 확보.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 손해배상·공제금 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '중개사 주의의무·손해배상', href: '/guide/jeonse-fraud/jeonse-fraud-agent-duty-liability' },
      { label: '중개사 공제금 청구', href: '/guide/jeonse-fraud/jeonse-fraud-agent-mutual-aid-claim' },
      { label: '다가구주택 선순위 확인', href: '/guide/jeonse-fraud/jeonse-fraud-multi-household-rights' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 10. jeonse-fraud-tax-arrears-priority-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-tax-arrears-priority-track',
    keyword: '세금체납 우선순위 전세사기 임차권등기',
    questionKeyword: '임대인이 세금을 체납한 집에 전세로 들어왔다 보증금을 못 받아 임차권등기명령을 해뒀는데, 시간이 흐르고 세금 우선순위에 밀려 회수가 막막해요. 임차권등기를 해두면 소멸시효가 중단되는지, 보증금을 어떤 순서로 지켜야 하는지 막막합니다.',
    ctaKeyword: '세금체납 우선순위 전세사기 임차권등기 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '세금체납 전세사기 — 5단계 우선순위·시효 점검 | 로앤가이드',
      description:
        '임대인 세금체납으로 보증금 회수가 우선순위에 밀려 막막하다면 주택임대차보호법 제3조의3 임차권등기 효력과 소멸시효 한계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임대인이 세금을 체납한 집에 전세로 들어왔다가 계약 종료 후 보증금을 돌려받지 못한 임차인입니다. 일단 임차권등기명령을 받아 등기를 해두고 이사를 나왔는데, 그 뒤 시간이 흐르면서 임대인의 체납 세금이 보증금보다 우선순위에서 앞선다는 말을 듣고 회수가 더 막막해졌어요. 게다가 임차권등기를 해두면 그것만으로 보증금반환채권의 소멸시효가 중단되는 줄 알았는데, 그렇지 않을 수도 있다는 이야기를 들어 더 불안합니다. 임차권등기명령에 따른 등기에 소멸시효 중단 효력이 있는지, 세금 우선순위에 밀린 보증금을 어떤 순서로 지켜야 하는지 막막한 상태입니다." 주택임대차보호법 제3조의3은 임차권등기명령에 따른 임차권등기를, 같은 법 제3조의2는 우선변제권을, 민법 제168조는 청구·압류·가압류·가처분 등 소멸시효 중단사유를 정하는 영역입니다. 판례·실무는 임차권등기명령에 따른 임차권등기는 임차인이 대항력이나 우선변제권을 취득·유지하도록 해 주는 담보적 기능을 주목적으로 하므로, 가압류·가처분에 관한 절차규정을 일부 준용하더라도 그 등기에 민법 제168조 제2호의 압류 또는 가압류·가처분에 준하는 소멸시효 중단 효력이 있다고 볼 수는 없다고 보는 본 사례 흐름이 있는 영역입니다. 세금체납 + 우선순위 열위 + 임차권등기 결합은 \'우선순위·임차권등기 시효 한계\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 우선순위 ③ 임차권등기 효력 ④ 시효 관리 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 순위 ③ 등기 ④ 시효 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 세금체납 우선순위 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·우선순위·임차권등기 효력·시효 관리·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부·체납 세금, 확정일자·임차권등기·경매 진행 확인.</li>\n<li><strong>② 우선순위</strong> — 체납 세금(당해세 등)과 보증금 우선변제 순위 정리.</li>\n<li><strong>③ 임차권등기 효력</strong> — 임차권등기의 대항력·우선변제권 유지 기능과 한계 정리.</li>\n<li><strong>④ 시효 관리</strong> — 임차권등기만으로 시효 중단이 안 될 수 있어 별도 시효 관리 정리.</li>\n<li><strong>⑤ 회수</strong> — 배당요구·보증금반환소송 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차권등기명령에 따른 임차권등기는 대항력·우선변제권을 취득·유지하게 해 주는 담보적 기능이 주목적이어서, 가압류 등 절차규정을 일부 준용하더라도 그 등기에 소멸시효 중단 효력이 있다고 보기는 어려운 영역. 임차권등기와 별도로 청구·소송 등으로 시효를 관리하고, 세금 우선순위에 따른 회수 가능 범위를 점검하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·체납 자료 확인 (즉시)</strong> — 등기부·체납 세금, 확정일자·임차권등기·경매 진행 확인.</li>\n<li><strong>2단계 — 우선순위 점검 (수일 내)</strong> — 체납 세금(당해세 등)과 보증금 우선변제 순위 정리.</li>\n<li><strong>3단계 — 임차권등기 효력·시효 정리 (가능한 빨리)</strong> — 임차권등기의 유지 기능과 시효 중단 한계 점검, 별도 시효 관리.</li>\n<li><strong>4단계 — 배당요구·청구 (종기/시효 내)</strong> — 경매 배당요구, 시효 중단을 위한 청구·소송 검토.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 미배당 잔액 회수, 보증금반환소송·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">세금체납 우선순위 전세사기 임차권등기·시효 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·우선순위·시효 관리 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>임차권등기명령 결정·등기 완료 자료</strong></li>\n<li><strong>부동산등기부등본 (근저당·임차권등기·경매)</strong></li>\n<li><strong>임대인 체납 세금·압류 현황 자료 (우선순위)</strong></li>\n<li><strong>경매 배당표·배당요구 자료 (회수 범위)</strong></li>\n<li><strong>보증금반환 청구·소송 등 시효 중단 자료</strong></li>\n<li><strong>보증금 송금 내역·반환 요구 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차권등기를 해뒀더라도 그 등기만으로 보증금반환채권의 소멸시효가 중단되는 것은 아닐 수 있으므로, 청구·소송 등 별도의 시효 중단 조치를 챙겨두는 것이 핵심입니다. 임대인의 체납 세금(특히 당해세)은 보증금보다 우선할 수 있어 회수 범위가 달라지므로 체납·압류 현황과 배당표를 함께 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임차권등기 시효 효력</strong> — 임차권등기에 시효 중단 효력이 있는지.</li>\n<li><strong>세금 우선순위</strong> — 체납 세금(당해세 등)이 보증금에 우선하는지.</li>\n<li><strong>우선변제 범위</strong> — 확정일자·임차권등기에 따른 회수 범위.</li>\n<li><strong>시효 관리</strong> — 청구·소송 등 별도 시효 중단 조치.</li>\n<li><strong>잔액 회수</strong> — 미배당 잔액의 반환·소송 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기명령에 따른 임차권등기의 시효 중단 효력',
        summary:
          '대법원 2017다226629(대법원, 2019.05.16 선고) 영역에서 법원은 주택임대차보호법 제3조의3에서 정한 임차권등기명령에 따른 임차권등기는 특정 목적물에 대한 구체적 집행행위나 보전처분의 실행을 내용으로 하는 압류·가압류·가처분과 달리, 임차인이 주택임대차보호법에 따른 대항력이나 우선변제권을 취득·유지하도록 해 주는 담보적 기능을 주목적으로 하므로, 임차권등기명령 절차에 가압류에 관한 절차규정을 일부 준용한다고 하더라도 그 임차권등기에 민법 제168조 제2호에서 정한 압류 또는 가압류·가처분에 준하는 소멸시효 중단의 효력이 있다고 볼 수 없다고 판시했습니다. 세금체납 우선순위 전세사기 사안에서도 임차권등기의 시효 한계와 별도 시효 관리를 검토해볼 수 있습니다.',
        takeaway: '세금체납 + 우선순위 열위 + 임차권등기 결합 시 우선순위·임차권등기 시효 한계 검토 영역 — 체납·우선순위·임차권등기·시효 관리 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임차권등기를 해두면 소멸시효가 중단되나요?',
        answer:
          '<strong>임차권등기는 담보적 기능이 주목적이어서 그 등기만으로 시효가 중단된다고 보기 어려운 영역입니다.</strong> 청구·소송 등 별도 시효 관리를 검토.',
      },
      {
        question: '임대인 세금이 제 보증금보다 먼저 받아가나요?',
        answer:
          '<strong>체납 세금(특히 당해세)이 보증금에 우선할 수 있는 영역입니다.</strong> 체납·압류 현황과 우선순위를 확인.',
      },
      {
        question: '이사를 나왔는데 우선변제권은 유지되나요?',
        answer:
          '<strong>임차권등기를 마치면 이사 후에도 대항력·우선변제권을 유지할 수 있는 영역입니다.</strong> 등기 완료를 확인하고 배당요구를 점검.',
      },
      {
        question: '시효가 지나면 보증금을 못 받나요?',
        answer:
          '<strong>시효가 완성되면 회수가 어려워질 수 있어 별도 시효 관리가 필요한 영역입니다.</strong> 청구·소송으로 시효 중단을 검토.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 보증금반환·시효·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '임차권등기명령 신청', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-order' },
      { label: '체납 세금·당해세 우선순위', href: '/guide/jeonse-fraud/jeonse-fraud-tax-arrears-priority' },
      { label: '보증금채권 소멸시효 관리', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-prescription' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },
];
