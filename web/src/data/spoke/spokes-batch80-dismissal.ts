import { SpokePage } from '../spoke-pages';

// batch80 dismissal — 3개 (2026-05-28)
//
// 고유 존재 이유:
// 1. 해고예고수당 미지급 + 노동위 구제 병행 — batch79(사직강요·시용부상·저성과평가·대기발령면직) 및 단순 해고예고수당 계산류와 분기. 여기는 '30일 전 예고 없이 해고됐는데 해고가 유효한지와 무관하게 받아야 할 해고예고수당을 못 받았고, 부당해고 구제까지 함께 정리하려는' 절차형 트랙. 예고수당은 해고 효력과 별개로 지급되는 돈이라는 점이 핵심.
// 2. 경영상 정리해고 4요건 다툼 — 단순 구조조정·정리해고류와 분기. 여기는 '회사가 경영난을 이유로 정리해고했는데 긴박한 경영상 필요·해고회피노력·공정한 대상선정·근로자대표 협의 4요건이 실제로 충족됐는지' 판단형 트랙. 4요건 종합판단·유동적 충족이 핵심.
// 3. 징계위원회 진술·소명 기회 미부여 절차 위반 — 단순 징계 과중·재심류와 분기. 여기는 '징계해고를 당했는데 징계위원회 출석·변명 기회를 받지 못한' 절차형 트랙. 진술기회 미부여 시 징계사유 존부와 관계없이 절차의 정의 위반으로 무효가 되는지가 핵심.

export const spokesBatch80Dismissal: SpokePage[] = [
  // ─── 1. dismissal-relief-application-notice-pay-unpaid-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-relief-application-notice-pay-unpaid-track',
    keyword: '해고예고수당 미지급 부당해고 구제',
    questionKeyword: '어느 날 갑자기 "내일부터 안 나와도 된다"는 통보를 받고 해고됐는데, 30일 전 예고도 없었고 해고예고수당도 못 받았어요. 부당해고 구제신청과 예고수당을 같이 정리할 수 있나요?',
    ctaKeyword: '해고예고수당 미지급·부당해고 구제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해고예고수당 미지급 — 5단계 구제신청·30일 예고 점검 | 로앤가이드',
      description:
        '30일 전 예고 없이 갑자기 해고됐는데 해고예고수당도 못 받았다면 예고수당 청구·부당해고 구제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"별다른 경고나 면담도 없이 어느 날 "내일부터 나오지 말라"는 말 한마디로 해고를 통보받았습니다. 30일 전에 미리 알려준 것도 아니고, 그렇다고 한 달치 급여에 해당하는 해고예고수당을 챙겨준 것도 아니었어요. 당장 다음 달 생활이 막막한데, 회사는 "해고가 정당했으니 줄 게 없다"는 식입니다. 예고수당이라도 받을 수 있는 건지, 부당해고로 다투는 것과 같이 정리할 수 있는 건지 헷갈리는 상황입니다." 근로기준법 제26조는 사용자가 근로자를 해고하려면 적어도 30일 전에 예고를 하여야 하고 30일 전에 예고를 하지 아니하였을 때에는 30일분 이상의 통상임금을 해고예고수당으로 지급하여야 한다고 규정하는 영역이고, 같은 법 제28조는 사용자가 정당한 이유 없이 해고하면 근로자가 노동위원회에 구제신청을 할 수 있다고 규정하는 영역입니다. 판례는 해고예고수당이 해고가 유효한지와 관계없이 지급되어야 하는 돈으로, 해고가 부당해고에 해당해 효력이 없더라도 이미 지급된 예고수당을 부당이득으로 반환할 의무가 없다고 본 사례 흐름이 있습니다. 예고 없는 즉시 해고 + 예고수당 미지급 + 부당해고 의심 결합은 \'예고수당 청구·부당해고 구제\' 다툼이 가능한 트랙입니다. 피해자라면 ① 예고 여부 ② 예고수당 미지급 ③ 해고 부당성 ④ 노동위 구제 ⑤ 임금체불 진정 5중 트랙이 가능한 영역. 대응은 ① 예고 ② 수당 ③ 부당성 ④ 노동위 ⑤ 진정 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해고예고수당 미지급 부당해고 구제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 예고 여부·예고수당·해고 부당성·구제·임금체불 진정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 예고 여부</strong> — 해고일로부터 적어도 30일 전에 예고를 받았는지, 즉시 통보였는지.</li>\n<li><strong>② 예고수당 미지급</strong> — 근로기준법 제26조: 30일 전 예고 없이 해고하면 30일분 이상 통상임금을 받았어야 하는지.</li>\n<li><strong>③ 해고 부당성</strong> — 근로기준법 제23조: 정당한 이유 없는 해고로 다툴 여지가 있는지.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액 청구.</li>\n<li><strong>⑤ 임금체불·예고수당 진정</strong> — 고용노동부 진정으로 미지급 예고수당 별도 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 해고예고수당은 해고가 유효한지와 관계없이 지급되어야 하는 돈으로, 해고가 부당해 무효라도 이미 받은 예고수당을 돌려줄 의무가 없는 영역. 따라서 예고수당 미지급은 부당해고 다툼과 별개로 청구할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보 자료 보존 (즉시)</strong> — 해고 통보 메시지·구두 통보 정황·최종 근무일 등 예고 부재 자료.</li>\n<li><strong>2단계 — 예고수당 산정 정리 (1주)</strong> — 통상임금 30일분 산정 + 급여명세서로 미지급액 정리.</li>\n<li><strong>3단계 — 해고 부당성 자료 (2주)</strong> — 해고 사유·경위·서면통지 여부 등 부당해고 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 고용노동부 임금체불 진정 (병행)</strong> — 미지급 예고수당 별도 진정으로 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해고예고수당 미지급·부당해고 구제 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 예고 부재·예고수당·해고 부당성 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보 자료 (문자·메신저·녹취·최종 근무일 메모)</strong></li>\n<li><strong>예고 시점 입증 자료 (통보일과 최종 근무일 간격 정리)</strong></li>\n<li><strong>급여명세서·통상임금 산정 자료 (예고수당 30일분 계산)</strong></li>\n<li><strong>근로계약서·재직 기간 입증 자료</strong></li>\n<li><strong>해고 사유·경위 자료 (부당해고 정황)</strong></li>\n<li><strong>서면 해고통지서 또는 그 부재 정황 자료</strong></li>\n<li><strong>예고수당 지급 요청·회사 답변 교신 내역</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해고 통보일과 실제 마지막 근무일 사이 간격이 30일에 미치지 못한다는 점을 시간선으로 명확히 해두는 것이 핵심. 예고수당은 해고가 정당했는지와 별개로 받아야 하는 돈이므로, 부당해고를 다투기 어려운 상황이라도 예고수당 미지급만은 임금체불 진정으로 따로 청구해볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>예고수당의 독립성</strong> — 예고수당이 해고 유효 여부와 무관하게 지급되어야 하는 돈인지.</li>\n<li><strong>30일 예고 충족</strong> — 통보일과 최종 근무일 간격이 30일 이상이었는지.</li>\n<li><strong>예고 예외 사유</strong> — 천재지변·근로자 귀책 등 예고 예외에 해당하는지 여부.</li>\n<li><strong>구제·진정 병행</strong> — 노동위 부당해고 구제와 고용노동부 임금체불 진정을 함께 진행할 수 있는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성·예고 예외 입증은 사용자, 통보 시점·미지급 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고예고수당은 해고 유효 여부와 무관하게 지급',
        summary:
          '대법원 2017다16778(대법원, 2018.09.13 선고) 영역에서 법원은 근로기준법 제26조 본문에 따라 사용자가 근로자를 해고하면서 30일 전에 예고를 하지 아니하였을 때 근로자에게 지급하는 해고예고수당은 해고가 유효한지와 관계없이 지급되어야 하는 돈이고, 해고가 부당해고에 해당하여 효력이 없다고 하더라도 근로자가 해고예고수당을 지급받을 수 있다고 보면서, 이미 지급된 해고예고수당을 부당이득으로 반환할 의무가 있다고 볼 수 없다고 판시했습니다. 예고 없는 즉시 해고 사안에서는 부당해고 다툼과 별개로 예고수당 청구를 검토해볼 수 있습니다.',
        takeaway: '예고 없는 즉시 해고 + 예고수당 미지급 결합 시 예고수당은 해고 효력과 별개로 청구 가능 영역 — 노동위 구제신청·고용노동부 진정 병행 권장.',
      },
    ],
    faq: [
      {
        question: '해고가 정당하다면 예고수당은 못 받나요?',
        answer:
          '<strong>예고수당은 해고가 유효한지와 관계없이 30일 전 예고를 하지 않았다면 지급되어야 하는 돈인 영역입니다.</strong> 통보일·최종 근무일 간격 정리가 우선.',
      },
      {
        question: '예고수당과 부당해고 구제를 같이 진행할 수 있나요?',
        answer:
          '<strong>노동위 부당해고 구제신청과 고용노동부 임금체불 진정을 병행해볼 수 있는 영역입니다.</strong> 두 절차의 자료를 함께 준비.',
      },
      {
        question: '예고수당은 얼마나 받을 수 있나요?',
        answer:
          '<strong>근로기준법 제26조에 따라 30일분 이상의 통상임금이 기준이 되는 영역입니다.</strong> 급여명세서로 통상임금을 산정해 미지급액을 정리.',
      },
      {
        question: '문자 한 통으로 해고됐는데 예고 안 한 게 맞나요?',
        answer:
          '<strong>해고일로부터 적어도 30일 전 예고가 없었다면 예고 의무를 충족하지 못한 정황으로 볼 수 있는 영역입니다.</strong> 통보 메시지·최종 근무일을 보존.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '30일 예고 위반 청구', href: '/guide/dismissal/dismissal-notice-pay-30days-violation-claim' },
      { label: '문자 통보 해고 위법', href: '/guide/dismissal/dismissal-text-message-tomorrow-no-come-illegal' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-economic-layoff-urgent-need-avoidance-effort-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-economic-layoff-urgent-need-avoidance-effort-track',
    keyword: '경영상 정리해고 긴박한 경영상 필요 해고회피노력',
    questionKeyword: '회사가 "경영이 어렵다"며 저를 정리해고했는데, 실제로 그렇게 급박한 상황이었는지도 의문이고 해고를 피하려는 노력도 없었던 것 같아요. 정리해고 요건을 따져 다툴 수 있나요?',
    ctaKeyword: '경영상 정리해고 요건 다툼 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '경영상 정리해고 — 5단계 4요건(긴박성·회피노력) 점검 | 로앤가이드',
      description:
        '회사가 경영난을 이유로 정리해고했는데 긴박한 경영상 필요·해고회피노력이 의문이라면 정리해고 4요건 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 부서가 통째로 어려워졌다는 이유로 어느 날 정리해고 대상자 명단에 제 이름이 올라 있었습니다. 회사는 "경영이 워낙 힘들어 어쩔 수 없다"고만 했는데, 정작 임원 급여나 신규 채용은 그대로였고 무급휴직·전환배치 같은 다른 방법을 검토했다는 이야기는 듣지 못했어요. 대상자를 어떤 기준으로 골랐는지, 근로자 대표와 협의를 거쳤는지도 설명이 없었습니다. 정말 이게 정당한 정리해고인지 따져볼 수 있는 건지 막막한 상황입니다." 근로기준법 제24조는 사용자가 경영상 이유에 의하여 근로자를 해고하려면 긴박한 경영상의 필요가 있어야 하고, 해고를 피하기 위한 노력을 다하여야 하며, 합리적이고 공정한 기준에 따라 대상자를 선정하여야 하고, 해고를 피하기 위한 방법과 해고 기준 등을 근로자대표에게 해고 실시일 50일 전까지 통보하고 성실하게 협의하여야 한다고 규정하는 영역입니다. 판례는 긴박한 경영상 필요란 반드시 도산을 회피하기 위한 경우에 한정되지 않고 장래 위기에 미리 대처하기 위한 인원삭감이 객관적으로 합리성이 있는 경우도 포함되며, 위 각 요건은 확정적·고정적인 것이 아니라 구체적 사건에서 다른 요건의 충족 정도와 관련하여 유동적으로 정해지므로 종합적으로 고려해 정당성을 판단한다고 본 사례 흐름이 있습니다. 경영난 주장 + 해고회피노력 의문 + 대상선정·협의 불투명 결합은 \'정리해고 4요건\' 다툼이 가능한 트랙입니다. 피해자라면 ① 긴박한 경영상 필요 ② 해고회피노력 ③ 공정한 대상선정 ④ 근로자대표 협의 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 긴박성 ② 회피 ③ 선정 ④ 협의 ⑤ 구제 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 경영상 정리해고 4요건 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 긴박한 경영상 필요·해고회피노력·공정한 대상선정·근로자대표 협의·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요</strong> — 인원삭감이 객관적으로 합리성이 있는 긴박한 경영상 필요에 기한 것인지.</li>\n<li><strong>② 해고회피노력</strong> — 전환배치·무급휴직·희망퇴직·경비절감 등 해고를 피하려는 노력을 다했는지.</li>\n<li><strong>③ 공정한 대상선정</strong> — 합리적이고 공정한 기준에 따라 해고 대상자를 선정했는지.</li>\n<li><strong>④ 근로자대표 협의</strong> — 근로기준법 제24조: 해고 실시일 50일 전까지 통보·성실 협의를 거쳤는지.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 4요건 미충족 + 정리해고 부당성 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 정리해고 4요건은 확정적·고정적인 것이 아니라 다른 요건의 충족 정도와 관련하여 유동적으로 정해지므로 개별 사정을 종합적으로 고려해 정당성을 판단하는 영역. 어느 한 요건이라도 충족 정도가 약하면 정리해고 정당성을 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정리해고 통보 자료 보존 (즉시)</strong> — 정리해고 통보서·경영상 사유 설명·대상자 명단 자료 보존.</li>\n<li><strong>2단계 — 긴박성·회피노력 정리 (1주)</strong> — 회사 재무 상황, 임원 급여·신규 채용·다른 절감 방법 검토 여부 정리.</li>\n<li><strong>3단계 — 대상선정·협의 자료 (2주)</strong> — 대상자 선정 기준의 합리성·공정성 + 근로자대표 50일 전 통보·협의 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 4요건 미충족 + 정리해고 부당성 다툼.</li>\n<li><strong>5단계 — 우선 재고용·민사 검토</strong> — 사후 재고용 의무 위반·정신적 위자료 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경영상 정리해고 요건 다툼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 긴박성·회피노력·대상선정·협의 갈래입니다.</strong></p>\n<ul>\n<li><strong>정리해고 통보서·경영상 사유 설명 자료</strong></li>\n<li><strong>회사 재무·경영 상황 자료 (긴박성 판단)</strong></li>\n<li><strong>해고회피노력 정황 (전환배치·무급휴직·희망퇴직·경비절감 검토 여부)</strong></li>\n<li><strong>대상자 선정 기준·명단 자료 (합리성·공정성 판단)</strong></li>\n<li><strong>근로자대표 통보·협의 경위 자료 (50일 전 통보 여부)</strong></li>\n<li><strong>임원 급여·신규 채용 등 절감 외 정황 자료</strong></li>\n<li><strong>근로계약서·급여명세서·재직 기간 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 4요건은 서로 연동되어 종합 판단되므로, 회사가 "경영이 어렵다"고만 주장할 뿐 임원 급여·신규 채용을 그대로 둔 채 다른 회피 방법을 시도하지 않았다거나 대상자 선정 기준이 불투명하고 근로자대표 협의를 형식적으로 거쳤다는 정황을 함께 모으는 것이 핵심. 어느 한 요건의 충족 정도가 약하면 다른 요건과 결합해 정리해고 정당성을 다툴 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>긴박한 경영상 필요</strong> — 인원삭감이 객관적으로 합리성 있는 긴박한 필요에 기한 것인지.</li>\n<li><strong>해고회피노력 충분성</strong> — 전환배치·무급휴직·희망퇴직 등 해고 회피 노력을 다했는지.</li>\n<li><strong>대상선정 공정성</strong> — 선정 기준이 합리적이고 공정했는지, 특정인 표적 정황은 없는지.</li>\n<li><strong>근로자대표 협의</strong> — 50일 전 통보와 성실 협의가 형식적이지 않았는지.</li>\n<li><strong>입증책임 부담</strong> — 4요건 충족·정리해고 정당성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경영상 정리해고 4요건의 종합적·유동적 판단',
        summary:
          '대법원 2001다29452(대법원, 2002.07.09 선고) 영역에서 법원은 사용자가 경영상 이유에 의하여 근로자를 해고하려면 긴박한 경영상의 필요가 있어야 하고 해고를 피하기 위한 노력을 다하여야 하며 합리적이고 공정한 기준에 따라 대상자를 선정하여야 하고 근로자대표에게 통보하고 성실하게 협의하여야 하는데, 긴박한 경영상의 필요란 반드시 기업 도산을 회피하기 위한 경우에 한정되지 않고 장래에 올 수도 있는 위기에 미리 대처하기 위한 인원삭감이 객관적으로 보아 합리성이 있다고 인정되는 경우도 포함되며, 위 각 요건의 구체적 내용은 확정적·고정적인 것이 아니라 구체적 사건에서 다른 요건의 충족 정도와 관련하여 유동적으로 정해지므로 개별 사정들을 종합적으로 고려하여 정당성을 판단하여야 한다고 판시했습니다. 정리해고 대응 시 4요건의 충족 정도를 함께 검토해볼 수 있습니다.',
        takeaway: '경영난 주장 + 해고회피노력 의문 + 대상선정·협의 불투명 결합 시 정리해고 4요건 종합판단으로 정당성 다툼 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '회사가 경영이 어렵다고만 하면 정리해고가 정당한가요?',
        answer:
          '<strong>긴박한 경영상 필요·해고회피노력·공정한 대상선정·근로자대표 협의 4요건을 종합 판단하는 영역입니다.</strong> 회사 재무·회피노력 자료 정리가 우선.',
      },
      {
        question: '도산할 정도가 아닌데도 긴박한 경영상 필요로 보나요?',
        answer:
          '<strong>긴박한 경영상 필요는 도산 회피에 한정되지 않고 장래 위기 대처를 위한 합리적 인원삭감도 포함될 수 있는 영역입니다.</strong> 다만 객관적 합리성이 다툼 대상입니다.',
      },
      {
        question: '해고를 피하려는 노력을 안 한 것 같은데 다툴 수 있나요?',
        answer:
          '<strong>전환배치·무급휴직·희망퇴직 등 해고회피노력을 다했는지가 4요건의 핵심 사정입니다.</strong> 임원 급여·신규 채용 등 절감 외 정황을 함께 정리.',
      },
      {
        question: '대상자를 어떻게 골랐는지 설명을 못 들었어요',
        answer:
          '<strong>합리적이고 공정한 기준에 따른 대상 선정인지, 특정인 표적 정황은 없는지가 다툼 대상이 되는 영역입니다.</strong> 선정 기준·명단 자료를 확보.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '정리해고 긴박성 부재', href: '/guide/dismissal/dismissal-redundancy-no-urgent-need-track' },
      { label: '정리해고 50일 협의 위반', href: '/guide/dismissal/dismissal-collective-redundancy-50days-consultation-violation' },
      { label: '구조조정 대상선정 기준', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-disciplinary-no-statement-opportunity-procedural-void-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disciplinary-no-statement-opportunity-procedural-void-track',
    keyword: '징계위원회 진술 기회 미부여 절차 위반',
    questionKeyword: '취업규칙에 징계위원회에서 소명할 기회를 준다고 돼 있는데, 회사는 저를 부르지도 않고 변명할 기회도 없이 징계해고했어요. 절차를 어긴 해고로 다툴 수 있나요?',
    ctaKeyword: '징계 진술 기회 미부여 절차 위반 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '징계 진술 기회 미부여 — 5단계 절차 위반 무효 점검 | 로앤가이드',
      description:
        '취업규칙상 소명 기회를 줘야 하는데 변명 기회 없이 징계해고됐다면 진술 기회·절차 위반 무효 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사 취업규칙에는 징계할 때 징계위원회를 열어 당사자에게 출석해 소명할 기회를 준다고 분명히 적혀 있습니다. 그런데 어느 날 통보 한 장으로 징계해고가 됐고, 저는 징계위원회에 불려 가지도 못했고 무엇이 문제였는지 변명할 자리도 전혀 없었어요. 제가 잘못한 게 있다 하더라도 최소한 해명할 기회는 줬어야 하는 것 아닌가 싶은데, 절차를 건너뛴 해고도 다툴 수 있는 건지 막막한 상황입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 근로자를 해고하지 못한다고 규정하는 영역이고, 판례는 취업규칙 등 징계규정에서 징계대상자에게 징계위원회에 출석하여 변명과 소명자료를 제출할 기회를 부여하도록 정하고 있음에도 이러한 절차를 위반하여 징계해고를 하였다면 그 징계권 행사는 징계사유가 인정되는지와 관계없이 절차의 정의에 반하여 무효라고 본 사례 흐름이 있습니다. 징계규정상 진술 기회 보장 + 출석·변명 기회 미부여 + 통보식 해고 결합은 \'진술 기회 미부여·절차 위반 무효\' 다툼이 가능한 트랙입니다. 피해자라면 ① 징계규정 절차 ② 진술 기회 부여 ③ 절차 위반 무효 ④ 노동위 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 규정 ② 진술 ③ 무효 ④ 노동위 ⑤ 민사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 징계 진술 기회 미부여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 징계규정 절차·진술 기회·절차 위반 무효·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 징계규정 절차</strong> — 취업규칙·징계규정에 출석·변명·소명자료 제출 기회를 정하고 있는지.</li>\n<li><strong>② 진술 기회 부여</strong> — 실제로 징계위원회 출석·변명 기회가 부여됐는지, 통보로 갈음했는지.</li>\n<li><strong>③ 절차 위반 무효</strong> — 진술 기회 미부여 시 징계사유 존부와 관계없이 절차의 정의 위반으로 무효인지.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 절차 위반 + 징계해고 부당성 결합 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 징계규정이 출석·변명 기회를 정하고 있는데도 이를 위반해 징계해고를 했다면, 징계사유가 인정되는지와 관계없이 절차의 정의에 반하여 무효로 평가될 수 있는 영역. 통보 한 장으로 변명 기회 없이 해고됐다면 절차 위반 무효 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 징계규정·통보 자료 보존 (즉시)</strong> — 취업규칙·징계규정 중 절차 조항 + 징계해고 통보서 보존.</li>\n<li><strong>2단계 — 진술 기회 부재 정리 (1주)</strong> — 징계위원회 출석 통지·변명 기회 부여 여부, 통보로 갈음한 정황 정리.</li>\n<li><strong>3단계 — 절차 위반 자료 (2주)</strong> — 규정상 절차와 실제 진행 간 차이·소명자료 제출 기회 부재 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 절차 위반 + 징계해고 부당성 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">징계 진술 기회 미부여 절차 위반 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 징계규정 절차·진술 기회·절차 위반 갈래입니다.</strong></p>\n<ul>\n<li><strong>취업규칙·징계규정 중 절차 조항 (출석·변명·소명 기회)</strong></li>\n<li><strong>징계해고 통보서 원본 (절차 기재 내용 그대로)</strong></li>\n<li><strong>징계위원회 출석 통지 여부 자료 (통지서 또는 그 부재)</strong></li>\n<li><strong>변명·소명자료 제출 기회 부여 여부 자료</strong></li>\n<li><strong>징계 경위·교신 내역 (절차 진행 정황)</strong></li>\n<li><strong>근로계약서·급여명세서·재직 기간 입증 자료</strong></li>\n<li><strong>동료·동석자 진술 (절차 부재 정황 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 취업규칙·징계규정에 출석·변명·소명자료 제출 기회를 보장하는 조항이 있다는 점과, 실제로는 그러한 기회 없이 통보만으로 징계해고가 이루어졌다는 점을 함께 정리하는 것이 핵심. 진술 기회 미부여는 징계사유가 인정되는지와 관계없이 절차의 정의 위반으로 다툴 수 있는 사정으로 활용될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>징계규정 존재</strong> — 취업규칙·징계규정에 출석·변명·소명 기회가 정해져 있는지.</li>\n<li><strong>진술 기회 부여</strong> — 실제로 출석·변명·소명자료 제출 기회가 부여됐는지가 핵심.</li>\n<li><strong>절차의 정의</strong> — 진술 기회 미부여 시 징계사유 존부와 무관하게 무효로 평가되는지.</li>\n<li><strong>심리 대상 범위</strong> — 징계위원회가 요구된 사유만 심리해야 하는데 다른 사유를 추가했는지.</li>\n<li><strong>입증책임 부담</strong> — 절차 준수·징계 정당성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술 기회 미부여 징계해고의 절차적 무효',
        summary:
          '대법원 2010다100919(대법원, 2012.01.27 선고) 영역에서 법원은 취업규칙 등 징계규정에서 징계위원회가 징계대상자에게 진술의 기회를 부여하고 이익되는 사실을 증명할 수 있도록 하며 징계대상자에게 징계위원회에 출석하여 변명과 소명자료를 제출할 기회를 부여하도록 되어 있음에도 이러한 징계절차를 위반하여 징계해고하였다면, 그 징계권의 행사는 징계사유가 인정되는지와 관계없이 절차의 정의에 반하여 무효라고 보아야 한다고 판시했습니다. 아울러 징계위원회는 징계의결이 요구된 징계사유만을 심리·판단하여야 하고 그 밖의 징계사유를 추가하여 의결할 수 없다고 보았습니다. 진술 기회 없는 징계해고 사안에서는 절차 위반 여부를 중점적으로 검토해볼 수 있습니다.',
        takeaway: '징계규정상 진술 기회 보장 + 출석·변명 기회 미부여 + 통보식 해고 결합 시 징계사유 존부와 무관하게 절차 위반 무효 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '제가 잘못한 게 있어도 절차를 어기면 무효가 되나요?',
        answer:
          '<strong>징계규정상 진술 기회를 위반했다면 징계사유가 인정되는지와 관계없이 절차의 정의 위반으로 무효가 될 수 있는 영역입니다.</strong> 징계규정·통보 자료 보존이 우선.',
      },
      {
        question: '취업규칙에 소명 기회를 준다고 돼 있는데 안 줬어요',
        answer:
          '<strong>규정에 출석·변명·소명 기회가 정해져 있는데 이를 부여하지 않았는지가 절차 위반 다툼의 핵심입니다.</strong> 출석 통지 부재·통보로 갈음한 정황을 정리.',
      },
      {
        question: '징계위원회가 열리긴 했는데 다른 사유를 추가했어요',
        answer:
          '<strong>징계위원회는 의결이 요구된 사유만 심리·판단해야 하고 다른 사유를 추가할 수 없는 영역입니다.</strong> 의결 요구 사유와 실제 처분 사유의 차이를 정리.',
      },
      {
        question: '통보 한 장으로 징계해고됐는데 다툴 수 있나요?',
        answer:
          '<strong>변명 기회 없이 통보만으로 징계해고했다면 절차 위반 무효로 다툴 수 있는 영역입니다.</strong> 변명·소명 기회 부재 정황을 함께 정리.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '징계 출석·소명권', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '소명 기회 없는 징계', href: '/guide/dismissal/dismissal-disciplinary-warning-no-defense-chance' },
      { label: '재심 절차 하자 무효', href: '/guide/dismissal/dismissal-disciplinary-rehearing-procedural-defect' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },
];
