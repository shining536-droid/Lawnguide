import { SpokePage } from '../spoke-pages';

// batch71 divorce-inheritance-child-support — 9개 (2026-05-21)
//
// 고유 존재 이유:
// 1. divorce-international-marriage-cultural-conflict-track —
//    다문화 결혼(베트남·중국 등) 후 문화·언어 소통 불가로 협의이혼·위자료를 진행하는 트랙
//    (foreign-spouse-consensual 의 절차 트랙과 다른 "문화 갈등 + 통역 + 본국 송환 우려" 분쟁 분기).
// 2. divorce-stepfamily-adopted-child-custody-track —
//    재혼 가정에서 친양자 입양 후 이혼 시 양친·친생부모 권리 회복과 양육권 다툼 트랙
//    (step-child-custody-claim 과 다른 "친양자 입양 + 친생부모 권리 회복" 분기).
// 3. divorce-domestic-violence-emergency-shelter-immediate-divorce-track —
//    가정폭력 피해자 쉼터 입소 + 임시조치 + 접근금지 명령으로 긴급 이혼을 병행하는 트랙
//    (violent-spouse-emergency-divorce 와 다른 "쉼터 입소 + 가정폭력처벌법 트랙" 분기).
// 4. divorce-spouse-startup-cofounder-equity-asset-division-track —
//    배우자가 스타트업 공동창업자인 경우 미상장 지분·스톡옵션·기여도 평가 재산분할 트랙
//    (spouse-shareholder / employee-stock-option 과 다른 "공동창업자 + 미상장 지분 평가" 분기).
// 5. inheritance-overseas-foreign-asset-claim-track —
//    피상속인의 해외 자산(미국 부동산·일본 주식 등) 상속·국제 상속세·이중과세조약 트랙
//    (국내 상속재산 분할과 다른 신규 분기).
// 6. inheritance-elder-care-decade-contribution-share-track —
//    10년 이상 부모 간병한 자녀의 기여분을 다른 상속인의 반대 속에서 인정받는 트랙
//    (special-gift-contribution-claim 과 다른 "장기 간병 + 기여분 비율 다툼" 분기).
// 7. inheritance-pre-death-gift-recovery-tax-claim-track —
//    사망 10년 전 사전 증여된 자산에 대한 유류분 반환·증여세 트랙
//    (yuryubun-special-receipt-deduction 과 다른 "사전 증여 + 10년 시효 + 증여세" 분기).
// 8. child-support-step-parent-adoption-cancel-pre-existing-track —
//    재혼 후 친양자 입양 → 이혼·파양 후 친생부모의 양육비 책임 회복 트랙
//    (cs 도메인 신규 — 친양자 파양 후 친생부모 책임 회복 분기).
// 9. child-support-college-tuition-adult-child-extension-track —
//    자녀 만 19세 도달 후 대학 재학·취업 전까지 양육비 연장 협의·심판 트랙
//    (cs 도메인 신규 — 성년 자녀 양육비 연장 분기).

export const spokesBatch71DivorceInheritCs: SpokePage[] = [
  // ─── 1. divorce-international-marriage-cultural-conflict-track ───
  {
    domain: 'divorce',
    slug: 'divorce-international-marriage-cultural-conflict-track',
    keyword: '다문화 결혼 문화차이 협의이혼',
    questionKeyword: '베트남 출신 배우자랑 결혼했는데 문화 차이가 너무 커서 못 살겠어요. 협의이혼과 위자료가 가능한가요?',
    ctaKeyword: '다문화 결혼 협의이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다문화 결혼 협의이혼 — 5단계 문화 갈등·통역 3트랙 | 로앤가이드',
      description:
        '다문화 결혼 후 문화 차이·언어 소통 불가로 협의이혼과 위자료를 진행하는 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 한국인 남편이고 배우자는 베트남 출신이에요. 결혼 3년 차에 문화 차이와 언어 소통 불가로 일상 다툼이 잦아져 협의이혼을 하기로 했는데 \'배우자가 한국어가 서툴러 통역이 필요한 상황\'이고 본국 송환 우려로 위자료·생활 정착 자금도 챙겨야 합니다." 다문화가족지원법은 다문화가족(국제결혼 가족) 지원·상담·통역 서비스를 제공하는 영역. ① 협의이혼 의사 확인 기일에 통역 지원 ② 본국 신분 자료 번역·공증 ③ 자녀가 있을 시 양육자·양육비 합의 ④ 위자료·재산분할 ⑤ 체류·국적 영향 5가지 트랙이 핵심. \"단순 문화 차이\"만으로는 위자료 인정이 어렵지만 \"소통 부재·존중 부재\"가 누적되면 재판이혼·위자료가 평가되는 영역입니다. 대응은 ① 통역 ② 자료 ③ 합의 ④ 신고 ⑤ 정착 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 다문화 협의이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통역·자료·합의·신고·정착 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 다누리콜센터·다문화가족지원센터 통역 지원 요청</strong></li>\n<li><strong>② 본국 신분 자료 번역·공증·아포스티유</strong></li>\n<li><strong>③ 자녀 있을 시 양육자·양육비·면접교섭 합의</strong></li>\n<li><strong>④ 가정법원 협의이혼 의사 확인 + 가족관계등록부 신고</strong></li>\n<li><strong>⑤ 체류자격 변경·본국 송환·정착 지원 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다문화 결혼은 \"통역 + 본국 자료 + 체류 영향\" 3박자가 평가되는 영역. 협의이혼 의사 확인 시 통역 부재로 의사 왜곡되면 무효 다툼 발생 가능. 다누리콜센터 1577-1366 무료 통역 지원 활용.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 통역·합의·신고 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 다문화가족지원센터·다누리콜센터 1577-1366 통역 상담 (즉시)</strong></li>\n<li><strong>2단계 — 본국 신분증·국적·미혼·혼인 자료 번역·공증·아포스티유</strong></li>\n<li><strong>3단계 — 자녀 양육자 지정·양육비 부담 협의서 작성 (자녀 있을 시)</strong></li>\n<li><strong>4단계 — 가정법원 협의이혼 의사 확인 신청 (숙려기간 1개월 또는 3개월) + 통역인 동행</strong></li>\n<li><strong>5단계 — 가족관계등록부 + 본국 재외공관 이혼 신고 + 체류·국적 변경 검토</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다문화 결혼 협의이혼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·번역·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서 (한국)</strong></li>\n<li><strong>외국인 배우자 여권·외국인등록증·체류자격 자료</strong></li>\n<li><strong>본국 발급 신분증·국적증명·미혼증명 + 번역 공증 + 아포스티유</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>자녀 있을 시 양육자 지정·양육비 부담 협의서</strong></li>\n<li><strong>다문화가족지원센터 통역 신청서·통역인 신원</strong></li>\n<li><strong>위자료·재산분할·정착지원 청구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국인 배우자가 한국에서 결혼이민(F-6) 체류 중이면 이혼 후 체류자격 변경(F-5 또는 출국)이 평가되는 영역. 본인 귀책 아닌 이혼이면 체류 유지·연장 평가 가능. 다누리콜센터 1577-1366 통역·법률 무료 상담 활용.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>통역 부재</strong> — 의사 확인 시 통역 부재면 무효 다툼 가능.</li>\n<li><strong>본국 자료 인증</strong> — 번역+공증+아포스티유.</li>\n<li><strong>자녀 양육</strong> — 본국 송환 시 면접교섭 어려움.</li>\n<li><strong>체류자격 변경</strong> — 이혼 사유에 따라 F-6 유지 평가.</li>\n<li><strong>위자료</strong> — 단순 문화차이는 약함, 폭언·통제 누적이면 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>다누리콜센터 1577-1366 (다문화가족 통역·상담)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다문화 결혼 이혼 시 위자료와 외국인 배우자 보호',
        summary:
          '대법원 2025므10716(대법원 영역에서 법원은 한국인 배우자와 외국인 배우자 사이 이혼 사건에서 혼인 파탄 책임·문화 갈등·소통 부재 등 사정을 종합 평가해 위자료·재산분할을 정한 사례 흐름이 있습니다. 다문화 결혼은 \"문화 차이\" 자체보다 \"상호 존중과 소통 노력의 부재\"가 책임 평가의 핵심으로 평가되는 영역.',
        takeaway: '단순 문화차이는 위자료 약함. 다만 폭언·통제·소통 단절이 누적되면 평가. 통역 부재로 의사 왜곡 시 무효 다툼 가능.',
      },
    ],
    faq: [
      {
        question: '문화 차이만으로 협의이혼할 수 있나요?',
        answer:
          '<strong>협의이혼은 사유 없이 양 당사자 의사만 일치하면 가능한 영역입니다.</strong> 위자료는 별도 평가.',
      },
      {
        question: '배우자가 한국어를 못하면 어떻게 하나요?',
        answer:
          '<strong>다누리콜센터·다문화가족지원센터 통역 지원으로 의사 확인 기일 동행이 가능한 영역입니다.</strong>',
      },
      {
        question: '본국 자료는 어떻게 인증하나요?',
        answer:
          '<strong>번역 → 공증 → 아포스티유(또는 영사인증) 3단계가 원칙인 영역입니다.</strong>',
      },
      {
        question: '이혼 후 체류자격은 어떻게 되나요?',
        answer:
          '<strong>본인 귀책 아닌 이혼이면 F-6 유지·F-5 변경 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '자녀가 있으면 본국 송환 시 면접교섭은요?',
        answer:
          '<strong>국제 면접교섭 협약·헤이그 협약 등을 통해 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '외국인 배우자 협의이혼', href: '/guide/divorce/divorce-foreign-spouse-consensual-divorce-jurisdiction-document-track' },
      { label: '국제재판관할', href: '/guide/divorce/divorce-foreign-spouse-international-jurisdiction' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/consensual-divorce-required-documents-checklist' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '국제 양육 관할', href: '/guide/divorce/divorce-foreign-spouse-custody-jurisdiction' },
    ],
  },

  // ─── 2. divorce-stepfamily-adopted-child-custody-track ───
  {
    domain: 'divorce',
    slug: 'divorce-stepfamily-adopted-child-custody-track',
    keyword: '재혼 친양자 입양 양육권',
    questionKeyword: '재혼 후 새 아이를 친양자 입양했는데 이혼하게 됐어요. 양육권은 어떻게 되나요?',
    ctaKeyword: '친양자 입양 양육권 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재혼 친양자 양육권 — 5단계 친생부모 회복 3트랙 | 로앤가이드',
      description:
        '재혼 가정에서 친양자 입양 후 이혼 시 양육권·친생부모 권리 회복 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 재혼 가정의 새엄마(또는 새아빠) 입장이에요. 배우자의 전혼 자녀를 친양자로 입양했는데 이번에 이혼하게 됐습니다. 친양자 입양으로 본인이 법률상 친(親)이 됐는데 이혼 후 양육권·면접교섭·친생부모 권리 회복은 어떻게 되는지 막막합니다." 민법 제908조의2 이하는 친양자 입양을 \"친생자\"와 동일한 법률효과로 본 영역. 친양자는 양친(양부모) 친자가 되고 친생부모와의 법률관계는 \"단절\"되는 흐름. ① 친양자 지위 (양친과 친자 관계 유지) ② 양친 이혼 시 양육권 결정 (양친 중 누가) ③ 친생부모 권리 회복은 \"파양\"이 있어야만 평가 ④ 양육비 부담 ⑤ 면접교섭 5가지 트랙이 핵심. 이혼만으로는 친양자 지위가 바뀌지 않는 영역입니다. 대응은 ① 지위 ② 양육 ③ 양육비 ④ 면접 ⑤ 파양 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 친양자 양육권 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지위·양육·양육비·면접·파양 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 친양자 지위 확인 (양친 친자, 친생부모 단절)</strong></li>\n<li><strong>② 양친 이혼 시 양육자·친권자 결정 (자의 복리)</strong></li>\n<li><strong>③ 양육비 부담 (양친 모두 부담)</strong></li>\n<li><strong>④ 면접교섭 (양육자 아닌 양친도 권리)</strong></li>\n<li><strong>⑤ 파양 시 친생부모 친자관계 회복 평가</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 친양자는 \"양친 친자\"라 이혼해도 양친 모두 친권·양육 책임이 그대로. 친생부모 권리 회복은 \"파양 결정\"이 있어야만 평가되는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 결정·이행·평가 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 친양자 입양 사실 확인 (가족관계증명서·입양 결정문) (즉시)</strong></li>\n<li><strong>2단계 — 협의이혼 시 양육자 협의 / 재판이혼 시 가정법원 심판</strong></li>\n<li><strong>3단계 — 양육비 산정 (양육비 산정기준표·양친 모두 부담)</strong></li>\n<li><strong>4단계 — 면접교섭 일정 협의 (월 1~2회 기본)</strong></li>\n<li><strong>5단계 — 친양자 파양 청구는 별도 절차 (자의 복리 침해 등 엄격 요건)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">친양자 입양 양육권 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·입양·양육 갈래입니다.</strong></p>\n<ul>\n<li><strong>친양자 입양 결정문·가족관계증명서</strong></li>\n<li><strong>혼인관계증명서·기본증명서</strong></li>\n<li><strong>본인·배우자 소득 자료 (양육비 산정용)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>자녀 학교·병원 기록 (양육권 평가)</strong></li>\n<li><strong>친생부모 자료 (파양 시 회복 평가용)</strong></li>\n<li><strong>면접교섭 일정 협의서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친양자 입양은 \"친생자와 동일\"한 효과라 이혼한다고 자동으로 친생부모 권리가 살아나지 않는 영역. 파양은 자의 복리·양친 학대·중대 사유 등 엄격 요건이 평가되는 흐름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>양친 양육권 경합</strong> — 자의 복리 최우선.</li>\n<li><strong>양육비 분담</strong> — 친생자와 동일 부담.</li>\n<li><strong>면접교섭</strong> — 양친 아닌 쪽도 권리.</li>\n<li><strong>친생부모 회복</strong> — 파양 결정 필수.</li>\n<li><strong>친양자 의사</strong> — 13세 이상 청취 의무.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 친양자 입양 후 양친 이혼과 양육권',
        summary:
          '대법원 2024므13669(대법원 영역에서 법원은 친양자 입양 후 양친 사이의 이혼·양육권 사건에서 친양자가 양친 모두의 친자로 평가되고 이혼 시 자의 복리 기준으로 양육자·친권자를 결정한 사례 흐름이 있습니다. 친양자는 친생자와 동일한 법률효과를 가지며 양친 이혼만으로 친생부모와의 친자관계가 회복되지 않는 영역.',
        takeaway: '친양자 입양은 친생자와 동일한 효과. 양친 이혼 시에도 양친 모두 친권·양육 책임이 그대로. 친생부모 회복은 별도 파양 결정 필요.',
      },
    ],
    faq: [
      {
        question: '친양자 입양은 일반 입양과 어떻게 다른가요?',
        answer:
          '<strong>친양자는 양친 친자가 되고 친생부모와의 법률관계는 단절되는 영역입니다.</strong>',
      },
      {
        question: '이혼하면 친양자도 자동 파양되나요?',
        answer:
          '<strong>아니요. 이혼해도 친양자 지위는 유지되고 양친 모두 친권·양육 책임이 그대로인 영역입니다.</strong>',
      },
      {
        question: '친생부모 권리는 회복되지 않나요?',
        answer:
          '<strong>파양 결정이 있어야만 친생부모 친자관계가 회복되는 영역입니다.</strong>',
      },
      {
        question: '파양 사유는 무엇인가요?',
        answer:
          '<strong>자의 복리 침해·양친 학대·중대 사유 등 엄격 요건이 평가되는 영역입니다.</strong>',
      },
      {
        question: '양육비는 누가 부담하나요?',
        answer:
          '<strong>양친 모두 친생자와 동일하게 부담하는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재혼 자녀 입양', href: '/guide/divorce/divorce-remarriage-child-adoption-procedure' },
      { label: '재혼 양육자 변경', href: '/guide/divorce/divorce-remarriage-environment-change-custodian-change-petition-track' },
      { label: '양육권 평가', href: '/guide/divorce/divorce-custody-evaluation-criteria' },
      { label: '면접교섭 일정', href: '/guide/divorce/divorce-visitation-schedule-design' },
      { label: '양육비 산정', href: '/guide/divorce/divorce-child-support-calculation-standard' },
    ],
  },

  // ─── 3. divorce-domestic-violence-emergency-shelter-immediate-divorce-track ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-emergency-shelter-immediate-divorce-track',
    keyword: '가정폭력 쉼터 입소 긴급 이혼',
    questionKeyword: '남편 폭력으로 쉼터에 들어왔어요. 접근금지랑 이혼을 같이 빨리 진행하고 싶어요.',
    ctaKeyword: '쉼터 입소 긴급 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 쉼터 + 긴급 이혼 — 5단계 접근금지·임시조치 3트랙 | 로앤가이드',
      description:
        '가정폭력 피해자 쉼터 입소 후 접근금지·임시조치와 긴급 이혼을 병행하는 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 남편 폭력으로 자녀와 함께 여성 폭력 쉼터에 입소했어요. 진단서·신고기록이 있고 자녀도 함께 안전한 곳에 있어야 합니다. 접근금지·퇴거·임시조치를 받으면서 동시에 이혼·재산분할·위자료를 빠르게 진행하고 싶은데 어디부터 가야 하는지 막막합니다." 가정폭력처벌특례법은 ① 응급조치(경찰 현장) ② 긴급임시조치(검사 청구·법원 결정) ③ 임시조치(접근금지·100m 격리·퇴거·통신금지) ④ 피해자보호명령(가정법원 직접 신청, 6개월 단위 연장) 5가지 보호 트랙을 정한 영역. 여기에 ⑤ 재판이혼(민법 840조 3호 심히 부당한 대우) + 위자료·재산분할 청구가 \"같은 자료\"로 병렬 평가되는 흐름. 쉼터 입소 시 1366·여성가족부 지원 시스템이 함께 작동. 대응은 ① 쉼터 ② 임시조치 ③ 보호명령 ④ 이혼 ⑤ 위자료 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 쉼터 입소 + 긴급 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 쉼터·임시·보호·이혼·위자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 여성긴급전화 1366 · 쉼터 입소 + 자녀 동반</strong></li>\n<li><strong>② 임시조치 신청 (검사 청구 → 법원, 접근금지·퇴거)</strong></li>\n<li><strong>③ 피해자보호명령 (가정법원, 6개월 단위 연장)</strong></li>\n<li><strong>④ 재판이혼 청구 (민법 840조 3호 심히 부당한 대우)</strong></li>\n<li><strong>⑤ 위자료·재산분할·양육권 결합 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 쉼터 입소는 \"안전 분리\" 1단계, 임시조치·보호명령은 \"법적 격리\" 2단계, 이혼·위자료는 \"관계 종료\" 3단계로 같은 자료를 공통 활용해 병렬 진행되는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 안전·격리·이혼 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 여성긴급전화 1366 신고 + 쉼터 입소 (즉시·자녀 동반 가능)</strong></li>\n<li><strong>2단계 — 경찰 응급조치 + 검사 임시조치 청구 (48시간 내, 가정폭력처벌특례법 8조)</strong></li>\n<li><strong>3단계 — 가정법원 피해자보호명령 별도 신청 (55조의2, 6개월 단위)</strong></li>\n<li><strong>4단계 — 가정법원 재판이혼 소장 접수 (민법 840조 3호)</strong></li>\n<li><strong>5단계 — 위자료·재산분할·양육권 청구 결합 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">쉼터 + 긴급 이혼 병렬 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭력·신원·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고 사건사고사실확인원 (관할 경찰서)</strong></li>\n<li><strong>의사 진단서·상처 사진 (날짜 기재)</strong></li>\n<li><strong>가정 내 CCTV·녹음·문자·카톡 캡처</strong></li>\n<li><strong>쉼터 입소 확인서 (1366 또는 여성가족부)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서·자녀 기본증명서</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>재산 자료 (예금·부동산·소득) + 양육권 평가용 자녀 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 쉼터 입소 후에는 본인 거주지가 비밀이라 송달·재산조회는 변호사·대한법률구조공단을 통해 진행하는 흐름. 자녀 동반 시 학교 전학·심리 지원도 1366·쉼터에서 연계.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임시조치 신청 주체</strong> — 검사 청구가 원칙.</li>\n<li><strong>피해자보호명령 직접 신청</strong> — 검사 단계 안 기다림.</li>\n<li><strong>퇴거·100m 격리</strong> — 가해자 주거 퇴거.</li>\n<li><strong>이혼 사유</strong> — 840조 3호 심히 부당한 대우.</li>\n<li><strong>위자료·양육권</strong> — 같은 자료로 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366 · 가정폭력 쉼터</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정폭력 피해자의 가출과 혼인관계 파탄',
        summary:
          '대법원 2024므14938(대법원 영역에서 법원은 가정폭력 피해자가 가해자로부터 분리되어 쉼터에 입소하거나 별거를 시작한 후 재판이혼을 청구한 사안에서 \"심히 부당한 대우\"와 \"혼인관계가 회복할 수 없을 정도로 파탄\"되었다고 평가한 사례 흐름이 있습니다. 가정폭력은 가정폭력처벌특례법상 임시조치·보호명령과 민법상 재판이혼 양쪽에서 동일하게 평가되는 영역.',
        takeaway: '쉼터 입소는 안전 분리. 임시조치·보호명령은 법적 격리. 이혼·위자료는 관계 종료. 같은 자료로 병렬 평가되는 흐름.',
      },
    ],
    faq: [
      {
        question: '쉼터 입소만 해도 접근금지가 되나요?',
        answer:
          '<strong>아니요. 쉼터는 안전 분리, 접근금지는 임시조치·피해자보호명령 별도 신청이 필요한 영역입니다.</strong>',
      },
      {
        question: '쉼터에서 이혼 소송도 진행할 수 있나요?',
        answer:
          '<strong>네. 변호사·법률구조공단을 통해 거주지 비공개 상태로 진행하는 영역입니다.</strong>',
      },
      {
        question: '자녀도 함께 쉼터에 갈 수 있나요?',
        answer:
          '<strong>네. 가정폭력 쉼터는 자녀 동반·전학·심리 지원을 함께 제공하는 영역입니다.</strong>',
      },
      {
        question: '임시조치와 피해자보호명령 차이는요?',
        answer:
          '<strong>임시조치는 검사 청구, 피해자보호명령은 피해자가 가정법원에 직접 신청하는 영역입니다.</strong>',
      },
      {
        question: '위자료는 얼마나 받을 수 있나요?',
        answer:
          '<strong>폭력 기간·횟수·정도에 따라 평가되는 영역입니다.</strong> 단정 불가.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '가정폭력 응급조치', href: '/guide/divorce/divorce-domestic-violence-emergency-shelter' },
      { label: '보호명령 + 이혼 병렬', href: '/guide/divorce/divorce-domestic-violence-protection-order-emergency-parallel-divorce-petition-track' },
      { label: '폭력 증거 수집', href: '/guide/divorce/divorce-domestic-violence-evidence-collection-track' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
    ],
  },

  // ─── 4. divorce-spouse-startup-cofounder-equity-asset-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-startup-cofounder-equity-asset-division-track',
    keyword: '스타트업 공동창업 지분 재산분할',
    questionKeyword: '배우자가 스타트업 공동창업해서 지분 가진 게 있어요. 미상장 주식인데 재산분할 어떻게 평가하나요?',
    ctaKeyword: '스타트업 지분 재산분할 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스타트업 공동창업 지분 재산분할 — 5단계 미상장·기여도 3트랙 | 로앤가이드',
      description:
        '배우자가 스타트업 공동창업자인 경우 미상장 지분·스톡옵션 재산분할 평가가 막막하다면 5가지 분기 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 배우자가 스타트업을 공동창업해서 지분 약 25%를 보유하고 있어요. 시리즈 A 투자를 받았고 회사 가치는 100억 정도로 평가되는데 미상장이라 매도가 어렵습니다. 이혼 시 이 지분을 재산분할에서 어떻게 평가하는지 막막합니다." 민법 제839조의2 재산분할은 \"부부가 혼인 중 협력으로 형성한 재산\"을 청산·분배하는 영역. 스타트업 공동창업자 지분은 ① 혼인 중 취득 여부 ② 미상장 주식 평가(투자유치 밸류·DCF·순자산법) ③ 본인 기여도(자금·내조·생활지원) ④ 분할 방법(지분 이전·금전 청산·스톡옵션 처리) ⑤ 후발사정(상장·매각·소멸) 5가지 트랙이 핵심. 미상장 주식은 \"즉시 매도 불가\"라 현금 청산이 어렵고 평가 시점·방법이 큰 다툼이 평가되는 영역입니다. 대응은 ① 취득 ② 평가 ③ 기여 ④ 분할 ⑤ 후발 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 스타트업 지분 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 취득·평가·기여·분할·후발 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지분 취득 시점 (혼인 전·중·후, 혼인 중이면 분할 대상)</strong></li>\n<li><strong>② 미상장 주식 평가 (밸류·DCF·순자산·할인율)</strong></li>\n<li><strong>③ 본인 기여도 (자금·내조·창업 초기 생활지원)</strong></li>\n<li><strong>④ 분할 방법 (지분 이전 / 금전 청산 / 분할 시점 분리)</strong></li>\n<li><strong>⑤ 후발사정 (상장·매각·소멸 시 조정 평가)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미상장 주식은 \"즉시 시장가 없음\"이라 평가가 가장 큰 다툼. 최근 투자유치 밸류·재무제표·동종업계 비교가 평가 기준. 금전 청산이 일반적이지만 분할 시점 분리·스톡옵션 부분 인정도 평가되는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·평가·분할 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 회사 등기·주주명부·정관·투자계약서 자료 수집 (즉시)</strong></li>\n<li><strong>2단계 — 회계법인·감정인 미상장 주식 평가 (밸류·DCF·순자산·비유동성 할인)</strong></li>\n<li><strong>3단계 — 본인 기여 자료 정리 (창업 초기 생활비·자금 출연·내조)</strong></li>\n<li><strong>4단계 — 가정법원 재산분할 청구 + 감정 신청 (가사소송법 마류)</strong></li>\n<li><strong>5단계 — 결정 (지분 이전·금전 청산·분할 시점 분리) + 후발사정 보정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">스타트업 지분 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 지분·평가·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>회사 법인등기부등본·정관·주주명부</strong></li>\n<li><strong>투자계약서·SAFE·전환사채 자료 (밸류 평가 기준)</strong></li>\n<li><strong>재무제표·세무신고서·법인세 신고 자료</strong></li>\n<li><strong>스톡옵션 부여계약·베스팅 스케줄</strong></li>\n<li><strong>본인 기여 자료 (창업 초기 생활비·자금 이체·내조)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>회계법인 미상장 주식 평가서 (선임 후 작성)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미상장 주식 평가는 \"투자유치 밸류 + 비유동성 할인\"이 일반적이지만 회사 단계(시드·시리즈A·B·C)에 따라 평가가 크게 달라짐. 스톡옵션은 \"베스팅된 부분만\" 분할 대상이라 미베스팅분은 제외 평가가 일반적인 흐름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 시점</strong> — 이혼 변론종결 시 vs 별거 시.</li>\n<li><strong>비유동성 할인율</strong> — 미상장 30~50% 사례.</li>\n<li><strong>본인 기여도</strong> — 창업 초기 생활지원 자료.</li>\n<li><strong>분할 방법</strong> — 지분 이전 vs 금전 청산.</li>\n<li><strong>후발사정</strong> — 상장·매각 시 조정 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국공인회계사회 (감정 의뢰 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 미상장 주식의 재산분할과 기여도 평가',
        summary:
          '대법원 2025므10730(대법원 영역에서 법원은 부부 일방이 보유한 미상장 주식의 재산분할 평가 사건에서 회사 규모·재무상태·동종업계 비교·비유동성 할인 등을 종합 평가해 분할 가액을 산정하고 본인 기여도를 반영해 분할 비율을 정한 사례 흐름이 있습니다. 미상장 주식은 즉시 시장가가 없어 \"평가 방법·시점·할인율\"이 핵심 다툼인 영역.',
        takeaway: '미상장 주식은 즉시 매도 불가라 평가가 큰 다툼. 본인 기여 자료(생활지원·자금 출연)가 누적되면 분할 비율 평가가 가능한 영역.',
      },
    ],
    faq: [
      {
        question: '미상장 주식도 재산분할 대상인가요?',
        answer:
          '<strong>혼인 중 취득·증식한 지분이면 분할 대상으로 평가되는 영역입니다.</strong>',
      },
      {
        question: '평가는 어떻게 하나요?',
        answer:
          '<strong>회계법인·감정인이 밸류·DCF·순자산법으로 평가하고 비유동성 할인을 적용하는 영역입니다.</strong>',
      },
      {
        question: '금전으로 받을 수 있나요?',
        answer:
          '<strong>네. 지분 이전 대신 금전 청산이 일반적인 영역입니다.</strong>',
      },
      {
        question: '스톡옵션도 분할되나요?',
        answer:
          '<strong>베스팅된 부분만 분할 대상으로 평가되는 영역입니다.</strong> 미베스팅분은 제외 평가가 일반적.',
      },
      {
        question: '상장하면 어떻게 되나요?',
        answer:
          '<strong>분할 후 상장·매각 등 후발사정은 한정적으로 조정 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '주식·스톡옵션 분할', href: '/guide/divorce/divorce-spouse-shareholder-stock-valuation' },
      { label: '스톡옵션 베스팅', href: '/guide/divorce/divorce-spouse-employee-stock-option-vesting' },
      { label: '재산분할 종합', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 기여도', href: '/guide/divorce/divorce-property-division-contribution-evaluation' },
      { label: '재산 평가 감정', href: '/guide/divorce/divorce-property-valuation-appraisal-procedure' },
    ],
  },

  // ─── 5. inheritance-overseas-foreign-asset-claim-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-overseas-foreign-asset-claim-track',
    keyword: '해외 자산 상속 국제 상속세',
    questionKeyword: '아버지가 미국에 부동산이랑 일본에 주식을 갖고 계셨어요. 해외 자산은 어떻게 상속하나요?',
    ctaKeyword: '해외 자산 상속 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 자산 상속 — 5단계 국제 상속세·이중과세 3트랙 | 로앤가이드',
      description:
        '피상속인의 해외 자산(미국 부동산·일본 주식 등) 상속·국제 상속세 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 한국 거주자였는데 미국 캘리포니아 부동산과 일본 증권사 주식을 보유한 상태로 돌아가셨어요. 한국에서 상속세 신고도 해야 하고 미국·일본 현지에서도 상속 절차·세금이 있다는데 어디부터 가야 하는지 막막합니다." 국제사법 제77조는 상속의 준거법을 \"피상속인의 본국법\"으로 정한 영역. 한국 거주자의 해외 자산도 한국 상속세법상 전 세계 자산 합산 과세 대상(상속세법 1조). ① 한국 상속세(전 세계 자산, 6개월 내 신고) ② 외국 현지 상속세(미국 estate tax·일본 상속세) ③ 외국 자산 명의이전(probate·승계 등기) ④ 이중과세 조정(외국납부세액공제 18조) ⑤ 외국환·자금이동 신고 5가지 트랙이 핵심. 미국은 주(state)별로 절차가 다르고 일본은 한국과 유사한 흐름. 대응은 ① 한국세 ② 현지 ③ 이전 ④ 공제 ⑤ 자금 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 자산 상속 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 한국세·현지·이전·공제·자금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 한국 상속세 신고 (전 세계 자산, 사망 후 6개월)</strong></li>\n<li><strong>② 외국 현지 상속세 신고 (미국 estate tax · 일본 상속세)</strong></li>\n<li><strong>③ 외국 자산 명의이전 (probate · 등기 · 증권사 승계)</strong></li>\n<li><strong>④ 외국납부세액공제 (상속세법 18조, 이중과세 조정)</strong></li>\n<li><strong>⑤ 외국환거래법 자금 반입 신고 + 환산</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한국 거주자의 사망은 \"전 세계 자산\"이 한국 상속세 과세 대상. 현지국 상속세도 별도 부담하지만 이중과세 조약·외국납부세액공제로 조정되는 영역. 미국·일본은 한국과 이중과세 방지 협약 체결.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·이전·조정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해외 자산 목록 정리 (부동산·주식·예금·연금) (즉시)</strong></li>\n<li><strong>2단계 — 한국 상속세 신고 (사망 후 6개월, 국세청)</strong></li>\n<li><strong>3단계 — 현지국 상속세 신고 (미국 IRS Form 706 · 일본 세무서)</strong></li>\n<li><strong>4단계 — 현지 probate·등기·증권사 승계 절차 (미국 6개월~2년)</strong></li>\n<li><strong>5단계 — 외국납부세액공제 신청 + 외국환거래법 자금 반입 신고</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 자산 상속 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·자산·세무 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·기본증명서·가족관계증명서</strong></li>\n<li><strong>해외 부동산 등기부등본·매매계약서 (현지 발급)</strong></li>\n<li><strong>해외 증권 계좌명세·연금·예금 잔액증명</strong></li>\n<li><strong>한국 상속세 신고서 + 평가 자료 (시가·기준시가)</strong></li>\n<li><strong>현지국 상속세 신고서·납부영수증</strong></li>\n<li><strong>현지 probate 자료 (미국) · 명의이전 자료 (일본 등)</strong></li>\n<li><strong>외국환거래법 자금이동 신고서 (한국은행·외환은행)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한국 거주자라도 해외 자산은 현지국 절차를 거치지 않으면 명의이전·매각이 불가. 미국 부동산은 probate(검인) 절차에 6개월~2년 소요. 외국납부세액공제는 \"한국 상속세 한도\" 내에서만 평가되는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전 세계 자산 합산</strong> — 한국 거주자 사망 시 원칙.</li>\n<li><strong>이중과세 조정</strong> — 외국납부세액공제 한도.</li>\n<li><strong>현지 probate</strong> — 주별·국별 절차 상이.</li>\n<li><strong>환산 시점</strong> — 사망일 또는 신고일 환율.</li>\n<li><strong>자금이동 신고</strong> — 외국환거래법 위반 시 과태료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국세청 상속세 상담 126</strong></li>\n<li><strong>외교부 영사콜센터 +82-2-3210-0404</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 자산 상속세 합산과 외국납부세액공제',
        summary:
          '대법원 2025두34935(대법원 영역에서 법원은 한국 거주자의 사망에 따른 상속세 부과처분 사건에서 피상속인의 해외 자산이 전 세계 자산 합산 과세 대상에 포함되고 현지국에 납부한 상속세는 외국납부세액공제(상속세법 18조)로 조정되는 흐름을 다룬 사례 흐름이 있습니다. 한국 거주자의 해외 자산은 \"한국 + 현지\" 양쪽 신고가 필요하지만 이중과세는 조약·공제로 조정되는 영역.',
        takeaway: '한국 거주자의 해외 자산은 한국 상속세 합산 + 현지 상속세 별도 신고. 외국납부세액공제로 이중과세는 조정되는 흐름.',
      },
    ],
    faq: [
      {
        question: '해외 자산도 한국 상속세 대상인가요?',
        answer:
          '<strong>한국 거주자의 사망이면 전 세계 자산이 합산 과세 대상으로 평가되는 영역입니다.</strong>',
      },
      {
        question: '현지국에도 상속세를 내야 하나요?',
        answer:
          '<strong>네. 현지국 세법에 따라 별도 신고·납부하고 한국에서 외국납부세액공제로 조정하는 영역입니다.</strong>',
      },
      {
        question: '미국 probate는 얼마나 걸리나요?',
        answer:
          '<strong>주(state)별로 다르지만 6개월~2년이 일반적인 영역입니다.</strong>',
      },
      {
        question: '환산은 어떻게 하나요?',
        answer:
          '<strong>사망일 또는 신고일 기준 환율로 환산하는 영역입니다.</strong>',
      },
      {
        question: '자금 반입에도 절차가 있나요?',
        answer:
          '<strong>외국환거래법상 신고 의무가 평가되는 영역입니다.</strong> 위반 시 과태료.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고 절차', href: '/guide/inheritance/inheritance-tax-filing-procedure' },
      { label: '한정승인 5단계', href: '/guide/inheritance/inheritance-limited-acceptance-5steps' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement-validity' },
      { label: '상속세 가산세', href: '/guide/inheritance/inheritance-tax-penalty-late-filing' },
      { label: '외국인 상속', href: '/guide/inheritance/inheritance-foreign-heir-procedure' },
    ],
  },

  // ─── 6. inheritance-elder-care-decade-contribution-share-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-elder-care-decade-contribution-share-track',
    keyword: '장기 간병 기여분 청구',
    questionKeyword: '10년 넘게 부모님을 모시고 간병했는데 다른 형제들은 기여분을 인정 안 해줘요. 어떻게 청구하나요?',
    ctaKeyword: '장기 간병 기여분 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '장기 간병 기여분 — 5단계 10년 누적·다른 상속인 반대 3트랙 | 로앤가이드',
      description:
        '10년 이상 부모 간병한 자녀의 기여분을 다른 상속인 반대 속에서 인정받는 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 10년 넘게 부모님을 모시고 살면서 약값·요양원비·간병을 거의 전담했어요. 다른 형제들은 명절에만 잠깐 들렀고 부모님이 돌아가신 지금 \'다 똑같이 1/n로 나누자\'고 합니다. 본인 기여분을 인정받으려는데 다른 상속인이 반대하고 있어 막막합니다." 민법 제1008조의2 기여분 제도는 \"공동상속인 중 피상속인의 재산 유지·증가에 특별한 기여\" 또는 \"피상속인을 상당한 기간 동안 동거·간호 그 밖의 방법으로 특별히 부양한 자\"에게 기여분을 인정하는 영역. ① 기여 기간(10년 이상 누적) ② 특별 부양 입증(통상 효도 초과) ③ 기여 비율 산정(20~40% 사례) ④ 협의 결렬 시 가정법원 상속재산분할심판 ⑤ 다른 상속인 반박 대응 5가지 트랙이 핵심. 대응은 ① 자료 ② 입증 ③ 협의 ④ 심판 ⑤ 비율 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 장기 간병 기여분 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·입증·협의·심판·비율 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 10년 이상 간병 자료 정리 (병원·요양원·간병 일지·이체)</strong></li>\n<li><strong>② 특별 부양 입증 (통상 효도 초과 + 다른 형제 미관여)</strong></li>\n<li><strong>③ 공동상속인 협의 시도 (기여분 합의서)</strong></li>\n<li><strong>④ 협의 결렬 시 가정법원 상속재산분할심판 + 기여분 청구</strong></li>\n<li><strong>⑤ 기여 비율 산정 (사례 20~40% 평가)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기여분은 \"기간 + 정도 + 통상 효도 초과\" 3박자가 누적 자료로 보일 때 평가되는 영역. 10년 이상 전적 간병·요양원비 전담·생활비 부담 자료가 강한 사정. 다른 형제 미관여 자료도 함께 누적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·결정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 10년 간병 자료 수집 (병원비·요양원 영수증·간병 일지·이체) (즉시)</strong></li>\n<li><strong>2단계 — 공동상속인 기여분 협의 시도 (합의서·인낙조서)</strong></li>\n<li><strong>3단계 — 협의 결렬 시 가정법원 상속재산분할심판 청구 + 기여분 청구 결합</strong></li>\n<li><strong>4단계 — 가사조사 + 증인신문 + 심리 (6개월~1년)</strong></li>\n<li><strong>5단계 — 기여 비율 결정 + 잔여 상속분 분할 + 등기 이전</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">장기 간병 기여분 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 간병·재산·증인 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명서·가족관계증명서·사망신고서</strong></li>\n<li><strong>병원·요양원 영수증·진료기록 (10년 누적)</strong></li>\n<li><strong>간병 일지·약값·생활비 이체 내역</strong></li>\n<li><strong>본인 거주지·동거 자료 (주민등록등본·세대주)</strong></li>\n<li><strong>다른 상속인 미관여 자료 (방문 기록·메시지)</strong></li>\n<li><strong>피상속인 재산 목록·등기부등본·예금 명세</strong></li>\n<li><strong>증인 진술서 (이웃·친척·요양보호사·의료진)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기여분 비율은 사례에 따라 20~40%선이 자주 평가되지만 단정 불가. \"10년 누적 + 전적 부담 + 다른 형제 미관여\" 3박자가 보일수록 비율 평가가 가능한 영역. 가족 간 분쟁이라 증인·자료가 누적될수록 유리.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특별 부양 평가</strong> — 통상 효도 초과 정도.</li>\n<li><strong>다른 형제 반박</strong> — 통상 효도라는 주장.</li>\n<li><strong>기여 비율</strong> — 사례 20~40% 평가.</li>\n<li><strong>유류분 침해</strong> — 기여분 + 유류분 균형.</li>\n<li><strong>증인 신빙성</strong> — 이해관계 없는 제3자 진술.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 장기 간병 기여분과 분할 비율 조정',
        summary:
          '대법원 2025두34851(대법원 영역에서 법원은 장기간 동거·간병한 공동상속인의 기여분 청구 사건에서 \"통상의 부양·효도 수준을 넘어선 특별 기여\"가 누적 자료로 보일 때 기여분을 인정하고 잔여 분할 비율을 조정한 사례 흐름이 있습니다. 기여분은 단순 동거나 명절 방문이 아닌 \"전적 부담 + 다른 형제 미관여\" 자료가 핵심으로 평가되는 영역.',
        takeaway: '10년 누적 간병·요양 부담은 기여분 청구가 가능한 영역. 다른 상속인 반박 대비 증인·자료를 함께 누적.',
      },
    ],
    faq: [
      {
        question: '기여분은 얼마나 인정되나요?',
        answer:
          '<strong>사례에 따라 20~40% 수준이 검토되는 사례가 자주 보이는 영역입니다.</strong> 단정 불가.',
      },
      {
        question: '간병만으로도 인정되나요?',
        answer:
          '<strong>장기·전적 간병이 \"통상 효도\" 수준을 넘어서면 평가되는 영역입니다.</strong>',
      },
      {
        question: '다른 상속인이 반대하면 어떻게 하나요?',
        answer:
          '<strong>가정법원 상속재산분할심판 + 기여분 청구를 결합 제기하는 영역입니다.</strong>',
      },
      {
        question: '심판은 얼마나 걸리나요?',
        answer:
          '<strong>가사조사·증인신문 포함 6개월~1년이 일반적인 영역입니다.</strong>',
      },
      {
        question: '유류분과 충돌하나요?',
        answer:
          '<strong>기여분이 유류분을 침해하지 않는 한도에서 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '기여분 청구', href: '/guide/inheritance/inheritance-contribution-portion-dispute' },
      { label: '간병 기여 입증', href: '/guide/inheritance/inheritance-contribution-share-caregiving-business-evidence' },
      { label: '특별 기여 가산', href: '/guide/inheritance/inheritance-special-gift-contribution-claim' },
      { label: '상속재산분할 기여분', href: '/guide/inheritance/inheritance-property-division-trial-contribution-portion-spouse-caregiving-track' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement-validity' },
    ],
  },

  // ─── 7. inheritance-pre-death-gift-recovery-tax-claim-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-pre-death-gift-recovery-tax-claim-track',
    keyword: '사전 증여 유류분 반환 증여세',
    questionKeyword: '아버지가 돌아가시기 8년 전에 형에게 부동산을 증여하셨어요. 유류분 반환 청구할 수 있나요?',
    ctaKeyword: '사전 증여 유류분 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사전 증여 유류분 반환 — 5단계 10년 시효·증여세 3트랙 | 로앤가이드',
      description:
        '사망 10년 전 사전 증여된 자산에 대한 유류분 반환·증여세 정산 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가시기 8년 전에 형에게 시가 5억짜리 아파트를 증여하셨어요. 본인은 거의 받은 게 없는데 지금 상속재산은 1억밖에 안 남아서 본인 유류분이 침해됐습니다. 사전 증여도 유류분 반환 대상인지, 시효는 어떻게 되는지 막막합니다." 민법 제1114조는 유류분 산정 시 \"상속개시 전 1년간에 행한 증여\"를 기본으로 하되, \"당사자 쌍방이 유류분 침해를 알고 한 증여\"는 1년 이전이라도 산입한다고 정한 영역. 또한 공동상속인에 대한 증여는 1115조에 따라 기간 제한 없이 산입(특별수익). ① 증여 시점·금액 ② 공동상속인 증여인지(특별수익) ③ 유류분 침해 산정 ④ 반환 청구(1년·10년 기한) ⑤ 증여세 영향 5가지 트랙이 핵심. 대응은 ① 증여 ② 산정 ③ 침해 ④ 청구 ⑤ 세금 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사전 증여 유류분 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증여·산정·침해·청구·세금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증여 시점·금액·수증자 확인 (등기·계약·신고)</strong></li>\n<li><strong>② 공동상속인 증여인지(특별수익, 기간 제한 X) vs 제3자 증여(1년 또는 알고 한 증여)</strong></li>\n<li><strong>③ 유류분 침해 산정 (상속재산 + 증여 - 채무, 법정 1/2 또는 1/3)</strong></li>\n<li><strong>④ 유류분 반환 청구 (안 날부터 1년·사망일부터 10년)</strong></li>\n<li><strong>⑤ 증여세·상속세 정산 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공동상속인에 대한 증여는 \"특별수익\"이라 기간 제한 없이 유류분 산정에 산입되는 영역. 제3자 증여는 \"사망 1년 이내\" 또는 \"알고 한 증여\"만 산입. 청구 시효는 안 날부터 1년·사망일부터 10년.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·산정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증여 자료 수집 (등기부등본·증여계약서·증여세 신고) (즉시)</strong></li>\n<li><strong>2단계 — 수증자가 공동상속인 여부 확인 + 다른 특별수익 조사</strong></li>\n<li><strong>3단계 — 유류분 침해액 산정 (상속재산 + 증여 - 채무) × 유류분 비율 (1/2 또는 1/3)</strong></li>\n<li><strong>4단계 — 민사 법원 유류분 반환 청구의 소 (안 날부터 1년 내)</strong></li>\n<li><strong>5단계 — 증여세·상속세 정산 + 반환 받은 자산 등기·신고</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사전 증여 유류분 반환 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증여·신분·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>증여 부동산 등기부등본·매매·증여 계약서</strong></li>\n<li><strong>증여세 신고서·납부영수증 (국세청)</strong></li>\n<li><strong>피상속인 기본증명서·가족관계증명서·사망신고서</strong></li>\n<li><strong>공동상속인 가족관계증명서·주민등록등본</strong></li>\n<li><strong>피상속인 잔여 상속재산 목록 (등기·예금·주식)</strong></li>\n<li><strong>피상속인 채무 자료 (신용정보원 조회)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공동상속인 증여는 \"기간 제한 없이\" 유류분 산정에 산입되는 영역. 청구 시효는 \"안 날부터 1년\"이라 사실관계를 안 시점이 핵심 다툼. 증여세는 수증자가 이미 납부했어도 유류분 반환과는 별개로 평가.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>증여 시점·평가</strong> — 사망 1년·10년 산입 여부.</li>\n<li><strong>공동상속인 증여</strong> — 특별수익, 기간 제한 X.</li>\n<li><strong>유류분 침해 산정</strong> — 잔여재산 + 증여 - 채무.</li>\n<li><strong>안 날 1년 시효</strong> — 사실관계 안 시점 분쟁.</li>\n<li><strong>증여세·상속세 정산</strong> — 반환 시 환급 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국세청 상속세·증여세 상담 126</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속인에 대한 증여와 유류분 산입',
        summary:
          '대법원 2025다212863(대법원 영역에서 법원은 사망 8년 전 공동상속인에게 이루어진 부동산 증여에 대한 유류분 반환 청구 사건에서 공동상속인에 대한 증여는 그 시기와 무관하게 유류분 산정에 산입되는 \"특별수익\"이라 평가하고 유류분 침해액을 산정한 사례 흐름이 있습니다. 제3자 증여(사망 1년 이내·알고 한 증여)와 달리 공동상속인 증여는 기간 제한 없이 평가되는 영역.',
        takeaway: '공동상속인 증여는 \"특별수익\"이라 기간 제한 없이 유류분 산정 산입. 청구 시효는 안 날부터 1년·사망일부터 10년.',
      },
    ],
    faq: [
      {
        question: '몇 년 전 증여까지 유류분 청구 가능한가요?',
        answer:
          '<strong>공동상속인 증여는 기간 제한 없이, 제3자 증여는 사망 1년 또는 알고 한 증여만 평가되는 영역입니다.</strong>',
      },
      {
        question: '청구 시효는 언제까지인가요?',
        answer:
          '<strong>유류분 침해를 안 날부터 1년·사망일부터 10년이 시효인 영역입니다.</strong>',
      },
      {
        question: '유류분 비율은 어떻게 되나요?',
        answer:
          '<strong>직계비속·배우자는 법정상속분의 1/2, 직계존속·형제는 1/3인 영역입니다.</strong>',
      },
      {
        question: '증여세를 받은 사람이 다시 내야 하나요?',
        answer:
          '<strong>반환 부분만큼 증여세 정산·환급이 평가되는 영역입니다.</strong>',
      },
      {
        question: '청구하면 부동산을 돌려받나요?',
        answer:
          '<strong>원물 반환이 원칙이지만 가액 반환도 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 반환 청구', href: '/guide/inheritance/inheritance-yuryubun-claim-calculation' },
      { label: '특별수익 공제', href: '/guide/inheritance/inheritance-yuryubun-special-receipt-deduction' },
      { label: '유류분 1년 기한', href: '/guide/inheritance/inheritance-yuryubun-1year-deadline-procedure' },
      { label: '특별 기여 가산', href: '/guide/inheritance/inheritance-special-gift-contribution-claim' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement-validity' },
    ],
  },

  // ─── 8. child-support-step-parent-adoption-cancel-pre-existing-track ───
  {
    domain: 'child-support',
    slug: 'child-support-step-parent-adoption-cancel-pre-existing-track',
    keyword: '친양자 파양 친생부모 양육비',
    questionKeyword: '재혼해서 친양자 입양했는데 이혼하면서 파양했어요. 친생부모가 다시 양육비를 줘야 하나요?',
    ctaKeyword: '친양자 파양 양육비 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '친양자 파양 후 친생부모 양육비 — 5단계 책임 회복 3트랙 | 로앤가이드',
      description:
        '재혼 후 친양자 입양 → 이혼·파양 후 친생부모의 양육비 책임 회복 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 재혼하면서 새 배우자의 자녀를 친양자로 입양했는데 결혼이 깨지면서 친양자 파양 결정을 받았어요. 이제 본인은 친(親)이 아니라 양육비 책임이 없는 상태입니다. 그렇다면 친생부(또는 친생모)가 다시 양육비를 부담해야 하는지, 어떻게 청구하는지 막막합니다." 민법 제908조의5는 친양자 파양 시 \"친생부모와의 친자관계가 부활\"한다고 정한 영역. 파양 결정 확정 후 친생부모는 다시 친권·양육 책임을 회복하고 양육비 부담 의무가 평가되는 흐름. ① 친양자 파양 결정 확정 ② 친생부모 친자관계 회복 ③ 양육자 지정 (양육자 ≠ 친생부모면 양육비 청구) ④ 양육비 산정 (양육비 산정기준표) ⑤ 미지급 시 이행명령·집행 5가지 트랙이 핵심. 대응은 ① 파양 ② 회복 ③ 양육 ④ 산정 ⑤ 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 친양자 파양 + 친생부모 양육비 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 파양·회복·양육·산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 친양자 파양 결정 확정 (가정법원, 자의 복리 평가)</strong></li>\n<li><strong>② 친생부모 친자관계 회복 (908조의5)</strong></li>\n<li><strong>③ 양육자 지정 (자녀의 현 양육자 ≠ 친생부모면 양육비 청구)</strong></li>\n<li><strong>④ 양육비 산정 (양육비 산정기준표, 양친·친생부모 소득 균형)</strong></li>\n<li><strong>⑤ 미지급 시 이행명령·직접지급명령·CSA 추심</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 친양자 파양은 \"친생부모 친자관계 회복\"이 동시에 일어나는 영역. 친생부모가 양육비 책임을 다시 부담하게 되고 양육자가 누구인지에 따라 청구 주체가 결정되는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 결정·회복·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 친양자 파양 결정문·확정증명 확인 (즉시)</strong></li>\n<li><strong>2단계 — 가족관계등록부 정정 + 친생부모 친자관계 회복 신고</strong></li>\n<li><strong>3단계 — 자녀 양육자 결정 (양친 일방·친생부모·시설)</strong></li>\n<li><strong>4단계 — 양육비 산정 + 친생부모 상대 청구 (가정법원 마류)</strong></li>\n<li><strong>5단계 — 미지급 시 이행명령·직접지급명령·CSA 추심</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">친양자 파양 + 친생부모 양육비 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 파양·신분·양육 갈래입니다.</strong></p>\n<ul>\n<li><strong>친양자 파양 결정문·확정증명</strong></li>\n<li><strong>친양자 입양 결정문·가족관계증명서</strong></li>\n<li><strong>친생부모 인적사항·가족관계증명서</strong></li>\n<li><strong>자녀 기본증명서·주민등록등본 (현 양육 환경)</strong></li>\n<li><strong>친생부모 소득 자료 (양육비 산정용)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>양육비 산정표·청구서·자녀 학비·생활비 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친양자 파양은 자의 복리 기준이 엄격해서 단순 \"양친 이혼\"만으로는 평가가 어려운 영역. 파양 결정이 확정되면 친생부모 양육비 책임은 자동 회복되지만 청구·산정은 별도 가정법원 절차가 필요한 흐름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>파양 요건</strong> — 자의 복리 침해·중대 사유.</li>\n<li><strong>친생부모 회복</strong> — 파양 확정 후 자동.</li>\n<li><strong>양육자</strong> — 자녀의 현 환경 평가.</li>\n<li><strong>양육비 산정</strong> — 친생부모 소득 기준.</li>\n<li><strong>미지급 집행</strong> — 이행명령·CSA 추심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 친양자 파양과 친생부모 친자관계 회복',
        summary:
          '대법원 2023스637(대법원 영역에서 법원은 친양자 파양 사건에서 파양 결정의 확정에 따라 친생부모와의 친자관계가 부활하고 친생부모가 친권·양육 책임을 다시 부담하게 되는 효과를 다룬 사례 흐름이 있습니다. 친양자 파양은 자의 복리·양친 학대·중대 사유 등 엄격 요건이 평가되는 영역이고 파양 후 친생부모 양육비 책임은 별도 청구로 평가되는 흐름.',
        takeaway: '친양자 파양 시 친생부모 친자관계는 자동 회복. 다만 양육비 청구·산정은 별도 가정법원 절차로 평가되는 영역.',
      },
    ],
    faq: [
      {
        question: '친양자 파양은 어떤 사유로 가능한가요?',
        answer:
          '<strong>자의 복리 침해·양친 학대·중대 사유 등 엄격 요건이 평가되는 영역입니다.</strong>',
      },
      {
        question: '파양 후 친생부모 책임은 자동인가요?',
        answer:
          '<strong>친자관계는 자동 회복이지만 양육비 청구·산정은 별도 절차인 영역입니다.</strong>',
      },
      {
        question: '친생부모 행방을 모르면 어떻게 하나요?',
        answer:
          '<strong>재산명시·재산조회·CSA 신용·근로 조회를 활용하는 영역입니다.</strong>',
      },
      {
        question: '양육자는 누가 정하나요?',
        answer:
          '<strong>자의 복리 기준으로 가정법원이 지정하는 영역입니다.</strong>',
      },
      {
        question: '친생부모가 거부하면요?',
        answer:
          '<strong>이행명령·직접지급명령·CSA 추심·감치 등 단계적 평가가 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 산정기준', href: '/guide/child-support/child-support-calculation-standard' },
      { label: '직접지급명령', href: '/guide/child-support/child-support-direct-payment-order-family-court-no-csa-track' },
      { label: '이행명령 절차', href: '/guide/child-support/child-support-enforcement-order-procedure' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-agency-csa-process' },
      { label: '강제집행 방법', href: '/guide/child-support/child-support-enforcement-method' },
    ],
  },

  // ─── 9. child-support-college-tuition-adult-child-extension-track ───
  {
    domain: 'child-support',
    slug: 'child-support-college-tuition-adult-child-extension-track',
    keyword: '성년 자녀 대학 학비 양육비 연장',
    questionKeyword: '아이가 만 19세 됐는데 대학 다녀요. 양육비를 졸업할 때까지 더 받을 수 있나요?',
    ctaKeyword: '대학 학비 양육비 연장 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '성년 대학 자녀 양육비 연장 — 5단계 학비·취업 전 협의 3트랙 | 로앤가이드',
      description:
        '자녀 만 19세 도달 후 대학 재학·취업 전까지 양육비 연장 협의·심판 트랙이 막막하다면 5가지 분기를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 시 자녀가 만 19세 되는 날까지 매월 60만원 양육비를 받기로 했어요. 그런데 아이가 지금 대학 1학년이고 학비·자취비 부담이 큰데 양육비가 끊겼습니다. 졸업할 때까지 양육비를 더 받을 수 있는지, 어떻게 청구하는지 막막합니다." 민법 제974조는 \"직계혈족 및 그 배우자 간\" 부양 의무를 정하고 자녀가 \"자기 자력 또는 근로에 의하여 생활을 유지할 수 없는 경우\" 부양 의무가 평가되는 영역. ① 만 19세 도달 시 통상 양육비 종료 ② 대학 재학·취업 전 \"자력 부족\" 자료 ③ 부양료 청구(자녀가 직접 친권자 X 양친 상대) ④ 양육비 vs 부양료 구분 ⑤ 협의 vs 가정법원 심판 5가지 트랙이 핵심. \"양육비\"는 미성년 자녀, \"부양료\"는 성년 자녀의 청구이지만 실무상 연장 협의가 일반적인 흐름입니다. 대응은 ① 종료 ② 자력 ③ 부양 ④ 청구 ⑤ 협의 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 성년 자녀 양육비 연장 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 종료·자력·부양·청구·협의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 만 19세 도달 시 양육비 종료 (이혼 결정문 기준)</strong></li>\n<li><strong>② 자녀 자력 부족 자료 (대학 재학·학비·생활비)</strong></li>\n<li><strong>③ 부양료 청구 검토 (민법 974조, 자녀가 직접 청구)</strong></li>\n<li><strong>④ 양육비 연장 협의 (이혼 부모 간 합의서)</strong></li>\n<li><strong>⑤ 협의 결렬 시 가정법원 부양료 심판</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"양육비\"는 미성년 자녀를 위한 부모 간 비용. 자녀가 성년이 되면 양육비는 종료되지만 \"부양료\"라는 다른 이름으로 자녀가 직접 부모에게 청구할 수 있는 영역. 대학 재학·취업 전이면 자력 부족이 평가되는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자력·협의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자녀 자력 자료 정리 (대학 재학증명·학비·생활비) (즉시)</strong></li>\n<li><strong>2단계 — 이혼 부모 간 양육비 연장 협의 (졸업·취업까지)</strong></li>\n<li><strong>3단계 — 협의 결렬 시 자녀가 직접 부모 상대 부양료 청구 (가정법원 마류)</strong></li>\n<li><strong>4단계 — 부양료 산정 (자녀 자력 + 부모 소득 균형, 학비·생활비 기준)</strong></li>\n<li><strong>5단계 — 결정 후 매월 이행 + 미지급 시 이행명령·직접지급명령</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">성년 자녀 양육비 연장 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자력·소득·신분 갈래입니다.</strong></p>\n<ul>\n<li><strong>자녀 대학 재학증명서·학생증 사본</strong></li>\n<li><strong>학비·등록금·자취 월세 자료</strong></li>\n<li><strong>자녀 근로·아르바이트 소득 자료 (자력 평가)</strong></li>\n<li><strong>부모 소득 자료 (국세청 소득금액증명·연말정산)</strong></li>\n<li><strong>이혼·양육비 부담조서·판결문 (종료 기준)</strong></li>\n<li><strong>자녀 신분증·가족관계증명서</strong></li>\n<li><strong>부양료 청구서·산정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 성년 자녀의 부양료는 \"양육비 연장\"이 아닌 \"별도 청구\"라 자녀가 직접 청구 주체가 되는 영역. 대학 재학·학비 부담이 자력 부족 자료의 핵심. 부모 일방이 거부해도 가정법원 심판이 가능한 흐름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자력 부족 평가</strong> — 대학 재학·학비 부담.</li>\n<li><strong>부양료 vs 양육비</strong> — 청구 주체·근거 다름.</li>\n<li><strong>부모 소득</strong> — 부양 능력 평가.</li>\n<li><strong>학비·생활비</strong> — 부양료 산정 기준.</li>\n<li><strong>휴학·취업</strong> — 자력 회복 시 종료 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성년 자녀의 부양료 청구',
        summary:
          '대법원 2018스724(대법원 영역에서 법원은 성년에 이른 자녀가 대학 재학 중이거나 취업 전인 사정으로 자력으로 생활을 유지할 수 없는 경우 직계혈족인 부모에 대해 부양료를 청구할 수 있는 흐름을 다룬 사례 흐름이 있습니다. 부양료는 양육비와 달리 자녀가 직접 청구 주체가 되고 \"자력 부족 + 부모 부양 능력\"이 핵심으로 평가되는 영역.',
        takeaway: '성년 자녀도 자력 부족 시 부양료 청구 가능. 대학 재학·학비 부담이 자력 부족 자료의 핵심. 청구 주체는 자녀 본인.',
      },
    ],
    faq: [
      {
        question: '만 19세 넘으면 양육비가 끝나나요?',
        answer:
          '<strong>양육비는 종료되지만 부양료라는 다른 이름으로 청구가 평가되는 영역입니다.</strong>',
      },
      {
        question: '대학 등록금도 청구되나요?',
        answer:
          '<strong>자력 부족 자료의 핵심으로 등록금·자취비가 부양료 산정에 평가되는 영역입니다.</strong>',
      },
      {
        question: '청구 주체는 누구인가요?',
        answer:
          '<strong>성년 자녀 본인이 부모 상대로 직접 청구하는 영역입니다.</strong>',
      },
      {
        question: '부모가 거부하면 어떻게 하나요?',
        answer:
          '<strong>가정법원 부양료 심판 청구로 평가받을 수 있는 영역입니다.</strong>',
      },
      {
        question: '졸업 후에도 청구되나요?',
        answer:
          '<strong>취업·자력 회복 시 종료가 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 종료 시점', href: '/guide/child-support/child-support-termination-age-procedure' },
      { label: '양육비 산정기준', href: '/guide/child-support/child-support-calculation-standard' },
      { label: '양육비 감액 심판', href: '/guide/child-support/child-support-modification-petition-payer-remarriage-job-loss-track' },
      { label: '양육비 인상 청구', href: '/guide/child-support/child-support-increase-claim-procedure' },
      { label: '소득 변동 변경', href: '/guide/child-support/child-support-modification-income-change' },
    ],
  },
];
