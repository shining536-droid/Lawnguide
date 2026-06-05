import { SpokePage } from '../spoke-pages';

// batch88 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-05)
//
// 고유 존재 이유:
// 1. assault-floor-noise-dispute-track — 층간소음 시비로 번진 폭행에서 상해 인정 여부를 다투는 피해자 판단형 트랙. 상처가 극히 경미한 정도를 넘는지가 핵심.
// 2. assault-taxi-driver-passenger-track — 택시 기사·승객 사이 차량을 이용한 간접 유형력이 폭행으로 평가되는지 다투는 피해자 판단형 트랙. 간접 유형력의 폭행 평가가 핵심.
// 3. assault-parent-teacher-school-track — 학부모가 교사를 폭행한 사안에서 피해자(교사) 진술 신빙성과 신고 절차를 다루는 피해자 절차형 트랙. 진술 증명력과 신고가 핵심.
// 4. assault-collective-multiple-participant-track — 다중 가담 집단 폭행에서 공모공동정범 성립을 다투는 피해자 판단형 트랙. 암묵적 공모·기능적 행위지배가 핵심.
// 5. dui-measurement-refusal-track — 음주측정 거부 처벌이 문제된 accused 판단형 트랙. 측정 거부의사가 객관적으로 명백한지·일시적 거부 여부가 핵심.
// 6. dui-hit-and-run-aggravation-track — 음주 뺑소니 가중 국면에서 식당 추적 음주측정의 적법성을 다투는 accused 판단형 트랙. 임의수사 허용 한계가 핵심.
// 7. dui-license-suspension-objection-track — 음주 면허정지·취소 이의신청에서 재량권 일탈·남용을 다투는 accused 절차형 트랙. 일반예방 측면과 90일 청구가 핵심.
// 8. jeonse-fraud-mass-gap-investment-track — 갭투자 대규모 전세사기에서 대항력 목적·공시방법을 다투는 피해자 절차형 트랙. 회수 목적 임차의 대항력 한계가 핵심.
// 9. jeonse-fraud-power-of-attorney-forgery-track — 위임장 위조 전세사기에서 임대인 파산·면책이 보증금반환채권에 미치는 효력을 다투는 피해자 판단형 트랙. 면책과 우선변제권이 핵심.
// 10. jeonse-fraud-guarantee-insurance-unsubscribed-track — 보증보험 미가입 전세사기에서 대항요건 존속과 양수인 승계를 다투는 피해자 판단형 트랙. 대항요건 존속·임대인 지위 승계가 핵심.

export const spokesBatch88AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-floor-noise-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-floor-noise-dispute-track',
    keyword: '층간소음 시비 폭행',
    questionKeyword: '윗집과 층간소음 문제로 다투다 찾아온 상대가 저를 밀치고 때려 멍과 통증이 생겼어요. 큰 외상은 없고 며칠이면 나을 정도라는데, 이 정도 상처로도 상해가 인정돼 고소가 되는지, 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '층간소음 시비 폭행 상해 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '층간소음 시비 폭행 — 5단계 상해 인정 점검 | 로앤가이드',
      description:
        '층간소음 시비로 맞아 다쳤는데 외상이 경미해 막막하다면 형법 제257조 상해 인정 기준과 피해자 상태 기준 판단 등 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"위층과 층간소음 문제로 오래 갈등하다가, 어느 날 찾아온 상대가 현관 앞에서 항의 끝에 저를 밀치고 멱살을 잡으며 얼굴과 팔을 때려 멍과 통증이 생긴 피해자입니다. 곧장 병원에 가서 진료를 받았지만 골절 같은 큰 외상은 없고 며칠이면 자연히 가라앉을 정도라는 설명을 들었어요. 상대는 \'멍 좀 든 걸로 무슨 상해냐, 시끄러워서 따지러 갔다가 몸싸움이 좀 있었던 것뿐\'이라며 발뺌하는데, 이 정도 상처만으로 상해가 인정돼 고소·치료비 청구가 되는지, 어디부터 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 사람의 신체를 상해한 자를, 같은 법 제260조 제1항은 폭행한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 폭행에 수반된 상처가 극히 경미해 굳이 치료할 필요 없이 자연 치유되고 일상생활에 아무런 지장이 없는 경우에는 상해로 보기 어렵지만, 그러한 정도를 넘는 상해가 폭행·협박에 의해 생긴 경우라면 상해에 해당하고, 신체의 건강상태가 나쁘게 변경되고 생활기능에 장애가 초래됐는지는 일률적으로가 아니라 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 층간소음 시비 + 폭행 + 경미해 보이는 상처 결합은 \'상해 인정·상처 정도 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 상처 정도 ② 피해자 기준 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 상처 ② 기준 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 층간소음 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상처 정도·피해자 기준·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상처 정도</strong> — 부위·치유기간이 일상생활에 지장 없는 극히 경미한 정도를 넘는지 정리.</li>\n<li><strong>② 피해자 기준</strong> — 연령·성별·체격 등 구체적 상태를 기준으로 한 건강·생활기능 장애 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조), 층간소음 시비 정황까지 함께 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상처가 극히 경미해 자연 치유되고 일상생활에 지장이 없는 정도면 상해로 보기 어렵지만, 그 정도를 넘으면 상해로 인정될 여지가 있고 그 판단은 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 하는 영역. 부위·치유기간과 시비·구타 정황을 함께 정리해둘수록 평가에서 유리해지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신속 진료·진단 확보 (즉시~당일)</strong> — 폭행 직후 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 상처 정도·경위 정리 (수일 내)</strong> — 부위·치유기간, 시비·구타 경위와 일치 여부 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 층간소음 정황 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·복도 CCTV 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">층간소음 시비 폭행 상해 인정·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상처 정도·피해자 기준·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>복도·현관 CCTV·주변 영상 (시비·구타 정황)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>층간소음 갈등·항의 경위 기록 (육하원칙)</strong></li>\n<li><strong>통증·생활 불편 경과 메모 (생활기능 장애)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>이웃·관리사무소 목격 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외상이 가벼워 보여도 일상생활에 지장이 생기는 정도라면 상해로 평가될 여지가 있으므로, 부위·치유기간과 통증·생활 불편 경과를 구체적으로 기록해두는 것이 도움이 됩니다. 복도·현관 CCTV는 시비부터 폭행까지 정황을 보여줄 수 있으나 보관 기간이 짧을 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해 인정</strong> — 상처가 일상생활에 지장 없는 극히 경미한 정도를 넘는지.</li>\n<li><strong>피해자 기준</strong> — 연령·성별·체격 등 구체적 상태를 기준으로 판단되는지.</li>\n<li><strong>부위 일치</strong> — 진단 부위가 시비·구타 경위와 맞는지.</li>\n<li><strong>쌍방 여부</strong> — 층간소음 다툼이 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해 인정 기준과 피해자 상태 기준 판단',
        summary:
          '대법원 2003도4606(대법원, 2003.09.26 선고) 영역에서 법원은 폭행 등에 수반해 생긴 상해가 극히 경미한 것으로서 굳이 치료할 필요가 없어 자연적으로 치유되며 일상생활을 하는 데 아무런 지장이 없는 경우에는 상해에 해당하지 않을 수 있으나, 그러한 정도를 넘는 상해가 폭행 또는 협박에 의해 생긴 경우라면 상해에 해당하고, 피해자의 건강상태가 나쁘게 변경되고 생활기능에 장애가 초래된 것인지는 객관적·일률적으로 판단할 것이 아니라 피해자의 연령·성별·체격 등 신체·정신상의 구체적 상태를 기준으로 판단해야 하며, 정식 상해진단서가 제출되지 않았더라도 상처의 부위·내용·정도나 치유기간 등에 비추어 신체 건강상태가 불량하게 변경됐다고 볼 수 있다면 상해에 해당하지 않는다고 단정할 수 없다고 판시했습니다. 층간소음 시비 폭행 사안에서도 상해 인정과 상처 정도 평가를 검토해볼 수 있습니다.',
        takeaway: '층간소음 시비 + 폭행 + 경미해 보이는 상처 결합 시 상해 인정·상처 정도 평가 검토 영역 — 부위·치유기간·생활 불편·CCTV 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '멍 정도의 가벼운 상처도 상해가 되나요?',
        answer:
          '<strong>일상생활에 지장 없는 극히 경미한 정도를 넘으면 상해로 인정될 여지가 있는 영역입니다.</strong> 부위·치유기간·생활 불편을 정리.',
      },
      {
        question: '진단서가 없으면 상해를 다툴 수 없나요?',
        answer:
          '<strong>진단서가 없어도 상처의 부위·정도·치유기간으로 상해 여부를 판단할 수 있는 영역입니다.</strong> 진료기록·사진을 확보.',
      },
      {
        question: '층간소음 따지러 갔다가 몸싸움이라며 쌍방으로 몰리면요?',
        answer:
          '<strong>먼저 가해한 쪽과 부상 정도를 정황·영상으로 구분해 다투는 영역입니다.</strong> 복도 CCTV·목격자 진술을 확보.',
      },
      {
        question: '복도 CCTV는 꼭 필요한가요?',
        answer:
          '<strong>시비부터 폭행까지 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧을 수 있어 즉시 보존 요청.',
      },
      {
        question: '상대가 며칠이면 낫는다고 우기면 어떻게 하나요?',
        answer:
          '<strong>치유기간만이 아니라 생활기능 장애 여부로 상해를 판단하는 영역입니다.</strong> 통증·생활 불편 경과를 기록.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '상해 인정 기준·상처 정도', href: '/guide/assault/assault-injury-recognition-standard' },
      { label: '이웃 간 분쟁 폭행 대응', href: '/guide/assault/assault-neighbor-conflict-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 2. assault-taxi-driver-passenger-track ───
  {
    domain: 'assault',
    slug: 'assault-taxi-driver-passenger-track',
    keyword: '택시 기사 승객 폭행',
    questionKeyword: '택시 안에서 기사와 시비가 붙었는데, 직접 손으로 때린 것은 아니지만 차문을 막고 차로 길을 가로막아 저를 위협하고 밀치는 듯한 유형력을 행사해 위협을 느끼고 다쳤어요. 이렇게 차량을 이용한 간접적인 행위도 폭행으로 다툴 수 있는지 막막합니다.',
    ctaKeyword: '택시 기사 승객 폭행 간접 유형력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '택시 기사·승객 폭행 — 5단계 간접 유형력 점검 | 로앤가이드',
      description:
        '택시에서 차량·차문을 이용한 간접 유형력으로 위협·폭행을 당했다면 형법 제260조 폭행의 간접 유형력 평가 기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"택시를 타고 가던 중 요금·경로 문제로 기사와 시비가 붙었는데, 기사가 직접 손으로 저를 때린 것은 아니지만 차문을 잠그거나 막아 내리지 못하게 하고, 차를 갑자기 출발·정지하거나 길을 가로막는 식으로 위협하며 몸을 밀치는 듯한 유형력을 행사해 공포와 통증을 느낀 피해자입니다. 직접적인 구타가 아니라 차량이나 차문을 이용한 간접적인 행위라, 이런 것도 폭행으로 평가돼 신고·고소가 되는지 헷갈려요. 상대는 \'손도 안 댔는데 무슨 폭행이냐\'며 발뺌하는데, 차량을 매개로 한 간접 유형력도 폭행으로 다툴 수 있는지, 어디부터 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 대한 폭행을, 같은 법 제257조 제1항은 상해를 규정하는 영역입니다. 판례·실무는 폭행은 사람에 대한 직접적인 유형력의 행사뿐 아니라 간접적인 유형력의 행사도 포함하며 반드시 사람의 신체에 대한 것에 한정되지 않고, 사람에 대한 간접적인 유형력을 폭행으로 평가하려면 유형력을 행사한 의도·방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계 등을 종합적으로 고려해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 택시 + 차량·차문 매개 + 위협·밀침 결합은 \'간접 유형력의 폭행 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 행위 정리 ② 근접성·관계 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 행위 ② 근접성 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 기사 승객 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위 정리·근접성/관계·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 정리</strong> — 차문 봉쇄·급출발·길 가로막기 등 유형력의 의도·방법 정리.</li>\n<li><strong>② 근접성·관계</strong> — 행위와 피해자의 근접성, 유형력이 행사된 객체(차량)와 피해자의 관계 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조), 위협 정황까지 함께 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행은 직접적 유형력만이 아니라 간접적 유형력도 포함하고 반드시 신체에 대한 것에 한정되지 않으나, 간접적 유형력을 폭행으로 평가하려면 의도·방법, 행위와 피해자의 근접성, 객체와 피해자의 관계를 종합해야 하는 영역. 차량·차문을 매개로 한 행위의 의도·근접성을 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위·차량 상태 사진 확보.</li>\n<li><strong>2단계 — 행위·근접성 정리 (수일 내)</strong> — 차문 봉쇄·급출발·길 막기 등 의도·방법과 근접성 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·블랙박스·차량 GPS 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 기사 승객 폭행 간접 유형력·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위·근접성·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>택시 블랙박스·차량 GPS·운행 기록 (행위 정황)</strong></li>\n<li><strong>현장·차량 상태·다친 부위 사진 (시간정보 포함)</strong></li>\n<li><strong>차문 봉쇄·급출발·길 막기 경위 메모 (육하원칙)</strong></li>\n<li><strong>유형력 의도·근접성 기록 (간접 유형력)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>택시 차량번호·기사 정보·목격자 연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 때리지 않았더라도 차량·차문을 매개로 한 간접 유형력이 폭행으로 평가될 수 있으므로, 행위의 의도·방법과 피해자와의 근접성을 구체적으로 정리해두는 것이 도움이 됩니다. 택시 블랙박스·GPS는 행위 정황을 보여줄 수 있으나 덮어쓰일 수 있어 차량번호를 확인하고 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>간접 유형력</strong> — 차량·차문을 매개로 한 행위가 폭행으로 평가되는지.</li>\n<li><strong>근접성·관계</strong> — 행위와 피해자의 근접성, 객체와 피해자의 관계.</li>\n<li><strong>의도·방법</strong> — 유형력을 행사한 의도와 방법이 드러나는지.</li>\n<li><strong>상해·위협 성립</strong> — 상해 정도와 위협의 협박 해당 여부.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 간접적 유형력의 폭행 평가 기준',
        summary:
          '대법원 2018도1346(대법원, 2021.11.25 선고) 영역에서 법원은 폭행은 사람에 대한 직접적인 유형력의 행사뿐 아니라 간접적인 유형력의 행사도 포함하며 반드시 사람의 신체에 대한 것에 한정되지 않고, 사람에 대한 간접적인 유형력의 행사를 폭행으로 평가하기 위해서는 유형력을 행사한 의도와 방법, 행위와 피해자의 근접성, 유형력이 행사된 객체와 피해자의 관계 등을 종합적으로 고려해야 한다고 판시했습니다. 다만 차량을 주택 대문 앞에 주차해 출입을 막은 사안에서 물리적 접촉이나 유형력 행사로 볼 만한 사정이 없고 피해자가 차량을 정상적으로 사용할 수 있었다는 점 등에 비추어 폭행으로 평가하기 어렵다고 본 사례입니다. 택시 기사·승객 폭행 사안에서도 간접 유형력의 폭행 평가를 검토해볼 수 있습니다.',
        takeaway: '택시 + 차량·차문 매개 + 위협·밀침 결합 시 간접 유형력의 폭행 평가 검토 영역 — 행위 의도·근접성·블랙박스 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '직접 손으로 때리지 않았는데도 폭행이 되나요?',
        answer:
          '<strong>간접적 유형력의 행사도 폭행에 포함될 수 있는 영역입니다.</strong> 행위의 의도·방법·근접성을 정리.',
      },
      {
        question: '차량·차문을 이용한 행위도 폭행으로 다툴 수 있나요?',
        answer:
          '<strong>객체와 피해자의 관계·근접성을 종합해 폭행 여부를 판단하는 영역입니다.</strong> 차량 상태·행위 정황을 기록.',
      },
      {
        question: '블랙박스·GPS가 꼭 필요한가요?',
        answer:
          '<strong>차량 매개 행위의 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 차량번호 확인 후 즉시 보존 요청.',
      },
      {
        question: '기사가 손도 안 댔다고 우기면 어떻게 하나요?',
        answer:
          '<strong>직접 접촉이 없어도 간접 유형력의 의도·근접성으로 다투는 영역입니다.</strong> 행위 경위를 시간순으로 정리.',
      },
      {
        question: '위협만 받고 크게 다치지 않아도 다툴 수 있나요?',
        answer:
          '<strong>유형력의 행사 자체로 폭행을, 위협은 협박으로 다툴 수 있는 영역입니다.</strong> 위협 발언·정황을 함께 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '간접 유형력 폭행 성립', href: '/guide/assault/assault-indirect-force-standard' },
      { label: '운수·차량 분쟁 폭행 대응', href: '/guide/assault/assault-transport-conflict-response' },
      { label: 'CCTV·블랙박스 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 3. assault-parent-teacher-school-track ───
  {
    domain: 'assault',
    slug: 'assault-parent-teacher-school-track',
    keyword: '학부모 교사 폭행',
    questionKeyword: '학교에서 학부모가 찾아와 항의하다 저(교사)를 밀치고 때려 멍과 통증이 생겼어요. 주변에 다른 목격자가 거의 없어 제 진술이 사실상 유일한데, 이런 경우 진술만으로 폭행·상해를 다툴 수 있는지, 어떤 순서로 신고해야 하는지 막막합니다.',
    ctaKeyword: '학부모 교사 폭행 진술·신고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학부모 교사 폭행 — 5단계 진술·신고 점검 | 로앤가이드',
      description:
        '학부모에게 폭행당했는데 목격자가 없어 막막하다면 형법 제257조·제260조 적용과 피해자 진술 신빙성, 신고 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"학교에서 근무하던 중 자녀 문제로 찾아온 학부모가 항의를 하다가 감정이 격해져 저를 밀치고 팔과 어깨를 때려 멍과 통증이 생긴 교사 피해자입니다. 일과 시간이 지난 빈 교실이나 복도에서 벌어져 다른 교사나 학생 등 목격자가 거의 없고, 사실상 제 진술이 거의 유일한 증거인 상황이에요. 상대는 \'그냥 말다툼했을 뿐 때린 적 없다\'며 정반대로 주장하는데, 이렇게 피해자 진술이 사실상 유일한 경우에도 폭행·상해로 신고·고소가 가능한지, 진술의 신빙성은 어떻게 인정받는지, 어떤 순서로 진행해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을 규정하고, 학교 현장의 교육활동 침해 대응 절차도 함께 검토되는 영역입니다. 판례·실무는 피해자 등의 진술은 그 주요한 부분이 일관되고 경험칙에 비추어 비합리적이거나 진술 자체로 모순되는 부분이 없으며 허위로 불리한 진술을 할 동기나 이유가 분명히 드러나지 않는 이상 특별한 이유 없이 함부로 배척해서는 안 되고, 가해자의 진술이 경험칙상 합리성이 없고 그 자체로 모순돼 믿을 수 없다는 사정은 피해자 진술의 신빙성을 뒷받침하거나 공소사실을 뒷받침하는 간접정황이 될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 학부모 + 교사 폭행 + 목격자 부족 결합은 \'진술 신빙성·폭행/상해 신고\' 검토가 가능한 트랙입니다. 피해자라면 ① 진술 정리 ② 정황 보강 ③ 신고·고소 ④ 형사 절차 ⑤ 기관·민사 5중 트랙이 가능한 영역. 대응은 ① 진술 ② 보강 ③ 신고 ④ 형사 ⑤ 병행 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학부모 교사 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진술 정리·정황 보강·신고/고소·형사 절차·기관/민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진술 정리</strong> — 폭행 일시·방법을 일관되게, 모순 없이 시간순으로 정리.</li>\n<li><strong>② 정황 보강</strong> — 진단서·사진·CCTV·통화·문자 등 간접정황으로 진술 보강.</li>\n<li><strong>③ 신고·고소</strong> — 폭행(제260조)·상해(제257조) 고소장 접수 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 기관·민사</strong> — 교육활동 침해 대응·손해배상 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피해자 진술이 사실상 유일하더라도 주요 부분이 일관되고 모순·허위 동기가 없으면 함부로 배척되지 않고, 가해자의 진술이 합리성 없이 모순되면 그 사정이 피해자 진술의 신빙성을 뒷받침하는 간접정황이 될 수 있는 영역. 진술을 일관되게 정리하고 진단서·정황으로 보강하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 진술·정황 정리 (수일 내)</strong> — 폭행 일시·방법을 일관되게 기록, CCTV·통화·문자 등 정황 정리.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·정황 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 기관·민사 병행 (병행)</strong> — 교육활동 침해 대응, 손해배상 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학부모 교사 폭행 진술·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진술·정황 보강·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>폭행 일시·방법·경위 진술 메모 (일관·시간순)</strong></li>\n<li><strong>학교·복도 CCTV·녹음 (정황 보강)</strong></li>\n<li><strong>다친 부위 사진·통원 내역 (부상 입증)</strong></li>\n<li><strong>학부모와의 통화·문자·항의 기록</strong></li>\n<li><strong>동료 교사·목격자 진술·연락처 (있는 경우)</strong></li>\n<li><strong>교육활동 침해 신고·면담 자료 (학교 절차)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 목격자가 적어 진술이 사실상 유일하더라도 진술의 일관성과 진단서·CCTV·통화·문자 같은 간접정황이 뒷받침되면 신빙성을 인정받는 데 도움이 되므로, 폭행 일시·방법을 모순 없이 정리해두는 것이 중요합니다. 학교 CCTV·녹음은 보관 기간이 짧을 수 있어 가능한 한 빨리 확보·보존하고, 교육활동 침해 대응 절차도 병행해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 진술이 일관되고 모순·허위 동기가 없는지.</li>\n<li><strong>정황 보강</strong> — 진단서·CCTV·통화 등 간접정황이 뒷받침되는지.</li>\n<li><strong>가해자 진술 모순</strong> — 상대 진술의 합리성·모순이 드러나는지.</li>\n<li><strong>쌍방·정당화</strong> — 말다툼이라며 폭행을 부인·정당화하는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술이 사실상 유일한 경우의 증명력 판단',
        summary:
          '대법원 2018도7709(대법원, 2018.10.25 선고) 영역에서 법원은 피해자 등의 진술은 그 주요한 부분이 일관되며 경험칙에 비추어 비합리적이거나 진술 자체로 모순되는 부분이 없고 허위로 불리한 진술을 할 동기나 이유가 분명히 드러나지 않는 이상 특별한 이유 없이 함부로 배척해서는 안 되고, 공소사실을 인정할 증거로 사실상 피해자의 진술이 유일한 경우라도 피고인의 진술이 경험칙상 합리성이 없고 그 자체로 모순돼 믿을 수 없다는 사정은 직접증거인 피해자 진술의 신빙성을 뒷받침하거나 공소사실을 뒷받침하는 간접정황이 될 수 있다고 판시했습니다. 학부모 교사 폭행 사안에서도 진술 신빙성과 신고 절차를 검토해볼 수 있습니다.',
        takeaway: '학부모 + 교사 폭행 + 목격자 부족 결합 시 진술 신빙성·폭행/상해 신고 검토 영역 — 진술 일관성·진단서·CCTV·통화 정황 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '목격자가 없고 제 말뿐인데 신고할 수 있나요?',
        answer:
          '<strong>진술이 일관되고 모순·허위 동기가 없으면 함부로 배척되지 않는 영역입니다.</strong> 진술을 시간순으로 정리하고 정황을 보강.',
      },
      {
        question: '상대가 말다툼만 했다고 우기면 어떻게 하나요?',
        answer:
          '<strong>상대 진술의 합리성·모순이 피해자 진술 신빙성의 간접정황이 될 수 있는 영역입니다.</strong> 진단서·CCTV·통화 기록을 확보.',
      },
      {
        question: '학교 CCTV는 꼭 필요한가요?',
        answer:
          '<strong>진술을 뒷받침하는 핵심 간접정황이 되는 영역입니다.</strong> 보관 기간이 짧을 수 있어 즉시 보존 요청.',
      },
      {
        question: '형사 신고와 학교 절차를 같이 진행할 수 있나요?',
        answer:
          '<strong>형사 신고와 교육활동 침해 대응 절차를 병행할 수 있는 영역입니다.</strong> 각 절차에 맞는 자료를 정리.',
      },
      {
        question: '진술이 흔들리면 불리해지나요?',
        answer:
          '<strong>주요 부분의 일관성이 신빙성 판단에 영향을 주는 영역입니다.</strong> 폭행 일시·방법을 모순 없이 기록.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '피해자 진술 신빙성·증명', href: '/guide/assault/assault-victim-statement-credibility' },
      { label: '교육활동 침해·교사 폭행 대응', href: '/guide/assault/assault-teacher-protection-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 4. assault-collective-multiple-participant-track ───
  {
    domain: 'assault',
    slug: 'assault-collective-multiple-participant-track',
    keyword: '다중 가담 집단 폭행',
    questionKeyword: '여러 명이 무리 지어 저를 둘러싸고 집단으로 폭행해 다쳤는데, 직접 때린 사람과 옆에서 가담·합세한 사람이 섞여 있어요. 직접 때리지 않고 무리에 함께한 사람들에게도 책임을 물을 수 있는지, 어떤 순서로 정리해야 하는지 막막합니다.',
    ctaKeyword: '다중 가담 집단 폭행 공모 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '다중 가담 집단 폭행 — 5단계 공모·가담 점검 | 로앤가이드',
      description:
        '여러 명에게 집단 폭행을 당했는데 직접 가해자와 합세자가 섞여 막막하다면 형법 제257조·제260조와 공모공동정범 성립 기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 명이 무리를 지어 저를 둘러싸고 집단으로 밀치고 때려 멍과 통증, 일부 찰과상까지 생긴 피해자입니다. 그런데 직접 주먹과 발로 가격한 사람도 있고, 옆에서 길을 막거나 함께 둘러싸며 합세한 사람, 부추기고 망을 본 사람이 섞여 있어 누가 어디까지 책임지는지 막막해요. 가해자들은 \'나는 직접 때리지 않았다\', \'그냥 같이 있었을 뿐\'이라며 발뺌하는데, 직접 구타하지 않고 무리에 함께하거나 가담한 사람들에게도 폭행·상해의 책임을 물을 수 있는지, 어떤 순서로 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을, 같은 법 제30조는 2인 이상이 공동해 죄를 범한 공동정범을 규정하는 영역입니다. 판례·실무는 공모자들이 공모한 범행을 수행하거나 목적 달성을 위해 나아가는 도중 부수적 범죄가 파생되리라 예상하거나 충분히 예상할 수 있는데도 이를 방지할 합리적 조치를 취하지 않은 채 범행에 나아갔다가 예상되던 범행이 발생한 경우, 개별적 의사연락이 없었더라도 암묵적 공모와 그에 대한 기능적 행위지배가 존재한다고 볼 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 다중 가담 + 집단 폭행 + 직접·합세 혼재 결합은 \'공모공동정범·가담 범위 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 가담 역할 ② 공모·행위지배 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 역할 ② 공모 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다중 가담 집단 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가담 역할·공모/행위지배·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가담 역할</strong> — 직접 가격·둘러싸기·길 막기·부추김 등 각자의 역할 정리.</li>\n<li><strong>② 공모·행위지배</strong> — 암묵적 공모와 기능적 행위지배가 인정되는지 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(제260조)·상해(제257조), 가담자별로 함께 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 공동불법행위 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접 가격하지 않았더라도 무리의 공모 범행에 가담해 부수 범행이 예상되는데도 방지 조치 없이 나아갔다면 암묵적 공모와 기능적 행위지배가 인정될 여지가 있는 영역. 가담자 각자의 역할과 공모 정황을 시간순으로 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 가담 역할·공모 정리 (수일 내)</strong> — 가담자별 역할, 둘러싸기·부추김 등 공모 정황 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 가담자 특정.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·CCTV 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 공동불법행위 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다중 가담 집단 폭행 공모·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 가담 역할·공모·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>현장 CCTV·블랙박스·휴대폰 영상 (집단 정황)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>가담자별 역할·인상착의 메모 (직접·합세 구분)</strong></li>\n<li><strong>집단 폭행 경위·시간 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 집단 폭행은 가담자별 역할이 흩어져 누가 어디까지 책임지는지가 쟁점이 되므로, 직접 가격·둘러싸기·부추김 등 각자의 역할과 공모 정황을 시간순으로 구체적으로 정리해두는 것이 도움이 됩니다. 현장 CCTV·휴대폰 영상은 가담 정황과 인상착의를 보여줄 수 있으나 사라지기 쉬워 가능한 한 빨리 확보·보존해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공모 인정</strong> — 암묵적 공모와 기능적 행위지배가 인정되는지.</li>\n<li><strong>가담 범위</strong> — 직접 가격하지 않은 합세자의 책임 범위.</li>\n<li><strong>예견 가능성</strong> — 부수 범행이 예상됐는데 방지 조치를 안 했는지.</li>\n<li><strong>역할 특정</strong> — 가담자별 역할·인상착의가 특정되는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공모공동정범의 암묵적 공모·기능적 행위지배',
        summary:
          '대법원 2010도7412(대법원, 2010.12.23 선고) 영역에서 법원은 공모공동정범의 경우 범죄의 수단·태양, 가담 인원과 성향, 범행 시간·장소의 특성, 범행 과정에서 타인과의 접촉 가능성과 예상되는 반응 등 제반 상황에 비추어 공모자들이 공모한 범행을 수행하거나 목적 달성을 위해 나아가는 도중 부수적 범죄가 파생되리라 예상하거나 충분히 예상할 수 있는데도 그 가능성을 외면한 채 방지에 족한 합리적 조치를 취하지 않고 범행에 나아갔다가 예상되던 범행이 발생한 경우, 개별적 의사연락이 없었더라도 당초 공모자들 사이에 그 범행 전부에 대한 암묵적 공모는 물론 그에 대한 기능적 행위지배가 존재한다고 보아야 한다고 판시했습니다. 다중 가담 집단 폭행 사안에서도 공모공동정범과 가담 범위를 검토해볼 수 있습니다.',
        takeaway: '다중 가담 + 집단 폭행 + 직접·합세 혼재 결합 시 공모공동정범·가담 범위 평가 검토 영역 — 가담 역할·공모 정황·CCTV 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '직접 때리지 않은 사람도 책임을 물을 수 있나요?',
        answer:
          '<strong>공모와 기능적 행위지배가 인정되면 직접 가격하지 않아도 공동정범으로 다툴 수 있는 영역입니다.</strong> 가담 역할·공모 정황을 정리.',
      },
      {
        question: '그냥 같이 있었을 뿐이라고 하면 어떻게 하나요?',
        answer:
          '<strong>둘러싸기·부추김·길 막기 등 가담 행위와 공모 정황으로 다투는 영역입니다.</strong> 역할별 정황을 시간순으로 기록.',
      },
      {
        question: '여러 명을 어떻게 특정해서 고소하나요?',
        answer:
          '<strong>인상착의·역할·CCTV로 가담자를 특정해 함께 고소할 수 있는 영역입니다.</strong> 가담자별 메모와 영상을 확보.',
      },
      {
        question: '현장 영상이 꼭 필요한가요?',
        answer:
          '<strong>가담 정황과 인상착의를 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 사라지기 쉬워 즉시 확보·보존.',
      },
      {
        question: '치료비는 누구에게 청구하나요?',
        answer:
          '<strong>공동불법행위로 가담자들에게 손해배상을 청구할 수 있는 영역입니다.</strong> 치료비·통원 내역을 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '공모공동정범·가담 범위', href: '/guide/assault/assault-joint-principal-standard' },
      { label: '집단 폭행·다중 가담 대응', href: '/guide/assault/assault-collective-violence-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 5. dui-measurement-refusal-track ───
  {
    domain: 'dui',
    slug: 'dui-measurement-refusal-track',
    keyword: '음주측정 거부 처벌',
    questionKeyword: '음주단속에서 측정기에 숨을 약하게 부는 등 한 번 응하지 못했다가 곧이어 다시 측정에 응했는데, 측정 거부로 처벌될 수 있다는 말을 들었어요. 혐의를 받고 있다면 일시적으로 응하지 못한 것까지 측정 거부로 처벌되는지 막막합니다.',
    ctaKeyword: '음주측정 거부 처벌 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 — 5단계 거부의사·1·2차 측정 점검 | 로앤가이드',
      description:
        '음주측정에 일시적으로 응하지 못했는데 거부로 처벌될까 막막하다면 도로교통법 제148조의2 측정불응 성립과 거부의사 명백성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주단속 과정에서 호흡측정기에 숨을 제대로 불어넣지 못하거나 잠깐 머뭇거려 1차 측정에 한 번 응하지 못했다가, 곧이어 이어진 측정에는 정상적으로 응한 운전자입니다. 그런데 단속 현장에서 \'측정을 거부한 것으로 처리될 수 있다\'는 말을 들어, 정작 거부할 의사는 없었는데도 측정 거부로 처벌되는 건 아닌지 불안해졌어요. 음주측정 거부는 주취운전 중에서도 무겁게 처벌된다고 들어 더 걱정됩니다. 혐의를 받고 있다면 이렇게 일시적으로 응하지 못했다가 곧 다시 응한 경우까지 측정 거부로 처벌되는지, 거부의사가 명백했다고 볼 수 있는지 막막한 상태입니다." 도로교통법 제44조 제2항은 경찰공무원의 음주측정 요구와 운전자의 응할 의무를, 같은 법 제148조의2 제2항은 정당한 사유 없이 측정에 응하지 않은 경우의 처벌을 정하는 영역입니다. 판례·실무는 \'측정에 응하지 아니한 경우\'란 술에 취한 상태에 있다고 인정할 만한 상당한 이유가 있는 운전자가 음주측정에 응할 의사가 없음이 객관적으로 명백하다고 인정되는 때를 의미하고, 1차 측정에만 불응했을 뿐 곧이어 이어진 2차 측정에 응한 경우처럼 측정 거부가 일시적인 것에 불과한 때까지 측정불응죄가 성립한다고 볼 수는 없다고 보는 본 사례 흐름이 있는 영역입니다. 일시적 미응 + 곧이은 측정 응함 + 거부의사 다툼 결합은 \'측정 거부의사 명백성 평가\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 응답 경위 ② 거부의사 명백성 ③ 일시성 ④ 양형 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 명백성 ③ 일시성 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주측정 거부 처벌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 응답 경위·거부의사 명백성·일시성·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 응답 경위</strong> — 측정 요구 시각·횟수, 1차 미응과 2차 응함의 시간 흐름 정리.</li>\n<li><strong>② 거부의사 명백성</strong> — 측정에 응할 의사가 없음이 객관적으로 명백했는지 정리.</li>\n<li><strong>③ 일시성</strong> — 미응이 일시적이고 곧 응했는지, 소극적 거부가 반복됐는지 정리.</li>\n<li><strong>④ 양형</strong> — 측정에 결국 응한 경위·초범·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 측정불응죄 성립 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정 거부는 운전자가 음주측정에 응할 의사가 없음이 객관적으로 명백한 때를 의미하고, 1차에만 불응했다 곧 2차에 응한 일시적 미응까지 측정불응죄로 보지는 않는 영역. 소극적 거부가 일정 시간 계속 반복돼 거부의사가 객관적으로 명백했는지, 아니면 일시적이었는지를 경위로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 주취운전자 적발보고서·정황진술보고서, 측정 요구 시각·횟수 확인.</li>\n<li><strong>2단계 — 응답 경위·일시성 정리 (수일 내)</strong> — 1차 미응·2차 응함의 시간 흐름, 거부의사 명백성 점검.</li>\n<li><strong>3단계 — 정황·자료 정리 (공판 전)</strong> — 단속 영상·고지 횟수·간격, 결국 측정에 응한 경위 정리.</li>\n<li><strong>4단계 — 양형·대응 자료 정리 (병행)</strong> — 초범·반성·생계 등 양형 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 측정불응 성립 쟁점 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정 거부 처벌 거부의사·일시성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 응답 경위·거부의사 명백성·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정 요구·거부 경위)</strong></li>\n<li><strong>주취운전자 정황진술보고서 (현장 정황)</strong></li>\n<li><strong>측정 요구 시각·횟수·간격 정리 메모 (시간순)</strong></li>\n<li><strong>단속 영상·녹음 (1차 미응·2차 응함 정황)</strong></li>\n<li><strong>측정 결과지 (2차 측정 응한 수치·시각)</strong></li>\n<li><strong>불이익 고지 횟수·내용 기록 (10분 간격 등)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정불응은 거부의사가 객관적으로 명백했는지가 관건이므로, 1차 미응과 2차 응함의 시간 흐름과 결국 측정에 응한 경위를 단속 영상·적발보고서로 정리해두는 것이 도움이 됩니다. 경찰의 불이익 고지 횟수·간격(통상 10분 간격 안내)과 정황을 함께 점검하고, 양형 자료도 미리 준비해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거부의사 명백성</strong> — 측정에 응할 의사가 없음이 객관적으로 명백했는지.</li>\n<li><strong>일시성</strong> — 미응이 일시적이고 곧 응했는지.</li>\n<li><strong>소극적 거부 반복</strong> — 소극적 거부가 일정 시간 계속 반복됐는지.</li>\n<li><strong>고지·절차</strong> — 불이익 고지 횟수·간격 등 절차가 지켜졌는지.</li>\n<li><strong>양형 사정</strong> — 결국 측정에 응한 경위·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 거부의사의 명백성과 일시적 거부',
        summary:
          '대법원 2013도8481(대법원, 2015.12.24 선고) 영역에서 법원은 도로교통법 제148조의2 제1항 제2호의 \'경찰공무원의 측정에 응하지 아니한 경우\'란 전체적인 사건의 경과에 비추어 술에 취한 상태에 있다고 인정할 만한 상당한 이유가 있는 운전자가 음주측정에 응할 의사가 없음이 객관적으로 명백하다고 인정되는 때를 의미하고, 운전자가 1차 측정에만 불응했을 뿐 곧이어 이어진 2차 측정에 응한 경우처럼 측정 거부가 일시적인 것에 불과한 때까지 측정불응죄가 성립한다고 볼 것은 아니며, 호흡측정기에 숨을 내쉬는 시늉만 하는 등 소극적으로 거부한 경우라면 그 소극적 거부행위가 일정 시간 계속 반복돼 측정불응의사가 객관적으로 명백하다고 인정되는 때 비로소 측정불응죄가 성립한다고 판시했습니다. 음주측정 거부 처벌 사안에서도 거부의사 명백성과 일시성을 검토해볼 수 있습니다.',
        takeaway: '일시적 미응 + 곧이은 측정 응함 + 거부의사 다툼 결합 시 측정 거부의사 명백성 평가 검토 영역 — 응답 경위·일시성·단속 영상·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '한 번 측정에 응하지 못했다가 다시 응했는데 거부가 되나요?',
        answer:
          '<strong>1차에만 불응했다 곧 2차에 응한 일시적 미응까지 측정불응으로 보지는 않는 영역입니다.</strong> 응답 경위·시간 흐름을 정리.',
      },
      {
        question: '거부의사가 명백했다는 건 어떻게 판단하나요?',
        answer:
          '<strong>응할 의사가 없음이 객관적으로 명백한 때를 의미하는 영역입니다.</strong> 단속 영상·정황으로 명백성을 다툼.',
      },
      {
        question: '숨을 약하게 분 것도 거부로 처리되나요?',
        answer:
          '<strong>소극적 거부가 일정 시간 계속 반복돼야 거부로 평가되는 영역입니다.</strong> 미응·응함의 반복 여부를 정리.',
      },
      {
        question: '경찰이 고지 절차를 안 지켰으면 다툴 수 있나요?',
        answer:
          '<strong>불이익 고지 횟수·간격 등 절차가 거부의사 판단에 영향을 줄 수 있는 영역입니다.</strong> 고지 내용·횟수를 점검.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·정황진술보고서·단속 영상 확보가 출발점인 영역입니다.</strong> 응답 경위와 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부 성립·처벌', href: '/guide/dui/dui-breath-test-refusal-standard' },
      { label: '음주 측정 절차·정확성', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주 면허취소 행정심판 측정 정확성', href: '/guide/dui/dui-license-revocation-appeal-track' },
      { label: '음주운전 적용법조·가중', href: '/guide/dui/dui-applicable-law-aggravation' },
    ],
  },

  // ─── 6. dui-hit-and-run-aggravation-track ───
  {
    domain: 'dui',
    slug: 'dui-hit-and-run-aggravation-track',
    keyword: '음주 뺑소니 가중처벌',
    questionKeyword: '음주운전 후 자리를 떠 식당에 있었는데 경찰이 신고를 받고 식당에 들어와 저를 찾아 음주측정을 했어요. 영장도 없이 들어와 측정한 거라 위법한 수색이 아닌지, 혐의를 받고 있다면 그 측정 결과를 다툴 수 있는지 막막합니다.',
    ctaKeyword: '음주 뺑소니 가중처벌 측정 적법성 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 뺑소니 가중 — 5단계 식당 추적·측정 적법성 점검 | 로앤가이드',
      description:
        '음주운전 후 식당에서 경찰이 영장 없이 음주측정을 했다면 도로교통법 제148조의2 가중과 임의수사·측정 적법성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주 상태로 운전한 뒤 차를 세우고 자리를 떠 근처 식당에 들어가 있던 운전자입니다. 그런데 누군가의 112 신고를 받고 출동한 경찰관이 식당으로 들어와 테이블에 앉아 있던 저를 찾아 음주운전 여부를 물은 다음 곧바로 음주측정을 했어요. 영장도 없이 식당에 들어와 저를 찾아내 측정한 것이라, 이게 위법한 수색에 해당해 그 측정 결과를 증거로 쓸 수 없는 건 아닌지 의문이 듭니다. 게다가 과거 전력이 있어 재범 가중까지 걸려 있어 더 막막해요. 혐의를 받고 있다면 식당에서 영장 없이 이뤄진 음주측정이 적법한지, 그 결과를 다툴 수 있는지 정리하고 싶은 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제148조의2는 위반 횟수에 따른 가중처벌을, 형사소송법 제199조 제1항은 임의수사의 원칙을 정하는 영역입니다. 판례·실무는 수사기관이 범죄를 수사하면서 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 아무런 물리력이나 강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾는 등 위법행위를 확인하는 것은 특별한 사정이 없는 한 임의수사의 한 방법으로 허용되므로 영장 없이 이뤄졌다고 하여 위법하다고 할 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 음주 뺑소니 + 식당 추적 + 영장 없는 측정 결합은 \'임의수사 허용·측정 적법성 평가\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 출입 경위 ② 임의수사 한계 ③ 측정 적법성 ④ 가중·양형 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 임의수사 ③ 측정 ④ 가중 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 뺑소니 가중처벌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 출입 경위·임의수사 한계·측정 적법성·가중/양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 출입 경위</strong> — 경찰의 식당 출입 방법, 물리력·강제력 행사 여부 정리.</li>\n<li><strong>② 임의수사 한계</strong> — 불특정·다수 출입 장소에 통상적 방법으로 출입했는지 정리.</li>\n<li><strong>③ 측정 적법성</strong> — 출입에 이은 음주측정이 적법한지, 결과의 증거능력 정리.</li>\n<li><strong>④ 가중·양형</strong> — 과거 전력에 따른 재범 가중과 피해 회복·반성 등 양형 정리.</li>\n<li><strong>⑤ 대응</strong> — 측정 적법성 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수사기관이 불특정·다수의 출입이 가능한 장소에 통상적 방법으로 출입해 물리력·강제력 없이 피의자를 찾는 것은 임의수사로 허용될 수 있어 영장 없이 이뤄졌다는 이유만으로 위법하다고 보기는 어려운 영역. 출입 방법·물리력 행사 여부·종업원의 제지나 퇴거 요구가 있었는지를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·정황진술보고서, 측정 결과지·시각, 신고·출동 경위 확인.</li>\n<li><strong>2단계 — 출입·임의수사 경위 정리 (수일 내)</strong> — 경찰의 식당 출입 방법, 물리력·퇴거 요구 여부 점검.</li>\n<li><strong>3단계 — 측정 적법성·증거능력 정리 (공판 전)</strong> — 출입에 이은 측정의 적법성, 결과의 증거능력 쟁점 정리.</li>\n<li><strong>4단계 — 가중·양형 자료 정리 (병행)</strong> — 재범 여부 확인, 피해 회복·초범·반성 등 양형 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 측정 적법성·가중 쟁점 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 뺑소니 가중처벌 식당 추적·측정 적법성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 출입 경위·측정 적법성·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정 경위·시각)</strong></li>\n<li><strong>주취운전자 정황진술보고서 (현장 정황)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>112 신고·출동 경위 자료 (수사 단서)</strong></li>\n<li><strong>식당 CCTV·종업원 진술 (출입·제지·퇴거 요구 여부)</strong></li>\n<li><strong>운전 종료·식당 도착 시각 정리 메모 (시간순)</strong></li>\n<li><strong>과거 전력·재범 여부, 초범·반성 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영장 없는 식당 출입·측정의 적법성은 경찰이 물리력·강제력을 행사했는지, 종업원이 출입을 제지하거나 퇴거를 요구했는지에 좌우되므로, 식당 CCTV·종업원 진술로 출입 경위를 정리해두는 것이 핵심입니다. 통상적 방법의 출입이면 임의수사로 측정이 적법하다고 볼 여지가 크므로, 재범 가중을 대비한 양형 자료도 함께 준비해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임의수사 한계</strong> — 통상적 방법의 출입인지, 물리력·강제력이 있었는지.</li>\n<li><strong>측정 적법성</strong> — 출입에 이은 음주측정이 적법한지.</li>\n<li><strong>증거능력</strong> — 측정 결과·정황보고서의 증거능력.</li>\n<li><strong>재범 가중</strong> — 과거 전력에 따른 가중 적용 여부.</li>\n<li><strong>양형 사정</strong> — 피해 회복·초범 정상·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 식당 출입·영장 없는 음주측정과 임의수사',
        summary:
          '대법원 2025도6752(대법원, 2025.12.11 선고) 영역에서 법원은 수사기관이 범죄를 수사하면서 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 아무런 물리력이나 강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾는 등 위법행위를 확인하는 것은 특별한 사정이 없는 한 임의수사의 한 방법으로 허용되므로 영장 없이 이뤄졌다고 하여 위법하다고 할 수 없다고 보고, 경찰관들이 만취 운전 신고를 받고 24시간 운영 식당에 통상적 방법으로 출입해 물리력 없이 피고인을 찾았고 종업원의 제지나 퇴거 요구도 없었던 사안에서 그 출입과 이어진 음주측정이 적법하다고 판시했습니다. 음주 뺑소니 가중처벌 사안에서도 임의수사 허용과 측정 적법성을 검토해볼 수 있습니다.',
        takeaway: '음주 뺑소니 + 식당 추적 + 영장 없는 측정 결합 시 임의수사 허용·측정 적법성 평가 검토 영역 — 출입 경위·CCTV·종업원 진술·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '영장 없이 식당에 들어와 측정했는데 위법 아닌가요?',
        answer:
          '<strong>불특정·다수 출입 장소에 통상적 방법으로 출입했다면 임의수사로 허용될 수 있는 영역입니다.</strong> 출입 방법·물리력 여부를 정리.',
      },
      {
        question: '경찰이 강제로 들어왔다면 다툴 수 있나요?',
        answer:
          '<strong>물리력·강제력 행사나 종업원의 퇴거 요구가 있었다면 적법성을 다툴 여지가 있는 영역입니다.</strong> 식당 CCTV·진술을 확보.',
      },
      {
        question: '측정 결과를 증거에서 뺄 수 있나요?',
        answer:
          '<strong>측정이 위법한 절차에서 이뤄졌는지에 따라 증거능력이 달라질 수 있는 영역입니다.</strong> 출입·측정 경위를 점검.',
      },
      {
        question: '재범이면 가중은 어떻게 적용되나요?',
        answer:
          '<strong>과거 전력에 따라 가중이 적용될 수 있으나 운전 당시 음주운전 성립이 전제인 영역입니다.</strong> 전력·성립 여부를 함께 점검.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 결과·신고 출동 경위 확보가 출발점인 영역입니다.</strong> 식당 출입 경위와 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 재범 가중처벌', href: '/guide/dui/dui-repeat-offense-aggravation' },
      { label: '음주측정 적법성·임의수사', href: '/guide/dui/dui-breath-test-legality' },
      { label: '위법수집증거·증거능력', href: '/guide/dui/dui-illegal-evidence-admissibility' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-measurement-refusal-track' },
    ],
  },

  // ─── 7. dui-license-suspension-objection-track ───
  {
    domain: 'dui',
    slug: 'dui-license-suspension-objection-track',
    keyword: '음주 면허정지 이의신청',
    questionKeyword: '음주운전으로 면허정지·취소 처분을 받았는데, 생계와 출퇴근에 꼭 필요한 면허라 처분이 너무 과하다는 생각이 들어요. 혐의를 받고 있다면 재량권 남용이라며 이의신청·행정심판으로 처분을 줄이거나 다툴 수 있는지, 기한은 언제까지인지 막막합니다.',
    ctaKeyword: '음주 면허정지 이의신청 재량권 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 면허정지 이의신청 — 5단계 재량권·90일 점검 | 로앤가이드',
      description:
        '음주 면허정지·취소가 과하다고 느껴 다투고 싶다면 도로교통법 제93조 재량 처분과 재량권 일탈·남용, 행정심판 90일 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전으로 적발돼 운전면허 정지 또는 취소 처분을 받은 운전자입니다. 출퇴근과 생계에 면허가 꼭 필요한 상황이라 이 처분이 너무 과하게 느껴지고, 감경 사정도 충분하다는 생각이 들어 그대로 받아들이기가 어려워요. 그래서 이의신청이나 행정심판으로 처분을 줄이거나 다툴 수 있다는 말을 들었는데, 음주운전은 공익상 엄격하게 다뤄진다고도 해서 실제로 재량권 남용으로 인정받을 수 있을지 막막합니다. 혐의를 받고 있다면 어떤 사정이 감경 요소가 되는지, 청구 기한은 언제까지인지, 어떤 순서로 진행해야 하는지 정리하고 싶은 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제93조는 음주운전에 따른 면허 취소·정지를, 행정심판법 제27조는 처분이 있음을 안 날부터 90일 이내의 청구기한을 정하는 영역입니다. 판례·실무는 운전면허를 받은 사람이 음주운전을 한 경우 운전면허 취소 여부는 행정청의 재량행위이나, 음주운전으로 인한 교통사고 방지의 공익상 필요가 중시돼 일반의 수익적 행정행위 취소와 달리 당사자의 불이익보다 이를 방지해야 하는 일반예방적 측면이 더욱 강조돼야 한다고 보는 본 사례 흐름이 있는 영역입니다. 음주 면허정지·취소 + 생계 필요 + 과중 주장 결합은 \'재량권 일탈·남용·90일 청구\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 처분 내용 ② 청구기한 ③ 재량권 일탈·남용 ④ 정상자료 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 처분 ② 기한 ③ 재량 ④ 정상 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 면허정지 이의신청 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분 내용·청구기한·재량권 일탈·남용·정상자료·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 내용</strong> — 정지·취소된 면허 종류·처분 사유·혈중알코올농도 확인.</li>\n<li><strong>② 청구기한</strong> — 처분을 안 날부터 90일 이내 이의신청·행정심판 청구기한 점검.</li>\n<li><strong>③ 재량권 일탈·남용</strong> — 처분이 사회통념상 현저히 타당성을 잃었는지 정리.</li>\n<li><strong>④ 정상자료</strong> — 생계·운전 필요성·반성·부득이한 사정 등 감경 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 이의신청·행정심판·집행정지 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주운전 면허 취소·정지는 재량행위이나 음주운전 사고 방지의 공익이 중시돼 당사자의 불이익보다 일반예방 측면이 더욱 강조되는 영역. 그만큼 재량권 일탈·남용으로 다투려면 단순한 불편을 넘어 처분이 현저히 타당성을 잃었다는 사정과 감경 자료를 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이의신청·행정심판 5단계',
        content:
          '<p><strong>A. 경찰·중앙행정심판위·도로교통공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지 확인 (즉시)</strong> — 면허정지·취소 처분 통지서·사유·혈중알코올농도 확인.</li>\n<li><strong>2단계 — 청구기한 점검 (안 날부터 90일 내)</strong> — 처분을 안 날 기준 90일 청구기한, 집행정지 필요성 점검.</li>\n<li><strong>3단계 — 재량·정상 자료 정리 (가능한 빨리)</strong> — 재량권 일탈·남용 사정과 생계·반성 등 정상 자료 정리.</li>\n<li><strong>4단계 — 이의신청·행정심판 청구 (기한 내)</strong> — 경찰 이의신청 또는 중앙행정심판위 청구서 제출, 집행정지 검토.</li>\n<li><strong>5단계 — 재결 대응 (재결 후)</strong> — 인용·기각 재결에 따른 후속(행정소송 등) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 면허정지 이의신청 재량권·90일 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 처분 내용·재량권·정상자료 갈래입니다.</strong></p>\n<ul>\n<li><strong>운전면허 정지·취소 처분 통지서 (사유·일자)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>주취운전자 적발보고서 (측정 절차·경위)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n<li><strong>생계·운전 필요성 입증 자료 (재직·사업 등)</strong></li>\n<li><strong>반성·부득이한 사정·전력 등 정상 자료</strong></li>\n<li><strong>처분을 안 날 입증 자료 (송달·수령 기록)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이의신청·행정심판은 처분이 있음을 안 날부터 90일 이내에 해야 하므로 통지서 수령일부터 기한을 점검하고, 음주운전은 공익상 엄격히 다뤄지는 만큼 단순한 불편을 넘는 재량권 일탈·남용 사정과 생계·반성 자료를 구체적으로 정리해두는 것이 도움이 됩니다. 면허 공백을 줄이려면 청구와 함께 집행정지 신청도 검토하는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>재량권 일탈·남용</strong> — 처분이 현저히 타당성을 잃었는지.</li>\n<li><strong>일반예방 측면</strong> — 공익상 엄격 처분과 감경 사정의 균형.</li>\n<li><strong>정상 사정</strong> — 생계·운전 필요성·반성·부득이한 사정.</li>\n<li><strong>청구기한</strong> — 처분을 안 날부터 90일 준수 여부.</li>\n<li><strong>집행정지</strong> — 재결 전 면허 공백을 줄일 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 면허취소의 재량성과 일반예방 측면',
        summary:
          '대법원 2017두67476(대법원, 2018.02.28 선고) 영역에서 법원은 운전면허를 받은 사람이 음주운전을 한 경우 운전면허 취소 여부는 행정청의 재량행위이나, 음주운전으로 인한 교통사고 증가와 그 결과의 참혹성 등에 비추어 음주운전 교통사고를 방지할 공익상 필요가 더욱 중시돼야 하고, 운전면허 취소에서는 일반의 수익적 행정행위 취소와 달리 취소로 입게 될 당사자의 불이익보다 이를 방지해야 하는 일반예방적 측면이 더욱 강조돼야 한다고 보고, 혈중알코올농도 0.140%로 취소처분 기준 0.100%를 훨씬 초과하고 특별히 감경할 사정이 없는 사안에서 일부 면허 취소를 재량권 일탈·남용으로 본 원심판단에 법리오해의 위법이 있다고 판시했습니다. 음주 면허정지 이의신청 사안에서도 재량권 일탈·남용을 검토해볼 수 있습니다.',
        takeaway: '음주 면허정지·취소 + 생계 필요 + 과중 주장 결합 시 재량권 일탈·남용·90일 청구 검토 영역 — 통지서·측정 자료·정상자료·청구기한 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '면허정지·취소가 과하다고 느끼면 다툴 수 있나요?',
        answer:
          '<strong>재량행위라 재량권 일탈·남용이 인정되면 다툴 수 있는 영역입니다.</strong> 처분이 현저히 타당성을 잃었는지 정리.',
      },
      {
        question: '생계 때문에 면허가 꼭 필요하면 감경되나요?',
        answer:
          '<strong>생계·운전 필요성은 정상 사정이 되나 공익상 일반예방 측면이 강조되는 영역입니다.</strong> 재직·사업 등 입증 자료를 준비.',
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
          '<strong>처분 통지서·측정 결과·청구기한 점검이 출발점인 영역입니다.</strong> 재량권·정상 자료를 함께 준비.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '재량권 일탈·남용 판단', href: '/guide/dui/dui-discretion-abuse-standard' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '집행정지 신청', href: '/guide/dui/dui-suspension-of-execution' },
      { label: '음주 면허취소 행정심판 측정 정확성', href: '/guide/dui/dui-license-revocation-appeal-track' },
    ],
  },

  // ─── 8. jeonse-fraud-mass-gap-investment-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-mass-gap-investment-track',
    keyword: '갭투자 대규모 전세사기 대항력',
    questionKeyword: '갭투자로 수십 채를 굴리던 임대인 집에 전세로 들어와 전입·확정일자를 갖췄는데 보증금을 못 받고 집이 경매로 넘어갔어요. 대항력으로 보호받아 보증금을 회수하려는데, 임차 목적이 거주가 아니라 회수처럼 보이면 대항력이 부정될 수도 있다고 들어 막막합니다.',
    ctaKeyword: '갭투자 대규모 전세사기 대항력 회수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '갭투자 전세사기 — 5단계 대항력·회수 점검 | 로앤가이드',
      description:
        '갭투자 임대인 집에서 보증금을 못 받고 경매로 넘어갔다면 주택임대차보호법 제3조 대항력 요건과 공시방법·회수 순서 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 임대인이 갭투자로 수십 채를 동시에 굴리던 다세대·빌라에 전세로 들어와 전입신고와 확정일자를 갖춰둔 임차인입니다. 그런데 임대인이 보증금을 돌려주지 못한 채 잠적하고 집들이 줄줄이 경매로 넘어가, 대항력으로 보호받아 보증금을 지키려는 상황이에요. 그런데 대규모 전세사기에서는 임차 목적이 실제 거주가 아니라 \'대항력 있는 임차인으로 보호받아 보증금을 회수하려는 것\'으로 보이면 대항력이 부정될 수도 있다는 말을 들어 더 불안합니다. 전입·점유를 어떻게 유지하고, 임차권등기·배당요구·반환소송을 어떤 순서로 진행해야 보증금을 지킬 수 있는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 대항력을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 임대차계약의 주된 목적이 주택을 사용·수익하려는 것이 아니라 대항력 있는 임차인으로 보호받아 후순위권리자 등보다 우선해 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상 대항력이 인정되지 않을 수 있고, 제3조 제1항의 주민등록이 대항력의 공시방법이 되려면 그 주민등록으로 제3자가 임차권의 존재를 인식할 수 있는 정도여야 한다고 보는 본 사례 흐름이 있는 영역입니다. 갭투자 + 보증금 미반환 + 경매 결합은 \'대항력 목적·공시방법·회수 순서\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항력 목적·공시 ③ 임차권등기 ④ 배당·잔액 ⑤ 소송 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 대항력 ③ 등기 ④ 배당 ⑤ 소송 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 갭투자 대규모 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항력 목적/공시·임차권등기·배당/잔액·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·선순위, 경매 진행과 보증금 비율 확인.</li>\n<li><strong>② 대항력 목적·공시</strong> — 실제 거주 목적과 전입·점유가 임차권을 공시하는지 정리.</li>\n<li><strong>③ 임차권등기</strong> — 이사 필요 시 전출 전 임차권등기명령(통상 1~2개월) 검토.</li>\n<li><strong>④ 배당·잔액</strong> — 경매 배당요구와 낙찰가 대비 회수 가능 잔액 확인.</li>\n<li><strong>⑤ 소송</strong> — 미배당 잔액 회수·보증금반환소송 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대차의 주된 목적이 사용·수익이 아니라 회수에 있는 것처럼 보이면 대항력이 부정될 여지가 있고, 대항력의 공시방법인 주민등록은 제3자가 임차권 존재를 인식할 수 있는 정도여야 하는 영역. 실제 거주·점유를 입증하고 전입·확정일자를 유지하는 것이 핵심이며, 회수 순서를 점검하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·HUG·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계·선순위 확인 (즉시)</strong> — 등기부·근저당, 선순위 임차·보증금 비율, 경매개시 점검.</li>\n<li><strong>2단계 — 대항력·거주 입증 점검 (수일 내)</strong> — 전입·점유·확정일자 유지와 실제 거주 입증 자료 정리.</li>\n<li><strong>3단계 — 임차권등기·배당요구 (이사 전/종기 내)</strong> — 이사 시 임차권등기명령(통상 1~2개월), 경매 배당요구.</li>\n<li><strong>4단계 — 배당 결과·잔액 확인 (배당 후)</strong> — 배당표·낙찰가, 보증금 잔액 산정.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 미배당 잔액 회수, 보증금반환소송·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">갭투자 대규모 전세사기 대항력·회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항력·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위·경매개시)</strong></li>\n<li><strong>실제 거주·점유 입증 자료 (관리비·우편·택배 등)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 자료 (거주 목적 입증)</strong></li>\n<li><strong>임차권등기명령 신청·완료 자료 (이사 시)</strong></li>\n<li><strong>경매 배당표·배당요구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대규모 갭투자 전세사기에서는 임차 목적이 실제 거주였음을 보여주는 것이 중요하므로, 관리비·우편·택배 등 실제 거주·점유 입증 자료와 계약 경위를 함께 정리해두는 것이 도움이 됩니다. 대항력은 전입·점유가 유지돼야 지켜지므로 이사 시에는 전출 전 임차권등기명령(통상 1~2개월)을 마치고, 선순위 현황과 배당표도 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항력 목적</strong> — 임차 목적이 사용·수익이 아니라 회수로 보이는지.</li>\n<li><strong>공시방법</strong> — 주민등록이 임차권을 공시하는 방법이 되는지.</li>\n<li><strong>실제 거주</strong> — 전입·점유와 실제 거주가 입증되는지.</li>\n<li><strong>선순위·배당</strong> — 선순위 보증금·근저당 후 회수 가능 잔액.</li>\n<li><strong>잔액 회수</strong> — 미배당 잔액의 반환·소송 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 회수 목적 임차의 대항력과 주민등록 공시방법',
        summary:
          '대법원 2024다268508(대법원, 2025.08.14 선고) 영역에서 법원은 임대차계약의 주된 목적이 주택을 사용·수익하려는 것이 아니고 대항력 있는 임차인으로 보호받아 후순위권리자 기타 채권자보다 우선해 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상 대항력이 인정되지 않고, 제3조 제1항의 주민등록이 대항력의 공시방법이 되려면 그 주민등록으로 제3자가 임차권의 존재를 인식할 수 있는 정도여야 한다고 보아, 주택의 종전 소유자였던 사람의 주민등록으로 표상되는 점유관계가 임차권을 매개로 하는 점유임을 제3자가 인식할 수 있는 정도라고 보기 어렵다는 등의 이유로 대항력 취득을 인정한 원심판결에 법리오해의 잘못이 있다고 판시했습니다. 갭투자 대규모 전세사기 사안에서도 대항력 목적·공시방법과 회수 순서를 검토해볼 수 있습니다.',
        takeaway: '갭투자 + 보증금 미반환 + 경매 결합 시 대항력 목적·공시방법·회수 순서 검토 영역 — 실제 거주 입증·전입·점유 유지·선순위 현황 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '대규모 전세사기면 대항력이 부정될 수도 있나요?',
        answer:
          '<strong>임차 목적이 사용·수익이 아니라 회수로 보이면 대항력이 부정될 여지가 있는 영역입니다.</strong> 실제 거주·점유를 입증.',
      },
      {
        question: '실제로 살았다는 건 어떻게 증명하나요?',
        answer:
          '<strong>관리비·우편·택배 등으로 실제 거주·점유를 입증할 수 있는 영역입니다.</strong> 거주 입증 자료를 시간순으로 정리.',
      },
      {
        question: '이사를 가야 하면 권리가 사라지나요?',
        answer:
          '<strong>전출 전 임차권등기명령(통상 1~2개월)으로 대항력·우선변제권을 유지할 수 있는 영역입니다.</strong> 등기 완료 후 이사 진행.',
      },
      {
        question: '선순위가 많으면 한 푼도 못 받나요?',
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
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '갭투자 대규모 전세사기 대응', href: '/guide/jeonse-fraud/jeonse-fraud-mass-gap-investment-response' },
      { label: '임차권등기명령 신청', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-order' },
      { label: '보증보험 미가입 전세사기', href: '/guide/jeonse-fraud/jeonse-fraud-guarantee-insurance-unsubscribed-track' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 9. jeonse-fraud-power-of-attorney-forgery-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-power-of-attorney-forgery-track',
    keyword: '위임장 위조 전세사기 임대인 파산 면책',
    questionKeyword: '위임장을 위조해 전세를 놓은 사기성 임대인에게 보증금을 떼였는데, 임대인이 파산·면책 결정을 받았어요. 확정일자·우선변제권이 있는 제 보증금반환채권도 면책으로 사라지는지, 어떤 순서로 회수해야 하는지 막막합니다.',
    ctaKeyword: '위임장 위조 전세사기 면책 회수 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '위임장 위조 전세사기 — 5단계 면책·우선변제 점검 | 로앤가이드',
      description:
        '위조 위임장으로 보증금을 떼이고 임대인이 파산·면책됐다면 채무자회생법 제566조 면책과 우선변제권의 관계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"소유자의 위임장을 위조한 사람이 대리인 행세를 하며 전세를 놓는 방식의 사기에 휘말려 보증금을 떼인 임차인입니다. 그래도 전입신고와 확정일자를 갖춰 우선변제권은 확보했다고 생각했는데, 임대인(또는 채무자) 측이 개인파산을 신청해 면책 결정을 받았다는 사실을 알게 됐어요. 면책이 되면 그 사람에게 더는 돈을 받을 수 없다고 들어, 확정일자·우선변제권이 있는 제 보증금반환채권까지 함께 사라지는 것인지, 그렇다면 집이 경매로 넘어갈 때 우선변제권을 주장할 수 있는지가 헷갈립니다. 위임장 위조 정황은 어떻게 정리하고, 보증금은 어떤 순서로 회수해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 대항력을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을, 채무자 회생 및 파산에 관한 법률 제566조는 면책의 효력과 그 예외를 정하는 영역입니다. 판례·실무는 대항요건과 확정일자를 갖춘 주택임차인이 채무자에 대해 가지는 보증금반환채권은 면책에서 제외되는 청구권으로 규정돼 있지 않고 우선변제권이 인정되는 부분도 마찬가지여서, 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 보증금반환채권 전부에 미치며, 다만 임차인은 이후 주택이 환가되는 경우 환가대금에 관해 우선변제권을 주장할 수 있을 뿐 채무자를 상대로 이행을 소구할 수는 없다고 보는 본 사례 흐름이 있는 영역입니다. 위임장 위조 + 보증금 미반환 + 임대인 면책 결합은 \'면책 효력·우선변제권 행사\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 위조 정황 ③ 면책 효력 ④ 우선변제 행사 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 위조 ③ 면책 ④ 우선변제 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 위임장 위조 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·위조 정황·면책 효력·우선변제 행사·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부·확정일자·전입, 경매 진행과 보증금 비율 확인.</li>\n<li><strong>② 위조 정황</strong> — 위임장 위조·무권대리 정황과 형사 고소 가능성 정리.</li>\n<li><strong>③ 면책 효력</strong> — 임대인 면책이 보증금반환채권 전부에 미치는지 정리.</li>\n<li><strong>④ 우선변제 행사</strong> — 면책 후에도 환가대금에 우선변제권을 주장할 수 있는지 정리.</li>\n<li><strong>⑤ 회수</strong> — 경매 배당요구·환가대금 회수·잔액 처리 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 보증금반환채권 전부에 미쳐 채무자를 상대로 이행을 소구할 수는 없지만, 임차인은 이후 주택이 환가되는 경우 그 환가대금에 관해 우선변제권을 주장할 수 있는 영역. 확정일자·전입을 유지하고 경매·배당에서 우선변제를 행사하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·면책 자료 확인 (즉시)</strong> — 등기부·확정일자·전입, 임대인 파산·면책결정 확인.</li>\n<li><strong>2단계 — 위조·권리 정황 정리 (수일 내)</strong> — 위임장 위조·무권대리 정황, 계약 경위 정리.</li>\n<li><strong>3단계 — 면책 효력·우선변제 점검 (가능한 빨리)</strong> — 면책이 보증금채권 전부에 미치는지, 환가대금 우선변제 가능성 점검.</li>\n<li><strong>4단계 — 배당요구·우선변제 행사 (종기 내)</strong> — 경매 배당요구, 환가대금에 대한 우선변제권 행사.</li>\n<li><strong>5단계 — 잔액·형사 병행 (병행)</strong> — 미회수 잔액 처리, 위조 관련 형사 고소 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">위임장 위조 전세사기 면책·우선변제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·위조 정황·우선변제 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (소유관계·근저당·경매)</strong></li>\n<li><strong>위임장·대리권 관련 자료 (위조·무권대리 정황)</strong></li>\n<li><strong>임대인 파산·면책결정문 (면책 효력 확인)</strong></li>\n<li><strong>경매 배당표·배당요구 자료 (우선변제 행사)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인이 면책을 받으면 채무자를 상대로 보증금 이행을 소구하기는 어렵지만, 확정일자·전입을 유지하면 이후 주택이 환가될 때 환가대금에 우선변제권을 주장할 수 있으므로 대항요건·확정일자 자료를 유지·정리해두는 것이 도움이 됩니다. 위임장 위조·무권대리 정황은 형사 고소와도 연결될 수 있어 관련 자료를 함께 모아두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>면책 효력</strong> — 면책이 우선변제권 부분까지 보증금채권 전부에 미치는지.</li>\n<li><strong>우선변제 행사</strong> — 면책 후 환가대금에 우선변제권을 주장할 수 있는지.</li>\n<li><strong>이행 소구 제한</strong> — 채무자를 상대로 이행을 소구할 수 있는지.</li>\n<li><strong>위조·무권대리</strong> — 위임장 위조·무권대리 정황과 형사 고소.</li>\n<li><strong>잔액 회수</strong> — 미회수 잔액의 처리 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정과 우선변제권 있는 보증금반환채권',
        summary:
          '대법원 2022다247378(대법원, 2025.06.12 선고) 영역에서 법원은 채무자 회생 및 파산에 관한 법률 제566조가 대항요건과 확정일자를 갖춘 주택임차인의 보증금반환채권을 면책에서 제외되는 청구권으로 규정하지 않았고 그중 우선변제권이 인정되는 부분도 마찬가지이므로, 면책결정의 효력은 우선변제권이 인정되는 부분을 포함해 주택임차인의 보증금반환채권 전부에 미치고, 따라서 주택임차인이 우선변제권이 인정되는 부분조차 변제받지 못한 상태에서 파산절차가 폐지됐더라도 면책결정이 확정된 이상 이후 주택이 환가되는 경우 환가대금에 관해 우선변제권을 주장할 수 있을 뿐 채무자를 상대로 보증금반환채권의 이행을 소구할 수는 없다고 판시했습니다. 위임장 위조 전세사기 사안에서도 면책 효력과 우선변제권 행사를 검토해볼 수 있습니다.',
        takeaway: '위임장 위조 + 보증금 미반환 + 임대인 면책 결합 시 면책 효력·우선변제권 행사 검토 영역 — 확정일자·전입 유지·면책결정문·위조 정황 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임대인이 면책받으면 제 보증금도 사라지나요?',
        answer:
          '<strong>면책 효력이 보증금반환채권 전부에 미쳐 채무자에게 이행을 소구하기는 어려운 영역입니다.</strong> 면책결정문·권리관계를 확인.',
      },
      {
        question: '면책 후에도 우선변제권은 쓸 수 있나요?',
        answer:
          '<strong>이후 주택이 환가되면 환가대금에 우선변제권을 주장할 수 있는 영역입니다.</strong> 확정일자·전입을 유지하고 배당요구를 점검.',
      },
      {
        question: '위임장 위조는 어떻게 다투나요?',
        answer:
          '<strong>위조·무권대리 정황은 형사 고소와도 연결될 수 있는 영역입니다.</strong> 위임장·대리권 자료와 계약 경위를 확보.',
      },
      {
        question: '확정일자를 받아뒀는데 의미가 없는 건가요?',
        answer:
          '<strong>확정일자·우선변제권은 환가대금 배당에서 여전히 의미가 있는 영역입니다.</strong> 대항요건·확정일자 자료를 유지.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 면책·우선변제·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '임대인 파산·면책과 보증금', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-discharge-deposit' },
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '위임장 위조·무권대리 대응', href: '/guide/jeonse-fraud/jeonse-fraud-forged-power-of-attorney-response' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '갭투자 대규모 전세사기 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-mass-gap-investment-track' },
    ],
  },

  // ─── 10. jeonse-fraud-guarantee-insurance-unsubscribed-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-guarantee-insurance-unsubscribed-track',
    keyword: '보증보험 미가입 전세사기 대항요건 존속',
    questionKeyword: '전세보증금 반환보증에 가입하지 못한 채 보증금을 못 받았는데, 집이 경매로 넘어가 새 주인이 생겼어요. 전입을 유지하면 새 주인에게도 보증금을 주장할 수 있는지, 일부만 배당받아도 임대차 관계를 계속 주장할 수 있는지 막막합니다.',
    ctaKeyword: '보증보험 미가입 전세사기 대항요건 승계 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '보증보험 미가입 전세사기 — 5단계 대항요건·승계 점검 | 로앤가이드',
      description:
        '전세보증보험에 못 든 채 보증금을 떼이고 집이 경매로 넘어갔다면 주택임대차보호법 제3조 대항요건 존속과 양수인 임대인 지위 승계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세보증금 반환보증(보증보험)에 미처 가입하지 못한 채 계약 종료 후 보증금을 돌려받지 못한 임차인입니다. 그 사이 집이 경매로 넘어가 낙찰자(새 주인)가 생겼는데, 보증보험이 없으니 보증기관에서 대신 받을 길도 막혀 더 막막해졌어요. 그래도 전입신고와 확정일자를 갖춰 대항력·우선변제권이 있다고 들었는데, 전입을 계속 유지하면 새 주인에게도 보증금 반환을 주장할 수 있는지, 경매에서 우선변제로 일부만 배당받았을 때 나머지 보증금에 대해 임대차 관계의 존속을 계속 주장할 수 있는지가 헷갈립니다. 보증금을 어떤 순서로 지켜야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 대항력을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을, 같은 법 제3조 제4항은 임차주택 양수인의 임대인 지위 승계를 정하는 영역입니다. 판례·실무는 주택임차인이 인도와 주민등록을 구비하면 대항력을 취득하고 대항요건이 존속하는 한 대항력이 유지되며, 대항력과 우선변제권을 겸유한 임차인이 우선변제권을 선택해 경매절차에서 배당요구를 했으나 보증금 전액을 배당받지 못한 경우 여전히 대항요건을 유지함으로써 임대차 관계의 존속을 주장할 수 있어, 대항력을 구비한 후 임차주택을 양수한 자는 그 임대인 지위를 당연히 승계한다고 보는 본 사례 흐름이 있는 영역입니다. 보증보험 미가입 + 보증금 미반환 + 경매·양수 결합은 \'대항요건 존속·임대인 지위 승계\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 대항요건 존속 ③ 배당·잔액 ④ 양수인 승계 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 존속 ③ 배당 ④ 승계 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 보증보험 미가입 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항요건 존속·배당/잔액·양수인 승계·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부·근저당·선순위, 경매 진행과 보증금 비율 확인.</li>\n<li><strong>② 대항요건 존속</strong> — 전입·점유·확정일자가 계속 유지되는지 정리.</li>\n<li><strong>③ 배당·잔액</strong> — 우선변제 배당요구와 배당받지 못한 잔액 확인.</li>\n<li><strong>④ 양수인 승계</strong> — 낙찰자(양수인)가 임대인 지위를 승계하는지 정리.</li>\n<li><strong>⑤ 회수</strong> — 잔액에 대한 임대차 존속 주장·반환소송 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항력과 우선변제권을 겸유한 임차인이 배당요구를 했으나 보증금 전액을 배당받지 못하면 여전히 대항요건을 유지함으로써 임대차 존속을 주장할 수 있고, 그 임차주택을 양수한 자는 임대인 지위를 당연히 승계하는 영역. 보증보험이 없더라도 전입·점유·확정일자를 유지하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·HUG·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계·선순위 확인 (즉시)</strong> — 등기부·근저당, 선순위·보증금 비율, 경매개시·낙찰 점검.</li>\n<li><strong>2단계 — 대항요건 점검 (수일 내)</strong> — 전입·점유·확정일자 유지 여부, 함부로 전출하지 않도록 점검.</li>\n<li><strong>3단계 — 배당요구·잔액 확인 (종기/배당 후)</strong> — 우선변제 배당요구, 배당받지 못한 잔액 산정.</li>\n<li><strong>4단계 — 양수인 승계 주장 (낙찰 후)</strong> — 낙찰자(양수인)에게 임대인 지위 승계·임대차 존속 주장.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 잔액 반환 요구, 보증금반환소송·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보증보험 미가입 전세사기 대항요건·승계 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·승계 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위·경매·낙찰)</strong></li>\n<li><strong>실제 거주·점유 입증 자료 (관리비·우편 등)</strong></li>\n<li><strong>경매 배당표·배당요구 자료 (배당·잔액)</strong></li>\n<li><strong>낙찰자(양수인) 정보·임대인 지위 승계 자료</strong></li>\n<li><strong>보증금 송금 내역·반환 요구 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보증보험이 없더라도 전입·점유·확정일자라는 대항요건을 유지하면, 우선변제로 일부만 배당받았을 때 나머지 잔액에 대해 임대차 존속을 주장하고 낙찰자(양수인)에게 임대인 지위 승계를 주장할 수 있으므로 함부로 전출하지 않는 것이 핵심입니다. 배당표·낙찰 자료와 실제 거주 입증 자료를 함께 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 존속</strong> — 전입·점유·확정일자가 계속 유지되는지.</li>\n<li><strong>양수인 승계</strong> — 낙찰자가 임대인 지위를 당연히 승계하는지.</li>\n<li><strong>잔액 존속 주장</strong> — 일부만 배당받아도 임대차 존속을 주장할 수 있는지.</li>\n<li><strong>선순위·배당</strong> — 선순위 보증금·근저당 후 회수 가능 잔액.</li>\n<li><strong>잔액 회수</strong> — 미배당 잔액의 반환·소송 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 배당 후 대항요건 존속과 양수인의 임대인 지위 승계',
        summary:
          '대법원 2022다255126(대법원, 2023.02.02 선고) 영역에서 법원은 주택임차인이 주택임대차보호법 제3조 제1항의 인도와 주민등록을 구비하면 대항력을 취득하고 대항요건이 존속하는 한 대항력이 유지되며, 대항력과 우선변제권을 겸유한 임차인이 우선변제권을 선택해 경매절차에서 배당요구를 했으나 보증금 전액을 배당받지 못한 경우 여전히 대항요건을 유지함으로써 임대차 관계의 존속을 주장할 수 있으므로 대항력을 구비한 후 임차주택을 양수한 자는 존속되는 임대차의 임대인 지위를 당연히 승계하고, 이는 금융기관이 보증금반환채권을 양수해 우선변제권을 승계한 다음 일부를 배당받은 경우에도 마찬가지여서 대항요건이 존속하는 한 양수인을 상대로 임대차 존속을 주장할 수 있다고 판시했습니다. 보증보험 미가입 전세사기 사안에서도 대항요건 존속과 임대인 지위 승계를 검토해볼 수 있습니다.',
        takeaway: '보증보험 미가입 + 보증금 미반환 + 경매·양수 결합 시 대항요건 존속·임대인 지위 승계 검토 영역 — 전입·점유 유지·배당표·낙찰 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보증보험이 없으면 보증금을 못 지키나요?',
        answer:
          '<strong>보증보험이 없어도 전입·점유·확정일자 대항요건으로 보호받을 수 있는 영역입니다.</strong> 대항요건을 유지하고 우선변제를 점검.',
      },
      {
        question: '집이 경매로 넘어가 새 주인이 생겼는데 보증금을 받을 수 있나요?',
        answer:
          '<strong>대항요건이 존속하면 양수인이 임대인 지위를 당연히 승계하는 영역입니다.</strong> 전입·점유를 유지하고 승계를 주장.',
      },
      {
        question: '일부만 배당받으면 나머지는 못 받나요?',
        answer:
          '<strong>전액을 배당받지 못하면 대항요건 유지로 임대차 존속을 주장할 수 있는 영역입니다.</strong> 배당표·잔액을 확인.',
      },
      {
        question: '전입을 빼면 어떻게 되나요?',
        answer:
          '<strong>전출하면 대항요건이 깨져 권리 유지가 어려워질 수 있는 영역입니다.</strong> 함부로 전출하지 말고 점유를 유지.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 대항력·배당·승계 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '양수인 임대인 지위 승계', href: '/guide/jeonse-fraud/jeonse-fraud-transferee-landlord-succession' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '갭투자 대규모 전세사기 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-mass-gap-investment-track' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },
];
