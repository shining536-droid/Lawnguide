import { SpokePage } from '../spoke-pages';

export const rehabilitationPages: SpokePage[] = [
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-pre-check',
    keyword: '개인회생 신청 전 확인할 것 5가지',
    questionKeyword: '개인회생 신청 전에 뭘 확인해야 하나요?',
    ctaKeyword: '개인회생 준비사항',
    type: '체크리스트형',
    meta: {
      title: '개인회생 신청 전 반드시 확인할 5가지 체크리스트 | 로앤가이드',
      description:
        '빚 독촉에 지쳐 개인회생을 고민하고 계신가요? 신청자격, 채무한도 15억·10억 기준, 소득요건, 필수 서류, 변제계획까지 5가지 핵심 사항을 지금 확인하세요.',
    },
    intro:
      '카드 빚과 대출이 월급의 절반을 넘어갑니다. 이자만 갚다 보면 원금은 줄지 않고, 독촉 전화는 매일 옵니다. 개인회생을 해야 하는지 모르겠다면 신청 전에 아래 5가지를 먼저 확인해보세요.',
    timelineSteps: ['자격 확인', '서류 준비', '신청', '변제계획', '면책'],
    sections: [
      {
        title: '내가 개인회생을 신청할 수 있는지 먼저 확인해보세요',
        content:
          '<p><strong style="color:#1e3a5f">정기적인 소득이 있는지 먼저 확인해보세요</strong></p>\n<p>개인회생은 아무나 할 수 있는 게 아닙니다. 핵심 조건은 "정기적인 소득이 있는가"입니다.</p>\n<p>직장인은 물론이고, 아르바이트나 일용직도 지속적으로 일하고 있다면 대상이 될 수 있습니다. 자영업자도 영업소득이 있으면 가능합니다.</p>\n<p>반대로, 소득이 전혀 없거나 일시적인 수입만 있다면 개인회생이 아니라 <strong>개인파산</strong>을 검토해야 할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 최근 3~6개월 급여명세서, 통장 입금 내역</blockquote>',
      },
      {
        title: '빚이 얼마까지 있어야 신청할 수 있는지 살펴보세요',
        content:
          '<p><strong style="color:#1e3a5f">담보채무·무담보채무 한도를 확인하세요</strong></p>\n<p>개인회생에는 채무 한도가 있습니다. 담보채무(주택담보대출 등)는 <strong>15억 원</strong>, 무담보채무(카드빚, 신용대출 등)는 <strong>10억 원</strong> 이내여야 합니다. 이 한도를 넘으면 개인회생이 아닌 일반회생 절차를 검토해야 합니다. 채무를 정리할 때는 원금만 보면 안 됩니다 — 이자, 연체료, 보증채무까지 전부 포함해서 계산해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 신용정보원 채무조회 결과, 사채·개인 간 차용증 또는 이체내역</blockquote>',
      },
      {
        title: '매달 얼마를 갚아야 하는지 — 가용소득 계산해보기',
        content:
          '<p><strong style="color:#1e3a5f">월 소득에서 생계비를 빼면 변제금이 나옵니다</strong></p>\n<p>개인회생의 변제금은 "가용소득"을 기준으로 정해집니다. 가용소득은 월 소득에서 생계비(<strong>중위소득 60%</strong> 기준)를 뺀 금액입니다. 예를 들어 월 소득이 300만 원이고 1인 가구라면 생계비를 빼고 남은 금액이 매달 갚아야 할 변제금이 됩니다. 부양가족이 있으면 생계비가 올라가서 변제금이 줄어들 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 가족관계증명서, 주민등록등본(부양가족 수 증명용)</blockquote>',
      },
      {
        title: '서류 준비에 2~4주는 걸립니다 — 미리 챙겨보세요',
        content:
          '<p><strong style="color:#1e3a5f">서류 목록을 먼저 만들고 하나씩 발급받으세요</strong></p>\n<p>개인회생 신청서에는 <strong>채권자 목록</strong>, 재산 목록, 수입·지출 목록을 첨부해야 합니다. 구체적으로는 재직증명서, 급여명세서(최근 3개월), 소득금액증명원, 건강보험 자격득실확인서, 부동산등기부등본, 자동차등록원부, 통장거래내역(최근 1~2년) 등이 필요합니다. 하나하나 발급받다 보면 <strong>2~4주</strong>는 금방 지나갑니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 재직증명서, 급여명세서, 소득금액증명원, 건강보험 자격득실확인서, 통장거래내역</blockquote>',
      },
      {
        title: '변제계획안을 어떻게 짤 것인지 — 방향을 미리 잡아보세요',
        content:
          '<p><strong style="color:#1e3a5f">청산가치보장원칙을 이해하고 변제계획 방향을 잡으세요</strong></p>\n<p>개인회생이 인가되려면 <strong>변제계획안</strong>을 법원에 제출해야 합니다. 변제기간은 <strong>3년~5년</strong>(36~60개월) 사이이고, 매달 납부할 금액과 방법을 구체적으로 적어야 합니다. 여기서 중요한 원칙이 하나 있습니다 — "청산가치보장원칙"입니다. 쉽게 말해 "개인회생으로 갚는 금액이 파산했을 때 채권자들이 받을 금액보다는 많아야 한다"는 것입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 부동산·차량·보험해약환급금 등 재산 현재 가치 조회</blockquote>',
      },
    ],
    cases: [
      {
        title: '채권자 목록에 빚을 빠뜨려서 문제가 된 사례',
        summary:
          '실제로 개인회생 신청 시 일부 채무를 채권자 목록에서 누락한 채무자가 있었습니다. 이 사건에서는 "목록에 기재되지 않은 채권에 대해 면책이 되는지"가 다퉈졌습니다(대법원 2004다7235).',
        takeaway:
          '비슷한 상황이라면 신청 전에 모든 채무를 빠짐없이 조회하고, 사채나 보증채무까지 포함해서 채권자 목록을 정확하게 정리해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '빚이 얼마 이상이면 개인회생 신청할 수 있나요?',
        answer:
          '최소 금액 기준은 없습니다. 핵심은 "현재 소득으로 채무를 갚기 어려운 상태인지"입니다. 담보채무 <strong>15억 원</strong>, 무담보채무 10억 원 이내라면 신청 가능합니다.',
      },
      {
        question: '아르바이트만 해도 개인회생이 되나요?',
        answer:
          '지속적으로 일하고 있다면 가능합니다. 일용직, 파트타임, 비정규직도 <strong>소득 증빙</strong>이 되면 대상이 됩니다. 최근 수개월간 소득 자료를 정리해보세요.',
      },
      {
        question: '개인회생 신청하면 독촉 전화가 바로 멈추나요?',
        answer:
          '법원이 <strong>개시결정</strong>을 내리면 금지명령에 의해 추심행위가 중단됩니다. 다만 신청 즉시가 아니라 개시결정 시점부터이므로, 발령 시점을 확인해보세요.',
      },
      {
        question: '개인회생 비용은 얼마 정도 드나요?',
        answer:
          '법원 수수료와 송달료 등이 발생하고, 대리인을 선임하면 별도 비용이 추가됩니다. <strong>법률구조공단</strong>에서 소득 기준에 따라 무료 지원을 받을 수 있으니 확인해보세요.',
      },
      {
        question: '카드빚도 개인회생에 포함되나요?',
        answer:
          '카드빚, 신용대출, 사채, 보증채무 등 <strong>모든 채무</strong>가 포함됩니다. 일부만 골라서 넣는 건 안 되고 전부 다 포함해야 합니다.',
      },
      {
        question: '집이나 차가 있어도 신청 가능한가요?',
        answer:
          '가능합니다. 개인회생은 재산을 유지하면서 진행할 수 있습니다. 다만 재산 가치만큼은 변제해야 하는 <strong>"청산가치보장원칙"</strong>이 적용됩니다.',
      },
      {
        question: '신청하기 전에 재산을 처분하면 안 되나요?',
        answer:
          '재산을 숨기거나 부당하게 처분하면 <strong>기각 사유</strong>가 됩니다. 처분이 필요한 경우 사유와 대가의 적정성을 기록으로 남겨두세요.',
      },
      {
        question: '개인회생 하면 직장에서 알게 되나요?',
        answer:
          '법원이 직장에 직접 통보하지는 않습니다. 다만 급여에서 변제금을 납부하는 과정에서 알게 될 가능성이 있으므로 구체적인 상황을 확인해보세요.',
      },
    ],
    cta: {
      text: '내 채무 상황에 맞는 다음 단계를 정리해보세요',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인회생 진단', href: '/diagnosis/rehabilitation' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
      { label: '이혼 가이드', href: '/guide/divorce' },
      {
        label: '개인회생이랑 개인파산, 뭐가 다른가요?',
        href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy',
      },
    ],
  },
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-vs-bankruptcy',
    keyword: '개인회생 vs 개인파산 뭐가 다른가',
    questionKeyword: '개인회생이랑 개인파산, 뭐가 다른가요?',
    ctaKeyword: '채무정리 준비사항',
    type: '비교형',
    meta: {
      title: '개인회생 vs 개인파산 4가지 핵심 차이 비교 | 로앤가이드',
      description:
        '개인회생과 개인파산, 어떤 게 내 상황에 맞을까요? 신청자격, 변제기간, 재산처분, 면책 기준 4가지 핵심 차이를 비교해 바로 정리해보세요.',
    },
    intro:
      '빚을 정리하고 싶은데 개인회생인지 개인파산인지 모르겠습니다. 월급으로는 이자도 못 갚고, "파산하면 다 없어진다"는 말에 헷갈립니다. 두 절차의 핵심 차이를 먼저 정리해보세요.',
    sections: [
      {
        title: '소득이 있다면 개인회생, 없다면 개인파산 — 가장 큰 차이',
        content:
          '<p><strong style="color:#1e3a5f">소득 유무가 두 절차를 가르는 핵심 기준입니다</strong></p>\n<p>개인회생은 "앞으로 돈을 벌 수 있는 사람"이 <strong>3~5년간</strong> 일부를 갚고 나머지를 면제받는 절차입니다.</p>\n<p>개인파산은 "더 이상 돈을 갚을 능력이 없는 사람"이 법원에 지급불능을 선고받고 면책을 받는 절차입니다. 둘 다 채무자 회생 및 파산에 관한 법률에 근거합니다.</p>\n<p>소득이 있으면 개인회생, 소득이 전혀 없거나 극히 적다면 파산을 검토하게 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 현재 소득 상태 확인(급여명세서 또는 소득금액증명원)</blockquote>',
      },
      {
        title: '빚이 얼마나 있나요 — 채무 한도도 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 채무 한도가 있고, 개인파산은 없습니다</strong></p>\n<p>개인회생은 담보채무 <strong>15억 원</strong>, 무담보채무 <strong>10억 원</strong> 이내여야 합니다. 이 한도를 넘으면 개인회생이 아닌 일반회생을 검토해야 합니다. 반면 개인파산은 채무 금액에 상한이 없습니다. 빚이 얼마든 지급불능 상태라면 신청이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 총 채무액 정리(원금, 이자, 연체료, 보증채무 합산)</blockquote>',
      },
      {
        title: '내 재산은 어떻게 되나요 — 재산 유지 vs 재산 처분',
        content:
          '<p><strong style="color:#1e3a5f">재산을 지키려면 개인회생, 재산이 거의 없다면 파산을 검토하세요</strong></p>\n<p>개인회생에서는 원칙적으로 재산을 유지할 수 있습니다. 집도, 차도, 보험도 그대로 가지고 있으면서 변제금을 납부합니다. 다만 <strong>"청산가치보장원칙"</strong>에 따라 변제금 총액이 파산했을 때 채권자들이 받을 금액보다는 많아야 합니다. 반면 개인파산에서는 파산관재인이 채무자의 재산을 처분해서 채권자들에게 나눠줍니다. 생활필수품 같은 자유재산은 보전되지만, 부동산이나 차량은 처분될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 보유 재산 목록 정리(부동산, 차량, 보험해약환급금 등)</blockquote>',
      },
      {
        title: '면책 조건이 다릅니다 — 도박이나 낭비가 원인이라면',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 채무 원인을 덜 따지고, 파산은 면책불허가 사유가 있습니다</strong></p>\n<p>개인회생은 변제계획을 성실히 이행하면 나머지 채무가 면책됩니다. 채무 발생 원인이 도박이든 사치든 크게 문제되지 않습니다 — 중요한 건 "앞으로 성실히 갚겠다"는 것입니다. 반면 개인파산은 면책 심사가 별도로 진행되며, 도박이나 낭비가 채무 원인이면 <strong>면책불허가 사유</strong>가 될 수 있습니다. 신용회복 기간도 차이가 있습니다 — 개인회생은 변제 완료 후 비교적 빠르게 회복되지만, 파산은 면책 확정 후에도 일정 기간 기록이 남습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 채무 발생 원인 정리(생활비, 사업 실패, 도박 등)</blockquote>',
      },
    ],
    comparison: {
      title: '개인회생 vs 개인파산 비교표',
      headers: ['구분', '개인회생', '개인파산'],
      rows: [
        {
          label: '신청자격',
          values: [
            '정기적 소득이 있는 개인(급여·영업소득자)',
            '지급불능 상태의 개인(소득 유무 무관)',
          ],
        },
        {
          label: '채무한도',
          values: [
            '담보 15억 원, 무담보 10억 원 이내',
            '제한 없음',
          ],
        },
        {
          label: '변제기간',
          values: [
            '3~5년간 분할 상환',
            '없음(파산 선고 후 면책 심리)',
          ],
        },
        {
          label: '재산처분',
          values: [
            '재산 유지 가능(청산가치보장원칙 적용)',
            '파산관재인이 재산 처분·배당(자유재산 제외)',
          ],
        },
        {
          label: '면책효과',
          values: [
            '변제 이행 완료 시 잔여 채무 면책',
            '면책결정 확정 시 면책(불허가 사유 심사)',
          ],
        },
        {
          label: '신용회복',
          values: [
            '변제 완료 후 비교적 빠른 회복',
            '면책 후에도 일정 기간 파산 기록 유지',
          ],
        },
      ],
    },
    cases: [
      {
        title: '면책 후에도 빠뜨린 빚이 문제가 된 사례',
        summary:
          '실제로 파산 면책을 받았지만, 신청할 때 일부 채권자를 목록에서 빠뜨린 경우가 있었습니다. 이 사건에서는 "고의로 누락한 채권에 대해서는 면책 효력이 미치지 않는다"는 점이 다퉈졌습니다(대법원 2009다14000).',
        takeaway:
          '비슷한 상황이라면 개인회생이든 파산이든 모든 채무를 빠짐없이 목록에 적어두는 것이 좋습니다.',
      },
      {
        title: '면책의 범위가 어디까지인지 다퉈진 사례',
        summary:
          '실제로 변제계획에 따라 갚은 금액을 제외한 나머지 채무의 면책 범위가 문제가 된 경우가 있었습니다. 이 사건에서는 "면책은 배당을 제외한 잔여 채무에 대해 책임을 면하게 하는 것"이라는 점이 확인되었습니다(대법원 2004다7235).',
        takeaway:
          '비슷한 상황이라면 면책 대상에서 제외되는 채무(세금, 벌금 등)를 따로 정리해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '소득이 불안정해도 개인회생이 되나요?',
        answer:
          '소득이 불규칙하더라도 계속 일하고 있다면 <strong>영업소득자</strong>로 분류되어 가능할 수 있습니다. 최근 6개월~1년간 소득자료를 정리해서 평균을 내보세요.',
      },
      {
        question: '파산하면 정말 모든 재산을 잃나요?',
        answer:
          '생활필수품, 직업에 필요한 도구 등 <strong>자유재산</strong>은 보전됩니다. 다만 부동산, 차량, 고가 보험 해약환급금은 처분 대상이 될 수 있습니다.',
      },
      {
        question: '개인회생 하다가 못 갚으면 파산으로 바꿀 수 있나요?',
        answer:
          '변제가 어려워지면 법원에 <strong>폐지 신청</strong> 후 별도로 파산을 신청할 수 있습니다. 전환 절차를 미리 확인해두세요.',
      },
      {
        question: '도박 빚도 개인회생으로 정리할 수 있나요?',
        answer:
          '개인회생은 채무 원인을 크게 따지지 않습니다. 변제계획을 성실히 이행하면 면책이 가능합니다. 다만 파산은 도박이 <strong>면책불허가 사유</strong>가 될 수 있습니다.',
      },
      {
        question: '세금 체납도 면책되나요?',
        answer:
          '<strong>조세채권</strong>은 개인회생과 파산 모두에서 면책 대상이 아닙니다. 국세, 지방세, 건강보험료 등은 별도 납부 계획을 세워야 합니다.',
      },
      {
        question: '기간은 얼마나 걸리나요?',
        answer:
          '개인회생은 신청~인가까지 <strong>3~6개월</strong>, 이후 변제기간 3~5년입니다. 파산은 신청~면책까지 6개월~1년 정도가 일반적입니다.',
      },
      {
        question: '배우자 빚도 함께 정리할 수 있나요?',
        answer:
          '두 절차 모두 <strong>개인 단위</strong>로 진행됩니다. 배우자가 별도로 신청해야 하며, 부부 공동 채무가 있다면 각자의 범위를 구분해서 정리해보세요.',
      },
      {
        question: '개인회생 끝나면 대출을 다시 받을 수 있나요?',
        answer:
          '면책결정 후 신용정보 등록이 해제되면 금융기관 자체 심사에 따라 가능합니다. <strong>면책결정문</strong>을 보관해두면 신용회복 시 도움이 됩니다.',
      },
    ],
    cta: {
      text: '내 채무 상황에 맞는 다음 단계를 정리해보세요',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인회생 진단', href: '/diagnosis/rehabilitation' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
      { label: '이혼 가이드', href: '/guide/divorce' },
      {
        label: '개인회생 신청 전에 뭘 확인해야 하나요?',
        href: '/guide/rehabilitation/rehabilitation-pre-check',
      },
    ],
  },
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-payment-calculation',
    keyword: '개인회생 변제금 계산 기준',
    questionKeyword: '개인회생 변제금은 어떻게 계산되나요?',
    ctaKeyword: '개인회생 변제금 준비사항',
    type: '수치/기한형',
    meta: {
      title: '개인회생 변제금 계산 기준과 월 납부액 산정법 | 로앤가이드',
      description:
        '매달 얼마를 갚아야 할지 궁금하신가요? 가용소득, 중위소득 60% 생계비, 청산가치보장원칙까지 변제금 계산 기준을 지금 확인하세요.',
    },
    intro:
      '개인회생 신청 시 가장 궁금한 건 "매달 얼마를 갚아야 하나요?"입니다. 월급 280만 원에 아이가 있는데 변제금이 100만 원이 넘으면 생활이 안 됩니다. 아래 기준을 먼저 확인해보세요.',
    sections: [
      {
        title: '변제금의 출발점 — 가용소득 계산해보기',
        content:
          '<p><strong style="color:#1e3a5f">월 소득에서 생계비를 빼면 가용소득이 됩니다</strong></p>\n<p>변제금은 "가용소득"에서 출발합니다. 가용소득 = 월 소득 - 생계비입니다.</p>\n<p>생계비는 <strong>통계청</strong>이 발표하는 중위소득의 60%를 기준으로 하며, 가구원 수에 따라 달라집니다. 예를 들어 월 소득 300만 원인 2인 가구라면, 생계비를 빼고 남는 금액이 가용소득이 됩니다.</p>\n<p>부양가족이 많으면 생계비가 올라가서 변제금이 줄어들 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 급여명세서, 가족관계증명서(부양가족 수 기준 계산)</blockquote>',
      },
      {
        title: '내 차와 보험이 있으면 변제금이 올라가나요 — 청산가치보장원칙',
        content:
          '<p><strong style="color:#1e3a5f">보유 재산의 시가를 미리 확인해두세요</strong></p>\n<p>변제금을 정할 때 하나 더 확인해야 할 것이 있습니다 — <strong>"청산가치보장원칙"</strong>입니다. 쉽게 말해 "파산했을 때 채권자들이 받을 금액보다는 많이 갚아야 한다"는 원칙입니다. 부동산, 차량, 보험해약환급금, 예금, 퇴직금 예상액 등 본인 재산의 현재 가치를 합산한 것이 청산가치입니다. 가용소득 기준 변제금 총액과 청산가치 중 더 큰 금액이 최종 변제금 총액이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 차량 시세 조회, 보험해약환급금 조회, 부동산 시가 확인</blockquote>',
      },
      {
        title: '3년? 5년? — 변제기간에 따라 월 변제금이 달라집니다',
        content:
          '<p><strong style="color:#1e3a5f">소득 유형에 따라 변제기간이 다릅니다</strong></p>\n<p>변제기간은 최소 <strong>3년(36개월)</strong>에서 최대 <strong>5년(60개월)</strong>입니다. 급여소득자는 보통 5년, 영업소득자는 3년이 적용됩니다. 같은 변제금 총액이라도 기간이 길면 월 납부금이 줄어듭니다. 예를 들어 변제금 총액이 3,600만 원이면 36개월이면 월 100만 원, 60개월이면 월 60만 원이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 본인 소득 유형 확인(급여소득자 vs 영업소득자)</blockquote>',
      },
      {
        title: '생계비 외에 추가로 인정받을 수 있는 비용이 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">추가 공제 항목을 확인해서 변제금을 낮추세요</strong></p>\n<p>기본 생계비 외에도 추가 공제를 받을 수 있는 항목이 있습니다. <strong>주거비</strong> 추가 공제, 의무교육 과정 자녀의 교육비, 만성질환 치료를 위한 의료비 등이 해당됩니다. 다만 법원이 소명자료를 검토해서 인정 여부를 결정하므로, 증빙서류를 미리 준비해두는 것이 좋습니다. 추가 비용이 인정되면 가용소득이 줄어들어 변제금이 낮아질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 임대차계약서, 의료비 영수증, 재학증명서</blockquote>',
      },
      {
        title: '인가 후에는 꼭 지켜야 합니다 — 변제금 납부 관리',
        content:
          '<p><strong style="color:#1e3a5f">2회 이상 미납하면 폐지될 수 있으니 납부 일정을 관리하세요</strong></p>\n<p>법원의 인가결정이 나면 매달 정해진 변제금을 납부해야 합니다. <strong>2회 이상</strong> 지체하면 폐지 사유가 될 수 있으니 납부 일정을 꼼꼼히 관리해야 합니다. 실직이나 질병 등 불가피한 사유가 생기면 법원에 변제계획 변경 신청을 할 수 있습니다. 변제기간을 성실히 이행하면 잔여 채무에 대한 면책결정을 받게 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 월별 납부 계획표 작성, 자동이체 설정</blockquote>',
      },
    ],
    cases: [
      {
        title: '변제금 산정이 적정했는지 다퉈진 사례',
        summary:
          '실제로 변제계획에 따라 갚은 금액과 면책의 범위가 문제가 된 경우가 있었습니다. 이 사건에서는 "변제금 총액이 법적 기준(가용소득, 청산가치)을 충족해야 면책의 실효성이 확보된다"는 점이 확인되었습니다(대법원 2004다7235).',
        takeaway:
          '비슷한 상황이라면 가용소득과 청산가치를 정확하게 산출하고, 변제계획안이 기준을 충족하는지 미리 확인해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '변제금을 줄일 수 있는 방법이 있나요?',
        answer:
          '부양가족 수가 많으면 생계비가 올라가서 변제금이 줄어들 수 있습니다. <strong>주거비, 의료비, 교육비</strong> 등 추가 공제 항목도 확인해보세요.',
      },
      {
        question: '내 차나 보험이 있으면 변제금이 올라가나요?',
        answer:
          '<strong>청산가치보장원칙</strong>에 따라 재산 가치만큼은 변제해야 합니다. 차량 시가와 보험해약환급금을 미리 조회해두세요.',
      },
      {
        question: '생계비는 매년 바뀌나요?',
        answer:
          '<strong>중위소득</strong> 기준은 매년 변경됩니다. 신청 시점의 최신 기준을 적용받게 되니, 신청 전에 올해 기준을 확인해보세요.',
      },
      {
        question: '월급이 오르면 변제금도 올라가나요?',
        answer:
          '인가된 변제계획의 금액이 확정이므로 소득 증가만으로 자동 인상되지는 않습니다. 다만 법원이나 <strong>채권자</strong>가 변경을 신청할 수 있는 경우가 있습니다.',
      },
      {
        question: '변제금을 한꺼번에 내면 빨리 끝낼 수 있나요?',
        answer:
          '변제금 총액을 조기 납부하면 <strong>조기 면책 신청</strong>이 가능한 경우가 있습니다. 구체적인 절차는 법원에 확인해보세요.',
      },
      {
        question: '변제금을 못 내면 어떻게 되나요?',
        answer:
          '<strong>2회 이상</strong> 지체하면 폐지 사유가 됩니다. 실직이나 질병 등 불가피한 사유가 있으면 변제계획 변경을 신청할 수 있으니, 미납 전에 먼저 법원에 문의해보세요.',
      },
      {
        question: '퇴직금도 변제금 계산에 들어가나요?',
        answer:
          '퇴직금 중간정산 예상액이 <strong>청산가치</strong>에 포함될 수 있습니다. 재직 기간과 평균 임금을 기준으로 예상액을 산출해보세요.',
      },
      {
        question: '급여소득자와 영업소득자는 변제기간이 왜 다른가요?',
        answer:
          '급여소득자는 소득이 안정적이라 <strong>5년</strong>, 영업소득자는 변동이 커서 3년이 기본입니다. 본인의 소득 유형을 먼저 확인해보세요.',
      },
    ],
    cta: {
      text: '내 채무 상황에 맞는 다음 단계를 정리해보세요',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인회생 진단', href: '/diagnosis/rehabilitation' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
      { label: '이혼 가이드', href: '/guide/divorce' },
      {
        label: '개인회생이랑 개인파산, 뭐가 다른가요?',
        href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy',
      },
    ],
  },
  {
    domain: 'rehabilitation',
    slug: 'personal-rehabilitation-eligibility',
    keyword: '개인회생 신청 자격 조건과 변제 기간',
    questionKeyword: '개인회생 신청 자격과 변제 기간이 궁금합니다',
    ctaKeyword: '개인회생 자격',
    type: '수치기한형',
    meta: {
      title: '개인회생 신청 자격 조건과 변제 기간 총정리 | 로앤가이드',
      description:
        '내가 개인회생 대상이 될 수 있을까요? 채무 한도, 소득 요건, 변제 기간 3~5년, 면책 절차, 신청 비용까지 한눈에 바로 정리해보세요.',
    },
    intro:
      '매달 카드값과 대출 이자만 갚다 보니 원금은 줄지 않습니다. 독촉 전화가 하루에도 몇 번씩 오고, 이대로는 평생 빚을 못 갚을 것 같습니다. 개인회생을 신청하면 빚을 줄일 수 있다고 들었는데, 내가 자격이 되는지부터 확인해보세요.',
    timelineSteps: ['자격 요건 확인', '채무 한도·소득 확인', '변제 기간 파악', '면책까지 절차'],
    sections: [
      {
        title: '개인회생 신청 자격 — 정기적인 소득이 핵심입니다',
        content:
          '<p><strong style="color:#1e3a5f">정기적인 소득이 있어야 개인회생을 신청할 수 있습니다</strong></p>\n<p><strong>채무자 회생 및 파산에 관한 법률</strong>에 따라 개인회생은 "장래 계속적으로 또는 반복하여 수입을 얻을 가능성이 있는" 개인이 신청할 수 있습니다. 직장인은 물론이고 <strong>아르바이트</strong>, <strong>일용직</strong>, <strong>자영업자</strong>도 지속적으로 소득이 있으면 대상이 됩니다.</p>\n<p>소득 유형에 따라 <strong>급여소득자</strong>와 <strong>영업소득자</strong>로 나뉩니다. 급여소득자는 급여, 연금 등 정기적 수입을 받는 사람이고, 영업소득자는 자영업 등 영업활동으로 수입을 얻는 사람입니다. 소득이 전혀 없다면 개인회생이 아닌 <strong>개인파산</strong>을 검토해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">자격: 정기적 소득 필수 | 급여소득자·영업소득자 모두 가능 | 무소득 → 파산 검토</blockquote>',
      },
      {
        title: '채무 한도 — 담보 15억원, 무담보 10억원 이내여야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">채무 금액에 상한이 있으므로 총 채무액을 먼저 확인하세요</strong></p>\n<p>개인회생을 신청하려면 채무 총액이 일정 한도 이내여야 합니다. <strong>담보채무</strong>(주택담보대출 등)는 <strong>15억원 이내</strong>, <strong>무담보채무</strong>(카드빚, 신용대출, 사채 등)는 <strong>10억원 이내</strong>여야 합니다.</p>\n<p>채무를 계산할 때는 원금뿐만 아니라 <strong>이자, 연체료, 보증채무</strong>까지 전부 포함해야 합니다. <strong>신용정보원</strong>에서 채무 조회를 하면 금융기관 채무를 일괄 확인할 수 있습니다. 사채나 개인 간 차용증은 별도로 정리하세요. 이 한도를 초과하면 <strong>일반회생</strong> 절차를 검토해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">한도: 담보 15억원, 무담보 10억원 | 이자·연체료·보증채무 합산 | 초과 시 일반회생</blockquote>',
      },
      {
        title: '변제 기간 — 급여소득자 5년, 영업소득자 3년이 기본입니다',
        content:
          '<p><strong style="color:#1e3a5f">소득 유형에 따라 변제 기간이 달라집니다</strong></p>\n<p>개인회생이 인가되면 법원이 정한 <strong>변제계획</strong>에 따라 매달 일정 금액을 납부해야 합니다. 변제 기간은 <strong>급여소득자</strong>의 경우 <strong>5년(60개월)</strong>, <strong>영업소득자</strong>의 경우 <strong>3년(36개월)</strong>이 기본입니다.</p>\n<p>매달 납부하는 <strong>변제금</strong>은 월 소득에서 생계비(<strong>중위소득 60%</strong> 기준)를 뺀 <strong>가용소득</strong>으로 정해집니다. 부양가족이 많으면 생계비가 올라가서 변제금이 줄어들 수 있습니다. 또한 <strong>청산가치보장원칙</strong>에 따라 변제금 총액이 파산 시 채권자가 받을 금액보다 많아야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변제 기간: 급여 5년, 영업 3년 | 변제금 = 소득 - 생계비(중위소득 60%)</blockquote>',
      },
      {
        title: '면책까지의 절차와 비용을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">신청부터 면책까지 전체 흐름을 파악해두세요</strong></p>\n<p>전체 절차는 ①<strong>서류 준비</strong>(2~4주) → ②<strong>법원 신청</strong> → ③<strong>개시결정</strong>(신청 후 1~3개월) → ④<strong>변제계획안 인가</strong> → ⑤<strong>변제금 납부</strong>(3~5년) → ⑥<strong>면책결정</strong> 순서입니다.</p>\n<p>법원 개시결정이 나면 <strong>금지명령</strong>에 의해 채권자의 추심행위가 중단됩니다. 신청 비용은 법원 수수료·송달료가 발생하며, 대리인을 선임하면 별도 비용이 추가됩니다. <strong>대한법률구조공단</strong>에서 소득 기준에 따라 무료 대리를 지원받을 수 있습니다. 변제 기간을 성실히 이행하면 잔여 채무가 <strong>전액 면책</strong>됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 서류 준비 → 신청 → 개시결정(추심 중단) → 인가 → 변제 이행 → 면책</blockquote>',
      },
    ],
    cases: [
      {
        title: '아르바이트 소득으로 개인회생이 인가된 사례',
        summary:
          '관련 사례에서도 정규직이 아닌 아르바이트로 월 150만원 정도의 소득을 꾸준히 올리고 있던 채무자가 개인회생을 신청하여, 법원이 "장래 계속적 수입 가능성"을 인정하고 변제계획을 인가한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 정규직이 아니더라도 지속적인 소득이 있으면 개인회생 신청이 가능하니 최근 수개월 소득 자료를 정리하세요.',
      },
      {
        title: '변제 기간 중 실직했으나 변제계획 변경으로 유지한 사례',
        summary:
          '관련 사례에서도 변제 기간 도중 실직하여 변제금을 납부하지 못하게 된 채무자가 법원에 변제계획 변경 신청을 하여, 재취업 후 변제금을 조정받고 개인회생 절차를 계속 유지한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 변제금 납부가 어려워지면 폐지되기 전에 법원에 변제계획 변경을 먼저 신청하세요.',
      },
    ],
    faq: [
      {
        question: '소득이 불안정해도 개인회생이 가능한가요?',
        answer:
          '소득이 불규칙하더라도 <strong>계속 일하고 있다면</strong> 영업소득자로 분류되어 가능할 수 있습니다. 최근 6개월~1년간 소득 자료를 정리해보세요.',
      },
      {
        question: '개인회생과 개인파산의 차이는 무엇인가요?',
        answer:
          '개인회생은 <strong>소득이 있는 사람</strong>이 3~5년간 일부를 갚는 것이고, 파산은 지급불능 상태에서 면책을 받는 것입니다.',
      },
      {
        question: '개인회생 신청하면 독촉 전화가 멈추나요?',
        answer:
          '법원의 <strong>개시결정</strong>이 나면 금지명령에 의해 추심행위가 중단됩니다. 신청 즉시가 아니라 개시결정 시점부터입니다.',
      },
      {
        question: '카드빚, 사채도 모두 포함되나요?',
        answer:
          '<strong>모든 채무</strong>가 포함됩니다. 카드빚, 신용대출, 사채, 보증채무 등 일부만 골라서 넣을 수 없고 전부 포함해야 합니다.',
      },
      {
        question: '집이나 차가 있어도 신청 가능한가요?',
        answer:
          '가능합니다. 개인회생은 재산을 유지하면서 진행할 수 있습니다. 다만 <strong>청산가치보장원칙</strong>에 따라 재산 가치만큼은 변제해야 합니다.',
      },
      {
        question: '세금 체납도 면책되나요?',
        answer:
          '<strong>조세채권</strong>은 면책 대상이 아닙니다. 국세, 지방세, 건강보험료 등은 별도로 납부 계획을 세워야 합니다.',
      },
      {
        question: '변제금을 2회 이상 미납하면 어떻게 되나요?',
        answer:
          '<strong>2회 이상</strong> 지체하면 폐지 사유가 됩니다. 납부가 어려우면 미납 전에 법원에 변제계획 변경을 신청하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)에서 소득 기준에 따라 무료 상담과 대리를 지원받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 채무 상황에 맞는 개인회생 자격을 확인해보세요',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인회생 진단', href: '/diagnosis/rehabilitation' },
      { label: '개인회생 신청 전 확인할 것 5가지', href: '/guide/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 vs 개인파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '개인회생 변제금 계산 기준', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
    ],
  },
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-rejection-reasons-prevention',
    keyword: '개인회생 기각 사유와 방지 방법',
    questionKeyword: '개인회생이 기각되는 이유는 무엇이고 어떻게 방지하나요?',
    ctaKeyword: '개인회생 기각 방지',
    type: '실수함정형',
    meta: {
      title: '개인회생 기각되는 5가지 사유와 방지 방법 | 로앤가이드',
      description:
        '개인회생이 기각될까 불안하신가요? 소득 부족, 채무한도 초과, 서류 미비, 허위기재 등 주요 기각 사유와 방지법을 지금 확인하세요.',
    },
    intro:
      '개인회생을 신청했는데 기각 통지를 받았습니다. 서류도 다 냈고 변제계획도 세웠는데 왜 기각된 건지 모르겠습니다. 개인회생은 신청만 하면 되는 게 아닙니다. 법원이 기각하는 대표적인 사유와 사전에 방지하는 방법을 정리했습니다.',
    sections: [
      {
        title: '소득 부족 또는 소득 불안정 — 가장 흔한 기각 사유입니다',
        content:
          '<p><strong style="color:#1e3a5f">정기적이고 안정적인 소득이 없으면 개인회생은 기각됩니다</strong></p>\n<p>채무자 회생 및 파산에 관한 법률 제595조에 따르면, 개인회생은 "장래 계속적으로 또는 반복하여 수입을 얻을 가능성이 있는 자"만 신청할 수 있습니다. 직장인뿐 아니라 일용직, 프리랜서, 자영업자도 <strong>3~6개월간 꾸준한 소득 이력</strong>을 증명하면 인정받을 수 있습니다. 하지만 소득이 아예 없거나 단기간의 일시적 수입만 있으면 기각 사유가 됩니다.</p>\n<p>소득이 불안정하다면 신청 전 최소 3개월간 꾸준히 일한 기록을 만들어야 합니다. 통장 입금 내역, 근로계약서, 사업소득 신고 자료, 종합소득세 신고 내역 등이 소득 증빙으로 활용됩니다. 급여가 현금으로 지급되었다면 고용주의 확인서나 동료의 진술서라도 확보해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방지법: 신청 전 최소 3~6개월간 소득 이력 확보. 통장 내역·근로계약서·소득신고서·종합소득세 신고 내역 준비</blockquote>',
      },
      {
        title: '채무한도 초과 — 담보·무담보 한도를 넘기면 자격이 없습니다',
        content:
          '<p><strong style="color:#1e3a5f">무담보채무 10억 원, 담보채무 15억 원을 초과하면 개인회생을 신청할 수 없습니다</strong></p>\n<p>채무자 회생 및 파산에 관한 법률 제596조는 개인회생의 채무 한도를 정하고 있습니다. 무담보채무(카드빚, 신용대출 등)는 <strong>10억 원</strong>, 담보채무(주택담보대출 등)는 <strong>15억 원</strong> 이하여야 합니다. 이 한도를 넘으면 개인회생이 아닌 일반회생을 검토해야 합니다.</p>\n<p>주의할 점은 채무 계산 시 <strong>원금뿐 아니라 이자, 연체료, 보증채무</strong>까지 모두 포함된다는 것입니다. 신용정보원에서 채무 전체를 조회하고, 사채나 개인 간 빌린 돈도 빠짐없이 합산하세요. 한도 초과 여부를 모르고 신청하면 그대로 기각됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방지법: 신용정보원 채무조회로 전체 채무액 정확히 파악. 이자·연체료·보증채무 포함 계산</blockquote>',
      },
      {
        title: '서류 미비·허위기재 — 법원이 가장 엄격하게 보는 부분입니다',
        content:
          '<p><strong style="color:#1e3a5f">서류 누락이나 허위기재는 기각은 물론 면책 불허가 사유가 됩니다</strong></p>\n<p>개인회생 신청 시 제출해야 할 서류는 <strong>채권자 목록, 재산 목록, 수입·지출 목록, 변제계획안</strong> 등 다양합니다. 서류 하나라도 빠지면 법원이 보정명령을 내리고, 보정기간(보통 7~14일) 내에 보완하지 못하면 그대로 기각됩니다. 특히 채권자 목록에서 <strong>일부 채권자를 고의로 빠뜨리거나</strong> 재산(보험 해약환급금, 전세보증금, 자동차 등)을 숨기면 허위기재로 간주됩니다.</p>\n<p>허위기재가 발각되면 단순 기각에 그치지 않습니다. 나중에 면책 결정 단계에서 <strong>면책 불허가</strong> 사유(법 제624조 제2항 제3호)가 되어, 3~5년간 성실히 변제를 마쳐도 남은 채무가 면제되지 않는 최악의 결과가 발생합니다. 신용정보원 채무조회를 통해 빠진 채무가 없는지 반드시 확인하고, 재산은 소액이라도 있는 그대로 정직하게 기재하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방지법: 채권자·재산 목록 빠짐없이 작성. 사채·개인 간 차용금·보증채무도 모두 기재. 보정명령 기한 내 반드시 보완</blockquote>',
      },
      {
        title: '변제계획의 문제 — 실현 불가능한 계획은 인가받지 못합니다',
        content:
          '<p><strong style="color:#1e3a5f">변제 가능한 금액보다 높게 잡거나, 최저변제액에 미달하면 기각됩니다</strong></p>\n<p>변제계획은 <strong>가용소득</strong>(수입에서 최저 생계비를 뺀 금액)을 기준으로 작성합니다. 가용소득보다 높은 변제금을 설정하면 "이행 불가능"으로 기각됩니다. 반대로, 변제금이 <strong>청산가치</strong>(채무자의 재산을 처분했을 때 채권자가 받을 금액)에 미달해도 기각됩니다(청산가치 보장 원칙).</p>\n<p>변제 기간은 원칙적으로 <strong>3년(36개월)</strong>이며, 최장 5년까지 가능합니다. 변제계획안은 법원에 제출 전에 반드시 가용소득을 정확히 계산하고, 청산가치 보장 여부를 확인하세요. 법률구조공단이나 전문 변호사의 도움을 받으면 정확한 계획을 세울 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방지법: 가용소득 정확히 계산, 청산가치 이상으로 변제금 설정. 전문가 검토 권장</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2013마1052 — 소득 불안정으로 인한 개인회생 기각 사례',
        summary:
          '채무자가 일용직 근로자로 월 소득이 불규칙했고, 최근 2개월간 소득이 없던 상태에서 개인회생을 신청했습니다. 법원은 "계속적·반복적 수입을 얻을 가능성"이 소명되지 않았다며 기각했습니다.',
        takeaway:
          '비슷한 상황이라면 신청 전 최소 3~6개월간 꾸준히 소득을 발생시키고, 통장 입금 기록 등 소득 증빙을 확보한 뒤 신청하세요.',
      },
      {
        title: '대법원 2014마553 — 재산 은닉으로 면책 불허가된 사례',
        summary:
          '채무자가 본인 명의의 보험 해약환급금을 재산 목록에 기재하지 않은 사실이 발각되었습니다. 법원은 이를 허위기재로 판단하여 면책 불허가 결정을 내렸습니다.',
        takeaway:
          '비슷한 상황이라면 보험, 예금, 자동차, 전세보증금 등 모든 재산을 빠짐없이 기재하세요. 소액이라도 누락하면 허위기재로 간주될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '개인회생이 기각되면 다시 신청할 수 있나요?',
        answer:
          '네, 기각 사유를 보완하면 <strong>재신청이 가능합니다</strong>. 횟수 제한은 없지만 동일한 문제가 해결되지 않으면 다시 기각될 수 있으므로 기각 결정문의 사유를 먼저 정확히 파악하세요.',
      },
      {
        question: '기각 사유는 어떻게 확인하나요?',
        answer:
          '법원에서 보내는 <strong>기각 결정문</strong>에 사유가 명시되어 있습니다. 결정문을 받으면 즉시 내용을 확인하고 전문가와 상담하세요.',
      },
      {
        question: '소득이 적으면 무조건 기각되나요?',
        answer:
          '소득이 적더라도 <strong>최저 생계비를 초과하는 가용소득</strong>이 있으면 신청 가능합니다. 가용소득이 월 몇만 원이라도 변제가 가능하면 인정됩니다. 최저 생계비 기준은 가구원 수에 따라 달라지므로 본인의 가구 상황에 맞춰 확인하세요.',
      },
      {
        question: '사채도 채권자 목록에 넣어야 하나요?',
        answer:
          '반드시 넣어야 합니다. <strong>사채, 개인 간 차용금, 보증채무</strong> 등 빠뜨리면 허위기재로 간주되어 기각 또는 면책 불허가 사유가 됩니다.',
      },
      {
        question: '변제계획은 직접 작성해도 되나요?',
        answer:
          '법적으로 직접 작성할 수 있지만, <strong>가용소득 계산과 청산가치 산정</strong>이 복잡하므로 법률구조공단이나 전문 변호사의 도움을 받는 것이 안전합니다.',
      },
      {
        question: '개인회생 기각과 폐지는 다른 건가요?',
        answer:
          '<strong>기각</strong>은 신청 단계에서 거부되는 것이고, <strong>폐지</strong>는 인가 후 변제 중 취소되는 것입니다. 기각은 절차 시작 전, 폐지는 절차 진행 중에 발생합니다.',
      },
      {
        question: '보정명령을 받으면 어떻게 하나요?',
        answer:
          '법원이 정한 <strong>보정기간(보통 7~14일) 내에 부족한 서류나 정보를 보완</strong>해서 제출해야 합니다. 기간 내에 보정하지 않으면 자동으로 기각되므로, 보정명령을 받으면 즉시 누락된 서류를 확인하고 보완하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)에서 소득 기준에 따라 무료 상담과 대리를 지원받을 수 있습니다. 법원 내 개인회생 상담 창구도 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상황이 개인회생 기각 사유에 해당하는지 확인해보세요',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      { label: '개인회생 신청 전 확인할 것 5가지', href: '/guide/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 vs 개인파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '개인회생 진단', href: '/diagnosis/rehabilitation' },
    ],
  },
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-application-procedure-atoz',
    keyword: '개인회생 신청 절차 A to Z',
    questionKeyword: '개인회생 신청 절차는 처음부터 끝까지 어떻게 되나요?',
    ctaKeyword: '개인회생 신청 절차 무료 진단받기',
    type: '절차타임라인형',
    meta: {
      title: '개인회생 신청 절차 6단계 완벽 가이드 | 로앤가이드',
      description:
        '개인회생 어디서부터 시작해야 할지 모르겠다면? 자격 확인부터 변제계획 인가, 면책 결정까지 전체 6단계 절차를 바로 정리해보세요.',
    },
    intro:
      '매달 월급의 70%가 대출 이자와 카드값으로 빠져나갑니다. 최저생계비에도 못 미치는 금액으로 한 달을 버텨야 하는 상황이 2년째 이어지고 있습니다. 개인회생이라는 제도가 있다는 걸 알았지만, 어디서부터 시작해야 할지, 어떤 서류가 필요한지, 인가까지 얼마나 걸리는지 모르겠습니다. 이 글에서는 개인회생 신청 자격 확인부터 변제계획 인가, 최종 면책까지 전체 과정을 A부터 Z까지 순서대로 안내합니다.',
    timelineSteps: ['자격 확인·서류 준비', '법원 신청·개시 결정', '변제계획안 제출·인가', '변제 이행·면책 결정'],
    sections: [
      {
        title: '1단계: 신청 자격 확인과 서류 준비',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제579조에 따라 정기적 소득이 있고 채무 한도 내에 해당하면 개인회생을 신청할 수 있습니다.</strong></p>\n<p>개인회생 신청의 핵심 요건은 두 가지입니다. 첫째, 정기적이고 확실한 수입이 있어야 합니다. 직장인뿐 아니라 아르바이트, 일용직, 자영업자도 지속적 소득이 있으면 해당됩니다. 둘째, 무담보채무 10억원, 담보채무 15억원 이내여야 합니다.</p>\n<p>준비 서류는 다음과 같습니다. ①개인회생 신청서, ②채권자 목록(한국신용정보원 채무조회 결과 포함), ③재산 목록(부동산·예금·보험 해약환급금·자동차 등), ④수입·지출 내역서(최근 6개월 급여명세서·통장 거래내역), ⑤가족관계증명서, ⑥주민등록등본입니다. 채무 누락 시 해당 채권은 면책에서 제외될 수 있으므로, 사채와 보증채무까지 빠짐없이 기재하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">자격: 정기적 소득 + 무담보 10억·담보 15억 이내 / 서류: 채권자 목록·재산 목록·수입지출 내역서 등</blockquote>',
      },
      {
        title: '2단계: 법원 신청과 개시 결정',
        content:
          '<p><strong style="color:#1e3a5f">관할 법원에 신청서를 제출하면, 법원이 요건을 심사하여 개인회생 개시 결정을 내립니다.</strong></p>\n<p>신청은 채무자 주소지를 관할하는 지방법원에 합니다. 신청 비용은 인지대 약 3만원, 송달료 약 5~10만원 수준입니다. 접수 후 법원은 서류를 검토하고, 미비 사항이 있으면 보정명령을 내립니다. 보정 기한(통상 14일)을 넘기면 신청이 각하될 수 있으니 주의하세요.</p>\n<p>요건이 충족되면 법원은 개인회생 개시 결정을 내리고, 이때부터 채권자의 강제집행(급여 압류, 재산 압류 등)이 중지됩니다. 개시 결정과 함께 법원은 채권자에게 채권 신고를 하라고 통지하고, 채무자에게는 변제계획안 제출 기한을 정해줍니다. 신청부터 개시 결정까지 통상 2~4주가 소요됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법원 신청 → 보정명령 대응 → 개시 결정(2~4주) → 강제집행 중지 + 채권자 채권 신고</blockquote>',
      },
      {
        title: '3단계: 변제계획안 제출과 인가 결정',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제600조에 따라 변제계획안이 법률 요건을 충족하면 법원이 인가 결정을 내립니다.</strong></p>\n<p>변제계획안은 향후 3년(최대 5년) 동안 매월 얼마를 갚겠다는 계획서입니다. 핵심 원칙은 두 가지입니다. ①변제액은 가용소득(소득 - 최저생계비)의 전부여야 하고, ②변제 총액이 청산가치(파산 시 채권자가 받을 수 있는 금액) 이상이어야 합니다(청산가치 보장 원칙).</p>\n<p>법원은 변제계획안의 적정성을 심사합니다. 수입을 낮추거나 지출을 과다 계상하면 보정 요구를 받거나 불인가될 수 있습니다. 채권자 의견 청취 절차를 거쳐 법원이 인가 결정을 내리면, 변제계획에 따른 변제가 시작됩니다. 개시 결정부터 인가까지 통상 2~4개월이 소요됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변제계획안: 3~5년간 가용소득 전액 변제 / 청산가치 보장 원칙 / 인가까지 2~4개월</blockquote>',
      },
      {
        title: '4단계: 변제 이행과 면책 결정',
        content:
          '<p><strong style="color:#1e3a5f">변제계획에 따라 3~5년간 성실히 변제하면, 나머지 채무에 대해 면책 결정이 내려집니다.</strong></p>\n<p>인가 결정 후 매월 정해진 금액을 법원이 지정한 회생위원에게 납부합니다. 회생위원은 이를 채권자들에게 비율에 따라 배분합니다. 변제 기간 중 소득이 크게 줄거나 질병 등 불가피한 사유가 있으면 법원에 변제계획 변경을 신청할 수 있습니다.</p>\n<p>변제를 2회 이상 연체하면 폐지(취소)될 수 있으므로 주의가 필요합니다. 변제계획을 모두 이행하면 법원이 면책 결정을 내리고, 나머지 채무는 전액 면제됩니다. 전체 절차(신청~면책)는 약 3년 6개월~5년 6개월이 소요됩니다. 면책 후에는 신용정보원에 면책 사실을 등록하여 신용 회복을 시작하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변제 이행(3~5년) → 면책 결정(잔여 채무 면제) / 2회 이상 연체 시 폐지 주의 / 면책 후 신용 회복</blockquote>',
      },
    ],
    cases: [
      {
        title: '월급 200만원으로 5,000만원 채무 중 30%만 변제하고 면책받은 사례',
        summary:
          '관련 사례에서도 월급 200만원인 직장인 K씨가 카드빚과 신용대출 합계 5,000만원에 대해 개인회생을 신청하고, 3년간 매월 약 42만원씩 총 1,500만원(30%)을 변제한 뒤 나머지 3,500만원에 대해 면책 결정을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 소득이 적더라도 변제계획을 성실히 이행하면 채무의 상당 부분을 면제받을 수 있으므로, 개인회생 신청을 적극 검토하세요.',
      },
      {
        title: '변제 중 실직으로 변제계획 변경을 인정받은 사례',
        summary:
          '관련 사례에서도 개인회생 변제 진행 중 회사가 폐업하여 실직한 L씨가 법원에 변제계획 변경을 신청하고, 재취업 후 변제 기간을 연장하여 변제계획을 완료하고 면책 결정을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 변제 중 소득 변동이 생기면 즉시 법원에 변제계획 변경을 신청하고, 연체가 누적되기 전에 대응하세요.',
      },
    ],
    faq: [
      {
        question: '개인회생 신청 후 급여 압류가 바로 풀리나요?',
        answer:
          '<strong>개시 결정</strong>이 내려지면 강제집행이 중지됩니다. 신청만으로는 자동 중지되지 않으므로, 급한 경우 법원에 <strong>포괄적 금지명령</strong>을 별도 신청하면 개시 결정 전에도 압류를 중지할 수 있습니다.',
      },
      {
        question: '변제 기간은 무조건 3년인가요?',
        answer:
          '원칙적으로 <strong>3년(36개월)</strong>이지만, 변제액이 부족하면 법원이 최대 <strong>5년(60개월)</strong>까지 연장할 수 있습니다. 채무 규모와 가용소득에 따라 달라집니다.',
      },
      {
        question: '개인회생 중 새로운 빚을 질 수 있나요?',
        answer:
          '변제계획 이행 중 <strong>새로운 채무를 지는 것은 원칙적으로 금지</strong>됩니다. 불가피한 경우 법원의 허가를 받아야 하며, 무단으로 채무를 지면 폐지 사유가 될 수 있습니다.',
      },
      {
        question: '자영업자도 개인회생을 신청할 수 있나요?',
        answer:
          '네. 자영업자도 <strong>영업소득이 정기적</strong>이면 개인회생 대상입니다. 매출이 일정하지 않더라도 최근 6개월 평균 소득을 기준으로 판단합니다.',
      },
      {
        question: '변제를 한 번 연체하면 바로 폐지되나요?',
        answer:
          '1회 연체로 바로 폐지되지는 않습니다. 다만 <strong>2회 이상 연체</strong>하면 폐지 사유가 되며, 법원이 직권으로 폐지 결정을 내릴 수 있습니다. 연체가 예상되면 사전에 변제계획 변경을 신청하세요.',
      },
      {
        question: '개인회생과 개인파산 중 어떤 것을 선택해야 하나요?',
        answer:
          '정기적 소득이 있으면 <strong>개인회생</strong>(일부 변제 후 면책), 소득이 없으면 <strong>개인파산</strong>(전액 면책)이 적합합니다. 개인회생은 재산을 유지할 수 있다는 장점이 있습니다.',
      },
      {
        question: '개인회생 신청 비용은 얼마인가요?',
        answer:
          '법원 납부 비용은 인지대·송달료 합계 약 <strong>10~15만원</strong> 수준입니다. 법률구조공단에서 소득 기준 충족 시 무료 법률대리를 받을 수 있으며, 변호사·법무사 비용은 100~300만원이 일반적입니다.',
      },
      {
        question: '면책 후 신용은 어떻게 회복하나요?',
        answer:
          '면책 확정 후 <strong>한국신용정보원</strong>에 면책 사실을 등록하면 신용정보가 갱신됩니다. 이후 체크카드 사용, 소액 할부 성실 상환 등을 통해 <strong>5~7년</strong>에 걸쳐 점진적으로 회복됩니다.',
      },
    ],
    cta: { text: '개인회생 신청 절차, 지금 무료로 진단받아 보세요', link: '/diagnosis/rehabilitation' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인회생 진단', href: '/diagnosis/rehabilitation' },
      { label: '개인회생 신청 전 확인할 것 5가지', href: '/guide/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 vs 개인파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
    ],
  },
];
