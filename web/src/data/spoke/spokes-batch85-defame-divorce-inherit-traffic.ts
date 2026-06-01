import { SpokePage } from '../spoke-pages';

// batch85 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-02)
//
// 고유 존재 이유:
// 1. divorce-domestic-violence-protection-track — 가정폭력 피해 배우자가 신변 안전(보호명령)을 확보하며 이혼·위자료를 구하는 절차형 트랙. 임시조치·피해자보호명령과 재판상 이혼 사유(파탄)의 결합이 핵심.
// 2. divorce-in-law-conflict-track — 시댁 갈등 누적 위에 배우자가 공동재산을 일방 처분해 경제적 기반을 위태롭게 한 경우의 재판상 이혼 사유 판단형 트랙. 공동재산 일방 처분의 파탄 사유성이 핵심.
// 3. divorce-pension-split-track — 국민연금 분할연금·재산분할 절차형 트랙. 이혼 후 일방 사망 시 재산분할의무 상속인 승계 가부와 분할연금 청구 절차가 핵심.
// 4. divorce-de-facto-marriage-dissolution-track — 사실혼 해소에 따른 재산분할 판단형 트랙. 분할대상 재산·액수의 기준시점(사실혼 해소일)과 후발 사정 참작이 핵심.
// 5. defamation-online-community-post-track — 온라인 커뮤니티 비방 글 피해자 판단형 트랙. 소수 전달이라도 전파가능성으로 인정되는 공연성(전파가능성 이론)이 핵심.
// 6. defamation-youtube-comment-contempt-track — 유튜브 댓글 모욕죄 대응 판단형 트랙. 소수 발언의 전파가능성·미필적 고의 엄격 증명과 경미한 표현의 모욕 성부가 핵심.
// 7. defamation-parent-group-chat-track — 학부모 단톡방 명예훼손 판단형 트랙. 친밀·직무상 관계에서 공연성 부정과 전파가능성 인정 위한 특별한 사정·검사 엄격 증명이 핵심.
// 8. defamation-customer-public-complaint-falsely-accused-defense — accused 관점. 공개항의·해명 문서 배포가 형법 제310조 위법성조각에 해당하는지 다투는 방어 트랙. 진실성·공익성·표현방법·상대방 범위 제한이 핵심.
// 9. inheritance-qualified-acceptance-debt-track — 상속채무 한정승인 절차형 트랙. 상속채무 초과 인지 후 3개월 특별한정승인 기간과 단순승인 간주 후 구제 가부가 핵심.
// 10. traffic-accident-hit-and-run-track — 뺑소니(도주차량) 피해자 판단형 트랙. 특가법 제5조의3 '도주' 해당 여부 판단 기준과 현장 잔류·자수 정황의 의미가 핵심.

export const spokesBatch85DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-domestic-violence-protection-track ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-protection-track',
    keyword: '가정폭력 이혼 보호명령',
    questionKeyword: '배우자의 폭력이 반복돼 더는 함께 살 수 없어 이혼하려는데, 당장 신변이 무서워 무엇부터 해야 할지 모르겠어요. 접근금지 같은 보호명령부터 받아야 하는지, 이혼·위자료는 어떻게 청구하는지 막막합니다.',
    ctaKeyword: '가정폭력 보호명령·이혼·위자료 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 이혼 — 5단계 보호명령·위자료 점검 | 로앤가이드',
      description:
        '배우자 폭력이 반복돼 신변이 무섭고 이혼·위자료가 막막하다면, 가정폭력처벌법 임시조치·피해자보호명령과 민법 제840조 심히 부당한 대우·파탄 사유, 위자료까지 신변 안전 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자의 폭력이 한두 번이 아니라 거듭되면서, 같은 집에 있는 것조차 무서워 잠을 이루기 어려운 상황입니다. 이혼은 결심했지만 당장 신변이 위험해 무엇부터 해야 할지 모르겠고, 접근금지 같은 보호명령부터 받아야 하는지, 그동안 견뎌온 폭력과 고통에 대한 위자료는 받을 수 있는지, 도리어 \'네가 먼저 화를 돋웠다\'는 말로 책임을 떠넘기지는 않을지 도무지 가늠이 되지 않아 막막한 상태입니다." 가정폭력처벌법 제29조·제55조의2는 가정폭력 피해자 보호를 위한 임시조치(접근금지·퇴거 등)와 피해자보호명령을, 민법 제840조 제3호는 배우자로부터 심히 부당한 대우를 받았을 때를, 같은 조 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 재판상 이혼 사유로 정하는 영역입니다. 판례는 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'를 부부공동생활관계가 회복할 수 없을 정도로 파탄되어 혼인 계속을 강제하는 것이 일방에게 참을 수 없는 고통이 되는 경우로 보고, 혼인계속의사·파탄 책임·혼인 기간·자녀 등 여러 사정을 두루 고려해 돌이킬 수 없을 정도로 파탄되었고 청구인의 책임이 더 무겁지 않다면 이혼 청구를 받아들여야 한다고 본 사례 흐름이 있는 영역입니다. 가정폭력 + 보호명령 + 이혼·위자료 결합은 \'신변 안전·파탄·책임정도\' 정리가 필요한 트랙입니다. 당사자라면 ① 신변 안전 ② 보호명령 ③ 이혼 사유 ④ 위자료·재산분할 ⑤ 자녀·양육 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 안전 ② 보호명령 ③ 사유 ④ 위자료 ⑤ 자녀 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가정폭력 이혼 보호명령 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신변 안전·보호명령·이혼 사유·위자료·자녀 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신변 안전</strong> — 긴급 위험 시 112 신고·1366 상담·임시조치·쉼터 등 안전 확보.</li>\n<li><strong>② 보호명령</strong> — 접근금지·퇴거 등 임시조치·피해자보호명령 신청 검토.</li>\n<li><strong>③ 이혼 사유</strong> — 심히 부당한 대우(제3호)·혼인 계속 곤란(제6호) 해당 여부 정리.</li>\n<li><strong>④ 위자료·재산분할</strong> — 정신적 고통 위자료·재산분할 청구 검토.</li>\n<li><strong>⑤ 자녀·양육</strong> — 친권자·양육자 지정, 면접교섭·양육비 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 반복된 폭력으로 혼인이 회복할 수 없을 정도로 파탄되고 청구인의 책임이 더 무겁지 않다면 심히 부당한 대우 등 재판상 이혼 사유 해당 여부를 검토해볼 수 있는 영역. 신변 안전을 위한 임시조치·피해자보호명령은 이혼 소송과 별개로 먼저 신청을 검토할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·여성긴급전화·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신변 안전 확보 (즉시)</strong> — 긴급 시 112 신고, 1366 상담, 임시조치·쉼터 안내 확인.</li>\n<li><strong>2단계 — 보호명령 신청 (1주)</strong> — 접근금지·퇴거 등 임시조치·피해자보호명령 신청 검토.</li>\n<li><strong>3단계 — 이혼 사유·증거 정리 (1~2주)</strong> — 폭력 정황(진단서·신고 이력)으로 재판상 이혼 사유 정리.</li>\n<li><strong>4단계 — 이혼·위자료 청구 (소 제기 시)</strong> — 재판상 이혼·위자료·재산분할 청구.</li>\n<li><strong>5단계 — 판결·자녀 정리 (선고 후)</strong> — 위자료·재산분할 이행, 친권·양육·면접교섭 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">가정폭력 보호명령·이혼·위자료 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 안전·증거·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>상해진단서·치료 기록 (폭력 피해 입증)</strong></li>\n<li><strong>112 신고 이력·경찰 진술 자료 (반복성)</strong></li>\n<li><strong>위협 문자·녹취·사진 기록 (부당 대우)</strong></li>\n<li><strong>임시조치·보호명령 신청서·결정문</strong></li>\n<li><strong>재산·소득 자료 (위자료·재산분할 산정)</strong></li>\n<li><strong>자녀 양육·생활 관련 자료 (친권·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신변이 급한 상황이라면 이혼 소송에 앞서 임시조치·피해자보호명령을 먼저 신청해 접근금지·퇴거를 검토하는 것이 핵심이고, 동시에 폭력의 반복성을 보여주는 진단서·신고 이력을 시간 순으로 모아두면 재판상 이혼 사유 정리에 활용될 수 있는 영역. 위급할 때는 여성긴급전화 1366·가정폭력 상담을 함께 활용하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이혼 사유</strong> — 심히 부당한 대우·혼인 계속 곤란 사유 해당 여부.</li>\n<li><strong>파탄·책임정도</strong> — 혼인이 회복할 수 없이 파탄되었는지·쌍방 책임정도.</li>\n<li><strong>보호명령 요건</strong> — 임시조치·피해자보호명령의 요건·기간.</li>\n<li><strong>위자료 범위</strong> — 정신적 고통의 위자료 인정 범위.</li>\n<li><strong>자녀·양육</strong> — 친권자·양육자 지정, 면접교섭·양육비.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료·보호명령 청구)</strong></li>\n<li><strong>여성긴급전화 1366 (긴급·가정폭력 상담)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 반복된 갈등·파탄과 재판상 이혼 사유',
        summary:
          '대법원 2021므12108(대법원, 2021.08.19 선고) 영역에서 법원은 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'란 부부공동생활관계가 회복할 수 없을 정도로 파탄되어 혼인생활의 계속을 강제하는 것이 일방 배우자에게 참을 수 없는 고통이 되는 경우를 말하고, 이를 판단할 때 혼인계속의사·파탄 원인에 관한 책임·혼인 기간·자녀·연령·이혼 후 생활보장 등 여러 사정을 두루 고려해야 한다고 보았습니다. 또한 부부의 혼인관계가 돌이킬 수 없을 정도로 파탄되었다고 인정되면 파탄 원인에 대한 원고의 책임이 피고보다 더 무겁다고 인정되지 않는 한 이혼 청구를 받아들여야 하는데도, 파탄의 주된 책임이 일방에게 있다고 단정해 이혼 청구를 배척한 원심에 법리오해의 잘못이 있다고 판시했습니다. 가정폭력 사안에서도 파탄 정도·책임정도를 검토해볼 수 있습니다.',
        takeaway: '가정폭력 + 보호명령 + 이혼·위자료 결합 시 파탄 정도·심히 부당한 대우·책임정도 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이혼 전에 접근금지부터 받을 수 있나요?',
        answer:
          '<strong>이혼 소송과 별개로 임시조치·피해자보호명령으로 접근금지·퇴거를 먼저 검토할 수 있는 영역입니다.</strong> 신고 이력·피해 자료를 정리.',
      },
      {
        question: '폭력 때문에 이혼이 되나요?',
        answer:
          '<strong>혼인 지속이 가혹할 정도의 반복된 폭력은 심히 부당한 대우 등 재판상 이혼 사유로 검토될 수 있는 영역입니다.</strong> 진단서·신고 이력을 정리.',
      },
      {
        question: '제가 화를 돋웠다고 하면 이혼이 안 되나요?',
        answer:
          '<strong>파탄이 회복할 수 없을 정도이고 일방의 책임이 더 무겁지 않은 한 이혼이 인용될 수 있는 영역입니다.</strong> 폭력 경위·책임정도 자료를 정리.',
      },
      {
        question: '위자료는 받을 수 있나요?',
        answer:
          '<strong>반복된 폭력으로 인한 정신적 고통에 대해 위자료가 검토되는 영역입니다.</strong> 피해·치료 자료를 정리.',
      },
      {
        question: '아이를 데리고 나오면 양육은 어떻게 되나요?',
        answer:
          '<strong>자녀의 복리를 기준으로 친권자·양육자 지정, 면접교섭·양육비를 정하는 영역입니다.</strong> 양육 참여·생활 환경 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '접근금지·보호명령 신청', href: '/guide/divorce/divorce-protection-order-track' },
      { label: '양육자 지정 기준', href: '/guide/divorce/divorce-custody-designation-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 2. divorce-in-law-conflict-track ───
  {
    domain: 'divorce',
    slug: 'divorce-in-law-conflict-track',
    keyword: '시댁 갈등 이혼 사유',
    questionKeyword: '시댁과의 갈등이 오래 쌓인 데다 배우자가 함께 모은 재산을 저와 상의 없이 멋대로 처분해버렸어요. 이런 시댁 갈등과 일방적 재산 처분이 이혼 사유가 되는지, 어떻게 판단하는지 막막합니다.',
    ctaKeyword: '시댁 갈등·공동재산 처분 이혼 사유 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '시댁 갈등 이혼 — 5단계 파탄·재산처분 점검 | 로앤가이드',
      description:
        '시댁 갈등이 쌓이고 배우자가 공동재산을 멋대로 처분해 이혼을 고민한다면, 경제적 기반을 위태롭게 한 일방 처분이 민법 제840조 제6호 사유인지 파탄·책임정도·재산분할 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 생활 내내 시댁과의 갈등이 풀리지 않고 쌓여 마음이 무너지던 차에, 배우자가 함께 모은 재산의 큰 부분을 저와 한마디 상의도 없이 일방적으로 처분해버린 상황입니다. 생활의 경제적 기반까지 흔들리니 더는 신뢰가 남지 않았는데, 이런 시댁 갈등과 배우자의 일방적 재산 처분이 과연 이혼 사유가 되는지, 법원은 무엇을 기준으로 판단하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제840조 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 재판상 이혼 사유로 정하고, 민법 제830조·제833조·제839조의2는 부부 재산의 귀속·공동 비용 부담·재산분할을 규율하는 영역입니다. 판례는 혼인생활 중 부양·협조의무 등을 통해 공동으로 이룩한 재산의 주요 부분을 부부 일방이 정당한 이유 없이 상대방의 협의나 동의 없이 일방적으로 처분하는 등으로 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위는 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'에 해당할 수 있다고 보고, 파탄 여부는 혼인계속의사·책임·기간·자녀 등 여러 사정을 두루 고려해 판단한다고 본 사례 흐름이 있는 영역입니다. 시댁 갈등 + 공동재산 일방 처분 + 이혼 사유 결합은 \'파탄 사유 해당·책임정도\' 다툼이 가능한 트랙입니다. 당사자라면 ① 갈등·처분 정황 ② 공동재산성 ③ 파탄 사유 ④ 책임정도 ⑤ 재산분할 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 정황 ② 공동재산 ③ 사유 ④ 책임 ⑤ 분할 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 시댁 갈등 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 갈등·처분 정황·공동재산성·파탄 사유·책임정도·재산분할 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갈등·처분 정황</strong> — 시댁 갈등 누적·일방 처분 경위 정리.</li>\n<li><strong>② 공동재산성</strong> — 처분된 재산이 부부 공동으로 이룩한 주요 재산인지.</li>\n<li><strong>③ 파탄 사유</strong> — 경제적 기반 형해화 등 제6호 사유 해당 여부 정리.</li>\n<li><strong>④ 책임정도</strong> — 혼인 파탄에 관한 부부 쌍방의 책임정도 평가.</li>\n<li><strong>⑤ 재산분할</strong> — 처분된 재산 포함 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 부부가 공동으로 이룩한 재산의 주요 부분을 정당한 이유 없이 동의 없이 일방 처분해 경제적 기반을 위태롭게 한 행위는 혼인을 계속하기 어려운 중대한 사유에 해당할 수 있는 영역. 파탄 여부는 여러 사정을 종합해 판단하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갈등·처분 자료 보존 (즉시)</strong> — 갈등 정황·재산 처분 내역·거래 자료 보존.</li>\n<li><strong>2단계 — 공동재산성 정리 (1~2주)</strong> — 처분된 재산의 형성 경위·기여도·공동성 정리.</li>\n<li><strong>3단계 — 파탄 사유·책임 정리 (2~3주)</strong> — 경제적 기반 형해화 등 파탄 사유·책임정도 정리.</li>\n<li><strong>4단계 — 이혼·재산분할 청구 (소 제기 시)</strong> — 재판상 이혼·재산분할(처분 재산 포함) 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">시댁 갈등·공동재산 처분 이혼 사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 갈등·재산·분할 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>시댁 갈등 정황 자료 (메시지·녹취·기록)</strong></li>\n<li><strong>처분된 재산의 거래·등기·계좌 자료 (일방 처분)</strong></li>\n<li><strong>재산 형성·기여 입증 자료 (공동재산성)</strong></li>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>소득·생활비 부담 자료 (경제적 공동체)</strong></li>\n<li><strong>혼인 파탄 경위 자료 (파탄·책임정도)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시댁 갈등 자체만으로 바로 이혼 사유가 되는 것은 아니지만, 그 갈등 위에 배우자가 공동으로 이룩한 재산의 주요 부분을 동의 없이 일방 처분해 경제적 기반을 위태롭게 했다면 제6호 사유 해당 여부를 검토할 수 있는 영역이므로 처분 경위·공동재산성 자료를 정리하는 것이 핵심. 처분 내역과 거래 자료를 시간 순으로 모아두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>파탄 사유</strong> — 시댁 갈등·일방 처분이 제6호 중대한 사유에 해당하는지.</li>\n<li><strong>공동재산성</strong> — 처분된 재산이 부부 공동으로 이룩한 주요 재산인지.</li>\n<li><strong>처분의 정당성</strong> — 정당한 이유·동의 없이 일방 처분했는지.</li>\n<li><strong>책임정도</strong> — 혼인 파탄에 관한 부부 쌍방의 책임정도.</li>\n<li><strong>재산분할</strong> — 처분된 재산을 포함한 분할 대상·범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·재산분할 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한변협 법률구조재단</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동재산 일방 처분과 혼인 파탄 사유',
        summary:
          '대법원 2025므10730(대법원, 2025.09.04 선고) 영역에서 법원은 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'를 부부공동생활관계가 회복할 수 없을 정도로 파탄되어 혼인 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우로 보면서, 혼인관계가 부양·협조의무를 통해 공동으로 이룬 재산을 바탕으로 한 경제적 공동체이기도 하다고 보았습니다. 나아가 혼인생활 중 공동으로 이룩한 재산의 주요 부분을 부부 일방이 정당한 이유 없이 상대방과의 협의나 동의 없이 일방적으로 처분하는 등으로 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위는 제6호의 중대한 사유에 해당할 수 있다고 판시했습니다. 시댁 갈등이 누적된 사안에서도 공동재산 일방 처분의 파탄 사유성을 검토해볼 수 있습니다.',
        takeaway: '시댁 갈등 + 공동재산 일방 처분 + 이혼 사유 결합 시 경제적 기반 형해화·파탄 사유 해당·책임정도 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시댁 갈등만으로 이혼이 되나요?',
        answer:
          '<strong>갈등 자체보다 그로 인해 혼인이 회복할 수 없이 파탄되었는지를 종합해 판단하는 영역입니다.</strong> 갈등 경위·파탄 정황을 정리.',
      },
      {
        question: '배우자가 재산을 멋대로 처분하면 이혼 사유가 되나요?',
        answer:
          '<strong>공동으로 이룩한 주요 재산을 동의 없이 일방 처분해 경제적 기반을 위태롭게 하면 제6호 사유 해당 여부가 검토되는 영역입니다.</strong> 처분 경위 자료를 정리.',
      },
      {
        question: '처분된 재산도 재산분할에 넣을 수 있나요?',
        answer:
          '<strong>공동재산성·처분 경위에 따라 분할 대상으로 참작될 수 있는 영역입니다.</strong> 거래·등기·계좌 자료를 정리.',
      },
      {
        question: '제 잘못도 있으면 이혼이 안 되나요?',
        answer:
          '<strong>파탄이 회복할 수 없을 정도이고 일방의 책임이 더 무겁지 않은 한 이혼이 인용될 수 있는 영역입니다.</strong> 쌍방 책임정도 자료를 정리.',
      },
      {
        question: '재산분할 청구에 기한이 있나요?',
        answer:
          '<strong>이혼한 날부터 2년이 재산분할청구권 행사 기간인 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 3. divorce-pension-split-track ───
  {
    domain: 'divorce',
    slug: 'divorce-pension-split-track',
    keyword: '국민연금 분할연금 이혼',
    questionKeyword: '이혼하면서 배우자의 국민연금을 나눠 받는 분할연금을 신청하려는데, 언제 어떻게 청구하는지 모르겠어요. 또 재산분할을 받기 전에 상대가 사망하면 그 자녀들에게 청구할 수 있는지도 막막합니다.',
    ctaKeyword: '국민연금 분할연금·재산분할 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '분할연금 이혼 — 5단계 청구요건·재산분할 점검 | 로앤가이드',
      description:
        '이혼하며 배우자 국민연금 분할연금과 재산분할 절차가 막막하다면, 국민연금법 제64조 분할연금 청구요건과 이혼한 날부터 2년 행사기간, 상대 사망 시 상속인 승계까지 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 혼인 생활을 정리하고 이혼하면서, 배우자가 받게 될 국민연금을 나눠 받는 분할연금을 신청하려는 상황입니다. 분할연금이라는 제도가 있다는 말은 들었지만 언제 어떤 요건으로 청구하는지, 신청 기간을 놓치면 받지 못하는 건 아닌지 막막하고, 재산분할을 마무리하기 전에 상대 배우자가 먼저 사망해버리면 그 자녀들을 상대로는 청구할 수 있는지조차 가늠이 되지 않아 답답한 상태입니다." 국민연금법 제64조는 혼인 기간 중 가입기간 등 요건을 갖춘 사람이 일정 연령에 이르면 배우자였던 사람의 노령연금을 분할한 분할연금을 받을 수 있도록 정하고, 민법 제839조의2·제843조는 협의·재판상 이혼에 따른 재산분할청구권을 정하는 영역입니다. 판례는 재산분할 제도가 부부가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 하는 것이어서, 부부별산제를 보완해 재산의 명의와 상관없이 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할하려는 것이며, 재산분할청구권이 행사상 일신전속성을 가지더라도 혼인 중 형성한 재산관계를 청산하는 본질과 공평의 관념에 비추어 이혼을 한 당사자 일방이 사망하면 그 재산분할의무가 상속인들에게 승계되고, 따라서 특별한 사정이 없는 한 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 본 사례 흐름이 있는 영역입니다. 분할연금 + 재산분할 + 상속인 결합은 \'청구요건·기간·상속인 승계\' 정리가 필요한 트랙입니다. 당사자라면 ① 분할연금 요건 ② 청구 기간 ③ 재산분할 ④ 상속인 승계 ⑤ 이행 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 요건 ② 기간 ③ 분할 ④ 승계 ⑤ 이행 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 국민연금 분할연금 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분할연금 요건·청구 기간·재산분할·상속인 승계·이행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 분할연금 요건</strong> — 혼인 기간 중 가입기간·연령 등 분할연금 요건 확인.</li>\n<li><strong>② 청구 기간</strong> — 분할연금 청구 기간(소멸시효)·선청구 가능 여부 확인.</li>\n<li><strong>③ 재산분할</strong> — 혼인 중 형성한 재산의 청산·분배 청구.</li>\n<li><strong>④ 상속인 승계</strong> — 상대 사망 시 재산분할의무 상속인 승계 여부 검토.</li>\n<li><strong>⑤ 이행</strong> — 분할연금 지급·재산분할 이행 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 이혼을 한 당사자 일방이 사망하면 그 재산분할의무가 상속인들에게 승계되어, 특별한 사정이 없는 한 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있는 영역. 분할연금은 국민연금공단에 별도 청구 요건·기간을 확인하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 국민연금공단·가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입·혼인 자료 확인 (즉시)</strong> — 혼인 기간·국민연금 가입이력·연령 요건 확인.</li>\n<li><strong>2단계 — 분할연금 요건·기간 정리 (1~2주)</strong> — 국민연금공단에 분할연금 요건·청구 기간·선청구 가능 여부 확인.</li>\n<li><strong>3단계 — 재산분할 정리 (2~3주)</strong> — 혼인 중 형성 재산·기여도·청산 범위 정리.</li>\n<li><strong>4단계 — 재산분할·분할연금 청구 (청구 시)</strong> — 재산분할 청구(상속인 승계 포함)·분할연금 청구.</li>\n<li><strong>5단계 — 판결·지급 (확정 후)</strong> — 재산분할 이행·분할연금 지급 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">국민연금 분할연금·재산분할 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 연금·재산·승계 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·이혼 사실 확인 자료 (혼인 기간)</strong></li>\n<li><strong>국민연금 가입이력·예상연금 자료 (분할연금 요건)</strong></li>\n<li><strong>본인·상대 연령 확인 자료 (수급 연령)</strong></li>\n<li><strong>부부 재산 목록·기여 입증 자료 (재산분할)</strong></li>\n<li><strong>상대 사망 시 사망진단서·제적등본 (상속인 확인)</strong></li>\n<li><strong>상속인 가족관계 자료 (승계 청구)</strong></li>\n<li><strong>분할연금·재산분할 청구 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분할연금은 국민연금공단에 혼인 기간·가입기간·연령 등 요건과 청구 기간을 먼저 확인하는 것이 핵심이고, 재산분할은 상대 배우자가 사망하더라도 그 의무가 상속인들에게 승계되어 상속인들을 상대로 청구를 검토할 수 있는 영역. 이혼한 날부터 2년의 재산분할청구권 행사 기간을 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할연금 요건</strong> — 혼인 기간 중 가입기간·연령 등 요건 충족 여부.</li>\n<li><strong>청구 기간</strong> — 분할연금 청구 기간·재산분할 2년 행사 기간.</li>\n<li><strong>재산분할 범위</strong> — 혼인 중 형성한 재산의 청산·기여도.</li>\n<li><strong>상속인 승계</strong> — 상대 사망 시 재산분할의무의 상속인 승계 여부.</li>\n<li><strong>이행·지급</strong> — 분할연금 지급·재산분할 이행 방법.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민연금공단 1355 (분할연금 안내)</strong></li>\n<li><strong>관할 가정법원 (재산분할 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 당사자 사망과 재산분할의무 상속인 승계',
        summary:
          '대법원 2024스876(대법원, 2026.01.15 선고) 영역에서 법원은 협의상 이혼한 자 일방은 다른 일방에 대하여 재산분할을 청구할 수 있고(민법 제839조의2 제1항) 재판상 이혼에도 이 규정이 준용되며(민법 제843조), 재산분할 제도는 이혼 등의 경우 부부가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 한다고 보았습니다. 나아가 재산분할청구권이 행사상 일신전속성을 가지더라도, 혼인 중 형성한 재산관계를 이혼에 즈음하여 청산하는 본질과 공평의 관념에 비추어 이혼을 한 당사자 일방이 사망하는 경우 그 재산분할의무는 상속인들에게 승계되고, 따라서 특별한 사정이 없는 한 이혼을 한 당사자 일방은 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 판시했습니다. 분할연금·재산분할 사안에서도 상속인 승계 가부를 검토해볼 수 있습니다.',
        takeaway: '분할연금 + 재산분할 + 상속인 결합 시 재산분할의무 상속인 승계·청구 가부·청구 기간 검토 영역 — 국민연금공단 안내·변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '분할연금은 언제 신청하나요?',
        answer:
          '<strong>혼인 기간 중 가입기간·연령 등 요건과 청구 기간을 국민연금공단에 확인해 신청하는 영역입니다.</strong> 가입이력·혼인 기간 자료를 정리.',
      },
      {
        question: '재산분할 전에 상대가 사망하면 청구를 못 하나요?',
        answer:
          '<strong>재산분할의무가 상속인들에게 승계되어 상속인들을 상대로 청구를 검토할 수 있는 영역입니다.</strong> 사망·상속인 자료를 정리.',
      },
      {
        question: '분할연금과 재산분할은 별개인가요?',
        answer:
          '<strong>분할연금은 국민연금법상 청구, 재산분할은 민법상 청산으로 별개로 검토되는 영역입니다.</strong> 각 요건·기간을 함께 확인.',
      },
      {
        question: '재산분할 청구에 기한이 있나요?',
        answer:
          '<strong>이혼한 날부터 2년이 재산분할청구권 행사 기간인 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
      {
        question: '재산은 명의가 상대 앞으로 돼 있어도 나눌 수 있나요?',
        answer:
          '<strong>명의와 상관없이 형성·유지에 기여한 실질에 따라 분할이 검토되는 영역입니다.</strong> 기여·형성 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '연금·퇴직금 분할', href: '/guide/divorce/divorce-pension-retirement-division-track' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 4. divorce-de-facto-marriage-dissolution-track ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-marriage-dissolution-track',
    keyword: '사실혼 해소 재산분할',
    questionKeyword: '혼인신고 없이 오래 함께 산 사실혼 관계가 깨졌어요. 함께 모은 재산을 나누고 싶은데, 헤어진 시점과 지금 가격이 달라 어느 시점을 기준으로 재산을 나누는지 막막합니다.',
    ctaKeyword: '사실혼 해소 재산분할 기준시점 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '사실혼 재산분할 — 5단계 기준시점·청산 점검 | 로앤가이드',
      description:
        '오래 함께 산 사실혼이 깨져 재산을 나누려는데 기준시점이 헷갈린다면, 분할 대상·액수는 사실혼 해소일 기준으로 정하되 해소 이후 가격 변동 등 후발적 특별 사정 참작까지 청산 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"혼인신고는 하지 않았지만 오랜 기간 부부처럼 함께 살며 재산을 모아온 사실혼 관계가 깨진 상황입니다. 법률혼이 아니어도 함께 일군 재산은 나눌 수 있다고 들었는데, 헤어진 뒤 부동산 가격이 오르내려 지금 시세와 헤어질 당시 가격이 크게 달라 어느 시점을 기준으로 재산을 나누는지, 그사이 생긴 가격 변동은 누가 떠안는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제839조의2는 재산분할청구권을, 같은 조 제843조는 재판상 이혼에 준용을 정하고, 판례·실무는 혼인에 준하는 사실혼 관계가 해소된 경우에도 재산분할에 관한 규정을 유추적용하는 영역입니다. 판례는 사실혼 해소를 원인으로 한 재산분할에서 분할 대상이 되는 재산과 액수는 사실혼이 해소된 날을 기준으로 정하여야 하고, 다만 사실혼 해소 이후 사실심 변론종결 시까지 혼인 중 공동의 노력으로 형성·유지한 부동산 등에 발생한 외부적·후발적 사정으로서 그 이익·손해를 일방에게 귀속시키는 것이 공평한 청산·분배라는 재산분할 제도의 목적에 현저히 부합하지 않는 특별한 사정이 있는 경우에는 이를 가액 산정에 참작할 수 있다고 본 사례 흐름이 있는 영역입니다. 사실혼 해소 + 재산분할 + 기준시점 결합은 \'분할 대상·기준시점·후발 사정\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사실혼 입증 ② 분할 대상 ③ 기준시점 ④ 가액 산정 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 입증 ② 대상 ③ 기준시점 ④ 가액 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼 해소 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼 입증·분할 대상·기준시점·가액 산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 입증</strong> — 혼인에 준하는 공동생활 실체·기간 입증 정리.</li>\n<li><strong>② 분할 대상</strong> — 공동의 노력으로 형성·유지한 적극·소극재산 파악.</li>\n<li><strong>③ 기준시점</strong> — 분할 대상·액수의 기준시점(사실혼 해소일) 정리.</li>\n<li><strong>④ 가액 산정</strong> — 해소일 기준 가액, 후발적 특별 사정 참작 여부 검토.</li>\n<li><strong>⑤ 청구</strong> — 사실혼 해소에 따른 재산분할 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 사실혼 해소 재산분할의 분할 대상·액수는 사실혼이 해소된 날을 기준으로 정하되, 해소 이후 발생한 외부적·후발적 특별 사정이 있으면 가액 산정에 참작될 수 있는 영역. 위자료·재산 금액 단정 없이 기준시점부터 정리하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼·재산 자료 보존 (즉시)</strong> — 공동생활 실체·기간·재산 형성 자료 보존.</li>\n<li><strong>2단계 — 분할 대상 정리 (1~2주)</strong> — 공동의 노력으로 형성한 적극·소극재산 목록 정리.</li>\n<li><strong>3단계 — 기준시점·가액 정리 (2~3주)</strong> — 사실혼 해소일 기준 가액, 후발 사정 참작 여부 정리.</li>\n<li><strong>4단계 — 재산분할 청구 (소 제기 시)</strong> — 사실혼 해소에 따른 재산분할 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 분할 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 해소 재산분할 기준시점 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실혼·재산·기준시점 갈래입니다.</strong></p>\n<ul>\n<li><strong>사실혼 입증 자료 (공동생활·기간·주변 진술)</strong></li>\n<li><strong>주민등록·전입·동거 입증 자료 (실체)</strong></li>\n<li><strong>공동 형성 재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>재산 형성·기여 입증 자료 (기여도)</strong></li>\n<li><strong>사실혼 해소 시점 입증 자료 (기준시점)</strong></li>\n<li><strong>재산 평가·감정·시세 자료 (가액 산정)</strong></li>\n<li><strong>후발 사정 입증 자료 (가격 변동 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실혼 해소 재산분할은 분할 대상·액수를 사실혼이 해소된 날을 기준으로 정하는 것이 원칙인 영역이므로, 사실혼이 언제 해소되었는지를 보여주는 자료와 그 시점의 가액 자료를 함께 확보하는 것이 핵심. 해소 이후 가격이 크게 변동한 특별한 사정이 있다면 이를 뒷받침하는 자료도 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실혼 성립</strong> — 혼인에 준하는 공동생활 실체·기간의 인정.</li>\n<li><strong>분할 대상</strong> — 공동의 노력으로 형성·유지한 재산의 범위.</li>\n<li><strong>기준시점</strong> — 분할 대상·액수의 기준일(사실혼 해소일).</li>\n<li><strong>가액 산정</strong> — 해소일 기준 가액과 후발적 특별 사정 참작.</li>\n<li><strong>기여도</strong> — 재산 형성·유지에 대한 기여도 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한변협 법률구조재단</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 해소 재산분할의 기준시점',
        summary:
          '대법원 2022므11027(대법원, 2024.01.04 선고) 영역에서 법원은 사실혼 해소를 원인으로 한 재산분할에서 분할의 대상이 되는 재산과 액수는 사실혼이 해소된 날을 기준으로 하여 정하여야 한다고 보았습니다. 다만 재산분할 제도가 부부 공동재산의 공평한 청산·분배를 목적으로 하는 점에 비추어, 사실혼 해소 이후 사실심 변론종결 시까지 혼인 중 공동의 노력으로 형성·유지한 부동산 등에 발생한 외부적·후발적 사정으로서 그로 인한 이익이나 손해를 일방에게 귀속시키는 것이 공평한 청산·분배라는 제도의 목적에 현저히 부합하지 않는 결과를 가져오는 등의 특별한 사정이 있는 경우에는 이를 분할대상 재산의 가액 산정에 참작할 수 있다고 보아, 사실혼 해소일을 기준으로 가액을 산정하지 않은 원심에 법리오해의 잘못이 있다고 판시했습니다. 사실혼 재산분할 사안에서도 기준시점·후발 사정을 검토해볼 수 있습니다.',
        takeaway: '사실혼 해소 + 재산분할 + 기준시점 결합 시 분할 대상·액수 기준일(해소일)·후발적 특별 사정 참작 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '혼인신고를 안 했어도 재산을 나눌 수 있나요?',
        answer:
          '<strong>혼인에 준하는 사실혼 관계가 인정되면 재산분할 규정을 유추적용해 청산을 검토할 수 있는 영역입니다.</strong> 공동생활·기간 입증 자료를 정리.',
      },
      {
        question: '재산은 어느 시점 가격으로 나누나요?',
        answer:
          '<strong>분할 대상·액수는 사실혼이 해소된 날을 기준으로 정하는 것이 원칙인 영역입니다.</strong> 해소 시점·시점별 가액 자료를 정리.',
      },
      {
        question: '헤어진 뒤 집값이 오른 건 누구 몫인가요?',
        answer:
          '<strong>원칙은 해소일 기준이나, 후발적 특별 사정이 있으면 가액 산정에 참작될 수 있는 영역입니다.</strong> 가격 변동·사정 자료를 정리.',
      },
      {
        question: '사실혼은 어떻게 입증하나요?',
        answer:
          '<strong>전입·동거·공동생활 정황과 주변의 인식 등으로 사실혼 실체를 다투는 영역입니다.</strong> 동거·생활 자료를 정리.',
      },
      {
        question: '사실혼이 깨진 책임이 상대에게 있으면 위자료도 받나요?',
        answer:
          '<strong>정당한 이유 없는 사실혼 파기에 대해 위자료가 검토될 수 있는 영역입니다.</strong> 파기 경위·피해 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 인정 기준', href: '/guide/divorce/divorce-de-facto-recognition-track' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 5. defamation-online-community-post-track ───
  {
    domain: 'defamation',
    slug: 'defamation-online-community-post-track',
    keyword: '온라인 커뮤니티 비방글 명예훼손',
    questionKeyword: '온라인 커뮤니티에 저를 겨냥한 비방 글이 올라왔어요. 작성자는 \'몇 명 안 보는 곳에 올린 거\'라는데, 그래도 명예훼손이 되는지, 소수에게만 알려진 글도 공연성이 인정되는지 막막합니다.',
    ctaKeyword: '온라인 커뮤니티 비방글 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '커뮤니티 비방글 — 5단계 공연성·전파가능성 점검 | 로앤가이드',
      description:
        '온라인 커뮤니티 비방 글로 피해를 입었는데 소수만 봤다고 한다면, 형법 제307조 사실적시와 소수 열람도 전파가능성으로 인정되는 공연성, 비방 목적·게시물 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"온라인 커뮤니티에 저를 겨냥한 비방 글이 올라와 아는 사람들 사이에서 얼굴을 들기 어려운 상황입니다. 사실과 다른 이야기가 마치 진실처럼 적혀 있는데, 작성자는 \'몇 명 안 보는 곳에 올렸을 뿐\'이라며 대수롭지 않게 여깁니다. 소수만 본 글이라도 명예훼손이 되는지, 적게 알려진 글에도 \'공연성\'이라는 요건이 인정되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 개별적으로 소수의 사람에게 사실을 적시하였더라도 그 상대방이 불특정 또는 다수인에게 적시된 사실을 전파할 가능성이 있는 때에는 공연성이 인정된다는 이른바 \'전파가능성 이론\'을 공연성에 관한 확립된 법리로 유지하고, 이 법리가 정보통신망을 이용한 명예훼손 등에도 동일하게 적용되되 전파가능성의 구체적·객관적 적용 기준을 세워 공연성을 엄격하게 인정해 왔다고 본 사례 흐름이 있는 영역입니다. 커뮤니티 비방 + 소수 열람 + 명예훼손 결합은 \'공연성·전파가능성·비방 목적\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시물 보존 ② 사실 적시 ③ 공연성 ④ 비방 목적 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 목적 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 커뮤니티 비방글 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물 보존·사실 적시·공연성·비방 목적·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물 보존</strong> — 게시 글·작성자·일시·열람 범위 등 원본 보존.</li>\n<li><strong>② 사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시 여부 정리.</li>\n<li><strong>③ 공연성</strong> — 소수 열람이라도 전파가능성으로 공연성이 인정되는지.</li>\n<li><strong>④ 비방 목적</strong> — 표현 내용·상대방 범위·동기로 비방 목적 검토.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 소수에게 적시했더라도 상대방이 불특정·다수인에게 전파할 가능성이 있으면 공연성이 인정될 수 있는 영역(전파가능성 이론). 다만 전파가능성은 구체적·객관적 기준으로 엄격하게 판단되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 캡처·증거 보존 (즉시)</strong> — 게시 글·URL·작성자 계정·일시·열람 범위 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 구체적 사실 적시 여부, 소수 열람의 전파가능성 정리.</li>\n<li><strong>3단계 — 비방 목적·피해 정리 (2주)</strong> — 표현 동기·상대방 범위로 비방 목적, 피해 입증 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼·운영자 삭제 요청, 형사 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 커뮤니티 비방글 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>비방 게시물 원본·URL·캡처 (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>커뮤니티 열람·회원 범위 자료 (전파가능성)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>비방 목적·동기 정황 자료</strong></li>\n<li><strong>피해 입증 자료 (정신적 고통·진료·상담 기록 등)</strong></li>\n<li><strong>삭제 요청·신고·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 작성자가 \'몇 명만 보는 곳\'이라고 해도 그 상대방이 불특정·다수에게 전파할 가능성이 있으면 공연성이 인정될 수 있는 영역이므로 게시 위치·열람 범위를 함께 정리하는 것이 핵심. 글은 삭제·수정 전에 작성자 계정·URL과 함께 원본 형태로 캡처해 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 소수 열람이라도 전파가능성으로 공연성이 인정되는지.</li>\n<li><strong>사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시인지.</li>\n<li><strong>비방 목적</strong> — 표현 내용·상대방 범위·동기로 본 비방 목적.</li>\n<li><strong>작성자 특정</strong> — 익명·닉네임 작성자의 특정 가능성.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전파가능성 이론과 명예훼손 공연성',
        summary:
          '대법원 2020도5813(대법원, 2020.11.19 선고) 영역에서 법원은 명예훼손죄의 구성요건인 공연성이 \'불특정 또는 다수인이 인식할 수 있는 상태\'를 의미한다고 보면서, 개별적으로 소수의 사람에게 사실을 적시하였더라도 그 상대방이 불특정 또는 다수인에게 적시된 사실을 전파할 가능성이 있는 때에는 공연성이 인정된다는 이른바 \'전파가능성 이론\'이 공연성에 관한 확립된 법리로 정착되었고 현재에도 타당하므로 유지되어야 한다고 보았습니다. 또한 이 법리가 정보통신망을 이용한 명예훼손 등의 공연성 판단에도 동일하게 적용되되, 전파가능성의 구체적·객관적 적용 기준을 세우고 범의를 엄격히 보는 등으로 공연성을 엄격하게 인정해 왔다고 판시했습니다. 온라인 커뮤니티 비방 사안에서도 전파가능성·공연성을 검토해볼 수 있습니다.',
        takeaway: '커뮤니티 비방 + 소수 열람 + 명예훼손 결합 시 전파가능성 이론·공연성 인정·비방 목적 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '몇 명만 본 글도 명예훼손이 되나요?',
        answer:
          '<strong>소수에게 적시했더라도 전파가능성이 있으면 공연성이 인정될 수 있는 영역입니다.</strong> 게시 위치·열람 범위 자료를 정리.',
      },
      {
        question: '전파 가능성은 어떻게 따지나요?',
        answer:
          '<strong>구체적·객관적 기준으로 전파될 가능성을 엄격하게 판단하는 영역입니다.</strong> 게시 환경·관계 자료를 정리.',
      },
      {
        question: '커뮤니티 비공개 게시판 글도 공연성이 있나요?',
        answer:
          '<strong>회원 범위·열람 구조 등 게시 환경의 전파 정도가 공연성 판단에서 고려되는 영역입니다.</strong> 회원·열람 범위 자료를 정리.',
      },
      {
        question: '비방 목적은 어떻게 판단하나요?',
        answer:
          '<strong>표현 내용·상대방 범위·표현 동기·경위 등을 종합해 검토하는 영역입니다.</strong> 작성 동기·맥락 자료를 정리.',
      },
      {
        question: '글을 내리게 하고 배상도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '비방 목적·공익성 판단', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 6. defamation-youtube-comment-contempt-track ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-contempt-track',
    keyword: '유튜브 댓글 모욕죄 대응',
    questionKeyword: '유튜브 영상이나 댓글로 저를 향한 모욕성 댓글이 달렸어요. 단순히 기분 나쁜 표현인지 모욕죄가 되는지, 댓글 몇 개로도 처벌이 되는지, 전파 가능성은 어떻게 따지는지 막막합니다.',
    ctaKeyword: '유튜브 댓글 모욕죄 공연성·고의 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '유튜브 댓글 모욕 — 5단계 공연성·고의 점검 | 로앤가이드',
      description:
        '유튜브 댓글로 모욕성 표현 피해를 입었다면, 형법 제311조 모욕 성부와 소수 발언의 전파가능성 공연성, 검사의 엄격한 증명·미필적 고의·댓글 보존까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"유튜브 영상이나 댓글에 저를 겨냥한 모욕성 표현이 달려 볼 때마다 마음이 무너지는 상황입니다. 어떤 댓글은 대놓고 인신공격에 가깝고, 어떤 댓글은 거칠지만 단순히 기분 나쁜 표현 정도인 것 같기도 합니다. 댓글 몇 개로도 모욕죄가 되는지, 본 사람이 많지 않아도 \'공연성\'이 인정되는지, 작성자가 \'그럴 의도는 없었다\'고 하면 어떻게 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제311조는 공연히 사람을 모욕한 모욕죄를 규율하고, 그 구성요건인 \'공연성\'에는 명예훼손죄의 공연성 법리가 동일하게 적용되는 영역입니다. 판례는 개별적으로 소수의 사람에게 발언하였더라도 상대방이 불특정 또는 다수인에게 전파할 가능성이 객관적으로 인정되면 공연성을 인정할 수 있지만, 특정 소수에게만 발언했다는 점은 공연성이 부정되는 유력한 사정이므로 전파가능성에 관해서는 검사의 엄격한 증명이 필수적이고, 전파가능성을 이유로 공연성을 인정할 때에도 위험을 용인하는 미필적 고의가 필요하며, 발언 내용이 전체적으로 불쾌함을 느낄 정도의 부정적·비판적 의견이나 거친 감정 표현에 그치는 경우에는 전파가능성 인정에 신중해야 한다고 본 사례 흐름이 있는 영역입니다. 유튜브 댓글 + 모욕 + 공연성·고의 결합은 \'모욕 성부·전파가능성·미필적 고의\' 다툼이 가능한 트랙입니다. 당사자라면 ① 댓글 보존 ② 모욕 성부 ③ 공연성 ④ 미필적 고의 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 성부 ③ 공연성 ④ 고의 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유튜브 댓글 모욕죄 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 댓글 보존·모욕 성부·공연성·미필적 고의·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 댓글 보존</strong> — 댓글·작성자·영상·일시·열람 정황 원본 보존.</li>\n<li><strong>② 모욕 성부</strong> — 경멸적 인신공격인지, 거친 비판·감정 표현인지 구분.</li>\n<li><strong>③ 공연성</strong> — 소수 열람이라도 전파가능성으로 공연성이 인정되는지.</li>\n<li><strong>④ 미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사 검토.</li>\n<li><strong>⑤ 대응</strong> — 증거 정리·형사 고소·민사 손해배상 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 모욕죄에도 명예훼손의 공연성 법리가 적용되어 전파가능성으로 공연성을 인정할 수 있되 검사의 엄격한 증명·미필적 고의가 필요하고, 거친 감정 표현에 그치는 경우에는 전파가능성 인정에 신중해야 하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글·영상 캡처 보존 (즉시)</strong> — 댓글·작성자 계정·영상 URL·일시·열람 정황 보존.</li>\n<li><strong>2단계 — 모욕 성부·공연성 정리 (1주)</strong> — 경멸적 표현인지 구분, 소수 열람의 전파가능성 정리.</li>\n<li><strong>3단계 — 미필적 고의·피해 정리 (2주)</strong> — 전파가능성 인식·용인 정황, 피해 입증 정리.</li>\n<li><strong>4단계 — 고소·신고 (분쟁 시)</strong> — 모욕 고소·사이버범죄 신고 검토, 증거 제출.</li>\n<li><strong>5단계 — 민사·합의 (병행)</strong> — 손해배상 청구·합의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유튜브 댓글 모욕죄 공연성·고의 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 모욕 성부·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>모욕성 댓글 원본·URL·캡처 (표현 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>영상·댓글 열람·반응 정황 자료 (전파가능성)</strong></li>\n<li><strong>표현 맥락·대화 흐름 자료 (모욕 성부)</strong></li>\n<li><strong>반복·다수 작성 정황 자료 (고의)</strong></li>\n<li><strong>피해 입증 자료 (정신적 고통·진료·상담 기록 등)</strong></li>\n<li><strong>삭제 요청·신고·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 댓글이 인격을 허무는 경멸적 표현인지 단순히 불쾌한 거친 비판·감정 표현인지에 따라 모욕 성부가 달라질 수 있는 영역이고, 소수만 본 경우 전파가능성과 미필적 고의에 대한 엄격한 증명이 필요한 점이 핵심. 댓글·영상은 작성자 계정·URL과 함께 원본 형태로 캡처해 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>모욕 성부</strong> — 경멸적 인신공격인지, 거친 비판·감정 표현인지.</li>\n<li><strong>공연성</strong> — 소수 열람 댓글의 전파가능성과 공연성 인정 여부.</li>\n<li><strong>미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사의 존부.</li>\n<li><strong>작성자 특정</strong> — 익명·닉네임 작성자의 특정 가능성.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소수 발언의 전파가능성과 모욕 고의',
        summary:
          '대법원 2022도14571(대법원, 2024.01.04 선고) 영역에서 법원은 모욕죄의 \'공연성\'에도 명예훼손죄의 공연성 법리가 동일하게 적용되어, 개별적으로 소수의 사람에게 발언하였더라도 상대방이 불특정 또는 다수인에게 전파할 가능성이 객관적으로 인정되면 공연성을 인정할 수 있지만, 특정 소수에게만 발언한 점은 공연성이 부정되는 유력한 사정이어서 전파가능성에 관해서는 검사의 엄격한 증명이 필수적이라고 보았습니다. 또한 전파가능성을 이유로 공연성을 인정하는 경우에도 미필적 고의가 필요하고, 발언 후 실제 전파 여부는 소극적 사정으로 고려될 수 있으며, 전체적으로 불쾌함을 느낄 정도의 부정적·비판적 의견이나 거친 감정 표현에 그치는 경우에는 전파가능성 인정에 더욱 신중을 기해야 한다고 판시했습니다. 유튜브 댓글 모욕 사안에서도 공연성·고의를 검토해볼 수 있습니다.',
        takeaway: '유튜브 댓글 + 모욕 + 공연성·고의 결합 시 전파가능성 엄격 증명·미필적 고의·표현 정도 검토 영역 — 변호사 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '거친 댓글이면 다 모욕죄가 되나요?',
        answer:
          '<strong>경멸적 인신공격인지, 단순히 불쾌한 거친 표현인지에 따라 모욕 성부가 달라지는 영역입니다.</strong> 표현 내용·맥락을 정리.',
      },
      {
        question: '댓글 몇 개만 봐도 공연성이 있나요?',
        answer:
          '<strong>소수 열람이라도 전파가능성이 객관적으로 인정되면 공연성이 인정될 수 있는 영역입니다.</strong> 영상·댓글 열람 정황을 정리.',
      },
      {
        question: '작성자가 \'그럴 의도가 없었다\'고 하면요?',
        answer:
          '<strong>전파가능성 인식과 위험을 용인하는 미필적 고의가 있어야 공연성이 인정되는 영역입니다.</strong> 작성 경위·정황 자료를 정리.',
      },
      {
        question: '익명·닉네임 작성자도 찾을 수 있나요?',
        answer:
          '<strong>수사·플랫폼 협조 등을 통해 작성자 특정을 검토할 수 있는 영역입니다.</strong> 계정·게시 정보를 먼저 확보.',
      },
      {
        question: '댓글을 지우게 하고 배상도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '모욕죄 성립 기준', href: '/guide/defamation/defamation-insult-track' },
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 7. defamation-parent-group-chat-track ───
  {
    domain: 'defamation',
    slug: 'defamation-parent-group-chat-track',
    keyword: '학부모 단톡방 명예훼손',
    questionKeyword: '학부모 단체 카톡방에서 누군가 저에 관한 안 좋은 이야기를 적었어요. 친한 학부모 몇 명만 있는 방인데도 명예훼손이 되는지, 친밀한 관계면 공연성이 부정된다는데 사실인지 막막합니다.',
    ctaKeyword: '학부모 단톡방 명예훼손 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '학부모 단톡방 — 5단계 공연성·친밀관계 점검 | 로앤가이드',
      description:
        '학부모 단톡방에 저에 관한 비방 글이 올라왔다면, 형법 제307조 사실적시와 친밀·소수 관계에서 부정될 수 있는 공연성, 전파 특별한 사정·검사 엄격 증명까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아이 학교 학부모들이 함께 쓰는 단체 카톡방에서 누군가 저에 관한 좋지 않은 이야기를 적어 다른 학부모들 사이에서 입길에 오른 상황입니다. 친한 학부모 몇 명만 있는 방이라 \'우리끼리 한 말\'이라며 대수롭지 않게 넘기려 하는데, 막상 그 말이 제 귀에까지 들어온 걸 보면 더 퍼진 것 같기도 합니다. 친밀한 사이끼리만 있는 단톡방 글도 명예훼손이 되는지, \'친밀한 관계면 공연성이 부정된다\'는 말이 맞는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 특정 소수에 대한 사실적시의 경우 전파가능성을 이유로 공연성을 인정하려면 검사의 엄격한 증명이 필요하고, 발언 상대방이 발언자나 피해자의 배우자·친척·친구 등 사적으로 친밀한 관계에 있거나 직무상 비밀유지의무가 있는 경우에는 공연성이 부정될 수 있으며, 이 경우 공연성을 인정하려면 그러한 관계·신분에도 불구하고 불특정 또는 다수인에게 전파될 수 있다고 볼 만한 특별한 사정이 존재해야 한다고 본 사례 흐름이 있는 영역입니다. 학부모 단톡방 + 친밀관계 + 명예훼손 결합은 \'공연성·전파가능성·특별한 사정\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시물 보존 ② 사실 적시 ③ 관계·공연성 ④ 특별한 사정 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 관계 ④ 사정 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학부모 단톡방 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물 보존·사실 적시·관계·공연성·특별한 사정·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물 보존</strong> — 단톡방 글·작성자·일시·참여자 범위 원본 보존.</li>\n<li><strong>② 사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시 여부 정리.</li>\n<li><strong>③ 관계·공연성</strong> — 친밀·소수 관계에서 공연성 인정 여부 정리.</li>\n<li><strong>④ 특별한 사정</strong> — 친밀 관계에도 전파될 수 있는 특별한 사정 검토.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 발언 상대방이 사적으로 친밀한 관계 등에 있으면 공연성이 부정될 수 있고, 그럼에도 공연성을 인정하려면 불특정·다수인에게 전파될 수 있다고 볼 특별한 사정이 검사의 엄격한 증명으로 뒷받침되어야 하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단톡방 캡처·증거 보존 (즉시)</strong> — 글·작성자·일시·참여자 범위·전달 정황 보존.</li>\n<li><strong>2단계 — 사실 적시·관계 정리 (1주)</strong> — 구체적 사실 적시 여부, 참여자와의 관계·친밀도 정리.</li>\n<li><strong>3단계 — 특별한 사정·피해 정리 (2주)</strong> — 전파 정황 등 특별한 사정, 피해 입증 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 글 삭제 요청, 명예훼손 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">학부모 단톡방 명예훼손 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·관계·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>단톡방 글 원본·캡처 (적시 내용)</strong></li>\n<li><strong>작성자·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>단톡방 참여자·인원 범위 자료 (관계·공연성)</strong></li>\n<li><strong>참여자와의 관계·친밀도 자료</strong></li>\n<li><strong>전달·전파 정황 자료 (특별한 사정)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>피해 입증·삭제 요청·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친한 학부모끼리만 있는 단톡방이라는 점은 공연성이 부정될 유력한 사정이 될 수 있는 영역이지만, 그 글이 실제로 다른 사람들에게 전파되었거나 전파될 수 있는 특별한 사정이 있다면 공연성이 인정될 수 있는 점이 핵심. 참여자 범위와 전달 정황을 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>관계·공연성</strong> — 친밀·소수 관계에서 공연성이 부정되는지.</li>\n<li><strong>특별한 사정</strong> — 친밀 관계에도 전파될 수 있는 특별한 사정의 존부.</li>\n<li><strong>사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시인지.</li>\n<li><strong>전파 정황</strong> — 실제 전파·전달 정황과 엄격한 증명.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 친밀 관계와 공연성·특별한 사정',
        summary:
          '대법원 2015도12933(대법원, 2020.12.30 선고) 영역에서 법원은 특정 소수에 대한 사실적시의 경우 전파가능성을 이유로 명예훼손죄의 공연성을 인정하기 위해서는 검사의 엄격한 증명이 필요하다고 보았습니다. 또한 발언 상대방이 발언자나 피해자의 배우자·친척·친구 등 사적으로 친밀한 관계에 있는 경우, 또는 직무상 비밀유지의무가 있거나 이를 처리해야 할 공무원이나 이와 유사한 지위에 있는 경우에는 그러한 관계로 인하여 공연성이 부정될 수 있고, 이 경우 공연성을 인정하려면 그러한 관계나 신분에도 불구하고 불특정 또는 다수인에게 전파될 수 있다고 볼 만한 특별한 사정이 존재하여야 한다고 판시했습니다. 학부모 단톡방 사안에서도 친밀 관계·공연성·특별한 사정을 검토해볼 수 있습니다.',
        takeaway: '학부모 단톡방 + 친밀관계 + 명예훼손 결합 시 공연성 부정 사정·전파 특별한 사정·검사 엄격 증명 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '친한 학부모끼리 있는 방 글도 명예훼손이 되나요?',
        answer:
          '<strong>친밀 관계는 공연성이 부정될 유력한 사정이나, 전파될 특별한 사정이 있으면 인정될 수 있는 영역입니다.</strong> 참여자 범위·전달 정황을 정리.',
      },
      {
        question: '소수만 있는 단톡방도 공연성이 있나요?',
        answer:
          '<strong>소수·친밀 관계라도 전파될 수 있는 특별한 사정을 검사가 엄격히 증명하면 공연성이 인정될 수 있는 영역입니다.</strong> 전파 정황 자료를 정리.',
      },
      {
        question: '특별한 사정은 무엇을 말하나요?',
        answer:
          '<strong>친밀 관계·신분에도 불특정·다수인에게 전파될 수 있다고 볼 만한 구체적 정황을 의미하는 영역입니다.</strong> 실제 전파·전달 자료를 정리.',
      },
      {
        question: '글이 이미 다른 사람에게 퍼졌으면 어떻게 되나요?',
        answer:
          '<strong>실제 전파 정황은 공연성·특별한 사정 판단에서 중요한 자료가 되는 영역입니다.</strong> 전달 경로·캡처를 정리.',
      },
      {
        question: '글을 내리게 하고 배상도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '단체 대화방 명예훼손', href: '/guide/defamation/defamation-group-chat-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 8. defamation-customer-public-complaint-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-customer-public-complaint-falsely-accused-defense',
    keyword: '고객 공개항의 명예훼손 무고',
    questionKeyword: '제가 받은 부당한 처우를 해명·항의하는 글을 공개적으로 올렸는데, 상대가 저를 명예훼손으로 고소했어요. 진실한 사실을 공공의 이익을 위해 알린 거라 위법성이 없어진다는데, 정말 그런지 막막합니다.',
    ctaKeyword: '공개항의 명예훼손 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '공개항의 명예훼손 방어 — 5단계 공익·위법성조각 점검 | 로앤가이드',
      description:
        '공개적으로 해명·항의했다가 명예훼손 혐의를 받고 있다면, 형법 제310조 위법성조각의 진실성·공익 목적과 비방 표현 유무·배포 상대방 범위 제한, 조사 절차 대응까지 방어 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 겪은 부당한 처우와 의혹을 바로잡고 같은 처지의 사람들에게 알리려는 마음에 해명·항의하는 글을 공개적으로 올린 사람입니다. 그런데 상대방이 저를 명예훼손으로 고소했고, 사실과 다르게 신고되었다고 느껴 당황스럽습니다. 제 글은 객관적 사실에 바탕을 두었고 여러 사람의 이익을 위한 것이었는데, 진실한 사실을 공공의 이익을 위해 알리면 위법성이 없어진다는 법리가 정말 제게 적용되는지, 표현방법이나 글을 본 사람의 범위가 문제 되지는 않는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 명예를 훼손한 행위를, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하는 영역입니다. 판례는 적시 사실이 객관적으로 공공의 이익에 관한 것으로서 행위자도 주로 공공의 이익을 위하여 적시하였고, 적시 내용이 대체로 객관적 사실과 일치하며, 배포·공개된 상대방의 범위가 제한되고 표현방법도 상대를 비방하는 표현이 없는 경우에는 오로지 공공의 이익을 위하여 진실한 사실을 적시한 경우로서 형법 제310조의 위법성조각사유에 해당할 수 있다고 본 사례 흐름이 있는 영역입니다. 공개항의 + 해명 문서 배포 + 명예훼손 고소 결합은 \'진실성·공익성·표현방법\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 표현·범위 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 표현 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공개항의 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·표현·범위·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 해명·항의한 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 적시 내용이 대체로 객관적 사실과 일치하는지.</li>\n<li><strong>③ 공익 목적</strong> — 오로지 공공의 이익을 위한 적시인지, 동기·목적 정리.</li>\n<li><strong>④ 표현·범위</strong> — 비방 표현 유무, 배포·공개 상대방 범위의 제한성.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각(제310조) 주장·진술 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 적시 내용이 대체로 객관적 사실과 일치하고, 배포 상대방 범위가 제한되며, 비방 표현 없이 오로지 공공의 이익을 위한 것이었다면 형법 제310조의 위법성조각이 검토될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 글·근거 자료 보존 (즉시)</strong> — 해명·항의 글·근거 자료·배포 경위·상대방 범위 자료 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 적시 내용과 근거 자료를 대조해 객관적 사실과의 일치 정리.</li>\n<li><strong>3단계 — 공익성·표현·범위 정리 (2주)</strong> — 공익 목적, 비방 표현 유무, 공개 상대방 범위 제한성 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제310조 적용 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공개항의 명예훼손 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>해명·항의 글 원본·게시 일시 (적시 내용)</strong></li>\n<li><strong>의혹·처우 근거 자료 (사실 합치 입증)</strong></li>\n<li><strong>공익 목적·시정 의도 정황 자료</strong></li>\n<li><strong>배포·공개 상대방 범위 자료 (제한성)</strong></li>\n<li><strong>표현 내용·맥락 자료 (비방 표현 유무)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 글의 중요 부분이 대체로 객관적 사실과 일치하고, 공개 상대방의 범위가 제한되며, 상대를 비방하는 표현이 없이 오로지 공공의 이익을 위한 것이었음을 보여주는 근거 자료를 정리하는 것이 핵심. 진실성·공익성·표현방법을 함께 뒷받침하면 형법 제310조의 위법성조각이 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 적시 내용이 대체로 객관적 사실과 일치하는지.</li>\n<li><strong>공익 목적</strong> — 오로지 공공의 이익을 위한 적시인지.</li>\n<li><strong>표현방법</strong> — 상대를 비방하는 표현이 있었는지.</li>\n<li><strong>상대방 범위</strong> — 배포·공개된 상대방 범위의 제한성.</li>\n<li><strong>절차 대응</strong> — 조사·고소 절차에서 진술의 일관성과 소명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해명 문서 배포와 형법 제310조 위법성조각',
        summary:
          '대법원 2004도1388(대법원, 2005.07.15 선고) 영역에서 법원은 아파트 동대표인 피고인이 자신에 대한 부정비리 의혹을 해명하기 위하여 그 의혹제기자가 명예훼손죄로 입건된 사실 등을 기재한 문서를 아파트 입주민들에게 배포한 사안에서, 문서에 기재된 내용이 대체로 객관적인 사실과 일치하고, 배포가 이루어진 상대방의 범위가 제한되며, 그 표현방법도 의혹제기자를 비방하는 표현이 없는 점 등 제반 사정에 비추어, 그 문서 배포행위가 오로지 공공의 이익을 위하여 진실한 사실을 적시한 경우로서 형법 제310조의 위법성조각사유에 해당한다고 판시했습니다. 공개항의·해명 사안에서도 진실성·공익성·표현방법·상대방 범위 제한을 검토해볼 수 있습니다.',
        takeaway: '공개항의 + 해명 문서 배포 + 명예훼손 고소 결합 시 진실성·공익 목적·표현방법·상대방 범위 제한 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '진실한 사실을 알린 것뿐인데 명예훼손이 되나요?',
        answer:
          '<strong>사실 적시도 명예훼손이 될 수 있으나 진실·공익 목적이면 형법 제310조로 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '공개적으로 올렸는데 상대방 범위가 문제 되나요?',
        answer:
          '<strong>배포·공개 상대방의 범위가 제한적인지가 위법성조각 판단에서 고려되는 영역입니다.</strong> 공개 범위·열람자 자료를 정리.',
      },
      {
        question: '표현이 강했으면 위법성조각이 안 되나요?',
        answer:
          '<strong>상대를 비방하는 표현이 있었는지가 표현방법 판단에서 중요한 영역입니다.</strong> 표현 내용·맥락 자료를 정리.',
      },
      {
        question: '일부 내용이 정확하지 않으면 진실성이 부정되나요?',
        answer:
          '<strong>중요한 부분이 대체로 객관적 사실과 일치하면 세부 차이가 있어도 진실성이 인정될 수 있는 영역입니다.</strong> 근거 자료와 전체 맥락을 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>위법성조각(진실·공익)과 비방 표현 부존재 주장, 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
      { label: '공공의 이익 위법성조각', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '진실한 사실 적시 방어', href: '/guide/defamation/defamation-truth-defense-track' },
      { label: '사실 적시·의견 구분', href: '/guide/defamation/defamation-fact-opinion-track' },
      { label: '명예훼손 합의·처분', href: '/guide/defamation/defamation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-qualified-acceptance-debt-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-qualified-acceptance-debt-track',
    keyword: '상속채무 한정승인',
    questionKeyword: '돌아가신 부모님 앞으로 재산보다 빚이 더 많다는 걸 뒤늦게 알았어요. 한정승인을 하려는데 기간이 지난 건 아닌지, 이미 단순승인으로 처리된 경우에도 한정승인을 할 수 있는지 막막합니다.',
    ctaKeyword: '상속채무 한정승인 기간·특별한정승인 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '상속채무 한정승인 — 5단계 3개월 기간·구제 점검 | 로앤가이드',
      description:
        '부모님 앞으로 빚이 재산보다 많아 한정승인을 고민한다면, 민법 제1019조 안 날부터 3개월 신고기간과 채무초과를 늦게 안 경우 특별한정승인, 단순승인 간주·청산까지 구제 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 부모님이 남기신 것이 재산보다 빚이 훨씬 많다는 사실을 뒤늦게 알게 된 상속인입니다. 빚을 그대로 떠안게 될까 두려운데, 한정승인이라는 제도가 있다는 말은 들었지만 \'안 날부터 3개월\'이라는 기간이 이미 지난 건 아닌지, 모르고 상속재산에 손을 댄 탓에 단순승인으로 처리되어 버린 경우에도 다시 한정승인을 할 수 있는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제1019조 제1항은 상속인이 상속개시 있음을 안 날부터 3개월 내에 단순승인·한정승인·포기를 할 수 있도록 정하고, 같은 조 제3항(특별한정승인)은 상속인이 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 그 기간 내에 알지 못하고 단순승인을 한 경우 그 사실을 안 날부터 3개월 내에 한정승인을 할 수 있도록 정하는 영역입니다. 판례는 헌법불합치결정에 따른 민법 개정으로 특별한정승인 규정이 신설되었고 일정 경과조치에 따라 한정승인 신고의 기회가 부여되어 있음을 확인하면서, 상속개시 있음을 안 날부터 3개월이 지나서 한 상속포기 신고는 그 자체로는 부적법하다고 본 사례 흐름이 있는 영역입니다. 상속채무 + 한정승인 + 3개월 기간 결합은 \'기간·특별한정승인·구제\' 정리가 필요한 트랙입니다. 당사자라면 ① 상속·채무 파악 ② 기간 확인 ③ 한정승인 ④ 특별한정승인 ⑤ 청산 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 기간 ③ 한정승인 ④ 특별 ⑤ 청산 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상속채무 한정승인 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속·채무 파악·기간 확인·한정승인·특별한정승인·청산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속·채무 파악</strong> — 상속재산·상속채무 규모, 채무초과 여부 파악.</li>\n<li><strong>② 기간 확인</strong> — 상속개시 있음을 안 날부터 3개월 기간 확인.</li>\n<li><strong>③ 한정승인</strong> — 기간 내 한정승인·포기 신고 검토.</li>\n<li><strong>④ 특별한정승인</strong> — 채무초과를 중대한 과실 없이 늦게 안 경우 특별한정승인 검토.</li>\n<li><strong>⑤ 청산</strong> — 한정승인 후 상속재산 한도 내 채무 변제·청산 절차.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 상속개시 있음을 안 날부터 3개월이 지나서 한 상속포기는 그 자체로는 부적법할 수 있으나, 채무초과를 중대한 과실 없이 늦게 안 경우 그 사실을 안 날부터 3개월 내 특별한정승인을 검토할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속·채무 자료 보존 (즉시)</strong> — 상속재산 목록·채무 내역·사망 시점 자료 보존.</li>\n<li><strong>2단계 — 기간·인지 시점 정리 (1주)</strong> — 상속개시 인지일·채무초과 인지일, 3개월 기간 정리.</li>\n<li><strong>3단계 — 한정승인·특별한정승인 정리 (2주)</strong> — 일반 한정승인인지 특별한정승인인지 요건 정리.</li>\n<li><strong>4단계 — 한정승인 신고 (기간 내)</strong> — 관할 가정법원에 한정승인 신고·재산목록 제출.</li>\n<li><strong>5단계 — 공고·청산 (수리 후)</strong> — 채권자 공고·최고, 상속재산 한도 내 변제·청산.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속채무 한정승인 기간·특별한정승인 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상속·채무·기간 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·제적등본 (상속개시)</strong></li>\n<li><strong>가족관계증명서·기본증명서 (상속인 확정)</strong></li>\n<li><strong>상속재산 목록·부동산 등기부 (적극재산)</strong></li>\n<li><strong>상속채무 내역·금융거래 자료 (소극재산)</strong></li>\n<li><strong>채무초과·채무 인지 시점 입증 자료 (특별한정승인)</strong></li>\n<li><strong>상속개시 인지 시점 자료 (3개월 기간)</strong></li>\n<li><strong>한정승인 신고서·재산목록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한정승인은 상속개시 있음을 안 날부터 3개월 내 신고가 원칙인 영역이므로 인지 시점을 먼저 정리하는 것이 핵심이고, 그 기간이 지났더라도 채무가 재산을 초과하는 사실을 중대한 과실 없이 늦게 알았다면 그 사실을 안 날부터 3개월 내 특별한정승인을 검토할 수 있는 점을 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기간 기산점</strong> — 상속개시 있음을 안 날·채무초과를 안 날의 기산점.</li>\n<li><strong>중대한 과실</strong> — 채무초과를 알지 못한 데 중대한 과실이 있었는지.</li>\n<li><strong>단순승인 간주</strong> — 상속재산 처분 등으로 단순승인으로 간주되는지.</li>\n<li><strong>신고 적법성</strong> — 기간 도과 신고의 적법 여부·특별한정승인 가부.</li>\n<li><strong>청산 절차</strong> — 채권자 공고·최고와 상속재산 한도 내 변제.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (한정승인·포기 신고)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한변협 법률구조재단</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 3개월 기간 도과 상속포기와 특별한정승인',
        summary:
          '대법원 2001스38(대법원, 2002.01.15 선고) 영역에서 법원은 헌법재판소의 헌법불합치결정에 따라 2002. 1. 14. 민법이 개정되어 상속인이 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 민법 제1019조 제1항의 기간 내에 알지 못하고 단순승인을 한 경우 그 사실을 안 날부터 3개월 내에 한정승인을 할 수 있다는 제1019조 제3항이 신설되었고, 부칙 경과조치에 따라 일정 요건을 갖춘 상속인들에게 한정승인 신고의 기회가 부여되어 있다고 보았습니다. 다만 상속개시 있음을 안 날부터 3개월이 지나서 한 상속포기 신고는 그 자체로는 부적법하다고 보아(개정 민법 부칙 규정에 따라 정한 기간 내에 한정승인 신고를 할 수 있음은 별론), 기간 도과 포기 신고를 부적법하다고 판시했습니다. 상속채무 사안에서도 3개월 기간·특별한정승인 가부를 검토해볼 수 있습니다.',
        takeaway: '상속채무 + 한정승인 + 3개월 기간 결합 시 기간 기산점·특별한정승인 요건·기간 도과 신고 적법성 검토 영역 — 변호사 상담·가정법원 신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '한정승인은 언제까지 해야 하나요?',
        answer:
          '<strong>상속개시 있음을 안 날부터 3개월 내 신고가 원칙인 영역입니다.</strong> 상속개시 인지 시점 자료를 정리.',
      },
      {
        question: '3개월이 지났으면 방법이 없나요?',
        answer:
          '<strong>채무초과를 중대한 과실 없이 늦게 안 경우 그 사실을 안 날부터 3개월 내 특별한정승인을 검토할 수 있는 영역입니다.</strong> 채무 인지 시점 자료를 정리.',
      },
      {
        question: '모르고 상속재산을 썼는데 한정승인이 되나요?',
        answer:
          '<strong>상속재산 처분 등으로 단순승인으로 간주될 수 있어 신중한 검토가 필요한 영역입니다.</strong> 처분 경위·시점 자료를 정리.',
      },
      {
        question: '한정승인을 하면 빚은 어떻게 처리되나요?',
        answer:
          '<strong>상속으로 얻은 재산의 한도에서 채무를 변제하는 청산 절차가 진행되는 영역입니다.</strong> 재산·채무 목록을 정리.',
      },
      {
        question: '상속포기와 한정승인은 어떻게 다른가요?',
        answer:
          '<strong>포기는 상속 자체를 받지 않는 것, 한정승인은 상속재산 한도에서만 책임지는 것으로 구분되는 영역입니다.</strong> 재산·채무 규모를 비교해 정리.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-qualified-acceptance-documents' },
      { label: '상속포기 신고 절차', href: '/guide/inheritance/inheritance-renunciation-track' },
      { label: '특별한정승인 요건', href: '/guide/inheritance/inheritance-special-acceptance-track' },
      { label: '상속채무 청산 절차', href: '/guide/inheritance/inheritance-debt-liquidation-track' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement-track' },
    ],
  },

  // ─── 10. traffic-accident-hit-and-run-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-hit-and-run-track',
    keyword: '뺑소니 사고 도주',
    questionKeyword: '교통사고를 당했는데 가해 차량이 멈추지 않고 그대로 가버렸어요. 이게 뺑소니로 처벌되는지, 가해자가 \'잠깐 자리를 비웠을 뿐 도주는 아니다\'라고 하면 어떻게 판단하는지 막막합니다.',
    ctaKeyword: '뺑소니 도주차량 판단 기준 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '뺑소니 사고 — 5단계 도주 판단·증거 점검 | 로앤가이드',
      description:
        '교통사고를 당했는데 가해 차량이 그대로 가버렸다면, 특가법 제5조의3 도주 해당 여부와 도로교통법 제54조 구호조치, 현장 잔류·자수 정황·가해자 특정 증거까지 대응 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"길에서 교통사고를 당했는데, 가해 차량이 멈춰 저를 살피기는커녕 그대로 현장을 떠나버린 상황입니다. 다친 몸도 걱정이지만, 가해자를 찾아 제대로 책임을 물을 수 있을지가 더 막막합니다. 이런 경우가 흔히 말하는 \'뺑소니\'로 무겁게 다뤄지는지, 가해자가 나중에 \'잠깐 자리를 비웠을 뿐 도주한 게 아니다\'라고 변명하면 법원은 무엇을 기준으로 도주인지 아닌지를 가리는지 도무지 가늠이 되지 않아 막막한 상태입니다." 특정범죄가중처벌법 제5조의3 제1항은 도로교통법 제54조 제1항에 따른 피해자 구호 등 조치를 하지 않고 도주한 운전자를 가중처벌하도록 정하고, 도로교통법 제54조 제1항은 사고 시 즉시 정차해 사상자를 구호하는 등 필요한 조치를 하도록 정하는 영역입니다. 판례는 특가법 제5조의3 제1항의 \'피해자를 구호하는 등 도로교통법 제54조 제1항의 조치를 취하지 아니하고 도주한 때\'란 사고 운전자가 사고로 피해자가 사상되었음을 인식하고도 피해자를 구호하는 등 조치를 취하지 아니하고 사고 장소를 이탈해 사고를 낸 자가 누구인지 확정될 수 없는 상태를 초래하는 경우를 의미하며, 도주에 해당하는지는 구호조치의 필요성·운전자의 행위 등 구체적 사정을 종합해 판단한다고 본 사례 흐름이 있는 영역입니다. 뺑소니 + 도주 판단 + 구호조치 결합은 \'도주 해당 여부·증거 확보\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사고·도주 정황 ② 구호조치 ③ 도주 판단 ④ 가해자 특정 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 정황 ② 구호 ③ 도주 ④ 특정 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 뺑소니 사고 도주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·도주 정황·구호조치·도주 판단·가해자 특정·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·도주 정황</strong> — 사고 경위·차량 이탈 정황·시점 정리.</li>\n<li><strong>② 구호조치</strong> — 가해자의 정차·구호 등 필요한 조치 여부 정리.</li>\n<li><strong>③ 도주 판단</strong> — 사상 인식·구호조치 미이행·이탈로 도주에 해당하는지.</li>\n<li><strong>④ 가해자 특정</strong> — 차량번호·블랙박스·CCTV로 가해자 특정 검토.</li>\n<li><strong>⑤ 대응</strong> — 신고·형사 고소·보험·손해배상 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 특가법상 \'도주\'는 사상 사실을 인식하고도 구호조치 없이 현장을 이탈해 사고를 낸 자가 누구인지 확정될 수 없는 상태를 초래하는 경우를 말하고, 도주 해당 여부는 구호조치의 필요성·운전자 행위 등 구체적 사정을 종합해 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·보험·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·도주 증거 확보 (즉시)</strong> — 차량번호·블랙박스·CCTV·목격자·부상 자료 확보.</li>\n<li><strong>2단계 — 신고·구호조치 정리 (즉시)</strong> — 112·119 신고, 가해자 구호조치 여부·이탈 정황 정리.</li>\n<li><strong>3단계 — 도주 해당·가해자 특정 (1~2주)</strong> — 사상 인식·구호조치 미이행 등 도주 판단, 가해자 특정 정리.</li>\n<li><strong>4단계 — 고소·수사 협조 (분쟁 시)</strong> — 형사 고소·수사 협조, 증거 제출.</li>\n<li><strong>5단계 — 보험·손해배상 (병행)</strong> — 보험 처리·손해배상·합의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">뺑소니 도주차량 판단 기준 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사고·도주·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>교통사고 사실확인원·신고 자료 (사고 발생)</strong></li>\n<li><strong>블랙박스·CCTV 영상 (도주·차량 특정)</strong></li>\n<li><strong>가해 차량번호·차종·인상착의 메모</strong></li>\n<li><strong>목격자 진술·연락처 자료 (도주 정황)</strong></li>\n<li><strong>상해진단서·치료 기록 (피해 입증)</strong></li>\n<li><strong>현장 사진·파손 자료 (사고 정황)</strong></li>\n<li><strong>보험·손해 관련 서류 (손해배상)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 특가법상 도주는 가해자가 사상 사실을 인식하고도 구호조치 없이 현장을 이탈했는지로 판단되는 영역이므로, 차량번호·블랙박스·CCTV·목격자 등 가해자를 특정하고 이탈 정황을 보여주는 증거를 즉시 확보하는 것이 핵심. 사고 직후 112·119 신고와 진단서 발급도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도주 해당</strong> — 사상 인식·구호조치 미이행·이탈로 도주에 해당하는지.</li>\n<li><strong>구호조치 필요성</strong> — 구호조치가 필요한 상황이었는지.</li>\n<li><strong>현장 잔류·자수</strong> — 현장에 머물렀거나 자수한 정황의 의미.</li>\n<li><strong>가해자 특정</strong> — 차량번호·영상으로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해 입증</strong> — 상해 정도·손해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 112 (교통사고·뺑소니 신고)</strong></li>\n<li><strong>한국교통안전공단 (교통사고 상담)</strong></li>\n<li><strong>손해보험협회 (보험·보상 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도주차량 판단 기준과 현장 잔류·자수 정황',
        summary:
          '대법원 2008도8627(대법원, 2009.06.11 선고) 영역에서 법원은 특정범죄가중처벌법 제5조의3 제1항의 \'피해자를 구호하는 등 도로교통법 제54조 제1항의 조치를 취하지 아니하고 도주한 때\'란 사고 운전자가 피해자의 사상을 인식하고도 구호 등 조치를 취하지 아니하고 사고 장소를 이탈해 사고를 낸 자가 누구인지 확정될 수 없는 상태를 초래하는 경우를 의미하며, 도주에 해당하는지는 구호조치의 필요성·운전자의 행위 등 구체적 사정을 종합해 판단해야 한다고 보았습니다. 나아가 사고 운전자가 현장에서 동승자로 하여금 운전자라고 허위 신고하게 했더라도, 사고 직후 현장을 이탈하지 않은 채 보험회사에 사고접수를 하고 경찰관에게 가해차량임을 밝히며 조사를 받은 후 이틀 뒤 자진 출두해 자수한 경우에는 특가법 제5조의3 제1항의 도주에 해당하지 않는다고 판시했습니다. 뺑소니 사안에서도 도주 해당 여부·구호조치·이탈 정황을 검토해볼 수 있습니다.',
        takeaway: '뺑소니 + 도주 판단 + 구호조치 결합 시 도주 해당 여부·구호조치 필요성·현장 잔류 정황 검토 영역 — 변호사 상담·경찰 신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '가해 차량이 그냥 가버리면 다 뺑소니인가요?',
        answer:
          '<strong>사상 인식·구호조치 미이행·이탈로 가해자가 누구인지 확정될 수 없는 상태인지를 종합해 판단하는 영역입니다.</strong> 이탈 정황·증거를 정리.',
      },
      {
        question: '가해자가 \'잠깐 자리를 비운 것\'이라고 하면요?',
        answer:
          '<strong>현장 잔류·구호조치·자수 등 정황에 따라 도주 해당 여부가 달라지는 영역입니다.</strong> 이탈 시점·구호 여부 자료를 정리.',
      },
      {
        question: '차량번호를 못 봤는데 가해자를 찾을 수 있나요?',
        answer:
          '<strong>블랙박스·CCTV·목격자 등으로 가해자 특정을 검토할 수 있는 영역입니다.</strong> 영상·목격 자료를 즉시 확보.',
      },
      {
        question: '가해자를 못 찾으면 치료비는 어떻게 하나요?',
        answer:
          '<strong>자동차손해배상 보장사업 등 구제 제도를 검토할 수 있는 영역입니다.</strong> 사고·치료 자료를 정리.',
      },
      {
        question: '사고 직후 무엇부터 해야 하나요?',
        answer:
          '<strong>112·119 신고, 차량번호·영상 확보, 진단서 발급을 먼저 검토하는 영역입니다.</strong> 현장·부상 자료를 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '뺑소니 가해자 특정·증거', href: '/guide/traffic-accident/traffic-accident-hit-and-run-evidence-track' },
      { label: '교통사고 형사 처벌 기준', href: '/guide/traffic-accident/traffic-accident-criminal-track' },
      { label: '치료비·손해 산정', href: '/guide/traffic-accident/traffic-accident-damages-calculation' },
      { label: '보장사업·무보험 구제', href: '/guide/traffic-accident/traffic-accident-guarantee-fund-track' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
    ],
  },
];
