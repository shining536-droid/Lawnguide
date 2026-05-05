import { SpokePage } from '../spoke-pages';

// batch56 divorce — 4개:
// 1. 시댁 부양료 다툼
// 2. 친권 vs 양육권 분리 가능성
// 3. 재산분할 기준 시점
// 4. 사실혼 해소 위자료·재산분할
//
// 고유 존재 이유:
// 1. 이 페이지는 시댁 부양 의무 부담을 거부해 이혼소송에 휘말린 배우자가 부부간 부양의무 + 직계존속 부양의무 분리 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 이혼 후 친권자와 양육자를 분리 지정하고 싶은 부모가 대법원 2011므4719 판결 + 분리 인정 요건 4가지를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 협의이혼·재판이혼 시 재산분할 대상·가액 산정의 기준시점을 다툼 트랙으로 정리하도록 돕는 페이지다.
// 4. 이 페이지는 5~10년 사실혼 해소 후 위자료·재산분할 청구를 검토하는 사실혼 배우자가 사실혼 해소 재산분할 기준시점 + 청구 5단계 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56Divorce: SpokePage[] = [
  // ─── 1. divorce / divorce-in-laws-care-cost-dispute ───
  {
    domain: 'divorce',
    slug: 'divorce-in-laws-care-cost-dispute',
    keyword: '시댁 부양료 부담 이혼 다툼',
    questionKeyword: '시부모님 부양료 분담을 거부했다는 이유로 이혼소송이 들어왔어요. 다툴 수 있나요?',
    ctaKeyword: '시댁 부양 이혼 다툼 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '시댁 부양료 분담 거부로 이혼소송 — 4가지 다툼 | 로앤가이드',
      description:
        '시부모 부양료 분담 거부로 이혼소송이 들어왔다면 부부간 부양의무 + 직계존속 부양의무 분리 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 8년 차인데 시부모님 매월 부양료 80만원을 부담하라는 남편의 요구가 부담돼서 거부했더니, 갑자기 \'혼인을 계속하기 어려운 중대한 사유\'를 들어 이혼소송이 들어왔어요. 시댁 부양 거부로 이혼당해야 하는 건가요?" 시댁 부양료 분담 거부와 이혼은 ① 민법 제826조 부부간 부양·협조의무 ② 민법 제974조 직계존속 부양의무(자녀의 의무) ③ 민법 제840조 제6호 \'혼인을 계속하기 어려운 중대한 사유\' 4가지 트랙으로 다툼이 가능한 영역입니다. 시부모 부양은 원칙적으로 자녀(남편)의 직계존속 부양의무이며, 며느리·사위의 직접 부양의무는 별도 영역. 부부 협력의 일환으로 일정 분담 가능하나 절대 의무가 아닌 영역이라, 거부 자체가 \'혼인 파탄\' 사유로 평가될 가능성은 한정적인 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 시댁 부양 다툼 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 부부간 부양·직계존속 부양·이혼사유·재산분할 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부부간 부양·협조의무 (민법 제826조)</strong> — 부부는 동거·부양·협조 의무. 시댁 부양은 이 협조의무 일부로 분담 검토 영역이지만 절대 의무 아닌 영역.</li>\n<li><strong>② 직계존속 부양의무 (민법 제974조)</strong> — 시부모 부양은 원칙적으로 자녀(남편)의 직접 의무. 며느리는 자녀의 배우자로서 협조 의무가 있을 뿐 직접 부양 의무는 없는 영역.</li>\n<li><strong>③ 혼인 파탄 사유 (민법 제840조 제6호)</strong> — 시댁 부양 거부 자체로 \'중대한 사유\' 인정은 한정적 영역. 거부 정황·다른 갈등 결합 종합 판단.</li>\n<li><strong>④ 재산분할 + 위자료 영향</strong> — 시댁 부양 분담 정황이 부부 공동재산 형성에 영향을 미쳤다면 재산분할 시 기여도 평가 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시댁 부양은 협조의 일환이지 절대 의무 아닌 영역. 거부 자체가 이혼사유로 평가되는 사례는 한정적이고, 거부 정황·기간·재산 상황 종합 판단되는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이혼 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 답변서 → 조정 → 변론 → 판결 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 부양료 요구 카톡·이메일·시댁 재산 정황·본인 분담 사실 자료·부양 거부 사유.</li>\n<li><strong>2단계 — 답변서 제출 (소장 송달 후 30일 내)</strong> — 시댁 부양 거부의 합리적 사유 + 부부간 다른 협조 정황 입증.</li>\n<li><strong>3단계 — 조정 (가정법원 의무 조정 1회)</strong> — 양 당사자 출석 의무. 변호사·법률구조공단 132 자문 후 조정.</li>\n<li><strong>4단계 — 변론 (조정 결렬 시)</strong> — 시댁 부양 거부 vs 혼인 파탄 결합 정황 다툼. 재산분할·위자료 본격 변론.</li>\n<li><strong>5단계 — 판결·항소 (1심 6~12개월)</strong> — 이혼 인정·재산분할·위자료 결정. 항소 시 2심 6개월 추가.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시댁 부양 다툼 4가지 점검 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 부양 다툼 자료 + 부부 갈등 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>시댁 부양료 요구 자료</strong> — 카톡·문자·통화·발언 녹취.</li>\n<li><strong>본인 분담 사실 자료</strong> — 송금 내역·부양 협조 정황.</li>\n<li><strong>시부모 재산·소득 정황</strong> — 시부모 자체 부양 능력 정황.</li>\n<li><strong>부부간 협조 정황</strong> — 가사·자녀양육·맞벌이 자료.</li>\n<li><strong>혼인 갈등 정황</strong> — 시댁 부양 외 갈등 자료.</li>\n<li><strong>본인·배우자 재산·소득 자료</strong> — 재산분할 산정용.</li>\n<li><strong>혼인관계증명서·가족관계증명서</strong> — 기본 증명.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시부모 자체 재산이 충분한데도 며느리에게 부양료 분담 요구 정황이라면 부양 필요성 다툼 트랙. 정황 자료는 다툼 강화 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 배우자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"부부 협조의무 위반으로 혼인 파탄" 주장 반박</strong> — 시댁 부양은 절대 협조 의무 아닌 영역. 거부 사유 + 부부간 다른 협조 정황 입증 시 반박 가능.</li>\n<li><strong>"며느리도 직계존속 부양의무" 주장 반박</strong> — 며느리는 직접 부양의무 부재. 협조 의무뿐인 영역(민법 제974조 해석).</li>\n<li><strong>"시부모 빈곤" 주장 반박</strong> — 시부모 자체 재산·소득·자녀 다수 정황 종합 판단. 며느리 단독 책임 부재 영역.</li>\n<li><strong>위자료·재산분할 결합</strong> — 이혼 인정 시 위자료(통상 1,000~3,000만원 수준)·재산분할(기여도 평가) 본격 다툼 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·가사 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>다누리콜센터 1577-1366</strong> — 다문화·가정 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부간 부양의무와 사전 부양료 청구',
        summary:
          '대법원 91므375 사건(대법원, 1991.11.26 선고)에서 법원은 부부간 상호 부양의무에 있어 이행청구 전의 부양료에 대한 지급청구는 인정되지 않는다고 판시했습니다. 또한 대법원 2025므10730 사건(대법원, 2025.09.04 선고)은 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'는 부부 공동의 노력으로 이룩한 재산을 일방적으로 처분하는 등 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위가 결합돼야 인정된다고 판시했습니다. 시댁 부양 분담 거부 자체만으로 \'중대한 사유\'로 평가되는 사례는 한정적인 영역입니다.',
        takeaway: '시댁 부양료 분담 거부는 부부간 협조의 한 부분으로, 거부 자체가 이혼사유로 평가되는 영역은 한정적이라 거부 사유·부부간 다른 협조 정황 입증으로 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '며느리도 시부모 부양 의무 있나요?',
        answer:
          '<strong>며느리는 직접 부양의무 부재입니다.</strong> 시부모 부양은 자녀(남편)의 직계존속 부양의무이며 며느리는 협조 의무뿐. 협조의 정도는 부부 합의·재산 상황 종합 영역.',
      },
      {
        question: '시댁 부양 분담 거부만으로 이혼당하나요?',
        answer:
          '<strong>거부 자체로 이혼사유 인정은 한정적입니다.</strong> 다른 갈등(폭언·외도·경제 비협조)과 결합돼야 \'혼인 계속 어려운 중대한 사유\' 인정 영역. 단독 사유로는 다툼 가능.',
      },
      {
        question: '협의이혼하면 재산분할은 어떻게 되나요?',
        answer:
          '<strong>협의이혼이라도 재산분할은 별도 청구 가능합니다.</strong> 이혼 후 2년 내 재산분할 청구 가능(민법 제839조의2). 시댁 부양 분담 정황이 기여도 평가에 영향 가능.',
      },
      {
        question: '위자료는 누가 받을 수 있나요?',
        answer:
          '<strong>혼인 파탄에 책임 있는 배우자가 상대방에게 위자료 지급 영역입니다.</strong> 시댁 부양 거부 정황이 파탄 책임으로 평가되는지가 핵심. 종합 판단 영역.',
      },
      {
        question: '소장 받고 응답 기한이 있나요?',
        answer:
          '<strong>소장 송달 후 30일 내 답변서 제출 필수입니다.</strong> 미제출 시 자백간주 위험. 변호사·법률구조공단 132 즉시 상담 후 답변서 작성.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 항목 종합', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '위자료 산정 표준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-consensual-divorce-process' },
      { label: '재판이혼 vs 협의이혼', href: '/guide/divorce/divorce-mediation-vs-trial-strategy' },
      { label: '재산분할 vs 위자료', href: '/guide/divorce/divorce-property-division-vs-alimony-comparison' },
    ],
  },

  // ─── 2. divorce / divorce-custody-vs-physical-custody-split ───
  {
    domain: 'divorce',
    slug: 'divorce-custody-vs-physical-custody-split',
    keyword: '친권 양육권 분리 지정 가능성',
    questionKeyword: '이혼하면서 친권자와 양육자를 분리 지정할 수 있나요? 어떤 경우에 가능한가요?',
    ctaKeyword: '친권 양육권 분리 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '친권자와 양육자 분리 — 4가지 인정 요건 | 로앤가이드',
      description:
        '이혼 시 친권자와 양육자를 분리 지정하고 싶다면 대법원 2011므4719 판결 + 분리 인정 요건 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼하면서 자녀 양육은 본인이 하고 싶지만, 자녀 명의 부동산 관리·법적 대리는 배우자가 더 적합해서 친권은 그쪽에 두고 싶어요. 이렇게 분리 지정이 가능한가요?" 이혼 후 친권과 양육권 분리는 일반적이지 않지만 대법원 2011므4719 판결은 일정 조건 충족 시 친권자와 양육자를 분리 또는 부모 공동 귀속으로 정할 수 있다고 판시했습니다. 분리 지정은 ① 자녀의 복리에 부합 ② 부모 모두 적합성 인정 ③ 부모 간 의사소통 가능 ④ 분리의 합리적 사유 4가지 요건이 결합된 사례에서 검토되는 영역이에요. 가정법원이 \'자녀의 복리\'를 최우선 기준으로 판단하기 때문에 분리 지정 사유의 합리성 입증이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 친권·양육권 분리 4가지 인정 요건',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀 복리·부모 적합성·의사소통·분리 사유 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자녀의 복리 (민법 제912조)</strong> — 친권·양육 결정의 최우선 기준. 분리 지정이 자녀에게 더 유리한 정황 입증이 핵심 영역.</li>\n<li><strong>② 부모 모두 적합성 인정</strong> — 부모 어느 한쪽이 부적격하다면 분리 지정 어려움. 두 부모 모두 일정 적합성 인정 시 분리 검토 영역.</li>\n<li><strong>③ 부모 간 의사소통 가능</strong> — 친권자(법적 대리)와 양육자(일상 양육)의 협력이 필수. 갈등 심한 부부는 분리 지정 어려운 영역.</li>\n<li><strong>④ 분리의 합리적 사유</strong> — 자녀 명의 재산 관리 능력·교육 결정·법적 대리 적합성 등 분리 지정의 합리적 사유 입증 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 분리 지정은 일반적 사례가 아닌 영역. 대법원 2011므4719는 일정 요건 충족 시 가능하다고 본 사례지만 자녀 복리 + 부모 협력이 필수. 변호사·가사조사관 자문이 효과적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 친권·양육 결정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 협의·조정 → 가사조사 → 변론 → 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (이혼 전·즉시)</strong> — 자녀 양육 정황·부모 적합성 자료·자녀 명의 재산 자료·교육·의료 결정 정황.</li>\n<li><strong>2단계 — 부모간 협의 또는 조정</strong> — 협의이혼 시 친권·양육 협의 가능. 합의 안 되면 가정법원 조정.</li>\n<li><strong>3단계 — 가사조사관 조사</strong> — 자녀·부모 면담·환경 조사. 자녀 만 13세 이상이면 본인 의견 청취 영역.</li>\n<li><strong>4단계 — 변론 (조정 결렬 시)</strong> — 분리 지정 합리적 사유 + 자녀 복리 부합 정황 본격 변론.</li>\n<li><strong>5단계 — 결정·항소</strong> — 가정법원 결정. 불복 시 항소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">친권·양육권 분리 4가지 인정 요건을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀 자료 + 부모 적합성 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>자녀 양육 정황 자료</strong> — 양육 기간·주된 양육자·일상 정황.</li>\n<li><strong>부모 직업·소득·근무환경</strong> — 양육 가능성·재산 관리 능력.</li>\n<li><strong>자녀 명의 재산 자료</strong> — 분리 지정 합리적 사유 (재산 관리 적합성).</li>\n<li><strong>자녀 교육·의료 결정 정황</strong> — 어느 부모가 결정해왔는지.</li>\n<li><strong>부모간 의사소통 가능성</strong> — 협력 정황·갈등 정도.</li>\n<li><strong>자녀 의견 (만 13세 이상)</strong> — 가사조사관 면담 시.</li>\n<li><strong>주거·교육 환경</strong> — 양육 환경 적합성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분리 지정은 일반적이지 않으므로 분리의 합리적 사유 + 자녀 복리 부합 정황을 명확히 입증해야 함. 변호사·가사조사관 자문 활용.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 분리 지정 다툼 포인트와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>가정법원 보수적 판단</strong> — 분리 지정은 일반적 사례 아닌 영역. \'동일인 귀속\' 원칙 + 분리 사유 합리성 입증 필요.</li>\n<li><strong>부모간 갈등 시 분리 어려움</strong> — 친권자와 양육자가 다르면 협력 필수. 갈등 심하면 분리 결정 어려운 영역.</li>\n<li><strong>자녀 복리 우선 원칙</strong> — 분리가 자녀에게 유리한 정황 입증이 핵심. 부모 편의 우선 사유는 거부될 가능성.</li>\n<li><strong>분리 후 변경 가능성</strong> — 친권·양육은 사후 변경 가능 영역. 사정 변경 시 가정법원에 변경 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·친권 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>가정법원 가사조사관실</strong> — 친권·양육 조사 절차.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 친권자와 양육자의 분리 지정 가능성',
        summary:
          '대법원 2011므4719 사건(대법원, 2012.04.13 선고)에서 법원은 부모가 이혼하는 경우 친권과 양육권이 항상 동일인에게 귀속되어야 하는 것은 아니며, 일정한 조건을 충족하는 경우 이혼 후 자녀에 대한 양육권이 부모 중 어느 일방에, 친권이 다른 일방에 또는 부모에게 공동으로 귀속되는 것으로 정할 수 있다고 판시했습니다. 친권·양육 결정의 최우선 기준은 \'자녀의 복리\'이며, 부모간 협력 가능성·자녀 의견 등을 종합 판단해야 한다고 본 사례입니다.',
        takeaway: '친권·양육 분리 지정은 일반적이지 않은 영역이지만 일정 요건 충족 시 가능하다고 본 사례가 있어, 자녀 복리 + 부모 적합성 + 합리적 사유 자료를 정리하면 분리 지정 검토 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '친권자와 양육자가 다르면 어떤 점이 불편한가요?',
        answer:
          '<strong>일상 양육은 양육자가, 법적 대리·중요 결정은 친권자가 합니다.</strong> 자녀 진학·여권 발급·계좌 개설 등에서 친권자 동의 필요. 부모간 협력 필수 영역.',
      },
      {
        question: '협의이혼 시 분리 지정 협의 가능한가요?',
        answer:
          '<strong>가능하지만 가정법원 확인을 받아야 합니다.</strong> 협의이혼 양육 합의서에 분리 지정 명시 + 가정법원 의사확인 시 검토. 자녀 복리 부합 여부가 핵심.',
      },
      {
        question: '자녀가 13세 이상이면 본인 의견대로 결정되나요?',
        answer:
          '<strong>법원이 자녀 의견을 청취하지만 절대 결정 요인은 아닙니다.</strong> 자녀 복리 종합 판단 영역. 다만 자녀 의견은 비중 큰 자료로 평가됨.',
      },
      {
        question: '분리 지정 후 변경 가능한가요?',
        answer:
          '<strong>사정 변경 시 가정법원에 변경 청구 가능합니다.</strong> 자녀 복리에 더 부합하는 변경 사유 입증 시 친권·양육 변경 결정 가능 영역.',
      },
      {
        question: '공동친권·공동양육도 가능한가요?',
        answer:
          '<strong>일부 사례에서 인정되지만 일반적은 아닙니다.</strong> 부모간 의사소통·협력이 매우 우수해야 자녀 복리 부합 정황. 가정법원 보수적 판단 영역.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '협의이혼 양육 합의서', href: '/guide/divorce/divorce-custody-agreement-prep' },
      { label: '자녀 13세 이상 의견', href: '/guide/divorce/divorce-teenager-custody-own-choice' },
      { label: '아버지 양육권 전략', href: '/guide/divorce/divorce-child-custody-father-strategy' },
      { label: '이혼 후 양육권 변경', href: '/guide/divorce/divorce-custody-modification-after-divorce' },
      { label: '청소년 친권 본인 선택', href: '/guide/divorce/divorce-child-custody-teen-preference' },
    ],
  },

  // ─── 3. divorce / divorce-property-division-cutoff-date ───
  {
    domain: 'divorce',
    slug: 'divorce-property-division-cutoff-date',
    keyword: '재산분할 기준시점 변론종결일',
    questionKeyword: '이혼소송 중 배우자가 재산을 처분했어요. 재산분할 기준시점은 언제인가요?',
    ctaKeyword: '재산분할 기준시점 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '재산분할 기준시점 — 4가지 다툼 포인트 | 로앤가이드',
      description:
        '이혼 재산분할 시 분할 대상·가액 산정의 기준시점이 어떻게 정해지는지 + 변동 사정 반영 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼소송 진행 중 배우자가 부동산을 처분하고 현금을 인출했어요. 재산분할 기준시점이 \'이혼 시점\'이라고 하던데, 그 사이 처분된 재산은 어떻게 산정되나요?" 재산분할의 \'기준시점\'은 분할 대상 재산을 무엇으로 보고 가액을 어느 시점으로 산정할지 결정하는 핵심 요소입니다. 대법원 2025스595 판결은 재판상 이혼을 전제로 한 재산분할의 기준시점은 \'이혼소송의 사실심 변론종결일\'이며, 조정이 성립한 경우에는 \'조정 성립일\'로 본다고 판시했습니다. 또한 변론종결 이후 외부적·후발적 사정이 있다면 그 가액 산정에 일정 정도 참작 가능한 영역으로 평가될 여지가 있어요. 사실혼은 \'사실혼 해소일\'이 기준 영역(2022므11027).</p>',
    sections: [
      {
        title: 'Q. 재산분할 기준시점 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 변론종결일·조정성립일·후발사정·은닉재산 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재판상 이혼 — 변론종결일 기준 (대법원 2025스595)</strong> — 분할 대상과 가액 산정 모두 사실심 변론종결일 기준.</li>\n<li><strong>② 조정 성립 시 — 조정 성립일 기준</strong> — 이혼 조정이 성립한 사안은 조정 성립일이 기준.</li>\n<li><strong>③ 후발사정 참작</strong> — 변론종결 이후 외부적·후발적 사정(부동산 가격 변동 등)은 일정 정도 참작 가능 영역(2025스595·2022므11027).</li>\n<li><strong>④ 은닉·처분 재산</strong> — 분할 회피 의도로 처분·은닉한 재산은 재산분할 대상에 포함 + 환원 조치 트랙. 가처분·재산명시신청 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 재산분할 기준시점은 협의이혼이냐 재판이혼이냐에 따라 다르고, 사실혼은 \'사실혼 해소일\'이 기준. 분할 회피 처분은 분할 대상에 포함되는 사례가 있어 자료 보존이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재산분할 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산조사 → 가처분 → 재산분할 청구 → 변론 → 분할 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산조사 (즉시)</strong> — 부부 공동재산·특유재산·소극재산(채무) 자료 정리. 등기부등본·통장·국민연금·자동차 등록증.</li>\n<li><strong>2단계 — 가처분·재산명시 신청 (분할 회피 우려 시)</strong> — 배우자 분할 회피 처분 우려 시 부동산·예금 가처분. 재산명시신청.</li>\n<li><strong>3단계 — 재산분할 청구 (이혼 후 2년 내, 민법 제839조의2)</strong> — 협의이혼 후 별도 청구 또는 재판이혼과 함께 청구.</li>\n<li><strong>4단계 — 변론·기여도 평가</strong> — 부부 기여도(재산 형성·유지·증식) 평가. 일반적으로 30~50% 영역.</li>\n<li><strong>5단계 — 분할 결정·강제집행</strong> — 분할 결정 후 이행 안 되면 강제집행. 부동산 등기명의 이전·금전 압류.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">재산분할 기준시점 4가지 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 부부 재산 자료 + 기여 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>부동산 등기부등본</strong> — 명의·취득시점·매매가·감정평가.</li>\n<li><strong>금융자산 자료</strong> — 통장·예금·주식·코인 등.</li>\n<li><strong>소극재산(채무) 자료</strong> — 카드·대출·전세보증금 부담.</li>\n<li><strong>자녀양육·가사 정황</strong> — 기여도 평가용.</li>\n<li><strong>맞벌이·소득 자료</strong> — 직접 기여 입증.</li>\n<li><strong>특유재산 자료</strong> — 혼전 재산·상속·증여 분리.</li>\n<li><strong>분할 회피 정황</strong> — 처분·은닉 의심 거래.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼소송 시작 후 배우자 명의 재산 처분 정황이 있다면 즉시 가처분·재산명시 신청. 분할 회피 의도가 입증되면 재산분할 대상에 포함되는 사례가 있는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산분할 다툼 포인트와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"특유재산이라 분할 대상 아니다" 주장 다툼</strong> — 혼전 재산·상속·증여라도 혼인 중 가치 증가가 부부 협력 결과면 분할 대상 영역.</li>\n<li><strong>"채무가 더 많다" 주장 검토</strong> — 채무 분담도 재산분할의 일부. 부부 공동 채무 vs 개인 채무 구분(2010므4071).</li>\n<li><strong>"분할 회피 처분이 아니다" 주장 반박</strong> — 시점·금액·용도 정황으로 분할 회피 의도 입증. 처분 직후 자금 흐름 추적.</li>\n<li><strong>2년 제척기간 주의</strong> — 이혼 후 2년 내 청구. 도과 시 청구권 소멸 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 재산분할 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>가정법원 (서울 1644-7077)</strong> — 가처분·재산명시 절차.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재판상 이혼 재산분할의 기준시점',
        summary:
          '대법원 2025스595 사건(대법원, 2025.08.14 선고)에서 법원은 재판상 이혼을 전제로 한 재산분할에서 분할의 대상이 되는 재산과 그 액수를 정하는 기준 시점은 이혼소송의 사실심 변론종결일이며, 이혼 조정이 성립한 경우에도 분할 대상 재산과 액수는 조정이 성립한 날을 기준으로 정해야 한다고 판시했습니다. 또한 변론종결 후 사실심 심문종결 시까지 외부적·후발적 사정이 있는 경우 일정 정도 참작 가능하다고 보았습니다. 사실혼 해소 재산분할은 \'사실혼 해소일\'이 기준입니다(2022므11027).',
        takeaway: '재산분할 기준시점은 이혼 형태(재판·조정·협의·사실혼 해소)에 따라 달라지는 영역으로, 기준시점 + 후발사정 + 분할 회피 처분을 종합 검토하면 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '협의이혼 재산분할 기준시점은 언제인가요?',
        answer:
          '<strong>협의 성립일 또는 협의이혼 신고일이 일반적 영역입니다.</strong> 다만 협의 후 별도 재산분할 청구 시 기준시점은 사례별 검토 영역. 변호사 자문 권장.',
      },
      {
        question: '이혼소송 중 배우자가 부동산 처분했어요',
        answer:
          '<strong>분할 회피 처분이라면 재산분할 대상에 포함되는 사례가 있습니다.</strong> 즉시 가처분·재산명시 신청 + 처분 정황 자료 보존. 시점·금액·용도가 핵심.',
      },
      {
        question: '특유재산은 절대 분할 대상 아닌가요?',
        answer:
          '<strong>혼전 재산·상속·증여라도 혼인 중 가치 증가가 부부 협력 결과면 분할 대상 영역입니다.</strong> 가치 증가분 + 협력 정도 입증으로 분할 청구 가능.',
      },
      {
        question: '재산분할 청구 기한이 있나요?',
        answer:
          '<strong>이혼 후 2년 내 청구해야 합니다(민법 제839조의2 제3항).</strong> 도과 시 청구권 소멸 영역. 협의이혼이라도 별도 재산분할 청구는 2년 내 가능.',
      },
      {
        question: '사실혼 해소 재산분할은 어떻게 되나요?',
        answer:
          '<strong>사실혼 해소일이 기준입니다(대법원 2022므11027).</strong> 사실혼 해소 후 재산분할 청구사건 사실심 변론종결 시까지 후발사정도 참작 가능 영역.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 종합 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '숨긴 재산 추적', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재산분할 vs 위자료', href: '/guide/divorce/divorce-property-division-vs-alimony-comparison' },
      { label: '재산처분 사유 입증', href: '/guide/divorce/divorce-asset-disposal-grounds' },
      { label: '특유재산 분할 제외', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
    ],
  },

  // ─── 4. divorce / divorce-de-facto-fault-spouse-alimony-amount ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-fault-spouse-alimony-amount',
    keyword: '사실혼 해소 위자료 재산분할',
    questionKeyword: '7년 사실혼 관계가 상대방 외도로 끝났어요. 위자료·재산분할 청구 가능한가요?',
    ctaKeyword: '사실혼 해소 위자료 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사실혼 해소 위자료·재산분할 — 5단계 청구 | 로앤가이드',
      description:
        '5~10년 사실혼이 상대방 책임으로 해소됐다면 위자료 + 재산분할 + 사실혼 해소일 기준시점 5단계 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"7년간 사실혼 관계로 함께 살았고 같이 모은 재산도 있는데, 상대방 외도로 헤어지게 됐어요. 혼인신고는 안 했는데 위자료·재산분할 청구 가능한가요?" 사실혼 해소 시 위자료·재산분할은 법률혼에 준하여 청구 가능한 영역입니다. 대법원 2022므11027 판결은 사실혼 해소 재산분할의 기준시점을 \'사실혼 해소일\'로 보고, 해소 이후 변론종결까지 외부적·후발적 사정도 참작 가능하다고 판시했습니다. 사실혼 해소 위자료는 부정행위·폭력·일방적 동거거부 등 책임 있는 사유로 해소된 경우 청구 가능하고, 재산분할은 부부 공동재산 형성 기여도에 따라 분할 대상이 되는 영역이에요. 다만 동성 동거관계는 사실혼으로 인정되지 않는 사례가 있습니다(2003드합292).</p>',
    sections: [
      {
        title: 'Q. 사실혼 해소 4가지 청구 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼 인정·위자료·재산분할·기준시점 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 인정 요건</strong> — 혼인 의사 + 사회 통념상 부부로 평가되는 공동생활 + 일정 기간 동거. 일반적으로 5~10년 동거 + 가족·지인의 부부 인식 결합 영역.</li>\n<li><strong>② 위자료 청구</strong> — 사실혼 해소가 일방의 책임 있는 사유(부정행위·폭력·일방 동거거부)이면 위자료 청구 가능. 일반적으로 1,000~3,000만원 영역.</li>\n<li><strong>③ 재산분할 청구</strong> — 사실혼 중 형성된 공동재산 분할. 기여도 평가 (직접 + 가사·자녀양육 등 간접).</li>\n<li><strong>④ 기준시점 (대법원 2022므11027)</strong> — 사실혼 해소일이 분할 대상·가액 산정 기준. 해소 후 후발사정도 일정 정도 참작.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼 해소 위자료·재산분할은 법률혼에 준해 청구 가능한 영역이지만, 사실혼 인정 자체가 입증 영역이라 동거 기간·가족·지인 인식 자료가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 사실혼 입증 → 가처분 → 청구 → 분할 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 동거 기간·가족·지인 인식·공동재산 형성 정황·해소 사유 자료.</li>\n<li><strong>2단계 — 사실혼 인정 자료 정리 (1~2주)</strong> — 결혼식·가족 행사·공동 통장·임대차계약·사진·SNS·카톡.</li>\n<li><strong>3단계 — 가처분·재산명시 (분할 회피 우려 시)</strong> — 상대방 분할 회피 우려 시 부동산·예금 가처분.</li>\n<li><strong>4단계 — 위자료·재산분할 청구 (사실혼 해소 후)</strong> — 가정법원 가사소송. 위자료는 3년·재산분할은 2년 시효.</li>\n<li><strong>5단계 — 변론·결정·강제집행</strong> — 사실혼 인정 + 책임 있는 사유 + 기여도 본격 변론. 결정 후 강제집행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 해소 위자료·재산분할 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼 인정 자료 + 재산 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>동거 기간 자료</strong> — 임대차계약·전입신고·관리비.</li>\n<li><strong>가족·지인 인식 자료</strong> — 결혼식·가족 행사·SNS·카톡.</li>\n<li><strong>공동재산 자료</strong> — 공동 통장·부동산·자동차·주식·코인.</li>\n<li><strong>해소 사유 자료</strong> — 외도·폭력·일방 동거거부 정황.</li>\n<li><strong>기여 자료</strong> — 맞벌이·가사·자녀양육 정황.</li>\n<li><strong>자녀 자료 (있다면)</strong> — 출생증명·양육 정황.</li>\n<li><strong>특유재산 자료</strong> — 사실혼 전 재산·상속.</li>\n<li><strong>해소 시점 입증</strong> — 별거 시점·통보 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결혼식·가족 행사·SNS 결합 사진과 친구·지인의 부부 인식 진술이 사실혼 인정의 강한 자료. 자녀가 있으면 사실혼 인정 매우 강한 정황.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 동거였다" 주장 반박</strong> — 결혼식·가족 인식·공동재산 정황 결합 시 사실혼 인정 영역. 단순 동거 vs 사실혼 구분이 핵심.</li>\n<li><strong>"본인 명의 재산은 분할 대상 아니다" 주장 반박</strong> — 명의와 무관하게 사실혼 중 공동 형성 재산은 분할 대상 영역.</li>\n<li><strong>"외도가 아니다" 주장 반박</strong> — 외도·폭력·일방 동거거부 등 책임 있는 사유 입증 시 위자료 청구 가능.</li>\n<li><strong>위자료 시효 3년·재산분할 2년</strong> — 사실혼 해소일로부터 위자료 3년·재산분할 2년 시효. 빠른 청구 안전.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 사실혼·이혼 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>다누리콜센터 1577-1366</strong> — 다문화·가정 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 해소 재산분할의 기준시점',
        summary:
          '대법원 2022므11027 사건(대법원, 2024.01.04 선고)에서 법원은 사실혼 해소를 원인으로 한 재산분할에서 분할 대상이 되는 재산과 액수를 정하는 기준시점은 사실혼이 해소된 날이라고 판시했습니다. 또한 사실혼 해소 이후 재산분할 청구사건 사실심 변론종결 시까지 사이에 혼인 중 공동의 노력으로 형성·유지한 부동산 등에 발생한 외부적·후발적 사정이 있는 경우 이를 분할대상 재산의 가액 산정에 일정 정도 참작 가능하다고 보았습니다.',
        takeaway: '사실혼 해소 위자료·재산분할은 사실혼 인정 + 해소일 기준 + 기여도 평가 결합 영역이라, 동거 자료·공동재산 자료를 정리하면 청구 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '몇 년 동거해야 사실혼 인정되나요?',
        answer:
          '<strong>일반적으로 3~5년 이상이 인정 정황이지만 절대 기준은 아닙니다.</strong> 동거 기간 + 가족·지인 인식 + 결혼식·자녀 + 공동재산 결합 종합 판단 영역.',
      },
      {
        question: '결혼식 안 했어도 사실혼 인정되나요?',
        answer:
          '<strong>가능합니다.</strong> 결혼식은 사실혼 인정 강한 자료지만 절대 요건 아님. 가족·지인의 부부 인식 + 동거 자료 결합으로 인정 가능 영역.',
      },
      {
        question: '본인 명의로 모은 재산은 분할 안 되나요?',
        answer:
          '<strong>명의와 무관하게 사실혼 중 공동 형성 재산은 분할 대상 영역입니다.</strong> 명의자라도 기여도(맞벌이·가사·양육) 평가에 따라 분할.',
      },
      {
        question: '위자료 얼마 받을 수 있나요?',
        answer:
          '<strong>사례별 다르지만 사실혼 위자료는 1,000~3,000만원 수준이 검토되는 사례가 많은 영역입니다.</strong> 사실혼 기간·해소 책임·정신적 고통 정도 종합 산정.',
      },
      {
        question: '동성 동거관계도 사실혼으로 인정되나요?',
        answer:
          '<strong>현재 판례는 동성 동거를 사실혼으로 인정하지 않는 영역입니다(2003드합292).</strong> 다만 사회 변화에 따라 향후 변화 가능성. 변호사 자문 검토.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 위자료 청구', href: '/guide/divorce/divorce-de-facto-marriage-alimony-claim' },
      { label: '사실혼 재산분할 범위', href: '/guide/divorce/divorce-de-facto-marriage-property-division-scope' },
      { label: '사실혼 해소 절차', href: '/guide/divorce/divorce-de-facto-marriage-dissolution' },
      { label: '동거 재산분할', href: '/guide/divorce/divorce-cohabitation-property-dissolution' },
      { label: '재산분할 기준시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
    ],
  },
];
