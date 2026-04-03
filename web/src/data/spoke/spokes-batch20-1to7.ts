import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [개인파산 신청 전 재산을 처분한 채무자]의 [면책 불허 위험을 모르는 상황]에서 [재산 처분의 법적 위험과 면책 불허 사유 확인]을 돕는 페이지다.
// 2. 이 페이지는 [빚이 감당할 수 없을 정도로 많은 채무자]의 [어디부터 시작해야 할지 모르는 상황]에서 [채무 정리 첫 단계와 행동 순서 안내]를 돕는 페이지다.
// 3. 이 페이지는 [개인파산 신청을 고려하는 채무자]의 [자신이 요건에 해당하는지 모르는 상황]에서 [자가진단 체크리스트로 신청 가능성 사전 확인]을 돕는 페이지다.
// 4. 이 페이지는 [개인파산 신청서를 직접 작성하려는 채무자]의 [양식 구성과 작성법을 모르는 상황]에서 [신청서 양식 항목별 작성 가이드 제공]을 돕는 페이지다.
// 5. 이 페이지는 [부동산 이중매매 피해를 당한 매수인]의 [자신의 권리를 어떻게 보호해야 하는지 모르는 상황]에서 [법적 보호 방법과 대응 전략 안내]를 돕는 페이지다.
// 6. 이 페이지는 [매매계약 체결 후 소유권 이전등기를 진행해야 하는 매수인]의 [등기 절차와 필요 서류를 모르는 상황]에서 [단계별 이전등기 절차와 서류 안내]를 돕는 페이지다.
// 7. 이 페이지는 [부동산 매매 계약을 앞둔 매수인]의 [등기부등본 확인 방법을 모르는 상황]에서 [등기부등본 핵심 확인 항목 체크리스트 제공]을 돕는 페이지다.

export const spokesBatch20_1to7: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. bankruptcy / disposing-assets-before-filing-denial
  // ───────────────────────────────────────────
  {
    domain: 'bankruptcy',
    slug: 'disposing-assets-before-filing-denial',
    keyword: '개인파산 신청 전 재산 처분하면 면책 불허',
    questionKeyword: '개인파산 신청 전에 재산을 처분하면 면책이 안 되나요?',
    ctaKeyword: '파산 재산 처분 면책 불허',
    type: '실수함정형',
    perspective: '채무자',
    meta: {
      title: '파산 전 재산 처분 면책 불허 3가지 사유 | 로앤가이드',
      description: '개인파산 신청 전에 재산을 처분하면 면책이 안 될 수 있다는 사실이 걱정된다면 면책 불허 사유 3가지를 지금 확인하세요.',
    },
    intro:
      '<p>파산 신청을 앞두고 남은 재산이라도 가족에게 넘겨두려는 생각이 들 수 있습니다. "어차피 빚을 못 갚으니 내 이름에서 빼놓자"는 판단이지만, 이 행동이 면책 불허의 결정적 사유가 될 수 있습니다. 법원은 파산 신청 전 재산 은닉·처분 행위를 매우 엄격하게 심사합니다. 실수 하나로 면책 기회를 영영 잃을 수 있으니 반드시 확인하세요.</p>',
    sections: [
      {
        title: '파산 전 재산 처분이 면책 불허로 이어지는 3가지 사유',
        content:
          '<p><strong style="color:#1e3a5f">채무자 회생 및 파산에 관한 법률 제564조는 채무자가 재산을 은닉·손괴·허위 처분한 경우 면책을 불허할 수 있다고 규정하고 있습니다</strong></p>\n<p>면책 불허 사유는 크게 3가지로 나뉩니다.</p>\n<ul>\n<li><strong>재산 은닉</strong> — 부동산이나 예금을 타인 명의로 옮기는 행위. 배우자·부모·자녀 명의 이전도 모두 해당됩니다</li>\n<li><strong>재산 손괴</strong> — 의도적으로 재산 가치를 떨어뜨리는 행위. 시세보다 현저히 낮은 가격에 매각하는 것도 포함됩니다</li>\n<li><strong>허위 채무 부담</strong> — 실제로 존재하지 않는 빚을 만들어 채무 총액을 부풀리는 행위</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 재산 은닉·손괴·허위 채무 → 면책 불허 사유</blockquote>',
      },
      {
        title: '법원은 어떻게 재산 처분 사실을 알아내나요?',
        content:
          '<p><strong style="color:#1e3a5f">파산관재인은 채무자의 최근 2~5년간 금융거래 내역, 부동산 등기이전 기록, 자동차 명의변경 이력을 전수 조사합니다</strong></p>\n<p>법원에서 선임한 파산관재인은 다음 자료를 확인합니다.</p>\n<ul>\n<li><strong>금융거래 조회</strong> — 전 금융기관 입출금 내역을 조회해 대규모 인출·이체를 추적합니다</li>\n<li><strong>부동산 등기 이력</strong> — 신청일 기준 최근 수년간의 소유권 이전 기록을 확인합니다</li>\n<li><strong>자동차·보험 조회</strong> — 차량 명의변경, 보험 해지환급금 수령 내역도 조사 대상입니다</li>\n<li><strong>가족 재산 조사</strong> — 배우자와 직계가족의 재산 변동도 확인할 수 있습니다</li>\n</ul>\n<p>"소액이니 괜찮겠지"라는 판단은 위험합니다. 50만 원짜리 보험 해지환급금 인출도 문제가 될 수 있습니다. <strong>파산 신청 전 재산 관련 행위는 반드시 전문가 상담 후 결정</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조사 범위: 금융거래 전수 + 부동산 등기 + 보험·차량 + 가족 재산 변동</blockquote>',
      },
      {
        title: '이미 처분했다면 지금 할 수 있는 3가지',
        content:
          '<p><strong style="color:#1e3a5f">이미 재산을 처분한 경우에도 자진 신고와 원상회복을 통해 면책 가능성을 높일 수 있습니다</strong></p>\n<ul>\n<li><strong>자진 신고</strong> — 파산 신청서에 재산 처분 사실을 솔직하게 기재하세요. 숨기다 발각되면 면책 불허가 거의 확정됩니다</li>\n<li><strong>원상회복</strong> — 가능하다면 처분한 재산을 되돌리세요. 가족 명의로 이전한 부동산은 다시 본인 명의로 환원하는 것이 좋습니다</li>\n<li><strong>사유서 제출</strong> — 생활비로 부득이하게 사용한 경우 구체적인 사용 내역과 영수증을 첨부한 사유서를 제출하면 법원이 참작할 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/bankruptcy" style="color:#1565c0;font-weight:600">파산 면책 가능성 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '면책 불허가 확정되면 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">면책이 불허되면 파산 선고는 유지되지만 채무는 그대로 남아 채권자의 추심이 다시 시작됩니다</strong></p>\n<p>면책 불허의 결과는 심각합니다.</p>\n<ul>\n<li><strong>채무 존속</strong> — 파산 절차를 거쳤지만 빚은 사라지지 않습니다. 채권자들의 추심이 재개됩니다</li>\n<li><strong>재신청 제한</strong> — 면책 불허 사유가 있으면 향후 재신청 시에도 불리하게 작용합니다</li>\n<li><strong>사기파산죄</strong> — 악의적 재산 은닉이 인정되면 채무자 회생 및 파산에 관한 법률 제650조에 따라 5년 이하의 징역 또는 5천만 원 이하의 벌금에 처해질 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면책 불허 결과: 채무 존속 + 재신청 불리 + 사기파산죄 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '파산 신청 전 부동산 처분 — 면책 불허 결정',
        summary:
          '대법원 2021다265010 사건(2022.03.17 선고)에서 법원은 채무자가 파산 신청 직전 소유 부동산을 배우자에게 시가 이하로 매도한 행위에 대해, 채권자를 해하는 재산 감소 행위에 해당하여 면책을 불허한다고 판시했습니다.',
        takeaway:
          '파산 신청 전 가족에게 재산을 넘기는 행위는 금액과 관계없이 면책 불허 사유가 됩니다. 재산 관련 행위는 반드시 전문가 상담 후 진행하세요.',
      },
    ],
    faq: [
      {
        question: '파산 신청 몇 개월 전부터 재산 처분이 문제가 되나요?',
        answer:
          '명확한 기간 기준은 없지만, 실무상 <strong>신청일 기준 1~2년 이내의 재산 변동</strong>이 집중 조사 대상입니다. 다만 금액이 크면 5년 전 거래도 문제될 수 있습니다.',
      },
      {
        question: '생활비로 쓴 것도 재산 처분에 해당하나요?',
        answer:
          '<strong>통상적인 생활비 지출은 문제되지 않습니다.</strong> 다만 월 소득 대비 과도한 지출이나 고가 물품 구입은 소명 대상이 될 수 있으니 영수증을 보관하세요.',
      },
      {
        question: '자동차를 싸게 판 것도 면책 불허 사유인가요?',
        answer:
          '시가보다 현저히 낮은 가격에 처분했다면 <strong>재산 손괴에 해당할 수 있습니다</strong>. 특히 가족이나 지인에게 헐값에 넘긴 경우 의심을 받기 쉽습니다.',
      },
      {
        question: '보험 해지환급금을 받아 쓴 것도 문제되나요?',
        answer:
          '보험 해지환급금도 재산에 포함됩니다. <strong>파산 신청 직전 보험을 해지해서 사용한 경우</strong> 사용처와 금액에 따라 면책 불허 사유로 볼 수 있습니다.',
      },
      {
        question: '면책 불허되면 다시 파산 신청할 수 있나요?',
        answer:
          '법률상 재신청은 가능하지만, <strong>이전 면책 불허 사유가 해소되지 않으면 같은 결과</strong>가 반복됩니다. 원상회복 등 사유 해소 후 재신청하는 것이 현실적입니다.',
      },
    ],
    cta: {
      text: '파산 면책 불허 위험 무료 진단받기',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '개인파산 가이드', href: '/guide/bankruptcy' },
      { label: '파산 신청부터 면책까지 전체 절차', href: '/spoke/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 후 신용회복 타임라인', href: '/spoke/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '파산 vs 회생 비교', href: '/spoke/bankruptcy/bankruptcy-vs-rehabilitation-comparison' },
      { label: '개인파산 면책 후 달라지는 것', href: '/spoke/bankruptcy/bankruptcy-after-discharge-life-changes' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. bankruptcy / too-much-debt-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'bankruptcy',
    slug: 'too-much-debt-where-to-start',
    keyword: '빚이 너무 많은데 어디부터 시작해야 하나',
    questionKeyword: '빚이 너무 많은데 어디부터 정리해야 하나요?',
    ctaKeyword: '과다 채무 정리 시작',
    type: '어디부터형',
    perspective: '채무자',
    meta: {
      title: '빚 너무 많을 때 정리 시작 5단계 | 로앤가이드',
      description: '빚이 감당할 수 없을 만큼 많아졌는데 어디부터 해야 할지 모르겠다면 채무 정리 첫 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>독촉 전화가 하루에도 수십 통씩 울립니다. 대출, 카드, 지인에게 빌린 돈까지 합치면 도대체 얼마인지조차 정확히 모릅니다. 아무것도 안 하면 이자는 매일 불어나고, 압류 통보가 올 수도 있습니다. 지금 당장 정리를 시작하는 것이 손해를 줄이는 유일한 방법입니다.</p>',
    sections: [
      {
        title: '1단계 — 내 빚이 정확히 얼마인지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">채무 정리의 첫걸음은 총 채무액을 정확히 파악하는 것입니다. 신용정보원 "올크레딧"에서 무료 조회가 가능합니다</strong></p>\n<p>많은 분이 빚의 총액을 정확히 모릅니다. 대출 원금, 미납 이자, 연체 가산금까지 합산해야 정확한 수치가 나옵니다.</p>\n<ul>\n<li><strong>신용정보 조회</strong> — 한국신용정보원(www.credit4u.or.kr)에서 본인의 전체 채무 내역을 무료로 확인하세요</li>\n<li><strong>채무 목록 작성</strong> — 채권자명, 원금, 이자율, 연체 기간, 담보 유무를 엑셀이나 메모장에 정리하세요</li>\n<li><strong>사채·지인 빚 포함</strong> — 제도권 금융뿐 아니라 사채업체, 지인에게 빌린 돈도 반드시 포함하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 단계: 신용정보원에서 전체 채무 조회 → 채무 목록 작성</blockquote>',
      },
      {
        title: '2단계 — 내 상황에 맞는 채무 정리 방법을 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">채무 규모와 소득 수준에 따라 채무조정, 개인회생, 개인파산 중 적합한 방법이 다릅니다</strong></p>\n<ul>\n<li><strong>채무조정(워크아웃)</strong> — 총 채무 5억 원 이하, 3개월 이상 연체 시 신용회복위원회에 신청. 이자 감면·상환 기간 연장이 가능합니다</li>\n<li><strong>개인회생</strong> — 담보채무 15억 원·무담보채무 10억 원 이하이고 정기적 소득이 있을 때. 3~5년간 변제 후 잔여 채무가 면제됩니다</li>\n<li><strong>개인파산·면책</strong> — 소득이 거의 없거나 채무가 변제 능력을 완전히 초과할 때. 면책 결정 시 채무 전액이 소멸됩니다</li>\n</ul>\n<p>채무자 회생 및 파산에 관한 법률에 따라 각 제도의 요건이 다르므로, <strong>자신의 소득·채무 비율을 먼저 확인</strong>한 후 선택하세요.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/bankruptcy" style="color:#1565c0;font-weight:600">내 상황에 맞는 채무 정리 방법 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 당장 추심을 멈추는 방법을 실행하세요',
        content:
          '<p><strong style="color:#1e3a5f">채권추심법에 따라 채무자는 부당한 추심에 대해 중지를 요청할 수 있으며, 법원 신청 시 추심이 즉시 중단됩니다</strong></p>\n<ul>\n<li><strong>채무조정 신청 즉시</strong> — 신용회복위원회에 채무조정을 신청하면 접수일부터 채권추심이 중지됩니다</li>\n<li><strong>개인회생·파산 신청 시</strong> — 법원에 금지명령 신청을 하면 채권자의 강제집행·추심이 중단됩니다</li>\n<li><strong>부당추심 신고</strong> — 야간(21시~08시) 전화, 제3자 연락, 폭언 등은 채권추심법 위반으로 금융감독원(1332)에 신고할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추심 중단: 채무조정 신청 → 법원 금지명령 → 부당추심 신고(1332)</blockquote>',
      },
      {
        title: '4단계 — 무료 상담 기관을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">채무 정리 과정에서 전문가 도움이 필수입니다. 무료로 이용할 수 있는 기관이 여러 곳 있습니다</strong></p>\n<ul>\n<li><strong>신용회복위원회</strong> — 전화 1600-5500, 채무조정 상담 및 신청</li>\n<li><strong>대한법률구조공단</strong> — 전화 132, 파산·회생 무료 법률 상담</li>\n<li><strong>서민금융진흥원</strong> — 전화 1397, 서민금융 상품 안내 및 채무 상담</li>\n<li><strong>법원 개인파산·회생 접수처</strong> — 관할 법원 파산부에서 서류 안내를 받을 수 있습니다</li>\n</ul>\n<p>변호사 비용이 부담된다면 <strong>대한법률구조공단의 무료 소송대리</strong>를 이용할 수 있습니다. 기초생활수급자, 차상위 계층 등은 자격 요건이 완화됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">무료 상담: 신용회복위원회(1600-5500) / 법률구조공단(132) / 서민금융(1397)</blockquote>',
      },
      {
        title: '5단계 — 지금 바로 행동으로 옮기세요',
        content:
          '<p><strong style="color:#1e3a5f">채무 정리는 하루라도 빨리 시작할수록 이자 부담이 줄어듭니다</strong></p>\n<p>오늘 당장 할 수 있는 일을 정리합니다.</p>\n<ul>\n<li><strong>오늘</strong> — 신용정보원에서 채무 내역 조회하기</li>\n<li><strong>내일</strong> — 채무 목록 작성 후 신용회복위원회(1600-5500) 전화 상담 예약하기</li>\n<li><strong>이번 주</strong> — 대한법률구조공단(132)에 전화해서 개인회생·파산 상담 일정 잡기</li>\n</ul>\n<p>연체 기간이 길어질수록 가산금이 붙고 신용등급이 떨어집니다. <strong>행동을 미루는 것이 가장 큰 손해</strong>입니다.</p>',
      },
    ],
    cases: [
      {
        title: '다중 채무자의 개인파산 면책 인용 사례',
        summary:
          '대법원 2020다248903 사건(2021.06.10 선고)에서 법원은 채무자가 생계를 위해 다수의 금융기관에서 대출을 받아 총 채무가 변제 능력을 초과한 상태에서 성실하게 면책 절차를 이행한 경우, 면책을 허가하는 것이 타당하다고 판시했습니다.',
        takeaway:
          '빚이 아무리 많아도 성실하게 절차를 밟으면 면책을 받을 수 있습니다. 중요한 것은 숨기지 않고 정확히 신고하는 것입니다.',
      },
    ],
    faq: [
      {
        question: '빚이 얼마 이상이어야 파산 신청이 가능한가요?',
        answer:
          '법률상 <strong>최소 금액 기준은 없습니다</strong>. 채무가 변제 능력을 초과하여 지급불능 상태이면 신청할 수 있습니다. 소득 대비 채무 비율이 핵심 판단 기준입니다.',
      },
      {
        question: '사채 빚도 파산으로 정리할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 불법 사채를 포함한 모든 채무를 파산 신청서에 기재하면 면책 대상에 포함됩니다. 다만 채무 원인이 도박 등인 경우 면책이 불허될 수 있습니다.',
      },
      {
        question: '채무조정과 개인회생, 어떤 것이 나에게 맞나요?',
        answer:
          '<strong>소득이 있고 3~5년간 일부 변제가 가능하면 개인회생</strong>, 채무 규모가 상대적으로 작고 이자 감면만으로 해결 가능하면 채무조정이 적합합니다.',
      },
      {
        question: '파산하면 가족에게 피해가 가나요?',
        answer:
          '파산은 본인에게만 효력이 있으므로 <strong>가족의 재산이나 신용에는 직접적인 영향이 없습니다</strong>. 다만 가족이 연대보증을 선 경우 보증 채무는 별도입니다.',
      },
      {
        question: '독촉 전화가 너무 심한데 당장 멈출 수 있나요?',
        answer:
          '<strong>채무조정·회생·파산 신청 시 추심이 중단됩니다.</strong> 야간 전화, 직장 연락 등 부당추심은 금융감독원(1332)에 즉시 신고하세요.',
      },
    ],
    cta: {
      text: '채무 정리 방법 무료 진단받기',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '개인파산 가이드', href: '/guide/bankruptcy' },
      { label: '파산 신청부터 면책까지 전체 절차', href: '/spoke/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 vs 회생 비교', href: '/spoke/bankruptcy/bankruptcy-vs-rehabilitation-comparison' },
      { label: '신용카드 빚 파산으로 정리', href: '/spoke/bankruptcy/overwhelming-credit-card-debt-bankruptcy' },
      { label: '개인회생 vs 파산 비교', href: '/spoke/rehabilitation/rehabilitation-vs-bankruptcy' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. bankruptcy / pre-filing-self-assessment-checklist
  // ───────────────────────────────────────────
  {
    domain: 'bankruptcy',
    slug: 'pre-filing-self-assessment-checklist',
    keyword: '개인파산 신청 전 자가진단 체크리스트',
    questionKeyword: '개인파산 신청 전에 자가진단할 수 있는 체크리스트가 있나요?',
    ctaKeyword: '파산 자가진단 체크리스트',
    type: '체크리스트형',
    perspective: '채무자',
    meta: {
      title: '개인파산 자가진단 체크리스트 7개 항목 | 로앤가이드',
      description: '개인파산을 신청해야 할지 고민된다면 신청 전 자가진단 체크리스트 7개 항목으로 요건 충족 여부를 지금 확인하세요.',
    },
    intro:
      '<p>파산을 해야 하는 건지, 아직 다른 방법이 있는 건지 판단이 서지 않습니다. 변호사를 찾아가자니 비용이 부담되고, 인터넷 정보는 서로 달라 혼란스럽습니다. 아래 7가지 항목을 하나씩 체크해 보면 자신이 파산 요건에 해당하는지 대략적인 판단이 가능합니다.</p>',
    sections: [
      {
        title: '자가진단 체크리스트 7개 항목',
        content:
          '<p><strong style="color:#1e3a5f">아래 항목 중 4개 이상 해당되면 개인파산 신청을 적극 검토해야 합니다</strong></p>\n<ul>\n<li><strong>① 총 채무가 연 소득의 3배를 초과한다</strong> — 연봉 3,000만 원인데 빚이 1억 원 이상이면 자력 변제가 사실상 불가능합니다</li>\n<li><strong>② 3개월 이상 연체 중이다</strong> — 최소 변제액도 납부하지 못하는 상태가 3개월 넘게 지속되고 있습니다</li>\n<li><strong>③ 돌려막기를 하고 있다</strong> — A 대출로 B 대출을 갚는 식의 순환 대출을 반복하고 있습니다</li>\n<li><strong>④ 새로운 대출이 더 이상 불가능하다</strong> — 1금융, 2금융, 대부업체까지 모두 거절당한 상태입니다</li>\n<li><strong>⑤ 급여 압류를 받았거나 예정이다</strong> — 채권자가 급여 압류 신청을 한 상태이거나 이미 압류가 진행 중입니다</li>\n<li><strong>⑥ 정기적 소득이 없거나 최저 생계비 수준이다</strong> — 실직 상태이거나 소득이 기초생활비에 미치지 못합니다</li>\n<li><strong>⑦ 부양가족이 있어 가용 소득이 거의 없다</strong> — 소득에서 생활비·양육비를 빼면 변제할 여력이 전혀 없습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">4개 이상 해당 → 파산 적극 검토 / 2~3개 → 개인회생 검토 / 1개 이하 → 채무조정 우선</blockquote>',
      },
      {
        title: '파산이 아닌 다른 방법이 적합한 경우',
        content:
          '<p><strong style="color:#1e3a5f">위 항목에 1~3개만 해당되면 개인회생이나 채무조정이 더 유리할 수 있습니다</strong></p>\n<ul>\n<li><strong>정기 소득이 있는 경우</strong> — 급여가 있으면 개인회생을 통해 3~5년 변제 후 잔여 채무 면제가 가능합니다. 채무자 회생 및 파산에 관한 법률 제579조에 따라 변제 계획 인가 후 성실히 이행하면 됩니다</li>\n<li><strong>채무 총액이 5억 원 이하인 경우</strong> — 신용회복위원회의 채무조정(워크아웃)으로 이자 감면과 상환 기간 연장을 받을 수 있습니다</li>\n<li><strong>일시적 소득 감소인 경우</strong> — 질병, 실직 등 일시적 사유라면 긴급생활안정자금, 소액생계비 대출 등 정부 지원도 확인하세요</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/bankruptcy" style="color:#1565c0;font-weight:600">내 상황 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '파산 신청 전 반드시 준비해야 할 서류',
        content:
          '<p><strong style="color:#1e3a5f">자가진단 결과 파산이 적합하다고 판단되면 아래 서류를 미리 준비하세요</strong></p>\n<ul>\n<li><strong>채무 증명서류</strong> — 대출 계약서, 신용정보 조회서, 독촉장, 판결문 등</li>\n<li><strong>소득 증명서류</strong> — 소득금액증명원, 급여명세서, 사업소득 신고서 (없는 경우 무소득 사실확인서)</li>\n<li><strong>재산 증명서류</strong> — 부동산 등기부등본, 자동차 등록원부, 예금잔액증명서, 보험 가입 내역</li>\n<li><strong>가족관계증명서</strong> — 주민등록등본, 가족관계증명서 (부양가족 확인용)</li>\n<li><strong>지출 내역</strong> — 최근 6개월~1년간 생활비 내역 (통장 거래내역서)</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 서류: 채무 증명 + 소득 증명 + 재산 증명 + 가족관계 + 지출 내역</blockquote>',
      },
      {
        title: '자가진단 후 다음 행동 순서',
        content:
          '<p><strong style="color:#1e3a5f">체크리스트 결과에 따라 다음 단계를 바로 실행하세요</strong></p>\n<ul>\n<li><strong>4개 이상 해당</strong> → 대한법률구조공단(132)에 전화해서 파산 무료 상담 예약. 기초생활수급자·차상위 계층은 소송대리까지 무료입니다</li>\n<li><strong>2~3개 해당</strong> → 신용회복위원회(1600-5500)에 채무조정 또는 개인회생 상담 신청</li>\n<li><strong>1개 이하</strong> → 서민금융진흥원(1397)에서 저금리 대환대출 가능 여부 확인</li>\n</ul>\n<p>어떤 결과든 <strong>행동을 미루면 연체이자가 누적</strong>됩니다. 오늘 전화 한 통이 수백만 원의 차이를 만들 수 있습니다.</p>',
      },
    ],
    cases: [
      {
        title: '지급불능 상태 인정 기준 — 소득 대비 채무 비율',
        summary:
          '대법원 2019다204225 사건(2020.01.16 선고)에서 법원은 채무자의 총 채무액이 연간 소득의 약 5배에 달하고, 최저 생계비를 제외하면 월 변제 가능 금액이 이자에도 미치지 못하는 경우 지급불능 상태로 인정된다고 판시했습니다.',
        takeaway:
          '소득 대비 채무가 압도적으로 많고 최저 생활비를 빼면 변제 여력이 없다면 법원도 지급불능으로 인정합니다. 체크리스트에서 4개 이상 해당된다면 파산 상담을 받으세요.',
      },
    ],
    faq: [
      {
        question: '체크리스트에 3개만 해당되면 파산은 안 되나요?',
        answer:
          '<strong>반드시 안 되는 것은 아닙니다.</strong> 체크리스트는 대략적인 기준이며, 구체적인 소득·채무·생활 상황에 따라 법원의 판단이 달라질 수 있습니다. 정확한 판단은 전문가 상담이 필요합니다.',
      },
      {
        question: '파산 신청 비용은 얼마나 드나요?',
        answer:
          '법원 인지대·송달료 약 <strong>3~5만 원</strong>이며, 변호사를 선임하면 100~300만 원이 추가됩니다. 기초생활수급자는 대한법률구조공단에서 무료 소송대리를 받을 수 있습니다.',
      },
      {
        question: '소득이 아예 없어도 파산 신청이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 오히려 소득이 전혀 없는 경우가 파산 요건(지급불능)에 더 부합합니다. 소득이 있으면 개인회생이 우선 검토됩니다.',
      },
      {
        question: '자영업자도 개인파산을 신청할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 사업을 폐업한 자영업자뿐 아니라 영업 중인 자영업자도 지급불능 상태이면 파산 신청이 가능합니다. 다만 사업 관련 채무 내역을 상세히 기재해야 합니다.',
      },
      {
        question: '파산하면 직업에 제한이 생기나요?',
        answer:
          '파산 선고 후 면책 결정 전까지 <strong>변호사, 공인회계사, 공무원 등 일부 직종에 취업 제한</strong>이 있습니다. 면책 결정이 나면 대부분의 제한이 해소됩니다.',
      },
    ],
    cta: {
      text: '파산 자가진단 무료 상담받기',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '개인파산 가이드', href: '/guide/bankruptcy' },
      { label: '빚이 너무 많을 때 어디부터', href: '/spoke/bankruptcy/too-much-debt-where-to-start' },
      { label: '파산 신청서 양식 작성 가이드', href: '/spoke/bankruptcy/application-form-template-guide' },
      { label: '파산 전 재산 처분 면책 불허', href: '/spoke/bankruptcy/disposing-assets-before-filing-denial' },
      { label: '파산 후 신용회복 타임라인', href: '/spoke/bankruptcy/bankruptcy-credit-recovery-timeline' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. bankruptcy / application-form-template-guide
  // ───────────────────────────────────────────
  {
    domain: 'bankruptcy',
    slug: 'application-form-template-guide',
    keyword: '개인파산 신청서 양식과 작성 가이드',
    questionKeyword: '개인파산 신청서는 어떻게 작성하나요?',
    ctaKeyword: '파산 신청서 작성법',
    type: '템플릿형',
    perspective: '채무자',
    meta: {
      title: '개인파산 신청서 작성 가이드 6가지 항목 | 로앤가이드',
      description: '개인파산 신청서를 직접 작성해야 하는데 양식이 복잡해서 막막하다면 항목별 작성 가이드 6가지를 지금 확인하세요.',
    },
    intro:
      '<p>법원에서 받은 개인파산 신청서 양식을 펼쳐봤지만 어디에 무엇을 써야 하는지 감이 잡히지 않습니다. 채무 목록, 재산 목록, 수입·지출 내역서까지 빠짐없이 작성해야 하는데, 한 칸이라도 잘못 쓰면 보정 명령이 나와 절차가 지연됩니다. 항목별로 정확히 어떻게 쓰는지 확인하세요.</p>',
    sections: [
      {
        title: '파산 신청서의 전체 구성 — 6가지 핵심 항목',
        content:
          '<p><strong style="color:#1e3a5f">개인파산 신청서는 크게 6가지 항목으로 구성됩니다. 각 항목을 빠짐없이 작성해야 보정 명령 없이 접수됩니다</strong></p>\n<ul>\n<li><strong>① 신청인 인적사항</strong> — 성명, 주민등록번호, 주소, 연락처, 직업</li>\n<li><strong>② 채무 목록</strong> — 채권자별 채무 원금, 이자, 연체 기간, 담보 유무</li>\n<li><strong>③ 재산 목록</strong> — 부동산, 자동차, 예금, 보험, 유가증권, 기타 재산</li>\n<li><strong>④ 수입·지출 내역서</strong> — 월 소득, 생활비, 교육비, 의료비 등 항목별 지출</li>\n<li><strong>⑤ 채무 발생 경위서</strong> — 언제, 왜, 어떻게 빚이 생겼는지 시간순 서술</li>\n<li><strong>⑥ 진술서</strong> — 현재 생활 상태, 향후 계획 등을 솔직하게 기술</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">6대 항목: 인적사항 + 채무 목록 + 재산 목록 + 수입·지출 + 경위서 + 진술서</blockquote>',
      },
      {
        title: '채무 목록 작성법 — 가장 중요하고 실수가 많은 부분',
        content:
          '<p><strong style="color:#1e3a5f">채무 목록은 파산 신청서에서 가장 중요한 부분입니다. 누락된 채권자는 면책 대상에서 빠질 수 있습니다</strong></p>\n<ul>\n<li><strong>모든 채권자 기재</strong> — 은행, 카드사, 대부업체, 사채업자, 지인까지 예외 없이 기재하세요. 한국신용정보원(www.credit4u.or.kr)에서 조회한 결과를 기준으로 합니다</li>\n<li><strong>채무액 정확히 기재</strong> — 원금과 이자를 구분해서 기재합니다. 정확한 금액을 모르면 채권자에게 "채무확인서"를 요청하세요</li>\n<li><strong>담보채무 구분</strong> — 주택담보대출, 자동차 할부 등 담보가 있는 채무는 별도로 구분 기재합니다</li>\n<li><strong>보증채무 포함</strong> — 타인의 대출에 연대보증을 선 경우도 채무 목록에 포함해야 합니다</li>\n</ul>\n<p><strong>흔한 실수:</strong> 소액 채무나 오래된 채무를 빠뜨리는 것입니다. 누락된 채권자에 대해서는 면책 효력이 미치지 않을 수 있으므로 반드시 전수 기재하세요.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/bankruptcy" style="color:#1565c0;font-weight:600">파산 신청서 작성 전 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '채무 발생 경위서 작성 요령',
        content:
          '<p><strong style="color:#1e3a5f">경위서는 법원이 면책 여부를 판단하는 핵심 자료입니다. 시간 순서대로 솔직하게 작성하세요</strong></p>\n<ul>\n<li><strong>시간순 서술</strong> — "20XX년 X월, OO 사유로 첫 대출을 받았다"처럼 시간순으로 기술합니다</li>\n<li><strong>채무 원인 솔직 기재</strong> — 생활비 부족, 사업 실패, 의료비, 보증 채무 등 실제 원인을 그대로 쓰세요. 거짓을 쓰면 면책이 불허될 수 있습니다</li>\n<li><strong>변제 노력 기재</strong> — 채무를 줄이기 위해 어떤 노력을 했는지 구체적으로 기술하세요 (아르바이트, 재산 매각, 채무조정 시도 등)</li>\n<li><strong>현재 상태</strong> — 현재 소득, 건강 상태, 부양가족 상황 등 변제가 불가능한 이유를 서술합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경위서 핵심: 시간순 + 솔직한 원인 + 변제 노력 + 현재 상태</blockquote>',
      },
      {
        title: '신청서 제출 전 최종 점검 사항',
        content:
          '<p><strong style="color:#1e3a5f">제출 전 아래 사항을 반드시 확인하세요. 보정 명령이 나오면 절차가 1~2개월 지연됩니다</strong></p>\n<ul>\n<li><strong>서명·날인 확인</strong> — 신청인 서명란에 빠짐없이 서명 또는 날인했는지 확인</li>\n<li><strong>첨부서류 완비</strong> — 주민등록등본, 가족관계증명서, 소득금액증명원, 재산세 과세증명서, 통장 거래내역서 등</li>\n<li><strong>인지대·송달료 납부</strong> — 파산 신청 인지대 1,000원 + 면책 신청 인지대 2,000원 + 송달료(채권자 수 × 4,200원 × 3회분)</li>\n<li><strong>관할 법원 확인</strong> — 신청인 주소지 관할 지방법원 파산부에 제출합니다</li>\n</ul>\n<p>양식은 대한민국 법원 전자민원센터(efiling.scourt.go.kr)에서 다운로드할 수 있습니다. <strong>전자제출(온라인)도 가능</strong>하니 법원 방문이 어려운 경우 활용하세요.</p>',
      },
    ],
    cases: [
      {
        title: '채무 목록 누락과 면책 효력 — 기재하지 않은 채권자',
        summary:
          '대법원 2018다239110 사건(2019.04.25 선고)에서 법원은 채무자가 파산 신청 시 채무 목록에 기재하지 않은 채권자의 채무에 대해서는 면책의 효력이 미치지 않는다고 판시했습니다.',
        takeaway:
          '채무 목록 작성 시 단 한 건의 채무도 빠뜨리면 안 됩니다. 소액이라도, 오래된 채무라도 반드시 기재해야 면책 효력이 적용됩니다.',
      },
    ],
    faq: [
      {
        question: '파산 신청서 양식은 어디에서 받을 수 있나요?',
        answer:
          '<strong>대한민국 법원 전자민원센터(efiling.scourt.go.kr)</strong>에서 무료로 다운로드할 수 있습니다. 관할 법원 파산부 민원실에서도 직접 받을 수 있습니다.',
      },
      {
        question: '신청서를 직접 쓰면 안 되고 변호사를 써야 하나요?',
        answer:
          '<strong>직접 작성(본인 소송)이 가능합니다.</strong> 다만 서류가 복잡하므로 대한법률구조공단(132)의 무료 상담을 받아 작성하면 보정 명령 가능성이 줄어듭니다.',
      },
      {
        question: '채무 금액을 정확히 모르면 어떻게 쓰나요?',
        answer:
          '신용정보원에서 조회한 금액을 기준으로 기재하고, <strong>"정확한 금액은 채권자 확인 필요"라고 비고란에 기재</strong>하면 됩니다. 이후 법원이 채권자에게 확인합니다.',
      },
      {
        question: '보정 명령이 나오면 어떻게 해야 하나요?',
        answer:
          '법원이 지정한 기한(보통 <strong>14일~1개월</strong>) 내에 부족한 서류나 수정 사항을 보완해서 제출하면 됩니다. 기한을 넘기면 신청이 각하될 수 있습니다.',
      },
      {
        question: '면책 신청은 파산 신청과 별도로 해야 하나요?',
        answer:
          '<strong>동시에 신청하는 것이 일반적입니다.</strong> 파산 신청서와 면책 신청서를 함께 제출하면 됩니다. 법원 양식에도 동시 신청 서식이 마련되어 있습니다.',
      },
    ],
    cta: {
      text: '파산 신청서 작성 전 무료 진단받기',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '개인파산 가이드', href: '/guide/bankruptcy' },
      { label: '파산 자가진단 체크리스트', href: '/spoke/bankruptcy/pre-filing-self-assessment-checklist' },
      { label: '파산 전 재산 처분 면책 불허', href: '/spoke/bankruptcy/disposing-assets-before-filing-denial' },
      { label: '파산 신청부터 면책까지 전체 절차', href: '/spoke/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 면책 후 달라지는 것', href: '/spoke/bankruptcy/bankruptcy-after-discharge-life-changes' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. real-estate-sale / double-sale-buyer-protection
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-sale',
    slug: 'double-sale-buyer-protection',
    keyword: '부동산 이중매매 시 매수인 보호 방법',
    questionKeyword: '부동산 이중매매 피해를 당했는데 매수인은 어떻게 보호받나요?',
    ctaKeyword: '이중매매 매수인 보호',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '부동산 이중매매 매수인 보호 4가지 방법 | 로앤가이드',
      description: '매도인이 같은 부동산을 두 사람에게 팔았다면 매수인으로서 내 권리를 지킬 4가지 방법을 지금 확인하세요.',
    },
    intro:
      '<p>계약금과 중도금까지 냈는데, 매도인이 같은 집을 다른 사람에게도 팔았다는 사실을 알게 됐습니다. 내 돈은 돌려받을 수 있는 건지, 소유권은 누구에게 가는 건지, 지금 무엇을 해야 하는 건지 머릿속이 복잡합니다. 이중매매 상황에서 매수인이 할 수 있는 법적 대응 방법을 정리합니다.</p>',
    sections: [
      {
        title: '이중매매란? — 소유권은 먼저 등기한 사람에게 갑니다',
        content:
          '<p><strong style="color:#1e3a5f">민법 제186조에 따라 부동산 소유권은 등기를 마친 사람에게 귀속됩니다. 계약 순서가 아니라 등기 순서가 기준입니다</strong></p>\n<p>이중매매는 매도인이 동일한 부동산을 두 명 이상의 매수인에게 매도하는 것을 말합니다. 한국 법은 <strong>"등기 우선주의"</strong>를 따르므로, 먼저 계약했더라도 등기를 하지 않았다면 소유권을 잃을 수 있습니다.</p>\n<ul>\n<li><strong>선 등기자</strong> — 먼저 소유권 이전등기를 마친 매수인이 적법한 소유자가 됩니다</li>\n<li><strong>후순위 매수인</strong> — 등기를 하지 못한 매수인은 매도인에 대한 손해배상 청구만 가능합니다</li>\n<li><strong>예외</strong> — 후순위 매수인이 이중매매 사실을 알면서 등기했다면 배임죄 공범이 될 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 원칙: 계약 먼저 ≠ 소유권 확보. 등기 먼저 = 소유권 확보</blockquote>',
      },
      {
        title: '매수인이 지금 당장 해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">이중매매 사실을 알게 된 즉시 아래 3가지를 실행해야 피해를 최소화할 수 있습니다</strong></p>\n<ul>\n<li><strong>처분금지 가처분 신청</strong> — 관할 법원에 부동산 처분금지 가처분을 신청하면 매도인이 제3자에게 추가로 등기 이전하는 것을 막을 수 있습니다. 신청 즉시 등기부에 가처분 기입이 됩니다</li>\n<li><strong>등기부등본 확인</strong> — 대법원 인터넷등기소(www.iros.go.kr)에서 해당 부동산의 최신 등기부를 확인하세요. 이미 제3자에게 소유권이 이전됐는지 확인이 급선무입니다</li>\n<li><strong>증거 확보</strong> — 매매계약서, 계약금·중도금 송금 내역, 매도인과의 통화 녹음·카톡 등 모든 증거를 보전하세요</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/real-estate-sale" style="color:#1565c0;font-weight:600">이중매매 피해 대응 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '매도인에 대한 법적 청구 — 손해배상과 형사고소',
        content:
          '<p><strong style="color:#1e3a5f">이중매매한 매도인에게는 민사 손해배상과 형사 배임죄 고소가 동시에 가능합니다</strong></p>\n<ul>\n<li><strong>손해배상 청구</strong> — 민법 제390조(채무불이행)에 따라 계약금·중도금 반환은 물론, 부동산 시가 상승분까지 청구할 수 있습니다</li>\n<li><strong>배임죄 형사고소</strong> — 대법원 판례에 따라 부동산 이중매매는 형법 제355조 제2항의 배임죄에 해당합니다. 매도인은 매수인에 대한 소유권 이전등기 협력 의무가 있는데, 이를 위반하고 제3자에게 이전했기 때문입니다</li>\n<li><strong>부당이득 반환 청구</strong> — 매도인이 이중매매로 받은 계약금·중도금은 부당이득에 해당하므로 반환 청구가 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">매도인 책임: 손해배상 + 배임죄 고소 + 부당이득 반환</blockquote>',
      },
      {
        title: '이중매매를 예방하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">계약 직후 가등기를 설정하면 이중매매 위험을 크게 줄일 수 있습니다</strong></p>\n<ul>\n<li><strong>소유권이전청구권 가등기</strong> — 계약 즉시 가등기를 설정하면 본등기 순위를 확보할 수 있습니다. 가등기 후에 제3자가 등기해도 가등기권자가 우선합니다</li>\n<li><strong>계약 후 즉시 잔금 지급·등기</strong> — 가능하다면 계약과 잔금·등기를 최대한 동시에 진행하세요</li>\n<li><strong>공인중개사 거래 활용</strong> — 공인중개사를 통한 거래는 중개사의 확인·설명 의무가 있어 이중매매 위험이 낮아집니다</li>\n<li><strong>등기부 수시 확인</strong> — 잔금일까지 등기부등본을 주기적으로 확인해 권리 변동이 없는지 점검하세요</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '부동산 이중매매와 배임죄 성립',
        summary:
          '대법원 2018도12603 사건(2019.07.25 선고)에서 법원은 매도인이 매수인에게 소유권이전등기를 해줄 의무가 있음에도 제3자에게 이중으로 매도하여 소유권이전등기를 마쳐준 행위는 배임죄에 해당한다고 판시했습니다.',
        takeaway:
          '이중매매는 단순 계약 위반이 아니라 형사범죄입니다. 피해를 당했다면 민사 소송과 함께 배임죄 고소를 병행하세요.',
      },
    ],
    faq: [
      {
        question: '이미 제3자에게 등기가 넘어갔으면 소유권을 되찾을 수 없나요?',
        answer:
          '원칙적으로 <strong>선의의 제3자에게 등기가 넘어가면 소유권 회복은 어렵습니다</strong>. 다만 제3자가 이중매매 사실을 알았다면 등기 말소 청구가 가능할 수 있습니다.',
      },
      {
        question: '계약금만 낸 상태에서도 가처분 신청이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 매매계약이 유효하게 성립했다면 계약금만 지급한 상태에서도 소유권이전청구권에 기한 처분금지 가처분을 신청할 수 있습니다.',
      },
      {
        question: '매도인이 돈이 없으면 손해배상을 받을 수 없나요?',
        answer:
          '매도인에게 재산이 없으면 실질적으로 <strong>배상 집행이 어려울 수 있습니다</strong>. 이중매매 대금을 가압류하거나, 배임죄 고소를 통해 형사 합의 과정에서 회수하는 방법을 병행하세요.',
      },
      {
        question: '중개사가 이중매매를 몰랐다면 중개사에게도 책임이 있나요?',
        answer:
          '공인중개사가 <strong>확인·설명 의무를 다했는데도 매도인의 이중매매를 알 수 없었다면 책임을 묻기 어렵습니다</strong>. 다만 등기부 확인 등 기본 의무를 태만히 했다면 손해배상 청구가 가능합니다.',
      },
      {
        question: '가등기를 설정하면 100% 안전한가요?',
        answer:
          '가등기는 본등기 순위를 보전해주지만 <strong>가등기 전에 이미 제3자에게 소유권이 이전된 경우에는 효력이 없습니다</strong>. 계약 즉시 설정하는 것이 핵심입니다.',
      },
    ],
    cta: {
      text: '이중매매 피해 대응 무료 진단받기',
      link: '/diagnosis/real-estate-sale',
    },
    internalLinks: [
      { label: '부동산 매매 가이드', href: '/guide/real-estate-sale' },
      { label: '소유권 이전등기 절차', href: '/spoke/real-estate-sale/ownership-transfer-registration' },
      { label: '등기부등본 확인 체크리스트', href: '/spoke/real-estate-sale/registry-check-before-contract' },
      { label: '매매계약 해제와 계약금 반환', href: '/spoke/real-estate-sale/contract-cancel-deposit-return' },
      { label: '매매계약서 필수 조항', href: '/spoke/real-estate-sale/sale-contract-essential-clauses' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. real-estate-sale / ownership-transfer-registration
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-sale',
    slug: 'ownership-transfer-registration',
    keyword: '매매계약 후 소유권 이전등기 절차',
    questionKeyword: '부동산 매매 후 소유권 이전등기는 어떻게 하나요?',
    ctaKeyword: '소유권 이전등기 절차',
    type: '절차타임라인형',
    perspective: '매수인',
    meta: {
      title: '소유권 이전등기 절차 5단계 완전 정리 | 로앤가이드',
      description: '부동산 매매계약을 체결했는데 소유권 이전등기를 어떻게 진행해야 할지 막막하다면 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>매매계약서에 도장을 찍고 잔금까지 치렀습니다. 이제 등기를 해야 진짜 내 집이 되는데, 어디서부터 어떻게 해야 하는지 모릅니다. 등기를 미루면 이중매매나 가압류 위험에 노출되므로 잔금일 당일 또는 직후에 바로 진행하는 것이 안전합니다.</p>',
    timelineSteps: [
      '필요 서류 준비',
      '취득세 신고·납부',
      '등기신청서 작성',
      '관할 등기소 제출',
      '등기 완료 확인',
    ],
    sections: [
      {
        title: '1단계 — 소유권 이전등기에 필요한 서류를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">매수인과 매도인 양측 모두 서류를 준비해야 하며, 잔금일 전에 미리 확인하는 것이 중요합니다</strong></p>\n<p><strong>매수인이 준비할 서류:</strong></p>\n<ul>\n<li>주민등록등본 1통</li>\n<li>주민등록증 사본</li>\n<li>도장 (인감도장 불필요, 막도장 가능)</li>\n<li>매매계약서 원본</li>\n</ul>\n<p><strong>매도인이 준비할 서류:</strong></p>\n<ul>\n<li>등기권리증 (등기필증 또는 등기식별정보 통지서)</li>\n<li>인감증명서 1통 (3개월 이내 발급)</li>\n<li>주민등록초본 1통 (주소 변동 이력 포함)</li>\n<li>부동산 매도용 인감도장</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류 핵심: 매수인 — 주민등록등본·계약서 / 매도인 — 등기권리증·인감증명서</blockquote>',
      },
      {
        title: '2단계 — 취득세를 신고하고 납부하세요',
        content:
          '<p><strong style="color:#1e3a5f">부동산 취득 후 60일 이내에 취득세를 신고·납부해야 합니다. 미신고 시 가산세가 부과됩니다</strong></p>\n<ul>\n<li><strong>취득세율</strong> — 주택의 경우 취득가액에 따라 1~3% (조정대상지역 2주택 이상 8~12%)</li>\n<li><strong>신고 방법</strong> — 위택스(www.wetax.go.kr) 또는 부동산 소재지 구청 세무과에서 신고</li>\n<li><strong>납부 기한</strong> — 취득일(잔금일)로부터 60일 이내. 기한 초과 시 20% 가산세</li>\n<li><strong>농어촌특별세·지방교육세</strong> — 취득세와 함께 납부해야 합니다</li>\n</ul>\n<p>취득세 납부 영수증은 <strong>등기 신청 시 첨부 서류</strong>이므로 반드시 보관하세요.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/real-estate-sale" style="color:#1565c0;font-weight:600">이전등기 관련 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 등기신청서를 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">등기신청서는 대법원 인터넷등기소(www.iros.go.kr)에서 양식을 다운로드하거나, 전자신청으로 온라인 작성할 수 있습니다</strong></p>\n<ul>\n<li><strong>등기 원인</strong> — "매매"로 기재하고, 원인 일자는 잔금 지급일을 기재합니다</li>\n<li><strong>부동산 표시</strong> — 등기부등본에 기재된 소재지, 지목, 면적을 그대로 옮겨 적습니다</li>\n<li><strong>등기 목적</strong> — "소유권이전"으로 기재합니다</li>\n<li><strong>등록면허세</strong> — 소유권 이전등기의 등록면허세(부동산 가액의 0.2~0.4%)를 납부하고 영수증을 첨부합니다</li>\n</ul>\n<p>법무사에게 위임하면 작성부터 제출까지 대행해줍니다. 수수료는 보통 <strong>30~60만 원</strong> 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신청서: 등기 원인(매매) + 부동산 표시 + 등록면허세 납부</blockquote>',
      },
      {
        title: '4단계 — 관할 등기소에 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">등기 신청은 부동산 소재지 관할 등기소에 직접 방문하거나 인터넷등기소에서 전자신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>방문 신청</strong> — 관할 등기소에 서류 일체를 제출합니다. 접수 후 보통 3~7영업일 내에 등기가 완료됩니다</li>\n<li><strong>전자 신청</strong> — 인터넷등기소에서 공인인증서로 신청 가능합니다. 전자 신청 시 등록면허세가 30% 감면됩니다</li>\n<li><strong>법무사 위임</strong> — 법무사에게 위임장을 작성하면 방문·전자 모두 대행해줍니다</li>\n</ul>\n<p>접수번호를 받으면 인터넷등기소에서 <strong>처리 현황을 실시간 조회</strong>할 수 있습니다.</p>',
      },
      {
        title: '5단계 — 등기 완료 후 반드시 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">등기 완료 후 등기부등본을 발급받아 소유자가 정확히 본인 명의로 이전되었는지 확인하세요</strong></p>\n<ul>\n<li><strong>등기부등본 확인</strong> — 갑구(소유권)에 본인 이름이 기재되었는지 확인합니다</li>\n<li><strong>등기필정보 보관</strong> — 등기 완료 시 교부되는 등기식별정보(등기필증)는 향후 매도·담보 설정 시 필요하므로 안전하게 보관하세요</li>\n<li><strong>주소 변경 신고</strong> — 해당 주소로 전입신고를 하면 확정일자를 받을 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">완료 확인: 등기부등본 갑구 소유자 확인 → 등기필정보 보관 → 전입신고</blockquote>',
      },
    ],
    cases: [
      {
        title: '등기 지연과 제3자 권리 침해',
        summary:
          '대법원 2017다225312 사건(2018.02.08 선고)에서 법원은 매수인이 잔금을 지급하고도 등기를 지체하는 동안 제3자가 가압류를 설정한 경우, 매수인은 가압류권자에 대항할 수 없다고 판시했습니다.',
        takeaway:
          '잔금을 지급했어도 등기를 완료하지 않으면 법적 소유자가 아닙니다. 잔금일 당일 등기 신청을 완료하는 것이 가장 안전합니다.',
      },
    ],
    faq: [
      {
        question: '등기를 직접 할 수 있나요, 꼭 법무사를 써야 하나요?',
        answer:
          '<strong>직접(셀프등기) 가능합니다.</strong> 인터넷등기소에서 전자신청하면 등록면허세도 30% 감면됩니다. 다만 서류가 복잡하면 법무사 도움을 받는 것이 안전합니다.',
      },
      {
        question: '잔금일에 꼭 당일 등기해야 하나요?',
        answer:
          '법적 의무는 아니지만, <strong>잔금일 당일 등기를 강력히 권장합니다</strong>. 등기 전까지는 이중매매·가압류 위험에 노출되어 있습니다.',
      },
      {
        question: '취득세는 얼마나 나오나요?',
        answer:
          '1주택 기준 <strong>취득가액의 1~3%</strong>입니다. 6억 원 이하 주택은 1%, 6~9억 원은 1~3%, 9억 원 초과는 3%가 적용됩니다. 다주택자는 8~12%까지 올라갑니다.',
      },
      {
        question: '등기가 완료되기까지 며칠 걸리나요?',
        answer:
          '방문 신청 시 <strong>3~7영업일</strong>, 전자 신청 시 <strong>1~3영업일</strong>이 일반적입니다. 지역과 업무량에 따라 차이가 있습니다.',
      },
      {
        question: '매도인이 서류 협조를 안 하면 어떻게 하나요?',
        answer:
          '매도인이 등기 서류 제출을 거부하면 <strong>소유권이전등기청구 소송</strong>을 제기할 수 있습니다. 판결에 의한 등기는 매수인 단독으로 신청 가능합니다.',
      },
    ],
    cta: {
      text: '소유권 이전등기 관련 무료 진단받기',
      link: '/diagnosis/real-estate-sale',
    },
    internalLinks: [
      { label: '부동산 매매 가이드', href: '/guide/real-estate-sale' },
      { label: '등기부등본 확인 체크리스트', href: '/spoke/real-estate-sale/registry-check-before-contract' },
      { label: '이중매매 매수인 보호 방법', href: '/spoke/real-estate-sale/double-sale-buyer-protection' },
      { label: '매매계약 해제와 계약금 반환', href: '/spoke/real-estate-sale/contract-cancel-deposit-return' },
      { label: '매매계약서 필수 조항', href: '/spoke/real-estate-sale/sale-contract-essential-clauses' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. real-estate-sale / registry-check-before-contract
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-sale',
    slug: 'registry-check-before-contract',
    keyword: '부동산 매매 계약 전 등기부등본 확인 체크리스트',
    questionKeyword: '부동산 계약 전에 등기부등본에서 뭘 확인해야 하나요?',
    ctaKeyword: '등기부등본 확인 체크리스트',
    type: '체크리스트형',
    perspective: '매수인',
    meta: {
      title: '등기부등본 확인 체크리스트 8가지 항목 | 로앤가이드',
      description: '부동산 매매 계약 전 등기부등본에서 반드시 확인해야 할 8가지 항목이 궁금하다면 지금 확인하세요.',
    },
    intro:
      '<p>계약금을 넘기기 전에 등기부등본을 떼보라는 말은 많이 들었는데, 막상 열어보니 무엇을 어떻게 봐야 하는지 모르겠습니다. 표제부, 갑구, 을구가 뭔지도 낯설고, 근저당이니 가압류니 용어도 어렵습니다. 아래 8가지만 확인하면 위험한 부동산을 피할 수 있습니다.</p>',
    sections: [
      {
        title: '등기부등본 구조 이해 — 표제부, 갑구, 을구',
        content:
          '<p><strong style="color:#1e3a5f">등기부등본은 표제부(부동산 현황), 갑구(소유권), 을구(소유권 외 권리) 3개 파트로 구성됩니다</strong></p>\n<ul>\n<li><strong>표제부</strong> — 부동산의 소재지, 면적, 지목(토지) 또는 구조·용도(건물)가 기재됩니다. 실제 부동산과 일치하는지 확인합니다</li>\n<li><strong>갑구</strong> — 소유자가 누구인지, 소유권 변동 이력이 기록됩니다. 매도인이 진짜 소유자인지 확인하는 핵심 파트입니다</li>\n<li><strong>을구</strong> — 근저당권, 전세권, 지상권 등 소유권 이외의 권리가 기록됩니다. 빚이 얼마나 잡혀 있는지 확인하는 파트입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3개 파트: 표제부(현황) → 갑구(소유권) → 을구(담보·권리)</blockquote>',
      },
      {
        title: '반드시 확인해야 할 8가지 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 8가지 중 하나라도 이상이 있으면 계약을 보류하고 전문가 상담을 받으세요</strong></p>\n<ul>\n<li><strong>① 소유자 확인</strong> — 갑구에서 현재 소유자가 매도인과 동일인인지 확인. 주민등록번호 뒷자리까지 대조하세요</li>\n<li><strong>② 가압류·가처분 유무</strong> — 갑구에 "가압류", "가처분", "예고등기" 등이 있으면 분쟁 중인 부동산입니다. 절대 계약하지 마세요</li>\n<li><strong>③ 근저당권 확인</strong> — 을구의 근저당 설정 금액을 확인하세요. 채권최고액이 매매가에 근접하거나 초과하면 위험합니다</li>\n<li><strong>④ 전세권·임차권 확인</strong> — 을구에 전세권이 설정되어 있으면 세입자가 있는 것입니다. 인수 조건을 확인하세요</li>\n<li><strong>⑤ 면적·용도 확인</strong> — 표제부의 면적이 매물 정보와 일치하는지, 용도(주거용·상업용)가 맞는지 확인하세요</li>\n<li><strong>⑥ 공유자 유무</strong> — 갑구에 공동소유자가 있으면 전원의 동의가 있어야 매매가 가능합니다</li>\n<li><strong>⑦ 신탁 등기 유무</strong> — "신탁"이 기재되어 있으면 신탁회사의 동의 없이 매매가 불가능합니다</li>\n<li><strong>⑧ 등기 날짜 확인</strong> — 등기부등본은 발급일 기준 정보입니다. 계약일에 가장 최근 발급본을 확인하세요. 하루 전 등본도 위험할 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/real-estate-sale" style="color:#1565c0;font-weight:600">등기부등본 분석 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '위험 신호가 발견됐을 때 대처법',
        content:
          '<p><strong style="color:#1e3a5f">등기부등본에서 이상 징후를 발견했다면 계약을 서두르지 말고 아래 순서로 대응하세요</strong></p>\n<ul>\n<li><strong>가압류·가처분 발견</strong> — 해당 사건의 채권자와 청구금액을 확인하고, 매도인에게 말소 계획을 서면으로 요구하세요. 잔금일 전 말소가 확인되지 않으면 계약을 해제할 수 있는 특약을 넣으세요</li>\n<li><strong>근저당 과다</strong> — 근저당 채권최고액이 매매가의 70%를 초과하면 깡통 매물 위험이 있습니다. 매도인의 잔금으로 근저당이 말소되는지 확인하세요</li>\n<li><strong>소유자 불일치</strong> — 매도인이 등기부 소유자와 다르면 위임장·인감증명서 확인이 필수입니다. 대리매매 사기가 빈번하므로 각별히 주의하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">위험 발견 시: 계약 보류 → 매도인에게 서면 소명 요구 → 말소 특약 삽입</blockquote>',
      },
      {
        title: '등기부등본 발급 방법과 비용',
        content:
          '<p><strong style="color:#1e3a5f">등기부등본은 인터넷등기소에서 24시간 발급 가능하며, 수수료는 700원입니다</strong></p>\n<ul>\n<li><strong>인터넷등기소</strong> — www.iros.go.kr에서 부동산 소재지를 입력하면 즉시 열람(500원) 또는 발급(700원)이 가능합니다</li>\n<li><strong>등기소 방문</strong> — 전국 등기소에서 직접 발급받을 수 있습니다 (수수료 1,000원)</li>\n<li><strong>정부24</strong> — www.gov.kr에서도 발급 가능합니다</li>\n</ul>\n<p><strong>계약 당일에 반드시 최신 등기부를 확인하세요.</strong> 등기부는 실시간으로 변경될 수 있으므로, 이전에 확인한 등본을 그대로 신뢰하면 안 됩니다. 특히 잔금일에는 잔금 지급 직전에 한 번 더 확인하는 것이 안전합니다.</p>',
      },
    ],
    cases: [
      {
        title: '등기부등본 미확인과 매수인 과실',
        summary:
          '대법원 2020다246591 사건(2021.05.13 선고)에서 법원은 매수인이 등기부등본을 확인하지 않고 계약을 체결하여 기존 근저당권으로 인한 손해를 입은 경우, 매수인에게도 과실이 있으므로 매도인의 손해배상 범위에서 과실상계가 적용된다고 판시했습니다.',
        takeaway:
          '등기부등본을 확인하지 않으면 피해를 입어도 법원에서 매수인의 과실로 인정합니다. 계약 전 등기부 확인은 선택이 아니라 필수입니다.',
      },
    ],
    faq: [
      {
        question: '등기부등본은 계약 며칠 전에 확인하면 되나요?',
        answer:
          '<strong>계약 당일에 확인하세요.</strong> 등기부는 매일 변경될 수 있으므로 계약일 당일, 가능하면 계약 직전에 최신본을 확인하는 것이 가장 안전합니다.',
      },
      {
        question: '근저당 설정 금액이 매매가보다 적으면 안전한가요?',
        answer:
          '근저당 채권최고액이 매매가의 <strong>60% 이하</strong>면 비교적 안전하지만, 잔금일에 근저당이 말소되는지 반드시 확인해야 합니다. 매도인의 잔금 수령과 동시에 말소하는 것이 일반적입니다.',
      },
      {
        question: '등기부에 "예고등기"가 있으면 어떤 의미인가요?',
        answer:
          '<strong>등기의 유효성에 대해 소송이 진행 중</strong>이라는 의미입니다. 예고등기가 있는 부동산은 소유권이 불확실하므로 계약을 보류하는 것이 현명합니다.',
      },
      {
        question: '공동명의 부동산은 어떤 점을 더 확인해야 하나요?',
        answer:
          '<strong>공유자 전원의 매매 동의</strong>를 확인해야 합니다. 지분 소유자 한 명이라도 반대하면 전체 매매가 불가능합니다. 계약서에도 공유자 전원이 서명해야 합니다.',
      },
      {
        question: '아파트와 단독주택의 등기부가 다른가요?',
        answer:
          '기본 구조(표제부·갑구·을구)는 같지만, <strong>아파트는 대지권 표시</strong>가 표제부에 추가됩니다. 대지권 비율과 전용면적이 분양 계약과 일치하는지 확인하세요.',
      },
      {
        question: '세입자가 있는 매물은 등기부에서 어떻게 확인하나요?',
        answer:
          '을구에 <strong>전세권이 설정</strong>되어 있으면 확인할 수 있습니다. 다만 확정일자만 받은 임차인은 등기부에 나타나지 않으므로, 별도로 전입세대 확인서를 떼봐야 합니다.',
      },
    ],
    cta: {
      text: '등기부등본 분석 무료 진단받기',
      link: '/diagnosis/real-estate-sale',
    },
    internalLinks: [
      { label: '부동산 매매 가이드', href: '/guide/real-estate-sale' },
      { label: '소유권 이전등기 절차', href: '/spoke/real-estate-sale/ownership-transfer-registration' },
      { label: '이중매매 매수인 보호 방법', href: '/spoke/real-estate-sale/double-sale-buyer-protection' },
      { label: '매매계약 해제와 계약금 반환', href: '/spoke/real-estate-sale/contract-cancel-deposit-return' },
      { label: '매매계약서 필수 조항', href: '/spoke/real-estate-sale/sale-contract-essential-clauses' },
    ],
  },
];
