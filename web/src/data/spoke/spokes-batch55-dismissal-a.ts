import { SpokePage } from '../spoke-pages';

// batch55 dismissal A — 2개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 사장이 카카오톡으로 "내일부터 나오지 마"라고 일방적 통보한 근로자가 근로기준법 제27조 서면통지 의무 위반 + 부당해고 결합 트랙으로 다툴 수 있도록 돕는 페이지다.
// 2. 이 페이지는 권고사직에 사인한 뒤 마음이 바뀐 근로자가 사직 의사표시의 하자(비진의·강박·기망) 입증으로 사직 철회·해고무효확인을 다툴 수 있도록 돕는 페이지다.

export const spokesBatch55DismissalA: SpokePage[] = [
  // ─── 1. dismissal / dismissal-text-message-tomorrow-no-come-illegal ───
  {
    domain: 'dismissal',
    slug: 'dismissal-text-message-tomorrow-no-come-illegal',
    keyword: '카톡 해고 통보 서면통지 위반',
    questionKeyword: '사장이 카톡으로 "내일부터 나오지 마"라고 통보했어요. 다툴 수 있나요?',
    ctaKeyword: '카톡 해고 통보 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '카톡으로 해고 통보받았다면 다투는 4가지 절차 | 로앤가이드',
      description:
        '사장이 카톡·문자로 "내일부터 나오지 마"라고 통보했다면 근로기준법 제27조 서면통지 위반과 부당해고 4단계 다툼 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"어제 저녁 8시에 사장이 카톡으로 \'내일부터 나오지 마, 더 같이 못 가겠다\'고만 한 줄 보냈어요. 인사발령서·해고사유서는 없었고, 다음 날 사무실에 갔더니 출입카드도 안 됩니다." 카카오톡·문자메시지·구두 통보만으로 해고된 사안은, 근로기준법 제27조가 요구하는 해고사유·해고시기 서면통지 의무를 위반한 형식 무효 정황 + 부당해고 본안 다툼이 결합된 트랙으로 검토할 수 있는 사례가 있습니다. 노동위 부당해고 구제신청은 해고일로부터 3개월 이내, 해고예고수당(30일분 통상임금)은 별도 노동청 진정으로 청구할 수 있는 영역이라 두 트랙을 병행해두는 것이 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 카톡 해고 통보에서 다툴 수 있는 4가지 절차 위반 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 서면통지 형식 + 해고예고 + 정당사유 + 노동위 구제 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로기준법 제27조 서면통지 의무 위반</strong> — 사용자가 근로자를 해고하려면 해고사유와 해고시기를 서면으로 통지해야 효력이 있습니다. 카카오톡·문자·구두 통보만으로 한 해고는 형식 자체가 위반된 정황입니다(전자결재·사내메일은 일정 요건에서 서면으로 인정될 여지가 있으나 일반 카톡은 다투는 영역).</li>\n<li><strong>② 근로기준법 제26조 해고예고 30일</strong> — 계속근로 3개월 이상이면 사용자는 30일 전 예고하거나 30일분 통상임금 상당액을 지급해야 합니다. "내일부터 나오지 마"는 즉시해고이므로 예고수당 청구 트랙이 함께 열립니다.</li>\n<li><strong>③ 근로기준법 제23조 정당한 이유 부재</strong> — 5인 이상 사업장이면 해고에 정당한 이유가 필요합니다. 사유가 통보서에 기재되지 않았다면 본안에서도 회사가 사후에 사유를 만들기 어려워 다툼 자료가 됩니다.</li>\n<li><strong>④ 노동위 부당해고 구제신청 (해고일 3개월 이내)</strong> — 형식 위반과 본안 위반을 함께 주장. 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토 영역입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 서면통지 위반은 그 자체로 해고가 무효로 평가되는 사례가 있어, 회사가 사후에 해고사유서를 발행하더라도 "최초 통보 시점"의 형식이 핵심 다툼 영역입니다. 카톡·문자 원문은 캡처 + 백업 + 시점이 명확한 클라우드 보관까지 챙겨두는 것이 안전합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 카톡·문자 원본 보존</strong> (즉시) — 통보 메시지 캡처 + 발신자 프로필 + 발신 시점, 출입카드 차단·사무실 폐쇄 정황 사진, 동료의 사실확인서.</li>\n<li><strong>2단계 — 회사에 해고사유서 서면 요구</strong> (3~7일 내) — 내용증명으로 "해고사유와 해고시기를 서면으로 통지해 달라"고 요구. 회사 측 무대응·구두 답변은 그 자체로 형식 위반 정황 자료가 됩니다.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 카톡 원문·내용증명 사본·근로계약서 각 2부 제출.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 서면통지 형식 위반 → 정당사유 부재 → 해고예고 위반 → 비례성 결여 4단계로 입증.</li>\n<li><strong>5단계 — 판정·해고예고수당 병행</strong> — 인용 시 원직복직 + 임금상당액 또는 금전보상명령. 별도로 노동청(labor.moel.go.kr)에 30일분 통상임금 진정 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">카톡·문자 해고 사안에서 서면통지 위반·해고예고·정당사유 4단계 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 통보 원본 자료 + 근로 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>카톡·문자 원본 캡처</strong> — 메시지 본문 + 발신자 프로필 + 발신 시점 (전체 화면 + 일자 표시).</li>\n<li><strong>사무실 출입 차단 정황 자료</strong> — 출입카드 비활성·사무실 잠김·짐 반출 사진, CCTV 요청 정황.</li>\n<li><strong>근로계약서·취업규칙 사본</strong> — 해고 관련 조항·서면통지 명문 규정.</li>\n<li><strong>4대보험 가입 정보</strong> — 사업장 상시 근로자 수, 본인 가입 시점.</li>\n<li><strong>회사에 보낸 내용증명 사본</strong> — 해고사유서 요구·회사 응답·미응답 정황.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 통상임금 산정용(임금상당액 + 해고예고수당).</li>\n<li><strong>동료 사실확인서</strong> — 해고 전후 회사 분위기·통보 시점·후임자 채용 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카톡 메시지는 회사가 사후에 "단순한 의견 전달이었다"고 주장하는 사례가 있어, "내일부터 나오지 마"라는 단정 표현·출입카드 차단·후임 채용 정황을 함께 묶어두면 해고 의사 객관 정황 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"카톡은 단순 농담·의견이었다" 주장 반박</strong> — 출입카드 차단·후임 채용·임금 미지급 정황이 함께 있다면 객관적으로 해고 의사 표시로 평가되는 사례가 있습니다.</li>\n<li><strong>"전자메시지도 서면이다" 주장 반박</strong> — 판례는 서면통지의 취지를 "분쟁 예방·근로자 대응 보장"으로 보고 있어, 일방 발신 카톡이 해고사유·시기를 명확히 담지 못했다면 형식 위반 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>"권고사직이었다" 주장 반박</strong> — 본인이 사직서·합의서에 서명한 자료가 없다면 권고사직이 아니라 일방 해고로 다투는 영역이 됩니다.</li>\n<li><strong>해고예고수당 별도 청구</strong> — 부당해고 구제와 별개로 해고예고 30일 위반 시 30일분 통상임금은 노동청 임금체불 진정으로 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·임금체불 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고수당·임금체불 진정 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 카톡 통보 직후 회사가 "사직서만 써주면 위로금 줄게"라고 제안하는 사례가 있는데, 사직서를 자필 작성하면 부당해고 다툼 트랙이 약해질 수 있어 노동위·법률구조공단 상담을 먼저 검토하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 서면통지 의무의 취지와 해고사유 특정 정도',
        summary:
          '대법원 2021두50642 사건(대법원, 2022.01.14 선고)에서 법원은 근로기준법 제27조 서면통지 제도는 사용자가 해고에 신중을 기하게 하고 해고의 존부·시기·사유를 명확히 해 사후 분쟁을 적정하게 해결하며 근로자가 해고에 적절히 대응할 수 있게 하기 위한 취지라고 판시했습니다. 따라서 사용자가 해고사유 등을 서면으로 통지할 때는 근로자의 처지에서 해고사유가 무엇인지 구체적으로 알 수 있어야 한다고 보았습니다.',
        takeaway: '카카오톡·문자 통보는 "근로자가 사유를 구체적으로 알고 대응할 수 있는" 형식이 아닌 사례가 많아 서면통지 위반 정황으로 평가될 여지가 있으며, 통보 시점·내용·사유 명시 여부를 종합 점검하는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '카톡으로 해고 통보받았는데 회사는 "그냥 농담이었다"고 합니다. 어떻게 다투나요?',
        answer:
          '<strong>객관 정황 자료가 결합되면 농담 주장은 어렵습니다.</strong> 출입카드 차단·후임 채용·임금 미지급 등 해고 후 일관된 회사 행태가 있다면 객관적 해고 의사 표시로 평가되는 사례가 있습니다.',
      },
      {
        question: '카톡 해고는 100% 무효로 인정되나요?',
        answer:
          '<strong>형식 위반 자체가 다툼 자료가 되지만 100% 자동 무효는 아닙니다.</strong> 다만 본인이 해고사유를 구체적으로 알고 대응할 수 있는 상황이 아니었다면 서면통지 위반 정황이 강하게 평가될 여지가 있습니다.',
      },
      {
        question: '해고 후 한 달이 지났는데 아직 노동위 신청 가능한가요?',
        answer:
          '<strong>해고일로부터 3개월 이내라면 가능합니다.</strong> 다만 늦어질수록 자료 보존·동료 진술 확보가 어려워지므로 가능한 빨리 자료를 확보해두는 것이 안전합니다.',
      },
      {
        question: '5인 미만 사업장인데 카톡 해고됐어요. 다툴 수 있나요?',
        answer:
          '<strong>5인 미만은 근로기준법 제23조 정당한 이유 요건 + 노동위 부당해고 구제 트랙이 적용되지 않는 영역입니다.</strong> 다만 제26조 해고예고는 적용되어 30일분 통상임금 청구는 노동청 진정으로 가능한 사례가 있습니다.</strong>',
      },
      {
        question: '해고예고수당과 부당해고 구제를 동시에 받을 수 있나요?',
        answer:
          '<strong>병행 가능합니다.</strong> 해고예고수당은 노동청 임금체불 진정 트랙(30일분 통상임금), 부당해고 구제는 노동위 트랙(원직복직 + 임금상당액)으로 목적이 달라 동시에 진행할 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
      { label: '해고예고수당 30일분 청구 절차', href: '/guide/dismissal/dismissal-30day-notice-pay-claim' },
      { label: '입사 1년 미만 부당해고 구제', href: '/guide/dismissal/dismissal-under-1year-tenure-relief-eligibility' },
      { label: '5인 미만 사업장 해고 다툼', href: '/guide/dismissal/dismissal-under-five-civil-track' },
      { label: '구두 해고 통보 효력 다툼', href: '/guide/dismissal/dismissal-verbal-notice-validity' },
    ],
  },

  // ─── 2. dismissal / dismissal-resignation-after-recommendation-revoke ───
  {
    domain: 'dismissal',
    slug: 'dismissal-resignation-after-recommendation-revoke',
    keyword: '권고사직 사인 후 철회 의사표시 하자',
    questionKeyword: '권고사직에 사인하고 사직서를 냈는데 마음이 바뀌었어요. 철회·다툼 가능한가요?',
    ctaKeyword: '권고사직 철회 다툼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '권고사직 사인 후 마음 바뀌었다면 — 철회 5가지 다툼 포인트 | 로앤가이드',
      description:
        '권고사직에 서명한 뒤 마음이 바뀌었다면 사직 의사표시의 비진의·강박·기망 5가지 입증 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"갑자기 회의실로 불러서 \'오늘 사직서 안 쓰면 징계해고가 들어간다\'고 압박해서 그 자리에서 사직서에 서명했어요. 집에 와서 생각해보니 회사가 든 사유가 사실과 다른데, 이미 사인한 사직서를 되돌릴 수 있을지 막막합니다." 권고사직은 형식상 합의해지이지만, 실제로는 즉시해고 압박·허위 사유 제시·다른 동료 처우와의 차별 정황이 결합된 사례가 많아, 사직 의사표시의 비진의·강박·기망 입증으로 다툴 수 있는 사례가 있습니다. 사직서 수리 직후라도 사직 의사표시의 하자 + 실질적 해고 평가 트랙으로 노동위 구제신청을 검토할 수 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 권고사직 사인 후 철회·다툼에서 점검할 5가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 비진의·강박·기망·실질적 해고·동료 비교 5단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비진의 의사표시 (민법 제107조 정황)</strong> — 본인이 진정으로 사직을 원하지 않았으나 "최선의 선택"이라 판단해 서명한 정황. 회사도 이를 알거나 알 수 있었다면 의사표시 무효 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>② 강박에 의한 의사표시 (민법 제110조)</strong> — 회사가 "사직 안 하면 징계해고·형사고소·손해배상" 등 위법한 해악을 고지했다면 강박 정황. 다만 단순한 "권고"·"제안" 수준은 강박으로 인정되지 않는 사례도 많아 발언 녹취·문자 자료가 핵심.</li>\n<li><strong>③ 기망에 의한 의사표시 (민법 제110조)</strong> — 회사가 든 사유(예: 경영악화, 본인의 비위)가 사실과 다르거나 동료에게는 적용하지 않는 차별 정황이라면 기망 정황으로 검토할 수 있는 영역.</li>\n<li><strong>④ 실질적 해고 평가</strong> — 회사가 사직서 형식만 빌리고 실제로는 일방적으로 근로관계를 종료시킨 사안은 의원면직 형식이라도 해고로 평가되는 사례가 있어, 정당사유·서면통지·구제신청 트랙이 함께 열립니다.</li>\n<li><strong>⑤ 동료 비교·후속 채용 정황</strong> — 같은 사유로 다른 동료는 해고되지 않았거나, 사직 후 곧바로 후임이 채용된 정황이라면 회사 측 사유의 합리성·필요성에 대한 다툼 자료가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사직서를 자필로 쓰고 서명까지 해도, 그 의사표시 자체에 비진의·강박·기망의 하자가 있었다면 사직이 무효로 평가되어 회사의 면직 처분이 실질적 해고로 다시 평가되는 사례가 있습니다. 사직 직후라면 자료를 빠르게 정리해 노동위 부당해고 구제신청(해고일 3개월 이내)을 검토하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사직 철회·구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 구제 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사직 의사 철회 통지</strong> (즉시·내용증명) — 사직서가 회사에 의해 아직 수리되기 전이라면 사직 의사 철회는 단독으로 효력이 있는 사례가 있어, 즉시 내용증명으로 "사직 의사 철회 + 비진의·강박·기망 사유"를 통지.</li>\n<li><strong>2단계 — 사직 정황 자료 보존</strong> (즉시) — 회의실 압박 시점 녹취, 회사 측 발언 메일·문자, 사직서 작성 일시·장소, 다른 직원 동석 여부, 본인의 즉시 항의 정황.</li>\n<li><strong>3단계 — 회사 측 사유의 사실관계 점검</strong> — 회사가 든 비위·경영악화 사유가 사실과 다른지 자료로 검증, 동료 비교·후속 채용 정황 정리.</li>\n<li><strong>4단계 — 노동위 부당해고 구제신청</strong> (사직 처리일·해고일 3개월 이내) — 사직 의사표시 무효 + 실질적 해고 + 정당사유 부재 트랙으로 입증. 5인 이상 사업장 기준.</li>\n<li><strong>5단계 — 판정·민사 해고무효확인 병행</strong> — 노동위 인용 시 원직복직 + 임금상당액. 5인 미만이거나 사직 후 시간이 흘러 노동위 트랙이 어려운 사례라면 민사 해고무효확인 소송 트랙 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사직서 쓰기 전 확인할 것, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">권고사직 사인 후 철회·다툼 가능성을 의사표시 하자 5단계로 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사직 정황 자료 + 회사 측 사유 점검 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>회의실 압박 시점 녹취·메모</strong> — "사직 안 하면 징계해고" 등 발언, 동석자 명단, 작성 강요 정황.</li>\n<li><strong>사직서 사본·작성 일시 자료</strong> — 자필·인쇄·서명 형식, 작성 장소·시간, 즉시 제출 여부.</li>\n<li><strong>회사 측 사유 자료</strong> — 회사가 든 비위·경영악화 근거, 본인이 받은 평가서·소명 기회 부여 여부.</li>\n<li><strong>동료 비교 자료</strong> — 같은 사유 동료 처우, 사직 후 후임 채용 정황(공고·인사발령서).</li>\n<li><strong>사직 의사 철회 내용증명 사본</strong> — 발송일·도달일·회사 측 응답 정황.</li>\n<li><strong>근로계약서·취업규칙</strong> — 사직 절차·해고 절차 규정.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사직서 작성 직후 동료에게 보낸 카톡·문자에 "어쩔 수 없이 썼다", "사실과 다른 사유다" 같은 즉시 항의 정황이 남아있으면 비진의·강박 정황의 강력한 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인이 자발적으로 서명했다" 주장 반박</strong> — 자필 서명 자체가 자발성을 보장하지 않습니다. 작성 정황·강박 발언·즉시 항의 자료로 의사표시 하자를 입증하는 영역.</li>\n<li><strong>"위로금까지 받았다" 주장 반박</strong> — 위로금 수령은 합의 정황 자료가 되지만, 의사표시 하자가 결합되면 위로금 반환 + 해고무효 트랙도 검토할 수 있는 사례가 있습니다.</li>\n<li><strong>"단순 권고였지 강요 아니었다" 주장 반박</strong> — 회사가 "사직 안 하면 징계해고"라고 위법한 해악을 고지한 정황이라면 강박, "사실과 다른 비위 사유"를 든 정황이라면 기망 영역으로 다툼 트랙이 분기됩니다.</li>\n<li><strong>실업급여 수급과 별개</strong> — 권고사직 코드로 실업급여를 받은 사실이 있어도 부당해고 다툼 자체가 봉쇄되지는 않는 사례가 있습니다(인용 시 정산 영역). 다툼 결심을 미루지 마세요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 권고사직 철회·해고무효확인 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 권고사직 코드·실업급여 정정 절차.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "사직서·합의서·위로금 수령확인서"를 한 자리에서 같이 서명하라고 요구하는 사례가 있는데, 모두 의사표시 하자가 있다면 다툼 영역에 들어가지만 자료가 적층될수록 입증 부담이 커지므로 서명 전 단 한 통의 외부 상담이라도 거치는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 회생절차 중 사직서 제출이 비진의 의사표시로 무효라고 본 사례',
        summary:
          '대구고등법원 2013나6064 사건(대구고법, 2015.01.21 선고)에서 법원은 회생절차 진행 중인 회사가 인력 구조조정 방안으로 근로자에게서 사직서를 제출받아 의원면직 형식을 취한 사안에서, 제반 사정에 비추어 근로자의 사직서 작성·제출은 비진의 의사표시에 해당하고 회사도 이를 알거나 알 수 있었으므로 사직 의사표시는 무효이며, 회사가 근로자를 면직시킨 것은 실질적으로 해고에 해당한다고 판시했습니다. 또한 그 해고는 근로기준법 제24조 정리해고 요건을 갖추지 못해 무효라고 보았습니다.',
        takeaway: '사직서를 자필 작성·서명했더라도 의사표시 자체에 비진의 정황이 있고 회사도 이를 알았다면 의원면직 형식이 실질적 해고로 평가되는 사례가 있어, 권고사직 직후 자료를 빠르게 정리하면 다툴 수 있는 영역이 열립니다.',
      },
    ],
    faq: [
      {
        question: '사직서를 회사가 이미 수리했어도 철회 가능한가요?',
        answer:
          '<strong>수리 후에도 의사표시 하자가 있으면 무효 다툼이 가능한 사례가 있습니다.</strong> 다만 수리 전에 내용증명으로 철회 의사를 즉시 통지해두는 것이 가장 안전한 방법이라, 사직 직후 24~72시간 내 행동이 중요합니다.',
      },
      {
        question: '"사직 안 하면 징계해고 들어간다"는 발언은 강박으로 인정되나요?',
        answer:
          '<strong>위법한 해악 고지 정황으로 평가될 여지가 있습니다.</strong> 다만 회사가 실제로 징계 사유를 적법하게 가지고 있었다면 정당한 권리 고지 정황으로 평가되는 사례도 있어, 사유의 사실관계 점검이 핵심입니다.',
      },
      {
        question: '권고사직 후 위로금까지 받았는데 부당해고 다툴 수 있나요?',
        answer:
          '<strong>의사표시 하자가 결합되면 다툴 수 있는 사례가 있습니다.</strong> 다만 인용 시 위로금 정산 영역이 발생할 수 있어, 위로금 액수·합의서 문구를 함께 점검해야 합니다.',
      },
      {
        question: '권고사직 코드로 실업급여를 받았는데 부당해고 신청하면 실업급여 환수되나요?',
        answer:
          '<strong>다툼 결과에 따라 정산 영역이 달라지는 사례가 있습니다.</strong> 인용 시 임금상당액으로 정산되거나 코드 정정이 이루어질 수 있어, 노동위 결정 후 고용센터와 별도 정산 절차를 거치게 됩니다.',
      },
      {
        question: '5인 미만 사업장인데 권고사직 사인 후 철회하고 싶어요. 가능한가요?',
        answer:
          '<strong>5인 미만은 노동위 부당해고 구제 트랙이 제한됩니다.</strong> 다만 민사 해고무효확인 소송 + 의사표시 하자 다툼은 별도로 가능한 영역이라, 법률구조공단 132에서 절차 상담을 검토할 수 있습니다.',
      },
    ],
    cta: { text: '사직서 쓰기 전 확인할 것, AI로 점검하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '권고사직 거부 후 압박 해고', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
      { label: '사직서 자필 작성 비진의 무효 다툼', href: '/guide/dismissal/dismissal-resignation-letter-non-genuine' },
      { label: '실질적 해고 vs 의원면직 구분', href: '/guide/dismissal/dismissal-de-facto-vs-voluntary' },
      { label: '권고사직 코드 실업급여 정정', href: '/guide/dismissal/dismissal-recommended-unemployment-code' },
      { label: '카톡 해고 통보 서면통지 위반', href: '/guide/dismissal/dismissal-text-message-tomorrow-no-come-illegal' },
    ],
  },
];
