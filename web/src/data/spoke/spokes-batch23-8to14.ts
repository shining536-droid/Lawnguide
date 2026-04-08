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
          '<p><strong style="color:#1e3a5f">낙찰 물건의 세입자 유형에 따라 처리 방법과 위험 수준이 달라집니다. 입찰 전 반드시 유형별로 리스크를 파악하세요</strong></p>\n<ul>\n<li><strong>선순위 + 미배당 세입자</strong> — 가장 위험한 유형. 낙찰자가 보증금 전액 인수. 입찰가에서 보증금을 빼고 수익성 계산해야 합니다. 보증금 규모에 따라 손해 볼 수 있습니다</li>\n<li><strong>위장 세입자(채무자 가족)</strong> — 채무자의 가족이 허위로 전입신고한 경우. 법원 현황조사서와 임대차 계약서를 꼼꼼히 확인하세요. 실제 보증금 이전이 없는 경우 대항력이 없습니다</li>\n<li><strong>상가 임차인</strong> — 상가건물임대차보호법의 보호를 받으며, 환산보증금 범위와 대항력 발생 시점이 주택 임차인과 다릅니다. 사업자등록 일자를 반드시 확인하세요</li>\n<li><strong>불법 점유자(임차인 아님)</strong> — 인도명령 외에도 명도소송을 제기할 수 있습니다. 점유 이전의 금지 가처분을 먼저 신청하는 것이 안전합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">체크: 선순위 여부 확인 → 보증금 배당 여부 확인 → 실제 거주 여부 현장 확인 → 입찰가 산정</blockquote>',
      },
    ],
    cases: [
      {
        title: '경매 배당 절차 세입자 권리승계 — 대법원 2024다298448 판결',
        summary:
          '대법원 2024다298448 사건(대법원, 2025.11.13 선고)에서 법원은 파산채권자의 배당금지급청구권을 전부받은 채권자가 채권조사확정재판에 대한 이의의 소를 제기한 사건에서, 파산채권자의 배당금지급청구권을 압류·전부받은 자는 파산채권 자체를 승계한 것이 아니라고 판시했습니다. 이는 경매 절차에서 세입자의 임차보증금 반환채권 양수·전부와 배당금 수령 권리의 귀속 관계가 엄격히 구분됨을 보여주는 사례입니다.',
        takeaway:
          '경매 낙찰 후 세입자의 보증금 반환채권이 제3자에게 양도·전부된 경우, 낙찰자는 그 권리관계를 정확히 파악해야 합니다. 배당 절차에서 누가 세입자의 권리를 적법하게 승계했는지를 법원 기록으로 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '세입자 대항력이 있으면 낙찰자는 무조건 보증금을 인수해야 하나요?',
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
          '<strong>잔금 납부 후 6개월이 지나면 인도명령 신청이 불가능합니다.</strong> 이 경우 별도로 명도소송을 제기해야 하는데, 소송 기간이 6개월~1년 이상 소요되고 비용도 더 많이 들 수 있습니다. 반드시 6개월 이내에 신청하세요.',
      },
      {
        question: '채무자 본인이 직접 거주 중인 경우도 인도명령으로 내보낼 수 있나요?',
        answer:
          '<strong>채무자 또는 채무자 소유의 점유자도 인도명령 대상에 포함됩니다.</strong> 임차인이 아닌 채무자가 직접 점유 중인 경우, 낙찰자는 잔금 납부 후 바로 인도명령을 신청하여 강제집행을 진행할 수 있습니다.',
      },
      {
        question: '이사비를 줘야 세입자가 나가는데 얼마가 적당한가요?',
        answer:
          '<strong>이사비는 법적 의무가 아니지만 협의 퇴거를 유도하는 실무적 방법입니다.</strong> 통상 50~200만 원 수준에서 협의하는 경우가 많습니다. 이사비 지급 시에는 반드시 \'이사비 수령 후 ○○일 이내에 자진 퇴거한다\'는 내용의 각서를 받아두세요.',
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
  {
    domain: 'real-estate-auction',
    slug: 'pre-bidding-checklist',
    keyword: '경매 입찰 전 확인 체크리스트',
    questionKeyword: '경매 입찰하기 전에 어떤 것들을 확인해야 하나요?',
    ctaKeyword: '경매 입찰 전 체크리스트',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '경매 입찰 전 필수 확인 체크리스트 7가지 | 로앤가이드',
      description:
        '경매 입찰을 앞두고 뭘 확인해야 할지 몰라 불안하다면 권리분석부터 수익성 계산까지 체크리스트를 지금 확인하세요.',
    },
    intro:
      '<p>경매 물건을 찾았는데 입찰 전 어떤 것들을 확인해야 할지 막막합니다. 등기부등본만 보면 되는지, 현장 방문을 꼭 해야 하는지 기준이 없습니다. 한 번의 실수로 수백만 원에서 수천만 원을 잃을 수 있다는 이야기를 들었습니다. 입찰하기 전 반드시 확인해야 할 항목들을 체계적으로 정리했습니다.</p>',
    sections: [
      {
        title: '체크 1~3: 권리관계 분석',
        content:
          '<p><strong style="color:#1e3a5f">경매 입찰의 핵심은 낙찰 후 인수해야 할 권리가 무엇인지 파악하는 것입니다. 등기부등본과 경매 기록의 꼼꼼한 검토가 필수입니다</strong></p>\n<ul>\n<li><strong>체크 1 — 등기부등본(갑구·을구)</strong>: 갑구에서 소유권 이전 이력과 가압류·압류·가처분·예고등기를 확인합니다. 을구에서 근저당권·전세권·지상권 등 담보물권의 설정일과 금액을 정리합니다. 말소기준권리보다 선순위 권리가 있는지 반드시 확인하세요</li>\n<li><strong>체크 2 — 임차인 현황 확인</strong>: 법원 경매 기록의 현황조사서와 권리신고서를 열람합니다. 각 세입자의 전입일, 확정일자, 보증금 금액을 파악하고 대항력 유무를 판단합니다. 선순위 임차인 보증금이 낙찰 후 인수 금액에 포함됩니다</li>\n<li><strong>체크 3 — 유치권·법정지상권 존재 여부</strong>: 건물 신축 공사대금 미지급 시 공사업자가 유치권을 주장할 수 있습니다. 또한 토지와 건물의 소유자가 다른 경우 법정지상권이 성립할 수 있어 토지만 낙찰받아도 건물을 철거하지 못할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">권리분석 요약: 말소기준권리 파악 → 선순위 권리 인수 범위 확정 → 임차인 보증금 합산</blockquote>',
      },
      {
        title: '체크 4~5: 물건 상태 및 현장 확인',
        content:
          '<p><strong style="color:#1e3a5f">법원 기록만으로는 파악할 수 없는 물건의 실제 상태를 현장 방문으로 확인해야 합니다</strong></p>\n<ul>\n<li><strong>체크 4 — 현장 방문 및 물건 상태 확인</strong>: 물건에 직접 방문하여 건물 노후도, 누수·균열·층간소음 여부, 주변 환경을 눈으로 확인합니다. 세입자가 거주 중이라면 도어 앞에서 상태를 살피거나 관리사무소를 통해 정보를 수집합니다. 내부 확인이 어려우면 감정평가서의 현황 사진을 참고합니다</li>\n<li><strong>체크 5 — 관리비·체납세금 확인</strong>: 아파트나 오피스텔의 경우 관리비 연체금액이 낙찰자에게 승계될 수 있습니다(집합건물법 제18조). 관리사무소에 체납 관리비를 문의하고, 취득세·재산세 체납도 지방세 담당 부서에서 확인합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=real-estate-auction" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '체크 6~7: 수익성 계산과 입찰가 결정',
        content:
          '<p><strong style="color:#1e3a5f">좋은 물건도 입찰가를 잘못 산정하면 손해를 볼 수 있습니다. 모든 비용을 포함한 실질 수익률을 계산해야 합니다</strong></p>\n<ul>\n<li><strong>체크 6 — 총 취득비용 계산</strong>: 낙찰가 + 취득세(주택 1~3%, 비주택 4%) + 법무사 비용 + 인도명령·강제집행 비용 + 체납 관리비 + 수리비용 + 명도 이사비를 모두 합산합니다. 이 총액이 시세의 80~85% 이하일 때 수익성이 있다고 봅니다</li>\n<li><strong>체크 7 — 입찰가 결정</strong>: 국토교통부 실거래가 공개시스템, 네이버부동산, 한국부동산원 시세를 기준으로 시세를 파악합니다. 경쟁이 치열한 인기 물건은 낙찰가율이 95% 이상이 되기도 합니다. 초보자는 낙찰가율 75~80% 이하에서만 입찰하는 것을 원칙으로 삼으세요</li>\n</ul>\n<p><strong>입찰 포기 기준</strong>: 아래 중 하나라도 해당되면 이번 입찰은 포기하는 것이 안전합니다.</p>\n<ul>\n<li>선순위 임차인 보증금 규모가 불분명한 경우</li>\n<li>유치권 신고가 있는데 내용이 파악되지 않는 경우</li>\n<li>법정지상권 성립 가능성이 있는 경우</li>\n<li>현장 방문이 불가능하여 내부 상태를 확인 못 한 경우</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">수익성 공식: 낙찰가 + 모든 부대비용 ≤ 시세 × 80% → 입찰 검토 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '집합건물 체납 관리비 낙찰자 승계 — 대법원 판결',
        summary:
          '대법원 2006다86030 사건에서 법원은 집합건물의 소유 및 관리에 관한 법률 제18조에 따라 구분소유자가 공용부분에 대한 공과금을 체납한 경우, 그 특별승계인(낙찰자 포함)은 전(前) 소유자의 체납 관리비를 납부할 의무가 있다고 판시했습니다.',
        takeaway:
          '아파트·오피스텔 경매 입찰 전 관리사무소에 방문하여 공용부분 체납 관리비를 반드시 확인하세요. 전용부분 체납 관리비는 낙찰자가 인수하지 않아도 되지만, 공용부분은 인수됩니다.',
      },
    ],
    faq: [
      {
        question: '경매 기록은 어디서 열람할 수 있나요?',
        answer:
          '<strong>대법원 법원경매정보 사이트(www.courtauction.go.kr)에서 경매 기록을 열람할 수 있습니다.</strong> 매각물건명세서, 현황조사서, 감정평가서를 무료로 볼 수 있으며, 직접 법원에 방문하여 실물 기록을 열람하는 것도 가능합니다.',
      },
      {
        question: '유치권 신고가 있는 물건은 무조건 피해야 하나요?',
        answer:
          '<strong>유치권은 주장만으로는 성립하지 않으며 실체적 요건을 갖춰야 합니다.</strong> 허위 유치권 신고도 많으므로, 유치권 신고 금액과 내용을 확인한 후 실제 공사 대금이 있었는지, 계약서·세금계산서가 있는지를 확인하세요. 유치권이 허위라면 낙찰 후 소송으로 다툴 수 있습니다.',
      },
      {
        question: '현장 방문 시 세입자가 문을 열어주지 않으면 어떻게 하나요?',
        answer:
          '<strong>세입자는 현장 방문을 거부할 권리가 있으므로 강제로 들어갈 수 없습니다.</strong> 이 경우 건물 외부와 공용부분만 확인하고, 감정평가서의 사진과 내부 현황을 참고합니다. 관리사무소·경비원에게 누수·수리 이력 등을 문의하는 것도 방법입니다.',
      },
      {
        question: '입찰보증금은 얼마인가요? 낙찰 취소하면 돌려받을 수 있나요?',
        answer:
          '<strong>입찰보증금은 최저매각가격의 10%입니다.</strong> 낙찰받은 후 잔금을 납부하지 않거나 매각허가결정에 이의 없이 취소하면 입찰보증금은 몰수됩니다. 최고가 입찰자가 낙찰을 포기하는 경우에도 마찬가지입니다.',
      },
      {
        question: '경매 기일에 직접 참석해야 하나요? 온라인 입찰도 되나요?',
        answer:
          '<strong>2021년부터 일부 법원에서 전자입찰(온라인 경매)이 가능합니다.</strong> 대법원 전자소송 시스템 또는 법원경매정보 사이트를 통해 전자입찰서를 제출할 수 있으며, 기일 현장 참석 없이도 입찰이 가능합니다. 단, 전자입찰 대상 물건인지 미리 확인이 필요합니다.',
      },
    ],
    cta: {
      text: '경매 입찰 전 AI 체크리스트 상담',
      link: '/chat?domain=real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 세입자 있는 물건 대처법', href: '/guide/real-estate-auction/auction-property-with-tenant' },
      { label: '경매 초보자 흔한 실수 5가지', href: '/guide/real-estate-auction/beginner-auction-common-mistakes' },
      { label: '경매 권리분석 총정리', href: '/guide/real-estate-auction/auction-rights-analysis' },
      { label: '경매 낙찰 후 잔금 절차', href: '/guide/real-estate-auction/after-winning-bid-process' },
    ],
  },

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
          '<p><strong style="color:#1e3a5f">경매 초보자의 가장 큰 실수 두 가지는 권리분석 오류와 현장 방문 생략입니다. 두 실수 모두 회복하기 어려운 금전적 손해로 이어집니다</strong></p>\n<ul>\n<li><strong>실수 1 — 선순위 임차인 보증금 인수 간과</strong>: 낙찰가만 보고 싸다고 입찰했다가, 선순위 임차인의 보증금 수억 원을 인수해야 해서 실질 취득가격이 시세를 훨씬 초과하는 경우. 예: 낙찰가 1억 5천만 원 + 인수 보증금 1억 원 = 실질 취득가 2억 5천만 원인데 시세가 2억 원인 경우. 등기부등본 을구의 근저당권 설정일보다 임차인의 전입일이 빠른지 반드시 확인하세요</li>\n<li><strong>실수 2 — 현장 방문 없이 입찰</strong>: 사진과 감정평가서만 보고 입찰했다가 누수, 층간소음 문제, 지하 침수 이력 등 심각한 하자가 있는 물건을 낙찰받는 경우. 혹은 불법 건축물이 포함된 경우. 최소 2~3회 현장 방문으로 내외부 상태를 확인하고 주민에게도 물어보세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">원칙: 권리분석 완료 전 입찰 금지 / 현장 방문 최소 2회 이상</blockquote>',
      },
      {
        title: '실수 3·4: 유치권·법정지상권 함정과 감정가 맹신',
        content:
          '<p><strong style="color:#1e3a5f">법률 지식 없이 뛰어들면 유치권과 법정지상권 함정에 빠져 낙찰받고도 집을 활용하지 못하는 상황이 발생합니다</strong></p>\n<ul>\n<li><strong>실수 3 — 유치권 신고를 무시하거나 과소평가</strong>: 유치권 신고가 허위일 수도 있지만, 실제로 인정되면 낙찰자가 유치권자에게 공사대금을 지불해야만 집을 받을 수 있습니다. 유치권 신고가 있는 물건은 입찰 전 해당 내용증명, 계약서, 세금계산서 등을 파악하고, 불명확하면 포기하세요</li>\n<li><strong>실수 4 — 감정평가액을 시세로 착각</strong>: 법원 감정평가는 경매 개시 당시 가격으로 1~2년 전에 산정되는 경우가 많습니다. 그 사이 부동산 시세가 하락했을 수 있습니다. 반드시 현재 국토교통부 실거래가 데이터와 인근 부동산 중개업소의 최근 거래 사례를 확인하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=real-estate-auction" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실수 5: 입찰 후 잔금 납부 포기',
        content:
          '<p><strong style="color:#1e3a5f">낙찰 후 잔금을 납부하지 않으면 입찰보증금(최저매각가격의 10%)을 전액 몰수당합니다. 이는 가장 직접적인 금전 손실 실수입니다</strong></p>\n<ul>\n<li><strong>실수 상황</strong>: 대출이 될 줄 알고 입찰했는데 은행에서 담보대출을 거절한 경우, 낙찰 후 권리분석에서 새로운 문제를 발견하고 포기하고 싶을 때, 잔금 납부 기한(통상 낙찰일 후 30~45일)을 놓친 경우 등</li>\n<li><strong>예방책</strong>: 입찰 전에 은행 또는 경매 전문 대출 기관에 해당 물건으로 대출 가능 여부를 먼저 확인하세요. 감정평가액의 60~70% 수준으로 담보대출이 나오는지, LTV 규제에 걸리지 않는지 확인합니다. 잔금 마련 계획이 없으면 입찰 자체를 하지 마세요</li>\n<li><strong>잔금 납부 기한 연장</strong>: 부득이한 사정이 있으면 법원에 기한 연장 신청을 할 수 있지만, 허가 여부는 법원 재량입니다. 연장을 기대하고 무리하게 입찰하는 것은 위험합니다</li>\n</ul>\n<p><strong>추가 실수 주의</strong>: 경매 투자 커뮤니티나 유튜브만 보고 충분히 알았다고 착각하는 것도 큰 함정입니다. 경매는 물건마다 권리관계가 다르고, 첫 2~3건은 반드시 전문가와 함께 진행하는 것을 권합니다.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">원칙: 대출 사전 확인 → 잔금 계획 수립 → 확신이 없으면 입찰 포기</blockquote>',
      },
    ],
    cases: [
      {
        title: '집합건물 체납 관리비 인수 — 대법원 판결',
        summary:
          '대법원 2006다29819 사건에서 법원은 집합건물의 경매 낙찰자는 이전 구분소유자가 납부하지 않은 공용부분 관리비를 특별승계인으로서 인수해야 한다고 판시했습니다. 공용부분 체납 관리비는 물건에 붙어서 따라온다는 점을 초보 투자자들은 간과하기 쉽습니다.',
        takeaway:
          '경매 입찰 전 관리사무소에서 체납 관리비 내역서를 발급받아 반드시 확인하세요. 수백만 원의 체납 관리비가 있는 경우 입찰가를 그만큼 낮춰서 책정해야 합니다.',
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
  {
    domain: 'neighbor-dispute',
    slug: 'unbearable-upstairs-noise-response',
    keyword: '윗집 층간소음 참을 수 없을 때 대처법',
    questionKeyword: '윗집 층간소음이 너무 심할 때 법적으로 대응할 수 있나요?',
    ctaKeyword: '층간소음 법적 대응',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '윗집 층간소음 참을 수 없을 때 대처법 4단계 | 로앤가이드',
      description:
        '윗집 층간소음이 너무 심해서 잠도 못 자고 일상이 무너지는 상황이라면 증거 수집부터 손해배상까지 지금 확인하세요.',
    },
    intro:
      '<p>밤마다 위층에서 쿵쿵 소리가 나서 잠을 자지 못한 지 벌써 몇 달째입니다. 직접 찾아가서 조용히 해달라고 했지만 오히려 더 심해진 것 같습니다. 이제는 집에 있기가 너무 싫고, 가족 모두 스트레스로 지쳐가고 있습니다. 법적으로 어떻게 대응할 수 있는지 알고 싶습니다.</p>',
    sections: [
      {
        title: '1단계: 소음 증거 수집 — 기록이 없으면 주장할 수 없습니다',
        content:
          '<p><strong style="color:#1e3a5f">층간소음 분쟁에서 증거가 없으면 어떤 기관에서도 도움을 받기 어렵습니다. 체계적인 기록부터 시작하세요</strong></p>\n<ul>\n<li><strong>소음 측정</strong>: 스마트폰 소음 측정 앱(dB 측정)으로 날짜·시간·소음 수준을 기록합니다. 층간소음 기준치(주간 43dB, 야간 38dB)를 초과하는 시점을 중점적으로 측정합니다</li>\n<li><strong>영상·음성 녹음</strong>: 소음이 발생하는 순간을 스마트폰으로 녹음하거나 영상을 촬영합니다. 문자·카카오톡으로 윗집에 항의한 내역도 모두 저장해두세요</li>\n<li><strong>층간소음 이웃사이센터 신고</strong>: 환경부 산하 층간소음이웃사이센터(1661-2642)에 신고하면 전문가가 현장 방문하여 소음을 측정해줍니다. 이 측정 결과가 법적 증거로 활용될 수 있습니다</li>\n<li><strong>진단서 확보</strong>: 소음으로 인한 수면장애, 우울증, 두통 등이 발생하였다면 의사 진단서를 받아두세요. 손해배상 청구 시 피해 규모를 입증하는 데 중요합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 날짜·시간·dB 수치가 담긴 소음 기록 + 이웃사이센터 측정 + 피해 진단서</blockquote>',
      },
      {
        title: '2단계: 관리사무소·경찰 신고와 조정 신청',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통한 개입이 이루어져야 윗집이 심각성을 인식하고, 향후 법적 절차에서도 더 강한 입장을 가질 수 있습니다</strong></p>\n<ul>\n<li><strong>관리사무소 신고</strong>: 관리사무소에 층간소음 발생 사실을 서면으로 신고합니다. 관리사무소가 윗집에 공문을 발송하고 경고하도록 요청하세요. 관리사무소 처리 이력도 증거가 됩니다</li>\n<li><strong>경찰 신고</strong>: 야간 소음이 특히 심하거나 위층이 고의로 소음을 발생시키고 있다면 112에 신고할 수 있습니다. 경찰이 방문한 사실 자체가 위층에 경고가 됩니다</li>\n<li><strong>층간소음 조정 신청</strong>: 환경분쟁조정위원회 또는 주택관리분쟁조정위원회에 조정을 신청할 수 있습니다. 무료로 이용할 수 있으며 합의를 유도하는 역할을 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 민사소송 — 손해배상 및 소음 금지 청구',
        content:
          '<p><strong style="color:#1e3a5f">조정이 실패하거나 소음이 계속된다면 민사소송을 통해 손해배상과 소음 행위 금지를 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>손해배상 청구(민법 제750조)</strong>: 불법행위로 인한 정신적·재산적 손해에 대해 배상을 청구합니다. 과거 피해에 대한 위자료와 치료비가 주요 항목입니다. 법원은 피해 기간, 소음 강도, 생활방해 정도를 고려하여 배상액을 결정합니다</li>\n<li><strong>방해 배제 청구(민법 제217조)</strong>: 현재 및 장래의 소음 발생 행위 금지를 요청할 수 있습니다. 단, 법원이 "참을 한도"를 초과한다고 판단해야 인용됩니다(대법원 2014다57846 기준)</li>\n<li><strong>소액심판 활용</strong>: 청구 금액이 3,000만 원 이하이면 소액심판 절차를 이용할 수 있어 비용과 시간을 절약할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">청구 내용: 과거 손해 위자료 + 치료비 + 향후 소음 행위 금지</blockquote>',
      },
      {
        title: '위층이 고의로 소음을 발생시키는 경우 — 형사 대응',
        content:
          '<p><strong style="color:#1e3a5f">층간소음 분쟁 과정에서 위층이 의도적으로 반복해서 소음을 발생시킨다면 스토킹범죄로 형사 고소가 가능합니다</strong></p>\n<ul>\n<li><strong>스토킹범죄 해당 여부</strong>: 대법원 2023도10313 사건에서 법원은 수개월에 걸쳐 야간에 반복적으로 도구로 벽을 두드려 이웃에게 공포심을 유발한 행위가 스토킹범죄에 해당한다고 판시했습니다. 소음의 반복성과 고의성이 인정되면 처벌이 가능합니다</li>\n<li><strong>고소 요건</strong>: 단순히 시끄러운 것만으로는 부족합니다. 이웃의 항의나 경찰 출동 후에도 반복적으로 소음을 일으키거나, 특정 시간(심야)에 집중하여 발생시키는 경우가 해당됩니다</li>\n<li><strong>고소장 제출</strong>: 가까운 경찰서에 고소장을 제출합니다. 소음 발생 일시, 방법, 횟수, 대화 기록, 이웃사이센터 측정 결과 등을 첨부하면 수사에 유리합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 반복·고의적 소음 + 공포심 유발 요건 충족 시 스토킹범죄로 형사 고소 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '반복적 층간소음 행위가 스토킹범죄로 인정 — 대법원 2023도10313',
        summary:
          '대법원 2023도10313 사건(대법원, 2023.12.14 선고)에서 법원은 빌라 아래층에 사는 피고인이 수개월간 야간에 반복적으로 도구로 벽을 두드려 위층 피해자에게 큰 소리가 전달되게 한 행위가 스토킹범죄를 구성한다고 판시했습니다. 법원은 이웃의 대화 시도를 거부하고 오히려 이웃을 고소하는 등 분쟁을 합리적으로 해결하려 하지 않고 이웃을 괴롭힐 의도로 한 행위임을 인정했습니다.',
        takeaway:
          '층간소음 피해를 당하는 입장에서는 소음의 반복성, 고의성, 시간대를 기록해두는 것이 중요합니다. 단순 소음 분쟁이 아니라 스토킹범죄로 접근할 수 있으면 형사적으로 강력히 대응할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '층간소음 법적 기준치(43dB, 38dB)를 초과해야만 법적 대응이 가능한가요?',
        answer:
          '<strong>기준치 초과가 반드시 필요한 것은 아닙니다.</strong> 대법원은 소음이 "참을 한도"를 넘는지를 종합적으로 판단하므로, 기준치를 초과하지 않더라도 소음 발생 빈도, 시간대, 기간 등을 고려하여 법적 구제가 가능한 경우가 있습니다.',
      },
      {
        question: '층간소음 조정 신청은 무료인가요?',
        answer:
          '<strong>환경부 층간소음이웃사이센터와 환경분쟁조정위원회 조정은 무료입니다.</strong> 다만 법원을 통한 민사 조정은 소액의 수수료가 발생합니다. 조정이 성립되면 법원 판결과 동일한 효력을 가집니다.',
      },
      {
        question: '윗집이 "나도 피해자다"라고 주장하면 어떻게 되나요?',
        answer:
          '<strong>쌍방 피해 주장이 있을 수 있어 이웃사이센터에서 쌍방 소음 측정을 진행하기도 합니다.</strong> 이 경우 객관적인 측정 데이터가 더욱 중요합니다. 피해 발생 이전부터 소음 기록을 해둬야 "먼저 피해를 받은 쪽"을 입증할 수 있습니다.',
      },
      {
        question: '임대 아파트에 살고 있는데 집주인에게도 책임을 물을 수 있나요?',
        answer:
          '<strong>일반적으로 임대인은 세입자의 소음 행위에 직접 책임을 지지 않습니다.</strong> 다만 집주인이 소음 문제를 알면서도 세입자에게 아무런 조치를 취하지 않은 경우, 임대차 계약상 의무 위반을 주장할 여지가 있습니다. 주된 책임은 소음을 발생시킨 위층 세입자 본인에게 있습니다.',
      },
      {
        question: '이사를 가고 싶은데 이사비를 위층으로부터 받을 수 있나요?',
        answer:
          '<strong>소음으로 인해 어쩔 수 없이 이사를 간 경우, 이사 비용을 손해배상 청구에 포함시킬 수 있습니다.</strong> 다만 법원에서 인정받으려면 소음과 이사 사이의 인과관계(소음 때문에 거주를 계속할 수 없었음)를 입증해야 합니다. 의사 소견서, 소음 기록 등이 중요합니다.',
      },
    ],
    cta: {
      text: '층간소음 법적 대응 AI 상담',
      link: '/chat?domain=neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 신고부터 조정까지 절차', href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure' },
      { label: '층간소음 항의하다 고소당하는 경우', href: '/guide/neighbor-dispute/noise-complaint-leads-to-counter-lawsuit' },
      { label: '층간소음 피해 어디부터 시작해야 하나', href: '/guide/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '이웃 간 소음 손해배상 청구 방법', href: '/guide/neighbor-dispute/neighbor-noise-damage-claim' },
    ],
  },

  // ───────────────────────────────────────────
  // 12. neighbor-dispute / floor-noise-report-to-mediation-procedure
  // ───────────────────────────────────────────
  {
    domain: 'neighbor-dispute',
    slug: 'floor-noise-report-to-mediation-procedure',
    keyword: '층간소음 신고 조정 절차',
    questionKeyword: '층간소음 피해를 신고하면 어떤 절차로 진행되나요?',
    ctaKeyword: '층간소음 조정 신청',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '층간소음 피해 신고에서 조정까지 5단계 절차 | 로앤가이드',
      description:
        '층간소음 피해를 신고하고 싶은데 어떤 기관에 어떻게 진행해야 할지 막막하다면 신고부터 조정 결과까지 지금 확인하세요.',
    },
    intro:
      '<p>층간소음으로 고통받고 있는데 막상 어디에 신고해야 할지 모르겠습니다. 이웃사이센터, 환경분쟁조정위원회, 법원 조정 등 여러 기관이 있어서 더 헷갈립니다. 어떤 순서로, 어느 기관에 신고해야 가장 빠르고 효과적으로 해결할 수 있는지 알고 싶습니다.</p>',
    timelineSteps: [
      '1단계: 소음 기록 및 증거 수집',
      '2단계: 층간소음이웃사이센터 상담·측정',
      '3단계: 관리사무소·경찰 신고',
      '4단계: 환경분쟁조정위원회 조정 신청',
      '5단계: 조정 결과 수령 및 법원 소송 검토',
    ],
    sections: [
      {
        title: '1~2단계: 소음 기록과 이웃사이센터 활용',
        content:
          '<p><strong style="color:#1e3a5f">공식 절차를 시작하기 전에 소음 기록과 이웃사이센터 측정을 먼저 진행해야 합니다. 이것이 이후 모든 절차의 기초가 됩니다</strong></p>\n<ul>\n<li><strong>1단계 — 소음 기록 수집</strong>: 소음 측정 앱으로 날짜·시간·dB 수치를 기록합니다. 스마트폰 녹음, 영상 촬영, 항의 문자 내역을 보관합니다. 최소 2~4주간의 기록이 있어야 "지속적 피해"를 입증할 수 있습니다</li>\n<li><strong>2단계 — 층간소음이웃사이센터 신청</strong>: 전화(1661-2642) 또는 온라인으로 상담 및 현장 방문 측정을 신청합니다. 센터 전문가가 현장에 방문하여 소음을 공식 측정해줍니다. 측정 비용은 무료입니다. 측정 결과가 담긴 보고서를 발급받아 보관하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">준비물: 소음 측정 기록 + 이웃사이센터 측정 보고서 + 항의 내역</blockquote>',
      },
      {
        title: '3단계: 관리사무소·경찰 신고',
        content:
          '<p><strong style="color:#1e3a5f">이웃사이센터 측정 이후에도 소음이 계속된다면 관리사무소와 경찰을 통한 공식 개입이 필요합니다</strong></p>\n<ul>\n<li><strong>관리사무소 공문 요청</strong>: 관리사무소에 공식 민원을 제기하고, 위층에 서면 경고문을 발송해달라고 요청합니다. 관리 규약 위반 시 과태료 부과가 가능한 경우도 있습니다</li>\n<li><strong>경찰(112) 신고</strong>: 야간 소음이 심하거나 위층이 고의적으로 소음을 발생시킨다고 판단되면 112에 신고합니다. 경찰이 현장에 방문하면 위층에 상당한 압박이 됩니다. 출동 기록도 향후 증거로 활용됩니다</li>\n<li><strong>지자체 소음 민원</strong>: 지방자치단체 민원 창구(120 또는 시·구청 민원)에 소음 피해 민원을 접수할 수 있습니다. 자치단체에 따라 소음 담당 부서에서 직접 지도·단속을 나오기도 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4~5단계: 환경분쟁조정위원회 조정과 법원 소송',
        content:
          '<p><strong style="color:#1e3a5f">자체적 해결이 안 된다면 환경분쟁조정위원회나 법원을 통한 공식 분쟁해결 절차를 밟아야 합니다</strong></p>\n<ul>\n<li><strong>4단계 — 환경분쟁조정위원회 조정 신청</strong>: 중앙환경분쟁조정위원회(국번 없이 1661-4006) 또는 지방환경분쟁조정위원회에 신청합니다. 신청 수수료는 무료이며, 위원회가 쌍방을 소환하여 조정을 진행합니다. 조정 기간은 통상 3~6개월입니다. 조정이 성립되면 재판상 화해와 동일한 효력이 있습니다</li>\n<li><strong>5단계 — 법원 소송 또는 조정 신청</strong>: 환경분쟁 조정이 불성립되거나 피해 규모가 크다면 민사소송을 제기합니다. 법원에 직접 조정을 신청하는 방법(민사조정)도 있으며, 청구 금액 3,000만 원 이하는 소액심판 절차를 이용합니다</li>\n</ul>\n<p>대법원 2014다57846 사건에서 법원은 소음이 "참을 한도"를 넘는지는 소음의 성질과 정도, 피해이익의 공공성, 가해행위의 태양 등을 종합하여 판단해야 한다고 판시하였습니다. 거실 창호를 개방한 상태에서 측정한 실내 소음도를 기준으로 합니다.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">절차 요약: 이웃사이센터 → 관리사무소/경찰 → 환경분쟁 조정 → (실패 시) 법원 소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '도로소음 "참을 한도" 판단 기준 — 대법원 2014다57846',
        summary:
          '대법원 2014다57846 사건(대법원, 2016.11.25 선고)에서 법원은 소음이 민법 제217조의 생활방해에 해당하며, 이웃 거주자는 이웃 토지의 통상적 용도에 적당한 소음은 인용할 의무가 있다고 판시했습니다. "참을 한도"를 넘는지는 소음으로 인한 피해의 성질과 정도, 공공성, 방지 가능성 등을 종합적으로 고려해야 하며, 환경기준 초과만으로 바로 위법하다고 단정할 수 없다고 하였습니다.',
        takeaway:
          '층간소음 분쟁에서는 단순히 기준치를 넘겼느냐보다, 소음의 지속 기간, 발생 시간대(야간 여부), 피해자가 입은 신체·정신적 피해를 종합적으로 입증하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '이웃사이센터 측정 후 위층이 거부하면 어떻게 되나요?',
        answer:
          '<strong>이웃사이센터의 측정이나 조정은 강제력이 없어 위층이 거부하면 진행이 어렵습니다.</strong> 이 경우 측정 신청 사실과 위층의 거부 행위 자체가 협조 의무 불이행의 증거가 되므로 기록해두세요. 이후 환경분쟁조정위원회나 법원 절차에서 유리하게 작용할 수 있습니다.',
      },
      {
        question: '환경분쟁조정위원회 조정에서 위층이 합의를 거부하면 어떻게 되나요?',
        answer:
          '<strong>조정 불성립이 되면 위원회가 조정을 종료하고 민사소송을 선택할 수 있습니다.</strong> 위원회가 조정안을 제시했는데 위층이 거부한 경우, 그 사실을 소송에서 활용하여 위층의 비협조적 태도를 증거로 제출할 수 있습니다.',
      },
      {
        question: '층간소음 조정 신청은 몇 층까지 가능한가요? 윗집뿐 아니라 옆집 소음도 신청할 수 있나요?',
        answer:
          '<strong>층간소음이웃사이센터와 환경분쟁조정위원회는 공동주택에서 발생하는 소음이면 층간 소음뿐 아니라 옆집 소음도 포함하여 신청 가능합니다.</strong> 단, 층간소음 기준은 위아래층 기준이며 옆집 소음은 다른 기준이 적용될 수 있습니다.',
      },
      {
        question: '세입자인데 집주인이 문제를 해결해주지 않으면 어떻게 하나요?',
        answer:
          '<strong>세입자도 직접 이웃사이센터와 환경분쟁조정위원회에 신청할 수 있습니다.</strong> 집주인이 아무 조치도 취하지 않는다면, 임대차 계약상 집주인의 주거 환경 유지 의무 위반을 이유로 차임 감액 청구나 계약 해지를 요청할 수도 있습니다.',
      },
    ],
    cta: {
      text: '층간소음 조정 절차 AI 상담',
      link: '/chat?domain=neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '윗집 층간소음 대처법', href: '/guide/neighbor-dispute/unbearable-upstairs-noise-response' },
      { label: '층간소음 항의하다 고소당하는 경우', href: '/guide/neighbor-dispute/noise-complaint-leads-to-counter-lawsuit' },
      { label: '층간소음 피해 어디부터 시작해야 하나', href: '/guide/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '이웃 간 분쟁 손해배상 청구', href: '/guide/neighbor-dispute/neighbor-noise-damage-claim' },
    ],
  },

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
          '<p><strong style="color:#1e3a5f">정당한 소음 항의라도 방법에 따라 형사 고소의 대상이 될 수 있습니다. 어떤 행위가 법적으로 문제가 되는지 알아야 합니다</strong></p>\n<ul>\n<li><strong>협박죄(형법 제283조)</strong>: "계속 시끄럽게 하면 가만히 안 두겠다", "다음엔 경찰서에서 만나자" 같은 말이 협박으로 해석될 수 있습니다. 상대방이 두려움을 느낄 정도의 해악을 고지하면 협박죄가 성립됩니다</li>\n<li><strong>주거침입죄(형법 제319조)</strong>: 위층 문을 강제로 열거나 동의 없이 들어간 경우 주거침입죄가 됩니다. 출입구 앞에 머무르며 통행을 막는 행위도 문제가 될 수 있습니다</li>\n<li><strong>명예훼손·모욕죄</strong>: 엘리베이터·복도에 위층을 비방하는 내용의 전단지를 붙이거나, SNS에 위층 정보와 함께 비방 글을 올리면 명예훼손죄 또는 모욕죄가 성립할 수 있습니다</li>\n<li><strong>스토킹범죄</strong>: 위층 문 앞에 반복적으로 찾아가거나, 문자를 수십 통씩 보내거나, 위층의 의사에 반하여 접촉을 반복하는 경우 스토킹범죄로 처벌받을 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 항의 자체는 정당하지만, 방법이 협박·위협·반복 접촉으로 변질되면 형사 처벌 대상</blockquote>',
      },
      {
        title: '위층의 맞고소에 대한 초기 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">고소를 당하면 당황하지 말고, 자신의 행위가 정당한 범위였음을 입증하는 데 집중해야 합니다</strong></p>\n<ul>\n<li><strong>경찰 조사 시 진술 주의</strong>: 경찰 조사에서 섣불리 모든 사실을 인정하지 마세요. 특히 "무서우라고 한 것"이 아니라 "소음 문제를 해결하기 위한 것"이었다는 점을 분명히 진술합니다. 조사 전에 변호사 조언을 받는 것이 좋습니다</li>\n<li><strong>정당한 항의임을 입증</strong>: 이웃사이센터 측정 결과, 소음 발생 기록, 관리사무소 민원 이력 등을 제출하여 소음 피해가 실재했음을 입증합니다. 정당한 이유가 있는 항의였음을 강조하세요</li>\n<li><strong>반소(맞고소) 검토</strong>: 위층의 소음 행위가 오랫동안 계속된 불법 행위라면, 소음 피해에 대한 손해배상 청구 또는 형사 고소를 검토할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '앞으로 법적 범위 안에서 항의하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">이미 고소를 당했거나 고소가 두려운 상황이라면, 이후 항의는 반드시 법적 범위 안에서 해야 합니다</strong></p>\n<ul>\n<li><strong>서면·문자로만 항의</strong>: 직접 찾아가는 대신 내용증명 우편이나 문자·카카오톡으로 항의합니다. 위협적 표현 없이 "○월 ○일 ○시에 층간소음이 발생하여 수면을 방해받았습니다"처럼 사실 중심으로 작성하세요</li>\n<li><strong>제3자를 통한 간접 소통</strong>: 관리사무소, 이웃사이센터, 조정위원회를 통해 간접적으로 소통하면 직접 접촉으로 인한 분쟁을 예방할 수 있습니다</li>\n<li><strong>CCTV 설치와 블랙박스 활용</strong>: 공용부분(복도, 현관 앞)에 위층의 보복성 행위가 있을 경우에 대비하여 녹화 장치를 준비합니다. 위층이 오히려 내려와서 위협하는 경우를 대비하는 것입니다</li>\n<li><strong>접근 금지 가처분</strong>: 위층이 아래층에 내려와 위협하거나 반복적으로 찾아온다면, 법원에 접근 금지 가처분을 신청하여 물리적 거리를 확보할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">원칙: 직접 접촉 최소화 → 서면·기관 경유 소통 → 모든 소통 내역 보관</blockquote>',
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
          '<strong>무고죄(형법 제156조)는 상대방이 허위 사실로 고소했음이 입증되어야 성립합니다.</strong> 단순히 고소 내용이 인정되지 않아 불기소 처분이 됐다고 자동으로 무고죄가 되지는 않습니다. 상대방이 사실을 알면서도 허위로 고소했다는 점을 입증해야 합니다.',
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
  // ───────────────────────────────────────────
  {
    domain: 'neighbor-dispute',
    slug: 'floor-noise-victim-where-to-start',
    keyword: '층간소음 피해 어디부터 시작해야 하나',
    questionKeyword: '층간소음 피해를 받고 있는데 처음에 무엇부터 해야 하나요?',
    ctaKeyword: '층간소음 대응 시작',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '층간소음 피해 처음 대응 어디서부터 시작할까 | 로앤가이드',
      description:
        '층간소음 피해가 처음인데 어디에 신고하고 뭘 먼저 해야 할지 모르겠다면 첫 번째 행동부터 법적 대응까지 지금 확인하세요.',
    },
    intro:
      '<p>위층 소음이 이제는 참기 힘든 수준인데, 처음이라 어디에 신고해야 할지조차 모르겠습니다. 친구들에게 물어보면 다들 말이 다르고, 인터넷을 찾아봐도 기관이 너무 많아 혼란스럽습니다. 지금 당장 무엇을 해야 가장 효과적으로 해결할 수 있는지 알고 싶습니다.</p>',
    sections: [
      {
        title: '지금 당장 해야 할 첫 번째 행동 3가지',
        content:
          '<p><strong style="color:#1e3a5f">복잡하게 생각하지 마세요. 층간소음 피해를 처음 받았다면 지금 당장 이 3가지부터 시작하세요. 순서가 중요합니다</strong></p>\n<ul>\n<li><strong>1. 소음 기록 시작</strong>: 오늘부터 바로 스마트폰 소음 측정 앱을 설치하고 소음이 날 때마다 날짜, 시간, dB 수치를 기록합니다. 말로만 "시끄러웠다"는 것은 증거가 되지 않습니다. 앱 추천: 노이즈미터, dB 소음 측정기 등 무료 앱 활용 가능</li>\n<li><strong>2. 관리사무소에 민원 접수</strong>: 아파트·빌라에 관리사무소가 있다면 오늘 방문하거나 전화로 층간소음 민원을 접수합니다. "윗집이 시끄러운데 공문을 보내달라"고 요청하세요. 관리사무소 민원 접수 이력이 향후 절차에서 중요한 기록이 됩니다</li>\n<li><strong>3. 이웃사이센터에 상담 신청</strong>: 층간소음이웃사이센터(1661-2642)에 전화하거나 온라인으로 상담 및 현장 측정을 신청합니다. 전문가가 무료로 소음을 측정해주는 공식 기관입니다. 이 측정 결과가 이후 조정·소송에서 핵심 증거가 됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">우선순위: 소음 기록 → 관리사무소 민원 → 이웃사이센터 측정 신청</blockquote>',
      },
      {
        title: '1~2주 후: 소음이 계속될 때 다음 단계',
        content:
          '<p><strong style="color:#1e3a5f">소음 기록을 시작하고 관리사무소·이웃사이센터를 통해 조치를 취했는데도 소음이 계속된다면 다음 단계로 나아가야 합니다</strong></p>\n<ul>\n<li><strong>직접 항의(선택 사항)</strong>: 위층에 직접 찾아가서 조용히 부탁할 수 있습니다. 다만 항의 과정에서 감정적이 되거나 위협적인 언행이 나오면 오히려 역고소를 당할 수 있습니다. 직접 방문 시에는 조용하고 차분하게 사실만 전달하세요. 이후에는 직접 접촉보다 서면이나 기관을 통한 소통을 권합니다</li>\n<li><strong>야간 소음은 112 신고</strong>: 밤 11시 이후 소음이 심하면 경찰(112)에 신고합니다. 경찰이 방문하면 위층에 즉각적인 경고가 됩니다. 출동 횟수와 일시를 기록해두세요</li>\n<li><strong>지자체 소음 담당 부서</strong>: 시·구청 환경 담당 부서에 소음 민원을 접수할 수 있습니다. 일부 지자체는 소음 측정 장비를 무료로 대여해주거나 직접 측정을 나오기도 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '한 달 이상 해결 안 될 때: 공식 조정과 법적 대응',
        content:
          '<p><strong style="color:#1e3a5f">한 달 이상 소음이 계속되고 자체 해결이 안 된다면, 공식 조정 절차와 법적 대응을 준비해야 합니다</strong></p>\n<ul>\n<li><strong>환경분쟁조정위원회 조정 신청</strong>: 중앙환경분쟁조정위원회(1661-4006) 또는 지방위원회에 분쟁 조정을 신청합니다. 무료이며 위원회가 중립적 입장에서 합의를 유도합니다. 조정 성립 시 법원 판결과 동일한 효력이 있습니다</li>\n<li><strong>내용증명 발송</strong>: 변호사 또는 직접 내용증명 우편을 위층에 발송합니다. 소음 발생 일시, 피해 내용, 중단 요구, 불응 시 법적 조치를 취하겠다는 내용을 포함합니다. 내용증명은 상대방에게 심리적 압박이 되고, 소송 전 예고 수단으로 활용됩니다</li>\n<li><strong>민사소송 제기</strong>: 조정이 실패하거나 피해 규모가 크다면 손해배상 청구 소송을 제기합니다. 소음 기록, 이웃사이센터 측정 결과, 진단서, 관리사무소 민원 이력이 주요 증거로 활용됩니다. 청구 금액 3,000만 원 이하라면 소액심판을 이용해 비용을 절감할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">단계별 원칙: 기록 → 공식 측정 → 조정 → 내용증명 → 소송 순서로 단계적으로 접근</blockquote>',
      },
      {
        title: '층간소음 기관별 역할 정리',
        content:
          '<p><strong style="color:#1e3a5f">기관마다 할 수 있는 것과 없는 것이 다릅니다. 상황에 맞는 기관을 선택하세요</strong></p>\n<ul>\n<li><strong>층간소음이웃사이센터 (1661-2642)</strong> — 소음 현장 측정, 상담, 조정(강제력 없음). 무료</li>\n<li><strong>환경분쟁조정위원회 (1661-4006)</strong> — 조정 진행, 조정 성립 시 법적 효력. 무료</li>\n<li><strong>관리사무소</strong> — 공문 발송, 규약 위반 시 과태료. 무료</li>\n<li><strong>경찰 (112)</strong> — 야간 소음 단속, 현장 출동, 경고. 무료</li>\n<li><strong>지방자치단체 환경 부서</strong> — 소음 측정 지원, 행정 지도. 무료</li>\n<li><strong>법원</strong> — 민사 조정, 소액심판, 손해배상 소송. 인지대 등 비용 발생</li>\n</ul>\n<p>처음에는 무료 기관을 최대한 활용하고, 자체 해결이 안 될 때 법원 절차로 넘어가는 것이 비용 측면에서 효율적입니다.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">무료 기관 최대 활용 후 → 해결 안 되면 법원 절차로 단계 상승</blockquote>',
      },
    ],
    cases: [
      {
        title: '층간소음 "참을 한도" 종합 판단 기준 — 대법원 2014다57846',
        summary:
          '대법원 2014다57846 사건(대법원, 2016.11.25 선고)에서 법원은 소음이 민법 제217조의 생활방해에 해당하며, 이웃 거주자는 통상의 용도에 적당한 소음은 인용할 의무가 있다고 판시했습니다. 다만 "참을 한도"를 넘는지는 소음의 성질·정도, 피해이익의 공공성, 가해행위의 태양, 방지 가능성 등을 종합 고려하여 판단해야 하며, 환경기준 초과만으로 바로 위법하다고 단정할 수 없다고 하였습니다.',
        takeaway:
          '층간소음 피해를 주장할 때는 소음 측정치뿐 아니라 피해 기간의 장기성, 야간·주말 집중 여부, 반복성 등을 함께 입증하면 "참을 한도" 초과를 인정받을 가능성이 높아집니다.',
      },
    ],
    faq: [
      {
        question: '이웃사이센터 측정과 지자체 측정 중 어느 것이 더 효력이 있나요?',
        answer:
          '<strong>둘 다 공신력 있는 기관의 측정으로 법적 증거로 활용할 수 있습니다.</strong> 이웃사이센터는 환경부 산하 기관이며, 지자체 측정도 공공기관의 측정이므로 증거 효력에는 큰 차이가 없습니다. 가능하면 두 기관 모두 측정을 받아두는 것이 유리합니다.',
      },
      {
        question: '몇 dB 이상이면 법적으로 문제가 되나요?',
        answer:
          '<strong>공동주택 층간소음의 법적 기준은 직접 충격소음 주간 43dB, 야간 38dB입니다(공동주택 층간소음의 범위와 기준에 관한 규칙).</strong> 그러나 법원은 기준치 초과 여부만이 아니라 피해의 전체적인 상황을 종합하여 판단하므로, 기준치 이하라도 피해 입증이 가능한 경우가 있습니다.',
      },
      {
        question: '임대 아파트(임차인)인데 직접 조정 신청을 할 수 있나요?',
        answer:
          '<strong>임차인(세입자)도 직접 이웃사이센터에 측정 신청과 환경분쟁조정위원회에 조정 신청을 할 수 있습니다.</strong> 집주인의 동의가 필요하지 않습니다. 다만 손해배상 소송은 직접 거주하며 피해를 입은 임차인 본인이 원고가 됩니다.',
      },
      {
        question: '이웃사이센터에 신청했는데 대기가 너무 길면 어떻게 하나요?',
        answer:
          '<strong>이웃사이센터 대기가 길면 지자체 소음 담당 부서에 병행하여 신청하는 것이 좋습니다.</strong> 그 사이에도 소음 측정 앱으로 자체 기록을 계속하고, 관리사무소와 경찰 신고 등 다른 수단을 병행하세요. 이웃사이센터 신청 접수 날짜 자체도 기록으로 의미가 있습니다.',
      },
      {
        question: '층간소음으로 불면증이 생겨 병원 치료를 받고 있습니다. 치료비를 청구할 수 있나요?',
        answer:
          '<strong>층간소음과 불면증·우울증 등 건강 피해 사이의 인과관계가 인정되면 치료비도 손해배상에 포함됩니다.</strong> 의사로부터 "층간소음으로 인한 수면장애"라는 소견이 담긴 진단서를 받아두세요. 소음 기록 시작 시점부터 치료 시작 시점이 연속적이면 인과관계 입증이 수월합니다.',
      },
    ],
    cta: {
      text: '층간소음 피해 첫 대응 AI 상담',
      link: '/chat?domain=neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '윗집 층간소음 대처법', href: '/guide/neighbor-dispute/unbearable-upstairs-noise-response' },
      { label: '층간소음 신고부터 조정까지 절차', href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure' },
      { label: '층간소음 항의하다 고소당하는 경우', href: '/guide/neighbor-dispute/noise-complaint-leads-to-counter-lawsuit' },
      { label: '이웃 간 분쟁 손해배상 청구', href: '/guide/neighbor-dispute/neighbor-noise-damage-claim' },
    ],
  },
];
