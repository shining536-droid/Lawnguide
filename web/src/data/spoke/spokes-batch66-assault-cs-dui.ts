import { SpokePage } from '../spoke-pages';

// batch66 assault(3) + child-support(2) + dui(1) — 6개 (2026-05-16)
//
// 고유 존재 이유:
// 1. assault-passenger-roadrage-streetfight-track — 운전자 vs 보행자/탑승자 길거리 폭행 (road rage).
// 2. assault-medical-staff-patient-hospital-track — 응급실·진료실 의료진 폭행 (응급의료법·의료법 가중).
// 3. assault-public-official-on-duty-resistance-track — 공무집행 중 공무원 폭행 (공무집행방해 + 폭행 경합).
// 4. child-support-private-school-tuition-additional-track — 사립·국제학교 학비 양육비 외 추가 분담.
// 5. child-support-non-cash-payment-property-recognition-track — 부동산·예금·주식 일시금 양육비 대체.
// 6. dui-passenger-acknowledge-aiding-abetting-track — 음주 사실 알고 동승한 방조죄 (도교법 148조의2 + 형법 32조).

export const spokesBatch66AssaultCsDui: SpokePage[] = [
  // ─── 1. assault-passenger-roadrage-streetfight-track ───
  {
    domain: 'assault',
    slug: 'assault-passenger-roadrage-streetfight-track',
    keyword: '길거리 폭행 운전자 보행자',
    questionKeyword: '운전 중 보행자와 시비 끝에 차에서 내려 폭행이 벌어졌어요. 어떻게 따지나요?',
    ctaKeyword: '운전자 보행자 길거리 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '운전자 보행자 길거리 폭행 — 5단계 road rage 다툼 | 로앤가이드',
      description:
        '운전 중 시비 끝에 차에서 내려 폭행이 발생했다면 폭행·도로교통법 결합 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"좁은 골목길에서 차가 보행자에게 경적을 울리며 위협 운전을 했고, 항의했더니 운전자가 차에서 내려 멱살을 잡고 밀쳐 넘어졌습니다. 머리와 손목 타박상으로 병원에 갔고, 운전자는 \"보행자가 길을 막아서 그랬다\"며 책임을 회피합니다." 운전자 vs 보행자 길거리 폭행(road rage)은 ① 형법 260조 폭행죄·257조 상해죄 ② 도로교통법상 위협 운전·난폭 운전 ③ 운전자 보험 면책 검토 ④ 본인 일부 자극 행위 시 과실 상계 ⑤ 형사 + 민사 + 행정(면허 처분) 5가지 트랙이 결합되는 영역. 차에서 내려 폭행한 순간 도로교통법과 별개로 일반 폭행·상해 책임이 발생하고, 블랙박스·CCTV가 양측 모두에게 핵심 증거. 대응은 ① 증거 ② 의료 ③ 신고 ④ 형사·민사 ⑤ 합의 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 운전자 보행자 길거리 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·신고·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 블랙박스·CCTV·휴대폰 영상 보전</strong></li>\n<li><strong>② 의료 진단서·부상 사진</strong></li>\n<li><strong>③ 112 신고·현장 출동 기록</strong></li>\n<li><strong>④ 폭행·상해 형사 고소 + 도로교통법 위협 운전 별도</strong></li>\n<li><strong>⑤ 손해배상 청구 (위자료·치료비)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 차에서 내려 폭행한 순간 도로교통법과 별개로 일반 폭행·상해 영역. 위협 운전은 별도 도로교통법 위반. 블랙박스가 양방향 증거.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보전 (즉시)</strong> — 블랙박스·CCTV·증인 연락처.</li>\n<li><strong>2단계 — 의료 진단 (즉시~1주)</strong> — 응급실·진단서.</li>\n<li><strong>3단계 — 112 신고·경찰 사건 접수</strong></li>\n<li><strong>4단계 — 폭행 고소 + 위협 운전 별도 신고</strong></li>\n<li><strong>5단계 — 협의 결렬 시 민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">운전자 길거리 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>운전자 차량 블랙박스·본인 휴대폰 영상</strong></li>\n<li><strong>주변 상가·도로 CCTV 보존 요청 자료</strong></li>\n<li><strong>의료 진단서·치료비 영수증·부상 사진</strong></li>\n<li><strong>증인 진술서·연락처</strong></li>\n<li><strong>경찰 사건 접수번호·진술조서</strong></li>\n<li><strong>운전자 차량번호·인적사항·보험사 정보</strong></li>\n<li><strong>본인 신분증·동선 정리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운전자 블랙박스는 본인에게 불리할 수 있지만 위협 운전 입증에도 핵심. 경찰에 보존 요청 가능. 차에서 내리는 순간부터의 폭행은 운전자 보험 면책 사정으로 평가될 여지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위협 운전 + 폭행 별도</strong> — 도로교통법 + 형법 경합.</li>\n<li><strong>차에서 내림</strong> — 운전자 보험 면책 영역 가능.</li>\n<li><strong>본인 일부 자극</strong> — 과실 상계 사정.</li>\n<li><strong>블랙박스 양면성</strong> — 본인에게도 영상 검토 필요.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운전 중 시비 폭행',
        summary:
          '대법원 2019도14056 영역에서 법원은 운전 중 시비가 발생한 사안에서 차에서 내려 행해진 폭행 행위는 도로교통법과 별개로 형법상 폭행·상해 책임이 성립할 수 있고, 위협 운전 부분은 별도 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '차에서 내린 후 폭행은 도로교통법과 별개. 위협 운전은 별도 책임. 블랙박스가 양면 증거.',
      },
    ],
    faq: [
      {
        question: '운전자가 \"보행자가 길을 막았다\"고 주장합니다',
        answer:
          '<strong>일부 자극 사정이 있더라도 차에서 내려 폭행한 행위 자체 책임은 별도 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '블랙박스를 운전자가 안 준다고 합니다',
        answer:
          '<strong>경찰 신고 시 압수·임의제출 협조 요청 가능합니다.</strong> 보존 요청 즉시 권장.',
      },
      {
        question: '위협 운전도 형사 처벌 대상인가요?',
        answer:
          '<strong>도로교통법상 난폭 운전·보복 운전으로 별도 처벌 가능한 영역입니다.</strong>',
      },
      {
        question: '치료비·위자료는 얼마인가요?',
        answer:
          '<strong>사례에 따라 다르지만 부상 정도·녹화 영상 명확성에 따라 인정 범위가 검토됩니다.</strong>',
      },
      {
        question: '운전자 보험으로 처리되나요?',
        answer:
          '<strong>차에서 내려 한 폭행은 자동차 사고 면책 영역이라 보험 적용이 어려운 사례가 많습니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 형사 고소', href: '/guide/assault/assault-complaint-procedure' },
      { label: '손해배상 청구', href: '/guide/assault/assault-damage-claim' },
      { label: '난폭운전·보복운전', href: '/guide/assault/assault-road-rage-traffic-law' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 2. assault-medical-staff-patient-hospital-track ───
  {
    domain: 'assault',
    slug: 'assault-medical-staff-patient-hospital-track',
    keyword: '의료진 폭행 응급실',
    questionKeyword: '응급실에서 의료진을 폭행하면 가중처벌되나요? 피해 의료진은 어떻게 대응하나요?',
    ctaKeyword: '의료진 폭행 응급실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '응급실 의료진 폭행 — 5단계 가중처벌·의료법 다툼 | 로앤가이드',
      description:
        '응급실·진료실에서 의료진 폭행 피해를 입었다면 응급의료법·의료법 가중 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"응급실 야간 근무 중 술 취한 환자 보호자가 \"왜 빨리 안 봐주냐\"며 의사 멱살을 잡고 의무 기록 모니터를 던졌어요. 안경이 깨지고 손목 인대를 다쳤습니다. 병원은 \"또 일이 커진다\"며 합의로 덮자고 하는데 무서워서 출근도 못 하겠어요." 응급실·진료실 의료진 폭행은 ① 형법 폭행·상해 ② 응급의료법 12조(응급의료 방해) 5년 이하 징역 또는 5천만원 이하 벌금 가중 ③ 의료법 12조3항(진료 방해) 가중 ④ 병원 측 안전 의무 + 산재 ⑤ 형사 + 민사 + 산재 동시 5가지 트랙이 결합되는 영역. 응급의료 방해는 반의사불벌 적용 안 되고, 의료진 보호 강화로 합의해도 처벌 가능 영역. 대응은 ① 증거 ② 의료 ③ 신고 ④ 형사 ⑤ 산재·민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 응급실 의료진 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·신고·형사·산재 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 응급실·진료실 CCTV·녹음</strong></li>\n<li><strong>② 의료 진단·진단서·부상 사진</strong></li>\n<li><strong>③ 즉시 112 신고·경찰 출동</strong></li>\n<li><strong>④ 응급의료법·의료법 위반 형사 고소</strong></li>\n<li><strong>⑤ 산재 신청 + 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 응급의료 방해는 반의사불벌 안 됨. 가해자가 합의해도 처벌 가능 영역. 의료진은 산재 + 민사 동시 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 CCTV·녹음·증인 확보 (즉시)</strong></li>\n<li><strong>2단계 — 의료 진단서 (즉시~1주)</strong></li>\n<li><strong>3단계 — 경찰 신고·응급의료 방해 신고 (1339·112)</strong></li>\n<li><strong>4단계 — 응급의료법·폭행 형사 고소</strong></li>\n<li><strong>5단계 — 산재 신청 + 민사 손해배상 병행</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">응급실 의료진 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>응급실·진료실 CCTV 영상</strong></li>\n<li><strong>현장 녹음·동료 진술서</strong></li>\n<li><strong>의무 기록·진단서·부상 사진</strong></li>\n<li><strong>병원 사건 보고서·일지</strong></li>\n<li><strong>출동 경찰 진술조서·접수번호</strong></li>\n<li><strong>가해자 인적사항·보호자 정보</strong></li>\n<li><strong>본인 근로계약·재직증명 (산재용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 응급실 CCTV는 병원 측 협조 + 경찰 요청으로 보존. 동료 의료진 진술서가 강력한 증거. 산재 신청은 별도 트랙으로 형사와 무관히 진행 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>응급의료법 가중</strong> — 일반 폭행보다 무거운 영역.</li>\n<li><strong>반의사불벌 배제</strong> — 합의해도 처벌 가능.</li>\n<li><strong>의료법 진료 방해</strong> — 가중 추가.</li>\n<li><strong>산재 + 민사</strong> — 별도 트랙 병행.</li>\n<li><strong>병원 안전 의무</strong> — 사용자 책임 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112 / 응급의료 1339</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 응급실 의료진 폭행 가중',
        summary:
          '대법원 2020도10330 영역에서 법원은 응급실에서 의료진에게 폭행·협박을 가한 행위에 대하여 응급의료에 관한 법률 위반이 적용되어 일반 폭행죄와 별개로 무겁게 평가될 여지가 있고, 응급의료 방해 부분은 반의사불벌 규정이 적용되지 않는다고 본 사례 흐름이 있습니다.',
        takeaway: '응급실 의료진 폭행은 응급의료법 가중 영역. 합의해도 처벌 가능. 의료진 보호 강화 추세.',
      },
    ],
    faq: [
      {
        question: '가해자가 합의를 요청합니다',
        answer:
          '<strong>응급의료법 위반은 반의사불벌 적용 안 되어 합의해도 처벌 가능한 영역입니다.</strong>',
      },
      {
        question: '진료실(외래) 폭행도 가중되나요?',
        answer:
          '<strong>의료법 12조3항으로 진료 방해 가중 적용될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '병원이 신고 말리는데 어떻게 하나요?',
        answer:
          '<strong>본인 단독으로 신고 가능하고, 병원 안전 의무 위반 시 사용자 책임도 검토됩니다.</strong>',
      },
      {
        question: '산재로 인정되나요?',
        answer:
          '<strong>근무 중 폭행은 업무상 재해로 산재 인정 가능한 사례가 많습니다.</strong>',
      },
      {
        question: '환자 보호자도 가중되나요?',
        answer:
          '<strong>응급의료 방해 주체는 환자·보호자·제3자 누구나 해당될 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '응급의료 방해 가중', href: '/guide/assault/assault-emergency-medical-aggravated' },
      { label: '의료진 폭행', href: '/guide/assault/assault-medical-staff-protection' },
      { label: '직장 내 폭행 산재', href: '/guide/assault/assault-workplace-industrial-accident' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 3. assault-public-official-on-duty-resistance-track ───
  {
    domain: 'assault',
    slug: 'assault-public-official-on-duty-resistance-track',
    keyword: '공무집행 중 공무원 폭행',
    questionKeyword: '단속 중인 경찰·공무원을 폭행하면 어떻게 처벌되나요? 공무집행방해죄 함께 적용되나요?',
    ctaKeyword: '공무집행 공무원 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공무집행 중 공무원 폭행 — 5단계 공무집행방해 결합 다툼 | 로앤가이드',
      description:
        '공무집행 중인 공무원에게 폭행이 발생했다면 공무집행방해 + 폭행 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"심야 거리 소란 신고로 출동한 경찰관이 술 취한 시민을 제지하던 중 발길질·주먹을 맞아 코뼈가 부러졌어요. 경찰은 \"공무집행 중이라 가해자는 공무집행방해죄까지 추가된다\"고 하는데 정확히 어떤 절차로 진행되는지, 본인 치료비·위자료는 어떻게 받는지 막막합니다." 공무집행 중 공무원 폭행은 ① 형법 136조 공무집행방해 5년 이하 징역 또는 1천만원 이하 벌금 ② 형법 260조 폭행·257조 상해죄 경합 ③ 특수공무집행방해(단체·흉기) 가중 ④ 공무원 산재(공무상 재해) ⑤ 국가배상 + 가해자 민사 5가지 트랙이 결합되는 영역. 공무집행방해와 폭행·상해는 별개 죄로 실체적 경합 처리 영역. 공무원은 공무상 재해로 별도 보상도 가능. 대응은 ① 증거 ② 의료 ③ 진술 ④ 형사 ⑤ 산재·민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공무집행 중 공무원 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·진술·형사·보상 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 바디캠·CCTV·동료 증언 확보</strong></li>\n<li><strong>② 의료 진단·진단서·부상 사진</strong></li>\n<li><strong>③ 진술조서 작성 (공무집행 정당성 명시)</strong></li>\n<li><strong>④ 공무집행방해 + 폭행·상해 경합 송치</strong></li>\n<li><strong>⑤ 공무상 재해 + 국가배상·민사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공무집행방해와 폭행·상해는 실체적 경합 영역. 흉기·단체 시 특수가중. 공무원은 공무상 재해 별도 보상.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·송치·보상 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 바디캠·동료 진술 확보 (즉시)</strong></li>\n<li><strong>2단계 — 의료 진단·치료 (즉시~1주)</strong></li>\n<li><strong>3단계 — 진술조서·사건 보고서 (1~2주)</strong></li>\n<li><strong>4단계 — 검찰 송치·기소 (1~3개월)</strong></li>\n<li><strong>5단계 — 공무상 재해 + 국가배상 별도</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공무집행 공무원 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·진술·보상 갈래입니다.</strong></p>\n<ul>\n<li><strong>바디캠·순찰차 블랙박스 영상</strong></li>\n<li><strong>주변 CCTV·시민 휴대폰 영상</strong></li>\n<li><strong>동료 공무원 진술서</strong></li>\n<li><strong>의료 진단서·부상 사진·치료비</strong></li>\n<li><strong>사건 보고서·일지·신고 접수 기록</strong></li>\n<li><strong>본인 공무원증·근무 명령서</strong></li>\n<li><strong>가해자 인적사항·인상착의</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 바디캠은 공무집행 정당성 + 가해자 행위 동시 입증 핵심 증거. 동료 진술은 단일 시각 한계를 보완. 공무상 재해 신청은 형사와 별개 트랙으로 즉시 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공무집행 정당성</strong> — 적법한 직무 집행 입증.</li>\n<li><strong>경합 처리</strong> — 공무집행방해 + 폭행·상해.</li>\n<li><strong>특수가중</strong> — 흉기·단체 시 더 무거움.</li>\n<li><strong>공무상 재해</strong> — 형사와 별도 보상.</li>\n<li><strong>국가배상</strong> — 별도 청구 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공무집행방해 + 상해 경합',
        summary:
          '대법원 2019도14041 영역에서 법원은 적법한 공무집행 중인 공무원에 대하여 폭행·상해를 가한 사안에서 공무집행방해죄와 폭행·상해죄가 실체적 경합 관계로 평가될 수 있고, 흉기를 사용한 경우 특수공무집행방해로 가중될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '공무집행방해 + 폭행·상해 경합. 흉기·단체 시 특수가중. 공무원 보호 강화 흐름.',
      },
    ],
    faq: [
      {
        question: '술 취한 상태였다고 감경되나요?',
        answer:
          '<strong>주취는 양형 사정에 그치고 면책되지 않는 영역입니다.</strong>',
      },
      {
        question: '공무원 신분이 아닌데 단속 협조 중이면?',
        answer:
          '<strong>공무집행 보조자도 일정 범위에서 보호 대상에 포함될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '소방관·의무경찰도 같나요?',
        answer:
          '<strong>현역·의무경찰·소방관 등 공무집행 중인 자는 동일하게 보호받는 영역입니다.</strong>',
      },
      {
        question: '공무상 재해는 어떻게 신청하나요?',
        answer:
          '<strong>소속 기관 인사·복지 부서에 신청. 공무원연금공단 절차로 진행됩니다.</strong>',
      },
      {
        question: '본인 치료비·위자료 별도 청구 가능한가요?',
        answer:
          '<strong>가해자 상대 민사·국가배상 별도 청구 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '공무집행방해', href: '/guide/assault/assault-public-official-obstruction' },
      { label: '특수공무집행방해', href: '/guide/assault/assault-special-public-obstruction' },
      { label: '공무상 재해', href: '/guide/assault/assault-public-officer-injury-claim' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 4. child-support-private-school-tuition-additional-track ───
  {
    domain: 'child-support',
    slug: 'child-support-private-school-tuition-additional-track',
    keyword: '사립학교 학비 양육비 추가',
    questionKeyword: '아이가 사립초·국제학교에 다니는데 양육비 외 학비 추가 분담을 받을 수 있나요?',
    ctaKeyword: '사립학교 학비 양육비 추가 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사립학교 학비 양육비 추가 — 5단계 특별경비 분담 다툼 | 로앤가이드',
      description:
        '아이가 사립·국제학교에 다닌다면 양육비 외 학비 추가 분담 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 시 양육비 월 100만원으로 합의했는데 아이가 결혼 전부터 다니던 사립초 학비가 월 250만원입니다. 전 배우자는 \"양육비 안에 다 들어 있다\"며 추가 분담을 거부합니다. 본인 수입만으로는 학비 못 대고, 아이 교육 환경을 바꾸기도 어려워 답답합니다." 사립·국제학교 학비 추가 분담은 ① 양육비는 일반 양육 비용 + 특별 경비 구분 가능 ② 사립학교비·해외유학비·예체능 레슨비는 특별경비로 별도 청구 가능 영역 ③ 가정법원 양육비 변경 심판 (가사소송법) ④ 부모 합의·교육 환경 지속성 사정 ⑤ 사정 변경에 따른 증액 청구 5가지 트랙이 결합되는 영역. 학비가 합의 당시부터 큰 폭으로 정해져 있었거나 자녀 교육 환경이 결혼 중부터 이어진 경우 특별경비로 인정될 여지. 대응은 ① 학비 자료 ② 합의 검토 ③ 변경 청구 ④ 심리 ⑤ 이행 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사립학교 학비 양육비 추가 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·합의·청구·심리·이행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 학비 청구서·납입 영수증 정리</strong></li>\n<li><strong>② 이혼 시 양육비 합의 내용 검토</strong></li>\n<li><strong>③ 가정법원 양육비 변경 심판</strong></li>\n<li><strong>④ 특별경비 + 사정 변경 주장</strong></li>\n<li><strong>⑤ 결정 후 이행명령·이행관리원</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사립학교비는 양육비 외 특별경비로 별도 분담 청구 가능 영역. 결혼 중부터 다닌 환경 + 부모 합의 흐름이 핵심 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·이행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 학비·교육비 자료 정리 (즉시)</strong></li>\n<li><strong>2단계 — 양육비 합의서·결정문 검토</strong></li>\n<li><strong>3단계 — 가정법원 양육비 변경 심판 (3~6개월)</strong></li>\n<li><strong>4단계 — 양측 소득·자녀 환경 심리</strong></li>\n<li><strong>5단계 — 결정 후 이행명령·이행관리원 1644-6621</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">사립학교 학비 추가 분담 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·이행 갈래입니다.</strong></p>\n<ul>\n<li><strong>학비 청구서·납입 영수증·연간 학비표</strong></li>\n<li><strong>학교 재학증명서·입학 시기 자료</strong></li>\n<li><strong>이혼·양육비 합의서·확정 결정문</strong></li>\n<li><strong>양측 소득·재산 자료 (변경 청구용)</strong></li>\n<li><strong>아이 교육 환경 지속성 자료 (앨범·일지)</strong></li>\n<li><strong>본인 가계부·학비 부담 자료</strong></li>\n<li><strong>본인 신분증·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결혼 중부터 같은 학교를 다닌 경우 \"부모 합의된 교육 환경\"으로 평가받기 쉬움. 갑작스러운 학교 변경은 아이 정서 사정도 함께 주장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특별경비 인정 범위</strong> — 사립·해외·예체능.</li>\n<li><strong>부모 합의 흐름</strong> — 결혼 중부터 다닌 사정.</li>\n<li><strong>양측 소득 격차</strong> — 분담 비율 사정.</li>\n<li><strong>사정 변경</strong> — 학비 인상·진학 변경.</li>\n<li><strong>이행 강제</strong> — 이행명령·과태료·감치.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원 1899-9595</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특별경비 분담 인정',
        summary:
          '대법원 2022스541 영역에서 법원은 자녀가 결혼 기간 중부터 다니던 사립학교 학비 등 통상의 양육비를 초과하는 특별 비용에 대하여 양육비와 별도로 분담을 명할 수 있고, 양측 소득과 자녀 교육 환경의 지속성 등을 종합하여 분담 비율을 정할 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '사립학교비는 특별경비로 별도 분담 가능 영역. 교육 환경 지속성 + 양측 소득이 핵심 사정.',
      },
    ],
    faq: [
      {
        question: '양육비 합의서에 \"학비 포함\"이라고 적혀 있어요',
        answer:
          '<strong>당시 학교·학비 수준이 명시되었는지에 따라 특별경비 별도 청구 여지가 검토됩니다.</strong>',
      },
      {
        question: '국제학교·해외유학비도 가능한가요?',
        answer:
          '<strong>부모 합의·자녀 환경에 따라 특별경비로 인정될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '비율은 어떻게 정해지나요?',
        answer:
          '<strong>양측 소득 + 자녀 양육 분담 비율을 종합 사정으로 정해집니다.</strong>',
      },
      {
        question: '예체능 레슨비·학원비도 포함되나요?',
        answer:
          '<strong>지속성·전문성 있는 교육 비용은 특별경비로 검토될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '재산분할로 학비를 일시금 받을 수 있나요?',
        answer:
          '<strong>재산분할과 별개로 양육비 변경 심판으로 정기 지급이 일반적인 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 계산', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 변경 심판', href: '/guide/child-support/child-support-modification-claim' },
      { label: '특별경비 분담', href: '/guide/child-support/child-support-special-expenses' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
      { label: '이행명령', href: '/guide/child-support/child-support-enforcement-order' },
    ],
  },

  // ─── 5. child-support-non-cash-payment-property-recognition-track ───
  {
    domain: 'child-support',
    slug: 'child-support-non-cash-payment-property-recognition-track',
    keyword: '양육비 비현금 부동산 예금',
    questionKeyword: '양육비를 부동산·예금·주식으로 일시금 받을 수 있나요? 미성년자 자녀 보호는요?',
    ctaKeyword: '양육비 비현금 일시금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 비현금 일시금 — 5단계 부동산·예금 대체 다툼 | 로앤가이드',
      description:
        '양육비를 부동산·예금·주식으로 일시금 받으려 한다면 5가지 인정 요건·자녀 보호 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전 배우자가 \"매달 양육비 보내기 힘드니 보유 아파트 절반 지분이나 예금을 한 번에 주겠다\"고 합니다. 한 번에 받으면 추심 걱정은 없지만, 부동산이라 처분이 어렵고 미성년자 아이 명의로 두면 관리가 복잡합니다." 양육비 비현금 일시금 지급은 ① 가사소송법상 양육비는 정기금이 원칙이지만 부모 합의 + 자녀 이익 시 일시금·재산 이전 가능 ② 부동산·예금·주식으로 대체 시 가정법원 인가 필요 영역 ③ 미성년자 자녀 명의 재산 관리는 친권자·후견인 ④ 양육비 의무 면제 + 추심 걱정 해소 ⑤ 평가 가격·시점·세금 5가지 트랙이 결합되는 영역. 가정법원이 자녀 이익에 부합한다고 판단할 때 인정. 미성년자 명의 부동산은 매매·임대 시 법원 허가 필요. 대응은 ① 협의 ② 평가 ③ 법원 인가 ④ 등기·이전 ⑤ 관리 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 비현금 일시금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의·평가·인가·이전·관리 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비현금 대체 협의·산정 기준</strong></li>\n<li><strong>② 부동산·예금·주식 평가</strong></li>\n<li><strong>③ 가정법원 인가 (자녀 이익)</strong></li>\n<li><strong>④ 등기·계좌 이전·증여세 검토</strong></li>\n<li><strong>⑤ 미성년자 재산 관리 (친권자·후견)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육비는 정기금 원칙이지만 자녀 이익 시 비현금 일시금 인정 영역. 미성년자 명의는 법원 허가 + 친권자 관리 의무.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의·인가·이전 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 비현금 대체 협의 (즉시)</strong> — 부동산·예금·주식.</li>\n<li><strong>2단계 — 시가·평가·산정 (1~2주)</strong> — 감정평가서.</li>\n<li><strong>3단계 — 가정법원 인가 심판 (2~4개월)</strong></li>\n<li><strong>4단계 — 등기·계좌 이전·증여세 신고</strong></li>\n<li><strong>5단계 — 미성년자 재산 관리·처분 시 법원 허가</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 비현금 일시금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의·평가·이전 갈래입니다.</strong></p>\n<ul>\n<li><strong>비현금 대체 합의서·내용증명</strong></li>\n<li><strong>부동산 등기부등본·감정평가서</strong></li>\n<li><strong>예금·주식 잔고증명·평가 기준일</strong></li>\n<li><strong>양육비 산정 기준표·총액 계산</strong></li>\n<li><strong>자녀 가족관계증명·미성년 입증</strong></li>\n<li><strong>가정법원 인가 신청서·결정문</strong></li>\n<li><strong>증여세 검토·세무사 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일시금 환산은 통상 잔여 양육 기간 × 월 양육비 + 할인율 적용. 부동산은 처분성·임대 수익 + 미성년자 관리 비용 동시 검토. 세무 자문 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법원 인가 요건</strong> — 자녀 이익 부합 사정.</li>\n<li><strong>평가 기준</strong> — 시가·감정·할인율.</li>\n<li><strong>미성년자 관리</strong> — 친권자 + 법원 허가.</li>\n<li><strong>증여세 부담</strong> — 양육비 인정 여부 검토.</li>\n<li><strong>면제 효력</strong> — 향후 양육비 추가 청구 제한 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원 1899-9595</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 일시금·재산 이전',
        summary:
          '대법원 2021스618 영역에서 법원은 양육비 지급 방식은 정기금 지급이 원칙이지만 부모 합의와 자녀 이익에 부합하는 경우 일시금이나 재산 이전 방식으로 정할 수 있고, 미성년 자녀 명의로 이전되는 재산의 관리·처분에는 친권자의 의무가 따른다고 평가할 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '양육비 비현금 일시금은 자녀 이익 시 인정 영역. 미성년자 재산 관리·처분은 친권자·법원 허가.',
      },
    ],
    faq: [
      {
        question: '부동산 절반 지분을 받으면 안전한가요?',
        answer:
          '<strong>처분·임대 시 미성년자 명의는 법원 허가 필요해 관리 비용·시간 사정이 발생합니다.</strong>',
      },
      {
        question: '증여세를 내야 하나요?',
        answer:
          '<strong>양육비 인정 시 면세 영역이나 양식·신고에 따라 차이가 있어 세무사 자문 권장됩니다.</strong>',
      },
      {
        question: '일시금 받으면 향후 양육비 추가 청구 안 되나요?',
        answer:
          '<strong>면제 합의 효력 범위에 따라 사정 변경 시 추가 청구 가능 여지가 검토됩니다.</strong>',
      },
      {
        question: '예금·주식이 더 안전한가요?',
        answer:
          '<strong>유동성·관리 편의는 예금이 높지만 시가·수익률 사정이 함께 검토됩니다.</strong>',
      },
      {
        question: '법원 인가는 꼭 필요한가요?',
        answer:
          '<strong>분쟁·세무·추후 다툼 방지를 위해 가정법원 인가 절차가 권장되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 계산', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 일시금', href: '/guide/child-support/child-support-lump-sum-payment' },
      { label: '미성년자 재산 관리', href: '/guide/child-support/child-support-minor-property-management' },
      { label: '양육비 변경 심판', href: '/guide/child-support/child-support-modification-claim' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
    ],
  },

  // ─── 6. dui-passenger-acknowledge-aiding-abetting-track ───
  {
    domain: 'dui',
    slug: 'dui-passenger-acknowledge-aiding-abetting-track',
    keyword: '음주운전 동승자 방조죄',
    questionKeyword: '친구가 술 마신 줄 알고 차에 같이 탔는데 방조죄가 된다고 합니다. 어떻게 다투나요?',
    ctaKeyword: '음주운전 동승자 방조죄 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주운전 동승자 방조죄 — 5단계 도교법·형법 방조 다툼 | 로앤가이드',
      description:
        '음주 사실 알고 동승했다는 방조 혐의를 받고 있다면 도로교통법·형법 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회식 후 친구가 운전을 자청해 같이 차를 탔는데 단속에 걸렸어요. 본인은 \"친구가 마시는 것을 봤지만 \'난 괜찮다\'고 해서 믿었다\"고 말했더니 경찰이 \"방조죄 검토 대상\"이라고 합니다. 음주 동승만으로 처벌받는 건지, 음주를 알고도 탔다는 부분이 어떻게 다뤄지는지 사실과 다르게 신고되었다면 어떻게 다투는지 막막합니다." 음주운전 방조 혐의를 받고 있다면 ① 도로교통법 148조의2 음주운전 처벌 ② 형법 32조 방조범 (정범의 형보다 감경 가능) ③ 단순 동승 vs 적극 권유·차량 제공·열쇠 건네 차이 ④ 음주 사실 인식 여부 ⑤ 동승자 처벌 통상 사례 5가지 트랙에 해당할 소지가 있는 영역. 단순히 음주 사실 안 동승만으로 방조가 되는 것이 아니고, 음주운전을 \"용이하게 했다\"는 객관적 행위가 요구되는 영역. 대응은 ① 사실관계 ② 인식 다툼 ③ 행위 분리 ④ 변호인 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 음주운전 동승자 방조죄 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·인식·행위·변호·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 음주 사실 인식 시점·정황</strong></li>\n<li><strong>② 차량·열쇠 제공 여부 (적극 행위)</strong></li>\n<li><strong>③ 단순 동승 vs 권유·운전 종용</strong></li>\n<li><strong>④ 진술·녹화·동승 경위 정리</strong></li>\n<li><strong>⑤ 변호인 + 양형 사정 (초범·반성)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 단순 동승만으로 방조 성립이 어렵다는 점을 다툴 영역. \"용이하게 했다\"는 적극 행위가 핵심 사정. 인식 여부 + 행위 분리 동시 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진술·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동승 경위·인식 정리 (즉시)</strong></li>\n<li><strong>2단계 — 음주 사실 인식 다툼 자료 확보</strong></li>\n<li><strong>3단계 — 변호인 상담·진술 전략 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 진술조서·송치</strong></li>\n<li><strong>5단계 — 재판·양형 사정 (초범·반성·합의)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">동승자 방조 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·진술·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 장소·시간·메뉴 영수증·카드 내역</strong></li>\n<li><strong>운전 시작 시점 메시지·통화 기록</strong></li>\n<li><strong>차량 소유자·열쇠 보유자 자료</strong></li>\n<li><strong>동승자 위치·이동 동선 (대중교통 시간)</strong></li>\n<li><strong>음주 측정 결과지·정범(운전자) 기록</strong></li>\n<li><strong>본인 운전 면허 기록·전과 자료</strong></li>\n<li><strong>탄원서·반성문·환경 자료 (양형용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차량·열쇠 제공·동행 권유 같은 적극 행위가 있었는지 정리. 음주 사실 명확히 알았는지(잔량 확인·만류 시도) 사정은 인식 다툼의 핵심. 진술 시 일관성·구체성 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>방조 성립 요건</strong> — 인식 + 용이하게 한 행위.</li>\n<li><strong>단순 동승 vs 권유</strong> — 행위 객관성 다툼.</li>\n<li><strong>음주 인식</strong> — 정도·시점 다툼.</li>\n<li><strong>차량 제공</strong> — 적극 방조 평가 영역.</li>\n<li><strong>형 감경</strong> — 형법 32조 정범보다 감경 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>도로교통공단 행정심판 1577-1120</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 방조 성립 요건',
        summary:
          '대법원 2000도1914 영역에서 법원은 음주운전 방조죄가 성립하기 위해서는 동승자가 단순히 운전자의 음주 사실을 알고 동승한 것만으로는 부족하고, 운전자의 음주운전 행위를 용이하게 한 객관적 행위가 인정되어야 하며, 적극적인 권유나 차량 제공 등 사정이 필요하다고 본 사례 흐름이 있습니다.',
        takeaway: '단순 동승만으로 방조 성립 어려운 영역. 적극 권유·차량 제공 등 행위가 핵심 사정. 정범보다 감경 가능.',
      },
    ],
    faq: [
      {
        question: '같이 술 마시고 차만 탔는데 방조죄인가요?',
        answer:
          '<strong>단순 동승만으로 방조 성립이 어렵다는 판례 흐름이 있고 적극 행위 다툼이 핵심 영역입니다.</strong>',
      },
      {
        question: '본인 차로 친구가 운전했다면?',
        answer:
          '<strong>차량 제공은 적극 방조로 평가될 여지가 있는 영역이라 다툼 사정이 강해집니다.</strong>',
      },
      {
        question: '음주를 모르고 탔다고 주장해도 되나요?',
        answer:
          '<strong>인식 여부는 사실관계 다툼 영역이고 객관 사정(회식 자리·잔량·언행)이 함께 검토됩니다.</strong>',
      },
      {
        question: '운전자가 \"괜찮다\"고 했어도 책임 있나요?',
        answer:
          '<strong>운전자 자기 진술과 별개로 동승자 인식·행위로 판단되는 영역입니다.</strong>',
      },
      {
        question: '면허에도 영향 있나요?',
        answer:
          '<strong>방조범도 결격·처분 영역이 검토되어 행정심판 90일 내 별도 대응이 권장됩니다.</strong>',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판', href: '/guide/dui/dui-administrative-appeal' },
      { label: '음주운전 방조', href: '/guide/dui/dui-aiding-abetting-passenger' },
      { label: '음주 동승 책임', href: '/guide/dui/dui-passenger-liability' },
      { label: '면허 정지·취소', href: '/guide/dui/dui-license-suspension-revocation' },
      { label: '음주운전 형사 방어', href: '/guide/dui/dui-criminal-defense' },
    ],
  },
];
