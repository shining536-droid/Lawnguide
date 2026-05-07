import { SpokePage } from '../spoke-pages';

// batch58 traffic A — 3개:
// 1. 차로변경 방향지시등 미점등 추돌 과실비율
// 2. 음주운전 가해 vs 정상차량 혼합 과실 다툼
// 3. 뺑소니 가해자 도주 (외국인·언어장벽 포함) 대응
//
// 고유 존재 이유:
// 1. 이 페이지는 차로변경 중 방향지시등을 켜지 않은 가해 차량과 추돌·접촉 사고를 당한 운전자가 진로변경 의무 + 방향지시등 의무 + 과실비율 4단계 다툼 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 음주운전 가해 차량과 사고가 났지만 본인도 신호·차선 등 일부 과실 정황이 있는 운전자가 음주 가중 + 본인 과실 + 보험 약관 + 형사 절차 4단계 혼합과실 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 가해자가 도주하거나 외국인이라 언어 장벽으로 현장 대응이 어려운 사고 피해자가 도주차량 신원 확보 + 정부보장사업 + 무보험차상해특약 + 통역 지원 4단계 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58TrafficA: SpokePage[] = [
  // ─── 1. traffic-accident / traffic-accident-lane-change-no-signal-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-lane-change-no-signal-fault',
    keyword: '차로변경 방향지시등 미점등 사고 과실',
    questionKeyword: '옆 차가 깜빡이도 안 켜고 갑자기 끼어들어 추돌했어요. 과실비율은 어떻게 되나요?',
    ctaKeyword: '차로변경 추돌 과실 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '차로변경 깜빡이 미점등 추돌 — 과실 4단계 다툼 | 로앤가이드',
      description:
        '옆 차가 방향지시등 없이 끼어들다 추돌했다면 진로변경 의무 + 방향지시등 의무 + 과실비율 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"편도 3차로 도로의 2차로를 정상 주행 중이었는데, 1차로에서 옆 차가 깜빡이도 켜지 않고 갑자기 제 앞으로 끼어들어 추돌했어요. 상대방은 \'후행차 안전거리 미확보\'라며 70:30 정도를 주장하는데, 진로변경한 쪽이 더 큰 잘못 아닌가요?" 차로변경 중 추돌은 ① 도로교통법 제19조(진로변경 시 안전 의무) ② 제38조(방향지시등 점등 의무) ③ 손해보험협회 과실비율 인정기준 ④ 교통사고처리특례법 12대 중과실(백색실선 침범) 4가지 트랙으로 다툼이 갈리는 영역입니다. 일반적으로 진로변경 차량 70~80% : 직진 차량 20~30% 수준이지만, 방향지시등 미점등·백색실선 침범·갑작스러운 진입 정황이 결합되면 진로변경 차량 90~100%로 가중되는 사례도 있는 영역이에요. 본인 블랙박스·상대 차량 점등 상태 캡처가 골든타임입니다.</p>',
    sections: [
      {
        title: 'Q. 차로변경 추돌 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 진로변경 의무·방향지시등·과실비율·12대 중과실 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진로변경 의무 (도로교통법 제19조 제3항)</strong> — 차로를 변경하려는 차량은 그 변경하려는 방향으로 오고 있는 다른 차의 정상적 통행에 장애를 줄 우려가 있을 때 진로 변경 금지 영역.</li>\n<li><strong>② 방향지시등 의무 (도로교통법 제38조)</strong> — 차로 변경·좌우회전 시 방향지시등 점등 의무. 미점등 시 진로변경 차량 과실 가중 영역.</li>\n<li><strong>③ 과실비율 (손해보험협회 인정기준)</strong> — 일반 진로변경 추돌은 진로변경 70 : 직진 30. 방향지시등 미점등·갑작스러운 진입은 진로변경 90 : 직진 10까지 조정 사례.</li>\n<li><strong>④ 백색실선 침범 (12대 중과실)</strong> — 백색실선 구간에서 진로변경 시도하다 사고나면 종합보험 가입 특례 배제 영역. 형사 본안 절차 분기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 91도1746 사건은 "방향지시등을 켜지 않은 채 진로변경한 화물차"가 충돌의 주된 책임을 지고, 같은 방향 직진 차량의 과실은 인정하기 어렵다고 본 사례. 직진 차량은 옆 차의 갑작스러운 진입을 예측할 의무가 없는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 과실 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 보험사 통보 → 분쟁조정 → 보험 처리 → 형사·민사 분기 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인 블랙박스 영상 저장(특히 사고 직전 5~10초)·도로 CCTV 보존 요청·차선 종류(백색실선/점선) 확인 사진·상대 차량 방향지시등 점등 여부 캡처.</li>\n<li><strong>2단계 — 보험사 통보 (24시간 내)</strong> — 본인 보험사에 사고 신고. 진로변경·방향지시등 미점등 정황 명시. 상대방 보험사 통해 상대 블랙박스 확보 요청.</li>\n<li><strong>3단계 — 분쟁심의위 신청 (양측 합의 결렬 시)</strong> — 손해보험협회 자동차사고 과실비율 분쟁심의위. 무료. 30~60일 처리. knia.or.kr.</li>\n<li><strong>4단계 — 보험 처리 (1~3개월)</strong> — 과실비율 결정 후 대물·대인 산정. 본인 자기차량손해 처리 시 자기부담금 검토.</li>\n<li><strong>5단계 — 형사 분기 (인사사고 + 백색실선 침범 시)</strong> — 백색실선 진로변경은 12대 중과실로 종합보험 면책 배제. 합의 + 처벌불원서로 양형 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">차로변경 추돌 4가지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 영상 + 도로 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스 영상 (사고 직전 10초~사고 후 30초)</strong> — 상대 차량 진입 시점·점등 여부 확인 핵심.</li>\n<li><strong>상대 차량 블랙박스 (보험사 통해 확보)</strong> — 진로변경 시점·방향지시등 작동 데이터.</li>\n<li><strong>도로 CCTV 보존 요청</strong> — 시 교통정보센터·경찰. 보존기간 1~4주로 짧으니 즉시.</li>\n<li><strong>차선 종류 확인 사진</strong> — 사고 지점이 백색실선/점선인지. 12대 중과실 여부 결정.</li>\n<li><strong>차량 손상 사진·견적서</strong> — 충돌 부위·각도로 진로변경 정황 보강.</li>\n<li><strong>경찰 사고 사실확인원</strong> — 사건사고사실확인원 발급 (관할 경찰서).</li>\n<li><strong>분쟁심의위 신청서</strong> — 손해보험협회 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블랙박스 데이터는 사고 직후 메모리카드 분리 또는 파일 백업이 안전. 일정 시간 지나면 덮어쓰기로 사라지는 영역. 견인 또는 정비소 입고 전 백업 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방·보험사 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"후행차 안전거리 미확보" 주장 반박</strong> — 진로변경 차량은 \'안전한 거리에서만 진입\' 의무. 후행차 정상 속도·차간거리 자료로 반박. 갑작스러운 진입은 회피 가능성 한계 영역.</li>\n<li><strong>"방향지시등 켰다" 주장 반박</strong> — 본인 블랙박스 영상에 점등 미확인 시 미점등 추정. 상대 차량 차계부·블랙박스 데이터로 교차 검증.</li>\n<li><strong>"점선 구간이라 진로변경 가능" 주장 검토</strong> — 점선이라도 안전 의무 위반은 과실. 단, 백색실선이면 12대 중과실 분기.</li>\n<li><strong>"분쟁심의위 결정에 불복"</strong> — 분쟁심의위 결정은 보험사 합의 가능 영역. 불복 시 민사 손해배상 본안 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 분쟁심의위 1544-0114</strong> — 과실비율 분쟁조정 무료.</li>\n<li><strong>금융감독원 1332</strong> — 보험금·약관 분쟁.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>한국교통안전공단</strong> — 차량 결함·EDR 관련.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 방향지시등 미점등 진로변경 차량의 과실',
        summary:
          '대법원 91도1746 사건(대법원, 1991.09.10 선고)에서 법원은 방향지시등을 켜지 않은 채 2차선 도로의 1차선상에서 우회전하는 화물차와 같은 방향의 2차선상을 운행하는 승용차가 충돌해 발생한 교통사고처리특례법 위반 사건에서 승용차 운전자의 과실을 인정하기 어렵다고 판시한 사례입니다. 또한 대법원 2022도12175 사건(대법원, 2024.06.20 선고)은 진로변경을 금지하는 백색실선 침범이 교통사고처리특례법 처벌특례 배제사유인 \'통행금지 안전표지\'에 해당한다고 판시했습니다. 차로변경 추돌은 진로변경 차량의 안전 의무·방향지시등 의무가 핵심 쟁점이라, 직진 차량 과실이 제한적으로 평가될 여지가 있는 영역입니다.',
        takeaway: '차로변경 추돌은 방향지시등 미점등·백색실선 침범 정황이 결합되면 진로변경 차량 과실이 90~100%로 가중될 수 있는 영역이라, 본인 블랙박스에 상대 차량 점등 미확인이 기록되면 다툼 트랙이 강해지는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '깜빡이 안 켰는데도 진로변경 차량이 70%만 인정되나요?',
        answer:
          '<strong>방향지시등 미점등 정황 입증 시 80~100%로 조정 가능 영역입니다.</strong> 본인 블랙박스에 점등 미확인 시 분쟁심의위에 자료 제출. 갑작스러운 진입까지 결합되면 100% 사례도 있는 영역.',
      },
      {
        question: '백색실선 진로변경이면 가해자가 형사처벌 받나요?',
        answer:
          '<strong>백색실선 침범은 12대 중과실 중 하나로 종합보험 면책 배제 영역입니다.</strong> 인사사고 시 교통사고처리특례법 위반(치상) 절차. 합의 + 처벌불원서로 \'공소권 없음\' 가능한 영역.',
      },
      {
        question: '본인 블랙박스가 없으면 입증이 어렵나요?',
        answer:
          '<strong>도로 CCTV·상대 차량 블랙박스·목격자 진술이 대안 자료입니다.</strong> 시 교통정보센터·경찰을 통해 CCTV 보존 요청. 상대 차량 블랙박스는 보험사·법원 문서제출명령으로 확보 가능 영역.',
      },
      {
        question: '분쟁심의위 결정에 불복하면 어떻게 하나요?',
        answer:
          '<strong>분쟁심의위 결정은 양 보험사 합의 영역으로 불복 시 민사 손해배상 본안이 가능합니다.</strong> 청구액 3,000만원 이하는 소액심판. 손해사정사 자문(15~50만원) 검토.',
      },
      {
        question: '본인도 일부 과속이었으면 100% 못 받나요?',
        answer:
          '<strong>본인 과속·전방주시 부주의가 있으면 과실비율이 일부 조정될 수 있는 영역입니다.</strong> 다만 진로변경 차량의 갑작스러운 진입이 사고의 주된 원인이라면 본인 과실은 10~20% 수준으로 제한되는 사례.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '과실비율 다툼 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '차선 침범 형사처벌', href: '/guide/traffic-accident/traffic-accident-lane-violation-criminal-penalty' },
      { label: '블랙박스 증거 가이드', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 2. traffic-accident / traffic-accident-dui-offender-victim-mixed-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-dui-offender-victim-mixed-fault',
    keyword: '음주운전 가해 혼합 과실',
    questionKeyword: '음주운전 차량과 사고가 났는데 저도 신호위반이 있었어요. 과실비율은 어떻게 되나요?',
    ctaKeyword: '음주 가해 혼합 과실 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '음주운전 가해 차량 사고 — 혼합과실 4단계 점검 | 로앤가이드',
      description:
        '음주운전 차량과 사고났지만 본인도 일부 과실 정황이라면 음주 가중 + 본인 과실 + 보험 약관 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 교차로에서 신호가 막 황색으로 바뀌는 순간 진입했는데, 좌측에서 음주운전(혈중알코올농도 0.12%) 차량이 적색 신호로 진입해 추돌했어요. 본인이 부상을 입었지만 보험사는 \'본인도 황색 신호 진입 과실\'이라며 80:20 정도를 제시합니다." 음주운전 가해 차량과 본인 일부 과실이 결합된 혼합 사고는 ① 도로교통법 음주운전 가중(가해자 책임 비중 큰 영역) ② 본인 신호·차선·속도 정황 ③ 자동차보험 약관(음주면책·자기부담금) ④ 교통사고처리특례법 12대 중과실(음주) 분기 4가지 트랙으로 다툼이 갈리는 영역입니다. 음주운전은 일반적으로 가해자 과실 비중을 80~100%로 평가하지만, 본인의 명백한 신호위반 정황이 결합되면 70~90%로 조정되는 사례도 있는 영역이에요. 형사 절차와 민사 청구가 별도로 진행됩니다.</p>',
    sections: [
      {
        title: 'Q. 음주 가해 혼합 사고 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 음주 가중·본인 과실·보험 약관·12대 중과실 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 음주운전 가중 책임 (도로교통법 제44조 + 형법 업무상과실)</strong> — 음주운전은 도로교통법 명시 위반이라 가해자 과실 비중 우선 영역. 일반적으로 80~100% 평가.</li>\n<li><strong>② 본인 과실 정황</strong> — 신호위반·중앙선 침범·과속 등 본인 정황은 과실비율 조정 영역. 다만 음주 가해 비중이 우선이라 본인 과실은 10~20% 수준 사례.</li>\n<li><strong>③ 자동차보험 약관</strong> — 음주운전은 약관상 면책 항목. 가해자 보험은 대인1만 보장 + 사고부담금 1억 7,400만원(2024년 기준). 초과분 가해자 본인 부담 영역.</li>\n<li><strong>④ 12대 중과실 (음주운전)</strong> — 인사사고 + 음주운전은 종합보험 면책 배제. 형사 본안 + 양형 다툼 분기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2025도8137 사건은 운전 시점 혈중알코올농도 입증 기준을 다룬 사례. 음주 가해 차량의 정확한 음주 시점·농도 입증이 형사 절차의 핵심 쟁점이 되는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 혼합 사고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 신고 → 음주측정 → 보험 청구 → 형사 절차 → 민사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 신고 + 음주측정 요청 (즉시)</strong> — 112 신고 + 가해자 음주 의심 시 측정 요청. 측정 거부 시 도로교통법 가중 적용 영역.</li>\n<li><strong>2단계 — 자료 보존</strong> — 본인 블랙박스·CCTV·진단서·치료비 영수증·경찰 사건사고사실확인원.</li>\n<li><strong>3단계 — 보험 청구 (1~3개월)</strong> — 가해자 대인배상으로 치료비 청구. 가해자 미가입·면책 시 본인 자기신체사고 또는 무보험차상해특약 청구 영역.</li>\n<li><strong>4단계 — 형사 절차 (가해자 음주 + 인사사고)</strong> — 12대 중과실 + 도로교통법 위반(음주). 형사 본안 진행. 피해자 합의 시 처벌불원서로 양형 영향.</li>\n<li><strong>5단계 — 민사 손해배상 청구</strong> — 보험금 부족분 + 위자료 청구. 음주운전은 위자료 가중 사례 다수. 변호사 자문 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 가해 혼합 과실 4가지 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 음주 입증 자료 + 본인 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>가해자 음주측정 결과지</strong> — 경찰 음주측정 + 채혈 데이터.</li>\n<li><strong>본인 블랙박스·CCTV</strong> — 신호 상태·진입 시점·속도.</li>\n<li><strong>경찰 사건사고사실확인원</strong> — 사고 정황·음주 정황 명시.</li>\n<li><strong>진단서·치료비 영수증</strong> — 손해액 산정 핵심.</li>\n<li><strong>가해자 보험 가입증서</strong> — 면책 조항 확인.</li>\n<li><strong>본인 보험 약관</strong> — 무보험차상해특약·자기신체사고 보장 범위.</li>\n<li><strong>일실수익 자료</strong> — 사업자등록·근로계약·소득증빙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가해자 음주가 명백하면 위자료 가중 사례 다수. 일반 위자료 + 음주운전 가중분이 합쳐져 청구 가능한 영역. 변호사 자문비도 손해배상 청구 가능 사례.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·가해자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인 신호위반으로 50:50" 주장 반박</strong> — 음주운전 가중 책임이 우선이라 본인 과실은 10~30%로 제한되는 사례 다수. 가해자 음주 정도·당시 정황 자료가 핵심.</li>\n<li><strong>"음주측정 시점이 사고 후 시간이 지나 정확하지 않다" 가해자 주장</strong> — 위드마크 공식 적용 가능 영역(2024도11906). 다만 위드마크 공식만으로 입증이 항상 가능한 것은 아닌 영역.</li>\n<li><strong>"가해자 사고부담금 한도 초과로 변제 불가" 대응</strong> — 가해자 본인 자산 가압류·민사 본안 청구 트랙. 회수 어려운 사례 多.</li>\n<li><strong>본인 무보험차상해특약 청구 검토</strong> — 가해자 음주로 보험 면책 시 본인 보험사 청구 가능. 약관 확인.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>금융감독원 1332</strong> — 보험금 분쟁.</li>\n<li><strong>손해보험협회 1544-0114</strong> — 과실비율 분쟁.</li>\n<li><strong>한국범죄피해자지원센터 1577-1295</strong> — 음주 인사사고 피해자 지원.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 시점 혈중알코올농도 입증 기준',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 운전 시점과 혈중알코올농도 측정 시점 사이에 시간 간격이 있고 그때가 혈중알코올농도의 상승기로 보인다는 사정만으로 언제나 실제 운전 시점의 혈중알코올농도가 처벌기준치를 초과한다는 점에 대한 증명이 불가능하다고 볼 수 없다고 판시했습니다. 또한 대법원 2024도11906 사건(대법원, 2025.07.18 선고)은 위드마크 공식 적용 시 그 추정의 합리적 기준을 다루었습니다. 음주 가해 사고는 음주측정 시점·농도 입증이 형사 절차의 핵심이고, 입증 강도에 따라 양형 다툼이 갈리는 영역입니다.',
        takeaway: '음주 가해 차량과 본인 일부 과실 결합 사고는 음주 가중 + 본인 과실 + 보험 면책 + 12대 중과실 결합 영역이라, 음주측정 결과·블랙박스·CCTV를 정리하면 4가지 트랙 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '제가 신호위반이었으면 음주 가해자보다 책임이 큰가요?',
        answer:
          '<strong>음주운전 가중 책임이 우선이라 본인 과실은 10~30% 수준으로 제한되는 사례 다수입니다.</strong> 다만 본인이 명백한 적색 신호위반·중앙선 침범 시 30~40%까지 조정 가능 영역.',
      },
      {
        question: '가해자가 음주측정 거부했으면 어떻게 되나요?',
        answer:
          '<strong>음주측정 거부는 도로교통법 위반으로 음주운전과 동일한 처벌 대상 영역입니다.</strong> 사고 후 측정 거부 시 위드마크 공식·정황 증거로 입증 가능 사례.',
      },
      {
        question: '가해자 보험 사고부담금 한도 초과면 누가 부담하나요?',
        answer:
          '<strong>한도 초과분은 가해자 본인 부담 영역이지만 회수가 어려운 사례 다수입니다.</strong> 본인 무보험차상해특약·자기신체사고로 보충. 가해자 자산 가압류·민사 본안 검토.',
      },
      {
        question: '음주 가해자에게 위자료를 더 받을 수 있나요?',
        answer:
          '<strong>음주운전은 위자료 가중 사례가 많은 영역입니다.</strong> 일반 위자료 외 음주운전 가중분 별도 청구 가능. 다만 사고 정도·후유증·가해자 자력에 따라 결과가 달라지는 영역.',
      },
      {
        question: '형사 합의를 안 하면 가해자가 어떻게 되나요?',
        answer:
          '<strong>음주 + 인사사고는 12대 중과실로 종합보험 면책 배제 영역입니다.</strong> 합의 없으면 실형 선고 사례 다수. 합의 + 처벌불원서로 양형 영향. 다만 합의 압박에 굴복하지 않고 적정 합의금 검토 가능.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: 'DUI 음주측정 시점', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
      { label: '12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '음주측정 거부 위드마크', href: '/guide/traffic-accident/traffic-accident-breath-test-refusal-widmark-estimation' },
      { label: '무보험차 피해자 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-driver-victim' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 3. traffic-accident / traffic-accident-foreign-offender-flee-language-barrier ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-foreign-offender-flee-language-barrier',
    keyword: '뺑소니 외국인 가해자 대응',
    questionKeyword: '외국인 가해자가 사고 직후 도주했어요. 보상은 어떻게 받을 수 있나요?',
    ctaKeyword: '뺑소니 외국인 가해자 대응 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '뺑소니·외국인 가해자 도주 — 4단계 보상 트랙 | 로앤가이드',
      description:
        '가해자가 도주하거나 외국인이라 언어 장벽이 큰 사고라면 정부보장사업 + 무보험차상해특약 + 통역 지원 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길 횡단보도에서 외국인 운전자가 신호위반으로 충돌하고 그대로 도주했어요. 차량 번호판 일부만 본 상태에서 경찰에 신고했는데, 보상은 어떻게 받을 수 있는지 막막합니다." 가해자 도주(뺑소니) 또는 외국인 가해자로 언어 장벽이 큰 사고는 ① 자동차손해배상보장법 정부보장사업(국토부 위탁) ② 본인 자동차보험 무보험차상해특약 ③ 외국인 가해자 신원·보험 확인 + 통역 지원 ④ 형사 절차(특정범죄가중처벌법 도주치상) 4가지 트랙으로 보상 경로가 갈리는 영역입니다. 정부보장사업은 가해자 미상·무보험 시 책임보험 한도 내 피해 보상이 가능한 영역이고, 무보험차상해특약은 본인 보험 약관에 따라 한도 내 추가 보상이 가능한 영역이에요. 차량 번호·CCTV·목격자 진술 보존이 골든타임입니다.</p>',
    sections: [
      {
        title: 'Q. 뺑소니·외국인 가해자 4가지 보상 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 정부보장사업·무보험차상해·외국인 가해자 신원 확인·형사 절차 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정부보장사업 (자동차손해배상보장법 제30조)</strong> — 가해자 불명·무보험·도주 시 정부가 책임보험 한도(대인1 1억 5천만원·대인2 추가)로 보상하는 영역. 손해보험협회·국토부 위탁.</li>\n<li><strong>② 본인 자동차보험 무보험차상해특약</strong> — 본인 보험에 가입돼 있다면 한도 내 추가 보상 영역. 1인당 2억~5억원 한도 약관 다양.</li>\n<li><strong>③ 외국인 가해자 신원·보험 확인</strong> — 외국인이라도 자동차보험 가입 의무. 차량 등록번호로 보험사 조회. 미가입·도주 시 정부보장사업 분기.</li>\n<li><strong>④ 형사 절차 (특정범죄가중처벌법 도주치상·도주치사)</strong> — 사고 후 도주는 일반 인사사고보다 형량 가중. 1년 이상 유기징역 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2008다93964 사건은 뺑소니·무보험차 사고의 정부보장사업 보상 기준을 다룬 사례. 가해자 신원 확보 노력 + 보상 청구 절차 진행 시 두 트랙 동시 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 도주 사고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고 → 신원 확보 → 보장사업 청구 → 무보험특약 청구 → 형사 절차 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 신고 + 자료 확보</strong> — 차량 번호판(일부라도)·차량 색상·모델·CCTV 위치·목격자 연락처. 본인 블랙박스 백업.</li>\n<li><strong>2단계 — 가해자 신원 확보 노력 (1~4주)</strong> — 경찰 수사 협조. 도로 CCTV·통행료 자료. 외국인이면 출입국 기록 협조. 부분 번호판도 차량등록정보로 추적 가능 영역.</li>\n<li><strong>3단계 — 정부보장사업 청구 (가해자 불명·도주 시 3년 내)</strong> — 손해보험협회 정부보장사업 신청. 진단서·치료비·경찰 사건사고사실확인원 구비. 책임보험 한도 내 보상.</li>\n<li><strong>4단계 — 무보험차상해특약 청구</strong> — 본인 보험사에 신청. 약관상 도주차량 포함 여부 확인. 정부보장사업과 중복 청구 가능 영역(중복 보상 조정).</li>\n<li><strong>5단계 — 형사 절차 (가해자 검거 시)</strong> — 도주치상은 특정범죄가중처벌법 위반. 합의 + 처벌불원서로 양형 영향. 외국인 가해자라도 국내법 적용 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">뺑소니·외국인 가해자 4가지 보상 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신원 추적 자료 + 보상 청구 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건사고사실확인원</strong> — 도주 정황 명시. 정부보장사업 필수.</li>\n<li><strong>본인 블랙박스·CCTV</strong> — 차량 번호·색상·모델·운전자 인상착의.</li>\n<li><strong>목격자 진술서·연락처</strong> — 가해자 신원·도주 방향.</li>\n<li><strong>진단서·치료비 영수증·일실수익 자료</strong> — 손해액 산정.</li>\n<li><strong>본인 자동차보험 약관</strong> — 무보험차상해특약 가입 여부·한도.</li>\n<li><strong>정부보장사업 신청서</strong> — 손해보험협회 양식. knia.or.kr.</li>\n<li><strong>외국인 가해자 정보 (검거 시)</strong> — 여권·운전면허·체류자격·보험 가입증서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국인 가해자 검거 시 통역이 필요한 영역. 경찰 통역 지원 + 다국어 콜센터(다누리콜센터 1577-1366) 활용 가능. 무료 통역 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보상 절차 자주 쟁점과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"가해자 신원 확인 안 됐다" 보상 거부 대응</strong> — 가해자 불명도 정부보장사업 대상 영역. 신원 확인 노력 자료 제출 + 경찰 수사 진행 자료.</li>\n<li><strong>정부보장사업 vs 무보험차상해특약 중복</strong> — 두 트랙 동시 청구 가능하지만 중복 보상 조정 영역. 보상 한도가 더 큰 쪽 우선 청구 검토.</li>\n<li><strong>외국인 가해자 출국 우려</strong> — 검거 시 출국정지 요청 가능 영역. 경찰·검찰 협조. 보석 시 보증금 + 출국정지 조건 검토.</li>\n<li><strong>외국인 보험 미가입</strong> — 외국인이라도 국내 운행 시 자동차보험 의무. 미가입 시 자배법 위반 + 정부보장사업 분기.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 정부보장사업 1544-0114</strong> — 뺑소니·무보험 보상.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>한국범죄피해자지원센터 1577-1295</strong> — 인사사고 피해자 지원·상담.</li>\n<li><strong>다누리콜센터 1577-1366</strong> — 다국어 통역 지원 (외국인 가해자 사고 시).</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도주치상 가해자의 형사 책임 가중',
        summary:
          '서울서부지법 2023노1354 사건(서울서부지법, 2024.08.22 선고)에서 법원은 차량 운전자가 유턴 가능 구역이 아닌 곳에서 유턴하다가 횡단보도 부근 오토바이 운전자와 충돌한 후 도주한 사안에 관해 특정범죄가중처벌등에관한법률 위반(도주치상)·도로교통법 위반(사고후미조치) 죄책을 다룬 사례입니다. 또한 대법원 2008다93964 사건(대법원, 2009.03.26 선고)은 뺑소니·무보험차 사고에 관해 자동차손해배상보장법 정부보장사업 보상금 지급 기준 및 무보험차상해특약 보험금 지급 범위에 관해 판시했습니다. 가해자 도주 사고는 형사 가중 책임 + 정부보장사업 + 무보험차상해특약 결합 영역으로 평가될 여지가 있는 영역입니다.',
        takeaway: '뺑소니·외국인 가해자 도주 사고는 정부보장사업 + 무보험차상해특약 + 형사 가중 책임 결합 영역이라, 차량 번호 일부·CCTV·목격자 진술을 즉시 확보하면 4가지 트랙 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '가해자 차량 번호 일부만 봤어요. 보상받을 수 있나요?',
        answer:
          '<strong>차량 등록정보 + 도로 CCTV·통행료 자료로 신원 추적 가능 영역입니다.</strong> 신원 확보 안 돼도 정부보장사업 청구 가능. 손해보험협회 1544-0114 신청.',
      },
      {
        question: '정부보장사업 보상 한도는 얼마인가요?',
        answer:
          '<strong>책임보험 한도 기준으로 대인1 1억 5천만원·대인2 추가 보상 영역입니다(2024 기준).</strong> 한도 초과분은 본인 무보험차상해특약·민사 청구 검토.',
      },
      {
        question: '외국인 가해자가 본국으로 돌아가면 어떻게 하나요?',
        answer:
          '<strong>검거 시 즉시 출국정지 요청 가능 영역입니다.</strong> 형사 절차는 국내법 적용. 본국 도주 시 인터폴 적색수배 + 국제형사사법공조 트랙. 시간이 걸리는 영역.',
      },
      {
        question: '무보험차상해특약 가입돼 있는지 어떻게 확인하나요?',
        answer:
          '<strong>본인 자동차보험 약관·증권에서 확인 가능합니다.</strong> 보험사 콜센터 또는 마이페이지. 일반 종합보험에 기본 또는 옵션 포함되는 사례 多. 한도 1~5억원 약관 다양.',
      },
      {
        question: '외국인 가해자와 합의는 어떻게 진행하나요?',
        answer:
          '<strong>다누리콜센터 1577-1366 통역 지원 + 외국인 가해자 보험사 통한 합의가 일반적 영역입니다.</strong> 합의서는 한국어 + 가해자 모국어 병기 권장. 영사관 통역 협조도 가능 영역.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '뺑소니 가해자 신원 확인', href: '/guide/traffic-accident/traffic-accident-hit-and-run-identify-witness' },
      { label: '뺑소니 가해자 식별', href: '/guide/traffic-accident/traffic-accident-hit-run-culprit-identification' },
      { label: '무보험차 피해자 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-driver-victim' },
      { label: '정부보장사업 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-victim-government-fund' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },
];
