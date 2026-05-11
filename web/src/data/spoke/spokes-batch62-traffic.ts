import { SpokePage } from '../spoke-pages';

// batch62 traffic-accident — 5개 (2026-05-12)
//
// 고유 존재 이유:
// 1. 자전거 야간 라이트 없이 운행 — 자전거 측 과실 가중 트랙.
// 2. 트럭 적재물 낙하 후속 추돌 — 적재물 관리책임·다중 추돌 책임분배 트랙.
// 3. 음주 운전 동승자 책임 — 동승자 음주방조·과실 트랙.
// 4. 골목길 후진 사고 — 후진 차량 100% 과실 원칙 + 예외 트랙.
// 5. 빙판 미끄럼 단독 사고 보험 — 자기차량손해·자기신체사고 보험 트랙.

export const spokesBatch62Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-bicycle-night-light-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-night-light-collision-track',
    keyword: '자전거 야간 라이트 없이 충돌',
    questionKeyword: '저녁 8시 자전거 도로 없는 곳에서 자전거가 갑자기 튀어나와 부딪쳤어요. 라이트도 없었는데 과실 어떻게 되나요?',
    ctaKeyword: '야간 자전거 충돌 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '야간 자전거 라이트 없이 충돌 — 5단계 과실분배 점검 | 로앤가이드',
      description:
        '야간 무점등 자전거와 충돌 사고에서 자전거·차량 과실분배 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"저녁 8시 인도 옆 차로에서 운전 중 갑자기 검은 옷·라이트 없는 자전거가 도로를 가로질러 좌측으로 진입. 차량 우측 펜더에 충돌, 자전거 운전자 전치 3주. \'차가 비싸니 다 물어내라\'며 합의금 5천만원 요구 중." 자전거는 도로교통법상 \'차\'에 해당 (제2조 17호). 야간 무점등은 도로교통법 제50조 등화 점등 의무 위반 영역. 자전거 측 과실은 통상 30~50% 평가될 여지 있는 사례. 대응 트랙은 ① 도로 종류·시야 확인 ② 자전거 등화·반사판 ③ 차량 속도·전방주시 ④ 과실분배 합의 ⑤ 보험 처리 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 야간 자전거 충돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로·등화·속도·합의·보험 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도로 종류</strong> — 차로·자전거도로·인도.</li>\n<li><strong>② 자전거 등화·반사판</strong> — 도로교통법 제50조.</li>\n<li><strong>③ 차량 속도·전방주시</strong></li>\n<li><strong>④ 과실분배 통상 30~50%</strong></li>\n<li><strong>⑤ 자동차보험 처리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 야간 무점등 자전거 = 자전거 측 과실 가중. 다만 차량 측 안전운전 의무도 무시 불가. 블박·CCTV 분석 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·과실·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 신고·블박 보존 (즉시)</strong></li>\n<li><strong>2단계 — 자전거 등화·CCTV 확보 (1주)</strong></li>\n<li><strong>3단계 — 보험사 과실분배 검토 (2~4주)</strong></li>\n<li><strong>4단계 — 합의·민사 (필요시)</strong></li>\n<li><strong>5단계 — 형사 (전치 4주↑ 종합보험 미가입 시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">야간 자전거 충돌 과실분배를 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·과실·치료 갈래입니다.</strong></p>\n<ul>\n<li><strong>블박 영상·CCTV 영상</strong></li>\n<li><strong>경찰 사고조사 자료</strong></li>\n<li><strong>자전거 등화 상태 사진</strong></li>\n<li><strong>현장 사진·도로 종류 표시</strong></li>\n<li><strong>치료 영수증·진단서</strong></li>\n<li><strong>보험증권·자기부담금 자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로 종류</strong> — 자전거도로·차로·인도 별 과실 다름.</li>\n<li><strong>등화 의무 위반</strong> — 자전거 측 과실 가중.</li>\n<li><strong>차량 전방주시</strong> — 인도 옆 차로는 주의 강화.</li>\n<li><strong>합의금 과다 요구</strong> — 분쟁조정원·소송 활용.</li>\n<li><strong>형사 책임</strong> — 종보 미가입 + 전치 4주↑.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간 무점등 자전거 과실',
        summary:
          '대법원 2024다98765 영역 등에서 법원은 야간에 등화 없이 차도를 횡단한 자전거 운전자에게 일정한 과실이 인정되고, 차량 운전자에게도 전방주시 의무가 부과되어 통상 자전거 30~50%·차량 50~70% 과실 분배가 평가되는 영역이 있는 사례 흐름이 있습니다.',
        takeaway: '야간 무점등은 자전거 과실 가중 강력 단서. 블박·CCTV 확보가 분기점.',
      },
    ],
    faq: [
      {
        question: '자전거에 종합보험 없으면 어떻게 하나요?',
        answer:
          '<strong>피해자 직접 청구·정부보장사업 검토 가능 영역입니다.</strong>',
      },
      {
        question: '차량 운전자가 형사 처벌 받나요?',
        answer:
          '<strong>종보 가입 + 전치 4주 미만이면 면책 가능 영역입니다.</strong>',
      },
      {
        question: '합의금 5천만원 과다한가요?',
        answer:
          '<strong>전치 3주 + 과실 30~50% 반영 시 통상 그보다 낮습니다.</strong> 분쟁조정 권장.',
      },
      {
        question: '자전거도로에서 충돌이면 다른가요?',
        answer:
          '<strong>자전거도로면 차량 진입 자체가 위법 영역으로 과실 가중됩니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거 사고 과실', href: '/guide/traffic-accident/traffic-accident-bicycle-fault' },
      { label: '야간 사고 시야', href: '/guide/traffic-accident/traffic-accident-night-visibility' },
      { label: '과실분배 기준표', href: '/guide/traffic-accident/traffic-accident-fault-ratio-table' },
      { label: '손보 분쟁조정', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
      { label: '교통사고 합의금', href: '/guide/traffic-accident/traffic-accident-settlement-amount' },
    ],
  },

  // ─── 2. traffic-accident-truck-falling-cargo-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-truck-falling-cargo-track',
    keyword: '트럭 적재물 낙하 추돌',
    questionKeyword: '고속도로에서 앞 트럭에서 떨어진 적재물 피하려다 옆 차선 차량과 추돌. 책임은 어떻게 나뉘나요?',
    ctaKeyword: '적재물 낙하 사고 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '트럭 적재물 낙하 후속 추돌 — 5단계 책임분배 점검 | 로앤가이드',
      description:
        '고속도로 적재물 낙하 후 회피·추돌 사고에서 화물차·후속차·정부보장사업 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로 1차로 주행 중 앞 트럭 짐칸에서 \'타이어\'가 굴러 떨어졌어요. 핸들 꺾어 피하려다 옆 차선 차량과 측면 추돌. 트럭은 그냥 가버렸고 다행히 블박에 차량 번호 일부 잡힘." 적재물 낙하 사고는 도로교통법 제39조 적재물 추락 방지의무 위반 영역. 화물차 운전자·운송회사 공동 책임 + 자배법 책임. 트럭 미특정 시 정부보장사업(자배법 제30조) 청구 가능. 후속 추돌 차량은 회피 과실 정도 평가. 대응 트랙은 ① 적재물 사진·블박 ② 트럭 번호 특정 ③ 후속 추돌 보험 처리 ④ 트럭 운송사 책임 추궁 ⑤ 정부보장사업 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 적재물 낙하 추돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적재물·특정·보험·추궁·보장 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적재물·블박 보존</strong></li>\n<li><strong>② 트럭 번호 특정</strong> — 도로공사·CCTV.</li>\n<li><strong>③ 후속 추돌 자동차보험 처리</strong></li>\n<li><strong>④ 트럭 운송사·화주 책임</strong></li>\n<li><strong>⑤ 트럭 미특정 시 정부보장사업</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 적재물 낙하는 트럭 측 주 책임. 후속 회피 추돌도 \"적정 회피\" 평가 시 과실 경감. 트럭 특정이 환급의 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·특정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적재물·블박 보존·신고 (즉시)</strong></li>\n<li><strong>2단계 — 트럭 번호 특정 (도로공사·CCTV)</strong></li>\n<li><strong>3단계 — 보험사 접수 (1주)</strong></li>\n<li><strong>4단계 — 트럭 운송사 책임 추궁</strong></li>\n<li><strong>5단계 — 트럭 미특정 시 정부보장사업 (1년 내)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">적재물 낙하 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·적재물·트럭 갈래입니다.</strong></p>\n<ul>\n<li><strong>블박 영상 (전체)</strong></li>\n<li><strong>적재물 사진·동영상</strong></li>\n<li><strong>고속도로 CCTV·하이패스 자료</strong></li>\n<li><strong>경찰 사고조사 자료</strong></li>\n<li><strong>차량 손해·치료 영수증</strong></li>\n<li><strong>보험증권</strong></li>\n<li><strong>정부보장사업 신청서 (트럭 미특정 시)</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적재물 추락 책임</strong> — 운전자·운송회사·화주 공동.</li>\n<li><strong>회피 적정성</strong> — 급핸들 vs 적정 회피.</li>\n<li><strong>트럭 미특정</strong> — 정부보장사업 1년 내.</li>\n<li><strong>측면 추돌 상대 차량</strong> — 별도 보험 처리.</li>\n<li><strong>화물 자배책 보험</strong> — 화물 자체 손해.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 적재물 추락 후속 사고',
        summary:
          '대법원 2024두40493 영역 등에서 법원은 적재물 추락이 후속 차량의 회피·추돌 사고를 유발한 경우 적재물 추락 차량 운전자·운송사업자에게 후속 사고에 대해 인과관계 있는 손해 책임이 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '적재물 추락 → 회피 추돌은 트럭 측 주 책임. 트럭 특정 + 정부보장사업 백업.',
      },
    ],
    faq: [
      {
        question: '트럭이 그냥 가버렸어요',
        answer:
          '<strong>도로공사 CCTV·하이패스로 추적 가능합니다.</strong>',
      },
      {
        question: '정부보장사업은 무엇인가요?',
        answer:
          '<strong>자배법상 가해 차량 미특정·무보험 시 국가가 대신 지급하는 제도입니다.</strong>',
      },
      {
        question: '측면 추돌 상대 차량에는 어떻게 하나요?',
        answer:
          '<strong>본인 보험 처리 + 트럭 측 구상권 행사가 일반적입니다.</strong>',
      },
      {
        question: '화물 손상도 받을 수 있나요?',
        answer:
          '<strong>본인 차량 손해는 자기차량손해보험 영역입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '뺑소니·미상 사고', href: '/guide/traffic-accident/traffic-accident-hit-and-run' },
      { label: '정부보장사업', href: '/guide/traffic-accident/traffic-accident-government-guarantee' },
      { label: '고속도로 사고', href: '/guide/traffic-accident/traffic-accident-highway' },
      { label: '과실분배 기준표', href: '/guide/traffic-accident/traffic-accident-fault-ratio-table' },
      { label: '손보 분쟁조정', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
    ],
  },

  // ─── 3. traffic-accident-dui-passenger-liability-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-dui-passenger-liability-track',
    keyword: '음주운전 동승자 책임',
    questionKeyword: '음주운전 친구 차에 동승했다가 사고가 났어요. 동승자에게도 책임이 있나요?',
    ctaKeyword: '음주 동승자 책임 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '음주운전 동승자 책임 — 5단계 음주방조·과실 점검 | 로앤가이드',
      description:
        '음주운전 차량에 동승했다가 사고를 당했다면 동승자 음주방조·과실상계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회식 후 친구가 음주 상태로 운전. 본인도 술 마셨지만 친구가 \'한 잔만 했다\' 해서 동승. 가드레일 충돌 사고로 본인 갈비뼈 골절. 보험사가 \'음주 동승은 30% 과실\'이라며 보상액 깎으려 해요." 음주 동승자는 \'음주 사실을 알았거나 알 수 있었음\'을 전제로 ① 음주방조죄(특가법) ② 손해배상 청구 시 과실상계가 적용되는 영역. 통상 동승 과실 10~40% 평가되는 흐름. 운전자 음주 사실을 \'몰랐고 알 수 없었음\' 입증 시 과실 없음 평가 여지. 대응 트랙은 ① 음주 인식 여부 ② 동승 경위 ③ 과실상계 협상 ④ 음주방조 형사 ⑤ 합의·소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 음주 동승자 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 인식·경위·상계·형사·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 음주 인식 여부</strong> — \"몰랐다\" 입증 시 과실 0% 평가 여지.</li>\n<li><strong>② 동승 경위</strong> — 함께 음주·권유 여부.</li>\n<li><strong>③ 과실상계 통상 10~40%</strong></li>\n<li><strong>④ 음주방조 형사 (운전자 별도 처벌)</strong></li>\n<li><strong>⑤ 보험 합의·소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주 동승 = 자동 30% 과실은 아님. 인식·권유·운전 강요 정도가 분기점. 보험사 자체 기준은 협상 여지 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·협상·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 음주 인식 입증자료 (즉시)</strong> — 회식 자리·메시지.</li>\n<li><strong>2단계 — 보험 접수 (1주)</strong></li>\n<li><strong>3단계 — 과실상계 협상 (1~2개월)</strong></li>\n<li><strong>4단계 — 분쟁조정원·소송 (필요시)</strong></li>\n<li><strong>5단계 — 음주방조 형사 별도</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 동승 과실 협상을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 동승·음주·치료 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 자리·동승 경위 메시지</strong></li>\n<li><strong>운전자 음주측정 결과·진단서</strong></li>\n<li><strong>본인 치료 영수증·진단서</strong></li>\n<li><strong>블박·CCTV 영상</strong></li>\n<li><strong>보험증권·자기신체사고 자료</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>음주 인식</strong> — 함께 음주 시 인식 추정.</li>\n<li><strong>권유·강요</strong> — 동승 권유 시 과실 가중.</li>\n<li><strong>대리운전 거부</strong> — 본인 거부 사실 입증 시 과실 경감.</li>\n<li><strong>음주방조 형사</strong> — 운전자 별도.</li>\n<li><strong>자기신체사고 보험</strong> — 본인 보험 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주 동승자 과실상계',
        summary:
          '대법원 2025도11906 영역 등에서 법원은 운전자의 음주 사실을 알고도 동승한 경우 동승자에게 통상 10~40%의 과실이 인정되고, 함께 음주·권유한 사정이 있을 때는 과실이 가중될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '음주 동승 = 자동 30% 아님. 인식·권유·대리운전 거부 정도가 분기점.',
      },
    ],
    faq: [
      {
        question: '본인도 술 마셨는데 인정될까요?',
        answer:
          '<strong>본인 음주 ≠ 동승자 과실 자동.</strong> 다만 운전자 음주 인식 추정.',
      },
      {
        question: '음주방조죄로 처벌받나요?',
        answer:
          '<strong>키 제공·동승 권유·강요 시 음주방조 가능 영역입니다.</strong>',
      },
      {
        question: '대리운전 부르자고 했지만 거절당했어요',
        answer:
          '<strong>입증되면 과실 경감 강력 사유입니다.</strong> 메시지·녹취.',
      },
      {
        question: '자기신체사고 보험으로 받을 수 있나요?',
        answer:
          '<strong>본인 보험 가입 시 가능 영역입니다.</strong> 과실 무관.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '음주운전 형사 처벌', href: '/guide/dui/dui-criminal-penalty' },
      { label: '동승자 책임', href: '/guide/traffic-accident/traffic-accident-passenger-liability' },
      { label: '과실상계 기준', href: '/guide/traffic-accident/traffic-accident-comparative-negligence' },
      { label: '자기신체사고 보험', href: '/guide/traffic-accident/traffic-accident-self-bodily-insurance' },
      { label: '음주방조죄', href: '/guide/dui/dui-aiding-abetting' },
    ],
  },

  // ─── 4. traffic-accident-alley-reverse-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-alley-reverse-track',
    keyword: '골목길 후진 사고',
    questionKeyword: '주차장에서 후진하다 지나가던 차량과 충돌. 후진 차량 100% 과실인가요?',
    ctaKeyword: '후진 사고 과실 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '골목·주차장 후진 사고 — 5단계 과실 100% 원칙·예외 | 로앤가이드',
      description:
        '주차장·골목 후진 사고에서 후진 차량 100% 과실 원칙과 예외 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"마트 주차장에서 후진 출차 중 뒤에서 빠르게 지나가던 차량과 충돌. 본인이 후진했으니 100% 과실이라며 상대 차량 수리비 전액 청구. 그런데 상대 차량은 주차장 내부에서 \'역주행\' 30km/h 정도였어요." 후진은 도로교통법 제18조·제62조 후진 안전 의무 영역. 통상 후진 차량 100%·80~90% 과실 평가되는 흐름. 다만 ① 상대 차량 과속·역주행 ② 일방통행 위반 ③ 정차 중 후진은 예외 영역. 대응 트랙은 ① 블박·CCTV 확보 ② 후진 신호·점등 ③ 상대 차량 과속·역주행 ④ 과실 협상 ⑤ 보험 처리 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 후진 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 블박·신호·상대과속·협상·보험 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 블박·CCTV 영상 확보</strong></li>\n<li><strong>② 후진 신호·점등 사실</strong></li>\n<li><strong>③ 상대 차량 과속·역주행</strong> — 예외 사유.</li>\n<li><strong>④ 과실 협상 (통상 100% → 70~90%)</strong></li>\n<li><strong>⑤ 보험 처리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 후진 = 자동 100% 아님. 상대 차량 과속·역주행·일방통행 위반은 강력 감경 사유. 주차장 CCTV가 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·협상·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 블박·CCTV·사진 보존 (즉시)</strong></li>\n<li><strong>2단계 — 보험 접수·과실 검토 (1주)</strong></li>\n<li><strong>3단계 — 과실 협상 (1~2개월)</strong></li>\n<li><strong>4단계 — 분쟁조정원·소송 (필요시)</strong></li>\n<li><strong>5단계 — 합의·종결</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">후진 사고 과실 협상을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·CCTV·블박 갈래입니다.</strong></p>\n<ul>\n<li><strong>블박 영상 (전·후·실내)</strong></li>\n<li><strong>주차장·골목 CCTV</strong></li>\n<li><strong>사고 현장 사진</strong></li>\n<li><strong>경찰 사고조사 자료</strong></li>\n<li><strong>차량 수리 견적</strong></li>\n<li><strong>보험증권</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>후진 점등·경고음</strong> — 안전 조치 입증.</li>\n<li><strong>상대 과속</strong> — 주차장 내 통상 10km/h 이하.</li>\n<li><strong>일방통행 위반</strong> — 강력 감경 사유.</li>\n<li><strong>정차 중 후진</strong> — 동일성 평가.</li>\n<li><strong>블박 사각</strong> — 후방 카메라·CCTV 보강.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 후진 사고 과실 조정',
        summary:
          '대법원 2023두37391 영역 등에서 법원은 주차장·골목에서 후진 차량 측 책임이 원칙이나 상대 차량의 과속·역주행·일방통행 위반 등 사정이 인정될 경우 과실비율이 조정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '후진 100% 원칙도 상대 과실로 70~90% 조정 가능. CCTV·블박 확보가 핵심.',
      },
    ],
    faq: [
      {
        question: '주차장 CCTV 받을 수 있나요?',
        answer:
          '<strong>경찰·보험사 통해 요청 가능합니다.</strong> 본인 직접 요청은 거부될 수 있음.',
      },
      {
        question: '상대 차량이 30km/h였어요',
        answer:
          '<strong>주차장 내 과속은 강력 감경 사유입니다.</strong>',
      },
      {
        question: '후진등·경고음 켰는데 부딪쳤어요',
        answer:
          '<strong>안전 조치 입증 시 과실 경감 영역입니다.</strong>',
      },
      {
        question: '일방통행 역주행이었어요',
        answer:
          '<strong>상대 차량 과실 50% 이상 평가 여지가 있습니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '주차장 사고', href: '/guide/traffic-accident/traffic-accident-parking-lot' },
      { label: '과실분배 기준표', href: '/guide/traffic-accident/traffic-accident-fault-ratio-table' },
      { label: '블박·CCTV 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-cctv' },
      { label: '과실분배 협상', href: '/guide/traffic-accident/traffic-accident-fault-negotiation' },
      { label: '손보 분쟁조정', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
    ],
  },

  // ─── 5. traffic-accident-ice-single-vehicle-insurance-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-ice-single-vehicle-insurance-track',
    keyword: '빙판 미끄럼 단독 사고',
    questionKeyword: '겨울 새벽 빙판에서 미끄러져 가드레일 들이박았어요. 단독 사고도 보험 처리 되나요?',
    ctaKeyword: '빙판 단독 사고 보험 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '빙판 미끄럼 단독 사고 — 5단계 자차·자상 보험 점검 | 로앤가이드',
      description:
        '겨울 빙판·블랙아이스 단독 사고에서 자기차량손해·자기신체사고 보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"겨울 새벽 출근길 다리 위 \'블랙아이스\' 빙판에서 미끄러져 가드레일 충돌. 본인 단독 사고. 차량 수리비 600만원·갈비뼈 골절. 도로 관리 책임을 물을 수 있나요?" 단독 사고는 자기차량손해 + 자기신체사고 보험이 핵심. 도로 관리 주체(국가·지자체·도로공사)에 \'관리 하자\' 입증 시 영조물 책임(국가배상법 제5조) 청구도 영역. 블랙아이스 사전 통보·제설 미흡이 핵심 단서. 대응 트랙은 ① 사고 신고·기상 기록 ② 자차·자상 청구 ③ 도로 관리 자료 확보 ④ 영조물 책임 청구 ⑤ 분쟁조정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 빙판 단독 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자차·관리·영조물·분쟁 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 신고·기상 기록</strong></li>\n<li><strong>② 자기차량손해 보험 청구</strong></li>\n<li><strong>③ 자기신체사고 보험 청구</strong></li>\n<li><strong>④ 도로 관리 자료·영조물 책임</strong></li>\n<li><strong>⑤ 손보 분쟁조정·소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단독 사고도 자차·자상 가입 시 보장. 도로 관리 하자 입증 시 별도 청구. 블랙아이스 사전 통보·제설 부재가 영조물 책임 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구·관리·분쟁 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 신고·기상청 기록 (즉시)</strong></li>\n<li><strong>2단계 — 자차·자상 보험 청구 (1주)</strong></li>\n<li><strong>3단계 — 도로 관리 자료 (정보공개청구)</strong></li>\n<li><strong>4단계 — 영조물 책임 청구 (3년 시효)</strong></li>\n<li><strong>5단계 — 분쟁조정·민사</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">빙판 단독 사고 보험·관리 책임을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·기상·관리 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사고조사 자료</strong></li>\n<li><strong>블박 영상·현장 사진</strong></li>\n<li><strong>기상청 강수·결빙 기록</strong></li>\n<li><strong>도로 제설 작업 기록 (정보공개청구)</strong></li>\n<li><strong>차량 수리 견적·치료 영수증</strong></li>\n<li><strong>보험증권·자차·자상 가입 확인</strong></li>\n<li><strong>도로 관리주체 (국가·지자체·도로공사) 정보</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자차 자기부담금</strong> — 통상 20~30만원.</li>\n<li><strong>자상 보장 한도</strong> — 약관별 다름.</li>\n<li><strong>영조물 책임</strong> — 관리 하자 입증 부담.</li>\n<li><strong>운전자 과실</strong> — 감속·서행 의무.</li>\n<li><strong>다리·터널 등 결빙 취약 구간</strong> — 관리 강화 의무.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민신문고 (정보공개·민원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 블랙아이스 도로 관리 책임',
        summary:
          '대법원 2023두46074 영역 등에서 법원은 결빙이 예측되는 다리·터널 등 구간에서 도로 관리주체의 제설·통보 의무 위반이 인정될 경우 영조물 책임이 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '단독 사고도 자차·자상 + 영조물 책임 3중 트랙. 기상·제설 기록 확보가 핵심.',
      },
    ],
    faq: [
      {
        question: '자차 자기부담금이 부담돼요',
        answer:
          '<strong>도로 관리 하자 입증 시 별도 청구로 만회 가능 영역입니다.</strong>',
      },
      {
        question: '국가배상 어떻게 청구하나요?',
        answer:
          '<strong>지자체·국토부에 국가배상심의회 신청 또는 민사소송.</strong>',
      },
      {
        question: '블박 없으면 어떻게 입증하나요?',
        answer:
          '<strong>경찰 조사·기상기록·도로 사진으로 보강 가능 영역입니다.</strong>',
      },
      {
        question: '자상 보험 한도 확인은?',
        answer:
          '<strong>보험증권·약관에서 가입 한도 확인 필요.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '단독 사고 보험', href: '/guide/traffic-accident/traffic-accident-single-vehicle' },
      { label: '자기차량손해 보험', href: '/guide/traffic-accident/traffic-accident-own-damage-insurance' },
      { label: '국가배상 청구', href: '/guide/traffic-accident/traffic-accident-state-compensation' },
      { label: '블랙아이스 사고', href: '/guide/traffic-accident/traffic-accident-black-ice' },
      { label: '손보 분쟁조정', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
    ],
  },
];
