import { SpokePage } from '../spoke-pages';

// batch83 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-05-31)
//
// 고유 존재 이유:
// 1. divorce-domestic-violence-protection-order-track — 가정폭력 피해 배우자가 이혼·접근금지(피해자보호명령)를 병행하는 절차형 트랙. 신변 안전 우선 + 위자료 책임정도 평가가 핵심.
// 2. divorce-national-pension-division-track — 공무원연금·퇴직급여가 재산분할 대상이 되는지, 연금분할 청구권과 재산분할의 관계 판단형 트랙. 예상퇴직급여 채권 포함 여부가 핵심.
// 3. divorce-grandparent-visitation-custody-track — 면접교섭·과거양육비·재산분할 제척기간이 얽힌 양육 분쟁 판단형 트랙. 비양육친 양육비 종기·직권 양육사항 판단이 핵심.
// 4. divorce-hidden-asset-property-tracing-track — 배우자의 재산 은닉·파탄 후 처분재산 추적과 분할대상 산정 판단형 트랙. 변동재산 제외·대상재산 포함 기준이 핵심.
// 5. defamation-online-exposure-personal-info-track — 온라인 폭로·신상공개의 공연성(전파가능성 이론) 판단형 트랙. 소수 전파 시 공연성 인정 기준이 핵심.
// 6. defamation-youtube-comment-insult-track — 유튜브 댓글·온라인 표현이 사실 적시인지 의견·모욕인지 구분 판단형 트랙. 순수 의견은 명예훼손 불성립이 핵심.
// 7. defamation-secondhand-trade-false-review-track — 중고거래 허위 후기·비방의 정보통신망법 명예훼손과 비방 목적·공익성 판단형 트랙. 비방 목적과 공공의 이익 관계가 핵심.
// 8. defamation-public-interest-report-falsely-accused-defense — accused 관점. 공익 제보 과정의 사실 적시가 형법 제310조 위법성조각에 해당하는지 다투는 방어 트랙. 진실성·공익성·표현방법이 핵심.
// 9. inheritance-debt-qualified-acceptance-track — 상속채무 한정승인의 중과실·재산목록 누락 단순승인 의제 절차형 트랙. 중과실 의미·증명책임·고의 누락 기준이 핵심.
// 10. traffic-accident-motorcycle-delivery-fault-track — 이륜차(배달) 쌍방과실 사고의 자기부담금·보험자대위 범위 판단형 트랙. 자기부담금 중 상대 책임비율 청구 가능 여부가 핵심.

export const spokesBatch83DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-domestic-violence-protection-order-track ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-protection-order-track',
    keyword: '가정폭력 접근금지 이혼',
    questionKeyword: '배우자의 폭력 때문에 이혼하려는데 당장 신변이 위험합니다. 이혼 절차와 함께 접근금지·피해자보호명령을 받을 수 있는지, 위자료는 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '가정폭력 접근금지 이혼 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 이혼 — 5단계 접근금지·위자료 점검 | 로앤가이드',
      description:
        '배우자의 폭력으로 이혼하려는데 신변이 불안하다면 접근금지·피해자보호명령·이혼·위자료 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자의 폭력이 반복되면서 더는 함께 살 수 없어 이혼을 결심했지만, 막상 헤어지자고 말하면 보복을 당하지 않을까 두려워 입을 떼기조차 어려운 상황입니다. 당장 오늘 밤 무슨 일이 생길지 모르는데, 이혼 소송이 끝날 때까지 신변을 어떻게 지켜야 할지, 접근금지 같은 보호 조치를 함께 받을 수 있는지, 그동안 받은 정신적 고통에 대한 위자료는 어떻게 정리해야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제840조는 배우자 또는 그 직계존속으로부터 심히 부당한 대우를 받았을 때 등을 재판상 이혼 사유로 정하고, 민법 제843조·제839조의2는 재산분할을, 가정폭력범죄의 처벌 등에 관한 특례법은 피해자보호명령(접근금지·퇴거 등)을 규정하는 영역입니다. 판례는 혼인관계 파탄에 관한 부부 쌍방의 책임정도가 대등하다고 판단되면 일방에게 파탄 책임을 지울 수 없어 위자료 청구가 기각될 수 있고, 그 경우 제3자에 대한 위자료 책임도 성립하지 않는다고 본 사례 흐름이 있는 영역입니다. 가정폭력 + 신변 위험 + 이혼·위자료 결합은 \'보호명령·이혼·책임정도\' 정리가 필요한 트랙입니다. 당사자라면 ① 신변 안전 ② 증거 보존 ③ 이혼 청구 ④ 위자료·재산분할 ⑤ 보호명령 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 안전 ② 증거 ③ 이혼 ④ 위자료 ⑤ 보호 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가정폭력 접근금지 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신변 안전·증거 보존·이혼 청구·위자료·보호명령 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신변 안전</strong> — 긴급한 위험 시 112 신고·임시조치·쉼터 등 안전 확보.</li>\n<li><strong>② 증거 보존</strong> — 폭력 정황(진단서·사진·녹취·신고 이력) 보존.</li>\n<li><strong>③ 이혼 청구</strong> — 심히 부당한 대우 등 재판상 이혼 사유 정리.</li>\n<li><strong>④ 위자료·재산분할</strong> — 정신적 고통 위자료·재산분할 청구 검토.</li>\n<li><strong>⑤ 보호명령</strong> — 피해자보호명령(접근금지·퇴거 등) 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신변 안전이 최우선이며, 이혼·위자료 청구와 별도로 피해자보호명령(접근금지)을 함께 검토할 수 있는 영역. 위자료는 혼인 파탄에 관한 책임정도에 따라 인정 범위가 달라질 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·여성긴급전화·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신변 안전 확보 (즉시)</strong> — 긴급 시 112 신고, 1366 상담, 임시조치·쉼터 안내 확인.</li>\n<li><strong>2단계 — 폭력 증거 보존 (즉시~1주)</strong> — 진단서·상해 사진·녹취·신고 이력·문자 등 보존.</li>\n<li><strong>3단계 — 피해자보호명령 신청 (위험 지속 시)</strong> — 가정법원에 접근금지·퇴거 등 피해자보호명령 신청 검토.</li>\n<li><strong>4단계 — 이혼·위자료 청구 (소 제기 시)</strong> — 재판상 이혼·위자료·재산분할 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 위자료·재산분할 이행 및 보호조치 유지 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">가정폭력 접근금지 이혼 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 안전·증거·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (혼인·자녀 확인)</strong></li>\n<li><strong>상해진단서·치료 기록 (폭력 피해 입증)</strong></li>\n<li><strong>상해 부위 사진·현장 사진 (피해 정황)</strong></li>\n<li><strong>112 신고 이력·경찰 진술 자료 (반복성)</strong></li>\n<li><strong>위협 문자·녹취·SNS 기록 (협박·부당 대우)</strong></li>\n<li><strong>재산·소득 자료 (위자료·재산분할 산정)</strong></li>\n<li><strong>피해자보호명령 신청서·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신변이 급박하게 위험한 경우에는 이혼 소송보다 112 신고·임시조치·피해자보호명령으로 안전을 먼저 확보하는 것이 핵심. 진단서·신고 이력 등 폭력의 반복성을 보여주는 객관적 자료를 시간 순으로 모아두면 재판상 이혼 사유와 위자료 산정에 함께 활용될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이혼 사유</strong> — 심히 부당한 대우 등 재판상 이혼 사유 해당 여부.</li>\n<li><strong>책임정도</strong> — 혼인 파탄에 관한 부부 쌍방의 책임정도 평가.</li>\n<li><strong>위자료 범위</strong> — 정신적 고통의 위자료 인정 범위.</li>\n<li><strong>보호명령</strong> — 접근금지·퇴거 등 피해자보호명령의 요건·기간.</li>\n<li><strong>증거의 신빙성</strong> — 폭력 정황 자료의 객관성·일관성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·피해자보호명령 신청)</strong></li>\n<li><strong>여성긴급전화 1366 (긴급 보호·상담)</strong></li>\n<li><strong>경찰 112 (긴급 신고·임시조치)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 파탄 책임정도가 대등한 경우 위자료 책임',
        summary:
          '대법원 2023므16678(대법원, 2024.06.27 선고) 영역에서 법원은 부부의 일방이 상대방 배우자의 부정행위로 혼인관계가 파탄되었다고 주장하며 위자료를 청구하였더라도, 법원이 혼인관계 파탄에 관한 부부 쌍방의 책임정도가 대등하다고 판단하면 상대방 배우자에게 혼인관계 파탄에 대한 손해배상의무가 처음부터 성립하지 않는다고 보았습니다. 또한 부정행위를 한 배우자의 손해배상의무가 성립하지 않는 이상 부정행위에 가공한 제3자에게도 이혼을 원인으로 하는 손해배상책임이 인정되지 않으며, 이는 본소·반소 위자료 청구를 모두 기각하는 경우에도 마찬가지라고 판시했습니다. 가정폭력 사안에서도 파탄 책임정도와 위자료 인정 범위를 검토해볼 수 있습니다.',
        takeaway: '가정폭력 + 신변 위험 + 이혼·위자료 결합 시 보호명령·파탄 책임정도·위자료 범위 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이혼하기 전에도 접근금지를 받을 수 있나요?',
        answer:
          '<strong>가정폭력 피해자는 이혼과 별도로 피해자보호명령(접근금지·퇴거 등)을 검토할 수 있는 영역입니다.</strong> 폭력 정황 자료와 신청서를 정리.',
      },
      {
        question: '폭력 증거는 어떤 걸 모아야 하나요?',
        answer:
          '<strong>진단서·사진·녹취·신고 이력 등 폭력의 반복성을 보여주는 자료가 중요한 영역입니다.</strong> 시간 순으로 정리해 보관.',
      },
      {
        question: '위자료는 받을 수 있나요?',
        answer:
          '<strong>위자료 인정 범위는 혼인 파탄에 관한 책임정도에 따라 달라질 수 있는 영역입니다.</strong> 폭력 정황·피해 입증 자료를 정리.',
      },
      {
        question: '당장 위험한데 어디에 연락하나요?',
        answer:
          '<strong>긴급 시 112 신고·여성긴급전화 1366 상담으로 신변 안전을 먼저 확보하는 영역입니다.</strong> 임시조치·쉼터 안내를 함께 확인.',
      },
      {
        question: '아이 면접교섭은 어떻게 되나요?',
        answer:
          '<strong>자녀의 복리와 안전을 고려해 면접교섭 방법·제한을 검토하는 영역입니다.</strong> 양육·안전 관련 자료를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '면접교섭 다툼', href: '/guide/divorce/divorce-visitation-dispute-track' },
    ],
  },

  // ─── 2. divorce-national-pension-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-national-pension-division-track',
    keyword: '국민연금 분할 이혼',
    questionKeyword: '배우자가 공무원이라 퇴직급여·연금이 있는데, 이혼할 때 아직 받지 않은 연금이나 퇴직급여도 재산분할 대상이 되는지 궁금합니다. 연금분할 청구권과 재산분할은 어떻게 다른가요?',
    ctaKeyword: '국민연금·공무원연금 분할 이혼 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '연금 분할 이혼 — 5단계 퇴직급여·연금 점검 | 로앤가이드',
      description:
        '배우자의 공무원연금·퇴직급여를 이혼 재산분할에서 나눌 수 있을지 예상퇴직급여·분할연금 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 결혼생활 동안 배우자가 공무원으로 일해 퇴직급여와 연금이 쌓였지만, 이혼하려고 보니 아직 퇴직 전이라 받은 돈이 없습니다. 제가 가정을 돌보며 뒷받침한 세월이 있는데, 정작 \'아직 안 받은 연금이라 나눌 수 없다\'는 말이 들려 불안합니다. 퇴직급여나 연금이 재산분할 대상이 되는지, 연금공단에 따로 청구하는 분할연금과 이혼 소송의 재산분할은 무엇이 다른지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제839조의2는 협의·재판상 이혼 시 재산분할청구권을 정하면서 분할의 액수·방법을 당사자 협력으로 이룬 재산과 기타 사정을 참작해 정하도록 하고, 공무원연금법 제45조·제46조는 이혼배우자의 분할연금 청구권과 재산분할 우선 적용을 규정하는 영역입니다. 판례는 이혼 당시 부부 일방이 아직 공무원으로 재직 중이어서 실제 퇴직급여를 수령하지 않았더라도 사실심 변론종결 시 잠재적으로 존재해 경제적 가치의 현실적 평가가 가능한 퇴직급여·퇴직수당 채권은 상대방의 기여가 인정되는 한 재산분할 대상에 포함될 수 있다고 본 사례 흐름이 있는 영역입니다. 공무원 배우자 + 미수령 연금·퇴직급여 + 기여 결합은 \'재산분할 대상 포함 여부\' 다툼이 가능한 트랙입니다. 당사자라면 ① 재직·재산 파악 ② 예상퇴직급여 ③ 기여도 ④ 분할연금 ⑤ 산정 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 예상급여 ③ 기여 ④ 연금 ⑤ 산정 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 연금 분할 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재직·재산 파악·예상퇴직급여·기여도·분할연금·산정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재직·재산 파악</strong> — 배우자 재직 여부·퇴직급여·연금 채권 파악.</li>\n<li><strong>② 예상퇴직급여</strong> — 사실심 변론종결 시 기준 예상퇴직급여·퇴직수당 채권 평가.</li>\n<li><strong>③ 기여도</strong> — 퇴직급여 형성·유지에 대한 상대방 협력·기여 정리.</li>\n<li><strong>④ 분할연금</strong> — 공무원연금법상 분할연금 청구권과 재산분할의 관계 검토.</li>\n<li><strong>⑤ 산정</strong> — 분할 대상 포함 여부·분할 비율·방법 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 아직 수령하지 않았더라도 사실심 변론종결 시 평가가 가능한 예상퇴직급여·퇴직수당 채권은 상대방 기여가 인정되면 재산분할 대상에 포함될 수 있는 영역. 법원이 분할연금 규정에도 불구하고 포함 여부를 정할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·연금 자료 보존 (즉시)</strong> — 배우자 재직·급여·연금 자료, 혼인기간 자료 보존.</li>\n<li><strong>2단계 — 예상퇴직급여 평가 (1~2주)</strong> — 변론종결 시 기준 예상퇴직급여·퇴직수당 채권 평가 검토.</li>\n<li><strong>3단계 — 기여도·분할연금 정리 (2~3주)</strong> — 기여 정황 정리, 분할연금 청구권과 재산분할 관계 정리.</li>\n<li><strong>4단계 — 재산분할 청구 (소 제기 시)</strong> — 퇴직급여·연금 채권 포함한 재산분할 청구.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 분할 비율·방법 확정 및 이행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">국민연금·공무원연금 분할 이혼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산·기여·연금 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·혼인기간 자료 (분할연금 5년 요건 등)</strong></li>\n<li><strong>배우자 재직증명·급여 자료 (퇴직급여 채권)</strong></li>\n<li><strong>예상퇴직급여·퇴직수당 산정 자료</strong></li>\n<li><strong>연금 가입·납입 내역 (분할연금 검토)</strong></li>\n<li><strong>가사노동·소득 등 기여 입증 자료</strong></li>\n<li><strong>부부 적극재산·채무 목록</strong></li>\n<li><strong>금융거래내역·재산조회 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 아직 퇴직 전이라 연금·퇴직급여를 받지 않았더라도 사실심 변론종결 시 평가가 가능한 채권은 재산분할 대상에 포함될 수 있는 영역이므로, 배우자의 재직·급여 자료와 본인의 기여 정황을 함께 정리하는 것이 핵심. 공무원연금법상 분할연금 청구권과 이혼 소송 재산분할은 별개 절차인 점도 고려해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할 대상 포함</strong> — 미수령 퇴직급여·퇴직수당 채권의 분할 대상 여부.</li>\n<li><strong>예상급여 평가</strong> — 변론종결 시 기준 예상퇴직급여의 평가 방법.</li>\n<li><strong>기여도</strong> — 퇴직급여 형성·유지에 대한 상대방 기여 정도.</li>\n<li><strong>분할연금 관계</strong> — 공무원연금법상 분할연금 청구권과 재산분할의 관계.</li>\n<li><strong>분할 방법</strong> — 일시 정산·비율 분할 등 분할 방법.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할 청구)</strong></li>\n<li><strong>국민연금공단 1355 (분할연금 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 미수령 퇴직급여 채권의 재산분할 대상 포함',
        summary:
          '대법원 2017므11917(대법원, 2019.09.25 선고) 영역에서 법원은 이혼 당시 부부 일방이 아직 공무원으로 재직 중이어서 실제 퇴직급여 등을 수령하지 않았더라도, 이혼소송의 사실심 변론종결 시에 이미 잠재적으로 존재해 경제적 가치의 현실적 평가가 가능한 퇴직급여·퇴직수당 채권은 상대방 배우자의 협력이 기여한 것으로 인정되는 한 재산분할 대상에 포함될 수 있다고 보았습니다. 또한 법원은 공무원연금법이 정한 이혼배우자의 분할연금·퇴직연금일시금 분할 청구권 규정에도 불구하고, 혼인 생활의 과정과 기간·기여 정도·다른 재산의 규모 등을 종합해 예상퇴직급여 채권을 재산분할 대상에 포함할지를 정할 수 있다고 판시했습니다. 미수령 연금·퇴직급여 사안에서도 분할 대상 포함 여부를 검토해볼 수 있습니다.',
        takeaway: '공무원 배우자 + 미수령 연금·퇴직급여 + 기여 결합 시 예상퇴직급여 채권 분할 대상·분할연금 관계 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '아직 안 받은 퇴직급여도 나눌 수 있나요?',
        answer:
          '<strong>변론종결 시 평가가 가능한 예상퇴직급여 채권은 기여가 인정되면 재산분할 대상에 포함될 수 있는 영역입니다.</strong> 재직·급여 자료를 정리.',
      },
      {
        question: '분할연금과 재산분할은 같은 건가요?',
        answer:
          '<strong>공무원연금법상 분할연금 청구권과 이혼 소송 재산분할은 별개 절차로 검토되는 영역입니다.</strong> 두 절차의 차이를 함께 정리.',
      },
      {
        question: '제 기여는 어떻게 인정받나요?',
        answer:
          '<strong>소득뿐 아니라 가사노동·재산 형성 기여 등을 종합해 기여도를 판단하는 영역입니다.</strong> 기여 정황 자료를 정리.',
      },
      {
        question: '혼인기간이 짧아도 분할연금이 되나요?',
        answer:
          '<strong>분할연금은 혼인기간 요건 등 별도 기준이 적용되는 영역입니다.</strong> 혼인기간·연금 자료를 함께 확인.',
      },
      {
        question: '재산분할 청구에 기한이 있나요?',
        answer:
          '<strong>이혼한 날부터 2년이 재산분할청구권 행사 기간인 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '퇴직금·연금 분할', href: '/guide/divorce/divorce-pension-division-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
    ],
  },

  // ─── 3. divorce-grandparent-visitation-custody-track ───
  {
    domain: 'divorce',
    slug: 'divorce-grandparent-visitation-custody-track',
    keyword: '조부모 면접교섭',
    questionKeyword: '이혼 후 양육·면접교섭과 양육비를 정리하려는데, 한쪽이 실제로는 아이를 키우지 않는 기간이 생겼어요. 양육비 분담 기간이 어떻게 정해지는지, 면접교섭·재산분할 청구 기한은 어떤지 막막합니다.',
    ctaKeyword: '면접교섭·양육비 분담 기간 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '면접교섭·양육비 — 5단계 분담 기간·제척기간 점검 | 로앤가이드',
      description:
        '이혼 후 양육·면접교섭과 양육비를 정리하려는데 분담 기간·재산분할 제척기간이 헷갈린다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 아이를 누가 어떻게 키울지, 면접교섭은 어떻게 할지를 정리하려는데 상황이 자꾸 바뀌어 막막한 부모입니다. 양육자로 정해졌더라도 사정상 일정 기간 실제로는 아이를 돌보지 못하는 때가 생기기도 하고, 그동안의 양육비를 누가 얼마나 부담해야 하는지, 재산분할 청구는 언제까지 해야 하는지도 헷갈립니다. 자녀를 위한 결정인데 절차와 기한을 몰라 권리를 놓치는 건 아닌지 가늠이 되지 않아 막막한 상태입니다." 민법 제837조·제837조의2는 이혼 시 자녀의 양육에 관한 사항과 면접교섭을, 민법 제843조·제839조의2 제3항은 재산분할청구권을 이혼한 날부터 2년의 제척기간(출소기간) 내에 행사하도록 규정하는 영역입니다. 판례는 양육자로 지정된 사람이 일정 시점 이후 자녀를 양육하지 않는 사실이 확인되면 항고심이 장래양육비 지급 기간을 다시 정해야 하고, 가정법원은 자의 복리를 위해 청구에 구애받지 않고 직권으로 양육비 분담 기간을 정할 수 있으며, 재산분할 제척기간은 청구인 권리에 적용되되 상대방 지위에서 분할대상을 주장하는 경우에는 적용되지 않는다고 본 사례 흐름이 있는 영역입니다. 양육·면접교섭 + 양육 상황 변동 + 청구 기한 결합은 \'분담 기간·제척기간\' 다툼이 가능한 트랙입니다. 당사자라면 ① 양육 현황 ② 면접교섭 ③ 양육비 분담 기간 ④ 직권 판단 ⑤ 제척기간 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 현황 ② 교섭 ③ 분담 ④ 직권 ⑤ 기한 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 면접교섭·양육비 분담 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육 현황·면접교섭·양육비 분담 기간·직권 판단·제척기간 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양육 현황</strong> — 실제 누가 언제부터 자녀를 양육했는지 현황 정리.</li>\n<li><strong>② 면접교섭</strong> — 비양육친·조부모 등 면접교섭 방법·범위 검토.</li>\n<li><strong>③ 양육비 분담 기간</strong> — 양육하지 않은 기간을 반영한 장래양육비 종기 정리.</li>\n<li><strong>④ 직권 판단</strong> — 자의 복리를 위해 가정법원이 직권으로 분담 기간을 정할 수 있는지.</li>\n<li><strong>⑤ 제척기간</strong> — 재산분할청구권의 2년 제척기간(출소기간) 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 양육자가 실제로 양육하지 않은 기간이 확인되면 장래양육비 기간을 다시 정해야 하고, 가정법원은 자의 복리를 위해 직권으로 분담 기간을 정할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육·지출 자료 보존 (즉시)</strong> — 양육 현황·생활비·교육비 지출 자료 보존.</li>\n<li><strong>2단계 — 양육 현황·기간 정리 (1~2주)</strong> — 실제 양육자·양육하지 않은 기간 구분 정리.</li>\n<li><strong>3단계 — 면접교섭·양육비 정리 (2~3주)</strong> — 면접교섭 방법·범위, 양육비 분담 기간·금액 정리.</li>\n<li><strong>4단계 — 심판·소 제기 (가정법원)</strong> — 양육비·면접교섭 심판 청구, 재산분할은 2년 내 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 심판 확정 후 이행명령·집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">면접교섭·양육비 분담 기간 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 양육 현황·양육비·기한 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·주민등록등본 (양육·거주 관계)</strong></li>\n<li><strong>양육 현황 입증 자료 (실제 양육자·기간)</strong></li>\n<li><strong>생활비·교육비·의료비 지출 자료 (양육비 액수)</strong></li>\n<li><strong>면접교섭 협의·실시 기록</strong></li>\n<li><strong>이혼·재산분할 협의 내용 자료</strong></li>\n<li><strong>소득·재산 자료 (양측 경제적 능력)</strong></li>\n<li><strong>재산분할 대상 재산 목록 (제척기간 관리)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육자로 지정됐더라도 실제로 양육하지 않은 기간이 있으면 그 기간을 반영해 장래양육비 종기가 다시 정해질 수 있는 영역이므로 실제 양육 현황을 시간 순으로 정리하는 것이 핵심. 재산분할청구권은 이혼한 날부터 2년의 출소기간 내에 청구해야 하므로 기한 관리도 함께 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실제 양육자</strong> — 양육자 지정과 실제 양육 현황의 일치 여부.</li>\n<li><strong>양육비 분담 기간</strong> — 양육하지 않은 기간을 반영한 장래양육비 종기.</li>\n<li><strong>직권 판단</strong> — 자의 복리를 위한 가정법원의 직권 분담 기간 결정.</li>\n<li><strong>면접교섭 범위</strong> — 비양육친·조부모 면접교섭 방법·제한.</li>\n<li><strong>제척기간</strong> — 재산분할청구권의 2년 출소기간·상대방 주장의 예외.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (양육비·면접교섭 심판 청구)</strong></li>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 분담 기간 직권 판단과 재산분할 제척기간',
        summary:
          '대법원 2021스766(대법원, 2022.11.10 선고) 영역에서 법원은 양육자로 지정된 사람이 일정 시점 이후 실제로 자녀를 양육하지 않는 사실이 확인되면 항고심이 이를 반영해 장래양육비 지급 기간을 다시 정해야 하고, 가정법원은 자의 복리를 위해 청구에 구애받지 않고 직권으로 양육비 분담 기간을 정할 수 있다고 보았습니다. 또한 민법 제843조·제839조의2 제3항의 2년은 재산분할심판을 청구해야 하는 출소기간으로서 청구인 권리에 적용되되, 이미 제기된 재산분할 사건의 상대방 지위에서 분할대상 재산을 주장하는 경우에는 제척기간이 적용되지 않는다고 판시했습니다. 양육 상황 변동 사안에서도 분담 기간과 제척기간을 검토해볼 수 있습니다.',
        takeaway: '양육·면접교섭 + 양육 상황 변동 + 청구 기한 결합 시 양육비 분담 기간·직권 판단·재산분할 제척기간 검토 영역 — 변호사 상담·가정법원 심판 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '양육자로 정해졌는데 실제로 못 키운 기간은 어떻게 되나요?',
        answer:
          '<strong>실제 양육하지 않은 기간이 확인되면 장래양육비 지급 기간이 다시 정해질 수 있는 영역입니다.</strong> 실제 양육 현황을 정리.',
      },
      {
        question: '양육비 기간을 법원이 알아서 정하나요?',
        answer:
          '<strong>가정법원은 자의 복리를 위해 청구에 구애받지 않고 직권으로 분담 기간을 정할 수 있는 영역입니다.</strong> 양육 현황 자료를 제출.',
      },
      {
        question: '조부모도 면접교섭을 할 수 있나요?',
        answer:
          '<strong>자녀의 복리를 고려해 면접교섭 방법·범위를 검토하는 영역입니다.</strong> 면접교섭 협의·실시 기록을 정리.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>이혼한 날부터 2년의 제척기간(출소기간) 내에 청구해야 하는 영역입니다.</strong> 기한 도과 전 청구를 검토.',
      },
      {
        question: '상대방이 청구한 사건에서 제 재산을 주장하면 기한이 지나도 되나요?',
        answer:
          '<strong>상대방 지위에서 분할대상을 주장하는 경우에는 제척기간이 적용되지 않는 것으로 평가될 수 있는 영역입니다.</strong> 사건 진행 상황을 함께 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '면접교섭 다툼', href: '/guide/divorce/divorce-visitation-dispute-track' },
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation-standard' },
      { label: '과거 양육비 청구', href: '/guide/child-support/child-support-past-claim-track' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 4. divorce-hidden-asset-property-tracing-track ───
  {
    domain: 'divorce',
    slug: 'divorce-hidden-asset-property-tracing-track',
    keyword: '재산 은닉 추적 분할',
    questionKeyword: '이혼을 앞두고 배우자가 재산을 숨기거나 파탄 후에 몰래 처분한 것 같아요. 숨긴 재산이나 처분된 재산도 재산분할 대상이 되는지, 어떻게 추적해야 하는지 막막합니다.',
    ctaKeyword: '재산 은닉·처분 재산 추적 분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '재산 은닉 추적 분할 — 5단계 대상재산·처분 점검 | 로앤가이드',
      description:
        '배우자가 재산을 숨기거나 파탄 후 처분한 것 같다면 재산명시·조회·대상재산·처분재산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 준비하면서 배우자의 재산을 정리해보니, 통장 잔고가 갑자기 줄어 있거나 부동산이 슬그머니 다른 사람 명의로 넘어가 있는 등 무언가를 숨기고 있다는 의심이 듭니다. 함께 일군 재산인데 파탄을 전후해 몰래 빼돌린 것 같아 억울하고, 이미 처분되어 사라진 재산이나 어딘가에 숨겨진 재산까지 재산분할 대상에 넣을 수 있는지, 어떻게 찾아내야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제839조의2·제843조는 이혼 시 재산분할청구권을 정하고, 가사소송법은 재산명시·재산조회 제도를 통해 분할 대상 재산을 파악하도록 하는 영역입니다. 판례는 혼인관계 파탄 이후 변론종결일 사이에 생긴 재산 변동이 혼인 중 공동으로 형성한 재산관계와 무관하면 원칙적으로 분할 대상에서 제외하되, 파탄 이후 부부공동생활·공동재산 형성·유지와 무관하게 적극재산을 처분한 경우에는 그 재산을 사실심 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함할 수 있다고 본 사례 흐름이 있는 영역입니다. 재산 은닉 의심 + 파탄 후 처분 + 추적 결합은 \'대상재산 산정·처분재산 포함\' 다툼이 가능한 트랙입니다. 당사자라면 ① 재산 파악 ② 은닉·처분 추적 ③ 파탄 시점 ④ 대상재산 산정 ⑤ 기여도 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 파악 ② 추적 ③ 파탄 ④ 대상 ⑤ 기여 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재산 은닉 추적 분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산 파악·은닉/처분 추적·파탄 시점·대상재산 산정·기여도 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산 파악</strong> — 재산명시·재산조회로 부부 적극재산·채무 파악.</li>\n<li><strong>② 은닉·처분 추적</strong> — 파탄 전후 인출·명의이전·처분 정황 추적.</li>\n<li><strong>③ 파탄 시점</strong> — 혼인관계 파탄 시점과 변동 시점의 구분.</li>\n<li><strong>④ 대상재산 산정</strong> — 처분재산을 변론종결일 보유로 보아 포함할지 검토.</li>\n<li><strong>⑤ 기여도</strong> — 공동 형성 재산에 대한 기여도·분할 비율 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 파탄 이후 공동재산 형성·유지와 무관하게 적극재산을 처분한 경우 그 재산을 변론종결일에 보유한 것으로 보아 분할 대상에 포함할 수 있는 영역. 공동 재산관계와 무관한 변동은 원칙적으로 제외되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산 자료 보존 (즉시)</strong> — 부동산·예금·주식·보험 등 재산 자료와 거래 내역 보존.</li>\n<li><strong>2단계 — 재산명시·조회 신청 (소송 중)</strong> — 가사소송법상 재산명시·재산조회로 은닉 재산 파악.</li>\n<li><strong>3단계 — 처분·파탄 시점 정리 (2~3주)</strong> — 파탄 전후 처분·명의이전 시점과 경위 정리.</li>\n<li><strong>4단계 — 재산분할 청구·산정 (소 제기 시)</strong> — 대상재산 확정 후 기여도·분할 비율 산정.</li>\n<li><strong>5단계 — 판결·이행 (선고 후)</strong> — 분할 확정 및 이행·집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">재산 은닉·처분 재산 추적 분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 재산 파악·추적·대상재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식·보험)</strong></li>\n<li><strong>금융거래내역·계좌 인출 내역 (은닉·처분 추적)</strong></li>\n<li><strong>부동산 등기부·명의이전 자료 (처분 정황)</strong></li>\n<li><strong>혼인 파탄 시점 입증 자료 (별거·관계 단절)</strong></li>\n<li><strong>재산명시·재산조회 신청 자료</strong></li>\n<li><strong>채무 내역서·대출 자료 (소극재산)</strong></li>\n<li><strong>소득·기여 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 파탄 이후 공동재산 형성·유지와 무관하게 처분한 적극재산은 변론종결일에 보유한 것으로 보아 분할 대상에 포함될 수 있는 영역이므로, 파탄 시점과 처분·명의이전 시점을 함께 정리하는 것이 핵심. 재산명시·재산조회 제도를 활용해 은닉 재산을 객관적으로 확인해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>재산 은닉</strong> — 숨겨진 재산의 존재·규모 파악.</li>\n<li><strong>처분재산 포함</strong> — 파탄 후 처분한 재산을 분할 대상에 포함할지.</li>\n<li><strong>파탄 시점</strong> — 혼인관계 파탄 시점과 변동 시점의 구분.</li>\n<li><strong>공동재산 관련성</strong> — 변동이 공동 재산관계와 관련 있는지 무관한지.</li>\n<li><strong>기여도</strong> — 공동 형성 재산에 대한 기여도·분할 비율.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할·재산명시·재산조회)</strong></li>\n<li><strong>여성긴급전화 1366 (가정폭력 동반 시)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 파탄 후 처분재산의 분할 대상 포함 기준',
        summary:
          '대법원 2024므13669(대법원, 2025.10.16 선고) 영역에서 법원은 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관한 경우 변동된 재산은 원칙적으로 재산분할 대상에서 제외하되, 부부 일방이 부부공동생활이나 부부공동재산의 형성·유지와 관련 없이 적극재산을 처분한 경우에는 그 재산을 사실심 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함할 수 있다고 보았습니다. 반대로 그 처분이 부부공동생활·공동재산 형성·유지와 관련된 경우에는 변론종결일에 존재하지 않는 재산을 분할 대상으로 삼을 수 없다고 판시했습니다. 재산 은닉·파탄 후 처분 사안에서도 대상재산 산정 기준을 검토해볼 수 있습니다.',
        takeaway: '재산 은닉 의심 + 파탄 후 처분 + 추적 결합 시 대상재산 산정·처분재산 포함·파탄 시점 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자가 숨긴 재산도 찾을 수 있나요?',
        answer:
          '<strong>가사소송법상 재산명시·재산조회 제도를 통해 은닉 재산을 파악할 수 있는 영역입니다.</strong> 거래 내역·등기부 자료를 정리.',
      },
      {
        question: '파탄 후에 몰래 처분한 재산은 분할 대상이 되나요?',
        answer:
          '<strong>공동재산 형성·유지와 무관하게 처분한 재산은 변론종결일에 보유한 것으로 보아 포함될 수 있는 영역입니다.</strong> 처분 시점·경위를 추적.',
      },
      {
        question: '파탄 시점은 어떻게 정하나요?',
        answer:
          '<strong>별거·관계 단절 정황 등을 종합해 혼인관계 파탄 시점을 판단하는 영역입니다.</strong> 별거 시작·연락 단절 자료를 정리.',
      },
      {
        question: '공동생활 비용으로 쓴 재산도 분할되나요?',
        answer:
          '<strong>처분이 부부공동생활·공동재산 형성·유지와 관련된 경우 변론종결일에 없는 재산을 분할 대상으로 삼지 않는 영역입니다.</strong> 사용처를 구분해 정리.',
      },
      {
        question: '재산분할 청구에 기한이 있나요?',
        answer:
          '<strong>이혼한 날부터 2년이 재산분할청구권 행사 기간인 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '부부 채무 분담', href: '/guide/divorce/divorce-marital-debt-allocation' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 5. defamation-online-exposure-personal-info-track ───
  {
    domain: 'defamation',
    slug: 'defamation-online-exposure-personal-info-track',
    keyword: '온라인 폭로글 신상공개',
    questionKeyword: '누군가 저에 관한 폭로글과 신상을 온라인에 올렸어요. 소수에게만 말하거나 보낸 경우에도 명예훼손이 되는지, 전파될 가능성만으로도 처벌 요건이 되는지 궁금합니다.',
    ctaKeyword: '온라인 폭로·신상공개 공연성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 폭로 명예훼손 — 5단계 공연성·전파 점검 | 로앤가이드',
      description:
        '누군가 폭로글·신상을 온라인에 올려 피해를 입었다면 공연성·전파가능성·증거 보존 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"누군가 저에 관한 일과 신상 정보를 온라인 게시판·단체방에 폭로해 퍼뜨린 상황입니다. 처음에는 소수만 본 것 같았는데, 그 글이 캡처되어 여기저기 옮겨지고 점점 더 많은 사람이 알게 되어 일상이 무너질 정도로 힘듭니다. 상대방은 \'몇 명한테만 말한 거라 명예훼손이 아니다\'라고 주장하는데, 정말 소수에게만 알린 경우엔 처벌 요건이 안 되는 건지, 전파될 가능성만으로도 문제가 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실 또는 허위사실을 적시해 사람의 명예를 훼손하는 행위를, 정보통신망법 제70조는 정보통신망을 이용한 명예훼손을 규율하는 영역입니다. 판례는 명예훼손죄의 \'공연성\'을 불특정 또는 다수인이 인식할 수 있는 상태로 보면서, 개별적으로 소수에게 사실을 적시했더라도 그 상대방이 불특정 또는 다수인에게 전파할 가능성이 있으면 공연성이 인정된다는 \'전파가능성 이론\'을 확립된 법리로 유지하고, 이는 정보통신망법상 명예훼손에도 동일하게 적용된다고 본 사례 흐름이 있는 영역입니다. 온라인 폭로 + 신상공개 + 소수 전파 결합은 \'공연성·전파가능성\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시·전파 정황 ② 공연성 ③ 사실/허위 ④ 피해 입증 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 정황 ② 공연성 ③ 사실 ④ 피해 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 폭로 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시·전파 정황·공연성·사실/허위·피해 입증·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시·전파 정황</strong> — 게시 위치·열람 범위·캡처·재전송 정황 정리.</li>\n<li><strong>② 공연성</strong> — 불특정·다수 인식 가능성, 소수 전파 시 전파가능성 검토.</li>\n<li><strong>③ 사실/허위</strong> — 적시 내용이 사실인지 허위인지 구분.</li>\n<li><strong>④ 피해 입증</strong> — 사회적 평가 저하·정신적 피해 입증 자료 정리.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 개별적으로 소수에게 사실을 적시했더라도 전파될 가능성이 있으면 공연성이 인정될 수 있는 영역. 전파가능성 이론은 정보통신망법상 명예훼손에도 동일하게 적용되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 캡처·증거 보존 (즉시)</strong> — 게시글·URL·캡처·재전송·열람 범위 정황 보존.</li>\n<li><strong>2단계 — 공연성·전파 정리 (1주)</strong> — 게시 위치·전파 경로·전파가능성 정황 정리.</li>\n<li><strong>3단계 — 사실/허위·피해 정리 (2주)</strong> — 적시 내용의 사실·허위 구분, 피해 입증 자료 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청·임시조치·형사 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·개인정보 분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 폭로·신상공개 공연성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 공연성·사실/허위·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>폭로 게시물 원본·URL·캡처 (적시 내용)</strong></li>\n<li><strong>게시 일시·열람 범위·재전송 자료 (공연성·전파)</strong></li>\n<li><strong>신상공개 내용·범위 자료</strong></li>\n<li><strong>적시 내용의 사실/허위 입증 자료</strong></li>\n<li><strong>피해 입증 자료 (정신적 고통·진료·상담 기록 등)</strong></li>\n<li><strong>삭제 요청·플랫폼 신고 기록</strong></li>\n<li><strong>고소장·진정서 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대방이 \'소수에게만 알렸다\'고 해도 그 상대방이 불특정·다수에게 전파할 가능성이 있으면 공연성이 인정될 수 있는 영역이므로, 캡처·재전송·열람 범위 등 전파 정황을 신속히 확보해두는 것이 핵심. 게시물은 삭제·수정 전에 URL과 함께 원본 형태로 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정·다수 인식 가능 상태인지, 소수 전파 시 전파가능성.</li>\n<li><strong>사실/허위</strong> — 적시 내용이 사실인지 허위인지.</li>\n<li><strong>신상공개</strong> — 신상 정보 공개에 따른 명예·사생활 침해 정도.</li>\n<li><strong>전파 경로</strong> — 캡처·재전송 등 확산 정황과 책임 범위.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공연성과 전파가능성 이론',
        summary:
          '대법원 2020도5813(대법원, 2020.11.19 선고) 영역에서 법원은 명예훼손죄의 구성요건인 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하고, 개별적으로 소수의 사람에게 사실을 적시했더라도 그 상대방이 불특정 또는 다수인에게 적시된 사실을 전파할 가능성이 있는 때에는 공연성이 인정된다는 이른바 전파가능성 이론을 확립된 법리로 보아 유지된다고 판단했습니다. 또한 이러한 법리는 정보통신망법상 정보통신망을 이용한 명예훼손의 공연성 판단에도 동일하게 적용된다고 판시했습니다. 온라인 폭로·신상공개 사안에서도 공연성·전파가능성을 검토해볼 수 있습니다.',
        takeaway: '온라인 폭로 + 신상공개 + 소수 전파 결합 시 공연성·전파가능성·증거 보존 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '소수에게만 알렸어도 명예훼손이 되나요?',
        answer:
          '<strong>그 상대방이 불특정·다수에게 전파할 가능성이 있으면 공연성이 인정될 수 있는 영역입니다.</strong> 전파 경로·열람 범위 자료를 정리.',
      },
      {
        question: '온라인 글도 공연성이 있나요?',
        answer:
          '<strong>전파가능성 이론은 정보통신망법상 명예훼손에도 동일하게 적용되는 영역입니다.</strong> 게시 위치·캡처·재전송 자료를 확보.',
      },
      {
        question: '신상까지 공개됐는데 어떻게 대응하나요?',
        answer:
          '<strong>명예·사생활 침해를 함께 검토하며 삭제 요청·고소·분쟁조정을 진행하는 영역입니다.</strong> 게시물 URL·캡처를 먼저 확보.',
      },
      {
        question: '글을 빨리 내리게 할 수 있나요?',
        answer:
          '<strong>플랫폼 삭제 요청·임시조치 등을 검토할 수 있는 영역입니다.</strong> 삭제 전 원본·URL을 보존.',
      },
      {
        question: '형사·민사를 같이 할 수 있나요?',
        answer:
          '<strong>형사 고소와 민사 손해배상·분쟁조정을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '공연성·전파가능성 기준', href: '/guide/defamation/defamation-publicity-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
      { label: '사생활 침해 대응', href: '/guide/defamation/defamation-privacy-invasion-track' },
    ],
  },

  // ─── 6. defamation-youtube-comment-insult-track ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-insult-track',
    keyword: '유튜브 댓글 모욕',
    questionKeyword: '유튜브 영상 댓글로 저를 모욕하고 비난하는 글이 달렸어요. 그게 단순한 의견·욕설인지, 사실을 적시한 명예훼손인지에 따라 대응이 다르다는데 어떻게 구분하나요?',
    ctaKeyword: '유튜브 댓글 모욕·명예훼손 구분 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '유튜브 댓글 모욕 — 5단계 사실·의견 구분 점검 | 로앤가이드',
      description:
        '유튜브 댓글로 모욕·비난을 당했다면 사실 적시 명예훼손인지 의견·모욕인지 구분 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 올린 유튜브 영상이나 다른 사람의 영상 댓글창에 저를 겨냥한 모욕적이고 경멸적인 글이 달려 마음이 크게 상한 상황입니다. 어떤 댓글은 단순한 욕설·비난처럼 보이고, 어떤 댓글은 마치 사실인 것처럼 저에 관한 이야기를 적어 놓아 사람들이 그대로 믿을까 걱정됩니다. 단순한 의견·욕설이면 명예훼손이 아니라는 말도 들리는데, 제 경우엔 무엇으로 대응할 수 있는지, 사실 적시와 의견을 어떻게 구분하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 사실·허위사실 적시 명예훼손을, 형법 제311조는 공연히 사람을 모욕한 모욕죄를 규율하는 영역입니다. 판례는 명예훼손이 성립하려면 사회적 평가를 침해할 정도의 구체적 사실 적시가 있어야 하고, 순수하게 의견만을 표명하는 경우에는 그 의견표명 자체만으로는 명예훼손이 성립하지 않으나 모욕적·경멸적 인신공격으로 인격권을 침해하면 다른 유형의 불법행위를 구성할 수 있으며, 어떤 표현이 사실 적시인지 의견 진술인지는 어휘의 통상 의미·전후 문맥 등 전체 흐름을 고려해 진위 판단 가능 여부에 따라 판단한다고 본 사례 흐름이 있는 영역입니다. 유튜브 댓글 + 모욕·비난 + 사실/의견 결합은 \'사실 적시 명예훼손·모욕 구분\' 다툼이 가능한 트랙입니다. 당사자라면 ① 댓글 분석 ② 사실/의견 ③ 명예훼손/모욕 ④ 피해 입증 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 분석 ② 구분 ③ 유형 ④ 피해 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유튜브 댓글 모욕 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 댓글 분석·사실/의견·명예훼손/모욕·피해 입증·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 댓글 분석</strong> — 댓글의 어휘·문맥·전체 흐름 분석.</li>\n<li><strong>② 사실/의견</strong> — 진위 판단이 가능한 사실 적시인지, 순수 의견인지 구분.</li>\n<li><strong>③ 명예훼손/모욕</strong> — 사실 적시 명예훼손인지, 경멸적 인신공격(모욕)인지 유형 정리.</li>\n<li><strong>④ 피해 입증</strong> — 사회적 평가 저하·정신적 피해 입증 자료 정리.</li>\n<li><strong>⑤ 대응</strong> — 작성자 특정·삭제 요청·고소·손해배상 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 순수한 의견표명 자체만으로는 명예훼손이 성립하지 않으나, 모욕적·경멸적 인신공격은 다른 유형의 불법행위(모욕 등)를 구성할 수 있는 영역. 사실 적시인지 의견인지는 전체 흐름과 진위 판단 가능성으로 구분하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글 캡처·증거 보존 (즉시)</strong> — 댓글 원문·URL·캡처·작성자 계정·일시 보존.</li>\n<li><strong>2단계 — 사실/의견 분석 (1주)</strong> — 진위 판단 가능한 사실 적시와 순수 의견 구분.</li>\n<li><strong>3단계 — 유형·피해 정리 (2주)</strong> — 명예훼손/모욕 유형 정리, 피해 입증 자료 정리.</li>\n<li><strong>4단계 — 작성자 특정·고소 (분쟁 시)</strong> — 작성자 특정 절차·삭제 요청·형사 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유튜브 댓글 모욕·명예훼손 구분 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실/의견·유형·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>댓글 원문·캡처·URL (적시 내용)</strong></li>\n<li><strong>작성자 계정·작성 일시 자료 (작성자 특정)</strong></li>\n<li><strong>댓글 전후 문맥·영상 정보 (전체 흐름)</strong></li>\n<li><strong>사실 적시·의견 구분 메모 (표현 분석)</strong></li>\n<li><strong>모욕·경멸적 표현 정리 (인신공격 정도)</strong></li>\n<li><strong>피해 입증 자료 (정신적 고통·진료·상담 기록 등)</strong></li>\n<li><strong>삭제 요청·신고·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 댓글이라도 진위 판단이 가능한 \'사실 적시\'인지, 경멸적 \'의견·욕설\'인지에 따라 명예훼손과 모욕으로 대응 방향이 달라질 수 있는 영역이므로 댓글을 유형별로 구분해 정리하는 것이 핵심. 댓글은 삭제되기 전에 원문·URL·작성자 계정을 함께 캡처해 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실/의견 구분</strong> — 진위 판단 가능한 사실 적시인지, 순수 의견인지.</li>\n<li><strong>명예훼손/모욕</strong> — 사실 적시 명예훼손인지, 경멸적 인신공격(모욕)인지.</li>\n<li><strong>공연성</strong> — 다수 열람 가능한 댓글창의 전파 정도.</li>\n<li><strong>작성자 특정</strong> — 익명 댓글 작성자의 특정 가능성.</li>\n<li><strong>피해 입증</strong> — 사회적 평가 저하·정신적 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시와 순수 의견 표명의 구분',
        summary:
          '대법원 2022다242649(대법원, 2025.06.26 선고) 영역에서 법원은 민법상 불법행위가 되는 명예훼손은 공연히 사실을 적시해 사회적으로 받는 객관적 평가를 침해하는 행위를 말하고, 의견·논평 형식이라도 의견의 근거가 되는 숨겨진 기초 사실 적시가 묵시적으로 포함되어 사회적 평가를 침해할 수 있으면 명예훼손이 될 수 있다고 보았습니다. 다만 순수하게 의견만을 표명하는 경우에는 그 형식·내용이 모욕적·경멸적 인신공격으로 인격권을 침해하면 다른 유형의 불법행위를 구성할 수 있음은 별론으로 하고 그 의견표명 자체만으로는 명예훼손이 성립하지 않으며, 어떤 표현이 사실 적시인지 의견 진술인지는 어휘의 통상 의미·전후 문맥 등 전체 흐름을 고려해 진위 결정이 가능한지에 따라 판단한다고 판시했습니다. 유튜브 댓글 사안에서도 사실/의견 구분과 유형을 검토해볼 수 있습니다.',
        takeaway: '유튜브 댓글 + 모욕·비난 + 사실/의견 결합 시 사실 적시 명예훼손·모욕 구분·피해 입증 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '단순한 욕설 댓글도 처벌되나요?',
        answer:
          '<strong>경멸적 인신공격은 모욕 등 별도 불법행위로 검토될 수 있는 영역입니다.</strong> 댓글 원문·전후 문맥을 정리.',
      },
      {
        question: '의견을 적은 댓글도 명예훼손인가요?',
        answer:
          '<strong>순수한 의견표명 자체만으로는 명예훼손이 성립하지 않으나 기초 사실이 묵시적으로 포함되면 달라질 수 있는 영역입니다.</strong> 사실·의견 부분을 구분.',
      },
      {
        question: '사실 적시와 의견은 어떻게 구분하나요?',
        answer:
          '<strong>어휘의 통상 의미·전후 문맥 등 전체 흐름을 고려해 진위 판단 가능 여부로 구분하는 영역입니다.</strong> 댓글 전체 맥락을 정리.',
      },
      {
        question: '익명 댓글 작성자를 찾을 수 있나요?',
        answer:
          '<strong>작성자 특정 절차를 통해 신원 확인을 검토할 수 있는 영역입니다.</strong> 계정·작성 일시 자료를 확보.',
      },
      {
        question: '댓글을 캡처만 해두면 되나요?',
        answer:
          '<strong>원문·URL·작성자 계정을 함께 보존하는 것이 중요한 영역입니다.</strong> 삭제 전 원본 형태로 보관.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '사실·의견 구분 기준', href: '/guide/defamation/defamation-fact-opinion-track' },
      { label: '모욕죄 대응', href: '/guide/defamation/defamation-insult-response-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 7. defamation-secondhand-trade-false-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-secondhand-trade-false-review-track',
    keyword: '중고거래 허위 후기',
    questionKeyword: '중고거래 상대방이 저에 관해 허위 후기·비방 글을 거래 플랫폼·커뮤니티에 올렸어요. 정보통신망법 명예훼손이 되는지, 비방 목적과 공익성은 어떻게 판단되는지 궁금합니다.',
    ctaKeyword: '중고거래 허위 후기 명예훼손 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고거래 허위 후기 — 5단계 비방 목적·공익성 점검 | 로앤가이드',
      description:
        '중고거래 상대가 허위 후기·비방 글을 올려 피해를 입었다면 허위성·비방 목적·공익성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고거래를 하다 분쟁이 생긴 상대방이, 마치 제가 사기꾼인 것처럼 거래 플랫폼 후기나 커뮤니티에 사실과 다른 글을 올려 퍼뜨린 상황입니다. 거래 내역을 보면 분명 사실이 아닌데, 그 글 때문에 다른 거래까지 막히고 주변에서 오해를 받아 억울합니다. 이런 허위 후기·비방 글이 정보통신망법 명예훼손이 되는지, 상대방이 \'정보 공유 목적이었다\'고 주장하면 처벌을 피하는 건지, 비방 목적과 공익성은 어떻게 판단되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 정보통신망법 제70조는 정보통신망을 이용해 사실 또는 거짓 사실을 드러내 다른 사람의 명예를 훼손한 행위를 규율하며, 허위사실 명예훼손은 \'사람을 비방할 목적\'을 요건으로 하는 영역입니다. 판례는 정보통신망법 제70조 제2항의 허위사실 명예훼손이 성립하려면 적시 사실이 허위이고 행위자가 그 허위임을 인식해야 하며, \'비방할 목적\'은 공공의 이익을 위한 것과 행위자의 주요 동기·목적을 비교해 판단하되 적시 사실이 공공의 이익에 관한 것이면 비방 목적은 원칙적으로 부정된다고 본 사례 흐름이 있는 영역입니다. 중고거래 후기 + 허위·비방 + 플랫폼 게시 결합은 \'허위성·비방 목적·공익성\' 다툼이 가능한 트랙입니다. 당사자라면 ① 게시 정황 ② 허위성 ③ 비방 목적 ④ 공익성 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 정황 ② 허위 ③ 목적 ④ 공익 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고거래 허위 후기 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시 정황·허위성·비방 목적·공익성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시 정황</strong> — 후기·비방 글의 게시 위치·내용·전파 정황 정리.</li>\n<li><strong>② 허위성</strong> — 적시 사실의 허위 여부와 거래 내역 등 객관 자료 대조.</li>\n<li><strong>③ 비방 목적</strong> — 작성자의 주요 동기·목적이 비방인지 검토.</li>\n<li><strong>④ 공익성</strong> — 소비자 정보 등 공공 이익 관련성과 비방 목적의 관계.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 정보통신망법 허위사실 명예훼손은 적시 사실이 허위이고 그 허위임을 인식해야 성립하고, 적시 사실이 공공의 이익에 관한 것이면 비방 목적이 원칙적으로 부정될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·거래 자료 보존 (즉시)</strong> — 후기·비방 글 원본·URL·캡처, 거래 내역·대화 자료 보존.</li>\n<li><strong>2단계 — 허위성 정리 (1주)</strong> — 적시 내용을 거래 내역 등 객관 자료와 대조해 허위성 정리.</li>\n<li><strong>3단계 — 비방 목적·공익성 정리 (2주)</strong> — 작성 동기·목적, 공공 이익 관련성 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청·형사 고소 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고거래 허위 후기 명예훼손 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 허위성·비방 목적·공익성 갈래입니다.</strong></p>\n<ul>\n<li><strong>후기·비방 글 원본·URL·캡처 (적시 내용)</strong></li>\n<li><strong>거래 내역·결제·운송장 자료 (허위성 대조)</strong></li>\n<li><strong>거래 대화·채팅 기록 (사실관계)</strong></li>\n<li><strong>전파 범위·열람 자료 (확산 정황)</strong></li>\n<li><strong>비방 목적·작성 동기 정황 자료</strong></li>\n<li><strong>피해 입증 자료 (거래 차단·평판 피해 등)</strong></li>\n<li><strong>삭제 요청·신고·고소장 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정보통신망법 허위사실 명예훼손은 적시 내용이 허위이고 작성자가 그 허위임을 인식했어야 성립할 수 있는 영역이므로, 거래 내역·대화 기록 등 사실관계를 보여주는 객관 자료로 허위성을 입증하는 것이 핵심. 적시 내용이 공공 이익에 관한 것인지에 따라 비방 목적 판단이 달라질 수 있는 점도 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위성</strong> — 적시 사실이 허위인지, 작성자가 허위임을 인식했는지.</li>\n<li><strong>비방 목적</strong> — 작성자의 주요 동기·목적이 비방인지.</li>\n<li><strong>공익성</strong> — 소비자 정보 등 공공 이익 관련성과 비방 목적의 관계.</li>\n<li><strong>공연성</strong> — 다수 열람 가능한 게시 환경의 전파 정도.</li>\n<li><strong>피해 입증</strong> — 거래 차단·평판 저하 등 피해의 입증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위사실 명예훼손의 허위 인식과 비방 목적·공익성',
        summary:
          '대법원 2020도15738(대법원, 2022.04.28 선고) 영역에서 법원은 정보통신망법 제70조 제2항의 허위사실 적시 명예훼손이 성립하려면 피고인이 적시하는 사실이 허위이고 그 사실이 허위임을 인식해야 하며, 적시된 사실이 거짓인지는 그 내용 전체의 취지를 살펴 중요한 부분이 객관적 사실과 합치되는지로 판단한다고 보았습니다. 또한 \'사람을 비방할 목적\'은 공공의 이익을 위한 것과는 행위자의 주요한 동기·목적을 비교해 상충 관계에 있고, 적시한 사실이 공공의 이익에 관한 것인 경우에는 특별한 사정이 없는 한 비방할 목적은 부정된다고 판시했습니다. 중고거래 허위 후기 사안에서도 허위 인식·비방 목적·공익성을 검토해볼 수 있습니다.',
        takeaway: '중고거래 후기 + 허위·비방 + 플랫폼 게시 결합 시 허위성·허위 인식·비방 목적·공익성 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사실과 다른 후기를 올리면 명예훼손이 되나요?',
        answer:
          '<strong>적시 내용이 허위이고 작성자가 허위임을 인식했으면 허위사실 명예훼손이 검토되는 영역입니다.</strong> 거래 내역으로 허위성을 입증.',
      },
      {
        question: '상대가 \'정보 공유 목적\'이라고 하면 처벌이 안 되나요?',
        answer:
          '<strong>적시 사실이 공공 이익에 관한 것이면 비방 목적이 원칙적으로 부정될 수 있는 영역입니다.</strong> 작성 동기·목적 정황을 정리.',
      },
      {
        question: '허위성은 어떻게 입증하나요?',
        answer:
          '<strong>거래 내역·대화 기록 등 객관 자료로 적시 내용의 허위 여부를 다투는 영역입니다.</strong> 결제·운송장·채팅 자료를 확보.',
      },
      {
        question: '플랫폼 후기도 명예훼손이 되나요?',
        answer:
          '<strong>다수가 열람 가능한 게시 환경의 전파 정도가 공연성 판단에서 고려되는 영역입니다.</strong> 게시 위치·열람 범위 자료를 정리.',
      },
      {
        question: '글을 내리게 하고 배상도 받을 수 있나요?',
        answer:
          '<strong>삭제 요청과 함께 형사 고소·민사 손해배상을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '후기·리뷰 명예훼손 대응', href: '/guide/defamation/defamation-review-response-track' },
      { label: '비방 목적·공익성 판단', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 8. defamation-public-interest-report-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-public-interest-report-falsely-accused-defense',
    keyword: '공익 제보 명예훼손 무고',
    questionKeyword: '부정·비리 의혹을 공익적으로 제보하고 알렸는데, 상대방이 저를 명예훼손으로 고소했어요. 진실하고 공공의 이익을 위한 사실 적시면 위법성이 없어진다는데 제 경우는 어떻게 다툴 수 있나요?',
    ctaKeyword: '공익 제보 명예훼손 위법성조각 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '공익 제보 명예훼손 방어 — 5단계 진실성·공익성 점검 | 로앤가이드',
      description:
        '공익적으로 의혹을 제보했다가 명예훼손 혐의를 받고 있다면 진실성·공공의 이익·위법성조각 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부정·비리 의혹을 알게 되어 이를 바로잡고 여러 사람의 이익을 지키려는 마음에서 관련 사실을 제보·공유한 사람입니다. 그런데 의혹을 받은 상대방이 \'명예를 훼손당했다\'며 저를 고소했고, 사실과 다르게 신고되었다고 느껴 당황스럽습니다. 제 글은 객관적 자료에 근거했고 표현도 절제했으며 공유 범위도 제한적이었는데, 사실을 적시한 제보도 명예훼손이 되는지, 진실하고 공공의 이익을 위한 것이면 위법성이 없어진다는 말이 제 경우에도 적용되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 사람의 명예를 훼손한 행위를 규율하고, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하는 영역입니다. 판례는 적시 내용이 대체로 객관적 사실과 일치하고 배포·전달 상대방의 범위가 제한되며 표현 방법에 비방적 표현이 없는 등의 사정이 있으면 오로지 공공의 이익을 위해 진실한 사실을 적시한 경우로서 형법 제310조의 위법성조각사유에 해당할 수 있다고 본 사례 흐름이 있는 영역입니다. 공익 제보 + 사실 적시 + 명예훼손 고소 결합은 \'진실성·공공의 이익 위법성조각\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 적시 내용 ② 진실성 ③ 공익 목적 ④ 표현 방법 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 진실 ③ 공익 ④ 방법 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공익 제보 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·진실성·공익 목적·표현 방법·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 제보·공유한 내용과 근거 자료의 일치 여부 정리.</li>\n<li><strong>② 진실성</strong> — 내용 중요 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>③ 공익 목적</strong> — 부정·비리 시정 등 오로지 공공의 이익을 위한 것인지.</li>\n<li><strong>④ 표현 방법</strong> — 배포 상대방 범위·표현의 절제·비방적 표현 유무.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 위법성조각 주장·진술 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명예훼손 혐의를 받고 있다면 적시 내용이 진실한 사실로서 오로지 공공의 이익에 관한 때에는 위법성이 조각될 수 있는 영역. 근거 자료·공익 목적·제한된 배포 범위·절제된 표현을 정리하는 것이 방어의 출발점인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 제보·근거 자료 보존 (즉시)</strong> — 제보 글·근거 자료·배포 경위·상대방 범위 자료 보존.</li>\n<li><strong>2단계 — 진실성·근거 정리 (1주)</strong> — 적시 내용과 근거 자료를 대조해 중요 부분의 진실성 정리.</li>\n<li><strong>3단계 — 공익성·표현 방법 정리 (2주)</strong> — 공공 이익 목적·배포 범위·표현의 절제 정리.</li>\n<li><strong>4단계 — 위법성조각 주장 (조사·고소 시)</strong> — 형법 제310조 위법성조각 주장·진술 일관성 정리.</li>\n<li><strong>5단계 — 조정·형사·민사 대응 (분쟁 시)</strong> — 조사 대응 또는 손해배상 다툼 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공익 제보 명예훼손 위법성조각 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·표현 방법 갈래입니다.</strong></p>\n<ul>\n<li><strong>제보·공유 글 원본·게시 일시 (적시 내용)</strong></li>\n<li><strong>의혹 근거 자료 (사실 합치 입증)</strong></li>\n<li><strong>공익 목적·시정 의도 정황 자료</strong></li>\n<li><strong>배포·전달 상대방 범위 자료 (제한성)</strong></li>\n<li><strong>표현 방법·맥락 자료 (비방적 표현 유무)</strong></li>\n<li><strong>상대방 고소장·진정서 사본</strong></li>\n<li><strong>진술 요지·소명 자료 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혐의를 받고 있다면 제보 내용의 중요 부분이 객관적 사실과 합치되고, 오로지 공공의 이익을 위한 목적이었음을 보여주는 근거 자료를 정리하는 것이 핵심. 배포 상대방의 범위가 제한적이었고 비방적 표현이 없었다는 점도 함께 정리해두면 위법성조각 주장에 활용될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 적시 내용의 중요 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>공익 목적</strong> — 오로지 공공의 이익을 위한 것인지, 사적 감정이 주된 동기인지.</li>\n<li><strong>표현 방법</strong> — 배포 상대방 범위·표현의 절제·비방적 표현 유무.</li>\n<li><strong>위법성조각</strong> — 진실·공익 결합 시 형법 제310조 적용 여부.</li>\n<li><strong>절차 대응</strong> — 조사·고소 절차에서 진술의 일관성과 소명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공익 목적 진실 사실 적시의 위법성조각',
        summary:
          '대법원 2004도1388(대법원, 2005.07.15 선고) 영역에서 법원은 아파트 동대표인 피고인이 자신에 대한 부정비리 의혹을 해명하기 위해 그 의혹제기자가 명예훼손죄로 입건된 사실 등을 기재한 문서를 입주민들에게 배포한 사안에서, 문서에 기재된 내용이 대체로 객관적 사실과 일치하고 배포가 이루어진 상대방의 범위가 제한되며 그 표현방법에도 의혹제기자를 비방하는 표현이 없는 점 등 제반 사정에 비추어, 위 문서 배포행위가 오로지 공공의 이익을 위하여 진실한 사실을 적시한 경우로서 형법 제310조의 위법성조각사유에 해당한다고 판시했습니다. 공익 제보 사안에서도 진실성·공익성·표현 방법을 검토해볼 수 있습니다.',
        takeaway: '공익 제보 + 사실 적시 + 명예훼손 고소 결합 시 진실성·공익 목적·표현 방법·위법성조각 검토 영역 — 변호사 상담·조사 대응 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사실을 제보한 것뿐인데 명예훼손이 되나요?',
        answer:
          '<strong>사실 적시도 명예훼손이 될 수 있으나 진실·공익 목적이면 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '공공의 이익은 어떻게 인정되나요?',
        answer:
          '<strong>부정·비리 시정 등 공공 이익 목적인지, 사적 감정·보복인지가 함께 심사되는 영역입니다.</strong> 제보 경위·목적 정황을 정리.',
      },
      {
        question: '일부 표현이 과장됐으면 진실성이 부정되나요?',
        answer:
          '<strong>중요한 부분이 객관적 사실과 합치되면 세부 차이·과장이 있어도 진실성이 인정될 수 있는 영역입니다.</strong> 근거 자료와 전체 맥락을 정리.',
      },
      {
        question: '배포 범위가 좁으면 유리한가요?',
        answer:
          '<strong>배포 상대방 범위가 제한되고 비방적 표현이 없는 점이 위법성 판단에서 고려되는 영역입니다.</strong> 배포 범위·표현 자료를 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>위법성조각(진실·공익) 주장과 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
      { label: '공공의 이익 위법성조각', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/defamation-true-fact-defense-track' },
      { label: '공익 제보·내부고발', href: '/guide/defamation/defamation-whistleblower-track' },
      { label: '명예훼손 합의·처분', href: '/guide/defamation/defamation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-debt-qualified-acceptance-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-debt-qualified-acceptance-track',
    keyword: '상속채무 한정승인',
    questionKeyword: '돌아가신 분이 빚을 남기셨는데 정확한 규모를 몰라요. 한정승인을 하려는데 채무가 더 많다는 걸 뒤늦게 안 경우 기간 연장이 되는지, 재산목록 누락이 단순승인으로 처리되는지 막막합니다.',
    ctaKeyword: '상속채무 한정승인 절차·재산목록 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '상속채무 한정승인 — 5단계 기한·재산목록 점검 | 로앤가이드',
      description:
        '상속채무가 얼마인지 몰라 한정승인을 고민한다면 3개월 기한·특별한정승인·재산목록 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 분이 빚을 남기셨다는 사실은 알았지만 정확히 얼마인지, 재산보다 많은지 가늠이 되지 않아 상속을 받아야 할지 포기해야 할지 막막한 상황입니다. 한정승인을 하면 물려받은 재산 한도에서만 빚을 갚는다는데, 신고 기한이 언제까지인지, 채무가 더 많다는 걸 뒤늦게 알게 된 경우에도 구제받을 수 있는지, 재산목록을 빠뜨리면 오히려 빚을 전부 떠안게 되는 건 아닌지 도무지 정리가 되지 않아 막막한 상태입니다." 민법 제1019조 제1항은 상속인이 상속 개시를 안 날부터 3개월 내에 단순승인·한정승인·포기를 하도록 정하고, 제3항은 상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 알지 못한 경우 그 사실을 안 날부터 3개월 내 특별한정승인을 할 수 있도록 규정하며, 제1026조 제3호는 한정승인 후 고의로 재산목록에 기입하지 않으면 단순승인으로 의제한다고 정하는 영역입니다. 판례는 \'중대한 과실\'은 조금만 주의를 기울였다면 초과 사실을 알 수 있었음에도 게을리한 것을 뜻하고 그 증명책임은 상속인에게 있으며, \'고의로 재산목록에 기입하지 아니한 때\'는 상속채권자를 해할 의사로 상속재산을 기입하지 않은 것을 뜻한다고 본 사례 흐름이 있는 영역입니다. 상속채무 + 한정승인 + 재산목록 결합은 \'기한·특별한정승인·재산목록\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산·채무 조사 ② 기한 ③ 한정승인 ④ 재산목록 ⑤ 청산 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 조사 ② 기한 ③ 한정승인 ④ 목록 ⑤ 청산 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상속채무 한정승인 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·채무 조사·기한·한정승인·재산목록·청산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·채무 조사</strong> — 안심상속 원스톱 등으로 적극재산·채무 파악.</li>\n<li><strong>② 기한 (3개월 내)</strong> — 상속 개시를 안 날부터 3개월 한정승인·포기 기한 관리.</li>\n<li><strong>③ 한정승인</strong> — 단순한정승인·특별한정승인(초과 사실 안 날부터 3개월) 선택.</li>\n<li><strong>④ 재산목록</strong> — 상속재산 목록을 정확히 작성(고의 누락 시 단순승인 의제).</li>\n<li><strong>⑤ 청산</strong> — 신문 공고·배당 변제 등 청산 절차 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 특별한정승인의 \'중대한 과실\' 부존재 증명책임은 상속인에게 있고, 한정승인 후 상속채권자를 해할 의사로 재산을 목록에 기입하지 않으면 단순승인으로 의제될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·채무 조회 (즉시)</strong> — 안심상속 원스톱·금융조회로 재산·채무 파악.</li>\n<li><strong>2단계 — 승인/포기 결정 (3개월 내)</strong> — 한정승인·상속포기 여부 결정, 기한 관리.</li>\n<li><strong>3단계 — 한정승인 신고 (가정법원)</strong> — 재산목록을 첨부해 한정승인 신고(필요 시 특별한정승인).</li>\n<li><strong>4단계 — 채권자 공고·신고 (수리 후)</strong> — 한정승인 공고·채권신고 최고 진행.</li>\n<li><strong>5단계 — 청산·배당 변제 (공고 후)</strong> — 상속재산 한도에서 채권자에게 배당 변제.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속채무 한정승인 절차·재산목록 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 조사·신고·청산 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·기본증명서 (상속인 확정)</strong></li>\n<li><strong>피상속인 사망진단서·제적등본</strong></li>\n<li><strong>안심상속 원스톱 조회 결과 (재산·채무)</strong></li>\n<li><strong>상속재산 목록 (정확한 기입)</strong></li>\n<li><strong>채무 내역·독촉장·대출 자료</strong></li>\n<li><strong>한정승인 신고서·진술서</strong></li>\n<li><strong>초과 사실 인지 시점 입증 자료 (특별한정승인 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한정승인은 상속 개시를 안 날부터 3개월이 기본 기한이고, 채무 초과 사실을 중대한 과실 없이 뒤늦게 안 경우에는 그 사실을 안 날부터 3개월 내 특별한정승인을 검토할 수 있는 영역. 재산목록은 빠짐없이 정확히 작성하는 것이 핵심으로, 고의로 누락하면 단순승인으로 의제될 수 있으니 조회 결과를 근거로 꼼꼼히 기입해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>3개월 기한</strong> — 상속 개시를 안 날부터 3개월 기한 도과 여부.</li>\n<li><strong>중대한 과실</strong> — 특별한정승인의 \'중대한 과실\' 유무와 증명책임(상속인).</li>\n<li><strong>초과 사실 인지 시점</strong> — 상속채무 초과 사실을 안 시점.</li>\n<li><strong>재산목록 누락</strong> — 고의로 재산을 기입하지 않아 단순승인으로 의제되는지.</li>\n<li><strong>청산 절차</strong> — 공고·채권신고·배당 변제의 적정성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (한정승인·상속포기 신고)</strong></li>\n<li><strong>정부24 안심상속 원스톱 서비스</strong></li>\n<li><strong>대법원 전자소송 (신고 접수)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특별한정승인의 중대한 과실과 재산목록 고의 누락',
        summary:
          '대법원 2015다59801(대법원, 2021.01.28 선고) 영역에서 법원은 민법 제1019조 제3항의 \'상속채무가 상속재산을 초과하는 사실을 중대한 과실로 알지 못한다\'는 것은 상속인이 조금만 주의를 기울였다면 초과 사실을 알 수 있었음에도 게을리해 알지 못한 것을 뜻하고, 중대한 과실 없이 3개월 내에 알지 못했다는 점에 대한 증명책임은 상속인에게 있다고 보았습니다. 또한 민법 제1026조 제3호의 \'고의로 재산목록에 기입하지 아니한 때\'는 한정승인을 할 때 상속재산을 은닉해 상속채권자를 해할 의사로 재산목록에 기입하지 않는 것을 뜻한다고 판시했습니다. 상속채무 한정승인 사안에서도 기한·증명책임·재산목록 작성을 검토해볼 수 있습니다.',
        takeaway: '상속채무 + 한정승인 + 재산목록 결합 시 3개월 기한·특별한정승인 증명책임·재산목록 정확 기입 검토 영역 — 변호사 상담·가정법원 신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '한정승인은 언제까지 해야 하나요?',
        answer:
          '<strong>상속 개시를 안 날부터 3개월 내가 기본 기한인 영역입니다.</strong> 기한 도과 전 재산·채무 조회를 진행.',
      },
      {
        question: '빚이 더 많다는 걸 뒤늦게 알았는데 방법이 없나요?',
        answer:
          '<strong>중대한 과실 없이 초과 사실을 뒤늦게 안 경우 그 사실을 안 날부터 3개월 내 특별한정승인을 검토하는 영역입니다.</strong> 인지 시점 자료를 정리.',
      },
      {
        question: '\'중대한 과실이 없다\'는 건 누가 입증하나요?',
        answer:
          '<strong>중대한 과실 없이 기간 내에 알지 못했다는 점의 증명책임은 상속인에게 있는 영역입니다.</strong> 조회·확인 경위를 정리.',
      },
      {
        question: '재산목록을 빠뜨리면 어떻게 되나요?',
        answer:
          '<strong>상속채권자를 해할 의사로 고의로 기입하지 않으면 단순승인으로 의제될 수 있는 영역입니다.</strong> 조회 결과를 근거로 정확히 기입.',
      },
      {
        question: '한정승인 후 빚은 어떻게 갚나요?',
        answer:
          '<strong>공고·채권신고를 거쳐 상속재산 한도에서 배당 변제하는 청산 절차를 진행하는 영역입니다.</strong> 채권자 목록·재산을 정리.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-qualified-acceptance-documents' },
      { label: '특별한정승인 요건', href: '/guide/inheritance/inheritance-special-qualified-acceptance-track' },
      { label: '상속포기 신고 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement-track' },
      { label: '안심상속 원스톱 조회', href: '/guide/inheritance/inheritance-asset-inquiry-track' },
    ],
  },

  // ─── 10. traffic-accident-motorcycle-delivery-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-motorcycle-delivery-fault-track',
    keyword: '이륜차 배달 사고 과실',
    questionKeyword: '배달 이륜차로 가다 상대 차량과 쌍방과실 사고가 났어요. 제 차 수리비 중 자기부담금을 냈는데, 상대 과실분만큼은 상대에게 따로 받을 수 있는지, 보험사 대위와 어떻게 정리되는지 막막합니다.',
    ctaKeyword: '이륜차 배달 사고 과실·자기부담금 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '이륜차 배달 사고 — 5단계 과실·자기부담금 점검 | 로앤가이드',
      description:
        '배달 이륜차 쌍방과실 사고로 자기부담금을 냈다면 과실 비율·자기부담금·보험자대위 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배달 일을 하다 이륜차로 이동하던 중 상대 차량과 부딪치는 쌍방과실 사고가 발생한 상황입니다. 제 차량 수리비는 자기차량손해보험으로 처리했지만, 자기부담금을 제 돈으로 내고 나니 억울한 마음이 듭니다. 사고가 양쪽 모두의 과실로 났다면, 상대방 과실 비율만큼은 제가 부담한 자기부담금을 상대에게 따로 받을 수 있는 건지, 아니면 보험사가 이미 다 정리한 건지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제750조는 고의·과실로 인한 위법행위로 타인에게 손해를 가한 자의 배상책임을, 민법 제396조·제763조는 과실상계를, 상법 제682조는 보험자대위를 규정하는 영역입니다. 판례는 자기차량손해보험 피보험자와 제3자의 과실이 경합한 사고에서 보험자가 자기부담금을 공제한 보험금을 선처리 방식으로 전부 지급하고 피보험자의 손해배상청구권을 대위하더라도, 그 대위 범위는 보험금에 대해 제3자의 책임비율에 상응하는 금액에 그치고, 피보험자는 나머지 부분, 즉 자기부담금 중 제3자의 책임비율에 상응하는 금액을 제3자에게 별도로 청구할 수 있다고 본 사례 흐름이 있는 영역입니다. 이륜차 배달 + 쌍방과실 + 자기부담금 결합은 \'과실 비율·자기부담금·보험자대위\' 정리가 필요한 트랙입니다. 당사자라면 ① 사고 경위 ② 과실 비율 ③ 자기차량보험 ④ 자기부담금 ⑤ 별도 청구 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 경위 ② 과실 ③ 보험 ④ 부담금 ⑤ 청구 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이륜차 배달 사고 과실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 경위·과실 비율·자기차량보험·자기부담금·별도 청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 경위</strong> — 충돌 지점·신호·진행 방향·속도 등 경위 정리.</li>\n<li><strong>② 과실 비율</strong> — 이륜차·상대 차량 양측 과실 비율 검토.</li>\n<li><strong>③ 자기차량보험</strong> — 자기차량손해보험금 선처리·자기부담금 공제 내역 확인.</li>\n<li><strong>④ 자기부담금</strong> — 본인이 부담한 자기부담금 중 상대 책임비율분 정리.</li>\n<li><strong>⑤ 별도 청구</strong> — 보험자대위 범위 밖에서 상대에게 별도 청구 가능 여부 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 보험자대위 범위는 보험금에 대해 제3자의 책임비율에 상응하는 금액에 그치고, 피보험자는 자기부담금 중 제3자의 책임비율에 상응하는 금액을 별도로 청구할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·손해보험협회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·증거 보존 (즉시)</strong> — 블랙박스·CCTV·현장 사진·상대 차량 정보 확보.</li>\n<li><strong>2단계 — 과실 비율 정리 (1~2주)</strong> — 사고 경위·신호·진행 방향으로 양측 과실 비율 정리.</li>\n<li><strong>3단계 — 보험 처리·자기부담금 확인 (보험 처리 시)</strong> — 자기차량손해보험금·자기부담금 공제 내역 확인.</li>\n<li><strong>4단계 — 보험자대위 범위 정리 (대위 시)</strong> — 보험사 대위 범위와 자기부담금 잔여 청구분 구분.</li>\n<li><strong>5단계 — 별도 청구·합의 (정산 시)</strong> — 자기부담금 중 상대 책임비율분 별도 청구·합의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">이륜차 배달 사고 과실·자기부담금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·과실·자기부담금 갈래입니다.</strong></p>\n<ul>\n<li><strong>블랙박스·CCTV 영상 (사고 경위)</strong></li>\n<li><strong>현장 사진·도로 상황 자료 (충돌 지점·신호)</strong></li>\n<li><strong>교통사고 사실확인원·사고 접수 자료</strong></li>\n<li><strong>자기차량손해보험 증권·보험금 지급 내역</strong></li>\n<li><strong>자기부담금 납부 영수증·공제 내역</strong></li>\n<li><strong>과실 비율 산정 자료·수리비 견적서</strong></li>\n<li><strong>상대 차량·상대 보험사 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 쌍방과실 사고에서 자기차량손해보험으로 처리하며 낸 자기부담금 중 상대 과실 비율에 상응하는 금액은 보험자대위 범위 밖에 남아 상대에게 별도로 청구할 수 있는 영역이므로, 자기부담금 납부 내역과 과실 비율 자료를 함께 정리하는 것이 핵심. 보험사 대위 범위와 본인이 직접 청구할 수 있는 부분을 구분해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>과실 비율</strong> — 이륜차·상대 차량 양측 과실 비율.</li>\n<li><strong>자기부담금</strong> — 본인이 부담한 자기부담금의 정산·반환 범위.</li>\n<li><strong>보험자대위 범위</strong> — 보험사가 대위하는 범위와 잔여 청구분의 구분.</li>\n<li><strong>별도 청구</strong> — 자기부담금 중 상대 책임비율분의 별도 청구 가능 여부.</li>\n<li><strong>손해 범위</strong> — 차량 수리비·치료비 등 손해 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 (과실·보상 안내)</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁 상담)</strong></li>\n<li><strong>경찰 교통사고 접수·조사 (112)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방과실 사고의 자기부담금과 보험자대위 범위',
        summary:
          '대법원 2022다287284(대법원, 2026.01.29 선고) 영역에서 법원은 자기차량손해보험 피보험자와 제3자의 과실이 경합한 교통사고로 자기차량손해가 발생해 보험자가 손해액에서 자기부담금을 공제한 보험금을 선처리 방식으로 전부 지급하고 피보험자의 제3자에 대한 손해배상청구권을 대위하는 경우, 그 대위 범위는 지급한 보험금에 대해 제3자의 책임비율에 상응하여 청구할 수 있는 금액이라고 보았습니다. 나아가 피보험자는 자기부담금 중 제3자의 책임비율에 상응하는 금액을 제3자에게 별도로 청구할 수 있다고 판시했습니다. 이륜차 배달 쌍방과실 사고 사안에서도 자기부담금·보험자대위 범위를 검토해볼 수 있습니다.',
        takeaway: '이륜차 배달 + 쌍방과실 + 자기부담금 결합 시 과실 비율·자기부담금 별도 청구·보험자대위 범위 검토 영역 — 변호사 상담·보험·합의 검토 권장.',
      },
    ],
    faq: [
      {
        question: '쌍방과실인데 자기부담금은 제가 다 부담하나요?',
        answer:
          '<strong>자기부담금 중 상대 책임비율에 상응하는 금액은 상대에게 별도로 청구할 수 있는 영역입니다.</strong> 납부 내역·과실 비율 자료를 정리.',
      },
      {
        question: '보험사가 대위했는데 제가 또 청구할 수 있나요?',
        answer:
          '<strong>보험자대위 범위는 보험금에 대한 상대 책임비율분에 그치고 자기부담금 잔여분은 별도로 남는 영역입니다.</strong> 대위 범위와 잔여 청구분을 구분.',
      },
      {
        question: '과실 비율은 어떻게 정해지나요?',
        answer:
          '<strong>충돌 지점·신호·진행 방향·양측 주의의무 위반 정도를 종합해 과실 비율을 검토하는 영역입니다.</strong> 블랙박스·CCTV 자료를 확보.',
      },
      {
        question: '배달 중 사고면 처리가 달라지나요?',
        answer:
          '<strong>업무용·이륜차 보험의 보장 범위와 적용 여부를 함께 점검하는 영역입니다.</strong> 가입 보험 증권을 확인.',
      },
      {
        question: '자기부담금 청구는 어디에 하나요?',
        answer:
          '<strong>상대 책임비율분은 상대방·상대 보험사에 청구를 검토하는 영역입니다.</strong> 납부 영수증·과실 자료를 함께 정리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio-track' },
      { label: '이륜차 사고 대응', href: '/guide/traffic-accident/traffic-accident-motorcycle-track' },
      { label: '자기부담금·보험자대위', href: '/guide/traffic-accident/traffic-accident-deductible-subrogation-track' },
      { label: '치료비·손해 산정', href: '/guide/traffic-accident/traffic-accident-damages-calculation' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
    ],
  },
];
