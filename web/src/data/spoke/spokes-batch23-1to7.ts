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
  // 7. real-estate-auction / eviction-after-winning-bid
];
