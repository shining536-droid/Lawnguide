import { SpokePage } from '../spoke-pages';

// batch81 assault + dui + jeonse-fraud — 10개 (2026-05-29)
//
// 고유 존재 이유:
// assault 4:
// 1. 카페 자리 시비 쌍방 폭행 입건 — '카페 좌석·정당방위·현재성·쌍방 방어' 트랙 (accused)
// 2. 시내버스 노인·젊은 승객 시비 폭행 피해 — '버스 안 CCTV·상해진단서·신고' 트랙 (victim)
// 3. 택시 기사·승객 경로 시비 쌍방 폭행 — '블랙박스·정황·쌍방 방어' 트랙 (accused)
// 4. 술집 모르는 사람과 어깨 부딪힘 폭행 피해 — '주점 CCTV·상해 입증·신고' 트랙 (victim)
//
// dui 3:
// 5. 사유 주차장 단거리 음주 이동 — '도로성·운전성 판단·방어' 트랙 (accused)
// 6. 감기약·구강세정제 잔여 알코올 측정 — '측정 절차·재측정·신빙성 다툼' 트랙 (accused)
// 7. 장애인 운전자 음주 면허취소 행정심판 — '생계·90일 청구·소명' 트랙 (victim)
//
// jeonse-fraud 3 (모두 victim 절차형):
// 8. 다세대 빌라왕 보증금 미반환 — 'HUG·임차권등기·소송' 트랙
// 9. 전대차 원임차인 잠적·연락두절 — '임대인 직접 청구·법적 지위' 트랙
// 10. 전세보증금반환보증보험 청구 — 'HUG 이행청구·서류·심사' 트랙

export const spokesBatch81AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-cafe-seat-dispute-mutual-accused-track ───
  // 이 페이지는 카페에서 자리 시비로 쌍방 폭행 입건된 사람의 정당방위·쌍방·방어 준비를 돕는 페이지다.
  {
    domain: 'assault',
    slug: 'assault-cafe-seat-dispute-mutual-accused-track',
    keyword: '카페 자리 시비 쌍방 폭행 혐의',
    questionKeyword: '카페에서 자리 문제로 시비가 붙어 서로 밀치고 잡다 쌍방 폭행으로 입건됐어요. 상대가 먼저 손을 댔는데 어떻게 다투나요?',
    ctaKeyword: '카페 자리 시비 쌍방 폭행 혐의 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '카페 자리 시비 쌍방 폭행 혐의 — 5단계 정당방위·쌍방 트랙 | 로앤가이드',
      description:
        '카페에서 자리 시비로 서로 밀치다 쌍방 폭행 혐의를 받고 있다면 정당방위·쌍방성·합의 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 카페에서 자리를 잡고 음료를 마시던 중, 다른 손님이 \'그 자리는 자기가 먼저 봤다\'며 말을 걸어왔습니다. 짧은 대화가 격해지자 상대가 먼저 본인의 어깨를 잡고 의자를 흔들었고, 본인은 이를 떼어내며 상대의 손을 막아 잡았어요. 직원이 말리는 과정에서 서로 가볍게 부딪혔고, 잠시 뒤 상대가 \'폭행당했다\'며 신고해 본인도 쌍방 폭행으로 입건되었습니다. 카페 천장에는 좌석 구역 CCTV가 있고, 옆자리 손님과 직원의 진술이 남아 있을 수 있는 상황이에요." 형법 제260조 폭행은 신체에 대한 유형력 행사로 논의되는 영역이지만, 카페 좌석을 두고 상대가 먼저 어깨·의자를 잡았는지, 본인의 행위가 방어 차원이었는지가 핵심 쟁점이며, 형법 제21조 정당방위는 상대의 부당한 침해가 종료되기 전 단계까지 방어 행위가 검토될 수 있는 영역입니다. 폭행죄는 피해자의 명시한 의사에 반해 처벌할 수 없는 반의사불벌의 영역이라는 점도 정리해둘 필요가 있습니다. 혐의를 받고 있다면 ① 행위 평가 ② 증거 보존 ③ 정당방위 검토 ④ 진술 전략 ⑤ 합의 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 카페 자리 시비 쌍방 폭행 혐의 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·정당방위·진술·합의 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 평가</strong> — 상대가 먼저 어깨·의자 잡음 = 쌍방·방어 평가 영역.</li>\n<li><strong>② 증거 보존</strong> — 카페 구역 CCTV·옆자리·직원 진술.</li>\n<li><strong>③ 정당방위 검토</strong> — 침해의 현재성·반격 방어·상당성 평가.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 선후·방어 의도 일관 진술.</li>\n<li><strong>⑤ 합의</strong> — 반의사불벌 특성상 처벌불원 조기 협의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상대가 먼저 손을 댄 정황이 CCTV·목격 진술로 뒷받침되면 정당방위·쌍방성 평가에 영향을 주는 사정입니다. 정당방위의 방어 행위에는 순수한 수비뿐 아니라 적극적 반격을 포함하는 반격 방어도 논의되는 영역이며, 카페 CCTV는 시비 선후와 행위 강도를 가르는 핵심 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·정당방위·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 정당방위·쌍방성 쟁점 검토.</li>\n<li><strong>2단계 — CCTV·진술 확보 (1주 내)</strong> — 카페 구역 CCTV 보존 요청 + 옆자리·직원 진술·연락처.</li>\n<li><strong>3단계 — 경위 정리 (1~2주)</strong> — 시비 선후·행위 강도·방어 의도 시간 순 정리.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 침해 현재성·반격 방어 일관 진술.</li>\n<li><strong>5단계 — 합의 + 처분</strong> — 처벌불원·반성문·초범 자료 종합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">카페 자리 시비 쌍방 폭행 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 쌍방성·정당방위·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>카페 좌석 구역 CCTV 영상(보존 요청분)</strong></li>\n<li><strong>옆자리 손님·직원 진술서·연락처</strong></li>\n<li><strong>상대 선행 행위(먼저 어깨 잡음·의자 흔듦) 정황 자료</strong></li>\n<li><strong>본인 부상 사진(어깨·손목)·정형외과 진단서</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·초범 자료·당시 상황 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카페 CCTV는 매장 자체 운영분이 보존 기간이 짧을 수 있어 신속한 보존 요청이 중요합니다. 직원 진술은 시비 발단과 누가 먼저 손을 댔는지를 정리하는 데 도움이 되는 사정이고, 본인 부상 사진은 정당방위가 아닌 일방 가격 주장을 다투는 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선후 관계</strong> — 누가 먼저 어깨·의자를 잡았는지.</li>\n<li><strong>정당방위</strong> — 침해 현재성·반격 방어·상당성 평가.</li>\n<li><strong>쌍방성</strong> — 서로의 행위 강도 비교.</li>\n<li><strong>반의사불벌·합의</strong> — 처벌불원 의사.</li>\n<li><strong>양형</strong> — 초범·반성·경미성 종합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당방위 침해의 현재성·반격 방어 평가 영역',
        summary:
          '대법원 2020도6874(대법원, 2023.04.27 선고) 정당방위 영역에서 법원은 침해의 현재성은 침해 행위가 형식적으로 기수에 이르렀는지에 따라 결정되지 않고 자기 또는 타인의 법익에 대한 침해 상황이 종료되기 전까지를 의미하며, 정당방위의 방어 행위에는 순수한 수비뿐 아니라 적극적 반격을 포함하는 반격 방어 형태도 포함된다고 판시했습니다. 카페 자리 시비에서 상대가 먼저 어깨·의자를 잡은 사안에서도 침해의 현재성·방어의 상당성 평가가 가능한 영역으로 검토해볼 수 있습니다.',
        takeaway: '카페 자리 시비 쌍방은 선후·정당방위·상당성·반의사불벌 합의가 처분 핵심 영역 — CCTV 확보·합의 조기 진행 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 먼저 손을 댄 게 입증되면 어떻게 되나요?',
        answer:
          '<strong>침해 현재성·반격 방어 평가로 정당방위가 검토될 수 있는 영역입니다.</strong> CCTV·진술이 결정 자료.',
      },
      {
        question: '카페 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>매장에 직접 보존 요청 + 수사기관에 확보 요청을 병행하는 영역입니다.</strong> 보존 기간이 짧아 신속 대응이 중요.',
      },
      {
        question: '의자를 흔든 정도도 침해로 보나요?',
        answer:
          '<strong>유형력 행사 범주에서 함께 평가되는 영역입니다.</strong> 카페 좌석 흔들기·잡기 정도가 평가 대상.',
      },
      {
        question: '폭행죄도 합의하면 처벌을 안 받을 수 있나요?',
        answer:
          '<strong>단순폭행은 피해자 명시 의사에 반해 처벌할 수 없는 반의사불벌 영역입니다.</strong> 처벌불원 합의가 중요.',
      },
      {
        question: '초범이면 처분이 가벼워지나요?',
        answer:
          '<strong>합의 + 초범 + 경미성 조합 시 기소유예 검토 가능 영역입니다.</strong> 양형 자료 준비 권장.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '쌍방 폭행 구별', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '정당방위 기준', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
    ],
  },

  // ─── 2. assault-public-bus-senior-young-quarrel-victim-track ───
  // 이 페이지는 시내버스에서 노인과 젊은 승객 시비로 폭행당한 피해자의 진단서·CCTV·신고 준비를 돕는 페이지다.
  {
    domain: 'assault',
    slug: 'assault-public-bus-senior-young-quarrel-victim-track',
    keyword: '시내버스 노인 젊은 승객 폭행 피해',
    questionKeyword: '시내버스에서 자리 양보 문제로 노인과 시비가 붙어 일방적으로 맞아 다쳤어요. 버스 CCTV와 진단서가 있는데 어떻게 대응하나요?',
    ctaKeyword: '시내버스 노인 폭행 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '시내버스 노인 폭행 피해 — 5단계 버스 CCTV·진단 트랙 | 로앤가이드',
      description:
        '시내버스에서 자리 양보 시비로 일방적으로 맞아 다쳤다면 CCTV·진단서·고소·배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 퇴근 시간 만원 시내버스에서 좌석에 앉아 있다가, 옆에 선 어르신과 자리 양보 문제로 짧게 말을 주고받았습니다. 분위기가 격해지자 어르신이 손가방으로 본인의 머리와 어깨를 여러 차례 가격했고, 본인은 머리 타박상과 안경 파손으로 전치 2주 진단을 받았어요. 버스 내부에는 운전석 뒤·중간·뒷문 쪽 CCTV가 설치돼 있고, 다른 승객들의 목격도 있을 수 있는 상황입니다. 어르신은 \'본인이 먼저 막말을 했다\'고 발뺌하고 있어요." 형법 제257조는 사람의 신체를 상해한 행위를, 제260조는 폭행 행위를 다루는 영역이며, 만원 버스 안에서 일방적으로 가격당해 전치 2주 상해가 발생한 정황이 버스 내부 CCTV와 다른 승객 진술로 뒷받침되면 폭행·상해로 평가될 소지가 있는 사정입니다. 형사사건에서 상해진단서는 피해자 진술과 함께 유력한 증거가 될 수 있는 영역이며, 진단 시점이 사건과 근접하면 증명력 평가에 도움이 되는 사정이라는 점도 정리해둘 필요가 있습니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 시내버스 노인 폭행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 2주 + 손가방 가격 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 버스 내부 CCTV·운수회사 기록·진단서.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·안경 손해 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자리 양보를 둘러싼 말다툼과 신체 가격은 별개로 평가되는 영역입니다. 상대가 \'먼저 막말을 했다\'고 다투더라도 손가방 가격 자체는 폭행·상해 평가 대상이며, 버스 내부 CCTV가 가격 횟수·강도를 담으면 결정적 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 신경외과·정형외과 진단서(전치 2주)·치료 기록·부상 사진.</li>\n<li><strong>2단계 — 버스 CCTV 보존 요청 (1주 내)</strong> — 운수회사·경찰에 노선·차량·시간대 특정해 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·안경 손해 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시내버스 노인 폭행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>신경외과·정형외과 진단서(전치 2주)·치료 기록·약제비 영수증</strong></li>\n<li><strong>버스 내부 CCTV 영상(보존 요청분, 노선·차량번호·시간대 특정)</strong></li>\n<li><strong>운수회사 운행 기록·운전사 증언</strong></li>\n<li><strong>머리·어깨 부상 사진(사건 직후)·파손된 안경 사진</strong></li>\n<li><strong>목격 승객 진술서·연락처</strong></li>\n<li><strong>교통카드 사용 내역(승차 시간 입증)</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 버스 CCTV는 운수회사가 차량별로 보관하고 덮어쓰기 주기가 매우 짧을 수 있어 노선·차량번호·승차 시간을 특정해 즉시 보존 요청하는 것이 핵심입니다. 교통카드 내역은 시간대 입증에 도움이 되는 자료이고, 안경 파손은 별도 손해 산정 항목으로 정리할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>말다툼 vs 가격 구분</strong> — 자리 양보 시비와 신체 가격은 별개 평가.</li>\n<li><strong>선행 발언 다툼</strong> — \'먼저 막말했다\' 주장 vs CCTV 정황.</li>\n<li><strong>상해 인과관계</strong> — 머리·어깨 부상 발생 원인.</li>\n<li><strong>합의금 산정</strong> — 전치 2주 + 안경 손해 + 정신적 피해.</li>\n<li><strong>고령 가해자</strong> — 연령 사정과 양형 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 / 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 신중 평가 영역',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 상해 영역에서 법원은 상해진단서가 피해자 주관적 통증 호소에 주로 의존해 발급된 경우 증명력을 신중히 판단해야 하지만, 진단 시점이 상해 발생 시점과 근접하고 발급 경위에 특별히 신빙성을 의심할 사정이 없으면 피해자 진술과 함께 유력한 증거가 될 수 있다고 판시했습니다. 시내버스에서 손가방으로 가격당한 사안에서도 진단서와 버스 CCTV·승객 진술을 함께 종합해 폭행·상해 평가를 검토해볼 수 있습니다.',
        takeaway: '버스 안 가격 + 전치 2주 + 근접 진단서 + CCTV 결합 시 폭행·상해 평가 영역 — 영상 보존 후 고소·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 말다툼을 시작했으면 불리한가요?',
        answer:
          '<strong>말다툼과 신체 가격은 별개로 평가되는 영역입니다.</strong> 발언이 위협으로 이어졌는지가 관건.',
      },
      {
        question: '버스 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>운수회사·경찰에 노선·차량번호·시간대를 특정해 보존 요청하는 영역입니다.</strong> 덮어쓰기 전 신속 요청이 중요.',
      },
      {
        question: '손가방으로 맞은 것도 폭행으로 보나요?',
        answer:
          '<strong>물건을 이용한 가격은 행위 태양·위험성이 함께 평가되는 영역입니다.</strong> 가격 횟수·강도 정황이 중요.',
      },
      {
        question: '가해자가 고령이면 처벌이 가벼워지나요?',
        answer:
          '<strong>연령은 양형 사정으로 평가되지만 처벌 자체가 면제되는 영역은 아닙니다.</strong> 합의·치료비 협의가 별개로 진행.',
      },
      {
        question: '안경 파손도 함께 청구할 수 있나요?',
        answer:
          '<strong>파손된 물건은 민사 청구에 포함 검토 영역입니다.</strong> 안경 사진·구입 영수증 정리 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 3. assault-taxi-driver-passenger-route-dispute-mutual-track ───
  // 이 페이지는 택시 기사·승객 경로 시비로 쌍방 폭행 입건된 사람의 블랙박스·정황·방어 준비를 돕는 페이지다.
  {
    domain: 'assault',
    slug: 'assault-taxi-driver-passenger-route-dispute-mutual-track',
    keyword: '택시 기사 승객 경로 시비 쌍방 폭행',
    questionKeyword: '택시 안에서 기사와 경로 문제로 시비가 붙어 서로 잡고 밀치다 쌍방 폭행으로 입건됐어요. 블랙박스가 있는데 어떻게 대응하나요?',
    ctaKeyword: '택시 경로 시비 쌍방 폭행 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '택시 경로 시비 쌍방 폭행 — 5단계 블랙박스·방어 트랙 | 로앤가이드',
      description:
        '택시 안에서 경로 시비로 서로 밀치다 쌍방 폭행 혐의를 받고 있다면 블랙박스·정황·합의 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 늦은 시간 택시에 탑승했는데, 기사가 본인이 안내한 경로와 다른 길로 우회한다고 느껴 잠시 항의했습니다. 대화가 격해지자 기사가 정차 후 본인의 팔을 잡아 흔들었고, 본인도 이를 떼어내며 손을 막아 잡았어요. 잠시 뒤 기사가 \'폭행당했다\'며 신고해 본인도 쌍방 폭행으로 입건되었습니다. 차량 안에는 사방 블랙박스가 있고, 운행 기록과 본인의 호출 앱 기록이 시간대를 뒷받침할 수 있는 상황이에요." 형법 제260조 폭행은 신체에 대한 유형력 행사로 논의되는 영역이지만, 좁은 차량 안에서 누가 먼저 손을 댔는지, 본인의 행위가 방어 의도였는지가 핵심 쟁점이며, 운수업 종사자에 대한 폭력은 특정범죄 가중처벌 등에 관한 법률 영역으로 별도 평가될 수 있는 사정도 정리해둘 필요가 있습니다. 단순폭행은 반의사불벌이지만 가중규정 적용 여부에 따라 합의 효과가 달라지는 영역입니다. 혐의를 받고 있다면 ① 행위 평가 ② 블랙박스 확보 ③ 정당방위 검토 ④ 진술 전략 ⑤ 합의 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 경로 시비 쌍방 폭행 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·증거·정당방위·진술·합의 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 평가</strong> — 좁은 차량 안 선후·강도 = 쌍방·방어 평가.</li>\n<li><strong>② 블랙박스 확보</strong> — 사방 영상·운행 기록·호출 앱 기록.</li>\n<li><strong>③ 정당방위 검토</strong> — 침해 현재성·반격 방어·상당성 평가.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 선후·방어 의도 일관 진술.</li>\n<li><strong>⑤ 합의</strong> — 가중규정 검토 + 처벌불원 협의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 택시 안 사안은 운행 중 운전자 폭력 시 도로 안전과 연결돼 가중규정이 적용될 수 있는 영역입니다. 기사가 먼저 팔을 잡았다는 정황이 블랙박스로 뒷받침되면 정당방위·쌍방성 평가에 영향을 주는 사정이고, 호출 앱 기록은 시간대·경로 다툼을 뒷받침하는 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·정당방위·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 경찰 출석 전 가중규정·정당방위 쟁점 검토.</li>\n<li><strong>2단계 — 블랙박스·앱 기록 확보 (1주 내)</strong> — 차량 블랙박스 + 호출 앱 경로·결제 내역 확보.</li>\n<li><strong>3단계 — 경위 정리 (1~2주)</strong> — 경로 항의·신체 접촉 선후·강도 시간 순 정리.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 침해 현재성·반격 방어 일관 진술.</li>\n<li><strong>5단계 — 합의 + 처분</strong> — 처벌불원·반성문·초범 자료 종합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 경로 시비 쌍방 폭행 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 쌍방성·정당방위·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건 자료·진술 조서</strong></li>\n<li><strong>택시 블랙박스 영상(사방·음성, 보존 요청분)</strong></li>\n<li><strong>호출 앱 경로·결제 내역(시간·경로 입증)</strong></li>\n<li><strong>택시 운행 기록·미터기 자료</strong></li>\n<li><strong>본인 부상 사진(팔·손목)·정형외과 진단서</strong></li>\n<li><strong>합의 협의·합의서·처벌불원서</strong></li>\n<li><strong>본인 반성문·초범 자료·당시 상황 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시 블랙박스는 차량 운영자가 보관하므로 운수회사·기사에 동시에 보존 요청을 두는 것이 안전합니다. 호출 앱 경로는 \'경로 항의\'가 객관적으로 있을 만했는지를 뒷받침하는 자료이고, 본인 부상 사진은 일방 가격 주장을 다투는 데 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선후 관계</strong> — 누가 먼저 신체에 손을 댔는지.</li>\n<li><strong>정당방위</strong> — 침해 현재성·반격 방어·상당성.</li>\n<li><strong>가중규정</strong> — 운행 중 운전자 폭력은 별도 평가 가능.</li>\n<li><strong>경로 정당성</strong> — 우회 항의의 객관 근거.</li>\n<li><strong>반의사불벌·합의</strong> — 처벌불원 의사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위험한 물건 휴대·특수상해 평가 영역',
        summary:
          '대법원 2023도18812(대법원, 2024.06.13 선고) 영역에서 법원은 특수상해죄·특수협박죄의 구성요건 중 위험한 물건을 "휴대하여"의 의미와 그 판단 기준을 정리하면서, 위험한 물건을 현실적으로 손에 쥐고 있는 등 피고인과 그 물건이 반드시 물리적으로 부착되어 있어야 하는 것은 아니고, 범행에 실제로 사용했을 것까지 요구되는 것은 아니라고 판시했습니다. 좁은 택시 안에서 도구·차문이 다툼에 관여된 사안에서도 휴대성·도구성 평가와 일반 폭행·상해의 구분이 가능한 영역으로 검토해볼 수 있습니다.',
        takeaway: '택시 안 쌍방은 블랙박스·운행 기록·도구성 평가 + 정당방위 평가가 핵심 영역 — 영상 확보·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '기사가 먼저 팔을 잡았으면 어떻게 다투나요?',
        answer:
          '<strong>침해 현재성·반격 방어 평가로 정당방위가 검토될 수 있는 영역입니다.</strong> 블랙박스가 결정 자료.',
      },
      {
        question: '운행 중 기사를 가격하면 더 무겁게 보나요?',
        answer:
          '<strong>운행 중 운전자 폭력은 가중규정이 별도로 평가되는 영역입니다.</strong> 운행 상태·정차 여부가 변수.',
      },
      {
        question: '블랙박스는 누구에게 요청하나요?',
        answer:
          '<strong>운수회사·기사·경찰에 동시에 보존을 요청하는 영역입니다.</strong> 보존 기간이 짧아 신속 대응이 중요.',
      },
      {
        question: '경로 항의가 정당했음을 어떻게 보여주나요?',
        answer:
          '<strong>호출 앱 경로·결제 내역으로 객관 근거를 정리하는 영역입니다.</strong> 우회 거리·시간 정황이 자료.',
      },
      {
        question: '합의하면 어떻게 되나요?',
        answer:
          '<strong>단순폭행 부분은 반의사불벌, 가중규정 부분은 합의가 양형 사정으로 평가되는 영역입니다.</strong> 변호인 협의 권장.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '쌍방 폭행 구별', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '정당방위 기준', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 혐의 초기 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },

  // ─── 4. assault-bar-shoulder-bump-stranger-victim-track ───
  // 이 페이지는 술집에서 모르는 사람과 어깨 부딪힘에서 시작된 폭행 피해자의 상해 입증·신고 준비를 돕는 페이지다.
  {
    domain: 'assault',
    slug: 'assault-bar-shoulder-bump-stranger-victim-track',
    keyword: '술집 어깨 부딪힘 모르는 사람 폭행 피해',
    questionKeyword: '술집에서 모르는 사람과 어깨가 부딪혔다가 그 사람이 갑자기 저를 때려 다쳤어요. 주점 CCTV가 있는데 어떻게 대응하나요?',
    ctaKeyword: '술집 어깨 부딪힘 폭행 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '술집 어깨 부딪힘 폭행 피해 — 5단계 주점 CCTV·상해 트랙 | 로앤가이드',
      description:
        '술집에서 모르는 사람과 어깨가 부딪혀 일방적으로 맞아 다쳤다면 CCTV·진단서·고소·배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 술집 통로를 지나가다 모르는 남성과 어깨가 가볍게 부딪혔습니다. 본인이 \'죄송합니다\'라고 말하고 지나가려는데, 상대가 갑자기 본인의 멱살을 잡고 얼굴을 주먹으로 가격해 코뼈에 금이 가고 입술이 찢어졌어요. 전치 3주 진단을 받았고, 매장 천장·계산대 옆 CCTV에 상황이 담겼을 수 있는 상황입니다. 다른 손님과 직원의 목격도 있을 수 있고, 본인이 사과까지 했는데 일방적으로 맞은 정황이라 막막합니다." 형법 제257조는 사람의 신체를 상해한 행위를 다루는 영역이며, 어깨 접촉이 가볍고 본인이 사과까지 한 정황에서 일방적으로 얼굴을 가격당해 전치 3주 상해가 발생한 사안은 폭행·상해로 평가될 소지가 있는 사정입니다. 형사사건에서 상해진단서는 진단 시점이 사건과 근접하고 발급 경위에 신빙성이 있으면 피해자 진술과 함께 유력한 증거가 될 수 있는 영역이며, 매장 CCTV·목격 진술이 함께 결합되면 일방 가격 정황이 입증되는 데 도움이 되는 사정입니다. 피해자라면 ① 상해 평가 ② 증거 보존 ③ 형사 고소 ④ 합의 ⑤ 민사 배상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술집 어깨 부딪힘 폭행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해·증거·고소·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 평가</strong> — 전치 3주 + 얼굴 가격 + 골절 = 상해 평가 가능 영역.</li>\n<li><strong>② 증거 보존</strong> — 주점 CCTV·직원·목격 손님 진술·진단서.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제257조 상해 + 제260조 폭행 고소.</li>\n<li><strong>④ 합의</strong> — 처벌불원 의사 + 합의금 협의.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가벼운 어깨 접촉과 일방적 얼굴 가격은 행위 강도·태양에서 별개로 평가되는 영역입니다. 본인이 사과했다는 정황이 CCTV·음성·목격 진술로 뒷받침되면 일방 가격 주장과 \'쌍방\' 다툼을 가르는 핵심 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정형외과·이비인후과 진단서(전치 3주)·X-ray·치료 기록.</li>\n<li><strong>2단계 — 주점 CCTV 보존 요청 (1주 내)</strong> — 매장에 직접 + 경찰 통해 보존 요청.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 상해 + 폭행 고소장 제출.</li>\n<li><strong>4단계 — 합의 협의 (1~2개월)</strong> — 처벌불원·합의금 산정.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집 어깨 부딪힘 폭행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·증거·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>정형외과·이비인후과 진단서(전치 3주)·X-ray·치료 기록</strong></li>\n<li><strong>주점 CCTV 영상(통로·계산대 구역, 보존 요청분)</strong></li>\n<li><strong>매장 직원 진술서·연락처</strong></li>\n<li><strong>목격 손님 진술서·연락처</strong></li>\n<li><strong>얼굴·코뼈 부상 사진(사건 직후·경과)</strong></li>\n<li><strong>찢어진 의류 사진·세탁 자료</strong></li>\n<li><strong>112 신고 자료·경찰관 현장 확인 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 주점 CCTV는 매장이 직접 운영하므로 사장·점장에게 신속히 보존 요청을 두고, 동시에 경찰에 보존 요청을 병행하는 것이 안전합니다. 어깨 접촉이 가벼웠다는 정황과 본인 사과는 일방 가격 주장을 강화하는 자료이고, 코뼈 골절 등 객관 부상은 합의금 산정에 영향을 주는 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>접촉 정도 vs 가격</strong> — 가벼운 어깨 접촉과 일방 얼굴 가격은 별개 평가.</li>\n<li><strong>쌍방 주장</strong> — 상대의 \'쌍방\' 주장 vs CCTV·사과 정황.</li>\n<li><strong>상해 인과관계</strong> — 코뼈·입술 부상 발생 원인.</li>\n<li><strong>합의금 산정</strong> — 전치 3주 + 골절 + 안면 부상.</li>\n<li><strong>음주 상태 평가</strong> — 가해자 음주는 책임 평가의 한 요소.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 / 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시비 중 일방 가격·상해 평가 영역',
        summary:
          '대법원 2023도10768(대법원, 2023.11.02 선고) 상해 영역에서 법원은 항의·질책으로 시비가 시작되고 멱살을 잡거나 바닥에 넘어뜨리는 등 몸싸움 와중에 가격이 이루어진 사안의 죄수·정황을 정리하며 상해의 인정 기준을 평가했습니다. 술집 통로에서 어깨 부딪힘에서 시작돼 일방이 얼굴을 가격당한 사안에서도 시비의 발단·일방·쌍방 구분과 진단서·CCTV·증인 진술을 함께 종합해 폭행·상해 평가를 검토해볼 수 있습니다.',
        takeaway: '일방 얼굴 가격 + 골절 + 근접 진단서 결합 시 폭행·상해 평가 영역 — 매장 CCTV 보존 후 고소·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 어깨 부딪힐 때 사과한 게 입증되나요?',
        answer:
          '<strong>매장 CCTV 음성·목격 진술로 입증할 수 있는 영역입니다.</strong> 보존 요청이 핵심.',
      },
      {
        question: '상대가 \'쌍방\'이라고 우기면 어떻게 되나요?',
        answer:
          '<strong>CCTV·접촉 강도·사과 정황을 종합해 다투는 영역입니다.</strong> 일방 가격임을 객관 자료로 입증.',
      },
      {
        question: '주점 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>매장에 직접 + 경찰 통해 동시에 보존 요청하는 영역입니다.</strong> 덮어쓰기 전 신속 대응이 중요.',
      },
      {
        question: '코뼈 골절이면 형사 처벌이 더 무거워지나요?',
        answer:
          '<strong>상해 정도·부위는 양형에 반영되는 영역입니다.</strong> 골절은 비교적 무거운 평가가 가능한 사정.',
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
      { label: '치료비 청구 시점', href: '/guide/assault/assault-medical-cost-timeline' },
      { label: '합의금 산정 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 5. dui-parking-lot-private-property-movement-track ───
  // 이 페이지는 사유 주차장 내 단거리 음주 이동으로 입건된 운전자의 도로성·운전성 방어 준비를 돕는 페이지다.
  {
    domain: 'dui',
    slug: 'dui-parking-lot-private-property-movement-track',
    keyword: '사유 주차장 단거리 음주운전 방어',
    questionKeyword: '사유지 주차장 안에서 차를 잠깐 옮기다 음주운전으로 입건됐어요. 도로가 아닌데도 처벌 대상인지 어떻게 다투나요?',
    ctaKeyword: '사유 주차장 단거리 음주운전 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '사유 주차장 단거리 음주운전 — 5단계 도로성·운전성 트랙 | 로앤가이드',
      description:
        '사유 주차장에서 단거리 이동만 했는데 음주운전으로 입건돼 걱정된다면 도로성·운전성·측정 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 식당 회식 후 차량 자리를 옮기려고 사유지 주차장 안에서 몇 미터만 차를 움직였습니다. 그러나 경찰관이 출동해 음주측정을 했고 처벌기준치를 넘긴 수치가 나와 도로교통법 위반(음주운전)으로 입건되었어요. 본인은 \'도로가 아닌 사유지였고 거리도 짧았는데 처벌 대상인지\'가 막막한 상황입니다. 차량 블랙박스에는 이동 거리와 정차 위치가 담겨 있을 수 있어요." 도로교통법 제2조와 제44조는 \'도로\'와 \'운전\'의 의미를 정하는 영역인데, 도로교통법상 음주운전은 \'도로\'에서의 운전뿐 아니라 일부 조항은 \'도로 외 곳\'에서도 적용되는 영역으로 정리되어 있고, 단속·측정 시점의 혈중알코올농도와 운전 시점의 농도 사이 간격·상승기 여부도 함께 평가되는 사정입니다. 또한 측정 절차의 적법성도 함께 검토될 수 있습니다. 혐의를 받고 있다면 ① 도로성 평가 ② 운전성 평가 ③ 측정 절차 ④ 진술 전략 ⑤ 양형·재발 방지 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사유 주차장 단거리 음주운전 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로성·운전성·측정·진술·양형 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도로성 평가</strong> — 일반 출입 가능성·관리 상태 등 도로성 판단 요소.</li>\n<li><strong>② 운전성 평가</strong> — 거리·시동·기어 조작·이동 의도.</li>\n<li><strong>③ 측정 절차</strong> — 호흡측정·재측정·혈액 채취 기회.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 사실관계 일관 진술.</li>\n<li><strong>⑤ 양형·재발 방지</strong> — 교육·치료·반성 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도로교통법은 음주운전 처벌 조항을 \'도로 외 곳\'에서도 적용하는 영역이 있어, 사유지라는 사정만으로 처벌 대상에서 곧바로 벗어나기는 어려운 사정입니다. 단속·측정 시점과 운전 시점의 시간 간격·상승기 여부, 측정 절차의 적법성 평가가 방어의 핵심 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·진술·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 도로성·운전성·측정 절차 쟁점 검토.</li>\n<li><strong>2단계 — 블랙박스·현장 자료 확보 (1주 내)</strong> — 이동 거리·시각·주차장 출입 정황.</li>\n<li><strong>3단계 — 측정 절차 검토 (병행)</strong> — 호흡측정·재측정 기회·시간 간격 정리.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 사실관계 일관 진술.</li>\n<li><strong>5단계 — 양형·행정 병행</strong> — 교육·치료·반성 자료 + 면허 처분 별도 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사유 주차장 단거리 음주운전 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로성·측정·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주측정 결과지·단속 보고서</strong></li>\n<li><strong>차량 블랙박스 영상(이동 거리·시각)</strong></li>\n<li><strong>주차장 출입·관리 상태 자료(일반 출입 가능 여부)</strong></li>\n<li><strong>음주 종료 시각·식당 영수증·결제 내역</strong></li>\n<li><strong>변호인 의견서·측정 절차 검토 자료</strong></li>\n<li><strong>음주운전 예방 교육·치료 이수증</strong></li>\n<li><strong>반성문·재발 방지 다짐서·자원봉사 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사유지·단거리 사안은 \'도로성\'과 \'운전성\'을 별개로 평가하는 자료가 핵심입니다. 블랙박스로 이동 거리·기어 조작 여부를 확인하고, 식당 영수증으로 음주 종료 시각을 특정하면 측정 시점과의 간격·상승기 평가에 도움이 되는 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로성</strong> — 일반 출입 가능성·관리 상태 평가.</li>\n<li><strong>운전성</strong> — 거리·시동·기어 조작·이동 의도.</li>\n<li><strong>측정 절차</strong> — 호흡·재측정·혈액 채취 기회.</li>\n<li><strong>상승기 평가</strong> — 운전·측정 시점 간격과 농도 변화.</li>\n<li><strong>형사·행정 분리</strong> — 형사와 면허 처분 별도 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>국민권익위원회 중앙행정심판위원회 110</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운전 시점 혈중알코올농도 평가 영역',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 음주운전 영역에서 법원은 운전 시점과 측정 시점 사이에 시간 간격이 있고 상승기로 보인다는 사정만으로 처벌기준치 초과 증명이 불가능하다고 단정할 수 없으며, 운전과 측정 사이 시간 간격·측정치와 기준치 차이·음주 지속 시간 및 음주량·단속 당시 행동 양상 등을 종합해 논리와 경험칙에 따라 판단해야 한다고 판시했습니다. 사유 주차장 단거리 이동 사안에서도 운전 시점 농도·도로성·운전성을 함께 검토해볼 수 있습니다.',
        takeaway: '단거리·사유지 음주는 도로성·운전성·측정 절차·상승기 평가가 핵심 방어 영역 — 블랙박스 확보·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사유지인데도 음주운전이 되나요?',
        answer:
          '<strong>도로교통법은 일부 조항을 \'도로 외 곳\'에도 적용하는 영역이 있어 사정만으로 면제되긴 어려운 사정입니다.</strong> 도로성·운전성 평가가 관건.',
      },
      {
        question: '몇 미터만 움직여도 \'운전\'인가요?',
        answer:
          '<strong>시동·기어 조작·이동 의도 등을 종합해 평가되는 영역입니다.</strong> 거리만으로 판단하지 않음.',
      },
      {
        question: '측정 절차에 문제가 있으면 다툴 수 있나요?',
        answer:
          '<strong>측정 방법·재측정 기회·혈액 채취 기회 등은 절차 적법성 평가 영역입니다.</strong> 변호인 검토 권장.',
      },
      {
        question: '음주 종료 시각이 중요한 이유는요?',
        answer:
          '<strong>운전·측정 시점 농도 추정 평가에 영향을 주는 사정입니다.</strong> 영수증·결제 내역 보존 권장.',
      },
      {
        question: '면허 처분은 따로 진행되나요?',
        answer:
          '<strong>형사 절차와 면허 행정처분은 별개로 진행되는 영역입니다.</strong> 행정심판은 처분 안 날부터 90일 내.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판', href: '/guide/dui/dui-administrative-appeal' },
      { label: '음주측정 거부 대응', href: '/guide/dui/dui-refusal-defense' },
      { label: '음주운전 형사 절차', href: '/guide/dui/dui-criminal-procedure' },
      { label: '면허 정지·취소 처분', href: '/guide/dui/dui-license-suspension-revocation' },
      { label: '음주운전 양형 자료', href: '/guide/dui/dui-sentencing-mitigation' },
    ],
  },

  // ─── 6. dui-medication-mouthwash-residual-alcohol-defense-track ───
  // 이 페이지는 감기약·구강세정제 잔여 알코올로 음주측정에 걸린 운전자의 측정·재측정 방어 준비를 돕는 페이지다.
  {
    domain: 'dui',
    slug: 'dui-medication-mouthwash-residual-alcohol-defense-track',
    keyword: '감기약 구강세정제 잔여 알코올 음주측정',
    questionKeyword: '술을 마시지 않고 감기약·구강세정제만 썼는데 음주측정에서 수치가 나왔어요. 잔여 알코올 가능성을 어떻게 다투나요?',
    ctaKeyword: '감기약 구강세정제 잔여 알코올 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '감기약 구강세정제 잔여 알코올 — 5단계 측정·재측정 트랙 | 로앤가이드',
      description:
        '술을 마시지 않았는데 감기약·구강세정제 잔여 알코올로 음주측정 수치가 나와 걱정된다면 측정·재측정·신빙성 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 평소처럼 감기약을 복용하고 구강세정제로 입을 헹군 뒤 차를 운전했는데, 단속 호흡측정에서 음주 수치가 나와 도로교통법 위반(음주운전)으로 입건되었습니다. 본인은 음주를 한 사실이 전혀 없고, 측정 직전 입안 잔여 알코올이 영향을 줬을 가능성이 큰 상황이에요. 측정 직전 입안 헹굼·일정 시간 대기·재측정·혈액 채취 같은 절차가 제대로 보장됐는지가 막막하고, 차량 블랙박스에는 측정 전후 정황이 담겨 있을 수 있습니다." 도로교통법 제44조는 술에 취한 상태에서의 운전을 금지하는 영역이지만, 처벌기준치 초과 사실은 합리적 의심이 없을 정도의 증명을 요구하며, 측정 직전 입안 잔여 알코올 가능성은 측정 절차의 적정성 평가에서 함께 논의될 수 있는 영역입니다. 또한 호흡측정 결과의 정확성을 다투기 위한 혈액 채취 등 재측정 기회 보장도 절차의 일부로 평가되는 사정입니다. 혐의를 받고 있다면 ① 측정 절차 검토 ② 재측정 기회 ③ 잔여 알코올 가능성 ④ 진술 전략 ⑤ 양형·재발 방지 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 감기약 구강세정제 잔여 알코올 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 절차·재측정·잔여·진술·양형 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 절차 검토</strong> — 입안 헹굼·대기 시간·측정 방법·기기 작동.</li>\n<li><strong>② 재측정 기회</strong> — 호흡측정 후 혈액 채취 등 재측정 안내 여부.</li>\n<li><strong>③ 잔여 알코올 가능성</strong> — 감기약·구강세정제 성분·사용 시각·운전 직전 정황.</li>\n<li><strong>④ 진술 전략</strong> — 변호인 자문 + 사실관계 일관 진술.</li>\n<li><strong>⑤ 양형·재발 방지</strong> — 교육·치료·반성 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 호흡측정 수치만으로 처벌기준치 초과를 단정하기 어렵고, 측정 절차의 적정성·재측정 기회 보장·구강 잔여 알코올 가능성을 함께 평가하는 영역입니다. 합리적 의심이 없을 정도의 증명을 다투는 방어가 핵심 트랙이며, 객관 자료 확보가 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·증거·재측정·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 측정 절차·재측정 쟁점 검토.</li>\n<li><strong>2단계 — 약품·세정제 자료 확보 (1주 내)</strong> — 감기약·구강세정제 종류·성분·구매·복용 시각.</li>\n<li><strong>3단계 — 블랙박스·정황 확보 (병행)</strong> — 측정 전후 정황·이동 거리·시각.</li>\n<li><strong>4단계 — 경찰 진술 (1~2개월)</strong> — 사실관계 일관 진술·재측정 절차 의문 정리.</li>\n<li><strong>5단계 — 양형·행정 병행</strong> — 교육·반성 자료 + 면허 처분 별도 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">감기약·구강세정제 잔여 알코올 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정·잔여·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주측정 결과지·단속 보고서</strong></li>\n<li><strong>감기약·구강세정제 제품·성분 자료(에탄올 포함 여부)</strong></li>\n<li><strong>약품 구매·복용 시각 자료(처방전·결제 내역)</strong></li>\n<li><strong>차량 블랙박스 영상(측정 전후 정황)</strong></li>\n<li><strong>음주 사실 없음을 뒷받침할 일정 자료</strong></li>\n<li><strong>변호인 의견서·측정 절차 검토 자료</strong></li>\n<li><strong>반성문·재발 방지 자료(예방 차원)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잔여 알코올 가능성은 약품·세정제의 성분·복용 시각·측정 시각 사이의 관계를 객관 자료로 정리할 때 설득력이 커집니다. 측정 직전 입안 헹굼 안내가 있었는지, 재측정 기회 안내가 있었는지도 함께 정리하는 것을 권장합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정 절차 적정성</strong> — 입안 헹굼·대기·기기 작동 평가.</li>\n<li><strong>재측정 기회</strong> — 혈액 채취 등 재측정 안내 여부.</li>\n<li><strong>잔여 알코올</strong> — 약품·세정제 성분과 측정 시점 관계.</li>\n<li><strong>합리적 의심</strong> — 처벌기준치 초과 증명력 평가.</li>\n<li><strong>형사·행정 분리</strong> — 형사와 면허 처분 별도 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>국민권익위원회 중앙행정심판위원회 110</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 절차의 적법성 평가 영역',
        summary:
          '대법원 2025도6752(대법원, 2025.12.11 선고) 음주운전 영역에서 법원은 수사기관이 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입해 물리력이나 강제력 없이 피의자를 찾는 것은 임의수사의 한 방법으로서 허용되고 영장 없이 이루어졌다고 위법하다고 볼 수 없으며, 이어진 음주측정 역시 적법할 수 있다고 판시했습니다. 잔여 알코올을 다투는 사안에서도 측정 절차의 적정성과 재측정 기회 보장을 함께 평가해볼 수 있습니다.',
        takeaway: '잔여 알코올 방어는 측정 절차·재측정 기회·약품 성분 입증이 핵심 영역 — 객관 자료 확보·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '구강세정제만으로도 음주측정 수치가 나오나요?',
        answer:
          '<strong>일부 제품에 포함된 에탄올이 측정에 영향을 줄 수 있는 영역입니다.</strong> 입안 헹굼·대기 시간이 변수.',
      },
      {
        question: '재측정을 요구하지 못했어도 다툴 수 있나요?',
        answer:
          '<strong>재측정 기회 안내 여부와 절차 적법성을 함께 검토하는 영역입니다.</strong> 단속 보고서 확인 권장.',
      },
      {
        question: '감기약 성분도 영향을 주나요?',
        answer:
          '<strong>일부 시럽·드링크에 알코올 성분이 포함된 사례가 있는 영역입니다.</strong> 제품 라벨·성분표 확보가 핵심.',
      },
      {
        question: '음주 사실이 없다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>일정 자료·동행자 진술·구매 내역 등으로 객관 정황을 정리하는 영역입니다.</strong> 시간 순 정리가 중요.',
      },
      {
        question: '면허 처분은 따로 다투나요?',
        answer:
          '<strong>형사와 행정처분은 별개로 진행되는 영역입니다.</strong> 행정심판은 처분 안 날부터 90일 내.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부 대응', href: '/guide/dui/dui-refusal-defense' },
      { label: '음주운전 형사 절차', href: '/guide/dui/dui-criminal-procedure' },
      { label: '음주운전 행정심판', href: '/guide/dui/dui-administrative-appeal' },
      { label: '면허 정지·취소 처분', href: '/guide/dui/dui-license-suspension-revocation' },
      { label: '음주운전 양형 자료', href: '/guide/dui/dui-sentencing-mitigation' },
    ],
  },

  // ─── 7. dui-disabled-license-revocation-livelihood-appeal-track ───
  // 이 페이지는 장애인 운전자가 음주측정 거부·면허취소 후 생계 행정심판 구제 준비를 돕는 페이지다.
  {
    domain: 'dui',
    slug: 'dui-disabled-license-revocation-livelihood-appeal-track',
    keyword: '장애인 음주 면허취소 행정심판',
    questionKeyword: '장애인 운전자인데 음주 면허취소 처분을 받았어요. 생계 운전이 절실한데 행정심판으로 구제받으려면 무엇을 준비하나요?',
    ctaKeyword: '장애인 음주 면허취소 행정심판 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '장애인 음주 면허취소 행정심판 — 5단계 90일 소명 트랙 | 로앤가이드',
      description:
        '장애인 운전자가 음주 면허취소로 생계가 흔들리고 있다면 청구·소명·감경 5가지 구제 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 신체적 어려움 때문에 차량 운전이 일상·출퇴근·치료 통원에 절실한 장애인 운전자입니다. 한순간의 잘못된 판단으로 음주 단속에 걸려 면허취소 처분 통지를 받았는데, 면허가 취소되면 출퇴근·병원 이동·가족 부양이 모두 어려워지는 상황이에요. 행정심판으로 구제·감경을 받을 수 있는지, 어떤 자료를 어떻게 준비해야 하는지가 막막합니다. 통지서에는 \'처분에 불복하면 정해진 기간 안에 행정심판을 청구할 수 있다\'고 안내돼 있어요." 도로교통법 제44조·제93조는 음주운전에 따른 면허취소 처분의 영역을 정하고, 행정심판법은 처분에 불복하는 절차를 정하는 영역이며, 면허취소 처분은 형사처벌과 별개로 진행되고 처분을 안 날부터 90일·있은 날부터 180일 이내에 행정심판을 청구하는 것으로 안내되고 있습니다. 처분 통지 자체를 받지 않은 경우와는 별개 영역으로, 통지 후 인식 여부도 함께 평가되는 사정입니다. ① 처분 확인 ② 청구 기간 ③ 생계 소명 ④ 형사 병행 ⑤ 재발 방지 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 장애인 음주 면허취소 행정심판 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분·기간·생계·형사·재발 방지 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 확인</strong> — 면허취소 처분서·수치·결격 기간 확인.</li>\n<li><strong>② 청구 기간</strong> — 처분 안 날부터 90일·있은 날부터 180일 이내.</li>\n<li><strong>③ 생계 소명</strong> — 장애 정도·출퇴근·치료 통원·부양 자료 정리.</li>\n<li><strong>④ 형사 병행</strong> — 음주운전 형사 절차와 별개 진행.</li>\n<li><strong>⑤ 재발 방지</strong> — 교육 이수·치료·자원봉사 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면허취소 행정심판은 처분의 위법·부당, 재량 일탈·남용을 다투는 절차로 무조건 구제되는 영역은 아닙니다. 장애·생계 사정과 재발 방지 노력을 객관 자료로 정리해 제출하면 감경 가능성을 검토하는 데 도움이 되는 사정이며, 청구 기간을 넘기지 않는 것이 가장 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 중앙행정심판위원회·도로교통공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분서 확인·자문 (즉시)</strong> — 면허취소 처분서·수치·결격 기간 + 변호인 자문.</li>\n<li><strong>2단계 — 행정심판 청구 (처분 안 날부터 90일 내)</strong> — 청구서·청구 이유·소명 자료 제출.</li>\n<li><strong>3단계 — 생계 소명 보강 (청구 후)</strong> — 장애 등록증·치료 통원·출퇴근·부양 자료 보완.</li>\n<li><strong>4단계 — 재결 (통상 수개월)</strong> — 위원회 심리·재결로 인용·기각·감경 안내.</li>\n<li><strong>5단계 — 형사 병행 (1~3개월)</strong> — 음주운전 형사 절차와 별개 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">장애인 음주 면허취소 행정심판 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구·소명·재발 방지 갈래입니다.</strong></p>\n<ul>\n<li><strong>면허취소 처분 통지서·음주측정 결과지</strong></li>\n<li><strong>행정심판 청구서(처분 안 날부터 90일 내)</strong></li>\n<li><strong>장애인 등록증·복지카드·진단서</strong></li>\n<li><strong>출퇴근·치료 통원·가족 부양 자료(재직증명·진료 기록)</strong></li>\n<li><strong>반성문·재발 방지 다짐서</strong></li>\n<li><strong>음주운전 예방 교육·치료 프로그램 이수증</strong></li>\n<li><strong>형사 사건 진행 자료(별개 진행)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 장애 사유는 단순한 호소보다 등록증·복지카드·진단서·진료 기록 같은 객관 자료로 정리하는 것이 소명에 도움이 되는 사정입니다. 운전이 일상·치료·부양에 어떻게 직접 연결되는지를 시간표·이동 거리와 함께 정리하면 재량 판단에 영향을 주는 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>청구 기간</strong> — 처분 안 날부터 90일·있은 날부터 180일.</li>\n<li><strong>재량 일탈·남용</strong> — 처분이 과도한지 여부.</li>\n<li><strong>장애·생계</strong> — 등록·치료·부양 소명.</li>\n<li><strong>처분 통지·인식</strong> — 통지 수령·인식 여부.</li>\n<li><strong>재발 방지</strong> — 교육·치료·반성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위원회 중앙행정심판위원회 110</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>장애인 차별 상담 1577-1330</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면허취소 인식 여부와 무면허운전 평가 영역',
        summary:
          '대법원 2017도14160(대법원, 2017.12.13 선고) 영역에서 법원은 무면허운전을 처벌하는 도로교통법 위반의 죄는 고의범이며, 기존의 운전면허가 취소된 상태에서 자동차를 운전했더라도 운전자가 면허취소 사실을 인식하지 못한 경우에는 무면허운전죄가 성립하지 않는다고 판시하면서, 운전면허취소처분 통지를 받은 경우 원칙적으로 면허취소 사실을 인식한 것으로 평가될 수 있다고 정리했습니다. 면허취소 처분 통지 후 행정심판으로 구제·감경을 검토하는 사안에서도 통지 수령·인식 시점이 함께 평가되는 영역입니다.',
        takeaway: '장애인 음주 면허취소 구제는 청구 기간·생계 소명·재발 방지가 핵심 영역 — 90일 내 청구·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '장애인이라도 음주 면허취소가 그대로 적용되나요?',
        answer:
          '<strong>처분 자체는 동일하게 적용되지만 행정심판에서 사정으로 평가될 수 있는 영역입니다.</strong> 객관 자료가 핵심.',
      },
      {
        question: '청구 기간을 넘기면 어떻게 되나요?',
        answer:
          '<strong>각하될 수 있는 영역입니다.</strong> 처분 안 날부터 90일·있은 날부터 180일 내 청구.',
      },
      {
        question: '생계 소명은 어떻게 정리하나요?',
        answer:
          '<strong>장애 등록·치료 통원·출퇴근·부양 자료를 객관적으로 묶는 영역입니다.</strong> 시간표·거리 자료가 도움.',
      },
      {
        question: '형사 결과가 영향을 주나요?',
        answer:
          '<strong>형사와 행정은 별개로 진행되지만 양형 자료·교육 이수는 행정심판에서도 참고가 되는 영역입니다.</strong> 함께 정리 권장.',
      },
      {
        question: '인용되면 면허가 바로 복원되나요?',
        answer:
          '<strong>재결 내용에 따라 정지·감경·인용 등 결과가 달라지는 영역입니다.</strong> 재결문 확인 후 후속 절차 진행.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판', href: '/guide/dui/dui-administrative-appeal' },
      { label: '면허 정지·취소 처분', href: '/guide/dui/dui-license-suspension-revocation' },
      { label: '음주운전 양형 자료', href: '/guide/dui/dui-sentencing-mitigation' },
      { label: '음주운전 형사 절차', href: '/guide/dui/dui-criminal-procedure' },
      { label: '음주측정 거부 대응', href: '/guide/dui/dui-refusal-defense' },
    ],
  },

  // ─── 8. jeonse-fraud-multi-rental-villa-king-deposit-claim-track ───
  // 이 페이지는 다세대 빌라왕(다주택자)에게 보증금 미반환 피해를 입은 임차인의 HUG·임차권등기·소송 준비를 돕는 페이지다.
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-multi-rental-villa-king-deposit-claim-track',
    keyword: '다세대 빌라왕 보증금 미반환',
    questionKeyword: '집주인이 빌라 수십 채를 가진 다주택자였는데 보증금을 안 돌려줘요. HUG 보증·임차권등기·소송을 어떻게 진행하나요?',
    ctaKeyword: '다세대 빌라왕 보증금 미반환 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다세대 빌라왕 보증금 미반환 — 5단계 HUG·등기·소송 트랙 | 로앤가이드',
      description:
        '집주인이 다세대를 다수 보유한 다주택자라 보증금을 못 받고 있다면 보증·등기·소송 5가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 다세대 빌라에 전세로 입주해 살아왔는데, 계약 기간이 끝나도록 집주인이 보증금을 돌려주지 않습니다. 알고 보니 집주인이 같은 지역에서 수십 채의 빌라를 보유한 다주택자였고, 다수의 임차인이 같은 피해를 호소하는 상황이에요. 본인은 HUG 전세금반환보증에 가입돼 있는지, 임차권등기 명령은 어떻게 신청하는지, 소송은 어디까지 가야 하는지가 막막합니다. 이사 일정과 다음 집 보증금 문제도 함께 얽혀 있어요." 주택임대차보호법은 대항력·우선변제권을 인정하는 영역이며, HUG 전세금반환보증에 가입한 경우에는 보증사가 집주인을 대신해 보증금을 먼저 돌려주는 보증이행 절차가 안내되고 있습니다. 또한 임차권등기명령은 임대차 종료 후 보증금 미반환 시 대항력·우선변제권을 유지하면서 이사 가는 데 도움이 되는 절차로 정리됩니다. 피해자라면 ① 권리관계 확인 ② HUG 보증이행 ③ 임차권등기 ④ 보증금 반환 소송 ⑤ 강제집행 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다세대 빌라왕 보증금 미반환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리·보증·등기·소송·집행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계 확인</strong> — 등기부·대항력·우선변제권·보증 가입 여부.</li>\n<li><strong>② HUG 보증이행</strong> — 가입 시 보증사 대위변제 청구 영역.</li>\n<li><strong>③ 임차권등기</strong> — 종료 후 대항력·우선변제권 유지 + 이사.</li>\n<li><strong>④ 보증금 반환 소송</strong> — 임대인 상대 지급명령·본안 소송.</li>\n<li><strong>⑤ 강제집행</strong> — 부동산 경매·채권 압류 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다주택 임대인 사안은 다수 임차인이 동시에 권리를 주장해 배당 비율·순위가 핵심 변수입니다. 본인의 대항력·우선변제권을 유지하기 위해 임차권등기명령을 활용하고, HUG 보증에 가입돼 있으면 보증이행 청구를 먼저 검토할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. HUG·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부·보증 확인 (즉시)</strong> — 등기부등본·근저당·전세권·HUG 보증 가입 여부.</li>\n<li><strong>2단계 — HUG 보증이행 청구 (보증 종료 후)</strong> — 보증 약관에 따른 이행청구 서류 제출.</li>\n<li><strong>3단계 — 임차권등기명령 (계약 종료 후)</strong> — 관할 법원에 신청, 등기 완료 후 이사.</li>\n<li><strong>4단계 — 보증금 반환 소송 (병행)</strong> — 지급명령 → 본안 소송.</li>\n<li><strong>5단계 — 강제집행 (판결 후)</strong> — 부동산 경매·채권 압류.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다세대 빌라왕 보증금 미반환 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기·보증·소송 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·중개대상물 확인·설명서</strong></li>\n<li><strong>주택 등기부등본(근저당·전세권 등 권리관계)</strong></li>\n<li><strong>주민등록등본(전입신고 시점)·확정일자 자료</strong></li>\n<li><strong>HUG 전세금반환보증 증서·약관</strong></li>\n<li><strong>보증금 입금 자료·통장 사본</strong></li>\n<li><strong>임차권등기명령 신청서·등기부등본(등기 후)</strong></li>\n<li><strong>임대인 연락 내역·내용증명·문자 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다주택 임대인 사안은 우선 임차권등기명령으로 본인의 대항력·우선변제권을 보호한 뒤 이사·HUG 청구를 진행하는 것이 안전합니다. 등기부의 선순위 채권·전세권을 정리해두면 회수 가능성과 순위 검토에 도움이 되는 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항력·우선변제권 유지</strong> — 임차권등기 전 이사로 권리 상실 위험.</li>\n<li><strong>보증 가입 여부</strong> — HUG 보증 미가입 시 회수 트랙 차이.</li>\n<li><strong>선순위 채권</strong> — 근저당·전세권 순위에 따른 배당.</li>\n<li><strong>임대인 연락두절</strong> — 송달·공시송달 절차.</li>\n<li><strong>다수 임차인</strong> — 동시 권리 주장 시 배당 비율.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>주택임대차분쟁조정위원회</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대항력·우선변제권 유지 요건 평가 영역',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 보증금 영역에서 법원은 주택임대차보호법 제3조 제1항의 주민등록은 대항력의 취득 시뿐 아니라 유지를 위해서도 계속 존속해야 하고, 임차권을 매개로 한 점유임을 제3자가 인식할 수 있는 정도가 되어야 한다고 판시했습니다. 다세대 다주택 임대인 사안에서도 본인의 대항력·우선변제권을 유지하기 위해 임차권등기명령을 활용한 뒤 이사 절차를 진행하는 회수 트랙을 검토해볼 수 있습니다.',
        takeaway: '다주택 임대인 회수는 임차권등기·HUG 보증·우선변제권 순위 평가가 핵심 영역 — 등기 후 이사·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: 'HUG 보증에 가입돼 있으면 얼마나 받을 수 있나요?',
        answer:
          '<strong>약관에서 정한 보증금액·면책 사유에 따라 평가되는 영역입니다.</strong> 사례에 따라 다르지만 약관 확인이 출발점.',
      },
      {
        question: '임차권등기 전에 이사 가도 되나요?',
        answer:
          '<strong>등기 전 이사·전출은 대항력·우선변제권 상실 위험 영역입니다.</strong> 등기 완료 후 이사 권장.',
      },
      {
        question: '다른 임차인과 배당 순위는 어떻게 정해지나요?',
        answer:
          '<strong>확정일자·전입신고 시점 등 우선변제권 순위로 평가되는 영역입니다.</strong> 등기부와 함께 정리 권장.',
      },
      {
        question: '임대인과 연락이 안 되면 소송은 어떻게 하나요?',
        answer:
          '<strong>송달·공시송달 절차를 통해 진행하는 영역입니다.</strong> 지급명령부터 검토.',
      },
      {
        question: '판결 후에도 회수가 안 되면요?',
        answer:
          '<strong>부동산 경매·채권 압류 등 강제집행으로 이어지는 영역입니다.</strong> 회수 가능성은 사건마다 다른 사정.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 피해 대응', href: '/guide/jeonse-fraud/jeonse-fraud-victim-where-to-start' },
      { label: 'HUG 보증이행 청구', href: '/guide/jeonse-fraud/hug-guarantee-claim-procedure' },
      { label: '임차권등기명령 절차', href: '/guide/jeonse-fraud/jeonse-rental-right-registration' },
      { label: '보증금 반환 소송', href: '/guide/jeonse-fraud/deposit-return-lawsuit' },
      { label: '다주택 임대인 회수', href: '/guide/jeonse-fraud/jeonse-multi-rental-owner-recovery' },
    ],
  },

  // ─── 9. jeonse-fraud-sublease-original-tenant-vanish-recovery-track ───
  // 이 페이지는 전대차에서 원임차인이 잠적·연락두절된 전차인의 법적 지위·임대인 직접 청구 준비를 돕는 페이지다.
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-sublease-original-tenant-vanish-recovery-track',
    keyword: '전대차 원임차인 잠적 보증금 회수',
    questionKeyword: '전대차로 들어왔는데 원임차인이 보증금을 가지고 잠적했어요. 임대인에게 직접 보증금을 청구할 수 있나요?',
    ctaKeyword: '전대차 원임차인 잠적 보증금 회수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전대차 원임차인 잠적 보증금 회수 — 5단계 법적 지위·청구 트랙 | 로앤가이드',
      description:
        '전대차로 들어왔는데 원임차인이 잠적해 보증금을 못 돌려받게 됐다면 임대인 청구·법적 지위 5가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 비교적 저렴하고 빨리 입주할 수 있다고 해서 다른 사람이 임차하고 있던 집을 전대차 형식으로 빌려 들어왔습니다. 그런데 계약 만기 무렵 원임차인이 보증금을 가지고 연락이 끊긴 채 잠적했어요. 임대인은 \'본인과는 직접 계약하지 않았다\'며 보증금 반환을 거절하고 있고, 등기부·계약 구조도 복잡해서 본인이 어떤 법적 지위에 있는지가 막막한 상황입니다. 다음 이사 일정과 함께 보증금을 어디서 어떻게 회수해야 하는지가 가장 걱정입니다." 민법 제629조는 임차인의 무단 전대 시 임대인이 계약을 해지할 수 있는 영역을 정하고, 임대인의 동의를 받은 전대차의 경우에는 전차인이 임대인에게 일정한 의무를 직접 부담하는 영역으로 정리됩니다. 즉 임대인 동의 여부에 따라 전차인이 임대인에게 직접 권리 행사할 수 있는 범위가 달라지고, 동의 없는 무단 전대는 임대인 입장에서 별도 평가되는 영역입니다. 피해자라면 ① 동의 여부 확인 ② 권리관계 정리 ③ 임대인 청구 ④ 원임차인 형사·민사 ⑤ 이사·등기 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전대차 원임차인 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의·권리·청구·형사·이사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동의 여부 확인</strong> — 임대인의 전대 동의 유무 = 전차인 권리 범위 결정.</li>\n<li><strong>② 권리관계 정리</strong> — 등기부·원 임대차·전대차 계약서 확인.</li>\n<li><strong>③ 임대인 청구</strong> — 동의 전대 시 직접 권리·우선변제권 검토.</li>\n<li><strong>④ 원임차인 형사·민사</strong> — 보증금 횡령·사기·민사 청구 검토.</li>\n<li><strong>⑤ 이사·등기</strong> — 임차권등기명령·이사 후속.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인의 동의가 있는 전대차인지 무단 전대인지에 따라 전차인이 임대인에게 행사할 수 있는 권리 범위가 달라지는 영역입니다. 원임차인이 잠적했더라도 동의 여부와 계약 구조에 따라 임대인에 대한 직접 청구가 검토될 수 있어, 계약서·동의 정황 자료가 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의 확인·청구·형사·이사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·동의 자료 정리 (즉시)</strong> — 원 임대차·전대차 계약서·임대인 동의서·메시지.</li>\n<li><strong>2단계 — 권리관계 분석 (1주 내)</strong> — 등기부·대항력·우선변제권 평가 + 변호인 자문.</li>\n<li><strong>3단계 — 임대인·원임차인 청구 (1개월 내)</strong> — 내용증명·지급명령 검토.</li>\n<li><strong>4단계 — 형사 신고 (병행)</strong> — 원임차인 횡령·사기 신고 검토.</li>\n<li><strong>5단계 — 임차권등기·이사 (필요 시)</strong> — 가능한 범위에서 등기명령 신청 후 이사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">전대차 원임차인 잠적 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의·권리·형사 갈래입니다.</strong></p>\n<ul>\n<li><strong>원 임대차 계약서(임대인-원임차인) 사본</strong></li>\n<li><strong>전대차 계약서(원임차인-본인)·중개대상물 자료</strong></li>\n<li><strong>임대인 전대 동의서·메시지·정황 자료</strong></li>\n<li><strong>주택 등기부등본(권리관계)</strong></li>\n<li><strong>보증금 입금 자료·통장 사본</strong></li>\n<li><strong>원임차인 잠적·연락두절 정황 자료</strong></li>\n<li><strong>내용증명·문자·통화 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인 동의 정황은 별도 동의서가 없더라도 메시지·통화·정황 자료로 입증을 시도해볼 수 있는 영역입니다. 동의 여부에 따라 임대인에 대한 직접 청구·우선변제권 범위가 달라져 자료 정리가 가장 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대인 동의</strong> — 동의 전대 vs 무단 전대 구분.</li>\n<li><strong>전차인 법적 지위</strong> — 임대인에 대한 직접 권리 범위.</li>\n<li><strong>원임차인 형사</strong> — 횡령·사기 평가 가능 영역.</li>\n<li><strong>대항력·우선변제권</strong> — 전입·확정일자 시점.</li>\n<li><strong>중개인 책임</strong> — 권리관계 설명 의무 위반 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>주택임대차분쟁조정위원회</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 중개 시 선순위 보증금 설명 의무 평가 영역',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 다가구주택 일부 임대차계약을 중개한 공인중개사는 선순위 임대차보증금채권이 얼마나 있을 수 있는지 조사·확인해 임차의뢰인에게 성실하게 설명해야 하고, 고의·과실로 이러한 의무를 위반해 임차의뢰인에게 손해가 발생하면 공인중개사법 제30조에 따른 배상책임을 부담한다고 판시했습니다. 전대차 사안에서도 권리관계·선순위 보증금 설명이 충실했는지 평가해볼 수 있는 영역입니다.',
        takeaway: '전대차 회수는 임대인 동의·중개인 설명 의무·원임차인 형사 평가가 핵심 영역 — 계약·정황 자료 정리·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임대인이 \'직접 계약 안 했다\'고 하면 끝인가요?',
        answer:
          '<strong>임대인 동의·정황에 따라 직접 청구가 검토될 수 있는 영역입니다.</strong> 동의 자료가 핵심.',
      },
      {
        question: '동의서가 없으면 회수가 어렵나요?',
        answer:
          '<strong>메시지·통화·정황 자료로 동의를 입증하는 영역입니다.</strong> 객관 자료 보존이 출발점.',
      },
      {
        question: '원임차인을 형사 신고할 수 있나요?',
        answer:
          '<strong>보증금 사용 정황에 따라 횡령·사기 평가가 가능한 영역입니다.</strong> 경찰·전세사기 지원 상담 권장.',
      },
      {
        question: '중개인에게 책임을 물을 수 있나요?',
        answer:
          '<strong>권리관계 설명 의무 위반 시 손해배상 평가가 가능한 영역입니다.</strong> 설명서·자료 확인.',
      },
      {
        question: '대항력·우선변제권은 어떻게 평가되나요?',
        answer:
          '<strong>전입·확정일자 시점과 동의 여부에 따라 함께 평가되는 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 피해 대응', href: '/guide/jeonse-fraud/jeonse-fraud-victim-where-to-start' },
      { label: '임차권등기명령 절차', href: '/guide/jeonse-fraud/jeonse-rental-right-registration' },
      { label: '보증금 반환 소송', href: '/guide/jeonse-fraud/deposit-return-lawsuit' },
      { label: '중개인 책임 청구', href: '/guide/jeonse-fraud/jeonse-fraud-broker-liability' },
      { label: '전세 사기 형사 신고', href: '/guide/jeonse-fraud/jeonse-fraud-criminal-report' },
    ],
  },

  // ─── 10. jeonse-fraud-deposit-protection-insurance-claim-process-track ───
  // 이 페이지는 전세보증금반환보증 보험금 청구를 준비하는 임차인의 HUG 이행청구·서류·심사 준비를 돕는 페이지다.
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-deposit-protection-insurance-claim-process-track',
    keyword: '전세보증금반환보증 이행청구',
    questionKeyword: '전세보증금반환보증보험에 가입돼 있는데 집주인이 보증금을 안 줘요. HUG 이행청구는 어떻게 진행하나요?',
    ctaKeyword: '전세보증금반환보증 이행청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세보증금반환보증 이행청구 — 5단계 HUG 청구·심사 트랙 | 로앤가이드',
      description:
        '전세보증금반환보증보험에 가입돼 있는데 집주인이 보증금을 안 돌려준다면 HUG 이행청구·서류·심사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 전세 계약을 체결할 때 보증사고에 대비해 HUG 전세보증금반환보증보험에 가입해 두었습니다. 그런데 계약 만기가 지나도 집주인이 보증금을 돌려주지 않아, 약관에 따라 보증사에 이행청구를 검토해야 할 상황이에요. 서류를 어디서 어떻게 모아 제출해야 하는지, 임차권등기·이사 시점은 어떻게 맞추는지, 심사 기간 동안 무엇을 더 준비해야 하는지가 막막합니다. 보증 약관에는 특약과 면책 사유가 정리돼 있고, 본인의 대항력·우선변제권 유지 요건도 함께 정리되어 있어요." 주택임대차보호법은 임차인의 대항력·우선변제권을 인정하는 영역이며, HUG 전세보증금반환보증보험 약관은 보증사고 발생 시 보증사가 보증금을 임차인에게 우선 지급하고 임대인에게 구상하는 절차를 정하고 있는 영역으로 안내되고 있습니다. 약관상 면책 사유·통지 의무 위반 여부 등은 심사 단계에서 평가되는 사정입니다. 피해자라면 ① 약관 확인 ② 임차권등기 ③ 이행청구 서류 ④ 심사·지급 ⑤ 임대인 구상 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전세보증금반환보증 이행청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약관·등기·청구·심사·구상 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약관 확인</strong> — 보증금액·기간·특약·면책 사유 정리.</li>\n<li><strong>② 임차권등기</strong> — 종료 후 대항력·우선변제권 유지하며 이사.</li>\n<li><strong>③ 이행청구 서류</strong> — 청구서·계약서·등기·전입·확정일자·내용증명.</li>\n<li><strong>④ 심사·지급</strong> — 보증사 심사 후 보증금 우선 지급.</li>\n<li><strong>⑤ 임대인 구상</strong> — 보증사가 임대인에게 구상 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보증보험 이행청구는 약관의 보증사고 정의·면책 사유에 따라 결과가 달라지는 영역입니다. 임차인은 대항력·우선변제권을 잃지 않도록 임차권등기명령을 활용한 후 이사하고, 청구 서류를 약관 기준에 맞춰 빠짐없이 준비하는 것이 심사 단계의 안전장치입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. HUG 약관·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약관·증서 확인 (즉시)</strong> — 보증증서·약관·특약·면책 사유.</li>\n<li><strong>2단계 — 임대인 통지·내용증명 (만기 전후)</strong> — 보증금 반환 요청·미반환 통지.</li>\n<li><strong>3단계 — 임차권등기명령 (만기 후)</strong> — 관할 법원 신청 후 이사.</li>\n<li><strong>4단계 — HUG 이행청구 (보증사고 후)</strong> — 청구서·계약서·등기·전입·확정일자 서류 제출.</li>\n<li><strong>5단계 — 심사·지급·구상</strong> — 보증사 심사 후 우선 지급 + 임대인 구상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전세보증금반환보증 이행청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보증·등기·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>HUG 보증증서·약관·특약 자료</strong></li>\n<li><strong>전세계약서·중개대상물 확인·설명서</strong></li>\n<li><strong>주택 등기부등본(임차권등기 완료분 포함)</strong></li>\n<li><strong>주민등록등본(전입신고 시점)·확정일자 자료</strong></li>\n<li><strong>보증금 입금 자료·통장 사본</strong></li>\n<li><strong>임대인 미반환 내용증명·문자 기록</strong></li>\n<li><strong>이행청구서·신분증·인감증명 등 보증사 요구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보증보험 이행청구는 약관이 정본이므로, 본인이 가입한 보증의 약관을 먼저 확인하고 요구 서류와 통지 의무 일정을 표로 정리해두는 것이 누락을 막는 안전장치입니다. 임차권등기 전 이사·전출은 대항력·우선변제권 상실 위험으로 평가될 수 있어 등기 완료 후 이사가 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>약관 면책 사유</strong> — 대항력·우선변제권 상실 여부 평가.</li>\n<li><strong>임차권등기 시점</strong> — 등기 전 이사 시 위험.</li>\n<li><strong>통지 의무</strong> — 거주 이전·주민등록 변경 사전 고지.</li>\n<li><strong>서류 완비</strong> — 누락 시 보완 요청·심사 지연.</li>\n<li><strong>임대인 구상</strong> — 보증사 구상권 행사 별도 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>주택임대차분쟁조정위원회</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인 자격·대항력 보호 평가 영역',
        summary:
          '대법원 2024다268508(대법원, 2025.08.14 선고) 임대차보증금 영역에서 법원은 임대차계약의 주된 목적이 주택을 사용·수익하려는 것이 아니라 단순히 채권 회수만을 노린 경우에는 주택임대차보호법상의 대항력이 인정되지 않을 수 있다는 한계를 정리하면서, 대항력 요건인 주민등록의 공시 기능을 판단했습니다. 보증보험 이행청구 사안에서도 임차 목적의 진정성·주민등록 유지·대항력의 객관적 공시 여부 평가가 핵심 영역으로 검토해볼 수 있습니다.',
        takeaway: '보증보험 청구는 약관·임차권등기·통지 의무·임차 목적 진정성 평가가 핵심 영역 — 등기 후 이사·서류 완비·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보증보험만 있으면 무조건 보증금을 받나요?',
        answer:
          '<strong>약관의 보증사고·면책 사유에 따라 평가되는 영역입니다.</strong> 사례에 따라 다르지만 약관 확인이 출발점.',
      },
      {
        question: '임차권등기 없이 이사 가면 어떻게 되나요?',
        answer:
          '<strong>대항력·우선변제권 상실 위험으로 면책 사유에 닿을 수 있는 영역입니다.</strong> 등기 완료 후 이사 권장.',
      },
      {
        question: '심사는 얼마나 걸리나요?',
        answer:
          '<strong>약관·서류 완비도에 따라 다르지만 통상 수개월 단위로 안내되고 있는 사정입니다.</strong> 보증사 안내 확인 권장.',
      },
      {
        question: '서류가 일부 빠지면 어떻게 되나요?',
        answer:
          '<strong>보완 요청으로 심사가 지연될 수 있는 영역입니다.</strong> 약관 기준 체크리스트 확보 권장.',
      },
      {
        question: '보증사가 지급한 뒤 임대인은 어떻게 되나요?',
        answer:
          '<strong>보증사가 임대인에게 구상 청구를 별도 진행하는 영역입니다.</strong> 임차인은 별개로 추가 대응 검토.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'HUG 보증이행 청구', href: '/guide/jeonse-fraud/hug-guarantee-claim-procedure' },
      { label: '임차권등기명령 절차', href: '/guide/jeonse-fraud/jeonse-rental-right-registration' },
      { label: '전세사기 피해 대응', href: '/guide/jeonse-fraud/jeonse-fraud-victim-where-to-start' },
      { label: '보증금 반환 소송', href: '/guide/jeonse-fraud/deposit-return-lawsuit' },
      { label: '전세보증보험 가입·청구', href: '/guide/jeonse-fraud/jeonse-deposit-insurance-guide' },
    ],
  },
];
