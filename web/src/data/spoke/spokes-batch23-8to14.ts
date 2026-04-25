import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 8. 이 페이지는 [경매로 낙찰받은 부동산에 세입자가 있는 매수인]의 [세입자 대항력 판단과 명도 절차를 모르는 상황]에서 [대항력 확인 3단계와 인도명령 절차 안내]를 돕는 페이지다.
// 9. 이 페이지는 [경매 입찰을 준비 중인 초보 입찰자]의 [입찰 전 어떤 것을 확인해야 하는지 모르는 상황]에서 [권리분석·물건 상태·예산 계획 체크리스트 안내]를 돕는 페이지다.
// 10. 이 페이지는 [경매 시장에 처음 도전하는 초보자]의 [돌이킬 수 없는 실수를 저지를까 걱정하는 상황]에서 [경매 초보자가 반복하는 실수 5가지와 예방법 안내]를 돕는 페이지다.
// 11. 이 페이지는 [윗집 층간소음이 한계에 달한 피해 세대]의 [법적 대응 방법을 모르는 상황]에서 [소음 증거 수집부터 손해배상 청구까지 4단계 절차 안내]를 돕는 페이지다.
// 12. 이 페이지는 [층간소음 피해를 신고하려는 세대]의 [신고 절차와 조정까지의 흐름을 모르는 상황]에서 [신고 접수부터 조정 결과까지 5단계 절차 타임라인 안내]를 돕는 페이지다.
// 13. 이 페이지는 [층간소음 항의를 하다가 오히려 고소를 당한 세대]의 [고소에 어떻게 대응해야 하는지 모르는 상황]에서 [정당한 항의와 위법 행위의 경계 및 대응 전략 안내]를 돕는 페이지다.
// 14. 이 페이지는 [층간소음 피해가 처음인 세대]의 [어떤 기관에 어떤 순서로 도움을 요청해야 하는지 모르는 상황]에서 [첫 번째 행동부터 법적 대응까지 단계별 길잡이 안내]를 돕는 페이지다.

export const spokesBatch23_8to14: SpokePage[] = [
  // ───────────────────────────────────────────
  // 8. real-estate-auction / auction-property-with-tenant
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'auction-property-with-tenant',
    keyword: '경매 세입자 있는 물건 대항력 명도',
    questionKeyword: '경매로 낙찰받은 집에 세입자가 있으면 어떻게 하나요?',
    ctaKeyword: '경매 세입자 명도 상담',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '경매 세입자 있는 물건 대항력·명도 3단계 | 로앤가이드',
      description:
        '경매로 낙찰받은 집에 세입자가 버티고 있어서 어떻게 해야 할지 막막하다면 대항력 판단과 명도 절차를 지금 확인하세요.',
    },
    intro:
      '<p>드디어 경매 낙찰을 받았는데, 기존 세입자가 집을 비워주지 않고 있습니다. 세입자가 "나는 대항력이 있다"며 보증금을 돌려받기 전까지는 나가지 않겠다고 합니다. 낙찰대금도 냈는데 집 열쇠도 못 받고 있는 상황입니다. 이 세입자를 언제, 어떻게 내보낼 수 있는지 정확히 알아야 합니다.</p>',
    sections: [
      {
        title: '1단계: 세입자 대항력 유무 판단하기',
        content:
          '<p><strong style="color:#1e3a5f">대항력이란 주택임대차보호법 제3조에 따라 임차인이 제3자(새 집주인 포함)에게 임차권을 주장할 수 있는 권리입니다. 대항력 유무에 따라 보증금 부담 여부가 결정됩니다</strong></p>\n<ul>\n<li><strong>대항력 발생 요건</strong> — 주택을 인도받고 전입신고를 마쳐야 합니다. 전입신고 익일 오전 0시부터 대항력이 발생합니다. 즉 전입일이 아니라 그 다음날 0시부터입니다</li>\n<li><strong>선순위 대항력</strong> — 세입자의 대항력 발생일이 근저당권 설정일보다 빠르면 낙찰자는 보증금을 승계해야 합니다. 이 경우 세입자를 내보내려면 보증금을 반환해야 합니다</li>\n<li><strong>후순위 대항력</strong> — 세입자의 전입일이 근저당권보다 늦으면 낙찰자는 보증금 승계 의무가 없습니다. 다만 세입자가 배당에서 보증금을 전액 받았는지 확인해야 합니다</li>\n<li><strong>확인 방법</strong> — 등기부등본(을구)에서 근저당권 설정일 확인, 주민등록 초본·확정일자 현황으로 세입자 전입일 확인, 법원 경매 기록의 권리신고서·임차인 현황조사서 검토</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항력 발생일 vs 근저당권 설정일 — 선후 비교가 명도 가능 여부를 결정합니다</blockquote>',
      },
      {
        title: '2단계: 배당 여부에 따른 세입자 처리 방법',
        content:
          '<p><strong style="color:#1e3a5f">세입자가 경매 배당 절차에서 보증금을 전액 받았는지 여부가 명도 가능 시점을 결정합니다</strong></p>\n<ul>\n<li><strong>배당금 전액 수령 확인</strong> — 배당표를 열람하여 세입자가 배당금을 전액 받았다면, 낙찰자는 잔금 납부 후 바로 인도명령을 신청할 수 있습니다</li>\n<li><strong>배당금 일부 수령(일부 대항력)</strong> — 확정일자를 갖춘 세입자가 배당에서 일부만 받은 경우, 받지 못한 잔여 보증금은 낙찰자가 인수할 수 있습니다. 입찰 전 철저한 권리분석이 필수입니다</li>\n<li><strong>소액임차인(최우선변제권)</strong> — 지역별 소액임차인 기준(서울 1억 6,500만 원 이하, 2024년 기준) 충족 시 최우선 순위로 최대 5,500만 원까지 배당받을 수 있습니다. 이 보증금은 낙찰자가 인수하지 않습니다</li>\n<li><strong>배당 참여 안 한 세입자</strong> — 배당 신청을 하지 않은 후순위 세입자는 배당금을 받지 못하므로 낙찰자가 보증금을 인수하지 않아도 되지만, 직접 반환 협상이 필요할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=real-estate-auction" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 인도명령 신청과 강제집행',
        content:
          '<p><strong style="color:#1e3a5f">주택·상가건물임대차보호법 및 민사집행법에 따라 낙찰자는 잔금 납부 후 6개월 이내에 인도명령을 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>인도명령 신청</strong> — 잔금 납부 후 6개월 이내에 경매 담당 법원에 인도명령 신청서를 제출합니다. 신청 비용은 소액(인지대 약 1,000원)이며, 법원이 결정문을 보내줍니다</li>\n<li><strong>인도명령 결정</strong> — 법원은 세입자에게 심문 기회를 주고, 특별한 사정이 없으면 2~4주 내에 인도명령 결정을 내립니다. 대항력 있는 세입자에게는 인도명령이 기각될 수 있습니다</li>\n<li><strong>강제집행 신청</strong> — 인도명령 결정 후 세입자가 자진 퇴거하지 않으면 법원 집행관에게 강제집행을 신청합니다. 집행 비용(이사비 포함 보통 100~300만 원)이 발생합니다</li>\n<li><strong>협의 명도</strong> — 법적 절차 전에 이사비(통상 100~200만 원)를 지급하는 조건으로 자진 퇴거를 협의하는 방법도 있습니다. 시간과 비용을 절약할 수 있습니다</li>\n</ul>\n<p>인도명령은 낙찰자에게만 인정되며, 낙찰자로부터 집을 매수한 제3자는 인도명령을 신청할 수 없어 별도의 명도소송이 필요합니다. 잔금 납부 후 6개월을 넘기지 않도록 주의하세요.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">절차: 잔금 납부 → 인도명령 신청(6개월 이내) → 결정 수령 → 강제집행 또는 협의 퇴거</blockquote>',
      },
      {
        title: '세입자 유형별 주의사항 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">낙찰 물건의 세입자 유형에 따라 처리 방법과 위험 수준이 달라집니다. 입찰 전 가능한 한 유형별로 리스크를 파악하세요</strong></p>\n<ul>\n<li><strong>선순위 + 미배당 세입자</strong> — 가장 위험한 유형. 낙찰자가 보증금 전액 인수. 입찰가에서 보증금을 빼고 수익성 계산해야 합니다. 보증금 규모에 따라 손해 볼 수 있습니다</li>\n<li><strong>위장 세입자(채무자 가족)</strong> — 채무자의 가족이 허위로 전입신고한 경우. 법원 현황조사서와 임대차 계약서를 꼼꼼히 확인하세요. 실제 보증금 이전이 없는 경우 대항력이 없습니다</li>\n<li><strong>상가 임차인</strong> — 상가건물임대차보호법의 보호를 받으며, 환산보증금 범위와 대항력 발생 시점이 주택 임차인과 다릅니다. 사업자등록 일자를 가능한 한 확인하세요</li>\n<li><strong>불법 점유자(임차인 아님)</strong> — 인도명령 외에도 명도소송을 제기할 수 있습니다. 점유 이전의 금지 가처분을 먼저 신청하는 것이 안전합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">체크: 선순위 여부 확인 → 보증금 배당 여부 확인 → 실제 거주 여부 현장 확인 → 입찰가 산정</blockquote>',
      },
    ],
    cases: [
      {
        title: '경매 배당 절차 세입자 권리승계 — 대법원 2024다298448 판결',
        summary:
          '대법원 2024다298448 사건(대법원, 2025.11.13 선고)에서 법원은 파산채권자의 배당금지급청구권을 전부받은 채권자가 채권조사확정재판에 대한 이의의 소를 제기한 사건에서, 파산채권자의 배당금지급청구권을 압류·전부받은 자는 파산채권 자체를 승계한 것이 아니라고 판시했습니다. 이는 경매 절차에서 세입자의 임차보증금 반환채권 양수·전부와 배당금 수령 권리의 귀속 관계가 엄격히 구분됨을 보여주는 사례입니다.',
        takeaway:
          '경매 낙찰 후 세입자의 보증금 반환채권이 제3자에게 양도·전부된 경우, 낙찰자는 그 권리관계를 정확히 파악해야 합니다. 배당 절차에서 누가 세입자의 권리를 적법하게 승계했는지를 법원 기록으로 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '세입자 대항력이 있으면 낙찰자는 원칙적으로 보증금을 인수해야 하나요?',
        answer:
          '<strong>대항력이 있더라도 세입자가 경매 배당에서 보증금 전액을 수령했다면 낙찰자가 인수할 의무가 없습니다.</strong> 배당표와 배당금 수령 여부를 확인하여, 세입자가 이미 배당을 받았다면 대항력이 소멸된 것으로 보고 인도명령을 신청할 수 있습니다.',
      },
      {
        question: '세입자가 인도명령에도 버티면 어떻게 되나요?',
        answer:
          '<strong>인도명령 결정문을 받은 후 세입자가 자진 퇴거하지 않으면 법원 집행관에게 강제집행을 신청할 수 있습니다.</strong> 집행관이 날짜를 지정하여 이삿짐을 강제로 이동시키는 방식으로 진행되며, 집행 비용은 이후 세입자에게 청구할 수 있습니다.',
      },
      {
        question: '인도명령 신청 기한 6개월을 넘기면 어떻게 되나요?',
        answer:
          '<strong>잔금 납부 후 6개월이 지나면 인도명령 신청이 불가능합니다.</strong> 이 경우 별도로 명도소송을 제기해야 하는데, 소송 기간이 6개월~1년 이상 소요되고 비용도 더 많이 들 수 있습니다. 가능한 한 6개월 이내에 신청하세요.',
      },
      {
        question: '채무자 본인이 직접 거주 중인 경우도 인도명령으로 내보낼 수 있나요?',
        answer:
          '<strong>채무자 또는 채무자 소유의 점유자도 인도명령 대상에 포함됩니다.</strong> 임차인이 아닌 채무자가 직접 점유 중인 경우, 낙찰자는 잔금 납부 후 바로 인도명령을 신청하여 강제집행을 진행할 수 있습니다.',
      },
      {
        question: '이사비를 줘야 세입자가 나가는데 얼마가 적당한가요?',
        answer:
          '<strong>이사비는 법적 의무가 아니지만 협의 퇴거를 유도하는 실무적 방법입니다.</strong> 통상 50~200만 원 수준에서 협의하는 경우가 많습니다. 이사비 지급 시에는 가능한 한 \'이사비 수령 후 ○○일 이내에 자진 퇴거한다\'는 내용의 각서를 받아두세요.',
      },
    ],
    cta: {
      text: '경매 세입자 대항력·명도 AI 상담',
      link: '/chat?domain=real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 입찰 전 체크리스트', href: '/guide/real-estate-auction/pre-bidding-checklist' },
      { label: '경매 초보자 흔한 실수 5가지', href: '/guide/real-estate-auction/beginner-auction-common-mistakes' },
      { label: '경매 낙찰 후 잔금 절차', href: '/guide/real-estate-auction/after-winning-bid-process' },
      { label: '경매 권리분석 방법', href: '/guide/real-estate-auction/auction-rights-analysis' },
    ],
  },

  // ───────────────────────────────────────────
  // 9. real-estate-auction / pre-bidding-checklist
  // ───────────────────────────────────────────
  // 10. real-estate-auction / beginner-auction-common-mistakes
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'beginner-auction-common-mistakes',
    keyword: '경매 초보자 실수 5가지',
    questionKeyword: '경매 초보자가 자주 실수하는 게 무엇인가요?',
    ctaKeyword: '경매 초보 실수 예방',
    type: '실수함정형',
    perspective: '피해자',
    meta: {
      title: '경매 초보자 실수 5가지와 예방법 총정리 | 로앤가이드',
      description:
        '경매를 처음 시작하는데 돌이킬 수 없는 실수를 저지를까 걱정된다면 초보자가 반복하는 실수 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>주변에서 "경매로 싸게 샀다"는 이야기를 듣고 경매에 도전해보려 합니다. 그런데 잘못됐을 때 얼마나 큰 손실이 생기는지 생각하면 섣불리 시작하기가 두렵습니다. 실제로 경매 초보자들이 같은 실수를 반복하며 수백만 원에서 수천만 원을 날리는 사례가 많습니다. 실수를 알아야 피할 수 있습니다.</p>',
    sections: [
      {
        title: '실수 1·2: 권리분석 오류와 현장 미확인',
        content:
          '<p><strong style="color:#1e3a5f">경매 초보자의 가장 큰 실수 두 가지는 권리분석 오류와 현장 방문 생략입니다. 두 실수 모두 회복하기 어려운 금전적 손해로 이어집니다</strong></p>\n<ul>\n<li><strong>실수 1 — 선순위 임차인 보증금 인수 간과</strong>: 낙찰가만 보고 싸다고 입찰했다가, 선순위 임차인의 보증금 수억 원을 인수해야 해서 실질 취득가격이 시세를 훨씬 초과하는 경우. 예: 낙찰가 1억 5천만 원 + 인수 보증금 1억 원 = 실질 취득가 2억 5천만 원인데 시세가 2억 원인 경우. 등기부등본 을구의 근저당권 설정일보다 임차인의 전입일이 빠른지 가능한 한 확인하세요</li>\n<li><strong>실수 2 — 현장 방문 없이 입찰</strong>: 사진과 감정평가서만 보고 입찰했다가 누수, 층간소음 문제, 지하 침수 이력 등 심각한 하자가 있는 물건을 낙찰받는 경우. 혹은 불법 건축물이 포함된 경우. 최소 2~3회 현장 방문으로 내외부 상태를 확인하고 주민에게도 물어보세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">원칙: 권리분석 완료 전 입찰 금지 / 현장 방문 최소 2회 이상</blockquote>',
      },
      {
        title: '실수 3·4: 유치권·법정지상권 함정과 감정가 맹신',
        content:
          '<p><strong style="color:#1e3a5f">법률 지식 없이 뛰어들면 유치권과 법정지상권 함정에 빠져 낙찰받고도 집을 활용하지 못하는 상황이 발생합니다</strong></p>\n<ul>\n<li><strong>실수 3 — 유치권 신고를 무시하거나 과소평가</strong>: 유치권 신고가 허위일 수도 있지만, 실제로 인정되면 낙찰자가 유치권자에게 공사대금을 지불해야만 집을 받을 수 있습니다. 유치권 신고가 있는 물건은 입찰 전 해당 내용증명, 계약서, 세금계산서 등을 파악하고, 불명확하면 포기하세요</li>\n<li><strong>실수 4 — 감정평가액을 시세로 착각</strong>: 법원 감정평가는 경매 개시 당시 가격으로 1~2년 전에 산정되는 경우가 많습니다. 그 사이 부동산 시세가 하락했을 수 있습니다. 가능한 한 현재 국토교통부 실거래가 데이터와 인근 부동산 중개업소의 최근 거래 사례를 확인하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=real-estate-auction" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실수 5: 입찰 후 잔금 납부 포기',
        content:
          '<p><strong style="color:#1e3a5f">낙찰 후 잔금을 납부하지 않으면 입찰보증금(최저매각가격의 10%)을 전액 몰수당합니다. 이는 가장 직접적인 금전 손실 실수입니다</strong></p>\n<ul>\n<li><strong>실수 상황</strong>: 대출이 될 줄 알고 입찰했는데 은행에서 담보대출을 거절한 경우, 낙찰 후 권리분석에서 새로운 문제를 발견하고 포기하고 싶을 때, 잔금 납부 기한(통상 낙찰일 후 30~45일)을 놓친 경우 등</li>\n<li><strong>예방책</strong>: 입찰 전에 은행 또는 경매 전문 대출 기관에 해당 물건으로 대출 가능 여부를 먼저 확인하세요. 감정평가액의 60~70% 수준으로 담보대출이 나오는지, LTV 규제에 걸리지 않는지 확인합니다. 잔금 마련 계획이 없으면 입찰 자체를 하지 마세요</li>\n<li><strong>잔금 납부 기한 연장</strong>: 부득이한 사정이 있으면 법원에 기한 연장 신청을 할 수 있지만, 허가 여부는 법원 재량입니다. 연장을 기대하고 무리하게 입찰하는 것은 위험합니다</li>\n</ul>\n<p><strong>추가 실수 주의</strong>: 경매 투자 커뮤니티나 유튜브만 보고 충분히 알았다고 착각하는 것도 큰 함정입니다. 경매는 물건마다 권리관계가 다르고, 첫 2~3건은 가능한 한 전문가와 함께 진행하는 것을 권합니다.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">원칙: 대출 사전 확인 → 잔금 계획 수립 → 확신이 없으면 입찰 포기</blockquote>',
      },
    ],
    cases: [
      {
        title: '집합건물 체납 관리비 인수 — 대법원 판결',
        summary:
          '대법원 2006다29819 사건에서 법원은 집합건물의 경매 낙찰자는 이전 구분소유자가 납부하지 않은 공용부분 관리비를 특별승계인으로서 인수해야 한다고 판시했습니다. 공용부분 체납 관리비는 물건에 붙어서 따라온다는 점을 초보 투자자들은 간과하기 쉽습니다.',
        takeaway:
          '경매 입찰 전 관리사무소에서 체납 관리비 내역서를 발급받아 가능한 한 확인하세요. 수백만 원의 체납 관리비가 있는 경우 입찰가를 그만큼 낮춰서 책정해야 합니다.',
      },
    ],
    faq: [
      {
        question: '경매 낙찰 후 마음이 바뀌면 어떻게 되나요?',
        answer:
          '<strong>낙찰 후 매각허가결정이 확정되면 임의로 포기할 수 없습니다.</strong> 잔금을 납부하지 않으면 입찰보증금 전액이 몰수됩니다. 낙찰가의 10%이므로 낙찰가 1억 원이면 1,000만 원을 잃게 됩니다. 입찰 전 충분한 검토가 절대적으로 중요합니다.',
      },
      {
        question: '공매와 경매의 차이는 무엇인가요?',
        answer:
          '<strong>경매는 법원이 진행하는 강제 처분이고, 공매는 한국자산관리공사(캠코)나 기타 기관이 진행하는 매각입니다.</strong> 공매는 온비드 사이트에서 확인할 수 있으며, 세금 체납 부동산 등이 주로 공매로 나옵니다. 권리분석 방법은 유사하지만 절차가 일부 다릅니다.',
      },
      {
        question: '경매 투자를 처음 시작할 때 어떤 물건부터 시작해야 하나요?',
        answer:
          '<strong>처음에는 권리관계가 단순한 아파트 경매부터 시작하는 것을 권합니다.</strong> 임차인이 없고 근저당권만 있는 경우가 이상적입니다. 상가, 다세대주택, 토지는 권리관계가 복잡하여 초보자에게 적합하지 않습니다. 처음 2~3건은 전문가와 함께 진행하세요.',
      },
      {
        question: '전 소유자가 집에 물건을 남겨두고 가면 어떻게 처리하나요?',
        answer:
          '<strong>낙찰자가 임의로 버리면 재물손괴죄가 될 수 있어 절차에 따라 처리해야 합니다.</strong> 전 소유자·점유자에게 내용증명으로 이행 청구를 하고, 응하지 않으면 법원에 동산 인도명령 또는 유체동산 경매 신청을 통해 처리합니다.',
      },
    ],
    cta: {
      text: '경매 초보 실수 예방 AI 상담',
      link: '/chat?domain=real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 입찰 전 체크리스트', href: '/guide/real-estate-auction/pre-bidding-checklist' },
      { label: '경매 세입자 있는 물건 대처법', href: '/guide/real-estate-auction/auction-property-with-tenant' },
      { label: '경매 권리분석 총정리', href: '/guide/real-estate-auction/auction-rights-analysis' },
      { label: '경매 낙찰 후 잔금 절차', href: '/guide/real-estate-auction/after-winning-bid-process' },
    ],
  },

  // ───────────────────────────────────────────
  // 11. neighbor-dispute / unbearable-upstairs-noise-response
  // ───────────────────────────────────────────
  // 12. neighbor-dispute / floor-noise-report-to-mediation-procedure
  // ───────────────────────────────────────────
  // 13. neighbor-dispute / noise-complaint-leads-to-counter-lawsuit
  // ───────────────────────────────────────────
  {
    domain: 'neighbor-dispute',
    slug: 'noise-complaint-leads-to-counter-lawsuit',
    keyword: '층간소음 항의하다 고소당하는 경우 대응',
    questionKeyword: '층간소음 항의하다 오히려 고소를 당하면 어떻게 해야 하나요?',
    ctaKeyword: '층간소음 맞고소 대응',
    type: '실수함정형',
    perspective: '피해자',
    meta: {
      title: '층간소음 항의하다 고소당했을 때 대응법 4가지 | 로앤가이드',
      description:
        '층간소음에 항의했다가 오히려 위층으로부터 고소를 당해 억울한 상황이라면 혐의 유형과 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>층간소음 때문에 위층 문을 두드리고 항의했더니 갑자기 경찰에서 연락이 왔습니다. 위층에서 저를 협박이나 주거침입으로 고소했다는 것입니다. 피해자인 제가 가해자가 된 상황이라니 믿기지 않습니다. 어떻게 대응해야 할지, 내가 정말 잘못한 것인지 알고 싶습니다.</p>',
    sections: [
      {
        title: '층간소음 항의 시 문제가 될 수 있는 행위',
        content:
          '<p><strong style="color:#1e3a5f">정당한 소음 항의라도 방법에 따라 형사 고소의 대상이 될 수 있습니다. 어떤 행위가 법적으로 문제가 되는지 알아야 합니다</strong></p>\n<ul>\n<li><strong>협박죄(형법 제283조)</strong>: "계속 시끄럽게 하면 가만히 안 두겠다", "다음엔 경찰서에서 만나자" 같은 말이 협박으로 해석될 수 있습니다. 상대방이 두려움을 느낄 정도의 해악을 고지하면 협박죄가 성립할 수 있습니다</li>\n<li><strong>주거침입죄(형법 제319조)</strong>: 위층 문을 강제로 열거나 동의 없이 들어간 경우 주거침입죄가 됩니다. 출입구 앞에 머무르며 통행을 막는 행위도 문제가 될 수 있습니다</li>\n<li><strong>명예훼손·모욕죄</strong>: 엘리베이터·복도에 위층을 비방하는 내용의 전단지를 붙이거나, SNS에 위층 정보와 함께 비방 글을 올리면 명예훼손죄 또는 모욕죄가 성립할 수 있습니다</li>\n<li><strong>스토킹범죄</strong>: 위층 문 앞에 반복적으로 찾아가거나, 문자를 수십 통씩 보내거나, 위층의 의사에 반하여 접촉을 반복하는 경우 스토킹범죄로 처벌받을 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 항의 자체는 정당하지만, 방법이 협박·위협·반복 접촉으로 변질되면 형사 처벌 대상</blockquote>',
      },
      {
        title: '위층의 맞고소에 대한 초기 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">고소를 당하면 당황하지 말고, 자신의 행위가 정당한 범위였음을 입증하는 데 집중해야 합니다</strong></p>\n<ul>\n<li><strong>경찰 조사 시 진술 주의</strong>: 경찰 조사에서 섣불리 모든 사실을 인정하지 마세요. 특히 "무서우라고 한 것"이 아니라 "소음 문제를 해결하기 위한 것"이었다는 점을 분명히 진술합니다. 조사 전에 변호사 조언을 받는 것이 좋습니다</li>\n<li><strong>정당한 항의임을 입증</strong>: 이웃사이센터 측정 결과, 소음 발생 기록, 관리사무소 민원 이력 등을 제출하여 소음 피해가 실재했음을 입증합니다. 정당한 이유가 있는 항의였음을 강조하세요</li>\n<li><strong>반소(맞고소) 검토</strong>: 위층의 소음 행위가 오랫동안 계속된 불법 행위라면, 소음 피해에 대한 손해배상 청구 또는 형사 고소를 검토할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '앞으로 법적 범위 안에서 항의하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">이미 고소를 당했거나 고소가 두려운 상황이라면, 이후 항의는 가능한 한 법적 범위 안에서 해야 합니다</strong></p>\n<ul>\n<li><strong>서면·문자로만 항의</strong>: 직접 찾아가는 대신 내용증명 우편이나 문자·카카오톡으로 항의합니다. 위협적 표현 없이 "○월 ○일 ○시에 층간소음이 발생하여 수면을 방해받았습니다"처럼 사실 중심으로 작성하세요</li>\n<li><strong>제3자를 통한 간접 소통</strong>: 관리사무소, 이웃사이센터, 조정위원회를 통해 간접적으로 소통하면 직접 접촉으로 인한 분쟁을 예방할 수 있습니다</li>\n<li><strong>CCTV 설치와 블랙박스 활용</strong>: 공용부분(복도, 현관 앞)에 위층의 보복성 행위가 있을 경우에 대비하여 녹화 장치를 준비합니다. 위층이 오히려 내려와서 위협하는 경우를 대비하는 것입니다</li>\n<li><strong>접근 금지 가처분</strong>: 위층이 아래층에 내려와 위협하거나 반복적으로 찾아온다면, 법원에 접근 금지 가처분을 신청하여 물리적 거리를 확보할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">원칙: 직접 접촉 최소화 → 서면·기관 경유 소통 → 모든 소통 내역 보관</blockquote>',
      },
    ],
    cases: [
      {
        title: '층간소음 고의 유발이 스토킹범죄에 해당 — 대법원 2023도10313',
        summary:
          '대법원 2023도10313 사건(대법원, 2023.12.14 선고)에서 법원은 아래층 거주자가 위층의 소음에 불만을 품고 수개월간 야간에 반복적으로 벽을 두드린 행위를 스토킹범죄로 인정했습니다. 더불어 이 사건의 피고인은 위층 이웃들의 대화 시도를 거부하고 오히려 이웃을 스토킹 혐의로 고소하는 방식으로 분쟁을 악화시켰습니다.',
        takeaway:
          '소음 분쟁에서 상대방을 먼저 고소하는 전략은 역효과를 낼 수 있습니다. 분쟁 초기부터 대화 시도, 조정 신청 등 합리적인 해결 노력을 했다는 기록을 남겨야 역고소를 받아도 유리하게 대응할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '위층이 저를 협박죄로 고소했는데 무고한 것 같습니다. 무고죄로 맞고소할 수 있나요?',
        answer:
          '<strong>무고죄(형법 제156조)는 상대방이 허위 사실로 고소했음이 입증되어야 성립할 수 있습니다.</strong> 단순히 고소 내용이 인정되지 않아 불기소 처분이 됐다고 자동으로 무고죄가 되지는 않습니다. 상대방이 사실을 알면서도 허위로 고소했다는 점을 입증해야 합니다.',
      },
      {
        question: '경찰 조사에서 변호사 동석을 요청할 수 있나요?',
        answer:
          '<strong>피의자로 조사를 받는 경우, 변호인 참여권이 있어 변호사 동석 하에 조사받을 수 있습니다(형사소송법 제243조의2).</strong> 조사 전 "변호인이 오기 전까지 진술을 보류하겠다"고 말하고 변호사에게 연락하세요. 진술을 강요할 수 없습니다.',
      },
      {
        question: '항의 과정에서 위층 문을 세게 두드린 것이 주거침입이 되나요?',
        answer:
          '<strong>문을 두드리는 행위만으로는 주거침입이 성립되지 않습니다.</strong> 주거침입은 상대방의 의사에 반하여 실제로 주거 공간에 들어가는 것을 말합니다. 문 앞에서 초인종을 누르거나 문을 두드리는 행위는 원칙적으로 주거침입에 해당하지 않습니다. 다만 문을 강제로 열고 들어간 경우는 다릅니다.',
      },
      {
        question: '억울하게 고소당한 사실이 직장에 알려질 수 있나요?',
        answer:
          '<strong>수사 단계에서는 원칙적으로 비공개로 진행됩니다.</strong> 불기소 처분이 되거나 무죄 판결을 받으면 수사 기록은 공개되지 않습니다. 다만 기소되어 재판이 진행되는 경우 공개 재판이 될 수 있습니다. 불기소 처분이 목표라면 조사에서 혐의 없음을 적극적으로 소명하세요.',
      },
      {
        question: '층간소음 때문에 이사를 가고 싶은데 임대차 계약을 해지할 수 있나요?',
        answer:
          '<strong>층간소음으로 인한 계약 해지는 집주인의 협조와 귀책 사유를 따져야 합니다.</strong> 집주인이 소음 문제 해결을 위한 아무런 조치도 취하지 않았다면 임대차 계약상 의무 위반을 주장할 수 있습니다. 다만 위층의 소음이 집주인의 직접 책임이 아닌 경우 계약 해지보다는 차임 감액 협의가 현실적일 수 있습니다.',
      },
    ],
    cta: {
      text: '층간소음 맞고소 대응 AI 상담',
      link: '/chat?domain=neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '윗집 층간소음 대처법', href: '/guide/neighbor-dispute/unbearable-upstairs-noise-response' },
      { label: '층간소음 신고부터 조정까지 절차', href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure' },
      { label: '층간소음 피해 어디부터 시작해야 하나', href: '/guide/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '이웃 간 분쟁 손해배상 청구', href: '/guide/neighbor-dispute/neighbor-noise-damage-claim' },
    ],
  },

  // ───────────────────────────────────────────
  // 14. neighbor-dispute / floor-noise-victim-where-to-start
];
