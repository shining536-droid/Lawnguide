import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [매매계약 해제를 원하는 매수인]의 [계약금 반환 청구 절차를 모르는 상황]에서 [해제 사유별 4단계 청구 절차와 법적 근거 안내]를 돕는 페이지다.
// 2. 이 페이지는 [매매계약서 작성을 앞둔 매수인]의 [필수 특약 사항을 놓칠까 봐 불안한 상황]에서 [계약서 서명 전 체크리스트 7가지 안내]를 돕는 페이지다.
// 3. 이 페이지는 [입주 후 하자를 발견한 매수인]의 [손해배상 청구 가능성과 절차를 모르는 상황]에서 [하자 유형별 청구 요건과 증거 확보 방법 안내]를 돕는 페이지다.
// 4. 이 페이지는 [매매계약 체결 경험이 없는 매수인]의 [계약 시 흔히 저지르는 실수를 사전에 파악하려는 상황]에서 [7가지 실수 유형과 예방법 안내]를 돕는 페이지다.
// 5. 이 페이지는 [계약 체결 전 등기부 확인이 필요한 매수인]의 [무엇을 어떻게 확인해야 할지 모르는 상황]에서 [등기부등본 항목별 체크리스트 안내]를 돕는 페이지다.
// 6. 이 페이지는 [경매 입찰을 처음 준비하는 일반인]의 [입찰 절차와 필요 서류를 모르는 상황]에서 [4단계 입찰 절차와 배당 주의사항 안내]를 돕는 페이지다.
// 7. 이 페이지는 [경매 낙찰 후 점유자 명도가 필요한 낙찰자]의 [명도소송 절차를 모르는 상황]에서 [4단계 명도 절차와 인도명령·소송 선택 기준 안내]를 돕는 페이지다.

export const spokesBatch23_1to7: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. real-estate-sale / contract-cancellation-deposit-return
  // ───────────────────────────────────────────
  // 2. real-estate-sale / sale-contract-essential-clauses
  // ───────────────────────────────────────────
  // 3. real-estate-sale / defect-damage-claim
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-sale',
    slug: 'defect-damage-claim',
    keyword: '매매 부동산 하자 손해배상 청구',
    questionKeyword: '부동산 매수 후 하자를 발견했는데 손해배상을 받을 수 있나요?',
    ctaKeyword: '부동산 하자 손해배상 청구 상담',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '매매 부동산 하자 발견 후 손해배상 청구 5단계 | 로앤가이드',
      description:
        '입주 후 누수·균열·시설 결함을 발견했는데 매도인이 모른다고 발뺌한다면 하자담보책임 청구 요건과 5단계 절차를 지금 확인하세요',
    },
    intro:
      '<p>이사 들어온 지 한 달 만에 욕실 천장에서 물이 새기 시작했습니다. 매도인에게 연락하니 "살 때부터 그랬던 것 같다"며 책임을 회피합니다. 계약할 때는 아무 말도 없었는데, 수리 비용이 수백만 원이 나올 것 같아 억울합니다. 하자가 언제 발생했는지, 매도인이 알고 있었는지에 따라 청구 방법이 달라집니다.</p>',
    sections: [
      {
        title: '민법 제580조 하자담보책임: 적용 요건 4가지',
        content:
          '<p><strong style="color:#1e3a5f">매도인의 하자담보책임은 계약 당시에 이미 존재하던 하자에 대해 매수인이 알지 못한 경우에 인정됩니다.</strong></p>\n<ul>\n<li><strong>요건 1 — 하자의 존재</strong>: 목적물이 통상 갖춰야 할 품질·성능을 결여하고 있어야 합니다. 누수, 균열, 배관 문제, 법령 위반 시설 등이 포함됩니다</li>\n<li><strong>요건 2 — 계약 성립 당시 존재</strong>: 하자가 매매계약 체결 시점에 이미 존재해야 합니다. 입주 후 매수인의 사용 과실로 발생한 하자는 해당되지 않습니다</li>\n<li><strong>요건 3 — 매수인의 선의·무과실</strong>: 매수인이 계약 전에 하자를 알지 못했어야 하고, 알 수 있었음에도 확인을 게을리하지 않아야 합니다</li>\n<li><strong>요건 4 — 제척기간 내 청구</strong>: 하자를 안 날로부터 <strong>6개월 이내</strong>에 청구해야 합니다(민법 제582조). 이 기간을 넘기면 권리 자체가 소멸합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 하자를 발견한 즉시 사진 촬영, 전문가 진단서 확보를 시작하고 6개월 제척기간을 반드시 지키세요</blockquote>',
      },
      {
        title: '하자 유형별 청구 전략',
        content:
          '<p><strong style="color:#1e3a5f">하자 유형에 따라 하자담보책임, 불법행위, 사기를 선택적으로 또는 중첩하여 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>단순 물리적 하자(누수·균열 등)</strong>: 민법 제580조 하자담보책임 → 대금 감액 또는 손해배상 청구</li>\n<li><strong>매도인이 알면서 숨긴 하자</strong>: 민법 제750조 불법행위 손해배상 청구 가능 → 이 경우 6개월 제척기간이 아닌 일반 시효(3년) 적용</li>\n<li><strong>법령 위반 사항(무허가 증축 등)</strong>: 하자담보책임과 별도로 공법상 의무 위반에 따른 손해배상 가능</li>\n<li><strong>신규 분양 아파트 하자</strong>: 집합건물의 소유 및 관리에 관한 법률 제9조에 따라 분양자에게 하자담보추급권 행사 가능 — 하자 유형별로 1~10년의 담보책임 기간 적용</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 내 하자의 청구 유형과 예상 배상액을 분석해드립니다.</p>\n<a href="/chat?domain=real-estate-sale" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보와 손해배상 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">하자 손해배상 청구의 성패는 증거 확보 여부에 달려 있습니다. 발견 즉시 체계적으로 자료를 수집해야 합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 현장 보전</strong>: 하자 발생 즉시 사진·동영상 촬영, 날짜 기록. 임의로 수리하면 증거가 훼손되므로 주의</li>\n<li><strong>2단계 — 전문가 진단</strong>: 건축사, 하자심사·분쟁조정위원회, 감정평가사 등을 통해 하자 원인과 수리 비용 공식 진단서 발급</li>\n<li><strong>3단계 — 내용증명 발송</strong>: 하자 내용, 수리 비용, 대금 감액 또는 손해배상 요구를 기재한 내용증명을 매도인에게 발송. 6개월 제척기간 준수</li>\n<li><strong>4단계 — 협의 또는 조정</strong>: 한국부동산원 하자심사·분쟁조정위원회, 법원 조정 신청으로 비용을 절감하면서 해결</li>\n<li><strong>5단계 — 소송</strong>: 협의 불성립 시 손해배상 청구 소송 제기. 수리 비용이 500만 원 이하면 소액사건심판 활용 가능</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 하자 발견일로부터 6개월 내 내용증명 발송 → 제척기간 준수가 가장 중요합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 신규 아파트 미분양 세대 하자담보책임 관리단 의결 기준',
        summary:
          '대법원 2025다213134 사건(대법원, 2025.12.04 선고)에서 법원은 집합건물의 미분양 세대를 소유한 분양자는 자신을 상대방으로 하는 하자담보책임 안건에 관한 관리단집회에서 의결권이 없으며, 관리단이 분양자를 상대로 하자담보추급권을 행사하는 소를 제기할 때 분양자 소유 미분양 세대를 제외하고 구분소유자 수와 의결권 비율을 계산해야 한다고 판시했습니다.',
        takeaway:
          '신규 아파트에서 하자 손해배상 청구를 위한 관리단 결의가 필요한 경우, 분양자(시행사·시공사)가 미분양 세대를 통해 의결권을 행사하여 결의를 방해하는 것은 법적으로 허용되지 않습니다. 입주자대표회의가 결의 요건을 갖추었다면 분양자를 상대로 하자담보추급권을 행사할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '이미 수리를 마친 하자도 청구할 수 있나요?',
        answer:
          '<strong>수리 전 사진과 수리 영수증이 있다면 청구할 수 있습니다.</strong> 이미 수리한 경우에도 수리 전 하자 사진, 전문가 진단서, 수리 영수증이 있으면 손해배상 청구가 가능합니다. 다만 임의 수리로 인해 감정이 어려워지면 배상액이 줄어들 수 있습니다.',
      },
      {
        question: '중고 아파트와 신규 분양 아파트의 하자 청구 기간이 다른가요?',
        answer:
          '<strong>크게 다릅니다.</strong> 중고 아파트 매매 시 민법상 하자담보책임 제척기간은 하자를 안 날로부터 6개월입니다. 신규 분양 아파트의 경우 집합건물법에 따라 하자 유형별로 1년~10년의 담보책임 기간이 적용됩니다(예: 구조 내력상 하자는 10년).',
      },
      {
        question: '매도인이 알고도 숨긴 하자라면 더 많이 청구할 수 있나요?',
        answer:
          '<strong>불법행위 손해배상으로 정신적 손해배상(위자료)까지 청구할 수 있습니다.</strong> 매도인이 하자를 알면서 고의로 숨긴 경우 불법행위(민법 제750조)로도 청구할 수 있어 하자보수 비용 외에 위자료 추가 청구가 가능합니다.',
      },
      {
        question: '공인중개사가 하자를 알고 있었다면 중개사에게도 청구할 수 있나요?',
        answer:
          '<strong>공인중개사법 제30조에 따라 중개업자도 손해배상 책임을 집니다.</strong> 중개사가 하자를 알면서 설명하지 않았거나, 하자 확인 의무를 해태한 경우 중개사와 공제조합을 상대로 손해배상을 청구할 수 있습니다.',
      },
      {
        question: '수리 비용이 소액이면 소송해도 될까요?',
        answer:
          '<strong>300만 원 이하라면 소액사건심판, 3,000만 원 이하라면 단독판사 사건으로 비교적 빠르게 처리됩니다.</strong> 소액사건심판은 인지대가 저렴하고 절차가 간단합니다. 다만 상대방이 다투는 경우 증거 준비가 중요하므로 전문가 상담을 먼저 받으세요.',
      },
    ],
    cta: {
      text: '매매 부동산 하자 손해배상 가능성, AI가 분석해드립니다',
      link: '/chat?domain=real-estate-sale',
    },
    internalLinks: [
      { label: '부동산 매매 계약서 필수 특약 사항', href: '/guide/real-estate-sale/sale-contract-essential-clauses' },
      { label: '매매계약 해제 계약금 반환 청구 절차', href: '/guide/real-estate-sale/contract-cancellation-deposit-return' },
      { label: '신규 아파트 하자보수 청구 절차', href: '/guide/real-estate-sale/new-apartment-defect-claim' },
      { label: '매매계약 체결 시 흔히 하는 실수 7가지', href: '/guide/real-estate-sale/common-mistakes-in-sale-contract' },
      { label: '부동산 중개사 과실 손해배상 청구', href: '/guide/real-estate-sale/real-estate-agent-liability' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. real-estate-sale / common-mistakes-in-sale-contract
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-sale',
    slug: 'common-mistakes-in-sale-contract',
    keyword: '부동산 매매계약 실수 함정 주의사항',
    questionKeyword: '부동산 매매계약 시 어떤 실수를 조심해야 하나요?',
    ctaKeyword: '매매계약 실수 예방 상담',
    type: '실수함정형',
    perspective: '피해자',
    meta: {
      title: '부동산 매매계약 실수 7가지와 예방법 총정리 | 로앤가이드',
      description:
        '부동산 계약 경험이 없어 어디서 실수할지 막막하다면 실무에서 가장 자주 발생하는 실수 7가지와 예방법을 지금 확인하세요',
    },
    intro:
      '<p>인생에서 가장 큰 금액이 오가는 부동산 매매계약, 한 번의 실수로 수천만 원의 손해가 생길 수 있습니다. 하지만 많은 매수인들이 "중개사가 알아서 하겠지"라는 생각으로 계약서를 꼼꼼히 읽지 않고 서명합니다. 실무에서 반복적으로 발생하는 실수 7가지를 미리 알고 예방하면 불필요한 분쟁과 손해를 막을 수 있습니다.</p>',
    sections: [
      {
        title: '실수 1~3: 계약 전 확인 단계의 함정',
        content:
          '<p><strong style="color:#1e3a5f">계약서 서명 전 확인 단계에서 저지르는 실수가 나중에 가장 큰 피해로 이어집니다.</strong></p>\n<ul>\n<li><strong>실수 1 — 계약 당일 등기부등본을 재발급하지 않음</strong>: 계약서에 기재된 권리관계와 실제 등기부가 다를 수 있습니다. 반드시 계약 당일 오전에 등기부등본을 다시 발급하여 최신 상태를 확인하세요. 전날 밤 가압류가 등기될 수도 있습니다</li>\n<li><strong>실수 2 — 매도인 본인 여부를 확인하지 않음</strong>: 계약 당사자가 등기부상 소유자 본인인지, 위임장이 있다면 위임장의 진위를 확인해야 합니다. 신분증을 반드시 확인하고, 대리인 계약이라면 공증된 위임장을 요구하세요</li>\n<li><strong>실수 3 — 현장 확인 없이 계약함</strong>: 부동산을 실제로 방문하지 않고 사진이나 서류만 보고 계약하는 경우 법령 위반 사항(무허가 증축, 불법 개조 등)을 발견하지 못할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">체크: 계약 당일 등기부 발급 → 매도인 신분 확인 → 현장 방문 순서를 반드시 지키세요</blockquote>',
      },
      {
        title: '실수 4~5: 계약서 작성 단계의 함정',
        content:
          '<p><strong style="color:#1e3a5f">계약서 내용을 꼼꼼히 읽지 않거나 중요한 특약을 생략하면 나중에 분쟁이 발생해도 법적 근거가 없어집니다.</strong></p>\n<ul>\n<li><strong>실수 4 — 근저당 말소 조건을 특약에 넣지 않음</strong>: "잔금 지급 전까지 근저당권을 말소한다"는 특약이 없으면 잔금을 지급한 후에도 근저당이 남아 있는 사태가 발생할 수 있습니다. 잔금 동시 이행 조건으로 말소를 요구하는 특약이 필수입니다</li>\n<li><strong>실수 5 — 계약금 입금 수취인을 확인하지 않음</strong>: 계약금을 중개사 계좌로 보내면 중개사가 파산하거나 횡령할 경우 돌려받기 어렵습니다. 계약금은 반드시 매도인 본인 계좌로 직접 송금하고, 영수증을 받으세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 내 계약서의 위험 요소를 사전에 점검해드립니다.</p>\n<a href="/chat?domain=real-estate-sale" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실수 6~7: 잔금·등기 단계의 함정',
        content:
          '<p><strong style="color:#1e3a5f">잔금 지급 당일에도 실수가 발생할 수 있습니다. 마지막까지 긴장을 늦추지 마세요.</strong></p>\n<ul>\n<li><strong>실수 6 — 잔금 지급과 소유권이전등기를 동시에 처리하지 않음</strong>: 잔금을 먼저 지급하고 등기는 나중에 하기로 했다가 매도인이 잠적하거나 다른 사람에게 소유권을 넘기는 사태가 발생할 수 있습니다. 반드시 잔금 지급 → 등기서류 교부 → 등기 신청을 같은 날 처리하세요</li>\n<li><strong>실수 7 — 취득세 신고 기간을 놓침</strong>: 부동산 취득일(잔금 지급일 또는 소유권이전등기일 중 빠른 날)로부터 <strong>60일 이내</strong>에 취득세를 신고·납부해야 합니다. 기간을 놓치면 20%의 가산세가 부과됩니다</li>\n</ul>\n<p>특히 임대차가 있는 부동산은 임차인 현황(주민등록 여부, 확정일자, 전입신고일)을 잔금 전날에 다시 확인해야 합니다. 예상치 못한 임차인의 우선변제권이 남아 있으면 소유권 취득 후에도 임차인 보증금을 인수해야 합니다.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">마지막 체크: 잔금일 전날 — 등기부등본 재확인 + 임차인 현황 확인 + 취득세 신고 준비</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소유권 일부 양도와 사해행위 취소 — 매매계약 함정 사례',
        summary:
          '대법원 2024다312566 사건(대법원, 2025.04.15 선고)에서 법원은 건물 공유자가 공동으로 임대하고 임차보증금을 수령한 경우 임차보증금 반환채무는 불가분채무이며, 공유자 1인이 지분을 처분할 때 우선변제권 있는 임차보증금 상당액을 공동담보에서 제외해야 한다고 판시했습니다.',
        takeaway:
          '임차인이 있는 부동산을 매수할 때는 기존 임차인의 우선변제권 순위와 보증금 규모를 반드시 확인해야 합니다. 선순위 임차보증금이 있으면 매수 후 인수 부담이 생길 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '계약서를 공증받으면 더 안전한가요?',
        answer:
          '<strong>공증은 서명의 진정성을 확인하는 것이고, 계약 내용의 유효성과는 별개입니다.</strong> 공증을 받아도 계약서 내용이 잘못되어 있거나 중요한 특약이 빠져 있으면 분쟁이 생깁니다. 공증보다는 계약서 내용을 꼼꼼히 검토하는 것이 더 중요합니다.',
      },
      {
        question: '중개사가 제시한 계약서는 믿을 수 있나요?',
        answer:
          '<strong>중개사는 매도인과 매수인 모두의 이익을 대변할 수는 없습니다.</strong> 중개사가 작성한 계약서도 매수인에게 불리한 조항이 있을 수 있습니다. 서명 전에 직접 읽어보고 이해가 안 되는 부분은 반드시 확인하거나 법률 전문가의 검토를 받으세요.',
      },
      {
        question: '계약 해제를 원할 때 계약서 없이도 가능한가요?',
        answer:
          '<strong>계약서가 없어도 계약 해제 자체는 가능하지만 입증이 어렵습니다.</strong> 카카오톡 대화, 이체 내역, 영수증 등이 계약 성립의 증거가 됩니다. 그러나 계약금 반환이나 배액배상을 청구하려면 계약 내용을 입증해야 하므로 반드시 계약서를 작성해야 합니다.',
      },
      {
        question: '임대차가 있는 부동산을 매수할 때 임차인 동의가 필요한가요?',
        answer:
          '<strong>임차인 동의 없이도 매매는 가능하지만 임차인은 임대차 기간 동안 거주 권리를 유지합니다.</strong> 임대인 지위가 자동 승계되므로 기존 임차인의 임대차 계약 조건(만료일, 보증금)을 그대로 인수합니다. 명도 시점을 특약에 반드시 명시하세요.',
      },
      {
        question: '가계약금만 지급했는데 계약이 성립된 건가요?',
        answer:
          '<strong>상황에 따라 다릅니다.</strong> 가계약금과 함께 부동산 및 매매 대금 등 계약의 필수 사항을 합의했다면 계약이 성립됩니다. 반면 단순히 예약금 성격으로 지급했고 본계약 조건이 확정되지 않았다면 계약 미성립으로 볼 수 있습니다.',
      },
    ],
    cta: {
      text: '내 매매계약 위험 요소, AI가 미리 점검해드립니다',
      link: '/chat?domain=real-estate-sale',
    },
    internalLinks: [
      { label: '부동산 매매 계약서 필수 특약 사항', href: '/guide/real-estate-sale/sale-contract-essential-clauses' },
      { label: '매매계약 체결 전 등기부등본 확인 체크리스트', href: '/guide/real-estate-sale/registry-check-before-contract' },
      { label: '매매계약 해제 계약금 반환 청구 절차', href: '/guide/real-estate-sale/contract-cancellation-deposit-return' },
      { label: '매매 부동산 하자 발견 시 손해배상 청구', href: '/guide/real-estate-sale/defect-damage-claim' },
      { label: '부동산 중개사 과실 손해배상 청구', href: '/guide/real-estate-sale/real-estate-agent-liability' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. real-estate-sale / registry-check-before-contract
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-sale',
    slug: 'registry-check-before-contract',
    keyword: '매매계약 전 등기부등본 확인 방법',
    questionKeyword: '부동산 매매계약 전 등기부등본 어떻게 확인하나요?',
    ctaKeyword: '등기부등본 확인 법률 상담',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '매매계약 전 등기부등본 확인 체크리스트 8가지 | 로앤가이드',
      description:
        '계약 전에 등기부등본 무엇을 어떻게 확인해야 할지 막막하다면 항목별 8가지 확인 체크리스트와 위험 신호를 지금 확인하세요',
    },
    intro:
      '<p>부동산 계약서 서명을 앞두고 등기부등본을 받아봤는데 무슨 내용인지 하나도 모르겠습니다. 근저당권, 가압류, 지상권, 지역권 같은 용어들이 낯설고, 어디에 빨간 불이 들어오는 건지도 모릅니다. 등기부등본을 제대로 읽지 못하고 계약했다가 이미 담보권이 설정된 부동산을 고스란히 인수한 사례가 매년 발생합니다.</p>',
    sections: [
      {
        title: '등기부등본 구조와 읽는 순서',
        content:
          '<p><strong style="color:#1e3a5f">등기부등본은 표제부, 갑구, 을구 세 부분으로 구성되며, 각 부분에서 확인해야 할 내용이 다릅니다.</strong></p>\n<ul>\n<li><strong>표제부</strong>: 부동산의 소재지, 면적, 건물 구조 등 물리적 현황을 기재합니다. 실제 현장 상태와 일치하는지 확인합니다</li>\n<li><strong>갑구</strong>: 소유권 관계를 기재합니다. 현재 소유자가 누구인지, 소유권 이전 내역, 가압류·압류·경매 개시 결정 등 소유권에 영향을 주는 사항이 기재됩니다</li>\n<li><strong>을구</strong>: 소유권 이외의 권리 관계를 기재합니다. 근저당권, 전세권, 임차권, 지상권, 지역권 등이 여기에 기재됩니다</li>\n</ul>\n<p>등기부등본은 <strong>대법원 인터넷등기소(www.iros.go.kr)</strong>에서 700원에 열람할 수 있고, 1,000원에 발급받을 수 있습니다. 계약 당일 오전에 반드시 재확인하세요.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">기본 순서: 표제부(현황 일치 여부) → 갑구(소유권·압류 확인) → 을구(담보권 확인)</blockquote>',
      },
      {
        title: '갑구 확인 4가지 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">갑구에서 반드시 확인해야 할 4가지 위험 신호입니다.</strong></p>\n<ul>\n<li><strong>체크 1 — 소유자 일치 여부</strong>: 등기부상 소유자와 계약 상대방이 동일인인지 확인. 대리인 계약이라면 공증된 위임장을 요구하세요</li>\n<li><strong>체크 2 — 가압류·압류 여부</strong>: 가압류나 압류가 있으면 소유권 이전 후에도 채권자가 경매를 신청할 수 있습니다. 잔금일 전에 해제 조건을 특약에 명시하세요</li>\n<li><strong>체크 3 — 경매 개시 결정 여부</strong>: 경매 개시 결정이 등기되어 있다면 이미 경매 절차가 진행 중입니다. 이 상태에서 매매계약을 체결하면 매우 위험합니다</li>\n<li><strong>체크 4 — 가등기 여부</strong>: 담보 목적 가등기나 청구권 보전 가등기가 있으면 잔금 지급 후 소유권을 빼앗길 수 있습니다. 반드시 말소 조건을 특약에 포함하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">등기부 내용을 이해하기 어렵다면 AI가 위험 신호를 분석하고 대응 전략을 안내해드립니다.</p>\n<a href="/chat?domain=real-estate-sale" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '을구 확인 4가지 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">을구에서 반드시 확인해야 할 4가지 사항입니다. 을구가 비어 있으면 깨끗한 부동산입니다.</strong></p>\n<ul>\n<li><strong>체크 5 — 근저당권 채권최고액</strong>: 근저당권의 채권최고액이 매매대금보다 크면 위험합니다. 잔금 지급 전 근저당권이 말소되는 조건을 반드시 특약에 명시하세요. 채권최고액은 통상 실제 대출금의 120~130%입니다</li>\n<li><strong>체크 6 — 전세권·임차권 등기 여부</strong>: 전세권이 등기되어 있으면 임차인이 경매에서 우선변제권을 가집니다. 임차인 현황을 파악하고 명도 조건을 특약에 포함하세요</li>\n<li><strong>체크 7 — 지상권·지역권 여부</strong>: 지상권은 타인의 건물이나 공작물이 해당 토지에 존재한다는 뜻입니다. 이러한 권리가 있으면 토지를 자유롭게 사용하기 어렵습니다</li>\n<li><strong>체크 8 — 신탁등기 여부</strong>: 신탁부동산은 신탁회사의 동의 없이 처분하면 무효가 될 수 있습니다. 신탁원부를 확인하고 신탁회사의 동의서를 받아야 합니다</li>\n</ul>\n<p>등기부등본 확인 후에도 건축물대장(구조·용도·면적 일치 여부), 토지이용계획확인서(개발 제한 여부)도 반드시 확인하세요.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">최종 확인: 등기부등본 + 건축물대장 + 토지이용계획확인서 3종 세트를 계약 전에 확보하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소유권이전등기청구권 양도 시 대항력 요건',
        summary:
          '대법원 2024다248290 사건(대법원, 2025.03.13 선고)에서 법원은 부동산 매매로 인한 소유권이전등기청구권을 양도하는 경우, 채무자(매도인)에 대한 통지만으로는 대항력이 생기지 않으며, 채무자가 승낙해야만 대항력이 인정된다고 판시했습니다.',
        takeaway:
          '분양권이나 소유권이전등기청구권을 전매(재양도)하는 경우 매도인의 승낙서를 반드시 받아야 합니다. 단순히 양도 통지만 한 경우 제3자에게 대항력이 없어 소유권 취득이 어렵게 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '등기부등본을 언제 발급받아야 가장 최신 정보를 확인할 수 있나요?',
        answer:
          '<strong>계약 직전, 중도금 지급 전, 잔금 지급 당일 오전, 최소 3번 확인하세요.</strong> 부동산 권리 변동은 등기가 완료된 순간부터 효력이 발생합니다. 전날 밤까지 변동이 없었어도 잔금 지급 당일 아침에 가압류가 들어올 수 있으므로 당일 재확인이 필수입니다.',
      },
      {
        question: '등기부등본에 없는 권리(유치권, 법정지상권 등)도 있나요?',
        answer:
          '<strong>네, 등기부등본에 나타나지 않는 위험 요소가 있습니다.</strong> 유치권은 등기 없이도 성립하며, 법정지상권도 등기 없이 발생할 수 있습니다. 건물이 있는 토지를 매수할 때는 건물 소유자와 토지 소유자가 동일인인지 반드시 확인하세요.',
      },
      {
        question: '근저당권이 있어도 잔금 전에 말소되면 괜찮은가요?',
        answer:
          '<strong>잔금 지급 전 말소 조건을 특약에 명시하고, 잔금 당일 말소 확인 후 지급하면 됩니다.</strong> 잔금 지급 시 법무사와 동행하여 근저당권 말소 서류 교부와 잔금 지급을 동시에 처리하는 것이 가장 안전합니다.',
      },
      {
        question: '토지와 건물 등기부를 별도로 확인해야 하나요?',
        answer:
          '<strong>네, 토지와 건물은 별개의 등기부가 있습니다.</strong> 아파트는 집합건물 등기부 1개로 통합되어 있지만, 일반 단독주택이나 상가는 토지등기부와 건물등기부를 각각 확인해야 합니다. 토지에 권리가 있어도 건물 등기부에는 나오지 않습니다.',
      },
      {
        question: '등기부등본에 이상이 없어도 사기 피해를 당할 수 있나요?',
        answer:
          '<strong>등기부가 깨끗해도 사기 위험은 있습니다.</strong> 타인 명의 서류를 도용하거나, 위조 신분증을 사용하는 부동산 사기가 있습니다. 중요한 계약은 반드시 법무사나 변호사를 동행하여 소유자 본인 확인과 등기 절차를 동시에 처리하는 것이 가장 안전합니다.',
      },
    ],
    cta: {
      text: '등기부등본 위험 신호, AI가 분석해드립니다',
      link: '/chat?domain=real-estate-sale',
    },
    internalLinks: [
      { label: '부동산 매매 계약서 필수 특약 사항', href: '/guide/real-estate-sale/sale-contract-essential-clauses' },
      { label: '매매계약 체결 시 흔히 하는 실수 7가지', href: '/guide/real-estate-sale/common-mistakes-in-sale-contract' },
      { label: '매매계약 해제 계약금 반환 청구 절차', href: '/guide/real-estate-sale/contract-cancellation-deposit-return' },
      { label: '매도인 근저당권 말소 절차와 잔금 처리', href: '/guide/real-estate-sale/seller-lien-mortgage-clearing' },
      { label: '부동산 사기 예방 체크리스트', href: '/guide/real-estate-sale/real-estate-fraud-prevention' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. real-estate-auction / auction-bidding-procedure
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'auction-bidding-procedure',
    keyword: '부동산 경매 입찰 절차 준비 방법',
    questionKeyword: '부동산 경매 입찰은 어떻게 준비하고 어떤 절차로 진행되나요?',
    ctaKeyword: '부동산 경매 입찰 절차 상담',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '부동산 경매 입찰 4단계 절차와 준비 체크리스트 | 로앤가이드',
      description:
        '부동산 경매에 처음 참여하려는데 입찰 절차가 낯설고 어렵다면 4단계 절차와 보증금·배당 주의사항을 지금 확인하세요',
    },
    intro:
      '<p>경매로 아파트를 싸게 사고 싶어 인터넷으로 물건을 검색했는데 막상 어디서부터 시작해야 할지 막막합니다. 입찰 보증금은 얼마를 준비해야 하는지, 낙찰 후 등기는 어떻게 하는지, 임차인이 있으면 어떻게 처리하는지 알 수가 없습니다. 경매는 준비 없이 입찰했다가 큰 손해를 볼 수 있는 영역이므로, 절차를 정확히 이해하고 참여해야 합니다.</p>',
    timelineSteps: [
      '1단계: 물건 분석 및 권리 분석',
      '2단계: 입찰 준비 (보증금·서류)',
      '3단계: 입찰 및 낙찰',
      '4단계: 잔금 납부 및 소유권이전',
    ],
    sections: [
      {
        title: '1단계: 물건 분석 — 권리 분석이 가장 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">경매에서 가장 중요한 것은 낙찰 가격이 아니라 인수해야 할 권리와 실제 취득 비용의 정확한 계산입니다.</strong></p>\n<ul>\n<li><strong>등기부 권리 분석</strong>: 말소기준권리(최선순위 저당권·담보가등기·경매 개시 결정 등)보다 앞선 권리는 낙찰 후에도 인수됩니다. 전세권·임차권이 말소기준권리보다 앞에 있다면 보증금을 인수해야 합니다</li>\n<li><strong>임차인 현황 확인</strong>: 법원 매각물건명세서, 현황조사서, 감정평가서를 반드시 열람하세요. 전입신고+확정일자+실거주 임차인은 우선변제권을 가지며, 소액임차인은 최우선변제권으로 낙찰대금에서 먼저 배당받습니다</li>\n<li><strong>유치권 확인</strong>: 현황조사서에 유치권 신고가 있으면 낙찰 후에도 유치권이 소멸하지 않을 수 있습니다. 공사대금 유치권은 반드시 전문가 검토가 필요합니다</li>\n<li><strong>입찰 예상가 산정</strong>: 시세 - 인수 부담(선순위 임차보증금, 유치권 등) - 수리비 - 취득세 = 실질 취득 비용</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 싸게 낙찰받아도 인수 부담이 크면 손해입니다. 반드시 권리 분석 후 입찰가를 결정하세요</blockquote>',
      },
      {
        title: '2~3단계: 입찰 준비와 현장 입찰 절차',
        content:
          '<p><strong style="color:#1e3a5f">법원 경매 입찰은 지정된 날짜에 법원 경매법정에 직접 출석하여 진행합니다.</strong></p>\n<ul>\n<li><strong>입찰 보증금 준비</strong>: 최저 입찰가의 10%를 법원보관금 납부서로 납부해야 합니다. 현금 또는 자기앞수표로 준비하며, 패찰 시 즉시 반환됩니다</li>\n<li><strong>입찰서 작성</strong>: 법원 비치 입찰표에 사건번호, 물건번호, 입찰가액을 기재합니다. 금액은 숫자와 한자(금액)를 모두 기재하고, 한 글자 오기로도 무효 처리될 수 있습니다</li>\n<li><strong>입찰봉투 제출</strong>: 입찰 마감 시간 전에 법원 집행관실에 봉투를 제출합니다. 마감 시간을 1초라도 넘기면 접수가 거부됩니다</li>\n<li><strong>개찰 및 최고가 결정</strong>: 마감 후 공개 개찰하여 최고가 매수신고인을 낙찰자로 결정합니다. 차순위 매수신고인도 지정됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 경매 물건의 권리 분석과 인수 부담을 분석해드립니다.</p>\n<a href="/chat?domain=real-estate-auction" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계: 잔금 납부, 소유권이전 및 배당 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">낙찰 후 대금 납부 기한을 지키지 못하면 보증금을 몰취당합니다. 배당 절차에서도 내 권리를 적극적으로 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>대금 납부 기한</strong>: 낙찰 후 통상 4~8주 내에 법원이 정한 기한까지 잔금을 납부해야 합니다. 기한 내 미납 시 보증금 10%를 몰수당하고 재매각이 진행됩니다</li>\n<li><strong>소유권 취득</strong>: 대금을 완납하면 법원이 소유권이전등기 촉탁을 해줍니다. 별도의 등기 신청 없이 법원이 직권으로 처리합니다</li>\n<li><strong>배당 이의</strong>: 배당기일에 배당표가 공개되면, 배당 순위나 금액에 이의가 있으면 당일 이의를 제기해야 합니다. 기일에 출석하지 않거나 이의를 제기하지 않으면 배당표가 확정됩니다</li>\n<li><strong>취득세 납부</strong>: 소유권 취득 후 60일 이내에 취득세를 신고·납부해야 합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">기억하세요: 잔금 납부 기한 준수 + 배당기일 출석 + 취득세 60일 이내 신고</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — HUG 대위변제 후 경매 배당에서 우선변제권 행사',
        summary:
          '서울북부지법 2025가단107133 사건(서울북부지방법원, 2026.01.23 선고)에서 법원은 주택도시보증공사(HUG)가 임차인의 보증금을 대신 지급(대위변제)한 경우, HUG는 채권양도 통지를 신 소유자에게 별도로 하지 않아도 민법 제481조에 따라 임차인의 우선변제권을 행사할 수 있다고 판시했습니다.',
        takeaway:
          '경매 입찰 전 HUG가 대위변제한 임차인이 있는지 확인해야 합니다. HUG가 대위변제를 완료한 경우 임차인의 배당순위가 그대로 HUG에 승계되어 낙찰자의 부담이 될 수 있습니다. 현황조사서와 매각물건명세서를 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '경매 물건을 직접 보지 않고 입찰해도 되나요?',
        answer:
          '<strong>권리는 분석할 수 있어도 실물 상태는 현장에서만 알 수 있습니다.</strong> 감정평가서는 수개월 전 평가 결과이므로 현재 상태와 다를 수 있습니다. 반드시 현장 방문 후 입찰가를 결정하세요. 내부 확인이 어려우면 외관·공용부분만이라도 확인하세요.',
      },
      {
        question: '경매 입찰 보증금은 낙찰 후 어떻게 처리되나요?',
        answer:
          '<strong>낙찰자의 보증금은 매각대금의 일부로 충당됩니다.</strong> 예를 들어 3억 원에 낙찰되고 보증금이 3,000만 원이라면 잔금 2억 7,000만 원만 납부하면 됩니다. 패찰자는 입찰 당일 즉시 반환받습니다.',
      },
      {
        question: '경매로 취득한 부동산에도 취득세가 부과되나요?',
        answer:
          '<strong>네, 경매 낙찰도 취득세 과세 대상입니다.</strong> 취득세율은 일반 매매와 동일하게 주택은 1~3%(면적·취득가액·1주택 여부에 따라 다름), 상업용 부동산은 4.6%입니다. 대금 완납 후 60일 이내에 신고해야 합니다.',
      },
      {
        question: '낙찰 후 마음이 바뀌면 어떻게 되나요?',
        answer:
          '<strong>대금 납부 기한까지 잔금을 납부하지 않으면 보증금(낙찰가의 10%)을 몰수당합니다.</strong> 또한 차순위 매수신고인이 있으면 차순위자가 낙찰받고, 없으면 재매각이 진행됩니다. 신중하게 결정한 후 입찰하세요.',
      },
      {
        question: '경매 취하(취소)는 언제 어떻게 되나요?',
        answer:
          '<strong>채권자가 경매 신청을 취하하거나 채무를 변제받으면 경매 절차가 취소될 수 있습니다.</strong> 입찰 전에 취하되면 아무런 영향이 없지만, 낙찰 후 대금 납부 전에 취하되면 절차가 복잡해집니다. 이 경우 낙찰자는 보증금 반환을 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '경매 물건 권리 분석과 입찰 전략, AI가 분석해드립니다',
      link: '/chat?domain=real-estate-auction',
    },
    internalLinks: [
      { label: '경매 낙찰 후 명도 소송 절차', href: '/guide/real-estate-auction/eviction-after-winning-bid' },
      { label: '경매 유치권 위험 분석 체크리스트', href: '/guide/real-estate-auction/auction-lien-risk-analysis' },
      { label: '경매 입찰 자금 조달과 대출 준비', href: '/guide/real-estate-auction/auction-loan-preparation' },
      { label: '경매 배당 잉여금 분배 절차', href: '/guide/real-estate-auction/auction-surplus-distribution' },
      { label: '경매 낙찰 후 점유자가 퇴거를 거부할 때', href: '/guide/real-estate-auction/occupant-refuses-to-leave' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. real-estate-auction / eviction-after-winning-bid
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'eviction-after-winning-bid',
    keyword: '경매 낙찰 후 명도 소송 절차',
    questionKeyword: '경매 낙찰 후 점유자가 나가지 않으면 어떻게 하나요?',
    ctaKeyword: '경매 낙찰 명도 소송 상담',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '경매 낙찰 후 명도 소송 4단계 절차와 전략 | 로앤가이드',
      description:
        '경매로 낙찰받은 부동산에 점유자가 버티고 있어 인도명령이나 명도 소송을 고민하고 있다면 단계별 절차와 선택 기준을 지금 확인하세요',
    },
    intro:
      '<p>경매로 아파트를 낙찰받아 잔금까지 냈는데, 기존 세입자가 "갈 곳이 없다"며 나가지 않겠다고 버팁니다. 경찰에 신고해도 "민사 문제"라며 거절당했고, 직접 내보낼 수도 없습니다. 법적 절차를 밟아야 한다는 건 알겠는데 인도명령과 명도소송의 차이, 강제집행 절차를 어디서부터 시작해야 할지 막막합니다.</p>',
    timelineSteps: [
      '1단계: 점유자 유형 파악 및 인도명령·소송 선택',
      '2단계: 인도명령 신청 또는 명도소송 제기',
      '3단계: 결정(판결) 확보',
      '4단계: 강제집행 신청 및 인도',
    ],
    sections: [
      {
        title: '1단계: 인도명령과 명도소송의 차이',
        content:
          '<p><strong style="color:#1e3a5f">낙찰 후 점유자를 내보내는 방법은 인도명령과 명도소송 두 가지입니다. 점유자 유형에 따라 적합한 방법이 다릅니다.</strong></p>\n<ul>\n<li><strong>인도명령(민사집행법 제136조)</strong>: 대금 납부 후 6개월 이내에 법원에 신청합니다. 채무자(전 소유자), 경매절차에서 보호받지 못한 점유자에게 적용됩니다. 결정까지 보통 1~2주로 빠르고 비용이 저렴합니다</li>\n<li><strong>명도소송</strong>: 인도명령 대상이 아닌 점유자(보호받는 임차인, 낙찰 후 새로 계약한 점유자 등)에게 적용합니다. 판결 확정까지 수개월이 걸리고 비용이 많이 들지만, 모든 유형의 점유자에게 사용할 수 있습니다</li>\n<li><strong>선택 기준</strong>: 대금 납부 후 6개월 이내 + 채무자 또는 무권한 점유자 → 인도명령 우선. 그 외의 경우 → 명도소송</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">빠른 해결: 6개월 이내라면 인도명령 먼저 → 거부 시 강제집행 신청으로 신속 처리</blockquote>',
      },
      {
        title: '2~3단계: 인도명령 신청과 명도소송 진행',
        content:
          '<p><strong style="color:#1e3a5f">인도명령은 낙찰 법원에 신청하고, 명도소송은 민사법원에 소장을 제출합니다.</strong></p>\n<ul>\n<li><strong>인도명령 신청 서류</strong>: 부동산 인도명령신청서, 매각대금 완납증명서, 등기사항증명서, 현황조사서 사본</li>\n<li><strong>인도명령 결정</strong>: 법원이 신청을 받으면 점유자에게 심문 없이 인도명령 결정을 내릴 수 있습니다. 점유자는 결정에 대해 즉시항고할 수 있지만, 집행 정지 효력이 없습니다</li>\n<li><strong>명도소송 절차</strong>: 소장 제출 → 변론기일 진행(수 회) → 판결 선고. 점유자가 다투면 6개월~1년이 소요됩니다</li>\n<li><strong>임차인 협의</strong>: 명도 소송과 별개로, 보증금을 받지 못한 임차인과 이사비 지원 등으로 합의하면 훨씬 빠르게 해결될 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 점유자 유형별 최적의 명도 전략을 분석해드립니다.</p>\n<a href="/chat?domain=real-estate-auction" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계: 강제집행과 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">인도명령 결정이나 명도판결이 확정되면 법원 집행관을 통해 강제집행을 신청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>강제집행 신청</strong>: 집행력 있는 정본(결정 또는 판결)을 받아 집행관 사무소에 강제집행을 신청합니다. 집행비용(인부비, 창고비 등)을 예납해야 합니다</li>\n<li><strong>집행 예고</strong>: 집행관이 집행 예정일을 점유자에게 통지합니다. 이 시점에서 점유자가 자진 퇴거하는 경우가 많습니다</li>\n<li><strong>강제집행 실시</strong>: 예정일에 집행관, 인부, 경우에 따라 경찰이 동행하여 점유자를 퇴거시키고 이삿짐을 임시 보관 창고로 옮깁니다</li>\n<li><strong>소멸시효 주의</strong>: 배당받지 못한 임차인이 있다면 임차보증금 반환채권의 소멸시효(통상 10년)가 진행 중일 수 있습니다. 대법원 2023다240299(대법원, 2025.07.24 선고)에서는 시효 완성 후 채무 승인만으로는 시효이익 포기를 추정할 수 없다고 판시한 바 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">비용 예측: 강제집행 비용은 이삿짐 규모에 따라 50~300만 원, 창고 보관비 별도 발생</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 완성 후 채무 승인 시 시효이익 포기 추정 불가',
        summary:
          '대법원 2023다240299 사건(대법원, 2025.07.24 선고)에서 법원은 채무자가 소멸시효 완성 후 채무를 승인(일부 변제 등)한 경우, 종전 판례와 달리 시효완성 사실을 알고 시효이익을 포기한 것으로 추정할 수 없다고 판시했습니다. 채권자가 시효이익 포기를 주장하려면 채무자가 시효완성을 알면서 포기 의사로 승인한 것임을 구체적으로 입증해야 합니다.',
        takeaway:
          '경매 낙찰 후 배당을 받지 못한 임차인이 시효가 지난 보증금 반환을 청구하는 경우, 임차인의 이전 행동(일부 합의, 퇴거 요청 등)을 시효이익 포기로 주장하기가 어려워졌습니다. 명도 협의 시 이 점을 고려하고, 채권·채무 관계를 명확히 정리해야 합니다.',
      },
    ],
    faq: [
      {
        question: '인도명령 신청 기한인 6개월을 놓쳤으면 어떻게 하나요?',
        answer:
          '<strong>인도명령 대신 명도소송을 제기해야 합니다.</strong> 6개월 기한을 넘긴 경우 인도명령을 사용할 수 없으므로 민사법원에 소장을 제출하고 명도 판결을 받아야 합니다. 기간은 더 걸리지만 결과는 동일합니다.',
      },
      {
        question: '보증금을 못 받은 임차인은 반드시 명도 소송으로만 내보낼 수 있나요?',
        answer:
          '<strong>소송 없이 합의로 해결하는 것이 모두에게 유리합니다.</strong> 보증금을 받지 못한 임차인에게 이사비 일부(통상 100~300만 원)를 지급하고 명도 합의서를 작성하면 빠르게 해결됩니다. 소송 기간과 비용을 고려하면 합의가 낙찰자에게도 이득입니다.',
      },
      {
        question: '강제집행 중 점유자가 폭력을 행사하면 어떻게 되나요?',
        answer:
          '<strong>집행관이 경찰 동행을 요청할 수 있으며, 폭력 행위는 공무집행방해죄 등이 성립합니다.</strong> 강제집행에 방해하거나 폭력을 행사하면 형사 고소가 가능합니다. 집행 전에 집행관과 경찰 동행을 미리 협의하는 것이 좋습니다.',
      },
      {
        question: '강제집행 후 점유자 짐은 어떻게 처리하나요?',
        answer:
          '<strong>집행관이 창고에 임시 보관하고, 일정 기간 후 동산 경매를 통해 처리합니다.</strong> 이삿짐 보관 비용은 낙찰자가 먼저 부담하지만, 나중에 점유자에게 청구할 수 있습니다. 비용 청구가 어려운 경우도 많으므로 합의 퇴거를 우선적으로 시도하세요.',
      },
      {
        question: '전 소유자가 부동산을 다시 점유하면 어떻게 하나요?',
        answer:
          '<strong>낙찰자는 소유권자로서 부동산점유방해금지 가처분 신청을 할 수 있습니다.</strong> 강제집행 완료 후 전 소유자가 다시 들어오면 불법 점유에 해당합니다. 즉시 점유방해배제 가처분을 신청하거나 형사상 주거침입죄로 고소할 수 있습니다.',
      },
    ],
    cta: {
      text: '경매 낙찰 후 명도 전략, AI가 단계별로 안내해드립니다',
      link: '/chat?domain=real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 입찰 절차와 준비 방법', href: '/guide/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 낙찰 후 점유자가 퇴거를 거부할 때', href: '/guide/real-estate-auction/occupant-refuses-to-leave' },
      { label: '경매 유치권 위험 분석 체크리스트', href: '/guide/real-estate-auction/auction-lien-risk-analysis' },
      { label: '경매 배당 잉여금 분배 절차', href: '/guide/real-estate-auction/auction-surplus-distribution' },
      { label: '경매 취소 및 보증금 반환 절차', href: '/guide/real-estate-auction/auction-cancellation-deposit-recovery' },
    ],
  },
];
