import { SpokePage } from '../spoke-pages';

// batch70 traffic — 5개 (2026-05-20)
//
// 고유 존재 이유:
// 1. unprotected-left-turn-straight-collision-fault-track — 비보호좌회전 차량과 직진차량 충돌에서 직진 우선 vs 비보호 좌회전 의무 다툼. 기존 intersection-left-turn(좌회전 자체 일반)·protected-left-rear-end(보호좌회전 후미 추돌)와 분기 — 비보호+직진 만남 트랙.
// 2. jaywalking-fatal-pedestrian-accused-criminal-civil-track — 무단횡단 보행자 사망 사건에서 운전자(피고)의 형사·민사 방어 트랙. 기존 night-no-light-pedestrian·pedestrian-jaywalk 류는 피해자 시점 — 가해자 시점 분기.
// 3. traffic-signal-yellow-light-intersection-entry-fault-track — 황색신호 교차로 진입 충돌에서 정지 의무·신호위반 평가 다툼. 기존 signal-violation-criminal-impact(처벌 일반)·signal-violation-fault-negotiation(과실 협상)과 분기 — 황색 진입 시점 판단 트랙.
// 4. kindergarten-school-bus-child-alighting-injury-track — 어린이집·유치원 통학차량 하차 직후 보행 어린이 사고 트랙. 기존 school-bus-stop-violation-track(정차차량 추월 위반)·child-zone-12-major-criminal-insurance-block(스쿨존 12대 중과실)과 분기 — 하차 직후 동선 트랙.
// 5. delivery-rider-platform-employment-status-injury-track — 배달 라이더 사고에서 플랫폼(쿠팡이츠·배민 등)의 사용자 책임·근로자성 다툼 트랙. 기존 delivery-rider-workers-comp(산재 가입)와 분기 — 플랫폼 직접 손해배상·운행자성 트랙.

export const spokesBatch70Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-unprotected-left-turn-straight-collision-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-unprotected-left-turn-straight-collision-fault-track',
    keyword: '비보호좌회전 직진차 충돌 과실',
    questionKeyword: '비보호좌회전으로 진입하던 상대 차량과 직진하던 본인 차량이 충돌했어요. 본인 과실이 30%나 잡힌다는데요?',
    ctaKeyword: '비보호좌회전 과실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비보호좌회전 직진차 충돌 — 5단계 과실 다툼 트랙 | 로앤가이드',
      description:
        '비보호좌회전 차량과 직진 본인 차량 충돌에서 직진 우선 원칙에도 본인 과실 20~30%가 일률 적용되는 상황이라면, 도로교통법·신호 우선·과실비율 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길 시내 사거리에서 본인은 녹색 직진 신호로 시속 약 50km로 직진 중이었어요. 그런데 맞은편에서 \\"비보호좌회전\\" 표지 아래 좌회전을 시도하던 SUV가 본인 차량 앞을 가로지르면서 측면 충돌이 발생했어요. 본인은 \\"녹색 직진 신호인 본인이 우선이고 비보호좌회전 차량이 양보했어야 한다\\"고 주장하지만, 보험사는 \\"직진 차량도 일정한 주의의무가 있다며 본인 과실 20~30%\\"를 일률 적용하려 합니다. 본인은 \\"녹색 신호로 직진했는데 왜 본인 과실이 잡히느냐\\"가 가장 답답한 상황.\\" 비보호좌회전 사고는 ① 도로교통법 제5조: 신호 준수 의무 ② 도로교통법 제25조: 좌회전 양보 의무 ③ 비보호좌회전 표지의 의미(직진 우선·반대 진행 차량 양보) ④ 손해보험협회 과실비율 인정기준 ⑤ 분쟁조정·민사 5가지가 결합되는 영역. 비보호좌회전은 직진 차량에 양보해야 하는 것이 원칙이고 좌회전 차량 과실이 큰 비중으로 평가되는 트랙이지만, 직진 차량의 과속·전방 주시 의무 위반이 있으면 분배 평가되는 영역입니다. 대응은 ① 현장 ② 신호 ③ 보험 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 비보호좌회전 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신호·우선·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신호 준수 (도로교통법 5조)</strong> — 본인 녹색 직진 신호 확인.</li>\n<li><strong>② 좌회전 양보 의무 (도로교통법 25조)</strong> — 비보호좌회전 차량 의무.</li>\n<li><strong>③ 비보호좌회전 표지의 의미</strong> — 직진 우선·맞은편 차량 양보 후 좌회전.</li>\n<li><strong>④ 손해보험협회 과실비율 인정기준</strong></li>\n<li><strong>⑤ 분쟁조정·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비보호좌회전은 \\"녹색 신호 시 맞은편 직진 차량이 없을 때만 좌회전 가능\\"이라는 의미. 직진 차량이 신호를 지키고 정상 속도로 주행했다면 비보호좌회전 차량 과실이 크게 평가되는 영역. 다만 직진 차량의 과속(제한속도 +10km 이상)·전방 주시 의무 위반이 있으면 본인 과실 10~20% 분배 사정. 블랙박스·신호 영상·속도 자료가 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 본인 블랙박스·교차로 CCTV·신호등 위치·비보호 표지·충돌 부위 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 인명피해 시 필수)</strong></li>\n<li><strong>3단계 — 자동차보험 청구·과실비율 협의</strong> — 비보호좌회전 인정기준 적용.</li>\n<li><strong>4단계 — 손해보험협회 과실비율 분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">비보호좌회전 과실분배 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·블랙박스·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (전방·후방, 신호 보존 필수)</strong></li>\n<li><strong>교차로 CCTV·신호등 위치 사진</strong></li>\n<li><strong>비보호좌회전 표지·노면 표시 사진</strong></li>\n<li><strong>차량 충돌 부위·각도 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>본인 자동차보험증서·차량 수리 견적</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블랙박스 영상에 \\"본인 차량 진입 직전 신호등 색상\\"이 분명히 보존되어야 결정 자료. 야간·역광에서 신호등 색상 식별이 어려우면 인근 차량 블랙박스도 함께 보존 요청. 본인 차량 속도(블랙박스 GPS·속도계 또는 EDR)도 \\"과속 사정 부재\\" 입증 자료로 활용되는 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>본인 신호 준수 (녹색 직진)</strong> — 신호 위반 여부.</li>\n<li><strong>비보호좌회전 차량 양보 위반</strong> — 도로교통법 25조.</li>\n<li><strong>본인 과속·전방 주시</strong> — 분배 사정 평가.</li>\n<li><strong>야간·시야 사정</strong> — 가시거리 평가.</li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 비보호좌회전 표시 없는 교차로의 좌회전·유턴 허용 여부',
        summary:
          '대법원 2004도5848(대법원, 2005.07.28 선고) 영역에서 법원은 녹색·황색·적색의 삼색등 신호기가 설치되어 있고 비보호좌회전 표시나 유턴 표시가 없는 교차로에서 차마의 좌회전 또는 유턴은 원칙적으로 허용되지 않는다고 본 사례 흐름이 있습니다. 또한 횡형삼색등 신호기가 설치된 비보호좌회전 표지 없는 교차로에서 녹색등화 시 유턴하였다면 반대 진행방향뿐만 아니라 같은 진행방향 후방차량에 대해서도 신호위반 책임을 진다고 평가했습니다. 비보호좌회전 표지가 있어도 \\"맞은편 직진 차량이 없을 때만 좌회전\\" 의미로 평가되는 트랙입니다.',
        takeaway: '비보호좌회전은 직진 우선이 원칙. 좌회전 차량이 양보 의무를 위반하면 큰 비중 과실로 평가되는 트랙. 신호·표지·블랙박스가 결정 자료.',
      },
    ],
    faq: [
      {
        question: '비보호좌회전이면 무조건 좌회전 차량 100% 과실인가요?',
        answer:
          '<strong>좌회전 차량 과실이 큰 비중으로 평가되지만 본인 과속·전방주시 위반 시 분배되는 영역입니다.</strong> 통상 좌회전 70~80%, 직진 20~30% 사례 흐름.',
      },
      {
        question: '본인이 녹색 신호로 직진했는데 왜 과실이 잡히나요?',
        answer:
          '<strong>직진 차량도 일반 주의의무(전방 주시·안전속도)가 있어 일부 분배 사정으로 평가되는 영역입니다.</strong> 다만 과속·주시 위반 자료가 없으면 분배 축소 가능.',
      },
      {
        question: '비보호좌회전 표지가 없으면 어떻게 되나요?',
        answer:
          '<strong>비보호좌회전 표지가 없는 교차로에서 좌회전·유턴은 신호위반으로 평가되는 영역입니다.</strong> 좌회전 차량 과실 비중이 더 크게 평가되는 트랙.',
      },
      {
        question: '과실비율이 보통 어떻게 잡히나요?',
        answer:
          '<strong>좌회전 차량 70~80%, 직진 차량 20~30% 영역에서 평가되는 사례 흐름이 있습니다.</strong> 직진 과속·주시 위반 시 본인 분배 10~20% 증감.',
      },
      {
        question: '분쟁조정으로 비율 다툴 수 있나요?',
        answer:
          '<strong>손해보험협회 1544-0114 분쟁조정 또는 금감원 1332 분쟁조정 신청이 가능한 영역입니다.</strong> 3년 시효 내 민사 청구도 선택 가능.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교차로 좌회전', href: '/guide/traffic-accident/traffic-accident-intersection-left-turn' },
      { label: '신호 위반', href: '/guide/traffic-accident/traffic-accident-signal-violation-fault-negotiation' },
    ],
  },

  // ─── 2. traffic-accident-jaywalking-fatal-pedestrian-accused-criminal-civil-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-jaywalking-fatal-pedestrian-accused-criminal-civil-track',
    keyword: '무단횡단 보행자 사망 가해자 방어',
    questionKeyword: '야간에 갑자기 무단횡단하는 보행자를 충돌해 사망에 이르게 했어요. 형사처벌이 너무 두렵습니다.',
    ctaKeyword: '무단횡단 가해자 형사·민사 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '무단횡단 보행자 사망 가해자 — 5단계 형사·민사 방어 트랙 | 로앤가이드',
      description:
        '야간 도로에서 무단횡단 보행자를 충돌해 사망 결과로 형사 입건된 상황이라면, 도로교통법 27조·교특법·예견가능성·합의 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 야간 9시쯤 편도 2차로 일반도로를 시속 약 60km(제한 60km)로 1차로 주행 중이었어요. 가로등이 드문 구간에서 갑자기 도로 좌측 화단을 넘어 검은색 옷을 입은 보행자가 본인 차량 진로 앞으로 뛰어들었고, 본인은 급제동을 했지만 약 1.5m 거리에서 보행자와 충돌, 보행자는 병원 이송 후 사망했어요. 본인 차량은 종합보험 가입 + 블랙박스도 정상 작동. 그런데 보행자 사망 결과로 경찰에 \\"교통사고처리특례법 위반(치사)\\"으로 입건되었고 검찰 송치 단계에서 형사 처벌이 두려운 상황. 유가족 측은 위자료 합의도 요구하고 있어요.\\" 이런 상황은 ① 도로교통법 제27조: 보행자 보호 의무 ② 도로교통법 제20조: 안전속도 ③ 교특법 제3조: 사망 시 종합보험 면책 불가 ④ 예견 가능성·회피 가능성(신뢰 원칙) ⑤ 형사 처벌·민사 위자료 합의 5가지가 결합되는 영역. 무단횡단 사망이라도 운전자는 일반 주의의무가 있고 종합보험 가입이 형사 면책 사유가 안 되는 트랙. 다만 \\"상당한 거리에서 예견할 수 없었다\\"는 신뢰 원칙이 평가되면 무죄·집행유예 사정. 대응은 ① 현장 ② 예견가능성 ③ 신뢰원칙 ④ 합의 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 무단횡단 사망 형사·민사 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 예견·신뢰원칙·합의·양형·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 예견 가능성·회피 가능성</strong> — 신뢰 원칙 적용 검토.</li>\n<li><strong>② 안전 속도·전방 주시 의무</strong> — 도로교통법 20·27조.</li>\n<li><strong>③ 교특법 사망 시 형사 면책 배제</strong></li>\n<li><strong>④ 유가족 합의·반의사불벌 사정</strong></li>\n<li><strong>⑤ 형사 양형·민사 위자료 (3년)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보행자 사망 사고는 종합보험 가입과 무관하게 교특법상 형사 처벌 대상이 되는 영역. 다만 \\"무단횡단을 예상할 수 없는 상황이었고 즉시 감속·급제동 등 조치를 취했어도 충돌을 피할 수 없었다\\"는 신뢰 원칙이 평가되면 무죄·기소유예·집행유예 등 양형 사정으로 검토되는 트랙. 블랙박스·EDR·도로 사정·보행자 의복 등이 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·합의·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료·블랙박스 보존 (즉시)</strong> — 충돌 직전 시야·속도·도로 사정.</li>\n<li><strong>2단계 — 경찰 조사·진술 (변호인 동석 검토)</strong></li>\n<li><strong>3단계 — 유가족 합의·반의사불벌(치사는 반의사불벌 X, 양형 자료) 진행</strong></li>\n<li><strong>4단계 — 검찰 송치·기소 단계 양형 자료 제출 (보험금·합의금·반성문)</strong></li>\n<li><strong>5단계 — 형사 1·2심·민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무단횡단 가해자 형사·민사 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·진술·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (사고 직전 30초 이상)</strong></li>\n<li><strong>EDR 데이터 (차량 속도·브레이크 시점)</strong></li>\n<li><strong>도로 사정 (가로등·중앙분리대·횡단보도 부재) 사진</strong></li>\n<li><strong>현장 검증 자료·교통사고사실확인원</strong></li>\n<li><strong>본인 종합보험증서·인적사항·과거 운전 이력</strong></li>\n<li><strong>유가족 합의서·위자료 영수증 (합의 시)</strong></li>\n<li><strong>반성문·탄원서·소득 자료 (양형용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사망 사고는 종합보험 가입과 무관하게 형사 책임이 따르는 영역이라 합의·반성문·양형 자료가 결정 사정. 유가족 합의는 형사 양형의 핵심 요소이지만, 합의 시점·금액·표현은 변호인 검토 후 진행하는 것이 안전한 트랙. 자필 반성문·기부 영수증도 양형 사정으로 평가될 수 있어요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>예견 가능성·회피 가능성 (신뢰원칙)</strong></li>\n<li><strong>안전 속도·전방 주시 위반</strong></li>\n<li><strong>유가족 합의·반의사불벌 사정</strong></li>\n<li><strong>형사 양형·집행유예·기소유예</strong></li>\n<li><strong>3년 민사 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132 (형사 무료 상담)</strong></li>\n<li><strong>경찰청 사이버범죄 신고·교통사고 처리</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>형사 국선변호인 신청 (검찰·법원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고속도로 무단횡단 보행자 충돌 사고 운전자 주의의무',
        summary:
          '대법원 2000도2671(대법원, 2000.09.05 선고) 영역에서 법원은 고속도로를 운행하는 자동차 운전자에게는 일반적으로 고속도로를 횡단하는 보행자가 있을 것까지 예견하여 운전할 주의의무가 없고, 다만 상당한 거리에서 보행자의 무단횡단을 미리 예상할 수 있는 사정이 있었고 즉시 감속하거나 급제동하는 등의 조치를 취하였다면 보행자와의 충돌을 피할 수 있었다는 특별한 사정이 인정되는 경우에만 운전자의 과실이 인정될 수 있다고 본 사례 흐름이 있습니다. 야간 일반도로 무단횡단 사망 사건에서도 \\"상당한 거리에서 예상 가능했는가\\"가 핵심 판단 사정으로 평가되는 트랙입니다.',
        takeaway: '무단횡단 사망 사고는 운전자의 예견·회피 가능성(신뢰 원칙)이 핵심 평가 사정. 블랙박스·도로 사정·속도 자료가 결정 자료. 양형은 합의·반성으로 검토.',
      },
    ],
    faq: [
      {
        question: '종합보험 가입했는데도 형사 처벌받나요?',
        answer:
          '<strong>교특법상 사망 사고는 종합보험 가입과 무관하게 형사 처벌 대상으로 평가되는 영역입니다.</strong> 12대 중과실에 해당하지 않아도 사망은 면책 배제.',
      },
      {
        question: '신뢰 원칙이라는 게 뭔가요?',
        answer:
          '<strong>운전자가 일반적으로 예상할 수 없는 상황(무단횡단·급발진 등)에 대해 미리 대비할 주의의무는 없다는 법리입니다.</strong> 다만 예견 가능 사정이 있으면 적용 배제.',
      },
      {
        question: '유가족 합의가 양형에 큰 영향이 되나요?',
        answer:
          '<strong>사망 사고는 반의사불벌이 아니라 형사가 자동 진행되지만 유가족 합의·위자료가 양형 사정으로 크게 평가되는 영역입니다.</strong> 집행유예·감경 사례 흐름.',
      },
      {
        question: '블랙박스가 가장 중요한가요?',
        answer:
          '<strong>충돌 직전 시야 거리·보행자 등장 시점·본인 제동 시점이 블랙박스에 보존되어야 신뢰 원칙 판단의 결정 자료입니다.</strong> 보존 즉시 사본 백업.',
      },
      {
        question: '국선변호인을 받을 수 있나요?',
        answer:
          '<strong>구속 시 국선변호인이 자동 선정되고 불구속도 법원에 신청 가능한 영역입니다.</strong> 법률구조공단 132 무료 상담도 활용.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '12대 중과실', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '가해자 형사', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '야간 보행자', href: '/guide/traffic-accident/traffic-accident-night-no-light-pedestrian' },
    ],
  },

  // ─── 3. traffic-accident-traffic-signal-yellow-light-intersection-entry-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-traffic-signal-yellow-light-intersection-entry-fault-track',
    keyword: '황색신호 교차로 진입 충돌',
    questionKeyword: '신호등이 황색으로 바뀐 상태에서 교차로에 진입했다가 측면 충돌이 났어요. 본인이 신호 위반인가요?',
    ctaKeyword: '황색신호 진입 과실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '황색신호 교차로 진입 — 5단계 신호위반 평가 트랙 | 로앤가이드',
      description:
        '신호등 황색 등화 상태에서 교차로 진입 후 측면 차량과 충돌해 신호위반 주장으로 본인 과실 70%가 잡혀 답답하다면, 도로교통법 시행규칙·정지 의무·과실비율 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 시내 사거리에서 시속 약 50km로 직진 중이었어요. 교차로 진입 약 20m 직전 신호등이 녹색에서 황색으로 바뀌었고, 본인은 \\"지금 멈추면 정지선을 넘는다\\"고 판단해 그대로 진행했어요. 그런데 교차로 안에서 측면(우측 도로) 차량이 적색→녹색 신호로 진입하면서 본인 차량 측면을 충돌, 본인 어깨 인대 손상 + 차량 측면 함몰. 본인은 \\"황색 등화에서 정지선·교차로 직전에 멈출 수 없는 상황이라 진행했다\\"고 주장하지만, 보험사·상대 측은 \\"황색 등화는 정지 의무라 본인 과실 70%\\"를 주장합니다.\\" 황색신호 교차로 진입 사고는 ① 도로교통법 제5조: 신호 준수 ② 도로교통법 시행규칙 별표2: 황색 등화 의미(정지선·교차로 직전 정지 의무) ③ 본인 측 정지 가능성(속도·거리) ④ 손보협 과실비율 인정기준 ⑤ 분쟁조정·민사 5가지가 결합되는 영역. 황색은 \\"정지 의무\\"가 원칙이지만 정지선·교차로 직전에 정지할 수 없는 거리였다면 분배가 평가되는 트랙. 대응은 ① 신호 ② 정지 가능성 ③ 보험 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 황색신호 교차로 진입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신호·정지가능성·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 황색 등화의 의미 (도로교통법 시행규칙 별표2)</strong> — 정지선·교차로 직전 정지 의무.</li>\n<li><strong>② 본인 진입 시점 신호</strong> — 황색 진입인지 적색 진입인지.</li>\n<li><strong>③ 정지 가능성 (속도·거리)</strong> — 안전 정지 가능 여부.</li>\n<li><strong>④ 손보협 과실비율 인정기준</strong></li>\n<li><strong>⑤ 분쟁조정·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 황색 등화는 \\"정지선·교차로 직전 정지 의무\\"가 원칙. 정지 가능한 거리·속도였는데 진행했다면 신호 위반으로 평가되는 영역. 다만 정지선이 없거나 \\"이미 교차로 진입한 상태\\"였다면 신속 통과가 허용되는 트랙. 블랙박스에 신호 변경 시점과 본인 차량 위치가 함께 보존되어야 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스(신호 변경 시점)·교차로 CCTV·정지선·횡단보도 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 자동차보험 청구·과실비율 협의</strong> — 황색신호 인정기준 적용.</li>\n<li><strong>4단계 — 손해보험협회 과실비율 분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">황색신호 진입 과실 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·신호·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (신호 변경 시점 보존)</strong></li>\n<li><strong>교차로 CCTV·신호등 위치 사진</strong></li>\n<li><strong>정지선·횡단보도 노면 표시 사진</strong></li>\n<li><strong>본인 차량 속도 자료 (GPS·EDR)</strong></li>\n<li><strong>충돌 부위·차량 위치 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 황색신호 분쟁의 가장 결정 자료는 \\"신호 변경 시점\\"과 \\"본인 차량 위치(정지선 통과 여부)\\"의 동시 보존. 블랙박스가 신호등을 명확히 포착하지 못하면 인근 교차로 CCTV·다른 차량 블랙박스를 신속히 보존 요청하는 트랙. 정지선·교차로 직전에 안전 정지 가능했는지 평가가 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>황색 등화의 정지 의무</strong> — 도로교통법 시행규칙 별표2.</li>\n<li><strong>정지 가능성 (속도·거리)</strong> — 분배 사정.</li>\n<li><strong>이미 교차로 진입 여부</strong> — 신속 통과 허용 영역.</li>\n<li><strong>상대 차량 적색·녹색 진입</strong> — 신호 사정.</li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 황색 등화의 의미와 신호 위반 평가',
        summary:
          '대법원 2018도14262(대법원, 2018.12.27 선고) 영역에서 법원은 도로교통법상 차량이 교차로에 진입하기 전에 황색의 등화로 바뀐 경우 차량은 정지선이나 \\"교차로의 직전\\"에 정지하여야 하며, 차량 운전자가 정지할 것인지 또는 진행할 것인지 여부를 선택할 수 없다고 본 사례 흐름이 있습니다. 또한 정지선과 횡단보도가 설치되어 있지 않았더라도 황색 등화를 보고서도 교차로 직전에 정지하지 않았다면 신호를 위반한 것이라고 평가했습니다. 황색신호 진입 사고에서 \\"진입 전 황색 변경·정지 가능 거리\\"였다면 신호위반이 평가되는 트랙입니다.',
        takeaway: '황색 등화는 정지 의무가 원칙. 진입 전 황색 변경 시 정지선·교차로 직전 정지 의무 평가. 정지 가능 여부가 결정 사정.',
      },
    ],
    faq: [
      {
        question: '황색 신호에 진입하면 무조건 신호위반인가요?',
        answer:
          '<strong>진입 전 황색 변경 시 정지선·교차로 직전 정지 의무가 원칙이라 신호위반으로 평가되는 영역입니다.</strong> 이미 진입했다면 신속 통과 허용.',
      },
      {
        question: '정지하면 더 위험할 것 같아 진행했어요.',
        answer:
          '<strong>도로교통법상 황색은 정지 의무가 원칙이라 \\"더 위험\\"이라는 주관 판단은 면책 사유로 평가되지 않는 영역입니다.</strong> 다만 분배 사정.',
      },
      {
        question: '본인 과실이 보통 어떻게 잡히나요?',
        answer:
          '<strong>황색 진입 + 측면 적색→녹색 진입 충돌 시 본인 60~80%, 상대 20~40% 영역에서 평가되는 사례 흐름이 있습니다.</strong> 정지 가능성에 따라 분배.',
      },
      {
        question: '정지선이 없는 교차로면요?',
        answer:
          '<strong>정지선이 없어도 교차로 직전 정지 의무는 동일하게 평가되는 영역입니다.</strong> 대법원 2018도14262 사례.',
      },
      {
        question: '신호위반으로 형사 책임도 지나요?',
        answer:
          '<strong>인명피해 시 교특법 12대 중과실(신호위반)로 형사 처벌이 평가될 수 있는 영역입니다.</strong> 합의·반성문이 양형 사정.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '신호 위반 처벌', href: '/guide/traffic-accident/traffic-accident-signal-violation-criminal-impact' },
      { label: '신호 위반 협상', href: '/guide/traffic-accident/traffic-accident-signal-violation-fault-negotiation' },
      { label: '교차로 좌회전', href: '/guide/traffic-accident/traffic-accident-intersection-left-turn' },
    ],
  },

  // ─── 4. traffic-accident-kindergarten-school-bus-child-alighting-injury-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-kindergarten-school-bus-child-alighting-injury-track',
    keyword: '통학버스 어린이 하차 직후 사고',
    questionKeyword: '아이가 어린이집 통학차량에서 내린 직후 길을 건너다 차에 치였어요. 통학차량·운영시설 책임은 어떻게 되나요?',
    ctaKeyword: '통학버스 하차 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '어린이집 통학버스 하차 사고 — 5단계 책임 분배 트랙 | 로앤가이드',
      description:
        '6세 자녀가 어린이집 통학차량에서 하차한 직후 도로를 건너다 차량에 치였는데 책임이 어디 있는지 답답하다면, 도로교통법 51조·시설 보호의무·운행자 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"맞벌이 부부로 본인 자녀(6세)는 매일 어린이집 통학차량(승합차)을 이용해요. 사고 당일 어린이집 통학차량이 단지 정문에서 본인 자녀를 하차시킨 직후, 운전자·동승 교사가 횡단 안전을 확인하지 않은 상태에서 자녀가 차량 앞을 가로질러 횡단하다가 마침 진행하던 다른 차량에 치였어요. 자녀는 다리 골절 + 머리 타박 8주 진단. 본인은 \\"어린이집·통학차량·진행 차량 중 누구한테 무엇을 청구해야 하느냐\\"가 가장 막막한 상황. 어린이집은 \\"하차 후 책임 종료\\"라고 주장하고 진행 차량 측은 \\"자녀가 갑자기 뛰어들었다\\"고 주장합니다.\\" 통학차량 하차 직후 사고는 ① 도로교통법 제51조: 어린이 통학버스 보호의무(하차 후 안전 확인) ② 영유아보육법·유아교육법: 시설 보호 의무 ③ 도로교통법 제27조: 어린이 보호 일반 ④ 운행자 책임·자동차보험 ⑤ 민사 손해배상(5년·미성년 시효 특칙) 5가지가 결합되는 영역. 통학차량 운전자·동승 보호자에게 하차 직후 안전 확인 의무가 평가되는 트랙입니다. 대응은 ① 현장 ② 책임 분리 ③ 보험 ④ 합의 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 통학버스 하차 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 안전 확인·시설·보험·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 통학버스 안전 확인 의무 (도로교통법 51조)</strong> — 하차 후 횡단 안전 확인.</li>\n<li><strong>② 시설(어린이집·유치원) 보호 의무</strong> — 영유아보육법·유아교육법.</li>\n<li><strong>③ 진행 차량 어린이 보호 의무 (도로교통법 27조)</strong></li>\n<li><strong>④ 자동차보험·시설배상책임보험 청구</strong></li>\n<li><strong>⑤ 민사 손해배상 (미성년 5년 특칙)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통학버스는 도로교통법 51조에 따라 하차 후 어린이가 안전한 곳에 도달할 때까지 운전자·동승 보호자가 안전 확인 의무를 지는 영역. 진행 차량도 어린이 보호 일반 주의의무가 평가되는 트랙. 자녀의 안전 확보가 평가되는 시점은 \\"하차 후 즉시\\"가 아니라 \\"안전 도달 시까지\\"라는 점이 결정 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 통학차량 위치·하차 지점·인근 CCTV·진행 차량 블랙박스.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 진행 차량 자동차보험·통학차량 보험·시설 배상책임보험 청구</strong></li>\n<li><strong>4단계 — 어린이집·통학차량 운영자 합의·민사 손해배상</strong></li>\n<li><strong>5단계 — 미성년 손해배상 (성년 후 3년·총 10년 한도, 민법 766조)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">통학버스 하차 사고 책임 분배 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·진단 갈래입니다.</strong></p>\n<ul>\n<li><strong>통학차량 위치·번호·동승 보호자 정보</strong></li>\n<li><strong>하차 지점·횡단 동선 사진·인근 CCTV</strong></li>\n<li><strong>진행 차량 블랙박스·번호·자동차보험 정보</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>자녀 의료기록·진단서·치료비 영수증 (소아과·정형외과)</strong></li>\n<li><strong>어린이집 통학차량 운영 계약·동승 보호자 명단</strong></li>\n<li><strong>본인 자동차보험·자녀 일상생활배상·실손 보험증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어린이집 통학차량 사고는 \\"누가 어디까지 책임지는지\\"의 분리가 핵심. 어린이집·통학차량 운전자·동승 보호자·진행 차량 운전자 각각에 대해 자동차보험·시설배상책임보험·국가배상 등 청구처가 달라지는 영역. 자녀가 미성년이라 손해배상 시효도 성년 후 3년까지 연장 평가되는 트랙(민법 766조).</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>통학버스 안전 확인 의무 범위</strong> — 도로교통법 51조.</li>\n<li><strong>시설(어린이집) 보호 의무 종료 시점</strong></li>\n<li><strong>진행 차량 어린이 보호 주의의무</strong></li>\n<li><strong>자녀 행위·예측 가능성 (미성년 책임능력)</strong></li>\n<li><strong>미성년 손해배상 5년·총 10년</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132 (미성년 피해 무료 상담)</strong></li>\n<li><strong>아동권리보장원 02-6454-8500</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>경찰청 117 (어린이 안전 신고)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통학버스 유상운송 보험 면책과 운영자 책임',
        summary:
          '대법원 94다54726(대법원, 1995.05.12 선고) 영역에서 법원은 업무용자동차종합보험의 유상운송 면책 조항을 해석하면서, 학교에 소속된 학생들 중 실비 상당의 이용료를 내는 특정 인원만이 일정한 시간·경로를 주행하는 통학버스의 운행은 일반 유상운송과 다르게 면책 범위에서 검토되어야 한다고 본 사례 흐름이 있습니다. 어린이집·유치원 통학차량 사고에서도 운영자·운전자·동승 보호자의 안전 의무 위반과 진행 차량의 어린이 보호 주의의무가 함께 분배 평가되는 영역으로, 자녀 미성년 손해배상은 민법 766조에 따라 시효 특칙이 적용되는 트랙입니다.',
        takeaway: '통학차량 운영·운전자·진행 차량 책임이 함께 분배 평가되는 트랙. 도로교통법 51조 안전 확인 의무가 핵심. 미성년 시효 특칙(민법 766조) 활용.',
      },
    ],
    faq: [
      {
        question: '어린이집이 "하차 후 책임 없다"고 해요.',
        answer:
          '<strong>도로교통법 51조에 따라 어린이가 \\"안전한 곳에 도달할 때까지\\" 보호 의무가 평가되는 영역입니다.</strong> 하차 즉시 종료가 아닌 트랙.',
      },
      {
        question: '진행 차량이 100% 잘못 아닌가요?',
        answer:
          '<strong>진행 차량도 어린이 보호 일반 주의의무가 평가되지만 자녀 행위·통학차량 책임도 분배 평가되는 영역입니다.</strong> 통상 진행 차량 60~80%.',
      },
      {
        question: '자녀가 미성년이라 시효가 다른가요?',
        answer:
          '<strong>민법 766조에 따라 미성년 손해배상은 성년 후 3년·총 10년 한도로 시효 특칙이 적용되는 영역입니다.</strong> 일반 3년보다 보호.',
      },
      {
        question: '치료비·위자료는 어디서 청구하나요?',
        answer:
          '<strong>진행 차량 자동차보험·통학차량 보험·시설배상책임보험·본인 실손·일상생활배상 등 복수 청구 가능한 영역입니다.</strong> 중복 시 안분.',
      },
      {
        question: '아동권리보장원에도 신고해야 하나요?',
        answer:
          '<strong>안전 의무 위반·시설 관리 부실이 있으면 별도 신고·행정 처분 절차로 진행될 수 있는 영역입니다.</strong> 아동권리보장원 02-6454-8500.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '스쿨존', href: '/guide/traffic-accident/traffic-accident-school-zone-child' },
      { label: '어린이 보행자', href: '/guide/traffic-accident/traffic-accident-child-pedestrian-claim' },
      { label: '통학버스', href: '/guide/traffic-accident/traffic-accident-school-bus-compensation' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 5. traffic-accident-delivery-rider-platform-employment-status-injury-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-delivery-rider-platform-employment-status-injury-track',
    keyword: '배달 라이더 사고 플랫폼 책임',
    questionKeyword: '배달 라이더로 일하다 사고가 났는데 플랫폼은 "개인사업자라 책임 없다"고 해요. 정말 그런가요?',
    ctaKeyword: '배달 라이더 플랫폼 책임 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배달 라이더 사고 플랫폼 책임 — 5단계 근로자성 트랙 | 로앤가이드',
      description:
        '쿠팡이츠·배민 배달 중 차량 사고로 8주 진단을 받았는데 플랫폼이 "개인사업자라 책임 없다"고 안내한다면, 산재·근로자성·사용자 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 약 1년째 쿠팡이츠·배달의민족·배민커넥트 등 복수 플랫폼에서 이륜차 배달 라이더로 일하고 있어요. 지난주 배달 중 한 사거리에서 신호 위반 차량과 충돌, 다리 골절 + 어깨 인대 손상 8주 진단을 받았어요. 본인은 \\"배달 중 사고이므로 산재 처리되나\\" 확인했더니 플랫폼사는 \\"개인사업자(특고)라 별도 산재 가입 필요\\"라고 안내했고, 운행자 책임에 대해서도 \\"플랫폼은 알선만 했을 뿐 사용자가 아니다\\"라며 책임을 거부합니다. 본인은 본업 이외에 \\"누구에게 무엇을 청구할 수 있느냐\\"가 가장 막막한 상황.\\" 배달 라이더 사고는 ① 산재보험법 제125조: 특수형태근로종사자 산재(2023.7~ 의무) ② 근로기준법·노동법 근로자성 평가 ③ 자배법 제3조: 운행자 책임 ④ 가해 차량 자동차보험 청구 ⑤ 민사 손해배상 5가지가 결합되는 영역. 플랫폼 라이더는 특고 산재 의무 가입 대상이고, 사고 형태·관계에 따라 플랫폼의 사용자 책임이 평가되는 트랙. 대응은 ① 현장 ② 산재 ③ 자동차보험 ④ 플랫폼 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 배달 라이더 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 산재·자동차보험·플랫폼·근로자성·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 특고 산재보험 (산재보험법 125조)</strong> — 2023.7~ 의무 가입.</li>\n<li><strong>② 가해 차량 자동차보험 (대인배상Ⅰ·Ⅱ)</strong></li>\n<li><strong>③ 플랫폼사 사용자 책임·근로자성 평가</strong></li>\n<li><strong>④ 본인 자동차보험·실손·이륜차 보험</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배달 라이더는 \\"특수형태근로종사자\\"로 2023.7부터 산재보험 의무 가입 영역. 플랫폼이 \\"개인사업자라 책임 없다\\"고 안내해도 산재는 별도 청구 가능한 트랙. 또한 플랫폼이 배차 알고리즘·평가 시스템·복장 등을 통해 종속성을 행사했다면 근로자성·사용자 책임 평가가 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·산재·자동차·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·헬멧캠·플랫폼 배차 내역·CCTV.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 + 근로복지공단 산재 신청 (요양 신청서)</strong></li>\n<li><strong>3단계 — 가해 차량 자동차보험 대인배상 청구 (산재와 별도)</strong></li>\n<li><strong>4단계 — 플랫폼사 사용자 책임 검토·노동위 근로자성 진정</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달 라이더 플랫폼 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·근로·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>블랙박스·헬멧캠·CCTV (사고 직전·직후)</strong></li>\n<li><strong>플랫폼 배차 내역·운행 기록·평가 자료</strong></li>\n<li><strong>이륜차 등록증·보험증서·면허</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증·물리치료 기록</strong></li>\n<li><strong>근로복지공단 요양 신청서·산재 결정문</strong></li>\n<li><strong>플랫폼 계약서·약관·복장·교육 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배달 라이더 사고는 \\"산재 + 자동차보험 + 플랫폼 책임\\"의 3중 청구가 가능한 영역. 산재는 휴업급여·요양급여·장해급여, 자동차보험은 위자료·일실수입, 플랫폼 사용자 책임은 민사 손해배상의 보충 트랙. 다만 동일 손해 항목은 안분(중복 보상 배제)되는 평가가 일반.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특고 산재 적용 (2023.7~)</strong> — 의무 가입.</li>\n<li><strong>근로자성 평가</strong> — 종속성·전속성 사정.</li>\n<li><strong>플랫폼 사용자 책임</strong> — 자배법 운행자성·민법 사용자.</li>\n<li><strong>중복 보상 안분</strong> — 산재·자동차보험·민사.</li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075 (산재 신청)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운전자 안전 의무와 신뢰 원칙·과실 평가',
        summary:
          '대법원 2025도1049(대법원, 2025.06.12 선고) 영역에서 법원은 차량 운전자가 제한속도를 지키며 진행하였더라면 피해자를 발견한 후에 충돌을 피할 수 있었다는 등의 사정이 없는 경우 제한속도를 초과하여 과속으로 진행한 잘못과 교통사고의 발생 사이에 상당인과관계가 없다고 본 사례 흐름이 있습니다. 톨게이트 하이패스 구간 과속 진행 중 오토바이 충돌 사건에서 운전자 주의의무·과실 인과관계가 평가된 트랙. 배달 라이더 사고에서도 가해 차량의 신호·속도·전방주시 등 주의의무 위반이 평가되면 자동차보험·민사 책임이 검토되고, 라이더의 산재·플랫폼 책임은 별도로 검토되는 영역입니다.',
        takeaway: '배달 라이더 사고는 가해 차량 책임 + 산재 + 플랫폼 책임이 분리·중복 평가되는 트랙. 운전자 주의의무 평가가 결정 사정.',
      },
    ],
    faq: [
      {
        question: '플랫폼이 "개인사업자라 산재 안 된다"고 해요.',
        answer:
          '<strong>2023.7부터 특수형태근로종사자 산재 의무 가입 영역입니다.</strong> 근로복지공단 1588-0075에 직접 요양 신청 가능.',
      },
      {
        question: '산재 받으면 자동차보험 청구는 못 하나요?',
        answer:
          '<strong>산재는 휴업·요양·장해급여, 자동차보험은 위자료·일실수입 등 항목이 다른 영역입니다.</strong> 동일 항목은 안분.',
      },
      {
        question: '플랫폼사에 직접 청구할 수 있나요?',
        answer:
          '<strong>배차·평가·복장 등 종속성이 평가되면 사용자 책임·운행자 책임으로 검토될 수 있는 영역입니다.</strong> 노동위·법원 판단 대상.',
      },
      {
        question: '본인 이륜차 보험은 어디까지 보장되나요?',
        answer:
          '<strong>유상운송(배달) 특약 가입 여부에 따라 보장 범위가 달라지는 영역입니다.</strong> 특약 미가입 시 보상 거절 사례.',
      },
      {
        question: '근로복지공단에 어떻게 신청하나요?',
        answer:
          '<strong>근로복지공단 토탈서비스(total.comwel.or.kr) 또는 지사 방문으로 요양 신청서 제출 가능한 영역입니다.</strong> 사고 후 3년 시효.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '배달 라이더 산재', href: '/guide/traffic-accident/traffic-accident-delivery-rider-workers-comp' },
      { label: '출퇴근 산재', href: '/guide/traffic-accident/traffic-accident-commute-work-injury-double-claim' },
      { label: '오토바이 보상', href: '/guide/traffic-accident/traffic-accident-motorcycle-helmet-injury' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },
];
