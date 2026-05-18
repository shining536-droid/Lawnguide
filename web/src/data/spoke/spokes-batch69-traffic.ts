import { SpokePage } from '../spoke-pages';

// batch69 traffic — 5개 (2026-05-19)
//
// 고유 존재 이유:
// 1. rear-end-chain-emergency-brake-fault-distribution — 3중 이상 추돌사고에서 선두차량의 급제동이 원인일 때 과실분배. 단순 후미 추돌(기존 트랙)과 분기 — 연쇄·급제동 트리거 트랙.
// 2. roundabout-entry-exit-yield-violation — 회전교차로(2010년대 후반 보급) 진입차량의 양보 위반 + 진출 차량 충돌 과실. 일반 교차로(기존 트랙)와 분기.
// 3. mountain-road-fallen-rock-state-liability — 단독 사고이지만 도로관리 하자(낙석방지망·표지판 부재)로 국가·지자체 배상 청구 트랙. 일반 단독사고와 분기.
// 4. electric-scooter-sidewalk-pedestrian-collision — pm-kickboard-insurance-coverage 와 분기 — 보험이 아닌 '인도 주행 자체의 위법성 + 보행자 측 입증 책임' 트랙.
// 5. shared-bicycle-rental-defect-liability — 따릉이·카카오바이크 등 공유 자전거 결함(브레이크·체인) 사고 시 운영사 책임 트랙. 일반 자전거 사고와 분기.

export const spokesBatch69Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-rear-end-chain-emergency-brake-fault-distribution-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-rear-end-chain-emergency-brake-fault-distribution-track',
    keyword: '추돌사고 급제동 연쇄 과실분배',
    questionKeyword: '선두차량 급제동으로 3중 추돌사고가 났어요. 가운데 본인 차량은 과실이 얼마나 잡히나요?',
    ctaKeyword: '연쇄추돌 과실분배 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연쇄 추돌 급제동 과실 — 5단계 분배 트랙 정리 | 로앤가이드',
      description:
        '선두차량의 급제동으로 3중 이상 연쇄 추돌사고가 발생해 가운데 본인 차량 과실이 30~40% 일률 적용되는 상황이라면, 안전거리·연쇄추돌 인정기준·분쟁조정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로 정체 구간 진입 직전, 본인은 시속 80km로 2차로를 정상 주행 중이었어요. 그런데 앞 차량 두 대 앞의 SUV가 갑자기 급제동을 하면서 바로 앞 승용차가 그 SUV를 추돌했고, 본인도 미처 정지하지 못해 앞 승용차를 추돌, 본인 뒤 트럭까지 본인 차량을 추돌하는 4중 연쇄사고가 발생했어요. 본인은 \\"선두 SUV 급제동이 원인\\"이라 주장하지만 보험사들은 \\"가운데 차량은 안전거리 미확보 과실 30~40%\\"를 일률 적용하려 합니다. 본인은 \\"왜 선두 책임은 안 보고 본인만 깎느냐\\"고 답답한 상황.\\" 연쇄 추돌사고는 ① 도로교통법 제19조: 안전거리 확보 ② 자배법·자동차보험 다중사고 분배 ③ 손해보험협회 과실비율 인정기준(연쇄추돌) ④ 선두차량 정당 사유(보행자·전방 장애물) ⑤ 민사 손해배상 5가지가 결합되는 영역. 후행차량 안전거리 미확보가 기본 평가이지만, 선두차량의 급제동이 \\"이유 없는 갑작스러운 급제동\\"이면 선두 과실도 함께 분배되는 트랙. 대응은 ① 현장 자료 ② 급제동 원인 ③ 보험 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 연쇄 추돌사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 안전거리·급제동 원인·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안전거리 확보 의무 (도로교통법 19조)</strong> — 후행차량 기본 주의의무.</li>\n<li><strong>② 선두 급제동 정당 사유</strong> — 보행자·동물·전방 장애물 여부.</li>\n<li><strong>③ 손해보험협회 연쇄추돌 인정기준</strong> — 가운데 차량 분배.</li>\n<li><strong>④ 자동차보험 대인배상Ⅰ·Ⅱ·자차 청구</strong></li>\n<li><strong>⑤ 분쟁조정·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가운데 차량은 안전거리 미확보가 기본 사정이지만 선두 차량의 급제동이 \\"이유 없는 갑작스러운 행위\\"로 평가되면 선두 과실도 함께 분배되는 영역. 블랙박스로 선두 급제동 직전 상황(브레이크등·전방 장애물 유무)이 보존되어 있는지가 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 본인·전후 차량 블랙박스·도로 CCTV·차량 위치·파손 부위 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 인명피해 시 필수)</strong></li>\n<li><strong>3단계 — 자동차보험 청구·과실비율 협의</strong> — 연쇄추돌 인정기준 적용.</li>\n<li><strong>4단계 — 손해보험협회 과실비율 분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연쇄 추돌 과실분배 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·블랙박스·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인·전후 차량 블랙박스 (가능한 모두 확보)</strong></li>\n<li><strong>도로 CCTV·고속도로공사 사고 자료</strong></li>\n<li><strong>차량 위치·파손 부위·연쇄 순서 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>차량 수리 견적·자동차보험증서</strong></li>\n<li><strong>선두 차량 급제동 원인 자료 (전방 장애물·보행자 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연쇄 추돌은 \\"누가 누구를 먼저 추돌했는가\\"의 순서가 핵심. 본인 블랙박스 외에 앞뒤 차량 블랙박스 영상을 보험사 통해 요청. 영상이 없으면 차량 파손 부위·범퍼 흔적으로 추돌 순서를 평가하는 트랙. 휴대폰 사진은 시간·위치 메타데이터가 결정 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>안전거리 확보 여부</strong> — 도로교통법 19조 기본 주의의무.</li>\n<li><strong>선두 급제동 정당 사유</strong> — 보행자·장애물·전방 사고 평가.</li>\n<li><strong>연쇄 추돌 순서 입증</strong> — 블랙박스·CCTV·파손 부위.</li>\n<li><strong>가운데 차량 분배 비율</strong> — 손보협 인정기준.</li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 빗길 선행차량과 후행차량의 안전거리 주의의무',
        summary:
          '대법원 89도777(대법원, 1990.02.27 선고) 영역에서 법원은 빗물로 노면이 미끄러운 고속도로에서 진행 전방 차량이 빗길에 미끄러져 비정상적으로 움직이고 있다면 앞으로의 진로를 예상할 수 없으므로 후방 차량 운전자는 이러한 사태에 대비하여 속도를 줄이고 안전거리를 확보해야 할 주의의무가 있다고 본 사례 흐름이 있습니다. 연쇄 추돌사고에서도 후행차량은 선두의 급제동·이상 동작에 대비할 의무가 있어 안전거리 미확보 과실이 기본 평가되지만, 선두의 급제동 원인이 함께 분배 사정으로 검토되는 영역입니다.',
        takeaway: '연쇄 추돌은 후행 안전거리 미확보가 기본 사정이지만 선두 급제동 원인도 함께 분배 평가되는 트랙. 블랙박스·도로 상황 자료가 결정 자료.',
      },
    ],
    faq: [
      {
        question: '가운데 끼인 본인이 가장 억울한데 왜 과실이 잡히나요?',
        answer:
          '<strong>도로교통법 19조 안전거리 확보 의무가 기본 주의의무이기 때문입니다.</strong> 다만 선두 급제동 정당 사유 부재 시 분배가 평가되는 영역.',
      },
      {
        question: '선두 차량이 갑자기 멈춘 이유가 없으면요?',
        answer:
          '<strong>이유 없는 갑작스러운 급제동은 선두 과실 사정으로 평가되는 트랙입니다.</strong> 블랙박스로 전방 장애물·보행자 부재 입증이 결정 자료.',
      },
      {
        question: '연쇄 추돌 과실비율은 보통 어떻게 잡히나요?',
        answer:
          '<strong>가운데 차량 30~40%, 후행 차량 60~70% 영역에서 평가되는 사례 흐름이 있습니다.</strong> 선두 급제동 원인에 따라 선두 10~20% 분배 가능.',
      },
      {
        question: '본인 뒤 트럭이 본인을 들이받은 부분은요?',
        answer:
          '<strong>본인의 후방 손해는 뒤 트럭 자동차보험 대인배상Ⅰ·Ⅱ로 별도 청구되는 영역입니다.</strong> 다중사고는 차량별 분리 평가.',
      },
      {
        question: '분쟁조정 안 되면 어떻게 하나요?',
        answer:
          '<strong>금감원 1332 또는 민사 손해배상 청구로 진행될 수 있는 영역입니다.</strong> 3년 시효 내.',
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

  // ─── 2. traffic-accident-roundabout-entry-exit-yield-violation-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-roundabout-entry-exit-yield-violation-track',
    keyword: '회전교차로 진입·진출 양보 위반',
    questionKeyword: '회전교차로 안을 돌고 있었는데 진입하던 차량과 충돌했어요. 진입 차량 과실 아닌가요?',
    ctaKeyword: '회전교차로 과실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회전교차로 진입·진출 충돌 — 5단계 양보위반 트랙 | 로앤가이드',
      description:
        '회전교차로 진입 차량의 양보 위반과 회전 중 본인 차량 충돌로 과실 40%가 잡혀 답답하다면, 도로교통법 25조의2 통행우선·과실비율 인정기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동네에 새로 생긴 회전교차로(2차로)를 시속 약 25km로 회전 주행 중이었어요. 본인이 외측 차로에서 진출 방향(11시 방향)으로 빠지려는 순간, 우측 진입로에서 \\"먼저 들어와도 되겠지\\"라고 판단한 SUV가 양보하지 않고 그대로 진입하면서 본인 차량 측면을 충돌했어요. 본인 어깨 인대 손상 + 차량 도어 함몰. 본인은 \\"회전 중인 차량이 우선\\"이라 주장하지만 SUV 측은 \\"본인이 진출 방향지시등을 안 켰다\\"며 본인 과실 40%를 주장합니다.\\" 회전교차로 사고는 ① 도로교통법 제25조의2: 회전교차로 통행 방법(2017.6.3 시행) ② 회전차량 우선·진입차량 양보 의무 ③ 진출 시 방향지시등·차로 변경 ④ 손해보험협회 과실비율 인정기준 ⑤ 분쟁조정·민사 5가지가 결합되는 영역. 회전 중 차량이 우선이라는 원칙이 평가되는 트랙이지만 진출 방향지시등·내·외측 차로 사정도 분배 평가되는 영역. 대응은 ① 현장 ② 통행 우선 ③ 보험 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 회전교차로 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통행 우선·양보·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 회전차량 우선 (도로교통법 25조의2)</strong> — 진입차량 양보 의무.</li>\n<li><strong>② 진출 방향지시등·차로 변경</strong> — 본인 사정 평가.</li>\n<li><strong>③ 내·외측 차로 분리</strong> — 2차로 회전교차로 평가.</li>\n<li><strong>④ 손해보험협회 회전교차로 인정기준</strong></li>\n<li><strong>⑤ 분쟁조정·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회전교차로는 회전 중 차량이 우선이고 진입 차량이 양보해야 하는 영역. 다만 본인의 진출 방향지시등 미점등·외측 차로에서 직진 행위 등은 분배 사정으로 평가되는 트랙. 블랙박스에 회전 진입·회전 중 상황·방향지시등이 보존되어 있는지가 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·교차로 CCTV·진입로 표지·방향지시등.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 자동차보험 청구·과실비율 협의</strong> — 회전교차로 인정기준 적용.</li>\n<li><strong>4단계 — 손해보험협회 과실비율 분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회전교차로 양보 위반 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·차량·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (전방·후방)</strong></li>\n<li><strong>교차로 CCTV·진입로 표지판 사진</strong></li>\n<li><strong>회전교차로 노면 표시·차로 표시 사진</strong></li>\n<li><strong>차량 충돌 각도·파손 부위 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>본인 자동차보험증서·차량 수리 견적</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회전교차로는 \\"누가 먼저 회전 중이었는가\\"가 결정 사정. 블랙박스에 회전 진입 시점·진입 차량 양보 여부·본인 방향지시등이 모두 보존되어야 분배 평가 트랙. 진출 직전 방향지시등 점등이 의무는 아니지만 미점등은 분배 사정으로 평가될 수 있는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>회전 중 차량 우선·진입차량 양보</strong> — 도로교통법 25조의2.</li>\n<li><strong>진출 방향지시등 미점등</strong> — 도로교통법 38조.</li>\n<li><strong>내·외측 차로 변경</strong> — 2차로 회전교차로 평가.</li>\n<li><strong>속도·전방 주시</strong> — 일반 주의의무.</li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 교통정리 없는 교차로의 통행우선권',
        summary:
          '대법원 94도1442(대법원, 1994.12.13 선고) 영역에서 법원은 교통정리가 행하여지지 아니하는 교차로에서 폭이 좁은 도로로부터 선진입한 승용차와 폭이 넓은 도로로부터 후진입한 오토바이가 충돌한 경우 양자의 과실을 모두 인정하면서, 시간적으로 교차로에 먼저 도착하여 진입할 수 있다고 하더라도 폭이 넓은 도로에서 진입하려는 차에 우선하여 통행할 수는 없다고 본 사례 흐름이 있습니다. 회전교차로도 \\"회전 중 차량 우선·진입 차량 양보\\"라는 유사 법리가 적용되는 영역으로 진입 차량의 양보 위반이 핵심 사정으로 평가되는 트랙입니다.',
        takeaway: '회전교차로는 회전 중 차량이 우선·진입 차량이 양보해야 하는 트랙. 진입 차량 양보 위반이 핵심 사정.',
      },
    ],
    faq: [
      {
        question: '회전 중 차량이 무조건 우선인가요?',
        answer:
          '<strong>도로교통법 25조의2에 따라 회전 중 차량이 우선이고 진입 차량이 양보해야 하는 영역입니다.</strong> 다만 본인 과속·차로 위반은 분배 사정.',
      },
      {
        question: '본인이 방향지시등을 안 켰으면 본인 과실이 잡히나요?',
        answer:
          '<strong>진출 직전 방향지시등 미점등은 분배 사정으로 평가되는 영역입니다.</strong> 다만 진입 차량 양보 위반이 더 큰 사정으로 평가되는 트랙.',
      },
      {
        question: '2차로 회전교차로에서 차로 위반이면요?',
        answer:
          '<strong>외측 차로에서 회전·내측 차로에서 진출이 규정 위반이라 분배 사정으로 평가되는 영역입니다.</strong> 노면 표시 사진이 결정 자료.',
      },
      {
        question: '회전교차로는 일반 교차로와 어떻게 다른가요?',
        answer:
          '<strong>도로교통법 25조의2가 별도 규정으로 회전 차량 우선·진입 차량 양보를 정하고 있는 영역입니다.</strong> 일반 교차로(폭·선진입 우선)와 평가 기준이 분기.',
      },
      {
        question: '과실비율이 보통 어떻게 잡히나요?',
        answer:
          '<strong>진입 차량 70~80%, 회전 차량 20~30% 영역에서 평가되는 사례 흐름이 있습니다.</strong> 본인 사정에 따라 10~20% 분배 가감.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '회전교차로 과실', href: '/guide/traffic-accident/traffic-accident-roundabout-fault-standard' },
    ],
  },

  // ─── 3. traffic-accident-mountain-road-fallen-rock-state-liability-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-mountain-road-fallen-rock-state-liability-track',
    keyword: '산악도로 낙석 사고 국가배상',
    questionKeyword: '산길 운전 중 낙석이 떨어져 차량이 파손되고 본인이 다쳤어요. 국가나 지자체에 청구할 수 있나요?',
    ctaKeyword: '낙석 국가배상 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '산악도로 낙석 사고 — 5단계 국가배상 청구 트랙 | 로앤가이드',
      description:
        '산악 국도·지방도 운전 중 낙석으로 차량이 파손되고 본인이 부상을 입은 상황이라면, 국가배상법 5조 영조물 하자·도로관리자 책임·청구 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"휴가차 강원도 산악 국도를 운전 중이었어요. 굽이진 내리막 구간에서 약 30cm 크기의 돌이 산비탈에서 굴러떨어져 본인 차량 본넷을 강타, 앞유리가 깨지고 본인은 유리 파편으로 얼굴을 베이는 상해를 입었어요. 사고 지점 인근에는 \\"낙석 주의\\" 표지판도 없었고, 산비탈 쪽 낙석방지망도 설치되어 있지 않은 상태였어요. 보험사는 \\"자연재해성 단독 사고라 자차 자기부담금 외에는 보장이 어렵다\\"고 안내합니다. 본인은 \\"도로 관리 책임은 누가 지느냐\\"가 가장 막막한 상황.\\" 산악도로 낙석 사고는 ① 국가배상법 제5조: 영조물(도로)의 설치·관리 하자 ② 도로법·국토교통부령 도로관리자 의무(낙석방지·표지·점검) ③ 자동차보험 자차·자손 적용 ④ 한국도로공사·지자체 책임 분리 ⑤ 민사 손해배상(5년 시효) 5가지가 결합되는 영역. 도로 관리상 하자가 평가되면 국가·지자체 배상이 검토되는 트랙. 대응은 ① 현장 ② 관리 하자 ③ 보험 ④ 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 산악도로 낙석 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 영조물 하자·관리자·보험·청구·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 국가배상법 5조 영조물 하자</strong> — 도로 설치·관리 하자.</li>\n<li><strong>② 도로 관리자 (한국도로공사·국토부·지자체)</strong></li>\n<li><strong>③ 낙석방지망·표지·점검 의무</strong> — 도로법 평가.</li>\n<li><strong>④ 자동차보험 자차·자손·실손 청구</strong></li>\n<li><strong>⑤ 민사 손해배상 (국가배상 5년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 낙석 사고는 단독 사고이지만 도로 관리상 하자(낙석방지망·주의표지 부재·정기 점검 부실)가 평가되면 국가·지자체 배상이 검토되는 영역. 사고 직후 산비탈·도로 표지·인접 도로 관리 상태 사진이 결정 자료. 평소 낙석 잦은 구간이면 도로 관리자 보고 자료도 함께 확보.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 낙석 위치·크기·산비탈 상태·도로 표지 부재 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 자동차보험 자차·자손 청구·실손 활용</strong></li>\n<li><strong>4단계 — 도로 관리자 확인·국가배상 신청 (배상심의회)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (국가배상 5년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">낙석 국가배상 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·도로·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>낙석 위치·크기·산비탈 상태 사진 (즉시 촬영)</strong></li>\n<li><strong>도로 주의 표지·낙석방지망 부재 사진</strong></li>\n<li><strong>본인 차량 블랙박스 (낙석 순간 영상)</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>차량 수리·전손 견적·자동차보험증서</strong></li>\n<li><strong>도로 관리자 정보 (국도·지방도·고속도로 구분)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 도로 관리자는 도로 종류에 따라 분리 — 고속도로는 한국도로공사, 국도는 국토부 지방국토관리청, 지방도는 광역지자체, 시·군도는 기초지자체. 사고 지점 도로 종류와 관리자 확인이 결정 자료. 국가배상 청구는 관할 배상심의회·민사 선택 가능 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>영조물 하자 인정 범위</strong> — 통상 갖춰야 할 안전성.</li>\n<li><strong>낙석방지망·표지 부재</strong> — 관리 의무 위반 평가.</li>\n<li><strong>예측 가능성·회피 가능성</strong> — 자연력 사정.</li>\n<li><strong>도로 관리자 책임 분리</strong> — 국가·지자체·도로공사.</li>\n<li><strong>국가배상 5년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국가배상심의회 (법무부·지방검찰청)</strong></li>\n<li><strong>한국도로공사 1588-2504 (고속도로)</strong></li>\n<li><strong>국민권익위원회 1398</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 국가배상법상 다른 법령에 의한 보상',
        summary:
          '대법원 2017다16174(대법원, 2019.05.30 선고) 영역에서 법원은 국가배상법 제2조 제1항 단서에서 정한 \\"다른 법령의 규정\\"에 따른 보상의 의미와 적용 범위를 평가하면서, 국가배상 청구권의 인정 범위를 정함에 있어 법령상 보상 체계가 갖춰져 있는지를 종합 고려해야 한다고 본 사례 흐름이 있습니다. 산악도로 낙석 사고에서도 도로 관리상 하자(낙석방지망·주의표지 부재 등)가 영조물 설치·관리 하자로 평가되면 국가배상법 제5조에 따라 국가·지자체 배상이 검토되는 영역입니다.',
        takeaway: '도로 관리상 하자가 평가되면 국가배상법 5조에 따라 국가·지자체 배상이 검토되는 트랙. 관리자 의무 위반 자료가 결정 사정.',
      },
    ],
    faq: [
      {
        question: '낙석은 자연재해 아닌가요? 국가 책임이 되나요?',
        answer:
          '<strong>도로 관리상 하자(낙석방지망·표지 부재)가 평가되면 국가배상법 5조 영조물 하자로 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '도로 관리자가 누구인지 어떻게 확인하나요?',
        answer:
          '<strong>고속도로는 한국도로공사, 국도는 국토부 지방국토관리청, 지방도·시군도는 광역·기초지자체로 분리되는 영역입니다.</strong>',
      },
      {
        question: '국가배상 청구는 어디에 하나요?',
        answer:
          '<strong>관할 검찰청 배상심의회 신청 또는 민사 손해배상 청구 선택이 가능한 영역입니다.</strong> 국가배상 시효 5년.',
      },
      {
        question: '본인 자동차보험으로도 보장되나요?',
        answer:
          '<strong>자차담보·자손보험·실손보험으로 일부 보장되는 트랙입니다.</strong> 국가배상과 중복 시 안분 평가.',
      },
      {
        question: '평소 낙석이 잦은 곳이면 더 인정되나요?',
        answer:
          '<strong>예측 가능성·회피 가능성이 인정되면 도로 관리자 의무 위반 평가가 강화되는 영역입니다.</strong> 과거 낙석 신고 기록이 결정 자료.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
      { label: '도로 낙하물', href: '/guide/traffic-accident/traffic-accident-road-debris-fallen-object-liability' },
    ],
  },

  // ─── 4. traffic-accident-electric-scooter-sidewalk-pedestrian-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-electric-scooter-sidewalk-pedestrian-collision-track',
    keyword: '전동킥보드 인도 주행 보행자 충돌',
    questionKeyword: '전동킥보드가 인도로 달려와 본인을 치고 갔어요. 보행자가 입증할 게 너무 많은 것 같은데요.',
    ctaKeyword: '인도 킥보드 보행자 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전동킥보드 인도 보행자 충돌 — 5단계 위법성 트랙 | 로앤가이드',
      description:
        '인도로 달려온 전동킥보드에 부딪혀 부상을 입었는데 보행자 본인이 모든 걸 입증해야 할 것 같다면, 도로교통법 13조 인도 통행 금지·입증·보험 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"점심 시간 본인이 회사 근처 인도를 걷고 있는데, 뒤에서 시속 20km대로 달려온 공유 전동킥보드가 본인 왼쪽 발목을 측면 충돌하면서 본인이 도로에 넘어졌어요. 발목 인대 부분 파열 + 손목 타박 6주 진단. 킥보드 운전자는 \\"미안하다\\"고 말하고 신원·연락처를 알려주긴 했지만, 보험은 따로 가입한 게 없다고 합니다. 본인은 \\"인도에서 일어난 사고인데 왜 보행자가 모든 걸 입증해야 하나\\"가 가장 막막한 상황.\\" 전동킥보드 인도 주행 보행자 충돌은 ① 도로교통법 제13조 2항: 인도 통행 금지(자전거 등 포함) ② 도로교통법 50조: 안전모·면허·승차 인원 위반 ③ 형법 268조 업무상과실치상 ④ 보행자 측 입증 책임·과실 평가 ⑤ 자동차보험 무보험차 특약·일상생활배상·민사 5가지가 결합되는 영역. 인도 주행 자체가 위법이라 운전자 책임이 무거운 영역. 다만 보행자도 진행 방향·예측 가능성 등 일부 평가될 수 있는 트랙. 대응은 ① 현장 ② 위법성 ③ 보험 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 인도 킥보드 보행자 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 위법성·입증·보험·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 인도 주행 위법 (도로교통법 13조 2항)</strong> — 운전자 책임 가중.</li>\n<li><strong>② 안전모·면허·승차 위반</strong> — 도로교통법 50조.</li>\n<li><strong>③ 보행자 입증 자료</strong> — CCTV·블랙박스·목격자.</li>\n<li><strong>④ 운전자 자동차보험·일상생활배상·PM 의무보험</strong></li>\n<li><strong>⑤ 형사(업무상과실치상)·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전동킥보드 인도 주행은 도로교통법 위반이라 운전자 책임이 무겁게 평가되는 영역. 보행자에게 직접 입증 부담이 일부 있지만 인도 사고는 \\"인도 보행자 우선\\" 법리로 평가되어 운전자 과실이 큰 비중으로 분배되는 트랙. 보행자가 챙길 자료는 CCTV·주변 목격자·운전자 신원 + 보험 정보가 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 사고 위치·인도 표시·CCTV 위치·운전자 신원·차량(PM) 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 인사사고는 필수)</strong></li>\n<li><strong>3단계 — 운전자 자동차보험·일상생활배상·PM 의무보험 확인</strong></li>\n<li><strong>4단계 — 본인 자동차보험 무보험차 특약·실손보험 활용</strong></li>\n<li><strong>5단계 — 형사 고소·민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">인도 킥보드 보행자 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>사고 위치 사진 (인도 표시·노면)</strong></li>\n<li><strong>주변 CCTV (편의점·건물·차량 블랙박스)</strong></li>\n<li><strong>운전자 신원·연락처·보험 정보</strong></li>\n<li><strong>PM 차량 사진·공유업체 정보</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증·물리치료 기록</strong></li>\n<li><strong>본인 자동차보험·일상생활배상·실손보험증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인도 사고는 보행자가 직접 챙겨야 할 자료가 많은 영역. 사고 직후 운전자 신원·보험 정보를 종이에 받고 본인 휴대폰으로 사진까지 확보. 주변 가게·차량 블랙박스는 24~72시간 안에 보존 요청해야 영상이 남아 있는 경우가 많아 \\"즉시 챙기기\\"가 결정 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>인도 통행 위법성</strong> — 도로교통법 13조 2항.</li>\n<li><strong>보행자 입증 책임</strong> — CCTV·목격자·블랙박스.</li>\n<li><strong>운전자 안전모·면허·승차 위반</strong></li>\n<li><strong>업무상과실치상·합의·반의사불벌</strong></li>\n<li><strong>3년 시효·실손보험 보조</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112·교통사고 접수</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보행자 보호의무와 운전자 주의의무',
        summary:
          '대법원 2020도8675(대법원, 2020.12.24 선고) 영역에서 법원은 횡단보행자용 신호기가 설치되지 않은 횡단보도를 횡단하는 보행자가 있을 경우 차의 운전자는 그대로 진행하더라도 보행자의 횡단을 방해하지 않거나 통행에 위험을 초래하지 않을 경우를 제외하고는 일시정지 등의 조치를 취하여 보행자의 통행이 방해되지 않도록 할 의무가 있다고 본 사례 흐름이 있습니다. 인도는 본래 보행자 전용 영역으로 자전거·전동킥보드(개인형 이동장치) 등 차마의 통행이 원칙 금지되는 트랙. 인도 주행 운전자의 책임이 무겁게 평가되는 영역입니다.',
        takeaway: '인도는 보행자 우선 영역. 차마(킥보드 포함) 인도 주행 자체가 위법으로 평가되는 트랙. 운전자 책임 가중 사정.',
      },
    ],
    faq: [
      {
        question: '보행자인데 본인이 어떻게 입증하나요?',
        answer:
          '<strong>주변 CCTV·차량 블랙박스·목격자 연락처를 사고 직후 챙기는 게 가장 결정 자료입니다.</strong> 72시간 안에 보존 요청.',
      },
      {
        question: '운전자가 보험이 없다면요?',
        answer:
          '<strong>본인 자동차보험 무보험차 상해 특약·일상생활배상·실손보험을 보조 청구할 수 있는 영역입니다.</strong> PM 의무보험(2024.3.27~) 여부도 확인.',
      },
      {
        question: '인도 주행이면 운전자 과실이 100% 인가요?',
        answer:
          '<strong>인도 주행 자체가 위법이라 운전자 책임이 가중되지만 본인 진행 방향·예측 가능성 등 일부 분배될 수 있는 영역입니다.</strong>',
      },
      {
        question: '운전자가 미성년자면요?',
        answer:
          '<strong>법정대리인(부모) 감독 책임이 함께 평가되는 영역입니다.</strong> 만 13세 미만 PM 운전은 보호자 책임이 가중 사정.',
      },
      {
        question: '형사 처벌도 가능한가요?',
        answer:
          '<strong>형법 268조 업무상과실치상으로 처벌될 수 있는 영역입니다.</strong> 합의 시 반의사불벌·감경 사정.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
      { label: '킥보드 보행자', href: '/guide/traffic-accident/traffic-accident-electric-kickboard-pedestrian' },
    ],
  },

  // ─── 5. traffic-accident-shared-bicycle-rental-defect-liability-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-shared-bicycle-rental-defect-liability-track',
    keyword: '공유 자전거 결함 사고',
    questionKeyword: '따릉이를 타다가 브레이크가 갑자기 안 잡혀서 넘어졌어요. 운영사 책임이 되나요?',
    ctaKeyword: '공유자전거 결함 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공유 자전거 결함 사고 — 5단계 운영사 책임 트랙 | 로앤가이드',
      description:
        '따릉이·카카오바이크 등 공유 자전거 브레이크·체인 결함으로 넘어져 부상을 입었는데 약관상 이용자 책임이라 안내받았다면, 운영사 공작물 책임·약관 무효 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길 따릉이를 빌려 자전거도로를 시속 약 15km로 주행 중이었어요. 내리막 구간에서 감속하려고 브레이크 레버를 잡았는데, 뒷브레이크가 \\"끼익\\" 소리만 나고 전혀 잡히지 않았어요. 결국 앞 보행자를 피하려다가 측면 화단에 충돌, 무릎·팔꿈치 찰과상 + 손목 골절 6주 진단을 받았어요. 운영사 앱 신고 채널로 결함을 제보했더니 \\"이용 약관상 이용자 본인 책임\\"이라는 안내만 받았고, 본인은 \\"명백한 정비 불량인데 왜 본인이 다 부담해야 하느냐\\"가 가장 답답한 상황.\\" 공유 자전거 결함 사고는 ① 민법 758조: 공작물 점유자·소유자 책임 ② 약관 규제법: 면책 조항 효력 ③ 자배법 자동차 외 차량 책임(자전거 비포함) ④ 본인 일상생활배상·실손보험 ⑤ 민사 손해배상(3년 시효) 5가지가 결합되는 영역. 자전거는 자동차가 아니라 자배법 적용 외이지만, 운영사의 정비·관리 의무 위반이 평가되면 민법 758조 공작물 책임이 평가되는 트랙. 약관상 일률 면책은 약관 규제법 검토 영역. 대응은 ① 현장 ② 결함 입증 ③ 보험 ④ 약관 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공유 자전거 결함 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결함·약관·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결함 입증</strong> — 브레이크·체인·타이어 상태 사진.</li>\n<li><strong>② 운영사 약관·면책 조항 (약관 규제법)</strong></li>\n<li><strong>③ 운영사 영업배상·생산물책임보험 확인</strong></li>\n<li><strong>④ 본인 일상생활배상·실손보험 보조</strong></li>\n<li><strong>⑤ 민법 758조 공작물 책임·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거 자체는 자배법 외 영역이지만 운영사의 정비·점검 의무 위반이 평가되면 민법 758조 공작물 점유자·소유자 책임으로 평가되는 트랙. 약관에 \\"이용자 전적 책임\\" 일률 면책 조항이 있어도 약관 규제법상 무효로 평가될 수 있는 영역. 사고 직후 자전거 상태 사진·운영사 신고 기록이 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 자전거 결함 부위(브레이크·체인) 사진·앱 이용 내역·사고 위치.</li>\n<li><strong>2단계 — 운영사 앱·고객센터 신고 + 경찰 신고·교통사고사실확인원</strong></li>\n<li><strong>3단계 — 운영사 영업배상·생산물책임보험 청구 검토</strong></li>\n<li><strong>4단계 — 본인 일상생활배상·실손보험 활용·소비자원 분쟁조정 (1372)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (민법 758조, 3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공유 자전거 결함 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·결함·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>자전거 결함 부위 사진 (브레이크·체인·타이어)</strong></li>\n<li><strong>공유 앱 이용 내역·반납 기록</strong></li>\n<li><strong>사고 위치·노면·자전거도로 사진</strong></li>\n<li><strong>운영사 신고 접수번호·약관 사본</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>본인 일상생활배상·실손보험증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결함 자전거 자체를 그 자리에서 사진·동영상으로 기록하고, 가능하면 운영사 회수 전에 자전거 일련번호도 함께 기록. 회수 후에는 정비 이력 확인이 어려워 결정 자료가 사라지는 트랙. 운영사 정기 점검 주기·반납 시 결함 신고 통계 등도 분쟁조정 자료로 활용.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>결함 자체 입증</strong> — 사고 직후 사진·일련번호.</li>\n<li><strong>약관 면책 효력</strong> — 약관 규제법 검토.</li>\n<li><strong>운영사 정비·점검 의무</strong> — 민법 758조 공작물.</li>\n<li><strong>본인 안전 운행</strong> — 안전모·속도·도로 분리.</li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372 (소비자 분쟁조정)</strong></li>\n<li><strong>공정거래위원회 1670-4847 (약관)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자전거도로 운전자의 주의의무와 책임',
        summary:
          '울산지법 2019고단1124(울산지법, 2019.08.14 선고) 영역에서 법원은 자전거도로도 도로교통법상 \\"도로\\"의 개념에 포함되며, 자전거 운전자도 도로교통법상 차로·차선·병렬주행 금지 규정의 적용을 받는다고 본 사례 흐름이 있습니다. 공유 자전거 결함 사고에서도 자전거 자체의 안전성 확보 의무는 운영사에 있고, 결함으로 인한 사고는 민법 758조 공작물 점유자·소유자 책임으로 평가될 수 있는 영역입니다. 약관상 면책 조항도 결함과 정비 의무 위반이 명백하면 약관 규제법상 효력이 다투어지는 트랙입니다.',
        takeaway: '자전거도 도로교통법 적용 차량으로 평가되고 공유 자전거 결함은 운영사 공작물 책임 트랙. 정비 의무 위반·약관 무효 검토 사정.',
      },
    ],
    faq: [
      {
        question: '약관에 "이용자 책임"이라고 적혀 있으면 끝인가요?',
        answer:
          '<strong>약관 규제법상 일률 면책 조항은 무효로 평가될 수 있는 영역입니다.</strong> 운영사 정비 의무 위반이 명백하면 효력 다툼.',
      },
      {
        question: '결함을 어떻게 입증하나요?',
        answer:
          '<strong>사고 직후 자전거 결함 부위 사진·일련번호·운영사 신고 기록이 결정 자료입니다.</strong> 회수 전에 확보가 핵심.',
      },
      {
        question: '자전거는 자배법 적용이 안 된다던데요?',
        answer:
          '<strong>자전거는 자동차가 아니라 자배법 외 영역입니다.</strong> 다만 민법 758조 공작물 책임·약관·소비자원 분쟁조정으로 진행 가능.',
      },
      {
        question: '본인 일상생활배상으로 치료비가 되나요?',
        answer:
          '<strong>약관에 자전거 사고가 포함된 경우 보조 청구되는 트랙입니다.</strong> 실손보험도 함께 활용.',
      },
      {
        question: '소비자원에 분쟁조정 신청해도 되나요?',
        answer:
          '<strong>한국소비자원 1372에 결함 제품 분쟁조정 신청 가능한 영역입니다.</strong> 60일 내 처리 일반.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
      { label: '자전거 보상', href: '/guide/traffic-accident/traffic-accident-bicycle-compensation' },
    ],
  },
];
