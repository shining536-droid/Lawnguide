import { SpokePage } from '../spoke-pages';

// batch91 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-08)
//
// 고유 존재 이유:
// 1. divorce-gambling-addiction-ground-track — 배우자의 도박 중독으로 파탄된 혼인의 재판상 이혼 판단형 트랙. 제840조 제3호 심히 부당한 대우·제6호 중대한 사유와 파탄 시 이혼 청구 허용이 핵심.
// 2. divorce-religious-coercion-ground-track — 종교·신앙 강요로 파탄된 혼인의 재판상 이혼·위자료 판단형 트랙. 제840조 제6호 중대한 사유와 이혼 위자료청구권 확정 시점·소멸시효 기산점이 핵심.
// 3. divorce-business-entity-property-division-track — 부부 일방이 운영한 사업체의 재산분할 판단형 트랙. 분할대상 산정 기준 시기·파탄 이후 처분 재산 취급·기여 인정이 핵심.
// 4. divorce-future-retirement-pay-division-track — 아직 퇴직 전인 배우자의 장래 퇴직금 재산분할 절차형 트랙. 퇴직급여채권의 분할 대상 포함과 변론종결 시 기준 산정이 핵심.
// 5. defamation-shopping-mall-rating-attack-track — 쇼핑몰 허위 별점테러 명예훼손 피해자 판단형 트랙. 정보통신망법 제70조 제2항 거짓 사실과 비방 목적의 별개 구성요건·공익성 경계가 핵심.
// 6. defamation-residents-group-chat-track — 입주민 단톡방 비방 명예훼손 피해자 판단형 트랙. 정보통신망법상 사실 적시 정도·소문의 공연성 인정·비방 목적 판단 방법이 핵심.
// 7. defamation-clinic-blog-review-track — 병원 후기 블로그 명예훼손·모욕 피해자 판단형 트랙. 공연성의 증명 정도·전파가능성과 미필적 고의·소극적 사정 고려가 핵심.
// 8. defamation-anonymous-community-post-falsely-accused-defense — accused 관점. 익명 커뮤니티 게시가 형법 제310조 진실성·공익으로 위법성조각되는지 다투는 방어 트랙. 진실·공익·부수적 사익·모욕죄 경계가 핵심.
// 9. inheritance-contribution-share-claim-track — 상속 기여분 산정 판단형 트랙. 기여분은 상속재산분할의 전제 문제로서 유류분과 무관하고 협의·심판으로 결정되어야 주장 가능한 점이 핵심.
// 10. traffic-accident-motorcycle-lane-filtering-fault-track — 오토바이 차로 사이 주행 사고 피해자 과실 판단형 트랙. 과실비율·책임보험금 산정과 건강보험공단 대위 범위의 전체적 평가가 핵심.

export const spokesBatch91DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-gambling-addiction-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-gambling-addiction-ground-track',
    keyword: '도박 중독 이혼 사유',
    questionKeyword: '배우자가 도박에 빠져 생활비와 빚까지 끌어다 쓰고 끊겠다는 약속도 번번이 어겨 가정이 흔들려요. 이런 도박 중독도 재판으로 이혼을 받아낼 사유가 되는지, 혼인이 회복할 수 없을 만큼 파탄됐다고 인정되면 제가 낸 이혼 청구가 받아들여지는지 막막합니다.',
    ctaKeyword: '도박 중독 이혼·파탄 중대한 사유 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '도박 중독 이혼 사유 — 5단계 파탄·중대사유 점검 | 로앤가이드',
      description:
        '배우자의 도박 중독으로 이혼을 고민한다면, 민법 제840조 제3호 심히 부당한 대우와 제6호 혼인을 계속하기 어려운 중대한 사유·파탄 판단·이혼 청구까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 도박에 깊이 빠져 생활비는 물론 모아 둔 돈까지 모두 끌어다 쓰고, 어느새 카드빚과 사채까지 늘어나 가정 경제가 송두리째 흔들리는 상황입니다. 그때마다 \'이번이 마지막\'이라며 끊겠다고 약속했지만 번번이 어겼고, 거짓말과 돈 문제가 반복되면서 이제는 서로에 대한 신뢰가 남아 있지 않습니다. 눈에 보이는 폭력은 없어도 도박으로 가정을 무너뜨리는 이런 행동이 과연 재판으로 이혼을 받아낼 만한 사유가 되는지, 우리 부부 사이가 이미 회복할 수 없을 만큼 틀어졌다고 인정되면 제가 낸 이혼 청구가 받아들여지는지, 무엇부터 정리해야 하는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제840조 제3호는 배우자나 그 직계존속으로부터 심히 부당한 대우를 받았을 때를, 같은 조 제6호는 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'를 재판상 이혼 사유로 정하는 영역입니다. 판례는 제840조 제3호의 \'심히 부당한 대우\'란 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행이나 학대 또는 모욕을 받았을 경우를 말하고, 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하며, 혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등 여러 사정을 두루 고려해 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 그 원인에 대한 원고의 책임이 피고보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 본 사례 흐름이 있는 영역입니다. 도박 중독 + 채무 누적 + 파탄 결합은 \'학대·파탄·중대한 사유\' 정리가 필요한 트랙입니다. 당사자라면 ① 도박 정황 ② 채무·생활 파탄 ③ 중대한 사유 ④ 파탄 책임 ⑤ 이혼·분할 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 정황 ② 파탄 ③ 사유 ④ 책임 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 도박 중독 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 도박 정황·채무 파탄·중대한 사유·파탄 책임·이혼·분할 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도박 정황</strong> — 도박 이용·중독 정황과 약속 위반의 반복성 확보.</li>\n<li><strong>② 채무·생활 파탄</strong> — 도박으로 인한 채무 누적·생활비 잠식 정리.</li>\n<li><strong>③ 중대한 사유</strong> — 제840조 제3호·제6호 해당 여부 검토.</li>\n<li><strong>④ 파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임의 경중 정리.</li>\n<li><strong>⑤ 이혼·분할</strong> — 재판상 이혼·재산분할·위자료 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 도박과 채무 누적으로 부부 공동생활관계가 회복할 수 없을 정도로 파탄되면 중대한 사유로 인정될 수 있고, 파탄이 인정되면 원고 책임이 피고보다 더 무겁지 않은 한 이혼 청구를 받아들일 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 도박·채무 자료 확보 (즉시)</strong> — 도박 이용 내역·송금·채무·약속 위반 정황 자료 확보.</li>\n<li><strong>2단계 — 파탄·사유 정리 (1~2주)</strong> — 생활 파탄 경위, 중대한 사유 해당성 정리.</li>\n<li><strong>3단계 — 파탄 책임·분할 정리 (2~3주)</strong> — 파탄에 관한 쌍방 책임의 경중, 재산분할·위자료 정리.</li>\n<li><strong>4단계 — 이혼·재산분할 청구 (소 제기 시)</strong> — 재판상 이혼·재산분할·위자료 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 재산분할·위자료 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">도박 중독 이혼·파탄 중대한 사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 도박 정황·채무 파탄·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>도박 이용·송금·환전 내역 자료 (도박 정황)</strong></li>\n<li><strong>대출·카드·사채 등 채무 내역 자료 (채무 누적)</strong></li>\n<li><strong>생활비 잠식·자산 처분 정황 자료 (생활 파탄)</strong></li>\n<li><strong>부부 재산·소득·계좌 자료 (재산분할)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (중대한 사유·책임정도)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 도박 중독은 일회성 다툼이 아니라 도박과 채무·약속 위반이 반복되어 부부의 신뢰가 회복할 수 없을 정도로 훼손됐는지를 종합해 판단되는 영역이므로 도박 이용·채무 내역과 약속 위반 정황을 시간 순으로 정리하는 것이 핵심. 파탄에 관한 본인 책임이 상대보다 더 무겁지 않다는 점도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도박 정황</strong> — 도박 중독·채무 누적이 입증되는지.</li>\n<li><strong>중대한 사유</strong> — 도박으로 인한 파탄이 제840조 제6호에 해당하는지.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임의 경중.</li>\n<li><strong>재산분할</strong> — 도박 채무의 분할 반영 여부와 재산분할 범위.</li>\n<li><strong>위자료</strong> — 도박으로 인한 정신적 고통의 위자료 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·재산분할·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>한국도박문제예방치유원 1336 (도박 중독 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 심히 부당한 대우·중대한 사유와 파탄 시 이혼 청구',
        summary:
          '대법원 2020므14763(대법원, 2021.03.25 선고) 영역에서 법원은 민법 제840조 제3호에서 정한 이혼사유인 \'배우자로부터 심히 부당한 대우를 받았을 때\'란 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행이나 학대 또는 모욕을 받았을 경우를 말한다고 보았습니다. 또한 민법 제840조 제6호에서 정한 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 일방 배우자에게 참을 수 없는 고통이 되는 경우를 말하며, 이를 판단할 때에는 혼인계속의사의 유무, 파탄의 원인에 관한 당사자의 책임 유무, 혼인생활의 기간, 자녀의 유무, 당사자의 연령, 이혼 후의 생활보장 등 여러 사정을 두루 고려하여 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정된다면 그 파탄의 원인에 대한 원고의 책임이 피고의 책임보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 판시했습니다. 도박 중독으로 인한 파탄 사안에서도 심히 부당한 대우·중대한 사유·파탄 책임을 검토해볼 수 있습니다.',
        takeaway: '도박 중독 + 채무 누적 + 파탄 결합 시 심히 부당한 대우·중대한 사유 해당성·파탄 책임의 경중·재산분할·위자료 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '폭력이 없어도 도박 중독으로 이혼이 되나요?',
        answer:
          '<strong>도박과 채무 누적이 혼인의 본질을 형해화하면 중대한 사유로 검토되는 영역입니다.</strong> 도박 이용·채무 내역 자료를 정리.',
      },
      {
        question: '끊겠다는 약속을 반복해서 어긴 것도 따질 수 있나요?',
        answer:
          '<strong>약속 위반이 반복돼 신뢰가 훼손된 정황은 파탄 판단의 자료가 되는 영역입니다.</strong> 약속 위반·재발 경위 자료를 정리.',
      },
      {
        question: '혼인이 파탄됐다고 인정되면 이혼이 받아들여지나요?',
        answer:
          '<strong>파탄이 인정되면 원고 책임이 상대보다 더 무겁지 않은 한 이혼 청구가 받아들여질 수 있는 영역입니다.</strong> 파탄 경위·책임정도 자료를 정리.',
      },
      {
        question: '배우자가 도박으로 진 빚도 재산분할에서 따지나요?',
        answer:
          '<strong>채무의 용도·성격에 따라 분할에 반영되는지 검토하는 영역입니다.</strong> 도박 채무 내역·용도 자료를 정리.',
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
      { label: '배우자 지속 폭력 이혼 사유', href: '/guide/divorce/divorce-spouse-continuous-domestic-violence-grounds-track' },
      { label: '가정폭력 혼인파탄 이혼 판단', href: '/guide/divorce/divorce-domestic-violence-marriage-breakdown-track' },
      { label: '경제적 학대 이혼 사유', href: '/guide/divorce/divorce-economic-control-abuse-ground-track' },
      { label: '시댁 부당대우 이혼 사유', href: '/guide/divorce/divorce-inlaw-mistreatment-ground-track' },
    ],
  },

  // ─── 2. divorce-religious-coercion-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-religious-coercion-ground-track',
    keyword: '종교 강요 이혼 사유',
    questionKeyword: '배우자가 특정 종교 활동을 강요하며 가정 생활보다 신앙을 앞세우고 제 의사를 무시해 갈등이 깊어졌어요. 이런 종교 강요도 이혼 사유가 되는지, 이혼하면서 위자료까지 청구할 수 있는지, 위자료는 언제까지 청구해야 하는지 막막합니다.',
    ctaKeyword: '종교 강요 이혼·위자료 시효 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '종교 강요 이혼 사유 — 5단계 중대사유·위자료 점검 | 로앤가이드',
      description:
        '배우자의 종교 강요로 이혼을 고민한다면, 민법 제840조 제6호 혼인을 계속하기 어려운 중대한 사유와 이혼 위자료청구권 확정 시점·소멸시효 기산점까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 어느 순간부터 특정 종교 활동에 지나치게 몰두하면서 저에게도 같은 신앙과 모임 참여를 강요하고, 가정 생활이나 자녀 양육보다 종교를 앞세워 제 의사를 번번이 무시하는 상황입니다. 신앙은 각자의 자유라고 설득해도 받아들여지지 않았고, 종교 문제로 다툼이 반복되면서 이제는 서로에 대한 신뢰와 애정이 거의 남아 있지 않습니다. 이런 종교 강요와 그로 인한 갈등이 과연 재판으로 이혼을 받아낼 만한 사유가 되는지, 이혼하면서 그동안의 정신적 고통에 대한 위자료까지 함께 청구할 수 있는지, 위자료는 언제까지 청구해야 하는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제840조 제6호는 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'를 재판상 이혼 사유로 정하고, 민법 제843조·제806조는 재판상 이혼에 따른 손해배상(위자료)을, 민법 제766조 제1항은 손해배상청구권의 단기소멸시효를 정하는 영역입니다. 판례는 이혼을 원인으로 하는 위자료청구권은 부부 일방의 유책·불법한 행위에 의하여 혼인관계가 파탄상태에 이르러 이혼하게 된 경우 그로 인하여 배우자가 입게 된 정신적 고통을 위자하기 위한 손해배상청구권으로서, 이혼의 원인이 되는 개별적 유책행위의 발생으로부터 최종적 이혼에 이르기까지 일련의 경과가 전체로서 불법행위로 파악되어 최종적 이혼 시점에서 손해가 확정·평가되며, 이 경우 피해자인 상대방 배우자는 혼인이 해소된 때에 손해 및 가해자를 알았다고 봄이 상당하므로 그때부터 3년이 경과하여야 단기소멸시효가 완성된다고 본 사례 흐름이 있는 영역입니다. 종교 강요 + 신앙 우선 + 파탄·위자료 결합은 \'중대한 사유·위자료·소멸시효\' 정리가 필요한 트랙입니다. 당사자라면 ① 종교 강요 정황 ② 갈등·파탄 ③ 중대한 사유 ④ 위자료 ⑤ 소멸시효 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 정황 ② 파탄 ③ 사유 ④ 위자료 ⑤ 시효 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 종교 강요 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 종교 강요 정황·갈등 파탄·중대한 사유·위자료·소멸시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 종교 강요 정황</strong> — 신앙·종교 활동 강요와 의사 무시 정황 확보.</li>\n<li><strong>② 갈등·파탄</strong> — 종교 문제로 인한 갈등 반복과 신뢰 훼손 정리.</li>\n<li><strong>③ 중대한 사유</strong> — 제840조 제6호 혼인을 계속하기 어려운 중대한 사유 해당 여부.</li>\n<li><strong>④ 위자료</strong> — 정신적 고통에 대한 이혼 위자료 청구 검토.</li>\n<li><strong>⑤ 소멸시효</strong> — 위자료청구권의 확정 시점·소멸시효 기산점 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 이혼 위자료청구권은 최종적 이혼 시점에서 손해가 확정·평가되고 혼인이 해소된 때부터 단기소멸시효가 진행되므로, 종교 강요로 인한 파탄과 위자료를 함께 정리하는 것이 필요한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 종교 강요·갈등 자료 확보 (즉시)</strong> — 신앙 강요·의사 무시·갈등 정황 자료 확보.</li>\n<li><strong>2단계 — 파탄·사유 정리 (1~2주)</strong> — 신뢰 훼손·파탄 경위, 중대한 사유 해당성 정리.</li>\n<li><strong>3단계 — 위자료·소멸시효 정리 (2~3주)</strong> — 정신적 고통·위자료 범위, 확정 시점·소멸시효 정리.</li>\n<li><strong>4단계 — 이혼·위자료 청구 (소 제기 시)</strong> — 재판상 이혼·위자료·재산분할 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 위자료·재산분할 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">종교 강요 이혼·위자료 시효 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 종교 강요·갈등 파탄·위자료 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>종교 활동 강요·참여 요구 정황 자료 (종교 강요)</strong></li>\n<li><strong>의사 무시·가정 소홀 정황 자료 (갈등)</strong></li>\n<li><strong>갈등 반복·신뢰 훼손 경위 자료 (파탄)</strong></li>\n<li><strong>정신적 고통·치료 등 피해 자료 (위자료)</strong></li>\n<li><strong>혼인 파탄 시점·이혼 경위 자료 (소멸시효)</strong></li>\n<li><strong>부부 재산·자녀 양육 관련 자료 (분할·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 종교 강요는 일회성 권유가 아니라 신앙·종교 활동 강요와 의사 무시가 반복되어 부부의 신뢰가 회복할 수 없을 정도로 훼손됐는지를 종합해 판단되는 영역이므로 갈등 정황을 시간 순으로 정리하는 것이 핵심. 이혼 위자료청구권은 최종적 이혼 시점에서 확정되고 혼인 해소 시부터 단기소멸시효가 진행되므로 파탄·이혼 시점 자료도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>종교 강요</strong> — 신앙 강요·의사 무시가 갈등의 원인인지.</li>\n<li><strong>중대한 사유</strong> — 종교 갈등이 제840조 제6호에 해당하는지.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임의 경중.</li>\n<li><strong>위자료 범위</strong> — 정신적 고통에 대한 위자료의 범위.</li>\n<li><strong>소멸시효</strong> — 위자료청구권의 확정 시점과 소멸시효 기산점.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료·재산분할 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366 (가정 위기 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 위자료청구권의 확정 시점과 단기소멸시효 기산점',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 영역에서 법원은 이혼을 원인으로 하는 위자료청구권은 부부 일방의 유책·불법한 행위에 의하여 혼인관계가 파탄상태에 이르러 이혼하게 된 경우 그로 인하여 배우자가 입게 된 정신적 고통을 위자하기 위한 손해배상청구권으로서, 이혼의 원인이 되는 개별적 유책행위의 발생으로부터 최종적 이혼에 이르기까지 일련의 경과가 전체로서 불법행위로 파악되어 최종적 이혼 시점에서 손해가 확정·평가된다고 보았습니다. 또한 이 경우 피해자인 상대방 배우자는 혼인이 해소된 때에 그 손해 및 가해자를 알았다고 봄이 상당하므로 그때부터 3년이 경과하여야 민법 제766조 제1항에서 정한 단기소멸시효가 완성되며, 이혼을 원인으로 하는 위자료청구는 가사소송법 제2조 제1항 제1호 (다)목 2)에서 정한 다류 가사소송사건에 해당한다고 판시했습니다. 종교 강요로 인한 파탄·이혼 사안에서도 중대한 사유·위자료·소멸시효 기산점을 검토해볼 수 있습니다.',
        takeaway: '종교 강요 + 신앙 우선 + 파탄·위자료 결합 시 중대한 사유 해당성·이혼 위자료청구권의 확정 시점·혼인 해소 시 소멸시효 기산점 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자의 종교 강요만으로도 이혼이 되나요?',
        answer:
          '<strong>신앙 강요·의사 무시가 반복돼 신뢰가 훼손되면 중대한 사유로 검토되는 영역입니다.</strong> 종교 강요·갈등 정황 자료를 정리.',
      },
      {
        question: '신앙은 자유인데 강요라고 볼 수 있나요?',
        answer:
          '<strong>신앙 자체가 아니라 강요·의사 무시가 혼인생활을 파탄에 이르게 했는지를 보는 영역입니다.</strong> 강요·무시 정황 자료를 정리.',
      },
      {
        question: '이혼하면서 위자료도 함께 청구할 수 있나요?',
        answer:
          '<strong>유책·불법한 행위로 파탄에 이른 경우 정신적 고통에 대한 위자료를 청구할 수 있는 영역입니다.</strong> 피해·고통 입증 자료를 정리.',
      },
      {
        question: '위자료는 언제까지 청구해야 하나요?',
        answer:
          '<strong>이혼 위자료청구권은 혼인이 해소된 때부터 3년의 단기소멸시효가 진행되는 영역입니다.</strong> 혼인 해소·이혼 시점 자료를 정리.',
      },
      {
        question: '혼인이 파탄됐다면 누구의 책임이 더 큰가요?',
        answer:
          '<strong>파탄 원인에 관한 쌍방 책임의 경중을 여러 사정을 종합해 판단하는 영역입니다.</strong> 파탄 경위·책임정도 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '배우자 사이비 종교 몰입 이혼 사유', href: '/guide/divorce/divorce-spouse-cult-religion-devotion-grounds-track' },
      { label: '시댁 처가 부당대우 혼인파탄 위자료 판단', href: '/guide/divorce/divorce-in-law-mistreatment-marriage-breakdown-alimony-track' },
      { label: '이혼 위자료 청구 시효', href: '/guide/divorce/divorce-alimony-claim-prescription-period-track' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 3. divorce-business-entity-property-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-business-entity-property-division-track',
    keyword: '사업체 재산분할',
    questionKeyword: '혼인 기간 동안 배우자가 운영해 온 사업체가 있는데, 이혼하면서 이 사업체도 재산분할 대상이 되는지 막막해요. 제가 직접 일하지 않았어도 기여가 인정되는지, 파탄 이후 배우자가 사업 자산을 빼돌리거나 처분하면 분할에서 어떻게 다뤄지는지 궁금합니다.',
    ctaKeyword: '사업체 재산분할·기여·처분 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '사업체 재산분할 — 5단계 분할대상·기여 점검 | 로앤가이드',
      description:
        '배우자가 운영한 사업체의 재산분할이 고민이라면, 민법 제839조의2 분할 대상과 기여 인정·파탄 이후 처분 재산의 산정 기준 시기까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"혼인 기간 내내 배우자가 운영해 온 사업체가 있는데, 정작 이혼을 하려니 그 사업체가 재산분할의 대상이 되는지부터 막막한 상황입니다. 저는 사업장에서 직접 일하지는 않았지만 살림과 양육을 도맡으며 배우자가 사업에 집중할 수 있도록 뒷받침해 왔는데, 이런 비경제적 기여도 분할에 반영되는지 모르겠습니다. 게다가 이혼 이야기가 나온 뒤로 배우자가 사업체 자산을 슬그머니 처분하거나 명의를 옮기는 듯한 정황까지 보여, 파탄 이후에 빼돌린 재산은 분할에서 어떻게 다뤄지는지, 분할 대상과 그 가액은 언제를 기준으로 정해지는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2는 재산분할청구권을, 같은 조 제2항은 당사자 쌍방의 협력으로 이룩한 재산의 액수와 그 밖의 사정을 참작한 분할의 액수·방법을 정하는 영역입니다. 판례는 이혼에 의한 재산분할은 재산의 명의와 상관없이 재산의 형성 및 유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할하여 귀속시키고자 하는 제도로서, 부부 일방의 부모 등이 부부나 그 가족에 대하여 한 경제적·비경제적 지원이 재산의 형성 및 유지에 기여하였다면 이를 그 부부 일방의 기여로 보아 재산분할에 참작하는 것이 형평에 부합한다고 보면서, 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관하다는 등의 사정이 있는 경우 변동된 재산은 분할 대상에서 제외하되, 파탄 이후 부부 일방이 부부공동생활이나 공동재산의 형성·유지와 관련 없이 적극재산을 처분한 경우에는 그 재산을 사실심 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함할 수 있다고 본 사례 흐름이 있는 영역입니다. 사업체 + 비경제적 기여 + 처분 재산 결합은 \'분할대상·기여·처분\' 정리가 필요한 트랙입니다. 당사자라면 ① 사업체·재산 파악 ② 기여 ③ 분할대상 ④ 처분 재산 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 기여 ③ 대상 ④ 처분 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사업체 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사업체·재산 파악·기여·분할대상·처분 재산·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사업체·재산 파악</strong> — 사업체 자산·부채와 부부 적극·소극재산 파악.</li>\n<li><strong>② 기여</strong> — 가사·양육 등 비경제적 기여를 포함한 형성·유지 기여 정리.</li>\n<li><strong>③ 분할대상</strong> — 명의와 무관하게 실질 기여로 형성된 분할 대상 정리.</li>\n<li><strong>④ 처분 재산</strong> — 파탄 이후 처분·은닉 재산의 분할 대상 포함 검토.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 재산분할은 명의가 아니라 형성·유지 기여의 실질로 정해지고 비경제적 지원도 기여로 참작될 수 있으며, 파탄 이후 공동재산과 무관하게 처분한 적극재산은 변론종결일에 보유한 것으로 보아 분할 대상에 포함할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사업체·재산 자료 보존 (즉시)</strong> — 사업체 등기·재무·계좌·부동산·부채 자료 보존.</li>\n<li><strong>2단계 — 기여·형성 정리 (1~2주)</strong> — 가사·양육 등 비경제적 기여, 재산 형성 경위 정리.</li>\n<li><strong>3단계 — 분할대상·처분 정리 (2~3주)</strong> — 분할 대상 재산·가액 기준 시기, 파탄 이후 처분·은닉 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업체 재산분할·기여·처분 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사업체·기여·처분 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>사업자등록·재무제표·매출 자료 (사업체 가액)</strong></li>\n<li><strong>사업체 부채·대출·보증 내역 자료 (소극재산)</strong></li>\n<li><strong>가사·양육 등 비경제적 기여 자료 (기여 인정)</strong></li>\n<li><strong>부부 적극·소극재산 목록 (분할 대상)</strong></li>\n<li><strong>파탄 이후 자산 처분·명의 이전 정황 자료 (처분 재산)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사업체는 명의가 배우자 단독이더라도 형성·유지에 대한 기여가 실질적으로 인정되면 분할 대상이 될 수 있고 가사·양육 등 비경제적 기여도 참작되는 영역이므로 기여 자료를 구체적으로 정리하는 것이 핵심. 파탄 이후 공동재산과 무관하게 처분한 적극재산은 변론종결일에 보유한 것으로 보아 분할 대상에 포함될 수 있으므로 처분·명의 이전 정황도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할대상</strong> — 배우자 명의 사업체가 분할 대상에 포함되는지.</li>\n<li><strong>기여 인정</strong> — 가사·양육 등 비경제적 기여가 반영되는지.</li>\n<li><strong>산정 기준 시기</strong> — 분할 대상·가액의 기준 시점.</li>\n<li><strong>처분 재산</strong> — 파탄 이후 처분·은닉 재산의 분할 포함 여부.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할의 기여 인정과 파탄 이후 처분 재산의 취급',
        summary:
          '대법원 2024므13669(대법원, 2025.10.16 선고) 영역에서 법원은 이혼에 의한 재산분할은 재산의 명의와 상관없이 재산의 형성 및 유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할하여 귀속시키고자 하는 제도로서, 부부 일방의 부모 등이 부부나 그 가족에 대하여 한 경제적·비경제적 지원이 재산의 형성 및 유지에 기여하였다면 이를 그 부부 일방의 기여로 보아 재산분할에 참작하는 것이 형평에 부합한다고 보았습니다. 또한 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관하다는 등의 사정이 있는 경우에는 그 변동된 재산을 재산분할 대상에서 제외하여야 하지만, 파탄 이후 부부 일방이 부부공동생활이나 부부공동재산의 형성·유지와 관련 없이 적극재산을 처분한 경우에는 그 재산을 사실심 변론종결일에 그대로 보유하고 있는 것으로 보아 분할 대상 재산에 포함할 수 있다고 판시했습니다. 사업체 재산분할 사안에서도 기여 인정·산정 기준 시기·처분 재산의 취급을 검토해볼 수 있습니다.',
        takeaway: '사업체 + 비경제적 기여 + 처분 재산 결합 시 명의와 무관한 기여 인정·분할 대상 산정 기준 시기·파탄 이후 처분 재산의 분할 포함 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자 명의 사업체도 재산분할 대상이 되나요?',
        answer:
          '<strong>명의와 무관하게 형성·유지 기여가 인정되면 분할 대상이 될 수 있는 영역입니다.</strong> 사업체 가액·기여 자료를 정리.',
      },
      {
        question: '제가 사업장에서 일하지 않았는데도 기여가 인정되나요?',
        answer:
          '<strong>가사·양육 등 비경제적 지원도 형성·유지 기여로 참작될 수 있는 영역입니다.</strong> 가사·양육 기여 자료를 정리.',
      },
      {
        question: '파탄 이후 배우자가 자산을 처분하면 어떻게 되나요?',
        answer:
          '<strong>공동재산과 무관하게 처분한 적극재산은 변론종결일에 보유한 것으로 보아 분할 대상에 포함될 수 있는 영역입니다.</strong> 처분·명의 이전 정황 자료를 정리.',
      },
      {
        question: '사업체 가액은 언제를 기준으로 정하나요?',
        answer:
          '<strong>분할 대상과 가액은 사실심 변론종결일을 기준으로 산정하는 것이 원칙인 영역입니다.</strong> 재무·자산 자료를 정리.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>재산분할청구는 이혼한 날부터 2년 내에 해야 하는 영역입니다.</strong> 이혼 시점·재산 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '이혼 시 재산분할 대상은 무엇인가요?', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '숨긴 채무 재산분할', href: '/guide/divorce/divorce-hidden-debt-property-division-track' },
      { label: '배우자 도박 빚 재산분할', href: '/guide/divorce/divorce-gambling-debt-division-track' },
      { label: '사실혼 해소 재산분할 판단', href: '/guide/divorce/divorce-de-facto-marriage-dissolution-property-track' },
    ],
  },

  // ─── 4. divorce-future-retirement-pay-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-future-retirement-pay-division-track',
    keyword: '장래 퇴직금 재산분할',
    questionKeyword: '이혼하려는데 배우자가 아직 회사를 다니고 있어 퇴직금을 받지 않은 상태예요. 아직 받지도 않은 장래 퇴직금도 재산분할 대상이 되는지, 된다면 금액은 어느 시점을 기준으로 계산하는지, 제 기여는 어떻게 반영되는지 막막합니다.',
    ctaKeyword: '장래 퇴직금 재산분할·산정 기준 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '장래 퇴직금 재산분할 — 5단계 분할대상·산정 점검 | 로앤가이드',
      description:
        '아직 받지 않은 배우자의 퇴직금을 나누려 한다면, 민법 제839조의2 분할 대상 포함과 사실심 변론종결 시 기준 산정·기여 반영까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 결혼생활 동안 배우자가 한 직장에서 계속 일할 수 있도록 살림과 양육을 도맡으며 뒷바라지했는데, 정작 이혼을 하려니 그동안의 제 몫이 제대로 정리될지 막막한 상황입니다. 특히 배우자가 아직 퇴직하지 않은 채 회사를 다니고 있어 퇴직금을 한 푼도 받지 않은 상태인데, 아직 받지도 않은 장래의 퇴직금이 재산분할의 대상이 되는지, 된다면 어느 시점을 기준으로 금액을 계산하는지, 미래의 불확실한 돈이라는 이유로 분할에서 빠지는 것은 아닌지 불안합니다. 제가 오랜 기간 기여한 부분이 퇴직금에 어떻게 반영되는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2는 재산분할청구권을, 같은 조 제2항은 당사자 쌍방의 협력으로 이룩한 재산의 액수 등을 참작한 분할의 액수와 방법을 정하는 영역입니다. 판례는 근로자퇴직급여보장법 등이 정한 퇴직급여가 사회보장적 급여로서의 성격 외에 임금의 후불적 성격과 성실한 근무에 대한 공로보상적 성격을 지니고, 이를 수령하기 위하여 일정기간 근무할 것이 요구되는데 그와 같이 근무함에 있어 상대방 배우자의 협력이 기여한 것으로 인정된다면 그 퇴직급여 역시 부부 쌍방의 협력으로 이룩한 재산으로서 재산분할의 대상이 될 수 있다고 보면서, 비록 이혼 당시 부부 일방이 아직 재직 중이어서 실제 퇴직급여를 수령하지 않았더라도 이혼소송의 사실심 변론종결 시에 이미 잠재적으로 존재하여 경제적 가치의 현실적 평가가 가능한 재산인 퇴직급여채권은 재산분할의 대상에 포함시킬 수 있고, 구체적으로는 사실심 변론종결 시를 기준으로 그 시점에서 퇴직할 경우 수령할 수 있을 것으로 예상되는 퇴직급여 상당액의 채권이 그 대상이 된다고 본 사례 흐름이 있는 영역입니다. 장래 퇴직금 + 재직 중 + 변론종결 기준 결합은 \'분할대상·산정 기준·기여\' 정리가 필요한 트랙입니다. 당사자라면 ① 퇴직금·재산 파악 ② 분할대상 ③ 산정 기준 ④ 기여 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 대상 ③ 산정 ④ 기여 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 장래 퇴직금 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 퇴직금·재산 파악·분할대상·산정 기준·기여·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 퇴직금·재산 파악</strong> — 배우자 재직·예상 퇴직급여와 부부 적극·소극재산 파악.</li>\n<li><strong>② 분할대상</strong> — 미수령 장래 퇴직급여채권의 분할 대상 포함 정리.</li>\n<li><strong>③ 산정 기준</strong> — 사실심 변론종결 시 기준 퇴직급여 상당액 산정 정리.</li>\n<li><strong>④ 기여</strong> — 혼인기간 근무에 대한 협력·가사·양육 기여 정리.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 아직 받지 않은 장래 퇴직급여채권도 사실심 변론종결 시에 경제적 가치 평가가 가능하면 분할 대상이 될 수 있고, 그 시점에 퇴직할 경우 받을 것으로 예상되는 퇴직급여 상당액의 채권이 대상이 되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴직금·재산 자료 보존 (즉시)</strong> — 배우자 재직증명·급여·예상 퇴직급여, 부동산·계좌 자료 보존.</li>\n<li><strong>2단계 — 분할대상·기여 정리 (1~2주)</strong> — 혼인기간 근무 대응 부분, 가사·양육 등 기여 정리.</li>\n<li><strong>3단계 — 산정 기준·금액 정리 (2~3주)</strong> — 사실심 변론종결 시 기준 퇴직급여 상당액, 분할비율 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">장래 퇴직금 재산분할·산정 기준 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 퇴직금·분할대상·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>배우자 재직증명서·근로계약 자료 (재직 확인)</strong></li>\n<li><strong>급여·퇴직급여 규정·예상 퇴직금 자료 (퇴직급여 상당액)</strong></li>\n<li><strong>재직기간·혼인기간 대조 자료 (분할 대상 기간)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>가사·양육·소득 등 기여 자료 (분할 비율)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 아직 받지 않은 장래 퇴직금도 사실심 변론종결 시에 경제적 가치의 현실적 평가가 가능하면 분할 대상이 될 수 있는 영역이므로 재직기간과 혼인기간을 대조한 자료, 그 시점에 퇴직할 경우 받을 것으로 예상되는 퇴직급여 상당액 자료를 정리하는 것이 핵심. 혼인기간 근무에 대한 협력과 가사·양육 기여를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할대상</strong> — 미수령 장래 퇴직급여채권의 분할 대상 포함 여부.</li>\n<li><strong>산정 기준</strong> — 사실심 변론종결 시 기준 퇴직급여 상당액 산정.</li>\n<li><strong>기여 평가</strong> — 혼인기간 근무에 대한 협력·기여 정도.</li>\n<li><strong>분할비율</strong> — 퇴직급여채권과 일반재산의 분할비율.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 미수령 장래 퇴직급여채권의 분할 대상 포함과 산정 기준',
        summary:
          '대법원 2013므2250(대법원, 2014.07.16 선고) 영역에서 법원은 근로자퇴직급여보장법, 공무원연금법 등이 정하는 퇴직급여가 사회보장적 급여로서의 성격 외에 임금의 후불적 성격과 성실한 근무에 대한 공로보상적 성격을 지니고, 이러한 퇴직급여를 수령하기 위하여 일정기간 근무할 것이 요구되는데 그와 같이 근무함에 있어 상대방 배우자의 협력이 기여한 것으로 인정된다면 그 퇴직급여 역시 부부 쌍방의 협력으로 이룩한 재산으로서 재산분할의 대상이 될 수 있다고 보았습니다. 또한 퇴직급여채권은 퇴직이라는 급여 사유가 발생함으로써 현실화되어 이혼 시점에서는 어느 정도의 불확실성이나 변동가능성을 지닐 수밖에 없으나, 그렇다고 하여 이를 재산분할 대상에서 제외하고 단지 장래의 수령가능성을 기타 사정으로만 참작하는 것은 재산분할제도의 취지와 실질적 공평에 반하므로, 비록 이혼 당시 부부 일방이 아직 재직 중이어서 실제 퇴직급여를 수령하지 않았더라도 이혼소송의 사실심 변론종결 시에 이미 잠재적으로 존재하여 경제적 가치의 현실적 평가가 가능한 퇴직급여채권은 재산분할의 대상에 포함시킬 수 있으며, 구체적으로는 사실심 변론종결 시를 기준으로 그 시점에서 퇴직할 경우 수령할 수 있을 것으로 예상되는 퇴직급여 상당액의 채권이 그 대상이 된다고 판시했습니다. 장래 퇴직금 재산분할 사안에서도 분할 대상 포함·산정 기준·기여를 검토해볼 수 있습니다.',
        takeaway: '장래 퇴직금 + 재직 중 + 변론종결 기준 결합 시 미수령 퇴직급여채권의 분할 대상 포함·사실심 변론종결 시 기준 산정·혼인기간 기여 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '아직 받지도 않은 장래 퇴직금도 나눌 수 있나요?',
        answer:
          '<strong>변론종결 시에 경제적 가치 평가가 가능하면 분할 대상에 포함될 수 있는 영역입니다.</strong> 재직·예상 퇴직급여 자료를 정리.',
      },
      {
        question: '퇴직금 금액은 어느 시점을 기준으로 계산하나요?',
        answer:
          '<strong>사실심 변론종결 시에 퇴직할 경우 받을 것으로 예상되는 퇴직급여 상당액을 기준으로 하는 영역입니다.</strong> 급여·퇴직급여 규정 자료를 정리.',
      },
      {
        question: '미래의 불확실한 돈이라 빠지는 것은 아닌가요?',
        answer:
          '<strong>불확실성이 있어도 잠재적으로 존재해 평가가 가능하면 분할에서 제외되지 않는 영역입니다.</strong> 예상 퇴직급여 산정 자료를 정리.',
      },
      {
        question: '제 기여는 퇴직금 분할에 어떻게 반영되나요?',
        answer:
          '<strong>혼인기간 근무에 대한 협력과 가사·양육 기여를 종합해 평가하는 영역입니다.</strong> 기여·재직기간 대조 자료를 정리.',
      },
      {
        question: '퇴직금 재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>재산분할청구는 이혼한 날부터 2년 내에 해야 하는 영역입니다.</strong> 이혼 시점·재산 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '사실혼 재산분할 위자료 인정 범위', href: '/guide/divorce/divorce-de-facto-marriage-property-division-scope' },
      { label: '공무원연금 분할', href: '/guide/divorce/divorce-public-pension-division-track' },
      { label: '이혼 퇴직연금 분할 방법', href: '/guide/divorce/divorce-pension-division-method' },
      { label: '황혼이혼 재산분할 연금', href: '/guide/divorce/divorce-gray-over50-property' },
    ],
  },

  // ─── 5. defamation-shopping-mall-rating-attack-track ───
  {
    domain: 'defamation',
    slug: 'defamation-shopping-mall-rating-attack-track',
    keyword: '쇼핑몰 별점테러 명예훼손',
    questionKeyword: '제 온라인 쇼핑몰에 사 본 적도 없는 사람들이 가짜 주문이나 사실과 다른 내용으로 별점테러를 퍼부어 평점과 매출이 무너졌어요. 거짓 후기를 올리면 곧바로 비방 목적이 인정되는지, 소비자 정보라며 공익을 주장하면 처벌이 안 되는지, 증명은 누가 하는지 막막합니다.',
    ctaKeyword: '쇼핑몰 별점테러 명예훼손 거짓사실·비방 목적 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '쇼핑몰 별점테러 명예훼손 — 5단계 거짓사실·비방목적 점검 | 로앤가이드',
      description:
        '쇼핑몰 별점테러로 명예훼손 피해를 입었다면, 정보통신망법 제70조 제2항 거짓 사실과 비방 목적의 별개 구성요건·검사 증명책임·공익성 경계까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 운영하는 온라인 쇼핑몰에 실제로 구매한 적도 없는 사람들이 가짜 주문을 넣거나 사실과 전혀 다른 내용으로 최하점 별점과 악의적인 후기를 한꺼번에 쏟아내, 평점이 바닥으로 떨어지고 노출과 매출까지 크게 무너진 상황입니다. 정작 글을 올린 사람들은 \'소비자로서 후기를 남긴 것뿐\'이라며 책임을 피하려 합니다. 거래 사실과 다른 거짓 내용을 올리면 곧바로 비방할 목적이 인정되는지, 소비자 정보 공유라며 공익을 내세우면 처벌이 안 되는지, \'비방할 목적\'과 \'거짓\'은 누가 증명해야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제2항은 사람을 비방할 목적으로 정보통신망을 통하여 공공연하게 거짓의 사실을 드러내어 다른 사람의 명예를 훼손한 자를 처벌하는 영역입니다. 판례는 이 죄가 성립하려면 피고인이 적시하는 사실이 거짓이고 그 사실이 거짓임을 인식하여야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 어떤 표현이 명예를 훼손하는 사실의 적시인지는 언어의 통상적 의미와 용법, 표현 전체의 흐름, 사회 평균인의 이해 등 객관적으로 판단하여야 하며, 정보통신망법 제70조 제2항에서 정한 \'사람을 비방할 목적\'은 공공의 이익을 위한 것과는 행위자의 주관적 의도의 방향에서 상반되므로 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적은 부정되고, 공공의 이익에 관한 것에는 널리 국가·사회 그 밖에 일반 다수인의 이익뿐만 아니라 특정한 사회집단이나 그 구성원 전체의 관심과 이익에 관한 것도 포함된다고 본 사례 흐름이 있는 영역입니다. 별점테러 + 거짓 사실 + 비방 목적 결합은 \'거짓 사실·비방 목적·공익성\' 다툼이 가능한 트랙입니다. 당사자라면 ① 후기 보존 ② 거짓 사실 ③ 비방 목적 ④ 공익성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 거짓 ③ 목적 ④ 공익 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 쇼핑몰 별점테러 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기 보존·거짓 사실·비방 목적·공익성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 후기 보존</strong> — 별점·후기 내용·작성자·일시·플랫폼·URL 보존.</li>\n<li><strong>② 거짓 사실</strong> — 거래·배송 기록과 대조해 거짓 여부·인식 정리.</li>\n<li><strong>③ 비방 목적</strong> — 거짓 여부와 별개로 비방할 목적이 있는지 검토.</li>\n<li><strong>④ 공익성</strong> — 소비자 정보 공유 등 공공의 이익 관련성 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제·블라인드 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 거짓 사실의 인식과 비방할 목적은 별개의 구성요건이고 모든 구성요건의 증명책임은 검사에게 있으며, 드러낸 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방할 목적이 부정되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 캡처·증거 보존 (즉시)</strong> — 별점·후기 내용·작성자 계정·일시·플랫폼·URL 보존.</li>\n<li><strong>2단계 — 거짓 사실·거래 대조 (1주)</strong> — 주문·결제·배송 기록과 대조해 거짓 여부 정리.</li>\n<li><strong>3단계 — 비방 목적·공익성 정리 (2주)</strong> — 비방할 목적, 공공의 이익 관련성, 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제·블라인드 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">쇼핑몰 별점테러 명예훼손 거짓사실·비방 목적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거짓 사실·비방 목적·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>별점·후기 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>주문·결제·배송 기록 자료 (거짓 입증)</strong></li>\n<li><strong>상품·서비스 상태 입증 자료 (사실 대조)</strong></li>\n<li><strong>작성 경위·동기 정황 자료 (비방 목적)</strong></li>\n<li><strong>평점 하락·매출·노출 피해 자료 (피해 입증)</strong></li>\n<li><strong>삭제·블라인드 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 별점테러는 거짓 여부와 비방할 목적이 별개의 구성요건이고 그 증명책임은 검사에게 있는 영역이므로 주문·결제·배송 기록과 후기 내용을 대조한 자료, 상품·서비스 상태 입증 자료를 함께 정리하는 것이 핵심. 다만 적시 내용이 소비자 일반의 정보 공유 등 공공의 이익에 관한 것이면 비방 목적이 부정될 수 있으므로 거짓 여부와 게시 맥락을 함께 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거짓 사실</strong> — 드러낸 내용이 거짓이고 작성자가 이를 인식했는지.</li>\n<li><strong>비방 목적</strong> — 거짓 여부와 별개로 비방할 목적이 있는지.</li>\n<li><strong>증명책임</strong> — 모든 구성요건의 증명책임이 검사에게 있는지.</li>\n<li><strong>공익성</strong> — 소비자 정보 공유 등 공공의 이익 관련성.</li>\n<li><strong>피해 입증</strong> — 평점 하락·매출 등 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 제70조 제2항 거짓 사실과 비방 목적·공익성',
        summary:
          '대법원 2020도15738(대법원, 2022.04.28 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제2항의 \'허위사실 적시에 의한 명예훼손죄\'가 성립하려면 피고인이 적시하는 사실이 거짓이고 그 사실이 거짓임을 인식하여야 하며, 적시된 사실이 거짓인지를 판단할 때에는 내용 전체의 취지를 살펴 객관적 사실과 합치되는지를 따져야 한다고 보았습니다. 또한 같은 항에서 정한 \'사람을 비방할 목적\'은 공공의 이익을 위한 것과는 행위자의 주관적 의도의 방향에서 서로 상반되므로 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적은 부정되고, \'공공의 이익\'에 관한 것에는 널리 국가·사회 그 밖에 일반 다수인의 이익에 관한 것뿐만 아니라 특정한 사회집단이나 그 구성원 전체의 관심과 이익에 관한 것도 포함되며, 사실적시의 내용이 사회 일반의 일부 이익에만 관련된 사항이거나 개인에 관한 사항이라도 공공의 이익과의 관련성이 인정될 수 있다고 판시했습니다. 쇼핑몰 별점테러 명예훼손 사안에서도 거짓 사실·비방 목적·공익성을 검토해볼 수 있습니다.',
        takeaway: '별점테러 + 거짓 사실 + 비방 목적 결합 시 거짓 사실의 인식·비방 목적과 공익의 상반 관계·공공의 이익 범위 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사 본 적도 없는 사람이 올린 거짓 후기도 명예훼손이 되나요?',
        answer:
          '<strong>거짓 사실을 드러내 평가를 떨어뜨리고 비방 목적이 인정되면 명예훼손이 검토되는 영역입니다.</strong> 주문·배송 기록과 후기 대조 자료를 정리.',
      },
      {
        question: '거짓 내용이면 비방 목적이 당연히 인정되나요?',
        answer:
          '<strong>거짓 여부와 비방 목적은 별개의 구성요건으로 당연히 인정되는 것은 아닌 영역입니다.</strong> 작성 경위·동기 자료를 정리.',
      },
      {
        question: '소비자 정보 공유라며 공익을 내세우면 처벌이 안 되나요?',
        answer:
          '<strong>공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부정될 수 있는 영역입니다.</strong> 거짓 여부·게시 맥락 자료를 정리.',
      },
      {
        question: '거짓이라는 것은 누가 증명하나요?',
        answer:
          '<strong>거짓 여부를 포함한 모든 구성요건의 증명책임은 검사에게 있는 영역입니다.</strong> 거래·상태 입증 자료를 정리.',
      },
      {
        question: '가짜 별점을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제·블라인드 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 평점·매출 피해 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 종합 가이드', href: '/guide/defamation' },
      { label: '인터넷 댓글 명예훼손 정통망법 형법 비교', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '유튜브 댓글 허위사실 명예훼손 신고', href: '/guide/defamation/defamation-youtube-comment-false-fact-report-track' },
      { label: '소비자 고발글 진실 공익 위법성 조각 방어', href: '/guide/defamation/defamation-consumer-complaint-truth-public-interest-falsely-accused-defense' },
      { label: '유튜브 댓글 실명 비방 신원조회 손해배상', href: '/guide/defamation/defamation-youtube-realname-attack-civil-damages-victim' },
    ],
  },

  // ─── 6. defamation-residents-group-chat-track ───
  {
    domain: 'defamation',
    slug: 'defamation-residents-group-chat-track',
    keyword: '입주민 단톡방 명예훼손',
    questionKeyword: '아파트 입주민 단톡방에 누군가 저를 겨냥해 사실과 다른 내용이나 떠도는 소문을 올려 평판이 흔들려요. 이미 도는 소문을 옮긴 것뿐이라는데 그래도 명예훼손이 되는지, 단톡방 정도면 공연성이 인정되는지, 어느 정도여야 사실 적시로 보는지 막막합니다.',
    ctaKeyword: '입주민 단톡방 명예훼손 공연성·사실 적시 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '입주민 단톡방 명예훼손 — 5단계 공연성·사실적시 점검 | 로앤가이드',
      description:
        '입주민 단톡방 비방글로 명예훼손 피해를 입었다면, 정보통신망법상 사실 적시 정도와 소문의 공연성 인정·비방 목적 판단 방법까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트 입주민들이 함께 있는 단체 대화방에 누군가 저를 겨냥해 사실과 다른 내용이나 어디선가 떠도는 소문을 올려, 단지 안에서 제 평판이 빠르게 흔들리는 상황입니다. 정작 글을 올린 사람은 \'이미 다들 아는 소문을 옮긴 것뿐\'이라거나 \'정확한 이름을 쓴 것도 아니다\'라며 책임을 피하려 합니다. 이미 일부에서 떠돌던 소문을 다시 옮긴 글도 명예훼손이 되는지, 입주민 단톡방 정도의 공간이면 \'공연성\'이 인정되는지, 어느 정도 구체적이어야 \'사실의 적시\'로 보는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률은 비방할 목적으로 정보통신망을 통하여 공공연하게 사실 또는 거짓의 사실을 드러내어 다른 사람의 명예를 훼손한 자를 처벌하는 영역입니다. 판례는 정보통신망법상 명예훼손죄가 성립하기 위한 \'사실의 적시\'란 가치판단이나 평가를 내용으로 하는 의견 표현에 대치되는 개념으로서 시간과 공간적으로 구체적인 과거 또는 현재의 사실관계에 관한 보고 내지 진술을 의미하고 표현 내용이 증거에 의한 증명이 가능한 것을 말하며, 적시한 사실이 이미 사회의 일부에서 다루어진 소문이라고 하더라도 그 사실을 적시하여 사람의 사회적 평가를 떨어뜨릴 만한 행위를 한 때에는 공연성을 인정할 수 있고, 비방할 목적이 있는지는 적시한 사실의 내용과 성질, 상대방의 범위, 표현의 방법 등 표현 자체에 관한 여러 사정과 그 표현으로 훼손되는 명예의 침해 정도 등을 비교·형량하여 판단하여야 한다고 본 사례 흐름이 있는 영역입니다. 단톡방 게시 + 소문 인용 + 비방 목적 결합은 \'공연성·사실 적시·비방 목적\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시 보존 ② 사실 적시 ③ 공연성 ④ 비방 목적 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 목적 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 입주민 단톡방 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시 보존·사실 적시·공연성·비방 목적·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시 보존</strong> — 단톡방 글·작성자·일시·참여 인원·캡처 보존.</li>\n<li><strong>② 사실 적시</strong> — 구체적 사실 진술인지, 의견 표현인지 정리.</li>\n<li><strong>③ 공연성</strong> — 단톡방 참여 범위와 소문 인용의 공연성 검토.</li>\n<li><strong>④ 비방 목적</strong> — 내용·범위·표현 방법 등 비방 목적 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 사실의 적시는 증명 가능한 과거·현재의 구체적 사실 진술을 의미하고, 이미 일부에서 다루어진 소문이라도 사회적 평가를 떨어뜨릴 만하게 적시하면 공연성이 인정될 수 있으며, 비방 목적은 여러 사정을 비교·형량해 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단톡방 캡처·증거 보존 (즉시)</strong> — 글 내용·작성자·일시·참여 인원·캡처 확산 정황 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 구체적 사실 진술 여부, 참여 범위·소문 인용의 공연성 정리.</li>\n<li><strong>3단계 — 비방 목적·피해 정리 (2주)</strong> — 내용·범위·표현 방법, 비방 목적, 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 게시물 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">입주민 단톡방 명예훼손 공연성·사실 적시 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>단톡방 글 원본·캡처·일시 (적시 내용)</strong></li>\n<li><strong>작성자 계정·닉네임 자료 (작성자 특정)</strong></li>\n<li><strong>단톡방 참여 인원·열람 범위 자료 (공연성)</strong></li>\n<li><strong>게시 내용과 실제 사실 대조 자료 (사실 적시)</strong></li>\n<li><strong>소문 인용·확산 경위 자료 (전파 정황)</strong></li>\n<li><strong>평판·관계 피해 자료 (피해 입증)</strong></li>\n<li><strong>삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입주민 단톡방 게시는 증명 가능한 구체적 사실 진술인지, 이미 일부에서 다루어진 소문이라도 사회적 평가를 떨어뜨릴 만하게 적시했는지에 따라 공연성이 정리되는 영역이므로 글 내용과 참여 인원·열람 범위 자료를 함께 보존하는 것이 핵심. 비방 목적은 내용·범위·표현 방법을 비교·형량해 판단되므로 작성 경위·소문 인용 정황도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 적시</strong> — 구체적 사실 진술인지 의견 표현인지.</li>\n<li><strong>소문 인용</strong> — 이미 도는 소문을 옮긴 것도 적시인지.</li>\n<li><strong>공연성</strong> — 단톡방 참여 범위가 공연성에 해당하는지.</li>\n<li><strong>비방 목적</strong> — 내용·범위·표현 방법에 비춘 비방 목적.</li>\n<li><strong>피해 입증</strong> — 평판·관계 등 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소문의 공연성 인정과 비방 목적 판단 방법',
        summary:
          '대법원 2008도2422(대법원, 2008.07.10 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률상 명예훼손죄가 성립하기 위한 \'사실의 적시\'란 가치판단이나 평가를 내용으로 하는 의견 표현에 대치되는 개념으로서 시간과 공간적으로 구체적인 과거 또는 현재의 사실관계에 관한 보고 내지 진술을 의미하고 표현 내용이 증거에 의한 증명이 가능한 것을 말한다고 보았습니다. 또한 적시한 사실이 이미 사회의 일부에서 다루어진 소문이라고 하더라도 이를 적시하여 사람의 사회적 평가를 떨어뜨릴 만한 행위를 한 때에는 공연성을 인정할 수 있고, \'사람을 비방할 목적\'이 있는지는 당해 적시 사실의 내용과 성질, 당해 사실의 공표가 이루어진 상대방의 범위, 그 표현의 방법 등 그 표현 자체에 관한 여러 사정을 감안함과 동시에 그 표현에 의하여 훼손되는 명예의 침해 정도 등을 비교·형량하여 판단하여야 한다고 판시했습니다. 입주민 단톡방 명예훼손 사안에서도 사실 적시·소문의 공연성·비방 목적을 검토해볼 수 있습니다.',
        takeaway: '단톡방 게시 + 소문 인용 + 비방 목적 결합 시 증명 가능한 사실 적시·이미 도는 소문의 공연성 인정·비교형량을 통한 비방 목적 판단 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이미 도는 소문을 옮긴 것뿐인데도 명예훼손이 되나요?',
        answer:
          '<strong>이미 일부에서 다루어진 소문이라도 사회적 평가를 떨어뜨릴 만하게 적시하면 공연성이 인정될 수 있는 영역입니다.</strong> 글 원본·소문 인용 정황 자료를 정리.',
      },
      {
        question: '단톡방 정도면 공연성이 인정되나요?',
        answer:
          '<strong>참여 인원·열람 범위 등에 따라 불특정 또는 다수 인식 상태인지로 공연성이 정리되는 영역입니다.</strong> 참여 인원·열람 범위 자료를 정리.',
      },
      {
        question: '어느 정도 구체적이어야 사실 적시로 보나요?',
        answer:
          '<strong>증거로 증명 가능한 구체적 사실관계 진술인지에 따라 사실 적시 여부가 갈리는 영역입니다.</strong> 게시 내용·사실 대조 자료를 정리.',
      },
      {
        question: '이름을 정확히 쓰지 않았는데도 명예훼손이 되나요?',
        answer:
          '<strong>표현과 정황으로 피해자가 누구인지 특정될 수 있으면 검토되는 영역입니다.</strong> 특정 가능 정황 자료를 정리.',
      },
      {
        question: '글을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 종합 가이드', href: '/guide/defamation' },
      { label: '온라인 카페 익명글 허위사실 명예훼손', href: '/guide/defamation/defamation-anonymous-cafe-false-fact-network-act-track' },
      { label: '학부모 단톡방 교사 비판 명예훼손 공익성 방어', href: '/guide/defamation/defamation-school-parent-teacher-criticism-public-interest-defense' },
      { label: '고객 항의 게시글 명예훼손 무고', href: '/guide/defamation/defamation-customer-complaint-post-falsely-accused-defense' },
      { label: '명예훼손 손해배상 금액 기준과 판례', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 7. defamation-clinic-blog-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-clinic-blog-review-track',
    keyword: '병원 후기 블로그 명예훼손',
    questionKeyword: '제가 운영하는 병원에 대해 누군가 블로그에 사실과 다른 후기와 모욕적인 표현을 올려 환자들이 보고 발길을 돌려요. 소수만 보는 개인 블로그라며 공연성이 없다는데, 전파될 가능성이 있으면 공연성이 인정되는지, 실제로 퍼졌는지가 판단에 영향을 주는지 막막합니다.',
    ctaKeyword: '병원 후기 블로그 명예훼손 공연성·전파가능성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '병원 후기 블로그 명예훼손 — 5단계 공연성·전파가능성 점검 | 로앤가이드',
      description:
        '병원 후기 블로그로 명예훼손·모욕 피해를 입었다면, 공연성의 증명 정도와 전파가능성·미필적 고의, 실제 전파 여부의 소극적 고려까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 운영하는 병원에 대해 누군가 개인 블로그에 사실과 다른 후기와 함께 모욕적인 표현을 섞어 올렸고, 이를 본 환자들이 발길을 돌리면서 운영에 타격을 받는 상황입니다. 정작 글을 올린 사람은 \'방문자가 몇 안 되는 개인 블로그일 뿐\'이라거나 \'금방 묻힐 글\'이라며 대수롭지 않게 여깁니다. 소수만 보는 블로그 글도 명예훼손이나 모욕이 되는지, 검색이나 캡처로 더 퍼질 가능성이 있다는 이유로 \'공연성\'이 인정되는지, 실제로 얼마나 퍼졌는지가 판단에 영향을 주는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실 또는 허위사실을 적시해 명예를 훼손하는 행위를, 형법 제311조는 공연히 사람을 모욕하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 공연성이 명예훼손죄와 모욕죄의 구성요건으로서, 명예훼손이나 모욕에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정되는 유력한 사정이 될 수 있으므로 전파될 가능성에 관해서는 검사의 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성을 인정하는 경우에는 적어도 범죄구성요건의 주관적 요소로서 미필적 고의가 필요하여 전파가능성에 대한 인식이 있음은 물론 나아가 그 위험을 용인하는 내심의 의사가 있어야 하며, 공연성의 존부는 발언자와 상대방 또는 피해자 사이의 관계나 지위, 대화 경위와 상황, 사실적시의 내용, 적시의 방법과 장소 등 행위 당시의 객관적 사정을 심리한 다음 그로부터 상대방이 불특정 또는 다수인에게 전파할 가능성이 있는지를 검토하여 종합적으로 판단하여야 한다고 본 사례 흐름이 있는 영역입니다. 블로그 후기 + 모욕·적시 + 전파가능성 결합은 \'공연성·전파가능성·고의\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시 보존 ② 모욕·적시 ③ 공연성 ④ 전파가능성·고의 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 내용 ③ 공연성 ④ 전파 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 병원 후기 블로그 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시 보존·모욕·적시·공연성·전파가능성·고의·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시 보존</strong> — 블로그 글 내용·작성자·일시·URL·노출·검색 정황 보존.</li>\n<li><strong>② 모욕·적시</strong> — 모욕적 표현인지, 구체적 사실 적시인지 정리.</li>\n<li><strong>③ 공연성</strong> — 불특정·다수 인식 상태, 특정 소수 여부 검토.</li>\n<li><strong>④ 전파가능성·고의</strong> — 전파 가능성과 미필적 고의 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 특정 소수에게 한 표현은 공연성이 부정되는 유력한 사정이라 전파가능성에 검사의 엄격한 증명이 필요하고 미필적 고의가 요구되며, 공연성은 관계·경위·내용·방법 등 객관적 사정을 종합해 전파가능성을 검토하여 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 블로그 캡처·증거 보존 (즉시)</strong> — 글 내용·작성자·일시·URL·노출·검색·캡처 확산 정황 보존.</li>\n<li><strong>2단계 — 모욕·적시·공연성 정리 (1주)</strong> — 모욕적 표현·사실 적시 여부, 불특정·다수 인식 상태 정리.</li>\n<li><strong>3단계 — 전파가능성·고의 정리 (2주)</strong> — 전파 가능성·관계, 미필적 고의, 실제 전파 정황 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제·검색 제외 요청, 모욕·명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병원 후기 블로그 명예훼손 공연성·전파가능성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 모욕·적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>블로그 글 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·닉네임·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>방문수·검색 노출·열람 범위 자료 (공연성)</strong></li>\n<li><strong>작성자·피해자·독자 관계 자료 (전파가능성)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료 (진료·기록 대조)</strong></li>\n<li><strong>캡처 확산·재게시 정황 자료 (실제 전파)</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 병원 후기 블로그는 방문자가 적더라도 검색·캡처 등으로 불특정·다수에게 전파될 가능성이 객관적으로 인정되면 공연성이 인정될 수 있는 영역이므로 방문수·검색 노출·열람 범위와 캡처 확산 정황을 함께 정리하는 것이 핵심. 다만 특정 소수에게만 노출된 경우의 전파가능성은 검사의 엄격한 증명이 필요하고 실제 전파 여부가 소극적 사정으로 고려될 수 있으므로 확산 경위 자료를 구체적으로 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정·다수 인식 상태인지, 특정 소수 노출인지.</li>\n<li><strong>전파가능성</strong> — 방문자가 적어도 전파될 가능성이 있는지.</li>\n<li><strong>미필적 고의</strong> — 전파가능성에 대한 인식·용인이 있었는지.</li>\n<li><strong>실제 전파</strong> — 실제 전파 여부가 소극적 사정으로 고려되는지.</li>\n<li><strong>모욕·적시 구분</strong> — 모욕적 표현인지 사실 적시인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공연성의 증명 정도와 전파가능성·미필적 고의',
        summary:
          '대법원 2020도8336(대법원, 2022.07.28 선고) 영역에서 법원은 공연성은 명예훼손죄와 모욕죄의 구성요건으로서 명예훼손이나 모욕에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정되는 유력한 사정이 될 수 있으므로 전파될 가능성에 관해서는 검사의 엄격한 증명이 필요하다고 보았습니다. 또한 전파가능성을 이유로 공연성을 인정하는 경우에는 적어도 범죄구성요건의 주관적 요소로서 미필적 고의가 필요하므로 전파가능성에 대한 인식이 있음은 물론 나아가 그 위험을 용인하는 내심의 의사가 있어야 하고, 공연성의 존부는 발언자와 상대방 또는 피해자 사이의 관계나 지위, 대화를 하게 된 경위와 상황, 사실적시의 내용, 적시의 방법과 장소 등 행위 당시의 객관적 사정에 관하여 심리한 다음 그로부터 상대방이 불특정 또는 다수인에게 전파할 가능성이 있는지를 검토하여 종합적으로 판단하여야 한다고 판시했습니다. 병원 후기 블로그 명예훼손 사안에서도 공연성·전파가능성·고의를 검토해볼 수 있습니다.',
        takeaway: '블로그 후기 + 모욕·적시 + 전파가능성 결합 시 특정 소수의 엄격 증명·전파가능성에 따른 공연성·미필적 고의·객관적 사정의 종합 판단 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '방문자가 적은 블로그 글도 명예훼손이나 모욕이 되나요?',
        answer:
          '<strong>전파될 가능성이 객관적으로 인정되면 공연성이 인정될 수 있는 영역입니다.</strong> 방문수·검색 노출·열람 범위 자료를 정리.',
      },
      {
        question: '소수만 봤다면 공연성이 부정되나요?',
        answer:
          '<strong>특정 소수 노출은 공연성 부정의 유력한 사정이라 전파가능성에 검사의 엄격한 증명이 필요한 영역입니다.</strong> 확산 경위 자료를 정리.',
      },
      {
        question: '실제로 퍼졌는지가 판단에 영향을 주나요?',
        answer:
          '<strong>실제 전파 여부는 전파가능성을 판단할 때 소극적 사정으로 고려될 수 있는 영역입니다.</strong> 캡처 확산·재게시 정황 자료를 정리.',
      },
      {
        question: '사실과 다른 후기와 모욕적 표현은 어떻게 구분되나요?',
        answer:
          '<strong>구체적 사실 적시인지 경멸적 표현인지에 따라 명예훼손·모욕이 구분되는 영역입니다.</strong> 글 내용·맥락 자료를 정리.',
      },
      {
        question: '글을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제·검색 제외 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 종합 가이드', href: '/guide/defamation' },
      { label: '익명 제보 명예훼손 무고', href: '/guide/defamation/defamation-anonymous-tip-falsely-accused-defense' },
      { label: '유튜브 영상 댓글 반복 모욕 명예훼손 신고', href: '/guide/defamation/defamation-youtube-video-comment-repeated-insult-report-track' },
      { label: '고객 공개항의 명예훼손 무고', href: '/guide/defamation/defamation-customer-public-complaint-falsely-accused-defense' },
      { label: '직장 내 허위 소문 명예훼손 입증', href: '/guide/defamation/defamation-false-rumor-workplace-claim' },
    ],
  },

  // ─── 8. defamation-anonymous-community-post-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-community-post-falsely-accused-defense',
    keyword: '익명 커뮤니티 글 명예훼손 무고',
    questionKeyword: '익명 커뮤니티에 공공의 문제를 알리려는 마음으로 진실한 내용을 적은 글을 올렸을 뿐인데, 글에 언급된 사람이 저를 명예훼손으로 고소했어요. 사실과 다르게 신고된 것 같은데, 진실한 사실을 공익 목적으로 알리면 위법성이 없어진다는 게 제게 적용되는지, 제 감정이 조금 섞이면 안 되는지 막막합니다.',
    ctaKeyword: '익명 커뮤니티 글 명예훼손 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '익명 커뮤니티 글 명예훼손 방어 — 5단계 진실·공익 점검 | 로앤가이드',
      description:
        '익명 커뮤니티 게시로 명예훼손 혐의를 받고 있다면, 형법 제310조 진실성·공익 목적과 부수적 사익 동기·개인 사항 공익성·모욕죄 경계까지 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"익명으로 운영되는 커뮤니티에 여러 사람에게 도움이 되라는 마음으로 제가 겪고 확인한 진실한 내용을 정리해 올렸을 뿐인데, 글에 언급된 사람이 저를 명예훼손으로 고소해 당황스러운 상황입니다. 사실과 다르게 신고되었다고 느껴지고, 공공의 관심사라고 생각해 알렸는데도 처벌될까 두렵습니다. 진실한 사실을 오로지 공공의 이익을 위해 적시하면 위법성이 없어진다는 법리가 정말 제게 적용되는지, 글을 쓸 때 제 불편한 감정이나 입장이 조금 섞였다는 이유로 안 되는 것은 아닌지, 개인에 관한 내용이라도 공익으로 인정될 수 있는지, 다소 거친 표현이 모욕이 되는 것은 아닌지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 명예를 훼손한 행위를, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하며, 형법 제311조는 공연히 사람을 모욕한 행위를 규율하는 영역입니다. 판례는 형법 제310조의 \'진실한 사실\'이란 내용 전체의 취지를 살펴볼 때 중요한 부분이 객관적 사실과 합치되는 사실이라는 의미로 세부에서 진실과 약간 차이가 나거나 다소 과장된 표현이 있더라도 무방하고, \'오로지 공공의 이익에 관한 때\'란 적시된 사실이 객관적으로 공공의 이익에 관한 것으로서 행위자도 주관적으로 공공의 이익을 위하여 적시한 것이어야 하며, 행위자의 주요한 동기나 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없고, 사실적시 내용이 개인에 관한 사항이라도 공익성이 인정될 수 있다고 보면서, 모욕죄의 \'모욕\'이란 사실을 적시하지 아니하고 사람의 사회적 평가를 떨어뜨릴 만한 추상적 판단이나 경멸적 감정을 표현하는 것을 의미하나 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도이거나 부정적·비판적 의견이면서 경미한 수준의 추상적 표현·욕설에 그치는 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않는다고 본 사례 흐름이 있는 영역입니다. 공익 게시 + 진실한 내용 + 명예훼손 고소 결합은 \'진실성·공익성·부수적 사익·모욕 경계\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 부수적 사익·모욕 경계 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 사익 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 익명 커뮤니티 글 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·부수적 사익·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 커뮤니티 게시 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 중요한 부분이 객관적 사실과 합치되는지 정리.</li>\n<li><strong>③ 공익 목적</strong> — 오로지 공공의 이익을 위한 것인지 정리.</li>\n<li><strong>④ 부수적 사익·모욕 경계</strong> — 부수적 사익 동기의 영향, 거친 표현의 모욕죄 해당 여부 검토.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각(제310조) 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 중요한 부분이 객관적 사실과 합치되고 주요한 동기·목적이 공공의 이익을 위한 것이라면 부수적으로 사익적 동기가 있더라도 형법 제310조로 위법성이 조각될 수 있고, 경미한 수준의 추상적 표현은 모욕죄에 해당하지 않을 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적시 내용·근거 자료 보존 (즉시)</strong> — 게시 내용·근거 자료·게시 경위·표현 전체 맥락 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 게시 내용과 근거 자료를 대조해 중요한 부분의 사실 합치 정리.</li>\n<li><strong>3단계 — 공익성·사익 정리 (2주)</strong> — 공익 목적, 부수적 사익 동기, 개인 사항의 공익 관련성 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제310조 적용 주장·모욕 경계·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">익명 커뮤니티 글 명예훼손 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·사익 갈래입니다.</strong></p>\n<ul>\n<li><strong>커뮤니티 게시 원본·일시·플랫폼 (적시 내용)</strong></li>\n<li><strong>게시 내용의 근거 자료 (사실 합치 입증)</strong></li>\n<li><strong>공익 목적·재발 방지 의도 정황 자료</strong></li>\n<li><strong>부수적 사익 동기 관련 경위 자료</strong></li>\n<li><strong>게시 상대방·열람 범위 자료 (공익 관련성)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 게시 내용의 중요한 부분이 객관적 사실과 합치되고 오로지 공공의 이익을 위한 것이었음을 보여주는 근거 자료를 정리하는 것이 핵심이며, 개인에 관한 내용이라도 공동생활과 관련돼 공익성이 인정될 수 있다는 점을 함께 정리하는 것이 좋습니다. 사실과 다르게 신고되었다고 느껴진다면 표현의 전체 맥락과 게시 경위를 정리해 진실·공익성을 소명하고 거친 표현이 경미한 수준에 그치는지도 함께 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 중요한 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>공익 목적</strong> — 오로지 공공의 이익을 위한 것인지.</li>\n<li><strong>부수적 사익</strong> — 부수적 사익 동기가 제310조 적용을 배제하는지.</li>\n<li><strong>개인 사항 공익성</strong> — 개인에 관한 내용도 공익으로 인정되는지.</li>\n<li><strong>모욕 경계</strong> — 거친 표현이 경미한 수준인지 모욕에 해당하는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형법 제310조 진실성·공익성과 부수적 사익·모욕의 경계',
        summary:
          '대법원 2024도14555(대법원, 2025.05.29 선고) 영역에서 법원은 형법 제310조의 \'진실한 사실\'이란 내용 전체의 취지를 살펴볼 때 중요한 부분이 객관적 사실과 합치되는 사실이라는 의미로 세부에서 진실과 약간 차이가 나거나 다소 과장된 표현이 있더라도 무방하고, \'오로지 공공의 이익에 관한 때\'란 적시된 사실이 객관적으로 공공의 이익에 관한 것으로서 행위자도 주관적으로 공공의 이익을 위하여 그 사실을 적시한 것이어야 한다고 보았습니다. 또한 행위자의 주요한 동기나 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없고 사실적시의 내용이 개인에 관한 사항이라도 공익성이 인정될 수 있으며, 모욕죄의 \'모욕\'이란 사실을 적시하지 아니하고 사람의 사회적 평가를 떨어뜨릴 만한 추상적 판단이나 경멸적 감정을 표현하는 것이나, 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 부정적·비판적 의견을 나타내면서 경미한 수준의 추상적 표현이나 욕설이 사용된 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않고 모욕죄를 해석·적용할 때에는 개인의 인격권과 표현의 자유가 함께 고려되어야 한다고 판시했습니다. 익명 커뮤니티 글 명예훼손 방어 사안에서도 진실성·공익성·부수적 사익·모욕의 경계를 검토해볼 수 있습니다.',
        takeaway: '공익 게시 + 진실한 내용 + 명예훼손 고소 결합 시 중요 부분의 사실 합치·공익 목적·부수적 사익의 비배제·개인 사항의 공익성·모욕의 경계 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '공익을 위해 진실한 글을 올렸을 뿐인데 명예훼손이 되나요?',
        answer:
          '<strong>진실한 사실을 오로지 공익 목적으로 적시하면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '제 감정이나 입장이 조금 섞이면 위법성조각이 안 되나요?',
        answer:
          '<strong>주된 목적이 공익이면 부수적 사익 동기가 있어도 제310조 적용이 배제되지 않을 수 있는 영역입니다.</strong> 동기·경위 자료를 정리.',
      },
      {
        question: '개인에 관한 내용이라도 공익으로 인정될 수 있나요?',
        answer:
          '<strong>개인 사항이라도 공동생활과 관련돼 사회적 관심을 얻을 수 있으면 공익성이 인정될 수 있는 영역입니다.</strong> 공익 관련성 자료를 정리.',
      },
      {
        question: '글에 다소 거친 표현이 있으면 모욕죄가 되나요?',
        answer:
          '<strong>경미한 수준의 추상적 표현·욕설에 그치면 원칙적으로 모욕죄에 해당하지 않을 수 있는 영역입니다.</strong> 표현 전체 맥락 자료를 정리.',
      },
      {
        question: '사실과 다르게 신고된 것 같으면 어떻게 하나요?',
        answer:
          '<strong>사실과 다르게 신고되었다면 근거 자료와 게시 경위로 진실·공익성을 소명할 수 있는 영역입니다.</strong> 근거·경위 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 종합 가이드', href: '/guide/defamation' },
      { label: '명예훼손으로 허위 고소당했을 때 반대고소 방법', href: '/guide/defamation/defamation-reverse-false-accusation' },
      { label: '공익 목적 글인데 명예훼손 고소당했을 때', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '명예훼손 진실적시 항변', href: '/guide/defamation/defamation-accused-truth-defense-argument' },
      { label: '명예훼손 유포자 정상참작 합의', href: '/guide/defamation/defamation-spreader-accused-mitigation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-contribution-share-claim-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-contribution-share-claim-track',
    keyword: '상속 기여분 산정',
    questionKeyword: '제가 오랜 기간 부모님을 모시고 간병하며 재산을 지켜 왔는데, 다른 형제들과 똑같이 나누는 것이 억울해 기여분을 인정받고 싶어요. 기여분은 어떻게 산정하는지, 유류분 소송에서도 기여분을 주장할 수 있는지, 기여분이 결정되면 유류분에서 빠지는지 막막합니다.',
    ctaKeyword: '상속 기여분 산정·유류분 관계 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '상속 기여분 산정 — 5단계 기여분·유류분 점검 | 로앤가이드',
      description:
        '부모님 부양·간병 기여를 인정받고 싶다면, 민법 제1008조의2 기여분 산정과 상속재산분할 전제 문제로서 유류분과의 관계까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 오랜 기간 부모님과 함께 살며 간병을 도맡고 생활비와 병원비를 부담하면서 부모님 재산이 줄지 않도록 지켜 왔는데, 정작 상속이 시작되자 멀리서 거의 왕래도 없던 다른 형제들과 똑같은 비율로 나누게 되어 억울한 상황입니다. 제가 들인 시간과 비용, 돌봄이 \'기여분\'으로 인정받을 수 있는지, 인정된다면 그 기여분은 어떻게 산정하고 어떤 절차로 정해지는지부터 막막합니다. 또 다른 형제가 생전 증여를 많이 받아 제 유류분이 침해된 것 같아 유류분반환을 청구하려는데, 그 소송에서도 제 기여분을 함께 주장할 수 있는지, 기여분이 결정되면 유류분 계산에서 빠지는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제1008조의2는 공동상속인 중 피상속인을 특별히 부양하거나 그 재산의 유지·증가에 특별히 기여한 사람의 기여분을, 같은 조 제2항은 협의가 되지 않을 때 가정법원이 기여의 시기·방법·정도와 상속재산의 액수 등을 참작해 기여분을 정하도록 하며, 민법 제1112조 이하는 유류분을 정하는 영역입니다. 판례는 기여분은 상속재산분할의 전제 문제로서의 성격을 가지는 것으로서 상속인들의 상속분을 일정 부분 보장하기 위하여 피상속인의 재산처분의 자유를 제한하는 유류분과는 서로 관계가 없으므로, 공동상속인 중 상당한 기간 동거·간호 그 밖의 방법으로 피상속인을 특별히 부양하거나 그 재산의 유지·증가에 특별히 기여한 사람이 있더라도 공동상속인의 협의 또는 가정법원의 심판으로 기여분이 결정되지 않은 이상 유류분반환청구소송에서 기여분을 주장할 수 없고, 설령 협의 또는 심판으로 기여분이 결정되었더라도 유류분을 산정함에 있어 기여분을 공제할 수 없으며 기여분으로 유류분에 부족이 생겼다고 하여 기여분의 반환을 청구할 수도 없다고 본 사례 흐름이 있는 영역입니다. 부양·간병 기여 + 기여분 결정 + 유류분 결합은 \'기여분 산정·전제 절차·유류분 무관\' 정리가 필요한 트랙입니다. 당사자라면 ① 기여 입증 ② 기여분 협의·심판 ③ 산정 ④ 상속재산분할 ⑤ 유류분 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 입증 ② 협의·심판 ③ 산정 ④ 분할 ⑤ 유류분 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상속 기여분 산정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기여 입증·기여분 협의·심판·산정·상속재산분할·유류분 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기여 입증</strong> — 특별한 부양·간병·재산 유지·증가 기여 정황 확보.</li>\n<li><strong>② 기여분 협의·심판</strong> — 공동상속인 협의 또는 가정법원 기여분 심판 정리.</li>\n<li><strong>③ 산정</strong> — 기여의 시기·방법·정도와 상속재산 액수 참작 산정.</li>\n<li><strong>④ 상속재산분할</strong> — 기여분을 반영한 상속재산분할 정리.</li>\n<li><strong>⑤ 유류분</strong> — 기여분과 유류분의 무관 관계 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 기여분은 상속재산분할의 전제 문제로서 유류분과는 관계가 없어 협의 또는 심판으로 결정되지 않으면 유류분반환소송에서 주장할 수 없고, 결정되더라도 유류분 산정에서 공제하거나 그 반환을 청구할 수 없는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 기여 자료 확보 (즉시)</strong> — 동거·간병·생활비·병원비·재산 유지 기여 정황 자료 확보.</li>\n<li><strong>2단계 — 기여분 협의 (분할 협의 시)</strong> — 공동상속인 사이 기여분 협의 시도·정리.</li>\n<li><strong>3단계 — 기여분 심판 청구 (협의 불성립 시)</strong> — 상속재산분할 청구와 함께 가정법원에 기여분 결정 청구.</li>\n<li><strong>4단계 — 산정·분할 (심판 시)</strong> — 기여의 시기·방법·정도 참작 산정, 상속재산분할 반영.</li>\n<li><strong>5단계 — 유류분 정리 (별도)</strong> — 기여분과 무관한 유류분반환 쟁점 별도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 기여분·유류분 쟁점, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속 기여분 산정·유류분 관계 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 기여 입증·기여분 심판·유류분 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·제적등본 (상속개시)</strong></li>\n<li><strong>가족관계증명서·상속인 확인 자료 (상속인 범위)</strong></li>\n<li><strong>동거·간병·요양 입증 자료 (특별 부양)</strong></li>\n<li><strong>생활비·병원비·재산 유지 비용 자료 (재산 기여)</strong></li>\n<li><strong>상속재산목록·재산 평가 자료 (기여분 산정)</strong></li>\n<li><strong>생전 증여·특별수익 자료 (유류분 산정)</strong></li>\n<li><strong>기여분 협의·심판 청구 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기여분은 단순한 부양을 넘어 \'특별한\' 부양이나 재산의 유지·증가에 대한 \'특별한\' 기여가 인정되어야 하고 공동상속인 협의 또는 가정법원 심판으로 결정되어야 비로소 효력이 있는 영역이므로 동거·간병·비용 부담 자료를 시기·방법·정도가 드러나도록 정리하는 것이 핵심. 기여분은 유류분과 무관해 유류분반환소송에서는 주장할 수 없으므로 상속재산분할·기여분 심판 절차와 유류분 쟁점을 구분해 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특별 기여</strong> — 통상의 부양을 넘는 특별한 부양·기여인지.</li>\n<li><strong>전제 절차</strong> — 협의 또는 심판으로 기여분이 결정되어야 하는지.</li>\n<li><strong>산정</strong> — 기여의 시기·방법·정도와 상속재산 액수 참작.</li>\n<li><strong>유류분 무관</strong> — 유류분반환소송에서 기여분을 주장할 수 있는지.</li>\n<li><strong>공제 불가</strong> — 기여분이 유류분 산정에서 공제되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (상속재산분할·기여분 심판 청구)</strong></li>\n<li><strong>국세청 126 (상속세 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기여분과 유류분의 무관 관계',
        summary:
          '대법원 2013다60753(대법원, 2015.10.29 선고) 영역에서 법원은 민법 제1008조의2, 제1112조, 제1113조 제1항, 제1118조에 비추어 보면 기여분은 상속재산분할의 전제 문제로서의 성격을 가지는 것으로서, 상속인들의 상속분을 일정 부분 보장하기 위하여 피상속인의 재산처분의 자유를 제한하는 유류분과는 서로 관계가 없다고 보았습니다. 따라서 공동상속인 중에 상당한 기간 동거·간호 그 밖의 방법으로 피상속인을 특별히 부양하거나 피상속인의 재산의 유지 또는 증가에 특별히 기여한 사람이 있을지라도 공동상속인의 협의 또는 가정법원의 심판으로 기여분이 결정되지 않은 이상 유류분반환청구소송에서 기여분을 주장할 수 없음은 물론이거니와, 설령 공동상속인의 협의 또는 가정법원의 심판으로 기여분이 결정되었다고 하더라도 유류분을 산정함에 있어 기여분을 공제할 수 없고, 기여분으로 유류분에 부족이 생겼다고 하여 기여분에 대하여 반환을 청구할 수도 없다고 판시했습니다. 상속 기여분 산정 사안에서도 기여분 결정 절차·유류분과의 무관 관계를 검토해볼 수 있습니다.',
        takeaway: '부양·간병 기여 + 기여분 결정 + 유류분 결합 시 협의·심판을 통한 기여분 결정 절차·유류분반환소송에서의 주장 불가·유류분 산정상 공제 불가 검토 영역 — 변호사 상담·가정법원 심판 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '부모님을 모시고 간병한 것도 기여분으로 인정되나요?',
        answer:
          '<strong>통상의 부양을 넘는 특별한 부양·기여가 인정되면 기여분으로 검토되는 영역입니다.</strong> 동거·간병·비용 부담 자료를 정리.',
      },
      {
        question: '기여분은 어떻게 산정하나요?',
        answer:
          '<strong>기여의 시기·방법·정도와 상속재산의 액수 등을 참작해 협의 또는 심판으로 정하는 영역입니다.</strong> 기여 정황·재산 자료를 정리.',
      },
      {
        question: '협의가 안 되면 기여분은 어떻게 정하나요?',
        answer:
          '<strong>협의가 안 되면 상속재산분할 청구와 함께 가정법원에 기여분 결정을 청구하는 영역입니다.</strong> 기여분 심판 청구 자료를 정리.',
      },
      {
        question: '유류분 소송에서도 기여분을 주장할 수 있나요?',
        answer:
          '<strong>협의 또는 심판으로 결정되지 않은 기여분은 유류분반환소송에서 주장할 수 없는 영역입니다.</strong> 기여분 결정 여부를 먼저 정리.',
      },
      {
        question: '기여분이 결정되면 유류분에서 빠지나요?',
        answer:
          '<strong>기여분은 유류분과 무관해 유류분 산정에서 공제하거나 그 반환을 청구할 수 없는 영역입니다.</strong> 기여분·유류분 쟁점을 구분해 정리.',
      },
    ],
    cta: { text: '상속 기여분·유류분 쟁점, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속 종합 가이드', href: '/guide/inheritance' },
      { label: '부동산 공동상속 분할 분쟁', href: '/guide/inheritance/inheritance-real-estate-co-owners-dispute' },
      { label: '해외 거주 상속인 상속포기 기간 절차', href: '/guide/inheritance/inheritance-overseas-resident-heir-renunciation-period-track' },
      { label: '상속 후 뒤늦게 발견된 채무 특별한정승인 절차', href: '/guide/inheritance/inheritance-late-discovered-debt-special-qualified-acceptance-track' },
      { label: '상속 채무 초과 한정승인 절차', href: '/guide/inheritance/inheritance-debt-exceeds-estate-qualified-acceptance-track' },
    ],
  },

  // ─── 10. traffic-accident-motorcycle-lane-filtering-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-motorcycle-lane-filtering-fault-track',
    keyword: '오토바이 차로 사이 주행 과실',
    questionKeyword: '오토바이로 정체된 도로의 차로 사이를 지나가다 차선을 바꾸던 차에 부딪혀 크게 다쳤어요. 차로 사이 주행을 한 제게 과실이 크게 잡힐까 봐 걱정이고, 건강보험으로 먼저 치료받았는데 공단이 가해자에게 청구하면 제 배상이 줄어드는지, 과실은 어떻게 따지는지 막막합니다.',
    ctaKeyword: '오토바이 차로 사이 주행 과실·책임보험금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '오토바이 차로 사이 주행 과실 — 5단계 과실·책임보험금 점검 | 로앤가이드',
      description:
        '오토바이 차로 사이 주행 사고로 과실이 걱정이라면, 민법 제750조 손해배상과 과실비율·책임보험금 산정·건강보험공단 대위 범위의 전체적 평가까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"정체된 도로에서 오토바이를 타고 늘어선 차들 사이를 지나가던 중, 갑자기 차선을 바꾸던 차와 부딪혀 크게 다쳐 치료를 받고 있는 상황입니다. 분명 상대 차가 방향지시등도 없이 끼어든 잘못이 있는데도, \'차로 사이를 비집고 주행한 오토바이 잘못\'이라며 보행자도 아닌 제게 과실이 크게 잡히는 것은 아닌지 불안합니다. 그렇게 되면 제가 받을 배상이 크게 깎이는 것은 아닌지 걱정입니다. 또 당장 급해서 건강보험으로 먼저 치료를 받았는데, 나중에 건강보험공단이 가해자 측에 그 비용을 청구하면 제가 받을 배상이 줄어드는 것은 아닌지, 제 과실비율은 어떻게 따지는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제750조는 고의·과실로 인한 위법행위로 타인에게 손해를 가한 자의 배상책임을, 민법 제763조·제396조는 피해자 과실의 과실상계 참작을, 국민건강보험법 제58조 제1항은 보험급여 후 공단의 손해배상청구권 대위를 정하는 영역입니다. 판례는 공단이 불법행위의 피해자에게 보험급여를 한 다음 국민건강보험법 제58조 제1항에 따라 피해자의 가해자에 대한 손해배상채권을 대위하는 경우 그 대위의 범위는 공단이 부담한 보험급여비용 전액이 아니라 그중 가해자의 책임비율에 해당하는 금액으로 제한되고, 나머지 금액(공단부담금 중 피해자의 과실비율에 해당하는 금액)에 대해서는 피해자를 대위할 수 없으며 이는 보험급여 후에도 여전히 손해를 전보받지 못한 피해자를 위해 공단이 최종적으로 부담한다고 보면서, 자동차손해배상 보장법 시행령 제3조 제1항 제2호 단서에 따라 증액된 부분에 관하여는 별도의 기준으로 대위 범위를 정한 사례 흐름이 있는 영역입니다. 차로 사이 주행 + 진로변경 + 책임보험금 결합은 \'과실비율·책임보험금·공단 대위\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사고·진로변경 ② 과실비율 ③ 손해·치료 ④ 책임보험금·공단 대위 ⑤ 합의 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 사고 ② 비율 ③ 손해 ④ 대위 ⑤ 합의 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 오토바이 차로 사이 주행 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·진로변경·과실비율·손해·책임보험금·공단 대위·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·진로변경</strong> — 차로 사이 주행·상대 차 진로변경 등 사고 정황 정리.</li>\n<li><strong>② 과실비율</strong> — 진로변경 차량과 오토바이 차로 사이 주행의 과실비율 산정.</li>\n<li><strong>③ 손해·치료</strong> — 치료비·일실수입·후유장해 등 손해 정리.</li>\n<li><strong>④ 책임보험금·공단 대위</strong> — 책임보험금 산정과 건강보험공단 대위 범위 검토.</li>\n<li><strong>⑤ 합의</strong> — 손해배상·합의·소멸시효 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 건강보험공단의 대위 범위는 공단부담금 중 가해자의 책임비율에 해당하는 금액으로 제한되고 피해자 과실비율에 해당하는 부분은 공단이 최종 부담하므로, 과실비율과 책임보험금을 전체적으로 따져보는 것이 필요한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·과실 증거 확보 (즉시)</strong> — 블랙박스·CCTV·현장 사진·진단서 확보.</li>\n<li><strong>2단계 — 과실비율·진로변경 정리 (즉시~1주)</strong> — 차로 사이 주행, 상대 차 진로변경, 과실비율 정리.</li>\n<li><strong>3단계 — 손해·치료 정리 (1~2주)</strong> — 치료비·일실수입·후유장해 등 손해 정리.</li>\n<li><strong>4단계 — 책임보험금·공단 대위 정리 (분쟁 시)</strong> — 책임보험금 산정, 건강보험공단 대위 범위·과실비율 다툼 검토.</li>\n<li><strong>5단계 — 합의·소멸시효 (병행)</strong> — 합의 조건 검토, 손해배상 소멸시효 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">오토바이 차로 사이 주행 과실·책임보험금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사고·과실·책임보험금 갈래입니다.</strong></p>\n<ul>\n<li><strong>교통사고 사실확인원·신고 자료 (사고 발생)</strong></li>\n<li><strong>블랙박스·CCTV·현장 사진 (과실비율)</strong></li>\n<li><strong>차로·진로변경·차간 거리 자료 (과실 정황)</strong></li>\n<li><strong>상해진단서·치료·후유장해 자료 (손해 산정)</strong></li>\n<li><strong>건강보험 급여·진료비 내역 자료 (공단 대위)</strong></li>\n<li><strong>책임보험·종합보험 보상 자료 (책임보험금)</strong></li>\n<li><strong>손해·합의 관련 서류 (손해배상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 오토바이 차로 사이 주행 사고는 상대 차의 진로변경 잘못과 오토바이의 차로 사이 주행 과실을 종합해 비율이 정리되는 영역이므로 블랙박스·CCTV·현장 자료를 먼저 확보하는 것이 핵심. 건강보험으로 먼저 치료받은 경우 공단의 대위 범위는 가해자의 책임비율에 해당하는 금액으로 제한되고 피해자 과실비율 부분은 공단이 최종 부담하므로 급여·진료비 내역과 과실 자료를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>과실비율</strong> — 진로변경 차량과 차로 사이 주행 오토바이의 과실비율.</li>\n<li><strong>책임보험금</strong> — 책임보험금 산정과 진료비 기준 적용.</li>\n<li><strong>공단 대위</strong> — 건강보험공단 대위가 가해자 책임비율로 제한되는지.</li>\n<li><strong>과실비율 부담</strong> — 피해자 과실비율 부분을 공단이 최종 부담하는지.</li>\n<li><strong>손해·소멸시효</strong> — 손해 산정과 손해배상청구권의 소멸시효.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁 상담)</strong></li>\n<li><strong>손해보험협회 (보험·보상 안내)</strong></li>\n<li><strong>경찰 182 (교통 민원·사고 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 건강보험공단의 대위 범위와 과실비율의 전체적 평가',
        summary:
          '대법원 2022다235009(대법원, 2025.05.15 선고) 영역에서 법원은 국민건강보험공단이 불법행위의 피해자에게 보험급여를 한 다음 국민건강보험법 제58조 제1항에 따라 피해자의 가해자에 대한 기왕치료비 손해배상채권을 대위하는 경우 그 대위의 범위는 가해자의 손해배상액을 한도로 공단이 부담한 보험급여비용 전액이 아니라 그중 가해자의 책임비율에 해당하는 금액으로 제한되고, 나머지 금액(공단부담금 중 피해자의 과실비율에 해당하는 금액)에 대해서는 피해자를 대위할 수 없으며 이는 보험급여 후에도 여전히 손해를 전보받지 못한 피해자를 위해 공단이 최종적으로 부담한다고 보았습니다. 또한 자동차손해배상 보장법 시행령 제3조 제1항 제2호 단서는 피해자에게 발생한 손해액이 자동차보험진료수가 기준에 따라 산출한 진료비 해당액에 미달하는 경우 그 진료비 해당액을 책임보험금으로 지급하도록 한 규정으로서, 그 취지는 피해자의 과실비율에 해당하는 금액을 공제한 손해액이 진료비 해당액에 미달하는 경우에도 피해자의 치료 보장을 위해 그 진료비 해당액을 책임보험금으로 지급하라는 것이라고 판시했습니다. 오토바이 차로 사이 주행 사고 사안에서도 과실비율·책임보험금·공단 대위 범위를 검토해볼 수 있습니다.',
        takeaway: '차로 사이 주행 + 진로변경 + 책임보험금 결합 시 과실비율 산정·책임보험금 진료비 기준·건강보험공단 대위 범위의 책임비율 제한 검토 영역 — 변호사 상담·보험·법률구조공단 검토 권장.',
      },
    ],
    faq: [
      {
        question: '차로 사이를 주행한 오토바이도 과실이 잡히나요?',
        answer:
          '<strong>상대 차의 진로변경 잘못과 오토바이의 차로 사이 주행을 종합해 과실비율을 산정하는 영역입니다.</strong> 블랙박스·현장 자료를 정리.',
      },
      {
        question: '진로변경 차와 부딪히면 누구 책임이 큰가요?',
        answer:
          '<strong>진로변경 차량의 안전 확인 의무 위반과 구체적 사고 정황을 종합해 비율이 정해지는 영역입니다.</strong> 차로·진로변경 정황 자료를 정리.',
      },
      {
        question: '건강보험으로 먼저 치료받으면 제 배상이 줄어드나요?',
        answer:
          '<strong>공단 대위는 가해자의 책임비율에 해당하는 금액으로 제한되고 피해자 과실비율 부분은 공단이 최종 부담하는 영역입니다.</strong> 급여·진료비 내역 자료를 정리.',
      },
      {
        question: '책임보험금은 어떻게 산정되나요?',
        answer:
          '<strong>과실비율을 공제한 손해액이 진료비 해당액에 미달해도 치료 보장을 위해 진료비 해당액을 책임보험금으로 지급하는 영역입니다.</strong> 진료비·보상 자료를 정리.',
      },
      {
        question: '손해배상은 언제까지 청구해야 하나요?',
        answer:
          '<strong>손해 및 가해자를 안 날부터 3년 등 소멸시효를 확인해야 하는 영역입니다.</strong> 사고·치료·인지 시점 자료를 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 종합 가이드', href: '/guide/traffic-accident' },
      { label: '비보호 좌회전 직진 충돌 과실비율 판단', href: '/guide/traffic-accident/traffic-accident-unprotected-left-turn-fault-ratio-track' },
      { label: '무단횡단 보행자 사고 과실', href: '/guide/traffic-accident/traffic-accident-jaywalking-pedestrian-fault-track' },
      { label: '교통사고 보상금 산정 기준 총정리', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 합의서 작성 전 확인 항목', href: '/guide/traffic-accident/traffic-settlement-agreement-checklist' },
    ],
  },
];
