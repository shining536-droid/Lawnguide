import { SpokePage } from '../spoke-pages';

// batch88 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-05)
//
// 고유 존재 이유:
// 1. divorce-adultery-alimony-claim-track — 배우자 외도·심히 부당한 대우로 파탄된 혼인의 위자료·재판상 이혼 판단형 트랙. 제840조 제3호 심히 부당한 대우와 제6호 중대한 사유의 결합, 파탄 책임정도가 핵심.
// 2. divorce-inlaw-conflict-ground-track — 시댁 갈등·부정행위 결합 파탄에서 제3자 위자료·소멸시효 판단형 트랙. 제3자 부정행위의 부진정연대책임과 이혼 원인 위자료 단기소멸시효 기산점이 핵심.
// 3. divorce-spouse-business-share-division-track — 사업체 지분 재산분할 판단형 트랙. 명의 무관 청산과 부모 지원의 기여 참작, 파탄 후 처분 재산의 분할대상 산정 기준시점이 핵심.
// 4. divorce-international-marriage-procedure-track — 국제결혼 이혼 절차형 트랙. 유책배우자 이혼청구 예외 허용과 상대방 혼인계속의사의 객관적 판단 기준이 핵심.
// 5. defamation-delivery-app-review-track — 배달앱 리뷰 명예훼손 피해자 판단형 트랙. 정보통신망법 제70조 허위사실 인식과 공공의 이익 관련성·비방 목적 부정이 핵심.
// 6. defamation-apartment-resident-cafe-track — 입주민 카페 명예훼손 피해자 판단형 트랙. 전파가능성 공연성과 미필적 고의, 대응 과정 발언의 신중한 인정이 핵심.
// 7. defamation-ex-partner-revenge-track — 전 연인 비방 명예훼손 피해자 판단형 트랙. 정보통신망법 명예훼손 사실 적시 정도와 소문 적시의 공연성·비방 목적이 핵심.
// 8. defamation-public-interest-truth-falsely-accused-defense — accused 관점. 사실적시 게시글이 형법 제310조 진실성·공익으로 위법성조각되는지 다투는 방어 트랙. 진실·공익·부수적 사익·모욕 표현 경계가 핵심.
// 9. inheritance-contribution-portion-claim-track — 기여분 청구 판단형 트랙. 대습상속인 수익의 특별수익 제외와 생명보험금 증여 시점·특별수익 평가가 핵심.
// 10. traffic-accident-jaywalking-pedestrian-fault-track — 무단횡단 보행자 사고 피해자 과실·대위 판단형 트랙. 과실비율에 따른 책임보험금 산정과 공단 대위 범위가 핵심.

export const spokesBatch88DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-adultery-alimony-claim-track ───
  {
    domain: 'divorce',
    slug: 'divorce-adultery-alimony-claim-track',
    keyword: '배우자 외도 위자료 이혼',
    questionKeyword: '배우자의 외도와 폭언·폭행으로 혼인생활이 더는 이어지기 어려운 상황이에요. 이 정도면 재판상 이혼 사유가 되는지, 위자료는 받을 수 있는지, 제게도 책임이 있다고 보면 이혼이 안 되는 건 아닌지 막막합니다.',
    ctaKeyword: '배우자 외도·심히 부당한 대우 이혼 위자료 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '배우자 외도 위자료 이혼 — 5단계 부당한 대우·중대한 사유 점검 | 로앤가이드',
      description:
        '배우자 외도·폭행으로 혼인이 깨졌다면, 민법 제840조 제3호 심히 부당한 대우와 제6호 혼인을 계속하기 어려운 중대한 사유, 파탄 책임정도·위자료·증거까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 혼인생활 동안 배우자의 외도와 반복되는 폭언·폭행을 견디며 살아왔는데, 이제는 애정도 신뢰도 모두 무너져 도저히 함께 살 수 없는 지경에 이른 상황입니다. 이 정도 고통이면 재판으로 이혼을 받아낼 수 있는 사유가 되는지, 그동안 받은 마음의 상처에 대해 위자료를 청구할 수 있는지 막막합니다. 혹시 사소한 다툼에서 제게도 잘못이 있었다는 이유로 이혼 청구 자체가 받아들여지지 않는 것은 아닌지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제840조 제3호는 배우자로부터 심히 부당한 대우를 받았을 때를, 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 재판상 이혼 사유로 정하고, 민법 제839조의2는 재산분할청구권을 정하는 영역입니다. 판례는 제840조 제3호의 \'심히 부당한 대우\'란 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행·학대 또는 모욕을 받은 경우를 말하고, 제6호의 중대한 사유란 부부공동생활관계가 회복할 수 없을 정도로 파탄되어 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하며, 혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등을 두루 고려해 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 그 파탄 원인에 대한 원고 책임이 피고보다 더 무겁다고 인정되지 않는 한 이혼 청구를 인용해야 한다고 본 사례 흐름이 있는 영역입니다. 외도 + 폭행·부당한 대우 + 파탄 결합은 \'심히 부당한 대우·중대한 사유\' 정리가 필요한 트랙입니다. 당사자라면 ① 외도·폭행 증거 ② 부당한 대우 ③ 중대한 사유 ④ 파탄 책임 ⑤ 이혼·위자료 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 증거 ② 대우 ③ 사유 ④ 책임 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 외도 위자료 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 외도·폭행 증거·부당한 대우·중대한 사유·파탄 책임·이혼·위자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 외도·폭행 증거</strong> — 외도·폭언·폭행 정황 자료의 확보·보존.</li>\n<li><strong>② 부당한 대우</strong> — 제840조 제3호 심히 부당한 대우 해당 여부 정리.</li>\n<li><strong>③ 중대한 사유</strong> — 제840조 제6호 혼인을 계속하기 어려운 중대한 사유 해당 여부.</li>\n<li><strong>④ 파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임정도 정리.</li>\n<li><strong>⑤ 이혼·위자료</strong> — 재판상 이혼·위자료·재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 폭행·학대·모욕이 혼인 지속을 강요하기 가혹할 정도면 심히 부당한 대우에 해당할 수 있고, 회복할 수 없을 정도로 파탄됐다면 원고 책임이 더 무겁지 않은 한 이혼 청구를 인용할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안전·증거 확보 (즉시)</strong> — 긴급 시 112·1366, 진단서·외도·폭행 정황 자료 확보.</li>\n<li><strong>2단계 — 부당한 대우·사유 정리 (1~2주)</strong> — 폭행·외도 경위, 심히 부당한 대우·중대한 사유 해당 여부 정리.</li>\n<li><strong>3단계 — 파탄 책임·위자료 정리 (2~3주)</strong> — 파탄에 관한 쌍방 책임정도, 정신적 고통·위자료 정리.</li>\n<li><strong>4단계 — 이혼·위자료 청구 (소 제기 시)</strong> — 재판상 이혼·위자료·재산분할 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 위자료·재산분할 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 외도·심히 부당한 대우 이혼 위자료 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 외도·부당한 대우·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>상해진단서·치료 기록 (폭행 피해)</strong></li>\n<li><strong>외도·부정행위 정황 자료 (부당한 대우)</strong></li>\n<li><strong>112 신고 이력·진술 자료 (반복성)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (중대한 사유·책임정도)</strong></li>\n<li><strong>부부 재산·소득 자료 (재산분할)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 심히 부당한 대우는 폭행·학대·모욕의 정도와 반복성을, 중대한 사유는 외도·폭행으로 인한 파탄 정도를 종합해 판단되는 영역이므로 진단서·신고 이력과 외도 정황을 시간 순으로 정리하는 것이 핵심. 파탄에 관한 본인 책임이 상대보다 더 무겁지 않다는 점도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부당한 대우</strong> — 폭행·학대·모욕이 심히 부당한 대우에 해당하는지.</li>\n<li><strong>중대한 사유</strong> — 외도·폭행이 제840조 제6호에 해당하는지.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임정도.</li>\n<li><strong>위자료</strong> — 정신적 고통에 대한 위자료 인정 범위.</li>\n<li><strong>재산분할</strong> — 혼인 중 형성 재산의 분할 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료·재산분할 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366 (가정폭력 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 심히 부당한 대우와 혼인을 계속하기 어려운 중대한 사유',
        summary:
          '대법원 2020므14763(대법원, 2021.03.25 선고) 영역에서 법원은 민법 제840조 제3호에서 정한 \'배우자로부터 심히 부당한 대우를 받았을 때\'란 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행이나 학대 또는 모욕을 받았을 경우를 말한다고 보았습니다. 또한 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 일방 배우자에게 참을 수 없는 고통이 되는 경우를 말하며, 이를 판단할 때에는 혼인계속의사·파탄 책임·혼인 기간·자녀·연령·이혼 후 생활보장 등 여러 사정을 두루 고려해 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 그 파탄 원인에 대한 원고의 책임이 피고의 책임보다 더 무겁다고 인정되지 않는 한 이혼 청구를 인용해야 한다고 판시했습니다. 배우자 외도·폭행 사안에서도 부당한 대우·중대한 사유를 검토해볼 수 있습니다.',
        takeaway: '외도 + 폭행·부당한 대우 + 파탄 결합 시 심히 부당한 대우·중대한 사유·파탄 책임정도·위자료 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자 외도와 폭행이 있으면 이혼이 되나요?',
        answer:
          '<strong>외도·폭행으로 혼인이 회복할 수 없을 정도로 파탄됐다면 부당한 대우·중대한 사유로 이혼이 검토되는 영역입니다.</strong> 진단서·외도 정황 자료를 정리.',
      },
      {
        question: '위자료는 어느 정도 받을 수 있나요?',
        answer:
          '<strong>사건별 사정에 따라 다르지만 외도·폭행의 정도와 혼인 기간에 따라 수백만 원 이상 수준으로 검토되는 사례가 많아요.</strong> 피해·파탄 경위 자료를 정리.',
      },
      {
        question: '저에게도 잘못이 있으면 이혼이 안 되나요?',
        answer:
          '<strong>파탄이 인정되면 원고 책임이 상대보다 더 무겁지 않은 한 이혼 청구가 받아들여질 수 있는 영역입니다.</strong> 파탄 경위·책임정도 자료를 정리.',
      },
      {
        question: '심히 부당한 대우는 무엇을 기준으로 판단하나요?',
        answer:
          '<strong>혼인 지속을 강요하기 가혹할 정도의 폭행·학대·모욕인지를 기준으로 판단하는 영역입니다.</strong> 폭행·모욕 정황 자료를 정리.',
      },
      {
        question: '이혼하면서 위자료와 재산분할을 함께 청구할 수 있나요?',
        answer:
          '<strong>재판상 이혼과 함께 위자료·재산분할을 청구할 수 있는 영역입니다.</strong> 부부 재산·피해 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '시댁 갈등 이혼·위자료', href: '/guide/divorce/divorce-inlaw-conflict-ground-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '혼인 파탄 책임 판단', href: '/guide/divorce/divorce-marriage-breakdown-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 2. divorce-inlaw-conflict-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-inlaw-conflict-ground-track',
    keyword: '시댁 갈등 이혼 사유',
    questionKeyword: '시댁과의 갈등에 배우자의 외도까지 겹쳐 혼인생활이 무너졌어요. 외도 상대방에게도 위자료를 청구할 수 있는지, 시간이 지나 소멸시효가 지난 건 아닌지, 이혼 위자료와 따로 청구하는 건 어떤 건지 막막합니다.',
    ctaKeyword: '시댁 갈등·제3자 부정행위 위자료 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '시댁 갈등 이혼 위자료 — 5단계 제3자 책임·소멸시효 점검 | 로앤가이드',
      description:
        '시댁 갈등·외도로 혼인이 깨졌다면, 민법 제840조 재판상 이혼 사유와 제3자 부정행위의 부진정연대책임, 이혼 원인 위자료의 단기소멸시효 3년 기산점까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 내내 시댁과의 갈등으로 마음고생을 하던 와중에 배우자의 외도까지 드러나면서, 더는 신뢰가 남지 않아 혼인을 정리하려는 상황입니다. 외도 상대방에게도 책임을 묻고 싶은데 제3자에게 위자료를 청구할 수 있는지, 부정행위를 안 지 시간이 꽤 지났는데 소멸시효가 지나버린 것은 아닌지 막막합니다. 이혼하면서 청구하는 위자료와, 이혼과 별개로 부정행위 자체에 대해 청구하는 손해배상이 어떻게 다른지도 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제840조는 재판상 이혼 사유를, 민법 제750조·제766조는 불법행위 손해배상과 소멸시효를 정하는 영역입니다. 판례는 제3자가 부부의 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활을 침해하거나 그 유지를 방해하고 배우자로서의 권리를 침해하여 정신적 고통을 가하는 행위도 원칙적으로 불법행위를 구성하고, 부부의 일방과 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계에 있으며, 이혼을 원인으로 하는 위자료청구권은 개별적 유책행위 발생부터 최종적 이혼에 이르기까지 일련의 경과가 전체로서 불법행위로 파악되어 최종적 이혼 시점에 확정·평가되므로 피해자인 상대방 배우자는 혼인이 해소된 때에 손해 및 가해자를 알았다고 보아 그때부터 3년이 지나야 민법 제766조 제1항의 단기소멸시효가 완성된다고 본 사례 흐름이 있는 영역입니다. 시댁 갈등 + 제3자 부정행위 + 이혼 위자료 결합은 \'제3자 책임·소멸시효\' 정리가 필요한 트랙입니다. 당사자라면 ① 파탄·외도 증거 ② 제3자 책임 ③ 위자료 성격 ④ 소멸시효 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 증거 ② 책임 ③ 성격 ④ 시효 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 시댁 갈등 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 파탄·외도 증거·제3자 책임·위자료 성격·소멸시효·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 파탄·외도 증거</strong> — 시댁 갈등·외도·파탄 정황 자료의 확보·보존.</li>\n<li><strong>② 제3자 책임</strong> — 외도 상대방의 부정행위가 불법행위인지 정리.</li>\n<li><strong>③ 위자료 성격</strong> — 이혼 원인 위자료인지, 개별 부정행위 손해배상인지 구분.</li>\n<li><strong>④ 소멸시효</strong> — 이혼 원인 위자료는 혼인 해소 시부터 3년 기산 검토.</li>\n<li><strong>⑤ 청구</strong> — 배우자·제3자에 대한 위자료·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 제3자의 부정행위도 불법행위를 구성해 배우자와 부진정연대책임을 지고, 이혼을 원인으로 하는 위자료청구권은 혼인이 해소된 때부터 3년이 지나야 단기소멸시효가 완성되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 외도·갈등 증거 확보 (즉시)</strong> — 외도 정황·시댁 갈등·파탄 경위 자료 확보.</li>\n<li><strong>2단계 — 제3자 책임·성격 정리 (1~2주)</strong> — 외도 상대방의 부정행위, 이혼 원인 위자료인지 개별 손해배상인지 정리.</li>\n<li><strong>3단계 — 소멸시효·책임 정리 (2~3주)</strong> — 혼인 해소 시점 기준 3년 시효, 파탄 책임정도 정리.</li>\n<li><strong>4단계 — 위자료·손해배상 청구 (소 제기 시)</strong> — 배우자·제3자에 대한 위자료·손해배상 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 위자료·재산분할 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">시댁 갈등·제3자 부정행위 위자료 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 외도·제3자·소멸시효 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>외도·부정행위 정황 자료 (제3자 책임)</strong></li>\n<li><strong>외도 상대방 인적사항·관계 자료 (제3자 특정)</strong></li>\n<li><strong>시댁 갈등·파탄 경위 자료 (이혼 사유)</strong></li>\n<li><strong>부정행위 인지·혼인 해소 시점 자료 (소멸시효)</strong></li>\n<li><strong>정신적 고통·피해 입증 자료 (위자료)</strong></li>\n<li><strong>위자료·손해배상 청구 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 제3자에 대한 이혼 원인 위자료는 혼인이 해소된 때부터 3년의 단기소멸시효가 진행되므로 혼인 해소 시점과 부정행위 인지 시점을 함께 정리하는 것이 핵심. 이혼과 무관하게 개별 부정행위 자체를 불법행위로 보는 민사 손해배상도 별도로 가능한 점을 구분해 청구 형태를 검토해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>제3자 책임</strong> — 외도 상대방의 부정행위가 불법행위인지.</li>\n<li><strong>부진정연대</strong> — 배우자와 제3자의 공동불법행위 책임 범위.</li>\n<li><strong>위자료 성격</strong> — 이혼 원인 위자료인지 개별 부정행위 손해배상인지.</li>\n<li><strong>소멸시효</strong> — 혼인 해소 시부터 3년 기산 여부.</li>\n<li><strong>파탄 책임</strong> — 시댁 갈등·외도 등 파탄 원인의 책임정도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 부정행위의 부진정연대책임과 위자료 소멸시효',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 영역에서 법원은 제3자가 부부의 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활을 침해하거나 그 유지를 방해하고 배우자로서의 권리를 침해하여 배우자에게 정신적 고통을 가하는 행위도 원칙적으로 불법행위를 구성하고, 부부의 일방과 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계에 있다고 보았습니다. 또한 이혼을 원인으로 하는 위자료청구권은 부부 일방의 유책·불법한 행위로 혼인관계가 파탄에 이르러 이혼하게 된 경우 개별적 유책행위의 발생부터 최종적 이혼에 이르기까지 일련의 경과가 전체로서 불법행위로 파악되어 최종적 이혼 시점에서 확정·평가되며, 피해자인 상대방 배우자는 혼인이 해소된 때에 손해 및 가해자를 알았다고 봄이 상당하므로 그때부터 3년이 지나야 민법 제766조 제1항의 단기소멸시효가 완성된다고 판시했습니다. 시댁 갈등·외도 사안에서도 제3자 책임·소멸시효를 검토해볼 수 있습니다.',
        takeaway: '시댁 갈등 + 제3자 부정행위 + 이혼 위자료 결합 시 제3자 불법행위·부진정연대책임·이혼 원인 위자료의 혼인 해소 시 3년 시효 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '외도 상대방에게도 위자료를 청구할 수 있나요?',
        answer:
          '<strong>제3자의 부정행위도 불법행위를 구성해 위자료 청구가 검토되는 영역입니다.</strong> 부정행위 정황·상대방 자료를 정리.',
      },
      {
        question: '배우자와 외도 상대방 모두에게 청구할 수 있나요?',
        answer:
          '<strong>배우자와 제3자는 공동불법행위로 부진정연대책임을 지는 영역입니다.</strong> 부정행위 경위·관계 자료를 정리.',
      },
      {
        question: '시간이 지났는데 소멸시효가 지난 건 아닌가요?',
        answer:
          '<strong>이혼 원인 위자료는 혼인이 해소된 때부터 3년이 지나야 단기소멸시효가 완성되는 영역입니다.</strong> 혼인 해소·인지 시점 자료를 정리.',
      },
      {
        question: '이혼 위자료와 부정행위 손해배상은 어떻게 다른가요?',
        answer:
          '<strong>이혼 원인 위자료와 이혼과 무관한 개별 부정행위 손해배상은 성격이 구분되는 영역입니다.</strong> 청구 형태·경위 자료를 정리.',
      },
      {
        question: '시댁 갈등도 이혼 사유가 되나요?',
        answer:
          '<strong>시댁 갈등이 외도 등과 결합해 회복할 수 없는 파탄에 이르렀는지로 검토되는 영역입니다.</strong> 갈등·파탄 경위 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '배우자 외도 위자료 이혼', href: '/guide/divorce/divorce-adultery-alimony-claim-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '상간자 손해배상 청구', href: '/guide/divorce/divorce-third-party-damages-track' },
      { label: '혼인 파탄 책임 판단', href: '/guide/divorce/divorce-marriage-breakdown-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 3. divorce-spouse-business-share-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-business-share-division-track',
    keyword: '사업체 지분 재산분할 이혼',
    questionKeyword: '이혼하면서 배우자 명의의 사업체 지분을 어떻게 나누는지 막막해요. 제가 사업을 도왔거나 부모님 도움으로 재산이 늘었는데 그게 반영되는지, 파탄 뒤 상대가 재산을 처분해버리면 분할에서 빠지는지 궁금합니다.',
    ctaKeyword: '사업체 지분·기여 재산분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '사업체 지분 재산분할 이혼 — 5단계 기여·기준시점 점검 | 로앤가이드',
      description:
        '이혼하며 사업체 지분을 나누려 한다면, 민법 제839조의2 명의 무관 청산과 부모 지원의 기여 참작, 파탄 후 처분 재산의 분할대상 산정 기준시점까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 혼인생활 동안 배우자가 운영하는 사업을 곁에서 돕거나 살림과 양육을 도맡으며 함께 일궈 왔는데, 정작 사업체 지분과 큰 재산은 대부분 배우자 명의로 되어 있어 이혼하면 제 몫을 제대로 받을 수 있을지 막막한 상황입니다. 제가 사업을 도운 부분이나 친정·시댁 부모님의 경제적 지원이 재산분할에 반영되는지, 또 부부 사이가 깨진 뒤 상대가 재산을 처분하거나 명의를 바꿔버리면 그 재산이 분할 대상에서 빠지는 것은 아닌지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2·제843조는 협의·재판상 이혼에 따른 재산분할청구권을 정하는 영역입니다. 판례는 이혼에 의한 재산분할이 재산의 명의와 상관없이 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할·귀속시키는 제도임을 전제로, 부부 일방의 부모 등이 부부나 그 가족에 대하여 한 경제적·비경제적 지원이 재산의 형성·유지에 기여하였다면 이를 그 부부 일방의 기여로 보아 재산분할에 참작하는 것이 형평에 부합하지만 그 기여가 선량한 풍속 기타 사회질서에 위반되고 반사회성·반윤리성·반도덕성이 현저하면 참작할 수 없으며, 혼인관계 파탄 이후 변론종결일 사이에 생긴 재산관계 변동이 혼인 중 공동으로 형성한 재산관계와 무관한 경우 그 변동 재산은 분할 대상에서 제외하되 파탄 이후 일방이 부부공동생활·공동재산 형성과 무관하게 적극재산을 처분한 경우에는 그 재산을 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함할 수 있다고 본 사례 흐름이 있는 영역입니다. 사업체 지분 + 기여 참작 + 파탄 후 처분 결합은 \'기여·기준시점\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산 파악 ② 기여 평가 ③ 분할대상 ④ 기준시점 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 기여 ③ 대상 ④ 기준시점 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사업체 지분 재산분할 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산 파악·기여 평가·분할대상·기준시점·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산 파악</strong> — 사업체 지분·부동산·예금 등 적극·소극재산 파악.</li>\n<li><strong>② 기여 평가</strong> — 사업 조력·가사·부모 지원 등 기여도 평가 검토.</li>\n<li><strong>③ 분할대상</strong> — 명의와 무관하게 혼인 중 형성 재산의 분할 대상 정리.</li>\n<li><strong>④ 기준시점</strong> — 변론종결일 기준 가액, 파탄 후 처분 재산 포함 여부.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 부모 지원도 형성·유지 기여로 참작될 수 있고, 파탄 이후 공동재산과 무관하게 처분한 적극재산은 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·거래 자료 보존 (즉시)</strong> — 사업체 지분·재무제표·부동산 등기·계좌 자료 보존.</li>\n<li><strong>2단계 — 기여·형성 정리 (1~2주)</strong> — 사업 조력·가사·부모 지원 등 기여, 형성 경위 정리.</li>\n<li><strong>3단계 — 분할대상·기준시점 정리 (2~3주)</strong> — 변론종결일 기준 가액, 파탄 후 처분 재산 포함 여부 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업체 지분·기여 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·기여·기준시점 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>사업체 지분·주주명부·재무제표 (분할 대상)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>사업 조력·가사·양육 기여 자료 (기여도)</strong></li>\n<li><strong>부모 경제적 지원 자료 (기여 참작)</strong></li>\n<li><strong>파탄 후 처분·명의변경 자료 (기준시점)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사업체 지분도 명의와 상관없이 형성·유지에 기여한 실질에 따라 분할 대상이 될 수 있고 부모 지원도 기여로 참작될 수 있는 영역이므로 사업 조력·가사·부모 지원 자료를 정리하는 것이 핵심. 파탄 이후 공동재산과 무관하게 처분한 적극재산은 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함될 수 있으므로 처분·명의변경 자료도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지분 평가</strong> — 사업체 지분의 분할 대상 가액 산정.</li>\n<li><strong>기여 참작</strong> — 사업 조력·부모 지원의 기여 참작 여부.</li>\n<li><strong>명의 귀속</strong> — 명의와 무관하게 실질 기여로 분할되는지.</li>\n<li><strong>기준시점·처분</strong> — 변론종결일 기준 가액, 파탄 후 처분 재산 포함 여부.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명의 무관 청산·부모 지원 기여 참작과 파탄 후 처분',
        summary:
          '대법원 2024므13669(대법원, 2025.10.16 선고) 영역에서 법원은 이혼에 의한 재산분할이 재산의 명의와 상관없이 재산의 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할하여 귀속시키는 제도이고, 부부 일방의 부모 등이 부부나 그 가족에 대하여 한 경제적·비경제적 지원이 재산의 형성·유지에 기여하였다면 이를 그 부부 일방의 기여로 보아 재산분할에 참작하는 것이 형평에 부합하지만, 그 기여가 선량한 풍속 기타 사회질서에 위반되고 반사회성·반윤리성·반도덕성이 현저한 경우에는 민법 제746조의 취지에 비추어 참작할 수 없다고 보았습니다. 또한 혼인관계 파탄 이후 변론종결일 사이에 생긴 재산관계 변동이 혼인 중 공동으로 형성한 재산관계와 무관한 경우 그 변동 재산은 분할 대상에서 제외되나, 파탄 이후 부부 일방이 부부공동생활이나 부부공동재산의 형성·유지와 관련 없이 적극재산을 처분한 경우에는 그 재산을 사실심 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함할 수 있다고 판시했습니다. 사업체 지분 재산분할 사안에서도 기여·기준시점을 검토해볼 수 있습니다.',
        takeaway: '사업체 지분 + 기여 참작 + 파탄 후 처분 결합 시 명의 무관 청산·부모 지원 기여 참작·변론종결일 기준시점·파탄 후 처분 재산 포함 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자 명의 사업체 지분도 나눌 수 있나요?',
        answer:
          '<strong>명의와 상관없이 형성·유지에 기여한 실질에 따라 분할이 검토되는 영역입니다.</strong> 지분·기여 자료를 정리.',
      },
      {
        question: '제가 사업을 도운 게 분할에 반영되나요?',
        answer:
          '<strong>사업 조력·가사·양육 등 직접·간접 기여를 종합해 평가하는 영역입니다.</strong> 사업 조력·가사 기여 자료를 정리.',
      },
      {
        question: '부모님이 보태준 재산도 기여로 인정되나요?',
        answer:
          '<strong>부모 등의 경제적·비경제적 지원이 형성·유지에 기여했다면 참작될 수 있는 영역입니다.</strong> 부모 지원 자료를 정리.',
      },
      {
        question: '파탄 뒤 상대가 재산을 처분하면 분할에서 빠지나요?',
        answer:
          '<strong>파탄 후 공동재산과 무관하게 처분한 적극재산은 변론종결일에 보유한 것으로 보아 포함될 수 있는 영역입니다.</strong> 처분·명의변경 자료를 정리.',
      },
      {
        question: '재산은 어느 시점 기준으로 나누나요?',
        answer:
          '<strong>분할 대상·액수는 원칙적으로 사실심 변론종결일을 기준으로 정하는 영역입니다.</strong> 시점별 재산 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '국제결혼 이혼 절차', href: '/guide/divorce/divorce-international-marriage-procedure-track' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 4. divorce-international-marriage-procedure-track ───
  {
    domain: 'divorce',
    slug: 'divorce-international-marriage-procedure-track',
    keyword: '국제결혼 이혼 절차',
    questionKeyword: '외국인 배우자와의 혼인을 정리하려는데 절차가 막막해요. 어느 나라 법이 적용되는지, 혼인이 사실상 깨졌는데 파탄에 책임이 있는 쪽도 이혼을 청구할 수 있는지, 상대가 거부하면 어떻게 되는지 궁금합니다.',
    ctaKeyword: '국제결혼 이혼 준거법·유책배우자 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '국제결혼 이혼 절차 — 5단계 준거법·유책배우자 점검 | 로앤가이드',
      description:
        '외국인 배우자와 혼인을 정리하려 한다면, 민법 제840조 유책주의와 예외적 유책배우자 이혼청구 허용 기준, 상대방 혼인계속의사의 객관적 판단·국제결혼 절차까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"외국인 배우자와 혼인했지만 문화 차이와 갈등이 쌓여 혼인생활을 더는 이어가기 어려운 상황입니다. 그런데 막상 이혼을 정리하려니 어느 나라 법이 적용되는지, 절차를 어디서 어떻게 밟아야 하는지부터 막막합니다. 혼인이 사실상 깨졌는데도 그 파탄에 제 책임이 더 크다면 제가 먼저 이혼을 청구할 수는 없는 것인지, 상대가 끝까지 이혼을 거부하면 어떻게 되는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제840조는 재판상 이혼 사유를 정하고 원칙적으로 유책주의를 채택한 것으로 해석되며, 국제사법은 부부 중 한쪽이 대한민국에 상거소를 둔 대한민국 국민인 경우 이혼의 준거법을 대한민국 민법으로 정하는 영역입니다. 판례는 제840조 제6호의 이혼사유에 관하여도 혼인생활의 파탄에 주된 책임이 있는 배우자는 그 파탄을 사유로 이혼을 청구할 수 없는 것이 원칙이지만, 이혼청구 배우자의 유책성을 상쇄할 정도로 상대방·자녀에 대한 보호와 배려가 이루어졌거나 세월의 경과로 유책성과 상대방의 정신적 고통이 약화되는 등 혼인 파탄의 책임이 반드시 이혼청구를 배척해야 할 정도로 남아 있지 않은 경우에는 예외적으로 유책배우자의 이혼청구가 허용될 수 있고, 상대방 배우자의 혼인계속의사는 주관적 의사만이 아니라 혼인생활 전 과정과 소송 중 드러난 언행·태도를 종합해 혼인유지에 협조할 의사가 있는지 객관적으로 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 국제결혼 + 준거법 + 유책배우자 결합은 \'준거법·예외 허용·절차\' 정리가 필요한 트랙입니다. 당사자라면 ① 준거법 ② 사유·파탄 ③ 유책성 ④ 혼인계속의사 ⑤ 절차 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 준거법 ② 사유 ③ 유책성 ④ 의사 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 국제결혼 이혼 절차 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 준거법·사유·파탄·유책성·혼인계속의사·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 준거법</strong> — 국제사법상 이혼의 준거법(상거소·국적) 확인.</li>\n<li><strong>② 사유·파탄</strong> — 제840조 각 호, 파탄 정도 정리.</li>\n<li><strong>③ 유책성</strong> — 파탄에 관한 청구인의 유책성 정도 검토.</li>\n<li><strong>④ 혼인계속의사</strong> — 상대방의 혼인계속의사·협조 의사의 객관적 판단.</li>\n<li><strong>⑤ 절차</strong> — 관할·송달·통역 등 국제결혼 이혼 절차 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 원칙적으로 유책배우자는 파탄을 사유로 이혼을 청구할 수 없으나 유책성 상쇄·세월 경과 등 예외 사정이 있으면 허용될 수 있고, 상대방 혼인계속의사는 언행·태도를 종합해 객관적으로 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 혼인·신분 자료 정리 (즉시)</strong> — 혼인신고·외국인등록·체류·국적 자료 정리.</li>\n<li><strong>2단계 — 준거법·관할 확인 (1주)</strong> — 상거소·국적 기준 준거법, 관할 가정법원 확인.</li>\n<li><strong>3단계 — 사유·유책성 정리 (1~2주)</strong> — 파탄 정도, 유책성, 상대방 혼인계속의사 정리.</li>\n<li><strong>4단계 — 이혼 청구·송달 (소 제기 시)</strong> — 재판상 이혼·재산분할·양육 청구, 해외 송달·통역 준비.</li>\n<li><strong>5단계 — 판결·신고 (선고 후)</strong> — 판결 확정, 이혼 신고·신분 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">국제결혼 이혼 준거법·유책배우자 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 준거법·유책성·절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·혼인신고 자료 (혼인 확인)</strong></li>\n<li><strong>외국인등록·체류·국적 자료 (준거법·관할)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (이혼사유)</strong></li>\n<li><strong>유책성·보호·배려 정황 자료 (예외 허용)</strong></li>\n<li><strong>상대방 언행·태도 자료 (혼인계속의사)</strong></li>\n<li><strong>부부 재산·소득·자녀 자료 (재산분할·양육)</strong></li>\n<li><strong>해외 송달·번역·통역 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 국제결혼 이혼은 먼저 어느 나라 법이 적용되는지(준거법)와 관할을 확인하는 것이 핵심으로, 부부 중 한쪽이 대한민국에 상거소를 둔 대한민국 국민이면 대한민국 민법이 준거법이 될 수 있는 영역입니다. 파탄에 책임이 있는 쪽이라도 유책성 상쇄·세월 경과 등 예외 사정이 있으면 이혼청구가 허용될 수 있으므로 상대방의 혼인계속의사를 보여주는 언행·태도 자료를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>준거법·관할</strong> — 적용 법률과 관할 가정법원의 확정.</li>\n<li><strong>유책배우자</strong> — 파탄 책임 있는 청구인의 이혼청구 허용 여부.</li>\n<li><strong>예외 사정</strong> — 유책성 상쇄·세월 경과 등 예외 허용 사정.</li>\n<li><strong>혼인계속의사</strong> — 상대방 혼인유지 협조 의사의 객관적 판단.</li>\n<li><strong>송달·통역</strong> — 해외 송달·번역·통역 등 절차 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·재산분할 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>다누리콜센터 1577-1366 (다문화·이주민 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유책배우자 이혼청구 예외 허용과 혼인계속의사 판단',
        summary:
          '대법원 2021므14258(대법원, 2022.06.16 선고) 영역에서 법원은 재판상 이혼원인에 관한 민법 제840조가 원칙적으로 유책주의를 채택한 것으로 해석되고 제6호의 이혼사유에 관하여도 혼인생활의 파탄에 주된 책임이 있는 배우자는 그 파탄을 사유로 이혼을 청구할 수 없는 것이 원칙이라고 보았습니다. 다만 이혼청구 배우자의 유책성을 상쇄할 정도로 상대방 배우자·자녀에 대한 보호와 배려가 이루어진 경우, 세월의 경과에 따라 파탄 당시 현저하였던 유책성과 상대방이 받은 정신적 고통이 약화되어 책임의 경중을 엄밀히 따지는 것이 무의미할 정도가 된 경우 등 혼인 파탄의 책임이 반드시 이혼청구를 배척해야 할 정도로 남아 있지 않은 경우에는 유책배우자의 이혼청구가 예외적으로 허용될 수 있고, 상대방 배우자의 혼인계속의사는 소송에서 표명하는 주관적 의사만이 아니라 혼인생활의 전 과정과 이혼소송 중 드러난 언행·태도를 종합해 혼인유지에 협조할 의무를 이행할 의사가 있는지 객관적으로 판단해야 한다고 판시했습니다. 국제결혼 이혼 사안에서도 준거법·유책배우자 기준을 검토해볼 수 있습니다.',
        takeaway: '국제결혼 + 준거법 + 유책배우자 결합 시 준거법·관할·유책배우자 이혼청구 예외 허용·혼인계속의사 객관적 판단 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '외국인 배우자와 이혼하면 어느 나라 법이 적용되나요?',
        answer:
          '<strong>한쪽이 한국에 상거소를 둔 한국 국민이면 한국 민법이 준거법이 될 수 있는 영역입니다.</strong> 상거소·국적 자료를 정리.',
      },
      {
        question: '파탄에 제 책임이 더 커도 이혼을 청구할 수 있나요?',
        answer:
          '<strong>원칙적으로 유책배우자는 청구가 어렵지만 유책성 상쇄·세월 경과 등 예외 사정이 있으면 허용될 수 있는 영역입니다.</strong> 보호·배려·경과 자료를 정리.',
      },
      {
        question: '상대가 이혼을 거부하면 어떻게 되나요?',
        answer:
          '<strong>상대방의 혼인계속의사는 언행·태도를 종합해 객관적으로 판단하는 영역입니다.</strong> 소송 중 언행·태도 자료를 정리.',
      },
      {
        question: '외국에 사는 상대에게 소장은 어떻게 보내나요?',
        answer:
          '<strong>해외 송달·번역·통역 등 절차를 갖춰 진행하는 영역입니다.</strong> 주소·국적·송달 관련 자료를 정리.',
      },
      {
        question: '국제결혼 이혼도 재산분할·양육을 정할 수 있나요?',
        answer:
          '<strong>준거법에 따라 재산분할·양육 등을 함께 정리할 수 있는 영역입니다.</strong> 재산·자녀 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '유책배우자 이혼청구', href: '/guide/divorce/divorce-at-fault-spouse-track' },
      { label: '사업체 지분 재산분할 이혼', href: '/guide/divorce/divorce-spouse-business-share-division-track' },
      { label: '혼인 파탄 책임 판단', href: '/guide/divorce/divorce-marriage-breakdown-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 5. defamation-delivery-app-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-delivery-app-review-track',
    keyword: '배달앱 리뷰 명예훼손',
    questionKeyword: '제 가게에 배달앱 리뷰로 사실과 다른 악평이 올라와 매출이 떨어졌어요. 리뷰도 명예훼손이 되는지, 소비자가 솔직한 후기라고 하면 처벌이 안 되는지, 허위라는 걸 어떻게 따지는지 막막합니다.',
    ctaKeyword: '배달앱 리뷰 명예훼손 허위·공익 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '배달앱 리뷰 명예훼손 — 5단계 허위·공익성 점검 | 로앤가이드',
      description:
        '배달앱 리뷰로 명예훼손 피해를 입었다면, 정보통신망법 제70조 제2항 허위사실 인식과 공공의 이익 관련성, 비방 목적 부정·증거 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"정성껏 운영하는 가게에 배달앱 리뷰로 사실과 전혀 다른 악평이 올라와 별점이 떨어지고 매출까지 흔들리는 상황입니다. 정작 그 리뷰를 쓴 사람은 \'먹어 본 솔직한 후기일 뿐\'이라며 대수롭지 않게 여깁니다. 후기 형식의 리뷰도 명예훼손이 되는지, 소비자가 정보 공유 목적이라고 하면 처벌이 안 되는지, 무엇을 기준으로 그 내용이 \'허위\'인지 따지는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제2항은 사람을 비방할 목적으로 정보통신망을 통해 거짓의 사실을 드러내어 명예를 훼손한 행위를 규율하는 영역입니다. 판례는 위 죄가 성립하려면 피고인이 적시하는 사실이 허위이고 그 사실이 허위임을 인식하여야 하며 적시된 사실이 거짓인지는 중요한 부분이 객관적 사실과 합치하는지로 판단하고, \'사람을 비방할 목적\'은 \'공공의 이익\'을 위한 것과는 행위자의 주관적 의도의 방향에서 상충하므로 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적은 부정되며, 공공의 이익에는 특정한 사회집단이나 그 구성원 전체의 관심·이익에 관한 것도 포함되고 개인에 관한 사항이라도 공공의 이익과 관련된 경우가 있다고 본 사례 흐름이 있는 영역입니다. 배달앱 리뷰 + 허위사실 + 비방 목적 결합은 \'허위·공익성·비방 목적\' 다툼이 가능한 트랙입니다. 당사자라면 ① 리뷰 보존 ② 사실/허위 ③ 허위 인식 ④ 공익성·비방 목적 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 허위 ③ 인식 ④ 목적 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배달앱 리뷰 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 리뷰 보존·사실/허위·허위 인식·공익성·비방 목적·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 리뷰 보존</strong> — 리뷰 내용·작성자·일시·캡처·URL 원본 보존.</li>\n<li><strong>② 사실/허위</strong> — 중요한 부분이 객관적 사실과 합치하는지 정리.</li>\n<li><strong>③ 허위 인식</strong> — 작성자가 허위임을 인식했는지 검토.</li>\n<li><strong>④ 공익성·비방 목적</strong> — 공공의 이익 관련성과 비방 목적 부정 여부.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 허위사실 적시 명예훼손은 적시 사실이 허위이고 그 허위 인식이 있어야 성립하며, 적시 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방할 목적이 부정되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰 캡처·증거 보존 (즉시)</strong> — 리뷰 내용·작성자 계정·일시·별점·URL 보존.</li>\n<li><strong>2단계 — 사실/허위·인식 정리 (1주)</strong> — 중요 부분의 사실 합치 여부, 작성자 허위 인식 정리.</li>\n<li><strong>3단계 — 공익성·비방 목적 정리 (2주)</strong> — 공공의 이익 관련성, 비방 목적 부정 여부, 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제·블라인드 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달앱 리뷰 명예훼손 허위·공익 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 허위·공익성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>리뷰 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>주문·배달 내역 자료 (사실/허위 입증)</strong></li>\n<li><strong>리뷰 내용과 실제 사실 대조 자료 (허위 인식)</strong></li>\n<li><strong>매출·별점 변동 자료 (피해 입증)</strong></li>\n<li><strong>리뷰 작성 경위·동기 정황 자료 (비방 목적)</strong></li>\n<li><strong>삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배달앱 리뷰의 허위사실 명예훼손은 중요한 부분이 객관적 사실과 합치하지 않고 작성자가 그 허위를 인식했는지가 핵심이므로 주문·배달 내역과 리뷰 내용을 대조한 자료를 정리하는 것이 중요. 다만 적시 내용이 소비자 일반의 정보 공유 등 공공의 이익에 관한 것이면 비방 목적이 부정될 수 있으므로 리뷰의 사실 여부와 작성 경위를 함께 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실/허위</strong> — 리뷰의 중요 부분이 객관적 사실과 합치하는지.</li>\n<li><strong>허위 인식</strong> — 작성자가 허위임을 인식했는지.</li>\n<li><strong>공익성</strong> — 적시 내용이 공공의 이익과 관련되는지.</li>\n<li><strong>비방 목적</strong> — 공익성이 인정되면 비방 목적이 부정되는지.</li>\n<li><strong>피해 입증</strong> — 매출·별점 등 영업·평가 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위사실 적시 명예훼손의 허위 인식과 비방 목적·공익성',
        summary:
          '대법원 2020도15738(대법원, 2022.04.28 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제2항의 허위사실 적시에 의한 명예훼손죄가 성립하려면 피고인이 적시하는 사실이 허위이고 그 사실이 허위임을 인식하여야 하며, 적시된 사실이 거짓인지는 중요한 부분이 객관적 사실과 합치하는지로 판단해야 한다고 보았습니다. 또한 같은 항에서 정한 \'사람을 비방할 목적\'은 \'공공의 이익\'을 위한 것과는 행위자의 주관적 의도의 방향에서 상충하므로 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부정되고, 공공의 이익에 관한 것에는 국가·사회 그 밖에 일반 다수인의 이익뿐만 아니라 특정한 사회집단이나 그 구성원 전체의 관심과 이익에 관한 것도 포함되며 개인에 관한 사항이라도 공공의 이익과 관련된 경우가 있다고 판시했습니다. 배달앱 리뷰 사안에서도 허위·공익성·비방 목적을 검토해볼 수 있습니다.',
        takeaway: '배달앱 리뷰 + 허위사실 + 비방 목적 결합 시 허위 인식·거짓 판단 기준·공익 관련성·비방 목적 부정 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배달앱 리뷰도 명예훼손이 되나요?',
        answer:
          '<strong>사실과 다른 내용을 적시하고 평가를 떨어뜨렸다면 명예훼손이 검토될 수 있는 영역입니다.</strong> 리뷰 원본·주문 내역 자료를 정리.',
      },
      {
        question: '솔직한 후기라고 하면 처벌이 안 되나요?',
        answer:
          '<strong>중요 부분이 객관적 사실과 합치하지 않으면 단순 후기라도 허위사실 적시가 검토되는 영역입니다.</strong> 사실 대조 자료를 정리.',
      },
      {
        question: '허위라는 건 어떻게 따지나요?',
        answer:
          '<strong>적시 사실의 중요한 부분이 객관적 사실과 합치하는지로 판단하는 영역입니다.</strong> 주문·배달·사실 대조 자료를 정리.',
      },
      {
        question: '소비자 정보 공유 목적이면 비방 목적이 없나요?',
        answer:
          '<strong>공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부정될 수 있는 영역입니다.</strong> 작성 경위·동기 자료를 정리.',
      },
      {
        question: '리뷰를 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제·블라인드 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 매출·별점 피해 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '허위사실 적시 명예훼손', href: '/guide/defamation/defamation-false-fact-track' },
      { label: '입주민 카페 명예훼손', href: '/guide/defamation/defamation-apartment-resident-cafe-track' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 6. defamation-apartment-resident-cafe-track ───
  {
    domain: 'defamation',
    slug: 'defamation-apartment-resident-cafe-track',
    keyword: '아파트 입주민 카페 명예훼손',
    questionKeyword: '아파트 입주민 카페나 단체 대화에서 누군가 저에 관한 험담을 했어요. 몇 명만 있는 자리에서 한 말도 명예훼손·모욕이 되는지, 분쟁 대응 과정에서 한 말이면 공연성이 부정된다는데 그 기준이 막막합니다.',
    ctaKeyword: '입주민 카페 명예훼손 공연성·고의 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '입주민 카페 명예훼손 — 5단계 공연성·미필적 고의 점검 | 로앤가이드',
      description:
        '입주민 카페·단체 대화 험담으로 명예훼손·모욕 피해를 입었다면, 형법 제307조·제311조 전파가능성 공연성과 미필적 고의, 대응 과정 발언의 신중한 인정·증거 보존까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 아파트 입주민 카페나 단체 대화방에서 누군가 저에 관한 험담과 사실과 다른 이야기를 흘려, 이웃들 사이에서 얼굴을 들기 어려운 상황입니다. 정작 그 말을 한 사람은 \'몇 명에게 분쟁 설명을 한 것뿐\'이라며 대수롭지 않게 넘기려 합니다. 소수만 있는 자리에서 한 말도 명예훼손·모욕이 되는지, 누수나 관리 문제 같은 분쟁에 대응하는 과정에서 한 말이면 공연성이 부정된다는데 그 경계가 어디인지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를, 형법 제311조는 공연히 사람을 모욕하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 명예훼손·모욕에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정되는 유력한 사정이 될 수 있어 전파될 가능성에 대한 검사의 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성을 인정하는 경우에는 적어도 전파가능성에 대한 인식과 위험을 용인하는 내심의 의사라는 미필적 고의가 필요하며, 사실의 확인·규명 과정이나 상대방의 가해에 대응하는 과정에서 발언하게 된 경우 등에는 전파가능성에 대한 인식과 위험 용인 의사를 인정하는 데 신중해야 한다고 본 사례 흐름이 있는 영역입니다. 입주민 카페 + 소수 적시 + 명예훼손·모욕 결합은 \'공연성·미필적 고의\' 다툼이 가능한 트랙입니다. 당사자라면 ① 발언 보존 ② 사실 적시·표현 ③ 공연성 ④ 미필적 고의 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 표현 ③ 공연성 ④ 고의 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 아파트 입주민 카페 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발언 보존·사실 적시·표현·공연성·미필적 고의·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발언 보존</strong> — 카페 글·대화 내용·작성자·일시·열람 범위 보존.</li>\n<li><strong>② 사실 적시·표현</strong> — 구체적 사실 적시인지, 모욕에 해당하는 표현인지 정리.</li>\n<li><strong>③ 공연성</strong> — 특정 소수 적시인지, 불특정·다수 인식 상태인지.</li>\n<li><strong>④ 미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사 검토.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 특정 소수 적시는 공연성이 부정되는 유력한 사정이어서 전파가능성에 대한 검사의 엄격한 증명과 미필적 고의가 필요하고, 분쟁 대응·설명 과정의 발언은 인식·위험 용인 의사를 신중히 인정하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 글·대화 캡처·증거 보존 (즉시)</strong> — 카페 글·대화 내용·작성자·일시·열람 범위 보존.</li>\n<li><strong>2단계 — 적시·표현 정리 (1주)</strong> — 구체적 사실 적시 여부, 모욕에 해당하는 표현 정리.</li>\n<li><strong>3단계 — 공연성·고의 정리 (2주)</strong> — 특정 소수·다수 인식 상태, 미필적 고의, 발언 경위 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 게시글 삭제 요청, 명예훼손·모욕 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">입주민 카페 명예훼손 공연성·고의 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>카페 글·대화 캡처·일시 (적시·표현)</strong></li>\n<li><strong>작성자 계정·발언자 자료 (특정)</strong></li>\n<li><strong>게시·열람 범위·참여자 자료 (공연성)</strong></li>\n<li><strong>작성자·상대방·피해자 관계 자료</strong></li>\n<li><strong>발언 경위·분쟁 정황 자료 (미필적 고의)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입주민 카페·대화방이라도 발언 상대가 특정 소수면 공연성이 부정되는 유력한 사정이고 전파가능성에 대한 검사의 엄격한 증명이 필요한 영역이므로 열람 범위·참여자와 실제 전파 정황을 함께 정리하는 것이 핵심. 누수·관리 분쟁에 대응·설명하는 과정의 발언은 미필적 고의를 신중히 인정하므로 발언 경위와 전체 맥락을 함께 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 특정 소수 적시인지, 불특정·다수 인식 상태인지.</li>\n<li><strong>미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사의 존부.</li>\n<li><strong>발언 경위</strong> — 분쟁 대응·설명 과정의 발언인지.</li>\n<li><strong>사실 적시·모욕</strong> — 구체적 사실 적시인지, 모욕 표현인지.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전파가능성 공연성의 증명과 미필적 고의·대응 과정 발언',
        summary:
          '대법원 2020도8336(대법원, 2022.07.28 선고) 영역에서 법원은 공연성이 명예훼손죄와 모욕죄의 구성요건으로서 명예훼손이나 모욕에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정되는 유력한 사정이 될 수 있으므로 전파될 가능성에 관해서는 검사의 엄격한 증명이 필요하다고 보았습니다. 또한 전파가능성을 이유로 공연성을 인정하는 경우에는 적어도 범죄구성요건의 주관적 요소로서 미필적 고의가 필요하여 전파가능성에 대한 인식이 있음은 물론 위험을 용인하는 내심의 의사가 있어야 하고, 조직 등의 업무와 관련해 사실의 확인·규명 과정에서 발언하게 되었거나 상대방의 가해에 대응하는 과정에서 발언하게 된 경우 등이라면 발언자의 전파가능성에 대한 인식과 위험을 용인하는 내심의 의사를 인정하는 데 신중하여야 한다고 판시했습니다. 입주민 카페 명예훼손 사안에서도 공연성·미필적 고의를 검토해볼 수 있습니다.',
        takeaway: '입주민 카페 + 소수 적시 + 명예훼손·모욕 결합 시 전파가능성 공연성·검사 엄격 증명·미필적 고의·대응 과정 발언의 신중한 인정 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '몇 명에게만 한 험담도 명예훼손이 되나요?',
        answer:
          '<strong>특정 소수 적시라도 전파될 특별한 사정이 증명되면 공연성이 인정될 수 있는 영역입니다.</strong> 열람 범위·전파 정황 자료를 정리.',
      },
      {
        question: '분쟁을 설명하다 한 말이면 괜찮나요?',
        answer:
          '<strong>분쟁 대응·설명 과정 발언은 미필적 고의를 신중히 인정하는 영역입니다.</strong> 발언 경위·맥락 자료를 정리.',
      },
      {
        question: '\'그렇게 퍼질 줄 몰랐다\'고 하면요?',
        answer:
          '<strong>전파가능성 인식과 위험을 용인하는 미필적 고의가 있어야 공연성이 인정되는 영역입니다.</strong> 발언 정황·전달 자료를 정리.',
      },
      {
        question: '거친 말도 모욕죄가 되나요?',
        answer:
          '<strong>표현 정도와 전체 맥락에 따라 모욕 성부가 달라지는 영역입니다.</strong> 표현 내용·맥락 자료를 정리.',
      },
      {
        question: '게시글을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '모욕죄 성립 기준', href: '/guide/defamation/defamation-insult-track' },
      { label: '배달앱 리뷰 명예훼손', href: '/guide/defamation/defamation-delivery-app-review-track' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 7. defamation-ex-partner-revenge-track ───
  {
    domain: 'defamation',
    slug: 'defamation-ex-partner-revenge-track',
    keyword: '전 연인 비방 명예훼손',
    questionKeyword: '헤어진 연인이 인터넷에 저에 관한 사생활이나 사실과 다른 이야기를 올려 퍼지고 있어요. 이미 소문이 돌던 내용이라도 명예훼손이 되는지, 비방 목적은 무엇으로 따지는지, 댓글로 옮긴 것도 책임이 있는지 막막합니다.',
    ctaKeyword: '전 연인 비방 명예훼손 사실적시·비방 목적 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '전 연인 비방 명예훼손 — 5단계 사실적시·비방 목적 점검 | 로앤가이드',
      description:
        '전 연인이 인터넷에 사생활·허위 글을 올려 명예훼손 피해를 입었다면, 정보통신망법 명예훼손의 사실 적시 정도와 소문 적시의 공연성·비방 목적·증거 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"헤어진 연인이 앙심을 품고 인터넷 게시판이나 SNS에 저의 사생활이나 사실과 다른 이야기를 올려 빠르게 퍼지면서, 일상생활까지 흔들리는 상황입니다. 정작 그 사람은 \'이미 아는 사람은 다 아는 이야기\', \'댓글 하나 단 것뿐\'이라며 책임을 피하려 합니다. 이미 일부에 알려진 소문이라도 명예훼손이 되는지, \'비방할 목적\'은 무엇을 기준으로 따지는지, 남이 쓴 글에 같은 취지의 댓글을 더한 것도 책임이 있는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률은 사람을 비방할 목적으로 정보통신망을 통해 사실·거짓의 사실을 드러내어 명예를 훼손한 행위를 규율하고, 그 구성요건인 \'사실의 적시\'와 \'공연성\'이 문제 되는 영역입니다. 판례는 위 명예훼손죄가 성립하려면 가치판단·평가가 아니라 시간·공간적으로 구체적인 과거·현재의 사실관계를 적시하여야 하고, 적시한 사실이 이미 사회의 일부에서 다루어진 소문이라 하더라도 이를 적시하여 사람의 사회적 평가를 저하시킬 만한 행위를 한 때에는 명예훼손에 해당하며, \'사람을 비방할 목적\'은 표현의 내용·상대방 범위·방법 등 표현 자체에 관한 사정과 그로써 침해되는 명예의 정도 등을 비교·고려해 판단하고, 포털사이트 기사란에 특정인에 관한 댓글이 달린 상황에서 같은 취지의 댓글을 추가 게시한 경우 명예훼손이 성립할 수 있다고 본 사례 흐름이 있는 영역입니다. 전 연인 비방 + 사실 적시 + 비방 목적 결합은 \'사실적시·공연성·비방 목적\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시물 보존 ② 사실 적시 ③ 공연성 ④ 비방 목적 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 목적 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전 연인 비방 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물 보존·사실 적시·공연성·비방 목적·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물 보존</strong> — 게시글·댓글·작성자·일시·URL 원본 보존.</li>\n<li><strong>② 사실 적시</strong> — 가치판단이 아닌 구체적 사실관계 적시 여부 정리.</li>\n<li><strong>③ 공연성</strong> — 불특정·다수 인식 상태, 기존 소문 적시의 공연성 검토.</li>\n<li><strong>④ 비방 목적</strong> — 표현 내용·범위·방법으로 비방 목적 판단.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 이미 사회 일부에서 다루어진 소문이라도 이를 적시해 사회적 평가를 저하시키면 명예훼손이 될 수 있고, 같은 취지의 댓글을 추가 게시한 행위도 명예훼손이 성립할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 캡처·증거 보존 (즉시)</strong> — 게시글·댓글·작성자 계정·일시·URL 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 구체적 사실관계 적시 여부, 소문 적시의 공연성 정리.</li>\n<li><strong>3단계 — 비방 목적·피해 정리 (2주)</strong> — 표현 내용·범위·방법으로 비방 목적, 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">전 연인 비방 명예훼손 사실적시·비방 목적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시글·댓글 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>게시·열람 범위 자료 (공연성)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>표현 내용·방법·범위 자료 (비방 목적)</strong></li>\n<li><strong>관계·작성 경위 자료 (보복 정황)</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전 연인의 게시·댓글은 가치판단이 아니라 구체적 사실관계를 적시했는지가 핵심이고, 이미 일부에 알려진 소문이라도 이를 적시해 사회적 평가를 저하시키면 명예훼손이 될 수 있는 영역이므로 게시 내용·열람 범위와 표현 방법을 함께 정리하는 것이 중요. 게시물은 삭제 전에 작성자 계정·URL과 함께 원본 형태로 캡처해 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 적시</strong> — 가치판단이 아닌 구체적 사실관계 적시인지.</li>\n<li><strong>소문 적시</strong> — 기존 소문 적시도 공연성·명예훼손이 되는지.</li>\n<li><strong>비방 목적</strong> — 표현 내용·범위·방법으로 본 비방 목적.</li>\n<li><strong>댓글 책임</strong> — 같은 취지 댓글 추가 게시의 책임 여부.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소문 적시의 명예훼손과 댓글 추가 게시·비방 목적',
        summary:
          '대법원 2008도2422(대법원, 2008.07.10 선고) 영역에서 법원은 구 정보통신망 이용촉진 및 정보보호 등에 관한 법률상 명예훼손죄가 성립하려면 가치판단이나 평가가 아니라 시간·공간적으로 구체적인 과거·현재의 사실관계를 적시하여야 하고, 적시한 사실이 이미 사회의 일부에서 다루어진 소문이라고 하더라도 이를 적시하여 사람의 사회적 평가를 저하시킬 만한 행위를 한 때에는 명예훼손에 해당한다고 보았습니다. 또한 \'사람을 비방할 목적\'은 표현의 내용과 상대방의 범위, 표현의 방법 등 표현 그 자체에 관한 제반 사정을 고려함과 동시에 그 표현으로 훼손되는 명예의 정도 등을 비교·고려해 판단해야 하고, 인터넷 포털사이트 기사란에 특정 연예인에 관한 댓글이 달린 상황에서 같은 취지의 댓글을 추가로 게시한 경우 명예훼손죄가 성립한다고 판시했습니다. 전 연인 비방 사안에서도 사실 적시·공연성·비방 목적을 검토해볼 수 있습니다.',
        takeaway: '전 연인 비방 + 사실 적시 + 비방 목적 결합 시 구체적 사실 적시·소문 적시의 명예훼손·비방 목적 판단·댓글 추가 게시 책임 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이미 알려진 소문이라도 명예훼손이 되나요?',
        answer:
          '<strong>기존 소문이라도 이를 적시해 사회적 평가를 저하시키면 명예훼손이 될 수 있는 영역입니다.</strong> 게시 내용·열람 범위 자료를 정리.',
      },
      {
        question: '비방 목적은 무엇으로 따지나요?',
        answer:
          '<strong>표현 내용·상대방 범위·방법과 훼손되는 명예 정도를 비교해 판단하는 영역입니다.</strong> 표현·관계·경위 자료를 정리.',
      },
      {
        question: '남이 쓴 글에 댓글만 달았는데도 책임이 있나요?',
        answer:
          '<strong>같은 취지의 댓글을 추가 게시한 행위도 명예훼손이 성립할 수 있는 영역입니다.</strong> 댓글 내용·게시 정황 자료를 정리.',
      },
      {
        question: '의견이나 감정 표현도 명예훼손이 되나요?',
        answer:
          '<strong>가치판단·평가가 아니라 구체적 사실관계 적시여야 명예훼손이 검토되는 영역입니다.</strong> 표현 내용·맥락 자료를 정리.',
      },
      {
        question: '글을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '입주민 카페 명예훼손', href: '/guide/defamation/defamation-apartment-resident-cafe-track' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 8. defamation-public-interest-truth-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-public-interest-truth-falsely-accused-defense',
    keyword: '사실적시 공익 명예훼손 무고',
    questionKeyword: '공익을 위해 사실관계를 알렸을 뿐인데 상대가 저를 명예훼손·모욕으로 고소했어요. 사실과 다르게 신고된 것 같은데, 진실한 사실을 공익 목적으로 말해도 위법성이 없어진다는 게 제게 적용되는지, 표현이 다소 거칠면 모욕이 되는지 막막합니다.',
    ctaKeyword: '사실적시 명예훼손 위법성조각·모욕 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '사실적시 명예훼손 방어 — 5단계 진실·공익·모욕 점검 | 로앤가이드',
      description:
        '사실을 알렸다가 명예훼손·모욕 혐의를 받고 있다면, 형법 제310조 진실성·공익 목적과 부수적 사익 동기, 거친 표현의 모욕 성부 경계·조사 대응까지 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부당하거나 공적인 문제라고 생각해 사실관계를 알렸을 뿐인데, 상대방이 저를 명예훼손과 모욕으로 고소해 당황스러운 상황입니다. 사실과 다르게 신고되었다고 느껴지고, 진실한 내용을 공익을 위해 말했는데도 처벌될까 두렵습니다. 진실한 사실을 오로지 공공의 이익을 위해 적시하면 위법성이 없어진다는 법리가 정말 제게 적용되는지, 제 억울함이나 사익이 조금 섞였다는 이유로 안 되는 것은 아닌지, 표현이 다소 거칠었다면 그것만으로 모욕이 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 명예를 훼손한 행위를, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하며, 형법 제311조는 공연히 사람을 모욕하는 행위를 규율하는 영역입니다. 판례는 형법 제310조의 \'진실한 사실\'은 중요한 부분이 객관적 사실과 합치하면 충분하고 \'오로지 공공의 이익에 관한 때\'란 적시 사실이 객관적으로 공공의 이익에 관한 것으로 행위자도 주로 공공의 이익을 위하여 한 경우를 뜻하되 부수적으로 다른 사익적 동기가 있더라도 무방하며, 모욕죄에서 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 부정적·비판적 의견을 나타내며 경미한 수준의 추상적 표현·욕설을 사용한 정도라면 원칙적으로 모욕죄의 구성요건에 해당하지 않는다고 보아 인격권과 표현의 자유를 함께 고려해야 한다고 본 사례 흐름이 있는 영역입니다. 사실 적시 + 공익 목적 + 명예훼손·모욕 고소 결합은 \'진실성·공익성·모욕 경계\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 표현·모욕 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 표현 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사실적시 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·표현·모욕·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 적시 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 중요한 부분이 객관적 사실과 합치하는지.</li>\n<li><strong>③ 공익 목적</strong> — 오로지 공공의 이익을 위한 것인지, 부수적 사익 동기 정리.</li>\n<li><strong>④ 표현·모욕</strong> — 표현이 모욕에 해당하는지, 경미한 비판·추상적 표현인지.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각(제310조) 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 적시 내용의 중요한 부분이 객관적 사실과 합치하고 주로 공공의 이익을 위한 것이면 부수적 사익이 있어도 형법 제310조로 위법성이 조각될 수 있고, 거친 표현이라도 경미한 비판·추상적 표현은 모욕에 해당하지 않을 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적시 내용·근거 자료 보존 (즉시)</strong> — 적시 내용·근거 자료·게시 경위·표현 전체 맥락 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 적시 내용과 근거 자료를 대조해 중요 부분의 사실 합치 정리.</li>\n<li><strong>3단계 — 공익성·표현 정리 (2주)</strong> — 공익 목적, 부수적 사익 동기, 표현의 모욕 성부 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제310조 적용 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실적시 명예훼손 위법성조각·모욕 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시·발언 원본·일시·플랫폼 (적시 내용)</strong></li>\n<li><strong>적시 내용의 근거 자료 (사실 합치 입증)</strong></li>\n<li><strong>공익 목적·문제 제기 의도 정황 자료</strong></li>\n<li><strong>부수적 사익 동기 관련 경위 자료</strong></li>\n<li><strong>표현 내용·전체 맥락 자료 (모욕 성부)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 적시 내용의 중요한 부분이 객관적 사실과 합치하고 주로 공공의 이익을 위한 것이었음을 보여주는 근거 자료를 정리하는 것이 핵심이며, 부수적 사익 동기가 일부 있어도 형법 제310조 적용이 배제되지 않을 수 있습니다. 사실과 다르게 신고되었다고 느껴진다면 표현의 전체 맥락도 함께 정리해 경미한 비판·추상적 표현이 모욕에 해당하지 않음을 소명할 수 있도록 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 적시 내용의 중요 부분이 객관적 사실과 합치하는지.</li>\n<li><strong>공익 목적</strong> — 주로 공공의 이익을 위한 것인지.</li>\n<li><strong>부수적 사익</strong> — 부수적 사익 동기가 제310조 적용을 배제하는지.</li>\n<li><strong>모욕 성부</strong> — 거친 표현이 모욕에 해당하는지, 경미한 비판인지.</li>\n<li><strong>절차 대응</strong> — 조사·고소 절차에서 진술의 일관성과 소명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형법 제310조 진실성·공익성과 모욕의 구성요건',
        summary:
          '대법원 2024도14555(대법원, 2025.05.29 선고) 영역에서 법원은 형법 제310조의 위법성조각사유 요건 중 \'진실한 사실\'이란 내용 전체의 취지를 살펴볼 때 중요한 부분이 객관적 사실과 합치되는 사실을 의미하고, \'오로지 공공의 이익에 관한 때\'란 적시된 사실이 객관적으로 볼 때 공공의 이익에 관한 것으로서 행위자도 주요한 동기 내지 목적이 공공의 이익을 위한 것이면 충분하며, 행위자의 주요한 동기나 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없다고 보았습니다. 또한 모욕죄의 \'모욕\'은 사람의 외부적 명예를 저하시킬 만한 추상적 판단이나 경멸적 감정의 표현을 의미하되, 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 부정적·비판적 의견을 나타내면서 경미한 수준의 추상적 표현이나 욕설이 사용된 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않고, 그 해석·적용에는 개인의 인격권과 표현의 자유가 함께 고려되어야 한다고 판시했습니다. 사실적시 해명 사안에서도 진실성·공익성·모욕 성부를 검토해볼 수 있습니다.',
        takeaway: '사실 적시 + 공익 목적 + 명예훼손·모욕 고소 결합 시 진실성·주된 공익 목적·부수적 사익 허용·거친 표현의 모욕 성부 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사실을 알렸을 뿐인데 명예훼손이 되나요?',
        answer:
          '<strong>진실한 사실을 오로지 공익 목적으로 적시하면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '제 억울함이나 사익이 섞이면 위법성조각이 안 되나요?',
        answer:
          '<strong>주된 목적이 공익이면 부수적 사익 동기가 있어도 제310조 적용이 배제되지 않을 수 있는 영역입니다.</strong> 동기·경위 자료를 정리.',
      },
      {
        question: '표현이 다소 거칠면 그것만으로 모욕인가요?',
        answer:
          '<strong>경미한 비판·추상적 표현은 원칙적으로 모욕죄에 해당하지 않을 수 있는 영역입니다.</strong> 표현 전체 맥락 자료를 정리.',
      },
      {
        question: '사실과 다르게 신고된 것 같으면 어떻게 하나요?',
        answer:
          '<strong>사실과 다르게 신고되었다면 근거 자료와 작성 경위로 진실·공익성을 소명할 수 있는 영역입니다.</strong> 근거·경위 자료를 미리 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>진실성·공익 목적과 표현이 경미한 비판이라는 점, 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
      { label: '공공의 이익 위법성조각', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '모욕죄 성립 기준', href: '/guide/defamation/defamation-insult-track' },
      { label: '진실한 사실 적시 방어', href: '/guide/defamation/defamation-truth-defense-track' },
      { label: '명예훼손 합의·처분', href: '/guide/defamation/defamation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-contribution-portion-claim-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-contribution-portion-claim-track',
    keyword: '기여분 청구',
    questionKeyword: '오랜 기간 부모님을 모시고 부양했는데, 다른 형제와 똑같이 상속을 나누는 게 억울해요. 기여한 만큼 더 받는 기여분을 청구할 수 있는지, 부모님이 생전에 형제에게 준 재산이나 보험금은 어떻게 계산되는지 막막합니다.',
    ctaKeyword: '기여분 청구·특별수익 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '기여분 청구 — 5단계 기여분·특별수익 점검 | 로앤가이드',
      description:
        '부모 부양·재산 기여를 했는데 똑같이 나누게 됐다면, 민법 제1008조의2 기여분과 제1008조 특별수익, 대습상속인 수익 제외·생명보험금 처리까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 세월 부모님을 곁에서 모시며 간병과 생활을 도맡았는데, 정작 상속을 나눌 때가 되니 떨어져 살며 도움을 거의 주지 않은 다른 형제와 똑같이 나누게 되어 억울하고 막막한 상황입니다. 제가 들인 시간과 노력만큼 상속분을 더 받을 수 있는 \'기여분\'이라는 제도가 있다는데 어떻게 청구하는지, 부모님이 생전에 특정 형제에게 미리 증여한 재산이나 형제가 받은 보험금은 상속 계산에서 어떻게 다뤄지는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제1008조의2는 공동상속인 중 피상속인을 특별히 부양하거나 재산의 유지·증가에 특별히 기여한 사람에게 기여분을 인정하고, 민법 제1008조는 공동상속인 중 피상속인으로부터 재산의 증여 또는 유증을 받은 특별수익자의 상속분 산정을, 민법 제1009조는 법정상속분을 정하는 영역입니다. 판례는 대습상속인이 대습원인의 발생 이전에 피상속인으로부터 증여를 받은 경우 그러한 수익은 상속인의 지위에서 받은 것이 아니므로 특별수익에 해당하지 않고, 피상속인이 피대습인을 피보험자로 하되 대습상속인을 보험수익자로 지정한 생명보험계약을 체결하고 보험료를 납부하다가 피대습인이 사망해 대습상속인이 생명보험금을 수령한 경우 그 증여가 있었던 시점은 대습상속인을 보험수익자로 지정한 때이고 이를 대습상속인의 특별수익으로 볼 수 없다고 본 사례 흐름이 있는 영역입니다. 기여분 + 특별수익 + 대습상속 결합은 \'기여분·특별수익 산정\' 정리가 필요한 트랙입니다. 당사자라면 ① 상속·기여 파악 ② 기여분 ③ 특별수익 ④ 구체적 상속분 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 기여 ③ 수익 ④ 상속분 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 기여분 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속·기여 파악·기여분·특별수익·구체적 상속분·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속·기여 파악</strong> — 상속재산·상속인·부양·기여 내역 파악.</li>\n<li><strong>② 기여분</strong> — 특별한 부양·재산 유지·증가 기여의 기여분 검토.</li>\n<li><strong>③ 특별수익</strong> — 생전 증여·유증 등 특별수익 정리.</li>\n<li><strong>④ 구체적 상속분</strong> — 기여분·특별수익을 반영한 구체적 상속분 산정.</li>\n<li><strong>⑤ 청구</strong> — 기여분 결정·상속재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 대습상속인이 대습원인 발생 전에 받은 증여는 특별수익에 해당하지 않고, 대습상속인을 수익자로 한 생명보험금도 그 지정 시점이 증여 시점이어서 특별수익으로 보지 않는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속·기여 자료 확보 (즉시)</strong> — 상속재산 목록·부양·간병·증여·보험 자료 확보.</li>\n<li><strong>2단계 — 기여·특별수익 정리 (1~2주)</strong> — 특별한 부양·기여, 생전 증여·유증·보험금 정리.</li>\n<li><strong>3단계 — 구체적 상속분 산정 (2~3주)</strong> — 기여분·특별수익을 반영한 구체적 상속분 산정.</li>\n<li><strong>4단계 — 기여분·분할 청구 (소 제기 시)</strong> — 기여분 결정·상속재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">기여분 청구·특별수익 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 기여·특별수익·상속분 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·제적등본 (상속개시)</strong></li>\n<li><strong>가족관계증명서·상속인 확인 자료</strong></li>\n<li><strong>부양·간병·생활비 지원 자료 (기여분)</strong></li>\n<li><strong>재산 유지·증가 기여 자료 (기여분)</strong></li>\n<li><strong>생전 증여·유증 자료 (특별수익)</strong></li>\n<li><strong>생명보험계약·수익자 지정·보험금 자료</strong></li>\n<li><strong>기여분 결정·상속재산분할 청구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기여분은 통상의 부양을 넘어선 \'특별한\' 부양·기여여야 인정될 수 있으므로 간병·생활비 지원·재산 증가 기여를 구체적 기간·금액과 함께 정리하는 것이 핵심. 형제가 받은 생전 증여가 특별수익이면 그만큼 상속분에서 조정되지만, 대습상속인이 대습원인 발생 전 받은 증여나 대습상속인을 수익자로 한 생명보험금은 특별수익으로 보지 않을 수 있는 점도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특별 기여</strong> — 통상의 부양을 넘는 특별한 부양·기여 인정 여부.</li>\n<li><strong>기여분 비율</strong> — 기여 정도에 따른 기여분 산정.</li>\n<li><strong>특별수익</strong> — 생전 증여·유증의 특별수익 해당 여부.</li>\n<li><strong>대습·보험금</strong> — 대습상속인 수익·생명보험금의 특별수익 제외.</li>\n<li><strong>구체적 상속분</strong> — 기여분·특별수익 반영 후 구체적 상속분.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (기여분·상속재산분할)</strong></li>\n<li><strong>국세청 126 (상속세 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대습상속인 수익의 특별수익 제외와 생명보험금 처리',
        summary:
          '대법원 2024스525(대법원, 2024.06.13 선고) 영역에서 법원은 민법 제1008조의 규정 취지에 비추어, 대습상속인이 대습원인의 발생 이전에 피상속인으로부터 증여를 받은 경우 그러한 수익은 상속인의 지위에서 받은 것이 아니므로 특별수익에 해당하지 않는다고 보았습니다. 또한 피상속인의 재산처분행위가 구체적 상속분 산정을 위한 분할대상 상속재산에 포함되는 증여에 해당하는지를 판단하는 기준을 제시하면서, 피상속인이 피대습인을 피보험자로 하되 대습상속인을 보험수익자로 지정한 생명보험계약을 체결하고 보험계약자로서 보험료를 납부하다가 피대습인이 사망하여 대습상속인이 생명보험금을 수령한 경우, 그 증여가 있었던 시점은 대습상속인을 보험수익자로 지정한 때이고, 위 보험금을 대습상속인의 특별수익으로 볼 수 없다고 판시했습니다. 기여분 청구 사안에서도 특별수익·구체적 상속분을 검토해볼 수 있습니다.',
        takeaway: '기여분 + 특별수익 + 대습상속 결합 시 특별한 기여 인정·특별수익 해당 여부·대습상속인 수익 제외·생명보험금 처리 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '부모님을 모셨으면 상속을 더 받을 수 있나요?',
        answer:
          '<strong>통상의 부양을 넘는 특별한 부양·기여가 인정되면 기여분 청구를 검토할 수 있는 영역입니다.</strong> 부양·간병·기여 자료를 정리.',
      },
      {
        question: '기여분은 어떻게 정해지나요?',
        answer:
          '<strong>기여의 시기·방법·정도와 상속재산 등을 종합해 기여분을 산정하는 영역입니다.</strong> 기간·금액 기여 자료를 정리.',
      },
      {
        question: '형제가 생전에 받은 재산은 어떻게 계산되나요?',
        answer:
          '<strong>특별수익에 해당하면 그만큼 구체적 상속분에서 조정되는 영역입니다.</strong> 생전 증여·유증 자료를 정리.',
      },
      {
        question: '형제가 받은 보험금도 상속분에서 빼나요?',
        answer:
          '<strong>대습상속인을 수익자로 한 생명보험금은 특별수익으로 보지 않을 수 있는 영역입니다.</strong> 보험계약·수익자 지정 자료를 정리.',
      },
      {
        question: '기여분은 어디에 청구하나요?',
        answer:
          '<strong>상속재산분할과 함께 가정법원에 기여분 결정을 청구하는 영역입니다.</strong> 상속재산·기여 자료를 정리.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '특별수익·생전 증여', href: '/guide/inheritance/inheritance-special-benefit-track' },
      { label: '상속재산분할 절차', href: '/guide/inheritance/inheritance-estate-division-procedure' },
      { label: '구체적 상속분 산정', href: '/guide/inheritance/inheritance-specific-share-track' },
      { label: '유류분 반환청구', href: '/guide/inheritance/inheritance-forced-heirship-reserve-track' },
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-qualified-acceptance-documents' },
    ],
  },

  // ─── 10. traffic-accident-jaywalking-pedestrian-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-jaywalking-pedestrian-fault-track',
    keyword: '무단횡단 보행자 사고 과실',
    questionKeyword: '길을 건너다 차에 치여 다쳤는데, 횡단보도가 아닌 곳이라 제 과실이 크게 잡힐까 봐 걱정이에요. 무단횡단이면 배상을 거의 못 받는지, 치료비는 건강보험으로 처리했는데 공단이 가해자에게 받는 돈은 어떻게 되는지 막막합니다.',
    ctaKeyword: '무단횡단 보행자 사고 과실·책임보험금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '무단횡단 보행자 사고 — 5단계 과실비율·책임보험금 점검 | 로앤가이드',
      description:
        '횡단보도 밖에서 차에 치여 다쳤다면, 민법 제750조 손해배상과 과실비율 산정, 자동차손배법 책임보험금 증액과 건강보험공단 대위 범위까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"급한 마음에 횡단보도가 아닌 곳에서 길을 건너다 달려오던 차에 치여 크게 다친 상황입니다. 무단횡단이었다는 이유만으로 제 과실이 지나치게 크게 잡혀 치료비조차 제대로 보상받지 못하는 것은 아닌지 불안하고 막막합니다. 일단 병원비는 건강보험으로 처리했는데, 나중에 건강보험공단이 가해자나 보험사에게 그 돈을 돌려받는다는데 제가 받을 보상에는 어떤 영향이 있는지, 책임보험금은 어떻게 산정되는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제750조는 고의·과실로 인한 위법행위로 타인에게 손해를 가한 자의 배상책임을 정하고, 과실상계에 따라 피해자 과실비율만큼 배상액이 조정되는 영역입니다. 또한 자동차손해배상 보장법 시행령 제3조 제1항 제2호 단서는 피해자에게 발생한 손해액이 자동차보험진료수가 기준 진료비 해당액에 미달하는 경우에도 그 진료비 해당액을 책임보험금으로 지급하도록 정합니다. 판례는 국민건강보험공단이 교통사고 피해자에게 보험급여를 한 다음 국민건강보험법 제58조 제1항에 따라 가해자에 대한 기왕치료비 손해배상채권을 대위하는 경우 그 대위 범위는 공단부담금 전액이 아니라 가해자의 책임비율에 해당하는 금액으로 제한되고 피해자의 과실비율에 해당하는 금액은 공단이 최종적으로 부담하며, 위 단서 규정에 따라 증액된 부분에 대해서는 전액 대위할 수 있다고 본 사례 흐름이 있는 영역입니다. 무단횡단 + 과실비율 + 책임보험금 결합은 \'과실비율·책임보험금\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사고·과실 ② 과실비율 ③ 손해 산정 ④ 책임보험금 ⑤ 합의 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 과실 ② 비율 ③ 손해 ④ 보험금 ⑤ 합의 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 무단횡단 보행자 사고 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·과실·과실비율·손해 산정·책임보험금·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·과실</strong> — 사고 경위·횡단 위치·차량 진행 등 과실 정리.</li>\n<li><strong>② 과실비율</strong> — 보행자·차량의 과실비율 산정.</li>\n<li><strong>③ 손해 산정</strong> — 치료비·일실수입·위자료 등 손해 산정.</li>\n<li><strong>④ 책임보험금</strong> — 진료비 해당액 책임보험금·공단 대위 범위 검토.</li>\n<li><strong>⑤ 합의</strong> — 손해배상·합의·소멸시효 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 건강보험공단의 대위는 공단부담금 중 가해자 책임비율에 해당하는 금액으로 제한되고 피해자 과실비율에 해당하는 금액은 공단이 최종 부담하며, 자동차손배법 단서로 증액된 책임보험금 부분은 전액 대위가 가능한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·과실 증거 확보 (즉시)</strong> — 블랙박스·CCTV·현장 사진·진단서 확보.</li>\n<li><strong>2단계 — 과실비율 정리 (즉시~1주)</strong> — 횡단 위치·신호·차량 진행 등 과실비율 정리.</li>\n<li><strong>3단계 — 손해·책임보험금 정리 (1~2주)</strong> — 손해 산정, 진료비 해당액 책임보험금·공단 대위 정리.</li>\n<li><strong>4단계 — 손해배상·이의 (분쟁 시)</strong> — 보험사·가해자 손해배상 청구, 과실·보험금 다툼 검토.</li>\n<li><strong>5단계 — 합의·소멸시효 (병행)</strong> — 합의 조건 검토, 손해배상 소멸시효 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무단횡단 보행자 사고 과실·책임보험금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사고·과실·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>교통사고 사실확인원·신고 자료 (사고 발생)</strong></li>\n<li><strong>블랙박스·CCTV·주행 자료 (과실비율)</strong></li>\n<li><strong>현장 사진·횡단 위치·신호 자료 (과실 평가)</strong></li>\n<li><strong>상해진단서·치료 기록 (피해 입증)</strong></li>\n<li><strong>치료비·일실수입·소득 자료 (손해 산정)</strong></li>\n<li><strong>건강보험 급여·진료비 자료 (책임보험금·대위)</strong></li>\n<li><strong>손해·합의 관련 서류 (손해배상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무단횡단 사고는 횡단 위치·신호·차량의 진행 상황과 운전자의 전방주시 등에 따라 과실비율이 정리되는 영역이므로 블랙박스·CCTV·현장 자료를 먼저 확보하는 것이 핵심. 건강보험으로 치료비를 처리했더라도 공단의 대위는 가해자 책임비율 범위로 제한되고 과실비율 부분은 공단이 최종 부담하므로, 진료비 자료와 과실비율 자료를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>과실비율</strong> — 횡단 위치·신호·차량 진행에 따른 과실비율 산정.</li>\n<li><strong>운전자 과실</strong> — 전방주시·서행 등 운전자 주의의무 위반 정도.</li>\n<li><strong>손해 산정</strong> — 치료비·일실수입·위자료 등 손해 범위.</li>\n<li><strong>책임보험금·대위</strong> — 진료비 해당액 책임보험금·공단 대위 범위.</li>\n<li><strong>소멸시효</strong> — 손해배상청구권의 소멸시효 도과 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁 상담)</strong></li>\n<li><strong>손해보험협회 (보험·보상 안내)</strong></li>\n<li><strong>경찰 182 (교통 민원·사고 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 과실비율에 따른 책임보험금과 건강보험공단 대위 범위',
        summary:
          '대법원 2022다235009(대법원, 2025.05.15 선고) 영역에서 법원은 국민건강보험공단이 불법행위 피해자에게 보험급여를 한 다음 국민건강보험법 제58조 제1항에 따라 피해자의 가해자에 대한 기왕치료비 손해배상채권을 대위하는 경우 그 대위 범위는 공단이 부담한 보험급여비용(공단부담금) 전액이 아니라 그중 가해자의 책임비율에 해당하는 금액으로 제한되고, 나머지 금액(공단부담금 중 피해자의 과실비율에 해당하는 금액)은 보험급여 후에도 손해를 전보받지 못한 피해자를 위해 공단이 최종적으로 부담한다고 보았습니다. 나아가 자동차손해배상 보장법 시행령 제3조 제1항 제2호 단서는 피해자 과실비율 공제 후 손해액이 진료비 해당액에 미달하는 경우에도 그 진료비 해당액을 책임보험금으로 지급하라는 취지로 해석되므로, 공단이 책임보험자를 상대로 구상하는 경우 책임보험금 중 가해자가 부담할 손해배상액 부분은 책임비율에 해당하는 금액으로, 위 단서로 증액된 부분은 전액 대위할 수 있다고 판시했습니다. 무단횡단 보행자 사고 사안에서도 과실비율·책임보험금을 검토해볼 수 있습니다.',
        takeaway: '무단횡단 + 과실비율 + 책임보험금 결합 시 과실비율 산정·진료비 해당액 책임보험금·건강보험공단 대위 범위 검토 영역 — 변호사 상담·보험·법률구조공단 검토 권장.',
      },
    ],
    faq: [
      {
        question: '무단횡단이면 배상을 거의 못 받나요?',
        answer:
          '<strong>과실비율이 높아질 수 있으나 운전자 과실·사고 경위에 따라 달라지는 영역입니다.</strong> 블랙박스·현장 자료를 정리.',
      },
      {
        question: '제 과실은 어떻게 정해지나요?',
        answer:
          '<strong>횡단 위치·신호·차량 진행과 운전자 주의의무를 종합해 과실비율을 산정하는 영역입니다.</strong> 횡단 위치·신호·주행 자료를 정리.',
      },
      {
        question: '건강보험으로 치료받으면 공단이 가해자에게 받나요?',
        answer:
          '<strong>공단의 대위는 가해자 책임비율 범위로 제한되고 과실비율 부분은 공단이 최종 부담하는 영역입니다.</strong> 건강보험 급여·진료비 자료를 정리.',
      },
      {
        question: '치료비가 손해보다 크면 책임보험금은 어떻게 되나요?',
        answer:
          '<strong>과실 공제 손해액이 진료비 해당액에 미달해도 그 진료비 해당액을 책임보험금으로 지급하는 영역입니다.</strong> 진료비·손해 자료를 정리.',
      },
      {
        question: '손해배상은 언제까지 청구해야 하나요?',
        answer:
          '<strong>손해 및 가해자를 안 날부터 3년 등 소멸시효를 확인해야 하는 영역입니다.</strong> 사고·치료·인지 시점 자료를 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실비율 산정', href: '/guide/traffic-accident/traffic-accident-fault-ratio-track' },
      { label: '보행자 사고 과실 기준', href: '/guide/traffic-accident/traffic-accident-pedestrian-fault-track' },
      { label: '치료비·손해 산정', href: '/guide/traffic-accident/traffic-accident-damages-calculation' },
      { label: '이륜차 차로변경 사고 과실', href: '/guide/traffic-accident/traffic-accident-motorcycle-lanechange-track' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
    ],
  },
];
