import { SpokePage } from '../spoke-pages';

// batch86 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-03)
//
// 고유 존재 이유:
// 1. assault-road-rage-getout-track — 보복운전 끝에 상대가 하차해 폭행, 통증 위주 상해진단서의 증명력 판단형 트랙. 상해 인정 기준·진단 근접성이 핵심.
// 2. assault-floor-noise-confrontation-track — 층간소음 항의 과정에서 간접적 유형력(차량 막기 등)·직접 폭행이 섞인 피해자 판단형 트랙. 간접 유형력이 폭행·강요로 평가되는지가 핵심.
// 3. assault-group-collective-track — 여럿이 합세한 다중 공동폭행 피해자 판단형 트랙. 공모공동정범 암묵적 공모·기능적 행위지배 인정 범위가 핵심.
// 4. assault-workplace-supervisor-track — 직장 상사에게 반복 폭행당한 피해자 절차형 트랙. 피해자 진술 신빙성 판단과 신고 절차가 핵심.
// 5. dui-injury-dangerous-driving-track — 음주 위험운전치상에서 적용법조·공소장변경 한계가 문제된 accused 판단형 트랙. 방어권·적용법조 동일성이 핵심.
// 6. dui-next-morning-hangover-track — 숙취운전에서 식당 등 임의수사로 이뤄진 음주측정의 적법성 accused 판단형 트랙. 임의수사·영장 요부가 핵심.
// 7. dui-administrative-suspension-appeal-track — 음주 면허취소·정지 행정심판 accused 절차형 트랙. 재량권 일탈·남용과 90일 청구기한이 핵심.
// 8. jeonse-fraud-new-villa-overvalued-track — 신축빌라 과대평가 깡통전세 피해자 절차형 트랙. 임차 목적·대항력 공시방법·회수 순서가 핵심.
// 9. jeonse-fraud-landlord-impersonation-track — 임대인 사칭·파산 면책 후 보증금 회수 다투는 피해자 판단형 트랙. 면책 효력과 우선변제권 행사 한계가 핵심.
// 10. jeonse-fraud-prior-tenant-overlap-track — 선순위 임차인·금융기관 양수 중복으로 배당이 갈린 피해자 판단형 트랙. 대항요건 존속·임대차 존속 주장이 핵심.

export const spokesBatch86AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-road-rage-getout-track ───
  {
    domain: 'assault',
    slug: 'assault-road-rage-getout-track',
    keyword: '보복운전 하차 폭행 상해진단서',
    questionKeyword: '제 차 앞에 끼어든 운전자가 보복운전을 하다 신호에 멈추자 차에서 내려 제 차 문을 열고 저를 끌어내 밀치고 때려 통증이 생겼어요. 병원에서 상해진단서는 받았는데 뚜렷한 외상은 없어서 이걸로 상해가 인정돼 고소가 되는지 막막합니다.',
    ctaKeyword: '보복운전 하차 폭행 상해진단서 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '보복운전 하차 폭행 — 5단계 상해진단서 점검 | 로앤가이드',
      description:
        '보복운전 끝에 상대가 차에서 내려 폭행해 다쳤는데 진단서가 통증 호소에 의존해 막막하다면 형법 제257조 상해 인정 기준과 진단 근접성 등 증명력 점검 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제 차 앞에 무리하게 끼어든 운전자가 급제동·진로방해 같은 보복운전을 하다가, 신호에 멈춰 서자 차에서 내려 제 차 문을 열고 저를 끌어내 멱살을 잡고 밀치며 때려 어깨와 목에 통증이 생긴 피해자입니다. 곧장 병원에 가서 상해진단서를 받기는 했는데, 영상검사에선 뚜렷한 골절·외상이 잡히지 않고 제 통증 호소를 근거로 발급된 것이라 마음이 놓이지 않아요. 상대는 \'멍 하나 없는데 무슨 상해냐\'며 발뺌하는데, 이런 진단서만으로 상해가 인정돼 고소·치료비 청구가 되는지 막막한 상태입니다." 형법 제257조 제1항은 사람의 신체를 상해한 자를, 같은 법 제260조 제1항은 폭행한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 폭행에 수반된 상처가 극히 경미해 굳이 치료가 필요 없고 자연 치유되며 일상생활에 지장이 없는 정도면 상해로 보기 어려울 수 있으나, 그 정도를 넘는 상해가 폭행으로 생긴 경우라면 상해에 해당하고, 건강상태 악화·생활기능 장애 여부는 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 보복운전 + 하차 폭행 + 통증 위주 진단서 결합은 \'상해 인정·진단서 증명력\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 진단 근접성 ② 부위 일치 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 일치 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 보복운전 하차 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단 근접성·부위 일치·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단 근접성</strong> — 폭행 시점과 진료·진단일이 시간상 가까운지 정리.</li>\n<li><strong>② 부위 일치</strong> — 진단된 상해 부위·정도가 끌어내림·구타 경위와 일치하는지 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조), 보복운전 정황까지 함께 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통증 호소 위주로 발급된 상해진단서라도, 폭행으로 생긴 상처가 일상생활에 지장이 없는 극히 경미한 정도를 넘고 진료가 폭행 직후로 근접하며 부위·정도가 경위와 일치하면 상해로 인정될 여지가 있는 영역. 진료 시점·경과와 끌어내림·구타 정황을 함께 정리해둘수록 입증이 수월해지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신속 진료·진단 확보 (즉시~당일)</strong> — 폭행 직후 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 진단·경위 일치 정리 (수일 내)</strong> — 진료 시점·동기, 진단 부위와 끌어내림·구타 경위의 일치 여부 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 보복운전 정황 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·블랙박스 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보복운전 하차 폭행 상해진단서·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단 근접성·부위 일치·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (진단일·부위·치료기간)</strong></li>\n<li><strong>차량 블랙박스·도로 CCTV 영상 (보복운전·하차 정황)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>최초 진료 시점·동기 기록 (근접성 입증)</strong></li>\n<li><strong>보복운전·하차·구타 경위·시간 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>상대 차량 번호·목격자 연락처·교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통증 위주로 발급된 진단서일수록 폭행 직후 가능한 한 빨리 진료를 받아 시점을 근접시키고, 진단 부위가 끌어내려져 맞은 부위와 일치하도록 경위를 명확히 정리해두는 것이 도움이 됩니다. 블랙박스·도로 CCTV는 보복운전부터 하차 폭행까지 연속 정황을 보여줄 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해 인정</strong> — 통증이 일상생활에 지장 없는 극히 경미한 정도를 넘는지.</li>\n<li><strong>진단서 증명력</strong> — 통증 호소 위주 진단서의 신빙성·근접성.</li>\n<li><strong>부위 일치</strong> — 진단 부위·정도가 끌어내림·구타 경위와 맞는지.</li>\n<li><strong>보복운전 병합</strong> — 폭행·상해와 보복운전 정황의 함께 평가.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행으로 생긴 상처의 상해 해당 여부 판단기준',
        summary:
          '대법원 2003도4606(대법원, 2003.09.26 선고) 영역에서 법원은 폭행에 수반해 생긴 상처가 극히 경미해 굳이 치료할 필요가 없이 자연 치유되고 일상생활에 아무런 지장이 없는 경우에는 상해에 해당하지 않을 수 있으나, 그 정도를 넘는 상해가 폭행에 의해 생긴 경우라면 상해에 해당하며, 피해자의 건강상태가 나쁘게 변경되고 생활기능에 장애가 초래됐는지는 일률적으로가 아니라 피해자의 연령·성별·체격 등 신체·정신상의 구체적 상태를 기준으로 판단해야 한다고 판시했습니다. 정식 상해진단서가 없더라도 상처 부위·내용·치유기간에 비추어 상해가 아니라고 단정할 수 없다고 본 사례입니다. 보복운전 하차 폭행 사안에서도 상해 인정과 진단서 증명력을 검토해볼 수 있습니다.',
        takeaway: '보복운전 + 하차 폭행 + 통증 위주 진단서 결합 시 상해 인정·진단서 증명력 검토 영역 — 진료 근접성·부위 일치·블랙박스 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '뚜렷한 외상이 없고 통증만 있어도 상해가 되나요?',
        answer:
          '<strong>일상생활에 지장 없는 극히 경미한 정도를 넘고 경위와 일치하면 상해로 인정될 여지가 있는 영역입니다.</strong> 진료 시점·경과를 정리.',
      },
      {
        question: '보복운전도 함께 처벌을 물을 수 있나요?',
        answer:
          '<strong>하차 폭행과 함께 보복운전 정황을 신고·고소에 반영할 수 있는 영역입니다.</strong> 블랙박스로 진로방해·급제동을 확보.',
      },
      {
        question: '진단서를 며칠 늦게 받으면 불리한가요?',
        answer:
          '<strong>상해 발생과 진단 시점의 근접성이 증명력 판단에 영향을 줄 수 있는 영역입니다.</strong> 가능한 한 빨리 진료를 받아 기록을 남길 것.',
      },
      {
        question: '블랙박스가 꼭 필요한가요?',
        answer:
          '<strong>보복운전부터 하차 폭행까지 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 영상이 덮어쓰이지 않도록 즉시 보존.',
      },
      {
        question: '상대가 멍도 없다고 우기면 어떻게 하나요?',
        answer:
          '<strong>진단서 근접성·부위 일치와 영상·정황 자료로 다투는 영역입니다.</strong> 진료기록·블랙박스를 시간순으로 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '동호회 운동 중 폭행 상해', href: '/guide/assault/assault-amateur-sports-club-track' },
      { label: '보복운전 하차 폭행 상해진단서', href: '/guide/assault/assault-road-rage-getout-track' },
      { label: '폭행 진단서 CCTV 증거 우열 다툼', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '배달 라이더 손님 폭행', href: '/guide/assault/assault-delivery-rider-customer-doorstep-victim-track' },
    ],
  },

  // ─── 2. assault-floor-noise-confrontation-track ───
  {
    domain: 'assault',
    slug: 'assault-floor-noise-confrontation-track',
    keyword: '층간소음 항의 폭행 간접 유형력',
    questionKeyword: '층간소음으로 윗집에 항의하러 갔다가 상대가 제 앞을 막고 차량으로 제 차 출입을 가로막은 데 이어 밀치고 때려 다쳤어요. 직접 때린 것뿐 아니라 길·차를 막은 것도 폭행이나 강요로 볼 수 있는지 막막합니다.',
    ctaKeyword: '층간소음 항의 폭행 간접 유형력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '층간소음 항의 폭행 — 5단계 간접 유형력 점검 | 로앤가이드',
      description:
        '층간소음 항의 끝에 상대가 길·차를 막고 폭행까지 해 다쳤다면 형법 제260조 폭행과 제324조 강요의 간접적 유형력 평가 기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 층간소음에 시달리다 윗집에 정중히 항의하러 올라갔는데, 상대가 문 앞에서 제 앞을 가로막고 위협하더니, 제 차로 내려가려 하자 자기 차량을 제 차 출입구 바로 앞에 대 길을 막아버린 피해자입니다. 항의가 격해지자 결국 저를 밀치고 때려 팔과 어깨에 통증과 멍이 생겼어요. 직접 손으로 때린 것은 분명 폭행 같은데, 제 앞을 막고 차로 출입을 가로막은 것처럼 직접 닿지 않은 행위도 폭행이나 강요로 볼 수 있는지, 어디부터 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 대한 폭행을, 같은 법 제257조 제1항은 상해를, 같은 법 제324조 제1항은 폭행·협박으로 권리행사를 방해하거나 의무 없는 일을 하게 한 강요를 규정하는 영역입니다. 판례·실무는 강요죄의 폭행에는 사람에 대한 직접적 유형력뿐 아니라 간접적 유형력도 포함되나 반드시 신체에 대한 것에 한정되지 않으며, 간접적 유형력을 폭행으로 평가하려면 유형력 행사의 의도·방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계 등을 종합 고려해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 층간소음 항의 + 길·차 가로막기 + 직접 구타 결합은 \'간접 유형력·폭행·강요 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 직접 폭행 ② 간접 유형력 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 직접 ② 간접 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 층간소음 항의 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 직접 폭행·간접 유형력·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 직접 폭행</strong> — 밀치고 때린 직접 유형력과 상해 부위·정도 정리.</li>\n<li><strong>② 간접 유형력</strong> — 길·차 가로막기 등 간접 행사의 의도·근접성·객체 관계 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(제260조)·상해(제257조)·강요(제324조) 적용 갈래 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강요죄의 폭행에는 간접적 유형력도 포함될 수 있으나, 그것을 폭행으로 평가하려면 행사 의도·방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계를 종합 고려해야 하는 영역. 직접 구타는 폭행·상해로, 길·차 가로막기는 정황에 따라 강요·폭행 여부가 따로 검토되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위·막힌 차량·현장 사진 확보.</li>\n<li><strong>2단계 — 직접·간접 정황 정리 (수일 내)</strong> — 직접 구타 경위와 길·차 가로막기 의도·근접성 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·영상 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">층간소음 항의 폭행 간접 유형력·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 직접 폭행·간접 유형력·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>공동현관·복도·주차장 CCTV 영상</strong></li>\n<li><strong>다친 부위·막힌 차량·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>층간소음 항의 경위·녹취 기록 (발단 정리)</strong></li>\n<li><strong>직접 구타·길·차 가로막기 경위 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>목격자·관리사무소 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 때린 부분은 폭행·상해로, 길이나 차를 막은 부분은 그 의도·근접성·정황에 따라 강요·폭행 여부가 별도로 검토될 수 있으므로 둘을 구분해 시간순으로 정리해두는 것이 도움이 됩니다. 공동현관·주차장 CCTV는 항의부터 구타·가로막기까지 정황을 보여줄 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>간접 유형력</strong> — 길·차 가로막기가 폭행·강요로 평가되는지.</li>\n<li><strong>의도·근접성</strong> — 유형력 행사의 의도·방법과 피해자 근접성.</li>\n<li><strong>직접 폭행·상해</strong> — 구타로 인한 부상 정도와 상해 인정.</li>\n<li><strong>발단·쌍방</strong> — 항의 과정에서 쌍방으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강요죄에서 간접적 유형력의 폭행 평가 기준',
        summary:
          '대법원 2018도1346(대법원, 2021.11.25 선고) 영역에서 법원은 강요죄의 폭행은 사람에 대한 직접적 유형력의 행사뿐 아니라 간접적 유형력의 행사도 포함하며 반드시 신체에 대한 것에 한정되지 않으나, 사람에 대한 간접적 유형력의 행사를 강요죄의 폭행으로 평가하려면 유형력을 행사한 의도와 방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계 등을 종합 고려해야 한다고 판시했습니다. 차량을 피해자 주택 대문 앞에 주차해 차량 출입을 막은 사안에서 물리적 접촉이나 유형력 행사 정황이 없고 차량을 정상 사용할 수 있었다면 폭행으로 권리행사를 방해했다고 보기 어렵다고 본 사례입니다. 층간소음 항의 과정의 길·차 가로막기 사안에서도 간접 유형력의 평가를 검토해볼 수 있습니다.',
        takeaway: '층간소음 항의 + 길·차 가로막기 + 직접 구타 결합 시 간접 유형력·폭행·강요 평가 검토 영역 — 직접·간접 정황 구분·CCTV 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '직접 때린 게 아니라 길을 막은 것도 폭행인가요?',
        answer:
          '<strong>의도·근접성·객체 관계에 따라 폭행·강요로 평가될 수 있으나 정황에 따라 달라지는 영역입니다.</strong> 가로막은 의도·정황을 정리.',
      },
      {
        question: '차로 제 차 출입을 막은 것도 강요가 되나요?',
        answer:
          '<strong>물리적 접촉·유형력 정황과 차량 사용 가능 여부에 따라 평가가 갈리는 영역입니다.</strong> 막힌 시간·정황을 사진·영상으로 확보.',
      },
      {
        question: '직접 맞아 다친 부분은 어떻게 다투나요?',
        answer:
          '<strong>밀치고 때린 직접 폭행은 폭행·상해로 다투는 영역입니다.</strong> 진단서·부위 사진으로 부상 정도를 입증.',
      },
      {
        question: '층간소음 녹취도 증거가 되나요?',
        answer:
          '<strong>항의 발단과 경위를 보여주는 정황 자료가 되는 영역입니다.</strong> 본인이 대화 당사자인 녹취를 정리.',
      },
      {
        question: 'CCTV는 어디서 확보하나요?',
        answer:
          '<strong>공동현관·복도·주차장 영상으로 직접·간접 정황을 보여줄 수 있는 영역입니다.</strong> 관리사무소에 보존 요청을 먼저 진행.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '온라인 협박 고소 절차 총정리', href: '/guide/assault/assault-online-threat-prosecution' },
      { label: '층간소음 시비 폭행', href: '/guide/assault/assault-floor-noise-dispute-track' },
      { label: '공동주택 엘리베이터 폭행 CCTV', href: '/guide/assault/assault-apartment-elevator-cctv-evidence-track' },
      { label: '장애인 폭행 가중 처벌', href: '/guide/assault/assault-disabled-victim-aggravated-penalty' },
    ],
  },

  // ─── 3. assault-group-collective-track ───
  {
    domain: 'assault',
    slug: 'assault-group-collective-track',
    keyword: '다중 공동폭행 공모 가담',
    questionKeyword: '여러 명이 무리지어 저를 둘러싸고 합세해 폭행해 다쳤는데, 그중 직접 때리지 않고 옆에서 거들거나 지켜본 사람도 있었어요. 직접 가격하지 않은 사람들까지 공동폭행으로 함께 책임을 물을 수 있는지 막막합니다.',
    ctaKeyword: '다중 공동폭행 공모 가담 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '다중 공동폭행 — 5단계 공모·가담 책임 점검 | 로앤가이드',
      description:
        '여럿이 합세해 폭행당했는데 직접 안 때린 가담자까지 책임을 물을 수 있을지 막막하다면 폭처법 공동폭행과 공모공동정범 기능적 행위지배 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 명이 무리지어 저를 둘러싸고 합세해 밀치고 때려 얼굴과 팔에 멍과 통증이 생긴 피해자입니다. 그중 일부는 직접 주먹을 휘둘렀지만, 어떤 사람은 옆에서 \'더 해\'라며 거들거나 제 도주로를 막고 지켜보기만 한 경우도 있었어요. 직접 가격한 사람만 처벌되고, 거들거나 둘러싸기만 한 사람들은 빠져나가는 건 아닌지, 직접 때리지 않은 가담자까지 다중 공동폭행으로 함께 책임을 물을 수 있는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을, 폭력행위 등 처벌에 관한 법률 제2조 제2항은 2명 이상이 공동해 폭행·상해한 공동범행의 가중처벌을 규정하는 영역입니다. 판례·실무는 공모공동정범에서 공모자들이 공모한 범행을 수행하는 과정에 부수적 범죄가 파생되리라 예상하거나 충분히 예상할 수 있는데도 이를 방지할 합리적 조치를 취하지 않고 나아가 그 범행이 발생했다면, 개별적 의사 연락이 없더라도 암묵적 공모와 기능적 행위지배가 인정될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 다중 + 합세·둘러쌈 + 직접 가격 여부 혼재 결합은 \'공동폭행·공모 가담 책임\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 가담 양상 ② 공모·역할 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 가담 ② 공모 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다중 공동폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가담 양상·공모/역할·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가담 양상</strong> — 누가 직접 가격·거들기·둘러싸기·도주로 차단을 했는지 정리.</li>\n<li><strong>② 공모·역할</strong> — 명시적·암묵적 공모와 각자의 본질적 기여·역할 정리.</li>\n<li><strong>③ 고소</strong> — 공동폭행(폭처법 제2조 제2항)·상해 등 가담자별 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름.</li>\n<li><strong>⑤ 민사 손배</strong> — 가담자 공동불법행위 손해배상·형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공모공동정범에서는 직접 가격하지 않았더라도 공모한 범행 과정에 파생될 폭행을 예상할 수 있었는데 방지 조치 없이 나아갔다면, 개별 의사 연락이 없어도 암묵적 공모와 기능적 행위지배가 인정될 여지가 있는 영역. 각자의 가담 양상·역할을 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위·현장 사진 확보.</li>\n<li><strong>2단계 — 가담 양상·역할 정리 (수일 내)</strong> — 가담자별 직접 가격·거들기·둘러쌈·도주 차단 등 역할 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·영상 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 가담자별 형사 합의 또는 공동불법행위 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다중 공동폭행 공모·가담 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 가담 양상·공모·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>현장 CCTV·휴대폰 촬영 영상 (가담자별 역할)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>가담자 인상착의·인원·역할 메모 (육하원칙)</strong></li>\n<li><strong>둘러쌈·도주로 차단·거들기 정황 기록</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 가격하지 않은 사람도 공모와 기능적 기여가 인정되면 함께 책임을 물을 수 있으므로, 누가 둘러싸고 도주로를 막거나 거들었는지 가담자별 역할을 구체적으로 정리해두는 것이 도움이 됩니다. 현장 CCTV·촬영 영상은 인원과 각자의 역할을 보여줄 수 있어 즉시 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공모 인정</strong> — 암묵적 공모와 기능적 행위지배가 있는지.</li>\n<li><strong>역할·기여</strong> — 둘러쌈·도주 차단·거들기의 본질적 기여 여부.</li>\n<li><strong>공동폭행 가중</strong> — 2명 이상 공동범행의 가중 적용.</li>\n<li><strong>가담자 특정</strong> — 인상착의·영상으로 가담자를 특정하는지.</li>\n<li><strong>합의·처벌 의사</strong> — 가담자별 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공모공동정범의 암묵적 공모와 기능적 행위지배',
        summary:
          '대법원 2010도7412(대법원, 2010.12.23 선고) 영역에서 법원은 공모공동정범에서 범죄의 수단·태양, 가담 인원과 성향, 시간·장소의 특성, 타인과의 접촉 가능성 등에 비추어 공모자들이 공모한 범행을 수행하는 도중 부수적 범죄가 파생되리라 예상하거나 충분히 예상할 수 있는데도 이를 방지할 합리적 조치를 취하지 않고 나아가 결국 예상되던 범행이 발생했다면, 개별적 의사 연락이 없더라도 당초 공모자들 사이에 그 범행 전부에 대한 암묵적 공모와 기능적 행위지배가 존재한다고 판시했습니다. 직접 모의·실행하지 않았더라도 가담 경위·지위·역할에 비추어 공동정범으로 의율할 수 있다고 본 사례입니다. 다중 공동폭행 사안에서도 직접 가격하지 않은 가담자의 공모·기여를 검토해볼 수 있습니다.',
        takeaway: '다중 + 합세·둘러쌈 + 직접 가격 여부 혼재 결합 시 공동폭행·공모 가담 책임 검토 영역 — 가담자별 역할·CCTV·인상착의 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '직접 안 때린 사람도 공동폭행으로 처벌되나요?',
        answer:
          '<strong>공모와 기능적 기여가 인정되면 함께 책임을 물을 수 있는 영역입니다.</strong> 가담자별 역할·정황을 구체적으로 정리.',
      },
      {
        question: '둘러싸고 도주로만 막은 사람도 가담자인가요?',
        answer:
          '<strong>둘러쌈·도주 차단이 본질적 기여로 평가될 수 있는 영역입니다.</strong> 그 행위를 영상·진술로 확보.',
      },
      {
        question: '여럿이 가담하면 형이 더 무거워지나요?',
        answer:
          '<strong>2명 이상 공동범행은 가중처벌 대상이 될 수 있는 영역입니다.</strong> 인원과 공동성 정황을 정리.',
      },
      {
        question: '가담자를 모르는데 어떻게 특정하나요?',
        answer:
          '<strong>인상착의·CCTV·목격자 진술로 특정을 시도하는 영역입니다.</strong> 인원·역할 메모와 영상을 보존.',
      },
      {
        question: '한 명과 합의하면 다른 가담자도 끝나나요?',
        answer:
          '<strong>합의는 가담자별로 처리에 영향을 주는 영역입니다.</strong> 누구와 어떤 조건으로 합의하는지 신중히 검토.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '헬스장 PT 트레이너 부상', href: '/guide/assault/assault-fitness-gym-personal-trainer-injury-track' },
      { label: '단체 폭행 가담 책임', href: '/guide/assault/assault-group-attack-joint-liability' },
      { label: '폭행 진단서 CCTV 증거 우열 다툼', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '장애인 폭행 가중처벌', href: '/guide/assault/assault-disabled-victim-aggravated-track' },
    ],
  },

  // ─── 4. assault-workplace-supervisor-track ───
  {
    domain: 'assault',
    slug: 'assault-workplace-supervisor-track',
    keyword: '직장 상사 폭행 진술 신빙성',
    questionKeyword: '직장 상사가 사무실에서 반복적으로 저를 밀치고 때렸는데 목격자가 마땅치 않고 CCTV도 없어 사실상 제 진술이 거의 유일한 증거예요. 가해자가 부인하는데 제 진술만으로 고소가 받아들여질 수 있는지, 어떤 순서로 신고해야 하는지 막막합니다.',
    ctaKeyword: '직장 상사 폭행 진술 신빙성 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 상사 폭행 — 5단계 진술 신빙성·신고 점검 | 로앤가이드',
      description:
        '상사가 반복 폭행했는데 목격자·CCTV가 없어 진술뿐이라 막막하다면 형법 제257조·제260조 적용과 피해자 진술 신빙성·신고 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장 상사가 업무를 핑계로 사무실·창고 등 사람 없는 곳에서 반복적으로 저를 밀치고 때려 멍과 통증이 생긴 피해자입니다. 그런데 워낙 둘만 있을 때 벌어진 일이라 마땅한 목격자도 없고 그 자리에 CCTV도 없어, 사실상 제 진술이 거의 유일한 증거예요. 상사는 \'그런 적 없다\'며 전면 부인하고 직장 내 위계 때문에 동료들도 입을 다무는 상황이라, 제 진술만으로 고소가 받아들여질 수 있는지, 어떤 순서로 신고·고소를 진행해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을 규정하는 영역입니다. 판례·실무는 증거의 증명력은 법관의 자유판단에 맡겨져 있으나 논리와 경험칙에 합치해야 하고, 피해자 진술이 주요 부분에서 일관되며 경험칙상 비합리적이거나 모순되는 부분이 없고 허위로 불리한 진술을 할 동기가 분명히 드러나지 않는 이상 그 신빙성을 특별한 이유 없이 함부로 배척해서는 안 되며, 가해자 진술이 경험칙상 합리성이 없고 모순돼 믿을 수 없다는 사정은 피해자 진술의 신빙성을 뒷받침하는 간접정황이 될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 직장 상사 + 반복 폭행 + 진술 중심 입증 결합은 \'피해자 진술 신빙성·신고 절차\' 검토가 가능한 트랙입니다. 피해자라면 ① 진술 정리 ② 정황 증거 ③ 신고·고소 ④ 형사 절차 ⑤ 민사·노동 5중 트랙이 가능한 영역. 대응은 ① 진술 ② 정황 ③ 신고 ④ 형사 ⑤ 병행 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 상사 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진술 정리·정황 증거·신고/고소·형사 절차·민사/노동 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진술 정리</strong> — 일시·장소·행위·부상을 일관되게 시간순으로 정리.</li>\n<li><strong>② 정황 증거</strong> — 진단서·메시지·녹취·통원기록 등 진술을 뒷받침할 정황 확보.</li>\n<li><strong>③ 신고·고소</strong> — 폭행(제260조)·상해(제257조) 고소장 접수 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사·노동</strong> — 손해배상과 직장 내 괴롭힘 등 노동 절차 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피해자 진술이 주요 부분에서 일관되고 경험칙상 비합리적이거나 모순되지 않으며 허위 진술 동기가 분명치 않다면, 진술이 거의 유일한 증거라도 신빙성을 함부로 배척하기 어려운 영역. 진술의 일관성과 이를 뒷받침할 정황 증거를 함께 갖추는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·진술 정리 (즉시~수일)</strong> — 병원 진료·상해진단서, 폭행 일시·장소·경위 시간순 정리.</li>\n<li><strong>2단계 — 정황 증거 수집 (가능한 빨리)</strong> — 메시지·녹취·통원기록, 정황을 아는 동료 진술 확보.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술 일관성 유지, 진단서·정황 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 민사·노동 병행 (병행)</strong> — 손해배상, 직장 내 괴롭힘 신고·노동위 등 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 상사 폭행 진술 신빙성·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진술 정리·정황 증거·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>폭행 일시·장소·경위 정리 메모 (시간순·일관성)</strong></li>\n<li><strong>상사와의 메시지·통화·녹취 기록 (본인 당사자)</strong></li>\n<li><strong>다친 부위 사진·통원 내역 (정황 뒷받침)</strong></li>\n<li><strong>정황을 아는 동료 진술·연락처</strong></li>\n<li><strong>근무 일정·출입 기록 (시간·장소 입증)</strong></li>\n<li><strong>직장 내 괴롭힘 신고·인사 자료 (해당 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진술이 거의 유일한 증거인 사안일수록 일시·장소·행위·부상을 사실대로 일관되게 정리해두는 것이 신빙성 판단에 도움이 되고, 메시지·녹취·통원기록 같은 정황 증거를 함께 모으면 진술을 뒷받침할 수 있습니다. 본인이 대화 당사자인 녹취는 활용 가능하므로 폭행 전후 대화·사과 정황을 보존해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 진술이 일관되고 모순이 없는지.</li>\n<li><strong>허위 동기</strong> — 불리하게 진술할 허위 동기가 있는지.</li>\n<li><strong>가해자 진술</strong> — 부인 진술이 합리성 없고 모순되는지.</li>\n<li><strong>정황 증거</strong> — 진단서·메시지·녹취가 진술을 뒷받침하는지.</li>\n<li><strong>직장 내 위계</strong> — 위계로 동료 진술 확보가 어려운지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술이 사실상 유일한 경우의 신빙성 판단',
        summary:
          '대법원 2018도7709(대법원, 2018.10.25 선고) 영역에서 법원은 증거의 증명력은 법관의 자유판단에 맡겨져 있으나 논리와 경험칙에 합치해야 하고, 피해자 진술이 주요 부분에서 일관되며 경험칙상 비합리적이거나 진술 자체로 모순되는 부분이 없고 허위로 불리한 진술을 할 동기나 이유가 분명히 드러나지 않는 이상 그 신빙성을 특별한 이유 없이 함부로 배척해서는 안 되며, 공소사실을 인정할 증거로 사실상 피해자 진술이 유일한 경우 가해자 진술이 경험칙상 합리성이 없고 모순돼 믿을 수 없다는 사정은 피해자 진술의 신빙성을 뒷받침하거나 간접정황이 될 수 있다고 판시했습니다. 직장 상사의 반복 폭행 사안에서도 진술 신빙성을 검토해볼 수 있습니다.',
        takeaway: '직장 상사 + 반복 폭행 + 진술 중심 입증 결합 시 피해자 진술 신빙성·신고 절차 검토 영역 — 진술 일관성·정황 증거·진단서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '목격자·CCTV가 없고 제 진술뿐인데 가능할까요?',
        answer:
          '<strong>진술이 일관되고 모순이 없으면 신빙성을 함부로 배척하기 어려운 영역입니다.</strong> 일시·장소·경위를 시간순으로 정리.',
      },
      {
        question: '상사가 전면 부인하면 불리한가요?',
        answer:
          '<strong>부인 진술이 합리성 없고 모순되면 오히려 피해 진술의 간접정황이 될 수 있는 영역입니다.</strong> 부인 정황도 함께 기록.',
      },
      {
        question: '몰래 한 녹음도 증거가 되나요?',
        answer:
          '<strong>본인이 대화 당사자인 녹취는 활용을 검토할 수 있는 영역입니다.</strong> 폭행 전후 대화·사과 정황을 보존.',
      },
      {
        question: '직장 동료가 증언을 꺼리면 어떻게 하나요?',
        answer:
          '<strong>정황을 아는 동료 진술이 어려우면 진단서·메시지 등 정황 증거로 보강하는 영역입니다.</strong> 가능한 자료를 폭넓게 수집.',
      },
      {
        question: '형사와 직장 내 절차를 같이 해도 되나요?',
        answer:
          '<strong>형사 고소와 직장 내 괴롭힘 신고·민사 손배를 병행할 수 있는 영역입니다.</strong> 각 절차에 맞는 자료를 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '폭행 피해 진술 신빙성', href: '/guide/assault/assault-victim-statement-petition-credibility-track' },
      { label: '군대 내 폭행 군형법', href: '/guide/assault/assault-military-internal-violence-track' },
      { label: '폭행 피해 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '형제자매 폭행 가정폭력', href: '/guide/assault/assault-domestic-sibling-violence-victim-track' },
    ],
  },

  // ─── 5. dui-injury-dangerous-driving-track ───
  {
    domain: 'dui',
    slug: 'dui-injury-dangerous-driving-track',
    keyword: '음주 위험운전치상 적용법조 공소장변경',
    questionKeyword: '음주 상태로 운전하다 사람을 다치게 해 위험운전치상과 음주운전으로 입건됐는데, 검사가 기소한 적용법조와 법원이 적용하려는 조항이 달라 더 무거운 형으로 처벌될 수 있다고 들었어요. 혐의를 받고 있다면 공소장변경 없이 더 무거운 조항을 적용받는 게 맞는지 막막합니다.',
    ctaKeyword: '음주 위험운전치상 적용법조 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 위험운전치상 — 5단계 적용법조·방어권 점검 | 로앤가이드',
      description:
        '음주 위험운전치상으로 기소됐는데 공소장변경 없이 더 무거운 법조를 적용받을까 막막하다면 도로교통법·특가법 적용법조와 불고불리·방어권 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 상태로 운전하다 앞차·보행자와 사고를 내 상대가 다쳐 위험운전치상과 음주운전으로 입건된 사람입니다. 그런데 검사가 기소하면서 적은 적용법조와, 재판 과정에서 법원이 적용하려는 조항이 달라서, 공소장변경 절차도 없이 더 무거운 처벌조항이 적용돼 형이 가중될 수 있다는 말을 들었어요. 같은 음주운전이라도 어떤 조항을 적용하느냐에 따라 형이 크게 달라진다는데, 혐의를 받고 있다면 법원이 공소장변경 없이 더 무거운 조항을 그대로 적용하는 것이 맞는지, 방어권 측면에서 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전을 금지하고, 같은 법 제148조의2는 위반 횟수·수치에 따른 처벌을, 특정범죄가중처벌 등에 관한 법률 제5조의11은 위험운전치사상을 정하는 영역입니다. 판례·실무는 피고인의 방어권 행사에 실질적 불이익을 초래할 염려가 없으면 법원이 공소장변경 없이 일부 다른 사실을 인정하거나 적용법조를 수정해도 불고불리 원칙에 위배되지 않으나, 실질적 불이익 여부는 공소사실의 기본적 동일성과 함께 법정형의 경중·그에 따른 방어 노력 차이 등을 종합 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 위험운전치상 + 적용법조 상이 + 형 가중 우려 결합은 \'적용법조·불고불리·방어권\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 적용법조 ② 공소사실 동일성 ③ 방어권 ④ 양형 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 법조 ② 동일성 ③ 방어 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 위험운전치상 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적용법조·공소사실 동일성·방어권·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적용법조</strong> — 기소 적용법조와 법원이 적용하려는 조항의 차이·경중 정리.</li>\n<li><strong>② 공소사실 동일성</strong> — 변경되는 사실이 기본적 동일성 범위 내인지 정리.</li>\n<li><strong>③ 방어권</strong> — 더 무거운 법조 적용이 방어 노력·전략에 불이익을 주는지.</li>\n<li><strong>④ 양형</strong> — 피해 회복·합의·초범·반성 등 양형 자료 정리.</li>\n<li><strong>⑤ 대응</strong> — 불고불리·공소장변경 쟁점과 변론 방향 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 방어권에 실질적 불이익이 없으면 법원이 공소장변경 없이 적용법조를 수정해도 불고불리에 어긋나지 않으나, 더 무거운 법조로 바뀌어 방어에 들일 노력·시간·비용 판단이 달라질 수 있다면 실질적 불이익으로 평가될 여지가 있는 영역. 적용법조의 경중 차이와 방어권 영향이 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 공소장·법조 확인 (즉시)</strong> — 공소장 기재 적용법조·공소사실, 측정 결과·사고 자료 확인.</li>\n<li><strong>2단계 — 법조 경중·동일성 정리 (수일 내)</strong> — 기소 법조와 가중 법조의 법정형 차이·기본적 동일성 점검.</li>\n<li><strong>3단계 — 방어권 쟁점 정리 (공판 전)</strong> — 더 무거운 법조 적용의 방어 불이익·불고불리 쟁점 정리.</li>\n<li><strong>4단계 — 양형·합의 자료 정리 (병행)</strong> — 피해 회복·합의, 초범·반성 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 적용법조·방어권 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 위험운전치상 적용법조·방어권 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 적용법조·방어권·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>공소장 (적용법조·공소사실 기재)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>교통사고사실확인원·상대 진단서 (피해 정도)</strong></li>\n<li><strong>블랙박스·현장 CCTV 영상 (사고 경위)</strong></li>\n<li><strong>법정형 비교 정리 메모 (법조 경중)</strong></li>\n<li><strong>피해 회복·합의서·공탁 자료 (양형)</strong></li>\n<li><strong>초범·반성·생계 등 정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 음주운전 사고라도 어떤 조항을 적용하느냐에 따라 법정형이 크게 달라지므로 기소된 법조와 법원이 적용하려는 법조의 경중을 비교해 정리해두는 것이 방어에 도움이 됩니다. 더 무거운 법조 적용이 방어 전략·노력에 영향을 준다면 불고불리·방어권 쟁점이 될 수 있어 공판 전에 점검해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용법조 경중</strong> — 기소 법조와 가중 법조의 법정형 차이.</li>\n<li><strong>공소사실 동일성</strong> — 변경 사실이 기본적 동일성 범위인지.</li>\n<li><strong>방어권 불이익</strong> — 더 무거운 법조 적용이 방어에 불이익인지.</li>\n<li><strong>불고불리</strong> — 공소장변경 없는 가중 적용의 한계.</li>\n<li><strong>양형 사정</strong> — 피해 회복·합의·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공소장변경 없는 적용법조 수정과 불고불리',
        summary:
          '대법원 2019도4608(대법원, 2019.06.13 선고) 영역에서 법원은 피고인의 방어권 행사에 실질적 불이익을 초래할 염려가 없으면 법원이 공소장변경 절차 없이 일부 다른 사실을 인정하거나 적용법조를 수정해도 불고불리 원칙에 위배되지 않으나, 실질적 불이익을 초래하는지는 공소사실의 기본적 동일성과 함께 법정형의 경중·그러한 경중 차이에 따라 피고인이 방어에 들일 노력·시간·비용 판단을 달리할 가능성이 뚜렷한지 등을 종합 판단해야 한다고 판시했습니다. 검사가 형이 가벼운 음주운전 처벌조항으로 기소했는데 법원이 공소장변경 없이 직권으로 더 무거운 조항을 적용해 처벌하는 것은 방어권에 실질적 불이익을 초래해 불고불리에 반한다고 본 사례입니다. 음주 위험운전치상 사안에서도 적용법조 수정의 한계를 검토해볼 수 있습니다.',
        takeaway: '위험운전치상 + 적용법조 상이 + 형 가중 우려 결합 시 적용법조·불고불리·방어권 검토 영역 — 법조 경중·공소사실 동일성·양형 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '공소장변경 없이 더 무거운 조항을 적용할 수 있나요?',
        answer:
          '<strong>방어권에 실질적 불이익이 없어야 가능하고, 더 무거운 법조로의 직권 변경은 불고불리에 반할 수 있는 영역입니다.</strong> 법조 경중 차이를 비교 정리.',
      },
      {
        question: '같은 음주운전인데 조항만 다르면 형이 크게 달라지나요?',
        answer:
          '<strong>적용조항에 따라 법정형이 달라질 수 있는 영역입니다.</strong> 기소 법조와 가중 법조의 법정형을 비교.',
      },
      {
        question: '방어권에 불이익이라는 건 어떻게 판단하나요?',
        answer:
          '<strong>법정형 경중과 방어 노력·전략 변화 가능성을 종합해 보는 영역입니다.</strong> 방어 전략이 달라지는 지점을 정리.',
      },
      {
        question: '피해자와 합의하면 도움이 되나요?',
        answer:
          '<strong>피해 회복·합의는 양형에 반영될 수 있는 영역입니다.</strong> 합의서·공탁 자료를 갖춰 제출 검토.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>공소장 적용법조·측정 결과·사고 자료 확보가 출발점인 영역입니다.</strong> 법정형 비교와 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 위험운전치상 적용법조 공소장변경', href: '/guide/dui/dui-injury-dangerous-driving-track' },
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
      { label: '음주운전 행정심판 90일 면허취소 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 합의 절차와 방법', href: '/guide/dui/dui-settlement' },
      { label: '음주운전 면허 행정처분 절차', href: '/guide/dui/dui-administrative-license-procedure' },
    ],
  },

  // ─── 6. dui-next-morning-hangover-track ───
  {
    domain: 'dui',
    slug: 'dui-next-morning-hangover-track',
    keyword: '숙취운전 식당 음주측정 임의수사',
    questionKeyword: '전날 마신 술이 덜 깬 상태로 운전해 식당에 들어가 있었는데, 신고를 받고 온 경찰이 영장 없이 식당에 들어와 저를 찾아 음주측정을 했어요. 혐의를 받고 있다면 이렇게 영장 없이 식당에서 한 음주측정이 위법해 다툴 수 있는지 막막합니다.',
    ctaKeyword: '숙취운전 식당 음주측정 임의수사 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '숙취운전 식당 측정 — 5단계 임의수사·적법성 점검 | 로앤가이드',
      description:
        '전날 술이 덜 깬 채 운전 후 식당에서 영장 없이 음주측정을 당해 막막하다면 형사소송법 제199조 임의수사와 측정 적법성을 다투는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전날 늦게까지 마신 술이 채 깨지 않은 상태로 아침에 차를 운전해 식당에 들어가 있었는데, \'만취한 사람이 차를 세우고 식당으로 들어갔다\'는 112 신고를 받은 경찰이 식당 안으로 들어와 곧장 제게 다가와 음주운전 여부를 묻고 그 자리에서 음주측정을 한 사람입니다. 저는 운전을 마치고 식당 안에 있었고 경찰이 영장도 없이 식당에 들어와 저를 찾아낸 건데, 이렇게 들어와서 한 측정이 적법한지 의문이 들어요. 혐의를 받고 있다면 영장 없이 식당에서 이뤄진 음주측정이 위법수집증거로 다툴 수 있는지, 어떻게 정리해야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전을 금지하고, 형사소송법 제199조 제1항은 임의수사의 원칙을 정하는 영역입니다. 판례·실무는 수사기관이 범죄를 수사하면서 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 아무런 물리력·강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾는 등 위법행위를 확인하는 것은 특별한 사정이 없는 한 임의수사로서 허용되므로 영장 없이 이뤄졌다고 하여 위법하다고 할 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 숙취운전 + 식당 출입 + 영장 없는 측정 결합은 \'임의수사·측정 적법성\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 출입 정황 ② 강제력 여부 ③ 측정 적법성 ④ 운전·시점 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 출입 ② 강제력 ③ 측정 ④ 운전 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 숙취운전 식당 음주측정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 출입 정황·강제력 여부·측정 적법성·운전/시점·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 출입 정황</strong> — 식당이 불특정·다수 출입 가능 장소인지, 통상적 출입이었는지 정리.</li>\n<li><strong>② 강제력 여부</strong> — 경찰이 물리력·강제력을 행사했는지, 종업원 퇴거 요구가 있었는지.</li>\n<li><strong>③ 측정 적법성</strong> — 측정 방법·절차, 영장 없는 측정의 적법성 정리.</li>\n<li><strong>④ 운전·시점</strong> — 운전 사실·시점과 측정 사이 정황, 숙취 정도 정리.</li>\n<li><strong>⑤ 대응</strong> — 위법수집증거·임의수사 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경찰이 불특정·다수 출입이 가능한 식당에 통상적 방법으로 들어와 물리력·강제력 없이 피의자를 찾는 것은 임의수사로서 허용될 수 있고, 그에 이은 음주측정도 곧바로 위법하다고 보기 어려울 수 있는 영역. 출입 장소의 성격과 강제력 행사 여부, 측정 절차가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 측정·단속 자료 확보 (즉시~당일)</strong> — 측정 결과지·측정 방법, 식당 출입·단속 경위 확인.</li>\n<li><strong>2단계 — 출입·강제력 정황 정리 (수일 내)</strong> — 식당 성격, 경찰 출입 방법·물리력 여부·종업원 대응 기록.</li>\n<li><strong>3단계 — 측정 적법성 점검 (공판 전)</strong> — 측정 방법·절차, 영장 요부·임의수사 쟁점 정리.</li>\n<li><strong>4단계 — 양형·합의 자료 정리 (병행)</strong> — 초범·반성, 운전 거리·정황 자료 준비.</li>\n<li><strong>5단계 — 변론·처분 대응 (검찰 처분 후)</strong> — 기소 시 임의수사·증거능력 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">숙취운전 식당 음주측정 임의수사 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 출입 정황·강제력·측정 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>주취운전자 적발보고서·단속 경위 자료</strong></li>\n<li><strong>식당 출입·체류 정황 자료 (영업시간·개방성)</strong></li>\n<li><strong>식당 CCTV·단속 영상 (출입·강제력 여부)</strong></li>\n<li><strong>운전 거리·시각·도착 시점 메모 (시간순)</strong></li>\n<li><strong>전날 음주 시간·양·숙취 정황 기록</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경찰이 식당에 들어온 방법과 물리력·강제력 행사 여부, 종업원의 출입 제지·퇴거 요구 유무가 임의수사·측정 적법성 판단의 핵심이 되므로 출입 정황을 구체적으로 정리해두는 것이 도움이 됩니다. 식당 CCTV·단속 영상은 출입과 측정 정황을 보여줄 수 있어 즉시 확보·보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임의수사 허용</strong> — 통상적 출입·피의자 확인이 임의수사로 허용되는지.</li>\n<li><strong>강제력 여부</strong> — 물리력·강제력 행사나 퇴거 요구가 있었는지.</li>\n<li><strong>측정 적법성</strong> — 측정 방법·절차, 영장 요부.</li>\n<li><strong>운전·시점</strong> — 운전 사실·시점과 숙취 정도.</li>\n<li><strong>증거능력</strong> — 측정 결과·보고서의 증거능력.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 불특정 다수 출입 장소에서의 임의수사와 측정 적법성',
        summary:
          '대법원 2025도6752(대법원, 2025.12.11 선고) 영역에서 법원은 형사소송법 제199조 제1항이 임의수사의 원칙을 밝히고 있고, 수사기관이 범죄를 수사하면서 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 아무런 물리력이나 강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾는 등 위법행위를 확인하는 것은 특별한 사정이 없는 한 임의수사의 한 방법으로 허용되므로 영장 없이 이뤄졌다고 하여 위법하다고 할 수 없다고 판시했습니다. 112 신고를 받고 24시간 영업 식당에 통상적 방법으로 들어가 물리력 없이 피의자를 찾고 종업원의 제지·퇴거 요구도 없었던 사안에서 그에 이은 음주측정도 적법하다고 본 사례입니다. 숙취운전 식당 측정 사안에서도 임의수사·측정 적법성을 검토해볼 수 있습니다.',
        takeaway: '숙취운전 + 식당 출입 + 영장 없는 측정 결합 시 임의수사·측정 적법성 검토 영역 — 출입 정황·강제력 여부·측정 절차 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '영장 없이 식당에 들어와 측정한 건 위법 아닌가요?',
        answer:
          '<strong>불특정·다수 출입 장소에 통상적으로 들어와 강제력 없이 피의자를 찾는 것은 임의수사로 허용될 수 있는 영역입니다.</strong> 출입 정황을 정리해 검토.',
      },
      {
        question: '경찰이 강제로 들어왔다면 달라지나요?',
        answer:
          '<strong>물리력·강제력 행사나 퇴거 요구가 있었는지가 적법성 판단에 영향을 줄 수 있는 영역입니다.</strong> 출입 방법·종업원 대응을 확인.',
      },
      {
        question: '운전을 끝내고 식당에 있었는데도 음주운전이 되나요?',
        answer:
          '<strong>운전 사실·시점이 인정되면 측정 결과로 음주운전이 문제될 수 있는 영역입니다.</strong> 운전 거리·시각·숙취 정황을 정리.',
      },
      {
        question: '전날 술인데 숙취만으로도 처벌되나요?',
        answer:
          '<strong>운전 당시 혈중알코올농도가 기준치 이상이면 숙취운전도 음주운전이 될 수 있는 영역입니다.</strong> 음주 시간·양·측정 시각을 기록.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 결과지·적발보고서·식당 출입 정황 확보가 출발점인 영역입니다.</strong> 식당 CCTV·단속 영상을 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부', href: '/guide/dui/dui-breath-test-refusal-track' },
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
      { label: '숙취 다음날 아침 음주운전 처벌 여부', href: '/guide/dui/dui-hangover-next-morning-driving-falsely-accused-defense' },
      { label: '음주운전 행정심판 90일 면허취소 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주 면허취소 행정심판 재량권', href: '/guide/dui/dui-administrative-suspension-appeal-track' },
    ],
  },

  // ─── 7. dui-administrative-suspension-appeal-track ───
  {
    domain: 'dui',
    slug: 'dui-administrative-suspension-appeal-track',
    keyword: '음주 면허취소 행정심판 재량권',
    questionKeyword: '음주운전으로 운전면허가 한꺼번에 여러 종 취소돼 생계가 막막해, 처분이 지나치다며 행정심판으로 다퉈 면허를 살리고 싶어요. 혐의를 받고 있다면 음주 면허취소를 재량권 일탈로 다툴 수 있는지, 청구 기한은 언제까지인지 막막합니다.',
    ctaKeyword: '음주 면허취소 행정심판 재량권 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 면허취소 행정심판 — 5단계 재량권·90일 점검 | 로앤가이드',
      description:
        '음주운전으로 면허가 한꺼번에 취소돼 막막하다면 도로교통법 취소 재량과 재량권 일탈·남용, 행정심판 90일 청구기한 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전이 적발돼 가지고 있던 여러 종의 운전면허가 한꺼번에 취소되면서 당장 생계와 출퇴근이 막막해진 사람입니다. 사고도 없었고 평소 운전이 꼭 필요한 사정이 있는데 면허가 전부 취소된 것이 지나치다는 생각이 들어, 처분이 재량권을 벗어난 것이라며 행정심판으로 다퉈 면허를 일부라도 살리고 싶어요. 그런데 음주운전 면허취소는 일반 행정처분과 달리 공익이 더 강조된다는 말도 있고, 청구 기한도 정해져 있다고 해서, 혐의를 받고 있다면 재량권 일탈·남용으로 다툴 수 있는지, 언제까지 청구해야 하는지 막막한 상태입니다." 도로교통법 제93조는 음주운전 등에 따른 운전면허 취소·정지를, 행정심판법 제27조는 처분이 있음을 안 날부터 90일 이내의 청구기한을 정하는 영역입니다. 판례·실무는 음주운전 시 운전면허 취소 여부는 행정청의 재량행위이나, 음주운전 교통사고의 증가와 결과의 참혹성에 비추어 사고 방지의 공익상 필요가 더 중시되고, 운전면허 취소에서는 일반의 수익적 행정행위 취소와 달리 당사자의 불이익보다 이를 방지하려는 일반예방적 측면이 더 강조돼야 한다고 보는 본 사례 흐름이 있는 영역입니다. 음주 면허취소 + 생계 곤란 + 재량권 다툼 결합은 \'재량권 일탈·남용·90일 청구\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 처분 내용 ② 청구기한 ③ 재량권 ④ 정상자료 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 처분 ② 기한 ③ 재량 ④ 정상 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 면허취소 행정심판 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분 내용·청구기한·재량권·정상자료·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 내용</strong> — 취소된 면허 종류·처분 사유·혈중알코올농도 확인.</li>\n<li><strong>② 청구기한</strong> — 처분을 안 날부터 90일 이내 행정심판 청구기한 점검.</li>\n<li><strong>③ 재량권</strong> — 처분이 사회통념상 현저히 타당성을 잃어 재량권 일탈·남용인지.</li>\n<li><strong>④ 정상자료</strong> — 생계·운전 필요성·반성 등 감경 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 행정심판 청구·집행정지·재결 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주운전 면허취소는 재량행위이나 일반예방적 공익이 강조돼 당사자 불이익만으로 쉽게 위법이 인정되지 않을 수 있는 영역. 청구기한(처분을 안 날부터 90일)을 지키고, 처분이 현저히 타당성을 잃었다고 볼 만한 정상자료를 갖추는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 행정심판 5단계',
        content:
          '<p><strong>A. 중앙행정심판위·도로교통공단·경찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지 확인 (즉시)</strong> — 운전면허취소처분 통지서·처분 사유·혈중알코올농도 확인.</li>\n<li><strong>2단계 — 청구기한 점검 (안 날부터 90일 내)</strong> — 처분을 안 날 기준 90일 청구기한, 집행정지 필요성 점검.</li>\n<li><strong>3단계 — 정상자료 수집 (가능한 빨리)</strong> — 생계·운전 필요성·반성·사고 무 등 자료 정리.</li>\n<li><strong>4단계 — 행정심판 청구·집행정지 (기한 내)</strong> — 중앙행정심판위 청구서 제출, 집행정지 신청 검토.</li>\n<li><strong>5단계 — 재결 대응 (재결 후)</strong> — 인용·기각 재결에 따른 후속(행정소송 등) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 면허취소 행정심판 재량권·90일 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 처분 내용·청구기한·정상자료 갈래입니다.</strong></p>\n<ul>\n<li><strong>운전면허취소처분 통지서 (처분 사유·일자)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>주취운전자 적발보고서 (단속 경위)</strong></li>\n<li><strong>행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n<li><strong>생계·운전 필요성 입증 자료 (재직·사업·가족)</strong></li>\n<li><strong>반성문·사고 무·무사고 경력 등 정상 자료</strong></li>\n<li><strong>처분을 안 날 입증 자료 (송달·수령 기록)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정심판은 처분이 있음을 안 날부터 90일 이내에 청구해야 하므로 통지서 수령일을 기준으로 기한부터 점검하고, 면허 공백이 생계에 미치는 영향을 줄이려면 집행정지 신청도 함께 검토하는 것이 도움이 됩니다. 음주 면허취소는 공익이 강조돼 정상자료가 두툼할수록 유리하므로 생계·운전 필요성·반성 자료를 충실히 갖춰두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>재량권 일탈·남용</strong> — 처분이 현저히 타당성을 잃었는지.</li>\n<li><strong>공익 강조</strong> — 일반예방적 공익이 강조되는 처분 성격.</li>\n<li><strong>청구기한</strong> — 처분을 안 날부터 90일 준수 여부.</li>\n<li><strong>집행정지</strong> — 재결 전 면허 공백을 줄일 수 있는지.</li>\n<li><strong>정상 사정</strong> — 생계·운전 필요성·반성 등 감경 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 면허취소의 재량과 일반예방적 측면',
        summary:
          '대법원 2017두67476(대법원, 2018.02.28 선고) 영역에서 법원은 운전면허를 받은 사람이 음주운전을 한 경우 운전면허 취소 여부는 행정청의 재량행위이나, 음주운전 교통사고의 증가와 결과의 참혹성에 비추어 사고를 방지할 공익상 필요가 더욱 중시되어야 하고, 운전면허 취소에서는 일반의 수익적 행정행위 취소와 달리 당사자의 불이익보다 이를 방지하려는 일반예방적 측면이 더욱 강조되어야 한다고 판시했습니다. 혈중알코올농도가 취소 기준을 훨씬 초과하고 특별히 감경할 사정이 없으며 부득이한 운전 사정도 보이지 않는다면, 여러 종 면허를 함께 취소한 처분이 재량권을 일탈·남용한 것이라고 단정하기 어렵다고 본 사례입니다. 음주 면허취소 행정심판 사안에서도 재량권 일탈·남용을 검토해볼 수 있습니다.',
        takeaway: '음주 면허취소 + 생계 곤란 + 재량권 다툼 결합 시 재량권 일탈·남용·90일 청구 검토 영역 — 통지서·청구기한·정상자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '음주 면허취소도 행정심판으로 다툴 수 있나요?',
        answer:
          '<strong>재량권 일탈·남용을 주장해 행정심판으로 다툴 수 있는 영역입니다.</strong> 다만 공익이 강조돼 정상자료가 두툼해야 유리.',
      },
      {
        question: '청구 기한은 언제까지인가요?',
        answer:
          '<strong>처분이 있음을 안 날부터 90일 이내에 청구하는 것이 원칙인 영역입니다.</strong> 통지서 수령일부터 기한을 계산.',
      },
      {
        question: '생계가 걸려 있으면 면허가 살아나나요?',
        answer:
          '<strong>생계 곤란만으로 위법이 인정되긴 어렵지만 정상 사정으로 참작될 수 있는 영역입니다.</strong> 운전 필요성·생계 자료를 충실히 정리.',
      },
      {
        question: '재결 전까지 운전은 어떻게 하나요?',
        answer:
          '<strong>집행정지 신청으로 면허 공백을 줄일 수 있는지 검토하는 영역입니다.</strong> 청구와 함께 집행정지를 함께 신청.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>취소처분 통지서·측정 결과·청구기한 점검이 출발점인 영역입니다.</strong> 정상자료와 집행정지 자료를 함께 준비.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '2회 음주 면허취소 행정심판', href: '/guide/dui/dui-second-revoke-administrative-appeal' },
      { label: '처음 음주운전 면허정지 면허취소 분기', href: '/guide/dui/dui-first-offense-license-suspension-vs-revocation-criteria' },
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
      { label: '음주 면허정지 이의신청', href: '/guide/dui/dui-license-suspension-objection-track' },
      { label: '음주운전 행정심판 90일 면허취소 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
    ],
  },

  // ─── 8. jeonse-fraud-new-villa-overvalued-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-new-villa-overvalued-track',
    keyword: '신축빌라 과대평가 깡통전세 회수',
    questionKeyword: '시세를 부풀린 신축빌라에 전세보증금이 매매가에 육박하게 들어왔는데 임대인이 보증금을 못 돌려주고 경매까지 넘어갔어요. 전입·확정일자는 갖췄는데 대항력을 어떻게 지키고 보증금을 어떤 순서로 회수해야 하는지 막막합니다.',
    ctaKeyword: '신축빌라 과대평가 깡통전세 회수 순서 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '신축빌라 깡통전세 — 5단계 대항력·회수 점검 | 로앤가이드',
      description:
        '시세를 부풀린 신축빌라 전세가 깡통전세로 경매까지 넘어갔다면 주택임대차보호법 제3조 대항력 공시방법과 우선변제·회수 순서 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"준공한 지 얼마 안 된 신축빌라에 전세로 들어왔는데, 알고 보니 시세가 부풀려져 전세보증금이 사실상 매매가에 육박하는 깡통전세였던 임차인입니다. 임대인이 계약 종료 후에도 보증금을 돌려주지 못한 채 결국 건물이 경매로 넘어갔고, 깡통전세라 낙찰가가 낮으면 제 보증금을 온전히 회수하지 못할까 걱정돼요. 전입신고와 확정일자는 갖춰뒀는데 대항력을 어떻게 끝까지 지키고, 임차권등기·배당요구·반환소송을 어떤 순서로 진행해야 보증금을 지킬 수 있는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 대항력을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 임대차의 주된 목적이 주택을 사용·수익하려는 것이 아니라 후순위 권리자·다른 채권자보다 우선해 채권을 회수하려는 데 있는 경우에는 대항력을 인정하기 어렵고, 대항력의 요건인 주민등록은 임차권의 존재를 제3자가 인식할 수 있는 공시방법이 돼야 한다고 보는 본 사례 흐름이 있는 영역입니다. 신축빌라 + 과대평가 + 경매 결합은 \'대항력 공시방법·우선변제권·회수 순서\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항·우선변제 ③ 임차권등기 ④ 배당·잔액 ⑤ 소송 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 대항 ③ 등기 ④ 배당 ⑤ 소송 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신축빌라 깡통전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항/우선변제·임차권등기·배당/잔액·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·시세·경매 진행과 보증금 비율 확인.</li>\n<li><strong>② 대항·우선변제</strong> — 실제 거주·전입·확정일자로 대항력·우선변제권을 갖췄는지.</li>\n<li><strong>③ 임차권등기</strong> — 이사 필요 시 전출 전 임차권등기명령(통상 1~2개월) 검토.</li>\n<li><strong>④ 배당·잔액</strong> — 경매 배당요구와 낙찰가 대비 회수 가능 잔액 확인.</li>\n<li><strong>⑤ 소송</strong> — 미배당 잔액 회수·양수인 상대 존속 주장·반환소송 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 실제 거주·사용을 위한 임대차로서 전입·확정일자를 갖추면 대항력·우선변제권을 가질 수 있으나, 임대차의 주된 목적이 사용·수익이 아니라 우선 회수에만 있는 형식적 임대차로 보이면 대항력 인정이 어려울 수 있는 영역. 실제 거주 정황과 공시방법 유지가 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·HUG·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계·시세 확인 (즉시)</strong> — 등기부·근저당, 시세·보증금 비율, 경매개시 점검.</li>\n<li><strong>2단계 — 대항요건 점검 (수일 내)</strong> — 실제 거주·전입·확정일자 유지 여부, 대항력·우선변제권 정리.</li>\n<li><strong>3단계 — 임차권등기·배당요구 (이사 전/종기 내)</strong> — 이사 시 임차권등기명령(통상 1~2개월), 경매 배당요구.</li>\n<li><strong>4단계 — 배당 결과·잔액 확인 (배당 후)</strong> — 배당표·낙찰가, 보증금 잔액 산정.</li>\n<li><strong>5단계 — 잔액 회수·존속 주장 (병행)</strong> — 미배당 잔액 회수, 양수인 상대 존속 주장·보증금반환소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신축빌라 과대평가 깡통전세 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·경매개시)</strong></li>\n<li><strong>시세·감정·분양가 자료 (과대평가·깡통 입증)</strong></li>\n<li><strong>실제 거주 입증 자료 (관리비·우편·생활 정황)</strong></li>\n<li><strong>임차권등기명령 신청·완료 자료 (이사 시)</strong></li>\n<li><strong>경매 배당표·배당요구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신축빌라는 시세를 부풀려 보증금이 매매가에 육박하는 경우가 많아 회수 가능 범위가 낙찰가에 좌우되므로 시세·감정·분양가 자료로 과대평가 정황을 정리해두는 것이 도움이 됩니다. 대항력은 실제 거주와 전입 유지가 전제이므로 관리비·우편 등 실제 거주 입증 자료를 함께 모아두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임차 목적</strong> — 실제 거주 임대차인지, 형식적 임대차로 의심되는지.</li>\n<li><strong>대항력 공시</strong> — 주민등록이 임차권을 공시하는 방법이 되는지.</li>\n<li><strong>과대평가</strong> — 시세 부풀림으로 깡통전세가 된 정황.</li>\n<li><strong>배당·잔액</strong> — 낙찰가·선순위 배당 후 회수 가능 잔액.</li>\n<li><strong>존속 주장</strong> — 미배당 시 양수인 상대 임대차 존속 주장.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차 목적과 대항력 공시방법',
        summary:
          '대법원 2024다268508(대법원, 2025.08.14 선고) 영역에서 법원은 임대차계약의 주된 목적이 주택을 사용·수익하려는 것이 아니라 대항력 있는 임차인으로 보호받아 후순위 권리자·다른 채권자보다 우선해 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상의 대항력이 인정되지 않을 수 있고, 같은 법 제3조 제1항의 주민등록이 대항력의 공시방법이 되려면 점유관계가 임차권을 매개로 한 것임을 제3자가 인식할 수 있는 정도여야 한다고 판시했습니다. 주택의 소유자였던 사람이 임차권 양수계약을 체결한 주된 목적이 보증금 상당액 회수에 있고 그 주민등록으로 표상되는 점유가 임차권 매개임을 제3자가 인식하기 어렵다면 대항력 취득을 인정하기 어렵다고 본 사례입니다. 신축빌라 깡통전세 사안에서도 임차 목적과 공시방법을 검토해볼 수 있습니다.',
        takeaway: '신축빌라 + 과대평가 + 경매 결합 시 대항력 공시방법·우선변제권·회수 순서 검토 영역 — 실제 거주 입증·시세 자료·임차권등기 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '깡통전세면 보증금을 한 푼도 못 받나요?',
        answer:
          '<strong>낙찰가·선순위·소액임차인 보호 등에 따라 회수 범위가 달라질 수 있는 영역입니다.</strong> 시세·배당표부터 확인.',
      },
      {
        question: '실제로 살아야 대항력이 인정되나요?',
        answer:
          '<strong>임대차의 주된 목적이 사용·수익이어야 하고 주민등록이 공시방법이 돼야 하는 영역입니다.</strong> 실제 거주 정황을 정리.',
      },
      {
        question: '이사를 가면 권리가 사라지나요?',
        answer:
          '<strong>대항요건은 계속 유지돼야 하므로 전출 전 임차권등기명령(통상 1~2개월)을 검토할 수 있는 영역입니다.</strong> 등기 완료 후 이사 진행.',
      },
      {
        question: '시세가 부풀려진 건 어떻게 입증하나요?',
        answer:
          '<strong>시세·감정·분양가 자료로 과대평가 정황을 정리하는 영역입니다.</strong> 인근 실거래가와 함께 확보.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 보증금반환·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '신축 빌라 근저당 일괄 보증금 판단', href: '/guide/jeonse-fraud/jeonse-fraud-new-villa-blanket-mortgage-deposit-track' },
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-lease-employee-opposing-power-track' },
      { label: '임차권등기 비용 임대인 청구 회수', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-cost-claim-recovery-track' },
      { label: '선순위 근저당 경매 배당 보증금 회수 절차', href: '/guide/jeonse-fraud/jeonse-fraud-priority-mortgage-auction-distribution-recovery-track' },
      { label: '집주인 사망 상속 보증금 반환', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-death-deposit-track' },
    ],
  },

  // ─── 9. jeonse-fraud-landlord-impersonation-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-landlord-impersonation-track',
    keyword: '임대인 파산 면책 보증금 회수',
    questionKeyword: '전세 임대인이 보증금을 못 돌려준 채 개인파산으로 면책결정까지 받았는데, 저는 전입·확정일자로 우선변제권이 있어요. 임대인이 면책됐어도 우선변제권 있는 보증금은 따로 받을 수 있는지, 임대인에게 직접 청구할 수 있는지 막막합니다.',
    ctaKeyword: '임대인 파산 면책 보증금 회수 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임대인 파산 면책 — 5단계 우선변제·회수 점검 | 로앤가이드',
      description:
        '임대인이 파산 면책을 받아 보증금 회수가 막막하다면 채무자회생법 제566조 면책 효력과 주택임대차보호법 제3조의2 우선변제권 행사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 임대인이 계약 종료 후 보증금을 돌려주지 못한 채 개인파산을 신청해 면책결정까지 받은 상황의 임차인입니다. 저는 전입신고와 확정일자를 갖춰 우선변제권이 있는데, 임대인이 파산 면책을 받았으니 제 보증금반환채권도 그냥 사라지는 건지, 아니면 우선변제권이 있는 부분은 따로 받을 수 있는지 헷갈려요. 임대인 개인에게 직접 보증금 반환을 청구할 수 있는지, 아니면 집이 경매·환가될 때 그 대금에서만 권리를 주장해야 하는지 정확히 몰라 막막한 상태입니다." 채무자 회생 및 파산에 관한 법률 제566조는 면책 효력과 그 예외를, 같은 법 제415조는 주택임차인의 보증금반환채권에 관한 우선변제권을, 주택임대차보호법 제3조의2는 확정일자를 갖춘 임차인의 우선변제권을 정하는 영역입니다. 판례·실무는 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 주택임차인의 보증금반환채권 전부에 미치므로, 우선변제권이 인정되는 부분조차 변제받지 못한 채 파산절차가 폐지되고 면책결정이 확정됐더라도 임차인은 이후 주택이 환가될 때 그 환가대금에 관해 우선변제권을 주장할 수 있을 뿐 채무자(임대인)를 상대로 보증금반환채권의 이행을 소구할 수는 없다고 보는 본 사례 흐름이 있는 영역입니다. 임대인 파산 + 면책 + 우선변제권 보유 결합은 \'면책 효력·우선변제권 행사 한계\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 면책 효력 ③ 우선변제권 ④ 환가·배당 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 면책 ③ 우선변제 ④ 배당 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 파산 면책 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·면책 효력·우선변제권·환가/배당·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 임대인 파산·면책결정, 전입·확정일자·우선변제권 확인.</li>\n<li><strong>② 면책 효력</strong> — 면책이 보증금반환채권 전부에 미치는지, 임대인 직접 청구 가능 여부 정리.</li>\n<li><strong>③ 우선변제권</strong> — 환가대금에 관한 우선변제권 주장 가능 여부 정리.</li>\n<li><strong>④ 환가·배당</strong> — 주택 경매·환가 시 배당요구·우선변제 순위 확인.</li>\n<li><strong>⑤ 회수</strong> — 환가대금 배당 외 회수 경로·잔액 처리 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인 면책의 효력은 우선변제권이 인정되는 부분을 포함해 보증금반환채권 전부에 미치므로 임대인 개인을 상대로 이행을 소구하기는 어려울 수 있으나, 주택이 환가될 때 그 환가대금에 관해서는 우선변제권을 주장할 수 있는 영역. 회수 경로를 임대인 직접 청구가 아니라 환가대금 배당으로 잡는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·면책 자료 확인 (즉시)</strong> — 등기부·계약서, 임대인 파산·면책결정문, 전입·확정일자 확인.</li>\n<li><strong>2단계 — 면책 효력·우선변제권 정리 (수일 내)</strong> — 면책이 채권에 미치는 범위, 우선변제권 보유 여부 점검.</li>\n<li><strong>3단계 — 환가·배당 점검 (경매 진행 시)</strong> — 주택 환가·경매 진행, 배당요구 종기·순위 확인.</li>\n<li><strong>4단계 — 배당요구·우선변제 주장 (종기 내)</strong> — 환가대금에 관한 우선변제권으로 배당요구.</li>\n<li><strong>5단계 — 잔액·회수 검토 (배당 후)</strong> — 배당으로 회수되지 못한 부분의 처리·지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 파산 면책 우선변제·회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·면책 효력·우선변제권 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (소유·근저당·경매)</strong></li>\n<li><strong>임대인 파산·면책결정문 (효력 범위 확인)</strong></li>\n<li><strong>보증금 송금 내역·반환 요구 교신 기록</strong></li>\n<li><strong>경매 배당요구·배당표 자료 (환가 시)</strong></li>\n<li><strong>전세피해 결정·지원 신청 자료 (해당 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인이 면책을 받았다면 임대인 개인을 상대로 한 직접 청구는 어려울 수 있으므로, 회수 전략을 주택이 환가될 때 그 환가대금에 관한 우선변제권 행사로 잡는 것이 도움이 됩니다. 그러려면 전입·확정일자·우선변제권을 입증할 자료와 배당요구 종기 관리가 핵심이어서 등기·계약·결정문을 함께 갖춰두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>면책 효력 범위</strong> — 면책이 우선변제권 부분까지 미치는지.</li>\n<li><strong>직접 청구 한계</strong> — 임대인 개인 상대 이행 소구가 가능한지.</li>\n<li><strong>우선변제권 행사</strong> — 환가대금에 관해 우선변제를 주장하는지.</li>\n<li><strong>배당요구 종기</strong> — 환가·경매에서 배당요구 기한 관리.</li>\n<li><strong>잔액 처리</strong> — 배당으로 회수 못한 부분의 처리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대인 면책과 우선변제권 행사의 한계',
        summary:
          '대법원 2022다247378(대법원, 2025.06.12 선고) 영역에서 법원은 채무자 회생 및 파산에 관한 법률 제564조에 의한 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 주택임차인의 보증금반환채권 전부에 미치므로, 임차인이 보증금반환채권 중 우선변제권이 인정되는 부분조차 변제받지 못한 상태에서 파산절차가 폐지됐더라도 면책결정이 확정된 이상 이후 주택이 환가되는 경우 그 환가대금에 관해 자신의 우선변제권을 주장할 수 있을 뿐 채무자를 상대로 보증금반환채권의 이행을 소구할 수는 없다고 판시했습니다. 임대인 파산 면책 사안에서도 회수 경로를 환가대금 우선변제로 검토해볼 수 있습니다.',
        takeaway: '임대인 파산 + 면책 + 우선변제권 보유 결합 시 면책 효력·우선변제권 행사 한계 검토 영역 — 면책결정문·확정일자·배당요구 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임대인이 면책을 받으면 보증금은 못 받나요?',
        answer:
          '<strong>임대인 개인 상대 직접 청구는 어렵더라도 환가대금에 관한 우선변제권은 주장할 수 있는 영역입니다.</strong> 회수 경로를 배당으로 정리.',
      },
      {
        question: '우선변제권이 있어도 면책 영향을 받나요?',
        answer:
          '<strong>면책 효력은 우선변제권 부분을 포함해 채권 전부에 미치는 영역입니다.</strong> 다만 환가대금에 관한 권리는 별도로 주장 가능.',
      },
      {
        question: '임대인에게 직접 소송할 수 있나요?',
        answer:
          '<strong>면책 확정 후에는 임대인 개인을 상대로 이행을 소구하기 어려울 수 있는 영역입니다.</strong> 환가·배당 절차로 권리를 행사.',
      },
      {
        question: '집이 경매로 넘어가면 어떻게 받나요?',
        answer:
          '<strong>환가대금에서 우선변제권으로 배당요구를 하는 영역입니다.</strong> 배당요구 종기와 순위를 확인.',
      },
      {
        question: '회수 안 된 잔액은 어떻게 하나요?',
        answer:
          '<strong>배당으로 회수되지 못한 부분의 처리·지원을 검토하는 영역입니다.</strong> 법률구조공단(132)·전세피해지원센터(1533-8119) 상담을 활용.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '법인 임대인 파산 전세사기', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-landlord-bankruptcy-track' },
      { label: '소액임차인 최우선변제 보증금 회수 절차', href: '/guide/jeonse-fraud/jeonse-fraud-small-tenant-priority-payment-recovery-track' },
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-tenant-opposing-power-track' },
      { label: '경매 배당 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-recovery-track' },
      { label: '전세사기 피해자 인정 신청 전 준비 서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
    ],
  },

  // ─── 10. jeonse-fraud-prior-tenant-overlap-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-prior-tenant-overlap-track',
    keyword: '선순위 임차인 보증금 양수 중복 배당',
    questionKeyword: '제 보증금반환채권을 금융기관이 양수해 경매에서 일부만 배당받았는데, 그 집을 낙찰받은 새 소유자가 임대차는 끝났다고 해요. 보증금 잔액을 다 받을 때까지 새 소유자에게 임대차 존속을 주장하며 대항할 수 있는지 막막합니다.',
    ctaKeyword: '선순위 임차인 보증금 양수 중복 배당 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '선순위 보증금 양수 — 5단계 대항·존속 주장 점검 | 로앤가이드',
      description:
        '보증금채권을 금융기관이 양수해 일부만 배당받았는데 새 소유자가 임대차 종료를 주장해 막막하다면 주택임대차보호법 제3조의2 우선변제 승계와 임대차 존속 주장 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 보증금을 돌려받지 못하던 중, 제 보증금반환채권을 금융기관이 계약으로 양수해 그 범위에서 우선변제권을 승계한 임차인입니다. 그 뒤 임차주택에 대한 경매가 진행돼 금융기관이 배당요구를 했지만 보증금 전액이 아니라 일부만 배당받았어요. 그런데 그 집을 낙찰받은 새 소유자는 \'경매로 임대차는 다 끝났으니 나가라\'고 합니다. 저는 전입·확정일자 같은 대항요건을 유지하고 있는데, 보증금 잔액을 다 받을 때까지 새 소유자에게 임대차 존속을 주장하며 계속 거주·대항할 수 있는지, 어떻게 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록을 갖춘 대항력을, 같은 법 제3조의2는 우선변제권과 그 승계를, 같은 조 제4항은 임차주택 양수인의 임대인 지위 승계를 정하는 영역입니다. 판례·실무는 대항력과 우선변제권을 겸유한 임차인이 우선변제권을 선택해 경매에서 배당요구를 했으나 보증금 전액을 배당받지 못한 경우 여전히 대항요건을 유지함으로써 임대차관계의 존속을 주장할 수 있고, 보증금반환채권을 양수해 우선변제권을 승계한 금융기관이 일부만 배당받은 경우에도 대항요건이 존속하는 한 임차인은 잔액을 반환받을 때까지 양수인에게 임대차관계의 존속을 주장할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 선순위 임차인 + 채권 양수 + 일부 배당 결합은 \'대항요건 존속·임대차 존속 주장\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 대항요건 ③ 우선변제 승계 ④ 존속 주장 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 대항 ③ 승계 ④ 존속 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 선순위 보증금 양수 중복 배당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항요건·우선변제 승계·존속 주장·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 채권 양수·경매·배당, 새 소유자(양수인) 관계 확인.</li>\n<li><strong>② 대항요건</strong> — 전입·점유·확정일자가 계속 존속하는지 정리.</li>\n<li><strong>③ 우선변제 승계</strong> — 금융기관 양수·우선변제권 승계와 일부 배당 범위 정리.</li>\n<li><strong>④ 존속 주장</strong> — 잔액을 반환받을 때까지 양수인에게 존속 주장 가능 여부 검토.</li>\n<li><strong>⑤ 회수</strong> — 잔액 반환·계속 거주 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항력과 우선변제권을 겸유한 임차인이 경매에서 보증금 전액을 배당받지 못하면 대항요건이 존속하는 한 임대차관계 존속을 주장할 수 있고, 채권을 양수한 금융기관이 일부만 배당받은 경우에도 대항요건 존속을 전제로 잔액 반환 시까지 양수인에게 존속을 주장할 수 있는 영역. 대항요건의 계속 유지가 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·배당 자료 확인 (즉시)</strong> — 채권 양수계약·배당표·낙찰·소유권이전, 잔액 산정.</li>\n<li><strong>2단계 — 대항요건 점검 (수일 내)</strong> — 전입·점유·확정일자 유지 여부, 함부로 전출하지 않도록 점검.</li>\n<li><strong>3단계 — 우선변제 승계 정리 (배당 후)</strong> — 금융기관 양수·우선변제권 승계와 일부 배당 범위 정리.</li>\n<li><strong>4단계 — 존속 주장·통지 (가능한 빨리)</strong> — 양수인에게 임대차 존속·잔액 반환 주장, 내용증명 등 통지 검토.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 잔액 반환 협의, 불이행 시 보증금반환소송·집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">선순위 보증금 양수 중복 배당·존속 주장 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·존속 주장 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>보증금반환채권 양수계약서 (금융기관 승계)</strong></li>\n<li><strong>부동산등기부등본 (경매·소유권이전)</strong></li>\n<li><strong>경매 배당표·일부 배당 자료 (잔액 산정)</strong></li>\n<li><strong>양수인(새 소유자) 통지·교신 기록</strong></li>\n<li><strong>보증금 송금 내역·반환 요구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채권을 금융기관이 양수해 일부만 배당받았더라도 대항요건이 계속 유지되는 한 잔액을 반환받을 때까지 새 소유자에게 임대차 존속을 주장할 수 있으므로, 함부로 전출하지 않고 전입·점유를 유지하는 것이 핵심입니다. 배당표로 잔액을 정확히 산정하고 양수인에게 존속·잔액 반환을 통지한 기록을 남겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 존속</strong> — 전입·점유·확정일자가 계속 유지되는지.</li>\n<li><strong>존속 주장</strong> — 잔액 반환 시까지 양수인에게 임대차 존속을 주장하는지.</li>\n<li><strong>우선변제 승계</strong> — 금융기관 양수·승계와 일부 배당 범위.</li>\n<li><strong>양수인 지위</strong> — 새 소유자가 임대인 지위를 승계하는지.</li>\n<li><strong>잔액 회수</strong> — 미배당 잔액의 반환·집행 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채권 양수·일부 배당과 임대차 존속 주장',
        summary:
          '대법원 2022다255126(대법원, 2023.02.02 선고) 영역에서 법원은 주택임차인이 주택 인도와 주민등록으로 대항력을 취득하고 대항요건이 존속하는 한 대항력이 유지되며, 대항력과 우선변제권을 겸유한 임차인이 먼저 우선변제권을 선택해 경매에서 배당요구를 했으나 보증금 전액을 배당받지 못한 경우 여전히 대항요건을 유지함으로써 임대차관계의 존속을 주장할 수 있고, 임차주택을 양수한 자는 존속되는 임대차의 임대인 지위를 승계하며, 이는 주택임대차보호법 제3조의2 제7항의 금융기관이 보증금반환채권을 양수해 우선변제권을 승계한 다음 일부만 배당받은 경우에도 마찬가지여서 대항요건이 존속하는 한 임차인은 금융기관이 잔액을 반환받을 때까지 양수인에게 임대차관계의 존속을 주장할 수 있다고 판시했습니다. 선순위 보증금 양수 중복 배당 사안에서도 존속 주장 가능성을 검토해볼 수 있습니다.',
        takeaway: '선순위 임차인 + 채권 양수 + 일부 배당 결합 시 대항요건 존속·임대차 존속 주장 검토 영역 — 전입·점유 유지·배당표·양수인 통지 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '경매로 낙찰되면 임대차는 다 끝나는 건가요?',
        answer:
          '<strong>보증금 전액을 배당받지 못했고 대항요건이 존속하면 임대차 존속을 주장할 수 있는 영역입니다.</strong> 전입·점유 유지부터 점검.',
      },
      {
        question: '금융기관이 채권을 가져갔는데 제가 존속을 주장할 수 있나요?',
        answer:
          '<strong>금융기관이 일부만 배당받은 경우에도 대항요건이 존속하면 잔액 반환 시까지 존속을 주장할 수 있는 영역입니다.</strong> 양수계약·배당표를 확보.',
      },
      {
        question: '새 소유자에게 나가라고 하면 나가야 하나요?',
        answer:
          '<strong>대항요건 존속을 전제로 양수인에게 임대차 존속을 주장할 수 있는 영역입니다.</strong> 존속·잔액 반환을 통지로 남길 것.',
      },
      {
        question: '전출하면 어떻게 되나요?',
        answer:
          '<strong>대항요건이 무너지면 존속 주장이 어려워질 수 있는 영역입니다.</strong> 잔액을 받기 전까지 전입·점유를 유지.',
      },
      {
        question: '잔액은 누구에게 받나요?',
        answer:
          '<strong>임대인 지위를 승계한 양수인에게 잔액 반환을 구하는 영역입니다.</strong> 협의 불발 시 보증금반환소송·집행을 검토.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-lease-employee-opposing-power-track' },
      { label: '소액임차인 최우선변제 보증금 회수 절차', href: '/guide/jeonse-fraud/jeonse-fraud-small-tenant-priority-payment-recovery-track' },
      { label: '선순위 근저당 경매 배당 보증금 회수 절차', href: '/guide/jeonse-fraud/jeonse-fraud-priority-mortgage-auction-distribution-recovery-track' },
      { label: '임대인 변경 후 보증금 승계 깡통전세', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-change-deposit-succession-track' },
      { label: '임대인 매매 변경 새 집주인 보증금 거부', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-sale-new-owner-refuse-deposit-track' },
    ],
  },
];
