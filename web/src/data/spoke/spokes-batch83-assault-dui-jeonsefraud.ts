import { SpokePage } from '../spoke-pages';

// batch83 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-05-31)
//
// 고유 존재 이유:
// 1. assault-bar-drunk-customer-confrontation-track — 술집 취객이 시비 끝에 폭행해 다친 피해자의 상해진단서·고소·합의 판단형 트랙. 진단서 증명력·경미한 상해 평가가 핵심.
// 2. assault-road-rage-stop-exit-confrontation-track — 보복운전 후 차에서 내려 폭행한 사안의 피해자 판단형 트랙. 위험한 물건 휴대·특수상해 성립 정황이 핵심.
// 3. assault-school-parent-staff-confrontation-track — 학교에서 학부모가 교직원을 폭행한 사안의 피해자 절차형 트랙. 신고·고소·업무방해 병행 흐름이 핵심.
// 4. assault-sibling-inheritance-dispute-mutual-track — 형제 상속 다툼 중 쌍방 몸싸움한 neutral 트랙. 쌍방·정당방위·방어행위 위법성 조각이 핵심.
// 5. dui-breath-test-refusal-measurement-track — 음주측정을 거부한 accused 트랙. 측정불응 성립 시기·일시적 거부 구분이 핵심.
// 6. dui-morning-after-residual-alcohol-track — 숙취 잔존알코올 상태 운전 accused 트랙. 상승기 측정·운전 시점 농도 추정이 핵심.
// 7. dui-parking-lot-short-move-road-track — 주차장 단거리 이동의 도로 여부·임의수사 적법성 accused 트랙. 식당 출입 임의수사·측정 적법성이 핵심.
// 8. jeonse-fraud-multi-unit-landlord-mass-default-track — 다세대 갭투자 집주인 부도로 보증금 미반환 피해자 절차형 트랙. 대항력 유지·임차권등기·우선변제가 핵심.
// 9. jeonse-fraud-senior-mortgage-underwater-deposit-track — 선순위 근저당 깡통전세 피해자 판단형 트랙. 중개사 확인·설명의무·선순위 채권 조사가 핵심.
// 10. jeonse-fraud-double-contract-broker-collusion-track — 이중계약·중개사 가담으로 보증금 위험에 처한 피해자 판단형 트랙. 중개사 정보 제공·확인설명 책임이 핵심.

export const spokesBatch83AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-bar-drunk-customer-confrontation-track ───
  {
    domain: 'assault',
    slug: 'assault-bar-drunk-customer-confrontation-track',
    keyword: '술집 취객 시비 폭행 상해 고소',
    questionKeyword: '술집에서 옆 테이블 취객이 시비를 걸다 갑자기 저를 밀치고 때려 입술이 터지고 멍이 들었어요. 진단서를 받았는데 상해로 고소하고 치료비·합의금을 받을 수 있을지 막막합니다.',
    ctaKeyword: '술집 취객 폭행 상해 증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '술집 취객 폭행 상해 — 5단계 진단서·고소 점검 | 로앤가이드',
      description:
        '술집에서 취객에게 맞아 다쳤다면 진단서 증명력·상해 입증·고소·합의 5가지 트랙으로 무엇부터 챙길지 지금 확인하세요.',
    },
    intro:
      '<p>"늦은 시간 술집에서 옆 테이블 취객이 시비를 걸어왔고, 말리는 과정에서 갑자기 제 얼굴을 밀치고 때려 입술이 터지고 광대뼈 부위에 멍이 든 피해자입니다. 가게가 시끄러워 누가 봤는지도 모르겠고, 상대는 \'기억이 안 난다\'며 발뺌하고 있어요. 다음 날 병원에서 상해진단서를 받았는데, 이걸로 상해죄로 고소가 되는지, 치료비와 합의금은 어떻게 받는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 대해 폭행한 자를 2년 이하의 징역 또는 500만원 이하의 벌금 등에 처하도록 정하고, 같은 법 제257조 제1항은 사람의 신체를 상해한 자를 7년 이하의 징역 등에 처하도록 규정하는 영역입니다. 판례·실무는 상해진단서가 유력한 증거가 될 수 있으나 주로 피해자의 주관적 통증 호소에 의존해 발급된 경우 그 증명력을 신중히 판단하고, 폭행이 없어도 일상에서 생길 수 있는 극히 경미한 상처는 상해로 보지 않는 등 본 사례 흐름이 있는 영역입니다. 술집 시비 + 폭행 + 상해 진단 결합은 \'폭행·상해 고소·치료비·합의\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 상해 입증 ② 행위 정황 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 정황 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술집 취객 폭행 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 입증·행위 정황·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 입증</strong> — 상해진단서·진료기록으로 부상 부위·치료기간과 폭행의 인과관계 정리.</li>\n<li><strong>② 행위 정황</strong> — 술집 CCTV·종업원·동석자 등 폭행 정황 증거 확보.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 진단 내용에 따라 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상해진단서는 유력한 증거가 될 수 있지만 주관적 통증 호소에 주로 의존해 발급된 경우 증명력이 신중히 평가될 수 있는 영역. 부상 직후 진료받은 시점과 진단 경위, CCTV 같은 객관 정황이 빠르게 모일수록 입증이 수월해지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위 사진·술집 CCTV 보존 요청.</li>\n<li><strong>2단계 — 목격자·정황 정리 (수일 내)</strong> — 종업원·동석자 연락처, 시비·폭행 경위·시간 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·대질 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집 취객 폭행 상해 고소·합의 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 입증·행위 정황·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부상 부위·치료기간)</strong></li>\n<li><strong>술집 내부·입구 CCTV 영상</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>종업원·동석자 진술·연락처</strong></li>\n<li><strong>시비·폭행 경위·시간 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>상대와의 문자·통화 등 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 술집 CCTV는 보존기간이 짧아 며칠 안에 사라질 수 있으므로 업주에게 보존 요청을 먼저 해두는 것이 도움이 됩니다. 상해진단서는 부상 직후 받아두면 진단 시점과 폭행의 시간상 근접성을 보여줘 증명력 판단에 유리한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해진단서 증명력</strong> — 주관적 통증 호소에 의존한 진단인지, 정황과 일치하는지.</li>\n<li><strong>폭행·상해 구분</strong> — 부상이 경미해 폭행에 그치는지, 상해로 평가되는지.</li>\n<li><strong>인과관계</strong> — 부상이 폭행으로 생겼는지, 기존 상태인지.</li>\n<li><strong>가해자 특정</strong> — 술자리 혼잡 속 행위자 특정·정황 일치.</li>\n<li><strong>합의·처벌 의사</strong> — 폭행죄 반의사불벌 성격과 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서의 증명력과 상해의 의미 판단 기준',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 상해진단서가 피해자 진술과 함께 유력한 증거가 될 수 있으나, 주로 피해자의 주관적 통증 호소 등에 의존해 의학적 가능성만으로 발급된 경우에는 진단 시점이 상해 발생과 시간상 근접한지, 상해 부위·정도가 주장 경위와 일치하는지 등을 면밀히 살펴 증명력을 신중히 판단해야 한다고 판시했습니다. 또 폭행이 없어도 일상에서 생길 수 있는 극히 경미한 상처는 상해로 보기 어렵다고 보았습니다. 술집 폭행 상해 사안에서도 진단서 경위와 부상 정도를 함께 검토해볼 수 있습니다.',
        takeaway: '술집 시비 + 폭행 + 상해 진단 결합 시 폭행·상해 고소·치료비·합의 검토 영역 — 진단서 경위·CCTV 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '입술이 터지고 멍든 정도도 상해가 되나요?',
        answer:
          '<strong>치료가 필요한 부상이면 상해로 평가될 수 있으나, 극히 경미한 상처는 폭행에 그칠 여지가 있는 영역입니다.</strong> 진단 내용으로 정도부터 정리.',
      },
      {
        question: '상해진단서만 있으면 처벌되나요?',
        answer:
          '<strong>진단서는 유력한 증거이지만 발급 경위·정황 일치 여부로 증명력이 신중히 판단되는 영역입니다.</strong> CCTV 등 객관 자료를 함께 확보.',
      },
      {
        question: '취해서 누가 때렸는지 헷갈리는데 괜찮나요?',
        answer:
          '<strong>CCTV·종업원·동석자 진술로 행위자를 특정하는 영역입니다.</strong> 영상 보존 요청을 서둘러 진행.',
      },
      {
        question: '치료비와 합의금은 어떻게 받나요?',
        answer:
          '<strong>형사 합의 또는 민사 손해배상으로 치료비·위자료를 청구하는 영역입니다.</strong> 사례에 따라 다르지만 치료기간·과실에 따라 수준이 달라질 수 있습니다.',
      },
      {
        question: '상대가 기억 안 난다고 하면 어떻게 하나요?',
        answer:
          '<strong>음주는 책임을 면하는 사유가 되기 어렵고, 객관 증거로 행위를 입증하는 영역입니다.</strong> 정황 자료를 시간순으로 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '상해진단서 발급', href: '/guide/assault/assault-injury-diagnosis-certificate' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 2. assault-road-rage-stop-exit-confrontation-track ───
  {
    domain: 'assault',
    slug: 'assault-road-rage-stop-exit-confrontation-track',
    keyword: '보복운전 하차 폭행 특수상해 고소',
    questionKeyword: '앞에서 급정거로 보복운전을 하던 운전자가 차를 세우고 내려 공구 같은 걸 든 채 위협하며 저를 때려 다쳤어요. 단순 폭행이 아니라 특수상해로 고소할 수 있는지 막막합니다.',
    ctaKeyword: '보복운전 하차 폭행 특수상해 정황 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '보복운전 하차 폭행 — 5단계 특수상해·증거 점검 | 로앤가이드',
      description:
        '보복운전 운전자가 차에서 내려 흉기를 든 채 폭행해 다쳤다면 특수상해 성립·블랙박스 증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제 차 앞에서 급정거와 진로 방해로 보복운전을 하던 운전자가 결국 차를 세우고 내려, 트렁크에서 공구 같은 물건을 꺼내 든 채 다가와 위협하며 저를 밀치고 때려 팔과 어깨를 다친 피해자입니다. 무서워서 그 자리에서는 제대로 대응도 못 했고, 상대는 \'물건은 들고만 있었다\'고 합니다. 이게 단순 폭행인지, 위험한 물건을 휴대한 특수상해·특수협박이 되는지, 블랙박스로 입증이 되는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을 규정하고, 같은 법 제258조의2 제1항은 위험한 물건을 휴대하여 사람을 상해한 경우 특수상해로 가중해 처벌하도록 정하는 영역입니다. 판례·실무는 \'휴대\'란 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지하거나 몸에 지니는 것을 뜻하고 실제 사용까지 요구되지는 않으며 손에 꼭 쥐고 있을 필요도 없다고 보는 본 사례 흐름이 있는 영역입니다. 보복운전 + 하차 + 위험한 물건 + 상해 결합은 \'특수상해·특수협박 성립\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 상해 입증 ② 물건 휴대 정황 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 휴대 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 보복운전 하차 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 입증·물건 휴대 정황·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 입증</strong> — 상해진단서·진료기록으로 폭행과 부상의 인과관계 정리.</li>\n<li><strong>② 물건 휴대 정황</strong> — 블랙박스·CCTV로 위험한 물건 소지·사용 의도 정황 확보.</li>\n<li><strong>③ 고소</strong> — 특수상해(형법 제258조의2)·특수협박 등 적용 여부 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위험한 물건을 \'휴대\'했다고 보려면 현장에서 사용하려는 의도 아래 소지하거나 몸에 지니면 충분하고 실제 사용이나 손에 쥐고 있을 것까지 요구되지 않을 수 있는 영역. 블랙박스로 물건 소지와 위협 정황을 확보하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·블랙박스 확보 (즉시~당일)</strong> — 상해진단서, 차량 블랙박스·현장 CCTV 영상 보존.</li>\n<li><strong>2단계 — 물건 휴대·위협 정황 정리 (수일 내)</strong> — 물건 종류·소지 경위·위협 장면, 차량번호 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·대질 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보복운전 하차 폭행 특수상해 고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 입증·물건 휴대·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부상 부위·치료기간)</strong></li>\n<li><strong>차량 블랙박스 영상 (전후방)</strong></li>\n<li><strong>현장 CCTV·도로 영상</strong></li>\n<li><strong>위험한 물건·차량번호 사진</strong></li>\n<li><strong>보복운전·하차·위협 경위 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>목격자·동승자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블랙박스는 보복운전 진로 방해부터 하차·위협까지 연속 정황을 보여주는 핵심 자료이므로 즉시 백업해두는 것이 안전합니다. 물건을 실제 휘둘렀는지보다 사용하려는 의도로 소지·휴대했는지가 쟁점이 될 수 있어, 소지 경위와 위협 장면을 함께 정리해두는 것이 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위험한 물건 휴대</strong> — 사용 의도 소지인지, 실제 사용·손에 쥠이 필요한지.</li>\n<li><strong>특수상해·특수협박</strong> — 단순 폭행을 넘어 가중 적용되는지.</li>\n<li><strong>상해 인과</strong> — 부상이 폭행으로 발생했는지, 정도가 어떤지.</li>\n<li><strong>보복운전 연관</strong> — 진로 방해·급정거가 폭행과 이어진 정황.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위험한 물건 \'휴대\'의 의미와 판단 기준',
        summary:
          '대법원 2023도18812(대법원, 2024.06.13 선고) 영역에서 법원은 특수상해·특수협박의 \'위험한 물건을 휴대하여\'란 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지하거나 몸에 지니는 경우를 의미하고, 사용 의도가 있었는지는 범행 동기·휴대 경위·사용 방법·인적 관계·전후 정황을 합리적으로 고려해 판단한다고 판시했습니다. 또 실제 범행에 사용했을 것까지 요구되지 않고, 현장에서 곧바로 사용할 수 있는 상태로 사실상 지배하면 충분하며 손에 꼭 쥐고 있을 필요는 없다고 보았습니다. 보복운전 후 하차 폭행 사안에서도 물건 휴대 정황을 검토해볼 수 있습니다.',
        takeaway: '보복운전 + 하차 + 위험한 물건 + 상해 결합 시 특수상해·특수협박 성립 검토 영역 — 블랙박스·휴대 정황 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 물건을 휘두르진 않았는데 특수상해가 되나요?',
        answer:
          '<strong>사용 의도로 소지·휴대했다면 실제 사용 없이도 \'휴대\'로 평가될 여지가 있는 영역입니다.</strong> 소지 경위·위협 정황을 정리.',
      },
      {
        question: '블랙박스가 가장 중요한가요?',
        answer:
          '<strong>보복운전·하차·위협의 연속 정황을 보여주는 핵심 증거가 되는 영역입니다.</strong> 즉시 백업·보존을 진행.',
      },
      {
        question: '단순 폭행과 특수상해는 무엇이 다른가요?',
        answer:
          '<strong>위험한 물건 휴대 등 가중 사유가 있으면 특수상해로 더 무겁게 평가될 수 있는 영역입니다.</strong> 물건·정황 자료를 갖춰 검토.',
      },
      {
        question: '제가 먼저 경적을 울린 게 불리한가요?',
        answer:
          '<strong>운전 중 통상 행위와 상대의 하차 폭행은 별개로 평가되는 영역입니다.</strong> 전체 경위를 시간순으로 정리.',
      },
      {
        question: '합의하면 어떻게 되나요?',
        answer:
          '<strong>특수상해는 반의사불벌이 아니어서 합의가 처벌을 막지는 못하나 양형에 참작될 수 있는 영역입니다.</strong> 합의 조건을 신중히 검토.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '특수상해·특수폭행', href: '/guide/assault/assault-special-injury-weapon' },
      { label: '보복운전 대응', href: '/guide/assault/assault-road-rage-response' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '블랙박스·CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
    ],
  },

  // ─── 3. assault-school-parent-staff-confrontation-track ───
  {
    domain: 'assault',
    slug: 'assault-school-parent-staff-confrontation-track',
    keyword: '학교 학부모 교직원 폭행 고소 절차',
    questionKeyword: '학부모가 학교를 찾아와 항의하다 교직원인 저를 밀치고 때리며 업무를 방해했어요. 폭행·상해로 고소하고 학교 차원의 대응도 받으려면 어떤 순서로 진행해야 하나요?',
    ctaKeyword: '학교 학부모 폭행 고소 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학교 학부모 폭행 — 5단계 고소·업무방해 점검 | 로앤가이드',
      description:
        '학부모가 학교에서 교직원을 폭행했다면 폭행·상해 고소·업무방해·학교 대응 5가지 트랙으로 무엇부터 챙길지 지금 확인하세요.',
    },
    intro:
      '<p>"자녀 문제로 학교를 찾아온 학부모가 항의 도중 감정이 격해져, 교직원인 저를 밀치고 때리며 한참 동안 교무실에서 소란을 피워 정상적인 업무가 마비된 상황입니다. 다른 교직원들이 말렸지만 위협이 계속됐고, 저는 어깨와 팔을 다쳤어요. 폭행·상해로 고소할 수 있는지, 업무방해도 함께 묻는지, 학교 차원의 대응은 어떻게 받는지, 무엇부터 챙겨야 하는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 규정하고, 같은 법 제314조 제1항은 위력 등으로 사람의 업무를 방해한 자를 5년 이하의 징역 등에 처하도록 정하는 영역입니다. 판례·실무는 폭행·상해와 별도로 위력에 의한 업무방해가 성립할 수 있고, 여러 사람이 가담한 경우 가담 정도·역할에 따라 책임을 판단하는 본 사례 흐름이 있는 영역입니다. 학교 내 폭행 + 업무 마비 + 상해 결합은 \'폭행·상해·업무방해 고소·학교 대응\' 검토가 가능한 트랙입니다. 피해자라면 ① 상해 입증 ② 업무방해 정황 ③ 고소 ④ 형사 절차 ⑤ 학교·민사 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 정황 ③ 고소 ④ 형사 ⑤ 학교 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학교 학부모 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 입증·업무방해 정황·고소·형사 절차·학교 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 입증</strong> — 상해진단서·진료기록으로 폭행과 부상의 인과관계 정리.</li>\n<li><strong>② 업무방해 정황</strong> — 소란·위력으로 업무가 마비된 시간·범위 기록.</li>\n<li><strong>③ 고소</strong> — 폭행·상해(형법 제257조)·업무방해(제314조) 적용 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름.</li>\n<li><strong>⑤ 학교·민사</strong> — 학교 보고·교권보호위 절차, 치료비·위자료 민사 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행·상해와 별도로 위력에 의한 업무방해가 함께 성립할 수 있는 영역. 교직원 폭행은 학교 차원의 교권보호 절차와 형사·민사 대응이 병행될 수 있어, 폭행 정황과 업무 마비 정황을 함께 기록하는 것이 출발점인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 학교·경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·CCTV 확보 (즉시~당일)</strong> — 상해진단서, 교무실·복도 CCTV 보존 요청.</li>\n<li><strong>2단계 — 정황·목격자 정리 (수일 내)</strong> — 동료 교직원 진술, 소란·업무 마비 경위·시간 기록.</li>\n<li><strong>3단계 — 학교 보고·교권보호 절차 (지체 없이)</strong> — 관리자 보고, 교권보호위원회·교육청 신고 검토.</li>\n<li><strong>4단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 폭행·상해·업무방해 고소장 제출.</li>\n<li><strong>5단계 — 조사·송치·민사 (병행)</strong> — 수사 → 검찰 송치, 치료비·위자료 민사 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학교 학부모 폭행 고소·업무방해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 입증·업무방해·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부상 부위·치료기간)</strong></li>\n<li><strong>교무실·복도 CCTV 영상</strong></li>\n<li><strong>동료 교직원 목격 진술·연락처</strong></li>\n<li><strong>소란·업무 마비 경위·시간 기록 (육하원칙)</strong></li>\n<li><strong>학교 보고서·교권보호위 제출 자료</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>학부모와의 문자·통화 등 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 교무실·복도 CCTV는 폭행과 업무 마비 정황을 함께 보여주므로 즉시 보존 요청을 해두는 것이 도움이 됩니다. 형사 고소와 별도로 학교 교권보호위원회·교육청 신고가 병행될 수 있어, 학교 내부 보고 자료도 함께 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폭행·상해 구분</strong> — 부상 정도에 따른 적용 죄명.</li>\n<li><strong>업무방해 성립</strong> — 위력·소란으로 업무가 실제 마비됐는지.</li>\n<li><strong>가담·역할</strong> — 동행한 다른 사람의 가담 정도.</li>\n<li><strong>학교·형사 병행</strong> — 교권보호 절차와 형사 고소의 병행.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 가담 시 공모·기능적 행위지배와 폭행의 의미',
        summary:
          '대법원 2010도7412(대법원, 2010.12.23 선고) 영역에서 법원은 공모공동정범에서 공모한 범행 외에 부수적으로 파생된 범죄도 충분히 예상되는데 방지 조치 없이 나아가 결국 발생했다면 개별 의사연락이 없더라도 암묵적 공모와 기능적 행위지배가 있다고 보았고, 폭행은 유형력을 행사하는 것을 의미한다고 판시했습니다. 다만 면전이 아닌 곳에 미리 물건을 뿌려둔 행위만으로는 피해자에 대한 유형력 행사로 보기 어렵다고 보았습니다. 여러 사람이 가담한 학교 내 폭행 사안에서 가담 정도와 폭행 평가를 검토해볼 수 있습니다.',
        takeaway: '학교 내 폭행 + 업무 마비 + 상해 결합 시 폭행·상해·업무방해 고소·학교 대응 검토 영역 — CCTV·진술 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '학부모 폭행도 일반 폭행처럼 처리되나요?',
        answer:
          '<strong>폭행·상해로 고소할 수 있고 업무방해가 함께 성립할 수 있는 영역입니다.</strong> 부상·소란 정황을 함께 정리.',
      },
      {
        question: '업무방해도 같이 고소할 수 있나요?',
        answer:
          '<strong>위력·소란으로 업무가 마비됐다면 업무방해가 함께 검토되는 영역입니다.</strong> 마비된 시간·범위를 기록.',
      },
      {
        question: '학교에 알리면 형사 고소가 안 되나요?',
        answer:
          '<strong>교권보호 절차와 형사 고소는 병행할 수 있는 영역입니다.</strong> 내부 보고 자료와 고소 자료를 따로 준비.',
      },
      {
        question: '여러 명이 함께 왔으면 모두 책임지나요?',
        answer:
          '<strong>가담 정도·역할에 따라 책임이 판단되는 영역입니다.</strong> 각자의 행위 정황을 구분해 정리.',
      },
      {
        question: '치료비와 위자료는 받을 수 있나요?',
        answer:
          '<strong>형사 합의 또는 민사 손해배상으로 청구하는 영역입니다.</strong> 사례에 따라 다르지만 치료기간·정도에 따라 수준이 달라질 수 있습니다.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '업무방해 대응', href: '/guide/assault/assault-business-interference-response' },
      { label: '교권 침해·보호 절차', href: '/guide/assault/assault-teacher-rights-protection' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 4. assault-sibling-inheritance-dispute-mutual-track ───
  {
    domain: 'assault',
    slug: 'assault-sibling-inheritance-dispute-mutual-track',
    keyword: '형제 상속 다툼 쌍방폭행 정당방위',
    questionKeyword: '상속 문제로 형제와 다투다 몸싸움이 벌어져 둘 다 다쳤어요. 저는 먼저 맞아서 막다가 상대를 다치게 한 건데 쌍방폭행이 되는지, 방어행위로 인정될 수 있는지 알고 싶어요.',
    ctaKeyword: '형제 상속 다툼 쌍방 몸싸움 정황 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '형제 상속 다툼 쌍방 — 5단계 방어·위법성 점검 | 로앤가이드',
      description:
        '상속 다툼 중 형제와 몸싸움해 둘 다 다쳤다면 쌍방폭행 여부·방어행위 위법성 조각·증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부모님 상속 문제로 형제와 감정이 쌓이다 결국 집안에서 말다툼이 몸싸움으로 번진 상황입니다. 상대가 먼저 멱살을 잡고 밀치며 때려 와서, 저는 벗어나려고 손을 휘젓고 막는 과정에서 상대도 긁히고 멍이 들었어요. 둘 다 다쳤고 경찰에서는 \'쌍방\'이라는 말이 나옵니다. 제가 먼저 맞아서 막은 것뿐인데 방어행위로 인정될 수 있는지, 아니면 둘 다 처벌 대상이 되는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 규정하고, 같은 법 제21조 제1항은 현재의 부당한 침해를 방위하기 위한 상당한 이유 있는 행위는 벌하지 않는다고 정하는 영역입니다. 판례·실무는 겉으로는 서로 싸운 것처럼 보여도 한쪽이 일방적으로 위법하게 공격하고 상대가 이를 벗어나려는 저항수단으로 유형력을 행사한 경우 새로운 적극적 공격이 아니라면 위법성이 조각될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 상속 다툼 + 상호 유형력 + 양측 부상 결합은 \'쌍방폭행 여부·방어행위 위법성 조각\' 다툼이 검토될 수 있는 트랙입니다. 관련자라면 ① 발단 ② 선후·정도 ③ 방어 한계 ④ 증거 ⑤ 합의·처분 5중 트랙이 가능한 영역. 대응은 ① 발단 ② 선후 ③ 방어 ④ 증거 ⑤ 처분 5단계로 검토해볼 수 있습니다. 관련자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 형제 상속 다툼 쌍방 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발단·선후 정도·방어 한계·증거·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발단 정리</strong> — 상속 분쟁 경위와 몸싸움이 시작된 발단·장소 기록.</li>\n<li><strong>② 선후·정도</strong> — 누가 먼저 유형력을 행사했고, 가격의 정도·횟수가 어땠는지.</li>\n<li><strong>③ 방어 한계</strong> — 공격을 벗어나려는 저항인지, 새로운 적극적 공격으로 나아갔는지.</li>\n<li><strong>④ 증거</strong> — CCTV·녹음·진단서·메시지로 정황 확보.</li>\n<li><strong>⑤ 합의·처분</strong> — 쌍방 처리 가능성·합의·처분 흐름 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 겉으로는 쌍방 싸움처럼 보여도 한쪽이 일방적으로 공격하고 상대가 이를 벗어나려는 저항수단으로 유형력을 행사했다면, 새로운 적극적 공격이 아닌 한 위법성이 조각될 수 있는 영역. 누가 먼저, 어느 정도로 행사했는지 선후·정도가 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정리·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시~당일)</strong> — 부상 사진·진단서, 현장 CCTV·녹음·메시지 확보.</li>\n<li><strong>2단계 — 선후·정도 정리 (수일 내)</strong> — 발단, 가격 선후·횟수, 방어 경위 기록.</li>\n<li><strong>3단계 — 목격자 확보 (가능한 빨리)</strong> — 가족·이웃 등 목격자 진술·연락처 확보.</li>\n<li><strong>4단계 — 경찰 조사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 방어·정도 정황 설명.</li>\n<li><strong>5단계 — 합의·처분 검토 (병행)</strong> — 가족 관계·합의 여부에 따른 처분 흐름 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">형제 상속 다툼 쌍방 몸싸움 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 발단·선후·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>부상 사진·상해진단서 (양측)</strong></li>\n<li><strong>현장 CCTV·홈캠 영상</strong></li>\n<li><strong>다툼 당시 녹음·메시지 기록</strong></li>\n<li><strong>발단·가격 선후 메모 (육하원칙)</strong></li>\n<li><strong>가족·이웃 목격자 진술·연락처</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>상속 분쟁 경위 정리 (배경 자료)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한쪽이 먼저 일방적으로 공격했는지, 상대가 단지 벗어나려 저항했는지의 선후·정도가 위법성 조각 판단의 핵심이 됩니다. 홈캠·녹음·메시지가 있으면 발단과 선후를 사실대로 보여줄 수 있어, 감정적 표현보다 객관 정황을 시간순으로 정리해두는 것이 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>쌍방 여부</strong> — 상호 유형력이 오가 쌍방으로 평가되는지.</li>\n<li><strong>위법성 조각</strong> — 방어를 위한 상당성 있는 저항인지.</li>\n<li><strong>선후·정도</strong> — 누가 먼저, 어느 정도로 가격했는지.</li>\n<li><strong>적극적 공격</strong> — 방어를 넘은 새로운 공격이 있었는지.</li>\n<li><strong>합의·처분</strong> — 가족 관계·합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방 공격에 대한 방어행위와 위법성 조각',
        summary:
          '대법원 2009도12958(대법원, 2010.02.11 선고) 영역에서 법원은 맞붙어 싸운 경우 보통 어느 한쪽만 정당방위로 보기 어렵지만, 겉으로는 싸움처럼 보여도 실제로는 한쪽이 일방적으로 위법한 공격을 가하고 상대가 이를 벗어나려는 저항수단으로 유형력을 행사한 경우에는 새로운 적극적 공격으로 평가되지 않는 한 사회관념상 허용되는 상당성이 있어 위법성이 조각된다고 판시했습니다. 상속 다툼 중 형제 간 쌍방 몸싸움 사안에서도 선후·정도와 방어 여부를 검토해볼 수 있습니다.',
        takeaway: '상속 다툼 + 상호 유형력 + 양측 부상 결합 시 쌍방폭행 여부·방어행위 위법성 조각 검토 영역 — 선후·정도 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '먼저 맞아서 막은 것도 쌍방폭행인가요?',
        answer:
          '<strong>벗어나려는 저항이 새로운 적극적 공격이 아니라면 위법성이 조각될 수 있는 영역입니다.</strong> 선후·정도를 사실대로 정리.',
      },
      {
        question: '둘 다 다쳤는데 똑같이 처벌되나요?',
        answer:
          '<strong>누가 먼저·어느 정도로 행사했는지에 따라 평가가 달라질 수 있는 영역입니다.</strong> 발단·선후 정황을 확보.',
      },
      {
        question: '가족끼리인데 합의하면 끝나나요?',
        answer:
          '<strong>폭행죄는 반의사불벌 성격이 있어 합의가 처리에 영향을 줄 수 있는 영역입니다.</strong> 상해는 합의가 양형 사정이 될 수 있어 신중히 검토.',
      },
      {
        question: '녹음이나 홈캠이 증거가 되나요?',
        answer:
          '<strong>발단과 선후를 보여주는 정황 자료가 되는 영역입니다.</strong> 시간순으로 보존해 정리.',
      },
      {
        question: '상속 분쟁 자체도 같이 봐야 하나요?',
        answer:
          '<strong>폭행 사건과 상속 분쟁은 별개로 진행되는 영역입니다.</strong> 형사 대응과 상속 절차를 구분해 정리.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '쌍방폭행 대응', href: '/guide/assault/assault-mutual-fight-response' },
      { label: '정당방위 인정 기준', href: '/guide/assault/assault-self-defense-standard' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
    ],
  },

  // ─── 5. dui-breath-test-refusal-measurement-track ───
  {
    domain: 'dui',
    slug: 'dui-breath-test-refusal-measurement-track',
    keyword: '음주측정 거부 측정불응 처벌',
    questionKeyword: '단속에서 처음엔 측정에 응하기 망설였는데 잠시 머뭇거린 걸 두고 측정 거부라고 합니다. 음주측정 거부로 처벌되는 건지, 일시적으로 망설인 것도 거부가 되는지 막막합니다.',
    ctaKeyword: '음주측정 거부 측정불응 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 — 5단계 측정불응·성립 점검 | 로앤가이드',
      description:
        '단속에서 측정을 잠시 망설인 것을 거부로 본다면 측정불응 성립 시기·일시적 거부 구분 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주 단속에 걸려 호흡측정 요구를 받았는데, 순간 당황해 \'잠깐만요\'라며 망설이는 사이 경찰이 측정 거부로 처리하려 한 상황입니다. 곧이어 다시 측정에 응할 생각이었는데, 처음 머뭇거린 것만으로 음주측정거부가 된다고 하니 혼란스럽습니다. 음주운전 자체보다 측정 거부가 더 무겁다는 말도 들었어요. 일시적으로 망설인 것도 거부가 되는지, 혐의를 받고 있다면 어떻게 대응해야 하는지 막막한 상태입니다." 도로교통법 제44조 제2항은 경찰공무원의 음주 측정에 응할 의무를 정하고, 같은 법 제148조의2 제2호는 측정에 응하지 아니한 사람을 처벌하도록 규정하는 영역입니다. 판례·실무는 \'측정에 응하지 아니한 경우\'란 술에 취한 상태로 인정할 상당한 이유가 있는 운전자가 응할 의사가 없음이 객관적으로 명백한 때를 의미하고, 1차 측정에만 불응했다가 곧 2차에 응한 일시적 거부는 측정불응으로 보기 어렵다는 본 사례 흐름이 있는 영역입니다. 단속 + 측정 요구 + 일시적 망설임 결합은 \'측정불응 성립 시기·일시적 거부 구분\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 거부 명백성 ③ 일시성 ④ 양형·감경 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 명백성 ③ 일시성 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주측정 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·거부 명백성·일시성·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 측정 요구 시각·횟수·고지 내용과 운전자 언행 정리.</li>\n<li><strong>② 거부 명백성</strong> — 응할 의사가 없음이 객관적으로 명백했는지.</li>\n<li><strong>③ 일시성</strong> — 1차 망설임 후 곧 응했는지 등 거부가 일시적이었는지.</li>\n<li><strong>④ 양형·감경</strong> — 음주 정황·초범·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 수사·재판 대응, 측정 절차·고지 적법성 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정불응죄는 응할 의사가 없음이 객관적으로 명백한 때 성립할 수 있고, 1차 측정에만 잠시 불응했다가 곧 2차에 응한 일시적 거부는 측정불응으로 보기 어려울 수 있는 영역. 거부가 명백·계속적이었는지가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속 자료 확보 (즉시~당일)</strong> — 주취운전자 적발보고서·측정 요구 경위·고지 내용 확인.</li>\n<li><strong>2단계 — 거부 명백성·일시성 정리 (수일 내)</strong> — 측정 요구 횟수·시각, 응한 정황·언행 기록.</li>\n<li><strong>3단계 — 수사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 측정 절차·고지 적법성 검토.</li>\n<li><strong>4단계 — 양형 자료 정리 (병행)</strong> — 초범·반성·생계 등 자료 준비.</li>\n<li><strong>5단계 — 재판·처분 대응 (검찰 처분 후)</strong> — 기소 시 변론 방향·감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정 거부 측정불응 성립 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·거부 명백성·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서</strong></li>\n<li><strong>측정 요구 시각·횟수·고지 내용 자료</strong></li>\n<li><strong>단속 현장 정황·언행 메모 (시간순)</strong></li>\n<li><strong>블랙박스·바디캠 등 영상 (확보 가능 시)</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 메모</strong></li>\n<li><strong>운전면허 정보·운전 경력 자료</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정불응은 응할 의사가 없음이 객관적으로 명백한지, 거부가 일시적이었는지가 핵심이므로 측정 요구 시각·횟수와 그때의 언행을 시간순으로 정리해두는 것이 도움이 됩니다. 곧이어 측정에 응한 정황이 있다면 그 사실을 함께 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거부 명백성</strong> — 응할 의사 없음이 객관적으로 명백했는지.</li>\n<li><strong>일시성</strong> — 곧이어 측정에 응한 일시적 거부였는지.</li>\n<li><strong>고지·절차</strong> — 측정 요구·불이익 고지 등 절차의 적법성.</li>\n<li><strong>상당한 이유</strong> — 술에 취한 상태로 인정할 상당한 이유가 있었는지.</li>\n<li><strong>양형 사정</strong> — 초범·반성·생계 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정불응죄의 성립 시기와 일시적 거부의 구분',
        summary:
          '대법원 2013도8481(대법원, 2015.12.24 선고) 영역에서 법원은 도로교통법 제148조의2의 \'측정에 응하지 아니한 경우\'란 술에 취한 상태로 인정할 상당한 이유가 있는 운전자가 음주측정에 응할 의사가 없음이 객관적으로 명백한 때를 의미하고, 1차 측정에만 불응했다가 곧 2차 측정에 응한 일시적 거부까지 측정불응으로 볼 것은 아니라고 판시했습니다. 소극적 거부가 일정 시간 계속 반복돼 측정불응 의사가 객관적으로 명백할 때 비로소 성립한다고 보았습니다. 음주측정 거부 사안에서 거부의 명백성·일시성을 검토해볼 수 있습니다.',
        takeaway: '단속 + 측정 요구 + 일시적 망설임 결합 시 측정불응 성립 시기·일시적 거부 구분 검토 영역 — 측정 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '잠깐 망설인 것도 측정 거부가 되나요?',
        answer:
          '<strong>곧이어 측정에 응한 일시적 거부는 측정불응으로 보기 어려울 수 있는 영역입니다.</strong> 거부가 명백·계속적이었는지를 정리.',
      },
      {
        question: '음주운전보다 거부가 더 무겁다는데 맞나요?',
        answer:
          '<strong>측정불응은 불법성이 큰 음주운전과 동일한 법정형으로 규율되는 영역입니다.</strong> 성립 여부부터 신중히 검토.',
      },
      {
        question: '경찰이 고지를 제대로 안 했으면 다툴 수 있나요?',
        answer:
          '<strong>측정 요구·불이익 고지 등 절차의 적법성은 평가에 영향을 줄 수 있는 영역입니다.</strong> 고지 내용·시각을 정리.',
      },
      {
        question: '결국엔 측정에 응했는데도 처벌되나요?',
        answer:
          '<strong>곧이어 응한 정황이 있다면 측정불응 성립 여부가 달라질 수 있는 영역입니다.</strong> 응한 시각·경위를 함께 정리.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 요구 경위·고지 내용 확보가 출발점인 영역입니다.</strong> 단속 정황을 시간순으로 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-breath-test-refusal-penalty' },
      { label: '음주 측정 절차', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
    ],
  },

  // ─── 6. dui-morning-after-residual-alcohol-track ───
  {
    domain: 'dui',
    slug: 'dui-morning-after-residual-alcohol-track',
    keyword: '숙취 잔존알코올 운전 상승기 측정',
    questionKeyword: '전날 마신 술이 남은 상태로 아침에 운전하다 단속됐는데, 측정 수치가 기준치를 살짝 넘었어요. 측정 시점이 상승기일 수 있다는데 운전 당시에는 기준치 미만이었다고 다툴 수 있나요?',
    ctaKeyword: '숙취 잔존알코올 상승기 측정 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '숙취 잔존알코올 운전 — 5단계 상승기·농도 점검 | 로앤가이드',
      description:
        '전날 술이 남은 상태로 아침에 운전하다 단속돼 수치가 기준치를 살짝 넘었다면 상승기 측정·운전 시점 농도 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전날 밤 늦게까지 마신 술이 다 깨지 않은 채 아침에 짧은 거리를 운전하다 단속에 걸린 상황입니다. 스스로는 멀쩡하다고 느꼈는데, 측정 결과가 처벌기준치를 아주 조금 넘었어요. 측정 시점이 혈중알코올농도가 오르는 \'상승기\'일 수 있다는 말을 들었는데, 그렇다면 실제 운전할 때는 기준치 미만이었을 수도 있는 것 아닌지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태에서의 운전을 금지하고, 같은 법은 술에 취한 상태의 기준(혈중알코올농도 0.03% 이상)을 정하는 영역입니다. 판례·실무는 운전과 측정 사이에 시간 간격이 있고 상승기로 보이더라도 그 사정만으로 운전 시점 농도가 기준치를 초과했다는 증명이 늘 불가능한 것은 아니고, 시간 간격·수치 차이·음주량·행동 양상·사고 정황 등을 종합해 논리·경험칙에 따라 판단한다는 본 사례 흐름이 있는 영역입니다. 숙취 운전 + 상승기 측정 + 근소 초과 결합은 \'상승기 측정·운전 시점 농도 추정\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 시간 간격 ③ 농도·음주량 ④ 양형·감경 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 간격 ③ 농도 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 숙취 잔존알코올 운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·시간 간격·농도/음주량·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 운전 종료 시각·측정 시각·측정 방법·절차 정리.</li>\n<li><strong>② 시간 간격</strong> — 운전과 측정 사이 간격, 상승기 여부 정황 정리.</li>\n<li><strong>③ 농도·음주량</strong> — 측정 수치와 기준치 차이, 음주 시간·음주량 정리.</li>\n<li><strong>④ 양형·감경</strong> — 초범·반성·생계 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 수사·재판 대응, 농도 추정·측정 정황 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운전과 측정 사이 시간 간격이 있고 상승기로 보이더라도 그 사정만으로 운전 시점 농도가 기준치를 넘었다는 증명이 늘 불가능한 것은 아닌 영역. 시간 간격·수치 차이·음주량·행동 양상 등을 종합해 운전 당시 농도가 어땠는지가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 측정 자료 확보 (즉시~당일)</strong> — 측정 결과지·운전 종료 시각·측정 시각·측정 방법 확인.</li>\n<li><strong>2단계 — 시간 간격·음주량 정리 (수일 내)</strong> — 음주 시작·종료 시각, 음주량, 운전 거리 기록.</li>\n<li><strong>3단계 — 수사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 상승기·농도 정황 정리.</li>\n<li><strong>4단계 — 양형 자료 정리 (병행)</strong> — 초범·반성·생계 등 자료 준비.</li>\n<li><strong>5단계 — 재판·처분 대응 (검찰 처분 후)</strong> — 기소 시 변론 방향·감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">숙취 잔존알코올 상승기 측정 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·시간 간격·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>운전 종료 시각·측정 시각 자료</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 메모</strong></li>\n<li><strong>운전 거리·경로 자료</strong></li>\n<li><strong>단속 경위·현장 정황 자료</strong></li>\n<li><strong>운전면허 정보·운전 경력 자료</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운전 종료 시각과 측정 시각의 간격, 측정 수치와 기준치의 차이는 운전 당시 농도 판단에 영향을 줄 수 있어 시간순으로 정리해두는 것이 도움이 됩니다. 측정 수치에 이의가 있거나 채혈 재측정이 필요하다면 그 시점에 요구하는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상승기 여부</strong> — 측정 시점이 농도 상승기였는지.</li>\n<li><strong>운전 시점 농도</strong> — 운전 당시 기준치 이상이었는지.</li>\n<li><strong>시간 간격·수치 차이</strong> — 운전·측정 간격과 기준치 근소 초과 여부.</li>\n<li><strong>측정 방법·절차</strong> — 입 헹굼·재측정 등 절차의 적법성.</li>\n<li><strong>양형 사정</strong> — 초범·반성·생계 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상승기 측정과 운전 시점 농도 추정의 판단 기준',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 영역에서 법원은 운전과 측정 사이 시간 간격이 있고 그때가 농도 상승기로 보이더라도 그 사정만으로 운전 시점 농도가 기준치를 초과했다는 증명이 늘 불가능한 것은 아니고, 운전·측정 간격, 수치와 기준치 차이, 음주 시간·음주량, 행동 양상, 사고 정황 등을 종합해 논리·경험칙에 따라 판단해야 한다고 판시했습니다. 운전 종료 약 12분 후 0.037%로 측정된 사안에서 상승기 가능성을 감안해도 운전 당시 0.03% 이상이었다고 본 사례입니다. 숙취 운전 사안에서 운전 시점 농도 추정을 검토해볼 수 있습니다.',
        takeaway: '숙취 운전 + 상승기 측정 + 근소 초과 결합 시 상승기 측정·운전 시점 농도 추정 검토 영역 — 측정 시각·음주량 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운전할 때는 기준치 미만이었다고 다툴 수 있나요?',
        answer:
          '<strong>상승기로 보이더라도 그 사정만으로 운전 시점 농도가 늘 다퉈지는 것은 아닌 영역입니다.</strong> 시간 간격·수치 차이 등을 종합 정리.',
      },
      {
        question: '전날 술인데도 음주운전이 되나요?',
        answer:
          '<strong>측정 시점에 기준치 이상이면 잔존알코올도 음주운전으로 평가될 수 있는 영역입니다.</strong> 음주 시각·음주량을 정리.',
      },
      {
        question: '측정 수치가 기준치를 살짝 넘었는데요?',
        answer:
          '<strong>근소 초과는 운전 시점 농도 판단에 더 신중히 살펴지는 영역입니다.</strong> 운전·측정 간격을 함께 정리.',
      },
      {
        question: '채혈 재측정을 요구하지 않았는데 다툴 수 있나요?',
        answer:
          '<strong>측정 방법·절차의 적법성은 평가에 영향을 줄 수 있는 영역입니다.</strong> 측정 경위를 시간순으로 정리.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 결과지와 운전·측정 시각 확인이 출발점인 영역입니다.</strong> 음주량·운전 거리를 함께 기록.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '잔존알코올·숙취운전', href: '/guide/dui/dui-residual-alcohol-morning' },
      { label: '위드마크 농도 추정', href: '/guide/dui/dui-widmark-estimation-dispute' },
      { label: '음주 측정 절차', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },

  // ─── 7. dui-parking-lot-short-move-road-track ───
  {
    domain: 'dui',
    slug: 'dui-parking-lot-short-move-road-track',
    keyword: '주차장 단거리 운전 도로 음주측정 적법성',
    questionKeyword: '술을 마시고 식당 주차장에서 차를 잠깐 옮긴 뒤 식당 안에 있었는데, 신고를 받고 온 경찰이 식당으로 들어와 음주측정을 했어요. 이렇게 한 측정이 적법한지, 음주운전이 되는지 막막합니다.',
    ctaKeyword: '주차장 단거리 운전 측정 적법성 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '주차장 단거리 음주운전 — 5단계 측정·적법성 점검 | 로앤가이드',
      description:
        '술 마시고 차를 잠깐 옮긴 뒤 식당에서 음주측정을 받았다면 임의수사 적법성·측정 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 식당 주차장에서 차를 잠깐 옮겨 세워 두고 다시 식당 안으로 들어와 있었는데, \'만취한 사람이 운전하고 들어갔다\'는 신고를 받은 경찰이 식당으로 들어와 제게 다가와 음주운전 여부를 묻고 그 자리에서 음주측정을 한 상황입니다. 식당 안까지 들어와 한 측정이 적법한 것인지, 짧게 옮긴 것도 음주운전이 되는지, 혐의를 받고 있다면 어떻게 대응해야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전을 금지하고, 형사소송법 제199조 제1항은 임의수사의 원칙을 정하는 영역입니다. 판례·실무는 수사기관이 불특정 다수가 출입 가능한 장소에 통상적인 방법으로 출입해 물리력·강제력 없이 피의자를 찾아 위법행위를 확인하는 것은 임의수사로 허용되고 영장 없이 이뤄졌다고 위법한 것은 아니며, 이어진 음주측정도 적법할 수 있다는 본 사례 흐름이 있는 영역입니다. 단거리 운전 + 식당 출입 + 음주측정 결합은 \'임의수사 적법성·측정 적법성\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 수사 적법성 ③ 운전 사실 ④ 양형·감경 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 적법성 ③ 운전 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차장 단거리 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·수사 적법성·운전 사실·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 신고·출동·식당 출입·측정 요구 경위 정리.</li>\n<li><strong>② 수사 적법성</strong> — 출입·측정 과정에 물리력·강제력·퇴거 요구가 있었는지.</li>\n<li><strong>③ 운전 사실</strong> — 실제 운전 여부·구간·도로 해당 여부 정리.</li>\n<li><strong>④ 양형·감경</strong> — 운전 거리·초범·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 수사·재판 대응, 측정·증거 적법성 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경찰이 불특정 다수가 출입 가능한 식당에 통상적 방법으로 들어와 물리력 없이 피의자를 찾는 것은 임의수사로 허용될 수 있고, 이어진 음주측정도 적법할 수 있는 영역. 출입·측정 과정에 강제력이나 퇴거 요구가 있었는지가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 측정·신고 자료 확보 (즉시~당일)</strong> — 측정 결과지·신고 경위·출동 정황·측정 시각 확인.</li>\n<li><strong>2단계 — 수사 적법성 정리 (수일 내)</strong> — 식당 출입·측정 과정의 물리력·퇴거 요구 여부 기록.</li>\n<li><strong>3단계 — 운전 사실·구간 정리 (수일 내)</strong> — 운전 여부·구간·도로 해당 여부 정리.</li>\n<li><strong>4단계 — 수사·양형 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 초범·반성 자료 준비.</li>\n<li><strong>5단계 — 재판·처분 대응 (검찰 처분 후)</strong> — 기소 시 변론 방향·감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차장 단거리 운전 측정 적법성 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·수사 적법성·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>주취운전자 정황진술보고서·단속결과통보</strong></li>\n<li><strong>신고·출동·식당 출입 경위 자료</strong></li>\n<li><strong>운전 구간·거리·도로 해당 여부 자료</strong></li>\n<li><strong>식당 CCTV·블랙박스 영상 (확보 가능 시)</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 메모</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 식당 출입·측정 과정에 물리력이나 퇴거 요구가 있었는지가 임의수사 적법성 판단의 핵심이 되므로 출입·측정 경위를 시간순으로 정리해두는 것이 도움이 됩니다. 실제 운전 여부·구간과 도로 해당 여부도 함께 정리해두면 사건 평가에 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임의수사 적법성</strong> — 식당 출입에 물리력·강제력이 있었는지.</li>\n<li><strong>측정 적법성</strong> — 이어진 음주측정 절차의 적법성.</li>\n<li><strong>운전 사실</strong> — 실제 운전·구간·도로 해당 여부.</li>\n<li><strong>증거능력</strong> — 정황진술보고서 등 증거의 사용 가능 여부.</li>\n<li><strong>양형 사정</strong> — 운전 거리·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 식당 출입 임의수사와 이어진 음주측정의 적법성',
        summary:
          '대법원 2025도6752(대법원, 2025.12.11 선고) 영역에서 법원은 수사기관이 불특정 다수가 출입 가능한 장소에 통상적인 방법으로 출입해 물리력·강제력 없이 피의자를 찾는 등 위법행위를 확인하는 것은 임의수사로 허용되고 영장 없이 이뤄졌다고 위법한 것은 아니라고 판시했습니다. 112 신고를 받고 24시간 식당에 들어가 운전 여부를 묻고 한 음주측정도 적법하다고 보아, 이를 위법수색으로 본 원심을 잘못이라고 보았습니다. 주차장 단거리 운전 후 식당에서 측정한 사안에서 수사·측정 적법성을 검토해볼 수 있습니다.',
        takeaway: '단거리 운전 + 식당 출입 + 음주측정 결합 시 임의수사 적법성·측정 적법성 검토 영역 — 출입·측정 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '주차장에서 잠깐 옮긴 것도 음주운전이 되나요?',
        answer:
          '<strong>짧은 거리라도 운전에 해당하면 음주운전으로 평가될 수 있는 영역입니다.</strong> 운전 구간·도로 해당 여부를 정리.',
      },
      {
        question: '식당까지 들어와 측정한 게 위법 아닌가요?',
        answer:
          '<strong>불특정 다수가 출입 가능한 장소에 통상적 방법으로 들어온 것은 임의수사로 허용될 수 있는 영역입니다.</strong> 물리력·퇴거 요구 여부를 정리.',
      },
      {
        question: '영장 없이 들어왔는데 다툴 수 있나요?',
        answer:
          '<strong>영장 없이 통상적 방법으로 출입했다고 곧바로 위법한 것은 아닐 수 있는 영역입니다.</strong> 출입 경위를 시간순으로 정리.',
      },
      {
        question: '측정 결과를 증거로 쓸 수 없게 할 수 있나요?',
        answer:
          '<strong>수사·측정 절차가 적법하면 증거능력이 인정될 수 있는 영역입니다.</strong> 절차상 강제력 여부를 함께 검토.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 결과지와 신고·출동·출입 경위 확보가 출발점인 영역입니다.</strong> 운전 사실·구간도 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도로 해당 여부', href: '/guide/dui/dui-road-scope-parking-lot' },
      { label: '음주 측정 절차', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '위법수집증거 다툼', href: '/guide/dui/dui-illegal-evidence-dispute' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },

  // ─── 8. jeonse-fraud-multi-unit-landlord-mass-default-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-multi-unit-landlord-mass-default-track',
    keyword: '다세대 갭투자 집주인 보증금 미반환',
    questionKeyword: '다세대주택 집주인이 여러 채를 갭투자로 사들였다가 보증금을 못 돌려준다고 해요. 임차권등기, 대항력, 우선변제 같은 걸 어떤 순서로 챙겨야 보증금을 회수할 수 있을까요?',
    ctaKeyword: '다세대 갭투자 보증금 회수 순서 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다세대 갭투자 보증금 — 5단계 대항력·회수 점검 | 로앤가이드',
      description:
        '다세대 갭투자 집주인이 보증금을 못 돌려준다면 대항력 유지·임차권등기·우선변제 5가지 트랙으로 무엇부터 할지 지금 확인하세요.',
    },
    intro:
      '<p>"다세대주택 여러 채를 갭투자로 사들인 집주인 밑에서 전세로 살고 있는데, 계약 만료가 다가오자 \'세입자가 안 구해진다\'며 보증금을 돌려주지 못한다고 합니다. 같은 건물 다른 세대도 비슷한 처지라는 말이 돌고, 등기부에는 근저당까지 잡혀 있어요. 이사는 가야 하는데 권리가 사라질까 두렵고, 임차권등기·대항력·우선변제 같은 말은 들어봤지만 무엇부터 어떤 순서로 해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖추면 대항력을 인정하고, 같은 법 제3조의2는 확정일자를 갖춘 임차인의 보증금 우선변제권을 정하며, 같은 법 제3조의3은 임차권등기명령 제도를 두는 영역입니다. 판례·실무는 주택 인도와 주민등록이라는 대항요건은 취득 시만이 아니라 대항력을 유지하기 위해서도 계속 존속해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 갭투자 + 근저당 + 보증금 반환 불능 결합은 \'대항력 유지·임차권등기·우선변제\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항·우선변제 ③ 임차권등기 ④ 보증·배당 ⑤ 소송 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 대항 ③ 등기 ④ 배당 ⑤ 소송 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다세대 갭투자 보증금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항/우선변제·임차권등기·보증/배당·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·선순위 채권·경매 진행 여부 확인.</li>\n<li><strong>② 대항·우선변제</strong> — 전입신고·점유·확정일자로 대항력·우선변제권을 갖췄는지.</li>\n<li><strong>③ 임차권등기 (1~2개월)</strong> — 이사·전출 전 임차권등기명령으로 권리 유지 검토.</li>\n<li><strong>④ 보증·배당</strong> — 전세보증보험 이행청구 또는 경매 배당요구 검토.</li>\n<li><strong>⑤ 소송</strong> — 보증금반환소송 등 회수 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주택 인도와 주민등록(전입)이라는 대항요건은 취득 시뿐 아니라 대항력을 유지하기 위해서도 계속 존속해야 하는 영역. 함부로 전출·이사하면 대항력이 흔들릴 수 있어, 이사 전 임차권등기명령으로 권리를 유지하는 것이 출발점이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·HUG·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계 확인 (즉시)</strong> — 등기부·근저당·경매개시 여부, 전입·확정일자 점검.</li>\n<li><strong>2단계 — 임차인 본인·계약 자료 정리 (수일 내)</strong> — 계약서·확정일자·전입세대 확인서 정리.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (1~2개월)</strong> — 이사·전출 전 권리 유지 위해 신청 검토.</li>\n<li><strong>4단계 — 보증이행·배당요구 (보증/경매 시)</strong> — 전세보증보험 이행청구 또는 경매 배당요구.</li>\n<li><strong>5단계 — 보증금반환소송 (병행)</strong> — KLAC 지원 등 민사 회수 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다세대 갭투자 보증금 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·보증 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위 권리)</strong></li>\n<li><strong>전세보증보험 가입증서 (가입 시)</strong></li>\n<li><strong>보증금 송금 내역·영수증</strong></li>\n<li><strong>임대인 반환 거부·연락 기록</strong></li>\n<li><strong>임차권등기명령 신청·완료 등기부</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대항력은 전입신고와 점유, 우선변제권은 확정일자가 핵심이고 이 요건은 계속 유지돼야 하므로 함부로 전출하지 않는 것이 안전합니다. 이사가 불가피하면 전출 전에 임차권등기명령(통상 1~2개월)을 신청해 권리를 유지하는 것이 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 유지</strong> — 전입·점유·확정일자가 계속 유지되는지.</li>\n<li><strong>선순위 권리</strong> — 근저당 등 선순위 채권의 규모와 순위.</li>\n<li><strong>보증 가입 여부</strong> — 전세보증보험 가입·보증사고 요건 충족.</li>\n<li><strong>임차권등기 시점</strong> — 이사·전출 전 권리 유지 필요성.</li>\n<li><strong>배당·회수 범위</strong> — 경매 배당 시 실제 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택도시보증공사 전세피해 상담 (khug.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대항요건의 계속 존속과 대항력 유지',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 영역에서 법원은 주택 인도와 주민등록이라는 대항요건은 대항력 취득 시에만 구비하면 되는 것이 아니라 대항력을 유지하기 위해서도 계속 존속해야 하고, 대항력을 갖춘 임차인이 그 임차주택을 양수해 소유자가 되면 소유권이전등기 이후의 주민등록은 더 이상 유효한 공시방법이 될 수 없어 대항력은 소유권 취득 시 소멸한다고 판시했습니다. 대항요건의 계속 존속 요건을 보여주는 흐름으로, 갭투자 보증금 미반환 사안에서 권리 유지를 검토할 때 참고해볼 수 있습니다.',
        takeaway: '갭투자 + 근저당 + 반환 불능 결합 시 대항력 유지·임차권등기·우선변제 검토 영역 — 전출 전 권리 유지 점검 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '집주인이 보증금을 못 준다는데 회수할 수 있나요?',
        answer:
          '<strong>대항요건·확정일자·보증 가입 여부에 따라 회수 경로를 검토할 수 있는 영역입니다.</strong> 무조건 회수가 보장되지는 않으므로 권리관계부터 확인.',
      },
      {
        question: '이사를 가야 하는데 대항력이 사라지나요?',
        answer:
          '<strong>대항요건은 계속 유지돼야 하므로 전출 전 임차권등기명령(통상 1~2개월)을 검토할 수 있는 영역입니다.</strong> 등기 완료를 확인하고 이사 진행.',
      },
      {
        question: '같은 건물 다른 세대도 같이 진행하나요?',
        answer:
          '<strong>각자 대항요건·확정일자·순위가 달라 개별로 권리를 점검하는 영역입니다.</strong> 본인 등기부·계약 기준으로 확인.',
      },
      {
        question: '전세보증보험에 들었으면 어떻게 하나요?',
        answer:
          '<strong>보증사고 발생 시 보증기관에 이행청구를 검토할 수 있는 영역입니다.</strong> HUG 1566-9009로 절차·요건을 확인.',
      },
      {
        question: '소송은 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 보증금반환소송 등 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '임차권등기명령 신청', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-order' },
      { label: '대항력·확정일자', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: 'HUG 보증이행청구', href: '/guide/jeonse-fraud/jeonse-fraud-hug-guarantee-claim' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 9. jeonse-fraud-senior-mortgage-underwater-deposit-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-senior-mortgage-underwater-deposit-track',
    keyword: '선순위 근저당 깡통전세 중개사 책임',
    questionKeyword: '다가구주택에 전세로 들어왔는데 선순위 근저당과 다른 세입자 보증금이 집값을 넘는 깡통전세였어요. 중개사가 선순위가 얼마나 있는지 제대로 설명 안 해줬는데 책임을 물을 수 있나요?',
    ctaKeyword: '선순위 근저당 깡통전세 중개사 책임 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '선순위 근저당 깡통전세 — 5단계 중개사 책임 점검 | 로앤가이드',
      description:
        '선순위 근저당과 다른 세입자 보증금이 집값을 넘는 깡통전세였다면 중개사 확인설명 책임·회수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"다가구주택 한 세대에 전세로 들어왔는데, 경매가 진행되고 보니 선순위 근저당과 이미 살고 있던 다른 세입자들의 보증금이 집값을 훨씬 넘어 한 푼도 배당받지 못하게 된 임차인입니다. 계약할 때 중개사는 근저당은 알려줬지만 다른 세입자들의 보증금이 얼마나 되는지, 선순위가 얼마나 쌓여 있는지는 제대로 확인·설명해주지 않았어요. 이런 깡통전세에서 보증금을 회수할 수 있는지, 중개사에게 책임을 물을 수 있는지 막막한 상태입니다." 주택임대차보호법 제3조는 주택 인도와 주민등록을 갖춘 대항요건을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을 정하고, 공인중개사법 제25조·제30조는 중개사의 확인·설명의무와 손해배상책임을 규정하는 영역입니다. 판례·실무는 다가구주택 일부를 중개하는 개업공인중개사는 선순위 임대차보증금채권이 얼마나 있을 수 있는지 조사·확인해 설명할 의무가 있고, 이를 위반해 손해를 입혔다면 배상책임을 진다고 보는 본 사례 흐름이 있는 영역입니다. 선순위 근저당 + 다세입자 보증금 + 배당 불능 결합은 \'중개사 확인·설명 책임·보증금 회수\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항·우선변제 ③ 중개사 책임 ④ 형사·민사 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 대항 ③ 중개사 ④ 형사 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 선순위 근저당 깡통전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항/우선변제·중개사 책임·형사/민사·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·선순위 보증금채권·경매 진행 확인.</li>\n<li><strong>② 대항·우선변제</strong> — 전입·점유·확정일자로 대항력·우선변제권을 갖췄는지.</li>\n<li><strong>③ 중개사 책임</strong> — 선순위 보증금채권 조사·확인·설명의무 이행 여부 검토.</li>\n<li><strong>④ 형사·민사</strong> — 사기 정황 시 고소, 중개사·공제에 대한 손해배상 검토.</li>\n<li><strong>⑤ 회수</strong> — 배당·중개사 배상·보증 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다가구주택 일부를 중개하는 개업공인중개사는 등기부상 근저당뿐 아니라 다른 세입자의 보증금·선순위 채권이 얼마나 있을 수 있는지 조사·확인해 설명하고 확인·설명서에 기재할 의무가 있는 영역. 이 의무 위반과 손해 사이 인과관계가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·대응 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·경매법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·중개 자료 확보 (즉시)</strong> — 등기부·계약서·확인·설명서·확정일자 부여현황 확보.</li>\n<li><strong>2단계 — 선순위·대항요건 정리 (수일 내)</strong> — 선순위 보증금·근저당 규모, 전입·확정일자 점검.</li>\n<li><strong>3단계 — 임차권등기·배당요구 (이사 전/종기 내)</strong> — 임차권등기명령, 경매 배당요구 검토.</li>\n<li><strong>4단계 — 중개사 책임·공제 청구 (병행)</strong> — 확인·설명의무 위반·공제 등 배상 검토.</li>\n<li><strong>5단계 — 형사·민사 회수 (병행)</strong> — 사기 고소·보증금반환소송 등 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">선순위 근저당 깡통전세 중개사 책임 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·중개사 책임·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>중개대상물 확인·설명서 (선순위 기재 여부)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위 권리)</strong></li>\n<li><strong>확정일자 부여현황 (선순위 보증금 총액)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>보증금 송금 내역·영수증</strong></li>\n<li><strong>중개사·임대인과의 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중개대상물 확인·설명서에 선순위 보증금채권이 어떻게 기재됐는지, \'선순위 다수 있음\'처럼 구두로만 설명됐는지가 책임 검토의 핵심 자료가 됩니다. 확정일자 부여현황으로 선순위 보증금 총액을 확인해두면 깡통 여부와 손해 범위 정리에 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>중개사 확인·설명의무</strong> — 선순위 보증금채권 조사·확인·설명 이행 여부.</li>\n<li><strong>확인·설명서 기재</strong> — 선순위 내용이 정확히 기재·교부됐는지.</li>\n<li><strong>인과·과실</strong> — 설명의무 위반과 손해 사이 인과관계.</li>\n<li><strong>대항·우선변제</strong> — 전입·확정일자 구비 여부와 순위.</li>\n<li><strong>회수 범위</strong> — 배당·중개사 배상·공제 등 실제 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 중개사의 선순위 보증금 조사·설명의무',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 다가구주택 일부 임대차를 중개하는 개업공인중개사는 임차의뢰인이 보증금을 제대로 반환받을 수 있는지 판단하는 데 필요한 권리관계 자료를 성실히 제공할 의무가 있고, 임대인이 자료 제공을 거부하더라도 규모·세대수·시세에 비추어 선순위 임대차보증금채권이 얼마나 있을 수 있는지 정도는 확인해 설명할 의무가 있다고 판시했습니다. 이를 위반해 손해를 입혔다면 공인중개사법 제30조에 따른 배상책임을 진다고 보았습니다. 깡통전세 사안에서 중개사 책임을 검토해볼 수 있습니다.',
        takeaway: '선순위 근저당 + 다세입자 보증금 + 배당 불능 결합 시 중개사 확인·설명 책임·보증금 회수 검토 영역 — 확인·설명서·확정일자 부여현황 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '집값보다 선순위가 많은데 보증금을 받을 수 있나요?',
        answer:
          '<strong>배당·중개사 배상·공제 등 회수 경로를 검토할 수 있는 영역입니다.</strong> 무조건 회수가 보장되지는 않으므로 권리관계와 책임 주체를 정리.',
      },
      {
        question: '중개사가 근저당만 알려줬는데 책임을 물을 수 있나요?',
        answer:
          '<strong>다른 세입자 보증금 등 선순위 채권 조사·설명의무 위반 여부에 따라 책임을 검토할 수 있는 영역입니다.</strong> 확인·설명서 기재를 확인.',
      },
      {
        question: '\'선순위 다수 있음\'이라고만 적혀 있어도 되나요?',
        answer:
          '<strong>구체적 금액·내역 확인·설명이 부족했는지가 책임 판단의 쟁점이 되는 영역입니다.</strong> 확정일자 부여현황으로 총액을 확인.',
      },
      {
        question: '중개사에게 청구할 때 공제도 받을 수 있나요?',
        answer:
          '<strong>중개사 손해배상과 함께 공제를 통한 회수를 검토할 수 있는 영역입니다.</strong> 공제증서·확인설명서를 갖춰 청구.',
      },
      {
        question: '형사 고소도 같이 해야 하나요?',
        answer:
          '<strong>임대인의 기망 등 사기 정황이 있으면 형사 고소를 검토할 수 있는 영역입니다.</strong> 송금·계약 자료를 갖춰 신고.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '깡통전세 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-underwater-deposit-recovery' },
      { label: '중개사 책임·공제 청구', href: '/guide/jeonse-fraud/jeonse-fraud-agent-liability-claim' },
      { label: '확정일자·우선변제', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 10. jeonse-fraud-double-contract-broker-collusion-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-double-contract-broker-collusion-track',
    keyword: '이중계약 중개사 가담 보증금 위험',
    questionKeyword: '중개사를 통해 전세계약을 했는데, 알고 보니 같은 집에 이중으로 계약이 돼 있었고 중개사가 다른 세입자 보증금이나 권리관계를 제대로 알려주지 않았어요. 중개사에게 책임을 물을 수 있나요?',
    ctaKeyword: '이중계약 중개사 가담 책임 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '이중계약 중개사 책임 — 5단계 정보제공·회수 점검 | 로앤가이드',
      description:
        '중개사를 통한 전세가 이중계약이거나 권리관계를 제대로 못 들었다면 중개사 정보제공·확인설명 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중개사를 통해 다가구주택에 전세계약을 하고 보증금을 보냈는데, 나중에 같은 집에 다른 세입자와 이중으로 계약이 돼 있었고 선순위 보증금도 상당하다는 사실을 알게 된 임차인입니다. 계약 당시 중개사는 다른 세입자들의 보증금이 얼마인지, 권리관계가 어떤지 구체적으로 확인해 주지도 않고 임대인 말만 그대로 전달했어요. 경매까지 거론되는데, 이렇게 중개사가 잘못된 정보를 그대로 전달했거나 확인을 소홀히 한 경우 책임을 물을 수 있는지, 보증금을 회수할 수 있는지 막막한 상태입니다." 주택임대차보호법 제3조는 대항요건을, 같은 법 제3조의2는 우선변제권을 정하고, 공인중개사법 제25조·제30조는 중개사의 확인·설명의무와 손해배상책임을 규정하는 영역입니다. 판례·실무는 중개사가 직접 조사·확인할 의무가 없는 사항이라도 계약 여부 결정에 중요한 사항을 그릇된 정보를 진실인 것처럼 전달해 계약하게 했다면 선량한 관리자의 주의의무 위반이 될 수 있고, 다가구주택은 다른 세입자 보증금·임대차 시기 등을 확인해 설명할 의무가 있다고 보는 본 사례 흐름이 있는 영역입니다. 이중계약·정보 누락 + 선순위 보증금 + 회수 곤란 결합은 \'중개사 정보제공·확인·설명 책임\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항·우선변제 ③ 중개사 책임 ④ 형사·민사 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 대항 ③ 중개사 ④ 형사 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이중계약 중개사 책임 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항/우선변제·중개사 책임·형사/민사·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부·이중계약 여부·선순위 보증금·경매 진행 확인.</li>\n<li><strong>② 대항·우선변제</strong> — 전입·점유·확정일자로 대항력·우선변제권을 갖췄는지.</li>\n<li><strong>③ 중개사 책임</strong> — 다른 세입자 보증금·권리관계 확인·설명, 그릇된 정보 전달 여부.</li>\n<li><strong>④ 형사·민사</strong> — 사기·이중계약 정황 시 고소, 중개사·공제 손해배상 검토.</li>\n<li><strong>⑤ 회수</strong> — 배당·중개사 배상·보증 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 중개사가 직접 확인할 의무가 없는 사항이라도 계약 결정에 중요한 정보를 그릇되게 진실인 양 전달해 계약하게 했다면 선관주의의무 위반이 될 수 있는 영역. 다가구주택은 다른 세입자 보증금·임대차 시기 확인·설명 의무가 있어, 정보 전달·확인 정황이 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·대응 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·경찰·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·중개 자료 확보 (즉시)</strong> — 등기부·계약서·확인·설명서·확정일자 부여현황·송금 내역 확보.</li>\n<li><strong>2단계 — 이중계약·선순위 정리 (수일 내)</strong> — 이중계약 여부·선순위 보증금, 전입·확정일자 점검.</li>\n<li><strong>3단계 — 임차권등기·배당요구 (이사 전/종기 내)</strong> — 임차권등기명령, 경매 배당요구 검토.</li>\n<li><strong>4단계 — 중개사 책임·공제 청구 (병행)</strong> — 정보제공·확인·설명의무 위반·공제 배상 검토.</li>\n<li><strong>5단계 — 형사·민사 회수 (병행)</strong> — 사기 고소·보증금반환소송 등 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">이중계약 중개사 가담 책임 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·중개사 책임·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>중개대상물 확인·설명서 (권리·보증금 기재)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위 권리)</strong></li>\n<li><strong>확정일자 부여현황 (선순위 보증금 총액)</strong></li>\n<li><strong>보증금 송금 내역·영수증</strong></li>\n<li><strong>중개사와의 설명·교신 기록 (문자·통화)</strong></li>\n<li><strong>이중계약·임대인 기망 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중개사가 다른 세입자 보증금·권리관계를 구체적으로 확인·설명했는지, 임대인 말만 그대로 전달했는지가 책임 검토의 핵심 자료가 됩니다. 확인·설명서 기재 내용과 중개사와 주고받은 문자·통화를 시간순으로 정리해두면 정보제공 의무 위반 검토에 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정보제공 의무</strong> — 그릇된 정보를 진실인 양 전달했는지.</li>\n<li><strong>확인·설명의무</strong> — 다른 세입자 보증금·권리관계 확인·설명 이행 여부.</li>\n<li><strong>이중계약</strong> — 같은 목적물 이중계약·기망 정황.</li>\n<li><strong>인과·과실</strong> — 의무 위반과 손해 사이 인과관계.</li>\n<li><strong>회수 범위</strong> — 배당·중개사 배상·공제 등 실제 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 그릇된 정보 전달과 다가구주택 중개사의 책임',
        summary:
          '대법원 2023다259743(대법원, 2023.11.30 선고) 영역에서 법원은 중개사가 직접 조사·확인할 의무가 없는 사항이라도 계약 여부 결정에 중요한 것이라면 그릇된 정보를 진실인 것처럼 전달해 계약하게 한 경우 선량한 관리자의 주의의무를 위반한 것이 되고, 다가구주택 일부 중개 시 다른 임차인의 보증금·임대차 시기 등을 확인해 설명하고 확인·설명서에 기재할 의무가 있다고 판시했습니다. 이를 위반해 손해를 입혔다면 공인중개사법 제30조에 따른 배상책임을 진다고 보았습니다. 이중계약·정보 누락 사안에서 중개사 책임을 검토해볼 수 있습니다.',
        takeaway: '이중계약·정보 누락 + 선순위 보증금 + 회수 곤란 결합 시 중개사 정보제공·확인·설명 책임 검토 영역 — 확인·설명서·교신 기록 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사가 임대인 말만 전달했는데 책임이 있나요?',
        answer:
          '<strong>그릇된 정보를 진실인 양 전달해 계약하게 했다면 선관주의의무 위반이 될 수 있는 영역입니다.</strong> 설명·교신 기록을 정리.',
      },
      {
        question: '이중계약인 줄 모르고 했는데 보증금을 받을 수 있나요?',
        answer:
          '<strong>배당·중개사 배상·공제 등 회수 경로를 검토할 수 있는 영역입니다.</strong> 무조건 회수가 보장되지는 않으므로 권리관계부터 확인.',
      },
      {
        question: '다른 세입자 보증금을 안 알려준 것도 책임인가요?',
        answer:
          '<strong>다가구주택은 다른 세입자 보증금·임대차 시기 확인·설명의무가 있는 영역입니다.</strong> 확인·설명서 기재 여부를 확인.',
      },
      {
        question: '중개사 공제로도 받을 수 있나요?',
        answer:
          '<strong>중개사 손해배상과 함께 공제를 통한 회수를 검토할 수 있는 영역입니다.</strong> 공제증서·확인설명서를 갖춰 청구.',
      },
      {
        question: '임대인을 형사 고소도 해야 하나요?',
        answer:
          '<strong>이중계약·기망 등 사기 정황이 있으면 형사 고소를 검토할 수 있는 영역입니다.</strong> 송금·계약 자료를 갖춰 신고.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '중개사 책임·공제 청구', href: '/guide/jeonse-fraud/jeonse-fraud-agent-liability-claim' },
      { label: '이중계약 전세사기', href: '/guide/jeonse-fraud/jeonse-fraud-double-contract' },
      { label: '전세사기 형사 고소', href: '/guide/jeonse-fraud/jeonse-fraud-criminal-complaint' },
      { label: '확정일자·우선변제', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },
];
