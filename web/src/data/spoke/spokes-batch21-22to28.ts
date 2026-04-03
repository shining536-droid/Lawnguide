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
  {
    domain: 'rehabilitation',
    slug: 'business-owner-rehabilitation-eligibility',
    keyword: '사업자 개인회생 신청 가능한 경우',
    questionKeyword: '사업자도 개인회생 신청이 가능한가요?',
    ctaKeyword: '사업자 개인회생 자격 확인',
    type: '상황형',
    perspective: '채무자',
    meta: {
      title: '사업자 개인회생 신청 가능 4가지 요건 | 로앤가이드',
      description:
        '사업을 운영 중인데 빚이 감당이 안 되어 개인회생이 가능한지 궁금하다면 사업자 신청 요건 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>매출은 줄었는데 대출 이자, 카드값, 거래처 미지급금까지 겹치면 숨이 막힙니다. "사업자는 개인회생을 못 한다"는 말을 듣고 포기하려 했지만, 채무자회생법 제579조는 영업소득이 있는 개인사업자도 요건만 갖추면 신청할 수 있다고 규정합니다. 폐업하지 않고 사업을 유지하면서도 개인회생을 진행할 수 있으니, 핵심 요건을 꼼꼼히 확인해보세요.</p>',
    sections: [
      {
        title: '사업자가 개인회생을 신청할 수 있는 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제579조에 따르면 영업소득자도 채무 한도·소득 요건·변제 가능성·부실 경위를 충족하면 개인회생을 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>채무 한도</strong> — 담보채무 15억 원 이하, 무담보채무 10억 원 이하. 사업 관련 채무(거래처 미수금, 사업자 대출)도 합산합니다</li>\n<li><strong>계속적·반복적 수입</strong> — 영업소득이 있거나 사업을 폐업 후 취업하여 급여소득이 있어야 합니다. 일시적 소득만으로는 부족합니다</li>\n<li><strong>장래 변제 가능성</strong> — 향후 3~5년간 변제계획을 이행할 수 있는 소득이 예상되어야 합니다</li>\n<li><strong>부실 경위의 정당성</strong> — 사기·도박 등 면책불허가 사유에 해당하지 않아야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 담보 15억 + 무담보 10억 이하 + 계속적 수입 + 변제 가능성 + 정당 경위</blockquote>',
      },
      {
        title: '영업소득자와 급여소득자 — 분류에 따라 절차가 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">사업을 계속 운영하면 영업소득자, 폐업 후 취업하면 급여소득자로 분류되며 소득 산정 기준이 다릅니다</strong></p>\n<p><strong>영업소득자</strong>는 월 소득이 불규칙하므로 최근 1년간 세금 신고서와 통장 거래내역으로 <strong>월평균 소득</strong>을 산정합니다. 종합소득세 신고서와 부가세 신고서가 핵심 증빙입니다.</p>\n<p><strong>급여소득자</strong>는 급여명세서로 소득을 명확히 입증할 수 있어 절차가 상대적으로 수월합니다. 사업 폐업 후 3개월 이상 근무하면 급여소득자로 인정받기 쉽습니다.</p>\n<p>분류를 잘못하면 소득 입증에서 난항을 겪을 수 있으므로, <strong>사업자등록증 유지 여부와 실제 소득 형태</strong>를 기준으로 판단하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업 유지 = 영업소득자(연간 평균), 폐업 후 취업 = 급여소득자(급여 기준)</blockquote>',
      },
      {
        title: '사업자가 자주 부딪히는 3가지 난관과 대처법',
        content:
          '<p><strong style="color:#1e3a5f">소득 불규칙, 채무 한도 초과, 사업 계속 여부가 핵심 쟁점입니다</strong></p>\n<p><strong>① 소득이 불규칙하다</strong> — 영업소득자는 최근 1년간 월평균 소득을 기준으로 합니다. 극단적으로 적은 달이 있어도 연간 평균이 최저생계비 이상이면 됩니다.</p>\n<p><strong>② 채무가 한도를 초과한다</strong> — 무담보채무가 10억 원을 넘으면 개인회생은 불가합니다. 이 경우 개인파산 또는 법인회생(법인 대표)을 검토해야 합니다.</p>\n<p><strong>③ 사업을 계속해도 되는가</strong> — 개인회생 중에도 사업 운영이 가능합니다. 다만 법원 허가 없이 새 채무를 부담하면 변제계획 불인가 사유가 됩니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 상황에 맞는 전략을 확인하세요</strong><br/>\n<a href="/diagnosis/rehabilitation" style="color:#1565c0;font-weight:600">사업자 개인회생 자격 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '사업자 추가 필요 서류 — 일반 회생보다 증빙이 많습니다',
        content:
          '<p><strong style="color:#1e3a5f">영업소득자는 소득 증빙을 위해 세금 신고서, 사업용 통장, 거래처 내역이 추가로 필요합니다</strong></p>\n<p><strong>공통 서류</strong>: 개인회생 신청서, 채권자 목록, 재산 목록, 수입·지출 목록, 주민등록등본·초본</p>\n<p><strong>사업자 추가 서류</strong>:</p>\n<ul>\n<li>사업자등록증 사본(또는 폐업확인서)</li>\n<li>최근 2년간 <strong>종합소득세 신고서</strong></li>\n<li><strong>부가가치세 신고서</strong></li>\n<li>사업용 통장 거래내역(최근 1~2년)</li>\n<li>거래처 미수금·미지급금 내역</li>\n<li>사업장 임대차계약서</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소득세·부가세 신고서 + 사업용 통장 내역 = 사업자 핵심 증빙</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024마6102 사건(2024.08.20 선고) — 변제계획 이행 불능 판단 기준',
        summary:
          '대법원 2024마6102 사건에서 법원은 채무자가 인가된 변제계획을 이행할 수 없음이 명백한지 판단할 때, 변제계획의 내용·이행 정도·이행하지 못한 이유·채무자의 성실성·재정상태 변화 등을 종합적으로 고려해야 한다고 판시했습니다.',
        takeaway:
          '사업 소득이 불안정하더라도 성실하게 변제를 이행하면 법원이 폐지 결정을 쉽게 내리지 않습니다. 소득 변동 시 즉시 변제계획 변경 신청을 검토하세요.',
      },
    ],
    faq: [
      {
        question: '사업을 폐업하지 않아도 개인회생을 신청할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 사업을 계속 운영하면서 "영업소득자"로 분류되어 개인회생을 신청할 수 있습니다. 최근 1년간 종합소득세 신고서와 사업용 통장 거래내역으로 소득을 입증해야 합니다.',
      },
      {
        question: '거래처 미수금도 채무에 포함되나요?',
        answer:
          '<strong>포함될 수 있습니다.</strong> 사업 운영 중 발생한 거래처 미지급금, 사업자 대출, 리스료 등은 모두 개인회생 채권자 목록에 기재해야 합니다. 빠짐없이 정리하세요.',
      },
      {
        question: '개인회생 중에 새 거래처와 계약해도 되나요?',
        answer:
          '<strong>기존 사업 범위 내 거래는 가능합니다.</strong> 다만 대규모 신규 채무나 보증은 법원 허가 없이 하면 변제계획 취소 사유가 될 수 있으므로 반드시 사전에 확인하세요.',
      },
      {
        question: '법인 대표도 개인회생이 가능한가요?',
        answer:
          '<strong>개인적으로 연대보증을 선 채무에 한해 가능합니다.</strong> 법인 채무 자체는 법인회생 대상이고, 대표 개인이 보증한 부분만 개인회생으로 처리할 수 있습니다.',
      },
      {
        question: '배우자 소득이 가용소득 산정에 영향을 주나요?',
        answer:
          '<strong>직접 포함되지는 않습니다.</strong> 가용소득은 신청인 본인 소득 기준이지만, 배우자가 생활비를 분담하면 생계비 산정에 간접적으로 영향을 줄 수 있습니다.',
      },
    ],
    cta: {
      text: '사업자 개인회생 자격 무료 진단받기',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      { label: '개인회생 신청 절차 A to Z', href: '/spoke/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 변제금 계산법', href: '/spoke/rehabilitation/rehabilitation-payment-calculation' },
      { label: '개인회생 vs 개인파산 비교', href: '/spoke/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '개인회생 채권자 추심 중지', href: '/spoke/rehabilitation/rehabilitation-creditor-collection-stop' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. rehabilitation / rehabilitation-vs-workout-comparison
  // ───────────────────────────────────────────
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-vs-workout-comparison',
    keyword: '개인회생 개인워크아웃 비교',
    questionKeyword: '개인회생과 개인워크아웃 중 어떤 게 유리한가요?',
    ctaKeyword: '개인회생 워크아웃 비교',
    type: '비교형',
    perspective: '채무자',
    meta: {
      title: '개인회생 vs 워크아웃 6가지 차이 비교표 | 로앤가이드',
      description:
        '개인회생과 개인워크아웃 중 어떤 제도가 나에게 맞는지 고민이라면 6가지 핵심 차이를 비교표로 지금 확인하세요.',
    },
    intro:
      '<p>매달 이자만 갚다 보니 원금은 줄지 않고, 신용회복위원회와 법원 중 어디를 찾아가야 할지 갈림길에 섰습니다. 개인회생은 법원이 주도하는 법적 절차이고, 개인워크아웃은 신용회복위원회를 통한 사적 조정입니다. 채무 규모, 채무 유형, 감면 폭이 크게 다르기 때문에 내 상황에 맞는 제도를 골라야 시간과 비용을 아낄 수 있습니다.</p>',
    comparison: {
      title: '개인회생 vs 개인워크아웃 핵심 비교표',
      headers: ['비교 항목', '개인회생', '개인워크아웃'],
      rows: [
        { label: '운영 주체', values: ['법원 (법적 절차)', '신용회복위원회 (사적 조정)'] },
        { label: '채무 감면 폭', values: ['원금 최대 90% 감면', '이자 감면 위주, 원금 최대 30~50%'] },
        { label: '변제 기간', values: ['3~5년', '최대 8~10년'] },
        { label: '채무 유형', values: ['모든 채무 (사채·개인 포함)', '금융기관 채무만'] },
        { label: '강제력', values: ['법원 인가 → 채권자 동의 불요', '채권자 과반 동의 필요'] },
        { label: '신용등급 영향', values: ['절차 중 신용제한, 면책 후 회복', '연체 기록 유지, 완제 후 해제'] },
      ],
    },
    sections: [
      {
        title: '법적 절차 vs 사적 조정 — 근본적 차이부터 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 법원 인가로 강제력이 발생하고, 워크아웃은 채권자 동의가 있어야 성립합니다</strong></p>\n<p><strong>개인회생</strong>은 채무자회생법에 근거하여 법원이 변제계획을 인가합니다. 인가 후에는 채권자의 동의 여부와 무관하게 추심·독촉·소송이 <strong>법적으로 금지</strong>됩니다.</p>\n<p><strong>개인워크아웃</strong>은 신용회복위원회가 중재하는 사적 조정 절차입니다. 채권 금융기관 과반수 이상 동의가 필요하며, 사채업자·개인 간 차용·세금은 대상에서 <strong>제외</strong>됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 회생 = 법원(강제력) / 워크아웃 = 신용회복위(채권자 동의)</blockquote>',
      },
      {
        title: '감면 폭과 변제 기간 — 숫자로 비교하세요',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 원금 70~90% 감면에 3~5년 변제, 워크아웃은 이자 감면 위주에 최대 10년 변제입니다</strong></p>\n<p><strong>개인회생</strong> — 변제계획에 따라 3~5년 변제 완료 시 잔여 채무 전액 면책. 실무상 원금의 70~90%가 감면됩니다. 최저변제액은 청산가치(파산 시 배당받을 금액) 이상이어야 합니다.</p>\n<p><strong>개인워크아웃</strong> — 주로 이자 감면과 변제기간 연장에 초점. 원금 감면은 최대 30~50% 수준이며, 변제기간이 8~10년으로 길어집니다.</p>\n<p>따라서 <strong>채무 규모가 크고 빠른 탕감</strong>이 필요하면 개인회생이, <strong>소액 금융 채무 위주</strong>라면 워크아웃도 실익이 있습니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 채무 규모에 맞는 제도를 확인하세요</strong><br/>\n<a href="/diagnosis/rehabilitation" style="color:#1565c0;font-weight:600">개인회생 vs 워크아웃 무료 비교 진단 &rarr;</a>\n</div>',
      },
      {
        title: '신청 자격과 채무 유형 — 사채가 있으면 워크아웃은 한계가 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">워크아웃은 금융기관 채무만 대상이므로 사채·개인 간 채무가 많으면 개인회생이 유일한 선택입니다</strong></p>\n<p><strong>개인회생</strong>: 담보채무 15억 원 이하, 무담보채무 10억 원 이하이며 계속적 수입이 있는 모든 개인. 은행·카드·사채·개인 차용·거래처 미수금 등 <strong>모든 채무</strong>가 대상입니다.</p>\n<p><strong>워크아웃</strong>: 총 채무 15억 원 이하, 3개월 이상 연체된 <strong>금융기관 채무</strong>만 해당. 사채업자·개인 간 차용·국세·지방세는 포함되지 않습니다.</p>\n<p>사채나 지인 채무가 총 채무의 상당 부분을 차지한다면 워크아웃으로는 근본적 해결이 어렵습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사채·개인 채무 포함 → 개인회생 / 금융기관 채무만 → 워크아웃 가능</blockquote>',
      },
      {
        title: '내 상황에 맞는 제도를 고르는 3단계 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">채무 유형, 감면 목표, 변제 여력 3가지를 순서대로 확인하면 최적 제도가 결정됩니다</strong></p>\n<p><strong>1단계 — 채무 유형 확인</strong><br/>사채·개인 간 채무가 있으면 → <strong>개인회생</strong>으로 결정. 금융기관 채무만이면 2단계로.</p>\n<p><strong>2단계 — 감면 목표 확인</strong><br/>원금 50% 이상 감면이 필요하면 → <strong>개인회생</strong>. 이자 감면만으로 충분하면 3단계로.</p>\n<p><strong>3단계 — 변제 여력 확인</strong><br/>월 가용소득이 충분하여 8~10년 장기 변제가 가능하면 → <strong>워크아웃</strong>도 선택지. 3~5년 내 빠른 정리가 목표면 → <strong>개인회생</strong>.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사채 포함? → 회생 / 원금 50%+ 감면? → 회생 / 장기 이자감면 OK? → 워크아웃</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2011마201 사건(2011.06.10 선고) — 개인회생 개시 요건 충족 판단 기준',
        summary:
          '대법원 2011마201 사건에서 법원은 개인회생절차 개시 요건 충족 여부는 신청 당시를 기준으로 판단하되, 즉시항고가 제기된 경우 항고심 결정 시를 기준으로 판단해야 한다고 판시했습니다. 또한 신청이 성실하지 않다는 이유로 기각하려면 부당한 목적이 인정되어야 한다고 밝혔습니다.',
        takeaway:
          '개인회생 신청이 한 번 기각되었더라도 사정이 변경되면 다시 신청할 수 있습니다. 워크아웃이 거부된 경우에도 개인회생은 별도로 신청이 가능하니 포기하지 마세요.',
      },
    ],
    faq: [
      {
        question: '워크아웃 중에 개인회생으로 전환할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 워크아웃 진행 중에도 개인회생 신청이 가능하며, 개인회생 개시결정이 나면 워크아웃 절차는 중단됩니다. 감면 폭이 부족하다고 느낀다면 전환을 검토하세요.',
      },
      {
        question: '두 제도를 동시에 신청할 수 있나요?',
        answer:
          '<strong>동시 진행은 원칙적으로 불가합니다.</strong> 하나의 절차를 먼저 진행하고, 결과에 따라 다른 절차를 검토하는 것이 일반적입니다.',
      },
      {
        question: '워크아웃은 신용등급에 어떤 영향을 주나요?',
        answer:
          '워크아웃 신청 시 <strong>신용정보에 "채무조정 중" 기록</strong>이 남습니다. 변제를 완료하면 해당 기록이 해제되지만, 완제까지 신규 대출과 카드 발급이 제한됩니다.',
      },
      {
        question: '개인회생이 면책된 후 신용은 언제 회복되나요?',
        answer:
          '면책결정 확정 후 <strong>3~5년 이내에 신용등급이 정상 수준으로 회복</strong>되는 것이 일반적입니다. 면책 직후 소액 신용카드 발급부터 시작하여 점진적으로 신용을 쌓아가세요.',
      },
      {
        question: '세금 체납이 있어도 워크아웃이 가능한가요?',
        answer:
          '<strong>세금은 워크아웃 대상에 포함되지 않습니다.</strong> 금융기관 채무만 조정 대상이므로, 세금 체납은 별도로 국세청에 분납 신청을 해야 합니다.',
      },
    ],
    cta: {
      text: '개인회생 vs 워크아웃 무료 비교 진단받기',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      { label: '사업자 개인회생 신청 자격', href: '/spoke/rehabilitation/business-owner-rehabilitation-eligibility' },
      { label: '개인회생 신청 자격요건 FAQ', href: '/spoke/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '개인회생 변제금 계산법', href: '/spoke/rehabilitation/rehabilitation-payment-calculation' },
      { label: '개인회생 vs 개인파산 비교', href: '/spoke/rehabilitation/rehabilitation-vs-bankruptcy' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. rehabilitation / rehabilitation-eligibility-requirements-faq
  // ───────────────────────────────────────────
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-eligibility-requirements-faq',
    keyword: '개인회생 신청 자격요건',
    questionKeyword: '개인회생 신청 자격요건은 무엇인가요?',
    ctaKeyword: '개인회생 자격요건 확인',
    type: 'Q&A형',
    perspective: '채무자',
    meta: {
      title: '개인회생 자격요건 5가지 핵심 정리 | 로앤가이드',
      description:
        '내가 개인회생 신청 자격이 되는지 궁금하다면 자격요건 5가지 핵심 조건과 자가진단 방법을 지금 확인하세요.',
    },
    intro:
      '<p>카드값, 대출 이자, 생활비까지 빚이 눈덩이처럼 불어나면서 개인회생이라는 단어를 처음 검색해봤습니다. 그런데 "나도 신청할 수 있는 건가?" 싶어 망설이게 됩니다. 채무자회생법은 일정 요건만 갖추면 누구나 개인회생을 신청할 수 있다고 규정하고 있습니다. 아래 5가지 핵심 요건을 하나씩 확인해보세요.</p>',
    sections: [
      {
        title: '자격요건 ① — 채무 한도: 담보 15억·무담보 10억 이하',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제579조에 따르면 담보채무 15억 원 이하, 무담보채무 10억 원 이하여야 개인회생을 신청할 수 있습니다</strong></p>\n<p>담보채무는 주택담보대출, 자동차 할부 등 담보가 설정된 채무이고, 무담보채무는 신용대출, 카드론, 사채 등입니다. 두 가지를 합산하는 것이 아니라 <strong>각각 별도 기준</strong>으로 판단합니다.</p>\n<p>예를 들어 주택담보대출 8억 원 + 신용대출 7억 원이면 양쪽 모두 한도 이내이므로 신청 가능합니다. 하지만 무담보채무만 12억 원이면 한도 초과로 불가합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 담보 15억 + 무담보 10억 = 각각 별도 기준</blockquote>',
      },
      {
        title: '자격요건 ② — 계속적·반복적 수입이 있어야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">급여소득, 영업소득, 연금소득 등 정기적인 수입이 있는 개인만 신청할 수 있습니다</strong></p>\n<p>"계속적·반복적"이란 일시적 소득이 아니라 <strong>매월 꾸준히</strong> 발생하는 수입을 의미합니다. 직장인의 급여, 자영업자의 영업소득, 국민연금·공무원연금 등이 모두 해당합니다.</p>\n<p>프리랜서나 일용직도 최근 1년간 소득이 꾸준하면 인정될 수 있습니다. 반대로 무직 상태라면 취업 후 3개월 이상 급여를 받은 뒤 신청하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 매월 정기 수입 필수 — 프리랜서·일용직도 1년 꾸준하면 인정 가능</blockquote>',
      },
      {
        title: '자격요건 ③ — 변제 가능성과 면책불허가 사유 부존재',
        content:
          '<p><strong style="color:#1e3a5f">3~5년간 변제할 수 있는 가용소득이 있어야 하며, 사기·도박 등 면책불허가 사유가 없어야 합니다</strong></p>\n<p><strong>변제 가능성</strong>: 월 소득에서 최저생계비와 필수 지출을 뺀 <strong>가용소득</strong>이 0원보다 커야 합니다. 가용소득이 전혀 없으면 개인회생이 아니라 개인파산을 검토해야 합니다.</p>\n<p><strong>면책불허가 사유</strong>: 사기·도박으로 인한 채무, 재산 은닉, 허위 채권자 목록 작성 등이 없어야 합니다. 다만 면책불허가 사유가 있어도 "재량면책"이 인정될 수 있으므로 바로 포기하지 마세요.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 자격 여부를 빠르게 확인하세요</strong><br/>\n<a href="/diagnosis/rehabilitation" style="color:#1565c0;font-weight:600">개인회생 자격요건 무료 자가진단 &rarr;</a>\n</div>',
      },
      {
        title: '자격요건 ④ — 과거 개인회생·파산 이력이 있는 경우',
        content:
          '<p><strong style="color:#1e3a5f">과거 면책을 받은 지 7년이 지나지 않았다면 재신청이 제한될 수 있습니다</strong></p>\n<p>채무자회생법 제595조 제5호는 이전 면책결정 확정일로부터 <strong>7년</strong>이 지나지 않은 경우 개시신청을 기각할 수 있다고 규정합니다. 다만 이전에 회생절차가 폐지되거나 기각된 경우는 면책을 받은 것이 아니므로 7년 제한이 적용되지 않을 수 있습니다.</p>\n<p>또한 이전 신청이 "성실하지 않은 신청"으로 기각된 이력이 있으면, 특별한 사정변경을 입증해야 재신청이 인정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이전 면책 후 7년 미경과 시 제한 / 폐지·기각은 별도 판단</blockquote>',
      },
      {
        title: '자격요건 ⑤ — 신청 시기와 준비 순서',
        content:
          '<p><strong style="color:#1e3a5f">연체가 시작되면 빠르게 신청할수록 이자 누적과 압류 위험을 줄일 수 있습니다</strong></p>\n<p>개인회생은 연체 여부와 관계없이 "지급불능 우려"가 있으면 신청할 수 있습니다. 다만 실무상 <strong>3개월 이상 연체</strong>가 되면 법원이 지급불능을 인정하기 수월합니다.</p>\n<p><strong>준비 순서</strong>:</p>\n<ol>\n<li>전체 채무 현황 정리 (금융기관·사채·개인 간 채무 합산)</li>\n<li>월 소득과 필수 지출 파악 → 가용소득 산출</li>\n<li>필요 서류 발급 (소득증빙, 재산목록, 채권자목록)</li>\n<li>법률구조공단 또는 전문가 상담 후 신청서 작성</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 연체 시작 → 즉시 준비 / 3개월+ 연체 시 지급불능 인정 수월</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2011마201 사건(2011.06.10 선고) — 개인회생 개시 요건 판단 기준',
        summary:
          '대법원 2011마201 사건에서 법원은 개인회생절차 개시 요건은 신청 당시를 기준으로 판단하며, "신청이 성실하지 않다"는 이유로 기각하려면 부당한 목적으로 신청했다는 사정이 인정되어야 한다고 판시했습니다.',
        takeaway:
          '과거에 개인회생 신청이 기각된 이력이 있더라도 사정이 변경되었다면 재신청이 가능합니다. 기각 사유를 정확히 파악하고 보완한 뒤 다시 시도하세요.',
      },
    ],
    faq: [
      {
        question: '무직 상태에서도 개인회생을 신청할 수 있나요?',
        answer:
          '<strong>무직 상태에서는 신청이 어렵습니다.</strong> "계속적·반복적 수입"이 필수 요건이므로, 취업 후 3개월 이상 급여를 받은 뒤 신청하는 것이 현실적입니다. 무직이라면 개인파산을 먼저 검토하세요.',
      },
      {
        question: '도박으로 진 빚도 개인회생이 가능한가요?',
        answer:
          '도박 채무는 면책불허가 사유에 해당할 수 있지만, <strong>법원의 재량면책이 인정되는 경우</strong>도 있습니다. 도박을 중단하고 반성문·치료 기록 등을 제출하면 면책 가능성이 높아집니다.',
      },
      {
        question: '국민연금 수급자도 개인회생을 신청할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 국민연금도 "계속적·반복적 수입"에 해당하므로 개인회생 신청 자격이 됩니다. 연금 수령액에서 생계비를 뺀 가용소득으로 변제계획을 수립합니다.',
      },
      {
        question: '채무 총액이 정확히 얼마인지 모르면 어떻게 하나요?',
        answer:
          '<strong>신용정보원에서 "개인신용정보 조회"를 신청하세요.</strong> 전국은행연합회 신용정보조회 서비스를 통해 금융기관 채무 전체를 한 번에 확인할 수 있습니다. 사채는 차용증이나 입금 기록으로 정리하세요.',
      },
      {
        question: '배우자의 빚도 함께 정리할 수 있나요?',
        answer:
          '<strong>각자 별도로 신청해야 합니다.</strong> 개인회생은 개인 단위 절차이므로 배우자의 채무는 배우자 본인이 별도로 신청해야 합니다. 다만 연대보증 채무가 있으면 함께 신청하는 것이 유리합니다.',
      },
    ],
    cta: {
      text: '개인회생 자격요건 무료 자가진단받기',
      link: '/diagnosis/rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      { label: '사업자 개인회생 자격', href: '/spoke/rehabilitation/business-owner-rehabilitation-eligibility' },
      { label: '개인회생 vs 워크아웃 비교', href: '/spoke/rehabilitation/rehabilitation-vs-workout-comparison' },
      { label: '개인회생 신청 필요서류', href: '/spoke/rehabilitation/rehabilitation-application-required-docs' },
      { label: '개인회생 변제금 계산법', href: '/spoke/rehabilitation/rehabilitation-payment-calculation' },
    ],
  },

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
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'accident-settlement-process',
    keyword: '교통사고 발생 후 합의 절차와 방법',
    questionKeyword: '교통사고 합의는 어떤 순서로 진행하나요?',
    ctaKeyword: '교통사고 합의 절차 확인',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '교통사고 합의 절차 6단계 완전 정리 | 로앤가이드',
      description:
        '교통사고를 당했는데 보험사 합의 절차가 막막하다면 피해자가 꼭 알아야 할 6단계 합의 절차를 지금 확인하세요.',
    },
    intro:
      '<p>사고가 난 직후 보험사에서 전화가 옵니다. "합의하시겠습니까?" 치료도 끝나지 않았는데 합의 금액을 제시받으면 당황스럽습니다. 교통사고 합의는 보험사가 주도하지만, 피해자가 절차를 모르면 적정 보상보다 훨씬 적은 금액에 서명하게 됩니다. 합의 전에 반드시 아래 6단계를 숙지하세요.</p>',
    timelineSteps: [
      '사고 직후 현장 보존 및 증거 수집',
      '경찰 신고 및 교통사고사실확인원 발급',
      '치료 완료 후 진단서·치료비 영수증 확보',
      '보험사 합의 금액 제시 → 적정성 검토',
      '합의 조건 협상 (위자료·휴업손해·후유장해)',
      '합의서 작성 및 보험금 수령',
    ],
    sections: [
      {
        title: '1단계 — 사고 직후 현장 보존과 증거 수집',
        content:
          '<p><strong style="color:#1e3a5f">사고 현장에서 사진·영상·블랙박스 영상을 확보하는 것이 합의의 출발점입니다</strong></p>\n<p>사고 직후에 확보해야 할 증거:</p>\n<ul>\n<li><strong>현장 사진</strong> — 차량 파손 부위, 도로 상태, 신호등, 스키드마크 촬영</li>\n<li><strong>블랙박스 영상</strong> — 내 차량과 상대 차량 영상 모두 확보. 주변 CCTV도 요청하세요</li>\n<li><strong>목격자 연락처</strong> — 현장에 목격자가 있으면 연락처를 받아두세요</li>\n<li><strong>상대방 정보</strong> — 상대 운전자 성명, 연락처, 보험사, 차량번호 기록</li>\n</ul>\n<p>현장에서 "괜찮다"고 말하거나, 합의를 서두르면 나중에 불리해집니다. <strong>반드시 병원 진료부터 받으세요.</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사진·블랙박스·목격자·상대방 정보 = 합의의 기초 증거</blockquote>',
      },
      {
        title: '2단계 — 경찰 신고와 교통사고사실확인원 발급',
        content:
          '<p><strong style="color:#1e3a5f">교통사고사실확인원은 과실비율 판단과 보험금 청구의 핵심 서류입니다</strong></p>\n<p>사고 발생 후 즉시 <strong>112에 신고</strong>하세요. 경찰이 출동하면 사고 조사 후 교통사고사실확인원을 발급합니다.</p>\n<p>이 서류에는 <strong>사고 경위, 관련 법규 위반 사항, 운전자 과실 내용</strong>이 기재되며, 보험사가 과실비율을 산정하는 기초 자료가 됩니다.</p>\n<p><strong>발급 방법</strong>: 사고 발생 후 약 <strong>2~4주</strong>에 관할 경찰서 교통조사계에서 발급. 교통민원24(이파인)에서 온라인 발급도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 교통사고사실확인원 = 과실비율 판단 핵심 서류</blockquote>',
      },
      {
        title: '3단계 — 치료 완료 후 진단서와 치료비 영수증 확보',
        content:
          '<p><strong style="color:#1e3a5f">치료가 완전히 끝난 뒤에 합의해야 후유장해 보상까지 받을 수 있습니다</strong></p>\n<p>보험사가 "빨리 합의하자"고 재촉해도 <strong>치료 종결 전에 합의하면 안 됩니다</strong>. 치료가 끝나야 총 치료비와 후유장해 등급을 정확히 산정할 수 있기 때문입니다.</p>\n<p><strong>확보해야 할 서류</strong>:</p>\n<ul>\n<li>의사 진단서 (초진 + 최종)</li>\n<li>치료비 영수증 전체</li>\n<li>향후치료비 소견서 (필요 시)</li>\n<li>후유장해 진단서 (장해가 남은 경우)</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">합의 금액이 적정한지 확인하세요</strong><br/>\n<a href="/diagnosis/traffic-accident" style="color:#1565c0;font-weight:600">교통사고 합의금 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '4단계 — 보험사 합의 금액 검토와 협상 포인트',
        content:
          '<p><strong style="color:#1e3a5f">보험사의 첫 제시 금액은 대부분 적정 보상액보다 낮으므로 항목별로 검증해야 합니다</strong></p>\n<p>합의 금액에 포함되어야 할 항목:</p>\n<ul>\n<li><strong>치료비</strong> — 실제 지출한 치료비 전액 + 향후치료비</li>\n<li><strong>위자료</strong> — 정신적 고통에 대한 보상. 입원일수, 치료 기간, 장해등급에 따라 달라집니다</li>\n<li><strong>휴업손해</strong> — 치료 기간 동안 일하지 못해 발생한 소득 손실</li>\n<li><strong>후유장해 보상</strong> — 치료 후에도 장해가 남으면 노동능력상실률에 따른 일실수입 산정</li>\n<li><strong>교통비·간병비</strong> — 통원 교통비, 간병이 필요한 경우 간병비</li>\n</ul>\n<p>보험사가 제시한 금액이 위 항목을 <strong>모두 포함하고 있는지</strong> 반드시 확인하세요. 누락된 항목이 있으면 추가 요청이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 치료비 + 위자료 + 휴업손해 + 후유장해 + 교통비·간병비 = 총 합의금</blockquote>',
      },
      {
        title: '5단계 — 합의서 작성 시 반드시 확인할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">합의서에 서명하면 추가 청구가 불가능하므로, 3가지 핵심 항목을 반드시 확인하세요</strong></p>\n<p><strong>① 면책 범위</strong> — "향후 일체의 이의를 제기하지 않는다"는 문구가 있으면 추가 치료비 청구가 불가능해집니다. <strong>후유장해 가능성이 있으면 해당 문구를 삭제</strong>하거나, 별도 조건을 추가하세요.</p>\n<p><strong>② 합의 금액 내역</strong> — 치료비·위자료·휴업손해가 각각 얼마인지 항목별로 기재되어 있는지 확인하세요. 일괄 금액만 적혀 있으면 분쟁 시 불리합니다.</p>\n<p><strong>③ 지급 기한</strong> — 합의금 지급 시기가 명시되어 있는지 확인하세요. "합의일로부터 14일 이내 지급" 등 구체적 기한이 있어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 면책 범위 + 항목별 내역 + 지급 기한 = 합의서 3대 체크포인트</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024다238217 사건(2025.08.14 선고) — 교통사고 책임보험금 산정 방법',
        summary:
          '대법원 2024다238217 사건에서 법원은 자동차손해배상 보장법에 따라 피해자가 치료 중 사망한 경우에도 책임보험금 한도(사망 시 1억 5천만 원) 내에서 피해자에게 발생한 손해액 전부를 배상해야 한다고 판시했습니다.',
        takeaway:
          '보험사가 제시하는 합의금이 책임보험 한도 이내인지 확인하세요. 사망·중상해 사고에서 책임보험금 한도를 초과하는 손해는 종합보험이나 가해자 본인에게 별도 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '치료가 끝나기 전에 보험사와 합의해도 되나요?',
        answer:
          '<strong>권장하지 않습니다.</strong> 치료 종결 전에 합의하면 추가 치료비와 후유장해 보상을 받을 수 없게 됩니다. 보험사가 재촉해도 치료가 완전히 끝난 뒤 합의하세요.',
      },
      {
        question: '보험사 제시 금액이 너무 적으면 어떻게 하나요?',
        answer:
          '<strong>거절하고 협상하세요.</strong> 보험사의 첫 제시 금액은 협상 출발점입니다. 치료비 영수증, 진단서, 소득증빙을 근거로 항목별 금액을 구체적으로 요청하면 금액이 올라가는 경우가 많습니다.',
      },
      {
        question: '합의 후에도 추가 치료비를 청구할 수 있나요?',
        answer:
          '합의서에 <strong>"향후 추가 청구 불가" 문구가 없으면</strong> 가능할 수 있습니다. 다만 대부분의 합의서에 면책 조항이 포함되므로, 합의 전에 후유장해 가능성을 반드시 확인하세요.',
      },
      {
        question: '과실비율이 있으면 합의금이 줄어드나요?',
        answer:
          '<strong>네, 과실비율만큼 감액됩니다.</strong> 예를 들어 총 손해액이 1,000만 원이고 피해자 과실이 20%이면 합의금은 800만 원이 됩니다. 과실비율 산정이 불합리하다면 교통사고 분쟁조정위원회에 이의를 제기할 수 있습니다.',
      },
      {
        question: '합의가 안 되면 소송밖에 방법이 없나요?',
        answer:
          '<strong>소송 전에 조정 절차가 있습니다.</strong> 손해보험협회 교통사고 분쟁조정위원회, 한국소비자원 피해구제 등 무료 조정 서비스를 먼저 이용해보세요. 조정이 성립하면 소송 없이 해결할 수 있습니다.',
      },
    ],
    cta: {
      text: '교통사고 합의금 무료 진단받기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 가이드', href: '/guide/traffic-accident' },
      { label: '교통사고 과실비율 분쟁 대응법', href: '/spoke/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 합의 시 실수 방지법', href: '/spoke/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 후유증 치료비 청구', href: '/spoke/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
      { label: '교통사고 어디부터 해야 하나', href: '/spoke/traffic-accident/traffic-accident-where-to-start' },
    ],
  },
];
