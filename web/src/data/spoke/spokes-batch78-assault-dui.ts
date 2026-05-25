import { SpokePage } from '../spoke-pages';

// batch78 assault + dui — 8개 (2026-05-26)
//
// 고유 존재 이유:
// assault 4:
// 1. 배달 라이더 배달 중 주문 손님 폭행 — '음식 배달 현관 응대 + 손님 일방 가격 + 업무 중 피해 + 앱 배차·CCTV' 트랙 (victim)
// 2. 헬스장 라커룸 자리 시비 폭행 — '샤워실·라커 자리 시비 + 모르는 회원 밀침·가격 + 시설 CCTV·회원권' 트랙 (victim)
// 3. 셰어하우스 룸메이트 생활 갈등 밀침 혐의 — '공용공간 청소·소음 갈등 + 격분 밀침 + 쌍방 주장' 트랙 (accused)
// 4. 축제 인파 밀침 시비 쌍방 폭행 혐의 — '콘서트·축제 혼잡 + 우발적 밀침 + 쌍방 신고' 트랙 (accused)
//
// dui 4 (모두 운전자 본인 대응, accused):
// 5. 0.03% 경계 수치 단순음주 초범 — '면허 정지·취소 경계 수치 + 측정 오차 다툼 + 초범 양형' 트랙
// 6. 생계형 직업운전자 면허취소 행정심판 — '택배·영업 운전 생계 + 면허취소 90일 행정심판 + 생계 자료' 트랙
// 7. 음주 단속 회피 유턴 후 적발 — '단속지점 앞 유턴·회피 + 추적 적발 + 회피 정황 다툼' 트랙
// 8. 회사 차량 음주운전 사고 — '업무용 차량 + 음주 사고 + 형사 + 회사 징계·구상' 트랙

export const spokesBatch78AssaultDui: SpokePage[] = [
  // ─── 1. assault-delivery-rider-customer-doorstep-victim-track ───
  {
    domain: 'assault',
    slug: 'assault-delivery-rider-customer-doorstep-victim-track',
    keyword: '배달 라이더 손님 폭행',
    questionKeyword: '음식 배달 중에 주문 손님이 음식이 늦었다며 화를 내고 저를 때려 다쳤어요. 배차 기록과 CCTV가 있는데 어떻게 대응하나요?',
    ctaKeyword: '배달 라이더 손님 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배달 라이더 손님 폭행 — 5단계 업무 중 상해 대응 트랙 | 로앤가이드',
      description:
        '배달 중 주문 손님에게 폭행·상해를 당했다면 증거·고소·합의·배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 음식 배달 라이더로 일하던 중, 한 주문 손님 집 현관에서 음식을 전달했는데 손님이 \'음식이 너무 늦었다\'며 갑자기 욕설을 퍼붓더니 본인의 가슴을 밀치고 들고 있던 봉투를 빼앗아 던지며 본인의 팔과 손목을 가격했습니다. 본인은 손목 인대 손상과 타박상으로 정형외과에서 전치 2주 진단을 받았어요. 배달 앱에는 해당 주문의 배차·도착 기록이 남아 있고, 빌라 현관 복도 CCTV에 손님이 먼저 손을 뻗어 미는 장면이 녹화됐을 가능성이 있는 상황입니다. 손님은 \'밀친 적 없다\'며 발뺌하고 있어요." 형법 제257조는 사람의 신체를 상해한 행위를, 형법 제260조는 폭행 행위를 다루는 영역이며, 업무 수행 중 일방적으로 가격당해 전치 2주 상해가 발생한 정황이 배차 기록·CCTV로 뒷받침되면 폭행·상해로 평가될 소지가 있는 사정입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배달 라이더 손님 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 2주 + 일방 가격 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 배달 앱 배차·도착 기록·CCTV·진단서.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음식이 늦었다는 불만은 정당한 항의 범위를 넘어 신체에 유형력을 행사하면 폭행·상해 논의 영역입니다. 배달 앱 배차·도착 시각 기록은 본인이 업무 중이었음을 입증하는 객관 자료이고, 복도 CCTV가 선행 가격을 보여주면 평가가 유리한 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정형외과 진단서·손목 X-ray·치료 기록.</li>\n<li><strong>2단계 — 배차 기록·CCTV 보존 요청 (1주 내)</strong> — 배달 앱 주문·도착 내역 캡처 + 빌라 관리·세대에 영상 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달 라이더 손님 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>정형외과 진단서(전치 2주)·손목 X-ray·치료 기록</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>배달 앱 주문·배차·도착 시각 캡처(업무 중 입증)</strong></li>\n<li><strong>빌라 현관·복도 CCTV 영상(관리·세대 보존 요청분)</strong></li>\n<li><strong>본인 부상 부위 사진(사건 직후)</strong></li>\n<li><strong>손님과의 통화·문자·앱 채팅 기록</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 빌라·다세대 현관 CCTV는 보존 기간이 짧은 경우가 많아 즉시 보존 요청이 필수. 배달 앱 기록은 운영사에 자료 보존·발급을 요청해 캡처와 함께 확보하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선행 가격 다툼</strong> — \'밀친 적 없다\' 발뺌 vs CCTV·앱 기록.</li>\n<li><strong>상해 인과관계</strong> — 손목 인대 손상 발생 원인.</li>\n<li><strong>업무 중 입증</strong> — 배차·도착 시각 기록.</li>\n<li><strong>합의금 산정</strong> — 전치 2주 + 일실수입 기준.</li>\n<li><strong>민사 배상</strong> — 치료·위자료·소득 손실 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 / 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무 수행 중 과실치상 평가 영역',
        summary:
          '대법원 2024도15542(대법원, 2025.03.13 선고) 업무상과실치상 영역에서 법원은 작업 수행에 수반된 행위로 피해자가 상해를 입은 사안에서 행위와 상해 결과의 인과관계·행위 태양을 종합해 평가해야 한다고 판시했습니다. 배달 업무 중 손님에게 일방적으로 가격당해 전치 2주 상해를 입은 사안에서도 행위 태양·결과·앱 기록을 종합해 폭행·상해 평가를 검토해볼 수 있습니다.',
        takeaway: '배달 업무 중 일방 가격 + 전치 2주 결합 시 폭행·상해 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '손님이 \'밀친 적 없다\'고 발뺌하면 어떻게 되나요?',
        answer:
          '<strong>CCTV·배달 앱 기록이 선행 가격을 입증하면 방어할 여지가 있는 영역입니다.</strong> 영상 선제 확보가 핵심.',
      },
      {
        question: '배달 앱 기록도 증거가 되나요?',
        answer:
          '<strong>배차·도착 시각 기록은 업무 중 정황을 뒷받침하는 객관 자료 영역입니다.</strong> 운영사 보존 요청 권장.',
      },
      {
        question: '음식이 늦은 게 제 잘못이면 불리한가요?',
        answer:
          '<strong>지연 책임과 신체에 대한 폭행은 별개 평가 영역입니다.</strong> 항의가 가격으로 이어졌는지가 관건.',
      },
      {
        question: '전치 2주도 형사 고소가 가능한가요?',
        answer:
          '<strong>상해 진단서 + 행위 태양 결합으로 형사 고소 가능 영역입니다.</strong> CCTV 있으면 입증이 용이합니다.',
      },
      {
        question: '일을 못 한 기간 소득도 청구할 수 있나요?',
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

  // ─── 2. assault-gym-locker-room-stranger-shove-injury-track ───
  {
    domain: 'assault',
    slug: 'assault-gym-locker-room-stranger-shove-injury-track',
    keyword: '헬스장 라커룸 시비 폭행',
    questionKeyword: '헬스장 라커룸에서 자리 문제로 모르는 회원과 시비가 붙었고 상대가 저를 밀쳐 다쳤어요. 시설 CCTV와 회원권 기록이 있어요. 어떻게 대응하나요?',
    ctaKeyword: '헬스장 라커룸 시비 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 라커룸 시비 폭행 — 5단계 상해 대응 트랙 | 로앤가이드',
      description:
        '헬스장 라커룸에서 모르는 회원에게 밀침·폭행을 당했다면 증거·고소·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 다니던 헬스장 라커룸에서 옷을 갈아입던 중, 좁은 통로에서 전혀 모르는 회원과 자리가 겹쳐 가벼운 언쟁이 붙었습니다. 상대가 갑자기 \'비키라\'며 본인의 어깨를 두 손으로 강하게 밀쳐 본인은 뒤로 넘어지면서 라커 모서리에 등과 머리를 부딪혀 전치 3주 진단을 받았어요. 헬스장 라커룸 입구에는 CCTV가 설치돼 있고, 본인과 상대 모두 회원이라 출입 기록·회원권 정보로 신원 확인이 가능한 상황입니다. 상대는 \'본인이 먼저 시비를 걸었다\'며 쌍방을 주장하고 있어요." 형법 제257조는 신체를 상해한 행위를, 형법 제260조는 폭행을 다루는 영역이며, 두 손으로 강하게 밀쳐 넘어뜨려 전치 3주 상해가 발생한 정황이 CCTV로 입증되면 폭행·상해로 평가될 소지가 있는 사정입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 라커룸 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 3주 + 강한 밀침 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 라커룸 입구 CCTV·진단서·회원 출입 기록.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 공간 자리 시비라도 두 손으로 강하게 밀쳐 넘어뜨린 행위는 유형력 행사로 폭행 논의 영역. 회원 출입 기록으로 상대 신원 특정이 용이하고, 입구 CCTV가 밀침 장면을 담으면 쌍방 주장 방어에 유리한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정형외과·신경외과 진단서·CT·치료 기록.</li>\n<li><strong>2단계 — CCTV·출입 기록 보존 요청 (1주 내)</strong> — 헬스장에 라커룸 입구 영상·회원 출입 기록 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 라커룸 시비 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원 진단서(전치 3주)·CT·치료 기록</strong></li>\n<li><strong>치료비·약제비 영수증</strong></li>\n<li><strong>헬스장 라커룸 입구 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>본인·상대 회원 출입 기록·회원권 정보</strong></li>\n<li><strong>부상 부위 사진(사건 직후)</strong></li>\n<li><strong>당시 정황 메모·목격 회원 연락처</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 라커룸 내부는 사생활 공간이라 CCTV가 입구·통로에만 설치된 경우가 많습니다. 입구 영상과 회원 출입 기록을 결합해 상대 신원·시간대를 특정하는 것이 핵심이며, 머리 충격이 있었으면 신경외과 진료 기록도 함께 확보 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>쌍방 시비 다툼</strong> — \'먼저 시비\' 주장 vs CCTV 선후 관계.</li>\n<li><strong>상해 인과관계</strong> — 라커 모서리 충돌로 인한 부상.</li>\n<li><strong>신원 특정</strong> — 회원 출입 기록 활용.</li>\n<li><strong>합의금 산정</strong> — 전치 3주 + 머리 부상 경과.</li>\n<li><strong>민사 배상</strong> — 치료·위자료·소득 손실 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 / 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 신중 평가 영역',
        summary:
          '대법원 2021모2650(대법원, 2024.12.18 선고) 중상해 관련 재심 영역에서 법원은 상해 사건의 핵심 사실과 증거의 증명력을 신중하게 따져야 한다고 본 사례 흐름이 있습니다. 헬스장 라커룸에서 강한 밀침으로 전치 3주 상해를 입은 사안에서도 상해 발생 경위·행위 태양을 CCTV·진단서와 함께 종합 평가하는 기준을 검토해볼 수 있습니다.',
        takeaway: '강한 밀침 + 전치 3주 결합 시 폭행·상해 평가 영역 — CCTV·진단서 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 \'먼저 시비를 걸었다\'고 하면 어떻게 되나요?',
        answer:
          '<strong>CCTV 선후 관계가 평가 사정입니다.</strong> 입구 영상 선제 확보가 방어의 핵심.',
      },
      {
        question: '모르는 회원인데 신원을 어떻게 확인하나요?',
        answer:
          '<strong>회원 출입 기록·회원권 정보로 특정이 가능한 영역입니다.</strong> 헬스장에 협조 요청 + 112 신고 병행 권장.',
      },
      {
        question: '라커룸 안에 CCTV가 없으면 입증이 안 되나요?',
        answer:
          '<strong>입구·통로 CCTV와 목격 회원 진술을 결합하는 영역입니다.</strong> 출입 시간대 특정이 보조 증거.',
      },
      {
        question: '머리를 부딪혔는데 어떤 진료를 받아야 하나요?',
        answer:
          '<strong>신경외과 진료·CT 기록 확보가 권장되는 영역입니다.</strong> 후유증 평가 자료로도 활용됩니다.',
      },
      {
        question: '합의금은 얼마 정도 기준인가요?',
        answer:
          '<strong>전치 3주 + 머리 부상 경과에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
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

  // ─── 3. assault-roommate-shared-housing-dispute-accused-track ───
  {
    domain: 'assault',
    slug: 'assault-roommate-shared-housing-dispute-accused-track',
    keyword: '셰어하우스 룸메이트 폭행 혐의',
    questionKeyword: '셰어하우스 룸메이트와 청소·소음 문제로 다투다 격분해 상대를 밀쳤다는 폭행 혐의를 받고 있어요. 쌍방으로 다퉜는데 어떻게 대응하나요?',
    ctaKeyword: '셰어하우스 룸메이트 폭행 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '셰어하우스 룸메이트 폭행 혐의 — 5단계 쌍방·합의 다툼 | 로앤가이드',
      description:
        '셰어하우스 룸메이트와 다투다 밀침으로 폭행 혐의를 받고 있다면 쌍방·합의·양형 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 셰어하우스에서 룸메이트와 함께 거실·주방을 공용으로 쓰는데, 상대가 청소를 미루고 밤늦게 소음을 내는 일로 갈등이 쌓여 왔습니다. 그날도 설거지 문제로 말다툼이 격해졌고, 상대가 본인에게 손가락질을 하며 거칠게 다가오자 본인이 격분해 상대의 어깨를 밀쳐 물러서게 했어요. 그런데 상대가 \'폭행당했다\'며 경찰에 신고해 폭행 혐의로 입건되었습니다. 본인은 상대도 먼저 밀치고 욕설을 했다는 입장이고, 거실에는 공용 CCTV가 없지만 다른 입주자 한 명이 일부 상황을 목격한 상황이에요." 형법 제260조 폭행은 신체에 대한 유형력 행사로 논의되는 영역이지만, 형법 제21조 정당방위·우발·경미 정황과 쌍방 폭행 여부가 합산 평가 사정이 되며, 합의·초범·경미성이 처분 단계에서 중요한 영역입니다. 혐의를 받고 있다면 ① 폭행 평가 ② 증거 보존 ③ 합의 ④ 진술 전략 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 셰어하우스 룸메이트 폭행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·합의·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭행 평가</strong> — 어깨 밀침 + 상호 충돌 정황 = 쌍방·경미 폭행 다툼.</li>\n<li><strong>② 증거 보존</strong> — 목격 입주자 진술·갈등 경위 메시지·당시 기록.</li>\n<li><strong>③ 합의</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 갈등 경위·쌍방성 일관 진술.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·경미성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 함께 사는 공간의 누적된 생활 갈등은 경위 정황이 되지만 밀침 자체는 폭행 논의 영역입니다. 상대도 먼저 밀치거나 욕설을 한 정황이 목격 진술로 뒷받침되면 쌍방 폭행 평가·합의 협의에 영향을 주는 사정. 합의를 조기에 진행하는 것이 처분에 유리한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·합의·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 자문 권장.</li>\n<li><strong>2단계 — 목격 입주자·경위 자료 확보 (1주 내)</strong> — 목격 입주자 진술서·청소·소음 갈등 메시지 정리.</li>\n<li><strong>3단계 — 합의 협의 (1~2주)</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 갈등 경위·쌍방성 일관 진술.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 합의서·반성문·초범 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">셰어하우스 룸메이트 폭행 혐의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>목격 입주자 진술서·연락처</strong></li>\n<li><strong>청소·소음 갈등 경위 메시지·단체 채팅 기록</strong></li>\n<li><strong>상대의 선행 행위(욕설·밀침) 정황 자료</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·초범 자료</strong></li>\n<li><strong>사건 당시 상황 메모(시간·장소·경위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단체 채팅방의 누적 갈등 기록은 경위·쌍방성을 보여주는 정황 자료가 됩니다. 같은 집에 계속 거주해야 하는 관계라면 합의를 통한 분쟁 종결이 생활 안정에도 유리하게 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>쌍방 폭행 다툼</strong> — 상대 선행 밀침·욕설 여부.</li>\n<li><strong>경미성 평가</strong> — 어깨 밀침 정도와 부상 유무.</li>\n<li><strong>합의 협의</strong> — 처벌불원 의사.</li>\n<li><strong>초범 평가</strong> — 전과 부재.</li>\n<li><strong>양형</strong> — 합의·반성 종합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무고·폭행 신고 사실 평가 영역',
        summary:
          '대법원 2025도1084(대법원, 2025.05.15 선고) 무고·폭행 영역에서 법원은 신고된 사실 자체가 형사처분의 원인이 될 수 있어야 무고가 논의될 수 있다고 판시했습니다. 셰어하우스 갈등 중 쌍방 밀침 사안에서도 누가 어떤 행위를 했는지, 신고 내용이 사실에 부합하는지를 목격 진술·경위 자료와 함께 종합해 평가하는 기준을 검토해볼 수 있습니다.',
        takeaway: '생활 갈등 중 쌍방 밀침은 경위·쌍방성·합의가 처분의 핵심 영역 — 변호인 상담·합의 조기 진행 권장.',
      },
    ],
    faq: [
      {
        question: '상대도 먼저 밀쳤으면 쌍방이 되나요?',
        answer:
          '<strong>상대 선행 행위가 입증되면 쌍방 폭행으로 평가될 여지가 있는 영역입니다.</strong> 목격 진술이 결정 자료.',
      },
      {
        question: '거실에 CCTV가 없는데 어떻게 입증하나요?',
        answer:
          '<strong>목격 입주자 진술·단체 채팅 기록이 핵심 증거 영역입니다.</strong> 조기 확보를 권장합니다.',
      },
      {
        question: '경미한 밀침인데 처벌 대상이 되나요?',
        answer:
          '<strong>유형력 행사는 폭행으로 논의될 수 있는 영역입니다.</strong> 다만 경미성·합의로 감경 검토 가능.',
      },
      {
        question: '합의를 빨리 하면 처분이 가벼워지나요?',
        answer:
          '<strong>처벌불원 합의는 기소유예·불기소 검토 가능성을 높이는 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '같은 집에 계속 살아야 하는데 신고를 취하받을 수 있나요?',
        answer:
          '<strong>합의 과정에서 처벌불원·신고 정리 협의가 가능한 영역입니다.</strong> 변호인 중재 자문 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '쌍방 폭행 구별', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 4. assault-festival-crowd-push-shove-mutual-accused-track ───
  {
    domain: 'assault',
    slug: 'assault-festival-crowd-push-shove-mutual-accused-track',
    keyword: '축제 인파 밀침 시비 폭행 혐의',
    questionKeyword: '콘서트·축제 인파 속에서 밀치고 밀리다 시비가 붙었고 상대를 밀었다는 폭행 혐의를 받고 있어요. 우발적이고 쌍방인데 어떻게 대응하나요?',
    ctaKeyword: '축제 인파 밀침 폭행 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '축제 인파 밀침 시비 폭행 혐의 — 5단계 우발·쌍방 다툼 | 로앤가이드',
      description:
        '콘서트·축제 인파 속 밀침 시비로 폭행 혐의를 받고 있다면 우발·쌍방·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 야외 축제 공연장에서 무대 앞 혼잡한 인파 속에 서 있었는데, 사람들이 앞으로 밀려들면서 본인도 뒤에서 떠밀려 앞사람과 부딪혔습니다. 그 과정에서 앞에 있던 사람이 \'왜 미냐\'며 돌아서서 시비를 걸었고, 언쟁 끝에 본인이 그 사람의 가슴 쪽을 손으로 밀어 거리를 두려 했어요. 그런데 상대가 \'폭행당했다\'며 현장 경찰에 신고해 폭행 혐의로 입건되었습니다. 본인은 인파에 밀려 우발적으로 접촉한 것이고 상대도 본인을 먼저 밀쳤다는 입장이며, 공연장 곳곳에 CCTV와 다수 관객의 휴대폰 영상이 남아 있을 수 있는 상황이에요." 형법 제260조 폭행은 신체에 대한 유형력 행사로 논의되는 영역이지만, 혼잡한 군중 속 우발적 접촉인지, 고의적 가격인지가 핵심 쟁점이며, 쌍방성·경미성·합의가 처분 단계에서 중요한 영역입니다. 혐의를 받고 있다면 ① 폭행 평가 ② 증거 보존 ③ 합의 ④ 진술 전략 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 인파 밀침 폭행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·합의·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭행 평가</strong> — 인파 우발 접촉 vs 고의 밀침 = 고의성 다툼.</li>\n<li><strong>② 증거 보존</strong> — 공연장 CCTV·관객 휴대폰 영상·목격자.</li>\n<li><strong>③ 합의</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 우발성·쌍방성 일관 진술.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·경미성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼잡한 군중 속 떠밀려 발생한 우발적 접촉은 고의 평가에서 다툴 여지가 있는 영역입니다. 그러나 언쟁 후 적극적으로 손으로 가슴을 밀어 거리를 둔 행위는 별도 평가 사정이 되며, CCTV·관객 영상으로 우발성·쌍방성을 입증하는 것이 관건. 합의 조기 진행이 처분에 유리한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·합의·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 자문 권장.</li>\n<li><strong>2단계 — CCTV·영상·목격자 확보 (1주 내)</strong> — 공연 주최 측 CCTV 보존 요청 + 주변 관객 영상·연락처 확보.</li>\n<li><strong>3단계 — 합의 협의 (1~2주)</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 인파 우발성·쌍방성 일관 진술.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 합의서·반성문·초범 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 인파 밀침 폭행 혐의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 우발성·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>공연장·축제장 CCTV 영상(주최 측 보존 요청분)</strong></li>\n<li><strong>주변 관객 휴대폰 영상·연락처</strong></li>\n<li><strong>인파 혼잡 상황 사진·현장 안내(좌석·스탠딩 구역 자료)</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·초범 자료</strong></li>\n<li><strong>사건 당시 상황 메모(시간·위치·경위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대규모 행사는 다수 관객의 휴대폰 영상이 결정적 증거가 될 수 있어 SNS·현장 목격자 영상 확보가 중요합니다. 스탠딩 혼잡 구역임을 보여주는 현장 안내·구역 자료는 우발성 정황으로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고의·우발 다툼</strong> — 인파 떠밀림 vs 고의 밀침.</li>\n<li><strong>쌍방성</strong> — 상대 선행 밀침 여부.</li>\n<li><strong>경미성 평가</strong> — 접촉 정도와 부상 유무.</li>\n<li><strong>합의 협의</strong> — 처벌불원 의사.</li>\n<li><strong>양형</strong> — 초범·반성 종합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특수상해·행위 평가 영역',
        summary:
          '대법원 2021도4355(대법원, 2025.03.27 선고) 특수상해 영역에서 법원은 상해 사건의 행위 태양과 경위, 관련 사정을 종합해 가벌성 범위를 신중히 판단해야 한다는 취지의 법리를 다뤘습니다. 축제 인파 속 우발적 접촉과 고의 밀침이 다투어지는 사안에서도 군중 혼잡 정황·행위 태양·영상 증거를 종합해 고의성과 평가 범위를 검토해볼 수 있습니다.',
        takeaway: '인파 속 우발 접촉 vs 고의 밀침은 고의성·영상 증거가 핵심 영역 — 변호인 상담·합의 조기 진행 권장.',
      },
    ],
    faq: [
      {
        question: '인파에 떠밀려 부딪힌 것도 폭행인가요?',
        answer:
          '<strong>우발적 접촉은 고의가 다투어지는 영역입니다.</strong> 군중 혼잡 정황·영상이 판단 자료.',
      },
      {
        question: '언쟁 후 손으로 민 행위는 어떻게 평가되나요?',
        answer:
          '<strong>적극적 유형력 행사는 별도 폭행 논의 영역입니다.</strong> 우발성·쌍방성과 함께 평가됩니다.',
      },
      {
        question: '관객 휴대폰 영상은 어떻게 확보하나요?',
        answer:
          '<strong>현장 목격자·SNS 영상 확보가 핵심 증거 영역입니다.</strong> 조기 수집을 권장합니다.',
      },
      {
        question: '상대도 먼저 밀쳤으면 쌍방인가요?',
        answer:
          '<strong>상대 선행 행위가 입증되면 쌍방 평가 여지가 있는 영역입니다.</strong> 영상·목격 진술이 결정.',
      },
      {
        question: '초범이면 처분이 가벼워지나요?',
        answer:
          '<strong>합의 + 초범 + 경미성 조합 시 기소유예 검토 가능 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '쌍방 폭행 구별', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '정당방위 기준', href: '/guide/assault/self-defense-criteria' },
    ],
  },

  // ─── 5. dui-borderline-bac-003-first-offense-track ───
  {
    domain: 'dui',
    slug: 'dui-borderline-bac-003-first-offense-track',
    keyword: '0.03% 경계 수치 음주운전 초범',
    questionKeyword: '음주 단속에서 0.03% 경계 수치가 나와 면허 정지·취소가 갈린다고 해요. 초범인데 수치 다툼과 처분을 어떻게 대응하나요?',
    ctaKeyword: '0.03% 경계 수치 음주운전 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '0.03% 경계 수치 음주운전 초범 — 5단계 수치·행정 트랙 | 로앤가이드',
      description:
        '음주 단속에서 0.03% 경계 수치가 나와 처분이 걱정된다면 수치 다툼·형사·행정심판 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 전날 밤 늦게까지 술을 마시고 다음 날 아침 운전을 했는데, 출근길 음주 단속에서 혈중알코올농도가 처벌 기준선인 0.03% 부근으로 측정됐습니다. 경찰은 측정 수치를 근거로 입건했고, 본인은 술이 거의 깬 줄 알았는데 경계 수치가 나와 당황한 상황이에요. 수치가 0.03%~0.08% 구간이면 면허 정지, 0.08% 이상이면 면허 취소로 갈린다고 들어 처분 수위가 걱정되고, 측정 직전 가글·입 헹굼이나 호흡 측정 오차 가능성도 다툴 수 있는지 궁금합니다. 본인은 음주운전 전력이 없는 초범입니다." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 제148조의2는 혈중알코올농도 구간에 따라 처벌을 달리 규정하는 영역이며, 경계 수치 사안은 측정 방법의 적법성·전제값이 신중히 평가되는 사정입니다. 혐의를 받고 있다면 ① 수치 평가 ② 측정 적법성 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 0.03% 경계 수치 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·측정·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수치 평가</strong> — 0.03%·0.08%·0.2% 구간에 따른 면허 정지·취소 분기.</li>\n<li><strong>② 측정 적법성</strong> — 호흡 측정 오차·가글·입 헹굼·재측정 절차.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·약식·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 정지(0.03~0.08%)·취소(0.08% 이상) 처분 분기.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·수치 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 0.03% 부근 경계 수치는 면허 정지·취소가 갈리는 결정적 사정입니다. 호흡 측정 직후 입 헹굼·재측정 절차가 지켜졌는지, 측정 오차 범위가 다툴 여지가 있는지 확인이 중요하며, 위드마크 역산이 쓰인 경우 전제값이 신중히 평가되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·측정·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 측정 절차·수치 검토.</li>\n<li><strong>2단계 — 측정 자료 확인 (즉시)</strong> — 음주측정 결과지·측정 시각·재측정 여부 확인.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 측정 적법성·경계 수치 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·자원봉사·교육 이수 자료.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 처분 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">0.03% 경계 수치 음주운전 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·행정·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>측정 시각·재측정·입 헹굼 절차 기록</strong></li>\n<li><strong>위드마크 역산 적용 여부·전제값 자료</strong></li>\n<li><strong>면허 처분 통지서(정지·취소 구분)</strong></li>\n<li><strong>본인 반성문·자원봉사·음주운전 예방교육 이수증</strong></li>\n<li><strong>본인 신원·초범 자료</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 호흡 측정은 입안 잔류 알코올로 수치가 높게 나올 수 있어 입 헹굼 후 일정 시간 경과·재측정 절차가 지켜졌는지가 중요합니다. 경계 수치는 면허 정지·취소를 가르므로 측정 절차 자료를 빠짐없이 확보하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경계 수치 다툼</strong> — 0.03% 부근 정지·취소 분기.</li>\n<li><strong>측정 적법성</strong> — 입 헹굼·재측정·오차 범위.</li>\n<li><strong>위드마크 역산</strong> — 전제값 신중 평가.</li>\n<li><strong>면허 정지·취소</strong> — 90일 내 행정심판.</li>\n<li><strong>양형</strong> — 초범·반성·교육 이수.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위드마크 역산 수치 엄격 증명 영역',
        summary:
          '대법원 2020도6417(대법원, 2023.12.28 선고) 음주운전 영역에서 법원은 위드마크 공식으로 운전 당시 혈중알코올농도를 추정할 때 적용 전제가 되는 개별·구체적 사실에 관하여 엄격한 증명을 요하며, 시간당 알코올 분해량은 피고인에게 가장 유리한 통계값을 대입해야 한다고 판시했습니다. 0.03% 부근 경계 수치 사안에서도 측정 방법과 역산 전제값을 신중히 평가하는 기준을 검토해볼 수 있습니다.',
        takeaway: '경계 수치는 측정 적법성·위드마크 전제값이 핵심 영역 — 측정 자료 확보 후 변호인 상담·행정심판 검토 권장.',
      },
    ],
    faq: [
      {
        question: '0.03%면 면허가 어떻게 되나요?',
        answer:
          '<strong>0.03%~0.08%는 정지, 0.08% 이상은 취소로 갈리는 영역입니다.</strong> 경계 수치 확인이 핵심.',
      },
      {
        question: '입을 헹구지 않고 측정했으면 다툴 수 있나요?',
        answer:
          '<strong>입 헹굼·재측정 절차 준수 여부가 다툼 사정인 영역입니다.</strong> 측정 자료 확인 권장.',
      },
      {
        question: '아침에 운전했는데도 처벌되나요?',
        answer:
          '<strong>운전 당시 수치가 기준 이상이면 시간대와 무관하게 논의되는 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '초범이면 형사 처분이 가벼운가요?',
        answer:
          '<strong>초범·반성·교육 이수는 양형 사정으로 검토되는 영역입니다.</strong> 자료 준비 권장.',
      },
      {
        question: '면허 정지·취소도 다툴 수 있나요?',
        answer:
          '<strong>형사와 별개로 처분 후 90일 내 행정심판 검토가 가능한 영역입니다.</strong> 기한 확인 필수.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '수치별 처벌 기준', href: '/guide/dui/dui-bac-penalty-by-level' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '위드마크 역산 다툼', href: '/guide/dui/dui-widmark-back-calculation-dispute-track' },
      { label: '정지·취소 기준', href: '/guide/dui/dui-first-offense-license-suspension-vs-revocation-criteria' },
    ],
  },

  // ─── 6. dui-livelihood-driver-license-revocation-appeal-track ───
  {
    domain: 'dui',
    slug: 'dui-livelihood-driver-license-revocation-appeal-track',
    keyword: '생계형 운전자 음주 면허취소 행정심판',
    questionKeyword: '택배·영업으로 운전을 해서 먹고사는데 음주운전으로 면허가 취소됐어요. 생계가 막막한데 행정심판으로 구제받을 수 있나요?',
    ctaKeyword: '생계형 운전자 면허취소 행정심판 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '생계형 운전자 음주 면허취소 — 5단계 90일 행정심판 트랙 | 로앤가이드',
      description:
        '택배·영업 등 운전으로 생계를 잇는데 음주 면허취소를 받았다면 90일 행정심판 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 택배·영업 일로 매일 차를 몰아 생계를 유지해 왔는데, 한 차례 음주운전이 적발되어 면허 취소 처분을 받았습니다. 운전이 곧 직업이라 면허가 취소되면 일을 할 수 없어 가족 생계가 곧바로 끊기는 절박한 상황이에요. 주변에서 \'생계형 운전자는 행정심판으로 면허 정지로 감경되는 경우가 있다\'는 말을 듣고, 처분 후 90일 안에 청구해야 한다는 것도 알게 됐습니다. 다만 음주 수치가 높거나 사고가 있었던 경우엔 감경이 어렵다는 말도 있어 본인 사건이 구제 대상인지 막막한 상황입니다." 도로교통법 제44조·제93조는 음주운전 면허 취소·정지 처분의 근거가 되고, 행정심판법은 처분이 있음을 안 날부터 90일 이내 청구를 정하는 영역이며, 생계 유지·운전 필요성·반성 정도 등이 감경 사정으로 함께 검토되는 사정입니다. 혐의를 받고 있다면 ① 처분 확인 ② 행정심판 요건 ③ 생계 자료 ④ 형사 병행 ⑤ 양형·반성 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 생계형 운전자 면허취소 행정심판 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분·요건·생계·형사·반성 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 확인</strong> — 면허 취소·정지 처분 통지서·근거 수치 확인.</li>\n<li><strong>② 행정심판 요건</strong> — 처분 안 날부터 90일 이내 청구.</li>\n<li><strong>③ 생계 자료</strong> — 운전이 직업·소득의 핵심임을 입증.</li>\n<li><strong>④ 형사 병행</strong> — 형사 입건·약식·재판 트랙 별도 진행.</li>\n<li><strong>⑤ 양형·반성</strong> — 반성·교육·재범 방지 노력 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운전이 생계의 핵심 수단인 경우 행정심판에서 면허 취소가 정지로 감경 검토되는 사례가 있는 영역입니다. 다만 높은 수치(0.1% 이상)·사고·전력이 있으면 감경이 어렵게 평가되는 사정. 90일 청구 기한을 넘기지 않는 것이 가장 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분 확인·요건·생계·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지서 확인 (즉시)</strong> — 취소·정지 구분, 처분 안 날 기산점 확인.</li>\n<li><strong>2단계 — 생계 자료 수집 (1~2주)</strong> — 운전직 재직증명·사업자등록·소득·차량 운행 기록.</li>\n<li><strong>3단계 — 행정심판 청구 (처분 후 90일 내)</strong> — 중앙행정심판위 또는 시·도 심판위에 청구.</li>\n<li><strong>4단계 — 형사 절차 병행 (1~3개월)</strong> — 입건·약식·재판 + 양형 자료 제출.</li>\n<li><strong>5단계 — 반성·재범 방지 자료</strong> — 음주운전 예방교육 이수·자원봉사·반성문.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">생계형 운전자 면허취소 행정심판 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분·생계·행정 갈래입니다.</strong></p>\n<ul>\n<li><strong>면허 취소·정지 처분 통지서</strong></li>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>운전직 재직증명·사업자등록증·운송 계약서</strong></li>\n<li><strong>소득·가족 부양 자료(급여명세·건강보험 피부양자 등)</strong></li>\n<li><strong>차량 운행 일지·배송 기록(운전 필요성 입증)</strong></li>\n<li><strong>음주운전 예방교육 이수증·반성문·자원봉사 자료</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정심판에서 생계형 감경은 운전이 소득의 핵심 수단임을 객관 자료로 입증하는 것이 관건입니다. 재직증명·운행 기록·부양 가족 자료를 함께 제출하고, 90일 청구 기한을 놓치지 않는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>생계형 감경 요건</strong> — 운전 직업·소득 핵심성 입증.</li>\n<li><strong>수치·사고 영향</strong> — 높은 수치·사고 시 감경 곤란.</li>\n<li><strong>90일 청구 기한</strong> — 처분 안 날 기산.</li>\n<li><strong>형사 병행</strong> — 행정과 별개 트랙.</li>\n<li><strong>반성·재범 방지</strong> — 교육 이수·봉사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙행정심판위원회 안내 110</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면허 벌점·취소 처분 다툼 영역',
        summary:
          '대법원 2024도8903(대법원, 2024.10.31 선고) 도로교통법 위반 영역에서 법원은 운전면허 벌점·처분의 성격과 무죄 확정 등 시행규칙이 정한 사유가 있으면 해당 위반으로 인한 벌점이 삭제될 수 있다는 법리를 다뤘습니다. 생계형 운전자의 면허 취소 처분 사안에서도 처분의 근거와 감경 사정을 행정심판에서 함께 검토해볼 수 있습니다.',
        takeaway: '생계형 면허취소는 운전 필요성·반성 자료가 행정심판 핵심 영역 — 90일 내 청구·자료 확보 권장.',
      },
    ],
    faq: [
      {
        question: '생계형이면 면허가 꼭 살아나나요?',
        answer:
          '<strong>운전 필요성·수치·사고 유무에 따라 감경이 검토되는 영역입니다.</strong> 단정은 곤란하며 자료가 관건.',
      },
      {
        question: '행정심판은 언제까지 청구해야 하나요?',
        answer:
          '<strong>처분이 있음을 안 날부터 90일 이내 청구하는 영역입니다.</strong> 기한 도과 시 구제가 어렵습니다.',
      },
      {
        question: '수치가 높으면 행정심판도 어렵나요?',
        answer:
          '<strong>높은 수치·사고가 있으면 감경이 어렵게 평가되는 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '형사 처분과 행정심판은 따로 진행되나요?',
        answer:
          '<strong>형사와 행정 처분은 별개 트랙으로 동시에 진행되는 영역입니다.</strong> 각각 대응이 필요합니다.',
      },
      {
        question: '어떤 자료가 감경에 도움이 되나요?',
        answer:
          '<strong>재직증명·운행 기록·부양 가족 자료가 핵심 자료 영역입니다.</strong> 교육 이수·반성문도 함께 준비 권장.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '행정심판 준비서류', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '90일 감경 트랙', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 행정심판', href: '/guide/dui/dui-license-revocation-appeal' },
    ],
  },

  // ─── 7. dui-checkpoint-avoidance-uturn-suspicion-track ───
  {
    domain: 'dui',
    slug: 'dui-checkpoint-avoidance-uturn-suspicion-track',
    keyword: '음주 단속 회피 유턴 적발',
    questionKeyword: '음주 단속 지점을 보고 유턴해 피하려다 추적당해 적발됐어요. 단속을 피하려 한 게 더 불리한가요? 어떻게 대응하나요?',
    ctaKeyword: '음주 단속 회피 유턴 적발 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 단속 회피 유턴 적발 — 5단계 회피 정황·수치 트랙 | 로앤가이드',
      description:
        '음주 단속 지점 앞에서 유턴해 피하려다 적발됐다면 회피 정황·수치·행정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 밤에 운전하던 중 전방에 음주 단속 지점이 보이자 순간 당황해 단속 직전 골목으로 유턴해 다른 길로 빠지려 했습니다. 그런데 이를 본 경찰이 즉시 추적해 본인을 정차시켰고, 음주측정 결과 처벌 기준을 넘긴 수치가 나와 음주운전으로 입건됐어요. 본인은 단속을 피하려는 의도가 있었던 건 맞지만 측정에는 응했고, 회피하려 한 정황이 처분에 더 불리하게 작용하는지가 걱정입니다. 차량 블랙박스와 단속 지점 인근 CCTV에 유턴·추적 과정이 남아 있을 수 있는 상황이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 제148조의2는 혈중알코올농도 구간에 따라 처벌을 정하는 영역이며, 단속 회피 시도 자체는 측정에 응한 이상 측정거부와는 다른 평가가 검토되는 사정입니다. 혐의를 받고 있다면 ① 수치 평가 ② 회피 정황 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 단속 회피 유턴 적발 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·회피·형사·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수치 평가</strong> — 측정 결과와 처벌 기준(0.03%·0.08%·0.2%) 비교.</li>\n<li><strong>② 회피 정황</strong> — 유턴·도주가 측정거부와 구분되는지 평가.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 수치에 따른 면허 정지·취소 처분.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·회피 정황 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단속을 피하려 유턴한 정황은 양형에서 불리하게 고려될 수 있는 사정이지만, 결국 측정에 응했다면 음주측정거부와는 다른 평가가 검토되는 영역입니다. 다만 정차 요구를 무시하고 도주를 시도한 정도가 크면 별도 가중 사정으로 평가될 수 있어 블랙박스·CCTV로 경위를 정리하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·정황·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 회피 정황·수치 검토.</li>\n<li><strong>2단계 — 블랙박스·CCTV 확보 (1주 내)</strong> — 유턴·추적·정차 과정 영상 보존.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 측정 응함·회피 경위 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·자원봉사·교육 이수 자료.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 단속 회피 유턴 적발 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 수치·정황·행정 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>차량 블랙박스 영상(유턴·추적·정차 과정)</strong></li>\n<li><strong>단속 지점 인근 CCTV 영상</strong></li>\n<li><strong>정차 요구 응답·측정 응함 경위 기록</strong></li>\n<li><strong>면허 처분 통지서</strong></li>\n<li><strong>본인 반성문·자원봉사·교육 이수증</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유턴·회피는 의심을 키우는 정황이지만 측정에 응했다는 사실이 측정거부와 구분되는 핵심입니다. 블랙박스로 정차 요구 직후 협조한 경위를 정리하면 도주·거부와 달리 평가되도록 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>회피 vs 거부 구분</strong> — 유턴 후 측정 응함 여부.</li>\n<li><strong>도주 정도 평가</strong> — 정차 요구 무시 수준.</li>\n<li><strong>수치 처벌 구간</strong> — 0.03%·0.08%·0.2% 분기.</li>\n<li><strong>면허 정지·취소</strong> — 90일 내 행정심판.</li>\n<li><strong>양형</strong> — 초범·반성·회피 정황.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정불응 vs 측정 응함 구분 평가 영역',
        summary:
          '대법원 2022도3929(대법원, 2022.07.28 선고) 음주측정거부 영역에서 법원은 음주측정불응죄의 성립 요건과 적용 법조를 신중히 따져 보아야 한다는 취지로 판단했습니다. 단속 지점을 유턴으로 피하려다 추적 후 측정에 응한 사안에서도 회피 정황이 측정거부와 구분되는지, 도주 정도가 어떠했는지를 영상·경위와 함께 종합해 평가하는 기준을 검토해볼 수 있습니다.',
        takeaway: '단속 회피 후 측정 응함은 측정거부와 구분되는 평가가 검토되는 영역 — 블랙박스 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단속을 피하려 유턴한 게 더 불리한가요?',
        answer:
          '<strong>양형에서 불리하게 고려될 수 있으나 측정에 응했다면 측정거부와 구분되는 영역입니다.</strong> 경위 정리가 핵심.',
      },
      {
        question: '유턴만 했는데 도주죄가 되나요?',
        answer:
          '<strong>정차 요구 무시·도주 정도에 따라 평가가 달라지는 영역입니다.</strong> 블랙박스 경위가 자료.',
      },
      {
        question: '측정에 응했으면 측정거부는 아닌가요?',
        answer:
          '<strong>최종 측정에 응했다면 측정거부와는 다른 평가가 검토되는 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '블랙박스가 어떻게 도움이 되나요?',
        answer:
          '<strong>정차 직후 협조한 경위를 보여주는 자료 영역입니다.</strong> 영상 보존을 권장합니다.',
      },
      {
        question: '면허 처분도 같이 받나요?',
        answer:
          '<strong>형사와 별개로 면허 정지·취소 처분이 병행되는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '측정거부 결과', href: '/guide/dui/breathalyzer-refusal-consequences' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '수치별 처벌 기준', href: '/guide/dui/dui-bac-penalty-by-level' },
    ],
  },

  // ─── 8. dui-company-vehicle-accident-discipline-track ───
  {
    domain: 'dui',
    slug: 'dui-company-vehicle-accident-discipline-track',
    keyword: '회사 차량 음주운전 사고',
    questionKeyword: '회사 업무용 차량으로 음주운전을 하다 사고를 냈어요. 형사 처벌에 더해 회사 징계와 구상까지 받게 되나요? 어떻게 대응하나요?',
    ctaKeyword: '회사 차량 음주운전 사고 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '회사 차량 음주운전 사고 — 5단계 형사·징계·구상 트랙 | 로앤가이드',
      description:
        '회사 업무용 차량으로 음주운전 사고를 냈다면 형사·면허·회사 징계·구상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 회사 업무용 차량을 배정받아 외근을 다니는데, 점심 반주를 하고 오후 외근을 나갔다가 음주 상태에서 접촉 사고를 냈습니다. 상대 차량 운전자가 가벼운 부상을 입었고, 음주측정 결과 처벌 기준을 넘긴 수치가 나와 음주운전으로 입건됐어요. 문제는 형사 처벌만이 아니라 회사가 \'업무용 차량 음주 사고\'를 이유로 징계·해고를 검토하고, 보험 처리 후 회사·보험사가 본인에게 구상을 청구할 수 있다는 점입니다. 형사·면허·회사 징계·구상까지 여러 절차가 한꺼번에 걱정되는 상황이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 음주 사고로 사람을 다치게 한 경우 형사 처벌과 함께 면허 취소 행정 처분이 별개로 진행되는 영역이며, 회사 징계·구상은 또 다른 트랙으로 검토되는 사정입니다. 혐의를 받고 있다면 ① 형사 평가 ② 피해 회복 ③ 면허·행정 ④ 회사 징계 ⑤ 구상 대응 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회사 차량 음주운전 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·피해·행정·징계·구상 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 형사 평가</strong> — 음주 + 사고(상해) 결합 = 가중 평가 사정.</li>\n<li><strong>② 피해 회복</strong> — 상대 운전자 치료·합의·처벌불원.</li>\n<li><strong>③ 면허·행정</strong> — 음주 사고 시 면허 취소 처분 검토.</li>\n<li><strong>④ 회사 징계</strong> — 취업규칙상 징계·해고 사유 해당 여부.</li>\n<li><strong>⑤ 구상 대응</strong> — 보험사·회사 구상 청구 범위 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사 차량 음주 사고는 형사·행정·민사·인사 절차가 동시에 진행되는 사정입니다. 형사는 피해자 합의가 핵심이고, 음주운전은 자동차보험 면책·구상 대상이 될 수 있어 본인 부담이 커질 수 있는 영역. 회사 징계는 취업규칙·비위 정도에 따라 다투어지는 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·합의·행정·인사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 형사·면허·회사 절차 병행 검토.</li>\n<li><strong>2단계 — 피해자 합의 (1개월 내)</strong> — 상대 치료비·합의·처벌불원 협의.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 합의서·반성 자료 제출.</li>\n<li><strong>4단계 — 회사 징계 대응 (통지 시)</strong> — 소명·징계 절차 적정성 확인.</li>\n<li><strong>5단계 — 행정심판·구상 검토 (처분 후 90일 내)</strong> — 면허 처분 불복 + 구상 범위 협의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">회사 차량 음주운전 사고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·피해·인사 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지·사고 기록</strong></li>\n<li><strong>상대 운전자 진단서·치료비·합의서·처벌불원서</strong></li>\n<li><strong>면허 취소 처분 통지서</strong></li>\n<li><strong>회사 차량 배정·운행 자료·취업규칙</strong></li>\n<li><strong>보험사 구상·면책 통지 자료</strong></li>\n<li><strong>본인 반성문·자원봉사·교육 이수증</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 음주운전은 자동차보험에서 운전자 본인 부담금·구상 대상이 될 수 있어 보험 처리 조건과 구상 범위를 먼저 확인하는 것이 중요합니다. 회사 징계는 취업규칙상 사유·절차 적정성을 함께 검토하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>음주 + 사고 가중</strong> — 상해 결과 결합 평가.</li>\n<li><strong>피해자 합의</strong> — 형사 양형 핵심.</li>\n<li><strong>회사 징계 적정성</strong> — 취업규칙·비위 정도.</li>\n<li><strong>보험 면책·구상</strong> — 본인 부담 범위.</li>\n<li><strong>면허 취소</strong> — 90일 내 행정심판.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 행정심판 안내 1588-2121</strong></li>\n<li><strong>운전면허시험관리단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주·사고 결합 운전 행위 평가 영역',
        summary:
          '대법원 2022도8806(대법원, 2022.10.27 선고) 음주운전·무면허운전 영역에서 법원은 운전 행위의 죄수와 가벌성 범위를 운전한 날·태양·범의를 기준으로 신중히 판단해야 한다는 법리를 다뤘습니다. 회사 차량으로 음주 상태에서 사고를 낸 사안에서도 음주·사고 결합과 행위 태양을 종합해 평가하고, 형사·행정·인사 절차를 별개로 검토해볼 수 있습니다.',
        takeaway: '회사 차량 음주 사고는 형사·면허·징계·구상이 동시 진행되는 영역 — 합의·변호인 상담·행정심판 준비 권장.',
      },
    ],
    faq: [
      {
        question: '음주 사고면 형사 처벌이 더 무거운가요?',
        answer:
          '<strong>음주 + 상해 결합은 가중 평가 사정인 영역입니다.</strong> 피해자 합의가 양형 핵심.',
      },
      {
        question: '회사가 해고까지 할 수 있나요?',
        answer:
          '<strong>취업규칙상 사유·절차 적정성에 따라 다투어지는 영역입니다.</strong> 징계 소명 자문 권장.',
      },
      {
        question: '음주운전은 보험 처리가 안 되나요?',
        answer:
          '<strong>음주운전은 본인 부담금·구상 대상이 될 수 있는 영역입니다.</strong> 보험 조건 확인이 핵심.',
      },
      {
        question: '회사가 구상을 청구하면 다 물어줘야 하나요?',
        answer:
          '<strong>구상 범위는 책임 비율·과실에 따라 다투어지는 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '면허 취소도 같이 받나요?',
        answer:
          '<strong>음주 사고 시 면허 취소 행정 처분이 병행되는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 사고 대응', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '민사 배상·보험', href: '/guide/dui/dui-civil-damage-insurance-refused' },
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '단순 vs 위험운전', href: '/guide/dui/dui-simple-vs-dangerous-driving-injury-distinction' },
    ],
  },
];
