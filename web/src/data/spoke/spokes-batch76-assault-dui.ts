import { SpokePage } from '../spoke-pages';

// batch76 assault + dui — 8개 (2026-05-24)
//
// 고유 존재 이유:
// assault 4:
// 1. 층간소음 항의 방문 폭행 — '윗집 직접 방문 + 멱살·밀침 + 전치 2주 + 현관 CCTV' 트랙 (폭력행위처벌법 결합)
// 2. 택시 요금 시비 기사 폭행 — '요금·경로 시비 + 기사가 하차 승객 추격 + 블랙박스·앱 호출기록' 트랙
// 3. 헬스장 기구 순서 시비 폭행 — '기구 사용 순서 시비 + 덤벨 투척 + 위험한 물건 + 시설 CCTV' 트랙
// 4. 반려견 목줄 분쟁 폭행 (가해 혐의) — '산책 중 목줄 언쟁 + 밀침 신고 + 위협 방어 항변' 트랙
//
// dui 4 (모두 운전자 본인 대응):
// 5. 골프장 카트 음주운전 — '골프장 내부 통로가 도교법상 도로인지' 트랙
// 6. 숙취 다음날 운전 적발 — '전날 술 잔존 + 출근길 적발 + 술 깬 줄 알았다 항변 + 전력 가중' 트랙
// 7. 대리기사 시비 후 본인 음주운전 — '대리기사 하차 + 본인 직접 운전 + 측정 과정 다툼' 트랙
// 8. 위드마크 역산 음주수치 다툼 — '사고 후 지연 측정 + 위드마크 역산 + 전제값 다툼' 트랙

export const spokesBatch76AssaultDui: SpokePage[] = [
  // ─── 1. assault-noise-complaint-visit-violence-track ───
  {
    domain: 'assault',
    slug: 'assault-noise-complaint-visit-violence-track',
    keyword: '층간소음 항의 방문 폭행',
    questionKeyword: '윗집에 층간소음을 항의하러 갔다가 윗집 거주자가 멱살을 잡고 밀쳐 넘어뜨려 전치 2주 상해를 입었어요. 어떻게 대응하나요?',
    ctaKeyword: '층간소음 항의 방문 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '층간소음 항의 방문 폭행 — 5단계 상해 다툼 | 로앤가이드',
      description:
        '윗집에 층간소음을 항의하러 갔다 멱살·밀침으로 다쳤다면 상해·폭력행위처벌법·증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 아파트 아래층 거주자이고 몇 달간 윗집 발소리·가구 끄는 소음으로 잠을 설치다 직접 인터폰 대신 윗집을 찾아가 정중히 항의했습니다. 그런데 현관문을 연 윗집 거주자가 갑자기 본인의 멱살을 잡고 복도 쪽으로 강하게 밀쳐 넘어뜨렸고, 본인은 손목과 어깨를 바닥에 부딪혀 정형외과에서 전치 2주 상해 진단을 받았어요. 다행히 양쪽 세대 현관 위 공용 복도 CCTV에 멱살을 잡고 밀치는 장면이 녹화돼 있었고, 진단서·치료비 영수증도 확보한 상태입니다. 상대는 \'먼저 찾아온 쪽이 잘못\'이라며 책임을 부인 중이에요." 형법 제257조는 \'사람의 신체를 상해\'한 행위를 처벌(7년 이하 징역) 영역으로 규정하고, 형법 제260조 폭행과 폭력행위 등 처벌에 관한 법률은 상습·공동·흉기 결합 시 가중 평가 영역이며, 항의 방문 자체는 정당한 권리 행사로 볼 여지가 큰 사정입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 층간소음 항의 방문 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 2주 + 멱살·밀침 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 공용 복도 CCTV·진단서·소음 민원 기록.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 폭력행위처벌법 검토.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 항의 방문은 정당한 권리 행사로 평가될 여지가 큰 사정이고, 상대의 멱살·밀침이 먼저라는 점이 CCTV로 입증되면 방어 정황이 약화됩니다. 폭행을 수단으로 한 상해는 폭력행위처벌법 평가 대상이 될 수 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정형외과 진단서·X-ray·치료 기록.</li>\n<li><strong>2단계 — 공용 복도 CCTV 보존 요청 (1주 내)</strong> — 관리사무소·입대의에 영상 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭력행위처벌법 검토 고소.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">층간소음 항의 방문 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>정형외과 진단서(전치 2주)·X-ray·치료 기록</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>공용 복도 CCTV 영상(관리사무소)</strong></li>\n<li><strong>과거 층간소음 민원·중재 기록</strong></li>\n<li><strong>사건 당시 통화·문자·인터폰 기록</strong></li>\n<li><strong>목격 이웃 증언·연락처</strong></li>\n<li><strong>본인 옷·바닥 충돌 흔적 사진</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공용 복도 CCTV는 보존 기간이 보통 1~2주이므로 즉시 관리사무소에 보존 요청. 과거 층간소음 민원 기록은 항의 방문의 정당성 정황으로 평가됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해 평가</strong> — 멱살·밀침 + 전치 2주 결합.</li>\n<li><strong>항의 방문 정당성</strong> — 권리 행사 vs 주거침입 다툼.</li>\n<li><strong>위험한 물건 결합</strong> — 폭력행위처벌법 가중 여부.</li>\n<li><strong>합의금 산정</strong> — 전치 2주 + 후유증.</li>\n<li><strong>민사 배상</strong> — 치료·위자료·일실수입.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112</strong></li>\n<li><strong>층간소음 이웃사이센터 1661-2642</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행·상해 평가 영역',
        summary:
          '대법원 90도2017(대법원, 1990.11.13 선고) 영역에서 법원은 폭행을 수단으로 한 상해 사건에서 폭력행위 등 처벌에 관한 법률상 평가 대상이 될 수 있는지를 다루면서, 행위 태양과 결과의 결합을 종합해 평가해야 한다고 본 사례 흐름이 있고, 층간소음 항의 방문 폭행에서도 멱살·밀침 + 상해 결과 결합이 동일 평가 기준으로 검토될 수 있습니다.',
        takeaway: '항의 방문 중 멱살·밀침 + 전치 2주 결합 시 상해·폭력행위처벌법 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '항의하러 먼저 찾아간 게 불리하게 작용하나요?',
        answer:
          '<strong>정당한 권리 행사로 평가될 여지가 큰 영역입니다.</strong> 과거 소음 민원 기록이 정황 자료.',
      },
      {
        question: '멱살을 잡고 민 것도 상해인가요?',
        answer:
          '<strong>그 결과로 전치 2주가 발생했다면 상해 평가 영역입니다.</strong> 진단서·CCTV 결합 입증.',
      },
      {
        question: '복도 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>관리사무소·입주자대표회의에 즉시 보존 요청 영역입니다.</strong> 1주 안에 진행 권장.',
      },
      {
        question: '주거침입으로 역고소당할 수 있나요?',
        answer:
          '<strong>현관 앞 정중한 항의는 침입 평가가 약한 영역입니다.</strong> 진입 범위·태양 자료 보존.',
      },
      {
        question: '합의금은 얼마 정도 필요한가요?',
        answer:
          '<strong>전치 2주 + 후유증에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
    ],
  },

  // ─── 2. assault-taxi-fare-dispute-driver-violence-track ───
  {
    domain: 'assault',
    slug: 'assault-taxi-fare-dispute-driver-violence-track',
    keyword: '택시 요금 시비 기사 폭행',
    questionKeyword: '택시 요금·경로 시비 끝에 내린 저를 기사가 따라와 폭행했어요. 블랙박스·앱 호출기록·진단서가 있어요. 어떻게 대응하나요?',
    ctaKeyword: '택시 요금 시비 기사 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '택시 요금 시비 기사 폭행 — 5단계 상해 다툼 | 로앤가이드',
      description:
        '택시 요금·경로 시비 끝에 하차 후 기사에게 폭행당했다면 폭행·상해·증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 심야에 택시 앱으로 호출한 택시를 탔는데 기사가 미터기보다 먼 우회 경로로 운행해 요금을 두고 시비가 붙었습니다. 목적지에 도착해 정당한 요금을 카드로 결제하고 하차했는데, 기사가 갑자기 차에서 내려 본인을 따라와 어깨를 잡아 돌리고 얼굴을 손으로 가격했어요. 본인은 입가가 찢어지고 안경이 부서졌으며 인근 병원에서 전치 2주 진단을 받았습니다. 다행히 택시 블랙박스(차내·차외 모두)에 시비와 추격·가격 장면이 녹화됐고, 앱 호출기록·결제 내역·진단서까지 확보한 상태예요. 기사는 \'먼저 욕을 했다\'며 책임을 부인 중입니다." 형법 제260조는 \'사람의 신체에 대한 폭행\'을, 제257조는 그 결과 상해가 발생한 경우를 처벌하는 영역이며, 운송 종료 후 승객을 따라온 추격·가격은 우발성보다 고의 정황이 평가될 소지가 큰 사정입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 요금 시비 기사 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 2주 + 추격·가격 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 택시 블랙박스·앱 호출기록·결제 내역.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제260조 폭행·제257조 상해.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·안경 등 물품·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 하차 후 기사가 승객을 따라와 가격한 정황은 우발성보다 고의 평가에 가까운 사정. 택시 블랙박스는 차내·차외 모두 녹화돼 결정 증거로 평가됩니다. 운송사업자 사용자 책임도 별도 검토 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 병원 진단서·치료 기록·부서진 안경.</li>\n<li><strong>2단계 — 블랙박스·앱 기록 확보 (1주 내)</strong> — 운수회사·플랫폼에 영상·호출기록 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 폭행 + 상해 고소.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·물품·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 요금 시비 기사 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원 진단서(전치 2주)·치료 기록</strong></li>\n<li><strong>치료비·약제비·안경 수리 영수증</strong></li>\n<li><strong>택시 블랙박스 영상(차내·차외)</strong></li>\n<li><strong>택시 앱 호출기록·운행 경로 기록</strong></li>\n<li><strong>카드 결제 내역·요금 영수증</strong></li>\n<li><strong>운수회사·차량 번호·기사 정보</strong></li>\n<li><strong>주변 목격자·CCTV 정황 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시 블랙박스는 운수회사가 보관하므로 즉시 보존 요청. 앱 호출기록·결제 내역은 시비 경위(우회·요금 다툼)를 객관적으로 뒷받침하는 자료로 평가됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고의·우발 평가</strong> — 하차 후 추격 정황.</li>\n<li><strong>상호 시비 다툼</strong> — \'먼저 욕했다\' 항변.</li>\n<li><strong>운수회사 사용자 책임</strong> — 사용자 배상 검토.</li>\n<li><strong>합의금 산정</strong> — 전치 2주 + 물품 손해.</li>\n<li><strong>민사 배상</strong> — 치료·물품·위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112</strong></li>\n<li><strong>택시 불편·민원 다산콜 120</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해·폭력행위 평가 영역',
        summary:
          '대법원 2008도3656(대법원, 2008.12.11 선고) 영역에서 법원은 상해의 공소사실에 별도 폭력행위를 추가하려면 기본적 사실관계의 동일성 평가가 필요하다고 본 사례 흐름이 있고, 택시 요금 시비 후 하차 승객을 추격해 가격한 사안에서도 폭행·상해 행위의 동일성과 결합을 종합해 평가될 수 있습니다.',
        takeaway: '하차 후 추격·가격 + 전치 2주 결합 시 폭행·상해 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '기사가 \'먼저 욕을 했다\'고 주장합니다',
        answer:
          '<strong>욕설이 있었다 해도 가격은 별개 평가 영역입니다.</strong> 블랙박스 음성·영상이 결정 자료.',
      },
      {
        question: '택시 블랙박스는 어떻게 확보하나요?',
        answer:
          '<strong>운수회사·플랫폼에 즉시 보존 요청 영역입니다.</strong> 1주 안에 진행 권장.',
      },
      {
        question: '운수회사에도 책임을 물을 수 있나요?',
        answer:
          '<strong>사용자 책임 평가 영역입니다.</strong> 차량 번호·운행 자료 보존.',
      },
      {
        question: '부서진 안경 값도 청구되나요?',
        answer:
          '<strong>물품 손해도 민사 배상 청구 영역입니다.</strong> 수리·구매 영수증 보존.',
      },
      {
        question: '합의금은 얼마 정도 필요한가요?',
        answer:
          '<strong>전치 2주 + 물품 손해에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
    ],
  },

  // ─── 3. assault-gym-equipment-order-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-gym-equipment-order-dispute-track',
    keyword: '헬스장 기구 순서 시비 폭행',
    questionKeyword: '헬스장에서 기구 사용 순서로 시비가 붙어 상대가 덤벨을 던지고 밀쳐 다쳤어요. 시설 CCTV와 목격 회원이 있어요. 어떻게 대응하나요?',
    ctaKeyword: '헬스장 기구 순서 시비 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 기구 순서 시비 폭행 — 5단계 특수상해 다툼 | 로앤가이드',
      description:
        '헬스장 기구 순서 시비 끝에 덤벨 투척·밀침으로 다쳤다면 특수상해·증거·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 동네 헬스장에서 운동 중 한 기구를 세트 사이 휴식하며 사용하고 있었는데, 다른 회원이 \'순서를 안 비킨다\'며 시비를 걸어왔습니다. 말다툼이 이어지던 중 상대가 들고 있던 소형 덤벨(약 3kg)을 본인 쪽으로 던졌고, 이어 어깨를 강하게 밀쳐 본인이 다른 기구 모서리에 부딪혀 옆구리와 팔에 타박상·찰과상을 입었어요. 본인은 정형외과에서 전치 2주 진단을 받았고, 헬스장 천장 CCTV에 덤벨을 던지고 미는 장면이 녹화됐으며 당시 운동 중이던 다른 회원 2명이 목격자로 진술해줄 수 있는 상황입니다. 상대는 \'위협만 했지 안 맞았다\'며 책임을 부인 중이에요." 형법 제257조는 상해를, 제260조는 폭행을 처벌하고, 폭력행위 등 처벌에 관한 법률은 위험한 물건을 휴대·사용한 경우를 가중 평가하는 영역이며, 던진 덤벨은 사안에 따라 위험한 물건으로 평가될 소지가 있는 사정입니다. 피해자라면 ① 특수상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 기구 순서 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 특수상해 평가</strong> — 던진 덤벨 = 위험한 물건 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 시설 CCTV·목격 회원 진술·진단서.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 폭력행위처벌법 검토.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 던진 덤벨이 위험한 물건으로 평가되면 폭력행위처벌법 가중 영역에 들어갈 소지가 있습니다. 시설 CCTV + 목격 회원 2명 진술이 결정 증거. 헬스장 사업자 안전 관리 책임도 별도 검토 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정형외과 진단서·타박상 사진.</li>\n<li><strong>2단계 — 시설 CCTV·목격자 확보 (1주 내)</strong> — 헬스장에 영상 보존 요청 + 목격 회원 연락처.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭력행위처벌법 검토 고소.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 기구 순서 시비 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>정형외과 진단서(전치 2주)·치료 기록</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>헬스장 시설 CCTV 영상</strong></li>\n<li><strong>목격 회원 2명 진술서·연락처</strong></li>\n<li><strong>타박상·찰과상 부위 사진</strong></li>\n<li><strong>던진 덤벨 사진·기구 배치 자료</strong></li>\n<li><strong>헬스장 회원권·이용 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헬스장 CCTV는 보존 기간이 짧을 수 있어 즉시 보존 요청. 던진 물건의 무게·재질·거리 자료가 위험한 물건 평가의 핵심 사정으로 검토됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위험한 물건 평가</strong> — 던진 덤벨의 무게·태양.</li>\n<li><strong>상해 인과관계</strong> — 밀침 → 기구 모서리 충돌.</li>\n<li><strong>위협만 했다 항변</strong> — 가해자 부인.</li>\n<li><strong>합의금 산정</strong> — 전치 2주 + 후유증.</li>\n<li><strong>시설 안전 책임</strong> — 헬스장 사업자.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해 이중 평가 금지 영역',
        summary:
          '대법원 2009도1934(대법원, 2009.07.23 선고) 영역에서 법원은 상해 부분을 별도로 처벌한 경우 이를 다시 결과적 가중범의 상해로 이중 평가할 수는 없다고 본 사례 흐름이 있고, 헬스장 기구 순서 시비에서 덤벨 투척·밀침으로 인한 상해 사안에도 행위와 결과의 평가 범위를 신중히 가려야 한다는 기준이 검토될 수 있습니다.',
        takeaway: '덤벨 투척·밀침 + 전치 2주 결합 시 특수상해·폭력행위처벌법 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '덤벨이 위험한 물건으로 평가되나요?',
        answer:
          '<strong>무게·재질·던진 태양에 따라 평가될 소지가 있는 영역입니다.</strong> 사례 분석 필요.',
      },
      {
        question: '상대가 \'위협만 했지 안 맞았다\'고 합니다',
        answer:
          '<strong>밀침으로 모서리에 부딪힌 상해는 별개 평가 영역입니다.</strong> CCTV·진단서 결합 입증.',
      },
      {
        question: '목격 회원 진술이 도움이 되나요?',
        answer:
          '<strong>제3자 목격 진술은 결정 자료로 평가됩니다.</strong> 연락처·진술서 조기 확보.',
      },
      {
        question: '헬스장에도 책임을 물을 수 있나요?',
        answer:
          '<strong>시설 안전 관리 의무 평가 영역입니다.</strong> 정황 자료가 결정.',
      },
      {
        question: '합의금은 얼마 정도 필요한가요?',
        answer:
          '<strong>전치 2주 + 후유증에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
    ],
  },

  // ─── 4. assault-dog-leash-dispute-accused-track ───
  {
    domain: 'assault',
    slug: 'assault-dog-leash-dispute-accused-track',
    keyword: '반려견 목줄 분쟁 폭행 가해 혐의',
    questionKeyword: '산책 중 반려견 목줄 문제로 언쟁하다 상대를 밀쳤다는 폭행 혐의로 신고당했어요. 저는 위협을 느껴 방어했는데 어떻게 대응하나요?',
    ctaKeyword: '반려견 목줄 분쟁 폭행 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '반려견 목줄 분쟁 폭행 혐의 — 5단계 정당방위 다툼 | 로앤가이드',
      description:
        '산책 중 목줄 시비로 폭행 혐의를 받고 있다면 정당방위·합의·양형 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 공원에서 반려견을 산책시키던 중 목줄 길이·접근 문제로 다른 견주와 언쟁이 시작됐습니다. 상대가 갑자기 본인 쪽으로 바짝 다가서며 손가락질하고 본인 어깨를 잡으려 해, 본인은 위협을 느껴 상대의 팔·가슴 부위를 손으로 밀쳐 거리를 벌렸어요. 그런데 상대가 \'폭행당했다\'며 경찰에 신고했고 본인은 폭행 혐의를 받고 있는 상황입니다. 본인 입장에서는 먼저 다가와 신체에 손을 대려 한 것은 상대이고, 본인은 방어를 위해 밀쳤을 뿐인데, 현장에 명확한 CCTV는 없고 양측 목격자 진술이 엇갈리는 상태예요." 형법 제260조 폭행은 신체 접촉만으로도 성립이 논의되는 영역이지만, 형법 제21조 정당방위·과잉방위 + 우발 + 상호 접근 정황이 종합 사정으로 평가될 소지가 있는 트랙입니다. 혐의를 받고 있다면 ① 정당방위 평가 ② 증거 보존 ③ 합의 ④ 진술 전략 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반려견 목줄 분쟁 폭행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 방위·증거·합의·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정당방위 평가</strong> — 상대가 먼저 손대려 한 정황 = 부당 침해 평가 가능.</li>\n<li><strong>② 증거 보존</strong> — 주변 CCTV·목격자·반려견 산책 정황.</li>\n<li><strong>③ 합의</strong> — 처벌불원 의사 협의가 양형 핵심.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 정황 일관 진술.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·반성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상대가 먼저 다가와 어깨를 잡으려 한 정황이 입증되면 방어 행위로 평가될 여지가 있는 영역. 다만 \'미는 정도\'가 방위 한계 안인지가 다툼 사정. 합의·초범·정황 자료가 양형 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·합의·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 자문 권장.</li>\n<li><strong>2단계 — 주변 CCTV·목격자 보존 (1주 내)</strong> — 공원·인근 상가 영상 + 목격자 연락처.</li>\n<li><strong>3단계 — 합의 협의 (1~2주)</strong> — 처벌불원 의사 협의.</li>\n<li><strong>4단계 — 경찰·검찰 진술 (1~2개월)</strong> — 정당방위·우발 일관 진술.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 반성문·자원봉사·합의서.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 혐의 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려견 목줄 분쟁 폭행 혐의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 방위·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>공원·인근 상가 CCTV 영상</strong></li>\n<li><strong>목격자·동행자 진술서·연락처</strong></li>\n<li><strong>반려견 산책 경로·시간 정황 자료</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>본인 신원·직장·가족·초범 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대가 먼저 신체에 손을 대려 한 정황이 영상·목격으로 뒷받침되면 정당방위 평가에 결정 사정. CCTV가 없는 사건이라 목격자 진술 조기 확보가 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당방위 한계</strong> — 미는 정도의 상당성.</li>\n<li><strong>상호 시비 평가</strong> — 누가 먼저 접근했는지.</li>\n<li><strong>합의 협의</strong> — 처벌불원 의사.</li>\n<li><strong>초범 평가</strong> — 전과 부재.</li>\n<li><strong>양형 자료</strong> — 반성·자원봉사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 우발 상황 책임 범위 평가 영역',
        summary:
          '대법원 2010도7412(대법원, 2010.12.23 선고) 영역에서 법원은 공동·우발 상황에서 파생 행위에 대한 책임 범위는 가담·예견 가능성 등을 종합해 평가해야 한다고 본 사례 흐름이 있고, 반려견 목줄 분쟁에서 상대 접근에 대한 방어 정황 사안에도 행위 경위·상호 관계·방위성을 종합해 검토될 수 있습니다.',
        takeaway: '상대 선접근 + 방어 밀침 정황이면 정당방위·상호 시비 평가 영역 — 변호인 상담·합의 권장.',
      },
    ],
    faq: [
      {
        question: '미는 정도도 폭행으로 논의되나요?',
        answer:
          '<strong>신체 접촉이 폭행으로 논의될 수 있는 영역입니다.</strong> 다만 정당방위·합의로 감경 검토 가능.',
      },
      {
        question: '상대가 먼저 손대려 했으면 정당방위인가요?',
        answer:
          '<strong>부당 침해 + 상당성 평가 영역입니다.</strong> 목격·영상 정황이 결정.',
      },
      {
        question: 'CCTV가 없는데 어떻게 입증하나요?',
        answer:
          '<strong>목격자 진술·산책 정황이 핵심 자료입니다.</strong> 연락처 조기 확보 권장.',
      },
      {
        question: '초범인데 처분은 어떻게 되나요?',
        answer:
          '<strong>합의 + 반성 시 기소유예·약식 검토가 가능한 영역입니다.</strong> 양형 자료가 결정.',
      },
      {
        question: '경찰 출석 전에 변호인 자문 받아야 하나요?',
        answer:
          '<strong>진술 일관성·정당방위 입증에 결정 사정 영역입니다.</strong> 자문 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
    ],
  },

  // ─── 5. dui-golf-cart-drunk-driving-track ───
  {
    domain: 'dui',
    slug: 'dui-golf-cart-drunk-driving-track',
    keyword: '골프장 카트 음주운전',
    questionKeyword: '골프장 안에서 음주 후 카트를 운전하다 적발됐어요. 골프장 통로가 도로교통법상 도로에 해당하나요?',
    ctaKeyword: '골프장 카트 음주운전 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '골프장 카트 음주운전 — 5단계 도로 해당성 다툼 | 로앤가이드',
      description:
        '골프장 카트 음주 단속을 받고 있다면 도로 해당성·도교법 적용·처벌 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 동반자들과 라운딩 중 그늘집에서 맥주 몇 잔을 마신 뒤 다음 홀로 이동하기 위해 골프장 카트를 운전하다 순찰 중인 직원·관계자의 신고로 음주 적발됐습니다. 카트가 다닌 곳은 골프장 내부 카트 전용 통로로, 일반 차량은 진입할 수 없고 회원·내장객만 출입하는 구역이에요. 본인은 \'골프장 안 사유지 통로일 뿐 일반 도로가 아니다\'라고 주장하지만, 경찰은 음주측정 결과를 근거로 음주운전 입건 절차를 진행했습니다. 핵심 쟁점은 골프장 내부 통로가 도로교통법상 \'도로\'에 해당하는지, 그리고 카트가 처벌 대상 운전에 해당하는지예요." 도로교통법 제2조는 \'도로\'를 일반 교통에 사용되는 모든 곳 등으로 정의하고, 제44조는 술에 취한 상태에서의 운전 금지를 규정하는 영역이며, 운전 장소가 도로교통법상 도로에 해당하는지가 처벌 평가의 출발점이 되는 사정입니다. 음주운전 혐의를 받고 있다면 ① 도로 해당성 ② 운전 평가 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 골프장 카트 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로·운전·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도로 해당성</strong> — 골프장 내부 통로 = 도로 평가 다툼.</li>\n<li><strong>② 운전 평가</strong> — 카트 운전이 처벌 대상인지 검토.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 도로 비해당 시 면허 처분 영향 검토.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·정황 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도로교통법 음주운전 처벌은 운전 장소가 도로교통법상 \'도로\'에 해당하는지를 따져 평가되는 영역. 골프장 내부 출입이 회원·내장객으로 제한되는지, 일반 교통에 제공되는지가 핵심 다툼 사정으로 검토됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 자문 권장.</li>\n<li><strong>2단계 — 통로 구조·출입 자료 (1주 내)</strong> — 카트 통로 사진·출입 제한·골프장 안내도.</li>\n<li><strong>3단계 — 도로 해당성 정황 자료 (1~2주)</strong> — 일반 차량 진입 가능 여부·이용 약관.</li>\n<li><strong>4단계 — 형사 절차 (1~3개월)</strong> — 진술 + 도로 해당성 자료 제출.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 반성문·자원봉사·기부.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">골프장 카트 음주운전 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로·운전·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과</strong></li>\n<li><strong>골프장 카트 통로 사진·안내도</strong></li>\n<li><strong>출입 제한·회원제 운영 자료</strong></li>\n<li><strong>일반 차량 진입 가능 여부 자료</strong></li>\n<li><strong>당일 라운딩·동반자 진술</strong></li>\n<li><strong>본인 반성문·자원봉사·기부 자료</strong></li>\n<li><strong>면허 처분 통지서·행정심판 청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카트 통로가 일반 교통에 제공되지 않고 출입이 회원·내장객으로 제한된다는 자료가 \'도로 비해당\' 주장의 핵심. 골프장 안내도·이용 약관이 결정 정황으로 검토됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로 해당성</strong> — 골프장 내부 통로.</li>\n<li><strong>운전 평가</strong> — 카트 운전 범위.</li>\n<li><strong>출입 제한 여부</strong> — 회원·내장객 한정.</li>\n<li><strong>면허 처분 영향</strong> — 도로 비해당 시 검토.</li>\n<li><strong>양형</strong> — 초범·반성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도로 해당성 평가 영역',
        summary:
          '대법원 2017도17762(대법원, 2017.12.28 선고) 영역에서 법원은 무면허·음주운전 처벌은 운전 장소가 도로교통법상 \'도로\'에 해당하는지를 따져 평가될 수 있다고 본 사례 흐름이 있고, 골프장 카트 음주운전에서도 내부 통로의 일반 교통 제공 여부·출입 제한 정황이 핵심 평가 트랙입니다.',
        takeaway: '골프장 카트 음주는 통로의 도로 해당성 평가 영역 — 변호인 상담·출입 제한 자료 권장.',
      },
    ],
    faq: [
      {
        question: '골프장 내부 통로도 도로인가요?',
        answer:
          '<strong>일반 교통에 제공되는지에 따라 평가가 갈리는 영역입니다.</strong> 출입 제한 자료가 핵심.',
      },
      {
        question: '카트도 음주운전 처벌 대상인가요?',
        answer:
          '<strong>운전 장소가 도로인지 함께 평가되는 영역입니다.</strong> 사례별 판단.',
      },
      {
        question: '도로가 아니면 처벌이 안 되나요?',
        answer:
          '<strong>도로 해당성은 핵심 다툼이지만 단정은 어려운 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '면허는 어떻게 되나요?',
        answer:
          '<strong>도로 해당성·수치에 따라 행정 처분이 갈리는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
      {
        question: '초범인데 처분은 어떻게 되나요?',
        answer:
          '<strong>도로·운전 평가에 따라 다른 영역입니다.</strong> 변호인 자문이 결정.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '2회 이상 처벌', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '측정거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },

  // ─── 6. dui-morning-after-hangover-driving-track ───
  {
    domain: 'dui',
    slug: 'dui-morning-after-hangover-driving-track',
    keyword: '숙취 다음날 운전 적발',
    questionKeyword: '전날 밤늦게까지 마신 술이 다음날 아침까지 남아 출근길에 운전하다 적발됐어요. 술이 깬 줄 알았는데 어떻게 대응하나요?',
    ctaKeyword: '숙취 다음날 운전 적발 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '숙취 다음날 운전 적발 — 5단계 음주 대응 다툼 | 로앤가이드',
      description:
        '전날 술이 남은 출근길 운전으로 음주 적발됐다면 수치·전력·형사 대응 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 전날 밤 회식에서 늦게까지 술을 마셨고, 충분히 잠을 잤으니 술이 깼다고 생각해 다음날 아침 평소처럼 출근길에 운전했습니다. 그런데 출근 도중 음주 단속에 걸렸고, 본인은 \'분명히 어제 마신 술인데 아침엔 멀쩡한 줄 알았다\'고 했지만 측정 결과 처벌 기준을 넘는 수치가 나왔어요. 본인은 음주운전을 의도한 적이 없고 숙취가 남은 줄 몰랐다는 입장이지만, 경찰은 수치를 근거로 입건 절차를 진행했습니다. 과거 음주 위반 전력이 있어 가중 적용 여부도 신경 쓰이는 상황이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 위반 전력에 따른 가중 규정도 두고 있는 영역이며, 다음날 잔존 알코올로 인한 운전도 \'술이 깬 줄 알았다\'는 사정만으로 책임이 면제되기는 어렵게 평가되는 사정입니다. 음주운전 혐의를 받고 있다면 ① 수치 평가 ② 고의·인식 ③ 전력 가중 ④ 형사·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 숙취 다음날 운전 적발 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·인식·전력·형사·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수치 평가</strong> — 측정 수치·처벌 구간 확인.</li>\n<li><strong>② 고의·인식</strong> — \'술 깬 줄 알았다\' 항변의 한계.</li>\n<li><strong>③ 전력 가중</strong> — 과거 위반 전력의 가중 적용 여부.</li>\n<li><strong>④ 형사·행정</strong> — 입건·기소 + 면허 처분 트랙.</li>\n<li><strong>⑤ 양형</strong> — 반성·정황·생계 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다음날 잔존 알코올 운전도 \'술이 깬 줄 알았다\'는 사정만으로 책임이 쉽게 면제되지는 않는 영역. 과거 음주 전력이 있으면 가중 처벌 규정의 적용 대상으로 평가될 수 있어 전력 정리가 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 자문 권장.</li>\n<li><strong>2단계 — 음주 시점·수면 정황 자료 (1주 내)</strong> — 전날 회식 시각·귀가·기상 시각 기록.</li>\n<li><strong>3단계 — 전력·면허 이력 정리 (1~2주)</strong> — 과거 위반 시점·처분 이력 확인.</li>\n<li><strong>4단계 — 형사·행정 절차 (1~3개월)</strong> — 진술 + 정황 자료 제출.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 반성문·자원봉사·생계 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">숙취 다음날 운전 적발 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·전력·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>전날 회식 시각·메뉴·귀가 기록</strong></li>\n<li><strong>수면·기상 시각 정황 자료</strong></li>\n<li><strong>과거 음주 위반 전력·처분 이력</strong></li>\n<li><strong>출퇴근·생계 운전 필요성 자료</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>면허 처분 통지서·행정심판 청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'다음날 잔존 알코올\' 사안은 음주 시점·수면 시간 정황이 인식 다툼의 자료가 될 수 있지만 면제 사유로 단정하긴 어렵습니다. 전력 가중 여부 정리가 처분 예측의 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고의·인식</strong> — \'술 깬 줄 알았다\' 항변.</li>\n<li><strong>수치 평가</strong> — 처벌 구간 확인.</li>\n<li><strong>전력 가중</strong> — 과거 위반 이력.</li>\n<li><strong>면허 처분</strong> — 행정 트랙 별도.</li>\n<li><strong>양형</strong> — 반성·생계.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주 전력 가중 평가 영역',
        summary:
          '대법원 2012도10269(대법원, 2012.11.29 선고) 영역에서 법원은 음주운전 전력이 있는 사람의 재적발은 가중 처벌 규정의 적용 대상으로 평가될 수 있다고 본 사례 흐름이 있고, 숙취 다음날 운전 적발에서도 과거 위반 전력이 처분 수위 평가의 중요 사정으로 검토될 수 있습니다.',
        takeaway: '다음날 잔존 알코올 + 과거 전력 결합 시 가중 처벌 평가 영역 — 변호인 상담·전력 정리 권장.',
      },
    ],
    faq: [
      {
        question: '\'술이 깬 줄 알았다\'는 항변이 통하나요?',
        answer:
          '<strong>면제 사유로 단정하긴 어려운 영역입니다.</strong> 음주 시점·수면 정황은 참작 자료.',
      },
      {
        question: '잠을 충분히 잤는데도 처벌되나요?',
        answer:
          '<strong>잔존 수치가 처벌 구간이면 평가 대상이 되는 영역입니다.</strong> 측정 결과가 기준.',
      },
      {
        question: '과거 전력이 있으면 얼마나 불리한가요?',
        answer:
          '<strong>가중 처벌 규정 적용 대상으로 평가될 수 있는 영역입니다.</strong> 전력 시점 정리 우선.',
      },
      {
        question: '면허는 어떻게 되나요?',
        answer:
          '<strong>수치·전력에 따라 정지·취소가 갈리는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
      {
        question: '출퇴근에 차가 꼭 필요한데 참작되나요?',
        answer:
          '<strong>생계 운전 필요성은 양형 참작 자료가 될 수 있습니다.</strong> 근무·통근 자료 보존.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '2회 이상 처벌', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '측정거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },

  // ─── 7. dui-proxy-driver-dispute-self-drive-track ───
  {
    domain: 'dui',
    slug: 'dui-proxy-driver-dispute-self-drive-track',
    keyword: '대리기사 시비 후 본인 음주운전',
    questionKeyword: '대리운전 기사와 요금·경로로 시비가 붙어 기사가 내린 뒤 제가 직접 음주 상태로 운전하다 적발됐어요. 측정 과정도 다툼이 있어요.',
    ctaKeyword: '대리기사 시비 후 본인 음주운전 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '대리기사 시비 후 음주운전 — 5단계 측정 다툼 | 로앤가이드',
      description:
        '대리기사 하차 후 직접 운전으로 음주 적발됐다면 측정 절차·형사·행정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 술자리 후 대리운전을 불렀는데, 이동 중 대리기사와 요금·경로 문제로 말다툼이 심해졌습니다. 기사가 도중에 차를 세우고 내려버려 본인은 길에 차를 둘 수 없다는 생각에 직접 운전대를 잡고 짧은 거리를 운전하다 단속에 적발됐어요. 본인은 \'대리기사가 일방적으로 내려 어쩔 수 없었다\'고 항변했지만, 음주 상태에서 본인이 운전한 사실 자체는 부인하기 어려운 상황입니다. 게다가 단속 현장에서 음주감지기 시험·측정 과정에서 본인이 응할지 말지를 두고 다툼이 있었고, 측정 절차의 적법성도 쟁점이 됐어요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고 경찰의 음주측정에 응할 의무를 규정하는 영역이며, 음주감지기 시험을 거부하는 태도도 측정에 응할 의사가 없는 것으로 평가될 수 있는지가 쟁점이 되는 사정입니다. 음주운전 혐의를 받고 있다면 ① 운전 사실 ② 측정 절차 ③ 부득이성 항변 ④ 형사·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대리기사 시비 후 본인 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전·측정·항변·형사·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전 사실</strong> — 본인 운전 구간·거리 확인.</li>\n<li><strong>② 측정 절차</strong> — 감지기·측정 과정의 적법성 평가.</li>\n<li><strong>③ 부득이성 항변</strong> — 기사 하차 정황의 참작 한계.</li>\n<li><strong>④ 형사·행정</strong> — 입건·기소 + 면허 처분 트랙.</li>\n<li><strong>⑤ 양형</strong> — 반성·정황·거리 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대리기사가 내렸다는 사정만으로 본인 운전 책임이 쉽게 면제되긴 어려운 영역. 다만 음주감지기 시험 거부 태도가 측정 거부로 평가될 수 있는지, 측정 절차가 적법했는지가 핵심 다툼 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 자문 권장.</li>\n<li><strong>2단계 — 대리 호출·시비 정황 자료 (1주 내)</strong> — 대리 앱 호출·결제·통화·블랙박스.</li>\n<li><strong>3단계 — 측정 절차 자료 (1~2주)</strong> — 단속 영상·측정 고지·감지기 과정 확인.</li>\n<li><strong>4단계 — 형사·행정 절차 (1~3개월)</strong> — 진술 + 절차 적법성 자료 제출.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 반성문·자원봉사·기부.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대리기사 시비 후 본인 음주운전 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전·측정·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>대리운전 앱 호출·결제·통화 기록</strong></li>\n<li><strong>대리기사 시비·하차 정황 자료</strong></li>\n<li><strong>차량 블랙박스 영상(시비·운전 구간)</strong></li>\n<li><strong>단속 현장 측정 절차·고지 자료</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>면허 처분 통지서·행정심판 청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대리 호출·시비·하차 정황은 경위 참작 자료가 될 수 있지만 운전 책임 면제로 단정하긴 어렵습니다. 측정 절차의 고지·동의 과정 자료가 절차 적법성 다툼의 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 거부 평가</strong> — 감지기 시험 거부 태도.</li>\n<li><strong>측정 절차 적법성</strong> — 고지·동의 과정.</li>\n<li><strong>부득이성 항변</strong> — 기사 하차 경위.</li>\n<li><strong>운전 구간</strong> — 거리·시간 정황.</li>\n<li><strong>양형</strong> — 반성·경위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 거부 평가 영역',
        summary:
          '대법원 2016도16121(대법원, 2017.06.08 선고) 영역에서 법원은 음주감지기 시험 거부도 측정에 응할 의사가 없는 것으로 평가될 수 있는지가 쟁점이 될 수 있다고 본 사례 흐름이 있고, 대리기사 시비 후 본인 음주운전 사안에서도 측정 과정의 태도와 절차 적법성이 핵심 평가 트랙입니다.',
        takeaway: '감지기 시험 거부 태도 + 측정 절차가 측정 거부 평가의 다툼 영역 — 변호인 상담·절차 자료 권장.',
      },
    ],
    faq: [
      {
        question: '대리기사가 내려서 어쩔 수 없었는데 참작되나요?',
        answer:
          '<strong>경위 참작 자료는 되지만 운전 책임 면제로 단정하긴 어려운 영역입니다.</strong> 정황 기록 보존.',
      },
      {
        question: '음주감지기 시험을 거부하면 어떻게 되나요?',
        answer:
          '<strong>측정 거부로 평가될 수 있는지가 쟁점이 되는 영역입니다.</strong> 단속 영상이 결정 자료.',
      },
      {
        question: '측정 절차에 문제가 있으면 다툴 수 있나요?',
        answer:
          '<strong>고지·동의 과정의 적법성을 다툴 여지가 있는 영역입니다.</strong> 현장 자료 확보.',
      },
      {
        question: '짧은 거리만 운전했는데도 처벌되나요?',
        answer:
          '<strong>거리와 무관하게 음주 운전 사실이 평가되는 영역입니다.</strong> 양형에서 참작 검토.',
      },
      {
        question: '면허는 어떻게 되나요?',
        answer:
          '<strong>수치·측정 거부 여부에 따라 처분이 갈리는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '2회 이상 처벌', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '측정거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },

  // ─── 8. dui-widmark-back-calculation-dispute-track ───
  {
    domain: 'dui',
    slug: 'dui-widmark-back-calculation-dispute-track',
    keyword: '위드마크 역산 음주수치 다툼',
    questionKeyword: '사고 후 시간이 지나 측정돼 운전 당시 혈중알코올농도를 위드마크 공식으로 역산했는데, 음주량·체중·시간 전제가 다투어지고 있어요.',
    ctaKeyword: '위드마크 역산 음주수치 다툼 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '위드마크 역산 음주수치 다툼 — 5단계 증거 다툼 | 로앤가이드',
      description:
        '사고 후 지연 측정·위드마크 역산으로 음주 혐의를 받고 있다면 전제값·증거능력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 운전 중 접촉 사고가 났고, 사고 처리와 신고가 늦어지면서 음주측정이 운전 시점보다 상당히 지난 뒤에 이루어졌습니다. 측정 시점의 수치는 처벌 기준 근처였는데, 경찰·검찰은 위드마크 공식을 적용해 \'운전 당시에는 더 높은 수치였다\'고 역산했어요. 그런데 역산에 들어간 음주량, 본인 체중, 음주 종료 시각, 시간당 분해율 같은 전제값이 본인 진술·실제와 차이가 있어 다툼이 생겼고, 사고 직후 채혈·감정 절차가 적법했는지도 쟁점이 됐습니다. 본인은 \'전제값이 부정확하면 역산 결과도 신뢰하기 어렵다\'는 입장이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하지만, 위드마크 역산은 음주량·체중·시간 등 전제값에 따라 결과가 달라지고, 채혈·감정 증거의 적법 절차 준수 여부가 증거능력 평가의 핵심이 되는 영역입니다. 음주운전 혐의를 받고 있다면 ① 전제값 검증 ② 채혈·감정 절차 ③ 증거능력 ④ 형사·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 위드마크 역산 음주수치 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 전제값·절차·증거능력·형사·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전제값 검증</strong> — 음주량·체중·종료 시각·분해율 확인.</li>\n<li><strong>② 채혈·감정 절차</strong> — 적법 절차 준수 여부 평가.</li>\n<li><strong>③ 증거능력</strong> — 영장·동의 등 절차 하자 검토.</li>\n<li><strong>④ 형사·행정</strong> — 입건·기소 + 면허 처분 트랙.</li>\n<li><strong>⑤ 양형</strong> — 반성·정황 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위드마크 역산은 음주량·체중·시간 전제값에 따라 결과가 크게 달라지는 영역. 영장 없이 채취한 혈액에 기초한 감정 결과는 증거능력이 부정될 수 있어 적법 절차 평가가 핵심 다툼 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·감정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 자문 권장.</li>\n<li><strong>2단계 — 음주·운전 시점 자료 (1주 내)</strong> — 음주 종료 시각·운전 시각·사고 시각 정리.</li>\n<li><strong>3단계 — 채혈·감정 절차 검토 (1~2주)</strong> — 채혈 동의·영장·감정 절차 자료 확보.</li>\n<li><strong>4단계 — 형사·행정 절차 (1~3개월)</strong> — 전제값·증거능력 다툼 자료 제출.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 반성문·자원봉사·기부.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">위드마크 역산 음주수치 다툼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 전제값·절차·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>위드마크 역산 산정 근거·전제값 자료</strong></li>\n<li><strong>음주 종료·운전·측정 시각 기록</strong></li>\n<li><strong>채혈 동의서·영장·감정의뢰 자료</strong></li>\n<li><strong>사고 경위·신고 시각 자료</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>면허 처분 통지서·행정심판 청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 역산 전제값(음주량·체중·종료 시각)이 실제와 다르면 결과 신뢰성 다툼의 핵심 자료. 영장 없는 채혈에 기초한 감정은 증거능력이 부정될 수 있어 채혈 절차 자료가 결정 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전제값 정확성</strong> — 음주량·체중·시간.</li>\n<li><strong>채혈·감정 절차</strong> — 영장·동의 여부.</li>\n<li><strong>증거능력</strong> — 절차 하자 시 부정 가능.</li>\n<li><strong>상승·하강기 평가</strong> — 측정 시점 전후.</li>\n<li><strong>양형</strong> — 반성·정황.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채혈 감정 증거능력 평가 영역',
        summary:
          '대법원 2009도2109(대법원, 2011.04.28 선고) 영역에서 법원은 영장 없이 채취한 혈액에 기초한 감정 결과는 증거능력이 부정될 수 있어 적법 절차 평가가 중요하다고 본 사례 흐름이 있고, 위드마크 역산 음주수치 다툼에서도 채혈·감정 절차의 적법성과 전제값 정확성이 핵심 평가 트랙입니다.',
        takeaway: '영장 없는 채혈 감정 + 전제값 다툼 시 증거능력 평가 영역 — 변호인 상담·절차 자료 권장.',
      },
    ],
    faq: [
      {
        question: '위드마크 역산 결과를 다툴 수 있나요?',
        answer:
          '<strong>전제값이 부정확하면 신뢰성을 다툴 여지가 있는 영역입니다.</strong> 음주량·체중·시각 자료가 핵심.',
      },
      {
        question: '영장 없이 채혈했으면 증거가 안 되나요?',
        answer:
          '<strong>적법 절차 위반 시 증거능력이 부정될 수 있는 영역입니다.</strong> 채혈 절차 자료 확보.',
      },
      {
        question: '측정이 운전보다 한참 뒤였는데 불리한가요?',
        answer:
          '<strong>상승·하강기 평가가 다툼이 되는 영역입니다.</strong> 시각 정황이 결정 자료.',
      },
      {
        question: '체중이나 음주량을 잘못 잡았으면 어떻게 하나요?',
        answer:
          '<strong>전제값 오류는 역산 결과 신뢰성 다툼의 핵심입니다.</strong> 실제 자료로 검증 요청.',
      },
      {
        question: '면허는 어떻게 되나요?',
        answer:
          '<strong>인정 수치·증거능력에 따라 처분이 갈리는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '2회 이상 처벌', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '측정거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },
];
