import { SpokePage } from '../spoke-pages';

// batch89 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-06)
//
// 고유 존재 이유:
// 1. assault-parking-dispute-shove-injury-track — 주차 시비로 번진 폭행에서 경미한 상해진단서의 증명력을 다투는 피해자 판단형 트랙. 진단서 신빙성과 상해 인정이 핵심.
// 2. assault-pub-drunk-customer-brawl-track — 술집 취객 폭행에서 위험한 물건 휴대(특수상해·특수협박) 성립을 다투는 피해자 판단형 트랙. 휴대의 의미·현장 지배가 핵심.
// 3. assault-gym-member-altercation-track — 헬스장 회원 폭행에서 위법성조각 전제사실 착오와 정당한 이유를 다투는 피해자 절차형 트랙. 오인·정당한 이유 판단이 핵심.
// 4. assault-nursing-home-caregiver-track — 요양시설 종사자 폭행에서 일방적 공격에 대한 방어행위 정당화를 다투는 피해자 판단형 트랙. 싸움 외관·위법성 조각이 핵심.
// 5. dui-farm-tractor-public-road-track — 트랙터 도로주행 음주 측정거부에서 술취한 상태의 상당한 이유를 다투는 accused 판단형 트랙. 감지기 반응·객관 정황이 핵심.
// 6. dui-construction-forklift-site-track — 건설현장 지게차 음주조작에서 상승기 측정수치의 운전 당시 초과 증명을 다투는 accused 판단형 트랙. 상승기 추정·논리경험칙이 핵심.
// 7. dui-foreign-license-driver-revocation-track — 외국면허 음주 취소 국면에서 단지 내 주차장이 도로인지 무면허·운전 개념을 다투는 accused 절차형 트랙. 도로 해당성과 운전 장소가 핵심.
// 8. jeonse-fraud-officetel-illegal-conversion-track — 오피스텔 불법개조 전세사기에서 임차인이 소유권 취득 시 대항력·우선변제권 상실을 다투는 피해자 판단형 트랙. 대항요건 존속·공시방법이 핵심.
// 9. jeonse-fraud-corporate-landlord-bankruptcy-track — 법인 임대인 파산 전세사기에서 다가구주택 중개사 선순위 설명의무를 다투는 피해자 판단형 트랙. 중개사 주의의무·배상책임이 핵심.
// 10. jeonse-fraud-deposit-loan-bank-collusion-track — 전세대출 명의 전세사기에서 임차권등기의 소멸시효 중단 효력을 다투는 피해자 절차형 트랙. 임차권등기 담보기능·시효가 핵심.

export const spokesBatch89AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-parking-dispute-shove-injury-track ───
  {
    domain: 'assault',
    slug: 'assault-parking-dispute-shove-injury-track',
    keyword: '주차 시비 폭행',
    questionKeyword: '주차 자리 문제로 말다툼하던 상대가 갑자기 저를 밀치고 팔을 비틀어 통증이 생겨 병원에서 진단서를 받았어요. 그런데 상대는 "엄살이다, 그 정도로 무슨 상해냐"며 진단서가 통증 호소만으로 발급된 거라고 우깁니다. 이 진단서로 상해를 다툴 수 있는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '주차 시비 폭행 진단서 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '주차 시비 폭행 — 5단계 진단서 증명력 점검 | 로앤가이드',
      description:
        '주차 시비로 맞아 다쳤는데 상대가 진단서를 엄살이라 우겨 막막하다면 형법 제257조 상해 인정과 상해진단서 증명력 판단 등 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트·상가 주차장에서 주차 자리 문제로 말다툼이 벌어졌는데, 감정이 격해진 상대가 갑자기 저를 밀치고 팔을 잡아 비틀거나 어깨를 쳐 통증이 생긴 피해자입니다. 곧장 병원에 가서 진료를 받고 상해진단서를 발급받았지만 골절 같은 뚜렷한 외상은 적어, 상대는 \'엄살 부리는 것이다, 통증만 호소해서 받은 진단서로 무슨 상해냐\'며 진단서 자체를 깎아내립니다. 진단서가 주로 제 주관적인 통증 호소에 기대 발급됐다며 다투니, 이 진단서만으로 상해가 인정돼 고소·치료비 청구가 되는지, 어디부터 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 사람의 신체를 상해한 자를, 같은 법 제260조 제1항은 폭행한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 상해진단서가 피해자 진술과 함께 범죄사실을 증명하는 유력한 증거가 될 수 있으나, 주로 피해자의 주관적인 통증 호소 등에 의존해 의학적 가능성만으로 발급된 때에는 진단일자와 상해 발생 시점의 근접성, 발급 경위, 기재 부위·정도가 주장하는 원인·경위와 일치하는지, 진료 시점·동기·경과 등을 면밀히 살펴 그 증명력을 신중히 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 주차 시비 + 폭행 + 통증 위주 진단서 결합은 \'상해진단서 증명력·상해 인정\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 진단서 신빙성 ② 부위·경위 일치 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단서 ② 일치 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단서 신빙성·부위/경위 일치·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단서 신빙성</strong> — 진단일자와 폭행 시점의 근접성, 발급 경위·진료 경과 정리.</li>\n<li><strong>② 부위·경위 일치</strong> — 진단 부위·정도가 시비·구타의 원인·경위와 맞는지 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조), 주차 시비 정황까지 함께 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통증 호소 위주로 발급된 진단서라도 폭행 직후 근접한 시점에 진료받고 부위·정도가 구타 경위와 일치하면 증명력이 인정될 여지가 있는 영역. 진단일자·발급 경위·진료 경과와 시비·구타 정황을 함께 정리해둘수록 증명력 평가에서 유리해지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신속 진료·진단 확보 (즉시~당일)</strong> — 폭행 직후 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 진단서·경위 일치 정리 (수일 내)</strong> — 진단일자·부위·정도가 구타 경위와 일치하는지 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 주차 시비 정황 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·주차장 CCTV 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차 시비 폭행 진단서 증명력·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단서 신빙성·부위 일치·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (진단일자·부위·치유기간)</strong></li>\n<li><strong>주차장 CCTV·차량 블랙박스 (시비·구타 정황)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>주차 시비·구타 경위 기록 (육하원칙)</strong></li>\n<li><strong>진료 시점·동기·경과 메모 (진단서 보강)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>목격자·동승자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서가 통증 호소 위주로 발급됐다고 다퉈지더라도 폭행 직후 가까운 시점에 진료를 받고 부위·정도가 구타 경위와 일치하면 증명력 인정에 도움이 되므로, 진료 시점·동기·경과를 구체적으로 정리해두는 것이 좋습니다. 주차장 CCTV·블랙박스는 시비부터 폭행까지 정황을 보여줄 수 있으나 보관 기간이 짧을 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진단서 증명력</strong> — 통증 호소 위주 진단서의 객관성·신빙성이 인정되는지.</li>\n<li><strong>부위·경위 일치</strong> — 진단 부위·정도가 시비·구타 경위와 맞는지.</li>\n<li><strong>진료 근접성</strong> — 진단일자가 폭행 시점과 시간상 근접한지.</li>\n<li><strong>쌍방 여부</strong> — 주차 다툼이 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서의 증명력 판단 방법과 상해의 의미',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 상해진단서가 피해자 진술과 함께 범죄사실을 증명하는 유력한 증거가 될 수 있으나 상해 사실과 인과관계도 합리적 의심이 없는 정도로 증명돼야 하므로, 진단서가 주로 피해자의 주관적인 통증 호소 등에 의존해 의학적 가능성만으로 발급된 때에는 진단일자와 상해 발생 시점의 근접성, 발급 경위, 기재된 부위·정도가 주장하는 원인·경위와 일치하는지, 진료 시점·동기·경과 등을 면밀히 살펴 논리와 경험법칙에 따라 증명력을 신중히 판단해야 하고, 폭행에 수반된 상처가 극히 경미해 굳이 치료할 필요 없이 자연 치유되고 일상생활에 지장이 없는 경우에는 상해로 보기 어려우며 신체의 완전성 훼손·생리적 기능 장애 여부는 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단해야 한다고 판시했습니다. 주차 시비 폭행 사안에서도 진단서 증명력과 상해 인정을 검토해볼 수 있습니다.',
        takeaway: '주차 시비 + 폭행 + 통증 위주 진단서 결합 시 상해진단서 증명력·상해 인정 평가 검토 영역 — 진단일자·부위·경위 일치·진료 경과·CCTV 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '통증만 호소해서 받은 진단서로도 상해를 다툴 수 있나요?',
        answer:
          '<strong>폭행 직후 진료받고 부위·정도가 경위와 일치하면 증명력이 인정될 여지가 있는 영역입니다.</strong> 진료 시점·동기·경과를 정리.',
      },
      {
        question: '상대가 엄살이라고 우기면 어떻게 하나요?',
        answer:
          '<strong>진단일자 근접성·부위 일치·진료 경과로 진단서 신빙성을 보강해 다투는 영역입니다.</strong> 진료기록·사진을 확보.',
      },
      {
        question: '주차장 CCTV는 꼭 필요한가요?',
        answer:
          '<strong>시비부터 폭행까지 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧을 수 있어 즉시 보존 요청.',
      },
      {
        question: '주차 다툼이라며 쌍방으로 몰리면요?',
        answer:
          '<strong>먼저 가해한 쪽과 부상 정도를 정황·영상으로 구분해 다투는 영역입니다.</strong> CCTV·목격자 진술을 확보.',
      },
      {
        question: '외상이 거의 없어도 상해가 되나요?',
        answer:
          '<strong>일상생활에 지장 없는 극히 경미한 정도를 넘으면 상해로 평가될 여지가 있는 영역입니다.</strong> 부위·치유기간·생활 불편을 기록.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '상해진단서 증명력·신빙성', href: '/guide/assault/assault-injury-certificate-credibility' },
      { label: '주차·이웃 분쟁 폭행 대응', href: '/guide/assault/assault-neighbor-conflict-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 2. assault-pub-drunk-customer-brawl-track ───
  {
    domain: 'assault',
    slug: 'assault-pub-drunk-customer-brawl-track',
    keyword: '술집 취객 폭행',
    questionKeyword: '술집에서 옆 테이블 취객과 시비가 붙었는데, 상대가 술병이나 의자 같은 물건을 집어 든 채 저를 위협하고 때려 다쳤어요. 직접 그 물건으로 내려친 건 아니라는데, 손에 들고 위협한 것만으로도 위험한 물건을 휴대한 특수상해·특수협박으로 다툴 수 있는지 막막합니다.',
    ctaKeyword: '술집 취객 폭행 위험한 물건 휴대 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '술집 취객 폭행 — 5단계 위험한 물건 휴대 점검 | 로앤가이드',
      description:
        '술집에서 취객이 술병·의자 등을 들고 위협·폭행했다면 형법 제258조의2 위험한 물건 휴대(특수상해)의 \'휴대\' 의미 등 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술집·주점에서 옆 테이블 취객과 사소한 시비가 붙었는데, 감정이 격해진 상대가 탁자 위 술병이나 근처 의자 같은 물건을 집어 든 채 저를 위협하고 밀치며 때려 멍과 통증이 생긴 피해자입니다. 상대는 \'그 물건으로 직접 내려치지는 않았으니 그냥 단순 폭행 아니냐, 위험한 물건을 쓴 게 아니다\'라고 발뺌하는데, 술병·의자를 손에 쥐고 위협하며 폭행한 것만으로도 위험한 물건을 \'휴대\'한 특수상해·특수협박으로 평가될 수 있는지 헷갈립니다. 실제로 물건을 던지거나 내려쳐야만 인정되는 건지, 손에 들고만 있어도 되는지, 어디부터 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제258조의2 제1항은 위험한 물건을 휴대해 상해한 특수상해를, 같은 법 제284조는 특수협박을 규정하는 영역입니다. 판례·실무는 위험한 물건을 \'휴대하여\'란 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지하거나 몸에 지니는 경우를 의미하고, 그 의도가 있었는지는 동기·휴대 경위·사용 방법·인적 관계·범행 전후 정황 등을 합리적으로 고려해 판단하며, 실제로 범행에 사용했을 것까지 요구되지 않고 현장에서 사실상 지배하면서 곧바로 사용할 수 있는 상태에 두면 충분하다고 보는 본 사례 흐름이 있는 영역입니다. 술집 + 술병·의자 + 위협·폭행 결합은 \'위험한 물건 휴대·특수상해 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 물건·휴대 ② 사용 의도·지배 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 휴대 ② 의도 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술집 취객 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 물건/휴대·사용 의도/지배·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 물건·휴대</strong> — 술병·의자 등 위험한 물건을 손에 쥐거나 곁에 둔 정황 정리.</li>\n<li><strong>② 사용 의도·지배</strong> — 현장에서 사용하려는 의도와 곧바로 사용할 수 있는 지배 상태 정리.</li>\n<li><strong>③ 고소</strong> — 특수상해(제258조의2)·특수협박(제284조)·상해(제257조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위험한 물건을 휴대했다고 하려면 현장에서 사용하려는 의도 아래 소지·지참하면 충분하고 실제로 내려치거나 던졌을 것까지 요구되지 않으며 손에 쥐고 있어야만 하는 것도 아닌 영역. 술병·의자를 든 정황과 사용 의도·지배 상태를 시간순으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위·현장 사진 확보.</li>\n<li><strong>2단계 — 물건·의도 정리 (수일 내)</strong> — 술병·의자 휴대 정황, 사용 의도·지배 상태와 위협 발언 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서·매장 CCTV 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집 취객 폭행 위험한 물건 휴대·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 물건·휴대·사용 의도 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>매장 CCTV·휴대폰 영상 (물건 휴대·위협 정황)</strong></li>\n<li><strong>현장·다친 부위·물건 사진 (시간정보 포함)</strong></li>\n<li><strong>술병·의자 등 사용 의도·지배 정황 메모</strong></li>\n<li><strong>위협 발언·시비 경위 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>업주·종업원·동석자 목격 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 내려치지 않았더라도 술병·의자를 사용하려는 의도 아래 손에 쥐거나 곁에 두고 곧바로 쓸 수 있는 상태였다면 위험한 물건 휴대로 평가될 여지가 있으므로, 물건의 종류·휴대 정황과 위협 발언을 구체적으로 정리해두는 것이 도움이 됩니다. 매장 CCTV는 물건을 든 장면을 보여줄 수 있으나 덮어쓰일 수 있어 업주에게 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위험한 물건성</strong> — 술병·의자 등이 위험한 물건으로 평가되는지.</li>\n<li><strong>휴대·지배</strong> — 사용 의도 아래 소지하고 곧바로 쓸 수 있는 상태였는지.</li>\n<li><strong>사용 요부</strong> — 실제로 내려치지 않아도 휴대로 인정되는지.</li>\n<li><strong>특수·단순 구분</strong> — 특수상해·특수협박과 단순 폭행의 경계.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위험한 물건 \'휴대\'의 의미와 사용 의도·지배',
        summary:
          '대법원 2023도18812(대법원, 2024.06.13 선고) 영역에서 법원은 위험한 물건을 휴대해 상해·협박한 자를 특수상해·특수협박으로 처벌하는 규정에서 \'휴대하여\'란 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지하거나 몸에 지니는 경우를 의미하고, 그 의도가 있었는지는 범행 동기·휴대 경위·사용 방법·피고인과 피해자의 인적 관계·범행 전후 정황 등 모든 사정을 합리적으로 고려해 판단하며, 사용하려는 의도 아래 소지·지참한 이상 실제로 범행에 사용했을 것까지 요구되지 않고, 현장에 있는 위험한 물건을 사실상 지배하면서 언제든 곧바로 사용할 수 있는 상태에 두면 충분하므로 현실적으로 손에 쥐고 있는 등 물리적으로 부착돼 있어야 하는 것은 아니라고 판시했습니다. 술집 취객 폭행 사안에서도 위험한 물건 휴대와 특수상해 성립을 검토해볼 수 있습니다.',
        takeaway: '술집 + 술병·의자 + 위협·폭행 결합 시 위험한 물건 휴대·특수상해 평가 검토 영역 — 물건·휴대 정황·사용 의도·CCTV 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '물건으로 직접 내려치지 않았는데도 특수상해가 되나요?',
        answer:
          '<strong>사용 의도 아래 소지·지참하면 실제 사용 없이도 휴대로 평가될 여지가 있는 영역입니다.</strong> 물건 휴대 정황·의도를 정리.',
      },
      {
        question: '손에 쥐고 있어야만 휴대로 인정되나요?',
        answer:
          '<strong>곁에 두고 곧바로 쓸 수 있는 지배 상태면 휴대로 볼 여지가 있는 영역입니다.</strong> 현장에서의 지배 정황을 기록.',
      },
      {
        question: '매장 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>물건을 든 장면과 위협 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 덮어쓰이기 전 보존 요청.',
      },
      {
        question: '술병·의자도 위험한 물건이 되나요?',
        answer:
          '<strong>사용 방법·정황에 따라 위험한 물건으로 평가될 수 있는 영역입니다.</strong> 물건 종류·사용 방식을 정리.',
      },
      {
        question: '취해서 한 일이라고 하면 처리가 달라지나요?',
        answer:
          '<strong>음주 상태가 성립이나 양형에 영향을 줄 수 있어 정황을 함께 정리하는 영역입니다.</strong> 위협·폭행 경위를 시간순으로 기록.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '위험한 물건 휴대·특수상해', href: '/guide/assault/assault-dangerous-weapon-standard' },
      { label: '유흥업소·취객 폭행 대응', href: '/guide/assault/assault-pub-drunk-conflict-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 3. assault-gym-member-altercation-track ───
  {
    domain: 'assault',
    slug: 'assault-gym-member-altercation-track',
    keyword: '헬스장 회원 폭행',
    questionKeyword: '헬스장에서 회원과 시비가 격해져 몸싸움이 벌어졌고, 상대가 주머니에서 무언가를 꺼내 쥐기에 흉기인 줄 알고 손을 펴게 하려다 다치게 했어요. 알고 보니 흉기가 아니었는데, 흉기로 오인한 사정이 정당한 이유로 인정돼 책임을 면할 수 있는지 막막합니다.',
    ctaKeyword: '헬스장 회원 폭행 오인·정당한 이유 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 회원 폭행 — 5단계 오인·정당한 이유 점검 | 로앤가이드',
      description:
        '헬스장 몸싸움 중 흉기로 오인해 제지하다 다치게 했다면 형법 제257조 상해와 위법성조각 전제사실 착오·정당한 이유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"헬스장에서 회원·이용자 사이 시비가 점점 격해져 서로 멱살을 잡고 넘어뜨리는 등 몸싸움이 이어지던 상황입니다. 그 와중에 상대가 한 손을 주머니에 넣어 무언가를 꺼내 움켜쥐기에, 작은 칼 같은 흉기를 꺼내 위해를 가하려는 것으로 오인해 다치는 것을 막으려고 그 손을 강제로 펴게 하다가 상대에게 손가락 부상을 입힌 피해자(또는 제지에 나선 사람)입니다. 나중에 보니 그 물건이 흉기가 아니라 작은 녹음기 등이었는데, 손에 쥔 모양만으로는 구별이 어려웠던 상황이라 더 억울해요. 급박한 몸싸움 중 흉기로 오인한 이런 사정이 \'정당한 이유\'로 인정돼 책임을 면할 수 있는지, 어떤 순서로 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제20조는 정당행위를, 위법성조각사유의 전제사실에 관한 착오 법리가 함께 검토되는 영역입니다. 판례·실무는 객관적으로는 위법성조각사유의 요건이 갖춰지지 않았더라도 행위자가 그러한 사실이 있다고 오인하고 그 오인에 정당한 이유가 있는 때에는 책임을 물을 수 없을 여지가 있고, 급박한 몸싸움 중 상대가 위험한 물건을 꺼내는 것으로 충분히 오인할 만한 객관적 정황이 있었는지·외형상 구별이 쉬웠는지 등을 두루 살펴 정당한 이유의 존부를 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 헬스장 + 몸싸움 + 흉기 오인 결합은 \'전제사실 착오·정당한 이유 평가\' 검토가 가능한 트랙입니다. 당사자라면 ① 상황 정리 ② 오인 정황 ③ 신고·진술 ④ 형사 절차 ⑤ 합의·민사 5중 트랙이 가능한 영역. 대응은 ① 상황 ② 오인 ③ 신고 ④ 형사 ⑤ 병행 5단계로 검토해볼 수 있습니다. 당사자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 회원 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상황 정리·오인 정황·신고/진술·형사 절차·합의/민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상황 정리</strong> — 몸싸움의 발단·진행, 급박성과 제지 경위를 시간순으로 정리.</li>\n<li><strong>② 오인 정황</strong> — 상대가 흉기를 꺼내는 것으로 오인할 만한 객관적 정황·구별 곤란 정리.</li>\n<li><strong>③ 신고·진술</strong> — 경찰 신고·진술 시 오인 경위와 정당한 이유를 일관되게 정리.</li>\n<li><strong>④ 형사 절차</strong> — 조사 → 검찰 송치 흐름, 전제사실 착오·정당한 이유 쟁점 확인.</li>\n<li><strong>⑤ 합의·민사</strong> — 손해배상·형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 객관적으로는 정당방위·정당행위 요건이 안 갖춰졌더라도 흉기로 오인한 사정이 있고 그 오인에 정당한 이유가 인정되면 책임을 물을 수 없을 여지가 있는 영역. 급박한 몸싸움·구별 곤란 등 오인할 만한 객관적 정황을 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상황·부상 자료 확보 (즉시~당일)</strong> — 몸싸움·제지 경위 정리, 부상·현장 사진과 진단서 확보.</li>\n<li><strong>2단계 — 오인 정황 정리 (수일 내)</strong> — 흉기로 오인할 만한 정황·구별 곤란, 급박성을 기록.</li>\n<li><strong>3단계 — 경찰 신고·진술 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 진술, 오인 경위 일관되게 정리.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·CCTV·목격자 검토 → 전제사실 착오·정당한 이유 쟁점 정리.</li>\n<li><strong>5단계 — 합의·민사 병행 (병행)</strong> — 형사 합의 검토 또는 손해배상 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 회원 폭행 오인·정당한 이유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상황·오인 정황·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>헬스장 CCTV·휴대폰 영상 (몸싸움·제지 정황)</strong></li>\n<li><strong>몸싸움 발단·진행·제지 경위 메모 (시간순)</strong></li>\n<li><strong>흉기 오인 정황·구별 곤란 기록 (정당한 이유)</strong></li>\n<li><strong>상대가 꺼낸 물건 관련 자료 (외형·크기)</strong></li>\n<li><strong>관장·코치·회원 등 목격자 진술·연락처</strong></li>\n<li><strong>현장·부상 사진, 치료비·통원 내역</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 흉기로 오인한 사정이 정당한 이유로 인정되려면 급박한 몸싸움·구별 곤란 등 오인할 만한 객관적 정황이 뒷받침돼야 하므로, 몸싸움의 발단·진행과 제지 경위를 시간순으로 일관되게 정리해두는 것이 도움이 됩니다. 헬스장 CCTV·목격자 진술은 정황을 보여줄 수 있으나 보관 기간이 짧을 수 있어 가능한 한 빨리 확보·보존해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전제사실 착오</strong> — 흉기로 오인한 사정이 있었는지.</li>\n<li><strong>정당한 이유</strong> — 그 오인에 정당한 이유가 인정되는지.</li>\n<li><strong>객관적 정황</strong> — 오인할 만한 급박성·구별 곤란이 드러나는지.</li>\n<li><strong>제지 상당성</strong> — 제지 방법이 상황에 비춰 상당한지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위법성조각 전제사실 착오와 정당한 이유 판단',
        summary:
          '대법원 2023도10768(대법원, 2023.11.02 선고) 영역에서 법원은 복싱클럽에서 관장과 회원이 뒤엉켜 몸싸움을 벌이던 중 코치인 피고인이 회원이 한 손을 주머니에 넣어 물건을 움켜쥐자 그 손을 강제로 펴게 해 손가락 골절상을 입힌 사안에서, 관장과 회원의 신체적 차이가 크지 않고 직전까지 급박한 몸싸움이 계속되던 점, 회원이 쥔 녹음기와 호신용 작은 칼은 외형상 큰 차이가 없어 주먹 모양만으로 구별이 쉽지 않았던 점 등에 비춰 피고인이 회원이 위험한 물건을 꺼내는 것으로 충분히 오인할 만한 객관적 정황이 있었다고 보아, 죄가 되지 않는 것으로 오인한 데 정당한 이유를 부정해 유죄로 본 원심에 위법성조각사유의 전제사실에 관한 착오·정당한 이유의 존부에 관한 법리오해의 잘못이 있다고 판시했습니다. 헬스장 회원 폭행 사안에서도 전제사실 착오와 정당한 이유를 검토해볼 수 있습니다.',
        takeaway: '헬스장 + 몸싸움 + 흉기 오인 결합 시 전제사실 착오·정당한 이유 평가 검토 영역 — 몸싸움 경위·오인 정황·구별 곤란·CCTV 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '흉기로 오인해 제지하다 다치게 했는데 책임을 면할 수 있나요?',
        answer:
          '<strong>오인에 정당한 이유가 인정되면 책임을 물을 수 없을 여지가 있는 영역입니다.</strong> 오인할 만한 객관적 정황을 정리.',
      },
      {
        question: '정당한 이유는 어떻게 판단하나요?',
        answer:
          '<strong>급박성·구별 곤란 등 오인할 만한 객관적 정황을 두루 살펴 판단하는 영역입니다.</strong> 몸싸움 경위·물건 외형을 기록.',
      },
      {
        question: '헬스장 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>몸싸움·제지 정황과 급박성을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧을 수 있어 즉시 보존 요청.',
      },
      {
        question: '결국 흉기가 아니었는데 불리해지나요?',
        answer:
          '<strong>실제 흉기 여부보다 오인할 만한 정황과 정당한 이유가 쟁점이 되는 영역입니다.</strong> 구별 곤란·외형 자료를 확보.',
      },
      {
        question: '진술이 흔들리면 불리해지나요?',
        answer:
          '<strong>오인 경위 진술의 일관성이 정당한 이유 판단에 영향을 주는 영역입니다.</strong> 발단·제지 경위를 모순 없이 기록.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '정당방위·정당행위 인정 기준', href: '/guide/assault/assault-self-defense-standard' },
      { label: '전제사실 착오·정당한 이유', href: '/guide/assault/assault-mistake-justification-standard' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 4. assault-nursing-home-caregiver-track ───
  {
    domain: 'assault',
    slug: 'assault-nursing-home-caregiver-track',
    keyword: '요양시설 종사자 폭행',
    questionKeyword: '요양시설에서 일하는데 보호자 일행이 합세해 저를 밀치고 때리기에, 벗어나려고 손을 휘저으며 발버둥치다 그쪽에 상처를 냈어요. 그런데 상대가 오히려 저를 폭행으로 고소했어요. 일방적으로 맞다가 벗어나려 한 행동도 폭행이 되는지, 정당화될 수는 없는지 막막합니다.',
    ctaKeyword: '요양시설 종사자 폭행 방어행위 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '요양시설 종사자 폭행 — 5단계 방어행위·위법성 점검 | 로앤가이드',
      description:
        '요양시설에서 일방적으로 맞다가 벗어나려다 상처를 냈는데 거꾸로 고소당했다면 형법 제257조 상해와 방어행위 위법성 조각 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"요양시설·복지시설에서 종사자로 일하던 중, 입소자 보호자나 그 일행이 항의하며 찾아와 여러 명이 합세해 저를 밀치고 때리기 시작한 상황입니다. 일방적으로 둘러싸여 맞다 보니 그 자리를 벗어나려고 손을 휘저으며 발버둥치는 과정에서 상대 쪽에 긁히거나 멍드는 상처가 생겼어요. 그런데 상대는 자기들이 먼저 때린 것은 빼놓고 오히려 \'네가 우리를 때려 다치게 했다\'며 저를 폭행·상해로 고소해버려, 일방적으로 맞다가 벗어나려 한 제 행동까지 폭행이 되는 건 아닌지 막막합니다. 이런 방어 과정의 유형력 행사가 정당화돼 위법성이 조각될 수는 없는지, 어떤 순서로 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을, 같은 법 제20조는 정당행위를, 제21조는 정당방위를 규정하는 영역입니다. 판례·실무는 맞붙어 싸우는 사이에서는 어느 한쪽의 행위만을 방어로 보기 어려운 것이 보통이나, 겉으로는 싸움처럼 보여도 실제로는 한쪽이 일방적으로 위법한 공격을 하고 상대방은 이를 벗어나기 위한 저항수단으로 유형력을 행사한 경우라면, 그 행위가 새로운 적극적 공격으로 평가되지 않는 한 사회관념상 상당성이 있어 위법성이 조각된다고 보는 본 사례 흐름이 있는 영역입니다. 요양시설 + 일방적 공격 + 벗어나려는 저항 결합은 \'방어행위 정당화·위법성 조각 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 선·후 공격 ② 방어 상당성 ③ 신고·진술 ④ 형사 절차 ⑤ 합의·민사 5중 트랙이 가능한 영역. 대응은 ① 공격 ② 방어 ③ 신고 ④ 형사 ⑤ 병행 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 요양시설 종사자 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 선·후 공격·방어 상당성·신고/진술·형사 절차·합의/민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 선·후 공격</strong> — 누가 먼저 일방적으로 공격했는지, 합세·둘러싸기 정황 정리.</li>\n<li><strong>② 방어 상당성</strong> — 벗어나기 위한 저항인지, 새로운 적극적 공격은 아닌지 정리.</li>\n<li><strong>③ 신고·진술</strong> — 일방적 공격과 방어 경위를 일관되게 진술·신고 정리.</li>\n<li><strong>④ 형사 절차</strong> — 조사 → 검찰 송치 흐름, 위법성 조각 쟁점 확인.</li>\n<li><strong>⑤ 합의·민사</strong> — 무고·손해배상·형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 겉으로는 싸움처럼 보여도 실제로는 일방적 공격을 당해 벗어나기 위한 저항으로 유형력을 행사한 경우라면 새로운 적극적 공격이 아닌 한 사회관념상 상당성이 있어 위법성이 조각될 여지가 있는 영역. 누가 먼저 공격했는지와 방어의 상당성을 정황·영상으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부상·정황 자료 확보 (즉시~당일)</strong> — 내 부상 진단서·사진, 시설 CCTV·목격자 정황 확보.</li>\n<li><strong>2단계 — 선·후 공격 정리 (수일 내)</strong> — 일방적 공격·합세 정황과 벗어나려는 저항 경위 기록.</li>\n<li><strong>3단계 — 경찰 신고·진술 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 진술, 방어 경위 일관되게 정리.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·CCTV·진단서 검토 → 위법성 조각 쟁점 정리.</li>\n<li><strong>5단계 — 합의·민사 병행 (병행)</strong> — 무고·손해배상 검토 또는 형사 합의 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요양시설 종사자 폭행 방어행위·위법성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 선·후 공격·방어 상당성·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>내 부상 진단서·진료기록 (일방적 공격 입증)</strong></li>\n<li><strong>시설 CCTV·휴대폰 영상 (선·후 공격 정황)</strong></li>\n<li><strong>일방적 공격·합세·둘러싸기 경위 메모 (시간순)</strong></li>\n<li><strong>벗어나려는 저항 경위 기록 (방어 상당성)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>동료 종사자·입소자·목격자 진술·연락처</strong></li>\n<li><strong>치료비 영수증·통원 내역, 무고 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일방적으로 맞다가 벗어나기 위한 저항으로 유형력을 행사한 것이 새로운 적극적 공격이 아니라면 위법성이 조각될 여지가 있으므로, 누가 먼저 공격했는지와 방어의 상당성을 시설 CCTV·진단서·목격자 진술로 정리해두는 것이 도움이 됩니다. 거꾸로 고소를 당한 경우 무고 가능성도 함께 검토하고, CCTV는 보관 기간이 짧을 수 있어 빨리 확보·보존하는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선·후 공격</strong> — 일방적 공격이 먼저였는지, 합세·둘러싸기가 있었는지.</li>\n<li><strong>방어 상당성</strong> — 벗어나려는 저항이 사회관념상 상당한지.</li>\n<li><strong>적극적 공격 여부</strong> — 저항이 새로운 적극적 공격으로 평가되는지.</li>\n<li><strong>쌍방·무고</strong> — 거꾸로 고소된 경우 무고 가능성.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방적 공격에 대한 방어행위와 위법성 조각',
        summary:
          '대법원 2009도12958(대법원, 2010.02.11 선고) 영역에서 법원은 맞붙어 싸우는 사이에서는 공격과 방어가 연달아 행해져 어느 한쪽의 행위만을 방어로 보기 어려운 것이 보통이나, 겉으로는 서로 싸우는 것처럼 보이더라도 실제로는 한쪽이 일방적으로 위법한 공격을 가하고 상대방은 이를 벗어나기 위한 저항수단으로 유형력을 행사한 경우에는 그 행위가 새로운 적극적 공격이라고 평가되지 않는 한 사회관념상 허용될 수 있는 상당성이 있어 위법성이 조각된다고 보고, 상대방 일행이 합세해 일방적으로 구타하자 이를 벗어나려고 손을 휘저으며 발버둥치는 과정에서 상해를 입힌 사안에서 그 행위의 위법성이 조각된다고 본 원심을 수긍한다고 판시했습니다. 요양시설 종사자 폭행 사안에서도 방어행위 정당화와 위법성 조각을 검토해볼 수 있습니다.',
        takeaway: '요양시설 + 일방적 공격 + 벗어나려는 저항 결합 시 방어행위 정당화·위법성 조각 평가 검토 영역 — 선·후 공격·방어 상당성·CCTV·진단서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '일방적으로 맞다가 벗어나려 한 행동도 폭행이 되나요?',
        answer:
          '<strong>벗어나기 위한 저항이 새로운 적극적 공격이 아니면 위법성이 조각될 여지가 있는 영역입니다.</strong> 선·후 공격과 방어 상당성을 정리.',
      },
      {
        question: '상대가 거꾸로 저를 고소했는데 어떻게 하나요?',
        answer:
          '<strong>누가 먼저 일방적으로 공격했는지를 정황·영상으로 구분해 다투는 영역입니다.</strong> 시설 CCTV·진단서·목격자를 확보.',
      },
      {
        question: '시설 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>선·후 공격과 방어 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧을 수 있어 즉시 보존 요청.',
      },
      {
        question: '여러 명이 합세했으면 방어로 인정되기 쉬운가요?',
        answer:
          '<strong>합세·둘러싸기로 일방적 공격이 드러나면 방어 상당성 판단에 도움이 되는 영역입니다.</strong> 합세 정황을 기록.',
      },
      {
        question: '무고로도 다툴 수 있나요?',
        answer:
          '<strong>먼저 때려놓고 거꾸로 고소한 정황이면 무고 가능성도 검토하는 영역입니다.</strong> 선·후 공격 자료를 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '방어행위·위법성 조각', href: '/guide/assault/assault-defensive-act-justification' },
      { label: '쌍방폭행·무고 대응', href: '/guide/assault/assault-mutual-false-accusation-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 5. dui-farm-tractor-public-road-track ───
  {
    domain: 'dui',
    slug: 'dui-farm-tractor-public-road-track',
    keyword: '트랙터 도로주행 음주운전',
    questionKeyword: '농기계인 트랙터를 몰고 잠깐 도로를 지나다 단속에 걸렸는데, 음주감지기에 반응이 나왔다며 음주측정 요구를 받았어요. 술을 거의 안 마셔 취한 상태라고 보기 어려운데, 감지기 반응만으로 측정 거부 처벌까지 될 수 있는지, 혐의를 받고 있다면 어떻게 다툴 수 있는지 막막합니다.',
    ctaKeyword: '트랙터 도로주행 음주측정 상당한 이유 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '트랙터 음주측정 — 5단계 감지기 반응·상당한 이유 점검 | 로앤가이드',
      description:
        '트랙터 도로주행 중 음주감지기 반응만으로 측정 요구·거부 처벌이 걱정된다면 도로교통법 제44조 음주측정과 상당한 이유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"농사용 트랙터를 몰고 잠깐 공공도로 구간을 지나가다 음주단속에 걸린 운전자입니다. 경찰관이 음주감지기로 1차 확인을 했더니 반응이 나왔다며 호흡측정기에 의한 음주측정을 요구했는데, 사실 저는 술을 거의 마시지 않았거나 마신 지 오래돼 취한 상태라고 보기 어려운 상황이었어요. 그런데 감지기 반응이 나왔다는 이유만으로 음주측정을 요구받고, 응하지 못하면 측정 거부로 처벌될 수 있다는 말을 들어 불안합니다. 감지기는 아주 낮은 수치에서도 반응한다고 들었는데, 그 반응만으로 술에 취한 상태라고 인정할 상당한 이유가 있다고 볼 수 있는지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 조 제2항은 경찰공무원의 음주측정 요구와 응할 의무를, 측정불응죄는 그 측정에 응하지 않은 경우의 처벌을 정하는 영역입니다. 판례·실무는 측정불응죄는 술에 취한 상태에 있다고 인정할 만한 상당한 이유가 있는 사람이 측정에 응하지 않은 경우 성립하고, 음주감지기에서 음주반응이 나왔더라도 감지기가 매우 낮은 농도부터 반응하는 점을 감안하면 그것만으로 곧바로 상당한 이유가 있다고 볼 수 없으며 운전자의 외관·태도·운전 행태 등 객관적 사정을 종합해 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 트랙터 + 도로주행 + 감지기 반응 결합은 \'음주측정 상당한 이유·측정불응 평가\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 상당한 이유 ③ 객관적 정황 ④ 양형 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 상당성 ③ 정황 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 트랙터 도로주행 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·상당한 이유·객관적 정황·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 감지기 반응·측정 요구 시각·횟수, 응답 경위 정리.</li>\n<li><strong>② 상당한 이유</strong> — 술에 취한 상태라고 인정할 만한 상당한 이유가 있었는지 정리.</li>\n<li><strong>③ 객관적 정황</strong> — 외관·태도·운전 행태 등 객관적 사정 정리.</li>\n<li><strong>④ 양형</strong> — 음주량·경위·초범·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 측정불응·음주운전 성립 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주감지기 반응은 매우 낮은 농도부터 나오므로 그것만으로 술에 취한 상태라고 인정할 상당한 이유가 있다고 보기는 어렵고, 외관·태도·운전 행태 등 객관적 사정을 종합해 판단하는 영역. 감지기 반응 외에 다른 객관적 정황이 있었는지를 측정 경위로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 주취운전자 적발보고서·정황진술보고서, 감지기 반응·측정 요구 경위 확인.</li>\n<li><strong>2단계 — 상당한 이유·정황 정리 (수일 내)</strong> — 감지기 반응 외 외관·태도·운전 행태 등 객관적 사정 점검.</li>\n<li><strong>3단계 — 측정 경위·자료 정리 (공판 전)</strong> — 단속 영상·측정 요구 시각·횟수, 응답 경위 정리.</li>\n<li><strong>4단계 — 양형·대응 자료 정리 (병행)</strong> — 음주량·초범·반성·생계 등 양형 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 상당한 이유·측정불응 성립 쟁점 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">트랙터 도로주행 음주측정 상당한 이유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·상당한 이유·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (감지기 반응·측정 요구)</strong></li>\n<li><strong>주취운전자 정황진술보고서 (외관·태도 기재)</strong></li>\n<li><strong>측정 요구 시각·횟수·응답 경위 메모 (시간순)</strong></li>\n<li><strong>단속 영상·블랙박스 (운전 행태·정황)</strong></li>\n<li><strong>음주량·음주 시점 정리 자료 (상당한 이유)</strong></li>\n<li><strong>감지기 반응·측정 결과지 (수치·시각)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 음주감지기는 낮은 농도부터 반응하므로 감지기 반응만으로 상당한 이유가 곧바로 인정되지는 않고, 외관·태도·운전 행태 등 객관적 정황이 함께 고려되므로 적발보고서·정황진술보고서·단속 영상으로 측정 경위를 정리해두는 것이 도움이 됩니다. 트랙터 같은 농기계라도 도로 주행 정황과 음주 시점·양을 함께 점검하고 양형 자료도 준비해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상당한 이유</strong> — 술에 취한 상태라고 인정할 상당한 이유가 있었는지.</li>\n<li><strong>감지기 반응</strong> — 감지기 반응만으로 상당한 이유가 인정되는지.</li>\n<li><strong>객관적 정황</strong> — 외관·태도·운전 행태 등이 함께 고려됐는지.</li>\n<li><strong>측정불응 성립</strong> — 측정 요구·응답 경위가 측정불응에 해당하는지.</li>\n<li><strong>양형 사정</strong> — 음주량·경위·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주감지기 반응과 상당한 이유의 판단 기준',
        summary:
          '대법원 2002도6632(대법원, 2003.01.24 선고) 영역에서 법원은 음주측정불응죄는 술에 취한 상태에 있다고 인정할 만한 상당한 이유가 있는 사람이 경찰공무원의 측정에 응하지 않은 경우 성립하고, 여기서 \'술에 취한 상태\'는 처벌 기준 음주수치 이상의 음주상태를 말하므로 측정 요구 당시 운전자가 그 기준 이상의 상태에 있다고 인정할 만한 상당한 이유가 있어야 하며, 호흡측정에 앞서 사용되는 음주감지기에서 음주반응이 나왔더라도 감지기가 매우 낮은 농도부터 반응하는 점을 감안하면 그것만으로 곧바로 상당한 이유가 있다고 볼 수 없고 운전자의 외관·태도·운전 행태 등 객관적 사정을 종합해 판단해야 한다고 보아, 상당한 이유가 있었다고 보기 어렵다는 이유로 측정불응죄에 해당한다고 볼 수 없다고 본 사례라고 판시했습니다. 트랙터 도로주행 음주운전 사안에서도 상당한 이유와 측정불응 성립을 검토해볼 수 있습니다.',
        takeaway: '트랙터 + 도로주행 + 감지기 반응 결합 시 음주측정 상당한 이유·측정불응 평가 검토 영역 — 측정 경위·객관적 정황·단속 영상·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '감지기 반응만으로 측정 거부 처벌까지 되나요?',
        answer:
          '<strong>감지기 반응만으로 상당한 이유가 곧바로 인정되지는 않는 영역입니다.</strong> 외관·태도·운전 행태 등 정황을 정리.',
      },
      {
        question: '상당한 이유가 있다는 건 어떻게 판단하나요?',
        answer:
          '<strong>감지기 반응에 더해 객관적 사정을 종합해 판단하는 영역입니다.</strong> 적발보고서·정황진술보고서를 확인.',
      },
      {
        question: '트랙터 같은 농기계도 음주운전 단속 대상인가요?',
        answer:
          '<strong>도로 주행 정황·차종에 따라 적용이 달라질 수 있는 영역입니다.</strong> 운전 장소·차종·정황을 점검.',
      },
      {
        question: '단속 영상이 꼭 필요한가요?',
        answer:
          '<strong>외관·태도·운전 행태 등 객관적 정황을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 측정 경위를 함께 정리.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·정황진술보고서·감지기 반응 자료 확보가 출발점인 영역입니다.</strong> 측정 경위와 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 상당한 이유·요건', href: '/guide/dui/dui-breath-test-reasonable-ground' },
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-measurement-refusal-track' },
      { label: '음주 측정 절차·정확성', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주운전 적용법조·가중', href: '/guide/dui/dui-applicable-law-aggravation' },
    ],
  },

  // ─── 6. dui-construction-forklift-site-track ───
  {
    domain: 'dui',
    slug: 'dui-construction-forklift-site-track',
    keyword: '건설현장 지게차 음주조작',
    questionKeyword: '술을 조금 마신 뒤 지게차·차량을 잠깐 운전하다 사고가 났고, 사고 직후 측정한 수치가 처벌기준에 살짝 걸쳐 있었어요. 측정이 운전보다 늦어 상승기였을 수 있는데, 그렇다면 정작 운전할 때는 기준치 미만 아니냐며 다투고 싶은데 혐의를 받고 있다면 가능한지 막막합니다.',
    ctaKeyword: '건설현장 지게차 음주 상승기 측정 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '지게차 음주조작 — 5단계 상승기 측정·기준치 점검 | 로앤가이드',
      description:
        '음주 후 운전하다 사고 직후 측정 수치가 기준치에 걸쳤는데 상승기라 다투고 싶다면 도로교통법 제44조와 상승기 측정 증명 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 조금 마신 뒤 건설현장 안팎에서 지게차나 차량을 잠깐 운전하다가 사고를 낸 운전자입니다. 사고 직후 경찰의 음주측정을 받았는데 혈중알코올농도 수치가 처벌 기준에 아슬아슬하게 걸치는 정도로 나왔어요. 그런데 술을 마신 시점과 측정 시점 사이에 시간 간격이 있어, 측정 당시는 알코올농도가 한창 올라가는 \'상승기\'였을 가능성이 있다고 들었습니다. 그렇다면 정작 운전하던 시점에는 처벌 기준치보다 낮았던 것 아니냐며 다투고 싶은데, 상승기라는 사정만으로 운전 당시 수치를 알 수 없으니 무죄라고 볼 수 있는 건지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제148조의2는 음주운전 처벌을, 교통사고처리 특례법은 음주 사고의 처리를 정하는 영역입니다. 판례·실무는 운전 시점과 측정 시점 사이에 시간 간격이 있고 그때가 상승기로 보이더라도 그러한 사정만으로 언제나 운전 시점의 수치가 기준치를 초과한다는 증명이 불가능하다고 볼 수는 없고, 운전과 측정의 시간 간격, 측정 수치와 기준치의 차이, 음주 시간·양, 단속 당시 행동, 사고 경위 등을 종합해 논리와 경험칙에 따라 합리적으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 지게차·차량 + 사고 직후 측정 + 상승기 결합은 \'상승기 측정·운전 당시 기준치 평가\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 상승기·시간 간격 ③ 종합 정황 ④ 양형 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 상승기 ③ 정황 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 건설현장 지게차 음주조작 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·상승기/시간 간격·종합 정황·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 운전 종료·측정 시각, 측정 수치·방법·절차 정리.</li>\n<li><strong>② 상승기·시간 간격</strong> — 운전과 측정의 간격, 상승기 가능성 정리.</li>\n<li><strong>③ 종합 정황</strong> — 음주 시간·양, 단속 당시 행동, 사고 경위 등 종합 정리.</li>\n<li><strong>④ 양형</strong> — 사고 피해 회복·초범·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 운전 당시 기준치 초과 증명 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정이 운전보다 늦어 상승기로 보이더라도 그 사정만으로 언제나 운전 당시 기준치 초과 증명이 불가능한 것은 아니고, 시간 간격·수치 차이·음주 시간/양·사고 경위 등을 종합해 논리·경험칙으로 판단하는 영역. 운전·측정의 시간 흐름과 음주 경위를 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·정황진술보고서, 측정 결과지·측정 시각·방법 확인.</li>\n<li><strong>2단계 — 운전·측정 시간 정리 (수일 내)</strong> — 운전 종료·측정 시각, 시간 간격과 상승기 가능성 점검.</li>\n<li><strong>3단계 — 종합 정황 정리 (공판 전)</strong> — 음주 시간·양, 단속 당시 행동, 사고 경위·블랙박스 정리.</li>\n<li><strong>4단계 — 양형 자료 정리 (병행)</strong> — 사고 피해 회복, 초범·반성·생계 등 양형 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 운전 당시 기준치 초과 증명 쟁점 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">건설현장 지게차 음주 상승기 측정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·상승기·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정 경위·시각)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각·방법)</strong></li>\n<li><strong>운전 종료·측정 시각 정리 메모 (시간 간격)</strong></li>\n<li><strong>음주 시간·음주량 정리 자료 (상승기 판단)</strong></li>\n<li><strong>사고 경위·블랙박스·현장 자료 (단속 당시 행동)</strong></li>\n<li><strong>채혈 측정·재측정 요구 기록 (있는 경우)</strong></li>\n<li><strong>사고 피해 회복·초범·반성 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상승기라는 사정만으로 운전 당시 기준치 초과 증명이 곧바로 불가능해지는 것은 아니고 시간 간격·수치 차이·음주 시간/양·사고 경위가 함께 고려되므로, 운전 종료·측정 시각과 음주 경위를 구체적으로 정리해두는 것이 핵심입니다. 측정 방법·절차와 채혈·재측정 요구 여부도 점검하고, 사고가 있었던 만큼 피해 회복 등 양형 자료도 함께 준비해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상승기 측정</strong> — 측정 시점이 상승기였는지, 그 사정의 의미.</li>\n<li><strong>운전 당시 수치</strong> — 운전 시점에도 기준치 이상이었다고 볼 수 있는지.</li>\n<li><strong>시간 간격·수치 차이</strong> — 운전·측정 간격과 측정 수치·기준치의 차이.</li>\n<li><strong>종합 판단</strong> — 음주 시간·양·사고 경위 등 종합 정황.</li>\n<li><strong>양형 사정</strong> — 사고 피해 회복·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상승기 측정 수치와 운전 당시 기준치 초과의 증명',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 영역에서 법원은 운전 시점과 혈중알코올농도 측정 시점 사이에 시간 간격이 있고 그때가 상승기로 보이는 경우라도 그러한 사정만으로 언제나 운전 시점의 농도가 처벌기준치를 초과한다는 증명이 불가능하다고 볼 수는 없고, 운전 당시에도 기준치 이상이었는지는 운전과 측정의 시간 간격, 측정된 수치와 기준치의 차이, 음주를 지속한 시간 및 음주량, 단속·측정 당시 운전자의 행동 양상, 교통사고의 경위·정황 등을 종합적으로 고려해 논리와 경험칙에 따라 합리적으로 판단해야 한다고 보아, 운전 종료 약 12분 후 측정돼 측정 시점이 상승기에 있을 가능성을 감안하더라도 운전 당시 수치가 처벌기준 이상이었다고 보는 것이 논리·경험칙에 부합한다고 판시했습니다. 건설현장 지게차 음주조작 사안에서도 상승기 측정과 운전 당시 기준치 초과를 검토해볼 수 있습니다.',
        takeaway: '지게차·차량 + 사고 직후 측정 + 상승기 결합 시 상승기 측정·운전 당시 기준치 평가 검토 영역 — 운전·측정 시각·음주 경위·사고 정황·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '측정이 상승기였으면 운전 당시는 기준치 미만 아닌가요?',
        answer:
          '<strong>상승기 사정만으로 운전 당시 기준치 초과 증명이 곧바로 불가능해지지는 않는 영역입니다.</strong> 시간 간격·음주 경위를 정리.',
      },
      {
        question: '운전 당시 수치는 어떻게 판단하나요?',
        answer:
          '<strong>시간 간격·수치 차이·음주 시간·양·사고 경위 등을 종합해 판단하는 영역입니다.</strong> 운전·측정 시각을 점검.',
      },
      {
        question: '측정 절차에 문제가 있으면 다툴 수 있나요?',
        answer:
          '<strong>측정 방법·절차나 재측정 요구 여부가 증명에 영향을 줄 수 있는 영역입니다.</strong> 측정 결과지·재측정 기록을 확보.',
      },
      {
        question: '사고까지 났는데 양형은 어떻게 되나요?',
        answer:
          '<strong>사고 피해 회복·초범·반성 등이 양형에 영향을 줄 수 있는 영역입니다.</strong> 피해 회복 자료를 준비.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 결과·운전과 측정 시각 확보가 출발점인 영역입니다.</strong> 음주 경위와 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 측정 절차·정확성', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '상승기 측정·혈중알코올농도 증명', href: '/guide/dui/dui-rising-phase-bac-proof' },
      { label: '음주 교통사고 처리', href: '/guide/dui/dui-traffic-accident-handling' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주운전 적용법조·가중', href: '/guide/dui/dui-applicable-law-aggravation' },
    ],
  },

  // ─── 7. dui-foreign-license-driver-revocation-track ───
  {
    domain: 'dui',
    slug: 'dui-foreign-license-driver-revocation-track',
    keyword: '외국면허 음주 취소',
    questionKeyword: '음주 상태로 아파트 단지 안 지하주차장에서 차를 잠깐 옮겼을 뿐인데, 무면허·음주운전으로 면허 취소 처분까지 받았어요. 외부 도로가 아니라 단지 내 주차장이라 \'도로\'가 아닌 것 같은데, 혐의를 받고 있다면 무면허운전 성립을 다툴 수 있는지 막막합니다.',
    ctaKeyword: '외국면허 음주 취소 단지 주차장 도로 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 면허취소 — 5단계 단지 주차장 도로 여부 점검 | 로앤가이드',
      description:
        '단지 내 지하주차장에서 음주 운전했는데 무면허·면허취소가 걱정된다면 도로교통법 제2조 \'도로\' 해당 여부와 운전 개념 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 상태에서 아파트 단지 안에 있는 지하주차장에서 차를 잠깐 옮기거나 짧은 구간만 운전했을 뿐인데, 단속에 걸려 무면허·음주운전으로 면허 취소 처분까지 받게 된 운전자입니다. 외부 일반도로로 나간 것이 아니라 입주민 등만 드나드는 단지 내 주차장 안에서 움직인 것이라, 그곳이 도로교통법에서 말하는 \'도로\'에 해당하는지부터 의문이 듭니다. 도로에서 운전한 것이 아니라면 무면허운전은 성립하지 않을 수도 있다고 들었는데, 음주운전·무면허운전·면허취소가 한꺼번에 걸려 있어 어디서부터 다퉈야 할지 막막해요. 혐의를 받고 있다면 단지 내 주차장이 도로에 해당하는지, 무면허운전 성립과 면허 취소를 어떤 순서로 다퉈야 하는지 정리하고 싶은 상태입니다." 도로교통법 제2조 제1호는 \'도로\'의 범위를, 같은 조 제26호는 \'운전\' 개념과 음주운전 등에 한해 도로 외의 곳을 포함하는 예외를, 같은 법 제43조·제152조는 무면허운전 금지·처벌을 정하는 영역입니다. 판례·실무는 무면허운전이 성립하려면 운전한 곳이 도로교통법상 \'도로\'에 해당해야 하므로, 특정인이나 관련 용건이 있는 사람만 사용할 수 있고 자체적으로 관리되는 곳에서 면허 없이 운전한 경우에는 무면허운전으로 처벌할 수 없을 여지가 있고, 단지 내 주차장이 도로인지는 불특정 다수의 통행 가능성·관리 형태 등을 기준으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 단지 주차장 + 음주·무면허 + 면허취소 결합은 \'도로 해당성·무면허 성립·취소 대응\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 운전 장소 ② 도로 해당성 ③ 무면허 성립 ④ 취소 대응 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 장소 ② 도로 ③ 무면허 ④ 취소 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 외국면허 음주 취소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전 장소·도로 해당성·무면허 성립·취소 대응·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전 장소</strong> — 단지 내 지하주차장 등 운전 위치·구간·관리 형태 정리.</li>\n<li><strong>② 도로 해당성</strong> — 불특정 다수의 통행 가능성·공개성 기준 도로 해당 여부 정리.</li>\n<li><strong>③ 무면허 성립</strong> — 도로가 아니면 무면허운전 성립이 부정될 여지 정리.</li>\n<li><strong>④ 취소 대응</strong> — 면허 취소 처분의 사유·청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무면허운전이 성립하려면 운전한 곳이 도로교통법상 \'도로\'여야 하므로, 특정인만 쓰고 자체 관리되는 단지 내 주차장이라면 도로 해당성이 부정돼 무면허운전 성립이 다퉈질 여지가 있는 영역. 다만 음주운전은 도로 외의 곳도 포함될 수 있으니 운전 장소·관리 형태를 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·처분 자료 확인 (즉시~당일)</strong> — 적발보고서·측정 결과지, 면허 취소 처분 통지서·사유 확인.</li>\n<li><strong>2단계 — 운전 장소·관리 형태 정리 (수일 내)</strong> — 단지 내 주차장 위치·구간, 출입·관리 형태와 통행 가능성 점검.</li>\n<li><strong>3단계 — 도로 해당성·무면허 쟁점 정리 (공판 전)</strong> — 도로 해당 여부, 무면허운전 성립 다툼 정리.</li>\n<li><strong>4단계 — 취소 대응 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한, 정상·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 무면허 성립 쟁점 변론, 취소 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국면허 음주 취소 단지 주차장 도로 여부 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 운전 장소·도로 해당성·취소 대응 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (운전 장소·측정 경위)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>운전 면허 취소 처분 통지서 (사유·일자)</strong></li>\n<li><strong>단지 내 주차장 위치·구간·관리 형태 자료 (도로 해당성)</strong></li>\n<li><strong>출입통제·관리 현황 자료 (불특정 다수 통행 여부)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n<li><strong>생계·운전 필요성·반성 등 정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무면허운전은 운전한 곳이 도로일 때 성립하므로, 단지 내 주차장이 특정인만 쓰고 자체 관리되는 곳인지 출입·관리 형태와 통행 가능성을 정리해두는 것이 핵심입니다. 다만 음주운전은 도로 외의 곳도 포함될 수 있어 별도로 다퉈야 하고, 면허 취소는 처분을 안 날부터 90일 내 이의신청·행정심판을 검토하며 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로 해당성</strong> — 단지 내 주차장이 도로교통법상 도로인지.</li>\n<li><strong>무면허 성립</strong> — 도로가 아니면 무면허운전 성립이 부정되는지.</li>\n<li><strong>음주운전 포함</strong> — 음주운전은 도로 외의 곳도 포함될 수 있는지.</li>\n<li><strong>취소 재량</strong> — 면허 취소가 재량권 일탈·남용인지.</li>\n<li><strong>청구기한</strong> — 처분을 안 날부터 90일 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단지 내 주차장의 \'도로\' 해당 여부와 무면허운전',
        summary:
          '대법원 2017도17762(대법원, 2017.12.28 선고) 영역에서 법원은 무면허운전이 성립하려면 면허 없이 자동차 등을 운전한 곳이 도로교통법 제2조 제1호의 \'도로\'에 해당해야 하므로 특정인이나 그와 관련된 용건이 있는 사람만 사용할 수 있고 자체적으로 관리되는 곳에서 면허 없이 운전한 경우에는 무면허운전으로 처벌할 수 없고, 음주운전 등 일정한 경우에 한해 예외적으로 도로 외의 곳에서 한 운전을 운전 개념에 포함하는 것과 달리 무면허운전에는 그런 예외가 없다고 보아, 아파트 단지 안 지하주차장 약 50m 구간 운전에서 그 주차장이 도로에 해당하는지가 불분명해 무면허운전에 해당하지 않을 여지가 있는데도 유죄로 본 원심에 심리미진·법리오해의 잘못이 있다고 판시했습니다. 외국면허 음주 취소 사안에서도 도로 해당성과 무면허운전 성립을 검토해볼 수 있습니다.',
        takeaway: '단지 주차장 + 음주·무면허 + 면허취소 결합 시 도로 해당성·무면허 성립·취소 대응 검토 영역 — 운전 장소·관리 형태·처분 통지서·청구기한 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단지 내 주차장에서 운전한 것도 무면허운전이 되나요?',
        answer:
          '<strong>도로에 해당하지 않으면 무면허운전 성립이 부정될 여지가 있는 영역입니다.</strong> 운전 장소·관리 형태를 정리.',
      },
      {
        question: '도로인지 아닌지는 어떻게 판단하나요?',
        answer:
          '<strong>불특정 다수의 통행 가능성·공개성·관리 형태를 기준으로 판단하는 영역입니다.</strong> 출입·관리 현황 자료를 확보.',
      },
      {
        question: '도로가 아니어도 음주운전은 처벌되나요?',
        answer:
          '<strong>음주운전은 도로 외의 곳도 포함될 수 있어 별도로 다퉈야 하는 영역입니다.</strong> 음주운전·무면허를 구분해 점검.',
      },
      {
        question: '면허 취소가 과하다고 느끼면요?',
        answer:
          '<strong>재량권 일탈·남용이 인정되면 행정심판으로 다툴 수 있는 영역입니다.</strong> 처분 통지서·청구기한·정상 자료를 준비.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 결과·처분 통지서 확보가 출발점인 영역입니다.</strong> 운전 장소 자료와 청구기한을 함께 점검.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '무면허운전 도로 해당성', href: '/guide/dui/dui-unlicensed-road-scope' },
      { label: '음주운전 운전 개념·장소', href: '/guide/dui/dui-driving-concept-place' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '음주 면허정지 이의신청', href: '/guide/dui/dui-license-suspension-objection-track' },
    ],
  },

  // ─── 8. jeonse-fraud-officetel-illegal-conversion-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-officetel-illegal-conversion-track',
    keyword: '오피스텔 불법개조 전세사기',
    questionKeyword: '불법으로 주거용 개조된 오피스텔에 전세로 들어와 전입·확정일자를 갖췄는데, 사정상 그 집을 제가 매수해 소유권까지 갖게 됐어요. 그런데 임대인이 받은 전세대출 보증이 제 대항력·우선변제권 상실을 이유로 면책됐다는데, 제 보증금 권리는 어떻게 되는지 막막합니다.',
    ctaKeyword: '오피스텔 불법개조 전세사기 대항력 상실 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '오피스텔 전세사기 — 5단계 대항력 상실 점검 | 로앤가이드',
      description:
        '오피스텔 전세에서 임차주택을 매수해 대항력·우선변제권이 문제됐다면 주택임대차보호법 제3조 대항요건 존속과 공시방법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"불법으로 주거용으로 개조된 오피스텔에 전세로 들어와 전입신고와 확정일자를 갖춰 대항력·우선변제권을 확보했다고 생각한 임차인입니다. 그런데 보증금을 지키기 어려운 사정이 생겨, 결국 그 오피스텔을 제가 직접 매수해 소유권이전등기까지 마치게 됐어요. 그 사이 임대인이 받았던 전세금안심대출 관련 보증약관에서는 \'임차인이 대항력과 우선변제권을 상실하면 보증회사가 면책된다\'는 조항이 문제가 됐는데, 제가 임차주택을 양수해 소유자가 되면 임차인으로서의 대항력·우선변제권이 사라진다는 말을 들어 더 혼란스럽습니다. 소유권을 가졌으니 임차인 권리는 어떻게 되는지, 보증금은 어떤 순서로 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 대항력을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 제3조 제1항의 주민등록은 제3자가 임차권 존재를 인식할 수 있는 공시방법으로 마련된 것이어서 그 점유관계가 임차권을 매개로 한 점유임을 인식할 수 있는 정도여야 하고, 주택 인도·주민등록이라는 대항요건은 취득 시뿐 아니라 유지하기 위해서도 계속 존속해야 하므로 대항력을 갖춘 임차인이 그 임차주택을 양수해 소유자가 되면 소유권이전등기 이후 그 주민등록은 유효한 공시방법이 될 수 없어 대항력은 소유권 취득 시 소멸한다고 보는 본 사례 흐름이 있는 영역입니다. 오피스텔 + 임차인 매수 + 보증 면책 결합은 \'대항요건 존속·대항력 상실 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 대항요건 존속 ③ 소유권 취득 효과 ④ 보증·면책 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 존속 ③ 소유 ④ 면책 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 오피스텔 불법개조 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항요건 존속·소유권 취득 효과·보증/면책·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부·근저당·확정일자·전입, 소유권 변동 시점 확인.</li>\n<li><strong>② 대항요건 존속</strong> — 인도·주민등록이 대항력 유지를 위해 계속 존속하는지 정리.</li>\n<li><strong>③ 소유권 취득 효과</strong> — 임차주택을 양수해 소유자가 된 경우 대항력 소멸 여부 정리.</li>\n<li><strong>④ 보증·면책</strong> — 전세대출 보증약관 면책사유와 그 효력 정리.</li>\n<li><strong>⑤ 회수</strong> — 소유권·근저당·잔여 권리 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항요건인 인도·주민등록은 유지를 위해서도 계속 존속해야 하므로, 대항력을 갖춘 임차인이 임차주택을 양수해 소유자가 되면 소유권이전등기 이후 그 주민등록은 유효한 공시방법이 될 수 없어 대항력이 소유권 취득 시 소멸하는 영역. 권리 변동 시점과 보증약관·면책 효력을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·HUG·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계·시점 확인 (즉시)</strong> — 등기부·근저당, 확정일자·전입, 소유권 취득 시점 점검.</li>\n<li><strong>2단계 — 대항요건 존속 점검 (수일 내)</strong> — 인도·주민등록 존속 여부, 소유권 취득과의 관계 정리.</li>\n<li><strong>3단계 — 보증·면책 효력 점검 (가능한 빨리)</strong> — 전세대출 보증약관 면책사유와 그 효력 확인.</li>\n<li><strong>4단계 — 권리·회수 정리 (병행)</strong> — 소유권·근저당·잔여 권리 등 회수 가능 경로 정리.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 미회수 잔액 처리, 관련 소송·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">오피스텔 불법개조 전세사기 대항력 상실 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·보증/면책 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (소유권 변동·근저당)</strong></li>\n<li><strong>소유권이전등기·매매 관련 자료 (취득 시점)</strong></li>\n<li><strong>전세금안심대출·보증약관 자료 (면책사유)</strong></li>\n<li><strong>오피스텔 용도·불법개조 관련 자료 (주거용 여부)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대항요건인 인도·주민등록은 유지를 위해서도 존속해야 하므로, 대항력을 갖춘 임차인이 그 임차주택을 양수해 소유자가 되면 소유권이전등기 이후 임차인 주민등록은 유효한 공시방법이 되지 못해 대항력이 소멸할 수 있다는 점을 권리 변동 시점과 함께 정리해두는 것이 중요합니다. 전세대출 보증약관의 면책사유와 효력, 오피스텔 용도·개조 관련 자료도 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 존속</strong> — 인도·주민등록이 유지를 위해서도 존속하는지.</li>\n<li><strong>소유권 취득 효과</strong> — 임차주택을 양수하면 대항력이 소멸하는지.</li>\n<li><strong>공시방법</strong> — 소유권 취득 후 주민등록이 유효한 공시방법인지.</li>\n<li><strong>보증·면책</strong> — 보증약관 면책사유와 그 효력.</li>\n<li><strong>잔여 권리</strong> — 소유권·근저당 등 회수 가능 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차주택 양수와 대항력·우선변제권 상실',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항의 주민등록은 제3자가 임차권 존재를 인식할 수 있게 하는 공시방법이어서 그 점유관계가 임차권을 매개로 한 점유임을 인식할 수 있는 정도여야 하고, 주택 인도·주민등록이라는 대항요건은 취득 시뿐 아니라 유지하기 위해서도 계속 존속해야 하므로 대항력을 갖춘 임차인이 그 임차주택을 양수해 소유자가 된 경우 소유권이전등기 이후 그 주민등록은 대항력 인정요건이 되는 유효한 공시방법이 될 수 없어 대항력은 소유권 취득 시 소멸한다고 보고, 임차인이 임차주택을 매수해 소유권을 취득해 대항력·우선변제권을 상실했으므로 보증약관에 따라 보증공사가 면책됐다고 본 원심에 법리오해의 잘못이 없다고 판시했습니다. 오피스텔 불법개조 전세사기 사안에서도 대항요건 존속과 대항력 상실을 검토해볼 수 있습니다.',
        takeaway: '오피스텔 + 임차인 매수 + 보증 면책 결합 시 대항요건 존속·대항력 상실 평가 검토 영역 — 권리 변동 시점·소유권 취득·보증약관 면책 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임차한 집을 제가 매수하면 임차인 권리는 어떻게 되나요?',
        answer:
          '<strong>소유자가 되면 대항력이 소유권 취득 시 소멸할 수 있는 영역입니다.</strong> 권리 변동 시점·등기 자료를 확인.',
      },
      {
        question: '전입을 유지했는데도 대항력이 사라지나요?',
        answer:
          '<strong>소유권 취득 후 주민등록은 임차권 공시방법이 되지 못할 수 있는 영역입니다.</strong> 소유권 취득과의 관계를 정리.',
      },
      {
        question: '전세대출 보증이 면책되면 어떻게 되나요?',
        answer:
          '<strong>대항력·우선변제권 상실이 면책사유면 보증이 면책될 수 있는 영역입니다.</strong> 보증약관 면책사유를 확인.',
      },
      {
        question: '오피스텔이 불법개조면 권리에 영향이 있나요?',
        answer:
          '<strong>용도·개조 여부가 권리관계 판단에 영향을 줄 수 있는 영역입니다.</strong> 오피스텔 용도·개조 자료를 확보.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 대항력·보증·회수 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '임차주택 양수·대항력 소멸', href: '/guide/jeonse-fraud/jeonse-fraud-tenant-purchase-power-loss' },
      { label: '전세대출 보증·면책', href: '/guide/jeonse-fraud/jeonse-fraud-loan-guarantee-discharge' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 9. jeonse-fraud-corporate-landlord-bankruptcy-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-corporate-landlord-bankruptcy-track',
    keyword: '법인 임대인 파산 전세사기',
    questionKeyword: '공인중개사 중개로 다가구주택에 전세로 들어왔는데, 법인 임대인이 파산하고 집이 경매로 넘어가 선순위 임차인들이 다 받아가는 바람에 저는 한 푼도 못 받았어요. 중개사가 선순위 보증금이 얼마인지 제대로 확인·설명하지 않은 책임을 물을 수 있는지 막막합니다.',
    ctaKeyword: '법인 임대인 파산 전세사기 중개사 책임 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '다가구주택 전세사기 — 5단계 중개사 책임 점검 | 로앤가이드',
      description:
        '다가구주택 전세에서 선순위에 밀려 한 푼도 못 받았다면 공인중개사법 제30조 중개사 선순위 설명의무와 배상책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공인중개사의 중개로 다가구주택의 한 호실에 전세로 들어온 임차인입니다. 그런데 임대인(법인)이 보증금을 돌려주지 못한 채 파산하고 집이 경매로 넘어갔는데, 저보다 먼저 대항력·확정일자를 갖춘 선순위 임차인들의 보증금이 워낙 많아 경매 배당에서 선순위 채권자들이 다 받아가고 저는 한 푼도 배당받지 못했어요. 계약할 때 중개사는 \'임대인이 자료 제출을 거부해 선순위가 다수 있다\'는 정도만 구두로 말했을 뿐, 선순위 임대차보증금이 실제로 얼마나 되는지 조사·확인해 제대로 설명해주지 않았습니다. 다가구주택 특성상 선순위 보증금 규모가 보증금 회수에 결정적인데, 이를 확인·설명하지 않은 중개사에게 책임을 물어 손해를 회복할 수 있는지, 어떤 순서로 정리해야 하는지 막막한 상태입니다." 공인중개사법 제25조는 중개대상물 확인·설명의무를, 제29조 제1항은 신의·성실 공정 중개 의무를, 제30조는 중개사의 손해배상책임을 정하는 영역입니다. 판례·실무는 개업공인중개사는 다가구주택 일부에 대한 임대차를 중개할 때 선량한 관리자의 주의로 다른 임차인의 보증금·기간 등 자료를 요구·확인해 설명하고 확인·설명서에 기재할 의무가 있으며, 임대인이 자료 제공을 거부하더라도 규모·세대수·시세 등에 비춰 선순위 임대차보증금채권이 얼마나 있을 수 있는지 조사·확인해 성실히 설명해야 하고, 고의·과실로 이를 위반해 손해를 입혔다면 배상책임을 부담한다고 보는 본 사례 흐름이 있는 영역입니다. 다가구주택 + 선순위 미설명 + 배당 미수령 결합은 \'중개사 설명의무·배상책임 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리·배당 ② 선순위 규모 ③ 설명의무 위반 ④ 배상책임 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 배당 ② 선순위 ③ 설명 ④ 배상 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 법인 임대인 파산 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리/배당·선순위 규모·설명의무 위반·배상책임·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·배당</strong> — 등기부·확정일자·전입, 경매 배당표와 미수령 잔액 확인.</li>\n<li><strong>② 선순위 규모</strong> — 다른 임차인 보증금 등 선순위 임대차보증금채권 규모 정리.</li>\n<li><strong>③ 설명의무 위반</strong> — 중개사가 선순위를 조사·확인해 설명·기재했는지 정리.</li>\n<li><strong>④ 배상책임</strong> — 고의·과실 위반과 손해 발생의 인과관계 정리.</li>\n<li><strong>⑤ 회수</strong> — 중개사·공제·임대인 등에 대한 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개업공인중개사는 다가구주택 임대차를 중개할 때 선순위 임대차보증금채권 규모를 조사·확인해 성실히 설명하고 확인·설명서에 기재할 의무가 있고, 임대인이 자료 제공을 거부해도 규모·세대수·시세로 확인 가능한 정도는 설명해야 하며, 이를 위반해 손해를 입혔다면 배상책임을 부담할 여지가 있는 영역. 설명·기재 내용과 선순위 규모를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·배당 자료 확인 (즉시)</strong> — 등기부·확정일자·전입, 경매 배당표·미수령 잔액 점검.</li>\n<li><strong>2단계 — 선순위 규모 정리 (수일 내)</strong> — 다른 임차인 보증금 등 선순위 임대차보증금채권 규모 확인.</li>\n<li><strong>3단계 — 설명의무 위반 정리 (가능한 빨리)</strong> — 확인·설명서 기재 내용, 구두 설명 정도와 조사·확인 여부 점검.</li>\n<li><strong>4단계 — 배상책임·청구 정리 (병행)</strong> — 고의·과실, 손해 인과관계, 중개사·공제 청구 검토.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 미회수 잔액 처리, 손해배상·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">법인 임대인 파산 전세사기 중개사 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리·배당·설명의무·배상책임 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>중개대상물 확인·설명서 (권리관계·선순위 기재)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·소유관계)</strong></li>\n<li><strong>경매 배당표·배당요구 자료 (미수령 잔액)</strong></li>\n<li><strong>선순위 임대차보증금채권 규모 자료 (다른 임차인)</strong></li>\n<li><strong>중개사 공제증서·임대인 파산 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다가구주택 중개에서는 선순위 임대차보증금채권 규모가 보증금 회수에 결정적이므로, 중개대상물 확인·설명서에 선순위가 어떻게 기재됐는지와 중개사가 실제로 조사·확인해 설명했는지를 정리해두는 것이 핵심입니다. 임대인이 자료 제공을 거부했더라도 규모·세대수·시세로 확인 가능한 정도는 설명할 의무가 있으므로, 확인·설명서·배당표·공제증서를 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>설명의무 위반</strong> — 선순위를 조사·확인해 설명·기재했는지.</li>\n<li><strong>자료 거부 시 의무</strong> — 임대인이 자료를 거부해도 확인 가능한 정도를 설명했는지.</li>\n<li><strong>배상책임</strong> — 고의·과실과 손해의 인과관계가 인정되는지.</li>\n<li><strong>선순위 규모</strong> — 다른 임차인 보증금 등 선순위 규모.</li>\n<li><strong>회수 경로</strong> — 중개사·공제·임대인에 대한 회수.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 중개사의 선순위 설명의무와 배상책임',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 개업공인중개사는 다가구주택 일부에 대한 임대차를 중개할 때 임차의뢰인이 보증금을 제대로 반환받을 수 있는지 판단하는 데 필요한 권리관계 자료를 성실·정확하게 제공할 의무를 부담하므로 등기부상 권리관계 확인에 그치지 않고 다른 임차인의 보증금·기간 등 자료를 요구·확인해 설명하고 확인·설명서에 기재해야 하며, 임대인이 자료 제공을 거부하더라도 규모·세대수·시세 등에 비춰 선순위 임대차보증금채권이 얼마나 있을 수 있는지 정도는 확인할 수 있으므로 이를 조사·확인해 설명할 의무가 있다고 보아, 확인·설명서에 \'임대인의 자료 제출 불응으로 선순위 다수 있음을 구두로 설명함\'이라고만 기재한 중개사가 선량한 관리자의 주의의무를 다했다고 볼 수 없다고 판시했습니다. 법인 임대인 파산 전세사기 사안에서도 중개사 설명의무와 배상책임을 검토해볼 수 있습니다.',
        takeaway: '다가구주택 + 선순위 미설명 + 배당 미수령 결합 시 중개사 설명의무·배상책임 평가 검토 영역 — 확인·설명서·선순위 규모·배당표·공제증서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '선순위에 밀려 한 푼도 못 받았는데 중개사 책임을 물을 수 있나요?',
        answer:
          '<strong>선순위를 조사·확인해 설명하지 않은 위반이 손해로 이어졌다면 배상책임을 물을 여지가 있는 영역입니다.</strong> 확인·설명서·배당표를 정리.',
      },
      {
        question: '임대인이 자료를 안 줬다면 중개사 책임이 없나요?',
        answer:
          '<strong>자료를 거부해도 규모·세대수·시세로 확인 가능한 정도는 설명할 의무가 있는 영역입니다.</strong> 설명·기재 내용을 점검.',
      },
      {
        question: '구두로 선순위가 있다고만 했으면 충분한가요?',
        answer:
          '<strong>구두 언급만으로는 조사·확인 설명의무를 다했다고 보기 어려울 수 있는 영역입니다.</strong> 확인·설명서 기재 내용을 확보.',
      },
      {
        question: '중개사에게는 어떻게 청구하나요?',
        answer:
          '<strong>중개사·공제를 상대로 손해배상을 청구할 수 있는 영역입니다.</strong> 공제증서·손해 인과관계 자료를 정리.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 중개사 책임·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '중개사 설명의무·배상책임', href: '/guide/jeonse-fraud/jeonse-fraud-broker-duty-liability' },
      { label: '다가구주택 선순위 보증금', href: '/guide/jeonse-fraud/jeonse-fraud-multi-household-priority' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '임대인 파산·면책과 보증금', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-discharge-deposit' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 10. jeonse-fraud-deposit-loan-bank-collusion-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-deposit-loan-bank-collusion-track',
    keyword: '전세대출 명의 전세사기',
    questionKeyword: '전세대출을 끼고 들어온 집에서 보증금을 못 받아 임차권등기명령을 받아두고 시간이 꽤 흘렀어요. 임차권등기를 해두면 시효가 멈춘 줄 알았는데, 그것만으로는 소멸시효가 중단되지 않는다는 말을 들었어요. 그렇다면 보증금반환채권 시효는 어떻게 지켜야 하는지 막막합니다.',
    ctaKeyword: '전세대출 명의 전세사기 임차권등기 시효 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세대출 전세사기 — 5단계 임차권등기·시효 점검 | 로앤가이드',
      description:
        '임차권등기만 해두면 보증금 시효가 멈춘 줄 알았다면 주택임대차보호법 제3조의3 임차권등기의 담보기능과 소멸시효 중단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세대출을 끼고 들어온 집에서 계약이 끝났는데도 보증금을 돌려받지 못해, 이사 전에 주택임대차보호법상 임차권등기명령을 받아 임차권등기를 해두고 그 뒤로 시간이 꽤 흐른 임차인입니다. 임차권등기를 마쳐두면 대항력·우선변제권이 유지될 뿐 아니라 보증금반환채권의 소멸시효까지 멈추는 줄로만 알고 별다른 조치 없이 기다려왔어요. 그런데 임차권등기는 압류·가압류·가처분과 달라서 그것만으로는 소멸시효가 중단되지 않는다는 말을 듣고 깜짝 놀랐습니다. 그렇다면 시효가 지나기 전에 보증금반환채권을 지키려면 어떤 조치를 어떤 순서로 해야 하는지, 임차권등기는 그럼 무슨 의미가 있는지 막막한 상태입니다." 주택임대차보호법 제3조의3은 임차권등기명령에 따른 임차권등기를, 같은 법 제3조의2는 우선변제권을, 민법 제168조는 소멸시효 중단사유(청구·압류·가압류·가처분·승인)를 정하는 영역입니다. 판례·실무는 임차권등기명령에 따른 임차권등기는 특정 목적물에 대한 집행·보전처분과 달리 임차인의 대항력·우선변제권을 취득·유지하게 하는 담보적 기능을 주목적으로 하므로, 가압류에 관한 절차규정을 일부 준용하더라도 이를 이유로 본래의 담보적 기능을 넘어 강제집행 보전 처분의 성질을 가진다고 볼 수 없어 민법 제168조 제2호의 압류·가압류·가처분에 준하는 소멸시효 중단 효력이 있다고 볼 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 전세대출 + 임차권등기 + 시효 결합은 \'임차권등기 담보기능·시효 중단\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리·시효 ② 임차권등기 효력 ③ 시효 중단 조치 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 시효 ② 등기 ③ 중단 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전세대출 명의 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리/시효·임차권등기 효력·시효 중단 조치·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·시효</strong> — 보증금반환채권의 발생·기산점과 소멸시효 진행 상황 확인.</li>\n<li><strong>② 임차권등기 효력</strong> — 임차권등기의 담보적 기능과 시효 중단 효력 유무 정리.</li>\n<li><strong>③ 시효 중단 조치</strong> — 재판상 청구·지급명령·가압류 등 별도 중단 조치 정리.</li>\n<li><strong>④ 회수</strong> — 경매 배당요구·보증금반환소송 등 회수 경로 정리.</li>\n<li><strong>⑤ 대응</strong> — 시효 도과 방지와 권리 행사 순서 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차권등기명령에 따른 임차권등기는 대항력·우선변제권을 유지하는 담보적 기능이 주목적이어서 압류·가압류·가처분에 준하는 소멸시효 중단 효력은 인정되지 않는 영역. 임차권등기와 별도로 재판상 청구·지급명령 등으로 시효를 중단시켜 보증금반환채권을 지키는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·시효 확인 (즉시)</strong> — 보증금반환채권 기산점, 소멸시효 진행과 임박 여부 점검.</li>\n<li><strong>2단계 — 임차권등기 효력 점검 (수일 내)</strong> — 임차권등기의 담보적 기능과 시효 중단 효력 유무 정리.</li>\n<li><strong>3단계 — 시효 중단 조치 (시효 임박 전)</strong> — 재판상 청구·지급명령·가압류 등으로 시효 중단.</li>\n<li><strong>4단계 — 배당요구·회수 (종기 내/병행)</strong> — 경매 배당요구, 보증금반환소송·집행 검토.</li>\n<li><strong>5단계 — 잔액 회수·지원 (병행)</strong> — 미회수 잔액 처리, 전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전세대출 명의 전세사기 임차권등기·시효 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리·시효·임차권등기 효력 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>임차권등기명령 결정문·완료 등기부 (등기 효력)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>보증금 반환 요구·내용증명 기록 (시효 관련)</strong></li>\n<li><strong>재판상 청구·지급명령·가압류 자료 (시효 중단)</strong></li>\n<li><strong>전세대출·보증 관련 자료 (권리관계)</strong></li>\n<li><strong>경매 배당표·배당요구 자료 (회수)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차권등기는 대항력·우선변제권을 유지하는 담보적 기능이 주목적이어서 그것만으로는 소멸시효가 중단되지 않으므로, 보증금반환채권의 기산점과 시효 진행 상황을 확인하고 재판상 청구·지급명령·가압류 등 별도의 시효 중단 조치를 함께 점검해두는 것이 핵심입니다. 임차권등기 결정문·등기부와 내용증명·청구 자료를 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임차권등기 효력</strong> — 임차권등기에 소멸시효 중단 효력이 있는지.</li>\n<li><strong>담보적 기능</strong> — 임차권등기가 담보적 기능을 주목적으로 하는지.</li>\n<li><strong>시효 중단 조치</strong> — 재판상 청구·지급명령·가압류 등 별도 조치 여부.</li>\n<li><strong>시효 기산·도과</strong> — 보증금반환채권의 기산점과 시효 임박 여부.</li>\n<li><strong>회수 경로</strong> — 배당요구·반환소송 등 회수 순서.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기의 담보적 기능과 소멸시효 중단 효력',
        summary:
          '대법원 2017다226629(대법원, 2019.05.16 선고) 영역에서 법원은 주택임대차보호법 제3조의3의 임차권등기명령에 따른 임차권등기는 특정 목적물에 대한 구체적 집행행위나 보전처분의 실행을 내용으로 하는 압류·가압류·가처분과 달리 주택임차인이 대항력·우선변제권을 취득하거나 이미 취득한 대항력·우선변제권을 유지하도록 해 주는 담보적 기능을 주목적으로 하므로, 주택임대차보호법이 임차권등기명령의 재판·집행에 가압류에 관한 절차규정을 일부 준용하더라도 이는 절차가 비슷한 데서 비롯된 것일 뿐 이를 이유로 임차권등기가 본래의 담보적 기능을 넘어 강제집행 보전 처분의 성질을 가진다고 볼 수 없어, 임차권등기에는 민법 제168조 제2호의 소멸시효 중단사유인 압류·가압류·가처분에 준하는 효력이 있다고 볼 수 없다고 판시했습니다. 전세대출 명의 전세사기 사안에서도 임차권등기의 담보적 기능과 시효 중단을 검토해볼 수 있습니다.',
        takeaway: '전세대출 + 임차권등기 + 시효 결합 시 임차권등기 담보기능·시효 중단 평가 검토 영역 — 시효 기산점·등기 효력·재판상 청구 등 중단 조치 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임차권등기를 해두면 보증금 시효가 멈추나요?',
        answer:
          '<strong>임차권등기만으로는 소멸시효가 중단되지 않을 수 있는 영역입니다.</strong> 시효 기산점과 별도 중단 조치를 점검.',
      },
      {
        question: '임차권등기는 그럼 무슨 의미가 있나요?',
        answer:
          '<strong>대항력·우선변제권을 취득·유지하게 하는 담보적 기능이 주목적인 영역입니다.</strong> 등기 효력과 권리 유지 여부를 확인.',
      },
      {
        question: '시효를 멈추려면 무엇을 해야 하나요?',
        answer:
          '<strong>재판상 청구·지급명령·가압류 등 별도 조치로 시효를 중단시키는 영역입니다.</strong> 시효 임박 전 청구 자료를 준비.',
      },
      {
        question: '시간이 많이 흘렀는데 늦은 건 아닐까요?',
        answer:
          '<strong>기산점·중단 사유에 따라 시효 진행이 달라질 수 있는 영역입니다.</strong> 보증금반환채권 기산점부터 확인.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 임차권등기·시효·회수 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '임차권등기명령 신청', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-order' },
      { label: '보증금반환채권 소멸시효', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-claim-prescription' },
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },
];
