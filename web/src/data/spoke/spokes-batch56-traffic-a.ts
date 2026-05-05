import { SpokePage } from '../spoke-pages';

// batch56 traffic A — 3개:
// 1. 자율주행 모드 사고 책임
// 2. 자전거도로 보행자 진입 충돌
// 3. 비보호 좌회전 추돌 과실비율
//
// 고유 존재 이유:
// 1. 이 페이지는 자율주행 보조시스템(레벨 2~3) 작동 중 사고가 난 운전자가 자동차손해배상보장법 + 제조물책임법 + 운전자 주의의무 결합 4단계 다툼 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 자전거도로에서 자전거가 갑자기 진입한 보행자와 충돌해 부상을 입힌 운전자가 자전거도로 통행우선 + 전방주시의무 + 형사 다툼 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 비보호 좌회전 신호에서 마주오는 직진 차량과 추돌한 운전자가 비보호 좌회전 과실 80~100% 다툼 + 직진 차량 과속 정황 4가지 다툼 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56TrafficA: SpokePage[] = [
  // ─── 1. traffic-accident / traffic-accident-autonomous-mode-liability ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-autonomous-mode-liability',
    keyword: '자율주행 보조시스템 사고 책임',
    questionKeyword: '테슬라 오토파일럿 작동 중 사고가 났어요. 운전자 책임인가요, 제조사 책임인가요?',
    ctaKeyword: '자율주행 사고 책임 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '자율주행 모드 사고 책임 — 4단계 다툼 트랙 | 로앤가이드',
      description:
        '자율주행 보조시스템 작동 중 사고가 났다면 운전자 주의의무 + 자배법 + 제조물책임법 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"테슬라 오토파일럿(레벨 2 자율주행 보조시스템)을 켜고 고속도로를 주행 중이었는데, 갑자기 차선 인식 오류로 가드레일에 충돌했어요. 보험사는 \'운전자 주의의무 위반\'이라며 보험금을 거부합니다." 자율주행 보조시스템 사고는 ① 자동차손해배상보장법(자배법) 운행자 책임 ② 운전자 주의의무 ③ 제조물책임법 결함 책임 ④ 자동차보험 약관 4가지 트랙으로 책임이 갈리는 영역입니다. 현재 국내 출시 차량의 자율주행은 대부분 레벨 2(보조시스템)로 운전자 주의의무가 그대로 적용되어, 운전자 주된 책임이지만 시스템 결함이 입증되면 제조사·딜러 공동책임 트랙도 결합 가능한 영역이에요. 사고 직후 차량 데이터(EDR·블랙박스·차량 로그)·도로 CCTV 보존이 골든타임입니다.</p>',
    sections: [
      {
        title: 'Q. 자율주행 사고 4가지 책임 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 운행자 책임·운전자 과실·제조물책임·보험 약관 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자배법 운행자 책임 (제3조)</strong> — 자기를 위해 자동차를 운행한 자(운전자·소유자)는 그 운행으로 다른 사람을 사상시킨 경우 책임. 자율주행 모드라도 운행자 책임 유지 영역.</li>\n<li><strong>② 운전자 주의의무 (도로교통법 + 형법 업무상과실)</strong> — 레벨 2 자율주행은 운전자 상시 감독 의무 유지. 핸들 미파지·전방미주시는 주의의무 위반 영역.</li>\n<li><strong>③ 제조물책임법 결함 책임</strong> — 차량 시스템 결함이 사고 원인이라면 제조사 공동책임. 결함 입증은 사고 데이터·EDR·차량 로그 분석 핵심.</li>\n<li><strong>④ 자동차보험 약관 책임</strong> — 자배법 책임은 책임보험으로 커버되지만, 운전자 고의·중과실은 약관상 면책 영역. 자율주행 모드 인정 여부는 약관·실무 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 현재 국내 도로교통법은 자율주행을 \'운전자 보조\'로 보고 있어 운전자 주된 책임. 다만 차량 시스템 결함이 명확하면 제조사 공동책임 트랙으로 분기 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사고 책임 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 사고 분석 → 보험 청구 → 형사 절차 → 제조사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 자료 즉시 보존</strong> — EDR(사고기록장치) 데이터·블랙박스·차량 자율주행 로그·도로 CCTV·사고 직후 사진. 차량 자체 데이터는 제조사가 보유하므로 보존명령·서면 요청 즉시.</li>\n<li><strong>2단계 — 사고 원인 분석 (1~2주)</strong> — 자율주행 작동 여부·작동 시간·차량 응답 시점·운전자 핸들 파지 시점. 전문가 자문이 효과적인 영역.</li>\n<li><strong>3단계 — 보험 청구 + 약관 다툼 (1~3개월)</strong> — 보험사 \'주의의무 위반\' 거부 시 자료 추가 + 분쟁조정원(금감원) 신청.</li>\n<li><strong>4단계 — 형사 절차 (인사사고 시)</strong> — 인사사고는 교통사고처리특례법 + 형법 업무상과실 적용. 운전자 주의의무 다툼.</li>\n<li><strong>5단계 — 제조물책임 청구 (시스템 결함 시)</strong> — 결함 입증되면 제조사·딜러 공동 손해배상 청구. 민사 트랙. 시효 10년.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자율주행 사고 4가지 책임 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 차량 데이터 + 운전 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>EDR 데이터 (사고기록장치)</strong> — 사고 직전 5초 운전·시스템 데이터.</li>\n<li><strong>차량 자율주행 로그</strong> — 제조사 측 데이터. 서면 요청·법원 보전명령.</li>\n<li><strong>블랙박스 영상</strong> — 차량 외부·내부 (있다면).</li>\n<li><strong>도로 CCTV·교통정보센터 자료</strong> — 사고 시점 도로 상황.</li>\n<li><strong>차량 매뉴얼·자율주행 등급</strong> — 시스템 한계·운전자 의무 규정.</li>\n<li><strong>운전자 행동 자료</strong> — 핸들 파지·전방주시 정황.</li>\n<li><strong>제조사 결함 정황 자료</strong> — 같은 차종 유사 사고 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 차종의 자율주행 결함으로 인한 사고 사례가 NHTSA(미국) 또는 국토부에 등록돼 있다면 결함 입증의 강한 정황 자료. 같은 차종 리콜 이력도 검색 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·제조사 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"운전자 핸들 미파지로 면책" 주장 반박</strong> — 자율주행 작동 중 운전자 의무 정도는 차량 매뉴얼·등급에 따라 다른 영역. 핸들 파지 의무가 명확하지 않으면 면책 어려운 사례.</li>\n<li><strong>"시스템 결함 없다" 주장 반박</strong> — 같은 차종 유사 사고·리콜 이력·전문가 분석 자료로 결함 정황 입증 영역.</li>\n<li><strong>"보험 약관상 자율주행 면책" 주장 검토</strong> — 약관상 면책 조항이 명확하지 않으면 약관규제법으로 무효 다툼 가능 영역.</li>\n<li><strong>형사·민사 분리 진행</strong> — 형사 업무상과실 + 민사 손해배상은 별도 절차. 형사 합의 전 민사 자료 보존 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>금융감독원 분쟁조정 1332</strong> — 보험금 분쟁조정.</li>\n<li><strong>한국소비자원 1372</strong> — 자동차 결함 분쟁.</li>\n<li><strong>국토교통부 자동차 리콜센터</strong> — 자율주행 결함 신고.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운전자 업무상과실치상 책임의 입증',
        summary:
          '대법원 2010도3436 사건(대법원, 2012.03.15 선고)에서 법원은 일반도로에서 후진하다가 사고를 낸 운전자에 대한 교통사고처리특례법 적용 여부에 관해 운전자의 주의의무 위반 정도를 분석한 사례입니다. 또한 대법원 2024도1856 사건(대법원, 2024.12.26 선고)은 과실범에서도 공동정범이 성립할 수 있고 의사 연락이나 주의의무 위반에 대한 공동 인식이 필요하다고 판시했습니다. 자율주행 사고에서도 운전자 주의의무 위반과 시스템 결함이 결합된 경우 책임 분담 다툼 트랙이 열리는 영역입니다.',
        takeaway: '자율주행 보조시스템 사고는 운전자 주의의무 + 시스템 결함 + 보험 약관 + 제조물책임 결합 영역으로, 사고 데이터·차량 로그·CCTV를 즉시 보존하면 4가지 트랙 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '자율주행 모드 켜고 사고나면 운전자 책임 0%인가요?',
        answer:
          '<strong>현재 국내 출시 차량 대부분이 레벨 2이라 운전자 주된 책임 영역입니다.</strong> 다만 시스템 결함이 입증되면 제조사 공동책임으로 분기. 운전자 책임 비율은 자료 분석에 따라 달라집니다.',
      },
      {
        question: '보험사가 "자율주행은 약관 면책"이라며 보험금 거부합니다',
        answer:
          '<strong>약관 면책 조항의 구체성·명확성 다툼 가능 영역입니다.</strong> 약관에 자율주행 면책이 명시되지 않았다면 약관규제법으로 무효 다툼. 금감원 1332 분쟁조정 트랙 검토.',
      },
      {
        question: '제조사에 어떻게 결함을 입증하나요?',
        answer:
          '<strong>차량 자체 데이터 + 같은 차종 유사 사고 + 전문가 분석이 핵심입니다.</strong> 제조사 데이터는 보전명령·민사 문서제출명령으로 확보 가능. 같은 차종 리콜·NHTSA 자료도 결함 정황.',
      },
      {
        question: '인사사고면 형사처벌 받나요?',
        answer:
          '<strong>업무상과실치상으로 형사 절차가 진행될 가능성이 있는 영역입니다.</strong> 다만 자율주행 작동 + 결함 입증 시 과실 정도 다툼 영역. 합의 + 자료 입증으로 양형 다툼 가능.',
      },
      {
        question: 'EDR 데이터를 어떻게 받나요?',
        answer:
          '<strong>사고 직후 차량을 견인 보관하면서 데이터 보존 요청 가능합니다.</strong> 제조사·정비공장에 EDR 추출 의뢰. 보험사 손해사정사도 EDR 분석 가능. 시간이 지나면 덮어쓰기 영역.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '블랙박스 데이터 복구 분쟁', href: '/guide/traffic-accident/traffic-accident-dashcam-data-recovery-insurance-dispute' },
      { label: '급발진 추정 사고 대응', href: '/guide/traffic-accident/traffic-accident-sudden-acceleration-pedal-misoperation' },
      { label: '운전자 과실 부재 입증', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '교통사고 합의 시 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ─── 2. traffic-accident / traffic-accident-bike-lane-pedestrian-collision ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bike-lane-pedestrian-collision',
    keyword: '자전거도로 보행자 진입 충돌',
    questionKeyword: '자전거도로를 정상 주행 중인데 갑자기 보행자가 들어와서 부딪쳤어요. 책임은 누구에게 있나요?',
    ctaKeyword: '자전거 보행자 충돌 책임 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '자전거도로 보행자 진입 충돌 — 4가지 다툼 포인트 | 로앤가이드',
      description:
        '자전거도로에서 자전거가 갑자기 진입한 보행자와 충돌했다면 자전거 통행우선 + 전방주시의무 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한강 자전거도로를 정상 주행하고 있었는데, 갑자기 보행자가 자전거도로 안으로 들어와서 부딪쳤어요. 보행자는 다리에 부상을 입었고 경찰에서 \'업무상과실치상\'으로 입건한다고 합니다." 자전거도로에서 자전거-보행자 충돌은 ① 자전거도로 통행우선 (도로교통법 제13조의2) ② 자전거 운전자 전방주시의무 ③ 보행자 침입 정황 ④ 형사 처벌 (교통사고처리특례법) 4가지 트랙으로 다툼이 갈리는 영역입니다. 자전거가 도로교통법상 \'차\'에 해당해 운전자에게 주의의무가 있지만, 보행자의 자전거도로 침입 정황이 결합되면 과실비율이 분리되는 영역이에요. 사고 직후 블랙박스·CCTV 보존이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 자전거도로 충돌 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 자전거 통행우선·전방주시·보행자 침입·과실비율 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자전거도로 통행우선 (도로교통법 제13조의2)</strong> — 자전거도로에서 자전거가 우선 통행권. 보행자는 부득이한 경우만 통행 가능 영역.</li>\n<li><strong>② 자전거 운전자 전방주시의무</strong> — 자전거도 \'차\'에 해당해 도로교통법상 안전운전 의무. 전방주시 + 안전속도 + 충돌회피 조치 의무 영역.</li>\n<li><strong>③ 보행자 침입 정황</strong> — 보행자가 갑자기 자전거도로에 진입한 정황은 과실비율 다툼 핵심. 블랙박스·CCTV에 보행자 진입 시점·자전거 거리·속도 기록 필수.</li>\n<li><strong>④ 과실비율 (자전거 70~90% vs 보행자 10~30%)</strong> — 일반 사례 기준이지만 보행자 갑작스러운 침입·자전거 적정 속도 결합 시 자전거 50% 이하로 감경 사례도 있는 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 울산지법 2019고단1124 등 자전거 운전자 형사 책임 사례가 있는 영역이라, 과실비율 다툼 + 형사 합의 + 보험 처리 결합 트랙으로 검토할 수 있는 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사고 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 보험 처리 → 형사 합의 → 과실비율 다툼 → 본안 절차 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인 자전거 블랙박스·도로 CCTV·목격자 진술·사고 직후 사진·자전거 속도 데이터(GPS 앱).</li>\n<li><strong>2단계 — 보험 처리 (자전거 보험 / 일상생활배상책임보험)</strong> — 자전거 보험 가입돼 있다면 보험사 사고 신고. 가족 일상생활배상책임보험도 적용 가능 사례.</li>\n<li><strong>3단계 — 형사 합의 (인사사고 시 1~2주 내)</strong> — 보행자 부상 정도에 따라 합의금 결정. 합의 시 처벌불원서 + 공탁 검토.</li>\n<li><strong>4단계 — 과실비율 다툼</strong> — 보행자 침입·자전거 적정 속도·시야 정황으로 과실비율 다툼. 분쟁조정원·민사 검토.</li>\n<li><strong>5단계 — 형사 본안 (불합의 시)</strong> — 교통사고처리특례법 위반(치상) 절차. 양형 다툼 + 자료 입증.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 보행자 충돌 4가지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 자료 + 본인 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>자전거 블랙박스·헬멧캠</strong> — 사고 직전 영상 핵심.</li>\n<li><strong>도로 CCTV 자료 보존 요청</strong> — 한강·자치구 CCTV 보존 1주~1개월.</li>\n<li><strong>목격자 연락처·진술</strong> — 보행자 침입 시점 입증.</li>\n<li><strong>본인 자전거 GPS·앱 데이터</strong> — 속도·위치 데이터.</li>\n<li><strong>사고 현장 사진</strong> — 자전거도로 표지·보행자 위치.</li>\n<li><strong>보험 가입증서</strong> — 자전거 보험·일상생활배상책임.</li>\n<li><strong>피해자 진단서·치료비 영수증</strong> — 합의금 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV 보존기간이 1~2주로 짧은 사례가 많아 사고 직후 즉시 자치구·시설관리공단에 보존 요청. 경찰을 통해서도 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보행자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"자전거가 빠르게 달려 사고" 주장 반박</strong> — 자전거 GPS 데이터·블랙박스로 실제 속도 입증 영역. 적정 속도(20~25km/h) 입증되면 과실비율 다툼.</li>\n<li><strong>"보행자가 통행 가능 구역" 주장 대응</strong> — 자전거도로는 자전거 우선이라 보행자는 부득이한 경우만 통행. 자전거도로 표지·구간 자료가 핵심.</li>\n<li><strong>"전방주시 부주의" 주장 반박</strong> — 보행자 갑작스러운 침입은 회피 가능성 한계 영역. 사고 직전 1~2초 내 침입은 회피 불가능 정황.</li>\n<li><strong>형사 합의 시 처벌불원서 확보</strong> — 인사사고는 처벌불원서로 \'공소권 없음\' 가능 영역. 합의금 + 처벌불원서 묶어서 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사·민사 무료 상담.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁.</li>\n<li><strong>한국소비자원 1372</strong> — 분쟁조정.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자전거 운전자의 전방주시의무 위반과 형사 책임',
        summary:
          '울산지법 2019고단1124 사건(울산지법, 2019.08.14 선고)에서 법원은 자전거도로에서 동행 자전거 운전자의 갑작스러운 진입으로 충돌해 사망 사고를 낸 사안에서, 자전거 운전자에게도 전방주시의무·안전운전의무가 적용되어 교통사고처리특례법 위반(치사) 죄책이 인정된다고 판시했습니다. 자전거-보행자 충돌도 자전거 운전자 주의의무 위반이 입증되면 형사 책임이 성립할 수 있는 영역으로 평가될 여지가 있다는 시사점이 있습니다.',
        takeaway: '자전거도로 보행자 충돌은 자전거 운전자 주의의무 + 보행자 침입 정황 결합 영역이라, 블랙박스·CCTV·GPS 데이터를 정리하면 과실비율 다툼 + 형사 합의 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '자전거도 형사처벌 받나요?',
        answer:
          '<strong>자전거도 도로교통법상 \'차\'라 형사처벌 대상입니다.</strong> 인사사고 시 교통사고처리특례법 위반(치상) 절차 진행 가능. 합의 + 처벌불원서로 \'공소권 없음\' 가능한 영역.',
      },
      {
        question: '자전거 보험 없으면 합의금을 어떻게 처리하나요?',
        answer:
          '<strong>가족 일상생활배상책임보험·신용카드 부가보험 적용 가능 사례가 있습니다.</strong> 본인 명의 또는 가족 명의 보험 약관 검토. 미가입 시 자기부담 영역.',
      },
      {
        question: '보행자가 무리한 합의금 요구합니다',
        answer:
          '<strong>과실비율 다툼 + 합리적 합의금 제안이 핵심입니다.</strong> 보행자 침입 정황 자료 제시 + 진단서·치료비 영수증 기준 합의금 산정. 무리한 요구 시 공탁 트랙 검토.',
      },
      {
        question: '경찰이 본인을 가해자로 지목하고 있어요',
        answer:
          '<strong>자전거 우선 통행권 + 보행자 침입 정황 자료 제출이 핵심입니다.</strong> 변호인 동석 + 진술 정리. 자전거도로 표지·CCTV·GPS 데이터로 과실비율 다툼.',
      },
      {
        question: 'CCTV가 없는 구간에서 사고났어요',
        answer:
          '<strong>본인 블랙박스·헬멧캠·목격자 진술이 핵심 자료입니다.</strong> 헬멧캠·자전거용 액션캠은 평소 부착해두면 결정적 자료가 되는 사례 다수. 사고 직후 사진 + GPS 앱 데이터도 보강.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거 보행자 충돌 합의', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-settlement' },
      { label: '자전거-자동차 사고 책임', href: '/guide/traffic-accident/traffic-accident-bicycle-car-damage' },
      { label: '자전거 보행자 과실표', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-fault-table' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '자전거 보행자 책임범위', href: '/guide/traffic-accident/traffic-accident-bicycle-hits-pedestrian-liability' },
    ],
  },

  // ─── 3. traffic-accident / traffic-accident-protected-left-rear-end ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-protected-left-rear-end',
    keyword: '비보호 좌회전 추돌 과실비율',
    questionKeyword: '비보호 좌회전 신호에서 마주오는 직진차와 추돌했어요. 과실비율은 얼마인가요?',
    ctaKeyword: '비보호 좌회전 추돌 과실 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '비보호 좌회전 추돌 — 과실비율 4가지 다툼 | 로앤가이드',
      description:
        '비보호 좌회전 신호에서 마주오는 직진차와 추돌했다면 비보호 좌회전 과실 80~100% + 직진차 과속 정황 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"녹색 신호에서 비보호 좌회전 표시를 보고 좌회전을 시도했는데, 마주오던 직진차와 추돌했어요. 보험사는 \'비보호 좌회전 80%\' 과실이라며 합의를 권하는데, 직진차도 속도가 너무 빨랐다는 생각이 듭니다." 비보호 좌회전 추돌은 일반적으로 ① 좌회전 차량 80~100% 과실 ② 직진 차량 0~20% 과실로 평가되는 영역이지만, 직진 차량이 과속·전방주시 부주의·신호위반 정황이 결합되면 과실비율 분담이 가능한 영역입니다. 도로교통법 제25조 제1항·도로교통공단 과실비율 인정기준에 따라 사례별 다툼이 가능한 영역이에요. 블랙박스·CCTV·교통정보센터 자료 보존이 골든타임입니다.</p>',
    sections: [
      {
        title: 'Q. 비보호 좌회전 추돌 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 좌회전 우선순위·직진 과속·신호 정황·과실비율 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 좌회전 차량 의무 (도로교통법 제25조)</strong> — 비보호 좌회전은 직진 차량에 진로를 양보할 의무. 좌회전 차량 기본 80~100% 과실 영역.</li>\n<li><strong>② 직진 차량 과속 (도로교통법 제17조)</strong> — 직진 차량이 제한속도 20km 이상 초과했다면 과실비율 10~30% 추가 영역. 블랙박스·도로 CCTV 속도 분석 핵심.</li>\n<li><strong>③ 신호 정황</strong> — 직진 차량이 황색 신호·적색 신호 진입했다면 직진 차량 과실 비율 큰 영역. 신호등 영상 자료가 결정적.</li>\n<li><strong>④ 전방주시 부주의</strong> — 직진 차량이 충분한 거리에서 좌회전 차량을 인식할 수 있었다면 회피 의무 위반 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도로교통공단 과실비율 인정기준 차량과실 47번(녹색신호 비보호좌회전 vs 녹색신호 직진)은 일반적으로 좌회전 70%·직진 30%이지만, 사례별 정황으로 분담 변동 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 과실비율 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 분쟁조정 → 보험 처리 → 민사 청구 → 형사 절차 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인 블랙박스·상대방 블랙박스(요청)·교통정보센터 CCTV·신호등 영상·사고 현장 사진.</li>\n<li><strong>2단계 — 분쟁조정 신청 (1~2주)</strong> — 손해보험협회 \'자동차사고 과실비율 분쟁심의위원회\' 무료. 양쪽 보험사 합의 결렬 시.</li>\n<li><strong>3단계 — 보험 처리 (1~3개월)</strong> — 과실비율 결정 후 보험금 산정. 본인 부담 부분 자동차종합보험 자기차량 손해 처리.</li>\n<li><strong>4단계 — 민사 청구 (분쟁조정 결렬 시)</strong> — 손해사정사 자문 + 민사 손해배상. 청구액 무관 지급명령, 3,000만원 이하 소액심판.</li>\n<li><strong>5단계 — 형사 절차 (인사사고 시)</strong> — 인사사고는 교통사고처리특례법 적용. 합의 + 처벌불원서로 \'공소권 없음\' 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">비보호 좌회전 추돌 과실비율 4가지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 자료 + 직진차 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 블랙박스</strong> — 좌회전 시점·신호 상태.</li>\n<li><strong>상대방 블랙박스 (보험사 통해 요청)</strong> — 직진 시점·속도.</li>\n<li><strong>교통정보센터 CCTV</strong> — 사거리 전체 영상.</li>\n<li><strong>신호등 영상·신호 주기 자료</strong> — 신호 상태 입증.</li>\n<li><strong>사고 현장 사진</strong> — 차량 위치·도로 표지.</li>\n<li><strong>차량 손상 정황</strong> — 충돌 부위·각도 (속도 추정 자료).</li>\n<li><strong>분쟁조정 신청서</strong> — 손해보험협회 분쟁심의위.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 블랙박스에 직진 차량 속도 추정 가능한 영상이 있다면 결정적. 도로 표지·차선 폭 기준 속도 환산이 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·상대방 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"비보호 좌회전 100%" 주장 반박</strong> — 직진 차량 과속·신호위반·전방주시 부주의 결합 시 과실비율 분담 가능 영역.</li>\n<li><strong>"과속 입증 자료 부족" 주장 대응</strong> — 블랙박스 영상 분석 + 차량 손상 정도로 속도 추정 가능. 손해사정사·전문가 자문 검토.</li>\n<li><strong>"황색 신호 진입" 주장 입증</strong> — 신호등 영상 + 본인 블랙박스 시간 동기화로 입증. 신호 영상은 시 교통정보센터 또는 경찰을 통해 확보.</li>\n<li><strong>인사사고 시 형사 합의 우선</strong> — 인사사고는 교통사고처리특례법 + 형법 적용. 합의 + 처벌불원서로 형사 종결 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 분쟁심의위 (knia.or.kr)</strong> — 과실비율 분쟁조정 무료.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁조정.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 좌회전 차량의 직진차 양보의무와 과실 분담',
        summary:
          '대법원 96도1049 사건(대법원, 1996.06.11 선고)에서 법원은 운전자의 중앙선 침범 사실에 대해 운전자를 비난할 수 없는 객관적 사정이 있는 경우 운전자 과실이 인정되지 않는다고 판시한 사례입니다. 또한 도로교통공단 과실비율 인정기준은 비보호 좌회전 차량 vs 직진 차량의 과실비율을 사례별로 정하고 있어, 직진 차량 과속·신호위반·전방주시 부주의 결합 시 과실비율이 분담되는 영역으로 평가될 여지가 있습니다.',
        takeaway: '비보호 좌회전 추돌은 좌회전 차량 기본 과실이 크지만 직진 차량 과속·신호 정황 결합 시 과실비율 분담이 가능한 영역이라, 블랙박스·CCTV·신호 영상을 정리하면 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '비보호 좌회전이라 무조건 100% 과실인가요?',
        answer:
          '<strong>일반적으로 70~100% 과실이지만 직진차 정황으로 분담 가능 영역입니다.</strong> 직진차 과속·신호위반·전방주시 부주의 결합 시 30%까지 분담 가능. 자료 입증이 핵심.',
      },
      {
        question: '직진차 속도를 어떻게 입증하나요?',
        answer:
          '<strong>블랙박스 영상 분석 + 차량 손상 정도가 핵심입니다.</strong> 손해사정사·교통사고분석 전문가 자문(15~50만원) 활용 가능. 도로 표지 기준 속도 환산도 영역.',
      },
      {
        question: '분쟁조정심의위는 어떻게 신청하나요?',
        answer:
          '<strong>손해보험협회 홈페이지에서 무료 신청 가능합니다.</strong> 양쪽 보험사 가입자라면 자동 회부. 평균 30~60일 처리. 결정 효력은 양쪽 보험사 합의 가능 영역.',
      },
      {
        question: '인사사고면 형사처벌 받나요?',
        answer:
          '<strong>인사사고는 교통사고처리특례법 위반(치상) 절차 진행 가능합니다.</strong> 12대 중과실(신호위반·중앙선 침범 등)이 아니면 종합보험 가입 시 면책 영역. 합의 + 처벌불원서.',
      },
      {
        question: '본인이 직진차 운전자인데 부상 입었어요. 어떻게 청구하나요?',
        answer:
          '<strong>좌회전 차량 보험사에 대인배상 + 본인 보험사 자기신체사고 동시 청구 가능합니다.</strong> 진단서·치료비 영수증·일실수익 자료 보강. 합의 전 추가 진료·후유증 검토 영역.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교차로 좌회전 사고', href: '/guide/traffic-accident/traffic-accident-intersection-left-turn' },
      { label: 'U턴 마주오는 차 사고', href: '/guide/traffic-accident/traffic-accident-uturn-oncoming-fault' },
      { label: '신호위반 형사 책임', href: '/guide/traffic-accident/traffic-accident-signal-violation-criminal-impact' },
      { label: '과실비율 다툼 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '신호위반 과실 협상', href: '/guide/traffic-accident/traffic-accident-signal-violation-fault-negotiation' },
    ],
  },
];
