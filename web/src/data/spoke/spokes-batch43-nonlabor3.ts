import { SpokePage } from '../spoke-pages';

// batch43 nonlabor3 (7개): jeonse 2 + child-support 1 + rehabilitation 1 + bankruptcy 1 + stalking 1 + dui 1
// 1. 이 페이지는 전세를 월세로 전환할 때 차액·보증금 반환 쟁점에 부딪힌 임차인의 정리를 돕는 페이지다.
// 2. 이 페이지는 전세 계약 중 집이 팔려 새 집주인이 반환 의무를 떠안는 상황의 임차인 확인을 돕는 페이지다.
// 3. 이 페이지는 전 배우자가 실직을 이유로 양육비 감액을 요구할 때 양육자의 거부·대응 논리를 돕는 페이지다.
// 4. 이 페이지는 연대보증 채무를 회생계획에 포함할지 고민하는 개인회생 신청자의 판단을 돕는 페이지다.
// 5. 이 페이지는 가상화폐를 보유한 개인파산 신청자의 신고 의무와 은닉 리스크 확인을 돕는 페이지다.
// 6. 이 페이지는 전 연인이 법원·검찰청 근처로 접근하는 상황에서 잠정조치 집행을 요구하려는 피해자를 돕는 페이지다.
// 7. 이 페이지는 술 마시고 자전거를 탔다가 음주자전거로 단속된 운전자의 처벌·면허 영향 정리를 돕는 페이지다.

export const spokesBatch43Nonlabor3: SpokePage[] = [
  // ─── 1. jeonse / jeonse-monthly-rent-conversion-deposit-return ───
  {
    domain: 'jeonse',
    slug: 'jeonse-monthly-rent-conversion-deposit-return',
    keyword: '전세 월세 전환 보증금 반환',
    questionKeyword: '전세를 월세로 전환할 때 보증금은 어떻게 돌려받나요?',
    ctaKeyword: '월세 전환 보증금 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세 월세 전환 보증금 반환 3가지 쟁점 | 로앤가이드',
      description:
        '전세에서 월세로 전환할 때 차액 반환·전환율 상한·임대인 세금 부담까지 임차인이 꼭 챙겨야 할 3가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"계약 갱신하면서 전세를 월세로 돌리자"는 집주인의 제안은 단순해 보여도 실제로는 보증금 반환·전환율·세금 문제가 얽혀 있습니다. 2억 전세 중 1억을 월세로 전환하면 그 1억은 "반환받아야 할 돈"이 됩니다. 임대인이 세금을 이유로 차일피일 미루면 이자·지연손해금까지 청구 가능합니다. 주택임대차보호법 제7조의2의 전환율 상한과 반환 절차를 미리 알고 협상에 들어가야 손해가 없습니다.</p>',
    sections: [
      {
        title: '전환율 — 주임법 제7조의2 상한 확인',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제7조의2는 전세→월세 전환율의 법정 상한을 규정합니다.</strong></p>\n<ul>\n<li><strong>① 상한 공식</strong> — (한국은행 기준금리 + 대통령령 비율) 또는 연 10% 중 낮은 금액.</li>\n<li><strong>② 현재 기준</strong> — 2026년 기준 기준금리 약 3.0% + 2%p = 연 5.0% 수준이 상한.</li>\n<li><strong>③ 예시 계산</strong> — 보증금 1억 원 전환 시 월 41.6만 원(1억×5%÷12) 이상은 무효.</li>\n<li><strong>④ 초과 지급분</strong> — 임차인은 임대인에게 부당이득반환청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인이 "시세"를 근거로 상한을 넘기려 해도 법정 전환율이 우선합니다. 월세 계산서에 가능한 한 상한 확인.</blockquote>',
      },
      {
        title: '반환 시점과 방법 — 언제·어떻게 받나',
        content:
          '<p><strong style="color:#1e3a5f">전환 차액은 전환 합의일 또는 잔금 처리 시점에 즉시 반환받는 것이 원칙입니다.</strong></p>\n<ul>\n<li><strong>합의서 필수 기재</strong> — 전환 대상 금액·월세 환산액·반환 기일·지연 시 이자율.</li>\n<li><strong>계좌이체 원칙</strong> — 현금 수령 금지, 가능한 한 임차인 명의 계좌로 입금.</li>\n<li><strong>지연 시 이자</strong> — 상법상 연 6% 또는 약정 이자, 소송 시 연 12%(소송촉진법) 적용.</li>\n<li><strong>세무서 신고</strong> — 월세 전환 후 확정일자 재발급, 월세 세액공제 자격 유지.</li>\n<li><strong>보증금 잔액</strong> — 잔여 보증금도 임대인 대출·근저당 설정 여부 재확인.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 전세 월세 전환율·반환 절차·차액 계산을 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임대인이 반환 미루면 — 단계별 대응',
        content:
          '<p><strong style="color:#1e3a5f">전환 합의 후 30일이 지나도 반환되지 않으면 법적 절차로 전환하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 내용증명</strong> — 반환 기일·금액·지연이자·소송 예고 명시, 7일 기한.</li>\n<li><strong>2단계 — 지급명령</strong> — 전자소송 신청, 2~4주 내 결정, 비용 인지대의 1/10.</li>\n<li><strong>3단계 — 보증금 반환소송</strong> — 이의 제기 시 민사소송 전환, 평균 4~8개월.</li>\n<li><strong>4단계 — 강제집행</strong> — 승소 후 임대인 통장·부동산 압류, 추심.</li>\n<li><strong>병행 수단</strong> — 임차권등기명령으로 대항력·우선변제권 유지하며 이사 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차권등기가 완료되면 이사 후에도 대항력이 유지되므로, 새 집 이사 계획이 있다면 등기부터 챙기세요.</blockquote>',
      },
      {
        title: '연체차임 상계 쟁점 — 보증금에서 공제되나',
        content:
          '<p><strong style="color:#1e3a5f">월세 전환 후 임차인이 차임을 연체하면 임대인은 보증금에서 공제를 주장할 수 있습니다.</strong></p>\n<ul>\n<li><strong>원칙적 상계 가능</strong> — 임대차 종료 시 연체 차임은 보증금에서 당연 공제.</li>\n<li><strong>소멸시효 쟁점</strong> — 3년이 지난 연체 차임은 시효 완성, 상계 주장 제한 가능.</li>\n<li><strong>공제 계산 순서</strong> — 원칙적으로 오래된 연체부터 공제, 약정 있으면 약정 우선.</li>\n<li><strong>지연이자 포함</strong> — 공제 시 연체료·관리비도 함께 반영됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 연체 기간과 금액을 정확히 기록해 두면 과다 공제를 막을 수 있습니다. 카톡·통장 이체 내역 모두 보존.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 완성된 연체차임과 임대차보증금 상계·공제',
        summary:
          '대법원 2024다302217 사건(대법원, 2025.03.27 선고)에서 법원은 소멸시효가 완성된 연체차임과 임대차보증금 사이의 상계 내지 공제 여부를 다루며, 시효 완성 주장이 가능한 범위와 당사자 간 공제 합의의 효력 기준을 정리했습니다.',
        takeaway:
          '월세 전환 후 연체가 쌓여도 3년 시효 경과분은 보증금에서 자동 공제되지 않을 수 있으므로, 반환 청구 시 시효 주장을 가능한 한 검토해야 합니다.',
      },
    ],
    faq: [
      {
        question: '집주인이 "전환하면 월세가 더 싸진다"며 유도하는데 유리한가요?',
        answer:
          '<strong>세전 기준 월세 환산액이 법정 전환율보다 낮으면 유리할 수 있지만, 대부분은 임대인이 더 이익입니다.</strong> 가능한 한 연 5% 환산과 비교하세요.',
      },
      {
        question: '전환 시 확정일자와 전입신고는 다시 해야 하나요?',
        answer:
          '<strong>계약 조건이 변경되므로 새 계약서 작성 후 확정일자 재부여 권장합니다.</strong> 보증금·월세 조건 전부 갱신 필요.',
      },
      {
        question: '전환 후 월세 세액공제를 받을 수 있나요?',
        answer:
          '<strong>총급여 8,000만 원 이하 무주택자가 전용 85㎡ 이하 주택 월세를 내면 연 750만 원 한도 15% 세액공제 대상입니다.</strong> 확정일자·주민등록 필수.',
      },
      {
        question: '전환 후 집주인이 새 근저당을 설정하면 어떡하나요?',
        answer:
          '<strong>확정일자 이후 근저당은 후순위이므로 불이익이 제한적입니다.</strong> 다만 임차권등기로 한 번 더 안전장치 마련 권장.',
      },
      {
        question: '월세 인상은 전환과 동시에 할 수 있나요?',
        answer:
          '<strong>전환 시에도 주임법 제7조 5% 상한(갱신)이 적용됩니다.</strong> 임대인이 "전환이니 예외"라 주장해도 상한 준수해야 합니다.',
      },
      {
        question: '임대인이 세금을 이유로 전환 차액 반환을 늦추면?',
        answer:
          '<strong>임대인 세무는 임대인 사정이므로 지연 사유가 되지 않습니다.</strong> 합의 기일 넘기면 즉시 내용증명 발송.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '전세보증금 반환 청구 절차', href: '/guide/jeonse/jeonse-return-process' },
      { label: '임차권등기명령 신청 방법', href: '/guide/jeonse/jeonse-lease-registration-order' },
      { label: '전세 계약 갱신 거절 사유', href: '/guide/jeonse/jeonse-renewal-refusal-grounds' },
      { label: '월세 세액공제 요건 정리', href: '/guide/jeonse/jeonse-monthly-rent-tax-deduction' },
      { label: '보증금 지연이자 청구 가이드', href: '/guide/jeonse/jeonse-deposit-delay-interest' },
    ],
  },

  // ─── 2. jeonse / jeonse-house-sold-new-landlord-deposit ───
  {
    domain: 'jeonse',
    slug: 'jeonse-house-sold-new-landlord-deposit',
    keyword: '전세 계약 중 집 매매 새 집주인 보증금',
    questionKeyword: '전세 살고 있는데 집이 팔리면 보증금은 누가 돌려주나요?',
    ctaKeyword: '새 집주인 보증금 반환 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전세 중 집 매매, 새 집주인 보증금 책임 4가지 체크 | 로앤가이드',
      description:
        '전세 계약 중 집이 팔렸을 때 보증금 반환은 새 집주인이 떠안는지, 대항력 유지 조건은 무엇인지 4가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>어느 날 "집이 팔렸으니 나가 주세요"라는 전화를 받으면 세입자는 막막해집니다. 하지만 주택임대차보호법 제3조 제4항은 임차주택이 양도되면 양수인(새 집주인)이 임대인 지위를 승계한다고 분명히 규정합니다. 즉, 보증금은 원칙적으로 새 집주인이 반환합니다. 다만 대항력(전입신고 + 점유)이 매매 전에 갖춰져 있어야 하고, 새 집주인이 거절하는 경우에도 대응 수단이 있습니다.</p>',
    sections: [
      {
        title: '대항력 — 새 집주인에게 보증금을 요구할 자격',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제3조 제1항·제4항에 따라 대항력이 있어야 새 집주인에게 반환 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>① 전입신고</strong> — 주민등록상 해당 주소 전입 완료(다음 날 0시부터 효력).</li>\n<li><strong>② 실제 점유</strong> — 짐 이사·거주 개시, 비어 둔 상태면 대항력 불성립.</li>\n<li><strong>③ 매매 전 갖춤</strong> — 매매계약·등기 시점 이전에 ①+② 완료 필수.</li>\n<li><strong>④ 확정일자</strong> — 우선변제권까지 받으려면 계약서에 확정일자 부여.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전입신고일+1일이 대항력 발생일입니다. 매매 등기일과 비교해 하루라도 빠르면 승계 대상.</blockquote>',
      },
      {
        title: '새 집주인 승계 — 보증금 반환 책임 이전',
        content:
          '<p><strong style="color:#1e3a5f">양도인(이전 집주인)의 임대차 관련 권리·의무 전부가 양수인에게 이전됩니다.</strong></p>\n<ul>\n<li><strong>보증금 반환 의무</strong> — 이전 집주인 책임 면책, 새 집주인이 전액 반환.</li>\n<li><strong>계약 조건 승계</strong> — 계약 기간·월세·특약 모두 그대로 유지.</li>\n<li><strong>임대차 존속 기간</strong> — 기존 계약 종료일까지 임차인 지위 보장.</li>\n<li><strong>갱신요구권</strong> — 계약갱신요구권(주임법 제6조의3)도 새 집주인에게 행사 가능.</li>\n<li><strong>예외</strong> — 새 집주인이 실거주 목적이면 갱신 거절 가능(사유 소명 의무).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 대항력 성립 여부와 새 집주인 승계 범위를 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실제로 챙길 것 — 매매 소식 듣는 즉시',
        content:
          '<p><strong style="color:#1e3a5f">매매 사실을 인지한 뒤 14일 이내에 아래 5가지를 가능한 한 확보하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부등본 열람</strong> — 새 소유자 이름·주소·매매대금 확인(인터넷등기소).</li>\n<li><strong>2단계 — 이전 집주인 연락처 보관</strong> — 승계 거절 분쟁 시 증인 역할.</li>\n<li><strong>3단계 — 새 집주인 서면 통지</strong> — 계약 조건·보증금·잔여 기간 내용증명 발송.</li>\n<li><strong>4단계 — 대항력 증빙</strong> — 주민등록등본·전입신고일·확정일자 스캔 보관.</li>\n<li><strong>5단계 — 보증금 반환 예정일 확인</strong> — 계약 종료 시점 공식 문서로 확인.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 새 집주인이 근저당·대출을 설정할 수 있으므로, 매매 직후 등기부 재확인이 중요합니다.</blockquote>',
      },
      {
        title: '새 집주인이 보증금 반환 거부하면 — 대응',
        content:
          '<p><strong style="color:#1e3a5f">"이전 집주인한테 받으라"는 주장은 법적 근거 없는 위법한 거절입니다.</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 주임법 제3조 제4항 인용, 7일 기한 반환 요구.</li>\n<li><strong>지급명령 신청</strong> — 2~4주 내 결정, 인지대 절감.</li>\n<li><strong>보증금 반환소송</strong> — 승소 시 연 12% 지연이자(소송촉진법).</li>\n<li><strong>임차권등기명령</strong> — 이사 가도 대항력·우선변제권 유지.</li>\n<li><strong>HUG 보증보험</strong> — 가입자라면 보험으로 먼저 수령, HUG가 새 집주인에게 구상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 새 집주인이 실거주 목적 갱신 거절 주장 시 실제 입주 여부를 2년간 모니터링할 수 있습니다. 허위면 손해배상 청구.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차주택 소유권 취득 시 대항력·우선변제권 상실 여부',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 임차인이 임차주택의 소유권을 취득한 경우 주택임대차의 대항력과 우선변제권이 상실되는지를 다루며, 양도·양수 과정에서 임차인 지위 변동 기준을 제시했습니다.',
        takeaway:
          '일반 매매는 새 집주인이 보증금 반환 의무를 승계하지만, 예외적 지위 변동 상황이 있을 수 있으므로 등기부·매매 계약서를 꼼꼼히 확인해야 합니다.',
      },
    ],
    faq: [
      {
        question: '집이 경매로 넘어가도 새 낙찰자가 보증금을 돌려주나요?',
        answer:
          '<strong>경매는 매매와 달라서 대항력 + 말소기준권리 이전 확정일자가 있어야 보증금을 인수합니다.</strong> 근저당이 먼저면 배당만 받고 소멸할 수 있어요.',
      },
      {
        question: '매매 전에 전입신고는 했지만 확정일자를 안 받았다면?',
        answer:
          '<strong>대항력은 있어 승계는 되지만 우선변제권이 없어 경매 시 후순위가 됩니다.</strong> 즉시 주민센터에서 확정일자 받으세요.',
      },
      {
        question: '이전 집주인과 보증금 계약서가 있는데 새 집주인이 부인하면?',
        answer:
          '<strong>계약서·등기부·전입신고일로 승계 사실을 입증하면 됩니다.</strong> 새 집주인 주장은 법적 효력 없음.',
      },
      {
        question: '새 집주인이 실거주한다며 갱신을 거절하면 따라야 하나요?',
        answer:
          '<strong>실거주가 진짜인지 확인할 권리가 있고, 허위 시 손해배상 청구 가능합니다.</strong> 계약 만료 전 서면 통보 의무도 있어요.',
      },
      {
        question: '이전 집주인에게도 같이 반환 청구할 수 있나요?',
        answer:
          '<strong>원칙적으로 승계 완료 후에는 이전 집주인 책임이 면책되지만, 불법적 명의 이전·사해행위가 있으면 동시 청구 가능합니다.</strong>',
      },
      {
        question: 'HUG 보증보험에 가입되어 있는데 매매된 경우 보험이 유지되나요?',
        answer:
          '<strong>보증보험은 임대인 교체와 무관하게 보증금에 붙는 보험이라 그대로 유지됩니다.</strong> HUG에 매매 사실만 통지하세요.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '전세 대항력 완성 5단계', href: '/guide/jeonse/jeonse-opposing-power-complete-5steps' },
      { label: '임차권등기명령 신청 방법', href: '/guide/jeonse/jeonse-lease-registration-order' },
      { label: '전세 계약 갱신 거절 사유', href: '/guide/jeonse/jeonse-renewal-refusal-grounds' },
      { label: 'HUG 전세보증 가입 조건', href: '/guide/jeonse/jeonse-hug-guarantee-requirements' },
      { label: '전세보증금 반환 청구 절차', href: '/guide/jeonse/jeonse-return-process' },
    ],
  },

  // ─── 3. child-support / child-support-ex-unemployed-reduction-refuse ───
  {
    domain: 'child-support',
    slug: 'child-support-ex-unemployed-reduction-refuse',
    keyword: '양육비 감액 요구 거부',
    questionKeyword: '전 배우자가 실직했다며 양육비를 줄이겠다는데 거부할 수 있나요?',
    ctaKeyword: '양육비 감액 거부 대응 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '양육비 감액 요구 거부 3가지 논리 | 로앤가이드',
      description:
        '전 배우자가 실직·소득 감소를 이유로 양육비 감액을 요구할 때 양육자가 거부할 수 있는 법적 논리 3가지와 대응 절차를 지금 확인하세요.',
    },
    intro:
      '<p>전 배우자로부터 "회사를 그만둬서 양육비를 못 내겠다, 낮춰달라"는 연락을 받으면 양육자는 당혹스러울 수밖에 없습니다. 하지만 양육비는 자녀의 권리이지 상대방의 자발 기부가 아닙니다. 민법 제837조와 가사소송법상 양육비는 "부모의 자력"뿐 아니라 "자녀의 복리"도 함께 고려해 정해지고, 감액은 법원 결정 없이 일방적으로 이뤄질 수 없습니다. 감액 요구를 받았을 때 양육자가 쓸 수 있는 논리 3가지를 정리합니다.</p>',
    sections: [
      {
        title: '감액 요건 — "실직"만으로는 부족',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법·민법은 "사정변경이 중대하고 지속적"일 때만 양육비 변경을 인정합니다.</strong></p>\n<ul>\n<li><strong>① 중대한 감소</strong> — 소득이 20~30% 이상 지속적으로 줄었을 때.</li>\n<li><strong>② 일시적 실직 제외</strong> — 6개월 이내 재취업 예상이면 감액 사유 불인정.</li>\n<li><strong>③ 자발적 퇴사 엄격</strong> — 본인 의지 퇴사·사업 실패는 감액 사유 불인정 경향.</li>\n<li><strong>④ 자녀 복리 우선</strong> — 부모 자력 외에 자녀 나이·교육비·치료비 고려.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전 배우자가 "회사 그만뒀다"고만 해도 법원은 퇴사 경위·재취업 의지·숨긴 소득을 다 살핍니다.</blockquote>',
      },
      {
        title: '양육자가 거부할 수 있는 3가지 논리',
        content:
          '<p><strong style="color:#1e3a5f">법원 심판 없이 임의로 감액할 수 없음을 먼저 통지하세요.</strong></p>\n<ul>\n<li><strong>① 집행권원 효력</strong> — 양육비부담조서·심판문은 변경 결정 전까지 효력 유지.</li>\n<li><strong>② 사정변경 불충분</strong> — 실직이 중대·지속적이 아닌 경우(재취업 가능·퇴직금 있음).</li>\n<li><strong>③ 숨은 소득 존재</strong> — 배당·임대·프리랜서 소득 등 재산조회로 확인 가능.</li>\n<li><strong>④ 자녀 비용 증가</strong> — 학원·치료비 증가 시 오히려 증액 사유.</li>\n<li><strong>⑤ 과거 미지급 분</strong> — 감액과 별개로 기존 체납분은 모두 청구 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 감액 요구 거부 근거와 대응 순서를 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '감액 심판이 제기되면 — 양육자 대응 4단계',
        content:
          '<p><strong style="color:#1e3a5f">전 배우자가 법원에 감액 청구하면 가능한 한 답변서와 증거를 제출해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 답변서 제출</strong> — 30일 이내, 감액 불가 논리·증거 목록 제출.</li>\n<li><strong>2단계 — 상대 재산조회</strong> — 국민연금·건강보험·사업장 매출 등 법원을 통해 조회.</li>\n<li><strong>3단계 — 자녀 지출 증빙</strong> — 학원비·치료비·학교 행사비 영수증 체계화.</li>\n<li><strong>4단계 — 양육비 산정기준표 비교</strong> — 서울가정법원 기준표로 현 금액 적정성 입증.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대한법률구조공단·여성가족부 양육비이행관리원에서 무료 법률 지원 이용 가능합니다.</blockquote>',
      },
      {
        title: '임의 감액·지연 시 — 강제집행 수단',
        content:
          '<p><strong style="color:#1e3a5f">법원 결정 없이 일방적으로 적게 송금하면 체납 처리되고 강제집행 가능합니다.</strong></p>\n<ul>\n<li><strong>직접지급명령</strong> — 상대 회사 급여에서 직접 수령(가사소송법 제63조의2).</li>\n<li><strong>이행명령·감치</strong> — 3개월 이상 미지급 시 30일 이내 구속 가능.</li>\n<li><strong>담보제공명령</strong> — 미래 양육비 담보 공탁 강제.</li>\n<li><strong>양육비 이행관리원</strong> — 무료 추심 지원(한시적 긴급지원 포함).</li>\n<li><strong>명단 공개</strong> — 1년 이상 고의 미이행자 명단 공개 신청 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 체납된 양육비도 소멸시효 10년이 있으므로 장기 방치 말고 주기적으로 청구·강제집행 절차를 밟으세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비변경(감액) 청구에서 사정변경 판단 기준',
        summary:
          '대법원 2022스646 사건(대법원, 2022.09.29 선고)에서 법원은 양육비변경(감액) 청구와 관련해 당사자의 소득·재산 변동이 양육비 산정 당시 예상하지 못한 중대·지속적 사정변경에 해당하는지 기준을 정리하며, 자녀의 복리를 최우선으로 판단해야 한다고 보았습니다.',
        takeaway:
          '감액은 사정변경이 법률상 기준을 충족해야만 인정되므로, 양육자는 자녀 복리·상대 자력 회복 가능성을 증거로 반박해야 합니다.',
      },
    ],
    faq: [
      {
        question: '전 배우자가 "양육비 못 내겠다"며 아예 보내지 않는데 어떡하나요?',
        answer:
          '<strong>즉시 이행명령 신청 + 직접지급명령 병행하세요.</strong> 3개월 이상 미지급 시 감치(구속) 가능합니다.',
      },
      {
        question: '감액 심판이 제기됐는데 답변서를 안 내면 어떻게 되나요?',
        answer:
          '<strong>일방적으로 상대 주장이 받아들여져 감액 결정이 날 수 있습니다.</strong> 가능한 한 기한 내 답변서 + 증거 제출 필수.',
      },
      {
        question: '상대가 재혼해서 새 자녀가 생겼다는 이유로 감액을 요구할 수 있나요?',
        answer:
          '<strong>새 가족에 대한 부양 의무가 기존 양육비를 자동 감액시키지는 않습니다.</strong> 기존 자녀 복리가 우선 고려됩니다.',
      },
      {
        question: '사업 실패로 빚이 많다며 감액을 요구하면?',
        answer:
          '<strong>채무 자체는 감액 사유가 되기 어렵습니다.</strong> 소득·자산 전반을 종합해 지급 능력을 판단.',
      },
      {
        question: '양육비 산정기준표로 지금 금액이 적정한지 확인하려면?',
        answer:
          '<strong>서울가정법원 양육비 산정기준표를 부모 합산 소득·자녀 나이별로 찾으면 기준 구간을 확인할 수 있습니다.</strong> 법원 홈페이지 무료 공개.',
      },
      {
        question: '감액을 받아들여 합의해도 되나요?',
        answer:
          '<strong>합의해도 가능한 한 가정법원 조정·심판으로 공식화해야 효력이 있습니다.</strong> 구두 합의는 분쟁 재발 위험이 큽니다.',
      },
    ],
    cta: {
      text: '양육비 산정기준표, AI로 계산해보기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 이행명령·감치 절차', href: '/guide/child-support/child-support-enforcement-contempt-order' },
      { label: '양육비 직접지급명령 신청 절차', href: '/guide/child-support/child-support-direct-payment-order-procedure' },
      { label: '양육비 산정기준표 활용법', href: '/guide/child-support/child-support-calculation-table-use' },
      { label: '양육비 체납 명단 공개 신청', href: '/guide/child-support/child-support-overdue-name-disclosure' },
      { label: '양육비 이행관리원 무료 지원', href: '/guide/child-support/child-support-enforcement-method' },
    ],
  },

  // ─── 4. rehabilitation / rehabilitation-cosigner-joint-debt-include ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-cosigner-joint-debt-include',
    keyword: '개인회생 연대보증 채무 포함',
    questionKeyword: '친구 빚에 연대보증을 섰는데 개인회생 할 때 같이 신고해야 하나요?',
    ctaKeyword: '연대보증 채무 회생 포함 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '개인회생 연대보증 채무 포함 4가지 체크 | 로앤가이드',
      description:
        '개인회생 신청 시 연대보증·물상보증 채무를 채권자목록에 누락하면 면책 효력이 미치지 않을 수 있습니다. 포함 여부 판단과 실수 방지 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>몇 년 전 가족이나 친구 대출에 "이름만 올렸다"고 생각한 연대보증이 개인회생 신청 시점에 되살아나 발목을 잡는 일이 많습니다. 채무자 회생 및 파산에 관한 법률은 신청 당시 부담하고 있는 모든 채무를 채권자목록에 기재하도록 요구하고, 누락하면 면책 효력이 해당 채권자에게 미치지 않습니다. 연대보증·물상보증·어음보증 등 "잊고 있던 채무"까지 모두 챙겨 신고해야 합니다.</p>',
    sections: [
      {
        title: '연대보증의 법적 성격 — 왜 포함해야 하나',
        content:
          '<p><strong style="color:#1e3a5f">민법 제437조·제428조에 따라 연대보증인은 주채무자와 동일한 책임을 집니다.</strong></p>\n<ul>\n<li><strong>① 최고·검색 항변권 없음</strong> — 채권자는 주채무자 먼저가 아닌 연대보증인 바로 청구 가능.</li>\n<li><strong>② 전액 책임</strong> — 분할 연대면 분담 비율, 단순 연대면 전액 책임.</li>\n<li><strong>③ 회생 시 우발채무 아님</strong> — 보증 채무도 "현재 존재하는 채무"로 간주.</li>\n<li><strong>④ 주채무자 파산 여부 무관</strong> — 주채무자가 정상이어도 보증인 신청 시 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "아직 청구되지 않았다"는 이유로 빼면 안 됩니다. 회생 신청 시 우발·잠재 채무도 전부 신고 대상.</blockquote>',
      },
      {
        title: '채권자목록 누락 시 — 3가지 위험',
        content:
          '<p><strong style="color:#1e3a5f">누락한 채권자는 회생절차 밖에 있어 나중에 변제 요구를 그대로 받습니다.</strong></p>\n<ul>\n<li><strong>① 면책 효력 불미침</strong> — 채무자 회생 및 파산에 관한 법률 제625조 제2항 단서, 누락 채권은 면책 불가.</li>\n<li><strong>② 회생 폐지 위험</strong> — 고의적 누락으로 판단되면 회생절차 취소.</li>\n<li><strong>③ 사기 회생 형사 처벌</strong> — 고의 은닉·허위 진술 시 채무자 회생 및 파산에 관한 법률 제643조, 5년 이하 징역.</li>\n<li><strong>복구 방법</strong> — 인가 전까지 채권자목록 정정 가능, 인가 후엔 불가.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 연대보증·물상보증 등 포함할 채무 목록을 정리해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '포함 순서 — 신청 전 확인 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신청 14일 전부터 아래 5가지 자료를 수집해 목록 초안을 만드세요.</strong></p>\n<ol>\n<li><strong>1단계 — 신용정보 열람</strong> — 올크레딧·KCB에서 현재·과거 보증 이력 확인.</li>\n<li><strong>2단계 — 금융기관 문의</strong> — 보증 서명한 은행·카드·저축은행에 잔액 확인.</li>\n<li><strong>3단계 — 지인 보증 확인</strong> — 친구·가족 명의 대출에 보증 섰는지 기억 체크.</li>\n<li><strong>4단계 — 물상보증 점검</strong> — 본인 부동산·예금에 설정된 담보 확인.</li>\n<li><strong>5단계 — 채권 최고한도</strong> — 한도 내 원금·이자·지연손해금 모두 기재.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 주채무자가 갚고 있어도 보증 채무는 포함해야 합니다. "잠재 구상금 청구권"까지 포함 대상.</blockquote>',
      },
      {
        title: '변제계획 반영 — 보증 채무 처리',
        content:
          '<p><strong style="color:#1e3a5f">연대보증 채무는 변제계획에서 "회생채권"으로 변제율 적용을 받습니다.</strong></p>\n<ul>\n<li><strong>변제율 적용</strong> — 일반 회생채권과 동일하게 계산(통상 원금의 20~40%).</li>\n<li><strong>주채무자 정상 변제 시</strong> — 구상금 청구가 안 오더라도 목록엔 기재.</li>\n<li><strong>주채무자 부실 시</strong> — 채권자가 직접 청구, 회생 변제율대로 수령.</li>\n<li><strong>면책 후 주채무자 변제</strong> — 주채무자가 전액 변제하면 구상권도 면책 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보증인으로서 갚게 되면 주채무자에게 구상 가능하지만, 주채무자도 회생·파산 중이면 회수 어려움.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 채권자목록 누락된 보증인 구상금채권의 면책 효력',
        summary:
          '대법원 2024다221042 사건(대법원, 2025.10.16 선고)에서 법원은 주채무자에 대한 개인회생절차에서 채권자목록에 누락된 보증인이 변제계획인가 후 면책결정 전 전액 대위변제를 한 경우, 해당 보증인의 구상금채권에 면책의 효력이 미치는지를 다뤘습니다.',
        takeaway:
          '채권자목록 누락은 면책 범위에 중대한 영향을 미치므로, 연대보증·물상보증 등 우발적 채무까지 신청 시점에 모두 포함하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '주채무자가 성실하게 갚고 있어도 연대보증을 포함해야 하나요?',
        answer:
          '<strong>네, 신청 시점에 존재하는 채무이면 포함해야 합니다.</strong> 주채무자가 갚아도 보증인 회생 대상 채무.',
      },
      {
        question: '시댁·친정 대출 보증을 잊고 누락하면 어떻게 되나요?',
        answer:
          '<strong>인가 전 발견 시 정정 신청, 인가 후 발견 시 해당 채권에만 면책 효력이 미치지 않습니다.</strong> 고의 은닉은 형사 처벌.',
      },
      {
        question: '연대보증 채무를 신청 후에 알게 되면?',
        answer:
          '<strong>인가 전이면 즉시 관재인·법원에 정정 신청하세요.</strong> 인가 후엔 해당 채권만 별도로 관리해야 합니다.',
      },
      {
        question: '주채무자도 같이 회생 신청하면 유리한가요?',
        answer:
          '<strong>별개 절차지만, 병행하면 구상권·대위권 관계가 명확해져 분쟁이 줄어듭니다.</strong> 같은 법원에 신청 권장.',
      },
      {
        question: '연대보증 채권자가 회생 참여 안 하고 바로 소송하면?',
        answer:
          '<strong>개시결정 후엔 개별 소송이 중지되고, 회생채권 신고가 의무입니다.</strong> 채권자에게 회생 개시 사실 통지 필수.',
      },
      {
        question: '물상보증(부동산 담보)만 제공한 경우도 포함 대상인가요?',
        answer:
          '<strong>네, 담보권은 회생담보권으로 별도 분류됩니다.</strong> 담보 범위 내에서만 우선변제, 초과분은 회생채권.',
      },
    ],
    cta: {
      text: '개인회생 신청 자격, AI로 점검하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 채권자목록 작성법', href: '/guide/rehabilitation/rehabilitation-creditor-list-preparation' },
      { label: '회생 담보권·회생채권 구분', href: '/guide/rehabilitation/rehabilitation-secured-unsecured-claim' },
      { label: '회생 인가 후 변제계획 변경', href: '/guide/rehabilitation/rehabilitation-post-approval-income-decrease-modify' },
      { label: '회생 채권자 이의 대응', href: '/guide/rehabilitation/rehabilitation-creditor-objection-response' },
      { label: '개인회생 신청 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
    ],
  },

  // ─── 5. bankruptcy / bankruptcy-cryptocurrency-holdings-disclosure ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-cryptocurrency-holdings-disclosure',
    keyword: '파산 가상화폐 신고 의무',
    questionKeyword: '파산 신청하는데 가상화폐도 재산으로 신고해야 하나요?',
    ctaKeyword: '가상화폐 파산 신고 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '파산 가상화폐 신고 의무 4가지 체크 | 로앤가이드',
      description:
        '개인파산 신청 시 보유 가상화폐는 가능한 한 재산으로 신고해야 하고, 누락·은닉 시 면책 불허가·형사 처벌 위험이 있습니다. 신고 기준을 지금 확인하세요.',
    },
    intro:
      '<p>비트코인·이더리움 같은 가상자산을 가지고 있는 상태에서 파산을 신청할 때 가장 흔한 질문이 "거래소 외 개인 지갑도 공개해야 하나"입니다. 결론은 전부 공개입니다. 채무자 회생 및 파산에 관한 법률 제382조는 "채무자 소유의 모든 재산"을 파산재단으로 규정하고, 제564조는 설명의무 위반 시 면책 불허가 사유로 삼습니다. 은닉이 드러나면 면책이 취소되는 것은 물론 형사 처벌 대상이 됩니다.</p>',
    sections: [
      {
        title: '가상화폐가 재산인 근거 — 대법원·과세 판례',
        content:
          '<p><strong style="color:#1e3a5f">대법원은 가상자산을 재산적 가치 있는 무형재산으로 보고, 몰수·과세 대상으로 인정해 왔습니다.</strong></p>\n<ul>\n<li><strong>① 재산성 인정</strong> — 대법원 2018도3619 등 비트코인 몰수 가능 판결.</li>\n<li><strong>② 과세 근거</strong> — 특정금융거래정보법·소득세법(2027년 시행 예정) 가상자산 양도소득 과세.</li>\n<li><strong>③ 파산재단 포함</strong> — 법 제382조 "모든 재산" 문언에 포함.</li>\n<li><strong>④ 환가 방법</strong> — 파산관재인이 거래소 매각 후 배당 재원 편입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 거래소 계정뿐 아니라 하드월렛·모바일월렛·해외거래소 보유분 전부 신고 대상입니다.</blockquote>',
      },
      {
        title: '신고 범위 — 어디까지 공개해야 하나',
        content:
          '<p><strong style="color:#1e3a5f">국내·해외 모든 지갑과 코인·NFT·스테이블코인까지 신고 대상입니다.</strong></p>\n<ul>\n<li><strong>① 국내 거래소 계정</strong> — 업비트·빗썸·코인원 등 실명계좌 잔액 전부.</li>\n<li><strong>② 해외 거래소</strong> — 바이낸스·바이비트 등 외국 거래소 계정도 포함.</li>\n<li><strong>③ 개인 지갑</strong> — 메타마스크·렛저·트레저 등 자체 보관분.</li>\n<li><strong>④ NFT·DeFi 예치분</strong> — 스테이킹·유동성 풀에 묶인 자산도 신고.</li>\n<li><strong>⑤ 스테이블코인</strong> — USDT·USDC 등 원화 환산액 기재.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 가상자산 신고 범위와 평가 방법을 정리해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '평가·제출 — 가치 산정 3단계',
        content:
          '<p><strong style="color:#1e3a5f">신청일 기준 시가로 평가하고 소명자료를 첨부합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보유 수량 캡처</strong> — 거래소·지갑 잔액 화면을 날짜·시각 포함 저장.</li>\n<li><strong>2단계 — 시가 환산</strong> — 신청일 거래소 종가 기준 원화 환산(소수점 4자리).</li>\n<li><strong>3단계 — 자산 목록 기재</strong> — 파산 신청서 별지 "금융자산"에 코인명·수량·평가액 기재.</li>\n<li><strong>거래 이력 제출</strong> — 최근 1년 거래내역(CSV) 관재인 요구 시 즉시 제출.</li>\n<li><strong>지갑 주소 공개</strong> — 개인 지갑 주소·트랜잭션 해시 요구받을 수 있음.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 변동성이 커서 신청일 이후 가치가 변해도 신고 시점 기준이 원칙입니다. 환가 시점 시가는 관재인이 다시 평가.</blockquote>',
      },
      {
        title: '은닉·누락 시 처벌 — 면책 불허가·형사',
        content:
          '<p><strong style="color:#1e3a5f">고의적 은닉은 면책 불허가 + 형사 처벌이 동시에 진행됩니다.</strong></p>\n<ul>\n<li><strong>① 면책 불허가</strong> — 법 제564조 제1항 제1호, 재산 은닉·허위진술 시 면책 거부.</li>\n<li><strong>② 면책 취소</strong> — 면책 후 은닉 발각 시 1년 내 취소 청구 가능(법 제569조).</li>\n<li><strong>③ 사기파산죄</strong> — 법 제650조, 10년 이하 징역 또는 1억 원 이하 벌금.</li>\n<li><strong>④ 제3자 명의 보관</strong> — 가족·지인 명의 위장도 동일하게 처벌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 거래소는 수사·파산 관재인 자료요청에 응할 의무가 있어 은닉이 발각될 가능성이 매우 높습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산 은닉과 설명의무 위반으로 인한 면책불허가',
        summary:
          '대법원 2023마6319 사건(대법원, 2024.05.30 선고)에서 법원은 채무자의 재산 은닉과 설명의무 위반을 이유로 한 면책불허가결정이 정당한지를 판단하며, 파산신청자가 재산 내역을 성실하게 공개하지 않은 경우 면책을 불허할 수 있다고 판시했습니다.',
        takeaway:
          '가상화폐 등 숨기기 쉬운 자산도 파산관재인의 조회 범위에 들어오므로, 처음부터 모든 보유분을 정확히 신고해 면책을 지켜야 합니다.',
      },
    ],
    faq: [
      {
        question: '소액(10만 원 이하)이라도 신고해야 하나요?',
        answer:
          '<strong>금액과 무관하게 모두 신고 대상입니다.</strong> 소액이면 환가하지 않을 수 있지만 신고는 필수.',
      },
      {
        question: '파산 신청 직전에 가상화폐를 매도·이체하면 어떻게 되나요?',
        answer:
          '<strong>파산 전 재산 은닉·편파 변제로 부인 대상입니다.</strong> 1~2년 전 이체도 사해행위로 취소될 수 있어요.',
      },
      {
        question: '가족 지갑에 보관해도 되나요?',
        answer:
          '<strong>명의만 가족이어도 실질 보유자가 본인이면 본인 재산으로 신고해야 합니다.</strong> 명의 대여는 형사 처벌까지 갈 수 있어요.',
      },
      {
        question: '해외 거래소에 있는 코인도 추적되나요?',
        answer:
          '<strong>관재인이 소명 요구하면 증빙 못 할 경우 불이익 판단.</strong> 최근엔 국제 공조로 해외 거래소 자료도 입수 가능.',
      },
      {
        question: '스테이킹·DeFi에 묶여 있으면 환가가 어려운데요?',
        answer:
          '<strong>잠금 해제 후 환가하되, 기간이 길면 관재인과 협의해 별제권 설정 가능합니다.</strong> 포기 대상으로 분류되기도 합니다.',
      },
      {
        question: '신고 후 코인 가치가 급등하면 추가로 내야 하나요?',
        answer:
          '<strong>환가 시점 시가로 배당하므로 상승분도 파산재단 귀속이 원칙입니다.</strong> 급락 시엔 그만큼만 배당.',
      },
    ],
    cta: {
      text: '파산 면책 가능성, AI로 점검하기',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산 재산 신고 체크리스트', href: '/guide/bankruptcy/bankruptcy-asset-declaration-checklist' },
      { label: '면책 불허가 사유 정리', href: '/guide/bankruptcy/bankruptcy-non-discharge-grounds' },
      { label: '파산 면책 후 신용회복 5단계', href: '/guide/bankruptcy/bankruptcy-post-discharge-credit-rebuild-5steps' },
      { label: '파산 부인권 사해행위 대응', href: '/guide/bankruptcy/bankruptcy-denial-right-fraud-response' },
      { label: '파산 관재인 조사 대응', href: '/guide/bankruptcy/bankruptcy-trustee-investigation-response' },
    ],
  },

  // ─── 6. stalking / stalking-ex-lover-court-approach-ban ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-lover-court-approach-ban',
    keyword: '전 연인 법원 접근 접근금지 집행',
    questionKeyword: '전 연인이 재판 때문에 법원 근처까지 따라오는데 접근금지를 집행할 수 있나요?',
    ctaKeyword: '법원 접근 금지 집행 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전 연인 법원 접근, 접근금지 집행 4단계 | 로앤가이드',
      description:
        '재판·조사 일정 때문에 법원·검찰청 근처에서 전 연인을 마주쳐야 하는 스토킹 피해자가 접근금지 잠정조치를 현장에서 집행받는 순서를 지금 확인하세요.',
    },
    intro:
      '<p>스토킹 가해자와 같은 재판·조사 일정이 잡히면 피해자는 법원 주차장·엘리베이터·복도에서 마주칠 공포에 시달립니다. 잠정조치 접근금지(100m 이내 접근 금지)가 이미 결정된 상태라면 법원 출석 공간에서도 집행이 가능합니다. 다만 법정 안에서는 재판 절차와 충돌할 수 있어 사전 조율이 필요합니다. 출석 2주 전부터 챙겨야 할 4가지 절차를 정리합니다.</p>',
    sections: [
      {
        title: '잠정조치 100m 접근금지 — 법원 구역도 포함',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제9조 제1항 제2호의 접근금지는 "피해자 주변 100m"로 장소 제한이 없습니다.</strong></p>\n<ul>\n<li><strong>① 장소 포괄 적용</strong> — 법원·검찰청·병원·회사 등 어디에서든 100m 이내 접근 금지.</li>\n<li><strong>② 우연 예외 제한</strong> — 출입 필요한 재판 당사자라도 고의 접근·대기·미행은 위반.</li>\n<li><strong>③ 통신금지 동시</strong> — 제3호 통신금지 결정 시 법원 복도 대화 시도도 위반.</li>\n<li><strong>④ 위반 즉시 처벌</strong> — 2년 이하 징역 또는 2,000만 원 이하 벌금(법 제20조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 출석 시간만 살짝 다르면 피해자 대기 공간 분리가 가능합니다. 법원 직원실에 사전 요청 필수.</blockquote>',
      },
      {
        title: '사전 조율 — 법원·검찰에 협조 요청',
        content:
          '<p><strong style="color:#1e3a5f">출석 2주 전에 아래 5개 기관에 공문을 넣어 분리 동선을 확보하세요.</strong></p>\n<ul>\n<li><strong>① 피해자 보호 담당관</strong> — 각 법원·검찰청에 배치, 잠정조치 결정문 제시하면 분리 출석 조율.</li>\n<li><strong>② 재판부 서면 신청</strong> — 증인신문 시 차폐시설·영상신문 요청(형사소송법 제163조의2).</li>\n<li><strong>③ 경찰 동행</strong> — 스토킹 피해자 신변보호 요청 시 경찰이 법원까지 동행.</li>\n<li><strong>④ 대기 공간 분리</strong> — 피해자 전용 대기실(법원 내 마련됨) 사전 예약.</li>\n<li><strong>⑤ 출입구 분리</strong> — 법정 내 다른 출입구로 입·퇴장, 주차장 위치도 분리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 법원 출석 시 분리 절차와 신변보호 신청 방법을 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '위반 시 현장 대응 — 4단계',
        content:
          '<p><strong style="color:#1e3a5f">법원 내에서 가해자가 접근하면 즉시 아래 순서로 조치하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 거리 확인·기록</strong> — 스마트폰 녹음·촬영, 시각·위치 메모(100m 이내 입증).</li>\n<li><strong>2단계 — 법원 방호원 호출</strong> — 법정 내 방호원·경비원에게 즉시 신고.</li>\n<li><strong>3단계 — 112 신고</strong> — 방호원이 처리 못 하면 112로 위반 신고, 기록 접수.</li>\n<li><strong>4단계 — 수사관 통지</strong> — 담당 수사관·검사에게 위반 사실 공문 제출, 추가 잠정조치 요청.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위반 증거(녹음·사진·목격자 진술)는 추가 강화 잠정조치(4호 유치장 구금) 신청 시 결정적 근거가 됩니다.</blockquote>',
      },
      {
        title: '가중 조치 — 4호 유치장 구금 전환',
        content:
          '<p><strong style="color:#1e3a5f">접근·통신금지 위반이 반복되면 법원은 가해자를 최대 1개월 유치장에 구금할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신청 요건</strong> — 접근·통신금지 위반 1회 이상 + 추가 피해 우려.</li>\n<li><strong>② 심사 기간</strong> — 검사 청구 → 법원 결정, 평균 48시간 내.</li>\n<li><strong>③ 기간</strong> — 최대 1개월, 연장 가능(총 3개월까지).</li>\n<li><strong>④ 효과</strong> — 가해자 신체 구속, 통신·접근 물리적으로 차단.</li>\n<li><strong>⑤ 형사 절차 병행</strong> — 위반죄 기소 + 본안 스토킹처벌법 위반 가중 처벌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 4호는 피해자 신청만으로는 부족하고 검사의 적극적 청구가 필요하므로, 담당 검사와 사전 조율하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 접근금지 잠정조치 결정과 위반 처리',
        summary:
          '대법원 2022모2092 사건(대법원, 2023.02.23 선고)에서 법원은 검사가 스토킹처벌법 제9조 제1항 제2호·제3호의 접근금지 잠정조치 결정이 내려진 행위자에 대한 추가 조치 청구 절차를 다루며, 피해자 보호를 위한 잠정조치 운용 원칙을 정리했습니다.',
        takeaway:
          '접근금지 결정은 "결정"만으로 끝나지 않고 위반 시 추가 잠정조치·형사 절차로 강화될 수 있으므로, 피해자는 반복 위반을 꼼꼼히 기록해 두어야 합니다.',
      },
    ],
    faq: [
      {
        question: '법원 출석이 필요한 가해자도 접근금지가 적용되나요?',
        answer:
          '<strong>재판·조사 목적 출입은 허용되지만, 피해자 주변 100m 접근이나 대기·미행은 여전히 위반입니다.</strong> 분리 출석 시스템 활용.',
      },
      {
        question: '법정 안에서 마주치는 것만으로 위반인가요?',
        answer:
          '<strong>재판 진행 중 법정 내 동시 입장은 위반이 아니지만, 법정 밖 이동·대기·대화 시도는 위반입니다.</strong> 영상신문 요청 가능.',
      },
      {
        question: '증인신문에 나가야 하는데 영상신문이 가능한가요?',
        answer:
          '<strong>형사소송법 제163조의2에 따라 스토킹·성폭력 피해자는 영상·차폐 신문 가능합니다.</strong> 재판부에 사전 서면 신청.',
      },
      {
        question: '가해자 변호인이 접근하는 것도 위반인가요?',
        answer:
          '<strong>변호인 본인 접근은 위반이 아닙니다.</strong> 다만 변호인을 통한 간접 접촉·협박성 요청은 별도 문제.',
      },
      {
        question: '법원 근처 식당·카페에서 마주치면?',
        answer:
          '<strong>피해자 주변 100m 내 고의 접근이면 위반입니다.</strong> 우연으로 보이더라도 사진·시각 기록 보존 후 신고.',
      },
      {
        question: '가해자가 잠정조치 위반 후 벌금 내면 끝인가요?',
        answer:
          '<strong>벌금 납부와 별개로 추가 잠정조치(4호 유치장)까지 신청 가능합니다.</strong> 위반 이력이 쌓일수록 본안 가중 처벌.',
      },
    ],
    cta: {
      text: '스토킹 고소 대응 순서, AI로 점검하기',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹 잠정조치 신청 절차', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '스토킹 접근금지 위반 대응', href: '/guide/stalking/stalking-emergency-measure-violation-response' },
      { label: '스토킹 증거 수집 체크리스트', href: '/guide/stalking/stalking-evidence-collection-faq' },
      { label: '스토킹 피해자 신변보호 신청', href: '/guide/stalking/stalking-victim-protection-application' },
      { label: '스토킹 처벌·접근금지 개요', href: '/guide/stalking/stalking-penalty-restraining-order' },
    ],
  },

  // ─── 7. dui / dui-bicycle-intoxicated-riding-penalty ───
  {
    domain: 'dui',
    slug: 'dui-bicycle-intoxicated-riding-penalty',
    keyword: '음주자전거 처벌 면허 영향',
    questionKeyword: '술 마시고 자전거를 탔는데 벌금과 면허 영향이 어떻게 되나요?',
    ctaKeyword: '음주자전거 처벌 점검',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '음주자전거 처벌 3만 원·면허 영향 4가지 | 로앤가이드',
      description:
        '술 마시고 자전거·전동킥보드 탄 운전자의 음주자전거 처벌, 운전면허에 미치는 영향, 사고 시 형사 책임이 달라지는 4가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"자전거는 괜찮겠지"라는 생각으로 귀가하다 단속된 경우, 현장에서 혐의를 받고 있다면 우선 도로교통법 제156조 제11호의 음주자전거 조항이 적용됩니다. 전동킥보드 같은 개인형이동장치(PM)는 처벌 강도가 훨씬 무거워 일반 자동차 음주운전 수준입니다. 같은 "술+바퀴" 상황이어도 탄 기기가 무엇이냐에 따라 벌금·면허·보험이 완전히 달라지므로 정확히 구분해야 합니다.</p>',
    sections: [
      {
        title: '자전거 vs 전동킥보드 — 처벌 기준 차이',
        content:
          '<p><strong style="color:#1e3a5f">일반 자전거는 범칙금 3만 원, 전동킥보드는 일반 음주운전과 동일한 처벌입니다.</strong></p>\n<ul>\n<li><strong>① 일반 자전거</strong> — 도로교통법 제156조 제11호, 범칙금 3만 원(측정거부 10만 원).</li>\n<li><strong>② 전동킥보드·전동이륜보드</strong> — 원동기장치자전거 분류, 음주운전 형사 처벌 대상.</li>\n<li><strong>③ PM 처벌 수위</strong> — 0.03% 이상 시 5년 이하 징역 또는 2,000만 원 이하 벌금.</li>\n<li><strong>④ 면허 영향</strong> — PM 음주는 자동차 운전면허 결격사유에 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "자전거 같아 보여도 모터 달린 기기"는 전부 PM으로 분류되어 자동차 음주운전과 같은 잣대로 처벌 대상으로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '면허 영향 — 자동차 운전면허 연관성',
        content:
          '<p><strong style="color:#1e3a5f">일반 자전거는 면허 영향 없음, 전동킥보드는 자동차 면허까지 취소·정지됩니다.</strong></p>\n<ul>\n<li><strong>① 일반 자전거 음주</strong> — 범칙금만 부과, 면허·벌점 영향 없음.</li>\n<li><strong>② PM 0.03~0.08% 미만</strong> — 면허 100일 정지 + 벌점 100점.</li>\n<li><strong>③ PM 0.08% 이상</strong> — 면허 취소 + 결격기간 1~2년.</li>\n<li><strong>④ PM 측정거부</strong> — 면허 취소 + 결격기간 1년.</li>\n<li><strong>⑤ 재범</strong> — 10년 내 음주 전력 있으면 가중 처벌 및 결격기간 연장.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 탄 기기 종류별 처벌과 면허 영향을 정리해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사고 시 책임 — 민사·형사 복합 적용',
        content:
          '<p><strong style="color:#1e3a5f">음주 상태 사고는 보험 면책 + 중과실로 형사 처벌 가중됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 민사 책임</strong> — 피해자 치료비·위자료 전액 본인 부담(자전거 보험 면책).</li>\n<li><strong>2단계 — 형사 처벌</strong> — 자전거 상해 시 과실치상(형법 제266조) 또는 중과실치상(제268조).</li>\n<li><strong>3단계 — PM 사고</strong> — 교통사고처리특례법 음주운전 조항, 합의해도 기소.</li>\n<li><strong>4단계 — 사망 사고</strong> — 위험운전치사상(특가법 제5조의11) 1~30년 징역.</li>\n<li><strong>5단계 — 현장 이탈</strong> — 뺑소니 가중 처벌, 구속 수사 원칙.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자전거 자체 보험이 있어도 음주운전 시 면책 조항 있으므로, 약관을 가능한 한 확인하세요.</blockquote>',
      },
      {
        title: '혐의를 받고 있다면 — 초기 대응 4가지',
        content:
          '<p><strong style="color:#1e3a5f">PM 음주는 자동차 음주운전과 동일하므로 초기 증거 다툼이 매우 중요합니다.</strong></p>\n<ul>\n<li><strong>① 진술 최소화</strong> — 변호인 선임 전 음주량·시간 구체 진술 자제.</li>\n<li><strong>② 기기 분류 확인</strong> — 탄 기기가 PM인지 전기자전거(페달 보조형)인지 확인.</li>\n<li><strong>③ 혈액 검사 요청</strong> — 호흡 측정 결과 납득 어려우면 병원 혈액 검사 요청.</li>\n<li><strong>④ 현장 영상 확보</strong> — 블랙박스·CCTV·동행인 증언으로 측정 절차 적법성 확인.</li>\n<li><strong>⑤ 변호인 상담</strong> — PM 음주 전담 변호사 상담으로 해당할 소지가 있는 감경 사유 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 페달 보조형 전기자전거는 원칙적으로 일반 자전거로 분류되지만, 최고속도·출력 기준을 넘으면 PM 취급될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전동킥보드 등 개인형 이동장치의 원동기장치자전거 해당 여부',
        summary:
          '대법원 2022도13430 사건(대법원, 2023.06.29 선고)에서 법원은 전동킥보드와 같은 개인형 이동장치가 구 특정범죄 가중처벌 등에 관한 법률 제5조의11 제1항의 "원동기장치자전거"에 해당하는지를 판단하며, 음주 상태에서의 운행에 대해 자동차 음주운전과 동일한 기준이 적용된다고 보았습니다.',
        takeaway:
          'PM은 겉모습이 자전거여도 법률상 "원동기장치자전거"로 분류되어 음주운전 처벌 수위가 자동차 수준이므로, 탄 기기의 법적 분류를 가장 먼저 확인해야 합니다.',
      },
    ],
    faq: [
      {
        question: '일반 자전거 음주 전과도 나중에 문제가 되나요?',
        answer:
          '<strong>범칙금 처분이라 전과로 남지 않지만, 반복 단속 시 기록이 누적됩니다.</strong> 자동차 면허엔 영향 없음.',
      },
      {
        question: '페달 보조형 전기자전거는 어떻게 분류되나요?',
        answer:
          '<strong>최고속도 25km/h 이하·출력 350W 이하면 일반 자전거, 그 이상이면 PM입니다.</strong> 인증서·표시 확인 필수.',
      },
      {
        question: 'PM 음주로 자동차 면허도 취소되나요?',
        answer:
          '<strong>네, 도로교통법상 PM 음주는 자동차 운전면허까지 취소 대상입니다.</strong> 결격기간 1~2년.',
      },
      {
        question: '자전거 음주 사고로 다친 피해자에게 보상은 어떻게 하나요?',
        answer:
          '<strong>본인 과실 100%로 보상 책임 전부 부담, 보험 면책 가능성 높음.</strong> 합의·공탁으로 형사 감경 시도.',
      },
      {
        question: '공유 킥보드 이용 시 음주도 PM 처벌인가요?',
        answer:
          '<strong>네, 공유·소유 무관하게 PM 기기이면 동일 처벌입니다.</strong> 앱 로그·본인인증이 증거로 사용됩니다.',
      },
      {
        question: 'PM 초범인데 실형을 살 가능성이 있나요?',
        answer:
          '<strong>단순 음주·사고 없음이면 벌금·집행유예가 일반적이지만, 사고·고속·재범 시 실형 가능합니다.</strong> 전담 변호사 조기 상담 권장.',
      },
    ],
    cta: {
      text: '음주운전 행정심판 준비서류, AI로 체크하기',
      link: '/chat?domain=dui',
    },
    internalLinks: [
      { label: '전동킥보드 PM 음주운전 처벌', href: '/guide/dui/dui-electric-scooter-pm-penalty' },
      { label: '음주측정 거부 처벌과 행정심판', href: '/guide/dui/dui-measurement-refusal-penalty-appeal' },
      { label: '음주운전 행정심판 필요서류', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '탄원서·감경 요소 정리', href: '/guide/dui/dui-leniency-petition-documents' },
      { label: '면허 취소 청문 절차', href: '/guide/dui/dui-administrative-license-hearing' },
    ],
  },
];
