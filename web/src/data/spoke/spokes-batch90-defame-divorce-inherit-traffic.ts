import { SpokePage } from '../spoke-pages';

// batch90 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-07)
//
// 고유 존재 이유:
// 1. divorce-economic-control-abuse-ground-track — 생활비 통제·경제적 학대로 파탄된 혼인의 재판상 이혼 판단형 트랙. 제840조 제6호 중대한 사유의 의미·판단 기준과 파탄 시 이혼 청구 허용이 핵심.
// 2. divorce-inlaw-mistreatment-ground-track — 시댁 부당대우·신뢰 훼손으로 파탄된 혼인의 재판상 이혼 판단형 트랙. 제840조 제6호 중대한 사유와 파탄 책임의 경중 비교가 핵심.
// 3. divorce-hidden-debt-property-division-track — 배우자가 숨긴 채무·자산의 재산분할 판단형 트랙. 혼인 해소 전 재산분할청구권 사전포기의 불허와 포기약정 해석이 핵심.
// 4. divorce-public-pension-division-track — 공무원 퇴직연금수급권의 재산분할 절차형 트랙. 이미 수령 중인 퇴직연금의 분할 대상 포함과 정기금 방식 분할이 핵심.
// 5. defamation-apartment-resident-cafe-post-track — 아파트 입주자대표 비방글 명예훼손 피해자 판단형 트랙. 정보통신망법 제70조 제1항 비방 목적과 사회적 평가 저하의 별개 구성요건·검사 증명책임이 핵심.
// 6. defamation-restaurant-false-review-track — 음식점 허위 리뷰 명예훼손 피해자 판단형 트랙. 정보통신망법 제70조 제2항 거짓 사실과 비방 목적의 별개 구성요건·공익성 경계가 핵심.
// 7. defamation-youtube-comment-track — 유튜브 댓글 모욕·명예훼손 피해자 판단형 트랙. 전파가능성 공연성과 미필적 고의, 발언 후 실제 전파 여부의 소극적 고려가 핵심.
// 8. defamation-workplace-rumor-falsely-accused-defense — accused 관점. 직장 내 공론화 게시가 형법 제310조 진실성·공익으로 위법성조각되는지 다투는 방어 트랙. 진실·공익·부수적 사익이 핵심.
// 9. inheritance-qualified-acceptance-period-track — 한정승인 신고기간·청산절차 절차형 트랙. 제1019조 3개월 고려기간과 한정승인 청산 미종료 시 상속재산분할청구 가능성이 핵심.
// 10. traffic-accident-crosswalk-pedestrian-fault-track — 신호등 없는 횡단보도 보행자 사고 피해자 과실 판단형 트랙. 일실수입 산정과 공동불법행위 과실상계의 전체적 평가가 핵심.

export const spokesBatch90DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-economic-control-abuse-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-economic-control-abuse-ground-track',
    keyword: '경제적 학대 이혼 사유',
    questionKeyword: '배우자가 생활비를 한 푼도 주지 않으면서 제 카드와 통장까지 모두 관리해 제가 쓰는 돈을 일일이 통제하고, 경제활동조차 막아 왔어요. 이런 경제적 학대도 이혼 사유가 되는지, 혼인이 파탄됐다고 인정되면 제가 청구한 이혼이 받아들여지는지 막막합니다.',
    ctaKeyword: '경제적 학대 이혼·파탄 중대한 사유 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '경제적 학대 이혼 사유 — 5단계 파탄·중대사유 점검 | 로앤가이드',
      description:
        '배우자의 생활비 통제·경제적 학대로 이혼을 고민한다면, 민법 제840조 제6호 혼인을 계속하기 어려운 중대한 사유와 파탄 판단·책임 경중·이혼 청구까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 생활비를 거의 주지 않으면서도 제 카드와 통장은 물론 급여까지 모두 자기 손에 쥐고 제가 쓰는 돈을 일일이 따져 묻고, 제가 일을 하려 하면 그마저 막아 경제적으로 철저히 의존하게 만든 상황입니다. 폭언이나 폭력처럼 눈에 보이는 것은 아니어도 매일같이 돈으로 사람을 옥죄는 이런 경제적 학대가 과연 재판으로 이혼을 받아낼 만한 사유가 되는지, 우리 부부 사이가 이미 회복할 수 없을 만큼 틀어졌다고 인정되면 제가 낸 이혼 청구가 받아들여지는지, 그렇다면 무엇부터 정리해야 하는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제840조 제6호는 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'를 재판상 이혼 사유로 정하고, 민법 제826조 제1항은 부부의 동거·부양·협조 의무를 정하는 영역입니다. 판례는 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하며, 혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등 여러 사정을 두루 고려해 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 그 원인에 대한 원고의 책임이 피고보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 본 사례 흐름이 있는 영역입니다. 경제적 학대 + 부양 거부 + 파탄 결합은 \'학대·파탄·중대한 사유\' 정리가 필요한 트랙입니다. 당사자라면 ① 경제적 학대 ② 부양 거부 ③ 중대한 사유 ④ 파탄 책임 ⑤ 이혼·분할 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 학대 ② 부양 ③ 사유 ④ 책임 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 경제적 학대 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경제적 학대·부양 거부·중대한 사유·파탄 책임·이혼·분할 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경제적 학대</strong> — 생활비 통제·금전 감시·경제활동 차단 정황의 확보.</li>\n<li><strong>② 부양 거부</strong> — 정당한 이유 없는 부양·협조 의무 위반 정리.</li>\n<li><strong>③ 중대한 사유</strong> — 제840조 제6호 혼인을 계속하기 어려운 중대한 사유 해당 여부.</li>\n<li><strong>④ 파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임의 경중 정리.</li>\n<li><strong>⑤ 이혼·분할</strong> — 재판상 이혼·재산분할·위자료 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인의 계속이 한쪽에게 참을 수 없는 고통이 되면 중대한 사유로 인정될 수 있고, 파탄이 인정되면 원고 책임이 피고보다 더 무겁지 않은 한 이혼 청구를 받아들일 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경제적 학대 자료 확보 (즉시)</strong> — 생활비 단절·카드·통장 통제·경제활동 차단 정황 자료 확보.</li>\n<li><strong>2단계 — 부양·사유 정리 (1~2주)</strong> — 부양·협조 의무 위반 여부, 중대한 사유 해당성 정리.</li>\n<li><strong>3단계 — 파탄 책임·분할 정리 (2~3주)</strong> — 파탄에 관한 쌍방 책임의 경중, 재산분할·위자료 정리.</li>\n<li><strong>4단계 — 이혼·재산분할 청구 (소 제기 시)</strong> — 재판상 이혼·재산분할·위자료 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 재산분할·위자료 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경제적 학대 이혼·파탄 중대한 사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경제적 학대·부양 거부·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>생활비 단절·송금 내역 자료 (부양 거부)</strong></li>\n<li><strong>카드·통장·급여 통제 정황 자료 (경제적 학대)</strong></li>\n<li><strong>경제활동 차단·취업 방해 정황 자료 (학대 정도)</strong></li>\n<li><strong>부부 재산·소득·계좌 자료 (재산분할)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (중대한 사유·책임정도)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경제적 학대는 생활비 통제·금전 감시·경제활동 차단이 부양·협조 의무를 저버려 혼인의 본질을 형해화했는지를 종합해 판단되는 영역이므로 송금 내역·통제 정황을 시간 순으로 정리하는 것이 핵심. 파탄에 관한 본인 책임이 상대보다 더 무겁지 않다는 점도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경제적 학대</strong> — 생활비 통제·경제활동 차단이 부양 의무 위반인지.</li>\n<li><strong>중대한 사유</strong> — 경제적 학대가 제840조 제6호에 해당하는지.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임의 경중.</li>\n<li><strong>재산분할</strong> — 통제된 공동재산·소득의 분할 반영 범위.</li>\n<li><strong>위자료</strong> — 경제적 학대로 인한 정신적 고통의 위자료 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·재산분할·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366 (가정 위기 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인을 계속하기 어려운 중대한 사유와 파탄 시 이혼 청구',
        summary:
          '대법원 2022므10932(대법원, 2022.06.16 선고) 영역에서 법원은 민법 제840조 제6호에서 정한 이혼사유인 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말한다고 보았습니다. 또한 이를 판단할 때에는 혼인계속의사의 유무, 파탄의 원인에 관한 당사자의 책임 유무, 혼인생활의 기간, 자녀의 유무, 당사자의 연령, 이혼 후의 생활보장 등 혼인관계에 관한 여러 사정을 두루 고려하여야 하고, 이러한 사정을 고려하여 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 그 파탄의 원인에 대한 원고의 책임이 피고의 책임보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 판시했습니다. 경제적 학대로 인한 파탄 사안에서도 중대한 사유·파탄 책임을 검토해볼 수 있습니다.',
        takeaway: '경제적 학대 + 부양 거부 + 파탄 결합 시 중대한 사유 해당성·파탄 책임의 경중·재산분할·위자료 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '폭력이 없어도 경제적 학대로 이혼이 되나요?',
        answer:
          '<strong>생활비 통제·경제활동 차단이 혼인의 본질을 형해화하면 중대한 사유로 검토되는 영역입니다.</strong> 생활비 단절·통제 정황 자료를 정리.',
      },
      {
        question: '생활비를 안 주고 통장을 다 가져간 것도 사유가 되나요?',
        answer:
          '<strong>정당한 이유 없이 부양·협조 의무를 저버린 정황은 파탄 판단의 자료가 되는 영역입니다.</strong> 송금 내역·금전 통제 자료를 정리.',
      },
      {
        question: '혼인이 파탄됐다고 인정되면 이혼이 받아들여지나요?',
        answer:
          '<strong>파탄이 인정되면 원고 책임이 상대보다 더 무겁지 않은 한 이혼 청구가 받아들여질 수 있는 영역입니다.</strong> 파탄 경위·책임정도 자료를 정리.',
      },
      {
        question: '경제활동을 못 하게 막은 것도 따질 수 있나요?',
        answer:
          '<strong>취업 방해·경제적 자립 차단 정황도 학대 정도를 평가하는 자료가 되는 영역입니다.</strong> 경제활동 차단 정황 자료를 정리.',
      },
      {
        question: '이혼하면서 위자료와 재산분할을 함께 청구할 수 있나요?',
        answer:
          '<strong>재판상 이혼과 함께 위자료·재산분할을 청구할 수 있는 영역입니다.</strong> 부부 재산·피해 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '부정행위 혼인파탄 위자료 판단', href: '/guide/divorce/divorce-adultery-marriage-breakdown-alimony-track' },
      { label: '시댁 부당대우 이혼 사유', href: '/guide/divorce/divorce-inlaw-mistreatment-ground-track' },
      { label: '이혼 시 재산분할 대상은 무엇인가요?', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 2. divorce-inlaw-mistreatment-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-inlaw-mistreatment-ground-track',
    keyword: '시댁 부당대우 이혼 사유',
    questionKeyword: '결혼 내내 시댁의 부당한 대우와 모욕을 견뎌 왔는데 배우자는 늘 시댁 편만 들고 저를 보호해 주지 않았어요. 이런 시댁 부당대우와 배우자의 방관도 이혼 사유가 되는지, 혼인이 파탄됐다면 누구의 책임이 더 큰지 막막합니다.',
    ctaKeyword: '시댁 부당대우 이혼·파탄 책임 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '시댁 부당대우 이혼 사유 — 5단계 파탄·책임 점검 | 로앤가이드',
      description:
        '시댁의 부당대우와 배우자의 방관으로 이혼을 고민한다면, 민법 제840조 제6호 혼인을 계속하기 어려운 중대한 사유와 신뢰 훼손·파탄 책임 경중·이혼 청구까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 생활 내내 시댁으로부터 모욕에 가까운 부당한 대우를 받아 왔는데도, 정작 배우자는 한 번도 제 편에서 막아 주거나 보호해 주기는커녕 늘 시댁 편만 들며 저를 더 몰아세운 상황입니다. 명절이나 집안일 때마다 반복되는 부당대우와 그때마다 저를 외면하는 배우자의 태도가 쌓이고 쌓여 이제는 서로에 대한 신뢰가 남아 있지 않습니다. 이런 시댁의 부당대우와 배우자의 방관이 과연 재판으로 이혼을 받아낼 만한 사유가 되는지, 혼인이 이미 회복할 수 없을 만큼 틀어졌다면 그 책임은 누구에게 더 무겁게 돌아가는지, 무엇부터 정리해야 하는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제840조 제6호는 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'를, 같은 조 제3호는 배우자나 그 직계존속으로부터 심히 부당한 대우를 받았을 때를 재판상 이혼 사유로 정하는 영역입니다. 판례는 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하고, 혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등 여러 사정을 두루 고려해 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 그 원인에 대한 원고의 책임이 피고보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 본 사례 흐름이 있는 영역입니다. 시댁 부당대우 + 배우자 방관 + 파탄 결합은 \'부당대우·신뢰 훼손·파탄 책임\' 정리가 필요한 트랙입니다. 당사자라면 ① 부당대우 ② 배우자 방관 ③ 중대한 사유 ④ 파탄 책임 ⑤ 이혼·분할 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 부당대우 ② 방관 ③ 사유 ④ 책임 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 시댁 부당대우 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 부당대우·배우자 방관·중대한 사유·파탄 책임·이혼·분할 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부당대우</strong> — 시댁의 모욕·부당대우 정황과 그 반복성 확보.</li>\n<li><strong>② 배우자 방관</strong> — 배우자의 보호 거부·시댁 편향 태도 정리.</li>\n<li><strong>③ 중대한 사유</strong> — 제840조 제3호·제6호 해당 여부 검토.</li>\n<li><strong>④ 파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임의 경중 정리.</li>\n<li><strong>⑤ 이혼·분할</strong> — 재판상 이혼·재산분할·위자료 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 신뢰가 훼손돼 부부 공동생활관계가 회복할 수 없을 정도로 파탄되면 중대한 사유로 인정될 수 있고, 파탄이 인정되면 원고 책임이 피고보다 더 무겁지 않은 한 이혼 청구를 받아들일 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부당대우 자료 확보 (즉시)</strong> — 시댁의 모욕·부당대우 정황, 배우자의 방관 정황 자료 확보.</li>\n<li><strong>2단계 — 방관·사유 정리 (1~2주)</strong> — 배우자의 보호 거부, 신뢰 훼손, 중대한 사유 해당성 정리.</li>\n<li><strong>3단계 — 파탄 책임·분할 정리 (2~3주)</strong> — 파탄에 관한 쌍방 책임의 경중, 재산분할·위자료 정리.</li>\n<li><strong>4단계 — 이혼·재산분할 청구 (소 제기 시)</strong> — 재판상 이혼·재산분할·위자료 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 재산분할·위자료 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시댁 부당대우 이혼·파탄 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 부당대우·방관·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>시댁의 모욕·부당대우 정황 자료 (부당대우)</strong></li>\n<li><strong>배우자의 보호 거부·방관 정황 자료 (방관)</strong></li>\n<li><strong>반복·누적 경위 정리 자료 (신뢰 훼손)</strong></li>\n<li><strong>부부 재산·소득·계좌 자료 (재산분할)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (중대한 사유·책임정도)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시댁 부당대우는 일회성 다툼이 아니라 반복·누적되어 부부의 신뢰가 회복할 수 없을 정도로 훼손됐는지를 종합해 판단되는 영역이므로 부당대우와 배우자의 방관 정황을 시간 순으로 정리하는 것이 핵심. 파탄에 관한 본인 책임이 상대보다 더 무겁지 않다는 점도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부당대우</strong> — 시댁의 대우가 심히 부당한 대우에 해당하는지.</li>\n<li><strong>배우자 방관</strong> — 배우자의 보호 거부가 파탄에 기여했는지.</li>\n<li><strong>중대한 사유</strong> — 신뢰 훼손이 제840조 제6호에 해당하는지.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임의 경중.</li>\n<li><strong>위자료</strong> — 부당대우·방관으로 인한 정신적 고통의 위자료 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·재산분할·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366 (가정 위기 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 신뢰 훼손에 따른 중대한 사유와 파탄 책임의 경중',
        summary:
          '대법원 2021므15480(대법원, 2022.05.26 선고) 영역에서 법원은 혼인은 일생의 공동생활을 목적으로 하는 신분상 계약으로서 그 본질이 애정과 신뢰에 바탕을 둔 인격적 결합에 있고, 부부는 동거하며 서로 부양하고 협조하여야 할 의무가 있으므로(민법 제826조 제1항) 혼인생활을 하면서 애정과 신의 및 인내로써 상대방을 이해하고 보호하여 혼인생활의 유지를 위한 최선의 노력을 기울여야 한다고 보았습니다. 또한 민법 제840조 제6호에서 정한 \'혼인을 계속하기 어려운 중대한 사유\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 일방 배우자에게 참을 수 없는 고통이 되는 경우를 말하며, 혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등 여러 사정을 고려하여 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 그 원인에 대한 원고의 책임이 피고의 책임보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 판시했습니다. 시댁 부당대우·배우자 방관 사안에서도 중대한 사유·파탄 책임을 검토해볼 수 있습니다.',
        takeaway: '시댁 부당대우 + 배우자 방관 + 파탄 결합 시 신뢰 훼손에 따른 중대한 사유 해당성·파탄 책임의 경중·재산분할·위자료 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시댁의 부당대우만으로도 이혼이 되나요?',
        answer:
          '<strong>심히 부당한 대우가 반복돼 신뢰가 훼손되면 중대한 사유로 검토되는 영역입니다.</strong> 부당대우 정황·반복 경위 자료를 정리.',
      },
      {
        question: '배우자가 시댁 편만 들고 방관한 것도 따질 수 있나요?',
        answer:
          '<strong>배우자의 보호 거부·방관도 파탄 책임을 평가하는 자료가 되는 영역입니다.</strong> 배우자의 방관 정황 자료를 정리.',
      },
      {
        question: '혼인이 파탄됐다면 누구의 책임이 더 큰가요?',
        answer:
          '<strong>파탄 원인에 관한 쌍방 책임의 경중을 여러 사정을 종합해 판단하는 영역입니다.</strong> 파탄 경위·책임정도 자료를 정리.',
      },
      {
        question: '저에게도 책임이 있으면 이혼이 안 되나요?',
        answer:
          '<strong>파탄이 인정되면 원고 책임이 상대보다 더 무겁지 않은 한 이혼 청구가 받아들여질 수 있는 영역입니다.</strong> 책임정도 자료를 정리.',
      },
      {
        question: '이혼하면서 위자료를 시댁에도 청구할 수 있나요?',
        answer:
          '<strong>부당대우의 정도·관여에 따라 위자료 청구 범위를 검토할 수 있는 영역입니다.</strong> 부당대우·피해 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '가정폭력 혼인파탄 위자료 판단', href: '/guide/divorce/divorce-domestic-violence-marriage-breakdown-alimony-track' },
      { label: '경제적 학대 이혼 사유', href: '/guide/divorce/divorce-economic-control-abuse-ground-track' },
      { label: '배우자 외도 위자료 이혼', href: '/guide/divorce/divorce-adultery-alimony-claim-track' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 3. divorce-hidden-debt-property-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-hidden-debt-property-division-track',
    keyword: '숨긴 채무 재산분할',
    questionKeyword: '이혼 얘기를 하던 중 배우자가 저 몰래 진 빚이 있다는 걸 알게 됐고, 협의 과정에서 재산분할을 포기하겠다는 각서까지 써 달라고 해요. 아직 이혼도 안 했는데 미리 분할을 포기하는 각서가 효력이 있는지, 숨긴 채무는 어떻게 정리되는지 막막합니다.',
    ctaKeyword: '숨긴 채무 재산분할·사전포기 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '숨긴 채무 재산분할 — 5단계 분할대상·사전포기 점검 | 로앤가이드',
      description:
        '배우자가 숨긴 채무와 재산분할 포기 각서로 고민이라면, 민법 제839조의2 재산분할청구권과 혼인 해소 전 사전포기의 불허·포기약정 해석까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 이야기를 진지하게 꺼내고 나서야 배우자가 저도 모르게 적지 않은 빚을 져 왔다는 사실을 알게 되어 충격이 큰 상황입니다. 그런데 배우자는 협의 과정에서 \'어차피 빚이 많으니 너는 재산분할을 포기하겠다는 각서를 써 달라\'며 서명을 요구하고 있습니다. 아직 이혼이 성립하지도 않았는데 미리 재산분할을 포기한다는 각서가 정말 효력이 있는지, 나중에 후회해도 되돌릴 수 없는 것인지, 배우자가 몰래 만든 채무는 재산을 나눌 때 어떻게 정리되는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2는 협의상 이혼한 자 일방의 재산분할청구권을, 같은 조 제2항은 당사자 쌍방의 협력으로 이룩한 재산의 액수와 그 밖의 사정을 참작한 분할의 액수·방법을 정하는 영역입니다. 판례는 이혼으로 인한 재산분할청구권은 이혼이 성립한 때에 법적 효과로서 비로소 발생하고 협의 또는 심판에 따라 구체적 내용이 형성되기까지는 범위·내용이 불확정하므로, 협의 또는 심판에 따라 구체화되지 않은 재산분할청구권을 혼인이 해소되기 전에 미리 포기하는 것은 성질상 허용되지 아니하며, 아직 이혼하지 않은 당사자가 장차 협의상 이혼할 것을 합의하는 과정에서 이를 전제로 재산분할청구권을 포기하는 서면을 작성하였더라도 공동재산 전부를 청산·분배하려는 의도로 분할 대상 재산액·기여도·분할 방법 등을 협의한 결과 포기에 이른 것이라는 등의 사정이 없는 한 성질상 허용되지 아니하는 \'재산분할청구권의 사전포기\'에 불과하므로 쉽사리 \'재산분할에 관한 협의\'로서의 포기약정이라고 보아서는 아니 된다고 본 사례 흐름이 있는 영역입니다. 숨긴 채무 + 사전포기 각서 + 재산분할 결합은 \'분할대상·사전포기·포기약정\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산·채무 파악 ② 숨긴 채무 ③ 분할대상 ④ 사전포기 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 채무 ③ 대상 ④ 포기 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 숨긴 채무 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·채무 파악·숨긴 채무·분할대상·사전포기·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·채무 파악</strong> — 부부의 적극·소극재산과 채무 내역 파악.</li>\n<li><strong>② 숨긴 채무</strong> — 일방이 숨긴 채무의 성격·용도·공동성 정리.</li>\n<li><strong>③ 분할대상</strong> — 혼인 중 형성 재산·공동 채무의 분할 대상 정리.</li>\n<li><strong>④ 사전포기</strong> — 혼인 해소 전 작성한 포기 각서의 효력 검토.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 혼인이 해소되기 전 구체화되지 않은 재산분할청구권의 사전포기는 성질상 허용되지 않고, 협의 과정에서 작성한 포기 서면도 분할 대상·기여도·방법을 협의한 결과라는 사정이 없는 한 쉽사리 포기약정으로 볼 수 없는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·채무 자료 보존 (즉시)</strong> — 부동산 등기·계좌·대출·보증 등 적극·소극재산 자료 보존.</li>\n<li><strong>2단계 — 숨긴 채무·형성 정리 (1~2주)</strong> — 일방이 숨긴 채무의 성격·용도, 재산 형성 경위 정리.</li>\n<li><strong>3단계 — 분할대상·사전포기 정리 (2~3주)</strong> — 분할 대상 재산·채무, 포기 각서 작성 경위·효력 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">숨긴 채무 재산분할·사전포기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·숨긴 채무·사전포기 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>대출·보증·카드 등 채무 내역 자료 (소극재산)</strong></li>\n<li><strong>일방이 숨긴 채무의 용도·성격 자료 (공동성 판단)</strong></li>\n<li><strong>재산 형성·기여 경위 자료 (분할 비율)</strong></li>\n<li><strong>재산분할 포기 각서·작성 경위 자료 (사전포기)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼인이 해소되기 전 미리 작성한 재산분할 포기 각서는 분할 대상·기여도·방법을 충분히 협의한 결과라는 사정이 없는 한 사전포기에 불과해 쉽사리 효력이 인정되지 않는 영역이므로 각서 작성 경위를 구체적으로 정리하는 것이 핵심. 일방이 숨긴 채무는 혼인 공동생활을 위한 것인지 등 성격에 따라 분할에 미치는 영향이 달라지므로 채무의 용도·내역도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사전포기</strong> — 혼인 해소 전 포기 각서가 효력이 있는지.</li>\n<li><strong>포기약정</strong> — 협의 결과의 포기약정으로 볼 수 있는지.</li>\n<li><strong>숨긴 채무</strong> — 일방이 숨긴 채무가 분할 대상에 포함되는지.</li>\n<li><strong>채무 성격</strong> — 채무가 공동생활을 위한 것인지 개인 채무인지.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 해소 전 재산분할청구권 사전포기의 불허',
        summary:
          '대법원 2015스451(대법원, 2016.01.25 선고) 영역에서 법원은 민법 제839조의2에 규정된 재산분할제도가 혼인 중에 부부 쌍방의 협력으로 이룩한 실질적인 공동재산을 청산·분배하는 것을 주된 목적으로 하고, 이혼으로 인한 재산분할청구권은 이혼이 성립한 때에 법적 효과로서 비로소 발생할 뿐만 아니라 협의 또는 심판에 따라 구체적 내용이 형성되기까지는 그 범위 및 내용이 불명확·불확정하기 때문에 구체적으로 권리가 발생하였다고 할 수 없으므로, 협의 또는 심판에 따라 구체화되지 않은 재산분할청구권을 혼인이 해소되기 전에 미리 포기하는 것은 성질상 허용되지 아니한다고 보았습니다. 또한 아직 이혼하지 않은 당사자가 장차 협의상 이혼할 것을 합의하는 과정에서 이를 전제로 재산분할청구권을 포기하는 서면을 작성한 경우, 부부 쌍방의 협력으로 형성된 공동재산 전부를 청산·분배하려는 의도로 분할 대상이 되는 재산액·기여도·분할 방법 등에 관하여 협의한 결과 포기에 이르렀다는 등의 사정이 없는 한 성질상 허용되지 아니하는 \'재산분할청구권의 사전포기\'에 불과하므로 쉽사리 \'재산분할에 관한 협의\'로서의 포기약정이라고 보아서는 아니 된다고 판시했습니다. 숨긴 채무 재산분할 사안에서도 분할대상·사전포기 효력을 검토해볼 수 있습니다.',
        takeaway: '숨긴 채무 + 사전포기 각서 + 재산분할 결합 시 혼인 해소 전 사전포기의 불허·포기약정 해석·채무의 분할 반영 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이혼 전에 쓴 재산분할 포기 각서도 효력이 있나요?',
        answer:
          '<strong>혼인 해소 전 구체화되지 않은 재산분할청구권의 사전포기는 성질상 허용되지 않는 영역입니다.</strong> 각서 작성 경위 자료를 정리.',
      },
      {
        question: '협의하면서 쓴 각서면 포기약정으로 보나요?',
        answer:
          '<strong>분할 대상·기여도·방법을 협의한 결과라는 사정이 없으면 쉽사리 포기약정으로 보지 않는 영역입니다.</strong> 협의 경위·내용 자료를 정리.',
      },
      {
        question: '배우자가 몰래 진 빚도 재산분할에서 따지나요?',
        answer:
          '<strong>채무의 용도·성격에 따라 공동 채무로 분할에 반영되는지 검토하는 영역입니다.</strong> 채무 내역·용도 자료를 정리.',
      },
      {
        question: '숨긴 빚이 많으면 제가 나눠 갚아야 하나요?',
        answer:
          '<strong>개인적 채무인지 혼인 공동생활을 위한 것인지에 따라 분담 여부가 달라지는 영역입니다.</strong> 채무 성격·형성 경위 자료를 정리.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>재산분할청구는 이혼한 날부터 2년 내에 해야 하는 영역입니다.</strong> 이혼 시점·재산 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 재산분할 위자료 인정 범위', href: '/guide/divorce/divorce-de-facto-marriage-property-division-scope' },
      { label: '채무 소극재산 재산분할', href: '/guide/divorce/divorce-debt-negative-asset-division-track' },
      { label: '공무원연금 분할', href: '/guide/divorce/divorce-public-pension-division-track' },
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 4. divorce-public-pension-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-public-pension-division-track',
    keyword: '공무원연금 분할',
    questionKeyword: '오랜 결혼생활 동안 공무원인 배우자를 뒷바라지했는데 이혼하게 됐어요. 배우자가 이미 받고 있는 공무원 퇴직연금도 재산분할 대상이 되는지, 된다면 매달 받는 연금을 어떻게 나누는지, 일반 재산과 분할 비율을 따로 정할 수 있는지 막막합니다.',
    ctaKeyword: '공무원연금 분할·정기금 방식 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '공무원연금 분할 — 5단계 분할대상·정기금 점검 | 로앤가이드',
      description:
        '공무원 배우자와 이혼하며 퇴직연금을 나누려 한다면, 민법 제839조의2 분할 대상 포함과 매월 정기금 방식 분할·개별 분할비율 산정까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 결혼생활 내내 공무원으로 일하는 배우자가 자리를 지킬 수 있도록 살림과 양육을 도맡으며 뒷바라지했는데, 정작 이혼을 하려니 그동안의 제 몫이 제대로 정리될지 막막한 상황입니다. 특히 배우자가 이미 퇴직해 매달 공무원 퇴직연금을 받고 있는데, 이 연금도 재산분할의 대상이 되는지, 된다면 한 번에 목돈으로 받아야 하는지 아니면 매달 나오는 연금을 일정 비율로 나눠 받을 수 있는지, 부동산 같은 일반 재산과 연금의 분할 비율을 따로 정할 수 있는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2는 재산분할청구권을, 같은 조 제2항은 당사자 쌍방의 협력으로 이룩한 재산의 액수 등을 참작한 분할의 액수와 방법을 정하는 영역입니다. 판례는 이혼소송의 사실심 변론종결 당시에 부부 중 일방이 공무원 퇴직연금을 실제로 수령하고 있는 경우, 그 퇴직연금에는 사회보장적 급여로서의 성격 외에 임금의 후불적 성격이 불가분적으로 혼재되어 있으므로 혼인기간 중의 근무에 대하여 상대방 배우자의 협력이 인정되는 이상 그 기간에 해당하는 부분은 부부 쌍방의 협력으로 이룩한 재산으로 볼 수 있어 이미 발생한 퇴직연금수급권도 재산분할의 대상에 포함될 수 있고, 구체적으로는 연금수급권자인 배우자가 매월 수령할 퇴직연금액 중 일정 비율에 해당하는 금액을 상대방 배우자에게 정기적으로 지급하는 방식의 재산분할도 가능하다고 보았으며, 정기금 방식으로 분할할 경우 공무원 퇴직연금수급권과 다른 일반재산을 구분하여 개별적으로 분할비율을 정할 수 있다고 본 사례 흐름이 있는 영역입니다. 공무원연금 + 정기금 분할 + 개별 분할비율 결합은 \'분할대상·정기금·개별비율\' 정리가 필요한 트랙입니다. 당사자라면 ① 연금·재산 파악 ② 분할대상 ③ 정기금 방식 ④ 개별 분할비율 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 대상 ③ 정기금 ④ 비율 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공무원연금 분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 연금·재산 파악·분할대상·정기금 방식·개별 분할비율·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 연금·재산 파악</strong> — 공무원 퇴직연금 수령 내역과 부부 적극·소극재산 파악.</li>\n<li><strong>② 분할대상</strong> — 혼인기간 근무에 대응하는 퇴직연금수급권의 분할 대상 정리.</li>\n<li><strong>③ 정기금 방식</strong> — 매월 연금액 중 일정 비율을 정기적으로 지급하는 방식 검토.</li>\n<li><strong>④ 개별 분할비율</strong> — 연금과 일반재산을 구분한 개별 분할비율 검토.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 이미 수령 중인 공무원 퇴직연금도 혼인기간 근무에 대한 협력이 인정되면 분할 대상이 될 수 있고, 매월 연금의 일정 비율을 정기적으로 지급하는 방식이 가능하며 일반재산과 분할비율을 개별적으로 정할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연금·재산 자료 보존 (즉시)</strong> — 공무원 퇴직연금 수령 내역·재직기간, 부동산 등기·계좌 자료 보존.</li>\n<li><strong>2단계 — 분할대상·기여 정리 (1~2주)</strong> — 혼인기간 근무 대응 부분, 양육·가사 등 기여 정리.</li>\n<li><strong>3단계 — 정기금·개별비율 정리 (2~3주)</strong> — 매월 정기금 지급 방식, 연금·일반재산 개별 분할비율 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 정기금·정산 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공무원연금 분할·정기금 방식 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 연금·분할대상·정기금 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>공무원 퇴직연금 수령 내역 자료 (연금 확인)</strong></li>\n<li><strong>재직기간·혼인기간 대조 자료 (분할 대상 기간)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>양육·가사·소득 등 기여 자료 (분할 비율)</strong></li>\n<li><strong>연금·일반재산 구분 정리 자료 (개별 분할비율)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이미 받고 있는 공무원 퇴직연금도 혼인기간의 근무에 상대방의 협력이 인정되면 그 기간에 해당하는 부분이 분할 대상이 될 수 있는 영역이므로 재직기간과 혼인기간을 대조한 자료를 정리하는 것이 핵심. 매월 연금의 일정 비율을 정기적으로 받는 방식이 가능하고 연금과 일반재산의 분할비율을 따로 정할 수 있으므로 재산 구분 자료도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할대상</strong> — 이미 수령 중인 퇴직연금의 분할 대상 포함 여부.</li>\n<li><strong>정기금 방식</strong> — 매월 연금의 일정 비율 정기 지급 방식.</li>\n<li><strong>개별 분할비율</strong> — 연금과 일반재산의 분할비율 구분.</li>\n<li><strong>기여 평가</strong> — 혼인기간 근무에 대한 협력·기여 정도.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>공무원연금공단 1588-4321 (분할연금 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공무원 퇴직연금수급권의 분할 대상 포함과 정기금 방식',
        summary:
          '대법원 2012므2888(대법원, 2014.07.16 선고) 영역에서 법원은 이혼소송의 사실심 변론종결 당시에 부부 중 일방이 공무원 퇴직연금을 실제로 수령하고 있는 경우, 그 공무원 퇴직연금에는 사회보장적 급여로서의 성격 외에 임금의 후불적 성격이 불가분적으로 혼재되어 있으므로 혼인기간 중의 근무에 대하여 상대방 배우자의 협력이 인정되는 이상 적어도 그 기간에 해당하는 부분은 부부 쌍방의 협력으로 이룩한 재산으로 볼 수 있어 이미 발생한 공무원 퇴직연금수급권도 부동산 등과 마찬가지로 재산분할의 대상에 포함될 수 있고, 구체적으로는 연금수급권자인 배우자가 매월 수령할 퇴직연금액 중 일정 비율에 해당하는 금액을 상대방 배우자에게 정기적으로 지급하는 방식의 재산분할도 가능하다고 보았습니다. 또한 공무원 퇴직연금수급권에 대하여 정기금 방식으로 재산분할을 할 경우에는 공무원 퇴직연금수급권과 다른 일반재산을 구분하여 개별적으로 분할비율을 정할 수 있다고 판시했습니다. 공무원연금 분할 사안에서도 분할 대상 포함·정기금 방식·개별 분할비율을 검토해볼 수 있습니다.',
        takeaway: '공무원연금 + 정기금 분할 + 개별 분할비율 결합 시 퇴직연금수급권의 분할 대상 포함·매월 정기금 지급 방식·연금과 일반재산의 개별 분할비율 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자가 이미 받고 있는 공무원연금도 나눌 수 있나요?',
        answer:
          '<strong>혼인기간 근무에 대한 협력이 인정되면 그 부분이 분할 대상이 될 수 있는 영역입니다.</strong> 연금 수령 내역·재직기간 자료를 정리.',
      },
      {
        question: '연금은 목돈으로 받나요, 매달 나눠 받나요?',
        answer:
          '<strong>매월 연금액 중 일정 비율을 정기적으로 지급받는 방식도 가능한 영역입니다.</strong> 연금 수령액·기간 자료를 정리.',
      },
      {
        question: '연금과 부동산의 분할 비율을 따로 정할 수 있나요?',
        answer:
          '<strong>정기금 방식이면 연금과 일반재산을 구분해 개별 분할비율을 정할 수 있는 영역입니다.</strong> 연금·재산 구분 자료를 정리.',
      },
      {
        question: '제 기여는 어떻게 반영되나요?',
        answer:
          '<strong>혼인기간 근무에 대한 협력과 양육·가사 기여를 종합해 평가하는 영역입니다.</strong> 기여 자료를 정리.',
      },
      {
        question: '연금 분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>재산분할청구는 이혼한 날부터 2년 내에 해야 하는 영역입니다.</strong> 이혼 시점·연금 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '상속 재산 재산분할 대상', href: '/guide/divorce/divorce-inheritance-property-division-scope' },
      { label: '이혼 연금 분할 청구 국민연금 공무원연금', href: '/guide/divorce/divorce-pension-division-claim-track' },
      { label: '숨긴 채무 재산분할', href: '/guide/divorce/divorce-hidden-debt-property-division-track' },
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 5. defamation-apartment-resident-cafe-post-track ───
  {
    domain: 'defamation',
    slug: 'defamation-apartment-resident-cafe-post-track',
    keyword: '아파트 입주자대표 비방 명예훼손',
    questionKeyword: '입주민 카페에 누군가 입주자대표인 저를 겨냥해 사실과 다른 내용을 올려 영업과 평판이 흔들려요. 단지 문제를 알리는 글이라며 공익이라 주장하는데, 사회적 평가를 떨어뜨리는 글이면 비방 목적이 당연히 인정되는지, 누가 증명해야 하는지 막막합니다.',
    ctaKeyword: '아파트 입주자대표 비방 명예훼손 비방 목적 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '입주자대표 비방 명예훼손 — 5단계 비방목적·공익 점검 | 로앤가이드',
      description:
        '입주민 카페 비방글로 명예훼손 피해를 입었다면, 정보통신망법 제70조 제1항 비방 목적과 사회적 평가 저하의 별개 구성요건·검사 증명책임·공익성 경계까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트 입주자대표 일을 맡고 있는데, 누군가 입주민 카페에 저를 겨냥해 사실과 다른 내용을 적은 글을 올려 빠르게 공유되면서 단지 안에서 제 평판이 크게 흔들리는 상황입니다. 정작 글을 올린 사람은 \'단지 운영의 문제를 알리는 공익적인 글일 뿐\'이라며 책임을 피하려 합니다. 입주민 사이에 떠도는 폭로·의혹 형식의 글도 명예훼손이 되는지, 제 평가를 떨어뜨리는 내용이면 곧바로 비방할 목적이 인정되는 것인지, \'비방할 목적\'은 도대체 누가 증명해야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항은 사람을 비방할 목적으로 정보통신망을 통하여 공공연하게 사실을 드러내어 다른 사람의 명예를 훼손한 자를 처벌하는 영역입니다. 판례는 이 죄가 성립하려면 피고인이 공공연하게 드러낸 사실이 다른 사람의 사회적 평가를 떨어뜨릴 만한 것임을 인식해야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적이 있는지는 드러낸 사실이 사회적 평가를 떨어뜨릴 만한 것인지와 별개의 구성요건으로서 드러낸 사실이 평가를 떨어뜨린다고 하여 비방할 목적이 당연히 인정되는 것은 아니며 이 규정에서 정한 모든 구성요건에 대한 증명책임은 검사에게 있다고 보면서, \'비방할 목적\'은 공공의 이익을 위한 것과는 행위자의 주관적 의도의 방향에서 상반되므로 드러낸 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부정되고, 주요한 동기·목적이 공공의 이익을 위한 것이라면 부수적으로 사익적 목적이 있더라도 비방할 목적이 부정될 수 있다고 본 사례 흐름이 있는 영역입니다. 입주민 카페 게시 + 사실 적시 + 비방 목적 결합은 \'비방 목적·공익성·증명책임\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시 보존 ② 사회적 평가 ③ 비방 목적 ④ 공익성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 평가 ③ 목적 ④ 공익 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 아파트 입주자대표 비방 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시 보존·사회적 평가·비방 목적·공익성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시 보존</strong> — 카페 글·작성자·일시·URL·열람 범위 보존.</li>\n<li><strong>② 사회적 평가</strong> — 드러낸 사실이 사회적 평가를 떨어뜨릴 만한지 정리.</li>\n<li><strong>③ 비방 목적</strong> — 평가 저하와 별개로 비방할 목적이 있는지 검토.</li>\n<li><strong>④ 공익성</strong> — 단지 운영 등 공공의 이익 관련성 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 비방할 목적은 사회적 평가 저하와는 별개의 구성요건이고 모든 구성요건의 증명책임은 검사에게 있으며, 드러낸 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방할 목적이 부정되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 캡처·증거 보존 (즉시)</strong> — 카페 글·작성자 계정·일시·URL·열람 범위 보존.</li>\n<li><strong>2단계 — 사회적 평가·사실 정리 (1주)</strong> — 드러낸 사실의 평가 저하 여부, 사실/허위 정리.</li>\n<li><strong>3단계 — 비방 목적·공익성 정리 (2주)</strong> — 비방할 목적, 공공의 이익 관련성, 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 카페 운영자 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">아파트 입주자대표 비방 명예훼손 비방 목적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 평가 저하·비방 목적·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>카페 글 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>입주민 열람·공유 범위 자료 (공연성)</strong></li>\n<li><strong>게시 내용과 실제 사실 대조 자료 (평가 저하)</strong></li>\n<li><strong>작성 경위·동기 정황 자료 (비방 목적)</strong></li>\n<li><strong>대표 업무·평판 피해 자료 (피해 입증)</strong></li>\n<li><strong>삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입주민 카페 게시는 사회적 평가를 떨어뜨릴 만한지와 비방할 목적이 별개의 구성요건이고 그 증명책임은 검사에게 있는 영역이므로 게시 내용과 실제 사실을 대조한 자료, 작성 경위·동기 자료를 함께 정리하는 것이 핵심. 다만 적시 내용이 단지 운영 등 공공의 이익에 관한 것이면 비방 목적이 부정될 수 있으므로 사실 여부와 게시 맥락을 함께 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 저하</strong> — 드러낸 사실이 사회적 평가를 떨어뜨릴 만한지.</li>\n<li><strong>비방 목적</strong> — 평가 저하와 별개로 비방할 목적이 있는지.</li>\n<li><strong>증명책임</strong> — 모든 구성요건의 증명책임이 검사에게 있는지.</li>\n<li><strong>공익성</strong> — 단지 운영 등 공공의 이익 관련성.</li>\n<li><strong>피해 입증</strong> — 대표 업무·평판 등 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 제70조 제1항 비방 목적의 별개 구성요건과 검사 증명책임',
        summary:
          '대법원 2022도4171(대법원, 2022.07.28 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항의 명예훼손죄가 성립하려면 피고인이 공공연하게 드러낸 사실이 다른 사람의 사회적 평가를 떨어뜨릴 만한 것임을 인식해야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적이 있는지는 드러낸 사실이 사회적 평가를 떨어뜨릴 만한 것인지와 별개의 구성요건으로서 드러낸 사실이 평가를 떨어뜨리는 것이라고 해서 비방할 목적이 당연히 인정되는 것은 아니며 이 규정에서 정한 모든 구성요건에 대한 증명책임은 검사에게 있다고 보았습니다. 또한 \'비방할 목적\'은 공공의 이익을 위한 것과는 행위자의 주관적 의도라는 방향에서 상반되므로 드러낸 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적은 부정되고, 공공의 이익에 관한 것에는 널리 국가·사회 그 밖에 일반 다수인의 이익뿐만 아니라 특정한 사회집단이나 그 구성원 전체의 관심과 이익에 관한 것도 포함되며 행위자의 주요한 동기와 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 포함되어 있더라도 비방할 목적이 부정될 수 있다고 판시했습니다. 아파트 입주자대표 비방 명예훼손 사안에서도 비방 목적·공익성·증명책임을 검토해볼 수 있습니다.',
        takeaway: '입주민 카페 게시 + 사실 적시 + 비방 목적 결합 시 비방 목적의 별개 구성요건·검사 증명책임·공익 관련성·부수적 사익 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '입주민 카페 폭로 글도 명예훼손이 되나요?',
        answer:
          '<strong>드러낸 사실이 사회적 평가를 떨어뜨리고 비방 목적이 인정되면 명예훼손이 검토되는 영역입니다.</strong> 게시 원본·사실 대조 자료를 정리.',
      },
      {
        question: '평가를 떨어뜨리는 글이면 비방 목적이 당연히 인정되나요?',
        answer:
          '<strong>평가 저하와 비방 목적은 별개의 구성요건으로 당연히 인정되는 것은 아닌 영역입니다.</strong> 게시 경위·동기 자료를 정리.',
      },
      {
        question: '단지 문제를 알리는 공익 글이라면 처벌이 안 되나요?',
        answer:
          '<strong>공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부정될 수 있는 영역입니다.</strong> 게시 맥락·사실 여부 자료를 정리.',
      },
      {
        question: '비방 목적은 누가 증명하나요?',
        answer:
          '<strong>모든 구성요건의 증명책임은 검사에게 있는 영역입니다.</strong> 작성 경위·동기 정황 자료를 정리.',
      },
      {
        question: '글을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 카페 익명글 허위사실 명예훼손', href: '/guide/defamation/defamation-anonymous-cafe-false-fact-network-act-track' },
      { label: '공직자 비리 폭로 공공의 이익 위법성 조각', href: '/guide/defamation/defamation-public-official-corruption-expose-public-interest-falsely-accused-defense' },
      { label: '음식점 허위 리뷰 명예훼손', href: '/guide/defamation/defamation-restaurant-false-review-track' },
      { label: '명예훼손/모욕 종합 가이드', href: '/guide/defamation' },
      { label: '유튜브 댓글 실명 비방 신원조회 손해배상', href: '/guide/defamation/defamation-youtube-realname-attack-civil-damages-victim' },
    ],
  },

  // ─── 6. defamation-restaurant-false-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-restaurant-false-review-track',
    keyword: '음식점 허위 리뷰 명예훼손',
    questionKeyword: '제 음식점에 오지도 않은 사람이 위생이 엉망이라는 등 사실과 다른 거짓 리뷰를 올려 매출이 크게 떨어졌어요. 거짓인 내용을 올리면 곧바로 비방 목적이 인정되는지, 소비자 후기라며 공익을 주장하면 처벌이 안 되는지, 증명은 누가 하는지 막막합니다.',
    ctaKeyword: '음식점 허위 리뷰 명예훼손 거짓사실·비방 목적 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '음식점 허위 리뷰 명예훼손 — 5단계 거짓사실·비방목적 점검 | 로앤가이드',
      description:
        '음식점 허위 리뷰로 명예훼손 피해를 입었다면, 정보통신망법 제70조 제2항 거짓 사실과 비방 목적의 별개 구성요건·검사 증명책임·공익성 경계까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오지도 않은 사람이 제 음식점에 와 본 것처럼 \'위생이 엉망이다, 상한 음식을 줬다\'는 식의 사실과 전혀 다른 거짓 리뷰를 여러 곳에 올려 빠르게 퍼지면서 예약 취소가 이어지고 매출이 크게 떨어진 상황입니다. 정작 글을 올린 사람은 \'소비자로서 후기를 남긴 것뿐\'이라며 책임을 피하려 합니다. 사실과 다른 거짓 내용을 올리면 곧바로 비방할 목적이 인정되는지, 소비자 정보 공유라며 공익을 내세우면 처벌이 안 되는지, \'비방할 목적\'과 \'거짓\'은 누가 증명해야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제2항은 사람을 비방할 목적으로 정보통신망을 통하여 공공연하게 거짓의 사실을 드러내어 다른 사람의 명예를 훼손한 자를 처벌하는 영역입니다. 판례는 이 죄가 성립하려면 피고인이 공공연하게 드러낸 사실이 거짓이고 그 사실이 거짓임을 인식하여야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적이 있는지는 드러낸 사실이 거짓인지와 별개의 구성요건으로서 드러낸 사실이 거짓이라고 해서 비방할 목적이 당연히 인정되는 것은 아니며 이 규정에서 정한 모든 구성요건에 대한 증명책임은 검사에게 있다고 보면서, \'사람을 비방할 목적\'은 공공의 이익을 위한 것과는 행위자의 주관적 의도의 방향에서 상반되므로 드러낸 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부정된다고 본 사례 흐름이 있는 영역입니다. 허위 리뷰 + 거짓 사실 + 비방 목적 결합은 \'거짓 사실·비방 목적·증명책임\' 다툼이 가능한 트랙입니다. 당사자라면 ① 리뷰 보존 ② 거짓 사실 ③ 비방 목적 ④ 공익성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 거짓 ③ 목적 ④ 공익 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음식점 허위 리뷰 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 리뷰 보존·거짓 사실·비방 목적·공익성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 리뷰 보존</strong> — 허위 리뷰 내용·작성자·일시·플랫폼·URL 보존.</li>\n<li><strong>② 거짓 사실</strong> — 드러낸 내용이 거짓인지, 작성자의 인식 정리.</li>\n<li><strong>③ 비방 목적</strong> — 거짓 여부와 별개로 비방할 목적이 있는지 검토.</li>\n<li><strong>④ 공익성</strong> — 소비자 정보 공유 등 공공의 이익 관련성 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 거짓 여부와 비방할 목적은 별개의 구성요건이고 모든 구성요건의 증명책임은 검사에게 있으며, 드러낸 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방할 목적이 부정되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰 캡처·증거 보존 (즉시)</strong> — 허위 리뷰 내용·작성자 계정·일시·플랫폼·URL 보존.</li>\n<li><strong>2단계 — 거짓 사실·사실 대조 (1주)</strong> — 방문·주문 기록 등과 대조해 거짓 여부 정리.</li>\n<li><strong>3단계 — 비방 목적·공익성 정리 (2주)</strong> — 비방할 목적, 공공의 이익 관련성, 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제·블라인드 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음식점 허위 리뷰 명예훼손 거짓사실·비방 목적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거짓 사실·비방 목적·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>허위 리뷰 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>방문·주문·예약 기록 자료 (거짓 입증)</strong></li>\n<li><strong>위생·시설 상태 입증 자료 (사실 대조)</strong></li>\n<li><strong>작성 경위·동기 정황 자료 (비방 목적)</strong></li>\n<li><strong>예약 취소·매출 피해 자료 (피해 입증)</strong></li>\n<li><strong>삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 허위 리뷰는 거짓 여부와 비방할 목적이 별개의 구성요건이고 그 증명책임은 검사에게 있는 영역이므로 방문·주문 기록과 리뷰 내용을 대조한 자료, 위생·시설 상태 입증 자료를 함께 정리하는 것이 핵심. 다만 적시 내용이 소비자 일반의 정보 공유 등 공공의 이익에 관한 것이면 비방 목적이 부정될 수 있으므로 거짓 여부와 게시 맥락을 함께 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거짓 사실</strong> — 드러낸 내용이 거짓이고 작성자가 이를 인식했는지.</li>\n<li><strong>비방 목적</strong> — 거짓 여부와 별개로 비방할 목적이 있는지.</li>\n<li><strong>증명책임</strong> — 모든 구성요건의 증명책임이 검사에게 있는지.</li>\n<li><strong>공익성</strong> — 소비자 정보 공유 등 공공의 이익 관련성.</li>\n<li><strong>피해 입증</strong> — 예약 취소·매출 등 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 제70조 제2항 거짓 사실과 비방 목적의 별개 구성요건',
        summary:
          '대법원 2020도11471(대법원, 2020.12.10 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제2항의 명예훼손죄가 성립하려면 피고인이 공공연하게 드러낸 사실이 거짓이고 그 사실이 거짓임을 인식하여야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적이 있는지는 피고인이 드러낸 사실이 거짓인지와 별개의 구성요건으로서 드러낸 사실이 거짓이라고 해서 비방할 목적이 당연히 인정되는 것은 아니며 이 규정에서 정한 모든 구성요건에 대한 증명책임은 검사에게 있다고 보았습니다. 또한 \'사람을 비방할 목적\'이란 가해의 의사와 목적을 필요로 하는 것으로서 드러낸 사실의 내용과 성질, 공표 상대방의 범위, 표현의 방법 등 표현 자체에 관한 여러 사정을 감안함과 동시에 그 표현으로 훼손되는 명예의 침해 정도 등을 비교·형량하여 판단하여야 하고, 비방할 목적은 공공의 이익을 위한 것과는 행위자의 주관적 의도라는 방향에서 상반되므로 드러낸 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적은 부정되며 주요한 동기·목적이 공공의 이익을 위한 것이라면 부수적으로 사익적 목적이 있더라도 비방할 목적이 있다고 보기 어렵다고 판시했습니다. 음식점 허위 리뷰 명예훼손 사안에서도 거짓 사실·비방 목적·공익성을 검토해볼 수 있습니다.',
        takeaway: '허위 리뷰 + 거짓 사실 + 비방 목적 결합 시 거짓 사실의 인식·비방 목적의 별개 구성요건·검사 증명책임·공익 관련성 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '오지도 않은 사람이 올린 거짓 리뷰도 명예훼손이 되나요?',
        answer:
          '<strong>거짓 사실을 드러내 평가를 떨어뜨리고 비방 목적이 인정되면 명예훼손이 검토되는 영역입니다.</strong> 방문·주문 기록과 리뷰 대조 자료를 정리.',
      },
      {
        question: '거짓 내용이면 비방 목적이 당연히 인정되나요?',
        answer:
          '<strong>거짓 여부와 비방 목적은 별개의 구성요건으로 당연히 인정되는 것은 아닌 영역입니다.</strong> 작성 경위·동기 자료를 정리.',
      },
      {
        question: '소비자 후기라며 공익을 내세우면 처벌이 안 되나요?',
        answer:
          '<strong>공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부정될 수 있는 영역입니다.</strong> 거짓 여부·게시 맥락 자료를 정리.',
      },
      {
        question: '거짓이라는 것은 누가 증명하나요?',
        answer:
          '<strong>거짓 여부를 포함한 모든 구성요건의 증명책임은 검사에게 있는 영역입니다.</strong> 사실 대조·입증 자료를 정리.',
      },
      {
        question: '리뷰를 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제·블라인드 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 예약 취소·매출 피해 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '인터넷 댓글 명예훼손 정통망법 형법 비교', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '학부모 단체문자 허위사실 명예훼손 신고', href: '/guide/defamation/defamation-school-parent-group-text-false-fact-report-track' },
      { label: '아파트 입주자대표 비방 명예훼손', href: '/guide/defamation/defamation-apartment-resident-cafe-post-track' },
      { label: '명예훼손/모욕 종합 가이드', href: '/guide/defamation' },
      { label: '명예훼손 손해배상 금액 기준과 판례', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 7. defamation-youtube-comment-track ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-track',
    keyword: '유튜브 댓글 명예훼손',
    questionKeyword: '유튜브 영상 댓글에 누군가 저를 향해 모욕적인 표현과 사실과 다른 내용을 남겨 캡처가 퍼지고 있어요. 소수만 본 댓글이라며 공연성이 없다는데, 전파될 가능성이 있으면 공연성이 인정되는지, 실제로 퍼졌는지가 판단에 영향을 주는지 막막합니다.',
    ctaKeyword: '유튜브 댓글 명예훼손 공연성·전파가능성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '유튜브 댓글 명예훼손 — 5단계 공연성·전파가능성 점검 | 로앤가이드',
      description:
        '유튜브 댓글로 모욕·명예훼손 피해를 입었다면, 형법 제307조·제311조 공연성과 전파가능성·미필적 고의, 실제 전파 여부의 소극적 고려까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 등장하거나 언급된 유튜브 영상의 댓글창에 누군가 저를 향해 모욕적인 표현과 사실과 다른 내용을 남겼고, 그 댓글을 캡처한 이미지가 다른 곳으로 옮겨지며 모르는 사람들에게까지 퍼지는 상황입니다. 정작 댓글을 단 사람은 \'몇 사람만 본 댓글일 뿐\'이라거나 \'금방 묻힐 글\'이라며 대수롭지 않게 여깁니다. 일부만 본 댓글도 명예훼손이나 모욕이 되는지, 더 퍼질 가능성이 있다는 이유로 \'공연성\'이 인정되는지, 실제로 퍼졌는지 여부가 판단에 영향을 주는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실 또는 허위사실을 적시해 명예를 훼손하는 행위를, 형법 제311조는 공연히 사람을 모욕하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 모욕죄의 공연성에도 명예훼손죄의 공연성에 관한 법리가 동일하게 적용되어 개별적으로 소수의 사람에게 발언하였더라도 그 상대방이 불특정 또는 다수인에게 해당 내용을 전파할 가능성이 객관적으로 인정되면 공연성을 인정할 수 있으나, 특정한 소수에게만 발언하였다는 점은 공연성이 부정되는 유력한 사정이 될 수 있어 그러한 경우의 전파가능성에 관하여는 검사의 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성이 인정되는 경우에도 주관적 구성요건요소로서 미필적 고의가 필요하며, 발언 후 실제로 전파되었는지는 전파가능성 유무를 판단할 때 소극적 사정으로 고려될 수 있다고 본 사례 흐름이 있는 영역입니다. 유튜브 댓글 + 모욕·적시 + 전파가능성 결합은 \'공연성·전파가능성·고의\' 다툼이 가능한 트랙입니다. 당사자라면 ① 댓글 보존 ② 모욕·적시 ③ 공연성 ④ 전파가능성·고의 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 내용 ③ 공연성 ④ 전파 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유튜브 댓글 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 댓글 보존·모욕·적시·공연성·전파가능성·고의·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 댓글 보존</strong> — 댓글 내용·작성자·일시·영상 URL·캡처 확산 정황 보존.</li>\n<li><strong>② 모욕·적시</strong> — 모욕적 표현인지, 구체적 사실 적시인지 정리.</li>\n<li><strong>③ 공연성</strong> — 불특정·다수 인식 상태, 특정 소수 여부 검토.</li>\n<li><strong>④ 전파가능성·고의</strong> — 전파 가능성과 미필적 고의 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 소수에게 한 발언도 전파될 가능성이 객관적으로 인정되면 공연성이 인정될 수 있으나 특정 소수 발언은 검사의 엄격한 증명이 필요하고 미필적 고의가 요구되며, 실제 전파 여부는 소극적 사정으로 고려될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글 캡처·증거 보존 (즉시)</strong> — 댓글 내용·작성자·일시·영상 URL·캡처 확산 정황 보존.</li>\n<li><strong>2단계 — 모욕·적시·공연성 정리 (1주)</strong> — 모욕적 표현·사실 적시 여부, 불특정·다수 인식 상태 정리.</li>\n<li><strong>3단계 — 전파가능성·고의 정리 (2주)</strong> — 전파 가능성·관계, 미필적 고의, 실제 전파 정황 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청, 모욕·명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유튜브 댓글 명예훼손 공연성·전파가능성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 모욕·적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>댓글 원본·캡처·영상 URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·닉네임·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>댓글 노출·열람 범위 자료 (공연성)</strong></li>\n<li><strong>작성자·피해자·시청자 관계 자료 (전파가능성)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>캡처 확산·재게시 정황 자료 (실제 전파)</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유튜브 댓글은 소수만 보았더라도 불특정·다수에게 전파될 가능성이 객관적으로 인정되면 공연성이 인정될 수 있는 영역이므로 댓글 노출·열람 범위와 캡처 확산 정황을 함께 정리하는 것이 핵심. 다만 특정 소수에게만 노출된 경우의 전파가능성은 검사의 엄격한 증명이 필요하고 실제 전파 여부가 소극적 사정으로 고려될 수 있으므로 확산 경위 자료를 구체적으로 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정·다수 인식 상태인지, 특정 소수 노출인지.</li>\n<li><strong>전파가능성</strong> — 소수 노출이라도 전파될 가능성이 있는지.</li>\n<li><strong>미필적 고의</strong> — 전파가능성에 대한 인식·용인이 있었는지.</li>\n<li><strong>실제 전파</strong> — 실제 전파 여부가 소극적 사정으로 고려되는지.</li>\n<li><strong>모욕·적시 구분</strong> — 모욕적 표현인지 사실 적시인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전파가능성에 따른 공연성과 미필적 고의',
        summary:
          '대법원 2022도14571(대법원, 2024.01.04 선고) 영역에서 법원은 모욕죄의 구성요건인 \'공연성\'에 관하여도 명예훼손죄의 \'공연성\'에 관한 법리가 동일하게 적용되므로 개별적으로 소수의 사람에게 발언하였더라도 그 상대방이 불특정 또는 다수인에게 해당 내용을 전파할 가능성이 객관적으로 인정되는 경우에는 공연성을 인정할 수 있지만, 특정한 소수에게만 발언하였다는 점은 공연성이 부정되는 유력한 사정이 될 수 있으므로 그와 같은 사정하에서의 전파가능성에 관하여는 검사의 엄격한 증명이 필수적이라고 보았습니다. 또한 전파가능성을 이유로 공연성이 인정될 수 있는 경우에도 범죄구성요건의 주관적 요소로서 미필적 고의는 필수적이므로 행위자가 전파가능성에 대한 인식을 전제로 그 위험을 용인하는 내심의 의사가 존재한다는 사실과 그에 대한 증명이 있어야 하고, 발언 후 실제로 전파되었는지는 전파가능성 유무를 판단할 때 소극적 사정으로 고려될 수 있으며, 발언 내용이 전체적으로 부정적·비판적 의견이나 불편한 감정을 거칠게 나타낸 정도의 표현에 그치는 경우에는 전파가능성을 인정함에 더욱 신중을 기할 필요가 있다고 판시했습니다. 유튜브 댓글 명예훼손 사안에서도 공연성·전파가능성·고의를 검토해볼 수 있습니다.',
        takeaway: '유튜브 댓글 + 모욕·적시 + 전파가능성 결합 시 전파가능성에 따른 공연성·특정 소수의 엄격 증명·미필적 고의·실제 전파의 소극적 고려 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '소수만 본 댓글도 명예훼손이나 모욕이 되나요?',
        answer:
          '<strong>전파될 가능성이 객관적으로 인정되면 공연성이 인정될 수 있는 영역입니다.</strong> 노출·열람 범위 자료를 정리.',
      },
      {
        question: '특정 소수만 봤다면 공연성이 부정되나요?',
        answer:
          '<strong>특정 소수 노출은 공연성 부정의 유력한 사정이라 전파가능성에 검사의 엄격한 증명이 필요한 영역입니다.</strong> 확산 경위 자료를 정리.',
      },
      {
        question: '실제로 퍼졌는지가 판단에 영향을 주나요?',
        answer:
          '<strong>발언 후 실제 전파 여부는 전파가능성을 판단할 때 소극적 사정으로 고려될 수 있는 영역입니다.</strong> 캡처 확산·재게시 정황 자료를 정리.',
      },
      {
        question: '모욕적 표현과 사실 적시는 어떻게 다른가요?',
        answer:
          '<strong>구체적 사실 적시인지 경멸적 표현인지에 따라 모욕·명예훼손이 구분되는 영역입니다.</strong> 댓글 내용·맥락 자료를 정리.',
      },
      {
        question: '댓글을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손/모욕 종합 가이드', href: '/guide/defamation' },
      { label: '익명 게시자 신원 확인 정보통신망법', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '음식점 허위 리뷰 명예훼손', href: '/guide/defamation/defamation-restaurant-false-review-track' },
      { label: '소비자 고발 사실적시 공익 명예훼손 무고 방어', href: '/guide/defamation/defamation-consumer-complaint-true-statement-public-interest-falsely-accused-defense' },
      { label: '직장 내 허위 소문 명예훼손 입증', href: '/guide/defamation/defamation-false-rumor-workplace-claim' },
    ],
  },

  // ─── 8. defamation-workplace-rumor-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-workplace-rumor-falsely-accused-defense',
    keyword: '직장 소문 명예훼손 무고',
    questionKeyword: '직장 내 부당한 관행을 바로잡으려 동료 일을 공론화하는 글을 올렸을 뿐인데 그 동료가 저를 명예훼손으로 고소했어요. 사실과 다르게 신고된 것 같은데, 진실한 내용을 공익 목적으로 알려도 위법성이 없어진다는 게 제게 적용되는지, 제 이익이 조금 섞이면 안 되는지 막막합니다.',
    ctaKeyword: '직장 소문 명예훼손 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '직장 소문 명예훼손 방어 — 5단계 진실·공익 점검 | 로앤가이드',
      description:
        '직장 내 공론화 게시로 명예훼손 혐의를 받고 있다면, 형법 제310조 진실성·공익 목적과 부수적 사익 동기·공익성 판단 기준·조사 대응까지 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장 내에서 반복되던 부당한 관행을 바로잡고 같은 피해가 생기지 않도록 동료의 행위를 공론화하는 글을 올렸을 뿐인데, 그 동료가 저를 명예훼손으로 고소해 당황스러운 상황입니다. 사실과 다르게 신고되었다고 느껴지고, 진실한 내용을 여러 사람에게 도움이 되라고 알렸는데도 처벌될까 두렵습니다. 진실한 사실을 오로지 공공의 이익을 위해 적시하면 위법성이 없어진다는 법리가 정말 제게 적용되는지, 조직과 제 입장을 지키려는 마음이 조금 섞였다는 이유로 안 되는 것은 아닌지, 개인에 관한 내용이라도 공익으로 인정될 수 있는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 명예를 훼손한 행위를, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하는 영역입니다. 판례는 형법 제310조의 \'진실한 사실\'이란 내용 전체의 취지를 살펴볼 때 중요한 부분이 객관적 사실과 합치되는 사실이라는 의미로 세부에서 진실과 약간 차이가 나거나 다소 과장된 표현이 있더라도 무방하고, \'오로지 공공의 이익에 관한 때\'란 적시된 사실이 객관적으로 공공의 이익에 관한 것으로서 행위자도 주관적으로 공공의 이익을 위하여 적시한 것이어야 하며 공공의 이익에 관한 것에는 특정한 사회집단이나 그 구성원 전체의 관심과 이익에 관한 것도 포함되고, 행위자의 주요한 동기나 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없으며, 사실적시 내용이 개인에 관한 사항이더라도 공공의 이익과 관련되어 사회적 관심을 획득할 수 있는 경우에는 공익성이 인정될 수 있다고 본 사례 흐름이 있는 영역입니다. 공론화 게시 + 공익 목적 + 명예훼손 고소 결합은 \'진실성·공익성·부수적 사익\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 부수적 사익 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 사익 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 소문 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·부수적 사익·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 공론화 게시 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 중요한 부분이 객관적 사실과 합치되는지 정리.</li>\n<li><strong>③ 공익 목적</strong> — 오로지 공공의 이익을 위한 것인지 정리.</li>\n<li><strong>④ 부수적 사익</strong> — 부수적 사익 동기가 제310조 적용을 배제하는지 검토.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각(제310조) 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 중요한 부분이 객관적 사실과 합치되고 주요한 동기·목적이 공공의 이익을 위한 것이라면 부수적으로 사익적 동기가 있더라도 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적시 내용·근거 자료 보존 (즉시)</strong> — 게시 내용·근거 자료·게시 경위·표현 전체 맥락 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 게시 내용과 근거 자료를 대조해 중요한 부분의 사실 합치 정리.</li>\n<li><strong>3단계 — 공익성·사익 정리 (2주)</strong> — 공익 목적, 부수적 사익 동기, 공익 관련성 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제310조 적용 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 소문 명예훼손 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·사익 갈래입니다.</strong></p>\n<ul>\n<li><strong>공론화 게시 원본·일시·플랫폼 (적시 내용)</strong></li>\n<li><strong>게시 내용의 근거 자료 (사실 합치 입증)</strong></li>\n<li><strong>공익 목적·재발 방지 의도 정황 자료</strong></li>\n<li><strong>부수적 사익 동기 관련 경위 자료</strong></li>\n<li><strong>게시 상대방·열람 범위 자료 (공익 관련성)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 게시 내용의 중요한 부분이 객관적 사실과 합치되고 오로지 공공의 이익을 위한 것이었음을 보여주는 근거 자료를 정리하는 것이 핵심이며, 개인에 관한 내용이라도 직장 공동생활과 관련돼 공익성이 인정될 수 있다는 점을 함께 정리하는 것이 좋습니다. 사실과 다르게 신고되었다고 느껴진다면 표현의 전체 맥락과 게시 경위를 정리해 진실·공익성을 소명할 수 있도록 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 중요한 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>공익 목적</strong> — 오로지 공공의 이익을 위한 것인지.</li>\n<li><strong>부수적 사익</strong> — 부수적 사익 동기가 제310조 적용을 배제하는지.</li>\n<li><strong>개인 사항 공익성</strong> — 개인에 관한 내용도 공익으로 인정되는지.</li>\n<li><strong>절차 대응</strong> — 조사·고소 절차에서 진술의 일관성과 소명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형법 제310조 진실성·공익성과 부수적 사익 동기',
        summary:
          '대법원 2022도13425(대법원, 2023.02.02 선고) 영역에서 법원은 형법 제310조의 \'진실한 사실\'이란 내용 전체의 취지를 살펴볼 때 중요한 부분이 객관적 사실과 합치되는 사실이라는 의미로 세부에서 진실과 약간 차이가 나거나 다소 과장된 표현이 있더라도 무방하고, \'오로지 공공의 이익에 관한 때\'란 적시된 사실이 객관적으로 공공의 이익에 관한 것으로서 행위자도 주관적으로 공공의 이익을 위하여 그 사실을 적시한 것이어야 하며, 공공의 이익에 관한 것에는 널리 국가·사회 기타 일반 다수인의 이익에 관한 것뿐만 아니라 특정한 사회집단이나 그 구성원 전체의 관심과 이익에 관한 것도 포함된다고 보았습니다. 또한 행위자의 주요한 동기나 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없고, 사실적시의 내용이 사회 일반의 일부 이익에만 관련된 사항이라도 다른 일반인과 공동생활에 관계된 사항이라면 공익성을 지니며 개인에 관한 사항이더라도 공공의 이익과 관련되어 사회적 관심을 획득할 수 있는 경우라면 공익성이 인정될 수 있다고 판시했습니다. 직장 소문 공론화 해명 사안에서도 진실성·공익성·부수적 사익을 검토해볼 수 있습니다.',
        takeaway: '공론화 게시 + 공익 목적 + 명예훼손 고소 결합 시 중요 부분의 사실 합치·공익 목적·부수적 사익의 비배제·개인 사항의 공익성 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '공론화 글을 올렸을 뿐인데 명예훼손이 되나요?',
        answer:
          '<strong>진실한 사실을 오로지 공익 목적으로 적시하면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '제 입장을 지키려는 마음이 섞이면 위법성조각이 안 되나요?',
        answer:
          '<strong>주된 목적이 공익이면 부수적 사익 동기가 있어도 제310조 적용이 배제되지 않을 수 있는 영역입니다.</strong> 동기·경위 자료를 정리.',
      },
      {
        question: '개인에 관한 내용이라도 공익으로 인정될 수 있나요?',
        answer:
          '<strong>개인 사항이라도 공동생활과 관련돼 사회적 관심을 얻을 수 있으면 공익성이 인정될 수 있는 영역입니다.</strong> 공익 관련성 자료를 정리.',
      },
      {
        question: '사실과 다르게 신고된 것 같으면 어떻게 하나요?',
        answer:
          '<strong>사실과 다르게 신고되었다면 근거 자료와 게시 경위로 진실·공익성을 소명할 수 있는 영역입니다.</strong> 근거·경위 자료를 미리 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>중요 부분의 사실 합치·공익 목적과 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손/모욕 종합 가이드', href: '/guide/defamation' },
      { label: '식당 위생 폭로 공공의 이익 위법성 조각', href: '/guide/defamation/defamation-restaurant-hygiene-expose-public-interest-falsely-accused-defense' },
      { label: '사실을 말했는데도 명예훼손이 되는 이유', href: '/guide/defamation/truth-still-defamation-reason' },
      { label: '온라인 카페 익명글 허위사실 명예훼손', href: '/guide/defamation/defamation-anonymous-cafe-false-fact-network-act-track' },
      { label: '명예훼손 합의금 적정 금액 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 9. inheritance-qualified-acceptance-period-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-qualified-acceptance-period-track',
    keyword: '한정승인 신고기간',
    questionKeyword: '돌아가신 부모님 빚이 얼마인지 정확히 몰라 한정승인을 하려는데 신고기간이 언제까지인지 막막해요. 상속개시를 안 날부터 3개월이 지나면 못 하는지, 한정승인을 한 뒤 다른 상속인과 재산을 나누는 분할도 함께 진행할 수 있는지 궁금합니다.',
    ctaKeyword: '한정승인 신고기간·청산절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '한정승인 신고기간 — 5단계 3개월·청산절차 점검 | 로앤가이드',
      description:
        '부모님 빚이 얼마인지 몰라 한정승인을 고민한다면, 민법 제1019조 3개월 고려기간과 한정승인 청산 미종료 시 상속재산분할청구 가능성까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 부모님께 재산보다 빚이 더 많을지도 모른다는 생각에 한정승인을 하려는데, 정작 신고를 언제까지 해야 하는지부터 막막한 상황입니다. \'상속개시가 있음을 안 날부터 일정 기간 안에 해야 한다\'는 말은 들었는데 그 기간이 지나면 더 이상 한정승인을 할 수 없는 것인지, 빚의 규모를 정확히 모르는 상태에서 기간만 흘러가는 것은 아닌지 불안합니다. 또 한정승인을 한 뒤에 다른 형제·상속인과 남은 재산을 나누는 상속재산분할까지 함께 진행할 수 있는지, 청산이 끝나야만 분할이 가능한지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제1019조 제1항은 상속인이 상속개시 있음을 안 날부터 3개월 내에 단순승인이나 한정승인 또는 포기를 할 수 있도록 정하고, 같은 조 제3항은 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 그 기간 내에 알지 못한 경우의 특별한정승인을, 민법 제1028조는 상속으로 취득할 재산의 한도에서 채무를 변제하는 한정승인을 정하는 영역입니다. 판례는 우리 민법이 한정승인 절차가 상속재산분할 절차보다 선행하여야 한다는 명문의 규정을 두고 있지 않고 공동상속인들 중 일부가 한정승인을 하였다고 하여 상속재산분할이 불가능하다거나 분할로 인하여 공동상속인들 사이에 불공평이 발생한다고 보기 어려우며, 상속재산분할의 대상이 되는 상속재산의 범위에 관하여 공동상속인들 사이에 분쟁이 있을 경우에는 상속재산분할청구 절차를 통하여 그 범위를 한꺼번에 확정하는 것이 상속채권자의 보호나 청산절차의 신속한 진행을 위하여 필요하다는 점 등을 고려하면, 한정승인에 따른 청산절차가 종료되지 않은 경우에도 상속재산분할청구가 가능하다고 본 사례 흐름이 있는 영역입니다. 한정승인 + 3개월 신고기간 + 청산·분할 결합은 \'신고기간·청산절차·분할청구\' 정리가 필요한 트랙입니다. 당사자라면 ① 상속개시·기간 ② 한정승인 신고 ③ 청산절차 ④ 분할청구 ⑤ 이행 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 기간 ② 신고 ③ 청산 ④ 분할 ⑤ 이행 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 한정승인 신고기간 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속개시·기간·한정승인 신고·청산절차·분할청구·이행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속개시·기간</strong> — 상속개시를 안 날과 3개월 고려기간 확인.</li>\n<li><strong>② 한정승인 신고</strong> — 재산목록 작성과 가정법원 한정승인 신고 정리.</li>\n<li><strong>③ 청산절차</strong> — 채권자 공고·최고와 변제 등 청산절차 정리.</li>\n<li><strong>④ 분할청구</strong> — 청산 미종료라도 가능한 상속재산분할청구 검토.</li>\n<li><strong>⑤ 이행</strong> — 변제·분할 확정과 이행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 한정승인 절차가 상속재산분할에 반드시 선행해야 하는 것은 아니어서 한정승인에 따른 청산절차가 종료되지 않은 경우에도 상속재산분할청구가 가능하고, 분할로 재산 범위를 한꺼번에 확정하는 것이 청산에 도움이 될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속개시·기간 확인 (즉시)</strong> — 상속개시를 안 날과 3개월 고려기간, 상속재산·채무 자료 확인.</li>\n<li><strong>2단계 — 재산목록·신고 준비 (3개월 내)</strong> — 상속재산목록 작성, 가정법원 한정승인 신고 준비.</li>\n<li><strong>3단계 — 청산절차 진행 (신고 후)</strong> — 채권자 공고·최고, 변제 등 청산절차 진행.</li>\n<li><strong>4단계 — 상속재산분할 청구 (병행)</strong> — 청산 미종료라도 상속재산분할청구 검토.</li>\n<li><strong>5단계 — 변제·분할 이행 (확정 후)</strong> — 변제·분할 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">한정승인 신고기간·청산절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 신고기간·청산절차·분할 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·제적등본 (상속개시)</strong></li>\n<li><strong>가족관계증명서·상속인 확인 자료 (상속인 범위)</strong></li>\n<li><strong>상속재산목록·재산 조회 자료 (재산목록 작성)</strong></li>\n<li><strong>상속채무·대출·보증 내역 자료 (채무 파악)</strong></li>\n<li><strong>상속개시를 안 날 입증 자료 (3개월 기간)</strong></li>\n<li><strong>한정승인 신고서·수리 결정 (신고 확인)</strong></li>\n<li><strong>채권자 공고·최고·변제 관련 자료 (청산절차)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한정승인은 원칙적으로 상속개시가 있음을 안 날부터 3개월 내에 가정법원에 신고해야 하고 빚이 더 많은 사실을 중대한 과실 없이 몰랐다면 특별한정승인을 검토할 수 있는 영역이므로 \'안 날\'을 입증할 자료와 기간을 먼저 정리하는 것이 핵심. 한정승인에 따른 청산절차가 끝나지 않았더라도 상속재산분할청구가 가능하므로 재산목록·채무 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신고기간</strong> — 상속개시를 안 날부터 3개월 기간의 기산.</li>\n<li><strong>특별한정승인</strong> — 빚 초과를 중대한 과실 없이 몰랐는지.</li>\n<li><strong>청산절차</strong> — 채권자 공고·최고와 변제 순서.</li>\n<li><strong>분할 선후</strong> — 청산 미종료라도 분할청구가 가능한지.</li>\n<li><strong>재산 범위</strong> — 분할 대상 상속재산 범위의 확정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (한정승인·상속포기 신고)</strong></li>\n<li><strong>국세청 126 (상속세 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인 청산 미종료 시 상속재산분할청구 가능성',
        summary:
          '대법원 2011스226(대법원, 2014.07.25 선고) 영역에서 법원은 우리 민법이 한정승인 절차가 상속재산분할 절차보다 선행하여야 한다는 명문의 규정을 두고 있지 않고, 공동상속인들 중 일부가 한정승인을 하였다고 하여 상속재산분할이 불가능하다거나 분할로 인하여 공동상속인들 사이에 불공평이 발생한다고 보기 어려우며, 상속재산분할의 대상이 되는 상속재산의 범위에 관하여 공동상속인들 사이에 분쟁이 있을 경우에는 한정승인에 따른 청산절차가 제대로 이루어지지 못할 우려가 있는데 그럴 때에는 상속재산분할청구 절차를 통하여 분할의 대상이 되는 상속재산의 범위를 한꺼번에 확정하는 것이 상속채권자의 보호나 청산절차의 신속한 진행을 위하여 필요하다는 점 등을 고려하면, 한정승인에 따른 청산절차가 종료되지 않은 경우에도 상속재산분할청구가 가능하다고 보았습니다. 즉 한정승인과 상속재산분할은 반드시 어느 하나가 선행되어야 하는 관계가 아니라 병행될 수 있다고 판시했습니다. 한정승인 신고기간·청산절차 사안에서도 신고기간·청산절차·분할청구를 검토해볼 수 있습니다.',
        takeaway: '한정승인 + 3개월 신고기간 + 청산·분할 결합 시 3개월 고려기간·특별한정승인·청산 미종료 시 상속재산분할청구 가능성 검토 영역 — 변호사 상담·가정법원 신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '한정승인은 언제까지 신고해야 하나요?',
        answer:
          '<strong>원칙적으로 상속개시가 있음을 안 날부터 3개월 내에 가정법원에 신고하는 영역입니다.</strong> 상속개시를 안 날 입증 자료를 정리.',
      },
      {
        question: '3개월이 지나면 한정승인을 못 하나요?',
        answer:
          '<strong>빚 초과를 중대한 과실 없이 몰랐다면 특별한정승인을 검토할 수 있는 영역입니다.</strong> 채무 인지 시점·경위 자료를 정리.',
      },
      {
        question: '빚이 얼마인지 몰라도 한정승인을 할 수 있나요?',
        answer:
          '<strong>재산목록을 작성해 취득 재산 한도에서 변제하는 한정승인을 검토할 수 있는 영역입니다.</strong> 상속재산·채무 자료를 정리.',
      },
      {
        question: '한정승인을 한 뒤 재산분할도 같이 할 수 있나요?',
        answer:
          '<strong>청산절차가 끝나지 않았더라도 상속재산분할청구가 가능한 영역입니다.</strong> 재산목록·분할 대상 자료를 정리.',
      },
      {
        question: '청산은 어떤 순서로 진행되나요?',
        answer:
          '<strong>채권자 공고·최고를 거쳐 취득 재산 한도에서 변제하는 순서로 진행되는 영역입니다.</strong> 채권자·변제 자료를 정리.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '뒤늦게 드러난 상속채무 한정승인 판단', href: '/guide/inheritance/inheritance-undisclosed-debt-qualified-acceptance-track' },
      { label: '상속 종합 가이드', href: '/guide/inheritance' },
      { label: '상속 후 뒤늦게 발견된 채무 특별한정승인 절차', href: '/guide/inheritance/inheritance-late-discovered-debt-special-qualified-acceptance-track' },
      { label: '해외자산 상속 취득 주택 거주기간 세제', href: '/guide/inheritance/inheritance-overseas-asset-foreign-account-division-track' },
      { label: '상속포기 후순위 자녀 채무이전', href: '/guide/inheritance/inheritance-renunciation-junior-heirs-debt-transfer' },
    ],
  },

  // ─── 10. traffic-accident-crosswalk-pedestrian-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-crosswalk-pedestrian-fault-track',
    keyword: '신호등 없는 횡단보도 사고 과실',
    questionKeyword: '신호등 없는 횡단보도를 건너다 차에 치여 크게 다쳤는데, 보행자인 제게도 과실이 잡힐까 봐 걱정이에요. 다니던 회사가 사고 뒤 문을 닫았는데 제 일실수입은 어떻게 계산되는지, 차와 다른 차가 함께 잘못한 경우 제 과실은 어떻게 따지는지 막막합니다.',
    ctaKeyword: '신호등 없는 횡단보도 사고 과실·일실수입 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '횡단보도 사고 과실 — 5단계 과실·일실수입 점검 | 로앤가이드',
      description:
        '신호등 없는 횡단보도 사고로 보행자 과실이 걱정이라면, 민법 제750조 손해배상과 일실수입 산정·공동불법행위 과실상계의 전체적 평가까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신호등이 없는 횡단보도를 건너던 중 달려온 차에 치여 크게 다쳐 치료를 받고 있는 상황입니다. 분명 횡단보도를 건너고 있었는데도 \'좌우를 제대로 살피지 않았다\'는 식으로 보행자인 제게도 과실이 잡히는 것은 아닌지, 그렇게 되면 제가 받을 배상이 크게 깎이는 것은 아닌지 불안합니다. 게다가 사고 이후 제가 다니던 회사가 문을 닫아버려, 앞으로 벌었을 소득인 일실수입을 어떤 기준으로 계산하는지도 막막합니다. 또 저를 친 차와 또 다른 차가 함께 잘못한 사고라면 제 과실은 누구를 기준으로 어떻게 따지는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제750조는 고의·과실로 인한 위법행위로 타인에게 손해를 가한 자의 배상책임을, 도로교통법 제27조는 횡단보도에서의 보행자 보호의무를 정하고, 민법 제763조·제396조에 따라 피해자의 과실은 과실상계로 참작되는 영역입니다. 판례는 불법행위로 사망하거나 신체상의 장해를 입은 사람의 일실수익은 원칙적으로 사고 당시 피해자의 실제 소득을 기준으로 산정할 수도 있고 추정소득에 의하여 평가할 수도 있으며, 교통사고 피해자가 근무하던 회사가 사고 후 폐업한 경우에도 사고 당시의 소득과 그 직종·경력 등에 따른 통계소득 등을 참작하여 향후 일실수입을 산정할 수 있고, 공동불법행위 책임에 대한 과실상계를 할 때 피해자의 공동불법행위자 각인에 대한 과실비율이 서로 다른 경우에는 피해자에 대한 과실상계는 그 과실비율을 전체적으로 평가하여야 한다고 본 사례 흐름이 있는 영역입니다. 횡단보도 사고 + 보행자 과실 + 일실수입 결합은 \'과실비율·일실수입·과실상계\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사고·신호 ② 과실비율 ③ 일실수입·손해 ④ 과실상계 ⑤ 합의 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 사고 ② 비율 ③ 일실수입 ④ 과실상계 ⑤ 합의 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신호등 없는 횡단보도 사고 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·신호·과실비율·일실수입·과실상계·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·신호</strong> — 횡단보도·신호 유무·진행 경위 등 사고 정황 정리.</li>\n<li><strong>② 과실비율</strong> — 보행자 보호의무 위반과 보행자 과실의 비율 산정.</li>\n<li><strong>③ 일실수입·손해</strong> — 사고 당시 소득·통계소득 기준 일실수입 산정.</li>\n<li><strong>④ 과실상계</strong> — 공동불법행위 시 과실비율의 전체적 평가 검토.</li>\n<li><strong>⑤ 합의</strong> — 손해배상·합의·소멸시효 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 일실수입은 사고 당시 실제 소득이나 통계소득 등으로 산정할 수 있고 회사가 폐업했더라도 직종·경력에 따른 소득을 참작할 수 있으며, 공동불법행위에서 피해자 과실은 가해자별 비율을 전체적으로 평가하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·과실 증거 확보 (즉시)</strong> — 블랙박스·CCTV·현장 사진·진단서 확보.</li>\n<li><strong>2단계 — 과실비율·신호 정리 (즉시~1주)</strong> — 횡단보도·신호 유무, 보행자 보호의무 위반, 과실비율 정리.</li>\n<li><strong>3단계 — 일실수입·손해 정리 (1~2주)</strong> — 사고 당시 소득·통계소득, 치료·후유장해 등 손해 정리.</li>\n<li><strong>4단계 — 손해배상·이의 (분쟁 시)</strong> — 보험사·가해자 손해배상 청구, 과실상계 다툼 검토.</li>\n<li><strong>5단계 — 합의·소멸시효 (병행)</strong> — 합의 조건 검토, 손해배상 소멸시효 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신호등 없는 횡단보도 사고 과실·일실수입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사고·과실·일실수입 갈래입니다.</strong></p>\n<ul>\n<li><strong>교통사고 사실확인원·신고 자료 (사고 발생)</strong></li>\n<li><strong>블랙박스·CCTV·현장 사진 (과실비율)</strong></li>\n<li><strong>횡단보도·신호 유무·차로 자료 (보호의무)</strong></li>\n<li><strong>상해진단서·치료·후유장해 자료 (손해 산정)</strong></li>\n<li><strong>사고 당시 소득·재직·세무 자료 (일실수입)</strong></li>\n<li><strong>폐업 시 직종·경력·통계소득 자료 (일실수입 산정)</strong></li>\n<li><strong>손해·합의 관련 서류 (손해배상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신호등 없는 횡단보도 사고는 운전자의 보행자 보호의무와 보행자의 좌우 확인 등 과실을 종합해 비율이 정리되는 영역이므로 블랙박스·CCTV·현장 자료를 먼저 확보하는 것이 핵심. 사고 후 회사가 폐업했더라도 일실수입은 사고 당시 소득과 직종·경력에 따른 통계소득 등을 참작해 산정할 수 있고 공동불법행위에서는 피해자 과실을 가해자별 비율로 전체적으로 평가하므로 소득·과실 자료를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>과실비율</strong> — 보행자 보호의무 위반과 보행자 과실의 비율.</li>\n<li><strong>일실수입</strong> — 사고 당시 소득·통계소득 기준 산정.</li>\n<li><strong>폐업 영향</strong> — 회사 폐업 시 향후 일실수입 산정 방법.</li>\n<li><strong>과실상계</strong> — 공동불법행위 시 과실비율의 전체적 평가.</li>\n<li><strong>손해·소멸시효</strong> — 손해 산정과 손해배상청구권의 소멸시효.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁 상담)</strong></li>\n<li><strong>손해보험협회 (보험·보상 안내)</strong></li>\n<li><strong>경찰 182 (교통 민원·사고 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일실수입 산정과 공동불법행위 과실상계의 전체적 평가',
        summary:
          '대법원 2011다82063(대법원, 2013.11.14 선고) 영역에서 법원은 불법행위로 신체상의 장해를 입은 사람의 일실수익은 원칙적으로 사고 당시 피해자의 실제 소득을 기준으로 하여 산정할 수도 있고 추정소득에 의하여 평가할 수도 있으며, 실제 소득을 기준으로 일실수익을 산정하는 경우 반드시 사고 당시의 소득에 한정될 것은 아니라고 보았습니다. 또한 교통사고 피해자가 사고 당시 근무하던 회사가 사고 후 폐업한 경우에도 피해자의 향후 일실수입은 사고 당시의 소득과 그 직종·경력 등에 따른 통계소득 등을 참작하여 산정할 수 있고, 공동불법행위 책임에 대한 과실상계를 함에 있어 피해자의 공동불법행위자 각인에 대한 과실비율이 서로 다른 경우에는 피해자에 대한 과실상계는 그 과실비율을 전체적으로 평가하여야 한다고 판시했습니다. 신호등 없는 횡단보도 보행자 사고 사안에서도 일실수입 산정·과실비율의 전체적 평가를 검토해볼 수 있습니다.',
        takeaway: '횡단보도 사고 + 보행자 과실 + 일실수입 결합 시 사고 당시·통계소득 기준 일실수입 산정·폐업 시 산정 방법·공동불법행위 과실상계의 전체적 평가 검토 영역 — 변호사 상담·보험·법률구조공단 검토 권장.',
      },
    ],
    faq: [
      {
        question: '횡단보도를 건너다 다쳐도 보행자 과실이 잡히나요?',
        answer:
          '<strong>운전자의 보호의무 위반과 보행자의 주의 정도를 종합해 과실비율을 산정하는 영역입니다.</strong> 블랙박스·현장 자료를 정리.',
      },
      {
        question: '신호등이 없는 횡단보도면 누구 책임이 큰가요?',
        answer:
          '<strong>횡단보도에서의 보행자 보호의무와 구체적 사고 정황을 종합해 비율이 정해지는 영역입니다.</strong> 횡단보도·신호 유무 자료를 정리.',
      },
      {
        question: '다니던 회사가 폐업했는데 일실수입은 어떻게 계산하나요?',
        answer:
          '<strong>사고 당시 소득과 직종·경력에 따른 통계소득 등을 참작해 산정할 수 있는 영역입니다.</strong> 사고 당시 소득·경력 자료를 정리.',
      },
      {
        question: '차 두 대가 함께 잘못한 사고면 제 과실은 어떻게 따지나요?',
        answer:
          '<strong>공동불법행위에서는 피해자 과실을 가해자별 비율로 전체적으로 평가하는 영역입니다.</strong> 각 차량의 과실 정황 자료를 정리.',
      },
      {
        question: '손해배상은 언제까지 청구해야 하나요?',
        answer:
          '<strong>손해 및 가해자를 안 날부터 3년 등 소멸시효를 확인해야 하는 영역입니다.</strong> 사고·치료·인지 시점 자료를 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '추돌사고 과실비율', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
      { label: '무단횡단 보행자 사고 과실', href: '/guide/traffic-accident/traffic-accident-jaywalking-pedestrian-fault-track' },
      { label: '야간 무단횡단 과실', href: '/guide/traffic-accident/traffic-accident-night-pedestrian-jaywalk-fault-track' },
      { label: '교통사고 보상금 산정 기준 총정리', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 합의 전 확인해야 할 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
    ],
  },
];
