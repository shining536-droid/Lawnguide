import { SpokePage } from '../spoke-pages';

// batch66 traffic-accident — 5개 (2026-05-16)
//
// 고유 존재 이유:
// 1. tire-blowout-tireshop-liability — 정비 직후 타이어 빠짐·펑크로 사고. 정비업체 하자담보책임 + 자배법 트랙.
// 2. flooded-vehicle-rental-customer — 침수차 렌터카 사고. 렌터카 회사 고지의무 위반 + 면책 다툼.
// 3. bicycle-pedestrian-collision — 자전거(전기자전거 포함) vs 보행자. 도로교통법 자전거 의무 + 인도 통행 위반.
// 4. truck-cargo-unload-injury — 화물차 하역 중 동승자·주변인 부상. 산재 vs 자동차보험 경계.
// 5. passenger-seatbelt-refuse-injury — 동승자 안전벨트 미착용 사고. 과실 비율 10~20% 감액 다툼.

export const spokesBatch66Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-tire-blowout-tireshop-liability-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-tire-blowout-tireshop-liability-track',
    keyword: '타이어 펑크 정비업체 책임',
    questionKeyword: '정비소에서 타이어 교체한 직후 빠져서 사고 났어요. 정비업체 책임 묻을 수 있나요?',
    ctaKeyword: '타이어 정비 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '타이어 정비 직후 사고 — 5단계 정비업체 하자 책임 | 로앤가이드',
      description:
        '정비 직후 타이어 빠짐·펑크로 사고가 났다면 정비업체 하자담보·자배법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동네 타이어 가게에서 사계절 타이어로 교체했는데 그날 저녁 고속도로 진입 직후 운전석 앞 타이어가 빠지면서 가드레일에 추돌했어요. 정비업체는 \\"운행 중 충격이 있었을 것\\"이라고 책임을 회피하고, 본인은 \\"교체 후 30분도 안 됐는데 휠너트 체결 불량\\"이라 봅니다. 차량 파손과 본인·동승자 부상이 함께 발생했어요.\\" 정비 직후 사고는 ① 자동차관리법상 정비업자의 정비 의무 ② 민법상 하자담보책임·도급계약 채무불이행 ③ 정비업체 영업배상책임보험 ④ 본인 차량 자동차보험 자차·자배법 동승자 가지급금 ⑤ 정비 영수증·작업 일지 5가지가 결합되는 영역. 정비업체 + 정비업체 보험사 양측으로 청구 트랙이 열려 있는 흐름. 대응은 ① 현장 자료 ② 정비 입증 ③ 보험 청구 ④ 행정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 타이어 정비 직후 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·정비·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 직후 차량·타이어 상태 보존</strong> — 휠너트·휠·허브 부위 사진.</li>\n<li><strong>② 정비 입증</strong> — 영수증·작업 일지·CCTV.</li>\n<li><strong>③ 정비업체 하자담보·도급 책임</strong> — 민법 667조·자동차관리법.</li>\n<li><strong>④ 정비업체 영업배상보험·본인 자차</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정비 직후 단시간 내 사고는 정비 하자가 추정될 수 있는 영역. 정비 영수증·작업 일지·차량 보존이 입증의 결정 자료. 정비업체 영업배상보험에 직접 청구도 검토 가능한 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·차량 보존 (즉시)</strong> — 빠진 타이어·휠너트·블랙박스 사진, 차량 폐기 금지.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 정비업체 통지·영수증 확보 (1개월)</strong> — 작업 일지 정보공개 요청.</li>\n<li><strong>4단계 — 정비업체 영업배상보험·본인 자차 청구</strong></li>\n<li><strong>5단계 — 민사 손해배상·감정 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">타이어 정비 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·정비·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (전후방)</strong></li>\n<li><strong>타이어 교체 영수증·카드 결제 내역</strong></li>\n<li><strong>정비업체 작업 일지·정비명령서</strong></li>\n<li><strong>빠진 타이어·휠너트·휠·허브 원본 보존</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증 (본인·동승자)</strong></li>\n<li><strong>차량 수리 견적·자동차보험증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 빠진 타이어·휠너트는 폐기 금지. 감정 시 체결 토크·체결 부위 상태가 정비 하자 입증의 결정적 증거. 정비업체 CCTV는 보존 요청·정보공개 청구로 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정비 하자 추정</strong> — 정비 직후 단시간 내 사고는 정비업체 책임 평가 여지.</li>\n<li><strong>운행 중 충격 주장</strong> — 정비업체 항변 사정, 블랙박스로 반박.</li>\n<li><strong>하자담보책임 기간</strong> — 자동차관리법 시행규칙 정비 종류별 기간.</li>\n<li><strong>본인 자차·정비업체 보험</strong> — 이중 청구 후 구상 정산.</li>\n<li><strong>3년 시효</strong> — 불법행위·하자담보 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정비업자의 정비 의무 위반',
        summary:
          '대법원 2014다28425(대법원, 2016.09.30 선고) 영역에서 법원은 자동차 정비업자가 정비 업무를 도급받아 수행하는 과정에서 통상적으로 요구되는 주의의무를 다하지 못한 사정이 있었는지를 정비 일지·작업 부위·사고 시점 등 제반 사정을 종합 고려해 평가해야 한다고 본 사례 흐름이 있습니다. 정비 직후 단시간 내 발생한 사고는 정비업자의 하자담보·도급 채무불이행 책임이 평가될 수 있는 영역입니다.',
        takeaway: '정비 직후 사고는 정비업자 하자담보·도급 책임이 평가되는 트랙. 영수증·작업 일지·차량 보존이 핵심 입증 자료.',
      },
    ],
    faq: [
      {
        question: '정비업체가 운행 중 충격 탓이라고 주장해요',
        answer:
          '<strong>블랙박스·CCTV·도로 상태로 사고 직전 정상 운행이었음을 입증하면 다투어질 수 있는 영역입니다.</strong>',
      },
      {
        question: '정비 영수증이 없으면요?',
        answer:
          '<strong>카드 결제 내역·정비업체 작업 일지·증인 진술로 보강할 수 있습니다.</strong> 정비업체 CCTV 정보공개 청구도 검토.',
      },
      {
        question: '동승자 치료비는 어떻게 처리하나요?',
        answer:
          '<strong>본인 자동차보험 대인배상·자배법 가지급금 청구 가능합니다.</strong> 이후 정비업체에 구상 청구 검토.',
      },
      {
        question: '정비업체가 영업배상보험에 가입돼 있나요?',
        answer:
          '<strong>자동차관리법상 자동차정비업자는 손해배상보험에 가입 의무가 있습니다.</strong> 보험사 직접 청구 가능.',
      },
      {
        question: '본인 자차 보험과 정비업체 보험 둘 다 청구하면요?',
        answer:
          '<strong>본인 자차 우선 처리 후 보험사가 정비업체에 구상 청구하는 흐름이 일반적입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 2. traffic-accident-flooded-vehicle-rental-customer-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-flooded-vehicle-rental-customer-track',
    keyword: '침수차 렌터카 사고',
    questionKeyword: '렌터카가 침수차였는지 모르고 운행하다 사고 났어요. 렌터카 회사 책임 묻나요?',
    ctaKeyword: '침수 렌터카 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '침수차 렌터카 사고 — 5단계 고지의무 위반 다툼 | 로앤가이드',
      description:
        '렌터카가 침수 이력 미고지 상태로 사고가 났다면 고지의무·면책 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여행지에서 빌린 렌터카를 운행 중 갑자기 전자장치 오류·시동 꺼짐이 반복되더니 빗길 진입 시 브레이크 잠금이 풀려 가드레일을 들이받았어요. 사고 후 보험 처리 과정에서 차량이 침수 이력이 있는 것으로 확인됐고, 렌터카 회사는 \\"점검 통과한 차량\\"이라며 책임을 회피, 자기부담금까지 청구합니다.\\" 침수 렌터카 사고는 ① 자동차대여사업자의 정비·점검 의무(여객자동차운수사업법 시행규칙) ② 상법상 상행위 신의칙·고지의무 ③ 렌터카 영업배상책임보험 ④ 차량 결함이 침수 원인이면 면책 약관 무효 가능성 ⑤ 자배법 운행자 책임 5가지가 결합되는 영역. 렌터카 회사 + 보험사 양측 청구 가능한 흐름. 대응은 ① 차량 보존 ② 침수 이력 확인 ③ 보험 청구 ④ 행정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 침수 렌터카 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차량·고지·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차량 침수 이력 확인</strong> — 카히스토리·보험개발원 자동차이력정보.</li>\n<li><strong>② 렌터카 회사 정비·고지 의무</strong> — 여객자동차운수사업법.</li>\n<li><strong>③ 렌터카 영업배상보험·자기부담금 면제</strong></li>\n<li><strong>④ 차량 결함 입증</strong> — 정비기록·감정.</li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 렌터카 회사가 침수 이력을 알면서도 고지하지 않은 채 차량을 대여했다면 신의칙·고지의무 위반으로 책임이 평가될 수 있는 영역. 차량 보존·이력정보 확보가 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차량 보존·블랙박스 확보 (즉시)</strong> — 렌터카 회수 거부 시 사진 다수 확보.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 차량 침수 이력 조회 (보험개발원·카히스토리)</strong></li>\n<li><strong>4단계 — 렌터카 영업배상보험·본인 자동차보험 청구</strong></li>\n<li><strong>5단계 — 렌터카 회사 손해배상·자기부담금 환급 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">침수 렌터카 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 차량·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스·차량 결함 영상</strong></li>\n<li><strong>렌터카 대여계약서·결제 영수증</strong></li>\n<li><strong>차량 침수 이력 조회 결과 (카히스토리·보험개발원)</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>차량 정비·점검 일지 (정보공개 청구)</strong></li>\n<li><strong>렌터카 회사 영업배상보험증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험개발원 카히스토리에서 차량 보험 처리 이력(전손·침수)을 즉시 조회. 침수 이력이 확인되면 고지의무 위반 입증의 결정 자료. 사고 차량은 렌터카 회사가 회수하기 전 사진 다수 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>침수 이력 인지 시점</strong> — 렌터카 회사 등록·정비 시점 인지 가능성.</li>\n<li><strong>고지의무 범위</strong> — 약관·상행위 신의칙·소비자기본법.</li>\n<li><strong>자기부담금 환급</strong> — 차량 결함 입증 시 면제 검토.</li>\n<li><strong>본인 운행자 책임</strong> — 자배법 운행자 일부 책임 평가.</li>\n<li><strong>3년 시효</strong> — 불법행위·고지의무 위반.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 침수 차량 고지의무와 신의칙',
        summary:
          '대법원 2007다82875(대법원, 2010.07.22 선고) 영역에서 법원은 자동차 매매·대여 과정에서 차량의 침수 이력 등 중요한 사정을 고지하지 않은 경우, 신의칙상 고지의무 위반에 해당하는지를 거래의 성질·계약 목적·차량의 결함 정도 등 제반 사정을 종합 고려해 평가해야 한다고 본 사례 흐름이 있습니다. 침수차 대여는 사업자의 신의칙·고지의무 위반이 평가될 수 있는 영역입니다.',
        takeaway: '침수 이력 미고지는 신의칙·고지의무 위반으로 평가될 수 있는 트랙. 카히스토리 조회 + 차량 결함 입증이 핵심.',
      },
    ],
    faq: [
      {
        question: '렌터카 회사가 침수 이력을 몰랐다고 주장하면요?',
        answer:
          '<strong>차량 등록·정비 시점에 인지 가능성이 있었는지 카히스토리·정비 일지로 다투어질 수 있는 영역입니다.</strong>',
      },
      {
        question: '자기부담금을 이미 결제했어요',
        answer:
          '<strong>차량 결함이 사고 원인으로 확인되면 환급 청구가 검토될 수 있습니다.</strong> 한국소비자원 1372 분쟁조정.',
      },
      {
        question: '본인 면허·운행자 책임은요?',
        answer:
          '<strong>자배법 운행자 책임이 일부 평가되지만 차량 결함이 입증되면 비율 분배되는 트랙입니다.</strong>',
      },
      {
        question: '치료비 우선 처리는요?',
        answer:
          '<strong>렌터카 자동차보험 자배법 가지급금 청구 가능합니다.</strong> 본인 실손보험 병행.',
      },
      {
        question: '한국소비자원에 분쟁조정을 신청하면요?',
        answer:
          '<strong>1372 통해 무료로 신청 가능하며 30~60일 이내 조정 결정이 안내되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 3. traffic-accident-bicycle-pedestrian-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-pedestrian-collision-track',
    keyword: '자전거 보행자 충돌',
    questionKeyword: '자전거가 보행자를 치었어요(또는 본인이 자전거에 치었어요). 책임은 어떻게 되나요?',
    ctaKeyword: '자전거 보행자 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자전거 보행자 충돌 — 5단계 자전거 운전자 책임 | 로앤가이드',
      description:
        '자전거(전기자전거 포함)와 보행자가 부딪쳤다면 도로교통법·보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공원 산책로에서 보행자로 걷던 중 뒤에서 전기자전거가 빠르게 다가와 옆구리를 부딪쳤어요. 자전거 운전자는 \\"종을 울렸다\\"고 주장하고, 본인은 \\"인도·산책로 통행 자체가 위반\\"이라 봅니다. 무릎 인대 손상으로 6주 진단을 받았는데, 자전거에는 의무 보험이 없어 운전자 개인에게 청구해야 한다고 들었어요.\\" 자전거 vs 보행자 사고는 ① 도로교통법상 자전거의 차마 분류·인도 통행 금지 ② 전기자전거(원동기장치자전거 포함)는 면허·헬멧 의무 강화 ③ 자전거 운전자 무보험 시 개인 손해배상 ④ 일상생활배상책임보험·자전거단체보험 ⑤ 민사 손해배상·형사 교통사고처리특례법(인사사고) 5가지가 결합되는 영역. 자전거 운전자에 두터운 책임이 평가되는 트랙. 대응은 ① 현장 자료 ② 보험 확인 ③ 의료 ④ 민사 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자전거 보행자 충돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분류·과실·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자전거 vs 전기자전거 분류</strong> — 전기자전거는 원동기 준용 가능.</li>\n<li><strong>② 인도·산책로 통행 위반</strong> — 도로교통법 13조 2항.</li>\n<li><strong>③ 자전거 운전자 책임</strong> — 무보험 시 개인 청구.</li>\n<li><strong>④ 일상생활배상책임보험</strong> — 가족 단위 가입 확인.</li>\n<li><strong>⑤ 민사·형사 (인사사고 시 교특법 적용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거가 보행자를 인도·산책로에서 친 경우 자전거 운전자에 두터운 과실이 평가되는 영역. 무보험 시 운전자·가족 일상생활배상책임보험 확인이 첫 단계.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·CCTV·자전거 종류·통행 위치 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 인사사고는 필수)</strong></li>\n<li><strong>3단계 — 자전거 운전자 보험 확인</strong> — 일상생활배상·자전거단체보험·전기자전거 의무보험.</li>\n<li><strong>4단계 — 의료기록·진단서 확보 (즉시)</strong></li>\n<li><strong>5단계 — 민사 손해배상·형사 합의 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 보행자 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·블랙박스·목격자 진술</strong></li>\n<li><strong>자전거 종류·속도·통행 위치 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>본인 부상 사진·의료기록·진단서</strong></li>\n<li><strong>치료비 영수증·간병비 자료</strong></li>\n<li><strong>자전거 운전자 신원·연락처</strong></li>\n<li><strong>운전자 일상생활배상책임보험 가입 내역</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자전거가 전기자전거(원동기장치자전거 포함)면 운전면허·의무보험 요건이 강화. 본인 가족·운전자 가족의 일상생활배상책임보험에 자전거 사고 보장이 포함된 사례가 많아 확인 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자전거 도로 vs 인도</strong> — 통행 위치가 과실 비율 결정.</li>\n<li><strong>전기자전거 분류</strong> — 페달 없는 전동기는 원동기 준용.</li>\n<li><strong>보행자 부주의</strong> — 우측 통행·갑작스러운 진로 변경 일부 평가.</li>\n<li><strong>자전거 면허·헬멧</strong> — 전기자전거 의무 위반은 가산.</li>\n<li><strong>3년 시효·형사 5년</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자전거 인도 통행과 운전자 주의의무',
        summary:
          '대법원 2009도7237(대법원, 2010.04.29 선고) 영역에서 법원은 자전거가 보도(인도)를 주행 중 보행자와 충돌한 사안을 두고, 자전거 운전자도 도로교통법상 차마의 운전자로서 보행자에 대한 안전운전 의무가 있다고 본 사례 흐름이 있습니다. 자전거의 인도 통행 자체가 도로교통법 위반에 해당할 수 있고, 이로 인한 사고는 자전거 운전자의 과실이 두텁게 평가될 수 있는 영역입니다.',
        takeaway: '자전거도 차마. 인도·산책로 통행은 도로교통법 위반 사정. 보행자 부상은 운전자 책임이 무겁게 평가되는 트랙.',
      },
    ],
    faq: [
      {
        question: '자전거 운전자가 무보험이에요',
        answer:
          '<strong>개인 손해배상 청구가 원칙이지만 운전자·가족의 일상생활배상책임보험 가입 여부를 확인해야 합니다.</strong>',
      },
      {
        question: '전기자전거면 어떻게 다른가요?',
        answer:
          '<strong>페달 보조형은 자전거 준용, 전동기 단독 구동형은 원동기장치자전거 분류로 면허·의무보험 적용 가능 영역입니다.</strong>',
      },
      {
        question: '보행자도 일부 책임이 있나요?',
        answer:
          '<strong>우측 통행·갑작스러운 진로 변경·이어폰 사용 등은 일부 과실로 평가될 수 있는 영역이지만 자전거 측 책임이 무거운 트랙입니다.</strong>',
      },
      {
        question: '형사 합의는 꼭 해야 하나요?',
        answer:
          '<strong>인사사고는 교통사고처리특례법 적용으로 형사 처벌이 가능합니다.</strong> 합의는 처벌·양형 평가의 사정.',
      },
      {
        question: '치료비 우선 처리는요?',
        answer:
          '<strong>본인 실손보험·국민건강보험·자전거 운전자 일상생활배상책임보험에 청구 검토합니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 4. traffic-accident-truck-cargo-unload-injury-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-truck-cargo-unload-injury-track',
    keyword: '화물차 하역 중 사고',
    questionKeyword: '화물차에서 짐 내리다 동승자(또는 주변인)가 다쳤어요. 자동차보험 처리되나요?',
    ctaKeyword: '하역 중 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '화물차 하역 중 사고 — 5단계 산재·자배법 경계 | 로앤가이드',
      description:
        '화물차 하역 작업 중 동승자·주변인이 다쳤다면 산재·자동차보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 화물차 운전자 동료로 하역을 돕다가 적재함 옆에서 떨어지는 자재에 발등을 다쳤어요. 사업주는 \\"근무 시간 외 호의 도움\\"이라며 산재 처리를 거부하고, 화물차 보험사는 \\"하역은 운행이 아니라 작업\\"이라며 자배법 처리도 거부합니다. 정형외과 8주 진단에 일을 못해 휴업손해도 발생.\\" 하역 중 사고는 ① 자배법 \\"운행 중\\" 범위 ② 산업재해보상보험법 적용 가능성(업무 관련성) ③ 화물차 자동차보험 약관 ④ 사용자 책임(민법 756조) ⑤ 본인 일상생활배상·실손보험 5가지가 결합되는 영역. 적재·하역 행위가 \\"운행\\"에 포함될 수 있다는 판례 흐름으로 자배법 청구 가능성이 다투어지는 트랙. 대응은 ① 현장 자료 ② 업무 관계 ③ 보험 청구 ④ 행정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 하역 중 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·관계·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운행 vs 작업 구분</strong> — 자배법 운행 정의 판례.</li>\n<li><strong>② 업무 관계</strong> — 산재 적용 가능성 평가.</li>\n<li><strong>③ 화물차 자동차보험·운전자 책임</strong></li>\n<li><strong>④ 사용자 책임 (민법 756조)</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 하역 행위가 \\"운행\\"의 일환으로 평가되면 자배법 적용 가능. 동시에 업무 관련성 입증 시 산재 청구도 검토되는 영역. 두 트랙 비교 후 유리한 쪽 선택.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 적재함·자재 위치·결박 상태 사진.</li>\n<li><strong>2단계 — 경찰 신고·사고경위서 (1주)</strong></li>\n<li><strong>3단계 — 의료기록·진단서 (즉시)</strong> — 산재·자배법 공통 자료.</li>\n<li><strong>4단계 — 산재 신청 (근로복지공단) 또는 화물차 자배법 가지급금 청구</strong></li>\n<li><strong>5단계 — 민사 손해배상·사용자 책임 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">하역 중 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 사진·블랙박스·CCTV</strong></li>\n<li><strong>적재함·자재 위치·결박 상태 자료</strong></li>\n<li><strong>본인·운전자 업무 관계 입증 (근로계약·일용 명세서)</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>휴업손해 자료 (급여 명세·세금계산서)</strong></li>\n<li><strong>화물차 자동차보험증서·운전자 면허</strong></li>\n<li><strong>운송회사 사업자등록증·계약서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 산재 vs 자배법은 이중 청구 금지가 아니라 우선순위·정산 문제. 산재 우선 처리 후 차액을 자배법·민사로 청구하는 흐름이 일반적. 업무 관계 자료(근로계약·일용 명세)가 산재 인정의 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운행 vs 작업 구분</strong> — 자배법 운행 범위 판례.</li>\n<li><strong>업무 관련성</strong> — 산재 인정 핵심 사정.</li>\n<li><strong>호의 도움 vs 근로</strong> — 사용자 책임·산재 모두 영향.</li>\n<li><strong>사용자 책임</strong> — 민법 756조 운송회사 책임.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075 (산재)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 적재·하역 행위와 자배법 운행',
        summary:
          '대법원 2017다289538(대법원, 2018.04.26 선고) 영역에서 법원은 화물차 적재·하역 행위가 자동차손해배상보장법상 "운행"에 포함되는지를 두고, 적재함 사용·운전석 조작·차량의 본래 용도와의 관련성 등 제반 사정을 종합 고려해 평가해야 한다고 본 사례 흐름이 있습니다. 적재·하역 중 사고도 자배법 운행 중 사고로 평가될 수 있는 영역입니다.',
        takeaway: '하역 행위가 운행에 포함될 수 있는 트랙. 자배법 + 산재 두 갈래 청구 가능성을 함께 검토.',
      },
    ],
    faq: [
      {
        question: '사업주가 호의 도움이라며 산재 거부해요',
        answer:
          '<strong>업무 지시·관행·대가 여부를 종합 평가합니다.</strong> 근로복지공단 1588-0075에 신청해 사용 종속관계를 다투어볼 수 있는 영역.',
      },
      {
        question: '보험사가 운행이 아니라 작업이라 거부해요',
        answer:
          '<strong>적재함 사용·차량 본래 용도와의 관련성을 입증하면 운행 중 사고로 다투어질 수 있는 영역입니다.</strong>',
      },
      {
        question: '산재와 자동차보험 둘 다 청구되나요?',
        answer:
          '<strong>이중 청구는 안 되지만 산재 우선 처리 후 차액을 민사로 청구하는 흐름이 일반적입니다.</strong>',
      },
      {
        question: '운송회사 사용자 책임은요?',
        answer:
          '<strong>민법 756조 사용자 책임으로 운송회사에 직접 청구 가능합니다.</strong>',
      },
      {
        question: '치료비 우선 처리는요?',
        answer:
          '<strong>산재 인정 시 근로복지공단 요양급여·휴업급여 청구합니다.</strong> 미인정 시 자배법 가지급금·실손보험 활용.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 5. traffic-accident-passenger-seatbelt-refuse-injury-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-passenger-seatbelt-refuse-injury-track',
    keyword: '동승자 안전벨트 미착용',
    questionKeyword: '동승자가 안전벨트를 안 매고 있다가 사고로 다쳤어요. 보상 얼마나 줄어드나요?',
    ctaKeyword: '안전벨트 미착용 과실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '동승자 안전벨트 미착용 사고 — 5단계 과실 비율 다툼 | 로앤가이드',
      description:
        '동승자가 안전벨트 미착용 상태로 사고가 났다면 과실 비율 10~20% 감액 다툼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 뒷좌석에 탑승했는데 단거리 이동이라 안전벨트를 매지 않았어요. 친구가 운전하던 중 신호 위반 차량에 측면 추돌당해 본인은 머리·갈비뼈에 부상. 보험사는 \\"안전벨트 미착용으로 본인 과실 20% 감액\\"을 통보합니다. 운전자 책임이 명백한데 동승자 과실까지 잡힌다니 막막한 상황이에요.\\" 안전벨트 미착용 사고는 ① 도로교통법 50조: 동승자도 안전띠 착용 의무 ② 자배법 동승자 보상 ③ 호의동승·일상 동승 구분 ④ 부상 부위와 미착용의 인과관계 ⑤ 통상 10~20% 감액 평가가 결합되는 영역. 부위·연령·차종에 따라 감액률이 다투어지는 트랙. 대응은 ① 현장 자료 ② 부상 인과 ③ 보험 청구 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 안전벨트 미착용 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·부위·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안전벨트 미착용 경위</strong> — 단거리·연령·뒷좌석 상황.</li>\n<li><strong>② 부상 부위와 미착용 인과</strong> — 머리·흉부·복부 부위별 평가.</li>\n<li><strong>③ 자배법 동승자 보상·감액 적용</strong></li>\n<li><strong>④ 분쟁조정 (손해보험협회·금감원)</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 안전벨트 미착용은 통상 본인 과실 10~20% 감액이 자주 보이는 사례. 다만 부상 부위가 안전벨트와 무관(예: 측면 충돌·하지 골절)하면 감액률이 낮아지는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 차량 내부 사진·블랙박스·좌석 위치.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 의료기록·부위별 감정</strong> — 안전벨트와 인과관계 검토.</li>\n<li><strong>4단계 — 자동차보험 청구·감액 협의</strong></li>\n<li><strong>5단계 — 분쟁조정·민사 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">안전벨트 미착용 과실 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>차량 내부·좌석 사진 (사고 직후)</strong></li>\n<li><strong>블랙박스 영상 (실내 카메라 포함 시 결정 자료)</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·부상 부위 사진</strong></li>\n<li><strong>치료비·휴업손해·간병비 영수증</strong></li>\n<li><strong>운전자 자동차보험증서</strong></li>\n<li><strong>안전벨트 미착용 사정 진술 (단거리·뒷좌석 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부상 부위가 안전벨트로 막을 수 있었는지(흉부·복부)와 무관 부위(하지·측면 충돌 머리)는 감액률이 다름. 의료 감정에서 부상 메커니즘을 명확히 기재 요청.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로교통법 50조</strong> — 동승자도 안전띠 의무.</li>\n<li><strong>부상 부위 인과</strong> — 안전벨트와 무관 부위면 감액률 낮음.</li>\n<li><strong>좌석 위치</strong> — 뒷좌석 미착용은 평가 사례가 다양.</li>\n<li><strong>호의동승 감액</strong> — 단순 호의면 별도 감액 가능성.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 안전벨트 미착용과 과실 상계',
        summary:
          '대법원 92다36052(대법원, 1993.02.09 선고) 영역에서 법원은 동승자가 안전벨트를 매지 않은 상태에서 사고로 부상한 경우, 안전벨트 미착용이 부상의 발생·확대에 기여한 정도를 손해배상액 산정 시 고려할 수 있다고 본 사례 흐름이 있습니다. 다만 부상 부위와 안전벨트 착용의 인과관계, 안전벨트로 막을 수 있었던 부상 정도 등을 종합 평가해야 하는 영역입니다.',
        takeaway: '안전벨트 미착용은 통상 10~20% 감액 수준이 자주 보이는 사례. 부위·인과관계에 따라 비율 조정 가능한 트랙.',
      },
    ],
    faq: [
      {
        question: '뒷좌석이라 안 매도 된다고 생각했어요',
        answer:
          '<strong>도로교통법 50조는 모든 좌석 안전띠 착용 의무를 두고 있습니다.</strong> 다만 부위·인과로 감액률 다투어질 영역.',
      },
      {
        question: '머리·하지 부상은 안전벨트와 관련 없는데요?',
        answer:
          '<strong>부상 메커니즘을 의료 감정으로 명확히 하면 감액률이 낮아질 수 있는 영역입니다.</strong>',
      },
      {
        question: '운전자 책임이 명백한데 본인 과실도 잡히나요?',
        answer:
          '<strong>운전자 책임과 별개로 동승자의 안전 의무 위반은 일부 과실로 평가되는 트랙입니다.</strong>',
      },
      {
        question: '감액률 협의가 안 되면요?',
        answer:
          '<strong>손해보험협회 1544-0114 또는 금감원 1332 분쟁조정 신청 가능합니다.</strong>',
      },
      {
        question: '치료비 우선 처리는요?',
        answer:
          '<strong>운전자 자동차보험 자배법 가지급금 청구 가능합니다.</strong> 본인 실손보험 병행 활용.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },
];
