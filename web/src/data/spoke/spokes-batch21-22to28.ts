import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [사업을 운영 중인 채무자]의 [개인회생 신청 자격이 되는지 모르는 상황]에서 [영업소득자 요건과 신청 가능 조건 안내]를 돕는 페이지다.
// 2. 이 페이지는 [개인회생과 워크아웃 중 선택을 고민하는 채무자]의 [두 제도의 차이를 모르는 상황]에서 [6가지 기준 비교표로 최적 선택 안내]를 돕는 페이지다.
// 3. 이 페이지는 [개인회생 자격요건이 궁금한 채무자]의 [자신이 신청 대상인지 모르는 상황]에서 [FAQ 형식으로 자격요건 자가진단]을 돕는 페이지다.
// 4. 이 페이지는 [개인회생 신청서를 준비하려는 채무자]의 [필요 서류 목록을 모르는 상황]에서 [서류별 발급처와 준비 순서 안내]를 돕는 페이지다.
// 5. 이 페이지는 [상속 포기를 고려하는 상속인]의 [기한과 절차를 모르는 상황]에서 [3개월 기한 내 단계별 절차 안내]를 돕는 페이지다.
// 6. 이 페이지는 [상속 재산 범위를 파악해야 하는 상속인]의 [조회 방법과 필요 서류를 모르는 상황]에서 [기관별 조회 절차와 서류 목록 안내]를 돕는 페이지다.
// 7. 이 페이지는 [교통사고 후 합의를 앞둔 피해자]의 [합의 절차와 적정 합의금을 모르는 상황]에서 [단계별 합의 절차와 주의사항 안내]를 돕는 페이지다.

export const spokesBatch21_22to28: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. rehabilitation / business-owner-rehabilitation-eligibility
  // ───────────────────────────────────────────
  // 2. rehabilitation / rehabilitation-vs-workout-comparison
  // ───────────────────────────────────────────
  // 3. rehabilitation / rehabilitation-eligibility-requirements-faq
  // ───────────────────────────────────────────
  // 4. rehabilitation / rehabilitation-application-required-docs
  // ───────────────────────────────────────────
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-application-required-docs',
    keyword: '개인회생 신청 필요서류 목록',
    questionKeyword: '개인회생 신청에 어떤 서류가 필요한가요?',
    ctaKeyword: '개인회생 필요서류 확인',
    type: '준비서류형',
    perspective: '채무자',
    meta: {
      title: '개인회생 신청 필요서류 12가지 체크리스트 | 로앤가이드',
      description:
        '개인회생 신청서류를 어디서 발급받아야 하는지 모르겠다면 12가지 필수 서류와 발급처를 체크리스트로 지금 확인하세요.',
    },
    intro:
      '<p>개인회생을 신청하기로 마음먹었지만, 어떤 서류를 어디서 발급받아야 하는지 막막합니다. 신청서 한 장이 아니라 채권자 목록, 재산 목록, 소득 증빙까지 12종 이상의 서류를 한꺼번에 준비해야 합니다. 서류 하나가 빠지면 보정명령이 나와 절차가 지연되므로, 아래 체크리스트를 보고 순서대로 준비하세요.</p>',
    sections: [
      {
        title: '필수 서류 ① — 신청서와 채권자·재산 목록',
        content:
          '<p><strong style="color:#1e3a5f">개인회생 신청의 핵심은 신청서, 채권자 목록, 재산 목록 3종입니다</strong></p>\n<ul>\n<li><strong>개인회생 신청서</strong> — 법원 양식 다운로드(대한민국 법원 전자민원센터). 채무자 인적사항, 채무 발생 경위, 변제계획 개요를 기재합니다</li>\n<li><strong>채권자 목록</strong> — 모든 채권자의 이름, 채무 금액, 연체 기간을 빠짐없이 기재. 사채업자·개인 간 채무도 포함해야 합니다</li>\n<li><strong>재산 목록</strong> — 부동산, 예금, 보험 해지환급금, 자동차, 주식 등 모든 재산을 기재합니다</li>\n</ul>\n<p>채권자를 하나라도 누락하면 해당 채무가 면책되지 않을 수 있으므로 <strong>신용정보원 조회 결과</strong>를 반드시 첨부하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 신청서 + 채권자 목록 + 재산 목록 = 3대 필수 서류</blockquote>',
      },
      {
        title: '필수 서류 ② — 소득 증빙과 지출 내역',
        content:
          '<p><strong style="color:#1e3a5f">법원은 가용소득을 산정하기 위해 소득과 지출을 정밀하게 확인합니다</strong></p>\n<p><strong>소득 증빙 서류</strong>:</p>\n<ul>\n<li><strong>급여소득자</strong> — 최근 3개월 급여명세서, 원천징수영수증(전년도), 재직증명서</li>\n<li><strong>영업소득자</strong> — 종합소득세 신고서(최근 2년), 부가가치세 신고서, 사업용 통장 거래내역</li>\n<li><strong>연금수급자</strong> — 연금수급 확인서</li>\n</ul>\n<p><strong>지출 내역 서류</strong>:</p>\n<ul>\n<li>수입·지출에 관한 목록 (법원 양식)</li>\n<li>임대차계약서 (월세 증빙)</li>\n<li>건강보험료·국민연금 납부확인서</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 급여명세서/소득세 신고서 + 지출 목록 = 가용소득 산정 근거</blockquote>',
      },
      {
        title: '필수 서류 ③ — 신분·주소 관련 서류',
        content:
          '<p><strong style="color:#1e3a5f">주민등록등본, 초본, 가족관계증명서 등 신분 확인 서류도 빠짐없이 준비하세요</strong></p>\n<ul>\n<li><strong>주민등록등본</strong> — 정부24에서 발급 (무료)</li>\n<li><strong>주민등록초본</strong> — 주소 변경 이력 포함 (정부24)</li>\n<li><strong>가족관계증명서</strong> — 대법원 전자가족관계등록시스템에서 발급</li>\n<li><strong>혼인관계증명서</strong> — 배우자가 있는 경우 필수</li>\n</ul>\n<p>이 서류들은 발급일로부터 <strong>3개월 이내</strong>여야 유효합니다. 신청서 제출 직전에 발급받는 것이 안전합니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">서류 준비가 막막하다면 먼저 진단받으세요</strong><br/>\n<a href="/diagnosis/rehabilitation" style="color:#1565c0;font-weight:600">개인회생 서류 준비 무료 가이드 받기 &rarr;</a>\n</div>',
      },
      {
        title: '서류 발급처 한눈에 정리 — 12종 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">각 서류별 발급처와 발급 방법을 체크리스트로 정리합니다</strong></p>\n<table style="width:100%;border-collapse:collapse;margin-top:8px">\n<tr style="background:#f0f4f8"><th style="padding:8px;border:1px solid #ddd;text-align:left">서류</th><th style="padding:8px;border:1px solid #ddd;text-align:left">발급처</th></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">개인회생 신청서</td><td style="padding:8px;border:1px solid #ddd">대한민국 법원 전자민원센터</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">채권자 목록</td><td style="padding:8px;border:1px solid #ddd">직접 작성 + 신용정보원 조회</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">재산 목록</td><td style="padding:8px;border:1px solid #ddd">직접 작성 (부동산등기부등본·예금잔액증명 첨부)</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">급여명세서</td><td style="padding:8px;border:1px solid #ddd">직장 인사팀</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">원천징수영수증</td><td style="padding:8px;border:1px solid #ddd">홈택스</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">종합소득세 신고서</td><td style="padding:8px;border:1px solid #ddd">홈택스</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">주민등록등본·초본</td><td style="padding:8px;border:1px solid #ddd">정부24</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">가족관계증명서</td><td style="padding:8px;border:1px solid #ddd">대법원 전자가족관계등록시스템</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">부동산등기부등본</td><td style="padding:8px;border:1px solid #ddd">인터넷등기소</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">예금잔액증명서</td><td style="padding:8px;border:1px solid #ddd">각 금융기관</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">보험 해지환급금 확인서</td><td style="padding:8px;border:1px solid #ddd">각 보험사</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">건강보험료 납부확인서</td><td style="padding:8px;border:1px solid #ddd">국민건강보험공단</td></tr>\n</table>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 홈택스·정부24·인터넷등기소에서 온라인 발급하면 시간을 절약할 수 있습니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2023마6207 사건(2023.09.19 선고) — 개인회생 개시결정과 채권자 목록의 효력',
        summary:
          '대법원 2023마6207 사건에서 법원은 개인회생절차 개시결정이 있으면 채권자 목록에 기재된 개인회생채권에 대해 강제집행·가압류가 중지되며, 새로운 집행도 금지된다고 판시했습니다. 채권자 목록의 정확한 작성이 보호 범위를 결정합니다.',
        takeaway:
          '채권자 목록에 누락된 채무는 면책되지 않을 수 있습니다. 신용정보원 조회 결과를 기반으로 모든 채권자를 빠짐없이 기재하고, 사채업자 채무도 반드시 포함하세요.',
      },
    ],
    faq: [
      {
        question: '서류를 한꺼번에 발급받으면 유효기간이 지나지 않나요?',
        answer:
          '<strong>발급일로부터 3개월이 유효기간입니다.</strong> 발급에 시간이 오래 걸리는 서류(예: 보험 해지환급금 확인서)를 먼저 신청하고, 주민등록등본 같은 즉시 발급 가능한 서류는 제출 직전에 받으세요.',
      },
      {
        question: '사채업자한테 빌린 돈도 채권자 목록에 넣어야 하나요?',
        answer:
          '<strong>반드시 넣어야 합니다.</strong> 사채, 지인 간 차용, 미등록 대부업체 채무까지 모두 기재해야 면책 대상에 포함됩니다. 누락하면 해당 채무만 그대로 남습니다.',
      },
      {
        question: '전문가 없이 혼자 서류를 준비할 수 있나요?',
        answer:
          '<strong>가능하지만 보정명령 위험이 있습니다.</strong> 대한법률구조공단에서 무료 법률 상담을 받을 수 있고, 법원 전자민원센터에서 양식을 다운받아 작성할 수 있습니다. 다만 채권자 목록이나 변제계획서는 전문가의 검토를 받는 것이 안전합니다.',
      },
      {
        question: '재산이 전혀 없어도 재산 목록을 작성해야 하나요?',
        answer:
          '<strong>네, "해당 없음"으로라도 작성해야 합니다.</strong> 재산이 없다는 사실 자체를 법원에 소명하는 것이 목적이므로, 빈 목록이라도 제출해야 합니다.',
      },
    ],
    cta: {
      text: '개인회생 서류 준비 무료 가이드 받기',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      { label: '개인회생 자격요건 FAQ', href: '/spoke/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '개인회생 신청 절차 A to Z', href: '/spoke/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 변제금 계산법', href: '/spoke/rehabilitation/rehabilitation-payment-calculation' },
      { label: '개인회생 기각 사유와 예방법', href: '/spoke/rehabilitation/rehabilitation-rejection-reasons-prevention' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. inheritance / inheritance-renunciation-deadline
  // ───────────────────────────────────────────
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-deadline',
    keyword: '상속 포기 신청 절차와 기한',
    questionKeyword: '상속 포기 신청은 언제까지 어떻게 해야 하나요?',
    ctaKeyword: '상속포기 절차 확인',
    type: '절차타임라인형',
    perspective: '상속인',
    meta: {
      title: '상속포기 신청 절차 5단계와 3개월 기한 | 로앤가이드',
      description:
        '피상속인의 빚이 재산보다 많아 상속포기를 고민 중이라면 3개월 기한 내 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>갑자기 부모님이 돌아가신 뒤 채권자에게서 전화가 옵니다. "돌아가신 분의 빚을 갚으셔야 합니다." 상속인은 민법 제1019조에 따라 상속개시 있음을 안 날로부터 3개월 이내에 상속포기를 신고해야 합니다. 이 기한을 넘기면 단순승인으로 간주되어 피상속인의 모든 채무를 떠안게 됩니다. 단 하루도 여유가 없는 절차이니 즉시 확인하세요.</p>',
    timelineSteps: [
      '상속개시 사실 확인 (사망일 또는 알게 된 날)',
      '상속재산·채무 조회 (안심상속 원스톱 서비스)',
      '상속포기 신고서 작성 및 서류 준비',
      '관할 가정법원에 상속포기 신고 접수',
      '법원 심리 후 수리결정 통보 (약 1~2개월)',
    ],
    sections: [
      {
        title: '1단계 — 상속개시 사실 확인과 3개월 기한 계산',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1019조에 따라 "상속개시 있음을 안 날"로부터 3개월 이내에 상속포기를 신고해야 합니다</strong></p>\n<p>"상속개시 있음을 안 날"이란 피상속인이 사망했다는 사실과 자신이 상속인이라는 사실을 모두 안 날을 의미합니다. 사망일과 다를 수 있으므로 <strong>실제로 사망 소식을 들은 날</strong>이 기산점입니다.</p>\n<p>3개월은 <strong>법정 기한</strong>으로, 이 기간 안에 가정법원에 신고서를 접수해야 합니다. 법원의 수리결정이 3개월을 넘겨도 상관없지만, <strong>신고 접수 자체는 반드시 기한 내</strong>에 완료해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사망 사실 + 상속인 사실 안 날 → 3개월 내 법원 접수 필수</blockquote>',
      },
      {
        title: '2단계 — 상속재산과 채무 범위 파악',
        content:
          '<p><strong style="color:#1e3a5f">상속포기 여부를 결정하려면 피상속인의 재산과 채무를 정확히 파악해야 합니다</strong></p>\n<p><strong>안심상속 원스톱 서비스</strong>(정부24)를 이용하면 피상속인의 금융거래, 부동산, 자동차, 세금 체납 등을 한 번에 조회할 수 있습니다. 사망일로부터 <strong>6개월 이내</strong>에 신청 가능합니다.</p>\n<p>주의할 점은 사인(私人) 간 채무(지인 차용, 사채 등)는 원스톱 서비스에 나오지 않으므로, 피상속인의 휴대폰 문자·이메일·차용증을 확인하여 보충해야 합니다.</p>\n<p>채무가 재산보다 명백히 많으면 <strong>상속포기</strong>, 불확실하면 <strong>한정승인</strong>(재산 범위 내에서만 채무 상환)을 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 안심상속 원스톱 서비스 → 금융·부동산·세금 일괄 조회</blockquote>',
      },
      {
        title: '3단계 — 상속포기 신고서 작성과 필요 서류 준비',
        content:
          '<p><strong style="color:#1e3a5f">관할 가정법원에 제출할 신고서와 첨부서류를 정확하게 준비해야 합니다</strong></p>\n<p><strong>필요 서류 목록</strong>:</p>\n<ul>\n<li>상속포기 신고서 (법원 양식)</li>\n<li>피상속인의 기본증명서·가족관계증명서·사망진단서</li>\n<li>신고인(상속인)의 기본증명서·가족관계증명서·주민등록등본</li>\n<li>상속관계 소명자료 (피상속인과의 관계를 증명하는 서류)</li>\n<li>인지대 및 송달료 (법원 납부)</li>\n</ul>\n<p>신고서는 대법원 전자민원센터에서 양식을 다운받을 수 있으며, 관할 법원은 <strong>피상속인의 최후 주소지</strong> 가정법원입니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">기한이 촉박하다면 지금 확인하세요</strong><br/>\n<a href="/diagnosis/inheritance" style="color:#1565c0;font-weight:600">상속포기 절차 무료 가이드 받기 &rarr;</a>\n</div>',
      },
      {
        title: '4단계 — 법원 접수 후 수리결정까지의 흐름',
        content:
          '<p><strong style="color:#1e3a5f">신고서를 접수하면 법원이 서류를 심사한 뒤 약 1~2개월 후 수리결정을 내립니다</strong></p>\n<p>접수 후 법원은 다음 사항을 확인합니다:</p>\n<ul>\n<li>3개월 기한 내 접수 여부</li>\n<li>상속인 자격 여부</li>\n<li>이미 상속재산을 처분하지 않았는지 여부 (처분했으면 단순승인 간주)</li>\n</ul>\n<p>수리결정이 나면 신고인은 처음부터 상속인이 아니었던 것과 같은 효과가 발생합니다. <strong>다음 순위 상속인</strong>에게 상속권이 넘어가므로, 후순위 상속인에게도 포기 사실을 알려주어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 수리결정 → 처음부터 상속인 아닌 것으로 간주 / 후순위에게도 통지 필요</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2019다29853 사건(2022.07.28 선고) — 상속포기 후 재산처분과 단순승인 간주',
        summary:
          '대법원 2019다29853 사건에서 법원은 민법 제1026조 제3호에 따라 상속인이 한정승인이나 포기를 한 후에 상속재산을 은닉하거나 부정소비하면 단순승인으로 간주된다고 판시했습니다. 다만 "고의로 재산목록에 기입하지 아니한 때"란 상속채권자를 사해할 의사가 있어야 한다고 밝혔습니다.',
        takeaway:
          '상속포기를 신고한 후에도 피상속인의 재산을 처분하면 포기의 효력을 잃을 수 있습니다. 포기 결정 후에는 피상속인의 재산에 절대 손대지 마세요.',
      },
    ],
    faq: [
      {
        question: '3개월 기한을 넘겼는데 아직 상속포기를 할 수 있나요?',
        answer:
          '<strong>원칙적으로 기한 경과 후에는 불가합니다.</strong> 다만 채무 초과 사실을 뒤늦게 알았다면 민법 제1019조 제3항에 따라 "특별한정승인"을 할 수 있습니다. 채무 초과 사실을 안 날로부터 3개월 이내에 신청하세요.',
      },
      {
        question: '상속포기를 하면 보험금도 받을 수 없나요?',
        answer:
          '<strong>수익자로 지정된 보험금은 받을 수 있습니다.</strong> 피상속인이 보험 수익자를 특정 상속인으로 지정한 경우, 그 보험금은 상속재산이 아니라 수익자 고유 재산이므로 포기와 무관합니다.',
      },
      {
        question: '미성년 자녀도 상속포기를 해야 하나요?',
        answer:
          '<strong>부모가 포기하면 자녀에게 상속권이 넘어갑니다.</strong> 미성년 자녀의 경우 법정대리인(친권자)이 가정법원 허가를 받아 포기 신고를 해야 합니다. 부모와 자녀가 함께 포기할 수도 있습니다.',
      },
      {
        question: '상속포기와 한정승인 중 어떤 것을 선택해야 하나요?',
        answer:
          '채무가 재산보다 <strong>명백히 많으면 상속포기</strong>, 재산과 채무를 정확히 알 수 없으면 <strong>한정승인</strong>이 안전합니다. 한정승인은 상속받은 재산 범위 내에서만 채무를 갚는 제도입니다.',
      },
      {
        question: '상속포기 신고 비용은 얼마인가요?',
        answer:
          '인지대 약 5,000원, 송달료 약 3만~5만 원 수준으로 <strong>총 비용은 5만 원 내외</strong>입니다. 법률구조공단을 통하면 무료 법률 상담도 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '상속포기 절차 무료 가이드 받기',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '상속 가이드', href: '/guide/inheritance' },
      { label: '상속재산 조회 방법과 필요 서류', href: '/spoke/inheritance/inheritance-asset-inquiry-method' },
      { label: '한정승인 절차와 효과', href: '/spoke/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속 숨은 빚 발견 시 대처법', href: '/spoke/inheritance/inheritance-hidden-debt-discovery' },
      { label: '상속순위와 법정상속분', href: '/spoke/inheritance/inheritance-order-legal-share' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. inheritance / inheritance-asset-inquiry-method
  // ───────────────────────────────────────────
  {
    domain: 'inheritance',
    slug: 'inheritance-asset-inquiry-method',
    keyword: '상속 재산 조회 방법과 필요 서류',
    questionKeyword: '상속재산을 어떻게 조회하고 어떤 서류가 필요한가요?',
    ctaKeyword: '상속재산 조회 방법 확인',
    type: '준비서류형',
    perspective: '상속인',
    meta: {
      title: '상속재산 조회 방법 4가지와 필요 서류 | 로앤가이드',
      description:
        '피상속인의 재산과 채무가 얼마인지 몰라 상속 결정이 어렵다면 4가지 조회 방법과 필요 서류를 지금 확인하세요.',
    },
    intro:
      '<p>가족이 갑자기 세상을 떠나면 슬픔 속에서도 현실적인 문제가 닥칩니다. "재산이 얼마나 있는지", "빚은 없는지" 파악하지 못하면 상속포기를 할지, 한정승인을 할지 결정할 수 없습니다. 정부는 안심상속 원스톱 서비스를 통해 피상속인의 금융·부동산·세금을 한 번에 조회할 수 있도록 했습니다. 기한 내에 정확히 조회해야 최선의 결정을 내릴 수 있습니다.</p>',
    sections: [
      {
        title: '조회 방법 ① — 안심상속 원스톱 서비스 (정부24)',
        content:
          '<p><strong style="color:#1e3a5f">사망일로부터 6개월 이내에 정부24에서 피상속인의 금융·부동산·차량·세금을 일괄 조회할 수 있습니다</strong></p>\n<p><strong>안심상속 원스톱 서비스</strong>는 상속인이 한 번의 신청으로 피상속인의 재산과 채무를 여러 기관에서 동시에 조회하는 서비스입니다.</p>\n<p><strong>조회 가능 항목</strong>:</p>\n<ul>\n<li>금융거래 — 은행 예·적금, 보험, 증권, 대출 내역</li>\n<li>부동산 — 토지·건물 소유 현황</li>\n<li>자동차 — 등록 차량 현황</li>\n<li>세금 — 국세·지방세 체납 내역</li>\n<li>연금 — 국민연금·공무원연금 가입 여부</li>\n</ul>\n<p><strong>신청 방법</strong>: 정부24 온라인 또는 주민센터 방문. 상속인 본인 인증 필요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 정부24 원스톱 → 금융·부동산·차량·세금·연금 일괄 조회</blockquote>',
      },
      {
        title: '조회 방법 ② — 금융감독원 상속인 금융거래 조회',
        content:
          '<p><strong style="color:#1e3a5f">원스톱 서비스에서 확인되지 않는 세부 금융거래는 금융감독원 조회를 추가로 이용하세요</strong></p>\n<p>금융감독원의 <strong>"상속인 금융거래 조회 서비스"</strong>를 통해 피상속인의 전 금융기관 거래 내역을 상세하게 확인할 수 있습니다.</p>\n<p><strong>조회 가능 항목</strong>: 은행 예금, 보험 계약, 증권 계좌, 카드 대금, 대출 잔액, 보증 내역</p>\n<p><strong>신청 서류</strong>:</p>\n<ul>\n<li>피상속인의 사망진단서(또는 제적등본)</li>\n<li>상속인임을 증명하는 가족관계증명서</li>\n<li>신청인 신분증</li>\n</ul>\n<p>결과는 신청 후 <strong>약 20일</strong> 정도 소요되므로 서둘러 신청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 금감원 조회 → 전 금융기관 상세 거래 내역 (약 20일 소요)</blockquote>',
      },
      {
        title: '조회 방법 ③ — 부동산·차량·국세 개별 조회',
        content:
          '<p><strong style="color:#1e3a5f">부동산 등기부등본, 차량 등록원부, 국세 체납 내역은 개별적으로도 확인할 수 있습니다</strong></p>\n<ul>\n<li><strong>부동산</strong> — 인터넷등기소에서 피상속인 명의 부동산 등기부등본 열람 (수수료 700원)</li>\n<li><strong>차량</strong> — 자동차민원 대국민포털에서 등록원부 발급</li>\n<li><strong>국세·지방세</strong> — 세무서 방문 또는 홈택스에서 납세증명서 발급. 체납 내역은 세무서에 직접 문의</li>\n</ul>\n<p>특히 부동산의 경우 <strong>근저당권, 가압류</strong> 등이 설정되어 있는지 등기부등본에서 반드시 확인하세요. 근저당이 설정되어 있으면 그 금액만큼 채무가 있다는 뜻입니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">조회 결과를 바탕으로 최선의 결정을 내리세요</strong><br/>\n<a href="/diagnosis/inheritance" style="color:#1565c0;font-weight:600">상속재산 조회 후 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '조회 방법 ④ — 사인(私人) 간 채무 확인 방법',
        content:
          '<p><strong style="color:#1e3a5f">지인 간 차용, 사채 등 공식 조회에 나오지 않는 채무는 별도로 확인해야 합니다</strong></p>\n<p>공식 조회 서비스에서 확인할 수 없는 채무를 찾는 방법:</p>\n<ul>\n<li><strong>휴대폰 문자·카카오톡</strong> — 채권자의 독촉 메시지, 송금 요청 내역 확인</li>\n<li><strong>이메일</strong> — 차용증, 계약서 사본이 첨부된 이메일 검색</li>\n<li><strong>통장 거래내역</strong> — 정기적으로 같은 사람에게 송금한 내역이 있으면 채무일 가능성</li>\n<li><strong>우편물</strong> — 피상속인 주소지로 온 내용증명, 독촉장 확인</li>\n<li><strong>채권자의 연락</strong> — 사망 후 채권자가 직접 연락해올 수 있으므로 기록으로 남기세요</li>\n</ul>\n<p>사인 간 채무가 있다고 의심되면 <strong>한정승인</strong>이 상속포기보다 안전할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 공식 조회 미포함 채무 → 문자·이메일·통장·우편물로 추가 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025다212863 사건(2025.12.11 선고) — 상속재산 중 예금채권의 분할과 공동상속인 분쟁',
        summary:
          '대법원 2025다212863 사건에서 법원은 금전채권과 같은 가분채권은 상속개시와 동시에 법정상속분에 따라 공동상속인에게 분할 귀속되는 것이 원칙이나, 초과특별수익자가 있는 등 특별한 사정이 있으면 예외적으로 상속재산분할 대상이 될 수 있다고 판시했습니다.',
        takeaway:
          '피상속인의 예금을 다른 상속인이 임의로 인출했다면 부당이득반환 또는 손해배상 청구가 가능합니다. 상속재산 조회 후 예금 잔액이 예상보다 적다면 거래내역을 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '안심상속 원스톱 서비스 신청에 비용이 드나요?',
        answer:
          '<strong>무료입니다.</strong> 정부24에서 온라인으로 신청하거나 주민센터를 방문하면 됩니다. 단, 개별 기관에서 서류를 추가 발급받을 때는 소정의 수수료가 발생할 수 있습니다.',
      },
      {
        question: '원스톱 서비스 결과가 나오기까지 얼마나 걸리나요?',
        answer:
          '조회 항목에 따라 다릅니다. <strong>금융거래는 약 7~20일, 부동산·차량은 약 5~7일</strong>이 걸립니다. 상속포기 기한(3개월)을 고려하면 사망 후 즉시 신청하는 것이 안전합니다.',
      },
      {
        question: '피상속인의 빚이 있는지 확인하는 가장 빠른 방법은?',
        answer:
          '<strong>안심상속 원스톱 서비스 + 금감원 조회를 동시에 신청하세요.</strong> 두 서비스를 병행하면 금융기관 채무는 거의 모두 파악할 수 있습니다. 사채 등 비공식 채무는 통장 거래내역으로 보충하세요.',
      },
      {
        question: '조회를 하면 상속을 승인한 것으로 간주되나요?',
        answer:
          '<strong>아닙니다.</strong> 재산 조회만으로는 단순승인으로 간주되지 않습니다. 상속재산을 처분하거나 사용해야 단순승인에 해당하므로, 조회는 안심하고 하세요.',
      },
    ],
    cta: {
      text: '상속재산 조회 후 무료 상담받기',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '상속 가이드', href: '/guide/inheritance' },
      { label: '상속포기 절차와 기한', href: '/spoke/inheritance/inheritance-renunciation-deadline' },
      { label: '한정승인 절차와 효과', href: '/spoke/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속 숨은 빚 발견 시 대처법', href: '/spoke/inheritance/inheritance-hidden-debt-discovery' },
      { label: '상속순위와 법정상속분', href: '/spoke/inheritance/inheritance-order-legal-share' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. traffic-accident / accident-settlement-process
];
