import { SpokePage } from '../spoke-pages';

// batch79 assault+dui — 8개 (2026-05-27)
//
// 고유 존재 이유:
// assault 4:
// 1. 당구장 큐대 가격 상해 피해 — '당구장 자리·내기 시비 + 큐대 도구 가격 + 매장 CCTV·진단서' 트랙 (victim)
// 2. 캠핑장 옆 텐트 소음 시비 폭행 피해 — '오토캠핑장 야간 소음 항의 + 모르는 캠퍼 가격 + 관리실·차량 블랙박스' 트랙 (victim)
// 3. 연인 다툼 중 붙잡음 폭행 무고 방어 — '말다툼 중 진정시키려 팔 잡음 + 사실과 다른 신고 + 메시지·통화로 경위 입증' 트랙 (accused/무고)
// 4. 결혼식장 하객 자리·축의금 시비 쌍방 폭행 혐의 — '예식장 좌석·축의금 시비 + 우발 밀침 + 쌍방 신고' 트랙 (accused/쌍방)
//
// dui 4 (모두 운전자 본인 대응, accused):
// 5. 운전자 누가 했나 다툼 — '동승자와 운전자 바뀜 주장 + 운전 주체 다툼 + 블랙박스·CCTV' 트랙
// 6. 물피 사고 후 현장 이탈 뒤 음주 적발 — '경미 물피 + 일시 이탈 후 추적 적발 + 사고후미조치·음주 결합' 트랙
// 7. 음주 직후 상승기 측정 시점 수치 다툼 — '음주 종료 직후 단속 + 측정 시점 간격 + 운전 시점 수치 증명' 트랙
// 8. 실효된 음주 전과 + 재범 누범 가중 다툼 — '과거 전과 형 실효 + 재범 입건 + 누범·가중 평가' 트랙

export const spokesBatch79AssaultDui: SpokePage[] = [
  // ─── 1. assault-billiards-hall-cue-stick-strike-victim-track ───
  {
    domain: 'assault',
    slug: 'assault-billiards-hall-cue-stick-strike-victim-track',
    keyword: '당구장 큐대 폭행 피해',
    questionKeyword: '당구장에서 내기·자리 문제로 시비가 붙었는데 상대가 큐대로 저를 내리쳐 다쳤어요. 매장 CCTV와 진단서가 있는데 어떻게 대응하나요?',
    ctaKeyword: '당구장 큐대 폭행 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '당구장 큐대 폭행 피해 — 5단계 도구 상해 대응 트랙 | 로앤가이드',
      description:
        '당구장에서 큐대로 가격당해 다쳤다면 상해·증거·고소·합의·배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 동네 당구장에서 게임을 하던 중, 옆 테이블 손님과 자리·내기 문제로 가벼운 언쟁이 붙었습니다. 그런데 상대가 갑자기 들고 있던 당구 큐대를 휘둘러 본인의 어깨와 팔을 내리쳤고, 본인은 팔에 멍과 부기가 생겨 정형외과에서 전치 3주 진단을 받았어요. 당구장 천장에는 테이블별 CCTV가 설치돼 있고, 카운터에는 본인과 상대의 이용 기록도 남아 있는 상황입니다. 상대는 \'장난으로 큐대를 들었을 뿐 때리려던 게 아니다\'라고 발뺌하고 있어요." 형법 제257조는 사람의 신체를 상해한 행위를, 형법 제260조는 폭행 행위를 다루는 영역이며, 당구 큐대 같은 도구로 신체를 가격해 전치 3주 상해가 발생한 정황이 매장 CCTV로 뒷받침되면 폭행·상해로 평가될 소지가 있는 사정입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 당구장 큐대 폭행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 3주 + 큐대 도구 가격 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 당구장 테이블 CCTV·이용 기록·진단서.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 큐대 같은 물건을 이용한 가격은 손으로 한 폭행보다 위험성이 큰 행위로 논의될 수 있는 영역입니다. 매장 CCTV가 휘두른 장면을 담으면 \'장난이었다\'는 발뺌과 다투는 핵심 자료가 되고, 카운터 이용 기록은 상대 신원 특정에 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정형외과 진단서·X-ray·치료 기록.</li>\n<li><strong>2단계 — CCTV·이용 기록 보존 요청 (1주 내)</strong> — 당구장에 테이블 영상·카운터 이용 내역 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">당구장 큐대 폭행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>정형외과 진단서(전치 3주)·X-ray·치료 기록</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>당구장 테이블 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>카운터 이용 기록·결제 내역(상대 신원 특정)</strong></li>\n<li><strong>부상 부위 사진(사건 직후)·큐대 손상 흔적</strong></li>\n<li><strong>당시 정황 메모·목격 손님·종업원 연락처</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매장 CCTV는 덮어쓰기 주기가 짧은 경우가 많아 즉시 보존 요청이 필수입니다. 큐대로 가격당한 사안은 도구 사용 정황이 행위 태양 평가에 중요하므로, 휘두른 장면·부상 부위 사진을 함께 확보하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>장난 vs 가격 다툼</strong> — \'장난으로 들었다\' 주장 vs CCTV 휘두른 장면.</li>\n<li><strong>도구 사용 평가</strong> — 큐대 사용 정황과 위험성.</li>\n<li><strong>상해 인과관계</strong> — 어깨·팔 부상 발생 원인.</li>\n<li><strong>합의금 산정</strong> — 전치 3주 + 도구 사용 정도.</li>\n<li><strong>민사 배상</strong> — 치료·위자료·소득 손실 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 / 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 신중 평가 영역',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 상해 영역에서 법원은 상해진단서가 피해자의 주관적 통증 호소 등에 주로 의존해 발급된 경우 그 증명력 판단에 신중해야 하나, 진단 시점이 상해 발생 시점과 근접하고 발급 경위에 신빙성이 있으면 유력한 증거가 될 수 있다고 판시했습니다. 당구장에서 큐대로 가격당해 전치 3주 상해를 입은 사안에서도 진단서와 CCTV·행위 태양을 함께 종합해 폭행·상해 평가를 검토해볼 수 있습니다.',
        takeaway: '도구 가격 + 전치 3주 + 근접 진단서 결합 시 폭행·상해 평가 영역 — CCTV 확보 후 고소·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 \'장난으로 큐대를 들었다\'고 하면 어떻게 되나요?',
        answer:
          '<strong>CCTV가 휘두른 장면을 담으면 장난 주장과 다투는 핵심 자료 영역입니다.</strong> 영상 선제 확보가 관건.',
      },
      {
        question: '큐대로 맞은 것도 단순 폭행보다 무겁게 보나요?',
        answer:
          '<strong>물건을 이용한 가격은 행위 태양·위험성이 함께 평가되는 영역입니다.</strong> 도구 사용 정황 입증이 중요합니다.',
      },
      {
        question: '모르는 손님인데 신원을 어떻게 확인하나요?',
        answer:
          '<strong>카운터 이용 기록·결제 내역으로 특정이 가능한 영역입니다.</strong> 매장 협조 요청 + 112 신고 병행 권장.',
      },
      {
        question: '전치 3주도 형사 고소가 가능한가요?',
        answer:
          '<strong>상해 진단서 + 행위 태양 결합으로 형사 고소 가능 영역입니다.</strong> CCTV 있으면 입증이 용이합니다.',
      },
      {
        question: '치료받느라 일을 못 한 손실도 청구할 수 있나요?',
        answer:
          '<strong>치료 기간 일실수입은 민사 청구 검토 영역입니다.</strong> 소득 자료 정리 후 변호인 자문 권장.',
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

  // ─── 2. assault-campsite-tent-noise-stranger-victim-track ───
  {
    domain: 'assault',
    slug: 'assault-campsite-tent-noise-stranger-victim-track',
    keyword: '캠핑장 텐트 소음 시비 폭행',
    questionKeyword: '캠핑장에서 옆 텐트 소음 때문에 항의했더니 모르는 캠퍼가 저를 밀치고 때려 다쳤어요. 관리실 기록과 차량 블랙박스가 있어요. 어떻게 대응하나요?',
    ctaKeyword: '캠핑장 텐트 소음 시비 폭행 정리',
    type: '준비형',
    perspective: 'victim',
    meta: {
      title: '캠핑장 소음 시비 폭행 피해 — 5단계 야외 상해 트랙 | 로앤가이드',
      description:
        '캠핑장에서 소음 항의 끝에 모르는 캠퍼에게 폭행을 당했다면 증거·고소·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 가족과 오토캠핑장에 갔는데, 옆자리 텐트에서 밤늦게까지 음악과 고성이 이어져 정중히 소음을 줄여달라고 항의했습니다. 그러자 상대 캠퍼가 \'시끄럽게 하지 말라\'며 화를 내고 본인의 가슴을 밀치더니 얼굴을 손으로 가격해, 본인은 입술이 터지고 얼굴에 타박상이 생겨 전치 2주 진단을 받았어요. 캠핑장 입구·관리동에는 CCTV가 있고 입실 시 차량 번호·예약자 정보가 기록되며, 본인 차량 블랙박스가 텐트 쪽을 일부 향하고 있던 상황입니다. 상대는 \'본인이 먼저 시비를 걸었다\'며 발뺌하고 있어요." 형법 제257조는 신체를 상해한 행위를, 형법 제260조는 폭행을 다루는 영역이며, 소음 항의 과정에서 일방적으로 가격당해 전치 2주 상해가 발생한 정황이 블랙박스·관리 기록으로 뒷받침되면 폭행·상해로 평가될 소지가 있는 사정입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 캠핑장 소음 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 2주 + 얼굴 가격 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 차량 블랙박스·캠핑장 CCTV·예약자 정보·진단서.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정당한 소음 항의는 권리 행사이고, 그에 대한 신체 가격은 별개로 폭행 논의 영역입니다. 차량 블랙박스가 텐트 쪽 음성·영상을 담았다면 선후 관계 입증에 유리하고, 캠핑장 예약자 정보는 모르는 상대의 신원을 특정하는 핵심 자료가 되는 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 진단서(전치 2주)·치료 기록·구강·안면 사진.</li>\n<li><strong>2단계 — 블랙박스·관리 기록 보존 요청 (1주 내)</strong> — 차량 블랙박스 영상 백업 + 캠핑장에 CCTV·예약자 정보 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">캠핑장 소음 시비 폭행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서(전치 2주)·치료 기록·약제비 영수증</strong></li>\n<li><strong>차량 블랙박스 영상(텐트 방향·음성 포함분)</strong></li>\n<li><strong>캠핑장 입구·관리동 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>예약자 정보·차량 번호 기록(상대 신원 특정)</strong></li>\n<li><strong>구강·안면 부상 사진(사건 직후)</strong></li>\n<li><strong>당시 정황 메모·동반 가족·목격 캠퍼 연락처</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 야외 캠핑장은 고정 CCTV가 입구·관리동에만 있는 경우가 많아, 본인 차량 블랙박스가 결정적 영상·음성 자료가 될 수 있습니다. 블랙박스 영상은 덮어쓰기 전에 별도 저장하고, 예약자 정보는 관리실에 협조를 요청해 확보하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선행 시비 다툼</strong> — \'먼저 시비를 걸었다\' 주장 vs 블랙박스 선후 관계.</li>\n<li><strong>항의 vs 가격 구분</strong> — 소음 항의와 신체 가격은 별개 평가.</li>\n<li><strong>신원 특정</strong> — 예약자 정보·차량 번호 활용.</li>\n<li><strong>합의금 산정</strong> — 전치 2주 + 안면 부상.</li>\n<li><strong>민사 배상</strong> — 치료·위자료·소득 손실 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 / 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행·상해 사실 신중 입증 영역',
        summary:
          '창원지방법원 2023노2604(창원지방법원, 2025.07.08 선고) 폭행·상해 영역에서 법원은 피고인이 폭행·상해 사실을 부인한 사안에서 증인들의 진술 모습·태도를 직접 관찰하고 관련 증거를 종합해 상해 사실을 신중히 인정해야 한다는 취지로 판단했습니다. 캠핑장 소음 시비 중 일방 가격으로 전치 2주 상해를 입은 사안에서도 블랙박스·목격 진술·진단서를 종합해 행위 태양과 선후 관계를 검토해볼 수 있습니다.',
        takeaway: '소음 항의 중 일방 가격은 항의와 별개 평가 영역 — 블랙박스·진단서 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '소음 항의를 한 게 제 잘못으로 불리해지나요?',
        answer:
          '<strong>정당한 항의와 신체 가격은 별개 평가 영역입니다.</strong> 항의가 가격으로 이어졌는지가 관건입니다.',
      },
      {
        question: '차량 블랙박스도 증거가 되나요?',
        answer:
          '<strong>텐트 방향 영상·음성은 선후 관계를 보여주는 핵심 자료 영역입니다.</strong> 덮어쓰기 전 별도 저장 권장.',
      },
      {
        question: '모르는 캠퍼인데 신원을 어떻게 확인하나요?',
        answer:
          '<strong>예약자 정보·차량 번호 기록으로 특정이 가능한 영역입니다.</strong> 관리실 협조 + 112 신고 병행 권장.',
      },
      {
        question: '캠핑장에 CCTV가 입구에만 있으면 입증이 안 되나요?',
        answer:
          '<strong>입구 CCTV·블랙박스·목격 진술을 결합하는 영역입니다.</strong> 출입 시간대 특정이 보조 증거가 됩니다.',
      },
      {
        question: '합의금은 얼마 정도 기준인가요?',
        answer:
          '<strong>전치 2주 + 안면 부상 경과에 따라 다른 영역입니다.</strong> 변호인 자문을 권장합니다.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },

  // ─── 3. assault-couple-quarrel-grab-false-accusation-defense ───
  {
    domain: 'assault',
    slug: 'assault-couple-quarrel-grab-false-accusation-defense',
    keyword: '연인 다툼 붙잡음 폭행 무고 방어',
    questionKeyword: '연인과 말다툼하다 떠나려는 상대를 진정시키려 팔을 잡았을 뿐인데 폭행으로 사실과 다르게 신고됐어요. 메시지와 통화 기록이 있어요. 어떻게 대응하나요?',
    ctaKeyword: '연인 다툼 폭행 무고 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '연인 다툼 폭행 무고 방어 — 5단계 경위·진술 트랙 | 로앤가이드',
      description:
        '연인과 다투다 팔을 잡았을 뿐인데 폭행으로 신고돼 걱정된다면 경위·증거·진술 방어 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 연인과 헤어지자는 문제로 카페에서 말다툼을 했는데, 상대가 격앙되어 자리를 박차고 나가려 하자 위험하니 잠깐 진정하자며 상대의 팔을 잡았습니다. 본인은 때리거나 다치게 한 적이 없는데, 며칠 뒤 상대가 \'폭행을 당했다\'며 경찰에 신고해 폭행 혐의로 조사를 받게 됐어요. 본인은 사실과 다르게 신고되었다고 보고 있고, 당시 카페 CCTV와 다툼 전후 주고받은 메시지·통화 기록, 진정시키려 한 정황이 담긴 자료가 남아 있는 상황입니다." 형법 제260조 폭행은 신체에 대한 유형력 행사로 논의되는 영역이지만, 떠나려는 상대를 붙잡아 진정시킨 행위가 폭행에 해당하는지, 신고 내용이 사실에 부합하는지가 핵심 쟁점이며, 경위·메시지·CCTV가 평가 사정이 되는 영역입니다. 사실과 다르게 신고되었다면 ① 행위 평가 ② 증거 보존 ③ 진술 전략 ④ 경위 입증 ⑤ 대응 방향 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 연인 다툼 폭행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위·증거·진술·경위·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 평가</strong> — 팔을 잡아 진정시킨 행위 vs 가격 = 유형력 정도 다툼.</li>\n<li><strong>② 증거 보존</strong> — 카페 CCTV·메시지·통화 기록·목격자.</li>\n<li><strong>③ 진술 전략</strong> — 변호인 자문 + 경위·의도 일관 진술.</li>\n<li><strong>④ 경위 입증</strong> — 다툼 전후 대화로 신고 내용과 사실 대조.</li>\n<li><strong>⑤ 대응 방향</strong> — 사실과 다른 부분에 대한 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 떠나려는 상대를 붙잡은 정도와 가격 여부는 행위 태양에서 신중히 평가되는 영역입니다. 신고 내용이 사실과 다른 부분이 있다면 메시지·통화 기록·CCTV로 경위를 입증하는 것이 방어의 핵심이며, 감정적 대응보다 객관 자료를 시간 순으로 정리하는 것이 유리한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·진술·경위 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 행위·신고 내용 검토.</li>\n<li><strong>2단계 — 메시지·통화·CCTV 확보 (1주 내)</strong> — 다툼 전후 대화·카페 CCTV 보존 요청.</li>\n<li><strong>3단계 — 경위 정리 (1~2주)</strong> — 진정시키려 한 의도·행위 정도를 시간 순으로 정리.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 행위 태양·신고 내용 불일치 일관 진술.</li>\n<li><strong>5단계 — 대응 자료 + 처분</strong> — 사실과 다른 부분에 대한 방어 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연인 다툼 폭행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·증거·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>다툼 전후 메시지·SNS·통화 기록</strong></li>\n<li><strong>카페 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>목격자(직원·동석자) 진술서·연락처</strong></li>\n<li><strong>신고 내용과 사실 불일치 정리 메모</strong></li>\n<li><strong>당시 상황 시간 순 경위서(의도·행위 정도)</strong></li>\n<li><strong>관계·다툼 배경 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 메시지·통화 기록은 다툼의 경위와 신고 내용의 사실 여부를 대조하는 핵심 자료입니다. 임의로 삭제하거나 상대에게 따로 연락해 합의를 압박하면 불리하게 평가될 수 있어, 객관 자료를 보존하고 변호인을 통해 대응하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유형력 정도 다툼</strong> — 붙잡음 vs 가격 행위 태양.</li>\n<li><strong>신고 내용 사실성</strong> — 신고 내용과 실제 경위 일치 여부.</li>\n<li><strong>의도 평가</strong> — 진정·만류 목적과 행위.</li>\n<li><strong>증거 일관성</strong> — 메시지·CCTV·진술 정합.</li>\n<li><strong>대응 방향</strong> — 사실과 다른 부분 방어.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행 신고 사실 다툼·무고 평가 영역',
        summary:
          '대전지방법원 2023노3777(대전지방법원, 2025.01.09 선고) 폭행·무고 영역에서 법원은 피고인이 \'서로 욕설만 했을 뿐 폭행한 사실이 없다\'고 다투고 무고 여부도 쟁점이 된 사안에서, 폭행 사실과 신고 내용의 진실 여부를 증거에 따라 신중히 가려야 한다는 취지로 판단했습니다. 연인 다툼 중 붙잡은 행위가 폭행으로 신고된 사안에서도 메시지·CCTV·경위로 신고 내용과 사실의 일치 여부를 검토해볼 수 있습니다.',
        takeaway: '사실과 다른 신고는 경위·메시지·CCTV로 다투는 것이 핵심 영역 — 객관 자료 보존 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '떠나려는 상대를 잡은 것도 폭행이 되나요?',
        answer:
          '<strong>붙잡은 정도와 가격 여부가 행위 태양에서 신중히 평가되는 영역입니다.</strong> 의도·정도 입증이 관건입니다.',
      },
      {
        question: '사실과 다르게 신고된 것 같은데 어떻게 다투나요?',
        answer:
          '<strong>신고 내용과 실제 경위를 메시지·CCTV로 대조하는 것이 방어 영역입니다.</strong> 객관 자료 정리를 권장합니다.',
      },
      {
        question: '메시지·통화 기록을 지워도 되나요?',
        answer:
          '<strong>임의 삭제는 불리하게 평가될 수 있는 영역입니다.</strong> 원본을 보존하고 변호인과 정리하는 것을 권장합니다.',
      },
      {
        question: '상대에게 직접 연락해 오해를 풀어도 되나요?',
        answer:
          '<strong>직접 접촉은 압박으로 비칠 수 있는 영역입니다.</strong> 변호인을 통한 대응이 안전합니다.',
      },
      {
        question: '카페 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>매장에 보존 요청을 하거나 수사기관에 확보를 요청하는 영역입니다.</strong> 덮어쓰기 전 신속 요청이 중요합니다.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 무고 대응', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '무고 반박 대응', href: '/guide/assault/assault-false-accusation-counter' },
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '과장된 상해 주장', href: '/guide/assault/assault-exaggerated-injury-claim' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
    ],
  },

  // ─── 4. assault-wedding-hall-seating-gift-dispute-mutual-accused-track ───
  {
    domain: 'assault',
    slug: 'assault-wedding-hall-seating-gift-dispute-mutual-accused-track',
    keyword: '결혼식장 하객 자리 시비 폭행 혐의',
    questionKeyword: '결혼식장에서 하객 자리·축의금 문제로 시비가 붙어 상대를 밀쳤다는 폭행 혐의를 받고 있어요. 쌍방으로 다퉜는데 어떻게 대응하나요?',
    ctaKeyword: '결혼식장 자리 시비 폭행 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '결혼식장 자리 시비 폭행 혐의 — 5단계 우발·쌍방 트랙 | 로앤가이드',
      description:
        '결혼식장에서 자리·축의금 시비로 폭행 혐의를 받고 있다면 우발·쌍방·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 지인 결혼식에 하객으로 참석했는데, 피로연장에서 자리 배치와 축의금 접수 문제로 다른 하객과 언쟁이 붙었습니다. 상대가 본인을 향해 손가락질하며 거칠게 다가오자 본인이 격분해 상대의 어깨와 가슴을 밀쳐 물러서게 했고, 그 과정에서 서로 옷을 붙잡고 실랑이가 벌어졌어요. 그런데 상대가 \'폭행당했다\'며 경찰에 신고해 폭행 혐의로 입건되었습니다. 본인은 상대도 먼저 밀치고 거친 말을 했다는 입장이며, 예식장 로비·연회장 곳곳에 CCTV와 다른 하객들의 휴대폰 사진·영상이 남아 있을 수 있는 상황이에요." 형법 제260조 폭행은 신체에 대한 유형력 행사로 논의되는 영역이지만, 서로 밀치고 붙잡은 실랑이가 쌍방 폭행인지, 누가 먼저 유형력을 행사했는지가 핵심 쟁점이며, 쌍방성·경미성·합의가 처분 단계에서 중요한 영역입니다. 혐의를 받고 있다면 ① 폭행 평가 ② 증거 보존 ③ 합의 ④ 진술 전략 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 결혼식장 자리 시비 폭행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·합의·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭행 평가</strong> — 서로 밀침·옷 붙잡음 = 쌍방·경미 폭행 다툼.</li>\n<li><strong>② 증거 보존</strong> — 예식장 CCTV·하객 사진·영상·목격자.</li>\n<li><strong>③ 합의</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 쌍방성·경위 일관 진술.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·경미성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 서로 밀치고 옷을 붙잡은 실랑이는 쌍방 폭행으로 평가될 여지가 있는 영역입니다. 상대도 먼저 밀치거나 거친 말을 한 정황이 CCTV·하객 영상으로 뒷받침되면 쌍방성 평가·합의 협의에 영향을 주는 사정. 경조사 자리 특성상 분쟁 종결을 위한 합의를 조기에 진행하는 것이 처분에 유리한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·합의·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 자문 권장.</li>\n<li><strong>2단계 — CCTV·영상·목격자 확보 (1주 내)</strong> — 예식장 측 CCTV 보존 요청 + 하객 사진·영상·연락처 확보.</li>\n<li><strong>3단계 — 합의 협의 (1~2주)</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 쌍방성·경위 일관 진술.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 합의서·반성문·초범 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">결혼식장 자리 시비 폭행 혐의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 쌍방성·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>예식장 로비·연회장 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>하객 휴대폰 사진·영상·연락처</strong></li>\n<li><strong>상대의 선행 행위(밀침·거친 말) 정황 자료</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·초범 자료</strong></li>\n<li><strong>사건 당시 상황 메모(시간·장소·경위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결혼식은 다수 하객의 사진·영상이 남아 있는 경우가 많아 현장 목격자·하객 영상 확보가 쌍방성 입증에 중요합니다. 예식장 CCTV는 보존 기간이 짧을 수 있어 신속히 보존을 요청하고, 경조사 관계인을 통한 합의를 조기에 검토하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>쌍방 폭행 다툼</strong> — 상대 선행 밀침·거친 말 여부.</li>\n<li><strong>선후 관계</strong> — 누가 먼저 유형력을 행사했는지.</li>\n<li><strong>경미성 평가</strong> — 밀침·실랑이 정도와 부상 유무.</li>\n<li><strong>합의 협의</strong> — 처벌불원 의사.</li>\n<li><strong>양형</strong> — 초범·반성 종합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방 폭행·상해 행위 평가 영역',
        summary:
          '서울북부지법 2025고단1523(서울북부지법, 2025.10.29 선고) 폭행·상해 영역에서 법원은 서로 밀치고 가격이 오간 쌍방 사안에서 각자의 행위 태양과 선후 관계, 상해 정도를 종합해 가벌성을 평가해야 한다는 취지로 다뤘습니다. 결혼식장에서 자리 시비로 서로 밀치고 실랑이가 벌어진 사안에서도 CCTV·하객 영상으로 쌍방성과 선후 관계를 종합해 평가를 검토해볼 수 있습니다.',
        takeaway: '경조사 자리 쌍방 밀침은 쌍방성·선후·합의가 처분 핵심 영역 — CCTV 확보·합의 조기 진행 권장.',
      },
    ],
    faq: [
      {
        question: '상대도 먼저 밀쳤으면 쌍방이 되나요?',
        answer:
          '<strong>상대 선행 행위가 입증되면 쌍방 폭행으로 평가될 여지가 있는 영역입니다.</strong> CCTV·하객 영상이 결정 자료.',
      },
      {
        question: '서로 옷만 붙잡고 실랑이한 것도 폭행인가요?',
        answer:
          '<strong>옷을 붙잡고 미는 행위도 유형력으로 논의될 수 있는 영역입니다.</strong> 경미성·쌍방성과 함께 평가됩니다.',
      },
      {
        question: '하객들 사진·영상은 어떻게 확보하나요?',
        answer:
          '<strong>현장 목격 하객·SNS 영상 확보가 핵심 증거 영역입니다.</strong> 조기 수집을 권장합니다.',
      },
      {
        question: '합의를 빨리 하면 처분이 가벼워지나요?',
        answer:
          '<strong>처벌불원 합의는 기소유예·불기소 검토 가능성을 높이는 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '초범이면 처분이 가벼워지나요?',
        answer:
          '<strong>합의 + 초범 + 경미성 조합 시 기소유예 검토 가능 영역입니다.</strong> 양형 자료 준비 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '쌍방 폭행 구별', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '정당방위 기준', href: '/guide/assault/self-defense-criteria' },
    ],
  },

  // ─── 5. dui-driver-identity-swap-dispute-who-drove-track ───
  {
    domain: 'dui',
    slug: 'dui-driver-identity-swap-dispute-who-drove-track',
    keyword: '음주 운전자 누가 했나 다툼',
    questionKeyword: '음주 상태에서 동승자와 운전자가 바뀌었다고 주장하는데 경찰은 제가 운전했다고 봐요. 누가 운전했는지 다투려면 어떻게 대응하나요?',
    ctaKeyword: '음주 운전자 누가 했나 다툼 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 운전자 누가 했나 다툼 — 5단계 운전 주체·증거 트랙 | 로앤가이드',
      description:
        '음주 상태에서 운전 주체가 다투어져 처분이 걱정된다면 운전 주체·블랙박스·진술 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 술자리 후 일행과 차에 탔는데, 짧은 구간을 이동하는 과정에서 운전석에 누가 있었는지를 두고 경찰과 본인의 주장이 엇갈리고 있습니다. 본인은 동승자가 운전했다고 보는데, 정차 후 자리를 바꾸거나 내리는 과정에서 본인이 운전한 것으로 의심받아 음주운전 혐의로 입건됐어요. 음주측정에는 응했지만 \'실제로 운전한 사람이 누구인지\'가 핵심이라, 운전 주체를 어떻게 다툴 수 있는지가 걱정입니다. 차량 블랙박스, 주변 CCTV, 일행의 진술이 남아 있을 수 있는 상황이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하는 영역이며, 음주운전은 \'운전 행위\'가 인정되어야 성립하므로 누가 실제로 운전했는지, 어디까지가 운전에 해당하는지가 신중히 평가되는 사정입니다. 혐의를 받고 있다면 ① 운전 주체 평가 ② 증거 보존 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 운전자 누가 했나 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전 주체·증거·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전 주체 평가</strong> — 실제로 운전대를 잡고 차를 움직인 사람이 누구인지.</li>\n<li><strong>② 증거 보존</strong> — 차량 블랙박스·주변 CCTV·일행 진술·차량 위치.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 운전 인정 시 수치에 따른 정지·취소 처분.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·정황 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주운전은 운전 행위가 인정되어야 성립하므로 운전 주체가 핵심 쟁점이 되는 영역입니다. 정차 후 자리를 바꾸는 과정이나 짧은 이동 구간에서 누가 운전대를 잡았는지가 다투어질 수 있고, 블랙박스·CCTV·일행 진술로 운전 주체를 객관적으로 정리하는 것이 중요한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 운전 주체 쟁점 검토.</li>\n<li><strong>2단계 — 블랙박스·CCTV 확보 (1주 내)</strong> — 운전석 탑승·이동 구간 영상 보존 요청.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 운전 주체·이동 경위 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 운전 인정 시 반성문·교육 이수 자료.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 처분 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 운전자 누가 했나 다툼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전 주체·정황·행정 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>차량 블랙박스 영상(운전석 탑승·이동 구간)</strong></li>\n<li><strong>주변 CCTV·차량 위치 자료</strong></li>\n<li><strong>일행·동승자 진술서·연락처</strong></li>\n<li><strong>차량 키 소지·탑승 경위 기록</strong></li>\n<li><strong>본인 반성문·교육 이수증(운전 인정 시)</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운전 주체 다툼은 블랙박스·CCTV가 결정적 자료가 되므로 덮어쓰기 전에 신속히 확보하는 것이 중요합니다. 다만 사실과 다르게 일행에게 책임을 떠넘기는 진술은 위험할 수 있어, 객관 자료에 근거해 변호인과 정리하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운전 주체</strong> — 실제 운전대 잡은 사람.</li>\n<li><strong>운전 인정 범위</strong> — 정차·자리 이동·짧은 이동 구간.</li>\n<li><strong>증거 정합</strong> — 블랙박스·CCTV·진술 일치.</li>\n<li><strong>면허 정지·취소</strong> — 운전 인정 시 90일 내 행정심판.</li>\n<li><strong>양형</strong> — 초범·반성·정황.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운전 주체·운전 행위 인정 평가 영역',
        summary:
          '수원지법 2024고정1395(수원지법, 2025.04.10 선고) 음주운전 영역에서 법원은 대리기사가 차량을 두고 내린 뒤 운전자가 차단기에서 도로까지 차량을 운전한 사안에서, 누가 실제로 차량을 운전했는지와 운전 행위의 범위를 구체적 정황에 따라 판단했습니다. 음주 상태에서 운전 주체가 다투어지는 사안에서도 블랙박스·CCTV·진술로 운전대를 잡고 차를 움직인 사람이 누구인지를 종합해 평가를 검토해볼 수 있습니다.',
        takeaway: '운전 주체는 운전 행위 인정 여부의 핵심 영역 — 블랙박스·CCTV 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 운전한 게 아니라고 다툴 수 있나요?',
        answer:
          '<strong>운전 주체는 음주운전 성립의 핵심 쟁점 영역입니다.</strong> 블랙박스·CCTV·진술이 판단 자료입니다.',
      },
      {
        question: '정차 후 자리를 바꾼 것도 운전인가요?',
        answer:
          '<strong>운전 행위의 범위는 구체적 정황에 따라 평가되는 영역입니다.</strong> 이동 거리·경위가 자료가 됩니다.',
      },
      {
        question: '블랙박스가 운전 주체를 어떻게 보여주나요?',
        answer:
          '<strong>운전석 탑승·이동 구간 영상이 핵심 자료 영역입니다.</strong> 덮어쓰기 전 신속 확보를 권장합니다.',
      },
      {
        question: '일행에게 책임을 돌려도 되나요?',
        answer:
          '<strong>사실과 다른 책임 전가는 위험할 수 있는 영역입니다.</strong> 객관 자료에 근거해 변호인과 정리 권장.',
      },
      {
        question: '운전이 인정되면 면허도 처분되나요?',
        answer:
          '<strong>운전 인정 시 수치에 따라 면허 정지·취소가 병행되는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '대리기사 시비 자가운전', href: '/guide/dui/dui-proxy-driver-dispute-self-drive-track' },
      { label: '음주운전 첫 대응', href: '/guide/dui/dui-caught-where-to-start' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '수치별 처벌 기준', href: '/guide/dui/dui-bac-penalty-by-level' },
    ],
  },

  // ─── 6. dui-property-damage-leave-scene-later-dui-track ───
  {
    domain: 'dui',
    slug: 'dui-property-damage-leave-scene-later-dui-track',
    keyword: '물피 사고 후 현장 이탈 음주 적발',
    questionKeyword: '음주 상태에서 주차된 차를 살짝 긁고 잠깐 자리를 떴다가 추적당해 음주로 적발됐어요. 사고후미조치까지 더해지는지 걱정인데 어떻게 대응하나요?',
    ctaKeyword: '물피 사고 후 이탈 음주 적발 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '물피 사고 후 이탈 음주 적발 — 5단계 미조치·수치 트랙 | 로앤가이드',
      description:
        '음주 상태 경미 물피 사고 후 현장을 떴다가 적발돼 걱정된다면 미조치·수치·행정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 밤에 음주 상태에서 운전하다 주차장에서 다른 차량을 살짝 긁는 경미한 물피 사고를 냈고, 당황해 잠시 자리를 떴다가 곧바로 돌아오려 했습니다. 그런데 피해 차량 주인과 주변 목격자가 신고해 경찰이 추적했고, 음주측정 결과 처벌 기준을 넘긴 수치가 나와 음주운전으로 입건됐어요. 문제는 음주운전만이 아니라 현장을 떠난 점이 \'사고 후 조치 미이행\'으로 더해질 수 있다는 점입니다. 본인은 인명 피해 없는 물피이고 곧 돌아오려 했다는 입장이며, 주차장 CCTV와 차량 블랙박스에 사고·이동 과정이 남아 있을 수 있는 상황이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 사고 시 운전자의 조치 의무가 별도로 정해진 영역이며, 물피 사고와 현장 이탈 경위, 음주가 결합해 평가되는 사정입니다. 혐의를 받고 있다면 ① 수치 평가 ② 미조치 정황 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 물피 사고 후 이탈 음주 적발 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·미조치·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수치 평가</strong> — 측정 결과와 처벌 기준(0.03%·0.08%·0.2%) 비교.</li>\n<li><strong>② 미조치 정황</strong> — 인명 피해 없는 물피 + 이탈 경위·복귀 의사 평가.</li>\n<li><strong>③ 형사 절차</strong> — 음주 + 사고 조치 쟁점 결합 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 수치에 따른 면허 정지·취소 처분.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·피해 회복 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인명 피해 없는 경미한 물피 사고는 인적 피해 사고와 평가가 다른 영역이지만, 현장을 떠난 정황은 사고 후 조치 쟁점으로 별도로 검토될 수 있는 사정입니다. 곧 복귀하려 했는지, 피해 차량 정보를 남겼는지 등 경위를 CCTV·블랙박스로 정리하고 피해 회복·합의를 진행하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·정황·합의·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 음주 + 사고 조치 쟁점 결합 검토.</li>\n<li><strong>2단계 — CCTV·블랙박스 확보 (1주 내)</strong> — 사고·이탈·복귀 과정 영상 보존.</li>\n<li><strong>3단계 — 피해 회복·합의 (1개월 내)</strong> — 피해 차량 수리·합의·처벌불원 협의.</li>\n<li><strong>4단계 — 형사 절차 (1~3개월)</strong> — 미조치 정황·합의 자료 제출.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">물피 사고 후 이탈 음주 적발 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·미조치·피해 회복 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지·사고 기록</strong></li>\n<li><strong>주차장 CCTV·차량 블랙박스 영상(사고·이탈·복귀)</strong></li>\n<li><strong>피해 차량 수리 견적·합의서·처벌불원서</strong></li>\n<li><strong>복귀 의사·연락처 남김 등 경위 기록</strong></li>\n<li><strong>면허 처분 통지서</strong></li>\n<li><strong>본인 반성문·자원봉사·교육 이수증</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 물피 사고는 피해 차량 수리·합의를 통한 피해 회복이 처분 평가에 도움이 되는 사정입니다. 현장을 떠난 경위에 대해서는 복귀 의사·연락 시도 등을 CCTV·블랙박스로 정리해, 단순 도주와 구분되도록 자료를 확보하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미조치 평가</strong> — 이탈 경위·복귀 의사·연락 시도.</li>\n<li><strong>물피 vs 인적 피해</strong> — 인명 피해 유무에 따른 구분.</li>\n<li><strong>수치 처벌 구간</strong> — 0.03%·0.08%·0.2% 분기.</li>\n<li><strong>피해 회복</strong> — 수리·합의·처벌불원.</li>\n<li><strong>면허 정지·취소</strong> — 90일 내 행정심판.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사고 후 조치 의무·이탈 정황 평가 영역',
        summary:
          '서울서부지법 2023노1354(서울서부지법, 2024.08.22 선고) 사고 후 미조치 영역에서 법원은 사고 발생 후 운전자가 정차해 필요한 조치를 취했는지, 곧바로 현장을 떠났는지 등 구체적 정황에 따라 조치 의무 위반을 신중히 판단했습니다. 음주 상태 경미 물피 사고 후 현장을 떠났다가 적발된 사안에서도 이탈 경위·복귀 의사를 CCTV·블랙박스와 함께 종합해 평가를 검토해볼 수 있습니다.',
        takeaway: '물피 후 이탈은 경위·복귀 의사·피해 회복이 핵심 영역 — 영상 확보·합의 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '인명 피해 없는 물피도 사고 후 조치 문제가 되나요?',
        answer:
          '<strong>현장을 떠난 경위가 조치 쟁점으로 별도 검토되는 영역입니다.</strong> 복귀 의사·연락 시도 입증이 중요합니다.',
      },
      {
        question: '잠깐 자리를 뜬 것도 도주가 되나요?',
        answer:
          '<strong>이탈 경위·복귀 의사에 따라 평가가 달라지는 영역입니다.</strong> CCTV·블랙박스 경위가 자료가 됩니다.',
      },
      {
        question: '피해 차량과 합의하면 도움이 되나요?',
        answer:
          '<strong>수리·합의를 통한 피해 회복은 처분 평가에 도움이 되는 영역입니다.</strong> 조기 협의를 권장합니다.',
      },
      {
        question: '음주와 사고가 같이 평가되면 더 불리한가요?',
        answer:
          '<strong>음주와 사고 정황이 결합해 평가되는 영역입니다.</strong> 경위 정리·피해 회복이 관건입니다.',
      },
      {
        question: '면허 처분도 같이 받나요?',
        answer:
          '<strong>형사와 별개로 수치에 따른 면허 정지·취소가 병행되는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 사고 대응', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '민사 배상·보험', href: '/guide/dui/dui-civil-damage-insurance-refused' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '단순 vs 위험운전', href: '/guide/dui/dui-simple-vs-dangerous-driving-injury-distinction' },
    ],
  },

  // ─── 7. dui-post-drinking-rising-bac-measurement-time-gap-track ───
  {
    domain: 'dui',
    slug: 'dui-post-drinking-rising-bac-measurement-time-gap-track',
    keyword: '음주 직후 상승기 측정 시점 수치 다툼',
    questionKeyword: '술을 마신 직후 운전하다 바로 단속됐는데, 측정까지 시간이 떠서 상승기라 운전 시점 수치가 다르다고 다툴 수 있나요? 어떻게 대응하나요?',
    ctaKeyword: '음주 직후 상승기 측정 시점 수치 다툼 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 직후 상승기 수치 다툼 — 5단계 측정 시점·증명 트랙 | 로앤가이드',
      description:
        '음주 직후 단속돼 상승기 측정 시점 수치가 걱정된다면 측정 간격·운전 시점 증명 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 술자리를 막 끝내고 운전대를 잡았다가 얼마 못 가 음주 단속에 걸렸습니다. 그런데 현장에서 바로 측정하지 못하고 시간이 어느 정도 흐른 뒤 호흡 측정을 했고, 처벌 기준 부근의 수치가 나왔어요. 본인은 술을 마신 직후라 혈중알코올농도가 아직 올라가는 \'상승기\'였을 수 있어, 실제 운전한 시점의 수치가 측정 시점보다 낮았을 가능성이 있다고 들었습니다. 운전과 측정 사이 시간 간격, 음주를 끝낸 시각, 측정값과 기준치의 차이를 따져 다툴 수 있는지 궁금한 상황이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 제148조의2는 혈중알코올농도 구간에 따라 처벌을 정하는 영역이며, 운전 시점과 측정 시점 사이에 간격이 있고 상승기로 보이는 경우 운전 당시 수치가 기준 이상이었는지가 증명의 쟁점이 되는 사정입니다. 혐의를 받고 있다면 ① 수치 평가 ② 측정 시점 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 직후 상승기 수치 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·측정 시점·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수치 평가</strong> — 측정값과 처벌 기준(0.03%·0.08%·0.2%) 차이.</li>\n<li><strong>② 측정 시점</strong> — 운전 시점·음주 종료 시각·측정 시각 간격.</li>\n<li><strong>③ 형사 절차</strong> — 운전 시점 수치 증명 쟁점 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 수치 인정 시 정지·취소 처분.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·정황 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주 직후 상승기에는 시간이 지날수록 수치가 오를 수 있어, 측정 시점 수치가 운전 시점 수치보다 높을 가능성이 있는 영역입니다. 다만 상승기라는 사정만으로 운전 시점 수치가 기준 미만이라고 단정되는 것은 아니며, 음주 종료 시각·음주량·측정값과 기준치 차이를 종합해 운전 당시 수치를 신중히 따지는 것이 쟁점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·측정 시점·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 측정 시점·상승기 쟁점 검토.</li>\n<li><strong>2단계 — 측정·시각 자료 확인 (즉시)</strong> — 운전·음주 종료·측정 시각, 측정 결과지 확보.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 운전 시점 수치 증명 쟁점 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·자원봉사·교육 이수 자료.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 직후 상승기 수치 다툼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·측정 시점·행정 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>운전·음주 종료·측정 시각 기록</strong></li>\n<li><strong>음주량·음주 종료 시각 입증 자료(영수증·동석자 진술)</strong></li>\n<li><strong>측정값과 처벌 기준치 차이 정리</strong></li>\n<li><strong>면허 처분 통지서</strong></li>\n<li><strong>본인 반성문·자원봉사·교육 이수증</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상승기 다툼은 운전 시점과 측정 시점의 시간 간격, 음주 종료 시각, 측정값과 기준치의 차이가 핵심 자료입니다. 음주를 끝낸 시각·음주량을 입증할 영수증·동석자 진술을 함께 정리하면 운전 시점 수치 증명 쟁점을 검토하는 데 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 시점 간격</strong> — 운전~측정 사이 시간.</li>\n<li><strong>상승기 여부</strong> — 음주 종료 직후 수치 변동.</li>\n<li><strong>운전 시점 수치 증명</strong> — 측정값과 기준치 차이.</li>\n<li><strong>면허 정지·취소</strong> — 수치 인정 시 90일 내 행정심판.</li>\n<li><strong>양형</strong> — 초범·반성·교육 이수.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상승기 운전 시점 수치 증명 평가 영역',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 음주운전 영역에서 법원은 운전 시점과 측정 시점 사이에 간격이 있고 상승기로 보이는 경우라도 그 사정만으로 운전 시점 수치가 기준 초과임을 증명할 수 없다고 단정할 수는 없으며, 운전과 측정의 시간 간격, 측정값과 기준치 차이, 음주량·음주 시간, 운전자의 행동 양상 등을 종합해 판단해야 한다고 판시했습니다. 음주 직후 상승기 수치가 다투어지는 사안에서도 이 기준으로 운전 당시 수치를 검토해볼 수 있습니다.',
        takeaway: '상승기 다툼은 시간 간격·측정값·음주량을 종합하는 증명 쟁점 영역 — 시각 자료 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상승기라서 운전 시점 수치가 낮았다고 다툴 수 있나요?',
        answer:
          '<strong>상승기 여부와 운전 시점 수치는 증명 쟁점으로 검토되는 영역입니다.</strong> 다만 상승기만으로 단정되지는 않습니다.',
      },
      {
        question: '측정까지 시간이 떴는데 그게 유리한가요?',
        answer:
          '<strong>운전~측정 시간 간격은 종합 판단의 한 자료인 영역입니다.</strong> 음주 종료 시각·음주량과 함께 평가됩니다.',
      },
      {
        question: '음주 종료 시각은 어떻게 입증하나요?',
        answer:
          '<strong>영수증·동석자 진술 등이 입증 자료가 되는 영역입니다.</strong> 조기 정리를 권장합니다.',
      },
      {
        question: '경계 수치인데 상승기면 더 다툴 여지가 있나요?',
        answer:
          '<strong>측정값과 기준치 차이가 작을수록 증명을 신중히 따지는 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '면허 처분도 같이 받나요?',
        answer:
          '<strong>수치 인정 시 면허 정지·취소가 병행되는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '위드마크 상승기 다툼', href: '/guide/dui/dui-widmark-rising-phase-defense' },
      { label: '위드마크 역산 다툼', href: '/guide/dui/dui-widmark-back-calculation-dispute-track' },
      { label: '음주 후 운전 위드마크', href: '/guide/dui/dui-after-driving-drank-widmark-counter' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '수치별 처벌 기준', href: '/guide/dui/dui-bac-penalty-by-level' },
    ],
  },

  // ─── 8. dui-prior-conviction-expired-repeat-aggravation-track ───
  {
    domain: 'dui',
    slug: 'dui-prior-conviction-expired-repeat-aggravation-track',
    keyword: '음주 전과 실효 후 재범 누범 가중',
    questionKeyword: '오래전 음주 전과가 형이 실효됐는데 이번에 다시 음주로 입건됐어요. 실효된 전과인데도 누범·가중으로 더 무겁게 보는지 궁금한데 어떻게 대응하나요?',
    ctaKeyword: '음주 전과 실효 후 재범 누범 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 전과 실효 후 재범 누범 — 5단계 가중·양형 트랙 | 로앤가이드',
      description:
        '오래전 음주 전과가 실효됐는데 재범으로 누범·가중이 걱정된다면 전과·누범·양형 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 오래전 음주운전으로 형사처벌을 받은 적이 있는데, 그 형이 일정 기간 경과로 형의 실효 등에 관한 법률에 따라 실효된 것으로 알고 있었습니다. 그런데 이번에 다시 음주운전으로 입건되면서, 과거 전과가 실효됐는데도 \'재범\'으로 누범 가중이나 양형에서 불리하게 작용하는지가 걱정입니다. 본인은 실효된 전과라면 이번 사건에서 없는 것으로 봐야 하는 것 아닌가 싶은데, 누범 요건과 양형 평가가 어떻게 되는지 막막한 상황이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 형법 제35조는 누범 가중을, 형의 실효 등에 관한 법률은 형이 실효되는 요건을 정하는 영역이며, 전과의 실효 여부와 누범 사유 해당 여부, 양형상 고려가 함께 검토되는 사정입니다. 혐의를 받고 있다면 ① 전과 확인 ② 누범·실효 평가 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 전과 실효 후 재범 누범 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 전과·누범·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전과 확인</strong> — 과거 형의 종류·확정·집행 종료·실효 여부.</li>\n<li><strong>② 누범·실효 평가</strong> — 형 실효와 형법 제35조 누범 사유 해당 여부.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 수치·전력에 따른 면허 정지·취소 처분.</li>\n<li><strong>⑤ 양형</strong> — 반성·교육·재범 방지 노력 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형이 실효되면 형의 선고에 따른 법적 효과는 장래를 향해 소멸하지만, 형의 선고가 있었다는 기왕의 사실 자체가 모두 사라지는 것은 아닌 영역입니다. 따라서 실효된 전과라도 누범 요건이나 양형 평가에서 어떻게 고려되는지가 쟁점이 되므로, 전과의 정확한 내역과 시점을 확인하는 것이 중요한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·전과·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 전과 내역·누범·실효 쟁점 검토.</li>\n<li><strong>2단계 — 전과·판결 자료 확인 (즉시)</strong> — 과거 형의 종류·확정일·집행 종료·실효 여부 확인.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 누범·실효 쟁점·양형 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·자원봉사·재범 방지 교육 이수.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 전과 실효 후 재범 누범 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 전과·누범·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>과거 판결문·확정일·집행 종료 자료</strong></li>\n<li><strong>형 실효 여부·경과 기간 확인 자료</strong></li>\n<li><strong>면허 처분 통지서</strong></li>\n<li><strong>본인 반성문·자원봉사·재범 방지 교육 이수증</strong></li>\n<li><strong>치료·예방 프로그램 참여 자료(해당 시)</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 누범·실효 쟁점은 과거 형의 종류·확정일·집행 종료 시점·경과 기간을 정확히 확인하는 것이 출발점입니다. 실효 여부와 누범 요건 해당 여부는 사실관계에 따라 달라지므로, 판결문·집행 자료를 확보해 변호인과 함께 정리하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>형 실효 여부</strong> — 경과 기간·형의 종류.</li>\n<li><strong>누범 요건</strong> — 형법 제35조 해당 여부.</li>\n<li><strong>양형 고려</strong> — 실효 전과의 양형상 평가.</li>\n<li><strong>면허 정지·취소</strong> — 수치·전력에 따른 처분.</li>\n<li><strong>재범 방지</strong> — 교육·치료·반성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형 실효와 누범 사유 평가 영역',
        summary:
          '대법원 2025도15970(대법원, 2026.01.29 선고) 누범 영역에서 법원은 금고 이상의 형의 집행 종료·면제 후 3년 내에 다시 죄를 범한 경우, 그 후 형이 형의 실효 등에 관한 법률에 따라 실효되었더라도 형법 제35조 제1항의 누범 사유에 여전히 해당한다고 판시했습니다. 음주 전과가 실효된 뒤 재범으로 입건된 사안에서도 전과의 내역·시점을 확인해 누범·양형 평가를 검토해볼 수 있습니다.',
        takeaway: '실효된 전과도 누범·양형 평가에서 고려될 수 있는 영역 — 전과 내역 확인 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '형이 실효됐으면 전과가 없는 걸로 보나요?',
        answer:
          '<strong>형의 선고에 따른 효과는 장래를 향해 소멸하나 선고 사실 자체가 모두 사라지는 것은 아닌 영역입니다.</strong> 정확한 확인이 필요합니다.',
      },
      {
        question: '실효된 전과인데도 누범이 되나요?',
        answer:
          '<strong>집행 종료 후 일정 기간 내 재범이면 실효돼도 누범 사유에 해당할 수 있는 영역입니다.</strong> 시점 확인이 관건입니다.',
      },
      {
        question: '과거 전과는 어떻게 확인하나요?',
        answer:
          '<strong>과거 판결문·확정일·집행 종료 자료로 확인하는 영역입니다.</strong> 변호인과 함께 정리를 권장합니다.',
      },
      {
        question: '재범이면 양형이 많이 무거워지나요?',
        answer:
          '<strong>전력은 양형에서 고려되는 사정이나 반성·교육·재범 방지 노력도 함께 평가되는 영역입니다.</strong> 자료 준비 권장.',
      },
      {
        question: '면허 처분도 같이 받나요?',
        answer:
          '<strong>수치·전력에 따라 면허 정지·취소가 병행되는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '15년 전 음주 전과 가중', href: '/guide/dui/dui-pre-historical-conviction-15years-aggravation-track' },
      { label: '음주운전 재범 가중', href: '/guide/dui/dui-repeat-offense-aggravation' },
      { label: '2회 실형 회피', href: '/guide/dui/dui-second-offense-prison-avoidance' },
      { label: '탄원서 준비서류', href: '/guide/dui/dui-leniency-petition-documents' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
    ],
  },
];
