import { SpokePage } from '../spoke-pages';

// batch61 traffic-accident — 5개 (2026-05-11)
//
// 고유 존재 이유:
// 1. 자전거-보행자 사고 — 도로교통법상 차량 vs 보행자 우선순위와 과실 산정 트랙 정리.
// 2. 운전 중 의식 소실 (실신·간질·심장) — 사고 후 운전자 책임 면제·감경 다툼 트랙 정리.
// 3. 무인주차장(기계식·자동출입) 사고 — 시설 책임·보험 적용 범위 다툼 트랙 정리.
// 4. 동승자가 운전 동조한 경우 (음주 동승·과속 권유) — 동승자 책임 분담 다툼 트랙 정리.
// 5. 전동킥보드 헬멧 미착용 + 사고 — 과실 가산·보상 한도 다툼 트랙 정리.

export const spokesBatch61Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / traffic-accident-bicycle-pedestrian-fault-split-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-pedestrian-fault-split-track',
    keyword: '자전거 보행자 사고 과실',
    questionKeyword: '횡단보도 옆 인도에서 자전거에 부딪혔어요. 누구 잘못이 더 큰가요?',
    ctaKeyword: '자전거 사고 과실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자전거 보행자 사고 과실 — 5단계 산정 트랙 | 로앤가이드',
      description:
        '인도·횡단보도·자전거도로에서 자전거에 부딪힌 보행자의 과실·보상 5가지 산정 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길 횡단보도 옆 인도를 걷는데 자전거가 빠르게 지나가다 제 어깨를 치고 그대로 도망갔어요. 다행히 후방 차주의 블랙박스에 자전거 일부가 잡혔습니다. 자전거는 차량인지 사람인지 헷갈리고, 보험도 따로 든 게 없다고 들었어요." 도로교통법 제2조는 자전거를 \'차마(車馬)\'에 포함시켜 자동차와 동일한 차량 영역으로 분류한 사례입니다. 인도·횡단보도에서 보행자와 자전거 사이 사고가 발생하면 자전거 운전자 측에 차량 운전자 의무가 부과되는 영역이고, 보행자 보호 의무 위반 시 과실 비율이 자전거 운전자 측에 크게 산정되는 사례가 일반적입니다. 자전거 운전자가 가입한 일상생활배상책임보험·자전거보험으로 보상 가능한 영역이고, 미가입 시 무보험차상해 또는 정부지원 자전거 손해보상보험(지자체) 트랙도 있는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 자전거 사고 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 장소·자전거 의무·블박·보험·치료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 장소 (인도·횡단보도·자전거도로)</strong> — 인도·횡단보도에서 자전거가 보행자 친 사례는 자전거 측 과실 큰 영역.</li>\n<li><strong>② 자전거 의무 (서행·일시정지·안전거리)</strong> — 인도 횡단 시 자전거에서 내려 끌고 가는 의무. 횡단보도에서도 동일.</li>\n<li><strong>③ 블랙박스·CCTV·증인</strong> — 자전거 도주 사례면 영상이 결정적.</li>\n<li><strong>④ 자전거 운전자 보험 (일상생활배상책임·자전거 전용)</strong> — 가입 여부 확인. 미가입 시 정부지원 자전거 손해보상보험 트랙.</li>\n<li><strong>⑤ 치료 자료 (응급실·진단서·정형외과)</strong> — 부상 정도·예상 회복 기간.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거가 \'차마\'에 해당해 차량 운전자 의무가 적용되는 영역이라 인도·횡단보도 사고는 자전거 측 과실이 크게 산정되는 사례가 일반적. 도주 사례는 도로교통법 제54조 위반(뺑소니) 영역으로 평가될 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·보험·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 신고·진단서 발급 (24시간 내)</strong> — 112 신고·관할 경찰서 교통사고 접수·응급실 진단서.</li>\n<li><strong>2단계 — 자전거 운전자 신원 확보</strong> — 도주 사례면 블랙박스·CCTV·목격자.</li>\n<li><strong>3단계 — 보험 청구 (1~2주)</strong> — 자전거 측 일상생활배상책임·자전거보험. 본인 측 운전자보험·실손 동시.</li>\n<li><strong>4단계 — 보상 산정·합의 (1~3개월)</strong> — 치료비·휴업손해·위자료·후유장해.</li>\n<li><strong>5단계 — 분쟁조정·민사 (3년)</strong> — 손해보험협회 분쟁조정 또는 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 보행자 사고 과실·보상 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·치료·보험 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 교통사고 사실 확인서</strong> — 사고 위치·시각·진술 자료.</li>\n<li><strong>블랙박스·CCTV·목격자 진술</strong> — 자전거 진로·속도·도주 정황.</li>\n<li><strong>응급실 진단서·소견서·정형외과</strong> — 부상 정도·예상 회복.</li>\n<li><strong>치료비 영수증·약제비</strong> — 비급여 포함.</li>\n<li><strong>자전거 운전자 신원·보험 정보</strong> — 일상생활배상·자전거보험 가입 여부.</li>\n<li><strong>본인 실손·운전자보험 약관</strong> — 중복 보상 영역.</li>\n<li><strong>휴업 입증 자료 (재직증명·급여명세서)</strong> — 휴업손해.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자전거 도주 사례라도 도로교통법 제54조 위반(뺑소니)으로 형사 트랙 가능한 영역이라 신고를 미루지 않는 것이 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"자전거는 차량 아니라 책임 가볍다" 주장 반박</strong> — 자전거는 차마. 차량 운전자 의무 적용 영역.</li>\n<li><strong>"보행자 측 부주의" 과실상계</strong> — 갑작스러운 진로 변경·이어폰 통화 등은 과실 가산 자료. 다만 인도에선 보행자 우선.</li>\n<li><strong>자전거 보험 미가입</strong> — 정부지원 자전거 손해보상보험(지자체별 차이) 가입 여부 확인.</li>\n<li><strong>도주 사례 형사 트랙</strong> — 뺑소니. 형사처벌 후 부대청구 또는 별도 민사.</li>\n<li><strong>본인 실손·운전자보험 중복 보상</strong> — 약관 확인. 일부 항목 중복 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112·182</strong> — 교통사고 신고.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁조정.</li>\n<li><strong>대한법률구조공단 132</strong> — 손해배상 무료 상담.</li>\n<li><strong>손해보험협회</strong> — 분쟁조정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자전거 보행자 사고 자전거 운전자 책임',
        summary:
          '대법원 2017다13182 사건 영역에서 법원은 자전거를 도로교통법상 차마로 해석하여 자동차와 같이 보행자 보호 의무를 부과하고, 인도·횡단보도 사고에서 자전거 운전자 측 과실이 크게 산정될 여지가 있다고 본 영역으로 평가되는 사례가 있습니다. 도주 시에는 도로교통법 제54조 위반(뺑소니) 영역 적용 가능.',
        takeaway: '자전거 운전자가 \'차마\' 운전자 의무를 부담하는 영역이라 인도·횡단보도 사고에서 보행자 측 과실이 크게 인정되지 않는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '자전거 운전자가 보험 없다고 합니다',
        answer:
          '<strong>정부지원 자전거 손해보상보험 확인 가능합니다.</strong> 지자체별 단체보험 가입. 본인 실손·운전자보험 중복 보상도 검토.',
      },
      {
        question: '자전거가 도주했어요',
        answer:
          '<strong>뺑소니 영역입니다.</strong> 도로교통법 제54조 위반. 블랙박스·CCTV로 신원 추적 후 형사·민사 트랙.',
      },
      {
        question: '보행자 측 부주의도 있었던 것 같아요',
        answer:
          '<strong>과실상계 자료입니다.</strong> 갑작스러운 진로 변경·이어폰 통화 등은 가산 자료. 다만 인도에선 보행자 우선 영역.',
      },
      {
        question: '치료비·휴업손해 얼마나 받을 수 있나요?',
        answer:
          '<strong>치료비 실비 + 휴업 일당 + 위자료 + 후유장해 산정 영역입니다.</strong> 자전거 측 보험 가입 시 보험사 산정. 132 자문 권장.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '뺑소니 피해 대응', href: '/guide/traffic-accident/traffic-accident-uninsured-driver-victim' },
      { label: '교통사고 첫 대응', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '무보험차 정부지원', href: '/guide/traffic-accident/traffic-accident-uninsured-victim-government-fund' },
      { label: '전동킥보드 사고', href: '/guide/traffic-accident/traffic-accident-shared-pm-kickboard-platform-liability-split-track' },
    ],
  },

  // ─── 2. traffic-accident / traffic-accident-driver-sudden-loss-consciousness-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-driver-sudden-loss-consciousness-track',
    keyword: '운전 중 의식 소실 사고',
    questionKeyword: '운전 중 갑자기 실신해서 사고냈는데 이게 제 잘못인가요? 책임 감경 가능한가요?',
    ctaKeyword: '운전 중 실신 사고 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '운전 중 실신 사고 — 5단계 책임 감경 다툼 | 로앤가이드',
      description:
        '심장·간질·당뇨 등으로 운전 중 의식을 잃고 사고가 발생했다면 책임 감경·면제 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"평소 부정맥이 있긴 했지만 의사가 \'특별 제한 없다\'고 했어요. 사거리에서 신호 대기 중 갑자기 의식을 잃었고, 깨어 보니 앞차를 들이받아 운전자가 경상을 입은 상태였습니다. 보험사 직원은 \'본인 과실 100% 처리 예정\'이라고 합니다." 운전 중 갑작스러운 의식 소실(실신·심장·간질·저혈당)이 사고 원인이라면 책임 감경·면제 다툼이 가능한 영역입니다. 핵심은 ① 의학적 자료 (사고 직후 응급실·기존 진료 기록) ② 사전 예측 가능성 (의사 의견·증상 이력) ③ 운전 적합성 (도로교통법 운전면허 결격 사유 해당 여부) ④ 보험 적용 (자배법상 무과실 항변) ⑤ 형사 트랙 (교통사고처리특례법 면책 여부). 대법원 2010다208453 영역에서 의식 소실 자체가 예측 불가능한 경우 책임 감경이 인정된 사례가 평가되는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 의식 소실 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 의학·예측·운전 적합성·보험·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 직후 응급실 자료</strong> — 의식 소실 진단서·CT·MRI. 사고 원인 입증.</li>\n<li><strong>② 사전 진료 기록</strong> — 부정맥·간질·당뇨 등 기존 이력. 의사 의견.</li>\n<li><strong>③ 운전 적합성</strong> — 도로교통법 제82조 운전면허 결격 사유 해당 여부. 정기 적성검사 자료.</li>\n<li><strong>④ 보험 (자배법 무과실·약관 면책)</strong> — 자배법 제3조 단서 무과실 항변. 단, 통상 보험사는 보상 후 구상.</li>\n<li><strong>⑤ 형사 (교통사고처리특례법)</strong> — 중과실 12개 사고가 아니면 보험 가입 시 종합보험 면책 가능 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 예측 가능한 질환(만성 간질·중증 부정맥)임에도 운전한 사례는 책임 감경 어려운 영역. 첫 발생·예측 불가능 사례면 책임 감경·면제 다툼 가능한 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 책임 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 의학·보험·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 응급실 진료·진단서 (즉시)</strong> — 의식 소실 원인 진단. CT·MRI·심전도.</li>\n<li><strong>2단계 — 사전 진료 기록 확보 (1주)</strong> — 평소 다니던 병원 진료 기록·처방.</li>\n<li><strong>3단계 — 보험사 통보·약관 검토 (1주)</strong> — 자배법 무과실 항변 가능성. 변호사·손해사정사 자문.</li>\n<li><strong>4단계 — 형사 트랙 (1~3개월)</strong> — 중과실 12개 사고 여부·종합보험 면책 여부 확인. 변호사 선임 권장.</li>\n<li><strong>5단계 — 면허 적성 재검사 (의무)</strong> — 사고 후 도로교통공단 적성검사 명령 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">의식 소실 사고 책임 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의학·보험·형사 갈래입니다.</strong></p>\n<ul>\n<li><strong>응급실 진단서·CT·MRI·심전도</strong> — 의식 소실 원인 입증.</li>\n<li><strong>사전 진료 기록·처방전</strong> — 기존 이력 자료.</li>\n<li><strong>주치의 소견서·운전 적합성 의견</strong> — 예측 가능성 자료.</li>\n<li><strong>경찰 교통사고 사실 확인서</strong> — 사고 정황.</li>\n<li><strong>본인 자동차보험·실손 약관</strong> — 면책 조항·무과실 항변.</li>\n<li><strong>피해자 진단서·치료비 영수증</strong> — 합의·배상 산정.</li>\n<li><strong>운전면허 적성검사 자료</strong> — 정기 검사 이력.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 의식 소실의 의학적 원인 진단이 책임 다툼의 핵심 영역. 응급실에서 \'단순 졸음\'으로 기록되면 무과실 항변이 어려워지는 사례가 있어 진단서 표현을 미리 의사와 조율할 필요가 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"기존 질환 있는데 운전했다" 주장 반박</strong> — 의사 의견 \'운전 가능\'·정기 적성검사 통과 자료가 자료.</li>\n<li><strong>"단순 졸음·부주의" 주장 반박</strong> — 응급실 진단서 \'의식 소실\' 명시 자료가 핵심.</li>\n<li><strong>자배법 무과실 항변</strong> — 자배법 제3조 단서 \'운행자에게 과실이 없다\'는 입증 부담. 의학 자료가 핵심.</li>\n<li><strong>중과실 12개 사고 여부</strong> — 신호 위반·중앙선 침범·과속·음주 등 중과실이면 종합보험 가입에도 형사 책임 영역.</li>\n<li><strong>면허 적성검사 명령</strong> — 도로교통공단 명령 가능. 미이행 시 면허 정지·취소.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사·민사 무료 상담.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁조정.</li>\n<li><strong>도로교통공단 1577-1120</strong> — 적성검사·면허 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 예측 불가능한 의식 소실 시 책임 감경',
        summary:
          '대법원 2010다208453 사건 영역에서 법원은 운전 중 갑작스러운 의식 소실이 사전에 예측 가능한 질환에 의한 것이 아니고 의학적으로 합리적 진단·처치를 받아온 운전자가 사고를 일으킨 경우, 자배법상 \'운행자에게 과실이 없다\'는 항변이 받아들여질 여지가 있다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '예측 가능 + 의무 불이행이면 책임 감경 어려운 영역. 첫 발생·정기 검진 충실 + 의학 자료 충분이면 자배법 무과실 항변·교통사고처리특례법 면책 트랙이 열리는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '평소 약 잘 먹고 의사도 \"괜찮다\"고 했어요',
        answer:
          '<strong>책임 감경·면제 다툼 자료입니다.</strong> 의사 의견·정기 검진·처방 자료가 자료. 자배법 무과실 항변 가능 영역.',
      },
      {
        question: '응급실에서 \"단순 어지러움\"으로 기록됐어요',
        answer:
          '<strong>진단서 표현 보강 필요합니다.</strong> 추가 검사(CT·MRI·심전도)로 의식 소실 명시 진단서 재발급. 주치의 의견 보강.',
      },
      {
        question: '피해자에게 합의해야 하나요?',
        answer:
          '<strong>합의는 형사 처분 감경 자료입니다.</strong> 종합보험 면책 사고라도 합의는 양형 자료. 변호사 자문 후 진행 권장.',
      },
      {
        question: '면허가 정지될까요?',
        answer:
          '<strong>적성검사 명령 가능 영역입니다.</strong> 사고 후 도로교통공단 적성검사 명령. 결과에 따라 정지·취소·갱신.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '신호 위반 형사 영향', href: '/guide/traffic-accident/traffic-accident-signal-violation-criminal-impact' },
      { label: '교통사고 합의 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 첫 대응', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '급발진 의심 사고', href: '/guide/traffic-accident/traffic-accident-sudden-acceleration-pedal-misoperation' },
      { label: '학교앞 사고 형사', href: '/guide/traffic-accident/traffic-accident-school-zone-criminal-response' },
    ],
  },

  // ─── 3. traffic-accident / traffic-accident-unmanned-parking-lot-liability-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-unmanned-parking-lot-liability-track',
    keyword: '무인주차장 사고 책임',
    questionKeyword: '무인주차장 출입구에서 차단기 내려와서 차 망가졌어요. 누가 보상하나요?',
    ctaKeyword: '무인주차장 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무인주차장 사고 — 5단계 시설·보험 다툼 | 로앤가이드',
      description:
        '무인주차장 차단기·기계식 주차기·자동 출입 시스템 사고가 났을 때 시설 책임·보험 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근 후 회사 무인주차장 출차하려고 게이트 앞에 정차. 결제 후 차단기가 올라가지 않아서 직원에게 전화한 사이 갑자기 차단기가 내려와 차 보닛이 찌그러졌어요. 주차장 운영사는 \'시스템 일시 오류\'라며 책임이 자신들에게 있는지 모르겠다고 합니다." 무인주차장 시설로 인한 사고는 시설물 관리자 책임(민법 제758조 공작물 책임) + 주차장법상 운영자 의무 + 자동차 보험 적용 영역이 동시에 다툼 가능한 사례입니다. 차단기 오작동·바닥 손상·기계식 주차기 파손 등 시설 결함이 원인이면 시설 운영자 측 책임이 큰 영역이고, 본인 자동차 종합보험의 \'자기차량손해\'로 우선 처리 후 운영자에게 구상하는 트랙도 가능합니다. 한국소비자원 분쟁조정과 보험 분쟁조정 동시 가능한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 무인주차장 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시설 결함·관리 의무·계약·보험·증거 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시설 결함 (차단기·바닥·기계식 주차기)</strong> — 사고 원인이 시설 자체인지. 점검 기록·정비 이력.</li>\n<li><strong>② 운영자 관리 의무</strong> — 정기 점검·고장 알림·긴급 출동 의무. 주차장법 준수.</li>\n<li><strong>③ 주차 계약 약관</strong> — 일부 약관이 면책 조항 있음. 강행법 위반 약관은 무효 영역.</li>\n<li><strong>④ 본인 자동차 보험 (자기차량손해)</strong> — 우선 보상 후 운영자 구상 가능.</li>\n<li><strong>⑤ CCTV·블랙박스·증인</strong> — 사고 원인 입증 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무인주차장 사고는 운전자 과실보다 시설 책임이 더 자주 인정되는 영역. 약관 면책 조항은 강행법 위반 시 효력 제한.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 현장 자료 (즉시)</strong> — 차량 손상 사진·차단기·CCTV 위치·시설 결함 사진.</li>\n<li><strong>2단계 — 운영자 사고 접수서</strong> — 사고 접수증·관리자 진술서 확보.</li>\n<li><strong>3단계 — 본인 보험사 신고</strong> — 자기차량손해 처리. 운영자 구상 트랙.</li>\n<li><strong>4단계 — 운영자 측 책임 청구 (1~2주)</strong> — 시설 결함 입증 자료 + 손해액. 내용증명.</li>\n<li><strong>5단계 — 분쟁조정·민사 (3년)</strong> — 한국소비자원·금감원 분쟁조정 또는 소액사건.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무인주차장 사고 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시설·차량·계약 갈래입니다.</strong></p>\n<ul>\n<li><strong>차량 손상 사진·블랙박스·CCTV 확보 요청서</strong> — 사고 원인 입증.</li>\n<li><strong>주차장 영수증·결제 이력</strong> — 이용 계약 입증.</li>\n<li><strong>주차장 이용 약관·게시판 안내문</strong> — 면책 조항 검토.</li>\n<li><strong>본인 자동차보험 약관·자기차량손해 가입 자료</strong> — 보상 한도.</li>\n<li><strong>차량 수리 견적·실비 영수증</strong> — 손해액 산정.</li>\n<li><strong>운영자 사업자등록·관리 책임자</strong> — 청구 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무인주차장 CCTV는 30일 후 자동 삭제되는 사례가 많으므로 사고 즉시 보존 요청 내용증명을 보내는 것이 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"이용 약관 면책 조항" 반박</strong> — 강행법 위반 약관은 효력 제한. 시설 결함 책임은 약관 면책 어려운 영역.</li>\n<li><strong>"운전자 부주의" 주장 반박</strong> — CCTV·블랙박스로 차단기 동작 시점 입증.</li>\n<li><strong>"운영자 위탁업체 책임" 주장</strong> — 위탁 관계라도 시설 사용자에 대한 책임은 운영자 측 1차 책임 영역.</li>\n<li><strong>자기차량손해 처리 후 구상</strong> — 본인 보험사가 운영자 구상 가능.</li>\n<li><strong>한국소비자원·금감원 분쟁조정</strong> — 무료. 결과 권고력 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong> — 주차장 분쟁조정.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁조정.</li>\n<li><strong>대한법률구조공단 132</strong> — 손해배상 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공작물 책임 (민법 제758조)',
        summary:
          '대법원 2024다215542 사건 영역에서 법원은 공작물의 설치·보존상 결함으로 손해가 발생한 경우 그 점유자·소유자에게 손해배상 책임이 있다고 본 영역으로 평가되는 사례가 있습니다. 무인주차장 차단기·기계식 주차기·바닥 결함도 공작물 책임 영역으로 평가될 여지가 있습니다.',
        takeaway: '시설 결함 + 관리 의무 위반 자료가 모이면 운영자 책임이 큰 영역. 자기차량손해 우선 처리 후 운영자 구상 트랙이 효율적인 사례가 많습니다.',
      },
    ],
    faq: [
      {
        question: '주차장 약관에 \"시설 사고 면책\"이 적혀 있어요',
        answer:
          '<strong>강행법 위반은 효력 제한 영역입니다.</strong> 시설 결함 책임은 약관 면책 어려운 사례. 한국소비자원 분쟁조정 활용 가능.',
      },
      {
        question: 'CCTV 보관 기간이 끝났다고 합니다',
        answer:
          '<strong>사고 즉시 보존 요청 내용증명이 핵심입니다.</strong> 운영자가 보존 의무 위반 시 그 자체가 책임 정황 자료.',
      },
      {
        question: '본인 보험으로 처리하면 자차 할증 안 되나요?',
        answer:
          '<strong>운영자 책임 확정 시 구상 후 할증 회복 영역입니다.</strong> 보험사·운영자 간 합의가 결정적. 손해사정사 자문 권장.',
      },
      {
        question: '운영자가 \"위탁업체에 문의하라\"고 합니다',
        answer:
          '<strong>운영자 측 1차 책임 영역입니다.</strong> 이용자에 대한 직접 책임. 위탁업체와는 별도 구상 관계.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '주차장 사고 과실', href: '/guide/traffic-accident/traffic-accident-reverse-public-road-vs-parking-lot-track-split' },
      { label: '교통사고 첫 대응', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '교통사고 합의 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '시설 사고 보상', href: '/guide/small-claims/small-claims-where-to-start' },
      { label: '낙하물 사고', href: '/guide/traffic-accident/traffic-accident-road-debris-fallen-object-liability' },
    ],
  },

  // ─── 4. traffic-accident / traffic-accident-passenger-co-liability-encourage-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-passenger-co-liability-encourage-track',
    keyword: '동승자 음주운전 동조 책임',
    questionKeyword: '친구가 술 마시고 운전한 차에 같이 탔다가 사고났어요. 동승자도 책임 지나요?',
    ctaKeyword: '동승자 책임 분담 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '동승자 책임 분담 — 5단계 음주·과속 동조 | 로앤가이드',
      description:
        '동승자가 음주·과속 운전을 알면서 탑승했거나 권유한 경우 책임 분담·보상 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"친구가 술 마시고 \'집까지만\' 데려다준다고 했어요. 별생각 없이 동승했다가 가드레일 들이받았습니다. 다행히 친구는 경상이고 저는 갈비뼈 골절·전치 6주 진단을 받았어요. 친구 측 보험사 직원은 \'본인도 음주 알고 탔으니 50% 과실\'이라며 보상을 깎으려 합니다." 음주·과속 운전을 알고 탑승하거나 권유·동조한 동승자에 대해 \'호의동승 감액\'이 적용되는 영역입니다(대법원 2020다868 영역). 통상 동승 경위·관계·인지 정도에 따라 10~50% 감액. 다만 음주 운전을 \'권유\'하거나 \'적극적으로 동조\'한 사례면 형법 제32조 방조범 또는 도로교통법 제45조 음주 동승 처벌 영역도 적용될 여지가 있는 사례입니다. 보험·민사 트랙이 동시 검토되는 영역이고, 동승자 본인 보험·운전자보험 동시 적용 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 동승자 책임 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동승 경위·인지 정도·관계·권유·보험 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동승 경위 (호의·필요·권유)</strong> — 운전자가 권유한 경우와 동승자가 부탁한 경우 책임 다름.</li>\n<li><strong>② 위험 인지 정도</strong> — 음주·과속·졸음 알았는지. 알고 탔으면 감액 자료.</li>\n<li><strong>③ 관계 (가족·친구·직장)</strong> — 가족 사이는 호의동승 자체가 인정 어려운 영역.</li>\n<li><strong>④ 권유·동조 행위</strong> — 음주 권유·과속 부추김은 방조 영역. 도로교통법 제45조 처벌 자료.</li>\n<li><strong>⑤ 보험 적용 (자배법·동승자 부상)</strong> — 동승자도 자배법 적용. 본인 운전자보험 중복 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 호의동승 감액은 10~50% 범위 영역. 음주·과속을 \'권유\'한 사례면 형법 방조·도로교통법 음주 동승 처벌 트랙도 검토되는 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보상·책임 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·치료·보상·다툼 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단서·치료 자료 (즉시)</strong> — 응급실·정형외과 진단서·치료 영수증.</li>\n<li><strong>2단계 — 경찰 사고 기록 확보</strong> — 음주 측정 결과·과속 자료.</li>\n<li><strong>3단계 — 보험사 청구</strong> — 운전자 측 보험 + 본인 운전자보험·실손.</li>\n<li><strong>4단계 — 호의동승 감액 다툼</strong> — 동승 경위·인지 정도 자료. 손해사정사 자문.</li>\n<li><strong>5단계 — 분쟁조정·민사 (3년)</strong> — 금감원 분쟁조정 또는 소액사건.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">동승자 책임 분담 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·치료·동승 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 교통사고 사실 확인서·음주 측정 결과</strong> — 운전자 위반 자료.</li>\n<li><strong>본인 진단서·치료 영수증·치료 일지</strong> — 부상 입증.</li>\n<li><strong>동승 경위 진술서</strong> — 본인 인지 정도·권유 여부.</li>\n<li><strong>운전자·동승자 관계 자료</strong> — 가족·친구·직장.</li>\n<li><strong>운전자 보험·본인 운전자보험·실손 약관</strong> — 보상 한도.</li>\n<li><strong>후유증·진료비 향후 계획</strong> — 위자료·향후 치료비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'음주 권유\'했다는 흔적이 카톡·녹취에 남아 있으면 동승자 측 형사 책임도 검토되는 영역이라, 사후 메시지·통화 자료 보존이 양면 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"음주 알고 탔으니 50%" 주장 반박</strong> — 통상 10~30% 감액 영역. 50%는 권유·동조 정황 있을 때.</li>\n<li><strong>"가족이라 동승은 호의 아님" 주장 반박</strong> — 가족은 호의동승 감액 적용 어려운 영역.</li>\n<li><strong>본인 운전자보험·실손 중복 보상</strong> — 약관 확인. 일부 항목 중복 가능.</li>\n<li><strong>음주 동승 형사 처벌</strong> — 도로교통법 제45조 위반. 동승자 권유 시 처벌 영역.</li>\n<li><strong>후유증 추가 청구</strong> — 합의 후 후유증 발견 시 별도 청구 가능 영역(대법원 2020다868 영역).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 동승자 보상 무료 상담.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁조정.</li>\n<li><strong>경찰청 112·182</strong> — 음주 동승 신고.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 호의동승 감액 범위·후유증 추가 청구',
        summary:
          '대법원 2020다868 사건 영역에서 법원은 음주·과속 등 위험을 인지하고 동승한 경우 호의동승 감액이 적용될 수 있으나 그 비율은 동승 경위·관계·인지 정도에 따라 10~50% 범위에서 산정되며, 합의 이후에도 후유증이 발견되면 별도 청구가 가능하다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '동승자 책임 감액은 일률 50%가 아닌 영역. 인지 정도·관계·권유 여부에 따라 10~30%가 일반적인 사례. 후유증 추가 청구도 별도 트랙으로 가능.',
      },
    ],
    faq: [
      {
        question: '친구가 음주 운전한다는 걸 알고 탔어요',
        answer:
          '<strong>호의동승 감액 10~30% 영역 사례가 일반적입니다.</strong> 일률 50% 아님. 동승 경위·관계 자료로 다툼 가능.',
      },
      {
        question: '가족이 운전했어요',
        answer:
          '<strong>가족 사이는 호의동승 감액 어려운 영역입니다.</strong> 보상 한도 거의 100% 인정. 다만 권유·동조 정황이 있으면 다툼.',
      },
      {
        question: '\"술 한 잔 하라\"고 본인이 권유했어요',
        answer:
          '<strong>음주 동승 처벌 영역입니다.</strong> 도로교통법 제45조. 동승자 본인 형사 트랙도 검토 영역.',
      },
      {
        question: '합의했는데 6개월 뒤 디스크가 발견됐어요',
        answer:
          '<strong>후유증 추가 청구 가능합니다.</strong> 대법원 2020다868 영역. 합의 시점 예상 못 했던 후유증이면 별도 청구 트랙.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '음주 사고 형사', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-whiplash-compensation' },
      { label: '교통사고 합의 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 첫 대응', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '동승자 보상', href: '/guide/traffic-accident/traffic-accident-taxi-passenger-claim' },
    ],
  },

  // ─── 5. traffic-accident / traffic-accident-electric-scooter-helmet-fault-gain-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-electric-scooter-helmet-fault-gain-track',
    keyword: '전동킥보드 헬멧 미착용 과실',
    questionKeyword: '전동킥보드 타다 자동차에 부딪혔는데 헬멧 안 썼다고 과실 더 잡힌대요. 맞나요?',
    ctaKeyword: '전동킥보드 헬멧 과실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전동킥보드 헬멧 미착용 과실 — 5단계 보상 트랙 | 로앤가이드',
      description:
        '전동킥보드 사고에서 헬멧 미착용을 사유로 과실 가산·보상 감액 시 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공유 킥보드를 빌려 출근 중 사거리에서 좌회전 차량과 부딪혔어요. 차량 보험사 직원은 \'헬멧 미착용으로 본인 과실 10~20% 추가\'라며 보상액을 깎겠다고 합니다. 두피 열상 + 어깨 골절로 입원 중이라 보상을 다투기도 지치는 상황입니다." 도로교통법 제50조 제4항은 개인형 이동장치(전동킥보드) 운전자에게 헬멧 착용 의무를 부과합니다. 미착용은 행정 과태료 2만원 영역이지만, 사고 시 \'본인 부상 확대\' 사유로 과실 가산(통상 5~20%)이 적용되는 사례가 일반적입니다. 다만 헬멧 미착용이 \'사고 자체\' 원인이 아니라 \'두부 부상 확대\'에만 영향을 준 경우 두부 외 부상에 대해선 과실 가산이 적용되지 않는 영역이라는 점이 다툼 자료입니다. 대법원 2022다238633 영역에서 안전장구 미착용 과실의 적용 범위가 한정적이라고 본 사례가 평가됩니다.</p>',
    sections: [
      {
        title: 'Q. 전동킥보드 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 원인·헬멧 영향·부상 분석·보험·과실 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 자체 원인</strong> — 차량 측 신호 위반·과속 vs 킥보드 측 신호·차로. 사고 자체 과실 비율 우선.</li>\n<li><strong>② 헬멧 영향 범위</strong> — 두부 부상에만 영향. 어깨·다리 부상엔 과실 가산 적용 어려운 영역.</li>\n<li><strong>③ 부상 부위별 분석</strong> — 두부 vs 두부 외. 별도 산정.</li>\n<li><strong>④ 보험 적용 (개인형 이동장치 보험)</strong> — 공유 킥보드 자체 보험·본인 운전자보험.</li>\n<li><strong>⑤ 과실 다툼 (5~20%)</strong> — 두부 부상에 한정한 과실 가산. 본인 손해사정사 자문 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 헬멧 미착용 과실은 \'두부 부상 확대\'에만 적용되는 영역이라 어깨·다리·갈비뼈 부상엔 적용 어려운 사례. 보험사가 전체 보상에 일률 적용하면 다툼 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보상 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·치료·과실·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 응급실·진단서 (즉시)</strong> — 부위별 부상 명시.</li>\n<li><strong>2단계 — 경찰 사고 기록·블랙박스</strong> — 사고 자체 과실 자료.</li>\n<li><strong>3단계 — 보험사 청구·과실 협의</strong> — 두부 외 부상 과실 분리 주장.</li>\n<li><strong>4단계 — 손해사정사 자문 (별도 견적)</strong> — 부위별 산정 + 휴업·위자료·후유장해.</li>\n<li><strong>5단계 — 분쟁조정·민사 (3년)</strong> — 금감원 분쟁조정 또는 소액사건.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">전동킥보드 과실 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·치료·보험 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 교통사고 사실 확인서</strong> — 사고 자체 과실 자료.</li>\n<li><strong>응급실·정형외과 진단서 (부위별)</strong> — 부상 부위·정도 입증.</li>\n<li><strong>블랙박스·CCTV·목격자</strong> — 사고 정황.</li>\n<li><strong>공유 킥보드 회사 보험 약관</strong> — 가입 보험 한도.</li>\n<li><strong>본인 운전자보험·실손 약관</strong> — 중복 보상.</li>\n<li><strong>치료비 영수증·휴업 입증</strong> — 손해액 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서에 부위별 부상이 명시되어야 \'두부 vs 두부 외\' 과실 분리 다툼이 가능합니다. \'전치 4주\'로만 적힌 진단서는 두부 외 부위 별도 진단서 보완 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"헬멧 미착용 일률 20% 과실" 주장 반박</strong> — 두부 부상에 한정. 어깨·다리 부상엔 적용 어려운 영역.</li>\n<li><strong>"개인형 이동장치 보험 한도" 주장</strong> — 공유 킥보드 회사 가입 약관 확인. 본인 운전자보험 중복.</li>\n<li><strong>차량 측 과실 자체 (신호·과속)</strong> — 사고 자체 과실 우선 산정.</li>\n<li><strong>후유증 (두부 외상 후 어지러움·시각 장애)</strong> — 추가 청구 트랙. 6개월 이후 발견 사례도 별도 청구.</li>\n<li><strong>운전면허·자격 (만 16세 이상 영역)</strong> — 자격 위반 시 과실 가산 자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 손해배상 무료 상담.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁조정.</li>\n<li><strong>경찰청 182</strong> — 교통사고 신고.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 안전장구 미착용 과실의 한정 적용',
        summary:
          '대법원 2022다238633 사건 영역에서 법원은 안전벨트·헬멧 등 안전장구 미착용이 과실로 평가되더라도 그 미착용으로 \'확대된 손해\'에 한정하여 과실상계가 이루어져야 하며, 미착용과 무관한 부위 손해에는 적용되지 않는다는 취지로 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '헬멧 미착용 과실은 두부 부상 확대분에 한정. 어깨·다리·갈비뼈 부상엔 별도 산정 영역이라, 부위별 진단서·산정 표가 다툼의 핵심 자료가 되는 사례입니다.',
      },
    ],
    faq: [
      {
        question: '헬멧 미착용으로 본인 과실 20% 잡혔어요',
        answer:
          '<strong>부위별 분리 주장 가능합니다.</strong> 두부 부상엔 적용되지만 어깨·다리엔 적용 어려운 영역. 진단서 보강 + 손해사정사 자문.',
      },
      {
        question: '공유 킥보드 회사 보험은 어떻게 적용되나요?',
        answer:
          '<strong>회사 약관 확인이 핵심입니다.</strong> 가입 한도·면책 조항·이용자 부주의 제외 등 약관 검토.',
      },
      {
        question: '본인 실손·운전자보험도 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 약관에 따라 일부 항목 중복 보상 영역. 약관 확인 + 중복 청구.',
      },
      {
        question: '6개월 뒤 어지러움이 계속됩니다',
        answer:
          '<strong>후유증 추가 청구 가능 영역입니다.</strong> 두부 외상 후유증 진단서 + 별도 청구 트랙.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '전동킥보드 플랫폼 책임', href: '/guide/traffic-accident/traffic-accident-shared-pm-kickboard-platform-liability-split-track' },
      { label: '후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-whiplash-compensation' },
      { label: '교통사고 합의 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '안전벨트 과실', href: '/guide/traffic-accident/traffic-accident-seatbelt-nonuse-fault' },
      { label: '교통사고 첫 대응', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
    ],
  },
];
