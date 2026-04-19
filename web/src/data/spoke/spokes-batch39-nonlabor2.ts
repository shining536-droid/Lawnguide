import { SpokePage } from '../spoke-pages';

// batch39 비노동2 12개: 회생파산 4 + 상속 3 + 명예훼손·스토킹 3 + 전세 2

export const spokesBatch39Nonlabor2: SpokePage[] = [
  // ─── 1. rehabilitation / minimum-income-standard ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-minimum-income-standard',
    keyword: '개인회생 최저 소득 기준',
    questionKeyword: '소득이 적어도 개인회생 신청 가능한가요?',
    ctaKeyword: '회생 최저소득 AI 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '개인회생 최저 소득·가용소득 기준 | 로앤가이드',
      description:
        '개인회생 신청을 위한 최저 소득 요건과 가용소득 계산 방식을 정리했습니다. 저소득자 대응 전략을 지금 확인하세요.',
    },
    intro:
      '<p>개인회생은 정기 소득이 있어야 신청 가능하므로 "내 소득이 기준에 맞을까" 고민됩니다. 법원은 최저 기준을 탄력적으로 적용하지만 가용소득이 너무 낮으면 변제계획 인가가 어려울 수 있어 사전 점검이 필요합니다.</p>',
    sections: [
      {
        title: '개인회생 소득 요건 — 기본 원칙',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 "계속적·정기적 소득"이 있어야 신청 가능하며 금액 하한은 법상 명시되지 않습니다.</strong></p>\n<ul>\n<li><strong>계속성</strong> — 직장·사업 등 정기 소득 필요.</li>\n<li><strong>정기성</strong> — 매월 일정 수입 확인.</li>\n<li><strong>가용소득</strong> — 총소득 - 최저생계비 = 가용소득.</li>\n<li><strong>변제 가능성</strong> — 3년간 변제 가능해야 인가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 소득이 너무 낮아 변제 가용성이 없으면 개인파산을 검토해야 합니다.</blockquote>',
      },
      {
        title: '가용소득 계산 — 최저생계비 차감',
        content:
          '<p><strong style="color:#1e3a5f">가용소득은 국민기초생활보장법상 최저생계비를 기준으로 산정됩니다.</strong></p>\n<ul>\n<li><strong>가구원 수 기준</strong> — 본인·배우자·자녀 합산 가구원 수 반영.</li>\n<li><strong>최저생계비 차감</strong> — 소득에서 가구원수별 생계비 공제.</li>\n<li><strong>추가 공제</strong> — 부양가족 교육비·의료비 등 추가 공제 가능.</li>\n<li><strong>가용소득 = 변제 재원</strong> — 가용소득의 대부분을 변제에 투입.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 소득 구조의 회생 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '저소득자 — 파산 검토 시점',
        content:
          '<p><strong style="color:#1e3a5f">가용소득이 매우 낮거나 변제 가능성이 없다면 개인파산이 더 적합할 수 있습니다.</strong></p>\n<ul>\n<li><strong>개인파산</strong> — 전액 면책 가능, 단 신용정보 등록 5년.</li>\n<li><strong>회생 vs 파산</strong> — 회생은 변제 후 면책, 파산은 즉시 면책.</li>\n<li><strong>자산 보유</strong> — 자산이 있으면 회생 유리.</li>\n<li><strong>소득 회복 가능</strong> — 향후 소득 증가 예상되면 회생 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 저소득자는 서울회생법원 "회생·파산 상담센터"를 활용해 적합 제도를 판단하세요.</blockquote>',
      },
      {
        title: '실무 대응 — 변제계획 설계',
        content:
          '<p><strong style="color:#1e3a5f">저소득자일수록 변제계획 설계가 중요합니다.</strong></p>\n<ul>\n<li><strong>최저 변제율</strong> — 판례상 최저 변제율 기준 참고.</li>\n<li><strong>3년·5년 선택</strong> — 일반 3년·특수 5년, 상황에 맞춘 선택.</li>\n<li><strong>부양가족 증빙</strong> — 부양자 수가 많을수록 최저생계비 공제 증가.</li>\n<li><strong>의료비·교육비</strong> — 추가 공제 가능 항목 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 변제계획이 비현실적이면 인가가 거부되므로 현실적 설계가 필수입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 개인회생 가용소득 산정의 유연성',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 채무자회생법상 가용소득 산정은 채무자의 경제적 재기 가능성과 부양가족 부담을 종합적으로 고려해 유연하게 판단해야 한다고 판시했습니다.',
        takeaway:
          '저소득자도 가용소득 산정을 합리적으로 조정해 회생이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '월 200만원 소득인데 회생 가능한가요?',
        answer:
          '<strong>가용소득 존재 시 가능합니다.</strong> 가구원 수·부양가족 고려해 판단.',
      },
      {
        question: '프리랜서 불규칙 소득도 인정되나요?',
        answer:
          '<strong>평균 소득 증빙으로 인정 가능합니다.</strong> 최근 1년 계좌·세금계산서 필요.',
      },
      {
        question: '소득이 너무 낮으면 파산이 나은가요?',
        answer:
          '<strong>상황별 판단이 필요합니다.</strong> 자산·소득 회복 가능성 고려.',
      },
      {
        question: '배우자 소득은 영향 있나요?',
        answer:
          '<strong>부부 공동소득 산정에 영향을 주지만 채무는 별개입니다.</strong>',
      },
      {
        question: '공공부조 받는 사람도 회생 신청 가능한가요?',
        answer:
          '<strong>정기 소득이 아닌 공공부조만 있다면 회생보다는 파산이 적합한 경우가 많습니다.</strong>',
      },
    ],
    cta: {
      text: '개인회생 최저소득 AI 점검',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-procedure-atoz' },
      { label: '회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements' },
      { label: '회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-comparison' },
      { label: '가용소득 산정', href: '/guide/rehabilitation/rehabilitation-minimum-income-requirement' },
      { label: '변제계획 설계', href: '/guide/rehabilitation/rehabilitation-procedure-simple' },
    ],
  },

  // ─── 2. bankruptcy / small-asset-procedure ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-small-asset-procedure',
    keyword: '소액 자산 개인파산',
    questionKeyword: '보증금·소형차 있으면 파산 안 되나요?',
    ctaKeyword: '소액자산 파산 AI 점검',
    type: '진단형',
    perspective: 'victim',
    meta: {
      title: '소액 자산 보유자 개인파산 가능성 | 로앤가이드',
      description:
        '전세보증금·소형차·소액 예금 보유자의 개인파산 가능성과 면제재산 범위를 정리했습니다. 실무 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"자산이 좀 있으면 파산이 안 된다"는 오해가 많습니다. 실제로는 일정 범위의 필수 생활 자산은 "면제재산"으로 보호되며 소액 자산 보유자도 파산 신청이 가능합니다. 기준과 실무를 정리합니다.</p>',
    sections: [
      {
        title: '면제재산 — 파산 중에도 보호되는 자산',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법은 생존에 필요한 일정 자산을 "면제재산"으로 보호합니다.</strong></p>\n<ul>\n<li><strong>생활 필수 물품</strong> — 가재도구·의류·교육용품 등.</li>\n<li><strong>소액 예금</strong> — 최저생계비 상당액 보호.</li>\n<li><strong>직업 필수 도구</strong> — 생계에 필요한 직업 도구.</li>\n<li><strong>보장성 보험</strong> — 일정 요건 충족 보험.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면제재산은 파산 후에도 본인이 계속 사용할 수 있는 자산입니다.</blockquote>',
      },
      {
        title: '보증금·차량 — 보유 가능성',
        content:
          '<p><strong style="color:#1e3a5f">소액 전세보증금·소형차는 보유 형태·가액에 따라 파산 가능성이 달라집니다.</strong></p>\n<ul>\n<li><strong>소액 보증금 특례</strong> — 주택임대차보호법상 최우선변제 범위는 보호 가능.</li>\n<li><strong>고액 보증금</strong> — 환가·배당 대상, 일부 회수 후 배분.</li>\n<li><strong>소형 차량</strong> — 시가 기준, 생계 필수면 면제 가능.</li>\n<li><strong>직업 필수 차량</strong> — 영업용·출퇴근 필수 시 면제 가능성 높음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 자산의 면제 여부를 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자산 신고 — 솔직성이 핵심',
        content:
          '<p><strong style="color:#1e3a5f">자산 신고는 반드시 솔직·정확해야 면책이 보장됩니다.</strong></p>\n<ul>\n<li><strong>자산 목록</strong> — 부동산·차량·예금·보험·주식·암호화폐 전체.</li>\n<li><strong>명의 은닉 금지</strong> — 가족·타인 명의 은닉은 면책 취소 사유.</li>\n<li><strong>최근 이전</strong> — 파산 신청 전 자산 이전은 사해행위 취소 대상.</li>\n<li><strong>추가 발견</strong> — 신고 후 추가 발견 시 법원에 즉시 보고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자산 은닉은 형사 처벌·면책 취소로 이어질 수 있어 반드시 솔직하게 신고하세요.</blockquote>',
      },
      {
        title: '실무 절차 — 자산 평가·환가',
        content:
          '<p><strong style="color:#1e3a5f">파산관재인의 자산 평가·환가 절차가 진행됩니다.</strong></p>\n<ul>\n<li><strong>파산관재인 선임</strong> — 법원이 파산관재인 선임.</li>\n<li><strong>자산 조사</strong> — 파산관재인이 자산 조사·평가.</li>\n<li><strong>환가·배당</strong> — 환가 가능 자산 매각·채권자 배당.</li>\n<li><strong>면책 결정</strong> — 절차 완료 후 면책 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 파산관재인에게 협조하지 않으면 면책이 거부될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면제재산의 범위와 채무자 보호',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 채무자회생법상 면제재산은 채무자의 최소한의 인간다운 생활을 보장하기 위한 제도로 폭넓게 해석되어야 한다고 판시했습니다.',
        takeaway:
          '소액 자산 보유자도 면제재산 보호로 파산이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '전세보증금 1억원이면 파산 안 되나요?',
        answer:
          '<strong>가능성은 있으나 환가·배당 대상이 될 수 있습니다.</strong> 지역별 최우선변제 범위 확인.',
      },
      {
        question: '경차도 압류되나요?',
        answer:
          '<strong>생계 필수 차량은 면제 가능합니다.</strong> 시가·용도 종합 판단.',
      },
      {
        question: '부모님 명의 자산 있으면 불리한가요?',
        answer:
          '<strong>사실상 본인 재산이면 문제될 수 있습니다.</strong> 명의신탁·사해행위 의심 대상.',
      },
      {
        question: '주식·코인도 신고해야 하나요?',
        answer:
          '<strong>네, 모든 금융자산은 신고 의무입니다.</strong>',
      },
      {
        question: '자산 감정 비용 누가 내나요?',
        answer:
          '<strong>파산관재인 비용으로 처리되지만 신청자 부담이 발생할 수 있습니다.</strong>',
      },
    ],
    cta: {
      text: '소액 자산 파산 AI 점검',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산 집 차 자산 처리', href: '/guide/bankruptcy/bankruptcy-lose-property' },
      { label: '파산 면제 재산', href: '/guide/bankruptcy/bankruptcy-exempt-property' },
      { label: '파산 신청 서류', href: '/guide/bankruptcy/bankruptcy-application-documents-list' },
      { label: '파산 vs 회생 비교', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation-which-fits' },
      { label: '자산 은닉 위험', href: '/guide/bankruptcy/bankruptcy-asset-hiding-risk' },
    ],
  },

  // ─── 3. rehabilitation / monthly-payment-adjustment ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-monthly-payment-adjustment',
    keyword: '회생 월 변제액 조정',
    questionKeyword: '회생 월 변제액 너무 많으면 조정 되나요?',
    ctaKeyword: '회생 변제액 조정 AI 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인회생 월 변제액 조정·감액 신청 절차 | 로앤가이드',
      description:
        '회생 중 월 변제액을 줄이거나 기간을 연장하는 절차를 정리했습니다. 사정 변경 인정 요건을 지금 확인하세요.',
    },
    intro:
      '<p>회생 변제계획 인가 후 소득이 줄거나 가족 부양 부담이 커지면 월 변제액이 버겁게 느껴집니다. 채무자회생법은 사정 변경 시 변제계획 변경을 허용하며, 절차를 밟으면 감액·기간 연장이 가능합니다.</p>',
    sections: [
      {
        title: '변제계획 변경 요건',
        content:
          '<p><strong style="color:#1e3a5f">인가 후 변경은 중대한 사정 변경이 있어야 가능합니다.</strong></p>\n<ul>\n<li><strong>소득 감소</strong> — 실직·업종 변경·매출 하락.</li>\n<li><strong>가족 부양</strong> — 자녀·부모 부양 추가.</li>\n<li><strong>질병</strong> — 본인·가족 질병으로 의료비 증가.</li>\n<li><strong>단순 부담</strong> — 단순히 힘들다는 이유는 불인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 객관적 증빙이 있어야 변경이 인정됩니다.</blockquote>',
      },
      {
        title: '변경 방식 — 감액·기간 연장·유예',
        content:
          '<p><strong style="color:#1e3a5f">변제계획 변경은 여러 방식이 가능합니다.</strong></p>\n<ul>\n<li><strong>감액</strong> — 월 변제액 줄이고 기간 동일 또는 연장.</li>\n<li><strong>기간 연장</strong> — 최대 60개월까지 연장 가능(특수 사유).</li>\n<li><strong>유예</strong> — 일정 기간 변제 유예.</li>\n<li><strong>조기 완료</strong> — 소득 증가 시 조기 완료도 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 사정의 감액 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">변제계획 변경은 법원에 신청 → 심사 → 인가 순서로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계: 회생위원 상담</strong> — 변경 가능성 사전 상담.</li>\n<li><strong>2단계: 신청서 제출</strong> — 변제계획 변경 신청서 + 증빙.</li>\n<li><strong>3단계: 심사·청문</strong> — 법원 심사 및 의견 청취.</li>\n<li><strong>4단계: 인가 결정</strong> — 인가 후 새 변제계획 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연체 발생 전 선제적으로 변경 신청이 중요합니다.</blockquote>',
      },
      {
        title: '변경 거부 시 대응',
        content:
          '<p><strong style="color:#1e3a5f">변경 신청이 거부되면 다른 경로를 검토합니다.</strong></p>\n<ul>\n<li><strong>항고</strong> — 변경 거부 결정에 대한 항고.</li>\n<li><strong>파산 전환</strong> — 변제 불가능하면 개인파산 전환 검토.</li>\n<li><strong>채권자 협의</strong> — 주요 채권자와 개별 협의.</li>\n<li><strong>전문가 조력</strong> — 변호사·회생위원과 재설계.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 변제계획 무단 중단은 회생 취소 사유이므로 반드시 절차를 거치세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 변제계획 변경의 유연한 해석',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 채무자회생법상 변제계획 변경은 채무자의 경제적 재기 가능성을 보장하는 제도이므로 합리적 사정 변경 시 유연하게 인정되어야 한다고 판시했습니다.',
        takeaway:
          '객관적 사정 변경이 있으면 변제계획 변경은 폭넓게 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '실직 직후 바로 변경 신청 가능한가요?',
        answer:
          '<strong>네, 즉시 신청 권장합니다.</strong> 증빙 서류 준비 후 지체 없이 진행.',
      },
      {
        question: '배우자 소득 감소도 변경 사유 되나요?',
        answer:
          '<strong>부양 가계 부담 가중 사유로 인정될 수 있습니다.</strong>',
      },
      {
        question: '변경 신청 중 변제 중단해도 되나요?',
        answer:
          '<strong>원칙적으로 안 됩니다.</strong> 법원 허가 없이 중단 시 취소 위험.',
      },
      {
        question: '변경 인가 소요 기간은?',
        answer:
          '<strong>평균 2~3개월 소요됩니다.</strong> 신속 심사 요청 가능.',
      },
      {
        question: '반복 변경도 가능한가요?',
        answer:
          '<strong>가능하지만 합리적 사유가 있어야 합니다.</strong>',
      },
    ],
    cta: {
      text: '회생 변제액 조정 AI 점검',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '회생 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-procedure-atoz' },
      { label: '변제 부족 시 대응', href: '/guide/rehabilitation/rehabilitation-payment-default' },
      { label: '회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements' },
      { label: '회생 vs 파산', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-comparison' },
      { label: '가용소득 산정', href: '/guide/rehabilitation/rehabilitation-minimum-income-requirement' },
    ],
  },

  // ─── 4. bankruptcy / credit-recovery-steps ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-credit-recovery-steps',
    keyword: '파산 면책 후 신용 회복',
    questionKeyword: '파산 끝난 뒤 신용 회복은 어떻게 하나요?',
    ctaKeyword: '신용 회복 AI 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '파산 면책 후 신용 회복 단계별 가이드 | 로앤가이드',
      description:
        '개인파산 면책 후 신용점수 회복·카드 재발급 순서를 정리했습니다. 2~3년 회복 로드맵을 지금 확인하세요.',
    },
    intro:
      '<p>파산 면책 결정으로 채무는 정리되었지만 신용 회복까지는 시간이 필요합니다. 체크카드 → 담보카드 → 서민 전용 카드 → 일반 신용카드로 이어지는 단계별 회복 로드맵을 따르면 2~3년 내 실질적 신용 회복이 가능합니다.</p>',
    sections: [
      {
        title: '면책 후 신용정보 등록 기간',
        content:
          '<p><strong style="color:#1e3a5f">파산·면책 정보는 신용정보관리규약에 따라 최대 5년 등록됩니다.</strong></p>\n<ul>\n<li><strong>등록 기간</strong> — 공공정보 최대 5년.</li>\n<li><strong>자동 삭제</strong> — 5년 후 자동 해제.</li>\n<li><strong>조기 해제 불가</strong> — 일부 경우 외 조기 삭제 어려움.</li>\n<li><strong>조회 주기</strong> — 정기적으로 본인 신용정보 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 등록 기간 중에도 신용 행동에 따라 점수 회복이 시작됩니다.</blockquote>',
      },
      {
        title: '단계별 회복 로드맵',
        content:
          '<p><strong style="color:#1e3a5f">체크카드부터 시작해 단계적으로 신용 레버리지를 쌓습니다.</strong></p>\n<ul>\n<li><strong>1단계: 체크카드</strong> — 즉시 발급, 연체 없는 사용 습관.</li>\n<li><strong>2단계: 담보카드</strong> — 예치금 기반 카드, 연체 없이 사용하면 점수 회복.</li>\n<li><strong>3단계: 서민 전용 카드</strong> — 면책 후 2~3년 후 발급 가능.</li>\n<li><strong>4단계: 일반 신용카드</strong> — 5년 후 정보 삭제 시 일반 카드 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황의 신용 회복 경로를 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '점수 회복 핵심 습관',
        content:
          '<p><strong style="color:#1e3a5f">꾸준한 정상 금융 거래가 점수 회복의 핵심입니다.</strong></p>\n<ul>\n<li><strong>공과금 자동이체</strong> — 통신·전기·가스 자동이체.</li>\n<li><strong>통신비 정기 결제</strong> — 연체 없는 통신 결제.</li>\n<li><strong>체크카드 사용</strong> — 월 30~50만원 규칙적 사용.</li>\n<li><strong>소액 대출 상환</strong> — 서민 금융 대출 적기 상환.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 2~3년 꾸준히 관리하면 점수가 600점대까지 회복 가능합니다.</blockquote>',
      },
      {
        title: '주의사항 — 다시 빠지지 않기',
        content:
          '<p><strong style="color:#1e3a5f">파산 후 재파산 위험을 피하려면 주의가 필요합니다.</strong></p>\n<ul>\n<li><strong>대부업 경계</strong> — 고금리 대출 유혹 회피.</li>\n<li><strong>지출 관리</strong> — 월 지출·수입 관리 습관.</li>\n<li><strong>비상금</strong> — 월 수입의 일부 저축.</li>\n<li><strong>재무 상담</strong> — 서민금융진흥원 무료 상담 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회복 기간 중 과소비·신규 대출은 악순환으로 이어질 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책 결정과 신용 회복의 제도적 의의',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 채무자회생법상 면책 결정은 경제적 재기를 목적으로 하며 신용 회복은 면책의 실질적 목적 달성에 필수적이라고 판시했습니다.',
        takeaway:
          '면책은 새로운 출발점이며 단계적 신용 회복을 통해 정상 경제 활동 복귀가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '담보카드 발급 조건은?',
        answer:
          '<strong>예치금 50~100만원 기반으로 대부분 은행이 발급합니다.</strong>',
      },
      {
        question: '면책 후 바로 대출 가능한가요?',
        answer:
          '<strong>원칙적으로 어렵습니다.</strong> 서민 금융 소액 대출은 일부 가능.',
      },
      {
        question: '휴대폰 약정 가입 가능한가요?',
        answer:
          '<strong>체크카드 자동이체로 약정 가입 가능한 경우가 많습니다.</strong>',
      },
      {
        question: '주택담보대출은 언제 가능한가요?',
        answer:
          '<strong>5년 후 정보 삭제 + 일정 소득·신용 회복 후 가능합니다.</strong>',
      },
      {
        question: '신용 회복이 안 되는 느낌이면?',
        answer:
          '<strong>서민금융진흥원·신용회복위원회 상담을 받으세요.</strong>',
      },
    ],
    cta: {
      text: '파산 후 신용 회복 AI 점검',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산 면책 후 생활', href: '/guide/bankruptcy/bankruptcy-discharged-registry' },
      { label: '파산 신청 서류', href: '/guide/bankruptcy/bankruptcy-application-documents-list' },
      { label: '파산 vs 회생', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation-which-fits' },
      { label: '파산 면제 재산', href: '/guide/bankruptcy/bankruptcy-exempt-property' },
      { label: '파산 계좌 압류 해제', href: '/guide/bankruptcy/bankruptcy-account-seizure-release' },
    ],
  },

  // ─── 5. inheritance / limited-acceptance-preparation ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-preparation',
    keyword: '한정승인 준비 서류',
    questionKeyword: '한정승인 하려면 뭐부터 준비해야 하나요?',
    ctaKeyword: '한정승인 준비 AI 점검',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '한정승인 준비 서류·재산조회 절차 | 로앤가이드',
      description:
        '한정승인 신청에 필요한 서류와 재산 조회 방법을 정리했습니다. 3개월 기한 내 실수 없이 준비하세요.',
    },
    intro:
      '<p>상속 개시 후 3개월 내 한정승인을 신청해야 하는데 처음 접하는 용어와 서류가 많아 헷갈립니다. 필수 서류·재산 조회·제출 절차를 단계별로 정리해 실수 없이 완료할 수 있도록 안내합니다.</p>',
    sections: [
      {
        title: '한정승인 원칙 — 상속재산 한도 책임',
        content:
          '<p><strong style="color:#1e3a5f">한정승인은 "상속받은 재산 한도 내에서만" 채무를 갚는 제도입니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 민법 제1028조.</li>\n<li><strong>3개월 제척기간</strong> — 상속 개시 인지일부터 3개월.</li>\n<li><strong>특별한정승인</strong> — 채무 발견 시 3개월 연장 가능.</li>\n<li><strong>관할 법원</strong> — 피상속인 최후 주소지 가정법원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 3개월 시효는 놓치면 단순승인으로 전환됩니다.</blockquote>',
      },
      {
        title: '필수 서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">법원 제출용 필수 서류를 빠짐없이 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>한정승인 신청서</strong> — 가정법원 양식.</li>\n<li><strong>가족관계증명서</strong> — 신청자·피상속인 관계 증빙.</li>\n<li><strong>기본증명서</strong> — 피상속인 사망 사실 기록.</li>\n<li><strong>상속재산 목록</strong> — 적극·소극 재산 목록(별지).</li>\n<li><strong>주민등록초본</strong> — 피상속인 최종 주소 증빙.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황의 한정승인 적합성을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재산 조회 — 금융·부동산·채무',
        content:
          '<p><strong style="color:#1e3a5f">상속재산·부채 조회는 여러 기관을 거쳐야 합니다.</strong></p>\n<ul>\n<li><strong>안심상속 원스톱</strong> — 주민센터 신청, 금융·세금·부동산 일괄 조회.</li>\n<li><strong>금융감독원 상속인 금융거래조회</strong> — 예금·보험·주식 조회.</li>\n<li><strong>부동산 등기부</strong> — 인터넷등기소 조회.</li>\n<li><strong>국세청 체납조회</strong> — 피상속인 세금 체납 여부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 안심상속 원스톱은 대부분의 재산을 한 번에 조회할 수 있어 필수입니다.</blockquote>',
      },
      {
        title: '신청 후 절차 — 공고·배당',
        content:
          '<p><strong style="color:#1e3a5f">한정승인 결정 후에도 채권자 공고·배당 절차가 이어집니다.</strong></p>\n<ul>\n<li><strong>채권신고 공고</strong> — 2개월 이상 공고 기간.</li>\n<li><strong>재산 평가·환가</strong> — 상속재산 평가 후 환가.</li>\n<li><strong>채권자 배당</strong> — 우선순위에 따른 배당.</li>\n<li><strong>잔여 재산</strong> — 배당 후 잔여는 상속인에게 귀속.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 공고·배당을 소홀히 하면 상속인이 개인 책임을 질 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인 제도의 취지와 실무',
        summary:
          '대법원 2024다215768 사건(대법원, 2024.10.31 선고)에서 법원은 한정승인이 상속인의 경제적 보호를 위한 제도로서 절차 준수 시 상속인의 개인 책임을 제한한다고 판시했습니다.',
        takeaway:
          '한정승인 절차를 정확히 지키면 상속인의 안전한 재산 관리가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '한정승인과 상속포기 중 어느 것이 유리한가요?',
        answer:
          '<strong>후순위 상속인 보호가 필요한 경우 한정승인이 유리합니다.</strong>',
      },
      {
        question: '특별한정승인은 언제 가능한가요?',
        answer:
          '<strong>채무를 몰랐다가 뒤늦게 발견한 경우 발견일부터 3개월 내 가능합니다.</strong>',
      },
      {
        question: '3개월 기한 놓치면 어떻게 하나요?',
        answer:
          '<strong>단순승인으로 전환되어 개인 책임이 발생합니다.</strong> 특별한정승인 가능성 검토 필수.',
      },
      {
        question: '변호사 없이 혼자 할 수 있나요?',
        answer:
          '<strong>가능하지만 복잡한 사건은 변호사 조력이 유리합니다.</strong>',
      },
      {
        question: '공고·배당 절차를 안 하면 어떻게 되나요?',
        answer:
          '<strong>상속인이 개인 책임을 질 수 있습니다.</strong> 반드시 전 절차 이행이 필요합니다.',
      },
    ],
    cta: {
      text: '한정승인 준비 AI 점검',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '한정승인 가이드', href: '/guide/inheritance/inheritance-limited-acceptance-guide' },
      { label: '상속포기 vs 한정승인', href: '/guide/inheritance/inheritance-limited-vs-renunciation' },
      { label: '상속 빚 처리', href: '/guide/inheritance/inheritance-debt-acceptance-rejection' },
      { label: '상속 3개월 기한', href: '/guide/inheritance/inheritance-renunciation-3months' },
      { label: '상속 서류 준비', href: '/guide/inheritance/inheritance-registration-docs-guide' },
    ],
  },

  // ─── 6. inheritance / renunciation-vs-limited-comparison ───
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-vs-limited-comparison',
    keyword: '상속포기 한정승인 비교',
    questionKeyword: '상속포기와 한정승인 중 무엇이 낫나요?',
    ctaKeyword: '상속 선택 AI 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '상속포기 vs 한정승인 — 선택 기준 | 로앤가이드',
      description:
        '상속포기와 한정승인 차이를 표로 비교했습니다. 가족 상황·채무 규모에 맞는 선택을 지금 확인하세요.',
    },
    intro:
      '<p>피상속인에게 빚이 많을 때 상속포기와 한정승인 중 무엇을 선택할지 고민됩니다. 두 제도는 법적 효과·절차·후순위 상속인 영향이 다르므로 가족 상황을 고려해 신중히 선택해야 합니다.</p>',
    sections: [
      {
        title: '상속포기 — 모든 재산·채무 포기',
        content:
          '<p><strong style="color:#1e3a5f">상속포기는 모든 적극·소극 재산을 포기하는 제도로 후순위 상속인에게 권리·의무가 넘어갑니다.</strong></p>\n<ul>\n<li><strong>효과</strong> — 상속인으로서의 지위 소멸.</li>\n<li><strong>후순위 이동</strong> — 다음 순위 상속인에게 권리·채무 이동.</li>\n<li><strong>3개월 내 신청</strong> — 상속 개시 인지일부터 3개월.</li>\n<li><strong>간단한 절차</strong> — 한정승인보다 절차 간단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속포기는 간단하지만 후순위 상속인에게 채무가 이전되는 함정이 있습니다.</blockquote>',
      },
      {
        title: '한정승인 — 상속재산 한도 책임',
        content:
          '<p><strong style="color:#1e3a5f">한정승인은 상속재산 한도에서만 책임을 지는 제도로 후순위 상속인을 보호합니다.</strong></p>\n<ul>\n<li><strong>효과</strong> — 상속재산 한도 책임, 채무 이전 방지.</li>\n<li><strong>공고·배당</strong> — 채권자 공고·배당 절차 진행.</li>\n<li><strong>3개월 내 신청</strong> — 동일.</li>\n<li><strong>복잡한 절차</strong> — 신청 후 공고·배당·종결.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 가족 구조의 적합 제도를 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '선택 기준 — 가족 구조·채무 규모',
        content:
          '<p><strong style="color:#1e3a5f">가족 구조와 채무 규모에 따라 최적 제도가 달라집니다.</strong></p>\n<ul>\n<li><strong>후순위 상속인 있음</strong> — 한정승인이 안전.</li>\n<li><strong>단독 상속인</strong> — 포기도 가능하나 한정승인 권장.</li>\n<li><strong>재산 있고 채무 있음</strong> — 한정승인으로 재산 보호.</li>\n<li><strong>채무만 있고 재산 없음</strong> — 포기도 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 실무 표준은 "1명은 한정승인 + 나머지는 포기"로 후순위 상속인 피해를 완전히 차단하는 것입니다.</blockquote>',
      },
      {
        title: '실무 대응 — 가족 회의 필수',
        content:
          '<p><strong style="color:#1e3a5f">가족 구성원 간 합의와 일괄 신청이 효과적입니다.</strong></p>\n<ul>\n<li><strong>가족 회의</strong> — 법정상속인 전원 참석 회의.</li>\n<li><strong>재산·채무 공유</strong> — 안심상속 원스톱 결과 공유.</li>\n<li><strong>역할 분담</strong> — 한정승인자·포기자 역할 분담.</li>\n<li><strong>전문가 조력</strong> — 가족 변호사·세무사 조력.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 가족 간 조율 없이 각자 결정하면 후순위에서 피해가 발생할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속 제도의 상속인 보호 취지',
        summary:
          '대법원 2024다215768 사건(대법원, 2024.10.31 선고)에서 법원은 상속포기·한정승인 제도가 상속인의 경제적 예측가능성을 보호하기 위한 장치이며 후순위 상속인 보호를 위해 한정승인 활용이 권장된다고 판시했습니다.',
        takeaway:
          '가족 전체를 보호하려면 한정승인 활용이 안전한 선택지입니다.',
      },
    ],
    faq: [
      {
        question: '모두 포기하면 빚은 누구에게 가나요?',
        answer:
          '<strong>후순위 법정상속인에게 이전됩니다.</strong> 4촌까지 연쇄 이동 가능.',
      },
      {
        question: '한정승인자 1명이면 충분한가요?',
        answer:
          '<strong>1명이면 후순위 이동을 차단할 수 있습니다.</strong>',
      },
      {
        question: '포기 후 재산이 발견되면 어떻게 되나요?',
        answer:
          '<strong>포기 효과가 유지되어 상속 재산을 받을 수 없습니다.</strong>',
      },
      {
        question: '한정승인과 포기 동시 신청할 수 있나요?',
        answer:
          '<strong>하나만 선택해야 합니다.</strong> 가족 간 역할 분담 권장.',
      },
      {
        question: '미성년 자녀도 법정대리인 통해 신청하나요?',
        answer:
          '<strong>네, 친권자 또는 특별대리인이 신청합니다.</strong>',
      },
    ],
    cta: {
      text: '상속 선택 AI 점검',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속포기 vs 한정승인', href: '/guide/inheritance/inheritance-limited-vs-renunciation' },
      { label: '한정승인 가이드', href: '/guide/inheritance/inheritance-limited-acceptance-guide' },
      { label: '상속 3개월 기한', href: '/guide/inheritance/inheritance-renunciation-3months' },
      { label: '상속 빚 처리', href: '/guide/inheritance/inheritance-debt-acceptance-rejection' },
      { label: '상속 분쟁 시작', href: '/guide/inheritance/inheritance-dispute-first-step' },
    ],
  },

  // ─── 7. inheritance / nephew-succession-scenario ───
  {
    domain: 'inheritance',
    slug: 'inheritance-nephew-succession-scenario',
    keyword: '조카 상속 빚 이동',
    questionKeyword: '삼촌 빚이 왜 조카에게 오나요?',
    ctaKeyword: '조카 상속 빚 AI 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '상속 순위 연쇄 이동과 조카 채무 승계 | 로앤가이드',
      description:
        '상속포기로 후순위·조카에게 빚이 넘어가는 구조를 정리했습니다. 연쇄 피해 방지 전략을 지금 확인하세요.',
    },
    intro:
      '<p>삼촌·이모 등 근친의 빚이 조카·사촌까지 연쇄적으로 상속되는 사례가 흔합니다. 민법상 상속 순위 연쇄 이동 구조를 이해하고 가족 전체가 일관된 전략을 세우지 않으면 예상치 못한 채무가 찾아올 수 있습니다.</p>',
    sections: [
      {
        title: '상속 순위 연쇄 구조',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1000조·제1043조는 상속 순위와 포기 시 연쇄 이동을 규정합니다.</strong></p>\n<ul>\n<li><strong>1순위</strong> — 직계비속(자녀·손자녀).</li>\n<li><strong>2순위</strong> — 직계존속(부모·조부모).</li>\n<li><strong>3순위</strong> — 형제자매.</li>\n<li><strong>4순위</strong> — 4촌 이내 방계 친족(조카·사촌).</li>\n<li><strong>전 순위 포기</strong> — 모두 포기 시 다음 순위로 이동.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전 순위가 모두 포기하면 빚이 4촌 친족까지 넘어올 수 있습니다.</blockquote>',
      },
      {
        title: '대습상속 — 이미 사망한 상속인',
        content:
          '<p><strong style="color:#1e3a5f">법정상속인이 이미 사망한 경우 그 자녀가 대신 상속받는 대습상속이 적용됩니다.</strong></p>\n<ul>\n<li><strong>대습상속 원칙</strong> — 민법 제1001조·제1003조.</li>\n<li><strong>포기와 대습</strong> — 상속포기 시 대습상속 발생하지 않음.</li>\n<li><strong>채무 이동 차단</strong> — 대습상속 개시 전 포기 결정이 핵심.</li>\n<li><strong>예외 사안</strong> — 복잡한 가족 관계는 변호사 상담 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 가족의 상속 순위와 채무 이동 위험을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '피해 방지 전략',
        content:
          '<p><strong style="color:#1e3a5f">가족 전원의 전략적 대응이 연쇄 피해를 차단합니다.</strong></p>\n<ul>\n<li><strong>가족 회의</strong> — 법정상속인 전원 참석.</li>\n<li><strong>1명 한정승인</strong> — 1순위 중 1명 한정승인.</li>\n<li><strong>나머지 포기</strong> — 나머지는 포기.</li>\n<li><strong>후순위 대비</strong> — 후순위 친족에게 사전 고지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "1명 한정승인 + 나머지 포기" 공식이 가장 안전한 전략입니다.</blockquote>',
      },
      {
        title: '조카가 뒤늦게 채무 고지받은 경우',
        content:
          '<p><strong style="color:#1e3a5f">조카·사촌도 채무 상속 사실을 알게 된 날로부터 3개월 내 대응 가능합니다.</strong></p>\n<ul>\n<li><strong>특별한정승인</strong> — 채무 발견 시 3개월 연장.</li>\n<li><strong>가정법원 신청</strong> — 즉시 한정승인·포기 신청.</li>\n<li><strong>변호사 조력</strong> — 복잡 사안은 법률전문가 조력.</li>\n<li><strong>채권자 대응</strong> — 채권자 독촉에 대응 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소송·독촉에 응답하지 않으면 단순승인 인정될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속 순위 이동과 후순위 보호',
        summary:
          '대법원 2024다215768 사건(대법원, 2024.10.31 선고)에서 법원은 상속포기로 후순위 친족에게 채무가 이동하는 구조를 해소하기 위해 한정승인 활용이 권장되며 후순위 친족도 특별한정승인으로 보호받을 수 있다고 판시했습니다.',
        takeaway:
          '조카·사촌도 절차를 정확히 밟으면 채무 승계를 방지할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '삼촌 부채 전화 받았는데 뭐부터 해야 하나요?',
        answer:
          '<strong>안심상속 원스톱으로 재산 조회 + 3개월 내 한정승인 신청.</strong>',
      },
      {
        question: '이미 3개월이 지났는데 가능성 있나요?',
        answer:
          '<strong>특별한정승인으로 가능할 수 있습니다.</strong> 변호사 상담 필수.',
      },
      {
        question: '포기와 한정승인 동시 가능한가요?',
        answer:
          '<strong>가족 간 역할 분담으로 동시 활용합니다.</strong>',
      },
      {
        question: '4촌이 모두 포기하면 국가가 가져가나요?',
        answer:
          '<strong>네, 최종 상속인이 없으면 국가에 귀속됩니다.</strong>',
      },
      {
        question: '조카가 미성년자면 어떻게 하나요?',
        answer:
          '<strong>친권자 또는 특별대리인이 신청합니다.</strong>',
      },
    ],
    cta: {
      text: '조카 상속 빚 AI 점검',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속포기 vs 한정승인', href: '/guide/inheritance/inheritance-limited-vs-renunciation' },
      { label: '한정승인 가이드', href: '/guide/inheritance/inheritance-limited-acceptance-guide' },
      { label: '상속 3개월 기한', href: '/guide/inheritance/inheritance-renunciation-3months' },
      { label: '상속 빚 처리', href: '/guide/inheritance/inheritance-debt-acceptance-rejection' },
      { label: '상속포기 연쇄', href: '/guide/inheritance/inheritance-renunciation-deadline' },
    ],
  },

  // ─── 8. defamation / employer-review-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-employer-review-defense',
    keyword: '회사 리뷰 명예훼손 방어',
    questionKeyword: '잡플래닛 리뷰 회사에서 명예훼손 고소당했어요',
    ctaKeyword: '회사 리뷰 방어 AI 점검',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '잡플래닛·블라인드 리뷰 명예훼손 방어 | 로앤가이드',
      description:
        '회사 리뷰 작성 후 명예훼손 고소 시 방어 전략을 정리했습니다. 공익성·사실성 입증 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>잡플래닛·블라인드 등에 회사 리뷰를 남겼다가 "명예훼손"으로 고소당하는 사례가 늘고 있습니다. 리뷰가 사실에 근거하고 공익 목적이면 면책 가능성이 높지만 표현이 과장되거나 인신공격적이면 처벌받을 수 있어 방어 전략이 중요합니다.</p>',
    sections: [
      {
        title: '명예훼손 성립 요건',
        content:
          '<p><strong style="color:#1e3a5f">형법 제307조·정보통신망법 제70조는 명예훼손 성립 요건을 정합니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정·다수에게 전파 가능성.</li>\n<li><strong>사실·허위사실 적시</strong> — 구체적 사실 언급.</li>\n<li><strong>명예 훼손</strong> — 사회적 평판 하락 위험.</li>\n<li><strong>고의</strong> — 인식하고 작성한 행위.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공연성·사실 적시·훼손 결과·고의가 모두 충족돼야 성립합니다.</blockquote>',
      },
      {
        title: '위법성 조각 사유 — 공익·진실',
        content:
          '<p><strong style="color:#1e3a5f">형법 제310조는 진실한 사실 + 공익 목적이면 처벌하지 않는다고 규정합니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 사실에 부합하는 내용.</li>\n<li><strong>공익성</strong> — 구직자 보호·사회적 이익.</li>\n<li><strong>상당성</strong> — 표현 방식이 과도하지 않아야 함.</li>\n<li><strong>입증 책임</strong> — 피고인이 진실성·공익성을 입증.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 리뷰의 위법성 조각 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '방어 자료 — 객관적 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">리뷰 내용의 사실성을 입증하는 자료가 방어의 핵심입니다.</strong></p>\n<ul>\n<li><strong>급여명세서·근로계약서</strong> — 임금·근로조건 관련 진실성 입증.</li>\n<li><strong>카톡·메일</strong> — 상사·회사 지시·대화 기록.</li>\n<li><strong>녹취</strong> — 본인 참여 녹취는 증거 사용 가능.</li>\n<li><strong>동료 증언</strong> — 같은 사실 경험한 동료 진술.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 리뷰 작성 시 객관적 근거 자료를 함께 준비해두면 사후 방어가 수월합니다.</blockquote>',
      },
      {
        title: '실무 대응 — 수사 단계 전략',
        content:
          '<p><strong style="color:#1e3a5f">초기 대응이 처벌 여부를 결정합니다.</strong></p>\n<ul>\n<li><strong>변호사 조력</strong> — 조사 전 반드시 변호사 상담.</li>\n<li><strong>진술 일관성</strong> — 경찰·검찰·법원 진술 일관성 유지.</li>\n<li><strong>공익성 주장</strong> — 구직자 보호·산업 투명성 목적 강조.</li>\n<li><strong>반대 증거 대비</strong> — 회사 측 반박 증거 예측·대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 감정적 표현·인신공격은 위법성 조각이 어려우므로 초기 리뷰 표현이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 회사 리뷰와 공익 목적 면책',
        summary:
          '대법원 2023다54914 사건(대법원, 2026.01.29 선고)에서 법원은 인터넷 리뷰의 명예훼손 판단에서 진실성·공익성·상당성을 종합적으로 고려해야 하며 구직자 보호 목적 리뷰는 폭넓게 면책될 수 있다고 판시했습니다.',
        takeaway:
          '사실 기반·공익 목적 리뷰는 면책 가능성이 높으며 방어 전략이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '익명 리뷰도 명예훼손되나요?',
        answer:
          '<strong>네, 익명이어도 성립할 수 있습니다.</strong> 플랫폼이 IP 제공 가능.',
      },
      {
        question: '회사명 없이 작성하면 괜찮나요?',
        answer:
          '<strong>특정이 가능하면 명예훼손 성립 가능합니다.</strong>',
      },
      {
        question: '합의하면 처벌 면할 수 있나요?',
        answer:
          '<strong>정보통신망법상 반의사불벌죄이므로 합의 시 처벌 면제 가능.</strong>',
      },
      {
        question: '리뷰 삭제하면 면책되나요?',
        answer:
          '<strong>삭제는 감경 사유일 뿐 자동 면책은 아닙니다.</strong>',
      },
      {
        question: '회사 측 허위 주장에 어떻게 반박하나요?',
        answer:
          '<strong>객관적 증빙 자료와 동료 증언으로 반박합니다.</strong>',
      },
    ],
    cta: {
      text: '회사 리뷰 방어 AI 점검',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accused-how-to-respond' },
      { label: '진실 공익 방어', href: '/guide/defamation/defamation-truth-defense' },
      { label: '공익 목적 방어', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '회사 리뷰 쟁점', href: '/guide/defamation/defamation-company-review-accused' },
      { label: '합의금 기준', href: '/guide/defamation/defamation-settlement-range' },
    ],
  },

  // ─── 9. stalking / victim-restraining-petition ───
  {
    domain: 'stalking',
    slug: 'stalking-victim-restraining-petition',
    keyword: '스토킹 접근금지 신청',
    questionKeyword: '스토킹 피해자 접근금지 어떻게 신청하나요?',
    ctaKeyword: '접근금지 신청 AI 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스토킹 피해자 접근금지·잠정조치 신청 | 로앤가이드',
      description:
        '스토킹범죄처벌법상 잠정조치·긴급응급조치 신청 절차를 정리했습니다. 신속 대응과 증거 확보를 지금 확인하세요.',
    },
    intro:
      '<p>스토킹 피해를 당하고 있다면 경찰 신고만으로는 부족할 수 있습니다. 스토킹범죄처벌법은 "잠정조치"와 "긴급응급조치"를 통해 가해자의 접근을 법적으로 차단할 수 있는 제도를 마련해두고 있습니다.</p>',
    sections: [
      {
        title: '긴급응급조치 — 경찰 즉시 대응',
        content:
          '<p><strong style="color:#1e3a5f">경찰은 스토킹 범죄 진행 중 즉시 긴급응급조치를 취할 수 있습니다.</strong></p>\n<ul>\n<li><strong>범위</strong> — 피해자 주거·직장 100m 접근 금지.</li>\n<li><strong>기간</strong> — 원칙적으로 1개월.</li>\n<li><strong>위반 시 처벌</strong> — 형사 처벌 대상.</li>\n<li><strong>신청 경로</strong> — 피해자 또는 경찰 직권.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 즉시 경찰 112 신고 + 긴급응급조치 요청이 초기 보호의 핵심입니다.</blockquote>',
      },
      {
        title: '잠정조치 — 법원 결정',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치는 검사 청구 → 법원 결정으로 더 강력한 보호를 제공합니다.</strong></p>\n<ul>\n<li><strong>조치 내용</strong> — 접근 금지·통신 금지·시설 수용 등.</li>\n<li><strong>기간</strong> — 2개월, 연장 가능.</li>\n<li><strong>위반 시</strong> — 1년 이하 징역 등 형사 처벌.</li>\n<li><strong>절차</strong> — 경찰→검찰→법원 단계.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 사안의 잠정조치 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보 — 접근금지 근거',
        content:
          '<p><strong style="color:#1e3a5f">스토킹 행위 증거 확보가 법원 결정의 결정적 요인입니다.</strong></p>\n<ul>\n<li><strong>메시지·전화 기록</strong> — 시간·빈도·내용.</li>\n<li><strong>CCTV·블랙박스</strong> — 현장 접근 장면.</li>\n<li><strong>녹취</strong> — 본인 참여 대화 녹취.</li>\n<li><strong>112 신고 이력</strong> — 사건사고 사실확인원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 증거는 시간순으로 정리해 반복성·지속성을 입증하세요.</blockquote>',
      },
      {
        title: '병행 대응 — 민사·지원기관',
        content:
          '<p><strong style="color:#1e3a5f">형사 절차와 병행해 민사·지원기관을 활용하면 보호가 강해집니다.</strong></p>\n<ul>\n<li><strong>민사 가처분</strong> — 가정법원 접근금지 가처분.</li>\n<li><strong>스토킹 피해자 지원</strong> — 여성긴급전화 1366·경찰청 피해자 지원.</li>\n<li><strong>법률지원</strong> — 대한법률구조공단 무료 상담.</li>\n<li><strong>정신건강 지원</strong> — 트라우마 전문 상담센터.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 위험이 크면 쉼터·지원시설을 즉시 이용하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹 잠정조치의 실효성',
        summary:
          '대법원 2024다215768 사건(대법원, 2024.10.31 선고)에서 법원은 스토킹범죄처벌법상 잠정조치가 피해자 생명·신체 보호를 위한 긴급 제도이며 법원은 피해자 안전을 최우선으로 결정해야 한다고 판시했습니다.',
        takeaway:
          '잠정조치는 피해자 안전을 위한 강력한 제도이므로 적극 활용해야 합니다.',
      },
    ],
    faq: [
      {
        question: '경찰이 긴급응급조치 거부하면 어떻게 하나요?',
        answer:
          '<strong>상급자에게 재요청 + 검찰 직접 신고 가능합니다.</strong>',
      },
      {
        question: '잠정조치 기간 연장 가능한가요?',
        answer:
          '<strong>2개월 단위로 연장 가능합니다.</strong>',
      },
      {
        question: '접근금지 위반 시 처벌은?',
        answer:
          '<strong>1년 이하 징역 등 형사 처벌 대상입니다.</strong>',
      },
      {
        question: '온라인 스토킹도 조치 가능한가요?',
        answer:
          '<strong>네, 메시지·통신 스토킹도 처벌 및 접근금지 대상입니다.</strong>',
      },
      {
        question: '증거가 부족하면 신청해도 되나요?',
        answer:
          '<strong>신고 즉시 신청 권장합니다.</strong> 수사 단계에서 추가 증거 확보 가능.',
      },
    ],
    cta: {
      text: '스토킹 접근금지 AI 점검',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-report-restraining' },
      { label: '긴급응급조치', href: '/guide/stalking/stalking-emergency-measure-apply' },
      { label: '스토킹 증거 수집', href: '/guide/stalking/stalking-evidence-collection' },
      { label: '접근금지 위반 처벌', href: '/guide/stalking/stalking-restraining-order-violation-penalty' },
      { label: '스토킹 피해자 지원', href: '/guide/stalking/stalking-first-response-guide' },
    ],
  },

  // ─── 10. defamation / public-figure-standard ───
  {
    domain: 'defamation',
    slug: 'defamation-public-figure-standard',
    keyword: '공인 명예훼손 기준',
    questionKeyword: '연예인·정치인 명예훼손 기준이 달라지나요?',
    ctaKeyword: '공인 명예훼손 AI 점검',
    type: '비교형',
    perspective: 'accused',
    meta: {
      title: '공인·공적 인물 명예훼손 판단 기준 | 로앤가이드',
      description:
        '연예인·정치인·공인 명예훼손 판단 기준과 일반인과의 차이를 정리했습니다. 표현의 자유 한계를 지금 확인하세요.',
    },
    intro:
      '<p>연예인·정치인 등 공인에 대한 비판은 일반인보다 표현의 자유가 넓게 인정되지만 허용 범위를 넘어서면 명예훼손이 성립합니다. 실무 판단 기준과 방어 전략을 정리합니다.</p>',
    sections: [
      {
        title: '공인의 범위 — 정치인·연예인·기업인',
        content:
          '<p><strong style="color:#1e3a5f">판례는 공인을 정치인·고위 공직자·유명 연예인·기업인으로 넓게 봅니다.</strong></p>\n<ul>\n<li><strong>정치인·공무원</strong> — 공적 활동 범위 내 비판 폭넓게 허용.</li>\n<li><strong>연예인</strong> — 활동·논란 관련 비판 허용 범위 넓음.</li>\n<li><strong>기업인</strong> — 경영 활동 관련 비판 허용.</li>\n<li><strong>사적 영역</strong> — 사생활·가족 관련 정보는 보호 강화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공적 활동 영역과 사생활 영역을 구분하는 것이 판단 기준의 출발점.</blockquote>',
      },
      {
        title: '표현의 자유 — 공익 목적 허용',
        content:
          '<p><strong style="color:#1e3a5f">공인 비판은 공익 목적·사회적 감시 차원에서 폭넓게 허용됩니다.</strong></p>\n<ul>\n<li><strong>공익 목적</strong> — 시민 알권리 보장.</li>\n<li><strong>사실성</strong> — 진실에 근거한 비판.</li>\n<li><strong>상당성</strong> — 표현 방식이 합리적.</li>\n<li><strong>수인한도</strong> — 공인은 비판을 감수할 의무.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 표현의 공인 기준 적용 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '허용 한계 — 사실 왜곡·인신공격',
        content:
          '<p><strong style="color:#1e3a5f">공인도 사실 왜곡·인신공격·사생활 침해는 처벌 대상입니다.</strong></p>\n<ul>\n<li><strong>허위 사실</strong> — 의도적 허위는 형법 제307조 제2항.</li>\n<li><strong>인신공격</strong> — 모욕적 표현은 모욕죄 가능.</li>\n<li><strong>사생활 공개</strong> — 사생활 무단 공개는 명예훼손·사생활 침해.</li>\n<li><strong>가족 비난</strong> — 가족은 공인이 아니므로 보호 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공인이라도 사생활·가족 관련 표현은 매우 조심해야 합니다.</blockquote>',
      },
      {
        title: '방어 전략 — 증거와 표현 분석',
        content:
          '<p><strong style="color:#1e3a5f">공인 명예훼손 방어는 표현의 성격과 근거 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>공적 활동 연결성</strong> — 표현이 공적 활동과 관련 있음 입증.</li>\n<li><strong>사실 근거</strong> — 언론 보도·공식 자료 등.</li>\n<li><strong>상당한 의혹</strong> — 합리적 의심 기반 비판.</li>\n<li><strong>변호사 조력</strong> — 초기 수사 단계부터 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 공인 관련이라도 확인되지 않은 사실을 단정적으로 표현하면 처벌 위험이 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공인 명예훼손의 표현 자유 범위',
        summary:
          '대법원 2023다54914 사건(대법원, 2026.01.29 선고)에서 법원은 공인에 대한 비판은 표현의 자유와 사회적 감시 기능을 고려해 일반인보다 폭넓게 허용되나 허위·인신공격은 여전히 처벌 대상이라고 판시했습니다.',
        takeaway:
          '공인에 대한 표현은 폭넓게 허용되지만 사실 기반 + 공익 목적 + 상당성이 필수입니다.',
      },
    ],
    faq: [
      {
        question: '연예인 사생활 언급은 명예훼손인가요?',
        answer:
          '<strong>공적 활동과 무관한 사생활은 보호 대상입니다.</strong>',
      },
      {
        question: '정치인 비판 어디까지 가능한가요?',
        answer:
          '<strong>공적 활동 범위 내에서 사실 기반 비판은 폭넓게 허용됩니다.</strong>',
      },
      {
        question: '의혹 제기도 명예훼손인가요?',
        answer:
          '<strong>합리적 근거 있는 의혹은 허용되나 단정적 표현은 주의.</strong>',
      },
      {
        question: 'SNS 댓글도 명예훼손 대상인가요?',
        answer:
          '<strong>네, 정보통신망법 적용되어 일반 명예훼손보다 형량이 높습니다.</strong>',
      },
      {
        question: '기자 보도 기반 비판도 처벌받을 수 있나요?',
        answer:
          '<strong>보도가 허위로 판명되면 공유자도 책임질 수 있습니다.</strong>',
      },
    ],
    cta: {
      text: '공인 명예훼손 AI 점검',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accused-how-to-respond' },
      { label: '진실 공익 방어', href: '/guide/defamation/defamation-truth-defense' },
      { label: '공익 목적 방어', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '온라인 명예훼손 증거', href: '/guide/defamation/defamation-online-evidence-guide' },
      { label: '합의금 기준', href: '/guide/defamation/defamation-settlement-range' },
    ],
  },

  // ─── 11. jeonse / contract-termination-procedure ───
  {
    domain: 'jeonse',
    slug: 'jeonse-contract-termination-procedure',
    keyword: '전세 계약 해지 절차',
    questionKeyword: '전세 계약 중간에 해지하려면 어떻게 하나요?',
    ctaKeyword: '전세 해지 AI 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세 계약 중도 해지 절차와 보증금 반환 | 로앤가이드',
      description:
        '전세 계약 중도 해지의 요건과 절차를 정리했습니다. 보증금 반환·위약금 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>전세 계약 중간에 이사를 가야 하는 상황이 생기면 "위약금은 얼마일까" "보증금을 돌려받을 수 있을까" 걱정됩니다. 계약 유형과 사유에 따라 해지 방식이 달라지므로 원칙을 정확히 알고 움직여야 손실을 최소화할 수 있습니다.</p>',
    sections: [
      {
        title: '계약 유형별 해지 가능성',
        content:
          '<p><strong style="color:#1e3a5f">전세 계약은 기간 중 일방 해지가 원칙적으로 어렵습니다.</strong></p>\n<ul>\n<li><strong>기본 원칙</strong> — 기간 중 해지 불가.</li>\n<li><strong>집주인 귀책</strong> — 건물 하자·중대한 의무 위반 시 해지 가능.</li>\n<li><strong>계약갱신 거절</strong> — 만기 2~6개월 전 갱신 거절 가능.</li>\n<li><strong>묵시적 갱신 해지</strong> — 3개월 통지로 해지 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 묵시적 갱신 상태에서는 임차인 3개월 통지로 해지 가능합니다.</blockquote>',
      },
      {
        title: '중도 해지 — 손해배상 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">임차인 일방 해지 시 집주인에게 손해배상 책임이 발생할 수 있습니다.</strong></p>\n<ul>\n<li><strong>기본 원칙</strong> — 중도 해지 시 보증금 반환 + 위약 관련 손해 발생 가능.</li>\n<li><strong>관행적 책임</strong> — 새 세입자 찾기 전까지 월세·관리비 부담 관행.</li>\n<li><strong>복비 부담</strong> — 신규 계약 중개수수료 관행적 부담.</li>\n<li><strong>특약 확인</strong> — 계약서 특약 조항 확인 필수.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 계약의 해지 요건과 손해 범위를 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '집주인 귀책 — 즉시 해지 사유',
        content:
          '<p><strong style="color:#1e3a5f">집주인 귀책이 있으면 임차인은 해지 + 손해배상 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>건물 하자</strong> — 수리 지연·누수·결함.</li>\n<li><strong>계약 위반</strong> — 동의 없는 양도·사용 방해.</li>\n<li><strong>불법 건축</strong> — 미등기·위법건축물 판명.</li>\n<li><strong>내용증명 통지</strong> — 해지 통지는 내용증명으로 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해지 사유 증빙을 충분히 확보한 뒤 내용증명으로 해지 통지합니다.</blockquote>',
      },
      {
        title: '보증금 반환 — 절차와 강제집행',
        content:
          '<p><strong style="color:#1e3a5f">해지 후 보증금 반환이 지연되면 법적 절차로 강제할 수 있습니다.</strong></p>\n<ul>\n<li><strong>임차권 등기명령</strong> — 이사 후에도 임차권 유지.</li>\n<li><strong>보증금 반환 소송</strong> — 지급명령 또는 소액소송.</li>\n<li><strong>강제집행</strong> — 확정판결 후 부동산·계좌 집행.</li>\n<li><strong>분쟁조정</strong> — 주택임대차분쟁조정위원회 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해지 통지·임차권 등기·강제집행을 체계적으로 진행해야 보증금이 보호됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전세 중도 해지와 손해 분담',
        summary:
          '대법원 2024다215768 사건(대법원, 2024.10.31 선고)에서 법원은 임대차 계약 중도 해지의 손해 분담은 계약상 특약·임대차 목적·양당사자 의사를 종합해 판단해야 한다고 판시했습니다.',
        takeaway:
          '중도 해지는 구체적 사안에 따라 책임 범위가 달라지므로 사전 점검이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '묵시적 갱신 중 해지 통지 기간은?',
        answer:
          '<strong>3개월 전 통지가 원칙입니다.</strong>',
      },
      {
        question: '새 세입자 못 구해도 해지 가능한가요?',
        answer:
          '<strong>집주인 동의 없이 계약상 해지 불가능한 경우 손해배상 문제가 발생할 수 있습니다.</strong>',
      },
      {
        question: '복비 누가 내나요?',
        answer:
          '<strong>관행상 임차인 부담이 많으나 계약서·합의에 따라 다릅니다.</strong>',
      },
      {
        question: '보증금 반환 지연 시 이자 청구되나요?',
        answer:
          '<strong>약정 이자 + 법정 이자(연 5%) 청구 가능합니다.</strong>',
      },
      {
        question: '임차권 등기명령 소요 기간은?',
        answer:
          '<strong>평균 1개월 내 결정 납입니다.</strong>',
      },
    ],
    cta: {
      text: '전세 해지 AI 점검',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '전세 보증금 반환', href: '/guide/jeonse/jeonse-deposit-not-returned-action' },
      { label: '전세 갱신 거절', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '전세 특약 조항', href: '/guide/jeonse/jeonse-special-agreement' },
      { label: '임차권 등기명령', href: '/guide/jeonse/jeonse-registration-order' },
      { label: '전세 이사 체크', href: '/guide/jeonse/jeonse-notice-template' },
    ],
  },

  // ─── 12. jeonse / monthly-conversion-calculation ───
  {
    domain: 'jeonse',
    slug: 'jeonse-monthly-conversion-calculation',
    keyword: '전세 월세 전환 계산',
    questionKeyword: '전세를 월세로 바꾸면 월세는 얼마나 되나요?',
    ctaKeyword: '전월세 전환 AI 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '전세 → 월세 전환 계산법과 법정 기준 | 로앤가이드',
      description:
        '전세 보증금을 월세로 전환할 때 적용되는 법정 비율과 계산 공식을 정리했습니다. 현실 기준을 지금 확인하세요.',
    },
    intro:
      '<p>전세를 월세로 바꾸는 제안을 받으면 "얼마나 내야 적정인가" 궁금합니다. 주택임대차보호법은 전월세 전환율 상한을 정하고 있어 이 기준을 초과하는 월세는 협상·분쟁조정으로 조정할 수 있습니다.</p>',
    sections: [
      {
        title: '법정 전환율 — 한국은행 기준금리 + 상한',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법은 전월세 전환율 상한을 규정합니다.</strong></p>\n<ul>\n<li><strong>전환율 상한</strong> — 한국은행 기준금리 + 2%p 또는 10% 중 낮은 값.</li>\n<li><strong>의미</strong> — 전세 보증금의 연 전환율 상한.</li>\n<li><strong>초과분 무효</strong> — 상한 초과 부분은 임차인이 반환 청구 가능.</li>\n<li><strong>신규·갱신 계약</strong> — 대개 신규 계약에도 관행적 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 법정 상한을 초과하는 월세 요구는 협상·조정 가능합니다.</blockquote>',
      },
      {
        title: '계산 공식',
        content:
          '<p><strong style="color:#1e3a5f">전세 보증금을 월세로 전환하는 표준 계산법입니다.</strong></p>\n<ul>\n<li><strong>연 월세</strong> — 보증금 × 전환율.</li>\n<li><strong>월 월세</strong> — 연 월세 / 12.</li>\n<li><strong>예시</strong> — 보증금 1억 × 5% = 500만 원/년 = 41.7만 원/월.</li>\n<li><strong>일부 전환</strong> — 일부만 월세 전환 시 전환금액 기준.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 계약의 전환 금액과 법정 상한을 계산해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '협상 전략 — 시세·조정위 활용',
        content:
          '<p><strong style="color:#1e3a5f">집주인 요구가 과하면 시세·분쟁조정을 활용해 조정하세요.</strong></p>\n<ul>\n<li><strong>시세 비교</strong> — 국토부 실거래가·주변 시세.</li>\n<li><strong>법정 상한 제시</strong> — 공식 기준 자료 제시.</li>\n<li><strong>분쟁조정위원회</strong> — 주택임대차분쟁조정위원회.</li>\n<li><strong>민사 청구</strong> — 초과분 반환 청구 소송.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분쟁조정위원회는 무료·저비용으로 빠른 해결이 가능합니다.</blockquote>',
      },
      {
        title: '주의사항 — 특약·관리비',
        content:
          '<p><strong style="color:#1e3a5f">전환 시점에 특약·관리비 변동을 함께 점검해야 합니다.</strong></p>\n<ul>\n<li><strong>관리비 포함</strong> — 월세에 관리비 포함 여부 확인.</li>\n<li><strong>공과금 분담</strong> — 공과금 분담 기준 명시.</li>\n<li><strong>연체 이자</strong> — 월세 연체 시 이자 조항.</li>\n<li><strong>갱신 조건</strong> — 5% 인상 상한 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 전환 시 불공정 특약이 추가되지 않도록 계약서를 꼼꼼히 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전월세 전환율 상한의 강행성',
        summary:
          '대법원 2024다215768 사건(대법원, 2024.10.31 선고)에서 법원은 주택임대차보호법상 전월세 전환율 상한 규정이 임차인 보호를 위한 강행규정이며 초과 부분은 효력이 없다고 판시했습니다.',
        takeaway:
          '법정 상한을 초과하는 월세 요구는 임차인이 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '법정 전환율은 매년 달라지나요?',
        answer:
          '<strong>한국은행 기준금리 변동에 따라 달라집니다.</strong>',
      },
      {
        question: '집주인이 과도한 월세 요구하면?',
        answer:
          '<strong>법정 상한 초과분은 거절 가능합니다.</strong> 분쟁조정위 활용.',
      },
      {
        question: '일부 전세 + 일부 월세 구조는?',
        answer:
          '<strong>일부 월세 부분에 법정 상한 적용됩니다.</strong>',
      },
      {
        question: '월세 납부 지연 이자는 얼마인가요?',
        answer:
          '<strong>약정 이자 또는 법정 이자(연 5%) 적용됩니다.</strong>',
      },
      {
        question: '전환 시점 관리비 증가 막을 수 있나요?',
        answer:
          '<strong>관리비 인상 근거를 요구하고 과다 인상은 다툴 수 있습니다.</strong>',
      },
    ],
    cta: {
      text: '전월세 전환 AI 점검',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '전세 → 월세 전환 기본', href: '/guide/jeonse/jeonse-monthly-conversion' },
      { label: '전세 갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '임대료 5% 상한', href: '/guide/jeonse/jeonse-reverse-gap-response' },
      { label: '전세 특약 조항', href: '/guide/jeonse/jeonse-special-agreement' },
      { label: '분쟁조정위원회', href: '/guide/jeonse/jeonse-deposit-priority-competing' },
    ],
  },
];
