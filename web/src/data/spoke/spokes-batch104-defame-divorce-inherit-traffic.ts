import { SpokePage } from '../spoke-pages';

// batch104 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-21)
//
// 고유 존재 이유:
// 1. divorce-spouse-verbal-abuse-mental-cruelty-grounds-track — 배우자 폭언 정서적 학대로 인한 혼인을 계속하기 어려운 중대한 사유 판단형 트랙(neutral). 정서적 학대의 부당대우·애정신뢰 회복 불가능 파탄·제반 사정 판단·파탄 책임 경중이 핵심.
// 2. divorce-inherited-asset-marital-contribution-division-track — 상속재산 혼인 기여 재산분할 기여도·공동재산 청산 판단형 트랙(neutral). 혼인 중 협력 형성 재산 청산·기여 정도 참작·분할 액수·방법 결정이 핵심.
// 3. divorce-future-retirement-pension-division-track — 장래 퇴직연금 재산분할·소극재산 초과 시 채무 분담 판단형 트랙(neutral). 적극·소극재산 청산·채무 초과 시 분담 가능·부양적 요소 고려가 핵심.
// 4. divorce-child-custody-primary-caregiver-determination-track — 양육권 주 양육자 친권·양육비 분담 기간 직권 판단형 트랙(neutral). 자의 복리 우선·실제 양육자 반영·장래양육비 기간 직권 결정이 핵심.
// 5. defamation-open-chat-false-fact-spread-report-track — 오픈채팅방 허위사실 유포 정보통신망 명예훼손 비방 목적·공익 판단형 트랙(victim). 허위 인식·비방 목적 별개·공익 시 비방 목적 부정·증명책임 검사 부담이 핵심.
// 6. defamation-workplace-coworker-false-rumor-report-track — 직장 동료 허위 소문 정보통신망 명예훼손 비방 목적·공익 판단형 트랙(victim). 비방 목적 별개 구성요건·공익 관련 시 비방 목적 부정·주된 동기 공익이면 사익 부수 무방이 핵심.
// 7. defamation-youtube-comment-insult-report-track — 유튜브 댓글 모욕·명예훼손 공연성·전파가능성 절차형 트랙(victim). 공연성 엄격 증명·전파가능성 미필적 고의·대응 과정 발언 신중 판단이 핵심.
// 8. defamation-consumer-complaint-truth-public-interest-falsely-accused-defense — 소비자 고발글 진실 공익 위법성 조각 방어 트랙(accused). 형법 제310조 진실한 사실·오로지 공익·사익 부수 무방·모욕 경미 표현 비해당이 핵심.
// 9. inheritance-contribution-share-elderly-care-claim-track — 고령 부모 부양 기여분 청구·특별한 부양 판단형 트랙(neutral). 통상 부양 넘는 특별한 부양·실질적 공평 위한 상속분 조정·일체 사정 종합 판단이 핵심.
// 10. traffic-accident-bicycle-roadway-car-fault-ratio-track — 자전거 차도 주행 사고 과실비율·교특법 보험 특례 판단형 트랙(victim). 손해배상금 전액 보상 보험만 특례·한도 보험 특례 불해당·전방주시 과실 책임이 핵심.

export const spokesBatch104DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-spouse-verbal-abuse-mental-cruelty-grounds-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-verbal-abuse-mental-cruelty-grounds-track',
    keyword: '배우자 폭언 정서적 학대 이혼 사유',
    questionKeyword:
      '배우자가 매일같이 폭언과 무시를 일삼아 마음이 무너지고 결혼생활이 깨져 이혼을 생각하는데, 멍이나 상처처럼 눈에 보이는 게 없어 이혼 사유가 될지 막막해요. 배우자의 거듭된 폭언과 정서적 학대가 \'심히 부당한 대우\'나 \'혼인을 계속하기 어려운 중대한 사유\'에 해당하는지, 애정과 신뢰가 무너져 회복할 수 없게 됐다면 이혼이 받아들여지는지, 무엇을 기준으로 따지는지 점검해볼 수 있나요?',
    ctaKeyword: '배우자 폭언 정서적 학대 이혼 사유·중대한 사유 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '배우자 폭언 정서적 학대 이혼 사유 — 5단계 부당대우·중대한 사유 점검 | 로앤가이드',
      description:
        '배우자의 거듭된 폭언과 정서적 학대로 이혼이 고민이라면, 민법 제840조 제3호·제6호 재판상 이혼사유의 심히 부당한 대우와 애정·신뢰 상실로 인한 회복 불가능한 파탄 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 한두 번도 아니고 거의 매일같이 모진 폭언과 비아냥, 무시를 일삼아, 그때마다 마음에 깊은 상처가 쌓이고 자존감마저 무너져, 결국 함께 살아야 할 부부 사이가 송두리째 망가져 더 이상은 견딜 수 없다는 생각에 이혼을 떠올리게 된 상황입니다. 손찌검처럼 몸에 멍이 드는 폭력은 아니어서 눈에 보이는 흔적은 없지만, 끊임없는 말의 폭력과 정서적 학대로 부부 사이의 애정과 신뢰는 흔적도 없이 사라졌는데, 정작 \'이렇게 눈에 보이지 않는 일들이 법적으로 이혼 사유가 되는 것인지\'부터 막막합니다. 우선 배우자가 거듭하여 폭언과 정서적 학대를 해 온 것이, 혼인생활을 강요하는 것이 가혹하다고 여겨질 정도의 \'심히 부당한 대우\'에 해당하는 것인지부터 모르겠습니다. 또 한순간이 아니라 오랜 시간 반복된 폭언과 무시로 부부 사이가 돌이킬 수 없을 정도로 깨진 것인데, 이렇게 애정과 신뢰가 무너져 회복할 수 없을 정도로 혼인이 파탄되었다면 그래도 이혼 청구가 받아들여지는 것인지 헷갈립니다. 더구나 어떤 사정이 이혼 사유가 되는지는 도대체 무엇을 기준으로 따지는 것인지, 그리고 이런 상황에서 어디서부터 어떻게 정리해 나가야 하는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 민법 제840조 제3호는 배우자로부터 심히 부당한 대우를 받았을 때를, 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 재판상 이혼 사유로 정하는 영역입니다. 판례는 민법 제840조 제3호에서 정한 \'배우자로부터 심히 부당한 대우를 받았을 때\'란 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행이나 학대 또는 모욕을 받았을 경우를 말하고, 제6호에서 정한 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하며, 이를 판단할 때에는 혼인계속의사의 유무, 파탄의 원인에 관한 당사자의 책임 유무, 혼인생활의 기간, 자녀의 유무, 당사자의 연령, 이혼 후의 생활보장 등 여러 사정을 두루 고려하여야 하고, 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정된다면 그 파탄의 원인에 대한 원고의 책임이 피고의 책임보다 더 무겁다고 인정되지 않는 한 원칙적으로 이혼 청구를 허용하여야 한다고 본 사례 흐름이 있는 영역입니다. 폭언 + 정서적 학대 + 혼인 파탄 결합은 \'심히 부당한 대우·중대한 사유 판단기준·회복 불가능한 파탄·파탄 책임\' 다툼이 가능한 트랙입니다. 당사자라면 ① 정황·증거 보존 ② 폭언·학대 ③ 혼인 파탄 ④ 중대한 사유 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 학대 ③ 파탄 ④ 사유 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 폭언 정서적 학대 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황·증거 보존·폭언·학대·혼인 파탄·중대한 사유·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정황·증거 보존</strong> — 폭언·무시·비하 내용·시점·반복성·정황 보존.</li>\n<li><strong>② 폭언·학대</strong> — 거듭된 폭언·정서적 학대와 그로 인한 정신적 피해 정황 정리.</li>\n<li><strong>③ 혼인 파탄</strong> — 애정·신뢰가 회복할 수 없을 정도로 파탄됐는지 정리.</li>\n<li><strong>④ 중대한 사유</strong> — 심히 부당한 대우·중대한 사유 여부를 혼인계속의사·책임·기간·자녀 등 제반 사정으로 검토.</li>\n<li><strong>⑤ 청구</strong> — 재판상 이혼·위자료·재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 심히 부당한 대우는 혼인 지속을 강요하기 가혹할 정도의 폭행·학대·모욕을, 중대한 사유는 부부 공동생활이 회복할 수 없을 정도로 파탄됐는지를 혼인계속의사·책임·기간·자녀 등 제반 사정으로 판단하고, 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 파탄 원인에 대한 청구인의 책임이 상대방보다 더 무겁지 않은 한 원칙적으로 이혼 청구가 허용될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황·증거 보존 (즉시)</strong> — 폭언·무시·비하 내용·시점·반복성·정황 자료 보존.</li>\n<li><strong>2단계 — 학대·파탄 정리 (1~2주)</strong> — 거듭된 폭언·정서적 학대와 정신적 피해, 애정·신뢰 파탄 정황 정리.</li>\n<li><strong>3단계 — 중대한 사유 정리 (2~3주)</strong> — 심히 부당한 대우·중대한 사유, 혼인계속의사·책임·기간·자녀 등 제반 사정 정리.</li>\n<li><strong>4단계 — 조정·소 제기 (분쟁 시)</strong> — 조정 신청, 재판상 이혼·위자료·재산분할 청구 검토.</li>\n<li><strong>5단계 — 심리·이행 (확정 후)</strong> — 이혼·위자료 심리 결과에 따른 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 폭언 정서적 학대 이혼 사유·중대한 사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 폭언·정서적 학대·혼인 파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>폭언·무시 녹음·메시지·일기 자료 (학대 정황)</strong></li>\n<li><strong>반복성·시점 기록 자료 (지속 학대)</strong></li>\n<li><strong>정신과 진료·심리상담 기록 자료 (정신적 피해)</strong></li>\n<li><strong>별거·갈등 경위·기간 자료 (혼인 파탄)</strong></li>\n<li><strong>목격자 진술·정황 자료 (학대 입증)</strong></li>\n<li><strong>이혼·위자료·재산분할 청구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정서적 학대는 눈에 보이는 흔적이 적으므로 폭언·무시의 내용과 반복성을 녹음·메시지·일기 등으로 시점별로 보존하는 것이 핵심. 심히 부당한 대우와 중대한 사유는 혼인계속의사·책임·기간·자녀 등 제반 사정으로 판단하므로 애정·신뢰가 무너진 경위와 정신적 피해 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>심히 부당한 대우</strong> — 거듭된 폭언·학대가 혼인 지속을 강요하기 가혹할 정도인지.</li>\n<li><strong>중대한 사유</strong> — 정서적 학대로 애정·신뢰가 상실되어 파탄됐는지.</li>\n<li><strong>판단 기준</strong> — 혼인계속의사·책임·기간·자녀 등 제반 사정을 두루 보는지.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 대한 청구인의 책임이 더 무겁지 않은지.</li>\n<li><strong>위자료·재산분할</strong> — 이혼과 함께 위자료·재산분할을 함께 다투는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료 청구)</strong></li>\n<li><strong>여성긴급전화 1366 (위기 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 심히 부당한 대우와 혼인을 계속하기 어려운 중대한 사유',
        summary:
          '대법원 2025므10730(대법원, 2025.09.04 선고) 영역에서 법원은 민법 제840조 제6호에서 정한 이혼사유인 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말한다고 보았습니다. 또한 이를 판단할 때에는 혼인계속의사의 유무, 파탄의 원인에 관한 당사자의 책임 유무, 혼인생활의 기간, 자녀의 유무, 당사자의 연령, 이혼 후의 생활보장 등 혼인관계에 관한 여러 사정을 두루 고려하여야 하고, 이러한 사정을 고려하여 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정된다면 파탄의 원인에 대한 원고의 책임이 피고의 책임보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 판시했습니다. 배우자의 거듭된 폭언과 정서적 학대로 애정과 신뢰가 무너져 혼인이 파탄된 사안에서도 심히 부당한 대우·중대한 사유·회복 불가능한 파탄·파탄 책임 경중을 검토해볼 수 있습니다.',
        takeaway: '폭언 + 정서적 학대 + 혼인 파탄 결합 시 심히 부당한 대우·중대한 사유·회복 불가능한 파탄과 제반 사정 판단·돌이킬 수 없는 파탄 시 원칙적 이혼 허용·청구인 책임 경중 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '눈에 보이는 폭력은 없고 폭언만 있어도 이혼 사유가 되나요?',
        answer:
          '<strong>거듭된 폭언·정서적 학대로 애정과 신뢰가 회복할 수 없을 정도로 파탄됐는지로 따져 검토되는 영역입니다.</strong> 폭언·학대 정황 자료를 정리.',
      },
      {
        question: '심히 부당한 대우는 어떤 경우를 말하나요?',
        answer:
          '<strong>혼인 지속을 강요하는 것이 가혹할 정도의 폭행·학대·모욕을 받은 경우를 말하는 영역입니다.</strong> 대우 정황 자료를 정리.',
      },
      {
        question: '정서적 학대는 무엇으로 입증하나요?',
        answer:
          '<strong>녹음·메시지·일기·정신과 진료 기록 등으로 내용·반복성·시점을 보존해 입증을 검토하는 영역입니다.</strong> 정황·진료 자료를 정리.',
      },
      {
        question: '이혼 사유는 무엇을 기준으로 따지나요?',
        answer:
          '<strong>혼인계속의사·책임·기간·자녀·연령 등을 두루 고려해 판단하는 영역입니다.</strong> 제반 사정 자료를 정리.',
      },
      {
        question: '이혼과 함께 위자료도 청구할 수 있나요?',
        answer:
          '<strong>이혼 사유가 인정되는 경우 위자료·재산분할을 함께 청구할 수 있는 영역입니다.</strong> 손해·재산 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: 'divorce 도메인 허브', href: '/guide/divorce' },
      { label: '정서적 학대 증거 수집', href: '/guide/divorce/divorce-mental-abuse-evidence-collection' },
      { label: '정신질환 치료 거부 이혼', href: '/guide/divorce/divorce-spouse-mental-illness-treatment-refusal-grounds-track' },
      { label: '지속 가정폭력 이혼 사유', href: '/guide/divorce/divorce-spouse-continuous-domestic-violence-grounds-track' },
      { label: '경제적 학대 이혼', href: '/guide/divorce/divorce-spouse-economic-abuse-financial-control-track' },
    ],
  },

  // ─── 2. divorce-inherited-asset-marital-contribution-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-inherited-asset-marital-contribution-division-track',
    keyword: '상속재산 혼인 기여 재산분할 판단',
    questionKeyword:
      '배우자가 혼인 중에 부모에게서 상속받은 재산이나 함께 일군 재산을 두고 이혼하면서 재산분할을 어떻게 받아야 할지 막막해요. 상속재산처럼 명의가 한쪽인 재산도 혼인 중 협력으로 유지·증가됐다면 분할 대상이 되는지, 제 기여 정도는 어떻게 참작되는지, 분할의 액수와 방법은 무엇을 기준으로 정해지는지 점검해볼 수 있나요?',
    ctaKeyword: '상속재산 혼인 기여 재산분할·공동재산 청산 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '상속재산 혼인 기여 재산분할 — 5단계 기여도·공동재산 청산 점검 | 로앤가이드',
      description:
        '혼인 중 상속·형성 재산의 재산분할이 고민이라면, 민법 제839조의2 재산분할과 혼인 중 협력으로 이룩한 실질적 공동재산 청산·기여 정도 참작 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 혼인하고 사는 동안 부모에게서 물려받은 상속재산도 있고, 또 둘이 함께 살림을 꾸리고 곁에서 도우며 함께 불려 온 재산도 있는데, 막상 이혼을 하게 되니 \'이 재산들을 어떻게 나눠 받아야 하는 것인지\'부터 막막한 상황입니다. 특히 상속받은 재산은 배우자 한 사람 명의로 되어 있고 \'네 것이 아니라 우리 집안 재산\'이라는 말까지 들어 와서, 정작 \'그런 재산도 제가 나눠 받을 수 있는 것인지\'부터 모르겠습니다. 우선 명의가 배우자 한쪽으로 되어 있는 재산이라 하더라도, 혼인생활 동안 제가 곁에서 살림을 도맡고 협력하여 그 재산이 유지되고 불어나는 데 보탬이 되었다면, 그 재산이 재산분할의 대상이 되는 것인지부터 헷갈립니다. 또 제가 직접 돈을 벌어 보탠 것이 아니라 가사와 양육으로 뒷받침한 것이라면, 그런 제 기여가 도대체 어떻게 참작되어 분할에 반영되는 것인지조차 가늠이 되지 않습니다. 더구나 결국 분할의 액수와 방법은 무엇을 기준으로 정해지는 것인지, 이런 상황에서 어디서부터 어떻게 정리해 나가야 하는 것인지조차 막막해 답답한 상태입니다." 민법 제839조의2에 규정된 재산분할제도는 혼인 중에 취득한 실질적인 공동재산을 청산·분배하는 것을 주된 목적으로 하는 영역입니다. 판례는 부부가 재판상 이혼을 할 때 쌍방의 협력으로 이룩한 재산이 있는 한 법원으로서는 당사자의 청구에 의하여 재산의 형성에 기여한 정도 등 당사자 쌍방의 일체의 사정을 참작하여 분할의 액수와 방법을 정하여야 하고, 한쪽 배우자 명의의 재산이라도 혼인기간 중 상대방 배우자의 협력이 인정되어 부부 쌍방의 협력으로 이룩한 재산으로 볼 수 있는 부분은 재산분할의 대상에 포함될 수 있으며, 재산분할비율은 개별재산에 대한 기여도를 일컫는 것이 아니라 기여도 기타 모든 사정을 고려하여 전체로서 형성된 재산에 대하여 상대방 배우자로부터 분할받을 수 있는 비율을 일컫는 것이라고 본 사례 흐름이 있는 영역입니다. 상속재산 + 혼인 기여 + 공동재산 청산 결합은 \'혼인 중 협력 형성 재산 청산·기여 정도 참작·분할 액수·방법 결정\' 다툼이 가능한 트랙입니다. 당사자라면 ① 재산·기여 파악 ② 분할 대상 ③ 기여 정도 ④ 분할 비율·방법 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 대상 ③ 기여 ④ 비율 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상속재산 혼인 기여 재산분할 판단 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·기여 파악·분할 대상·기여 정도·분할 비율·방법·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·기여 파악</strong> — 상속재산·부동산·예금·채무 내역과 형성·유지·증가 기여 정황 파악.</li>\n<li><strong>② 분할 대상</strong> — 한쪽 명의 재산도 혼인 중 협력으로 유지·증가됐는지 정리.</li>\n<li><strong>③ 기여 정도</strong> — 소득·가사·양육 등 재산 형성에 기여한 정도 정리.</li>\n<li><strong>④ 분할 비율·방법</strong> — 기여도 기타 모든 사정을 고려한 전체 분할 비율·방법을 검토.</li>\n<li><strong>⑤ 청구</strong> — 재산분할 청구·재산명시·재산조회 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 재산분할은 혼인 중 쌍방의 협력으로 이룩한 실질적 공동재산을 청산·분배하는 것을 목적으로 하므로 한쪽 명의 재산이라도 혼인기간 중 상대방의 협력이 인정되는 부분은 분할 대상에 포함될 수 있고, 재산분할비율은 개별재산 기여도가 아니라 기여도 기타 모든 사정을 고려한 전체 재산에 대한 분할 비율로 정하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·기여 내역 확보 (즉시)</strong> — 상속재산·부동산·예금·채무 내역과 형성·유지·증가 기여 정황 자료 확보.</li>\n<li><strong>2단계 — 분할 대상 정리 (1~2주)</strong> — 한쪽 명의 재산의 혼인 중 협력·유지·증가 정황 정리.</li>\n<li><strong>3단계 — 기여 정도 정리 (2~3주)</strong> — 소득·가사·양육 등 재산 형성 기여 정도 정리.</li>\n<li><strong>4단계 — 재산명시·청구 (소 제기 시)</strong> — 재산명시·재산조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심리·이행 (확정 후)</strong> — 분할 대상·비율·방법 심리 결과에 따른 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속재산 혼인 기여 재산분할·공동재산 청산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 분할 대상·기여 정도·분할 비율 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>상속재산 취득·등기 자료 (재산 출처)</strong></li>\n<li><strong>혼인 중 유지·증가 기여 정황 자료 (협력 입증)</strong></li>\n<li><strong>소득·가사·양육 기여 자료 (기여 정도)</strong></li>\n<li><strong>부동산·예금·채무 내역 자료 (분할 대상)</strong></li>\n<li><strong>재산 형성·관리 경위 자료 (전체 기여)</strong></li>\n<li><strong>재산명시·재산조회·재산분할 청구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한쪽 명의 상속재산이라도 혼인기간 중 상대방의 협력으로 유지·증가된 부분은 분할 대상이 될 수 있으므로 그 협력·기여 정황을 정리하는 것이 핵심. 재산분할비율은 개별재산이 아니라 전체 재산에 대한 기여도 기타 모든 사정으로 정하므로 소득·가사·양육 기여와 재산 형성 경위 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할 대상</strong> — 한쪽 명의 상속재산이 분할 대상에 포함되는지.</li>\n<li><strong>혼인 중 협력</strong> — 재산의 유지·증가에 협력이 인정되는지.</li>\n<li><strong>기여 정도</strong> — 소득·가사·양육 기여가 어떻게 참작되는지.</li>\n<li><strong>분할 비율</strong> — 전체 재산에 대한 기여도 기타 사정으로 비율을 정하는지.</li>\n<li><strong>분할 방법</strong> — 현물·금전·정기금 등 분할 방법을 어떻게 정하는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시·재산조회 신청)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 중 협력으로 이룩한 재산의 분할 대상과 기여도 참작',
        summary:
          '대법원 2012므2888(대법원, 2014.07.16 선고) 영역에서 법원은 민법 제839조의2에 규정된 재산분할제도는 혼인 중에 취득한 실질적인 공동재산을 청산·분배하는 것을 주된 목적으로 하는 것이므로, 부부가 재판상 이혼을 할 때 쌍방의 협력으로 이룩한 재산이 있는 한 법원으로서는 당사자의 청구에 의하여 재산의 형성에 기여한 정도 등 당사자 쌍방의 일체의 사정을 참작하여 분할의 액수와 방법을 정하여야 한다고 보았습니다. 또한 혼인기간 중의 근무 등에 대하여 상대방 배우자의 협력이 인정되는 이상 그 부분은 부부 쌍방의 협력으로 이룩한 재산으로 볼 수 있어 재산분할의 대상에 포함될 수 있고, 재산분할비율은 개별재산에 대한 기여도를 일컫는 것이 아니라 기여도 기타 모든 사정을 고려하여 전체로서 형성된 재산에 대하여 상대방 배우자로부터 분할받을 수 있는 비율을 일컫는 것이므로 법원이 합리적인 근거 없이 분할대상 재산들을 개별적으로 구분하여 분할비율을 달리 정하는 것은 허용될 수 없다고 판시했습니다. 한쪽 명의 상속·형성 재산을 혼인 중 협력으로 유지·증가한 사안에서도 공동재산 청산·기여 정도 참작·전체 분할 비율을 검토해볼 수 있습니다.',
        takeaway: '상속재산 + 혼인 기여 + 공동재산 청산 결합 시 혼인 중 협력으로 이룩한 재산의 분할 대상 포함·기여 정도 참작·전체 재산에 대한 분할 비율 결정 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자가 상속받은 재산도 재산분할 대상이 되나요?',
        answer:
          '<strong>한쪽 명의 상속재산이라도 혼인 중 협력으로 유지·증가된 부분은 분할 대상이 될 수 있는 영역입니다.</strong> 협력·기여 정황 자료를 정리.',
      },
      {
        question: '돈을 직접 벌지 않고 가사·양육만 했어도 기여로 인정되나요?',
        answer:
          '<strong>소득뿐 아니라 가사·양육 등 재산 형성에 기여한 정도도 참작되는 영역입니다.</strong> 가사·양육 기여 자료를 정리.',
      },
      {
        question: '분할 비율은 재산별로 따로 정해지나요?',
        answer:
          '<strong>개별재산이 아니라 전체 재산에 대한 기여도 기타 모든 사정으로 비율을 정하는 영역입니다.</strong> 전체 기여 자료를 정리.',
      },
      {
        question: '분할의 액수와 방법은 무엇을 기준으로 정하나요?',
        answer:
          '<strong>재산 형성 기여 정도 등 당사자 쌍방의 일체의 사정을 참작해 정하는 영역입니다.</strong> 재산·기여 자료를 정리.',
      },
      {
        question: '상대방이 재산을 숨기면 어떻게 하나요?',
        answer:
          '<strong>재산명시·재산조회를 신청해 분할 대상 재산을 확인하도록 검토할 수 있는 영역입니다.</strong> 재산 내역 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: 'divorce 도메인 허브', href: '/guide/divorce' },
      { label: '상속 부동산 기여 분할', href: '/guide/divorce/divorce-inherited-property-division-contribution-track' },
      { label: '자영업 사업체 기여 분할', href: '/guide/divorce/divorce-self-employed-business-asset-contribution-division-track' },
      { label: '은닉 재산 재산분할', href: '/guide/divorce/divorce-concealed-asset-division-track' },
      { label: '맞벌이 육아 기여 분할', href: '/guide/divorce/divorce-dual-income-childcare-contribution-division-track' },
    ],
  },

  // ─── 3. divorce-future-retirement-pension-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-future-retirement-pension-division-track',
    keyword: '장래 퇴직연금 재산분할 인정 판단',
    questionKeyword:
      '이혼하면서 재산분할을 따지는데, 모아 둔 재산보다 빚이 더 많은 데다 배우자의 장래 연금까지 어떻게 나눠야 할지 막막해요. 부부가 갚아야 할 빚이 가진 재산보다 더 많으면 그래도 재산분할 청구가 받아들여지는지, 채무를 나눠 부담하게 되는 경우는 무엇을 기준으로 정하는지, 적극재산처럼 일률적 비율로 나누는지 점검해볼 수 있나요?',
    ctaKeyword: '장래 퇴직연금 재산분할·채무 분담 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '장래 퇴직연금 재산분할 인정 — 5단계 채무 분담·청산 점검 | 로앤가이드',
      description:
        '연금·채무가 얽힌 재산분할이 고민이라면, 민법 제839조의2 재산분할과 소극재산이 적극재산을 초과할 때 채무 분담 가능 여부·부양적 요소 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 결심하고 막상 재산을 정리하려니, 그동안 함께 모아 둔 재산보다 갚아야 할 빚이 오히려 더 많은 데다, 배우자가 앞으로 받게 될 연금 같은 것까지 어떻게 따져야 하는 것인지 도무지 가늠이 되지 않아 막막한 상황입니다. 보통 재산분할이라고 하면 모아 둔 재산을 나눠 갖는 것이라고만 생각했는데, 정작 우리 부부는 적극재산보다 갚을 채무가 더 많은 형편이어서, \'이런 경우에도 재산분할을 청구할 수 있는 것인지\'부터 모르겠습니다. 우선 부부가 함께 진 빚이 가진 재산을 넘어서는 상황인데, 그래도 법원에 재산분할을 청구하면 받아들여지는 것인지부터 헷갈립니다. 또 그렇다면 결국 빚을 서로 나눠 부담하게 되는 것일 텐데, 그 채무 분담은 도대체 무엇을 기준으로, 어떻게 정해지는 것인지 모르겠습니다. 더구나 재산을 나눌 때처럼 채무도 기여도에 따라 일정한 비율로 딱 잘라 나눠 부담하게 되는 것인지, 아니면 다른 사정까지 두루 따져 정하는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2에 규정된 재산분할제도는 혼인 중에 형성한 재산관계를 이혼에 즈음하여 청산하는 것을 본질로 하는 영역입니다. 판례는 이혼 당사자 각자가 보유한 적극재산에서 소극재산을 공제하는 등으로 재산상태를 따져 본 결과 상대방이 그에게 귀속되어야 할 몫보다 더 많은 적극재산을 보유하거나 소극재산의 부담이 더 적은 경우에는 적극재산을 분배하거나 소극재산을 분담하도록 하는 재산분할이 모두 가능하고, 소극재산의 총액이 적극재산의 총액을 초과하여 재산분할을 한 결과가 결국 채무의 분담을 정하는 것이 되는 경우에도 법원은 채무의 성질, 채권자와의 관계, 물적 담보의 존부 등 일체의 사정을 참작하여 분담이 적합하다고 인정되면 구체적인 분담의 방법 등을 정하여 재산분할 청구를 받아들일 수 있으며, 다만 이 경우 채무부담의 경위·용처·금액, 혼인생활의 과정, 당사자의 경제적 활동능력과 장래의 전망 등 제반 사정을 종합적으로 고려하여 분담 여부와 방법을 정할 것이고 적극재산을 분할할 때처럼 기여도 등을 중심으로 일률적인 비율을 정하여 당연히 분할 귀속되게 하여야 하는 것은 아니라고 본 사례 흐름이 있는 영역입니다. 장래 연금 + 채무 초과 + 재산 청산 결합은 \'적극·소극재산 청산·채무 초과 시 분담 가능·부양적 요소 고려\' 다툼이 가능한 트랙입니다. 당사자라면 ① 재산·채무 파악 ② 청산 계산 ③ 채무 초과 ④ 분담 방법 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 청산 ③ 초과 ④ 분담 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 장래 퇴직연금 재산분할 인정 판단 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·채무 파악·청산 계산·채무 초과·분담 방법·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·채무 파악</strong> — 적극재산·소극재산·장래 연금 등 재산·채무 내역 파악.</li>\n<li><strong>② 청산 계산</strong> — 각자 적극재산에서 소극재산을 공제한 재산상태 정리.</li>\n<li><strong>③ 채무 초과</strong> — 소극재산이 적극재산을 초과해도 분할 청구가 가능한지 정리.</li>\n<li><strong>④ 분담 방법</strong> — 채무 성질·용처·경제활동능력 등 일체 사정으로 분담 방법을 검토.</li>\n<li><strong>⑤ 청구</strong> — 재산분할·채무 분담 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 소극재산이 적극재산을 초과해 결과적으로 채무 분담을 정하게 되는 경우에도 법원은 채무의 성질·채권자와의 관계·물적 담보 존부 등 일체의 사정을 참작해 분담이 적합하다고 인정되면 분담 방법을 정해 재산분할 청구를 받아들일 수 있고, 다만 적극재산처럼 기여도 중심으로 일률적 비율을 정하는 것이 아니라 부양적 요소 등 제반 사정을 종합해 정하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·채무 내역 확보 (즉시)</strong> — 적극재산·소극재산·장래 연금 등 재산·채무 내역 자료 확보.</li>\n<li><strong>2단계 — 청산 계산 정리 (1~2주)</strong> — 각자 적극재산에서 소극재산을 공제한 재산상태 정리.</li>\n<li><strong>3단계 — 채무 분담 정리 (2~3주)</strong> — 채무 성질·용처·경제활동능력 등 분담 사정 정리.</li>\n<li><strong>4단계 — 재산명시·청구 (소 제기 시)</strong> — 재산명시·재산조회 신청, 재산분할·채무 분담 청구.</li>\n<li><strong>5단계 — 심리·이행 (확정 후)</strong> — 분담 여부·방법 심리 결과에 따른 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">장래 퇴직연금 재산분할·채무 분담 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 청산 계산·채무 초과·분담 방법 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>부동산·예금·보험 등 적극재산 자료 (적극재산)</strong></li>\n<li><strong>대출·카드·임대보증금 채무 자료 (소극재산)</strong></li>\n<li><strong>장래 연금·퇴직급여 내역 자료 (장래 자산)</strong></li>\n<li><strong>채무 발생 경위·용처 자료 (채무 성질)</strong></li>\n<li><strong>소득·경제활동능력·생활 사정 자료 (부양적 요소)</strong></li>\n<li><strong>재산명시·재산조회·재산분할 청구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소극재산이 적극재산을 초과해도 채무 분담을 정하는 형태로 재산분할 청구가 받아들여질 수 있으므로 적극·소극재산 내역을 정리하는 것이 핵심. 다만 채무 분담은 채무의 성질·용처·경제활동능력 등 일체의 사정을 종합해 정하므로 채무 발생 경위와 소득·생활 사정 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무 초과</strong> — 소극재산이 적극재산을 초과해도 분할 청구가 가능한지.</li>\n<li><strong>채무 분담</strong> — 채무 성질·채권자 관계·물적 담보 등으로 분담이 적합한지.</li>\n<li><strong>분담 기준</strong> — 채무 경위·용처·경제활동능력 등 제반 사정을 종합하는지.</li>\n<li><strong>일률 비율</strong> — 적극재산처럼 기여도 일률 비율로 분담하지는 않는지.</li>\n<li><strong>장래 연금</strong> — 장래 연금 등이 분할 대상으로 함께 고려되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시·재산조회 신청)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소극재산 초과 시 채무 분담과 재산분할 청구',
        summary:
          '대법원 2010므4071(대법원, 2013.06.20 선고) 영역에서 법원은 이혼 당사자 각자가 보유한 적극재산에서 소극재산을 공제하는 등으로 재산상태를 따져 본 결과 재산분할 청구의 상대방이 그에게 귀속되어야 할 몫보다 더 많은 적극재산을 보유하고 있거나 소극재산의 부담이 더 적은 경우에는 적극재산을 분배하거나 소극재산을 분담하도록 하는 재산분할이 모두 가능하다고 보았습니다. 따라서 소극재산의 총액이 적극재산의 총액을 초과하여 재산분할을 한 결과가 결국 채무의 분담을 정하는 것이 되는 경우에도 법원은 채무의 성질, 채권자와의 관계, 물적 담보의 존부 등 일체의 사정을 참작하여 분담하게 하는 것이 적합하다고 인정되면 구체적인 분담의 방법 등을 정하여 재산분할 청구를 받아들일 수 있다고 판시했습니다. 다만 재산분할에는 이혼 이후 당사자들의 생활보장에 대한 배려 등 부양적 요소도 고려되므로, 채무부담의 경위·용처·금액, 혼인생활의 과정, 당사자의 경제적 활동능력과 장래의 전망 등 제반 사정을 종합적으로 고려하여 채무 분담 여부와 방법을 정할 것이고 적극재산을 분할할 때처럼 기여도 등을 중심으로 일률적인 비율을 정하여 당연히 분할 귀속되게 하여야 하는 것은 아니라고 보았습니다. 빚이 더 많고 장래 연금이 얽힌 사안에서도 적극·소극재산 청산·채무 초과 시 분담 가능·부양적 요소 고려를 검토해볼 수 있습니다.',
        takeaway: '장래 연금 + 채무 초과 + 재산 청산 결합 시 소극재산 초과 시에도 채무 분담 형태 재산분할 가능·일체 사정 참작 분담 방법 결정·부양적 요소 고려·일률 비율 부정 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '재산보다 빚이 더 많아도 재산분할을 청구할 수 있나요?',
        answer:
          '<strong>소극재산이 적극재산을 초과해 채무 분담을 정하는 경우에도 분할 청구가 받아들여질 수 있는 영역입니다.</strong> 재산·채무 내역 자료를 정리.',
      },
      {
        question: '채무는 무엇을 기준으로 나눠 부담하나요?',
        answer:
          '<strong>채무의 성질·채권자 관계·물적 담보 존부 등 일체의 사정을 참작해 정하는 영역입니다.</strong> 채무 경위·용처 자료를 정리.',
      },
      {
        question: '채무도 재산처럼 기여도 비율로 딱 나누나요?',
        answer:
          '<strong>적극재산처럼 일률적 비율로 당연히 나누는 것이 아니라 제반 사정을 종합해 정하는 영역입니다.</strong> 경제활동·생활 사정 자료를 정리.',
      },
      {
        question: '배우자가 앞으로 받을 연금도 분할 대상이 되나요?',
        answer:
          '<strong>혼인 중 협력으로 형성된 연금 등은 분할 대상으로 함께 검토될 수 있는 영역입니다.</strong> 연금·퇴직급여 자료를 정리.',
      },
      {
        question: '이혼 후 생활이 어려운 사정도 고려되나요?',
        answer:
          '<strong>이혼 후 생활보장 등 부양적 요소도 함께 고려되는 영역입니다.</strong> 소득·생활 사정 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: 'divorce 도메인 허브', href: '/guide/divorce' },
      { label: '장래 퇴직금 재산분할', href: '/guide/divorce/divorce-future-retirement-pay-division-track' },
      { label: '퇴직연금 재산분할', href: '/guide/divorce/divorce-retirement-pension-division-track' },
      { label: '국민연금 분할', href: '/guide/divorce/divorce-national-pension-division-track' },
      { label: '채무 음(-)재산 분할', href: '/guide/divorce/divorce-debt-negative-asset-division-track' },
    ],
  },

  // ─── 4. divorce-child-custody-primary-caregiver-determination-track ───
  {
    domain: 'divorce',
    slug: 'divorce-child-custody-primary-caregiver-determination-track',
    keyword: '양육권 주 양육자 친권 판단',
    questionKeyword:
      '이혼하면서 아이의 양육권과 친권을 누가 가질지, 양육비는 언제까지 어떻게 정해지는지 막막해요. 그동안 실제로 아이를 키워 온 사람이 주 양육자로 정해지는지, 정해진 뒤 실제 양육 상황이 달라지면 양육비 기간도 다시 정해지는지, 법원이 청구한 내용에 매이지 않고 아이 복리를 위해 직권으로 정할 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '양육권 주 양육자 친권·양육비 기간 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '양육권 주 양육자 친권 — 5단계 자의 복리·양육비 기간 점검 | 로앤가이드',
      description:
        '이혼 시 양육권·친권·양육비가 고민이라면, 자의 복리를 우선하는 양육자 지정과 실제 양육 상황 반영·장래양육비 기간 직권 결정 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 앞두고 가장 마음이 무거운 것이 아이 문제인데, 정작 \'아이의 양육권과 친권을 누가 갖게 되는 것인지, 양육비는 언제까지 어떻게 정해지는 것인지\'부터 막막한 상황입니다. 그동안 아이를 곁에서 먹이고 입히고 학교며 병원이며 실제로 도맡아 키워 온 것은 저인데, 막상 이혼하려니 \'그렇다고 제가 당연히 주 양육자로 정해지는 것인지\'부터 모르겠습니다. 우선 실제로 아이를 키워 온 사람이 양육자로 정해지는 것인지, 무엇을 가장 중요하게 보고 양육자를 정하는 것인지부터 헷갈립니다. 또 일단 양육자와 양육비가 정해진 뒤에 사정이 바뀌어 실제로는 다른 사람이 아이를 돌보게 되는 경우에는, 이미 정해진 양육비 지급 기간도 그에 맞춰 다시 정해지는 것인지 모르겠습니다. 더구나 제가 청구한 내용과 다르더라도 법원이 아이의 복리를 위해 직권으로 양육에 관한 사항을 정할 수 있는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 민법 제837조와 가사소송법은 자녀의 양육에 관한 사항과 양육비용의 분담을 정하는 영역입니다. 판례는 가정법원이 양육비용의 분담을 정하는 경우 자의 복리를 위하여 당사자의 청구에 구애받지 않고 직권으로 양육비용의 분담에 관한 기간을 정할 수 있고, 양육자로 지정된 양육친이 비양육친을 상대로 제기한 양육비 청구 사건에서 제1심이 자녀가 성년에 이르기 전날을 종기로 삼아 장래양육비의 분담을 정하였더라도 항고심이 양육에 관한 사항을 심리한 결과 일정 시점 이후에는 양육자로 지정된 자가 자녀를 양육하지 않고 있는 사실이 확인된 경우 이를 반영하여 장래양육비의 지급을 명하는 기간을 다시 정하여야 한다고 본 사례 흐름이 있는 영역입니다. 주 양육자 + 친권 + 양육비 기간 결합은 \'자의 복리 우선·실제 양육자 반영·장래양육비 기간 직권 결정\' 다툼이 가능한 트랙입니다. 당사자라면 ① 양육 실태 파악 ② 양육자 지정 ③ 양육비 산정 ④ 기간·변경 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 지정 ③ 산정 ④ 기간 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 양육권 주 양육자 친권 판단 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육 실태 파악·양육자 지정·양육비 산정·기간·변경·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양육 실태 파악</strong> — 그동안의 양육 분담·생활·교육·돌봄 실태 파악.</li>\n<li><strong>② 양육자 지정</strong> — 자의 복리를 우선해 주 양육자·친권자를 정하는지 정리.</li>\n<li><strong>③ 양육비 산정</strong> — 소득·양육비 산정기준표에 따른 분담액 정리.</li>\n<li><strong>④ 기간·변경</strong> — 실제 양육 상황 변화에 따라 양육비 기간을 다시 정하는지 검토.</li>\n<li><strong>⑤ 청구</strong> — 양육자 지정·양육비·변경 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 가정법원은 양육비용 분담을 정할 때 자의 복리를 위하여 청구에 구애받지 않고 직권으로 분담 기간을 정할 수 있고, 양육자로 지정된 자가 일정 시점 이후 실제로는 자녀를 양육하지 않는 사실이 확인되면 이를 반영하여 장래양육비 지급 기간을 다시 정하여야 하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육 실태 자료 확보 (즉시)</strong> — 양육 분담·생활·교육·돌봄 실태 자료 확보.</li>\n<li><strong>2단계 — 양육자 지정 정리 (1~2주)</strong> — 자의 복리 기준 주 양육자·친권자 정황 정리.</li>\n<li><strong>3단계 — 양육비 산정 정리 (2~3주)</strong> — 소득·양육비 산정기준표·분담액·기간 정리.</li>\n<li><strong>4단계 — 조정·청구 (소 제기 시)</strong> — 양육자 지정·친권·양육비 청구, 변경 사유 검토.</li>\n<li><strong>5단계 — 심리·이행 (확정 후)</strong> — 양육·양육비 심리 결과에 따른 이행·기간 변경 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육권 주 양육자 친권·양육비 기간 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 양육자 지정·양육비 산정·기간 변경 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인·자녀 확인)</strong></li>\n<li><strong>실제 양육 분담·생활 자료 (양육 실태)</strong></li>\n<li><strong>학교·병원·돌봄 기록 자료 (주 양육자 입증)</strong></li>\n<li><strong>양육 환경·거주·소득 자료 (자의 복리)</strong></li>\n<li><strong>양육비 산정기준표·소득 자료 (분담액)</strong></li>\n<li><strong>실제 양육 변화 정황 자료 (기간 변경)</strong></li>\n<li><strong>양육자 지정·친권·양육비 청구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육자 지정과 양육비는 자의 복리를 가장 중요하게 보므로 실제 양육 분담과 양육 환경을 학교·병원·돌봄 기록으로 정리하는 것이 핵심. 법원은 청구에 구애받지 않고 직권으로 양육비 기간을 정할 수 있고 실제 양육 상황이 바뀌면 기간이 다시 정해질 수 있으므로 양육 변화 정황 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>주 양육자</strong> — 실제 양육해 온 사람·양육 환경을 어떻게 보는지.</li>\n<li><strong>자의 복리</strong> — 양육자·친권을 자의 복리를 우선해 정하는지.</li>\n<li><strong>양육비 산정</strong> — 소득·양육비 산정기준표로 분담액을 정하는지.</li>\n<li><strong>기간 변경</strong> — 실제 양육 상황 변화로 양육비 기간을 다시 정하는지.</li>\n<li><strong>직권 결정</strong> — 청구에 구애받지 않고 직권으로 양육 사항을 정하는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (양육자 지정·양육비 청구)</strong></li>\n<li><strong>양육비이행관리원 (양육비 상담·이행)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자의 복리를 위한 양육비 기간 직권 결정과 실제 양육 반영',
        summary:
          '대법원 2021스766(대법원, 2022.11.10 선고) 영역에서 법원은 양육자로 지정된 양육친이 비양육친을 상대로 제기한 양육비 청구 사건에서 제1심 가정법원이 자녀가 성년에 이르기 전날을 종기로 삼아 장래양육비의 분담을 정하였는데, 항고심법원이 양육에 관한 사항을 심리한 결과 일정 시점 이후에는 양육자로 지정된 자가 자녀를 양육하지 않고 있는 사실이 확인된 경우 이를 반영하여 장래양육비의 지급을 명하는 기간을 다시 정하여야 한다고 보았습니다. 또한 가정법원이 양육비용의 분담을 정하는 경우 자의 복리를 위하여 당사자의 청구에 구애받지 않고 직권으로 양육비용의 분담에 관한 기간을 정할 수 있다고 판시했습니다. 이혼하면서 양육권·친권·양육비를 다투는 사안에서도 자의 복리 우선·실제 양육자 반영·장래양육비 기간 직권 결정을 검토해볼 수 있습니다.',
        takeaway: '주 양육자 + 친권 + 양육비 기간 결합 시 자의 복리 우선 양육자 지정·실제 양육 상황 변화 반영 양육비 기간 재조정·청구에 구애받지 않는 직권 결정 검토 영역 — 변호사 상담·가정법원 양육자 지정·양육비 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그동안 아이를 키워 온 사람이 양육자로 정해지나요?',
        answer:
          '<strong>실제 양육 실태는 중요하게 고려되지만 결국 자의 복리를 우선해 양육자를 정하는 영역입니다.</strong> 양육 실태·환경 자료를 정리.',
      },
      {
        question: '양육자와 친권자는 무엇을 기준으로 정하나요?',
        answer:
          '<strong>아이의 복리를 가장 중요한 기준으로 삼아 정하는 영역입니다.</strong> 양육 환경·돌봄 자료를 정리.',
      },
      {
        question: '양육비는 언제까지 지급하도록 정해지나요?',
        answer:
          '<strong>법원이 직권으로 분담 기간을 정할 수 있고 통상 자녀 성년 전날까지를 종기로 정하는 영역입니다.</strong> 양육비·소득 자료를 정리.',
      },
      {
        question: '실제 양육 상황이 바뀌면 양육비 기간도 달라지나요?',
        answer:
          '<strong>일정 시점 이후 실제로 양육하지 않는 사실이 확인되면 양육비 기간이 다시 정해질 수 있는 영역입니다.</strong> 양육 변화 정황 자료를 정리.',
      },
      {
        question: '제가 청구한 것과 다르게 법원이 정할 수도 있나요?',
        answer:
          '<strong>자의 복리를 위해 청구에 구애받지 않고 직권으로 양육 사항을 정할 수 있는 영역입니다.</strong> 양육 관련 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: 'divorce 도메인 허브', href: '/guide/divorce' },
      { label: '아버지 양육권 전략', href: '/guide/divorce/divorce-child-custody-father-strategy' },
      { label: '양육권 친권 절차', href: '/guide/divorce/divorce-child-custody-parental-procedure-track' },
      { label: '청소년 자녀 의사', href: '/guide/divorce/divorce-child-custody-teen-preference' },
      { label: '협의 후 양육비 미지급 변경', href: '/guide/divorce/divorce-after-agreement-child-support-unpaid-modification' },
    ],
  },

  // ─── 5. defamation-open-chat-false-fact-spread-report-track ───
  {
    domain: 'defamation',
    slug: 'defamation-open-chat-false-fact-spread-report-track',
    keyword: '오픈채팅방 허위사실 유포 명예훼손 신고',
    questionKeyword:
      '오픈채팅방에서 누군가 저에 관한 허위사실을 퍼뜨려 명예가 크게 훼손됐는데 어떻게 신고하고 따져야 할지 막막해요. 정보통신망 명예훼손이 되려면 비방할 목적이 따로 있어야 하는지, 사회적 평가를 떨어뜨리는 내용이면 비방 목적이 당연히 인정되는지, 그 목적이 누구의 증명 책임인지 점검해볼 수 있나요?',
    ctaKeyword: '오픈채팅방 허위사실 유포 명예훼손·비방 목적 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '오픈채팅방 허위사실 유포 명예훼손 — 5단계 비방 목적·증명 점검 | 로앤가이드',
      description:
        '오픈채팅방 허위사실 유포로 명예가 훼손됐다면, 정보통신망법 제70조 비방 목적 별개 구성요건과 공익 시 비방 목적 부정·증명책임 검사 부담 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 사람이 모여 있는 오픈채팅방에서 누군가 저에 관하여 사실과 다른 허위의 이야기를 퍼뜨려, 그 글을 본 사람들 사이에서 저에 대한 평판이 한순간에 무너지고 마음에 깊은 상처까지 입게 된 상황입니다. 처음에는 곧 가라앉겠거니 했는데 그 이야기가 채팅방을 넘어 자꾸 퍼져 나가니, 정작 \'이걸 어떻게 신고하고 따져야 하는 것인지\'부터 막막합니다. 우선 인터넷·채팅방 같은 정보통신망에서 벌어진 명예훼손이 인정되려면, 단순히 제 사회적 평가를 떨어뜨리는 내용이라는 것만으로 충분한지, 아니면 상대방에게 따로 \'비방할 목적\'까지 있어야 하는 것인지부터 모르겠습니다. 또 만약 그 내용이 제 평판을 깎아내리는 것이라면, 그것만으로 비방할 목적이 당연히 있는 것으로 인정되는 것인지 헷갈립니다. 더구나 그 비방할 목적이라는 것이 있었는지는 도대체 누가 증명해야 하는 것인지, 그리고 이런 상황에서 어디서부터 어떻게 정리해 나가야 하는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항은 사람을 비방할 목적으로 정보통신망을 통하여 공공연하게 사실을 드러내어 다른 사람의 명예를 훼손한 자를 처벌하는 영역입니다. 판례는 이 규정에 따른 범죄가 성립하려면 피고인이 공공연하게 드러낸 사실이 다른 사람의 사회적 평가를 떨어트릴 만한 것임을 인식해야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적이 있는지는 드러낸 사실이 사회적 평가를 떨어트릴 만한 것인지와 별개의 구성요건으로서 드러낸 사실이 사회적 평가를 떨어트리는 것이라고 해서 비방할 목적이 당연히 인정되는 것은 아니며, 비방할 목적은 공공의 이익을 위한 것과는 서로 상반되는 관계에 있으므로 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부인되고, 이 규정에서 정한 모든 구성요건에 대한 증명책임은 검사에게 있다고 본 사례 흐름이 있는 영역입니다. 오픈채팅방 + 허위사실 유포 + 정보통신망 명예훼손 결합은 \'허위 인식·비방 목적 별개·공익 시 비방 목적 부정·증명책임 검사 부담\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시·확산 보존 ② 사실 적시 ③ 비방 목적 ④ 공익·증명 ⑤ 신고 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 목적 ④ 증명 ⑤ 신고 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 오픈채팅방 허위사실 유포 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시·확산 보존·사실 적시·비방 목적·공익·증명·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시·확산 보존</strong> — 오픈채팅방 게시 내용·시점·계정·확산 경로 보존.</li>\n<li><strong>② 사실 적시</strong> — 사회적 평가를 떨어뜨릴 사실을 공공연히 드러냈는지 정리.</li>\n<li><strong>③ 비방 목적</strong> — 사회적 평가 저하와 별개로 비방할 목적이 있는지 정리.</li>\n<li><strong>④ 공익·증명</strong> — 공익 관련 시 비방 목적이 부인되는지, 증명책임은 검사에게 있는지 검토.</li>\n<li><strong>⑤ 신고</strong> — 고소·증거 제출·삭제 요청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 정보통신망법 제70조 명예훼손은 사회적 평가를 떨어뜨릴 사실의 인식과 별개로 비방할 목적이 있어야 하고, 사회적 평가를 떨어뜨리는 내용이라고 비방 목적이 당연히 인정되는 것은 아니며 공익 관련 시 비방 목적이 부인되고 모든 구성요건의 증명책임은 검사에게 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시·확산 보존 (즉시)</strong> — 오픈채팅방 게시 내용·시점·계정·확산 경로 자료 보존.</li>\n<li><strong>2단계 — 사실 적시·비방 목적 정리 (1주)</strong> — 사회적 평가 저하 사실, 비방 목적 정황 정리.</li>\n<li><strong>3단계 — 공익·증명 정리 (2주)</strong> — 공익 관련성 여부, 증명책임 구조 정리.</li>\n<li><strong>4단계 — 고소·삭제 요청 (조사 시)</strong> — 고소·증거 제출, 게시물 삭제·차단 요청.</li>\n<li><strong>5단계 — 합의·대응 (병행)</strong> — 합의·손해배상 등 후속 대응 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 삭제·합의·방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">오픈채팅방 허위사실 유포 명예훼손·비방 목적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·비방 목적·공익·증명 갈래입니다.</strong></p>\n<ul>\n<li><strong>오픈채팅방 게시 화면 캡처 자료 (적시 행위)</strong></li>\n<li><strong>게시 시점·계정·대화 맥락 자료 (작성자 특정)</strong></li>\n<li><strong>허위사실 여부·반박 근거 자료 (허위성)</strong></li>\n<li><strong>참여 인원·확산 경로 자료 (공연성)</strong></li>\n<li><strong>비방 목적 정황·표현 방법 자료 (비방 목적)</strong></li>\n<li><strong>명예·평판 훼손 정황 자료 (피해)</strong></li>\n<li><strong>고소장·증거 목록 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정보통신망법 명예훼손은 비방할 목적이 별개의 구성요건이고 그 증명책임이 검사에게 있으므로 게시 내용·시점·계정·확산 경로를 원형대로 보존하는 것이 핵심. 공익 관련 시 비방 목적이 부인될 수 있으므로 표현 방법·맥락과 명예·평판 훼손 정황 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비방 목적</strong> — 사회적 평가 저하와 별개로 비방할 목적이 인정되는지.</li>\n<li><strong>당연 인정 여부</strong> — 평판 저하 내용이라고 비방 목적이 당연히 인정되지는 않는지.</li>\n<li><strong>공익 관련성</strong> — 공익에 관한 것이면 비방 목적이 부인되는지.</li>\n<li><strong>증명책임</strong> — 모든 구성요건의 증명책임이 검사에게 있는지.</li>\n<li><strong>공연성</strong> — 오픈채팅방 게시가 불특정 다수에게 전파될 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 112 (사이버범죄 신고)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 명예훼손의 비방 목적 별개 구성요건과 증명책임',
        summary:
          '대법원 2022도699(대법원, 2024.01.04 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항에 따른 범죄가 성립하려면 피고인이 공공연하게 드러낸 사실이 다른 사람의 사회적 평가를 떨어트릴 만한 것임을 인식해야 할 뿐만 아니라 사람을 비방할 목적이 있어야 한다고 보았습니다. 또한 비방할 목적이 있는지는 드러낸 사실이 사회적 평가를 떨어트릴 만한 것인지와 별개의 구성요건으로서 드러낸 사실이 사회적 평가를 떨어트리는 것이라고 해서 비방할 목적이 당연히 인정되는 것은 아니고, 이 규정에서 정한 모든 구성요건에 대한 증명책임은 검사에게 있으며, 비방할 목적은 공공의 이익을 위한 것과 행위자의 주관적 의도의 방향에서 서로 상반되는 관계에 있으므로 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부인된다고 판시했습니다. 오픈채팅방에서 허위사실을 유포해 명예가 훼손된 사안에서도 허위 인식·비방 목적 별개·공익 시 비방 목적 부정·증명책임 검사 부담을 검토해볼 수 있습니다.',
        takeaway: '오픈채팅방 + 허위사실 유포 + 정보통신망 명예훼손 결합 시 비방 목적 별개 구성요건·평판 저하만으로 비방 목적 당연 인정 부정·공익 관련 시 비방 목적 부인·증명책임 검사 부담 검토 영역 — 변호사 상담·고소·증거 보존 검토 권장.',
      },
    ],
    faq: [
      {
        question: '오픈채팅방 허위사실 유포도 명예훼손으로 신고할 수 있나요?',
        answer:
          '<strong>정보통신망에서 비방 목적으로 사실을 드러내 명예를 훼손했는지로 따져 검토되는 영역입니다.</strong> 게시·확산 자료를 정리.',
      },
      {
        question: '제 평판을 떨어뜨리는 내용이면 비방 목적이 당연히 인정되나요?',
        answer:
          '<strong>사회적 평가 저하와 비방 목적은 별개 구성요건이라 당연히 인정되는 것은 아닌 영역입니다.</strong> 비방 목적 정황 자료를 정리.',
      },
      {
        question: '비방할 목적은 누가 증명해야 하나요?',
        answer:
          '<strong>모든 구성요건에 대한 증명책임은 검사에게 있는 영역입니다.</strong> 정황·맥락 자료를 정리.',
      },
      {
        question: '오픈채팅방 게시도 공연성이 인정되나요?',
        answer:
          '<strong>불특정 다수에게 전파될 가능성 등으로 공연성을 따져 검토하는 영역입니다.</strong> 참여 인원·확산 자료를 정리.',
      },
      {
        question: '게시물은 어떻게 보존하나요?',
        answer:
          '<strong>게시 화면·시점·계정·대화 맥락을 캡처로 원형 그대로 저장해 두는 것이 좋은 영역입니다.</strong> 캡처·정황 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 삭제·합의·방어 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: 'defamation 도메인 허브', href: '/guide/defamation' },
      { label: '오픈채팅방 소문 확산', href: '/guide/defamation/defamation-open-chat-room-spread-rumor-track' },
      { label: '익명 카페 허위사실', href: '/guide/defamation/defamation-anonymous-cafe-false-fact-network-act-track' },
      { label: '단체채팅 허위사실 전송', href: '/guide/defamation/defamation-groupchat-false-fact-transmission-public-victim-track' },
      { label: 'SNS 스토리 재게시 확산', href: '/guide/defamation/defamation-sns-story-repost-spread-report-track' },
    ],
  },

  // ─── 6. defamation-workplace-coworker-false-rumor-report-track ───
  {
    domain: 'defamation',
    slug: 'defamation-workplace-coworker-false-rumor-report-track',
    keyword: '직장 동료 허위 소문 명예훼손 신고',
    questionKeyword:
      '직장 동료가 단체 채팅방에 저에 관한 허위 소문을 올려 회사 안에서 평판이 무너졌는데 어떻게 신고하고 따져야 할지 막막해요. 정보통신망 명예훼손이 되려면 비방할 목적이 따로 있어야 하는지, 동료들에게 알리는 것이 공공의 이익에 관한 것이면 비방 목적이 부정되는지, 그 사람의 주된 목적이 공익이면 사익이 섞여도 처벌을 면하는지 점검해볼 수 있나요?',
    ctaKeyword: '직장 동료 허위 소문 명예훼손·비방 목적 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 허위 소문 명예훼손 — 5단계 비방 목적·공익 점검 | 로앤가이드',
      description:
        '직장 동료의 허위 소문으로 평판이 무너졌다면, 정보통신망법 제70조 비방 목적 별개 구성요건과 공익 관련 시 비방 목적 부정·주된 동기 공익 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 직장에서 일하는 동료가 회사 단체 채팅방에 저에 관하여 사실과 다른 소문을 올려, 그 글을 본 동료들 사이에서 저에 대한 평판이 한순간에 무너지고 출근길마저 두려워질 만큼 마음에 깊은 상처를 입게 된 상황입니다. 매일 얼굴을 마주해야 하는 직장이라 더 막막한데, 정작 \'이걸 어떻게 신고하고 따져야 하는 것인지\'부터 가늠이 안 됩니다. 우선 회사 채팅방 같은 정보통신망에서 벌어진 명예훼손이 인정되려면, 단순히 제 평판을 떨어뜨리는 내용이라는 것만으로 충분한지, 아니면 상대방에게 따로 \'비방할 목적\'까지 있어야 하는 것인지부터 모르겠습니다. 또 상대방이 \'다 같이 알아야 할 일이라 알린 것\'이라고 우길 텐데, 그렇게 동료들에게 알린 것이 공공의 이익에 관한 것으로 여겨지면 비방할 목적이 부정되어 처벌을 피하게 되는 것인지 헷갈립니다. 더구나 그 사람의 주된 목적이 공익을 위한 것이라면, 거기에 저를 깎아내리려는 사사로운 마음이 조금 섞여 있더라도 처벌을 면하게 되는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항은 사람을 비방할 목적으로 정보통신망을 통하여 공공연하게 사실을 드러내어 다른 사람의 명예를 훼손한 자를 처벌하는 영역입니다. 판례는 이 규정에 따른 범죄가 성립하려면 드러낸 사실이 사회적 평가를 떨어트릴 만한 것임을 인식해야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적은 드러낸 사실이 사회적 평가를 떨어트릴 만한 것인지와 별개의 구성요건으로서 평가를 떨어트리는 것이라고 해서 당연히 인정되는 것은 아니며, 비방할 목적은 공공의 이익을 위한 것과 행위자의 주관적 의도의 방향에서 서로 상반되므로 드러낸 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부정되고, 행위자의 주요한 동기와 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 포함되어 있더라도 비방할 목적이 있다고 보기 어렵다고 본 사례 흐름이 있는 영역입니다. 직장 동료 + 허위 소문 + 정보통신망 명예훼손 결합은 \'비방 목적 별개 구성요건·공익 관련 시 비방 목적 부정·주된 동기 공익이면 사익 부수 무방\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시·확산 보존 ② 사실 적시 ③ 비방 목적 ④ 공익·동기 ⑤ 신고 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 목적 ④ 동기 ⑤ 신고 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 동료 허위 소문 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시·확산 보존·사실 적시·비방 목적·공익·동기·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시·확산 보존</strong> — 회사 채팅방 게시 내용·시점·작성자·확산 경로 보존.</li>\n<li><strong>② 사실 적시</strong> — 사회적 평가를 떨어뜨릴 사실을 공공연히 드러냈는지 정리.</li>\n<li><strong>③ 비방 목적</strong> — 사회적 평가 저하와 별개로 비방할 목적이 있는지 정리.</li>\n<li><strong>④ 공익·동기</strong> — 공익 관련 시 비방 목적이 부정되는지, 주된 동기가 공익인지 검토.</li>\n<li><strong>⑤ 신고</strong> — 고소·증거 제출·삭제 요청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 정보통신망법 제70조 명예훼손은 평판 저하 사실의 인식과 별개로 비방할 목적이 있어야 하고, 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부정되며 행위자의 주요한 동기와 목적이 공익을 위한 것이면 부수적 사익이 섞여 있어도 비방 목적이 인정되기 어려운 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시·확산 보존 (즉시)</strong> — 회사 채팅방 게시 내용·시점·작성자·확산 경로 자료 보존.</li>\n<li><strong>2단계 — 사실 적시·비방 목적 정리 (1주)</strong> — 평판 저하 사실, 비방 목적 정황 정리.</li>\n<li><strong>3단계 — 공익·동기 정리 (2주)</strong> — 공익 관련성·주된 동기 여부 정리.</li>\n<li><strong>4단계 — 고소·삭제 요청 (조사 시)</strong> — 고소·증거 제출, 게시물 삭제·정정 요청.</li>\n<li><strong>5단계 — 합의·대응 (병행)</strong> — 합의·손해배상 등 후속 대응 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 삭제·합의·방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 동료 허위 소문 명예훼손·비방 목적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·비방 목적·공익·동기 갈래입니다.</strong></p>\n<ul>\n<li><strong>회사 채팅방 게시 화면 캡처 자료 (적시 행위)</strong></li>\n<li><strong>게시 시점·작성자·대화 맥락 자료 (작성자 특정)</strong></li>\n<li><strong>허위 소문 여부·반박 근거 자료 (허위성)</strong></li>\n<li><strong>참여 인원·확산 경로 자료 (공연성)</strong></li>\n<li><strong>비방 목적·공익 관련성 정황 자료 (목적·동기)</strong></li>\n<li><strong>평판·업무 피해 정황 자료 (피해)</strong></li>\n<li><strong>고소장·증거 목록 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정보통신망법 명예훼손은 비방할 목적이 별개 구성요건이고 공익 관련 시 부정될 수 있으므로 게시 내용·시점·작성자·확산 경로를 원형대로 보존하는 것이 핵심. 상대방이 공익을 내세울 수 있으므로 표현 방법·맥락과 평판·업무 피해 정황 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비방 목적</strong> — 평판 저하와 별개로 비방할 목적이 인정되는지.</li>\n<li><strong>공익 관련성</strong> — 동료들에게 알린 것이 공공의 이익에 관한 것인지.</li>\n<li><strong>주된 동기</strong> — 주된 동기가 공익이면 사익이 섞여도 비방 목적이 부정되는지.</li>\n<li><strong>허위성</strong> — 소문이 사실과 다른 허위인지.</li>\n<li><strong>공연성</strong> — 회사 채팅방 게시가 다수에게 전파될 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 112 (사이버범죄 신고)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 명예훼손의 비방 목적과 공공의 이익',
        summary:
          '대법원 2022도4171(대법원, 2022.07.28 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항에 따른 범죄가 성립하려면 드러낸 사실이 사회적 평가를 떨어트릴 만한 것임을 인식해야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적은 드러낸 사실이 사회적 평가를 떨어트릴 만한 것인지와 별개의 구성요건으로서 평가를 떨어트리는 것이라고 해서 당연히 인정되는 것은 아니며 모든 구성요건의 증명책임은 검사에게 있다고 보았습니다. 또한 비방할 목적은 공공의 이익을 위한 것과 행위자의 주관적 의도라는 방향에서 상반되므로 드러낸 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부정되고, 행위자의 주요한 동기와 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 포함되어 있더라도 비방할 목적이 있다고 보기 어렵다고 판시했습니다. 직장 동료가 채팅방에 허위 소문을 올려 명예가 훼손된 사안에서도 비방 목적 별개 구성요건·공익 관련 시 비방 목적 부정·주된 동기 공익이면 사익 부수 무방을 검토해볼 수 있습니다.',
        takeaway: '직장 동료 + 허위 소문 + 정보통신망 명예훼손 결합 시 비방 목적 별개 구성요건·공익 관련 시 비방 목적 부정·주된 동기 공익이면 부수 사익 무방·증명책임 검사 부담 검토 영역 — 변호사 상담·고소·증거 보존 검토 권장.',
      },
    ],
    faq: [
      {
        question: '직장 동료의 허위 소문도 명예훼손으로 신고할 수 있나요?',
        answer:
          '<strong>정보통신망에서 비방 목적으로 사실을 드러내 명예를 훼손했는지로 따져 검토되는 영역입니다.</strong> 게시·확산 자료를 정리.',
      },
      {
        question: '상대방이 공익을 위해 알린 것이라고 하면 처벌을 피하나요?',
        answer:
          '<strong>공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부정될 수 있는 영역입니다.</strong> 공익 관련성·맥락 자료를 정리.',
      },
      {
        question: '주된 목적이 공익이면 사익이 섞여도 처벌을 면하나요?',
        answer:
          '<strong>주된 동기가 공익이면 부수적 사익이 포함돼도 비방 목적이 인정되기 어려운 영역입니다.</strong> 동기·정황 자료를 정리.',
      },
      {
        question: '평판을 떨어뜨리는 내용이면 비방 목적이 당연히 인정되나요?',
        answer:
          '<strong>사회적 평가 저하와 비방 목적은 별개 구성요건이라 당연히 인정되는 것은 아닌 영역입니다.</strong> 비방 목적 정황 자료를 정리.',
      },
      {
        question: '회사 채팅방 글은 어떻게 보존하나요?',
        answer:
          '<strong>게시 화면·시점·작성자·대화 맥락을 캡처로 원형 그대로 저장해 두는 것이 좋은 영역입니다.</strong> 캡처·정황 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 삭제·합의·방어 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: 'defamation 도메인 허브', href: '/guide/defamation' },
      { label: '직장 허위 소문 명예훼손', href: '/guide/defamation/defamation-false-rumor-workplace-claim' },
      { label: '직장 소문 확산 대응', href: '/guide/defamation/defamation-workplace-rumor-response' },
      { label: '직장 소문 고소 준비', href: '/guide/defamation/defamation-workplace-rumor-complaint-prep' },
      { label: '익명 카페 허위사실', href: '/guide/defamation/defamation-anonymous-cafe-false-fact-network-act-track' },
    ],
  },

  // ─── 7. defamation-youtube-comment-insult-report-track ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-insult-report-track',
    keyword: '유튜브 댓글 모욕 명예훼손 신고',
    questionKeyword:
      '유튜브 영상 댓글에서 누군가 저를 모욕하고 명예를 훼손하는 글을 남겨 어떻게 신고하고 따져야 할지 막막해요. 명예훼손·모욕이 되려면 공연성이 인정돼야 한다는데 그건 어떻게 증명되는지, 전파가능성을 이유로 공연성을 인정할 때 고의는 어떻게 따지는지, 특정 소수에게만 한 표현은 공연성이 부정될 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '유튜브 댓글 모욕 명예훼손·공연성 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유튜브 댓글 모욕 명예훼손 — 5단계 공연성·전파가능성 점검 | 로앤가이드',
      description:
        '유튜브 댓글 모욕·명예훼손으로 신고를 고민한다면, 공연성의 엄격한 증명과 전파가능성을 이유로 한 공연성 인정 시 미필적 고의 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 올린 유튜브 영상이나 제가 등장하는 영상의 댓글에, 누군가 저를 모욕하고 명예를 깎아내리는 글을 남겨, 그 댓글을 본 사람들 앞에서 한순간에 망신을 당하고 마음에 깊은 상처까지 입게 된 상황입니다. 댓글 하나라고 넘기기엔 그 글이 계속 남아 더 많은 사람에게 보이니, 정작 \'이걸 어떻게 신고하고 따져야 하는 것인지\'부터 막막합니다. 우선 명예훼손이나 모욕이 인정되려면 \'공연성\'이라는 것이 있어야 한다고 들었는데, 그 공연성이라는 것이 도대체 무엇이고 어떻게 증명되는 것인지부터 모르겠습니다. 또 직접 여러 사람에게 퍼뜨린 것이 아니라 댓글 하나를 남긴 것인데, \'그 글이 퍼질 가능성이 있었다\'는 이유로 공연성이 인정되는 경우에는, 그 사람에게 그런 결과를 받아들이려는 고의가 있었는지를 도대체 어떻게 따지는 것인지 헷갈립니다. 더구나 특정한 소수에게만 한 표현이라면 공연성이 부정되어 처벌이 어려워지는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 형법 제307조와 제311조는 명예훼손죄와 모욕죄를 정하고, 공연성은 두 죄의 공통 구성요건인 영역입니다. 판례는 공연성은 명예훼손죄와 모욕죄의 구성요건으로서 명예훼손이나 모욕에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정되는 유력한 사정이 될 수 있으므로 전파될 가능성에 관해서는 검사의 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성을 인정하는 경우에는 적어도 범죄구성요건의 주관적 요소로서 미필적 고의가 필요하므로 전파가능성에 대한 인식이 있음은 물론 나아가 위험을 용인하는 내심의 의사가 있어야 하며, 공연성의 존부는 발언자와 상대방 또는 피해자 사이의 관계나 지위, 대화를 하게 된 경위와 상황, 사실적시의 내용, 적시의 방법과 장소 등 행위 당시의 객관적 사정을 심리한 다음 상대방이 불특정인 또는 다수인에게 전파할 가능성이 있는지를 검토하여 종합적으로 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 유튜브 댓글 + 모욕·명예훼손 + 공연성 결합은 \'공연성 엄격 증명·전파가능성 미필적 고의·대응 과정 발언 신중 판단\' 다툼이 가능한 트랙입니다. 당사자라면 ① 댓글·노출 보존 ② 표현 적시 ③ 공연성 ④ 전파가능성·고의 ⑤ 신고 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 고의 ⑤ 신고 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유튜브 댓글 모욕 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 댓글·노출 보존·표현 적시·공연성·전파가능성·고의·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 댓글·노출 보존</strong> — 댓글 내용·시점·계정·영상 URL·노출 정황 보존.</li>\n<li><strong>② 표현 적시</strong> — 모욕·명예훼손에 해당하는 표현·사실 적시인지 정리.</li>\n<li><strong>③ 공연성</strong> — 불특정·다수에게 전파될 가능성이 있었는지 정리.</li>\n<li><strong>④ 전파가능성·고의</strong> — 전파가능성 인식과 위험을 용인하는 내심의 의사가 있었는지 검토.</li>\n<li><strong>⑤ 신고</strong> — 고소·증거 제출·삭제 요청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 공연성은 특정 소수에게 한 표현이면 부정되는 유력한 사정이 되어 전파가능성에 검사의 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성을 인정하려면 미필적 고의로서 전파가능성 인식과 위험을 용인하는 내심의 의사가 있어야 하며 관계·경위·내용·방법 등 객관적 사정을 종합해 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글·노출 보존 (즉시)</strong> — 댓글 내용·시점·계정·영상 URL·노출 정황 자료 보존.</li>\n<li><strong>2단계 — 표현·공연성 정리 (1주)</strong> — 모욕·명예훼손 표현, 전파가능성·공연성 정황 정리.</li>\n<li><strong>3단계 — 전파가능성·고의 정리 (2주)</strong> — 관계·경위·방법 등 미필적 고의 정황 정리.</li>\n<li><strong>4단계 — 고소·삭제 요청 (조사 시)</strong> — 고소·증거 제출, 댓글 삭제·신고 요청.</li>\n<li><strong>5단계 — 합의·대응 (병행)</strong> — 합의·손해배상 등 후속 대응 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 삭제·합의·방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유튜브 댓글 모욕 명예훼손·공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 표현 적시·공연성·전파가능성·고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>댓글 화면 캡처·영상 URL 자료 (적시 행위)</strong></li>\n<li><strong>댓글 시점·계정·닉네임 자료 (작성자 특정)</strong></li>\n<li><strong>모욕·명예훼손 표현 내용 자료 (구성요건)</strong></li>\n<li><strong>조회수·노출·댓글 반응 자료 (공연성·전파가능성)</strong></li>\n<li><strong>작성 경위·맥락 자료 (미필적 고의)</strong></li>\n<li><strong>명예·평판 훼손 정황 자료 (피해)</strong></li>\n<li><strong>고소장·증거 목록 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공연성은 전파될 가능성에 검사의 엄격한 증명이 필요하므로 댓글 내용·시점·계정·노출 정황을 원형대로 보존하는 것이 핵심. 전파가능성을 이유로 공연성을 인정하려면 미필적 고의가 필요하므로 작성 경위·맥락과 명예·평판 훼손 정황 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정·다수에게 전파될 가능성이 있었는지.</li>\n<li><strong>엄격한 증명</strong> — 전파될 가능성에 검사의 엄격한 증명이 필요한지.</li>\n<li><strong>미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사가 있었는지.</li>\n<li><strong>특정 소수</strong> — 특정 소수에게 한 표현이면 공연성이 부정될 수 있는지.</li>\n<li><strong>모욕·명예훼손 구분</strong> — 표현이 모욕인지 사실 적시 명예훼손인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 112 (사이버범죄 신고)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예훼손·모욕의 공연성과 전파가능성 미필적 고의',
        summary:
          '대법원 2020도8336(대법원, 2022.07.28 선고) 영역에서 법원은 공연성은 명예훼손죄와 모욕죄의 구성요건으로서 명예훼손이나 모욕에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정되는 유력한 사정이 될 수 있으므로 전파될 가능성에 관해서는 검사의 엄격한 증명이 필요하다고 보았습니다. 또한 전파가능성을 이유로 공연성을 인정하는 경우에는 적어도 범죄구성요건의 주관적 요소로서 미필적 고의가 필요하므로 전파가능성에 대한 인식이 있음은 물론 나아가 위험을 용인하는 내심의 의사가 있어야 하고, 공적·사적 관계에서 사실의 확인이나 규명 과정 또는 상대방의 가해에 대응하는 과정에서 발언하게 된 경우 등이라면 전파가능성에 대한 인식과 위험을 용인하는 내심의 의사를 인정하는 것은 신중하여야 하며, 공연성의 존부는 발언자와 상대방의 관계·지위, 대화 경위와 상황, 사실적시의 내용, 적시의 방법과 장소 등 객관적 사정을 심리한 다음 전파 가능성이 있는지를 종합적으로 판단해야 한다고 판시했습니다. 유튜브 댓글로 모욕·명예훼손을 당한 사안에서도 공연성 엄격 증명·전파가능성 미필적 고의·대응 과정 발언 신중 판단을 검토해볼 수 있습니다.',
        takeaway: '유튜브 댓글 + 모욕·명예훼손 + 공연성 결합 시 공연성의 엄격한 증명·전파가능성 인정 시 미필적 고의 필요·대응 과정 발언 신중 판단·객관적 사정 종합 검토 영역 — 변호사 상담·고소·증거 보존 검토 권장.',
      },
    ],
    faq: [
      {
        question: '유튜브 댓글 모욕·명예훼손도 신고할 수 있나요?',
        answer:
          '<strong>공연성 등 구성요건을 갖췄는지로 따져 신고를 검토할 수 있는 영역입니다.</strong> 댓글·노출 자료를 정리.',
      },
      {
        question: '공연성은 어떻게 증명되나요?',
        answer:
          '<strong>전파될 가능성에 관해서는 검사의 엄격한 증명이 필요한 영역입니다.</strong> 노출·전파 정황 자료를 정리.',
      },
      {
        question: '댓글 하나도 퍼질 가능성이 있으면 공연성이 인정되나요?',
        answer:
          '<strong>전파가능성을 이유로 인정하려면 위험을 용인하는 미필적 고의가 있어야 하는 영역입니다.</strong> 작성 경위·맥락 자료를 정리.',
      },
      {
        question: '특정 소수에게만 한 표현은 공연성이 부정되나요?',
        answer:
          '<strong>특정 소수에게 한 표현이면 공연성이 부정되는 유력한 사정이 될 수 있는 영역입니다.</strong> 상대 범위·정황 자료를 정리.',
      },
      {
        question: '댓글은 어떻게 보존하나요?',
        answer:
          '<strong>댓글 화면·시점·계정·영상 URL을 캡처로 원형 그대로 저장해 두는 것이 좋은 영역입니다.</strong> 캡처·URL 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 삭제·합의·방어 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: 'defamation 도메인 허브', href: '/guide/defamation' },
      { label: '유튜브 댓글 모욕', href: '/guide/defamation/defamation-youtube-comment-insult-track' },
      { label: '유튜브 익명 악플', href: '/guide/defamation/defamation-youtube-comment-anonymous-malicious-victim-track' },
      { label: '유튜브 댓글 피해 고소', href: '/guide/defamation/defamation-youtube-comment-victim-complaint' },
      { label: '모욕 vs 명예훼손 구분', href: '/guide/defamation/defamation-company-chat-insult-vs-defamation' },
    ],
  },

  // ─── 8. defamation-consumer-complaint-truth-public-interest-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-consumer-complaint-truth-public-interest-falsely-accused-defense',
    keyword: '소비자 고발글 진실 공익 위법성 조각 방어',
    questionKeyword:
      '제가 직접 겪은 피해를 소비자 고발글이나 후기 형태로 올렸다가 명예훼손·모욕으로 고소당해 혐의를 받고 있는데 어떻게 방어해야 할지 막막해요. 진실한 사실을 오로지 공공의 이익을 위해 적시한 경우 위법성이 조각되는지, 제 손해를 알리려는 사익이 조금 섞여도 공익이 인정되는지, 다소 무례한 표현이 모욕이 되는지 점검해볼 수 있나요?',
    ctaKeyword: '소비자 고발글 진실 공익 위법성 조각·방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '소비자 고발글 진실 공익 위법성 조각 — 5단계 진실·공익 방어 점검 | 로앤가이드',
      description:
        '직접 겪은 피해를 고발글로 올렸다가 명예훼손으로 고소당해 혐의를 받고 있다면, 형법 제310조 진실한 사실·오로지 공익과 부수적 사익 무방·모욕 경미 표현 비해당 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 직접 겪은 부당한 피해나 문제를 다른 소비자들도 알아야겠다는 마음에 고발글이나 솔직한 후기 형태로 알렸을 뿐인데, 그 일로 도리어 명예훼손이나 모욕으로 고소를 당해 지금 혐의를 받고 있는 상황입니다. 사실대로 겪은 일을 알린 것뿐인데 거꾸로 제가 조사를 받게 되니 억울하고 막막한데, 정작 \'이 상황을 어떻게 방어해야 하는 것인지\'부터 가늠이 안 됩니다. 만약 사실과 다르게 신고되었다면 더욱 답답할 텐데, 우선 제가 알린 것이 사실이라 하더라도 그것이 \'진실한 사실로서 오로지 공공의 이익을 위한 것\'이라면 처벌을 면할 수 있는 것인지부터 모르겠습니다. 또 제가 그 글을 올린 데에는 다른 소비자의 피해를 막으려는 마음과 더불어 제가 입은 손해를 알리려는 마음도 함께 있었는데, 그렇게 사사로운 동기가 조금 섞여 있어도 공공의 이익으로 인정될 수 있는 것인지 헷갈립니다. 더구나 글을 쓰면서 다소 거칠거나 무례한 표현을 쓴 부분이 있다면, 그것만으로 모욕죄가 되는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 형법 제310조는 형법 제307조 제1항의 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하는 영역입니다. 혐의를 받고 있다면, 판례는 형법 제310조의 위법성조각사유 요건 중 \'진실한 사실\'이란 내용 전체의 취지를 살펴볼 때 중요한 부분이 객관적 사실과 합치되는 사실이라는 의미이고 \'오로지 공공의 이익에 관한 때\'란 적시된 사실이 객관적으로 볼 때 공공의 이익에 관한 것으로서 행위자도 주관적으로 공공의 이익을 위하여 사실을 적시한 경우를 의미하며, 행위자의 주요한 동기나 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없고, 모욕죄에서 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 부정적·비판적 의견을 나타내면서 경미한 수준의 추상적 표현이나 욕설이 사용된 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않는다고 본 사례 흐름이 있는 영역입니다. 진실 적시 + 공공의 이익 + 표현 결합은 \'진실한 사실·오로지 공익·사익 부수 무방·모욕 경미 표현 비해당\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시·근거 보존 ② 진실한 사실 ③ 공공의 이익 ④ 표현·모욕 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 진실 ③ 공익 ④ 표현 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 소비자 고발글 진실 공익 위법성 조각 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시·근거 보존·진실한 사실·공공의 이익·표현·모욕·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시·근거 보존</strong> — 고발글·후기 내용·시점·피해 근거·거래 자료 보존.</li>\n<li><strong>② 진실한 사실</strong> — 중요한 부분이 객관적 사실과 합치되는지 정리.</li>\n<li><strong>③ 공공의 이익</strong> — 다른 소비자 보호 등 공익을 위한 적시였는지 정리.</li>\n<li><strong>④ 표현·모욕</strong> — 무례·경미한 표현이 모욕죄에 해당하지 않는지 검토.</li>\n<li><strong>⑤ 대응</strong> — 진술·의견서·증거 제출 등 방어 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 형법 제310조는 중요한 부분이 객관적 사실과 합치되는 진실한 사실을 오로지 공공의 이익을 위해 적시한 경우 위법성을 조각하고 주요한 동기가 공익이면 부수적 사익이 섞여도 적용을 배제하지 않으며, 무례하거나 경미한 추상적 표현은 원칙적으로 모욕죄 구성요건에 해당하지 않는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시·근거 자료 보존 (즉시)</strong> — 고발글·후기 내용·시점·피해 근거·거래 자료 보존.</li>\n<li><strong>2단계 — 진실한 사실·공익 정리 (1주)</strong> — 객관적 사실 합치 여부, 공공의 이익 목적 정리.</li>\n<li><strong>3단계 — 표현·모욕 정리 (2주)</strong> — 표현 방법·무례·경미 표현의 모욕 해당 여부 정리.</li>\n<li><strong>4단계 — 진술·의견서 (조사 시)</strong> — 진술·의견서·증거 제출 등 방어 검토.</li>\n<li><strong>5단계 — 합의·대응 (병행)</strong> — 합의·후속 대응 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 삭제·합의·방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">소비자 고발글 진실 공익 위법성 조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실한 사실·공공의 이익·표현·모욕 갈래입니다.</strong></p>\n<ul>\n<li><strong>고발글·후기 내용·시점 자료 (적시 행위)</strong></li>\n<li><strong>피해·거래·계약 입증 근거 자료 (진실한 사실)</strong></li>\n<li><strong>사진·영수증·메시지 등 객관 자료 (사실 합치)</strong></li>\n<li><strong>다른 소비자 보호·공익 관련성 자료 (공익성)</strong></li>\n<li><strong>게시 동기·맥락 자료 (주된 동기 공익)</strong></li>\n<li><strong>표현 방법·전체 맥락 자료 (모욕 비해당)</strong></li>\n<li><strong>진술서·의견서·증거 목록 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형법 제310조 위법성조각은 중요한 부분이 객관적 사실과 합치되는지를 보므로 피해·거래 근거와 사진·영수증 등 객관 자료를 보존하는 것이 핵심. 주요한 동기가 공익이면 부수적 사익이 섞여도 적용이 배제되지 않으므로 게시 동기·맥락과 표현 방법 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실한 사실</strong> — 중요한 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>공공의 이익</strong> — 오로지 공공의 이익을 위한 적시인지.</li>\n<li><strong>부수적 사익</strong> — 주된 동기가 공익이면 사익이 섞여도 적용되는지.</li>\n<li><strong>모욕 해당</strong> — 무례·경미한 표현이 모욕죄에 해당하지 않는지.</li>\n<li><strong>위법성 조각</strong> — 제반 사정을 종합해 제310조로 위법성이 조각되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 112 (사건 문의)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형법 제310조 진실·공익 위법성조각과 모욕 표현',
        summary:
          '대법원 2024도14555(대법원, 2025.05.29 선고) 영역에서 법원은 형법 제310조의 위법성조각사유 요건 중 \'진실한 사실\'이란 내용 전체의 취지를 살펴볼 때 중요한 부분이 객관적 사실과 합치되는 사실이라는 의미이고, \'오로지 공공의 이익에 관한 때\'란 적시된 사실이 객관적으로 볼 때 공공의 이익에 관한 것으로서 행위자도 주관적으로 공공의 이익을 위하여 사실을 적시한 경우를 의미한다고 보았습니다. 또한 행위자의 주요한 동기나 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없다고 보았고, 모욕죄와 관련하여 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 상대방에 대한 부정적·비판적 의견이나 감정을 나타내면서 경미한 수준의 추상적 표현이나 욕설이 사용된 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않으며 모욕죄의 구성요건을 해석·적용할 때 개인의 인격권과 표현의 자유가 함께 고려되어야 한다고 판시했습니다. 직접 겪은 피해를 소비자 고발글로 올렸다가 고소당한 사안에서도 진실한 사실·오로지 공익·사익 부수 무방·모욕 경미 표현 비해당을 검토해볼 수 있습니다.',
        takeaway: '진실 적시 + 공공의 이익 + 표현 결합 시 중요 부분 객관적 사실 합치·오로지 공익 적시·주된 동기 공익이면 부수 사익 무방·경미 표현 모욕 비해당 검토 영역 — 변호사 상담·의견서·증거 제출 검토 권장.',
      },
    ],
    faq: [
      {
        question: '직접 겪은 피해를 사실대로 알렸다가 고소당했는데 처벌을 면할 수 있나요?',
        answer:
          '<strong>진실한 사실로서 오로지 공공의 이익에 관한 때에는 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</strong> 근거·공익 자료를 정리.',
      },
      {
        question: '제 손해를 알리려는 사익이 섞여 있어도 공익으로 인정되나요?',
        answer:
          '<strong>주된 동기가 공익이면 부수적 사익이 섞여 있어도 제310조 적용이 배제되지 않는 영역입니다.</strong> 동기·맥락 자료를 정리.',
      },
      {
        question: '세부에서 다소 어긋난 부분이 있어도 진실한 사실로 보나요?',
        answer:
          '<strong>중요한 부분이 객관적 사실과 합치되는지를 기준으로 판단하는 영역입니다.</strong> 사실 합치 근거 자료를 정리.',
      },
      {
        question: '다소 무례한 표현을 썼는데 모욕죄가 되나요?',
        answer:
          '<strong>무례하거나 경미한 추상적 표현은 원칙적으로 모욕죄 구성요건에 해당하지 않는 영역입니다.</strong> 표현 방법·맥락 자료를 정리.',
      },
      {
        question: '고소당해 혐의를 받고 있다면 무엇부터 준비하나요?',
        answer:
          '<strong>피해·거래 근거와 공익 동기·표현 맥락 자료를 먼저 정리해 두는 것이 좋은 영역입니다.</strong> 근거·동기 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 삭제·합의·방어 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: 'defamation 도메인 허브', href: '/guide/defamation' },
      { label: '소비자 공개 고발 방어', href: '/guide/defamation/defamation-customer-public-complaint-falsely-accused-defense' },
      { label: '구인 후기 공익 진실 방어', href: '/guide/defamation/defamation-job-review-platform-public-interest-truth-defense' },
      { label: '공익 진실 적시 방어', href: '/guide/defamation/defamation-public-interest-truth-falsely-accused-defense' },
      { label: '음식점 위생 폭로 공익 방어', href: '/guide/defamation/defamation-restaurant-hygiene-expose-public-interest-falsely-accused-defense' },
    ],
  },

  // ─── 9. inheritance-contribution-share-elderly-care-claim-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-contribution-share-elderly-care-claim-track',
    keyword: '고령 부모 부양 기여분 청구 판단',
    questionKeyword:
      '오랜 세월 고령의 부모님을 모시고 간병하며 부양해 왔는데 상속재산을 나눌 때 제 기여를 인정받아 기여분을 더 받을 수 있을지 막막해요. 장기간 동거·간병한 부양이 기여분으로 인정되는지, 통상의 부양을 넘는 \'특별한 부양\'이 무엇인지, 기여분은 무엇을 기준으로 어느 정도로 정해지는지 점검해볼 수 있나요?',
    ctaKeyword: '고령 부모 부양 기여분 청구·특별한 부양 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '고령 부모 부양 기여분 청구 — 5단계 특별한 부양·상속분 조정 점검 | 로앤가이드',
      description:
        '오랜 세월 부모를 모시고 간병한 기여분 청구가 고민이라면, 민법 제1008조의2 통상 부양을 넘는 특별한 부양과 실질적 공평을 위한 상속분 조정 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 세월 고령의 부모님을 곁에서 모시며, 거동이 불편해지신 뒤로는 병원이며 약이며 끼니까지 도맡아 간병하고 부양해 왔는데, 막상 부모님이 돌아가시고 상속재산을 나누려니 \'그동안 제가 들인 정성과 수고를 인정받아 다른 형제들보다 더 받을 수 있는 것인지\'부터 막막한 상황입니다. 다른 형제들은 따로 떨어져 지내며 거의 들여다보지도 않았는데 똑같이 나눠 갖는다고 하니 억울하기도 한데, 정작 \'그 기여분이라는 것을 어떻게 인정받는 것인지\'부터 모르겠습니다. 우선 제가 오랜 기간 부모님과 함께 살며 간병해 온 부양이, 기여분으로 인정받을 수 있는 것인지부터 헷갈립니다. 또 자식이라면 으레 하는 통상의 부양을 넘어서는 \'특별한 부양\'이어야 한다고 들었는데, 그 \'특별한 부양\'이라는 것이 도대체 어느 정도여야 하는 것인지 모르겠습니다. 더구나 그 기여분은 무엇을 기준으로, 어느 정도로 정해지는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 민법 제1008조의2는 공동상속인 중 피상속인을 특별히 부양하거나 재산의 유지·증가에 특별히 기여한 자에게 기여분을 인정하는 영역입니다. 판례는 가정법원이 기여분을 정할 때 동거·간호가 부부 사이의 제1차 부양의무 이행이나 자녀의 통상적인 부양을 넘어서 \'특별한 부양\'에 이르는지 여부와 더불어 동거·간호의 시기와 방법 및 정도, 부양비용의 부담 주체, 상속재산의 규모와 특별수익액, 다른 공동상속인의 숫자와 법정상속분 등 일체의 사정을 종합적으로 고려하여 공동상속인들 사이의 실질적 공평을 도모하기 위하여 상속분을 조정할 필요성이 인정되는지 여부를 가려서 기여분 인정 여부와 그 정도를 판단하여야 하고, 장기간 동거·간호에 따른 무형의 기여행위를 기여분을 인정하는 요소 중 하나로 적극적으로 고려할 수 있다고 본 사례 흐름이 있는 영역입니다. 고령 부모 + 부양·간병 + 기여분 결합은 \'통상 부양 넘는 특별한 부양·실질적 공평 위한 상속분 조정·일체 사정 종합 판단\' 다툼이 가능한 트랙입니다. 당사자라면 ① 부양·재산 파악 ② 특별한 부양 ③ 상속분 조정 ④ 기여분 산정 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 부양 ③ 조정 ④ 산정 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 고령 부모 부양 기여분 청구 판단 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 부양·재산 파악·특별한 부양·상속분 조정·기여분 산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부양·재산 파악</strong> — 동거·간병 기간·방법·비용 부담과 상속재산·특별수익 내역 파악.</li>\n<li><strong>② 특별한 부양</strong> — 통상의 부양을 넘는 특별한 부양에 이르는지 정리.</li>\n<li><strong>③ 상속분 조정</strong> — 실질적 공평을 위해 상속분 조정 필요성이 인정되는지 정리.</li>\n<li><strong>④ 기여분 산정</strong> — 일체의 사정을 종합해 기여분 인정 여부·정도를 검토.</li>\n<li><strong>⑤ 청구</strong> — 상속재산분할·기여분결정 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 기여분은 동거·간호가 통상의 부양을 넘어 특별한 부양에 이르는지와 더불어 동거·간호의 시기·방법·정도, 비용 부담 주체, 상속재산 규모·특별수익액, 다른 공동상속인의 수·법정상속분 등 일체의 사정을 종합해 실질적 공평을 위한 상속분 조정 필요성이 인정되는지로 정하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부양·재산 내역 확보 (즉시)</strong> — 동거·간병 기간·방법·비용 부담과 상속재산·특별수익 내역 자료 확보.</li>\n<li><strong>2단계 — 특별한 부양 정리 (1~2주)</strong> — 통상의 부양을 넘는 특별한 부양 정황 정리.</li>\n<li><strong>3단계 — 상속분 조정 정리 (2~3주)</strong> — 실질적 공평·상속분 조정 필요성·일체 사정 정리.</li>\n<li><strong>4단계 — 분할·기여분 청구 (소 제기 시)</strong> — 상속재산분할·기여분결정 청구.</li>\n<li><strong>5단계 — 심리·이행 (확정 후)</strong> — 기여분 인정·분할 심리 결과에 따른 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 기여분·한정승인, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">고령 부모 부양 기여분 청구·특별한 부양 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 특별한 부양·상속분 조정·기여분 산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·기본증명서 (상속인 확인)</strong></li>\n<li><strong>동거·주민등록·거주 자료 (동거 기간)</strong></li>\n<li><strong>간병·진료·요양 기록 자료 (간호 정도)</strong></li>\n<li><strong>부양·치료비 부담 내역 자료 (비용 부담)</strong></li>\n<li><strong>상속재산·특별수익 내역 자료 (재산 규모)</strong></li>\n<li><strong>다른 상속인·법정상속분 자료 (공평 판단)</strong></li>\n<li><strong>상속재산분할·기여분결정 청구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기여분은 통상의 부양을 넘는 특별한 부양에 이르렀는지를 보므로 동거·간병의 시기·방법·정도와 비용 부담을 시점별로 정리하는 것이 핵심. 상속재산 규모·특별수익·다른 상속인 수 등 일체의 사정으로 실질적 공평을 따지므로 재산·상속분 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특별한 부양</strong> — 동거·간병이 통상의 부양을 넘는 특별한 부양인지.</li>\n<li><strong>실질적 공평</strong> — 상속분 조정으로 공동상속인 간 실질적 공평을 도모하는지.</li>\n<li><strong>일체의 사정</strong> — 동거·간호 정도·비용·재산 규모 등을 종합하는지.</li>\n<li><strong>무형의 기여</strong> — 장기간 동거·간호의 무형의 기여가 고려되는지.</li>\n<li><strong>기여분 정도</strong> — 기여분 인정 여부와 그 정도를 어떻게 정하는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (상속재산분할·기여분결정 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 배우자 장기 동거·간호의 특별한 부양과 기여분 판단',
        summary:
          '대법원 2014스44(대법원, 2019.11.21 선고) 영역에서 법원은 배우자가 장기간 피상속인과 동거하면서 피상속인을 간호한 경우 민법 제1008조의2의 해석상 가정법원은 배우자의 동거·간호가 부부 사이의 제1차 부양의무 이행을 넘어서 \'특별한 부양\'에 이르는지 여부와 더불어 동거·간호의 시기와 방법 및 정도, 동거·간호에 따른 부양비용의 부담 주체, 상속재산의 규모와 배우자에 대한 특별수익액, 다른 공동상속인의 숫자와 배우자의 법정상속분 등 일체의 사정을 종합적으로 고려하여 공동상속인들 사이의 실질적 공평을 도모하기 위하여 배우자의 상속분을 조정할 필요성이 인정되는지 여부를 가려서 기여분 인정 여부와 그 정도를 판단하여야 한다고 보았습니다. 또한 배우자의 장기간 동거·간호에 따른 무형의 기여행위를 기여분을 인정하는 요소 중 하나로 적극적으로 고려할 수 있다고 판시했습니다. 오랜 세월 고령의 부모를 모시고 간병하며 부양한 사안에서도 통상 부양을 넘는 특별한 부양·실질적 공평을 위한 상속분 조정·일체 사정 종합 판단을 검토해볼 수 있습니다.',
        takeaway: '고령 부모 + 부양·간병 + 기여분 결합 시 통상 부양을 넘는 특별한 부양 여부·실질적 공평 위한 상속분 조정 필요성·일체 사정 종합 판단·무형 기여 고려 검토 영역 — 변호사 상담·가정법원 상속재산분할·기여분결정 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '오랜 세월 부모님을 모시고 간병했는데 기여분을 받을 수 있나요?',
        answer:
          '<strong>통상의 부양을 넘는 특별한 부양에 이르렀는지로 따져 기여분 인정을 검토하는 영역입니다.</strong> 동거·간병 자료를 정리.',
      },
      {
        question: '특별한 부양은 어느 정도여야 하나요?',
        answer:
          '<strong>자식이 으레 하는 통상의 부양을 넘어 실질적 공평을 위해 상속분 조정이 필요할 정도여야 하는 영역입니다.</strong> 부양 정도·비용 자료를 정리.',
      },
      {
        question: '기여분은 무엇을 기준으로 정하나요?',
        answer:
          '<strong>동거·간호의 시기·방법·정도, 재산 규모, 다른 상속인 수 등 일체의 사정을 종합해 정하는 영역입니다.</strong> 재산·상속분 자료를 정리.',
      },
      {
        question: '간병처럼 돈으로 따지기 어려운 기여도 인정되나요?',
        answer:
          '<strong>장기간 동거·간호에 따른 무형의 기여도 기여분 인정 요소로 고려될 수 있는 영역입니다.</strong> 간병·돌봄 기록 자료를 정리.',
      },
      {
        question: '기여분은 어떻게 청구하나요?',
        answer:
          '<strong>상속재산분할과 함께 가정법원에 기여분결정을 청구하는 영역입니다.</strong> 부양·재산 자료를 정리.',
      },
    ],
    cta: { text: '상속 기여분·한정승인, AI로 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: 'inheritance 도메인 허브', href: '/guide/inheritance' },
      { label: '기여분 청구', href: '/guide/inheritance/inheritance-contribution-share-claim-track' },
      { label: '10년 부양 기여분', href: '/guide/inheritance/inheritance-elder-care-decade-contribution-share-track' },
      { label: '간병 기여 입증', href: '/guide/inheritance/inheritance-contribution-share-caregiving-business-evidence' },
      { label: '부양 약속 불이행 유증', href: '/guide/inheritance/inheritance-bequest-care-promise-broken-track' },
    ],
  },

  // ─── 10. traffic-accident-bicycle-roadway-car-fault-ratio-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-roadway-car-fault-ratio-track',
    keyword: '자전거 차도 주행 사고 과실비율 판단',
    questionKeyword:
      '자전거를 타고 차도를 달리다 사고가 나 다쳤는데 과실비율과 손해배상·보험 처리를 어떻게 따져야 할지 막막해요. 자전거 사고도 보험에 가입돼 있으면 형사처벌 특례가 적용되는지, 손해배상금 전액을 보상하지 못하는 한도형 보험은 그 특례가 되는 보험으로 인정되는지, 전방주시 소홀 같은 과실은 어떻게 따지는지 점검해볼 수 있나요?',
    ctaKeyword: '자전거 차도 주행 사고 과실비율·보험 특례 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '자전거 차도 주행 사고 과실비율 — 5단계 보험 특례·손해배상 점검 | 로앤가이드',
      description:
        '자전거 차도 주행 사고의 과실비율·보험 처리가 고민이라면, 교통사고처리 특례법상 손해배상금 전액 보상 보험만 특례 대상이고 한도형 보험은 제외되는 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 자전거를 타고 차도를 달리던 중에 사고가 나 적지 않은 부상을 입었는데, 막상 과실비율과 손해배상·보험 처리를 따지려니 \'무엇을, 어떻게 따져야 하는 것인지\'부터 막막한 상황입니다. 자전거 사고라 자동차 사고와는 또 다른 것 같아 더 헷갈리는데, 정작 \'보험이나 형사처벌 문제가 어떻게 정리되는 것인지\'부터 가늠이 안 됩니다. 우선 자전거 사고도 가해자 측이 보험에 가입되어 있으면, 자동차 사고처럼 형사처벌을 면해 주는 특례가 적용되는 것인지부터 모르겠습니다. 또 가입한 보험이 손해를 전부 보상해 주는 것이 아니라 \'1억 원 한도\' 같은 식으로 보상에 상한이 정해진 보험이라면, 그런 한도형 보험도 그 특례가 적용되는 보험으로 인정되는 것인지 헷갈립니다. 더구나 사고 당시 전방주시를 소홀히 한 잘못 같은 과실은 도대체 어떻게 따져지는 것인지, 그리고 이런 상황에서 어디서부터 어떻게 정리해 나가야 하는 것인지조차 가늠이 되지 않아 답답한 상태입니다." 교통사고처리 특례법 제4조는 보험 또는 공제에 가입된 경우의 형사처벌 등 특례를 정하는 영역입니다. 판례는 위 특례법상 형사처벌 등 특례의 적용대상이 되는 \'보험 또는 공제에 가입된 경우\'란 교통사고를 일으킨 차가 보험 등에 가입되거나 그 차의 운전자가 차의 운행과 관련한 보험 등에 가입한 경우에 그 보험에 의하여 특례법 제4조 제2항에서 정하고 있는 교통사고 손해배상금 전액의 신속·확실한 보상의 권리가 피해자에게 주어지는 경우를 가리키고, 보상한도금액이 일정액에 불과하여 그 한도를 초과하는 손해가 발생한 경우 피해자가 보험에 의하여 보상을 받을 수 없는 형태의 보험은 피보험자의 교통사고로 인한 손해배상금의 전액보상을 요건으로 하는 특례법 제4조에서 의미하는 보험 등에 해당한다고 볼 수 없다고 본 사례 흐름이 있는 영역입니다. 자전거 차도 주행 + 과실비율 + 보험 특례 결합은 \'손해배상금 전액 보상 보험만 특례·한도형 보험 특례 불해당·전방주시 과실 책임\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사고·증거 보존 ② 과실비율 ③ 손해·치료 ④ 보험 특례 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 과실 ③ 손해 ④ 보험 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 자전거 차도 주행 사고 과실비율 판단 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·증거 보존·과실비율·손해·치료·보험 특례·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·증거 보존</strong> — 블랙박스·CCTV·주행 경로·사고 경위 보존.</li>\n<li><strong>② 과실비율</strong> — 자전거 차도 주행·전방주시 등 과실비율 정황 정리.</li>\n<li><strong>③ 손해·치료</strong> — 진단·치료비·손해 내역 정리.</li>\n<li><strong>④ 보험 특례</strong> — 손해배상금 전액 보상 보험인지, 한도형 보험은 특례에서 제외되는지 검토.</li>\n<li><strong>⑤ 청구</strong> — 손해배상·보험금 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 교통사고처리 특례법 제4조의 특례 대상 보험은 손해배상금 전액의 신속·확실한 보상 권리가 피해자에게 주어지는 보험을 가리키고, 보상한도가 일정액에 그쳐 한도 초과 손해를 보상받지 못하는 한도형 보험은 전액보상을 요건으로 하는 특례 보험에 해당하지 않는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·손해보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·증거 보존 (즉시)</strong> — 블랙박스·CCTV·주행 경로·사고 경위 자료 보존.</li>\n<li><strong>2단계 — 과실비율 정리 (1주)</strong> — 자전거 차도 주행·전방주시 등 과실비율 정황 정리.</li>\n<li><strong>3단계 — 손해·보험 정리 (2~3주)</strong> — 진단·치료비·손해, 가입 보험의 전액 보상·한도 여부 정리.</li>\n<li><strong>4단계 — 보험·청구 (협의 시)</strong> — 보험금 청구, 손해배상 협의 검토.</li>\n<li><strong>5단계 — 소송·이행 (분쟁 시)</strong> — 손해배상 청구·심리 결과에 따른 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 차도 주행 사고 과실비율·보험 특례 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 과실비율·손해·보험 특례 갈래입니다.</strong></p>\n<ul>\n<li><strong>블랙박스·CCTV·사고 영상 자료 (과실 입증)</strong></li>\n<li><strong>교통사고사실확인원·사고 경위 자료 (사고 경위)</strong></li>\n<li><strong>자전거 주행 경로·도로 상황 자료 (차도 주행 과실)</strong></li>\n<li><strong>진단서·치료비·손해 내역 자료 (손해액)</strong></li>\n<li><strong>가해자·운전자 보험 가입 자료 (특례 보험)</strong></li>\n<li><strong>보험 보상한도·약관 자료 (전액 보상 여부)</strong></li>\n<li><strong>손해배상·보험금 청구 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 교통사고처리 특례법상 특례가 적용되는 보험은 손해배상금 전액을 보상하는 보험이므로 가입 보험의 보상한도·약관을 확인하는 것이 핵심. 1억 원 한도처럼 상한이 정해져 한도 초과 손해를 보상받지 못하는 보험은 특례 보험에 해당하지 않을 수 있으므로 손해액·보험 약관 자료를 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특례 보험</strong> — 손해배상금 전액 보상 보험만 형사처벌 특례 대상인지.</li>\n<li><strong>한도형 보험</strong> — 보상한도가 정해진 보험은 특례 보험에서 제외되는지.</li>\n<li><strong>과실비율</strong> — 자전거 차도 주행·전방주시 소홀 등 과실을 어떻게 따지는지.</li>\n<li><strong>손해액</strong> — 한도를 초과하는 손해는 누가 부담하는지.</li>\n<li><strong>후유증·추가 청구</strong> — 후유장해 등 추가 손해를 따지는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 과실비율 분쟁심의 (1670-7333)</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 교통사고처리 특례법상 전액보상 보험과 한도형 보험',
        summary:
          '대법원 2011도6273(대법원, 2012.10.25 선고) 영역에서 법원은 교통사고처리 특례법상 형사처벌 등 특례의 적용대상이 되는 \'보험 또는 공제에 가입된 경우\'란 교통사고를 일으킨 차가 보험 등에 가입되거나 그 차의 운전자가 차의 운행과 관련한 보험 등에 가입한 경우에 그 보험에 의하여 특례법 제4조 제2항에서 정하고 있는 교통사고 손해배상금 전액의 신속·확실한 보상의 권리가 피해자에게 주어지는 경우를 가리킨다고 보았습니다. 피고인이 자전거를 운전하고 가다가 전방 주시를 게을리한 과실로 피해자를 들이받아 상해를 입게 한 사안에서, 피고인이 가입한 보험은 보상한도금액이 1억 원에 불과하여 1억 원을 초과하는 손해가 발생한 경우 피해자가 그 보험에 의하여 보상을 받을 수 없으므로 이러한 형태의 보험은 피보험자의 교통사고로 인한 손해배상금의 전액보상을 요건으로 하는 특례법 제4조 제1항, 제2항에서 의미하는 보험 등에 해당한다고 볼 수 없다고 판시했습니다. 자전거를 타고 차도를 달리다 사고가 난 사안에서도 손해배상금 전액 보상 보험만 특례·한도형 보험 특례 불해당·전방주시 과실 책임을 검토해볼 수 있습니다.',
        takeaway: '자전거 차도 주행 + 과실비율 + 보험 특례 결합 시 손해배상금 전액 보상 보험만 형사처벌 특례 대상·한도형 보험 특례 불해당·전방주시 과실 책임 검토 영역 — 변호사 상담·과실비율 분쟁심의 검토 권장.',
      },
    ],
    faq: [
      {
        question: '자전거 사고도 보험에 가입돼 있으면 형사처벌 특례가 적용되나요?',
        answer:
          '<strong>손해배상금 전액의 신속·확실한 보상 권리를 주는 보험에 가입한 경우에 특례가 적용되는 영역입니다.</strong> 보험 가입·약관 자료를 정리.',
      },
      {
        question: '1억 원 한도 같은 한도형 보험도 특례 보험으로 인정되나요?',
        answer:
          '<strong>한도를 초과하는 손해를 보상받지 못하는 한도형 보험은 전액보상 요건의 특례 보험에 해당하지 않을 수 있는 영역입니다.</strong> 보상한도·약관 자료를 정리.',
      },
      {
        question: '전방주시 소홀 같은 과실은 어떻게 따지나요?',
        answer:
          '<strong>주행 경로·도로 상황과 사고 경위를 종합해 과실비율을 따지는 영역입니다.</strong> 영상·정황 자료를 정리.',
      },
      {
        question: '보험 한도를 넘는 손해는 누가 부담하나요?',
        answer:
          '<strong>한도를 초과하는 손해는 가해자에게 별도로 손해배상을 청구하는 것을 검토할 수 있는 영역입니다.</strong> 손해액·보험 자료를 정리.',
      },
      {
        question: '후유증이 생기면 추가로 청구할 수 있나요?',
        answer:
          '<strong>후유장해 등 추가 손해는 별도로 따져 청구를 검토할 수 있는 영역입니다.</strong> 진단·치료 자료를 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: 'traffic-accident 도메인 허브', href: '/guide/traffic-accident' },
      { label: '자전거·차·보행자 과실', href: '/guide/traffic-accident/traffic-accident-bicycle-vs-car-vs-pedestrian-fault-track-split' },
      { label: '자전거·차 손해', href: '/guide/traffic-accident/traffic-accident-bicycle-car-damage' },
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '차로 변경 충돌 과실', href: '/guide/traffic-accident/traffic-accident-lane-change-collision-fault-ratio-track' },
    ],
  },
];
