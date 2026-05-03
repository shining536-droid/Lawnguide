import { SpokePage } from '../spoke-pages';

// batch53 fraud 5개: 부동산 이중계약 + 결혼정보회사 신원사기 + 명품 가품 사기 + 채용 보증금 사기 + 코인 P2P/OTC 사기
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 매도인이 같은 부동산을 다른 매수인과 이중계약해 계약금이 묶인 매수인이 가압류·계약금 회수·사기 고소 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 결혼정보회사가 회원 신원·재산·직업을 허위로 매칭한 결과 결혼·교제 손해를 본 회원이 KCA 피해구제 + 표시광고법 + 사기 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 온라인·라이브커머스에서 명품을 정품이라 속아 산 피해자가 KCA 피해구제 + 차지백 + 상표법·관세법 위반 신고 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 채용 합격 후 보증금·교육비·장비비 명목으로 송금했다가 잠적당한 구직자가 노동청 신고 + KCA + 사기 고소 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 코인 P2P·OTC 직거래에서 입금만 받고 코인을 보내지 않거나 차명 계좌를 이용한 거래에 휘말린 피해자가 거래소 동결 요청·사기·자금세탁방지법 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch53Fraud: SpokePage[] = [
  // ─── 1. fraud / real-estate-deposit-double-contract ───
  {
    domain: 'fraud',
    slug: 'fraud-real-estate-deposit-double-contract',
    keyword: '부동산 이중계약 사기 계약금 회수',
    questionKeyword: '아파트 매매계약하고 계약금 5천만원 송금했는데, 알고 보니 매도인이 다른 사람과 또 계약했어요. 회수 가능한가요?',
    ctaKeyword: '부동산 이중계약 계약금 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부동산 이중계약 사기 — 계약금 회수 5단계 정리 | 로앤가이드',
      description:
        '매도인이 동일 부동산을 이중매매해 계약금이 묶였다면 가압류 + 사기 고소 + 배액 배상 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"매도인과 정식 매매계약을 체결하고 계약금 5천만원을 송금했어요. 며칠 뒤 등기부등본을 떼어보니 같은 매도인이 다른 사람과 더 비싼 가격에 또 계약했더라고요. 매도인은 &lsquo;계약금 배액 돌려주면 되지 않느냐&rsquo;며 잠적했습니다." 부동산 이중계약(이중매매)은 매도인의 사기 고의가 입증되면 단순 채무불이행을 넘어 형사 사기·배임죄 검토가 가능한 영역입니다. 등기 이전 전에 가압류로 매도인 재산을 보전하고, 형사 + 민사 + 배액 배상을 동시 검토해볼 수 있어요. 등기부등본·계약서·송금 내역 확보가 출발점입니다.</p>',
    sections: [
      {
        title: '이중계약 사기 vs 단순 계약 변심 구분 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 2개 이상이면 사기 + 배임 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>두 번째 계약이 첫 계약 후 단기간(1~2주) 내</strong> — 첫 계약 당시 이미 더 비싼 매수자를 찾고 있었다는 정황. 사기 고의 입증의 핵심.</li>\n<li><strong>두 번째 매수자가 더 높은 가격</strong> — 시세 차익 노린 의도적 이중매매. 배임죄(형법 제355조 제2항) 검토 영역.</li>\n<li><strong>중도금·잔금 지급 전 등기 이전 시도</strong> — 첫 매수자 모르게 두 번째 매수자에게 등기 이전. 부동산실명법 + 사기 + 배임 결합.</li>\n<li><strong>매도인 연락 두절·잠적</strong> — 계약금 반환 거부 + 연락 차단은 사기 고의 정황.</li>\n<li><strong>중개인·법무사도 함께 가담</strong> — 같은 중개인이 두 매수자 모두에게 계약 알선. 공동 책임 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 제355조 제2항 배임죄(매도인은 매수인에게 등기 이전 협력 의무). 이득액 5억원 이상이면 특정경제범죄가중처벌법 적용. 민법 제565조 계약금 배액상환과 별개로 형사 책임은 유지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">법원·KLAC·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부등본·계약서·송금 영수증 확보 (당일 내)</strong> — 인터넷 등기소(iros.go.kr)에서 부동산 등기부등본 발급, 두 번째 매수자 등기 이전 여부 확인. 계약서 원본·송금 내역·매도인 카톡 캡처.</li>\n<li><strong>2단계 — 부동산 가압류 신청 (1주 내)</strong> — 매도인 명의 부동산·예금에 가압류. 두 번째 매수자가 이미 등기 이전했어도 그 매도대금에 가압류 가능. 변호사 또는 KLAC 132 무료 상담 후 진행.</li>\n<li><strong>3단계 — 처분금지가처분 (등기 이전 직전)</strong> — 두 번째 매수자에게 등기가 아직 안 갔으면 처분금지가처분으로 등기 이전 자체를 막을 수 있어요. 시간 싸움.</li>\n<li><strong>4단계 — 사기·배임 형사 고소 (ECRM 또는 경찰서 직접)</strong> — ecrm.police.go.kr 또는 관할 경찰서. 사기 + 배임 병합 고소. 매도인 부동산 시가·차익을 입증.</li>\n<li><strong>5단계 — 민사: 계약금 배액 + 손해배상 청구</strong> — 민법 제565조에 따라 매도인이 해약하려면 계약금 배액(2배) 반환. 추가 손해(중개수수료·이사비·시세 차이)는 별도 청구 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약 단계·등기 진행 여부에 따라 가압류·가처분 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">가압류·고소·민사에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>매매계약서 원본 + 인감증명서</strong> — 매도인·매수인·중개인 서명 일자.</li>\n<li><strong>계약금 송금 영수증·이체확인서</strong> — 송금 일자·금액·수신 계좌.</li>\n<li><strong>부동산 등기부등본</strong> — 인터넷 등기소(iros.go.kr) 발급. 두 번째 매수자 등기 이전 여부 확인.</li>\n<li><strong>매도인과의 카톡·문자·통화녹취</strong> — 이중계약 사실 인지 후 매도인 응대·연락 두절 시점.</li>\n<li><strong>중개인 명함·중개수수료 영수증</strong> — 중개인 가담 여부 입증.</li>\n<li><strong>가압류 신청서 + 보전소명자료</strong> — 법원 양식 또는 KLAC 132 무료 상담 후.</li>\n<li><strong>두 번째 계약 정황 자료</strong> — 매도인이 두 번째 매수자에게 더 비싼 가격으로 매매한 정황(공인중개사 진술서·등기부 매매가).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "계약금만 돌려받으면 된다"고 미루다가 매도인이 두 번째 매수자에게 등기를 넘기고 매도대금까지 다른 곳으로 옮기면 회수가 어려워집니다. 등기 이전 전 가처분이 결정적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 부동산 이중계약 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"민법 제565조에 따라 계약금 배액만 돌려주면 끝"</strong> — 민사상 해약은 그렇지만 형사 사기·배임은 별개. 매도인이 처음부터 이중매매 의도였다면 사기죄 성립 가능성이 있어요.</li>\n<li><strong>"두 번째 매수자에게 등기가 갔으니 회수 불가"</strong> — 두 번째 매수자가 이중매매 사실을 알고 매수했다면(악의) 등기 무효화 가능. 첫 매수자가 진정한 권리자.</li>\n<li><strong>"매도인이 잠적했으니 형사로만 가자"</strong> — 형사 + 민사 + 가압류 동시 진행이 회수에 유리. 형사 진행 중에도 민사 가압류는 가능.</li>\n<li><strong>"중개인은 책임 없다"</strong> — 중개인이 이중계약 사실을 알고도 중개했다면 공인중개사법 위반 + 손해배상 책임. 한국공인중개사협회에 신고도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 경찰청 ECRM(ecrm.police.go.kr) / 한국공인중개사협회 / 법원 인터넷등기소(iros.go.kr) / 한국소비자원 1372 / 범죄피해자지원센터 1577-1295.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보처리장치 입력 매개 기망과 사람에 대한 사기죄',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 등 정보처리장치에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 직접적인 대상으로 한 것이 아니더라도, 그러한 행위로 인한 정보처리의 결과를 통해 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. 부동산 이중계약 사기에서도 매도인이 등기 신청·계약서 작성 시점에 이미 다른 매수자와 더 비싼 가격에 매매할 의도를 가졌다면 첫 매수자에 대한 기망 구조가 성립할 수 있다는 시사점이 있습니다.',
        takeaway: '부동산 이중계약은 매도인의 처음부터의 사기 의도가 입증되면 단순 채무불이행을 넘어 사기·배임으로 평가될 수 있어, 계약 시점·두 번째 계약 시점·등기 시도 흐름을 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '두 번째 매수자에게 이미 등기가 넘어갔는데 회수 가능한가요?',
        answer:
          '<strong>두 번째 매수자가 이중매매 사실을 알고 매수한 악의자라면 등기 무효 주장 가능합니다.</strong> 매도인·중개인 진술, 시세보다 비싼 가격, 짧은 등기 이전 시점 등이 악의 입증의 단서. 모르는 선의자라면 계약금 배액 + 손해배상이 메인 트랙.',
      },
      {
        question: '계약금만 받았는데 가압류가 가능한가요?',
        answer:
          '<strong>계약금 배액(2배) + 손해배상 청구액 기준으로 가압류 가능합니다.</strong> 매도인의 부동산·예금·차량·매도대금 수령 계좌 모두 가압류 대상. 매도인이 두 번째 매수자에게 받은 매도대금도 추적 가능.',
      },
      {
        question: '중개인에게도 책임을 물을 수 있나요?',
        answer:
          '<strong>이중계약 사실을 알고 중개했다면 공인중개사법 위반 + 손해배상 책임이 인정될 가능성이 있어요.</strong> 한국공인중개사협회 신고 + 손해배상 청구. 모르고 중개했다면 책임이 줄어들 수 있어요.',
      },
      {
        question: '계약금 영수증이 없으면 어떻게 입증하나요?',
        answer:
          '<strong>계좌이체 내역·문자·카톡으로 송금 사실 입증 가능합니다.</strong> 영수증보다 송금 기록이 더 강한 증거. 계약서 원본 + 송금 내역 + 매도인 인정 발언만 있으면 충분.',
      },
      {
        question: '형사 고소부터 해야 하나요, 민사부터 해야 하나요?',
        answer:
          '<strong>가압류 → 형사 + 민사 동시 진행이 일반적입니다.</strong> 가압류로 재산 보전 → 형사 고소로 매도인 압박 → 민사로 배액 + 손해배상. 순서보다 동시성이 회수에 유리.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '부동산 임대 보증금 사기 대응', href: '/guide/fraud/fraud-rental-deposit-scam-prevention' },
      { label: '공인중개사 보증금 횡령', href: '/guide/fraud/fraud-realtor-deposit-embezzlement' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '사기 형사 부대 배상명령', href: '/guide/fraud/fraud-victim-criminal-attached-civil-claim' },
    ],
  },

  // ─── 2. fraud / marriage-info-pretender ───
  {
    domain: 'fraud',
    slug: 'fraud-marriage-info-pretender',
    keyword: '결혼정보회사 신원 허위 사기',
    questionKeyword: '결혼정보회사에서 매칭된 상대가 직업·재산·이혼 사실을 모두 속였어요. 회비 환불과 손해배상 가능한가요?',
    ctaKeyword: '결혼정보회사 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '결혼정보회사 신원 허위 사기 — KCA 피해구제 4단계 | 로앤가이드',
      description:
        '결혼정보회사가 회원 직업·재산·결혼이력을 허위로 매칭했다면 KCA 피해구제 + 표시광고법 + 사기 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"결혼정보회사에 500만원 회비를 내고 매칭받은 상대가 &lsquo;대기업 부장·연봉 1억&rsquo;이라더니, 알고 보니 무직에 이혼 경력 2회였어요. 회사에 환불 요청했더니 &lsquo;본인 책임&rsquo;이라며 거절합니다." 결혼정보회사가 회원 신원·재산을 검증하지 않거나 허위 정보로 매칭한 경우는 단순 분쟁을 넘어 사기·표시광고법 위반 검토가 가능한 영역입니다. 회비 환불은 KCA 피해구제·차지백 트랙, 정신적 손해는 민사 손해배상으로 갈리고, 회사가 신원 검증 의무를 다했는지가 다툼의 핵심이에요.</p>',
    sections: [
      {
        title: 'Q. 결혼정보회사 사기 vs 정상 분쟁 구분 5가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2개 이상이면 사기·표시광고법 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>"VIP·프리미엄·검증완료" 등 광고 후 검증 부실</strong> — 회사가 광고에서 약속한 신원·재산 검증을 실제로는 안 한 정황. 표시광고법 제3조 위반.</li>\n<li><strong>매칭 상대 직업·재산·결혼이력이 모두 허위</strong> — 단순 외모 차이가 아닌 핵심 정보 허위.</li>\n<li><strong>같은 회사에서 동일한 가짜 회원에게 다수 피해 보고</strong> — 회사가 알고도 방치한 정황. 사기 방조 검토.</li>\n<li><strong>회비·매칭비 외 추가 결제 요구</strong> — 매칭 후 "VIP 등급 업그레이드" 명목 추가 결제 압박.</li>\n<li><strong>계약서·약관에 환불·검증 책임 면제 조항</strong> — 약관규제법 제6조 위반(부당 면책 조항). 무효 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 표시광고법 제3조(허위·과장 광고) + 약관규제법 제6조(면책 조항 무효) + 결혼중개업법(국제결혼은 신원확인서 의무).</blockquote>',
      },
      {
        title: 'Q. 환불·배상 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 책임 주체에 따라 4가지 트랙으로 갈립니다.</strong></p>\n<ul>\n<li><strong>회사 책임 → 회비 환불 + 위자료</strong> — 검증 의무 해태·허위 광고. KCA 피해구제 + 민사 청구.</li>\n<li><strong>매칭 상대 책임 → 사기·민사 손해배상</strong> — 매칭 상대 본인이 직업·재산·결혼이력 허위 신고. 사기죄 + 민사 청구.</li>\n<li><strong>금전 송금·결혼식 비용 → 사기 + 부당이득반환</strong> — 매칭 상대에 송금·결혼식 비용 부담했다면 사기로 회수. 결혼·동거 중 자금이라도 사기 의도 입증되면 회수 가능.</li>\n<li><strong>회비 카드 결제 → 차지백 + KCA</strong> — "재화 미제공·허위 광고" 사유로 카드사 차지백.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">책임 주체·결제 형태·송금 흐름에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 트랙을 동시에 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 즉시 보전 (당일 내)</strong> — 회사 광고·계약서·약관 + 매칭 상대 프로필·문자·녹취 + 회비 결제 영수증. 매칭 상대 신원 허위가 드러난 시점의 자료.</li>\n<li><strong>2단계 — KCA 피해구제 신청 (1372)</strong> — 한국소비자원 사전 상담 → 피해구제 신청. 자율 해결 30일 → 분쟁조정위 30일.</li>\n<li><strong>3단계 — 카드사 차지백 (결제 후 90일 내)</strong> — "재화 미제공·허위 광고" 사유로 이의제기. 회비 일부 회수 가능.</li>\n<li><strong>4단계 — 사기 고소 + 표시광고법 신고</strong> — 매칭 상대(개인) 사기 고소는 ECRM. 회사 표시광고법 위반은 공정거래위원회 1372/ftc.go.kr.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "본인이 결혼하기로 결정했으니 본인 책임"이라는 회사 주장에 위축되지 마세요. 회사가 광고로 약속한 검증을 안 했다면 약관과 별개로 책임 발생.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (회비 환불·매칭 분쟁)</li>\n<li><strong>공정거래위원회</strong> — 1372 / ftc.go.kr (표시광고법 위반·결혼중개업법 신고)</li>\n<li><strong>여성가족부 가정폭력·결혼중개업 상담</strong> — 1366 (국제결혼·결혼중개업 상담)</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr (매칭 상대 사기 고소)</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n<li><strong>카드사 고객센터</strong> — 차지백·이의제기</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단체구성·활동 + 통신사기피해환급법 위반 방조 포괄일죄',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 폭력행위 등 처벌에 관한 법률 제4조 제1항의 범죄단체 구성·가입·활동 행위가 포괄일죄 관계에 있고 공소시효는 최종 범죄행위 종료시부터 진행한다고 판시했습니다. 결혼정보회사 사기에서도 회사·매칭 상대·중개인이 조직적으로 가담해 다수 피해자를 양산한 정황이 입증되면 단순 사기를 넘어 단체적·반복적 행위로 평가되어 양형·시효가 무거워질 수 있다는 시사점이 있습니다.',
        takeaway: '결혼정보회사 사기는 회사·매칭 상대·중개인의 조직적 가담 정황이 보이면 단순 분쟁을 넘어 사기·표시광고법 위반으로 평가될 수 있어, 광고·계약서·매칭 상대 신원허위 입증자료를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '결혼정보회사가 "본인 책임"이라며 환불을 거부합니다',
        answer:
          '<strong>약관규제법 제6조에 따라 회사 검증 의무 면제 조항은 무효 주장 가능합니다.</strong> 광고에서 "VIP 검증·프리미엄"이라 약속했는데 실제 검증을 안 했다면 표시광고법 위반 별도 책임. KCA 피해구제부터 검토해보세요.',
      },
      {
        question: '매칭 상대가 직업만 거짓말한 경우도 사기인가요?',
        answer:
          '<strong>핵심 정보(직업·재산·결혼이력)의 허위가 결혼·교제 결정에 결정적 영향을 줬다면 사기 검토 가능합니다.</strong> 외모·취미 같은 부수 정보는 사기 인정 어려움. 결혼·송금·동거 의사결정에 직결되는 정보가 허위였다는 점이 핵심.',
      },
      {
        question: '결혼식 비용·동거 중 송금분도 회수 가능한가요?',
        answer:
          '<strong>매칭 상대가 처음부터 결혼 의사 없이 금전 목적이었다는 입증되면 사기로 회수 가능합니다.</strong> 동거 중 송금도 사기 의도가 처음부터 있었다면 부당이득반환 청구 가능. 카톡·계좌이체 내역이 핵심.',
      },
      {
        question: '국제결혼정보회사도 같은 트랙인가요?',
        answer:
          '<strong>국제결혼은 결혼중개업법에 따른 신원확인서 의무 + 추가 보호 트랙이 있습니다.</strong> 신원확인서 미발급·허위는 별도 처벌. 여성가족부 1366 + 공정거래위원회 신고 병행.',
      },
      {
        question: '매칭 상대가 결혼식 직전 잠적했는데 청구 가능한가요?',
        answer:
          '<strong>예식장 계약금·예단·예물비를 송금했거나 결제했다면 부당이득반환 + 사기 청구 가능합니다.</strong> 매칭 상대 신원·연락처가 회사를 통해 확인되면 추적 가능. 회사 책임도 별도 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '국제결혼·로맨스 사기 회수', href: '/guide/fraud/fraud-international-romance-marriage-recovery' },
      { label: '결혼 전제 송금 회수', href: '/guide/fraud/fraud-romance-marriage-promise-recovery' },
      { label: '데이팅앱 송금 사기', href: '/guide/fraud/fraud-dating-app-money-loss' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 3. fraud / luxury-fake-counterfeit ───
  {
    domain: 'fraud',
    slug: 'fraud-luxury-fake-counterfeit',
    keyword: '명품 가품 사기 환불',
    questionKeyword: '온라인에서 정품이라며 산 명품백이 가품으로 판정됐어요. 환불·신고 어떻게 하나요?',
    ctaKeyword: '명품 가품 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '명품 가품 판매 사기 — 환불·상표법 신고 4단계 | 로앤가이드',
      description:
        '온라인·라이브커머스에서 정품으로 속여 판 가품 피해라면 KCA 피해구제 + 차지백 + 상표법 신고 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"인스타그램 라이브커머스에서 &lsquo;100% 정품&rsquo; 보증한다며 명품백을 280만원에 샀어요. 명품 감정원에서 가품 판정 받았는데, 판매자는 &lsquo;시리얼 번호 일치한다&rsquo;며 환불을 거부합니다." 명품 가품 사기는 단순 환불 분쟁을 넘어 상표법 위반·사기·관세법 위반이 결합되는 패턴이 많습니다. 결제 후 7일 내 카드 차지백이 가장 빠른 회수 트랙이고, KCA 피해구제·상표권자 신고·관세청 신고를 병행해볼 수 있어요. 가품 감정서 + 광고 캡처가 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 명품 가품 사기의 5가지 핵심 패턴은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2개 이상이면 사기·상표법 위반 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>"100% 정품·정품 보증·정식 수입" 광고</strong> — 정품임을 명시 광고했는데 가품이면 표시광고법 + 사기죄.</li>\n<li><strong>시중가 대비 50~80% 할인</strong> — 정품 가격 200~300만원대를 50만원에 판매. 가품 리스크 신호.</li>\n<li><strong>"해외 직구·면세점 재고·매장 이월" 명목</strong> — 출처 모호. 관세법 위반 + 정식 유통경로 미확인.</li>\n<li><strong>"감정 거부·환불 불가" 약관</strong> — 정품 자신감이 있다면 감정·환불 거부할 이유 없음. 의심 신호.</li>\n<li><strong>판매자 사업자정보 부실</strong> — 사이트 하단 사업자등록번호·통신판매업 신고번호 미표시. 전자상거래법 제13조 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 상표법 제108조(상표권 침해) + 관세법(밀수) + 표시광고법 제3조(허위 광고) + 부정경쟁방지법(원산지 허위표시).</blockquote>',
      },
      {
        title: 'Q. 정품·가품 입증은 어떻게 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 공인 감정 + 브랜드 본사 확인이 핵심입니다.</strong></p>\n<ul>\n<li><strong>한국명품감정원·명품감정사협회 감정서</strong> — 공인 감정원에서 가품 판정서 발급. 5만~20만원 비용.</li>\n<li><strong>브랜드 직영 매장·본사 감정 의뢰</strong> — 일부 브랜드는 매장에서 무료 감정. 위조품 인증서 발급.</li>\n<li><strong>시리얼 번호·홀로그램·박스·인증서 비교</strong> — 정품 매장 동일 모델과 비교. 사진 첨부.</li>\n<li><strong>관세청·세관 신고 시 정밀 감정</strong> — 상표권자 신고 시 세관이 정밀 감정. 본사 협조 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">감정 결과·결제 형태·판매자 정보에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가품 감정서 발급 + 증거 보전 (1주 내)</strong> — 한국명품감정원 등에서 가품 판정서. 광고 캡처·결제 영수증·판매자 카톡·라이브커머스 영상 보전.</li>\n<li><strong>2단계 — 카드사 차지백 (결제 후 7일 내 권장)</strong> — "허위 광고·재화 미제공" 사유로 이의제기. 가품 감정서 첨부.</li>\n<li><strong>3단계 — KCA 피해구제 (1372)</strong> — 한국소비자원 사전 상담 → 피해구제 신청. 자율 해결 30일 → 분쟁조정 30일.</li>\n<li><strong>4단계 — 상표법·사기 신고</strong> — 상표권자 본사 또는 한국지식재산보호원에 신고(상표법 위반). 경찰 ECRM(ecrm.police.go.kr) 사기 고소. 관세청 1577-8577 밀수·위조 신고.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "감정 비용이 아까워서 그냥 쓴다"고 넘기면 같은 판매자가 다른 피해자를 계속 만듭니다. KCA 신고 5분이면 가능, 누적 신고가 시정 명령의 출발점.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (가품 환불 분쟁)</li>\n<li><strong>공정거래위원회</strong> — 1372 / ftc.go.kr (표시광고법·전자상거래법 위반)</li>\n<li><strong>관세청 위조품 신고</strong> — 1577-8577 / customs.go.kr</li>\n<li><strong>한국지식재산보호원·상표권자 본사</strong> — 상표법 위반 신고</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기적 부정거래행위와 광고·정보 표시 의무',
        summary:
          '대법원 2024도11686 사건(대법원, 2026.01.15 선고)에서 법원은 자본시장법상 부정한 수단·계획·기교의 의미를 구체적 정황과 광고·표시 의무 이행 여부를 종합해 판단해야 한다고 판시했습니다. 명품 가품 사기에서도 "100% 정품" 광고 + 가품 판매가 결합된 구조라면 표시광고법·사기죄·상표법 위반의 결합으로 평가될 수 있다는 시사점이 있어, 광고 게시·결제·가품 입증을 일관된 흐름으로 정리해두면 도움이 됩니다.',
        takeaway: '명품 가품 사기는 광고·결제·가품 감정 흐름이 입증되면 사기 + 상표법 + 관세법이 결합돼 단순 환불 분쟁을 넘어서고, 라이브커머스 영상·광고 캡처·감정서를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '판매자가 "정품 인증서가 있다"며 환불을 거부합니다',
        answer:
          '<strong>인증서가 위조된 경우가 많고 공인 감정원 감정이 우선합니다.</strong> 한국명품감정원·브랜드 본사 감정이 정식 증거. 인증서 진위는 본사에 직접 확인 가능.',
      },
      {
        question: '해외 직구라 한국 트랙 적용 안 된다고 하던데요?',
        answer:
          '<strong>한국 카드 결제·한국 소비자 대상 판매면 한국 트랙(차지백·KCA·상표법) 적용 가능합니다.</strong> 해외 사이트도 한국에서 판매·배송했다면 동일. 국제분쟁조정(ICPEN) 별도 검토.',
      },
      {
        question: '중고 거래(당근·번개장터)에서 가품 받은 경우는요?',
        answer:
          '<strong>플랫폼 환불 정책 + 직접 사기 고소 트랙. KCA는 사업자 분쟁 위주라 개인 거래는 제한적입니다.</strong> 다만 판매자가 반복 판매 정황(상시 판매)이면 사업자성 인정 가능.</strong> 경찰 ECRM 사기 고소 + 플랫폼 분쟁조정.',
      },
      {
        question: '감정 비용이 아까운데 이 비용도 청구 가능한가요?',
        answer:
          '<strong>가품 입증 시 감정비·운송비·정신적 손해 모두 청구 가능합니다.</strong> 민사 손해배상에 포함. 형사 부대 배상명령으로도 청구 가능.',
      },
      {
        question: '판매자가 폐업·잠적했으면 회수가 어렵나요?',
        answer:
          '<strong>차지백은 판매자 폐업과 무관하게 카드사 트랙으로 진행 가능합니다.</strong> 사업자등록 정보·통장 추적으로 판매자 신원 확인 가능. 다수 피해자 공동 고소가 효과적.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '라이브커머스 가품 사기', href: '/guide/fraud/fraud-livestream-counterfeit-purchase' },
      { label: '중고 명품 모조품 항변', href: '/guide/fraud/fraud-second-hand-luxury-replica-defense' },
      { label: 'SNS 광고 환불 거부 사기', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 4. fraud / job-recruit-deposit-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-job-recruit-deposit-scam',
    keyword: '채용 보증금 사기',
    questionKeyword: '취업 합격했다며 보증금·교육비 명목 200만원 송금했는데 회사가 잠적했어요. 회수 가능한가요?',
    ctaKeyword: '채용 사기 보증금 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '채용 보증금 사기 — 환급·노동청 신고 4단계 | 로앤가이드',
      description:
        '취업 합격 후 보증금·교육비·장비비 명목으로 송금했다 잠적당했다면 노동청 + KCA + 사기 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"&lsquo;합격을 축하합니다. 입사 전 보증금 200만원과 교육비 50만원을 송금하시면 4월 1일부터 출근 가능&rsquo;이라는 메일을 받고 송금했어요. 출근일이 다가와도 연락이 없고 회사 홈페이지도 사라졌습니다." 채용 합격 후 금전을 요구하는 회사는 99% 사기로 봐도 됩니다. 근로기준법상 사용자가 근로자에게 보증금·예치금을 받는 것은 원칙적으로 금지되고, 형법상 사기죄·근로기준법 위반·통신사기피해환급법 적용 케이스 검토가 가능해요. 송금 직후 30분이 지급정지 골든타임입니다.</p>',
    sections: [
      {
        title: '채용 사기의 5가지 핵심 신호',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 1개라도 보이면 송금 전 반드시 사업자등록·근로계약서 확인이 안전합니다.</strong></p>\n<ul>\n<li><strong>합격 통보 후 보증금·예치금·교육비 송금 요구</strong> — 근로기준법 제20조에 따라 사용자는 근로자에게 위약금·손해배상 예정 금지. 모든 정상 회사는 입사 전 금전 요구 안 함.</li>\n<li><strong>"입사 후 환급" 약속</strong> — 입사 후 첫 월급에 보증금 환급 약속은 사기 패턴. 처음부터 환급할 의사 없음.</li>\n<li><strong>대표자·계좌 명의 불일치</strong> — 회사 계좌가 아닌 개인·차명 계좌로 송금 요구. 100% 의심.</li>\n<li><strong>"고연봉·재택·간단한 업무" 광고</strong> — 비현실적 조건으로 다수 지원자 유인. SNS·구인 사이트 채용 광고.</li>\n<li><strong>면접·계약서가 영상통화·이메일로만</strong> — 실제 사무실 방문 거부. 실체 없는 회사 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 근로기준법 제20조(위약금 예정 금지) + 직업안정법(허위 구인광고) + 통신사기피해환급법(차명계좌 송금 시 환급).</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 4단계',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부·경찰청·금융감독원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 신고 + 송금 은행 지급정지 (30분 골든타임)</strong> — 송금 직후 112 또는 1332에 신고. 송금 은행 고객센터에 지급정지 요청. 잔액 보존이 환급의 핵심.</li>\n<li><strong>2단계 — 경찰서 사건사고사실확인원 발급 (3일 내)</strong> — 가까운 경찰서 방문 → 사기 신고 → 사건사고사실확인원 발급. 환급·노동청 신고 필수 서류.</li>\n<li><strong>3단계 — 송금 은행 피해구제 신청 + 노동청 신고 (1주 내)</strong> — 통신사기피해환급법 적용 케이스면 송금 은행 피해구제 신청. 채권소멸공고 2개월 → 환급. 동시에 고용노동부 1350 또는 관할 노동청에 직업안정법 위반·근로기준법 위반 신고.</li>\n<li><strong>4단계 — 사기 고소 + 민사 (환급 후 미회수분)</strong> — ECRM(ecrm.police.go.kr) 사기 고소. 다수 피해자면 공동 고소단 구성. 가해자 신원 특정 후 부대 배상명령 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 시점·은행·잔액 보존 여부에 따라 환급 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">환급·신고에 아래 자료를 미리 정리해두면 처리가 빨라집니다.</strong></p>\n<ul>\n<li><strong>채용공고·합격 통보 메일·문자</strong> — 회사명·대표자·연락처·송금 요구 시점.</li>\n<li><strong>송금 영수증·이체확인서</strong> — 송금 일자·금액·수신 계좌.</li>\n<li><strong>회사 카톡·이메일 대화 전체</strong> — 보증금 명목·환급 약속·잠적 시점.</li>\n<li><strong>경찰서 사건사고사실확인원</strong> — 가까운 경찰서 방문 발급. 환급·노동청 신고 필수.</li>\n<li><strong>피해구제 신청서</strong> — 송금 은행 양식. 영업점·인터넷뱅킹 모두 신청 가능.</li>\n<li><strong>회사 사업자등록증 사본·구인광고 캡처</strong> — 사업자등록 진위 확인용. ftc.go.kr 사업자정보공개에서 확인.</li>\n<li><strong>유사 피해자 명단</strong> — 같은 회사·같은 패턴 피해자 5명 이상이면 공동 고소 효과적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "본인이 송금했으니 본인 책임"이라고 자책하면 잔액이 인출되어 회수가 어려워집니다. 30분 안에 지급정지가 환급의 결정적 조건.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 채용 사기에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"입사 후 환급되니 송금하라"</strong> — 근로기준법 제20조 위반. 정상 회사는 입사 전 금전 요구 안 함.</li>\n<li><strong>"교육비·장비비는 합법"</strong> — 일부 직군에서 교육비 명목 정당화 시도. 실제 교육 미제공·과도한 금액·환급 약속이면 사기.</li>\n<li><strong>"신원 보증·신원증명 보증금"</strong> — 신원 보증은 신원보증법상 보증인 제도이지 본인 송금 의무 아님. 본인 송금 요구는 사기.</li>\n<li><strong>"잠적했으니 회수 불가"라며 포기</strong> — 통신사기피해환급법 + 사기 고소 + 노동청 신고로 회수 트랙 다수 존재. 5명 이상 모이면 공동 고소 우선순위 상승.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 고용노동부 1350 / 금융감독원 1332 / 경찰청 112 또는 ECRM(ecrm.police.go.kr) / 송금 은행 고객센터 / 대한법률구조공단 132 / 한국소비자원 1372.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자금세탁 가담자에 대한 형사 책임',
        summary:
          '대법원 2025도15768 사건(대법원, 2026.01.15 선고)에서 법원은 상품권업체를 운영하면서 보이스피싱·인터넷도박 조직의 의뢰에 따라 자금세탁을 해주고 수수료를 받은 사안에서 범죄수익은닉규제법 위반 책임을 인정했습니다. 채용 사기에서도 회사 운영자뿐 아니라 차명 계좌 제공자·자금 인출 가담자에게도 형사·민사 책임이 미칠 수 있다는 시사점이 있어, 송금 후 자금이 어디로 흘러갔는지 은행 추적 자료를 정리해두면 도움이 됩니다.',
        takeaway: '채용 사기는 회사 운영자뿐 아니라 차명계좌 제공자·자금세탁 가담자까지 형사·민사 책임을 검토할 수 있어, 송금 흐름·은행 추적 자료를 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '회사 사업자등록은 진짜였는데 합격 후 잠적했어요',
        answer:
          '<strong>사업자등록 자체는 누구나 가능해 진위만으로 회사 정상 여부 입증 안 됩니다.</strong> 다만 사업자 정보가 있으면 추적 가능. 사업자등록 + 송금 + 잠적 결합이 사기 입증의 핵심.',
      },
      {
        question: '채용공고가 잡코리아·사람인 등 정식 사이트였어요',
        answer:
          '<strong>플랫폼 등록 회사도 사기 가능합니다. 플랫폼에 신고하면 같은 사기꾼 차단·다른 피해자 보호 가능.</strong> 플랫폼이 사업자 검증 일부 책임 있을 수 있어 KCA 트랙도 검토.',
      },
      {
        question: '교육비 명목인데 실제 교육 일부는 받았어요',
        answer:
          '<strong>교육 일부 제공이라도 입사 전 금전 요구·과도한 금액·환급 약속이 결합되면 사기 검토 가능합니다.</strong> 정상 회사는 교육 후 회사 비용으로 부담. 본인 부담 + 환급 약속은 사기 패턴.',
      },
      {
        question: '회사가 "도산해서 환급 못 한다"고 하면요?',
        answer:
          '<strong>도산·파산도 형사 사기 책임은 별개입니다.</strong> 보증금 송금 시점에 이미 도산 임박을 알고도 받았다면 사기 의도 입증. 채무자회생법 제566조에 따라 사기 채권은 비면책.',
      },
      {
        question: '같은 회사에 다른 피해자도 있어요',
        answer:
          '<strong>5명 이상 모이면 공동 고소단 구성, 수사 우선순위 상승.</strong> 단톡방·구글 시트로 명단 통합 → 같은 변호사 통해 공동 고소장. 다수 피해자 입증 자료가 사기 의도 입증에 결정적.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '취업 사기 보증금 회수', href: '/guide/fraud/fraud-fake-job-deposit-recover' },
      { label: '채용 사기 보증금 합격 통보', href: '/guide/fraud/fraud-employment-job-offer-deposit-scam' },
      { label: '취업 사기 대응 절차', href: '/guide/fraud/fraud-employment-scam-response' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 5. fraud / coin-p2p-otc-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-coin-p2p-otc-scam',
    keyword: '코인 P2P OTC 직거래 사기',
    questionKeyword: '코인 P2P 직거래로 USDT 5천만원어치 사려고 송금했는데 코인이 안 들어와요. 회수 가능한가요?',
    ctaKeyword: '코인 P2P 직거래 사기 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '코인 P2P/OTC 직거래 사기 — 회수 5단계 정리 | 로앤가이드',
      description:
        '코인 P2P·OTC 직거래에서 입금 후 코인 미수령 또는 차명계좌 거래로 피해 입었다면 거래소 동결 + 사기 + 자금세탁방지법 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"텔레그램 코인 거래방에서 시세보다 5% 싼 USDT를 판다는 사람과 P2P 직거래했어요. 5천만원 송금했는데 코인은 안 들어오고 카톡 차단당했습니다." 코인 P2P/OTC(장외) 거래 사기는 거래소 외부에서 일어나 환급 트랙이 더 까다롭지만, 통신사기피해환급법 적용 가능성 + 거래소 동결 요청 + 자금세탁방지법 신고로 회수 트랙이 존재합니다. 송금 직후 30분이 지급정지 골든타임이고, 단톡방 캡처·송금 영수증·거래 상대 텔레그램 ID를 확보하는 것이 출발점이에요.</p>',
    sections: [
      {
        title: 'P2P/OTC 사기 vs 정상 직거래 구분 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 2개 이상이면 사기 + 자금세탁방지법 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>시세 대비 3~10% 싼 가격 제시</strong> — 정상 거래소 수수료(0.1~0.2%) 대비 비현실적 할인. 가장 흔한 미끼.</li>\n<li><strong>차명·법인 계좌로 송금 요구</strong> — 거래 상대 본인 명의 아닌 다른 사람 계좌. 자금세탁 가능성 + 의심거래.</li>\n<li><strong>텔레그램·카톡 익명 거래</strong> — 실명·신분증 미공개. 거래소 가입 여부 불명.</li>\n<li><strong>"입금 확인 후 5분 내 코인 전송" 약속 후 지연·잠적</strong> — 입금 직후 카톡 차단 또는 "거래소 점검·지갑 오류" 핑계.</li>\n<li><strong>거래소 외부에서 거래 강요</strong> — "거래소 수수료 아낀다"며 외부 P2P 유도. 정상 P2P는 거래소 에스크로 통함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 가상자산이용자보호법(2025.07 시행) + 특정금융정보법(자금세탁방지) + 통신사기피해환급법(차명계좌 시 환급 트랙).</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원·경찰청·거래소 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 + 송금 은행 지급정지 (30분 골든타임)</strong> — 송금 직후 112 통합신고 또는 1332(금감원). 송금 은행 고객센터에 지급정지 요청. 차명계좌·다중 송금 정황이면 통신사기피해환급법 적용 가능성.</li>\n<li><strong>2단계 — 경찰서 사건사고사실확인원 발급 (3일 내)</strong> — 가까운 경찰서 방문 → 사기 신고 → 사건사고사실확인원 발급. 환급·거래소 동결 신청 필수.</li>\n<li><strong>3단계 — 거래소 동결·신원 정보 요청 (1주 내)</strong> — 거래 상대가 국내 거래소(업비트·빗썸·코인원) 사용했다면 거래소에 동결 요청 + 신원 정보 조회 요청(경찰 영장 통해). 해외 거래소(바이낸스 등)는 시간 더 걸림.</li>\n<li><strong>4단계 — 송금 은행 피해구제 신청 + FIU 신고</strong> — 차명계좌 + 다수 송금 정황이면 통신사기피해환급법 피해구제. 금융정보분석원(FIU) 의심거래 신고도 검토.</li>\n<li><strong>5단계 — 사기 고소 + 자금세탁방지법 (ECRM)</strong> — ecrm.police.go.kr. 사기 + 특정금융정보법 위반 병합. 차명계좌 제공자·자금 인출자에게도 책임 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 형태·거래소·차명 여부에 따라 환급·동결 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">환급·거래소 동결·고소에 아래 자료를 미리 정리해두면 처리가 빨라집니다.</strong></p>\n<ul>\n<li><strong>텔레그램·카톡 거래방·DM 전체 캡처</strong> — 거래 상대 ID·발언·시세·약속·잠적 시점.</li>\n<li><strong>송금 영수증·이체확인서</strong> — 송금 일자·금액·수신 계좌·은행.</li>\n<li><strong>거래소 매매내역·지갑 주소</strong> — 본인 거래소 매매내역 + 거래 상대 지갑 주소(받기로 한).</li>\n<li><strong>경찰서 사건사고사실확인원</strong> — 가까운 경찰서 방문 발급.</li>\n<li><strong>피해구제 신청서</strong> — 송금 은행 양식.</li>\n<li><strong>거래소 동결 요청서</strong> — 거래소별 양식. 사건사고사실확인원 첨부.</li>\n<li><strong>유사 피해자 명단</strong> — 같은 거래방·같은 거래 상대 피해자 명단(공동 고소).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "코인은 익명이라 추적 불가능"이라는 잘못된 정보. 거래소 KYC + 블록체인 분석으로 추적 가능. 시간이 걸려도 회수 가능성은 남아 있어요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 코인 P2P 사기에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"본인이 P2P 했으니 본인 책임"</strong> — 본인 결정과 별개로 거래 상대 사기 의도가 입증되면 사기죄 성립. 환급·고소 트랙 진행 가능.</li>\n<li><strong>"코인은 추적 불가능하니 포기"</strong> — 거래소 KYC + 체이널리시스 등 블록체인 분석으로 추적 가능. 가상자산이용자보호법(2025.07) 시행 후 거래소 협조 의무 강화.</li>\n<li><strong>"수수료 명목 추가 송금하면 코인 보낸다"</strong> — 100% 2차 사기. 송금 절대 금지.</li>\n<li><strong>"해외 거래소라 신고 의미 없다"</strong> — 인터폴 + 외국 FIU 공조로 추적 가능. 시간 걸리지만 다수 피해자 공동 고소가 우선순위 올림.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 금융감독원 1332 / 경찰청 112 또는 ECRM(ecrm.police.go.kr) / 송금 은행 고객센터 / 거래소 고객센터(업비트·빗썸·코인원) / 금융정보분석원(kofiu.go.kr) / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 거래소 전자지갑 비트코인 압수 적법성 (관련 부분)',
        summary:
          '대법원 2024도1932 사건은 사기 사건에서 가해자의 자산 추적·압수와 관련해 가상자산도 압수 대상이 될 수 있음을 시사하는 판례 흐름의 일부로, 코인 P2P/OTC 사기에서도 거래 상대 거래소 계좌·지갑에 대한 동결·압수가 법적으로 가능하다는 시사점이 있습니다. 신속한 신고와 거래소 협조가 자산 회수 가능성을 좌우하므로, 단톡방 캡처·송금 영수증·거래 상대 ID를 즉시 확보해두면 도움이 됩니다.',
        takeaway: '코인 P2P/OTC 사기는 거래소 KYC 정보·블록체인 분석으로 추적·동결이 가능해 신속한 형사 신고와 거래소 협조 요청이 회수 가능성을 좌우하며, 단톡방 캡처·송금 흐름·거래 상대 정보를 즉시 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '거래 상대가 외국인·해외 텔레그램이면 추적 불가인가요?',
        answer:
          '<strong>인터폴 + 텔레그램 본사 협조 + 거래소 KYC + 블록체인 분석으로 추적 가능합니다.</strong> 시간이 오래 걸려도 다수 피해자 공동 고소로 우선순위 올리는 것이 출발점.',
      },
      {
        question: '송금한 계좌가 차명·대포통장이면 환급 가능한가요?',
        answer:
          '<strong>차명·다중 송금 정황 시 통신사기피해환급법 적용 가능성 검토.</strong> 잔액이 남아있어야 환급. 30분 안에 지급정지 신고가 결정적. 늦었더라도 사기 고소 + 민사는 가능.',
      },
      {
        question: '코인이 일부만 들어왔는데 잔여분도 회수 가능한가요?',
        answer:
          '<strong>일부 이행 후 잠적도 사기 검토 가능합니다.</strong> 처음부터 일부만 보내고 잠적할 의도였다면 사기 성립. 매매내역 + 약정 캡처로 입증.',
      },
      {
        question: '거래소가 동결을 거부하면요?',
        answer:
          '<strong>경찰 영장 또는 가상자산이용자보호법상 의심거래 신고로 강제 동결 가능합니다.</strong> 거래소도 특정금융정보법상 의심거래 신고 의무. 형사 신고 후 협조 사례 다수.',
      },
      {
        question: '거래방 운영자에게도 책임을 물을 수 있나요?',
        answer:
          '<strong>운영자가 사기 정황을 알고 방치·중개했다면 사기 방조·자금세탁 방조 검토 가능합니다.</strong> 단톡방 운영 책임 + 회비 수수 정황이 결합되면 책임 확장 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '코인거래소 출금 차단 대응', href: '/guide/fraud/fraud-coin-exchange-withdrawal-blocked' },
      { label: '암호화폐 투자 사기 신고', href: '/guide/fraud/fraud-crypto-investment-scam-report' },
      { label: '비트코인 콜드월렛 사기', href: '/guide/fraud/fraud-bitcoin-cold-wallet-scam' },
      { label: '암호화폐 믹서 자금 추적', href: '/guide/fraud/fraud-crypto-mixer-tracing-steps' },
      { label: '러그풀 가상자산 사기 증거', href: '/guide/fraud/fraud-crypto-rug-pull-evidence' },
    ],
  },
];
