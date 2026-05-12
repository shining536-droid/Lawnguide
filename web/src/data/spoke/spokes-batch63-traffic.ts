import { SpokePage } from '../spoke-pages';

// batch63 traffic-accident — 5개 (2026-05-13)
//
// 고유 존재 이유:
// 1. 어린이 통학버스 정차 위반 — 도로교통법 51조 + 운전자 신뢰칙 트랙 (스쿨존 일반과 다름).
// 2. 보복운전 블박 입증 — 보복·난폭운전 처벌 vs 단순 안전운전 위반 분기 트랙.
// 3. 무보험차 피해자 직접청구 — 정부보장사업 + 가해자 직접청구·구상권 트랙 (자상보험 트랙과 다름).
// 4. 후미추돌 연쇄 다중추돌 — 선행 차량 전방주시·연쇄 인과·다중 보험 정산 트랙.
// 5. 졸음운전 vs 의료적 사유 — 단순 졸음 책임 vs 갑작스러운 의식상실 면책 분기 트랙.

export const spokesBatch63Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-school-bus-stop-violation-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-bus-stop-violation-track',
    keyword: '어린이 통학버스 정차 위반',
    questionKeyword: '어린이 통학버스가 점멸등 켜고 정차 중인데 그대로 추월하다 하차 아이와 충돌. 과실은 어떻게 되나요?',
    ctaKeyword: '통학버스 사고 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '어린이 통학버스 정차 위반 — 5단계 과실·형사 점검 | 로앤가이드',
      description:
        '통학버스 점멸등 무시·추월 사고에서 도로교통법 제51조 위반과 형사·민사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오전 8시 등굣길 어린이 통학버스가 황색 점멸등 켜고 정차 중. 본인은 우측 차로로 \'잠깐만 지나가자\' 마음으로 그대로 진행. 하차한 7세 아이가 길을 건너다 차량 좌측 펜더에 부딪쳐 전치 6주. 본인은 \'어차피 옆 차로였다\'고 주장 중." 도로교통법 제51조는 통학버스가 점멸등을 켜고 정차하거나 어린이가 승하차할 때 \'후방·옆차로 차량 일시정지 후 안전 확인\'을 의무화 합니다. 위반 시 어린이 보호 영역으로 과실 가중·교통사고처리특례법상 12대 중과실 영역. 대응 트랙은 ① 점멸등·정차 인식 ② 우측 차로 진행 여부 ③ 형사 처벌 (반의사불벌 제외) ④ 민사 합의·과실 분배 ⑤ 보험 처리 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 통학버스 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 점멸등·차로·형사·민사·보험 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 점멸등·정차 인식</strong> — 황색·적색 점멸등 의미.</li>\n<li><strong>② 옆 차로도 일시정지 의무</strong> — 51조 핵심.</li>\n<li><strong>③ 형사 12대 중과실 영역</strong> — 반의사불벌 제외.</li>\n<li><strong>④ 민사 과실 운전자 측 70~90%</strong></li>\n<li><strong>⑤ 보험 처리·합의</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통학버스 점멸등 = "옆 차로도 멈춰라" 신호. 위반 시 종보 가입해도 형사 면책 안 됨. 운전자 과실 가중 강력 단서.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·형사·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 신고·블박 보존 (즉시)</strong></li>\n<li><strong>2단계 — 경찰 조사·형사 입건 (1~2주)</strong></li>\n<li><strong>3단계 — 보험 접수·치료비 가지급</strong></li>\n<li><strong>4단계 — 민사 합의·과실 협상 (1~3개월)</strong></li>\n<li><strong>5단계 — 형사 재판 (불기소·약식·정식)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">통학버스 사고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·점멸등·치료 갈래입니다.</strong></p>\n<ul>\n<li><strong>블박 영상 (전·후·실내)</strong></li>\n<li><strong>통학버스 CCTV·점멸등 영상</strong></li>\n<li><strong>경찰 사고조사·교통사고 사실확인원</strong></li>\n<li><strong>피해 아동 진단서·치료 영수증</strong></li>\n<li><strong>현장 사진·차로 폭 측정</strong></li>\n<li><strong>보험증권·종합보험 가입증명</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>점멸등 인식</strong> — "몰랐다"는 항변 통상 배척.</li>\n<li><strong>옆 차로 통과</strong> — 51조 위반 명백.</li>\n<li><strong>아동 갑작스러운 횡단</strong> — 과실 일부 감경 여지.</li>\n<li><strong>형사 합의금</strong> — 양형 영향.</li>\n<li><strong>아동 후유증</strong> — 장기 평가 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 어린이 통학·하차 사고',
        summary:
          '대법원 2001노696 영역 등에서 법원은 어린이 통학버스 운행과 하차 직후 어린이 횡단이 예측되는 상황에서 운전자의 주의의무 위반이 인정될 경우 업무상과실치상 책임이 성립할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '점멸등 정차 통학버스 = 옆 차로도 일시정지. 12대 중과실 영역이라 종보 가입해도 형사 면책 어려움.',
      },
    ],
    faq: [
      {
        question: '점멸등이 황색이면 안 멈춰도 되나요?',
        answer:
          '<strong>황색도 일시정지 후 안전 확인 의무가 있습니다.</strong> 적색은 절대 정지.',
      },
      {
        question: '종합보험 가입했으니 형사 면책되나요?',
        answer:
          '<strong>어린이 보호 영역 + 12대 중과실은 종보 면책 제외입니다.</strong>',
      },
      {
        question: '아이가 갑자기 튀어나왔어요',
        answer:
          '<strong>일부 과실 감경 사유이나 운전자 주의의무 우선입니다.</strong>',
      },
      {
        question: '합의가 형량에 영향 있나요?',
        answer:
          '<strong>피해 아동 측 처벌불원 의사는 양형에 강력 반영됩니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '12대 중과실', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '스쿨존 사고', href: '/guide/traffic-accident/traffic-accident-school-zone-child' },
      { label: '어린이 보호', href: '/guide/traffic-accident/traffic-accident-school-zone-criminal-response' },
      { label: '과실분배 기준표', href: '/guide/traffic-accident/traffic-accident-fault-ratio-table' },
      { label: '교통사고 합의금', href: '/guide/traffic-accident/traffic-accident-settlement-amount' },
    ],
  },

  // ─── 2. traffic-accident-road-rage-blackbox-proof-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-road-rage-blackbox-proof-track',
    keyword: '보복운전 블박 입증',
    questionKeyword: '깜빡이 안 켰다고 옆 차량이 끼어들기·급제동 반복하다 충돌. 보복운전 신고 가능한가요?',
    ctaKeyword: '보복운전 신고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보복운전 블박 입증 — 5단계 형사·민사 점검 | 로앤가이드',
      description:
        '깜빡이·끼어들기 시비로 시작된 보복운전 사고에서 블박 입증과 형사·민사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"왕복 4차로에서 차선 변경하다 옆 차량과 살짝 시비. 그 차량이 갑자기 앞으로 끼어든 뒤 급제동 3회 반복. 본인이 추돌 후 차에서 내려 항의하니 \'네가 잘못했다\'며 도리어 폭언. 블박엔 급제동 장면 다 찍힘." 보복운전은 형법상 \'특수상해·특수협박·특수손괴\'로 의율되는 영역(특정범죄가중처벌법 제5조의10). 단순 \'안전운전 위반\'(범칙금)과는 처벌 차이가 큽니다. 핵심은 ① 위해 의도 ② 위협성 ③ 반복성을 블박으로 입증. 일반 후미추돌과 달리 가해자가 형사 처벌 + 민사 손해배상 + 면허정지·취소까지 받는 영역입니다. 대응 트랙은 ① 블박·음성 보존 ② 보복운전 신고 (스마트국민제보) ③ 경찰 조사 ④ 형사 고소·민사 ⑤ 보험 정산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 보복운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·조사·고소·보험 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 블박·음성·차량 번호 보존</strong></li>\n<li><strong>② 보복운전 신고</strong> — 스마트국민제보·112.</li>\n<li><strong>③ 경찰 조사·의도 입증</strong></li>\n<li><strong>④ 특수상해·협박 형사 고소 + 민사</strong></li>\n<li><strong>⑤ 보험 정산·구상권</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보복운전 = 특가법·형법 영역. \"단순 끼어들기\"와 처벌 차이 큼. 블박의 \"반복성·의도성\" 입증이 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·조사·재판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 블박·음성·번호 보존 (즉시)</strong></li>\n<li><strong>2단계 — 스마트국민제보·112 신고 (1주)</strong></li>\n<li><strong>3단계 — 경찰 조사 출석 (2~4주)</strong></li>\n<li><strong>4단계 — 형사 고소·민사 손해배상 (3개월)</strong></li>\n<li><strong>5단계 — 보험사 과실 정산·구상권</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보복운전 입증과 형사·민사 흐름을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 블박·음성·경위 갈래입니다.</strong></p>\n<ul>\n<li><strong>블박 영상 (사고 전 5분 이상)</strong></li>\n<li><strong>차량 내·외부 음성 녹취</strong></li>\n<li><strong>주변 CCTV·차량 번호</strong></li>\n<li><strong>경찰 사고조사 자료</strong></li>\n<li><strong>차량 손해·치료 영수증·진단서</strong></li>\n<li><strong>당시 통화·문자 기록 (시비 경위)</strong></li>\n<li><strong>보험증권·자기차량손해 자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>의도성 입증</strong> — 1회 급제동 vs 반복 급제동.</li>\n<li><strong>피해자 도발</strong> — 시비 시작점에 대한 다툼.</li>\n<li><strong>특수상해 vs 단순상해</strong> — 자동차를 흉기로 평가.</li>\n<li><strong>형사 합의금</strong> — 양형 반영.</li>\n<li><strong>면허 행정처분</strong> — 별도 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스마트국민제보 (smartreport.police.go.kr)</strong></li>\n<li><strong>경찰 112·교통 1566-2222</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보복운전 특가법 적용',
        summary:
          '대법원 2022도1013 영역 등에서 법원은 차량 운행 중 시비를 계기로 반복적인 끼어들기·급제동·접촉으로 피해자에게 상해와 손괴를 가한 경우 특수상해·운전자폭행 등 특가법 영역으로 의율될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '보복운전 = 특수상해·특수협박 영역. 단순 안전운전 위반과 처벌 차이 큼. 블박 반복성 입증이 분기점.',
      },
    ],
    faq: [
      {
        question: '본인도 끼어들기 했는데 인정될까요?',
        answer:
          '<strong>시비 시작은 있어도 \'반복 위협\'은 별개로 평가됩니다.</strong>',
      },
      {
        question: '신고하면 면허 정지되나요?',
        answer:
          '<strong>보복운전 입건 시 면허정지·취소 별도 트랙입니다.</strong>',
      },
      {
        question: '블박 음성이 없으면 어떻게 하나요?',
        answer:
          '<strong>영상만으로도 반복·근접·급제동 입증이 가능 영역입니다.</strong>',
      },
      {
        question: '합의하면 형사 처벌 안 받나요?',
        answer:
          '<strong>특수상해는 반의사불벌이 아니므로 합의해도 처벌은 진행됩니다.</strong> 양형엔 반영.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '블박 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-cctv' },
      { label: '특수상해 대응', href: '/guide/assault/assault-special-injury' },
      { label: '교통사고 형사', href: '/guide/traffic-accident/traffic-accident-criminal-process' },
      { label: '과실분배 기준표', href: '/guide/traffic-accident/traffic-accident-fault-ratio-table' },
      { label: '면허 행정심판', href: '/guide/dui/dui-license-admin-appeal' },
    ],
  },

  // ─── 3. traffic-accident-uninsured-vehicle-victim-claim-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-uninsured-vehicle-victim-claim-track',
    keyword: '무보험차 피해자 청구',
    questionKeyword: '횡단보도에서 차에 치였는데 가해 차량이 무보험이래요. 치료비·합의금 어떻게 받나요?',
    ctaKeyword: '무보험 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무보험차 피해자 5단계 — 보장사업·직접청구 점검 | 로앤가이드',
      description:
        '가해 차량이 무보험·책임보험만 가입된 사고에서 정부보장사업과 직접청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길 횡단보도에서 신호 받고 건너던 중 우회전 차량에 치임. 전치 8주 갈비뼈·다리. 가해자 \'책임보험만 가입했고 종합보험은 없다\'며 합의 미루는 중. 본인 부담으로 입원 중인데 치료비가 벌써 800만원." 자동차손해배상보장법은 책임보험만 있는 무보험·일부보험차 사고도 피해자가 ① 가해자 직접청구 ② 책임보험사 직접청구(자배법 제10조) ③ 본인 자기신체사고·무보험차상해 특약 ④ 정부보장사업(자배법 제30조) ⑤ 형사 합의 5단계로 보호 받을 영역입니다. 무보험차상해 특약은 \'본인 보험\'에 가입돼 있으면 적용되는 핵심 안전망. 대응 트랙은 ① 가해 차량 보험 확인 ② 본인 특약 점검 ③ 정부보장사업 신청 ④ 가해자 직접청구·민사 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 무보험차 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해 보험·본인 특약·보장사업·민사·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가해 차량 보험 확인</strong> — 책임보험만/무보험/일부보험.</li>\n<li><strong>② 본인 무보험차상해 특약</strong> — 핵심 안전망.</li>\n<li><strong>③ 정부보장사업</strong> — 자배법 30조.</li>\n<li><strong>④ 가해자 직접청구·민사</strong></li>\n<li><strong>⑤ 형사 합의 (12대 중과실)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무보험차 사고도 본인 무보험차상해 특약 + 정부보장사업으로 \"기본 보장\"은 가능 영역. 가해자 합의 미루기 협상력에 휘둘리지 말 것.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험·보장사업·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가해 차량 보험 확인 (즉시)</strong></li>\n<li><strong>2단계 — 본인 보험 무보험차상해 특약 청구 (1주)</strong></li>\n<li><strong>3단계 — 정부보장사업 신청 (1년 내)</strong></li>\n<li><strong>4단계 — 가해자 직접청구·민사 (3년 시효)</strong></li>\n<li><strong>5단계 — 형사 합의·고소</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무보험 사고 5단계 보장 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·보험·치료 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 교통사고 사실확인원</strong></li>\n<li><strong>가해 차량 보험가입증명원</strong></li>\n<li><strong>본인 보험증권·특약 가입 확인</strong></li>\n<li><strong>치료비 영수증·진단서·소견서</strong></li>\n<li><strong>블박 영상·현장 사진</strong></li>\n<li><strong>정부보장사업 신청서</strong></li>\n<li><strong>가해자 인적사항·재산조회</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>책임보험만 가입</strong> — 한도 내 보장 + 초과분은 별도.</li>\n<li><strong>본인 특약 미가입</strong> — 정부보장사업·직접청구로 보완.</li>\n<li><strong>정부보장사업 한도</strong> — 사망·후유 1.5억, 부상 3천만.</li>\n<li><strong>가해자 무자력</strong> — 재산조회·강제집행.</li>\n<li><strong>형사 합의 압박</strong> — 양형 자료에만 활용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990 (보장사업)</strong></li>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 책임보험·보장사업 청구',
        summary:
          '대법원 2021다206691 영역 등에서 법원은 무보험·일부보험 차량에 의한 사고에서 피해자가 책임보험사 직접청구권과 정부보장사업·본인 특약을 단계적으로 활용해 손해를 보전받을 수 있다는 점을 전제로 판단한 사례 흐름이 있습니다.',
        takeaway: '무보험 사고 = 책임보험 + 본인 특약 + 정부보장사업 3중 안전망. 가해자 합의에만 매달릴 필요 없음.',
      },
    ],
    faq: [
      {
        question: '본인 보험에 무보험차상해 특약이 없으면?',
        answer:
          '<strong>정부보장사업 + 가해자 직접청구가 핵심 트랙입니다.</strong>',
      },
      {
        question: '정부보장사업 한도가 부족하면?',
        answer:
          '<strong>초과분은 가해자 직접청구·민사로 청구합니다.</strong>',
      },
      {
        question: '가해자가 돈이 없으면?',
        answer:
          '<strong>재산조회·채무불이행자 등재·강제집행 절차 검토.</strong>',
      },
      {
        question: '형사 합의 안 해주면 처벌 안 받나요?',
        answer:
          '<strong>12대 중과실(횡단보도 등)이면 반의사불벌 제외입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '정부보장사업', href: '/guide/traffic-accident/traffic-accident-government-guarantee' },
      { label: '책임보험 한도', href: '/guide/traffic-accident/traffic-accident-liability-insurance' },
      { label: '무보험차상해 특약', href: '/guide/traffic-accident/traffic-accident-uninsured-vehicle-claim' },
      { label: '치료비 가지급', href: '/guide/traffic-accident/traffic-accident-treatment-advance' },
      { label: '강제집행 절차', href: '/guide/traffic-accident/traffic-accident-enforcement' },
    ],
  },

  // ─── 4. traffic-accident-multi-vehicle-rear-end-chain-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-multi-vehicle-rear-end-chain-track',
    keyword: '후미추돌 연쇄 다중추돌',
    questionKeyword: '신호 대기 중 뒤에서 4중 추돌. 본인은 2번째 차량인데 책임은 어떻게 나뉘나요?',
    ctaKeyword: '연쇄 추돌 책임 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '후미 4중 연쇄추돌 — 5단계 다중 책임·보험정산 점검 | 로앤가이드',
      description:
        '신호대기·정체 중 발생한 연쇄 추돌에서 선행차량 전방주시와 다중 보험 정산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신호 대기 정차 중 뒤에서 \'쾅\' 소리와 함께 충격 4번. 본인 차량은 2번째 차량. 앞 차량을 한 번 더 추돌. 최후방 차량은 휴대폰 보다 못 봤다고 시인. 본인은 \'밀려서 부딪힌 것\'이라 주장하는데 보험사가 본인에게도 일부 과실 묻겠다고 해요." 연쇄 추돌은 ① 최후방 차량 책임 원칙(전방주시 의무 위반) ② 중간 차량은 \'밀린 추돌\'로 통상 과실 0%~경미 평가 ③ 다만 본인 정차 거리 부족·급제동·차간거리 미확보 시 일부 책임 영역. 대응 트랙은 ① 블박·CCTV로 추돌 순서 ② 차간거리·정차 위치 ③ 최후방 차량 책임 ④ 다중 보험 정산 ⑤ 분쟁조정 5단계입니다. 보험사가 자주 \"본인도 살짝 책임 있다\"고 협상해 오는 영역이라 입증이 분기점입니다.</p>',
    sections: [
      {
        title: 'Q. 4중 연쇄추돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 추돌순서·차간거리·책임·정산·분쟁 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 블박·CCTV로 추돌 순서</strong></li>\n<li><strong>② 본인 차간거리·정차 거리 확보</strong></li>\n<li><strong>③ 최후방 차량 책임 원칙</strong></li>\n<li><strong>④ 다중 보험 정산</strong> — 각 차량 보험사 협의.</li>\n<li><strong>⑤ 분쟁조정 (필요시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 연쇄 추돌은 최후방 차량 단독 책임이 원칙. 중간 차량은 "밀린 추돌"로 통상 과실 0%. 본인 차간거리 부족·급제동 시만 일부 책임 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·정산·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 블박·CCTV·사고 사진 (즉시)</strong></li>\n<li><strong>2단계 — 보험 접수·추돌 순서 보고 (1주)</strong></li>\n<li><strong>3단계 — 최후방 책임 정리·정산 (1~2개월)</strong></li>\n<li><strong>4단계 — 본인 차량·치료 보상 (가지급 포함)</strong></li>\n<li><strong>5단계 — 분쟁조정·민사 (필요시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연쇄 추돌 책임 정리를 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 블박·CCTV·정산 갈래입니다.</strong></p>\n<ul>\n<li><strong>블박 영상 (전·후)</strong></li>\n<li><strong>도로 CCTV·하이패스 자료</strong></li>\n<li><strong>경찰 사고조사·교통사고 사실확인원</strong></li>\n<li><strong>차량 손해 사진·견적</strong></li>\n<li><strong>치료 영수증·진단서</strong></li>\n<li><strong>각 차량 보험사 정보·연락처</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추돌 횟수</strong> — 본인이 앞 차량 친 \'2차 추돌\'인지 \'밀린 추돌\'인지.</li>\n<li><strong>차간거리</strong> — 정상 정차 시 책임 0%.</li>\n<li><strong>급제동</strong> — 본인 급제동 시 일부 책임 가능.</li>\n<li><strong>중간 차량 다수</strong> — 보험사 간 정산 복잡.</li>\n<li><strong>인적 피해</strong> — 각 차량별 분리 처리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전방주시의무 위반 후방 추돌',
        summary:
          '대법원 2021도17733 영역 등에서 법원은 전방주시의무를 위반한 후방 차량 운전자의 과실로 발생한 추돌 사고에서 운전자에게 교통사고처리특례법상 책임이 인정된다고 본 사례 흐름이 있습니다.',
        takeaway: '연쇄 추돌은 최후방 차량 전방주시의무 위반이 원칙. 중간 차량은 "밀린 추돌" 평가.',
      },
    ],
    faq: [
      {
        question: '본인이 앞차를 친 것도 본인 책임인가요?',
        answer:
          '<strong>"밀린 추돌"로 평가되면 본인 책임 0% 영역입니다.</strong> 블박 시간 입증 핵심.',
      },
      {
        question: '차간거리 부족했으면 어떻게 되나요?',
        answer:
          '<strong>일부 책임 가능 영역. 다만 정차 중이면 거리 무관합니다.</strong>',
      },
      {
        question: '4중이면 보험사가 4개인가요?',
        answer:
          '<strong>네, 각 차량 보험사가 상호 정산합니다.</strong>',
      },
      {
        question: '치료비는 누가 부담하나요?',
        answer:
          '<strong>본인 차량의 자기신체사고·자동차상해 + 가해 차량 책임보험.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '후미 추돌 책임', href: '/guide/traffic-accident/traffic-accident-rear-end-fault' },
      { label: '다중 추돌 정리', href: '/guide/traffic-accident/traffic-accident-multi-vehicle-pile-up-fault' },
      { label: '과실분배 기준표', href: '/guide/traffic-accident/traffic-accident-fault-ratio-table' },
      { label: '블박 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-cctv' },
      { label: '손보 분쟁조정', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
    ],
  },

  // ─── 5. traffic-accident-drowsy-driving-medical-cause-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-drowsy-driving-medical-cause-track',
    keyword: '졸음운전 의료적 사유',
    questionKeyword: '운전 중 갑자기 의식 잃고 사고. 평소 졸음증·간질 진단 받았는데 형사 책임 어떻게 되나요?',
    ctaKeyword: '의식상실 사고 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '졸음·의식상실 운전 사고 — 5단계 형사·민사 점검 | 로앤가이드',
      description:
        '단순 졸음운전과 갑작스러운 의식상실(발작·심정지) 사고의 형사·민사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로 주행 중 갑자기 의식 잃고 가드레일 충돌. 동승자 전치 4주. 본인은 평소 \'기면증\' 진단 + 약 복용 중이었지만 \'졸지 않았다\'고 진술. 경찰은 졸음운전·업무상과실치상으로 입건 검토 중. 의료 사유면 면책 가능한가요?" 운전 중 의식상실은 ① 단순 졸음운전(예측 가능 영역, 책임 인정) ② 사전 예측 불가능한 갑작스러운 의식상실(심정지·뇌출혈)로 분기됩니다. 의료적 사유가 \'사전 예측 가능\'했다면(과거 발작·약 복용 중 운전) 책임 인정. \'전혀 예측 불가\'였다면 면책 가능 영역이지만 입증 부담은 운전자에게 있는 영역입니다. 대응 트랙은 ① 진단·약 복용 이력 ② 사전 예측 가능성 ③ 형사 (업무상과실치상) ④ 민사 (보험·과실상계) ⑤ 면허 행정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 의식상실 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·예측·형사·민사·면허 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 의료 진단·약 복용 이력</strong></li>\n<li><strong>② 사전 예측 가능성</strong> — 핵심 분기.</li>\n<li><strong>③ 형사 (업무상과실치상)</strong></li>\n<li><strong>④ 민사 (보험·과실상계)</strong></li>\n<li><strong>⑤ 면허 행정처분 (적성검사)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 졸음 = 책임 명백. 의료 사유는 "사전 예측 가능성"이 분기점. 평소 진단·약 복용 중이었으면 운전 자체가 주의의무 위반 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·형사·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 의료 기록·약 복용 이력 확보 (즉시)</strong></li>\n<li><strong>2단계 — 경찰 조사·의학적 소견서 (2~4주)</strong></li>\n<li><strong>3단계 — 보험 접수·치료비 가지급 (1주)</strong></li>\n<li><strong>4단계 — 형사 처분·민사 합의 (3개월)</strong></li>\n<li><strong>5단계 — 면허 적성검사·행정처분</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">의식상실 사고 책임·면책 분기를 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료·사고·보험 갈래입니다.</strong></p>\n<ul>\n<li><strong>의료 진단서·약 처방 내역</strong></li>\n<li><strong>의학적 소견서 (사전 예측 가능성)</strong></li>\n<li><strong>블박·차량 손해 사진</strong></li>\n<li><strong>경찰 사고조사 자료</strong></li>\n<li><strong>피해자 치료 영수증·진단서</strong></li>\n<li><strong>보험증권·자기차량손해 자료</strong></li>\n<li><strong>면허 적성검사 결과지</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사전 예측 가능성</strong> — 의학적 소견 핵심.</li>\n<li><strong>약 복용 중 운전</strong> — 운전 금지 약물 여부.</li>\n<li><strong>면허 결격 사유</strong> — 도로교통법 제82조.</li>\n<li><strong>피해자 합의</strong> — 양형 반영.</li>\n<li><strong>보험사 자기 부담금</strong> — 통상 20~30만원.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 분쟁조정 1670-3700</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의식상실·졸음 사고 책임',
        summary:
          '대법원 2019가단36369 영역 등에서 법원은 운전 중 의식상실이나 졸음으로 발생한 사고에서 운전자에게 사전 예측 가능성과 주의의무 위반이 있었는지 여부를 기준으로 책임 범위를 판단한 사례 흐름이 있습니다.',
        takeaway: '의료 사유 사고는 "사전 예측 가능성"이 분기점. 평소 진단·약 복용 이력 있으면 책임 인정 영역.',
      },
    ],
    faq: [
      {
        question: '기면증 진단 받고 약 먹는 중인데 운전해도 되나요?',
        answer:
          '<strong>일부 약물은 운전 금지·주의 대상.</strong> 처방의·복약지도 확인 필요.',
      },
      {
        question: '심정지로 의식 잃었으면 면책되나요?',
        answer:
          '<strong>사전 예측 불가 입증되면 면책 가능 영역.</strong> 의학적 소견서 핵심.',
      },
      {
        question: '면허 취소되나요?',
        answer:
          '<strong>도로교통법 제82조 결격 사유 해당 시 취소 영역입니다.</strong>',
      },
      {
        question: '동승자 치료비는 누가 부담하나요?',
        answer:
          '<strong>본인 차량 종합보험 + 자배책 보장 영역입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '졸음운전 형사', href: '/guide/traffic-accident/traffic-accident-drowsy-driving-criminal-process' },
      { label: '단독 사고 보험', href: '/guide/traffic-accident/traffic-accident-single-vehicle' },
      { label: '면허 결격사유', href: '/guide/dui/dui-license-disqualification' },
      { label: '업무상과실치상', href: '/guide/traffic-accident/traffic-accident-criminal-process' },
      { label: '자기차량손해 보험', href: '/guide/traffic-accident/traffic-accident-own-damage-insurance' },
    ],
  },
];
