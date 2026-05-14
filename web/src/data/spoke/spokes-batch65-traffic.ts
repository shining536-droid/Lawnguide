import { SpokePage } from '../spoke-pages';

// batch65 traffic-accident — 5개 (2026-05-15)
//
// 고유 존재 이유:
// 1. electric-kickboard-vehicle-collision — 전동킥보드(PM) vs 차량 충돌 과실 비율 + 도로교통법상 자전거 준용 + 보험 트랙.
// 2. parking-lot-door-zone-collision — 주차장 문 개방·폐문 중 인접 차량 충돌 (개문 사고) 책임 분배.
// 3. snowchain-failure-skid-singlecar — 스노우체인 미장착·결함으로 단독 미끄럼 사고 (도로관리·제조물·운전자 갈래).
// 4. roadwork-zone-sign-missing-collision — 도로공사 구간 안전표지·라바콘·신호수 미설치 추돌.
// 5. cargo-overhang-falling-injury — 적재물 돌출·낙하로 후속 차량 부상 (적재 결박 의무·트럭 운전자 책임).

export const spokesBatch65Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-electric-kickboard-vehicle-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-electric-kickboard-vehicle-collision-track',
    keyword: '전동킥보드 차량 충돌',
    questionKeyword: '전동킥보드 타고 가다가 차량과 충돌했어요. 과실 비율은 어떻게 되나요?',
    ctaKeyword: '전동킥보드 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전동킥보드 차량 충돌 — 5단계 PM 과실 비율 다툼 | 로앤가이드',
      description:
        '전동킥보드 등 개인형 이동장치(PM)가 차량과 부딪혔다면 과실 비율·보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길에 공유 킥보드 타고 가다 우회전 차량 옆구리에 부딪혔어요. 운전자는 \\"차도 가운데로 들어왔으니 본인 잘못\\"이라 하고, 본인은 \\"우회전 차량이 좌측 확인 안 했다\\"고 봅니다. 헬멧을 안 쓰고 있어 머리 부상이 있고, 킥보드 자동차보험은 없는 상태.\\" 전동킥보드 사고는 ① 도로교통법상 \\"개인형 이동장치(PM)\\" 분류 ② 자전거 준용 규정에 따른 차도 통행 의무 ③ PM 운전자 과실(헬멧·면허·음주) ④ 차량 운전자 전방 주시·우측 확인 의무 ⑤ 자동차보험 적용 가능성 5가지가 결합되는 영역. PM도 자동차손해배상보장법 적용 대상이라 차량 가해 시 차량 보험사로 청구할 수 있는 트랙. 대응은 ① 현장 자료 ② 과실 분석 ③ 의료 ④ 보험 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전동킥보드 차량 충돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분류·과실·치료·보험·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① PM 법적 분류</strong> — 개인형 이동장치, 자전거 준용 규정.</li>\n<li><strong>② 양측 과실 비율</strong> — PM 차도 통행·헬멧·면허 여부.</li>\n<li><strong>③ 차량 운전자 가중 사유</strong> — 우측 확인·음주·과속.</li>\n<li><strong>④ 자동차보험·정부보장사업</strong> — PM 책임보험 의무 + 차량 보험.</li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: PM도 자배법 적용 대상으로 차량 보험사 청구 가능한 영역. 헬멧 미착용·면허 미보유는 PM 측 과실 가산 사유이나 차량 운전자 책임이 완전히 면책되기는 어려운 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·CCTV·킥보드 위치·노면 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 의료기록 (즉시)</strong> — 머리·목·골반 부상 진단.</li>\n<li><strong>4단계 — 차량 자동차보험 청구</strong> — 책임보험·종합보험·자배법 가지급금.</li>\n<li><strong>5단계 — 민사 손해배상·조정 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전동킥보드 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>블랙박스·CCTV·현장 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>킥보드 위치·파손·노면 상태 사진</strong></li>\n<li><strong>본인 면허·헬멧 착용 자료</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>킥보드 대여 이력·앱 기록 (공유 PM)</strong></li>\n<li><strong>차량 자동차보험증서·운전자 면허</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공유 킥보드 앱의 운행 이력(시간·속도·경로)은 본인 행적 입증의 핵심 자료. 사고 직후 캡처 보존. 머리 부상은 헬멧 미착용 과실 가산 사정이므로 의료 기록 정밀 보관.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>차도 vs 보도 통행</strong> — PM은 원칙적으로 차도 우측 통행 의무.</li>\n<li><strong>헬멧·면허·음주</strong> — 본인 과실 가산 사유.</li>\n<li><strong>차량 운전자 의무</strong> — 좌·우측 확인·전방 주시.</li>\n<li><strong>PM 자동차보험</strong> — 책임보험 의무, 종합보험은 선택.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전동킥보드와 도로교통법',
        summary:
          '대법원 2020도16420(대법원, 2022.12.22 선고) 영역에서 법원은 전동킥보드 등 개인형 이동장치(PM)의 운전·음주운전·무면허 운전을 두고 도로교통법 개정 전후의 법령 변경 취지를 종합 고려해 평가해야 한다고 본 사례 흐름이 있습니다. PM 운전자도 차도 통행 의무·면허·헬멧 등 도로교통법상 의무를 이행했는지가 과실비율 평가의 주요 사정으로 다투어질 수 있는 영역입니다.',
        takeaway: 'PM도 자배법·도로교통법 적용 대상. 차량 가해 사고 시 차량 보험 청구 + 본인 헬멧·면허·음주 사정은 과실 가산 평가 여지.',
      },
    ],
    faq: [
      {
        question: '헬멧을 안 쓰고 있었어요',
        answer:
          '<strong>본인 과실 가산 사유지만 차량 운전자 책임이 완전히 면책되기는 어려운 영역입니다.</strong> 머리 부상 부위 손해배상은 일부 감산될 수 있습니다.',
      },
      {
        question: 'PM 면허가 없었어요',
        answer:
          '<strong>본인 과실 가산 사유로 평가되는 영역입니다.</strong> 다만 운행자 책임 자체는 차량 측에도 잔존할 여지가 있습니다.',
      },
      {
        question: '공유 킥보드인데 회사 책임은요?',
        answer:
          '<strong>대여 회사의 차량 점검·면허 확인 의무 미흡 시 별도 손해배상 청구가 검토될 수 있는 영역입니다.</strong>',
      },
      {
        question: '차도 가운데로 갔다고 본인 책임이라는데요?',
        answer:
          '<strong>PM은 차도 우측 통행 원칙이지만, 차량 운전자의 좌·우 확인 의무도 함께 평가되는 영역입니다.</strong>',
      },
      {
        question: '치료비는 어떻게 우선 처리하나요?',
        answer:
          '<strong>차량 자동차보험에 자배법 가지급금 청구 가능합니다.</strong> 본인 실손보험도 병행 활용.',
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

  // ─── 2. traffic-accident-parking-lot-door-zone-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-parking-lot-door-zone-collision-track',
    keyword: '주차장 개문 사고',
    questionKeyword: '주차장에서 차 문 열다 옆 차량이 부딪쳤어요. 누구 책임인가요?',
    ctaKeyword: '주차장 개문 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '주차장 개문 사고 — 5단계 차량 충돌 책임 분배 | 로앤가이드',
      description:
        '주차장에서 문 열고 닫다 옆 차량이 부딪쳤다면 개문 사고 과실·보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"마트 지하주차장에서 본인이 운전석 문 열었는데 그 순간 옆 통로를 지나던 차량이 문에 부딪쳤어요. 상대는 \\"문이 갑자기 열렸다\\"고 하고, 본인은 \\"좌우 확인 후 천천히 열었는데 차가 빨리 들어왔다\\"고 봅니다. 차량 도장이 손상되고 본인 차 문도 변형됐어요.\\" 주차장 개문 사고는 ① 도로교통법 49조: 정차·주차 시 다른 차량 통행을 방해하지 않을 의무 ② 통과 차량의 서행·주의의무 ③ 주차장 폭·통로 구조 ④ 자동차보험 적용(주차장 사고도 자배법) ⑤ 통상 개문 측 70~80% 과실 평가가 결합되는 영역. 다만 통과 차량 과속·과실 시 비율 조정이 다투어질 수 있는 트랙. 대응은 ① 현장 자료 ② 과실 분석 ③ 보험 협의 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 주차장 개문 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·과실·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 경위 확인</strong> — 블랙박스·주차장 CCTV.</li>\n<li><strong>② 과실 비율 평가</strong> — 통상 개문 측 70~80%.</li>\n<li><strong>③ 통과 차량 가중 사유</strong> — 과속·전방 주시 소홀.</li>\n<li><strong>④ 자동차보험·분쟁조정</strong> — 손해보험협회·금감원.</li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주차장 개문 사고도 자배법 적용 대상으로 자동차보험 처리 가능한 영역. 개문 측 과실이 무거운 원칙이나, 통과 차량 과속·주의의무 위반 시 비율 조정이 다투어질 수 있는 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 양측 블랙박스·주차장 CCTV·통로 폭 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 인사사고 시 필수)</strong></li>\n<li><strong>3단계 — 양측 자동차보험 사고 접수</strong> — 보험사 협의.</li>\n<li><strong>4단계 — 분쟁조정 (손해보험협회·금감원 1332)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차장 개문 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (전후방·실내)</strong></li>\n<li><strong>상대 차량 블랙박스·주차장 CCTV</strong></li>\n<li><strong>주차장 통로 폭·구조 사진</strong></li>\n<li><strong>교통사고사실확인원 (인사사고 시)</strong></li>\n<li><strong>본인·상대 차량 파손 사진·수리 견적</strong></li>\n<li><strong>의료기록·진단서 (부상 시)</strong></li>\n<li><strong>양측 자동차보험증서·면허</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 주차장 통로의 폭·표지·속도제한 안내가 있는지 사진 보존. 통로가 좁은데 통과 차량이 빨리 들어왔다면 통과 차량 과실 비율 가산 평가 여지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>좌우 확인 의무</strong> — 개문 측 도로교통법 49조 의무.</li>\n<li><strong>통과 차량 서행</strong> — 주차장 내 서행 의무.</li>\n<li><strong>통로 폭·시야</strong> — 좁은 통로일수록 통과 차량 책임 가중.</li>\n<li><strong>블랙박스 실내 영상</strong> — 문 개방 속도·확인 입증.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 주차장 사고와 운전자 주의의무',
        summary:
          '대전지법 2023노1855(대전지법, 2024.10.10 선고) 영역에서 법원은 대학교 구내 지하주차장에서 차량이 출구로 우회전하던 중 사고가 발생한 사안을 두고, 운전자에게 요구되는 주의의무 위반이 있었는지를 차량 거동·페달 조작·주변 보행자 위치 등 제반 사정을 종합해 평가해야 한다고 본 사례 흐름이 있습니다. 주차장 내 사고도 운전자 주의의무 위반이 인정될 수 있는 영역입니다.',
        takeaway: '주차장 내 사고도 운전자 주의의무가 평가 대상. 개문 측 좌우 확인 + 통과 차량 서행 의무 모두 다투어질 수 있음.',
      },
    ],
    faq: [
      {
        question: '본인이 좌우 확인 후 천천히 열었어요',
        answer:
          '<strong>블랙박스 실내 영상으로 입증 시 본인 과실 비율 감산 평가 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '상대가 과속으로 들어왔어요',
        answer:
          '<strong>주차장 통로 폭·CCTV 속도 분석으로 통과 차량 과실 가산 평가가 검토될 수 있는 영역입니다.</strong>',
      },
      {
        question: '경찰 신고를 안 했는데요',
        answer:
          '<strong>인사사고가 없는 물피 사고는 경찰 신고 의무가 면제될 수 있으나, 분쟁 우려 시 신고 권장합니다.</strong>',
      },
      {
        question: '부상이 있으면 치료비 처리는요?',
        answer:
          '<strong>상대 차량 자동차보험에 자배법 가지급금 청구 가능합니다.</strong> 본인 실손보험 병행.',
      },
      {
        question: '보험사가 일방 과실로만 잡으면요?',
        answer:
          '<strong>손해보험협회 1544-0114 또는 금감원 1332 분쟁조정 신청 가능합니다.</strong>',
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

  // ─── 3. traffic-accident-snowchain-failure-skid-singlecar-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-snowchain-failure-skid-singlecar-track',
    keyword: '스노우체인 미끄럼 사고',
    questionKeyword: '스노우체인을 안 채우고 가다 미끄러져 단독 사고 났어요. 보험 처리되나요?',
    ctaKeyword: '스노우체인 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스노우체인 미장착 미끄럼 사고 — 5단계 보험·과실 다툼 | 로앤가이드',
      description:
        '체인 미장착·결함으로 단독 미끄럼 사고가 났다면 자차보험·도로관리·제조물 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"산간 도로에서 \\"체인 장착 의무\\" 표지를 못 보고 그냥 운행하다 미끄러져 가드레일 추돌. 보험사는 \\"안전 의무 위반\\"이라며 자차 보험금 일부 감액을 주장합니다. 체인을 채웠지만 끊어진 경우엔 \\"제조물 결함\\"이라는 별도 청구도 있다고 들었어요.\\" 단독 미끄럼 사고는 ① 자차 종합보험 적용 가능 ② 도로교통법상 체인 장착 의무 위반 시 과실 가산 ③ 도로관리청 제설·염화칼슘 살포 의무 미흡 시 영조물 책임 ④ 체인 자체 결함 시 제조물책임법 ⑤ 동승자 부상 시 자배법 5가지가 결합되는 영역. 본인 단독 사고라도 도로관리·체인 제조사·자차 보험 3가지 트랙으로 회수 가능성이 검토되는 흐름. 대응은 ① 현장 자료 ② 도로 상태 ③ 체인 보존 ④ 보험 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 스노우체인 미끄럼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·도로·체인·보험·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 노면·기상 상태</strong> — 결빙·적설·염화칼슘 살포.</li>\n<li><strong>② 도로교통법 의무</strong> — 체인 장착 의무 표지 유무.</li>\n<li><strong>③ 체인 결함</strong> — 제조물책임법 적용 여지.</li>\n<li><strong>④ 도로관리청 책임</strong> — 영조물 관리 미흡.</li>\n<li><strong>⑤ 자차 종합보험 청구</strong> — 자기부담금 후 보전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단독 미끄럼 사고도 자차 + 도로관리 + 체인 제조사 3중 트랙. 체인 미장착은 본인 과실 가산이나 도로관리 미흡 입증 시 일부 보전이 검토될 수 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 노면·기상·체인 상태·표지 사진.</li>\n<li><strong>2단계 — 경찰·도로관리청 신고 (1주)</strong> — 영조물 책임 청구 근거.</li>\n<li><strong>3단계 — 자차 종합보험 청구</strong> — 자기부담금 협의.</li>\n<li><strong>4단계 — 체인 결함 입증 (제조물책임, 3년 시효·10년 제척)</strong> — 보존 → 감정.</li>\n<li><strong>5단계 — 영조물 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">스노우체인 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·체인·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스·현장 사진</strong></li>\n<li><strong>노면 상태·기상청 적설량 자료</strong></li>\n<li><strong>체인 장착 의무 표지 사진 (유무)</strong></li>\n<li><strong>끊어진 체인 원본 보존·구매 영수증</strong></li>\n<li><strong>도로관리청 제설 작업 일지 (정보공개청구)</strong></li>\n<li><strong>의료기록·치료비 영수증 (부상 시)</strong></li>\n<li><strong>차량 수리 견적·자차 보험증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 끊어진 체인 원본은 폐기 금지. 제조사 결함 입증 시 감정 필수 증거. 도로관리청 정보공개청구로 제설·염화칼슘 살포 시간을 받아 관리 미흡 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>체인 장착 의무 표지</strong> — 표지 위치·가시성.</li>\n<li><strong>자차 자기부담금</strong> — 보험 약관 안전운전 위반 면책.</li>\n<li><strong>영조물 책임</strong> — 국가배상법 5조: 3년 시효.</li>\n<li><strong>체인 결함</strong> — 제조물책임법 3년·10년 제척기간.</li>\n<li><strong>동승자 청구</strong> — 자배법 가지급금 활용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 우연한 외래 사고와 인과관계',
        summary:
          '대법원 2022다303216(대법원, 2023.04.27 선고) 영역에서 법원은 보험약관상 "급격하고도 우연한 외래의 사고"의 의미와 사고의 외래성·인과관계 증명책임은 보험금 청구자에게 있다고 본 사례 흐름이 있습니다. 단독 미끄럼 사고도 노면 결빙·체인 결함 등 외래성 입증이 자차보험 청구의 주요 사정으로 평가될 수 있는 영역입니다.',
        takeaway: '자차 청구 시 사고의 외래성·인과관계 입증이 핵심. 노면 상태·체인 결함 자료가 영조물·제조물 청구 근거로도 다투어질 수 있음.',
      },
    ],
    faq: [
      {
        question: '체인 장착 의무 표지를 못 봤어요',
        answer:
          '<strong>표지의 위치·가시성·예측 가능성을 종합 평가하는 영역입니다.</strong> 표지가 부적절하면 본인 과실 비율 감산 여지.',
      },
      {
        question: '체인이 끊어진 경우 제조사 책임은요?',
        answer:
          '<strong>제조물책임법상 3년 시효·10년 제척기간 내 청구가 검토될 수 있는 영역입니다.</strong> 끊어진 체인 보존 필수.',
      },
      {
        question: '자차 보험은 안전운전 위반으로 면책된다는데요?',
        answer:
          '<strong>경과실은 통상 보장, 중과실(음주 등)만 면책되는 약관이 일반적입니다.</strong> 약관 확인 권장.',
      },
      {
        question: '도로관리청 책임은 어떻게 묻나요?',
        answer:
          '<strong>국가배상법 5조: 영조물 설치·관리 하자 + 3년 시효입니다.</strong> 정보공개청구로 제설 일지 확보.',
      },
      {
        question: '동승자 부상 치료비는요?',
        answer:
          '<strong>본인 자동차보험 자배법 대인배상에서 가지급금 청구 가능합니다.</strong>',
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

  // ─── 4. traffic-accident-roadwork-zone-sign-missing-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-roadwork-zone-sign-missing-collision-track',
    keyword: '도로공사 구간 표지 미설치',
    questionKeyword: '도로공사 구간에서 안전표지가 없어서 추돌사고 났어요. 시공사 책임 묻을 수 있나요?',
    ctaKeyword: '공사 구간 표지 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '도로공사 구간 표지 미설치 추돌 — 5단계 시공사 책임 다툼 | 로앤가이드',
      description:
        '도로공사 구간에서 안전표지·신호수 미설치로 추돌 사고가 났다면 시공사·도로관리 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"야간 국도에서 갑자기 차선 줄어드는 공사 구간을 만났는데 라바콘·안전표지가 미흡해 앞차 급정거 시 추돌했어요. 시공사는 \\"표지 다 설치했다\\"고 하지만 본인 블랙박스엔 라바콘 일부 누락·안내판 가림이 보입니다. 도로관리청은 \\"공사 발주처는 우리지만 관리 책임은 시공사\\"라고 합니다.\\" 공사 구간 사고는 ① 시공사 안전 관리 의무(산업안전보건법·도로교통법) ② 도로관리청 발주처 책임 ③ 영업배상책임보험 ④ 도로교통법 안전표지 미설치 시 처벌특례 적용 ⑤ 민사 손해배상 5가지가 결합되는 영역. 시공사 + 도로관리청 양측에 청구할 수 있는 트랙. 대응은 ① 현장 자료 ② 표지·신호수 확인 ③ 보험 청구 ④ 행정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 도로공사 구간 표지 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·책임·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안전표지·라바콘 배치 적정성</strong> — 도로교통법 안전기준.</li>\n<li><strong>② 시공사 안전 관리 의무</strong> — 산업안전보건법·도로법.</li>\n<li><strong>③ 도로관리청 발주처 책임</strong> — 영조물 책임.</li>\n<li><strong>④ 영업배상책임보험·자동차보험</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공사 구간 표지·신호수 미흡 시 시공사 + 도로관리청 양측에 책임 청구 가능한 영역. 안전표지 미흡 입증은 블랙박스·현장 사진이 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·라바콘·표지판 위치·신호수 유무.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 시공사·도로관리청 손해배상 통지 (1개월)</strong></li>\n<li><strong>4단계 — 시공사 영업배상보험 청구·차량 자동차보험 청구</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공사 구간 표지 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인·앞차 블랙박스 (전후방)</strong></li>\n<li><strong>공사 구간 라바콘·안내판·신호수 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>공사 발주·시공 계약서 (정보공개청구)</strong></li>\n<li><strong>안전 관리 계획서·도로점용 허가증</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>차량 수리 견적·자동차보험증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시공사 안전 관리 계획서·도로점용 허가증을 도로관리청에 정보공개청구하면 표지 배치 기준이 명시됨. 실제 현장과 비교해 미흡 사정 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>안전표지 배치 기준</strong> — 도로교통법 시행규칙·도로공사 표지 기준.</li>\n<li><strong>시공사 vs 도로관리청 분담</strong> — 발주·시공 계약 책임 분배.</li>\n<li><strong>야간 시인성</strong> — 반사재·조명 부족.</li>\n<li><strong>운전자 안전거리</strong> — 후행 차량 의무도 일부 평가.</li>\n<li><strong>3년 시효</strong> — 불법행위·영조물 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공사 구간 안전조치 의무',
        summary:
          '대법원 2012도11361(대법원, 2014.04.10 선고) 영역에서 법원은 지하철 공사구간 현장안전업무 담당자가 횡단보도 표시선 안쪽으로 돌출된 강철빔 주위에 라바콘과 신호수를 배치한 사안을 두고, 안전조치를 취하여야 할 업무상 주의의무 위반 여부는 표지·라바콘·신호수의 배치 적정성을 종합 고려해 평가해야 한다고 본 사례 흐름이 있습니다. 공사 구간 사고는 시공사·관리자의 안전조치 적정성이 주요 다툼 사정으로 평가될 수 있는 영역입니다.',
        takeaway: '라바콘·신호수·안전표지 배치 적정성이 시공사 책임 평가의 핵심 사정. 현장 사진·블랙박스가 결정적.',
      },
    ],
    faq: [
      {
        question: '시공사가 표지 다 설치했다고 주장하면요?',
        answer:
          '<strong>블랙박스·현장 사진과 시공사의 안전 관리 계획서를 비교해 다투어질 수 있는 영역입니다.</strong>',
      },
      {
        question: '도로관리청에도 청구할 수 있나요?',
        answer:
          '<strong>국가배상법 5조 영조물 설치·관리 하자 책임으로 별도 청구 가능합니다.</strong> 3년 시효.',
      },
      {
        question: '본인도 안전거리 미흡이 있었어요',
        answer:
          '<strong>후행 차량 의무가 일부 평가되어 과실 비율 분배가 다투어질 수 있는 영역입니다.</strong>',
      },
      {
        question: '시공사 보험은 어떻게 청구하나요?',
        answer:
          '<strong>시공사가 가입한 영업배상책임보험(건설공사보험)에 직접 청구 가능합니다.</strong>',
      },
      {
        question: '치료비 우선 처리는요?',
        answer:
          '<strong>본인 자동차보험 또는 가해 차량 자배법 가지급금으로 우선 처리 후 시공사에 구상 청구 검토합니다.</strong>',
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

  // ─── 5. traffic-accident-cargo-overhang-falling-injury-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-cargo-overhang-falling-injury-track',
    keyword: '적재물 돌출 낙하 사고',
    questionKeyword: '앞 화물차 적재물이 돌출돼 본인 차에 부딪쳤어요. 어떻게 청구하나요?',
    ctaKeyword: '적재물 낙하 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '적재물 돌출 낙하 사고 — 5단계 화물차 책임 다툼 | 로앤가이드',
      description:
        '앞 화물차 적재물이 돌출·낙하해 본인 차가 부상·파손됐다면 적재 의무·보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로에서 앞 화물차 적재물(철근)이 차량 후방으로 돌출돼 있었어요. 차선 변경 못하고 따라가다 화물차 급정거 시 본인 차 앞유리·범퍼가 적재물에 부딪쳐 부상. 화물차 운전자는 \\"결박은 다 했다\\"고 주장하지만, 도로교통법상 적재물 길이·표지 의무 위반이 의심됩니다.\\" 적재물 돌출·낙하 사고는 ① 도로교통법 39조: 적재 결박·길이 제한 의무 ② 화물차 운전자·운송회사 사용자 책임 ③ 자동차보험 적용(주행 중 사고는 자배법) ④ 적재물이 화물 자체 결함이면 제조사 책임 ⑤ 동승자·후행차 부상은 자배법 가지급금 5가지가 결합되는 영역. 화물차 운전자에 적재 결박·표지·서행 의무가 두텁게 평가되는 트랙. 대응은 ① 현장 자료 ② 적재 상태 ③ 보험 ④ 행정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 적재물 돌출·낙하 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·적재·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적재 결박·표지 의무</strong> — 도로교통법 39조·시행령.</li>\n<li><strong>② 화물차 운전자·운송회사 책임</strong> — 사용자 책임(민법 756조).</li>\n<li><strong>③ 자동차보험 청구</strong> — 주행 중 적재물 낙하는 자배법 운행 중 사고.</li>\n<li><strong>④ 화물 자체 결함</strong> — 제조물·발주처 책임 검토.</li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 적재물 낙하·돌출 사고는 화물차 운전자에 무거운 결박·표지·서행 의무가 평가되는 영역. 자배법 운행 중 사고로 차량 자동차보험에 청구 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·적재물 사진·결박 상태.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 화물차 자동차보험 청구</strong> — 책임보험·종합보험·자배법 가지급금.</li>\n<li><strong>4단계 — 운송회사 사용자 책임 청구 (민법 756조)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">적재물 낙하 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스 (전후방)</strong></li>\n<li><strong>화물차 적재물·결박 상태 사진</strong></li>\n<li><strong>고속도로 CCTV·교통사고사실확인원</strong></li>\n<li><strong>화물차 운행 일지·운송 계약서</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>차량 파손 사진·수리 견적</strong></li>\n<li><strong>화물차 자동차보험증서·운전자 면허</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 화물차 정차 시점에 적재 결박 상태를 사진으로 확보. 결박이 풀려 있거나 적재 길이가 초과되면 도로교통법 위반 입증의 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적재 결박 의무</strong> — 도로교통법 39조.</li>\n<li><strong>적재물 표지(빨간 천)</strong> — 화물 후미 1m 이상 돌출 시 의무.</li>\n<li><strong>운송회사 사용자 책임</strong> — 민법 756조.</li>\n<li><strong>본인 안전거리</strong> — 후행 차량 의무도 일부 평가.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 화물차 적재물 낙하와 운전자 책임',
        summary:
          '대법원 2009도2390(대법원, 2009.07.09 선고) 영역에서 법원은 화물차 적재함의 토마토 상자가 떨어지면서 지나가던 피해자에게 상해를 입힌 사안을 두고, 교통사고처리 특례법상 "교통"과 자동차손해배상보장법상 "운행"의 범위를 비교하면서 적재물 관리 과정에서 발생한 사고에 대한 운전자·관리자 책임을 평가할 수 있다고 본 사례 흐름이 있습니다. 적재 결박 상태·표지 부착 여부가 책임 분배의 주요 사정으로 평가될 수 있는 영역입니다.',
        takeaway: '적재물 낙하는 화물차 운전자·운송회사에 무거운 책임이 평가되는 영역. 결박·표지·길이 의무가 핵심 다툼 사정.',
      },
    ],
    faq: [
      {
        question: '화물차 운전자가 결박 다 했다고 주장해요',
        answer:
          '<strong>블랙박스·현장 사진과 결박 상태를 비교해 다투어질 수 있는 영역입니다.</strong> 적재 길이 초과·표지 미부착도 위반 사정.',
      },
      {
        question: '운송회사 책임도 청구할 수 있나요?',
        answer:
          '<strong>민법 756조 사용자 책임으로 운송회사에 직접 청구 가능합니다.</strong>',
      },
      {
        question: '본인 안전거리 미흡 사정이 있어요',
        answer:
          '<strong>일부 과실 분배 평가되지만 화물차 결박·표지 위반이 입증되면 비율이 가산되는 트랙입니다.</strong>',
      },
      {
        question: '치료비 우선 처리는요?',
        answer:
          '<strong>화물차 자동차보험에 자배법 가지급금 청구 가능합니다.</strong> 본인 실손보험·자기차량손해보험 병행.',
      },
      {
        question: '낙하물이 자국에 부딪힌 단독 사고 형태면요?',
        answer:
          '<strong>가해 차량 특정 시 자동차보험 청구, 미특정 시 정부보장사업(1644-0049)으로 보전 검토 가능합니다.</strong>',
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
