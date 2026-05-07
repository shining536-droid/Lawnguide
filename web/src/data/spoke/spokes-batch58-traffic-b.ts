import { SpokePage } from '../spoke-pages';

// batch58 traffic B — 2개:
// 1. 합의 후 후유증 추가 청구 (합의서 효력·부제소합의 다툼)
// 2. 산재 vs 자동차보험 중복 청구 (출퇴근·업무중 사고 이중 트랙)
//
// 고유 존재 이유:
// 1. 이 페이지는 사고 합의 후 예측하지 못한 후유증이 나타난 피해자가 합의서 효력·부제소합의·예측 가능성 4가지 다툼 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 출퇴근·업무 중 교통사고를 당한 근로자가 산재보험 + 자동차보험 + 손해배상 4단계 중복 청구 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58TrafficB: SpokePage[] = [
  // ─── 1. traffic-accident / traffic-accident-aftereffect-additional-claim-settlement ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-aftereffect-additional-claim-settlement',
    keyword: '합의 후 후유증 추가 청구',
    questionKeyword: '합의 끝낸지 6개월 됐는데 목 통증이 심해져요. 추가 청구 가능한가요?',
    ctaKeyword: '합의 후 추가 청구 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '합의 후 후유증 추가 청구 — 4가지 다툼 트랙 | 로앤가이드',
      description:
        '합의 끝낸 뒤 예측하지 못한 후유증이 나타났다면 합의서 효력 + 부제소합의 + 예측 가능성 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 전 가벼운 추돌사고로 보험사와 200만원에 합의했는데, 최근 목 통증이 심해져 MRI를 찍으니 경추 추간판탈출증 진단이 나왔습니다. 합의서에 \'일체의 청구를 포기한다\'는 문구가 있는데 추가 청구가 가능할까요?" 합의 후 후유증 추가 청구는 ① 합의서 문언 해석(권리포기 vs 부제소합의) ② 합의 당시 예측 가능성 ③ 후유증과 사고의 인과관계 ④ 합의금 산정 시 후유 부분 포함 여부 4가지 트랙으로 다툼이 가능한 영역입니다. 대법원은 합의 당시 예측하지 못한 후유증은 권리포기 범위를 벗어난다고 보는 사례가 있어, 합의서 표현이 모든 청구를 막지는 않는 영역이에요. 사고 직후 진단·합의 시점·후유증 진단 시점 자료 정리가 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 합의 후 후유증 추가 청구 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의서 문언·예측 가능성·인과관계·합의금 범위 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 합의서 문언 해석 — 권리포기 vs 부제소합의</strong> — "일체의 청구를 포기한다"는 권리포기 영역. 부제소합의(소송 자체 포기)는 별개 약정. 대법원은 양자를 구분하는 사례가 있음.</li>\n<li><strong>② 합의 당시 예측 가능성</strong> — 합의 당시 예상하지 못한 후유증은 권리포기 범위 밖이라는 판례. 진단명·증상·검사기록 비교가 핵심.</li>\n<li><strong>③ 사고-후유증 인과관계</strong> — 의학적 인과관계 입증 부담은 피해자 영역. 사고 직후 진료기록·MRI·전문의 소견서 결합.</li>\n<li><strong>④ 합의금에 후유 부분이 포함됐는지</strong> — 합의 당시 향후치료비·후유장해를 합의금 산정에 포함했는지. 산정 명세 부재 시 별도 청구 가능 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합의서에 "일체 포기" 문구만 있다고 무조건 추가 청구가 막히지는 않는 영역. 합의 당시 예측 못 한 후유증은 별도 청구 트랙이 열리는 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추가 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 진단 확정 → 합의서 검토 → 보험사 협의 → 본안 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 합의서 원본·합의금 산정 명세·사고 직후 진단서·치료 기록·MRI·합의 시점 진료기록.</li>\n<li><strong>2단계 — 후유증 진단 확정 (1~2개월)</strong> — 종합병원 정밀검사 + 사고와의 인과관계 소견서. 후유장해 진단서 별도 발급 검토.</li>\n<li><strong>3단계 — 합의서 검토 + 권리범위 분석</strong> — 권리포기 vs 부제소합의 구분. 예측 가능성 다툼 자료 정리.</li>\n<li><strong>4단계 — 보험사 협의 (분쟁조정 1~2개월)</strong> — 금융감독원 1332 분쟁조정 무료 트랙. 합의금 추가 산정 다툼.</li>\n<li><strong>5단계 — 민사 본안 (분쟁조정 결렬 시)</strong> — 추가 손해배상 청구. 청구액 무관 지급명령, 3,000만원 이하 소액심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">합의서 효력·예측 가능성·인과관계 4단계 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 자료 + 의료 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>합의서 원본</strong> — 권리포기 문언·부제소합의 여부 검토 핵심.</li>\n<li><strong>합의금 산정 명세서</strong> — 향후치료비·후유장해 항목 포함 여부.</li>\n<li><strong>사고 직후 진단서·진료기록</strong> — 합의 시점 의학적 상태 입증.</li>\n<li><strong>최근 후유증 진단서·MRI·CT</strong> — 신규 증상 입증.</li>\n<li><strong>전문의 소견서 (사고 인과관계)</strong> — 사고와 현재 증상의 의학적 관련성.</li>\n<li><strong>후유장해 진단서</strong> — 맥브라이드·AMA 기준 장해율.</li>\n<li><strong>치료비 영수증·교통비·휴업손해 산정자료</strong> — 추가 손해 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의 당시 진료기록과 현재 진료기록 사이 \'증상 변화\'를 의무기록 사본으로 비교 가능한 영역. 같은 의료기관 추적이 인과관계 입증에 유리한 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"합의서에 일체 포기로 끝났다" 주장 반박</strong> — 권리포기 = 손해배상 청구권 포기. 부제소합의(소송 자체 포기)는 별개 영역. 대법원은 양자 구분 사례 있음.</li>\n<li><strong>"예측 가능한 후유증이었다" 주장 반박</strong> — 합의 당시 진료기록·진단서 비교 + 신규 증상 입증. 합의 시점 추간판탈출 미진단 정황은 예측 불가 다툼 영역.</li>\n<li><strong>"사고와 인과관계 없다" 주장 반박</strong> — 같은 부위·같은 증상 + 시간 흐름 의학적 진행. 전문의 소견서 결합.</li>\n<li><strong>"민사 시효 3년 지났다" 주장 검토</strong> — 후유증의 경우 \'손해를 안 날\'(후유 진단 시점) 기준 시효 다툼 가능. 사고일 아님.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332</strong> — 자동차보험 분쟁조정 무료.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>손해보험협회 02-3702-8500</strong> — 보험금 산정 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 합의서 권리포기와 부제소합의 구분',
        summary:
          '대법원 2010다22439 사건(대법원, 2010.09.09 선고)에서 법원은 피보험자와 보험회사가 합의로써 사고로 인한 손해배상액을 수령하고 나머지 손해배상청구를 포기하기로 하는 권리포기약정을 한 사안에서, "거기에서 나아가 부제소합의까지 한 것으로 볼 수는 없다"고 판시했습니다. 즉 합의서에 "일체 포기" 문구가 있어도 그것이 곧바로 소송 자체를 막는 부제소합의로 해석되지는 않으며, 합의 당시 예측 못 한 후유증·신규 손해는 별도 다툼이 가능한 영역으로 평가됩니다. 다만 인과관계·예측 가능성 입증은 피해자 부담으로, 진단서·진료기록 결합 정리가 회수 가능성의 핵심입니다.',
        takeaway: '합의 후 후유증 추가 청구는 합의서 문언·예측 가능성·인과관계 결합 영역이라, 합의서 + 합의 시점 진료기록 + 신규 진단서를 정리하면 분쟁조정 + 본안 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '합의서에 "일체 포기" 문구가 있어도 추가 청구가 되나요?',
        answer:
          '<strong>대법원은 권리포기와 부제소합의를 구분하는 사례가 있습니다.</strong> "일체 포기" 문구만으로 소송 자체가 막히지는 않는 영역. 다만 합의 당시 예측 가능했던 손해는 막히는 영역이라, 신규 후유증 입증이 핵심.',
      },
      {
        question: '시효 3년이 지났는데 청구 가능한가요?',
        answer:
          '<strong>후유증의 경우 \'손해를 안 날\'(후유 진단 시점) 기준 시효 다툼 가능 영역입니다.</strong> 사고일 아님. 다만 입증 부담은 피해자라, 진단 시점 의무기록·검사 자료 정리가 중요.',
      },
      {
        question: '합의 당시 보험사가 후유 가능성 설명 안 했는데요',
        answer:
          '<strong>설명 누락 정황은 합의 무효·취소 다툼 보강 자료입니다.</strong> 합의 자리 녹취·문자·이메일 자료 + 합의서에 후유 보상 명세 부재 결합. 약관규제법 다툼도 검토.',
      },
      {
        question: '사고-후유증 인과관계는 어떻게 입증하나요?',
        answer:
          '<strong>같은 부위·같은 증상 진행 + 전문의 소견서가 핵심입니다.</strong> 종합병원 또는 같은 의료기관 추적 기록 + 사고 메커니즘과 의학적 일치성 분석. 신경과·정형외과 협진 검토.',
      },
      {
        question: '후유장해 진단서는 어디서 받나요?',
        answer:
          '<strong>종합병원 또는 자동차보험 등록 의료기관에서 발급 가능 영역입니다.</strong> 맥브라이드·AMA 기준 장해율. 보험사 지정의가 아닌 본인 신뢰 의료기관 우선 검토.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 후 추가 청구', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
      { label: '뒤늦은 통증 의무기록', href: '/guide/traffic-accident/traffic-accident-delayed-pain-medical-record' },
      { label: '추돌 100대0 합의 후 후유증', href: '/guide/traffic-accident/traffic-rear-end-100to0-settled-late-aftereffect' },
      { label: '교통사고 합의 시 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '저속 추돌 후유증', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
    ],
  },

  // ─── 2. traffic-accident / traffic-accident-workers-comp-vs-auto-insurance ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-workers-comp-vs-auto-insurance',
    keyword: '산재 vs 자동차보험 중복 청구',
    questionKeyword: '출근길에 교통사고 났어요. 산재로 처리해야 하나요, 자동차보험으로 처리해야 하나요?',
    ctaKeyword: '산재 자동차보험 중복 청구 점검',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '산재 vs 자동차보험 중복 청구 — 4단계 트랙 | 로앤가이드',
      description:
        '출퇴근·업무 중 교통사고로 산재와 자동차보험 둘 다 청구할 수 있는지 4단계 중복 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"출근길에 신호 대기 중이었는데 뒤차가 추돌했어요. 회사에서는 \'산재로 처리하자\'고 하고, 가해자 보험사는 \'대인배상 처리하겠다\'고 합니다. 둘 다 받으면 이중 수령이 되는 건가요?" 출퇴근·업무 중 교통사고는 산재보험과 자동차보험이 동시에 적용되는 영역으로 ① 산재보험(요양·휴업·장해급여) ② 자동차보험 대인배상 ③ 사용자 손해배상 ④ 가해자 직접 청구 4단계 트랙으로 청구 가능합니다. 다만 같은 손해 항목은 중복 수령 못 하고 \'공제\' 처리되는 영역. 산재는 위자료가 없는 반면 자동차보험은 위자료 영역이 있어, 어느 쪽 먼저 청구하느냐가 총 회수액에 영향을 주는 사례가 있어요. 출퇴근 산재는 2018년 이후 인정되어 산재 트랙 활용 가능 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 산재 vs 자동차보험 4단계 청구 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 산재·자동차보험·사용자배상·가해자배상 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 산재보험 (근로복지공단)</strong> — 요양급여(치료비) + 휴업급여(평균임금 70%) + 장해급여(장해등급별). 산재법 제80조. 위자료는 산정 영역 밖.</li>\n<li><strong>② 자동차보험 대인배상</strong> — 가해자 보험사가 치료비·휴업손해·위자료·후유장해 산정 영역. 산재 받은 부분은 공제 영역.</li>\n<li><strong>③ 사용자 손해배상 (사용자 책임 시)</strong> — 사용자 부주의로 발생한 사고. 산재 초과 손해(위자료 등) 청구 영역.</li>\n<li><strong>④ 가해자 직접 손해배상</strong> — 자동차보험 한도 초과 시 또는 위자료 추가 청구 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 산재 + 자동차보험은 같은 항목이면 공제, 다른 항목(위자료 등)이면 별도 청구 영역. 출퇴근 산재는 2018년 1월부터 통상적 출퇴근 사고도 인정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 중복 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 신고 → 산재 신청 → 자동차보험 청구 → 잔여 손해 산정 → 잔여 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 신고 + 자료 보존 (즉시)</strong> — 경찰 사고 신고 + 회사에 사고 보고 + 블랙박스·CCTV·진단서 보존.</li>\n<li><strong>2단계 — 산재 신청 (3년 시효, 가급적 1개월 내)</strong> — 근로복지공단 산재 신청. 출퇴근·업무 중 입증 자료 첨부. 요양·휴업급여 우선.</li>\n<li><strong>3단계 — 자동차보험 청구 (3년 시효)</strong> — 가해자 보험사에 대인배상 청구. 산재 받은 부분 명시 + 위자료·잔여 손해 산정.</li>\n<li><strong>4단계 — 잔여 손해 산정</strong> — 산재 수령액 + 자동차보험 합의금 = 총 손해 비교. 잔여 손해 있으면 사용자·가해자 직접 청구.</li>\n<li><strong>5단계 — 분쟁조정 또는 본안 (이견 시)</strong> — 금융감독원 1332 분쟁조정 무료. 또는 민사 본안.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재·자동차보험 중복 청구, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">4단계 청구 트랙과 공제·잔여 청구 가능성을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 산재 자료 + 자동차보험 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>경찰 사고사실확인원·교통사고확인원</strong> — 사고 발생·과실비율 입증.</li>\n<li><strong>출퇴근·업무 중 입증 자료</strong> — 출퇴근 경로·통상 시간·업무 지시 정황.</li>\n<li><strong>산재 신청서·요양신청서</strong> — 근로복지공단 양식.</li>\n<li><strong>진단서·치료기록·MRI</strong> — 손해 입증 핵심.</li>\n<li><strong>임금대장·근로계약서</strong> — 휴업급여 산정 평균임금.</li>\n<li><strong>가해자 보험사 합의 제안서</strong> — 자동차보험 산정 명세.</li>\n<li><strong>장해진단서 (필요 시)</strong> — 맥브라이드·산재법 기준.</li>\n<li><strong>산재 수령 명세서</strong> — 자동차보험 청구 시 공제 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 산재 먼저 받고 자동차보험 청구가 \'위자료 추가\' 트랙에 유리한 사례가 있는 영역. 자동차보험 먼저 합의하면 산재가 \'중복 수령\' 정황으로 보일 수 있어 순서 검토 중요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·공단 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"산재 받았으면 자동차보험 끝" 주장 반박</strong> — 산재는 위자료 산정 영역 아님. 자동차보험에서 위자료·후유장해 추가 산정 가능 영역. 같은 항목만 공제.</li>\n<li><strong>"출퇴근 산재 안 된다" 주장 반박</strong> — 2018년 1월 이후 통상적 출퇴근 사고도 산재 인정. 통상 경로·통상 수단 입증 핵심.</li>\n<li><strong>"본인 과실 있으니 산재만 가능" 주장 검토</strong> — 산재는 무과실 보상 원칙. 자동차보험은 과실비율 적용. 둘 다 청구 영역에서 다름.</li>\n<li><strong>"공단이 가해자에게 구상권 행사" 정황 검토</strong> — 산재 수령 시 공단이 가해자에게 구상. 본인 자동차보험 청구 시 산재 부분 공제 산정 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075</strong> — 산재 신청·상담 무료.</li>\n<li><strong>금융감독원 1332</strong> — 자동차보험 분쟁조정 무료.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>고용노동부 1350</strong> — 산재 관련 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재보험 + 손해배상 청구 시 과실상계 방식',
        summary:
          '대법원 2023다297141 사건(대법원, 2025.06.26 선고)에서 법원은 산업재해보상보험법에 따라 보험급여를 받은 재해근로자가 산재보험 가입 사업주를 상대로 잔여 손해의 배상을 청구하는 경우, "공단이 재해근로자에게 지급한 보험급여 중 재해근로자의 과실비율에 해당하는 금액은 공단이 종국적으로 부담하는 것이므로, 사업주의 손해배상책임이 보험급여 전액만큼 당연히 면제된다고 볼 수 없다"고 판시했습니다. 즉 산재보험을 받았다고 해서 자동차보험 또는 사용자 손해배상이 자동 소멸되지 않으며, 산재 수령액 + 잔여 손해(특히 위자료) 분리 청구 트랙이 열리는 영역으로 평가됩니다. 다만 같은 항목 중복 수령은 공제 영역이라, 산재 수령 명세 + 자동차보험 합의 명세 결합 정리가 핵심입니다.',
        takeaway: '산재 + 자동차보험 + 사용자 배상은 4단계 분리 트랙 영역이라, 산재 수령 명세 + 자동차보험 산정 + 잔여 손해 비교를 정리하면 위자료·후유장해 추가 청구 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '산재 받으면 자동차보험은 못 받나요?',
        answer:
          '<strong>같은 손해 항목만 공제, 다른 항목(위자료 등)은 별도 청구 영역입니다.</strong> 산재는 위자료 산정 안 함. 자동차보험에서 위자료·후유장해 산정 가능. 산재 수령 부분만 공제.',
      },
      {
        question: '출퇴근길 사고도 산재 되나요?',
        answer:
          '<strong>2018년 1월부터 통상적 출퇴근 사고도 산재 인정 영역입니다.</strong> 통상 경로·통상 수단·합리적 시간 입증 핵심. 출근 중 우회·이탈 정황 시 한정 다툼 가능.',
      },
      {
        question: '회사가 산재 처리 안 해주면 어떻게 하나요?',
        answer:
          '<strong>본인이 직접 근로복지공단에 산재 신청 가능 영역입니다.</strong> 회사 협조 없이 가능. 임금 자료·근로계약서 + 사고 자료 결합. 거부 시 산재 행정심판 트랙.',
      },
      {
        question: '산재 먼저 받을지 자동차보험 먼저 받을지 어느 게 유리한가요?',
        answer:
          '<strong>일반적으로 산재 먼저 받고 자동차보험 위자료 추가 청구가 유리한 사례가 있는 영역입니다.</strong> 자동차보험 먼저 합의하면 산재가 \'이중 수령\' 정황 검토 부담. 사례별 검토 권장.',
      },
      {
        question: '본인 과실이 있어도 산재 받을 수 있나요?',
        answer:
          '<strong>산재는 무과실 보상 원칙이라 본인 과실 있어도 받을 수 있는 영역입니다.</strong> 단 \'중대한 자해\' 등 산재법 제37조 제2항 사유면 제한. 자동차보험은 과실비율 적용 다른 트랙.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '배달 라이더 산재 청구', href: '/guide/traffic-accident/traffic-accident-delivery-rider-workers-comp' },
      { label: '교통사고 보험 청구 종합', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고 합의 시 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 후유증 보상', href: '/guide/traffic-accident/traffic-accident-whiplash-compensation' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },
];
