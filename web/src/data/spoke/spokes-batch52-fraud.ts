import { SpokePage } from '../spoke-pages';

// batch52 fraud 5개: 영세 자영업자 단체 투자 사기 + SNS 광고 환불 거부 + 가상화폐 펌프앤덤프 + 지인 카톡 사칭 송금 + 무인매장 결제 사기
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 영세 자영업자 단체·계·동호회를 통해 투자 사기를 당한 다수 피해자가 공동 고소단·집단 분쟁조정·KCA 피해구제로 합동 회수 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 인스타그램·유튜브·페이스북 광고를 보고 결제했다가 사이트 측이 환불을 거부·잠적한 피해자가 카드 차지백 + KCA 피해구제 + 표시광고법 신고 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 단톡방·텔레그램 작전세력의 가상화폐 펌프앤덤프 사기에 휩쓸린 피해자가 가상자산 압수·자본시장법 위반·사기 고소 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 가족·친구 카카오톡·문자 사칭으로 송금을 한 메신저피싱 피해자가 통신사기피해환급법 환급 + 경찰 신고 + 차지백 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 무인매장·키오스크 결제 후 상품 미수령·이중결제 사기를 당한 피해자가 KCA 피해구제 + 카드 차지백 + 점주 책임 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch52Fraud: SpokePage[] = [
  // ─── 1. fraud / elderly-group-investment-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-elderly-group-investment-scam',
    keyword: '단체 투자 사기 공동 회수',
    questionKeyword: '동네 자영업자 모임에서 50명이 1억씩 투자했는데 운영자가 잠적했어요. 공동 고소·환급 어떻게 진행하나요?',
    ctaKeyword: '단체 투자 사기 공동 대응 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '단체 투자 사기 공동 회수 — 합동 고소 5단계 정리 | 로앤가이드',
      description:
        '영세 자영업자 단체·계·동호회 투자 사기로 다수 피해자가 발생했다면 공동 고소단 + 집단 분쟁조정 + KCA 피해구제 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 상가 자영업자 50명이 모인 친목회에서 한 회원이 &lsquo;원금 보장 월 5% 수익&rsquo; 약속하며 1인당 1억씩 모았는데, 6개월 만에 잠적했어요. 다들 어떻게 해야 할지 막막해서 카톡방만 켜놓고 있습니다." 이런 단체 투자 사기는 다수 피해자가 같은 시점에 같은 패턴으로 당했기 때문에 공동 고소단 구성 + 집단 분쟁조정 트랙이 가장 효과적입니다. 사기 인지 후 1주가 가압류·계좌 추적 골든타임이라, 피해자 명단 확보와 동시에 형사 고소·민사 가압류·KCA 신고를 병렬로 검토해볼 수 있어요.</p>',
    sections: [
      {
        title: '단체 사기 vs 정상 투자 구분 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 2개 이상이면 사기 + 자본시장법 위반 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>원금 보장 + 고수익 약속</strong> — "원금 보장 월 5%" 같은 약속은 자본시장법 제55조 위반(투자손실 보전·이익보장 금지). 인가받은 금융사도 못 함.</li>\n<li><strong>친목·계·동호회 통한 모집</strong> — 폐쇄적 인적 관계로 신뢰만 강조하고 사업설명서·공시 자료 부실.</li>\n<li><strong>금융업 인가·등록 미보유</strong> — 금융감독원(fss.or.kr) 금융회사 검색에 등록되지 않은 운영자.</li>\n<li><strong>사업 실체 불분명</strong> — 사무실·홈페이지·사업자등록은 있지만 실제 영업·매출 자료 없음. 신규 투자자 자금으로 기존 투자자에게 수익 지급(폰지 구조).</li>\n<li><strong>출금 지연·인출 거부</strong> — 초기엔 일부 환급, 점점 지연→정지→잠적 패턴.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 자본시장법 위반 + 유사수신행위법 위반 + 다수 피해자 합산 5억원 이상이면 특정경제범죄가중처벌법 적용. 50명 × 1억 = 50억이면 무기 또는 5년 이상 징역 적용 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공동 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">한국소비자원·경찰청·금융감독원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 피해자 명단·자료 통합 (잠적 인지 후 3일)</strong> — 카톡방·동호회 명부 통해 피해자 명단·송금 일자·금액 일괄 정리. 단톡방·전용 카페·구글 시트로 자료 공유.</li>\n<li><strong>2단계 — 가압류 신청 + 계좌 지급정지 (1주 내)</strong> — 운영자 부동산·통장·차량을 보전. 통신사기피해환급법 적용 케이스(원금보장 약속 + 차명계좌)면 송금 은행에 즉시 지급정지 요청.</li>\n<li><strong>3단계 — 공동 고소단 구성 + ECRM 신고 (2주 내)</strong> — 피해자 5명 이상 모이면 같은 변호사 통해 공동 고소장 제출. 경찰 ECRM(ecrm.police.go.kr) 사기죄 + 자본시장법 위반 + 유사수신행위법 병합. 공동 고소는 수사 우선순위 상승.</li>\n<li><strong>4단계 — 한국소비자원 집단 분쟁조정 (1372)</strong> — 피해자 50명 이상이면 집단 분쟁조정 신청 가능. 합의 시 미신청자도 동일 효력. 통상 60~90일.</li>\n<li><strong>5단계 — 형사 부대 배상명령 또는 민사 공동 소송</strong> — 형사 1심 변론종결 전 부대 배상명령 신청. 별도 민사 공동 소송도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">피해자 수·피해 금액·계약 형태에 따라 적용 트랙이 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">공동 고소·집단 분쟁조정에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>피해자 명단 통합표</strong> — 이름·연락처·송금일·금액·계좌번호 정리(엑셀·구글 시트).</li>\n<li><strong>송금 영수증·이체확인서</strong> — 각 피해자별 결제 일시·방법·금액.</li>\n<li><strong>운영자와의 대화 전체</strong> — 카카오톡·문자·녹취. 원금보장·고수익 약속 발언 포함.</li>\n<li><strong>투자설명서·계약서·약정서</strong> — 운영자가 배포한 자료 일체.</li>\n<li><strong>운영자 신원·재산 정보</strong> — 사업자등록증·등기부등본·차량 등록 정보.</li>\n<li><strong>공동 고소 위임장</strong> — 피해자 각자가 변호사 또는 대표 피해자에게 위임.</li>\n<li><strong>금융감독원 등록 미확인 증빙</strong> — fss.or.kr 검색 결과 캡처.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "각자 알아서 고소하자"는 분산 대응은 수사 우선순위가 떨어지고 가압류 시점도 늦어집니다. 5명 이상 모이면 즉시 공동 고소 검토하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 단체 투자 사기에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"본인도 투자자다, 본인도 피해자다"</strong> — 운영자가 본인도 손해를 봤다는 주장. 자금 흐름·총책임자 위치를 입증하면 깨질 수 있어요.</li>\n<li><strong>"수익 일부는 받았으니 사기 아니다"</strong> — 폰지 구조에서 초기 수익은 신규 투자자 자금. 전체 자금 흐름이 입증되면 사기 인정 가능성 높음.</li>\n<li><strong>합의금 명목 추가 송금 요구</strong> — "조금만 더 보내주면 환급해드린다"는 시간 끌기. 추가 송금 절대 금지.</li>\n<li><strong>"형사 고소하면 더 늦어진다"</strong> — 운영자·다른 피해자가 형사 자제 압박. 형사 + 민사 + KCA 동시 진행이 회수에 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국소비자원 1372 / 금융감독원 1332 / 경찰청 ECRM(ecrm.police.go.kr) / 대한법률구조공단 132 / 범죄피해자지원센터 1577-1295.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭력행위처벌법 단체구성·활동 + 통신사기피해환급법 위반 방조 포괄일죄',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 폭력행위 등 처벌에 관한 법률 제4조 제1항의 범죄단체를 구성하거나 가입한 자가 더 나아가 구성원으로 활동한 경우 포괄일죄 관계에 있고, 포괄일죄의 공소시효는 최종 범죄행위가 종료한 때부터 진행한다고 판시했습니다. 단체 투자 사기에서도 운영자·총책·하부 모집책이 단체적으로 가담한 정황이 입증되면 단순 사기 단독죄를 넘어 조직범죄·통신사기피해환급법 위반과 결합되어 공소시효·양형이 무거워질 수 있다는 시사점이 있습니다.',
        takeaway: '단체 투자 사기는 단순 사기를 넘어 조직범죄·자본시장법·유사수신행위법 위반이 결합될 수 있어, 피해자 명단·자금 흐름·운영자 역할 분담을 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '피해자가 5명도 안 되는데 공동 고소가 가능한가요?',
        answer:
          '<strong>인원 수 제한은 없지만 5명 이상이면 수사 우선순위가 올라갑니다.</strong> 2~4명도 공동 위임 가능하고, 추가 피해자가 발견되면 진행 중에 합류시킬 수 있어요.',
      },
      {
        question: '운영자가 이미 파산 신청했다면 회수가 불가능한가요?',
        answer:
          '<strong>형사 고소는 별개로 진행 가능, 민사도 사기로 인한 채권은 면책 제외 사유입니다.</strong> 채무자회생법 제566조에 따라 사기로 인한 채권은 비면책. 가압류 + 형사 유죄로 향후 새 재산 발견 시 강제집행 가능.',
      },
      {
        question: '운영자 가족·바지사장 명의 재산도 가압류할 수 있나요?',
        answer:
          '<strong>차명·바지사장·사해행위 입증되면 가압류 + 사해행위취소 청구 가능합니다.</strong> 가족 명의 부동산·차량을 사기 자금으로 매수한 경우 사해행위로 다툴 수 있어요. 잠적 직전 명의 이전이 결정적 정황.',
      },
      {
        question: '집단 분쟁조정은 KCA에 어떻게 신청하나요?',
        answer:
          '<strong>피해자 50명 이상 + 같은 사업자·같은 피해 패턴이면 KCA 1372 또는 consumer.go.kr 집단 분쟁조정 신청.</strong> 합의안 수락 시 미신청자도 동일 효력. 처리 기간 60~90일.',
      },
      {
        question: '운영자가 해외 도주했다면 어떻게 하나요?',
        answer:
          '<strong>인터폴 적색수배 + 출국금지 + 형사 진행 가능.</strong> 검찰을 통해 인터폴 수배 요청. 해외 재산도 외국법원·검찰과 형사사법공조로 추적 가능. 시간이 오래 걸리지만 회수 가능성은 남아 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '투자 집단소송 절차 안내', href: '/guide/fraud/fraud-investment-collective-action' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 2. fraud / sns-ad-product-refund-blocked ───
  {
    domain: 'fraud',
    slug: 'fraud-sns-ad-product-refund-blocked',
    keyword: 'SNS 광고 환불 거부 사기',
    questionKeyword: '인스타 광고 보고 30만원 결제했는데 사이트가 환불을 거부하고 카톡 답이 없어요. 회수 가능한가요?',
    ctaKeyword: 'SNS 광고 환불 거부 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: 'SNS 광고 환불 거부 사기 — 차지백 4단계 절차 | 로앤가이드',
      description:
        '인스타·유튜브·페이스북 광고로 결제했는데 사이트가 환불을 거부·잠적했다면 카드 차지백 + KCA 피해구제 + 표시광고법 신고 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"인스타그램에서 &lsquo;단 3일 한정 70% 할인&rsquo; 광고를 보고 30만원에 옷을 결제했어요. 한 달이 지나도 배송이 안 와서 문의했더니 &lsquo;본사 정책상 환불 불가&rsquo;라며 카톡 차단당했습니다." SNS 광고 환불 거부 사기는 광고 송출 비용을 들여 단기간에 다수 피해자를 만들고 사이트를 폐쇄하는 패턴이 많습니다. 결제 직후 7일 내 카드 차지백이 가장 강력한 회수 수단이고, 표시광고의 공정화에 관한 법률 위반·전자상거래법 위반·사기죄 신고를 병행해볼 수 있어요. 사이트 폐쇄 전 증거 확보가 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. SNS 광고 사기 vs 정상 쇼핑몰 구분 5가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2개 이상이면 즉시 차지백·신고 트랙으로 검토해보세요.</strong></p>\n<ul>\n<li><strong>"오늘만·단 며칠" 단기 압박</strong> — 결제 결정 시간을 줄이는 전형 패턴.</li>\n<li><strong>사업자정보 공개 미흡</strong> — 사이트 하단 사업자등록번호·통신판매업 신고번호·대표자명·주소·전화번호가 누락 또는 허위. 전자상거래법 제13조 위반.</li>\n<li><strong>가격이 시중가 대비 70~90% 할인</strong> — 정품·정가 대비 비현실적 가격은 가품·미배송 리스크 신호.</li>\n<li><strong>리뷰가 모두 비슷한 시점·문체</strong> — 가짜 리뷰. 실제 사이트 리뷰는 시기·평가·문체가 분산됨.</li>\n<li><strong>현금·계좌이체·간편결제 우대</strong> — 카드 결제는 차지백 가능하니 막고, 계좌이체로만 받으면 위험 신호.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 표시광고법 제3조(부당한 표시·광고) + 전자상거래법 제17조(청약철회 14일) + 통신판매업 미신고 시 전자상거래법 제40조.</blockquote>',
      },
      {
        title: 'Q. 환불 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제 수단·사이트 등록 여부에 따라 4가지 트랙으로 갈립니다.</strong></p>\n<ul>\n<li><strong>카드 결제 → 카드사 차지백</strong> — "재화 미제공·허위 광고" 사유로 결제 후 90일 내 이의제기. 가장 빠른 회수.</li>\n<li><strong>간편결제(카카오페이·네이버페이) → 결제사 + 카드사 동시</strong> — 결제사 환급 + 연계 카드사 차지백 양쪽.</li>\n<li><strong>계좌이체 → 송금 은행 지급정지 + 형사 신고</strong> — 통신사기피해환급법 적용 케이스면 환급 트랙. 잔액 보존 핵심.</li>\n<li><strong>14일 내 청약철회 → 전자상거래법 제17조</strong> — 단순 변심도 14일 내 환불 가능. 가품·하자는 30일.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결제 수단·광고 형태에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 4단계',
        content:
          '<p><strong style="color:#1e3a5f">한국소비자원·공정거래위원회·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 즉시 보전 (24시간 내)</strong> — SNS 광고 캡처(URL·게시일·계정명) + 사이트 화면 + 결제 영수증 + 카톡·이메일 환불 거절 회신 PDF 저장. 사이트 폐쇄 후엔 확보 어려움.</li>\n<li><strong>2단계 — 카드사 차지백 + KCA 피해구제 (결제 후 7일 내 권장)</strong> — 카드사 고객센터에 "재화 미제공·허위 광고" 사유로 이의제기. KCA 1372 사전 상담 → 피해구제 신청.</li>\n<li><strong>3단계 — 표시광고법 + 전자상거래법 신고 (1372)</strong> — 공정거래위원회 1372 / ftc.go.kr. 허위·과장 광고 신고. 통신판매업 미신고 사이트는 별도 신고.</li>\n<li><strong>4단계 — 경찰 ECRM 사기 고소</strong> — ecrm.police.go.kr. 사기죄 + 표시광고법 위반 병합. 동일 사이트 다수 피해자면 공동 고소단 구성.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 SNS 광고 사기에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"본사 정책상 환불 불가"</strong> — 한국 소비자에 판매하는 한국 카드 결제건은 한국 전자상거래법 + 카드사 차지백 룰 적용. 본사 정책과 별개.</li>\n<li><strong>"단순 변심은 환불 안 된다"</strong> — 단순 변심도 14일 내 청약철회 가능. 가품·하자는 30일.</li>\n<li><strong>"반품비를 본인이 부담해야 한다"</strong> — 가품·재화 미제공·허위 광고면 반품비 본인 부담 의무 없음.</li>\n<li><strong>"추가 결제하면 환급된다"</strong> — 100% 2차 사기. 절대 응하지 마세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국소비자원 1372 / 공정거래위원회 1372 / 경찰청 ECRM(ecrm.police.go.kr) / 대한법률구조공단 132 / 범죄피해자지원센터 1577-1295.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보 입력을 매개로 한 기망과 사람에 대한 사기죄',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 등 정보처리장치에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 직접 대상으로 한 것이 아니더라도 그 정보처리 결과를 통해 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. SNS 광고 + 결제 시스템을 통한 환불 거부 사기에서도, 광고 게시·결제 페이지를 통한 정보 입력이 결제자를 기망한 구조라면 사기죄로 평가될 수 있다는 시사점이 있습니다.',
        takeaway: 'SNS 광고 환불 거부 사기는 광고 게시물·결제 페이지·환불 거절 회신이 결합된 기망 구조라 사기죄로 평가될 수 있으며, 게시물 캡처·결제 흐름·거절 회신을 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '광고 게시한 인스타그램·메타에도 책임을 물을 수 있나요?',
        answer:
          '<strong>플랫폼 사업자는 표시광고법 시정 권고 대상입니다.</strong> 메타·구글에 직접 환불 청구는 어렵지만, 공정위 신고 누적되면 플랫폼이 광고 차단·환불 협조에 들어가는 케이스 있어요.',
      },
      {
        question: '카드 차지백 신청했는데 카드사가 거절하면요?',
        answer:
          '<strong>금융감독원 분쟁조정(1332)·금융분쟁조정위원회로 이의제기 가능합니다.</strong> 환불 거절 회신·허위 광고 캡처를 첨부하면 재심사 가능성. KCA 트랙도 동시 진행.',
      },
      {
        question: '결제 후 14일이 지났는데 청약철회 가능한가요?',
        answer:
          '<strong>가품·재화 미제공·허위 광고면 14일 청약철회와 별개로 30일 환불 + 사기 트랙 가능.</strong> 시한이 지났더라도 KCA 피해구제·차지백·형사 고소는 여전히 진행할 수 있어요.',
      },
      {
        question: '사이트가 이미 폐쇄됐는데 신고가 의미 있나요?',
        answer:
          '<strong>도메인·사업자등록 정보·결제 영수증으로 추적 가능합니다.</strong> 같은 운영자가 다른 사이트로 같은 수법을 반복하는 경우가 많아 신고 누적이 추적의 출발점이에요.',
      },
      {
        question: '해외 사이트라 한국법 적용이 안 된다고 하던데요?',
        answer:
          '<strong>한국 소비자에 한국어로 판매·한국 카드 결제 받았다면 한국 전자상거래법 + 차지백 룰 적용 가능합니다.</strong> 사업자 등록 여부와 별개로 KCA 트랙 + 차지백 진행 가능. ICPEN 국제분쟁조정도 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'SNS 쇼핑몰 미배송 대응', href: '/guide/fraud/fraud-sns-shopping-no-delivery' },
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: '해외구매대행 사기 회수', href: '/guide/fraud/fraud-overseas-shipping-money-scam' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 3. fraud / crypto-pump-dump-coin ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-pump-dump-coin',
    keyword: '가상화폐 펌프앤덤프 사기',
    questionKeyword: '단톡방 작전세력에 휩쓸려 코인 5천만원어치 매수했는데 폭락했어요. 사기로 회수 가능한가요?',
    ctaKeyword: '코인 작전세력 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '가상화폐 작전세력 펌프앤덤프 사기 — 회수 5단계 | 로앤가이드',
      description:
        '단톡방·텔레그램 작전세력에 휩쓸려 코인 매수 후 폭락했다면 가상자산 압수 + 자본시장법 위반 + 사기 고소 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"텔레그램 단톡방에서 &lsquo;다음주 상장될 거래소 정보&rsquo;라며 특정 알트코인 매수를 부추겨서 5천만원어치 샀는데, 매수 직후 90% 폭락했어요. 알고 보니 운영진이 미리 사놓고 우리한테 떠넘긴 작전이었습니다." 가상화폐 펌프앤덤프(시세 조작 후 처분)는 자본시장법상 시세조종 + 사기 + 부정거래행위가 결합되는 패턴입니다. 거래소가 협조하면 가상자산 압수·동결 가능성이 있어 신속한 신고가 핵심이고, 단톡방 캡처·매매 내역·운영자 정보를 단기간에 확보해두는 것이 출발점이에요.</p>',
    sections: [
      {
        title: 'Q. 작전세력 사기 vs 정상 투자 권유 구분 5가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2개 이상이면 시세조종·사기 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>특정 코인 동시 매수 지시</strong> — "X시 X분에 OO코인 매수하세요" 일괄 지시는 시세조종 정황. 자본시장법 제176조 위반 검토.</li>\n<li><strong>"내부정보·상장정보" 미공개 자료 약속</strong> — 거래소 상장·세력 매수 같은 미공개정보 제공은 부정거래행위(자본시장법 제178조).</li>\n<li><strong>유료 회원·VIP방 운영</strong> — 가입비·정보비를 받아 비공개 작전방 운영. 회원 명단·송금 내역이 입증의 핵심.</li>\n<li><strong>매수 후 운영자 매도 정황</strong> — 회원이 매수한 직후 운영자가 대량 매도(덤프). 거래소 매매내역 분석으로 입증.</li>\n<li><strong>운영자 차명·다중 계정</strong> — 텔레그램·단톡방 운영자가 익명·해외 번호. 거래소 신원 비공개.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 자본시장법 제176조(시세조종)·제178조(부정거래행위) + 가상자산이용자보호법(2025.07 시행) 위반. 이득액이 50억원 이상이면 무기 또는 5년 이상 징역.</blockquote>',
      },
      {
        title: 'Q. 회수 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 자금 흐름·거래소 위치에 따라 4가지 트랙으로 갈립니다.</strong></p>\n<ul>\n<li><strong>국내 거래소 거래 → 가상자산 압수·동결</strong> — 운영자 지갑·거래소 계좌 압수 가능. 대법원 2025모45 결정상 거래소 전자지갑 비트코인 압수 적법성 인정.</li>\n<li><strong>해외 거래소(바이낸스 등) → FIU·국제공조 통한 추적</strong> — 시간 오래 걸리지만 가능. 인터폴 적색수배 검토.</li>\n<li><strong>유료 회원비·송금분 → 통신사기피해환급법</strong> — 차명계좌 + 미공개정보 약속이면 환급 트랙 적용 케이스 검토.</li>\n<li><strong>거래소 시세조종 매수분 → 자본시장법 손해배상</strong> — 시세조종 입증 시 자본시장법 제177조 손해배상 청구. 다수 피해자 집단소송 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">거래소·자금 흐름·운영자 정보에 따라 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 5단계 신고 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단톡방·매매 내역 즉시 보전 (24시간 내)</strong> — 텔레그램·카톡 단톡방 전체 캡처(운영자 발언·매수 지시·시간순). 거래소 매매내역 다운로드.</li>\n<li><strong>2단계 — 거래소 신고 + 자산 동결 요청 (1주 내)</strong> — 업비트·빗썸 등 국내 거래소에 시세조종 신고. 운영자 계좌 동결 요청.</li>\n<li><strong>3단계 — 금융감독원 + 금융정보분석원(FIU) 신고</strong> — 금감원 1332 / fss.or.kr. 자본시장법 위반 신고. FIU에 의심거래 신고도 검토.</li>\n<li><strong>4단계 — 경찰 ECRM + 검찰 사기 고소</strong> — ecrm.police.go.kr. 사기 + 자본시장법 위반 병합. 다수 피해자 공동 고소면 우선순위 상승.</li>\n<li><strong>5단계 — 자본시장법 손해배상 민사 (3년 시효)</strong> — 시세조종으로 인한 손해 입증 시 운영자에 손해배상 청구. 집단소송 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "본인이 매수 결정한 거니까"라며 자책하면 작전세력은 다른 피해자를 노립니다. 단톡방 운영자의 매수 지시 + 본인 매도 정황이 입증되면 사기 책임은 운영자에게.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>금융감독원</strong> — 1332 / fss.or.kr (자본시장법 위반 신고)</li>\n<li><strong>금융정보분석원(FIU)</strong> — kofiu.go.kr (의심거래 신고)</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>가상자산 거래소 고객센터</strong> — 업비트·빗썸·코인원 등 (시세조종·자산 동결 요청)</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n<li><strong>범죄피해자지원센터</strong> — 1577-1295 (전국 56개 센터)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 거래소 전자지갑 비트코인 압수 적법성',
        summary:
          '대법원 2025모45 사건(대법원, 2025.12.11 선고)에서 법원은 가상자산 거래소의 전자지갑에 연결된 비트코인을 수사기관이 압수한 사안에서, 가상자산도 압수의 대상이 될 수 있고 압수 절차의 적법성을 인정했습니다. 코인 작전세력 사기에서도 운영자 지갑·거래소 계좌 압수가 가능해 신속한 신고가 자산 회수에 결정적이라는 시사점이 있습니다.',
        takeaway: '가상화폐 사기는 거래소 전자지갑 압수가 법적으로 가능해 신속한 형사 신고 + 거래소 동결 요청이 회수 가능성을 좌우하므로, 단톡방 캡처·매매 내역·운영자 정보를 즉시 확보해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '제가 자발적으로 매수했는데 사기로 인정되나요?',
        answer:
          '<strong>운영자가 미공개정보·내부정보를 약속하고 의도적으로 시세를 조종했다면 본인 결정과 별개로 사기·시세조종 책임이 운영자에게 있습니다.</strong> 매수 결정 자체는 본인이지만 결정의 기초 정보가 허위였다는 점이 입증되면 사기죄 성립 가능.',
      },
      {
        question: '운영자가 외국인·해외 텔레그램이라 추적이 어렵지 않나요?',
        answer:
          '<strong>인터폴 적색수배 + 텔레그램 본사 협조 + 자금 흐름 추적으로 가능합니다.</strong> 시간이 오래 걸리지만 다수 피해자 공동 고소로 수사 우선순위 올리는 것이 출발점.',
      },
      {
        question: 'VIP 회원비를 따로 송금했는데 그것도 회수 가능한가요?',
        answer:
          '<strong>회원비 송금분은 사기 고소 + 차지백·은행 환급 트랙 별도 진행.</strong> 미공개정보 제공 약속이 허위였다는 입증이 핵심.',
      },
      {
        question: '코인 매수가가 폭락한 손실분도 청구할 수 있나요?',
        answer:
          '<strong>자본시장법 제177조 시세조종으로 인한 손해는 매수가와 정상가의 차액 청구 가능합니다.</strong> 정상가 산정은 감정 필요. 다수 피해자 집단소송 시 효율적.',
      },
      {
        question: '거래소가 동결 요청을 거부하면요?',
        answer:
          '<strong>금감원·FIU 신고 + 경찰 압수영장으로 강제 동결 가능합니다.</strong> 거래소도 자금세탁방지법(특정금융정보법)상 의심거래 신고 의무가 있어 형사 신고 후 협조하는 경우 다수.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '암호화폐 투자 사기 신고', href: '/guide/fraud/fraud-crypto-investment-scam-report' },
      { label: '코인거래소 출금 차단 대응', href: '/guide/fraud/fraud-coin-exchange-withdrawal-blocked' },
      { label: '비트코인 콜드월렛 사기', href: '/guide/fraud/fraud-bitcoin-cold-wallet-scam' },
      { label: '암호화폐 믹서 자금 추적', href: '/guide/fraud/fraud-crypto-mixer-tracing-steps' },
      { label: '러그풀 가상자산 사기 증거', href: '/guide/fraud/fraud-crypto-rug-pull-evidence' },
    ],
  },

  // ─── 4. fraud / friend-kakao-impersonation-emergency ───
  {
    domain: 'fraud',
    slug: 'fraud-friend-kakao-impersonation-emergency',
    keyword: '지인 카톡 사칭 송금 사기',
    questionKeyword: '딸이 카톡으로 급하다고 200만원 송금해달라 해서 보냈는데 사칭이었어요. 환급 가능한가요?',
    ctaKeyword: '메신저피싱 환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '지인 카톡 사칭 송금 사기 — 메신저피싱 환급 4단계 | 로앤가이드',
      description:
        '가족·친구 카톡·문자 사칭으로 송금한 메신저피싱 피해자라면 통신사기피해환급법 환급 + 경찰 신고 + 차지백 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"&lsquo;엄마, 폰이 고장 나서 친구 폰으로 연락해. 급하게 200만원만 보내줘&rsquo;라는 카톡을 받고 의심 없이 송금했어요. 1시간 후 진짜 딸한테 전화가 와서 사칭이라는 걸 알았습니다." 가족·지인 사칭 메신저피싱은 평소 말투·이름·관계를 모방해 의심을 줄이는 패턴입니다. 송금 후 30분이 지급정지 골든타임이고, 통신사기피해환급법 적용 여부가 환급 가능성을 가릅니다. 즉시 112 신고 → 송금 은행 지급정지 → 경찰서 사건사고사실확인원 발급 순서로 검토해볼 수 있어요.</p>',
    sections: [
      {
        title: '메신저피싱 5가지 핵심 패턴',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 1개라도 보이면 즉시 가족에게 직접 전화 확인이 안전합니다.</strong></p>\n<ul>\n<li><strong>"폰 고장·분실·해외 출장" 명목 새 번호</strong> — 본인 인증 없는 새 카톡 계정에서 접근. 가장 흔한 패턴.</li>\n<li><strong>"급하게·지금 당장" 시간 압박</strong> — 의심·확인 시간을 줄이는 압박 표현.</li>\n<li><strong>본인 명의 계좌 외 차명·법인 계좌 입금 요구</strong> — 진짜 가족이라면 본인 명의 계좌. 차명·법인은 100% 의심.</li>\n<li><strong>"통화는 안 된다, 카톡으로만"</strong> — 음성·영상 통화 회피. 목소리 노출 회피 패턴.</li>\n<li><strong>금액이 100~500만원 범위</strong> — 즉시 송금 가능한 한도 노림. 1천만원 넘으면 의심하니 그 아래로 요구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통신사기피해환급법 제2조에 따라 메신저피싱·보이스피싱은 "재화·용역 가장 자금이체"에 해당해 환급 트랙 적용. 형법 제347조 사기죄 + 정보통신망법 위반 결합.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 4단계',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원·경찰청·은행 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 신고 + 송금 은행 지급정지 (30분 골든타임)</strong> — 송금 직후 112 또는 1332(금감원) 신고. 동시에 송금 은행 고객센터에 지급정지 요청. 잔액 보존이 환급의 핵심.</li>\n<li><strong>2단계 — 경찰서 사건사고사실확인원 발급 (3일 내)</strong> — 가까운 경찰서 방문 → 사기 신고 → 사건사고사실확인원 발급. 환급 신청에 필수 서류.</li>\n<li><strong>3단계 — 송금 은행 피해구제 신청 (사고 인지 후 3영업일 내 권장, 최대 14일)</strong> — 통신사기피해환급법 제3조에 따라 송금 은행에 피해구제 신청서 제출. 채권소멸공고 2개월 → 환급 결정.</li>\n<li><strong>4단계 — 사기 고소·민사 (환급 후 미회수분)</strong> — 채권소멸공고 후 환급되지 않은 잔액은 사기 고소 + 민사 청구. 가해자 신원이 특정되면 부대 배상명령 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 시점·은행·잔액 보존 여부에 따라 환급 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">환급·신고에 아래 자료를 미리 정리해두면 처리가 빨라집니다.</strong></p>\n<ul>\n<li><strong>카카오톡·문자 대화 전체</strong> — 사칭 계정 프로필·발언·송금 요구·차단 시점까지 캡처.</li>\n<li><strong>송금 영수증·이체확인서</strong> — 송금 일시·금액·수신 계좌·은행.</li>\n<li><strong>경찰서 사건사고사실확인원</strong> — 가까운 경찰서 방문 발급. 환급 신청 필수.</li>\n<li><strong>피해구제 신청서</strong> — 송금 은행 양식. 영업점·인터넷뱅킹 모두 신청 가능.</li>\n<li><strong>가족·지인 본인 진술서</strong> — 사칭당한 가족이 "본인이 카톡한 적 없다" 진술서.</li>\n<li><strong>통신 가입자 정보</strong> — 사칭 카톡 번호의 통신사 가입자 정보 조회 요청(경찰 통한 압수영장).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "이미 송금했으니 어쩔 수 없다"고 포기하면 잔액이 인출되어 회수가 어려워집니다. 30분 안에 지급정지가 환급의 결정적 조건.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 메신저피싱 환급 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"이체 후 1시간 안 신고했다고 거부"</strong> — 통신사기피해환급법 적용 여부와 별개로 빠를수록 잔액 보존 가능성. 늦었더라도 일단 신고.</li>\n<li><strong>"본인 부주의로 송금했으니 환급 불가"</strong> — 통신사기피해환급법은 송금자 과실 여부와 무관하게 적용. 환급 거부 사유 안 됨.</li>\n<li><strong>"가족 명의 계좌니까 환급 안 된다"</strong> — 사기 의심 정황(차명·다중 송금)이 보이면 환급 트랙 적용 가능.</li>\n<li><strong>"추가 입금하면 회수해드린다" 2차 사기</strong> — 환급 명목 추가 송금 요구는 100% 사기. 절대 응하지 마세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 금융감독원 1332 / 경찰청 112 또는 ECRM(ecrm.police.go.kr) / 송금 은행 고객센터 / 대한법률구조공단 132 / 범죄피해자지원센터 1577-1295.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱·메신저피싱 자금세탁 방조 책임',
        summary:
          '대법원 2025도15768 사건(대법원, 2026.01.15 선고)에서 법원은 상품권업체를 운영하면서 보이스피싱 또는 인터넷도박 조직의 의뢰에 따라 자금세탁을 해주고 수수료를 받은 사안에서, 범죄수익은닉의 규제 및 처벌 등에 관한 법률 위반 책임을 인정했습니다. 메신저피싱 환급 사건에서도 자금세탁 경로의 중간 가담자(상품권업체·환전상·중개인)에게도 형사 책임이 미칠 수 있다는 시사점이 있어 환급·민사 청구 대상이 운영자뿐 아니라 자금세탁 가담자까지 확대될 수 있습니다.',
        takeaway: '메신저피싱 사기는 운영자뿐 아니라 자금세탁 가담자(상품권·환전·인출책)까지 형사·민사 책임을 검토할 수 있어, 송금 후 자금이 어디로 흘러갔는지 은행 추적 자료를 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '카톡 사칭자 번호는 알 수 있나요?',
        answer:
          '<strong>경찰을 통해 통신사 가입자 정보 조회 가능합니다.</strong> 다만 대포폰·해외 번호인 경우가 많아 추적은 어렵지만, 가입 정보·기지국 위치는 확인 가능. 자금세탁 가담자 추적이 더 효과적인 경우도 있어요.',
      },
      {
        question: '이미 가해자가 인출했으면 환급이 불가능한가요?',
        answer:
          '<strong>잔액이 0이면 환급은 어렵지만 형사 고소·민사 청구는 별도 가능합니다.</strong> 가해자·자금세탁 가담자가 특정되면 손해배상 청구 가능. 다수 피해자 공동 고소도 검토.',
      },
      {
        question: '카드사 차지백 같은 트랙은 없나요?',
        answer:
          '<strong>송금은 차지백 대상 아닙니다.</strong> 다만 카드 결제·앱카드 결제로 사기당했다면 차지백 가능. 송금만 한 경우는 통신사기피해환급법 트랙이 메인.',
      },
      {
        question: '본인 이름·계좌 정보는 어떻게 알아낸 거죠?',
        answer:
          '<strong>가족 SNS·개인정보 유출·다른 피싱에서 수집된 정보가 결합된 경우가 많습니다.</strong> 개인정보 유출 의심되면 i-PIN 비밀번호 변경 + 이동통신사 본인확인 강화 + 명의도용 차단(MSAFER) 신청 검토.',
      },
      {
        question: '가족이 평소 자주 송금 부탁한 사이라 의심 못했어요',
        answer:
          '<strong>그런 경우가 많아서 통신사기피해환급법은 송금자 과실과 무관하게 적용됩니다.</strong> 환급 거부 사유 안 됨. 다음번부턴 새 카톡·새 번호에서 송금 요구는 무조건 영상통화로 본인 확인하는 습관 권장.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 환급 절차', href: '/guide/fraud/fraud-voice-phishing-relief-law-application' },
      { label: '딥페이크 사칭 송금 회수', href: '/guide/fraud/fraud-deepfake-impersonation-money' },
      { label: '계좌 동결 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '계좌 동결 회복 단계', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 5. fraud / unmanned-store-payment-fraud ───
  {
    domain: 'fraud',
    slug: 'fraud-unmanned-store-payment-fraud',
    keyword: '무인매장 키오스크 결제 사기',
    questionKeyword: '무인매장 키오스크에서 결제했는데 상품이 안 나오고 환불도 안 돼요. 점주에게 책임 물을 수 있나요?',
    ctaKeyword: '무인매장 결제 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '무인매장 결제 사기 — 점주 책임·환불 4단계 정리 | 로앤가이드',
      description:
        '무인매장·키오스크 결제 후 상품 미수령·이중결제 피해라면 KCA 피해구제 + 카드 차지백 + 점주 책임 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"무인 아이스크림 가게에서 5만원 결제했는데 기계가 멈춰서 상품이 안 나왔어요. 점주 연락처로 카톡 보냈는데 답도 없고, 다시 가도 키오스크 화면만 깜박입니다." 무인매장·키오스크 결제 사기는 점주 부재·관리 부실로 환불이 막히는 패턴이 많습니다. 결제 후 7일 내 카드 차지백이 가장 빠른 회수 수단이고, KCA 피해구제·점주 직접 청구·전자상거래법 신고를 병행해볼 수 있어요. 결제 영수증·상품 미수령 증빙·점주 연락 거절 회신을 확보하는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 무인매장 결제 분쟁의 5가지 유형은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 유형별로 환불·청구 트랙이 달라집니다.</strong></p>\n<ul>\n<li><strong>상품 미수령</strong> — 결제 후 키오스크·자판기 오류로 상품 미배출. 가장 흔한 유형.</li>\n<li><strong>이중·중복 결제</strong> — 같은 거래가 2회 이상 결제됨. 카드사 즉시 이의제기 가능.</li>\n<li><strong>가품·하자 상품</strong> — 결제한 상품이 가품·유통기한 경과·하자.</li>\n<li><strong>점주 연락 두절</strong> — 매장 안내 연락처가 거짓·차단. 사업자등록 미등록 매장도 다수.</li>\n<li><strong>현금만 받는 키오스크 + 잔액 미반환</strong> — 거스름돈·잔액 미반환. 영수증 미발급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄(점주 고의 시) + 민법 제390조 채무불이행 + 전자상거래법 제13조(사업자 정보 표시 의무). 이중결제는 카드사 약관상 즉시 환불 의무.</blockquote>',
      },
      {
        title: 'Q. 점주에게 책임을 물을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 점주(사업자)는 매장 관리·환불 처리 책임이 있고, 부재·연락 두절도 책임 회피 사유가 안 됩니다.</strong></p>\n<ul>\n<li><strong>매장 안내 연락처 표시 의무</strong> — 전자상거래법 제13조에 따라 사업자명·연락처·주소 명시. 미표시·허위는 과태료.</li>\n<li><strong>키오스크 오류 책임</strong> — 점주가 기기 정상 작동 관리 의무. 오류로 인한 미수령은 환불 의무.</li>\n<li><strong>고의·중과실 시 사기죄</strong> — 점주가 알고 방치하거나 의도적 미환불이면 사기죄 검토.</li>\n<li><strong>매장 임대인·프랜차이즈 본사 보충 책임</strong> — 점주 폐업·연락 두절 시 임대인·프랜차이즈 본사에 추가 청구 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결제 형태·점주 응대에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 신고 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 즉시 보전 (당일 내)</strong> — 키오스크 화면·결제 영수증·상품 미수령 사진/동영상 + 매장 안내 연락처·사업자등록 번호 캡처.</li>\n<li><strong>2단계 — 카드사 차지백 신청 (결제 후 7일 내 권장)</strong> — "재화 미제공·이중결제" 사유로 이의제기. 가장 빠른 회수.</li>\n<li><strong>3단계 — 한국소비자원 피해구제 (1372)</strong> — 사업자 자율 해결 권고 30일. 응답 없으면 분쟁조정위 회부.</li>\n<li><strong>4단계 — 점주 직접 청구 + 사기 고소 (필요 시)</strong> — 점주 연락 두절·환불 거부·다수 피해자면 ECRM 사기 고소. 사업자등록 미등록 매장은 전자상거래법 위반 신고.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "5만원 정도니 그냥 손해 보자"고 넘기면 같은 매장에서 다른 피해자가 계속 발생합니다. KCA 신고 5분이면 가능, 누적 신고가 매장 시정 명령의 출발점.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr</li>\n<li><strong>공정거래위원회</strong> — 1372 / ftc.go.kr (전자상거래법 위반·사업자 미표시 신고)</li>\n<li><strong>카드사 고객센터</strong> — 차지백·이중결제 환불</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n<li><strong>지자체 시·구청 위생과·소비자보호과</strong> — 무인매장 위생·관리 신고</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보처리장치 입력 매개 기망과 사람에 대한 사기죄',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 등 정보처리장치에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 직접 대상으로 한 것은 아니나 그 정보처리 결과를 통해 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. 무인매장 키오스크 결제 사기에서도 점주가 알고 방치하거나 의도적 미환불 정황이 있으면 키오스크 결제 시스템을 매개로 한 기망 행위로 평가될 수 있다는 시사점이 있습니다.',
        takeaway: '무인매장 키오스크 결제 사기는 점주 고의·방치 정황이 입증되면 단순 채무불이행을 넘어 사기죄로 평가될 수 있어, 결제 영수증·상품 미수령 증빙·점주 연락 거절 회신을 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '점주가 "본사에 문의하라"며 책임을 회피하면요?',
        answer:
          '<strong>매장 운영 책임은 점주에게 있습니다.</strong> 본사·기기 제조사 책임은 점주가 본사에 별도 청구할 문제. 소비자는 점주에게 환불 청구가 1차 트랙.',
      },
      {
        question: '이중결제는 어떻게 환불받나요?',
        answer:
          '<strong>카드사 고객센터에 즉시 이의제기, 통상 3~5영업일 내 환불 처리.</strong> 영수증·결제 내역 첨부. 카드사가 거절하면 금감원 분쟁조정(1332).',
      },
      {
        question: '매장 안내 연락처가 거짓이거나 차단인 경우는요?',
        answer:
          '<strong>전자상거래법 제13조 위반으로 공정위 신고 + 사업자등록 정보(ftc.go.kr 사업자정보공개) 조회로 점주 신원 확인 가능합니다.</strong> 점주 신원이 특정되면 직접 청구·고소 진행.',
      },
      {
        question: '현금만 받는 키오스크에서 잔액을 못 받았어요',
        answer:
          '<strong>영수증·CCTV 확인 + 점주 청구가 1차 트랙.</strong> 점주 무응답 시 KCA 피해구제 + 사기죄 검토. 같은 매장에서 같은 피해 다수 발견되면 공동 신고 효과적.',
      },
      {
        question: '매장이 폐업했는데 환불 청구가 가능한가요?',
        answer:
          '<strong>점주 개인 상대로 민사·형사 청구 가능합니다.</strong> 사업자등록 폐업과 별개로 사업자(법인 또는 개인) 책임은 유지. 폐업 직전 미환불 정황이 다수면 사기죄 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '온라인 카페·커뮤니티 회비 환급', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
      { label: 'SNS 광고 환불 거부 사기', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '사기 형사 부대 배상명령', href: '/guide/fraud/fraud-victim-criminal-attached-civil-claim' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },
];
