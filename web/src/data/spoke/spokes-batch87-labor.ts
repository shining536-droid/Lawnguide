import { SpokePage } from '../spoke-pages';

// batch87 dismissal(3) + wage(2) + unemployment(2) + retirement(2) + industrial-accident(1) — 10개 (2026-06-04)
//
// 고유 존재 이유:
// 1. dismissal-probation-evaluation-track — batch86 병가복귀/외국인/근태 분기와 달리 '수습 평가 부적격 해고와 이력서 학력 등 허위기재 징계해고의 사회통념상 고용계속 불가능성' 판단형 트랙. 수습 평가 정당성·허위기재 책임 정도가 핵심.
// 2. dismissal-disciplinary-procedure-track — batch86 분기와 달리 '취업규칙상 징계위 출석통지 등 절차 위반 해고 무효와 스스로 출석·소명 시 하자 치유·해고 정당성 입증책임(사용자)' 판단형 트랙. 징계절차 하자·치유와 입증책임이 핵심.
// 3. dismissal-pregnancy-maternity-track — batch86 분기와 달리 '임신·출산 전후 불이익 해고와 일부 사업부문 폐지 통상해고·경영상 해고 요건(긴박한 경영상 필요·해고회피 노력)' 판단형 트랙. 일부 폐지 통상해고·경영상 해고 정당성이 핵심.
// 4. wage-night-holiday-premium-track — batch86 대기시간/포괄임금최저임금 분기와 달리 '야간·휴일근로 가산수당과 포괄임금약정 성립 범위(휴일근로수당 별도 지급 시 포괄임금 불성립)' 판단형 트랙. 가산수당 포괄임금 성립 범위가 핵심.
// 5. wage-annual-leave-allowance-track — batch86 분기와 달리 '연차휴가 사용촉진에도 지정일 출근·근로 제공 시 연차수당 보상의무 존속(노무수령 거부 의사 불명확)' 판단형 트랙. 연차 사용촉진 요건·미사용 연차 보상이 핵심.
// 6. unemployment-harassment-resignation-track — batch86 임금체불/폐업권고사직 분기와 달리 '직장내 괴롭힘 자진퇴사 정당한 이직 수급과 조기재취업수당 취업의 범위(고용 외 취업 포함)' 절차형 트랙. 괴롭힘 정당 이직 수급·조기재취업수당이 핵심.
// 7. unemployment-pregnancy-childcare-resignation-track — batch86 분기와 달리 '임신·육아 자진퇴사 수급과 육아휴직급여 신청기간(제척기간·강행규정) 도과 주의' 절차형 트랙. 임신·육아 정당 이직 수급·신청기간 제척이 핵심.
// 8. retirement-part-time-worker-track — batch86 계속근로통산/DC부담금 분기와 달리 '단시간근로자 퇴직금과 급여규정상 가족수당·상여금의 평균임금 산입(퇴직급여법 하한 초과해도 규정 불리 적용 불가)' 판단형 트랙. 단시간 퇴직금·급여규정 평균임금 산입이 핵심.
// 9. retirement-bonus-average-wage-track — batch86 분기와 달리 '상여금의 평균임금 산입 요건(정기·계속 지급, 지급의무·관행)과 퇴직금 재산정' 판단형 트랙. 상여금 임금성·평균임금 산입 요건이 핵심.
// 10. industrial-accident-commuting-track — batch86 근골격계 분기와 달리 '출퇴근 재해 산재(업무상 재해)와 상당인과관계 증명책임이 근로자 측에 있음(증명책임 전환 부정)' 절차형 트랙. 출퇴근재해·상당인과관계 증명책임이 핵심.

export const spokesBatch87Labor: SpokePage[] = [
  // ─── 1. dismissal-probation-evaluation-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-evaluation-track',
    keyword: '수습 평가 부적격 해고',
    questionKeyword: '수습기간 평가에서 부적격이라며 회사가 본채용을 거부하고 해고했어요. 입사할 때 이력서를 좀 다르게 적은 부분이 있긴 한데, 그걸 이유로 곧바로 해고까지 하는 게 정당한 건지, 평가가 공정했는지 다툴 수 있나요?',
    ctaKeyword: '수습 평가 부적격 해고 정당성·허위기재 책임 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수습 평가 부적격 해고 — 5단계 평가 공정성·허위기재 점검 | 로앤가이드',
      description:
        '수습 평가 부적격이나 이력서 허위기재를 이유로 해고를 당했다면 근로기준법 제23조 정당한 이유와 평가의 공정성·사회통념상 고용계속 불가능성·서면통지, 노동위 구제 3개월까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"수습기간을 거치던 중 \'평가 부적격\'이라며 회사가 본채용을 거부하고 사실상 해고한 근로자입니다. 회사는 입사 당시 제출한 이력서에 일부를 사실과 다르게 적었다는 점까지 들먹이며 해고가 당연하다는 식으로 말하는데, 그 부분이 제가 실제로 한 업무 수행과 무슨 관련이 있는지도 모르겠고, 평가가 공정하고 객관적인 기준으로 이뤄졌는지도 도무지 알 수가 없어요. 작은 기재 잘못이나 수습 평가 점수 하나로 회사를 그만둬야 할 만큼 무거운 처분을 받는 게 맞는지 납득이 가지 않습니다. 수습 평가 부적격이나 이력서 기재를 이유로 한 해고가 곧바로 정당해지는지, 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 근로자를 해고하지 못한다고 정하고, 수습 평가 부적격이나 취업규칙상 해고사유에 해당한다는 이유로 해고할 때에도 정당한 이유가 있어야 하는 영역입니다. 판례는 근로자가 입사 당시 제출한 이력서 등에 학력 등을 허위로 기재한 행위를 이유로 징계해고를 하는 경우에도 사회통념상 고용관계를 계속할 수 없을 정도로 근로자에게 책임 있는 사유가 있는 경우에 한하여 정당성이 인정되고, 그 정도인지는 고용 당시 사정뿐 아니라 고용 후 종사한 근로 내용·기간, 허위기재가 정상적 근로 제공에 지장을 주는지, 신뢰관계와 기업질서에 미치는 영향 등 여러 사정을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 수습 평가 + 이력서 기재 + 해고 결합은 \'수습 해고 정당성·허위기재 책임\' 다툼이 가능한 트랙입니다. 피해자라면 ① 평가의 공정성 ② 허위기재 책임 정도 ③ 사회통념상 고용계속 ④ 절차·서면통지 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 평가 ② 책임정도 ③ 고용계속 ④ 절차 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수습 평가 부적격 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가의 공정성·허위기재 책임 정도·사회통념상 고용계속·절차/서면통지·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 평가의 공정성</strong> — 수습 평가가 공정하고 객관적인 기준에 따라 이뤄졌는지(근로기준법 제23조).</li>\n<li><strong>② 허위기재 책임 정도</strong> — 이력서 기재가 정상적 근로 제공에 지장을 주거나 신뢰관계를 깰 정도인지.</li>\n<li><strong>③ 사회통념상 고용계속</strong> — 고용관계를 계속할 수 없을 정도로 책임 있는 사유인지.</li>\n<li><strong>④ 절차·서면통지</strong> — 해고 사유·시기를 서면으로 통지했는지(제27조).</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 이력서 허위기재 등을 이유로 한 해고도 사회통념상 고용계속이 불가능할 정도여야 정당성이 인정되고, 그 판단은 고용 당시뿐 아니라 종사한 근로 내용·허위기재의 업무 지장 여부·신뢰관계 영향 등을 종합하는 영역. 평가의 공정성과 책임의 정도가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고·수습 자료 보존 (즉시)</strong> — 해고/본채용거부 통보서·수습 평가표·근로계약서·이력서 보존.</li>\n<li><strong>2단계 — 평가·책임 정도 정리 (1주)</strong> — 수습 평가의 공정성과 이력서 기재의 업무 지장 여부 정리.</li>\n<li><strong>3단계 — 고용계속·절차 자료 (2주)</strong> — 종사 근로 내용·기간, 신뢰관계 영향과 징계·소명 절차 기록 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습 평가 부적격 해고 정당성·허위기재 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 평가 공정성·책임 정도·고용계속 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고·본채용거부 통보서 (사유·시점 명시)</strong></li>\n<li><strong>수습 평가표·평가 기준 (공정성·객관성)</strong></li>\n<li><strong>근로계약서·수습 약정 (수습기간·본채용 조건)</strong></li>\n<li><strong>이력서·제출 서류 (기재 내용)</strong></li>\n<li><strong>근무·업무 수행 기록 (정상적 근로 제공 정황)</strong></li>\n<li><strong>취업규칙·인사규정 (해고사유·평가 규정)</strong></li>\n<li><strong>해고 사유·시기 서면통지 자료 (제27조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'평가가 공정했는지\'와 \'기재 잘못이 해고까지 이를 정도인지\'입니다. 수습 평가가 어떤 기준·점수로 이뤄졌는지 평가표로 확인하고, 이력서 기재가 실제 업무 수행에 지장을 줬는지·신뢰관계를 깰 정도였는지를 종사 근로 내용과 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가의 공정성</strong> — 수습 평가가 공정·객관적 기준에 따랐는지.</li>\n<li><strong>허위기재 책임 정도</strong> — 기재가 업무 지장·신뢰관계를 깰 정도인지.</li>\n<li><strong>사회통념상 고용계속</strong> — 고용관계를 계속할 수 없을 정도인지.</li>\n<li><strong>절차·서면통지</strong> — 해고 사유·시기를 서면으로 통지했는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성 입증은 사용자, 평가 부당·기재 경미 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이력서 학력 등 허위기재 징계해고의 사회통념상 고용계속 불가능성',
        summary:
          '대법원 2009두16763(대법원, 2012.07.05 선고) 영역에서 법원은 근로기준법 제23조 제1항이 정당한 이유 없는 해고를 제한하므로 징계해고사유가 인정되더라도 사회통념상 고용관계를 계속할 수 없을 정도로 근로자에게 책임 있는 사유가 있는 경우에 한하여 해고의 정당성이 인정되고, 이는 입사 당시 제출한 이력서 등에 학력 등을 허위로 기재한 행위를 이유로 징계해고하는 경우에도 마찬가지여서 그 정도인지는 고용 당시 사정뿐 아니라 고용 후 종사한 근로 내용과 기간, 허위기재가 정상적 근로 제공에 지장을 주는지, 신뢰관계 유지와 기업질서에 미치는 영향 등 여러 사정을 종합해 판단해야 한다고 판시했습니다. 수습 평가 부적격이나 이력서 기재를 이유로 한 해고를 다툴 때 평가의 공정성과 책임의 정도를 검토해볼 수 있습니다.',
        takeaway: '수습 평가 + 이력서 기재 + 해고 결합 시 평가 공정성·허위기재 책임 정도·사회통념상 고용계속 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '수습 평가 부적격이면 곧바로 해고가 정당한가요?',
        answer:
          '<strong>본채용 거부도 평가가 공정·객관적이고 고용계속이 불가능할 정도여야 정당성이 검토되는 영역입니다.</strong> 평가표·기준을 확보.',
      },
      {
        question: '이력서를 다르게 적은 게 해고 사유가 되나요?',
        answer:
          '<strong>기재가 업무 지장·신뢰관계를 깰 정도여야 사회통념상 고용계속 불가능으로 보는 영역입니다.</strong> 업무 수행 기록을 정리.',
      },
      {
        question: '평가 기준을 알 수 없어요.',
        answer:
          '<strong>평가가 공정·객관적 기준에 따랐는지가 다툼이 되는 영역입니다.</strong> 평가표·점수 자료를 요청·확보.',
      },
      {
        question: '해고를 말로만 통보받았어요.',
        answer:
          '<strong>해고는 사유·시기를 서면으로 통지해야 효력이 있는 영역입니다(제27조).</strong> 통보 정황을 확보.',
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
      { label: '해고근로자 종합 가이드', href: '/guide/dismissal' },
      { label: '경력 허위기재 징계해고 판단', href: '/guide/dismissal/dismissal-resume-career-falsification-disciplinary-track' },
      { label: '구두 통보 서면통지 누락 해고 효력 판단', href: '/guide/dismissal/dismissal-verbal-notice-written-procedure-omission-track' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-disciplinary-procedure-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disciplinary-procedure-track',
    keyword: '징계절차 위반 해고',
    questionKeyword: '회사가 취업규칙에 정한 징계위원회 출석통지 기간도 안 지키고 저를 해고했어요. 절차를 제대로 안 밟은 해고는 무효라고 들었는데, 이런 절차 위반으로 다툴 수 있는지, 또 해고가 정당하다는 걸 누가 입증해야 하는지 궁금합니다.',
    ctaKeyword: '징계절차 위반 해고 무효·하자 치유·입증책임 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '징계절차 위반 해고 — 5단계 절차하자·입증책임 점검 | 로앤가이드',
      description:
        '징계위 출석통지 등 절차를 어긴 해고를 당했다면 근로기준법 제23조 정당한 이유와 취업규칙상 징계절차 위반의 무효·하자 치유, 해고 정당성 입증책임(사용자)까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 취업규칙에 정해 둔 징계위원회 개최일시·장소를 일정 기간 미리 통지하도록 한 절차조차 지키지 않고 저를 징계해고한 근로자입니다. 소명할 준비를 할 틈도 없이 통보를 받고 나니, 무엇을 잘못했는지 제대로 변명할 기회도 없이 결론만 내려진 것 같아 도무지 납득이 가지 않습니다. 절차를 제대로 밟지 않은 해고는 무효라고 들었는데, 정작 회사는 \'결과적으로 해고 사유는 충분하다\'는 말만 반복해요. 게다가 해고가 정당하다는 점을 누가 입증해야 하는지조차 헷갈립니다. 취업규칙상 징계절차를 어긴 해고를 절차 하자로 다툴 수 있는지, 입증책임이 누구에게 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 정당한 이유 없는 해고를 금지하고, 취업규칙·단체협약에서 정한 징계절차를 위반한 해고는 효력을 다툴 수 있는 영역입니다. 판례는 취업규칙에서 피징계자에게 징계위원회 개최일시·장소를 일정 기간 여유를 두고 통지하도록 정한 절차를 위반한 징계처분은 원칙적으로 무효이나, 그러한 절차상 하자가 있더라도 피징계자가 스스로 인사위원회에 출석해 출석통지 절차에 대한 이의 제기 없이 충분히 소명한 경우에는 절차상 하자가 치유될 수 있고, 해고에 정당한 이유가 있다는 점에 관한 증명책임은 사용자에게 있다고 본 사례 흐름이 있는 영역입니다. 절차 위반 + 소명 기회 + 해고 결합은 \'징계절차 하자·치유·입증책임\' 다툼이 가능한 트랙입니다. 피해자라면 ① 징계절차 위반 ② 하자 치유 여부 ③ 해고의 정당한 이유 ④ 입증책임(사용자) ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 절차 ② 치유 ③ 정당이유 ④ 입증책임 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 징계절차 위반 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 징계절차 위반·하자 치유 여부·해고의 정당한 이유·입증책임(사용자)·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 징계절차 위반</strong> — 취업규칙상 출석통지 기간 등 징계절차를 위반했는지(근로기준법 제23조).</li>\n<li><strong>② 하자 치유 여부</strong> — 스스로 출석해 이의 없이 충분히 소명했는지(치유될 수 있는지).</li>\n<li><strong>③ 해고의 정당한 이유</strong> — 절차와 별개로 사회통념상 고용계속이 불가능한 사유인지.</li>\n<li><strong>④ 입증책임(사용자)</strong> — 해고에 정당한 이유가 있다는 점은 사용자가 증명.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 취업규칙상 징계위 출석통지 절차를 위반한 징계는 원칙적으로 무효이나 스스로 출석해 이의 없이 충분히 소명하면 하자가 치유될 수 있고, 해고의 정당한 이유는 사용자가 증명하는 영역. 절차 위반과 하자 치유 여부·입증책임이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고·징계 자료 보존 (즉시)</strong> — 해고 통보서·징계의결서·출석통지서·소명 기록 보존.</li>\n<li><strong>2단계 — 절차 위반·치유 정리 (1주)</strong> — 출석통지 기간 위반 여부와 출석·이의·소명 경위 정리.</li>\n<li><strong>3단계 — 정당이유·입증책임 자료 (2주)</strong> — 해고사유의 정당성 및 사용자 입증책임 관점 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">징계절차 위반 해고 무효·하자 치유·입증책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 절차 위반·하자 치유·정당이유 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (징계사유·시점 명시)</strong></li>\n<li><strong>취업규칙·단체협약 (징계절차·출석통지 기간 규정)</strong></li>\n<li><strong>징계위원회 출석통지서 (통지 시점·기간)</strong></li>\n<li><strong>징계의결서·인사위 회의록 (절차·소명 경위)</strong></li>\n<li><strong>소명·진술 기록 (이의 제기·소명 정도)</strong></li>\n<li><strong>해고사유 관련 자료 (정당이유 다툼)</strong></li>\n<li><strong>해고 사유·시기 서면통지 자료 (제27조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'징계절차를 어겼는지\'와 \'하자가 치유됐는지\'입니다. 취업규칙상 출석통지 기간을 지켰는지 확인하고, 본인이 출석해 이의 없이 충분히 소명했다면 하자가 치유될 수 있으므로 출석 경위·소명 정도를 함께 정리하세요. 해고의 정당한 이유는 사용자가 증명하는 구조라는 점도 짚어두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>징계절차 위반</strong> — 출석통지 기간 등 취업규칙상 절차를 어겼는지.</li>\n<li><strong>하자 치유</strong> — 스스로 출석·이의 없이 소명해 하자가 치유됐는지.</li>\n<li><strong>해고의 정당한 이유</strong> — 절차와 별개로 사회통념상 고용계속이 불가능한 사유인지.</li>\n<li><strong>입증책임</strong> — 해고 정당성 입증책임이 사용자에게 있는지.</li>\n<li><strong>입증 정도</strong> — 행정·민사소송에서 요구되는 사실 증명의 정도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계위 출석통지 절차 위반과 하자 치유·해고 정당성 입증책임',
        summary:
          '대법원 2015두54759(대법원, 2016.11.24 선고) 영역에서 법원은 취업규칙에서 피징계자에게 징계위원회 개최일시·장소를 일정 기간 여유를 두고 통지하도록 정한 절차를 위반한 징계처분은 원칙적으로 무효이나 절차상 하자가 있더라도 피징계자가 스스로 인사위원회에 출석해 출석통지 절차에 대한 이의 제기 없이 충분한 소명을 한 경우에는 절차상 하자가 치유되고, 사용자의 근로자에 대한 해고에 정당한 이유가 있다는 점에 관한 증명책임은 사용자에게 있으며 해고처분의 정당성은 사회통념상 고용관계를 계속할 수 없을 정도인지를 기준으로 판단한다고 판시했습니다. 절차를 어긴 해고를 다툴 때 절차 하자·치유 여부와 입증책임을 검토해볼 수 있습니다.',
        takeaway: '절차 위반 + 소명 기회 + 해고 결합 시 징계절차 하자·치유 여부·해고 정당성 입증책임 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '절차를 안 지킨 해고도 무효인가요?',
        answer:
          '<strong>취업규칙상 출석통지 등 징계절차를 위반한 해고는 원칙적으로 무효로 다툴 수 있는 영역입니다.</strong> 절차 규정과 통지 시점을 확인.',
      },
      {
        question: '제가 출석해 소명하면 하자가 사라지나요?',
        answer:
          '<strong>스스로 출석해 이의 없이 충분히 소명하면 절차상 하자가 치유될 수 있는 영역입니다.</strong> 출석·소명 경위를 정리.',
      },
      {
        question: '해고가 정당하다는 걸 누가 입증하나요?',
        answer:
          '<strong>해고에 정당한 이유가 있다는 점은 사용자가 증명하는 영역입니다.</strong> 회사 측 주장과 근거를 대조 정리.',
      },
      {
        question: '절차 하자만으로도 다툴 수 있나요?',
        answer:
          '<strong>해고사유와 별개로 절차 위반 자체가 다툼 사유가 되는 영역입니다.</strong> 절차·소명 기록을 함께 확보.',
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
      { label: '징계 절차 위반 해고 정당성 판단', href: '/guide/dismissal/dismissal-disciplinary-procedure-defect-track' },
      { label: '해고근로자 종합 가이드', href: '/guide/dismissal' },
      { label: '서면 해고통지 사유 부실기재', href: '/guide/dismissal/dismissal-written-notice-vague-reason-track' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-pregnancy-maternity-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnancy-maternity-track',
    keyword: '임신 출산 불이익 해고',
    questionKeyword: '임신 사실을 알린 뒤 회사가 "맡던 사업부를 접는다"며 저를 해고했어요. 하필 임신·출산을 앞둔 시점이라 불이익 같은데, 사업 일부를 없앴다는 이유만으로 해고가 정당해지는지, 경영상 해고 요건은 갖췄는지 다툴 수 있나요?',
    ctaKeyword: '임신 출산 불이익 해고·일부 폐지 통상해고·경영상 해고 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임신 출산 불이익 해고 — 5단계 일부 폐지·경영상 해고 점검 | 로앤가이드',
      description:
        '임신·출산을 앞두고 사업부 폐지를 이유로 해고를 당했다면 근로기준법 제23조 정당한 이유·제24조 경영상 해고 요건과 일부 폐지 통상해고의 특별한 사정, 노동위 구제 3개월까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임신 사실을 회사에 알린 지 얼마 지나지 않아 \'네가 맡던 사업부를 접는다\'며 해고를 통보받은 근로자입니다. 하필 임신·출산을 앞둔 민감한 시점에 해고가 이뤄지다 보니 사실상 임신을 이유로 한 불이익이 아닌지 의심스럽고, 회사는 \'사업 일부를 폐지했으니 어쩔 수 없다\'는 말만 반복합니다. 그런데 회사 전체가 문을 닫은 것도 아니고 일부 업무만 정리한 건데, 그것만으로 해고가 당연해지는 건지, 다른 부서로 전환배치하거나 해고를 피하려는 노력은 했는지도 의문입니다. 사업 일부를 없앴다는 이유만으로 해고가 곧바로 정당해지는지, 경영상 해고 요건은 갖췄는지 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 정당한 이유 없는 해고를 금지하고, 제24조는 경영상 이유에 의한 해고의 요건으로 긴박한 경영상 필요·해고 회피 노력·합리적이고 공정한 해고 기준 등을 정하는 영역입니다. 판례는 기업이 일부 사업 부문을 폐지하고 그 부문 근로자를 해고한 경우 이는 원칙적으로 사업 축소에 불과하므로 제24조의 경영상 해고 요건을 갖춰야 하고, 폐업으로 인한 통상해고로서 예외적으로 정당하려면 일부 사업의 폐지가 사업 전체의 폐지와 같다고 볼 만한 특별한 사정이 인정되어야 하며, 그 해고의 정당성에 관한 증명책임은 이를 주장하는 사용자가 부담한다고 본 사례 흐름이 있는 영역입니다. 임신·출산 시점 + 일부 사업 폐지 + 해고 결합은 \'불이익 해고·일부 폐지 통상해고·경영상 해고\' 다툼이 가능한 트랙입니다. 피해자라면 ① 불이익 정황 ② 일부 폐지 성격 ③ 통상해고 특별한 사정 ④ 경영상 해고 요건 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 불이익 ② 폐지성격 ③ 특별한사정 ④ 경영상요건 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임신 출산 불이익 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 불이익 정황·일부 폐지 성격·통상해고 특별한 사정·경영상 해고 요건·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 불이익 정황</strong> — 임신·출산 시점과 맞물려 불이익이 의심되는 해고인지(근로기준법 제23조).</li>\n<li><strong>② 일부 폐지 성격</strong> — 일부 사업 폐지가 원칙적으로 사업 축소(경영상 해고 영역)인지.</li>\n<li><strong>③ 통상해고 특별한 사정</strong> — 일부 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정이 있는지.</li>\n<li><strong>④ 경영상 해고 요건</strong> — 긴박한 경영상 필요·해고 회피 노력·합리·공정 기준을 갖췄는지(제24조).</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 일부 사업 폐지에 따른 해고는 원칙적으로 경영상 해고 요건을 갖춰야 하고, 통상해고로서 예외적으로 정당하려면 일부 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정이 있어야 하며 그 정당성 입증은 사용자가 부담하는 영역. 불이익 정황과 경영상 해고 요건 충족 여부가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고·사업 자료 보존 (즉시)</strong> — 해고 통보서·사업부 폐지 공고·인사발령·임신/출산 통지 자료 보존.</li>\n<li><strong>2단계 — 불이익·폐지 성격 정리 (1주)</strong> — 임신 통지 시점과 해고 시점, 일부 폐지가 사업 축소인지 정리.</li>\n<li><strong>3단계 — 경영상 요건·전환배치 자료 (2주)</strong> — 긴박한 경영상 필요·해고 회피 노력·전환배치 가능성 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임신 출산 불이익 해고·일부 폐지 통상해고·경영상 해고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 불이익 정황·일부 폐지·경영상 요건 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (해고사유·통상/경영상 구분)</strong></li>\n<li><strong>임신·출산 통지 자료 (시점·정황)</strong></li>\n<li><strong>사업부 폐지 공고·조직개편 자료 (일부 폐지 범위)</strong></li>\n<li><strong>전환배치·해고 회피 노력 자료 (배치 가능성)</strong></li>\n<li><strong>경영상 필요 입증 자료 (재무·인원감축 근거)</strong></li>\n<li><strong>해고대상자 선정기준 자료 (합리·공정성)</strong></li>\n<li><strong>해고 사유·시기 서면통지 자료 (제27조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'일부 폐지가 사업 전체 폐지와 같은지\'와 \'경영상 해고 요건을 갖췄는지\'입니다. 임신 통지와 해고 시점의 근접성으로 불이익 정황을 정리하고, 회사가 든 일부 폐지가 단순 축소에 그치는지·전환배치 등 해고 회피 노력을 했는지를 조직개편·발령 자료로 확인해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>불이익 정황</strong> — 임신·출산 시점과 맞물려 불이익이 의심되는지.</li>\n<li><strong>일부 폐지 성격</strong> — 일부 사업 폐지가 사업 축소에 불과한지.</li>\n<li><strong>통상해고 특별한 사정</strong> — 일부 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정이 있는지.</li>\n<li><strong>경영상 해고 요건</strong> — 긴박한 필요·해고 회피 노력·합리·공정 기준을 갖췄는지.</li>\n<li><strong>입증책임</strong> — 해고 정당성 입증책임이 사용자에게 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 사업 폐지 통상해고의 특별한 사정과 경영상 해고 요건·입증책임',
        summary:
          '대법원 2016두64876(대법원, 2021.07.29 선고) 영역에서 법원은 기업이 사업을 여러 부문으로 나눠 경영하다 그중 일부를 폐지하더라도 이는 원칙적으로 사업 축소에 해당할 뿐 사업 전체의 폐지라 할 수 없으므로 그 부문 근로자를 해고하려면 근로기준법 제24조의 경영상 해고 요건을 갖춰야 하고, 폐업으로 인한 통상해고로서 예외적으로 정당하려면 일부 사업의 폐지·축소가 사업 전체의 폐지와 같다고 볼 만한 특별한 사정이 인정되어야 하며, 그 해고가 통상해고로서 정당성을 갖췄는지에 관한 증명책임은 이를 주장하는 사용자가 부담한다고 판시했습니다. 임신·출산 시점에 사업부 폐지를 이유로 한 해고를 다툴 때 일부 폐지의 성격과 경영상 해고 요건을 검토해볼 수 있습니다.',
        takeaway: '임신·출산 시점 + 일부 사업 폐지 + 해고 결합 시 불이익 정황·일부 폐지 통상해고 특별한 사정·경영상 해고 요건 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '임신·출산을 앞두고 해고당했어요. 다툴 수 있나요?',
        answer:
          '<strong>임신·출산 시점과 맞물린 해고는 불이익 정황과 정당한 이유를 함께 따져볼 수 있는 영역입니다.</strong> 통지·해고 시점을 정리.',
      },
      {
        question: '사업부를 없앴다는데 그것만으로 해고가 정당한가요?',
        answer:
          '<strong>일부 사업 폐지는 원칙적으로 사업 축소여서 경영상 해고 요건을 갖춰야 하는 영역입니다.</strong> 폐지 범위를 확인.',
      },
      {
        question: '일부 폐지가 전체 폐업과 같다고 볼 수 있나요?',
        answer:
          '<strong>특별한 사정이 인정되어야 통상해고로 예외적으로 정당해지는 영역입니다.</strong> 사업 부문의 독립성을 살펴 정리.',
      },
      {
        question: '경영상 해고 요건은 무엇인가요?',
        answer:
          '<strong>긴박한 경영상 필요·해고 회피 노력·합리·공정한 기준이 요건인 영역입니다(제24조).</strong> 전환배치·선정기준 자료를 확보.',
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
      { label: '경영상 긴박한 필요 정리해고 요건 판단', href: '/guide/dismissal/dismissal-managerial-urgent-necessity-layoff-requirement-track' },
      { label: '사업 부문 일부 폐지 통상해고', href: '/guide/dismissal/dismissal-partial-business-closure-ordinary-track' },
      { label: '이메일 해고통보 서면통지 효력 판단', href: '/guide/dismissal/dismissal-email-notice-written-procedure-effect-track' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. wage-night-holiday-premium-track ───
  {
    domain: 'wage',
    slug: 'wage-night-holiday-premium-track',
    keyword: '야간 휴일근로 가산수당',
    questionKeyword: '교대로 밤늦게까지 일하고 휴일에도 자주 나갔는데, 회사는 "노선수당에 다 포함됐다"며 야간·휴일 가산수당을 따로 안 줍니다. 휴일근로수당은 그동안 별도로 받아 왔는데, 이런 경우에도 포괄임금이라며 가산수당을 안 주는 게 맞는지 다툴 수 있나요?',
    ctaKeyword: '야간 휴일 가산수당·포괄임금 성립 범위 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '야간 휴일근로 가산수당 — 5단계 포괄임금 성립·가산수당 점검 | 로앤가이드',
      description:
        '야간·휴일근로 가산수당을 포괄임금이라며 안 준다면 근로기준법 제56조 가산임금과 포괄임금약정 성립 범위(휴일근로수당 별도 지급 시 불성립), 임금 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교대로 밤늦게까지 일하고 휴일에도 자주 출근해 온 근로자입니다. 야간·휴일에 일한 만큼 가산수당을 받아야 한다고 생각했는데, 회사는 \'노선수당에 연장·야간·휴일근로수당이 모두 포함된 포괄임금이니 따로 줄 게 없다\'는 말만 반복합니다. 그런데 정작 휴일근로수당만큼은 그동안 노선수당과 별개로 따로 받아 왔어요. 모든 가산수당이 다 합쳐졌다면서 휴일근로수당은 따로 줬다는 게 앞뒤가 맞지 않아 보이고, 실제 일한 시간을 따져보면 받은 임금이 제대로 된 가산수당에 미치는지도 의문입니다. 포괄임금이라는 이유로 야간·휴일 가산수당을 묻어버리는 게 맞는지, 어디까지 포괄임금이 성립한 것인지 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제56조는 사용자가 연장·야간·휴일근로에 대해 통상임금의 50% 이상을 가산해 지급하도록 정하고, 임금채권의 소멸시효는 3년인 영역입니다. 판례는 근로형태·업무 성질상 연장·야간·휴일근로가 당연히 예상되는 경우 등에 포괄임금제에 의한 임금 지급계약이나 단체협약이 유효할 수 있으나, 포괄임금에 관한 약정이 성립했는지는 근로시간·임금 형태·지급 관행 등을 종합해 구체적으로 판단해야 하고, 노선수당에 연장·야간근로수당을 포괄한다고 정하면서 휴일근로수당은 노선수당과 별도로 지급해 온 사안에서는 휴일근로수당에 관해서까지 포괄임금약정이 성립했다고 보기 어렵다고 본 사례 흐름이 있는 영역입니다. 가산수당 + 포괄임금 + 휴일근로수당 별도 지급 결합은 \'가산수당·포괄임금 성립 범위\' 다툼이 가능한 트랙입니다. 피해자라면 ① 가산수당 발생 ② 포괄임금 유효성 ③ 약정 성립 범위 ④ 휴일근로수당 구분 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 가산수당 ② 유효성 ③ 성립범위 ④ 휴일구분 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 야간 휴일근로 가산수당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가산수당 발생·포괄임금 유효성·약정 성립 범위·휴일근로수당 구분·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가산수당 발생</strong> — 연장·야간·휴일근로에 통상임금 50% 이상 가산임금이 발생했는지(근로기준법 제56조).</li>\n<li><strong>② 포괄임금 유효성</strong> — 근로형태·업무 성질상 포괄임금약정이 유효할 수 있는 경우인지.</li>\n<li><strong>③ 약정 성립 범위</strong> — 근로시간·임금 형태·지급 관행상 포괄임금약정이 어느 수당까지 성립했는지.</li>\n<li><strong>④ 휴일근로수당 구분</strong> — 휴일근로수당을 별도 지급해 왔다면 그 부분 포괄임금약정이 성립했는지.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 포괄임금약정 성립 여부는 근로시간·임금 형태·지급 관행을 종합해 판단하고, 연장·야간근로수당을 포괄한다면서 휴일근로수당은 별도 지급해 온 경우 휴일근로수당까지 포괄임금약정이 성립했다고 보기 어려운 영역. 약정의 성립 범위와 별도 지급 항목이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·급여 자료 보존 (즉시)</strong> — 근로계약·임금협정(포괄 조항)·임금명세서·근무기록 보존.</li>\n<li><strong>2단계 — 가산수당·지급 관행 정리 (1~2주)</strong> — 야간·휴일근로 시간과 노선수당·휴일근로수당 지급 관행 정리.</li>\n<li><strong>3단계 — 약정 성립 범위 검토 (2~3주)</strong> — 포괄임금이 어느 수당까지 성립했는지, 휴일근로수당 구분 검토.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">야간 휴일 가산수당·포괄임금 성립 범위 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 가산수당·포괄임금 약정·휴일근로 구분 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·임금협정 (포괄임금 조항·수당 구성)</strong></li>\n<li><strong>임금명세서 (노선수당·휴일근로수당 표시)</strong></li>\n<li><strong>근무표·교대표 (야간·휴일근로 시간)</strong></li>\n<li><strong>휴일근로수당 별도 지급 내역 (구분 정황)</strong></li>\n<li><strong>운행·영업 기록 (실근로시간)</strong></li>\n<li><strong>가산수당 산정표 (통상임금·가산율)</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'포괄임금이 어느 수당까지 성립했는지\'입니다. 노선수당이 연장·야간근로수당을 포괄한다고 정했더라도 휴일근로수당을 따로 지급해 왔다면 그 부분은 포괄임금약정이 성립하지 않았다고 볼 여지가 있으므로, 임금협정·명세서로 별도 지급 정황을 확인하고 야간·휴일근로 시간과 가산수당을 대조해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가산수당 발생</strong> — 야간·휴일근로에 가산임금이 제대로 발생·지급됐는지.</li>\n<li><strong>포괄임금 유효성</strong> — 근로형태·업무 성질상 포괄임금약정이 유효한 경우인지.</li>\n<li><strong>약정 성립 범위</strong> — 포괄임금이 어느 수당까지 성립했는지.</li>\n<li><strong>휴일근로수당 구분</strong> — 별도 지급해 온 휴일근로수당까지 포괄됐다고 볼 수 있는지.</li>\n<li><strong>시효 관리</strong> — 임금·수당 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금약정의 성립 범위와 휴일근로수당 별도 지급 시 불성립',
        summary:
          '대법원 2017다238004(대법원, 2022.02.11 선고) 영역에서 법원은 포괄임금제에 의한 임금 지급계약이나 단체협약이 유효하기 위한 요건과 포괄임금약정이 성립했는지를 판단하는 기준을 제시하면서, 버스운송사업자가 노동조합과 체결한 임금협정에서 노선수당이 연장근로수당·야간근로수당·휴일근로수당을 포괄한 수당이라고 정했더라도 실제로는 노선수당을 연장근로시간과 야간근로시간 비율에 따라 나눠 연장·야간근로수당 명목으로 지급하는 한편 휴일근로수당은 노선수당과 별도로 지급해 온 사안에서, 위 임금협정은 연장·야간근로수당에 관한 포괄임금약정을 포함한다고 볼 수 있으나 휴일근로수당에 관하여는 포괄임금약정이 성립했다고 보기 어렵다고 판시했습니다. 야간·휴일 가산수당을 다툴 때 포괄임금약정의 성립 범위를 검토해볼 수 있습니다.',
        takeaway: '가산수당 + 포괄임금 + 휴일근로수당 별도 지급 결합 시 가산수당 발생·포괄임금 성립 범위·휴일근로수당 구분 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '포괄임금이면 야간·휴일 가산수당을 못 받나요?',
        answer:
          '<strong>포괄임금약정이 어느 수당까지 성립했는지에 따라 달라지는 영역입니다.</strong> 임금협정·명세서로 성립 범위를 확인.',
      },
      {
        question: '휴일근로수당을 따로 받아 왔는데요?',
        answer:
          '<strong>휴일근로수당을 별도 지급해 왔다면 그 부분 포괄임금약정 성립을 다툴 여지가 있는 영역입니다.</strong> 별도 지급 내역을 정리.',
      },
      {
        question: '포괄임금약정은 무조건 유효한가요?',
        answer:
          '<strong>근로형태·업무 성질·지급 관행을 종합해 성립·유효성을 판단하는 영역입니다.</strong> 근무표·임금 형태를 함께 정리.',
      },
      {
        question: '가산수당은 얼마나 받아야 하나요?',
        answer:
          '<strong>연장·야간·휴일근로에 통상임금 50% 이상을 가산하는 영역입니다(제56조).</strong> 가산수당 산정표로 대조.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>임금·수당 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '야간 휴일 가산수당 미지급 임금 청구 판단', href: '/guide/wage/wage-night-holiday-premium-unpaid-claim-track' },
      { label: '임금 종합 가이드', href: '/guide/wage' },
      { label: '연장근로 고정수당 미달 차액 청구 판단', href: '/guide/wage/wage-overtime-fixed-allowance-shortfall-claim-track' },
      { label: '식대 통상임금 포함', href: '/guide/wage/wage-meal-allowance-ordinary-wage-track' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 5. wage-annual-leave-allowance-track ───
  {
    domain: 'wage',
    slug: 'wage-annual-leave-allowance-track',
    keyword: '연차수당 미지급',
    questionKeyword: '회사가 "연차 사용을 촉진했으니 안 쓴 연차는 수당으로 줄 게 없다"고 합니다. 그런데 저는 지정된 휴가일에 회사가 시키는 일이 있어 출근해서 일했는데, 그래도 안 쓴 연차수당을 못 받는 게 맞나요? 다툴 수 있나요?',
    ctaKeyword: '연차 사용촉진·미사용 연차수당 보상 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '연차수당 미지급 — 5단계 사용촉진·보상의무 점검 | 로앤가이드',
      description:
        '연차 사용촉진을 이유로 미사용 연차수당을 안 준다면 근로기준법 제60조 연차와 제61조 사용촉진 요건, 지정일 출근·근로 제공 시 보상의무 존속, 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 \'연차 사용을 적법하게 촉진했으니 쓰지 않은 연차에 대해서는 수당으로 보상할 게 없다\'고 못 박은 근로자입니다. 그런데 정작 저는 회사가 지정해 준 휴가일에 마음 편히 쉰 게 아니라, 그날 처리해야 할 업무가 있고 회사 지시도 있어 출근해서 일했어요. 분명히 회사가 제 근로를 받아 갔는데도 \'사용촉진을 했으니 연차수당은 없다\'고만 하니 도무지 납득이 가지 않습니다. 사용촉진 절차를 밟았다고 해서 실제로 일한 날의 연차까지 보상 없이 사라지는 건지, 회사가 그날 노무를 받아 가 놓고 보상을 면할 수 있는지 헷갈려요. 지정일에 출근해 일한 미사용 연차에 대해 연차수당을 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제60조는 1년간 80% 이상 출근한 근로자에게 15일의 유급휴가를 주도록 정하고, 제61조는 사용자가 연차 사용을 서면으로 촉구·통보하는 사용촉진 절차를 밟으면 미사용 연차 보상의무가 면제될 수 있도록 정하며, 임금채권 소멸시효는 3년인 영역입니다. 판례는 사용자가 연차휴가 사용촉진 제도를 도입해 법정 조치를 했더라도 근로자가 지정된 휴가일에 출근해 근로를 제공한 경우 사용자가 그 사정을 인식하고도 노무 수령을 거부한다는 의사를 명확히 표시하지 않거나 근로자에게 업무 지시를 했다면 특별한 사정이 없는 한 자발적 미사용으로 볼 수 없어 그 미사용 휴가에 대해 여전히 보상할 의무를 부담한다고 본 사례 흐름이 있는 영역입니다. 사용촉진 + 지정일 출근·근로 제공 + 미지급 결합은 \'사용촉진 요건·미사용 연차 보상\' 다툼이 가능한 트랙입니다. 피해자라면 ① 연차 발생 ② 사용촉진 요건 ③ 지정일 출근·근로 ④ 노무수령 거부 의사 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 연차 ② 촉진요건 ③ 출근근로 ④ 수령거부 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 연차수당 미지급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 연차 발생·사용촉진 요건·지정일 출근/근로·노무수령 거부 의사·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 연차 발생</strong> — 출근율 등 요건을 채워 연차휴가가 발생했는지(근로기준법 제60조).</li>\n<li><strong>② 사용촉진 요건</strong> — 사용자가 서면 촉구·통보 등 사용촉진 절차를 적법하게 밟았는지(제61조).</li>\n<li><strong>③ 지정일 출근·근로</strong> — 지정된 휴가일에 출근해 실제로 근로를 제공했는지.</li>\n<li><strong>④ 노무수령 거부 의사</strong> — 사용자가 노무 수령을 거부한다는 의사를 명확히 표시했는지, 업무 지시를 했는지.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 사용촉진 절차를 밟았더라도 근로자가 지정 휴가일에 출근해 근로를 제공했는데 사용자가 노무 수령 거부 의사를 명확히 표시하지 않거나 업무 지시를 했다면 자발적 미사용으로 보기 어려워 보상의무가 존속하는 영역. 지정일 출근·근로 제공과 노무수령 거부 의사가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연차·근무 자료 보존 (즉시)</strong> — 연차 발생 내역·사용촉진 서면·출근기록·업무 지시 자료 보존.</li>\n<li><strong>2단계 — 사용촉진·출근 정리 (1~2주)</strong> — 사용촉진 절차 이행 여부와 지정일 출근·근로 제공 정황 정리.</li>\n<li><strong>3단계 — 노무수령 거부 검토 (2~3주)</strong> — 사용자가 노무 수령 거부 의사를 명확히 했는지·업무 지시가 있었는지 검토.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미지급 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연차 사용촉진·미사용 연차수당 보상 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 연차 발생·사용촉진·지정일 근로 갈래입니다.</strong></p>\n<ul>\n<li><strong>연차 발생·잔여 내역 (출근율·미사용 일수)</strong></li>\n<li><strong>사용촉진 서면 (촉구·통보 시점·내용)</strong></li>\n<li><strong>출근기록 (지정 휴가일 출근 정황)</strong></li>\n<li><strong>업무 지시·근로 제공 자료 (지정일 근로)</strong></li>\n<li><strong>근로계약서·취업규칙 (연차·수당 규정)</strong></li>\n<li><strong>연차수당 산정표 (통상임금·미사용 일수)</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'지정일에 실제로 일했는지\'와 \'회사가 노무 수령을 거부했는지\'입니다. 사용촉진 서면을 받았더라도 지정 휴가일에 출근해 근로를 제공하고 회사가 노무 수령 거부 의사를 명확히 표시하지 않았거나 업무 지시를 했다면 보상의무가 존속할 여지가 있으므로, 출근기록·업무 지시 자료로 그날 근로 제공을 입증해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용촉진 요건</strong> — 서면 촉구·통보 등 사용촉진 절차를 적법하게 밟았는지.</li>\n<li><strong>지정일 출근·근로</strong> — 지정 휴가일에 출근해 실제 근로를 제공했는지.</li>\n<li><strong>노무수령 거부 의사</strong> — 노무 수령 거부 의사를 명확히 표시했는지, 업무 지시를 했는지.</li>\n<li><strong>보상의무 존속</strong> — 자발적 미사용이 아니어서 보상의무가 존속하는지.</li>\n<li><strong>시효 관리</strong> — 연차수당 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 연차 사용촉진에도 지정일 근로 제공 시 미사용 연차 보상의무 존속',
        summary:
          '대법원 2019다279283(대법원, 2020.02.27 선고) 영역에서 법원은 사용자가 연차휴가 사용촉진 제도를 도입해 구 근로기준법 제61조 각호의 조치를 했더라도 근로자가 지정된 휴가일에 출근해 근로를 제공한 경우 사용자가 그 사정을 인식하고도 노무의 수령을 거부한다는 의사를 명확하게 표시하지 않거나 근로자에게 업무 지시를 했다면 특별한 사정이 없는 한 자발적 의사에 따른 미사용으로 볼 수 없어 그 근로 제공으로 사용하지 않은 휴가에 대하여 여전히 보상할 의무를 부담하고, 미사용 연차 일수 중 일부 사용 시기만 통보받은 경우 나머지에 대해서도 사용자가 서면으로 사용 시기를 정해 통보해야 한다고 판시했습니다. 사용촉진을 이유로 한 연차수당 미지급을 다툴 때 지정일 근로 제공과 노무수령 거부 의사를 검토해볼 수 있습니다.',
        takeaway: '사용촉진 + 지정일 출근·근로 제공 + 미지급 결합 시 사용촉진 요건·지정일 근로 제공·노무수령 거부 의사 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '사용촉진을 했으면 연차수당을 못 받나요?',
        answer:
          '<strong>사용촉진을 했더라도 지정일에 일했다면 보상의무가 존속할 여지가 있는 영역입니다.</strong> 출근·근로 제공 정황을 정리.',
      },
      {
        question: '지정 휴가일에 출근해 일했어요.',
        answer:
          '<strong>지정일에 근로를 제공했고 회사가 노무 수령을 거부하지 않았다면 보상의무가 존속할 수 있는 영역입니다.</strong> 출근기록을 확보.',
      },
      {
        question: '회사가 노무 수령을 거부했는지 어떻게 보나요?',
        answer:
          '<strong>거부 의사를 명확히 표시하지 않거나 업무 지시를 했다면 자발적 미사용으로 보기 어려운 영역입니다.</strong> 업무 지시 자료를 확보.',
      },
      {
        question: '사용촉진 절차는 어떻게 이뤄지나요?',
        answer:
          '<strong>서면 촉구·통보 등 법정 절차를 적법하게 밟아야 보상의무 면제가 검토되는 영역입니다(제61조).</strong> 촉진 서면을 확인.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>연차수당 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '연차휴가 미사용수당 미지급 청구 판단', href: '/guide/wage/wage-annual-leave-unused-allowance-unpaid-claim-track' },
      { label: '연차휴가 사용촉진 미지급', href: '/guide/wage/wage-annual-leave-promotion-unpaid-track' },
      { label: '미사용 연차 보상', href: '/guide/wage/wage-unused-leave-compensation-track' },
      { label: '식대 통상임금 포함', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 6. unemployment-harassment-resignation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-harassment-resignation-track',
    keyword: '직장내 괴롭힘 자진퇴사 수급',
    questionKeyword: '직장 내 괴롭힘이 심해 도저히 못 버티고 제가 사표를 냈어요. 자진퇴사면 실업급여가 안 된다는데, 괴롭힘 때문에 어쩔 수 없이 그만둔 경우도 그런가요? 받다가 일찍 재취업하면 조기재취업수당 같은 건 받을 수 있는지도 궁금합니다.',
    ctaKeyword: '직장내 괴롭힘 자진퇴사 정당 이직·조기재취업수당 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장내 괴롭힘 자진퇴사 수급 — 5단계 정당 이직·조기재취업 점검 | 로앤가이드',
      description:
        '직장 내 괴롭힘으로 어쩔 수 없이 사표를 냈는데 실업급여가 되는지 궁금하다면 고용보험법상 괴롭힘 정당한 이직 사유 수급과 조기재취업수당 취업 범위, 신청 절차까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장 내 괴롭힘이 도를 넘어 도저히 버틸 수 없는 지경에 이르러 결국 제가 먼저 사표를 낸 근로자입니다. 스스로 그만둔 모양이 되다 보니 \'자진퇴사면 실업급여가 안 된다\'는 말부터 들어 막막했어요. 괴롭힘 때문에 어쩔 수 없이 떠밀려 나온 건데도 단순 자진퇴사로만 보고 수급을 막는 게 맞는지 헷갈리고, 한편으로는 다행히 빨리 재취업하게 되면 조기재취업수당 같은 것도 받을 수 있는지, 혹시 취업 형태가 일반 회사가 아니면 안 되는 건 아닌지도 궁금합니다. 직장 내 괴롭힘으로 그만둔 경우 정당한 이직 사유로 인정돼 수급할 수 있는지, 어떤 자료를 준비해야 하는지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 직장 내 괴롭힘 등 정당한 사유가 있는 자기 사정에 의한 이직은 수급자격 제한에서 제외돼 수급자격이 검토되는 영역이며, 구직급여를 모두 받기 전 안정적으로 재취업하면 조기재취업수당이 지급될 수 있는 영역입니다. 판례는 조기재취업수당 관련 \'고용되는 직업에 취직한 경우\'는 \'안정된 직업에 재취직한 경우\'에 대응하는 규정으로서 그 취업이 반드시 민법상 고용의 성질을 가지는 것에 한정된다고 볼 수 없어, 주식회사 대표이사 취임처럼 안정적으로 재취업한 경우도 원칙적으로 조기재취업수당이 지급되는 것으로 봄이 상당하다고 본 사례 흐름이 있는 영역입니다. 직장 내 괴롭힘 + 자진퇴사 + 조기재취업 우려 결합은 \'정당한 이직 수급·조기재취업수당\' 검토가 가능한 트랙입니다. 피해자라면 ① 괴롭힘 입증 ② 정당한 이직 사유 ③ 피보험단위기간 ④ 수급자격 ⑤ 조기재취업수당 5중 트랙이 가능한 영역. 대응은 ① 입증 ② 정당이직 ③ 단위기간 ④ 수급 ⑤ 조기재취업 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장내 괴롭힘 자진퇴사 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 괴롭힘 입증·정당한 이직 사유·피보험단위기간·수급자격·조기재취업수당 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 괴롭힘 입증</strong> — 직장 내 괴롭힘이 지속·반복돼 이직이 부득이했던 사정 정리.</li>\n<li><strong>② 정당한 이직 사유</strong> — 괴롭힘 등으로 부득이 이직한 정당한 사유에 해당하는지.</li>\n<li><strong>③ 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>④ 수급자격</strong> — 자진퇴사라도 정당한 이직 사유로 수급자격이 인정될 수 있는지.</li>\n<li><strong>⑤ 조기재취업수당</strong> — 구직급여 소진 전 안정적으로 재취업하면 조기재취업수당이 검토되는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직장 내 괴롭힘으로 부득이 그만둔 경우 자진퇴사라도 정당한 이직 사유로 수급자격이 검토되는 영역. 판례 흐름에서 조기재취업수당의 \'고용되는 직업에 취직한 경우\'는 반드시 민법상 고용에 한정되지 않아 안정적으로 재취업한 경우 폭넓게 검토되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 괴롭힘·이직 자료 보존 (즉시)</strong> — 괴롭힘 증거(메시지·녹취·진정)·신고 자료·이직확인서 보존.</li>\n<li><strong>2단계 — 정당한 이직·단위기간 정리 (1주)</strong> — 괴롭힘 사정과 피보험단위기간(180일) 정리.</li>\n<li><strong>3단계 — 수급자격 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청.</li>\n<li><strong>4단계 — 이직 사유 소명 (고용센터 심사)</strong> — 괴롭힘으로 인한 정당한 이직 입증 자료 제출.</li>\n<li><strong>5단계 — 조기재취업수당 신청 (재취업·일정 요건 충족 시)</strong> — 안정적 재취업 시 조기재취업수당 신청 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장내 괴롭힘 자진퇴사 정당 이직·조기재취업수당 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 괴롭힘 입증·정당한 이직·조기재취업 갈래입니다.</strong></p>\n<ul>\n<li><strong>괴롭힘 증거 (메시지·녹취·이메일·동료 진술)</strong></li>\n<li><strong>직장 내 괴롭힘 신고·조사 자료 (사내·고용노동부)</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>근로계약서·재직 자료 (근무 정황)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>재취업 입증 자료 (조기재취업수당 신청)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'괴롭힘이 정당한 이직 사유임을 입증하는 것\'입니다. 메시지·녹취·동료 진술과 사내·고용노동부 신고 자료로 괴롭힘이 지속됐고 이직이 부득이했음을 뒷받침하고 피보험단위기간 180일을 점검하세요. 수급 중 안정적으로 재취업하면 조기재취업수당이 검토될 수 있으니 재취업 입증 자료도 함께 준비하면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당한 이직 사유</strong> — 괴롭힘으로 부득이 그만둔 정당한 이직인지(단순 자진퇴사와 구별).</li>\n<li><strong>괴롭힘 입증</strong> — 괴롭힘이 지속·반복됐음을 객관적으로 입증할 수 있는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>조기재취업수당</strong> — 안정적으로 재취업한 경우(고용 외 취업 포함) 조기재취업수당이 검토되는지.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고용센터 1350</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 조기재취업수당 \'고용되는 직업에 취직한 경우\'의 범위',
        summary:
          '대법원 2009두19892(대법원, 2011.12.08 선고) 영역에서 법원은 조기재취업수당이 구직급여 수급자격자가 소정급여일수분 구직급여를 모두 받기 전에 안정적으로 재취업해 소득을 얻게 된 경우 실직기간을 최소화하고 안정된 재취업을 장려하기 위한 것이므로, 구 고용보험법 시행령 제84조 제1항 제1호의 \'고용되는 직업에 취직한 경우\'는 법 제64조 제1항의 \'안정된 직업에 재취직한 경우\'에 대응하는 규정으로서 그 취업이 반드시 민법상 고용의 성질을 가지는 것에 한정된다고 볼 수 없어, 주식회사 대표이사에 취임해 안정적으로 재취업한 경우도 원칙적으로 조기재취업수당이 지급되는 것으로 봄이 상당하다고 판시했습니다. 괴롭힘으로 인한 자진퇴사 수급 후 재취업 시 조기재취업수당의 취업 범위를 검토해볼 수 있습니다.',
        takeaway: '직장 내 괴롭힘 + 자진퇴사 + 조기재취업 우려 결합 시 정당한 이직 수급·조기재취업수당 취업 범위 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '괴롭힘 때문에 그만둬도 자진퇴사인가요?',
        answer:
          '<strong>괴롭힘으로 부득이 그만뒀다면 정당한 이직 사유로 수급자격이 검토되는 영역입니다.</strong> 괴롭힘 증거·신고 자료를 확보.',
      },
      {
        question: '괴롭힘을 어떻게 입증하나요?',
        answer:
          '<strong>메시지·녹취·동료 진술·신고 자료로 지속·반복성을 입증하는 영역입니다.</strong> 사내·고용노동부 신고 기록을 함께 준비.',
      },
      {
        question: '피보험단위기간은 얼마나 필요한가요?',
        answer:
          '<strong>이직일 이전 18개월간 180일 이상이 원칙인 영역입니다.</strong> 고용보험 가입이력을 먼저 확인.',
      },
      {
        question: '빨리 재취업하면 조기재취업수당을 받을 수 있나요?',
        answer:
          '<strong>구직급여 소진 전 안정적으로 재취업하면 조기재취업수당이 검토되는 영역입니다.</strong> 재취업 입증 자료를 준비.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 수급자격을 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 종합 가이드', href: '/guide/unemployment' },
      { label: '실업급여 거절 사유 5가지', href: '/guide/unemployment/benefit-application-rejection-5-reasons' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-allowance-track' },
      { label: '실업급여 대기기간 7일 규정 할 수 있는 일', href: '/guide/unemployment/waiting-period-7day-rules' },
    ],
  },

  // ─── 7. unemployment-pregnancy-childcare-resignation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-pregnancy-childcare-resignation-track',
    keyword: '임신 육아 자진퇴사 수급',
    questionKeyword: '임신·육아로 도저히 회사를 계속 다닐 수 없어 제가 사표를 냈어요. 자진퇴사면 실업급여가 안 된다는데 이런 경우도 그런가요? 또 육아휴직급여 신청도 깜빡 늦었는데, 기한이 지나면 아예 못 받는 건지 걱정됩니다.',
    ctaKeyword: '임신 육아 자진퇴사 정당 이직·육아휴직급여 신청기간 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임신 육아 자진퇴사 수급 — 5단계 정당 이직·신청기간 점검 | 로앤가이드',
      description:
        '임신·육아로 어쩔 수 없이 사표를 냈는데 실업급여가 되는지 궁금하다면 고용보험법상 임신·육아 정당한 이직 사유 수급과 육아휴직급여 신청기간(제척기간) 주의, 신청 절차까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임신과 출산, 이어진 육아로 도저히 회사를 계속 다닐 수 없어 결국 제가 먼저 사표를 낸 근로자입니다. 회사 사정으로 근무시간 조정이나 육아 지원을 받기 어려워 부득이 그만뒀는데, \'자진퇴사면 실업급여가 안 된다\'는 말부터 들어 막막했어요. 임신·육아로 어쩔 수 없이 나온 건데도 단순 자진퇴사로만 보고 수급을 막는 게 맞는지 헷갈립니다. 게다가 육아휴직급여 신청도 정신없는 와중에 깜빡 늦어버렸는데, 신청기간이 지나면 아예 못 받는 건지, 나중에라도 청구할 수 있는 건지 걱정이 큽니다. 임신·육아로 그만둔 경우 정당한 이직 사유로 수급할 수 있는지, 육아휴직급여 신청기간은 어떻게 되는지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 임신·출산·육아 등 정당한 사유가 있는 자기 사정에 의한 이직은 수급자격 제한에서 제외돼 수급자격이 검토되는 영역이며, 같은 법 제70조 제2항은 육아휴직급여 신청기간을 정하는 영역입니다. 판례는 구 고용보험법 제70조 제2항에서 정한 육아휴직급여 신청기간은 추상적 권리의 행사에 관한 제척기간이고, 같은 항은 육아휴직급여에 관한 법률관계를 조속히 확정하기 위한 강행규정이어서 근로자가 그 신청기간 내에 관할 직업안정기관의 장에게 급여 지급을 신청해야 하며 이를 단순한 훈시규정으로 볼 수 없다고 본 사례 흐름이 있는 영역입니다. 임신·육아 + 자진퇴사 + 신청기간 도과 우려 결합은 \'정당한 이직 수급·육아휴직급여 신청기간\' 검토가 가능한 트랙입니다. 피해자라면 ① 임신·육아 사정 ② 정당한 이직 사유 ③ 피보험단위기간 ④ 수급자격 ⑤ 육아휴직급여 신청기간 5중 트랙이 가능한 영역. 대응은 ① 사정 ② 정당이직 ③ 단위기간 ④ 수급 ⑤ 신청기간 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임신 육아 자진퇴사 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 임신·육아 사정·정당한 이직 사유·피보험단위기간·수급자격·육아휴직급여 신청기간 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임신·육아 사정</strong> — 임신·출산·육아로 근무 지속이 곤란했던 사정 정리.</li>\n<li><strong>② 정당한 이직 사유</strong> — 임신·육아 등으로 부득이 이직한 정당한 사유에 해당하는지.</li>\n<li><strong>③ 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>④ 수급자격</strong> — 자진퇴사라도 정당한 이직 사유로 수급자격이 인정될 수 있는지.</li>\n<li><strong>⑤ 육아휴직급여 신청기간</strong> — 신청기간(제척기간)을 도과하지 않도록 기한 내 신청하는지(제70조 제2항).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임신·육아로 부득이 그만둔 경우 자진퇴사라도 정당한 이직 사유로 수급자격이 검토되는 영역. 판례 흐름에서 육아휴직급여 신청기간은 제척기간이자 강행규정이어서 기간 내 신청하지 않으면 권리 행사에 제약이 생길 수 있으므로 신청기간 관리가 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임신·육아·이직 자료 보존 (즉시)</strong> — 임신·출산 증빙·육아 정황·이직확인서·근로 자료 보존.</li>\n<li><strong>2단계 — 정당한 이직·단위기간 정리 (1주)</strong> — 임신·육아 사정과 피보험단위기간(180일) 정리.</li>\n<li><strong>3단계 — 수급자격 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청.</li>\n<li><strong>4단계 — 이직 사유 소명 (고용센터 심사)</strong> — 임신·육아로 인한 정당한 이직 입증 자료 제출.</li>\n<li><strong>5단계 — 육아휴직급여 신청기간 관리 (기한 내)</strong> — 신청기간(제척기간) 도과 전 육아휴직급여 신청 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임신 육아 자진퇴사 정당 이직·육아휴직급여 신청기간 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 임신·육아 사정·정당한 이직·신청기간 갈래입니다.</strong></p>\n<ul>\n<li><strong>임신·출산 증빙 (진단서·출생 자료)</strong></li>\n<li><strong>육아 정황 자료 (양육 부담·근무 곤란)</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>근로계약서·재직 자료 (근무 정황)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>육아휴직급여 신청 자료 (신청기간 확인)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 두 갈래입니다. 먼저 임신·육아로 근무 지속이 곤란해 이직이 부득이했음을 진단서·육아 정황 자료로 뒷받침하고 피보험단위기간 180일을 점검하세요. 다음으로 육아휴직급여는 신청기간이 제척기간이자 강행규정이라 도과 시 권리 행사에 제약이 생길 수 있으므로 신청기간을 먼저 확인해 기한 내 신청하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당한 이직 사유</strong> — 임신·육아로 부득이 그만둔 정당한 이직인지(단순 자진퇴사와 구별).</li>\n<li><strong>이직확인서 사유</strong> — 이직 사유가 임신·육아 정황과 맞게 기재됐는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>육아휴직급여 신청기간</strong> — 제척기간·강행규정인 신청기간을 도과하지 않았는지.</li>\n<li><strong>신청 기한</strong> — 실업급여는 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고용센터 1350</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 육아휴직급여 신청기간의 법적 성격(제척기간·강행규정)',
        summary:
          '대법원 2018두47264(대법원, 2021.03.18 선고) 영역에서 법원은 구 고용보험법이 육아휴직급여 청구권 행사에 관하여 제70조 제2항에서 신청기간을, 제107조 제1항에서 소멸시효기간을 별도로 규정하고 있는데, 제70조 제2항은 통상적인 제척기간에 관한 규정 형식을 취하고 있어 그 신청기간은 추상적 권리의 행사에 관한 제척기간이고, 위 규정은 육아휴직급여에 관한 법률관계를 조속히 확정시키기 위한 강행규정이어서 근로자가 육아휴직급여를 지급받으려면 신청기간 내에 관할 직업안정기관의 장에게 급여 지급을 신청해야 하며 이를 단순한 훈시규정으로 볼 수 없다고 판시했습니다. 임신·육아 자진퇴사 수급과 함께 육아휴직급여를 정리할 때 신청기간의 제척기간 성격을 검토해볼 수 있습니다.',
        takeaway: '임신·육아 + 자진퇴사 + 신청기간 도과 우려 결합 시 정당한 이직 수급·육아휴직급여 신청기간(제척기간) 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '임신·육아로 그만둬도 자진퇴사인가요?',
        answer:
          '<strong>임신·육아로 부득이 그만뒀다면 정당한 이직 사유로 수급자격이 검토되는 영역입니다.</strong> 임신·육아 정황 자료를 확보.',
      },
      {
        question: '정당한 이직 사유를 어떻게 입증하나요?',
        answer:
          '<strong>진단서·육아 정황과 근무 곤란 사정으로 부득이함을 입증하는 영역입니다.</strong> 이직확인서 사유도 함께 확인.',
      },
      {
        question: '피보험단위기간은 얼마나 필요한가요?',
        answer:
          '<strong>이직일 이전 18개월간 180일 이상이 원칙인 영역입니다.</strong> 고용보험 가입이력을 먼저 확인.',
      },
      {
        question: '육아휴직급여 신청을 늦으면 어떻게 되나요?',
        answer:
          '<strong>신청기간은 제척기간·강행규정이라 도과 시 권리 행사에 제약이 생길 수 있는 영역입니다.</strong> 신청기간을 먼저 확인해 기한 내 신청.',
      },
      {
        question: '실업급여 신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 수급자격을 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '임신·육아 자진퇴사 구직급여 절차', href: '/guide/unemployment/unemployment-pregnancy-childcare-resignation-just-cause-track' },
      { label: '실업급여 종합 가이드', href: '/guide/unemployment' },
      { label: '계약직 만료 실업급여 신청 순서 5단계', href: '/guide/unemployment/contract-expiry-benefit-application-order' },
      { label: '실업급여 부정수급 적발 사례 5가지', href: '/guide/unemployment/benefit-fraud-top-5-cases' },
      { label: '실업급여 180일 피보험단위기간 계산', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
    ],
  },

  // ─── 8. retirement-part-time-worker-track ───
  {
    domain: 'retirement',
    slug: 'retirement-part-time-worker-track',
    keyword: '단시간근로자 퇴직금',
    questionKeyword: '단시간으로 오래 일하다 퇴직했는데, 회사가 퇴직금을 계산하면서 매달 받던 가족수당과 상여금을 평균임금에서 빼버렸어요. 회사 급여규정에는 그게 평균임금에 들어가는 것 같은데, 법정 하한만 넘으면 규정과 다르게 줘도 되는 건가요? 다툴 수 있나요?',
    ctaKeyword: '단시간근로자 퇴직금·급여규정 평균임금 산입 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '단시간근로자 퇴직금 — 5단계 급여규정·평균임금 산입 점검 | 로앤가이드',
      description:
        '단시간근로자 퇴직금에서 가족수당·상여금을 평균임금에서 뺐다면 근로자퇴직급여보장법 제8조와 급여규정상 평균임금 산입(하한 초과해도 규정 불리 적용 불가), 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"단시간으로 오랜 기간 한 회사에서 일하다 퇴직한 근로자입니다. 퇴직금을 받아보니 회사가 평균임금을 산정하면서 매달 꼬박꼬박 받던 가족수당과, 회사가 정기적으로 지급해 온 상여금 중 일부를 평균임금에서 통째로 빼버렸어요. 그런데 정작 회사 급여규정을 보면 퇴직금 산정의 기초가 되는 임금에 그 수당과 상여금이 포함되는 것으로 읽히는데도, 회사는 \'법이 보장한 최저 퇴직금 하한만 넘으면 규정과 다르게 적게 줘도 된다\'는 식으로 말합니다. 회사 스스로 정한 급여규정을 어겨 가며 퇴직금을 깎아도 되는 건지 도무지 납득이 가지 않아요. 가족수당·상여금을 평균임금에 포함해 퇴직금을 다시 산정해 차액을 다툴 여지가 있는지 막막한 상태입니다." 근로자퇴직급여 보장법 제8조 제1항은 사용자가 계속근로기간 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급하도록 정하고, 평균임금은 근로기준법 제2조 제1항 제6호에 따라 산정 사유 발생일 이전 3개월간 지급된 임금 총액을 그 기간의 총일수로 나눈 금액인 영역입니다. 판례는 근로자 퇴직 당시 시행하는 단체협약이나 취업규칙의 퇴직금규정 등이 있으면 사용자는 그에 따라 산정한 퇴직금을 지급해야 하고, 그렇게 산정한 퇴직금이 퇴직급여법 제8조 제1항이 정한 퇴직금액의 하한에 미치지 못하면 그 하한을 지급해야 하나, 이것이 그 하한을 초과하기만 하면 퇴직금규정 등에서 정한 것보다 불리하게 퇴직금을 지급해도 된다는 뜻은 아니어서 급여규정상 평균임금에 포함되는 가족수당·상여금을 제외하고 산정하는 것은 허용되지 않는다고 본 사례 흐름이 있는 영역입니다. 단시간 근로 + 가족수당·상여금 + 평균임금 누락 결합은 \'단시간 퇴직금·급여규정 평균임금 산입\' 다툼이 가능한 트랙입니다. 피해자라면 ① 단시간 근로자성 ② 급여규정 해석 ③ 평균임금 산입 ④ 하한·규정 우선 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 근로자성 ② 급여규정 ③ 산입 ④ 하한 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 단시간근로자 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 단시간 근로자성·급여규정 해석·평균임금 산입·하한/규정 우선·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단시간 근로자성</strong> — 단시간이라도 계속근로기간 등 퇴직금 지급요건을 갖췄는지(퇴직급여법 제8조).</li>\n<li><strong>② 급여규정 해석</strong> — 급여규정상 평균임금에 가족수당·상여금이 포함되는지(지급관행·개정 경위 종합).</li>\n<li><strong>③ 평균임금 산입</strong> — 매달 지급된 가족수당·정기 상여금이 평균임금에 산입되는지.</li>\n<li><strong>④ 하한·규정 우선</strong> — 하한을 초과하더라도 급여규정보다 불리하게 지급할 수 없는지.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 퇴직금규정 등이 있으면 그에 따라 산정하되 하한 미달 시 하한을 지급해야 하고, 하한을 초과하더라도 급여규정보다 불리하게 지급할 수는 없어 규정상 평균임금에 포함되는 가족수당·상여금을 제외하고 산정하는 것은 허용되지 않는 영역. 급여규정 해석과 평균임금 산입 범위가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 급여·규정 자료 보존 (즉시)</strong> — 급여규정·취업규칙·임금명세서·퇴직금 산정서 보존.</li>\n<li><strong>2단계 — 급여규정·산입 정리 (1~2주)</strong> — 가족수당·상여금이 급여규정상 평균임금에 포함되는지·지급관행 정리.</li>\n<li><strong>3단계 — 평균임금 재산정 (2~3주)</strong> — 산입분 반영 평균임금 → 퇴직금 재산정·차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단시간근로자 퇴직금·급여규정 평균임금 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 근로자성·급여규정·평균임금 산입 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (단시간 근로조건·계속근로기간)</strong></li>\n<li><strong>급여규정·취업규칙 (퇴직금 산정 기초 임금 규정)</strong></li>\n<li><strong>임금명세서 (가족수당·상여금 지급 내역)</strong></li>\n<li><strong>상여금 지급 관행 자료 (정기·계속 지급 정황)</strong></li>\n<li><strong>회사 퇴직금 산정서 (제외 항목·계산 내역)</strong></li>\n<li><strong>평균임금·퇴직금 재산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'급여규정상 평균임금에 무엇이 포함되는지\'입니다. 급여규정의 문언과 가족수당·상여금의 지급관행·개정 경위를 함께 살펴 산입 여부를 정리하고, 법정 하한을 넘었더라도 급여규정보다 불리하게 줄 수 없다는 점을 들어 산입분을 반영한 재산정 차액을 도출해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>급여규정 해석</strong> — 급여규정상 평균임금에 가족수당·상여금이 포함되는지.</li>\n<li><strong>평균임금 산입</strong> — 매달 지급된 가족수당·정기 상여금이 산입되는지.</li>\n<li><strong>하한·규정 우선</strong> — 하한을 초과해도 급여규정보다 불리하게 지급할 수 없는지.</li>\n<li><strong>재산정 차액</strong> — 산입분 반영 시 퇴직금 차액이 발생하는지.</li>\n<li><strong>시효 관리</strong> — 퇴직금·차액 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 (퇴직연금)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 급여규정상 평균임금 산입과 하한 초과 시 규정 불리 적용 금지',
        summary:
          '대법원 2016다228802(대법원, 2018.08.30 선고) 영역에서 법원은 어느 사업장의 급여규정에서 퇴직금 산정 기초인 임금에 상여금 등이 포함되는지는 지급관행·급여규정의 개정 경위와 내용 등 여러 사정을 종합해 해석해야 하고, 근로자 퇴직 당시 시행하는 단체협약이나 취업규칙의 퇴직금규정 등이 있으면 사용자는 그에 따라 산정한 퇴직금을 지급해야 하며 그것이 근로자퇴직급여 보장법 제8조 제1항이 정한 하한에 미치지 못하면 그 하한을 지급해야 하나, 하한을 초과하기만 하면 퇴직금규정보다 불리하게 지급해도 된다는 뜻은 아니어서 급여규정상 평균임금에 포함되는 가족수당과 상여금을 제외하고 산정하는 것은 허용되지 않는다고 판시했습니다. 단시간근로자 퇴직금에서 가족수당·상여금이 빠졌다면 급여규정 해석과 평균임금 산입을 검토해볼 수 있습니다.',
        takeaway: '단시간 근로 + 가족수당·상여금 + 평균임금 누락 결합 시 급여규정 해석·평균임금 산입·하한 초과 시 규정 우선 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '단시간으로 일해도 퇴직금을 받나요?',
        answer:
          '<strong>단시간이라도 계속근로기간 등 요건을 갖추면 퇴직금이 지급되는 영역입니다(퇴직급여법 제8조).</strong> 근로조건·계속근로기간을 정리.',
      },
      {
        question: '가족수당·상여금이 평균임금에 들어가나요?',
        answer:
          '<strong>급여규정과 지급관행상 평균임금에 포함되면 산입되는 영역입니다.</strong> 급여규정과 지급 내역을 대조.',
      },
      {
        question: '법정 하한만 넘으면 규정과 다르게 줘도 되나요?',
        answer:
          '<strong>하한을 초과하더라도 급여규정보다 불리하게 지급할 수 없는 영역입니다.</strong> 규정상 산입 항목을 확인.',
      },
      {
        question: '퇴직금이 얼마나 늘어나나요?',
        answer:
          '<strong>산입분을 반영해 평균임금으로 재산정하면 차액이 산출되는 영역입니다.</strong> 재산정표로 확인.',
      },
      {
        question: '차액 청구 시효는요?',
        answer:
          '<strong>퇴직금·차액 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '파트타임 근로자 퇴직금 계산', href: '/guide/retirement/retirement-part-time-eligibility' },
      { label: '상여금 포함 평균임금 퇴직금', href: '/guide/retirement/retirement-average-wage-bonus-inclusion-track' },
      { label: '퇴직급여 종합 가이드', href: '/guide/retirement' },
      { label: '퇴직금 미지급 신고 절차 4단계 타임라인', href: '/guide/retirement/unpaid-retirement-report-procedure' },
    ],
  },

  // ─── 9. retirement-bonus-average-wage-track ───
  {
    domain: 'retirement',
    slug: 'retirement-bonus-average-wage-track',
    keyword: '상여금 평균임금 산입 퇴직금',
    questionKeyword: '해마다 정기적으로 받던 상여금이 있는데, 퇴직금을 계산할 때 회사가 그 상여금을 평균임금에서 빼버렸어요. 정기적으로 계속 받아 온 상여금이면 임금으로 봐서 평균임금에 넣어야 하는 것 아닌가요? 퇴직금을 다시 다툴 수 있나요?',
    ctaKeyword: '상여금 임금성·평균임금 산입 퇴직금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '상여금 평균임금 산입 퇴직금 — 5단계 임금성·재산정 점검 | 로앤가이드',
      description:
        '정기 상여금을 퇴직금 평균임금에서 뺐다면 근로자퇴직급여보장법 제8조와 평균임금 산정의 기초가 되는 임금의 의미·상여금 임금성 요건, 퇴직금 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"해마다 정기적으로 받아 온 상여금이 있던 근로자입니다. 입사 이후 줄곧 정해진 시기에 계속 지급돼 사실상 임금처럼 받아 왔는데, 막상 퇴직하며 퇴직금을 계산해 보니 회사가 그 상여금을 평균임금에서 통째로 빼버렸어요. 회사는 \'상여금은 은혜적으로 준 것\'이라거나 \'임금이 아니다\'라는 식으로 말하는데, 정작 저는 정기적으로 빠짐없이 받아 왔고 액수도 미리 정해져 있었습니다. 정기적·계속적으로 지급돼 온 상여금이라면 근로의 대가인 임금으로 봐서 평균임금에 넣어야 하는 게 아닌지 도무지 납득이 가지 않아요. 상여금을 평균임금에 포함해 퇴직금을 다시 산정해 차액을 다툴 여지가 있는지 막막한 상태입니다." 근로자퇴직급여 보장법 제8조 제1항은 사용자가 계속근로기간 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급하도록 정하고, 평균임금은 근로기준법 제2조 제1항 제6호에 따라 산정 사유 발생일 이전 3개월간 지급된 임금 총액을 그 기간의 총일수로 나눈 금액인 영역입니다. 판례는 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 근로자에게 지급하는 일체의 금품이고, 상여금이라도 계속적·정기적으로 지급되고 그 지급에 관해 단체협약·취업규칙·근로계약 등으로 사용자에게 지급의무가 지워져 있다면 근로의 대가로 지급되는 임금에 해당해 평균임금 산정의 기초가 되는 임금에 포함된다는 취지의 사례 흐름이 있는 영역입니다. 정기 상여금 + 임금성 + 평균임금 누락 결합은 \'상여금 임금성·평균임금 산입\' 다툼이 가능한 트랙입니다. 피해자라면 ① 상여금 정기·계속성 ② 지급의무 ③ 임금성 ④ 평균임금 산입·재산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 정기성 ② 지급의무 ③ 임금성 ④ 산입 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상여금 평균임금 산입 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상여금 정기·계속성·지급의무·임금성·평균임금 산입/재산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상여금 정기·계속성</strong> — 상여금이 정해진 시기에 계속적·정기적으로 지급됐는지.</li>\n<li><strong>② 지급의무</strong> — 단체협약·취업규칙·근로계약 등으로 사용자에게 지급의무가 지워졌는지.</li>\n<li><strong>③ 임금성</strong> — 상여금이 근로의 대가로 지급되는 임금에 해당하는지.</li>\n<li><strong>④ 평균임금 산입·재산정</strong> — 임금성이 인정되면 평균임금에 산입해 퇴직금을 재산정(퇴직급여법 제8조).</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 평균임금 산정 기초가 되는 임금은 근로의 대가로 지급하는 일체의 금품이고, 상여금이라도 계속적·정기적으로 지급되고 지급의무가 지워져 있으면 임금으로서 평균임금에 포함되는 영역. 상여금의 정기·계속성과 지급의무가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 급여·상여 자료 보존 (즉시)</strong> — 임금명세서·상여금 지급 내역·취업규칙·퇴직금 산정서 보존.</li>\n<li><strong>2단계 — 정기·지급의무 정리 (1~2주)</strong> — 상여금의 정기·계속 지급 정황과 지급의무 근거 정리.</li>\n<li><strong>3단계 — 임금성·평균임금 재산정 (2~3주)</strong> — 임금성 인정 시 평균임금 산입 → 퇴직금 재산정·차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상여금 임금성·평균임금 산입 퇴직금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 정기·계속성·지급의무·임금성 갈래입니다.</strong></p>\n<ul>\n<li><strong>상여금 지급 내역 (지급 시기·액수·정기성)</strong></li>\n<li><strong>취업규칙·단체협약·근로계약 (상여금 지급 규정·의무)</strong></li>\n<li><strong>임금명세서 (상여금 표시·근로 대가 정황)</strong></li>\n<li><strong>상여금 지급 관행 자료 (계속·반복 지급)</strong></li>\n<li><strong>회사 퇴직금 산정서 (상여금 제외 내역)</strong></li>\n<li><strong>평균임금·퇴직금 재산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'상여금이 임금인지\'를 가리는 것입니다. 상여금이 정해진 시기에 계속·정기적으로 지급됐고 취업규칙·단체협약·근로계약 등으로 지급의무가 지워져 있었다면 근로의 대가인 임금으로 볼 여지가 있으므로, 지급 내역과 규정으로 정기성·지급의무를 정리해 평균임금 산입 후 재산정 차액을 도출해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정기·계속성</strong> — 상여금이 정해진 시기에 계속·정기적으로 지급됐는지.</li>\n<li><strong>지급의무</strong> — 취업규칙·단체협약 등으로 지급의무가 지워졌는지.</li>\n<li><strong>임금성</strong> — 상여금이 근로의 대가로 지급되는 임금인지.</li>\n<li><strong>평균임금 산입</strong> — 임금성이 인정돼 평균임금에 산입되는지.</li>\n<li><strong>시효 관리</strong> — 퇴직금·차액 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 (퇴직연금)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 기초 임금의 의미와 상여금의 임금 인정 요건',
        summary:
          '대법원 2012다48077(대법원, 2013.04.11 선고) 영역에서 법원은 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 근로자에게 지급하는 일체의 금품을 말하고, 상여금이라도 계속적·정기적으로 지급되고 그 지급에 관해 단체협약·취업규칙·근로계약 등에 의하여 사용자에게 지급의무가 지워져 있다면 이는 근로의 대가로 지급되는 임금에 해당하여 평균임금 산정의 기초가 되는 임금에 포함된다고 판시했습니다. 정기 상여금이 퇴직금 평균임금에서 빠졌다면 상여금의 임금성과 평균임금 산입을 검토해볼 수 있습니다.',
        takeaway: '정기 상여금 + 임금성 + 평균임금 누락 결합 시 상여금 정기·계속성·지급의무·임금성·평균임금 산입 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '정기 상여금이 평균임금에 들어가나요?',
        answer:
          '<strong>계속·정기적으로 지급되고 지급의무가 지워졌다면 임금으로서 평균임금에 산입되는 영역입니다.</strong> 지급 내역·규정을 정리.',
      },
      {
        question: '상여금이 임금인지 어떻게 가리나요?',
        answer:
          '<strong>근로의 대가로 정기·계속 지급되고 지급의무가 있는지로 임금성을 보는 영역입니다.</strong> 취업규칙·지급 관행을 확인.',
      },
      {
        question: '회사가 상여금은 은혜적이라는데요?',
        answer:
          '<strong>지급의무가 규정·관행으로 지워져 있으면 은혜적 금품으로 보기 어려운 영역입니다.</strong> 규정·지급 정황을 대조.',
      },
      {
        question: '퇴직금이 얼마나 늘어나나요?',
        answer:
          '<strong>상여금을 산입해 평균임금으로 재산정하면 차액이 산출되는 영역입니다.</strong> 재산정표로 확인.',
      },
      {
        question: '차액 청구 시효는요?',
        answer:
          '<strong>퇴직금·차액 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '상여금 퇴직금 평균임금 산입', href: '/guide/retirement/retirement-bonus-average-wage-inclusion-track' },
      { label: '평균임금 산정 퇴직금 재계산', href: '/guide/retirement/retirement-average-wage-recalc-track' },
      { label: '퇴직급여 종합 가이드', href: '/guide/retirement' },
      { label: '퇴직금 노동청 신고 민사청구 차이', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
    ],
  },

  // ─── 10. industrial-accident-commuting-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-commuting-track',
    keyword: '출퇴근 재해 산재',
    questionKeyword: '출퇴근하던 길에 사고가 나 다쳤어요. 업무 중도 아니고 통상적인 출퇴근길에서 생긴 사고인데도 근로복지공단은 업무와의 인과관계를 인정하기 어렵다며 급여를 안 줍니다. 출퇴근 재해도 산재가 되는지, 인과관계는 누가 입증해야 하는지 궁금합니다.',
    ctaKeyword: '출퇴근 재해 업무상 재해·상당인과관계 증명책임 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출퇴근 재해 산재 — 5단계 업무상 재해·증명책임 점검 | 로앤가이드',
      description:
        '통상적인 출퇴근길 사고에 산재 급여가 부지급됐다면 산업재해보상보험법 제5조·제37조 출퇴근재해·업무상 재해와 상당인과관계 증명책임(근로자 측), 심사청구 90일까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"평소처럼 출퇴근하던 길에 사고를 당해 다친 근로자입니다. 업무 중에 생긴 사고가 아니라 통상적으로 이용하던 경로와 방법으로 오가던 출퇴근길에서 일어난 일인데도, 근로복지공단은 \'업무와 재해 사이 상당인과관계를 인정하기 어렵다\'며 급여를 지급하지 않았습니다. 출퇴근 중 사고도 업무상 재해로 보아 산재가 된다고 들었는데, 정작 공단은 인과관계를 부정하고, 그 인과관계를 누가 입증해야 하는지조차 헷갈려 막막했어요. 회사가 제공한 교통수단이 아니어도, 평소 다니던 길에서 난 사고라면 산재로 인정받을 수 있는 게 아닌지 도무지 알 수가 없습니다. 출퇴근 재해를 업무상 재해로 인정받아 급여를 받을 수 있는지, 상당인과관계 입증을 어떻게 해야 하는지 막막한 상태입니다." 산업재해보상보험법 제5조 제1호는 업무상 재해를 업무상 사유에 따른 부상·질병·장해·사망으로 정하고, 제37조 제1항 제3호는 통상적인 경로와 방법으로 출퇴근하는 중 발생한 사고 등 출퇴근 재해를 업무상 재해로 정하며, 같은 항 단서는 업무와 재해 사이에 상당인과관계가 있어야 함을 정하는 영역입니다. 판례는 2007년 개정으로 신설된 구 산재보험법 제37조 제1항은 업무상 재해를 인정하기 위한 업무와 재해 사이의 상당인과관계에 관한 증명책임을 근로복지공단에 분배하거나 전환하는 규정으로 볼 수 없고, 2007년 개정 이후에도 업무와 재해 사이의 상당인과관계의 증명책임은 업무상 재해를 주장하는 근로자 측에게 있다고 본 사례 흐름이 있는 영역입니다. 출퇴근 사고 + 업무상 재해 + 인과관계 부정 결합은 \'출퇴근 재해·상당인과관계 증명책임\' 검토가 가능한 트랙입니다. 피해자라면 ① 출퇴근 재해 해당성 ② 통상적 경로·방법 ③ 상당인과관계 ④ 증명책임(근로자 측) ⑤ 심사청구 5중 트랙이 가능한 영역. 대응은 ① 해당성 ② 경로·방법 ③ 인과관계 ④ 증명 ⑤ 심사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 출퇴근 재해 산재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 출퇴근 재해 해당성·통상적 경로/방법·상당인과관계·증명책임(근로자 측)·심사청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 출퇴근 재해 해당성</strong> — 출퇴근 중 발생한 사고가 업무상 재해 유형에 해당하는지(산재보험법 제37조).</li>\n<li><strong>② 통상적 경로·방법</strong> — 통상적인 경로와 방법으로 출퇴근하던 중 발생한 사고인지.</li>\n<li><strong>③ 상당인과관계</strong> — 업무(출퇴근)와 재해 사이에 상당인과관계가 있는지(제37조 제1항 단서).</li>\n<li><strong>④ 증명책임(근로자 측)</strong> — 상당인과관계 증명책임이 업무상 재해를 주장하는 근로자 측에 있는지.</li>\n<li><strong>⑤ 심사청구 (처분 안 날부터 90일 내)</strong> — 부지급 시 근로복지공단 심사청구·재심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 2007년 개정 산재보험법 제37조 제1항은 상당인과관계 증명책임을 공단에 전환하는 규정으로 볼 수 없어 그 증명책임은 여전히 업무상 재해를 주장하는 근로자 측에 있는 영역. 출퇴근 재해 해당성과 통상적 경로·방법, 상당인과관계 입증이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 요양·급여·심사 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·경로 자료 보존 (즉시)</strong> — 사고 경위·진단서·출퇴근 경로/교통수단·근무 일정 자료 보존.</li>\n<li><strong>2단계 — 통상적 경로·인과관계 정리 (1~2주)</strong> — 통상적 경로·방법 해당성과 업무 관련 상당인과관계 정리.</li>\n<li><strong>3단계 — 급여 신청 (근로복지공단)</strong> — 요양·휴업·유족급여 등 신청서·인과관계 소견 제출.</li>\n<li><strong>4단계 — 심사청구 (부지급 시, 처분 안 날부터 90일 내)</strong> — 근로복지공단 심사청구·재심사청구.</li>\n<li><strong>5단계 — 행정소송 (제소기간 내)</strong> — 부지급 처분 취소소송 검토(상당인과관계 입증 보강).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 신청 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출퇴근 재해 업무상 재해·상당인과관계 증명책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 출퇴근 재해 해당성·경로·인과관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>사고 경위서 (사고 일시·장소·경위)</strong></li>\n<li><strong>진단서·진료기록 (부상·질병명·치료 경과)</strong></li>\n<li><strong>출퇴근 경로·교통수단 자료 (통상적 경로·방법)</strong></li>\n<li><strong>근무 일정·출퇴근 시간 자료 (출퇴근 정황)</strong></li>\n<li><strong>사고 입증 자료 (블랙박스·CCTV·교통사고 자료)</strong></li>\n<li><strong>급여 부지급 처분서 (처분 사유·시점)</strong></li>\n<li><strong>업무 관련 상당인과관계 소견 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'통상적인 경로·방법으로 출퇴근하던 중 사고였는지\'와 \'상당인과관계\'입니다. 출퇴근 재해의 상당인과관계 증명책임은 근로자 측에 있으므로, 평소 다니던 경로·교통수단과 근무 일정을 자료로 정리하고 블랙박스·CCTV·교통사고 자료로 사고 경위를 입증해 인과관계를 뒷받침해두는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>출퇴근 재해 해당성</strong> — 출퇴근 중 사고가 업무상 재해 유형에 해당하는지.</li>\n<li><strong>통상적 경로·방법</strong> — 통상적인 경로와 방법으로 출퇴근하던 중 사고인지.</li>\n<li><strong>상당인과관계</strong> — 업무(출퇴근)와 재해 사이 상당인과관계가 있는지.</li>\n<li><strong>증명책임</strong> — 상당인과관계 증명책임이 근로자 측에 있는지.</li>\n<li><strong>심사·제소 기한</strong> — 심사청구·행정소송 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>근로복지공단 1588-0075 (산재 요양·급여 상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>산재 전문 공인노무사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상 재해 상당인과관계 증명책임의 소재(근로자 측)',
        summary:
          '대법원 2017두45933(대법원, 2021.09.09 선고) 영역에서 법원은 산업재해보상보험법상 보험급여의 지급요건, 2007. 12. 14. 전부개정된 구 산재보험법 제37조 제1항 전체의 내용과 구조·입법 경위·입법 취지 등을 고려하면 2007년 개정으로 신설된 구 산재보험법 제37조 제1항은 업무상 재해를 인정하기 위한 업무와 재해 사이의 상당인과관계에 관한 증명책임을 근로복지공단에 분배하거나 전환하는 규정으로 볼 수 없고, 2007년 개정 이후에도 업무와 재해 사이의 상당인과관계의 증명책임은 업무상 재해를 주장하는 근로자 측에게 있다고 보는 것이 타당하므로 기존 판례를 유지하여야 한다고 판시했습니다. 출퇴근 재해의 산재 인정을 다툴 때 상당인과관계 증명책임의 소재를 검토해볼 수 있습니다.',
        takeaway: '출퇴근 사고 + 업무상 재해 + 인과관계 부정 결합 시 출퇴근 재해 해당성·통상적 경로·상당인과관계 증명책임(근로자 측) 검토 영역 — 근로복지공단 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '출퇴근길 사고도 산재가 되나요?',
        answer:
          '<strong>통상적인 경로와 방법으로 출퇴근하던 중 사고는 업무상 재해로 검토되는 영역입니다(제37조).</strong> 경로·교통수단 자료를 정리.',
      },
      {
        question: '회사 차가 아니어도 산재가 되나요?',
        answer:
          '<strong>통상적인 경로·방법이라면 출퇴근 재해로 검토될 수 있는 영역입니다.</strong> 평소 출퇴근 정황을 입증.',
      },
      {
        question: '상당인과관계는 누가 입증하나요?',
        answer:
          '<strong>상당인과관계 증명책임은 업무상 재해를 주장하는 근로자 측에 있는 영역입니다.</strong> 사고 경위·인과관계 자료를 보강.',
      },
      {
        question: '부지급됐는데 어떻게 다투나요?',
        answer:
          '<strong>근로복지공단 심사청구·재심사청구 또는 행정소송으로 다투는 영역입니다.</strong> 단계별 기한을 함께 확인.',
      },
      {
        question: '심사청구 기한이 있나요?',
        answer:
          '<strong>심사청구는 처분을 안 날부터 90일 이내가 원칙인 영역입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '산재 신청 절차, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '업무 스트레스 정신질환 산재 인정 제3자 구상', href: '/guide/industrial-accident/industrial-accident-work-stress-mental-illness-recognition-track' },
      { label: '출퇴근 교통사고 산재', href: '/guide/industrial-accident/industrial-accident-commute-disaster-track' },
      { label: '과로 스트레스 기존 질병 악화 업무상 질병 요양급여', href: '/guide/industrial-accident/industrial-accident-overwork-aggravated-existing-disease-claim-track' },
      { label: '업무 스트레스 정신질환 자살 업무상 재해 인정 절차', href: '/guide/industrial-accident/industrial-accident-work-stress-mental-illness-suicide-recognition-track' },
      { label: '업무상 스트레스 정신질환 산재', href: '/guide/industrial-accident/industrial-accident-work-stress-mental-illness-track' },
    ],
  },
];
