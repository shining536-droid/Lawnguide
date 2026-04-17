import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 26. 이 페이지는 [소액소송을 처음 준비하는 개인]의 [변호사 없이 혼자 소송을 진행해야 하는 상황]에서 [본인소송 가능 여부와 핵심 준비사항 파악]을 돕는 페이지다.
// 27. 이 페이지는 [스토킹 피해자]의 [증거를 수집하려다 오히려 역고소당할 수 있는 상황]에서 [합법적 증거 수집 방법과 흔한 실수 회피]를 돕는 페이지다.
// 28. 이 페이지는 [교통사고 피해자]의 [보험금 청구를 위해 서류를 준비해야 하는 상황]에서 [필요 서류 목록과 누락 방지 체크]를 돕는 페이지다.
// 29. 이 페이지는 [자발적으로 퇴사한 근로자]의 [실업급여를 받을 수 있는지 불확실한 상황]에서 [자발적 퇴사 수급 요건과 인정 사례 파악]을 돕는 페이지다.
// 30. 이 페이지는 [임금체불을 당한 퇴직 근로자]의 [소멸시효 3년이 임박한 상황]에서 [소멸시효 기산점·중단 방법과 기한 내 조치]를 돕는 페이지다.

export const spokesBatch18_26to30: SpokePage[] = [
  {
    domain: 'small-claims',
    slug: 'can-i-do-it-without-lawyer',
    keyword: '소액소송 변호사 없이 혼자 할 수 있나요',
    questionKeyword: '소액소송은 꼭 변호사를 써야 하나요?',
    ctaKeyword: '소액소송 본인소송',
    type: 'Q&A형',
    meta: {
      title: '소액소송 변호사 없이 3단계로 혼자 하는 법 | 로앤가이드',
      description: '소액소송을 해야 하는데 변호사 비용이 부담되어 혼자 할 수 있는지 고민이라면, 본인소송 가능 여부와 핵심 준비사항을 지금 확인하세요.',
    },
    intro: '빌려준 돈 500만원을 돌려받지 못했습니다. 소액소송을 하려는데 변호사 수임료가 청구금액보다 비쌀 것 같아 망설이고 있습니다. 소액사건심판법은 변호사 없이도 소송을 진행할 수 있도록 절차를 간소화해두었습니다. 혼자서도 가능한 소액소송의 핵심 절차를 확인해보세요.',
    sections: [
      {
        title: '첫째, 소액소송은 본인소송이 원칙입니다 — 변호사 없이 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">소액사건심판법 제8조에 따라 소액사건은 변호사 대리 없이 당사자 본인이 직접 수행할 수 있습니다</strong></p>\n<p>소액사건(청구금액 3,000만원 이하)은 일반 민사소송보다 절차가 <strong>대폭 간소화</strong>되어 있습니다. 소장 양식도 법원 홈페이지(전자소송 ecfs.scourt.go.kr)에서 다운로드할 수 있고, 1회 변론기일로 심리를 마치는 것이 원칙입니다.</p>\n<p>실제로 소액사건의 <strong>70% 이상이 본인소송</strong>으로 진행됩니다. 다만 상대방이 변호사를 선임하거나 법률관계가 복잡한 경우에는 대한법률구조공단(전화 132)의 무료 법률상담을 먼저 받아보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 3,000만원 이하 소액소송 → 본인소송 가능 → 1회 변론 원칙</blockquote>',
      },
      {
        title: '둘째, 소장 작성과 증거 준비가 승패를 결정합니다',
        content:
          '<p><strong style="color:#1e3a5f">소장에는 당사자 정보, 청구취지, 청구원인, 입증방법을 빠짐없이 기재하세요</strong></p>\n<p><strong>청구취지</strong>는 "피고는 원고에게 500만원 및 이에 대한 지연손해금을 지급하라"처럼 결론을 먼저 씁니다. <strong>청구원인</strong>에는 언제, 누구에게, 얼마를, 어떤 조건으로 빌려줬는지를 시간순으로 기재합니다.</p>\n<p>증거는 <strong>차용증, 계좌이체 내역, 카카오톡 대화 캡처, 녹취록</strong> 등을 갑 제1호증부터 번호를 매겨 첨부합니다. 증거가 부족하면 법원이 석명권을 행사해 보충을 요구할 수 있지만, 미리 준비해두는 것이 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소장 필수항목: 당사자 정보 + 청구취지 + 청구원인 + 증거 목록</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/small-claims" style="color:#1565c0;font-weight:600">내 소액소송 승소 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 이행권고결정 제도를 활용하면 재판 없이 해결할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">소액사건심판법 제5조의3에 따라 법원은 변론 없이 이행권고결정을 할 수 있습니다</strong></p>\n<p>소장이 접수되면 법원은 곧바로 변론기일을 잡는 대신 <strong>이행권고결정</strong>을 먼저 할 수 있습니다. 이는 "피고는 원고에게 ○○만원을 지급하라"는 결정으로, 피고가 <strong>2주 이내에 이의신청을 하지 않으면 확정판결과 동일한 효력</strong>이 발생합니다.</p>\n<p>피고가 이의신청을 하면 그때 변론기일이 잡힙니다. 이행권고결정이 확정되면 바로 <strong>강제집행</strong>(재산 압류)이 가능하므로, 상대방이 무응답일 가능성이 높다면 매우 유리한 절차입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이행권고결정: 소장 접수 → 법원 결정 → 2주 이의 없으면 확정 → 강제집행 가능</blockquote>',
      },
      {
        title: '넷째, 변론기일에는 핵심만 간결하게 진술하세요',
        content:
          '<p><strong style="color:#1e3a5f">소액사건은 1회 변론으로 심리를 마치는 것이 원칙이므로 준비가 중요합니다</strong></p>\n<p>변론기일에는 <strong>준비서면</strong>을 미리 제출(기일 7일 전까지)하고, 법정에서는 핵심 쟁점만 간결하게 진술하세요. 감정적 호소보다는 "언제 빌려줬고, 약속 기한이 지났고, 증거는 이것이다"처럼 <strong>사실 중심</strong>으로 말하는 것이 효과적입니다.</p>\n<p>판사가 질문하면 정확하게 답변하고, 모르는 것은 모른다고 솔직히 말하세요. 소액사건은 심리가 <strong>30분~1시간</strong> 내에 끝나는 경우가 대부분이며, 즉시 선고가 이루어질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변론 팁: 준비서면 사전 제출 → 사실 중심 진술 → 질문에 정확히 답변</blockquote>',
      },
    ],
    cases: [
      {
        title: '불법행위 손해배상에서 상당인과관계 판단 기준을 밝힌 사례',
        summary:
          '대법원 2017다247589 사건(2022.09.16 선고)에서 법원은 불법행위 손해배상책임을 인정하려면 위법한 행위와 손해 사이에 상당인과관계가 있어야 하며, 주의의무를 부과하는 법령의 목적과 보호법익, 가해행위 태양 등을 종합적으로 고려해 판단해야 한다고 판시했습니다.',
        takeaway:
          '소액소송에서 손해배상을 청구할 때는 상대방의 행위와 내 손해 사이의 인과관계를 구체적 증거로 입증해야 합니다. 계약서, 이체내역, 대화기록 등 인과관계를 뒷받침하는 자료를 빠짐없이 준비하세요.',
      },
    ],
    faq: [
      {
        question: '소액소송 비용은 얼마나 드나요?',
        answer: '소송비용은 청구금액에 따라 다릅니다. 500만원 청구 시 인지대 약 <strong>25,000원</strong>, 송달료 약 <strong>52,800원</strong>(당사자 2인 기준)으로 총 <strong>8만원 이내</strong>입니다. 변호사 수임료(보통 100~300만원)에 비하면 매우 저렴합니다.',
      },
      {
        question: '상대방 주소를 모르면 소액소송을 못 하나요?',
        answer: '주소를 모르면 <strong>주민등록 초본 열람(위임장 필요)</strong>이나 법원을 통한 주소 보정 절차를 이용할 수 있습니다. 그래도 주소를 알 수 없으면 <strong>공시송달</strong> 제도를 신청해 소송을 진행할 수 있습니다.',
      },
      {
        question: '소액소송에서 지면 어떻게 되나요?',
        answer: '패소하면 <strong>상대방 소송비용(인지대·송달료)</strong>을 부담할 수 있습니다. 다만 소액사건은 비용이 크지 않고, 판결에 불복하면 <strong>2주 이내에 항소</strong>할 수 있습니다.',
      },
      {
        question: '이겼는데 상대방이 돈을 안 주면요?',
        answer: '승소 확정판결을 받으면 <strong>강제집행</strong>을 신청할 수 있습니다. 상대방의 예금, 부동산, 급여 등을 압류할 수 있으며, 강제집행 신청에는 <strong>집행문 부여 신청 → 송달증명원 발급 → 집행 신청</strong>의 순서로 진행합니다.',
      },
      {
        question: '전자소송으로도 소액소송을 할 수 있나요?',
        answer: '네, <strong>전자소송(ecfs.scourt.go.kr)</strong>에서 소장 제출부터 판결문 열람까지 모든 절차를 온라인으로 진행할 수 있습니다. 전자소송을 이용하면 인지대가 <strong>10% 할인</strong>되는 혜택도 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '빌려준 돈 못 받았을 때 소액소송', href: '/guide/small-claims/lending-money-not-returned-lawsuit' },
      { label: '소장 작성 시 필요한 서류 목록', href: '/guide/small-claims/complaint-writing-required-documents' },
      { label: '소액소송 vs 지급명령 비교', href: '/guide/small-claims/small-claims-vs-payment-order-comparison' },
    ],
  },
  {
    domain: 'stalking',
    slug: 'evidence-collection-common-mistakes',
    keyword: '스토킹 증거 수집할 때 흔히 하는 실수',
    questionKeyword: '스토킹 증거를 모으다가 오히려 역고소당할 수 있나요?',
    ctaKeyword: '스토킹 증거 수집',
    type: '실수함정형',
    meta: {
      title: '스토킹 증거 수집 5가지 흔한 실수와 대응법 | 로앤가이드',
      description: '스토킹 피해 증거를 모으려다 오히려 법적 문제가 생길까 불안하다면, 합법적 증거 수집법과 흔한 실수를 지금 확인하세요.',
    },
    intro: '헤어진 상대가 매일 집 앞에서 기다립니다. 증거를 남기려고 몰래 촬영했는데, 친구가 "그것도 불법일 수 있다"고 합니다. 스토킹 피해를 입증하려면 증거가 필수이지만, 수집 과정에서 법을 위반하면 오히려 역고소를 당할 수 있습니다. 흔히 하는 실수 5가지를 확인해보세요.',
    sections: [
      {
        title: '실수 1: 상대방 몰래 녹음하면 불법이라고 생각하는 것',
        content:
          '<p><strong style="color:#1e3a5f">통신비밀보호법상 대화 당사자가 직접 녹음하는 것은 합법입니다</strong></p>\n<p>많은 분들이 녹음은 무조건 불법이라고 오해합니다. 하지만 <strong>내가 참여한 대화를 내가 녹음</strong>하는 것은 합법입니다. 상대방이 전화로 협박하거나, 대면 상황에서 위협적 발언을 하면 <strong>즉시 녹음을 시작</strong>하세요.</p>\n<p>단, <strong>제3자 간의 대화를 몰래 녹음</strong>(예: 상대방과 다른 사람의 통화를 도청)하면 통신비밀보호법 위반으로 처벌받을 수 있습니다. 내가 직접 참여한 대화만 녹음하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합법 녹음: 내가 참여한 대화를 직접 녹음 → OK | 제3자 대화 도청 → 불법</blockquote>',
      },
      {
        title: '실수 2: CCTV·블랙박스 영상만 믿고 다른 증거를 안 모으는 것',
        content:
          '<p><strong style="color:#1e3a5f">CCTV 영상은 보존 기간이 짧아 신속히 확보해야 합니다</strong></p>\n<p>아파트·편의점 CCTV는 보통 <strong>30일 이내</strong>에 덮어씌워집니다. 스토킹 행위가 발생한 직후 관리사무소나 가게에 <strong>영상 보존 요청</strong>을 서면으로 하고, 경찰에 신고하면서 <strong>CCTV 확보를 요청</strong>하세요.</p>\n<p>CCTV만으로는 스토킹의 <strong>반복성과 불안감</strong>을 입증하기 어렵습니다. 문자·DM 캡처, 통화기록, 일시별 방문 일지 등 <strong>다양한 유형의 증거를 함께</strong> 모아야 법원에서 스토킹범죄로 인정받기 수월합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">CCTV: 30일 내 보존 요청 → 경찰 확보 요청 + 문자·통화기록·일지 병행</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/stalking" style="color:#1565c0;font-weight:600">내 스토킹 피해 증거 충분한지 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '실수 3: 증거 수집을 위해 상대방을 미행하거나 추적하는 것',
        content:
          '<p><strong style="color:#1e3a5f">피해자가 가해자를 추적하면 오히려 역고소 대상이 될 수 있습니다</strong></p>\n<p>스토킹 증거를 확보하겠다고 <strong>상대방의 동선을 추적하거나, SNS 계정을 반복 확인하며 캡처</strong>하는 행위는 주의가 필요합니다. 상대방이 이를 역으로 "스토킹"이나 "명예훼손"으로 신고할 수 있습니다.</p>\n<p>증거는 <strong>내가 받은 피해를 기록</strong>하는 방식으로 수집하세요. 상대가 보낸 메시지, 내 집 앞에 온 사진(내 CCTV), 내가 받은 전화 기록 등 <strong>수동적 수집</strong>이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">안전한 증거 수집: 내가 받은 피해 기록(메시지·전화·방문) → 상대방 추적은 금지</blockquote>',
      },
      {
        title: '실수 4: 증거를 정리하지 않고 뒤죽박죽으로 제출하는 것',
        content:
          '<p><strong style="color:#1e3a5f">스토킹은 "반복성"이 핵심이므로 날짜·시간 순으로 정리해야 합니다</strong></p>\n<p>스토킹범죄의 처벌 등에 관한 법률 제2조는 스토킹행위가 <strong>지속적 또는 반복적</strong>으로 이루어져야 스토킹범죄가 성립한다고 규정합니다. 따라서 증거를 날짜·시간순으로 정리한 <strong>피해 일지(타임라인)</strong>가 매우 중요합니다.</p>\n<p>"2026.3.1 오후 8시 — 집 앞 대기(CCTV 캡처)" "2026.3.3 오전 11시 — 카카오톡 메시지 30건(캡처)" 식으로 <strong>일시·장소·행위·증거자료</strong>를 한 표로 정리하면 수사관과 판사가 반복성을 쉽게 확인할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">피해 일지: 날짜+시간+장소+행위내용+증거번호 → 반복성 한눈에 입증</blockquote>',
      },
      {
        title: '실수 5: 경찰 신고 없이 증거만 모으다 시간을 보내는 것',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제4조에 따라 경찰은 즉시 긴급응급조치를 할 수 있습니다</strong></p>\n<p>"증거가 더 쌓이면 신고하겠다"는 생각은 위험합니다. 경찰에 <strong>조기에 신고</strong>하면 접근금지 등 <strong>긴급응급조치</strong>를 받을 수 있고, 112 신고 기록 자체가 스토킹 피해의 <strong>강력한 증거</strong>가 됩니다.</p>\n<p>신고 후에도 행위가 계속되면 법원에 <strong>잠정조치(접근금지, 전기통신 접근금지 등)</strong>를 신청할 수 있습니다. 신고와 증거 수집을 <strong>동시에 병행</strong>하는 것이 가장 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 + 증거 수집 병행: 112 신고 기록이 곧 증거 → 긴급응급조치로 안전 확보</blockquote>',
      },
    ],
    cases: [
      {
        title: '휴대전화 전자정보 압수·수색에서 변호인 참여권을 강조한 사례',
        summary:
          '대법원 2024도19106 사건(2025.04.24 선고)에서 법원은 수사기관이 전자정보를 복제·탐색할 때 피압수자뿐 아니라 변호인에게도 별도로 참여 기회를 보장해야 하며, 이를 위반하면 원칙적으로 위법수집증거에 해당한다고 판시했습니다.',
        takeaway:
          '스토킹 증거는 합법적 절차를 거쳐야 법정에서 인정됩니다. 수사기관조차 적법절차를 위반하면 증거능력이 부정되므로, 피해자도 불법적 방법으로 수집한 증거는 재판에서 사용할 수 없다는 점을 꼭 기억하세요.',
      },
    ],
    faq: [
      {
        question: '스토킹 증거로 가장 강력한 것은 무엇인가요?',
        answer: '<strong>112 신고 기록 + CCTV 영상 + 메시지 캡처</strong>의 조합이 가장 강력합니다. 특히 112 신고 기록은 피해 시점과 내용이 공적으로 기록되어 신빙성이 높습니다.',
      },
      {
        question: '카카오톡 메시지를 캡처한 것도 증거가 되나요?',
        answer: '네, <strong>메시지 캡처는 유효한 증거</strong>입니다. 다만 상대방이 "조작"을 주장할 수 있으므로 <strong>전체 대화 맥락이 보이도록 캡처</strong>하고, 가능하면 공증을 받거나 전자서명이 포함된 원본을 보관하세요.',
      },
      {
        question: '상대방이 선물을 보내는 것도 스토킹 증거가 되나요?',
        answer: '<strong>거부 의사를 명확히 전달한 이후</strong>에도 반복적으로 물건을 보내는 행위는 스토킹처벌법 제2조 제1호에서 규정하는 스토킹행위에 해당할 수 있습니다. 거부 의사 표시 기록과 배송 내역을 함께 보관하세요.',
      },
      {
        question: '스토킹 증거를 SNS에 공개해도 되나요?',
        answer: '증거를 SNS에 공개하면 <strong>상대방이 명예훼손으로 역고소</strong>할 수 있습니다. 증거는 경찰·검찰·법원에만 제출하고, 온라인 공개는 절대 삼가세요.',
      },
      {
        question: '녹음 파일은 어떤 형식으로 제출해야 하나요?',
        answer: '녹음 파일은 <strong>원본 그대로(편집 없이)</strong> 보관하고, 수사기관에 제출할 때 <strong>녹취록(대화 내용을 문서로 정리)</strong>을 함께 제출하면 효과적입니다. 편집 흔적이 있으면 증거능력이 의심받을 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '스토킹 피해 진단', href: '/diagnosis/stalking' },
      { label: '스토킹 고소장 작성 필요 서류', href: '/guide/stalking/complaint-filing-required-documents' },
      { label: '스토킹 피해 어디부터 시작해야 하나', href: '/guide/stalking/stalking-victim-where-to-start' },
      { label: '사이버 스토킹 반복 DM 처벌 기준', href: '/guide/stalking/cyber-stalking-repeated-dm' },
    ],
  },
  {
    domain: 'traffic-accident',
    slug: 'insurance-claim-required-docs',
    keyword: '교통사고 보험금 청구 필요 서류',
    questionKeyword: '교통사고 보험금 청구할 때 무슨 서류가 필요한가요?',
    ctaKeyword: '교통사고 보험금 청구',
    type: '준비서류형',
    meta: {
      title: '교통사고 보험금 청구 7가지 필수 서류 총정리 | 로앤가이드',
      description: '교통사고 후 보험금을 청구해야 하는데 어떤 서류를 준비해야 할지 모르겠다면, 7가지 필수 서류 목록을 지금 확인하세요.',
    },
    intro: '교통사고를 당한 지 일주일이 지났습니다. 치료비와 수리비를 보험으로 처리하려는데, 보험사에서 이것저것 서류를 요구합니다. 서류 하나라도 빠지면 보험금 지급이 지연되거나 삭감될 수 있습니다. 빠짐없이 준비해야 할 7가지 필수 서류를 확인해보세요.',
    sections: [
      {
        title: '첫째, 교통사고 사실확인원을 가장 먼저 발급받으세요',
        content:
          '<p><strong style="color:#1e3a5f">교통사고 사실확인원은 보험금 청구의 가장 기본적인 서류입니다</strong></p>\n<p>사고 후 경찰에 신고했다면 <strong>교통사고 사실확인원</strong>을 경찰서 또는 경찰청 교통민원포털(efine.go.kr)에서 발급받을 수 있습니다. 이 서류에는 사고 일시·장소, 차량 정보, 과실 관계 등이 기재됩니다.</p>\n<p>경찰 신고 없이 합의한 경우에는 <strong>상호합의서</strong>(보험사 양식)와 블랙박스 영상으로 대체할 수 있습니다. 다만 사고 규모가 크거나 상해가 있는 경우에는 반드시 경찰 신고 후 사실확인원을 발급받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사실확인원: 경찰 신고 → efine.go.kr 발급 | 미신고 시 상호합의서+블랙박스</blockquote>',
      },
      {
        title: '둘째, 진단서와 진료비 세부내역서를 발급받으세요',
        content:
          '<p><strong style="color:#1e3a5f">자동차손해배상보장법 제10조에 따라 보험사는 피해자의 치료비를 보상해야 합니다</strong></p>\n<p>치료비 보상을 받으려면 <strong>의사 진단서</strong>(상해 부위·정도·치료기간 기재)와 <strong>진료비 세부내역서</strong>가 필요합니다. 진단서는 사고와 관련된 모든 병원(응급실, 정형외과, 한의원 등)에서 각각 발급받으세요.</p>\n<p>치료가 장기화될 경우 <strong>중간 진단서</strong>를 발급받아 보험사에 중간 청구를 할 수 있습니다. MRI·CT 등 검사 결과지도 함께 보관하면 후유장해 판정에 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">치료 서류: 진단서(모든 병원별) + 진료비 세부내역서 + 검사 결과지</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">내 교통사고 보험금 청구 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 차량 수리비 견적서와 수리 사진을 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">차량 손해는 수리비 견적서와 수리 전후 사진으로 입증합니다</strong></p>\n<p>보험사 지정 공업사 또는 본인이 선택한 공업사에서 <strong>수리비 견적서</strong>를 발급받으세요. 견적서에는 부품 교체 내역, 공임, 도장비 등이 항목별로 기재되어야 합니다.</p>\n<p>수리 전 <strong>파손 부위 사진</strong>(앞·뒤·옆 다각도)과 수리 후 사진을 함께 보관하세요. 전손(수리비가 차량 시세 이상)인 경우에는 <strong>차량 시세 감정서</strong>가 별도로 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">차량: 수리비 견적서 + 파손 사진(다각도) + 전손 시 시세 감정서</blockquote>',
      },
      {
        title: '넷째, 소득 관련 서류를 준비하면 휴업손해도 보상받을 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">사고로 일하지 못한 기간의 소득 손실(휴업손해)은 별도로 청구해야 합니다</strong></p>\n<p>직장인은 <strong>재직증명서, 급여명세서(최근 3개월), 원천징수영수증</strong>을 준비하세요. 자영업자는 <strong>사업자등록증, 소득금액증명원, 부가세 과세표준증명원</strong>이 필요합니다.</p>\n<p>휴업손해는 <strong>진단서상 치료기간</strong>과 소득자료를 기준으로 산정됩니다. 무직자도 <strong>일용근로임금</strong>을 기준으로 산정받을 수 있으니 반드시 청구하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">직장인: 재직증명서+급여명세서+원천징수 | 자영업: 사업자등록증+소득금액증명</blockquote>',
      },
      {
        title: '다섯째, 보험금 청구서와 기타 서류를 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">보험금 청구서는 보험사 양식에 맞춰 정확하게 작성해야 합니다</strong></p>\n<p>최종적으로 <strong>보험금 청구서</strong>(보험사 홈페이지 또는 고객센터에서 양식 수령), <strong>통장 사본</strong>(보험금 수령 계좌), <strong>신분증 사본</strong>을 함께 제출합니다.</p>\n<p>교통비(택시비 영수증), 간병비(간병인 영수증), 위자료 청구는 별도 항목으로 <strong>추가 청구</strong>할 수 있습니다. 서류를 한 번에 제출하면 보험금 지급이 <strong>평균 14~30일</strong> 이내에 처리됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">최종 제출: 청구서+통장사본+신분증 + 교통비·간병비 영수증(있는 경우)</blockquote>',
      },
    ],
    cases: [
      {
        title: '의료행위 과실과 상해 결과 사이 인과관계 증명 기준을 밝힌 사례',
        summary:
          '대법원 2024도9443 사건(2025.05.15 선고)에서 법원은 업무상 과실이 있더라도 그 과실로 인해 피해자에게 상해가 발생했다는 인과관계가 합리적 의심의 여지 없이 증명되어야 하며, 과실의 존재만으로 인과관계가 추정되지 않는다고 판시했습니다.',
        takeaway:
          '교통사고 보험금 청구에서도 사고와 상해 사이의 인과관계가 중요합니다. 사고 직후 병원을 방문하여 진단서를 발급받고, 치료 경과를 체계적으로 기록해야 보험사의 인과관계 부정 주장에 대응할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '보험금 청구 기한이 있나요?',
        answer: '자동차보험 보험금 청구권의 소멸시효는 <strong>3년</strong>입니다(상법 제662조). 사고일로부터 3년 이내에 청구해야 하며, 후유장해가 확정된 경우에는 확정 시점부터 기산됩니다.',
      },
      {
        question: '블랙박스 영상도 보험사에 제출해야 하나요?',
        answer: '의무는 아니지만 <strong>과실 비율 산정에 유리</strong>하므로 제출을 권합니다. 특히 상대방이 과실을 부인하는 경우 블랙박스 영상이 결정적 증거가 됩니다.',
      },
      {
        question: '보험사가 서류를 더 내라고 하면 거부할 수 있나요?',
        answer: '보험사의 <strong>합리적 범위 내 서류 요청</strong>은 거부하기 어렵습니다. 다만 과도하거나 부당한 요구(예: 사고와 무관한 과거 병력 전체 공개)는 거부할 수 있으며, <strong>금융감독원(전화 1332)</strong>에 민원을 제기할 수 있습니다.',
      },
      {
        question: '합의금과 보험금은 다른 건가요?',
        answer: '<strong>보험금</strong>은 보험약관에 따라 보험사가 지급하는 금액이고, <strong>합의금</strong>은 가해자(또는 보험사)와 피해자 간 협의로 정하는 금액입니다. 합의 시에는 향후 추가 청구 포기 조항이 포함되므로 <strong>치료가 완료된 후</strong> 합의하는 것이 유리합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 진단', href: '/diagnosis/traffic-accident' },
      { label: '교통사고 보험금 청구 절차 총정리', href: '/guide/traffic-accident/insurance-claim-process-summary' },
      { label: '교통사고 보상금 6대 항목 총정리', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '과실비율 산정 기준과 분쟁 대응', href: '/guide/traffic-accident/fault-ratio-calculation-criteria' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '교통사고 합의금 얼마가 적정한가요', href: '/guide/traffic-accident/how-much-settlement-appropriate-qa' },
    ],
  },
  {
    domain: 'unemployment',
    slug: 'voluntary-resignation-benefit-possible',
    keyword: '자발적 퇴사도 실업급여 받을 수 있나요',
    questionKeyword: '스스로 퇴사했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '자발적 퇴사 실업급여',
    type: 'Q&A형',
    meta: {
      title: '자발적 퇴사 실업급여 5가지 인정 사유 총정리 | 로앤가이드',
      description: '자발적으로 퇴사했지만 실업급여를 받을 수 있을지 고민이라면, 고용보험법상 인정되는 5가지 사유를 지금 확인하세요.',
    },
    intro: '직장 내 괴롭힘이 심해서 더 이상 다닐 수 없었습니다. 결국 사직서를 냈는데, 고용센터에서 "자발적 퇴사는 실업급여 대상이 아닙니다"라고 합니다. 정말 한 푼도 못 받는 걸까요? 고용보험법에서는 정당한 사유가 있는 자발적 퇴사도 실업급여 수급을 인정하고 있습니다.',
    sections: [
      {
        title: '첫째, 고용보험법 제58조가 정한 "정당한 이직 사유"에 해당하면 수급 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제58조 및 시행규칙 별표2에서 자발적 퇴사도 수급자격을 인정하는 사유를 열거하고 있습니다</strong></p>\n<p>"자발적 퇴사 = 실업급여 불가"라는 것은 <strong>흔한 오해</strong>입니다. 고용보험법은 비자발적 퇴사뿐 아니라, <strong>정당한 사유가 있는 자발적 퇴사</strong>에도 실업급여 수급자격을 인정합니다.</p>\n<p>핵심은 <strong>"피보험자가 이직하기 전에 이직 회피 노력을 했는가"</strong>입니다. 회사에 시정을 요구하거나, 노동위원회에 진정을 하는 등 합리적 노력을 했음에도 문제가 해결되지 않아 퇴사한 경우에 해당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 정당한 사유 + 이직 회피 노력 → 자발적 퇴사도 실업급여 가능</blockquote>',
      },
      {
        title: '둘째, 실업급여가 인정되는 5가지 주요 자발적 퇴사 사유를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에서 구체적 사유를 규정하고 있습니다</strong></p>\n<p>①<strong>임금체불·임금삭감</strong>: 임금이 체불되거나 30% 이상 감소한 경우 ②<strong>직장 내 괴롭힘·성희롱</strong>: 사업주가 시정 조치를 하지 않은 경우 ③<strong>근로조건 불일치</strong>: 채용 시 제시된 조건과 실제 근로조건이 현저히 다른 경우 ④<strong>통근 곤란</strong>: 사업장 이전으로 왕복 3시간 이상 통근이 필요한 경우 ⑤<strong>건강 악화</strong>: 의사 소견서로 근무가 어렵다고 인정되는 경우</p>\n<p>위 사유 외에도 <strong>가족 간호, 병역 의무, 배우자 전근</strong> 등이 인정될 수 있습니다. 자세한 사유 목록은 고용노동부 고객상담센터(전화 1350)에서 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">5대 사유: 임금체불 / 괴롭힘 / 근로조건 불일치 / 통근 곤란 / 건강 악화</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/unemployment" style="color:#1565c0;font-weight:600">내 퇴사 사유 실업급여 수급 가능 여부 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, "이직 회피 노력"을 증명할 수 있어야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">단순히 "힘들어서 그만뒀다"만으로는 인정받기 어렵습니다</strong></p>\n<p>고용센터는 <strong>"퇴사 전에 문제 해결을 위해 어떤 노력을 했느냐"</strong>를 중점적으로 심사합니다. 따라서 다음과 같은 증거를 미리 확보해두세요.</p>\n<p>①회사에 <strong>시정 요구한 이메일·내용증명</strong> ②<strong>노동부 진정·고소 기록</strong> ③의사 <strong>소견서·진단서</strong>(건강 사유) ④<strong>임금체불 내역</strong>(급여명세서, 통장 기록) ⑤<strong>근로계약서와 실제 근무조건 비교 자료</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 시정 요구 기록 + 노동부 진정 + 의사 소견서 + 임금 관련 자료</blockquote>',
      },
      {
        title: '넷째, 이직확인서의 "이직 사유" 코드를 반드시 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 이직확인서에 기재하는 이직 사유가 실업급여 수급 여부를 좌우합니다</strong></p>\n<p>실업급여 신청 전에 사업주가 고용센터에 제출하는 <strong>이직확인서</strong>의 이직 사유 코드를 확인하세요. 사업주가 "자진퇴사"로 기재하면 실업급여가 거부될 수 있습니다.</p>\n<p>실제 퇴사 사유와 이직확인서의 기재 내용이 다르면 <strong>고용센터에 이의제기</strong>를 할 수 있습니다. 고용센터는 사업주와 근로자 양쪽의 진술을 확인한 후 수급자격을 결정합니다. 근거 자료를 충분히 준비하면 번복이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이직확인서: 이직 사유 코드 확인 → 사실과 다르면 고용센터 이의제기 → 증거 제출</blockquote>',
      },
    ],
    cases: [
      {
        title: '육아휴직급여 신청기간을 강행규정으로 본 사례',
        summary:
          '대법원 2018두47264 사건(2021.03.18 선고)에서 법원은 고용보험법 제70조 제2항에서 정한 육아휴직급여 신청기간은 제척기간에 해당하는 강행규정이며, 그 기간 내에 신청하지 않으면 급여를 받을 권리를 행사할 수 없다고 판시했습니다.',
        takeaway:
          '실업급여도 마찬가지로 신청 기한이 엄격합니다. 이직일 다음 날부터 12개월 이내에 신청하지 않으면 수급자격이 소멸되므로, 퇴사 후 지체 없이 고용센터에 방문하여 수급자격 인정 신청을 하세요.',
      },
    ],
    faq: [
      {
        question: '자발적 퇴사인데 사업주가 권고사직으로 처리해주면 안 되나요?',
        answer: '실제 사유와 다르게 이직확인서를 허위 기재하면 <strong>사업주와 근로자 모두 부정수급</strong>으로 처벌받을 수 있습니다(고용보험법 제116조). 정당한 사유를 입증하는 것이 올바른 방법입니다.',
      },
      {
        question: '실업급여 신청 기간이 얼마나 되나요?',
        answer: '이직일(퇴사일) 다음 날부터 <strong>12개월 이내</strong>에 수급자격 인정 신청을 해야 합니다. 12개월이 지나면 남은 급여일수가 있어도 지급받을 수 없으니 <strong>퇴사 후 즉시</strong> 고용센터를 방문하세요.',
      },
      {
        question: '자발적 퇴사로 실업급여를 받으면 금액이 줄어드나요?',
        answer: '아닙니다. 정당한 사유로 인정되면 비자발적 퇴사와 <strong>동일한 금액·기간</strong>의 구직급여를 받을 수 있습니다. 1일 구직급여 = 이직 전 평균임금의 60%(상한 66,000원)입니다.',
      },
      {
        question: '고용센터에서 자발적 퇴사 수급을 거부하면 어떻게 하나요?',
        answer: '<strong>고용보험심사위원회</strong>에 심사 청구(처분을 안 날로부터 90일 이내)를 할 수 있고, 심사 결과에도 불복하면 <strong>고용보험심사위원회 재심사 청구</strong> 또는 행정소송을 제기할 수 있습니다.',
      },
      {
        question: '피보험 기간 180일은 어떻게 계산하나요?',
        answer: '실업급여 수급을 위해서는 이직일 이전 18개월 동안 <strong>피보험 단위기간이 합산하여 180일 이상</strong>이어야 합니다. 여러 직장을 다녔다면 합산이 가능하며, 고용센터에서 가입 이력을 조회할 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 진단', href: '/diagnosis/unemployment' },
      { label: '자진 퇴사 실업급여 받을 수 있는 경우', href: '/guide/unemployment/voluntary-resignation-benefit-eligible-cases' },
      { label: '실업급여 신청 필요 서류 전체 목록', href: '/guide/unemployment/application-required-documents-full-list' },
      { label: '실업급여 신청 기간 놓치면 못 받는 함정', href: '/guide/unemployment/missing-application-deadline-trap' },
    ],
  },
  {
    domain: 'wage',
    slug: 'unpaid-wage-3year-limitation',
    keyword: '임금체불 소멸시효 3년 규정 상세',
    questionKeyword: '밀린 임금을 청구할 수 있는 기한이 3년인가요?',
    ctaKeyword: '임금체불 소멸시효',
    type: '수치기한형',
    meta: {
      title: '임금체불 소멸시효 3년 — 기산점과 중단 4가지 방법 | 로앤가이드',
      description: '밀린 임금의 소멸시효가 다가오고 있어 불안하다면, 3년 기산점 계산법과 시효 중단 방법을 지금 확인하세요.',
    },
    intro: '퇴사한 지 2년 8개월이 지났습니다. 아직 밀린 임금 400만원을 받지 못했는데, "3년 지나면 못 받는다"는 이야기를 들었습니다. 정말 4개월 안에 조치를 취하지 않으면 돈을 날리는 걸까요? 근로기준법상 임금채권의 소멸시효 3년 규정과 시효를 중단하는 방법을 확인해보세요.',
    sections: [
      {
        title: '첫째, 임금채권의 소멸시효는 3년이며, 기산점은 "지급일"입니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제49조에 따라 임금채권은 3년간 행사하지 않으면 시효로 소멸합니다</strong></p>\n<p>소멸시효의 기산점은 <strong>임금 지급일</strong>입니다. 예를 들어 2023년 3월분 급여의 지급일이 4월 10일이었다면, 시효 만료일은 <strong>2026년 4월 10일</strong>입니다. 퇴직일이 아니라 <strong>각 임금의 약정 지급일</strong>을 기준으로 계산하세요.</p>\n<p>퇴직금은 <strong>퇴직일로부터 14일째 되는 날</strong>이 지급일이므로(근로기준법 제36조), 퇴직금의 소멸시효 기산점은 퇴직일 + 14일입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기산점: 월급 → 약정 지급일 | 퇴직금 → 퇴직일+14일 | 3년 후 시효 만료</blockquote>',
      },
      {
        title: '둘째, 소멸시효를 중단시키는 4가지 방법을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">민법 제168조에 따라 청구, 압류·가압류·가처분, 승인으로 시효가 중단됩니다</strong></p>\n<p>시효 만료가 임박했다면 다음 4가지 방법 중 하나를 즉시 실행하세요.</p>\n<p>①<strong>내용증명 발송</strong>: 사업주에게 임금 지급을 촉구하는 내용증명을 보내면 <strong>최고(催告)</strong>에 해당하여 6개월간 시효가 연장됩니다. 단, 6개월 이내에 소송을 제기해야 확정적으로 중단됩니다. ②<strong>고용노동부 진정</strong>: 진정서 접수도 시효 중단 효과가 있습니다. ③<strong>소송 제기</strong>: 소액소송 또는 지급명령 신청은 가장 확실한 시효 중단 방법입니다. ④<strong>사업주의 채무 승인</strong>: 사업주가 "갚겠다"고 서면(카카오톡 포함)으로 인정하면 시효가 새로 시작됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시효 중단 4가지: 내용증명(+6개월) → 노동부 진정 → 소송 → 채무 승인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 임금채권 소멸시효 남은 기간 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 소멸시효가 지난 임금도 받을 수 있는 예외가 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 시효를 원용(주장)하지 않으면 시효 완성의 효과가 발생하지 않습니다</strong></p>\n<p>소멸시효가 지났더라도 <strong>사업주가 "시효가 지났다"고 주장하지 않으면</strong> 법원은 직권으로 시효 소멸을 인정하지 않습니다. 따라서 시효가 지났다고 포기하지 말고 일단 청구를 해보세요.</p>\n<p>또한 사업주가 시효 완성 후에도 <strong>"갚겠다"고 했거나 일부라도 지급한 적이 있다면</strong>, 이는 시효 이익의 포기에 해당하여 전액 청구가 가능할 수 있습니다. 대화 기록, 일부 입금 내역 등을 꼭 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">예외: 사업주가 시효 미주장 → 여전히 청구 가능 | 갚겠다는 약속 → 시효 이익 포기</blockquote>',
      },
      {
        title: '넷째, 지연이자 연 20%도 함께 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제37조에 따라 퇴직 후 14일이 지나면 미지급 임금에 연 20% 지연이자가 붙습니다</strong></p>\n<p>퇴직 후 14일이 경과해도 임금을 지급하지 않으면 <strong>지연이자 연 20%</strong>가 가산됩니다. 예를 들어 400만원을 1년간 체불당했다면 지연이자만 <strong>80만원</strong>입니다.</p>\n<p>지연이자는 <strong>퇴직일 다음 날부터 15일째 되는 날</strong>부터 지급 완료일까지 적용됩니다. 체불기간이 길수록 지연이자가 커지므로, 원금과 함께 반드시 청구하세요. 다만 <strong>재직 중 체불</strong>에는 연 20%가 아닌 민법상 <strong>연 5%</strong>가 적용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지연이자: 퇴직 후 14일 초과 체불 → 연 20% | 재직 중 체불 → 연 5%</blockquote>',
      },
    ],
    cases: [
      {
        title: '대표이사의 보수 결정 절차에 관한 강행규정 위반 사례',
        summary:
          '대법원 2025다214605 사건(2025.12.11 선고)에서 법원은 상법 제388조는 이사의 보수에 관한 강행규정이며, 정관에서 주주총회 결의로 보수를 정하도록 규정한 경우 주주총회 결의 없이는 보수청구권을 행사할 수 없다고 판시했습니다.',
        takeaway:
          '임금채권은 법에서 정한 절차와 기한에 따라 권리를 행사해야 합니다. 소멸시효 3년이 경과하면 강행규정에 의해 권리가 소멸될 수 있으므로, 기한 내에 반드시 청구 조치를 취하세요.',
      },
    ],
    faq: [
      {
        question: '매달 밀린 임금의 시효가 각각 다른 건가요?',
        answer: '네, <strong>각 월급의 약정 지급일을 기준으로 개별적으로</strong> 시효가 진행됩니다. 예를 들어 2023년 1~6월분이 밀렸다면 1월분의 시효가 가장 먼저 만료되므로, 오래된 것부터 우선 청구하세요.',
      },
      {
        question: '노동부에 진정을 넣으면 시효가 중단되나요?',
        answer: '대법원 판례에 따르면 <strong>고용노동부 진정은 시효 중단 사유인 "청구"에 해당</strong>합니다. 다만 진정이 종결된 후 6개월 이내에 소송을 제기해야 확정적으로 시효가 중단됩니다.',
      },
      {
        question: '3년이 지났는데도 사업주가 "갚겠다"고 합니다. 돈을 받을 수 있나요?',
        answer: '시효 완성 후 사업주가 채무를 승인(갚겠다는 의사 표시)하면 <strong>시효 이익을 포기한 것</strong>으로 봅니다. 이때 새로운 소멸시효가 다시 진행되므로 <strong>3년 이내에 재청구</strong>가 가능합니다. 승인 증거(문자, 녹음)를 확보하세요.',
      },
      {
        question: '내용증명만 보내면 시효가 완전히 중단되나요?',
        answer: '내용증명은 <strong>최고(催告)</strong>에 해당하여 시효를 일시 연장하는 효과만 있습니다. 내용증명 발송 후 <strong>6개월 이내에 소송(소액소송·지급명령 등)을 제기</strong>해야 확정적으로 시효가 중단됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 진단', href: '/diagnosis/wage' },
      { label: '퇴직 후 밀린 임금 청구 방법', href: '/guide/wage/unpaid-salary-after-resignation' },
      { label: '임금체불 진정서 필요 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '임금체불 합의금과 지연이자', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
    ],
  },
];
