import { SpokePage } from '../spoke-pages';

// batch77 assault + dui — 8개 (2026-05-25)
//
// 고유 존재 이유:
// assault 4:
// 1. 아파트 주차 시비 이웃 폭행 — '주차 자리 언쟁 + 멱살·밀침 + 쌍방 주장 + 공용 주차장 CCTV' 트랙 (victim)
// 2. 술집 모르는 취객 폭행 — '심야 술집 + 모르는 사람과 시비 + 일방적 상해 + CCTV+목격자' 트랙 (victim)
// 3. 아마추어 경기 중 과격 몸싸움 상해 혐의 — '조기축구/풋살 + 고의·과실 다툼 + 스포츠 정상 접촉 항변' 트랙 (accused)
// 4. 엘리베이터 어깨빵 시비 밀침 폭행 혐의 — '엘리베이터 접촉 + 경미 + 쌍방 주장' 트랙 (accused)
//
// dui 4 (모두 운전자 본인 대응, accused):
// 5. 아파트 주차장 단거리 음주운전 — '주차장 수 미터 이동 + 도로 해당 여부' 트랙
// 6. 공유 전동킥보드 음주운전 — '개인형이동장치 + 음주 단속 처벌' 트랙
// 7. 음주측정 거부 — '측정 불응 입건 + 거부 정당성 다툼' 트랙
// 8. 음주운전 2회 면허취소 — '재범 가중처벌 + 형사+행정 트랙' 트랙

export const spokesBatch77AssaultDui: SpokePage[] = [
  // ─── 1. assault-parking-dispute-neighbor-track ───
  {
    domain: 'assault',
    slug: 'assault-parking-dispute-neighbor-track',
    keyword: '주차 시비 이웃 폭행',
    questionKeyword: '아파트 주차 자리 문제로 이웃과 시비가 붙었고 이웃이 멱살을 잡고 밀쳐 다쳤어요. CCTV도 있는데 어떻게 대응하나요?',
    ctaKeyword: '주차 시비 이웃 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '주차 시비 이웃 폭행 — 5단계 상해 대응 트랙 | 로앤가이드',
      description:
        '아파트 주차 시비로 이웃에게 멱살·밀침 폭행을 당했다면 상해·증거·고소·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 아파트 지하 주차장에서 이웃 차량이 본인 지정 구역에 주차된 것을 두고 이웃과 시비가 붙었습니다. 말다툼이 격화되던 중 이웃이 갑자기 본인의 멱살을 잡고 주차장 벽 쪽으로 강하게 밀쳐 넘어뜨렸고, 본인은 어깨와 팔꿈치를 바닥에 부딪혀 정형외과에서 전치 2주 진단을 받았어요. 다행히 주차장 내부 CCTV에 멱살을 잡고 미는 장면이 녹화됐고, 당시 인근 구역에서 운전 중이던 다른 주민도 목격자가 되어줄 수 있는 상황입니다. 상대 이웃은 \'먼저 욕을 했다\'며 쌍방 시비를 주장 중이에요." 형법 제257조는 사람의 신체를 상해한 행위를, 형법 제260조는 폭행 행위를 처벌하는 영역이며, 멱살을 잡아 벽 쪽으로 밀쳐 넘어뜨린 행위는 폭행을 수단으로 한 상해로 평가될 소지가 있는 사정입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차 시비 이웃 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 2주 + 멱살·밀침 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 주차장 CCTV·진단서·목격 주민 연락처.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주차 자리 시비 자체는 정당한 항의 영역이고, 상대방이 먼저 멱살을 잡아 밀쳐 전치 2주 상해가 발생한 정황이 CCTV로 입증되면 폭행·상해 평가가 유리한 사정입니다. 쌍방 시비 주장은 CCTV 영상 선제 확보가 관건.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정형외과 진단서·X-ray·치료 기록.</li>\n<li><strong>2단계 — 주차장 CCTV 보존 요청 (1주 내)</strong> — 관리사무소에 영상 보존 공문 또는 구두 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차 시비 이웃 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>정형외과 진단서(전치 2주)·X-ray·치료 기록</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>주차장 CCTV 영상(관리사무소 보존 요청분)</strong></li>\n<li><strong>목격 주민 진술서·연락처</strong></li>\n<li><strong>본인 부상 부위 사진(사건 직후)</strong></li>\n<li><strong>이웃과의 주차 시비 경위 메모·문자·카카오톡</strong></li>\n<li><strong>관리사무소 CCTV 보존 요청 공문 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공동주택 주차장 CCTV는 보존 기간이 보통 30일 이내인 경우가 많아 즉시 요청이 필수. 과거 주차 민원 기록이 있다면 항의의 정당성 정황으로 함께 보존 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>쌍방 시비 다툼</strong> — \'먼저 욕을 했다\' 항변 vs CCTV 선제 확인.</li>\n<li><strong>상해 평가</strong> — 전치 2주 + 멱살·밀침 행위 결합.</li>\n<li><strong>이웃 관계 정황</strong> — 과거 주차 분쟁 경위 자료.</li>\n<li><strong>합의금 산정</strong> — 전치 2주 + 치료비 기준.</li>\n<li><strong>민사 배상</strong> — 치료·위자료·일실수입 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>층간소음·주차 분쟁 이웃사이센터 1661-2642</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 체포 현장 폭행·준강도 평가 영역',
        summary:
          '대법원 84도1167(대법원, 1984.07.24 선고) 영역에서 법원은 물건을 가지고 나오다 경비원과 시비가 붙어 신고 전화를 막으려 폭행한 행위를 두고 폭행 행위 태양과 피해자의 신체 침해 결합을 종합해 평가한 사례가 있으며, 주차 시비 중 멱살·밀침으로 전치 2주 상해를 입힌 사안에서도 폭행·상해 행위의 고의와 결과를 종합해 검토될 수 있습니다.',
        takeaway: '주차 시비 중 멱살·밀침 + 전치 2주 결합 시 폭행·상해 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '이웃이 \'쌍방 시비\'라고 주장하면 어떻게 되나요?',
        answer:
          '<strong>CCTV 영상이 선행 폭행 행위를 입증하면 쌍방 평가를 방어할 여지가 있는 영역입니다.</strong> 영상 선제 확보가 핵심.',
      },
      {
        question: '주차장 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>관리사무소에 즉시 보존 요청 영역입니다.</strong> 30일 이내 요청을 권장합니다.',
      },
      {
        question: '이웃과 계속 얼굴을 봐야 해서 고소가 망설여집니다',
        answer:
          '<strong>고소 여부와 합의 협의는 별개 선택 영역입니다.</strong> 변호인 자문 후 결정 권장.',
      },
      {
        question: '전치 2주도 형사 고소가 가능한가요?',
        answer:
          '<strong>상해 진단서 + 행위 태양 결합으로 형사 고소 가능 영역입니다.</strong> CCTV 있으면 입증이 용이합니다.',
      },
      {
        question: '합의금은 얼마 정도 필요한가요?',
        answer:
          '<strong>전치 2주 + 후유증·치료비 기준으로 다른 영역입니다.</strong> 변호인 자문 권장.',
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

  // ─── 2. assault-bar-stranger-quarrel-night-track ───
  {
    domain: 'assault',
    slug: 'assault-bar-stranger-quarrel-night-track',
    keyword: '술집 모르는 사람 시비 폭행',
    questionKeyword: '술집에서 전혀 모르는 취객이 시비를 걸더니 일방적으로 저를 때려 상해를 입었어요. CCTV와 목격자가 있어요. 어떻게 대응하나요?',
    ctaKeyword: '술집 모르는 사람 시비 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '술집 모르는 취객 시비 폭행 — 5단계 상해 대응 트랙 | 로앤가이드',
      description:
        '술집에서 모르는 취객에게 일방적으로 폭행·상해를 당했다면 고소·증거·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 친구들과 심야에 술집에서 술을 마시고 있었는데, 옆 자리의 전혀 모르는 취객이 갑자기 시비를 걸어왔습니다. 본인이 가만히 있었음에도 상대가 먼저 본인의 얼굴을 손으로 가격하고 이어 몸통을 발로 걷어차 본인은 입술이 찢어지고 늑골 부위에 타박상을 입어 전치 3주 진단을 받았어요. 술집 내부 CCTV에 상대가 먼저 손을 뻗어 가격하는 장면이 녹화됐고, 같은 테이블에 있던 친구 2명과 옆 자리 손님도 목격자가 될 수 있는 상황입니다. 상대는 술에 취해 기억이 없다고만 합니다." 형법 제257조는 신체를 상해한 행위를, 제260조는 폭행을 처벌하는 영역이며, 취기는 고의를 부정하는 사유로 인정되기 어려운 사정이고 일방적 가격 정황이 CCTV로 입증되면 상해·폭행 평가가 명확한 영역입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술집 모르는 사람 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 3주 + 일방적 가격 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 술집 CCTV·진단서·목격 친구·옆 자리 손님.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 취기는 범의를 부정하는 근거로 원칙적으로 인정되기 어려운 영역입니다. 일방적 선행 폭행이 CCTV에 담긴 경우 상해·폭행 평가가 유리한 사정. 모르는 상대 신원은 112 신고 당시 경찰이 확인하는 절차를 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 응급실·정형외과 진단서·치료 기록.</li>\n<li><strong>2단계 — 술집 CCTV·목격자 확보 (1주 내)</strong> — 업주에게 영상 보존 요청 + 목격자 연락처.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집 모르는 취객 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원 진단서(전치 3주)·응급실 기록</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>술집 내부 CCTV 영상(업주 보존 요청분)</strong></li>\n<li><strong>목격 친구·옆 자리 손님 진술서·연락처</strong></li>\n<li><strong>부상 부위 사진(사건 직후)</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n<li><strong>가해자 신원 정보(경찰 확인분)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 술집 CCTV는 업주가 협조하지 않는 경우 경찰이 영장으로 확보할 수 있는 영역입니다. 현장에서 112 신고를 하면 경찰이 현장 상황·가해자 신원을 즉시 기록하는 절차가 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>취기로 인한 범의 다툼</strong> — 취기는 고의 부정 근거로 인정 어려운 영역.</li>\n<li><strong>선행 시비 촉발 여부</strong> — 일방 피해 vs 상호 시비 다툼.</li>\n<li><strong>상해 인과관계</strong> — 전치 3주 발생 원인.</li>\n<li><strong>합의금 산정</strong> — 전치 3주 + 치료비·후유증.</li>\n<li><strong>가해자 신원 확보</strong> — 모르는 상대 특정 절차.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>법률홈닥터 무료 법률 상담 132</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행·상해 행위 평가 영역',
        summary:
          '대법원 2023도10768(대법원, 2023.11.02 선고) 영역에서 법원은 복싱클럽에서 항의 과정 중 발생한 몸싸움 사건에서 멱살을 잡아당기고 목을 조르는 등의 행위 태양을 폭행·상해 평가 범위에서 종합 검토한 사례가 있으며, 술집에서 모르는 취객에게 일방적으로 가격당한 상해 사안에도 행위 태양·결과·CCTV 증거를 종합해 평가될 수 있습니다.',
        takeaway: '술집 일방 가격 + 전치 3주 결합 시 폭행·상해 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 술에 취해 기억이 없다고 하면 어떻게 되나요?',
        answer:
          '<strong>취기는 범의를 부정하는 근거로 인정되기 어려운 영역입니다.</strong> CCTV 행위 태양이 결정.',
      },
      {
        question: '모르는 사람인데 신원을 어떻게 확인하나요?',
        answer:
          '<strong>112 신고 시 경찰이 현장에서 신원을 확인하는 절차가 가능한 영역입니다.</strong> 즉시 신고 권장.',
      },
      {
        question: '술집 업주가 CCTV 제공을 거부하면 어떻게 하나요?',
        answer:
          '<strong>고소 후 경찰이 영장으로 확보할 수 있는 영역입니다.</strong> 고소 조기 진행 권장.',
      },
      {
        question: '친구가 목격자인데 증언이 효력이 있나요?',
        answer:
          '<strong>동행 목격자 진술은 보조 증거 영역입니다.</strong> CCTV 객관 증거와 결합 시 유력.',
      },
      {
        question: '합의금은 얼마 정도 기준인가요?',
        answer:
          '<strong>전치 3주 + 치료비·후유증에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
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

  // ─── 3. assault-amateur-sports-game-injury-track ───
  {
    domain: 'assault',
    slug: 'assault-amateur-sports-game-injury-track',
    keyword: '아마추어 경기 중 폭행 부상',
    questionKeyword: '조기축구 경기 중 과격한 몸싸움으로 상대가 다쳐 상해 혐의를 받고 있어요. 스포츠 경기 중 접촉이었는데 폭행으로 처벌받나요?',
    ctaKeyword: '아마추어 경기 중 폭행 부상 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '아마추어 경기 중 부상 — 5단계 고의·과실 다툼 | 로앤가이드',
      description:
        '조기축구·풋살 중 과격 몸싸움으로 상해 혐의를 받고 있다면 고의·과실·합의·양형 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 동네 조기축구 모임에서 주말마다 경기를 즐기는데, 이번 경기에서 상대 팀 선수와 볼 경합 중 과격하게 충돌했고 상대가 넘어지면서 무릎을 다쳐 인대 손상 진단을 받았습니다. 본인은 볼을 향해 슬라이딩 태클을 시도했을 뿐이고 의도적으로 상대를 다치게 한 것이 아니라고 하지만, 상대 측이 \'고의 폭행\'이라며 경찰에 신고해 상해 혐의로 수사를 받게 됐어요. 경기 현장을 촬영한 영상은 일부 있고, 심판이나 팀원들이 목격자가 될 수 있는 상황입니다. 아마추어 경기 중 접촉을 폭행으로 볼 수 있는지가 핵심 쟁점입니다." 형법 제257조 상해는 고의성과 인과관계를 함께 평가하는 영역이며, 스포츠 경기 중 통상적 신체 접촉은 묵시적 동의 범위로 평가될 여지가 있는 사정이고, 이를 벗어난 과도한 행위인지가 관건인 트랙입니다. 혐의를 받고 있다면 ① 고의·과실 평가 ② 증거 보존 ③ 합의 ④ 진술 전략 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 아마추어 경기 중 폭행 부상 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 고의·증거·합의·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 고의·과실 평가</strong> — 볼 경합 중 슬라이딩 태클 = 통상 접촉 범위 다툼.</li>\n<li><strong>② 증거 보존</strong> — 경기 영상·심판·팀원 목격 진술.</li>\n<li><strong>③ 합의</strong> — 처벌불원 의사가 양형 핵심.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 경기 중 정상 접촉 일관 진술.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·반성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 스포츠 경기 중 통상적 신체 접촉은 참가자 간 묵시적 동의 범위로 평가될 여지가 있는 영역. 그러나 고의성이 의심되는 과도한 행위나 볼과 무관한 가격은 이 범위를 벗어날 소지가 있어 경기 영상과 태양이 핵심 사정으로 검토됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·합의·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 자문 권장.</li>\n<li><strong>2단계 — 경기 영상·목격자 확보 (1주 내)</strong> — 팀원 촬영분·심판·팀 리더 연락처.</li>\n<li><strong>3단계 — 합의 협의 (1~2주)</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>4단계 — 경찰·검찰 진술 (1~3개월)</strong> — 볼 경합 중 정상 접촉 일관 진술.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 합의서·반성문·자원봉사 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">아마추어 경기 중 상해 혐의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 고의·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경기 현장 영상(팀원 촬영분·구장 CCTV)</strong></li>\n<li><strong>심판·팀원·상대 팀 목격자 진술서·연락처</strong></li>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>본인 신원·초범 자료</strong></li>\n<li><strong>경기 참가 규정·규칙집(묵시적 동의 범위 정황)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경기 영상이 볼 경합 중 슬라이딩 태클임을 보여주면 고의 다툼에 유리한 정황. 합의를 빠르게 진행하면 기소유예·약식명령 검토 가능성이 높아지는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고의·과실 다툼</strong> — 볼 경합 중 정상 접촉 vs 고의 폭행.</li>\n<li><strong>통상 접촉 범위</strong> — 스포츠 묵시적 동의 한계.</li>\n<li><strong>합의 협의</strong> — 처벌불원 의사.</li>\n<li><strong>초범 평가</strong> — 전과 부재.</li>\n<li><strong>양형 자료</strong> — 반성·자원봉사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295 (피해자 측)</strong></li>\n<li><strong>스포츠 사고 분쟁 조정 — 대한체육회 상담</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스포츠 경기 중 부상·시설 안전 평가 영역',
        summary:
          '대법원 2017다14895(대법원, 2019.11.28 선고) 영역에서 법원은 공작물 설치·보존상 하자로 인한 손해배상 사건에서 스포츠 시설의 안전성과 이용자 부상 간 인과관계를 종합 평가해야 한다고 본 사례 흐름이 있으며, 아마추어 경기 중 과격 충돌로 인한 상해 사안에서도 행위 태양·고의성·경기 관행을 종합해 평가될 수 있습니다.',
        takeaway: '아마추어 경기 중 볼 경합 충돌 + 고의성 다툼 영역 — 변호인 상담·합의 조기 진행 권장.',
      },
    ],
    faq: [
      {
        question: '경기 중 접촉이면 폭행으로 볼 수 없나요?',
        answer:
          '<strong>통상적 접촉은 묵시적 동의 범위로 평가될 여지가 있는 영역입니다.</strong> 행위 태양·영상이 결정.',
      },
      {
        question: '경기 영상이 없으면 어떻게 하나요?',
        answer:
          '<strong>심판·팀원 진술이 핵심 증거 영역입니다.</strong> 조기 확보를 권장합니다.',
      },
      {
        question: '합의를 빨리 하면 형사 처분이 줄어드나요?',
        answer:
          '<strong>처벌불원 합의는 기소유예·약식 검토 가능성을 높이는 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '상대가 민사 손해배상도 청구하겠다고 합니다',
        answer:
          '<strong>형사 합의와 민사 배상은 별도 영역입니다.</strong> 합의서에 민사 포기 조항 포함 여부 확인 권장.',
      },
      {
        question: '초범인데 처분은 어떻게 되나요?',
        answer:
          '<strong>합의 + 반성 시 기소유예·벌금 검토 영역입니다.</strong> 변호인 자문 필요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '스포츠 경기 중 접촉', href: '/guide/assault/assault-sports-game-incidental-defense' },
    ],
  },

  // ─── 4. assault-elevator-shoulder-bump-track ───
  {
    domain: 'assault',
    slug: 'assault-elevator-shoulder-bump-track',
    keyword: '엘리베이터 어깨 부딪힘 시비 폭행',
    questionKeyword: '엘리베이터 안에서 어깨가 부딪혀 시비가 붙었고 상대를 밀쳤다는 폭행 혐의를 받고 있어요. 경미하고 쌍방인데 어떻게 대응하나요?',
    ctaKeyword: '엘리베이터 어깨 시비 폭행 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '엘리베이터 어깨빵 시비 폭행 혐의 — 5단계 경미·쌍방 다툼 | 로앤가이드',
      description:
        '엘리베이터 어깨빵 시비 중 밀침으로 폭행 혐의를 받고 있다면 경미·쌍방·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 아파트 엘리베이터에서 다른 거주자와 어깨가 가볍게 부딪혔는데, 상대가 갑자기 \'왜 치냐\'고 시비를 걸었습니다. 언쟁 끝에 본인이 상대의 어깨 쪽을 손으로 살짝 밀어 물러서게 한 것이 전부인데, 상대가 \'폭행당했다\'며 경찰에 신고해 폭행 혐의로 입건되었어요. 본인은 먼저 어깨를 부딪힌 것은 상대이고, 자신은 거리를 확보하기 위해 가볍게 밀쳤을 뿐이라는 입장입니다. 엘리베이터 CCTV에 전반적인 상황이 담겨 있고, 쌍방이 서로 신체 접촉을 했다는 사실은 인정되는 상황이에요." 형법 제260조 폭행은 신체에 대한 유형력 행사로 성립이 논의되는 영역이지만, 형법 제21조 정당방위·우발·경미 정황이 합산 평가 사정이 되며, 합의·초범·경미성이 처분 단계에서 중요한 영역입니다. 혐의를 받고 있다면 ① 폭행 평가 ② 증거 보존 ③ 합의 ④ 진술 전략 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 엘리베이터 어깨빵 시비 폭행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·합의·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭행 평가</strong> — 가벼운 밀침 + 상호 접촉 정황 = 경미 폭행 다툼.</li>\n<li><strong>② 증거 보존</strong> — 엘리베이터 CCTV·목격자·당시 경위 기록.</li>\n<li><strong>③ 합의</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 경위 일관 진술.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·경미성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경미한 밀침이라도 유형력 행사는 폭행 논의 영역입니다. 그러나 쌍방 접촉 경위 + CCTV 영상 + 합의 + 초범 조합이면 기소유예·불기소 검토 가능성이 있는 사정. 합의를 조기에 진행하는 것이 처분에 유리한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·CCTV·합의·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 자문 권장.</li>\n<li><strong>2단계 — 엘리베이터 CCTV 확인 (1주 내)</strong> — 관리사무소에 영상 보존 요청.</li>\n<li><strong>3단계 — 합의 협의 (1~2주)</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 쌍방 접촉 경위·방어 일관 진술.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 합의서·반성문.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">엘리베이터 시비 폭행 혐의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>엘리베이터 CCTV 영상(관리사무소 보존 요청분)</strong></li>\n<li><strong>목격자 진술서·연락처</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문</strong></li>\n<li><strong>본인 신원·초범 자료</strong></li>\n<li><strong>사건 당시 상황 메모(시간·장소·경위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 엘리베이터 CCTV가 쌍방 접촉 경위를 보여주면 일방 폭행 주장 방어에 유리합니다. 합의를 조기에 진행하면 불기소·기소유예 검토 가능성이 높아지는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경미성 다툼</strong> — 가벼운 밀침의 폭행 논의 여부.</li>\n<li><strong>쌍방 접촉 경위</strong> — 어깨 부딪힘 선후 관계.</li>\n<li><strong>합의 협의</strong> — 처벌불원 의사.</li>\n<li><strong>초범 평가</strong> — 전과 부재.</li>\n<li><strong>양형</strong> — 합의·반성 종합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>층간소음·이웃 분쟁 이웃사이센터 1661-2642</strong></li>\n<li><strong>경찰 112</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 평가 영역',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 형사사건에서 상해진단서가 주로 피해자의 주관적 통증 호소에 의존해 발급된 경우 그 증명력을 신중히 평가해야 한다고 본 사례 흐름이 있으며, 엘리베이터 경미한 밀침 사안에서도 상해 여부·행위 태양을 CCTV와 함께 종합 평가하는 기준이 검토될 수 있습니다.',
        takeaway: '경미 밀침 + 쌍방 접촉 정황에서 합의·초범 자료가 처분 결정의 핵심 영역 — 변호인 상담·합의 권장.',
      },
    ],
    faq: [
      {
        question: '가벼운 밀침도 폭행으로 논의되나요?',
        answer:
          '<strong>유형력 행사는 폭행으로 논의될 수 있는 영역입니다.</strong> 다만 경미성·합의로 감경 검토 가능.',
      },
      {
        question: '상대가 먼저 어깨를 부딪혔으면 방어가 되나요?',
        answer:
          '<strong>쌍방 접촉 선후 관계가 평가 사정입니다.</strong> CCTV 영상이 결정 자료.',
      },
      {
        question: '초범이면 기소유예가 가능한가요?',
        answer:
          '<strong>합의 + 초범 + 경미성 조합 시 기소유예 검토 가능 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '경찰 조사 때 어떻게 진술해야 하나요?',
        answer:
          '<strong>변호인 자문 후 일관된 경위 진술이 중요한 영역입니다.</strong> 사전 자문 필수.',
      },
      {
        question: '합의금은 얼마 정도 필요한가요?',
        answer:
          '<strong>경미 사안은 상대 요구·협의에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '엘리베이터 CCTV 증거', href: '/guide/assault/assault-apartment-elevator-cctv-evidence-track' },
    ],
  },

  // ─── 5. dui-parking-lot-short-distance-track ───
  {
    domain: 'dui',
    slug: 'dui-parking-lot-short-distance-track',
    keyword: '주차장 단거리 음주운전',
    questionKeyword: '아파트 주차장 안에서 음주 상태로 몇 미터만 차를 이동했는데 음주운전으로 적발됐어요. 주차장도 도로인가요?',
    ctaKeyword: '주차장 단거리 음주운전 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '아파트 주차장 단거리 음주운전 — 5단계 도로 해당성 다툼 | 로앤가이드',
      description:
        '아파트 주차장에서 음주 상태로 단거리 이동하다 적발됐다면 도로 해당성·처벌 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 아파트 지하 주차장에서 음주 상태로 주차 구역 사이를 수 미터 이동했는데, 마침 순찰 중이던 경비원의 신고로 경찰에 음주운전으로 적발됐습니다. 본인은 \'지하 주차장은 일반 도로가 아닌 사유지 내부\'라고 주장하지만, 경찰은 음주측정 결과를 근거로 도로교통법 위반으로 입건했어요. 문제는 아파트 지하 주차장이 도로교통법 제2조 제1호에서 정한 \'도로\'에 해당하는지입니다. 출입이 입주민과 방문객으로 제한된 아파트 내부 주차장이라도 일반 교통에 이용되는 공간으로 평가될 수 있는지가 핵심 다툼 사정입니다." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 제2조 제1호는 도로를 일반 교통에 사용되는 모든 곳 등으로 규정하는 영역이며, 아파트 부설 주차장이 도로에 해당하는지는 출입 제한 여부·이용 실태를 종합해 평가되는 사정입니다. 음주운전 혐의를 받고 있다면 ① 도로 해당성 ② 수치 평가 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차장 단거리 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로·수치·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도로 해당성</strong> — 아파트 지하 주차장이 도교법상 도로인지 다툼.</li>\n<li><strong>② 수치 평가</strong> — 측정 결과와 처벌 기준(0.03%·0.08%·0.2%) 비교.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 도로 해당성에 따른 면허 정지·취소 처분 검토.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·반성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 아파트 부설 주차장은 입주민·방문객이 자유롭게 이용하는 공간으로 도교법상 도로로 평가될 소지가 있는 사정입니다. 출입이 어느 정도 제한되는지, 주차장 구조가 주차구역 통로인지 등이 핵심 다툼 자료. 전력이 없더라도 음주 수치에 따라 행정 처분 트랙이 병행됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·자료·진술·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 자문 권장.</li>\n<li><strong>2단계 — 주차장 구조·출입 자료 (1주 내)</strong> — 지하 주차장 출입구·차단기·안내도 사진.</li>\n<li><strong>3단계 — 도로 해당성 정황 자료 (1~2주)</strong> — 출입 제한 여부·입주민 전용 안내문.</li>\n<li><strong>4단계 — 형사 절차 (1~3개월)</strong> — 도로 해당성 자료 + 진술.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 불복 행정심판 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차장 음주운전 도로 해당성 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로·행정·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>아파트 지하 주차장 출입구·차단기 사진</strong></li>\n<li><strong>주차장 안내도·입주민 전용 표시 자료</strong></li>\n<li><strong>출입 제한 여부·방문객 이용 규정</strong></li>\n<li><strong>면허 처분 통지서</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>행정심판 청구서(90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 아파트 지하 주차장에 차단기가 없고 외부인도 자유롭게 출입한다면 도로 해당성 인정 가능성이 높은 사정. 출입이 철저히 제한된 구조라면 \'도로 비해당\' 주장의 정황 자료로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로 해당성</strong> — 아파트 주차장 출입 제한 여부.</li>\n<li><strong>수치 처벌 기준</strong> — 0.03%·0.08%·0.2% 트랙.</li>\n<li><strong>면허 정지·취소</strong> — 행정 처분 병행 트랙.</li>\n<li><strong>초범 평가</strong> — 전과 부재.</li>\n<li><strong>양형 자료</strong> — 반성·자원봉사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 아파트 주차장 도로 해당성 평가 영역',
        summary:
          '대법원 2004도6779(대법원, 2005.01.14 선고) 영역에서 법원은 아파트단지 내 건물 사이 통로와 주차구획선 밖 통로 부분이 도로교통법 제2조 제1호에서 정한 도로에 해당하는지 여부는 일반 교통에 실제로 사용되는지를 기준으로 판단해야 한다고 본 사례 흐름이 있으며, 아파트 지하 주차장 음주운전 사안에서도 동일 기준이 검토될 수 있습니다.',
        takeaway: '아파트 주차장 도로 해당성은 출입 제한·이용 실태 종합 평가 영역 — 변호인 상담·구조 자료 확보 권장.',
      },
    ],
    faq: [
      {
        question: '아파트 주차장도 도로교통법 도로인가요?',
        answer:
          '<strong>일반 교통에 사용되는지에 따라 평가가 갈리는 영역입니다.</strong> 출입 제한 자료가 핵심.',
      },
      {
        question: '수 미터만 이동했어도 음주운전인가요?',
        answer:
          '<strong>이동 거리보다 장소(도로)와 수치가 핵심 평가 사정입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '면허 처분도 같이 받게 되나요?',
        answer:
          '<strong>형사와 행정 처분은 별개 트랙입니다.</strong> 처분 후 90일 내 행정심판 검토 가능 영역.',
      },
      {
        question: '도로가 아니라고 인정되면 처벌이 없나요?',
        answer:
          '<strong>도로 해당성이 없으면 도교법 음주 처벌이 어려운 영역이지만 단정은 곤란합니다.</strong> 변호인 자문 필요.',
      },
      {
        question: '초범인데 어떻게 처분되나요?',
        answer:
          '<strong>도로 해당성·수치·초범 조합으로 결정되는 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '2회 이상 처벌', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '주차장 음주운전', href: '/guide/dui/dui-private-residential-parking-lot-no-public-impaired-track' },
    ],
  },

  // ─── 6. dui-electric-scooter-drunk-riding-track ───
  {
    domain: 'dui',
    slug: 'dui-electric-scooter-drunk-riding-track',
    keyword: '공유 전동킥보드 음주운전 처벌',
    questionKeyword: '술을 마신 후 공유 전동킥보드를 타다가 음주 단속에 걸렸어요. 전동킥보드도 음주운전 처벌을 받나요?',
    ctaKeyword: '전동킥보드 음주운전 처벌 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '공유 전동킥보드 음주운전 — 5단계 처벌 트랙 | 로앤가이드',
      description:
        '공유 전동킥보드 음주 단속을 받고 있다면 개인형이동장치 처벌·행정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 술자리를 마치고 근처에 세워진 공유 전동킥보드 앱을 켜서 탑승했는데, 가다가 경찰의 음주 단속에 걸려 측정을 받았습니다. 전동킥보드라면 그냥 자전거 정도라고 생각했는데, 경찰관이 \'원동기장치자전거에 해당하므로 음주운전 처벌 대상\'이라며 입건 절차를 진행했어요. 본인은 전동킥보드를 차로 생각한 적이 없어 이런 처벌이 있다는 것도 몰랐고, 면허 처분도 함께 받게 되는지 걱정되는 상황입니다." 도로교통법 제44조는 원동기장치자전거를 포함한 모든 차를 음주운전 금지 대상으로 규정하고, 개인형이동장치(PM)는 법령 개정에 따라 원동기장치자전거로 분류되어 음주 처벌 대상이 되는 영역입니다. 혐의를 받고 있다면 ① 처벌 기준 확인 ② 수치 평가 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공유 전동킥보드 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기준·수치·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처벌 기준 확인</strong> — 전동킥보드 = 개인형이동장치 = 원동기장치자전거 음주 처벌 대상.</li>\n<li><strong>② 수치 평가</strong> — 0.03%·0.08%·0.2% 처벌 구간 확인.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 자동차 면허 정지·취소 처분 병행 여부 검토.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·수치 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공유 전동킥보드는 개인형이동장치로서 도로교통법 음주 처벌 대상이며, 자동차 운전면허 정지·취소도 병행될 수 있는 영역. 법령 변경(개정)일 기준이 적용될 수 있어 사건 일시 확인이 중요한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·수치·진술·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 법령 적용 기준 확인.</li>\n<li><strong>2단계 — 측정 자료·수치 확인 (즉시)</strong> — 음주측정 결과지 보존.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 수치·법령 적용 범위 진술.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·자원봉사·기부 자료.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 처분 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">전동킥보드 음주운전 처벌 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·행정·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>공유 킥보드 앱 이용 기록(대여·반납 시각)</strong></li>\n<li><strong>법령 적용 기준일(전동킥보드 처벌 개정 시점)</strong></li>\n<li><strong>면허 처분 통지서</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>본인 신원·초범 자료</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 개정 도로교통법에서 전동킥보드는 개인형이동장치로 분류되어 음주 처벌 및 면허 처분 대상이 됩니다. 법령 적용 기준일을 꼭 확인하고, 면허 처분은 90일 내 행정심판 검토를 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법령 적용 기준일</strong> — 개정 전·후 처벌 범위.</li>\n<li><strong>수치 처벌 구간</strong> — 0.03%·0.08%·0.2% 분기.</li>\n<li><strong>면허 처분 병행</strong> — 행정 처분 트랙.</li>\n<li><strong>초범 평가</strong> — 전과 부재.</li>\n<li><strong>양형</strong> — 반성·자원봉사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전동킥보드 음주 처벌 영역',
        summary:
          '대법원 2022도13430(대법원, 2023.06.29 선고) 영역에서 법원은 구 특정범죄가중법 제5조의11 제1항에서 \'원동기장치자전거\'에 전동킥보드와 같은 개인형이동장치가 포함된다고 판시했으며, 공유 전동킥보드 음주 단속 사안에도 동일 법리가 적용되어 처벌 대상으로 평가될 수 있습니다.',
        takeaway: '전동킥보드는 개인형이동장치로 원동기장치자전거 음주 처벌 대상 영역 — 변호인 상담·행정심판 검토 권장.',
      },
    ],
    faq: [
      {
        question: '전동킥보드도 음주운전 처벌을 받나요?',
        answer:
          '<strong>개인형이동장치로서 음주 처벌 대상 영역입니다.</strong> 법령 적용 기준일 확인 필요.',
      },
      {
        question: '자동차 면허도 처분받나요?',
        answer:
          '<strong>자동차 운전면허 행정 처분이 병행될 수 있는 영역입니다.</strong> 90일 내 행정심판 검토 권장.',
      },
      {
        question: '몰랐다고 하면 처벌이 줄어드나요?',
        answer:
          '<strong>법령 부지는 처벌을 면제하는 사유로 인정되기 어려운 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '수치가 낮으면 처분이 다른가요?',
        answer:
          '<strong>0.03%~0.08% / 0.08%~0.2% / 0.2% 이상 처벌 구간이 다른 영역입니다.</strong> 수치 확인이 핵심.',
      },
      {
        question: '초범이면 벌금으로 끝나나요?',
        answer:
          '<strong>수치·초범 조합으로 결정되는 영역입니다.</strong> 변호인 자문이 필요합니다.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '전동킥보드 음주', href: '/guide/dui/dui-electric-scooter-personal-mobility-impaired-track' },
      { label: '2회 이상 처벌', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '측정거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },

  // ─── 7. dui-breath-test-refusal-track ───
  {
    domain: 'dui',
    slug: 'dui-breath-test-refusal-track',
    keyword: '음주측정 거부',
    questionKeyword: '경찰이 음주측정을 요구했는데 거부했다가 측정거부죄로 입건됐어요. 측정거부가 더 불리한가요?',
    ctaKeyword: '음주측정 거부 대응 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 입건 — 5단계 측정불응죄 대응 트랙 | 로앤가이드',
      description:
        '음주측정 거부로 입건됐다면 측정불응죄·처벌 수준·행정심판 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 운전 중 경찰의 음주 단속을 받았는데, 음주측정기에 입을 대는 것이 불편하고 억울하다는 생각에 몇 차례 측정 요구에 응하지 않았습니다. 그러자 경찰이 \'음주측정불응죄\'로 현행범 체포해 입건했고, 이후 면허 취소 처분 통보까지 받았어요. 나중에 알고 보니 측정거부는 최고 수준의 음주로 간주해 처벌하는 규정이 있고, 술을 마셨다고 인정하는 것보다 오히려 더 불리한 처분을 받을 수도 있다는 사실을 뒤늦게 알게 됐습니다." 도로교통법 제148조의2 제1항 제2호는 음주측정에 응하지 않은 경우 처벌하는 영역이며, 1회 이상 거부로도 성립이 논의될 수 있는 반면 일시적 거부에 그친 경우는 다툼의 여지가 있는 사정입니다. 혐의를 받고 있다면 ① 측정불응 평가 ② 거부 정당성 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주측정 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 불응 평가·정당성·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정불응 평가</strong> — 거부 횟수·태양 = 불응죄 성립 범위 다툼.</li>\n<li><strong>② 거부 정당성</strong> — 신체 이상·일시적 불응 여부.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 측정거부 시 면허 취소 처분.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·전력 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정거부는 도교법상 최고 수준의 음주(0.2% 이상)와 동일하게 처벌되는 영역. 다만 일시적 거부에 그쳤거나 신체 이상 등 정당한 사유가 있는 경우 다툼의 여지가 있는 사정입니다. 면허 취소 처분은 90일 내 행정심판 검토 권장.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·정당성·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 자문 권장.</li>\n<li><strong>2단계 — 거부 경위·신체 이상 자료 (1주 내)</strong> — 당시 신체 상태·거부 횟수·경찰관 진술 기록.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 일시적 거부·정당성 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·자원봉사·기부 자료.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 취소 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거부 경위·행정·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·측정 거부 상황 기록</strong></li>\n<li><strong>당시 신체 이상·호흡 곤란 정황 자료(의무기록 등)</strong></li>\n<li><strong>거부 횟수·경찰관 요구 횟수 기록</strong></li>\n<li><strong>면허 취소 처분 통지서</strong></li>\n<li><strong>본인 반성문·자원봉사 자료</strong></li>\n<li><strong>본인 신원·초범 자료</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신체 이상(호흡 곤란 등)으로 호흡 측정이 어려운 경우 혈액 채취 방법으로 대체 측정 요청이 가능한 영역입니다. 일시적 거부로 그쳤음을 입증하는 경위 기록이 핵심 자료로 검토됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일시적 거부 다툼</strong> — 최종 거부 여부.</li>\n<li><strong>신체 이상 정당성</strong> — 호흡 측정 불능 사정.</li>\n<li><strong>측정 요구 적법성</strong> — 주취 인정 상당한 이유.</li>\n<li><strong>면허 취소 처분</strong> — 90일 내 행정심판.</li>\n<li><strong>양형</strong> — 초범·반성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정불응죄 성립 범위 평가 영역',
        summary:
          '대법원 2013도8481(대법원, 2015.12.24 선고) 영역에서 법원은 음주측정불응죄는 음주측정을 간접 강제해 교통 안전을 도모하려는 목적이며, 측정거부가 일시적인 것에 불과한 경우에는 음주측정불응죄가 성립하지 않는다고 판시했으며, 거부 횟수·태양·최종 의사 결정 여부가 핵심 평가 사정으로 검토됩니다.',
        takeaway: '일시적 거부로 그친 경우 측정불응죄 불성립 여지 영역 — 변호인 상담·거부 경위 자료 확보 권장.',
      },
    ],
    faq: [
      {
        question: '측정거부가 음주보다 더 불리한가요?',
        answer:
          '<strong>측정거부는 최고 수준 음주와 동일하게 처리되는 영역입니다.</strong> 변호인 자문 필수.',
      },
      {
        question: '일시적으로 거부했다가 결국 응하면 어떻게 되나요?',
        answer:
          '<strong>최종 측정에 응했다면 불응죄 성립 여지가 줄어드는 영역입니다.</strong> 경위 기록이 결정.',
      },
      {
        question: '신체 이상으로 호흡이 어려우면 어떻게 하나요?',
        answer:
          '<strong>혈액 채취 방법으로 대체 측정 요청이 가능한 영역입니다.</strong> 의무기록 보존 권장.',
      },
      {
        question: '면허 취소도 함께 받나요?',
        answer:
          '<strong>측정거부 시 면허 취소 행정 처분이 병행되는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
      {
        question: '초범이면 형사 처분이 줄어드나요?',
        answer:
          '<strong>초범·반성은 양형 사정으로 검토되는 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '측정거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '2회 이상 처벌', href: '/guide/dui/dui-second-offense-penalty' },
    ],
  },

  // ─── 8. dui-second-offense-license-revocation-track ───
  {
    domain: 'dui',
    slug: 'dui-second-offense-license-revocation-track',
    keyword: '음주운전 2회 면허취소',
    questionKeyword: '음주운전으로 2번째 적발되어 면허가 취소됐어요. 2회 이상이면 가중처벌을 받나요? 형사와 행정 처분을 어떻게 대응하나요?',
    ctaKeyword: '음주운전 2회 면허취소 대응 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주운전 2회 면허취소 — 5단계 가중처벌 형사·행정 트랙 | 로앤가이드',
      description:
        '음주운전 2회 이상으로 면허취소·가중처벌을 받고 있다면 형사·행정심판 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 몇 년 전 음주운전으로 면허 정지 처분을 받은 전력이 있었는데, 이번에 다시 음주 상태로 운전하다 적발됐습니다. 경찰이 \'2회 이상 음주운전\'으로 가중처벌 규정을 적용하겠다고 했고, 이번엔 면허 취소 처분을 받았어요. 전력이 있으니 합의를 해도 실형을 받을 수 있다는 말을 들어 매우 불안한 상황이고, 행정 처분으로 면허까지 취소되면 생계도 영향을 받게 돼 걱정이 큽니다." 도로교통법 제148조의2 제1항은 음주운전으로 2회 이상 위반한 경우 가중 처벌을 규정하는 영역이며, 형사 처분과 면허 취소 행정 처분이 별개로 진행되는 트랙입니다. 혐의를 받고 있다면 ① 전력 가중 평가 ② 수치·처벌 구간 ③ 형사 절차 ④ 면허·행정심판 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주운전 2회 면허취소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 전력·수치·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전력 가중 평가</strong> — 과거 위반 전력과 현재 사건 간격·적용 요건.</li>\n<li><strong>② 수치 처벌 구간</strong> — 0.03%·0.08%·0.2% 기준 + 가중 구간.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 + 실형·집행유예 다툼.</li>\n<li><strong>④ 면허·행정심판</strong> — 취소 처분 + 90일 내 행정심판.</li>\n<li><strong>⑤ 양형</strong> — 전력·반성·피해 회복 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2회 이상 음주운전은 도교법 제148조의2 가중 처벌 영역에 해당하며, 수치·전력·사고 유무에 따라 실형 가능성이 높아지는 사정입니다. 행정 면허 취소 처분은 형사와 별개로 90일 내 행정심판 트랙이 병행됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·전력 확인·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 전력 적용 요건·수치·가중 구간 확인.</li>\n<li><strong>2단계 — 전력 자료·수치 확인 (즉시)</strong> — 과거 처분 일시·종류·현재 측정 결과.</li>\n<li><strong>3단계 — 형사 절차 (1~6개월)</strong> — 수치·전력 자료 + 양형 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·자원봉사·기부·취업 생계 자료.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 취소 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주운전 2회 면허취소 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 전력·형사·행정 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>과거 음주 전력 처분 자료(면허 정지·벌금·집행유예 등)</strong></li>\n<li><strong>면허 취소 처분 통지서</strong></li>\n<li><strong>본인 반성문·자원봉사·기부 자료</strong></li>\n<li><strong>취업·생계 자료(운전 필요성 입증)</strong></li>\n<li><strong>본인 신원·가족 상황 자료</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 2회 이상 음주는 가중 처벌 구간이라 실형 리스크가 높아지는 영역입니다. 변호인 조기 선임 + 반성 자료 준비가 형사 양형에 결정 사정. 면허 취소는 행정심판에서 생계·필요성 자료가 핵심 자료로 검토됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전력 가중 요건</strong> — 과거 전력 시기·종류·가중 적용 여부.</li>\n<li><strong>수치 처벌 구간</strong> — 0.08%·0.2% 이상 분기.</li>\n<li><strong>실형·집행유예 다툼</strong> — 전력·반성·피해 복구.</li>\n<li><strong>면허 취소 행정심판</strong> — 생계·필요성.</li>\n<li><strong>양형</strong> — 반성·자원봉사·기부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 결과 증거 능력·위드마크 수치 평가 영역',
        summary:
          '대법원 2008도5531(대법원, 2008.08.21 선고) 영역에서 법원은 음주측정 결과를 유죄 증거로 삼으려면 측정 방법의 적법성과 위드마크 역산 수치의 전제값을 신중히 평가해야 한다고 본 사례 흐름이 있으며, 2회 이상 음주운전 사안에서도 측정 결과의 신뢰성·전력 요건 충족 여부를 종합해 가중 처벌 적용 범위가 검토될 수 있습니다.',
        takeaway: '2회 이상 음주는 가중 처벌 영역 — 변호인 조기 선임·양형 자료·행정심판 준비 권장.',
      },
    ],
    faq: [
      {
        question: '2회 이상이면 실형이 불가피한가요?',
        answer:
          '<strong>수치·전력·피해 복구에 따라 집행유예도 검토될 수 있는 영역입니다.</strong> 변호인 자문 필수.',
      },
      {
        question: '과거 전력이 몇 년 전이어도 가중되나요?',
        answer:
          '<strong>가중 적용 요건에 기간 제한이 있어 확인이 필요한 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '면허는 곧바로 취소되나요?',
        answer:
          '<strong>행정심판에서 생계·필요성 자료로 감경 검토가 가능한 영역입니다.</strong> 90일 내 청구.',
      },
      {
        question: '합의를 하면 형량이 줄어드나요?',
        answer:
          '<strong>피해자 없는 음주운전은 합의보다 반성·자원봉사 자료가 더 결정적인 영역입니다.</strong> 변호인 자문.',
      },
      {
        question: '수치가 0.2% 이상이면 어떻게 다른가요?',
        answer:
          '<strong>0.2% 이상은 최고 가중 처벌 구간으로 평가되는 영역입니다.</strong> 변호인 조기 선임 권장.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '2회 이상 처벌', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '측정거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },
];
