import { SpokePage } from '../spoke-pages';

// batch55 inheritance 3개 (batch54와 다른 분기축):
//   1. 한정승인 후 상속재산 매도/소비 → 단순승인 의제 위험 (Q&A형, victim — 민법 제1026조)
//   2. 유언공증 vs 자필유언 효력 다툼 (절차형, victim — 민법 제1066조·제1068조)
//   3. 상속세 신고 후 6개월 지나서 분쟁 → 경정청구·재분할 (Q&A형, victim — 국세기본법 제45조의2)
//
// 고유 존재 이유:
// 1. 이 페이지는 한정승인 신고 후 상속재산을 함부로 매도·소비하거나 은닉했다가 단순승인으로 의제될 위험에 처한 상속인이, 민법 제1026조 법정단순승인 5가지 사유와 회피 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 피상속인이 남긴 자필유언과 공정증서 유언이 충돌하거나, 자필유언의 형식 흠결을 이유로 효력 다툼이 발생한 상속인이, 자필증서·공정증서 유언의 효력 요건과 무효 다툼 4단계를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 상속세 신고기한 6개월을 지나 분쟁이 발생한 후 상속재산 평가·분할이 달라진 상속인이, 국세기본법 제45조의2 경정청구·재분할에 따른 후발적 사유 5단계를 정리하도록 돕는 페이지다.

export const spokesBatch55Inheritance: SpokePage[] = [
  // ─── 1. inheritance / limited-acceptance-after-sell-deemed-simple ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-after-sell-deemed-simple',
    keyword: '한정승인 후 상속재산 처분 단순승인 의제',
    questionKeyword: '한정승인 신고했는데 그 뒤 상속받은 부동산을 팔았어요. 단순승인으로 바뀐다는 게 사실인가요?',
    ctaKeyword: '한정승인 후 처분 위험 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '한정승인 후 상속재산 처분 5가지 위험 | 로앤가이드',
      description:
        '한정승인 신고 후 상속재산을 매도·소비·은닉하면 단순승인으로 의제되는 5가지 위험과 회피 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"빚이 더 많아 보여서 한정승인 신고를 마쳤습니다. 그런데 상속받은 아파트를 급한 김에 처분해서 일부를 생활비에 쓰고 나머지는 통장에 넣어뒀어요. 변호사 친구가 \'그렇게 하면 단순승인으로 바뀐다\'고 해서 가슴이 철렁했습니다." 민법 제1026조 법정단순승인은 한정승인·상속포기를 했더라도 <strong>상속재산을 처분·은닉·소비</strong>한 경우 한정승인의 보호를 잃게 되는 무서운 규정이에요. 단순승인으로 의제되면 피상속인 채무 전액에 대해 본인 고유재산으로 책임지게 됩니다. 어떤 행위가 위험한지·청산 절차는 어떻게 진행해야 하는지 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 한정승인 후 어떤 행위가 단순승인으로 의제되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민법 제1026조의 법정단순승인 사유는 5가지로 분류됩니다.</strong></p>\n<ul>\n<li><strong>1호 — 상속재산 처분</strong> — 한정승인 신고 전에 상속재산을 매도·증여·담보 제공한 경우. 보존행위(긴급 수선·세금 납부)는 제외.</li>\n<li><strong>2호 — 신고기간 내 미신고</strong> — 상속개시 안 날부터 3개월 내 한정승인·포기 신고하지 않으면 자동 단순승인 의제.</li>\n<li><strong>3호 — 신고 후 은닉·소비·부정기재</strong> — 한정승인 신고 후라도 상속재산을 빼돌리거나 임의로 소비, 재산목록에 일부러 누락한 경우. 가장 자주 보고되는 위험.</li>\n<li><strong>매각대금의 사적 사용</strong> — 매도 자체는 청산 목적이면 가능하지만 매각대금을 본인 생활비·다른 용도로 쓰면 3호 소비에 해당.</li>\n<li><strong>한정승인의 효과 상실</strong> — 단순승인 의제 시 피상속인 채무 전액 본인 고유재산으로 책임. 채권자가 본인 통장·부동산에 강제집행 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한정승인의 핵심은 "상속재산 범위 내 책임"이라, 그 재산을 임의 처분하면 보호 근거 자체가 사라집니다.</blockquote>',
      },
      {
        title: 'Q. 부동산을 팔아야 채무를 갚을 수 있을 땐 어떻게 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 청산 절차 안에서 매각하면 단순승인으로 의제되지 않습니다.</strong></p>\n<ul>\n<li><strong>청산 공고(민법 제1032조)</strong> — 한정승인 신고 후 5일 내 채권자·수증자에게 2개월 이상 신고 공고. 신문 또는 법원 게시판 공고.</li>\n<li><strong>임의경매 또는 매각</strong> — 채권자에게 변제하기 위한 매각은 허용. 다만 매각가액은 상속재산 청산 계좌에 보관, 사적 사용 금지.</li>\n<li><strong>채권자 안분변제</strong> — 신고된 채권을 비례 안분변제. 우선변제권자(저당권 등) 우선 처리 후 일반채권자 안분.</li>\n<li><strong>잔여재산 처리</strong> — 채권 변제 후 남은 재산만 상속인 고유재산으로 귀속. 변제 전에 사용하면 위험.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">한정승인 후 매각·청산·안분변제 순서가 사안마다 미묘하게 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">한정승인 신고 + 청산 절차에 아래 자료를 미리 정리해두면 단순승인 의제 위험을 줄일 수 있어요.</strong></p>\n<ul>\n<li><strong>한정승인 신고서·재산목록</strong> — 가정법원 제출. 적극재산·소극재산 모두 정확히 기재. 누락은 부정기재로 단순승인 의제.</li>\n<li><strong>피상속인 사망진단서·기본증명서·가족관계증명서</strong> — 상속인 확정 자료.</li>\n<li><strong>피상속인 부동산 등기부등본·자동차 등록원부</strong> — 상속재산 적극재산 명세.</li>\n<li><strong>피상속인 금융거래내역·신용정보원 채무조회서</strong> — 소극재산(빚) 명세. 신용정보원 무료조회 활용.</li>\n<li><strong>채권자 신고 공고 자료</strong> — 신문 광고 또는 법원 게시 증빙. 2개월 이상 공고 필수.</li>\n<li><strong>청산 계좌(전용 통장)</strong> — 상속재산 매각대금·임대료를 본인 계좌와 분리 관리. 사적 사용 흔적 방지.</li>\n<li><strong>안분변제 명세서</strong> — 채권자별 변제 비율·금액 기록. 추후 분쟁 시 입증 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "상속받은 통장에서 장례비 인출은 괜찮다"고 생각하기 쉬운데, 사회 통념상 상당한 장례비는 보존행위로 인정되지만 과도한 금액은 소비로 의제될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 한정승인 후 단순승인 의제 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>매각대금 사적 사용</strong> — 부동산 매도 자체는 가능해도 매각대금을 본인 생활비·자녀 학비로 쓰면 3호 소비. 청산 계좌에 보관해야 안전.</li>\n<li><strong>재산목록 누락</strong> — 일부러 빠뜨리지 않아도 모르고 누락된 항목이 발견되면 부정기재 다툼 발생. 신용정보원 조회 + 등기부 전수 점검.</li>\n<li><strong>3개월 신고기간 도과</strong> — 상속개시 안 날부터 3개월 내 신고 못 하면 자동 단순승인. 특별한정승인(빚 사실 안 날부터 3개월) 별도 검토.</li>\n<li><strong>장례비·세금 처리</strong> — 보존행위 인정 범위 다툼. 통상 사회통념상 장례비·관리비·세금은 보존행위로 인정되지만 액수 다툼 자주 발생.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 가사신청과(한정승인 신고) / 한국가정법률상담소 1644-7077 / 신용정보원(채무조회).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속인 예금 임의인출과 상속회복청구',
        summary:
          '대법원 2025다212863(대법원, 2025.12.11 선고) 사건에서 법원은 공동상속인 중 한 명이 피상속인 명의 외화예금을 임의로 인출해 자기 계좌로 옮긴 사안에서, 그 인출이 다른 공동상속인의 상속권을 침해한 것이라면 상속회복청구의 소에 해당하고 인출 상속인은 참칭상속인에 해당한다고 판시했습니다. 한정승인 후 임의 인출·소비도 같은 맥락에서 "상속재산 처분·소비"로 평가될 수 있으니, 모든 인출·이체는 청산 계좌를 통해 기록을 남기는 것이 도움이 됩니다.',
        takeaway: '한정승인 후 상속재산 인출·이체는 임의 처분으로 평가되어 단순승인 의제 위험이 있으니, 청산 계좌·채권자 안분변제 기록을 남겨 절차 안의 행위임을 입증할 수 있도록 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '한정승인 신고 전에 상속받은 부동산을 팔았어요. 그래도 한정승인 신고가 가능한가요?',
        answer:
          '<strong>매도 자체로 1호 처분이 인정되면 단순승인 의제됩니다.</strong> 다만 보존행위(긴급 수선·세금 납부)거나 처분 사실을 모른 채 한정승인 신고했다면 다툼 여지. 즉시 변호사 상담 권장.',
      },
      {
        question: '한정승인 후 상속받은 통장에서 장례비를 인출했어요. 위험한가요?',
        answer:
          '<strong>사회통념상 상당한 장례비는 보존행위로 인정되어 안전합니다.</strong> 다만 액수가 과도하거나(예: 수천만원) 다른 용도가 섞이면 소비로 의제될 수 있어요. 영수증·견적서를 보관하세요.',
      },
      {
        question: '상속재산 매각대금을 본인 계좌에 넣어뒀는데 아직 안 썼어요. 괜찮을까요?',
        answer:
          '<strong>본인 계좌 입금만으로도 혼동 위험이 있습니다.</strong> 청산 전용 계좌로 즉시 이체하고 채권자 안분변제 전까지 사용하지 마세요. 안 썼더라도 본인 계좌 보관은 위험 신호.',
      },
      {
        question: '상속채무가 더 많은 줄 모르고 단순승인했는데 나중에 빚이 발견됐어요. 구제 방법은?',
        answer:
          '<strong>특별한정승인을 검토할 수 있습니다.</strong> 민법 제1019조 제3항: 상속채무가 적극재산을 초과한다는 사실을 중대한 과실 없이 몰랐다가 안 날부터 3개월 내 한정승인 신고 가능.',
      },
      {
        question: '재산목록에 깜빡 빠뜨린 부동산이 있어요. 부정기재로 단순승인 의제될까요?',
        answer:
          '<strong>고의·중과실 여부가 핵심입니다.</strong> 모르고 누락한 항목은 추후 보정 가능. 다만 채권자 측에서 "고의 누락"으로 다투면 분쟁 가능성. 발견 즉시 가정법원에 보정신고 검토.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 vs 상속포기 차이', href: '/guide/inheritance/inheritance-limited-acceptance-vs-renunciation-choice' },
      { label: '특별한정승인 신청 요건', href: '/guide/inheritance/inheritance-special-limited-acceptance-requirements' },
      { label: '상속재산 청산 공고·안분변제', href: '/guide/inheritance/inheritance-liquidation-notice-procedure' },
      { label: '상속포기 후 차순위 상속인', href: '/guide/inheritance/inheritance-renunciation-next-order-heir' },
      { label: '상속채무 신용정보원 조회', href: '/guide/inheritance/inheritance-debt-credit-info-search' },
    ],
  },

  // ─── 2. inheritance / notarized-vs-handwritten-will-validity ───
  {
    domain: 'inheritance',
    slug: 'inheritance-notarized-vs-handwritten-will-validity',
    keyword: '공정증서 유언 자필유언 효력 다툼',
    questionKeyword: '아버지가 공증으로 유언을 남겼는데, 그 후 자필로 다른 내용 유언장도 쓰셨어요. 어느 쪽이 효력 있나요?',
    ctaKeyword: '유언 효력 다툼 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공정증서 vs 자필유언 효력 다툼 4단계 | 로앤가이드',
      description:
        '자필유언의 형식 흠결·공정증서와 충돌·후순위 유언장 효력 다툼을 정리하는 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지는 5년 전 공증사무소에서 공정증서 유언을 남기셨어요. 그런데 돌아가시기 6개월 전 자필로 \'재산을 다시 분배한다\'는 유언장을 쓰셨다고 큰누나가 들고 왔습니다. 자필 유언장엔 날짜는 있는데 주소가 빠졌고요." 민법은 5가지 유언 방식(자필증서·녹음·공정증서·비밀증서·구수증서)을 정해두고 <strong>형식 요건을 하나라도 어기면 유언 자체가 무효</strong>가 되도록 엄격하게 다룹니다. 자필증서 유언(민법 제1066조)은 전문·연월일·주소·성명·날인 5요건, 공정증서 유언(제1068조)은 증인 2명+공증인 작성. 어느 쪽 유언이 효력 있는지·형식 흠결을 어떻게 다툴지 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: '자필유언 vs 공정증서 — 5가지 핵심 비교',
        content:
          '<p><strong style="color:#1e3a5f">두 유언의 효력 요건과 다툼 빈도를 정리해두면 도움이 됩니다.</strong></p>\n<ul>\n<li><strong>자필증서(민법 제1066조)</strong> — 유언자가 전문·연월일·주소·성명을 자필로 쓰고 날인. 5요건 중 하나라도 빠지면 무효. 변경·삭제도 자필 + 날인 필요.</li>\n<li><strong>공정증서(민법 제1068조)</strong> — 증인 2명 입회 하에 공증인이 작성. 형식 요건이 가장 엄격해 사후 무효 다툼 적음. 비용 발생(가액의 0.05~0.1%).</li>\n<li><strong>저촉 시 후순위 우선</strong> — 동일 사항에 여러 유언이 있으면 후순위 유언이 전순위를 철회한 것으로 간주(민법 제1109조). 즉 자필이 공정증서보다 늦으면 자필 우선.</li>\n<li><strong>형식 무효 시 종전 유언 부활</strong> — 후순위 유언이 형식 흠결로 무효면 전순위 유언(공정증서)이 다시 효력 회복.</li>\n<li><strong>검인절차(민법 제1091조)</strong> — 자필유언은 가정법원 검인 필수. 공정증서는 검인 불요. 검인 없이 등기·예금 인출 곤란.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자필유언은 형식 5요건 중 하나라도 빠지면 무효라, 검인절차에서 형식 흠결을 다투면 공정증서가 부활하는 구조입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 유언 효력 다툼 4단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언장 검인 신청 (사망 후 즉시)</strong> — 자필유언·녹음·비밀증서·구수증서는 가정법원 검인 필수(민법 제1091조). 공정증서는 검인 불요. 검인기일에 상속인 전원 입회.</li>\n<li><strong>2단계 — 형식 요건 검토</strong> — 자필증서는 전문·연월일·주소·성명·날인 5요건 점검. 한 가지라도 빠지면 무효 주장 가능. 변호사·필적감정인 의견 확보.</li>\n<li><strong>3단계 — 유언무효 확인의 소 (지방법원, 6~12개월)</strong> — 형식 흠결·유언능력 부존재(치매·강박)·필적 위조 등을 이유로 유언무효 확인 청구. 필적감정·진료기록·증인 신문 핵심.</li>\n<li><strong>4단계 — 종전 유언 효력 회복 + 상속등기</strong> — 후순위 유언 무효 확정 시 공정증서 부활. 공정증서 기준으로 상속재산 분할·등기 진행. 부동산 이전등기·예금 인출 절차 재개.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유언 형식 흠결·필적감정·종전 유언 부활 다툼이 사안마다 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">유언 효력 다툼·검인절차에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>유언장 원본 + 사본</strong> — 자필증서·공정증서 모두 보관 위치 확인. 공증사무소에 공정증서 보관본 사본 발급 요청.</li>\n<li><strong>유언자 사망진단서·기본증명서</strong> — 사망 사실·유언능력 보유 시점 확정.</li>\n<li><strong>유언자 진료기록·치매검사 결과</strong> — 자필 작성 당시 의식상태·판단능력 입증 자료. 신경과·정신과 진료기록 확보.</li>\n<li><strong>필적감정 자료</strong> — 평소 자필 자료(편지·일기·서명) 5점 이상. 국립과학수사연구원 또는 사설 감정기관.</li>\n<li><strong>증인 진술서</strong> — 유언 작성 당시 동석·목격한 사람 진술. 강박·기망 다툼 시 핵심.</li>\n<li><strong>가족관계증명서·제적등본</strong> — 상속인 확정 자료. 검인기일 통지에 필요.</li>\n<li><strong>인감증명서·실인</strong> — 소장 인감날인용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "공정증서가 더 강력하니 자필유언은 자동 무효"라고 오해. 후순위 자필이 5요건을 갖췄으면 공정증서를 철회한 효력이 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 유언 효력 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>주소 누락</strong> — 자필증서 5요건 중 가장 자주 빠지는 항목. 시·구·동만 적고 번지 없으면 무효 다툼. 호수까지 정확히.</li>\n<li><strong>날인 도장 미기재</strong> — 인감·서명 둘 다 안 찍고 자필 서명만 있으면 무효 다툼. 도장 + 자필성명 둘 다 권장.</li>\n<li><strong>변경·삭제 부분 별도 날인 누락</strong> — 본문 작성 후 일부 수정·삭제했다면 그 부분에도 자필 + 날인 필요. 누락 시 변경 부분만 무효.</li>\n<li><strong>검인 미신청 채 등기 시도</strong> — 검인 없이 등기소·은행에 자필유언 제출하면 거부. 검인절차 종료 후 검인조서 첨부해야 진행 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 가정법원 가사1과(검인절차) / 지방법원 민사부(유언무효확인) / 한국가정법률상담소 / 국립과학수사연구원(필적감정).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄적 유증의 의미와 유류분 관계',
        summary:
          '대법원 2022다220014(대법원, 2025.05.29 선고) 사건에서 법원은 유증이 포괄적 유증인지 특정유증인지는 유언 문언과 제반 사정을 종합적으로 고려해 유언자의 의사에 따라 결정해야 한다고 판시했습니다. 포괄적 수증자는 상속인과 동일한 권리·의무를 가지며 소극재산도 함께 승계하지만, 유류분권리자의 반환청구가 있으면 그 침해 범위 내에서 유증이 소급적으로 효력을 잃습니다. 자필유언의 효력이 인정되더라도 다른 상속인의 유류분이 침해되면 별도의 반환청구 트랙이 열려 있어 함께 검토하면 도움이 됩니다.',
        takeaway: '유언 효력이 인정되더라도 다른 상속인의 유류분 침해 다툼이 별도로 열리니, 효력 다툼과 유류분 다툼을 동시에 정리하면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '자필유언에 주소가 \'서울시 강남구\'까지만 적혀 있어요. 무효인가요?',
        answer:
          '<strong>주소 특정성이 부족해 무효 다툼 가능성 높습니다.</strong> 동·번지·호수까지 특정되어야 유효성 인정 사례 다수. 다만 다른 자료로 거주지 특정 가능하면 유효 인정 사례도 있어 사례별 다툼.',
      },
      {
        question: '공정증서 유언 후 자필로 새 유언을 썼는데 자필이 무효면 어떻게 되나요?',
        answer:
          '<strong>공정증서가 효력 회복합니다(민법 제1109조 반대해석).</strong> 후순위 유언이 형식 흠결로 무효면 철회 효과 없음 → 종전 공정증서 부활. 등기·예금 인출도 공정증서 기준.',
      },
      {
        question: '아버지가 치매 진단 후 자필유언을 썼어요. 효력 다툴 수 있나요?',
        answer:
          '<strong>유언능력 부존재로 무효 다툼 가능합니다.</strong> 치매 진단 시점·진행도·MMSE 점수가 핵심. 진료기록 + 의사 의견서로 유언 당시 의사능력이 없었다고 입증.',
      },
      {
        question: '검인기일에 다른 상속인이 유언장을 안 보여줘요. 어떻게 강제하나요?',
        answer:
          '<strong>가정법원에 유언서 제출 명령 신청 가능합니다.</strong> 검인절차에서 유언자 보관자가 제출 의무. 거부 시 과태료. 은닉이 의심되면 형사 고소(상속에 관한 사문서 부정행사) 별도 검토.',
      },
      {
        question: '자필유언이 5요건 다 갖췄지만 \'재산을 큰아들에게 다 준다\'고 적혀 있어요. 무효 사유 있나요?',
        answer:
          '<strong>유류분 침해 부분에서 부분 무효 가능합니다.</strong> 형식 유효해도 다른 자녀의 유류분(법정상속분 1/2)을 침해하면 그 범위 내에서 유류분반환청구 가능. 시효 1년·10년 주의.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '자필유언 5요건 점검', href: '/guide/inheritance/inheritance-handwritten-will-five-requirements' },
      { label: '공정증서 유언 작성 절차', href: '/guide/inheritance/inheritance-notarized-will-procedure' },
      { label: '유언 검인절차 단계', href: '/guide/inheritance/inheritance-will-probate-procedure' },
      { label: '유언무효확인의 소', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '유류분 부족분 청구 절차', href: '/guide/inheritance/inheritance-yuryubun-shortage-claim-procedure' },
    ],
  },

  // ─── 3. inheritance / tax-after-6months-redivision-claim ───
  {
    domain: 'inheritance',
    slug: 'inheritance-tax-after-6months-redivision-claim',
    keyword: '상속세 신고 후 분쟁 경정청구',
    questionKeyword: '상속세 신고 후 1년 지나서 형제와 분쟁이 생겨 재분할했어요. 이미 낸 세금을 돌려받을 수 있나요?',
    ctaKeyword: '상속세 경정청구 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '상속세 신고 후 분쟁 시 경정청구 5단계 | 로앤가이드',
      description:
        '상속세 신고 6개월 후 재분할·평가 변동·후발적 사유로 세액이 달라졌을 때 경정청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"상속세 신고기한(사망 후 6개월) 안에 형제들과 합의해 분할협의서대로 신고·납부했어요. 그런데 1년 뒤 누나가 \'협의가 강압이었다\'며 분할무효 소송을 걸어 결국 재분할이 됐고, 제 몫이 줄었습니다. 이미 낸 상속세는 어떻게 되나요?" 국세기본법 제45조의2 경정청구는 신고세액이 과다한 경우 <strong>법정신고기한 후 5년 내(통상)</strong> 또는 <strong>후발적 사유 발생을 안 날부터 3개월 내(후발적 경정청구)</strong> 가능한 권리예요. 상속재산 재분할·평가 변동·소송 결과는 후발적 사유로 인정되는 영역이라, 정확한 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 사유가 후발적 경정청구 대상인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 국세기본법 제45조의2 제2항이 5가지 사유를 정합니다.</strong></p>\n<ul>\n<li><strong>1호 — 거래 또는 행위가 판결 등에 의해 다른 것으로 확정된 경우</strong> — 분할무효 판결, 유증 무효 판결, 매매 취소 등. 상속분쟁에서 가장 자주 활용.</li>\n<li><strong>2호 — 상호합의 절차에 따른 결과</strong> — 조세조약 등에 따른 합의.</li>\n<li><strong>3호 — 후발적 사유로 채권의 회수 불능</strong> — 채권자가 도산해 미수금 회수 불가능 확정.</li>\n<li><strong>4호 — 결정·경정 처분</strong> — 다른 세목 또는 다른 납세자 결정으로 본인 세액에 영향.</li>\n<li><strong>5호 — 그 밖에 대통령령이 정하는 사유</strong> — 시행령 제25조의2: 상속재산 후발 발견, 상속인 변경(인지·실종선고 취소), 상속재산분할 변경 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속재산분할 협의 변경·재분할·유언 무효 확정·인지 청구 인용은 모두 후발적 사유에 해당해 신고기한 도과 후에도 경정청구가 가능한 영역입니다.</blockquote>',
      },
      {
        title: 'Q. 경정청구 5단계는 어떻게 진행되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 국세청 공식 절차에 따르면 아래 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후발적 사유 확정 (판결·합의 등)</strong> — 분할무효 판결, 재분할 협의서, 유언무효 확정판결, 인지청구 인용판결. 확정일 기록.</li>\n<li><strong>2단계 — 청구기한 점검 (사유 안 날부터 3개월)</strong> — 후발적 경정청구는 사유 발생을 안 날부터 3개월. 일반 경정청구는 신고기한 후 5년. 둘 중 유리한 트랙 선택.</li>\n<li><strong>3단계 — 경정청구서 작성 + 첨부서류 제출</strong> — 관할 세무서 또는 홈택스 전자제출. 판결문 사본·재분할협의서·재산평가서 첨부.</li>\n<li><strong>4단계 — 세무서 검토 (2~6개월)</strong> — 후발적 사유 인정 + 세액 재계산. 상속세는 누진세율이라 분할 변경에 따라 상속인별 세액 재배분.</li>\n<li><strong>5단계 — 환급 또는 경정 거부 시 불복</strong> — 인용 시 환급세액 입금. 거부 시 90일 내 조세심판원 또는 행정소송 제기.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">경정청구 사유·기한·환급세액 산정이 사안마다 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">상속세 경정청구에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>경정청구서(국세기본법 제45조의2)</strong> — 홈택스 전자제출 또는 관할 세무서. 신고세액·경정후 세액·차액 명시.</li>\n<li><strong>당초 상속세 신고서·납부영수증</strong> — 경정 대상 신고 특정. 홈택스 이력 출력.</li>\n<li><strong>후발적 사유 확정 자료</strong> — 분할무효 확정판결, 재분할 협의서(전원 인감), 유언무효 판결, 인지청구 판결.</li>\n<li><strong>재계산 명세서</strong> — 상속재산·유산총액·상속인별 안분비율·세액 재산정. 세무사 검토 권장.</li>\n<li><strong>가족관계증명서·제적등본</strong> — 상속인 확정.</li>\n<li><strong>부동산 등기부·금융자료</strong> — 평가 변동 입증 자료.</li>\n<li><strong>인감증명서·위임장</strong> — 세무사 위임 시 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "재분할 협의만 하면 자동으로 환급된다"고 오해. 별도 경정청구를 해야 환급되며 3개월 기한 도과하면 권리 소멸.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 상속세 경정청구 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>3개월 기한 도과</strong> — 후발적 사유 안 날부터 3개월. 판결 확정일·송달일 기준이라 즉시 카운팅. 일반 5년 기한과 혼동 주의.</li>\n<li><strong>재분할이 \'합의해제\'가 아닌 단순 양도로 평가</strong> — 형식상 재분할 협의여도 실질이 양도면 양도소득세·증여세 추가 부과 위험. 판결·강제조정 형식이 안전.</li>\n<li><strong>다른 상속인의 추가 납부 발생</strong> — 본인 환급은 다른 상속인 추가 납부와 연동. 상속인별 안분 변경 시 형평 다툼.</li>\n<li><strong>거부처분 후 불복기간 도과</strong> — 경정 거부처분 받고 90일 내 조세심판원·행정소송 제기 안 하면 확정. 거부 통지 즉시 불복 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 국세청 126 / 관할 세무서 재산세과 / 대한법률구조공단 132 / 한국세무사회 / 조세심판원(불복 단계).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산 재분할과 상속세 안분 정산',
        summary:
          '대법원 2022다220014(대법원, 2025.05.29 선고) 사건에서 법원은 상속인이 다른 상속인을 상대로 상속세 등 대납에 따른 구상금을 청구한 사안을 다루며, 상속분에 따른 부담·이익은 상속인 사이에서 형평에 맞게 정리되어야 한다고 판시했습니다. 재분할로 본인 상속분이 줄었다면 이미 납부한 상속세도 새 안분비율에 따라 다시 정산받을 수 있는 구조라, 후발적 경정청구 + 다른 상속인 간 정산을 함께 진행하면 도움이 됩니다.',
        takeaway: '상속분 변경 시 이미 납부한 상속세도 새 안분비율로 정산되니, 경정청구로 환급받고 다른 상속인과의 구상·정산도 함께 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '상속세 신고 후 1년 만에 부동산 가치가 폭락했어요. 경정청구 가능한가요?',
        answer:
          '<strong>단순 시세 변동은 후발적 사유에 해당하지 않습니다.</strong> 신고 당시 평가는 상속개시일 기준이라, 사후 변동은 경정 사유 아님. 다만 신고 당시 평가가 잘못된 것이면 일반 경정청구(5년) 검토.',
      },
      {
        question: '재분할 협의를 했는데 세무서가 \'양도\'로 봐서 양도세를 부과한다고 해요. 정상인가요?',
        answer:
          '<strong>실질 판단 영역입니다.</strong> 단순 합의해제 형식이면 비과세 가능하나, 일부 상속인이 다른 상속인에게 대가를 받고 지분 양도 형태면 양도세 부과 사례. 강제조정·확정판결 형식이 분쟁 줄임.',
      },
      {
        question: '상속세 신고 안 하고 6개월 지났어요. 가산세는 얼마나 붙나요?',
        answer:
          '<strong>무신고가산세 20%(부정행위 시 40%) + 납부지연가산세(연 약 8%대)가 부과됩니다.</strong> 기한 후 신고 시 무신고가산세 50% 감면(1개월 내) 등 감면 트랙 활용 가능.',
      },
      {
        question: '인지청구 판결로 새 상속인이 추가됐어요. 기존 상속세는 어떻게 되나요?',
        answer:
          '<strong>국세기본법 시행령 제25조의2 후발적 사유로 경정청구 가능합니다.</strong> 인지 확정 후 3개월 내 청구. 새 상속인이 가액지급청구로 본인 몫을 받고, 세액은 안분비율 변경으로 정산.',
      },
      {
        question: '상속세 경정 거부됐는데 어떻게 다투나요?',
        answer:
          '<strong>거부처분 후 90일 내 조세심판원 심판청구 또는 행정소송 제기 가능합니다.</strong> 심판청구가 비용 부담 적고 빠름(통상 3~6개월). 심판 결과에 다시 불복하면 행정소송.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고 6개월 기한', href: '/guide/inheritance/inheritance-tax-six-month-deadline' },
      { label: '상속재산 재분할 절차', href: '/guide/inheritance/inheritance-redivision-procedure' },
      { label: '상속세 경정청구 5년 기한', href: '/guide/inheritance/inheritance-tax-correction-claim-five-years' },
      { label: '상속재산 평가 다툼', href: '/guide/inheritance/inheritance-property-valuation-dispute' },
      { label: '상속세 무신고가산세 감면', href: '/guide/inheritance/inheritance-tax-non-filing-penalty-reduction' },
    ],
  },
];
