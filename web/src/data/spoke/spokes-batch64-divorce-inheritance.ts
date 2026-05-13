import { SpokePage } from '../spoke-pages';

// batch64 divorce(4) + inheritance(3) — 7개 (2026-05-14)
//
// 고유 존재 이유:
// 1. divorce-domestic-violence-evidence-collection — 가정폭력 피해자 증거수집·이혼 결합 트랙.
// 2. divorce-spouse-gambling-debt-property-division — 도박·중독 빚 재산분할 책임 다툼.
// 3. divorce-child-custody-grandparent-visitation — 조부모 면접교섭권.
// 4. divorce-international-asset-hidden-discovery — 해외 은닉 재산 발견·국제 사법 공조.
// 5. inheritance-business-succession-ownership-share — 사업 승계 지분 분쟁.
// 6. inheritance-stepfamily-half-sibling-portion — 이복형제 상속 비율.
// 7. inheritance-foster-adopted-child — 양자·계자 상속자격.

export const spokesBatch64DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce-domestic-violence-evidence-collection-track ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-evidence-collection-track',
    keyword: '가정폭력 증거수집 이혼',
    questionKeyword: '가정폭력 피해자입니다. 이혼 소송 전에 증거 어떻게 모아야 하나요?',
    ctaKeyword: '가정폭력 이혼 증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 피해자 이혼 증거수집 — 5단계 보호명령 + 재판이혼 | 로앤가이드',
      description:
        '가정폭력으로 이혼을 준비한다면 보호명령·증거수집 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년째 폭언·구타를 견디다 이혼 결심. 그런데 \"증거 없으면 못 받아준다\"는 말을 듣고 막막합니다. 매번 사과한다며 병원에도 같이 가서 \"넘어졌다\"고 진술하게 했어요. 카톡으로 사과한 메시지는 있지만 폭력 직접 영상은 없어요.\" 가정폭력 이혼은 ① 가정폭력처벌특례법상 임시보호명령 ② 의료기록·112 신고기록·증인 진술 ③ 재판이혼 사유(민법 840조 3호) ④ 위자료·재산분할 가산 ⑤ 친권·양육권 보호 5가지 트랙이 핵심. 직접 영상이 없어도 누적 의료기록·카톡 사과·신고 이력만으로 충분히 입증 가능한 영역. 대응은 ① 즉시 보호 ② 증거 누적 ③ 재판이혼 ④ 위자료 ⑤ 친권 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 가정폭력 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·이혼·위자료·친권 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임시보호명령 신청</strong> — 가정법원 즉시 보호.</li>\n<li><strong>② 의료·신고·증인 증거 누적</strong> — 직접 영상 없어도 가능.</li>\n<li><strong>③ 재판이혼 청구 (민법 840조 3호)</strong> — 부당한 대우.</li>\n<li><strong>④ 위자료·재산분할 가산</strong> — 폭력은 책임 가중.</li>\n<li><strong>⑤ 친권·양육권 보호</strong> — 양육 적합성 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접 영상 없어도 의료기록 + 112 신고 + 카톡 사과 + 증인 진술 누적이면 충분히 입증 가능한 영역. 임시보호명령으로 즉시 안전 확보가 첫 번째.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·이혼 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임시보호명령 신청 (가정법원, 즉시)</strong> — 접근금지·퇴거 명령.</li>\n<li><strong>2단계 — 증거 누적 (1~3개월)</strong> — 의료기록·112·카톡·증인.</li>\n<li><strong>3단계 — 재판이혼 청구</strong> — 위자료·재산분할 동시.</li>\n<li><strong>4단계 — 조정·재판 (6~12개월)</strong> — 위자료 가산.</li>\n<li><strong>5단계 — 친권·양육권 결정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">가정폭력 이혼 증거수집 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·보호·이혼 갈래입니다.</strong></p>\n<ul>\n<li><strong>의료기록·진단서 (응급실·치과·정신과)</strong></li>\n<li><strong>112 신고 이력·경찰 보고서</strong></li>\n<li><strong>카톡·문자 사과 메시지·폭언 녹음</strong></li>\n<li><strong>이웃·가족 증인 진술서</strong></li>\n<li><strong>임시보호명령 결정문</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>재산 자료 (등기·예금·차량)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의료기록은 \"넘어졌다\"고 진술했어도 부상 패턴(좌측 안면·반복 부상)이 가정폭력 의심으로 평가되는 영역. 부상 사진 + 진료 기록 + 같은 시기 신고 패턴 함께 제출.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>증거 누적성</strong> — 단발성 vs 반복성 → 반복 입증 강력.</li>\n<li><strong>임시보호명령 효력</strong> — 위반 시 형사 처벌.</li>\n<li><strong>위자료 가산</strong> — 폭력은 통상 위자료보다 높은 수준 검토.</li>\n<li><strong>친권 적합성</strong> — 양육 환경·아동 의사 종합.</li>\n<li><strong>재산분할 시효</strong> — 이혼 후 2년 내.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정폭력과 재판이혼',
        summary:
          '대법원 2018므205427(2020.02.14 선고) 영역에서 법원은 가정폭력이 반복되고 누적적 증거에 의해 인정된다고 평가될 수 있는 경우 민법 제840조 제3호의 재판이혼 사유에 해당하고, 위자료·재산분할 산정에서 폭력 행사자의 책임이 가중된다고 본 사례 흐름이 있습니다.',
        takeaway: '직접 영상 없어도 의료·신고·카톡 누적 입증 가능. 위자료 가산·친권 적합성에서 유리.',
      },
    ],
    faq: [
      {
        question: '직접 폭력 영상이 없어요',
        answer:
          '<strong>의료기록·112 신고·카톡 사과·증인 진술 누적으로 충분히 입증 가능합니다.</strong>',
      },
      {
        question: '임시보호명령은 어떻게 신청하나요?',
        answer:
          '<strong>가정법원에 직접 신청 가능하고 신청 후 즉시 결정됩니다.</strong> 여성긴급전화 1366 안내.',
      },
      {
        question: '의료기록에 "넘어졌다"고 적혀 있어요',
        answer:
          '<strong>부상 패턴·반복 부상 시기로 가정폭력 평가 가능합니다.</strong>',
      },
      {
        question: '친권은 폭력 가해자에게 안 갈까요?',
        answer:
          '<strong>가정폭력 가해자는 친권·양육권 부적합 평가 유력합니다.</strong>',
      },
      {
        question: '폭력 이혼 위자료는 얼마 정도인가요?',
        answer:
          '<strong>사례에 따라 다르지만 누적·중상해 시 상대적으로 높은 수준이 검토되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '가정폭력 보호', href: '/guide/divorce/divorce-domestic-violence-protection' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
      { label: '친권·양육권', href: '/guide/divorce/divorce-custody-decision' },
      { label: '재산분할', href: '/guide/divorce/divorce-property-division' },
    ],
  },

  // ─── 2. divorce-spouse-gambling-debt-property-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-gambling-debt-property-division-track',
    keyword: '도박 빚 재산분할 책임',
    questionKeyword: '배우자 도박으로 빚이 5억인데 이혼 시 본인도 책임져야 하나요?',
    ctaKeyword: '도박 빚 재산분할 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 도박 빚 재산분할 — 5단계 책임 분리 다툼 | 로앤가이드',
      description:
        '배우자가 도박·중독으로 빚이 큰 경우 재산분할 책임·분리 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 10년 차에 배우자 도박 빚이 5억으로 확인. 본인도 그 사실 몰랐고, 가계는 분리해 관리했어요. 이혼하려는데 \"빚도 분할 대상\"이라며 절반을 떠안으라고 합니다. 저축은 거의 없고 빚만 남는 상황.\" 부부 공동 재산은 분할 대상이지만 ① 도박·낭비로 발생한 채무는 분할 대상 제외 평가 가능 ② 본인 모르게 발생한 채무 ③ 가계 분리 ④ 채무 사용처 입증 ⑤ 재산분할 청구 시 면책 5가지 트랙이 핵심. 도박 빚은 가족 공동생활을 위한 채무가 아니라 \"개인 채무\"로 평가되어 본인 분담에서 제외될 여지가 있는 영역. 대응은 ① 채무 사용처 ② 가계 분리 ③ 재산분할 청구 ④ 위자료 ⑤ 친권 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 도박 빚 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무성격·가계·분할·위자료·친권 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도박 채무 성격</strong> — 가족 공동생활 무관.</li>\n<li><strong>② 가계 분리 입증</strong> — 별도 통장·생활비 자기 부담.</li>\n<li><strong>③ 재산분할 청구</strong> — 채무 분담 제외 주장.</li>\n<li><strong>④ 위자료 청구</strong> — 도박 자체가 위자료 사유.</li>\n<li><strong>⑤ 친권·양육권</strong> — 도박 가해자 부적합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도박·낭비 채무는 \"개인 채무\"로 평가되어 분할 대상에서 제외될 여지가 있는 영역. 채무 사용처 입증이 본인 면책의 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·분할·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채무 사용처 입증 (즉시)</strong> — 도박장 출입·송금 내역.</li>\n<li><strong>2단계 — 가계 분리 입증 (1~2주)</strong> — 별도 통장·생활비 분담 자료.</li>\n<li><strong>3단계 — 재산분할 청구 (이혼 후 2년 내)</strong> — 채무 제외 주장.</li>\n<li><strong>4단계 — 위자료·친권 (조정·재판)</strong></li>\n<li><strong>5단계 — 채권자 대응 (필요시)</strong> — 본인 명의 채무 아님 입증.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">도박 빚 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무·가계·분리 갈래입니다.</strong></p>\n<ul>\n<li><strong>배우자 도박 채무 내역 (대출·카드)</strong></li>\n<li><strong>도박장 출입·온라인 도박 내역</strong></li>\n<li><strong>본인·배우자 별도 통장 내역</strong></li>\n<li><strong>생활비 분담 내역·이체 자료</strong></li>\n<li><strong>본인 명의 재산·소득 자료</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>배우자 도박 상담·치료 기록 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가계가 처음부터 분리됐다는 입증이 본인 면책의 핵심. 결혼 초부터 별도 통장·각자 부담 패턴이 일관되면 분할 책임 면제 강력.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무 성격</strong> — 도박·낭비는 개인 채무 평가.</li>\n<li><strong>가계 분리</strong> — 일관된 분리 입증 시 면책 유리.</li>\n<li><strong>본인 명의 채무</strong> — 보증·연대보증 여부.</li>\n<li><strong>채권자 대응</strong> — 본인 명의 아니면 청구권 없음.</li>\n<li><strong>위자료 가산</strong> — 도박 자체가 책임 가중 사유.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국도박문제관리센터 1336</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도박 채무와 재산분할',
        summary:
          '대법원 2010므1256(2010.06.24 선고) 영역에서 법원은 재산분할 시 배우자 일방의 도박·낭비로 발생한 채무는 부부 공동생활을 위한 채무로 보기 어려워 분할 대상 부채에서 제외될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '도박 채무는 개인 채무 평가. 가계 분리·채무 사용처 입증이 본인 면책의 핵심.',
      },
    ],
    faq: [
      {
        question: '배우자가 본인 명의로 빚을 졌어요',
        answer:
          '<strong>이름 도용·강요 시 채무 부존재 확인 소송 가능합니다.</strong> 경찰 신고도 검토.',
      },
      {
        question: '연대보증 서준 경우는요?',
        answer:
          '<strong>본인이 보증인이라면 면책 어렵습니다.</strong> 다만 채권자에 사정 설명·합의 가능.',
      },
      {
        question: '가계가 완전 분리되지 않았어요',
        answer:
          '<strong>일부 합쳐있어도 도박 채무 자체가 분할 대상 제외 가능합니다.</strong>',
      },
      {
        question: '채권자가 본인에게 청구하면요?',
        answer:
          '<strong>본인 명의·보증 아니면 청구권 없습니다.</strong> 부당이득반환 청구도 가능.',
      },
      {
        question: '도박 상담·치료 기록이 도움 되나요?',
        answer:
          '<strong>도박 사실 입증의 강한 사정입니다.</strong>',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
      { label: '친권·양육권', href: '/guide/divorce/divorce-custody-decision' },
      { label: '재산분할 시효', href: '/guide/divorce/divorce-property-division-statute' },
    ],
  },

  // ─── 3. divorce-child-custody-grandparent-visitation-track ───
  {
    domain: 'divorce',
    slug: 'divorce-child-custody-grandparent-visitation-track',
    keyword: '조부모 면접교섭권',
    questionKeyword: '이혼 후 손주를 만나고 싶은데 며느리가 거부합니다. 조부모도 면접교섭권 있나요?',
    ctaKeyword: '조부모 면접교섭 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '조부모 면접교섭권 청구 — 5단계 손주 만남 다툼 | 로앤가이드',
      description:
        '이혼한 자녀의 자녀(손주)를 만나기 위한 조부모 면접교섭권 5가지 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아들이 이혼하면서 손주 양육권은 며느리에게 갔어요. 결혼 전부터 손주 키우다시피 했던 본인은 \"이제 더 못 본다\"는 통보를 받고 충격. 며느리는 \"아빠가 안 만나니 조부모도 안 된다\"고 거부합니다.\" 민법 제837조의2 제2항(2017년 신설)은 \"부모가 자녀를 양육하지 아니하는 경우 등 가정법원이 정하는 경우 직계존속(조부모)도 면접교섭 청구 가능\"을 명시한 영역. ① 자녀의 부모(조부모의 자녀)가 사망·실종·교섭 불가한 경우 ② 자녀 복리에 부합 ③ 가정법원 심판 ④ 조정·재판 절차 5가지 트랙이 핵심. 양육 관계 형성 이력·자녀 의사·복리 평가가 결정적. 대응은 ① 양육 이력 ② 친권자 협의 ③ 가정법원 심판 ④ 자녀 복리 ⑤ 이행 강제 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 조부모 면접교섭 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 요건·협의·심판·복리·이행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 청구 요건</strong> — 자녀 양육 부재·교섭 불가.</li>\n<li><strong>② 친권자와 협의</strong> — 자율적 합의 우선.</li>\n<li><strong>③ 가정법원 심판 청구</strong> — 협의 안 될 시.</li>\n<li><strong>④ 자녀 복리 평가</strong> — 양육 이력·아동 의사.</li>\n<li><strong>⑤ 이행 강제 (필요시)</strong> — 이행명령.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2017년 민법 개정으로 조부모도 면접교섭권을 인정받을 수 있는 영역. 양육 이력·자녀 복리·친권자 사정이 결정적 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의·심판·이행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육 이력 자료 보존 (즉시)</strong> — 양육 사진·돌봄 기록·증인.</li>\n<li><strong>2단계 — 친권자와 협의 (1개월)</strong> — 자율 합의 시도.</li>\n<li><strong>3단계 — 가정법원 면접교섭 심판 청구</strong> — 협의 결렬 시.</li>\n<li><strong>4단계 — 조사관·자녀 의사 확인</strong> — 자녀 복리 평가.</li>\n<li><strong>5단계 — 이행명령 신청 (불이행 시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">조부모 면접교섭 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육·관계·요청 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·기본증명서</strong></li>\n<li><strong>양육 이력 (사진·일기·돌봄 기록)</strong></li>\n<li><strong>증인 진술서 (이웃·교사·친지)</strong></li>\n<li><strong>친권자와 협의 내역 (카톡·메일)</strong></li>\n<li><strong>자녀의 거주지·학교 정보</strong></li>\n<li><strong>본인 건강 상태·돌봄 능력 자료</strong></li>\n<li><strong>친권자 부재·교섭 불가 사정 입증 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 손주 출생부터 본인이 일정 부분 양육·돌봄 참여했다는 이력이 결정적. 사진·일기·이웃 진술서로 양육 관계 형성 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>2017년 민법 개정</strong> — 조부모 면접교섭 명시.</li>\n<li><strong>양육 이력</strong> — 형성된 관계가 결정적.</li>\n<li><strong>친권자 부재·교섭 불가</strong> — 사망·실종·연락 두절 등.</li>\n<li><strong>자녀 의사</strong> — 만 13세 이상 의사 존중.</li>\n<li><strong>이행 강제</strong> — 이행명령·과태료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>가정법원 가족상담실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 조부모 면접교섭',
        summary:
          '대법원 2010므1140(2010.07.15 선고) 영역 등에서 법원은 면접교섭권의 범위와 인정 여부는 자녀의 복리에 부합하는지를 핵심 기준으로 판단해야 하고, 2017년 민법 개정 이후 직계존속도 일정 요건 하에 면접교섭 청구가 가능한 영역으로 평가되고 있습니다.',
        takeaway: '조부모 면접교섭은 양육 이력·자녀 복리·친권자 사정 종합 평가. 2017년 개정으로 명문화.',
      },
    ],
    faq: [
      {
        question: '아들이 손주를 만나지 않아도 조부모는 가능한가요?',
        answer:
          '<strong>2017년 개정으로 직계존속도 별도 청구 가능합니다.</strong>',
      },
      {
        question: '며느리가 강하게 거부하면요?',
        answer:
          '<strong>자녀 복리·양육 이력 입증으로 가정법원 심판이 가능합니다.</strong>',
      },
      {
        question: '자녀가 만나기 싫다고 하면요?',
        answer:
          '<strong>자녀 의사도 중요 요소지만 만 13세 미만은 친권자 영향 평가됩니다.</strong>',
      },
      {
        question: '심판 비용은 얼마인가요?',
        answer:
          '<strong>인지대·송달료 약 5~10만원입니다.</strong> 변호사 선임 시 별도.',
      },
      {
        question: '결정이 나도 안 만나주면요?',
        answer:
          '<strong>이행명령 신청 → 과태료 부과 가능합니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '면접교섭권', href: '/guide/divorce/divorce-visitation-rights' },
      { label: '양육권·친권', href: '/guide/divorce/divorce-custody-decision' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '이행명령', href: '/guide/divorce/divorce-enforcement-order' },
      { label: '자녀 의사 청취', href: '/guide/divorce/divorce-child-opinion-hearing' },
    ],
  },

  // ─── 4. divorce-international-asset-hidden-discovery-track ───
  {
    domain: 'divorce',
    slug: 'divorce-international-asset-hidden-discovery-track',
    keyword: '해외 은닉 재산 발견',
    questionKeyword: '배우자가 해외에 부동산·계좌를 숨겨둔 정황 발견했어요. 재산분할 시 어떻게 추적하나요?',
    ctaKeyword: '해외 은닉 재산 추적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 은닉 재산 발견 — 5단계 재산분할 추적 다툼 | 로앤가이드',
      description:
        '배우자가 해외 부동산·계좌를 은닉한 정황 있다면 추적·증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 준비 중 배우자가 해외에 부동산·계좌를 옮긴 정황 발견. 카드 결제 내역에 외화·해외 송금 흔적이 잡혔는데 국내 재산은 빈 통장입니다. 변호사는 \"해외 재산은 추적이 어렵다\"고 합니다.\" 해외 은닉 재산은 ① 송금·카드 내역으로 단서 ② 사실조회 신청(법원) ③ 헤이그 송달·국제사법공조 ④ 외화 환산·평가 ⑤ 재산분할 가산 5가지 트랙이 결합되는 영역. 국내 재산만 분할되는 게 아니라 해외 재산도 분할 대상에 포함되며, 은닉 행위 자체가 재산분할 기여도·위자료 가산 사정. 대응은 ① 단서 ② 사실조회 ③ 국제공조 ④ 평가 ⑤ 분할 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 은닉 재산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 단서·조회·공조·평가·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단서 자료 확보</strong> — 카드·송금·여권·이메일.</li>\n<li><strong>② 법원 사실조회 신청</strong> — 국세청·관세청·해외 송금 은행.</li>\n<li><strong>③ 국제사법공조</strong> — 헤이그 송달·외국법원 협조.</li>\n<li><strong>④ 외화·자산 평가</strong> — 환율·시가 산정.</li>\n<li><strong>⑤ 재산분할 청구 (이혼 후 2년 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외 재산도 분할 대상. 은닉 행위는 재산분할 기여도·위자료 가산 사유. 사실조회 + 국제사법공조 + 본인 단서 확보 3축이 추적의 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 단서·조회·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단서 자료 보존 (즉시)</strong> — 카드·송금·여권·이메일.</li>\n<li><strong>2단계 — 법원 사실조회·재산조회 (1~3개월)</strong> — 국세청·관세청.</li>\n<li><strong>3단계 — 국제사법공조 (3~6개월)</strong> — 헤이그 송달·외국 협조.</li>\n<li><strong>4단계 — 외화·자산 평가</strong> — 변동성 고려 평가일 합의.</li>\n<li><strong>5단계 — 재산분할 청구 + 위자료 가산</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 은닉 재산 추적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단서·조회·평가 갈래입니다.</strong></p>\n<ul>\n<li><strong>배우자 카드·송금 내역 (해외 결제)</strong></li>\n<li><strong>여권 출입국 기록</strong></li>\n<li><strong>이메일·메신저 (해외 자산 관련)</strong></li>\n<li><strong>국세청·관세청 사실조회 신청서</strong></li>\n<li><strong>해외 은행·부동산 정보 (입수 가능 시)</strong></li>\n<li><strong>외화 환율 기준일 자료</strong></li>\n<li><strong>혼인관계증명서·재산 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배우자 카드 명세서에 외화 환전·해외 부동산 관련 결제 흔적이 있으면 사실조회의 출발점. 이메일·메신저에서 \"해외 계좌\" \"별장\" 같은 단어 검색.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할 대상</strong> — 해외 재산도 포함.</li>\n<li><strong>사실조회 효력</strong> — 국세청·관세청 협조 시 강력한 입증.</li>\n<li><strong>국제사법공조</strong> — 헤이그 송달·외국 법원 협조 (시간 소요).</li>\n<li><strong>평가 기준일</strong> — 환율·시가 변동성 합의.</li>\n<li><strong>은닉 행위</strong> — 재산분할 기여도 부정 + 위자료 가산.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>외교부 영사콜센터 +82-2-3210-0404</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 재산과 재산분할',
        summary:
          '대법원 2014므4734(2015.02.26 선고) 영역에서 법원은 부부 일방의 해외 소재 재산도 부부 공동재산으로 평가될 수 있는 경우 재산분할 대상에 포함되며, 일방이 재산을 은닉하거나 분할을 회피하려는 행위는 재산분할 기여도 평가와 위자료 산정에서 불리한 사정으로 반영될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '해외 재산도 분할 대상. 은닉은 기여도 부정 + 위자료 가산 사유.',
      },
    ],
    faq: [
      {
        question: '해외 재산 추적이 정말 가능한가요?',
        answer:
          '<strong>국세청·관세청 사실조회로 송금 내역 추적이 가능합니다.</strong> 국제사법공조도 활용.',
      },
      {
        question: '국제사법공조는 시간이 얼마나 걸리나요?',
        answer:
          '<strong>국가별 3~12개월입니다.</strong> 헤이그 협약 가입국이 빠른 편.',
      },
      {
        question: '외화 평가일은 어떻게 정하나요?',
        answer:
          '<strong>이혼 시·소송 변론종결 시 등 합의 후 결정합니다.</strong>',
      },
      {
        question: '해외 부동산은 매각 강제할 수 있나요?',
        answer:
          '<strong>해외 법원 인정·집행이 필요해 협조 시간 소요됩니다.</strong>',
      },
      {
        question: '은닉 사실 발견 후 위자료는 얼마나 가산되나요?',
        answer:
          '<strong>사례에 따라 수백만~수천만원대 가산이 검토되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '재산 사실조회', href: '/guide/divorce/divorce-asset-investigation' },
      { label: '재산분할 시효', href: '/guide/divorce/divorce-property-division-statute' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
    ],
  },

  // ─── 5. inheritance-business-succession-ownership-share-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-business-succession-ownership-share-track',
    keyword: '사업 승계 지분 분쟁',
    questionKeyword: '아버지 사업을 형이 이어받았는데 나머지 형제 상속분은 어떻게 받나요?',
    ctaKeyword: '사업 승계 지분 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업 승계 상속 지분 — 5단계 회사·지분 평가 다툼 | 로앤가이드',
      description:
        '부모님 사업을 한 형제가 이어받은 경우 나머지 형제 상속 지분 5가지 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 운영하던 중소기업을 형이 이어받았어요. 다른 형제 3명은 \"형이 다 가지고 가는 거냐\"며 답답한 상황. 회사 가치도 모르고, 형은 \"빚이 더 많다\" \"운영비 못 갚으면 망한다\"고만 합니다.\" 사업 승계도 ① 회사 지분(법인) 또는 사업체 자산(개인사업) 모두 상속재산 ② 가치 평가(자산·영업권·부채) ③ 유류분 청구 ④ 협의·심판 분할 ⑤ 분할 후 경영 협력 5가지 트랙이 핵심. \"형이 다 가져갔다\"가 아니라 \"형이 받은 지분만큼 다른 형제는 유류분 또는 분할 청구권\"을 갖는 영역. 대응은 ① 회사 자료 ② 가치 평가 ③ 협의 ④ 심판 ⑤ 유류분 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사업 승계 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자산·평가·협의·심판·유류분 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속재산 확정</strong> — 회사 지분·사업체 자산·부채.</li>\n<li><strong>② 가치 평가</strong> — 자산·영업권·부채 평가.</li>\n<li><strong>③ 협의분할</strong> — 형제 합의.</li>\n<li><strong>④ 가정법원 심판분할</strong> — 협의 결렬 시.</li>\n<li><strong>⑤ 유류분 청구 (인지 후 1년)</strong> — 법정 상속분 1/2 보장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사업 승계도 상속재산이라 다른 형제 지분 인정. 가치 평가가 핵심 다툼. 유류분은 법정 상속분의 1/2 보장 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·평가·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 회사 자료 확보 (즉시)</strong> — 등기·재무제표·세무·자산 명세.</li>\n<li><strong>2단계 — 가치 평가 (1~2개월)</strong> — 회계사·세무사·감정 의뢰.</li>\n<li><strong>3단계 — 협의분할 시도 (3개월)</strong> — 형제 합의.</li>\n<li><strong>4단계 — 가정법원 심판분할 청구</strong> — 결렬 시.</li>\n<li><strong>5단계 — 유류분 청구 (단축 시효 1년 / 10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업 승계 지분 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사업·재산·상속 갈래입니다.</strong></p>\n<ul>\n<li><strong>회사 법인등기부등본·사업자등록증</strong></li>\n<li><strong>최근 3년 재무제표·세무신고서</strong></li>\n<li><strong>회사 자산 명세서 (부동산·기계·재고)</strong></li>\n<li><strong>부채 명세 (대출·미지급금)</strong></li>\n<li><strong>피상속인 사망신고·기본증명서·가족관계증명서</strong></li>\n<li><strong>유언·증여 자료 (있을 시)</strong></li>\n<li><strong>형제 협의 내역 (카톡·메일)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 가치는 자산 - 부채뿐 아니라 영업권·미래 수익도 평가 대상. 회계사·감정평가사 의뢰로 정식 평가 자료 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>회사 가치 평가</strong> — 자산·영업권·부채 종합.</li>\n<li><strong>유류분 산정</strong> — 법정 상속분의 1/2 보장.</li>\n<li><strong>유류분 시효</strong> — 인지 후 1년, 상속개시 후 10년.</li>\n<li><strong>경영 책임</strong> — 회사 운영 중 부채 책임 분담.</li>\n<li><strong>유언 효력</strong> — 유언 있어도 유류분 침해 시 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>한국공인회계사회</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업 승계와 상속 지분',
        summary:
          '대법원 2013다13754(2013.10.25 선고) 영역에서 법원은 피상속인이 운영하던 사업체나 회사 지분도 상속재산에 포함되어 상속인 사이에 분할 대상이 되고, 사업 운영의 연속성을 위해 일부 상속인에게 집중되는 경우라도 다른 상속인의 유류분이 침해되지 않도록 산정해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '회사·사업체도 상속재산. 일부 집중 시 다른 형제 유류분 청구권 발생.',
      },
    ],
    faq: [
      {
        question: '형이 "회사 운영비 다 자기가 댔다"고 주장해요',
        answer:
          '<strong>운영 후 가치 증가분은 평가에 반영되지만 상속분 자체는 사망 시점 가치 기준입니다.</strong>',
      },
      {
        question: '회사가 빚이 더 많다면요?',
        answer:
          '<strong>한정승인·상속포기 검토 + 회사 가치 정확한 평가 필요합니다.</strong>',
      },
      {
        question: '유언으로 형에게 모두 줬는데 가능한가요?',
        answer:
          '<strong>유언 있어도 유류분 침해 시 청구 가능합니다.</strong> 인지 후 1년 시효.',
      },
      {
        question: '평가는 누가 하나요?',
        answer:
          '<strong>회계사·세무사·감정평가사가 평가하며 양측 합의 또는 법원 감정합니다.</strong>',
      },
      {
        question: '심판분할은 얼마나 걸리나요?',
        answer:
          '<strong>1심 6~12개월이 일반적입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-forced-share-claim' },
      { label: '한정승인', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속세 계산', href: '/guide/inheritance/inheritance-tax-calculation' },
      { label: '상속포기·승인', href: '/guide/inheritance/inheritance-acceptance-renunciation-decision-track' },
    ],
  },

  // ─── 6. inheritance-stepfamily-half-sibling-portion-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-stepfamily-half-sibling-portion-track',
    keyword: '이복형제 상속 비율',
    questionKeyword: '아버지가 재혼하셔서 이복동생이 있어요. 상속 시 본인과 같은 비율인가요?',
    ctaKeyword: '이복형제 상속 비율 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이복형제 상속 비율 — 5단계 자녀 동등 분할 다툼 | 로앤가이드',
      description:
        '아버지·어머니 재혼으로 이복형제가 있는 경우 상속 비율 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 어머니 사망 후 재혼하셔서 이복동생 2명이 생겼어요. 본인은 친자녀, 이복동생은 새어머니 사이 자녀. 아버지가 돌아가셨는데 새어머니가 \"본인 자녀가 더 많이 받아야 한다\"며 협의를 안 합니다.\" 민법 제1009조는 \"동순위 상속인이 여러 명일 때 그 상속분은 균분으로 한다\"고 정한 영역. ① 이복형제도 친자녀와 동일 비율 ② 새어머니(배우자) 별도 비율 ③ 친권자·양육 여부 무관 ④ 협의·심판 분할 ⑤ 유류분 보장 5가지 트랙. \"본인이 더 받아야\"는 잘못된 인식. 친·이복 구분 없이 자녀는 동등 비율로 평가되는 영역입니다. 대응은 ① 가족관계 확인 ② 협의 ③ 심판 ④ 유류분 ⑤ 세무 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 이복형제 상속 비율 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가족관계·비율·협의·심판·유류분 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가족관계증명서·자녀 관계 확인</strong></li>\n<li><strong>② 자녀 동등 비율 (민법 1009조)</strong></li>\n<li><strong>③ 협의분할 시도</strong></li>\n<li><strong>④ 가정법원 심판분할</strong></li>\n<li><strong>⑤ 유류분 청구 (인지 후 1년)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자녀는 친·이복 구분 없이 동등 비율. 배우자(새어머니)는 자녀 비율의 1.5배. 양육 여부·친권 여부와 무관합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·협의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족관계증명서 발급 (즉시)</strong> — 본인·이복·새어머니 확인.</li>\n<li><strong>2단계 — 상속재산 자료 확보 (1~2주)</strong> — 부동산·예금·증권.</li>\n<li><strong>3단계 — 협의분할 시도 (3개월)</strong></li>\n<li><strong>4단계 — 가정법원 심판분할 청구</strong> — 결렬 시.</li>\n<li><strong>5단계 — 유류분 청구 (1년 / 10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">이복형제 상속 비율 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가족·상속·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 가족관계증명서 (상세)</strong></li>\n<li><strong>본인·이복형제 기본증명서</strong></li>\n<li><strong>새어머니 혼인관계증명서</strong></li>\n<li><strong>피상속인 재산 명세 (부동산·예금)</strong></li>\n<li><strong>유언·증여 자료 (있을 시)</strong></li>\n<li><strong>협의 내역 (카톡·메일·내용증명)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가족관계증명서 \"상세\" 발급으로 친·이복 관계, 혼인 이력, 사망일자 등을 한눈에 확인. 협의 시 자료 공유 기반.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자녀 동등 비율</strong> — 친·이복·양자 구분 없음.</li>\n<li><strong>배우자 비율</strong> — 자녀의 1.5배.</li>\n<li><strong>양육 여부 무관</strong> — 키운 사람이 더 받지 않음.</li>\n<li><strong>유류분 1/2</strong> — 법정 상속분의 1/2 보장.</li>\n<li><strong>특별수익 공제</strong> — 생전 증여 시 차감.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>법원 가족상담실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자녀 동등 상속분',
        summary:
          '대법원 2001다10677(2003.09.02 선고) 영역에서 법원은 민법 제1009조에 따라 같은 순위의 상속인이 수인인 때에는 상속분이 균분이라고 평가하며, 자녀의 친·이복·양자 등 출생 경위는 상속 비율에 영향을 미치지 않는다고 본 사례 흐름이 있습니다.',
        takeaway: '자녀는 친·이복 구분 없이 동등 비율. 배우자는 자녀의 1.5배. 양육 여부 무관.',
      },
    ],
    faq: [
      {
        question: '제가 아버지를 더 모셨는데도 동등인가요?',
        answer:
          '<strong>기본은 동등이지만 기여분 청구 가능합니다.</strong> 부양·간병·재산 기여 입증.',
      },
      {
        question: '이복동생이 아직 미성년인 경우는요?',
        answer:
          '<strong>비율은 동일하지만 법정대리인(새어머니)이 협의 대신합니다.</strong>',
      },
      {
        question: '새어머니가 협의 거부하면요?',
        answer:
          '<strong>가정법원 심판분할 청구로 진행합니다.</strong>',
      },
      {
        question: '아버지가 생전에 본인에게만 증여하셨어요',
        answer:
          '<strong>특별수익으로 평가되어 상속분에서 차감됩니다.</strong>',
      },
      {
        question: '유류분 침해 시 어떻게 청구하나요?',
        answer:
          '<strong>유류분 반환 청구 소송 가능합니다.</strong> 인지 후 1년, 상속개시 후 10년.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-forced-share-claim' },
      { label: '기여분 청구', href: '/guide/inheritance/inheritance-contribution-claim' },
      { label: '특별수익 공제', href: '/guide/inheritance/inheritance-yuryubun-special-receipt-deduction-track' },
      { label: '상속포기·승인', href: '/guide/inheritance/inheritance-acceptance-renunciation-decision-track' },
    ],
  },

  // ─── 7. inheritance-foster-adopted-child-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-foster-adopted-child-track',
    keyword: '양자 계자 상속자격',
    questionKeyword: '아버지의 계자(전처 자녀)·양자도 상속받나요?',
    ctaKeyword: '양자·계자 상속 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양자·계자 상속자격 — 5단계 친자녀와 동등 다툼 | 로앤가이드',
      description:
        '아버지의 양자·계자(전처 자녀)도 상속받는지 5가지 자격·비율 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 재혼하면서 새어머니 자녀를 \"계자\"로 받아 함께 살았고, 친조카 한 명은 \"양자\"로 입양했어요. 아버지 돌아가셨는데 \"양자·계자도 상속받나\" 다툼이 생겼어요. 어떤 형태 입양이었는지 정확히 모릅니다.\" 입양 형태별 상속 자격은 ① 친양자: 친부모와 단절, 양부모 자녀 ② 일반양자: 친부모·양부모 양쪽 상속 ③ 계자: 단순 동거 가족(상속 자격 없음) ④ 사실상 양자: 입양신고 부재 시 상속 자격 없음 5가지로 갈라지는 영역. 같은 \"양자\"라도 입양 신고 형태에 따라 상속 자격이 달라집니다. 대응은 ① 입양 자료 ② 자격 확인 ③ 협의 ④ 심판 ⑤ 유류분 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양자·계자 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입양형태·자격·협의·심판·유류분 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 입양 신고 형태 확인</strong> — 친양자·일반양자·계자.</li>\n<li><strong>② 상속 자격 판단</strong> — 가족관계증명서 기준.</li>\n<li><strong>③ 협의분할 시도</strong></li>\n<li><strong>④ 가정법원 심판분할</strong></li>\n<li><strong>⑤ 유류분 청구 (1년 / 10년)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"양자\"는 입양 신고 형태에 따라 친양자(친부모 단절·양부모 자녀) / 일반양자(양쪽 상속) / 계자(상속 자격 없음)로 갈라지는 영역. 가족관계증명서 \"상세\"로 정확한 자격 확인 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·청구·심판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족관계증명서 발급 (즉시)</strong> — \"상세\"로 입양 형태 확인.</li>\n<li><strong>2단계 — 입양 자료 보존 (1~2주)</strong> — 입양 결정문·신고서.</li>\n<li><strong>3단계 — 협의분할 시도 (3개월)</strong></li>\n<li><strong>4단계 — 가정법원 심판분할 (결렬 시)</strong></li>\n<li><strong>5단계 — 유류분 청구 (1년 / 10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">양자·계자 상속자격 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 입양·가족·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 가족관계증명서 (상세)</strong></li>\n<li><strong>양자·계자 기본증명서</strong></li>\n<li><strong>입양 결정문·입양 신고서</strong></li>\n<li><strong>친양자 입양 결정문 (해당 시)</strong></li>\n<li><strong>피상속인 재산 명세</strong></li>\n<li><strong>유언·증여 자료 (있을 시)</strong></li>\n<li><strong>협의 내역 (카톡·메일)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"계자\"는 단순 동거 가족일 뿐 입양 신고 안 된 자녀는 상속 자격 없음. 입양 신고 여부를 가족관계증명서 \"상세\"로 정확히 확인.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>친양자 (2008년 이후)</strong> — 친부모와 단절, 양부모 자녀로 평가.</li>\n<li><strong>일반양자</strong> — 친부모·양부모 양쪽 상속.</li>\n<li><strong>계자 (입양 미신고)</strong> — 상속 자격 없음.</li>\n<li><strong>사실상 양자</strong> — 입양 의사·동거·부양 입증 어려움.</li>\n<li><strong>유언 활용</strong> — 입양 안 된 계자에게 상속하려면 유언 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>법원 가족상담실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양자·계자 상속',
        summary:
          '대법원 2017다65357(2019.02.14 선고) 영역에서 법원은 친양자는 친부모와의 친족관계가 종료되어 양부모 측 자녀로서의 상속 자격이 인정되고, 일반양자는 친부모와 양부모 양쪽 모두에 대한 상속 자격이 유지되며, 단순 계자나 사실상 양자는 입양 신고 절차가 이행되지 않은 경우 상속 자격이 인정되지 않을 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '친양자·일반양자·계자 구분에 따라 상속 자격 갈림. 가족관계증명서가 결정적.',
      },
    ],
    faq: [
      {
        question: '친양자와 일반양자 차이는요?',
        answer:
          '<strong>친양자는 친부모 친족관계 종료(양부모 자녀만), 일반양자는 친부모·양부모 양쪽 자녀입니다.</strong>',
      },
      {
        question: '입양 신고만 안 했을 뿐 사실상 자녀였어요',
        answer:
          '<strong>사실상 양자는 상속 자격 인정 어려운 영역입니다.</strong> 유언이 있어야 안전.',
      },
      {
        question: '계자는 정말 상속을 못 받나요?',
        answer:
          '<strong>입양 신고가 없으면 상속 자격 없습니다.</strong> 유언으로 유증 가능.',
      },
      {
        question: '친양자가 친부모 사망 시 상속받나요?',
        answer:
          '<strong>아닙니다.</strong> 친양자는 친부모와 친족관계 종료라 상속 자격 없음.',
      },
      {
        question: '입양이 1990년대 옛날인데도 같은 원칙인가요?',
        answer:
          '<strong>친양자 제도는 2008년 도입, 그 전 입양은 모두 일반양자입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-forced-share-claim' },
      { label: '한정승인', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속자격 확인', href: '/guide/inheritance/inheritance-heir-status-confirmation' },
      { label: '상속포기·승인', href: '/guide/inheritance/inheritance-acceptance-renunciation-decision-track' },
    ],
  },
];
