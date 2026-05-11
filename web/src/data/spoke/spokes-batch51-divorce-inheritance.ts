import { SpokePage } from '../spoke-pages';

// batch51 divorce 4 + inheritance 3 = 7개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 배우자가 재산공개를 거부하거나 은닉이 의심되는 이혼 당사자가 가정법원 재산명시·재산조회·금융정보 사실조회 절차를 정리해 분할대상 재산을 확보하도록 돕는 페이지다.
// 2. 이 페이지는 가정폭력 피해 배우자가 가폭법 임시조치·접근금지·이혼 사유 정리를 한꺼번에 검토해 안전 확보와 이혼 절차를 동시에 진행하도록 돕는 페이지다.
// 3. 이 페이지는 혼인 중 배우자 일방이 만든 부채와 공동채무를 어떻게 분리·청산할지 헷갈리는 이혼 당사자가 일상가사·공동재산 형성 채무 기준을 정리해 재산분할 협상에 대비하도록 돕는 페이지다.
// 4. 이 페이지는 별거 중인 부부 또는 사실혼·재혼 당사자가 국민연금 분할연금에서 별거 기간이 혼인기간 5년에 포함되는지 헷갈릴 때 산정 기준을 정리해 분할연금 신청을 누락하지 않도록 돕는 페이지다.
// 5. 이 페이지는 자녀 없는 백숙부·이모·고모가 사망했을 때 상속인 후보가 민법 제1000조 상속순위(직계존속·형제자매·4촌 이내 방계혈족) 흐름을 정리해 자기 순위와 상속포기 영향을 검토하도록 돕는 페이지다.
// 6. 이 페이지는 부동산을 공동상속받은 형제자매가 분할 협의가 안 되어 다투고 있을 때 공유물분할청구·경매·현물분할 절차를 정리해 분쟁을 정리하도록 돕는 페이지다.
// 7. 이 페이지는 상조회·공제회·부의금을 받은 유족이 이 금원이 상속재산인지 별도 권리인지 헷갈릴 때 부의금 법적 성질과 청구 절차를 정리해 분배·신고에 대비하도록 돕는 페이지다.

export const spokesBatch51DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce / husband-rejected-property-disclose ───
  {
    domain: 'divorce',
    slug: 'divorce-husband-rejected-property-disclose',
    keyword: '이혼 재산명시 재산조회 신청',
    questionKeyword: '배우자가 재산을 공개하지 않고 숨기려 할 때 어떻게 확인하나요?',
    ctaKeyword: '재산명시·금융조회 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '이혼 재산명시·재산조회 신청 4단계 절차 정리 | 로앤가이드',
      description:
        '배우자가 재산을 공개하지 않거나 은닉하려는 이혼에서 가사소송법 재산명시·금융조회·사실조회 절차를 어떻게 진행해야 할지 막막하실 거예요. 지금 확인하세요.',
    },
    intro:
      '<p>이혼을 결심했는데 "배우자가 통장·부동산·주식을 공개하지 않으려 한다", "월급은 어디로 들어가는지조차 모른다"는 상황은 흔합니다. 가사소송법 제48조의2(재산명시)·제48조의3(재산조회)은 이런 상황을 위해 가정법원이 직권 또는 신청에 따라 상대방 재산을 강제로 확인할 수 있게 설계돼 있습니다. 어떤 단계로 활용하면 좋은지 정리해보겠습니다.</p>',
    sections: [
      {
        title: '재산명시·재산조회·사실조회 — 3가지 도구의 차이',
        content:
          '<p><strong style="color:#1e3a5f">상대방 비협조에 대응하는 가정법원 절차는 단계별로 효력과 범위가 다릅니다.</strong></p>\n<ul>\n<li><strong>재산명시 (가사소송법 제48조의2)</strong> — 가정법원이 당사자에게 자기 재산목록을 선서·제출하도록 명령. 거짓 명시 시 1년 이하 징역 또는 1천만 원 이하 과태료 가능성.</li>\n<li><strong>재산조회 (가사소송법 제48조의3)</strong> — 재산명시 절차로도 부족할 때 법원이 공공기관·금융기관·세무서·등기소 등에 직접 조회. 거의 모든 금융자산·부동산이 망라될 수 있습니다.</li>\n<li><strong>금융정보 사실조회</strong> — 변론 단계에서 특정 은행·증권사·보험사에 거래내역을 요청. 차명계좌·해외송금 의심 시 우선 활용 가능.</li>\n<li><strong>국세청·과세자료 조회</strong> — 종합소득세 신고내역·근로소득원천징수영수증 등을 통해 미공개 소득 추적.</li>\n<li><strong>신용정보원 조회</strong> — 대출·카드·보증 등 부채 정보 확인. 분할대상 채무 산정에 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산명시 → 재산조회 순서로 활용하는 것이 일반적입니다. 명시 단계에서 거짓 신고가 발견되면 가정법원이 신뢰하기 어려운 상대로 판단해 재산조회 인용 가능성이 높아집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재산공개 강제 4단계',
        content:
          '<p><strong style="color:#1e3a5f">이혼·재산분할 청구 → 재산명시 신청 → 재산조회·사실조회 → 추가 분할대상 주장 흐름으로 정리됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이혼·재산분할 본안 신청 (소 제기 단계)</strong> — 가정법원에 이혼 + 재산분할 청구. 청구취지에 "재산명시 신청 예정" 기재해두면 절차 진행이 매끄럽습니다.</li>\n<li><strong>2단계 — 재산명시 신청 (변론 초기)</strong> — 상대방에게 재산목록 선서·제출 명령 신청. 통상 1~2개월 내 재산명시기일 지정. 거짓 명시 시 형사·과태료 제재 가능.</li>\n<li><strong>3단계 — 재산조회·사실조회 (필요 시 1~3개월)</strong> — 재산명시로 부족하거나 누락이 의심되면 법원이 직접 금융기관·등기소·세무서에 조회. 대법원 가족관계 등록부·등기부도 동시 검토.</li>\n<li><strong>4단계 — 추가 분할대상 주장 (변론 종결 전)</strong> — 조회 결과 새로 드러난 재산을 분할대상으로 주장. 대법원 2021스766 판례에 따라 상대방 지위에서의 분할대상 주장은 2년 제척기간 적용 X.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">재산명시·금융조회 신청 시기와 입증자료, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">은닉 의심 정황을 사전에 자료로 정리해야 신청 인용 가능성이 올라갑니다.</strong></p>\n<ul>\n<li><strong>이혼·재산분할 본안 자료</strong> — 가족관계증명서·혼인관계증명서·주민등록등본 / 이혼사유 입증자료(녹취·문자·진단서)</li>\n<li><strong>은닉 정황 자료</strong> — 통장 거래내역·카드 사용내역·차량 등록·등기부등본 / 평소 소득 대비 자산 부족 점·갑작스러운 인출·차명 의심 거래</li>\n<li><strong>재산명시 신청 자료</strong> — 재산명시신청서·은닉 가능 자산 리스트·상대방 직장/사업장 정보·세무 신고내역 추정</li>\n<li><strong>금융기관 사실조회 자료</strong> — 거래 의심 은행·증권사·보험사 명칭 + 계좌번호 일부·예상 보유 시점·송금 추적용 상대방 계좌정보</li>\n<li><strong>추가 입증 자료</strong> — 신용정보원 조회 신청·국세청 사실조회·해외 송금 의심 시 외환신고 자료</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산명시 명령에 대한 거짓 신고나 미제출은 1년 이하 징역·1천만 원 이하 과태료 사유가 될 수 있어 명시 단계에서부터 신중하게 진행하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 재산공개 거부에 자주 막히는 지점',
        content:
          '<p><strong style="color:#1e3a5f">은닉 추적은 시기·범위·방법에 따라 결과가 크게 달라집니다.</strong></p>\n<ul>\n<li><strong>시기 — 별거 후 인출 의심</strong> — 별거 시점부터 이혼소송 제기까지의 거래내역이 핵심. 이 기간 대형 인출·차명 송금이 발견되면 분할대상 추정에 유리합니다.</li>\n<li><strong>범위 — 명목상 제3자 명의</strong> — 형제·부모·자녀 명의 자산이 실질 배우자 자산일 수 있어 명의신탁 입증을 별도 검토. 사해행위취소도 함께 고려.</li>\n<li><strong>방법 — 위법 수집 증거 주의</strong> — 배우자 휴대폰 해킹·사문서 위조로 얻은 자료는 증거능력이 배척될 수 있어 신중. 합법 자료 위주로 정리.</li>\n<li><strong>기한 — 재산분할 2년 제척기간</strong> — 이혼 확정일로부터 2년 내 청구. 다만 이미 제기된 사건의 상대방 지위에서 분할대상을 주장하는 경우는 제척기간 적용 X(대법원 2021스766).</li>\n<li><strong>변호사 상담 검토</strong> — 재산명시·조회는 신청 시기·범위 설계가 결정적이라 사선 변호사 조력이 도움이 됩니다. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "어차피 안 알려준다"고 포기하면 분할에서 큰 손해가 날 수 있습니다. 재산명시·조회는 가정법원 직권탐지주의가 적용되는 영역이라, 자료가 부족해도 충분히 활용해볼 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 사건 상대방 지위에서의 분할대상 주장과 제척기간',
        summary:
          '대법원 2021스766 사건(대법원, 2022.11.10 선고)에서 법원은 재산분할청구 후 2년 제척기간이 지나면 새 분할 청구는 어렵지만, 이미 제기된 재산분할심판에서 상대방 지위로 분할대상을 주장하는 것은 청구가 아니라 방어방법에 해당해 제척기간이 적용되지 않으며, 가사소송법 제48조의2(재산명시)·제48조의3(재산조회) 제도 취지상 직권탐지주의가 작동한다고 판시했습니다.',
        takeaway: '재산명시·재산조회는 직권탐지의 핵심 도구이며, 상대방 지위에서의 추가 분할대상 주장은 2년 제척기간이 적용되지 않을 수 있어 활용 폭이 넓습니다.',
      },
    ],
    faq: [
      {
        question: '재산명시 신청을 하면 비용이 얼마나 드나요?',
        answer:
          '<strong>인지대·송달료 외에는 별도 비용이 크지 않습니다.</strong> 재산조회로 확장될 경우 조회 대상 기관별 수수료가 추가될 수 있고, 변호사를 선임하면 수임료가 별도지만 효과가 큰 경우가 많습니다.',
      },
      {
        question: '재산명시에서 거짓 신고하면 어떻게 되나요?',
        answer:
          '<strong>가사소송법 제48조의2 위반으로 1년 이하 징역 또는 1천만 원 이하 과태료가 부과될 수 있습니다.</strong> 형사 처벌과 별개로 가정법원 신뢰도가 크게 떨어져 이후 재산분할 비율 산정에서 불리하게 참작될 수 있습니다.',
      },
      {
        question: '배우자가 부모·형제 명의로 옮긴 자산도 추적할 수 있나요?',
        answer:
          '<strong>명의신탁·사해행위취소 청구로 분할대상에 포함시킬 수 있는 사례가 많습니다.</strong> 자금 출처·관리 주체를 입증해야 하며, 별거 직전·이혼 결심 후의 명의이전은 사해행위로 다툴 가능성이 큽니다.',
      },
      {
        question: '해외 자산도 재산조회로 확인되나요?',
        answer:
          '<strong>국내 금융기관·등기소 조회는 가능하지만 해외 자산은 조회권이 미치지 않을 소지가 있습니다.</strong> 외환신고 내역·국세청 해외금융계좌 신고서 사실조회로 간접 추적이 필요합니다.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)도 이혼·재산분할 상담이 가능하고, 사선 변호사 조력은 비용이 들지만 재산명시·조회 설계에서 효과가 큽니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '혼전 재산계약 효력 분쟁', href: '/guide/divorce/divorce-prenup-property-validity' },
      { label: '국제이혼 관할·송달 절차', href: '/guide/divorce/divorce-international-jurisdiction-spouse' },
      { label: '특유재산 재산분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 2. divorce / violent-spouse-emergency-divorce ───
  {
    domain: 'divorce',
    slug: 'divorce-violent-spouse-emergency-divorce',
    keyword: '가정폭력 즉시 이혼 임시조치',
    questionKeyword: '배우자 폭력에서 즉시 이혼·접근금지 조치를 받으려면 어떻게 하나요?',
    ctaKeyword: '가폭법 임시조치·이혼 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '가정폭력 이혼 임시조치·접근금지 4단계 절차 | 로앤가이드',
      description:
        '배우자 폭력에서 안전을 확보하면서 이혼을 진행해야 할지 막막하실 거예요. 가폭법 제8조 임시조치·접근금지·재판상 이혼 절차를 지금 확인하세요.',
    },
    intro:
      '<p>가정폭력 피해를 겪으면 "이혼하고 싶지만 보복이 두렵다", "어디부터 시작해야 할지 모르겠다"는 막막함이 큽니다. 가정폭력처벌법은 형사 처벌과 별개로 임시조치·접근금지·피해자보호명령 같은 안전 장치를 두고 있고, 동시에 민법 제840조 제3호·제6호로 재판상 이혼이 가능합니다. 안전 확보와 이혼 절차를 동시에 진행하는 흐름을 정리해보겠습니다.</p>',
    sections: [
      {
        title: '가폭법 안전조치 4가지 — 임시조치·접근금지·보호명령·격리',
        content:
          '<p><strong style="color:#1e3a5f">형사 절차와 별개로 신속하게 안전을 확보할 수 있는 가정폭력처벌법 도구가 있습니다.</strong></p>\n<ul>\n<li><strong>응급조치 (가폭법 제5조)</strong> — 경찰관이 신고 현장에서 즉시 가해자 격리·피해자 인도. 사건 발생 시 가장 먼저 활용.</li>\n<li><strong>긴급임시조치 (가폭법 제8조의2)</strong> — 사법경찰관이 검사 청구 전 직권으로 주거 격리·접근금지 가능. 48시간 내 검사 청구 → 법원 결정.</li>\n<li><strong>임시조치 (가폭법 제29조)</strong> — 검사·법원 단계 임시조치. 격리·100m 접근금지·전기통신 접근금지·의료기관 위탁 등. 위반 시 형사 처벌.</li>\n<li><strong>피해자보호명령 (가폭법 제55조의2)</strong> — 피해자가 법원에 직접 신청 가능. 형사 절차와 무관하게 독립적으로 신청.</li>\n<li><strong>보호시설 입소</strong> — 여성긴급전화 1366·여성가족부 가정폭력보호시설로 즉시 격리 가능. 위치 비공개 보장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 안전이 최우선입니다. 폭력 직후라면 112 신고 → 응급조치·긴급임시조치를 받은 뒤, 이혼 절차는 안정 후 시작하는 흐름이 무리가 없습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 안전 확보 + 이혼 4단계',
        content:
          '<p><strong style="color:#1e3a5f">112 신고·임시조치 → 보호명령 → 이혼 청구 → 위자료·재산분할 흐름으로 정리됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 신고·응급조치 (사건 직후)</strong> — 112 신고 → 경찰 응급조치(격리·주거지 인도). 진단서·사진·녹취 즉시 확보. 여성긴급전화 1366 동시 활용.</li>\n<li><strong>2단계 — 임시조치·피해자보호명령 신청 (1주~1개월)</strong> — 경찰·검사·법원 단계 임시조치 또는 가정법원에 피해자보호명령 직접 신청. 100m 접근금지·전화 차단 가능.</li>\n<li><strong>3단계 — 재판상 이혼 청구 (조정전치 2~4개월)</strong> — 민법 제840조 제3호 "심히 부당한 대우" + 제6호 "혼인을 계속하기 어려운 중대한 사유"로 이혼 청구. 폭력은 이혼숙려기간 단축·면제 사유.</li>\n<li><strong>4단계 — 위자료·재산분할·친권 (본안 6개월~1년)</strong> — 가해 배우자에게 위자료 + 재산분할 + 친권·양육권 청구. 폭력 입증 자료가 위자료 산정에 결정적.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가폭법 임시조치·이혼 청구 시기, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">가정폭력 이혼은 "폭력 입증 자료"가 위자료·친권 결정의 핵심입니다.</strong></p>\n<ul>\n<li><strong>피해 입증 자료</strong> — 진단서(가능하면 응급실 진료기록)·사진(상해 부위·일시 표시)·녹취(폭언·위협 내용)·문자/메신저 캡처</li>\n<li><strong>경찰·검찰 자료</strong> — 112 신고이력서·사건사고사실확인원·응급조치보고서·임시조치 결정문·기소(불기소) 처분서</li>\n<li><strong>의료·상담 기록</strong> — 정신건강의학과 진료기록·상담일지·치료비 영수증·외상후스트레스 진단서</li>\n<li><strong>이혼·재산분할 자료</strong> — 가족관계증명서·혼인관계증명서·주민등록등본·재산 현황 자료(부동산·예금·주식)</li>\n<li><strong>친권·양육 자료</strong> — 자녀 양육 현황 자료·자녀 진술서(가능 시 전문가 동행)·학교 생활기록·면접교섭 협의서</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서·신고이력은 "사건마다 그때그때 확보"하는 것이 결정적입니다. 시간이 흐른 뒤에는 입증이 어렵고, 단발성 폭력이라도 횟수가 누적되면 이혼사유 인정 폭이 넓어집니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 가정폭력 이혼에서 자주 막히는 지점',
        content:
          '<p><strong style="color:#1e3a5f">안전·증거·신뢰 3가지 축에서 절차가 막히는 일이 잦습니다.</strong></p>\n<ul>\n<li><strong>이혼숙려기간 단축</strong> — 협의이혼은 통상 양육 자녀 있으면 3개월·없으면 1개월. 폭력 등 급박 사정 시 단축·면제 가능하니 신청서에 폭력 입증자료 첨부.</li>\n<li><strong>합의 회유 주의</strong> — 가해자가 "용서해달라" 회유 후 다시 폭력하는 사이클이 흔함. 합의 전에 임시조치·보호명령으로 안전 확보 후 결정 권장.</li>\n<li><strong>친권·양육권</strong> — 폭력 가해 배우자에게 친권을 주지 않는 결정 사례가 많습니다. 면접교섭권도 안전 확보 조건부로 제한될 수 있음.</li>\n<li><strong>위자료 인정 폭</strong> — 폭력 강도·횟수·자녀에 미친 영향에 따라 위자료가 사례에 따라 다양하게 책정되는 경향. 진단서·신고이력이 결정적.</li>\n<li><strong>변호사 상담 검토</strong> — 가정폭력 이혼은 안전 확보·증거 정리·사건 진행이 동시에 필요해 사선 변호사 조력이 도움이 됩니다. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 가해자가 "이혼하면 죽이겠다" 등 협박할 경우 즉시 112 신고 + 보호명령 신청. 신고 자체가 임시조치 발동 사유가 되어 안전 확보에 도움이 됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 배우자 폭력과 재판상 이혼사유',
        summary:
          '대법원 2020므14763 사건(대법원, 2021.03.25 선고)에서 법원은 베트남 국적 배우자 甲이 한국 배우자 乙의 반복적 폭력으로 혼인이 파탄되었다고 주장한 사안에서, 乙의 행위는 민법 제840조 제3호(심히 부당한 대우) 및 제6호(혼인을 계속하기 어려운 중대한 사유)에 해당하며 "혼인계속의사 유무·파탄 책임의 경중·혼인기간·자녀의 유무·당사자의 연령·이혼 후 생활보장" 등을 종합 고려해 이혼 청구를 인용해야 한다고 판시했습니다.',
        takeaway: '반복적 폭력은 단발이라도 누적 시 민법 제840조 제3호·제6호 이혼사유로 인정될 가능성이 높고, 폭력 행사 책임은 위자료·친권 산정에 결정적으로 반영됩니다.',
      },
    ],
    faq: [
      {
        question: '경찰 신고 없이 이혼만 진행할 수 있나요?',
        answer:
          '<strong>가능하지만 폭력 입증이 어려워질 수 있습니다.</strong> 신고 이력이 없어도 진단서·녹취·문자가 있으면 이혼은 가능하지만, 위자료·친권 결정에서 입증력이 약해질 수 있어 가능하면 신고를 권장합니다.',
      },
      {
        question: '임시조치는 얼마 동안 효력이 있나요?',
        answer:
          '<strong>가폭법 제29조 임시조치는 통상 2개월 이내이며 2회 연장 가능(최대 6개월)입니다.</strong> 피해자보호명령(제55조의2)은 6개월 이내, 2회 연장 가능. 이혼 본안과 별개로 안전 기간을 확보할 수 있습니다.',
      },
      {
        question: '가해 배우자가 임시조치를 위반하면 어떻게 되나요?',
        answer:
          '<strong>임시조치 위반은 가폭법 제63조에 따라 2년 이하 징역 또는 2천만 원 이하 벌금 사유입니다.</strong> 위반 즉시 112 신고하면 가중 처벌 대상이 되고, 본안에서도 위자료 산정에 불리하게 작용합니다.',
      },
      {
        question: '자녀 양육권은 어떻게 결정되나요?',
        answer:
          '<strong>가정폭력 가해자에게는 친권·양육권을 주지 않는 결정 사례가 많습니다.</strong> 다만 면접교섭권은 안전 확보 조건부(제3자 동석·공공장소·시간 제한)로 인정될 수 있어 자녀의 의사·복리를 함께 검토합니다.',
      },
      {
        question: '가정폭력 무료 상담·보호시설은 어디서 확인하나요?',
        answer:
          '<strong>여성긴급전화 1366(24시간), 가정폭력상담소·여성가족부 가정폭력보호시설은 위치 비공개로 운영됩니다.</strong> 대한법률구조공단(132)도 무료 법률상담이 가능하고, 한국가정법률상담소(1644-7077)에서도 이혼 절차 상담이 가능합니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재산명시·금융조회 신청 절차', href: '/guide/divorce/divorce-husband-rejected-property-disclose' },
      { label: '외도 부인 배우자 증거 보강', href: '/guide/divorce/divorce-affair-denial-evidence-strengthening' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
    ],
  },

  // ─── 3. divorce / debt-disposal-during-marriage ───
  {
    domain: 'divorce',
    slug: 'divorce-debt-disposal-during-marriage',
    keyword: '이혼 부채 분할 공동채무',
    questionKeyword: '혼인 중 배우자가 만든 빚도 이혼할 때 같이 책임져야 하나요?',
    ctaKeyword: '이혼 부채·공동채무 분할 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '이혼 부채 분할 공동채무·개인채무 4가지 기준 | 로앤가이드',
      description:
        '혼인 중 배우자 일방이 만든 빚이 이혼할 때 분할대상이 되는지 막막하실 거예요. 일상가사·공동재산 형성 채무 기준을 지금 확인하세요.',
    },
    intro:
      '<p>이혼을 결심했는데 "배우자가 만든 카드빚·대출도 내가 같이 갚아야 하나?" 막막한 분이 많습니다. 답은 "채무의 성격에 따라 다르다"입니다. 일상가사로 인한 채무는 부부 연대책임이 인정될 수 있고, 공동재산 형성에 들어간 채무는 분할 시 청산대상으로 다뤄지는 반면, 일방의 사치·도박 채무는 개인채무로 분리됩니다. 어떤 기준으로 나뉘는지 정리해보겠습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자가 만든 빚은 무조건 같이 갚아야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아닙니다. 채무 성격에 따라 분할대상·분할제외로 나뉩니다.</strong></p>\n<ul>\n<li><strong>공동재산 형성 채무 (분할대상)</strong> — 주택구입대출·전세자금대출·자녀교육비 대출 등 공동재산 형성에 들어간 채무. 재산분할 시 청산대상이 될 가능성이 큽니다.</li>\n<li><strong>일상가사 채무 (연대책임)</strong> — 식비·의류·자녀양육비 등 일상가사 범위 내 신용카드·소액 대출은 민법 제832조 일상가사대리권에 따라 부부 연대책임 가능성.</li>\n<li><strong>개인채무 (분할제외)</strong> — 사치·도박·외도 관련 지출·일방의 사업 손실 등은 개인채무로 분리되어 분할대상에서 제외될 가능성이 큽니다.</li>\n<li><strong>혼전 채무 (분할제외)</strong> — 결혼 전부터 있던 채무는 원칙적으로 개인채무. 다만 결혼 후 공동재산으로 변제했다면 분할 시 참작 가능.</li>\n<li><strong>입증 책임</strong> — 채무가 공동재산 형성용인지, 개인 사치용인지는 자료로 입증해야 합니다. 통장 거래·영수증·대출 사용처가 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "누가 만든 빚이냐"보다 "어디에 쓴 빚이냐"가 결정적입니다. 같은 카드빚이라도 식비·생활비면 공동, 도박·외도 비용이면 개인입니다.</blockquote>',
      },
      {
        title: 'Q. 공동채무는 어떻게 나누나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 분할대상 적극재산에서 분할대상 채무를 차감한 순재산을 기준으로 분할 비율을 적용합니다.</strong></p>\n<ol>\n<li><strong>① 적극재산 산정</strong> — 부동산·예금·주식·차량·보험 해약환급금 등 부부 명의 자산 합산.</li>\n<li><strong>② 소극재산(공동채무) 산정</strong> — 주택담보대출·전세자금대출·자녀교육비 대출 등 공동재산 형성용 채무 합산.</li>\n<li><strong>③ 순재산 산출</strong> — 적극재산 − 소극재산 = 순재산. 음수가 나오면 분할대상 X.</li>\n<li><strong>④ 분할 비율 적용</strong> — 기여도에 따라 통상 50:50 ~ 70:30 사이에서 결정. 가사노동·소득·자녀양육 등 종합 고려.</li>\n<li><strong>⑤ 채무 분담 방식</strong> — 한쪽이 대출을 떠안고 다른 쪽이 차액을 보상하는 방식이 일반적. 채권자에 대한 효력은 별도(대내적 분담 vs 대외적 책임).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동채무·개인채무 분리, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 배우자 도박빚도 같이 갚아야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 도박·사치·외도 비용 등 일방의 개인적 일탈 채무는 분할대상에서 제외될 가능성이 큽니다.</strong></p>\n<ul>\n<li><strong>도박 채무</strong> — 일상가사 범위 밖 일방의 일탈 행위. 원칙적 개인채무로 처리되어 분할제외 가능성이 큽니다.</li>\n<li><strong>사치 채무</strong> — 명품·외제차 등 일방의 과시적 소비. 일상가사 범위를 벗어나면 개인채무 가능성.</li>\n<li><strong>외도 관련 지출</strong> — 외도 상대방에게 송금한 금액·선물·여행 비용. 위자료 청구 사유이자 분할제외 채무.</li>\n<li><strong>일방 사업 손실</strong> — 일방이 단독 운영한 사업 손실. 다만 사업 자금이 공동재산에서 나왔다면 일부 공동성 인정 여지.</li>\n<li><strong>연대보증 채무</strong> — 일방이 친지·친구를 위해 단독 보증한 채무는 개인채무. 다만 가족 부양 목적이면 공동성 인정 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배우자의 도박·사치 채무가 의심되면 카드 명세·통장 거래·인터넷 도박 사이트 결제내역을 미리 정리해두세요. 사실조회로 확인할 수 있는 자료입니다.</blockquote>',
      },
      {
        title: 'Q. 채권자가 나에게 청구하면 어떻게 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 일상가사 범위 내라면 연대책임 가능성이 있고, 그 외에는 부부재산제·연대보증 여부에 따라 결정됩니다.</strong></p>\n<ul>\n<li><strong>일상가사 연대책임 (민법 제832조)</strong> — 식비·의류·자녀양육비 등 일상가사 범위 채무는 부부 연대책임. 채권자가 어느 쪽에든 청구 가능.</li>\n<li><strong>일상가사 범위 외 채무</strong> — 일방이 단독으로 만든 사업 대출·도박빚은 다른 배우자에게 청구 X(연대보증 없는 한).</li>\n<li><strong>연대보증한 경우</strong> — 본인이 직접 연대보증을 섰다면 채권자가 직접 청구 가능. 이혼해도 채무는 남음. 별도 면책 협의 필요.</li>\n<li><strong>이혼 후 채권자 청구</strong> — 이혼 시 부부 사이에 채무 분담을 정해도 채권자에 대한 대외 효력은 별도. 채권자는 원래 차주에게 청구.</li>\n<li><strong>채무 면책 방법</strong> — 채권자와 별도 협의로 면책 약정·차주 변경 등 정리해야 안전. 안 그러면 이혼 후에도 청구 위험 잔존.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 이혼 시 부부가 "이 빚은 네가 갚아"라고 합의해도 채권자에 대해서는 원래 명의인이 책임집니다. 연대보증을 섰다면 별도 면책 절차가 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 부부의 공동재산 형성 채무 청산',
        summary:
          '대법원 2020므15841 사건(대법원, 2021.05.27 선고)에서 법원은 사실혼 관계에 있는 부부 일방이 혼인 중 공동재산의 형성에 수반하여 채무를 부담하였다가 사실혼 종료 후 그 채무를 변제한 경우, 변제된 채무는 특별한 사정이 없는 한 청산 대상이 된다고 판시했습니다. 부부 일방이 제3자에게 부담한 채무는 일상가사에 관한 것 외에는 원칙적 개인채무지만, 공동재산 형성에 수반된 채무는 청산대상이라는 기준을 명확히 했습니다.',
        takeaway: '채무가 분할대상이 되려면 "공동재산 형성에 수반"되었음을 입증해야 하며, 일상가사 외 일방의 개인 채무는 청산에서 제외되는 것이 원칙입니다.',
      },
    ],
    faq: [
      {
        question: '결혼 전 배우자가 가진 빚도 같이 갚아야 하나요?',
        answer:
          '<strong>혼전 채무는 원칙적으로 개인채무입니다.</strong> 다만 결혼 후 공동재산(맞벌이 소득·생활비)으로 변제한 부분은 분할 시 일부 참작될 수 있어 자료를 정리해두는 것이 안전합니다.',
      },
      {
        question: '주택담보대출은 어떻게 처리되나요?',
        answer:
          '<strong>공동재산 형성용 대출이라 분할대상 채무로 산정되는 것이 일반적입니다.</strong> 주택을 한쪽이 가지면 그 사람이 대출을 떠안고 차액을 다른 쪽에 보상하는 방식이 자주 쓰입니다.',
      },
      {
        question: '배우자가 사업 실패로 진 빚은요?',
        answer:
          '<strong>사업 자금이 공동재산에서 나왔는지에 따라 갈립니다.</strong> 부부가 함께 운영한 사업이거나 자금이 공동에서 나왔다면 공동성이 인정될 수 있고, 일방이 단독 운영했다면 개인채무 처리 가능성이 큽니다.',
      },
      {
        question: '신용카드 명세서를 어떻게 입수하나요?',
        answer:
          '<strong>가정법원 사실조회 신청으로 카드사·은행에 거래내역 요청이 가능합니다.</strong> 본인 명의 카드는 직접 발급받을 수 있고, 배우자 명의는 사실조회로 추적해야 합니다.',
      },
      {
        question: '이혼 후 채권자가 나에게 청구하면 어떻게 막나요?',
        answer:
          '<strong>본인이 연대보증을 서지 않았다면 일상가사 범위 외 채무는 거절할 수 있습니다.</strong> 일상가사 채무라도 이혼 후 본인이 변제한 부분은 배우자에게 구상권 행사 가능. 무료 상담은 대한법률구조공단(132).',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산명시·금융조회 신청 절차', href: '/guide/divorce/divorce-husband-rejected-property-disclose' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '특유재산 재산분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '재산분할 비율 산정 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 4. divorce / separated-couple-pension-split ───
  {
    domain: 'divorce',
    slug: 'divorce-separated-couple-pension-split',
    keyword: '별거 분할연금 5년 혼인기간',
    questionKeyword: '별거한 기간도 분할연금 혼인기간 5년에 포함되나요?',
    ctaKeyword: '별거 분할연금 산정 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '별거 분할연금 혼인기간 5년 산정 4가지 기준 | 로앤가이드',
      description:
        '별거한 기간이 국민연금 분할연금 혼인기간 5년에 포함되는지 헷갈리실 거예요. 가출·실종·사실상 단절 기간 산정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>이혼하면서 "별거한 시간이 길었는데 분할연금 혼인기간 5년에 포함되나?", "사실상 부부 관계가 끊어진 기간도 인정될까?" 헷갈려 하시는 분이 많습니다. 국민연금법은 2018년 개정으로 일정 별거·가출 기간을 분할연금 혼인기간에서 제외할 수 있게 바꿨습니다. 어떤 기준으로 산정되는지 정리해보겠습니다.</p>',
    sections: [
      {
        title: 'Q. 별거 기간도 분할연금 혼인기간 5년에 포함되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙적으로 혼인신고 기간 전체가 인정되지만, 일부 별거·실종 기간은 제외될 수 있습니다.</strong></p>\n<ul>\n<li><strong>원칙 — 혼인신고 기간 전체</strong> — 국민연금법 제64조 분할연금은 혼인신고일~이혼일 사이 기간을 기준으로 산정. 별거 여부 무관.</li>\n<li><strong>예외 — 사실상 혼인관계 단절 기간 (2018년 개정)</strong> — 별거·가출·실종 등으로 사실상 부부공동생활을 하지 않은 기간은 당사자 합의 또는 법원 결정으로 혼인기간에서 제외 가능.</li>\n<li><strong>제외 가능 기간 입증</strong> — 주민등록 분리·다른 곳 거주 자료·이혼 시도 자료·재산 분리 자료 등으로 입증.</li>\n<li><strong>제외 결정 방식</strong> — 협의이혼 시 별거 기간 명시 합의 가능, 재판이혼 시 법원이 직권 또는 신청에 따라 결정.</li>\n<li><strong>5년 미충족 시 분할연금 X</strong> — 별거 기간 제외 후 혼인기간이 5년 미만이면 분할연금 청구권 자체 인정 X.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼인기간 5년 미만이면 분할연금 청구권이 발생하지 않습니다. 별거 기간이 길어도 혼인신고 기간 전체로 5년이 넘으면 일단 청구 가능성이 있습니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 별거가 제외 대상이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 일시적 별거가 아니라 "사실상 부부공동생활 단절"이 핵심입니다.</strong></p>\n<ol>\n<li><strong>① 제외 가능성 큰 사례 — 장기간 단절</strong> — 25년 이상 별거하며 일체 교류 단절(대법원 2014르2496 사례). 사실상 혼인 실체 소멸로 평가.</li>\n<li><strong>② 제외 가능성 — 가출·실종</strong> — 일방이 가출하거나 행방불명된 기간. 행정 신고·실종선고 자료로 입증 가능.</li>\n<li><strong>③ 제외 가능성 — 별거 합의서 작성</strong> — 별거 기간을 정하고 합의서를 작성한 경우. 협의이혼 단계에서 명시 합의 가능.</li>\n<li><strong>④ 제외 어려운 사례 — 단기 별거</strong> — 1~2년 단기 별거 후 재결합 의사가 있던 경우. 부부공동생활 의사가 유지된 것으로 판단될 가능성.</li>\n<li><strong>⑤ 제외 어려운 사례 — 직장·학업 별거</strong> — 주말부부·해외 근무·학업으로 인한 물리적 별거는 부부공동생활 유지로 평가될 가능성이 큼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">별거 기간 제외 산정과 분할연금 청구, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 분할연금 신청은 어떻게 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 요건(혼인 5년·이혼·60세·상대방 노령연금 수급)을 모두 충족하면 국민연금공단에 청구합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 혼인기간 산정</strong> — 혼인신고일~이혼일 기간 확인. 별거 기간 제외가 필요한 경우 협의서 또는 법원 결정으로 정리.</li>\n<li><strong>2단계 — 4가지 요건 확인</strong> — 혼인기간 5년 이상 + 이혼 + 60세 도달 + 상대방 노령연금 수급. 모두 충족돼야 청구 가능.</li>\n<li><strong>3단계 — 분할연금 청구 (60세 도달 후 5년 내)</strong> — 국민연금공단에 분할연금 청구. 5년 내 청구 안 하면 시효 소멸 가능성.</li>\n<li><strong>4단계 — 분할 비율 결정</strong> — 원칙은 혼인기간 중 본인 노령연금액의 50%. 협의이혼 시 다른 비율 합의 가능, 재판이혼 시 법원 결정.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 국민연금공단 콜센터(1355)에서 분할연금 모의계산이 가능합니다. 60세 도달 전이라도 미리 산정해보면 이혼 협의에 도움이 됩니다.</blockquote>',
      },
      {
        title: 'Q. 사실혼 별거도 분할연금이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 2017년 개정 이후 사실혼 관계도 일정 요건 충족 시 분할연금 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>사실혼 인정 요건</strong> — 혼인 의사 + 부부공동생활 실체 + 사회적 인정. 5년 이상 동거·자녀 출산·공동 경제 운영 등이 입증요소.</li>\n<li><strong>사실혼 종료 시점</strong> — 사실혼 해소일(별거 시작·관계 단절일) 기준으로 분할연금 혼인기간 산정.</li>\n<li><strong>입증 자료</strong> — 주민등록등본 동거 기록·자녀 가족관계증명서·예금 공동 사용 내역·결혼식 사진·지인 진술서 등.</li>\n<li><strong>법률혼과 충돌</strong> — 일방이 법률혼을 유지한 채 사실혼을 형성한 경우(중혼적 사실혼) 분할연금 산정에서 다툼 발생 가능.</li>\n<li><strong>변호사 상담 검토</strong> — 사실혼 분할연금은 입증 부담이 크니 사선 변호사 조력이 도움이 됩니다. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사실혼은 혼인신고가 없어 입증 자료가 더 중요합니다. 동거 시작 시점부터 자료를 정리해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 25년 별거 부부의 혼인 실체 소멸 평가',
        summary:
          '서울가정법원 2014르2496 사건(서울가법, 2015.10.23 선고)에서 법원은 약 25년간 별거하며 사실상 일체의 교류를 단절한 부부 사안에서, 25년 이상 장기간의 별거생활이 지속되면서 혼인의 실체가 완전히 해소되고 각자 독립적인 생활관계를 갖기에 이른 점, 부부공동생활 관계의 해소 상태가 장기화되면서 유책성도 세월에 따라 약화된 점 등을 종합해 민법 제840조 제6호 "혼인을 계속하기 어려운 중대한 사유"가 존재한다고 판시했습니다.',
        takeaway: '장기 별거는 혼인 실체 소멸을 평가받을 가능성이 있어 분할연금 산정에서 별거 기간 제외 논의의 근거가 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '협의이혼하면서 분할연금 비율을 미리 정할 수 있나요?',
        answer:
          '<strong>가능합니다. 2016년 개정 이후 협의이혼 단계에서 분할연금 비율 합의가 가능합니다.</strong> 합의서를 첨부해 국민연금공단에 분할연금 선청구도 가능하니 60세 이전이라도 정리해두는 것이 안전합니다.',
      },
      {
        question: '60세가 되기 전에 신청할 수 있나요?',
        answer:
          '<strong>분할연금 선청구 제도(2016년 도입)가 있습니다.</strong> 이혼 후 60세 도달 전이라도 분할연금 비율을 미리 신청해 결정받아 둘 수 있어 추후 분쟁 예방에 도움이 됩니다.',
      },
      {
        question: '60세 이후 5년이 지나면 어떻게 되나요?',
        answer:
          '<strong>분할연금 청구권은 5년 시효가 적용될 수 있어 늦지 않게 청구하는 것이 안전합니다.</strong> 60세 도달 후 5년 안에 청구해야 한다는 점, 분할연금이 발생한 사실을 안 날부터 기산되는 사례가 많다는 점 모두 점검 필요.',
      },
      {
        question: '재혼하면 분할연금이 끊어지나요?',
        answer:
          '<strong>재혼해도 분할연금은 유지됩니다.</strong> 분할연금은 이혼한 배우자의 고유 권리로, 재혼 여부와 무관하게 평생 지급되는 것이 원칙입니다. 다만 일부 사정에 따라 변경될 수 있어 공단 상담을 권장합니다.',
      },
      {
        question: '국민연금 분할연금 무료 상담은 어디서 받나요?',
        answer:
          '<strong>국민연금공단 콜센터(1355)에서 무료 상담과 모의계산이 가능합니다.</strong> 대한법률구조공단(132)에서도 분할연금·이혼 절차 무료 상담이 가능하고, 사선 변호사 조력은 사실혼·별거 다툼 시 효과가 큽니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '국민연금 분할연금 신청 절차', href: '/guide/divorce/divorce-pension-split-formula' },
      { label: '사실혼 파기 위자료 청구 절차', href: '/guide/divorce/divorce-de-facto-marriage-alimony-claim' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 5. inheritance / uncle-aunt-childless-priority ───
  {
    domain: 'inheritance',
    slug: 'inheritance-uncle-aunt-childless-priority',
    keyword: '백숙부 이모 무자녀 사망 상속 순위',
    questionKeyword: '자녀 없는 삼촌·이모가 돌아가시면 누가 상속받나요?',
    ctaKeyword: '상속순위·후순위 상속 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '무자녀 백숙부·이모 상속 순위 4가지 핵심 정리 | 로앤가이드',
      description:
        '자녀 없는 삼촌·이모가 돌아가셨을 때 상속인이 누구인지 헷갈리실 거예요. 민법 제1000조 상속순위와 후순위 승계 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"이모가 자녀 없이 돌아가셨는데, 우리가 상속받게 되나요?", "삼촌이 평생 미혼이셨는데 누가 상속인이죠?" 이런 질문은 의외로 자주 나옵니다. 민법 제1000조·제1003조는 직계비속 → 직계존속 → 형제자매 → 4촌 이내 방계혈족 순으로 상속순위를 정하고 있어, 자녀가 없으면 부모 → 형제자매 → 조카(대습) 순으로 넘어갈 수 있습니다. 어떻게 정리되는지 살펴보겠습니다.</p>',
    sections: [
      {
        title: 'Q. 자녀 없는 사람이 사망하면 누가 상속인이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민법 제1000조 상속순위를 따라 차례로 검토됩니다.</strong></p>\n<ul>\n<li><strong>1순위 — 직계비속 + 배우자</strong> — 자녀·손자녀가 있으면 1순위. 배우자는 1순위와 공동상속(배우자 상속분 1.5배).</li>\n<li><strong>2순위 — 직계존속 + 배우자</strong> — 자녀가 없을 때 부모·조부모가 2순위. 배우자는 2순위와도 공동상속.</li>\n<li><strong>3순위 — 형제자매</strong> — 자녀·부모 모두 없을 때 형제자매가 상속. 배우자가 있으면 배우자가 단독상속(형제자매 미공동).</li>\n<li><strong>4순위 — 4촌 이내 방계혈족</strong> — 자녀·부모·형제자매·배우자 모두 없을 때 4촌 이내 방계혈족(조카·고모·이모·외삼촌 등).</li>\n<li><strong>대습상속 (민법 제1001조)</strong> — 1·3순위 상속인이 먼저 사망한 경우 그 직계비속(예: 형제자매가 먼저 사망 → 그 자녀인 조카)이 대신 상속.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무자녀 백숙부·이모 사망 시 → 부모 생존 시 부모 → 부모도 사망이면 형제자매(피상속인의 형제·자매) → 형제자매도 사망이면 조카(대습) 순으로 흐릅니다.</blockquote>',
      },
      {
        title: 'Q. 자녀가 모두 상속포기하면 손자녀가 받나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 2023년 대법원 판례(2020그42)로 배우자 + 자녀 전부 상속포기 시 배우자 단독상속이 됐습니다.</strong></p>\n<ol>\n<li><strong>① 종전 판례 (2015년)</strong> — 배우자 + 자녀 모두 포기 시 손자녀·직계존속이 배우자와 공동상속한다고 보았음.</li>\n<li><strong>② 변경된 판례 (대법원 2020그42)</strong> — 2023년 전합으로 변경. 배우자 + 자녀 전부 포기 시 배우자 단독상속으로 정리.</li>\n<li><strong>③ 변경 취지</strong> — 자녀가 채무 회피 목적으로 포기했는데 손자녀에게 채무가 승계되는 결과를 막기 위함.</li>\n<li><strong>④ 자녀·배우자 모두 포기 시</strong> — 그때는 손자녀·직계존속·형제자매가 후순위로 상속. 채무 상속 회피하려면 모든 후순위까지 포기 필요.</li>\n<li><strong>⑤ 사망 후 3개월 — 한정승인·포기 결정</strong> — 상속개시 안 날부터 3개월 내 결정. 후순위 상속인은 자기가 상속인이 됐음을 안 날부터 기산.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속순위·후순위 승계와 한정승인, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 조카가 상속받으려면 어떤 절차가 필요한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 후순위 상속인 자격 확인 → 상속재산 확정 → 등기·세무 신고 흐름으로 정리됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족관계 확인</strong> — 피상속인의 가족관계증명서·기본증명서 + 본인 가족관계 자료. 직계비속·존속·형제자매 부존재 확인.</li>\n<li><strong>2단계 — 선순위 상속포기 확인</strong> — 형제자매가 살아 있으면 선순위. 형제자매가 모두 사망했거나 포기·결격이면 대습·후순위로 넘어옴.</li>\n<li><strong>3단계 — 상속재산 조사</strong> — 안심상속 원스톱 서비스(정부24)로 부동산·예금·자동차·세금 일괄 조회. 빚이 더 많으면 한정승인·포기 검토.</li>\n<li><strong>4단계 — 등기·세무 신고</strong> — 상속등기(부동산)·예금 인출·상속세 신고(6개월). 상속세는 5억 원 미만이면 보통 비과세.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정부24 "안심상속 원스톱 서비스"로 사망신고와 동시에 재산·채무를 일괄 조회할 수 있습니다. 후순위 상속인도 자격 확인 후 활용 가능.</blockquote>',
      },
      {
        title: 'Q. 빚이 더 많으면 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 한정승인 또는 상속포기를 3개월 내에 신청해야 합니다.</strong></p>\n<ul>\n<li><strong>한정승인 (민법 제1028조)</strong> — 상속재산 한도 내에서만 빚을 갚는 제도. 적극재산 = 소극재산 처리 후 남은 빚은 면책.</li>\n<li><strong>상속포기 (민법 제1041조)</strong> — 처음부터 상속인이 아니었던 것으로 처리. 후순위 상속인에게 채무가 넘어갈 수 있음 주의.</li>\n<li><strong>3개월 기한</strong> — 상속개시 안 날부터 3개월. 후순위 상속인은 자기가 상속인이 됐음을 안 날부터 기산. 모르고 지나면 단순승인 간주.</li>\n<li><strong>특별한정승인 (민법 제1019조 제3항)</strong> — 단순승인 후 빚을 알게 된 경우 안 날부터 3개월 내 한정승인 가능.</li>\n<li><strong>변호사 상담 검토</strong> — 후순위 상속·복잡한 가족관계는 사선 변호사 조력이 도움이 됩니다. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 후순위 상속인은 자기가 상속인이 됐다는 사실을 모르고 지나가는 경우가 많습니다. 형제자매가 상속포기했다는 통지를 받으면 즉시 검토 필요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 배우자와 자녀 전부 상속포기 시 단독상속인 결정',
        summary:
          '대법원 2020그42 사건(대법원, 2023.03.23 선고)에서 법원은 피상속인의 배우자와 자녀 중 자녀 전부가 상속을 포기한 경우 민법 제1043조에 따라 상속포기자인 자녀의 상속분이 남아 있는 다른 상속인인 배우자에게 귀속되어 배우자가 단독상속인이 된다고 판시했습니다. 자녀가 채무 회피 목적으로 상속포기했는데 손자녀·직계존속에게 다시 채무가 승계되는 종전 판례의 불합리를 정리한 전원합의체 판결입니다.',
        takeaway: '상속순위는 단순한 조문 적용이 아니라 채무상속·당사자 의사·실무를 종합 고려하므로, 후순위 가능성이 있는 사람은 자기가 상속인이 됐는지부터 확인이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '결혼 안 한 삼촌 재산은 누가 상속하나요?',
        answer:
          '<strong>부모(삼촌의 부모) 생존 시 부모, 부모도 사망이면 삼촌의 형제자매(피상속인의 부모와 같은 항렬)가 상속합니다.</strong> 형제자매도 모두 사망했다면 그 자녀(조카)가 대습상속할 수 있습니다.',
      },
      {
        question: '조카가 여러 명이면 어떻게 나누나요?',
        answer:
          '<strong>대습상속 시 형제자매가 받았을 상속분을 그 자녀들이 균등하게 나눕니다.</strong> 예: 형제자매 3인 중 1인이 먼저 사망 → 그 자녀가 2명이면 사망한 형제자매 몫을 조카 2명이 1/2씩 나눔.',
      },
      {
        question: '후순위 상속인에게도 채무가 넘어오나요?',
        answer:
          '<strong>네. 선순위가 모두 포기·결격이면 후순위에 채무가 승계될 수 있습니다.</strong> 자기가 상속인이 됐다는 사실을 안 날부터 3개월 내 한정승인·포기 결정 필수. 모르고 지나면 단순승인 간주.',
      },
      {
        question: '안심상속 원스톱 서비스는 어떻게 신청하나요?',
        answer:
          '<strong>정부24(gov.kr)에서 사망신고와 동시에 신청하거나 사후 1년 내 별도 신청 가능합니다.</strong> 부동산·예금·자동차·세금·연금 등 사망자 재산을 일괄 조회할 수 있어 한정승인·포기 결정에 도움이 됩니다.',
      },
      {
        question: '상속 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 가정법원 신청서식·한정승인 절차 안내도 가능하고, 사선 변호사 조력은 복잡한 후순위·대습 사안에서 효과가 큽니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 vs 상속포기 비교', href: '/guide/inheritance/inheritance-renunciation-vs-limited-comparison' },
      { label: '상속세 6개월 신고기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '차명계좌·은닉자산 추적 절차', href: '/guide/inheritance/inheritance-trust-account-hidden-asset' },
      { label: '해외자산 상속 신고기한', href: '/guide/inheritance/inheritance-overseas-asset-declaration' },
      { label: '부동산 공동상속 분할 분쟁', href: '/guide/inheritance/inheritance-real-estate-co-owners-dispute' },
    ],
  },

  // ─── 6. inheritance / real-estate-co-owners-dispute ───
  {
    domain: 'inheritance',
    slug: 'inheritance-real-estate-co-owners-dispute',
    keyword: '부동산 공동상속 분할 분쟁',
    questionKeyword: '형제자매와 공동상속한 부동산을 어떻게 나누나요?',
    ctaKeyword: '공유물분할청구·경매 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부동산 공동상속 분할 분쟁 4단계 해결 절차 | 로앤가이드',
      description:
        '형제자매와 공동상속한 부동산을 어떻게 나눠야 할지 막막하실 거예요. 협의분할·공유물분할청구·경매 절차를 지금 확인하세요.',
    },
    intro:
      '<p>부모님이 남기신 부동산을 형제자매와 공동상속받는 일은 생각보다 자주 분쟁으로 이어집니다. "한 명은 팔자고 하는데 다른 한 명은 안 팔겠다", "내가 살고 있는데 형제가 자기 지분을 달라고 한다" 같은 상황이죠. 민법 제268조·제269조는 이런 상황을 위해 협의분할·공유물분할청구·경매 절차를 마련해두고 있습니다. 어떤 단계로 정리하면 좋은지 살펴보겠습니다.</p>',
    sections: [
      {
        title: '공유물분할의 3가지 방법 — 협의·재판상·경매',
        content:
          '<p><strong style="color:#1e3a5f">민법은 공유 부동산 분할에 3가지 방법을 두고 있습니다.</strong></p>\n<ul>\n<li><strong>협의분할 (민법 제268조)</strong> — 공유자 전원 합의로 분할. 현물분할·대금분할·일부 매수 등 자유롭게 결정. 합의서 작성 + 등기로 마무리.</li>\n<li><strong>재판상 분할청구 (민법 제269조)</strong> — 협의 안 되면 가정법원이 아닌 민사법원에 분할 청구. 통상 3순위 — 현물분할 우선 → 대금분할 → 경매분할.</li>\n<li><strong>경매분할</strong> — 현물분할이 불가능하거나 부적당할 때 경매에 부쳐 매각대금을 분할. 시간 6개월~1년+ 소요.</li>\n<li><strong>가액배상</strong> — 한쪽이 단독 소유하고 다른 쪽에 지분 가액을 보상. 협의로 가능, 재판에서도 인정 사례 많음.</li>\n<li><strong>일부 분할</strong> — 일부 공유자만 분할 청구 가능. 공유자 전원이 동의해야 협의분할이 성립하지만, 재판상 청구는 1인이라도 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한 명이 거주하는 주택은 가액배상으로 정리하는 사례가 많습니다. 거주자가 다른 형제자매에게 지분 가액을 보상하고 단독 소유로 정리하는 방식.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공유물분할 4단계',
        content:
          '<p><strong style="color:#1e3a5f">협의 시도 → 분할청구 소송 → 분할방법 결정 → 등기·정산 흐름으로 정리됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 협의분할 시도 (3~6개월)</strong> — 형제자매 간 분할안 논의. 감정평가·시세 조사 → 분할 비율·방법 합의 → 합의서·분할증서 작성 → 등기.</li>\n<li><strong>2단계 — 분할청구 소송 (협의 결렬 시 6개월~1년)</strong> — 민사법원에 공유물분할청구. 청구취지에 희망 분할방법(현물·대금·경매·가액배상) 명시.</li>\n<li><strong>3단계 — 감정·분할방법 결정 (변론 단계)</strong> — 법원 감정평가 → 현물분할 가능성 검토 → 불가능하면 대금분할/경매분할 결정.</li>\n<li><strong>4단계 — 등기·정산 (판결 확정 후)</strong> — 분할 판결 확정 시 등기 이전. 경매분할이면 경매 진행 → 매각대금 지분 비율로 분배.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공유물분할청구·경매 절차와 입증자료, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">분할방법·기여도·관리비 정산 등 입증할 자료를 미리 정리해두면 시간이 단축됩니다.</strong></p>\n<ul>\n<li><strong>상속관계 자료</strong> — 피상속인 가족관계증명서·기본증명서·제적등본 / 상속인 전원 가족관계증명서·인감증명서·주민등록등본</li>\n<li><strong>부동산 자료</strong> — 등기부등본·토지대장·건축물대장·공시지가확인원·시가표준액 자료·감정평가서(있으면)</li>\n<li><strong>분할 입증 자료</strong> — 협의 시도 자료(이메일·문자·녹취)·각자 희망 분할안·시세 조사자료·현물분할 가능성 검토자료</li>\n<li><strong>관리비·재산세 자료</strong> — 상속개시 후 일방이 부담한 재산세·관리비·수리비 영수증. 대법원 2024스866 판례에 따라 구상권 가능성.</li>\n<li><strong>거주·점유 자료</strong> — 일부 공유자가 단독 거주 중이면 임대료 상당 부당이득 청구 검토. 거주 시작·종료 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공유 부동산을 일부 공유자가 단독 사용 중이면 다른 공유자에게 임료 상당의 부당이득 반환 의무가 발생할 가능성이 큽니다. 별도 청구로 정산이 필요합니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 공동상속 부동산에서 자주 막히는 지점',
        content:
          '<p><strong style="color:#1e3a5f">감정·기여도·재산세·임료 4가지 축에서 분쟁이 잦습니다.</strong></p>\n<ul>\n<li><strong>시세 감정 다툼</strong> — 한쪽은 높은 시세, 다른 쪽은 낮은 시세 주장. 법원 감정평가가 결정적이지만 감정료가 부담될 수 있음(통상 200~500만 원).</li>\n<li><strong>기여분 주장</strong> — 피상속인 부양·재산 형성 기여도 주장 시 상속분 자체가 변동. 별도 기여분 심판 청구 필요(가정법원).</li>\n<li><strong>재산세·관리비</strong> — 상속개시 후 일방이 부담한 재산세는 다른 공유자에게 구상 가능(대법원 2024스866). 영수증 보관 필수.</li>\n<li><strong>일방 거주 시 임료</strong> — 한 명만 거주 중이면 다른 형제자매에게 임료 상당 부당이득 반환 의무. 분할청구와 별도 소송 가능.</li>\n<li><strong>변호사 상담 검토</strong> — 공유물분할은 감정·기여분·임료가 복합되므로 사선 변호사 조력이 도움이 됩니다. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 협의가 안 된다고 무작정 경매분할을 청구하면 시세보다 낮은 금액으로 매각될 수 있어 손해가 큽니다. 협의·가액배상 시도 후 마지막 수단으로 두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속 부동산의 재산세 구상 인정',
        summary:
          '대법원 2024스866 사건(대법원, 2025.03.24 선고)에서 법원은 공동상속인들이 각자의 법정상속분에 따라 상속재산을 공유하는 동안 상속재산에 부과된 재산세는 공동상속인들이 연대하여 납부할 의무를 지고, 그중 1인이 위 재산세를 납부함으로써 공동면책을 얻었다면 다른 공동상속인들을 상대로 각자의 법정상속분에 따라 구상할 수 있으며, 구상을 하지 않은 상태에서 진행된 상속재산분할 절차에서 그 단독소유 결정이 이루어졌다고 해도 여전히 다른 공동상속인을 상대로 구상할 수 있다고 판시했습니다.',
        takeaway: '공동상속 부동산의 재산세·관리비를 일방이 부담했다면 영수증을 보관해두고 분할 시 또는 별도 구상권으로 정산할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '공동상속한 부동산을 한 명이 단독으로 팔 수 있나요?',
        answer:
          '<strong>전체 매각은 공유자 전원 동의가 필요합니다.</strong> 자기 지분만 매각하는 것은 가능하지만 매수자가 새 공유자가 되어 분쟁이 복잡해질 수 있어 협의분할·공유물분할 후 매각이 안전합니다.',
      },
      {
        question: '협의가 안 되면 바로 경매로 가나요?',
        answer:
          '<strong>법원은 통상 현물분할 → 대금분할 → 경매분할 순으로 검토합니다.</strong> 토지처럼 분할이 쉬운 부동산은 현물분할, 주택처럼 어려운 경우 가액배상 또는 경매분할 결정이 자주 보입니다.',
      },
      {
        question: '경매분할 시 매각대금은 언제 받나요?',
        answer:
          '<strong>경매 매각 후 배당기일에 지분 비율대로 받습니다.</strong> 통상 분할 판결 확정 → 경매 신청 → 매각 → 배당까지 6개월~1년+ 소요됩니다. 경매가는 시세의 70~80% 수준이 자주 보입니다.',
      },
      {
        question: '한 명이 거주 중이면 임료를 받을 수 있나요?',
        answer:
          '<strong>거주자에게 자기 지분을 초과한 사용분에 대해 임료 상당 부당이득 반환을 청구할 수 있습니다.</strong> 별도 부당이득반환소송으로 진행하거나 분할청구 시 함께 청구할 수 있습니다.',
      },
      {
        question: '상속 부동산 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담이 가능합니다.</strong> 가족관계가 복잡한 경우 사선 변호사 조력이 도움이 됩니다. 감정평가는 한국감정원·민간 감정평가법인 모두 가능하고 시세에 따라 비용 차이가 있습니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 vs 상속포기 비교', href: '/guide/inheritance/inheritance-renunciation-vs-limited-comparison' },
      { label: '상속세 6개월 신고기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '차명계좌·은닉자산 추적 절차', href: '/guide/inheritance/inheritance-trust-account-hidden-asset' },
      { label: '무자녀 백숙부·이모 상속 순위', href: '/guide/inheritance/inheritance-uncle-aunt-childless-priority' },
      { label: '해외자산 상속 신고기한', href: '/guide/inheritance/inheritance-overseas-asset-declaration' },
    ],
  },

  // ─── 7. inheritance / mutual-aid-bereaved-pay ───
  {
    domain: 'inheritance',
    slug: 'inheritance-mutual-aid-bereaved-pay',
    keyword: '상조회 공제회 사망부조금 청구',
    questionKeyword: '상조회·공제회 사망부조금도 상속재산에 포함되나요?',
    ctaKeyword: '부조금·공제금 청구·신고 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '상조회·공제회 사망부조금 청구 4단계 절차 | 로앤가이드',
      description:
        '상조회·공제회·부의금이 상속재산인지 별도 권리인지 헷갈리실 거예요. 부의금 법적 성질과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>상을 치르고 나면 "상조회 적립금·공제회 사망조위금·부의금이 들어왔는데, 이게 상속재산인가? 누구 명의로 받아야 하지?" 하는 의문이 듭니다. 부의금·공제금·사망부조금은 그 성격이 제각각이라 일률적으로 상속재산이라고 보기 어려운 경우가 많습니다. 어떻게 구분되는지, 어떤 절차로 청구하면 좋은지 정리해보겠습니다.</p>',
    sections: [
      {
        title: '상조·공제·부의금 — 4가지 성격 구분',
        content:
          '<p><strong style="color:#1e3a5f">금원의 성격에 따라 상속재산·고유권리·증여로 갈립니다.</strong></p>\n<ul>\n<li><strong>상조회 적립금 (계약상 권리)</strong> — 피상속인이 가입한 상조서비스 미사용 적립금. 계약자(피상속인) 사망 시 약관에 따라 상속인에게 환급되거나 장례 서비스 제공으로 정리.</li>\n<li><strong>공제회 사망조위금</strong> — 회원 사망 시 유족에게 지급되는 조위금. 약관상 수익자가 정해져 있으면 그 사람의 고유권리(상속재산 X), 정해지지 않으면 상속재산.</li>\n<li><strong>사망보험금</strong> — 보험계약자가 지정한 수익자의 고유권리(상속재산 X). 단, 수익자 미지정·"법정상속인"으로만 지정 시 상속재산 처리 사례.</li>\n<li><strong>부의금 (조건부 증여)</strong> — 장례비에 먼저 충당될 것을 조건으로 한 증여(서울가법 2008느합86 판례). 장례비 충당 후 잔여분은 부의금 피교부자에게 귀속.</li>\n<li><strong>회사 위로금·퇴직금</strong> — 망인이 받을 권리(미수령 임금·퇴직금)는 상속재산. 유족 위로금은 별도 약정에 따라 유족 고유권리일 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "수익자가 명시돼 있으면 그 사람의 고유권리, 명시 없으면 상속재산"이 큰 원칙입니다. 약관·증서를 먼저 확인하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부조금·공제금 청구 4단계',
        content:
          '<p><strong style="color:#1e3a5f">사망 신고 → 권리 확인 → 청구·수령 → 정산·신고 흐름으로 정리됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망신고·증명서 준비 (1주~1개월)</strong> — 사망신고 → 사망진단서·기본증명서·가족관계증명서 발급. 안심상속 원스톱 서비스로 사망자 가입 상조·공제 일괄 조회 가능.</li>\n<li><strong>2단계 — 약관·수익자 확인</strong> — 상조회·공제회·보험사 가입 증서 확인. 수익자 지정 여부·고유권리/상속재산 구분 → 청구 주체 결정.</li>\n<li><strong>3단계 — 청구·수령 (1~3개월)</strong> — 수익자 명시 시 그 사람이 직접 청구. 명시 없으면 상속인 전원 합의서·인감증명 첨부 후 청구. 보통 1~3개월 내 지급.</li>\n<li><strong>4단계 — 정산·세무 신고 (사망 후 6개월)</strong> — 상속재산이면 상속세 신고에 포함(6개월 기한). 고유권리는 별도 신고 없음. 부의금은 비과세지만 사회통념 초과 시 증여세 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상조·공제·부의금 청구와 신고, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">청구 주체에 따라 필요 서류가 달라집니다.</strong></p>\n<ul>\n<li><strong>사망 입증 자료</strong> — 사망진단서·시체검안서·기본증명서(사망 사실 기재)·가족관계증명서·주민등록등본</li>\n<li><strong>가입·약관 자료</strong> — 상조회·공제회·보험 가입증서·약관·수익자 지정서·납입영수증·만기 잔액 확인서</li>\n<li><strong>상속인 자료(상속재산 처리 시)</strong> — 상속인 전원 가족관계증명서·인감증명서·인감도장·상속재산분할협의서</li>\n<li><strong>장례비 입증 자료(부의금 처리 시)</strong> — 장례식장 영수증·발인 비용·매장/화장 비용·식대·접대 비용 영수증</li>\n<li><strong>기타</strong> — 청구인 신분증·통장 사본·위임장(대리 청구 시)·안심상속 원스톱 서비스 결과 자료</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정부24 "안심상속 원스톱 서비스"로 사망자가 가입한 상조회·공제회·보험을 일괄 조회할 수 있습니다. 사망 신고 시 함께 신청하면 누락을 줄일 수 있습니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 부조금·공제금에서 자주 막히는 지점',
        content:
          '<p><strong style="color:#1e3a5f">수익자·부의금 분배·세금 3가지 축에서 분쟁이 잦습니다.</strong></p>\n<ul>\n<li><strong>수익자 미지정 — 상속재산 처리</strong> — 보험·공제 수익자 명시 없으면 상속재산 처리 가능성. 상속인 전원 합의로 청구해야 하므로 시간 소요.</li>\n<li><strong>"법정상속인" 지정 — 상속재산 vs 고유권리</strong> — 약관에 "법정상속인"으로만 지정된 경우 사례별로 다툼 — 상속재산이라는 견해와 상속인의 고유권리라는 견해가 모두 존재.</li>\n<li><strong>부의금 분배 다툼</strong> — 부의금 총액이 장례비 초과 시 누가 가져갈지 분쟁. 대법원 2008느합86 판례: 부의금 피교부자별 비율로 충당 후 잔여분 귀속.</li>\n<li><strong>장례비 입증</strong> — 부의금이 장례비에 우선 충당되므로 장례비 영수증을 잘 보관해야 정산이 가능. 식대·접대비·발인비 모두 포함.</li>\n<li><strong>변호사 상담 검토</strong> — 수익자·부의금 분쟁이 형제자매 간으로 번지면 사선 변호사 조력이 도움이 됩니다. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 부의금이 사회통념을 현저히 초과해 받는 경우(고액 부의금 누적) 증여세 과세 가능성도 있어, 큰 금액이라면 세무사 상담을 권장합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부의금의 법적 성질과 분배 기준',
        summary:
          '서울가정법원 2008느합86 사건(서울가법, 2010.11.02 선고)에서 법원은 부의금이란 "장례비에 먼저 충당될 것을 조건으로 한 금전의 증여"라고 보고, 접수된 부의금 금액이 상속인 또는 가족별로 다르더라도 우선 장례비에 충당되어야 하며, 부의금 총액이 장례비를 초과하면 부의금 피교부자별로 접수된 금액의 비율대로 정산하고 잔여분은 그 사람들에게 귀속된다고 판시했습니다. 또한 부의금 합계가 장례비에 미치지 못하면 모두 장례비에 충당되고 부족분은 법정상속분에 따라 부담합니다.',
        takeaway: '부의금은 단순 상속재산이 아니라 "조건부 증여"로 해석되며, 장례비 우선 충당 + 잔여분 분배라는 정산 절차를 거쳐야 합니다.',
      },
    ],
    faq: [
      {
        question: '부의금이 상속재산에 포함되나요?',
        answer:
          '<strong>원칙적으로 상속재산이 아니라 부의금 피교부자(받은 사람)의 조건부 증여로 봅니다.</strong> 다만 장례비에 우선 충당해야 하므로, 잔여분이 있을 때만 받은 사람에게 귀속됩니다.',
      },
      {
        question: '사망보험금은 상속세를 내야 하나요?',
        answer:
          '<strong>수익자의 고유권리이므로 민법상 상속재산은 아니지만, 상속세법상 "간주상속재산"으로 과세 대상입니다.</strong> 다만 일정 한도(피상속인이 보험료 납부)는 비과세. 한정승인·포기 여부와 별개로 상속세 신고 필요.',
      },
      {
        question: '상조회 미사용 적립금은 어떻게 받나요?',
        answer:
          '<strong>약관에 따라 환급 또는 서비스 사용으로 정리됩니다.</strong> 환급 시 상속인 전원 합의서·인감증명서 첨부 후 청구. 일부 상조회는 가족 양도가 가능하므로 약관 확인 필요.',
      },
      {
        question: '회사에서 받는 유족 위로금은 누구 권리인가요?',
        answer:
          '<strong>회사 단체협약·취업규칙에 따라 다릅니다.</strong> 유족 명의 위로금은 유족 고유권리, 망인의 미수령 임금·퇴직금은 상속재산. 회사에 약정 내용 확인 필요.',
      },
      {
        question: '상속 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담이 가능합니다.</strong> 안심상속 원스톱 서비스(정부24)로 사망자 재산을 일괄 조회할 수 있고, 세무 상담은 국세청 콜센터(126)에서 무료로 받아보실 수 있습니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 vs 상속포기 비교', href: '/guide/inheritance/inheritance-renunciation-vs-limited-comparison' },
      { label: '상속세 6개월 신고기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '무자녀 백숙부·이모 상속 순위', href: '/guide/inheritance/inheritance-uncle-aunt-childless-priority' },
      { label: '부동산 공동상속 분할 분쟁', href: '/guide/inheritance/inheritance-real-estate-co-owners-dispute' },
      { label: '차명계좌·은닉자산 추적 절차', href: '/guide/inheritance/inheritance-trust-account-hidden-asset' },
    ],
  },
];
