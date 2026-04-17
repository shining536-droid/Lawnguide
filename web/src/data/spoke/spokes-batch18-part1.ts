import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [폭행 혐의를 받은 가해자]의 [고소장을 받고 어디서부터 대응해야 할지 모르는 상황]에서 [초기 대응 절차와 진술 준비]를 돕는 페이지다.
// 2. 이 페이지는 [채무 과다로 고민하는 채무자]의 [개인파산과 개인회생 중 어떤 제도가 맞는지 모르는 상황]에서 [두 제도 비교와 선택 기준 파악]을 돕는 페이지다.
// 3. 이 페이지는 [아동성범죄 혐의를 받은 피의자]의 [수사기관 출석 요구를 받고 대응 방법을 모르는 상황]에서 [수사 단계별 대응 전략과 진술 준비]를 돕는 페이지다.
// 4. 이 페이지는 [혼자 자녀를 양육해온 양육친]의 [과거 양육비를 소급 청구할 수 있는지 모르는 상황]에서 [소급 청구 요건과 절차 확인]을 돕는 페이지다.
// 5. 이 페이지는 [사실을 말했는데 명예훼손으로 고소당한 피고소인]의 [사실 적시도 처벌되는 이유를 모르는 상황]에서 [사실적시 명예훼손 성립 요건과 방어 전략]을 돕는 페이지다.

export const spokesBatch18Part1Pages: SpokePage[] = [
  {
    domain: 'assault',
    slug: 'accused-of-assault-where-to-start',
    keyword: '폭행 혐의로 고소당했을 때 어디부터 해야 하나',
    questionKeyword: '폭행 혐의로 고소당했는데 어디서부터 준비해야 하나요?',
    ctaKeyword: '폭행 혐의 대응',
    type: '어디부터형',
    perspective: '가해자',
    meta: {
      title: '폭행 고소 대응 3단계 — 초기 진술부터 합의까지 | 로앤가이드',
      description: '폭행 혐의로 고소장을 받고 어디서부터 시작해야 할지 막막하다면, 경찰 출석 전 준비사항과 대응 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '어제 경찰서에서 출석 요구서가 왔습니다. 상대방이 폭행으로 고소를 했다는 겁니다. 그날 일이 억울하기도 하고, 막상 경찰서에 가려니 무슨 말을 해야 할지 모르겠습니다. 혐의를 받고 있다면, 첫 진술 전에 반드시 확인해야 할 사항을 정리해보세요.',
    sections: [
      {
        title: '첫째, 출석 전에 당일 상황을 시간순으로 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제260조에 따라 단순폭행죄는 2년 이하의 징역 또는 500만원 이하의 벌금에 처해집니다</strong></p>\n<p>경찰 출석 전에 가장 먼저 해야 할 일은 <strong>사건 당일의 상황을 시간순으로 메모</strong>하는 것입니다. 누가 먼저 시비를 걸었는지, 어떤 행위가 있었는지, 목격자가 있었는지를 구체적으로 적어두세요.</p>\n<p>기억이 흐릿해지기 전에 <strong>CCTV 존재 여부, 목격자 연락처, 당시 문자나 통화 기록</strong>도 함께 확인하세요. 진술 과정에서 일관성이 무너지면 불리해질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 시간순 메모 → CCTV·목격자 확인 → 문자·통화 기록 보관</blockquote>',
      },
      {
        title: '둘째, 경찰 조사에서 진술거부권을 이해하고 신중하게 답변하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법 제244조의3에 따라 피의자는 진술을 거부할 수 있습니다</strong></p>\n<p>경찰 조사 시 <strong>진술거부권</strong>을 고지받게 됩니다. 모든 질문에 대답할 의무가 없으며, 불리한 질문에는 답변을 보류할 수 있습니다. 특히 "때린 적 있느냐"는 질문에 즉흥적으로 답하면 안 됩니다.</p>\n<p>진술조서에 서명하기 전에 <strong>내용을 꼼꼼히 읽고</strong>, 사실과 다른 부분이 있으면 수정을 요청하세요. 한 번 서명한 조서는 나중에 번복하기 매우 어렵습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 원칙: 진술거부권 행사 가능 → 즉흥 답변 금지 → 조서 서명 전 꼼꼼히 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/assault" style="color:#1565c0;font-weight:600">내 폭행 혐의 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 합의 가능성을 검토하고 반의사불벌 적용 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">폭행죄는 반의사불벌죄로, 피해자가 처벌을 원하지 않으면 공소를 제기할 수 없습니다</strong></p>\n<p>형법 제260조 제3항에 따라 단순폭행죄는 <strong>반의사불벌죄</strong>입니다. 피해자가 처벌불원서를 제출하면 형사처벌을 면할 수 있으므로, 합의를 적극 검토하세요.</p>\n<p>합의금은 피해 정도, 치료비, 정신적 피해를 종합적으로 고려하여 정합니다. 합의서에는 <strong>"처벌을 원하지 않는다"는 문구</strong>를 반드시 포함시키고, 합의서 원본과 처벌불원서를 수사기관에 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의 절차: 피해자 접촉 → 합의금 협의 → 합의서+처벌불원서 → 수사기관 제출</blockquote>',
      },
      {
        title: '넷째, 정당방위 주장이 가능한지 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제21조에 따라 자기 또는 타인의 법익에 대한 현재의 부당한 침해를 방어하기 위한 행위는 정당방위로 인정됩니다</strong></p>\n<p>상대방이 먼저 폭행을 가했고 이에 대응한 것이라면 <strong>정당방위</strong>를 주장할 수 있습니다. 다만 법원은 정당방위 인정에 엄격한 기준을 적용하므로, 방어 행위가 상당성을 갖추었는지가 핵심입니다.</p>\n<p>정당방위를 입증하려면 <strong>상대방의 선제 공격을 증명할 CCTV, 목격자 진술, 상해진단서</strong> 등이 필요합니다. 내가 입은 부상도 반드시 병원에서 진단서를 발급받아 두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정당방위 입증: 상대방 선제 공격 증명 → 방어 행위 상당성 → CCTV·목격자·진단서</blockquote>',
      },
      {
        title: '다섯째, 상해로 죄명이 변경될 가능성에 대비하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제257조에 따라 상해죄는 7년 이하의 징역, 10년 이하의 자격정지 또는 1천만원 이하의 벌금에 처해집니다</strong></p>\n<p>피해자가 상해진단서를 제출하면 <strong>단순폭행에서 상해죄로 죄명이 변경</strong>될 수 있습니다. 상해죄는 반의사불벌죄가 아니므로 피해자가 합의하더라도 검찰이 기소할 수 있습니다.</p>\n<p>상해진단서의 <strong>진단 기간이 3주 이상</strong>이면 형량이 높아질 수 있으므로, 피해자의 진단서 내용을 확인하고 조기에 합의를 진행하는 것이 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 상해진단서 제출 시 죄명 변경 → 상해죄는 합의해도 기소 가능 → 조기 합의 중요</blockquote>',
      },
    ],
    cases: [
      {
        title: '폭력행위 등 처벌에 관한 법률 위반에서 범죄단체 활동의 포괄일죄 인정 사례',
        summary:
          '대법원 2025도14142 사건(2026.01.15 선고)에서 법원은 폭력행위 등 처벌에 관한 법률 제4조 제1항에 따라 범죄단체를 구성하거나 이에 가입한 자가 구성원으로 활동하는 경우 포괄일죄의 관계에 있다고 판시하며, 공소시효는 최종 범죄행위가 종료한 때부터 진행된다고 판단했습니다.',
        takeaway:
          '폭행 혐의를 받고 있다면 해당 행위가 단순폭행인지 조직적 폭력인지에 따라 적용 법률이 달라집니다. 자신에게 적용되는 정확한 죄명을 확인하고, 첫 진술 전에 법률 전문가의 조언을 받으세요.',
      },
    ],
    faq: [
      {
        question: '폭행 혐의로 경찰에 출석하면 바로 구속되나요?',
        answer: '단순폭행 사건으로 <strong>바로 구속되는 경우는 드뭅니다</strong>. 다만 상습폭행이거나 피해가 중한 경우, 또는 도주·증거인멸 우려가 있으면 구속영장이 청구될 수 있습니다.',
      },
      {
        question: '상대방도 나를 때렸는데 나만 고소당했어요. 어떻게 하나요?',
        answer: '<strong>맞고소(반소)</strong>를 할 수 있습니다. 상대방의 폭행 사실을 증명할 수 있는 CCTV, 목격자 진술, 내 상해진단서를 확보한 후 경찰서에 고소장을 접수하세요.',
      },
      {
        question: '폭행 합의금은 보통 얼마인가요?',
        answer: '단순폭행은 통상 <strong>50만~200만원</strong> 선이지만, 상해 정도, 피해자의 처벌 의사, 가해자의 전과 여부에 따라 크게 달라집니다. 치료비가 발생한 경우 치료비 실비를 별도로 포함하는 것이 일반적입니다.',
      },
      {
        question: '변호사 없이 혼자 경찰 조사를 받아도 되나요?',
        answer: '법적으로 변호사 동석 없이 조사를 받을 수 있지만, <strong>첫 진술이 수사와 재판의 방향을 결정</strong>합니다. 특히 상해로 죄명 변경이 우려되는 경우라면 변호사 상담 후 출석하는 것을 권장합니다.',
      },
      {
        question: '전과가 생기면 취업에 불이익이 있나요?',
        answer: '벌금형 이상의 형사처벌을 받으면 <strong>수사경력자료에 기록</strong>됩니다. 다만 단순폭행 벌금형은 일반 취업 시 조회되지 않으며, 공무원·교사 등 특정 직종에서만 결격사유가 될 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행 진단', href: '/diagnosis/assault' },
      { label: '폭행 증거 수집 방법', href: '/guide/assault/assault-evidence-collection' },
      { label: '정당방위 성립 요건', href: '/guide/assault/self-defense-criteria' },
      { label: '폭행 합의금 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-vs-rehabilitation-comparison',
    keyword: '개인파산 vs 개인회생 어떤 게 나에게 맞나',
    questionKeyword: '개인파산이랑 개인회생 중에 어떤 걸 신청해야 하나요?',
    ctaKeyword: '개인파산 개인회생 비교',
    type: '비교형',
    meta: {
      title: '개인파산 vs 개인회생 5가지 차이 — 나에게 맞는 선택 | 로앤가이드',
      description: '빚이 감당이 안 되는데 개인파산과 개인회생 중 어떤 제도가 맞는지 고민이라면, 5가지 핵심 차이를 비교해보세요. 지금 확인하세요.',
    },
    intro: '카드빚과 대출이 눈덩이처럼 불어나 매달 이자도 감당이 안 됩니다. 개인파산을 해야 할지, 개인회생을 신청해야 할지 갈림길에 서 있습니다. 두 제도의 핵심 차이를 이해하면 나에게 맞는 선택이 보입니다.',
    sections: [
      {
        title: '첫째, 소득 유무가 선택의 핵심 기준입니다',
        content:
          '<p><strong style="color:#1e3a5f">채무자 회생 및 파산에 관한 법률에 따라 개인파산은 지급불능 상태, 개인회생은 정기적 소득이 있는 채무자가 대상입니다</strong></p>\n<p><strong>개인파산</strong>은 소득이 없거나 극히 적어 채무를 변제할 능력이 전혀 없는 경우에 신청합니다. 반면 <strong>개인회생</strong>은 급여소득이나 영업소득 등 정기적 수입이 있어 3~5년간 분할 변제가 가능한 경우에 신청합니다.</p>\n<p>현재 직장이 있고 월급에서 생활비를 제외한 나머지로 채무를 갚을 수 있다면 개인회생이, 소득이 전혀 없다면 개인파산이 적합합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 기준: 정기 소득 있음 → 개인회생 / 소득 없음(지급불능) → 개인파산</blockquote>',
      },
      {
        title: '둘째, 채무 면제 범위와 방식이 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">개인파산은 면책 결정으로 채무 전액을 면제받고, 개인회생은 일부를 변제한 후 나머지를 면제받습니다</strong></p>\n<p>개인파산은 법원의 <strong>면책 결정</strong>이 나오면 세금·벌금 등 비면책채권을 제외한 모든 채무가 소멸합니다. 개인회생은 3년(최대 5년) 동안 <strong>변제계획에 따라 일부를 갚고</strong> 나머지를 면제받는 구조입니다.</p>\n<p>개인회생의 변제율은 보통 채무 총액의 <strong>5~30%</strong> 수준이며, 법원이 채무자의 소득과 생활비를 고려하여 결정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면제 방식: 파산 = 전액 면책(비면책채권 제외) / 회생 = 일부 변제 후 잔액 면제</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/bankruptcy" style="color:#1565c0;font-weight:600">내 상황에 파산·회생 중 어떤 제도가 맞는지 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 재산 처분 여부에 차이가 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">개인파산은 파산관재인이 재산을 환가·배당하지만, 개인회생은 재산을 유지하면서 변제합니다</strong></p>\n<p>개인파산을 신청하면 <strong>파산재단에 속하는 재산</strong>은 환가(현금화)되어 채권자에게 배당됩니다. 다만 생활에 필요한 최소한의 재산(자유재산)은 보전됩니다.</p>\n<p>개인회생은 재산을 <strong>그대로 보유하면서</strong> 소득에서 변제하는 구조입니다. 집이나 자동차를 유지하고 싶다면 개인회생이 유리합니다. 단, 변제액은 파산 시 배당받을 금액 이상이어야 합니다(청산가치 보장 원칙).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산: 파산 = 재산 환가·배당(자유재산 제외) / 회생 = 재산 유지하며 소득으로 변제</blockquote>',
      },
      {
        title: '넷째, 채무 한도와 신청 자격이 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 무담보채무 10억원, 담보채무 15억원 이하인 경우에만 신청할 수 있습니다</strong></p>\n<p>개인파산은 <strong>채무 금액에 상관없이</strong> 지급불능 상태이면 누구나 신청할 수 있습니다. 반면 개인회생은 무담보채무 10억원, 담보채무 15억원이라는 <strong>채무 한도</strong>가 있습니다.</p>\n<p>채무가 이 한도를 초과하면 개인회생은 불가능하고 파산만 선택할 수 있습니다. 또한 개인회생은 <strong>과거 5년 이내에 면책을 받은 적이 없어야</strong> 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">자격: 파산 = 채무 한도 없음 / 회생 = 무담보 10억·담보 15억 이하 + 정기소득</blockquote>',
      },
      {
        title: '다섯째, 절차 기간과 자격 제한에 차이가 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">개인파산은 6개월~1년, 개인회생은 3~5년의 변제 기간이 소요됩니다</strong></p>\n<p>개인파산은 신청 후 약 <strong>6개월~1년</strong>이면 면책 결정이 나옵니다. 면책이 확정되면 바로 새 출발이 가능합니다. 개인회생은 인가 결정 후 <strong>3년(최대 5년)</strong>간 변제계획을 이행해야 면책됩니다.</p>\n<p>파산선고를 받고 복권되기 전까지는 <strong>변호사·공인회계사·공무원 등 일부 직업에 자격 제한</strong>이 생깁니다. 개인회생은 별도의 자격 제한이 없으므로 현재 직업을 유지할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기간: 파산 6개월~1년(자격 제한 있음) / 회생 3~5년(자격 제한 없음)</blockquote>',
      },
    ],
    comparison: {
      title: '개인파산 vs 개인회생 핵심 비교',
      headers: ['항목', '개인파산', '개인회생'],
      rows: [
        { label: '대상', values: ['소득 없는 지급불능 상태', '정기소득이 있는 채무자'] },
        { label: '채무 면제', values: ['면책 시 전액 면제', '일부 변제 후 잔액 면제'] },
        { label: '재산 처분', values: ['환가·배당(자유재산 제외)', '재산 유지 가능'] },
        { label: '채무 한도', values: ['제한 없음', '무담보 10억·담보 15억 이하'] },
        { label: '소요 기간', values: ['6개월~1년', '3~5년 변제'] },
        { label: '자격 제한', values: ['복권 전까지 일부 직업 제한', '없음'] },
      ],
    },
    cases: [
      {
        title: '채무자의 추심명령과 소송 제기 자격에 관한 판결',
        summary:
          '대법원 2022다299829 사건(2025.12.04 선고)에서 법원은 채무자의 채권에 대해 추심명령이 있더라도 채무자가 피압류채권에 관한 이행의 소를 제기할 당사자적격을 상실하지 않는다고 판시하며, 채무자의 법적 권리 보호 범위를 확인했습니다.',
        takeaway:
          '파산이나 회생 절차 중에도 채무자로서의 법적 권리는 유지됩니다. 어떤 제도를 선택하든 자신의 채권을 포기할 필요는 없으니, 전문가와 상담하여 최적의 방법을 선택하세요.',
      },
    ],
    faq: [
      {
        question: '소득이 있는데 개인파산을 신청할 수 있나요?',
        answer: '소득이 있더라도 <strong>최저생계비를 제외하면 채무를 변제할 수 없는 지급불능 상태</strong>라면 개인파산 신청이 가능합니다. 다만 법원은 개인회생을 먼저 권유하는 경우가 많습니다.',
      },
      {
        question: '개인파산하면 배우자에게도 영향이 있나요?',
        answer: '파산선고로 인한 불이익은 <strong>채무자 본인에게만 한정</strong>됩니다. 배우자의 재산이나 신용에는 직접적인 영향이 없습니다. 다만 배우자가 연대보증인이라면 별도로 채무를 부담합니다.',
      },
      {
        question: '두 제도를 동시에 신청할 수 있나요?',
        answer: '<strong>동시 신청은 불가능</strong>합니다. 하나의 제도를 먼저 신청한 후, 기각되거나 취하한 경우에 다른 제도를 신청할 수 있습니다. 처음부터 신중하게 선택하는 것이 중요합니다.',
      },
      {
        question: '개인회생 변제 중에 실직하면 어떻게 되나요?',
        answer: '실직으로 변제가 어려워지면 법원에 <strong>변제계획 변경 신청</strong>을 할 수 있습니다. 변제 기간 연장이나 월 변제액 조정이 가능하며, 불가피한 경우 개인파산으로 전환할 수도 있습니다.',
      },
      {
        question: '면책 후 다시 대출을 받을 수 있나요?',
        answer: '면책 확정 후에는 <strong>신용 회복이 가능</strong>합니다. 다만 금융기관 내부 심사 기준에 따라 일정 기간(보통 5~7년) 대출이 제한될 수 있으며, 신용회복위원회의 신용회복 프로그램을 활용하면 회복 속도를 높일 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인파산 진단', href: '/diagnosis/bankruptcy' },
      { label: '개인파산 면책까지의 절차', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 면책 요건 총정리', href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements' },
      { label: '면책심문 절차와 준비', href: '/guide/bankruptcy/discharge-hearing-procedure-preparation' },
    ],
  },
  {
    domain: 'child-sex-crime',
    slug: 'child-crime-accusation-investigation-response',
    keyword: '아동성범죄 혐의 수사 대응',
    questionKeyword: '아동성범죄 혐의로 수사를 받게 되었는데 어떻게 대응해야 하나요?',
    ctaKeyword: '아동성범죄 혐의 대응',
    type: '어디부터형',
    perspective: '가해자',
    meta: {
      title: '아동성범죄 혐의 수사 대응 4단계 절차 | 로앤가이드',
      description: '아동성범죄 혐의로 경찰 출석 요구를 받고 어떻게 대응해야 할지 모르겠다면, 수사 단계별 대응 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '경찰에서 아동·청소년 대상 성범죄 혐의로 출석하라는 연락이 왔습니다. 혐의를 받고 있다면 첫 진술 한마디가 사건의 향방을 좌우합니다. 수사 단계별로 무엇을 준비하고 어떻게 대응해야 하는지 확인해보세요.',
    sections: [
      {
        title: '첫째, 혐의 내용과 적용 법조문을 정확히 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률에 따라 아동·청소년 대상 성범죄는 가중처벌됩니다</strong></p>\n<p>먼저 출석요구서에 기재된 <strong>죄명과 적용 법조문</strong>을 확인하세요. 아동·청소년 성보호법은 19세 미만의 사람을 대상으로 한 성범죄를 일반 성범죄보다 무겁게 처벌합니다.</p>\n<p>성착취물 소지, 카메라 이용 촬영, 강제추행 등 <strong>혐의 유형에 따라 법정형이 크게 다릅니다</strong>. 자신에게 적용되는 정확한 죄명을 파악해야 효과적인 방어 전략을 세울 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인 사항: 출석요구서 죄명 → 적용 법조문 → 법정형 범위 파악</blockquote>',
      },
      {
        title: '둘째, 변호인을 선임하고 출석 전 방어 전략을 수립하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동성범죄는 중범죄로, 첫 진술부터 변호인의 조력이 필수적입니다</strong></p>\n<p>아동성범죄 혐의는 <strong>유죄 판결 시 신상정보 등록, 취업제한, 전자장치 부착</strong> 등 부수적 처분이 따르므로, 변호인 선임 없이 진술하는 것은 매우 위험합니다.</p>\n<p>변호인과 함께 사건 경위를 정리하고, <strong>혐의 사실 중 인정할 부분과 다툴 부분</strong>을 명확히 구분하세요. 디지털 증거가 관련된 경우 압수수색 과정의 적법성도 검토해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방어 준비: 변호인 선임 → 인정/부인 부분 구분 → 디지털 증거 적법성 검토</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-sex-crime" style="color:#1565c0;font-weight:600">내 아동성범죄 혐의 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 경찰 조사에서 진술 원칙을 지키세요',
        content:
          '<p><strong style="color:#1e3a5f">진술의 일관성이 수사 결과와 재판에 결정적 영향을 미칩니다</strong></p>\n<p>변호인과 미리 합의한 <strong>진술 범위를 벗어나는 답변은 하지 마세요</strong>. 수사관의 유도 질문에 감정적으로 대응하면 불리한 진술이 기록될 수 있습니다.</p>\n<p>특히 "혹시 그런 적 있지 않느냐"는 식의 <strong>추정적 질문에는 명확히 부인</strong>하세요. 조서 작성 후에는 반드시 전문을 읽고, 자신의 말과 다르게 기재된 부분은 수정을 요구하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 원칙: 변호인 합의 범위 내 답변 → 유도질문 주의 → 조서 전문 확인 후 서명</blockquote>',
      },
      {
        title: '넷째, 구속 여부와 보석 가능성을 미리 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동성범죄는 중한 범죄로 구속 수사 가능성이 높으므로 대비가 필요합니다</strong></p>\n<p>아동성범죄 혐의는 <strong>법정형이 높아 구속영장이 발부될 가능성</strong>이 있습니다. 구속을 방지하려면 주거가 일정하고, 도주 우려가 없으며, 증거인멸 가능성이 없다는 점을 소명해야 합니다.</p>\n<p>만약 구속된다면 <strong>구속적부심사</strong>를 청구하거나, 기소 후 <strong>보석</strong>을 신청할 수 있습니다. 가족 관계, 직업, 주거지 등 안정적인 생활 기반을 증명할 자료를 미리 준비해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구속 대비: 주거·직업 안정성 소명 → 구속적부심사 → 보석 신청 준비</blockquote>',
      },
      {
        title: '다섯째, 부수 처분(신상공개·취업제한)에 대비하세요',
        content:
          '<p><strong style="color:#1e3a5f">유죄 판결 시 신상정보 등록 20년, 아동·청소년 관련 기관 취업제한 10년이 부과됩니다</strong></p>\n<p>아동성범죄로 유죄가 확정되면 형벌 외에도 <strong>신상정보 등록·공개, 아동·청소년 관련 기관 취업제한, 전자장치 부착</strong> 등의 보안처분이 부과될 수 있습니다.</p>\n<p>이러한 부수 처분은 <strong>사회생활 전반에 장기적 영향</strong>을 미치므로, 재판 과정에서 양형 사유(초범, 반성, 재범 방지 노력 등)를 적극 주장하여 부수 처분의 범위를 최소화하는 전략이 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">부수 처분: 신상정보 등록 → 취업제한 → 전자장치 부착 → 양형 사유로 최소화</blockquote>',
      },
    ],
    cases: [
      {
        title: '디지털 성범죄에서 압수수색의 혐의사실 관련성에 관한 판결',
        summary:
          '대법원 2023도11395 사건(2025.06.12 선고)에서 법원은 전자정보 압수수색에서 혐의사실과 관련된 전자정보인지 판단할 때 구체적·개별적 연관관계를 살펴보아야 하며, 디지털 성범죄의 경우 동종 유형의 전자정보에서 발견되는 간접증거도 혐의사실과 관련성이 인정될 수 있다고 판시했습니다.',
        takeaway:
          '디지털 증거가 관련된 사건에서는 압수수색 범위와 증거 관련성이 핵심 쟁점이 됩니다. 수사기관의 압수수색이 영장 범위를 벗어났는지 변호인과 꼼꼼히 검토하세요.',
      },
    ],
    faq: [
      {
        question: '아동성범죄 혐의가 무고인 경우 어떻게 대응하나요?',
        answer: '사실과 다르게 신고되었다면 <strong>알리바이 증거, 통신 기록, CCTV</strong> 등 반증 자료를 체계적으로 확보하세요. 허위 신고가 입증되면 무고죄로 맞고소할 수 있습니다.',
      },
      {
        question: '국선변호인을 선임할 수 있나요?',
        answer: '구속 시에는 <strong>국선변호인이 자동 선정</strong>됩니다. 불구속 상태라도 경제적 사정이 어려우면 법원에 국선변호인 선정을 신청할 수 있습니다.',
      },
      {
        question: '합의하면 처벌이 줄어드나요?',
        answer: '피해자(법정대리인)와의 합의는 <strong>양형에 긍정적 영향</strong>을 줄 수 있습니다. 다만 아동성범죄는 친고죄가 아니므로 합의만으로 공소가 취소되지는 않습니다.',
      },
      {
        question: '수사 중에 해외 출국이 가능한가요?',
        answer: '수사기관이 <strong>출국금지</strong>를 요청하면 법무부가 출국을 금지할 수 있습니다. 출석 요구를 받은 상태에서 무단 출국하면 도주 우려로 구속될 가능성이 높아집니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '아동성범죄 진단', href: '/diagnosis/child-sex-crime' },
      { label: '아동성범죄 신고 의무 절차', href: '/guide/child-sex-crime/mandatory-reporting-procedure' },
      { label: '아동 피해 신고 시 필요 서류', href: '/guide/child-sex-crime/child-victim-report-required-documents' },
      { label: '2차 피해 방지 가이드', href: '/guide/child-sex-crime/preventing-secondary-harm-to-child' },
    ],
  },
  {
    domain: 'child-support',
    slug: 'retroactive-child-support-claim',
    keyword: '과거 양육비 소급 청구 가능 여부',
    questionKeyword: '이혼 후 혼자 키운 기간의 양육비도 받을 수 있나요?',
    ctaKeyword: '과거 양육비 청구',
    type: 'Q&A형',
    meta: {
      title: '과거 양육비 소급 청구 3가지 요건 — 기간·금액·절차 | 로앤가이드',
      description: '이혼 후 혼자 자녀를 키워왔는데 과거 양육비를 소급해서 받을 수 있을지 궁금하다면, 청구 요건과 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '이혼 후 5년간 아이를 혼자 키워왔습니다. 전 배우자에게 양육비를 한 번도 받지 못했는데, 지나간 기간의 양육비도 청구할 수 있는 건지 알 수 없었습니다. 과거 양육비 소급 청구가 가능한지, 어떤 절차를 밟아야 하는지 정리해보세요.',
    sections: [
      {
        title: '첫째, 과거 양육비 소급 청구는 원칙적으로 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">대법원 판례에 따르면 부모 중 한쪽만이 자녀를 양육한 경우 과거의 양육비 상환을 청구할 수 있습니다</strong></p>\n<p>양육비 이행확보 및 지원에 관한 법률 제3조에 따라 부모는 공동으로 양육비를 부담할 의무가 있습니다. 한쪽 부모만 양육을 담당했다면, <strong>양육하지 않은 부모에게 과거 기간에 해당하는 양육비</strong>를 청구할 수 있습니다.</p>\n<p>소급 청구의 기간은 법원이 <strong>형평의 원칙</strong>에 따라 구체적 사정을 고려하여 결정합니다. 이혼 시점부터 현재까지의 전 기간이 인정되는 경우도 있고, 일부만 인정되는 경우도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 과거 양육비 소급 청구 가능 → 기간은 법원이 형평에 따라 결정</blockquote>',
      },
      {
        title: '둘째, 가정법원에 양육비 심판을 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법 제2조에 따라 양육비 청구는 가정법원 마류 가사비송사건으로 처리됩니다</strong></p>\n<p>과거 양육비를 청구하려면 <strong>상대방 주소지 관할 가정법원</strong>에 양육비 심판 청구서를 제출해야 합니다. 청구서에는 양육 기간, 월 양육비 산정 근거, 자녀의 생활비 내역 등을 기재합니다.</p>\n<p>증빙 서류로 <strong>자녀의 교육비·의료비 영수증, 생활비 지출 내역, 카드 사용 내역</strong> 등을 준비하세요. 구체적인 지출 증빙이 있을수록 인정 금액이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 가정법원 양육비 심판 청구 → 양육 기간·비용 증빙 제출</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-support" style="color:#1565c0;font-weight:600">내 과거 양육비 청구 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 양육비 산정 기준과 금액을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">서울가정법원 양육비 산정 기준표를 참고하면 적정 양육비를 산출할 수 있습니다</strong></p>\n<p>법원은 양육비를 산정할 때 <strong>자녀의 나이, 부모 각자의 소득 수준, 재산 상태, 자녀의 필요 경비</strong> 등을 종합적으로 고려합니다. 서울가정법원의 양육비 산정 기준표에 따르면 자녀 1인당 월 <strong>100만~200만원</strong> 수준이 일반적입니다.</p>\n<p>과거 양육비의 경우 <strong>해당 기간의 물가 수준과 소득 수준</strong>을 반영하여 산정되므로, 현재 기준과 다를 수 있습니다. 자녀가 성장하면서 양육비가 증가하는 점도 반영됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">산정 기준: 자녀 나이·부모 소득·재산 → 산정표 참고 → 과거 물가 반영</blockquote>',
      },
      {
        title: '넷째, 양육비 이행확보 제도를 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비 이행확보 및 지원에 관한 법률에 따라 한시적 양육비 긴급지원도 받을 수 있습니다</strong></p>\n<p>양육비 심판이 확정되었는데 상대방이 지급하지 않으면 <strong>양육비이행관리원</strong>에 이행확보 지원을 신청할 수 있습니다. 이행관리원은 양육비 채무자에 대한 이행 명령, 감치, 운전면허 정지 등의 <strong>강제 이행 수단</strong>을 지원합니다.</p>\n<p>또한 양육비를 받지 못하는 기간 동안 <strong>한시적 양육비 긴급지원</strong>(월 최대 20만원)을 먼저 받을 수 있으며, 이후 양육비 채무자로부터 구상합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이행 확보: 양육비이행관리원 지원 → 감치·면허 정지 → 긴급지원 월 20만원</blockquote>',
      },
      {
        title: '다섯째, 소멸시효와 청구 시기를 놓치지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비 채권의 소멸시효는 확정 판결 시 10년, 미확정 시 일반 채권과 동일하게 적용됩니다</strong></p>\n<p>이미 심판이나 판결로 확정된 양육비 채권은 <strong>10년의 소멸시효</strong>가 적용됩니다. 아직 청구하지 않은 과거 양육비는 가급적 빨리 심판을 청구하는 것이 유리합니다.</p>\n<p>자녀가 <strong>성년(만 19세)에 도달</strong>하면 양육비 청구 자체가 어려워질 수 있으므로, 미성년 자녀가 있을 때 서둘러 청구하세요. 자녀가 여러 명이면 각 자녀별로 양육비를 별도 산정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시효 주의: 확정 판결 10년 → 자녀 성년 전 조기 청구 → 자녀별 별도 산정</blockquote>',
      },
    ],
    cases: [
      {
        title: '미성년후견인의 양육비 청구 자격을 인정한 판결',
        summary:
          '대법원 2019스621 사건(2021.05.27 선고)에서 법원은 가정법원이 부모의 친권 중 양육권을 제한하여 미성년후견인이 양육권을 행사하도록 결정한 경우, 민법 제837조를 유추적용하여 미성년후견인도 비양육친을 상대로 양육비 심판을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '부모가 아닌 사람이 실질적으로 자녀를 양육하고 있더라도 양육비를 청구할 수 있습니다. 법적 양육자 지위를 확보한 후 비양육친에게 과거 양육비를 청구하세요.',
      },
    ],
    faq: [
      {
        question: '이혼할 때 양육비를 안 정하고 헤어졌어도 청구할 수 있나요?',
        answer: '네, <strong>이혼 시 양육비를 정하지 않았더라도 언제든 가정법원에 양육비 심판을 청구</strong>할 수 있습니다. 이혼 합의서에 양육비 조항이 없어도 법적 청구권은 유지됩니다.',
      },
      {
        question: '혼인 외 자녀(미혼모·미혼부)도 양육비를 청구할 수 있나요?',
        answer: '<strong>인지(認知)가 이루어진 경우</strong> 혼인 외 자녀도 양육비를 청구할 수 있습니다. 상대방이 인지를 거부하면 법원에 인지 청구의 소를 먼저 제기해야 합니다.',
      },
      {
        question: '상대방이 소득이 없다고 주장하면 어떻게 하나요?',
        answer: '법원에 <strong>상대방의 금융거래정보 조회, 국세청 소득자료 조회</strong>를 신청할 수 있습니다. 실제 소득이 없더라도 근로능력이 있다면 추정소득을 기준으로 양육비가 산정됩니다.',
      },
      {
        question: '과거 양육비를 일시금으로 받을 수 있나요?',
        answer: '법원은 과거 양육비를 <strong>일시금으로 지급하도록 명할 수 있습니다</strong>. 다만 상대방의 지급 능력에 따라 분할 지급으로 결정되는 경우도 있습니다.',
      },
      {
        question: '재혼해도 과거 양육비를 청구할 수 있나요?',
        answer: '<strong>재혼 여부와 관계없이</strong> 과거 양육비 청구권은 유지됩니다. 재혼 배우자가 자녀와 양자 관계를 맺지 않는 한, 친부모의 양육비 부담 의무는 계속됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/child-support',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '양육비 진단', href: '/diagnosis/child-support' },
      { label: '양육비 청구 소송 절차', href: '/guide/child-support/child-support-lawsuit-process' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 강제 이행 방법', href: '/guide/child-support/child-support-enforcement-method' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'truth-still-defamation-reason',
    keyword: '사실을 말했는데도 명예훼손이 되는 이유',
    questionKeyword: '진짜 사실인데도 명예훼손으로 처벌받을 수 있나요?',
    ctaKeyword: '사실적시 명예훼손',
    type: '실수함정형',
    meta: {
      title: '명예훼손 고소당했을 때 대응법·3가지 방어 전략 | 로앤가이드',
      description: '명예훼손으로 고소당했을 때 어떻게 대응해야 할까요? 사실적시 명예훼손 성립 요건과 위법성 조각 방어 전략을 지금 확인하세요.',
    },
    intro: '직장 동료의 비리를 SNS에 올렸습니다. 거짓이 아니라 진짜 사실인데, 상대방이 명예훼손으로 고소하겠다고 합니다. 사실을 말했는데도 처벌받을 수 있다니 납득이 안 됩니다. 왜 사실을 말해도 명예훼손이 되는지, 어떻게 방어해야 하는지 확인해보세요.',
    sections: [
      {
        title: '첫째, 한국 법률은 사실 적시도 명예훼손으로 처벌합니다',
        content:
          '<p><strong style="color:#1e3a5f">형법 제307조 제1항에 따라 공연히 사실을 적시하여 사람의 명예를 훼손한 자는 2년 이하의 징역이나 금고 또는 500만원 이하의 벌금에 처합니다</strong></p>\n<p>많은 사람들이 "사실이면 문제없다"고 생각하지만, <strong>한국 형법은 사실 적시에 의한 명예훼손도 별도 범죄</strong>로 규정하고 있습니다. 허위사실 적시(제307조 제2항)보다 형량은 낮지만 엄연히 처벌 대상입니다.</p>\n<p>핵심 요건은 3가지입니다. ①<strong>공연성</strong>(불특정 또는 다수인이 인식할 수 있는 상태) ②<strong>사실의 적시</strong>(구체적 사실 표현) ③<strong>명예훼손</strong>(사회적 평가 저하). 이 세 가지가 충족되면 사실이어도 처벌됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3가지 요건: 공연성 + 사실의 적시 + 명예훼손(사회적 평가 저하)</blockquote>',
      },
      {
        title: '둘째, 비방 목적이 있으면 정보통신망법으로 가중처벌됩니다',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항에 따라 인터넷에서의 사실 적시 명예훼손은 3년 이하의 징역 또는 3천만원 이하의 벌금에 처합니다</strong></p>\n<p>SNS, 블로그, 온라인 커뮤니티 등 <strong>정보통신망을 통해</strong> 사실을 적시한 경우에는 형법이 아닌 정보통신망법이 적용되며, <strong>형량이 더 무겁습니다</strong>.</p>\n<p>여기서 추가로 필요한 요건은 <strong>"비방할 목적"</strong>입니다. 법원은 표현의 동기, 경위, 방법, 내용 등을 종합적으로 판단하여 비방 목적을 인정합니다. 단순히 사실 전달이 아니라 상대방을 깎아내리려는 의도가 있었는지가 핵심입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">인터넷 명예훼손: 비방 목적 + 사실 적시 → 3년 이하 징역 또는 3천만원 이하 벌금</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/defamation" style="color:#1565c0;font-weight:600">내 명예훼손 혐의 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 위법성 조각사유로 무죄가 될 수 있는 경우를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제310조에 따라 공익을 위한 사실 적시는 위법성이 조각되어 처벌받지 않습니다</strong></p>\n<p>사실 적시 명예훼손이 성립하더라도 <strong>3가지 요건을 모두 충족하면 위법성이 조각</strong>되어 무죄가 됩니다. ①적시한 사실이 <strong>진실한 사실</strong>일 것 ②그것이 오로지 <strong>공공의 이익</strong>에 관한 것일 것 ③적시 방법이 <strong>상당</strong>할 것.</p>\n<p>"공공의 이익"은 사회 일반의 이익에 관한 것으로, <strong>소비자 피해 방지, 부정부패 고발, 공직자의 비위 폭로</strong> 등이 해당합니다. 단순히 개인적 분풀이 목적이면 공익성이 인정되지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">위법성 조각 3요건: 진실한 사실 + 공공의 이익 + 상당한 방법</blockquote>',
      },
      {
        title: '넷째, 사실과 의견을 구별하세요 — 의견 표현은 모욕죄의 문제입니다',
        content:
          '<p><strong style="color:#1e3a5f">구체적 사실의 적시 없이 부정적 가치 판단을 표현한 것은 모욕죄로 판단됩니다</strong></p>\n<p>명예훼손은 <strong>구체적 사실의 적시</strong>가 필요합니다. "그 사람은 최악이다"처럼 추상적 가치 판단을 표현한 것은 명예훼손이 아니라 <strong>모욕죄</strong>(형법 제311조)에 해당할 수 있습니다.</p>\n<p>법원은 표현의 내용이 <strong>"검증 가능한 구체적 사실인지"</strong> 아니면 <strong>"주관적 평가·의견인지"</strong>를 기준으로 구분합니다. 자신의 표현이 사실 적시인지 의견 표명인지를 파악하면 방어 전략이 달라집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구분: 구체적 사실 적시 = 명예훼손 / 추상적 가치 판단 = 모욕죄</blockquote>',
      },
      {
        title: '다섯째, 고소를 당했다면 즉시 증거를 확보하고 대응하세요',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손죄는 반의사불벌죄이므로, 피해자가 처벌을 원하지 않으면 공소를 제기할 수 없습니다</strong></p>\n<p>사실적시 명예훼손죄(형법 제307조 제1항)는 <strong>반의사불벌죄</strong>입니다. 따라서 피해자와 합의하고 처벌불원서를 받으면 형사처벌을 면할 수 있습니다.</p>\n<p>방어를 위해 <strong>해당 사실이 진실임을 증명할 자료</strong>(문서, 녹취, 사진 등)를 즉시 확보하세요. 또한 게시 동기가 <strong>공익 목적이었음을 입증할 정황</strong>(내부 고발, 소비자 피해 사례 수집 등)도 정리해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 대응: 사실 증명 자료 확보 → 공익 목적 정황 정리 → 합의 검토</blockquote>',
      },
      {
        title: '명예훼손 고소당했을 때 가장 먼저 할 일',
        content: '<p><strong style="color:#1e3a5f">고소 통지를 받았다면 당황하지 말고 3가지를 먼저 확인하세요.</strong></p>\n<ul>\n<li><strong>게시물 즉시 삭제 여부 판단</strong> — 게시물을 삭제하면 반성의 표시로 참작될 수 있지만, 증거 보전 차원에서 스크린샷을 먼저 남겨두세요. 삭제 자체가 불리하게 작용하지는 않습니다</li>\n<li><strong>작성 경위와 목적 정리</strong> — 왜 그 글을 썼는지, 공익 목적이었는지, 사실 확인을 어떻게 했는지를 시간순으로 정리하세요. 경찰 조사 전에 정리해두면 일관된 진술이 가능합니다</li>\n<li><strong>변호사 상담</strong> — 경찰 출석 전에 반드시 변호사 상담을 받으세요. 첫 진술이 사건의 방향을 결정하므로 혼자 판단하지 마세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 스크린샷 보관 → 작성 경위 정리 → 변호사 상담 후 출석</blockquote>',
      },
    ],
    cases: [
      {
        title: '허위사실 공표에 대한 판단 기준을 제시한 판결',
        summary:
          '대법원 2025도4697 사건(2025.05.01 선고)에서 법원은 어떤 표현이 허위사실 공표에 해당하는지 판단할 때 일반인이 그 표현을 접하는 통상의 방법을 전제로 표현의 전체적인 취지와 객관적 내용을 종합적으로 고려해야 한다고 판시하며, 사실과 의견의 구별 기준을 구체화했습니다.',
        takeaway:
          '자신의 표현이 명예훼손에 해당하는지는 전체 맥락에서 판단됩니다. 단순히 "사실이다"라고 주장하는 것만으로는 부족하고, 표현의 동기, 방법, 공익성을 모두 입증해야 합니다.',
      },
    ],
    faq: [
      {
        question: '사적 대화에서 한 말도 명예훼손이 되나요?',
        answer: '1:1 대화는 원칙적으로 <strong>공연성이 인정되지 않아 명예훼손이 성립하지 않습니다</strong>. 다만 상대방이 다른 사람에게 전파할 가능성이 있다고 인정되면 공연성이 인정될 수 있습니다(전파가능성 이론).',
      },
      {
        question: '언론 보도를 퍼 나른 것도 명예훼손이 되나요?',
        answer: '<strong>언론 보도 내용을 그대로 공유한 경우에도 명예훼손이 될 수 있습니다</strong>. 원 보도가 사실이더라도 비방 목적으로 특정인을 지목하며 공유하면 처벌 대상이 됩니다.',
      },
      {
        question: '온라인 리뷰에 사실을 적었는데 명예훼손인가요?',
        answer: '소비자 경험에 기반한 <strong>진실한 사실의 리뷰는 공익성이 인정</strong>될 수 있습니다. 다만 리뷰의 표현이 과도하게 비방적이거나 사실과 다른 부분이 포함되면 명예훼손으로 판단될 수 있습니다.',
      },
      {
        question: '사실적시 명예훼손은 벌금으로 끝나나요?',
        answer: '형법상 사실적시 명예훼손의 법정형은 <strong>2년 이하의 징역 또는 500만원 이하의 벌금</strong>입니다. 초범이고 피해가 크지 않으면 벌금형이 일반적이지만, 정보통신망을 이용한 경우 3년 이하의 징역까지 선고될 수 있습니다.',
      },
      {
        question: '명예훼손으로 고소당했을 때 가장 먼저 해야 할 일은 무엇인가요?',
        answer: '<strong>게시물 스크린샷을 보관하고, 작성 경위를 시간순으로 정리한 뒤, 경찰 출석 전에 변호사 상담을 받으세요.</strong> 첫 진술이 사건 방향을 결정하므로 혼자 판단하지 않는 것이 중요합니다. 공익 목적이나 사실 확인 과정을 소명할 자료도 미리 준비하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '명예훼손 가이드', href: '/guide/defamation' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '온라인 명예훼손 대응 가이드', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 고소장 작성법', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '온라인 명예훼손 증거 수집', href: '/guide/defamation/online-defamation-evidence-collection' },
    ],
  },
];
