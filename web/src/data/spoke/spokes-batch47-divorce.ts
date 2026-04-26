import { SpokePage } from '../spoke-pages';

// batch47 divorce 4개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 배우자와 이혼 후 공무원 연금을 분할 수령하려는 사람이 분할연금 신청 절차와 요건을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 배우자가 사업 운영 중 진 보증채무를 이혼 재산분할에서 처리해야 하는 사람이 채무 귀속과 분담 범위를 점검하도록 돕는 페이지다.
// 3. 이 페이지는 배우자가 데이팅앱을 이용한 정황을 발견하고 외도 증거로 활용할 수 있는지 확인하려는 사람이 적법한 증거 수집 방법을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 전업주부로서 남편 명의 재산에 대해 이혼 시 재산분할을 청구하려는 사람이 기여도 인정 논리와 절차를 준비하도록 돕는 페이지다.

export const spokesBatch47Divorce: SpokePage[] = [
  // ─── 1. divorce / public-servant-pension-split ───
  {
    domain: 'divorce',
    slug: 'divorce-public-servant-pension-split',
    keyword: '이혼 공무원 연금 분할',
    questionKeyword: '이혼 후 배우자의 공무원 연금을 분할 수령하려면 어떻게 해야 하나요?',
    ctaKeyword: '공무원 연금 분할 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이혼 후 공무원 연금 분할 신청 4단계 절차 | 로앤가이드',
      description:
        '이혼 후 배우자의 공무원 연금을 분할 수령하려면 혼인기간·수급요건·신청 기한을 먼저 확인해야 합니다. 분할연금 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>수십 년을 함께하고 이혼한 뒤 "공무원 연금은 어떻게 되는 건가요?"라는 질문을 자주 받습니다. 연금도 혼인 기간 동안 형성된 공동재산의 일부로 볼 수 있어, 일정 요건을 충족하면 이혼한 배우자도 분할연금을 수급할 수 있는 제도가 마련되어 있습니다. 신청 시효와 요건을 놓치면 권리가 사라질 수 있어 순서대로 챙기는 것이 핵심입니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 분할연금 신청 4단계',
        content:
          '<p><strong style="color:#1e3a5f">가정법원 이혼 확정 후 공무원연금공단 신청까지 4단계로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이혼 확정 확인</strong> — 협의이혼 의사확인서 또는 재판이혼 판결 확정(확정 후 1개월 내 신고). 이혼 이력이 가족관계등록부에 반영되어야 다음 단계 진행 가능.</li>\n<li><strong>2단계 — 재산분할 청구 시효 점검</strong> — 이혼일로부터 2년(제척기간). 연금분할은 민법 제839조의2 재산분할 청구 범위에 포함될 수 있어 동시에 처리하는 것이 안전합니다.</li>\n<li><strong>3단계 — 분할연금 수급요건 확인</strong> — 공무원연금법 제45조의2에 따라 ① 혼인기간 5년 이상 ② 배우자가 퇴직연금 수급 중 ③ 본인이 65세 이상(현재 기준, 연도별 변동 있음) 요건을 충족해야 합니다. 3가지 요건 중 하나라도 미달이면 분할연금 대상에서 제외될 수 있습니다.</li>\n<li><strong>4단계 — 공무원연금공단 신청</strong> — 이혼확인 서류·분할비율 협의서 또는 판결문 지참, 공단 방문 또는 온라인 제출. 분할비율은 법원 협의 또는 판결로 확정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공무원 연금 분할 요건과 재산분할 청구 순서, AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '분할연금 수급요건 — 3가지 조건 모두 충족해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">공무원연금법 제45조의2에 규정된 3가지 요건을 꼼꼼히 확인하세요.</strong></p>\n<ul>\n<li><strong>혼인기간 5년 이상</strong> — 혼인신고일부터 이혼 신고일까지 5년 이상 유지되어야 합니다. 별거 기간도 혼인기간에 포함.</li>\n<li><strong>배우자(공무원)의 퇴직연금 수급 중</strong> — 배우자가 이미 퇴직연금을 받고 있는 상태여야 하며, 재직 중이거나 아직 연금 개시 전이면 분할연금 즉시 수급은 어렵습니다. 연금 개시 시점에 분할 개시 가능.</li>\n<li><strong>본인의 연령</strong> — 공무원연금법 개정에 따라 수급 개시 연령이 단계적으로 높아지고 있으니 신청 시점의 요건을 공단에 확인하는 것이 좋습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재산분할 청구 시효(이혼일로부터 2년)와 분할연금 신청 시기를 혼동하지 마세요. 재산분할은 법원에, 분할연금은 공단에 각각 별도 신청합니다.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">공무원연금공단 분할연금 신청 시 아래 서류를 미리 준비하면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>이혼 증명 서류</strong> — 혼인관계증명서(이혼 이력 포함, 발급 1개월 이내) + 기본증명서</li>\n<li><strong>분할비율 확인 서류</strong> — 협의이혼 확인서의 재산분할 합의 내용 또는 법원 판결문(분할연금 비율 기재)</li>\n<li><strong>혼인기간 입증</strong> — 가족관계증명서로 혼인신고일·이혼신고일 확인</li>\n<li><strong>신청인 신분증</strong> — 주민등록증 또는 여권</li>\n<li><strong>통장 사본</strong> — 분할연금 입금 계좌</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 소송에서 연금 분할 비율을 명시적으로 합의하거나 판결에 포함시켜 두면 이후 공단 신청이 수월해집니다.</blockquote>',
      },
      {
        title: '분할 비율과 금액 — 어떻게 정해지나요?',
        content:
          '<p><strong style="color:#1e3a5f">연금 분할 비율은 당사자 합의 또는 법원 결정으로 정해집니다.</strong></p>\n<ul>\n<li><strong>법정 기준</strong> — 공무원연금법 제45조의2 제2항은 혼인기간에 해당하는 연금액의 1/2을 기본 분할 기준으로 정하고 있습니다. 법원이 특별한 사정을 인정하면 이 비율을 달리 정할 수도 있습니다.</li>\n<li><strong>협의로 변경 가능</strong> — 이혼 협의 시 연금 분할 비율을 별도 합의하면 법원에서 그 합의를 반영한 조서를 받아 공단에 제출합니다.</li>\n<li><strong>연금 개시 후 분할</strong> — 배우자가 아직 퇴직하지 않은 경우, 배우자 퇴직연금 개시 시점부터 분할연금 수급이 가능한 구조로 볼 수 있습니다.</li>\n<li><strong>재산분할과 별도 산정</strong> — 분할연금은 재산분할의 일부로 처리되지만, 부동산·예금 등과 별개로 연금만 별도로 논의될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 배우자가 퇴직연금을 아직 받고 있지 않은 상태라면 분할연금 수급 시기가 달라질 수 있으니 공단에 미리 확인하는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 후 재산분할청구권과 시효',
        summary:
          '대법원 2024스876 사건(대법원, 2026.01.15 선고)에서 법원은 재산분할 제도가 이혼 등의 경우 부부가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 하며, 이혼한 당사자 일방이 사망한 경우에도 그 재산분할의무는 상속인들에게 승계된다고 판시했습니다.',
        takeaway: '연금 분할을 포함한 재산분할 청구는 이혼일로부터 2년(제척기간) 이내에 진행하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '이혼 전에도 배우자의 연금 분할을 미리 합의할 수 있나요?',
        answer:
          '<strong>이혼 협의 과정에서 연금 분할 비율을 미리 정해두는 것이 가능합니다.</strong> 협의이혼 의사확인 시 연금 분할 조항을 포함시키거나, 재판이혼 시 청구 취지에 명기해두면 이후 공단 신청이 수월합니다.',
      },
      {
        question: '배우자가 공무원 퇴직 전이라면 연금 분할은 어떻게 되나요?',
        answer:
          '<strong>배우자가 아직 퇴직연금을 받고 있지 않은 경우, 퇴직연금 개시 시점부터 분할연금 수급이 가능한 구조입니다.</strong> 이혼 단계에서 분할 비율을 먼저 확정해두고, 배우자 퇴직 후 공단에 신청하는 절차를 검토해볼 수 있습니다.',
      },
      {
        question: '혼인기간 5년이 안 되면 연금 분할을 받지 못하나요?',
        answer:
          '<strong>공무원연금법상 5년 미만 혼인기간이면 분할연금 수급이 어렵습니다.</strong> 다만 재산분할 청구에서 연금 외의 재산(부동산·예금 등)에 대한 분할을 별도로 검토해볼 수 있습니다.',
      },
      {
        question: '이혼 합의 시 "연금은 포기한다"고 했는데 나중에 번복할 수 있나요?',
        answer:
          '<strong>서면으로 합의된 내용은 번복이 어렵습니다.</strong> 협의이혼 확인서에 포함된 내용이나 법원 조서는 법적 효력이 있어 추후 재청구가 곤란합니다. 이혼 협의 단계에서 전문가 상담을 먼저 받는 것이 좋습니다.',
      },
      {
        question: '재산분할 청구 기한 2년이 지났는데 연금만 따로 청구할 수 있나요?',
        answer:
          '<strong>재산분할 제척기간 2년이 도과하면 연금 분할 청구도 어려워집니다.</strong> 제척기간은 합의로 연장되지 않으니, 이혼 후 2년 이내에 반드시 처리하는 것이 필요합니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
      { label: '이혼 시 재산분할 기준', href: '/guide/divorce/divorce-property-division-standard' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
      { label: '이혼 후 위자료 청구 시효', href: '/guide/divorce/divorce-alimony-claim-deadline' },
    ],
  },

  // ─── 2. divorce / spouse-business-debt-cosign ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-business-debt-cosign',
    keyword: '배우자 사업 보증채무 이혼 재산분할',
    questionKeyword: '배우자가 사업 하다가 진 보증채무를 이혼할 때 내가 나눠 떠안아야 하나요?',
    ctaKeyword: '배우자 사업 보증채무 분담 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '배우자 사업 보증채무, 이혼 재산분할에서 어떻게 처리하나 | 로앤가이드',
      description:
        '배우자가 사업 운영 중 진 보증채무가 이혼 재산분할에 포함되는지, 내가 함께 책임져야 하는지 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 사업하다 진 보증채무가 수억 원인데, 이혼하면 저도 갚아야 하나요?"라는 질문이 많습니다. 배우자의 사업 관련 보증채무가 이혼 재산분할에서 어떻게 처리되는지, 내가 직접 보증인이 아닌데도 채무를 분담해야 하는 상황인지 정리해두면 협상 테이블에서 흔들리지 않을 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 사업 보증채무가 재산분할 대상에 포함되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 부부 공동 기여 여부가 핵심입니다. 일방의 단독 사업 채무는 원칙적으로 분할 대상에서 제외될 수 있습니다.</strong></p>\n<ul>\n<li><strong>재산분할 대상 채무의 원칙</strong> — 민법 제839조의2에 따라 재산분할은 "부부 쌍방의 협력으로 이룩한 재산"이 기준. 상대방이 형성·유지에 무관한 채무는 분할 대상에서 제외될 수 있습니다.</li>\n<li><strong>사업 보증채무의 특수성</strong> — 배우자 명의 사업 보증채무가 가사채무(일상 생활비 관련)가 아닌 사업 목적이면 상대방 배우자에게 채무가 귀속되지 않는 것이 원칙입니다.</li>\n<li><strong>공동 연대보증 여부 확인</strong> — 본인이 공동 보증인이나 연대보증인으로 서명한 경우는 별개 문제. 서류를 먼저 확인하세요.</li>\n<li><strong>가사채무 여부</strong> — 생활비·자녀 교육비 등 일상가사 채무는 부부가 연대책임을 질 수 있으나, 사업 투자금·사업 보증은 이와 다릅니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "내 이름이 보증에 없다"면 원칙적으로 사업 채무 책임이 없지만, 재산분할 계산 시 채무가 공제되는 방식으로 영향을 줄 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 재산분할 계산에서 채무는 어떻게 반영되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 부부 공동재산에서 공동 기여 채무를 차감한 순재산을 기준으로 분할 비율을 산정합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적극재산 목록 작성</strong> — 부동산·예금·차량·보험 해약환급금 등 전체 재산 파악.</li>\n<li><strong>2단계 — 채무 성격 분류</strong> — 가사채무(생활비·주거비) vs 사업채무(투자·보증) 구분. 배우자 명의 사업 보증채무가 공동 기여 재산과 무관하면 분할 계산에서 제외 주장 가능.</li>\n<li><strong>3단계 — 기여도 산정</strong> — 전업주부라도 혼인 기간 중 가사 노동을 통한 재산 유지·증식 기여가 인정될 수 있어, 기여도 30~50% 주장을 뒷받침할 자료를 준비.</li>\n<li><strong>4단계 — 법원 협의 또는 조정 신청</strong> — 채무 귀속에 대해 합의가 안 되면 가정법원 조정→재산분할 심판 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 채무 귀속 여부와 내 분할 비율 산정, AI가 상황별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 채권자가 나에게 채무 변제를 요구하면 어떻게 대응하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인이 보증인이 아니라면 채권자는 원칙적으로 본인에게 직접 청구할 수 없습니다.</strong></p>\n<ul>\n<li><strong>직접 보증 여부 확인</strong> — 금융기관 대출·보증 계약서에 본인 서명이 없으면 연대책임이 없습니다. 금융감독원 금융소비자포털에서 본인 명의 보증 이력 조회 가능.</li>\n<li><strong>일상가사 채무 주의</strong> — 생활비·의료비 등 일상가사 채무는 민법 제832조에 따라 부부가 연대책임을 질 수 있으므로, 범위를 먼저 구분하세요.</li>\n<li><strong>이혼 후 채무 분리</strong> — 이혼 판결 또는 협의서에 채무 귀속을 명시해두면 이혼 후 채권자에 대한 대응 근거가 됩니다. 단 채권자는 이혼 합의에 구속되지 않으니 별도 대응이 필요할 수 있습니다.</li>\n<li><strong>채무 공제 주장</strong> — 재산분할 심판에서 배우자 사업 채무를 공제 대상으로 주장해 분할 받을 금액을 늘리는 방향도 검토 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 전 본인 명의 금융 거래에서 배우자 사업과 관련된 보증 계약이 없는지 반드시 확인하세요.</blockquote>',
      },
      {
        title: 'Q. 이혼 협의 시 채무 관련 합의는 어떻게 문서화하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무 귀속 내용을 이혼 합의서 또는 법원 조서에 명확히 기재해두어야 사후 분쟁을 줄일 수 있습니다.</strong></p>\n<ul>\n<li><strong>이혼 합의서 작성</strong> — "배우자 사업 관련 채무는 배우자 단독 부담으로 한다"는 내용을 명시. 공증 또는 법원 확인 절차를 거치면 강제 집행력을 갖출 수 있습니다.</li>\n<li><strong>법원 조정 조서</strong> — 가정법원 조정 절차에서 채무 귀속을 합의하면 판결과 동일한 효력.</li>\n<li><strong>재산분할 판결에 포함</strong> — 재판이혼 청구 시 채무 귀속 쟁점을 청구 취지에 포함시키면 판결문에 반영 가능.</li>\n<li><strong>채무 인수 조항 주의</strong> — 배우자 채무를 본인이 인수하는 내용의 합의는 신중히 검토 필요. 채권자 동의 없이 채무 면탈 효과가 발생하지 않을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재산분할 청구 시효는 이혼일로부터 2년(제척기간)입니다. 이혼 후 채무 관련 분쟁을 미뤄두면 청구권 자체가 소멸할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부 일방의 채무와 재산분할 대상 판단',
        summary:
          '대법원 2024므13669 사건(대법원, 2025.10.16 선고)에서 법원은 이혼에 의한 재산분할에서 어떤 적극재산이나 채무가 부부 쌍방의 협력이 아니라 부부 중 일방에 의하여 생긴 것으로서 상대방이 그 형성이나 유지 또는 부담과 무관한 경우에는 이를 재산분할의 대상으로 삼을 수 없다고 판시했습니다.',
        takeaway: '배우자 단독 사업채무는 공동 기여 입증이 없으면 재산분할 대상에서 제외될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '배우자 사업 채무가 5억인데 재산이 3억이면 재산분할 금액이 없어지나요?',
        answer:
          '<strong>사업 채무가 공동 기여 채무인지 아닌지에 따라 결과가 달라집니다.</strong> 배우자 단독 사업 채무로 볼 수 있으면 분할 계산에서 제외하고 적극재산만 분할하는 방향을 검토해볼 수 있습니다.',
      },
      {
        question: '배우자가 사업 채무를 갚지 않으면 내 급여가 압류될 수 있나요?',
        answer:
          '<strong>본인이 보증인이나 연대채무자가 아니라면 원칙적으로 본인 급여는 압류 대상이 아닙니다.</strong> 다만 금융거래에서 연대보증 여부를 반드시 먼저 확인하세요.',
      },
      {
        question: '이혼 후에도 배우자 채권자가 나에게 청구할 수 있나요?',
        answer:
          '<strong>이혼 합의서의 채무 귀속 조항은 부부 내부에서만 효력이 있고, 채권자(제3자)에게는 대항할 수 없습니다.</strong> 채권자가 본인에게 청구하는 근거(보증 계약 등)가 없는지 확인하고, 있다면 변호사 상담을 검토하는 것이 좋습니다.',
      },
      {
        question: '재산분할 청구를 안 했는데 지금 이혼한 지 1년 6개월이 됐어요. 아직 청구 가능한가요?',
        answer:
          '<strong>이혼일로부터 2년 이내이면 아직 재산분할 청구가 가능합니다.</strong> 제척기간 도과 전에 가정법원에 조정신청 또는 심판청구를 하는 것이 안전합니다.',
      },
      {
        question: '배우자가 이혼 전 사업 채무를 갚기 위해 부동산을 처분했는데 재산분할에 영향이 있나요?',
        answer:
          '<strong>혼인 파탄 이후 공동재산과 무관하게 처분된 재산은 사실심 변론종결일에도 보유한 것으로 보아 분할 대상에 포함할 수 있는 경우가 있습니다.</strong> 은닉·처분 정황이 있으면 이를 증거로 보존하고 법원에 주장하는 방향을 검토할 수 있습니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 채무 차감 계산', href: '/guide/divorce/divorce-debt-deduction-formula' },
      { label: '일상가사 채무 부부 연대책임', href: '/guide/divorce/divorce-daily-affairs-debt-liability' },
      { label: '사해행위 취소로 은닉 재산 환수', href: '/guide/divorce/divorce-fraudulent-transfer-cancel' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '이혼 재산분할 기준 총정리', href: '/guide/divorce/divorce-property-division-standard' },
    ],
  },

  // ─── 3. divorce / dating-app-affair-evidence ───
  {
    domain: 'divorce',
    slug: 'divorce-dating-app-affair-evidence',
    keyword: '데이팅앱 외도 증거',
    questionKeyword: '배우자가 데이팅앱을 쓴 걸 발견했는데 외도 증거로 쓸 수 있나요?',
    ctaKeyword: '데이팅앱 외도 증거 활용 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '데이팅앱 외도 증거, 이혼 소송에서 쓸 수 있나 5가지 정리 | 로앤가이드',
      description:
        '배우자의 데이팅앱 사용·대화 내역이 재판상 이혼과 위자료 청구에서 증거로 인정받으려면 어떻게 수집해야 하는지 지금 확인하세요.',
    },
    intro:
      '<p>배우자 폰에서 데이팅앱 알림을 우연히 봤을 때, "이게 증거가 될까, 캡처해도 되나?"라는 생각이 드시죠. 외도 증거는 수집 방법이 잘못되면 오히려 증거능력을 잃거나 본인이 법적 책임을 질 수 있어 순서와 방법이 중요합니다. 적법한 경로로 확보한 증거가 위자료 청구와 이혼 소송에서 결정적 역할을 합니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 폰의 데이팅앱 화면 캡처가 증거가 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인이 직접 발견한 화면 캡처는 일반적으로 증거로 활용될 수 있지만, 해킹·불법 감청으로 취득한 내용은 증거능력이 배척됩니다.</strong></p>\n<ul>\n<li><strong>적법 증거 — 직접 목격 캡처</strong> — 배우자가 자리를 비운 사이 화면에 표시된 앱 알림·프로필을 캡처한 경우, 불법 감청 없이 취득한 것으로 볼 수 있습니다.</li>\n<li><strong>위법 증거 — 앱 해킹·몰래 접속</strong> — 배우자 동의 없이 비밀번호를 알아내거나 해킹 프로그램을 설치해 대화 내용을 수집하면 통신비밀보호법 위반 소지가 있습니다.</li>\n<li><strong>공개 프로필 확인</strong> — 데이팅앱의 공개 프로필(닉네임·사진 등)을 배우자로 확인한 자료는 비교적 안전한 경로입니다.</li>\n<li><strong>통화 녹음 주의</strong> — 배우자와의 대화 직접 녹음은 당사자 간 동의 없어도 가능하지만, 제3자(상간자)와의 대화를 몰래 녹음하면 통신비밀보호법 제14조 위반 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수집 방법의 적법성이 증거 가치보다 먼저입니다. 위법 수집 증거는 법원에서 배척될 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 데이팅앱 증거로 위자료를 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 데이팅앱 사용 자체가 아니라 "부정행위"로 인한 혼인 파탄이 입증될 때 위자료 청구가 가능합니다.</strong></p>\n<ol>\n<li><strong>부정행위 입증 수준</strong> — 단순 앱 설치·대화 시작만으로는 불충분할 수 있습니다. 직접 만남·성관계 등 부부공동생활 침해 정황까지 연결되어야 위자료 청구 근거가 강해집니다.</li>\n<li><strong>정황 증거 누적</strong> — 앱 대화 캡처 + 외출 패턴 기록 + 카드 사용 내역(숙박·식사) + 통화 빈도를 묶으면 설득력이 높아집니다.</li>\n<li><strong>상간자 위자료 병행</strong> — 상대방(상간자)도 공동불법행위자로서 위자료 책임이 있을 수 있으며, 배우자와 별소(별개 소송)로 청구하거나 함께 청구하는 방법을 검토해볼 수 있습니다.</li>\n<li><strong>시효 관리</strong> — 이혼을 원인으로 하는 위자료청구권 소멸시효는 이혼일로부터 3년(대법원 2025므10716, 2026.01.29 선고 기준).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">외도 증거 활용 가능성과 위자료 청구 절차, AI가 상황별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 증거를 어떻게 보존해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 수집 즉시 타임스탬프 있는 방법으로 보존해야 증거 가치를 유지할 수 있습니다.</strong></p>\n<ul>\n<li><strong>화면 캡처 + 날짜 표시</strong> — 폰 화면 상단의 날짜·시각이 표시된 상태로 캡처. 이후 클라우드 자동 업로드로 원본 보존.</li>\n<li><strong>공증 또는 내용증명</strong> — 중요한 대화 내용은 공증 사무소에 화면 내용을 확인받는 방법도 있습니다.</li>\n<li><strong>디지털 포렌식</strong> — 법원 절차에서 전문 기관의 포렌식 감정 의뢰를 통해 삭제된 메시지도 복원될 수 있습니다.</li>\n<li><strong>제3자 목격 진술</strong> — 지인·지인 가족의 목격 진술을 메일·문자로 확보해두면 보완 증거로 활용 가능.</li>\n<li><strong>SNS 공개 게시물</strong> — 상간자의 SNS에 배우자와 찍힌 공개 게시물은 캡처 + URL 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 배우자 이메일·앱 계정에 몰래 접속하거나 위치 추적 앱을 몰래 설치하는 것은 개인정보보호법·정보통신망법 위반 소지가 있어 주의하세요.</blockquote>',
      },
      {
        title: 'Q. 데이팅앱 외도로 이혼 소송을 제기하는 절차는 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원 조정신청 → 조정 불성립 시 본안 소송으로 진행됩니다.</strong></p>\n<ul>\n<li><strong>조정전치주의</strong> — 재판상 이혼은 먼저 가정법원에 조정 신청을 해야 합니다. 조정 기간은 통상 2~4개월.</li>\n<li><strong>소장 작성</strong> — 이혼청구 소장에 민법 제840조 제1호(부정한 행위) 또는 제6호(중대한 사유)를 근거로 기재. 위자료·재산분할·친권·양육비 청구를 함께 포함 가능.</li>\n<li><strong>증거 제출</strong> — 가정법원 제출 시 수집한 데이팅앱 캡처·통화 기록·외출 일지 등을 증거 목록과 함께 첨부.</li>\n<li><strong>이혼 사유 입증서류</strong> — 진단서·녹취·문자·카드 내역 등을 유형별로 정리해 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 소송 판결까지 통상 6개월~1년이 소요될 수 있습니다. 소장 제출 전 증거 자료를 최대한 확보해두는 것이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정행위 위자료와 제3자 책임',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 부부의 일방과 부정행위를 하여 부부공동생활을 침해하고 배우자에게 정신적 고통을 가하는 행위는 원칙적으로 불법행위를 구성하며, 배우자와 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계라고 판시했습니다.',
        takeaway: '데이팅앱 외도 상대방(상간자)에게도 위자료 청구를 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '배우자가 "데이팅앱만 설치한 것"이라고 발뺌하면 어떻게 하나요?',
        answer:
          '<strong>앱 설치만으로 부정행위 입증이 어려울 수 있습니다.</strong> 대화 내용·만남 정황 등 추가 증거를 확보하거나, 배우자의 행동 패턴 변화(외출 빈도·통화 시간대)를 기록해두는 것이 도움이 됩니다.',
      },
      {
        question: '배우자 폰을 허락 없이 캡처하면 불법인가요?',
        answer:
          '<strong>화면에 표시된 내용을 직접 눈으로 보고 캡처하는 것은 일반적으로 불법 감청으로 보지 않습니다.</strong> 다만 비밀번호를 무단으로 해제하거나 해킹 프로그램을 사용하는 것은 다를 수 있어 주의가 필요합니다.',
      },
      {
        question: '이미 이혼을 했는데 나중에 위자료 청구가 가능한가요?',
        answer:
          '<strong>이혼일로부터 3년 이내라면 위자료 청구 소멸시효가 완성되지 않았습니다.</strong> 이혼 원인이 된 부정행위에 대해 별도 손해배상청구를 검토해볼 수 있습니다.',
      },
      {
        question: '데이팅앱 증거만 있고 성관계 증거가 없으면 위자료가 어려운가요?',
        answer:
          '<strong>성관계 증거가 없어도 부정한 행위의 정황 입증이 가능한 경우가 있습니다.</strong> 앱 대화 내용의 수위·만남 횟수·배우자의 태도 변화 등을 종합해 법원이 판단하므로, 가진 증거를 최대한 정리해두는 것이 중요합니다.',
      },
      {
        question: '상간자 위자료 청구와 이혼 소송을 동시에 진행할 수 있나요?',
        answer:
          '<strong>이혼 소송(가사소송)과 상간자 위자료 청구는 병행 가능하지만 법원이 다를 수 있습니다.</strong> 이혼 소송은 가정법원, 상간자 위자료는 가사소송법 또는 민사 절차로 진행되는 경우가 있으니 절차를 미리 확인하는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '적법한 외도 증거 수집', href: '/guide/divorce/divorce-affair-evidence-collection-legal' },
      { label: '상간자 위자료 별소 가이드', href: '/guide/divorce/divorce-third-party-damages-guide' },
      { label: '부정행위 위자료 청구 절차', href: '/guide/divorce/divorce-infidelity-damages-procedure' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
      { label: '이혼 후 위자료 청구 시효', href: '/guide/divorce/divorce-alimony-claim-deadline' },
    ],
  },

  // ─── 4. divorce / stay-home-husband-property-split ───
  {
    domain: 'divorce',
    slug: 'divorce-stay-home-husband-property-split',
    keyword: '전업주부 남편 이혼 재산분할',
    questionKeyword: '남편 명의 재산뿐인데 전업주부도 이혼 시 재산분할을 받을 수 있나요?',
    ctaKeyword: '전업주부 재산분할 기여도 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '전업주부 이혼 재산분할 — 남편 명의 재산도 받을 수 있는 4가지 근거 | 로앤가이드',
      description:
        '남편 명의 재산만 있는 경우에도 전업주부의 가사 기여도를 인정받아 재산분할을 청구할 수 있는 법적 근거와 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"20년을 전업주부로 살았는데 내 명의 재산이 없어요. 이혼하면 아무것도 못 받는 건가요?"라는 걱정이 많습니다. 민법은 명의와 상관없이 혼인 중 공동으로 형성한 재산을 분할하도록 설계되어 있어, 가사 노동·자녀 양육도 재산 형성의 기여로 인정받을 수 있습니다. 근거를 정리해두면 협상에서 주도권을 잡을 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전업주부의 가사 노동이 재산 기여로 인정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민법 제839조의2는 "부부 쌍방의 협력으로 이룩한 재산"을 기준으로 하며, 가사 노동도 협력의 한 형태로 볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>부부별산제 보완 제도</strong> — 민법 제830조는 각자 취득한 재산을 특유재산으로 인정하지만, 제839조의2로 이혼 시 기여도에 따른 분할을 보장합니다.</li>\n<li><strong>가사 기여도 인정 범위</strong> — 자녀 양육·가사 관리·배우자 사업 보조·가정 경제 지원 등이 기여로 인정될 수 있습니다. 법원은 혼인 기간·기여 내용·배우자의 직업·재산 형성 경위 등을 종합 판단합니다.</li>\n<li><strong>기여도 30~50% 사례</strong> — 전업주부의 재산분할 기여도는 구체적 사실관계에 따라 법원이 달리 판단할 수 있으며, 혼인 기간이 길고 기여 내용이 명확할수록 인정 비율이 높아지는 경향이 있습니다.</li>\n<li><strong>특유재산 예외</strong> — 혼인 전 남편이 소유하거나 상속·증여로 취득한 재산은 특유재산으로서 원칙적으로 분할 대상에서 제외될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "내 명의 재산이 없어도 기여를 입증하면 분할받을 수 있다"는 것이 재산분할 제도의 핵심입니다.</blockquote>',
      },
      {
        title: 'Q. 재산분할 기여도 입증을 위해 어떤 자료가 필요한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 혼인 기간·가사 기여·경제적 지원 내용을 구체적으로 정리한 자료가 기여도 주장의 근거가 됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 혼인 기간 확인</strong> — 혼인신고일~이혼 신고일까지 기간 및 자녀 수·출생일 정리. 기간이 길수록 기여도 주장 근거가 강해집니다.</li>\n<li><strong>2단계 — 가사 기여 내역 정리</strong> — 자녀 학교·병원 기록, 가사 도움(이사 기록·가전 구매 영수증 등) 내역 정리.</li>\n<li><strong>3단계 — 재산 형성 기여 자료</strong> — 남편 사업 보조·인맥 지원·육아로 인한 남편 직장 집중 지원 정황을 메모·진술로 정리.</li>\n<li><strong>4단계 — 분할 대상 재산 파악</strong> — 부동산 등기부·금융거래확인서·자동차 등록증·보험 해약환급금 내역으로 전체 재산 목록 작성.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">재산분할 기여도 주장과 필요 서류, AI가 상황에 맞게 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 남편이 "가사 노동은 기여가 아니다"라고 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산분할 제도 자체가 가사 기여를 인정하는 구조이므로 이 주장은 법원에서 받아들여지기 어렵습니다.</strong></p>\n<ul>\n<li><strong>제도 설계</strong> — 민법 제839조의2 및 대법원 판례는 가사 노동을 재산 형성의 기여로 인정해왔습니다. 법원이 직권으로 기여도를 조사·판단합니다.</li>\n<li><strong>혼인 기간이 길수록 유리</strong> — 20년 이상 혼인한 경우, 배우자가 직장 생활에 집중할 수 있었던 배경에 전업주부의 기여가 있다는 주장이 인정될 소지가 높습니다.</li>\n<li><strong>사업 보조 기여</strong> — 배우자 사업 관련 서류 작성·접대·인맥 지원을 했다면 이를 구체적으로 입증해야 합니다.</li>\n<li><strong>재산 규모와 기여 상관관계</strong> — 재산 형성 시기와 가사 기여 시기가 겹칠수록 기여도 인정 가능성이 높아집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 법원은 "반드시 같은 비율로 분할해야 한다"는 규정이 없으므로, 구체적 사정을 최대한 자료로 입증하는 것이 중요합니다.</blockquote>',
      },
      {
        title: 'Q. 이혼 후 생활비가 걱정될 때 추가로 받을 수 있는 것이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산분할 외에도 위자료·양육비·부양료 청구를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>위자료</strong> — 배우자의 유책행위(외도·폭행·유기 등)가 있으면 이혼을 원인으로 위자료 청구 검토 가능. 이혼일로부터 3년 이내 청구.</li>\n<li><strong>양육비</strong> — 미성년 자녀가 있으면 양육비를 청구할 수 있으며, 양육비 산정기준표를 기준으로 법원이 결정합니다.</li>\n<li><strong>부양료</strong> — 이혼 후 생계 곤란 시 재산분할에 부양적 요소가 반영될 수 있습니다. 재산분할 청구 시 부양적 요소를 명시하는 것이 좋습니다.</li>\n<li><strong>재산분할 청구 시효</strong> — 이혼일로부터 2년(제척기간). 위자료는 3년 소멸시효. 두 기한을 각각 관리해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 협의이혼 시 재산분할 없이 "재산은 포기"하는 합의를 하면 이후 청구가 어렵습니다. 협의 전 검토가 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 제도의 목적과 사망 후 상속 승계',
        summary:
          '대법원 2024스876 사건(대법원, 2026.01.15 선고)에서 법원은 재산분할 제도가 이혼 시 부부가 혼인 중 공동으로 형성한 재산을 재산 명의와 상관없이 기여도에 따라 각자의 몫으로 분할하는 것을 주된 목적으로 한다고 판시하며, 그 의무는 사망 후에도 상속인에게 승계된다고 확인했습니다.',
        takeaway: '재산이 남편 명의여도 혼인 중 공동 기여가 인정되면 분할 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '전업주부였다고 기여도가 낮게 인정되는 건가요?',
        answer:
          '<strong>전업주부라서 기여도가 낮아지는 것은 아닙니다.</strong> 법원은 가사 노동·자녀 양육을 재산 형성 기여로 인정하는 방향으로 발전해왔습니다. 혼인 기간이 길수록, 자녀 수가 많을수록 기여 인정 폭이 넓어지는 경향이 있습니다.',
      },
      {
        question: '결혼 전 남편이 가진 재산도 분할 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 혼인 전 특유재산(남편 단독 취득 재산)은 분할 대상이 아닙니다.</strong> 다만 혼인 기간 중 본인의 노력이나 기여로 그 재산의 가치가 유지·증식된 부분이 있다면 부분적으로 기여를 주장할 수 있는 경우도 있습니다.',
      },
      {
        question: '남편이 재산을 숨기거나 처분하면 어떻게 하나요?',
        answer:
          '<strong>이혼 소송 중 사전에 재산목록 제출 명령을 신청하거나, 재산 은닉이 의심되면 법원에 재산 명시 절차를 요청하는 것을 검토해볼 수 있습니다.</strong> 혼인 파탄 이후 공동재산과 무관하게 처분된 재산은 분할 대상에 포함하도록 주장할 수 있는 경우도 있습니다.',
      },
      {
        question: '협의이혼 중인데 남편이 "재산분할 없다"고 하면?',
        answer:
          '<strong>협의가 안 되면 가정법원에 재산분할 심판을 청구할 수 있습니다.</strong> 협의이혼 확인서에 서명하기 전에 재산분할 합의가 먼저 이루어져야 합니다. 서명 후에는 이혼일로부터 2년 이내 별도 청구가 가능합니다.',
      },
      {
        question: '이혼 후 남편이 사망하면 재산분할 청구를 어디에 해야 하나요?',
        answer:
          '<strong>대법원 판례에 따르면 이혼한 배우자 일방이 사망해도 재산분할의무는 상속인에게 승계됩니다.</strong> 사망한 전 배우자의 상속인을 상대로 이혼일로부터 2년 이내에 재산분할을 청구하는 절차를 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '이혼 재산분할 기준 총정리', href: '/guide/divorce/divorce-property-division-standard' },
      { label: '특유재산과 기여도 평가', href: '/guide/divorce/divorce-special-property-contribution' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
      { label: '이혼 후 위자료 청구 시효', href: '/guide/divorce/divorce-alimony-claim-deadline' },
    ],
  },
];
