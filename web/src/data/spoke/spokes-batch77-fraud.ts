import { SpokePage } from '../spoke-pages';

// batch77 fraud — 6개 (2026-05-25)
//
// 고유 존재 이유:
// 1. 중고차 주행거리 되돌림 — batch76 중고 명품 가품·중고거래 류와 분기. '계기판 되돌림 + 무등록 매매상 + 허위 주행거리 + 환불 거부 + 형사고소' 트랙.
// 2. 쇼핑몰 선결제 미배송 잠적 — 일반 온라인 쇼핑 사기와 분기. '선결제 후 배송 지연 반복 + 사이트 폐쇄 + 운영자 잠적 + 전자상거래법 + 사기' 트랙.
// 3. 구인 빙자 대포통장 명의대여 — 보이스피싱 수금책 류와 분기. '재택알바 구인공고 + 통장·카드 양도 유도 + 대포통장 악용 + 전금법 연루 위험' 트랙.
// 4. 다단계 투자 모집 사기 — 코인·리딩방 투자사기 류와 분기. '고수익 배당 약속 + 하위모집 강요 + 방문판매법·유사수신 + 가입금 잠적' 트랙.
// 5. 휴대폰 개통 명의도용 — 신분증 류 범죄와 분기. '신분증·명의 도용 + 본인 모르게 개통 + 소액결제 피해 + 명의도용 신고' 트랙.
// 6. 온라인 게임 아이템 거래 사기 — 일반 중고거래 사기와 분기. '선입금 후 미전달 + 계정 회수 + 정보통신망·사기 + 게임사 협조' 트랙.

export const spokesBatch77Fraud: SpokePage[] = [
  // ─── 1 ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-odometer-rollback-track',
    keyword: '중고차 주행거리 되돌림 매매 사기',
    questionKeyword: '중고차 매매상이 계기판 주행거리를 실주행보다 적게 되돌려 시세로 팔고, 하자 발견 후 환불·보상을 거부하고 있어요.',
    ctaKeyword: '중고차 주행거리 되돌림 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 되돌림 사기 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '중고차 계기판 주행거리를 되돌린 매매상에게 시세로 차를 사고 환불을 거부당했다면 사기·자동차관리법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고차 사이트에서 \'실주행 6만km, 무사고, 점검완료\'라는 문구를 믿고 시세 이상의 금액을 내고 차를 매입했습니다. 한 달쯤 지나 정비소에서 엔진·미션 상태가 주행거리 6만km와 맞지 않는다는 진단을 받았고, 전문 업체에 조회하니 계기판이 조작된 흔적이 확인됐어요. 매매상에게 환불과 보상을 요청했지만 \'이미 차를 사용했고 자신들은 정상 차량을 인도했다\'며 거부했고, 연락도 점점 끊겨갔습니다. 알고 보니 해당 매매상이 복수의 차량에 동일한 수법을 써온 정황도 드러났어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 자동차관리법 제57조는 \'주행거리계 조작·변경 금지\'를 규정하는 영역입니다. 계기판 되돌림 + 허위 주행거리 고지 + 환불 거부 + 다수 차량 반복 정황 결합은 사기 + 자동차관리법 위반 결합 트랙. 피해자라면 ① 조작 입증 ② 매매 자료 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 주행거리 되돌림 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 조작·매매·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 조작 입증</strong> — 전문 진단·자동차 이력서비스(카히스토리) 조회, 계기판 조작 흔적 확인.</li>\n<li><strong>② 매매 자료</strong> — 매매계약서·광고 문구·결제 영수증·매매상 신원 자료.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 허위 고지·환급 청구.</li>\n<li><strong>④ 사기·자동차관리법 고소</strong> — 형법 제347조 + 자동차관리법 제57조 조작 금지 위반 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 매매대금 차액·수리비·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주행거리 조작이 확인되면 처음부터 허위 정보로 매수를 유도했는지가 사기 평가의 결정 사정. 자동차관리법 위반은 형사처벌 대상이며 민·형사 병행 트랙이 가능한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자동차 진단·소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 조작 증거 즉시 확보 (인지 당일)</strong> — 카히스토리 조회·정비소 진단서·계기판 사진.</li>\n<li><strong>2단계 — 매매 자료 정리 (1주 내)</strong> — 매매계약서·광고 문구 캡처·결제 내역·매매상 사업자 정보.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 허위 주행거리 고지·차액 환급 신청.</li>\n<li><strong>4단계 — 경찰 사기·자동차관리법 고소 (시효 7년)</strong> — 매매상 + 다수 차량 반복 정황 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 매매대금 차액·수리비·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 주행거리 되돌림 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 조작·매매·환불 갈래입니다.</strong></p>\n<ul>\n<li><strong>자동차 이력서비스(카히스토리) 주행거리 이력 조회 결과</strong></li>\n<li><strong>정비소·전문업체 계기판 조작 진단서·의견서</strong></li>\n<li><strong>중고차 매매계약서·광고 문구(\'실주행 X만km\') 캡처</strong></li>\n<li><strong>매매대금 결제·이체 영수증</strong></li>\n<li><strong>매매상 사업자 등록·신원 자료</strong></li>\n<li><strong>환불·보상 요구 및 거부 정황 (문자·녹취·메일)</strong></li>\n<li><strong>동일 매매상의 다수 차량 반복 정황 자료 (후기·제보)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카히스토리는 누구나 무료로 조회 가능한 공시 자료. 주행거리 이력과 계기판 수치 간 격차가 클수록 조작 입증에 유리할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>매매상의 인식</strong> — \'알고 팔았는지\' vs \'본인도 몰랐다\' 항변 대응.</li>\n<li><strong>조작 시점·주체</strong> — 누가, 언제 되돌렸는지 추적 자료.</li>\n<li><strong>차량 사용에 따른 감액 다툼</strong> — 사용 기간·거리 공제 여부.</li>\n<li><strong>다수 차량 반복 정황</strong> — 동일 수법 반복이 고의 입증 가속.</li>\n<li><strong>환수 범위</strong> — 매매대금 차액·수리비·위자료 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>국토교통부 자동차 민원 대국민포털</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무등록 중고차 매매 사기 평가 영역',
        summary:
          '대법원 2019도16263(대법원, 2020.08.20 선고) 영역에서 법원은 무등록 중고차 매매상사를 운영하며 피해자들을 기망하여 중고차량을 불법 판매해 금원을 편취할 목적으로 구성된 조직의 범죄단체·집단 해당성을 판단하면서, 공동목적 아래 역할분담에 따라 반복적으로 사기를 실행한 계속적 결합체 정황을 인정했습니다. 주행거리를 되돌린 차량을 허위 광고로 반복 판매한 매매상 사안에도 조직적 편취 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '계기판 되돌림 + 허위 주행거리 고지 + 환불 거부 + 반복 정황 결합 시 사기·자동차관리법 평가 영역 — 변호인 상담·소비자원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '매매상이 \'본인도 몰랐다\'고 주장합니다',
        answer:
          '<strong>다수 차량 반복 정황은 인식 항변을 반박하는 영역입니다.</strong> 카히스토리·정비 기록 종합 입증.',
      },
      {
        question: '차를 한 달 이상 사용했는데 환불이 될까요?',
        answer:
          '<strong>사용 기간·거리에 따른 감액 다툼이 있는 영역입니다.</strong> 차액·수리비 산정 방식 확인 필요.',
      },
      {
        question: '자동차관리법 위반으로도 신고할 수 있나요?',
        answer:
          '<strong>자동차관리법 제57조 주행거리계 조작 금지 위반은 형사처벌 대상 영역입니다.</strong> 사기죄와 병행 고소 가능.',
      },
      {
        question: '수리비도 청구할 수 있나요?',
        answer:
          '<strong>매매대금 차액·수리비·위자료 청구 영역입니다.</strong> 정비소 진단서·견적서가 산정 근거.',
      },
      {
        question: '같은 매매상에 당한 피해자가 더 있어요',
        answer:
          '<strong>동일 수법 반복 피해자 결집은 고의 입증을 강화하는 영역입니다.</strong> 공동 고소·분쟁조정 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '중고차 주행거리 조작 사기', href: '/guide/fraud/fraud-used-car-odometer-rollback' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 2 ───
  {
    domain: 'fraud',
    slug: 'fraud-shopping-mall-prepay-nondelivery-track',
    keyword: '쇼핑몰 선결제 미배송 잠적 사기',
    questionKeyword: '온라인 쇼핑몰에 선결제했는데 배송이 계속 지연되다 사이트가 폐쇄되고 운영자가 잠적했어요.',
    ctaKeyword: '쇼핑몰 선결제 미배송 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '쇼핑몰 선결제 미배송 잠적 사기 — 5단계 환수 | 로앤가이드',
      description:
        '온라인 쇼핑몰 선결제 후 배송 지연 반복 끝에 사이트 폐쇄·운영자 잠적을 당했다면 사기·전자상거래법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"SNS 광고를 보고 온라인 쇼핑몰에서 상품을 선결제했습니다. 배송이 예정일을 넘겨도 오지 않아 문의하면 \'공급 지연\'을 반복하다 결국 사이트 자체가 폐쇄됐어요. 운영자 연락처로 전화해도 수신 거부, 고객센터 이메일도 반송되기 시작했습니다. 같은 쇼핑몰에서 비슷한 시기에 결제한 소비자들이 온라인 커뮤니티에 모여 동일한 미배송·잠적 피해를 호소하고 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 전자상거래 등에서의 소비자보호에 관한 법률은 통신판매업자의 청약철회·환급 의무를 규정하는 영역입니다. 선결제 + 배송 지연 반복 + 사이트 폐쇄 + 운영자 잠적 결합은 사기 + 전자상거래법 위반 결합 트랙. 피해자라면 ① 결제 입증 ② 지연·잠적 자료 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 카드사 차지백 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 쇼핑몰 선결제 미배송 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·지연·조정·고소·차지백 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제 입증</strong> — 주문·결제 내역·주문번호·상품 광고 캡처.</li>\n<li><strong>② 지연·잠적 자료</strong> — 배송 지연 안내·사이트 폐쇄·연락두절 정황.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 청약철회·환급 청구.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 배송 의사 없는 기망 유인 정황.</li>\n<li><strong>⑤ 카드사 차지백·이체 취소</strong> — 신용카드 결제 취소·계좌이체 피해구제 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 결제 시점부터 배송 의사나 재고가 없었다면 처음부터 대금만 편취할 목적이었는지가 사기 평가의 결정 사정. 다수 피해자 결집이 잠적 입증을 가속합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·카드사·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·잠적 자료 즉시 보존 (인지 당일)</strong> — 주문·결제 내역·광고·지연 안내·폐쇄 정황 캡처.</li>\n<li><strong>2단계 — 카드사 차지백 신청 (결제일로부터 60~120일 이내)</strong> — 신용카드 결제 취소·이의제기.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 통신판매 청약철회·환급 신청.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (시효 7년)</strong> — 운영자 신원 특정 + 다수 피해자 공동.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 결제대금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">쇼핑몰 선결제 미배송 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·지연·잠적 갈래입니다.</strong></p>\n<ul>\n<li><strong>주문 확인서·주문번호·결제 영수증·카드 전표</strong></li>\n<li><strong>상품 광고·상세 페이지 캡처 (가격·배송 안내 포함)</strong></li>\n<li><strong>배송 지연 안내 문자·이메일·채팅 내역</strong></li>\n<li><strong>사이트 폐쇄·접속 불가 정황 캡처</strong></li>\n<li><strong>운영자 연락처·수신 거부·이메일 반송 정황</strong></li>\n<li><strong>사업자 등록번호·통신판매업 신고 여부 자료</strong></li>\n<li><strong>같은 쇼핑몰 다수 피해자 커뮤니티 게시글·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신용카드 차지백은 결제일로부터 60~120일 이내 신청이 원칙. 계좌이체 피해는 경찰 신고 후 은행 피해구제 신청 절차를 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 결제 시점부터 배송 의사·재고가 없었는지 정황 종합.</li>\n<li><strong>운영자 신원 특정</strong> — 사업자 등록·도메인·결제 계좌 추적.</li>\n<li><strong>차지백 기한</strong> — 카드사별 이의제기 기한(60~120일) 확인.</li>\n<li><strong>통신판매업 미신고</strong> — 전자상거래법 위반 정황 병행.</li>\n<li><strong>다수 피해 결집</strong> — 동일 패턴 소비자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 (통신판매·전자상거래)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 편취 범의 판단 기준 영역',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 편취 범의는 계약 당시를 기준으로 피고인의 재력·환경·범행 내용·거래 이행과정 등 객관적 사정을 종합해 판단하며, 도급계약에서 처음부터 이행 의사·자력이 없었는지를 계약 체결 당시 기준으로 평가한다고 판시했습니다. 선결제만 받고 배송 의사나 재고가 없었던 쇼핑몰 사안에도 결제 시점의 이행 의사·자력을 나누어 검토해볼 수 있습니다.',
        takeaway: '선결제 + 배송 지연 반복 + 사이트 폐쇄 + 잠적 결합 시 사기·전자상거래법 평가 영역 — 변호인 상담·카드사 차지백·고소 권장.',
      },
    ],
    faq: [
      {
        question: '사이트가 폐쇄돼 주문 내역을 확인할 수 없어요',
        answer:
          '<strong>결제 내역·주문 확인 이메일·캡처를 사전에 보존하는 것이 핵심입니다.</strong> 카드사 거래 내역도 활용.',
      },
      {
        question: '계좌이체로 결제했는데 환불받을 수 있나요?',
        answer:
          '<strong>경찰 신고 후 은행 피해구제 절차를 검토할 수 있는 영역입니다.</strong> 송금 계좌·수취인 정보 보존.',
      },
      {
        question: '카드사 차지백 신청 기한이 지났어요',
        answer:
          '<strong>차지백 기한 경과 후에도 형사 고소·소비자원 분쟁조정 병행이 가능한 영역입니다.</strong> 민사 시효 3년 확인.',
      },
      {
        question: '운영자 신원을 알 수 없어요',
        answer:
          '<strong>사업자 등록·도메인·결제 계좌를 통한 추적이 가능한 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '피해자가 여럿인데 함께 고소할 수 있나요?',
        answer:
          '<strong>동일 패턴 다수 피해자 결집은 편취 범의 입증을 가속하는 영역입니다.</strong> 공동 고소·분쟁조정 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 사기 피해 환급', href: '/guide/fraud/fraud-online-shopping-fake-store-recovery' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 3 ───
  {
    domain: 'fraud',
    slug: 'fraud-job-offer-mule-account-track',
    keyword: '구인 빙자 대포통장 명의대여 사기',
    questionKeyword: '재택알바 구인공고를 믿고 통장·체크카드를 양도했는데 대포통장으로 악용되고 전자금융거래법 위반 혐의까지 받게 됐어요.',
    ctaKeyword: '구인 빙자 대포통장 명의대여 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '구인 빙자 대포통장 명의대여 사기 — 5단계 대응 | 로앤가이드',
      description:
        '재택알바 구인공고로 통장을 양도했다 대포통장으로 악용되고 전금법 혐의까지 받았다면 피해자·피혐의자 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'재택근무 가능, 일당 10만원\'이라는 구인 문자를 받고 연락했더니 \'회사 업무용 계좌가 필요하다\'며 통장과 체크카드를 양도해달라고 했어요. 정상적인 회사라고 믿고 계좌와 카드를 넘겼는데, 이후 경찰로부터 \'해당 계좌가 보이스피싱에 이용됐다\'는 연락을 받았습니다. 보이스피싱 피해자가 제 명의 계좌로 돈을 보냈고, 저는 전자금융거래법 위반으로 조사를 받게 됐어요. 처음부터 범행 조직이 대포통장 모집을 위해 재택알바로 위장한 사기였음을 뒤늦게 알게 됐습니다." 형법 제347조는 기망에 의해 재물을 교부받게 하는 사기죄를 처벌하는 영역이고, 전자금융거래법 제6조 제3항은 \'접근매체(통장·카드)의 양도 금지\'를 규정하는 영역입니다. 재택알바 위장 + 통장·카드 양도 유도 + 대포통장 악용 + 전금법 연루 결합은 사기 피해자이면서 동시에 전금법 위반 피혐의자가 되는 복합 트랙. 피해자라면 ① 기망 입증 ② 수사 대응 ③ 피해구제 신청 ④ 진술 정리 ⑤ 형사 대응 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구인 빙자 대포통장 명의대여 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기망 입증·수사 대응·피해구제·진술·형사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기망 입증</strong> — 구인 문자·채용 공고·지시 내용·양도 경위 자료.</li>\n<li><strong>② 경찰 수사 대응</strong> — 피혐의자가 된 경위 진술, 기망 당한 정황 입증.</li>\n<li><strong>③ 금융감독원·은행 피해구제 신청</strong> — 보이스피싱 피해자를 위한 계좌 동결 해제 협력.</li>\n<li><strong>④ 진술 정리</strong> — 구인 공고·지시·양도 경위를 시간 순으로 정리.</li>\n<li><strong>⑤ 형사 대응</strong> — 기망에 의한 피해자 입장 강조, 고의 없음 소명.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전금법 위반으로 조사를 받더라도 구인 공고 기망에 의해 통장을 넘긴 사정이 인정되면 형사 책임 범위가 달라질 수 있는 영역. 기망 정황 자료가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·금감원·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 구인 기망 자료 즉시 보존 (인지 당일)</strong> — 구인 문자·채팅·지시 내용·통장 양도 경위 캡처.</li>\n<li><strong>2단계 — 계좌 지급정지·신고 (즉시)</strong> — 은행 방문 계좌 거래 중지 요청 + 경찰청 112 신고.</li>\n<li><strong>3단계 — 경찰 수사 협조 (조사 시)</strong> — 기망 피해자 입장 진술, 구인 경위·지시자 정보 제공.</li>\n<li><strong>4단계 — 금감원 1332 피해구제 협조</strong> — 보이스피싱 피해자 환급 절차 협조.</li>\n<li><strong>5단계 — 형사 대응 (기소 시)</strong> — 기망 정황 입증, 고의 없음 소명 자료 준비.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">구인 빙자 대포통장 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기망·양도·수사 갈래입니다.</strong></p>\n<ul>\n<li><strong>구인 문자·SNS 채용 공고 캡처 (\'재택알바\' 등 문구 포함)</strong></li>\n<li><strong>통장·카드 양도 지시 채팅·문자 내역 전체</strong></li>\n<li><strong>통장·카드 양도 경위 자료 (택배 발송·직접 전달 등)</strong></li>\n<li><strong>지시자 연락처·계좌·신원 정보</strong></li>\n<li><strong>경찰 수사 통보·소환장·진술 요약</strong></li>\n<li><strong>은행 계좌 동결·거래 이력 확인서</strong></li>\n<li><strong>평소 정상 금융 거래 이력 (범행 인식 없음 자료)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 구인 공고가 재택알바·고수익 문자 형태였다면 기망 정황이 뚜렷한 영역. 지시 채팅 전체를 삭제하지 말고 빠짐없이 보존해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전금법 위반 고의 여부</strong> — 기망에 의한 양도 vs 범행 가담 인식 여부.</li>\n<li><strong>처분행위 해당성</strong> — 기망에 의한 착오로 통장을 양도했는지 평가.</li>\n<li><strong>보이스피싱 피해자 환급 절차</strong> — 계좌 동결 해제 협력 방법.</li>\n<li><strong>지시자(모집책) 추적</strong> — 연락처·계좌·구인 경로 추적.</li>\n<li><strong>형사 책임 범위</strong> — 기망 피해자 입장 소명 자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (보이스피싱 피해구제)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 도구 이용·사기 기수 평가 영역',
        summary:
          '대법원 2017도3894(대법원, 2017.05.31 선고) 영역에서 법원은 보이스피싱 가해자가 타인을 기망하여 피해자로부터 편취한 재물을 전달하는 도구로만 이용한 경우, 피해자에 대한 사기죄 외에 도구로 이용된 타인에 대한 별도의 사기죄가 성립하지 않는다고 판시했습니다. 재택알바 위장으로 기망당해 통장을 양도한 사안에도 도구로 이용된 명의인의 인식·고의 여부를 나누어 검토해볼 수 있습니다.',
        takeaway: '구인 기망 + 통장 양도 유도 + 대포통장 악용 결합 시 전금법·사기 평가 영역 — 변호인 상담·기망 정황 입증·경찰 협조 권장.',
      },
    ],
    faq: [
      {
        question: '재택알바인 줄 알고 통장을 줬는데 처벌받나요?',
        answer:
          '<strong>기망에 의한 양도라면 고의 없음을 소명하는 것이 핵심 영역입니다.</strong> 구인 문자·지시 채팅 전체 보존.',
      },
      {
        question: '이미 계좌가 동결됐어요',
        answer:
          '<strong>경찰·은행 협조로 동결 해제 절차를 검토할 수 있는 영역입니다.</strong> 기망 경위 진술이 핵심.',
      },
      {
        question: '지시한 사람을 신고할 수 있나요?',
        answer:
          '<strong>모집책(지시자)에 대한 사기·전금법 공범 고소가 가능한 영역입니다.</strong> 연락처·계좌 자료 보존.',
      },
      {
        question: '보이스피싱 피해자에게 배상해야 하나요?',
        answer:
          '<strong>기망 피해자 지위가 인정되면 배상 책임 범위가 달라질 수 있는 영역입니다.</strong> 변호인 상담 권장.',
      },
      {
        question: '경찰에 불려갔는데 무엇을 준비해야 하나요?',
        answer:
          '<strong>구인 문자·지시 채팅·양도 경위 자료를 시간 순으로 정리하는 것이 핵심입니다.</strong> 진술 전 법률구조공단 상담.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '보이스피싱 수금책 방어', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '대포통장 가담 방어', href: '/guide/fraud/fraud-money-mule-accused-defense' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 4 ───
  {
    domain: 'fraud',
    slug: 'fraud-multilevel-pyramid-recruit-track',
    keyword: '다단계 투자 모집 사기',
    questionKeyword: '고수익 배당과 하위모집 수당을 약속하는 다단계 투자에 가입금을 냈는데 배당이 끊기고 운영진이 잠적했어요.',
    ctaKeyword: '다단계 투자 모집 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다단계 투자 모집 사기 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '고수익 배당과 하위모집 수당을 약속한 다단계 투자에 가입금을 냈다 배당이 끊기고 잠적당했다면 사기·유사수신 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"지인 소개로 \'월 10% 수익 배당 + 하위회원 모집 시 추가 수당\'을 약속하는 투자 모임에 가입했습니다. 가입금 수백만원을 내고 하위회원도 몇 명 소개했는데, 처음 몇 달은 배당이 들어왔어요. 그런데 시간이 갈수록 배당이 줄더니 결국 완전히 끊겼고, 모집 조직장은 \'시장 상황 때문\'이라며 구체적 해명 없이 연락을 줄이다 결국 잠적했습니다. 알고 보니 신규 가입금으로 기존 배당을 돌려막는 전형적인 다단계·폰지 구조였고, 소개한 지인들도 같은 피해를 입었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 유사수신행위의 규제에 관한 법률은 \'원금·확정 수익을 약정한 자금 조달\'을, 방문판매 등에 관한 법률은 \'다단계 후원수당 범위\'를 규제하는 영역입니다. 고수익 배당 약속 + 하위모집 강요 + 가입금 편취 + 잠적 결합은 사기 + 유사수신·방판법 결합 트랙. 피해자라면 ① 가입 입증 ② 배당·잠적 자료 ③ 공정위·금감원 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다단계 투자 모집 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·배당·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입 입증</strong> — 가입 계약서·가입금 결제·배당 약속 자료.</li>\n<li><strong>② 배당·잠적 자료</strong> — 배당 수령 내역·배당 중단 정황·잠적 경위.</li>\n<li><strong>③ 공정위·금감원 신고</strong> — 유사수신·방판법 위반 정황 신고.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 처음부터 지급 의사·자력 부재 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 가입금·배당 미지급액·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신규 가입금으로 기존 배당을 돌려막는 구조는 처음부터 원금·수익 지급 능력이 없었는지가 사기 평가의 결정 사정. 유사수신 위반 자체도 독립 처벌 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 공정위·금감원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입·배당 자료 즉시 보존 (인지 당일)</strong> — 가입 계약서·배당 약속·수령 내역·잠적 정황 캡처.</li>\n<li><strong>2단계 — 자금 흐름·조직 구조 정리 (1주 내)</strong> — 가입금 이체 내역·하위모집 구조·조직장 신원.</li>\n<li><strong>3단계 — 공정거래위원회·금감원 1332 신고 (30~60일)</strong> — 유사수신·방판법 위반 신고.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 조직장·배후 + 다수 피해자 공동.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 가입금·배당 미지급액·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">다단계 투자 모집 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·배당·조직 갈래입니다.</strong></p>\n<ul>\n<li><strong>가입 계약서·배당 약속 문서·홍보 자료</strong></li>\n<li><strong>가입금 결제·이체 영수증</strong></li>\n<li><strong>배당 수령 내역·배당 중단 통보·잠적 정황 캡처</strong></li>\n<li><strong>하위모집 구조·가입 권유 내용·조직도</strong></li>\n<li><strong>조직장·배후 신원·계좌·연락처</strong></li>\n<li><strong>신규 가입금으로 배당 돌려막기 정황 자료</strong></li>\n<li><strong>같은 조직 다수 피해자 연락처·진술</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 교부받은 가입금을 피해자들에게 반환했다가 다시 재투자받는 방식이라도 교부받을 때마다 사기죄가 성립하는 영역. 이체 내역 전체를 보존하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 처음부터 수익 지급 능력·의사가 없었는지 정황 종합.</li>\n<li><strong>유사수신 해당성</strong> — 원금·확정 수익 약정 여부 확인.</li>\n<li><strong>방판법 후원수당 범위</strong> — 하위모집 기반 수당 구조 위반 여부.</li>\n<li><strong>조직장·중간모집책 책임</strong> — 배후·조직 전체 공동 대응.</li>\n<li><strong>환수 범위</strong> — 가입금·배당 미지급액·위자료 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>공정거래위원회 (방판법·다단계)</strong></li>\n<li><strong>금융감독원 1332 (유사수신)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유사수신·다단계 후원수당 위반 평가 영역',
        summary:
          '대법원 2006도7470(대법원, 2007.01.25 선고) 영역에서 법원은 상품 거래를 가장하거나 빙자해 실질적으로 금원의 수입만 있는 경우에 한해 유사수신행위로 볼 수 있고, 방문판매법상 다단계판매원이 되려면 소매이익과 후원수당 모두를 권유받아야 하며 하위모집 기반 수당만으로는 규정된 다단계 구조에 해당하지 않는다고 판시했습니다. 고수익 배당 약속과 하위모집 수당으로 가입금을 모집한 사안에도 유사수신·방판법 위반 여부를 나누어 검토해볼 수 있습니다.',
        takeaway: '고수익 배당 약속 + 하위모집 강요 + 가입금 편취 + 잠적 결합 시 사기·유사수신·방판법 평가 영역 — 변호인 상담·공정위·금감원 신고·고소 권장.',
      },
    ],
    faq: [
      {
        question: '초반에 배당을 실제로 받았는데도 사기인가요?',
        answer:
          '<strong>초기 배당은 신뢰 유인용 폰지 정황 영역입니다.</strong> 신규 가입금으로 돌려막기한 정황이 핵심.',
      },
      {
        question: '지인에게 소개했는데 저도 책임이 있나요?',
        answer:
          '<strong>기망당해 소개한 경우 공범 가담 여부는 인식·고의 기준으로 평가되는 영역입니다.</strong> 변호인 상담 권장.',
      },
      {
        question: '유사수신으로도 신고할 수 있나요?',
        answer:
          '<strong>원금·확정 수익 약정 자금 조달은 유사수신 규제 위반 정황 영역입니다.</strong> 금감원 1332 신고 검토.',
      },
      {
        question: '가입금을 돌려받을 수 있나요?',
        answer:
          '<strong>가입금·배당 미지급액·위자료 청구 영역입니다.</strong> 이체 내역이 산정 근거.',
      },
      {
        question: '조직장이 해외에 있는 것 같아요',
        answer:
          '<strong>해외 도피 정황에도 국내 계좌 가압류·수사 공조가 가능한 영역입니다.</strong> 신원·자금 흐름 자료 보존.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '투자 다단계 피해 환수', href: '/guide/fraud/fraud-mlm-investment-recovery' },
      { label: '유사수신 투자 피해', href: '/guide/fraud/fraud-investment-mlm-structure' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 5 ───
  {
    domain: 'fraud',
    slug: 'fraud-phone-opening-identity-theft-track',
    keyword: '휴대폰 개통 명의도용 사기',
    questionKeyword: '신분증·명의가 도용돼 본인 모르게 휴대폰이 여러 대 개통됐고 소액결제 피해와 요금 청구가 발생했어요.',
    ctaKeyword: '휴대폰 개통 명의도용 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '휴대폰 개통 명의도용 사기 — 5단계 피해 대응 | 로앤가이드',
      description:
        '신분증·명의 도용으로 휴대폰이 무단 개통되고 소액결제·요금 피해가 발생했다면 명의도용·통신사기 5가지 피해 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"통신사에서 요금 납부 안내 문자를 받았는데 가입한 적 없는 번호가 3개나 청구돼 있었습니다. 통신사에 확인하니 본인 명의로 휴대폰이 여러 대 개통되고 소액결제까지 이뤄진 상태였어요. 신분증을 잃어버린 적은 없는데 신분증 사진이나 개인정보가 유출돼 도용된 것으로 추정됐습니다. 개통에 사용된 서류는 보지도 못했고, 통신사와 단말기 제조사 앞으로는 수백만원의 할부금까지 청구돼 있는 상황이에요." 형법 제347조는 \'기망에 의한 재물 교부\'를, 사문서위조·행사죄는 \'타인 명의 서류 위조·사용\'을, 정보통신망법은 \'개인정보 도용 이용\'을 각각 처벌하는 영역입니다. 신분증·명의 도용 + 무단 개통 + 소액결제 + 요금·할부금 청구 결합은 사기 + 사문서위조 + 명의도용 결합 트랙. 피해자라면 ① 명의도용 확인 ② 개통 중지·요금 이의 ③ 경찰 신고 ④ 통신사 분쟁조정 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 휴대폰 개통 명의도용 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·중지·신고·조정·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 명의도용 확인</strong> — 통신사 본인 명의 회선 조회(엠세이퍼·명의도용방지서비스).</li>\n<li><strong>② 개통 중지·요금 이의</strong> — 무단 개통 회선 즉시 해지·소액결제 환급 요청.</li>\n<li><strong>③ 경찰 신고</strong> — 사기·사문서위조·개인정보 도용 고소.</li>\n<li><strong>④ 통신사·방통위 분쟁조정</strong> — 할부금·요금 정정 청구.</li>\n<li><strong>⑤ 민사 배상</strong> — 소액결제·요금·할부금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명의도용 사실을 인지한 즉시 엠세이퍼 조회와 통신사 해지 신청이 피해 확산 방지의 결정 행동. 요금·할부금은 명의도용 피해 입증 시 이의신청이 가능한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 피해 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 통신사·경찰청·방통위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 엠세이퍼 전체 회선 조회 (인지 즉시)</strong> — msafer.or.kr 에서 본인 명의 개통 회선 전체 확인.</li>\n<li><strong>2단계 — 무단 개통 회선 해지·소액결제 차단 (즉시)</strong> — 각 통신사 고객센터 명의도용 신고·해지 요청.</li>\n<li><strong>3단계 — 경찰 신고 (즉시~1주)</strong> — 사기·사문서위조·개인정보 도용 고소 접수.</li>\n<li><strong>4단계 — 통신사·방통위 분쟁조정 (30~60일)</strong> — 요금·할부금 이의신청·정정 청구.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 소액결제·요금·할부금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">휴대폰 개통 명의도용 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 개통·피해·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>엠세이퍼(msafer.or.kr) 본인 명의 개통 회선 전체 조회 결과</strong></li>\n<li><strong>통신사 명의도용 신고·해지 접수 확인서</strong></li>\n<li><strong>무단 개통 요금·소액결제·할부금 청구 내역</strong></li>\n<li><strong>개통 시 사용된 서류 요청 자료 (통신사 열람 신청)</strong></li>\n<li><strong>개인정보 유출 경위 추정 자료 (피싱·분실·유출 정황)</strong></li>\n<li><strong>경찰 신고 접수증·사건 번호</strong></li>\n<li><strong>신용정보원·KCB 신용 이상 여부 조회 결과</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명의도용 발견 즉시 엠세이퍼에서 명의도용 방지 서비스(개통 차단)를 신청하면 추가 개통 피해를 막을 수 있는 영역. 신용정보 이상도 함께 점검하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>본인 확인 절차 위반</strong> — 통신사의 개통 본인 확인 의무 이행 여부.</li>\n<li><strong>요금·할부금 이의</strong> — 명의도용 입증 시 정정 청구 가능 영역.</li>\n<li><strong>개인정보 유출 경위</strong> — 유출 원인·주체 특정 자료.</li>\n<li><strong>신용 이상 점검</strong> — 대출·카드 추가 피해 여부 확인.</li>\n<li><strong>도용자 추적</strong> — 개통 시 사용 서류·단말기 수령 주소 자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>엠세이퍼(msafer.or.kr) — 명의도용 방지 서비스</strong></li>\n<li><strong>방송통신위원회 (통신 분쟁조정)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명의도용 전자문서 수신자 보호 평가 영역',
        summary:
          '대법원 2024다236754(대법원, 2025.08.14 선고) 영역에서 법원은 신분을 사칭한 자의 요청에 따라 피해자가 운전면허증 사진 등 개인정보를 전송한 사안에서, 전자문서 수신자가 작성자의 의사에 기한 것이라고 믿을 만한 정당한 이유가 있는지 판단하는 기준을 제시했습니다. 사칭·도용에 의해 개인정보가 유출돼 휴대폰이 무단 개통된 사안에도 피해자 보호와 책임 귀속을 나누어 검토해볼 수 있습니다.',
        takeaway: '신분증·명의 도용 + 무단 개통 + 소액결제·요금 피해 결합 시 사기·사문서위조·명의도용 평가 영역 — 엠세이퍼·경찰 신고·통신사 이의 권장.',
      },
    ],
    faq: [
      {
        question: '통신사에서 \'본인 개통\'이라며 요금을 내라고 합니다',
        answer:
          '<strong>명의도용 신고·경찰 접수증 제출로 요금 이의신청이 가능한 영역입니다.</strong> 개통 서류 열람 요청.',
      },
      {
        question: '신분증을 잃어버린 적이 없는데 어떻게 도용됐나요?',
        answer:
          '<strong>피싱·개인정보 유출 경위 확인이 필요한 영역입니다.</strong> 최근 개인정보 입력 이력 점검.',
      },
      {
        question: '소액결제 금액을 환급받을 수 있나요?',
        answer:
          '<strong>명의도용 입증 시 소액결제 환급 청구가 가능한 영역입니다.</strong> 통신사·소액결제 업체 이의신청.',
      },
      {
        question: '신용 등급에 영향이 있나요?',
        answer:
          '<strong>신용정보원·KCB 신용 이상 여부를 즉시 점검하는 것이 핵심입니다.</strong> 추가 대출·카드 발급 피해 확인.',
      },
      {
        question: '도용한 사람을 찾을 수 있나요?',
        answer:
          '<strong>개통 시 사용 서류·단말기 수령 주소 자료가 추적 근거 영역입니다.</strong> 경찰 수사 협조 요청.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '가족 명의 휴대폰 개통 사기', href: '/guide/fraud/fraud-family-mobile-line-identity-theft-installment-track' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 6 ───
  {
    domain: 'fraud',
    slug: 'fraud-online-game-item-trade-track',
    keyword: '온라인 게임 아이템 거래 사기',
    questionKeyword: '게임 아이템·계정을 선입금하고 거래했는데 아이템을 받지 못하거나 계정이 회수됐어요.',
    ctaKeyword: '게임 아이템 거래 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 게임 아이템 거래 사기 — 5단계 환수 대응 | 로앤가이드',
      description:
        '게임 아이템·계정 거래 선입금 후 미전달이나 계정 회수 피해를 당했다면 사기·정보통신망법 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"온라인 게임 커뮤니티에서 고가 아이템을 싸게 판다는 게시글을 보고 연락했습니다. 판매자가 \'먼저 입금하면 바로 전달\'이라고 해서 수십만원을 보냈는데, 아이템은 오지 않고 판매자는 채팅을 읽씹하다 결국 차단했어요. 또 다른 경우는 계정 거래 후 3일 만에 원래 주인이 회사에 계정 도용 신고를 해 계정이 회수됐고, 판매자에게 연락했지만 이미 잠적했습니다. 커뮤니티에서 동일 닉네임으로 같은 수법을 반복하는 정황도 확인됐어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 정보통신망 이용촉진 및 정보보호 등에 관한 법률은 \'불법 아이템·계정 거래 관련 침해\'를 규율하는 영역입니다. 선입금 요구 + 아이템 미전달 + 판매자 잠적 결합, 또는 계정 거래 후 회수 + 잠적 결합은 각각 사기 트랙. 피해자라면 ① 거래 자료 ② 잠적·차단 정황 ③ 게임사 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 게임 아이템 거래 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·잠적·게임사·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 자료</strong> — 거래 게시글·채팅·입금 내역·아이템 설명 캡처.</li>\n<li><strong>② 잠적·차단 정황</strong> — 판매자 읽씹·차단·게시글 삭제 캡처.</li>\n<li><strong>③ 게임사 신고</strong> — 아이템 미전달·계정 회수 경위 신고 및 거래 내역 자료 요청.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 선입금 편취·계정 회수 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 입금액·아이템 시세·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 선입금을 받은 뒤 아이템을 전달하지 않거나, 거래 후 계정을 회수한 것은 처음부터 이행 의사가 없었는지가 사기 평가의 결정 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 게임사·경찰청·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·잠적 자료 즉시 보존 (인지 당일)</strong> — 채팅·게시글·입금 내역·차단 정황 캡처.</li>\n<li><strong>2단계 — 게임사 신고 및 자료 요청 (1주 내)</strong> — 아이템 거래 내역·판매자 계정 정보 확인 요청.</li>\n<li><strong>3단계 — 경찰청 사이버사기 신고 (즉시)</strong> — 사기 고소장·입금 영수증·채팅 증거 제출.</li>\n<li><strong>4단계 — 판매자 계좌 추적 (수사 중)</strong> — 입금 계좌·수취인 신원 수사 협조.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 입금액·아이템 시세·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">게임 아이템 거래 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·입금·잠적 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래 게시글·아이템 설명·가격 정보 캡처</strong></li>\n<li><strong>판매자와의 채팅·DM 전체 내용</strong></li>\n<li><strong>입금 영수증·이체 내역·수취 계좌 정보</strong></li>\n<li><strong>판매자 읽씹·차단·게시글 삭제 정황 캡처</strong></li>\n<li><strong>계정 회수 시 게임사 공지·안내 메일</strong></li>\n<li><strong>게임 내 아이템 시세 자료 (피해액 산정)</strong></li>\n<li><strong>동일 닉네임·계좌 반복 사기 피해자 제보·증거</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게임사에 거래 내역·판매자 계정 정보 자료 요청을 하면 수사에 도움이 될 수 있는 영역. 입금 계좌는 수사기관이 신원을 추적하는 핵심 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 선입금 후 미전달 또는 계정 회수 정황 종합.</li>\n<li><strong>피해액 산정</strong> — 입금액·아이템 시세·게임 내 가치 기준 산정.</li>\n<li><strong>판매자 신원 특정</strong> — 입금 계좌·게임사 계정·IP 추적.</li>\n<li><strong>게임사 약관 외 거래 책임</strong> — 공식 플랫폼 외 거래 시 보호 범위.</li>\n<li><strong>반복 피해자 결집</strong> — 동일 닉네임·계좌 공동 고소.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>게임사 고객센터 (거래 내역·계정 자료 요청)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 처분행위 기망 평가 영역',
        summary:
          '대법원 2016도13362(대법원, 2017.02.16 선고) 영역에서 법원은 사기죄의 처분행위는 기망행위에 의한 피기망자의 착오와 재물 취득을 매개·연결하며, 피기망자가 처분행위의 의미나 내용을 인식하지 못했더라도 자신의 의사에 기초한 행위로 평가할 수 있는 경우 처분의사가 인정된다고 판시했습니다. 선입금 요구에 응해 입금했거나 계정을 양도했다가 사기를 당한 사안에도 기망에 의한 처분행위 여부를 나누어 검토해볼 수 있습니다.',
        takeaway: '선입금 후 미전달 또는 계정 거래 후 회수 + 잠적 결합 시 사기 평가 영역 — 변호인 상담·게임사 신고·경찰 고소 권장.',
      },
    ],
    faq: [
      {
        question: '게임 아이템 거래는 법적 보호를 받을 수 있나요?',
        answer:
          '<strong>사기죄는 아이템 거래에도 동일하게 적용되는 영역입니다.</strong> 경찰 신고·고소 가능.',
      },
      {
        question: '판매자가 차단해서 연락이 안 돼요',
        answer:
          '<strong>채팅 캡처·입금 계좌가 수사 추적의 핵심 자료 영역입니다.</strong> 게임사·수사기관 협조 요청.',
      },
      {
        question: '계정 거래 후 회수됐는데 환불받을 수 있나요?',
        answer:
          '<strong>처음부터 회수 의도가 있었다면 사기 평가 영역입니다.</strong> 입금액·아이템 시세 자료 보존.',
      },
      {
        question: '같은 수법으로 여러 명이 피해를 봤어요',
        answer:
          '<strong>동일 닉네임·계좌 반복 피해자 결집은 고의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
      {
        question: '게임사가 도움을 줄 수 있나요?',
        answer:
          '<strong>게임사에 거래 내역·계정 정보 자료 요청이 가능한 영역입니다.</strong> 수사기관 공문 발송 시 협조 사례 있음.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '게임 아이템 계정 회수 사기', href: '/guide/fraud/fraud-game-item-account-reclaim-track' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-second-hand-goods-noshow-platform' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },
];
