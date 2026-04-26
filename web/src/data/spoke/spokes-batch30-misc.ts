import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 이혼/양육비 3 + 회생/파산 3 + 전세 2 = 8개 (batch30-misc)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch30Misc: SpokePage[] = [
  // ── 이혼 1. 가정폭력 긴급피난처 이용과 보호명령 ──
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-emergency-shelter',
    keyword: '가정폭력 긴급피난처 보호명령',
    questionKeyword: '가정폭력을 당하고 있는데 긴급피난처는 어떻게 이용하나요?',
    ctaKeyword: '가정폭력 긴급피난처 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 긴급피난처 이용 절차 3단계 | 로앤가이드',
      description:
        '배우자의 폭력이 반복된다면, 긴급피난처 입소 방법과 보호명령 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>새벽에 또 맞았습니다. 아이가 잠든 방 문 앞에서 소리를 지르는 배우자를 피해 화장실에 숨었습니다. 이번만으로 세 번째입니다. 더 이상 참으면 안 된다는 것을 알지만, 당장 갈 곳이 없어서 발이 묶여 있습니다. 가정폭력특례법은 피해자가 즉시 안전한 곳으로 대피할 수 있도록 긴급피난처 제도를 마련하고 있습니다.</p>',
    timelineSteps: [
      '1단계: 112 신고 또는 여성긴급전화 1366 연락',
      '2단계: 긴급피난처·쉼터 입소',
      '3단계: 법원에 피해자보호명령 신청',
      '4단계: 이혼·양육권 소송 준비',
    ],
    sections: [
      {
        title: '긴급피난처와 보호시설의 차이',
        content:
          '<p><strong style="color:#1e3a5f">긴급피난처는 폭력 직후 즉시 입소할 수 있는 단기 대피소이고, 보호시설(쉼터)은 중장기 거주 시설입니다.</strong></p>\n<ul>\n<li><strong>긴급피난처</strong> — 경찰 신고 또는 1366 상담 후 즉시 입소합니다. 최대 7일간 머물 수 있고 비용은 무료입니다.</li>\n<li><strong>단기보호시설</strong> — 6개월까지 거주가 가능합니다. 아이와 함께 입소할 수 있고, 법률·의료·심리 상담을 지원받습니다.</li>\n<li><strong>장기보호시설</strong> — 2년까지 거주하며 자립을 준비합니다. 직업훈련과 주거 연계까지 포함됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 긴급피난처 위치는 비공개입니다. 가해자가 주소를 알 수 없도록 철저히 보호됩니다.</blockquote>',
      },
      {
        title: '피해자보호명령 신청 방법',
        content:
          '<p><strong style="color:#1e3a5f">법원의 피해자보호명령을 받으면 가해자가 접근하는 것 자체가 범죄가 됩니다.</strong></p>\n<ul>\n<li><strong>신청 자격</strong> — 피해자 본인, 법정대리인, 검사가 가정법원에 신청합니다.</li>\n<li><strong>보호 내용</strong> — 퇴거 명령, 접근금지(100미터 이내), 전화·문자·SNS 연락 금지, 친권 행사 제한 등입니다.</li>\n<li><strong>위반 시 처벌</strong> — 보호명령을 위반하면 2년 이하의 징역 또는 2천만원 이하의 벌금에 처할 수 있습니다.</li>\n<li><strong>처리 기간</strong> — 긴급임시조치는 경찰이 즉시 신청하고, 정식 보호명령은 약 2~4주 소요됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>가정폭력 보호명령 신청, AI가 절차를 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">폭력 상황과 증거 현황을 입력하면 보호명령 신청 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '대피 전 준비할 증거와 서류',
        content:
          '<p><strong style="color:#1e3a5f">안전한 상태에서 미리 확보해야 할 증거가 있습니다.</strong></p>\n<ul>\n<li><strong>폭행 증거</strong> — 부상 사진, 진단서(2주 이상이면 형사처벌 가능성 높음), 112 신고 기록입니다.</li>\n<li><strong>폭언·협박 녹음</strong> — 가정폭력특례법상 피해자의 비밀녹음도 증거로 인정될 수 있습니다.</li>\n<li><strong>신분증·통장</strong> — 본인과 자녀의 주민등록등본, 건강보험카드, 은행 통장을 챙기세요.</li>\n<li><strong>자녀 관련 서류</strong> — 학교 재학증명서, 예방접종 기록을 준비하면 양육권 소송에 도움됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 가해자에게 대피 계획을 알리지 마세요. 폭력이 더 심해질 수 있습니다. 안전한 시점에 한 번에 행동하세요.</blockquote>',
      },
      {
        title: '보호명령 이후 이혼 절차 연계',
        content:
          '<p><strong style="color:#1e3a5f">보호명령과 이혼소송은 병행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>이혼 사유</strong> — 가정폭력은 민법 제840조 제3호 "배우자의 심히 부당한 대우"에 해당합니다.</li>\n<li><strong>위자료</strong> — 폭력 기간과 빈도에 따라 3,000만~5,000만원 이상 인정되는 사례가 있습니다.</li>\n<li><strong>양육권</strong> — 폭력 전력이 있는 배우자에게 양육권이 인정되기는 매우 어렵습니다.</li>\n<li><strong>재산분할</strong> — 보호명령으로 분리된 상태에서도 재산분할 청구가 가능합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정폭력과 이혼 사유',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 배우자의 반복적 폭행이 혼인관계를 파탄에 이르게 한 사유에 해당한다고 판시했습니다.',
        takeaway:
          '가정폭력 피해를 입증하는 진단서와 신고 기록이 있으면 이혼 청구가 인용될 가능성이 높습니다. 보호명령 이력도 유력한 증거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '긴급피난처에 아이와 함께 들어갈 수 있나요?',
        answer:
          '<p>네, 미성년 자녀와 함께 입소할 수 있습니다. 자녀의 학교 전학도 쉼터에서 지원합니다. 주소는 비공개로 처리되므로 가해자가 알 수 없습니다.</p>',
      },
      {
        question: '보호명령을 신청하면 바로 효력이 생기나요?',
        answer:
          '<p>긴급임시조치는 경찰이 현장에서 즉시 신청합니다. 정식 보호명령은 법원 결정까지 2~4주가 소요되지만, 긴급임시조치로 그 사이에도 보호를 받을 수 있습니다.</p>',
      },
      {
        question: '남편이 진심으로 반성하고 있는데 보호명령을 취소할 수 있나요?',
        answer:
          '<p>피해자가 법원에 보호명령 취소 신청을 할 수 있습니다. 하지만 가정폭력은 재발률이 매우 높으므로 전문 상담가와 충분히 상의한 후 결정하세요.</p>',
      },
      {
        question: '경제적 능력이 없는데 이혼소송을 할 수 있나요?',
        answer:
          '<p>법률구조공단(132)에서 무료 법률 대리를 지원합니다. 가정폭력 피해자는 우선 지원 대상이므로 소득과 관계없이 도움을 받을 수 있습니다.</p>',
      },
      {
        question: '가정폭력으로 신고하면 남편이 바로 구속되나요?',
        answer:
          '<p>현행범이 아니면 즉시 구속은 어렵습니다. 하지만 경찰이 긴급임시조치(퇴거, 접근금지 등)를 바로 신청할 수 있고, 반복 폭행의 경우 구속영장 청구 가능성이 높아집니다.</p>',
      },
    ],
    cta: { text: '가정폭력 보호명령 신청 절차 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '가정폭력 이혼 절차', href: '/guide/divorce/domestic-violence-divorce-process' },
      { label: '접근금지 보호명령', href: '/guide/divorce/divorce-restraining-order-protection' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '양육비 증액 청구', href: '/guide/divorce/divorce-child-support-increase' },
    ],
  },

  // ── 양육비 2. 양육비 변경 신청 (소득 변동 시) ──
  {
    domain: 'child-support',
    slug: 'child-support-modification-income-change',
    keyword: '양육비 변경 신청 소득 변동',
    questionKeyword: '상대방 소득이 올랐는데 양육비를 변경할 수 있나요?',
    ctaKeyword: '양육비 변경 신청 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '양육비 변경 신청 방법 — 소득 변동 시 3단계 | 로앤가이드',
      description:
        '상대방 소득이 변했다면, 양육비 증액·감액 변경 신청 절차와 필요 서류를 지금 확인하세요.',
    },
    intro:
      '<p>이혼 당시 월 50만원으로 정한 양육비가 3년째 그대로입니다. 그 사이 상대방은 승진하고 연봉이 두 배 가까이 올랐습니다. 아이는 중학생이 되어 학원비와 급식비가 늘어났지만, 정해진 금액만 받고 있습니다. 양육비는 사정변경이 있으면 법원에 변경을 신청할 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 소득 변동 증거 확보',
      '2단계: 가정법원에 양육비 변경 심판 청구',
      '3단계: 법원 심리·조정 절차',
      '4단계: 변경 결정 확정·이행',
    ],
    sections: [
      {
        title: '양육비 변경이 가능한 사정변경 사유',
        content:
          '<p><strong style="color:#1e3a5f">양육비 결정 이후 중대한 사정변경이 있으면 증액 또는 감액을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>상대방 소득 증가</strong> — 연봉 인상, 사업 소득 증가, 부동산 임대 수입 등이 해당합니다.</li>\n<li><strong>자녀 양육비 증가</strong> — 진학, 질병, 치료비 등으로 실제 양육비가 늘어난 경우입니다.</li>\n<li><strong>양육자 소득 감소</strong> — 실직, 질병 등으로 양육자의 경제 상황이 악화된 경우입니다.</li>\n<li><strong>물가 변동</strong> — 협의 이후 상당 기간이 지나 물가가 크게 오른 경우도 사유가 됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 법원은 양쪽 부모의 소득, 재산, 자녀의 필요를 종합적으로 고려하여 양육비를 재산정합니다.</blockquote>',
      },
      {
        title: '양육비 변경 신청 절차와 준비 서류',
        content:
          '<p><strong style="color:#1e3a5f">가정법원에 양육비 변경 심판 청구서를 제출합니다.</strong></p>\n<ul>\n<li><strong>관할 법원</strong> — 자녀의 주소지 가정법원에 신청합니다.</li>\n<li><strong>필요 서류</strong> — 기존 이혼 판결문(또는 조정조서), 상대방 소득 변동 증빙(건강보험료 변동내역, 국세청 소득금액증명원), 자녀 양육비 지출 내역서입니다.</li>\n<li><strong>소득 확인 방법</strong> — 법원에 상대방의 국민건강보험료 부과내역 조회를 신청하면 추정 소득을 확인할 수 있습니다.</li>\n<li><strong>인지대·송달료</strong> — 비재산권 사건으로 인지대는 5,000원 수준이고, 송달료는 약 5만원입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>양육비 증액 가능 금액, AI가 계산해 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">현재 양육비와 상대방 소득 변동 내용을 입력하면 변경 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비 산정 기준과 변경 범위',
        content:
          '<p><strong style="color:#1e3a5f">법원은 양육비 산정 기준표를 참고하여 적정 금액을 결정합니다.</strong></p>\n<ul>\n<li><strong>양육비 산정표</strong> — 부모 합산소득과 자녀 나이(0~2세, 3~5세, 6~11세, 12~14세, 15세 이상)에 따라 표준 양육비가 정해집니다.</li>\n<li><strong>가산 항목</strong> — 사교육비, 의료비, 보험료 등 특별비용은 별도로 분담 비율을 정합니다.</li>\n<li><strong>소급 적용</strong> — 변경 청구일부터 소급하여 적용되므로 증거가 확보되면 빨리 신청하세요.</li>\n<li><strong>변경 한도</strong> — 특별한 사정이 없으면 현행 금액 대비 30~50% 범위에서 변경되는 경우가 많습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 변경과 사정변경 원칙',
        summary:
          '대법원 2024므13669 사건(대법원, 2025.10.16 선고)에서 법원은 이혼 후 양육비 결정에 있어 부모 쌍방의 경제적 사정 변동을 반영하여 양육비를 재산정할 수 있다고 판시했습니다.',
        takeaway:
          '소득 변동이 객관적으로 입증되면 양육비 변경 청구가 인용될 가능성이 높습니다. 건강보험료 변동내역이 가장 강력한 소득 증빙입니다.',
      },
    ],
    faq: [
      {
        question: '상대방이 소득을 숨기면 어떻게 하나요?',
        answer:
          '<p>법원에 사실조회를 신청하세요. 국민건강보험공단, 국세청, 금융기관에 소득과 재산 조회를 요청할 수 있습니다. 상대방이 허위 신고해도 건강보험료로 추정 소득이 드러납니다.</p>',
      },
      {
        question: '협의이혼으로 정한 양육비도 변경할 수 있나요?',
        answer:
          '<p>네, 협의이혼 시 정한 양육비도 사정변경이 있으면 가정법원에 변경 심판을 청구할 수 있습니다. 협의서와 관계없이 법원이 새로 산정합니다.</p>',
      },
      {
        question: '양육비 변경은 언제부터 적용되나요?',
        answer:
          '<p>원칙적으로 변경 청구일(심판 청구서 접수일)부터 소급 적용됩니다. 판결 확정일이 아니라 청구일 기준이므로 조기에 신청하는 것이 유리합니다.</p>',
      },
      {
        question: '아이가 대학에 진학하면 양육비가 더 올라가나요?',
        answer:
          '<p>대학 등록금 등 고등교육비는 양육비와 별도로 부담 비율을 정할 수 있습니다. 다만 성년(만 19세) 이후에는 부모의 양육의무가 원칙적으로 종료됩니다.</p>',
      },
      {
        question: '양육비 변경 심판 비용은 얼마인가요?',
        answer:
          '<p>인지대 약 5,000원, 송달료 약 5만원으로 총 6만원 이내입니다. 변호사 비용이 부담되면 법률구조공단(132) 무료 소송 대리를 이용할 수 있습니다.</p>',
      },
    ],
    cta: { text: '양육비 변경 가능 여부 AI로 바로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 청구 시작', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation-standard' },
      { label: '양육비 이행명령', href: '/guide/child-support/child-support-enforcement-order-apply' },
      { label: '양육비 증액 방법', href: '/guide/child-support/child-support-increase-request-method' },
      { label: '이혼 재산분할', href: '/guide/divorce/divorce-property-division-scope-faq' },
    ],
  },

  // ── 이혼 3. 불륜 증거 적법성 기준과 수집 방법 ──
  {
    domain: 'divorce',
    slug: 'divorce-affair-evidence-admissibility',
    keyword: '불륜 증거 적법성 수집 방법',
    questionKeyword: '배우자의 불륜 증거를 어떻게 수집해야 재판에서 인정되나요?',
    ctaKeyword: '불륜 증거 수집 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '불륜 증거 적법성 기준 5가지 — 수집 방법 총정리 | 로앤가이드',
      description:
        '배우자의 외도를 알게 됐다면, 재판에서 인정되는 증거와 위법 수집 기준을 지금 확인하세요.',
    },
    intro:
      '<p>배우자 핸드폰에서 모르는 사람과의 카톡을 발견했습니다. 새벽마다 주고받은 애정 표현과 모텔 예약 내역까지 확인했습니다. 캡처를 했지만, 이렇게 몰래 본 증거가 재판에서 인정되는지 불안합니다. 불륜 증거는 수집 방법에 따라 적법성 판단이 달라지므로 기준을 정확히 알아야 합니다.</p>',
    sections: [
      {
        title: '재판에서 인정되는 불륜 증거 유형',
        content:
          '<p><strong style="color:#1e3a5f">법원은 다양한 형태의 증거를 종합적으로 판단합니다.</strong></p>\n<ul>\n<li><strong>카카오톡·문자 메시지</strong> — 애정 표현, 만남 약속, 성적 대화 내용이 담긴 메시지입니다.</li>\n<li><strong>사진·동영상</strong> — 호텔 투숙 사진, 함께 찍은 여행 사진, SNS 게시물 등입니다.</li>\n<li><strong>카드 결제 내역</strong> — 모텔, 레스토랑, 선물 구매 등 이례적 지출 패턴입니다.</li>\n<li><strong>차량 블랙박스·GPS</strong> — 출퇴근 외 시간대에 특정 장소를 반복 방문한 기록입니다.</li>\n<li><strong>목격자 진술</strong> — 이웃, 지인, 직장 동료의 진술서도 보조 증거로 활용됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 단일 증거보다 여러 증거를 조합하면 증명력이 훨씬 높아집니다.</blockquote>',
      },
      {
        title: '적법 증거와 위법 증거의 구분 기준',
        content:
          '<p><strong style="color:#1e3a5f">증거 수집 방법이 위법하면 재판에서 배척될 수 있습니다.</strong></p>\n<ul>\n<li><strong>공동 명의 기기</strong> — 부부 공동 사용 컴퓨터나 가족 요금제 휴대폰의 메시지 확인은 적법 가능성이 높습니다.</li>\n<li><strong>개인 기기 무단 접근</strong> — 배우자의 잠금을 해제하고 메시지를 캡처하면 위법 소지가 있지만, 법원은 가정 내 발견 경위를 고려합니다.</li>\n<li><strong>몰래 녹음</strong> — 대화 당사자 일방의 녹음(자기 대화 녹음)은 원칙적으로 적법합니다. 제3자 간 대화 녹음은 위법입니다.</li>\n<li><strong>불법 위치추적기</strong> — 상대방 차량에 GPS 추적기를 부착하는 것은 위치정보법 위반으로 형사처벌 대상입니다.</li>\n<li><strong>흥신소 의뢰</strong> — 미행 자체는 적법하지만, 무단 촬영이나 주거침입이 수반되면 위법해집니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>수집한 증거의 적법성, AI가 즉시 판단해 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">증거 종류와 수집 방법을 입력하면 재판 활용 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '안전한 증거 수집 실전 가이드',
        content:
          '<p><strong style="color:#1e3a5f">위법성 리스크를 줄이면서 효과적으로 증거를 모으는 방법입니다.</strong></p>\n<ul>\n<li><strong>자연스러운 발견</strong> — 우연히 열려 있는 화면, 공유 태블릿에 남은 로그인 기록은 적법성 문제가 적습니다.</li>\n<li><strong>본인 계정 조회</strong> — 가족카드 사용 내역, 공동 계좌 출금 기록은 자유롭게 조회할 수 있습니다.</li>\n<li><strong>SNS 공개 게시물</strong> — 인스타그램, 페이스북 등 공개 설정된 게시물은 누구나 캡처할 수 있습니다.</li>\n<li><strong>직접 대화 녹음</strong> — 배우자에게 불륜 사실을 추궁하면서 녹음하는 것은 적법합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 상대방의 휴대폰을 해킹하거나 스파이 앱을 설치하면 정보통신망법 위반으로 형사처벌을 받을 수 있습니다.</blockquote>',
      },
      {
        title: '불륜 증거의 재판 활용과 효과',
        content:
          '<p><strong style="color:#1e3a5f">적법한 불륜 증거는 이혼소송에서 위자료 산정과 유책 판단에 결정적입니다.</strong></p>\n<ul>\n<li><strong>유책배우자 판단</strong> — 불륜이 입증되면 상대방이 유책배우자가 되어 이혼 청구가 인용됩니다.</li>\n<li><strong>위자료 증액</strong> — 불륜 기간, 상간자와의 관계 심도에 따라 위자료가 증가합니다. 평균 2,000만~5,000만원 수준입니다.</li>\n<li><strong>상간자 손해배상</strong> — 배우자뿐 아니라 상간자에게도 별도로 위자료를 청구할 수 있습니다.</li>\n<li><strong>양육권 영향</strong> — 불륜 자체가 양육권에 직접 영향을 주지는 않지만, 양육 환경 평가 시 고려될 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 불륜 증거와 위자료 산정',
        summary:
          '대법원 2024므14938 사건(대법원, 2025.09.11 선고)에서 법원은 배우자의 부정행위가 혼인 파탄의 주된 원인인 경우 유책 정도와 혼인 기간을 종합적으로 고려하여 위자료를 산정해야 한다고 판시했습니다.',
        takeaway:
          '불륜 증거가 충분하면 유책배우자의 이혼 청구는 기각되고, 피해 배우자의 위자료 청구는 인용될 가능성이 높습니다.',
      },
    ],
    faq: [
      {
        question: '배우자 핸드폰을 몰래 본 카톡 캡처가 증거로 인정되나요?',
        answer:
          '<p>위법 수집 증거에 해당할 수 있지만, 법원은 부부관계의 특수성을 고려하여 증거 능력을 인정하는 경우가 있습니다. 다만 해킹이나 스파이 앱 설치와는 구분됩니다.</p>',
      },
      {
        question: '흥신소에 의뢰해서 받은 사진도 증거로 쓸 수 있나요?',
        answer:
          '<p>공공장소에서의 미행과 촬영으로 얻은 사진은 증거로 활용 가능합니다. 다만 무단 주거침입이나 도촬이 수반되면 위법 증거가 됩니다.</p>',
      },
      {
        question: '불륜 상대방에게도 위자료를 청구할 수 있나요?',
        answer:
          '<p>네, 상간자에게 별도의 손해배상청구 소송을 제기할 수 있습니다. 상간자가 배우자의 혼인 사실을 알면서도 부정행위를 한 경우 인용됩니다.</p>',
      },
      {
        question: '증거가 카톡 캡처 하나뿐인데 충분한가요?',
        answer:
          '<p>단일 증거만으로는 부족할 수 있습니다. 카드 결제 내역, SNS 게시물, 목격자 진술 등 보조 증거를 함께 확보하면 증명력이 크게 높아집니다.</p>',
      },
      {
        question: '불륜을 알고도 오래 참았는데 지금 이혼해도 위자료를 받나요?',
        answer:
          '<p>불륜을 인지한 후 장기간 혼인을 유지한 경우에도 위자료 청구는 가능합니다. 다만 소멸시효(불법행위를 안 날로부터 3년)에 주의하세요.</p>',
      },
    ],
    cta: { text: '불륜 증거 적법성 판단 AI 상담 시작하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '숨긴 재산 찾기', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '위자료 허위 주장 방어', href: '/guide/divorce/divorce-alimony-false-claim-defense' },
      { label: '접근금지 보호명령', href: '/guide/divorce/divorce-restraining-order-protection' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
    ],
  },

  // ── 회생 4. 회생 변제금 미납 시 결과와 대응 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-payment-default-consequences',
    keyword: '회생 변제금 미납 결과 대응',
    questionKeyword: '회생 변제금을 내지 못하면 어떻게 되나요?',
    ctaKeyword: '회생 변제금 미납 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '회생 변제금 미납 시 결과와 대응법 3가지 | 로앤가이드',
      description:
        '회생 변제금을 밀리고 있다면, 폐지 전에 할 수 있는 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>매달 45만원씩 내던 회생 변제금을 두 달째 밀리고 있습니다. 갑작스러운 실직으로 당장 다음 달 생활비도 막막한 상황입니다. 변제금을 못 내면 회생이 폐지되고 빚이 원래대로 돌아온다는 말에 잠을 이룰 수 없습니다. 하지만 미납에도 대응 방법이 있습니다.</p>',
    sections: [
      {
        title: '변제금 미납 시 단계별 결과',
        content:
          '<p><strong style="color:#1e3a5f">변제금 미납이 즉시 회생 폐지로 이어지지는 않습니다.</strong></p>\n<ul>\n<li><strong>1~2회 미납</strong> — 법원에서 납부 독촉 통지가 옵니다. 이 단계에서 바로잡으면 문제없습니다.</li>\n<li><strong>3회 이상 미납</strong> — 채권자가 법원에 회생계획 폐지 신청을 할 수 있습니다.</li>\n<li><strong>법원 심문</strong> — 폐지 심문기일에 미납 사유를 소명하고 향후 납부 계획을 제출합니다.</li>\n<li><strong>회생 폐지 결정</strong> — 정당한 사유 없이 계속 미납하면 회생계획이 폐지되고 원래 채무가 부활합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 회생 폐지가 결정되면 감면받은 채무 전액이 부활하고, 채권자의 강제집행이 재개됩니다.</blockquote>',
      },
      {
        title: '변제금을 못 낼 때 즉시 해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">미납 사실을 숨기지 말고 적극적으로 대응해야 합니다.</strong></p>\n<ul>\n<li><strong>법원에 사유서 제출</strong> — 실직, 질병, 사고 등 미납 사유를 서면으로 즉시 알립니다. 진단서, 퇴직증명서 등을 첨부합니다.</li>\n<li><strong>변제계획 변경 신청</strong> — 소득이 줄었으면 변제금 감액 또는 변제기간 연장을 신청합니다. 최대 5년에서 8년까지 연장이 가능합니다.</li>\n<li><strong>일시적 납부유예 요청</strong> — 사유가 일시적이면 납부유예를 요청합니다. 3~6개월 유예 후 정상 납부로 복귀하는 방식입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>회생 변제금 미납 대응, AI가 방법을 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">미납 사유와 현재 상황을 입력하면 폐지 방지 방법을 무료로 확인하세요.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '변제계획 변경 신청 방법',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제247조에 따라 변제계획을 변경할 수 있습니다.</strong></p>\n<ul>\n<li><strong>신청 자격</strong> — 채무자 본인, 회생위원, 채권자가 변경 신청을 할 수 있습니다.</li>\n<li><strong>변경 범위</strong> — 변제금 감액, 변제기간 연장, 변제 방법 변경이 가능합니다.</li>\n<li><strong>첨부 서류</strong> — 소득 감소 증빙(퇴직증명서, 급여명세서), 가계수지표, 향후 소득 전망서를 제출합니다.</li>\n<li><strong>법원 결정</strong> — 법원은 변경안이 채권자의 이익을 해하지 않는 범위에서 인가합니다.</li>\n</ul>',
      },
      {
        title: '회생 폐지 후 선택지',
        content:
          '<p><strong style="color:#1e3a5f">회생이 폐지되어도 새로운 방법을 찾을 수 있습니다.</strong></p>\n<ul>\n<li><strong>재신청</strong> — 회생 폐지 후에도 요건을 갖추면 다시 회생을 신청할 수 있습니다. 다만 법원이 신의성실 원칙을 엄격히 심사합니다.</li>\n<li><strong>파산 전환</strong> — 회생이 불가능한 상태면 파산·면책으로 전환하는 것이 현실적일 수 있습니다.</li>\n<li><strong>채권자 개별 협상</strong> — 채권자와 직접 분할상환 협의를 시도할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 폐지 전에 변경 신청을 하는 것이 훨씬 유리합니다. 폐지 후 재신청은 심사가 매우 까다롭습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 회생계획 변경과 채무자의 성실의무',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 채무자가 회생절차 진행 중 변제 능력 변동이 있을 때 적극적으로 법원에 알리고 변경 신청을 해야 하며, 이를 게을리하면 폐지 사유가 된다고 판시했습니다.',
        takeaway:
          '변제금 미납 사유가 정당하더라도 법원에 미리 알리지 않으면 불이익을 받습니다. 사유 발생 즉시 서면으로 소명하세요.',
      },
    ],
    faq: [
      {
        question: '변제금을 한 달만 못 내도 회생이 취소되나요?',
        answer:
          '<p>한 달 미납으로 즉시 폐지되지는 않습니다. 법원에서 납부 독촉이 오고, 사유를 소명하면 유예를 받을 수 있습니다. 다만 연락 없이 방치하면 폐지 가능성이 높아집니다.</p>',
      },
      {
        question: '실직했는데 변제금을 줄일 수 있나요?',
        answer:
          '<p>네, 변제계획 변경 신청을 통해 변제금 감액이 가능합니다. 퇴직증명서와 구직활동 증빙을 함께 제출하면 법원이 소득 감소를 반영해 줍니다.</p>',
      },
      {
        question: '회생이 폐지되면 신용불량이 다시 되나요?',
        answer:
          '<p>회생 폐지 시 감면받은 채무가 원래 금액으로 부활하고, 채권자의 강제집행(급여 압류 등)이 재개됩니다. 신용정보에도 연체 이력이 다시 반영됩니다.</p>',
      },
      {
        question: '변제기간을 8년까지 연장할 수 있다고요?',
        answer:
          '<p>개인회생의 변제기간은 원칙적으로 3~5년이지만, 불가피한 사정이 있으면 법원이 최대 8년까지 연장을 인가할 수 있습니다. 월 변제금이 그만큼 줄어듭니다.</p>',
      },
      {
        question: '파산으로 전환하면 기존 변제금은 어떻게 되나요?',
        answer:
          '<p>회생 중 이미 납부한 변제금은 돌려받을 수 없습니다. 파산·면책이 확정되면 남은 채무가 전부 면제되므로 총 부담은 줄어들 수 있습니다.</p>',
      },
    ],
    cta: { text: '회생 변제금 미납 대응 방법 AI로 확인하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '회생 신청 절차', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '회생 변제금 계산', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '회생 vs 파산 선택', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
      { label: '회생 기각 사유 방지', href: '/guide/rehabilitation/rehabilitation-rejection-reasons-prevention' },
    ],
  },

  // ── 파산 5. 파산 면책 시 보유 가능 재산 범위 ──
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-personal-property-exempt',
    keyword: '파산 면책 보유 가능 재산',
    questionKeyword: '파산하면 재산을 전부 빼앗기나요?',
    ctaKeyword: '파산 면책 재산 범위 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '파산 면책 시 보유 가능 재산 6가지 기준 | 로앤가이드',
      description:
        '파산을 고려하고 있다면, 면책 후에도 지킬 수 있는 재산의 범위를 지금 확인하세요.',
    },
    intro:
      '<p>빚이 1억을 넘었고 매달 이자만 갚고 있습니다. 파산을 생각하지만 집, 차, 예금까지 전부 빼앗기면 당장 생활이 불가능합니다. 특히 아이 학자금으로 모아둔 300만원과 출퇴근용 중고차가 걱정입니다. 파산법은 생존에 필요한 최소한의 재산을 보호합니다.</p>',
    sections: [
      {
        title: '파산해도 빼앗기지 않는 재산(자유재산)',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제383조는 생활에 필수적인 재산을 파산재단에서 제외합니다.</strong></p>\n<ul>\n<li><strong>생활필수품</strong> — 가전제품, 가구, 의류, 식료품 등 가정생활에 필요한 물품입니다.</li>\n<li><strong>직업 도구</strong> — 업무에 필수적인 공구, 장비, 차량(소형 중고차 수준)입니다.</li>\n<li><strong>급여의 1/2</strong> — 월급의 절반은 압류 금지 재산입니다(월 300만원 이하 전액 보호).</li>\n<li><strong>국민연금·퇴직연금</strong> — 연금 수급권은 압류 금지 재산으로 보호됩니다.</li>\n<li><strong>소액 예금</strong> — 법원이 인정하는 생계 자금(통상 150만~300만원 수준)입니다.</li>\n<li><strong>보험 해약환급금</strong> — 법원에 자유재산 확장 신청을 하면 일부 보험도 보유할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 자유재산 범위는 법정 기준 외에 법원에 확장 신청을 통해 넓힐 수 있습니다.</blockquote>',
      },
      {
        title: '자유재산 확장 신청 방법',
        content:
          '<p><strong style="color:#1e3a5f">법정 자유재산 외에 추가로 보유를 원하는 재산이 있으면 법원에 확장 신청을 합니다.</strong></p>\n<ul>\n<li><strong>신청 시기</strong> — 파산선고 이후 면책결정 확정 전까지 신청합니다.</li>\n<li><strong>대상 재산</strong> — 보험 해약환급금, 임차보증금 반환청구권, 소형 자동차 등이 대표적입니다.</li>\n<li><strong>판단 기준</strong> — 법원은 채무자의 생활 상황, 수입 전망, 부양가족 수를 고려하여 결정합니다.</li>\n<li><strong>실무 기준</strong> — 서울회생법원은 총 자유재산 확장 범위를 통상 500만~1,500만원 수준으로 인정합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>파산해도 지킬 수 있는 재산, AI가 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">보유 재산 목록을 입력하면 자유재산 해당 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '파산재단에 포함되는 재산',
        content:
          '<p><strong style="color:#1e3a5f">자유재산을 제외한 모든 재산은 파산재단에 편입되어 채권자에게 배분됩니다.</strong></p>\n<ul>\n<li><strong>부동산</strong> — 아파트, 주택, 토지는 전부 파산재단에 포함됩니다. 다만 소액 임차보증금은 자유재산 확장 대상입니다.</li>\n<li><strong>예금·적금</strong> — 은행 예금, 적금, 주식, 펀드 등 금융자산이 포함됩니다.</li>\n<li><strong>자동차</strong> — 시가 500만원 이상의 차량은 환가 대상입니다. 소형 중고차는 자유재산으로 인정받을 수 있습니다.</li>\n<li><strong>보증금</strong> — 전세보증금, 월세보증금도 포함됩니다. 다만 주거 안정을 위해 일부 보호됩니다.</li>\n</ul>',
      },
      {
        title: '파산 전 재산 이전의 위험성',
        content:
          '<p><strong style="color:#1e3a5f">파산 신청 전에 재산을 타인에게 이전하면 면책이 불허될 수 있습니다.</strong></p>\n<ul>\n<li><strong>사해행위</strong> — 파산 전 1~2년 내 재산을 저가 양도하거나 무상 이전하면 파산관재인이 취소할 수 있습니다.</li>\n<li><strong>면책 불허 사유</strong> — 채권자를 해할 목적으로 재산을 은닉·손괴하면 면책이 불허됩니다.</li>\n<li><strong>사기파산죄</strong> — 재산 은닉이 악질적이면 형사처벌(10년 이하 징역)을 받을 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 파산 전 재산을 가족에게 넘기는 것은 가장 흔한 면책 불허 사유입니다. 절대 하지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산 면책과 재산 보호 범위',
        summary:
          '대법원 2023다316387 사건(대법원, 2026.01.29 선고)에서 법원은 파산절차에서 채무자의 자유재산 범위를 판단할 때 채무자의 생활 유지와 경제적 재기 가능성을 함께 고려해야 한다고 판시했습니다.',
        takeaway:
          '법원은 채무자의 최소 생활 보장을 중시합니다. 자유재산 확장 신청 시 부양가족과 생활비를 구체적으로 소명하면 인정 범위가 넓어집니다.',
      },
    ],
    faq: [
      {
        question: '출퇴근용 중고차도 빼앗기나요?',
        answer:
          '<p>시가 200만~300만원 이하의 소형 중고차는 자유재산으로 인정받을 가능성이 높습니다. 출퇴근에 필수적이라는 소명이 있으면 자유재산 확장 신청으로 보호할 수 있습니다.</p>',
      },
      {
        question: '국민연금을 받고 있는데 파산하면 연금이 끊기나요?',
        answer:
          '<p>국민연금 수급권은 압류 금지 재산이므로 파산해도 연금은 계속 받습니다. 다만 연금이 예금 계좌에 입금되면 그 예금은 별도 보호 조치가 필요합니다.</p>',
      },
      {
        question: '전세보증금이 있는데 파산하면 집에서 쫓겨나나요?',
        answer:
          '<p>소액 임차보증금은 주택임대차보호법에 따라 보호됩니다. 서울 기준 5,500만원까지 우선변제를 받으므로 이 범위 내 보증금은 보호될 수 있습니다.</p>',
      },
      {
        question: '보험을 해약해야 하나요?',
        answer:
          '<p>보험 해약환급금이 파산재단에 포함될 수 있습니다. 하지만 자유재산 확장 신청으로 질병보험 등 생활 필수 보험은 유지할 수 있는 경우가 있습니다.</p>',
      },
      {
        question: '파산 후에 새로 번 돈도 빼앗기나요?',
        answer:
          '<p>파산선고 이후에 취득하는 재산(신득재산)은 파산재단에 포함되지 않습니다. 파산 후 새로 번 급여, 사업 소득은 전액 본인의 것입니다.</p>',
      },
    ],
    cta: { text: '파산 면책 시 보유 가능 재산 AI로 확인하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산 면책 절차', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 vs 회생 비교', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation-comparison' },
      { label: '파산 후 재출발 요건', href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements' },
      { label: '파산 후 신용 회복', href: '/guide/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
    ],
  },

  // ── 회생 6. 개인사업자 회생 특칙과 절차 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-self-employed-special-rules',
    keyword: '개인사업자 회생 특칙 절차',
    questionKeyword: '개인사업자도 회생 신청을 할 수 있나요?',
    ctaKeyword: '개인사업자 회생 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '개인사업자 회생 신청 특칙 — 요건과 절차 정리 | 로앤가이드',
      description:
        '사업 채무로 힘들다면, 개인사업자 회생의 특별 요건과 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>3년간 운영하던 식당의 매출이 급감해 밀린 대출금과 카드빚이 8천만원에 달합니다. 사업을 유지하면서 빚을 정리하고 싶지만, 직장인 회생과 뭐가 다른지 모르겠습니다. 개인사업자는 영업소득의 특성상 별도의 신청 요건과 절차가 적용됩니다.</p>',
    timelineSteps: [
      '1단계: 채무 총액·소득 확인 후 자격 판단',
      '2단계: 회생 신청서 및 소득·지출 증빙 제출',
      '3단계: 개시결정 후 변제계획안 작성',
      '4단계: 채권자 이의·법원 인가',
    ],
    sections: [
      {
        title: '개인사업자 회생의 특별 요건',
        content:
          '<p><strong style="color:#1e3a5f">개인사업자는 채무 한도와 소득 산정 방식이 근로소득자와 다릅니다.</strong></p>\n<ul>\n<li><strong>채무 한도</strong> — 담보채무 15억원, 무담보채무 10억원 이하여야 합니다(2024년 기준).</li>\n<li><strong>소득 산정</strong> — 급여명세서 대신 종합소득세 신고서, 부가세 신고서, 매출장부로 소득을 입증합니다.</li>\n<li><strong>사업 지속</strong> — 회생 중에도 사업을 계속할 수 있습니다. 사업 폐업이 요건이 아닙니다.</li>\n<li><strong>가용소득 계산</strong> — 매출에서 사업경비, 세금, 최저생계비를 빼고 남는 금액이 변제 원천입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업 소득이 불규칙해도 평균 소득으로 계산합니다. 최근 1~2년 매출 추이를 기준으로 합니다.</blockquote>',
      },
      {
        title: '개인사업자 회생 신청 시 준비 서류',
        content:
          '<p><strong style="color:#1e3a5f">근로소득자보다 제출 서류가 많으므로 미리 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>사업자등록증</strong> — 현재 영업 중임을 증명합니다.</li>\n<li><strong>종합소득세 신고서</strong> — 최근 2년치를 제출합니다. 국세청 홈택스에서 발급받습니다.</li>\n<li><strong>부가가치세 신고서</strong> — 분기별 매출을 확인하는 핵심 서류입니다.</li>\n<li><strong>매출장부·카드 매출 내역</strong> — POS 매출, 카드사 매출 증빙, 현금영수증 발행 내역을 포함합니다.</li>\n<li><strong>사업 관련 채무 내역</strong> — 대출, 외상매입금, 임대료 미납 등 사업 채무를 전부 정리합니다.</li>\n<li><strong>가계수지표</strong> — 개인 생활비와 사업 경비를 분리하여 작성합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>개인사업자 회생 자격, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">채무 총액과 사업 소득을 입력하면 회생 신청 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사업 유지하면서 회생하는 실전 전략',
        content:
          '<p><strong style="color:#1e3a5f">회생 개시 후에도 사업을 계속 운영할 수 있습니다.</strong></p>\n<ul>\n<li><strong>거래처 관계</strong> — 회생 개시결정이 공고되어도 기존 거래처와의 계약은 유지됩니다.</li>\n<li><strong>사업 자금</strong> — 법원 허가를 받으면 운전자금 차입도 가능합니다.</li>\n<li><strong>체납 세금</strong> — 국세·지방세 체납분도 회생채권에 포함되어 분할 납부합니다.</li>\n<li><strong>임대차 보호</strong> — 상가 임대차보증금은 회생절차에서 별도로 보호됩니다.</li>\n</ul>',
      },
      {
        title: '개인사업자 회생 vs 법인 회생 차이',
        content:
          '<p><strong style="color:#1e3a5f">개인사업자는 법인과 달리 개인 재산과 사업 재산이 분리되지 않습니다.</strong></p>\n<ul>\n<li><strong>채무 범위</strong> — 개인사업자는 사업 채무와 개인 채무를 모두 포함합니다. 법인은 법인 채무만 대상입니다.</li>\n<li><strong>면책 효과</strong> — 개인사업자 회생은 변제완료 시 잔여 채무가 면책됩니다. 법인 회생은 면책 개념이 없습니다.</li>\n<li><strong>절차 비용</strong> — 개인사업자 회생이 법인 회생보다 비용이 훨씬 적습니다(인지대 3만원 수준).</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 1인 법인 대표라면 법인 폐업 후 개인사업자 또는 개인 회생으로 전환하는 것이 유리할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 개인사업자의 회생절차와 소득 산정',
        summary:
          '대법원 2025다211379 사건(대법원, 2025.12.04 선고)에서 법원은 개인사업자의 회생절차에서 가용소득을 산정할 때 사업의 계절적 변동과 업종 특성을 고려하여 합리적으로 평균해야 한다고 판시했습니다.',
        takeaway:
          '매출이 불규칙한 사업자도 최근 1~2년 평균 소득으로 변제금이 산정됩니다. 비수기 매출만으로 판단하지 않으므로 연간 데이터를 준비하세요.',
      },
    ],
    faq: [
      {
        question: '사업을 접지 않아도 회생 신청이 되나요?',
        answer:
          '<p>네, 사업을 유지하면서 회생 신청이 가능합니다. 오히려 사업 소득이 변제 원천이므로 사업을 계속하는 것이 유리합니다.</p>',
      },
      {
        question: '매출이 들쭉날쭉한데 변제금은 어떻게 정하나요?',
        answer:
          '<p>최근 1~2년 평균 소득을 기준으로 변제금을 산정합니다. 계절적 변동이 큰 업종은 연간 평균으로 계산합니다.</p>',
      },
      {
        question: '사업 관련 대출과 개인 카드빚을 같이 정리할 수 있나요?',
        answer:
          '<p>네, 개인사업자 회생은 사업 채무와 개인 채무를 합산하여 한 번에 정리합니다. 채무 종류를 구분할 필요 없이 모두 신청서에 포함합니다.</p>',
      },
      {
        question: '세금 체납도 회생으로 해결되나요?',
        answer:
          '<p>국세·지방세 체납분도 회생채권에 포함됩니다. 다만 세금은 우선채권으로 분류되어 다른 채권보다 먼저 변제해야 하는 경우가 있습니다.</p>',
      },
      {
        question: '개인사업자에서 법인으로 전환한 경우 어떻게 되나요?',
        answer:
          '<p>법인 전환 전 개인사업자 시절의 채무는 대표 개인의 채무이므로 개인 회생으로 정리할 수 있습니다. 법인 채무와 개인 채무를 분리하여 판단합니다.</p>',
      },
    ],
    cta: { text: '개인사업자 회생 자격 AI로 확인하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '회생 신청 절차', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '회생 변제금 계산', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '회생 vs 파산 선택', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
      { label: '파산 면책 절차', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
    ],
  },

  // ── 전세 7. 전세 특약사항 체크리스트 필수 10개 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-contract-special-agreement-checklist',
    keyword: '전세 특약사항 체크리스트',
    questionKeyword: '전세 계약서에 어떤 특약을 넣어야 안전한가요?',
    ctaKeyword: '전세 특약사항 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '전세 특약사항 체크리스트 필수 10개 — 계약 전 확인 | 로앤가이드',
      description:
        '전세 계약을 앞두고 있다면, 보증금을 지키는 필수 특약 10가지를 지금 확인하세요.',
    },
    intro:
      '<p>드디어 마음에 드는 전셋집을 찾았습니다. 공인중개사가 건네준 계약서에 서명하려는 순간, 특약란이 비어 있는 것이 눈에 들어옵니다. "특약 없이 그냥 서명하세요"라는 말을 들었지만, 전세 사기 뉴스를 보면 불안합니다. 전세 특약은 보증금을 지키는 마지막 방어선입니다.</p>',
    sections: [
      {
        title: '보증금 보호를 위한 필수 특약 5개',
        content:
          '<p><strong style="color:#1e3a5f">보증금 반환과 직결되는 핵심 특약입니다.</strong></p>\n<ul>\n<li><strong>1. 근저당 설정 제한</strong> — "임대인은 임차인의 서면 동의 없이 본 부동산에 근저당권·전세권 등 담보물권을 설정하지 않는다."</li>\n<li><strong>2. 보증금 반환 기한</strong> — "임대인은 계약 만료일로부터 1개월 이내에 보증금 전액을 반환한다. 지연 시 연 5% 지연이자를 가산한다."</li>\n<li><strong>3. 전세보증금반환보증 가입</strong> — "임대인은 임차인의 전세보증금반환보증(HUG/SGI/HF) 가입에 필요한 서류를 즉시 제공한다."</li>\n<li><strong>4. 선순위 권리 고지</strong> — "임대인은 계약 체결 시 본 부동산의 선순위 근저당, 압류, 가압류 등 권리관계를 모두 고지한다."</li>\n<li><strong>5. 매매·경매 시 보증금 승계</strong> — "본 부동산이 매매 또는 경매될 경우 임대인은 보증금 반환을 최우선으로 이행한다."</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 특약 없이 계약하면 분쟁 시 법정 기준만 적용되어 세입자에게 불리할 수 있습니다.</blockquote>',
      },
      {
        title: '생활 보호를 위한 필수 특약 5개',
        content:
          '<p><strong style="color:#1e3a5f">입주 후 분쟁을 예방하는 실생활 특약입니다.</strong></p>\n<ul>\n<li><strong>6. 하자 보수 책임</strong> — "입주 전 기존 하자(곰팡이, 누수, 보일러 등)는 임대인이 보수 완료 후 인도한다."</li>\n<li><strong>7. 시설물 현황 확인</strong> — "에어컨, 세탁기 등 잔존 시설물의 목록과 작동 상태를 별첨으로 확인한다."</li>\n<li><strong>8. 중도 해지 조건</strong> — "임차인의 불가피한 사유(전근, 질병 등)로 중도 해지 시, 후속 임차인을 구하면 위약금 없이 해지한다."</li>\n<li><strong>9. 관리비 항목 명시</strong> — "월 관리비 항목과 금액을 별첨으로 명시한다. 공시되지 않은 추가 비용은 부과하지 않는다."</li>\n<li><strong>10. 전입신고·확정일자 협조</strong> — "임대인은 임차인의 전입신고 및 확정일자 취득에 필요한 모든 협조를 한다."</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>전세 계약서 특약, AI가 맞춤 문구를 만들어 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">계약 조건을 입력하면 상황에 맞는 특약 문구를 무료로 확인하세요.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '특약 작성 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">특약이 효력을 갖추려면 작성 방법도 중요합니다.</strong></p>\n<ul>\n<li><strong>구체적으로 작성</strong> — "하자를 고쳐준다"보다 "누수 부위를 계약일로부터 7일 이내 보수한다"처럼 구체적으로 적으세요.</li>\n<li><strong>양 당사자 서명</strong> — 특약란에 임대인과 임차인 모두 서명(날인)해야 효력이 있습니다.</li>\n<li><strong>위반 시 제재 명시</strong> — "위반 시 계약 해제 사유로 한다" 또는 "위약금 OO만원을 지급한다"를 명시하세요.</li>\n<li><strong>별첨 활용</strong> — 시설물 목록, 하자 사진 등은 별첨으로 첨부하고 "별첨 참조"라고 표기합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전세 특약과 임대인의 의무',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 전세계약의 특약사항이 임대인과 임차인의 합의로 유효하게 성립된 이상, 임대인이 이를 이행할 의무가 있으며 위반 시 손해배상 책임이 있다고 판시했습니다.',
        takeaway:
          '계약서에 명시된 특약은 법적 구속력이 있습니다. 구두 약속은 분쟁 시 입증이 어려우므로 가능한 한 서면으로 남기세요.',
      },
    ],
    faq: [
      {
        question: '공인중개사가 특약을 넣기 싫어하면 어떻게 하나요?',
        answer:
          '<p>특약은 임차인의 당연한 권리입니다. 거부하는 중개사는 임대인 편이므로 다른 중개사를 통해 계약하거나, 직접 특약 문구를 작성하여 삽입을 요구하세요.</p>',
      },
      {
        question: '전세보증금반환보증 가입 특약이 왜 중요한가요?',
        answer:
          '<p>보증보험에 가입하면 임대인이 보증금을 돌려주지 않아도 보험사에서 대신 지급합니다. 임대인이 서류 제공을 거부하면 가입이 불가능하므로 가능한 한 특약으로 명시하세요.</p>',
      },
      {
        question: '근저당 제한 특약을 넣었는데 임대인이 몰래 설정하면요?',
        answer:
          '<p>특약 위반이므로 계약 해제 사유가 되고, 보증금 반환 청구와 함께 손해배상을 청구할 수 있습니다. 등기부등본을 3~6개월마다 확인하세요.</p>',
      },
      {
        question: '특약을 너무 많이 넣으면 계약이 어려워지지 않나요?',
        answer:
          '<p>합리적인 특약은 양쪽 모두를 보호합니다. 임대인도 시설물 파손 방지 특약 등을 넣을 수 있으므로 상호 조율하세요. 핵심 5개는 가능한 한 포함하되 나머지는 상황에 맞게 조정합니다.</p>',
      },
      {
        question: '이미 계약서에 서명했는데 특약을 추가할 수 있나요?',
        answer:
          '<p>양 당사자가 합의하면 계약 체결 후에도 특약을 추가할 수 있습니다. 별도의 합의서를 작성하고 양쪽 모두 서명하면 됩니다.</p>',
      },
    ],
    cta: { text: '전세 특약 맞춤 문구 AI로 만들기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세 보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세 갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '전세보증보험 청구', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '깡통전세 확인법', href: '/guide/jeonse/shell-jeonse-verification-checklist' },
      { label: '전세사기 대응 시작', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
    ],
  },

  // ── 전세 8. 전세→월세 전환 시 세입자 권리 보호 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-monthly-conversion-tenant-rights',
    keyword: '전세 월세 전환 세입자 권리',
    questionKeyword: '임대인이 전세를 월세로 바꾸자고 하는데 거부할 수 있나요?',
    ctaKeyword: '전세 월세 전환 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전세에서 월세 전환 시 세입자 권리 4가지 | 로앤가이드',
      description:
        '임대인이 전세를 월세로 전환하자고 한다면, 세입자의 거부권과 전환율 기준을 지금 확인하세요.',
    },
    intro:
      '<p>계약 갱신을 앞두고 집주인이 "이제 전세는 안 된다, 월세로 전환해달라"고 합니다. 전세금 2억 중 1억을 돌려받고 나머지를 월세로 내라는 것입니다. 매달 추가 지출이 생기면 생활이 빠듯해질 것 같은데, 이 요구를 그대로 받아들여야 하는지 모르겠습니다.</p>',
    sections: [
      {
        title: '전세→월세 전환에 대한 세입자의 거부권',
        content:
          '<p><strong style="color:#1e3a5f">계약 기간 중 임대인이 일방적으로 전세를 월세로 전환할 수 없습니다.</strong></p>\n<ul>\n<li><strong>계약 기간 중</strong> — 기존 계약 기간이 남아있으면 세입자의 동의 없이 월세 전환은 불가능합니다.</li>\n<li><strong>갱신 시</strong> — 계약갱신청구권(2+2년)을 행사하면 "임대인이 요구한 차임 증액" 범위 내에서만 변경 가능합니다.</li>\n<li><strong>증액 한도</strong> — 전세금 또는 월세 인상은 연 5% 이내로 제한됩니다(주택임대차보호법 제7조).</li>\n<li><strong>완전 전환 강제 불가</strong> — 세입자가 원하지 않으면 전세→반전세(보증금+월세) 전환도 강제할 수 없습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계약갱신청구권 기간(4년) 내에는 세입자가 기존 전세 조건 유지를 요구할 수 있습니다.</blockquote>',
      },
      {
        title: '전월세 전환율 기준과 계산법',
        content:
          '<p><strong style="color:#1e3a5f">전환에 합의하더라도 법정 전환율을 초과하면 안 됩니다.</strong></p>\n<ul>\n<li><strong>법정 전환율</strong> — 한국은행 기준금리 + 2%포인트(또는 연 10% 중 낮은 비율)입니다. 2026년 4월 기준 약 5.0~5.5% 수준입니다.</li>\n<li><strong>계산 예시</strong> — 보증금 2억에서 1억을 빼고 전환할 경우: 1억 x 5.0% ÷ 12개월 = 약 41만7천원이 월세 한도입니다.</li>\n<li><strong>초과 금액 반환</strong> — 법정 전환율을 초과하는 월세를 냈다면 초과분의 반환을 청구할 수 있습니다.</li>\n<li><strong>확인 방법</strong> — 한국은행 기준금리는 한국은행 홈페이지에서 실시간으로 확인할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>적정 전환 월세, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">보증금과 전환 금액을 입력하면 법정 전환율에 맞는 월세를 무료로 확인하세요.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '전환 합의 시 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">전환에 합의할 경우 가능한 한 확인해야 할 사항입니다.</strong></p>\n<ul>\n<li><strong>보증금 반환 시기</strong> — 줄어드는 보증금의 반환 일자를 계약서에 명시하세요. "전환 합의일로부터 OO일 이내"로 적습니다.</li>\n<li><strong>전환율 명시</strong> — 적용 전환율과 계산 근거를 계약서에 기재하여 나중에 분쟁을 방지합니다.</li>\n<li><strong>보증보험 재가입</strong> — 보증금이 변경되면 전세보증금반환보증도 변경 가입해야 합니다.</li>\n<li><strong>확정일자 재취득</strong> — 계약 내용이 변경되면 새로 확정일자를 받아야 대항력을 유지합니다.</li>\n</ul>',
      },
      {
        title: '세입자가 먼저 월세 전환을 요청하는 경우',
        content:
          '<p><strong style="color:#1e3a5f">세입자도 보증금 일부를 돌려받고 월세로 전환을 요청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>세입자 전환 청구권</strong> — 주택임대차보호법 제7조의2에 따라 세입자도 보증금의 월세 전환을 청구할 수 있습니다.</li>\n<li><strong>적용 조건</strong> — 보증금이 지나치게 높아 주거 안정에 불리한 경우에 활용합니다.</li>\n<li><strong>전환율 동일 적용</strong> — 세입자가 요청해도 법정 전환율이 동일하게 적용됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">참고: 세입자 전환 청구는 임대인이 보증금을 실제로 반환할 수 있는 상태여야 의미가 있습니다. 깡통전세라면 반환 자체가 어려울 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전월세 전환율 초과와 임차인 보호',
        summary:
          '대법원 2024다283668 사건(대법원, 2025.12.04 선고)에서 법원은 법정 전환율을 초과하는 월세 약정은 초과 부분에 한하여 효력이 없으며, 임차인은 초과 지급분의 반환을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '법정 전환율을 초과하는 월세를 납부한 경우 초과분을 돌려받을 수 있습니다. 전환 시 가능한 한 법정 전환율을 확인하세요.',
      },
    ],
    faq: [
      {
        question: '집주인이 전세를 월세로 바꾸자고 하면 가능한 한 응해야 하나요?',
        answer:
          '<p>아닙니다. 계약갱신청구권(4년) 기간 내에는 세입자가 기존 전세 조건 유지를 요구할 수 있습니다. 임대인이 일방적으로 월세 전환을 강제할 수 없습니다.</p>',
      },
      {
        question: '전환율이 법정 한도를 넘는 월세를 이미 내고 있습니다.',
        answer:
          '<p>법정 전환율을 초과하는 월세는 효력이 없습니다. 초과 납부분은 임대인에게 반환을 청구할 수 있고, 이후 월세도 법정 한도로 조정을 요구하세요.</p>',
      },
      {
        question: '반전세(보증금 일부+월세)도 전환율이 적용되나요?',
        answer:
          '<p>네, 보증금 중 월세로 전환되는 부분에 법정 전환율이 적용됩니다. 전체 보증금 대비 줄어든 금액을 기준으로 월세 한도를 계산합니다.</p>',
      },
      {
        question: '전환 합의 후 확정일자를 다시 받아야 하나요?',
        answer:
          '<p>계약 내용(보증금, 월세)이 변경되면 새로운 확정일자를 받아야 합니다. 기존 확정일자의 순위가 유지되지 않을 수 있으므로 등기부등본을 함께 확인하세요.</p>',
      },
      {
        question: '월세로 전환하면 전세보증금반환보증은 어떻게 되나요?',
        answer:
          '<p>보증금이 줄어들면 기존 보증보험을 변경하거나 해지 후 재가입해야 합니다. 보증보험사(HUG, SGI)에 변경 사항을 알리고 새 보증서를 발급받으세요.</p>',
      },
    ],
    cta: { text: '전세 월세 전환율 적정 금액 AI로 계산하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세 보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세 갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '전세보증보험 청구', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '깡통전세 확인법', href: '/guide/jeonse/shell-jeonse-verification-checklist' },
      { label: '전세사기 대응 시작', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
    ],
  },
];
