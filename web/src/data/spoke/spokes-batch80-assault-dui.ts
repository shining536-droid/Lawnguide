import { SpokePage } from '../spoke-pages';

// batch80 assault+dui — 7개 (2026-05-28)
//
// 고유 존재 이유:
// assault 4:
// 1. 층간소음 항의하러 윗집 찾아갔다가 현관에서 폭행 피해 — '윗집 방문 + 현관 앞 가격 + 공동현관 CCTV·관리실' 트랙 (victim)
// 2. 주차 자리 양보 거부 시비 중 차문으로 밀쳐 부상 — '주차장 자리 다툼 + 차문 가격 + 주차장 CCTV·블랙박스' 트랙 (victim)
// 3. 술자리 멱살잡이 쌍방 폭행 입건 — '회식·술자리 멱살·옷깃 잡음 + 쌍방 신고 + 반의사불벌·합의' 트랙 (accused/쌍방)
// 4. 밀친 적 없는데 폭행으로 사실과 다르게 신고 — '신체 접촉 부인 + 사실과 다른 신고 + 합리적 의심·증명력' 트랙 (accused/무고)
//
// dui 3 (모두 운전자 본인 대응, accused):
// 5. 면허취소 수치 음주 행정심판 구제 — '면허취소 처분 + 90일 행정심판 + 일상 필요성 소명' 트랙
// 6. 음주측정 거부 입건 대응 — '호흡측정 불응 + 측정거부죄 성립 요건 + 상당한 이유' 트랙
// 7. 음주운전 자진신고·자수 후 형사·행정 동시 진행 — '운전 인정 + 자수 감경 + 형사·행정 병행' 트랙

export const spokesBatch80AssaultDui: SpokePage[] = [
  // ─── 1. assault-upstairs-neighbor-visit-doorway-noise-victim-track ───
  // 이 페이지는 층간소음으로 윗집을 찾아갔다가 현관 앞에서 폭행당한 피해자의 증거·고소·합의 준비를 돕는 페이지다.
  {
    domain: 'assault',
    slug: 'assault-upstairs-neighbor-visit-doorway-noise-victim-track',
    keyword: '층간소음 윗집 방문 현관 폭행 피해',
    questionKeyword: '층간소음 때문에 윗집에 항의하러 올라갔는데 현관 앞에서 윗집 사람이 저를 밀치고 때려 다쳤어요. 공동현관 CCTV가 있는데 어떻게 대응하나요?',
    ctaKeyword: '층간소음 윗집 방문 현관 폭행 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '층간소음 윗집 방문 폭행 피해 — 5단계 현관 상해 트랙 | 로앤가이드',
      description:
        '층간소음 항의로 윗집에 갔다가 현관 앞에서 폭행을 당해 다쳤다면 증거·고소·합의·배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 윗집 층간소음이 늦은 밤까지 이어져 직접 올라가 정중히 자제를 부탁했습니다. 그런데 윗집 거주자가 현관문을 열자마자 \'왜 올라왔냐\'며 화를 내고 본인의 어깨를 밀쳐 넘어뜨린 뒤 얼굴을 손으로 가격해, 본인은 손목 염좌와 얼굴 타박상으로 전치 2주 진단을 받았어요. 복도와 엘리베이터 쪽에는 공동현관 CCTV가 있고, 관리사무소에는 본인이 올라간 시간대 기록이 남아 있는 상황입니다. 윗집은 \'본인이 먼저 문을 두드리며 위협했다\'고 발뺌하고 있어요." 형법 제257조는 사람의 신체를 상해한 행위를, 형법 제260조는 폭행 행위를 다루는 영역이며, 정당한 소음 항의 과정에서 일방적으로 가격당해 전치 2주 상해가 발생한 정황이 공동현관 CCTV·관리 기록으로 뒷받침되면 폭행·상해로 평가될 소지가 있는 사정입니다. 정당한 항의와 그에 대한 신체 가격은 별개로 논의되는 영역이라는 점도 정리해둘 필요가 있습니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 층간소음 윗집 방문 폭행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 2주 + 현관 앞 가격 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 공동현관·복도 CCTV·관리실 출입 기록·진단서.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 소음 항의를 하러 올라간 행위와 현관 앞에서 신체를 가격당한 행위는 별개로 평가되는 영역입니다. 윗집이 \'먼저 위협했다\'고 다투더라도, 공동현관 CCTV가 현관 앞 가격 장면이나 본인의 태도를 담으면 선후 관계를 가르는 핵심 자료가 되고, 관리실 출입 기록은 시간대 특정에 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정형외과 진단서(전치 2주)·치료 기록·부상 사진.</li>\n<li><strong>2단계 — CCTV·관리 기록 보존 요청 (1주 내)</strong> — 관리사무소에 공동현관·복도 CCTV·출입 기록 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">층간소음 윗집 방문 폭행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>정형외과 진단서(전치 2주)·치료 기록·약제비 영수증</strong></li>\n<li><strong>공동현관·복도·엘리베이터 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>관리사무소 출입·민원 기록(시간대 특정)</strong></li>\n<li><strong>손목·얼굴 부상 사진(사건 직후)</strong></li>\n<li><strong>층간소음 항의 경위·메모·문자 기록</strong></li>\n<li><strong>목격 이웃·동반자 진술서·연락처</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공동현관 CCTV는 관리 주체가 보관하고 덮어쓰기 주기가 짧을 수 있어 즉시 보존 요청이 필수입니다. 소음 항의가 정당했음을 보여주는 사전 민원·문자 기록을 함께 정리하면, 윗집의 \'위협당했다\'는 주장과 다투는 데 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>항의 vs 가격 구분</strong> — 정당한 소음 항의와 신체 가격은 별개 평가.</li>\n<li><strong>선행 위협 다툼</strong> — \'먼저 위협했다\' 주장 vs CCTV 현관 앞 정황.</li>\n<li><strong>상해 인과관계</strong> — 손목·얼굴 부상 발생 원인.</li>\n<li><strong>합의금 산정</strong> — 전치 2주 + 안면 부상 경과.</li>\n<li><strong>민사 배상</strong> — 치료·위자료·소득 손실 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 / 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행으로 인한 상해 결과 평가 영역',
        summary:
          '대법원 2018도3443(대법원, 2018.07.24 선고) 폭행·상해 영역에서 법원은 폭행을 범하여 사람을 상해에 이르게 한 경우의 처벌 규정 해석에 관하여, 형벌법규의 문언과 입법취지를 함께 고려해 신중히 해석해야 한다는 취지로 판시했습니다. 층간소음 항의 과정에서 현관 앞에서 일방적으로 밀쳐지고 가격당해 전치 2주 상해를 입은 사안에서도 진단서·CCTV·행위 태양을 함께 종합해 폭행·상해 평가를 검토해볼 수 있습니다.',
        takeaway: '현관 앞 가격 + 전치 2주 + CCTV 결합 시 폭행·상해 평가 영역 — 영상 보존 후 고소·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 윗집에 올라간 게 불리하게 작용하나요?',
        answer:
          '<strong>정당한 소음 항의와 신체 가격은 별개로 평가되는 영역입니다.</strong> 항의가 위협으로 이어졌는지가 관건입니다.',
      },
      {
        question: '공동현관 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>관리사무소에 보존 요청을 하거나 수사기관에 확보를 요청하는 영역입니다.</strong> 덮어쓰기 전 신속 요청이 중요합니다.',
      },
      {
        question: '윗집이 \'먼저 위협했다\'고 하면 어떻게 다투나요?',
        answer:
          '<strong>CCTV·관리 기록·사전 민원으로 선후 관계를 입증하는 영역입니다.</strong> 객관 자료 정리가 핵심입니다.',
      },
      {
        question: '전치 2주도 형사 고소가 되나요?',
        answer:
          '<strong>상해 진단서 + 행위 태양 결합으로 형사 고소 가능 영역입니다.</strong> CCTV가 있으면 입증이 용이합니다.',
      },
      {
        question: '치료 기간 못 번 소득도 청구할 수 있나요?',
        answer:
          '<strong>치료 기간 일실수입은 민사 청구 검토 영역입니다.</strong> 소득 자료 정리 후 변호인 자문 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
    ],
  },

  // ─── 2. assault-parking-spot-yield-refuse-car-door-victim-track ───
  // 이 페이지는 주차 자리 양보 거부 시비 중 상대가 차문으로 밀쳐 다친 피해자의 증거·고소·배상 준비를 돕는 페이지다.
  {
    domain: 'assault',
    slug: 'assault-parking-spot-yield-refuse-car-door-victim-track',
    keyword: '주차 자리 시비 차문 폭행 피해',
    questionKeyword: '주차 자리를 두고 시비가 붙었는데 상대가 차문을 세게 밀어 저를 가격해 다쳤어요. 주차장 CCTV와 블랙박스가 있는데 어떻게 대응하나요?',
    ctaKeyword: '주차 자리 시비 차문 폭행 피해 정리',
    type: '준비형',
    perspective: 'victim',
    meta: {
      title: '주차 자리 시비 차문 폭행 피해 — 5단계 도구성 상해 트랙 | 로앤가이드',
      description:
        '주차 자리 다툼 중 상대가 차문으로 밀쳐 다쳤다면 증거·고소·합의·배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 아파트 주차장에서 빈자리를 두고 다른 입주민과 \'누가 먼저 봤느냐\'를 두고 시비가 붙었습니다. 본인이 차에서 내려 따지자 상대가 운전석 차문을 갑자기 세게 밀어 본인의 몸과 손을 가격했고, 본인은 손가락이 문틈에 끼이고 옆구리에 타박상이 생겨 전치 3주 진단을 받았어요. 주차장 천장에는 구역별 CCTV가 있고, 본인과 상대 차량 블랙박스에 시비·가격 장면이 담겼을 수 있는 상황입니다. 상대는 \'문을 닫으려다 실수로 부딪혔을 뿐\'이라고 발뺌하고 있어요." 형법 제257조는 사람의 신체를 상해한 행위를, 형법 제260조는 폭행 행위를 다루는 영역이며, 차문을 이용해 신체를 가격해 전치 3주 상해가 발생한 정황이 주차장 CCTV·블랙박스로 뒷받침되면 폭행·상해로 평가될 소지가 있는 사정입니다. 차문 같은 물건을 이용한 가격은 행위 태양·위험성이 함께 논의될 수 있는 영역이라는 점도 정리해둘 필요가 있습니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차 자리 시비 차문 폭행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 3주 + 차문 가격 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 주차장 구역 CCTV·양측 차량 블랙박스·진단서.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 차문을 세게 밀어 신체를 가격한 정황은 손으로 한 폭행과 위험성·행위 태양에서 함께 평가될 수 있는 영역입니다. 상대가 \'실수로 부딪혔다\'고 다투더라도, 블랙박스가 차문을 미는 동작과 본인의 위치를 담으면 고의·실수를 가르는 핵심 자료가 되고, 주차장 CCTV는 시비 선후 관계 입증에 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·합의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 진단서(전치 3주)·X-ray·치료 기록.</li>\n<li><strong>2단계 — CCTV·블랙박스 보존 요청 (1주 내)</strong> — 관리사무소에 주차장 CCTV 보존 요청 + 양측 차량 블랙박스 백업.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차 자리 시비 차문 폭행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서(전치 3주)·X-ray·치료 기록·약제비 영수증</strong></li>\n<li><strong>주차장 구역 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>본인·상대 차량 블랙박스 영상(시비·가격 장면)</strong></li>\n<li><strong>손가락·옆구리 부상 사진(사건 직후)</strong></li>\n<li><strong>차량 문 손상·접촉 흔적 사진</strong></li>\n<li><strong>당시 정황 메모·목격 입주민 연락처</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차문 가격 사안은 \'고의 가격\'과 \'실수 접촉\'을 가르는 동작이 핵심이므로, 블랙박스에 차문을 미는 힘·각도·본인 위치가 담겼는지 확인하는 것이 중요합니다. 주차장 CCTV는 사각지대가 있을 수 있어 양측 블랙박스와 함께 확보하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고의 vs 실수 다툼</strong> — \'문을 닫으려다 부딪혔다\' 주장 vs 블랙박스 동작.</li>\n<li><strong>도구성 평가</strong> — 차문을 이용한 가격의 위험성.</li>\n<li><strong>상해 인과관계</strong> — 손가락·옆구리 부상 발생 원인.</li>\n<li><strong>합의금 산정</strong> — 전치 3주 + 도구 사용 정도.</li>\n<li><strong>민사 배상</strong> — 치료·위자료·소득 손실 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 / 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 신중 평가 영역',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 상해 영역에서 법원은 상해진단서가 피해자의 주관적 통증 호소 등에 주로 의존해 발급된 경우 그 증명력 판단에 신중해야 하나, 진단 시점이 상해 발생 시점과 근접하고 발급 경위에 신빙성이 있으면 유력한 증거가 될 수 있다고 판시했습니다. 주차 자리 시비 중 차문으로 가격당해 전치 3주 상해를 입은 사안에서도 진단서와 CCTV·블랙박스·행위 태양을 함께 종합해 폭행·상해 평가를 검토해볼 수 있습니다.',
        takeaway: '차문 가격 + 전치 3주 + 근접 진단서 결합 시 폭행·상해 평가 영역 — 블랙박스 확보 후 고소·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 \'실수로 부딪혔다\'고 하면 어떻게 되나요?',
        answer:
          '<strong>블랙박스가 차문을 미는 동작을 담으면 고의·실수를 가르는 핵심 자료 영역입니다.</strong> 영상 선제 확보가 관건.',
      },
      {
        question: '차문으로 맞은 것도 단순 폭행보다 무겁게 보나요?',
        answer:
          '<strong>물건을 이용한 가격은 행위 태양·위험성이 함께 평가되는 영역입니다.</strong> 도구 사용 정황 입증이 중요합니다.',
      },
      {
        question: '주차장 CCTV에 사각지대가 있으면 입증이 안 되나요?',
        answer:
          '<strong>CCTV·양측 블랙박스·목격 진술을 결합하는 영역입니다.</strong> 블랙박스가 결정적 자료가 될 수 있습니다.',
      },
      {
        question: '전치 3주도 형사 고소가 가능한가요?',
        answer:
          '<strong>상해 진단서 + 행위 태양 결합으로 형사 고소 가능 영역입니다.</strong> 영상이 있으면 입증이 용이합니다.',
      },
      {
        question: '차량 수리비도 함께 청구할 수 있나요?',
        answer:
          '<strong>접촉으로 생긴 차량 손상은 민사 청구에 포함 검토 영역입니다.</strong> 손상 사진·견적 정리 권장.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 3. assault-drinking-table-collar-grab-mutual-accused-track ───
  // 이 페이지는 술자리에서 멱살·옷깃을 잡는 실랑이로 쌍방 폭행 입건된 사람의 쌍방성·합의 준비를 돕는 페이지다.
  {
    domain: 'assault',
    slug: 'assault-drinking-table-collar-grab-mutual-accused-track',
    keyword: '술자리 멱살잡이 쌍방 폭행 혐의',
    questionKeyword: '술자리에서 말다툼 끝에 서로 멱살을 잡고 옷을 당기다 쌍방 폭행으로 입건됐어요. 상대도 먼저 시비를 걸었는데 어떻게 대응하나요?',
    ctaKeyword: '술자리 멱살잡이 쌍방 폭행 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '술자리 멱살잡이 쌍방 폭행 혐의 — 5단계 쌍방·합의 트랙 | 로앤가이드',
      description:
        '술자리에서 멱살을 잡는 실랑이로 쌍방 폭행 혐의를 받고 있다면 쌍방성·합의·양형 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 모임 술자리에서 일행과 말다툼이 격해지자 상대가 먼저 본인의 멱살을 잡고 흔들었고, 본인도 이를 뿌리치며 상대의 옷깃을 맞잡고 실랑이를 벌였습니다. 주변에서 말려 큰 부상 없이 끝났는데, 며칠 뒤 상대가 \'폭행당했다\'며 신고해 본인도 쌍방 폭행으로 입건되었어요. 본인은 상대가 먼저 멱살을 잡고 시비를 걸었다는 입장이고, 가게 CCTV와 동석자들의 진술·휴대폰 영상이 남아 있을 수 있는 상황입니다." 형법 제260조 폭행은 신체에 대한 유형력 행사로 논의되는 영역이지만, 서로 멱살·옷깃을 잡은 실랑이가 쌍방 폭행인지, 누가 먼저 유형력을 행사했는지가 핵심 쟁점이며, 쌍방성·경미성·합의가 처분 단계에서 중요한 영역입니다. 폭행죄는 피해자의 명시한 의사에 반하여 처벌할 수 없는 반의사불벌의 영역이라는 점도 정리해둘 필요가 있습니다. 혐의를 받고 있다면 ① 폭행 평가 ② 증거 보존 ③ 합의 ④ 진술 전략 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술자리 멱살잡이 쌍방 폭행 혐의 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·합의·진술·양형 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭행 평가</strong> — 서로 멱살·옷깃 잡음 = 쌍방·경미 폭행 다툼.</li>\n<li><strong>② 증거 보존</strong> — 가게 CCTV·동석자 진술·휴대폰 영상.</li>\n<li><strong>③ 합의</strong> — 반의사불벌 특성상 처벌불원 의사 조기 협의.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 쌍방성·선후 일관 진술.</li>\n<li><strong>⑤ 양형</strong> — 초범·합의·경미성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 서로 멱살·옷깃을 잡은 실랑이는 쌍방 폭행으로 평가될 여지가 있는 영역입니다. 상대가 먼저 멱살을 잡았다는 정황이 CCTV·동석자 진술로 뒷받침되면 쌍방성·선후 관계 평가에 영향을 주는 사정이고, 폭행죄는 반의사불벌이라 처벌불원 합의를 조기에 진행하는 것이 처분에 유리한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·합의·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 쌍방성·반의사불벌 쟁점 검토.</li>\n<li><strong>2단계 — CCTV·영상·진술 확보 (1주 내)</strong> — 가게 CCTV 보존 요청 + 동석자 진술·휴대폰 영상·연락처 확보.</li>\n<li><strong>3단계 — 합의 협의 (1~2주)</strong> — 처벌불원 의사 조기 협의.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 쌍방성·선후 관계 일관 진술.</li>\n<li><strong>5단계 — 양형 자료 + 처분</strong> — 합의서·반성문·초범 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술자리 멱살잡이 쌍방 폭행 혐의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 쌍방성·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>가게 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>동석자 진술서·휴대폰 영상·연락처</strong></li>\n<li><strong>상대의 선행 행위(먼저 멱살 잡음) 정황 자료</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·초범 자료</strong></li>\n<li><strong>사건 당시 상황 메모(시간·장소·경위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 술자리 쌍방 사안은 동석자 진술이 엇갈리기 쉬워 CCTV·휴대폰 영상 등 객관 자료 확보가 쌍방성·선후 입증에 중요합니다. 가게 CCTV는 보존 기간이 짧을 수 있어 신속히 보존을 요청하고, 반의사불벌 특성을 고려해 합의를 조기에 검토하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>쌍방 폭행 다툼</strong> — 상대가 먼저 멱살 잡고 시비 걸었는지.</li>\n<li><strong>선후 관계</strong> — 누가 먼저 유형력을 행사했는지.</li>\n<li><strong>경미성 평가</strong> — 멱살·옷깃 잡음 정도와 부상 유무.</li>\n<li><strong>반의사불벌·합의</strong> — 처벌불원 의사.</li>\n<li><strong>양형</strong> — 초범·반성 종합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행죄 반의사불벌·행위 평가 영역',
        summary:
          '대법원 2017도10956(대법원, 2018.04.24 선고) 폭행 영역에서 법원은 폭행 범행을 반복하는 습벽 유무는 동종 전과·횟수·기간·동기·수단 등을 종합해 판단해야 하고, 단순폭행은 피해자의 명시한 의사에 반하여 공소를 제기할 수 없다는 점을 전제로 법리를 정리했습니다. 술자리에서 서로 멱살을 잡고 실랑이한 쌍방 사안에서도 CCTV·진술로 선후 관계를 가리고, 반의사불벌 특성을 고려한 처벌불원 합의를 검토해볼 수 있습니다.',
        takeaway: '술자리 쌍방 멱살잡이는 선후·쌍방성·처벌불원 합의가 처분 핵심 영역 — CCTV 확보·합의 조기 진행 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 먼저 멱살을 잡았으면 쌍방이 되나요?',
        answer:
          '<strong>상대 선행 행위가 입증되면 쌍방 폭행으로 평가될 여지가 있는 영역입니다.</strong> CCTV·동석자 진술이 결정 자료.',
      },
      {
        question: '멱살·옷깃을 잡은 것만으로도 폭행인가요?',
        answer:
          '<strong>옷깃을 잡고 흔드는 행위도 유형력으로 논의될 수 있는 영역입니다.</strong> 경미성·쌍방성과 함께 평가됩니다.',
      },
      {
        question: '폭행은 합의하면 처벌을 안 받을 수도 있나요?',
        answer:
          '<strong>단순폭행은 피해자 명시 의사에 반해 처벌할 수 없는 반의사불벌 영역입니다.</strong> 처벌불원 합의가 중요합니다.',
      },
      {
        question: '동석자 진술이 엇갈리면 어떻게 하나요?',
        answer:
          '<strong>CCTV·휴대폰 영상 등 객관 자료로 보완하는 영역입니다.</strong> 조기 확보를 권장합니다.',
      },
      {
        question: '초범이면 처분이 가벼워지나요?',
        answer:
          '<strong>합의 + 초범 + 경미성 조합 시 기소유예 검토 가능 영역입니다.</strong> 양형 자료 준비 권장.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '쌍방 폭행 구별', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '정당방위 기준', href: '/guide/assault/self-defense-criteria' },
    ],
  },

  // ─── 4. assault-no-shove-false-report-defense-track ───
  // 이 페이지는 신체 접촉 자체가 없었는데 폭행으로 사실과 다르게 신고된 사람의 증명력·방어 준비를 돕는 페이지다.
  {
    domain: 'assault',
    slug: 'assault-no-shove-false-report-defense-track',
    keyword: '밀친 적 없는 폭행 무고 방어',
    questionKeyword: '상대를 밀치거나 때린 적이 없는데 폭행을 당했다며 사실과 다르게 신고됐어요. 신체 접촉 자체가 없었는데 어떻게 다투나요?',
    ctaKeyword: '밀친 적 없는 폭행 무고 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '밀친 적 없는 폭행 무고 방어 — 5단계 접촉 부인·증명력 트랙 | 로앤가이드',
      description:
        '밀치거나 때린 적 없는데 폭행으로 사실과 다르게 신고돼 걱정된다면 접촉 부인·증거·진술 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 상대와 말다툼은 있었지만 밀치거나 때린 사실이 전혀 없는데, 며칠 뒤 상대가 \'폭행을 당했다\'며 경찰에 신고해 폭행 혐의로 조사를 받게 됐습니다. 본인은 신체 접촉 자체가 없었다는 입장이고, 당시 현장 CCTV와 다툼 전후 주고받은 메시지·통화 기록, 함께 있던 사람들의 진술이 남아 있을 수 있는 상황입니다. 상대가 제출한 진단서가 정말 그날 다툼으로 생긴 것인지, 본인의 행위와 인과관계가 있는지도 의문이에요." 형법 제260조 폭행은 신체에 대한 유형력 행사로 논의되는 영역이지만, 애초에 신체 접촉이 있었는지, 신고 내용이 사실에 부합하는지가 핵심 쟁점이며, 형사재판에서 유죄 인정은 합리적 의심이 없을 정도의 증명을 요하므로 CCTV·메시지·진단서 증명력이 함께 평가되는 영역입니다. 사실과 다르게 신고되었다면 ① 행위 평가 ② 증거 보존 ③ 진술 전략 ④ 증명력 다툼 ⑤ 대응 방향 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 밀친 적 없는 폭행 무고 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위·증거·진술·증명력·대응 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 평가</strong> — 신체 접촉 자체가 있었는지 = 폭행 성립 여부 다툼.</li>\n<li><strong>② 증거 보존</strong> — 현장 CCTV·메시지·통화 기록·목격자.</li>\n<li><strong>③ 진술 전략</strong> — 변호인 자문 + 접촉 부인·경위 일관 진술.</li>\n<li><strong>④ 증명력 다툼</strong> — 상대 진단서·진술의 신빙성·인과관계 검토.</li>\n<li><strong>⑤ 대응 방향</strong> — 사실과 다른 부분에 대한 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형사재판에서 유죄 인정은 합리적 의심이 없을 정도의 증명을 요하는 영역입니다. 신체 접촉이 없었다는 본인의 주장과 상대 진술·진단서가 엇갈리면, CCTV·메시지로 접촉 여부와 신고 내용의 사실성을 다투는 것이 방어의 핵심이며, 감정 대응보다 객관 자료를 시간 순으로 정리하는 것이 유리한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·진술·증명력 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 접촉 부인·신고 내용 검토.</li>\n<li><strong>2단계 — CCTV·메시지·통화 확보 (1주 내)</strong> — 현장 CCTV 보존 요청 + 다툼 전후 대화 보존.</li>\n<li><strong>3단계 — 경위 정리 (1~2주)</strong> — 접촉 사실 없음·다툼 경위를 시간 순으로 정리.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 접촉 부인·신고 내용 불일치 일관 진술.</li>\n<li><strong>5단계 — 증명력 다툼 + 처분</strong> — 상대 진단서·진술의 신빙성·인과관계 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">밀친 적 없는 폭행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 접촉 부인·증거·증명력 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>현장 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>다툼 전후 메시지·SNS·통화 기록</strong></li>\n<li><strong>목격자(동석자·직원) 진술서·연락처</strong></li>\n<li><strong>상대 진단서 발급 경위·인과관계 의문 정리</strong></li>\n<li><strong>신고 내용과 사실 불일치 정리 메모</strong></li>\n<li><strong>당시 상황 시간 순 경위서(접촉 없음)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 접촉 자체가 없었다는 사안은 CCTV가 결정적이므로 덮어쓰기 전에 신속히 보존을 요청하는 것이 중요합니다. 상대 진단서가 그날 다툼으로 생긴 부상인지, 발급 시점·경위가 자연스러운지를 함께 정리하면 증명력 다툼에 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>접촉 존부 다툼</strong> — 신체 접촉이 있었는지 자체가 쟁점.</li>\n<li><strong>신고 내용 사실성</strong> — 신고 내용과 실제 경위 일치 여부.</li>\n<li><strong>진단서 증명력</strong> — 발급 경위·인과관계·신빙성.</li>\n<li><strong>증거 일관성</strong> — CCTV·메시지·진술 정합.</li>\n<li><strong>대응 방향</strong> — 사실과 다른 부분 방어.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 합리적 의심·증명력 신중 평가 영역',
        summary:
          '대법원 2010도12728(대법원, 2011.01.27 선고) 영역에서 법원은 형사재판에서 유죄로 인정하기 위한 심증은 합리적 의심이 없을 정도여야 하나, 이는 모든 가능한 의심을 배제할 정도까지 요구하는 것은 아니며, 증명력 있는 증거를 합리적 근거 없는 의심으로 배척하는 것도 자유심증주의의 한계를 벗어난다고 판시했습니다. 신체 접촉이 없었다며 폭행 신고를 다투는 사안에서도 CCTV·메시지·진단서를 종합해 신고 내용과 사실의 일치 여부를 검토해볼 수 있습니다.',
        takeaway: '접촉 없음 주장은 CCTV·메시지로 합리적 의심을 제기하는 증명력 다툼 영역 — 객관 자료 보존 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '신체 접촉이 없었는데도 폭행으로 조사를 받나요?',
        answer:
          '<strong>신고가 접수되면 접촉 존부 자체가 쟁점으로 조사되는 영역입니다.</strong> 접촉 없음을 객관 자료로 다투는 것이 핵심.',
      },
      {
        question: '사실과 다르게 신고된 것 같은데 어떻게 다투나요?',
        answer:
          '<strong>신고 내용과 실제 경위를 CCTV·메시지로 대조하는 방어 영역입니다.</strong> 객관 자료 정리를 권장합니다.',
      },
      {
        question: '상대 진단서는 어떻게 다투나요?',
        answer:
          '<strong>발급 경위·인과관계·신빙성을 함께 따지는 증명력 영역입니다.</strong> 발급 시점·부상 원인 검토가 관건입니다.',
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
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 무고 대응', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '무고 반박 대응', href: '/guide/assault/assault-false-accusation-counter' },
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '과장된 상해 주장', href: '/guide/assault/assault-exaggerated-injury-claim' },
      { label: '진단서 vs CCTV 우선순위', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
    ],
  },

  // ─── 5. dui-revocation-admin-appeal-daily-necessity-track ───
  // 이 페이지는 면허취소 수치 음주로 취소 처분을 받은 운전자의 90일 행정심판 구제·소명 준비를 돕는 페이지다.
  {
    domain: 'dui',
    slug: 'dui-revocation-admin-appeal-daily-necessity-track',
    keyword: '면허취소 수치 음주 행정심판 구제',
    questionKeyword: '면허취소 기준 수치로 음주운전이 적발돼 취소 처분을 받았어요. 행정심판으로 감경·구제를 받으려면 무엇을 준비해야 하나요?',
    ctaKeyword: '면허취소 음주 행정심판 구제 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '면허취소 음주 행정심판 구제 — 5단계 90일 소명 트랙 | 로앤가이드',
      description:
        '면허취소 수치 음주로 취소 처분을 받아 행정심판 구제가 걱정된다면 청구·소명·감경 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 회식 후 음주운전을 하다 단속에 걸렸고, 면허취소에 해당하는 수치가 나와 운전면허 취소 처분 통지를 받았습니다. 차량으로 출퇴근과 업무를 해 온 본인은 면허가 취소되면 생활이 크게 흔들릴 상황이라, 행정심판으로 처분을 다투거나 감경받을 수 있는지가 막막합니다. 처분에 불복하려면 정해진 기간 안에 청구해야 한다는데, 무엇을 어떻게 준비해야 하는지 정리가 필요한 상황이에요." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 행정심판법은 처분에 불복하는 절차를 정하는 영역이며, 면허취소 처분은 형사처벌과 별개로 진행되고 처분을 안 날부터 90일·있은 날부터 180일 이내에 행정심판을 청구하는 것으로 안내되고 있습니다. 혐의를 받고 있다면 ① 처분 확인 ② 청구 기간 ③ 소명 자료 ④ 형사 병행 ⑤ 재발 방지 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 면허취소 음주 행정심판 구제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분·기간·소명·형사·재발 방지 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 확인</strong> — 면허취소 처분서·수치·결격 기간 확인.</li>\n<li><strong>② 청구 기간</strong> — 처분 안 날부터 90일·있은 날부터 180일 이내.</li>\n<li><strong>③ 소명 자료</strong> — 생계·업무상 운전 필요성·반성·재발 방지 노력.</li>\n<li><strong>④ 형사 병행</strong> — 음주운전 형사 절차와 별개 진행.</li>\n<li><strong>⑤ 재발 방지</strong> — 교육 이수·치료·자원봉사.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면허취소 행정심판은 처분이 위법·부당한지, 재량을 일탈·남용했는지를 다투는 절차로, 무조건 구제되는 것은 아닌 영역입니다. 운전이 생계·업무에 꼭 필요한 사정, 반성과 재발 방지 노력을 객관 자료로 소명하면 감경 가능성을 검토하는 데 도움이 되는 사정이며, 청구 기간을 넘기지 않는 것이 가장 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 중앙행정심판위원회·도로교통공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분서 확인·자문 (즉시)</strong> — 면허취소 처분서·수치·결격 기간 확인 + 변호인 자문.</li>\n<li><strong>2단계 — 행정심판 청구 (처분 안 날부터 90일 내)</strong> — 청구서·청구 이유·소명 자료 제출.</li>\n<li><strong>3단계 — 소명 자료 보강 (청구 후)</strong> — 운전 필요성·반성문·교육 이수·자원봉사 자료 보완.</li>\n<li><strong>4단계 — 재결 (통상 수개월)</strong> — 위원회 심리·재결로 인용·기각·감경 여부 안내.</li>\n<li><strong>5단계 — 형사 병행 (1~3개월)</strong> — 음주운전 형사 절차와 별개로 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">면허취소 음주 행정심판 구제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구·소명·재발 방지 갈래입니다.</strong></p>\n<ul>\n<li><strong>면허취소 처분 통지서·음주측정 결과지</strong></li>\n<li><strong>행정심판 청구서(처분 안 날부터 90일 내)</strong></li>\n<li><strong>운전 필요성 소명 자료(재직증명·업무 사용·가족 부양)</strong></li>\n<li><strong>반성문·재발 방지 다짐서</strong></li>\n<li><strong>음주운전 예방 교육·치료 프로그램 이수증</strong></li>\n<li><strong>자원봉사·기부 등 양형·소명 자료</strong></li>\n<li><strong>형사 사건 진행 자료(별개 진행)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정심판은 청구 기간을 넘기면 각하될 수 있어 처분서를 받은 즉시 기간을 확인하는 것이 출발점입니다. 운전 필요성은 막연한 호소보다 재직증명·업무 사용 내역·가족 부양 자료 등 객관 자료로 정리하는 것이 소명에 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>청구 기간</strong> — 처분 안 날부터 90일·있은 날부터 180일.</li>\n<li><strong>재량 일탈·남용</strong> — 처분이 과도한지 여부.</li>\n<li><strong>운전 필요성</strong> — 생계·업무·부양 소명.</li>\n<li><strong>형사·행정 분리</strong> — 두 절차는 별개 진행.</li>\n<li><strong>재발 방지</strong> — 교육·치료·반성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위원회 중앙행정심판위원회 110</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 방법·재측정 기회 평가 영역',
        summary:
          '대법원 2014도16051(대법원, 2015.07.09 선고) 음주운전 영역에서 법원은 호흡측정에 응해 과학적이고 중립적인 측정 수치가 도출된 경우의 측정 방법·재측정 기회의 취지에 관하여, 호흡측정의 오류로 인한 불이익을 혈액 채취 등으로 구제받을 기회를 보장하는 데 입법 취지가 있다고 판시했습니다. 면허취소 수치로 처분을 받은 사안에서도 측정 결과의 정확성·절차를 확인하고, 행정심판에서 처분의 위법·부당 여부와 감경 사정을 함께 검토해볼 수 있습니다.',
        takeaway: '면허취소 구제는 청구 기간·측정 절차·운전 필요성 소명이 핵심 영역 — 90일 내 청구·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '면허취소도 행정심판으로 다툴 수 있나요?',
        answer:
          '<strong>처분 안 날부터 90일 이내 행정심판으로 다투는 영역입니다.</strong> 다만 무조건 구제되는 것은 아닙니다.',
      },
      {
        question: '청구 기간을 넘기면 어떻게 되나요?',
        answer:
          '<strong>기간을 넘기면 각하될 수 있는 영역입니다.</strong> 처분서를 받은 즉시 기간 확인이 가장 중요합니다.',
      },
      {
        question: '운전이 꼭 필요하다는 점은 어떻게 소명하나요?',
        answer:
          '<strong>재직증명·업무 사용 내역·가족 부양 자료가 소명 자료가 되는 영역입니다.</strong> 객관 자료 정리를 권장합니다.',
      },
      {
        question: '형사 처벌과 면허취소는 같이 받나요?',
        answer:
          '<strong>형사 절차와 면허취소 행정 절차는 별개로 진행되는 영역입니다.</strong> 각각 대응이 필요합니다.',
      },
      {
        question: '교육을 이수하면 감경에 도움이 되나요?',
        answer:
          '<strong>예방 교육·재발 방지 노력은 소명 자료로 평가되는 영역입니다.</strong> 이수증 확보를 권장합니다.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '면허취소 구제', href: '/guide/dui/dui-license-revocation' },
      { label: '면허취소 행정심판 90일 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '행정심판 준비서류', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '면허취소 행정심판 청구', href: '/guide/dui/dui-license-revocation-appeal' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
    ],
  },

  // ─── 6. dui-measurement-refusal-charged-defense-track ───
  // 이 페이지는 호흡측정을 거부했다가 측정거부죄로 입건된 운전자의 성립 요건·방어 준비를 돕는 페이지다.
  {
    domain: 'dui',
    slug: 'dui-measurement-refusal-charged-defense-track',
    keyword: '음주측정 거부 입건 대응',
    questionKeyword: '음주측정 요구를 거부했다가 측정거부죄로 입건됐어요. 측정거부가 성립하는지 다투거나 대응하려면 어떻게 해야 하나요?',
    ctaKeyword: '음주측정 거부 입건 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 입건 대응 — 5단계 성립 요건·방어 트랙 | 로앤가이드',
      description:
        '음주측정 요구를 거부했다가 측정거부죄로 입건돼 걱정된다면 성립 요건·고지·대응 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 단속 현장에서 경찰관의 음주측정 요구를 받았는데, 당황하고 절차에 대한 불신이 겹쳐 호흡측정에 바로 응하지 않았습니다. 그 사이 경찰관은 측정 불응 시 처벌받을 수 있다는 안내를 했다고 하고, 결국 본인은 측정거부로 입건됐어요. 본인은 측정을 완전히 거부할 의사는 아니었고 절차나 고지가 충분했는지 의문이라, 측정거부죄가 성립하는지 다툴 수 있는지가 걱정입니다. 현장 영상·단속 기록·고지 정황이 남아 있을 수 있는 상황이에요." 도로교통법 제44조 제2항은 경찰공무원이 술에 취하였는지를 호흡조사로 측정할 수 있도록 정하고, 제148조의2는 그 측정에 응하지 아니한 경우를 처벌하는 영역이며, 측정거부죄는 술에 취한 상태로 운전했다고 인정할 상당한 이유가 있는 사람이 정당한 측정 요구에 응하지 않은 경우에 성립하는 것으로 논의됩니다. 혐의를 받고 있다면 ① 성립 요건 ② 고지·절차 ③ 형사 절차 ④ 면허·행정 ⑤ 양형 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주측정 거부 입건 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 성립 요건·고지·형사·행정·양형 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 성립 요건</strong> — 운전·상당한 이유·측정 요구·불응이 갖춰졌는지.</li>\n<li><strong>② 고지·절차</strong> — 불응 시 처벌 고지·측정 요구 방법의 적법성.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 측정거부에 따른 면허 정지·취소 처분.</li>\n<li><strong>⑤ 양형</strong> — 초범·반성·정황 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정거부죄는 술에 취한 상태로 운전했다고 인정할 상당한 이유가 있는 사람이 정당한 호흡측정 요구에 응하지 않은 경우에 성립하는 것으로 논의되는 영역입니다. 따라서 음주감지기 시험 단계인지 호흡측정 요구 단계인지, 불응의 의사가 명확했는지, 처벌 고지가 충분했는지가 다투어질 수 있으므로 현장 영상·단속 기록을 확인하는 것이 중요한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 측정거부 성립 요건·고지 쟁점 검토.</li>\n<li><strong>2단계 — 현장 영상·단속 기록 확보 (1주 내)</strong> — 채증 영상·측정 요구·고지 정황 자료 확보 요청.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 성립 요건·고지 적법성 쟁점 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·교육 이수·자원봉사 자료.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정 거부 입건 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 성립 요건·고지·행정 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·주취운전자 적발보고서</strong></li>\n<li><strong>단속 현장 채증 영상·블랙박스</strong></li>\n<li><strong>측정 요구·불응 고지 정황 기록</strong></li>\n<li><strong>음주감지기·호흡측정 단계 구분 자료</strong></li>\n<li><strong>면허 처분 통지서</strong></li>\n<li><strong>본인 반성문·교육 이수증</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정거부 사안은 음주감지기 시험 단계와 호흡측정 요구 단계의 구분, 처벌 고지의 충분성이 핵심 쟁점이므로 현장 채증 영상·적발보고서를 확보하는 것이 출발점입니다. 다만 측정 불응 자체가 무겁게 평가될 수 있어 객관 자료에 근거해 변호인과 다투는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상당한 이유</strong> — 운전·주취 인정 정황.</li>\n<li><strong>측정 단계 구분</strong> — 음주감지기 시험 vs 호흡측정 요구.</li>\n<li><strong>고지 충분성</strong> — 불응 시 처벌 고지·횟수·간격.</li>\n<li><strong>불응 의사</strong> — 명확한 거부 의사 여부.</li>\n<li><strong>면허 정지·취소</strong> — 90일 내 행정심판.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위원회 중앙행정심판위원회 110</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 측정거부죄 성립 요건 평가 영역',
        summary:
          '대법원 2013도8481(대법원, 2015.12.24 선고) 음주측정불응 영역에서 법원은 측정거부 처벌조항의 \'경찰공무원의 측정에 응하지 아니한 경우\'란 전체 사건 경과에 비추어 술에 취한 상태에서 운전했다고 인정할 만한 상당한 이유가 있는 운전자가 정당한 측정 요구에 응하지 않은 경우를 의미하며, 측정 불응에 따른 불이익을 일정 간격으로 고지하는 절차 등을 종합해 판단해야 한다는 취지로 판시했습니다. 호흡측정을 거부했다 입건된 사안에서도 성립 요건·고지 정황을 영상·기록과 함께 검토해볼 수 있습니다.',
        takeaway: '측정거부는 상당한 이유·측정 단계·고지 충분성이 핵심 쟁점 영역 — 현장 영상 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '음주감지기 시험을 거부한 것도 측정거부인가요?',
        answer:
          '<strong>음주감지기 시험과 호흡측정 요구 단계는 구분해 평가되는 영역입니다.</strong> 단계 구분이 쟁점이 됩니다.',
      },
      {
        question: '처벌 고지를 제대로 못 들었으면 다툴 수 있나요?',
        answer:
          '<strong>불응 시 처벌 고지의 충분성은 성립 판단의 한 요소인 영역입니다.</strong> 현장 영상·기록 확인이 관건입니다.',
      },
      {
        question: '완전히 거부할 생각은 아니었는데도 입건되나요?',
        answer:
          '<strong>불응 의사가 명확했는지 전체 경과로 평가되는 영역입니다.</strong> 정황 자료 정리를 권장합니다.',
      },
      {
        question: '현장 채증 영상은 어떻게 확보하나요?',
        answer:
          '<strong>수사기관에 확보를 요청하거나 변호인을 통해 열람하는 영역입니다.</strong> 적발보고서와 함께 정리 권장.',
      },
      {
        question: '측정거부도 면허가 취소되나요?',
        answer:
          '<strong>측정거부에 따른 면허 정지·취소가 병행될 수 있는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부 처벌 대응', href: '/guide/dui/breathalyzer-refusal-penalty-response' },
      { label: '측정 거부 처벌·불복', href: '/guide/dui/dui-measurement-refusal-penalty-appeal' },
      { label: '호흡측정 거부 트랙', href: '/guide/dui/dui-breath-test-refusal-track' },
      { label: '음주측정기 오류 대응', href: '/guide/dui/breathalyzer-error-response' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
    ],
  },

  // ─── 7. dui-voluntary-surrender-self-report-criminal-admin-track ───
  // 이 페이지는 음주운전 사실을 자진신고·자수한 운전자의 자수 감경·형사·행정 병행 준비를 돕는 페이지다.
  {
    domain: 'dui',
    slug: 'dui-voluntary-surrender-self-report-criminal-admin-track',
    keyword: '음주운전 자진신고 자수 대응',
    questionKeyword: '음주운전을 한 뒤 스스로 경찰에 자진신고·자수했어요. 운전 사실은 인정하는데 자수로 감경받을 수 있는지, 형사·행정은 어떻게 진행되나요?',
    ctaKeyword: '음주운전 자진신고 자수 대응 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주운전 자진신고 자수 대응 — 5단계 감경·병행 트랙 | 로앤가이드',
      description:
        '음주운전 후 자진신고·자수해 감경과 형사·행정 진행이 걱정된다면 자수·양형·면허 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 음주 상태에서 운전한 사실을 뒤늦게 후회하고, 사고가 나기 전에 스스로 경찰에 알리거나 조사에 응해 음주운전 사실을 인정했습니다. 운전 자체는 다투지 않지만, 자진신고·자수한 점이 양형에 어떻게 반영되는지, 운전 사실을 인정한 상태에서 형사 절차와 면허 처분이 어떻게 진행되는지가 막막한 상황이에요. 측정이 사후에 이뤄졌다면 운전 당시 수치를 어떻게 보는지도 정리가 필요합니다." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하고, 형법 제52조는 자수한 자에 대한 형의 감경·면제를 정하는 영역이며, 운전 사실을 인정하는 경우 형사 절차에서는 자수·반성·재발 방지 노력이, 행정 절차에서는 수치에 따른 면허 처분이 각각 평가되는 사정입니다. 혐의를 받고 있다면 ① 사실 정리 ② 자수·양형 ③ 형사 절차 ④ 면허·행정 ⑤ 재발 방지 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주운전 자진신고 자수 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·자수·형사·행정·재발 방지 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 정리</strong> — 운전·음주 시각·측정 시점·수치 정리.</li>\n<li><strong>② 자수·양형</strong> — 자진신고·자수 경위 + 반성·피해 회복.</li>\n<li><strong>③ 형사 절차</strong> — 입건·기소·재판 흐름.</li>\n<li><strong>④ 면허·행정</strong> — 수치에 따른 면허 정지·취소 처분.</li>\n<li><strong>⑤ 재발 방지</strong> — 교육 이수·치료·자원봉사.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자수는 양형에서 유리하게 고려될 수 있는 사정이나, 자수만으로 처벌이 면제되거나 면허 처분이 없어지는 것은 아닌 영역입니다. 운전 사실을 인정하는 경우에도 자진신고 경위·반성·재발 방지 노력을 객관 자료로 정리하면 양형 검토에 도움이 되고, 형사와 면허 처분은 별개로 진행되는 사정을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·사실·형사·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 자수 인정·양형 쟁점 검토.</li>\n<li><strong>2단계 — 사실·시각 자료 정리 (즉시)</strong> — 운전·음주 종료·측정 시각, 측정 결과·자진신고 경위 정리.</li>\n<li><strong>3단계 — 형사 절차 (1~3개월)</strong> — 자수·반성·피해 회복 자료 제출.</li>\n<li><strong>4단계 — 양형 자료 (1~2개월)</strong> — 반성문·자원봉사·재발 방지 교육 이수.</li>\n<li><strong>5단계 — 행정심판 (처분 후 90일 내)</strong> — 면허 정지·취소 불복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주운전 자진신고 자수 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자수·양형·행정 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과지</strong></li>\n<li><strong>자진신고·자수 경위 기록(신고 시각·내용)</strong></li>\n<li><strong>운전·음주 종료·측정 시각 정리 자료</strong></li>\n<li><strong>면허 처분 통지서</strong></li>\n<li><strong>본인 반성문·재발 방지 다짐서</strong></li>\n<li><strong>음주운전 예방 교육·치료·자원봉사 이수증</strong></li>\n<li><strong>행정심판 청구서(처분 후 90일 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자수가 양형에 반영되려면 자진신고 시각·내용 등 경위를 명확히 정리하는 것이 도움이 됩니다. 다만 자수만으로 면허 처분이 없어지지는 않으므로, 형사 양형 자료와 면허 행정심판 자료를 분리해 준비하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자수 인정 여부</strong> — 자진신고 시점·경위.</li>\n<li><strong>양형 반영</strong> — 자수·반성·재발 방지 노력.</li>\n<li><strong>측정 시점</strong> — 사후 측정 시 운전 당시 수치 평가.</li>\n<li><strong>형사·행정 분리</strong> — 두 절차는 별개 진행.</li>\n<li><strong>면허 정지·취소</strong> — 90일 내 행정심판.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위원회 중앙행정심판위원회 110</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 방법·운전 인정 평가 영역',
        summary:
          '대법원 2016도16121(대법원, 2017.06.08 선고) 음주운전 영역에서 법원은 경찰공무원이 음주 여부·주취 정도를 확인할 때 측정 방법·횟수에 일정한 재량을 가지며, 호흡측정과 밀접한 음주감지기 시험도 요구할 수 있다는 취지로 판시했습니다. 운전 사실을 인정하고 자진신고·자수한 사안에서도 측정 방법·운전 시점 수치를 확인하고, 형사 양형과 면허 행정 처분을 각각 검토해볼 수 있습니다.',
        takeaway: '자수는 양형 고려 사정이나 면허 처분은 별개 영역 — 경위 정리·형사·행정 분리 대응 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자수하면 처벌이 면제되나요?',
        answer:
          '<strong>자수는 양형에서 유리하게 고려될 수 있으나 면제가 보장되는 것은 아닌 영역입니다.</strong> 경위 정리가 중요합니다.',
      },
      {
        question: '운전 사실을 인정해도 다툴 부분이 있나요?',
        answer:
          '<strong>사후 측정 시 운전 당시 수치 평가 등은 여전히 검토되는 영역입니다.</strong> 시각 자료 정리를 권장합니다.',
      },
      {
        question: '자수했는데도 면허는 취소되나요?',
        answer:
          '<strong>형사와 별개로 수치에 따른 면허 정지·취소가 진행되는 영역입니다.</strong> 90일 내 행정심판 검토.',
      },
      {
        question: '자진신고 경위는 어떻게 정리하나요?',
        answer:
          '<strong>신고 시각·내용 등 경위를 객관 자료로 정리하는 영역입니다.</strong> 변호인과 함께 정리 권장.',
      },
      {
        question: '교육·자원봉사가 양형에 도움이 되나요?',
        answer:
          '<strong>반성·재발 방지 노력은 양형 자료로 평가되는 영역입니다.</strong> 이수증·증빙 확보를 권장합니다.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 첫 대응', href: '/guide/dui/dui-caught-where-to-start' },
      { label: '음주운전 초범 대응', href: '/guide/dui/dui-first-offense' },
      { label: '탄원서 준비서류', href: '/guide/dui/dui-leniency-petition-documents' },
      { label: '음주운전 형사 절차', href: '/guide/dui/dui-criminal-procedure-overview' },
      { label: '수치별 처벌 기준', href: '/guide/dui/dui-bac-penalty-by-level' },
    ],
  },
];
