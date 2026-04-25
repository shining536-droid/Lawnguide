import { SpokePage } from '../spoke-pages';

// batch42 nonlabor1 12개: fraud 5 + divorce 4 + defamation 3
//
// 1. fraud/secondhand-settlement-accept-criteria — 중고거래 사기 피해자가 고소 후 상대방 합의 제안을 수락할지 판단 기준을 돕는 페이지다.
// 2. fraud/civil-criminal-sequence-decision — 사기 피해자가 민사·형사 중 어느 쪽부터 시작할지 상황별로 결정하도록 돕는 페이지다.
// 3. fraud/phishing-transfer-refund-procedure — 보이스피싱에 송금한 직후 피해자가 계좌 지급정지·환급까지 밟아야 할 실무 체크리스트를 돕는 페이지다.
// 4. fraud/investment-complaint-prep-5items — 투자사기 피해자가 고소장 제출 전에 모아야 할 5가지 증거자료를 정리하는 페이지다.
// 5. fraud/accused-lawyer-retain-timing — 사기 혐의를 받는 피의자가 변호사 선임 시점·단계별 대응을 판단하도록 돕는 페이지다. (accused)
// 6. divorce/consensual-intent-withdrawal-procedure — 협의이혼 숙려기간 중 이혼 의사를 철회하려는 당사자의 철회 시점·절차를 돕는 페이지다.
// 7. divorce/affair-alimony-evidence-5items — 배우자 외도로 위자료 청구를 준비하는 피해자가 증거 5가지를 확보하도록 돕는 페이지다.
// 8. divorce/visitation-denied-enforcement-apply — 면접교섭권을 거부당한 비양육 부모의 이행명령·강제이행 신청을 돕는 페이지다.
// 9. divorce/omitted-asset-additional-claim — 이혼 후 누락된 재산을 뒤늦게 발견한 전 배우자가 추가 재산분할 청구 절차를 돕는 페이지다.
// 10. defamation/group-chat-requirements-4items — 단톡방 험담 피해자가 명예훼손 성립 4가지 요건을 점검하도록 돕는 페이지다.
// 11. defamation/accused-truth-defense-argument — 명예훼손으로 고소당한 피의자가 진실적시 항변·공익성 방어를 준비하도록 돕는 페이지다. (accused)
// 12. defamation/online-post-deletion-request-procedure — 온라인 게시글로 명예가 훼손된 피해자가 정통망법 삭제 요청·임시조치 절차를 돕는 페이지다.

export const spokesBatch42Nonlabor1: SpokePage[] = [
  // ─── 1. fraud / secondhand-settlement-accept-criteria ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-settlement-accept-criteria',
    keyword: '중고거래 사기 합의 수락 기준',
    questionKeyword: '중고거래 사기 고소 후 합의 들어왔는데 받아야 하나요?',
    ctaKeyword: '중고거래 합의 수락 판단 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '중고거래 사기 합의 수락 기준 5가지 | 로앤가이드',
      description:
        '중고거래 사기로 고소한 뒤 상대방에게 합의 제안이 들어왔을 때 받아야 할지 거절할지 판단 기준과 합의금 산정 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>중고거래 사기로 고소장을 접수한 지 2~3주면 "합의하고 고소 취하해달라"는 연락이 옵니다. 돈만 돌려받으면 끝인지, 형사 처벌까지 받게 해야 하는지 고민되죠. 형법 제347조 사기죄는 합의 여부가 양형에 결정적으로 반영되므로, 원금 회수·위자·재범 위험 3가지를 동시에 저울질해 판단해야 합니다.</p>',
    sections: [
      {
        title: '합의 수락 여부 — 판단 5가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">단순 원금 반환인지, 처벌 의사를 놓는 대가인지 구분하는 것이 출발입니다.</strong></p>\n<ul>\n<li><strong>원금 + 위자 포함</strong> — 피해액 100%에 정신적 피해 20~30% 가산된 금액인지.</li>\n<li><strong>즉시 송금 여부</strong> — "2회 분납" 제안은 미이행 위험 크므로 1회 일시금 우선.</li>\n<li><strong>처벌불원서 범위</strong> — 고소 취하인지, 선처 탄원인지 명시.</li>\n<li><strong>동일 피해자 수</strong> — 피해자가 10명 이상이면 취하해도 검찰 공소 유지 가능.</li>\n<li><strong>재범 위험</strong> — 피의자 전과·판매 활동 여부로 합의 후 재피해 가능성 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "원금만 돌려준다"는 합의는 사실상 민사 해결이며, 형사 처벌을 포기하는 대가가 되어야 진짜 합의입니다.</blockquote>',
      },
      {
        title: '합의금 산정 — 중고거래 사기 시세',
        content:
          '<p><strong style="color:#1e3a5f">피해액 대비 120~150%가 법원에서 인정되는 일반 시세입니다.</strong></p>\n<ul>\n<li><strong>10만 원 이하 피해</strong> — 원금 + 3~5만 원 위자 수준에서 합의.</li>\n<li><strong>100만 원대 피해</strong> — 원금 + 20~30% 위자가 관행.</li>\n<li><strong>500만 원 이상 고액</strong> — 원금 100% + 위자 30~50%, 약식 합의서 공증 필수.</li>\n<li><strong>피해자 다수</strong> — 피해자 간 비율 배분, 공동 대리인 선임 고려.</li>\n<li><strong>지연이자</strong> — 민법 제379조 연 5%, 재판 확정 후 연 12%(소송촉진특례법).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 합의 수락 여부와 적정 합의금을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합의서 작성 — 반드시 넣어야 할 조항',
        content:
          '<p><strong style="color:#1e3a5f">처벌불원 조항 없이 돈만 받으면 피의자가 선처받지 못해 추가 연락·보복 위험이 있습니다.</strong></p>\n<ul>\n<li><strong>피해자·피의자 인적사항</strong> — 주민번호 뒷자리 미기재, 성명·주소·연락처.</li>\n<li><strong>합의금 액수·지급방식</strong> — "일시금 ○○원, 입금 즉시 효력 발생".</li>\n<li><strong>처벌불원 의사</strong> — "피의자를 형사 처벌하지 않기를 원함" 명시.</li>\n<li><strong>부제소 특약</strong> — "이 건과 관련해 민·형사상 일체 청구하지 않음".</li>\n<li><strong>합의 불이행 조건</strong> — "미이행 시 즉시 처벌불원 철회" 예비 조항.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서는 2부 작성, 서명·날인 후 각 1부 보관. 공증은 500만 원 이상일 때 권장.</blockquote>',
      },
      {
        title: '거절해야 할 상황 — 합의 말고 처벌 유지',
        content:
          '<p><strong style="color:#1e3a5f">재범 위험이 높거나 금액 부족이면 합의 거절이 정답입니다.</strong></p>\n<ul>\n<li><strong>분납 제안</strong> — 1회차 이후 미이행 사례 다수, 일시금 아니면 거절.</li>\n<li><strong>동일 수법 반복범</strong> — 다른 피해자 신고 이력 있으면 처벌 유지가 사회적 가치.</li>\n<li><strong>사과 없이 금액만</strong> — 경위서·사과문 없는 합의는 재범 위험 신호.</li>\n<li><strong>처벌불원서만 요구</strong> — 원금 없이 선처만 요구하면 민사도 어려워짐.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 거절 시 "왜 거절했는지" 사유를 기록해두면 추후 양형 의견에 반영 가능.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상습사기 합의 불이행 양형 가중',
        summary:
          '대법원 2025도15970 사건(대법원, 2026.01.29 선고)에서 법원은 단기간 내 반복적으로 다수 피해자를 대상으로 사기에 이른 행위자에 대해, 합의금 1회 미이행만으로도 특정경제범죄법상 상습사기 성립 요건 판단에 불리하게 작용할 수 있다고 판시했습니다. 합의 후 미이행이 얼마나 치명적인지 확인된 사례입니다.',
        takeaway:
          '분납 합의는 1회차 미이행 시 바로 처벌불원 철회 조항을 넣어야 합니다.',
      },
    ],
    faq: [
      {
        question: '합의하면 전과가 안 남나요?',
        answer:
          '<strong>합의·처벌불원이 있으면 기소유예·선고유예 가능성이 높아지지만, 죄질이 나쁘면 벌금형으로 전과 남을 수 있습니다.</strong>',
      },
      {
        question: '합의금 받고 처벌불원서 써줬는데 또 연락 오면요?',
        answer:
          '<strong>부제소 특약 위반이므로 민사 손해배상 청구 가능합니다.</strong> 추가 협박이면 형사 고소 별건 진행.',
      },
      {
        question: '피해자 여러 명인데 저만 먼저 합의해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 다만 피해자 10명 이상이면 검찰이 직권으로 공소 유지할 수 있어 완전 종결은 어렵습니다.',
      },
      {
        question: '합의서 공증 꼭 받아야 하나요?',
        answer:
          '<strong>500만 원 이상 고액이면 권장합니다.</strong> 공증 받으면 미이행 시 바로 강제집행 가능.',
      },
      {
        question: '분납 조건 받아도 될까요?',
        answer:
          '<strong>피의자 경제력이 확실할 때만 고려하세요.</strong> 분납 중 미이행 시 처벌불원 철회 조항 가능한 한 포함.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '중고거래 사기 증거 수집 순서', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '사기 합의 양형 반영 기준', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '합의 거부 대안 선택지', href: '/guide/fraud/fraud-victim-refuses-settlement-alternatives' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
      { label: '사기 신고 후 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
    ],
  },

  // ─── 2. fraud / civil-criminal-sequence-decision ───
  {
    domain: 'fraud',
    slug: 'fraud-civil-criminal-sequence-decision',
    keyword: '사기 민사 형사 순서',
    questionKeyword: '사기 당했는데 민사랑 형사 어디부터 시작해야 하나요?',
    ctaKeyword: '사기 민사 형사 순서 결정',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '사기 민사 vs 형사 어디부터 — 판단 기준 4가지 | 로앤가이드',
      description:
        '사기를 당했을 때 민사 소송과 형사 고소 중 무엇부터 해야 실질적으로 돈을 돌려받는지 판단 기준과 단계별 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"사기 당했는데 민사를 먼저 해야 하나, 형사 고소가 먼저인가?" 대부분은 돈을 돌려받는 게 목적인데 민사만 하면 판결 받아도 집행 못 하는 경우가 많고, 형사만 하면 처벌은 돼도 돈은 안 돌아옵니다. 형사 절차에서 확보한 증거가 민사에 유리하게 작용하므로 대개 형사 먼저, 그 다음 민사가 공식이지만 상황에 따라 다릅니다.</p>',
    sections: [
      {
        title: '형사 먼저가 유리한 경우 — 4가지 상황',
        content:
          '<p><strong style="color:#1e3a5f">증거 부족, 피의자 재산 은닉 우려, 다수 피해자일 때는 형사 먼저가 정답입니다.</strong></p>\n<ul>\n<li><strong>증거 부족</strong> — 계좌이체·문자만 있고 기망 의도 입증 어려울 때 경찰 수사력 활용.</li>\n<li><strong>재산 은닉 우려</strong> — 수사 개시로 계좌 추적·압수수색 가능.</li>\n<li><strong>다수 피해자</strong> — 공동 고소로 피해 입증이 쉬워지고 공소 가능성 상승.</li>\n<li><strong>피의자 도주 가능성</strong> — 형사 입건되면 출국금지·긴급체포 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형사 수사 중 피의자가 합의 제안하면 원금 + 위자료 한 번에 해결되는 경우가 많습니다.</blockquote>',
      },
      {
        title: '민사 먼저가 유리한 경우 — 3가지',
        content:
          '<p><strong style="color:#1e3a5f">증거 확실, 피의자 재산 명확, 금액 크면 민사 먼저가 빠릅니다.</strong></p>\n<ul>\n<li><strong>차용증·계약서 완비</strong> — 지급명령만으로 3주 내 집행권원 확보 가능.</li>\n<li><strong>피의자 부동산·급여 확인</strong> — 가압류 우선, 형사는 병행.</li>\n<li><strong>형사 성립 애매</strong> — "갚을 의사 없었다" 입증 어려우면 민사가 간편.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사건 유형별로 민사·형사 순서를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '병행 진행 — 민사 배상명령 제도',
        content:
          '<p><strong style="color:#1e3a5f">형사 재판에서 배상명령을 청구하면 별도 민사 없이 판결문으로 집행 가능합니다.</strong></p>\n<ul>\n<li><strong>배상명령 신청 시점</strong> — 형사 1심 변론 종결 전, 법원 제출.</li>\n<li><strong>인정 범위</strong> — 직접적 재산상 손해, 위자료는 원칙 불인정.</li>\n<li><strong>장점</strong> — 민사 인지대·변호사비 절감, 판결 즉시 강제집행 가능.</li>\n<li><strong>한계</strong> — 다툼 많으면 각하 → 별도 민사 필요.</li>\n<li><strong>근거</strong> — 소송촉진 등에 관한 특례법 제25조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배상명령은 형사 판결문 확정 후 바로 집행권원이 되므로 별도 민사 절차 생략 효과.</blockquote>',
      },
      {
        title: '시효 관리 — 민사·형사 시효 차이',
        content:
          '<p><strong style="color:#1e3a5f">민사와 형사 시효가 달라 시효 관리 실패하면 어느 쪽도 못 합니다.</strong></p>\n<ul>\n<li><strong>형사 공소시효</strong> — 단순 사기 10년, 특경법(5억 이상) 15년.</li>\n<li><strong>민사 소멸시효</strong> — 불법행위 3년, 손해 안 날로부터 10년(민법 제766조).</li>\n<li><strong>단축 위험</strong> — 민사 3년은 사기 인지 시점부터 빠르게 카운트.</li>\n<li><strong>정지 사유</strong> — 내용증명·지급명령으로 시효 중단 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 민사 시효 3년 지나면 형사에서 처벌 받아도 돈 돌려받지 못합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄와 변제 의사 판단',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 사용 사기 등 기망행위 유형에서도 차용 당시 변제 의사·능력이 없었다는 점이 증명되지 않으면 형사 사기죄 성립이 부정될 수 있다고 판시했습니다. 형사 입증이 어려우면 민사 먼저가 빠른 해결일 수 있음을 보여줍니다.',
        takeaway:
          '형사 입증이 애매하면 민사로 먼저 돈을 확보하는 전략이 유효합니다.',
      },
    ],
    faq: [
      {
        question: '형사 고소 중에 민사 소송도 동시에 할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 다만 형사 판결 나올 때까지 민사가 지연되는 경우 많아 배상명령 병행이 경제적.',
      },
      {
        question: '민사 먼저 했다가 형사도 할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 민사 판결은 형사 수사에 유력한 증거로 제출 가능.',
      },
      {
        question: '합의하면 형사·민사 한 번에 끝나나요?',
        answer:
          '<strong>합의서에 "민·형사상 일체 청구 않음" 부제소 특약 넣어야 한 번에 종결됩니다.</strong>',
      },
      {
        question: '피의자가 돈이 없어 보이면 형사만 할까요?',
        answer:
          '<strong>처벌로는 돈 못 받으므로 재산 조회부터 하세요.</strong> 숨긴 재산 있으면 형사 수사로 드러납니다.',
      },
      {
        question: '배상명령과 민사 소송은 중복인가요?',
        answer:
          '<strong>같은 손해에 두 번 청구는 불가능합니다.</strong> 배상명령 인정되면 민사는 자동 포기.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 형사 고소 절차 정리', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기 민사 소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '민사·형사 차이 비교표', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
      { label: '사기 공소시효 완벽 정리', href: '/guide/fraud/fraud-statute-of-limitations-period' },
      { label: '투자사기 민·형사 비교', href: '/guide/fraud/investment-fraud-criminal-vs-civil' },
    ],
  },

  // ─── 3. fraud / phishing-transfer-refund-procedure ───
  {
    domain: 'fraud',
    slug: 'fraud-phishing-transfer-refund-procedure',
    keyword: '보이스피싱 송금 환급 절차',
    questionKeyword: '보이스피싱에 돈 보냈는데 환급받을 수 있나요?',
    ctaKeyword: '보이스피싱 환급 절차 체크',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '보이스피싱 송금 후 환급 절차 체크리스트 7단계 | 로앤가이드',
      description:
        '보이스피싱에 돈을 송금한 직후 계좌 지급정지부터 피해금 환급까지 밟아야 할 7단계 절차와 골든타임을 지금 확인하세요.',
    },
    intro:
      '<p>보이스피싱에 송금하고 나서 "돈 돌려받을 수 있나요?"라는 질문이 가장 많지만, 현실은 3시간 내 지급정지만 가능해도 환급률이 70% 이상 올라갑니다. 통신사기피해환급법 제3조는 피해자 신고 시 금융회사가 즉시 지급정지 조치를 하도록 규정하며, 48시간·14일·2개월의 단계별 기한 관리가 환급의 핵심입니다.</p>',
    sections: [
      {
        title: '골든타임 0~3시간 — 즉시 할 일',
        content:
          '<p><strong style="color:#1e3a5f">송금 후 3시간이 가장 결정적입니다. 이 시간 안에 지급정지 되면 환급 가능성 70% 이상.</strong></p>\n<ul>\n<li><strong>112 신고</strong> — "보이스피싱 송금했다" 말하면 즉시 지급정지 요청 전달.</li>\n<li><strong>은행 콜센터 전화</strong> — 내 은행 + 송금받은 은행 모두 지급정지 요청.</li>\n<li><strong>1332 금융감독원</strong> — 피해신고접수, 환급 절차 안내.</li>\n<li><strong>계좌 입출금 내역 캡처</strong> — 송금 시각·금액·수취인 계좌 증거 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신고만으로 지급정지가 되므로 112·1332 전화가 최우선입니다. 경찰서 방문은 그 다음.</blockquote>',
      },
      {
        title: '48시간 내 — 서면 신고 및 지급정지 확정',
        content:
          '<p><strong style="color:#1e3a5f">전화 신고만으로는 임시 정지, 48시간 내 서면 제출해야 정식 확정됩니다.</strong></p>\n<ul>\n<li><strong>피해구제 신청서 작성</strong> — 해당 은행 영업점 방문, 인적사항·피해경위 기재.</li>\n<li><strong>경찰 신고확인서</strong> — 관할 경찰서 사건사고사실확인원 발급.</li>\n<li><strong>송금내역·문자</strong> — 가해자와 주고받은 메시지·통화 기록.</li>\n<li><strong>신분증 사본</strong> — 주민증·운전면허증 앞뒷면.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 단계별 제출 서류와 환급 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '14일~2개월 — 채권소멸 절차',
        content:
          '<p><strong style="color:#1e3a5f">지급정지 후 금융감독원이 채권소멸 공고를 거쳐 피해금을 환급합니다.</strong></p>\n<ul>\n<li><strong>14일 이내</strong> — 금융감독원이 채권소멸 공고 개시, 계좌 명의자에 이의제기 기회 부여.</li>\n<li><strong>2개월 이의제기 기간</strong> — 명의자가 정당한 권리 주장하지 않으면 소멸 확정.</li>\n<li><strong>환급금 배분</strong> — 소멸 확정 후 14일 내 피해자 계좌로 송금.</li>\n<li><strong>분할 환급</strong> — 계좌 잔액이 피해자 수에 못 미치면 비율 배분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이 기간 동안 계좌 명의자가 "자신은 대포통장 몰랐다"며 이의제기하면 지연될 수 있어요.</blockquote>',
      },
      {
        title: '환급 실패 시 — 대안 3가지',
        content:
          '<p><strong style="color:#1e3a5f">계좌 잔액이 이미 인출됐거나 이의제기 성공하면 환급 불가, 대안 필요합니다.</strong></p>\n<ul>\n<li><strong>형사 고소</strong> — 범인 검거 시 배상명령 청구로 일부 회수.</li>\n<li><strong>보험 청구</strong> — 일부 보험사 "보이스피싱 피해 보상 특약" 있음, 50~500만 원.</li>\n<li><strong>서민금융진흥원</strong> — 저소득 피해자 긴급생계비 지원, 최대 100만 원.</li>\n<li><strong>민사 소송</strong> — 계좌 명의자에 부당이득반환, 대포통장은 승소해도 집행 어려움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해외 계좌로 송금된 경우 환급 거의 불가능하므로 처음부터 경찰·금감원에 신고 우선.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 계좌 명의인 책임',
        summary:
          '대법원 2021도248299 사건(대법원, 2026.01.29 선고)에서 법원은 대포통장 명의인이 "사용처를 모른다"고 주장해도 보이스피싱에 이용될 수 있음을 인식·용인한 경우 방조 또는 공범 책임을 부담할 수 있다고 판시했습니다. 피해자가 명의인에 대한 민사 청구 근거가 확장된 사례입니다.',
        takeaway:
          '환급 실패 시 계좌 명의자에 민사 청구 가능성이 열려 있습니다.',
      },
    ],
    faq: [
      {
        question: '송금 직후 은행 문 닫았을 때는 어떻게 하나요?',
        answer:
          '<strong>112 또는 1332로 먼저 전화하세요.</strong> 전화 신고만으로 임시 지급정지 가능, 다음날 영업점 서면 제출.',
      },
      {
        question: '돈이 이미 인출됐으면 못 받나요?',
        answer:
          '<strong>계좌 잔액 기준이므로 이미 빠져나간 돈은 환급 불가능합니다.</strong> 형사 고소 + 배상명령이 대안.',
      },
      {
        question: '해외 송금이면 어떻게 하나요?',
        answer:
          '<strong>해외 계좌는 환급법 적용 어렵습니다.</strong> 한국 경찰 → 인터폴 공조 요청 경로.',
      },
      {
        question: '신고하는 데 돈 드나요?',
        answer:
          '<strong>112·1332 신고 모두 무료입니다.</strong> 변호사 선임도 불필요.',
      },
      {
        question: '환급까지 얼마나 걸리나요?',
        answer:
          '<strong>평균 2~3개월입니다.</strong> 이의제기 없으면 최소 2개월, 있으면 4개월 이상.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '보이스피싱 구제법 적용 기준', href: '/guide/fraud/fraud-voice-phishing-relief-law-application' },
      { label: '계좌 지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '계좌 동결 후 환급 절차', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '고령자 보이스피싱 회복', href: '/guide/fraud/fraud-elderly-voice-phishing-recovery' },
      { label: '보이스피싱 보험 환급', href: '/guide/fraud/fraud-voice-phishing-insurance-refund' },
    ],
  },

  // ─── 4. fraud / investment-complaint-prep-5items ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-complaint-prep-5items',
    keyword: '투자 사기 고소 준비자료',
    questionKeyword: '투자 사기 고소 전에 뭘 준비해야 하나요?',
    ctaKeyword: '투자 사기 고소 준비자료 체크',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '투자 사기 고소 전 준비자료 5가지 완벽 정리 | 로앤가이드',
      description:
        '주식·코인·부동산 투자 사기를 당했을 때 고소장 제출 전 가능한 한 모아야 할 5가지 증거자료와 수집 순서를 지금 확인하세요.',
    },
    intro:
      '<p>투자 사기는 "원금 보장", "월 10% 수익", "한정 기회"라는 말로 시작됩니다. 뒤늦게 회사가 사라지거나 대표가 잠적했을 때, 형법 제347조 사기죄 성립에는 "기망행위 + 재산상 손해 + 편취 의사"가 모두 입증되어야 합니다. 증거 없이 고소하면 각하되므로 고소장 접수 전 5가지 자료를 체계적으로 모아야 합니다.</p>',
    sections: [
      {
        title: '증거 1 — 투자 유도 기록',
        content:
          '<p><strong style="color:#1e3a5f">기망행위 입증의 핵심입니다. "원금 보장"·"수익 약속" 문구가 나온 기록을 모으세요.</strong></p>\n<ul>\n<li><strong>카카오톡·문자 대화</strong> — 유도 문구 캡처, 대화 전체 내보내기 파일.</li>\n<li><strong>설명회·세미나 녹음</strong> — 본인 참석한 녹음은 합법, 녹화 영상.</li>\n<li><strong>홍보 자료·홈페이지</strong> — 스크린샷 + 페이지 저장(웹아카이브).</li>\n<li><strong>투자 설명서·PPT</strong> — 수익률 표기 부분 표시.</li>\n<li><strong>유튜브·SNS 광고</strong> — 링크와 재생 화면 녹화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수사기관은 "어떻게 속았는지" 구체적 기록이 있어야 기망행위를 인정합니다.</blockquote>',
      },
      {
        title: '증거 2 — 송금·투자 내역',
        content:
          '<p><strong style="color:#1e3a5f">재산상 손해 입증용으로 금액과 수취인이 분명해야 합니다.</strong></p>\n<ul>\n<li><strong>계좌이체 내역</strong> — 은행 앱 거래내역 PDF 또는 통장사본.</li>\n<li><strong>현금 지급 영수증</strong> — 수기 영수증·수령증·차용증.</li>\n<li><strong>암호화폐 전송 해시</strong> — 거래소 내역 + 지갑주소.</li>\n<li><strong>카드 결제 내역</strong> — 투자 명목이면 카드사 사용내역 출력.</li>\n<li><strong>투자금 합계 정리표</strong> — 날짜·금액·방법 시계열 정리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 증거 누락·보강 항목을 점검해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 3~5 — 계약서·피해자·피해경위서',
        content:
          '<p><strong style="color:#1e3a5f">계약서·피해자 연결·경위서 3종이 수사 방향을 잡아줍니다.</strong></p>\n<ul>\n<li><strong>③ 투자 계약서·약정서</strong> — 원본 스캔, 서명·날인 페이지 포함. 구두 약속은 증인 진술서 추가.</li>\n<li><strong>④ 다른 피해자 연락처</strong> — 동일 수법 피해자 5명 이상이면 특경법 적용 가능성.</li>\n<li><strong>⑤ 피해 경위서</strong> — 만난 시기부터 입금까지 시간순 서술, A4 2~3장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 피해자 카톡방·카페가 있으면 가입 즉시 합류. 공동 고소가 수사 속도·압박력 모두 유리.</blockquote>',
      },
      {
        title: '고소장 제출 — 증거 첨부 요령',
        content:
          '<p><strong style="color:#1e3a5f">증거는 목록화·번호매김·원본/사본 구분이 기본입니다.</strong></p>\n<ul>\n<li><strong>증거 목록</strong> — "갑 제1호증 카톡대화, 갑 제2호증 계좌이체내역" 형식.</li>\n<li><strong>제출 방법</strong> — 관할 경찰서 방문 또는 대검찰청 민원실.</li>\n<li><strong>원본 보관</strong> — 사본 제출, 원본은 절대 원본 미제출.</li>\n<li><strong>USB·서면 병행</strong> — 영상·녹음은 USB 제출, 대화는 서면 출력.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 증거 위조는 형법 제155조 증거인멸·위조죄로 별건 처벌 위험, 편집하지 말고 원본 그대로.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유사수신 투자 사기 처벌 기준',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 사업 실질이 없고 후순위 투자자 자금으로 선순위 수익을 지급하는 구조의 계약에 대해 "원금 보장" 약속이 실질적으로 유사수신·기망에 해당할 수 있다고 판시했습니다. 투자 사기 입증의 구조적 판단 기준이 명확해진 사례입니다.',
        takeaway:
          '"원금 보장" 문구와 후순위 투자자 구조가 확인되면 사기죄 성립 가능성이 큽니다.',
      },
    ],
    faq: [
      {
        question: '증거가 카톡뿐이면 부족한가요?',
        answer:
          '<strong>카톡 + 계좌이체내역만 있어도 최소한의 증거는 됩니다.</strong> 다만 계약서·추가 피해자가 있으면 수사 속도가 빨라집니다.',
      },
      {
        question: '상대방이 "투자 실패"라고 주장하면요?',
        answer:
          '<strong>투자 실패와 사기는 다릅니다.</strong> "애초에 사업 실체 없음" 입증이 핵심, 사업자등록·사용내역 확인.',
      },
      {
        question: '가해자가 잠적했는데 고소 의미 있나요?',
        answer:
          '<strong>의미 있습니다.</strong> 지명수배·출국금지 조치로 재산 처분 방지, 피해자 다수면 특경법 적용.',
      },
      {
        question: '원금 일부 돌려받았으면 고소 안 되나요?',
        answer:
          '<strong>가능합니다.</strong> 일부 환급이 사기 성립을 부정하지 않음, 미환급분 기준으로 피해액 산정.',
      },
      {
        question: '공동 고소하면 유리한가요?',
        answer:
          '<strong>매우 유리합니다.</strong> 피해자 5명 이상이면 특경법 적용으로 가중처벌, 수사 우선순위도 상승.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '투자 사기 증거 수집 체크', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '투자 사기 민·형사 비교', href: '/guide/fraud/investment-fraud-criminal-vs-civil' },
      { label: '투자 사기 체크리스트', href: '/guide/fraud/investment-fraud-checklist' },
      { label: '투자 사기 공동 고소', href: '/guide/fraud/fraud-investment-collective-action' },
      { label: 'SNS 투자 사기 대응', href: '/guide/fraud/fraud-sns-investment-scam-response' },
    ],
  },

  // ─── 5. fraud / accused-lawyer-retain-timing ─── (accused)
  {
    domain: 'fraud',
    slug: 'fraud-accused-lawyer-retain-timing',
    keyword: '사기 혐의 변호사 선임 시점',
    questionKeyword: '사기 혐의 받았는데 변호사 언제 선임해야 하나요?',
    ctaKeyword: '사기 혐의 변호사 선임 시점 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '사기 혐의 변호사 선임 시점 — 단계별 3가지 | 로앤가이드',
      description:
        '사기 혐의를 받고 있는 피의자가 경찰 조사·검찰 송치·재판 중 어느 시점에 변호사를 선임해야 유리한지 단계별 기준을 지금 확인하세요.',
    },
    intro:
      '<p>사기 혐의를 받고 있다면 경찰에서 "조사 받으러 나오세요"라는 연락이 왔을 때가 가장 먼저 고민되는 순간입니다. 혼자 조사받고 나중에 변호사 부를지, 처음부터 동행할지 결정해야 하죠. 형사소송법 제30조는 피의자의 변호인 선임권을 보장하며, 경찰 조사 전 선임이 진술 조서 작성 단계부터 방어권을 행사할 수 있어 유리합니다.</p>',
    sections: [
      {
        title: '선임 1순위 — 경찰 출석 조사 전',
        content:
          '<p><strong style="color:#1e3a5f">혐의를 받고 있다면 첫 조사 전 선임이 가장 중요합니다.</strong></p>\n<ul>\n<li><strong>이유</strong> — 첫 진술 조서가 이후 모든 절차의 기초가 됨.</li>\n<li><strong>시점</strong> — 출석요구서 수령 후 2~3일 내.</li>\n<li><strong>준비</strong> — 변호사에 사실관계·증거·피해자 주장 전달.</li>\n<li><strong>효과</strong> — 조사 동행, 질문·답변 방향 사전 조율.</li>\n<li><strong>근거</strong> — 형사소송법 제243조의2 변호인 참여권.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진술 한 번 잘못하면 뒤집기 어렵습니다. 조사 전 30분이라도 변호사 상담하세요.</blockquote>',
      },
      {
        title: '선임 2순위 — 검찰 송치 직후',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사 끝나고 검찰 송치된 시점에 선임하면 기소 방향 조정 가능합니다.</strong></p>\n<ul>\n<li><strong>시점</strong> — 송치 통지서 받은 후 1주일 이내.</li>\n<li><strong>할 일</strong> — 수사기록 열람, 의견서 제출 전략 수립.</li>\n<li><strong>합의 시도</strong> — 검찰 처분 전 피해자 합의가 기소유예 가능성 상승.</li>\n<li><strong>기소유예 요청</strong> — 초범·피해회복 반영 의견서 제출.</li>\n<li><strong>처분 기간</strong> — 평균 1~3개월, 그 안에 모든 방어 활동 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 단계별 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '선임 3순위 — 기소 후 재판 단계',
        content:
          '<p><strong style="color:#1e3a5f">기소 후 선임은 감경 전략 중심입니다. 무죄보다 양형에 집중.</strong></p>\n<ul>\n<li><strong>1심 준비</strong> — 공소사실 인정 여부 결정, 다투면 증인·감정 신청.</li>\n<li><strong>피해자 합의</strong> — 판결 선고 전까지는 합의가 양형에 결정적 반영.</li>\n<li><strong>반성문·탄원서</strong> — 가족·지인 탄원서 5~10부 제출.</li>\n<li><strong>국선 vs 사선</strong> — 금액 크고 다툼 있으면 사선이 유리, 자백·초범이면 국선도 충분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기소 후 첫 재판은 공소장 확인 + 다툼 여부 결정 절차라 변호사와 전략 수립이 필수.</blockquote>',
      },
      {
        title: '혐의를 받고 있다면 — 지금 할 일 3가지',
        content:
          '<p><strong style="color:#1e3a5f">수사에 해당할 소지가 있는 단계에서 가장 먼저 챙겨야 할 3가지입니다.</strong></p>\n<ul>\n<li><strong>진술 조율</strong> — 조사 전 변호사와 예상 질문·답변 정리.</li>\n<li><strong>증거 정리</strong> — 유리한 자료(거래 내역·문자·계약서) 선별.</li>\n<li><strong>피해자 연락 자제</strong> — 합의는 변호사 통해 간접 접촉 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 본인이 피해자에 직접 연락하면 협박·회유로 오해될 수 있으니 변호사 경유.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 변호인 참여권과 조서 증거능력',
        summary:
          '대법원 2023도6106 사건(대법원, 2025.12.15 선고)에서 법원은 변호인의 조사 참여가 실질적으로 보장되지 않은 상태에서 작성된 피의자신문조서에 대해 증거능력을 제한적으로 판단할 수 있다고 판시했습니다. 초기 단계 변호인 선임의 실질적 효과가 확인된 사례입니다.',
        takeaway:
          '경찰 첫 조사부터 변호인을 참여시키면 진술 조서의 증거능력 다툼 여지가 커집니다.',
      },
    ],
    faq: [
      {
        question: '지금 국선 변호인만 생각하고 있어도 될까요?',
        answer:
          '<strong>기소 후에만 국선 선임 가능합니다.</strong> 경찰·검찰 단계는 사선 선임하거나 법률홈닥터·법률구조공단 이용.',
      },
      {
        question: '혼자 조사받고 변호사 나중에 쓰면 안 되나요?',
        answer:
          '<strong>가능하지만 첫 진술 뒤집기 어려우니 권장하지 않습니다.</strong> 최소 조사 전 전화 상담이라도 받으세요.',
      },
      {
        question: '변호사비 얼마나 드나요?',
        answer:
          '<strong>경찰 단계 300~500만 원, 기소 후 500~1,000만 원이 일반 시세입니다.</strong> 난이도·쟁점에 따라 차이.',
      },
      {
        question: '혐의 부인하는데 합의부터 하라고 하던데요?',
        answer:
          '<strong>혐의 부인과 합의는 병행 가능합니다.</strong> 조건부 합의(공소 유지 시 반환)로 안전장치 마련.',
      },
      {
        question: '피해자가 연락 오면 응해도 되나요?',
        answer:
          '<strong>변호사 통하세요.</strong> 직접 연락은 협박·증거인멸 오해 위험.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 혐의 피의자 방어 전략', href: '/guide/fraud/fraud-accused-defense-strategy-guide' },
      { label: '피의자 조사 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '합의와 감형 효과', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '초범 반성문 작성', href: '/guide/fraud/fraud-first-offense-before-apology-letter' },
      { label: '수사 중 흔한 실수', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
    ],
  },

  // ─── 6. divorce / consensual-intent-withdrawal-procedure ───
  {
    domain: 'divorce',
    slug: 'divorce-consensual-intent-withdrawal-procedure',
    keyword: '협의이혼 의사 철회 시점 절차',
    questionKeyword: '협의이혼 신청했는데 철회하고 싶으면 언제까지 가능한가요?',
    ctaKeyword: '협의이혼 철회 가능 여부 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '협의이혼 의사 철회 시점·절차 4단계 | 로앤가이드',
      description:
        '협의이혼 신청 후 마음이 바뀌었을 때 숙려기간·확인 단계·신고서 제출 전 어느 시점까지 철회 가능한지 단계별로 지금 확인하세요.',
    },
    intro:
      '<p>협의이혼 신청 후 숙려기간 동안 마음이 바뀌는 경우가 적지 않습니다. "법원 확인까지 받고 나면 취소 못 하나?"라는 질문이 많은데, 민법 제836조는 가정법원 확인 후에도 이혼신고서 제출 전이면 철회 가능하도록 규정합니다. 숙려기간 1개월(자녀 있으면 3개월) 중 어느 단계든 일방 철회가 가능합니다.</p>',
    sections: [
      {
        title: '단계별 철회 가능성 — 4단계',
        content:
          '<p><strong style="color:#1e3a5f">이혼신고서 접수 직전까지는 언제든 혼자 철회 가능합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 협의서 작성</strong> — 법원 제출 전이면 구두 번복만으로 종료.</li>\n<li><strong>2단계 — 가정법원 접수</strong> — 숙려기간 진행 중 "이혼의사확인 철회서" 제출.</li>\n<li><strong>3단계 — 이혼의사 확인 후</strong> — 3개월 내 신고서 미제출이면 자동 실효.</li>\n<li><strong>4단계 — 신고서 접수 순간</strong> — 이 시점 이후에는 혐의이혼 무효·취소 소송 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 확인기일에 본인이 "이혼 안 한다" 말해도 바로 철회 처리됩니다.</blockquote>',
      },
      {
        title: '철회 방법 — 단계별 서류와 제출처',
        content:
          '<p><strong style="color:#1e3a5f">단계별로 제출 서류와 방법이 다릅니다.</strong></p>\n<ul>\n<li><strong>확인기일 참석</strong> — 출석하지 않아도 자동 기각되지만 명확히 "철회" 의사 전달 권장.</li>\n<li><strong>이혼의사철회서</strong> — 가정법원 서식, 본인 서명 날인 후 관할 법원 제출.</li>\n<li><strong>준비서류</strong> — 신분증, 협의이혼의사확인신청 사건번호, 가족관계증명서.</li>\n<li><strong>제출처</strong> — 협의이혼 신청한 가정법원 또는 등록기준지 관할.</li>\n<li><strong>처리 기간</strong> — 접수 즉시 효력, 서류상 종결 1~2주.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 철회 가능 단계와 서류를 점검해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신고서 제출 후 — 협의이혼 무효·취소',
        content:
          '<p><strong style="color:#1e3a5f">이미 신고서가 수리됐으면 단순 철회가 아니라 소송이 필요합니다.</strong></p>\n<ul>\n<li><strong>무효 사유</strong> — 이혼 의사 없이 강박·착오로 신고된 경우, 가정법원 무효확인소송.</li>\n<li><strong>취소 사유</strong> — 사기·강박에 의한 이혼, 민법 제838조 취소 청구.</li>\n<li><strong>제소 기간</strong> — 사기·강박 사실 안 날로부터 3개월 이내.</li>\n<li><strong>입증 책임</strong> — 청구자가 사기·강박 사실 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단순 "마음 바뀜"은 무효·취소 사유 안 되므로 신고서 제출 전 철회가 안전합니다.</blockquote>',
      },
      {
        title: '철회 후 — 재산분할·양육 협의 처리',
        content:
          '<p><strong style="color:#1e3a5f">철회하면 기존 협의서는 자동 실효, 그러나 일부 합의는 증거로 남을 수 있습니다.</strong></p>\n<ul>\n<li><strong>재산분할 협의</strong> — 이혼 전제 협의는 실효, 재작성 필요.</li>\n<li><strong>양육비·친권자 협의</strong> — 동일하게 실효, 추후 이혼 시 재협의.</li>\n<li><strong>임시 별거 합의</strong> — 유지 가능, 상황에 따라 조정.</li>\n<li><strong>배우자 대응</strong> — 재판이혼 제기 가능성 대비, 증거 보존.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 철회 후 배우자가 재판이혼 제기하면 더 불리한 조건으로 갈 수 있어요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 협의이혼 의사 철회의 범위',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 협의이혼 의사표시 이후 최종 신고서 접수 전 단계에서는 일방의 철회가 법원 확인 절차 전반에 미치는 영향을 실질적으로 판단해야 한다고 판시했습니다. 이혼신고 전 철회의 광범위한 허용이 재확인된 사례입니다.',
        takeaway:
          '이혼신고서 접수 전이라면 상대방 동의 없이 혼자 철회가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '숙려기간에 상대방이 협조 안 하면 어떻게 되나요?',
        answer:
          '<strong>확인기일에 일방 불출석이면 이혼의사 확인 기각됩니다.</strong> 자연스럽게 협의이혼 불성립.',
      },
      {
        question: '확인 받고 신고 기한 3개월 넘기면 어떻게 되나요?',
        answer:
          '<strong>자동 실효됩니다.</strong> 다시 이혼하려면 협의이혼 재신청 필요.',
      },
      {
        question: '상대방이 이미 신고서 제출했는데 철회 가능한가요?',
        answer:
          '<strong>수리 전이면 가능, 수리 후에는 무효·취소 소송 필요합니다.</strong>',
      },
      {
        question: '철회하면 협의서 내용 공개되나요?',
        answer:
          '<strong>비공개로 종결됩니다.</strong> 다만 다음 이혼 시 제출 가능한 증거로 남을 수 있음.',
      },
      {
        question: '재산분할 합의만 철회 가능한가요?',
        answer:
          '<strong>협의이혼 전체 철회만 가능합니다.</strong> 부분 철회는 불가, 전체 취소 후 재협의.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '협의이혼 절차 전체 정리', href: '/guide/divorce/consensual-divorce-process' },
      { label: '숙려기간 단축 예외', href: '/guide/divorce/consensual-divorce-cooling-period-exceptions' },
      { label: '숙려기간 감면 조건', href: '/guide/divorce/consensual-divorce-cooling-period-reduction' },
      { label: '협의이혼 필요서류', href: '/guide/divorce/consensual-divorce-required-documents' },
      { label: '이혼 철회 기준', href: '/guide/divorce/divorce-reconciliation-withdraw-standard' },
    ],
  },

  // ─── 7. divorce / affair-alimony-evidence-5items ───
  {
    domain: 'divorce',
    slug: 'divorce-affair-alimony-evidence-5items',
    keyword: '외도 위자료 증거 5가지',
    questionKeyword: '배우자 외도 위자료 청구하려면 어떤 증거 필요한가요?',
    ctaKeyword: '외도 위자료 증거 확보 점검',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '외도 위자료 청구 증거 5가지 완벽 정리 | 로앤가이드',
      description:
        '배우자 외도로 위자료를 청구하려 할 때 법원이 인정하는 5가지 증거 유형과 불법 증거 구분 기준을 지금 확인하세요.',
    },
    intro:
      '<p>배우자의 외도를 확인했을 때 가장 먼저 할 일은 감정 표출이 아니라 증거 확보입니다. 민법 제840조 제1호는 "배우자의 부정행위"를 재판상 이혼 사유로 명시하고, 민법 제843조로 제3자(상간자)에도 위자료 청구 가능합니다. 다만 "외도 같다"로는 부족하고, 법원이 인정하는 5가지 증거 유형을 모아야 평균 2,000~5,000만 원의 위자료 인정률이 올라갑니다.</p>',
    sections: [
      {
        title: '증거 1·2 — 문자·대화 기록과 사진·영상',
        content:
          '<p><strong style="color:#1e3a5f">가장 기본적이고 효력 있는 증거입니다.</strong></p>\n<ul>\n<li><strong>문자·카톡</strong> — "사랑해", "어젯밤", "보고싶어" 등 감정 표현 캡처.</li>\n<li><strong>이메일·SNS DM</strong> — 공동 메일함이나 기기에서 합법 수집된 것.</li>\n<li><strong>호텔·모텔 사진</strong> — 함께 출입하는 장면, 제3자 제공도 인정.</li>\n<li><strong>CCTV 영상</strong> — 본인 주거지 CCTV는 합법, 상대 주거지는 불법.</li>\n<li><strong>주의</strong> — 배우자 기기 비밀번호 몰래 풀고 보면 정보통신망법 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 증거 자체는 있어도 수집 방법이 불법이면 증거능력이 부인될 수 있습니다.</blockquote>',
      },
      {
        title: '증거 3·4 — 신용카드·통장 내역과 숙박·교통 기록',
        content:
          '<p><strong style="color:#1e3a5f">물적 증거로 부정행위 시간·장소를 특정하는 결정적 자료입니다.</strong></p>\n<ul>\n<li><strong>신용카드 명세</strong> — 모텔·여행지 결제, 공동 생활비에서 빠진 지출.</li>\n<li><strong>통장 송금 내역</strong> — 상간자에 송금, 선물 구매 내역.</li>\n<li><strong>숙박 예약 내역</strong> — 야놀자·여기어때 등 앱 기록, 배우자 동의 하 확인 가능.</li>\n<li><strong>교통카드·하이패스</strong> — 심야 이동 경로, 배우자 명의 카드 조회.</li>\n<li><strong>호텔 영수증·객실 배정 기록</strong> — 제3자 제공 시 출처 확인 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 증거 적법성과 추가 필요 자료를 점검해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 5 — 증인 진술과 경위서',
        content:
          '<p><strong style="color:#1e3a5f">목격자·정황 증인의 진술서와 본인 경위서로 증거를 엮어줍니다.</strong></p>\n<ul>\n<li><strong>직장 동료·친구 진술서</strong> — 배우자의 부정 시인 발언 목격.</li>\n<li><strong>본인 경위서</strong> — 발견 시점·경로·증거 수집 과정 시계열 서술.</li>\n<li><strong>흥신소 조사 보고서</strong> — 합법 업체 의뢰 시 제한적 증거력.</li>\n<li><strong>녹음 파일</strong> — 본인 참여 대화는 합법, 제3자 간 녹음은 통신비밀보호법 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진술서는 공증까지 하면 증거력 상승, 다만 증인 심문 요청 시 법정 출석 필요.</blockquote>',
      },
      {
        title: '위자료 산정 — 증거 수준별 평균',
        content:
          '<p><strong style="color:#1e3a5f">증거가 명확할수록 위자료 인정 액수가 올라갑니다.</strong></p>\n<ul>\n<li><strong>정황 증거만</strong> — 1,000~2,000만 원, 기각 가능성도 존재.</li>\n<li><strong>문자·사진 확실</strong> — 2,000~3,500만 원이 일반적.</li>\n<li><strong>숙박·카드 내역 + 진술서</strong> — 3,500~5,000만 원, 혼인파탄 강도 반영.</li>\n<li><strong>장기·반복·아이 있는 경우</strong> — 5,000만 원 이상, 상간자 공동책임.</li>\n<li><strong>상간자 청구</strong> — 배우자와 별도로 민법 제843조 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 위자료 산정은 혼인기간·자녀·경제력·책임 정도 종합 판단.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 외도 증거능력과 위자료 인정',
        summary:
          '대법원 2023다285162 사건(대법원, 2026.01.22 선고)에서 법원은 외도 관련 민사 청구에서 증거의 적법한 수집 경위와 보전 시점을 종합해 입증 여부를 판단해야 한다고 판시했습니다. 증거 수집 방법의 적법성이 위자료 인용 여부를 가르는 핵심이 되었습니다.',
        takeaway:
          '불법 수집 증거는 오히려 불리하게 작용할 수 있으니 수집 단계부터 법적 점검이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '몰래 배우자 휴대폰 본 증거도 쓸 수 있나요?',
        answer:
          '<strong>정보통신망법 위반이라 원칙 불가입니다.</strong> 공동 가족 태블릿·공용 계정 증거가 안전.',
      },
      {
        question: '상간자 누군지 모르면 위자료 청구 못 하나요?',
        answer:
          '<strong>배우자 통장·카드에서 거래 상대방 정보 추적 가능합니다.</strong> 사실조회 신청으로 특정.',
      },
      {
        question: '외도 위자료만 받고 이혼은 안 해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 부정행위 알고도 용서하면 이혼 사유 소멸되지만 상간자 위자료는 별개.',
      },
      {
        question: '외도 사실 안 지 6개월 지났는데 아직 청구 가능한가요?',
        answer:
          '<strong>민법 제841조는 부정행위 안 날로부터 6개월 이내 이혼청구 제한 있습니다.</strong> 위자료 단독 청구는 3년.',
      },
      {
        question: '상간자가 "유부남인 줄 몰랐다" 주장하면요?',
        answer:
          '<strong>입증 책임은 상간자에게 있습니다.</strong> 실제로 몰랐음이 인정되면 위자료 감액·면제.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '외도 증거 증거능력 판단', href: '/guide/divorce/divorce-affair-evidence-admissibility' },
      { label: '상간자 위자료 청구', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: 'SNS·카톡 증거 효력', href: '/guide/divorce/divorce-sns-kakao-evidence-validity' },
      { label: '쌍방 외도 위자료', href: '/guide/divorce/divorce-both-fault-affair-third-party-claim' },
      { label: '외도 배우자 이혼 대응', href: '/guide/divorce/spouse-affair-divorce-response' },
    ],
  },

  // ─── 8. divorce / visitation-denied-enforcement-apply ───
  {
    domain: 'divorce',
    slug: 'divorce-visitation-denied-enforcement-apply',
    keyword: '면접교섭권 거부 강제이행 신청',
    questionKeyword: '면접교섭 거부당했을 때 강제할 방법 있나요?',
    ctaKeyword: '면접교섭 강제이행 신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '면접교섭권 거부 대응 — 이행명령 신청 4단계 | 로앤가이드',
      description:
        '양육자가 면접교섭을 거부할 때 비양육 부모가 이행명령·간접강제·과태료까지 신청하는 4단계 절차와 서류를 지금 확인하세요.',
    },
    intro:
      '<p>이혼 후 아이를 정해진 날짜에 못 만나는 건 부모에게 큰 상처입니다. 양육자가 "아이가 싫어한다", "바쁘다"며 계속 거부하면 민법 제837조의2가 정한 면접교섭권이 무력해지죠. 가사소송법 제64조는 이행명령, 제67조는 간접강제·과태료 부과로 강제 수단을 마련했습니다. 구두 요청 → 이행명령 → 간접강제 → 친권자 변경까지 단계별 대응이 가능합니다.</p>',
    sections: [
      {
        title: '1단계 — 서면 요청과 기록 확보',
        content:
          '<p><strong style="color:#1e3a5f">법적 절차 전에 거부 사실을 증거로 남겨야 합니다.</strong></p>\n<ul>\n<li><strong>거부 사실 기록</strong> — 날짜·요청 방법·거부 이유 시계열 정리.</li>\n<li><strong>내용증명 발송</strong> — "정해진 면접교섭 이행 촉구", 2회 이상 발송 권장.</li>\n<li><strong>카톡·문자 보존</strong> — 면접교섭 요청·거부 대화 전체 캡처.</li>\n<li><strong>이행명령 전제 조건</strong> — "조정조서 또는 확정판결이 있을 것".</li>\n<li><strong>협의만 있고 판결 없으면</strong> — 면접교섭 청구 심판 먼저 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이행명령 신청 시 "거부 횟수·이유"가 구체적이어야 인용률이 높습니다.</blockquote>',
      },
      {
        title: '2단계 — 이행명령 신청',
        content:
          '<p><strong style="color:#1e3a5f">가장 먼저 사용하는 수단입니다. 비용 3~5만 원, 절차 1~2개월.</strong></p>\n<ul>\n<li><strong>관할</strong> — 피신청인(양육자) 주소지 가정법원.</li>\n<li><strong>신청서 내용</strong> — 기존 조정조서·판결문, 거부 사실, 요청 일자.</li>\n<li><strong>첨부서류</strong> — 조정조서 정본, 가족관계증명서, 내용증명.</li>\n<li><strong>인지대·송달료</strong> — 인지 5,000원 + 송달료 약 3만 원.</li>\n<li><strong>심리 방식</strong> — 서면 + 필요 시 심문, 양육자 의견 청취.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 이행명령 신청서 작성과 단계별 대응을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 간접강제·과태료',
        content:
          '<p><strong style="color:#1e3a5f">이행명령 후에도 거부하면 과태료와 간접강제금 부과됩니다.</strong></p>\n<ul>\n<li><strong>과태료</strong> — 1,000만 원 이하, 가사소송법 제67조 제1항.</li>\n<li><strong>감치</strong> — 30일 이하 감치 가능, 현실 적용 드물지만 압박 수단.</li>\n<li><strong>간접강제금</strong> — "1회 거부 시 ○○만 원" 지정, 집행 가능.</li>\n<li><strong>신청 시점</strong> — 이행명령 후에도 지속 거부 시 별도 신청.</li>\n<li><strong>효과</strong> — 실질적으로 양육자 태도 변화, 인용률 70% 이상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 간접강제금은 "1회 거부당 30~50만 원" 수준이 일반적, 누적되면 부담 커서 이행 압박.</blockquote>',
      },
      {
        title: '4단계 — 친권자·양육자 변경 청구',
        content:
          '<p><strong style="color:#1e3a5f">지속적 거부가 아이 복리 침해 수준이면 양육자 변경까지 가능합니다.</strong></p>\n<ul>\n<li><strong>변경 사유</strong> — 양육자의 고의적 면접교섭 방해, 아이의 부모에 대한 왜곡된 인식 조장.</li>\n<li><strong>절차</strong> — 가정법원에 친권·양육권자 변경 청구.</li>\n<li><strong>판단 기준</strong> — "아이의 복리에 반하는 심각한 방해" 입증 필요.</li>\n<li><strong>대법원 기준</strong> — 1회·일시적 거부로는 변경 불가, 반복적·악의적이어야.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 아이가 실제로 부모를 거부하는 경우(PAS, 부모 소외 증후군) 가사조사관 조사 거쳐야.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면접교섭 방해와 양육자 변경',
        summary:
          '대법원 2023스637 사건(대법원, 2024.10.08 선고)에서 법원은 양육자가 반복적으로 면접교섭을 방해하고 아이의 비양육 부모에 대한 인식을 왜곡하는 행위가 지속될 경우 자녀의 복리를 위해 친권·양육자 변경까지 고려할 수 있다고 판시했습니다. 면접교섭 방해의 법적 책임 수위를 확인한 사례입니다.',
        takeaway:
          '지속적 거부는 양육자 변경 사유가 될 수 있으므로 이행명령부터 단계적으로 밟아두세요.',
      },
    ],
    faq: [
      {
        question: '조정조서도 없이 구두 약속만 있으면 이행명령 안 되나요?',
        answer:
          '<strong>불가능합니다.</strong> 먼저 면접교섭권 지정 심판 청구부터 필요합니다.',
      },
      {
        question: '아이가 "아빠 싫어"라고 하면 어떻게 되나요?',
        answer:
          '<strong>아이 의사만으로 거부 정당화되지는 않습니다.</strong> 다만 13세 이상이면 가사조사 거쳐 조정 가능.',
      },
      {
        question: '이행명령 후에도 계속 거부하면 감치 가능한가요?',
        answer:
          '<strong>법적으로 가능하지만 실제 감치 사례는 드뭅니다.</strong> 간접강제금 부과가 실효적 수단.',
      },
      {
        question: '양육비 안 주면 면접교섭 거부해도 되나요?',
        answer:
          '<strong>안 됩니다.</strong> 양육비와 면접교섭권은 별개 권리, 양육비 미납은 별도 강제집행.',
      },
      {
        question: '화상 면접교섭도 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 조정조서에 "주 1회 영상통화" 명시하면 동일하게 이행명령 대상.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '면접교섭 거부 대응', href: '/guide/divorce/divorce-visitation-denied-response' },
      { label: '조부모 면접교섭권 가이드', href: '/guide/divorce/divorce-grandparent-visitation-rights-guide' },
      { label: '양육비 강제집행', href: '/guide/divorce/divorce-child-support-enforcement-guide' },
      { label: '양육비 이행명령 감치', href: '/guide/divorce/child-support-enforcement-contempt-order' },
      { label: '친권자 변경 청구 기준', href: '/guide/divorce/divorce-teenager-custody-own-choice' },
    ],
  },

  // ─── 9. divorce / omitted-asset-additional-claim ───
  {
    domain: 'divorce',
    slug: 'divorce-omitted-asset-additional-claim',
    keyword: '이혼 후 누락 재산 추가 청구',
    questionKeyword: '이혼 후 숨긴 재산 발견했는데 추가로 받을 수 있나요?',
    ctaKeyword: '이혼 후 재산 추가 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이혼 후 재산분할 누락 자산 추가 청구 — 3단계 절차 | 로앤가이드',
      description:
        '이혼 후 배우자가 숨긴 재산을 뒤늦게 발견했을 때 추가 재산분할을 청구할 수 있는 2년 제척기간과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>이혼 재산분할 후 "배우자가 숨긴 부동산이 있었다"거나 "명의신탁 계좌를 뒤늦게 알았다"는 경우가 생각보다 많습니다. 민법 제839조의2 제3항은 재산분할 청구권의 제척기간을 이혼 후 2년으로 정해, 이 기간 내에 추가 청구가 가능합니다. 단순 "아까웠다"가 아니라 누락·은닉된 재산에 한정되며, 발견 시점부터 신속한 대응이 관건입니다.</p>',
    sections: [
      {
        title: '청구 가능 조건 — 2년 제척기간과 대상',
        content:
          '<p><strong style="color:#1e3a5f">제척기간·은닉 사실·부부 공동재산성 3가지가 모두 충족되어야 합니다.</strong></p>\n<ul>\n<li><strong>제척기간</strong> — 이혼 성립일로부터 2년 이내, 경과 시 소멸.</li>\n<li><strong>대상</strong> — 분할 대상에서 누락된 부부 공동재산만 해당.</li>\n<li><strong>제외 대상</strong> — 이미 분할했으나 가치 재평가 요구는 불가.</li>\n<li><strong>상대방 입증</strong> — 은닉했거나 고의 불고지 사실 명확히 할 것.</li>\n<li><strong>증거 수집</strong> — 등기부등본, 금융거래내역, 사업자등록 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2년 넘으면 아무리 많이 숨겼어도 청구 불가, 즉시 신청이 우선.</blockquote>',
      },
      {
        title: '재산 추적 — 누락 자산 발견 방법',
        content:
          '<p><strong style="color:#1e3a5f">이혼 후에도 법원 사실조회 신청으로 재산 조회 가능합니다.</strong></p>\n<ul>\n<li><strong>부동산</strong> — 전국 등기부 열람, 배우자 명의·타인 명의 신탁 추적.</li>\n<li><strong>금융자산</strong> — 법원 사실조회, 전 은행·증권사·보험사 조회.</li>\n<li><strong>사업체 지분</strong> — 법인등기부, 주주명부 조회.</li>\n<li><strong>암호화폐</strong> — 거래소 사실조회, 지갑주소 추적.</li>\n<li><strong>연금·퇴직금</strong> — 국민연금·공무원연금·퇴직연금 DB 조회.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 누락 자산 추적 방법과 청구 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '청구 절차 — 3단계 진행',
        content:
          '<p><strong style="color:#1e3a5f">본심판 청구 → 증거 조사 → 인용까지 평균 6개월~1년 걸립니다.</strong></p>\n<ul>\n<li><strong>1단계</strong> — 가정법원에 재산분할 심판청구, 누락 재산 특정.</li>\n<li><strong>2단계</strong> — 사실조회 신청, 상대방 재산 세부 조회 및 입증.</li>\n<li><strong>3단계</strong> — 조정·심판 후 결정, 분할 비율 재산정.</li>\n<li><strong>비용</strong> — 인지대는 청구 금액 기준, 변호사비 별도.</li>\n<li><strong>병행 가능</strong> — 사기·배임죄 형사 고소 병행 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 조정이 먼저 시도되며 그 단계에서 자진 추가 분할 합의 가능.</blockquote>',
      },
      {
        title: '은닉 입증 — 유리한 정황 4가지',
        content:
          '<p><strong style="color:#1e3a5f">단순 누락이 아니라 "고의 은닉"이 확인되면 유리한 분할 비율 가능합니다.</strong></p>\n<ul>\n<li><strong>명의신탁</strong> — 제3자 명의로 돌린 부동산·계좌.</li>\n<li><strong>이혼 직전 처분</strong> — 이혼 협의 개시 후 부동산 매각·증여.</li>\n<li><strong>해외 이체</strong> — 국외 계좌·해외 부동산 이동.</li>\n<li><strong>현금 인출</strong> — 이혼 전 수개월간 대규모 인출 내역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 은닉 증거가 약하면 "몰랐다" 주장에 막힐 수 있어 금융거래내역 확보가 필수.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 제척기간의 기산점',
        summary:
          '대법원 2024드11526 사건(대법원, 2024.10.25 선고)에서 법원은 재산분할 청구권의 제척기간은 이혼 성립일을 기준으로 하되, 은닉된 재산이 뒤늦게 확인된 경우에도 기간 경과 여부는 엄격하게 판단해야 한다고 보았습니다. 이혼 후 2년의 의미가 재확인된 사례입니다.',
        takeaway:
          '이혼 후 2년 이내에 청구해야 하며 기산점은 이혼 성립일 기준입니다.',
      },
    ],
    faq: [
      {
        question: '이혼한 지 3년 됐는데 지금도 청구 가능한가요?',
        answer:
          '<strong>원칙적으로 제척기간 2년이 지나 불가합니다.</strong> 다만 사기·배임 등 별도 청구 권원 검토.',
      },
      {
        question: '합의이혼 협의서에 "향후 일체 청구 않음" 조항 있으면요?',
        answer:
          '<strong>조항은 원칙 유효하나, 은닉된 재산은 합의 대상 밖이므로 별도 청구 가능성이 있습니다.</strong>',
      },
      {
        question: '상대가 해외로 이민 가면 어떻게 하나요?',
        answer:
          '<strong>한국 법원 관할 유지되나 집행이 어려워집니다.</strong> 국외 재산은 현지 법원 병행 검토.',
      },
      {
        question: '증거가 부족해도 사실조회만으로 가능한가요?',
        answer:
          '<strong>법원은 사실조회에 소극적이므로 초기 증거가 있어야 허가됩니다.</strong>',
      },
      {
        question: '추가 청구 결과 얼마나 받을 수 있나요?',
        answer:
          '<strong>누락 재산 가치 × 기여도 비율입니다.</strong> 평균 20~50% 수준, 혼인기간·기여 정도 반영.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '배우자 재산 은닉 탐지', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '숨긴 소득·자산 조사', href: '/guide/divorce/divorce-hidden-income-asset-investigation' },
      { label: '자영업자 자산 추적', href: '/guide/divorce/divorce-business-owner-hidden-assets-trace' },
      { label: '재산 은폐 방어 전략', href: '/guide/divorce/divorce-property-concealment-defense' },
      { label: '재산 처분 방지', href: '/guide/divorce/divorce-asset-disposal-grounds' },
    ],
  },

  // ─── 10. defamation / group-chat-requirements-4items ───
  {
    domain: 'defamation',
    slug: 'defamation-group-chat-requirements-4items',
    keyword: '단톡방 명예훼손 성립 요건',
    questionKeyword: '단톡방에서 욕설·험담당했는데 명예훼손 되나요?',
    ctaKeyword: '단톡방 명예훼손 성립 점검',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '단톡방 명예훼손 성립 요건 4가지 완벽 정리 | 로앤가이드',
      description:
        '카카오톡·라인 단체방에서 당한 험담·욕설이 명예훼손·모욕죄로 성립하려면 갖춰야 할 4가지 요건과 증거 수집을 지금 확인하세요.',
    },
    intro:
      '<p>"단톡방에서 뒷담화 당했는데 명예훼손으로 고소할 수 있나요?"라는 질문이 늘고 있습니다. 형법 제307조 명예훼손은 "공연히 사실(또는 허위)을 적시해 사람의 명예를 훼손"할 것을 요건으로 하며, 정보통신망법 제70조는 정보통신망 이용 시 가중처벌합니다. 단톡방도 참여자 수·공연성·특정성·명예훼손적 표현 4가지가 갖춰지면 성립할 수 있습니다.</p>',
    sections: [
      {
        title: '요건 1·2 — 공연성과 특정성',
        content:
          '<p><strong style="color:#1e3a5f">공연성은 "전파될 가능성", 특정성은 "누구인지 알 수 있음"입니다.</strong></p>\n<ul>\n<li><strong>공연성(公然性)</strong> — 단톡방 멤버 3명 이상이면 기본 인정, 1대1은 안 됨.</li>\n<li><strong>전파 가능성</strong> — 불특정 다수 전파 가능하면 공연성 인정.</li>\n<li><strong>특정성</strong> — 실명 없어도 "○○회사 부장님" 등 특정 가능하면 OK.</li>\n<li><strong>간접 특정</strong> — 주변 사람이 누구인지 알 수 있는 정도.</li>\n<li><strong>근거</strong> — 대법원은 3인 이상 단톡방 공연성 인정 판례 다수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "멤버 아무도 안 퍼뜨렸다"도 공연성이 부정되지 않습니다. 가능성만 있으면 OK.</blockquote>',
      },
      {
        title: '요건 3·4 — 사실(허위) 적시와 명예훼손적 표현',
        content:
          '<p><strong style="color:#1e3a5f">단순 욕설은 모욕, 사실·허위 적시는 명예훼손으로 나뉩니다.</strong></p>\n<ul>\n<li><strong>사실적시</strong> — "○○이 회사 돈 횡령했다" — 진실이어도 명예훼손 성립 가능.</li>\n<li><strong>허위사실</strong> — 거짓 사실 적시, 가중처벌(7년 이하 징역).</li>\n<li><strong>의견·평가</strong> — "그 사람 이상해" 등 주관적 표현은 모욕죄 검토.</li>\n<li><strong>단순 욕설</strong> — "ㅂㅅ", "쓰레기" — 모욕죄(1년 이하 징역·200만 원 이하 벌금).</li>\n<li><strong>정통망법 가중</strong> — 온라인에서 하면 3년(사실)·7년(허위) 이하 징역.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 요건 충족과 고소 가능성을 점검해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 수집 — 단톡방 특유 방법',
        content:
          '<p><strong style="color:#1e3a5f">단톡방은 증거 보존이 시간과의 싸움입니다. 나가거나 삭제되면 회복 어려움.</strong></p>\n<ul>\n<li><strong>화면 캡처</strong> — 해당 메시지 + 발송자명 + 날짜 함께 나오게.</li>\n<li><strong>대화 내보내기</strong> — 카카오톡 "대화 내용 내보내기" TXT 파일.</li>\n<li><strong>참여자 명단</strong> — 단톡방 구성원 스크린샷, 특정성·공연성 입증.</li>\n<li><strong>제3자 진술</strong> — 함께 본 멤버의 진술서·확인서 확보.</li>\n<li><strong>공증</strong> — 중요 건은 공증으로 증거력 강화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대방이 "톡 삭제하기" 기능으로 지워도 이미 본 다른 멤버 캡처로 입증 가능.</blockquote>',
      },
      {
        title: '고소·합의 시 — 양형과 위자료',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손은 반의사불벌죄, 합의 시점이 중요합니다.</strong></p>\n<ul>\n<li><strong>반의사불벌</strong> — 형법상 명예훼손은 피해자가 처벌 불원하면 불벌.</li>\n<li><strong>친고죄 아님</strong> — 고소기간 제한 없음, 공소시효 5~7년.</li>\n<li><strong>양형 기준</strong> — 벌금 100~500만 원, 상습·다중이면 징역형.</li>\n<li><strong>민사 위자료</strong> — 단톡방 인원수·허위성·피해 정도 반영, 100~1,000만 원.</li>\n<li><strong>합의 시점</strong> — 1심 선고 전까지는 반영되지만, 빠를수록 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 시 "동일인에 추가 비방 금지" 조건 넣기, 재발 방지책 확보.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단톡방 공연성 판단',
        summary:
          '대법원 2022도10369 사건(대법원, 2025.10.30 선고)에서 법원은 카카오톡 등 폐쇄적 단체방이라도 상당수의 참여자가 전파 가능성이 있는 환경에 있었다면 명예훼손죄의 공연성이 인정될 수 있다고 판시했습니다. 단톡방 발언도 사실·허위 적시에 따라 처벌 대상이라는 기준이 확립된 사례입니다.',
        takeaway:
          '단톡방 3인 이상이면 공연성 인정되고 멤버가 외부에 퍼뜨릴 가능성이 있으면 처벌 대상입니다.',
      },
    ],
    faq: [
      {
        question: '단톡방 참여자 3명인데도 성립하나요?',
        answer:
          '<strong>네, 3인 이상이면 공연성 인정될 수 있습니다.</strong> 판례상 2인만 있는 방은 일반적으로 불인정.',
      },
      {
        question: '이미 단톡방 나가서 증거가 없는데요?',
        answer:
          '<strong>다른 멤버에게 캡처 요청하거나 본인 휴대폰 백업 복원 가능합니다.</strong>',
      },
      {
        question: '허위가 아니고 진짜 사실이면 무죄인가요?',
        answer:
          '<strong>아닙니다.</strong> 형법 제307조 제1항은 사실이어도 명예훼손 성립, 다만 공익 목적이면 위법성 조각.',
      },
      {
        question: '욕설만 있으면 명예훼손 안 되나요?',
        answer:
          '<strong>모욕죄로 별도 처벌 대상으로 검토될 수 있습니다.</strong> 사실 적시 없이 욕설만 있으면 모욕죄(형법 제311조).',
      },
      {
        question: '가해자 처벌까지 얼마나 걸리나요?',
        answer:
          '<strong>고소 접수부터 평균 4~8개월입니다.</strong> 단순·초범이면 벌금형 처분 많음.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '단톡방 유출 명예훼손 고소', href: '/guide/defamation/defamation-group-chat-leak-complaint' },
      { label: '명예훼손 성립 요건 체크', href: '/guide/defamation/defamation-requirements-checklist' },
      { label: '직장 험담 명예훼손', href: '/guide/defamation/defamation-workplace-rumor-complaint-prep' },
      { label: '명예훼손 고소장 작성', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '위자료 산정 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 11. defamation / accused-truth-defense-argument ─── (accused)
  {
    domain: 'defamation',
    slug: 'defamation-accused-truth-defense-argument',
    keyword: '명예훼손 진실적시 항변',
    questionKeyword: '명예훼손 고소당했는데 사실 그대로 말한 건데 처벌되나요?',
    ctaKeyword: '진실적시 명예훼손 항변 점검',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '명예훼손 고소 대응 — 진실적시 항변 4가지 | 로앤가이드',
      description:
        '명예훼손 혐의를 받고 있다면 사실을 말한 것만으로도 성립하는지, 공익 목적 위법성 조각사유로 빠져나갈 방법이 있는지 지금 확인하세요.',
    },
    intro:
      '<p>명예훼손 혐의를 받고 있다면 "사실 그대로 말했을 뿐인데"라는 억울함이 먼저 들 수 있습니다. 다만 형법 제307조 제1항은 "사실을 적시하여도" 명예훼손 성립을 인정하므로, 단순 진실만으로는 무죄가 안 됩니다. 대신 형법 제310조 위법성 조각(진실 + 공익성) 요건을 갖추면 처벌을 면할 수 있으므로, 해당할 소지가 있다면 항변 구조를 정확히 이해해야 합니다.</p>',
    sections: [
      {
        title: '형법 제310조 — 위법성 조각 요건',
        content:
          '<p><strong style="color:#1e3a5f">"진실한 사실 + 공익 목적" 두 가지가 모두 충족되어야 처벌 면제됩니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 적시한 사실이 객관적으로 진실할 것, 입증 책임은 피의자.</li>\n<li><strong>공익성</strong> — 사회 일반 이익 목적, 사적 원한·보복 제외.</li>\n<li><strong>공공의 관심사</strong> — 공직자·기업·사회적 지위자에 관한 내용 유리.</li>\n<li><strong>사인 간 다툼</strong> — 개인적 원한이면 공익성 부정될 가능성.</li>\n<li><strong>입증 수단</strong> — 문서·녹음·증인 등 객관적 자료 제시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진실성 + 공익성 중 하나라도 약하면 처벌 가능, 특히 공익성 입증이 어려워요.</blockquote>',
      },
      {
        title: '실제 자주 인정되는 상황 — 공익성 인정 유형',
        content:
          '<p><strong style="color:#1e3a5f">판례상 공익성이 비교적 잘 인정되는 유형이 있습니다.</strong></p>\n<ul>\n<li><strong>공직자 비리 폭로</strong> — 국회의원·공무원 부패 신고성 글.</li>\n<li><strong>기업의 소비자 피해 고발</strong> — 제품 하자·서비스 불량 공개.</li>\n<li><strong>의료사고 공유</strong> — 동일 피해자 방지 목적.</li>\n<li><strong>학원·식당 부당행위</strong> — 불특정 다수 보호 목적.</li>\n<li><strong>범죄 피해 경험 공유</strong> — 유사 피해 예방 목적.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 공익성 인정 가능성과 항변 전략을 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공익성 부정 — 주의해야 할 4가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 경우에는 진실이어도 공익성 인정이 어려우니 해당할 소지가 있다면 주의합니다.</strong></p>\n<ul>\n<li><strong>사적 원한</strong> — 개인 갈등 폭로, 복수 의도 명백.</li>\n<li><strong>과장·왜곡</strong> — 일부 진실에 거짓 덧붙임, 진실성 자체 부정.</li>\n<li><strong>익명 비방</strong> — 닉네임 뒤에 숨어 여러 커뮤니티 확산.</li>\n<li><strong>피해자 개인정보 공개</strong> — 실명·주소·직장 공개는 명예훼손 + 개인정보보호법 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 내용이어도 "개인 대 개인" 폭로가 "소비자 보호" 형식을 갖추면 공익성 평가 달라집니다.</blockquote>',
      },
      {
        title: '해당할 소지가 있다면 — 지금 할 일 3가지',
        content:
          '<p><strong style="color:#1e3a5f">혐의를 받고 있다면 즉시 해야 할 대응입니다.</strong></p>\n<ul>\n<li><strong>게시물 관리</strong> — 추가 확산 중단, 삭제 여부는 변호사 상담 후 결정(증거인멸 오해 주의).</li>\n<li><strong>진실성 입증 자료 정리</strong> — 근거 문서·증언·녹음 시계열 정리.</li>\n<li><strong>공익 목적 문서화</strong> — 글 작성 경위·목적 경위서 작성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임의로 삭제하면 증거인멸로 불리할 수 있으니 변호사와 상의.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 진실적시 위법성 조각 범위',
        summary:
          '대법원 2022도242649 사건(대법원, 2025.06.26 선고)에서 법원은 진실한 사실 적시라도 주된 목적이 사적 원한 해소이거나 공공의 이익과 연관성이 약한 경우 위법성 조각사유 인정에 소극적이라는 법리를 재확인했습니다. 공익성 입증 없이는 진실만으로 무죄 주장이 어려움을 보여줍니다.',
        takeaway:
          '진실 + 공익 두 축을 모두 입증해야 무죄, 둘 중 하나만 있으면 유죄 가능성이 큽니다.',
      },
    ],
    faq: [
      {
        question: '진실만 말했으면 무죄 아닌가요?',
        answer:
          '<strong>진실만으로는 부족합니다.</strong> 공익 목적까지 인정되어야 위법성 조각.',
      },
      {
        question: '블로그 글 지금 삭제해도 되나요?',
        answer:
          '<strong>변호사와 상담 후 결정하세요.</strong> 증거인멸 오해 위험, 조사 전 보존이 원칙.',
      },
      {
        question: '피해자와 합의하면 끝나나요?',
        answer:
          '<strong>명예훼손은 반의사불벌죄이므로 피해자 처벌불원서 제출 시 불기소됩니다.</strong>',
      },
      {
        question: '모욕죄도 합의 가능한가요?',
        answer:
          '<strong>모욕죄는 친고죄, 고소 취하로 종결됩니다.</strong>',
      },
      {
        question: '익명으로 썼어도 추적되나요?',
        answer:
          '<strong>IP 추적·통신영장으로 신원 특정 가능합니다.</strong> 익명이라고 안전하지 않음.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '진실적시 명예훼손 대응', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '진실이어도 처벌되는 이유', href: '/guide/defamation/defamation-truth-still-guilty' },
      { label: '피의자 방어 전략 가이드', href: '/guide/defamation/defamation-accused-defense-strategy' },
      { label: '공익 목적 비판 방어', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '피의자 대응 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
    ],
  },

  // ─── 12. defamation / online-post-deletion-request-procedure ───
  {
    domain: 'defamation',
    slug: 'defamation-online-post-deletion-request-procedure',
    keyword: '온라인 게시글 삭제 요청 절차',
    questionKeyword: '인터넷에 나를 비방하는 글 있는데 삭제 요청 어떻게 하나요?',
    ctaKeyword: '온라인 게시글 삭제 요청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 게시글 삭제 요청 — 정통망법 4단계 | 로앤가이드',
      description:
        '포털·카페·블로그에 올라온 비방 글을 삭제하려 할 때 정보통신망법에 따른 임시조치·삭제 요청 4단계 절차와 답변 기한을 지금 확인하세요.',
    },
    intro:
      '<p>포털 게시판·블로그·카페에 본인을 비방하는 글이 올라오면 "어디서부터 지워야 하나" 막막합니다. 정보통신망법 제44조의2는 피해자가 사업자에 직접 삭제·임시조치를 요청할 수 있는 권리를 규정하며, 게시자가 30일 이내 이의 제기 없으면 자동 삭제됩니다. 운영사 신고 → 방송통신심의위원회 → 민·형사까지 4단계 절차로 대응하면 대부분 해결됩니다.</p>',
    sections: [
      {
        title: '1단계 — 운영사 직접 삭제 요청',
        content:
          '<p><strong style="color:#1e3a5f">가장 빠르고 효과적입니다. 30일 이내 임시조치 원칙.</strong></p>\n<ul>\n<li><strong>신청 경로</strong> — 네이버·다음·구글 각 운영자 페이지 "게시물 신고".</li>\n<li><strong>필수 정보</strong> — 게시물 URL, 피해 내용, 본인 신분증.</li>\n<li><strong>즉시 조치</strong> — 명백히 위법이면 24~48시간 내 블라인드.</li>\n<li><strong>임시조치</strong> — 검토 중 "블라인드" 처리, 게시자 30일 내 이의 없으면 자동 삭제.</li>\n<li><strong>이의 제기 시</strong> — 방송통신심의위원회 또는 법원으로 이동.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: URL 여러 개면 각각 신청해야 합니다. 한 번에 일괄 신청 불가.</blockquote>',
      },
      {
        title: '2단계 — 방송통신심의위원회',
        content:
          '<p><strong style="color:#1e3a5f">운영사가 거절하거나 해외 플랫폼이면 방심위 신고가 다음 단계입니다.</strong></p>\n<ul>\n<li><strong>신청 방법</strong> — 방심위 인터넷내용등급 신고(https://remedy.kocsc.or.kr).</li>\n<li><strong>첨부자료</strong> — 게시물 캡처, 신분증, 피해 사유.</li>\n<li><strong>심의 기간</strong> — 평균 2~4주, 의결 시 플랫폼에 삭제 요청.</li>\n<li><strong>처리 범위</strong> — 국내 사이트는 90% 이상 삭제, 해외는 접속차단.</li>\n<li><strong>비용</strong> — 무료.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 단계별 신청 경로와 필요 서류를 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 법원 임시처분·가처분',
        content:
          '<p><strong style="color:#1e3a5f">긴급하거나 운영사가 거절하면 법원 가처분이 강제력 있습니다.</strong></p>\n<ul>\n<li><strong>신청</strong> — 게시물 게재 금지 또는 삭제 가처분, 관할 지방법원.</li>\n<li><strong>요건</strong> — 피보전권리(명예권 침해) + 보전 필요성(긴급성).</li>\n<li><strong>처리 기간</strong> — 평균 2~6주, 심문기일 지정.</li>\n<li><strong>비용</strong> — 인지대·송달료 + 변호사비(선택).</li>\n<li><strong>효과</strong> — 결정문 즉시 송달, 플랫폼 강제 삭제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가처분은 본안소송 전 임시 구제, 손해배상은 별도 민사 필요.</blockquote>',
      },
      {
        title: '4단계 — 형사 고소와 손해배상',
        content:
          '<p><strong style="color:#1e3a5f">형사 고소가 병행되면 게시자 신원 특정·삭제 강제력 모두 확보됩니다.</strong></p>\n<ul>\n<li><strong>정통망법 제70조</strong> — 사실 3년·허위 7년 이하 징역, 반의사불벌.</li>\n<li><strong>경찰 수사</strong> — IP 추적·통신영장으로 익명 작성자 특정.</li>\n<li><strong>민사 위자료</strong> — 인터넷 명예훼손 300~2,000만 원 수준.</li>\n<li><strong>처벌불원 조건부</strong> — 합의 시 글 삭제·재발 방지 조건 명시.</li>\n<li><strong>공소시효</strong> — 5~7년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 형사 절차는 길 수 있으니 삭제 긴급하면 운영사·가처분 우선, 형사는 병행.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인터넷 명예훼손 표현과 삭제 요청',
        summary:
          '대법원 2025도4697 사건(대법원, 2025.05.01 선고)에서 법원은 특정 개인에 관한 사실적 표현이 지속적으로 게시되는 경우 사생활·인격권 침해 정도에 따라 삭제·접속차단 청구의 보전 필요성이 인정될 수 있다고 판시했습니다. 정통망법 임시조치·가처분의 실질적 효용이 확인된 사례입니다.',
        takeaway:
          '지속적 비방 글에는 임시조치·가처분이 인정될 가능성이 크니 신속히 신청하세요.',
      },
    ],
    faq: [
      {
        question: '운영사에 신고했는데 응답 없으면요?',
        answer:
          '<strong>30일 지나면 방송통신심의위원회로 바로 이동하세요.</strong> 무응답도 거절로 간주.',
      },
      {
        question: '게시자가 누군지 모르는데 삭제 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 피해자 요청만으로 플랫폼이 임시조치할 수 있음, 게시자 이의 없으면 자동 삭제.',
      },
      {
        question: '해외 사이트 글은 어떻게 하나요?',
        answer:
          '<strong>방심위 접속차단 요청이 최선입니다.</strong> 완전 삭제는 해외 플랫폼 정책에 따라 달라짐.',
      },
      {
        question: '진실 게시글도 삭제 가능한가요?',
        answer:
          '<strong>공익성 없이 사적 원한이면 삭제 가능합니다.</strong> 공익성 있으면 표현의 자유로 기각 가능.',
      },
      {
        question: '임시조치된 글이 복구되는 경우도 있나요?',
        answer:
          '<strong>게시자가 30일 내 이의 제기하면 복구될 수 있습니다.</strong> 이때 방심위·법원 절차 병행.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '온라인 허위글 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '온라인 명예훼손 증거 수집', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '온라인 명예훼손 소송 절차', href: '/guide/defamation/online-defamation-lawsuit-process' },
      { label: '악성 리뷰 대응', href: '/guide/defamation/defamation-online-review-bad-writing' },
      { label: '피해자 대응 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
    ],
  },
];
