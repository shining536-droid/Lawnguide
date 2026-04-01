import { SpokePage } from '../spoke-pages';

export const spokesBatch16Part2Pages: SpokePage[] = [
  {
    domain: 'child-support',
    slug: 'child-support-enforcement-methods',
    keyword: '양육비 미지급 시 강제집행 방법 3가지',
    questionKeyword: '전 배우자가 양육비를 안 주면 어떤 강제집행 방법이 있나요?',
    ctaKeyword: '양육비 강제집행 방법 확인',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '양육비 미지급 강제집행 3가지 방법 — 감치·압류·출국금지 | 로앤가이드',
      description: '양육비를 3개월째 안 줍니다. 감치, 급여 압류, 출국금지까지 실제로 강제집행하는 3가지 방법과 신청 절차를 지금 확인하세요.',
    },
    intro: '이혼 후 2년째, 약속한 양육비가 또 안 들어왔습니다. 전화하면 "다음 달에 줄게"라는 말만 반복합니다. 아이 학원비는 이번 달이 마감인데, 통장 잔고는 텅 비어 있습니다. 양육비를 안 주는 상대방에게 법적으로 강제할 수 있는 3가지 방법을 정리했습니다.',
    timelineSteps: ['감치·과태료 신청', '급여·예금 압류', '출국금지·면허정지'],
    sections: [
      {
        title: '방법 1: 이행명령 위반 시 감치(구금)와 과태료 부과',
        content:
          '<p><strong style="color:#1e3a5f">양육비를 안 내면 최대 30일 구금할 수 있습니다</strong></p>\n<p>가정법원에서 양육비 이행명령을 내렸는데도 이행하지 않으면, <strong>가사소송법 제67조</strong>에 따라 법원은 의무자를 <strong>30일 이내의 감치(구금)</strong>에 처할 수 있습니다. 감치는 양육비를 지급할 능력이 있음에도 고의로 지급하지 않는 경우에 적용됩니다.</p>\n<p>감치 외에도 <strong>1천만 원 이하의 과태료</strong>를 부과할 수 있습니다. 감치와 과태료는 동시에 적용될 수 있어, 양육비 채무자에게 강력한 압박 수단이 됩니다. 감치 결정이 나면 상대방은 경찰에 의해 인치(구인)되어 감치 시설에 수용됩니다.</p>\n<p>신청 방법은 간단합니다. 양육비 이행명령을 받은 가정법원에 감치 신청서를 제출하면 됩니다. 인지대 1,000원, 송달료 수천 원 수준으로 비용 부담이 적습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이행명령 불이행 → 30일 이내 감치 + 1천만 원 이하 과태료 동시 가능</blockquote>',
      },
      {
        title: '방법 2: 급여·예금·부동산 압류로 직접 회수',
        content:
          '<p><strong style="color:#1e3a5f">양육비 채권은 급여의 1/2까지 압류할 수 있습니다</strong></p>\n<p><strong>민사집행법 제246조</strong>에 따라 일반 채권은 급여의 1/4까지만 압류할 수 있지만, 양육비 채권은 특례로 <strong>급여의 1/2까지 압류</strong>가 가능합니다. 상대방이 직장에 다니고 있다면 급여 압류가 가장 확실한 회수 방법입니다.</p>\n<p>급여 압류 외에도 은행 예금 압류, 자동차 압류, 부동산 강제경매 등을 진행할 수 있습니다. 재산 소재를 모르면 법원에 <strong>재산조회 신청</strong>(민사집행법 제61조)을 하여 금융기관·국세청·국토교통부를 통해 상대방의 재산을 파악할 수 있습니다.</p>\n<p>강제집행을 위해서는 <strong>집행권원</strong>이 필요합니다. 가정법원 판결문, 조정조서, 양육비부담조서가 이에 해당합니다. 구두 합의만으로는 강제집행이 불가능하므로, 아직 집행권원이 없다면 먼저 양육비 청구 심판을 진행하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 급여 1/2 압류 + 예금·부동산 압류 가능 | 전제조건: 집행권원 확보</blockquote>',
      },
      {
        title: '방법 3: 출국금지·운전면허 정지·명단 공개',
        content:
          '<p><strong style="color:#1e3a5f">악의적 미지급자에게는 출국금지와 면허정지까지 가능합니다</strong></p>\n<p><strong>양육비이행확보법 제15조</strong>에 따라, 양육비를 감당할 능력이 있음에도 정당한 사유 없이 지급하지 않는 자에 대해 법무부장관에게 <strong>출국금지를 요청</strong>할 수 있습니다. 출국금지 기간은 최대 6개월이며, 연장이 가능합니다.</p>\n<p><strong>양육비이행확보법 제21조의2</strong>에 따라 <strong>운전면허 정지</strong>도 요청할 수 있습니다. 또한 양육비 미지급자의 인적사항을 양육비 이행확보원 홈페이지에 공개할 수 있어, 사회적 압박 효과가 큽니다.</p>\n<p>이 모든 절차는 <strong>양육비 이행확보원</strong>(전화 1644-6621, 홈페이지 childsupport.or.kr)에서 무료로 지원합니다. 집행권원만 있으면 이행확보원이 재산조회부터 강제집행까지 대행해줍니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 출국금지(최대 6개월) + 면허정지 + 명단공개 → 이행확보원 무료 지원</blockquote>',
      },
      {
        title: '강제집행 전에 한시적 양육비부터 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">강제집행 진행 중에도 국가에서 양육비를 먼저 지급받을 수 있습니다</strong></p>\n<p><strong>양육비이행확보법 제13조</strong>에 따라 양육비 이행확보원에서는 <strong>한시적 양육비</strong>를 먼저 지급합니다. 자녀 1인당 월 최대 <strong>20만 원</strong>까지 받을 수 있으며, 집행권원과 양육비 미지급 확인서가 있으면 신청할 수 있습니다.</p>\n<p>한시적 양육비는 강제집행과 별개로 진행되므로, 압류 절차가 진행되는 동안에도 당장 필요한 생활비를 보전할 수 있습니다. 신청 후 약 1~2개월 내 지급이 시작됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">한시적 양육비: 자녀 1인당 월 최대 20만 원 | 강제집행과 병행 가능</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fdf7e4 0%,#fef9ed 100%);border-left:4px solid #d4a017;border-radius:8px">\n<p style="margin:0;font-weight:700;color:#b8860b">내 양육비 미지급 상황, 어떤 강제집행이 가장 효과적일까요?</p>\n<p style="margin:4px 0 0;font-size:0.95em"><a href="/chat?domain=child-support" style="color:#b8860b;text-decoration:underline">로앤가이드 AI 상담에서 내 상황에 맞는 강제집행 방법을 확인해보세요 →</a></p>\n</div>',
      },
    ],
    cases: [
      {
        title: '대법원 2025으517 사건(2025.05.23 선고) — 이행명령의 범위와 한계',
        summary:
          '이 사건에서 대법원은 가사소송법 제64조의 이행명령은 양육비부담조서 등에 의해 확정된 의무 중 의무자가 이행하지 않은 범위 내에서만 할 수 있다고 판시했습니다. 이행명령으로 확정된 의무의 내용을 변경하거나 새로운 의무를 창설할 수는 없습니다.',
        takeaway:
          '감치나 과태료 신청 전에 밀린 양육비 금액을 월별로 정확하게 계산하세요. 미지급 금액 계산서를 첨부하면 이행명령과 감치 신청이 빠르게 진행됩니다.',
      },
    ],
    faq: [
      {
        question: '구두로만 양육비를 약속했는데 강제집행이 가능한가요?',
        answer:
          '<strong>구두 합의만으로는 강제집행이 불가능합니다.</strong> 강제집행을 위해서는 가정법원의 판결문, 조정조서, 양육비부담조서 등 집행권원이 필요합니다. 먼저 가정법원에 양육비 청구 심판을 신청하세요.',
      },
      {
        question: '상대방이 직장을 자주 바꾸면 급여 압류가 안 되나요?',
        answer:
          '<strong>양육비 이행확보원에서 상대방의 새 직장을 추적할 수 있습니다.</strong> 국민건강보험공단 자료 등을 통해 상대방의 현재 직장을 확인하고, 새 직장에 대해 다시 급여 압류를 신청할 수 있습니다.',
      },
      {
        question: '감치를 당하면 양육비를 안 내도 되나요?',
        answer:
          '<strong>감치는 양육비 지급 의무를 면제하지 않습니다.</strong> 감치 후에도 밀린 양육비 전액을 지급해야 합니다. 감치는 이행을 촉구하는 수단이지, 양육비 의무 자체를 대체하지 않습니다.',
      },
      {
        question: '양육비 이행확보원 지원은 소득 제한이 있나요?',
        answer:
          '<strong>한시적 양육비는 소득 제한 없이 신청할 수 있습니다.</strong> 다만 집행권원(판결문, 조정조서 등)이 있어야 합니다. 법률 상담, 재산 조회, 강제집행 지원도 무료로 받을 수 있습니다.',
      },
      {
        question: '해외에 있는 상대방에게도 양육비를 받을 수 있나요?',
        answer:
          '<strong>국제양육비 회수 제도를 활용할 수 있습니다.</strong> 양육비 이행확보원에서 해외 거주 채무자에 대한 양육비 회수를 지원합니다. 출국금지는 상대방이 출국하기 전에 신청해야 효과적입니다.',
      },
    ],
    cta: {
      text: '양육비를 받지 못하고 있다면, 내 상황에 맞는 강제집행 방법을 확인해보세요',
      link: '/diagnosis/child-support',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '양육비 청구 소송 절차', href: '/guide/child-support/child-support-lawsuit-process' },
      { label: '양육비 산정 기준표 계산법', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 청구 어디부터 시작해야 하나', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '이혼 시 양육권 확보 방법', href: '/guide/divorce/divorce-child-custody-father-strategy' },
    ],
  },
  {
    domain: 'child-support',
    slug: 'child-support-calculation-increase',
    keyword: '양육비 산정 기준과 증액 청구 방법',
    questionKeyword: '양육비 금액이 부족한데 얼마까지 받을 수 있고 증액 청구는 어떻게 하나요?',
    ctaKeyword: '양육비 산정 기준 확인',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '양육비 산정 기준표와 증액 청구 — 적정 금액 계산 5단계 | 로앤가이드',
      description: '양육비가 너무 적어서 아이 교육비도 감당이 안 됩니다. 산정기준표로 적정 금액을 계산하고 증액 청구하는 방법을 지금 확인하세요.',
    },
    intro: '이혼할 때 합의한 양육비 월 80만 원. 그때는 아이가 5살이었지만 지금은 중학생입니다. 학원비만 60만 원, 급식비에 교통비까지 합치면 한 달에 180만 원이 넘게 들어갑니다. 양육비가 현실과 맞지 않을 때, 적정 금액을 다시 계산하고 증액을 청구하는 방법을 정리했습니다.',
    sections: [
      {
        title: '양육비 산정기준표로 적정 금액을 먼저 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">서울가정법원 양육비 산정기준표가 실무상 기준이 됩니다</strong></p>\n<p>양육비는 <strong>부모 합산 소득</strong>과 <strong>자녀의 나이</strong>를 기준으로 산정합니다. 서울가정법원에서 공개하는 양육비 산정기준표(2024년 개정)에 따르면, 부모 합산 월 소득 600만 원 기준으로 자녀 1인당 양육비는 다음과 같습니다.</p>\n<p>0~2세: 약 <strong>130만 원</strong>, 3~5세: 약 <strong>120만 원</strong>, 6~11세: 약 <strong>130만 원</strong>, 12~14세: 약 <strong>160만 원</strong>, 15~18세: 약 <strong>170만 원</strong>입니다. 부모 합산 소득이 높을수록, 자녀 나이가 많을수록 양육비가 올라갑니다.</p>\n<p>산정기준표는 참고 자료이며, 법원은 <strong>자녀의 특별한 사정</strong>(질병, 특수교육 등), 양육자의 기여도, 비양육자의 재산 상태 등을 종합하여 최종 금액을 결정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 부모 합산 소득 + 자녀 나이 → 산정기준표로 기본 금액 산출 → 특별 사정 반영</blockquote>',
      },
      {
        title: '증액 사유를 객관적 수치로 입증하세요',
        content:
          '<p><strong style="color:#1e3a5f">자녀 성장에 따른 비용 증가를 월별 지출 내역으로 증명합니다</strong></p>\n<p><strong>민법 제837조</strong>에 따라 양육비 결정 후 사정이 변경된 경우, 가정법원에 양육비 변경(증액) 심판을 청구할 수 있습니다. 법원이 인정하는 대표적인 사정 변경 사유는 다음과 같습니다.</p>\n<p>자녀의 성장에 따른 교육비 증가(초등→중등→고등), 의료비 증가(치아교정, 시력교정 등), 물가 상승률(연평균 3~5%), 비양육자의 소득 증가, 양육자의 소득 감소 또는 실직 등입니다.</p>\n<p>증거로는 <strong>학원비 영수증, 교육비 납입 확인서, 의료비 명세서, 양육자 원천징수영수증</strong>을 준비하세요. 비양육자의 소득 증가가 의심되면, 법원에 사실조회를 신청하여 국세청·건강보험공단을 통해 소득을 확인할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: 교육비 영수증 + 의료비 명세서 + 소득 증빙 → 월별 비용 대비표 작성</blockquote>',
      },
      {
        title: '가정법원에 양육비 변경 심판을 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">인지대 2만 원으로 양육비 증액 심판을 신청할 수 있습니다</strong></p>\n<p>양육비 변경 심판은 <strong>가사소송법 제2조</strong>에 따른 마류 가사비송사건으로, 상대방 주소지 관할 가정법원에 신청합니다. 청구서에는 기존 양육비 결정 내용, 사정 변경 사유와 증거, 청구하는 증액 금액을 기재합니다.</p>\n<p>법원은 먼저 <strong>조정</strong>을 시도합니다(가사소송법 제50조). 조정이 성립하면 확정판결과 같은 효력을 가지며, 불성립 시 심판 절차로 넘어갑니다. 심판 기간은 통상 <strong>3~6개월</strong>입니다.</p>\n<p>증액 효력은 원칙적으로 <strong>심판 청구일</strong>부터 소급합니다. 따라서 증액이 필요하다고 판단되면 빨리 청구하는 것이 유리합니다. 대한법률구조공단(전화 132)에서 무료 법률 지원을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 심판 청구(인지대 2만 원) → 조정 시도 → 불성립 시 심판(3~6개월) | 효력: 청구일 소급</blockquote>',
      },
      {
        title: '과거 양육비도 청구할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">이미 지출한 과거 양육비도 상대방에게 분담을 청구할 수 있습니다</strong></p>\n<p>대법원은 부모 중 한쪽만이 자녀를 양육한 경우, 양육하는 부모가 <strong>과거 양육비</strong>에 대해 상대방의 분담분 상환을 청구할 수 있다고 판시하고 있습니다. 과거 양육비 청구는 자녀가 성년이 된 후에도 가능합니다.</p>\n<p>다만 과거 양육비의 분담 범위는 현재·장래 양육비와 동일한 기준이 아니라, 양육에 소요된 통상 생활비인지 여부, 상대방의 부양의무 인식 시기, 재산 상황 등을 종합하여 법원이 결정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">과거 양육비: 자녀 성년 후에도 청구 가능 | 분담 범위: 법원이 형평 원칙에 따라 결정</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fdf7e4 0%,#fef9ed 100%);border-left:4px solid #d4a017;border-radius:8px">\n<p style="margin:0;font-weight:700;color:#b8860b">내 양육비, 적정 금액이 얼마인지 궁금하신가요?</p>\n<p style="margin:4px 0 0;font-size:0.95em"><a href="/chat?domain=child-support" style="color:#b8860b;text-decoration:underline">로앤가이드 AI 상담에서 산정기준표 기반 적정 양육비를 계산해보세요 →</a></p>\n</div>',
      },
    ],
    cases: [
      {
        title: '대법원 2023스637 사건(2024.10.08 선고) — 과거 양육비 분담 기준',
        summary:
          '이 사건에서 대법원은 이혼 후 한쪽 부모만이 자녀를 양육한 경우, 과거 양육비에 대해 상대방의 분담분 상환을 청구할 수 있다고 판시했습니다. 다만 분담 범위를 정할 때 이혼 시 재산분할의 유무와 내용, 양육 경위, 소요 비용, 상대방의 부양의무 인식 여부 등을 종합적으로 고려해야 한다고 밝혔습니다.',
        takeaway:
          '양육비 증액이나 과거 양육비 청구 시, 자녀의 필요가 증가한 사실뿐 아니라 이혼 시 재산분할 상황과 비양육자의 경제적 여건까지 정리하여 제출하면 유리합니다.',
      },
    ],
    faq: [
      {
        question: '양육비 산정기준표는 어디서 확인하나요?',
        answer:
          '<strong>서울가정법원 홈페이지</strong>에서 양육비 산정기준표를 확인할 수 있습니다. 부모 합산 소득과 자녀 나이를 입력하면 기본 양육비 금액이 산출됩니다. 양육비 이행확보원 홈페이지에서도 간편 계산기를 제공합니다.',
      },
      {
        question: '양육비 산정 시 비양육자의 소득을 모르면 어떻게 하나요?',
        answer:
          '<strong>법원에 사실조회를 신청하면 됩니다.</strong> 가정법원은 국세청, 건강보험공단, 금융기관 등에 비양육자의 소득·재산 정보를 조회할 수 있습니다. 양육비이행관리원을 통해서도 재산 조사를 요청할 수 있습니다.',
      },
      {
        question: '양육비 증액은 소급 적용이 되나요?',
        answer:
          '<strong>원칙적으로 심판 청구일부터 소급 적용됩니다.</strong> 다만 실무적으로는 법원의 재량에 따라 적용 시점이 달라질 수 있으므로, 증액이 필요하다면 최대한 빨리 청구하는 것이 유리합니다.',
      },
      {
        question: '자녀가 사교육을 많이 받으면 양육비가 더 올라가나요?',
        answer:
          '<strong>사교육비는 양육비 산정 시 고려 사항 중 하나입니다.</strong> 다만 법원은 모든 사교육비를 인정하지는 않으며, 자녀의 나이와 학업 수준에 비추어 합리적인 범위의 교육비만 인정합니다. 영수증과 교육 필요성을 함께 제출하세요.',
      },
      {
        question: '재혼하면 양육비 증액 청구에 불리한가요?',
        answer:
          '<strong>양육자의 재혼 자체만으로 불리하지는 않습니다.</strong> 양육비는 부모의 자녀에 대한 의무이므로, 재혼과 관계없이 비양육자의 양육비 분담 의무는 유지됩니다. 다만 법원이 재혼 배우자의 소득을 참고할 수 있습니다.',
      },
    ],
    cta: {
      text: '양육비가 부족하다면, 적정 금액과 증액 청구 가능 여부를 확인해보세요',
      link: '/diagnosis/child-support',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '양육비 강제집행 방법 3가지', href: '/guide/child-support/child-support-enforcement-methods' },
      { label: '양육비 청구 소송 절차', href: '/guide/child-support/child-support-lawsuit-process' },
      { label: '양육비 청구 어디부터 시작해야 하나', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '이혼 재산분할 숨긴 재산 찾는 법', href: '/guide/divorce/divorce-hidden-asset-discovery' },
    ],
  },
  {
    domain: 'prostitution',
    slug: 'prostitution-first-offense-sentencing',
    keyword: '성매매 초범 처벌 수위와 감경 방법',
    questionKeyword: '성매매 초범인데 어떤 처벌을 받게 되나요?',
    ctaKeyword: '성매매 초범 대응 확인',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '성매매 초범 처벌 수위 — 벌금·기소유예·감경 3가지 | 로앤가이드',
      description: '성매매 혐의를 받고 있다면 초범 처벌 수위와 감경 가능성이 가장 궁금합니다. 벌금·기소유예·존스쿨까지 현실적 결과를 지금 확인하세요.',
    },
    intro: '경찰에서 연락이 왔습니다. 성매매 사건으로 출석하라는 통보입니다. 처음 겪는 일이라 앞으로 어떤 처벌을 받게 될지, 전과가 남는 건 아닌지 머릿속이 복잡합니다. 성매매 초범의 처벌 수위와 실질적인 감경 방법을 정리했습니다.',
    sections: [
      {
        title: '성매매 초범의 법정 처벌 수위',
        content:
          '<p><strong style="color:#1e3a5f">성매매처벌법상 성매매 단순 행위는 1년 이하 징역 또는 300만 원 이하 벌금입니다</strong></p>\n<p><strong>성매매알선등행위의처벌에관한법률(성매매처벌법) 제21조 제1항</strong>에 따라 성매매를 한 사람은 <strong>1년 이하의 징역</strong>이나 <strong>300만 원 이하의 벌금</strong>, 구류 또는 과료에 처합니다. 이것은 단순 성매매 행위자에 대한 처벌이며, 알선이나 강요는 별도의 중형이 적용됩니다.</p>\n<p>실무적으로 초범의 경우 <strong>벌금 100~200만 원</strong> 선에서 약식명령이 나오는 경우가 많습니다. 다만 이 경우에도 <strong>벌금형은 전과 기록에 남습니다.</strong> 전과 기록이 남지 않는 결과를 원한다면 기소유예 또는 보호처분을 받아야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정형: 1년 이하 징역 / 300만 원 이하 벌금 | 초범 실무: 벌금 100~200만 원 또는 기소유예</blockquote>',
      },
      {
        title: '초범이 받을 수 있는 3가지 감경 결과',
        content:
          '<p><strong style="color:#1e3a5f">기소유예, 존스쿨(교육조건부 기소유예), 보호처분 3가지가 가능합니다</strong></p>\n<p><strong>기소유예</strong>: 검사가 범죄 사실은 인정하지만 초범, 반성, 재범 방지 의지 등을 고려하여 기소하지 않는 처분입니다. 전과 기록이 남지 않습니다. 초범이고 단순 성매매인 경우 기소유예 가능성이 상대적으로 높습니다.</p>\n<p><strong>교육조건부 기소유예(존스쿨)</strong>: 성매매처벌법 제14조에 따라 검사는 성매매 사건의 피의자에 대해 <strong>성매매 예방교육(존스쿨) 수강</strong>을 조건으로 기소유예할 수 있습니다. 40시간 교육을 이수하면 기소되지 않습니다.</p>\n<p><strong>보호처분</strong>: 성매매처벌법 제14조에 따라 검사 또는 법원이 보호관찰, 사회봉사, 수강명령 등의 보호처분을 할 수 있습니다. 보호처분도 전과 기록에 남지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전과 안 남는 결과: 기소유예 / 존스쿨(40시간 교육) / 보호처분</blockquote>',
      },
      {
        title: '수사 단계에서 감경을 위해 준비할 것',
        content:
          '<p><strong style="color:#1e3a5f">진술 태도와 반성문이 기소유예 결정에 영향을 줍니다</strong></p>\n<p>경찰 조사에서의 <strong>진술 태도</strong>가 중요합니다. 사실관계를 인정하고 반성하는 태도를 보이되, 불리한 진술은 신중하게 해야 합니다. 특히 단순 성매매인지 알선에 해당하는지에 따라 처벌 수위가 크게 달라지므로, 사실관계를 정확히 파악한 후 진술하세요.</p>\n<p>감경에 도움이 되는 준비물: <strong>반성문</strong>(구체적 반성 내용과 재범 방지 계획), <strong>가족관계증명서</strong>(부양가족 증명), <strong>재직증명서</strong>(안정된 직업 증명), <strong>성매매 예방교육 수강 이력</strong>(자발적 교육 이수 증명) 등을 검사에게 제출하면 기소유예 결정에 유리합니다.</p>\n<p>주의할 점: 수사기관의 <strong>함정수사(위장 수사)</strong>에 의해 적발된 경우, 위법한 수사 방법이 사용되었는지 확인하세요. 위법한 함정수사는 위법수집증거로 배척될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 반성문 + 가족관계증명서 + 재직증명서 + 자발적 교육 이수 증명</blockquote>',
      },
      {
        title: '수사기관의 증거 수집 방법도 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">영장 없는 녹음이나 위법한 수사는 증거 능력이 배척될 수 있습니다</strong></p>\n<p>성매매 사건에서 수사기관은 현장 단속, 통신자료 조회, 계좌 추적 등을 통해 증거를 수집합니다. 대법원은 수사기관이 적법한 절차에 따라 범행현장에서 녹음한 경우 증거능력을 인정하되, <strong>일반적으로 허용되는 상당한 방법</strong>이었는지를 신중하게 판단해야 한다고 판시하고 있습니다.</p>\n<p>수사기관이 <strong>영장 없이</strong> 범행현장의 대화를 녹음한 경우라도, 현행범 상황에서 증거보전의 긴급성이 있고 상당한 방법으로 이루어졌다면 증거능력이 인정될 수 있습니다. 반면, 녹음 장소에 비정상적인 방법으로 출입했거나 사생활 보호 영역에서 녹음이 이루어졌다면 위법 수집 증거로 배척될 가능성이 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 수사기관의 증거 수집 절차의 적법성 → 위법하면 증거 배척 가능</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fdf7e4 0%,#fef9ed 100%);border-left:4px solid #d4a017;border-radius:8px">\n<p style="margin:0;font-weight:700;color:#b8860b">혐의를 받고 있다면, 내 상황에서 기소유예가 가능한지 확인해보세요</p>\n<p style="margin:4px 0 0;font-size:0.95em"><a href="/chat?domain=prostitution" style="color:#b8860b;text-decoration:underline">로앤가이드 AI 상담에서 예상 처분과 대응 방법을 정리해보세요 →</a></p>\n</div>',
      },
    ],
    cases: [
      {
        title: '대법원 2020도9370 사건(2024.05.30 선고) — 수사기관의 영장 없는 현장 녹음',
        summary:
          '이 사건에서 대법원은 수사기관이 적법한 절차에 따라 범죄를 수사하면서 현행범 상황에서 증거보전의 긴급성이 있고, 일반적으로 허용되는 상당한 방법으로 범행현장의 대화를 녹음한 경우, 영장 없이 이루어졌다는 이유만으로 위법하다고 단정할 수 없다고 판시했습니다.',
        takeaway:
          '수사기관이 현장에서 녹음한 증거가 있다면, 녹음이 적법한 방법으로 이루어졌는지 확인하세요. 비정상적 출입이나 사생활 영역 침해가 있었다면 증거 배척을 주장할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '성매매 초범이면 반드시 기소유예를 받을 수 있나요?',
        answer:
          '<strong>반드시는 아닙니다.</strong> 기소유예는 검사의 재량에 따른 처분입니다. 초범이라도 범행 경위, 반성 여부, 재범 위험 등을 종합적으로 고려하여 결정합니다. 반성문과 재범 방지 의지를 구체적으로 제출하면 기소유예 가능성이 높아집니다.',
      },
      {
        question: '성매매 벌금형을 받으면 취업에 영향이 있나요?',
        answer:
          '<strong>벌금형은 전과 기록에 남습니다.</strong> 다만 성매매 벌금형은 성범죄 전과와는 구별되며, 일반 기업 취업에서는 확인되지 않는 경우가 많습니다. 공무원, 교사 등 신원조회 대상 직종에서는 영향을 받을 수 있습니다.',
      },
      {
        question: '존스쿨(성매매 예방교육)은 어떻게 이수하나요?',
        answer:
          '<strong>검사가 교육조건부 기소유예를 결정하면 교육 일정을 통보받습니다.</strong> 한국여성인권진흥원 등에서 40시간의 교육을 이수해야 합니다. 교육을 이수하지 않으면 기소유예가 취소되어 정식 기소될 수 있습니다.',
      },
      {
        question: '채팅만 하고 실제로 만나지 않았는데도 처벌받나요?',
        answer:
          '<strong>채팅만으로는 성매매 기수가 성립하지 않습니다.</strong> 성매매처벌법은 실제 성매매 행위를 처벌 대상으로 합니다. 다만 성매매 약속(미수)이나 성매매 광고·알선에 해당할 수 있으므로, 구체적 사실관계를 확인하세요.',
      },
      {
        question: '변호사 없이 경찰 조사에 나가도 되나요?',
        answer:
          '<strong>변호사 없이 조사를 받을 수 있지만, 가능하면 법률 상담을 먼저 받으세요.</strong> 진술 내용에 따라 단순 성매매 외 추가 혐의(알선 방조 등)가 적용될 수 있습니다. 대한법률구조공단(132)에서 무료 상담이 가능합니다.',
      },
    ],
    cta: {
      text: '성매매 혐의를 받고 있다면, 내 상황에 맞는 대응 전략을 확인해보세요',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '성매매 적발 시 초기 대응법', href: '/guide/prostitution/prostitution-arrest-response' },
      { label: '성매매 혐의 어디부터 시작해야 하나', href: '/guide/prostitution/prostitution-where-to-start' },
      { label: '함정수사 대응 방법', href: '/guide/prostitution/prostitution-entrapment-response' },
      { label: '성범죄 혐의 형사 절차 안내', href: '/guide/prostitution/prostitution-arrest-criminal-process' },
    ],
  },
  {
    domain: 'sexual-harassment',
    slug: 'workplace-harassment-retaliation-protection',
    keyword: '직장 내 성희롱 신고 후 보복 방지 대처법',
    questionKeyword: '성희롱 신고 후 회사에서 불이익을 받고 있는데 어떻게 대처하나요?',
    ctaKeyword: '성희롱 보복 방지 대처법 확인',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '성희롱 신고 후 보복 당할 때 — 불이익 조치 대응 4단계 | 로앤가이드',
      description: '성희롱 신고했더니 부서 이동, 근무 평가 하락 등 불이익을 받고 있습니다. 보복 방지 법적 권리와 대응 방법을 지금 확인하세요.',
    },
    intro: '용기를 내서 성희롱을 신고했습니다. 그런데 그 후로 갑자기 부서가 바뀌었고, 업무가 줄어들었으며, 인사평가에서 최하 등급을 받았습니다. "신고하지 말 걸" 하는 후회가 드는 순간, 법이 보호해주는 권리가 있습니다.',
    sections: [
      {
        title: '남녀고용평등법이 보장하는 보복 금지 원칙',
        content:
          '<p><strong style="color:#1e3a5f">성희롱 피해 신고를 이유로 한 불이익 조치는 법으로 금지됩니다</strong></p>\n<p><strong>남녀고용평등과 일·가정 양립 지원에 관한 법률(남녀고용평등법) 제14조 제2항</strong>에 따라, 사업주는 직장 내 성희롱과 관련하여 피해를 입은 근로자 또는 성희롱 피해 발생을 주장하는 근로자에게 <strong>해고나 그 밖의 불리한 조치</strong>를 해서는 안 됩니다.</p>\n<p>불리한 조치에는 해고, 징계, 정직, 감봉, 부서 전환, 업무 배제, 근무 평가 하락, 승진 누락 등이 포함됩니다. 이를 위반한 사업주는 <strong>3년 이하의 징역 또는 3천만 원 이하의 벌금</strong>(남녀고용평등법 제37조 제2항)에 처합니다.</p>\n<p>중요한 점은 <strong>증명책임이 사업주에게 있다</strong>는 것입니다. 남녀고용평등법 제30조에 따라, 불리한 조치가 성희롱과 관련 없거나 정당한 사유가 있다는 점을 사업주가 증명해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 불이익 조치의 정당성 증명 → 사업주 책임 | 위반 시: 3년 이하 징역 / 3천만 원 이하 벌금</blockquote>',
      },
      {
        title: '보복으로 의심되는 조치가 있다면 즉시 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">시간 순서대로 불이익 사실을 기록하고 증거를 모으세요</strong></p>\n<p>보복 주장의 핵심은 <strong>시간적 근접성</strong>입니다. 성희롱 신고 시점과 불이익 조치 시점이 가까울수록 보복으로 인정될 가능성이 높습니다. 다음을 기록하세요.</p>\n<p><strong>인사 발령서, 업무 배정 변경 통보서</strong>: 서면으로 받지 못했다면 이메일이나 사내 메신저로 확인 요청하세요. <strong>근무 평가 기록</strong>: 이전 평가와 비교하여 급격한 하락이 있는지 확인하세요. <strong>동료 증언</strong>: 같은 부서 동료가 분위기 변화를 목격했다면 진술서를 받아두세요.</p>\n<p>대화 내용은 <strong>녹음</strong>이 가장 확실한 증거입니다. 본인이 당사자인 대화를 녹음하는 것은 합법입니다. "이번 인사 발령은 어떤 이유인가요?"라고 질문하고 답변을 녹음해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 인사발령서 + 이전/이후 근무평가 비교 + 대화 녹음 + 동료 진술서</blockquote>',
      },
      {
        title: '사내 구제 절차와 외부 신고 채널을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 진정과 국가인권위원회 진정을 동시에 진행할 수 있습니다</strong></p>\n<p><strong>사내 절차</strong>: 인사팀 또는 성희롱 고충처리 담당자에게 보복 행위를 서면으로 신고하세요. 회사는 남녀고용평등법 제14조에 따라 조사 의무가 있습니다. 조사 과정에서 조사참여자는 비밀 누설이 금지됩니다.</p>\n<p><strong>고용노동부 진정</strong>: 관할 지방고용노동청에 진정을 접수하세요(전화 1350). 남녀고용평등법 제14조 제2항 위반으로 신고하면, 근로감독관이 사업장을 조사합니다. 위반이 확인되면 시정 명령과 형사 고발이 가능합니다.</p>\n<p><strong>국가인권위원회 진정</strong>: 국가인권위원회에 성희롱 및 보복 행위에 대한 진정을 접수할 수 있습니다(전화 1331). 조사 후 시정 권고를 내릴 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 채널: 사내 고충처리 + 고용노동부(1350) + 국가인권위원회(1331)</blockquote>',
      },
      {
        title: '손해배상 청구로 피해를 회복하세요',
        content:
          '<p><strong style="color:#1e3a5f">보복으로 인한 정신적 고통에 대해 사업주에게 손해배상을 청구할 수 있습니다</strong></p>\n<p><strong>민법 제750조</strong>에 따라 성희롱 피해 신고를 이유로 한 불이익 조치는 불법행위에 해당하며, 사업주에게 손해배상을 청구할 수 있습니다. 정신적 손해(위자료)와 함께, 감봉·해고 등으로 인한 재산상 손해도 청구 대상입니다.</p>\n<p>대법원은 사업주가 성희롱 피해자를 도와준 동료 근로자에게 부당한 불이익을 준 경우에도, 그로 인해 피해자가 정신적 고통을 입었다면 사업주의 손해배상 책임을 인정하고 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">손해배상: 위자료 + 감봉·해고로 인한 재산상 손해 | 사업주가 증명 책임</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fdf7e4 0%,#fef9ed 100%);border-left:4px solid #d4a017;border-radius:8px">\n<p style="margin:0;font-weight:700;color:#b8860b">성희롱 신고 후 불이익을 받고 있다면, 법적 대응 방법을 확인해보세요</p>\n<p style="margin:4px 0 0;font-size:0.95em"><a href="/chat?domain=sexual-harassment" style="color:#b8860b;text-decoration:underline">로앤가이드 AI 상담에서 내 상황에 맞는 대응 전략을 정리해보세요 →</a></p>\n</div>',
      },
    ],
    cases: [
      {
        title: '대법원 2016다202947 사건(2017.12.22 선고) — 성희롱 피해자 보복에 대한 사업주 책임',
        summary:
          '이 사건에서 대법원은 사업주가 직장 내 성희롱 피해근로자에게 불리한 조치를 한 경우 남녀고용평등법 위반으로 불법행위가 성립한다고 판시했습니다. 또한 피해자를 도와준 동료 근로자에 대한 부당한 조치로 피해자가 정신적 고통을 입은 경우에도 사업주의 손해배상 책임을 인정했습니다.',
        takeaway:
          '성희롱 신고 후 불이익 조치가 있다면, 신고 시점과 불이익 시점의 시간적 근접성을 기록하세요. 동료에 대한 불이익도 보복의 증거가 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '부서 이동도 보복에 해당하나요?',
        answer:
          '<strong>성희롱 신고 직후의 부서 이동은 보복으로 볼 수 있습니다.</strong> 다만 가해자와 분리하기 위한 조치인지, 피해자에게 불리한 조치인지에 따라 판단이 달라집니다. 피해자의 의사에 반한 부서 이동은 불리한 조치에 해당할 수 있습니다.',
      },
      {
        question: '성희롱 조사 내용이 사내에 퍼졌는데 어떻게 하나요?',
        answer:
          '<strong>조사참여자의 비밀 누설은 위법합니다.</strong> 남녀고용평등법에 따라 조사 과정에서 알게 된 비밀을 피해자 의사에 반하여 누설하면 안 됩니다. 누설한 사람과 이를 방치한 사업주에게 손해배상을 청구할 수 있습니다.',
      },
      {
        question: '계약직인데도 보복 금지 규정이 적용되나요?',
        answer:
          '<strong>고용 형태와 관계없이 남녀고용평등법이 적용됩니다.</strong> 정규직, 계약직, 파견직 모두 보복 금지 규정의 보호를 받습니다. 계약 갱신 거부도 성희롱 신고와 시간적으로 근접하다면 보복에 해당할 수 있습니다.',
      },
      {
        question: '가해자가 오히려 명예훼손으로 고소하겠다고 합니다',
        answer:
          '<strong>진실한 사실에 기한 성희롱 신고는 명예훼손에 해당하지 않습니다.</strong> 사내 신고 절차를 통한 문제 제기는 정당한 권리 행사이며, 공익적 목적으로 인정됩니다. 가해자의 고소 위협에 위축되지 마세요.',
      },
      {
        question: '무료로 법률 상담을 받을 수 있는 곳이 있나요?',
        answer:
          '<strong>대한법률구조공단(132), 한국여성인권진흥원(02-735-2262), 여성긴급전화(1366)</strong>에서 무료 상담을 받을 수 있습니다. 성희롱 피해자에 대한 무료 법률 구조 제도도 운영되고 있습니다.',
      },
    ],
    cta: {
      text: '성희롱 신고 후 불이익을 받고 있다면, 내 상황에 맞는 대응법을 확인해보세요',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '직장 내 성희롱 최초 확인법', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '직장 내 성희롱 증거 수집과 신고', href: '/guide/sexual-harassment/workplace-harassment-evidence-report' },
      { label: '성희롱 신고 절차 안내', href: '/guide/sexual-harassment/workplace-harassment-report-procedure' },
      { label: '성희롱 어디부터 시작해야 하나', href: '/guide/sexual-harassment/workplace-harassment-where-to-start' },
    ],
  },
  {
    domain: 'sexual-harassment',
    slug: 'workplace-harassment-evidence-report',
    keyword: '직장 내 성희롱 피해 증거 수집과 신고 절차',
    questionKeyword: '직장 내 성희롱을 당했는데 증거를 어떻게 모으고 신고해야 하나요?',
    ctaKeyword: '성희롱 증거 수집 절차 확인',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '직장 내 성희롱 증거 수집 — 녹음·문자·목격자 확보 5단계 | 로앤가이드',
      description: '직장에서 성희롱을 당했는데 증거가 부족할까 걱정됩니다. 녹음, 문자, 목격자 확보부터 신고까지 5단계를 지금 확인하세요.',
    },
    intro: '상사의 부적절한 말과 행동이 반복되고 있습니다. 참아야 하나 싶다가도, "이건 아니다"라는 생각이 들었습니다. 하지만 증거가 없으면 신고해도 소용없을까 걱정됩니다. 성희롱 증거를 확보하고 신고하는 절차를 단계별로 정리했습니다.',
    timelineSteps: ['사실 기록', '증거 확보', '사내 신고', '외부 신고', '법적 구제'],
    sections: [
      {
        title: '1단계: 성희롱 사실을 시간·장소·내용별로 기록하세요',
        content:
          '<p><strong style="color:#1e3a5f">기록이 가장 강력한 증거의 시작입니다</strong></p>\n<p>성희롱이 발생할 때마다 <strong>일시, 장소, 구체적 행위 내용, 당시 감정, 주변에 있었던 사람</strong>을 메모하세요. 휴대폰 메모장에 날짜별로 기록하면 됩니다. 기록은 사건 직후에 작성할수록 증거력이 높습니다.</p>\n<p>"2026년 3월 15일 오후 3시, 회의실에서 김OO 팀장이 내 어깨를 만지며 \'오늘 예쁘다\'고 말했다. 옆에 박OO 대리가 있었다."처럼 <strong>육하원칙</strong>에 따라 구체적으로 기록하세요.</p>\n<p>일회성이 아닌 <strong>반복적·지속적 행위</strong>라면, 패턴을 보여주는 기록이 특히 중요합니다. 3회 이상 반복된 기록이 있으면 성희롱의 계속성을 입증하기 쉽습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기록 항목: 일시 + 장소 + 행위 내용 + 목격자 + 감정 → 사건 직후 작성</blockquote>',
      },
      {
        title: '2단계: 녹음, 문자, 메신저 등 객관적 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">본인이 당사자인 대화 녹음은 합법입니다</strong></p>\n<p><strong>대화 녹음</strong>: 성희롱 발언이 예상되는 상황에서 휴대폰 녹음 기능을 켜두세요. 통신비밀보호법상 본인이 참여한 대화의 녹음은 합법입니다. 타인 간의 대화를 몰래 녹음하는 것만 불법입니다.</p>\n<p><strong>문자·메신저 캡처</strong>: 카카오톡, 사내 메신저, 문자 등에서 성희롱 내용이 있다면 스크린샷을 저장하세요. 상대방이 삭제할 수 있으므로 <strong>즉시 캡처</strong>하고, 전송 일시가 보이도록 저장하세요.</p>\n<p><strong>CCTV 확인</strong>: 성희롱이 발생한 장소에 CCTV가 있다면, 영상 보존을 요청하세요. CCTV 영상은 보통 30일 내에 덮어쓰기되므로 빨리 요청해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 유형: 녹음(합법) + 메신저 캡처(즉시) + CCTV(30일 내 보존 요청)</blockquote>',
      },
      {
        title: '3단계: 목격자 확보와 사내 신고',
        content:
          '<p><strong style="color:#1e3a5f">목격자 진술은 핵심 보강 증거가 됩니다</strong></p>\n<p>성희롱 현장에 있었던 동료에게 <strong>목격 사실을 확인</strong>해두세요. "그날 회의실에서 팀장이 한 말 기억하세요?"라고 물어보고, 가능하면 진술서를 받아두세요. 목격자가 나중에 진술을 바꿀 수 있으므로, 문자나 메신저로 확인한 내용도 캡처해두세요.</p>\n<p>증거가 어느 정도 모이면 <strong>사내 성희롱 고충처리 담당자</strong>에게 신고하세요. 남녀고용평등법 제14조에 따라 사업주는 신고를 접수하면 <strong>지체 없이 조사를 실시</strong>해야 합니다. 신고 시에는 서면으로 접수하고, 접수 확인증을 받아두세요.</p>\n<p>조사 과정에서 <strong>조사참여자는 비밀 누설이 금지</strong>됩니다. 조사 내용이 유출되었다면 이 자체가 위법이며, 사업주에게 책임을 물을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 목격자 진술 확보 → 사내 서면 신고 → 접수 확인증 수령</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fdf7e4 0%,#fef9ed 100%);border-left:4px solid #d4a017;border-radius:8px">\n<p style="margin:0;font-weight:700;color:#b8860b">증거가 충분한지 확인하고 싶다면, AI 상담에서 점검해보세요</p>\n<p style="margin:4px 0 0;font-size:0.95em"><a href="/chat?domain=sexual-harassment" style="color:#b8860b;text-decoration:underline">로앤가이드 AI 상담에서 내 증거 상황을 정리해보세요 →</a></p>\n</div>',
      },
      {
        title: '4단계: 외부 신고와 법적 구제',
        content:
          '<p><strong style="color:#1e3a5f">사내 조치가 미흡하면 고용노동부와 국가인권위원회에 신고하세요</strong></p>\n<p>사내 조사가 제대로 이루어지지 않거나, 사업주가 적절한 조치를 취하지 않으면 <strong>고용노동부</strong>(전화 1350)에 진정을 접수하세요. 근로감독관이 사업장을 조사하여 시정명령을 내리고, 위반 시 형사 고발할 수 있습니다.</p>\n<p><strong>국가인권위원회</strong>(전화 1331)에도 동시에 진정할 수 있습니다. 인권위는 조사 후 시정 권고를 내리며, 권고가 이행되지 않으면 이를 공표할 수 있습니다.</p>\n<p>성희롱으로 인한 정신적 고통에 대해서는 <strong>민법 제750조</strong>에 따라 가해자와 사업주를 상대로 손해배상(위자료)을 청구할 수 있습니다. 대법원은 성희롱이 간접적 방법(소문 유포 등)으로 이루어진 경우에도 사업주의 사용자 책임을 인정하고 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">외부 채널: 고용노동부(1350) + 국가인권위원회(1331) + 민사 손해배상</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2021다219529 사건(2021.09.16 선고) — 간접적 성희롱과 사업주 책임',
        summary:
          '이 사건에서 대법원은 직장 동료들이 여성 근로자를 성적 대상으로 한 발언을 옮겨 전하고, 성적 소문을 유포하여 적대적 근로환경을 조성한 행위가 직장 내 성희롱에 해당한다고 판시했습니다. 피해자에게 직접 행해지지 않은 간접적 형태의 성적 정보 유포도 성희롱이 되며, 회사는 사용자 책임을 부담한다고 확인했습니다.',
        takeaway:
          '직접적 신체 접촉이 아닌 성적 발언, 소문 유포도 성희롱에 해당합니다. 이런 행위를 목격했거나 들었다면, 그 내용과 유포 경위를 기록하고 증거를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '증거가 녹음밖에 없어도 신고할 수 있나요?',
        answer:
          '<strong>녹음 하나만으로도 신고와 소송이 가능합니다.</strong> 본인이 참여한 대화의 녹음은 합법적인 증거이며, 법원에서도 증거로 인정됩니다. 녹음과 함께 사건 기록 메모를 보강하면 더욱 효과적입니다.',
      },
      {
        question: '성희롱 신고 시효가 있나요?',
        answer:
          '<strong>국가인권위원회 진정은 사건 발생일로부터 1년 이내에 해야 합니다.</strong> 민사 손해배상 청구는 피해 사실을 안 날로부터 3년, 불법행위일로부터 10년입니다. 고용노동부 진정은 별도의 시효 제한이 없지만, 빠를수록 유리합니다.',
      },
      {
        question: '상사가 "농담이었다"고 하면 성희롱이 안 되나요?',
        answer:
          '<strong>행위자의 의도가 아니라 피해자의 관점에서 판단합니다.</strong> 성희롱은 행위자에게 성적 동기나 의도가 없더라도, 객관적으로 합리적인 사람이 성적 굴욕감이나 혐오감을 느낄 수 있는 행위이면 성립합니다.',
      },
      {
        question: '퇴사 후에도 성희롱 신고가 가능한가요?',
        answer:
          '<strong>퇴사 후에도 신고와 손해배상 청구가 가능합니다.</strong> 재직 중에 발생한 성희롱에 대해서는 퇴사 후에도 고용노동부 진정, 국가인권위원회 진정, 민사 손해배상 청구를 할 수 있습니다.',
      },
    ],
    cta: {
      text: '성희롱 피해를 입었다면, 내 증거 상황과 신고 절차를 정리해보세요',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '직장 내 성희롱 최초 확인법', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '성희롱 신고 후 보복 방지 대처법', href: '/guide/sexual-harassment/workplace-harassment-retaliation-protection' },
      { label: '성희롱 신고 절차 안내', href: '/guide/sexual-harassment/workplace-harassment-report-procedure' },
      { label: '성희롱 어디부터 시작해야 하나', href: '/guide/sexual-harassment/workplace-harassment-where-to-start' },
    ],
  },
];
