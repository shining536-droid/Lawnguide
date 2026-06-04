import { SpokePage } from '../spoke-pages';

// batch87 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-04)
//
// 고유 존재 이유:
// 1. divorce-domestic-violence-ground-track — 가정폭력·재산 처분으로 혼인이 파탄된 피해 배우자의 재판상 이혼 판단형 트랙. 민법 제840조 제6호 중대한 사유 판단 기준과 공동재산 일방 처분의 의미가 핵심.
// 2. divorce-retirement-pay-division-track — 배우자 퇴직금 등 부부재산의 재산분할 판단형 트랙. 재산분할의무의 상속인 승계와 사망한 전 배우자 상속인에 대한 청구 가부가 핵심.
// 3. divorce-spouse-gambling-debt-track — 배우자의 도박 빚 등 일방 채무의 재산분할 대상 여부 판단형 트랙. 일방이 생기게 한 채무의 분할대상 제외와 변론종결일 기준시점이 핵심.
// 4. divorce-marriage-annulment-track — 혼인취소·재판상 이혼 사유를 정리하는 절차형 트랙. 혼인을 계속하기 어려운 중대한 사유와 파탄 시 이혼 허용 기준이 핵심.
// 5. defamation-sns-comment-track — SNS 댓글 명예훼손 피해자 판단형 트랙. 공연성의 의미와 전파가능성 이론, 소수 적시의 공연성 인정 기준이 핵심.
// 6. defamation-openchat-rumor-track — 오픈채팅 소문 명예훼손 피해자 판단형 트랙. 특정 소수 적시의 전파가능성에 대한 검사의 엄격한 증명과 친밀·비밀관계 예외가 핵심.
// 7. defamation-workplace-rumor-track — 직장 내 소문·거친 표현 명예훼손·모욕 피해자 판단형 트랙. 전파가능성 공연성과 미필적 고의, 조악한 표현 전파 예상 가능성이 핵심.
// 8. defamation-community-post-falsely-accused-defense — accused 관점. 의혹 해명 게시글이 형법 제310조 공익·진실성으로 위법성조각되는지 다투는 방어 트랙. 진실·공익·표현방법·배포 범위가 핵심.
// 9. inheritance-forced-heirship-reserve-track — 유류분 반환청구 판단형 트랙. 포괄·특정유증 구분과 유류분 부족액 산정, 포괄적 수증자의 소극재산 승계 처리가 핵심.
// 10. traffic-accident-motorcycle-lanechange-track — 이륜차 차로변경·중앙선 침범 사고 피해자 과실·면책 판단형 트랙. 중대한 과실 판단 기준과 경과실 중앙선 침범 사고의 비면책채권 해당 여부가 핵심.

export const spokesBatch87DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-domestic-violence-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-ground-track',
    keyword: '가정폭력 이혼 사유',
    questionKeyword: '배우자의 폭력과 일방적인 재산 처분으로 혼인생활이 더는 이어질 수 없게 됐어요. 이 정도면 재판상 이혼 사유가 되는지, 어떤 기준으로 \'혼인을 계속하기 어려운 중대한 사유\'를 따지는지 막막합니다.',
    ctaKeyword: '가정폭력·중대한 사유 이혼 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '가정폭력 이혼 — 5단계 중대한 사유·재산처분 점검 | 로앤가이드',
      description:
        '배우자 폭력과 재산 처분으로 혼인이 깨졌다면, 민법 제840조 제6호 혼인을 계속하기 어려운 중대한 사유의 판단 기준과 공동재산 일방 처분의 의미, 파탄 책임·증거까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 기간 배우자의 폭력과 위협을 견디며 살아왔는데, 최근에는 함께 모은 재산까지 제 동의 없이 일방적으로 처분해버려 가정의 경제적 기반마저 흔들리는 상황입니다. 더는 신뢰도 애정도 남지 않아 혼인을 이어갈 수 없는 지경인데, 이 정도면 재판으로 이혼을 받아낼 수 있는 사유가 되는지, 법원은 무엇을 기준으로 \'혼인을 계속하기 어려운 중대한 사유\'를 따지는지 도무지 가늠이 되지 않아 막막한 상태입니다. 혹시 제게도 책임이 있다고 보면 이혼이 안 되는 건 아닌지 답답하기만 합니다." 민법 제840조 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 재판상 이혼 사유로 정하고, 민법 제839조의2는 이혼에 따른 재산분할청구권을 정하는 영역입니다. 판례는 제840조 제6호의 중대한 사유란 부부공동생활관계가 회복할 수 없을 정도로 파탄되어 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하고, 혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등을 두루 고려해 판단하며, 배우자 쌍방의 협력으로 이룬 재산의 주요 부분을 정당한 이유 없이 일방적으로 처분해 가정공동체의 경제적 기반을 형해화하는 행위도 중대한 사유에 해당할 수 있다고 본 사례 흐름이 있는 영역입니다. 가정폭력 + 재산 처분 + 파탄 결합은 \'중대한 사유·파탄 책임\' 정리가 필요한 트랙입니다. 당사자라면 ① 폭력·처분 증거 ② 파탄 정도 ③ 중대한 사유 ④ 파탄 책임 ⑤ 이혼·재산분할 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 증거 ② 파탄 ③ 사유 ④ 책임 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가정폭력 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭력·처분 증거·파탄 정도·중대한 사유·파탄 책임·이혼 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭력·처분 증거</strong> — 폭력 피해·일방적 재산 처분 정황 자료의 확보·보존.</li>\n<li><strong>② 파탄 정도</strong> — 부부공동생활관계가 회복할 수 없을 정도로 파탄되었는지 정리.</li>\n<li><strong>③ 중대한 사유</strong> — 제840조 제6호 혼인을 계속하기 어려운 중대한 사유 해당 여부.</li>\n<li><strong>④ 파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임정도 정리.</li>\n<li><strong>⑤ 이혼·재산분할</strong> — 재판상 이혼·재산분할·위자료 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 부부공동생활관계가 회복할 수 없을 정도로 파탄되었다면 원고 책임이 상대방보다 더 무겁지 않은 한 이혼 청구를 받아들일 수 있고, 공동재산 주요 부분을 정당한 이유 없이 일방 처분한 행위도 중대한 사유가 될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안전·증거 확보 (즉시)</strong> — 긴급 시 112·1366, 진단서·신고 이력·재산 처분 자료 확보.</li>\n<li><strong>2단계 — 파탄·사유 정리 (1~2주)</strong> — 폭력·재산 처분 경위, 파탄 정도, 중대한 사유 해당 여부 정리.</li>\n<li><strong>3단계 — 파탄 책임·재산 정리 (2~3주)</strong> — 파탄에 관한 쌍방 책임정도, 부부재산·기여도 정리.</li>\n<li><strong>4단계 — 이혼·재산분할 청구 (소 제기 시)</strong> — 재판상 이혼·재산분할·위자료 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 재산분할·위자료 이행, 자녀·양육 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">가정폭력·중대한 사유 이혼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 폭력·재산처분·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>상해진단서·치료 기록 (폭력 피해)</strong></li>\n<li><strong>112 신고 이력·경찰 진술 자료 (반복성)</strong></li>\n<li><strong>일방적 재산 처분·이체 거래 내역 (경제 기반 침해)</strong></li>\n<li><strong>부부 재산·소득 자료 (재산분할)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (중대한 사유·책임정도)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼인을 계속하기 어려운 중대한 사유는 폭력의 반복성·정도와 공동재산의 일방적 처분 등 객관적 사정을 종합해 파탄 여부로 판단되는 영역이므로, 진단서·신고 이력과 재산 처분 내역을 시간 순으로 정리하는 것이 핵심. 파탄에 관한 본인 책임이 상대보다 더 무겁지 않다는 점도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>파탄 여부</strong> — 부부공동생활관계가 회복할 수 없을 정도로 파탄되었는지.</li>\n<li><strong>중대한 사유</strong> — 폭력·재산 처분이 제840조 제6호에 해당하는지.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임정도.</li>\n<li><strong>재산 처분</strong> — 공동재산 일방 처분의 정당한 이유 유무.</li>\n<li><strong>위자료·재산분할</strong> — 정신적 고통의 위자료·재산분할 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·재산분할 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366 (가정폭력 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동재산 일방 처분과 혼인을 계속하기 어려운 중대한 사유',
        summary:
          '대법원 2025므10730(대법원, 2025.09.04 선고) 영역에서 법원은 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부공동생활관계가 회복할 수 없을 정도로 파탄되어 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하고, 혼인계속의사·파탄 책임·혼인 기간·자녀·연령·이혼 후 생활보장 등 여러 사정을 두루 고려해 판단해야 하며, 파탄이 인정되면 원고 책임이 피고보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 한다고 보았습니다. 나아가 배우자 쌍방의 협력으로 이룩한 재산의 주요 부분을 부부 일방이 정당한 이유 없이 상대방과의 협의나 동의 없이 일방적으로 처분하는 등으로 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위도 중대한 사유에 해당할 수 있다고 판시했습니다. 가정폭력·재산 처분 사안에서도 파탄·중대한 사유를 검토해볼 수 있습니다.',
        takeaway: '가정폭력 + 재산 처분 + 파탄 결합 시 회복 불가능한 파탄 여부·중대한 사유·파탄 책임정도·공동재산 일방 처분 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자 폭력이 있으면 이혼이 되나요?',
        answer:
          '<strong>반복된 폭력으로 혼인이 회복할 수 없을 정도로 파탄됐다면 중대한 사유로 이혼이 검토되는 영역입니다.</strong> 진단서·신고 이력 자료를 정리.',
      },
      {
        question: '재산을 몰래 처분한 것도 이혼 사유가 되나요?',
        answer:
          '<strong>공동재산 주요 부분을 정당한 이유 없이 일방 처분한 행위도 중대한 사유가 될 수 있는 영역입니다.</strong> 처분 경위·거래 내역 자료를 정리.',
      },
      {
        question: '저에게도 잘못이 있으면 이혼이 안 되나요?',
        answer:
          '<strong>파탄이 인정되면 원고 책임이 상대보다 더 무겁지 않은 한 이혼 청구가 받아들여질 수 있는 영역입니다.</strong> 파탄 경위·책임정도 자료를 정리.',
      },
      {
        question: '중대한 사유는 무엇을 기준으로 판단하나요?',
        answer:
          '<strong>혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등 여러 사정을 종합해 판단하는 영역입니다.</strong> 혼인 경위 전반 자료를 정리.',
      },
      {
        question: '이혼하면서 재산분할도 함께 청구할 수 있나요?',
        answer:
          '<strong>재판상 이혼과 함께 재산분할·위자료를 청구할 수 있는 영역입니다.</strong> 부부 재산·기여 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '혼인 파탄 책임 판단', href: '/guide/divorce/divorce-marriage-breakdown-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '접근금지·보호명령 신청', href: '/guide/divorce/divorce-protection-order-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 2. divorce-retirement-pay-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-retirement-pay-division-track',
    keyword: '배우자 퇴직금 재산분할',
    questionKeyword: '이혼하면서 배우자 명의의 퇴직금·재산을 어떻게 나누는지 막막해요. 혼인 중 함께 모은 재산은 명의와 상관없이 나눌 수 있다는데, 만약 상대가 분할 도중 사망하면 그 몫은 어떻게 되는지도 궁금합니다.',
    ctaKeyword: '배우자 퇴직금·재산분할 기준 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '배우자 퇴직금 재산분할 — 5단계 분할대상·승계 점검 | 로앤가이드',
      description:
        '이혼하며 배우자 퇴직금·재산을 나누려 한다면, 민법 제839조의2 재산분할의 명의 무관 청산 원칙과 분할의무의 상속인 승계, 분할대상·기여도·2년 제척기간까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 혼인생활 동안 맞벌이로 함께 살림을 일궈 왔는데, 정작 큰 재산은 대부분 배우자 명의로 되어 있어 이혼하면 제 몫을 제대로 받을 수 있을지 막막한 상황입니다. 배우자의 퇴직금이나 연금까지 재산분할 대상이 되는지, 명의가 상대 앞으로 되어 있어도 나눌 수 있는지 헷갈립니다. 게다가 분할 절차를 진행하던 중에 상대방이 사망하면 그 몫은 어떻게 되는지, 상속인들에게 청구할 수 있는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제839조의2는 협의상 이혼한 자 일방이 다른 일방에 대하여 재산분할을 청구할 수 있도록 정하고, 민법 제843조는 이를 재판상 이혼에 준용하는 영역입니다. 판례는 재산분할 제도가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 해 부부별산제를 보완하고 재산의 명의와 상관없이 형성·유지에 기여한 실질에 따라 각자의 몫을 분할하는 제도임을 전제로, 비록 재산분할청구권이 행사상 일신전속성을 가지더라도 혼인 중 형성한 재산관계를 이혼에 즈음해 청산하는 본질과 공평의 관념에 비추어 이혼한 당사자 일방이 사망하면 그 재산분할의무는 상속인들에게 승계되고, 특별한 사정이 없는 한 이혼한 당사자 일방은 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 본 사례 흐름이 있는 영역입니다. 배우자 퇴직금 + 명의 무관 청산 + 분할의무 승계 결합은 \'분할대상·기여도·승계\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산 파악 ② 분할대상 ③ 기여도 ④ 청구 ⑤ 승계 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 대상 ③ 기여 ④ 청구 ⑤ 승계 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 퇴직금 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산 파악·분할대상·기여도·청구·승계 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산 파악</strong> — 부부 적극·소극재산, 퇴직금·연금 등 파악.</li>\n<li><strong>② 분할대상</strong> — 명의와 무관하게 혼인 중 형성한 재산의 분할 대상 정리.</li>\n<li><strong>③ 기여도</strong> — 재산 형성·유지에 대한 기여도 평가 검토.</li>\n<li><strong>④ 청구</strong> — 재산명시·조회와 함께 재산분할 청구 검토.</li>\n<li><strong>⑤ 승계</strong> — 당사자 일방 사망 시 분할의무의 상속인 승계 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 재산분할은 명의와 상관없이 형성·유지에 기여한 실질에 따라 각자의 몫을 분할하는 제도이고, 이혼한 당사자 일방이 사망하면 그 재산분할의무는 상속인들에게 승계되어 사망한 전 배우자의 상속인들을 상대로 청구할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·거래 자료 보존 (즉시)</strong> — 부동산 등기·계좌·퇴직금·연금 자료 보존.</li>\n<li><strong>2단계 — 분할대상·기여도 정리 (1~2주)</strong> — 명의 무관 분할 대상, 기여도·형성 경위 정리.</li>\n<li><strong>3단계 — 가액·기준시점 정리 (2~3주)</strong> — 변론종결일 기준 가액, 퇴직금·연금 평가 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·승계 (확정 후)</strong> — 분할 범위 확정·이행, 당사자 사망 시 상속인 승계 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 퇴직금·재산분할 기준 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·기여·승계 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>퇴직금·연금·보험 자료 (분할 대상)</strong></li>\n<li><strong>재산 형성·기여 입증 자료 (기여도)</strong></li>\n<li><strong>혼인 중 거래·소득 자료 (형성 경위)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n<li><strong>상대방 사망 시 상속인·상속 자료 (승계)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직금·연금도 혼인 중 형성·유지에 기여한 범위에서 재산분할 대상이 될 수 있는 영역이므로 명의와 상관없이 형성 경위·기여를 보여주는 자료를 정리하는 것이 핵심. 이혼한 당사자 일방이 분할 절차 중 사망하면 그 분할의무는 상속인들에게 승계되어 상속인들을 상대로 청구할 수 있는 점도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할 대상</strong> — 퇴직금·연금 등이 분할 대상에 포함되는지.</li>\n<li><strong>명의 귀속</strong> — 명의와 무관하게 실질 기여로 분할되는지.</li>\n<li><strong>기여도</strong> — 재산 형성·유지에 대한 기여도 평가.</li>\n<li><strong>분할의무 승계</strong> — 당사자 사망 시 상속인들에게 승계되는지.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년의 재산분할청구 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할의무의 상속인 승계와 명의 무관 청산',
        summary:
          '대법원 2024스876(대법원, 2026.01.15 선고) 영역에서 법원은 협의상 이혼한 자 일방이 다른 일방에 대하여 재산분할을 청구할 수 있고 재판상 이혼에도 이 규정이 준용된다는 전제에서, 재산분할 제도가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 해 부부별산제를 보완하고 재산의 명의와 상관없이 형성·유지에 기여한 실질에 따라 각자의 몫을 분할하는 제도라고 보았습니다. 나아가 재산분할청구권이 이혼 후 부양적 요소·정신적 손해 배상 급부의 성질을 함께 가져 행사상 일신전속성을 가지더라도, 혼인 중 형성한 재산관계를 이혼에 즈음해 청산하는 본질과 공평의 관념에 비추어 이혼한 당사자 일방이 사망하면 그 재산분할의무는 상속인들에게 승계되고, 특별한 사정이 없는 한 이혼한 당사자 일방은 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 판시했습니다. 배우자 퇴직금·재산분할 사안에서도 분할 대상·승계를 검토해볼 수 있습니다.',
        takeaway: '배우자 퇴직금 + 명의 무관 청산 + 분할의무 승계 결합 시 분할 대상·기여도·당사자 사망 시 상속인 승계·2년 제척기간 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자 퇴직금도 재산분할 대상이 되나요?',
        answer:
          '<strong>혼인 중 형성·유지에 기여한 범위에서 퇴직금·연금도 분할 대상이 될 수 있는 영역입니다.</strong> 퇴직금·연금 자료를 정리.',
      },
      {
        question: '명의가 전부 상대 앞으로 돼 있는데 나눌 수 있나요?',
        answer:
          '<strong>명의와 상관없이 형성·유지에 기여한 실질에 따라 분할이 검토되는 영역입니다.</strong> 기여·형성 자료를 정리.',
      },
      {
        question: '분할 절차 중에 상대가 사망하면 어떻게 되나요?',
        answer:
          '<strong>재산분할의무는 상속인들에게 승계되어 상속인들을 상대로 청구할 수 있는 영역입니다.</strong> 상속인·상속 자료를 정리.',
      },
      {
        question: '기여도는 어떻게 정해지나요?',
        answer:
          '<strong>재산 형성·유지에 대한 직접·간접 기여를 종합해 평가하는 영역입니다.</strong> 소득·가사·양육 기여 자료를 정리.',
      },
      {
        question: '재산분할 청구에 기한이 있나요?',
        answer:
          '<strong>이혼한 날부터 2년이 재산분할청구권 행사 기간(제척기간)인 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '퇴직금·연금 분할', href: '/guide/divorce/divorce-pension-division-track' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 3. divorce-spouse-gambling-debt-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-gambling-debt-track',
    keyword: '배우자 도박 빚 이혼',
    questionKeyword: '배우자가 혼자 도박으로 진 빚 때문에 이혼을 결심했어요. 이 빚도 재산분할에서 함께 떠안아야 하는지, 파탄 뒤에 상대가 갚은 빚이나 줄어든 채무는 어떻게 계산하는지 막막합니다.',
    ctaKeyword: '도박 빚·일방 채무 재산분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '배우자 도박 빚 이혼 — 5단계 일방채무·분할대상 점검 | 로앤가이드',
      description:
        '배우자 도박 빚 때문에 이혼을 고민한다면, 민법 제839조의2 재산분할에서 일방이 생기게 한 채무의 분할대상 제외와 변론종결일 기준시점, 파탄 후 채무 변동까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"성실히 살아온 줄 알았던 배우자가 혼자 도박에 빠져 큰 빚을 지면서 가정 살림이 무너졌고, 결국 이혼을 결심한 상황입니다. 정작 두려운 것은, 제가 알지도 못하던 그 도박 빚까지 이혼할 때 함께 떠안아야 하는 것은 아닌지 하는 점입니다. 부부가 함께 진 빚도 아니고 오로지 상대가 혼자 만든 채무인데도 재산분할에서 나눠야 하는지, 또 부부 사이가 깨진 뒤 상대가 일부 갚아 빚이 줄어든 부분은 어떻게 계산하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제839조의2·제843조는 협의·재판상 이혼에 따른 재산분할청구권을 정하는 영역입니다. 판례는 부부가 이혼할 때 재산분할의 대상이 되는 재산은 부부 쌍방의 협력으로 이룬 것이어야 하므로, 어떤 적극재산이나 채무가 부부 쌍방의 협력이 아니라 일방에 의하여 생긴 것으로서 상대방이 그 형성·유지 또는 부담과 무관한 경우에는 이를 재산분할의 대상으로 삼을 수 없고, 분할 대상 재산과 액수 산정의 기준시기는 원칙적으로 이혼소송의 사실심 변론종결일이며, 혼인관계 파탄 이후 변론종결일 사이에 생긴 재산관계 변동이 혼인 중 공동으로 형성한 재산관계와 무관한 경우 그 변동된 재산이나 채무 감소 부분은 분할 대상이 되지 않는다고 본 사례 흐름이 있는 영역입니다. 도박 빚 + 일방 채무 + 재산분할 결합은 \'분할대상·기준시점\' 다툼이 가능한 트랙입니다. 당사자라면 ① 채무 파악 ② 일방성 ③ 분할대상 ④ 기준시점 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 일방성 ③ 대상 ④ 기준시점 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 도박 빚 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무 파악·일방성·분할대상·기준시점·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채무 파악</strong> — 부부 채무·도박 빚 등 소극재산 내역 파악.</li>\n<li><strong>② 일방성</strong> — 채무가 부부 협력이 아닌 일방에 의해 생긴 것인지 정리.</li>\n<li><strong>③ 분할대상</strong> — 일방 채무의 재산분할 대상 제외 여부 검토.</li>\n<li><strong>④ 기준시점</strong> — 분할 대상·액수의 기준시점(변론종결일) 정리.</li>\n<li><strong>⑤ 청구</strong> — 적극·소극재산 정리 후 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 부부 쌍방의 협력이 아니라 일방에 의해 생긴 채무로서 상대가 그 부담과 무관한 경우에는 재산분할 대상으로 삼을 수 없고, 분할 대상·액수는 사실심 변론종결일을 기준으로 정해지는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채무·거래 자료 보존 (즉시)</strong> — 채무 내역·도박 정황·계좌·거래 자료 보존.</li>\n<li><strong>2단계 — 일방성·관련성 정리 (1~2주)</strong> — 채무 발생 경위, 부부 협력·공동생활 관련성 정리.</li>\n<li><strong>3단계 — 분할대상·기준시점 정리 (2~3주)</strong> — 일방 채무 제외 여부, 변론종결일 기준 가액 정리.</li>\n<li><strong>4단계 — 재산명시·분할 청구 (소 제기 시)</strong> — 재산명시·조회 신청, 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">도박 빚·일방 채무 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 채무·일방성·기준시점 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>부부 채무·대출 내역 (소극재산)</strong></li>\n<li><strong>도박·일방 지출 정황 자료 (일방성)</strong></li>\n<li><strong>채무 발생 경위·사용처 자료 (관련성)</strong></li>\n<li><strong>혼인 파탄 시점 입증 자료 (기준시점)</strong></li>\n<li><strong>파탄 후 채무 변동 자료 (감소 부분)</strong></li>\n<li><strong>재산명시·조회 신청 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 도박 빚처럼 부부 협력이 아니라 일방에 의해 생긴 채무로서 상대가 그 부담과 무관하다면 재산분할 대상에서 제외될 수 있는 영역이므로 채무 발생 경위·사용처를 보여주는 자료를 정리하는 것이 핵심. 분할 대상·액수는 변론종결일을 기준으로 정해지고 파탄 후 공동재산과 무관하게 감소한 채무는 분할 대상이 되지 않을 수 있는 점도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일방성</strong> — 채무가 부부 협력이 아닌 일방에 의해 생긴 것인지.</li>\n<li><strong>관련성</strong> — 채무가 부부공동생활·공동재산과 관련된지.</li>\n<li><strong>분할대상 제외</strong> — 일방 도박 채무를 분할 대상에서 제외할지.</li>\n<li><strong>기준시점·가액</strong> — 변론종결일 기준 가액 산정.</li>\n<li><strong>채무 변동</strong> — 파탄 후 채무 감소 부분의 분할대상 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방 채무의 분할대상 제외와 변론종결일 기준',
        summary:
          '대법원 2024므10721(대법원, 2024.05.17 선고) 영역에서 법원은 부부가 이혼할 때 재산분할의 대상이 되는 재산은 부부 쌍방의 협력으로 이룬 것이어야 하므로, 어떤 적극재산이나 채무가 부부 쌍방의 협력이 아니라 부부 중 일방에 의하여 생긴 것으로서 상대방이 그 형성이나 유지 또는 부담과 무관한 경우에는 이를 재산분할의 대상으로 삼을 수 없다고 보았습니다. 또한 재판상 이혼에 따른 재산분할에서 분할 대상이 되는 재산과 그 액수 산정의 기준시기는 원칙적으로 이혼소송의 사실심 변론종결일이고, 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관하다는 등의 사정이 있는 경우 그 변동된 재산은 분할 대상이 되지 않으며, 분할 대상 채무가 파탄 이후 일방의 노력·비용으로 감소했고 그 감소가 공동재산과 무관한 경우 그 감소 부분도 분할 대상이 되지 않는다고 판시했습니다. 도박 빚·일방 채무 사안에서도 분할대상·기준시점을 검토해볼 수 있습니다.',
        takeaway: '도박 빚 + 일방 채무 + 재산분할 결합 시 일방 채무의 분할대상 제외·변론종결일 기준시점·파탄 후 채무 변동 검토 영역 — 변호사 상담·재산명시·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자 도박 빚도 함께 나눠야 하나요?',
        answer:
          '<strong>부부 협력이 아니라 일방에 의해 생긴 채무로 상대가 무관하면 분할 대상에서 제외될 수 있는 영역입니다.</strong> 채무 발생 경위·사용처 자료를 정리.',
      },
      {
        question: '어떤 빚이 분할 대상이 되나요?',
        answer:
          '<strong>부부 공동생활·공동재산 형성과 관련된 채무가 분할 대상으로 검토되는 영역입니다.</strong> 채무 사용처·관련성 자료를 정리.',
      },
      {
        question: '재산은 어느 시점 기준으로 나누나요?',
        answer:
          '<strong>분할 대상·액수는 원칙적으로 사실심 변론종결일을 기준으로 정하는 영역입니다.</strong> 시점별 재산·채무 자료를 정리.',
      },
      {
        question: '파탄 뒤 상대가 갚아 줄어든 빚은 어떻게 되나요?',
        answer:
          '<strong>파탄 후 공동재산과 무관하게 일방 노력으로 감소한 채무는 분할 대상이 되지 않을 수 있는 영역입니다.</strong> 변제 경위·시점 자료를 정리.',
      },
      {
        question: '도박 빚을 제가 갚아야 할 수도 있나요?',
        answer:
          '<strong>채무 성격·관련성에 따라 분할 결과가 달라질 수 있어 개별 검토가 필요한 영역입니다.</strong> 채무 내역·경위 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '부부 채무 분담 기준', href: '/guide/divorce/divorce-debt-division-track' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 4. divorce-marriage-annulment-track ───
  {
    domain: 'divorce',
    slug: 'divorce-marriage-annulment-track',
    keyword: '혼인취소 청구',
    questionKeyword: '속아서 혼인했거나 혼인을 이어가기 어려운 사정이 생겨 혼인을 정리하고 싶어요. 혼인취소와 이혼이 어떻게 다른지, 어떤 경우에 혼인을 계속하기 어려운 중대한 사유로 보아 이혼이 인정되는지 막막합니다.',
    ctaKeyword: '혼인취소·재판상 이혼 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '혼인취소 청구 — 5단계 취소사유·이혼절차 점검 | 로앤가이드',
      description:
        '혼인을 취소하거나 정리하고 싶다면, 민법 제816조 혼인취소 사유와 제840조 제6호 혼인을 계속하기 어려운 중대한 사유, 파탄 시 이혼 허용 기준·절차까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"혼인 전에는 몰랐던 사정이 드러나거나, 혼인을 도저히 이어갈 수 없는 상황에 놓여 혼인 자체를 정리하고 싶은 상황입니다. 그런데 \'혼인취소\'와 \'이혼\'이 어떻게 다른지, 제 경우가 둘 중 어느 쪽에 해당하는지부터 헷갈립니다. 혼인이 사실상 깨졌더라도 상대가 끝까지 거부하면 법원이 이혼을 받아주는지, 어떤 사정이 있어야 \'혼인을 계속하기 어려운 중대한 사유\'로 인정되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제816조는 혼인취소 사유를, 민법 제840조는 재판상 이혼 사유를 정하고, 그중 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 이혼 사유로 규정하는 영역입니다. 판례는 제840조 제6호의 중대한 사유란 부부공동생활관계가 회복할 수 없을 정도로 파탄되어 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말하고, 이를 판단할 때에는 혼인계속의사·파탄 책임·혼인 기간·자녀·연령·이혼 후 생활보장 등 여러 사정을 두루 고려해야 하며, 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되는 경우에는 원칙적으로 이혼 청구를 허용해야 한다고 본 사례 흐름이 있는 영역입니다. 혼인취소 + 재판상 이혼 + 중대한 사유 결합은 \'취소사유·이혼사유·절차\' 정리가 필요한 트랙입니다. 당사자라면 ① 사유 구분 ② 취소사유 ③ 이혼사유 ④ 파탄 정도 ⑤ 청구 절차 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 구분 ② 취소 ③ 이혼 ④ 파탄 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 혼인취소 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유 구분·취소사유·이혼사유·파탄 정도·청구 절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사유 구분</strong> — 혼인취소(원시적 하자)와 이혼(혼인 후 사유)의 구분 정리.</li>\n<li><strong>② 취소사유</strong> — 민법 제816조 혼인취소 사유 해당 여부 검토.</li>\n<li><strong>③ 이혼사유</strong> — 제840조 각 호, 특히 제6호 중대한 사유 해당 여부.</li>\n<li><strong>④ 파탄 정도</strong> — 부부공동생활관계가 회복할 수 없을 정도로 파탄됐는지.</li>\n<li><strong>⑤ 청구 절차</strong> — 혼인취소·재판상 이혼 청구 절차 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 원칙적으로 이혼 청구가 허용되고, 중대한 사유는 혼인계속의사·파탄 책임·혼인 기간 등 여러 사정을 종합해 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사유·증거 자료 정리 (즉시)</strong> — 혼인 경위, 취소·이혼 사유 정황 자료 정리.</li>\n<li><strong>2단계 — 사유 구분 정리 (1주)</strong> — 혼인취소 사유인지, 이혼 사유인지 구분 정리.</li>\n<li><strong>3단계 — 파탄·책임 정리 (1~2주)</strong> — 파탄 정도, 파탄 책임정도, 중대한 사유 정리.</li>\n<li><strong>4단계 — 혼인취소·이혼 청구 (소 제기 시)</strong> — 혼인취소 또는 재판상 이혼·재산분할·위자료 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 판결 확정, 신분·재산 관계 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">혼인취소·재판상 이혼 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사유·파탄·절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>혼인 경위·합의 자료 (취소사유)</strong></li>\n<li><strong>혼인 전 하자·기망 정황 자료 (혼인취소)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (이혼사유)</strong></li>\n<li><strong>파탄 책임정도 입증 자료</strong></li>\n<li><strong>부부 재산·소득 자료 (재산분할)</strong></li>\n<li><strong>혼인취소·이혼 소장·청구 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼인취소는 혼인 성립 당시의 원시적 하자를, 이혼은 혼인 후 발생한 사유를 다루는 영역이므로 내 사정이 어느 쪽에 해당하는지 먼저 구분하는 것이 핵심. 혼인이 회복할 수 없을 정도로 파탄됐다면 상대가 거부해도 원칙적으로 이혼 청구가 허용될 수 있으므로 파탄 경위·책임정도 자료를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사유 구분</strong> — 혼인취소 사유인지, 이혼 사유인지.</li>\n<li><strong>취소사유</strong> — 민법 제816조 혼인취소 사유 해당 여부.</li>\n<li><strong>중대한 사유</strong> — 제840조 제6호 중대한 사유 해당 여부.</li>\n<li><strong>파탄 책임</strong> — 파탄 원인에 관한 쌍방 책임정도.</li>\n<li><strong>재산분할·위자료</strong> — 신분관계 정리에 따른 재산분할·위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (혼인취소·이혼 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인을 계속하기 어려운 중대한 사유와 이혼 허용',
        summary:
          '대법원 2022므10932(대법원, 2022.06.16 선고) 영역에서 법원은 민법 제840조 제6호에서 정한 이혼사유인 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부간의 애정과 신뢰가 바탕이 되어야 할 혼인의 본질에 상응하는 부부공동생활관계가 회복할 수 없을 정도로 파탄되고 혼인생활의 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말한다고 보았습니다. 이를 판단할 때에는 혼인계속의사의 유무, 파탄의 원인에 관한 당사자의 책임 유무, 혼인생활의 기간, 자녀의 유무, 당사자의 연령, 이혼 후의 생활보장 등 혼인관계에 관한 여러 사정을 두루 고려해야 하고, 이러한 사정을 고려해 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되는 경우에는 원칙적으로 이혼 청구를 허용해야 한다고 판시했습니다. 혼인취소·재판상 이혼 사안에서도 사유 구분·파탄 정도를 검토해볼 수 있습니다.',
        takeaway: '혼인취소 + 재판상 이혼 + 중대한 사유 결합 시 취소사유와 이혼사유 구분·파탄 정도·파탄 책임정도 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '혼인취소와 이혼은 어떻게 다른가요?',
        answer:
          '<strong>혼인취소는 혼인 성립 당시의 원시적 하자를, 이혼은 혼인 후 발생한 사유를 다루는 영역입니다.</strong> 혼인 경위·사정 자료를 정리.',
      },
      {
        question: '어떤 경우에 혼인취소가 되나요?',
        answer:
          '<strong>민법 제816조에서 정한 혼인취소 사유에 해당하는지 개별 검토가 필요한 영역입니다.</strong> 혼인 전 하자·경위 자료를 정리.',
      },
      {
        question: '상대가 이혼을 거부하면 이혼이 안 되나요?',
        answer:
          '<strong>혼인이 회복할 수 없을 정도로 파탄됐다면 원칙적으로 이혼 청구가 허용될 수 있는 영역입니다.</strong> 파탄 경위·책임정도 자료를 정리.',
      },
      {
        question: '중대한 사유는 무엇을 기준으로 판단하나요?',
        answer:
          '<strong>혼인계속의사·파탄 책임·혼인 기간·자녀·연령 등 여러 사정을 종합해 판단하는 영역입니다.</strong> 혼인 전반 자료를 정리.',
      },
      {
        question: '혼인취소나 이혼 시 재산분할도 되나요?',
        answer:
          '<strong>신분관계 정리에 따라 재산분할·위자료를 함께 청구할 수 있는지 검토되는 영역입니다.</strong> 부부 재산·기여 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '혼인취소 사유·절차', href: '/guide/divorce/divorce-annulment-grounds-track' },
      { label: '혼인 파탄 책임 판단', href: '/guide/divorce/divorce-marriage-breakdown-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 5. defamation-sns-comment-track ───
  {
    domain: 'defamation',
    slug: 'defamation-sns-comment-track',
    keyword: 'SNS 댓글 명예훼손',
    questionKeyword: 'SNS 댓글로 저에 관한 안 좋은 말이 적혀 퍼졌어요. 몇 사람만 보는 곳에 적은 댓글도 명예훼손이 되는지, \'전파 가능성\'으로 공연성이 인정된다는 기준이 무엇인지 막막합니다.',
    ctaKeyword: 'SNS 댓글 명예훼손 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'SNS 댓글 명예훼손 — 5단계 공연성·전파가능성 점검 | 로앤가이드',
      description:
        'SNS 댓글로 명예훼손 피해를 입었다면, 형법 제307조 사실적시와 공연성의 의미, 소수 적시도 전파가능성으로 인정되는 전파가능성 이론·증거 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"SNS 게시글이나 댓글에 저에 관한 좋지 않은 이야기가 적혀 지인들 사이에 빠르게 퍼지면서 얼굴을 들기 어려운 상황입니다. 정작 그 글을 쓴 사람은 \'몇 사람만 보는 곳에 적었을 뿐\'이라며 대수롭지 않게 넘기려 합니다. 소수만 보는 댓글도 명예훼손이 되는지, \'전파 가능성\'이라는 것으로 공연성이 인정된다는데 그 기준이 무엇인지, 친한 사이에게만 한 말이면 괜찮은 것인지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 개별적으로 소수의 사람에게 사실을 적시했더라도 그 상대방이 불특정 또는 다수인에게 적시된 사실을 전파할 가능성이 있는 때에는 공연성이 인정된다는 이른바 전파가능성 이론을 공연성에 관한 확립된 법리로 유지하면서, 이는 정보통신망을 이용한 명예훼손의 공연성 판단에도 동일하게 적용되고, 다만 전파가능성을 제한 없이 적용하면 표현의 자유가 위축될 우려가 있어 그 구체적·객관적 적용 기준을 세우고 전파가능성에 대한 인식을 전제로 공연성을 엄격히 인정해 왔다고 본 사례 흐름이 있는 영역입니다. SNS 댓글 + 소수 적시 + 명예훼손 결합은 \'공연성·전파가능성\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시물 보존 ② 사실 적시 ③ 공연성 ④ 전파가능성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 전파 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. SNS 댓글 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물 보존·사실 적시·공연성·전파가능성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물 보존</strong> — 댓글·게시글·작성자·일시·열람 범위 원본 보존.</li>\n<li><strong>② 사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시 여부 정리.</li>\n<li><strong>③ 공연성</strong> — 불특정 또는 다수인이 인식할 수 있는 상태 여부.</li>\n<li><strong>④ 전파가능성</strong> — 소수 적시라도 전파 가능성으로 공연성이 인정되는지.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 소수에게 적시했더라도 상대방이 불특정·다수에게 전파할 가능성이 있으면 공연성이 인정될 수 있고(전파가능성 이론), 이는 정보통신망 명예훼손에도 동일하게 적용되되 전파가능성에 대한 인식을 전제로 엄격히 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글 캡처·증거 보존 (즉시)</strong> — 댓글·게시글·작성자 계정·일시·열람 범위 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 구체적 사실 적시 여부, 소수 적시의 전파가능성 정리.</li>\n<li><strong>3단계 — 전파가능성·피해 정리 (2주)</strong> — 상대방 관계·전달 정황으로 전파가능성, 피해 입증 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">SNS 댓글 명예훼손 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>댓글·게시글 원본·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>게시·열람 범위 자료 (공연성)</strong></li>\n<li><strong>작성자·상대방·피해자 관계 자료 (전파가능성)</strong></li>\n<li><strong>실제 전파·전달 정황 자료 (인식)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: SNS 댓글은 소수만 보는 곳에 적었더라도 상대방이 불특정·다수에게 전파할 가능성이 있으면 공연성이 인정될 수 있는 영역이므로, 댓글이 게시된 환경·열람 범위와 상대방 관계·전달 정황을 함께 정리하는 것이 핵심. 댓글은 삭제 전에 작성자 계정·URL과 함께 원본 형태로 캡처해 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정 또는 다수인이 인식할 수 있는 상태인지.</li>\n<li><strong>전파가능성</strong> — 소수 적시라도 전파 가능성으로 공연성이 인정되는지.</li>\n<li><strong>사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시인지.</li>\n<li><strong>관계·경위</strong> — 작성자·상대방 관계와 적시 경위.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공연성의 의미와 전파가능성 이론',
        summary:
          '대법원 2020도5813(대법원, 2020.11.19 선고) 영역에서 법원은 명예훼손죄의 구성요건인 공연성이 \'불특정 또는 다수인이 인식할 수 있는 상태\'를 의미한다고 밝히면서, 개별적으로 소수의 사람에게 사실을 적시하였더라도 그 상대방이 불특정 또는 다수인에게 적시된 사실을 전파할 가능성이 있는 때에는 공연성이 인정된다는 이른바 전파가능성 이론을 공연성에 관한 확립된 법리로 유지해야 한다고 보았습니다. 이러한 법리는 정보통신망 이용촉진 및 정보보호 등에 관한 법률상 정보통신망을 이용한 명예훼손의 공연성 판단에도 동일하게 적용되고, 다만 전파가능성을 제한 없이 적용하면 처벌이 확대되어 표현의 자유가 위축될 우려가 있으므로 전파가능성의 구체적·객관적 적용 기준을 세우고 전파가능성에 대한 인식을 전제로 공연성을 엄격하게 인정해 왔다고 판시했습니다. SNS 댓글 사안에서도 공연성·전파가능성을 검토해볼 수 있습니다.',
        takeaway: 'SNS 댓글 + 소수 적시 + 명예훼손 결합 시 공연성의 의미·전파가능성 이론·전파가능성 인식 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '몇 사람만 보는 댓글도 명예훼손이 되나요?',
        answer:
          '<strong>소수 적시라도 전파 가능성이 인정되면 공연성이 성립할 수 있는 영역입니다.</strong> 게시 환경·상대방 관계 자료를 정리.',
      },
      {
        question: '전파 가능성은 무엇을 기준으로 따지나요?',
        answer:
          '<strong>상대방이 불특정·다수에게 전파할 가능성을 객관적 사정으로 판단하는 영역입니다.</strong> 관계·전달 정황 자료를 정리.',
      },
      {
        question: '친한 사람에게만 한 말이면 괜찮나요?',
        answer:
          '<strong>친밀한 관계라도 특별한 사정에 따라 전파가능성·공연성이 검토될 수 있는 영역입니다.</strong> 관계·발언 경위 자료를 정리.',
      },
      {
        question: 'SNS 댓글도 정보통신망법 명예훼손이 되나요?',
        answer:
          '<strong>전파가능성 법리는 정보통신망 명예훼손에도 동일하게 적용되는 영역입니다.</strong> 게시 플랫폼·내용 자료를 정리.',
      },
      {
        question: '댓글을 지우게 하고 손해도 청구할 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 6. defamation-openchat-rumor-track ───
  {
    domain: 'defamation',
    slug: 'defamation-openchat-rumor-track',
    keyword: '오픈채팅 소문 명예훼손',
    questionKeyword: '오픈채팅방에서 누군가 저에 관한 소문을 퍼뜨렸어요. 몇 명만 있는 방에 적은 말도 명예훼손이 되는지, 친한 사이나 비밀을 지켜야 하는 사람에게만 한 말이면 공연성이 부정된다는데 그 기준이 막막합니다.',
    ctaKeyword: '오픈채팅 소문 명예훼손 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '오픈채팅 소문 명예훼손 — 5단계 공연성·엄격증명 점검 | 로앤가이드',
      description:
        '오픈채팅 소문으로 명예훼손 피해를 입었다면, 형법 제307조 공연성과 특정 소수 적시의 전파가능성에 대한 검사의 엄격한 증명, 친밀·비밀관계 예외·증거 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 사람이 모인 오픈채팅방에서 누군가 저에 관한 사실과 다른 소문을 흘려 단체방 분위기가 싸늘해지고 평판이 흔들리는 상황입니다. 정작 그 말을 한 사람은 \'몇 명 없는 방에서 한 이야기\', \'친한 사람끼리 한 말\'이라며 책임을 피하려 합니다. 소수만 있는 채팅방에 적은 말도 명예훼손이 되는지, 친한 사이나 비밀을 지켜야 할 사람에게만 한 말이면 공연성이 부정된다는데 그 경계가 어디인지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 특정 소수에 대한 사실적시의 경우 전파가능성을 이유로 공연성을 인정하기 위해서는 검사의 엄격한 증명이 필요하고, 발언 상대방이 발언자나 피해자의 배우자·친척·친구 등 사적으로 친밀한 관계에 있거나 직무상 비밀유지의무가 있거나 이를 처리해야 할 공무원 등과 유사한 지위에 있는 경우에는 공연성이 부정될 수 있으며, 이 경우 공연성을 인정하려면 그러한 관계·신분에도 불구하고 불특정 또는 다수인에게 전파될 수 있다고 볼 만한 특별한 사정이 있어야 한다고 본 사례 흐름이 있는 영역입니다. 오픈채팅 소문 + 특정 소수 적시 + 명예훼손 결합은 \'공연성·전파가능성 엄격 증명\' 다툼이 가능한 트랙입니다. 당사자라면 ① 대화 보존 ② 사실 적시 ③ 공연성 ④ 전파가능성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 전파 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 오픈채팅 소문 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대화 보존·사실 적시·공연성·전파가능성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대화 보존</strong> — 채팅 내용·작성자·일시·참여자 범위 원본 보존.</li>\n<li><strong>② 사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시 여부 정리.</li>\n<li><strong>③ 공연성</strong> — 특정 소수 적시인지, 불특정·다수 인식 상태인지.</li>\n<li><strong>④ 전파가능성</strong> — 친밀·비밀관계 예외와 전파 특별 사정 검토.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 특정 소수 적시는 공연성이 부정되는 유력한 사정이어서 전파가능성에 대한 검사의 엄격한 증명이 필요하고, 친밀·비밀관계에서는 공연성이 부정되며 인정하려면 전파될 만한 특별한 사정이 있어야 하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대화 캡처·증거 보존 (즉시)</strong> — 채팅 내용·작성자·일시·참여자 범위 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 구체적 사실 적시 여부, 특정 소수·다수 인식 상태 정리.</li>\n<li><strong>3단계 — 전파가능성·관계 정리 (2주)</strong> — 친밀·비밀관계 여부, 전파될 특별 사정·피해 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 채팅 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">오픈채팅 소문 명예훼손 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>채팅 내용·캡처·일시 (적시 내용)</strong></li>\n<li><strong>작성자 계정·발언자 자료 (특정)</strong></li>\n<li><strong>채팅방 참여자·열람 범위 자료 (공연성)</strong></li>\n<li><strong>작성자·상대방·피해자 관계 자료 (친밀·비밀관계)</strong></li>\n<li><strong>실제 전파·재전송 정황 자료 (특별 사정)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 오픈채팅방이라도 참여자가 특정 소수면 공연성이 부정되는 유력한 사정이고 전파가능성에 대한 검사의 엄격한 증명이 필요한 영역이므로, 채팅방 참여자 범위와 실제 재전송·전파 정황을 함께 정리하는 것이 핵심. 친밀·비밀관계에서도 전파될 만한 특별한 사정이 있는지가 관건이므로 관계와 정황을 함께 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특정 소수</strong> — 채팅방 적시가 특정 소수 적시인지.</li>\n<li><strong>전파가능성</strong> — 전파가능성에 대한 검사의 엄격한 증명 여부.</li>\n<li><strong>친밀·비밀관계</strong> — 친밀·비밀관계로 공연성이 부정되는지.</li>\n<li><strong>특별 사정</strong> — 그럼에도 전파될 만한 특별한 사정의 존부.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특정 소수 적시의 전파가능성과 친밀·비밀관계 예외',
        summary:
          '대법원 2015도12933(대법원, 2020.12.30 선고) 영역에서 법원은 명예훼손죄의 구성요건인 공연성에 관하여, 특정 소수에 대한 사실적시의 경우 전파가능성을 이유로 공연성을 인정하기 위해서는 검사의 엄격한 증명이 필요하다고 보았습니다. 또한 발언 상대방이 발언자나 피해자의 배우자·친척·친구 등 사적으로 친밀한 관계에 있는 경우 또는 직무상 비밀유지의무가 있거나 이를 처리해야 할 공무원이나 이와 유사한 지위에 있는 경우에는 그러한 관계로 인해 비밀의 보장이 상당히 높은 정도로 기대되므로 공연성이 부정되고, 이 경우 공연성을 인정하려면 그러한 관계나 신분에도 불구하고 불특정 또는 다수인에게 전파될 수 있다고 볼 만한 특별한 사정이 존재하여야 한다고 판시했습니다. 오픈채팅 소문 사안에서도 공연성·전파가능성을 검토해볼 수 있습니다.',
        takeaway: '오픈채팅 소문 + 특정 소수 적시 + 명예훼손 결합 시 특정 소수 적시의 전파가능성·검사 엄격 증명·친밀/비밀관계 예외 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '몇 명 없는 채팅방에 적은 말도 명예훼손이 되나요?',
        answer:
          '<strong>특정 소수 적시라도 전파될 특별한 사정이 증명되면 공연성이 인정될 수 있는 영역입니다.</strong> 참여자 범위·전파 정황 자료를 정리.',
      },
      {
        question: '친한 사람에게만 한 말이면 공연성이 없나요?',
        answer:
          '<strong>친밀한 관계는 공연성이 부정될 수 있으나 전파될 특별한 사정이 있으면 달라지는 영역입니다.</strong> 관계·전파 정황 자료를 정리.',
      },
      {
        question: '전파가능성은 누가 증명하나요?',
        answer:
          '<strong>특정 소수 적시의 전파가능성은 검사의 엄격한 증명이 필요한 영역입니다.</strong> 재전송·전파 정황 자료를 정리.',
      },
      {
        question: '비밀을 지켜야 할 사람에게 한 말도 되나요?',
        answer:
          '<strong>비밀유지의무가 있는 관계는 공연성이 부정될 수 있으나 특별한 사정이 관건인 영역입니다.</strong> 직무·관계 자료를 정리.',
      },
      {
        question: '채팅 내용을 지우게 하고 손해도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '단체 채팅방 명예훼손', href: '/guide/defamation/defamation-group-chat-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 7. defamation-workplace-rumor-track ───
  {
    domain: 'defamation',
    slug: 'defamation-workplace-rumor-track',
    keyword: '직장 내 소문 명예훼손',
    questionKeyword: '직장에서 동료가 저에 관한 험담이나 거친 말을 동료 몇 명에게 했어요. 소수에게 한 말이나 거친 표현도 명예훼손·모욕이 되는지, 실제로 퍼지지 않았으면 괜찮은지 막막합니다.',
    ctaKeyword: '직장 내 소문 명예훼손·모욕 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '직장 내 소문 명예훼손 — 5단계 공연성·고의 점검 | 로앤가이드',
      description:
        '직장에서 험담·거친 말로 명예훼손·모욕 피해를 입었다면, 형법 제307조·제311조의 전파가능성 공연성과 미필적 고의, 조악한 표현의 전파 예상 가능성·증거 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 직장 안에서 동료가 저에 관한 험담이나 거친 말을 다른 동료 몇 명에게 흘려, 출근하기조차 괴로운 상황입니다. 사실과 다른 이야기가 부서 안에서 떠돌아 평판이 깎이는데, 정작 그 말을 한 사람은 \'몇 명에게만 한 말\', \'실제로 퍼지지도 않았다\'며 대수롭지 않게 넘기려 합니다. 소수에게 한 말이나 다소 거친 표현도 명예훼손·모욕이 되는지, 실제로 전파되지 않았으면 책임이 없는 것인지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를, 형법 제311조는 공연히 사람을 모욕하는 행위를 규율하고, 모욕죄의 공연성에도 명예훼손죄의 공연성 법리가 동일하게 적용되는 영역입니다. 판례는 개별적으로 소수의 사람에게 발언했더라도 상대방이 불특정 또는 다수인에게 그 내용을 전파할 가능성이 객관적으로 인정되면 공연성이 인정될 수 있으나 특정 소수에게만 발언한 점은 공연성이 부정되는 유력한 사정이어서 전파가능성에 대한 검사의 엄격한 증명이 필요하고, 전파가능성으로 공연성을 인정하는 경우에도 전파가능성에 대한 인식과 그 위험을 용인하는 미필적 고의가 필요하며, 발언 후 실제 전파 여부는 소극적 사정으로 고려될 수 있고, 조악한 표현 자체를 그대로 옮겨 전파하리라고 쉽게 예상하기 어려운 경우에는 전파가능성 인정에 신중해야 한다고 본 사례 흐름이 있는 영역입니다. 직장 내 소문 + 소수 발언 + 명예훼손·모욕 결합은 \'공연성·미필적 고의\' 다툼이 가능한 트랙입니다. 당사자라면 ① 발언 보존 ② 사실 적시·표현 ③ 공연성 ④ 미필적 고의 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 표현 ③ 공연성 ④ 고의 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 내 소문 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발언 보존·사실 적시·표현·공연성·미필적 고의·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발언 보존</strong> — 발언 내용·발언자·일시·상대방 범위·정황 보존.</li>\n<li><strong>② 사실 적시·표현</strong> — 구체적 사실 적시인지, 모욕에 해당하는 표현인지 정리.</li>\n<li><strong>③ 공연성</strong> — 소수 발언이라도 전파가능성으로 공연성이 인정되는지.</li>\n<li><strong>④ 미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사 검토.</li>\n<li><strong>⑤ 대응</strong> — 증거 정리·형사 고소·민사 손해배상 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 소수 발언이라도 전파가능성이 객관적으로 인정되면 공연성이 성립할 수 있으나 전파가능성에 대한 검사의 엄격한 증명과 미필적 고의가 필요하고, 조악한 표현을 그대로 옮겨 전파하리라 예상하기 어려운 경우 신중히 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 발언·증거 보존 (즉시)</strong> — 발언 내용·녹취·발언자·일시·상대방 범위 보존.</li>\n<li><strong>2단계 — 적시·표현 정리 (1주)</strong> — 구체적 사실 적시 여부, 모욕에 해당하는 표현 정리.</li>\n<li><strong>3단계 — 공연성·고의 정리 (2주)</strong> — 소수 발언의 전파가능성, 미필적 고의, 실제 전파 정황 정리.</li>\n<li><strong>4단계 — 고소·신고 (분쟁 시)</strong> — 명예훼손·모욕 고소, 직장 내 신고 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 내 소문 명예훼손·모욕 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·표현·공연성 갈래입니다.</strong></p>\n<ul>\n<li><strong>발언 내용·녹취·메시지 (적시·표현)</strong></li>\n<li><strong>발언자·일시 자료 (특정)</strong></li>\n<li><strong>발언 상대방·전달 범위 자료 (전파가능성)</strong></li>\n<li><strong>발언자와 상대방·피해자 관계 자료</strong></li>\n<li><strong>실제 전파·전달 정황 자료 (고의·소극 사정)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>피해 입증·고소장·신고서 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직장 내 험담은 소수에게 한 말이라도 상대방이 불특정·다수에게 전파할 가능성이 객관적으로 인정되고 발언자가 그 위험을 용인했다면 공연성이 인정될 수 있는 영역이므로, 발언 경위·상대방 범위·실제 전파 정황을 함께 정리하는 것이 핵심. 거친 표현이 모욕인지, 단순한 부정적 표현에 그치는지도 전체 맥락과 함께 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 소수 발언의 전파가능성과 공연성 인정 여부.</li>\n<li><strong>미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사의 존부.</li>\n<li><strong>사실 적시·모욕</strong> — 구체적 사실 적시인지, 모욕 표현인지.</li>\n<li><strong>실제 전파</strong> — 실제 전파 여부의 소극적 사정 고려.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전파가능성 공연성과 미필적 고의·조악한 표현',
        summary:
          '대법원 2022도14571(대법원, 2024.01.04 선고) 영역에서 법원은 모욕죄의 구성요건인 공연성에도 명예훼손죄의 공연성 법리가 동일하게 적용되므로, 개별적으로 소수의 사람에게 발언하였더라도 그 상대방이 불특정 또는 다수인에게 해당 내용을 전파할 가능성이 객관적으로 인정되는 경우에는 공연성을 인정할 수 있지만, 특정한 소수에게만 발언하였다는 점은 공연성이 부정되는 유력한 사정이 될 수 있으므로 그 전파가능성에 관하여는 검사의 엄격한 증명이 필수적이라고 보았습니다. 또한 전파가능성을 이유로 공연성이 인정되는 경우에도 전파가능성에 대한 인식과 그 위험을 용인하는 미필적 고의가 필요하고, 발언 후 실제로 전파되었는지 여부는 전파가능성 유무를 판단할 때 소극적 사정으로 고려될 수 있으며, 발언이 불쾌함을 느낄 정도의 거친 표현에 그쳐 그 조악한 표현 자체를 그대로 옮겨 전파하리라고 쉽게 예상하기 어려운 경우에는 전파가능성 인정에 더욱 신중해야 한다고 판시했습니다. 직장 내 소문·거친 표현 사안에서도 공연성·미필적 고의를 검토해볼 수 있습니다.',
        takeaway: '직장 내 소문 + 소수 발언 + 명예훼손·모욕 결합 시 전파가능성·검사 엄격 증명·미필적 고의·조악한 표현 전파 예상 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '동료 몇 명에게만 한 험담도 명예훼손이 되나요?',
        answer:
          '<strong>소수 발언이라도 전파가능성이 객관적으로 인정되면 공연성이 성립할 수 있는 영역입니다.</strong> 발언 경위·상대방 범위 자료를 정리.',
      },
      {
        question: '실제로 안 퍼졌으면 괜찮은가요?',
        answer:
          '<strong>실제 전파 여부는 전파가능성 판단의 소극적 사정으로 고려될 수 있는 영역입니다.</strong> 전달·전파 정황 자료를 정리.',
      },
      {
        question: '거친 말도 모욕죄가 되나요?',
        answer:
          '<strong>표현 정도와 전체 맥락에 따라 모욕 성부가 달라지는 영역입니다.</strong> 표현 내용·맥락 자료를 정리.',
      },
      {
        question: '\'그렇게 퍼질 줄 몰랐다\'고 하면요?',
        answer:
          '<strong>전파가능성 인식과 위험을 용인하는 미필적 고의가 있어야 공연성이 인정되는 영역입니다.</strong> 발언 정황·전달 자료를 정리.',
      },
      {
        question: '직장 안 일인데 고소도 되고 회사 신고도 되나요?',
        answer:
          '<strong>형사 고소·민사 손해배상과 직장 내 신고를 병행 검토할 수 있는 영역입니다.</strong> 피해·발언 입증 자료를 정리.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '모욕죄 성립 기준', href: '/guide/defamation/defamation-insult-track' },
      { label: '직장 내 괴롭힘·명예훼손', href: '/guide/defamation/defamation-workplace-harassment-track' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 8. defamation-community-post-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-community-post-falsely-accused-defense',
    keyword: '온라인 커뮤니티 명예훼손 무고',
    questionKeyword: '제게 제기된 의혹을 해명하려고 온라인 커뮤니티에 사실관계를 정리해 올렸는데, 상대가 저를 명예훼손으로 고소했어요. 사실과 다르게 신고된 것 같은데, 공익을 위한 진실한 해명도 위법성이 없어진다는 게 제게 적용되는지 막막합니다.',
    ctaKeyword: '온라인 해명글 명예훼손 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '커뮤니티 해명글 명예훼손 방어 — 5단계 공익·위법성조각 점검 | 로앤가이드',
      description:
        '온라인 해명글로 명예훼손 혐의를 받고 있다면, 형법 제310조 진실성·공익 목적과 배포 범위·표현 방법, 비방 표현 유무·조사 대응까지 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제게 부정·비리 의혹이 제기되어 억울한 마음에, 온라인 커뮤니티에 사실관계와 그 의혹을 제기한 사람이 관련해 입건된 사실 등을 정리해 해명 글을 올린 사람입니다. 그런데 상대방이 저를 명예훼손으로 고소했고, 사실과 다르게 신고되었다고 느껴 당황스럽습니다. 공공의 이익을 위해 진실을 밝히면 위법성이 없어진다는 법리가 정말 제게 적용되는지, 해명 글에 제 억울함이나 사익이 조금 섞였다는 이유로 처벌되는 것은 아닌지, 어느 정도까지 적어야 문제가 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 명예를 훼손한 행위를, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하는 영역입니다. 판례는 게시 문서에 기재된 내용이 대체로 객관적 사실과 일치하고, 배포가 이루어진 상대방의 범위가 제한되며, 그 표현방법도 상대를 비방하는 표현이 없는 등 제반 사정에 비추어 그 문서 배포행위가 오로지 공공의 이익을 위하여 진실한 사실을 적시한 경우라면 형법 제310조의 위법성조각사유에 해당할 수 있다고 본 사례 흐름이 있는 영역입니다. 온라인 해명 글 + 공익 목적 + 명예훼손 고소 결합은 \'진실성·공익성·표현방법\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 배포·표현 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 표현 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 커뮤니티 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·배포·표현·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 해명 글 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 적시 내용이 대체로 객관적 사실과 일치하는지.</li>\n<li><strong>③ 공익 목적</strong> — 오로지 공공의 이익을 위한 해명인지, 부수적 사익 동기 정리.</li>\n<li><strong>④ 배포·표현</strong> — 배포 상대방 범위, 비방 표현 유무 검토.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각(제310조) 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 해명 글 내용이 대체로 객관적 사실과 일치하고 배포 범위가 제한적이며 비방 표현이 없는 등 오로지 공공의 이익을 위한 진실한 사실 적시라면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 글·근거 자료 보존 (즉시)</strong> — 해명 글 내용·근거 자료·배포 범위·작성 경위 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 적시 내용과 근거 자료를 대조해 객관적 사실과의 일치 정리.</li>\n<li><strong>3단계 — 공익성·표현 정리 (2주)</strong> — 공익 목적, 부수적 사익 동기, 배포 범위·비방 표현 유무 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제310조 적용 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 해명글 명예훼손 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>해명 글 원본·게시 일시·플랫폼 (적시 내용)</strong></li>\n<li><strong>적시 내용의 근거 자료 (사실 합치 입증)</strong></li>\n<li><strong>공익 목적·해명 의도 정황 자료</strong></li>\n<li><strong>배포·열람 상대방 범위 자료 (제한성)</strong></li>\n<li><strong>표현 내용·전체 맥락 자료 (비방 표현 유무)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 해명 글의 중요한 부분이 객관적 사실과 일치하고, 배포된 상대방 범위가 제한적이며, 상대를 비방하는 표현이 없었다는 점을 보여주는 자료를 정리하는 것이 핵심입니다. 사실과 다르게 신고되었다고 느껴진다면 근거 자료와 작성 경위를 시간 순으로 정리해 오로지 공공의 이익을 위한 진실한 사실 적시였음을 소명할 수 있도록 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 적시 내용이 대체로 객관적 사실과 일치하는지.</li>\n<li><strong>공익 목적</strong> — 오로지 공공의 이익을 위한 해명인지.</li>\n<li><strong>배포 범위</strong> — 배포가 이루어진 상대방 범위의 제한성.</li>\n<li><strong>표현 방법</strong> — 상대를 비방하는 표현이 있었는지.</li>\n<li><strong>절차 대응</strong> — 조사·고소 절차에서 진술의 일관성과 소명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의혹 해명 문서 배포와 형법 제310조 위법성조각',
        summary:
          '대법원 2004도1388(대법원, 2005.07.15 선고) 영역에서 법원은 아파트 동대표인 피고인이 자신에 대한 부정·비리 의혹을 해명하기 위하여 그 의혹제기자가 명예훼손죄로 입건된 사실 등을 기재한 문서를 아파트 입주민들에게 배포한 사안에서, 문서에 기재된 내용이 대체로 객관적인 사실과 일치하고, 배포가 이루어진 상대방의 범위가 제한되며, 그 표현방법도 의혹제기자를 비방하는 표현이 없는 점 등 제반 사정에 비추어, 그 문서 배포행위가 오로지 공공의 이익을 위하여 진실한 사실을 적시한 경우로서 형법 제310조의 위법성조각사유에 해당한다고 판시했습니다. 온라인 해명 글 사안에서도 진실성·공익성·표현방법·배포 범위를 검토해볼 수 있습니다.',
        takeaway: '온라인 해명 글 + 공익 목적 + 명예훼손 고소 결합 시 진실성·공익 목적·배포 범위 제한·비방 표현 유무 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '의혹을 해명한 글도 명예훼손이 되나요?',
        answer:
          '<strong>진실·공익 목적이면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '제 억울함이나 사익이 섞이면 위법성조각이 안 되나요?',
        answer:
          '<strong>오로지 공공의 이익을 위한 것인지가 핵심이며 부수적 동기는 제반 사정으로 함께 판단되는 영역입니다.</strong> 동기·경위 자료를 정리.',
      },
      {
        question: '어디까지 적어야 문제가 되나요?',
        answer:
          '<strong>내용의 진실성·배포 범위·표현 방법을 종합해 위법성조각 여부를 판단하는 영역입니다.</strong> 게시 내용·배포 범위 자료를 정리.',
      },
      {
        question: '사실과 다르게 신고된 것 같으면 어떻게 하나요?',
        answer:
          '<strong>사실과 다르게 신고되었다면 근거 자료와 작성 경위로 진실·공익성을 소명할 수 있는 영역입니다.</strong> 근거·경위 자료를 미리 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>위법성조각(진실·공익)과 비방 표현이 없었다는 점, 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
      { label: '공공의 이익 위법성조각', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '진실한 사실 적시 방어', href: '/guide/defamation/defamation-truth-defense-track' },
      { label: '온라인 게시글 명예훼손', href: '/guide/defamation/defamation-online-post-track' },
      { label: '명예훼손 합의·처분', href: '/guide/defamation/defamation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-forced-heirship-reserve-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-forced-heirship-reserve-track',
    keyword: '유류분 반환청구',
    questionKeyword: '돌아가신 부모님이 형제 한 명에게만 재산을 몰아주는 유증을 해서, 제 몫이 거의 없어요. 최소한의 상속분인 유류분을 돌려받을 수 있는지, 부족액은 어떻게 계산하는지, 빚이 있으면 어떻게 되는지 막막합니다.',
    ctaKeyword: '유류분 반환청구·부족액 산정 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '유류분 반환청구 — 5단계 부족액·포괄유증 점검 | 로앤가이드',
      description:
        '특정 상속인에게 재산이 몰려 유류분이 침해됐다면, 민법 제1112조 유류분과 제1113조 부족액 산정, 포괄·특정유증 구분과 포괄적 수증자의 소극재산 처리까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 부모님이 형제 중 한 사람에게만 재산 대부분을 유증으로 몰아주는 바람에, 정작 제게 돌아올 몫은 거의 남지 않은 상황입니다. 평생 부모님을 모셨다고 생각했는데 빈손이 될까 봐 억울하고 막막합니다. 법이 정한 최소한의 상속분인 \'유류분\'을 돌려받을 수 있다는데, 그 부족한 금액은 어떻게 계산하는지, 상속재산에 빚까지 섞여 있으면 어떻게 정리되는지, 유증이 재산 전부를 넘기는 \'포괄유증\'이면 또 어떻게 되는지 도무지 가늠이 되지 않아 답답한 상태입니다." 민법 제1112조는 유류분 권리자와 그 비율을, 민법 제1113조 제1항은 유류분 산정 시 상속개시 시 가진 재산에 증여재산을 가산하고 채무 전액을 공제하도록 정하며, 민법 제1078조는 포괄적 수증자가 상속인과 동일한 권리·의무가 있음을 정하는 영역입니다. 판례는 유류분권리자가 유류분반환청구권을 행사하면 그 유류분을 침해하는 범위 내에서 유증·증여가 소급적으로 효력을 잃고, 유류분 부족액은 유류분액에서 특별수익액과 순상속분액을 공제해 산정하며, 포괄적 유증을 받은 사람이 승계하는 소극재산은 유류분 산정의 기초가 되는 재산액을 산정할 때 전액 공제되므로 그 소극재산 일부가 유류분제도나 반환청구권 행사로 유류분권리자에게 승계된다고 볼 수 없다고 본 사례 흐름이 있는 영역입니다. 유류분 침해 + 포괄·특정유증 + 부족액 산정 결합은 \'유증 구분·부족액\' 정리가 필요한 트랙입니다. 당사자라면 ① 상속·유증 파악 ② 유증 구분 ③ 유류분액 ④ 부족액 ⑤ 반환청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 구분 ③ 유류분 ④ 부족액 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유류분 반환청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속·유증 파악·유증 구분·유류분액·부족액·반환청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속·유증 파악</strong> — 상속재산·증여·유증·채무 내역 파악.</li>\n<li><strong>② 유증 구분</strong> — 포괄적 유증과 특정유증의 구분 정리.</li>\n<li><strong>③ 유류분액</strong> — 민법 제1112조·제1113조에 따른 유류분액 산정.</li>\n<li><strong>④ 부족액</strong> — 유류분액에서 특별수익·순상속분 공제한 부족액 산정.</li>\n<li><strong>⑤ 반환청구</strong> — 유류분을 침해하는 범위의 반환청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 유류분반환청구권 행사 시 유류분을 침해하는 범위에서 유증·증여가 소급적으로 효력을 잃고, 포괄적 수증자가 승계하는 소극재산은 유류분 산정 시 전액 공제되어 그 일부가 유류분권리자에게 승계되지는 않는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속·유증 자료 확보 (즉시)</strong> — 유언·유증·증여·상속재산 목록·채무 내역 확보.</li>\n<li><strong>2단계 — 유증 구분·재산 정리 (1~2주)</strong> — 포괄·특정유증 구분, 적극·소극재산 정리.</li>\n<li><strong>3단계 — 유류분액·부족액 산정 (2~3주)</strong> — 유류분액, 특별수익·순상속분 공제 부족액 산정.</li>\n<li><strong>4단계 — 반환청구 (소 제기 시)</strong> — 유류분을 침해하는 범위 내 반환청구.</li>\n<li><strong>5단계 — 판결·이행 (확정 후)</strong> — 반환 범위 확정 및 목적물 반환·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유류분 반환청구·부족액 산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상속·유증·부족액 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·제적등본 (상속개시)</strong></li>\n<li><strong>가족관계증명서·상속인 확인 자료</strong></li>\n<li><strong>유언장·유증·증여 자료 (유증 구분)</strong></li>\n<li><strong>상속재산 목록·부동산 등기부 (적극재산)</strong></li>\n<li><strong>상속채무 내역·금융 자료 (소극재산·공제)</strong></li>\n<li><strong>특별수익·생전 증여 자료 (부족액 산정)</strong></li>\n<li><strong>유류분 반환청구 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유류분 부족액은 유류분액에서 특별수익액과 순상속분액을 공제해 산정하고, 유류분액은 상속개시 시 재산에 증여재산을 가산하고 채무 전액을 공제한 기초재산에 유류분 비율을 곱해 정해지는 영역이므로 증여·유증·채무 자료를 빠짐없이 정리하는 것이 핵심. 포괄적 유증을 받은 사람의 소극재산은 전액 공제되어 그 일부가 유류분권리자에게 승계되지는 않는 점도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유증 구분</strong> — 포괄적 유증인지 특정유증인지.</li>\n<li><strong>기초재산</strong> — 증여재산 가산·채무 공제한 기초재산 확정.</li>\n<li><strong>부족액 산정</strong> — 특별수익·순상속분 공제 후 부족액.</li>\n<li><strong>소극재산 처리</strong> — 포괄적 수증자 소극재산의 공제·승계 여부.</li>\n<li><strong>반환 범위</strong> — 유류분을 침해하는 범위의 반환.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (상속·유류분 관련)</strong></li>\n<li><strong>국세청 126 (상속세 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유류분 부족액 산정과 포괄적 수증자의 소극재산',
        summary:
          '대법원 2022다220014(대법원, 2025.05.29 선고) 영역에서 법원은 포괄적 유증이란 적극재산은 물론 소극재산까지도 포괄하는 상속재산 전부 또는 일부의 유증을 말하고 포괄적 수증자는 상속인과 동일한 권리·의무가 있다고 보면서, 유류분권리자가 유류분반환청구권을 행사한 경우 그의 유류분을 침해하는 범위 내에서 유증·증여가 소급적으로 효력을 상실하고 상대방은 그 실효된 범위 내에서 목적물을 반환할 의무를 부담한다고 보았습니다. 또한 유류분 부족액은 유류분액에서 특별수익액과 순상속분액을 공제해 산정하고, 피상속인이 상속개시 시 채무를 부담한 경우 유류분액은 상속개시 시 재산 가액에 증여재산 가액을 가산하고 채무 전액을 공제한 기초재산에 민법 제1112조의 유류분 비율을 곱해 산정하며, 포괄적 유증을 받은 사람이 승계하는 소극재산은 기초재산 산정 시 전액 공제되므로 그 소극재산 일부가 유류분제도나 반환청구권 행사로 유류분권리자에게 승계된다고 볼 수 없다고 판시했습니다. 유류분 반환청구 사안에서도 유증 구분·부족액 산정을 검토해볼 수 있습니다.',
        takeaway: '유류분 침해 + 포괄·특정유증 + 부족액 산정 결합 시 유증 구분·기초재산·부족액 산정·포괄적 수증자 소극재산 처리 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '한 사람에게만 재산을 몰아줘도 유류분을 받을 수 있나요?',
        answer:
          '<strong>유류분을 침해하는 범위에서 반환청구를 검토할 수 있는 영역입니다.</strong> 유증·증여·상속재산 자료를 정리.',
      },
      {
        question: '유류분 부족액은 어떻게 계산하나요?',
        answer:
          '<strong>유류분액에서 특별수익액과 순상속분액을 공제해 산정하는 영역입니다.</strong> 특별수익·상속분 자료를 정리.',
      },
      {
        question: '상속재산에 빚이 있으면 어떻게 되나요?',
        answer:
          '<strong>기초재산은 상속개시 시 재산에 증여를 가산하고 채무 전액을 공제해 산정하는 영역입니다.</strong> 채무·증여 자료를 정리.',
      },
      {
        question: '포괄유증과 특정유증은 무엇이 다른가요?',
        answer:
          '<strong>포괄유증은 소극재산까지 포괄하고 수증자가 상속인과 동일한 권리·의무를 갖는 영역입니다.</strong> 유언 문언·내용 자료를 정리.',
      },
      {
        question: '포괄유증을 받은 사람의 빚도 제가 떠안나요?',
        answer:
          '<strong>포괄적 수증자의 소극재산은 전액 공제되어 그 일부가 유류분권리자에게 승계되지는 않는 영역입니다.</strong> 채무·유증 자료를 정리.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 부족액 산정', href: '/guide/inheritance/inheritance-legal-reserve-track' },
      { label: '포괄유증·특정유증 구분', href: '/guide/inheritance/inheritance-comprehensive-bequest-track' },
      { label: '생전 증여·특별수익', href: '/guide/inheritance/inheritance-special-benefit-track' },
      { label: '유류분 반환청구 절차', href: '/guide/inheritance/inheritance-reserve-claim-procedure' },
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-qualified-acceptance-documents' },
    ],
  },

  // ─── 10. traffic-accident-motorcycle-lanechange-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-motorcycle-lanechange-track',
    keyword: '이륜차 차로변경 사고 과실',
    questionKeyword: '오토바이를 타다 앞 차의 갑작스러운 차로변경으로 사고가 났어요. 상대가 중앙선을 넘거나 무리하게 끼어든 것 같은데, 제 과실은 얼마나 되는지, 상대가 파산·면책을 받으면 배상은 못 받는지 막막합니다.',
    ctaKeyword: '이륜차 차로변경 사고 과실·면책 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '이륜차 차로변경 사고 — 5단계 과실비율·면책 점검 | 로앤가이드',
      description:
        '오토바이 차로변경·중앙선 침범 사고로 다쳤다면, 민법 제750조 손해배상과 과실비율, 중대한 과실 판단 기준과 경과실 중앙선 침범의 비면책채권 여부까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오토바이로 차로를 따라 달리던 중 옆 차량이 갑자기 무리하게 끼어들거나 중앙선을 넘어와 사고가 나 크게 다친 상황입니다. 이륜차라는 이유만으로 제 과실이 크게 잡히는 것은 아닌지 불안하고, 상대 운전자의 갑작스러운 차로변경·중앙선 침범이 어떻게 평가되는지 헷갈립니다. 게다가 가해자가 손해배상 판결 뒤 파산·면책을 받아버리면 제가 받을 배상이 사라지는 것은 아닌지, 중앙선을 넘은 사고라고 무조건 면책에서 빠지는 것인지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제750조는 고의·과실로 인한 위법행위로 타인에게 손해를 가한 자의 배상책임을 정하고, 과실상계에 따라 피해자 과실비율만큼 배상액이 조정되는 영역입니다. 또한 채무자 회생 및 파산에 관한 법률 제566조 제4호는 채무자가 중대한 과실로 타인의 생명·신체를 침해한 불법행위로 인한 손해배상청구권을 비면책채권으로 정합니다. 판례는 같은 법 제566조 제4호의 \'중대한 과실\'이란 조금만 주의를 기울였다면 생명·신체 침해 결과를 쉽게 예견·회피할 수 있었음에도 주의의무를 현저히 위반한 것을 말하고 사고 경위·원인·내용 등 구체적 상황을 종합해 판단하며, 교통사고처리 특례법은 경과실로 중앙선을 침범하는 경우도 예정하고 있으므로 중앙선 침범 사고라는 사정만으로 곧바로 중대한 과실이 있다고 단정해서는 안 된다고 본 사례 흐름이 있는 영역입니다. 이륜차 차로변경 사고 + 중앙선 침범 + 과실·면책 결합은 \'과실비율·중대한 과실\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사고·과실 ② 과실비율 ③ 손해 산정 ④ 중대한 과실 ⑤ 합의 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 과실 ② 비율 ③ 손해 ④ 면책 ⑤ 합의 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이륜차 차로변경 사고 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·과실·과실비율·손해 산정·중대한 과실·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·과실</strong> — 사고 경위·차로변경·중앙선 침범 등 과실 정리.</li>\n<li><strong>② 과실비율</strong> — 이륜차·상대 차량의 과실비율 산정.</li>\n<li><strong>③ 손해 산정</strong> — 치료비·일실수입·위자료 등 손해 산정.</li>\n<li><strong>④ 중대한 과실</strong> — 가해자 면책 시 비면책채권 해당(중대한 과실) 여부.</li>\n<li><strong>⑤ 합의</strong> — 손해배상·합의·소멸시효 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 가해자가 파산·면책을 받아도 \'중대한 과실\'로 생명·신체를 침해한 불법행위 손해배상청구권은 비면책채권이 될 수 있으나, 중앙선 침범 사고라는 사정만으로 곧바로 중대한 과실이 있다고 단정할 수 없는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·과실 증거 확보 (즉시)</strong> — 블랙박스·CCTV·현장 사진·진단서 확보.</li>\n<li><strong>2단계 — 과실비율 정리 (즉시~1주)</strong> — 차로변경·중앙선 침범 등 과실비율 정리.</li>\n<li><strong>3단계 — 손해·중대한 과실 정리 (1~2주)</strong> — 손해 산정, 가해자 면책 시 중대한 과실 여부 정리.</li>\n<li><strong>4단계 — 손해배상·이의 (분쟁 시)</strong> — 보험사·가해자 손해배상 청구, 면책 다툼 검토.</li>\n<li><strong>5단계 — 합의·소멸시효 (병행)</strong> — 합의 조건 검토, 손해배상 소멸시효 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">이륜차 차로변경 사고 과실·면책 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사고·과실·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>교통사고 사실확인원·신고 자료 (사고 발생)</strong></li>\n<li><strong>블랙박스·CCTV·주행 자료 (과실비율)</strong></li>\n<li><strong>현장 사진·차로·중앙선 자료 (과실 평가)</strong></li>\n<li><strong>상해진단서·치료 기록 (피해 입증)</strong></li>\n<li><strong>치료비·일실수입·소득 자료 (손해 산정)</strong></li>\n<li><strong>가해자 파산·면책 결정 자료 (비면책채권)</strong></li>\n<li><strong>손해·합의 관련 서류 (손해배상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이륜차 차로변경·중앙선 침범 사고는 상대 차량의 진로 변경·침범 경위와 본인 주행 상황에 따라 과실비율이 정리되는 영역이므로 블랙박스·CCTV 등 과실 자료를 먼저 확보하는 것이 핵심. 가해자가 파산·면책을 받더라도 중대한 과실로 생명·신체를 침해한 손해배상청구권은 비면책채권이 될 수 있으나 중앙선 침범만으로 곧바로 중대한 과실로 단정되지 않으므로 사고 경위 자료를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>과실비율</strong> — 차로변경·중앙선 침범 등에 따른 과실비율 산정.</li>\n<li><strong>이륜차 과실</strong> — 이륜차라는 사정의 과실 평가 반영 정도.</li>\n<li><strong>손해 산정</strong> — 치료비·일실수입·위자료 등 손해 범위.</li>\n<li><strong>중대한 과실</strong> — 가해자 면책 시 비면책채권 해당 여부.</li>\n<li><strong>소멸시효</strong> — 손해배상청구권의 소멸시효 도과 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 182 (교통 민원·사고 안내)</strong></li>\n<li><strong>한국교통안전공단 (교통사고 상담)</strong></li>\n<li><strong>손해보험협회 (보험·보상 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중대한 과실 판단 기준과 경과실 중앙선 침범',
        summary:
          '대법원 2023다308270(대법원, 2024.05.17 선고) 영역에서 법원은 채무자 회생 및 파산에 관한 법률 제566조 제4호에서 비면책채권으로 정한 \'채무자가 중대한 과실로 타인의 생명 또는 신체를 침해한 불법행위로 인하여 발생한 손해배상청구권\'에서 \'중대한 과실\'이란 조금만 주의를 기울였다면 생명·신체 침해 결과를 쉽게 예견·회피할 수 있었음에도 일반인에게 요구되는 주의의무를 현저히 위반한 것을 말하고, 그 존부는 사고 발생 경위, 주의의무 위반의 원인·내용 등 위반 당시의 구체적 상황을 종합해 판단해야 한다고 보았습니다. 나아가 교통사고처리 특례법 제3조 제2항 단서는 중과실이 아닌 경과실로 중앙선을 침범하는 경우도 예정하고 있으므로 채무자가 중앙선 침범 사고를 일으켰다는 사정만으로 곧바로 같은 법 제566조 제4호의 중대한 과실이 존재한다고 단정해서는 안 된다고 판시했습니다. 이륜차 차로변경·중앙선 침범 사고 사안에서도 과실비율·중대한 과실을 검토해볼 수 있습니다.',
        takeaway: '이륜차 차로변경 사고 + 중앙선 침범 + 과실·면책 결합 시 과실비율·중대한 과실 판단 기준·경과실 중앙선 침범의 비면책채권 여부 검토 영역 — 변호사 상담·보험·법률구조공단 검토 권장.',
      },
    ],
    faq: [
      {
        question: '오토바이라서 제 과실이 더 크게 잡히나요?',
        answer:
          '<strong>이륜차라는 사정만으로 과실이 정해지지 않고 사고 경위·과실 자료로 평가되는 영역입니다.</strong> 블랙박스·현장 자료를 정리.',
      },
      {
        question: '상대가 갑자기 끼어든 사고는 누구 과실이 큰가요?',
        answer:
          '<strong>진로 변경·침범 경위와 양측 주행 상황을 종합해 과실비율을 산정하는 영역입니다.</strong> 차로·신호·주행 자료를 정리.',
      },
      {
        question: '가해자가 파산·면책을 받으면 배상을 못 받나요?',
        answer:
          '<strong>중대한 과실로 생명·신체를 침해한 손해배상청구권은 비면책채권이 될 수 있는 영역입니다.</strong> 면책 결정·사고 경위 자료를 정리.',
      },
      {
        question: '중앙선을 넘은 사고면 무조건 면책에서 빠지나요?',
        answer:
          '<strong>중앙선 침범만으로 곧바로 중대한 과실로 단정되지 않고 구체적 상황으로 판단하는 영역입니다.</strong> 사고 경위·주의의무 자료를 정리.',
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
      { label: '이륜차 사고 과실 기준', href: '/guide/traffic-accident/traffic-accident-motorcycle-fault-track' },
      { label: '치료비·손해 산정', href: '/guide/traffic-accident/traffic-accident-damages-calculation' },
      { label: '가해자 파산·면책 대응', href: '/guide/traffic-accident/traffic-accident-debtor-discharge-track' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
    ],
  },
];
