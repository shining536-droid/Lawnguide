import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 교통사고 3 + 이혼 2 + 양육비 1 + 회생 1 + 파산 1 + 전세 2 + 이웃분쟁 2 (batch28)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch28Misc: SpokePage[] = [
  // ══════════ 교통사고 3개 ══════════

  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-electric-scooter-liability',
    keyword: '전동킥보드 사고 과실 보상',
    questionKeyword: '전동킥보드 사고가 났는데 보상을 받을 수 있나요?',
    ctaKeyword: '전동킥보드 사고 보상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전동킥보드 사고 과실비율과 보상 3단계 | 로앤가이드',
      description: '전동킥보드에 치여 다쳤는데 보상을 받을 수 있는지 막막합니다. 과실비율 기준과 보상 절차를 지금 확인하세요.',
    },
    intro: '<p>횡단보도를 건너다 전동킥보드에 부딪혀 넘어졌습니다. 가해자는 "보험이 없다"고 합니다. 전동킥보드 사고는 자동차 사고와 보상 체계가 다르기 때문에 미리 대응 방법을 알아두는 것이 중요합니다. 피해자로서 어떤 보상을 받을 수 있는지 정리해보세요.</p>',
    timelineSteps: ['1단계: 사고 현장 증거 확보', '2단계: 과실비율 확인', '3단계: 보상 청구(보험 또는 민사)'],
    sections: [
      {
        title: '전동킥보드 사고의 법적 분류',
        content: '<p><strong style="color:#1e3a5f">전동킥보드는 2020년 도로교통법 개정 이후 개인형 이동장치(PM)로 분류되며, 교통사고처리특례법이 적용됩니다.</strong></p>\n<ul>\n<li><strong>자동차손해배상보장법 적용</strong> — 전동킥보드도 원동기장치자전거에 해당하므로 의무보험 가입 대상입니다.</li>\n<li><strong>미가입 시 가해자 직접 배상</strong> — 보험 미가입 상태에서 사고를 내면 가해자가 치료비·위자료·휴업손해를 전액 부담합니다.</li>\n<li><strong>정부보장사업</strong> — 가해자가 무보험이고 배상 능력이 없으면 정부보장사업(자동차손해배상보장법 제30조)으로 보상받을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 전동킥보드도 자동차 사고에 준하는 보상을 받을 수 있으니 사고 신고부터 빠르게 진행하세요.</blockquote>',
      },
      {
        title: '과실비율 산정 기준',
        content: '<p><strong style="color:#1e3a5f">전동킥보드 사고의 과실비율은 차량 대 보행자 기준을 준용하되, 세부 상황에 따라 달라집니다.</strong></p>\n<ol>\n<li><strong>횡단보도 사고</strong> — 보행자 신호에 건너다 킥보드에 치인 경우 킥보드 운전자 과실이 100%에 가깝습니다.</li>\n<li><strong>인도 주행 사고</strong> — 인도에서 킥보드를 타다 보행자를 친 경우에도 킥보드 운전자에게 높은 과실이 인정됩니다.</li>\n<li><strong>차도 역주행</strong> — 킥보드가 역주행하다 발생한 사고는 킥보드 운전자 과실 80~100%로 산정됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>전동킥보드 사고 과실비율, AI가 분석합니다</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보상 청구 절차',
        content: '<p><strong style="color:#1e3a5f">증거 확보 → 보험 확인 → 손해배상 청구 순서로 진행하세요.</strong></p>\n<ul>\n<li><strong>증거 확보</strong> — CCTV 영상, 블랙박스, 목격자 연락처, 사고 현장 사진을 확보합니다. 112 신고로 교통사고 접수 기록을 남기세요.</li>\n<li><strong>보험 확인</strong> — 가해자의 보험 가입 여부를 확인합니다. 킥보드 공유업체 사고라면 업체 보험이 적용됩니다.</li>\n<li><strong>손해배상 청구</strong> — 치료비, 휴업손해, 향후 치료비, 위자료를 산정하여 청구합니다. 합의가 안 되면 민사소송을 제기합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 사고 직후 112 신고와 증거 확보가 보상의 첫걸음입니다.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 교통사고처리특례법 엄격 판단', summary: '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 음주운전자의 혈중알코올농도가 처벌기준을 초과하는지 판단할 때 단순히 시간과 음주량만으로 불가능하다고 판단할 수 없으며, 구체적 정황을 엄격히 심리해야 한다고 판시했습니다.', takeaway: '비슷한 상황이라면 사고 상황의 구체적 증거를 꼼꼼히 확보하세요. 법원은 교통사고에서 엄격한 사실 판단을 요구합니다.' }],
    faq: [
      { question: '전동킥보드 가해자가 보험이 없으면 보상을 못 받나요?', answer: '<p>아닙니다. 가해자에게 직접 손해배상을 청구할 수 있고, 배상 능력이 없으면 정부보장사업으로 보상받을 수 있습니다.</p>' },
      { question: '공유 킥보드 사고도 보상이 되나요?', answer: '<p>네, 공유 킥보드 업체는 의무보험에 가입해야 하므로 업체 보험으로 보상을 청구할 수 있습니다.</p>' },
      { question: '전동킥보드 사고도 교통사고 접수가 되나요?', answer: '<p>네, 전동킥보드는 원동기장치자전거에 해당하므로 112에 교통사고로 신고할 수 있습니다.</p>' },
      { question: '킥보드 사고로 골절됐는데 위자료도 받을 수 있나요?', answer: '<p>네, 치료비 외에 정신적 고통에 대한 위자료, 일을 못 한 기간의 휴업손해도 청구 가능합니다.</p>' },
      { question: '헬멧 미착용 보행자에게 과실이 있나요?', answer: '<p>보행자는 헬멧 착용 의무가 없으므로 과실로 잡히지 않습니다. 다만 킥보드 탑승자가 헬멧을 미착용했다면 과실이 가중됩니다.</p>' },
    ],
    cta: { text: '전동킥보드 사고 보상 가능 금액 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 기준', href: '/guide/traffic-accident/fault-ratio-calculation-criteria' },
      { label: '사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '뺑소니 피해 대응', href: '/guide/traffic-accident/hit-and-run-victim-response' },
      { label: '보험금 청구 절차', href: '/guide/traffic-accident/insurance-claim-process-summary' },
    ],
  },

  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-parking-lot-collision',
    keyword: '주차장 사고 과실비율 기준',
    questionKeyword: '주차장에서 사고가 났는데 과실비율은 어떻게 되나요?',
    ctaKeyword: '주차장 사고 과실비율 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '주차장 사고 과실비율 5가지 유형별 기준 | 로앤가이드',
      description: '주차장에서 접촉 사고가 났는데 상대방이 내 과실이라고 주장합니다. 유형별 과실비율 기준을 지금 확인하세요.',
    },
    intro: '<p>마트 지하 주차장에서 후진하다가 다른 차와 부딪혔습니다. 상대방은 "내가 먼저 진행 중이었다"고 합니다. 주차장 사고는 도로 사고와 과실비율 기준이 다르기 때문에 유형별 기준을 알아두는 것이 중요합니다. 주차장 사고 과실비율을 확인해보세요.</p>',
    timelineSteps: ['1단계: 사고 유형 파악', '2단계: CCTV·블랙박스 확보', '3단계: 보험사 과실 협의', '4단계: 분쟁 시 손해사정 신청'],
    sections: [
      {
        title: '주차장 사고 유형별 과실비율',
        content: '<p><strong style="color:#1e3a5f">주차장 사고는 크게 5가지 유형으로 나뉘며, 각각 과실비율이 다릅니다.</strong></p>\n<ul>\n<li><strong>후진 대 직진</strong> — 후진 차량 과실 70~80%. 후진 차량에게 더 높은 주의의무가 부과됩니다.</li>\n<li><strong>쌍방 후진</strong> — 원칙적으로 50:50. 속도, 경적 여부 등에 따라 조정됩니다.</li>\n<li><strong>통로 직진 대 주차구역 출차</strong> — 출차 차량 과실 60~70%. 통로 직진 차량에 우선권이 있습니다.</li>\n<li><strong>문 열림 사고</strong> — 문을 연 차량 과실 80~90%. 주변 확인 의무가 문을 여는 쪽에 있습니다.</li>\n<li><strong>주차된 차 충돌</strong> — 움직인 차량 과실 100%. 주차 상태의 차량에는 과실이 없습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 주차장에서는 후진·출차 차량에 더 높은 주의의무가 부과됩니다.</blockquote>',
      },
      {
        title: '증거 확보와 보험 처리',
        content: '<p><strong style="color:#1e3a5f">주차장 사고에서 과실비율을 유리하게 하려면 증거 확보가 핵심입니다.</strong></p>\n<ol>\n<li><strong>CCTV 확보</strong> — 주차장 관리사무소에 CCTV 영상 보존을 요청하세요. 보통 7~14일 후 삭제됩니다.</li>\n<li><strong>블랙박스 확인</strong> — 내 차와 상대 차 모두의 블랙박스 영상을 확인합니다.</li>\n<li><strong>사진 촬영</strong> — 충돌 지점, 타이어 흔적, 주차선 위치를 사진으로 남기세요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>주차장 사고 과실비율, AI가 분석합니다</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실비율에 불복하는 방법',
        content: '<p><strong style="color:#1e3a5f">보험사가 산정한 과실비율에 동의할 수 없다면 분쟁 해결 절차를 이용하세요.</strong></p>\n<ul>\n<li><strong>손해사정사 선임</strong> — 피해자 측 손해사정사를 별도로 선임하여 과실비율 재산정을 요청할 수 있습니다.</li>\n<li><strong>금융감독원 분쟁조정</strong> — 보험사 간 합의가 안 되면 금감원 보험분쟁조정위원회에 조정을 신청합니다.</li>\n<li><strong>민사소송</strong> — 조정으로도 해결되지 않으면 법원에 손해배상 소송을 제기합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 과실비율이 부당하다면 손해사정사 선임이나 금감원 조정을 활용하세요.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 쌍방과실 보험자대위 기준', summary: '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 보험사의 대위청구에서 피보험자의 과실이 있는 경우에도 보험금 지급 범위 내에서 제3자에 대한 손해배상 청구를 대위할 수 있다고 판시했습니다.', takeaway: '비슷한 상황이라면 보험사가 산정한 과실비율에 동의하기 어려울 때 손해사정사를 통한 재검토를 받으세요.' }],
    faq: [
      { question: '주차장은 도로가 아닌데 도로교통법이 적용되나요?', answer: '<p>불특정 다수가 이용하는 주차장은 도로교통법상 "도로"로 인정됩니다. 따라서 교통사고처리특례법도 적용됩니다.</p>' },
      { question: '주차된 내 차를 치고 간 경우 어떻게 하나요?', answer: '<p>뺑소니에 해당합니다. CCTV 영상으로 가해 차량을 특정한 뒤 경찰 신고와 보험 접수를 동시에 진행하세요.</p>' },
      { question: '후진하다 부딪히면 무조건 내 과실인가요?', answer: '<p>후진 차량 과실이 높지만 100%는 아닙니다. 상대 차량도 주의의무 위반이 있으면 과실이 조정됩니다.</p>' },
      { question: '주차장 사고도 자차보험 처리가 되나요?', answer: '<p>네, 자차보험(자기차량손해)에 가입되어 있다면 과실 여부와 관계없이 내 차 수리비를 보험으로 처리할 수 있습니다.</p>' },
      { question: '상대방이 연락이 안 되면 어떻게 하나요?', answer: '<p>차량번호로 보험사를 조회(1644-2255)하여 상대 보험사에 직접 사고 접수를 할 수 있습니다.</p>' },
    ],
    cta: { text: '주차장 사고 과실비율 AI로 분석하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 기준', href: '/guide/traffic-accident/fault-ratio-calculation-criteria' },
      { label: '사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '뺑소니 피해 대응', href: '/guide/traffic-accident/hit-and-run-victim-response' },
      { label: '보험금 청구 절차', href: '/guide/traffic-accident/insurance-claim-process-summary' },
    ],
  },

  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-zone-child',
    keyword: '스쿨존 어린이보호구역 사고 처벌',
    questionKeyword: '스쿨존에서 어린이 사고를 내면 처벌이 어떻게 되나요?',
    ctaKeyword: '스쿨존 사고 처벌 상담',
    type: '쟁점형',
    perspective: 'offender',
    meta: {
      title: '스쿨존 어린이 사고 처벌 기준 3가지 확인 | 로앤가이드',
      description: '어린이보호구역에서 사고 혐의를 받고 있다면 처벌 수위와 대응 방법이 궁금합니다. 핵심 기준을 지금 확인하세요.',
    },
    intro: '<p>스쿨존에서 차로 어린이를 다치게 한 혐의를 받고 있습니다. 민식이법이 적용되면 형사처벌이 무거워진다는데, 정확한 처벌 기준과 대응 방법을 알아야 합니다. 혐의를 받고 있다면 지금 바로 확인해보세요.</p>',
    timelineSteps: ['1단계: 사고 경위 정리', '2단계: 블랙박스·CCTV 확보', '3단계: 수사 대응(조사 준비)', '4단계: 합의·선처 자료 준비'],
    sections: [
      {
        title: '민식이법 처벌 기준',
        content: '<p><strong style="color:#1e3a5f">특정범죄 가중처벌 등에 관한 법률(민식이법) 제5조의13에 따라 어린이보호구역 사고는 가중처벌됩니다.</strong></p>\n<ul>\n<li><strong>사망 사고</strong> — 무기 또는 3년 이상의 징역. 일반 교통사고보다 형량이 크게 높습니다.</li>\n<li><strong>상해 사고</strong> — 1년 이상 15년 이하의 징역 또는 500만원 이상 3,000만원 이하의 벌금.</li>\n<li><strong>적용 요건</strong> — ①어린이보호구역 내 ②안전운전 의무 위반 ③13세 미만 어린이 피해자. 세 가지가 모두 충족돼야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 민식이법 적용 요건 3가지를 모두 충족하는지 먼저 확인하세요.</blockquote>',
      },
      {
        title: '수사 단계 대응 방법',
        content: '<p><strong style="color:#1e3a5f">사고 직후의 대응이 이후 재판 결과에 큰 영향을 미칩니다.</strong></p>\n<ol>\n<li><strong>블랙박스 확보</strong> — 내 차와 주변 CCTV 영상을 즉시 확보합니다. 신호 준수 여부, 속도를 입증하는 핵심 증거입니다.</li>\n<li><strong>운전기록 분석</strong> — EDR(차량 사고기록장치) 데이터로 사고 당시 속도, 브레이크 시점을 확인합니다.</li>\n<li><strong>변호사 선임</strong> — 경찰 조사 전에 변호사를 선임하여 진술 방향을 준비하세요. 초기 진술이 재판에서 큰 영향을 미칩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>스쿨존 사고 대응 전략, AI가 정리합니다</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합의와 양형 자료 준비',
        content: '<p><strong style="color:#1e3a5f">피해자 측과의 합의와 반성 자료는 양형에 중요한 참작 사유입니다.</strong></p>\n<ul>\n<li><strong>피해자 합의</strong> — 치료비 전액 부담 + 합의금 지급 후 합의서를 작성합니다. 합의가 되면 형사 재판에서 양형이 크게 낮아집니다.</li>\n<li><strong>공탁</strong> — 합의가 안 되면 법원에 공탁금을 납입하여 배상 의지를 보여주세요.</li>\n<li><strong>선처 자료</strong> — 초범 여부, 안전운전 교육 이수, 봉사활동 등 반성을 보여주는 자료를 준비합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 합의 성사 여부가 실형과 집행유예를 가르는 결정적 요소입니다.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 교통사고 처벌 엄격 판단', summary: '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 교통사고처리특례법 위반 사건에서 처벌기준 해당 여부를 판단할 때 단순 추정이 아닌 구체적 정황을 엄격히 심리해야 한다고 판시했습니다.', takeaway: '스쿨존 사고 혐의를 받고 있다면 블랙박스, CCTV 등 객관적 증거를 확보하여 사고 상황을 정확히 입증하세요.' }],
    faq: [
      { question: '스쿨존에서 서행했는데도 민식이법이 적용되나요?', answer: '<p>제한속도(30km/h) 이하로 주행했고 안전운전 의무를 다했다면 민식이법 가중처벌이 적용되지 않을 수 있습니다. 속도 입증이 핵심입니다.</p>' },
      { question: '어린이가 갑자기 뛰어나온 경우에도 처벌받나요?', answer: '<p>스쿨존에서는 어린이의 돌발 행동을 예상하고 서행할 의무가 있습니다. 다만 불가항력이 인정되면 감경될 수 있습니다.</p>' },
      { question: '합의하면 처벌을 피할 수 있나요?', answer: '<p>민식이법 적용 사건은 합의해도 공소가 취소되지 않습니다. 다만 합의는 양형에서 매우 유리한 참작 사유입니다.</p>' },
      { question: '초범이면 실형을 피할 수 있나요?', answer: '<p>상해 사고이고, 초범이며, 합의가 되었다면 집행유예 가능성이 높습니다. 사망 사고는 초범이라도 실형 가능성이 있습니다.</p>' },
      { question: '스쿨존 시간대(오전 8시~오후 9시) 외 사고도 가중되나요?', answer: '<p>2022년 개정 이후 어린이보호구역에서는 시간대와 관계없이 민식이법이 적용됩니다.</p>' },
    ],
    cta: { text: '스쿨존 사고 대응 방법 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 기준', href: '/guide/traffic-accident/fault-ratio-calculation-criteria' },
      { label: '사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '뺑소니 피해 대응', href: '/guide/traffic-accident/hit-and-run-victim-response' },
      { label: '보험금 청구 절차', href: '/guide/traffic-accident/insurance-claim-process-summary' },
    ],
  },

  // ══════════ 이혼 2개 ══════════

  {
    domain: 'divorce',
    slug: 'divorce-gray-over50-property',
    keyword: '황혼이혼 재산분할 연금',
    questionKeyword: '50대 이혼할 때 재산분할과 연금분할은 어떻게 되나요?',
    ctaKeyword: '황혼이혼 재산분할 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '황혼이혼 재산분할과 연금분할 4단계 정리 | 로앤가이드',
      description: '50대 이후 이혼을 고려 중인데 재산분할과 연금분할이 걱정됩니다. 핵심 절차와 기준을 지금 확인하세요.',
    },
    intro: '<p>30년을 함께 살았지만 더 이상 함께할 수 없어 이혼을 결심했습니다. 부동산, 퇴직금, 국민연금까지 나눠야 할 재산이 많습니다. 황혼이혼에서 재산분할과 연금분할이 어떻게 이루어지는지 정리해보세요.</p>',
    timelineSteps: ['1단계: 공동재산 목록 작성', '2단계: 기여도 산정', '3단계: 연금분할 신청', '4단계: 가정법원 조정·재판'],
    sections: [
      {
        title: '황혼이혼 재산분할 기준',
        content: '<p><strong style="color:#1e3a5f">혼인 기간이 길수록 재산분할 비율이 높아지는 경향이 있습니다.</strong></p>\n<ul>\n<li><strong>기여도 인정</strong> — 전업주부도 가사노동, 자녀 양육에 대한 기여도가 인정됩니다. 30년 이상 혼인이면 40~50% 기여도가 인정되는 경우가 많습니다.</li>\n<li><strong>분할 대상</strong> — 부동산, 예금, 주식, 보험해약환급금, 퇴직금(예상 퇴직금 포함), 사업체 가치 등 혼인 중 형성된 모든 재산이 대상입니다.</li>\n<li><strong>특유재산 구분</strong> — 혼인 전 취득 재산, 상속·증여받은 재산은 원칙적으로 분할 대상에서 제외됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 혼인 기간이 길수록 전업주부의 기여도가 높게 인정됩니다.</blockquote>',
      },
      {
        title: '국민연금 분할 방법',
        content: '<p><strong style="color:#1e3a5f">혼인 기간 5년 이상이면 배우자의 국민연금을 분할받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>분할연금 요건</strong> — ①혼인 기간 5년 이상 ②이혼 ③본인이 60세 도달 ④상대방이 노령연금 수급권자</li>\n<li><strong>분할 비율</strong> — 혼인 기간에 해당하는 연금액의 최대 50%까지 분할 가능합니다.</li>\n<li><strong>신청 방법</strong> — 이혼 확정 후 국민연금공단에 분할연금 청구서를 제출합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>황혼이혼 재산·연금 분할 시뮬레이션, AI가 계산합니다</strong></p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴직금·퇴직연금 분할',
        content: '<p><strong style="color:#1e3a5f">퇴직금과 퇴직연금도 혼인 기간에 해당하는 부분은 재산분할 대상입니다.</strong></p>\n<ul>\n<li><strong>이미 퇴직한 경우</strong> — 수령한 퇴직금 중 혼인 기간에 해당하는 비율을 분할합니다.</li>\n<li><strong>재직 중인 경우</strong> — 현재 시점의 예상 퇴직금을 산정하여 혼인 기간 비율로 분할합니다.</li>\n<li><strong>퇴직연금(DB/DC)</strong> — DB형은 예상 퇴직급여 기준, DC형은 적립금 기준으로 분할합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 퇴직금은 현재 재직 중이라도 분할 청구가 가능합니다.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 재산분할의무 승계', summary: '대법원 2024스876 사건(대법원, 2026.01.15 선고)에서 법원은 이혼 후 재산분할의무가 상속인에게 승계될 수 있다고 판시하며, 혼인 중 형성된 재산에 대한 분할 청구권을 폭넓게 인정했습니다.', takeaway: '비슷한 상황이라면 이혼 전 공동재산 목록을 꼼꼼히 작성하고, 특히 퇴직금과 연금도 분할 대상에 포함시키세요.' }],
    faq: [
      { question: '전업주부도 재산의 절반을 받을 수 있나요?', answer: '<p>혼인 기간, 가사노동 기여도에 따라 30~50%까지 인정됩니다. 30년 이상이면 50%에 가까운 비율이 인정되는 경향입니다.</p>' },
      { question: '국민연금 분할은 언제 신청하나요?', answer: '<p>이혼이 확정된 후 국민연금공단에 신청합니다. 단, 본인이 60세에 도달해야 실제 수령이 시작됩니다.</p>' },
      { question: '배우자가 재산을 숨기면 어떻게 하나요?', answer: '<p>가정법원에 재산조회 신청을 하면 은행·증권·보험 등 금융자산을 조회할 수 있습니다.</p>' },
      { question: '위자료도 별도로 받을 수 있나요?', answer: '<p>네, 상대방에게 이혼 사유(부정행위, 학대 등)가 있으면 재산분할과 별도로 위자료를 청구할 수 있습니다.</p>' },
      { question: '협의이혼으로도 연금분할이 가능한가요?', answer: '<p>네, 협의이혼이든 재판이혼이든 이혼이 확정되면 연금분할을 신청할 수 있습니다.</p>' },
    ],
    cta: { text: '황혼이혼 재산분할 AI로 시뮬레이션하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '재산분할 비율', href: '/guide/divorce/property-division-ratio' },
      { label: '연금분할 방법', href: '/guide/divorce/divorce-pension-division-method' },
      { label: '가정폭력 이혼', href: '/guide/divorce/domestic-violence-divorce-process' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
    ],
  },

  {
    domain: 'divorce',
    slug: 'divorce-restraining-order-protection',
    keyword: '가정폭력 접근금지명령 신청',
    questionKeyword: '가정폭력 접근금지명령을 어떻게 신청하나요?',
    ctaKeyword: '접근금지명령 신청 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 접근금지명령 신청 절차 3단계 | 로앤가이드',
      description: '배우자의 폭력이 두렵고 접근금지명령을 받고 싶은데 방법을 모릅니다. 신청 절차를 지금 확인하세요.',
    },
    intro: '<p>배우자가 또 폭력을 행사했습니다. 집을 나왔지만 계속 찾아올까 봐 두렵습니다. 접근금지명령을 받으면 법적으로 배우자의 접근을 막을 수 있습니다. 신청 방법을 지금 바로 확인해보세요.</p>',
    timelineSteps: ['1단계: 112 신고 + 피해 증거 확보', '2단계: 경찰 긴급임시조치 요청', '3단계: 법원 피해자보호명령 신청'],
    sections: [
      {
        title: '접근금지명령의 종류',
        content: '<p><strong style="color:#1e3a5f">가정폭력 피해자를 보호하는 법적 명령은 3단계로 나뉩니다.</strong></p>\n<ul>\n<li><strong>긴급임시조치</strong> — 경찰이 현장에서 즉시 발동합니다. 퇴거, 접근금지, 전기통신 접근금지가 포함됩니다. 효력은 최대 72시간입니다.</li>\n<li><strong>임시조치</strong> — 검사의 청구로 법원이 발령합니다. 2개월간 효력이 있으며 2회 연장 가능합니다.</li>\n<li><strong>피해자보호명령</strong> — 피해자가 직접 법원에 신청할 수 있습니다. 6개월간 효력이 있으며 연장 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 긴급하면 112 신고로 긴급임시조치를, 장기적으로는 법원에 피해자보호명령을 신청하세요.</blockquote>',
      },
      {
        title: '피해자보호명령 신청 절차',
        content: '<p><strong style="color:#1e3a5f">피해자보호명령은 피해자 본인이 직접 가정법원에 신청할 수 있습니다.</strong></p>\n<ol>\n<li><strong>신청서 작성</strong> — 관할 가정법원에 피해자보호명령 신청서를 제출합니다. 법률구조공단(132)에서 무료 법률 지원을 받을 수 있습니다.</li>\n<li><strong>증거 첨부</strong> — 진단서, 사진, 녹음파일, 112 신고 기록, 상담소 상담 기록 등을 첨부합니다.</li>\n<li><strong>법원 심리</strong> — 법원이 피해 사실을 심리한 후 접근금지, 퇴거, 전화·이메일 접근금지 등을 명령합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>접근금지명령 신청 절차, AI가 안내합니다</strong></p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '명령 위반 시 처벌과 추가 보호',
        content: '<p><strong style="color:#1e3a5f">접근금지명령을 위반하면 형사처벌 대상입니다.</strong></p>\n<ul>\n<li><strong>위반 시 처벌</strong> — 2년 이하의 징역 또는 2천만원 이하의 벌금(가정폭력범죄의 처벌 등에 관한 특례법 제63조).</li>\n<li><strong>즉시 신고</strong> — 위반 시 즉시 112에 신고하세요. 현행범 체포가 가능합니다.</li>\n<li><strong>추가 보호</strong> — 1366(여성긴급전화)에서 24시간 상담, 긴급 피난처를 연결받을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 접근금지명령 위반은 형사처벌 대상이므로 위반 즉시 신고하세요.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 부정행위 이혼 위자료', summary: '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 배우자의 부정행위로 혼인 관계가 파탄된 경우 제3자도 불법행위 손해배상 의무를 부담한다고 판시하며, 배우자의 귀책에 의한 이혼에서 피해자의 권리를 폭넓게 인정했습니다.', takeaway: '비슷한 상황이라면 가정폭력 증거와 함께 이혼 소송에서 위자료도 청구하세요. 접근금지명령과 이혼 절차를 병행할 수 있습니다.' }],
    faq: [
      { question: '증거가 없어도 접근금지명령을 받을 수 있나요?', answer: '<p>112 신고 기록, 피해자 진술만으로도 긴급임시조치는 가능합니다. 다만 보호명령 신청 시에는 진단서, 상담 기록 등 증거가 있으면 유리합니다.</p>' },
      { question: '접근금지명령 중에도 아이를 만날 수 있나요?', answer: '<p>법원이 자녀 면접교섭에 관한 별도 결정을 내릴 수 있습니다. 직접 만남 대신 제3기관을 통한 면접교섭이 명령될 수 있습니다.</p>' },
      { question: '경찰이 긴급임시조치를 안 해주면 어떻게 하나요?', answer: '<p>가정폭력 피해자의 긴급임시조치 요청을 경찰이 거부하면 경찰청 민원(182)이나 국가인권위원회에 진정할 수 있습니다.</p>' },
      { question: '피해자보호명령은 비용이 드나요?', answer: '<p>피해자보호명령 신청에는 수수료가 없습니다. 법률구조공단(132)에서 무료 변호사 지원도 받을 수 있습니다.</p>' },
    ],
    cta: { text: '접근금지명령 신청 방법 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '재산분할 비율', href: '/guide/divorce/property-division-ratio' },
      { label: '연금분할 방법', href: '/guide/divorce/divorce-pension-division-method' },
      { label: '가정폭력 이혼', href: '/guide/divorce/domestic-violence-divorce-process' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
    ],
  },

  // ══════════ 양육비 1개 ══════════

  {
    domain: 'child-support',
    slug: 'child-support-grandparent-custody-claim',
    keyword: '조부모 양육비 청구 방법',
    questionKeyword: '손주를 키우는 조부모가 양육비를 청구할 수 있나요?',
    ctaKeyword: '조부모 양육비 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '조부모 양육비 청구 방법과 절차 4단계 | 로앤가이드',
      description: '손주를 대신 키우고 있는데 부모에게 양육비를 받을 수 있는지 막막합니다. 청구 절차를 지금 확인하세요.',
    },
    intro: '<p>아들이 이혼 후 연락이 끊겼고, 손주를 직접 돌보고 있습니다. 양쪽 부모 모두에게 양육비를 청구할 수 있을까요? 대법원은 실제 양육자인 조부모의 양육비 청구권을 인정합니다. 구체적인 절차를 확인해보세요.</p>',
    timelineSteps: ['1단계: 양육 사실 입증 자료 확보', '2단계: 양육비 산정', '3단계: 가정법원에 양육비 청구', '4단계: 강제집행(미지급 시)'],
    sections: [
      {
        title: '조부모 양육비 청구 근거',
        content: '<p><strong style="color:#1e3a5f">부모가 양육을 하지 않을 때 실제 양육을 맡은 조부모는 부모에게 양육비를 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 민법 제837조에 따른 양육비 분담 의무는 부모에게 있습니다. 제3자(조부모 포함)가 양육하고 있다면 부모에게 비용 상환을 청구할 수 있습니다.</li>\n<li><strong>과거 양육비</strong> — 대법원은 과거에 지출한 양육비도 소급하여 청구할 수 있다고 판시합니다.</li>\n<li><strong>청구 대상</strong> — 친부모 모두에게 청구 가능합니다. 부모 각각의 경제적 능력에 따라 분담 비율이 정해집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 실제 양육자인 조부모는 친부모 양쪽 모두에게 양육비를 청구할 수 있습니다.</blockquote>',
      },
      {
        title: '양육비 산정과 청구 절차',
        content: '<p><strong style="color:#1e3a5f">가정법원에 양육비 청구 심판을 신청합니다.</strong></p>\n<ol>\n<li><strong>양육 사실 입증</strong> — 주민등록등본(동일 세대), 학교 비상연락처, 병원 기록, 보육료 납입 내역 등 실제 양육 증거를 준비합니다.</li>\n<li><strong>양육비 산정</strong> — 양육비 산정기준표를 참고합니다. 자녀 나이, 부모 소득 수준에 따라 월 양육비가 산정됩니다.</li>\n<li><strong>가정법원 신청</strong> — 관할 가정법원에 양육비 청구 심판을 청구합니다. 법률구조공단(132)에서 무료 소송 대리도 지원합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>조부모 양육비 청구 가능 금액, AI가 계산합니다</strong></p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비이행관리원과 추가 지원',
        content: '<p><strong style="color:#1e3a5f">양육비이행관리원과 지자체 지원을 함께 활용하세요.</strong></p>\n<ul>\n<li><strong>양육비이행관리원</strong> — 양육비 청구 소송 지원, 재산 조회·강제집행 지원, 한시적 양육비 긴급지원(월 20만원)을 제공합니다.</li>\n<li><strong>조손가정 지원</strong> — 지자체별로 조손가정 대상 생활비·교육비·의료비 지원 제도가 있습니다. 주민센터에 문의하세요.</li>\n<li><strong>아동양육 한시지원</strong> — 만 18세 미만 아동을 양육하는 조부모는 아동수당, 양육수당을 신청할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 양육비 청구와 함께 조손가정 지원 제도도 반드시 확인하세요.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 과거 양육비 청구 인정', summary: '대법원 2023스637 사건(대법원, 2024.10.08 선고)에서 법원은 이혼 후 16년간 자녀를 혼자 양육한 청구인이 상대 부모에게 과거 양육비를 청구한 사건에서, 과거 양육비의 분담 비율은 쌍방의 경제적 능력과 양육 기여도를 고려하여 정한다고 판시했습니다.', takeaway: '비슷한 상황이라면 과거 양육에 들어간 비용 내역(교육비, 의료비, 생활비 등)을 정리하여 과거 양육비도 함께 청구하세요.' }],
    faq: [
      { question: '조부모가 법적 후견인이 아니어도 청구 가능한가요?', answer: '<p>네, 실제 양육 사실이 입증되면 후견인 여부와 관계없이 양육비를 청구할 수 있습니다.</p>' },
      { question: '부모가 행방불명이면 어떻게 하나요?', answer: '<p>공시송달로 재판을 진행할 수 있으며, 양육비이행관리원에서 부모의 주소·재산 조회를 지원합니다.</p>' },
      { question: '과거에 쓴 양육비도 받을 수 있나요?', answer: '<p>네, 대법원은 과거 양육비 소급 청구를 인정합니다. 다만 소멸시효(10년)가 적용되므로 빠른 청구가 유리합니다.</p>' },
      { question: '양육비를 안 주면 강제집행이 가능한가요?', answer: '<p>판결 확정 후 부모의 급여, 예금, 부동산을 압류하여 강제집행할 수 있습니다.</p>' },
      { question: '조부모 양육비와 아동수당을 동시에 받을 수 있나요?', answer: '<p>네, 양육비는 부모의 부양의무에 기반한 것이고, 아동수당은 국가 지원이므로 동시에 수령할 수 있습니다.</p>' },
    ],
    cta: { text: '조부모 양육비 청구 절차 AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 청구 어디부터', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 강제집행', href: '/guide/child-support/child-support-enforcement-methods' },
      { label: '양육비 소송 절차', href: '/guide/child-support/child-support-lawsuit-procedure' },
      { label: '양육비 미납 추심', href: '/guide/child-support/child-support-overdue-collection' },
    ],
  },

  // ══════════ 개인회생 1개 ══════════

  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-student-loan-included',
    keyword: '학자금대출 개인회생 포함',
    questionKeyword: '학자금대출도 개인회생에 포함할 수 있나요?',
    ctaKeyword: '학자금대출 개인회생 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '학자금대출 개인회생 포함 여부와 감면 3단계 | 로앤가이드',
      description: '학자금대출이 남았는데 개인회생으로 감면받을 수 있는지 궁금합니다. 포함 기준과 절차를 지금 확인하세요.',
    },
    intro: '<p>취업이 안 되는데 학자금대출 원리금은 계속 나갑니다. 카드빚까지 쌓여서 개인회생을 고려하고 있습니다. 학자금대출도 개인회생 채무에 포함할 수 있는지, 감면은 어디까지 되는지 확인해보세요.</p>',
    timelineSteps: ['1단계: 채무 목록 정리(학자금 포함)', '2단계: 개인회생 신청 자격 확인', '3단계: 변제계획안 수립(3~5년)'],
    sections: [
      {
        title: '학자금대출 개인회생 포함 기준',
        content: '<p><strong style="color:#1e3a5f">한국장학재단 학자금대출, 은행 학자금대출 모두 개인회생 채무에 포함됩니다.</strong></p>\n<ul>\n<li><strong>포함 가능</strong> — 학자금대출은 일반 채무와 동일하게 개인회생 채권 목록에 포함할 수 있습니다.</li>\n<li><strong>채무 감면</strong> — 변제계획에 따라 원금의 일부(통상 10~30%)만 변제하고 나머지는 면책됩니다.</li>\n<li><strong>취업 후 상환 학자금(ICL)</strong> — ICL 대출도 개인회생에 포함 가능합니다. 소득이 없어 상환이 유예되고 있더라도 채무 자체는 존재합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 학자금대출 종류에 관계없이 개인회생 채무에 포함 가능합니다.</blockquote>',
      },
      {
        title: '개인회생 신청 자격과 절차',
        content: '<p><strong style="color:#1e3a5f">무담보 채무 10억원, 담보 채무 15억원 이하이면 신청할 수 있습니다.</strong></p>\n<ol>\n<li><strong>채무 목록 작성</strong> — 학자금대출, 카드빚, 대출금 등 모든 채무를 정리합니다. 한국장학재단에서 잔액 확인서를 발급받으세요.</li>\n<li><strong>수입·지출 계산</strong> — 월 수입에서 최저생계비를 뺀 가용소득으로 3~5년간 변제합니다.</li>\n<li><strong>법원 제출</strong> — 관할 지방법원에 개인회생 신청서와 변제계획안을 제출합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>학자금대출 포함 변제 금액, AI가 계산합니다</strong></p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '주의사항과 대안',
        content: '<p><strong style="color:#1e3a5f">개인회생 전에 학자금대출 상환 유예·감면 제도를 먼저 확인하세요.</strong></p>\n<ul>\n<li><strong>상환 유예</strong> — 한국장학재단에서 실업·저소득 시 상환 유예를 신청할 수 있습니다.</li>\n<li><strong>신용회복위원회</strong> — 개인회생 전 단계로 신용회복위원회의 개인워크아웃(이자 감면, 상환 기간 연장)을 이용할 수 있습니다.</li>\n<li><strong>파산과 비교</strong> — 소득이 전혀 없고 채무가 많으면 파산·면책이 더 유리할 수 있습니다. 상황에 맞는 제도를 선택하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 개인회생 외에도 상환 유예, 워크아웃 등 여러 제도를 비교해보세요.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 회생계획 해석 기준', summary: '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 인가된 회생계획의 해석은 문언에 충실하되, 문언이 불명확한 경우에는 회생계획의 작성 경위, 채권자들의 의사 등을 종합적으로 고려해야 한다고 판시했습니다.', takeaway: '비슷한 상황이라면 변제계획안 작성 시 학자금대출 포함 여부와 변제 비율을 명확히 기재하세요.' }],
    faq: [
      { question: '학자금대출만 있어도 개인회생이 되나요?', answer: '<p>네, 채무 종류에 제한은 없습니다. 다만 소득이 있어야 변제가 가능하므로 소득 요건을 확인하세요.</p>' },
      { question: '개인회생 중 학자금대출 이자가 계속 붙나요?', answer: '<p>개인회생 개시 결정이 나면 채무에 대한 이자 발생이 중단됩니다.</p>' },
      { question: '학자금대출 연체 중인데 신청 가능한가요?', answer: '<p>네, 연체 상태라도 개인회생 신청이 가능합니다. 오히려 연체가 지속되면 빠른 신청이 유리합니다.</p>' },
      { question: '변제 기간은 얼마나 되나요?', answer: '<p>최장 5년(60개월)입니다. 변제율이 높으면 3년으로 단축될 수도 있습니다.</p>' },
      { question: '개인회생이 취업에 불이익이 되나요?', answer: '<p>개인회생은 공무원 결격사유가 아니며, 대부분의 직종에서 불이익이 없습니다. 금융권 등 일부 직종에서만 확인하세요.</p>' },
    ],
    cta: { text: '학자금대출 포함 개인회생 AI로 시뮬레이션하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '개인회생 vs 파산', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '변제금 계산', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '카드빚 개인회생', href: '/guide/rehabilitation/rehabilitation-credit-card-debt-included' },
    ],
  },

  // ══════════ 파산 1개 ══════════

  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-gambling-debt-discharge',
    keyword: '도박빚 파산 면책 가능성',
    questionKeyword: '도박으로 생긴 빚도 파산 면책을 받을 수 있나요?',
    ctaKeyword: '도박빚 파산 면책 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '도박빚 파산 면책 가능성과 대응 3단계 | 로앤가이드',
      description: '도박으로 빚이 늘어 파산을 신청하려는데 면책이 안 될까 두렵습니다. 가능성과 대응법을 지금 확인하세요.',
    },
    intro: '<p>도박에 빠져 수천만원의 빚이 생겼습니다. 파산을 신청하면 면책을 받을 수 있을까요? 도박채무는 면책 불허가 사유에 해당하지만, 법원이 재량으로 면책을 허가하는 경우도 있습니다. 대응 방법을 확인해보세요.</p>',
    timelineSteps: ['1단계: 채무 현황과 도박 경위 정리', '2단계: 면책 불허가 사유 검토', '3단계: 반성문·갱생 자료 준비'],
    sections: [
      {
        title: '도박빚과 면책 불허가 사유',
        content: '<p><strong style="color:#1e3a5f">채무자회생법 제564조는 도박 등 사행행위로 재산을 감소시킨 경우를 면책 불허가 사유로 규정합니다.</strong></p>\n<ul>\n<li><strong>원칙적 불허가</strong> — 도박, 사치, 유흥으로 현저히 재산을 감소시킨 경우 면책이 불허가될 수 있습니다.</li>\n<li><strong>재량 면책</strong> — 다만 법원은 채무자의 반성, 갱생 의지, 생활 변화를 고려하여 재량으로 면책을 허가할 수 있습니다(재량면책).</li>\n<li><strong>실무 경향</strong> — 실제로 법원은 도박빚이라도 반성이 충분하고 갱생 가능성이 있으면 재량면책을 허가하는 경향이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 도박빚이라도 재량면책이 가능하므로 반성과 갱생 의지를 입증하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '재량면책을 받기 위한 준비',
        content: '<p><strong style="color:#1e3a5f">재량면책 허가를 위해서는 구체적인 반성과 변화를 입증해야 합니다.</strong></p>\n<ol>\n<li><strong>반성문 작성</strong> — 도박을 시작하게 된 경위, 빚이 늘어난 과정, 반성과 다시는 하지 않겠다는 다짐을 구체적으로 작성합니다.</li>\n<li><strong>도박중독 치료</strong> — 한국도박문제예방치유원(1336)에서 상담·치료를 받고 수료증을 제출하면 법원 심사에 유리합니다.</li>\n<li><strong>생활 변화 증명</strong> — 취업 사실, 저축 내역, 가족 부양 사실 등 건전한 생활을 증명하는 자료를 준비합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>도박빚 파산 면책 가능성, AI가 분석합니다</strong></p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '면책 불허가 시 대안',
        content: '<p><strong style="color:#1e3a5f">면책이 불허가되더라도 다른 채무 정리 방법이 있습니다.</strong></p>\n<ul>\n<li><strong>개인회생</strong> — 개인회생은 면책 불허가 사유와 무관하게 변제계획만 이행하면 면책됩니다. 도박빚이 많은 경우 개인회생이 더 안전한 선택일 수 있습니다.</li>\n<li><strong>신용회복위원회</strong> — 워크아웃(개인채무조정)을 통해 이자 감면과 상환 기간 연장을 받을 수 있습니다.</li>\n<li><strong>재신청</strong> — 면책 불허가 후 상당 기간 건전한 생활을 유지한 후 재신청하면 면책이 허가될 가능성이 높아집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 면책이 어려우면 개인회생을 대안으로 검토하세요.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 파산 부당이득 반환', summary: '대법원 2023다316387 사건(대법원, 2026.01.29 선고)에서 법원은 파산선고 전의 파산채권자에 대한 변제가 부당이득에 해당하는지 여부를 판단하면서, 파산선고 전 채무자가 특정 채권자에게만 변제한 경우 파산관재인의 부당이득 반환 청구가 가능하다고 판시했습니다.', takeaway: '비슷한 상황이라면 파산 신청 전 특정 채권자에게만 변제하는 것은 피하세요. 편파변제로 문제가 될 수 있습니다.' }],
    faq: [
      { question: '온라인 도박빚도 파산 대상이 되나요?', answer: '<p>네, 도박 종류에 관계없이 채무 자체는 파산 채권에 포함됩니다. 다만 면책 여부는 법원 재량에 달려 있습니다.</p>' },
      { question: '도박 사실을 숨기면 어떻게 되나요?', answer: '<p>채무 원인을 숨기면 면책 불허가 사유가 됩니다. 솔직하게 밝히고 반성하는 것이 재량면책에 유리합니다.</p>' },
      { question: '도박중독 치료를 받으면 면책에 도움이 되나요?', answer: '<p>네, 한국도박문제예방치유원의 상담·치료 수료증은 법원 심사에서 매우 유리한 자료입니다.</p>' },
      { question: '면책까지 얼마나 걸리나요?', answer: '<p>파산 신청부터 면책 결정까지 보통 6개월~1년 정도 소요됩니다.</p>' },
    ],
    cta: { text: '도박빚 파산 면책 가능성 AI로 분석하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산 절차 전체', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 신청~면책 절차', href: '/guide/bankruptcy/application-to-discharge-full-procedure' },
      { label: '비면책 채권 정리', href: '/guide/bankruptcy/non-dischargeable-debts-after-bankruptcy' },
      { label: '파산 vs 개인회생', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation-comparison' },
      { label: '면책 불허가 사유', href: '/guide/bankruptcy/discharge-denial-reasons-key-cases' },
    ],
  },

  // ══════════ 전세 2개 ══════════

  {
    domain: 'jeonse',
    slug: 'jeonse-reverse-gap-tenant-response',
    keyword: '역전세 보증금 보호 방법',
    questionKeyword: '역전세 상황에서 보증금을 안전하게 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '역전세 보증금 보호 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '역전세 보증금 보호 방법 4단계 실전 가이드 | 로앤가이드',
      description: '전세 시세가 떨어져 보증금을 돌려받지 못할까 걱정됩니다. 보증금 보호 방법을 지금 확인하세요.',
    },
    intro: '<p>계약 만료가 다가오는데 전세 시세가 보증금보다 낮아졌습니다. 임대인이 "돈이 없어서 못 돌려준다"고 합니다. 역전세 상황에서 보증금을 지키는 구체적인 방법을 확인해보세요.</p>',
    timelineSteps: ['1단계: 대항력·우선변제권 확인', '2단계: 전세보증보험 가입 여부 확인', '3단계: 임차권등기명령 신청', '4단계: 보증금 반환소송'],
    sections: [
      {
        title: '역전세란 무엇인가',
        content: '<p><strong style="color:#1e3a5f">역전세는 전세 시세가 기존 보증금보다 하락하여 임대인이 보증금을 반환하기 어려운 상황입니다.</strong></p>\n<ul>\n<li><strong>발생 원인</strong> — 부동산 가격 하락, 금리 인상으로 전세 수요 감소 시 발생합니다.</li>\n<li><strong>임차인 위험</strong> — 임대인이 새 세입자를 구하지 못하거나 자금이 부족하면 보증금 반환이 지연됩니다.</li>\n<li><strong>법적 보호</strong> — 주택임대차보호법에 따라 임차인은 대항력과 우선변제권으로 보호됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 역전세 상황에서는 대항력 유지가 보증금 보호의 핵심입니다.</blockquote>',
      },
      {
        title: '보증금 보호 실전 대응',
        content: '<p><strong style="color:#1e3a5f">이사 가기 전에 반드시 보호 조치를 취하세요.</strong></p>\n<ol>\n<li><strong>전세보증보험 확인</strong> — HUG(주택도시보증공사) 또는 SGI(서울보증보험) 보증보험에 가입했다면 보증기관에 보증금 반환을 청구합니다.</li>\n<li><strong>임차권등기명령</strong> — 계약 종료 후 보증금을 못 받았다면 법원에 임차권등기명령을 신청하세요. 이사를 가더라도 대항력과 우선변제권이 유지됩니다.</li>\n<li><strong>내용증명 발송</strong> — 임대인에게 보증금 반환을 요구하는 내용증명을 발송합니다. 법적 절차의 시작점이 됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>역전세 보증금 보호 전략, AI가 정리합니다</strong></p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보증금 반환소송과 경매',
        content: '<p><strong style="color:#1e3a5f">임대인이 계속 보증금을 돌려주지 않으면 법적 절차를 진행합니다.</strong></p>\n<ul>\n<li><strong>보증금 반환소송</strong> — 소액사건(3,000만원 이하)은 간편 소송, 그 이상은 일반 민사소송으로 진행합니다.</li>\n<li><strong>강제집행</strong> — 판결 확정 후 임대인의 부동산, 예금 등을 압류하여 강제집행합니다.</li>\n<li><strong>경매 배당</strong> — 해당 주택이 경매에 넘어가면 배당 순위에 따라 보증금을 배당받습니다. 확정일자가 있으면 우선변제권이 인정됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 확정일자와 전입신고가 우선변제권의 핵심이므로 반드시 유지하세요.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 임차인 대항력 요건', summary: '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 주민등록의 전입신고가 임차인의 대항력 요건이 되려면 전입신고가 적법하게 이루어져야 하며, 전입신고만으로 대항력이 자동 성립하는 것이 아니라 실제 거주 사실이 뒷받침되어야 한다고 판시했습니다.', takeaway: '비슷한 상황이라면 전입신고 유지와 실제 거주 사실을 반드시 확인하세요. 대항력이 없으면 보증금 보호가 어려워집니다.' }],
    faq: [
      { question: '전세보증보험에 가입 안 했으면 어떻게 하나요?', answer: '<p>임차권등기명령을 먼저 신청한 뒤 보증금 반환소송을 진행하세요. 이사 전 임차권등기명령이 핵심입니다.</p>' },
      { question: '이사를 가면 대항력을 잃나요?', answer: '<p>네, 원칙적으로 전입신고를 유지해야 대항력이 있습니다. 이사 전에 반드시 임차권등기명령을 받으세요.</p>' },
      { question: '임대인이 파산하면 보증금은 어떻게 되나요?', answer: '<p>대항력과 우선변제권이 있으면 파산 절차에서도 우선적으로 배당받을 수 있습니다.</p>' },
      { question: '역전세 상황에서 계약 갱신을 해야 하나요?', answer: '<p>갱신보다는 보증금 반환을 받는 것이 유리합니다. 갱신하면 반환 시기가 더 늦어질 수 있습니다.</p>' },
      { question: '보증금 반환소송 비용은 얼마나 드나요?', answer: '<p>인지대와 송달료를 합쳐 소액사건은 수만원, 일반소송은 수십만원 수준입니다. 승소하면 상대방에게 청구할 수 있습니다.</p>' },
    ],
    cta: { text: '역전세 보증금 보호 방법 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
      { label: '계약 만료 후 절차', href: '/guide/jeonse/lease-expiry-deposit-return-steps' },
      { label: '임차권등기명령', href: '/guide/jeonse/lease-registration-order-process' },
      { label: '전세보증보험 청구', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '전입신고 보호', href: '/guide/jeonse/no-move-in-report-deposit-protection' },
    ],
  },

  {
    domain: 'jeonse',
    slug: 'jeonse-auction-deposit-priority',
    keyword: '경매 시 전세보증금 우선변제',
    questionKeyword: '경매로 넘어간 집에서 전세보증금을 우선 배당받을 수 있나요?',
    ctaKeyword: '경매 보증금 우선변제 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '경매 시 전세보증금 우선변제 3가지 핵심 기준 | 로앤가이드',
      description: '임대인 집이 경매에 넘어갔는데 보증금을 돌려받을 수 있을지 걱정됩니다. 우선변제 기준을 지금 확인하세요.',
    },
    intro: '<p>임대인의 빚 때문에 살고 있는 집이 경매에 넘어갔습니다. 보증금을 돌려받을 수 있을까요? 확정일자와 전입신고 시점에 따라 우선변제 순위가 달라집니다. 내 보증금이 보호되는지 확인해보세요.</p>',
    timelineSteps: ['1단계: 대항력·우선변제권 확인', '2단계: 배당요구 신청', '3단계: 배당기일 참석'],
    sections: [
      {
        title: '우선변제권의 3가지 요건',
        content: '<p><strong style="color:#1e3a5f">전세보증금 우선변제를 받으려면 3가지 요건을 모두 갖춰야 합니다.</strong></p>\n<ul>\n<li><strong>전입신고</strong> — 주민등록 전입신고를 마쳐야 합니다. 전입신고 다음 날 오전 0시에 대항력이 발생합니다.</li>\n<li><strong>확정일자</strong> — 임대차 계약서에 확정일자를 받아야 합니다. 주민센터나 법원에서 받을 수 있습니다.</li>\n<li><strong>실제 거주</strong> — 해당 주택에 실제로 거주하고 있어야 합니다. 전입신고만 하고 거주하지 않으면 대항력이 인정되지 않습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 전입신고 + 확정일자 + 실제 거주, 세 가지가 모두 갖춰져야 우선변제를 받습니다.</blockquote>',
      },
      {
        title: '배당요구와 배당 순위',
        content: '<p><strong style="color:#1e3a5f">경매 절차에서 보증금을 배당받으려면 배당요구 기간 내에 신청해야 합니다.</strong></p>\n<ol>\n<li><strong>배당요구 신청</strong> — 법원에서 보낸 경매 통지를 받으면 배당요구 종기일까지 배당요구를 합니다. 기한을 놓치면 배당에서 제외됩니다.</li>\n<li><strong>배당 순위</strong> — 확정일자 기준으로 순위가 정해집니다. 근저당권보다 확정일자가 빠르면 근저당권자보다 먼저 배당받습니다.</li>\n<li><strong>소액임차인 보호</strong> — 소액임차인(보증금 일정액 이하)은 확정일자 없이도 최우선변제를 받을 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>경매 배당 순위와 예상 배당액, AI가 분석합니다</strong></p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '배당이 부족할 때 대응',
        content: '<p><strong style="color:#1e3a5f">경매 낙찰가가 낮아 전액 배당을 받지 못하면 추가 대응이 필요합니다.</strong></p>\n<ul>\n<li><strong>부족분 청구</strong> — 배당으로 보증금 전액을 받지 못하면 임대인에게 부족분을 별도로 청구할 수 있습니다.</li>\n<li><strong>배당이의</strong> — 배당표에 이의가 있으면 배당기일에 이의를 제기하고 배당이의 소송을 진행합니다.</li>\n<li><strong>전세보증보험</strong> — 보증보험에 가입했다면 보증기관에 부족분을 청구할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 배당요구 기한을 반드시 지키고, 부족분은 임대인에게 별도로 청구하세요.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 중개사 확인설명 의무', summary: '대법원 2024다283668 사건(대법원, 2025.12.04 선고)에서 법원은 부동산 중개업자가 임대차계약 중개 시 해당 부동산의 임대차보증금 채무 규모를 정확히 확인·설명할 의무가 있으며, 이를 위반하여 임차인에게 손해가 발생한 경우 배상 책임이 있다고 판시했습니다.', takeaway: '비슷한 상황이라면 계약 당시 중개사가 선순위 근저당, 기존 임차인 정보를 충분히 설명했는지 확인하세요. 설명 의무 위반이면 중개사에게도 손해배상을 청구할 수 있습니다.' }],
    faq: [
      { question: '확정일자를 안 받았는데 배당을 받을 수 있나요?', answer: '<p>소액임차인에 해당하면 확정일자 없이도 최우선변제를 받을 수 있습니다. 지역별 보증금 기준을 확인하세요.</p>' },
      { question: '배당요구 기한을 놓치면 어떻게 되나요?', answer: '<p>배당에서 제외됩니다. 다만 임대인에게 별도로 보증금 반환 소송을 제기할 수는 있습니다.</p>' },
      { question: '경매 낙찰자에게 보증금을 요구할 수 있나요?', answer: '<p>대항력이 있으면 낙찰자(새 임대인)에게 보증금 반환을 요구할 수 있습니다. 대항력이 없으면 기존 임대인에게만 청구 가능합니다.</p>' },
      { question: '경매 통지를 못 받았는데 어떻게 하나요?', answer: '<p>법원 경매 사건 검색(대한민국 법원 경매정보)에서 해당 부동산을 직접 확인하고 즉시 배당요구를 하세요.</p>' },
    ],
    cta: { text: '경매 보증금 우선변제 가능 여부 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
      { label: '계약 만료 후 절차', href: '/guide/jeonse/lease-expiry-deposit-return-steps' },
      { label: '임차권등기명령', href: '/guide/jeonse/lease-registration-order-process' },
      { label: '전세보증보험 청구', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '전입신고 보호', href: '/guide/jeonse/no-move-in-report-deposit-protection' },
    ],
  },

  // ══════════ 이웃분쟁 2개 ══════════

  {
    domain: 'neighbor-dispute',
    slug: 'neighbor-cctv-privacy-dispute',
    keyword: 'CCTV 사생활 침해 이웃 분쟁',
    questionKeyword: '이웃이 설치한 CCTV가 우리 집을 촬영하면 어떻게 대응하나요?',
    ctaKeyword: 'CCTV 사생활 침해 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '이웃 CCTV 사생활 침해 대응 3단계 방법 | 로앤가이드',
      description: '이웃이 설치한 CCTV가 우리 집 현관을 비추고 있어 불쾌합니다. 법적 대응 방법을 지금 확인하세요.',
    },
    intro: '<p>옆집에서 설치한 CCTV가 우리 집 현관과 거실 창문을 향하고 있습니다. 사생활이 침해되는 느낌인데, 법적으로 항의할 수 있는지 궁금합니다. CCTV 사생활 침해의 법적 기준과 대응 방법을 확인해보세요.</p>',
    timelineSteps: ['1단계: 촬영 범위 확인·증거 확보', '2단계: 이웃에게 조정 요청', '3단계: 법적 조치(촬영 중지·손배)'],
    sections: [
      {
        title: 'CCTV 사생활 침해의 법적 기준',
        content: '<p><strong style="color:#1e3a5f">개인 CCTV가 타인의 사생활 영역을 촬영하면 불법이 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>개인정보보호법</strong> — 공개된 장소에서 CCTV를 설치·운영하려면 안내판을 설치해야 합니다. 개인 주거 공간을 촬영하면 개인정보 침해에 해당합니다.</li>\n<li><strong>촬영 범위</strong> — 자기 소유 공간만 촬영하는 것은 합법이지만, 이웃 집 현관·창문·마당까지 촬영하면 사생활 침해입니다.</li>\n<li><strong>수인한도</strong> — 법원은 촬영 목적, 범위, 필요성, 피해 정도를 종합하여 수인한도 초과 여부를 판단합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 이웃의 CCTV가 내 주거 영역을 촬영하면 사생활 침해로 법적 조치가 가능합니다.</blockquote>',
      },
      {
        title: '대응 절차',
        content: '<p><strong style="color:#1e3a5f">단계적으로 대응하되, 증거 확보를 먼저 하세요.</strong></p>\n<ol>\n<li><strong>증거 확보</strong> — CCTV 촬영 방향과 범위를 사진·동영상으로 기록합니다. CCTV에 우리 집이 찍히고 있다는 것을 입증할 자료가 필요합니다.</li>\n<li><strong>이웃에게 요청</strong> — 내용증명 또는 서면으로 CCTV 각도 조정이나 마스킹 처리를 요청합니다.</li>\n<li><strong>분쟁 조정</strong> — 개인정보분쟁조정위원회에 조정을 신청하거나, 지자체 분쟁 조정을 이용합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>CCTV 사생활 침해 대응 방법, AI가 정리합니다</strong></p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '법적 조치와 손해배상',
        content: '<p><strong style="color:#1e3a5f">조정이 안 되면 민사소송으로 촬영 중지와 손해배상을 청구합니다.</strong></p>\n<ul>\n<li><strong>촬영 금지 가처분</strong> — 긴급한 경우 법원에 CCTV 촬영 금지 가처분을 신청할 수 있습니다.</li>\n<li><strong>손해배상 청구</strong> — 사생활 침해로 인한 정신적 피해에 대해 위자료를 청구합니다.</li>\n<li><strong>형사 고소</strong> — 카메라를 이용한 촬영죄(성폭력처벌법)에 해당하는 극단적 경우 형사 고소도 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 단계적으로 요청 → 조정 → 소송 순서로 진행하세요.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 반복 소음 피해 법적 판단', summary: '대법원 2023두10313 사건(대법원, 2023.12.14 선고)에서 법원은 반복적으로 의도적 소음을 발생시켜 이웃에게 불안과 공포를 준 행위가 경범죄처벌법상 인근소란에 해당한다고 판시하며, 이웃 간 반복적 생활 침해 행위에 대한 법적 제재 기준을 제시했습니다.', takeaway: '비슷한 상황이라면 CCTV를 통한 반복적 사생활 감시도 생활 침해 행위로 볼 수 있으므로, 침해 사실을 기록하고 법적 조치를 검토하세요.' }],
    faq: [
      { question: 'CCTV 촬영 각도만 바꿔달라고 요청할 수 있나요?', answer: '<p>네, 촬영 각도 조정이나 마스킹 처리를 요청할 수 있습니다. 먼저 서면으로 요청하고, 응하지 않으면 법적 조치를 진행하세요.</p>' },
      { question: '아파트 복도에 설치된 CCTV도 문제가 되나요?', answer: '<p>공용 복도는 사적 공간이 아니지만, 특정 세대 현관만 집중 촬영하면 사생활 침해가 될 수 있습니다.</p>' },
      { question: '개인정보보호위원회에 신고하면 어떻게 되나요?', answer: '<p>개인정보보호위원회가 조사 후 시정 명령을 내릴 수 있으며, 과태료 처분도 가능합니다.</p>' },
      { question: '내 CCTV로 이웃 집이 일부 찍히면 불법인가요?', answer: '<p>자기 집 보안 목적이고 이웃 집이 부수적으로 촬영되는 정도라면 바로 불법이 되지는 않습니다. 다만 마스킹 처리를 하는 것이 안전합니다.</p>' },
    ],
    cta: { text: 'CCTV 사생활 침해 대응 방법 AI로 확인하기', link: '/chat?domain=neighbor-dispute' },
    internalLinks: [
      { label: '층간소음 어디부터', href: '/guide/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '층간소음 대응', href: '/guide/neighbor-dispute/floor-noise-dispute-response' },
      { label: '소음 기준', href: '/guide/neighbor-dispute/floor-noise-decibel-standard' },
      { label: '소음 증거 확보', href: '/guide/neighbor-dispute/neighbor-noise-evidence-app-recording' },
      { label: '누수 피해 청구', href: '/guide/neighbor-dispute/water-leak-damage-claim' },
    ],
  },

  {
    domain: 'neighbor-dispute',
    slug: 'neighbor-shared-facility-dispute',
    keyword: '아파트 공용시설 사적 사용 분쟁',
    questionKeyword: '이웃이 아파트 공용 공간을 사적으로 사용하면 어떻게 하나요?',
    ctaKeyword: '공용시설 분쟁 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '아파트 공용시설 사적 사용 분쟁 대응 3단계 | 로앤가이드',
      description: '이웃이 복도에 짐을 쌓거나 공용 주차장을 독점합니다. 법적 대응 방법을 지금 확인하세요.',
    },
    intro: '<p>옆집 이웃이 복도에 짐을 쌓아두고, 공용 주차장에 개인 물건을 놓아 다른 입주자가 불편을 겪고 있습니다. 관리사무소에 민원을 넣어도 해결되지 않습니다. 공용시설 사적 사용에 대한 법적 대응 방법을 확인해보세요.</p>',
    timelineSteps: ['1단계: 관리규약 확인·증거 촬영', '2단계: 관리사무소·입주자대표회의 민원', '3단계: 법적 조치(방해배제·손배)'],
    sections: [
      {
        title: '공용시설 사적 사용의 법적 문제',
        content: '<p><strong style="color:#1e3a5f">아파트 공용부분은 전체 입주자의 공동 소유이므로 특정인이 독점 사용할 수 없습니다.</strong></p>\n<ul>\n<li><strong>집합건물법</strong> — 집합건물의 소유 및 관리에 관한 법률 제11조에 따라 공용부분은 구분소유자 전원의 공유입니다.</li>\n<li><strong>관리규약 위반</strong> — 대부분의 아파트 관리규약은 복도, 계단, 주차장 등 공용 공간에 개인 물품 적치를 금지하고 있습니다.</li>\n<li><strong>소방법 위반</strong> — 복도에 물건을 쌓으면 소방시설설치법상 피난통로 방해에 해당하여 과태료 대상이 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 공용 공간 독점 사용은 관리규약 위반이자 소방법 위반이 될 수 있습니다.</blockquote>',
      },
      {
        title: '단계별 대응 방법',
        content: '<p><strong style="color:#1e3a5f">관리사무소 → 입주자대표회의 → 법적 조치 순서로 단계적으로 진행하세요.</strong></p>\n<ol>\n<li><strong>관리사무소 민원</strong> — 서면으로 민원을 접수하고 처리 결과를 요청합니다. 구두 민원보다 서면이 기록으로 남습니다.</li>\n<li><strong>입주자대표회의</strong> — 관리사무소가 해결하지 못하면 입주자대표회의에 안건으로 상정을 요청합니다.</li>\n<li><strong>지자체 신고</strong> — 소방통로 방해는 119 또는 지자체에 신고하면 현장 점검 후 시정 명령이 내려집니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>공용시설 분쟁 대응 전략, AI가 정리합니다</strong></p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '법적 조치',
        content: '<p><strong style="color:#1e3a5f">행정 조치로 해결되지 않으면 민사소송을 검토하세요.</strong></p>\n<ul>\n<li><strong>방해배제 청구</strong> — 공용부분에 대한 방해배제 청구 소송을 제기하여 물건 제거를 요구할 수 있습니다.</li>\n<li><strong>손해배상 청구</strong> — 공용시설 사적 사용으로 실질적 손해(주차 불가, 통행 방해 등)가 있으면 손해배상을 청구합니다.</li>\n<li><strong>관리단 소송</strong> — 관리단(입주자대표회의)이 원고가 되어 소송을 제기하면 비용 부담이 분산됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #1e3a5f;padding:12px;margin:16px 0;background:#f8f9fa"><strong>핵심 요약</strong> — 소방통로 방해 신고가 가장 빠르고 효과적인 1차 대응입니다.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 수인한도 기준 판단', summary: '수원지방법원 2019가6588 사건(2019.09.09 선고)에서 법원은 환경오염피해 및 시설물 관리 의무와 관련하여 수인한도를 넘는 생활 방해에 대해 손해배상 책임을 인정했습니다.', takeaway: '비슷한 상황이라면 공용시설 사적 사용으로 인한 구체적 피해(통행 방해, 주차 불가 등)를 기록하세요. 수인한도를 넘는 피해 입증이 소송에서 핵심입니다.' }],
    faq: [
      { question: '복도에 신발장을 놓는 것도 문제가 되나요?', answer: '<p>관리규약에 금지 규정이 있으면 위반입니다. 또한 피난통로를 좁히면 소방법 위반에 해당합니다.</p>' },
      { question: '관리사무소가 조치를 안 하면 어떻게 하나요?', answer: '<p>입주자대표회의에 안건 상정을 요청하고, 소방통로 방해는 119에 직접 신고할 수 있습니다.</p>' },
      { question: '공용 주차장에 개인 물건을 놓으면 법적 문제가 되나요?', answer: '<p>주차장은 전체 입주자의 공유이므로 특정인이 독점 사용할 수 없습니다. 관리규약 위반으로 제거를 요구할 수 있습니다.</p>' },
      { question: '개인이 직접 소송을 걸 수 있나요?', answer: '<p>네, 구분소유자라면 공용부분에 대한 방해배제를 개인이 직접 청구할 수 있습니다.</p>' },
      { question: '옥상을 특정 세대가 독점 사용하면 어떻게 하나요?', answer: '<p>옥상이 공용부분이면 독점 사용 계약이 없는 한 불법입니다. 관리단을 통해 원상복구를 요구하세요.</p>' },
    ],
    cta: { text: '공용시설 분쟁 대응 방법 AI로 확인하기', link: '/chat?domain=neighbor-dispute' },
    internalLinks: [
      { label: '층간소음 어디부터', href: '/guide/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '층간소음 대응', href: '/guide/neighbor-dispute/floor-noise-dispute-response' },
      { label: '소음 기준', href: '/guide/neighbor-dispute/floor-noise-decibel-standard' },
      { label: '소음 증거 확보', href: '/guide/neighbor-dispute/neighbor-noise-evidence-app-recording' },
      { label: '누수 피해 청구', href: '/guide/neighbor-dispute/water-leak-damage-claim' },
    ],
  },
];
