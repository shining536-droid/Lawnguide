import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 22. 이 페이지는 [투자 사기 피해자]의 [형사고소와 민사소송 중 먼저 해야 할 절차를 모르는 상황]에서 [두 절차의 차이를 비교하여 최적의 전략을 선택하도록] 돕는 페이지다.
// 23. 이 페이지는 [보이스피싱 피해를 입은 사람]의 [피해금을 돌려받기 위한 구제 절차를 모르는 상황]에서 [시간순 구제 절차를 파악하도록] 돕는 페이지다.
// 24. 이 페이지는 [협의이혼을 앞둔 부부]의 [법원에 제출해야 할 서류 목록을 모르는 상황]에서 [서류를 빠짐없이 준비하도록] 돕는 페이지다.
// 25. 이 페이지는 [양육비를 받지 못하고 있는 양육자]의 [이행명령 신청 절차를 모르는 상황]에서 [구체적인 신청 방법과 제재 수단을 파악하도록] 돕는 페이지다.
// 26. 이 페이지는 [이혼 시 배우자의 퇴직연금을 분할받으려는 사람]의 [청구 절차와 요건을 모르는 상황]에서 [분할 방법과 필요 서류를 파악하도록] 돕는 페이지다.
// 27. 이 페이지는 [개인회생 신청을 준비하는 채무자]의 [기각 사유를 모르는 상황]에서 [주요 기각 사유 5가지와 사전 방지 방법을 파악하도록] 돕는 페이지다.
// 28. 이 페이지는 [파산 면책을 기대하고 있는 채무자]의 [면책되지 않는 채무 종류를 모르는 상황]에서 [비면책채무를 미리 파악하여 현실적인 계획을 세우도록] 돕는 페이지다.

export const spokesBatch24_22to28: SpokePage[] = [
  // ───────────────────────────────────────────
  // 22. fraud / investment-fraud-criminal-vs-civil
  // ───────────────────────────────────────────
  {
    domain: 'fraud',
    slug: 'investment-fraud-criminal-vs-civil',
    keyword: '투자 사기 형사고소 민사소송 비교',
    questionKeyword: '투자 사기 피해를 입었는데 형사고소와 민사소송 중 뭘 먼저 해야 하나요?',
    ctaKeyword: '투자 사기 대응 전략',
    type: '비교형',
    perspective: '피해자',
    meta: {
      title: '투자 사기 형사고소 vs 민사소송 3가지 비교 | 로앤가이드',
      description:
        '투자 사기를 당해서 형사고소와 민사소송 중 뭘 먼저 해야 할지 고민되시나요? 두 절차의 차이와 전략적 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"수익률 보장"이라는 말에 투자금을 넘겼는데, 어느 날부터 연락이 두절되었습니다.</p><p>경찰에 고소해야 하는지, 법원에 소송을 걸어야 하는지, 아니면 둘 다 해야 하는지 판단이 서지 않습니다.</p><p>형사고소와 민사소송은 목적이 완전히 다릅니다. 형사는 가해자의 처벌, 민사는 피해금의 회수를 목표로 합니다.</p><p>두 절차를 언제, 어떤 순서로 진행해야 유리한지 비교해 정리했습니다.</p>',
    sections: [
      {
        title: '1단계 — 형사고소와 민사소송의 핵심 차이를 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">목적이 다르면 전략도 달라집니다</strong></p>\n<p><strong>형사고소</strong>는 수사기관에 가해자의 범죄사실을 신고하여 <strong>처벌을 구하는 절차</strong>입니다. 형법 제347조(사기죄)에 따라 10년 이하의 징역 또는 2천만원 이하의 벌금에 처해질 수 있습니다.</p>\n<p><strong>민사소송</strong>은 법원에 <strong>피해금 반환을 청구하는 절차</strong>입니다. 가해자가 처벌받더라도 돈이 자동으로 돌아오지 않기 때문에 별도로 진행해야 합니다.</p>\n<ul>\n<li><strong>형사고소</strong> — 가해자 처벌 + 수사과정에서 재산 추적 가능. 합의금 압박 효과</li>\n<li><strong>민사소송</strong> — 판결문으로 강제집행 가능. 부동산·예금·급여 압류 가능</li>\n<li><strong>동시 진행</strong> — 두 절차는 별개이므로 동시에 할 수 있습니다. 형사 수사 기록을 민사 소송 증거로 활용하면 입증이 수월합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사 = 처벌 + 합의 압박 | 민사 = 돈 회수 + 강제집행 | 목적에 따라 순서가 달라집니다</blockquote>',
      },
      {
        title: '2단계 — 상황별 우선순위를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">가해자의 재산 상태와 증거 확보 여부가 순서를 결정합니다</strong></p>\n<p>투자 사기에서 가장 중요한 건 <strong>돈을 실제로 돌려받을 수 있는가</strong>입니다. 가해자가 재산을 숨기거나 빼돌리면 민사 판결을 받아도 집행할 대상이 없습니다.</p>\n<ul>\n<li><strong>형사고소 먼저</strong>가 유리한 경우 — 가해자가 재산을 은닉하거나 도주할 가능성이 있을 때. 수사기관이 계좌 추적·출국금지·체포 조치를 할 수 있습니다</li>\n<li><strong>민사소송 먼저</strong>가 유리한 경우 — 가해자의 부동산·예금 등 재산이 확인되고, 빠르게 <strong>가압류</strong>로 재산을 동결해야 할 때</li>\n<li><strong>동시 진행</strong>이 유리한 경우 — 증거가 충분하고 금액이 클 때. 형사 수사 기록이 민사 증거로 바로 연결됩니다</li>\n<li><strong>주의</strong> — 형사 합의 시 민사 청구권 포기 조항이 들어가는 경우가 있으므로, 합의서 내용을 반드시 확인하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 투자 사기 피해 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 절차별 준비사항을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">어떤 절차를 선택하든 증거 확보가 먼저입니다</strong></p>\n<p>형사고소와 민사소송 모두 <strong>피해 사실을 입증할 증거</strong>가 핵심입니다. 투자 계약서, 송금 내역, 카카오톡 대화 기록, 수익률 보장 광고물 등을 먼저 확보하세요.</p>\n<ul>\n<li><strong>형사고소 준비</strong> — 고소장 작성(피해 경위 시간순 정리), 송금 확인증, 계약서·약정서, 대화 스크린샷, 광고·홍보 자료. 관할 경찰서 또는 검찰에 접수</li>\n<li><strong>민사소송 준비</strong> — 소장 작성, 채권가압류 신청(재산 도주 방지), 증거목록, 손해액 계산서. 가해자 주소지 또는 불법행위지 관할 법원에 제출</li>\n<li><strong>공통 주의사항</strong> — 증거 원본은 별도 보관하고, 스크린샷은 날짜·시간이 보이도록 저장하세요. 상대방이 메시지를 삭제할 수 있으므로 빠른 확보가 중요합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보 → 형사고소 또는 민사소송(또는 동시) → 합의 시 청구권 포기 조항 확인</blockquote>',
      },
    ],
    comparison: {
      title: '형사고소 vs 민사소송 비교',
      headers: ['구분', '형사고소', '민사소송'],
      rows: [
        { label: '목적', values: ['가해자 처벌', '피해금 회수'] },
        { label: '신청 대상', values: ['경찰서·검찰', '법원'] },
        { label: '비용', values: ['무료', '인지대·송달료 발생'] },
        { label: '소요 기간', values: ['수사 3~6개월, 재판 6개월~1년', '6개월~1년(가압류 별도)'] },
        { label: '돈 회수 가능성', values: ['합의금 형태로 가능', '판결 후 강제집행 가능'] },
        { label: '재산 보전', values: ['수사기관 계좌 추적', '가압류·가처분 신청'] },
        { label: '적합한 상황', values: ['재산 은닉·도주 우려 시', '재산 확인됨, 빠른 동결 필요 시'] },
      ],
    },
    cases: [
      {
        title: '대법원 2025도14142 — 보이스피싱 범죄단체 활동 처벌',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15. 선고)에서 법원은 전기통신금융사기(보이스피싱) 범죄행위를 목적으로 하는 단체를 구성하거나 가입·활동하는 행위를 폭력행위등처벌에관한법률위반으로 처벌할 수 있다고 판시했습니다.',
        takeaway:
          '조직적 투자 사기의 경우 단순 사기죄를 넘어 범죄단체 관련 가중처벌이 가능합니다. 피해자는 형사고소 시 조직적 범행 정황을 함께 제출하면 수사가 강화될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '형사고소를 하면 돈을 자동으로 돌려받을 수 있나요?',
        answer:
          '아닙니다. 형사 절차는 가해자의 <strong>처벌</strong>이 목적이므로, 피해금 회수를 원한다면 별도로 <strong>민사소송 또는 형사 합의</strong>를 진행해야 합니다. 다만 수사 과정에서 가해자에게 합의 압박이 가해지므로 돈을 돌려받을 가능성이 높아질 수 있습니다.',
      },
      {
        question: '투자 사기인지 단순 투자 실패인지 어떻게 구별하나요?',
        answer:
          '핵심은 <strong>기망 행위</strong>입니다. 처음부터 돈을 돌려줄 의사 없이 수익률을 거짓으로 보장했다면 사기죄가 성립합니다. 반면 실제로 투자를 시도했으나 손실이 발생한 경우라면 민사 분쟁에 해당할 수 있습니다.',
      },
      {
        question: '가해자가 재산을 빼돌리고 있는데 어떻게 막나요?',
        answer:
          '민사상 <strong>채권가압류</strong>를 법원에 신청하면 부동산·예금·급여를 동결할 수 있습니다. 형사고소와 병행하면 수사기관이 계좌 추적과 출국금지 조치를 할 수 있어 더 효과적입니다.',
      },
      {
        question: '형사 합의할 때 민사 청구권을 포기해야 하나요?',
        answer:
          '합의서에 <strong>"민사상 일체의 청구를 포기한다"</strong>는 조항이 포함되면, 이후 민사소송이 어려워질 수 있습니다. 합의서 작성 시 반드시 이 조항을 확인하고, 전액 배상이 아니라면 민사 청구권 유보 문구를 넣으세요.',
      },
      {
        question: '피해금액이 적어도 형사고소가 가능한가요?',
        answer:
          '가능합니다. 사기죄는 피해 금액에 관계없이 성립합니다. 다만 소액 피해의 경우 수사 우선순위가 낮아질 수 있으므로, 같은 가해자에게 피해를 입은 다른 피해자들과 <strong>공동 고소</strong>를 하면 수사력이 집중됩니다.',
      },
    ],
    cta: {
      text: '투자 사기 피해 상황에 맞는 대응 전략을 확인해보세요',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 민사소송 절차 안내', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '사기 형사고소 절차 정리', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기 신고 증거 체크리스트', href: '/guide/fraud/fraud-report-evidence-checklist' },
      { label: '사기 합의금 협상 가이드', href: '/guide/fraud/fraud-settlement-negotiation-guide' },
      { label: '투자 사기 피해금 회수 전략', href: '/guide/fraud/investment-fraud-recovery-strategy' },
    ],
  },

  // ───────────────────────────────────────────
  // 23. fraud / voice-phishing-fund-recovery-process
  // ───────────────────────────────────────────
  {
    domain: 'fraud',
    slug: 'voice-phishing-fund-recovery-process',
    keyword: '보이스피싱 피해금 환급 절차',
    questionKeyword: '보이스피싱 피해금을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '보이스피싱 피해금 환급',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '보이스피싱 피해금 환급 4단계 절차 안내 | 로앤가이드',
      description:
        '보이스피싱으로 돈을 보냈는데 돌려받을 수 있는지 궁금하시나요? 112 신고부터 피해금 환급까지 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>모르는 번호로 걸려온 전화를 받은 지 30분 만에 통장 잔액이 0원이 되었습니다.</p><p>"검찰 수사관"이라며 계좌이체를 유도했고, 정신을 차리고 보니 이미 돈이 빠져나간 뒤였습니다.</p><p>보이스피싱 피해금은 빠르게 대응하면 일부 또는 전부를 돌려받을 수 있습니다. 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법이 이를 뒷받침합니다.</p><p>지금부터 시간순으로 해야 할 4단계를 정리했습니다.</p>',
    timelineSteps: [
      '1단계: 즉시 112 신고 + 계좌 지급정지',
      '2단계: 피해금 환급 신청',
      '3단계: 금융감독원 환급 심사',
      '4단계: 잔여금 배분 또는 민사 청구',
    ],
    sections: [
      {
        title: '1단계 — 즉시 112 신고와 계좌 지급정지를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">피해 인지 후 가장 먼저 할 일은 계좌를 멈추는 것입니다</strong></p>\n<p>보이스피싱 피해를 인지한 즉시 <strong>112에 전화</strong>하거나 <strong>송금 은행 고객센터</strong>에 연락하여 사기 이용 계좌의 <strong>지급정지</strong>를 요청하세요. 전기통신금융사기 피해방지법 제3조에 따라 금융회사는 피해 신고를 받으면 즉시 해당 계좌의 지급을 정지해야 합니다.</p>\n<ul>\n<li><strong>112 신고</strong> — 경찰이 금융회사에 지급정지를 요청합니다. 전화 한 통으로 가장 빠르게 처리됩니다</li>\n<li><strong>은행 고객센터</strong> — 직접 전화하여 "보이스피싱 피해 지급정지 요청"이라고 말하면 됩니다. 24시간 접수 가능</li>\n<li><strong>시간이 핵심</strong> — 범인이 돈을 인출하기 전에 정지해야 합니다. 피해 인지 후 <strong>30분 이내</strong> 신고가 환급 가능성을 크게 높입니다</li>\n<li><strong>여러 계좌 경유</strong> — 돈이 여러 계좌로 이체된 경우, 경유 계좌까지 모두 지급정지를 요청하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 피해 인지 즉시 112 + 은행 고객센터 → 계좌 지급정지 → 빠를수록 환급 가능성 상승</blockquote>',
      },
      {
        title: '2단계 — 피해금 환급 신청서를 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">지급정지 후 피해구제 신청을 해야 환급 절차가 시작됩니다</strong></p>\n<p>지급정지만으로는 돈이 돌아오지 않습니다. <strong>경찰서에서 사건사고사실확인원</strong>을 발급받은 뒤, 송금 은행에 <strong>피해금 환급 신청서</strong>를 제출해야 합니다.</p>\n<ul>\n<li><strong>신청 장소</strong> — 피해자가 송금한 은행 영업점 (온라인 신청 가능한 은행도 있음)</li>\n<li><strong>필요 서류</strong> — 신분증, 사건사고사실확인원(경찰서 발급), 피해금 환급 신청서, 송금 내역 증빙</li>\n<li><strong>신청 기한</strong> — 지급정지일로부터 <strong>30일 이내</strong>에 신청해야 합니다. 기한을 넘기면 환급 대상에서 제외될 수 있습니다</li>\n<li><strong>주의</strong> — 사건사고사실확인원은 경찰 신고 후 발급받을 수 있으므로, 112 신고와 가까운 경찰서 방문을 병행하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보이스피싱 피해 환급 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3~4단계 — 환급 심사와 잔여금 배분을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원이 심사하고, 정지된 계좌의 잔액 범위 내에서 환급됩니다</strong></p>\n<p>피해금 환급 신청이 접수되면 <strong>금융감독원</strong>이 피해 사실을 심사합니다. 심사 완료 후 사기 이용 계좌에 남아 있는 금액을 기준으로 피해자에게 환급합니다.</p>\n<ul>\n<li><strong>3단계: 환급 심사</strong> — 금융감독원이 채권소멸 공고(2개월) 후 환급 여부를 결정합니다. 공고 기간 동안 명의인(범인)이 이의를 제기하지 않으면 환급이 확정됩니다</li>\n<li><strong>4단계: 잔여금 배분</strong> — 정지된 계좌에 남아 있는 금액을 피해자 수와 피해금 비율에 따라 배분합니다. 피해금 전액이 남아 있으면 전액 환급, 일부만 남아 있으면 비율 배분됩니다</li>\n<li><strong>부족한 경우</strong> — 환급금이 피해액에 미치지 못하면, 범인을 상대로 <strong>민사소송</strong>(손해배상 청구)을 별도로 제기할 수 있습니다</li>\n<li><strong>소요 기간</strong> — 지급정지부터 환급까지 약 <strong>3~4개월</strong>이 소요됩니다. 채권소멸 공고 기간(2개월)이 가장 큰 비중을 차지합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">환급 심사(2개월 공고) → 잔여금 비율 배분 → 부족분은 민사소송으로 청구 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도14142 — 보이스피싱 범죄단체 구성·활동 처벌',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15. 선고)에서 법원은 전기통신금융사기(보이스피싱) 범죄행위를 목적으로 하는 단체를 구성하거나 가입하여 구성원으로 활동하는 행위를 폭력행위등처벌에관한법률위반으로 처벌할 수 있다고 판시했습니다.',
        takeaway:
          '보이스피싱은 조직 범죄로 가중처벌되며, 피해자는 전기통신금융사기 피해방지법에 따라 피해금 환급을 신청할 수 있습니다. 빠른 지급정지가 환급의 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '지급정지를 했는데 계좌에 돈이 남아 있지 않으면 어떻게 되나요?',
        answer:
          '범인이 이미 인출한 경우 환급금이 0원일 수 있습니다. 이 경우 범인을 상대로 <strong>민사소송(손해배상 청구)</strong>을 제기하거나, 형사 절차에서 <strong>합의금</strong>을 받는 방법을 검토하세요.',
      },
      {
        question: '보이스피싱 피해 환급에 비용이 드나요?',
        answer:
          '피해금 환급 신청 자체는 <strong>무료</strong>입니다. 다만 민사소송을 별도로 제기하는 경우 인지대와 송달료가 발생합니다.',
      },
      {
        question: '가족 명의 계좌로 보낸 경우에도 환급 신청이 가능한가요?',
        answer:
          '실제 피해자가 누구인지가 기준입니다. 가족 명의 계좌에서 송금했더라도 <strong>실제 피해자 본인</strong>이 환급 신청을 할 수 있습니다. 경찰 신고 시 피해 경위를 정확히 설명하세요.',
      },
      {
        question: '피해금 환급까지 얼마나 걸리나요?',
        answer:
          '지급정지 후 채권소멸 공고(2개월)와 심사를 거쳐 약 <strong>3~4개월</strong>이 소요됩니다. 피해자가 여러 명이면 배분 절차로 추가 시간이 걸릴 수 있습니다.',
      },
      {
        question: '지급정지 요청은 몇 시까지 가능한가요?',
        answer:
          '112 신고와 은행 고객센터 모두 <strong>24시간 접수</strong>가 가능합니다. 새벽이든 주말이든 피해를 인지한 즉시 연락하세요. 시간이 지날수록 범인이 돈을 인출할 가능성이 높아집니다.',
      },
    ],
    cta: {
      text: '보이스피싱 피해 상황에 맞는 환급 절차를 확인해보세요',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 신고 증거 체크리스트', href: '/guide/fraud/fraud-report-evidence-checklist' },
      { label: '사기 형사고소 절차 정리', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기 민사소송 절차 안내', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '사기 합의금 협상 가이드', href: '/guide/fraud/fraud-settlement-negotiation-guide' },
      { label: '온라인 사기 증거 보전 방법', href: '/guide/fraud/online-fraud-evidence-preservation' },
    ],
  },

  // ───────────────────────────────────────────
  // 24. divorce / uncontested-divorce-document-checklist
  // ───────────────────────────────────────────
  {
    domain: 'divorce',
    slug: 'uncontested-divorce-document-checklist',
    keyword: '협의이혼 서류 체크리스트',
    questionKeyword: '협의이혼 할 때 어떤 서류를 준비해야 하나요?',
    ctaKeyword: '협의이혼 서류 준비',
    type: '체크리스트형',
    perspective: '일반',
    meta: {
      title: '협의이혼 서류 7가지 체크리스트 완벽 정리 | 로앤가이드',
      description:
        '협의이혼을 준비하고 있는데 어떤 서류를 챙겨야 할지 막막하시나요? 법원 제출 서류부터 양육·재산 합의서까지 지금 확인하세요.',
    },
    intro:
      '<p>서로 이혼에 합의했지만, 막상 법원에 가려니 어떤 서류를 준비해야 하는지 알 수가 없습니다.</p><p>인터넷에는 정보가 제각각이고, 혹시 서류 하나를 빠뜨리면 다시 방문해야 하는 건 아닌지 걱정됩니다.</p><p>협의이혼은 가정법원에 직접 출석하는 절차이기 때문에, 서류가 빠지면 그날 처리가 불가능할 수 있습니다.</p><p>법원에 한 번만 가면 되도록 필요한 서류를 빠짐없이 정리했습니다.</p>',
    sections: [
      {
        title: '필수 서류 — 법원 제출용 기본 서류를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">아래 서류가 하나라도 빠지면 접수가 되지 않습니다</strong></p>\n<p>협의이혼은 <strong>가정법원</strong>에 쌍방이 출석하여 이혼 의사를 확인받는 절차입니다. 민법 제836조에 따라 가정법원의 확인을 받아야 이혼 신고를 할 수 있습니다.</p>\n<ul>\n<li><strong>협의이혼의사확인신청서</strong> — 법원 민원실 비치 양식 또는 대법원 전자소송 홈페이지에서 다운로드. 부부 각각 서명·날인</li>\n<li><strong>혼인관계증명서</strong>(상세) — 주민센터·정부24에서 발급. 3개월 이내 발급본</li>\n<li><strong>가족관계증명서</strong>(상세) — 부부 각각 1통. 미성년 자녀 유무 확인용</li>\n<li><strong>주민등록등본</strong> — 부부 각각 1통. 3개월 이내 발급본</li>\n<li><strong>신분증</strong> — 부부 각각 주민등록증 또는 운전면허증 원본 지참</li>\n<li><strong>진술서</strong> — 법원 비치 양식. 이혼 사유, 자녀 양육, 재산 분할 사항 기재</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기본 서류 6종 → 법원 출석 전 모두 준비 → 서류 누락 시 재방문 필요</blockquote>',
      },
      {
        title: '자녀가 있는 경우 — 추가 서류를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">미성년 자녀가 있으면 양육 관련 합의서가 필수입니다</strong></p>\n<p>민법 제836조의2에 따라 미성년 자녀가 있는 협의이혼은 <strong>양육자 지정, 양육비, 면접교섭권</strong>에 관한 합의서 또는 가정법원의 결정이 있어야 합니다. 합의가 안 되면 법원이 직권으로 결정합니다.</p>\n<ul>\n<li><strong>자녀 양육 합의서</strong> — 양육자 지정(친권자·양육자), 양육비 금액·지급 방법, 면접교섭 일정을 구체적으로 기재. 법원 비치 양식 사용 권장</li>\n<li><strong>양육비부담조서</strong> — 양육비 금액을 확정하고 이행력을 부여하려면 조서 작성을 신청하세요. 조서가 있으면 미이행 시 강제집행이 가능합니다</li>\n<li><strong>이혼 전 상담 확인서</strong> — 미성년 자녀가 있으면 이혼숙려기간 전에 <strong>상담(교육)</strong>을 받아야 합니다. 법원 지정 상담기관에서 발급받습니다</li>\n<li><strong>주의</strong> — 양육비를 정하지 않으면 이혼 확인이 지연됩니다. 구체적인 금액과 지급일을 합의하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 협의이혼 서류 준비 상황을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재산분할·위자료 — 합의서를 별도로 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">협의이혼 후에도 재산분할 청구가 가능하지만, 이혼 전 합의가 안전합니다</strong></p>\n<p>민법 제839조의2에 따라 협의이혼한 경우에도 <strong>이혼 후 2년 이내</strong>에 재산분할을 청구할 수 있습니다. 그러나 이혼 전에 합의서를 작성해 두는 것이 분쟁을 예방합니다.</p>\n<ul>\n<li><strong>재산분할 합의서</strong> — 부동산·예금·보험·퇴직금·연금 등 분할 대상 재산과 비율을 구체적으로 기재. 공증받으면 법적 효력이 강화됩니다</li>\n<li><strong>위자료 합의서</strong> — 위자료 금액과 지급 방법(일시·분할)을 명시. 위자료는 재산분할과 별개 항목입니다</li>\n<li><strong>부동산 소유권 이전</strong> — 부동산 분할 합의가 있으면 이혼 신고 후 <strong>소유권 이전 등기</strong>를 별도로 해야 합니다. 등기 비용과 취득세가 발생합니다</li>\n<li><strong>공증</strong> — 합의서를 <strong>공증</strong>받으면 상대방이 약속을 어겼을 때 소송 없이 바로 강제집행할 수 있습니다. 비용은 약 3~10만원 수준입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산분할·위자료 합의서 작성 → 공증 권장 → 이혼 신고 후 등기·세금 처리 별도</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024스876 — 협의이혼 후 재산분할 청구',
        summary:
          '대법원 2024스876 사건(대법원, 2026.01.15. 선고)에서 법원은 민법 제839조의2에 따라 협의이혼한 자도 재산분할을 청구할 수 있으며, 이 규정은 재판상 이혼에서도 준용된다고 판시했습니다.',
        takeaway:
          '협의이혼 시 재산분할을 하지 않았더라도 이혼 후 2년 이내에 청구할 수 있습니다. 다만 이혼 전에 합의서를 작성해 두는 것이 분쟁 예방에 효과적입니다.',
      },
    ],
    faq: [
      {
        question: '협의이혼 서류는 법원에 몇 부를 내야 하나요?',
        answer:
          '협의이혼의사확인신청서는 <strong>1부</strong>이며, 나머지 증명서류는 부부 각각 <strong>1통씩</strong> 준비하면 됩니다. 법원마다 요구 부수가 다를 수 있으므로 관할 가정법원에 사전 확인하는 것이 안전합니다.',
      },
      {
        question: '이혼 숙려기간은 얼마나 되나요?',
        answer:
          '미성년 자녀가 있는 경우 <strong>3개월</strong>, 없는 경우 <strong>1개월</strong>의 숙려기간이 있습니다. 숙려기간 이후에 다시 법원에 출석하여 이혼 의사를 최종 확인받습니다.',
      },
      {
        question: '한쪽이 법원에 출석하지 않으면 어떻게 되나요?',
        answer:
          '협의이혼은 <strong>반드시 쌍방 출석</strong>이 필요합니다. 한쪽이 출석하지 않으면 이혼 의사 확인이 불가능합니다. 대리인 출석은 허용되지 않으며, 일정을 재조율해야 합니다.',
      },
      {
        question: '협의이혼 비용은 얼마나 드나요?',
        answer:
          '법원 절차 비용은 <strong>인지대 1,000원 + 송달료</strong> 수준으로 매우 적습니다. 다만 재산분할 합의서 공증, 부동산 등기, 변호사 자문 등은 별도 비용이 발생합니다.',
      },
      {
        question: '외국에 있어서 법원에 직접 갈 수 없는데 어떻게 하나요?',
        answer:
          '해외 거주자는 <strong>재외공관(대사관·영사관)</strong>에서 이혼 의사 확인을 받을 수 있습니다. 사전에 관할 가정법원과 재외공관에 절차를 확인하세요.',
      },
    ],
    cta: {
      text: '협의이혼 서류 준비 상황을 확인해보세요',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '가정폭력 이혼 절차 안내', href: '/guide/divorce/domestic-violence-divorce-process' },
      { label: '이혼 재산분할 범위 FAQ', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 청구 어디서 시작', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '이혼 위자료 가이드', href: '/guide/divorce/divorce-alimony-guide' },
    ],
  },

  // ───────────────────────────────────────────
  // 25. child-support / child-support-enforcement-order-apply
  // ───────────────────────────────────────────
  {
    domain: 'child-support',
    slug: 'child-support-enforcement-order-apply',
    keyword: '양육비 이행명령 신청 방법',
    questionKeyword: '양육비를 안 주는데 이행명령 신청은 어떻게 하나요?',
    ctaKeyword: '양육비 이행명령 신청',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '양육비 이행명령 신청 4단계 절차 안내 | 로앤가이드',
      description:
        '양육비를 받지 못하고 있는데 이행명령은 어떻게 신청하는지 궁금하시나요? 신청서 작성부터 과태료·감치까지 지금 확인하세요.',
    },
    intro:
      '<p>이혼 후 양육비를 매달 주기로 했는데, 3개월째 한 푼도 들어오지 않습니다.</p><p>연락도 안 받고, 카카오톡도 읽씹만 합니다. 아이 학원비는 밀리고, 생활비는 빠듯합니다.</p><p>양육비를 지급하지 않는 상대방에게 법원이 직접 이행을 명령하고, 거부 시 과태료와 감치(구금)까지 가능한 절차가 있습니다.</p><p>이행명령 신청부터 강제 이행까지 4단계를 정리했습니다.</p>',
    timelineSteps: [
      '1단계: 양육비 미이행 기간 확인',
      '2단계: 이행명령 신청서 작성',
      '3단계: 가정법원 제출',
      '4단계: 과태료·감치 결정',
    ],
    sections: [
      {
        title: '1단계 — 양육비 미이행 사실을 확인하고 증거를 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">이행명령은 확정된 양육비 의무가 있어야 신청할 수 있습니다</strong></p>\n<p>이행명령을 신청하려면 <strong>판결문, 조정조서, 양육비부담조서</strong> 등으로 양육비 지급 의무가 확정되어 있어야 합니다. 구두 합의만으로는 이행명령을 신청할 수 없습니다.</p>\n<ul>\n<li><strong>확정 문서 확인</strong> — 이혼 판결문, 조정조서, 양육비부담조서 중 하나가 있어야 합니다. 없다면 먼저 양육비 청구 소송 또는 조정을 신청하세요</li>\n<li><strong>미지급 기간 정리</strong> — 몇 월부터 몇 월까지 얼마가 미지급되었는지 정리하세요. 통장 거래내역으로 입금 여부를 확인합니다</li>\n<li><strong>연락 시도 기록</strong> — 카카오톡 메시지, 문자, 내용증명 등 지급을 요청한 기록을 보관하세요. 상대방이 고의로 거부하고 있다는 증거가 됩니다</li>\n<li><strong>주의</strong> — 가사소송법 제64조에 따라 이행명령은 <strong>확정된 의무의 범위 내</strong>에서만 가능합니다. 확정 금액을 초과하는 이행명령은 할 수 없습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확정 문서(판결·조서) 확인 → 미지급 기간·금액 정리 → 지급 요청 기록 보관</blockquote>',
      },
      {
        title: '2~3단계 — 이행명령 신청서를 작성하여 가정법원에 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">이행명령은 가정법원에 서면으로 신청합니다</strong></p>\n<p>이행명령 신청서는 <strong>양육비 의무가 확정된 가정법원</strong>에 제출합니다. 별도의 인지대가 거의 없어 비용 부담이 적습니다.</p>\n<ul>\n<li><strong>신청서 기재 내용</strong> — 상대방 인적사항, 확정 문서(판결·조서 사건번호), 미이행 기간과 금액, 이행명령 요청 취지</li>\n<li><strong>첨부 서류</strong> — 판결문 또는 조서 사본, 미지급 증빙(통장 거래내역), 지급 요청 기록(내용증명·카카오톡 등)</li>\n<li><strong>제출 법원</strong> — 양육비가 확정된 사건의 관할 가정법원. 온라인(전자소송)으로도 접수 가능합니다</li>\n<li><strong>비용</strong> — 이행명령 신청은 <strong>무료 또는 소액의 인지대</strong>만 필요합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 양육비 이행명령 신청 가능 여부를 분석해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계 — 이행명령 불이행 시 과태료·감치를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">이행명령을 무시하면 과태료와 감치(구금)까지 가능합니다</strong></p>\n<p>가사소송법 제64조에 따라 법원의 이행명령을 정당한 이유 없이 이행하지 않으면 <strong>1천만원 이하의 과태료</strong>, <strong>30일 이내의 감치</strong>(구금)가 가능합니다. 또한 양육비 이행확보법에 따라 추가적인 제재 수단도 있습니다.</p>\n<ul>\n<li><strong>과태료</strong> — 이행명령 불이행 시 법원이 직권 또는 신청에 의해 <strong>1천만원 이하의 과태료</strong>를 부과합니다</li>\n<li><strong>감치</strong> — 과태료로도 이행하지 않으면 <strong>30일 이내 감치</strong>(유치장 구금)를 명할 수 있습니다. 실제 구금 가능성이 강력한 이행 압박이 됩니다</li>\n<li><strong>운전면허 정지</strong> — 양육비 이행확보법에 따라 6개월 이상 양육비를 지급하지 않으면 <strong>운전면허 정지</strong>를 신청할 수 있습니다</li>\n<li><strong>출국금지</strong> — 양육비이행관리원을 통해 <strong>출국금지</strong>를 요청할 수 있습니다. 해외 도피를 방지하는 효과가 있습니다</li>\n<li><strong>강제집행</strong> — 이행명령과 별도로 확정 판결·조서를 집행권원으로 <strong>급여·예금·부동산 압류</strong>도 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이행명령 불이행 → 과태료(1천만원) → 감치(30일) → 운전면허 정지·출국금지도 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025으517 — 양육비 이행명령의 범위',
        summary:
          '대법원 2025으517 사건(대법원, 2025.05.23. 선고)에서 법원은 양육비부담조서에 의하여 확정된 양육비 지급 의무 중 미이행 의무의 범위를 넘어 이행명령을 할 수 없다고 판시했습니다.',
        takeaway:
          '이행명령은 확정된 의무 범위 내에서만 가능합니다. 양육비 금액을 변경하려면 별도로 양육비 변경 심판을 청구한 후 이행명령을 신청하세요.',
      },
    ],
    faq: [
      {
        question: '양육비를 구두로만 합의했는데 이행명령을 신청할 수 있나요?',
        answer:
          '구두 합의만으로는 이행명령을 신청할 수 없습니다. <strong>판결문, 조정조서, 양육비부담조서</strong> 등 법원이 확정한 문서가 있어야 합니다. 없다면 먼저 양육비 청구 조정이나 소송을 진행하세요.',
      },
      {
        question: '상대방이 직장을 그만뒀다고 하는데 감치가 가능한가요?',
        answer:
          '감치는 <strong>정당한 이유 없이</strong> 이행하지 않는 경우에 가능합니다. 상대방이 실직했더라도 다른 재산이 있거나 재취업을 하지 않는 것이 고의적이라면 감치가 인정될 수 있습니다.',
      },
      {
        question: '이행명령 신청 후 결과가 나오기까지 얼마나 걸리나요?',
        answer:
          '법원마다 다르지만 통상 <strong>1~2개월</strong> 내에 이행명령이 발령됩니다. 상대방에게 이행 기간(보통 2주)을 부여한 후, 불이행 시 과태료·감치 절차로 진행됩니다.',
      },
      {
        question: '양육비이행관리원에서 도움을 받을 수 있나요?',
        answer:
          '네, <strong>양육비이행관리원</strong>(전화 1644-6621)에서 양육비 이행 촉구, 추심 지원, 한시적 양육비 긴급지원(월 최대 20만원)을 받을 수 있습니다. 이행명령 신청 전에 먼저 상담하는 것도 좋습니다.',
      },
      {
        question: '과거 밀린 양육비도 이행명령으로 받을 수 있나요?',
        answer:
          '확정 문서에 기재된 기간의 미지급분이라면 가능합니다. 다만 <strong>소멸시효(10년)</strong>가 있으므로, 밀린 기간이 길다면 빠르게 신청하는 것이 안전합니다.',
      },
    ],
    cta: {
      text: '양육비 이행명령 신청 가능 여부를 확인해보세요',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 청구 어디서 시작', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '양육비 소송 절차 안내', href: '/guide/child-support/child-support-lawsuit-procedure' },
      { label: '이혼 재산분할 범위 FAQ', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '가정폭력 이혼 절차 안내', href: '/guide/divorce/domestic-violence-divorce-process' },
    ],
  },

  // ───────────────────────────────────────────
  // 26. divorce / divorce-pension-division-method
  // ───────────────────────────────────────────
  {
    domain: 'divorce',
    slug: 'divorce-pension-division-method',
    keyword: '이혼 퇴직연금 분할 방법',
    questionKeyword: '이혼할 때 배우자의 퇴직연금도 분할받을 수 있나요?',
    ctaKeyword: '이혼 퇴직연금 분할',
    type: '절차형',
    perspective: '피해자',
    meta: {
      title: '이혼 시 퇴직연금 분할 3단계 청구 방법 | 로앤가이드',
      description:
        '이혼할 때 배우자의 퇴직연금을 나눠받을 수 있는지 궁금하시나요? 분할 대상 확인부터 청구 절차까지 지금 확인하세요.',
    },
    intro:
      '<p>이혼을 준비하면서 재산분할 대상을 정리하고 있는데, 배우자가 20년 넘게 다닌 회사의 퇴직연금이 상당합니다.</p><p>퇴직연금도 재산분할 대상인지, 어떻게 청구해야 하는지 정보를 찾기 어렵습니다.</p><p>퇴직연금은 혼인 기간 중 형성된 부분에 한하여 재산분할 대상이 됩니다. 민법 제839조의2에 따라 이혼 시 청구할 수 있습니다.</p><p>퇴직연금 분할 대상 확인부터 실제 청구까지 3단계로 정리했습니다.</p>',
    sections: [
      {
        title: '1단계 — 퇴직연금이 재산분할 대상인지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">혼인 기간 중 형성된 퇴직연금은 재산분할 대상입니다</strong></p>\n<p>대법원 판례에 따르면 퇴직급여(퇴직금·퇴직연금)는 <strong>혼인 기간 동안 형성된 부분</strong>에 한하여 재산분할 대상이 됩니다. 혼인 전이나 이혼 후에 적립된 부분은 제외됩니다.</p>\n<ul>\n<li><strong>분할 대상</strong> — 확정급여형(DB), 확정기여형(DC), 개인형퇴직연금(IRP) 모두 포함. 혼인 기간에 비례한 금액이 대상입니다</li>\n<li><strong>계산 방법</strong> — 전체 근속기간 중 혼인 기간의 비율을 적용합니다. 예: 근속 20년, 혼인 15년이면 퇴직연금의 75%가 분할 대상</li>\n<li><strong>국민연금 분할</strong> — 국민연금은 별도로 <strong>분할연금</strong> 제도가 있습니다. 혼인 기간 5년 이상이면 배우자의 노령연금 중 혼인 기간 해당분의 1/2을 받을 수 있습니다</li>\n<li><strong>주의</strong> — 퇴직 전이라도 재산분할 청구가 가능합니다. 장래 퇴직 시 받을 퇴직금의 현재 가치를 산정하여 분할합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">혼인 기간 중 적립분 = 분할 대상 | 퇴직 전이라도 현재 가치로 청구 가능</blockquote>',
      },
      {
        title: '2단계 — 재산분할 청구에 퇴직연금을 포함하세요',
        content:
          '<p><strong style="color:#1e3a5f">이혼 소송 또는 협의이혼 시 재산분할 항목에 퇴직연금을 명시하세요</strong></p>\n<p>퇴직연금 분할은 재산분할 청구의 한 항목으로 진행됩니다. 별도 소송이 필요한 것은 아니지만, <strong>구체적인 금액과 산정 근거</strong>를 법원에 제출해야 합니다.</p>\n<ul>\n<li><strong>협의이혼의 경우</strong> — 재산분할 합의서에 퇴직연금 분할 금액과 지급 방법(퇴직 시 지급, 즉시 정산 등)을 구체적으로 기재하세요</li>\n<li><strong>재판상 이혼의 경우</strong> — 재산분할 청구에 퇴직연금을 포함하여 청구합니다. 법원이 기여도를 고려하여 분할 비율을 결정합니다</li>\n<li><strong>필요 자료</strong> — 배우자의 재직증명서, 퇴직연금 적립금 확인서(퇴직연금 사업자 발급), 근속기간 증빙</li>\n<li><strong>재산 조회</strong> — 배우자가 자료를 제출하지 않으면 법원에 <strong>재산명시·재산조회</strong>를 신청하여 퇴직연금 적립 현황을 확인할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 퇴직연금 분할 가능 금액을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 분할 판결 후 실제 수령 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">판결 확정 후에도 실제 수령까지 추가 절차가 필요합니다</strong></p>\n<p>법원의 재산분할 판결이 확정되면 퇴직연금 분할금을 실제로 수령하기 위한 절차가 남아 있습니다.</p>\n<ul>\n<li><strong>배우자가 이미 퇴직한 경우</strong> — 판결문을 근거로 퇴직연금 사업자(은행·보험사)에 분할금 지급을 청구합니다. 판결 확정증명원과 함께 제출하세요</li>\n<li><strong>배우자가 재직 중인 경우</strong> — 장래 퇴직 시 분할금을 수령하게 됩니다. 판결에서 "퇴직 시 지급"으로 정한 경우, 배우자가 퇴직할 때 퇴직연금 사업자에게 직접 청구합니다</li>\n<li><strong>즉시 정산</strong> — 법원이 퇴직연금 대신 다른 재산(부동산·현금)으로 정산하도록 판결할 수도 있습니다. 이 경우 즉시 수령이 가능합니다</li>\n<li><strong>국민연금 분할연금</strong> — 이혼 확정 후 <strong>국민연금공단</strong>에 분할연금 청구서를 제출합니다. 본인이 노령연금 수급 연령에 도달해야 지급됩니다</li>\n<li><strong>강제집행</strong> — 상대방이 판결에 따르지 않으면 퇴직연금 채권에 대한 <strong>압류·추심</strong>으로 강제 수령이 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판결 확정 → 퇴직연금 사업자에 분할금 청구 → 재직 중이면 퇴직 시 수령</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024므13669 — 이혼 재산분할 대상 범위',
        summary:
          '대법원 2024므13669 사건(대법원, 2025.10.16. 선고)에서 법원은 이혼에 따른 재산분할에서 일방 배우자의 기여를 인정하고, 분할대상 재산의 범위를 판단하면서 민법 제746조 불법원인급여 규정과 재산분할의 관계를 검토했습니다.',
        takeaway:
          '퇴직연금을 포함한 재산분할에서 기여도가 핵심 쟁점입니다. 혼인 기간 동안의 가사노동, 자녀 양육 등도 기여로 인정되므로, 전업주부도 퇴직연금 분할을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '전업주부인데 배우자의 퇴직연금을 분할받을 수 있나요?',
        answer:
          '가능합니다. 대법원은 가사노동과 자녀 양육도 <strong>재산 형성에 대한 기여</strong>로 인정합니다. 전업주부도 혼인 기간 중 형성된 퇴직연금에 대해 분할을 청구할 수 있습니다.',
      },
      {
        question: '배우자가 퇴직연금 적립금을 알려주지 않는데 어떻게 확인하나요?',
        answer:
          '법원에 <strong>재산조회 신청</strong>을 하면 됩니다. 법원이 퇴직연금 사업자(은행·보험사)에 적립금 현황을 조회하여 결과를 알려줍니다.',
      },
      {
        question: '국민연금 분할연금은 바로 받을 수 있나요?',
        answer:
          '아닙니다. 분할연금은 <strong>본인이 노령연금 수급 연령(60~65세)에 도달</strong>해야 지급됩니다. 이혼 즉시 받는 것이 아니라, 수급 연령 도달 후 국민연금공단에 청구해야 합니다.',
      },
      {
        question: '이혼 후에도 퇴직연금 분할을 청구할 수 있나요?',
        answer:
          '가능합니다. 민법 제839조의2에 따라 <strong>이혼 후 2년 이내</strong>에 재산분할을 청구할 수 있습니다. 다만 시간이 지날수록 재산 변동이 생길 수 있으므로 빠른 청구가 유리합니다.',
      },
      {
        question: '퇴직연금과 퇴직금은 분할 방법이 다른가요?',
        answer:
          '법적 성격은 같지만, <strong>퇴직연금은 연금 사업자를 통해</strong> 분할하고, <strong>퇴직금은 회사에서 직접</strong> 지급받는 차이가 있습니다. 분할 비율 계산 방법은 동일합니다.',
      },
    ],
    cta: {
      text: '이혼 시 퇴직연금 분할 가능 여부를 확인해보세요',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 재산분할 범위 FAQ', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '가정폭력 이혼 절차 안내', href: '/guide/divorce/domestic-violence-divorce-process' },
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation-table' },
      { label: '이혼 위자료 가이드', href: '/guide/divorce/divorce-alimony-guide' },
    ],
  },

  // ───────────────────────────────────────────
  // 27. rehabilitation / rehabilitation-rejection-5-reasons
  // ───────────────────────────────────────────
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-rejection-5-reasons',
    keyword: '개인회생 기각 사유 5가지',
    questionKeyword: '개인회생이 기각되는 이유는 무엇인가요?',
    ctaKeyword: '개인회생 기각 방지',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '개인회생 기각 사유 5가지와 방지법 정리 | 로앤가이드',
      description:
        '개인회생 신청했는데 기각될까 봐 걱정되시나요? 자주 기각되는 5가지 사유와 사전에 방지하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>빚이 감당이 안 되어 개인회생을 알아보고 있는데, 주변에서 기각됐다는 이야기를 들었습니다.</p><p>신청만 하면 되는 줄 알았는데, 준비를 잘못하면 기각될 수 있다니 불안합니다.</p><p>개인회생 기각은 대부분 사전에 알 수 있는 사유 때문에 발생합니다. 미리 확인하고 보완하면 기각 확률을 크게 줄일 수 있습니다.</p><p>가장 흔한 기각 사유 5가지와 각각의 방지 방법을 정리했습니다.</p>',
    sections: [
      {
        title: '기각 사유 1~2 — 소득 부족과 채무 초과를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 변제 능력이 있어야 인가됩니다</strong></p>\n<p>개인회생은 파산과 달리 <strong>3~5년간 소득의 일부로 채무를 변제</strong>하는 제도입니다. 따라서 일정한 소득이 있어야 하고, 채무 총액이 법정 한도를 넘지 않아야 합니다.</p>\n<ul>\n<li><strong>기각 사유 ① 소득 부족</strong> — 변제계획에 따라 매월 일정 금액을 납부할 수 있는 소득이 있어야 합니다. 무직이거나 소득이 극히 적으면 변제 능력이 없다고 판단되어 기각될 수 있습니다</li>\n<li><strong>방지법</strong> — 신청 전에 안정적인 소득(근로·사업·프리랜서 등)을 확보하세요. 일용직이라도 지속적 소득 증빙이 가능하면 인정됩니다</li>\n<li><strong>기각 사유 ② 채무 한도 초과</strong> — 담보채무 15억원, 무담보채무 10억원을 초과하면 개인회생을 신청할 수 없습니다</li>\n<li><strong>방지법</strong> — 채무 총액이 한도에 가까우면 정확한 잔액을 확인하세요. 한도 초과 시에는 파산·면책 절차를 검토해야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소득 증빙 확보 + 채무 한도(담보 15억/무담보 10억) 확인 → 기각 사유 ①② 방지</blockquote>',
      },
      {
        title: '기각 사유 3~4 — 허위 신고와 면책 불허 사유를 피하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원은 신청 내용의 진실성과 성실성을 엄격히 심사합니다</strong></p>\n<p>개인회생 신청 시 재산과 채무를 정직하게 신고해야 합니다. 허위 신고가 발각되면 즉시 기각되고, 향후 재신청도 어려워집니다.</p>\n<ul>\n<li><strong>기각 사유 ③ 재산·채무 허위 신고</strong> — 재산을 숨기거나 채무를 부풀려 신고하면 법원이 기각합니다. 신청 전 재산 처분(가족에게 이전 등)도 허위 신고로 간주될 수 있습니다</li>\n<li><strong>방지법</strong> — 모든 재산과 채무를 빠짐없이 정직하게 기재하세요. 소액 채무도 누락하면 문제가 됩니다. 채권자 목록을 꼼꼼히 작성하세요</li>\n<li><strong>기각 사유 ④ 면책 불허 사유</strong> — 도박, 사치, 투기 등으로 인한 채무가 대부분이면 법원이 면책을 불허할 수 있습니다. 채무 발생 경위가 중요합니다</li>\n<li><strong>방지법</strong> — 채무 원인이 도박·사치인 경우에도 반성문과 함께 <strong>생활 개선 계획</strong>을 법원에 제출하면 면책이 인정되는 경우가 있습니다. 신청 전 전문가 상담을 받으세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 개인회생 기각 위험 요소를 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '기각 사유 5 — 변제계획 불이행을 방지하세요',
        content:
          '<p><strong style="color:#1e3a5f">인가 후에도 변제계획을 지키지 않으면 폐지(취소)됩니다</strong></p>\n<p>개인회생이 인가되더라도 변제계획에 따라 매월 꾸준히 납부해야 합니다. 납부를 중단하면 법원이 개인회생 절차를 <strong>폐지</strong>하고, 채무가 원래대로 부활합니다.</p>\n<ul>\n<li><strong>기각 사유 ⑤ 변제계획 불이행</strong> — 정당한 사유 없이 2회 이상 납부를 하지 않으면 법원이 직권 또는 채권자 신청으로 폐지합니다</li>\n<li><strong>방지법</strong> — 변제 금액을 현실적으로 설정하세요. 무리한 금액을 약정하면 나중에 납부가 어려워집니다. 소득 변동이 생기면 <strong>변제계획 변경 신청</strong>을 하세요</li>\n<li><strong>실직·질병의 경우</strong> — 정당한 사유가 있으면 법원에 <strong>변제 유예</strong>를 신청할 수 있습니다. 사유 발생 즉시 법원에 알리세요</li>\n<li><strong>채권자 목록 누락</strong> — 채권자 목록에서 누락된 채권자는 면책 대상에서 제외됩니다. 면책 결정 후에도 누락 채권자에게는 채무를 갚아야 합니다</li>\n<li><strong>핵심</strong> — 개인회생은 성실한 변제가 전제입니다. 3~5년간의 변제 기간 동안 꾸준히 납부하면 나머지 채무가 면책됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변제계획 현실적 설정 → 매월 꾸준히 납부 → 소득 변동 시 변경 신청 → 3~5년 후 면책</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024다221042 — 개인회생 면책 후 누락 채권자의 권리',
        summary:
          '대법원 2024다221042 사건(대법원, 2025.10.16. 선고)에서 법원은 개인회생 면책 결정을 받은 채무자는 변제계획에 따라 변제한 것을 제외하고 개인회생채권자에 대한 채무의 책임이 면제되지만, 채권자목록에 누락된 보증인의 권리에 대해서는 별도 검토가 필요하다고 판시했습니다.',
        takeaway:
          '채권자 목록을 빠짐없이 작성해야 면책의 효력을 온전히 받을 수 있습니다. 보증인이 있는 채무도 반드시 채권자 목록에 포함하세요.',
      },
    ],
    faq: [
      {
        question: '개인회생이 기각되면 다시 신청할 수 있나요?',
        answer:
          '가능합니다. 기각 사유를 보완하여 <strong>재신청</strong>할 수 있습니다. 다만 허위 신고로 기각된 경우에는 법원의 신뢰를 잃어 재신청이 매우 불리해집니다.',
      },
      {
        question: '도박 빚도 개인회생으로 탕감받을 수 있나요?',
        answer:
          '가능할 수 있습니다. 도박 채무라도 <strong>반성문과 생활 개선 계획</strong>을 제출하고, 성실한 변제 의지를 보이면 법원이 면책을 허가하는 경우가 있습니다. 다만 채무 전액이 도박인 경우 불리할 수 있으므로 전문가 상담을 받으세요.',
      },
      {
        question: '개인회생 변제 기간은 얼마나 되나요?',
        answer:
          '일반적으로 <strong>3년(36개월)~5년(60개월)</strong>입니다. 소득이 최저생계비 이하인 경우 3년, 그 이상이면 5년으로 설정됩니다. 변제 기간이 끝나면 나머지 채무가 면책됩니다.',
      },
      {
        question: '개인회생 중에 추가 대출을 받을 수 있나요?',
        answer:
          '원칙적으로 <strong>법원의 허가 없이 새로운 채무를 부담하면 안 됩니다.</strong> 긴급한 사유가 있다면 법원에 사전 허가를 받아야 합니다. 무단으로 대출을 받으면 폐지 사유가 됩니다.',
      },
      {
        question: '소득이 불규칙한 프리랜서도 개인회생이 가능한가요?',
        answer:
          '가능합니다. <strong>최근 6개월~1년간의 소득</strong>을 평균하여 변제 능력을 산정합니다. 입금 내역, 계약서, 세금신고서 등으로 소득을 증빙하세요.',
      },
    ],
    cta: {
      text: '개인회생 기각 위험 요소를 확인해보세요',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 신청 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 카드빚 포함 여부', href: '/guide/rehabilitation/rehabilitation-credit-card-debt-included' },
      { label: '파산 면책 절차 안내', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 후 집·차 유지 가능?', href: '/guide/bankruptcy/will-i-lose-house-and-car' },
      { label: '파산 면책 요건 안내', href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements' },
    ],
  },

  // ───────────────────────────────────────────
  // 28. bankruptcy / non-dischargeable-debts-after-bankruptcy
  // ───────────────────────────────────────────
  {
    domain: 'bankruptcy',
    slug: 'non-dischargeable-debts-after-bankruptcy',
    keyword: '파산 면책 안 되는 채무 종류',
    questionKeyword: '파산해도 면책 안 되는 채무가 있나요?',
    ctaKeyword: '비면책채무 확인',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '파산 면책 안 되는 채무 6가지 종류 정리 | 로앤가이드',
      description:
        '파산 면책을 받아도 갚아야 하는 빚이 있을까 걱정되시나요? 면책 대상에서 제외되는 비면책채무 종류를 지금 확인하세요.',
    },
    intro:
      '<p>파산 신청을 준비하면서 "면책"을 받으면 모든 빚이 사라진다고 들었습니다.</p><p>그런데 검색해 보니 면책이 안 되는 채무도 있다고 합니다. 어떤 빚이 남는지 미리 알아야 현실적인 계획을 세울 수 있습니다.</p><p>채무자 회생 및 파산에 관한 법률 제566조에 따라 면책을 받으면 파산채권자에 대한 채무 전부의 책임이 면제되지만, 같은 법 제566조 단서에서 예외를 두고 있습니다.</p><p>면책되지 않는 비면책채무 6가지를 항목별로 정리했습니다.</p>',
    sections: [
      {
        title: '비면책채무 1~3 — 세금, 벌금, 양육비는 면책되지 않습니다',
        content:
          '<p><strong style="color:#1e3a5f">공법상 의무와 가족 부양 의무는 파산으로도 면제되지 않습니다</strong></p>\n<p>채무자 회생 및 파산에 관한 법률 제566조 제1항 각호에서 비면책채무를 열거하고 있습니다. 아래 3가지는 가장 대표적인 비면책채무입니다.</p>\n<ul>\n<li><strong>① 조세·공과금</strong> — 국세, 지방세, 건강보험료, 국민연금 체납액 등 공법상 채무는 면책 대상에서 제외됩니다. 세금은 파산 이전·이후를 불문하고 갚아야 합니다</li>\n<li><strong>② 벌금·과태료·추징금</strong> — 형사 벌금, 행정 과태료, 범죄수익 추징금 등 국가에 대한 제재성 채무는 면책되지 않습니다</li>\n<li><strong>③ 양육비·부양료</strong> — 자녀 양육비, 배우자 부양료 등 가족법상 의무는 면책 대상에서 제외됩니다. 이혼 판결이나 조서로 확정된 양육비는 파산 후에도 계속 지급해야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">세금 + 벌금 + 양육비 = 파산해도 면제 안 됨 → 이 채무가 큰 비중이면 파산 효과가 제한적</blockquote>',
      },
      {
        title: '비면책채무 4~6 — 고의 불법행위, 누락 채무, 근로자 임금도 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">악의적 채무와 보호가 필요한 채권은 면책에서 제외됩니다</strong></p>\n<p>아래 3가지는 채무자의 악의 또는 사회적 보호 필요성 때문에 면책 대상에서 제외됩니다.</p>\n<ul>\n<li><strong>④ 고의 불법행위 손해배상</strong> — 폭행, 사기, 횡령 등 고의로 타인에게 손해를 입힌 경우의 손해배상채무는 면책되지 않습니다. "과실"이 아닌 "고의"가 핵심입니다</li>\n<li><strong>⑤ 채권자 목록에 누락된 채무</strong> — 파산 신청 시 채권자 목록에 기재하지 않은 채무는 면책 대상에서 제외됩니다. 의도적 누락이든 실수든 동일합니다</li>\n<li><strong>⑥ 근로자의 임금·퇴직금·재해보상금</strong> — 채무자가 사업주인 경우 근로자에게 지급해야 할 임금, 퇴직금, 산재 보상금은 면책되지 않습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보유 채무 중 비면책채무 비율을 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '비면책채무가 많을 때 대응 전략을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">비면책채무 비중에 따라 파산 전략이 달라집니다</strong></p>\n<p>비면책채무가 전체 채무의 대부분이라면 파산의 실익이 적을 수 있습니다. 이 경우 다른 전략을 검토해야 합니다.</p>\n<ul>\n<li><strong>비면책채무 비중 낮음</strong> — 일반 채무(카드빚, 대출 등)가 대부분이라면 파산·면책의 효과가 큽니다. 비면책채무만 남으므로 부담이 크게 줄어듭니다</li>\n<li><strong>비면책채무 비중 높음</strong> — 세금, 벌금 등이 대부분이면 면책 후에도 채무가 많이 남습니다. 이 경우 <strong>분납 협의</strong>(국세청·지자체)나 <strong>체납처분 유예</strong>를 검토하세요</li>\n<li><strong>개인회생 검토</strong> — 일정한 소득이 있다면 개인회생으로 전체 채무(비면책채무 포함)의 변제계획을 세우는 것이 유리할 수 있습니다</li>\n<li><strong>채권자 목록 완벽 작성</strong> — 채권자 목록 누락은 가장 쉽게 피할 수 있는 비면책 사유입니다. 소액 채무, 보증 채무까지 빠짐없이 기재하세요</li>\n<li><strong>전문가 상담</strong> — 비면책채무 비중 분석과 최적 전략 선택을 위해 법률 전문가 상담을 받는 것이 효과적입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">비면책채무 비중 확인 → 낮으면 파산 유리 / 높으면 분납·회생 검토 → 채권자 목록 완벽 작성 필수</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2022다247378 — 파산 면책과 임대차보증금반환청구권',
        summary:
          '대법원 2022다247378 사건(대법원, 2025.06.12. 선고)에서 법원은 채무자 회생 및 파산에 관한 법률 제566조에 따라 면책을 받은 채무자는 파산채권자에 대한 채무 전부의 책임이 면제되며, 우선변제권 있는 임대차보증금반환청구권에 면책 결정의 효력이 미치는지를 검토했습니다.',
        takeaway:
          '파산 면책의 범위는 넓지만, 비면책채무에 해당하는지 여부는 개별 채권의 성격에 따라 판단됩니다. 채무 유형별로 면책 가능 여부를 미리 확인하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '신용카드 빚은 파산으로 면책되나요?',
        answer:
          '네, 일반적인 <strong>신용카드 채무, 은행 대출, 사채</strong> 등은 면책 대상입니다. 다만 사기적 방법으로 대출을 받은 경우(허위 소득 증빙 등)에는 면책이 거부될 수 있습니다.',
      },
      {
        question: '교통사고 손해배상금은 면책되나요?',
        answer:
          '과실에 의한 교통사고 손해배상은 <strong>면책 대상</strong>입니다. 그러나 음주운전, 무면허운전 등 <strong>중과실이나 고의</strong>에 의한 사고의 손해배상은 면책되지 않을 수 있습니다.',
      },
      {
        question: '체납 세금이 많은데 파산하면 어떻게 되나요?',
        answer:
          '세금은 비면책채무이므로 파산 후에도 <strong>전액 납부</strong>해야 합니다. 다만 국세청이나 지자체에 <strong>분납</strong>이나 <strong>체납처분 유예</strong>를 신청할 수 있습니다. 파산과 별도로 세금 분납 계획을 세우세요.',
      },
      {
        question: '채권자 목록에 빠뜨린 채무를 나중에 추가할 수 있나요?',
        answer:
          '파산 절차 중이라면 <strong>보정서</strong>를 제출하여 추가할 수 있습니다. 그러나 면책 결정이 확정된 후에는 추가가 어렵고, 누락된 채무는 면책 대상에서 제외됩니다.',
      },
      {
        question: '보증 채무도 파산으로 면책되나요?',
        answer:
          '네, 보증 채무도 <strong>채권자 목록에 기재</strong>하면 면책 대상입니다. 다만 목록에 누락하면 면책되지 않으므로, 본인이 보증인인 채무를 모두 확인하여 기재하세요.',
      },
      {
        question: '면책 후에 비면책채무를 갚을 능력이 없으면 어떻게 하나요?',
        answer:
          '세금은 <strong>분납</strong>, 양육비는 <strong>감액 심판</strong>, 손해배상은 <strong>분할 변제 합의</strong> 등 채무 유형별로 감경·분할 방법이 있습니다. 각 채권자(국세청·법원·피해자)와 개별 협의가 필요합니다.',
      },
    ],
    cta: {
      text: '보유 채무의 면책 가능 여부를 확인해보세요',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산 면책 절차 안내', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 면책 요건 안내', href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements' },
      { label: '파산 신청~면책 전체 절차', href: '/guide/bankruptcy/application-to-discharge-full-procedure' },
      { label: '파산 후 집·차 유지 가능?', href: '/guide/bankruptcy/will-i-lose-house-and-car' },
      { label: '개인회생 신청 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
    ],
  },
];
