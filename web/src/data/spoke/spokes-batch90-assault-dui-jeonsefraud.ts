import { SpokePage } from '../spoke-pages';

// batch90 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-07)
//
// 고유 존재 이유:
// 1. assault-highway-road-rage-stop-track — 고속도로 보복 정차 폭행에서 직접 신체 접촉이 없어도 유형력 행사가 폭행으로 평가되는지 다투는 피해자 판단형 트랙. 유형력 행사 범위·위협 정황이 핵심.
// 2. assault-neighbor-noise-hallway-track — 복도 소음 시비 폭행에서 면전 폭언·모욕과 폭행 성립을 함께 다투는 피해자 판단형 트랙. 면전 모욕 공연성 불요·폭행 경계가 핵심.
// 3. assault-delivery-rider-dispute-track — 배달기사 시비 폭행에서 폭행·협박 정도와 상해 인정을 다투는 피해자 절차형 트랙. 폭행 정도 판단기준·고소 절차가 핵심.
// 4. assault-sports-game-tackle-injury-track — 운동경기 태클 상해에서 사회상규상 용인되는 정당행위의 한계를 다투는 피해자 판단형 트랙. 경기 규칙 일탈·과도한 유형력이 핵심.
// 5. dui-personal-mobility-pm-track — 개인형이동장치 음주운전에서 운전 종료 후 시간경과 측정치의 운전 당시 초과 증명을 다투는 accused 판단형 트랙. 상승·하강기·근소 초과가 핵심.
// 6. dui-private-parking-lot-track — 주차장 음주운전에서 위드마크 공식 적용의 엄격한 증명을 다투는 accused 판단형 트랙. 전제사실 엄격증명·유리한 통계 대입이 핵심.
// 7. dui-test-refusal-after-accident-track — 사고 후 음주측정 거부에서 가중처벌 조항 위헌 관련 적용·공소장 변경을 다투는 accused 절차형 트랙. 측정거부 성립·행정 90일 트랙이 핵심.
// 8. jeonse-fraud-multifamily-prior-tenant-deposit-track — 다가구 선순위 임차보증금 전세사기에서 임대차의 주된 목적이 채권회수일 때 대항력 부정을 다투는 피해자 판단형 트랙. 사용·수익 목적·대항력이 핵심.
// 9. jeonse-fraud-trust-registered-property-track — 신탁등기·공동저당 주택 전세사기에서 다세대 중개사의 선순위 확인·설명의무를 다투는 피해자 판단형 트랙. 경매대가·선순위 설명·배상책임이 핵심.
// 10. jeonse-fraud-fake-agent-impersonation-track — 가짜 중개인 전세사기에서 채무인수 법적성격 설명의무의 한계를 다투는 피해자 절차형 트랙. 중개행위·법률사무 구별·주의의무가 핵심.

export const spokesBatch90AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-highway-road-rage-stop-track ───
  {
    domain: 'assault',
    slug: 'assault-highway-road-rage-stop-track',
    keyword: '고속도로 보복 정차 폭행',
    questionKeyword: '고속도로에서 시비가 붙은 상대 차가 제 앞에 갑자기 보복 정차를 하더니 내려와 차창을 두드리고 멱살을 잡으며 위협하고 밀쳤어요. 직접 세게 때린 건 아니라며 폭행이 아니라고 우기는데, 이런 위협·밀침도 폭행으로 다툴 수 있는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '고속도로 보복 정차 폭행 유형력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '고속도로 보복 정차 폭행 — 5단계 유형력 점검 | 로앤가이드',
      description:
        '고속도로 보복 정차로 위협·폭행당해 막막하다면 형법 제260조 폭행의 유형력 행사 범위와 진단·고소·형사·민사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로·자동차전용도로에서 사소한 진로 변경 문제로 시비가 붙었는데, 상대 차량이 제 앞에 끼어들어 급제동·보복 정차를 한 뒤 내려와 차창을 두드리고 문을 열려 하거나 멱살을 잡고 밀치며 위협한 피해자입니다. 상대는 \'손으로 세게 때린 것도 아닌데 무슨 폭행이냐, 그냥 항의한 것뿐이다\'라며 발뺌하는데, 차창을 두드리고 멱살을 잡거나 밀치는 행위, 위협적으로 다가서는 행위도 폭행으로 평가될 수 있는지 헷갈립니다. 반드시 몸을 직접 가격해야만 폭행이 되는 건지, 위협·밀침 정도로도 다툴 수 있는지, 어디부터 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를, 같은 법 제257조 제1항은 상해한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 폭행죄에서 말하는 \'폭행\'은 사람의 신체에 대한 유형력의 행사를 의미하고, 반드시 신체에 직접 닿는 가격에 한정되지 않으며 사람에 대한 유형력 행사로 족하다고 보아, 위협·밀침·멱살잡기 등도 정황에 따라 폭행으로 평가될 여지가 있다고 보는 본 사례 흐름이 있는 영역입니다. 고속도로 + 보복 정차 + 위협·밀침 결합은 \'유형력 행사 범위·폭행 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 유형력 행사 ② 위협 정황 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 유형력 ② 정황 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 고속도로 보복 정차 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 유형력 행사·위협 정황·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유형력 행사</strong> — 차창 두드림·멱살잡기·밀침 등 신체에 대한 유형력 정황 정리.</li>\n<li><strong>② 위협 정황</strong> — 보복 정차·하차·접근 등 위협 경위와 위험성 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·협박(제283조)·상해(제257조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행은 사람의 신체에 대한 유형력 행사로 족하고 반드시 직접 가격에 한정되지 않으므로, 멱살잡기·밀침·차창 두드림 같은 행위도 정황에 따라 폭행으로 평가될 여지가 있는 영역. 보복 정차부터 하차·위협까지의 흐름을 블랙박스·영상으로 시간순으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·증거 확보 (즉시~당일)</strong> — 블랙박스·휴대폰 영상, 다친 부위 사진과 진료·진단서 확보.</li>\n<li><strong>2단계 — 유형력·위협 정리 (수일 내)</strong> — 보복 정차·하차·멱살잡기·밀침 등 유형력과 위협 경위 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 차량번호·정황 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·블랙박스·도로 CCTV 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">고속도로 보복 정차 폭행 유형력·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 유형력·위협 정황·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>차량 블랙박스 영상 (보복 정차·하차·위협 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (멱살잡기·밀침·폭언)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위·차량 손상 사진 (시간정보 포함)</strong></li>\n<li><strong>보복 정차·시비 경위 기록 (육하원칙)</strong></li>\n<li><strong>상대 차량번호·인상착의 메모</strong></li>\n<li><strong>동승자·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 세게 때리지 않았더라도 멱살잡기·밀침·차창 두드림 등 신체에 대한 유형력이 있었다면 폭행으로 평가될 여지가 있으므로, 보복 정차부터 하차·위협까지의 흐름을 블랙박스·휴대폰 영상으로 구체적으로 정리해두는 것이 도움이 됩니다. 고속도로 도로 CCTV는 보관 기간이 짧을 수 있어 차량번호와 함께 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유형력 행사</strong> — 멱살잡기·밀침 등이 폭행의 유형력에 해당하는지.</li>\n<li><strong>직접 가격 요부</strong> — 신체에 직접 닿지 않아도 폭행으로 인정되는지.</li>\n<li><strong>위협·협박 경계</strong> — 보복 정차·접근이 협박으로도 평가되는지.</li>\n<li><strong>쌍방 여부</strong> — 진로 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행의 \'유형력 행사\' 의미와 직접 가격 요부',
        summary:
          '대법원 2017도21537(대법원, 2018.03.29 선고) 영역에서 법원은 폭행이란 사람에 대한 유형력의 행사로 족하고 반드시 그 신체에 대한 것임을 요하지 아니하며, 해당 죄는 추상적 위험범으로서 구체적으로 방해라는 결과 발생까지 요구되지 않는다고 보아, 주차문제로 언쟁을 벌이던 중 출동한 경찰관의 가슴을 손으로 밀치고 정강이를 발로 걷어찬 행위가 사람에 대한 유형력의 행사로서 폭행에 해당한다고 본 사안에서, 이와 달리 무죄로 본 원심에 폭행이나 직무집행 등에 관한 법리오해의 잘못이 있다고 판시했습니다. 고속도로 보복 정차 폭행 사안에서도 멱살잡기·밀침 등 유형력 행사가 폭행에 해당하는지 검토해볼 수 있습니다.',
        takeaway: '고속도로 + 보복 정차 + 위협·밀침 결합 시 유형력 행사 범위·폭행 평가 검토 영역 — 블랙박스·영상·진단서·정황 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '직접 세게 때리지 않았는데도 폭행이 되나요?',
        answer:
          '<strong>멱살잡기·밀침 등 신체에 대한 유형력 행사면 폭행으로 평가될 여지가 있는 영역입니다.</strong> 유형력 정황을 영상으로 정리.',
      },
      {
        question: '차창을 두드리고 위협한 것만으로도 다툴 수 있나요?',
        answer:
          '<strong>위협·접근 정황은 폭행 또는 협박 쟁점으로 다퉈질 여지가 있는 영역입니다.</strong> 보복 정차·하차 경위를 기록.',
      },
      {
        question: '블랙박스 영상이 꼭 필요한가요?',
        answer:
          '<strong>보복 정차부터 위협까지 흐름을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 휴대폰 영상·도로 CCTV도 함께 확보.',
      },
      {
        question: '진로 시비라며 쌍방으로 몰리면요?',
        answer:
          '<strong>먼저 보복 정차·하차한 쪽과 위협 정도를 영상으로 구분해 다투는 영역입니다.</strong> 차량번호·정황을 확보.',
      },
      {
        question: '상대 차량번호만 알면 신고가 되나요?',
        answer:
          '<strong>차량번호와 정황·영상이 있으면 수사 단서가 되는 영역입니다.</strong> 신고와 함께 도로 CCTV 보존을 요청.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '운전 시비 쌍방 몸싸움 무고 방어', href: '/guide/assault/assault-road-rage-mutual-scuffle-falsely-accused-defense' },
      { label: '폭행 진단서 CCTV 증거 우열 다툼', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '캠핑장 텐트 소음 시비 폭행', href: '/guide/assault/assault-campsite-tent-noise-stranger-victim-track' },
    ],
  },

  // ─── 2. assault-neighbor-noise-hallway-track ───
  {
    domain: 'assault',
    slug: 'assault-neighbor-noise-hallway-track',
    keyword: '복도 소음 시비 폭행',
    questionKeyword: '아파트 복도에서 층간소음 문제로 이웃과 시비가 붙었는데, 상대가 면전에서 욕설과 모욕적인 말을 퍼붓고 어깨를 밀치며 때렸어요. 다른 사람이 없던 복도라 모욕은 안 된다고 우기는데, 면전 모욕과 폭행을 함께 다툴 수 있는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '복도 소음 시비 폭행·면전 모욕 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '복도 소음 시비 폭행 — 5단계 폭행·모욕 점검 | 로앤가이드',
      description:
        '복도에서 층간소음 시비로 욕설·폭행당했는데 모욕이 안 된다고 우긴다면 형법 제260조 폭행과 면전 모욕 성립 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트·빌라 복도에서 층간소음·통행 문제로 이웃과 시비가 붙었는데, 감정이 격해진 상대가 제 면전에서 큰 소리로 욕설과 모욕적인 말을 퍼붓고 이어 어깨나 가슴을 밀치고 때려 통증이 생긴 피해자입니다. 상대는 \'복도에 다른 사람도 없었으니 모욕죄는 안 된다, 가볍게 민 것뿐이라 폭행도 아니다\'라며 발뺌하는데, 듣는 사람이 따로 없어도 면전에서 한 모욕적 언사가 문제될 수 있는지, 밀치고 때린 행위가 폭행으로 평가되는지 헷갈립니다. 면전 모욕과 폭행을 함께 다툴 수 있는지, 어떤 순서로 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를, 같은 법 제311조는 공연히 사람을 모욕한 경우의 모욕을 규정하는 영역입니다. 판례·실무는 모욕죄가 원칙적으로 공연성을 요구하지만, 면전에서 한 모욕적 언사라도 다른 사정과 결합해 명예감정을 침해할 수 있고, 폭행죄에서 말하는 폭행은 사람의 신체에 대한 유형력의 행사로 족해 밀치거나 가볍게 때리는 행위도 정황에 따라 폭행으로 평가될 여지가 있다고 보는 본 사례 흐름이 있는 영역입니다. 복도 + 소음 시비 + 면전 욕설·밀침 결합은 \'폭행·면전 모욕 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 폭행 유형력 ② 면전 모욕 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 유형력 ② 모욕 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 복도 소음 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭행 유형력·면전 모욕·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭행 유형력</strong> — 어깨·가슴 밀침·구타 등 신체에 대한 유형력 정황 정리.</li>\n<li><strong>② 면전 모욕</strong> — 면전 욕설·모욕적 언사의 내용·정황과 공연성 여부 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·모욕(제311조)·상해(제257조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행은 신체에 대한 유형력 행사로 족하므로 밀치거나 가볍게 때린 행위도 폭행으로 평가될 여지가 있고, 면전 모욕은 공연성 요건과 정황을 함께 살펴 판단하는 영역. 복도에서의 욕설·밀침 흐름을 녹취·영상으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·녹취 확보 (즉시~당일)</strong> — 복도 CCTV·휴대폰 영상·녹취, 다친 부위 사진과 진단서 확보.</li>\n<li><strong>2단계 — 폭행·모욕 정리 (수일 내)</strong> — 밀침·구타 정황과 면전 욕설·모욕적 언사의 내용·정황 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 소음 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·CCTV·녹취 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">복도 소음 시비 폭행·면전 모욕 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 폭행 유형력·면전 모욕·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>복도 CCTV·세대 현관 카메라 영상 (밀침·시비 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (욕설·모욕적 언사)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>층간소음·통행 시비 경위 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>이웃·관리실·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가볍게 밀치거나 때린 행위도 신체에 대한 유형력 행사면 폭행으로 평가될 여지가 있고, 면전 욕설·모욕적 언사는 그 내용·정황과 공연성 여부를 함께 살피므로 복도 CCTV·녹취로 흐름을 정리해두는 것이 도움이 됩니다. 복도·현관 카메라 영상은 보관 기간이 짧을 수 있어 관리실에 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폭행 유형력</strong> — 밀침·가벼운 구타가 폭행으로 인정되는지.</li>\n<li><strong>면전 모욕</strong> — 면전 욕설·모욕적 언사의 성립과 공연성.</li>\n<li><strong>소음 정황</strong> — 층간소음·통행 시비 경위가 어떻게 평가되는지.</li>\n<li><strong>쌍방 여부</strong> — 이웃 다툼이 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면전 모욕의 공연성 요부와 보호법익',
        summary:
          '대법원 2015도11286(대법원, 2015.09.24 선고) 영역에서 법원은 군형법상 상관에 대한 폭행·협박·상해의 죄와 상관모욕죄가 상관의 신체·명예 등 개인적 법익뿐 아니라 조직의 위계질서 유지도 보호법익으로 하는 점 등에 비추어 상관에는 명령복종 관계가 없는 상위 계급자·서열자도 포함되고 상관이 반드시 직무수행 중일 것을 요하지 아니하며, 상관모욕죄를 정한 조항이 별도로 공연한 방법으로 모욕할 것을 요구하지 않으므로 면전에서 모욕한 경우에는 공연성을 갖추지 않더라도 그 모욕죄가 성립한다고 판시했습니다. 복도 소음 시비 폭행 사안에서도 면전에서 한 모욕적 언사의 성립 가능성과 폭행을 함께 검토해볼 수 있습니다.',
        takeaway: '복도 + 소음 시비 + 면전 욕설·밀침 결합 시 폭행·면전 모욕 평가 검토 영역 — CCTV·녹취·진단서·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '듣는 사람이 없었는데도 면전 욕설이 문제되나요?',
        answer:
          '<strong>면전 모욕은 공연성 요건과 정황을 함께 살펴 다퉈질 여지가 있는 영역입니다.</strong> 욕설 내용·정황을 녹취로 정리.',
      },
      {
        question: '가볍게 밀친 것도 폭행이 되나요?',
        answer:
          '<strong>신체에 대한 유형력 행사면 밀침도 폭행으로 평가될 여지가 있는 영역입니다.</strong> 밀침·구타 정황을 영상으로 확보.',
      },
      {
        question: '복도 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>시비·밀침 흐름을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧을 수 있어 관리실에 보존 요청.',
      },
      {
        question: '층간소음 시비라며 쌍방으로 몰리면요?',
        answer:
          '<strong>먼저 욕설·구타한 쪽과 정도를 정황·영상으로 구분해 다투는 영역입니다.</strong> CCTV·목격자 진술을 확보.',
      },
      {
        question: '욕설을 녹음하면 증거가 되나요?',
        answer:
          '<strong>대화 당사자가 녹음한 자료는 정황 증거로 활용될 여지가 있는 영역입니다.</strong> 일시·장소가 드러나게 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '폭행 가해자로 입건됐을 때 첫 대응', href: '/guide/assault/assault-charged-first-response' },
      { label: '공동주택 엘리베이터 폭행 CCTV', href: '/guide/assault/assault-apartment-elevator-cctv-evidence-track' },
      { label: '데이트폭력 신변보호 접근금지', href: '/guide/assault/assault-dating-violence-victim-protection' },
    ],
  },

  // ─── 3. assault-delivery-rider-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-delivery-rider-dispute-track',
    keyword: '배달기사 시비 폭행',
    questionKeyword: '배달 과정에서 주차·통행 문제로 시비가 붙은 상대가 저를 붙잡고 협박하며 밀치고 때려 다쳤어요. 상대는 \'그 정도 실랑이로 무슨 상해냐\'며 협박도 폭행도 아니라고 합니다. 폭행·협박의 정도가 어느 선이면 인정되는지, 어떤 순서로 고소를 준비해야 하는지 막막합니다.',
    ctaKeyword: '배달기사 시비 폭행 정도·고소 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배달기사 시비 폭행 — 5단계 고소·폭행 정도 점검 | 로앤가이드',
      description:
        '배달 중 시비로 협박·폭행당해 막막하다면 형법 제260조 폭행과 폭행·협박 정도 판단기준, 고소 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배달·운송 과정에서 주차나 통행 문제로 시비가 붙었는데, 감정이 격해진 상대가 저를 붙잡거나 헬멧·옷을 잡아채며 협박하고 밀치며 때려 멍과 통증이 생긴 배달기사(피해자)입니다. 상대는 \'잠깐 실랑이한 것뿐인데 무슨 상해냐, 협박한 적도 없다\'며 발뺌하는데, 어느 정도의 폭행·협박이어야 형사적으로 인정되는지, 가벼운 실랑이로 보이는 행위도 폭행·상해로 다툴 수 있는지 헷갈립니다. 일하다 당한 일이라 더 막막한데, 어떤 순서로 신고·고소를 준비하고 증거를 모아야 하는지 정리가 안 됩니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를, 같은 법 제283조 제1항은 협박을 규정하는 영역입니다. 판례·실무는 폭행·협박이 형사적으로 문제되는 정도에 이르렀는지는 행위의 태양·강도, 당사자의 관계, 행위 전후의 정황 등을 종합해 판단하고, 특히 피해자의 반항을 곤란하게 할 정도였는지와 같은 강도는 구체적 사정을 기준으로 평가해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 배달 시비 + 붙잡음·협박 + 밀침·구타 결합은 \'폭행·협박 정도·상해 인정\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 행위 태양 ② 정도 평가 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 태양 ② 정도 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배달기사 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위 태양·정도 평가·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 태양</strong> — 붙잡음·헬멧/옷 잡아채기·밀침·구타 등 구체적 행위 정리.</li>\n<li><strong>② 정도 평가</strong> — 행위 강도·전후 정황으로 폭행·협박·상해 정도 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·협박(제283조)·상해(제257조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·일실수입·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행·협박이 형사적으로 문제되는 정도인지는 행위 태양·강도와 당사자 관계, 전후 정황을 종합해 판단하는 영역. 붙잡음·협박·밀침·구타의 구체적 행위와 그 강도를 영상·진단서로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 헬멧캠·블랙박스·휴대폰 영상, 병원 진료·상해진단서 확보.</li>\n<li><strong>2단계 — 행위 태양·정도 정리 (수일 내)</strong> — 붙잡음·협박·밀침·구타의 구체적 행위와 강도·전후 정황 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·일실수입·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달기사 시비 폭행 정도·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위 태양·정도·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>헬멧캠·블랙박스·휴대폰 영상 (행위 태양·강도)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위·장비 손상 사진 (시간정보 포함)</strong></li>\n<li><strong>시비 경위·협박 발언 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>배달 기록·근무 일정 (일실수입 산정)</strong></li>\n<li><strong>목격자·동료 기사 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가벼운 실랑이로 보이는 행위라도 붙잡음·밀침·구타가 결합되면 폭행·상해로 평가될 여지가 있고, 협박은 발언 내용·강도와 전후 정황으로 판단되므로 헬멧캠·블랙박스 영상과 진단서로 행위 태양을 구체적으로 정리해두는 것이 도움이 됩니다. 일하다 당한 사안은 일실수입 산정을 위해 배달 기록·근무 일정도 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폭행 정도</strong> — 붙잡음·밀침·구타가 폭행으로 인정되는 강도인지.</li>\n<li><strong>협박 성립</strong> — 협박 발언의 내용·강도가 협박에 해당하는지.</li>\n<li><strong>상해 인정</strong> — 멍·통증이 상해로 평가되는지.</li>\n<li><strong>쌍방 여부</strong> — 통행·주차 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행·협박의 정도 판단 기준',
        summary:
          '대법원 2012도14788(대법원, 2013.05.16 선고) 영역에서 법원은 폭행·협박을 구성요건으로 하는 범죄에서 그 폭행 또는 협박이 피해자의 반항을 불가능하게 하거나 현저히 곤란하게 할 정도에 이른 것인지는 유형력을 행사한 당시의 구체적 상황과 행위의 태양·강도, 당사자의 관계, 행위 전후의 정황 등 모든 사정을 종합해 판단해야 한다고 보아, 폭행·협박의 정도는 일률적으로가 아니라 구체적 사정을 기준으로 평가해야 한다고 판시했습니다. 배달기사 시비 폭행 사안에서도 붙잡음·협박·밀침·구타의 태양과 강도를 기준으로 폭행·협박의 정도와 상해 인정을 검토해볼 수 있습니다.',
        takeaway: '배달 시비 + 붙잡음·협박 + 밀침·구타 결합 시 폭행·협박 정도·상해 인정 검토 영역 — 헬멧캠·영상·진단서·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '잠깐 실랑이한 정도도 폭행으로 다툴 수 있나요?',
        answer:
          '<strong>붙잡음·밀침·구타가 결합되면 폭행·상해로 평가될 여지가 있는 영역입니다.</strong> 행위 태양·강도를 영상으로 정리.',
      },
      {
        question: '협박은 어느 정도여야 인정되나요?',
        answer:
          '<strong>발언 내용·강도와 전후 정황을 종합해 판단하는 영역입니다.</strong> 협박 발언·정황을 녹취·기록으로 확보.',
      },
      {
        question: '헬멧캠 영상이 꼭 필요한가요?',
        answer:
          '<strong>행위 태양과 강도를 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 블랙박스·휴대폰 영상도 함께 확보.',
      },
      {
        question: '일하다 다쳤는데 일실수입도 청구되나요?',
        answer:
          '<strong>치료비 외에 일실수입·위자료도 손해배상으로 검토되는 영역입니다.</strong> 배달 기록·근무 일정을 정리.',
      },
      {
        question: '주차·통행 시비라며 쌍방으로 몰리면요?',
        answer:
          '<strong>먼저 가해한 쪽과 행위 강도를 영상·진단서로 구분해 다투는 영역입니다.</strong> 목격자·동료 진술을 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '폭행 합의금 산정 피해 정도 전과 재범', href: '/guide/assault/assault-settlement-amount-factors-prior-record-injury-degree' },
      { label: '헬스장 기구 사용 시비 폭행 상해 신고', href: '/guide/assault/assault-gym-equipment-use-dispute-injury-report-track' },
      { label: '폭행 진단서 CCTV 증거 우열 다툼', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '배달 라이더 손님 폭행', href: '/guide/assault/assault-delivery-rider-customer-doorstep-victim-track' },
    ],
  },

  // ─── 4. assault-sports-game-tackle-injury-track ───
  {
    domain: 'assault',
    slug: 'assault-sports-game-tackle-injury-track',
    keyword: '운동경기 태클 상해',
    questionKeyword: '아마추어 축구·풋살 경기 중 상대가 공과 무관하게 뒤늦게 거친 태클을 걸어 제 다리가 부러졌어요. 상대는 \'운동하다 그럴 수 있는 일\'이라며 책임을 피하는데, 경기 중 부상이라도 도를 넘은 태클이면 상해로 다툴 수 있는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '운동경기 태클 상해 정당행위 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '운동경기 태클 상해 — 5단계 정당행위 한계 점검 | 로앤가이드',
      description:
        '운동경기 중 거친 태클로 다쳤는데 상대가 책임을 피한다면 형법 제257조 상해와 사회상규상 정당행위의 한계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아마추어 축구·풋살·농구 등 운동경기를 하던 중, 상대 선수가 공과는 거의 무관하게 뒤늦게 거칠고 위험한 태클이나 가격을 해 제 다리가 부러지거나 인대가 끊기는 등 큰 부상을 입은 피해자입니다. 상대는 \'운동하다 보면 다칠 수도 있는 것 아니냐, 고의도 아니었다\'며 책임을 피하는데, 경기 중에 생긴 부상이라면 무조건 정당행위로 봐서 책임을 물을 수 없는 건지, 아니면 통상의 경기 방식과 규칙을 벗어난 위험한 행위면 상해로 다툴 수 있는지 헷갈립니다. 어디까지가 운동 중 허용되는 충돌이고 어디부터 책임을 물을 수 있는지, 어떤 순서로 정리해야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제20조는 법령·업무로 인한 행위나 사회상규에 위배되지 않는 정당행위를 규정하는 영역입니다. 판례·실무는 어떤 행위가 정당행위로 인정되려면 목적·수단의 정당성과 상당성 등을 갖춰야 하고, 외형상 정당한 활동의 일환처럼 보여도 그 통상적인 방식과 정도를 벗어나 과도한 유형력을 행사해 상해를 입힌 경우라면 사회상규상 용인되는 정당행위로 볼 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 운동경기 + 거친 태클 + 골절·상해 결합은 \'정당행위 한계·상해 인정\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 규칙 일탈 ② 위험성·고의 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 일탈 ② 위험성 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 운동경기 태클 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 규칙 일탈·위험성/고의·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 규칙 일탈</strong> — 공과의 관련성·태클 시점 등 통상 경기 방식·규칙 일탈 여부 정리.</li>\n<li><strong>② 위험성·고의</strong> — 행위의 위험성·과도한 유형력과 고의·중과실 정황 정리.</li>\n<li><strong>③ 고소</strong> — 상해(형법 제257조)·과실치상(제266조) 등 고소·고발 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·일실수입·위자료 손해배상 또는 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경기 중 부상이라도 통상의 경기 방식과 규칙을 벗어나 과도한 유형력을 행사해 상해를 입힌 경우라면 사회상규상 용인되는 정당행위로 보기 어려운 영역. 공과의 관련성·태클 시점·위험성 등 규칙 일탈 정황을 영상·진단서로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 경기 촬영 영상·CCTV, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 규칙 일탈·위험성 정리 (수일 내)</strong> — 공과의 관련성·태클 시점·위험성과 고의·중과실 정황 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 경기 정황 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·경기 영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·일실수입·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">운동경기 태클 상해 정당행위 한계 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 규칙 일탈·위험성·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>경기 촬영 영상·구장 CCTV (태클 시점·위험성)</strong></li>\n<li><strong>상해진단서·진료기록 (골절·인대 등 부위·치유기간)</strong></li>\n<li><strong>부상 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>공과의 관련성·태클 경위 기록 (규칙 일탈)</strong></li>\n<li><strong>경기 규칙·심판 판정 자료 (있는 경우)</strong></li>\n<li><strong>치료비 영수증·통원 내역·일실수입 자료</strong></li>\n<li><strong>동료 선수·심판·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운동 중 충돌이라도 통상 경기 방식·규칙을 벗어나 과도한 유형력을 행사한 경우라면 정당행위로 보기 어려울 여지가 있으므로, 공과의 관련성·태클 시점·위험성과 고의·중과실 정황을 경기 영상·진단서로 정리해두는 것이 핵심입니다. 구장 CCTV·경기 촬영본은 보관 기간이 짧을 수 있어 빨리 확보·보존하고, 심판 판정 자료가 있으면 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>규칙 일탈</strong> — 공과 무관·뒤늦은 태클이 통상 경기 방식을 벗어났는지.</li>\n<li><strong>정당행위 한계</strong> — 과도한 유형력이 사회상규상 용인 한계를 넘었는지.</li>\n<li><strong>고의·과실</strong> — 고의 상해인지 과실치상으로 평가되는지.</li>\n<li><strong>위험 인수</strong> — 경기 참가에 따른 위험 인수 범위.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사회상규상 정당행위의 한계와 과도한 유형력',
        summary:
          '대법원 2008도2695(대법원, 2008.08.21 선고) 영역에서 법원은 어떤 행위가 외형상 정당한 활동의 일환처럼 보이더라도 그 통상적인 방식과 정도를 벗어나 상대방의 신체에 비정상적이거나 과도한 유형력을 행사해 상해까지 입힌 경우라면 그러한 명목과 방법으로 이루어졌다 해도 사회상규상 용인되는 정당행위라고 볼 수 없다고 보아, 치료 목적의 안수기도라는 명목으로 장시간 신체를 강제로 제압하는 등 과도한 유형력을 행사해 상해를 입힌 행위가 사회상규상 용인되는 정당행위에 해당하지 않는다고 판시했습니다. 운동경기 태클 상해 사안에서도 통상 경기 방식·규칙을 벗어난 과도한 유형력인지를 기준으로 정당행위 한계와 상해 인정을 검토해볼 수 있습니다.',
        takeaway: '운동경기 + 거친 태클 + 골절·상해 결합 시 정당행위 한계·상해 인정 검토 영역 — 경기 영상·규칙 일탈·위험성·진단서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '경기 중 부상이면 무조건 책임을 못 묻나요?',
        answer:
          '<strong>통상 경기 방식·규칙을 벗어난 과도한 유형력이면 책임을 물을 여지가 있는 영역입니다.</strong> 규칙 일탈 정황을 영상으로 정리.',
      },
      {
        question: '고의가 아니었다고 하면 어떻게 되나요?',
        answer:
          '<strong>고의가 부정돼도 과실치상으로 평가될 여지가 있는 영역입니다.</strong> 태클 시점·위험성·정황을 기록.',
      },
      {
        question: '경기 영상이 꼭 필요한가요?',
        answer:
          '<strong>공과의 관련성·태클 시점·위험성을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 구장 CCTV도 함께 보존 요청.',
      },
      {
        question: '치료비 말고 다른 손해도 청구되나요?',
        answer:
          '<strong>치료비 외에 일실수입·위자료도 손해배상으로 검토되는 영역입니다.</strong> 통원 내역·소득 자료를 정리.',
      },
      {
        question: '아마추어 경기라 규칙이 느슨한데도 다툴 수 있나요?',
        answer:
          '<strong>규칙 자체보다 통상 방식을 벗어난 과도한 위험행위인지가 쟁점이 되는 영역입니다.</strong> 태클 경위·위험성을 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '아마추어 경기 중 폭행 부상', href: '/guide/assault/assault-amateur-sports-game-injury-track' },
      { label: '공동주택 엘리베이터 폭행 CCTV', href: '/guide/assault/assault-apartment-elevator-cctv-evidence-track' },
      { label: '장애인 폭행 가중 처벌', href: '/guide/assault/assault-disabled-victim-aggravated-penalty' },
    ],
  },

  // ─── 5. dui-personal-mobility-pm-track ───
  {
    domain: 'dui',
    slug: 'dui-personal-mobility-pm-track',
    keyword: '개인형이동장치 음주운전',
    questionKeyword: '전동킥보드 같은 개인형이동장치를 타고 잠깐 이동하다 단속됐는데, 운전 종료 후 한참 지나 측정한 수치가 처벌기준을 살짝 넘었어요. 음주를 시작·종료한 시각도 명확하지 않은데, 정작 운전할 때도 기준치를 넘었다고 단정할 수 있는지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '개인형이동장치 음주 측정시점·기준치 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: 'PM 음주운전 — 5단계 측정시점·기준치 점검 | 로앤가이드',
      description:
        '전동킥보드 음주운전에서 운전 종료 후 측정 수치가 기준을 살짝 넘어 막막하다면 도로교통법 제44조와 운전 당시 수치 증명 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전동킥보드 등 개인형이동장치(PM)를 타고 잠깐 이동하다가 음주단속에 걸린 운전자입니다. 그런데 단속 현장에서 곧바로 측정한 것이 아니라 운전을 마친 때로부터 상당한 시간이 지난 뒤에 음주측정을 했고, 그 수치가 처벌 기준을 아슬아슬하게 넘는 정도로 나왔어요. 게다가 술을 언제부터 언제까지 얼마나 마셨는지 객관적으로 확인할 자료가 부족한 상황이라, 측정 당시가 혈중알코올농도가 오르는 상승기였는지 내려가는 하강기였는지조차 분명하지 않습니다. 그렇다면 정작 PM을 운전하던 시점에 제가 처벌 기준치 이상이었다고 단정할 수 있는지, 혐의를 받고 있다면 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제2조는 개인형이동장치를 포함한 차의 운전 개념을, 같은 법 제156조는 개인형이동장치 음주운전에 관한 처벌을 정하는 영역입니다. 판례·실무는 운전 시점이 상승기인지 하강기인지 확정할 수 없는 상황에서 운전 종료로부터 상당한 시간이 지나 측정된 수치가 처벌기준을 약간 넘는 정도라면, 그 측정치만으로 운전 당시 수치가 처벌기준을 초과했다고 단정하기 어렵고, 음주 시작·종료 시각과 음주량 등 전제사실이 구체적·객관적으로 증명돼야 한다고 보는 본 사례 흐름이 있는 영역입니다. PM + 시간경과 측정 + 근소 초과 결합은 \'측정시점·운전 당시 기준치 평가\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 상승·하강기 ③ 전제사실 증명 ④ 양형 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 시점 ③ 증명 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 개인형이동장치 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·상승/하강기·전제사실 증명·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 운전 종료·측정 시각, 측정 수치·방법·시간 간격 정리.</li>\n<li><strong>② 상승·하강기</strong> — 측정 시점이 상승기인지 하강기인지 확정 가능한지 정리.</li>\n<li><strong>③ 전제사실 증명</strong> — 음주 시작·종료 시각, 음주량 등 객관적 자료 유무 정리.</li>\n<li><strong>④ 양형</strong> — 음주량·경위·초범·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 운전 당시 기준치 초과 증명 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운전 시점이 상승기·하강기인지 확정할 수 없고 운전 종료 후 상당한 시간이 지나 측정한 수치가 기준을 약간 넘는 정도라면 그 수치만으로 운전 당시 초과를 단정하기 어려운 영역. 측정 경위와 음주 시작·종료 시각·음주량 등 전제사실 자료를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·정황진술보고서, 측정 결과지·측정 시각·방법 확인.</li>\n<li><strong>2단계 — 운전·측정 시간 정리 (수일 내)</strong> — 운전 종료·측정 시각, 시간 간격과 상승·하강기 가능성 점검.</li>\n<li><strong>3단계 — 전제사실 자료 정리 (공판 전)</strong> — 음주 시작·종료 시각·음주량 등 객관적 자료 정리.</li>\n<li><strong>4단계 — 양형 자료 정리 (병행)</strong> — 초범·반성·생계 등 양형 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 운전 당시 기준치 초과 증명 쟁점 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">개인형이동장치 음주 측정시점·기준치 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·전제사실·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정 경위·시각)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각·방법)</strong></li>\n<li><strong>운전 종료·측정 시각 정리 메모 (시간 간격)</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 자료 (영수증·CCTV 등)</strong></li>\n<li><strong>이동 경로·PM 대여 기록 (운전 정황)</strong></li>\n<li><strong>채혈 측정·재측정 요구 기록 (있는 경우)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운전 종료 후 상당한 시간이 지나 측정한 수치가 기준을 약간 넘는 정도라면 운전 당시 수치가 기준을 초과했다고 단정되지 않고 음주 시작·종료 시각·음주량 같은 전제사실이 객관적으로 증명돼야 하므로, 측정 시각·시간 간격과 음주 경위 자료를 정리해두는 것이 핵심입니다. PM 대여 기록·이동 경로와 양형 자료도 함께 준비해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 시점</strong> — 측정이 상승기·하강기인지 확정할 수 있는지.</li>\n<li><strong>근소 초과</strong> — 기준을 약간 넘는 수치로 운전 당시 초과를 단정할 수 있는지.</li>\n<li><strong>전제사실 증명</strong> — 음주 시작·종료 시각·음주량이 객관적으로 증명됐는지.</li>\n<li><strong>운전 개념·차종</strong> — 개인형이동장치 운전·적용 법조의 점검.</li>\n<li><strong>양형 사정</strong> — 음주량·경위·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시간경과 측정 수치와 운전 당시 기준치 초과의 증명',
        summary:
          '대법원 2024도11906(대법원, 2025.07.18 선고) 영역에서 법원은 음주운전 시점이 혈중알코올농도의 상승시점인지 하강시점인지 확정할 수 없는 상황에서 운전을 종료한 때로부터 상당한 시간이 지나 측정된 혈중알코올농도가 처벌기준치를 약간 넘는 정도라면 실제 운전 시점의 농도가 처벌기준치를 초과하였다고 단정할 수 없고, 위드마크 공식 등으로 운전 당시 농도를 추정할 때에도 그 전제가 되는 음주 시작·종료 시각과 음주량 등 개별적·구체적 사실이 엄격히 증명돼야 하며, 산출된 수치가 허용 기준을 근소하게 초과하는 정도라면 더욱 신중히 판단해야 한다고 보아, 운전 당시 처벌기준 이상이었음이 합리적 의심을 배제할 정도로 증명되었다고 보기 어렵다고 본 사례라고 판시했습니다. 개인형이동장치 음주운전 사안에서도 측정 시점과 운전 당시 기준치 초과의 증명을 검토해볼 수 있습니다.',
        takeaway: 'PM + 시간경과 측정 + 근소 초과 결합 시 측정시점·운전 당시 기준치 평가 검토 영역 — 측정 시각·음주 경위·전제사실·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운전하고 한참 뒤 측정했는데도 처벌되나요?',
        answer:
          '<strong>시간경과 후 근소 초과 수치만으로 운전 당시 초과가 단정되지 않을 수 있는 영역입니다.</strong> 측정 시각·시간 간격을 정리.',
      },
      {
        question: '상승기·하강기는 왜 중요한가요?',
        answer:
          '<strong>측정 시점이 어느 단계인지 확정 못 하면 운전 당시 수치 추정이 달라지는 영역입니다.</strong> 음주 시작·종료 시각을 점검.',
      },
      {
        question: '음주 시각·양 자료가 없으면 불리한가요?',
        answer:
          '<strong>전제사실이 증명되지 않으면 오히려 단정하기 어려워질 수 있는 영역입니다.</strong> 영수증·CCTV 등 객관 자료를 확보.',
      },
      {
        question: '전동킥보드도 음주운전 처벌 대상인가요?',
        answer:
          '<strong>개인형이동장치도 음주운전 규율 대상이 될 수 있는 영역입니다.</strong> 운전 개념·적용 법조를 점검.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 결과·운전과 측정 시각 확보가 출발점인 영역입니다.</strong> 음주 경위와 양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 직후 상승기 측정 시점 수치 다툼', href: '/guide/dui/dui-post-drinking-rising-bac-measurement-time-gap-track' },
      { label: '전동킥보드 음주운전', href: '/guide/dui/dui-electric-scooter-personal-mobility-impaired-track' },
      { label: '음주측정 거부', href: '/guide/dui/dui-breath-test-refusal-track' },
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
      { label: '음주운전 행정심판 준비서류와 절차', href: '/guide/dui/dui-administrative-appeal-required-docs' },
    ],
  },

  // ─── 6. dui-private-parking-lot-track ───
  {
    domain: 'dui',
    slug: 'dui-private-parking-lot-track',
    keyword: '주차장 음주운전',
    questionKeyword: '술을 마신 뒤 주차장에서 차를 잠깐 옮겼는데, 현장 측정이 안 돼 위드마크 공식으로 운전 당시 수치를 추정해 처벌하려 합니다. 제 음주량·체질·분해량 같은 조건이 제대로 확인되지 않은 것 같은데, 이런 추정 수치로 유죄가 되는지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '주차장 음주운전 위드마크 추정 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '주차장 음주운전 — 5단계 위드마크 추정 점검 | 로앤가이드',
      description:
        '주차장 음주운전에서 위드마크 공식 추정 수치로 처벌이 걱정된다면 도로교통법 제44조와 전제사실 엄격증명 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 주차장에서 차를 잠깐 옮기거나 짧은 구간을 운전한 운전자입니다. 그런데 운전 직후 곧바로 호흡·혈액을 측정한 것이 아니라 시간이 지난 뒤 단속이 이루어져, 수사기관이 이른바 위드마크(Widmark) 공식으로 운전 당시의 혈중알코올농도를 거꾸로 추정해 처벌하려 하고 있어요. 문제는 제가 술을 언제부터 얼마나 마셨는지, 제 체질·음주 속도·시간당 알코올 분해량은 어느 정도인지 같은 계산의 전제가 되는 사실들이 제대로 확인되지 않은 채 평균치를 끼워 넣어 계산된 것 같다는 점입니다. 이렇게 불확실한 전제로 추정된 수치만으로 유죄가 인정되는지, 혐의를 받고 있다면 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전 금지를, 같은 법 제148조의2는 음주운전 처벌을 정하는 영역입니다. 판례·실무는 운전 직후 표본 측정이 어려운 경우 위드마크 공식으로 운전 당시 농도를 추정할 수 있으나, 과학공식의 적용 전제가 되는 개별적·구체적 사실은 엄격한 증명을 요하고, 음주 정도·체질·음주 속도·신체활동 등에 따라 시간당 알코올 분해량이 달라질 수 있어 평균인과 같다고 쉽게 단정할 수 없으며, 불확실한 점이 피고인에게 불이익하게 작용하면 증명력이 부족할 수 있는 반면 피고인에게 가장 유리한 통계를 대입한 계산은 유죄 인정자료로 쓸 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 주차장 + 시간경과 + 위드마크 추정 결합은 \'전제사실 엄격증명·추정 수치 평가\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 경위 ② 전제사실 ③ 분해량·통계 ④ 양형 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 전제 ③ 통계 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차장 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 경위·전제사실·분해량/통계·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 경위</strong> — 운전 종료·측정 시각, 측정 방법·시간 간격 정리.</li>\n<li><strong>② 전제사실</strong> — 음주 시작·종료 시각, 음주량 등 공식 적용 전제 정리.</li>\n<li><strong>③ 분해량·통계</strong> — 체질·음주 속도·시간당 분해량과 적용 통계의 유·불리 정리.</li>\n<li><strong>④ 양형</strong> — 음주량·경위·초범·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 추정 수치의 증명력 쟁점과 방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위드마크 공식 적용의 전제가 되는 음주 시각·음주량·분해량 등은 엄격한 증명을 요하고 시간당 분해량을 평균인과 같다고 쉽게 단정할 수 없는 영역. 다만 피고인에게 가장 유리한 통계를 대입한 계산은 유죄 자료로 쓰일 수 있으므로 전제사실의 유·불리를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확인 (즉시~당일)</strong> — 적발보고서·정황진술보고서, 측정 결과지·측정 시각·방법 확인.</li>\n<li><strong>2단계 — 전제사실 정리 (수일 내)</strong> — 음주 시작·종료 시각·음주량과 운전 종료·측정 간격 점검.</li>\n<li><strong>3단계 — 분해량·통계 검토 (공판 전)</strong> — 체질·음주 속도·시간당 분해량과 적용 통계의 유·불리 정리.</li>\n<li><strong>4단계 — 양형 자료 정리 (병행)</strong> — 초범·반성·생계 등 양형 자료 준비.</li>\n<li><strong>5단계 — 변론·선고 대응 (공판 일정)</strong> — 추정 수치 증명력 쟁점 변론, 감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차장 음주운전 위드마크 추정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 경위·전제사실·분해량 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정 경위·시각)</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각·방법)</strong></li>\n<li><strong>운전 종료·측정 시각 정리 메모 (시간 간격)</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 자료 (영수증·CCTV 등)</strong></li>\n<li><strong>체질·음주 속도·신체활동 정리 자료 (분해량 판단)</strong></li>\n<li><strong>채혈 측정·재측정 요구 기록 (있는 경우)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위드마크 공식은 음주 시각·음주량·시간당 분해량 같은 전제사실에 대한 엄격한 증명을 요하고 분해량을 평균인과 같다고 쉽게 단정할 수 없으므로, 음주 경위와 운전·측정 시각을 구체적으로 정리해두는 것이 핵심입니다. 다만 피고인에게 가장 유리한 통계를 대입한 계산은 유죄 자료가 될 수 있어 적용된 수치의 유·불리를 점검하고 양형 자료도 함께 준비해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전제사실 증명</strong> — 음주 시각·음주량 등 전제가 엄격히 증명됐는지.</li>\n<li><strong>분해량 단정</strong> — 시간당 분해량을 평균인과 같다고 단정했는지.</li>\n<li><strong>유리한 통계</strong> — 피고인에게 가장 유리한 수치가 대입됐는지.</li>\n<li><strong>측정 절차</strong> — 측정 방법·재측정 요구가 증명에 미치는 영향.</li>\n<li><strong>양형 사정</strong> — 음주량·경위·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위드마크 공식 적용의 엄격한 증명과 유리한 통계',
        summary:
          '대법원 2020도6417(대법원, 2023.12.28 선고) 영역에서 법원은 음주 후 곧바로 표본을 검사해 혈중알코올농도를 측정할 수 없으면 위드마크 공식으로 운전 당시 농도를 추정할 수 있으나, 과학공식 등 경험칙을 이용해 구성요건 사실을 인정하려면 그 적용 전제가 되는 개별적·구체적 사실에 관해 엄격한 증명을 요하고, 시간 경과에 따른 알코올 분해소멸은 평소 음주 정도·체질·음주 속도·음주 후 신체활동 등에 영향을 받으므로 해당 운전자의 시간당 분해량을 평균인과 같다고 쉽게 단정할 수 없으며 불확실한 점이 피고인에게 불이익하게 작용하면 증명력이 부족하다고 보는 한편, 시간당 분해량에 관해 알려진 신빙성 있는 통계 중 피고인에게 가장 유리한 것을 대입한 계산결과는 유죄의 인정자료로 사용할 수 있다고 판시했습니다. 주차장 음주운전 사안에서도 위드마크 추정의 전제사실 증명과 적용 통계를 검토해볼 수 있습니다.',
        takeaway: '주차장 + 시간경과 + 위드마크 추정 결합 시 전제사실 엄격증명·추정 수치 평가 검토 영역 — 측정 시각·음주 경위·분해량·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '위드마크 추정 수치만으로 유죄가 되나요?',
        answer:
          '<strong>전제사실이 엄격히 증명돼야 하고 유리한 통계 대입 여부가 쟁점이 되는 영역입니다.</strong> 음주 시각·음주량을 정리.',
      },
      {
        question: '제 분해량을 평균치로 계산해도 되나요?',
        answer:
          '<strong>체질·음주 속도 등에 따라 달라져 평균인과 같다고 쉽게 단정할 수 없는 영역입니다.</strong> 음주 속도·신체활동 자료를 확보.',
      },
      {
        question: '전제사실 자료가 부족하면 어떻게 되나요?',
        answer:
          '<strong>불확실한 점이 피고인에게 불이익하면 증명력이 부족해질 수 있는 영역입니다.</strong> 운전·측정 시각을 점검.',
      },
      {
        question: '측정 절차에 문제가 있으면 다툴 수 있나요?',
        answer:
          '<strong>측정 방법·재측정 요구 여부가 증명에 영향을 줄 수 있는 영역입니다.</strong> 측정 결과지·재측정 기록을 확보.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 결과·음주 경위 확보가 출발점인 영역입니다.</strong> 운전과 측정 시각·양형 자료를 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '위드마크 추정 음주운전', href: '/guide/dui/dui-widmark-estimation-track' },
      { label: '음주측정 직전 구강청결제 사용 측정 신빙성 여부', href: '/guide/dui/dui-mouthwash-before-breath-test-falsely-accused-defense' },
      { label: '음주 직후 상승기 측정 시점 수치 다툼', href: '/guide/dui/dui-post-drinking-rising-bac-measurement-time-gap-track' },
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
      { label: '음주운전 면허 행정처분 절차', href: '/guide/dui/dui-administrative-license-procedure' },
    ],
  },

  // ─── 7. dui-test-refusal-after-accident-track ───
  {
    domain: 'dui',
    slug: 'dui-test-refusal-after-accident-track',
    keyword: '사고 후 음주측정 거부',
    questionKeyword: '사고가 난 뒤 경찰의 음주측정 요구에 응하지 못했는데, 과거 음주 관련 전력이 있다는 이유로 가중처벌 조항까지 적용해 기소됐어요. 그런데 그 조항이 위헌 논란이 있다는 말을 들었습니다. 혐의를 받고 있다면 어떤 조항이 적용되는지, 어떤 순서로 다퉈야 하는지 막막합니다.',
    ctaKeyword: '사고 후 음주측정 거부 가중조항 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 — 5단계 가중조항·위헌 점검 | 로앤가이드',
      description:
        '사고 후 음주측정 거부로 가중처벌까지 적용돼 막막하다면 도로교통법 제148조의2와 위헌 가중조항·공소장 변경 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고가 난 뒤 출동한 경찰관으로부터 음주측정을 요구받았는데 여러 사정으로 측정에 응하지 못해 음주측정거부로 입건된 운전자입니다. 그런데 검사는 제게 과거 음주운전·음주측정거부 전력이 있다는 이유로 단순 측정거부가 아니라 \'2회 이상 위반\' 등 가중처벌 조항까지 적용해 기소했어요. 문제는 그 가중처벌 조항이 책임과 형벌의 비례원칙에 어긋난다는 위헌 논란이 있고, 헌법재판소가 비슷한 조항들에 대해 위헌결정을 했다는 말을 들었다는 점입니다. 그렇다면 제게 적용된 조항이 그대로 유지될 수 있는지, 공소장 변경 같은 절차가 필요한 건 아닌지, 혐의를 받고 있다면 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제2항은 경찰공무원의 음주측정 요구와 응할 의무를, 같은 법 제148조의2는 음주운전·음주측정거부의 처벌과 일정 전력에 따른 가중처벌을 정하는 영역입니다. 판례·실무는 헌법재판소가 음주운전·음주측정거부의 가중처벌 조항 중 일부를 위헌으로 선언한 흐름에서, 위헌결정의 심판대상이 아니었더라도 위헌이 선언된 조항과 실질적으로 동일한 가중조항이 적용된 경우 그 위헌 여부나 위헌적 결과를 피하기 위한 공소장 변경 등의 필요 유무를 심리·판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 사고 후 + 측정거부 + 가중조항 결합은 \'적용 법조·위헌·공소장 변경 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 측정거부 성립 ② 적용 법조 ③ 위헌·공소장 변경 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 성립 ② 법조 ③ 위헌 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사고 후 음주측정 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정거부 성립·적용 법조·위헌/공소장 변경·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정거부 성립</strong> — 측정 요구의 적법성·고지·응답 경위로 거부 성립 정리.</li>\n<li><strong>② 적용 법조</strong> — 단순 측정거부인지 전력에 따른 가중조항이 적용됐는지 정리.</li>\n<li><strong>③ 위헌·공소장 변경</strong> — 적용 조항이 위헌 선언 조항과 실질적으로 동일한지, 변경 필요 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분의 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정거부에 전력에 따른 가중조항이 적용된 경우, 그 조항이 위헌 선언 조항과 실질적으로 동일하다면 위헌 여부나 위헌적 결과를 피하기 위한 공소장 변경 등의 필요를 심리·판단해야 할 여지가 있는 영역. 측정거부 성립과 적용 법조를 구분해 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·처분 자료 확인 (즉시~당일)</strong> — 적발보고서·측정거부 경위, 면허 취소·정지 처분 통지서·사유 확인.</li>\n<li><strong>2단계 — 측정거부 성립 점검 (수일 내)</strong> — 측정 요구의 적법성·고지·응답 경위와 사고 정황 점검.</li>\n<li><strong>3단계 — 적용 법조·위헌 정리 (공판 전)</strong> — 단순/가중 조항 구분, 위헌 선언 조항과의 동일성·공소장 변경 필요 정리.</li>\n<li><strong>4단계 — 행정 대응 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한, 집행정지·정상 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 측정거부 성립·적용 법조 변론, 취소 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사고 후 음주측정 거부 가중조항·위헌 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정거부 성립·적용 법조·행정 대응 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정 요구·거부 경위)</strong></li>\n<li><strong>측정 요구 고지·응답 경위 메모 (시간순)</strong></li>\n<li><strong>사고 경위·블랙박스·현장 자료 (사고 정황)</strong></li>\n<li><strong>공소장·적용 법조 확인 자료 (단순/가중 구분)</strong></li>\n<li><strong>과거 음주 전력·처분 이력 자료 (가중 요건)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정거부 성립은 측정 요구의 적법성·고지·응답 경위로 따로 점검하고, 전력에 따른 가중조항이 적용됐다면 그 조항이 위헌 선언 조항과 실질적으로 동일한지와 공소장 변경 필요 유무를 함께 정리해두는 것이 핵심입니다. 측정거부는 면허 취소로 이어지기 쉬우므로 처분을 안 날부터 90일 내 이의신청·행정심판을 검토하고 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정거부 성립</strong> — 측정 요구의 적법성·고지·응답 경위가 거부에 해당하는지.</li>\n<li><strong>적용 법조</strong> — 단순 측정거부인지 전력 가중조항이 적용됐는지.</li>\n<li><strong>위헌·동일성</strong> — 적용 조항이 위헌 선언 조항과 실질적으로 동일한지.</li>\n<li><strong>공소장 변경</strong> — 위헌적 결과를 피하기 위한 변경 필요가 있는지.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 측정거부 가중조항의 위헌성과 공소장 변경 필요',
        summary:
          '대법원 2022도3929(대법원, 2022.07.28 선고) 영역에서 법원은 음주측정거부 전력이 있는 피고인에게 도로교통법 제148조의2 제1항 중 \'제44조 제2항을 위반한 사람으로서 다시 같은 항을 위반한 사람\'에 관한 부분을 적용해 유죄로 본 사안에서, 헌법재판소가 음주운전·음주측정거부 전력에 따른 가중처벌 조항들에 대해 일련의 위헌결정을 한 점에 비추어, 적용된 조항이 위헌결정의 심판대상은 아니었더라도 위헌이 선언된 조항과 실질적으로 동일해 책임과 형벌의 비례원칙에 어긋난다고 볼 여지가 있으므로, 원심으로서는 그 조항의 위헌 여부나 위헌적 결과를 피하면서 책임에 합당한 형벌법규를 적용하기 위한 공소장 변경절차 등의 필요 유무를 심리·판단했어야 한다고 판시했습니다. 사고 후 음주측정 거부 사안에서도 적용 법조와 공소장 변경 필요를 검토해볼 수 있습니다.',
        takeaway: '사고 후 + 측정거부 + 가중조항 결합 시 적용 법조·위헌·공소장 변경 검토 영역 — 측정거부 경위·적용 법조·전력 이력·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '측정에 응하지 못한 것도 거부로 처벌되나요?',
        answer:
          '<strong>측정 요구의 적법성·고지·응답 경위에 따라 거부 성립이 달라지는 영역입니다.</strong> 측정 요구·응답 경위를 정리.',
      },
      {
        question: '과거 전력으로 가중조항이 적용되면 어떻게 다투나요?',
        answer:
          '<strong>적용 조항이 위헌 선언 조항과 실질적으로 동일한지가 쟁점이 되는 영역입니다.</strong> 공소장·적용 법조를 확인.',
      },
      {
        question: '위헌 논란이 있으면 공소장 변경이 필요한가요?',
        answer:
          '<strong>위헌적 결과를 피하기 위한 공소장 변경 필요를 심리·판단할 여지가 있는 영역입니다.</strong> 적용 법조와 전력 이력을 정리.',
      },
      {
        question: '면허 취소도 같이 다퉈야 하나요?',
        answer:
          '<strong>측정거부는 면허 취소로 이어지기 쉬워 행정심판을 별도로 검토하는 영역입니다.</strong> 처분 통지서·90일 청구기한을 점검.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 요구 경위·공소장 확보가 출발점인 영역입니다.</strong> 전력 이력과 행정 청구기한을 함께 점검.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-measurement-refusal-track' },
      { label: '음주운전 재범 가중처벌', href: '/guide/dui/dui-repeat-offense-aggravation' },
      { label: '음주운전 교통사고 발생 시 대처법', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '음주 면허취소 행정심판 재량권', href: '/guide/dui/dui-administrative-suspension-appeal-track' },
      { label: '처음 음주운전 면허정지 면허취소 분기', href: '/guide/dui/dui-first-offense-license-suspension-vs-revocation-criteria' },
    ],
  },

  // ─── 8. jeonse-fraud-multifamily-prior-tenant-deposit-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-multifamily-prior-tenant-deposit-track',
    keyword: '다가구 선순위 임차보증금 전세사기',
    questionKeyword: '다가구주택에 전세로 들어왔는데, 사실 그 계약이 보증금을 내고 거주하려던 게 아니라 임대인에게 빌려준 돈을 대항력 있는 임차인 지위로 회수하려는 목적이었던 다른 임차인들이 선순위로 잔뜩 끼어 있었어요. 이런 임차인도 대항력이 인정되는지, 제 보증금은 어떻게 되는지 막막합니다.',
    ctaKeyword: '다가구 선순위 임차보증금 대항력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '다가구 선순위 보증금 — 5단계 대항력 점검 | 로앤가이드',
      description:
        '다가구주택 선순위 임차인 때문에 보증금이 걱정된다면 주택임대차보호법 제3조 대항력과 임대차의 주된 목적 판단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"다가구주택의 한 호실에 전세로 들어온 임차인입니다. 그런데 알고 보니 같은 건물에는 저보다 먼저 전입·확정일자를 갖춘 선순위 임차인들이 많았고, 그중 일부는 실제로 그 집에 살면서 사용·수익하려던 것이 아니라 임대인에게 빌려준 기존 채권을 \'대항력 있는 임차인\' 지위를 빌려 우선적으로 회수하려는 목적이었던 것으로 보입니다. 임대인의 가족·지인이 형식만 임대차로 꾸며 선순위로 끼어 있다 보니, 정작 진짜 거주 목적인 제 보증금은 경매가 진행되면 한 푼도 회수하기 어려운 상황이에요. 이렇게 거주가 아닌 채권 회수를 주된 목적으로 한 임대차도 대항력이 인정되는지, 제 보증금은 어떤 순서로 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 임차인의 대항력을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 임대차계약의 주된 목적이 주택을 사용·수익하려는 데 있지 않고 실제로는 대항력 있는 임차인으로 보호받아 기존 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상 대항력을 인정하지 않을 여지가 있고, 그 주된 목적이 무엇인지는 거래의 경위·당사자 관계·자금의 성격 등을 살펴 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 다가구 + 선순위 임차인 + 채권회수 목적 결합은 \'임대차 주된 목적·대항력 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리·배당 ② 선순위 성격 ③ 대항력 판단 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 배당 ② 성격 ③ 대항력 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다가구 선순위 임차보증금 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리/배당·선순위 성격·대항력 판단·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·배당</strong> — 등기부·확정일자·전입, 경매 배당표와 미수령 잔액 확인.</li>\n<li><strong>② 선순위 성격</strong> — 선순위 임차인이 실제 거주·사용·수익 목적인지 정리.</li>\n<li><strong>③ 대항력 판단</strong> — 주된 목적이 채권회수면 대항력이 부정될 여지 정리.</li>\n<li><strong>④ 회수</strong> — 배당이의·우선변제·잔여 권리 등 회수 경로 정리.</li>\n<li><strong>⑤ 대응</strong> — 가장 임차인 다툼과 형사·민사 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대차의 주된 목적이 거주·사용·수익이 아니라 기존 채권 회수에 있는 경우라면 주택임대차보호법상 대항력이 인정되지 않을 여지가 있는 영역. 선순위 임차인의 실제 거주·자금 성격·당사자 관계를 정리해 가장 임차인 여부를 다투는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·배당 자료 확인 (즉시)</strong> — 등기부·확정일자·전입, 경매 배당표·미수령 잔액 점검.</li>\n<li><strong>2단계 — 선순위 성격 정리 (수일 내)</strong> — 선순위 임차인의 실제 거주·사용·수익 여부, 자금 성격·당사자 관계 확인.</li>\n<li><strong>3단계 — 대항력 다툼 정리 (가능한 빨리)</strong> — 주된 목적이 채권회수인지 가장 임차인 여부 정리.</li>\n<li><strong>4단계 — 배당이의·회수 정리 (종기 내/병행)</strong> — 배당이의·우선변제·잔여 권리 등 회수 경로 정리.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 미회수 잔액 처리, 형사 고소·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다가구 선순위 임차보증금 대항력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리·배당·선순위 성격 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·소유관계)</strong></li>\n<li><strong>경매 배당표·배당요구 자료 (미수령 잔액)</strong></li>\n<li><strong>선순위 임차인 전입·확정일자 현황 자료 (선순위 규모)</strong></li>\n<li><strong>선순위 임차인 거주·자금 성격 관련 자료 (가장 임차인 다툼)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대차의 주된 목적이 거주가 아니라 임대인에 대한 기존 채권 회수에 있는 선순위 임차인이라면 대항력이 부정될 여지가 있으므로, 선순위 임차인의 실제 거주 여부·자금 성격·당사자 관계를 정리해 가장 임차인인지를 다툴 자료를 모아두는 것이 핵심입니다. 경매 배당표·전입 현황·송금 내역을 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대차 주된 목적</strong> — 거주·사용·수익인지 채권 회수인지.</li>\n<li><strong>대항력 인정</strong> — 채권 회수 목적이면 대항력이 부정되는지.</li>\n<li><strong>가장 임차인</strong> — 선순위가 형식만 갖춘 가장 임차인인지.</li>\n<li><strong>배당 순위</strong> — 선순위 규모와 배당 순위·잔여 회수 가능성.</li>\n<li><strong>회수 경로</strong> — 배당이의·우선변제·형사 고소 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차의 주된 목적이 채권 회수인 경우 대항력',
        summary:
          '대법원 2007다55088(대법원, 2007.12.13 선고) 영역에서 법원은 임대차계약의 주된 목적이 주택을 사용·수익하려는 데 있지 않고 실제로는 대항력 있는 임차인으로 보호받아 기존 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상의 대항력을 인정할 수 없다고 보아, 부모가 삼촌에 대해 가지는 대여금채권을 임대차보증금으로 대체하기로 하고 그 삼촌이 건축한 빌라에 관해 임대차계약을 체결한 사안에서, 그 주된 목적이 대항력 있는 임차인으로 보호받아 부모의 대여금채권을 우선변제받으려는 데 있는지를 더 심리해야 한다는 이유로 원심판결을 파기했습니다. 다가구 선순위 임차보증금 전세사기 사안에서도 선순위 임차인의 임대차 주된 목적과 대항력을 검토해볼 수 있습니다.',
        takeaway: '다가구 + 선순위 임차인 + 채권회수 목적 결합 시 임대차 주된 목적·대항력 평가 검토 영역 — 전입 현황·거주·자금 성격·배당표 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '거주가 아니라 돈 회수 목적 임차인도 대항력이 있나요?',
        answer:
          '<strong>주된 목적이 채권 회수면 대항력이 부정될 여지가 있는 영역입니다.</strong> 선순위 임차인의 거주·자금 성격을 정리.',
      },
      {
        question: '선순위가 가장 임차인인지 어떻게 다투나요?',
        answer:
          '<strong>실제 거주·자금 성격·당사자 관계를 종합해 다투는 영역입니다.</strong> 전입 현황·송금 내역을 확보.',
      },
      {
        question: '배당에서 밀렸는데 다툴 방법이 있나요?',
        answer:
          '<strong>가장 임차인이 의심되면 배당이의 등으로 다툴 여지가 있는 영역입니다.</strong> 배당표·선순위 현황을 정리.',
      },
      {
        question: '제 보증금은 어떤 순서로 회수하나요?',
        answer:
          '<strong>권리관계 확인 → 선순위 성격 정리 → 배당이의·회수 순서로 검토하는 영역입니다.</strong> 등기부·확정일자를 먼저 확인.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 대항력·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-tenant-opposing-power-track' },
      { label: '가짜 임대인 명의도용 계약 보증금 판단', href: '/guide/jeonse-fraud/jeonse-fraud-fake-landlord-identity-theft-contract-track' },
      { label: '다가구주택 후순위 보증금 우선변제 판단', href: '/guide/jeonse-fraud/jeonse-fraud-multi-household-junior-priority-deposit-track' },
      { label: '경매 배당 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-recovery-track' },
      { label: '신축 빌라 깡통전세 보증금 판단', href: '/guide/jeonse-fraud/jeonse-fraud-new-villa-inflated-deposit-track' },
    ],
  },

  // ─── 9. jeonse-fraud-trust-registered-property-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-trust-registered-property-track',
    keyword: '신탁등기 주택 전세사기',
    questionKeyword: '중개사를 통해 다세대주택 한 세대에 전세로 들어왔는데, 같은 건물의 다른 세대들까지 묶인 공동(근)저당이 잡혀 있었어요. 중개사는 그 다른 세대의 선순위나 임차인 보증금은 제대로 확인·설명해주지 않았고, 결국 경매에서 한 푼도 못 받았어요. 중개사 책임을 물을 수 있는지 막막합니다.',
    ctaKeyword: '신탁등기 주택 전세사기 중개사 설명의무 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '공동저당 다세대 전세사기 — 5단계 중개사 책임 점검 | 로앤가이드',
      description:
        '다세대 공동저당 전세에서 선순위에 밀려 한 푼도 못 받았다면 공인중개사법 제30조 중개사 확인·설명의무와 배상책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"개업공인중개사의 중개로 다세대주택 건물 중 한 세대에 전세로 들어온 임차인입니다. 그런데 알고 보니 그 건물은 임대인 소유의 여러 구분세대가 하나로 묶여 공동저당(공동근저당)이 설정돼 있었고, 다른 세대들에도 이미 임차인들이 보증금을 두고 살고 있었어요. 중개사는 제가 계약한 세대의 권리관계만 간단히 적었을 뿐, 같은 공동담보로 묶인 다른 세대의 선순위 권리나 그 임차인들의 보증금·기간 같은 사정은 제대로 조사·확인해 설명해주지 않았습니다. 결국 경매가 진행되자 소액 최우선변제권자·근저당권자 등에게 먼저 배당돼 저는 보증금을 거의 회수하지 못했어요. 이렇게 공동저당으로 묶인 다른 세대의 선순위까지 확인·설명하지 않은 중개사에게 책임을 물어 손해를 회복할 수 있는지, 어떤 순서로 정리해야 하는지 막막한 상태입니다." 공인중개사법 제25조는 중개대상물 확인·설명의무를, 제30조는 중개사의 손해배상책임을, 민법 제368조는 공동저당의 배당과 경매대가 산정을 정하는 영역입니다. 판례·실무는 개업공인중개사가 다세대주택의 특정 세대를 중개할 때 그 세대뿐 아니라 공동저당으로 묶인 다른 세대의 선순위 권리와 그 세대 임차인의 보증금·기간 등도 확인·설명하고 확인·설명서에 기재할 의무가 있고, 이를 고의·과실로 위반해 임차의뢰인에게 손해를 입혔다면 배상책임을 부담한다고 보는 본 사례 흐름이 있는 영역입니다. 다세대 + 공동저당 + 선순위 미설명 결합은 \'중개사 확인·설명의무·배상책임 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리·배당 ② 공동저당·선순위 ③ 설명의무 위반 ④ 배상책임 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 배당 ② 공동저당 ③ 설명 ④ 배상 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신탁등기 주택 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리/배당·공동저당/선순위·설명의무 위반·배상책임·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·배당</strong> — 등기부·근저당·확정일자·전입, 경매 배당표와 미수령 잔액 확인.</li>\n<li><strong>② 공동저당·선순위</strong> — 공동저당으로 묶인 다른 세대의 선순위 권리·임차인 보증금 정리.</li>\n<li><strong>③ 설명의무 위반</strong> — 중개사가 다른 세대 선순위를 조사·확인해 설명·기재했는지 정리.</li>\n<li><strong>④ 배상책임</strong> — 고의·과실 위반과 손해 발생의 인과관계 정리.</li>\n<li><strong>⑤ 회수</strong> — 중개사·공제·임대인 등에 대한 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개업공인중개사는 다세대주택의 특정 세대를 중개할 때 공동저당으로 묶인 다른 세대의 선순위 권리와 그 임차인의 보증금·기간 등을 확인·설명하고 확인·설명서에 기재할 의무가 있고, 이를 위반해 손해를 입혔다면 배상책임을 부담할 여지가 있는 영역. 공동저당·선순위와 설명·기재 내용을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·배당 자료 확인 (즉시)</strong> — 등기부·근저당·확정일자·전입, 경매 배당표·미수령 잔액 점검.</li>\n<li><strong>2단계 — 공동저당·선순위 정리 (수일 내)</strong> — 공동저당으로 묶인 다른 세대의 선순위 권리·임차인 보증금 확인.</li>\n<li><strong>3단계 — 설명의무 위반 정리 (가능한 빨리)</strong> — 확인·설명서 기재 내용과 다른 세대 선순위 조사·확인 여부 점검.</li>\n<li><strong>4단계 — 배상책임·청구 정리 (병행)</strong> — 고의·과실, 손해 인과관계, 중개사·공제 청구 검토.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 미회수 잔액 처리, 손해배상·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신탁등기 주택 전세사기 중개사 설명의무 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리·배당·설명의무·배상책임 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>중개대상물 확인·설명서 (권리관계·선순위 기재)</strong></li>\n<li><strong>부동산등기부등본 (공동저당·근저당·소유관계)</strong></li>\n<li><strong>다른 세대 선순위·임차인 보증금 현황 자료 (공동담보)</strong></li>\n<li><strong>경매 배당표·배당요구 자료 (미수령 잔액)</strong></li>\n<li><strong>중개사 공제증서·중개 경위 자료 (배상책임)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공동저당으로 묶인 다세대주택은 다른 세대의 선순위 권리와 임차인 보증금이 회수 가능성을 좌우하므로, 중개대상물 확인·설명서에 그 사정이 어떻게 기재됐는지와 중개사가 실제로 조사·확인해 설명했는지를 정리해두는 것이 핵심입니다. 등기부·배당표·공제증서를 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>설명의무 범위</strong> — 공동저당으로 묶인 다른 세대 선순위까지 설명·기재했는지.</li>\n<li><strong>경매대가 산정</strong> — 다른 세대 선순위·소액보증금을 공제한 경매대가의 의미.</li>\n<li><strong>배상책임</strong> — 고의·과실과 손해의 인과관계가 인정되는지.</li>\n<li><strong>확인·설명서</strong> — 권리관계·선순위가 단독주택 등으로 잘못 기재됐는지.</li>\n<li><strong>회수 경로</strong> — 중개사·공제·임대인에 대한 회수.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동저당 다세대 중개사의 선순위 확인·설명의무',
        summary:
          '대법원 2024다305087(대법원, 2025.12.04 선고) 영역에서 법원은 개업공인중개사가 다세대주택 건물 중 임대의뢰인 소유의 특정 세대에 대한 임대차를 중개하는 경우, 중개대상물 및 그 건물 중 임대의뢰인 소유의 다른 세대에 공동저당권 또는 공동근저당권이 설정돼 있다면 그 다른 세대의 등기부에 표시된 선순위권리를 확인·설명해야 하고, 그 다른 세대에 임대차계약을 맺고 거주하는 임차인이 있다면 그 보증금·시기·종기 등도 확인·설명해 중개대상물 확인·설명서에 기재해 교부해야 하며, 공동저당의 목적 부동산인 임차주택의 경매대가는 매각대금에서 선순위 임대차보증금이나 소액보증금 등을 공제해 산정되므로, 중개업자가 고의·과실로 이러한 의무를 위반해 임차의뢰인에게 재산상 손해를 입혔다면 공인중개사법 제30조에 따른 배상책임을 부담한다고 판시했습니다. 신탁등기·공동저당 주택 전세사기 사안에서도 중개사 확인·설명의무와 배상책임을 검토해볼 수 있습니다.',
        takeaway: '다세대 + 공동저당 + 선순위 미설명 결합 시 중개사 확인·설명의무·배상책임 평가 검토 영역 — 확인·설명서·공동저당·배당표·공제증서 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '다른 세대 선순위까지 중개사가 설명해야 하나요?',
        answer:
          '<strong>공동저당으로 묶인 다른 세대 선순위·임차인 보증금도 확인·설명할 의무가 있는 영역입니다.</strong> 확인·설명서 기재 내용을 점검.',
      },
      {
        question: '확인·설명서에 단독주택으로 잘못 적혀 있으면요?',
        answer:
          '<strong>권리관계·물건 표시가 부실하면 설명의무 위반이 다퉈질 여지가 있는 영역입니다.</strong> 확인·설명서·등기부를 대조.',
      },
      {
        question: '공동저당이면 제 보증금 회수가 왜 어려워지나요?',
        answer:
          '<strong>경매대가에서 선순위·소액보증금을 공제해 배당돼 회수가 줄 수 있는 영역입니다.</strong> 배당표·선순위 현황을 확인.',
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
      { label: '전세사기 중개사 책임 범위', href: '/guide/jeonse-fraud/jeonse-fraud-broker-liability' },
      { label: '선순위 근저당 경매 배당 보증금 회수 절차', href: '/guide/jeonse-fraud/jeonse-fraud-priority-mortgage-auction-distribution-recovery-track' },
      { label: '다가구주택 후순위 보증금 우선변제 판단', href: '/guide/jeonse-fraud/jeonse-fraud-multi-household-junior-priority-deposit-track' },
      { label: '경매 배당 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-recovery-track' },
      { label: '신축 빌라 미등기 보증금 회수 판단', href: '/guide/jeonse-fraud/jeonse-fraud-new-villa-unregistered-deposit-track' },
    ],
  },

  // ─── 10. jeonse-fraud-fake-agent-impersonation-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-fake-agent-impersonation-track',
    keyword: '가짜 중개인 전세사기',
    questionKeyword: '중개사를 끼고 매매와 임대차가 얽힌 집에 들어왔는데, 매수인이 제 보증금 반환채무를 떠안기로 하고 그만큼 매매대금에서 깎았다고 했어요. 그런데 그게 면책적 인수가 아니어서 기존 임대인도 여전히 책임이 있다는데, 중개사가 이런 법적 성격까지 설명했어야 하는 건지, 책임을 물을 수 있는지 막막합니다.',
    ctaKeyword: '가짜 중개인 전세사기 채무인수 설명의무 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '채무인수 전세사기 — 5단계 중개사 설명의무 점검 | 로앤가이드',
      description:
        '매매로 보증금 채무가 넘어가는 집에서 채무인수 성격이 걱정된다면 공인중개사법 제29조 중개사 주의의무와 채무인수 설명 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"개업공인중개사를 통해 매매와 임대차가 얽힌 주택에 전세로 들어오거나 그런 집의 임차인으로 남게 된 임차인입니다. 계약 과정에서 새 매수인이 제 임대차보증금 반환채무를 \'인수\'하기로 하고 그 채무액만큼 매매대금에서 공제하기로 약정했다고 들었는데, 나중에 보니 그 인수가 기존 임대인을 완전히 책임에서 벗어나게 하는 면책적 채무인수인지, 아니면 기존 임대인도 함께 책임지는 병존적 인수나 단순 이행인수인지가 불분명했습니다. 그 법적 성격에 따라 제가 보증금을 누구에게 청구할 수 있는지가 완전히 달라지는데, 중개사는 \'매수인이 보증금을 떠안기로 했다\'는 정도만 말했을 뿐 그 인수의 법적 성격까지는 설명해주지 않았어요. 이런 채무인수의 법적 성격까지 중개사가 조사·설명할 의무가 있는지, 책임을 물어 보증금을 지킬 수 있는지 막막한 상태입니다." 공인중개사법 제29조 제1항은 중개사의 신의·성실 공정 중개 의무를, 제30조는 손해배상책임을, 변호사법 제3조는 법률사무의 범위를 정하는 영역입니다. 판례·실무는 중개행위는 거래가 성립하도록 조력·주선하는 사실행위로서 법률사무와 구별되고, 매수인이 보증금 반환채무를 인수하면서 그 채무액을 매매대금에서 공제하기로 한 경우 그 채무인수의 법적 성격을 가리는 행위는 법률사무에 해당하므로, 중개사가 그 법적 성격까지 조사·확인해 설명하지 않았다는 사정만으로는 그릇된 정보를 전달하는 등 특별한 사정이 없는 한 선관주의의무를 위반했다고 보기 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 매매·임대차 + 채무인수 + 성격 불명 결합은 \'중개사 주의의무 범위·채무인수 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리·당사자 ② 채무인수 성격 ③ 중개사 의무 ④ 청구 상대방 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 당사자 ② 성격 ③ 의무 ④ 상대방 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가짜 중개인 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리/당사자·채무인수 성격·중개사 의무·청구 상대방·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·당사자</strong> — 등기부·계약서·매매 경위, 임대인·매수인 등 당사자 관계 확인.</li>\n<li><strong>② 채무인수 성격</strong> — 면책적·병존적 인수인지 이행인수인지 약정 내용 정리.</li>\n<li><strong>③ 중개사 의무</strong> — 중개사가 채무인수 법적 성격까지 설명할 의무 범위 정리.</li>\n<li><strong>④ 청구 상대방</strong> — 인수 성격에 따라 임대인·매수인 중 청구 상대방 정리.</li>\n<li><strong>⑤ 회수</strong> — 보증금 청구·반환소송 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 채무인수의 법적 성격을 가리는 일은 법률사무에 해당해, 중개사가 그 성격까지 설명하지 않았다는 사정만으로는 특별한 사정이 없는 한 주의의무 위반으로 보기 어려운 영역. 다만 그릇된 정보를 전달했는지와 인수 성격에 따른 청구 상대방을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·당사자 확인 (즉시)</strong> — 등기부·계약서·매매계약, 임대인·매수인 등 당사자 관계 점검.</li>\n<li><strong>2단계 — 채무인수 성격 정리 (수일 내)</strong> — 면책적·병존적·이행인수 여부와 매매대금 공제 약정 정리.</li>\n<li><strong>3단계 — 중개사 의무·정보 점검 (가능한 빨리)</strong> — 중개사가 그릇된 정보를 전달했는지, 설명·기재 내용 확인.</li>\n<li><strong>4단계 — 청구 상대방·회수 정리 (병행)</strong> — 인수 성격에 따른 임대인·매수인 청구, 회수 경로 정리.</li>\n<li><strong>5단계 — 잔액 회수·소송 (병행)</strong> — 보증금반환소송·손해배상, 전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가짜 중개인 전세사기 채무인수 설명의무 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리·채무인수 성격·중개사 의무 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>매매계약서·채무인수 약정 자료 (인수 성격)</strong></li>\n<li><strong>매매대금 공제 내역·정산 자료 (보증금 공제)</strong></li>\n<li><strong>부동산등기부등본 (소유권 변동·근저당)</strong></li>\n<li><strong>중개대상물 확인·설명서·중개 경위 자료 (정보 전달)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>보증금 송금 내역·임대인/매수인 연락 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채무인수의 법적 성격을 가리는 일은 법률사무라서 중개사가 그 성격까지 설명하지 않았다는 사정만으로는 특별한 사정이 없는 한 책임을 묻기 어려울 수 있으므로, 중개사가 그릇된 정보를 전달했는지와 인수 약정의 내용을 매매계약서·공제 내역으로 정리해두는 것이 핵심입니다. 인수 성격에 따라 임대인·매수인 중 청구 상대방이 달라지므로 등기부·송금 내역을 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무인수 성격</strong> — 면책적·병존적 인수인지 이행인수인지.</li>\n<li><strong>중개사 의무 범위</strong> — 채무인수 법적 성격까지 설명할 의무가 있는지.</li>\n<li><strong>그릇된 정보</strong> — 중개사가 잘못된 정보를 전달한 특별한 사정이 있는지.</li>\n<li><strong>청구 상대방</strong> — 인수 성격에 따른 임대인·매수인 책임.</li>\n<li><strong>회수 경로</strong> — 보증금반환소송·손해배상 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채무인수 법적 성격에 관한 중개사 설명의무의 한계',
        summary:
          '대법원 2024다239364(대법원, 2024.09.12 선고) 영역에서 법원은 부동산중개업자와 중개의뢰인의 관계는 민법상 위임관계와 같아 중개사는 선량한 관리자의 주의로 신의·성실하게 중개행위를 할 의무가 있으나, 중개행위는 거래당사자 사이의 매매·임대차 등을 알선하는 사실행위로서 변호사법 제3조의 법률사무와 구별되고, 매수인이 임대차보증금 반환채무를 인수하면서 그 채무액을 매매대금에서 공제하기로 약정한 경우 그 채무인수가 면책적·이행·병존적 중 무엇인지 법적 성격을 가리는 행위는 법률사무에 해당하므로, 중개사가 그 법적 성격까지 조사·확인해 설명하지 않았다는 사정만으로는 그릇된 정보를 전달하는 등 특별한 사정이 없는 한 선량한 관리자의 주의로 성실하게 중개할 의무를 위반했다고 볼 수 없다고 판시했습니다. 가짜 중개인 전세사기 사안에서도 채무인수 설명의무의 한계와 중개사 책임을 검토해볼 수 있습니다.',
        takeaway: '매매·임대차 + 채무인수 + 성격 불명 결합 시 중개사 주의의무 범위·채무인수 평가 검토 영역 — 매매계약서·공제 내역·인수 성격·청구 상대방 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사가 채무인수 법적 성격까지 설명했어야 하나요?',
        answer:
          '<strong>법적 성격을 가리는 일은 법률사무라 특별한 사정이 없으면 설명 의무로 보기 어려운 영역입니다.</strong> 그릇된 정보 전달 여부를 점검.',
      },
      {
        question: '면책적 인수인지 아닌지가 왜 중요한가요?',
        answer:
          '<strong>인수 성격에 따라 임대인·매수인 중 청구 상대방이 달라지는 영역입니다.</strong> 매매계약서·인수 약정을 정리.',
      },
      {
        question: '그래도 중개사 책임을 물을 수 있는 경우가 있나요?',
        answer:
          '<strong>그릇된 정보를 전달한 특별한 사정이 있으면 책임이 다퉈질 여지가 있는 영역입니다.</strong> 중개 경위·설명 내용을 확보.',
      },
      {
        question: '보증금은 누구에게 청구하나요?',
        answer:
          '<strong>채무인수 성격에 따라 임대인·매수인에게 청구할 수 있는 영역입니다.</strong> 인수 약정과 등기부를 확인.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 채무인수·청구 상대방 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '신탁부동산 전세 중개 설명의무', href: '/guide/jeonse-fraud/jeonse-fraud-trust-property-broker-explanation-duty-track' },
      { label: '전세사기 경매 배당 절차와 우선변제 방법', href: '/guide/jeonse-fraud/jeonse-fraud-auction-bidding-guide' },
      { label: '임대인 변경 후 보증금 승계 깡통전세', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-change-deposit-succession-track' },
      { label: '중개사 선순위 보증금 설명 누락 손해', href: '/guide/jeonse-fraud/jeonse-fraud-broker-senior-deposit-misinfo-liability-track' },
      { label: '신축빌라 시세조작 깡통전세 회수', href: '/guide/jeonse-fraud/jeonse-fraud-newbuild-villa-inflated-deposit-track' },
    ],
  },
];
