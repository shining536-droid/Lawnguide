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
          '<p><strong style="color:#1e3a5f">개인회생 신청의 핵심은 신청서, 채권자 목록, 재산 목록 3종입니다</strong></p>\n<ul>\n<li><strong>개인회생 신청서</strong> — 법원 양식 다운로드(대한민국 법원 전자민원센터). 채무자 인적사항, 채무 발생 경위, 변제계획 개요를 기재합니다</li>\n<li><strong>채권자 목록</strong> — 모든 채권자의 이름, 채무 금액, 연체 기간을 빠짐없이 기재. 사채업자·개인 간 채무도 포함해야 합니다</li>\n<li><strong>재산 목록</strong> — 부동산, 예금, 보험 해지환급금, 자동차, 주식 등 모든 재산을 기재합니다</li>\n</ul>\n<p>채권자를 하나라도 누락하면 해당 채무가 면책되지 않을 수 있으므로 <strong>신용정보원 조회 결과</strong>를 가능한 한 첨부하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 신청서 + 채권자 목록 + 재산 목록 = 3대 필수 서류</blockquote>',
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
          '채권자 목록에 누락된 채무는 면책되지 않을 수 있습니다. 신용정보원 조회 결과를 기반으로 모든 채권자를 빠짐없이 기재하고, 사채업자 채무도 가능한 한 포함하세요.',
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
          '<strong>가능한 한 넣어야 합니다.</strong> 사채, 지인 간 차용, 미등록 대부업체 채무까지 모두 기재해야 면책 대상에 포함됩니다. 누락하면 해당 채무만 그대로 남습니다.',
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
  // 6. inheritance / inheritance-asset-inquiry-method

  // ───────────────────────────────────────────
  // 7. traffic-accident / accident-settlement-process
];
