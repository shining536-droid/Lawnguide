import { SpokePage } from '../spoke-pages';

// batch67 traffic-accident — 5개 (2026-05-17)
//
// 고유 존재 이유:
// 1. electric-wheelchair-pedestrian — 전동휠체어(보행자 의제) vs 자전거 충돌. 도로교통법 보행자 의제 + 자전거 운전자 주의의무 트랙.
// 2. airbag-non-deploy-defect — 에어백 미작동 + 제조물책임. 차량 결함 → 제조사 책임 분배 트랙.
// 3. fog-multi-vehicle-fault — 안개 가시거리 다중추돌. 후행차 안전거리·전조등 의무 + 시계 평가 트랙.
// 4. tow-truck-cargo-loading — 견인차 적재 작업 중 화물 흘러내림. 자배법 운행 vs 작업 + 결박 부실 트랙.
// 5. cargo-tarp-failure-debris — 트럭 덮개 풀림으로 화물 도로 낙하. 적재 결박 점검 의무 + 후행차 회피 불가 트랙.

export const spokesBatch67Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-electric-wheelchair-pedestrian-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-electric-wheelchair-pedestrian-track',
    keyword: '전동휠체어 보행자 충돌',
    questionKeyword: '인도에서 전동휠체어 탄 70대 보행자와 자전거가 충돌해 휠체어가 손상되고 운전자가 부상.',
    ctaKeyword: '전동휠체어 사고 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '전동휠체어 보행자 충돌 — 5단계 자전거 운전자 책임 | 로앤가이드',
      description:
        '인도에서 전동휠체어(보행자 의제)와 자전거가 충돌해 부상이 발생했다면 도로교통법·보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"평일 오후 아파트 단지 옆 인도에서 70대 어르신이 전동휠체어를 천천히 운전하던 중, 같은 인도 쪽으로 진입하던 자전거와 충돌했어요. 자전거 운전자는 \\"휠체어가 갑자기 방향을 틀었다\\"고 주장하고, 휠체어 측은 \\"인도 통행 자체가 위반\\"이라 봅니다. 휠체어 본체 손상 + 어르신 골절 6주 진단, 자전거 운전자 측 찰과상이 함께 발생.\\" 전동휠체어 사고는 양측 입장이 모두 검토되는 영역으로, ① 도로교통법 제2조: 전동휠체어는 보행자에 해당(보행자 의제) ② 자전거는 차마이고 인도 통행 금지(도로교통법 13조 2항) ③ 자전거 운전자 일상생활배상책임보험·자전거단체보험 ④ 휠체어 측 보훈·장애인 활동지원 ⑤ 형사 교통사고처리특례법(인사사고) 5가지가 결합되는 영역. 자전거 측에 두터운 과실이 평가되는 트랙이 일반적이지만 사정에 따라 분배. 대응은 ① 현장 자료 ② 분류 ③ 보험 ④ 의료 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전동휠체어 보행자 충돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분류·과실·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전동휠체어 = 보행자</strong> — 도로교통법 제2조 보행자 의제.</li>\n<li><strong>② 자전거 인도 통행 위반</strong> — 도로교통법 13조 2항.</li>\n<li><strong>③ 자전거 운전자 보험</strong> — 일상생활배상·자전거단체보험.</li>\n<li><strong>④ 휠체어 측 의료·복지 지원</strong> — 장애인 활동지원·보훈 지원 검토.</li>\n<li><strong>⑤ 민사·형사 (인사사고 시 교특법 적용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전동휠체어는 도로교통법상 보행자로 분류되는 영역. 자전거가 인도에서 보행자(휠체어)와 충돌한 경우 자전거 운전자에 두터운 과실이 평가되는 트랙. 다만 휠체어 측 진로 변경 사정이 있으면 일부 분배.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·CCTV·휠체어·자전거 위치·통행 위치 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 인사사고는 필수)</strong></li>\n<li><strong>3단계 — 자전거 운전자 보험 확인</strong> — 일상생활배상·자전거단체보험·전동기 보조 시 의무보험.</li>\n<li><strong>4단계 — 의료기록·진단서 확보 (양측 모두)</strong></li>\n<li><strong>5단계 — 민사 손해배상·형사 합의 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전동휠체어 충돌 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·블랙박스·목격자 진술</strong></li>\n<li><strong>통행 위치(인도·자전거도로·횡단보도) 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·부상 부위 사진 (양측)</strong></li>\n<li><strong>전동휠체어 손상 견적·수리비 자료</strong></li>\n<li><strong>자전거 운전자 신원·연락처·면허</strong></li>\n<li><strong>일상생활배상책임보험·자전거단체보험 증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전동휠체어는 보행자 의제로 분류되어 자동차보험 가입 의무가 없는 영역. 자전거 운전자 측 가족 일상생활배상책임보험에 자전거 사고 보장이 포함된 사례가 많아 가입 내역 확인이 결정 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전동휠체어 분류</strong> — 보행자 의제(도로교통법 제2조).</li>\n<li><strong>자전거 인도 통행</strong> — 13조 2항 위반 사정.</li>\n<li><strong>휠체어 측 진로 변경</strong> — 양측 사정이 함께 평가될 영역.</li>\n<li><strong>고령자 회피 능력</strong> — 자전거 운전자 주의의무 가중 평가.</li>\n<li><strong>3년 시효·형사 5년</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보행자 보호의무와 운전자 주의',
        summary:
          '대법원 2020도8675(대법원, 2020.12.24 선고) 영역에서 법원은 횡단보행자용 신호기가 설치되지 않은 횡단보도를 횡단하는 보행자가 있는 경우 자동차 운전자의 보행자에 대한 주의의무가 가중된다고 본 사례 흐름이 있습니다. 도로교통법상 보행자(전동휠체어 포함)에 대한 차마 운전자의 주의의무가 두텁게 평가되는 영역으로 자전거 운전자에게도 같은 법리가 검토될 수 있습니다.',
        takeaway: '보행자(전동휠체어 의제)에 대한 차마 운전자의 주의의무가 두텁게 평가되는 트랙. 자전거 인도 통행은 가중 사정.',
      },
    ],
    faq: [
      {
        question: '전동휠체어는 차로 분류되나요?',
        answer:
          '<strong>도로교통법 제2조는 전동휠체어를 보행자로 의제하고 있습니다.</strong> 따라서 충돌 사고에서 자전거·자동차 측 주의의무가 두텁게 평가되는 영역.',
      },
      {
        question: '자전거 운전자가 무보험이면요?',
        answer:
          '<strong>자전거 운전자·가족의 일상생활배상책임보험 가입 여부를 확인해야 합니다.</strong> 미가입 시 개인 손해배상 청구 트랙.',
      },
      {
        question: '휠체어가 갑자기 방향을 틀었다는 주장은요?',
        answer:
          '<strong>블랙박스·CCTV·목격자 진술로 진로 변경 시점이 다투어질 수 있는 영역입니다.</strong> 다만 보행자 측 사정은 분배 정도에 영향.',
      },
      {
        question: '치료비 우선 처리는요?',
        answer:
          '<strong>휠체어 측은 국민건강보험·실손보험·장애인 활동지원, 자전거 측은 본인 실손보험·일상생활배상으로 검토할 수 있습니다.</strong>',
      },
      {
        question: '형사 합의는 꼭 해야 하나요?',
        answer:
          '<strong>인사사고는 교통사고처리특례법 적용 가능 영역입니다.</strong> 합의는 처벌·양형 평가의 사정.',
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

  // ─── 2. traffic-accident-airbag-non-deploy-defect-claim-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-airbag-non-deploy-defect-claim-track',
    keyword: '에어백 미작동 제조사 책임',
    questionKeyword: '정면 충돌 사고에서 에어백이 작동하지 않아 부상이 커졌습니다. 제조사에 책임 물을 수 있나요?',
    ctaKeyword: '에어백 미작동 책임 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '에어백 미작동 사고 — 5단계 제조사 제조물책임 다툼 | 로앤가이드',
      description:
        '정면 충돌에서 에어백이 작동하지 않아 부상이 커졌다면 제조물책임법·보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교차로 우회전 중 신호 위반 차량이 정면 충돌해 본인 차량 운전석·조수석 에어백이 모두 미작동했어요. 흉부 갈비뼈 5개 골절 + 안면 열상으로 12주 진단을 받았는데, 정비소에서 \\"에어백 센서·점화회로가 정상이라면 충격값이 충분해 터졌어야 한다\\"고 합니다. 본인은 \\"에어백만 정상 작동했다면 부상이 절반 이하였을 것\\"이라며 제조사 책임을 묻고 싶은데, 보험사는 \\"가해 차량 책임\\"만 인정합니다.\\" 에어백 미작동 사고는 ① 제조물책임법상 결함(설계·제조·표시) 책임 ② 자동차관리법 리콜·공개 결함 이력 ③ 자배법 가해자 책임과 제조사 책임 병합 ④ 차량 보존·감정 필수 ⑤ 본인 자동차보험 자차·실손 5가지가 결합되는 영역. 제조사에 직접 청구 가능한 트랙이지만 결함 입증·인과관계 입증 부담이 큰 영역. 대응은 ① 차량 보존 ② 자료 확보 ③ 보험 청구 ④ 감정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 에어백 미작동 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차량·결함·보험·감정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차량 보존</strong> — 폐차·수리 금지, 사고 차량 상태 그대로.</li>\n<li><strong>② 결함 자료 확보</strong> — 동일 차종 리콜·결함 이력, 정비 의견서.</li>\n<li><strong>③ 자배법·자차 보험 청구</strong> — 가해자·본인 보험 우선 처리.</li>\n<li><strong>④ 제조사 감정·인과관계</strong> — 한국교통안전공단·민간 감정.</li>\n<li><strong>⑤ 제조사 손해배상 민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 에어백 미작동은 제조물책임법상 결함이 평가될 수 있는 영역. 다만 동일 차종 결함 이력·감정이 결정 자료. 차량 보존 + 한국교통안전공단 자동차결함신고센터 신고가 1단계.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차량 보존·현장 자료 (즉시)</strong> — 폐차·수리 금지, 에어백 모듈 사진·블랙박스.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 한국교통안전공단 자동차결함신고센터 신고</strong> — 1577-0990, 동일 차종 결함 자료 요청.</li>\n<li><strong>4단계 — 자배법·본인 자차 보험 청구 + 감정 의뢰</strong></li>\n<li><strong>5단계 — 제조사 손해배상 민사 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">에어백 미작동 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 차량·치료·결함 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (전후방·내부)</strong></li>\n<li><strong>에어백 모듈·센서 부위 사진 (사고 직후·정비 전)</strong></li>\n<li><strong>차량 등록증·구매 영수증·정비 이력</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증 (부상 부위 명시)</strong></li>\n<li><strong>동일 차종 리콜·결함 이력 (자동차결함신고센터)</strong></li>\n<li><strong>정비 의견서·감정 결과 (충격값·센서 정상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차량을 폐차·수리하면 결함 입증이 사실상 불가. 보험 처리 전 차량 보존 의사를 명확히 통지. 한국교통안전공단 1577-0990 자동차결함신고센터에서 동일 차종 결함 이력 조회 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>결함 입증</strong> — 제조물책임법상 결함 추정 규정 검토.</li>\n<li><strong>충격값 기준</strong> — 차량별 에어백 작동 기준 자료.</li>\n<li><strong>인과관계</strong> — 에어백 작동 시 부상 정도 추정.</li>\n<li><strong>가해자 책임과 분배</strong> — 본 사고 책임과 별개로 평가될 영역.</li>\n<li><strong>3년 시효·10년 제조물책임 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 자동차결함신고센터 1577-0990</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차량 결함 주장과 입증책임',
        summary:
          '대전지법 2023노1855(대전지법, 2024.10.10 선고) 영역에서 법원은 운전자가 차량 결함(급발진 등)을 주장하며 형사·민사상 책임을 다툰 사안에서, 차량 결함이 사고 원인이라는 점에 대한 입증의 정도와 제반 사정을 종합 고려해 평가해야 한다고 본 사례 흐름이 있습니다. 차량 결함 주장은 제조사 책임이 평가될 수 있는 영역이지만 결함 입증 자료가 결정 사정입니다.',
        takeaway: '차량 결함 주장은 제조물책임이 평가되는 트랙. 차량 보존·정비 의견서·동일 차종 결함 이력이 입증의 결정 자료.',
      },
    ],
    faq: [
      {
        question: '에어백이 안 터졌는데 항상 결함인가요?',
        answer:
          '<strong>충격값·각도·센서 위치에 따라 정상 미작동 사례도 있는 영역입니다.</strong> 정비 의견서로 충격값 정상 여부 확인 후 결함 평가.',
      },
      {
        question: '차량을 이미 수리했어요',
        answer:
          '<strong>결함 입증 자료가 감소하지만 정비소 진단 기록·블랙박스·동일 차종 결함 이력으로 다투어볼 수 있는 영역입니다.</strong>',
      },
      {
        question: '제조사가 결함을 인정 안 하면요?',
        answer:
          '<strong>한국교통안전공단 결함조사 의뢰 + 민사 감정 절차를 검토할 수 있는 트랙입니다.</strong> 동일 사례 다수면 리콜 검토.',
      },
      {
        question: '가해자 보험과 제조사 책임 둘 다 청구되나요?',
        answer:
          '<strong>각자의 기여도에 따라 분배 청구가 검토될 수 있는 영역입니다.</strong> 보험사가 제조사에 구상 청구 가능.',
      },
      {
        question: '제조물책임 시효는요?',
        answer:
          '<strong>제조물책임법은 손해·제조업자 안 날부터 3년, 제조물 공급일부터 10년 시효가 안내되는 영역입니다.</strong>',
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

  // ─── 3. traffic-accident-fog-multi-vehicle-fault-distribution-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-fog-multi-vehicle-fault-distribution-track',
    keyword: '안개 시 다중추돌 과실 분배',
    questionKeyword: '새벽 안개로 가시거리 10m 도로에서 6중 추돌 발생. 누가 더 큰 과실인가요?',
    ctaKeyword: '안개 다중추돌 과실 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '안개 다중추돌 과실 분배 — 5단계 후행차 안전거리 의무 | 로앤가이드',
      description:
        '새벽 안개로 가시거리 10m 도로에서 6중 추돌이 발생했다면 안전거리·전조등 의무 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 5시 국도에서 갑자기 짙은 안개로 가시거리 10m 수준이 되었는데, 본인 앞 차량이 급제동을 하면서 본인이 추돌, 뒤이어 4대가 연쇄 추돌해 총 6중 사고가 발생했어요. 앞 차량은 \\"본인이 들이받았다\\"고, 뒤 차량은 \\"본인이 급정거했다\\"고 양쪽에서 책임을 요구합니다. 보험사는 \\"안개 + 안전거리 미확보\\"를 동시 사유로 본인 과실을 60%까지 잡고 있어요.\\" 안개 다중추돌은 양측 입장이 함께 검토되는 영역으로, ① 도로교통법 19조: 안전거리 확보 의무 ② 도로교통법 37조: 안개·강우 시 전조등·미등 점등 의무 ③ 자배법 운행자 책임 ④ 손해보험협회 과실비율 인정기준 ⑤ 분쟁조정·민사 5가지가 결합되는 영역. 안개 시 후행차 책임이 두텁게 평가되는 트랙이 일반적이지만 선행차 급제동·미등 미점등 사정이 함께 평가. 대응은 ① 현장 자료 ② 차종·진로 ③ 보험 청구 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 안개 다중추돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·과실·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안개 시계·시간·도로 상태</strong> — 기상청·도로공사 자료.</li>\n<li><strong>② 차량별 안전거리·전조등 점등</strong> — 후행차 의무 가중.</li>\n<li><strong>③ 선행차 급제동·미등 점등 여부</strong> — 분배 사정.</li>\n<li><strong>④ 자배법·자동차보험 청구·과실비율 협의</strong></li>\n<li><strong>⑤ 분쟁조정 (손해보험협회·금감원)·민사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 안개 시 다중추돌은 후행차 안전거리·전조등 의무 위반이 두텁게 평가되는 영역. 다만 선행차의 급제동·미등 미점등·정차 사정이 있으면 분배. 기상청 시계 자료·블랙박스가 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·기상청 안개 자료·차량 위치·미등 점등 상태.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 다중사고는 필수)</strong></li>\n<li><strong>3단계 — 자동차보험 청구·과실비율 협의</strong> — 손해보험협회 인정기준 적용.</li>\n<li><strong>4단계 — 분쟁조정 신청 (손해보험협회 1544-0114·금감원 1332)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">안개 다중추돌 과실 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인·다른 차량 블랙박스 (가능한 모두 확보)</strong></li>\n<li><strong>기상청 안개 자료·도로공사 시계 정보</strong></li>\n<li><strong>차량 미등·전조등 점등 상태 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과 (다중사고)</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>차량 수리 견적·자동차보험증서</strong></li>\n<li><strong>현장 견인·차량 위치 사진</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다중추돌은 본인 직전·직후 차량 외에도 연쇄된 차량 블랙박스를 함께 확보. 기상청 새벽 시간대 시계·안개 발생 자료를 즉시 출력해 보존. 미등 미점등 차량은 과실 가중 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>안전거리 확보 의무</strong> — 후행차 책임 가중 사정.</li>\n<li><strong>전조등·미등 점등 의무</strong> — 안개 시 점등 위반.</li>\n<li><strong>선행차 급제동</strong> — 무의미한 제동이면 분배.</li>\n<li><strong>가시거리</strong> — 기상청·도로공사 자료로 다투어질 영역.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시계 불량 도로 운전자의 주의의무',
        summary:
          '대법원 89도2589(대법원, 1990.12.26 선고) 영역에서 법원은 노면이 결빙되고 시계가 20m 이내인 고속도로상을 운전하는 자가 단순히 제한속도를 준수하였다는 사실만으로 주의의무를 다하였다고 평가할 수 있는지를 두고, 시계 불량 도로에서는 감속·차간거리 확대 등 추가 주의의무가 평가되어야 한다고 본 사례 흐름이 있습니다. 안개·결빙 등 시계 불량 도로의 후행차 책임이 두텁게 평가되는 영역입니다.',
        takeaway: '시계 불량 도로(안개·결빙)는 제한속도 준수만으로 주의의무 평가 부족. 감속·차간거리 추가 의무 트랙.',
      },
    ],
    faq: [
      {
        question: '본인은 안전거리를 지켰는데 60% 잡혀요',
        answer:
          '<strong>안개 시계 평가에 따라 안전거리 기준이 가중되는 영역이라 다투어질 수 있습니다.</strong> 손해보험협회 분쟁조정 신청 검토.',
      },
      {
        question: '앞차가 갑자기 급제동했어요',
        answer:
          '<strong>급제동의 합리성·필요성이 평가됩니다.</strong> 블랙박스로 앞차의 사정·미등 점등 여부 확인이 결정 자료.',
      },
      {
        question: '다중사고에서 본인 책임 비율은요?',
        answer:
          '<strong>본인 직전·직후 차량과의 관계가 각각 평가되어 합산되는 영역입니다.</strong> 손해보험협회 과실비율 인정기준 참조.',
      },
      {
        question: '미등 안 켠 차량이 있으면요?',
        answer:
          '<strong>도로교통법 37조 위반으로 해당 차량 과실이 가중되는 사정입니다.</strong> 블랙박스로 확인.',
      },
      {
        question: '분쟁조정이 안 되면요?',
        answer:
          '<strong>금감원 1332 분쟁조정 또는 민사 손해배상 청구로 진행될 수 있는 영역입니다.</strong>',
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

  // ─── 4. traffic-accident-tow-truck-cargo-loading-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-tow-truck-cargo-loading-collision-track',
    keyword: '견인차 적재 화물 충돌',
    questionKeyword: '견인차가 차량을 적재 중 적재함에서 화물이 흘러내려 인근 차량과 충돌.',
    ctaKeyword: '견인차 적재 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '견인차 적재 화물 충돌 — 5단계 결박 부실 책임 | 로앤가이드',
      description:
        '견인차 적재 작업 중 화물이 흘러내려 인근 차량과 충돌했다면 자배법·결박 의무 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고장난 본인 차량을 견인차가 적재함에 싣는 작업 중, 견인차 운전자가 결박을 단단히 하기 전에 적재함 경사가 바뀌면서 적재 중이던 다른 차량 부속품·공구가 흘러내려 옆에 있던 본인 차량과 보행자 1명을 가볍게 쳤어요. 견인차 측은 \\"적재 작업 중이라 자동차보험은 적용 안 된다\\"고 주장하고, 본인은 \\"분명히 자동차 운행 중 사고\\"라고 봅니다. 적재 차량 손상 + 보행자 찰과상이 발생.\\" 견인차 적재 사고는 ① 자배법 \\"운행\\" 범위(적재·하역도 운행 평가 가능) ② 자동차종합보험 영업용 견인차 약관 ③ 운송회사 사용자 책임(민법 756조) ④ 결박 의무 위반(화물자동차 운수사업법) ⑤ 본인 자동차보험·실손 5가지가 결합되는 영역. 적재 중 사고도 자배법 운행으로 평가될 수 있는 트랙. 대응은 ① 현장 자료 ② 자배법 청구 ③ 보험 ④ 행정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 견인차 적재 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운행·결박·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적재 = 운행 여부</strong> — 자배법 운행 범위 판례.</li>\n<li><strong>② 결박 의무 위반</strong> — 화물자동차 운수사업법.</li>\n<li><strong>③ 견인차 자동차보험·영업배상</strong></li>\n<li><strong>④ 운송회사 사용자 책임 (민법 756조)</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 적재·하역 행위가 \\"운행\\"의 일환으로 평가되면 자배법 적용 가능. 견인차 적재 중 화물 낙하 사고는 결박 의무 위반이 결정 자료. 자동차보험 + 운송회사 사용자 책임 양 갈래 청구.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 적재함·화물 위치·결박 상태 사진, 블랙박스.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 견인차 자동차보험 자배법 청구</strong> — 운행 중 사고로 다툼.</li>\n<li><strong>4단계 — 운송회사 사용자 책임 통지 + 영업배상 청구</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">견인차 적재 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 사진·블랙박스 (적재함·화물·결박 상태)</strong></li>\n<li><strong>견인 의뢰 영수증·견인료 결제 내역</strong></li>\n<li><strong>견인차 차량 등록증·자동차보험증서</strong></li>\n<li><strong>운송회사 사업자등록증·견인 약관</strong></li>\n<li><strong>본인 차량·보행자 부상 사진·진단서</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>치료비 영수증·차량 수리 견적</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 견인차 적재함 사용·차량 본래 용도와의 관련성을 입증하면 자배법 운행 중 사고로 평가될 수 있는 영역. 결박 의무 위반은 화물자동차 운수사업법 시행규칙 별표 적재 기준을 자료로.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운행 vs 작업 구분</strong> — 자배법 운행 범위 판례.</li>\n<li><strong>결박 의무</strong> — 화물자동차 운수사업법 위반 가중.</li>\n<li><strong>견인 약관 책임 한도</strong> — 보험·약관 조항 검토.</li>\n<li><strong>사용자 책임</strong> — 민법 756조 운송회사 책임.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 적재 작업 중 낙하와 교통·운행 평가',
        summary:
          '대법원 2009도2390(대법원, 2009.07.09 선고) 영역에서 법원은 화물차를 주차하고 적재함에 적재된 상자를 운반하던 중 적재된 상자 일부가 떨어지면서 피해자에게 상해를 입힌 사안에서, 교통사고처리 특례법상 \'교통\'과 자배법상 \'운행\'의 범위를 종합 평가해야 한다고 본 사례 흐름이 있습니다. 적재 작업 중 낙하 사고도 차량 사용·운행과의 관련성에 따라 자배법 책임이 평가될 수 있는 영역입니다.',
        takeaway: '적재 작업 중 낙하는 자배법 운행 범위 평가가 핵심. 결박 부실 입증 시 운송회사·보험 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '견인차 보험사가 작업 중이라 거부해요',
        answer:
          '<strong>적재함 사용·차량 본래 용도와의 관련성을 입증하면 운행 중 사고로 다투어질 수 있는 영역입니다.</strong>',
      },
      {
        question: '결박 의무 위반 입증은요?',
        answer:
          '<strong>적재함·화물 위치·결박 사진과 화물자동차 운수사업법 시행규칙 적재 기준을 비교 자료로 제출합니다.</strong>',
      },
      {
        question: '본인 차량 손상은 자차보험으로 처리되나요?',
        answer:
          '<strong>본인 자차 우선 처리 후 보험사가 견인차·운송회사에 구상 청구하는 흐름이 일반적입니다.</strong>',
      },
      {
        question: '보행자 부상 치료비는요?',
        answer:
          '<strong>견인차 자동차보험 대인배상·자배법 가지급금 청구 가능 영역입니다.</strong> 실손보험 병행 활용.',
      },
      {
        question: '운송회사 책임은요?',
        answer:
          '<strong>민법 756조 사용자 책임으로 운송회사에 직접 청구 가능한 트랙입니다.</strong> 회사 영업배상보험도 확인.',
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

  // ─── 5. traffic-accident-cargo-tarp-failure-debris-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-cargo-tarp-failure-debris-track',
    keyword: '화물 덮개 풀림 도로 낙하',
    questionKeyword: '고속도로에서 앞 트럭의 덮개가 풀리며 화물이 도로에 떨어져 후행차가 충돌.',
    ctaKeyword: '화물 낙하 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '트럭 덮개 풀림 화물 낙하 — 5단계 적재 결박 의무 | 로앤가이드',
      description:
        '고속도로에서 앞 트럭 덮개가 풀려 화물이 떨어지면서 후행차가 충돌했다면 결박·점검 의무 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로 주행 중 앞 트럭의 덮개가 갑자기 풀리면서 적재된 자재 일부가 도로 위로 떨어졌어요. 본인 차량은 회피할 시간이 없어 자재를 그대로 밟고 가다 타이어 펑크와 함께 가드레일을 들이받았어요. 트럭 운전자는 \\"바람이 강해서 풀린 것\\"이라며 책임을 회피하고, 본인은 \\"덮개·결박 점검 부실\\"이라 봅니다. 차량 파손 + 본인 경미 부상 + 가드레일 손괴까지 발생.\\" 화물 낙하 사고는 ① 도로교통법 39조 4항: 적재물 추락 방지 조치 의무 ② 화물자동차 운수사업법 시행규칙: 결박·덮개 점검 의무 ③ 자배법 운행 중 사고(낙하·추락도 포함 평가) ④ 운송회사 사용자 책임 ⑤ 도로공사 가드레일 손괴 구상 5가지가 결합되는 영역. 트럭 측 책임이 두텁게 평가되는 트랙. 대응은 ① 현장 자료 ② 운수업체 신원 ③ 보험 ④ 행정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 화물 낙하 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·결박·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적재물 추락 방지 조치</strong> — 도로교통법 39조 4항.</li>\n<li><strong>② 결박·덮개 점검 의무</strong> — 화물자동차 운수사업법 시행규칙.</li>\n<li><strong>③ 트럭 자동차보험 자배법·대인·대물</strong></li>\n<li><strong>④ 운송회사 사용자 책임 (민법 756조)</strong></li>\n<li><strong>⑤ 도로공사 가드레일 손괴·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 적재물 추락은 도로교통법 39조 4항 명문 의무 위반. 결박·덮개 점검 부실이 입증되면 트럭 측 책임이 두텁게 평가되는 영역. 후행차 회피 불가 시 본인 과실은 분배 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·낙하물·트럭 차량번호·덮개 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 운송회사·운전자 신원 확인</strong> — 차량번호 조회·운수업 등록증.</li>\n<li><strong>4단계 — 트럭 자동차보험 자배법·대물 청구</strong></li>\n<li><strong>5단계 — 운송회사 사용자 책임·도로공사 구상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">화물 낙하 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (전후방, 낙하 순간 포함)</strong></li>\n<li><strong>현장 낙하물·트럭 차량번호·덮개 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>운송회사 사업자등록증·트럭 자동차보험증서</strong></li>\n<li><strong>차량 수리 견적·타이어 손상 자료</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>가드레일 손괴 도로공사 통지서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 트럭이 사고 직후 도주하면 차량번호·블랙박스로 도주 사실확인. 후행차에 추가 사고가 연쇄되면 모든 차량의 블랙박스 확보. 낙하물·결박 상태는 도로공사 견인 전 사진 다수 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적재물 추락 방지 의무</strong> — 도로교통법 39조 4항 명문.</li>\n<li><strong>결박 부실 입증</strong> — 화물자동차 운수사업법 시행규칙.</li>\n<li><strong>후행차 회피 가능성</strong> — 본인 과실 분배 사정.</li>\n<li><strong>사용자 책임</strong> — 운송회사 직접 청구.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 적재물 결박 부실과 운행 중 사고',
        summary:
          '울산지법 2004가합8445(울산지법, 2005.06.01 선고) 영역에서 법원은 화물차량을 운행 중 적재물의 적재상태가 불량함을 느끼고 도로변에 차량을 세운 후 적재물을 정리하던 중 적재물이 떨어져 사고가 발생한 경우, 자동차종합보험약관상 \'운행 중의 사고\'에 해당한다고 본 사례 흐름이 있습니다. 적재물 결박·덮개 점검 부실로 인한 낙하 사고는 자배법 운행 책임이 평가될 수 있는 영역입니다.',
        takeaway: '적재물 결박 부실 → 운행 중 사고 평가 가능 트랙. 자배법·운송회사 사용자 책임 양 갈래 청구.',
      },
    ],
    faq: [
      {
        question: '트럭이 사고 후 그냥 가버렸어요',
        answer:
          '<strong>블랙박스로 차량번호 확보 시 도로공사·경찰 조회로 운수업체 추적 가능한 영역입니다.</strong> 뺑소니로 신고 검토.',
      },
      {
        question: '본인 회피 가능성이 있었다고 하는데요?',
        answer:
          '<strong>고속도로 회피 거리·속도·시간을 블랙박스로 분석해 회피 불가를 다투어볼 수 있는 영역입니다.</strong>',
      },
      {
        question: '운송회사 책임도 청구되나요?',
        answer:
          '<strong>민법 756조 사용자 책임으로 운송회사에 직접 청구 가능한 트랙입니다.</strong> 회사 영업배상보험도 함께 확인.',
      },
      {
        question: '가드레일 손괴 비용은요?',
        answer:
          '<strong>도로공사가 트럭 측에 구상 청구하는 흐름이 일반적이지만 본인 통지 의무도 검토되는 영역입니다.</strong>',
      },
      {
        question: '치료비 우선 처리는요?',
        answer:
          '<strong>트럭 자동차보험 대인·자배법 가지급금 청구 가능 영역입니다.</strong> 본인 자동차보험 무보험차 상해 특약도 검토.',
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
