import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 교통사고 3 + 이혼 2 + 양육비 1 = 6개 (batch31-traffic-divorce)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch31TrafficDivorce: SpokePage[] = [
  // ── 교통사고 1. 자기차량보험 자기부담금과 보험자대위 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-self-insured-claim',
    keyword: '자기차량보험 자기부담금 대위',
    questionKeyword: '자기차량보험 자기부담금은 누구에게 청구할 수 있나요?',
    ctaKeyword: '자기차량보험 자기부담금 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '자기차량보험 자기부담금과 대위 청구 기준 | 로앤가이드',
      description:
        '자기차량손해보험 자기부담금을 부담하고 있다면, 보험자대위 범위와 제3자 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>교차로에서 상대 차량의 신호위반으로 차가 크게 파손되었습니다. 자기차량손해보험으로 수리비를 처리했지만, 자기부담금 50만원은 본인이 낸 상태입니다. 보험사가 가해자에게 구상권을 행사한다고 했는데, 자기부담금까지 돌려받을 수 있는지 헷갈립니다. 자기부담금과 보험자대위의 범위를 정확히 이해해야 손해를 줄일 수 있습니다.</p>',
    sections: [
      {
        title: '자기차량손해보험 자기부담금이란',
        content:
          '<p><strong style="color:#1e3a5f">자기부담금은 보험금 지급 시 피보험자가 직접 부담하기로 약정한 금액입니다.</strong></p>\n<ul>\n<li><strong>약정 구조</strong> — 보험 가입 시 자기부담금 20만원, 50만원 등을 선택합니다. 자기부담금이 높을수록 보험료가 낮아집니다.</li>\n<li><strong>적용 시점</strong> — 사고 발생 후 수리비에서 자기부담금을 제외한 금액만 보험사가 지급합니다.</li>\n<li><strong>과실 무관</strong> — 자기차량손해보험은 과실 여부와 무관하게 자기부담금이 적용됩니다. 100% 피해자여도 자기부담금은 본인이 부담합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 자기부담금은 보험계약상 약정이므로, 보험사에 자기부담금 면제를 요구할 수는 없습니다.</blockquote>',
      },
      {
        title: '보험자대위의 범위와 자기부담금의 관계',
        content:
          '<p><strong style="color:#1e3a5f">보험사가 보험금을 지급한 후 가해자에게 구상하는 것이 보험자대위이며, 자기부담금은 이 범위에서 제외됩니다.</strong></p>\n<ul>\n<li><strong>보험자대위 원칙</strong> — 상법 제682조에 따라 보험사는 지급한 보험금 한도 내에서 가해자에 대한 피보험자의 손해배상청구권을 대위 취득합니다.</li>\n<li><strong>자기부담금 부분</strong> — 보험사가 지급하지 않은 자기부담금 부분은 대위 범위에 포함되지 않습니다. 따라서 피보험자가 직접 가해자에게 청구해야 합니다.</li>\n<li><strong>청구 순서</strong> — 피보험자의 자기부담금 청구권이 보험사의 대위 청구권보다 우선합니다.</li>\n<li><strong>대법원 기준</strong> — 자기부담금 약정이 있으면 보험자대위 범위는 실제 지급 보험금으로 한정됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>자기부담금 회수 가능 여부, AI가 바로 확인해 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 상황과 보험 조건을 입력하면 자기부담금 청구 방법을 무료로 안내받으세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자기부담금을 가해자에게 직접 청구하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">자기부담금은 가해자 또는 가해자의 보험사에 직접 손해배상으로 청구합니다.</strong></p>\n<ul>\n<li><strong>가해자 보험사 청구</strong> — 가해자가 대인·대물 보험에 가입했다면, 가해자 보험사에 자기부담금 상당액을 청구합니다.</li>\n<li><strong>필요 서류</strong> — 사고접수 확인서, 수리비 견적서, 자기부담금 납부 영수증, 보험금 지급 내역서를 준비합니다.</li>\n<li><strong>과실 비율 적용</strong> — 양쪽 과실이 있는 사고라면 자기부담금도 과실 비율에 따라 일부만 회수됩니다.</li>\n<li><strong>소액사건심판</strong> — 가해자가 무보험이거나 지급을 거부하면 소액사건심판(3,000만원 이하)으로 청구합니다. 인지대는 청구금액의 0.5%입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 자기부담금 청구 소멸시효는 손해 및 가해자를 안 날로부터 3년입니다. 사고 후 빨리 청구하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자기부담금 약정과 보험자대위 범위',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자기부담금 약정이 있는 자기차량손해보험에서 보험자대위의 범위는 실제 지급한 보험금 한도로 한정되며, 자기부담금 부분은 피보험자가 직접 가해자에게 청구할 수 있다고 판시했습니다.',
        takeaway:
          '자기부담금은 보험사의 대위 범위 밖이므로 피보험자가 가해자에게 직접 청구해야 합니다. 가해자 보험사에 대물 청구하는 것이 가장 빠른 방법입니다.',
      },
    ],
    faq: [
      {
        question: '자기부담금 0원 특약에 가입하면 부담금이 없나요?',
        answer:
          '<p>자기부담금 면제 특약에 가입하면 사고 시 자기부담금 없이 전액 보험 처리됩니다. 다만 보험료가 연 3만~5만원 정도 추가되므로 사고 빈도와 비교하여 결정하세요.</p>',
      },
      {
        question: '100% 피해자인데도 자기부담금을 내야 하나요?',
        answer:
          '<p>자기차량손해보험은 자기 보험으로 수리하는 구조이므로 과실과 무관하게 자기부담금이 적용됩니다. 다만 가해자 과실 100%이면 자기부담금 전액을 가해자 보험사에 청구할 수 있습니다.</p>',
      },
      {
        question: '가해자가 무보험인데 자기부담금을 돌려받을 수 있나요?',
        answer:
          '<p>가해자 본인에게 직접 청구해야 합니다. 지급을 거부하면 소액사건심판을 통해 법적으로 회수할 수 있습니다. 가해자 재산이 없으면 회수가 어려울 수 있습니다.</p>',
      },
      {
        question: '보험사가 구상을 포기하면 자기부담금 청구에 영향이 있나요?',
        answer:
          '<p>보험사의 구상권 행사 여부와 관계없이 자기부담금은 피보험자의 독립적인 청구권입니다. 보험사가 구상을 포기해도 자기부담금 청구에는 영향이 없습니다.</p>',
      },
    ],
    cta: { text: '자기부담금 청구 방법 AI로 바로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 대처법', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실 분쟁 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '부상 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '후방추돌 과실비율', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
    ],
  },

  // ── 교통사고 2. 음주운전 혈중알코올농도 상승기 방어 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-dui-blood-test-timing',
    keyword: '음주운전 혈중알코올 상승기 방어',
    questionKeyword: '음주운전 혈중알코올농도 상승기 방어가 가능한가요?',
    ctaKeyword: '음주운전 상승기 방어 상담',
    type: '상황형',
    perspective: 'offender',
    meta: {
      title: '음주운전 혈중알코올 상승기 항변 방법 3가지 | 로앤가이드',
      description:
        '음주운전 혐의를 받고 있다면, 혈중알코올농도 상승기 방어 요건과 위드마크 공식 활용법을 지금 확인하세요.',
    },
    intro:
      '<p>식당에서 마지막 잔을 마신 지 20분 만에 운전대를 잡았습니다. 500미터를 운전한 뒤 음주단속에 걸렸고, 호흡측정 결과 혈중알코올농도 0.05%로 나왔습니다. 하지만 마지막 음주 후 충분한 시간이 지나지 않아 상승기였을 가능성이 있습니다. 혈중알코올농도 상승기 방어가 가능한지, 어떤 조건이 필요한지 정확히 확인해야 합니다.</p>',
    sections: [
      {
        title: '혈중알코올농도 상승기란',
        content:
          '<p><strong style="color:#1e3a5f">음주 후 30분~90분 사이에 혈중알코올농도가 최고점에 도달하는 구간을 상승기라고 합니다.</strong></p>\n<ul>\n<li><strong>흡수 시간</strong> — 알코올은 섭취 후 위장에서 흡수되어 혈액으로 이동합니다. 공복 시 30분, 식사 후 60~90분이 소요됩니다.</li>\n<li><strong>측정 시점 문제</strong> — 운전 시점과 측정 시점 사이에 시간 간격이 있으면, 측정값이 운전 당시보다 높을 수 있습니다.</li>\n<li><strong>법적 쟁점</strong> — 도로교통법은 "운전 당시"의 혈중알코올농도를 기준으로 처벌합니다. 측정 시점이 아닙니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 운전 시점에 상승기였다면, 운전 당시 실제 혈중알코올농도는 측정값보다 낮았을 가능성이 있습니다.</blockquote>',
      },
      {
        title: '위드마크 공식과 역추산 방어 전략',
        content:
          '<p><strong style="color:#1e3a5f">위드마크 공식으로 운전 당시의 혈중알코올농도를 역추산할 수 있습니다.</strong></p>\n<ul>\n<li><strong>위드마크 공식</strong> — 체중, 음주량, 경과시간, 분해속도(시간당 0.008~0.030%)를 대입하여 특정 시점의 농도를 계산합니다.</li>\n<li><strong>상승기 역추산</strong> — 상승기에는 아직 흡수가 완료되지 않았으므로 위드마크 공식의 전제(흡수 완료)가 충족되지 않습니다. 이 점이 방어 논거입니다.</li>\n<li><strong>유리한 조건</strong> — 마지막 음주 후 30분 이내에 운전, 음주 후 식사 병행, 측정 시점까지 1시간 이상 경과한 경우 방어 가능성이 높아집니다.</li>\n<li><strong>대법원 입장</strong> — 법원은 역추산 결과가 피고인에게 가장 유리한 계수를 적용해도 기준치 이상이면 유죄로 판단합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>음주운전 상승기 방어 가능성, AI가 분석해 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">음주 시간, 음주량, 측정 시간을 입력하면 방어 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '상승기 방어에 필요한 증거와 준비',
        content:
          '<p><strong style="color:#1e3a5f">상승기 방어를 위해서는 음주 시간대와 음주량을 구체적으로 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>음주 시간 증빙</strong> — 식당 영수증(결제 시간), CCTV 영상, 동석자 진술서로 마지막 음주 시점을 특정합니다.</li>\n<li><strong>음주량 증빙</strong> — 주문 내역, 결제 내역, 동석자 진술로 총 음주량을 객관적으로 입증합니다.</li>\n<li><strong>측정 시간 확인</strong> — 호흡측정 시간이 음주단속 기록에 정확히 기재되어 있는지 확인합니다.</li>\n<li><strong>전문가 감정</strong> — 약리학 전문가에게 상승기 역추산 감정을 의뢰하면 법원의 신뢰도가 높아집니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 상승기 방어는 마지막 음주 후 단시간 내에 운전한 경우에만 유효합니다. 음주 후 2시간 이상 경과했다면 상승기 주장이 받아들여지기 어렵습니다.</blockquote>',
      },
      {
        title: '상승기 방어 성공 시 기대 효과',
        content:
          '<p><strong style="color:#1e3a5f">상승기 방어가 인정되면 처벌 수위가 낮아지거나 무죄를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>처벌 기준 변동</strong> — 0.08% 이상(면허취소 기준)에서 0.03~0.08%(면허정지 기준)으로 낮아질 수 있습니다.</li>\n<li><strong>행정처분 변경</strong> — 면허취소가 면허정지로, 면허정지가 벌점 부과로 감경될 수 있습니다.</li>\n<li><strong>형사처벌 감경</strong> — 혈중알코올농도에 따라 벌금액이 크게 달라집니다. 0.08% 미만이면 벌금 300만~500만원 수준입니다.</li>\n<li><strong>무죄 가능성</strong> — 역추산 결과 운전 당시 0.03% 미만이면 무죄 판결을 받을 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혈중알코올농도 상승기와 역추산',
        summary:
          '대법원 2025도8137 사건에서 법원은 음주 후 상당 시간이 경과하지 않아 혈중알코올농도가 상승기에 있었을 가능성이 있는 경우, 호흡측정 결과만으로 운전 당시 농도를 단정할 수 없고 위드마크 공식 등을 활용한 역추산이 필요하다고 판시했습니다.',
        takeaway:
          '운전 시점과 측정 시점의 시간 간격이 크고, 마지막 음주 후 단시간 내에 운전한 사실이 입증되면 상승기 방어가 인정될 가능성이 있습니다.',
      },
    ],
    faq: [
      {
        question: '혈액검사를 요청하면 상승기 방어에 유리한가요?',
        answer:
          '<p>혈액검사는 채혈 시점의 정확한 농도를 측정하므로 호흡측정보다 정밀합니다. 다만 채혈까지 추가 시간이 소요되어 오히려 농도가 더 올라갈 수 있으므로 상황에 따라 판단해야 합니다.</p>',
      },
      {
        question: '상승기 방어는 초범에게만 유효한가요?',
        answer:
          '<p>초범 여부와 관계없이 상승기 방어는 가능합니다. 다만 재범인 경우 법원이 양형에서 불리하게 판단할 수 있고, 상승기 주장의 신빙성도 엄격하게 심사합니다.</p>',
      },
      {
        question: '호흡측정 거부 후 혈액검사만 받아도 되나요?',
        answer:
          '<p>호흡측정을 거부하면 음주측정거부죄(1년 이상 5년 이하 징역 또는 500만원 이상 2천만원 이하 벌금)가 성립합니다. 호흡측정 후 결과에 이의가 있으면 혈액검사를 요청하는 것이 안전합니다.</p>',
      },
      {
        question: '위드마크 공식 감정 비용은 얼마인가요?',
        answer:
          '<p>약리학 전문가 감정 비용은 약 30만~50만원 수준입니다. 변호사 선임 시 함께 의뢰하면 비용을 절약할 수 있습니다. 법원 감정으로 진행되면 감정료는 패소자 부담입니다.</p>',
      },
      {
        question: '음주 후 구토를 했는데 상승기 방어와 관련이 있나요?',
        answer:
          '<p>구토로 위장의 알코올이 배출되면 흡수량이 줄어 실제 혈중농도가 낮아질 수 있습니다. 구토 사실을 동석자 진술이나 CCTV로 입증하면 역추산에서 유리한 자료가 됩니다.</p>',
      },
    ],
    cta: { text: '음주운전 상승기 방어 가능성 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '음주 교통사고 대응', href: '/guide/traffic-accident/dui-traffic-accident-response' },
      { label: '교통사고 대처법', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실 분쟁 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '부상 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
    ],
  },

  // ── 교통사고 3. 보험약관 명시·설명의무 위반 구제 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-insurance-explanation-duty',
    keyword: '보험 약관 설명의무 위반 구제',
    questionKeyword: '보험사가 약관을 제대로 설명하지 않았으면 어떻게 되나요?',
    ctaKeyword: '보험 약관 설명의무 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '보험약관 설명의무 위반 시 구제 방법 4가지 | 로앤가이드',
      description:
        '보험 약관 설명을 제대로 듣지 못했다면, 설명의무 위반 여부와 구제 방법을 지금 확인하세요.',
    },
    intro:
      '<p>교통사고 후 보험금을 청구했는데 "약관 면책조항에 해당한다"며 지급이 거절되었습니다. 그런데 가입할 때 그런 면책조항이 있다는 설명을 들은 적이 없습니다. 보험설계사는 "다 보장됩니다"라고만 했습니다. 보험약관의 명시·설명의무는 보험업법과 상법에서 규정한 보험사의 핵심 의무이며, 위반 시 해당 약관 조항을 계약 내용으로 주장할 수 없습니다.</p>',
    sections: [
      {
        title: '보험약관 명시·설명의무의 내용',
        content:
          '<p><strong style="color:#1e3a5f">보험사는 계약 체결 시 약관의 중요 내용을 보험계약자에게 명시하고 설명할 의무가 있습니다.</strong></p>\n<ul>\n<li><strong>명시의무</strong> — 상법 제638조의3 제1항에 따라 약관의 중요한 내용을 서면으로 교부하고 알려야 합니다.</li>\n<li><strong>설명의무</strong> — 면책조항, 보험금 감액 사유 등 계약자에게 불리한 내용을 구두로 충분히 설명해야 합니다.</li>\n<li><strong>설명 대상</strong> — 보험금 지급 제한 사유, 면책사유, 보험료 인상 조건, 계약 해지 사유 등입니다.</li>\n<li><strong>설명 수준</strong> — 일반 보험계약자가 이해할 수 있을 정도로 구체적이고 명확해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 보험사가 설명의무를 다했다는 증명 책임은 보험사에 있습니다. 계약자가 몰랐다는 것만 주장하면 됩니다.</blockquote>',
      },
      {
        title: '설명의무 위반 시 법적 효과',
        content:
          '<p><strong style="color:#1e3a5f">설명의무를 위반하면 해당 약관 조항은 계약 내용으로 주장할 수 없습니다.</strong></p>\n<ul>\n<li><strong>약관 조항 무효</strong> — 상법 제638조의3 제2항에 따라 설명하지 않은 면책조항은 보험사가 원용할 수 없습니다.</li>\n<li><strong>보험금 지급 의무</strong> — 면책조항이 적용되지 않으므로 보험사는 보험금을 지급해야 합니다.</li>\n<li><strong>손해배상 청구</strong> — 설명의무 위반으로 손해가 발생한 경우 보험사에 별도의 손해배상을 청구할 수 있습니다.</li>\n<li><strong>금융감독원 분쟁조정</strong> — 보험사가 지급을 거부하면 금융감독원에 분쟁조정을 신청할 수 있습니다. 무료이며 처리기간은 약 60일입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>약관 설명의무 위반 여부, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">보험 가입 경위와 거절 사유를 입력하면 설명의무 위반 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '설명의무 위반 입증을 위한 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 항목 중 해당되는 것이 있으면 설명의무 위반 가능성이 높습니다.</strong></p>\n<ul>\n<li><strong>약관 서면 미교부</strong> — 가입 시 약관 원문을 서면 또는 전자문서로 받지 못한 경우입니다.</li>\n<li><strong>구두 설명 부재</strong> — 면책조항에 대해 설계사로부터 구두 설명을 듣지 못한 경우입니다.</li>\n<li><strong>청약서 확인란</strong> — 청약서에 "약관의 중요 사항을 설명받았습니다" 확인란에 서명했더라도, 실제 설명이 없었으면 위반입니다.</li>\n<li><strong>녹취 부재</strong> — 전화 가입 시 면책조항 설명 녹취가 없는 경우 위반 가능성이 높습니다.</li>\n<li><strong>설계사 증언</strong> — 설계사가 "다 보장된다"고 말했거나, 면책사항을 언급하지 않은 경우입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 보험계약자가 보험업 종사자이거나 동일 보험을 반복 가입한 경우에는 설명의무가 면제될 수 있습니다.</blockquote>',
      },
      {
        title: '구제 절차 — 분쟁조정에서 소송까지',
        content:
          '<p><strong style="color:#1e3a5f">설명의무 위반이 확인되면 단계적으로 구제를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계: 보험사 민원</strong> — 보험사 고객센터에 설명의무 위반을 이유로 보험금 재심사를 요청합니다.</li>\n<li><strong>2단계: 금감원 분쟁조정</strong> — 보험사가 거부하면 금융감독원(1332)에 분쟁조정을 신청합니다. 수수료 무료, 처리기간 약 60일입니다.</li>\n<li><strong>3단계: 소송</strong> — 분쟁조정이 불성립하면 법원에 보험금 청구 소송을 제기합니다. 소액사건(3,000만원 이하)은 1회 변론으로 판결됩니다.</li>\n<li><strong>소멸시효</strong> — 보험금 청구권은 3년(상법 제662조)이므로 사고일로부터 빠르게 대응하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험약관 명시·설명의무의 범위',
        summary:
          '대법원 2022다225897 사건(대법원)에서 법원은 보험약관의 명시·설명의무는 보험계약자가 알지 못하는 가운데 불이익을 받는 것을 방지하기 위한 것으로, 면책조항 등 중요 사항을 구체적으로 설명하지 않으면 해당 조항을 계약 내용으로 주장할 수 없다고 판시했습니다.',
        takeaway:
          '보험사가 면책조항을 설명했다는 입증을 하지 못하면, 해당 면책조항에 근거한 보험금 지급 거절은 부당합니다. 금감원 분쟁조정만으로도 해결되는 경우가 많습니다.',
      },
    ],
    faq: [
      {
        question: '청약서에 서명했어도 설명의무 위반을 주장할 수 있나요?',
        answer:
          '<p>네, 가능합니다. 대법원은 청약서의 확인란 서명만으로 설명의무를 다한 것으로 볼 수 없다고 일관되게 판단하고 있습니다. 실제로 구두 설명이 있었는지가 핵심입니다.</p>',
      },
      {
        question: '온라인으로 가입한 보험도 설명의무가 적용되나요?',
        answer:
          '<p>온라인 가입이라도 면책조항 등 중요 사항에 대한 설명의무는 동일하게 적용됩니다. 화면에 면책조항을 팝업 등으로 명확히 표시했는지가 판단 기준입니다.</p>',
      },
      {
        question: '금감원 분쟁조정 결과에 불복할 수 있나요?',
        answer:
          '<p>분쟁조정 결과에 법적 강제력은 없습니다. 보험사가 조정안을 수락하지 않으면 소송으로 진행해야 합니다. 다만 실무상 보험사가 조정안을 수락하는 비율이 70% 이상입니다.</p>',
      },
      {
        question: '보험 가입 후 10년이 지났는데도 설명의무 위반을 주장할 수 있나요?',
        answer:
          '<p>설명의무 위반 자체에는 시효가 없습니다. 다만 보험금 청구권의 소멸시효(3년)가 적용되므로, 보험사고 발생 후 3년 이내에 보험금을 청구해야 합니다.</p>',
      },
      {
        question: '설계사가 퇴사했는데 설명 부재를 어떻게 증명하나요?',
        answer:
          '<p>설명의무 이행의 증명 책임은 보험사에 있으므로, 계약자가 직접 증명할 필요는 없습니다. 보험사가 녹취록이나 설명 확인서를 제시하지 못하면 위반으로 판단됩니다.</p>',
      },
    ],
    cta: { text: '보험 약관 설명의무 위반 여부 AI 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 대처법', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '부상 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '과실 분쟁 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '후방추돌 과실비율', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
    ],
  },

  // ── 이혼 4. 불륜 제3자 손해배상 청구 ──
  {
    domain: 'divorce',
    slug: 'divorce-third-party-affair-claim',
    keyword: '불륜 상대방 위자료 손해배상',
    questionKeyword: '배우자의 불륜 상대방에게 위자료를 청구할 수 있나요?',
    ctaKeyword: '불륜 상대방 위자료 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '불륜 상대방 위자료 청구 요건과 절차 4단계 | 로앤가이드',
      description:
        '배우자의 불륜 상대방에게 손해배상을 청구하려면, 청구 요건과 금액 산정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>남편의 휴대폰에서 같은 회사 직원과 주고받은 노골적인 메시지를 발견했습니다. 호텔 예약 내역과 커플 사진까지 확인하고 나니 분노를 넘어 허탈합니다. 배우자뿐 아니라 상대방에게도 위자료를 받을 수 있다고 들었는데, 어떤 요건이 필요한지 막막합니다. 부정행위의 상대방도 부부공동생활을 침해한 불법행위 책임을 집니다.</p>',
    sections: [
      {
        title: '제3자 위자료 청구의 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">배우자의 불륜 상대방(상간자)은 부부공동생활을 침해한 불법행위로 손해배상 책임을 집니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 민법 제750조(불법행위) 및 제751조(재산 이외의 손해배상)에 따라 청구합니다.</li>\n<li><strong>청구 요건</strong> — 상간자가 상대방의 혼인 사실을 알면서(또는 알 수 있었으면서) 부정행위를 한 경우입니다.</li>\n<li><strong>독립적 청구</strong> — 배우자에 대한 위자료와 별도로 상간자에게 따로 청구할 수 있습니다.</li>\n<li><strong>이혼 여부 불문</strong> — 이혼하지 않고도 상간자에 대한 위자료 청구가 가능합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상간자가 "혼인 사실을 몰랐다"고 주장하더라도, 알 수 있었던 정황이 있으면 책임이 인정됩니다.</blockquote>',
      },
      {
        title: '위자료 금액 산정 기준',
        content:
          '<p><strong style="color:#1e3a5f">법원은 여러 요소를 종합적으로 고려하여 위자료 금액을 산정합니다.</strong></p>\n<ul>\n<li><strong>부정행위 기간</strong> — 단발적 관계보다 장기간 지속된 경우 위자료가 높아집니다.</li>\n<li><strong>혼인 파탄 기여도</strong> — 상간자의 행위가 혼인 파탄의 주된 원인인 경우 금액이 증가합니다.</li>\n<li><strong>피해자 정신적 고통</strong> — 자녀가 있는 경우, 공개적으로 망신을 당한 경우 등이 고려됩니다.</li>\n<li><strong>상간자의 태도</strong> — 사과 여부, 관계 지속 여부, 재산 정도 등이 반영됩니다.</li>\n<li><strong>판결 금액 범위</strong> — 실무상 상간자에 대한 위자료는 1,000만~3,000만원이 일반적이며, 악질적 사안은 5,000만원까지 인정된 사례가 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>상간자 위자료 예상 금액, AI가 계산해 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">부정행위 기간과 증거 현황을 입력하면 위자료 청구 가능 금액을 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '상간자 위자료 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 발송부터 소송까지 단계별로 진행합니다.</strong></p>\n<ul>\n<li><strong>1단계: 증거 확보</strong> — 카톡, 문자, 사진, 카드 결제 내역 등 부정행위와 상간자 인적사항을 특정합니다.</li>\n<li><strong>2단계: 내용증명 발송</strong> — 상간자에게 부정행위 중단 요구와 손해배상 의사를 통지합니다. 합의 가능성을 열어둡니다.</li>\n<li><strong>3단계: 손해배상 소송</strong> — 합의가 안 되면 관할 법원에 손해배상청구 소송을 제기합니다. 인지대는 청구금액의 0.5%입니다.</li>\n<li><strong>4단계: 강제집행</strong> — 판결 후 상간자가 지급하지 않으면 재산(예금, 급여)에 대해 강제집행합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 소멸시효는 부정행위를 안 날로부터 3년, 부정행위일로부터 10년입니다. 시효가 지나면 청구할 수 없습니다.</blockquote>',
      },
      {
        title: '청구 시 주의할 점',
        content:
          '<p><strong style="color:#1e3a5f">위자료 청구 과정에서 실수하면 오히려 불리해질 수 있습니다.</strong></p>\n<ul>\n<li><strong>상간자 특정</strong> — 이름, 주소, 주민등록번호 중 최소 하나를 확인해야 소송이 가능합니다. 전화번호만으로는 부족합니다.</li>\n<li><strong>과도한 접촉 금지</strong> — 상간자를 직접 찾아가 협박하거나 직장에 알리면 명예훼손·협박죄로 역고소당할 수 있습니다.</li>\n<li><strong>배우자와 부진정연대</strong> — 배우자와 상간자의 위자료는 부진정연대채무이므로 합산 청구 시 중복 수령은 불가합니다.</li>\n<li><strong>혼인 파탄 후 관계</strong> — 이미 혼인이 파탄난 후에 시작된 관계라면 상간자의 책임이 부정될 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 부정행위와 손해배상 책임',
        summary:
          '대법원 2025므10716 사건(대법원)에서 법원은 제3자가 부부 일방과 부정행위를 하여 부부공동생활을 침해한 경우 다른 배우자에 대하여 불법행위 책임을 진다고 판시하며, 혼인관계가 실질적으로 유지되고 있었는지를 기준으로 판단해야 한다고 밝혔습니다.',
        takeaway:
          '혼인관계가 사실상 유지되고 있는 상태에서 제3자와의 부정행위가 이루어졌다면 상간자의 손해배상 책임이 인정됩니다. 별거 중이었더라도 이혼 의사가 확정되지 않았으면 청구 가능합니다.',
      },
    ],
    faq: [
      {
        question: '상간자가 미혼이어도 위자료를 청구할 수 있나요?',
        answer:
          '<p>네, 상간자의 혼인 여부는 관계없습니다. 상간자가 상대방의 혼인 사실을 알면서 부정행위를 했다면 미혼이든 기혼이든 손해배상 책임이 있습니다.</p>',
      },
      {
        question: '상간자가 "합의 하에 관계했다"고 주장하면 어떻게 되나요?',
        answer:
          '<p>배우자와 상간자 사이의 합의는 피해 배우자에 대한 불법행위 책임을 면하는 사유가 되지 않습니다. 부부공동생활을 침해한 사실이 인정되면 위자료 책임이 성립합니다.</p>',
      },
      {
        question: '이혼하지 않고도 상간자에게 위자료를 청구할 수 있나요?',
        answer:
          '<p>네, 이혼 여부와 관계없이 상간자에 대한 위자료 청구는 가능합니다. 다만 이혼한 경우가 혼인 파탄의 정도가 크다고 보아 위자료 금액이 더 높게 산정되는 경향이 있습니다.</p>',
      },
      {
        question: '증거가 카톡 대화뿐인데 소송에서 이길 수 있나요?',
        answer:
          '<p>카톡 대화만으로도 부정행위가 충분히 인정되는 경우가 많습니다. 대화 내용에 만남 장소, 성관계 암시, 애정 표현이 포함되어 있으면 유력한 증거입니다. 카드 결제 내역을 보충하면 더 확실합니다.</p>',
      },
    ],
    cta: { text: '상간자 위자료 청구 가능 여부 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서 시작', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '숨긴 재산 찾기', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '유책배우자 이혼', href: '/guide/divorce/at-fault-spouse-divorce-filing' },
    ],
  },

  // ── 이혼 5. 이혼 후 사망 시 재산분할 상속 여부 ──
  {
    domain: 'divorce',
    slug: 'divorce-property-division-inheritance',
    keyword: '이혼 사망 재산분할 상속',
    questionKeyword: '이혼한 배우자가 사망하면 재산분할을 받을 수 있나요?',
    ctaKeyword: '이혼 사망 재산분할 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '이혼 후 사망 시 재산분할 청구 가능 여부 | 로앤가이드',
      description:
        '이혼한 배우자가 사망했다면, 재산분할 의무가 상속인에게 승계되는지 여부를 지금 확인하세요.',
    },
    intro:
      '<p>이혼 판결이 확정된 지 석 달 만에 전 배우자가 갑작스럽게 사망했습니다. 이혼소송에서 재산분할은 아직 확정되지 않은 상태입니다. 20년간 함께 모은 재산인데, 전 배우자가 사망했다는 이유만으로 재산분할 청구권이 사라지는 것은 아닌지 불안합니다. 이혼 후 재산분할 의무가 상속인에게 승계되는지가 핵심 쟁점입니다.</p>',
    sections: [
      {
        title: '이혼 후 재산분할 청구권의 법적 성격',
        content:
          '<p><strong style="color:#1e3a5f">재산분할 청구권은 이혼이 성립하면 발생하는 독립적인 권리입니다.</strong></p>\n<ul>\n<li><strong>발생 시점</strong> — 협의이혼 신고일 또는 재판이혼 확정일에 재산분할 청구권이 발생합니다.</li>\n<li><strong>행사 기간</strong> — 이혼 후 2년 이내에 재산분할을 청구해야 합니다(민법 제839조의2 제3항). 이 기간은 제척기간이므로 연장이 불가능합니다.</li>\n<li><strong>청구 상대방</strong> — 이혼한 상대방에게 청구하지만, 상대방이 사망하면 상속인이 문제됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 재산분할 청구권의 법적 성격(일신전속권인지 재산권인지)에 따라 상속 가능 여부가 달라집니다.</blockquote>',
      },
      {
        title: '사망 시 재산분할 의무의 상속 여부',
        content:
          '<p><strong style="color:#1e3a5f">재산분할 의무가 상속인에게 승계되는지에 대해 대법원이 판단 기준을 제시했습니다.</strong></p>\n<ul>\n<li><strong>기존 견해</strong> — 재산분할 청구권은 일신전속적 권리이므로 사망 시 소멸한다는 견해가 있었습니다.</li>\n<li><strong>최근 판례 흐름</strong> — 이혼이 이미 확정되어 재산분할 청구권이 구체화된 경우에는 금전채권으로서 상속 대상이 될 수 있다는 방향으로 논의가 진행되고 있습니다.</li>\n<li><strong>구분 기준</strong> — 이혼 전 사망(재산분할 청구권 자체가 미발생)과 이혼 후 사망(청구권 발생 후 사망)을 구분해야 합니다.</li>\n<li><strong>실무 대응</strong> — 이혼 확정 후 재산분할이 미확정 상태에서 상대방이 사망하면 상속인을 상대로 소송을 제기하는 것이 현재 실무입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>이혼 후 사망 시 재산분할, AI가 가능 여부를 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 확정일과 사망일, 재산 현황을 입력하면 청구 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '상속인 상대 재산분할 청구 시 준비사항',
        content:
          '<p><strong style="color:#1e3a5f">상속인을 상대로 재산분할을 청구할 때 필요한 준비가 있습니다.</strong></p>\n<ul>\n<li><strong>상속인 확인</strong> — 전 배우자의 가족관계증명서로 상속인(자녀, 부모 등)을 특정합니다.</li>\n<li><strong>재산 현황 파악</strong> — 이혼 당시 재산목록, 부동산 등기부등본, 금융 거래내역을 확보합니다.</li>\n<li><strong>이혼 확정 증명</strong> — 이혼 판결문 확정증명원 또는 이혼신고수리증명서를 준비합니다.</li>\n<li><strong>기여도 입증 자료</strong> — 혼인 중 재산 형성에 기여한 증거(소득 증빙, 가사노동, 자녀 양육 등)를 정리합니다.</li>\n<li><strong>제척기간 확인</strong> — 이혼 후 2년의 제척기간이 지나지 않았는지 반드시 확인합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 상속인이 상속포기를 하면 재산분할 청구 대상이 달라지므로 상속관계를 먼저 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 당사자 사망 시 재산분할 의무 승계',
        summary:
          '대법원 2024스876 사건(대법원)에서 법원은 이혼 당사자 일방이 사망한 경우 재산분할 의무가 상속인에게 승계되는지에 관하여, 이혼이 이미 확정되어 재산분할 청구권이 구체적으로 발생한 이상 그 의무는 상속인에게 승계될 수 있다는 취지로 판시했습니다.',
        takeaway:
          '이혼 확정 후 재산분할이 아직 이루어지지 않은 상태에서 상대방이 사망했다면, 상속인을 상대로 재산분할을 청구할 수 있습니다. 이혼 후 2년의 제척기간 내에 신속히 청구하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '이혼소송 중에 상대방이 사망하면 재산분할은 어떻게 되나요?',
        answer:
          '<p>이혼소송 중 당사자가 사망하면 이혼 자체가 성립하지 않으므로 재산분할 청구권도 발생하지 않습니다. 이 경우 상속인으로서 상속재산에 대한 권리를 주장하는 것이 별도의 방법입니다.</p>',
      },
      {
        question: '전 배우자의 자녀(내 자녀)가 상속인인데 재산분할 소송을 해야 하나요?',
        answer:
          '<p>법적으로는 상속인인 자녀를 상대로 청구해야 합니다. 다만 실무상 자녀와 협의하여 조정으로 해결하는 경우가 많습니다. 자녀가 미성년자이면 특별대리인 선임이 필요합니다.</p>',
      },
      {
        question: '재산분할 2년 제척기간이 임박한데 어떻게 해야 하나요?',
        answer:
          '<p>제척기간은 연장이나 중단이 불가능하므로, 기간 내에 반드시 가정법원에 재산분할 심판을 청구해야 합니다. 서류가 부족하더라도 일단 청구서를 먼저 접수하고 증빙은 나중에 보정하세요.</p>',
      },
      {
        question: '상속인이 상속포기를 하면 재산분할은 불가능한가요?',
        answer:
          '<p>상속인 전원이 상속포기를 하면 상속재산관리인이 선임됩니다. 상속재산관리인을 상대로 재산분할을 청구할 수 있지만, 실무적으로 복잡해지므로 전문가 상담이 필요합니다.</p>',
      },
      {
        question: '혼인 중 전 배우자 명의로 된 부동산도 분할 대상인가요?',
        answer:
          '<p>혼인 중 취득한 재산은 명의와 관계없이 재산분할 대상입니다. 전 배우자 단독 명의 부동산이라도 혼인 기간 중 공동으로 형성한 것이면 분할을 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '이혼 후 사망 재산분할 가능 여부 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서 시작', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '숨긴 재산 찾기', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '위자료 허위 주장 방어', href: '/guide/divorce/divorce-alimony-false-claim-defense' },
    ],
  },

  // ── 양육비 6. 양육비 이행명령 위반 제재 ──
  {
    domain: 'child-support',
    slug: 'child-support-enforcement-contempt-order',
    keyword: '양육비 이행명령 위반 제재',
    questionKeyword: '양육비 이행명령을 위반하면 어떤 제재를 받나요?',
    ctaKeyword: '양육비 이행명령 위반 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 이행명령 위반 시 제재 방법 4가지 | 로앤가이드',
      description:
        '양육비를 받지 못하고 있다면, 이행명령 위반 제재와 강제집행 방법을 지금 확인하세요.',
    },
    intro:
      '<p>법원에서 월 100만원씩 양육비를 지급하라는 이행명령이 내려졌는데, 전 배우자가 6개월째 한 푼도 보내지 않습니다. 전화도 받지 않고, 카톡 읽씹만 합니다. 확정된 법원 명령을 무시하는데 정말 방법이 없는 것인지, 어떤 제재가 가능한지 답답합니다. 양육비 이행확보 및 지원에 관한 법률은 의무자의 불이행에 대해 강력한 제재 수단을 마련하고 있습니다.</p>',
    sections: [
      {
        title: '양육비 이행명령 불이행 시 제재 수단',
        content:
          '<p><strong style="color:#1e3a5f">양육비 이행명령을 위반하면 형사처벌부터 운전면허 정지까지 다양한 제재가 가능합니다.</strong></p>\n<ul>\n<li><strong>감치(구금)</strong> — 정당한 이유 없이 이행명령을 위반하면 30일 이내의 감치에 처할 수 있습니다(가사소송법 제68조).</li>\n<li><strong>과태료 부과</strong> — 이행명령 불이행 시 1,000만원 이하의 과태료가 부과됩니다.</li>\n<li><strong>운전면허 정지</strong> — 양육비 이행확보법에 따라 의무자의 운전면허를 정지할 수 있습니다.</li>\n<li><strong>출국금지</strong> — 양육비를 체납한 의무자에 대해 출국금지를 요청할 수 있습니다.</li>\n<li><strong>명단 공개</strong> — 1년 이상 양육비를 체납하면 양육비이행관리원 홈페이지에 이름이 공개됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 감치는 의무자를 최대 30일간 구금하는 강력한 수단으로, 양육비 미지급의 최후 수단입니다.</blockquote>',
      },
      {
        title: '강제집행으로 양육비를 직접 회수하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">이행명령이나 양육비부담조서가 있으면 의무자의 재산에 직접 강제집행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>급여 압류</strong> — 의무자의 직장 급여 중 1/2까지 압류할 수 있습니다. 급여가 300만원 이하면 150만원을 초과하는 금액을 압류합니다.</li>\n<li><strong>예금 압류</strong> — 의무자 명의의 은행 계좌를 압류하여 밀린 양육비를 회수합니다.</li>\n<li><strong>부동산 압류</strong> — 의무자 소유 부동산에 강제경매를 신청할 수 있습니다.</li>\n<li><strong>재산 조회</strong> — 법원에 재산명시·재산조회를 신청하면 의무자의 은행 계좌, 부동산, 자동차 등을 확인할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>양육비 강제집행 방법, AI가 단계별로 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">밀린 양육비 금액과 의무자 상황을 입력하면 최적의 회수 방법을 무료로 확인하세요.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비이행관리원 활용 방법',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원은 양육비 이행 지원을 전담하는 국가기관입니다.</strong></p>\n<ul>\n<li><strong>이행 지원 서비스</strong> — 의무자 소재 파악, 양육비 이행 권고, 직접 추심 서비스를 무료로 제공합니다.</li>\n<li><strong>한시적 양육비 긴급지원</strong> — 양육비를 받지 못하는 한부모가정에 월 최대 20만원을 선지급합니다.</li>\n<li><strong>제재 조치 요청</strong> — 출국금지, 운전면허 정지, 명단 공개 등의 제재를 이행관리원을 통해 요청할 수 있습니다.</li>\n<li><strong>신청 방법</strong> — 양육비이행관리원(1644-6621) 전화 또는 홈페이지에서 온라인 신청합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 양육비이행관리원의 서비스는 모두 무료입니다. 변호사 비용 없이도 강력한 지원을 받을 수 있습니다.</blockquote>',
      },
      {
        title: '감치 신청 절차와 요건',
        content:
          '<p><strong style="color:#1e3a5f">감치는 의무자를 최대 30일간 구금하는 강력한 제재이므로 요건이 엄격합니다.</strong></p>\n<ul>\n<li><strong>신청 자격</strong> — 양육비 이행명령을 받은 권리자(양육자)가 가정법원에 신청합니다.</li>\n<li><strong>요건</strong> — 정당한 이유 없이 이행명령을 위반한 사실이 인정되어야 합니다. 의무자의 무자력(재산 없음)이 입증되면 감치가 기각될 수 있습니다.</li>\n<li><strong>절차</strong> — 감치 신청 → 법원 심문기일 → 의무자 출석·소명 → 감치 결정 순서입니다.</li>\n<li><strong>효과</strong> — 감치 결정 자체가 양육비를 직접 회수하지는 않지만, 의무자에게 강력한 이행 압박이 됩니다. 실무상 감치 신청 후 양육비를 납부하는 경우가 많습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비부담조서 불이행과 제재 기준',
        summary:
          '대법원 2025으517 사건(대법원)에서 법원은 양육비부담조서에 의한 양육비 의무 불이행의 범위를 판단하면서, 확정된 양육비 의무를 정당한 이유 없이 이행하지 않는 경우 감치 등의 제재가 가능하다고 판시했습니다.',
        takeaway:
          '양육비 이행명령이나 양육비부담조서가 확정된 상태에서 의무자가 정당한 이유 없이 불이행하면 감치, 과태료, 운전면허 정지 등 제재를 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '의무자가 직장을 그만두면 급여 압류가 안 되나요?',
        answer:
          '<p>퇴직하면 해당 직장에서의 급여 압류는 효력을 잃습니다. 새 직장을 찾아 다시 압류 신청해야 합니다. 의무자의 국민연금, 건강보험 자격 변동으로 새 직장을 추적할 수 있습니다.</p>',
      },
      {
        question: '감치 신청 비용은 얼마인가요?',
        answer:
          '<p>감치 신청은 인지대 없이 무료입니다. 변호사 없이 본인이 직접 신청할 수 있으며, 양육비이행관리원에서 서류 작성을 도와줍니다.</p>',
      },
      {
        question: '밀린 양육비에 이자도 붙나요?',
        answer:
          '<p>네, 확정된 양육비가 미지급되면 소송촉진법에 따라 연 12%의 지연이자가 붙습니다. 밀린 기간이 길수록 원금 외에 상당한 이자를 추가로 받을 수 있습니다.</p>',
      },
      {
        question: '의무자가 재산을 숨기면 어떻게 찾나요?',
        answer:
          '<p>법원에 재산조회를 신청하면 은행 계좌, 부동산, 자동차, 보험 등을 확인할 수 있습니다. 양육비이행관리원도 의무자 재산을 조사하는 서비스를 무료로 제공합니다.</p>',
      },
      {
        question: '양육비 긴급지원금은 어떻게 신청하나요?',
        answer:
          '<p>양육비이행관리원(1644-6621)에 신청합니다. 양육비 이행명령이 있고 의무자가 3개월 이상 불이행한 한부모가정이 대상입니다. 월 최대 20만원을 선지급받고, 이행관리원이 의무자에게 구상합니다.</p>',
      },
    ],
    cta: { text: '양육비 이행명령 위반 제재 방법 AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 청구 시작', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '양육비 강제집행', href: '/guide/child-support/child-support-enforcement-method' },
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 소송 절차', href: '/guide/child-support/child-support-lawsuit-procedure' },
      { label: '양육비 체납 추심', href: '/guide/child-support/child-support-overdue-collection' },
    ],
  },
];
