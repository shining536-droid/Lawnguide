import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [교통사고 피해자]의 [보험금 청구 절차를 모르는 상황]에서 [접수부터 지급까지 단계별 행동 안내]를 돕는 페이지다.
// 2. 이 페이지는 [강제추행 혐의를 받는 피의자]의 [수사부터 재판까지 어떻게 진행되는지 모르는 상황]에서 [단계별 방어 전략과 대응 준비]를 돕는 페이지다.
// 3. 이 페이지는 [성폭력 피해자]의 [고소 절차와 방법을 모르는 상황]에서 [경찰 신고부터 법원 절차까지 단계별 안내]를 돕는 페이지다.
// 4. 이 페이지는 [스토킹 피해자]의 [신고 후 접근금지까지의 절차를 모르는 상황]에서 [경찰 신고와 접근금지 신청 방법 안내]를 돕는 페이지다.
// 5. 이 페이지는 [스토킹 피해자]의 [지금 당장 가해자를 떼어놓아야 하는 긴급 상황]에서 [긴급응급조치 요청 방법과 즉시 행동 안내]를 돕는 페이지다.
// 6. 이 페이지는 [불법촬영 피해자]의 [촬영물 발견 후 어떻게 해야 하는지 모르는 상황]에서 [신고 절차와 삭제 요청 방법 안내]를 돕는 페이지다.
// 7. 이 페이지는 [음주운전으로 적발된 운전자]의 [앞으로 형사 절차가 어떻게 진행되는지 모르는 상황]에서 [적발 후 기소까지 단계별 절차 안내]를 돕는 페이지다.

export const spokesBatch21_29to35: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. traffic-accident / insurance-claim-process-summary
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'insurance-claim-process-summary',
    keyword: '교통사고 보험금 청구 절차',
    questionKeyword: '교통사고 보험금 청구는 어떤 순서로 하나요?',
    ctaKeyword: '교통사고 보험금 청구',
    type: '절차타임라인형',
    meta: {
      title: '교통사고 보험금 청구 절차 5단계 | 로앤가이드',
      description: '교통사고 후 보험금을 어떻게 청구해야 할지 막막하다면 접수부터 지급까지 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>갑작스러운 사고 후 병원에 실려 갔습니다. 치료를 받으면서도 머릿속에는 "보험금은 어떻게 받지?"라는 걱정이 떠나지 않습니다. 상대방 보험사에서 연락이 왔지만 뭘 요구해야 하는지, 어디까지 받을 수 있는지 아무것도 모릅니다. 절차를 모르면 받을 수 있는 금액도 줄어들 수 있으니 지금 바로 확인하세요.</p>',
    timelineSteps: [
      '사고 접수 및 경찰 신고 (사고 당일)',
      '보험사 접수 및 담당자 배정 (1~3일)',
      '치료 및 진료 기록 확보 (치료 기간)',
      '손해사정 및 보험금 산정 (치료 종료 후)',
      '보험금 지급 또는 합의 (산정 완료 후 14일 이내)',
    ],
    sections: [
      {
        title: '1단계 — 사고 현장에서 반드시 해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 현장 증거를 확보하지 않으면 과실 비율 다툼에서 불리해질 수 있습니다</strong></p>\n<ul>\n<li><strong>경찰 신고</strong> — 112에 신고하여 교통사고 사실 확인원을 발급받으세요. 이 서류가 보험금 청구의 기본 자료입니다</li>\n<li><strong>현장 사진 촬영</strong> — 차량 파손 부위, 도로 상태, 신호등, 블랙박스 화면을 모두 촬영해 두세요</li>\n<li><strong>상대방 정보 확인</strong> — 상대 운전자 이름, 연락처, 차량번호, 보험사명을 메모하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 경찰 신고 + 현장 사진 + 상대방 정보 = 보험금 청구의 기본</blockquote>',
      },
      {
        title: '2단계 — 보험사 접수와 담당자 배정',
        content:
          '<p><strong style="color:#1e3a5f">사고 발생 후 가능한 빨리 본인 보험사와 상대방 보험사 양쪽에 접수해야 합니다</strong></p>\n<ul>\n<li><strong>본인 보험사 접수</strong> — 자차보험, 자기신체사고(자손) 등 본인 담보를 확인하고 접수하세요</li>\n<li><strong>상대방 보험사 접수</strong> — 상대방 과실이 있으면 상대 보험사에도 피해 접수를 하세요</li>\n<li><strong>담당자 연락처 확보</strong> — 배정된 보상 담당자의 직통 연락처를 꼭 받아두세요. 향후 모든 협의가 이 담당자를 통해 이루어집니다</li>\n</ul>\n<p>교통사고처리특례법에 따라 보험사는 접수일로부터 30일 이내에 보험금 지급 여부를 결정해야 합니다. <strong>접수가 늦어지면 지급도 늦어지니 사고 당일 또는 다음 날까지 접수를 완료</strong>하세요.</p>',
      },
      {
        title: '3단계 — 치료 기록과 영수증 확보가 핵심',
        content:
          '<p><strong style="color:#1e3a5f">보험금 산정의 80% 이상이 치료 기록과 진단서에 의해 결정됩니다</strong></p>\n<ul>\n<li><strong>진단서</strong> — 초진 진단서와 향후 치료비 추정 소견서를 발급받으세요</li>\n<li><strong>치료비 영수증</strong> — 입원비, 통원치료비, 약제비 등 모든 영수증을 모아두세요</li>\n<li><strong>후유장해진단서</strong> — 치료가 끝난 후 후유증이 남으면 후유장해진단서를 별도로 발급받아야 합니다</li>\n<li><strong>휴업손해 증빙</strong> — 사고로 일을 못 한 기간에 대해 재직증명서, 급여명세서 등을 준비하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">치료 기록 = 보험금 산정 근거. 빠짐없이 모으세요</blockquote>',
      },
      {
        title: '4단계 — 손해사정과 보험금 산정 과정',
        content:
          '<p><strong style="color:#1e3a5f">보험사의 제시 금액이 적정한지 반드시 확인해야 합니다. 첫 제안을 그대로 수락하면 손해를 볼 수 있습니다</strong></p>\n<ul>\n<li><strong>과실 비율 확인</strong> — 보험사가 산정한 과실 비율이 실제 사고 상황과 맞는지 확인하세요</li>\n<li><strong>보험금 항목 확인</strong> — 치료비, 휴업손해, 위자료, 향후치료비 등 각 항목별 금액을 확인하세요</li>\n<li><strong>독립 손해사정인 활용</strong> — 보험사 제시 금액이 너무 적다면 독립 손해사정인에게 별도 감정을 의뢰할 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">보험금 적정성이 궁금하다면</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">교통사고 보상금 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '5단계 — 합의와 보험금 지급',
        content:
          '<p><strong style="color:#1e3a5f">합의서에 서명하면 추가 청구가 불가능하므로 모든 항목을 꼼꼼히 확인한 후 서명하세요</strong></p>\n<ul>\n<li><strong>합의 전 확인</strong> — 치료가 완전히 끝났는지, 후유증은 없는지 반드시 확인 후 합의하세요</li>\n<li><strong>합의금 구성 확인</strong> — 치료비 실비, 휴업손해, 위자료 등 각 항목이 빠짐없이 포함되었는지 확인하세요</li>\n<li><strong>지급 기한</strong> — 합의 후 보험금은 통상 7~14일 이내에 지급됩니다</li>\n</ul>\n<p>자동차손해배상보장법 제15조에 따르면, 보험사는 보험금 청구서류를 접수한 날부터 <strong>30일 이내에 보험금을 지급</strong>해야 합니다. 정당한 사유 없이 지급이 지연되면 지연이자를 청구할 수 있습니다.</p>',
      },
    ],
    cases: [
      {
        title: '혈중알코올농도 상승기 측정과 교통사고 보험금 분쟁',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 교통사고처리특례법 위반 사건에서 음주운전 시점과 측정 시점 사이에 시간 간격이 있더라도, 측정 방법과 절차가 통상적이고 측정 시점이 운전 종료 후 약 12분에 불과한 점 등을 종합하여 처벌기준치 이상이었다고 판시했습니다.',
        takeaway:
          '교통사고 시 상대방의 음주 여부는 과실 비율과 보험금 산정에 큰 영향을 미칩니다. 사고 현장에서 상대방의 음주 정황이 의심되면 반드시 경찰에 신고하세요.',
      },
    ],
    faq: [
      {
        question: '상대방이 무보험 차량이면 보험금을 못 받나요?',
        answer:
          '본인 차량에 <strong>무보험차상해 담보</strong>에 가입되어 있으면 본인 보험사를 통해 보상받을 수 있습니다. 미가입 시에도 정부보장사업을 통해 청구 가능합니다.',
      },
      {
        question: '보험사 제시 금액이 너무 적으면 어떻게 하나요?',
        answer:
          '<strong>독립 손해사정인에게 별도 감정을 의뢰</strong>하거나, 금융감독원에 분쟁조정을 신청할 수 있습니다. 합의서에 서명하기 전에 반드시 확인하세요.',
      },
      {
        question: '치료가 끝나기 전에 합의해도 되나요?',
        answer:
          '원칙적으로 <strong>치료가 완전히 종료된 후 합의하는 것이 유리</strong>합니다. 합의 후 추가 치료가 필요해져도 이미 서명한 합의서 때문에 추가 청구가 어렵습니다.',
      },
      {
        question: '교통사고 보험금 청구 시효는 얼마인가요?',
        answer:
          '자동차보험 보험금 청구 시효는 <strong>사고일로부터 3년</strong>입니다(상법 제662조). 3년이 지나면 청구권이 소멸하니 가급적 빨리 접수하세요.',
      },
      {
        question: '렌터카 사고도 같은 절차인가요?',
        answer:
          '렌터카 사고는 <strong>렌터카 회사의 보험</strong>이 우선 적용됩니다. 다만 자기부담금이 발생할 수 있으니 본인 보험의 렌터카 특약 가입 여부도 확인하세요.',
      },
    ],
    cta: {
      text: '교통사고 보험금 적정성 무료 진단받기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 가이드', href: '/guide/traffic-accident' },
      { label: '교통사고 합의금 계산 기준', href: '/spoke/traffic-accident/settlement-calculation-criteria' },
      { label: '교통사고 과실 비율 기준', href: '/spoke/traffic-accident/fault-ratio-standards' },
      { label: '교통사고 후유장해 등급과 보상', href: '/spoke/traffic-accident/disability-grade-compensation' },
      { label: '음주운전 교통사고 피해자 대응', href: '/spoke/traffic-accident/dui-accident-victim-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. sex-crime / sexual-assault-investigation-to-trial
  // ───────────────────────────────────────────
  {
    domain: 'sex-crime',
    slug: 'sexual-assault-investigation-to-trial',
    keyword: '강제추행 혐의 수사 재판 절차',
    questionKeyword: '강제추행 혐의를 받으면 수사와 재판이 어떻게 진행되나요?',
    ctaKeyword: '강제추행 수사 재판 절차',
    type: '절차타임라인형',
    perspective: 'accused',
    meta: {
      title: '강제추행 수사~재판 절차 6단계 | 로앤가이드',
      description: '강제추행 혐의를 받고 있다면 수사 시작부터 재판 선고까지 6단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>갑자기 경찰서에서 출석 요구 연락이 왔습니다. 강제추행 혐의라는 말에 머릿속이 하얘집니다. "내가 뭘 잘못했지?"라는 생각과 함께 앞으로 무슨 일이 벌어질지 전혀 감이 잡히지 않습니다. 혐의를 받고 있다면 수사부터 재판까지 전체 절차를 미리 파악해야 불이익을 줄일 수 있습니다.</p>',
    timelineSteps: [
      '고소·고발 접수 또는 인지 수사 개시',
      '경찰 조사 (피의자 소환 조사, 2~4주)',
      '검찰 송치 및 기소 여부 결정 (1~3개월)',
      '공판 준비 및 1심 재판 (기소 후 2~6개월)',
      '판결 선고 (1심 종결 시)',
      '항소·상고 (선고 후 7일 이내 항소 가능)',
    ],
    sections: [
      {
        title: '경찰 조사 단계에서 반드시 알아야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법 제244조의3에 따라 피의자는 변호인의 조력을 받을 권리가 있습니다. 첫 조사부터 변호인과 함께 출석하세요</strong></p>\n<ul>\n<li><strong>진술거부권 행사</strong> — 불리한 진술을 강요받지 않을 권리가 있습니다. 무엇을 말하고 무엇을 말하지 않을지 변호인과 사전에 상의하세요</li>\n<li><strong>변호인 참여권</strong> — 경찰 조사 시 변호인이 동석할 수 있습니다. 혼자 가지 마세요</li>\n<li><strong>조서 열람권</strong> — 진술조서 작성 후 반드시 내용을 꼼꼼히 읽고, 틀린 부분은 정정 요구하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 진술거부권 + 변호인 동석 + 조서 열람 = 수사 단계 방어의 기본</blockquote>',
      },
      {
        title: '검찰 단계 — 기소 여부가 결정되는 핵심 시점',
        content:
          '<p><strong style="color:#1e3a5f">검찰은 경찰 수사 기록을 검토한 뒤 기소·불기소·기소유예 중 하나를 결정합니다</strong></p>\n<ul>\n<li><strong>기소</strong> — 정식재판 또는 약식명령(벌금형)으로 진행됩니다. 형법 제298조 강제추행죄는 10년 이하의 징역 또는 1,500만 원 이하의 벌금입니다</li>\n<li><strong>불기소(혐의없음)</strong> — 증거가 부족하거나 혐의가 인정되지 않으면 불기소 처분됩니다</li>\n<li><strong>기소유예</strong> — 혐의는 인정되나 초범·합의 등 정상참작 사유가 있으면 기소유예될 수 있습니다</li>\n</ul>\n<p>이 단계에서 <strong>피해자와의 합의, 반성문 제출, 탄원서 확보</strong> 등이 기소 여부에 영향을 줄 수 있습니다. 검사 조사 전에 반드시 변호인과 전략을 수립하세요.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">혐의를 받고 있다면</strong><br/>\n<a href="/diagnosis/sex-crime" style="color:#1565c0;font-weight:600">강제추행 혐의 무료 사전 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '재판 단계 — 1심 공판의 진행 순서',
        content:
          '<p><strong style="color:#1e3a5f">재판은 공소장 낭독 → 피고인 의견 진술 → 증거 조사 → 피고인 신문 → 변론 → 판결 선고 순서로 진행됩니다</strong></p>\n<ul>\n<li><strong>증거 조사</strong> — 검찰이 제출한 증거(진술서, CCTV, 통화기록 등)를 법원이 심리합니다. 변호인은 증거에 대해 의견을 제출합니다</li>\n<li><strong>증인 신문</strong> — 피해자 또는 목격자가 증인으로 출석할 수 있습니다. 성범죄의 경우 영상녹화물로 대체되기도 합니다</li>\n<li><strong>피고인 최후 진술</strong> — 판결 전 마지막으로 자신의 입장을 말할 기회입니다</li>\n</ul>\n<p>강제추행 사건은 <strong>피해자 진술의 신빙성이 유·무죄를 좌우하는 핵심 쟁점</strong>입니다. 변호인이 증거를 체계적으로 분석하고 방어 논리를 구성하는 것이 매우 중요합니다.</p>',
      },
      {
        title: '유죄 판결 시 처벌 수위와 부수 처분',
        content:
          '<p><strong style="color:#1e3a5f">형법 제298조에 따라 강제추행은 10년 이하의 징역 또는 1,500만 원 이하의 벌금에 처합니다</strong></p>\n<ul>\n<li><strong>형사 처벌</strong> — 초범이고 합의가 이루어진 경우 벌금형이나 집행유예가 선고될 가능성이 있습니다</li>\n<li><strong>신상정보 등록</strong> — 유죄 확정 시 성범죄자 신상정보 등록 대상이 됩니다 (최소 20년)</li>\n<li><strong>취업 제한</strong> — 아동·청소년 관련 기관 취업이 최대 10년간 제한됩니다</li>\n<li><strong>수강명령</strong> — 성폭력 치료 프로그램 이수명령이 병과될 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">부수 처분: 신상정보 등록 + 취업 제한 + 수강명령까지 반드시 고려</blockquote>',
      },
    ],
    cases: [
      {
        title: '강제추행 — 피해자 진술 신빙성과 유죄 판단 기준',
        summary:
          '대법원 2024도15182 사건(대법원, 2025.09.11 선고)에서 법원은 성폭력 사건에서 피고인이 공소사실을 부인하고 피해자 진술이 유일한 직접증거인 경우에도, 사소한 사항의 불일치만으로 그 진술의 신빙성을 배척할 수 없다고 판시했습니다.',
        takeaway:
          '혐의를 받고 있다면 피해자 진술의 모순점을 체계적으로 분석하는 것이 핵심 방어 전략입니다. 초기 단계부터 변호인과 함께 대응하세요.',
      },
    ],
    faq: [
      {
        question: '강제추행 혐의로 출석 요구를 받았는데 무조건 가야 하나요?',
        answer:
          '경찰의 출석 요구에 <strong>정당한 사유 없이 불응하면 체포영장이 발부</strong>될 수 있습니다. 반드시 출석하되, 변호인과 함께 가세요.',
      },
      {
        question: '피해자와 합의하면 처벌을 안 받을 수 있나요?',
        answer:
          '강제추행은 <strong>반의사불벌죄가 아니므로 합의만으로 공소가 취소되지 않습니다</strong>. 다만 합의 사실은 기소유예나 양형에 유리하게 작용할 수 있습니다.',
      },
      {
        question: '무고를 당한 것 같은데 어떻게 대응해야 하나요?',
        answer:
          '사실과 다르게 신고되었다면 <strong>알리바이 증거(CCTV, 통화기록, 위치정보 등)</strong>를 확보하고 변호인을 통해 반박 자료를 체계적으로 제출하세요.',
      },
      {
        question: '성범죄 전과가 생기면 어떤 불이익이 있나요?',
        answer:
          '<strong>신상정보 등록(20년), 아동 관련 기관 취업 제한(10년), 성폭력 치료 프로그램 이수</strong> 등의 부수 처분이 부과됩니다. 취업과 사회생활에 장기적 영향을 미칩니다.',
      },
      {
        question: '1심에서 유죄가 나오면 바로 구속되나요?',
        answer:
          '벌금형이나 집행유예를 선고받으면 <strong>구속되지 않고 석방</strong>됩니다. 실형이 선고되면 법정에서 바로 구속될 수 있으며, 7일 이내에 항소할 수 있습니다.',
      },
    ],
    cta: {
      text: '강제추행 혐의 대응 전략 무료 진단받기',
      link: '/diagnosis/sex-crime',
    },
    internalLinks: [
      { label: '성범죄 가이드', href: '/guide/sex-crime' },
      { label: '성범죄 혐의 초기 대응법', href: '/spoke/sex-crime/accused-initial-response' },
      { label: '성범죄 합의 절차와 방법', href: '/spoke/sex-crime/settlement-process-guide' },
      { label: '성범죄 신상정보 등록 기준', href: '/spoke/sex-crime/sex-offender-registry-criteria' },
      { label: '성폭력 무고 대응 가이드', href: '/spoke/sex-crime/false-accusation-defense-guide' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. sex-crime / sexual-violence-complaint-process
  // ───────────────────────────────────────────
  {
    domain: 'sex-crime',
    slug: 'sexual-violence-complaint-process',
    keyword: '성폭력 피해 고소 절차',
    questionKeyword: '성폭력 피해를 당했는데 고소는 어떻게 하나요?',
    ctaKeyword: '성폭력 고소 절차',
    type: '절차타임라인형',
    meta: {
      title: '성폭력 피해 고소 절차 5단계 총정리 | 로앤가이드',
      description: '성폭력 피해를 입었지만 고소 방법을 모르겠다면 경찰 신고부터 재판까지 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>아무에게도 말할 수 없었습니다. 시간이 지날수록 분노와 두려움이 뒤섞입니다. "고소를 해야 하나?" 마음을 먹어도 어디서부터 시작해야 하는지 막막합니다. 증거는 어떻게 모아야 하는지, 경찰에서 뭘 물어보는지, 재판까지 가는 건지. 피해자의 권리를 지키기 위한 절차를 지금 확인하세요.</p>',
    timelineSteps: [
      '증거 확보 및 피해 기록 정리',
      '경찰서 방문 또는 온라인 신고 (고소장 제출)',
      '경찰 조사 (피해자 조사, 2~6주)',
      '검찰 송치 및 기소 결정 (1~3개월)',
      '법원 재판 및 판결 (기소 후 3~12개월)',
    ],
    sections: [
      {
        title: '고소 전 — 증거 확보가 가장 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">성폭력 사건은 증거 확보가 어렵기 때문에, 가능한 모든 증거를 사건 직후에 수집해야 합니다</strong></p>\n<ul>\n<li><strong>의료 기록</strong> — 피해 직후 병원(산부인과, 응급실)을 방문하여 진료 기록을 남기세요. DNA 채취 등 증거보전이 가능합니다</li>\n<li><strong>메시지·통화 기록</strong> — 가해자와의 문자, 카카오톡, SNS 대화를 모두 캡처하여 보관하세요</li>\n<li><strong>CCTV·위치 정보</strong> — 사건 당시 주변 CCTV 영상이나 휴대폰 위치 기록을 확보하세요</li>\n<li><strong>피해 일지</strong> — 사건 경위를 날짜, 시간, 장소, 상황 순으로 구체적으로 기록해 두세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보 시점: 빠를수록 유리합니다. 시간이 지나면 CCTV 삭제, 기억 왜곡이 발생합니다</blockquote>',
      },
      {
        title: '고소장 제출 — 경찰서 또는 온라인으로 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">성폭력 피해 고소는 가까운 경찰서 여성청소년수사팀에 직접 방문하거나, 경찰청 사이버수사국을 통해 온라인으로도 접수할 수 있습니다</strong></p>\n<ul>\n<li><strong>경찰서 방문</strong> — 고소장을 미리 작성해 가면 접수가 빠릅니다. 여성청소년수사팀 소속 여성 수사관을 요청할 수 있습니다</li>\n<li><strong>고소장 내용</strong> — 가해자 인적사항, 범행 일시·장소, 구체적 피해 내용, 첨부 증거 목록을 기재하세요</li>\n<li><strong>원스톱지원센터</strong> — 전국 해바라기센터(1899-3075)에서 의료·법률·수사 지원을 한 번에 받을 수 있습니다</li>\n</ul>\n<p>성폭력범죄의 처벌 등에 관한 특례법 제18조에 따라 <strong>성폭력 피해자는 수사 및 재판 과정에서 전담 조사관에 의한 조사를 받을 권리</strong>가 있습니다.</p>',
      },
      {
        title: '경찰·검찰 조사 — 피해자 보호 제도를 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">성폭력 피해자는 법률에 의해 여러 보호 제도를 이용할 수 있습니다</strong></p>\n<ul>\n<li><strong>영상녹화 조사</strong> — 피해자 진술은 영상으로 녹화되어 재판에서 증거로 사용됩니다. 법정에 직접 출석하지 않아도 됩니다</li>\n<li><strong>신뢰관계인 동석</strong> — 조사 시 가족, 심리상담사 등 신뢰관계인이 동석할 수 있습니다</li>\n<li><strong>국선변호사</strong> — 성폭력 피해자는 국선변호사(피해자 국선변호인)를 무료로 선임할 수 있습니다</li>\n<li><strong>신변보호</strong> — 가해자의 보복이 우려되면 경찰에 신변보호를 요청할 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">피해 상황이 막막하다면</strong><br/>\n<a href="/diagnosis/sex-crime" style="color:#1565c0;font-weight:600">성폭력 피해 대응 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '재판 단계 — 피해자 권리와 배상 청구',
        content:
          '<p><strong style="color:#1e3a5f">성폭력 사건 재판에서 피해자는 별도의 민사소송 없이도 배상명령을 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>배상명령 신청</strong> — 형사재판에서 치료비, 위자료 등 손해배상을 함께 청구할 수 있습니다(소송촉진등에관한특례법 제25조)</li>\n<li><strong>피해자 의견 진술</strong> — 재판 과정에서 피해자가 직접 또는 서면으로 의견을 진술할 수 있습니다</li>\n<li><strong>비공개 재판</strong> — 성폭력 사건은 피해자 신청 시 비공개로 재판이 진행됩니다</li>\n</ul>\n<p>형법 제297조(강간)는 3년 이상의 유기징역, 제298조(강제추행)는 10년 이하의 징역 또는 1,500만 원 이하의 벌금입니다. <strong>가해자의 처벌 수위는 피해 정도, 범행 방법, 가해자의 전과 등</strong>에 따라 달라집니다.</p>',
      },
    ],
    cases: [
      {
        title: '성폭력 사건에서 피해자 진술 신빙성 판단 기준',
        summary:
          '대법원 2024도15182 사건(대법원, 2025.09.11 선고)에서 법원은 성폭력 사건에서 피해자 진술이 유일한 직접증거인 경우, 사소한 사항에 관한 진술의 다소 불일치만으로 그 진술의 신빙성을 배척할 수 없다고 판시했습니다.',
        takeaway:
          '피해자 진술의 핵심 내용이 일관되면 세부사항의 다소 불일치가 있어도 유죄 인정이 가능합니다. 피해 사실을 가능한 정확히 기록해 두세요.',
      },
    ],
    faq: [
      {
        question: '성폭력 피해 고소 시효는 얼마인가요?',
        answer:
          '강간은 <strong>공소시효 10년</strong>, 강제추행은 <strong>10년</strong>입니다. 다만 13세 미만 아동 대상 성범죄는 공소시효가 없습니다(DNA 증거가 있는 경우도 시효 정지).',
      },
      {
        question: '증거가 없으면 고소해도 소용없나요?',
        answer:
          '<strong>피해자 진술만으로도 유죄 인정이 가능합니다.</strong> 다만 진술의 구체성과 일관성이 중요하므로, 사건 직후 피해 경위를 상세히 기록하고 병원 진료를 받으세요.',
      },
      {
        question: '해바라기센터에서 어떤 도움을 받을 수 있나요?',
        answer:
          '<strong>의료 지원(응급진료, 산부인과 검진), 법률 지원(국선변호사 연결), 심리 상담, 수사 동행</strong> 등을 무료로 지원받을 수 있습니다. 전화번호는 1899-3075입니다.',
      },
      {
        question: '고소하면 내 신원이 가해자에게 노출되나요?',
        answer:
          '성폭력범죄의 처벌 등에 관한 특례법에 따라 <strong>피해자의 인적사항과 사진은 공개가 금지</strong>됩니다. 수사·재판 과정에서도 피해자 보호 조치를 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '성폭력 피해 고소 절차 무료 진단받기',
      link: '/diagnosis/sex-crime',
    },
    internalLinks: [
      { label: '성범죄 가이드', href: '/guide/sex-crime' },
      { label: '성범죄 피해자 지원 제도', href: '/spoke/sex-crime/victim-support-system' },
      { label: '성폭력 피해자 국선변호사 신청법', href: '/spoke/sex-crime/victim-public-defender' },
      { label: '성범죄 합의금 기준', href: '/spoke/sex-crime/settlement-amount-criteria' },
      { label: '디지털 성범죄 신고 방법', href: '/spoke/digital-sex-crime/report-guide' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. stalking / stalking-report-and-restraining-order
  // ───────────────────────────────────────────
  {
    domain: 'stalking',
    slug: 'stalking-report-and-restraining-order',
    keyword: '스토킹 피해 신고 접근금지 신청',
    questionKeyword: '스토킹 피해를 신고하고 접근금지를 받으려면 어떻게 하나요?',
    ctaKeyword: '스토킹 신고 접근금지',
    type: '절차타임라인형',
    meta: {
      title: '스토킹 신고~접근금지 신청 4단계 | 로앤가이드',
      description: '스토킹 피해로 두려운 나날을 보내고 있다면 경찰 신고부터 접근금지 신청까지 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>전 연인이 퇴근길에 따라옵니다. 하루에 수십 통의 전화와 문자가 쏟아집니다. 집 앞에서 기다리는 모습이 CCTV에 찍혔습니다. 혼자서는 도저히 해결할 수 없는 상황이 반복됩니다. 스토킹범죄의 처벌 등에 관한 법률이 시행된 이후, 경찰 신고만으로도 가해자에게 접근금지 조치를 받을 수 있게 되었습니다.</p>',
    timelineSteps: [
      '경찰 112 신고 및 스토킹 피해 접수',
      '경찰 긴급응급조치 또는 잠정조치 신청 (접수 즉시~48시간)',
      '법원 잠정조치 결정 (접근금지 등, 검사 청구 후)',
      '본안 재판 및 처벌 (기소 후)',
    ],
    sections: [
      {
        title: '1단계 — 경찰 신고와 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄의 처벌 등에 관한 법률 제2조에 따라, 정당한 이유 없이 상대방에게 접근하거나 연락하는 행위가 반복되면 스토킹범죄에 해당합니다</strong></p>\n<ul>\n<li><strong>112 신고</strong> — 스토킹 행위가 발생하면 즉시 112에 신고하세요. 출동 기록 자체가 증거가 됩니다</li>\n<li><strong>증거 수집</strong> — 문자·카카오톡·SNS 메시지를 캡처하고, 미행·대기 장면을 CCTV나 휴대폰으로 촬영하세요</li>\n<li><strong>피해 일지 작성</strong> — 날짜, 시간, 장소, 행위 내용을 매번 기록하세요. 반복성을 입증하는 핵심 자료입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">스토킹 입증의 핵심: 반복성. 매번 기록하고 신고하세요</blockquote>',
      },
      {
        title: '2단계 — 긴급응급조치와 잠정조치의 차이',
        content:
          '<p><strong style="color:#1e3a5f">경찰은 신고 접수 즉시 긴급응급조치를, 검사는 법원에 잠정조치를 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>긴급응급조치(경찰)</strong> — 경찰이 즉시 가해자에게 접근금지, 연락금지, 100m 이내 접근금지 등을 명할 수 있습니다. 법원 결정 없이도 가능합니다</li>\n<li><strong>잠정조치(법원)</strong> — 검사가 법원에 청구하여 최대 2개월간(연장 가능) 접근금지, 전기통신 이용 접근금지, 주거로부터 퇴거 등을 명할 수 있습니다</li>\n<li><strong>위반 시 처벌</strong> — 잠정조치를 위반하면 2년 이하의 징역 또는 2천만 원 이하의 벌금에 처합니다</li>\n</ul>\n<p>대법원 2025모3144 사건에서도 잠정조치 연장 결정의 적법성이 다투어졌을 만큼, <strong>잠정조치는 피해자 보호에 매우 중요한 법적 수단</strong>입니다.</p>',
      },
      {
        title: '3단계 — 접근금지 신청서 작성 방법',
        content:
          '<p><strong style="color:#1e3a5f">접근금지 등 잠정조치 신청은 경찰을 통해 검사에게, 검사가 법원에 청구하는 구조입니다</strong></p>\n<ul>\n<li><strong>피해 사실 상세 기재</strong> — 가해자의 스토킹 행위를 구체적으로 기재하세요(일시, 장소, 방법, 횟수)</li>\n<li><strong>증거 첨부</strong> — 메시지 캡처, CCTV 영상, 112 신고 기록, 진단서 등을 첨부하세요</li>\n<li><strong>피해자 의견 제출</strong> — "가해자의 접근으로 정상적인 일상생활이 불가능하다"는 취지의 피해자 의견서를 함께 제출하면 효과적입니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">스토킹 피해가 반복되고 있다면</strong><br/>\n<a href="/diagnosis/stalking" style="color:#1565c0;font-weight:600">스토킹 피해 대응 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '4단계 — 본안 재판과 처벌 수위',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄의 처벌 등에 관한 법률 제18조에 따라 스토킹범죄는 3년 이하의 징역 또는 3천만 원 이하의 벌금에 처합니다</strong></p>\n<ul>\n<li><strong>스토킹행위</strong> — 1회성이라도 상대방에게 불안감·공포심을 일으키는 행위는 스토킹행위에 해당합니다</li>\n<li><strong>스토킹범죄</strong> — 스토킹행위가 지속·반복되면 스토킹범죄가 성립합니다</li>\n<li><strong>흉기 사용</strong> — 흉기나 위험한 물건을 휴대하고 스토킹하면 5년 이하의 징역 또는 5천만 원 이하의 벌금에 처합니다</li>\n</ul>\n<p>피해자는 재판 과정에서 <strong>피해자 보호명령(접근금지, 전기통신 접근금지 등)</strong>을 별도로 신청할 수 있으며, 이는 판결 확정과 무관하게 즉시 효력을 갖습니다.</p>',
      },
    ],
    cases: [
      {
        title: '스토킹 행위 — 피해자 인식 없어도 범죄 성립',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹 행위가 객관적·일반적으로 볼 때 상대방에게 불안감·공포심을 일으키기에 충분한 정도라면, 현실적으로 상대방이 이를 인식하지 못했더라도 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '피해자가 직접 인식하지 못한 미행·감시 행위도 스토킹범죄로 처벌될 수 있습니다. 의심되는 행위를 발견하면 즉시 신고하세요.',
      },
    ],
    faq: [
      {
        question: '전 연인이 계속 연락하는 것도 스토킹인가요?',
        answer:
          '<strong>상대방이 거부 의사를 밝혔음에도 반복적으로 연락하면 스토킹행위</strong>에 해당합니다. 문자·전화·SNS 메시지 모두 포함됩니다.',
      },
      {
        question: '접근금지를 받으면 실제로 효과가 있나요?',
        answer:
          '잠정조치(접근금지)를 <strong>위반하면 2년 이하의 징역 또는 2천만 원 이하의 벌금</strong>에 처합니다. 위반 사실을 발견하면 즉시 112에 신고하세요.',
      },
      {
        question: '직장 앞에서 기다리는 것도 스토킹으로 신고할 수 있나요?',
        answer:
          '정당한 이유 없이 <strong>주거, 직장, 학교 등 일상적으로 생활하는 장소 부근에서 기다리거나 지켜보는 행위</strong>도 스토킹행위에 해당합니다.',
      },
      {
        question: '스토킹 피해자가 이사비를 지원받을 수 있나요?',
        answer:
          '<strong>범죄피해자 지원 제도를 통해 이사비, 임시 거처 비용 등을 지원</strong>받을 수 있습니다. 가까운 범죄피해자지원센터(1577-1295)에 문의하세요.',
      },
      {
        question: '경찰이 스토킹 신고를 가볍게 처리하면 어떻게 하나요?',
        answer:
          '경찰이 적절한 조치를 취하지 않으면 <strong>해당 경찰서 민원실에 이의 신청</strong>하거나, 검찰에 직접 고소장을 제출할 수 있습니다. 국가인권위원회에 진정도 가능합니다.',
      },
    ],
    cta: {
      text: '스토킹 피해 대응 무료 진단받기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 가이드', href: '/guide/stalking' },
      { label: '스토킹 긴급응급조치 요청 방법', href: '/spoke/stalking/emergency-protective-measures' },
      { label: '스토킹 피해 증거 수집법', href: '/spoke/stalking/evidence-collection-guide' },
      { label: '스토킹 처벌 기준과 형량', href: '/spoke/stalking/punishment-criteria' },
      { label: '데이트 폭력 대응 가이드', href: '/spoke/stalking/dating-violence-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. stalking / emergency-protective-measures
  // ───────────────────────────────────────────
  {
    domain: 'stalking',
    slug: 'emergency-protective-measures',
    keyword: '스토킹 긴급응급조치 요청',
    questionKeyword: '스토킹 피해자 긴급응급조치는 어떻게 요청하나요?',
    ctaKeyword: '스토킹 긴급응급조치',
    type: '상황형',
    meta: {
      title: '스토킹 긴급응급조치 요청 방법 3가지 | 로앤가이드',
      description: '지금 스토킹 피해를 당하고 있어 긴급 보호가 필요하다면 긴급응급조치 요청 방법 3가지를 지금 확인하세요.',
    },
    intro:
      '<p>새벽 2시, 현관문 앞에 누군가 서 있습니다. 벨이 울리고, 문을 두드리는 소리가 멈추지 않습니다. 전화를 차단했는데도 새 번호로 계속 연락이 옵니다. 이 순간 가장 먼저 해야 할 것은 112 신고입니다. 스토킹처벌법에 따라 경찰은 즉시 긴급응급조치를 취할 수 있습니다.</p>',
    sections: [
      {
        title: '긴급응급조치란 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄의 처벌 등에 관한 법률 제4조에 따라, 경찰은 스토킹 행위 신고를 접수하면 즉시 긴급응급조치를 취할 수 있습니다</strong></p>\n<p>긴급응급조치는 법원의 결정 없이 경찰이 현장에서 바로 취할 수 있는 보호 조치입니다.</p>\n<ul>\n<li><strong>접근금지</strong> — 가해자에게 피해자로부터 100미터 이내 접근을 금지합니다</li>\n<li><strong>연락금지</strong> — 전화, 문자, 이메일, SNS 등 모든 수단을 통한 연락을 금지합니다</li>\n<li><strong>퇴거</strong> — 가해자가 피해자의 주거지 부근에 있으면 즉시 퇴거를 명합니다</li>\n</ul>\n<p>긴급응급조치의 효력은 발령 후 <strong>즉시 발생</strong>합니다. 가해자가 이를 위반하면 별도의 처벌을 받게 됩니다.</p>',
      },
      {
        title: '지금 당장 해야 할 3가지 행동',
        content:
          '<p><strong style="color:#1e3a5f">위급한 상황에서는 다음 순서대로 행동하세요</strong></p>\n<ul>\n<li><strong>1. 112 신고</strong> — "스토킹 피해입니다. 긴급응급조치를 요청합니다"라고 명확히 말하세요. 스토킹이라는 단어를 반드시 사용하세요</li>\n<li><strong>2. 안전한 장소로 이동</strong> — 편의점, 경비실, 이웃집 등 사람이 있는 곳으로 이동하세요. 혼자 있지 마세요</li>\n<li><strong>3. 증거 확보</strong> — 가능하다면 가해자의 행위를 녹음·촬영하세요. 어려우면 112 통화 녹음만으로도 증거가 됩니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 위험한 상황이라면</strong><br/>\n<a href="/diagnosis/stalking" style="color:#1565c0;font-weight:600">스토킹 피해 긴급 대응 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '긴급응급조치 이후 — 잠정조치로 보호 강화',
        content:
          '<p><strong style="color:#1e3a5f">긴급응급조치는 임시 조치이므로, 이후 검사를 통해 법원에 잠정조치를 청구하여 보호 기간을 연장해야 합니다</strong></p>\n<ul>\n<li><strong>잠정조치 청구</strong> — 검사는 직권 또는 경찰의 신청에 의해 법원에 잠정조치를 청구합니다</li>\n<li><strong>잠정조치 기간</strong> — 최대 2개월이며, 2회까지 연장 가능(총 6개월)</li>\n<li><strong>잠정조치 종류</strong> — 접근금지, 전기통신 접근금지, 피해자 주거로부터 퇴거, 유치장 유치 등</li>\n</ul>\n<p>경찰이 긴급응급조치를 취한 후 검사에게 잠정조치 청구를 신청하지 않으면, <strong>피해자가 직접 검찰에 잠정조치 청구를 요청</strong>할 수 있습니다.</p>',
      },
      {
        title: '피해자가 활용할 수 있는 긴급 지원 기관',
        content:
          '<p><strong style="color:#1e3a5f">스토킹 피해자를 위한 긴급 지원 기관은 24시간 운영됩니다</strong></p>\n<ul>\n<li><strong>112 긴급 신고</strong> — 즉각적인 경찰 출동과 긴급응급조치 요청</li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담, 긴급 보호시설 연계, 법률 상담 지원</li>\n<li><strong>범죄피해자지원센터 1577-1295</strong> — 이사비, 임시 거처, 심리 상담 지원</li>\n<li><strong>스마트치안앱(112)</strong> — 위치 자동 전송 기능으로 음성 신고가 어려운 상황에서 활용 가능</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">24시간 긴급 연락: 112(경찰) / 1366(여성긴급전화) / 1577-1295(피해자 지원)</blockquote>',
      },
    ],
    cases: [
      {
        title: '스토킹 잠정조치 연장 결정의 적법성',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹처벌법에 따른 잠정조치 결정에 대한 항고에는 형사소송법 제407조(원심법원의 항고 기각)가 준용되지 않으며, 항고장을 제출받은 원심법원은 3일 이내에 기록을 항고법원에 보내야 한다고 판시했습니다.',
        takeaway:
          '잠정조치(접근금지)는 법원이 엄격하게 관리하는 강력한 보호 수단입니다. 가해자가 잠정조치에 불복하더라도 피해자 보호는 계속됩니다.',
      },
    ],
    faq: [
      {
        question: '긴급응급조치를 받으면 언제까지 효력이 있나요?',
        answer:
          '긴급응급조치는 <strong>임시적 조치</strong>로, 이후 검사가 법원에 잠정조치를 청구하여 최대 6개월까지 보호 기간을 연장할 수 있습니다.',
      },
      {
        question: '가해자가 긴급응급조치를 무시하고 접근하면 어떻게 되나요?',
        answer:
          '경찰의 긴급응급조치를 위반하면 <strong>현행범으로 체포될 수 있으며</strong>, 잠정조치 위반 시 2년 이하의 징역 또는 2천만 원 이하의 벌금에 처합니다.',
      },
      {
        question: '새벽에도 112에 신고하면 경찰이 출동하나요?',
        answer:
          '<strong>112는 24시간 운영</strong>됩니다. 스토킹 신고는 긴급 사안으로 분류되어 어떤 시간대든 경찰이 출동합니다.',
      },
      {
        question: '같은 건물에 사는 사람이 스토킹하면 어떻게 하나요?',
        answer:
          '동일 건물 거주자에 대해서도 <strong>접근금지와 퇴거명령이 가능</strong>합니다. 경찰에 상황을 설명하고 긴급응급조치를 요청하세요.',
      },
    ],
    cta: {
      text: '스토킹 긴급 대응 무료 진단받기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 가이드', href: '/guide/stalking' },
      { label: '스토킹 신고~접근금지 절차', href: '/spoke/stalking/stalking-report-and-restraining-order' },
      { label: '스토킹 피해 증거 수집법', href: '/spoke/stalking/evidence-collection-guide' },
      { label: '스토킹 처벌 기준과 형량', href: '/spoke/stalking/punishment-criteria' },
      { label: '데이트 폭력 대응 가이드', href: '/spoke/stalking/dating-violence-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. digital-sex-crime / hidden-camera-report-and-deletion-procedure
  // ───────────────────────────────────────────
  {
    domain: 'digital-sex-crime',
    slug: 'hidden-camera-report-and-deletion-procedure',
    keyword: '불법촬영 신고 삭제 요청 절차',
    questionKeyword: '불법촬영 피해를 발견하면 어떻게 신고하고 삭제 요청하나요?',
    ctaKeyword: '불법촬영 신고 삭제',
    type: '절차타임라인형',
    meta: {
      title: '불법촬영 신고 및 삭제 요청 4단계 | 로앤가이드',
      description: '불법촬영 피해를 발견했는데 어떻게 대응해야 할지 모르겠다면 신고부터 삭제까지 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>우연히 발견한 내 사진이 인터넷에 퍼져 있습니다. 또는 화장실이나 탈의실에서 몰래카메라를 발견했습니다. 공포와 분노가 동시에 밀려옵니다. 하지만 시간이 지날수록 영상은 더 퍼집니다. 발견 즉시 신고하고, 삭제 요청을 시작해야 피해를 최소화할 수 있습니다.</p>',
    timelineSteps: [
      '증거 보존 및 경찰 신고 (발견 즉시)',
      '방송통신심의위원회 삭제 요청 (신고와 동시)',
      '디지털성범죄피해자지원센터 연락 (병행 진행)',
      '수사 진행 및 법적 대응 (1~6개월)',
    ],
    sections: [
      {
        title: '1단계 — 발견 즉시 해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">불법촬영물을 발견하면 절대 삭제하거나 공유하지 말고, 증거를 보존한 채 즉시 신고하세요</strong></p>\n<ul>\n<li><strong>증거 보존</strong> — 해당 웹페이지의 URL, 게시글 캡처, 업로더 정보를 저장하세요. 스크린샷에 날짜와 시간이 포함되어야 합니다</li>\n<li><strong>경찰 신고</strong> — 사이버수사대(182) 또는 가까운 경찰서에 신고하세요. 온라인 신고(ecrm.police.go.kr)도 가능합니다</li>\n<li><strong>촬영 기기 발견 시</strong> — 몰래카메라를 발견했다면 만지지 말고 현장 그대로 보존한 채 경찰을 부르세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 원칙: 증거 보존 → 신고 → 삭제 요청 (이 순서를 지키세요)</blockquote>',
      },
      {
        title: '2단계 — 삭제 요청 방법 3가지',
        content:
          '<p><strong style="color:#1e3a5f">성폭력범죄의 처벌 등에 관한 특례법 제14조의3에 따라 피해자는 불법촬영물의 삭제를 요청할 권리가 있습니다</strong></p>\n<ul>\n<li><strong>방송통신심의위원회</strong> — 인터넷에 유포된 영상의 삭제를 신청할 수 있습니다(www.kocsc.or.kr). 심의 후 사이트 운영자에게 삭제 명령이 내려집니다</li>\n<li><strong>디지털성범죄피해자지원센터</strong> — 전화 02-735-8994로 연락하면 삭제 지원, 모니터링, 법률 상담을 무료로 받을 수 있습니다</li>\n<li><strong>사이트 운영자 직접 요청</strong> — 해당 사이트의 신고 기능을 통해 직접 삭제를 요청할 수 있습니다</li>\n</ul>\n<p>삭제 요청은 한 곳만이 아니라 <strong>위 3가지를 동시에 진행</strong>하는 것이 가장 효과적입니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">불법촬영 피해가 확인되었다면</strong><br/>\n<a href="/diagnosis/digital-sex-crime" style="color:#1565c0;font-weight:600">불법촬영 피해 대응 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 수사 진행과 가해자 처벌',
        content:
          '<p><strong style="color:#1e3a5f">성폭력범죄의 처벌 등에 관한 특례법 제14조에 따라 카메라 등을 이용한 불법촬영은 7년 이하의 징역 또는 5천만 원 이하의 벌금에 처합니다</strong></p>\n<ul>\n<li><strong>촬영 행위</strong> — 동의 없이 신체를 촬영한 행위 자체가 범죄입니다 (7년 이하 징역 또는 5천만 원 이하 벌금)</li>\n<li><strong>유포 행위</strong> — 불법촬영물을 유포하면 7년 이하의 징역 또는 5천만 원 이하의 벌금입니다</li>\n<li><strong>소지·구입</strong> — 불법촬영물을 소지·구입·저장·시청한 자도 3년 이하의 징역 또는 3천만 원 이하의 벌금에 처합니다</li>\n</ul>\n<p>디지털 성범죄는 <strong>압수수색을 통한 디지털 포렌식</strong>으로 수사가 진행됩니다. 가해자의 휴대폰, 컴퓨터, 클라우드 등을 분석하여 증거를 확보합니다.</p>',
      },
      {
        title: '피해 회복을 위한 지원 제도',
        content:
          '<p><strong style="color:#1e3a5f">불법촬영 피해자는 다양한 국가 지원 제도를 이용할 수 있습니다</strong></p>\n<ul>\n<li><strong>디지털성범죄피해자지원센터</strong> — 삭제 지원(24시간 모니터링), 법률 상담, 심리 상담 무료 제공</li>\n<li><strong>국선변호사</strong> — 성폭력 피해자 국선변호인을 무료로 선임할 수 있습니다</li>\n<li><strong>손해배상</strong> — 가해자에게 치료비, 위자료 등 민사상 손해배상을 청구할 수 있습니다</li>\n<li><strong>범죄피해구조금</strong> — 가해자를 특정할 수 없거나 배상이 어려운 경우 국가에 피해구조금을 신청할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 연락처: 디지털성범죄피해자지원센터 02-735-8994 / 경찰 사이버수사대 182</blockquote>',
      },
    ],
    cases: [
      {
        title: '불법 성적 합성물(딥페이크) 제작과 처벌',
        summary:
          '대법원 2024도17801 사건(대법원, 2025.08.14 선고)에서 법원은 실제 인물의 얼굴에 나체 사진을 합성한 딥페이크 영상이 아동·청소년성착취물에 해당할 수 있다고 판시하며, 합성물의 외모, 신원, 제작 경위 등을 종합적으로 고려하여 판단해야 한다고 하였습니다.',
        takeaway:
          '딥페이크를 포함한 합성 불법촬영물도 엄중하게 처벌됩니다. AI 합성 영상 피해도 즉시 신고하세요.',
      },
    ],
    faq: [
      {
        question: '이미 인터넷에 퍼진 영상도 삭제할 수 있나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 24시간 모니터링하며 삭제를 지원</strong>합니다. 한 번에 완전 삭제는 어렵지만, 지속적 모니터링으로 재유포를 차단합니다.',
      },
      {
        question: '해외 사이트에 올라간 영상도 삭제 요청이 가능한가요?',
        answer:
          '해외 사이트의 경우 <strong>방송통신심의위원회를 통해 국내 접속 차단을 요청</strong>할 수 있고, 디지털성범죄피해자지원센터에서 해외 사이트 삭제 요청도 대행합니다.',
      },
      {
        question: '불법촬영 신고 후 가해자를 특정하지 못하면 어떻게 되나요?',
        answer:
          '가해자를 특정하지 못하더라도 <strong>삭제 요청과 유포 차단은 별도로 진행</strong>됩니다. 수사는 디지털 포렌식을 통해 계속되며, IP 추적 등으로 가해자를 특정합니다.',
      },
      {
        question: '몰래카메라를 발견하면 직접 제거해도 되나요?',
        answer:
          '<strong>직접 제거하면 증거가 훼손될 수 있습니다.</strong> 발견한 그대로 보존하고 경찰을 불러 전문가가 수거하도록 하세요.',
      },
      {
        question: '불법촬영 피해 치료비를 지원받을 수 있나요?',
        answer:
          '<strong>성폭력 피해자 의료비 지원 제도</strong>를 통해 정신과 치료비, 상담비 등을 지원받을 수 있습니다. 해바라기센터(1899-3075)에 문의하세요.',
      },
    ],
    cta: {
      text: '불법촬영 피해 대응 무료 진단받기',
      link: '/diagnosis/digital-sex-crime',
    },
    internalLinks: [
      { label: '디지털 성범죄 가이드', href: '/guide/digital-sex-crime' },
      { label: '디지털 성범죄 신고 방법', href: '/spoke/digital-sex-crime/report-guide' },
      { label: '딥페이크 피해 대응법', href: '/spoke/digital-sex-crime/deepfake-victim-response' },
      { label: '디지털 성범죄 처벌 기준', href: '/spoke/digital-sex-crime/punishment-standards' },
      { label: '성폭력 피해자 지원 제도', href: '/spoke/sex-crime/victim-support-system' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. dui / dui-criminal-procedure-overview
  // ───────────────────────────────────────────
  {
    domain: 'dui',
    slug: 'dui-criminal-procedure-overview',
    keyword: '음주운전 적발 형사 절차',
    questionKeyword: '음주운전으로 적발되면 형사 절차가 어떻게 진행되나요?',
    ctaKeyword: '음주운전 형사 절차',
    type: '절차타임라인형',
    perspective: 'accused',
    meta: {
      title: '음주운전 형사 절차 5단계 총정리 | 로앤가이드',
      description: '음주운전으로 적발되어 앞으로 어떤 절차가 진행될지 걱정된다면 형사 처리 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>음주측정기에 빨간 불이 들어왔습니다. 면허가 취소되고, 경찰서에서 조서를 쓰게 됩니다. "벌금만 내면 되는 건가, 아니면 재판까지 가는 건가?" 혐의를 받고 있다면 적발부터 선고까지 전체 절차를 파악하는 것이 가장 먼저 해야 할 일입니다.</p>',
    timelineSteps: [
      '현장 음주측정 및 적발 (당일)',
      '경찰 조사 및 조서 작성 (1~4주 이내)',
      '검찰 송치 및 기소 결정 (1~3개월)',
      '재판(정식 재판 또는 약식 명령)',
      '판결 선고 및 면허 행정처분',
    ],
    sections: [
      {
        title: '1단계 — 현장 적발과 음주측정',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제44조에 따라 음주운전이 의심되면 경찰은 호흡측정을 요구할 수 있으며, 이를 거부하면 별도의 처벌(음주측정 거부)을 받습니다</strong></p>\n<ul>\n<li><strong>호흡측정</strong> — 현장에서 호흡측정기로 혈중알코올농도를 측정합니다. 0.03% 이상이면 음주운전에 해당합니다</li>\n<li><strong>채혈측정</strong> — 호흡측정 결과에 이의가 있으면 채혈을 요청할 수 있습니다. 채혈 결과가 최종 증거로 사용됩니다</li>\n<li><strong>현장 조치</strong> — 면허증 압수, 차량 견인, 정황진술보고서 작성이 진행됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">음주측정 거부 = 별도 처벌(1~5년 징역 또는 500만~2천만 원 벌금). 거부하지 마세요</blockquote>',
      },
      {
        title: '2단계 — 경찰 조사와 혈중알코올농도별 처벌 기준',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제148조의2에 따라 혈중알코올농도에 따라 처벌 수위가 달라집니다</strong></p>\n<ul>\n<li><strong>0.03~0.08% 미만</strong> — 1년 이하의 징역 또는 500만 원 이하의 벌금</li>\n<li><strong>0.08~0.2% 미만</strong> — 1~2년 이하의 징역 또는 500만~1천만 원 이하의 벌금</li>\n<li><strong>0.2% 이상</strong> — 2~5년 이하의 징역 또는 1천만~2천만 원 이하의 벌금</li>\n<li><strong>2회 이상(재범)</strong> — 2~5년 이하의 징역 또는 1천만~2천만 원 이하의 벌금</li>\n</ul>\n<p>경찰 조사 시에는 <strong>음주 경위, 음주량, 운전 거리, 사고 유무</strong> 등을 진술하게 됩니다. 진술 전 변호인과 상의하세요.</p>',
      },
      {
        title: '3단계 — 검찰 송치와 기소 방식',
        content:
          '<p><strong style="color:#1e3a5f">검찰은 사안의 경중에 따라 약식기소(벌금형) 또는 정식기소(공판)를 결정합니다</strong></p>\n<ul>\n<li><strong>약식기소</strong> — 초범이고 혈중알코올농도가 낮으며 사고가 없는 경우, 벌금형으로 약식명령이 청구됩니다. 법원 출석 없이 벌금 납부로 종결됩니다</li>\n<li><strong>정식기소</strong> — 혈중알코올농도가 높거나, 사고를 낸 경우, 재범인 경우 정식 재판에 회부됩니다</li>\n<li><strong>기소유예</strong> — 매우 드물지만, 혈중알코올농도가 매우 낮고 특별한 정상참작 사유가 있으면 가능합니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">혐의를 받고 있다면</strong><br/>\n<a href="/diagnosis/dui" style="color:#1565c0;font-weight:600">음주운전 처벌 수위 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '4단계 — 재판 진행과 양형 요소',
        content:
          '<p><strong style="color:#1e3a5f">정식 재판 시 양형에 영향을 미치는 핵심 요소를 미리 파악하고 준비해야 합니다</strong></p>\n<ul>\n<li><strong>유리한 양형 요소</strong> — 초범, 반성문 제출, 음주운전 재범 방지 교육 이수, 자동차 처분, 피해자 합의(사고 시)</li>\n<li><strong>불리한 양형 요소</strong> — 재범, 높은 혈중알코올농도, 사고 발생, 음주측정 거부 이력, 도주</li>\n<li><strong>집행유예 가능성</strong> — 초범이고 0.08~0.2% 미만이면 집행유예를 받을 가능성이 있습니다. 다만 재범이면 실형 가능성이 높아집니다</li>\n</ul>\n<p>대법원 2025도8137 사건에서도 혈중알코올농도 상승기 측정이 쟁점이 되었듯이, <strong>측정 절차의 적법성</strong>은 중요한 방어 포인트가 될 수 있습니다.</p>',
      },
      {
        title: '5단계 — 면허 행정처분과 향후 영향',
        content:
          '<p><strong style="color:#1e3a5f">형사 처벌과 별도로 면허 취소·정지 등 행정처분이 진행됩니다</strong></p>\n<ul>\n<li><strong>0.03~0.08% 미만</strong> — 면허 정지 (100일)</li>\n<li><strong>0.08% 이상</strong> — 면허 취소 (결격기간 1년, 재범 시 2년)</li>\n<li><strong>음주측정 거부</strong> — 면허 취소 (결격기간 1년 이상)</li>\n<li><strong>음주 사고(사상)</strong> — 면허 취소 및 결격기간 가중</li>\n</ul>\n<p>면허 취소 처분에 불복할 경우 <strong>행정심판(90일 이내) 또는 행정소송(90일 이내)</strong>을 제기할 수 있습니다. 다만 인용률이 높지 않으므로 신중하게 판단하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면허 취소 후 재취득: 결격기간 경과 → 학과시험 → 기능시험 → 도로주행시험 순서</blockquote>',
      },
    ],
    cases: [
      {
        title: '혈중알코올농도 상승기 측정의 증명력',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 음주측정 시점이 혈중알코올농도 상승기에 있을 가능성이 있더라도, 측정 방법이 통상적이고 운전 종료 후 약 12분 만에 측정된 점 등을 종합하면 운전 당시 처벌기준치(0.03%) 이상이었다고 보는 것이 논리와 경험칙에 부합한다고 판시했습니다.',
        takeaway:
          '혐의를 받고 있다면 음주측정 절차의 적법성과 시간 간격을 확인하세요. 측정 절차에 문제가 있으면 방어의 근거가 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '음주운전 초범이면 벌금만 내면 되나요?',
        answer:
          '초범이고 혈중알코올농도가 낮으며 사고가 없으면 <strong>약식명령(벌금형)으로 종결되는 경우가 많습니다</strong>. 다만 0.08% 이상이면 정식 재판이 진행될 수 있습니다.',
      },
      {
        question: '음주운전으로 벌금형을 받으면 전과 기록이 남나요?',
        answer:
          '<strong>벌금형도 전과 기록에 해당합니다.</strong> 5년 후 실효되지만, 기간 내에 다시 음주운전을 하면 재범으로 가중처벌됩니다.',
      },
      {
        question: '대리운전을 불렀는데 대리기사가 안 와서 직접 운전한 것도 처벌되나요?',
        answer:
          '<strong>어떤 사유든 음주 상태에서 운전하면 처벌 대상</strong>입니다. 대리운전이 안 오면 택시를 이용하거나 차를 두고 가야 합니다.',
      },
      {
        question: '주차장에서 음주운전해도 처벌되나요?',
        answer:
          '도로교통법상 도로뿐 아니라 <strong>불특정 다수가 이용하는 주차장도 적용 대상</strong>입니다. 아파트 지하주차장, 마트 주차장에서의 운전도 처벌됩니다.',
      },
      {
        question: '음주운전 재범 기준은 어떻게 되나요?',
        answer:
          '음주운전 <strong>벌금 이상의 형이 확정된 날로부터 10년 이내에 다시 적발</strong>되면 재범으로 가중처벌됩니다(2~5년 징역 또는 1천만~2천만 원 벌금).',
      },
    ],
    cta: {
      text: '음주운전 처벌 수위 무료 진단받기',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '음주운전 가이드', href: '/guide/dui' },
      { label: '음주운전 벌금 기준', href: '/spoke/dui/fine-amount-criteria' },
      { label: '음주운전 면허취소 후 재취득', href: '/spoke/dui/license-reacquisition-after-revocation' },
      { label: '음주운전 재범 가중처벌', href: '/spoke/dui/repeat-offense-heavier-punishment' },
      { label: '음주 교통사고 피해자 대응', href: '/spoke/dui/dui-accident-victim-response' },
    ],
  },
];
