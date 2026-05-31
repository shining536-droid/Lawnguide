import { SpokePage } from '../spoke-pages';

// batch84 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-06-01)
//
// 고유 존재 이유:
// 1. divorce-international-marriage-foreign-spouse-track — 국제결혼 외국인 배우자가 한국인 배우자의 반복된 폭력으로 이혼·위자료를 구하는 절차형 트랙. 국제사법상 준거법·심히 부당한 대우·파탄 책임 평가가 핵심.
// 2. divorce-business-debt-property-division-track — 사업 채무 등 소극재산이 적극재산을 초과할 때 채무 분담형 재산분할 가능 여부 판단형 트랙. 채무초과 시 분담 방법·부양적 요소가 핵심.
// 3. divorce-adultery-proof-alimony-track — 배우자·상간자의 부정행위 위자료 청구와 단기소멸시효 기산점 판단형 트랙. 이혼 원인 위자료 손해 확정 시점(=최종 이혼)·부진정연대가 핵심.
// 4. divorce-custody-relocation-dispute-track — 이혼 시 친권자·양육자 지정과 공동양육 가부 판단형 트랙. 자녀 복리 기준·공동양육 여건 충족 여부가 핵심.
// 5. defamation-apartment-resident-app-track — 아파트 입주민 앱·온라인에 비방 글을 올린 정보통신망법 명예훼손 victim 판단형 트랙. 사실 적시 정도·이미 떠도는 소문의 공연성·비방 목적이 핵심.
// 6. defamation-office-gossip-coworker-track — 직장 동료 뒷담화·전화 발언의 공연성(전파가능성)과 미필적 고의 판단형 트랙. 특정 소수 발언의 전파가능성 인정 신중 기준이 핵심.
// 7. defamation-store-review-bombing-track — 가게 별점 테러·허위 후기의 사실 적시 여부와 업무방해 고의 판단형 트랙. 의견·평가와 사실 적시 구분·업무방해 고의가 핵심.
// 8. defamation-anonymous-tip-falsely-accused-defense — accused 관점. 익명 제보·비판 표현이 형법 제310조 위법성조각·모욕죄 성부에 해당하는지 다투는 방어 트랙. 공공의 이익·부수적 사익·경미한 표현이 핵심.
// 9. inheritance-legal-reserve-claim-track — 포괄적 유증에 대한 유류분 반환 청구와 부족액 산정 판단형 트랙. 포괄 수증자 승계 소극재산 공제·유류분 침해 범위가 핵심.
// 10. traffic-accident-pedestrian-crosswalk-fault-track — 보험설계사 설명의무 위반 손해배상에서 과실상계·책임제한 판단형 트랙. 보험계약자 과실 참작·사실심 전권사항이 핵심.

export const spokesBatch84DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-international-marriage-foreign-spouse-track ───
  {
    domain: 'divorce',
    slug: 'divorce-international-marriage-foreign-spouse-track',
    keyword: '국제결혼 외국인 배우자 이혼',
    questionKeyword: '외국인 배우자와 국제결혼을 했는데 한국인 배우자의 반복된 폭력으로 더는 함께 살 수 없습니다. 외국 국적이라 한국에서 이혼이 되는지, 어느 나라 법이 적용되는지, 위자료는 받을 수 있는지 막막합니다.',
    ctaKeyword: '국제결혼 외국인 배우자 이혼 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '국제결혼 이혼 — 5단계 준거법·위자료 점검 | 로앤가이드',
      description:
        '외국인 배우자인데 한국인 배우자의 폭력으로 이혼하려는데 절차가 막막하다면 준거법·이혼 사유·위자료 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"국제결혼으로 한국에 와서 가정을 꾸렸지만, 한국인 배우자의 폭력이 거듭되면서 더는 함께 살 수 없어 이혼을 결심한 상황입니다. 외국 국적이라 한국 법원에서 이혼이 가능한지, 어느 나라 법이 적용되는지조차 알기 어렵고, 그동안 견뎌온 폭력과 고통에 대한 위자료를 받을 수 있는지, 도리어 \'당신이 화를 돋웠다\'는 말로 책임을 떠넘기지는 않을지 도무지 가늠이 되지 않아 막막한 상태입니다." 국제사법 제39조 단서는 부부 일방이 대한민국 국민으로서 대한민국에 상거소를 두고 있는 경우 이혼의 준거법을 대한민국 민법으로 정하고, 민법 제840조 제3호는 배우자로부터 심히 부당한 대우를 받았을 때를, 같은 조 제6호는 혼인을 계속하기 어려운 중대한 사유가 있을 때를 재판상 이혼 사유로 정하는 영역입니다. 판례는 \'심히 부당한 대우\'를 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행·학대·모욕으로 보고, 반복된 폭력으로 애정과 신뢰가 회복할 수 없을 정도로 파탄되었다면 제3호 또는 제6호의 재판상 이혼 사유에 해당한다고 본 사례 흐름이 있는 영역입니다. 국제결혼 + 배우자 폭력 + 이혼·위자료 결합은 \'준거법·이혼 사유·책임정도\' 정리가 필요한 트랙입니다. 당사자라면 ① 신변 안전 ② 준거법·관할 ③ 이혼 사유 ④ 위자료·재산분할 ⑤ 체류·자녀 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 안전 ② 준거법 ③ 사유 ④ 위자료 ⑤ 체류 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 국제결혼 외국인 배우자 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신변 안전·준거법·이혼 사유·위자료·체류 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신변 안전</strong> — 긴급 위험 시 112 신고·1366 상담·임시조치·쉼터 등 안전 확보.</li>\n<li><strong>② 준거법·관할</strong> — 한국인 배우자·상거소 기준 국제사법상 준거법·한국 법원 관할 검토.</li>\n<li><strong>③ 이혼 사유</strong> — 심히 부당한 대우(제3호)·혼인 계속 곤란(제6호) 해당 여부 정리.</li>\n<li><strong>④ 위자료·재산분할</strong> — 정신적 고통 위자료·재산분할 청구 검토.</li>\n<li><strong>⑤ 체류·자녀</strong> — 체류자격·자녀 양육·면접교섭 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한국인 배우자가 한국에 상거소를 둔 경우 국제사법상 이혼 준거법은 대한민국 민법으로 검토될 수 있는 영역. 반복된 폭력으로 혼인이 회복할 수 없이 파탄되었다면 심히 부당한 대우 등 재판상 이혼 사유 해당 여부를 검토해볼 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·여성긴급전화·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신변 안전 확보 (즉시)</strong> — 긴급 시 112 신고, 1366 상담, 임시조치·통역·쉼터 안내 확인.</li>\n<li><strong>2단계 — 준거법·관할 정리 (1주)</strong> — 한국인 배우자·상거소 기준 준거법·한국 법원 관할 정리.</li>\n<li><strong>3단계 — 이혼 사유·증거 정리 (1~2주)</strong> — 폭력 정황(진단서·신고 이력)으로 재판상 이혼 사유 정리.</li>\n<li><strong>4단계 — 이혼·위자료 청구 (소 제기 시)</strong> — 재판상 이혼·위자료·재산분할 청구.</li>\n<li><strong>5단계 — 판결·체류 정리 (선고 후)</strong> — 위자료·재산분할 이행, 체류자격·자녀 사항 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">국제결혼 외국인 배우자 이혼 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 신분·증거·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·외국인등록증·여권 (혼인·신분 확인)</strong></li>\n<li><strong>상해진단서·치료 기록 (폭력 피해 입증)</strong></li>\n<li><strong>112 신고 이력·경찰 진술 자료 (반복성)</strong></li>\n<li><strong>위협 문자·녹취·SNS 기록 (부당 대우)</strong></li>\n<li><strong>한국인 배우자 상거소·재직 자료 (준거법 검토)</strong></li>\n<li><strong>재산·소득 자료 (위자료·재산분할 산정)</strong></li>\n<li><strong>체류·자녀 관련 자료 (체류자격·양육)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국 국적이라도 한국인 배우자가 한국에 상거소를 둔 경우 한국 법원에서 대한민국 민법을 준거법으로 이혼을 검토할 수 있는 영역이므로, 폭력의 반복성을 보여주는 진단서·신고 이력을 시간 순으로 모아두는 것이 핵심. 언어가 어려우면 통역·다문화가족지원 상담을 함께 활용하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>준거법·관할</strong> — 한국인 배우자·상거소 기준 준거법·한국 법원 관할 인정 여부.</li>\n<li><strong>이혼 사유</strong> — 심히 부당한 대우·혼인 계속 곤란 사유 해당 여부.</li>\n<li><strong>책임정도</strong> — 혼인 파탄에 관한 부부 쌍방의 책임정도 평가.</li>\n<li><strong>위자료 범위</strong> — 정신적 고통의 위자료 인정 범위.</li>\n<li><strong>체류·자녀</strong> — 이혼 후 체류자격·자녀 양육·면접교섭.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366 (다문화·긴급 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 국제결혼 배우자 폭력과 재판상 이혼 사유',
        summary:
          '대법원 2020므14763(대법원, 2021.03.25 선고) 영역에서 법원은 베트남 국민 甲과 대한민국 국민 乙이 혼인신고를 마친 부부인데 甲이 乙의 계속된 폭행으로 혼인이 파탄되었다며 이혼을 구한 사안에서, 乙이 대한민국 국민으로서 대한민국에 상거소를 두고 있으므로 국제사법 제39조 단서에 따라 이혼의 준거법은 대한민국 민법이라고 보았습니다. 나아가 乙이 반복적으로 甲에게 폭력을 행사하였고 그 정도도 무거워, 乙의 행위는 甲에 대한 부당한 대우에 해당할 뿐만 아니라 애정과 신뢰가 상실되어 회복할 수 없을 정도로 파탄되었으므로 민법 제840조 제3호 또는 제6호의 재판상 이혼 사유에 해당하는데도, 甲에게 폭력을 유발한 책임이 있다는 이유로 이혼 청구를 배척한 원심에 법리오해 등의 잘못이 있다고 판시했습니다. 국제결혼 폭력 사안에서도 준거법·이혼 사유·책임정도를 검토해볼 수 있습니다.',
        takeaway: '국제결혼 + 배우자 폭력 + 이혼·위자료 결합 시 준거법·심히 부당한 대우·파탄 책임정도 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '외국 국적인데 한국에서 이혼할 수 있나요?',
        answer:
          '<strong>한국인 배우자가 한국에 상거소를 둔 경우 한국 법원에서 대한민국 민법으로 이혼을 검토할 수 있는 영역입니다.</strong> 배우자 상거소·혼인 자료를 정리.',
      },
      {
        question: '어느 나라 법이 적용되나요?',
        answer:
          '<strong>국제사법 제39조 단서에 따라 일방이 한국 국민·한국 상거소면 대한민국 민법이 준거법으로 검토되는 영역입니다.</strong> 국적·상거소 자료를 확인.',
      },
      {
        question: '폭력 때문에 이혼되나요?',
        answer:
          '<strong>혼인 지속이 가혹할 정도의 반복된 폭력은 심히 부당한 대우 등 재판상 이혼 사유로 검토될 수 있는 영역입니다.</strong> 진단서·신고 이력을 정리.',
      },
      {
        question: '제가 화를 돋웠다고 하면 이혼이 안 되나요?',
        answer:
          '<strong>파탄이 회복할 수 없을 정도이고 일방의 책임이 더 무겁지 않은 한 이혼이 인용될 수 있는 영역입니다.</strong> 폭력 경위·책임정도 자료를 정리.',
      },
      {
        question: '이혼하면 체류자격은 어떻게 되나요?',
        answer:
          '<strong>혼인 파탄에 본인 귀책이 없는 사정 등에 따라 체류자격을 검토할 수 있는 영역입니다.</strong> 출입국·다문화 상담을 함께 확인.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '가정폭력 접근금지 이혼', href: '/guide/divorce/divorce-domestic-violence-protection-order-track' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 2. divorce-business-debt-property-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-business-debt-property-division-track',
    keyword: '사업 채무 재산분할',
    questionKeyword: '이혼하려는데 배우자가 사업하면서 진 빚이 많아 재산보다 채무가 더 큰 상황이에요. 빚이 더 많으면 재산분할이 아예 안 되는 건지, 채무를 나누는 방식의 분할도 가능한지 막막합니다.',
    ctaKeyword: '사업 채무 채무초과 재산분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '채무 재산분할 — 5단계 채무초과·분담 점검 | 로앤가이드',
      description:
        '배우자의 사업 빚이 재산보다 많아 재산분할이 될지 막막하다면 채무초과·채무분담·부양적 요소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 결심하고 부부 재산을 정리해보니, 배우자가 사업을 하면서 진 빚이 모아둔 재산보다 훨씬 많아 오히려 빚더미만 남은 상황입니다. 함께 일군 재산을 나누기는커녕 빚을 나눠 떠안아야 하는 건 아닌지, 빚이 더 많으면 재산분할 청구가 아예 받아들여지지 않는 건지, 아니면 채무를 어떻게 분담할지 정하는 분할도 가능한지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제839조의2는 협의·재판상 이혼 시 재산분할청구권을 정하면서 분할의 액수·방법을 당사자 쌍방의 협력으로 이룬 재산의 액수와 기타 사정을 참작해 정하도록 하는 영역입니다. 판례는 부부 각자가 보유한 적극재산에서 소극재산을 공제한 결과 소극재산 총액이 적극재산 총액을 초과해 재산분할이 결국 채무 분담을 정하는 것이 되는 경우에도, 법원이 채무의 성질·채권자와의 관계·물적 담보 존부 등 일체의 사정을 참작해 분담이 적합하다고 인정되면 구체적 분담 방법을 정해 재산분할 청구를 받아들일 수 있고, 다만 이때는 적극재산 분할처럼 일률적 기여도 비율로 분할 귀속시키는 것이 아니라 부양적 요소까지 종합 고려한다고 본 사례 흐름이 있는 영역입니다. 사업 채무 + 채무초과 + 재산분할 결합은 \'채무 분담형 분할 가부\' 다툼이 가능한 트랙입니다. 당사자라면 ① 재산·채무 파악 ② 채무 성질 ③ 채무초과 ④ 분담 방법 ⑤ 부양적 요소 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 성질 ③ 초과 ④ 분담 ⑤ 부양 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사업 채무 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·채무 파악·채무 성질·채무초과·분담 방법·부양적 요소 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·채무 파악</strong> — 부부 각자의 적극재산·소극재산(사업 채무) 파악.</li>\n<li><strong>② 채무 성질</strong> — 채무의 발생 경위·용처·채권자와의 관계·물적 담보 정리.</li>\n<li><strong>③ 채무초과</strong> — 소극재산 총액이 적극재산 총액을 초과하는지 확인.</li>\n<li><strong>④ 분담 방법</strong> — 채무 분담을 정하는 재산분할의 구체적 방법 검토.</li>\n<li><strong>⑤ 부양적 요소</strong> — 이혼 후 생활보장 등 부양적 요소 종합 고려.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 소극재산이 적극재산을 초과해 재산분할이 결국 채무 분담을 정하는 것이 되더라도, 일체의 사정을 참작해 분담이 적합하면 재산분할 청구가 받아들여질 수 있는 영역. 적극재산처럼 일률적 비율로 당연 분할되는 것은 아닌 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·채무 자료 보존 (즉시)</strong> — 부동산·예금·사업 채무·대출·담보 자료 보존.</li>\n<li><strong>2단계 — 채무 성질·용처 정리 (1~2주)</strong> — 채무 발생 경위·용처·채권자 관계·담보 존부 정리.</li>\n<li><strong>3단계 — 채무초과·분담 정리 (2~3주)</strong> — 적극·소극재산 비교, 채무 분담 방법·비율 검토.</li>\n<li><strong>4단계 — 재산분할 청구 (소 제기 시)</strong> — 채무 분담을 포함한 재산분할 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 분담 방법 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업 채무 채무초과 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·채무·분담 갈래입니다.</strong></p>\n<ul>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식)</strong></li>\n<li><strong>사업 채무·대출 내역서 (소극재산 규모)</strong></li>\n<li><strong>채무 발생 경위·용처 입증 자료</strong></li>\n<li><strong>물적 담보·보증 관련 자료</strong></li>\n<li><strong>사업 운영·매출 자료 (채무 성질)</strong></li>\n<li><strong>소득·경제활동 능력 자료 (부양적 요소)</strong></li>\n<li><strong>기여도 입증 자료 (재산·채무 형성)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 빚이 재산보다 많은 채무초과 상태라도 채무 분담을 정하는 방식의 재산분할이 가능할 수 있는 영역이므로, 채무의 발생 경위·용처·담보 존부를 구체적으로 정리하는 것이 핵심. 다만 채무 분담은 적극재산처럼 일률적 비율로 당연히 정해지지 않고 부양적 요소까지 함께 고려되는 점도 염두에 두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무 성질</strong> — 사업 채무가 공동생활 채무인지 일방 개인 채무인지.</li>\n<li><strong>채무초과</strong> — 소극재산이 적극재산을 초과하는지·그 규모.</li>\n<li><strong>분담 가부</strong> — 채무 분담을 정하는 재산분할의 적합성.</li>\n<li><strong>분담 방법</strong> — 분담 비율·방법, 일률적 기여도 비율 적용 여부.</li>\n<li><strong>부양적 요소</strong> — 이혼 후 생활보장 등 부양적 요소 고려.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한변협 법률구조재단</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채무초과 시 채무 분담형 재산분할 가부',
        summary:
          '대법원 2010므4071(대법원, 2013.06.20 선고) 영역에서 법원은 이혼 당사자 각자가 보유한 적극재산에서 소극재산을 공제해 재산상태를 따져본 결과 소극재산 부담이 더 적거나 더 많은 어느 경우에도 적극재산을 분배하거나 소극재산을 분담하도록 하는 재산분할이 모두 가능하다고 보았습니다. 나아가 소극재산 총액이 적극재산 총액을 초과해 재산분할이 결국 채무 분담을 정하는 것이 되는 경우에도, 법원은 채무의 성질·채권자와의 관계·물적 담보 존부 등 일체의 사정을 참작해 분담이 적합하다고 인정되면 구체적 분담 방법을 정해 재산분할 청구를 받아들일 수 있고, 다만 이때는 적극재산을 분할할 때처럼 기여도 등을 중심으로 일률적 비율을 정해 당연히 분할 귀속시키는 것은 아니라고 판시했습니다. 사업 채무 사안에서도 채무 분담형 분할 가부를 검토해볼 수 있습니다.',
        takeaway: '사업 채무 + 채무초과 + 재산분할 결합 시 채무 분담형 분할 가부·분담 방법·부양적 요소 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '빚이 재산보다 많으면 재산분할이 안 되나요?',
        answer:
          '<strong>채무초과 상태라도 채무 분담을 정하는 방식의 재산분할이 가능할 수 있는 영역입니다.</strong> 채무 성질·용처 자료를 정리.',
      },
      {
        question: '배우자 사업 빚을 제가 나눠야 하나요?',
        answer:
          '<strong>채무의 성질·용처·공동생활 관련성 등을 참작해 분담 여부·방법을 정하는 영역입니다.</strong> 채무 발생 경위 자료를 정리.',
      },
      {
        question: '채무 분담도 기여도 비율대로 나누나요?',
        answer:
          '<strong>채무 분담은 적극재산처럼 일률적 기여도 비율로 당연히 정해지지 않는 영역입니다.</strong> 채무 내용·담보 자료를 함께 정리.',
      },
      {
        question: '제 생활 형편도 고려되나요?',
        answer:
          '<strong>이혼 후 생활보장 등 부양적 요소가 함께 고려되는 영역입니다.</strong> 소득·경제활동 능력 자료를 정리.',
      },
      {
        question: '재산분할 청구에 기한이 있나요?',
        answer:
          '<strong>이혼한 날부터 2년이 재산분할청구권 행사 기간인 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '부부 채무 분담', href: '/guide/divorce/divorce-marital-debt-allocation' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 3. divorce-adultery-proof-alimony-track ───
  {
    domain: 'divorce',
    slug: 'divorce-adultery-proof-alimony-track',
    keyword: '외도 증거 위자료 이혼',
    questionKeyword: '배우자의 외도를 알게 되어 증거를 모았는데, 배우자와 상간자 모두에게 위자료를 청구할 수 있는지, 시간이 꽤 지났는데 소멸시효가 지난 건 아닌지 막막합니다.',
    ctaKeyword: '외도 증거 위자료·소멸시효 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '외도 위자료 — 5단계 상간자·소멸시효 점검 | 로앤가이드',
      description:
        '배우자의 외도로 위자료를 청구하려는데 상간자 책임·소멸시효가 헷갈린다면 부정행위·위자료·시효 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"믿었던 배우자의 외도를 알게 되어 무너지는 마음을 다잡고 증거를 하나씩 모아온 상황입니다. 배우자뿐 아니라 상대가 된 상간자에게도 책임을 묻고 싶은데, 두 사람 모두에게 위자료를 청구할 수 있는지, 부정행위를 알게 된 지 시간이 꽤 흘렀는데 이미 소멸시효가 지나버린 건 아닌지 걱정이 큽니다. 어디서부터 어떻게 정리해야 할지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제750조는 고의·과실로 인한 위법행위의 손해배상책임을, 민법 제766조 제1항은 손해 및 가해자를 안 날부터 3년의 단기소멸시효를 정하고, 가사소송법 제2조 제1항 제1호 (다)목 2)는 이혼을 원인으로 하는 위자료 청구를 다류 가사소송사건으로 정하는 영역입니다. 판례는 제3자가 부부 일방과 부정행위를 해 부부공동생활을 침해하면 원칙적으로 불법행위가 성립하고 부부 일방과 제3자의 책임은 부진정연대채무 관계에 있으며, 이혼을 원인으로 하는 위자료청구권의 손해는 최종적 이혼 시점에 확정·평가되어 그 단기소멸시효는 혼인이 해소된 때부터 기산된다고 본 사례 흐름이 있는 영역입니다. 외도 + 위자료 + 소멸시효 결합은 \'상간자 책임·손해 확정 시점\' 다툼이 가능한 트랙입니다. 당사자라면 ① 증거 보존 ② 부정행위 ③ 위자료 대상 ④ 손해 확정 시점 ⑤ 소멸시효 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 증거 ② 부정행위 ③ 대상 ④ 확정 ⑤ 시효 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 외도 증거 위자료 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거 보존·부정행위·위자료 대상·손해 확정 시점·소멸시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 부정행위 정황(메시지·사진·동행 기록 등) 합법적 보존.</li>\n<li><strong>② 부정행위</strong> — 부부공동생활 침해에 이르는 부정행위 성립 여부 정리.</li>\n<li><strong>③ 위자료 대상</strong> — 배우자·상간자(제3자)에 대한 청구, 부진정연대 관계 검토.</li>\n<li><strong>④ 손해 확정 시점</strong> — 이혼을 원인으로 하는 위자료 손해의 최종적 이혼 시점 확정.</li>\n<li><strong>⑤ 소멸시효</strong> — 혼인 해소 시 기산하는 3년 단기소멸시효 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 배우자와 상간자의 책임은 부진정연대채무 관계로 검토되고, 이혼을 원인으로 하는 위자료는 최종적 이혼 시점에 손해가 확정되어 그 단기소멸시효가 혼인 해소 시부터 기산되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부정행위 증거 보존 (즉시)</strong> — 메시지·사진·동행·숙박 기록 등을 합법적 방법으로 보존.</li>\n<li><strong>2단계 — 부정행위·상간자 정리 (1~2주)</strong> — 부정행위 성립·상간자 인적사항·고의·과실 정리.</li>\n<li><strong>3단계 — 위자료 대상·시점 정리 (2~3주)</strong> — 배우자·상간자 청구, 손해 확정 시점·시효 정리.</li>\n<li><strong>4단계 — 위자료 청구 (소 제기 시)</strong> — 이혼·위자료(다류 가사) 또는 별도 손해배상 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 위자료 확정 및 이행·집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">외도 증거 위자료·소멸시효 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 증거·대상·시효 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인 확인)</strong></li>\n<li><strong>부정행위 정황 자료 (메시지·사진·동행 기록)</strong></li>\n<li><strong>숙박·이동·결제 등 정황 입증 자료</strong></li>\n<li><strong>상간자 인적사항·고의/과실 정황 자료</strong></li>\n<li><strong>혼인 파탄·이혼 시점 입증 자료 (시효 기산)</strong></li>\n<li><strong>정신적 피해 입증 자료 (진료·상담 기록)</strong></li>\n<li><strong>소득·재산 자료 (위자료 산정)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배우자와 상간자는 부진정연대채무 관계로 양쪽 모두에게 위자료를 검토할 수 있는 영역이고, 이혼을 원인으로 하는 위자료의 단기소멸시효는 혼인이 해소된 때부터 3년으로 기산되는 점이 핵심. 증거는 불법 수집으로 도리어 문제가 되지 않도록 합법적 방법으로 보존하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부정행위 성립</strong> — 부부공동생활을 침해하는 부정행위에 해당하는지.</li>\n<li><strong>상간자 책임</strong> — 제3자의 고의·과실과 부진정연대채무 관계.</li>\n<li><strong>손해 확정 시점</strong> — 이혼 원인 위자료 손해의 최종적 이혼 시점 확정.</li>\n<li><strong>소멸시효</strong> — 혼인 해소 시 기산하는 3년 단기소멸시효.</li>\n<li><strong>청구 성격</strong> — 이혼 원인 위자료(다류 가사)인지 별개 민사 손해배상인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한변협 법률구조재단</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상간자 부진정연대책임과 위자료 소멸시효 기산점',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 영역에서 법원은 제3자가 부부 일방과 부정행위를 함으로써 혼인의 본질인 부부공동생활을 침해하거나 그 유지를 방해해 배우자에게 정신적 고통을 가하는 행위도 원칙적으로 불법행위를 구성하고, 부부 일방과 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계에 있다고 보았습니다. 또한 이혼을 원인으로 하는 위자료청구권은 개별적 유책행위 발생부터 최종적 이혼에 이르는 일련의 경과가 전체로서 불법행위로 파악되어 최종적 이혼 시점에 확정·평가되며, 피해자인 상대방 배우자는 혼인이 해소된 때에 손해 및 가해자를 알았다고 봄이 상당하므로 그때부터 3년이 지나야 민법 제766조 제1항의 단기소멸시효가 완성된다고 판시했습니다. 외도 위자료 사안에서도 상간자 책임·시효 기산점을 검토해볼 수 있습니다.',
        takeaway: '외도 + 위자료 + 소멸시효 결합 시 부진정연대책임·손해 확정 시점·혼인 해소 시 시효 기산 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자와 상간자 모두에게 위자료를 청구할 수 있나요?',
        answer:
          '<strong>두 사람의 책임은 부진정연대채무 관계로 양쪽 모두에게 청구를 검토할 수 있는 영역입니다.</strong> 부정행위 정황·상간자 인적사항을 정리.',
      },
      {
        question: '외도를 안 지 오래됐는데 시효가 지났나요?',
        answer:
          '<strong>이혼을 원인으로 하는 위자료는 혼인 해소 시부터 3년이 기산되는 것으로 검토되는 영역입니다.</strong> 이혼·혼인 해소 시점 자료를 정리.',
      },
      {
        question: '위자료 손해는 언제 확정되나요?',
        answer:
          '<strong>이혼을 원인으로 하는 위자료 손해는 최종적 이혼 시점에 확정·평가되는 영역입니다.</strong> 파탄·이혼 경과 자료를 정리.',
      },
      {
        question: '위자료는 얼마나 받을 수 있나요?',
        answer:
          '<strong>부정행위 정도·혼인 파탄 경위 등에 따라 위자료가 수천만원 수준으로 검토되는 사례가 많은 영역입니다.</strong> 피해·정황 자료를 정리.',
      },
      {
        question: '증거는 어떻게 모아야 하나요?',
        answer:
          '<strong>불법 수집으로 문제되지 않도록 합법적 방법으로 정황을 보존하는 것이 중요한 영역입니다.</strong> 메시지·동행·결제 기록을 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '상간자 위자료 청구', href: '/guide/divorce/divorce-adultery-third-party-track' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 4. divorce-custody-relocation-dispute-track ───
  {
    domain: 'divorce',
    slug: 'divorce-custody-relocation-dispute-track',
    keyword: '양육권 이사 분쟁',
    questionKeyword: '이혼하면서 아이를 누가 키울지 다투고 있어요. 둘 다 단독 양육을 원하는데 법원이 공동양육으로 정할 수도 있는지, 어떤 기준으로 양육자를 정하는지 막막합니다.',
    ctaKeyword: '양육권 단독·공동양육 지정 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '양육자 지정 — 5단계 자녀 복리·공동양육 점검 | 로앤가이드',
      description:
        '이혼하며 아이를 누가 키울지 다툰다면 양육자 지정 기준·공동양육 가부·면접교섭 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 진행하면서 아이를 누가 키울지가 가장 큰 다툼이 된 부모입니다. 두 사람 모두 자신이 단독으로 아이를 키우겠다고 하는데, 양육 환경이나 생활 방식이 서로 달라 합의가 쉽지 않습니다. 법원이 한쪽으로 정해줄지, 아니면 두 사람을 공동양육자로 정해 아이가 양쪽 집을 오가게 될 수도 있는지, 도대체 무엇을 기준으로 양육자를 정하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제837조·제837조의2·제909조 제4항은 이혼 시 자녀의 양육에 관한 사항과 친권자·양육자 지정, 면접교섭을 정하면서 자녀의 복리를 우선하도록 하는 영역입니다. 판례는 미성년 자녀의 양육자를 정할 때 자녀의 성별·연령, 부모의 애정과 양육의사, 경제적 능력, 양육방식의 합리성·적합성, 부모와 자녀의 친밀도, 자녀의 의사 등 모든 요소를 종합해 자녀의 성장과 복지에 가장 도움이 되는 방향으로 판단해야 하고, 재판상 이혼에서 부모 모두를 공동양육자로 지정하는 것은 공동양육을 받아들일 준비·가치관의 차이·거주 근접성·자녀의 대응능력 등 여건이 갖추어진 경우에만 가능하다고 본 사례 흐름이 있는 영역입니다. 양육자 지정 + 단독·공동양육 + 이사 결합은 \'자녀 복리·공동양육 여건\' 다툼이 가능한 트랙입니다. 당사자라면 ① 양육 환경 ② 자녀 복리 ③ 단독/공동 ④ 면접교섭 ⑤ 양육비 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 환경 ② 복리 ③ 지정 ④ 교섭 ⑤ 양육비 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 양육권 이사 분쟁 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육 환경·자녀 복리·단독/공동·면접교섭·양육비 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양육 환경</strong> — 거주·소득·양육방식·친밀도 등 양육 환경 정리.</li>\n<li><strong>② 자녀 복리</strong> — 자녀의 성별·연령·의사·성장·복지 기준 정리.</li>\n<li><strong>③ 단독/공동</strong> — 단독 양육자 지정인지 공동양육 여건이 갖추어졌는지.</li>\n<li><strong>④ 면접교섭</strong> — 비양육친의 면접교섭 방법·범위 검토.</li>\n<li><strong>⑤ 양육비</strong> — 양육비 산정·분담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 양육자 지정은 자녀의 성장과 복지에 가장 도움이 되는 방향으로 종합 판단되고, 공동양육은 가치관·거주 근접성·자녀 대응능력 등 여건이 갖추어진 경우에만 가능한 것으로 검토되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육 환경 자료 보존 (즉시)</strong> — 거주·소득·양육 참여·친밀도 자료 보존.</li>\n<li><strong>2단계 — 자녀 복리 기준 정리 (1~2주)</strong> — 자녀의 성별·연령·의사·성장 환경 정리.</li>\n<li><strong>3단계 — 단독/공동·면접교섭 정리 (2~3주)</strong> — 단독·공동양육 여건, 면접교섭 방법 정리.</li>\n<li><strong>4단계 — 양육자 지정·양육비 청구 (소 제기 시)</strong> — 친권자·양육자 지정, 양육비 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 양육자 지정 확정 후 면접교섭·양육비 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육권 단독·공동양육 지정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 양육 환경·복리·양육비 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·주민등록등본 (양육·거주 관계)</strong></li>\n<li><strong>거주·주거 환경 자료 (양육 환경)</strong></li>\n<li><strong>소득·재산 자료 (경제적 양육 능력)</strong></li>\n<li><strong>양육 참여·친밀도 입증 자료 (실제 양육)</strong></li>\n<li><strong>자녀의 의사·생활 환경 자료 (자녀 복리)</strong></li>\n<li><strong>면접교섭 협의·실시 기록</strong></li>\n<li><strong>양육비 산정 자료 (소득·지출)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육자 지정은 자녀의 성장과 복지에 가장 도움이 되는 방향으로 종합 판단되는 영역이므로, 양육 참여·친밀도·생활 환경을 구체적으로 정리하는 것이 핵심. 공동양육은 가치관·거주 근접성·자녀의 대응능력 등 여건이 갖추어진 경우에만 가능한 것으로 검토되는 점도 함께 고려해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자녀 복리</strong> — 자녀의 성장·복지에 가장 도움이 되는 양육자 판단.</li>\n<li><strong>양육 환경</strong> — 거주·소득·양육방식·친밀도의 비교.</li>\n<li><strong>공동양육 여건</strong> — 가치관·거주 근접성·자녀 대응능력 충족 여부.</li>\n<li><strong>면접교섭</strong> — 비양육친의 면접교섭 방법·범위.</li>\n<li><strong>양육비</strong> — 양육비 산정·분담 기준.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (양육자 지정·양육비 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육자 지정 기준과 공동양육 가부',
        summary:
          '대법원 2018므15534(대법원, 2020.05.14 선고) 영역에서 법원은 부모가 이혼하는 경우 미성년 자녀의 양육자를 정할 때 자녀의 성별·연령, 부모의 애정과 양육의사, 양육에 필요한 경제적 능력, 양육방식의 합리성·적합성·조화 가능성, 부모와 자녀의 친밀도, 자녀의 의사 등 모든 요소를 종합해 자녀의 성장과 복지에 가장 도움이 되고 적합한 방향으로 판단해야 한다고 보았습니다. 또한 재판상 이혼에서 부모 모두를 공동양육자로 지정하는 것은 공동양육을 받아들일 준비·가치관의 차이·거주 근접성·자녀의 이성적·정서적 대응능력 등 여건이 갖추어진 경우에만 가능하다고 보아, 부모가 각자 단독 지정을 청구하고 협력을 기대하기 어려운데도 공동양육자로 지정한 원심에 양육자 지정에 관한 법리오해의 잘못이 있다고 판시했습니다. 양육권 다툼 사안에서도 자녀 복리·공동양육 여건을 검토해볼 수 있습니다.',
        takeaway: '양육자 지정 + 단독·공동양육 + 이사 결합 시 자녀 복리 기준·공동양육 여건·면접교섭 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '양육자는 무엇을 기준으로 정하나요?',
        answer:
          '<strong>자녀의 성장과 복지에 가장 도움이 되는 방향으로 여러 요소를 종합해 판단하는 영역입니다.</strong> 양육 참여·친밀도 자료를 정리.',
      },
      {
        question: '법원이 공동양육으로 정할 수도 있나요?',
        answer:
          '<strong>공동양육은 가치관·거주 근접성·자녀 대응능력 등 여건이 갖추어진 경우에만 가능한 것으로 검토되는 영역입니다.</strong> 협력 가능성 자료를 정리.',
      },
      {
        question: '아이의 의사도 반영되나요?',
        answer:
          '<strong>자녀의 의사도 양육자 판단의 한 요소로 종합 고려되는 영역입니다.</strong> 자녀의 생활·의사 관련 자료를 정리.',
      },
      {
        question: '이사로 멀리 떨어지면 면접교섭은 어떻게 되나요?',
        answer:
          '<strong>거주 거리·자녀 복리를 고려해 면접교섭 방법·범위를 정하는 영역입니다.</strong> 면접교섭 실시·협의 기록을 정리.',
      },
      {
        question: '양육비는 어떻게 정해지나요?',
        answer:
          '<strong>양측 소득·자녀 수·연령 등을 종합해 양육비를 산정하는 영역입니다.</strong> 소득·지출 자료를 정리.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '면접교섭 다툼', href: '/guide/divorce/divorce-visitation-dispute-track' },
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation-standard' },
      { label: '친권자 지정 기준', href: '/guide/divorce/divorce-parental-authority-track' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 5. defamation-apartment-resident-app-track ───
  {
    domain: 'defamation',
    slug: 'defamation-apartment-resident-app-track',
    keyword: '아파트 입주민 앱 비방',
    questionKeyword: '아파트 입주민 단체 앱이나 카페에 저를 겨냥한 비방 글이 올라왔어요. 이미 단지에 떠도는 소문을 옮긴 거라는데 그래도 명예훼손이 되는지, 어떻게 대응해야 하는지 막막합니다.',
    ctaKeyword: '아파트 입주민 앱 비방 명예훼손 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '입주민 앱 비방 — 5단계 사실 적시·공연성 점검 | 로앤가이드',
      description:
        '입주민 앱·카페에 비방 글로 피해를 입었다면 사실 적시·공연성·비방 목적 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트 입주민들이 함께 쓰는 단체 앱이나 인터넷 카페에 저를 겨냥한 비방 글이 올라와 단지 안에서 얼굴을 들기 어려운 상황입니다. 사실과 다른 이야기가 마치 진실인 것처럼 적혀 있고, 어떤 글은 이미 떠돌던 소문을 그대로 옮긴 것 같기도 합니다. 상대방은 \'다들 아는 이야기를 적었을 뿐\'이라고 하는데, 이미 알려진 소문을 옮긴 경우에도 명예훼손이 되는지, 어떻게 대응해야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를, 정보통신망법 제70조는 비방할 목적으로 정보통신망을 통해 사실·거짓을 드러내 명예를 훼손하는 행위를 규율하는 영역입니다. 판례는 정보통신망법상 명예훼손에서 \'사실의 적시\'는 사람의 사회적 평가를 저하시킬 만한 구체적 사실을 드러내는 것이면 충분하고, 적시한 사실이 이미 사회 일부에서 다루어진 소문이라도 이를 적시함으로써 공연성이 인정될 수 있으며, \'비방할 목적\'은 표현 내용·상대방 범위·동기·경위 등 여러 사정을 고려해 판단한다고 본 사례 흐름이 있는 영역입니다. 입주민 앱 비방 + 소문 옮김 + 명예훼손 결합은 \'사실 적시·공연성·비방 목적\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시물 보존 ② 사실 적시 ③ 공연성 ④ 비방 목적 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 적시 ③ 공연성 ④ 목적 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 아파트 입주민 앱 비방 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물 보존·사실 적시·공연성·비방 목적·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물 보존</strong> — 게시 글·작성자·일시·열람 범위 등 원본 보존.</li>\n<li><strong>② 사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시 여부 정리.</li>\n<li><strong>③ 공연성</strong> — 이미 떠도는 소문이라도 적시로 공연성이 인정되는지.</li>\n<li><strong>④ 비방 목적</strong> — 표현 내용·상대방 범위·동기로 비방 목적 검토.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 이미 사회 일부에서 다루어진 소문이라도 이를 적시하면 정보통신망법상 명예훼손의 공연성이 인정될 수 있는 영역. 비방할 목적은 표현 내용·상대방 범위·동기 등을 종합해 검토하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 캡처·증거 보존 (즉시)</strong> — 게시 글·URL·작성자 계정·일시·열람 범위 보존.</li>\n<li><strong>2단계 — 사실 적시·공연성 정리 (1주)</strong> — 구체적 사실 적시 여부, 소문 옮김의 공연성 정리.</li>\n<li><strong>3단계 — 비방 목적·피해 정리 (2주)</strong> — 표현 동기·상대방 범위로 비방 목적, 피해 입증 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼·관리주체 삭제 요청, 형사 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">아파트 입주민 앱 비방 명예훼손 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실 적시·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>비방 게시물 원본·URL·캡처 (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>입주민 앱·카페 열람 범위 자료 (공연성)</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>비방 목적·동기 정황 자료</strong></li>\n<li><strong>피해 입증 자료 (정신적 고통·진료·상담 기록 등)</strong></li>\n<li><strong>삭제 요청·신고·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대방이 \'이미 다 아는 소문을 옮겼을 뿐\'이라고 해도, 그 소문을 적시함으로써 명예훼손의 공연성이 인정될 수 있는 영역이므로 게시 위치·열람 범위를 함께 정리하는 것이 핵심. 입주민 앱·카페 글은 삭제·수정 전에 작성자 계정·URL과 함께 원본 형태로 캡처해 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 적시</strong> — 사회적 평가를 저하시킬 구체적 사실 적시인지.</li>\n<li><strong>공연성</strong> — 이미 떠도는 소문 적시라도 공연성이 인정되는지.</li>\n<li><strong>비방 목적</strong> — 표현 내용·상대방 범위·동기로 본 비방 목적.</li>\n<li><strong>작성자 특정</strong> — 익명·닉네임 작성자의 특정 가능성.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소문 적시의 공연성과 사실 적시 정도',
        summary:
          '대법원 2008도2422(대법원, 2008.07.10 선고) 영역에서 법원은 정보통신망법상 명예훼손죄가 성립하기 위한 \'사실의 적시\'는 사람의 사회적 평가를 저하시킬 만한 구체적 사실을 드러내는 것이면 충분하고, 적시한 사실이 이미 사회 일부에서 다루어진 소문이더라도 이를 적시함으로써 공연성을 인정할 수 있다고 보았습니다. 또한 \'사람을 비방할 목적\'은 표현 내용과 상대방의 범위, 표현의 동기·경위 등 여러 사정을 고려해 판단해야 한다고 보아, 포털 기사란 댓글에서 특정인에 관한 취지의 댓글을 추가 게시한 행위에 대해 명예훼손죄가 성립한다고 판시했습니다. 입주민 앱 비방 사안에서도 사실 적시·공연성·비방 목적을 검토해볼 수 있습니다.',
        takeaway: '입주민 앱 비방 + 소문 옮김 + 명예훼손 결합 시 사실 적시·소문 적시 공연성·비방 목적 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이미 떠도는 소문을 옮긴 것도 명예훼손이 되나요?',
        answer:
          '<strong>이미 일부에서 다루어진 소문이라도 이를 적시하면 공연성이 인정될 수 있는 영역입니다.</strong> 게시 위치·열람 범위 자료를 정리.',
      },
      {
        question: '입주민 앱·카페 글도 공연성이 있나요?',
        answer:
          '<strong>다수 입주민이 열람 가능한 게시 환경의 전파 정도가 공연성 판단에서 고려되는 영역입니다.</strong> 열람 범위·게시 위치를 정리.',
      },
      {
        question: '비방 목적은 어떻게 판단하나요?',
        answer:
          '<strong>표현 내용·상대방 범위·표현 동기·경위 등을 종합해 비방 목적을 검토하는 영역입니다.</strong> 작성 동기·맥락 자료를 정리.',
      },
      {
        question: '익명·닉네임 작성자도 찾을 수 있나요?',
        answer:
          '<strong>수사·플랫폼 협조 등을 통해 작성자 특정을 검토할 수 있는 영역입니다.</strong> 계정·게시 정보를 먼저 확보.',
      },
      {
        question: '글을 내리게 하고 배상도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '비방 목적·공익성 판단', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 6. defamation-office-gossip-coworker-track ───
  {
    domain: 'defamation',
    slug: 'defamation-office-gossip-coworker-track',
    keyword: '직장 동료 뒷담화 명예훼손',
    questionKeyword: '직장에서 동료가 저에 관한 안 좋은 이야기를 다른 사람에게 했어요. 특정 몇 사람에게만 한 말도 명예훼손이 되는지, 전파 가능성만으로 처벌되는지 어떻게 판단하는지 막막합니다.',
    ctaKeyword: '직장 동료 뒷담화 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '직장 뒷담화 — 5단계 공연성·전파가능성 점검 | 로앤가이드',
      description:
        '직장 동료가 저에 관한 뒷담화를 했다면 공연성·전파가능성·미필적 고의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 직장 동료가 저에 관한 좋지 않은 이야기를 다른 사람에게 옮긴 사실을 알게 되어 출근길마다 마음이 무거운 상황입니다. 그 말이 특정 몇 사람에게만 한 것 같기도 하고, 어떤 통로로 제 귀에까지 들어온 걸 보면 더 퍼졌을 것 같기도 합니다. 특정 소수에게만 한 말도 명예훼손이 되는지, \'전파 가능성\'만으로 처벌 요건이 채워지는지, 그걸 어떻게 따지는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를 규율하고, 그 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는 영역입니다. 판례는 명예훼손에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정될 유력한 사정이 될 수 있으므로 전파될 가능성은 검사의 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성을 인정할 때는 전파가능성에 대한 인식은 물론 그 위험을 용인하는 내심의 의사(미필적 고의)가 있어야 하며, 발언자와 상대방의 관계·대화 경위·적시 내용·방법·장소 등 객관적 사정을 종합해 공연성을 판단한다고 본 사례 흐름이 있는 영역입니다. 직장 뒷담화 + 특정 소수 발언 + 전파가능성 결합은 \'공연성·미필적 고의\' 다툼이 가능한 트랙입니다. 당사자라면 ① 발언 정황 ② 상대방 범위 ③ 공연성 ④ 미필적 고의 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 정황 ② 범위 ③ 공연성 ④ 고의 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 동료 뒷담화 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발언 정황·상대방 범위·공연성·미필적 고의·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발언 정황</strong> — 발언 내용·시점·장소·대화 경위 정리.</li>\n<li><strong>② 상대방 범위</strong> — 발언을 들은 사람의 범위·관계 정리.</li>\n<li><strong>③ 공연성</strong> — 특정 소수 발언의 전파가능성·공연성 검토.</li>\n<li><strong>④ 미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사 검토.</li>\n<li><strong>⑤ 대응</strong> — 증거 정리·형사 고소·민사 손해배상 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 특정 소수에게 한 발언은 공연성이 부정될 유력한 사정이 될 수 있어 전파가능성에 대한 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성을 인정하려면 위험을 용인하는 미필적 고의가 있어야 하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 발언 정황 자료 보존 (즉시)</strong> — 발언 내용·일시·장소·전달 경로·목격자 자료 보존.</li>\n<li><strong>2단계 — 상대방 범위·관계 정리 (1주)</strong> — 발언을 들은 사람의 범위·관계, 전달 경위 정리.</li>\n<li><strong>3단계 — 공연성·고의 정리 (2주)</strong> — 전파가능성·미필적 고의 정황, 피해 입증 정리.</li>\n<li><strong>4단계 — 고소·진정 (분쟁 시)</strong> — 명예훼손 고소·진정 검토, 증거 제출.</li>\n<li><strong>5단계 — 민사·합의 (병행)</strong> — 손해배상 청구·합의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 동료 뒷담화 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 발언 정황·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>발언 내용·일시·장소 기록 (적시 내용)</strong></li>\n<li><strong>발언을 들은 사람·전달 경로 자료 (상대방 범위)</strong></li>\n<li><strong>목격자·전달자 진술 자료 (전파 정황)</strong></li>\n<li><strong>발언 경위·관계 자료 (공연성·고의)</strong></li>\n<li><strong>녹취·메신저·이메일 등 객관 자료</strong></li>\n<li><strong>피해 입증 자료 (정신적 고통·진료·상담 기록 등)</strong></li>\n<li><strong>고소장·진정서 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 특정 소수에게만 한 발언도 그 상대방이 불특정·다수에게 전파할 가능성이 있으면 공연성이 인정될 수 있는 영역이지만, 전파가능성과 위험을 용인하는 미필적 고의에 대한 엄격한 증명이 필요한 점이 핵심. 발언을 들은 사람의 범위와 전달 경위를 구체적으로 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 특정 소수 발언의 전파가능성과 공연성 인정 여부.</li>\n<li><strong>미필적 고의</strong> — 전파가능성 인식과 위험 용인 의사의 존부.</li>\n<li><strong>발언 경위</strong> — 업무·대응 과정의 발언인지 등 객관적 사정.</li>\n<li><strong>사실/의견</strong> — 사실 적시인지 단순 의견·평가인지.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특정 소수 발언의 공연성과 미필적 고의',
        summary:
          '대법원 2020도8336(대법원, 2022.07.28 선고) 영역에서 법원은 명예훼손이나 모욕에 해당하는 표현을 특정 소수에게 한 경우 공연성이 부정될 유력한 사정이 될 수 있으므로 전파될 가능성에 관해서는 검사의 엄격한 증명이 필요하고, 전파가능성을 이유로 공연성을 인정하는 경우에는 적어도 미필적 고의가 필요해 전파가능성에 대한 인식은 물론 그 위험을 용인하는 내심의 의사가 있어야 한다고 보았습니다. 또한 사실 확인·규명 과정이나 가해에 대응하는 과정에서 발언하게 된 경우 등은 전파가능성에 대한 인식·용인 의사를 인정하는 데 신중해야 하고, 공연성의 존부는 발언자와 상대방의 관계·대화 경위·적시 내용·방법·장소 등 객관적 사정을 심리해 종합 판단해야 한다고 판시했습니다. 직장 뒷담화 사안에서도 공연성·미필적 고의를 검토해볼 수 있습니다.',
        takeaway: '직장 뒷담화 + 특정 소수 발언 + 전파가능성 결합 시 공연성·전파가능성 엄격 증명·미필적 고의 검토 영역 — 변호사 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '몇 사람에게만 한 말도 명예훼손이 되나요?',
        answer:
          '<strong>특정 소수 발언이라도 전파가능성이 있으면 공연성이 인정될 수 있는 영역입니다.</strong> 들은 사람 범위·전달 경로를 정리.',
      },
      {
        question: '전파 가능성은 어떻게 증명하나요?',
        answer:
          '<strong>특정 소수 발언의 전파가능성은 검사의 엄격한 증명이 필요한 것으로 검토되는 영역입니다.</strong> 전달 정황·목격자 자료를 정리.',
      },
      {
        question: '동료가 \'그럴 의도가 없었다\'고 하면 어떻게 되나요?',
        answer:
          '<strong>전파가능성 인식과 위험을 용인하는 미필적 고의가 있어야 공연성이 인정되는 영역입니다.</strong> 발언 경위·맥락 자료를 정리.',
      },
      {
        question: '업무 과정에서 한 말도 처벌되나요?',
        answer:
          '<strong>업무·대응 과정의 발언은 전파가능성 인식·용인 의사를 신중히 판단하는 영역입니다.</strong> 발언 경위·상황 자료를 정리.',
      },
      {
        question: '녹취가 없어도 대응할 수 있나요?',
        answer:
          '<strong>목격자 진술·전달 경로 등 정황 자료로도 다툴 수 있는 영역입니다.</strong> 들은 사람·전달 경위를 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '직장 내 명예훼손 대응', href: '/guide/defamation/defamation-workplace-track' },
      { label: '모욕죄 성립 기준', href: '/guide/defamation/defamation-insult-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
      { label: '명예훼손 합의·처분', href: '/guide/defamation/defamation-settlement-track' },
    ],
  },

  // ─── 7. defamation-store-review-bombing-track ───
  {
    domain: 'defamation',
    slug: 'defamation-store-review-bombing-track',
    keyword: '별점 테러 허위후기 업무방해',
    questionKeyword: '가게를 운영하는데 누군가 별점 테러와 허위 후기를 도배해 손님이 끊겼어요. 이게 명예훼손인지 업무방해인지, 단순 평가·의견이면 처벌이 안 되는 건지 막막합니다.',
    ctaKeyword: '별점 테러 허위후기 업무방해 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '별점 테러 — 5단계 사실 적시·업무방해 점검 | 로앤가이드',
      description:
        '가게가 별점 테러·허위 후기로 피해를 입었다면 사실 적시·의견 구분·업무방해 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"정성껏 운영해 온 가게에 누군가 별점 테러와 사실과 다른 후기를 도배하듯 올려 단골 손님까지 발길을 끊은 상황입니다. 매출이 눈에 띄게 줄어 하루하루 속이 타는데, 상대방은 \'내 솔직한 평가일 뿐\'이라며 물러서지 않습니다. 이런 별점·후기가 명예훼손인지 업무방해인지, 단순한 평가·의견에 그치면 처벌이 안 되는 건지, 무엇으로 대응할 수 있는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실·허위사실을 적시해 명예를 훼손하는 행위를, 형법 제314조는 허위사실 유포·위계·위력으로 사람의 업무를 방해하는 행위를 규율하는 영역입니다. 판례는 명예훼손죄의 \'사실의 적시\'를 가치판단·평가인 \'의견표현\'에 대치되는 개념으로 보아 시간·공간적으로 구체적인 과거·현재 사실관계에 관한 보고·진술로서 증거에 의한 증명이 가능한 것을 의미한다고 보고, 어떤 표현이 사실인지 의견인지는 언어의 통상 의미·용법, 증명가능성, 문맥, 사회적 상황 등 전체 정황을 고려해 판단하며, 업무방해죄는 그 고의가 인정되어야 성립한다고 본 사례 흐름이 있는 영역입니다. 별점 테러 + 허위 후기 + 업무방해 결합은 \'사실 적시·의견 구분·업무방해 고의\' 다툼이 가능한 트랙입니다. 당사자라면 ① 후기 보존 ② 사실/의견 ③ 허위성 ④ 업무방해 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 보존 ② 구분 ③ 허위 ④ 업무방해 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 별점 테러 허위후기 업무방해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기 보존·사실/의견·허위성·업무방해·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 후기 보존</strong> — 별점·후기·작성자·일시·게시 위치 원본 보존.</li>\n<li><strong>② 사실/의견</strong> — 증명 가능한 사실 적시인지, 단순 평가·의견인지 구분.</li>\n<li><strong>③ 허위성</strong> — 적시 내용이 객관적 사실과 다른지 거래 자료로 정리.</li>\n<li><strong>④ 업무방해</strong> — 허위사실 유포·위계로 업무 방해, 고의 정황 검토.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 명예훼손의 \'사실 적시\'는 증명이 가능한 구체적 사실관계 진술이고, 사실인지 의견인지는 통상 의미·증명가능성·문맥·사회적 상황 등 전체 정황으로 구분되며, 업무방해죄는 고의가 인정되어야 성립하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기·매출 자료 보존 (즉시)</strong> — 별점·후기·URL·작성자·일시, 매출 변화 자료 보존.</li>\n<li><strong>2단계 — 사실/의견·허위성 정리 (1주)</strong> — 증명 가능한 사실 적시·의견 구분, 거래 자료로 허위성 정리.</li>\n<li><strong>3단계 — 업무방해·고의 정리 (2주)</strong> — 허위사실 유포·위계, 업무방해 고의 정황 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청, 명예훼손·업무방해 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">별점 테러 허위후기 업무방해 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실/의견·허위성·업무방해 갈래입니다.</strong></p>\n<ul>\n<li><strong>별점·후기 원본·URL·캡처 (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>주문·결제·예약 등 거래 내역 (허위성 입증)</strong></li>\n<li><strong>사실 적시·의견 구분 메모 (표현 분석)</strong></li>\n<li><strong>매출·예약 변화 자료 (업무방해 피해)</strong></li>\n<li><strong>반복·도배 정황 자료 (위계·고의)</strong></li>\n<li><strong>삭제 요청·신고·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 별점·후기가 증명 가능한 사실을 다르게 적은 것인지, 단순한 평가·의견인지에 따라 명예훼손·업무방해 대응 방향이 달라질 수 있는 영역이므로 거래 내역으로 허위성을 뒷받침하는 것이 핵심. 반복·도배 정황과 매출 변화 자료를 함께 정리해두면 업무방해 고의·피해 검토에 활용될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실/의견</strong> — 증명 가능한 사실 적시인지, 단순 평가·의견인지.</li>\n<li><strong>허위성</strong> — 후기 내용이 객관적 거래 사실과 다른지.</li>\n<li><strong>업무방해 고의</strong> — 허위사실 유포·위계와 업무방해 고의의 존부.</li>\n<li><strong>작성자 특정</strong> — 익명·다계정 작성자의 특정 가능성.</li>\n<li><strong>피해 입증</strong> — 매출·예약 감소 등 업무·재산 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시와 의견 표현의 구분',
        summary:
          '대법원 2010도17237(대법원, 2011.09.02 선고) 영역에서 법원은 명예훼손죄에서 \'사실의 적시\'란 가치판단·평가를 내용으로 하는 \'의견표현\'에 대치되는 개념으로서 시간·공간적으로 구체적인 과거 또는 현재의 사실관계에 관한 보고 내지 진술을 의미하며, 표현 내용이 증거에 의해 증명이 가능한 것을 말한다고 보았습니다. 또한 보고·진술이 사실인지 의견인지를 구별할 때에는 언어의 통상적 의미와 용법, 증명가능성, 문제된 말이 사용된 문맥, 표현이 행해진 사회적 상황 등 전체적 정황을 고려해 판단해야 한다고 판시했습니다. 별점 테러·허위 후기 사안에서도 사실 적시·의견 구분과 업무방해 고의를 검토해볼 수 있습니다.',
        takeaway: '별점 테러 + 허위 후기 + 업무방해 결합 시 사실 적시·의견 구분·업무방해 고의·피해 입증 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '솔직한 평가라는데 그래도 처벌되나요?',
        answer:
          '<strong>증명 가능한 사실을 다르게 적었는지, 단순 평가·의견인지에 따라 달라지는 영역입니다.</strong> 거래 내역으로 사실 여부를 정리.',
      },
      {
        question: '별점 테러가 명예훼손인가요 업무방해인가요?',
        answer:
          '<strong>적시 내용·방법에 따라 명예훼손·업무방해를 함께 검토할 수 있는 영역입니다.</strong> 후기 내용·반복 정황을 구분해 정리.',
      },
      {
        question: '허위성은 어떻게 입증하나요?',
        answer:
          '<strong>주문·결제·예약 등 거래 내역으로 적시 내용의 허위 여부를 다투는 영역입니다.</strong> 거래·운영 자료를 확보.',
      },
      {
        question: '매출이 줄었으면 업무방해가 되나요?',
        answer:
          '<strong>허위사실 유포·위계와 업무방해 고의가 인정되는지가 함께 검토되는 영역입니다.</strong> 매출·예약 변화 자료를 정리.',
      },
      {
        question: '후기를 내리게 하고 배상도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '후기·리뷰 명예훼손 대응', href: '/guide/defamation/defamation-review-response-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '사실 적시·의견 구분', href: '/guide/defamation/defamation-fact-opinion-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 8. defamation-anonymous-tip-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-tip-falsely-accused-defense',
    keyword: '익명 제보 명예훼손 무고',
    questionKeyword: '부정·비리 의혹을 익명으로 제보하고 비판했는데, 상대가 저를 명예훼손·모욕으로 고소했어요. 공공의 이익을 위한 진실한 제보면 위법성이 없어진다는데, 사익이 조금 섞여도 되는지 막막합니다.',
    ctaKeyword: '익명 제보 명예훼손 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '익명 제보 명예훼손 방어 — 5단계 공익·위법성조각 점검 | 로앤가이드',
      description:
        '익명으로 의혹을 제보했다가 명예훼손 혐의를 받고 있다면 진실성·공익성·부수적 사익 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부정·비리 의혹을 알게 되어 바로잡고 여러 사람의 이익을 지키려는 마음에 익명으로 제보하고 비판한 사람입니다. 그런데 의혹을 받은 상대방이 저를 명예훼손·모욕으로 고소했고, 사실과 다르게 신고되었다고 느껴 당황스럽습니다. 제 글은 근거가 있었고 공익을 위한 것이었는데, 제보 동기에 개인적 감정이 조금이라도 섞여 있으면 위법성이 없어진다는 법리가 적용되지 않는 건지, 표현이 다소 거칠었던 부분이 모욕이 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 명예를 훼손한 행위를, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하며, 형법 제311조는 공연히 사람을 모욕한 모욕죄를 규율하는 영역입니다. 판례는 적시 사실이 \'공공의 이익\'에 관한 것이면 행위자의 주요 동기·목적이 공공의 이익이라면 부수적으로 다른 사익적 목적·동기가 내포되어 있더라도 형법 제310조가 적용될 수 있고, 모욕죄에서 상대를 불쾌하게 할 수 있는 무례하거나 부정적·비판적 의견을 나타내면서 경미한 수준의 추상적 표현·욕설을 한 정도는 원칙적으로 모욕에 해당하지 않는다고 본 사례 흐름이 있는 영역입니다. 익명 제보 + 사실 적시·비판 + 명예훼손·모욕 고소 결합은 \'공익성·부수적 사익·표현 정도\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 표현 정도 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 표현 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 익명 제보 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·표현 정도·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 제보·비판한 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 내용 중요 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>③ 공익 목적</strong> — 주요 동기·목적이 공공의 이익인지, 사익이 부수적인지.</li>\n<li><strong>④ 표현 정도</strong> — 모욕·경멸적 인신공격인지, 경미한 비판·표현인지.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각 주장·진술 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 주요 동기·목적이 공공의 이익이면 부수적 사익이 섞여 있어도 형법 제310조가 적용될 수 있고, 경미한 수준의 비판적 표현·욕설은 원칙적으로 모욕에 해당하지 않는 것으로 검토되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 제보·근거 자료 보존 (즉시)</strong> — 제보 글·근거 자료·배포 경위·상대방 범위 자료 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 적시 내용과 근거 자료를 대조해 중요 부분의 진실성 정리.</li>\n<li><strong>3단계 — 공익성·표현 정리 (2주)</strong> — 공익 목적·부수적 사익 구분, 표현의 정도 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제310조·모욕 불성립 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">익명 제보 명예훼손 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·표현 정도 갈래입니다.</strong></p>\n<ul>\n<li><strong>제보·비판 글 원본·게시 일시 (적시 내용)</strong></li>\n<li><strong>의혹 근거 자료 (사실 합치 입증)</strong></li>\n<li><strong>공익 목적·시정 의도 정황 자료</strong></li>\n<li><strong>배포·전달 상대방 범위 자료 (제한성)</strong></li>\n<li><strong>표현 내용·맥락 자료 (모욕·인신공격 여부)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 제보 내용의 중요 부분이 객관적 사실과 합치되고, 주요 동기·목적이 공공의 이익이었음을 보여주는 근거 자료를 정리하는 것이 핵심. 개인적 감정 등 사익이 부수적으로 섞여 있더라도 공익이 주된 목적이면 위법성조각이 검토될 수 있고, 경미한 표현은 모욕에 해당하지 않는 것으로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 적시 내용의 중요 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>공익 목적</strong> — 주요 동기·목적이 공공의 이익인지, 사익이 부수적인지.</li>\n<li><strong>부수적 사익</strong> — 사익적 목적·동기가 부수적이어도 제310조 적용 여부.</li>\n<li><strong>모욕 성부</strong> — 경미한 비판·욕설이 모욕에 해당하는지.</li>\n<li><strong>절차 대응</strong> — 조사·고소 절차에서 진술의 일관성과 소명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부수적 사익과 공공의 이익·모욕 성부',
        summary:
          '대법원 2024도14555(대법원, 2025.05.29 선고) 영역에서 법원은 형법 제310조의 \'오로지 공공의 이익에 관한 때\'와 관련해, 적시된 사실이 객관적으로 공공의 이익에 관한 것이면 행위자의 주요한 동기나 목적이 공공의 이익을 위한 것이라면 부수적으로 다른 사익적 목적이나 동기가 내포되어 있더라도 형법 제310조의 적용을 배제할 수 없다고 보았습니다. 또한 모욕죄의 \'모욕\'은 사람의 외부적 명예를 침해할 만한 추상적 판단이나 경멸적 감정의 표현을 의미하되, 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도이거나 부정적·비판적 의견을 나타내면서 경미한 수준의 추상적 표현·욕설을 사용한 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않으며, 개인의 인격권과 표현의 자유가 함께 고려되어야 한다고 판시했습니다. 익명 제보 사안에서도 공익성·부수적 사익·표현 정도를 검토해볼 수 있습니다.',
        takeaway: '익명 제보 + 사실 적시·비판 + 명예훼손·모욕 고소 결합 시 공익 목적·부수적 사익·모욕 성부 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사실을 제보한 것뿐인데 명예훼손이 되나요?',
        answer:
          '<strong>사실 적시도 명예훼손이 될 수 있으나 진실·공익 목적이면 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '개인 감정이 조금 섞였으면 공익성이 부정되나요?',
        answer:
          '<strong>주요 동기·목적이 공공의 이익이면 부수적 사익이 섞여 있어도 제310조가 적용될 수 있는 영역입니다.</strong> 주된 목적·경위를 정리.',
      },
      {
        question: '표현이 거칠었는데 모욕이 되나요?',
        answer:
          '<strong>경미한 수준의 비판적 표현·욕설은 원칙적으로 모욕에 해당하지 않는 것으로 검토되는 영역입니다.</strong> 표현 내용·맥락을 정리.',
      },
      {
        question: '일부 내용이 과장됐으면 진실성이 부정되나요?',
        answer:
          '<strong>중요한 부분이 객관적 사실과 합치되면 세부 차이·과장이 있어도 진실성이 인정될 수 있는 영역입니다.</strong> 근거 자료와 전체 맥락을 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>위법성조각(진실·공익)과 모욕 불성립 주장, 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
      { label: '공공의 이익 위법성조각', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '모욕죄 성립 기준', href: '/guide/defamation/defamation-insult-track' },
      { label: '공익 제보·내부고발', href: '/guide/defamation/defamation-whistleblower-track' },
      { label: '명예훼손 합의·처분', href: '/guide/defamation/defamation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-legal-reserve-claim-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-legal-reserve-claim-track',
    keyword: '유류분 반환 청구',
    questionKeyword: '돌아가신 부모님이 형제 한 사람에게 재산 대부분을 유증·증여하셔서 제 몫이 거의 없어요. 유류분 반환을 청구하려는데 포괄 유증을 받은 사람의 빚까지 제가 떠안는지, 부족액은 어떻게 계산하는지 막막합니다.',
    ctaKeyword: '유류분 반환 청구·부족액 산정 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '유류분 반환 — 5단계 부족액·포괄유증 점검 | 로앤가이드',
      description:
        '한 사람에게 재산이 몰려 유류분이 침해됐다면 유류분 부족액·포괄유증·소극재산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 부모님이 형제 가운데 한 사람에게 재산 대부분을 유증·증여하셔서, 정작 제게 남은 몫은 거의 없는 상황입니다. 법이 보장하는 최소한의 몫인 유류분이라도 돌려받고 싶은데, 재산을 통째로 받은 사람이 빚까지 함께 떠안은 경우 그 빚이 제게도 넘어오는 건 아닌지, 제가 돌려받을 수 있는 부족액은 어떻게 계산하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제1112조·제1113조는 유류분 비율과 유류분 산정의 기초가 되는 재산액(상속개시 시 재산에 증여재산을 더하고 채무 전액을 공제)을, 민법 제1078조는 포괄적 수증자가 상속인과 동일한 권리·의무를 갖는다는 점을 정하는 영역입니다. 판례는 유증이 포괄적 유증인지 특정유증인지는 유언 문언과 제반 사정을 종합해 탐구한 유언자의 의사로 결정되고, 유류분권리자가 반환청구권을 행사하면 유류분을 침해하는 범위에서 유증·증여가 소급적으로 효력을 잃으며, 포괄적 유증을 받은 사람이 승계하는 소극재산은 유류분 산정 기초재산에서 전액 공제되므로 그 소극재산 일부가 유류분반환으로 유류분권리자에게 승계된다고 볼 수 없다고 본 사례 흐름이 있는 영역입니다. 유류분 + 포괄유증 + 부족액 결합은 \'부족액 산정·소극재산 공제\' 다툼이 가능한 트랙입니다. 당사자라면 ① 상속·증여 파악 ② 기초재산 ③ 유류분액 ④ 부족액 ⑤ 반환 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 기초 ③ 유류분 ④ 부족액 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유류분 반환 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속·증여 파악·기초재산·유류분액·부족액·반환 청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속·증여 파악</strong> — 상속재산·생전 증여·유증·채무 파악.</li>\n<li><strong>② 기초재산</strong> — 상속개시 시 재산 + 증여재산 − 채무 전액으로 기초재산 산정.</li>\n<li><strong>③ 유류분액</strong> — 기초재산에 유류분 비율을 곱해 유류분액 산정.</li>\n<li><strong>④ 부족액</strong> — 유류분액에서 특별수익액·순상속분액을 공제해 부족액 산정.</li>\n<li><strong>⑤ 반환 청구</strong> — 유류분 침해 범위에서 유증·증여 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 포괄적 수증자가 승계하는 소극재산은 유류분 산정 기초재산에서 전액 공제되어, 공제 후 남은 적극재산 중 부족액에 해당하는 범위에서만 유증이 효력을 잃는 영역. 그 소극재산이 유류분권리자에게 승계되는 것은 아닌 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속·증여 자료 보존 (즉시)</strong> — 상속재산·생전 증여·유증·채무 자료 보존.</li>\n<li><strong>2단계 — 기초재산·유류분액 정리 (1~2주)</strong> — 기초재산(재산+증여−채무)·유류분 비율로 유류분액 정리.</li>\n<li><strong>3단계 — 부족액 산정 (2~3주)</strong> — 특별수익액·순상속분액 공제로 부족액 산정.</li>\n<li><strong>4단계 — 유류분 반환 청구 (소 제기 시)</strong> — 유류분 침해 범위에서 반환 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 반환 범위 확정 및 이행·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유류분 반환 청구·부족액 산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상속·증여·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·기본증명서 (상속인 확정)</strong></li>\n<li><strong>피상속인 사망진단서·제적등본</strong></li>\n<li><strong>유언장·유증 관련 자료 (포괄/특정 유증 구분)</strong></li>\n<li><strong>생전 증여 내역·증여계약서 (특별수익)</strong></li>\n<li><strong>상속재산 목록·부동산 등기부 (적극재산)</strong></li>\n<li><strong>피상속인 채무 내역 (기초재산 공제)</strong></li>\n<li><strong>재산 평가·감정 자료 (부족액 산정)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유류분 부족액은 \'유류분액(기초재산×비율)\'에서 \'특별수익액·순상속분액\'을 공제해 산정하는 영역이고, 포괄적 유증을 받은 사람의 소극재산은 기초재산에서 전액 공제되어 유류분권리자에게 넘어오지 않는 점이 핵심. 생전 증여·유증 내역과 채무를 함께 정리해 기초재산을 정확히 확정하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유증 성격</strong> — 포괄적 유증인지 특정유증인지(유언자 의사).</li>\n<li><strong>기초재산</strong> — 상속개시 시 재산·증여재산 가산·채무 전액 공제.</li>\n<li><strong>부족액 산정</strong> — 특별수익액·순상속분액 공제 방법.</li>\n<li><strong>소극재산 공제</strong> — 포괄 수증자 승계 소극재산의 전액 공제·승계 여부.</li>\n<li><strong>반환 범위</strong> — 유류분 침해 범위에서 효력 상실·반환 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원·지방법원 (유류분 반환 청구)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한변협 법률구조재단</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄적 유증과 유류분 부족액 산정',
        summary:
          '대법원 2022다220014(대법원, 2025.05.29 선고) 영역에서 법원은 유증이 포괄적 유증인지 특정유증인지는 유언에 사용한 문언과 제반 사정을 종합해 탐구한 유언자의 의사로 결정되어야 하고, 포괄적 유증은 적극재산은 물론 소극재산까지 포괄하는 상속재산의 유증으로서 포괄적 수증자는 상속인과 동일한 권리·의무가 있다고 보았습니다. 또한 유류분권리자가 반환청구권을 행사하면 유류분을 침해하는 범위에서 유증·증여가 소급적으로 효력을 잃고, 유류분 부족액은 유류분액에서 특별수익액과 순상속분액을 공제해 산정하며, 포괄적 유증을 받은 사람이 승계하는 소극재산은 유류분 산정 기초재산에서 전액 공제되므로 그 소극재산 일부가 유류분제도나 반환청구권 행사로 유류분권리자에게 승계된다고 볼 수 없다고 판시했습니다. 유류분 반환 사안에서도 부족액 산정·소극재산 공제를 검토해볼 수 있습니다.',
        takeaway: '유류분 + 포괄유증 + 부족액 결합 시 유류분 부족액 산정·기초재산 채무 공제·소극재산 비승계 검토 영역 — 변호사 상담·법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '유류분은 얼마나 받을 수 있나요?',
        answer:
          '<strong>기초재산에 유류분 비율을 곱한 유류분액에서 특별수익·순상속분을 공제한 부족액 범위에서 검토되는 영역입니다.</strong> 증여·유증·채무 자료를 정리.',
      },
      {
        question: '재산을 통째로 받은 사람의 빚도 제가 떠안나요?',
        answer:
          '<strong>포괄 수증자의 소극재산은 기초재산에서 전액 공제될 뿐 유류분권리자에게 승계되지 않는 것으로 검토되는 영역입니다.</strong> 채무·증여 자료를 정리.',
      },
      {
        question: '포괄유증과 특정유증은 어떻게 구분하나요?',
        answer:
          '<strong>유언 문언과 제반 사정을 종합한 유언자의 의사로 구분하는 영역입니다.</strong> 유언장·유증 자료를 정리.',
      },
      {
        question: '생전 증여도 계산에 들어가나요?',
        answer:
          '<strong>증여재산은 기초재산에 가산되고 특별수익으로 공제 대상이 되는 영역입니다.</strong> 증여 내역·시점 자료를 정리.',
      },
      {
        question: '유류분 청구에 기한이 있나요?',
        answer:
          '<strong>유류분 반환청구권은 침해를 안 날부터 1년, 상속개시 시부터 10년의 기간이 적용되는 영역입니다.</strong> 침해 인지 시점을 정리.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 산정 기준', href: '/guide/inheritance/inheritance-legal-reserve-standard' },
      { label: '특별수익·생전 증여', href: '/guide/inheritance/inheritance-special-benefit-track' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement-track' },
      { label: '유증·유언 효력', href: '/guide/inheritance/inheritance-will-validity-track' },
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-qualified-acceptance-documents' },
    ],
  },

  // ─── 10. traffic-accident-pedestrian-crosswalk-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pedestrian-crosswalk-fault-track',
    keyword: '횡단보도 보행자 사고 과실',
    questionKeyword: '교통사고로 보험금을 받으려는데 보험설계사가 보장 내용을 제대로 설명 안 해줘서 보험금을 못 받게 됐어요. 보험사에 손해배상을 청구할 수 있는지, 제 과실도 깎이는지 막막합니다.',
    ctaKeyword: '설명의무 위반 보험금 손해배상·과실상계 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '설명의무 위반 보험 — 5단계 손해배상·과실상계 점검 | 로앤가이드',
      description:
        '보험설계사 설명의무 위반으로 보험금을 못 받게 됐다면 손해배상·과실상계·책임제한 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고를 당해 보험금을 청구하려 했는데, 가입할 때 보험설계사가 보장 범위나 면책 특약을 제대로 설명해주지 않아 정작 사고가 났는데도 보험금을 받지 못하게 된 상황입니다. 분명히 보장되는 줄 알고 가입했는데 \'그 경우는 면책\'이라는 말을 듣고 나니 억울하기만 합니다. 설명을 제대로 안 한 보험사에 손해배상을 청구할 수 있는지, 그 과정에서 제 과실까지 깎여 받을 돈이 줄어드는 건 아닌지 도무지 가늠이 되지 않아 막막한 상태입니다." 구 보험업법 제102조 제1항은 보험회사가 임직원·보험설계사 등이 모집을 하면서 보험계약자에게 손해를 입힌 경우 배상할 책임을 지도록 정하고, 민법 제396조·제763조는 과실상계를 규정하는 영역입니다. 판례는 보험설계사의 설명의무 위반으로 보험계약자가 지정한 보험수익자에게 보험금이 지급되지 않은 경우 보험계약자가 구 보험업법 제102조 제1항에 따라 전체 보험금 상당액의 손해배상을 청구할 수 있고, 다만 보험계약자에게 손해의 발생·확대에 관해 과실이 있거나 책임을 제한할 사유가 있으면 배상책임 범위를 정할 때 이를 참작해야 하며 과실상계·책임제한 비율은 형평에 비추어 현저히 불합리하지 않은 한 사실심의 전권사항이라고 본 사례 흐름이 있는 영역입니다. 설명의무 위반 + 보험금 부지급 + 과실상계 결합은 \'손해배상 범위·책임제한\' 다툼이 가능한 트랙입니다. 당사자라면 ① 계약·설명 정황 ② 설명의무 위반 ③ 손해 범위 ④ 과실상계 ⑤ 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 정황 ② 위반 ③ 손해 ④ 과실 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 설명의무 위반 보험금 손해배상 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·설명 정황·설명의무 위반·손해 범위·과실상계·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·설명 정황</strong> — 가입 경위·설명 내용·약관·특약 정황 정리.</li>\n<li><strong>② 설명의무 위반</strong> — 보장요건·면책특약 등 중요사항 설명 누락 여부.</li>\n<li><strong>③ 손해 범위</strong> — 설명의무 위반이 없었으면 지급되었을 보험금 상당액 정리.</li>\n<li><strong>④ 과실상계</strong> — 계약자의 손해 발생·확대 과실·책임제한 사유 검토.</li>\n<li><strong>⑤ 청구</strong> — 구 보험업법 제102조에 따른 손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 보험설계사 설명의무 위반으로 보험금이 지급되지 않으면 보험계약자가 전체 보험금 상당액의 손해배상을 청구할 수 있되, 계약자의 과실·책임제한 사유가 있으면 배상 범위에서 참작되고 그 비율은 사실심의 전권사항인 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 손해보험협회·금융감독원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·설명 자료 보존 (즉시)</strong> — 청약서·약관·상품설명서·가입 당시 안내 자료·녹취 보존.</li>\n<li><strong>2단계 — 설명의무 위반 정리 (1~2주)</strong> — 보장요건·면책특약 등 중요사항 설명 누락 정리.</li>\n<li><strong>3단계 — 손해 범위·과실 정리 (2~3주)</strong> — 미지급 보험금 상당 손해, 계약자 과실·책임제한 사유 정리.</li>\n<li><strong>4단계 — 분쟁조정·소 제기 (분쟁 시)</strong> — 금융분쟁조정·구 보험업법 제102조 손해배상 청구 검토.</li>\n<li><strong>5단계 — 판결·이행 (정산 시)</strong> — 배상 범위·과실상계 확정 및 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">설명의무 위반 보험금 손해배상·과실상계 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·설명·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>보험 청약서·약관·상품설명서 (계약 내용)</strong></li>\n<li><strong>가입 당시 안내·상담 자료·녹취 (설명 정황)</strong></li>\n<li><strong>면책특약·보장요건 관련 자료 (중요사항)</strong></li>\n<li><strong>보험금 청구·부지급 통지 자료 (손해 발생)</strong></li>\n<li><strong>사고·교통사고 사실확인원 (보험사고)</strong></li>\n<li><strong>예상 보험금·손해액 산정 자료</strong></li>\n<li><strong>분쟁조정·청구 관련 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험설계사가 보장요건·면책특약 같은 중요사항을 제대로 설명하지 않아 보험금이 지급되지 않았다면, 보험계약자가 전체 보험금 상당액의 손해배상을 청구할 수 있는 영역이므로 가입 당시 설명 정황 자료를 확보하는 것이 핵심. 다만 계약자에게 손해 발생·확대에 관한 과실이 있으면 과실상계로 배상 범위가 조정될 수 있는 점도 염두에 두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>설명의무 위반</strong> — 보장요건·면책특약 등 중요사항 설명 누락 여부.</li>\n<li><strong>손해 범위</strong> — 설명의무 위반이 없었으면 지급되었을 보험금 상당액.</li>\n<li><strong>과실상계</strong> — 계약자의 손해 발생·확대 과실 참작 여부.</li>\n<li><strong>책임제한</strong> — 책임제한 사유와 비율(사실심 전권사항).</li>\n<li><strong>인과관계</strong> — 설명의무 위반과 보험금 부지급의 인과관계.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 (보험·보상 안내)</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁조정)</strong></li>\n<li><strong>한국교통안전공단 (교통사고 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 설명의무 위반 손해배상과 과실상계',
        summary:
          '대법원 2022다200317(대법원, 2024.12.12 선고) 영역에서 법원은 구 보험업법 제102조에 의한 손해배상책임에서 보험계약자에게 손해의 발생 또는 확대에 관해 과실이 있거나 보험회사의 책임을 제한할 사유가 있는 경우에는 배상책임의 범위를 정할 때 당연히 이를 참작해야 하고, 다만 과실상계나 책임제한 사유에 관한 사실인정·비율을 정하는 것은 그것이 형평의 원칙에 비추어 현저히 불합리하다고 인정되지 않는 한 사실심의 전권사항에 속한다고 보았습니다. 나아가 타인을 위한 생명보험에서 보험설계사의 설명의무 위반으로 보험수익자에게 보험금이 지급되지 않은 경우, 보험계약자는 보험회사를 상대로 구 보험업법 제102조 제1항에 따라 전체 보험금 상당액의 손해배상을 청구할 수 있다고 판시했습니다. 설명의무 위반 보험금 사안에서도 손해 범위·과실상계를 검토해볼 수 있습니다.',
        takeaway: '설명의무 위반 + 보험금 부지급 + 과실상계 결합 시 전체 보험금 상당 손해배상·과실상계·책임제한 검토 영역 — 변호사 상담·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '설계사가 설명을 안 해 보험금을 못 받았는데 보상받을 수 있나요?',
        answer:
          '<strong>설명의무 위반으로 보험금이 지급되지 않으면 보험사에 전체 보험금 상당 손해배상을 청구할 수 있는 영역입니다.</strong> 가입 당시 설명 자료를 정리.',
      },
      {
        question: '중요사항 설명 누락은 무엇을 말하나요?',
        answer:
          '<strong>보장요건·면책특약 등 보험금 지급 여부를 좌우하는 중요사항 설명을 빠뜨린 경우가 검토되는 영역입니다.</strong> 약관·안내 자료를 정리.',
      },
      {
        question: '제 과실도 깎이나요?',
        answer:
          '<strong>계약자에게 손해 발생·확대 과실이 있으면 배상 범위에서 과실상계로 참작되는 영역입니다.</strong> 손해 발생 경위 자료를 정리.',
      },
      {
        question: '과실 비율은 어떻게 정해지나요?',
        answer:
          '<strong>과실상계·책임제한 비율은 현저히 불합리하지 않은 한 사실심의 전권사항으로 검토되는 영역입니다.</strong> 정황·자료를 충실히 제출.',
      },
      {
        question: '보험사와 다툴 때 어디에 먼저 상담하나요?',
        answer:
          '<strong>금융감독원 분쟁조정·법률구조공단 상담을 먼저 검토할 수 있는 영역입니다.</strong> 청약서·약관·부지급 통지를 준비.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '보험금 청구·분쟁', href: '/guide/traffic-accident/traffic-accident-insurance-claim-track' },
      { label: '교통사고 과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio-track' },
      { label: '치료비·손해 산정', href: '/guide/traffic-accident/traffic-accident-damages-calculation' },
      { label: '보험 약관·면책 분쟁', href: '/guide/traffic-accident/traffic-accident-policy-exclusion-track' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
    ],
  },
];
