import { SpokePage } from '../spoke-pages';

// batch58 dismissal A — 3개
//
// 고유 존재 이유:
// 1. 이 페이지는 해고 30일 전 예고를 받지 못한 근로자가 부당해고 다툼과 별개로 30일분 통상임금(해고예고수당)을 노동청 임금체불 진정으로 청구하는 별도 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 병가·휴직·산재요양 등 적법 휴직 종료 후 회사가 복직을 거부하거나 원직이 아닌 한직으로 보낸 근로자가 묵시적 해고·해고무효확인 트랙으로 다툴 수 있도록 돕는 페이지다.
// 3. 이 페이지는 해외파견·지방전보 등 광범위 인사명령 거부를 이유로 해고된 근로자가 인사명령의 업무상 필요성·생활상 불이익·신의칙 위반 4가지 다툼 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58DismissalA: SpokePage[] = [
  // ─── 1. dismissal / dismissal-notice-pay-30days-violation-claim ───
  {
    domain: 'dismissal',
    slug: 'dismissal-notice-pay-30days-violation-claim',
    keyword: '해고예고수당 미지급 30일 위반',
    questionKeyword: '해고 통보를 받자마자 그날로 출근하지 말라고 했는데, 30일 예고 안 했으면 추가로 받을 게 있나요?',
    ctaKeyword: '해고예고수당 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해고예고수당 30일 미지급 — 5단계 청구 절차 | 로앤가이드',
      description:
        '해고 30일 전 예고를 받지 못했다면 해고가 정당해도 30일분 통상임금을 별도 청구할 수 있는 영역입니다. 노동청 진정 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"\'오늘부로 그만 나오라\'는 말을 어제 들었어요. 30일 전 예고도 없었고, 추가 수당 얘기도 없었습니다. 부당해고로 다투는 건 시간이 걸릴 텐데, 지금 당장 받을 수 있는 돈이 있는지 궁금합니다." 해고예고수당은 부당해고 다툼과 완전히 별개의 트랙입니다. 근로기준법 제26조는 사용자가 30일 전 예고 없이 해고하면 30일분 통상임금을 지급해야 한다고 정하고 있고, 대법원 2017다16778 판결은 해고가 사후 무효로 판명되더라도 해고예고수당 지급의무는 별도로 성립하므로 부당이득 반환 대상이 아니라고 판시했습니다. 즉 노동위 부당해고 구제와 노동청 임금체불 진정을 동시에 진행해도 충돌하지 않는 영역이어서, 해고일로부터 3년 이내라면 별도 청구를 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해고예고수당 청구 가능 여부 4가지 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적용대상·예외사유·계산방식·시효 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적용대상 (근로기준법 제26조)</strong> — 계속근로 3개월 이상 근로자라면 정규직·계약직·일용직·아르바이트 가리지 않고 적용. 5인 미만 사업장에도 동일 적용되는 영역입니다.</li>\n<li><strong>② 예외사유 (근로기준법 제26조 단서)</strong> — 천재·사변·사업계속 불가능, 근로자가 고의로 사업에 막대한 지장을 초래한 경우 등은 예외. 단순 "경영상 어려움"이나 "성과 부진"은 예외로 인정되기 어려운 사례가 많습니다.</li>\n<li><strong>③ 계산방식 (30일분 통상임금)</strong> — 통상임금에는 기본급 + 정기상여 + 고정수당이 포함되는 영역. 시간외수당·실비변상은 통상 제외. 30일이 결근일이 아니라 통상임금 30일분 환산.</li>\n<li><strong>④ 시효 (3년)</strong> — 임금채권이라 근로기준법 제49조에 따라 3년 시효. 해고일 기준이 아니라 미지급 발생일부터 3년 이내라면 청구 가능한 영역으로 검토할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2017다16778은 해고예고수당이 해고의 효력 자체와 무관한 보호제도라고 보았습니다. 즉 부당해고로 무효 판정을 받고 임금상당액을 지급받더라도 30일분 통상임금은 별도로 받을 수 있다고 평가될 여지가 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동청 진정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동청(고용노동부) 임금체불 진정 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 자료 정리 (즉시)</strong> — 해고통보서·문자·녹취·근로계약서·최근 3개월 급여명세서 + 통상임금 산정 근거(기본급·정기상여·고정수당).</li>\n<li><strong>2단계 — 회사에 서면 청구 (3~7일)</strong> — 내용증명으로 "해고예고수당 30일분 통상임금 지급 요청 + 미지급 시 노동청 진정 예정" 통지. 회사 자율 지급 시 진정 없이 종결되는 사례가 있습니다.</li>\n<li><strong>3단계 — 고용노동부 진정 접수 (해고일 3년 이내)</strong> — 노동포털(labor.moel.go.kr) 온라인 진정 또는 사업장 관할 지방고용노동청 방문. 임금체불 항목으로 신청.</li>\n<li><strong>4단계 — 근로감독관 조사 (접수 후 25일 내외)</strong> — 사업주 출석조사·자료요구·중재. 사용자가 자율 지급에 응하지 않으면 형사 송치 검토(근로기준법 제110조 위반, 5년 이하 징역 또는 5천만원 이하 벌금).</li>\n<li><strong>5단계 — 미지급 시 민사 소액사건 (3년 시효)</strong> — 노동청 행정 트랙으로도 미회수면 법원 지급명령 또는 소액사건 소송. 3,000만원 이하 청구는 소액사건 절차로 신속 처리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해고예고수당 청구 + 부당해고 구제 동시 진행 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 해고 입증자료 + 통상임금 산정자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>해고통보서·문자·이메일·녹취</strong> — 해고일·예고 여부 확정 자료. 즉시해고 정황이라면 가장 핵심 자료입니다.</li>\n<li><strong>근로계약서·근로계약 갱신 이력</strong> — 계속근로 3개월 이상 적용대상 입증.</li>\n<li><strong>최근 3개월 급여명세서</strong> — 통상임금 산정 기준. 기본급 + 정기상여 + 고정수당 항목 확인.</li>\n<li><strong>취업규칙·임금규정</strong> — 통상임금에 포함되는 수당 항목 명문 규정.</li>\n<li><strong>출근부·근태기록</strong> — 정상 근무 후 즉시해고 정황 입증.</li>\n<li><strong>해고예고수당 지급 거부 정황 자료</strong> — 회사가 "예고했다" 또는 "지급할 수 없다"고 한 메일·문자.</li>\n<li><strong>퇴직금·미지급 임금 자료</strong> — 임금체불 진정에 함께 신청 가능. 한 번에 처리하면 효율적입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해고예고수당은 통상임금 30일분이지 평균임금 30일분이 아닙니다. 평균임금이 더 높더라도 청구액은 통상임금 기준이라 산정 시 주의가 필요한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인이 잘못해서 해고됐으니 예고수당 없다" 주장 반박</strong> — 근로기준법 제26조 단서 예외사유는 "근로자가 고의로 사업에 막대한 지장 초래" 등 매우 좁은 영역. 단순 성과부진·근태불량은 예외로 인정되기 어렵습니다.</li>\n<li><strong>"3개월 미만이라 적용 안 된다" 주장 반박</strong> — 2019년 헌법재판소 결정으로 3개월 미만 적용제외 조항이 위헌 결정된 영역. 현행법은 모든 근로자에게 적용되는 사례가 일반적입니다.</li>\n<li><strong>"부당해고 다투면 예고수당 청구 못한다" 주장 반박</strong> — 대법원 2017다16778은 해고 효력과 예고수당이 별개라고 보았습니다. 노동위 부당해고 + 노동청 예고수당 진정 동시 진행 가능 영역.</li>\n<li><strong>"30일분이 아니라 며칠치만" 주장 반박</strong> — 30일분 통상임금이 정액. 예고일수에 따라 일부 깎이는 구조가 아닙니다(다만 일부 예고했다면 부족분만 추가 지급).</li>\n<li><strong>회사가 자율 지급 거부 시 형사 송치 카드</strong> — 근로기준법 제110조 위반은 5년 이하 징역 또는 5천만원 이하 벌금 영역. 형사 부담이 자율 지급 압력으로 작용하는 사례가 있습니다.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임금체불·해고예고수당 무료 상담.</li>\n<li><strong>고용노동부 1350 / 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 온라인 접수.</li>\n<li><strong>지방고용노동청</strong> — 사업장 관할 지청 방문 진정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고예고수당과 해고의 효력은 별개 (해고 무효여도 부당이득 아님)',
        summary:
          '대법원 2017다16778 사건(대법원, 2018.09.13 선고)에서 법원은 사용자가 30일 전 예고 없이 해고하면서 해고예고수당을 지급한 후, 그 해고가 부당해고로 무효 판정을 받자 사용자가 근로자에게 예고수당 반환을 청구한 사안에서, 해고예고수당은 해고의 효력 자체와 무관하게 30일 미예고만으로 지급의무가 발생하므로 해고가 무효여도 근로자가 이를 부당이득으로 반환할 의무가 없다고 판시했습니다. 해고예고제도가 새 직장을 구할 시간적·경제적 여유를 보장하기 위한 별개 보호장치라고 보았습니다.',
        takeaway: '해고예고수당은 부당해고 다툼과 완전히 별개 트랙으로 청구 가능한 영역이라, 노동위 구제신청과 노동청 진정을 동시 진행해도 충돌하지 않는 사례가 일반적입니다. 30일 미예고 사실 + 통상임금 산정자료를 정리하면 별도 청구가 열립니다.',
      },
    ],
    faq: [
      {
        question: '부당해고로 노동위에 갔는데 예고수당도 따로 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 대법원 2017다16778에 따르면 두 트랙은 별개 영역입니다. 노동위 인용 시 임금상당액 + 노동청 인용 시 30일분 통상임금을 함께 받을 수 있는 사례가 있어, 동시 진행을 검토할 수 있습니다.',
      },
      {
        question: '회사가 예고는 했다고 주장합니다',
        answer:
          '<strong>예고 시점·방식이 핵심 입증 자료입니다.</strong> 30일 전 명시적 의사표시 + 해고일 특정이 필요한 영역. 단순 "성과 안 나오면 그만둬야지" 같은 추상적 발언은 예고로 인정되기 어려운 사례가 많습니다.',
      },
      {
        question: '계약직인데 계약기간 만료라고 하면서 갑자기 해고됐어요',
        answer:
          '<strong>계약기간 만료가 아니라 중도 해지라면 예고수당 청구 가능 영역입니다.</strong> 만료가 사실이면 예고 의무 없지만, 만료 전 중도 해지를 "만료"로 위장한 사안은 별도 다툼 트랙이 열립니다.',
      },
      {
        question: '5인 미만 사업장인데 예고수당도 안 되나요?',
        answer:
          '<strong>5인 미만에도 동일하게 적용됩니다.</strong> 부당해고 구제 트랙은 5인 미만 적용제외지만, 해고예고수당은 모든 사업장 적용 영역. 노동청 진정으로 청구 가능한 사례가 일반적입니다.',
      },
      {
        question: '해고된 지 1년 지났는데 지금이라도 청구할 수 있나요?',
        answer:
          '<strong>3년 이내라면 가능합니다.</strong> 임금채권 시효 3년이 적용되는 영역(근로기준법 제49조). 해고일이 1~2년 전이라도 노동청 진정 또는 민사 소액사건으로 청구를 검토할 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고예고수당 일반 가이드', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '카톡 해고 통보 서면통지 위반', href: '/guide/dismissal/dismissal-text-message-tomorrow-no-come-illegal' },
      { label: '구두 해고 서류 부재', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '5인 미만 부당해고 우회 트랙', href: '/guide/dismissal/dismissal-small-business-under5-options' },
      { label: '해고무효확인 민사소송', href: '/guide/dismissal/dismissal-relief-period-expired-civil-route' },
    ],
  },

  // ─── 2. dismissal / dismissal-leave-return-position-deprived ───
  {
    domain: 'dismissal',
    slug: 'dismissal-leave-return-position-deprived',
    keyword: '휴직 종료 복직거부 보직박탈',
    questionKeyword: '병가 끝나고 복직했더니 자리가 없다며 회사가 출근하지 말라고 합니다. 다툴 수 있나요?',
    ctaKeyword: '복직 거부 다툼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '휴직 후 복직 거부됐을 때 5가지 다툼 포인트 | 로앤가이드',
      description:
        '병가·산재요양·육아휴직 후 회사가 복직을 거부하거나 한직으로 보냈다면 묵시적 해고 5단계 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 병가가 끝나서 복직을 신청했는데, 인사팀이 \'당장 자리가 없다\'며 자택대기를 통보했어요. 한 달 뒤 다시 갔더니 \'그 자리는 후임자가 채웠으니 다른 부서로 가라\'며 영업소 창고 정리 직무를 줬습니다." 휴직 종료 후 복직 거부·보직 박탈은 형식상 "노무 수령 거부"로만 보이지만, 대법원 2022두57695 판결은 사용자의 노무 수령 거부 경위·방법, 근로자 태도 등을 종합해 "근로관계를 일방적으로 종료할 확정적 의사"로 평가되면 묵시적 해고에 해당한다고 판시했습니다. 또한 원직과 동등하지 않은 한직 배치는 부당전직(근로기준법 제23조 제1항) 다툼 영역에 해당해 해고일·전직일로부터 3개월 이내라면 노동위 구제신청을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 복직 거부·보직 박탈에서 점검할 5가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴직 적법성·복직 신청·노무수령 거부·원직 동등성·전직 정당성 5단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴직 자체의 적법성</strong> — 병가·육아휴직·산재요양은 근로자 권리 영역. 회사가 휴직 자체를 사유로 불이익을 줄 수 없습니다(근로기준법·산재보험법·남녀고용평등법).</li>\n<li><strong>② 복직 신청·의사 표시</strong> — 휴직 종료 시점에 복직 의사를 명시했는지. 카톡·메일·내용증명으로 명확히 표시한 자료가 핵심.</li>\n<li><strong>③ 노무 수령 거부 정황</strong> — "자리가 없다"·"대기하라"·"오지 말라" 같은 발언이 반복적·확정적이었는지. 대법원 2022두57695는 묵시적 해고를 인정한 사례 영역입니다.</li>\n<li><strong>④ 원직 동등성</strong> — 복직 후 배치된 직무가 휴직 전 직무와 동등한지. 직급·임금·업무내용·근무지·근무시간 5요소 비교. 한직·원거리 배치는 전직 다툼 자료.</li>\n<li><strong>⑤ 부당전직 정당사유</strong> — 회사 측 업무상 필요성·근로자 생활상 불이익·신의칙 위반 여부. 객관적 합리성 결여 시 부당전직 정황으로 평가될 여지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 "해고 안 했다"고 주장해도 노무 수령 거부가 일정 기간 지속되면 묵시적 해고로 평가될 수 있는 영역(2022두57695). 휴직 종료 + 복직 신청 + 회사 거부의 시간순 자료가 다툼 트랙의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 복직 거부 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고/부당전직 구제 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 휴직·복직 자료 보존 (즉시)</strong> — 휴직신청서·승인서·진단서·산재요양결정서·복직신청서·회사 답변(카톡·메일·녹취).</li>\n<li><strong>2단계 — 회사에 복직·원직 배치 서면 요구 (3~7일)</strong> — 내용증명으로 "원직 또는 동등 직무 복직 + 미배치 시 노동위 구제신청 예정" 통지. 회사 무대응이 다툼 자료가 됩니다.</li>\n<li><strong>3단계 — 노동위 구제신청 (3개월 이내)</strong> — 묵시적 해고로 평가될 수 있는 사안은 부당해고 구제, 한직 배치만 된 사안은 부당전직 구제. 두 트랙 동시 신청도 가능한 영역.</li>\n<li><strong>4단계 — 심문회의 (접수일 60일 이내)</strong> — 노무 수령 거부 경위·방법·기간, 원직 동등성 부재, 회사 측 업무상 필요성 부재 입증. 대법원 2022두57695 법리 적용 검토.</li>\n<li><strong>5단계 — 판정·민사 병행</strong> — 인용 시 원직복직 + 임금상당액. 노무 수령 거부 기간의 임금은 회사 책임으로 청구 가능한 사례가 있습니다(민법 제538조 채권자지체).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">묵시적 해고·부당전직 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴직 자료 + 복직 거부 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>휴직신청서·승인서</strong> — 휴직 종류(병가·육아·산재 등)·기간 명시.</li>\n<li><strong>병원 진단서·산재요양결정서</strong> — 휴직 사유의 적법성 입증.</li>\n<li><strong>복직 신청서·복직 의사 표시 자료</strong> — 카톡·메일·내용증명. 시점이 핵심.</li>\n<li><strong>회사 답변·노무수령 거부 정황</strong> — "자리가 없다"·"대기하라" 등 발언 녹취·문자.</li>\n<li><strong>휴직 전 직무 자료 + 복직 후 배치 자료</strong> — 원직 동등성 비교용. 직무기술서·조직도.</li>\n<li><strong>급여명세서</strong> — 휴직 전·후 임금 비교, 임금상당액 산정용.</li>\n<li><strong>취업규칙·인사규정</strong> — 휴직 후 복직 절차·원직복귀 명문 규정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 복직 신청을 한 시점과 회사가 거부·지연한 시점의 시간 간격이 길수록 묵시적 해고 정황이 강해지는 사례가 있어, 모든 연락 시점을 시간순으로 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"해고 안 했다, 자리만 없다" 주장 반박</strong> — 노무 수령 거부가 반복·확정적이라면 묵시적 해고로 평가될 여지가 있는 영역(2022두57695). 단순 "자리 부재" 주장으로 면책되지 않는 사례가 있습니다.</li>\n<li><strong>"원직 폐지로 다른 부서 배치" 주장 반박</strong> — 원직 폐지 사실 입증 + 동등 직무 배치 노력 입증이 회사 부담. 한직 강등은 부당전직 다툼 영역.</li>\n<li><strong>"산재 요양 중에 회복 안 됐다" 주장 반박</strong> — 의학적 복직 가능 진단이 있다면 회사가 일방적으로 복직 거부 어려운 영역. 산재 종결 진단서가 핵심 자료.</li>\n<li><strong>"육아휴직 후 복직했지만 보직만 바꿨다" 주장 반박</strong> — 남녀고용평등법 제19조는 육아휴직 후 동일·동등 업무 복귀를 보장하는 영역. 한직 배치는 모성보호 위반 다툼 자료.</li>\n<li><strong>임금상당액 별도 청구</strong> — 노무 수령 거부 기간 동안 받지 못한 임금은 채권자지체(민법 제538조) 법리로 별도 청구 가능한 사례가 있습니다.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·부당전직 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>고용노동부 1350 / 노동포털 (labor.moel.go.kr)</strong> — 임금체불·복직거부 진정.</li>\n<li><strong>근로복지공단 1588-0075</strong> — 산재요양 후 복직 관련 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 묵시적 의사표시에 의한 해고의 인정 기준',
        summary:
          '대법원 2022두57695 사건(대법원, 2023.02.02 선고)에서 법원은 해고란 명칭·절차에 관계없이 근로자 의사에 반하여 사용자의 일방적 의사로 이루어지는 모든 근로계약관계 종료를 의미한다고 보면서, 명시적 해고통보가 없어도 사용자의 노무 수령 거부 경위·방법·기간, 근로자가 보인 태도 등을 종합해 "근로관계를 일방적으로 종료할 확정적 의사"가 표시된 것으로 평가되면 묵시적 해고가 성립한다고 판시했습니다. 서면통지 부재가 해고 의사표시 존재 자체를 부정하는 근거는 아니라고 보았습니다.',
        takeaway: '회사가 "해고 안 했다"고 주장해도 복직 거부·자택대기·자리 부재 통보가 반복되면 묵시적 해고로 평가될 수 있는 영역이라, 시간순 자료 정리 + 노무 수령 거부 기간 입증이 다툼 트랙의 핵심이 되는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '복직 신청을 했는데 회사가 답이 없습니다',
        answer:
          '<strong>내용증명으로 다시 한 번 명확히 요구하는 것이 안전합니다.</strong> 카톡·문자 외에 내용증명을 보내면 시점·내용이 객관적으로 남아 묵시적 해고 입증 자료가 되는 영역으로 검토할 수 있습니다.',
      },
      {
        question: '병가 진단서가 만료되기 전에 복직 가능한가요?',
        answer:
          '<strong>의학적 복직 가능 진단을 받으면 가능합니다.</strong> 회사가 "진단서 기간이 남았으니 더 쉬어라"라고 강제할 수 없는 영역. 본인 의사 + 의학적 회복이 핵심 기준입니다.',
      },
      {
        question: '육아휴직 후 한직으로 발령됐어요',
        answer:
          '<strong>남녀고용평등법 제19조 위반 다툼 영역입니다.</strong> 동일·동등 업무 복귀가 보장되어야 하는 영역으로, 부당전직 + 모성보호 위반 두 트랙으로 다툼 가능한 사례가 있습니다.',
      },
      {
        question: '산재요양 후 복직했더니 임금이 깎였어요',
        answer:
          '<strong>휴직 전 임금 수준 보장은 부당전직 다툼 자료가 됩니다.</strong> 직무 변경에 따른 합리적 이유 없는 임금 삭감은 불이익한 처우 정황으로 평가될 여지가 있는 영역입니다.',
      },
      {
        question: '5인 미만 사업장인데 복직 거부됐어요',
        answer:
          '<strong>노동위 구제 트랙은 제한되지만 민사 트랙이 열립니다.</strong> 해고무효확인 소송 + 노무 수령 거부 기간 임금 청구(민법 제538조) 검토. 법률구조공단 132 무료 상담을 검토할 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '병가·산재 후 해고 방어', href: '/guide/dismissal/dismissal-injury-recovery-period-rejection' },
      { label: '병가 종료 후 즉시 해고', href: '/guide/dismissal/dismissal-sick-leave-return-fired' },
      { label: '육아휴직 후 즉시 해고', href: '/guide/dismissal/dismissal-parental-leave-fired' },
      { label: '출산휴가 복귀 즉시 해고', href: '/guide/dismissal/dismissal-maternity-return-fired' },
      { label: '전직·강등 부당해고', href: '/guide/dismissal/dismissal-transfer-demotion-constructive' },
    ],
  },

  // ─── 3. dismissal / dismissal-overseas-assignment-refusal-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-overseas-assignment-refusal-fired',
    keyword: '해외파견 거부 인사명령 부당해고',
    questionKeyword: '갑자기 해외 지사로 발령 났는데 가족 사정으로 거부했더니 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '인사명령 거부 해고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '해외파견 거부 후 해고 — 4가지 다툼 포인트 | 로앤가이드',
      description:
        '해외파견·원거리 전보 거부를 이유로 해고됐다면 인사명령의 업무상 필요성·생활상 불이익·신의칙 위반 4단계 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전 갑자기 \'두바이 지사로 1년 파견\' 인사명령을 받았어요. 부모님 간병과 자녀 학교 사정으로 가기 어렵다고 거부했더니, 회사가 \'명령 불복종\'이라며 징계해고를 통보했습니다." 인사명령 거부에 따른 해고는 형식상 정당사유가 있는 듯 보이지만, 대법원 일관 판례는 인사명령의 정당성을 ① 업무상 필요성 ② 근로자 생활상 불이익 ③ 신의칙상 절차 4가지로 종합 판단합니다. 특히 광범위 인사명령이라도 근로자가 입는 생활상 불이익이 통상 감수해야 할 정도를 현저히 초과하면 권리남용에 해당해 거부가 정당화되는 영역으로, 이를 사유로 한 해고도 무효 정황으로 평가될 여지가 있습니다. 해고일로부터 3개월 이내라면 노동위 부당해고 구제신청 트랙을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외파견 거부 해고에서 점검할 4가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무상 필요성·생활상 불이익·신의칙 절차·근로계약 범위 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무상 필요성 (인사명령 자체)</strong> — 해외파견·전보의 사업상 합리성·인적 적격성·대체인력 검토 충분 여부. 형식상 발령만 있고 실질 필요성 입증이 약하면 다툼 자료.</li>\n<li><strong>② 근로자 생활상 불이익</strong> — 가족 동반 곤란·자녀 교육·간병 의무·주거 이동 부담 등. 통상 감수 범위를 현저히 초과하는 영역이라면 권리남용 다툼 자료.</li>\n<li><strong>③ 신의칙상 절차 (협의·대안 제시)</strong> — 사전 협의·근로자 의견 청취·대안 직무 제시 절차. 회사 일방적 통보만 있고 협의 부재면 절차 위반 정황.</li>\n<li><strong>④ 근로계약·취업규칙 범위</strong> — 근로계약서·취업규칙에 해외근무·전보 가능성이 명시됐는지. 명시 없는 광범위 인사명령은 동의 영역으로 검토될 여지가 있는 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인사명령이 권리남용으로 평가되면 그 명령 거부는 정당사유가 있는 행위가 되어, 이를 이유로 한 징계해고도 무효 정황으로 평가될 여지가 있는 영역입니다. 발령 통보·생활상 불이익 자료·협의 부재 정황을 시간순 정리하는 것이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 인사명령 거부 해고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고 구제 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 인사명령·생활상 불이익 자료 보존 (즉시)</strong> — 발령통지서·근로계약서·취업규칙·가족관계증명서·간병자료·자녀 학교 자료·주거 이동 부담 자료.</li>\n<li><strong>2단계 — 회사에 협의·대안 직무 서면 요구 (3~7일)</strong> — 내용증명으로 "인사명령 변경 또는 대안 직무 협의 요청" 통지. 회사 무대응 자체가 신의칙 위반 다툼 자료.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (해고일 3개월 이내)</strong> — 인사명령 권리남용 + 정당사유 부재 두 트랙 주장. 사업장 관할 지방노동위.</li>\n<li><strong>4단계 — 심문회의 (접수일 60일 이내)</strong> — 업무상 필요성 부족·생활상 불이익 현저성·협의 부재 입증. 회사 측 인사명령 정당성 입증부담이 무거운 영역.</li>\n<li><strong>5단계 — 판정·민사 병행</strong> — 인용 시 원직복직 + 임금상당액. 5인 미만이거나 노동위 트랙이 어려우면 민사 해고무효확인 + 인사명령 효력 다툼 별도 트랙 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">인사명령 권리남용 + 부당해고 결합 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 인사명령 자료 + 생활상 불이익 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>인사발령통지서·발령 근거 사규</strong> — 발령 시점·근거 조항·기간 명시.</li>\n<li><strong>근로계약서·취업규칙</strong> — 해외근무·전보 가능 범위 명문 규정.</li>\n<li><strong>가족관계증명서·주민등록등본</strong> — 부양가족·간병 대상 가족 입증.</li>\n<li><strong>병원 진단서·간병자료</strong> — 가족 간병 의무 객관적 입증.</li>\n<li><strong>자녀 학교 자료·재학증명서</strong> — 교육 환경 변경 부담 입증.</li>\n<li><strong>회사와의 협의·거부 사유 통지 자료</strong> — 메일·카톡·내용증명. 신의칙 절차 다툼 자료.</li>\n<li><strong>해고통보서·징계의결서</strong> — 해고 사유 명시·서면통지 의무 이행 여부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인사명령 거부 사유를 회사에 서면으로 미리 충분히 알리고 대안을 제시한 자료가 있으면 "근로자 측 신의칙 준수 + 회사 측 협의 부재" 정황으로 다툼 트랙이 강해지는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"인사명령은 사용자 재량" 주장 반박</strong> — 재량이지만 권리남용 한계가 있는 영역. 업무상 필요성 부족 + 생활상 불이익 현저 + 협의 부재 결합 시 권리남용 다툼이 가능합니다.</li>\n<li><strong>"명령 불복종은 즉시 해고 사유" 주장 반박</strong> — 인사명령 자체가 권리남용이면 불복종이 정당화되는 영역. 대법원 일관 판례는 명령 정당성을 먼저 검토하도록 보았습니다.</li>\n<li><strong>"근로계약서에 해외근무 동의 조항 있다" 주장 반박</strong> — 포괄적·추상적 조항만으로 모든 해외파견을 정당화하기 어려운 사례. 구체적 사안의 비례성·대안 검토가 별도 필요한 영역.</li>\n<li><strong>"가족 사정은 개인 문제" 주장 반박</strong> — 부양·간병 의무는 통상 감수해야 할 범위를 초과하는 생활상 불이익으로 평가될 수 있는 영역. 객관적 자료가 핵심.</li>\n<li><strong>해고예고수당 별도 청구</strong> — 인사명령 거부 해고에서도 30일 미예고 시 30일분 통상임금 청구 가능. 노동청 임금체불 진정 별도 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·인사명령 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>고용노동부 1350 / 노동포털 (labor.moel.go.kr)</strong> — 임금체불·해고예고수당 진정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — PIP·근무성적 부진 해고의 사회통념상 정당성 판단기준 (인사명령 거부 해고에도 적용)',
        summary:
          '대법원 2018다253680 사건(대법원, 2021.02.25 선고)에서 법원은 사용자가 취업규칙상 사유로 근로자를 해고할 때 단순 미달·불복종이 아니라 사회통념상 고용관계를 계속할 수 없을 정도의 사정이 있어야 한다고 보면서, 평가의 객관성·공정성, 향상기회의 실질성, 근로자의 노력 정도, 다른 직무 배치 가능성 검토 등을 종합 판단해야 한다고 판시했습니다. 인사명령 거부 해고 사안에도 동일 법리가 적용되어, 회사 측이 명령 정당성 + 거부의 중대성을 입증해야 하는 영역으로 평가될 여지가 있습니다.',
        takeaway: '인사명령 거부 해고는 명령 자체의 정당성 + 거부의 중대성 + 다른 직무 배치 가능성을 회사가 종합 입증해야 하는 사례가 있어, 발령 자료·생활상 불이익 자료·협의 부재 정황을 시간순 정리하면 다툼 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 "회사 인사명령에 따른다"고 돼 있는데 거부 가능한가요?',
        answer:
          '<strong>포괄 조항만으로 모든 인사명령이 정당화되지는 않습니다.</strong> 구체적 사안에서 업무상 필요성·생활상 불이익·신의칙 절차를 종합 판단하는 영역으로, 거부 사유가 합리적이라면 다툼 트랙이 열리는 사례가 있습니다.',
      },
      {
        question: '부모 간병이 거부 사유로 인정되나요?',
        answer:
          '<strong>객관적 자료가 있다면 생활상 불이익으로 평가될 수 있는 영역입니다.</strong> 진단서·간병 일지·간병인 미이용 정황 등으로 통상 감수 범위 초과를 입증하면 권리남용 다툼 자료가 됩니다.',
      },
      {
        question: '회사가 협의 없이 일방 통보했어요',
        answer:
          '<strong>신의칙 절차 위반 다툼 자료가 됩니다.</strong> 사전 협의·의견 청취·대안 직무 제시 절차가 누락된 인사명령은 절차상 하자 정황으로 평가될 여지가 있는 영역입니다.',
      },
      {
        question: '회사가 "안 가면 해고"라고 압박합니다',
        answer:
          '<strong>회사 측 압박 자체도 신의칙 위반 정황 자료입니다.</strong> 협의·대안 검토 없이 즉시 해고 위협만 반복했다면 정당한 인사명령 절차로 보기 어려운 사례가 있어, 녹취·문자 보존을 검토하세요.</p><p>',
      },
      {
        question: '일단 파견 가서 다툰 다음에 돌아올 수 있나요?',
        answer:
          '<strong>가능하지만 동의 정황으로 해석될 위험이 있습니다.</strong> 발령에 응하면서 "이의 유보"를 명시한 서면을 회사에 보내고 가는 것이 안전. 그래야 추후 다툼 시 묵시적 동의 주장에 반박 자료가 되는 영역입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '근무지 변경 거부 정당성', href: '/guide/dismissal/dismissal-business-relocation-distant-refuse' },
      { label: '경영상 직무 폐지 통상해고', href: '/guide/dismissal/dismissal-hr-system-restructure-position-deletion' },
      { label: '단일 사건 즉시 해고', href: '/guide/dismissal/dismissal-disciplinary-warning-no-defense-chance' },
      { label: '강요 사직서 진의 다툼', href: '/guide/dismissal/dismissal-forced-resignation-letter-invalidation' },
      { label: '경영상 임금삭감 거부 해고', href: '/guide/dismissal/dismissal-economic-layoff-paycut-refusal' },
    ],
  },
];
