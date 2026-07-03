import { SpokePage } from '../spoke-pages';

// batch89 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-06)
//
// 고유 존재 이유:
// 1. divorce-spouse-malicious-desertion-ground-track — 배우자 악의의 유기·일방적 재산 처분으로 파탄된 혼인의 재판상 이혼·재산분할 판단형 트랙. 제840조 제2호 악의의 유기와 제6호 중대한 사유 결합, 공동재산 일방 처분의 가정공동체 기반 형해화가 핵심.
// 2. divorce-professional-license-future-earning-division-track — 전문직 배우자의 장래수입·자격 재산분할 판단형 트랙. 명의 무관 청산과 재산분할의무의 상속인 승계, 잠재적 채권의 분할대상 산정이 핵심.
// 3. divorce-dual-income-childcare-contribution-division-track — 맞벌이 부부의 양육·소득 기여 재산분할 판단형 트랙. 잠재적 퇴직급여 채권의 분할대상 포함과 양육·가사 기여의 평가가 핵심.
// 4. divorce-foreign-judgment-recognition-track — 외국 이혼판결 국내 승인·재산분할 절차형 트랙. 분할 대상 재산의 범위와 변론종결일 기준시점, 파탄 후 재산 변동 제외가 핵심.
// 5. defamation-online-petition-signature-campaign-track — 온라인 청원 서명글 명예훼손 피해자 판단형 트랙. 전파가능성 공연성과 특정 소수 적시의 불특정·다수 인식 가능성이 핵심.
// 6. defamation-game-guild-chat-rumor-track — 게임 길드챗 허위사실 명예훼손 피해자 판단형 트랙. 특정 소수 적시의 검사 엄격 증명과 친밀·비밀유지 관계의 공연성 부정 예외가 핵심.
// 7. defamation-used-car-dealer-blacklist-post-track — 중고차 딜러 블랙리스트 게시 명예훼손 피해자 판단형 트랙. 정보통신망법 제70조 비방 목적과 사회적 평가 저하의 별개 구성요건·검사 증명책임이 핵심.
// 8. defamation-competitor-comparison-review-falsely-accused-defense — accused 관점. 경쟁사 비교 리뷰가 형법 제310조 진실성·공익으로 위법성조각되는지 다투는 방어 트랙. 진실·공익·표현방법·상대방 범위가 핵심.
// 9. inheritance-renunciation-creditor-revocation-track — 상속포기·한정승인 후 법정단순승인 채권자 분쟁 판단형 트랙. 제1026조 제3호 사해의사 요건과 증명책임, 신중한 판단이 핵심.
// 10. traffic-accident-merge-zipper-lane-fault-track — 합류구간 끼어들기 회피 사고 피해자 과실·면책 판단형 트랙. 제750조 손해배상과 중대한 과실 판단 기준·중앙선 침범의 경과실 가능성이 핵심.

export const spokesBatch89DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-spouse-malicious-desertion-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-malicious-desertion-ground-track',
    keyword: '배우자 악의의 유기 이혼',
    questionKeyword: '배우자가 집을 나가 생활비도 끊고, 함께 모은 재산까지 저 몰래 처분해버린 상황이에요. 이런 유기도 이혼 사유가 되는지, 일방적으로 재산을 빼돌린 게 재산분할에 반영되는지, 제가 어떤 청구를 해야 하는지 막막합니다.',
    ctaKeyword: '배우자 악의의 유기·일방 처분 이혼 재산분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '배우자 악의의 유기 이혼 — 5단계 유기·재산처분 점검 | 로앤가이드',
      description:
        '배우자가 집을 나가고 공동재산까지 처분했다면, 민법 제840조 제2호 악의의 유기와 제6호 혼인을 계속하기 어려운 중대한 사유, 일방 처분의 분할 반영·파탄 책임까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 어느 날 정당한 이유 없이 집을 나가 동거와 부양을 모두 끊어버린 채 연락마저 닿지 않고, 그 사이 부부가 함께 협력해 모은 재산의 상당 부분을 저와 한마디 상의도 없이 일방적으로 처분해버린 상황입니다. 이렇게 가정을 내팽개치고 떠난 행위만으로도 재판으로 이혼을 받아낼 수 있는지, 함께 이룬 재산을 몰래 빼돌린 것이 재산분할에서 제대로 반영되는지, 또 제가 무엇을 어떻게 청구해야 하는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제840조 제2호는 배우자가 악의로 다른 일방을 유기한 때를, 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 재판상 이혼 사유로 정하고, 민법 제839조의2는 당사자 쌍방의 협력으로 이룩한 재산에 대한 재산분할청구권을 정하는 영역입니다. 판례는 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'란 부부 공동생활관계가 회복할 수 없을 정도로 파탄되어 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하고, 혼인생활 중 부양·협조의무 등을 통하여 공동으로 이룩한 재산의 주요 부분을 부부의 일방이 정당한 이유 없이 상대방과의 협의나 동의 없이 일방적으로 처분하는 등으로 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위도 위 중대한 사유에 해당할 수 있으며, 파탄이 인정되면 그 원인에 대한 원고의 책임이 피고보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 본 사례 흐름이 있는 영역입니다. 악의의 유기 + 공동재산 일방 처분 + 파탄 결합은 \'유기·재산처분·중대한 사유\' 정리가 필요한 트랙입니다. 당사자라면 ① 유기·생활비 ② 재산 처분 ③ 중대한 사유 ④ 파탄 책임 ⑤ 이혼·분할 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 유기 ② 처분 ③ 사유 ④ 책임 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 악의의 유기 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 유기·생활비·재산 처분·중대한 사유·파탄 책임·이혼·분할 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유기·생활비</strong> — 가출·동거·부양 거부, 생활비 단절 정황의 확보.</li>\n<li><strong>② 재산 처분</strong> — 공동재산의 일방적 처분·명의변경 내역 정리.</li>\n<li><strong>③ 중대한 사유</strong> — 제840조 제2호 악의의 유기·제6호 중대한 사유 해당 여부.</li>\n<li><strong>④ 파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임정도 정리.</li>\n<li><strong>⑤ 이혼·분할</strong> — 재판상 이혼·재산분할·위자료 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 공동으로 이룩한 재산의 주요 부분을 일방이 정당한 이유 없이 협의·동의 없이 처분해 가정공동체의 경제적 기반을 형해화하는 행위도 중대한 사유에 해당할 수 있고, 파탄이 인정되면 원고 책임이 더 무겁지 않은 한 이혼 청구를 받아들일 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유기·재산 자료 확보 (즉시)</strong> — 가출·연락두절·생활비 단절, 공동재산 처분·명의변경 자료 확보.</li>\n<li><strong>2단계 — 유기·사유 정리 (1~2주)</strong> — 악의의 유기 해당 여부, 일방 처분으로 인한 중대한 사유 정리.</li>\n<li><strong>3단계 — 파탄 책임·분할 정리 (2~3주)</strong> — 파탄에 관한 쌍방 책임정도, 처분 재산 반영 등 분할 정리.</li>\n<li><strong>4단계 — 이혼·재산분할 청구 (소 제기 시)</strong> — 재판상 이혼·재산분할·위자료 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 재산분할·위자료 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 악의의 유기·일방 처분 이혼 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 유기·재산 처분·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>가출·연락두절·동거 거부 정황 자료 (악의의 유기)</strong></li>\n<li><strong>생활비·부양 단절 입증 자료 (유기 정도)</strong></li>\n<li><strong>공동재산 처분·명의변경 내역 (일방 처분)</strong></li>\n<li><strong>부부 재산·소득·계좌 자료 (재산분할)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (중대한 사유·책임정도)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 악의의 유기는 정당한 이유 없이 동거·부양·협조 의무를 저버린 것인지를, 중대한 사유는 일방의 공동재산 처분이 가정공동체의 경제적 기반을 형해화했는지를 종합해 판단되는 영역이므로 가출·생활비 단절 정황과 재산 처분 내역을 시간 순으로 정리하는 것이 핵심. 파탄에 관한 본인 책임이 상대보다 더 무겁지 않다는 점도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>악의의 유기</strong> — 가출·부양 거부가 정당한 이유 없는 유기인지.</li>\n<li><strong>중대한 사유</strong> — 일방의 재산 처분이 제840조 제6호에 해당하는지.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임정도.</li>\n<li><strong>재산분할</strong> — 처분된 공동재산의 분할 반영 범위.</li>\n<li><strong>위자료</strong> — 유기·처분으로 인한 정신적 고통의 위자료 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·재산분할·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366 (가정 위기 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방적 재산 처분과 혼인을 계속하기 어려운 중대한 사유',
        summary:
          '대법원 2025므10730(대법원, 2025.09.04 선고) 영역에서 법원은 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부 공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말한다고 보았습니다. 또한 혼인관계로 형성하는 부부 공동생활은 부양·협조의무 등을 통하여 공동으로 이룬 재산을 바탕으로 한 경제적 공동체이기도 하므로, 배우자 쌍방의 협력으로 함께 이룩한 재산의 주요 부분을 부부의 일방이 정당한 이유 없이 상대방과의 협의나 동의 없이 일방적으로 처분하는 등으로 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위도 위 중대한 사유에 해당할 수 있고, 혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등을 두루 고려해 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 그 원인에 대한 원고의 책임이 피고보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 판시했습니다. 배우자 악의의 유기·일방 처분 사안에서도 중대한 사유·재산분할을 검토해볼 수 있습니다.',
        takeaway: '악의의 유기 + 공동재산 일방 처분 + 파탄 결합 시 중대한 사유·일방 처분의 분할 반영·파탄 책임정도·위자료 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자가 집을 나가 연락이 없으면 이혼이 되나요?',
        answer:
          '<strong>정당한 이유 없이 동거·부양을 거부한 악의의 유기는 재판상 이혼 사유로 검토되는 영역입니다.</strong> 가출·생활비 단절 자료를 정리.',
      },
      {
        question: '함께 모은 재산을 몰래 처분한 것도 이혼 사유가 되나요?',
        answer:
          '<strong>공동재산의 주요 부분을 일방 처분해 경제적 기반을 형해화하면 중대한 사유로 검토될 수 있는 영역입니다.</strong> 재산 처분·명의변경 자료를 정리.',
      },
      {
        question: '빼돌린 재산도 재산분할에 반영되나요?',
        answer:
          '<strong>일방이 처분한 공동재산도 분할 대상으로 반영 여부를 검토할 수 있는 영역입니다.</strong> 처분 내역·재산 자료를 정리.',
      },
      {
        question: '저에게도 책임이 있으면 이혼이 안 되나요?',
        answer:
          '<strong>파탄이 인정되면 원고 책임이 상대보다 더 무겁지 않은 한 이혼 청구가 받아들여질 수 있는 영역입니다.</strong> 파탄 경위·책임정도 자료를 정리.',
      },
      {
        question: '이혼하면서 위자료와 재산분할을 함께 청구할 수 있나요?',
        answer:
          '<strong>재판상 이혼과 함께 위자료·재산분할을 청구할 수 있는 영역입니다.</strong> 부부 재산·피해 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '상속 재산 재산분할 대상', href: '/guide/divorce/divorce-inheritance-property-division-scope' },
      { label: '전문직 장래수입 재산분할', href: '/guide/divorce/divorce-professional-license-future-earning-division-track' },
      { label: '배우자 도박 채무 혼인파탄 위자료 판단', href: '/guide/divorce/divorce-spouse-gambling-debt-marriage-breakdown-alimony-track' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 2. divorce-professional-license-future-earning-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-professional-license-future-earning-division-track',
    keyword: '전문직 장래수입 재산분할',
    questionKeyword: '의사·변호사 같은 전문직 배우자와 이혼하는데, 제가 뒷바라지한 자격이나 장래수입은 분할 대상이 되는지 막막해요. 명의가 전부 배우자 앞으로 되어 있고, 분할 도중 상대가 사망하면 청구가 어떻게 되는지도 궁금합니다.',
    ctaKeyword: '전문직 장래수입·기여 재산분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '전문직 장래수입 재산분할 — 5단계 기여·상속승계 점검 | 로앤가이드',
      description:
        '전문직 배우자와 이혼하며 자격·장래수입을 나누려 한다면, 민법 제839조의2 명의 무관 청산과 기여도 평가, 재산분할의무의 상속인 승계·잠재 채권 산정까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"의사나 변호사 같은 전문직 배우자가 자리를 잡을 때까지 오랜 기간 살림과 양육을 도맡고 학비·생활비를 보태며 뒷바라지했는데, 정작 이혼을 하려니 제 기여가 재산분할에 제대로 반영될지 막막한 상황입니다. 전문직 자격이나 앞으로 벌어들일 장래수입이 분할 대상이 되는지, 큰 재산과 명의는 전부 배우자 앞으로 되어 있어 제 몫을 받을 수 있는지, 게다가 재산분할을 다투는 도중에 상대가 사망해버리면 제 청구는 어떻게 되는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2·제843조는 협의·재판상 이혼에 따른 재산분할청구권을 정하는 영역입니다. 판례는 재산분할 제도가 부부가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 하여 부부별산제를 보완하고, 이혼할 때 재산의 명의와 상관없이 재산의 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할·귀속시키는 제도임을 전제로, 재산분할청구권이 행사상의 일신전속성을 가지지만 혼인 중 형성한 재산관계를 이혼에 즈음하여 청산하는 것을 본질로 하는 재산분할 제도의 취지와 공평의 관념에 비추어 이혼을 한 당사자 일방이 사망하는 경우 그 재산분할의무는 상속인들에게 승계되고, 특별한 사정이 없는 한 이혼을 한 당사자 일방은 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 본 사례 흐름이 있는 영역입니다. 전문직 + 기여·장래수입 + 상속승계 결합은 \'기여·명의 무관 청산·상속승계\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산·소득 파악 ② 기여 평가 ③ 분할대상 ④ 상속승계 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 기여 ③ 대상 ④ 승계 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전문직 장래수입 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·소득 파악·기여 평가·분할대상·상속승계·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·소득 파악</strong> — 전문직 소득·자산·부동산 등 적극·소극재산 파악.</li>\n<li><strong>② 기여 평가</strong> — 학비·생활비 지원, 가사·양육 등 기여도 평가 검토.</li>\n<li><strong>③ 분할대상</strong> — 명의와 무관하게 혼인 중 형성 재산·잠재 채권의 분할 대상 정리.</li>\n<li><strong>④ 상속승계</strong> — 상대 사망 시 재산분할의무의 상속인 승계 검토.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 재산분할은 명의와 상관없이 형성·유지에 기여한 실질에 따라 분할되고, 이혼한 당사자 일방이 사망하면 그 재산분할의무는 상속인들에게 승계되어 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·소득 자료 보존 (즉시)</strong> — 전문직 소득·사업 자료, 부동산 등기·계좌·자격 관련 자료 보존.</li>\n<li><strong>2단계 — 기여·형성 정리 (1~2주)</strong> — 학비·생활비 지원, 가사·양육 등 기여, 재산 형성 경위 정리.</li>\n<li><strong>3단계 — 분할대상·상속승계 정리 (2~3주)</strong> — 잠재 채권 포함 여부, 상대 사망 시 상속인 승계 검토.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">전문직 장래수입·기여 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·기여·상속승계 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>전문직 소득·사업·세무 자료 (분할 대상)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>학비·생활비 지원·가사·양육 기여 자료 (기여도)</strong></li>\n<li><strong>잠재 채권·장래 급여 관련 자료 (분할대상)</strong></li>\n<li><strong>상대방 상속인·사망 관련 자료 (상속승계)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전문직 배우자의 자산도 명의와 상관없이 형성·유지에 기여한 실질에 따라 분할 대상이 될 수 있는 영역이므로 학비·생활비 지원과 가사·양육 기여를 구체적 기간·금액과 함께 정리하는 것이 핵심. 재산분할을 다투는 도중 상대가 사망하더라도 그 재산분할의무는 상속인들에게 승계될 수 있으므로 상속인·사망 관련 자료도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기여 평가</strong> — 학비·생활비 지원·가사·양육 기여의 평가.</li>\n<li><strong>명의 귀속</strong> — 명의와 무관하게 실질 기여로 분할되는지.</li>\n<li><strong>분할대상</strong> — 잠재 채권·장래 급여의 분할 대상 포함 여부.</li>\n<li><strong>상속승계</strong> — 상대 사망 시 재산분할의무의 상속인 승계.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명의 무관 청산과 재산분할의무의 상속인 승계',
        summary:
          '대법원 2024스876(대법원, 2026.01.15 선고) 영역에서 법원은 협의상 이혼한 자 일방이 다른 일방에 대하여 재산분할을 청구할 수 있고(민법 제839조의2 제1항) 재판상 이혼에 따른 재산분할청구권에도 위 규정이 준용되며, 재산분할 제도는 이혼 등의 경우에 부부가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 하여 부부별산제를 보완하고 이혼할 때 재산의 명의와 상관없이 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할·귀속시키는 제도라고 보았습니다. 또한 재산분할 청구 사건에서 이혼 후의 부양적 요소나 정신적 손해 배상의 성질도 함께 고려되어 재산분할청구권이 행사상의 일신전속성을 가지지만, 혼인 중 형성한 재산관계를 이혼에 즈음하여 청산하는 것을 본질로 하는 재산분할 제도의 취지와 공평의 관념에 비추어 이혼을 한 당사자 일방이 사망하는 경우 그 재산분할의무는 상속인들에게 승계되고, 특별한 사정이 없는 한 이혼을 한 당사자 일방은 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 판시했습니다. 전문직 장래수입 재산분할 사안에서도 기여·명의 무관 청산·상속승계를 검토해볼 수 있습니다.',
        takeaway: '전문직 + 기여·장래수입 + 상속승계 결합 시 명의 무관 청산·기여도 평가·잠재 채권 분할·재산분할의무 상속인 승계 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '전문직 자격이나 장래수입도 나눌 수 있나요?',
        answer:
          '<strong>명의와 상관없이 형성·유지에 기여한 실질에 따라 분할 대상 여부를 검토하는 영역입니다.</strong> 소득·기여 자료를 정리.',
      },
      {
        question: '제가 뒷바라지한 게 분할에 반영되나요?',
        answer:
          '<strong>학비·생활비 지원·가사·양육 등 직접·간접 기여를 종합해 평가하는 영역입니다.</strong> 지원·가사 기여 자료를 정리.',
      },
      {
        question: '재산이 전부 배우자 명의로 되어 있으면 어쩌나요?',
        answer:
          '<strong>명의와 무관하게 혼인 중 형성·유지에 기여한 실질에 따라 분할이 검토되는 영역입니다.</strong> 재산·기여 자료를 정리.',
      },
      {
        question: '분할 도중 상대가 사망하면 청구가 끝나나요?',
        answer:
          '<strong>이혼한 일방이 사망하면 재산분할의무가 상속인들에게 승계되어 상속인을 상대로 청구할 수 있는 영역입니다.</strong> 상속인·사망 관련 자료를 정리.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>재산분할청구는 이혼한 날부터 2년 내에 해야 하는 영역입니다.</strong> 이혼 시점·재산 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 시 재산분할 대상은 무엇인가요?', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '배우자 상속재산 기여 재산분할 판단', href: '/guide/divorce/divorce-spouse-inherited-property-contribution-division-track' },
      { label: '맞벌이 양육기여 재산분할', href: '/guide/divorce/divorce-dual-income-childcare-contribution-division-track' },
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 3. divorce-dual-income-childcare-contribution-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-dual-income-childcare-contribution-division-track',
    keyword: '맞벌이 양육기여 재산분할',
    questionKeyword: '맞벌이로 일하면서 아이까지 거의 혼자 키웠는데, 이혼하며 재산을 나눌 때 제 기여가 제대로 평가될지 막막해요. 배우자가 공무원이라 아직 받지 않은 퇴직급여도 분할 대상이 되는지, 양육과 가사 부담은 어떻게 반영되는지 궁금합니다.',
    ctaKeyword: '맞벌이 양육·퇴직급여 재산분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '맞벌이 양육기여 재산분할 — 5단계 기여·퇴직급여 점검 | 로앤가이드',
      description:
        '맞벌이로 일하며 양육까지 도맡았는데 이혼하게 됐다면, 민법 제839조의2 기여도 평가와 잠재적 퇴직급여 채권의 분할 대상 포함, 양육·가사 기여 반영까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"맞벌이로 직장을 다니면서도 아이의 등하원과 끼니, 집안일까지 사실상 혼자 떠맡으며 가정을 지켜 왔는데, 정작 이혼하며 재산을 나누려니 제 몫이 제대로 인정될지 막막한 상황입니다. 둘 다 돈을 벌었으니 똑같이 나누면 그만이라는 말을 들을까 걱정되고, 제가 짊어진 양육과 가사 부담은 재산분할에서 어떻게 평가되는지 가늠이 되지 않습니다. 게다가 배우자가 공무원이라 아직 받지도 않은 퇴직급여까지 나눌 수 있는지, 그렇다면 어떤 기준으로 정해지는지 도무지 알 수 없어 답답한 상태입니다." 민법 제839조의2·제843조는 협의·재판상 이혼에 따른 재산분할청구권을 정하는 영역입니다. 판례는 이혼 당시 부부 일방이 아직 공무원으로 재직 중이어서 실제 퇴직급여 등을 수령하지 않았더라도 이혼소송의 사실심 변론종결 시에 이미 잠재적으로 존재하여 경제적 가치의 현실적 평가가 가능한 퇴직급여 및 퇴직수당 채권은 상대방 배우자의 협력이 기여한 것으로 인정되는 한 재산분할의 대상에 포함시킬 수 있고, 구체적으로는 사실심 변론종결 시를 기준으로 그 시점에 퇴직할 경우 수령할 수 있을 것으로 예상되는 퇴직급여 상당액 채권이 대상이 되며, 법원은 혼인 생활의 과정과 기간, 그 퇴직급여의 형성·유지에 대한 양 당사자의 기여 정도, 다른 적극·소극재산의 존재와 규모 등을 종합적으로 고려해 분할 대상 포함 여부를 정할 수 있다고 본 사례 흐름이 있는 영역입니다. 맞벌이 + 양육·가사 기여 + 잠재 퇴직급여 결합은 \'기여 평가·퇴직급여 산정\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산·소득 파악 ② 기여 평가 ③ 퇴직급여 ④ 기준시점 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 기여 ③ 퇴직급여 ④ 기준시점 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 맞벌이 양육기여 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·소득 파악·기여 평가·퇴직급여·기준시점·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·소득 파악</strong> — 부부 소득·부동산·예금 등 적극·소극재산 파악.</li>\n<li><strong>② 기여 평가</strong> — 맞벌이 소득과 양육·가사 부담 등 기여도 평가.</li>\n<li><strong>③ 퇴직급여</strong> — 잠재적 퇴직급여·퇴직수당 채권의 분할 대상 검토.</li>\n<li><strong>④ 기준시점</strong> — 사실심 변론종결 시 기준 예상 퇴직급여 산정.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 아직 수령하지 않은 공무원 퇴직급여도 변론종결 시 잠재적으로 존재해 평가가 가능하면 분할 대상이 될 수 있고, 양육·가사 기여를 포함한 양 당사자의 기여 정도를 종합해 분할 대상 포함 여부를 정하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·소득 자료 보존 (즉시)</strong> — 부부 소득·부동산 등기·계좌·재직·급여 자료 보존.</li>\n<li><strong>2단계 — 기여·형성 정리 (1~2주)</strong> — 맞벌이 소득, 양육·가사 부담 등 기여, 형성 경위 정리.</li>\n<li><strong>3단계 — 퇴직급여·기준시점 정리 (2~3주)</strong> — 잠재 퇴직급여 채권, 변론종결 시 기준 예상액 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">맞벌이 양육·퇴직급여 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·기여·퇴직급여 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>부부 소득·근로·세무 자료 (소득 기여)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>양육·가사 부담 자료 (기여도)</strong></li>\n<li><strong>재직증명·예상 퇴직급여·퇴직수당 자료 (잠재 채권)</strong></li>\n<li><strong>혼인 기간·기여 정도 정리 자료 (기준시점)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 맞벌이라도 소득 외에 양육·가사 부담이 재산 형성·유지에 기여한 부분으로 평가될 수 있는 영역이므로 소득 자료와 함께 양육·가사 기여를 구체적으로 정리하는 것이 핵심. 아직 받지 않은 공무원 퇴직급여도 변론종결 시 잠재적으로 존재해 평가가 가능하면 분할 대상이 될 수 있으므로 재직·예상 퇴직급여 자료도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기여 평가</strong> — 맞벌이 소득과 양육·가사 부담의 기여 평가.</li>\n<li><strong>퇴직급여 포함</strong> — 잠재적 퇴직급여 채권의 분할 대상 포함 여부.</li>\n<li><strong>예상액 산정</strong> — 변론종결 시 기준 예상 퇴직급여 상당액.</li>\n<li><strong>분할 비율</strong> — 기여 정도에 따른 분할 비율.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠재적 퇴직급여 채권의 분할대상 포함과 기여 평가',
        summary:
          '대법원 2017므11917(대법원, 2019.09.25 선고) 영역에서 법원은 이혼 당시 부부 일방이 아직 공무원으로 재직 중이어서 실제 퇴직급여 등을 수령하지 않았더라도 이혼소송의 사실심 변론종결 시에 이미 잠재적으로 존재하여 경제적 가치의 현실적 평가가 가능한 퇴직급여 및 퇴직수당 채권은 상대방 배우자의 협력이 기여한 것으로 인정되는 한 재산분할의 대상에 포함시킬 수 있고, 구체적으로는 사실심 변론종결 시를 기준으로 그 시점에서 퇴직할 경우 수령할 수 있을 것으로 예상되는 퇴직급여 및 퇴직수당 상당액의 채권이 그 대상이 된다고 보았습니다. 또한 법원은 공무원연금법이 정한 이혼배우자의 분할연금 청구권 등에 관한 규정에도 불구하고 예상 퇴직급여 채권을 재산분할 대상에 포함할지 여부를, 혼인 생활의 과정과 기간, 그 퇴직급여의 형성·유지에 대한 양 당사자의 기여 정도, 당사자 쌍방이 혼인 생활 중 협력하여 취득한 다른 적극재산과 소극재산의 존재와 규모, 양 당사자의 의사와 나이 등 여러 사정을 종합적으로 고려하여 결정할 수 있다고 판시했습니다. 맞벌이 양육기여 재산분할 사안에서도 기여 평가·퇴직급여를 검토해볼 수 있습니다.',
        takeaway: '맞벌이 + 양육·가사 기여 + 잠재 퇴직급여 결합 시 잠재적 퇴직급여 채권의 분할 포함·변론종결 시 기준 예상액·양육·가사 기여 평가 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '맞벌이면 재산을 무조건 반반 나누나요?',
        answer:
          '<strong>소득뿐 아니라 양육·가사 기여를 종합해 분할 비율을 정하는 영역입니다.</strong> 소득·양육·가사 기여 자료를 정리.',
      },
      {
        question: '양육과 집안일 부담도 기여로 인정되나요?',
        answer:
          '<strong>양육·가사 부담도 재산 형성·유지 기여로 평가될 수 있는 영역입니다.</strong> 양육·가사 부담 자료를 정리.',
      },
      {
        question: '아직 받지 않은 퇴직급여도 나눌 수 있나요?',
        answer:
          '<strong>변론종결 시 잠재적으로 존재해 평가가 가능하면 분할 대상이 될 수 있는 영역입니다.</strong> 재직·예상 퇴직급여 자료를 정리.',
      },
      {
        question: '퇴직급여는 어느 시점 기준으로 계산하나요?',
        answer:
          '<strong>사실심 변론종결 시를 기준으로 퇴직할 경우 받을 예상액으로 산정하는 영역입니다.</strong> 변론종결 시점·예상액 자료를 정리.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>재산분할청구는 이혼한 날부터 2년 내에 해야 하는 영역입니다.</strong> 이혼 시점·재산 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 재산분할 위자료 인정 범위', href: '/guide/divorce/divorce-de-facto-marriage-property-division-scope' },
      { label: '혼인 중 상속재산 재산분할 대상 여부 판단', href: '/guide/divorce/divorce-inherited-asset-property-division-contribution-track' },
      { label: '전문직 장래수입 재산분할', href: '/guide/divorce/divorce-professional-license-future-earning-division-track' },
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 4. divorce-foreign-judgment-recognition-track ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-judgment-recognition-track',
    keyword: '외국 이혼판결 국내 승인',
    questionKeyword: '외국에서 받은 이혼판결을 한국에서도 인정받고 재산까지 정리하려는데 절차가 막막해요. 어떤 재산이 분할 대상이 되는지, 별거나 파탄 이후에 한쪽이 만든 재산도 나눠야 하는지, 재산을 정하는 기준 시점은 언제인지 궁금합니다.',
    ctaKeyword: '외국 이혼판결 승인·재산분할 기준시점 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '외국 이혼판결 국내 승인 — 5단계 승인·재산분할 점검 | 로앤가이드',
      description:
        '외국 이혼판결을 한국에서 인정받고 재산을 정리하려 한다면, 민법 제839조의2 분할 대상 재산의 범위와 변론종결일 기준시점, 파탄 후 재산 변동 제외까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"외국에서 혼인생활을 하다 그곳 법원에서 이혼판결을 받았는데, 막상 한국에서 신분과 재산을 정리하려니 그 판결이 국내에서도 그대로 인정되는지, 절차를 어디서 어떻게 밟아야 하는지부터 막막한 상황입니다. 부부가 함께 모은 재산 중 어디까지가 분할 대상이 되는지, 사이가 틀어져 별거하거나 사실상 파탄된 이후에 한쪽이 따로 만든 재산이나 갚은 빚도 나눠야 하는지, 또 재산을 정하는 기준이 되는 시점이 언제인지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2·제843조는 협의·재판상 이혼에 따른 재산분할청구권을 정하는 영역입니다. 판례는 이혼 시 재산분할의 대상이 되는 재산과 관련하여 어떤 적극재산이나 채무가 부부 쌍방의 협력이 아니라 부부 중 일방에 의하여 생긴 것으로서 상대방이 그 형성·유지나 부담과 무관한 경우에는 이를 재산분할의 대상으로 삼을 수 없고, 재판상 이혼에 따른 재산분할에서 분할 대상이 되는 재산과 그 액수 산정의 기준시기는 원칙적으로 이혼소송의 사실심 변론종결일이며, 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관하다는 등의 사정이 있는 경우 그 변동된 재산은 분할 대상이 되지 않고, 분할 대상 채무가 파탄 이후 변론종결일까지 감소하였고 그 감소가 공동재산과 무관하게 일방의 노력·비용으로 이루어진 경우 그 감소 부분도 분할 대상이 되지 않는다고 본 사례 흐름이 있는 영역입니다. 외국 이혼판결 + 승인 + 재산분할 결합은 \'승인·분할 대상·기준시점\' 정리가 필요한 트랙입니다. 당사자라면 ① 판결·승인 ② 재산 파악 ③ 분할대상 ④ 기준시점 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 승인 ② 파악 ③ 대상 ④ 기준시점 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 외국 이혼판결 국내 승인 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 판결·승인·재산 파악·분할대상·기준시점·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 판결·승인</strong> — 외국 이혼판결의 확정·승인 요건·번역·인증 확인.</li>\n<li><strong>② 재산 파악</strong> — 국내외 부동산·예금 등 적극·소극재산 파악.</li>\n<li><strong>③ 분할대상</strong> — 부부 협력으로 형성·유지된 재산의 분할 대상 정리.</li>\n<li><strong>④ 기준시점</strong> — 변론종결일 기준 가액, 파탄 후 재산 변동 제외 검토.</li>\n<li><strong>⑤ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 분할 대상·액수는 원칙적으로 사실심 변론종결일을 기준으로 정하고, 파탄 이후 공동재산과 무관하게 생긴 재산 변동이나 일방의 노력·비용으로 감소한 채무는 분할 대상이 되지 않는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 판결·신분 자료 정리 (즉시)</strong> — 외국 이혼판결문·확정 증명·번역·인증, 혼인·신분 자료 정리.</li>\n<li><strong>2단계 — 승인 요건 확인 (1주)</strong> — 외국 판결의 국내 승인 요건, 관할·집행 절차 확인.</li>\n<li><strong>3단계 — 재산·기준시점 정리 (1~2주)</strong> — 분할 대상 재산, 변론종결일 기준 가액, 파탄 후 변동 제외 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·신고 (확정 후)</strong> — 분할 범위 확정, 이혼 신고·신분 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국 이혼판결 승인·재산분할 기준시점 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 승인·분할대상·기준시점 갈래입니다.</strong></p>\n<ul>\n<li><strong>외국 이혼판결문·확정 증명 (판결 확인)</strong></li>\n<li><strong>번역문·아포스티유·인증 자료 (승인 요건)</strong></li>\n<li><strong>혼인관계증명서·신분 자료 (신분 정리)</strong></li>\n<li><strong>국내외 적극재산 목록 (분할 대상)</strong></li>\n<li><strong>부부 협력·형성 경위 자료 (분할 대상 판단)</strong></li>\n<li><strong>파탄·별거 시점·재산 변동 자료 (기준시점)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국 이혼판결은 먼저 국내 승인 요건을 갖추었는지 확인하고 판결문·확정 증명에 번역·인증을 갖추는 것이 핵심입니다. 재산분할은 분할 대상·액수를 원칙적으로 사실심 변론종결일을 기준으로 정하고 파탄 이후 공동재산과 무관하게 생긴 재산 변동은 제외될 수 있으므로 별거·파탄 시점과 재산 변동 자료를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>판결 승인</strong> — 외국 이혼판결의 국내 승인 요건 충족 여부.</li>\n<li><strong>분할 대상</strong> — 부부 협력 무관 재산·채무의 분할 대상 제외.</li>\n<li><strong>기준시점</strong> — 변론종결일 기준 분할 대상·액수 산정.</li>\n<li><strong>파탄 후 변동</strong> — 파탄 이후 일방이 만든 재산·감소 채무 제외.</li>\n<li><strong>관할·절차</strong> — 승인·집행·재산분할의 관할과 절차.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>다누리콜센터 1577-1366 (다문화·이주민 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 대상의 범위와 변론종결일 기준시점',
        summary:
          '대법원 2024므10721(대법원, 2024.05.17 선고) 영역에서 법원은 부부가 이혼을 할 때 어떤 적극재산이나 채무가 부부 쌍방의 협력이 아니라 부부 중 일방에 의하여 생긴 것으로서 상대방이 그 형성·유지 또는 부담과 무관한 경우에는 이를 재산분할의 대상으로 삼을 수 없다고 보았습니다. 또한 재판상 이혼에 따른 재산분할에서 분할 대상이 되는 재산과 그 액수 산정의 기준시기는 원칙적으로 이혼소송의 사실심 변론종결일이고, 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관하다는 등의 사정이 있는 경우 변동된 재산은 재산분할의 대상이 되지 않으며, 재산분할 대상 채무가 혼인관계 파탄 이후 변론종결일에 이르기까지 감소하였고 그 감소가 혼인 중 공동으로 형성한 재산관계와 무관하게 부부 중 일방의 노력이나 비용으로 이루어진 경우에는 그 감소 부분도 재산분할의 대상이 되지 않는다고 판시했습니다. 외국 이혼판결 승인·재산분할 사안에서도 분할 대상·기준시점을 검토해볼 수 있습니다.',
        takeaway: '외국 이혼판결 + 승인 + 재산분할 결합 시 분할 대상 재산의 범위·변론종결일 기준시점·파탄 후 재산 변동·채무 감소 제외 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '외국에서 받은 이혼판결이 한국에서도 인정되나요?',
        answer:
          '<strong>국내 승인 요건을 갖추면 외국 이혼판결의 효력을 인정받을 수 있는 영역입니다.</strong> 판결문·확정 증명·번역 자료를 정리.',
      },
      {
        question: '어떤 재산이 분할 대상이 되나요?',
        answer:
          '<strong>부부 쌍방의 협력으로 형성·유지된 재산이 분할 대상이 되는 영역입니다.</strong> 재산 목록·형성 경위 자료를 정리.',
      },
      {
        question: '파탄 이후 한쪽이 만든 재산도 나눠야 하나요?',
        answer:
          '<strong>파탄 후 공동재산과 무관하게 생긴 재산 변동은 분할 대상에서 제외될 수 있는 영역입니다.</strong> 파탄·별거 시점·재산 변동 자료를 정리.',
      },
      {
        question: '재산은 어느 시점을 기준으로 나누나요?',
        answer:
          '<strong>분할 대상·액수는 원칙적으로 사실심 변론종결일을 기준으로 정하는 영역입니다.</strong> 시점별 재산 자료를 정리.',
      },
      {
        question: '파탄 뒤 갚은 빚은 분할에서 어떻게 되나요?',
        answer:
          '<strong>파탄 후 공동재산과 무관하게 일방의 노력·비용으로 감소한 채무는 제외될 수 있는 영역입니다.</strong> 채무·상환 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '상속 재산 재산분할 대상', href: '/guide/divorce/divorce-inheritance-property-division-scope' },
      { label: '국제결혼 이혼 절차', href: '/guide/divorce/divorce-international-marriage-procedure-track' },
      { label: '사실혼 해소 재산분할 기준 시점', href: '/guide/divorce/divorce-de-facto-dissolution-property-cutoff-date-track' },
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

  // ─── 5. defamation-online-petition-signature-campaign-track ───
  {
    domain: 'defamation',
    slug: 'defamation-online-petition-signature-campaign-track',
    keyword: '온라인 청원 서명 명예훼손',
    questionKeyword: '온라인 청원이나 서명운동 글에 저를 겨냥한 사실과 다른 내용이 올라와 퍼지고 있어요. 일부 사람만 보는 자리에서 한 말이라도 명예훼손이 되는지, 그 사람이 친척·지인뿐이라 안 퍼진다고 하는데 그 기준이 막막합니다.',
    ctaKeyword: '온라인 청원 서명 명예훼손 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 청원 서명 명예훼손 — 5단계 공연성·전파가능성 점검 | 로앤가이드',
      description:
        '온라인 청원·서명운동 글로 명예훼손 피해를 입었다면, 형법 제307조 공연성과 전파가능성 이론, 특정 소수 적시의 불특정·다수 인식 가능성·증거 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"어떤 사안을 두고 만들어진 온라인 청원이나 서명운동 글에 저를 겨냥한 사실과 다른 내용이 적혀 빠르게 공유되면서, 모르는 사람들 사이에서까지 제 이름이 오르내리는 상황입니다. 정작 글을 올린 사람은 \'관심 있는 몇 사람에게 알린 것뿐\'이라거나 \'아는 사람끼리만 본다\'며 대수롭지 않게 넘기려 합니다. 일부에게만 전달된 글도 명예훼손이 되는지, 보는 사람이 친척·지인이라 더 퍼지지 않는다는 말이 맞는지, 무엇을 기준으로 \'공연성\'을 따지는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실 또는 허위사실을 적시해 사람의 명예를 훼손하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 개별적으로 소수의 사람에게 사실을 적시하였더라도 그 상대방이 불특정 또는 다수인에게 적시된 사실을 전파할 가능성이 있는 때에는 공연성이 인정된다는 이른바 전파가능성 이론이 공연성에 관한 확립된 법리로 정착되었고 이는 정보통신망법상 명예훼손 등의 공연성 판단에도 동일하게 적용된다고 보면서, 다만 표현의 자유가 위축되지 않도록 전파가능성의 구체적·객관적 기준을 세우고 적시 상대방과 피고인·피해자의 관계 등을 유형화해 공연성을 엄격하게 인정해 왔으며, 상대방이 친척이라는 이유만으로 곧바로 전파가능성이 부정되는 것은 아니라고 본 사례 흐름이 있는 영역입니다. 온라인 청원 서명 + 사실 적시 + 전파가능성 결합은 \'공연성·전파가능성\' 다툼이 가능한 트랙입니다. 당사자라면 ① 글·서명 보존 ② 사실 적시 ③ 공연성 ④ 전파가능성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 전파 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 청원 서명 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 글·서명 보존·사실 적시·공연성·전파가능성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 글·서명 보존</strong> — 청원·서명 글 내용·작성자·일시·URL·열람 범위 보존.</li>\n<li><strong>② 사실 적시</strong> — 구체적 사실관계 적시인지, 사회적 평가 저하 여부 정리.</li>\n<li><strong>③ 공연성</strong> — 불특정·다수 인식 상태, 특정 소수 적시 여부 검토.</li>\n<li><strong>④ 전파가능성</strong> — 소수 적시라도 전파될 가능성·관계 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 소수에게 적시했더라도 그 상대방이 불특정·다수에게 전파할 가능성이 있으면 공연성이 인정될 수 있고, 상대방이 친척이라는 이유만으로 전파가능성이 부정되는 것은 아닌 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 글·서명 캡처·증거 보존 (즉시)</strong> — 청원·서명 글 내용·작성자·일시·URL·공유 범위 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 구체적 사실관계 적시 여부, 불특정·다수 인식 상태 정리.</li>\n<li><strong>3단계 — 전파가능성·피해 정리 (2주)</strong> — 소수 적시 시 전파 가능성·관계, 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 청원 서명 명예훼손 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>청원·서명 글 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>공유·서명·열람 범위 자료 (공연성)</strong></li>\n<li><strong>작성자·상대방·피해자 관계 자료 (전파가능성)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>실제 전파·확산 정황 자료 (피해 확대)</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 청원·서명 글은 일부에게만 전달했더라도 그 상대방이 불특정·다수에게 전파할 가능성이 있으면 공연성이 인정될 수 있는 영역이므로 공유·서명 범위와 실제 확산 정황을 함께 정리하는 것이 핵심. 상대방이 친척·지인이라는 이유만으로 전파가능성이 곧바로 부정되는 것은 아니므로 관계와 전파 경위를 구체적으로 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정·다수 인식 상태인지, 특정 소수 적시인지.</li>\n<li><strong>전파가능성</strong> — 소수 적시라도 전파될 가능성이 있는지.</li>\n<li><strong>관계</strong> — 상대방이 친척·지인이라는 사정의 영향.</li>\n<li><strong>사실 적시</strong> — 구체적 사실관계 적시로 평가가 저하되는지.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전파가능성 이론과 친척 관계의 공연성 판단',
        summary:
          '대법원 2020도5813(대법원, 2020.11.19 선고) 영역에서 법원은 명예훼손죄의 구성요건인 공연성이 \'불특정 또는 다수인이 인식할 수 있는 상태\'를 의미한다고 밝혀 왔고, 개별적으로 소수의 사람에게 사실을 적시하였더라도 그 상대방이 불특정 또는 다수인에게 적시된 사실을 전파할 가능성이 있는 때에는 공연성이 인정된다는 이른바 전파가능성 이론이 공연성에 관한 확립된 법리로 정착되었으며 이는 정보통신망법상 정보통신망을 이용한 명예훼손 등의 공연성 판단에도 동일하게 적용된다고 보았습니다. 다만 전파가능성 법리를 제한 없이 적용하면 표현의 자유가 위축될 우려가 있어 전파가능성의 구체적·객관적 적용 기준을 세우고 적시 상대방과 피고인·피해자의 관계 등에 따라 유형화하며 전파가능성에 대한 인식을 전제로 공연성을 엄격하게 인정해 왔고, 상대방이 피해자와 친척관계에 있다는 이유만으로 전파가능성이 부정된다고 볼 수 없으며 공개된 장소에서 큰 소리로 말해 다른 사람들이 들을 수 있을 정도였다면 불특정 또는 다수인이 인식할 수 있는 상태로서 공연성이 인정된다고 판시했습니다. 온라인 청원 서명 명예훼손 사안에서도 공연성·전파가능성을 검토해볼 수 있습니다.',
        takeaway: '온라인 청원 서명 + 사실 적시 + 전파가능성 결합 시 전파가능성 이론·불특정·다수 인식 상태·친척 관계의 공연성 판단 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '일부에게만 보낸 글도 명예훼손이 되나요?',
        answer:
          '<strong>소수에게 적시했어도 전파될 가능성이 있으면 공연성이 인정될 수 있는 영역입니다.</strong> 공유·열람 범위 자료를 정리.',
      },
      {
        question: '보는 사람이 지인·친척이면 안 퍼진다고 봐도 되나요?',
        answer:
          '<strong>친척·지인이라는 이유만으로 전파가능성이 곧바로 부정되는 것은 아닌 영역입니다.</strong> 관계·전파 경위 자료를 정리.',
      },
      {
        question: '공연성은 무엇을 기준으로 따지나요?',
        answer:
          '<strong>불특정 또는 다수인이 인식할 수 있는 상태인지를 기준으로 판단하는 영역입니다.</strong> 열람·공유 범위 자료를 정리.',
      },
      {
        question: '온라인 청원·서명 글도 명예훼손이 되나요?',
        answer:
          '<strong>구체적 사실관계를 적시해 사회적 평가를 저하시키면 명예훼손이 검토될 수 있는 영역입니다.</strong> 글 내용·확산 정황 자료를 정리.',
      },
      {
        question: '글을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손/모욕 종합 가이드', href: '/guide/defamation' },
      { label: '인터넷 댓글 명예훼손 정통망법 형법 비교', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '게임 길드챗 허위사실 명예훼손', href: '/guide/defamation/defamation-game-guild-chat-rumor-track' },
      { label: '명예훼손 고소장 쓰기 전 준비할 것', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '유튜브 댓글 실명 비방 신원조회 손해배상', href: '/guide/defamation/defamation-youtube-realname-attack-civil-damages-victim' },
    ],
  },

  // ─── 6. defamation-game-guild-chat-rumor-track ───
  {
    domain: 'defamation',
    slug: 'defamation-game-guild-chat-rumor-track',
    keyword: '게임 길드챗 허위사실 명예훼손',
    questionKeyword: '온라인 게임 길드 단체 채팅에서 누군가 저에 관한 사실과 다른 소문을 퍼뜨렸어요. 채팅방에 몇 명밖에 없었는데도 명예훼손이 되는지, 친한 사람들끼리만 있는 방이라 공연성이 없다는데 그 기준이 막막합니다.',
    ctaKeyword: '게임 길드챗 허위사실 명예훼손 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '게임 길드챗 허위사실 명예훼손 — 5단계 공연성·전파 점검 | 로앤가이드',
      description:
        '게임 길드 채팅에서 허위 소문으로 명예훼손 피해를 입었다면, 형법 제307조 공연성과 특정 소수 적시의 검사 엄격 증명, 친밀 관계의 공연성 부정 예외·증거 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오래 함께한 온라인 게임 길드의 단체 채팅방에서 누군가 저에 관한 사실과 전혀 다른 소문을 퍼뜨려, 길드원들 사이에서 졸지에 이상한 사람이 되어버린 상황입니다. 정작 그 사람은 \'몇 명 안 되는 채팅방에서 한 말\'이라거나 \'다 아는 사이라 밖으로 안 나간다\'며 대수롭지 않게 여깁니다. 소수만 있는 채팅방에서 한 말도 명예훼손이 되는지, 친한 사람들끼리라 공연성이 없다는 말이 맞는지, 무엇을 기준으로 \'전파가능성\'을 따지는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실 또는 허위사실을 적시해 사람의 명예를 훼손하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 특정 소수에 대한 사실적시의 경우 전파가능성을 이유로 공연성을 인정하기 위해서는 검사의 엄격한 증명이 필요하고, 발언 상대방이 발언자나 피해자의 배우자·친척·친구 등 사적으로 친밀한 관계에 있는 경우 또는 직무상 비밀유지의무가 있거나 이를 처리하여야 하는 공무원이나 이와 유사한 지위에 있는 경우 등에는 그러한 관계나 신분으로 인하여 비밀의 보장이 상당히 높은 정도로 기대되어 공연성이 부정되며, 이 경우 공연성을 인정하려면 그러한 관계나 신분에도 불구하고 불특정 또는 다수인에게 전파될 수 있다고 볼 만한 특별한 사정이 존재하여야 한다고 본 사례 흐름이 있는 영역입니다. 게임 길드챗 + 허위 소문 + 전파가능성 결합은 \'공연성·전파가능성·관계\' 다툼이 가능한 트랙입니다. 당사자라면 ① 채팅 보존 ② 사실 적시·허위 ③ 공연성 ④ 전파가능성·관계 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 허위 ③ 공연성 ④ 관계 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 게임 길드챗 허위사실 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채팅 보존·사실 적시·허위·공연성·전파가능성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채팅 보존</strong> — 길드챗 대화 내용·발언자·일시·참여자 보존.</li>\n<li><strong>② 사실 적시·허위</strong> — 구체적 사실관계 적시인지, 허위 여부 정리.</li>\n<li><strong>③ 공연성</strong> — 특정 소수 적시인지, 불특정·다수 인식 상태인지.</li>\n<li><strong>④ 전파가능성·관계</strong> — 친밀 관계의 공연성 부정 예외·특별한 사정 검토.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 특정 소수 적시는 공연성 인정에 검사의 엄격한 증명이 필요하고, 친밀 관계 등으로 비밀 보장이 기대되면 공연성이 부정되며 이를 깨려면 전파될 수 있다고 볼 특별한 사정이 필요한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채팅 캡처·증거 보존 (즉시)</strong> — 길드챗 대화 내용·발언자·일시·참여자·열람 범위 보존.</li>\n<li><strong>2단계 — 사실 적시·허위 정리 (1주)</strong> — 구체적 사실관계 적시 여부, 소문의 허위 여부 정리.</li>\n<li><strong>3단계 — 공연성·관계 정리 (2주)</strong> — 특정 소수·다수 인식 상태, 친밀 관계·특별한 사정 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 게시·발언 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">게임 길드챗 허위사실 명예훼손 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 허위·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>길드챗 대화 캡처·일시 (적시 내용)</strong></li>\n<li><strong>발언자 계정·닉네임 자료 (특정)</strong></li>\n<li><strong>채팅방 참여자·열람 범위 자료 (공연성)</strong></li>\n<li><strong>발언자·참여자·피해자 관계 자료 (전파가능성)</strong></li>\n<li><strong>적시 내용의 허위 입증 자료 (허위)</strong></li>\n<li><strong>실제 전파·외부 확산 정황 자료 (특별한 사정)</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게임 길드챗처럼 특정 소수만 있는 자리의 적시는 공연성 인정에 검사의 엄격한 증명이 필요하고 친밀 관계면 공연성이 부정될 수 있는 영역이므로 참여자·관계와 함께 실제로 외부로 전파된 정황을 정리하는 것이 핵심. 친밀 관계에도 불구하고 불특정·다수에게 전파될 수 있다고 볼 특별한 사정을 보여주는 자료를 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 특정 소수 적시인지, 불특정·다수 인식 상태인지.</li>\n<li><strong>엄격 증명</strong> — 전파가능성에 대한 검사의 엄격한 증명.</li>\n<li><strong>친밀 관계</strong> — 친밀 관계로 공연성이 부정되는지.</li>\n<li><strong>특별한 사정</strong> — 관계에도 불구하고 전파될 특별한 사정.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특정 소수 적시의 엄격 증명과 친밀 관계의 공연성 부정',
        summary:
          '대법원 2015도12933(대법원, 2020.12.30 선고) 영역에서 법원은 특정 소수에 대한 사실적시의 경우 전파가능성을 이유로 명예훼손죄의 구성요건인 공연성을 인정하기 위해서는 검사의 엄격한 증명이 필요하다고 보았습니다. 또한 발언 상대방이 발언자나 피해자의 배우자·친척·친구 등 사적으로 친밀한 관계에 있는 경우 또는 직무상 비밀유지의무가 있거나 이를 처리하여야 하는 공무원이나 이와 유사한 지위에 있는 경우 등에는 그러한 관계나 신분으로 인하여 비밀의 보장이 상당히 높은 정도로 기대되므로 공연성이 부정되고, 이러한 경우에 공연성을 인정하려면 그러한 관계나 신분에도 불구하고 불특정 또는 다수인에게 전파될 수 있다고 볼 만한 특별한 사정이 존재하여야 한다고 판시했습니다. 게임 길드챗 허위사실 명예훼손 사안에서도 공연성·전파가능성·관계를 검토해볼 수 있습니다.',
        takeaway: '게임 길드챗 + 허위 소문 + 전파가능성 결합 시 특정 소수 적시의 검사 엄격 증명·친밀 관계의 공연성 부정·전파될 특별한 사정 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '소수만 있는 채팅방에서 한 말도 명예훼손이 되나요?',
        answer:
          '<strong>특정 소수 적시는 전파가능성에 대한 검사의 엄격한 증명이 있어야 공연성이 인정되는 영역입니다.</strong> 참여자·전파 정황 자료를 정리.',
      },
      {
        question: '친한 사람들끼리라 공연성이 없다는 말이 맞나요?',
        answer:
          '<strong>친밀 관계는 비밀 보장이 기대돼 공연성이 부정될 수 있으나 특별한 사정이 있으면 달라지는 영역입니다.</strong> 관계·전파 경위 자료를 정리.',
      },
      {
        question: '소문이 사실과 다르면 더 무거운가요?',
        answer:
          '<strong>허위사실 적시는 사실 적시보다 무겁게 다뤄질 수 있는 영역입니다.</strong> 허위 입증 자료를 정리.',
      },
      {
        question: '채팅이 외부로 퍼지면 공연성이 인정되나요?',
        answer:
          '<strong>친밀 관계에도 불구하고 전파될 특별한 사정이 있으면 공연성이 인정될 수 있는 영역입니다.</strong> 외부 확산 정황 자료를 정리.',
      },
      {
        question: '채팅을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손/모욕 종합 가이드', href: '/guide/defamation' },
      { label: '오픈채팅방 허위사실 유포 명예훼손 신고', href: '/guide/defamation/defamation-open-chat-false-fact-spread-report-track' },
      { label: '온라인 청원 서명 명예훼손', href: '/guide/defamation/defamation-online-petition-signature-campaign-track' },
      { label: '명예훼손 고소장 작성법과 핵심 기재사항', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '명예훼손 손해배상 금액 기준과 판례', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 7. defamation-used-car-dealer-blacklist-post-track ───
  {
    domain: 'defamation',
    slug: 'defamation-used-car-dealer-blacklist-post-track',
    keyword: '중고차 딜러 블랙리스트 명예훼손',
    questionKeyword: '제 이름과 사진을 \'악덕 딜러 블랙리스트\'라며 인터넷에 올려 영업이 흔들리고 있어요. 거래 불만이라며 올린 글도 명예훼손이 되는지, 소비자 정보 공유라면 처벌이 안 되는지, 비방 목적은 누가 증명해야 하는지 막막합니다.',
    ctaKeyword: '중고차 딜러 블랙리스트 명예훼손 비방 목적 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 딜러 블랙리스트 명예훼손 — 5단계 비방 목적·공익 점검 | 로앤가이드',
      description:
        '중고차 딜러 블랙리스트 게시로 명예훼손 피해를 입었다면, 정보통신망법 제70조 비방 목적과 사회적 평가 저하의 별개 구성요건, 검사 증명책임·공익성 경계까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"누군가 제 이름과 사진, 직장까지 함께 적어 \'악덕 중고차 딜러 블랙리스트\'라는 글을 인터넷에 올리는 바람에, 사실과 다른 내용까지 퍼지며 영업과 평판이 크게 흔들리는 상황입니다. 정작 글을 올린 사람은 \'거래 불만을 알린 소비자 정보 공유일 뿐\'이라며 책임을 피하려 합니다. 후기나 신상 공개 형식의 게시글도 명예훼손이 되는지, 소비자를 위한 정보 공유라고 하면 처벌이 안 되는지, \'비방할 목적\'은 누가 증명해야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항은 사람을 비방할 목적으로 정보통신망을 통하여 공공연하게 사실을 드러내어 다른 사람의 명예를 훼손한 자를 처벌하는 영역입니다. 판례는 이 죄가 성립하려면 피고인이 공공연하게 드러낸 사실이 다른 사람의 사회적 평가를 떨어뜨릴 만한 것임을 인식해야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적이 있는지는 드러낸 사실이 사회적 평가를 떨어뜨릴 만한 것인지와 별개의 구성요건으로서 드러낸 사실이 평가를 떨어뜨린다고 하여 비방할 목적이 당연히 인정되는 것은 아니며, 이 규정에서 정한 모든 구성요건에 대한 증명책임은 검사에게 있다고 보면서, \'비방할 목적\'은 공공의 이익을 위한 것과는 행위자의 주관적 의도의 방향에서 상충하므로 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적이 부정되고, 주요한 동기·목적이 공공의 이익을 위한 것이라면 부수적으로 사익적 목적이 있더라도 비방할 목적이 부정될 수 있다고 본 사례 흐름이 있는 영역입니다. 블랙리스트 게시 + 사실 적시 + 비방 목적 결합은 \'비방 목적·공익성·증명책임\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시 보존 ② 사회적 평가 ③ 비방 목적 ④ 공익성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 평가 ③ 목적 ④ 공익 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 딜러 블랙리스트 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시 보존·사회적 평가·비방 목적·공익성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시 보존</strong> — 블랙리스트 글·신상·사진·작성자·일시·URL 보존.</li>\n<li><strong>② 사회적 평가</strong> — 드러낸 사실이 사회적 평가를 떨어뜨릴 만한지 정리.</li>\n<li><strong>③ 비방 목적</strong> — 평가 저하와 별개로 비방할 목적이 있는지 검토.</li>\n<li><strong>④ 공익성</strong> — 소비자 정보 공유 등 공공의 이익 관련성 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 비방할 목적은 사회적 평가 저하와는 별개의 구성요건이고 모든 구성요건의 증명책임은 검사에게 있으며, 적시 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방할 목적이 부정되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 캡처·증거 보존 (즉시)</strong> — 블랙리스트 글·신상·사진·작성자 계정·일시·URL 보존.</li>\n<li><strong>2단계 — 사회적 평가·사실 정리 (1주)</strong> — 드러낸 사실의 평가 저하 여부, 사실/허위 정리.</li>\n<li><strong>3단계 — 비방 목적·공익성 정리 (2주)</strong> — 비방할 목적, 공공의 이익 관련성, 피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제·블라인드 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 딜러 블랙리스트 명예훼손 비방 목적 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 평가 저하·비방 목적·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>블랙리스트 글·신상·사진 원본·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>거래·계약 내역 자료 (사실/허위 입증)</strong></li>\n<li><strong>게시 내용과 실제 사실 대조 자료 (평가 저하)</strong></li>\n<li><strong>작성 경위·동기 정황 자료 (비방 목적)</strong></li>\n<li><strong>영업·매출·평판 피해 자료 (피해 입증)</strong></li>\n<li><strong>삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블랙리스트 게시는 사회적 평가를 떨어뜨릴 만한지와 비방할 목적이 별개의 구성요건이고 그 증명책임은 검사에게 있는 영역이므로 거래 내역과 게시 내용을 대조한 자료, 작성 경위·동기 자료를 함께 정리하는 것이 핵심. 다만 적시 내용이 소비자 일반의 정보 공유 등 공공의 이익에 관한 것이면 비방 목적이 부정될 수 있으므로 사실 여부와 게시 맥락을 함께 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 저하</strong> — 드러낸 사실이 사회적 평가를 떨어뜨릴 만한지.</li>\n<li><strong>비방 목적</strong> — 평가 저하와 별개로 비방할 목적이 있는지.</li>\n<li><strong>증명책임</strong> — 모든 구성요건의 증명책임이 검사에게 있는지.</li>\n<li><strong>공익성</strong> — 소비자 정보 공유 등 공공의 이익 관련성.</li>\n<li><strong>피해 입증</strong> — 영업·매출·평판 등 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 제70조 비방 목적의 별개 구성요건과 검사 증명책임',
        summary:
          '대법원 2022도699(대법원, 2024.01.04 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항의 명예훼손죄가 성립하려면 피고인이 공공연하게 드러낸 사실이 다른 사람의 사회적 평가를 떨어뜨릴 만한 것임을 인식해야 할 뿐만 아니라 사람을 비방할 목적이 있어야 하고, 비방할 목적이 있는지는 드러낸 사실이 사회적 평가를 떨어뜨릴 만한 것인지와 별개의 구성요건으로서 드러낸 사실이 평가를 떨어뜨리는 것이라고 해서 비방할 목적이 당연히 인정되는 것은 아니며 이 규정에서 정한 모든 구성요건에 대한 증명책임은 검사에게 있다고 보았습니다. 또한 \'사람을 비방할 목적\'은 공공의 이익을 위한 것과는 행위자의 주관적 의도의 방향에서 서로 상반되는 관계에 있으므로 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적은 부인되고, 공공의 이익에 관한 것에는 널리 국가·사회 기타 일반 다수인의 이익뿐만 아니라 특정한 사회집단이나 그 구성원 전체의 관심과 이익에 관한 것도 포함되며 행위자의 주요한 동기 내지 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 비방할 목적이 부정될 수 있다고 판시했습니다. 중고차 딜러 블랙리스트 명예훼손 사안에서도 비방 목적·공익성·증명책임을 검토해볼 수 있습니다.',
        takeaway: '블랙리스트 게시 + 사실 적시 + 비방 목적 결합 시 비방 목적의 별개 구성요건·검사 증명책임·공익 관련성·부수적 사익 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '블랙리스트나 신상 공개 글도 명예훼손이 되나요?',
        answer:
          '<strong>드러낸 사실이 사회적 평가를 떨어뜨리고 비방 목적이 인정되면 명예훼손이 검토되는 영역입니다.</strong> 게시 원본·거래 내역 자료를 정리.',
      },
      {
        question: '소비자 정보 공유라고 하면 처벌이 안 되나요?',
        answer:
          '<strong>공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부정될 수 있는 영역입니다.</strong> 게시 경위·동기 자료를 정리.',
      },
      {
        question: '비방 목적은 누가 증명하나요?',
        answer:
          '<strong>모든 구성요건의 증명책임은 검사에게 있는 영역입니다.</strong> 작성 경위·동기 정황 자료를 정리.',
      },
      {
        question: '거래 불만이 사실이면 명예훼손이 아닌가요?',
        answer:
          '<strong>사실이라도 비방 목적과 공익성 여부에 따라 성부가 달라지는 영역입니다.</strong> 사실 대조·게시 맥락 자료를 정리.',
      },
      {
        question: '글을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제·블라인드 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 영업·평판 피해 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 카페 익명글 허위사실 명예훼손', href: '/guide/defamation/defamation-anonymous-cafe-false-fact-network-act-track' },
      { label: '공익 제보글 사실적시 명예훼손 혐의', href: '/guide/defamation/defamation-public-interest-tip-off-truth-accused-track' },
      { label: '배달앱 리뷰 명예훼손', href: '/guide/defamation/defamation-delivery-app-review-track' },
      { label: '명예훼손/모욕 종합 가이드', href: '/guide/defamation' },
      { label: '직장 내 허위 소문 명예훼손 입증', href: '/guide/defamation/defamation-false-rumor-workplace-claim' },
    ],
  },

  // ─── 8. defamation-competitor-comparison-review-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-competitor-comparison-review-falsely-accused-defense',
    keyword: '경쟁사 비교 리뷰 명예훼손 무고',
    questionKeyword: '제품·서비스를 비교하는 후기를 올렸을 뿐인데 경쟁사가 저를 명예훼손으로 고소했어요. 사실과 다르게 신고된 것 같은데, 진실한 내용을 공익 목적으로 알려도 위법성이 없어진다는 게 제게 적용되는지, 비교 표현이 다소 날카로우면 안 되는지 막막합니다.',
    ctaKeyword: '경쟁사 비교 리뷰 명예훼손 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '경쟁사 비교 리뷰 명예훼손 방어 — 5단계 진실·공익 점검 | 로앤가이드',
      description:
        '비교 후기를 올렸다가 명예훼손 혐의를 받고 있다면, 형법 제310조 진실성·공익 목적과 표현방법·상대방 범위, 부수적 사익 동기·조사 대응까지 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제품이나 서비스를 비교한 솔직한 후기를 정보 공유 차원에서 올렸을 뿐인데, 불리하게 언급된 경쟁사가 저를 명예훼손으로 고소해 당황스러운 상황입니다. 사실과 다르게 신고되었다고 느껴지고, 진실한 내용을 여러 사람에게 도움이 되라고 알렸는데도 처벌될까 두렵습니다. 진실한 사실을 오로지 공공의 이익을 위해 적시하면 위법성이 없어진다는 법리가 정말 제게 적용되는지, 제 가게나 이익을 위한 마음이 조금 섞였다는 이유로 안 되는 것은 아닌지, 비교하다 보니 표현이 다소 날카로웠다면 그것만으로 문제가 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 명예를 훼손한 행위를, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하는 영역입니다. 판례는 형법 제310조에 따라 위법성이 조각되려면 적시한 사실이 객관적으로 보아 공공의 이익에 관한 것으로서 행위자도 공공의 이익을 위하여 그 사실을 적시한 것이어야 하고, 그 표현 내용이 대체로 객관적인 사실과 일치하며 배포가 이루어진 상대방의 범위가 제한되고 표현방법도 상대방을 비방하는 표현이 없는 등의 사정을 종합하면 오로지 공공의 이익을 위하여 진실한 사실을 적시한 경우로서 위법성조각사유에 해당할 수 있다고 본 사례 흐름이 있는 영역입니다. 비교 후기 + 공익 목적 + 명예훼손 고소 결합은 \'진실성·공익성·표현방법\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 표현방법·범위 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 표현 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 경쟁사 비교 리뷰 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·표현방법·범위·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 비교 후기 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 표현 내용이 대체로 객관적 사실과 일치하는지.</li>\n<li><strong>③ 공익 목적</strong> — 오로지 공공의 이익을 위한 것인지, 부수적 사익 동기 정리.</li>\n<li><strong>④ 표현방법·범위</strong> — 비방 표현 유무, 배포 상대방의 범위 정리.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각(제310조) 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 표현 내용이 대체로 객관적 사실과 일치하고 배포 상대방의 범위가 제한되며 비방 표현이 없는 등 오로지 공공의 이익을 위해 진실한 사실을 적시한 경우라면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적시 내용·근거 자료 보존 (즉시)</strong> — 비교 후기 내용·근거 자료·게시 경위·표현 전체 맥락 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 표현 내용과 근거 자료를 대조해 객관적 사실 일치 정리.</li>\n<li><strong>3단계 — 공익성·표현 정리 (2주)</strong> — 공익 목적, 부수적 사익 동기, 비방 표현·배포 범위 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제310조 적용 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경쟁사 비교 리뷰 명예훼손 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>비교 후기 원본·일시·플랫폼 (적시 내용)</strong></li>\n<li><strong>비교 내용의 근거 자료 (사실 일치 입증)</strong></li>\n<li><strong>공익 목적·정보 공유 의도 정황 자료</strong></li>\n<li><strong>부수적 사익 동기 관련 경위 자료</strong></li>\n<li><strong>표현방법·배포 범위 자료 (비방 표현 유무)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 비교 후기의 표현 내용이 대체로 객관적 사실과 일치하고 오로지 공공의 이익을 위한 것이었음을 보여주는 근거 자료를 정리하는 것이 핵심이며, 배포 상대방의 범위가 제한되고 상대방을 비방하는 표현이 없었다는 점도 함께 정리하는 것이 좋습니다. 사실과 다르게 신고되었다고 느껴진다면 표현의 전체 맥락과 게시 경위를 정리해 진실·공익성을 소명할 수 있도록 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 표현 내용이 대체로 객관적 사실과 일치하는지.</li>\n<li><strong>공익 목적</strong> — 오로지 공공의 이익을 위한 것인지.</li>\n<li><strong>부수적 사익</strong> — 부수적 사익 동기가 제310조 적용을 배제하는지.</li>\n<li><strong>표현방법·범위</strong> — 비방 표현 유무와 배포 상대방의 범위.</li>\n<li><strong>절차 대응</strong> — 조사·고소 절차에서 진술의 일관성과 소명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형법 제310조 진실성·공익성과 표현방법·상대방 범위',
        summary:
          '대법원 2004도1388(대법원, 2005.07.15 선고) 영역에서 법원은 아파트 동대표인 피고인이 자신에 대한 부정비리 의혹을 해명하기 위하여 그 의혹제기자가 명예훼손죄로 입건된 사실 등을 기재한 문서를 아파트 입주민들에게 배포한 사안에서, 문서에 기재된 내용이 대체로 객관적인 사실과 일치하고 배포가 이루어진 상대방의 범위가 제한되며 그 표현방법도 의혹제기자를 비방하는 표현이 없는 점 등 제반 사정에 비추어 위 문서 배포행위가 오로지 공공의 이익을 위하여 진실한 사실을 적시한 경우로서 형법 제310조의 위법성조각사유에 해당한다고 보았습니다. 즉 적시한 사실이 객관적으로 공공의 이익에 관한 것으로서 행위자도 공공의 이익을 위하여 적시하였고, 표현 내용의 객관적 사실 일치, 배포 상대방 범위의 제한, 비방 표현의 부재 등 여러 사정을 종합해 위법성이 조각될 수 있다고 판시했습니다. 경쟁사 비교 리뷰 해명 사안에서도 진실성·공익성·표현방법을 검토해볼 수 있습니다.',
        takeaway: '비교 후기 + 공익 목적 + 명예훼손 고소 결합 시 객관적 사실 일치·공익 목적·배포 범위 제한·비방 표현 부재 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '비교 후기를 올렸을 뿐인데 명예훼손이 되나요?',
        answer:
          '<strong>진실한 사실을 오로지 공익 목적으로 적시하면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '제 이익을 위한 마음이 섞이면 위법성조각이 안 되나요?',
        answer:
          '<strong>주된 목적이 공익이면 부수적 사익 동기가 있어도 제310조 적용이 배제되지 않을 수 있는 영역입니다.</strong> 동기·경위 자료를 정리.',
      },
      {
        question: '비교 표현이 다소 날카로우면 문제가 되나요?',
        answer:
          '<strong>상대방을 비방하는 표현 유무와 배포 범위 등을 종합해 위법성조각 여부가 검토되는 영역입니다.</strong> 표현방법·배포 범위 자료를 정리.',
      },
      {
        question: '사실과 다르게 신고된 것 같으면 어떻게 하나요?',
        answer:
          '<strong>사실과 다르게 신고되었다면 근거 자료와 게시 경위로 진실·공익성을 소명할 수 있는 영역입니다.</strong> 근거·경위 자료를 미리 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>객관적 사실 일치·공익 목적과 비방 표현이 없다는 점, 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손/모욕 종합 가이드', href: '/guide/defamation' },
      { label: '사실적시 공익 명예훼손 무고', href: '/guide/defamation/defamation-public-interest-truth-falsely-accused-defense' },
      { label: '사실을 말했는데 명예훼손으로 고소당했을 때', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '인터넷 댓글 명예훼손 정통망법 형법 비교', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '명예훼손 유포자 정상참작 합의', href: '/guide/defamation/defamation-spreader-accused-mitigation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-renunciation-creditor-revocation-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-creditor-revocation-track',
    keyword: '상속포기 채권자취소',
    questionKeyword: '빚이 많은 부모님 재산을 한정승인하면서 재산목록을 적었는데, 일부 재산을 빠뜨렸다고 상속채권자가 단순승인이라며 제 재산까지 노려요. 재산이 있는 걸 몰라서가 아니라 깜빡한 것도 단순승인이 되는지, 누가 증명해야 하는지 막막합니다.',
    ctaKeyword: '상속포기·한정승인 단순승인 분쟁 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '상속포기 채권자취소 — 5단계 단순승인·사해의사 점검 | 로앤가이드',
      description:
        '한정승인·상속포기 후 재산목록 누락으로 단순승인 분쟁에 휘말렸다면, 민법 제1026조 제3호 사해의사 요건과 증명책임, 한정승인 취지의 신중한 판단까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"빚이 많은 부모님의 상속 문제를 정리하려고 한정승인을 하면서 재산목록을 작성했는데, 일부 재산이 빠졌다는 이유로 상속채권자가 \'고의로 빠뜨렸으니 단순승인한 것\'이라며 제 고유재산까지 집행하려 해 막막한 상황입니다. 어떤 재산이 있다는 사실을 몰라서가 아니라 경황이 없어 누락한 것뿐인데도 단순승인으로 보아 제 모든 재산으로 부모님 빚을 갚아야 하는지, \'고의로 기입하지 않았다\'는 것을 도대체 누가 증명해야 하는지, 한정승인이라는 제도가 이렇게 쉽게 무너지는 것인지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제1026조 제3호는 상속인이 한정승인이나 포기를 한 후에 상속재산을 은닉하거나 부정소비하거나 고의로 재산목록에 기입하지 아니한 때에는 단순승인을 한 것으로 보도록 정하고, 민법 제1028조는 상속받은 재산의 한도에서 채무를 변제하는 한정승인을 정하는 영역입니다. 판례는 제1026조 제3호의 \'고의로 재산목록에 기입하지 아니한 때\'란 한정승인을 함에 있어 상속재산을 은닉하여 상속채권자를 사해할 의사로써 상속재산을 재산목록에 기입하지 않는 것을 뜻하므로, 위 규정에 해당하려면 상속인이 어떠한 상속재산이 있음을 알면서 이를 재산목록에 기입하지 아니하였다는 사정만으로는 부족하고 상속재산을 은닉하여 상속채권자를 사해할 의사가 있어야 하며 그 사정은 이를 주장하는 측에서 증명하여야 하고, 법원은 상속인을 보호하기 위한 한정승인제도의 취지와 의의를 염두에 두고 제1026조 제3호의 해당 여부를 신중하게 판단하여야 한다고 본 사례 흐름이 있는 영역입니다. 한정승인·상속포기 + 재산목록 누락 + 단순승인 결합은 \'사해의사·증명책임\' 다툼이 가능한 트랙입니다. 당사자라면 ① 한정승인·목록 ② 누락 경위 ③ 사해의사 ④ 증명책임 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 목록 ② 경위 ③ 사해의사 ④ 증명 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상속포기 채권자취소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 한정승인·목록·누락 경위·사해의사·증명책임·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 한정승인·목록</strong> — 한정승인·상속포기 신고와 재산목록 내용 확인.</li>\n<li><strong>② 누락 경위</strong> — 누락된 재산의 인식·경위·고의 여부 정리.</li>\n<li><strong>③ 사해의사</strong> — 상속채권자를 사해할 의사가 있었는지 검토.</li>\n<li><strong>④ 증명책임</strong> — 사해의사는 주장하는 측이 증명해야 함을 정리.</li>\n<li><strong>⑤ 대응</strong> — 단순승인 주장에 대한 다툼·소송 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 재산을 알면서 기입하지 않았다는 사정만으로는 부족하고 상속채권자를 사해할 의사가 있어야 단순승인으로 되며, 그 사해의사는 이를 주장하는 측에서 증명해야 하고 법원은 한정승인제도 취지를 고려해 신중히 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 한정승인·목록 자료 확보 (즉시)</strong> — 한정승인·상속포기 신고서·재산목록·상속재산 자료 확보.</li>\n<li><strong>2단계 — 누락 경위 정리 (1~2주)</strong> — 누락 재산의 인식 시점·누락 경위·고의 여부 정리.</li>\n<li><strong>3단계 — 사해의사·증명 정리 (2~3주)</strong> — 사해할 의사 유무, 증명책임 소재, 한정승인 취지 정리.</li>\n<li><strong>4단계 — 단순승인 다툼 (소 제기·응소 시)</strong> — 채권자의 단순승인 주장에 대한 응소·다툼.</li>\n<li><strong>5단계 — 판결·이행 (확정 후)</strong> — 책임 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속포기·한정승인 단순승인 분쟁 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 한정승인·누락 경위·사해의사 갈래입니다.</strong></p>\n<ul>\n<li><strong>한정승인·상속포기 신고서·수리 결정 (신고 확인)</strong></li>\n<li><strong>작성한 상속재산목록 사본 (목록 내용)</strong></li>\n<li><strong>피상속인 사망진단서·제적등본 (상속개시)</strong></li>\n<li><strong>누락된 재산의 인식 시점·경위 자료 (고의 여부)</strong></li>\n<li><strong>상속재산·채무 내역 자료 (청산 범위)</strong></li>\n<li><strong>채권자 주장·소장·내용증명 (단순승인 주장)</strong></li>\n<li><strong>응소·소명 자료 메모 (사해의사 다툼)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한정승인 후 재산을 일부 빠뜨렸더라도 그것만으로 단순승인이 되는 것이 아니라 상속채권자를 사해할 의사가 있어야 하고 그 의사는 이를 주장하는 채권자 측이 증명해야 하는 영역이므로 누락 경위와 인식 시점을 구체적으로 정리하는 것이 핵심. 한정승인 청산절차에서는 재산목록 기재 여부와 무관하게 실제 상속채권자이면 청산 대상이 되므로 채무·재산 내역도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고의 누락</strong> — 재산을 알면서 기입하지 않았는지.</li>\n<li><strong>사해의사</strong> — 상속채권자를 사해할 의사가 있었는지.</li>\n<li><strong>증명책임</strong> — 사해의사를 주장하는 측이 증명하는지.</li>\n<li><strong>한정승인 취지</strong> — 상속인 보호 취지의 신중한 판단.</li>\n<li><strong>책임 범위</strong> — 단순승인 여부에 따른 고유재산 집행 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (한정승인·상속포기 신고)</strong></li>\n<li><strong>국세청 126 (상속세 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 법정단순승인의 사해의사 요건과 증명책임',
        summary:
          '대법원 2019다29853(대법원, 2022.07.28 선고) 영역에서 법원은 민법 제1026조 제3호의 \'상속인이 한정승인이나 포기를 한 후에 상속재산을 은닉하거나 부정소비하거나 고의로 재산목록에 기입하지 아니한 때\'에서 \'고의로 재산목록에 기입하지 아니한 때\'라 함은 한정승인을 함에 있어 상속재산을 은닉하여 상속채권자를 사해할 의사로써 상속재산을 재산목록에 기입하지 않는 것을 뜻하므로, 위 규정에 해당하기 위해서는 상속인이 어떠한 상속재산이 있음을 알면서 이를 재산목록에 기입하지 아니하였다는 사정만으로는 부족하고 상속재산을 은닉하여 상속채권자를 사해할 의사, 즉 그 재산의 존재를 쉽게 알 수 없게 만들려는 의사가 있을 것을 필요로 하며 그 사정은 이를 주장하는 측에서 증명하여야 한다고 보았습니다. 또한 법원은 상속인이 피상속인의 채무를 무한정 상속하여 파탄에 빠지는 것을 막아 상속인을 보호하려는 한정승인제도의 취지와 의의를 염두에 두고 민법 제1026조 제3호의 의미와 효과를 고려하여 그 해당 여부를 신중하게 판단하여야 한다고 판시했습니다. 상속포기·한정승인 단순승인 분쟁 사안에서도 사해의사·증명책임을 검토해볼 수 있습니다.',
        takeaway: '한정승인·상속포기 + 재산목록 누락 + 단순승인 결합 시 사해의사 요건·증명책임 소재·한정승인 취지의 신중한 판단 검토 영역 — 변호사 상담·가정법원·응소 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '재산목록에서 일부를 빠뜨리면 단순승인이 되나요?',
        answer:
          '<strong>빠뜨린 것만으로는 부족하고 상속채권자를 사해할 의사가 있어야 단순승인으로 검토되는 영역입니다.</strong> 누락 경위·인식 시점 자료를 정리.',
      },
      {
        question: '몰라서가 아니라 깜빡한 것도 단순승인인가요?',
        answer:
          '<strong>알면서 기입하지 않았다는 사정만으로는 부족하고 사해의사가 필요한 영역입니다.</strong> 누락 경위·고의 여부 자료를 정리.',
      },
      {
        question: '사해의사는 누가 증명하나요?',
        answer:
          '<strong>사해할 의사는 이를 주장하는 채권자 측에서 증명해야 하는 영역입니다.</strong> 채권자 주장·소명 자료를 정리.',
      },
      {
        question: '한정승인이 단순승인으로 쉽게 뒤집히나요?',
        answer:
          '<strong>법원은 상속인 보호라는 한정승인 취지를 고려해 신중하게 판단하는 영역입니다.</strong> 한정승인 신고·목록 자료를 정리.',
      },
      {
        question: '채권자가 제 재산을 집행하려 하면 어떻게 하나요?',
        answer:
          '<strong>단순승인 여부를 다투며 책임 범위를 소명할 수 있는 영역입니다.</strong> 응소·소명·재산 자료를 정리.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 신고기간', href: '/guide/inheritance/inheritance-qualified-acceptance-period-track' },
      { label: '상속 종합 가이드', href: '/guide/inheritance' },
      { label: '미성년 자녀 상속포기 절차', href: '/guide/inheritance/inheritance-minor-child-renounce-procedure' },
      { label: '한정승인 후 추가 채무', href: '/guide/inheritance/inheritance-limited-acceptance-post-debt' },
      { label: '기여분 청구', href: '/guide/inheritance/inheritance-contribution-portion-claim-track' },
    ],
  },

  // ─── 10. traffic-accident-merge-zipper-lane-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-merge-zipper-lane-fault-track',
    keyword: '합류구간 끼어들기 사고 과실',
    questionKeyword: '합류구간에서 갑자기 끼어든 차를 피하려다 사고가 났는데, 충돌을 피하려고 한 제 행동까지 과실로 잡힐까 봐 걱정이에요. 회피 과정에서 생긴 사고는 어떻게 책임을 나누는지, 중대한 과실로 보면 어떤 불이익이 있는지 막막합니다.',
    ctaKeyword: '합류구간 끼어들기 사고 과실·중과실 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '합류구간 끼어들기 사고 과실 — 5단계 과실·중과실 점검 | 로앤가이드',
      description:
        '합류구간 끼어들기 회피 중 사고가 났다면, 민법 제750조 손해배상과 과실비율 산정, 중대한 과실 판단 기준·회피행위 평가까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"도로 합류구간을 주행하던 중 옆에서 갑자기 차가 끼어들어, 충돌을 피하려고 급히 방향을 트는 순간 사고로 이어진 상황입니다. 다른 사고를 막으려고 한 행동인데도 회피 과정에서 생긴 사고라는 이유로 제 과실이 지나치게 크게 잡히는 것은 아닌지, 끼어든 차의 책임은 제대로 따져지는지 불안하고 막막합니다. 특히 누군가가 다쳤을 때 제 행동이 \'중대한 과실\'로 평가되면 나중에 채무가 면책되지 않는 등 어떤 불이익이 있는지, 회피하다 생긴 사고는 어떻게 책임을 나누는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제750조는 고의·과실로 인한 위법행위로 타인에게 손해를 가한 자의 배상책임을 정하고, 과실상계에 따라 각자의 과실비율만큼 책임이 조정되는 영역입니다. 또한 채무자 회생 및 파산에 관한 법률 제566조 제4호는 채무자가 중대한 과실로 타인의 생명·신체를 침해한 불법행위로 발생한 손해배상청구권을 비면책채권으로 정합니다. 판례는 위 \'중대한 과실\'이란 채무자가 조금만 주의를 기울였다면 생명·신체 침해의 결과를 쉽게 예견하거나 회피할 수 있음에도 일반인에게 요구되는 주의의무를 현저히 위반하는 것을 말하고, 중대한 과실이 있는지는 사고 발생 경위, 주의의무 위반의 원인·내용 등 주의의무 위반 당시의 구체적 상황을 종합적으로 고려해 판단하여야 하며, 운전자가 다른 사고의 발생을 피하려는 과정에서 중앙선을 침범하게 되었고 제한속도를 현저히 초과하지 않은 경우 등에는 중앙선 침범 사고를 일으켰다는 사정만으로 곧바로 중대한 과실이 있다고 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 합류 끼어들기 + 회피행위 + 과실비율 결합은 \'과실비율·중과실 판단\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사고·과실 ② 과실비율 ③ 회피행위 ④ 중과실 판단 ⑤ 합의 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 과실 ② 비율 ③ 회피 ④ 중과실 ⑤ 합의 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 합류구간 끼어들기 사고 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·과실·과실비율·회피행위·중과실 판단·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·과실</strong> — 합류·끼어들기 경위·차량 진행 등 과실 정리.</li>\n<li><strong>② 과실비율</strong> — 끼어든 차량·회피 운전자의 과실비율 산정.</li>\n<li><strong>③ 회피행위</strong> — 충돌 회피를 위한 행동의 경위·상황 정리.</li>\n<li><strong>④ 중과실 판단</strong> — 주의의무 현저한 위반 여부, 중대한 과실 판단 검토.</li>\n<li><strong>⑤ 합의</strong> — 손해배상·합의·소멸시효 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 중대한 과실은 주의의무를 현저히 위반한 경우를 말하고 구체적 상황을 종합해 판단하며, 다른 사고를 피하려다 중앙선을 침범했고 제한속도를 현저히 초과하지 않은 경우 등에는 침범 사실만으로 곧바로 중대한 과실로 단정할 수 없는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·과실 증거 확보 (즉시)</strong> — 블랙박스·CCTV·현장 사진·진단서 확보.</li>\n<li><strong>2단계 — 과실비율·회피 정리 (즉시~1주)</strong> — 합류·끼어들기 경위, 회피행위 상황, 과실비율 정리.</li>\n<li><strong>3단계 — 중과실·손해 정리 (1~2주)</strong> — 주의의무 위반 정도, 중대한 과실 여부, 손해 정리.</li>\n<li><strong>4단계 — 손해배상·이의 (분쟁 시)</strong> — 보험사·가해자 손해배상 청구, 과실·중과실 다툼 검토.</li>\n<li><strong>5단계 — 합의·소멸시효 (병행)</strong> — 합의 조건 검토, 손해배상 소멸시효 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">합류구간 끼어들기 사고 과실·중과실 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사고·과실·중과실 갈래입니다.</strong></p>\n<ul>\n<li><strong>교통사고 사실확인원·신고 자료 (사고 발생)</strong></li>\n<li><strong>블랙박스·CCTV·주행 자료 (과실비율)</strong></li>\n<li><strong>현장 사진·합류구간·차로 자료 (과실 평가)</strong></li>\n<li><strong>회피행위 경위·상황 자료 (회피행위 평가)</strong></li>\n<li><strong>주행 속도·신호 등 운전 상황 자료 (중과실 판단)</strong></li>\n<li><strong>상해진단서·치료·손해 자료 (피해·손해 산정)</strong></li>\n<li><strong>손해·합의 관련 서류 (손해배상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합류구간 끼어들기 사고는 끼어든 차량의 진입 경위와 회피 운전자의 상황에 따라 과실비율이 정리되는 영역이므로 블랙박스·CCTV·현장 자료를 먼저 확보하는 것이 핵심. 다른 사고를 피하려다 생긴 회피 과정의 사고는 제한속도 초과 여부 등 구체적 상황을 종합해 판단되고 침범 사실만으로 곧바로 중대한 과실로 단정되지 않을 수 있으므로 주행 속도·회피 경위 자료도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>과실비율</strong> — 끼어든 차량·회피 운전자의 과실비율 산정.</li>\n<li><strong>회피행위</strong> — 충돌 회피를 위한 행동의 경위·상당성.</li>\n<li><strong>중과실 판단</strong> — 주의의무 현저한 위반 여부, 구체적 상황 종합.</li>\n<li><strong>중앙선 침범</strong> — 회피 과정 침범이 곧바로 중과실인지.</li>\n<li><strong>손해·소멸시효</strong> — 손해 산정과 손해배상청구권의 소멸시효.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁 상담)</strong></li>\n<li><strong>손해보험협회 (보험·보상 안내)</strong></li>\n<li><strong>경찰 182 (교통 민원·사고 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중대한 과실의 판단 기준과 회피 과정 중앙선 침범',
        summary:
          '대법원 2023다308270(대법원, 2024.05.17 선고) 영역에서 법원은 채무자 회생 및 파산에 관한 법률 제566조 제4호에서 비면책채권으로 정한 \'중대한 과실\'이란 채무자가 어떠한 행위를 함에 있어서 조금만 주의를 기울였다면 생명 또는 신체 침해의 결과가 발생하리라는 것을 쉽게 예견할 수 있음에도 그러한 행위를 만연히 계속하거나, 조금만 주의를 기울였다면 그 결과를 쉽게 회피할 수 있음에도 그러한 행위를 하지 않는 등 일반인에게 요구되는 주의의무를 현저히 위반하는 것을 말하고, 중대한 과실이 있는지는 주의의무 위반으로 사고가 발생한 경위, 주의의무 위반의 원인·내용 등 주의의무 위반 당시의 구체적 상황을 종합적으로 고려하여 판단하여야 한다고 보았습니다. 또한 교통사고처리 특례법은 중과실이 아닌 경과실로 중앙선을 침범하는 경우도 예정하고 있으므로 중앙선 침범 사고를 일으켰다는 사정만으로 곧바로 중대한 과실이 존재한다고 단정할 수 없고, 운전자가 다른 사고의 발생을 피하려는 과정에서 중앙선을 침범하게 되었으며 제한속도를 현저히 초과하여 주행하지 않은 경우 등에는 중대한 과실이 있다고 보기 어렵다고 판시했습니다. 합류구간 끼어들기 회피 사고 사안에서도 과실비율·중과실 판단을 검토해볼 수 있습니다.',
        takeaway: '합류 끼어들기 + 회피행위 + 과실비율 결합 시 과실비율 산정·중대한 과실 판단 기준·회피 과정 중앙선 침범의 경과실 가능성 검토 영역 — 변호사 상담·보험·법률구조공단 검토 권장.',
      },
    ],
    faq: [
      {
        question: '끼어든 차를 피하다 난 사고도 제 과실이 큰가요?',
        answer:
          '<strong>회피 경위와 양쪽 운전 상황을 종합해 과실비율을 산정하는 영역입니다.</strong> 블랙박스·현장 자료를 정리.',
      },
      {
        question: '충돌을 피하려 한 행동까지 과실로 잡히나요?',
        answer:
          '<strong>회피행위의 경위·상당성을 함께 고려해 과실을 평가하는 영역입니다.</strong> 회피 경위·상황 자료를 정리.',
      },
      {
        question: '중대한 과실은 무엇을 기준으로 판단하나요?',
        answer:
          '<strong>주의의무를 현저히 위반했는지를 구체적 상황을 종합해 판단하는 영역입니다.</strong> 주행 속도·사고 경위 자료를 정리.',
      },
      {
        question: '회피하다 중앙선을 넘으면 무조건 중과실인가요?',
        answer:
          '<strong>다른 사고를 피하려다 침범했고 과속이 아니면 곧바로 중과실로 단정되지 않을 수 있는 영역입니다.</strong> 회피·속도 자료를 정리.',
      },
      {
        question: '손해배상은 언제까지 청구해야 하나요?',
        answer:
          '<strong>손해 및 가해자를 안 날부터 3년 등 소멸시효를 확인해야 하는 영역입니다.</strong> 사고·치료·인지 시점 자료를 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '무단횡단 보행자 사고 과실비율 판단', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalking-fault-ratio-track' },
      { label: '오토바이 차로변경 사고 과실비율', href: '/guide/traffic-accident/traffic-accident-motorcycle-lanechange-fault-track' },
      { label: '무단횡단 보행자 사고 과실', href: '/guide/traffic-accident/traffic-accident-jaywalking-pedestrian-fault-track' },
      { label: '교통사고 보상금 산정 기준 총정리', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 합의서 작성 전 확인 항목', href: '/guide/traffic-accident/traffic-settlement-agreement-checklist' },
    ],
  },
];
