import { SpokePage } from '../spoke-pages';

// batch50 fraud 5개: 가짜 온라인스토어 카드사 분쟁 + 주식 리딩방 단체방 증거 + 인테리어 선입금 잠적 + 중고거래 미배송 단계 행동 + 상품권 구매 사기 사용정지
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 가짜 온라인 스토어·정상몰 사칭 사이트 결제 후 잠적된 피해자가 카드사 차지백 + KCA 분쟁조정 + ECRM 신고 5단계를 어떻게 병행해야 하는지 정리하도록 돕는 페이지다.
// 2. 이 페이지는 텔레그램·오픈채팅 주식 리딩방에서 단체 강요·VIP 등급 명목으로 송금했지만 손실난 피해자가 단체방 메신저 증거 보존 → 금감원 신고 → 형사 고소 절차를 검토하도록 돕는 페이지다.
// 3. 이 페이지는 인테리어·소규모 공사 선입금 후 시공업자 잠적·계약 불이행 시 공사대금 사기 입증 + KCA 피해구제 + 형사 고소 + 가압류 4트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 당근·번개장터 등 중고거래 플랫폼에서 결제 후 미배송·잠적 단계에서 플랫폼 신고와 보이스피싱 환급 적용 가능 케이스 분기·경찰 신고를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 문화상품권·도서상품권 등 선불 상품권 구매 사기를 당한 피해자가 발행사 사용정지 요청 → 매장 불가 시 환불 → 경찰 신고 절차를 정리하도록 돕는 페이지다.

export const spokesBatch50Fraud: SpokePage[] = [
  // ─── 1. fraud / online-shopping-fake-store-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-online-shopping-fake-store-recovery',
    keyword: '가짜 온라인 스토어 결제 환불',
    questionKeyword: '가짜 쇼핑몰에서 카드 결제했는데 물건이 안 와요. 어떻게 환불받나요?',
    ctaKeyword: '가짜 스토어 환불 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가짜 온라인 스토어 결제 환불 절차 5단계 총정리 | 로앤가이드',
      description:
        '가짜 쇼핑몰·정상몰 사칭 사이트에서 결제했다면 카드사 차지백 + KCA 피해구제 + ECRM 신고 5단계로 환불 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"인스타그램 광고에서 30% 할인 떠서 들어간 사이트에 카드로 18만원을 결제했어요. 결제 후 사이트가 닫히고 판매자 연락처는 가짜였습니다." 가짜 온라인 스토어는 정상몰을 사칭하거나 한시적으로 운영되다 잠적하는 패턴이라 송금형 사기와 회복 경로가 다릅니다. 카드 결제는 차지백(지급 거절), 계좌 이체는 ECRM 신고와 KCA 피해구제로 갈립니다. 결제 직후 7일이 회복 가능성이 가장 높은 시기이므로, 결제 화면·사이트 캡처·이체 내역을 즉시 보전하는 것이 출발점입니다.</p>',
    sections: [
      {
        title: '결제 수단별 회복 경로 4가지',
        content:
          '<p><strong style="color:#1e3a5f">결제 방식에 따라 환불·회복 절차가 달라집니다.</strong></p>\n<ul>\n<li><strong>신용카드·체크카드 결제</strong> — 카드사 차지백(이의제기) 신청. "용역·재화 미제공" 사유로 결제 취소 요청. 통상 결제 후 90일 이내 권장.</li>\n<li><strong>간편결제(카카오페이·토스·네이버페이)</strong> — 간편결제사 고객센터에 환급 요청 + 연계된 카드사 차지백 병행.</li>\n<li><strong>계좌 이체</strong> — 카드사 차지백 적용 안 됨. ECRM 신고 + KCA 피해구제 + 민사 청구 경로.</li>\n<li><strong>휴대폰 소액결제</strong> — 통신사 콜센터에 정정 요구. 사건사고사실확인원 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전자상거래법 제17조 청약철회권은 정상 사업자에게 적용되며, 가짜 스토어는 사업자 자체가 가짜라 청약철회권으로는 회복이 어려워 카드사 차지백·형사 신고 트랙을 우선 검토해야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환불 5단계',
        content:
          '<p><strong style="color:#1e3a5f">한국소비자원·카드사·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 즉시 캡처 (결제 직후 24시간 내)</strong> — 사이트 화면·결제 내역·판매자 정보·광고 링크·이메일 전체 캡처. 사이트가 닫히기 전 보전 필수.</li>\n<li><strong>2단계 — 카드사 이의제기·차지백 신청 (결제 후 90일 내 권장)</strong> — 카드사 고객센터에 "용역 미제공" 사유로 결제 취소 요청. 카드사 약관에 따라 180일까지도 접수 가능.</li>\n<li><strong>3단계 — 한국소비자원 피해구제 신청 (1372 또는 consumer.go.kr)</strong> — 사업자 자율 해결 권고 30일. 응답 없으면 분쟁조정위원회 회부.</li>\n<li><strong>4단계 — 경찰 사이버범죄 신고 (ecrm.police.go.kr)</strong> — 다수 피해자 발견 시 공동 고소단 구성 검토. 사건사고사실확인원 발급으로 다른 절차 보강.</li>\n<li><strong>5단계 — 분쟁조정 결정 또는 민사 소송 (3천만원 이하 소액사건)</strong> — 분쟁조정안 양측 수락 시 재판상 화해 효력. 결렬 시 소액사건심판으로 이행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결제 수단·시점에 따라 회복 경로가 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">차지백·피해구제 신청 시 아래 자료를 미리 정리해두면 처리 속도가 빨라집니다.</strong></p>\n<ul>\n<li><strong>결제 영수증·승인내역</strong> — 카드사 앱·문자에서 다운로드.</li>\n<li><strong>사이트 화면 캡처</strong> — 상품 상세·결제 화면·판매자 정보·약관 페이지 전체.</li>\n<li><strong>광고 링크·유입 경로</strong> — 인스타·페이스북·블로그 광고 캡처 + URL.</li>\n<li><strong>판매자와의 연락 기록</strong> — 카카오톡·이메일·문자 전체 캡처.</li>\n<li><strong>이체확인서 또는 결제 확인서</strong> — 은행·간편결제사 발급.</li>\n<li><strong>다른 피해자 진술</strong> — 같은 사이트 피해 글 캡처(블라인드·블로그·네이버지식인).</li>\n<li><strong>피해구제 신청서</strong> — kca.go.kr 양식 또는 카드사 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 사이트 닫힌 후 "그냥 포기"하면 회복 가능성이 사라집니다. 결제 직후 24시간 내 캡처를 PDF로 저장하고 카드사부터 연락하세요.</blockquote>',
      },
      {
        title: '⚠️ 가해자 측 변명 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 가짜 스토어 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"배송 지연이라 곧 발송"</strong> — 잠적 직전 이런 답변을 보내며 시간을 끄는 전형. 지연 답변 받아도 차지백 90일 시한은 따로 흘러갑니다.</li>\n<li><strong>"카드사가 알아서 처리해줄 것"</strong> — 차지백은 본인이 직접 신청해야 하고, 사유·증빙 없으면 카드사가 거절합니다.</li>\n<li><strong>판매자와 직접 합의 시도</strong> — 가짜 사업자는 추가 정보·계좌만 추가로 빼내려 함. 카드사·경찰 채널로만 응대하세요.</li>\n<li><strong>"사이트가 닫혀서 증거가 없다"</strong> — 카드사 결제내역·간편결제 영수증·광고 캡처만으로도 차지백 접수 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국소비자원 1372 / 카드사 고객센터 / 경찰청 ECRM(ecrm.police.go.kr) / KISA 118 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재화 가장 행위와 전기통신금융사기 환급 적용 범위',
        summary:
          '대법원 2024도6831 사건(대법원, 2024.10.25 선고)에서 법원은 통신사기피해환급법상 "재화의 공급 또는 용역의 제공 등을 가장한 행위"는 그 행위의 목적인 재화 공급과 재산상 이익 사이에 대가관계를 갖는 경우 환급 대상에서 제외되며, 단순 가짜 상품판매 사이트도 가장 여부에 따라 환급 트랙 적용이 달라진다고 판시했습니다.',
        takeaway: '가짜 스토어 결제는 통신사기피해환급법 적용보다 카드사 차지백·KCA 분쟁조정 트랙을 우선 검토하는 것이 회복 가능성을 높일 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '결제한 지 한 달이 지났는데 차지백이 가능한가요?',
        answer:
          '<strong>일반적으로 90일 이내가 권장되며 카드사 약관에 따라 180일까지도 접수 가능합니다.</strong> 한 달이면 충분히 가능 시점이라 즉시 카드사 고객센터에 신청하세요. 시간이 지날수록 입증이 어려워져요.',
      },
      {
        question: '간편결제(카카오페이·토스)로 결제했는데 차지백이 되나요?',
        answer:
          '<strong>간편결제에 연결된 카드 결제건은 차지백 가능합니다.</strong> 간편결제사 고객센터 + 카드사 양쪽에 동시 접수 권장. 충전금·계좌 출금 결제는 일반 계좌이체와 동일 절차로 진행돼요.',
      },
      {
        question: 'KCA 피해구제와 형사 고소를 동시에 진행해도 되나요?',
        answer:
          '<strong>3가지 트랙(카드사·KCA·경찰)은 동시 진행이 가능합니다.</strong> 형사 처벌과 민사·분쟁조정은 별개라 충돌하지 않아요. 각 채널의 시한이 따로 흘러가니 하나라도 놓치지 마세요.',
      },
      {
        question: '판매자가 외국 업체로 표시되어 있는데 회복이 어려운가요?',
        answer:
          '<strong>국내 결제·국내 카드사를 거쳤다면 차지백 절차는 그대로 적용됩니다.</strong> 다만 형사 고소는 IP·서버 위치 추적에 시간이 걸려요. 카드사 차지백을 우선 시도하고 형사 신고는 병행 검토.',
      },
      {
        question: '"청약철회 7일"로 환불 요구하면 되지 않나요?',
        answer:
          '<strong>전자상거래법 청약철회권은 정상 등록 사업자 대상입니다.</strong> 가짜 스토어는 사업자 자체가 가짜라 청약철회권만으로는 한계가 있어요. 차지백·형사 트랙을 병행하는 것이 안전합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '가짜 온라인 쇼핑몰 대응 가이드', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: '온라인 카페·커뮤니티 회비 환급', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
      { label: '보이스피싱 100만원 이상 환급', href: '/guide/fraud/fraud-voice-phishing-100m-plus-recovery' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 2. fraud / investment-stock-room-coercion ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-stock-room-coercion',
    keyword: '주식 리딩방 사기 증거 보존',
    questionKeyword: '텔레그램 주식 리딩방에서 VIP 등급 명목 500만원 보냈는데 손실만 났어요. 사기 고소 가능한가요?',
    ctaKeyword: '리딩방 투자 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '주식 리딩방 사기 — 단체방 증거 보존 3단계 대응 | 로앤가이드',
      description:
        '텔레그램·오픈채팅 주식 리딩방에서 VIP 등급 명목으로 송금 후 손실난 피해자라면 단체방 메신저 증거 보존 3단계 대응을 지금 확인하세요.',
    },
    intro:
      '<p>"텔레그램 주식 리딩방에 들어가 &lsquo;VIP 단톡방 가입비 500만원 내면 종목 추천해서 월 30% 수익 보장&rsquo;이라는 말에 송금했어요. 추천 종목은 모두 폭락했고 운영자는 &lsquo;시장 상황 탓&rsquo;이라며 책임을 피합니다." 주식 리딩방 사기는 단체방이 증거의 핵심인데, 운영자가 일방적으로 방을 폭파(삭제)하면 증거가 한꺼번에 사라집니다. 의심되는 즉시 메시지·송금내역·운영자 신원 정보를 캡처·다운로드로 보전하고, 자본시장법 위반 여부 + 사기죄 + 유사수신행위 3가지 트랙으로 신고를 검토할 수 있어요. 다수 피해자 합산 시 가중처벌 대상이 되기도 합니다.</p>',
    sections: [
      {
        title: 'Q. 리딩방이 사기로 전환되는 순간은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 4가지 정황 중 2개 이상이면 단순 손실이 아니라 사기 정황으로 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>"수익 보장"·"원금 보장" 표현</strong> — 자본시장법 제57조 위반. 적법한 투자자문업자도 수익 보장은 금지돼요.</li>\n<li><strong>무허가 투자자문</strong> — 금융위 등록 없는 자가 유료로 종목을 추천하면 자본시장법 위반(자문업 무인가).</li>\n<li><strong>VIP·플래티넘 등급 명목 단계적 송금</strong> — 추가 수수료를 계속 요구하며 등급을 올리도록 유도.</li>\n<li><strong>운영자 신원 불명·차명계좌</strong> — 닉네임만 사용, 입금 계좌 명의가 다른 사람.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자본시장법 제444조 제1호는 무인가 투자자문업에 5년 이하 징역 또는 2억원 이하 벌금. 형법 제347조 사기죄(10년 이하)와 별도로 적용될 수 있어요.</blockquote>',
      },
      {
        title: 'Q. 단체방 증거 보존을 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 운영자가 방을 폭파하기 전 아래 3단계로 즉시 보전합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메신저 전체 백업</strong> — 텔레그램은 채팅 내보내기 → JSON·HTML 형식. 카카오톡·디스코드는 화면 캡처를 채팅 화면 위에서 아래로 연속 캡처.</li>\n<li><strong>2단계 — 핵심 약속·발언 별도 보전</strong> — "수익 보장"·"VIP 등급"·"종목 추천" 발언만 따로 캡처해 PDF 정리. 운영자 닉네임·프로필 사진도 함께.</li>\n<li><strong>3단계 — 송금 내역·연결 정황 정리</strong> — 이체확인서 + 입금 계좌 명의 + 단체방 가입 시점 + 송금 직전·직후 운영자 메시지 시간순 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">증거 종류와 송금 정황에 따라 신고 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에·어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 자본시장법 위반 + 사기죄 + 유사수신 3가지 트랙으로 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>1. 금융감독원 불법사금융 신고센터</strong> — 1332. 무인가 투자자문·유사수신 행위 조사 의뢰. 신고 자체는 무료.</li>\n<li><strong>2. 경찰 사이버범죄 신고(ECRM)</strong> — ecrm.police.go.kr. 사기죄 + 자본시장법 위반 병합 고소 가능. 다른 피해자와 공동 고소단 구성 시 우선순위 상승.</li>\n<li><strong>3. 한국소비자원 피해구제</strong> — 1372. 유료 콘텐츠·서비스 미제공 사유로 신청. 30일 내 사업자 권고.</li>\n<li><strong>4. 민사 가압류 + 손해배상 청구</strong> — 운영자 신원 확인 후 부동산·통장 가압류 검토. 다수 피해자 합산 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "투자 손실이니 어쩔 수 없다"고 포기하면 운영자가 다른 피해자에게 같은 수법을 반복합니다. 신고 이력은 향후 같은 운영자 추적의 출발점이에요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>금융감독원 불법사금융 신고센터</strong> — 1332 / fss.or.kr</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 법률상담, 자격 요건)</li>\n<li><strong>범죄피해자지원센터</strong> — 1577-1295 (전국 56개 센터)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 투자금 편취 공소장변경과 사기죄 동일성',
        summary:
          '대법원 2025도1302 사건(대법원, 2025.04.15 선고)에서 법원은 투자금 명목으로 거짓말로 금원을 편취하는 사기 공소사실에서 피해자가 변경되는 경우 공소사실의 동일성이 유지되지 않는다고 판시했습니다. 다수 피해자가 발생한 리딩방 사기에서도 피해자별로 별개의 사건으로 처리될 가능성이 있어, 다른 피해자와 공동 고소단 구성이 수사 진행에 도움이 됩니다.',
        takeaway: '리딩방 사기는 다수 피해자별로 사건이 분리될 수 있으므로 공동 고소단 구성과 증거 통합이 회복 가능성을 높일 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '"손실은 시장 탓"이라며 책임 피하는데 사기죄 입증이 어렵지 않나요?',
        answer:
          '<strong>"수익 보장"·"VIP 등급 가입비" 발언이 입증되면 사기·자본시장법 위반 검토 가능합니다.</strong> 시장 변동을 핑계 대더라도 가입비 자체가 기망 수단으로 쓰였다면 별도 평가돼요.',
      },
      {
        question: '단체방이 폭파(삭제)됐는데 증거 복구가 가능한가요?',
        answer:
          '<strong>경찰을 통해 메신저사에 자료 보존·제출 요청이 가능합니다.</strong> 본인 휴대폰 백업·다른 피해자 캡처 + 송금 내역만으로도 출발 가능. 의심 즉시 캡처가 가장 안전해요.',
      },
      {
        question: '운영자가 외국에 있는 것 같은데 처벌이 가능한가요?',
        answer:
          '<strong>국내 입금 계좌 명의자·국내 IP 접속 정황이 있으면 수사 진행됩니다.</strong> 차명계좌 명의자도 공범·방조로 입건 가능. 피해자 합산 5억원 이상이면 특정경제범죄가중처벌법 적용 검토.',
      },
      {
        question: 'VIP 가입비만 있고 추천 종목 매매로 손실 본 부분은 회복이 안 되나요?',
        answer:
          '<strong>가입비는 사기·민사 청구 대상, 매매 손실은 자본시장법상 손해배상 청구 대상입니다.</strong> 두 트랙은 별개로 진행되며, 매매 손실은 무인가 자문 행위와의 인과관계 입증이 필요해요.',
      },
      {
        question: '신고하려면 변호사가 필요한가요?',
        answer:
          '<strong>본인이 직접 ECRM·금감원 신고 가능하며 변호사 필수는 아닙니다.</strong> 합산 피해액이 크거나 다수 피해자 공동 고소면 대한법률구조공단 132 무료 상담 또는 변호사 상담을 검토해보세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '리딩방·투자 사기 대응', href: '/guide/fraud/fraud-investment-scam-response' },
      { label: '투자 사기 다수 피해자 공동 대응', href: '/guide/fraud/fraud-investment-collective-action' },
      { label: '온라인 카페·커뮤니티 회비 환급', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 3. fraud / construction-deposit-scam-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-construction-deposit-scam-recovery',
    keyword: '인테리어 선입금 사기 환급',
    questionKeyword: '인테리어 공사 선입금 1500만원 보냈는데 시공업자가 잠적했어요. 어떻게 받나요?',
    ctaKeyword: '공사 선입금 사기 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '인테리어 선입금 사기 — 회수 4단계 절차 정리 | 로앤가이드',
      description:
        '인테리어·소규모 공사 선입금 후 시공업자가 잠적했다면 공사대금 사기 입증 + KCA 피해구제 + 형사 고소 + 가압류 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"30평 아파트 인테리어 견적 4500만원에 계약하고 선입금 1500만원을 보냈어요. 자재 발주한다더니 2주 후 연락이 끊기고 사무실도 닫혔습니다." 인테리어·소규모 공사 선입금 사기는 계약서가 있어도 시공업자가 처음부터 공사 의사·능력이 없었음을 입증해야 사기죄가 성립합니다. 단순 채무불이행이면 민사 트랙으로만 회수해야 하므로 입증 자료가 핵심이에요. 사기죄 고소 + KCA 분쟁조정 + 민사 가압류를 병행하면 회수 가능성을 높일 수 있고, 다른 피해자가 함께 발견되면 공동 고소단 구성 검토가 우선입니다.</p>',
    sections: [
      {
        title: '공사대금 사기 vs 단순 채무불이행 구분 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 3개 이상이면 사기죄 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>계약 당시 공사 능력 부재</strong> — 면허·등록·인력·장비 없이 수주만 받음.</li>\n<li><strong>선입금 직후 잠적·연락 두절</strong> — 자재 발주·인부 투입 흔적 없음.</li>\n<li><strong>다수 피해자 동시 발생</strong> — 같은 시기 여러 현장에서 같은 패턴.</li>\n<li><strong>차명계좌 사용</strong> — 입금 계좌 명의가 시공업자와 다름.</li>\n<li><strong>선입금 사용처 불명</strong> — 자재비·인건비로 사용된 흔적 없이 개인 채무·도박에 쓰임.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공사대금 사기는 형법 제347조 + 5억원 이상이면 특정경제범죄가중처벌법(3년 이상 유기징역). 다수 피해자 합산 시 가중처벌 요건이 빨리 충족돼요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 4단계',
        content:
          '<p><strong style="color:#1e3a5f">한국소비자원·법원·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 내용증명 발송 + 가압류 신청 (1주 내)</strong> — 시공업자 부동산·통장·차량 가압류로 강제집행 보전. 시간이 늦어질수록 재산 빼돌릴 가능성.</li>\n<li><strong>2단계 — 한국소비자원 피해구제 신청 (1372 또는 consumer.go.kr)</strong> — "용역 미제공·계약불이행" 사유. 30일 내 사업자 권고. 응답 없으면 분쟁조정위원회 회부.</li>\n<li><strong>3단계 — 경찰서 사기 고소 (관할 경찰서 또는 ECRM)</strong> — 계약서·이체확인서·다른 피해자 진술 첨부. 다수 피해자 발견 시 공동 고소단 구성.</li>\n<li><strong>4단계 — 지급명령 또는 부대 배상명령 (형사 1심 변론종결 전)</strong> — 형사 사건 진행 중이면 부대 배상명령 신청. 별도 민사 없이 형사 절차에서 배상금 확정 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약서·송금 정황·시공업자 신원에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">고소·분쟁조정·가압류에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>공사 계약서</strong> — 공사 범위·금액·일정·시공업자 정보 명시.</li>\n<li><strong>이체확인서·송금 영수증</strong> — 선입금·중도금 송금 시점·금액.</li>\n<li><strong>견적서·자재 발주 약속 자료</strong> — 시공업자가 약속한 자재·일정·인력.</li>\n<li><strong>현장 사진·현황</strong> — 공사 시작 전·중단 시점 사진.</li>\n<li><strong>시공업자와의 카카오톡·문자·통화 녹취</strong> — 잠적 직전 발언 포함 시간순 정리.</li>\n<li><strong>시공업자 사업자등록증·면허 정보</strong> — 등록 여부 확인. 미등록이면 사기 정황 강해짐.</li>\n<li><strong>다른 피해자 진술서</strong> — 같은 시공업자의 다른 피해 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "곧 시작한다"는 답변에 추가 송금하면 피해 금액만 커집니다. 잠적 정황이 보이면 즉시 가압류부터 검토하세요.</blockquote>',
      },
      {
        title: '⚠️ 가해자 측 변명 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 공사 사기 사건에서 가장 자주 보고되는 변명·함정입니다.</strong></p>\n<ul>\n<li><strong>"자재 가격이 올라서 공사 진행이 어렵다"</strong> — 자재비 상승은 변경계약 사유일 뿐 잠적·연락 두절은 정당화되지 않습니다.</li>\n<li><strong>"이전 현장 마무리 후 진행"</strong> — 시간 끌기 변명. 이행 일정 서면 약속 + 추가 송금 거절로 대응하세요.</li>\n<li><strong>합의 명목 추가 송금 요구</strong> — "추가 자재비 보내면 공사 재개"는 2차 사기 패턴. 절대 응하지 마세요.</li>\n<li><strong>"계약 해지하면 위약금"</strong> — 시공업자 귀책으로 인한 해지는 위약금 의무 없음. 계약서 위약금 조항이 일방적이면 약관규제법 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국소비자원 1372 / 경찰청 ECRM(ecrm.police.go.kr) / 법원 보전소송 안내(scourt.go.kr) / 대한법률구조공단 132 / 범죄피해자지원센터 1577-1295.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공사대금 편취 사기죄 성립 판단 기준',
        summary:
          '대법원 2015도10570 사건(대법원, 2019.12.27 선고)에서 법원은 공사도급계약에서 편취에 의한 사기죄 성립 여부는 계약 당시를 기준으로 피고인에게 공사를 완성할 의사나 능력이 없음에도 피해자에게 공사를 완성할 것처럼 거짓말을 하여 공사대금 등을 편취할 고의가 있었는지에 의하여 판단해야 한다고 판시했습니다.',
        takeaway: '인테리어 선입금 사기는 "계약 당시 공사 의사·능력 부재" 입증이 핵심이며, 면허·인력·자재 발주 흔적이 없으면 사기죄 검토 가능성이 높아집니다.',
      },
    ],
    faq: [
      {
        question: '계약서 없이 카톡 견적만 받고 송금했는데 회수가 가능한가요?',
        answer:
          '<strong>카카오톡 견적·합의 내용도 계약 증거로 인정됩니다.</strong> 견적·금액·일정 합의 메시지 + 이체확인서만으로 사기 고소·민사 청구 가능. 다만 정식 계약서가 있을 때보다 입증 부담이 커요.',
      },
      {
        question: '시공업자가 1인 사업자라 가압류할 재산이 없을 것 같은데요?',
        answer:
          '<strong>채무 불이행자 명부 등재·재산명시 신청을 검토해볼 수 있습니다.</strong> 향후 부동산·차량 취득 시 즉시 강제집행 가능. 형사 유죄 판결 후 재산이 드러나면 그때도 강제집행 가능해요.',
      },
      {
        question: '공사가 30%만 진행되고 멈춘 경우는 어떻게 산정하나요?',
        answer:
          '<strong>완성 비율로 정산 + 미완성 손해배상 청구 검토.</strong> 30% 공사분 가치 - 70% 미이행 손해 = 환급 청구액. 한국소비자원 분쟁조정에서 시공률 감정으로 정산 권고하는 경우가 많아요.',
      },
      {
        question: '추가 자재비 명목으로 또 송금했는데 회복이 어려운가요?',
        answer:
          '<strong>전체 송금액에 대해 사기·민사 청구 가능합니다.</strong> 추가 송금도 같은 사기 행위의 연장으로 평가될 수 있어요. 다만 추가 송금 직전 잠적 정황을 알았다면 본인 과실 비율이 일부 인정될 수 있습니다.',
      },
      {
        question: '소비자원 분쟁조정 결정에 시공업자가 안 따르면 어떻게 되나요?',
        answer:
          '<strong>분쟁조정안 거부 시 강제력은 없으나 민사·형사 절차의 강력한 자료가 됩니다.</strong> 조정 절차 자체로 시공업자 신원·재산 정보가 일부 확인되어 가압류·소송에 활용할 수 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '가짜 시공업자 선입금 회수', href: '/guide/fraud/fraud-fake-contractor-home-repair-prepayment' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
      { label: '사기 형사 부대 배상명령', href: '/guide/fraud/fraud-victim-criminal-attached-civil-claim' },
    ],
  },

  // ─── 4. fraud / second-hand-goods-noshow-platform ───
  {
    domain: 'fraud',
    slug: 'fraud-second-hand-goods-noshow-platform',
    keyword: '중고거래 미배송 잠적 신고',
    questionKeyword: '당근에서 35만원 송금했는데 물건이 안 와요. 보이스피싱 환급법으로 받을 수 있나요?',
    ctaKeyword: '중고거래 미배송 대응 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '중고거래 미배송 잠적 — 플랫폼·환급법 적용 분기 5단계 | 로앤가이드',
      description:
        '당근·번개장터 중고거래 결제 후 미배송·잠적되었다면 플랫폼 신고 + 보이스피싱 환급법 적용 가능 케이스 분기 5단계 행동 매뉴얼을 지금 확인하세요.',
    },
    intro:
      '<p>"당근마켓에서 노트북을 35만원에 사기로 하고 안전결제 아닌 일반 계좌이체로 송금했어요. 그런데 판매자가 &lsquo;택배 부쳤다&rsquo;고 하더니 송장번호도 안 주고 잠적했습니다." 중고거래 미배송 사기는 결제 방식과 송금 정황에 따라 적용 가능한 회복 트랙이 달라집니다. 플랫폼 안전결제는 환급 가능성이 가장 높고, 일반 계좌이체는 통신사기피해환급법 적용 가능 케이스 분기가 핵심이에요. 송금 직후 30분이 회복 골든타임이며, 즉시 112 신고와 은행 지급정지를 동시에 시도하는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 경우 통신사기피해환급법이 적용되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 핵심은 "기망에 의한 송금 + 재화 가장 행위 여부"입니다.</strong></p>\n<ul>\n<li><strong>적용 가능 — 가짜 매물 + 직거래 가장</strong> — 처음부터 보낼 물건이 없는데 매물 사진 도용으로 기망. 통신사기피해환급법상 "재화 공급 가장"으로 환급 트랙 적용 검토 가능.</li>\n<li><strong>적용 가능성 낮음 — 정상 매물 + 단순 미배송</strong> — 실재하는 매물을 약속하고 일부만 보내거나 시간 끌기 → 단순 채무불이행으로 분류될 수 있음.</li>\n<li><strong>적용 불가 — 직접 만나서 거래 후 가짜 물품</strong> — 본인 의사로 대면 후 거래 → 사기죄 별도 트랙으로만 진행.</li>\n<li><strong>플랫폼 안전결제(에스크로)</strong> — 미배송 시 플랫폼이 직접 환불. 가장 회복 가능성 높음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통신사기피해환급법은 2024년 이후 대면 편취형도 일부 포함되도록 확대. 단, 적용 여부는 사기 구조에 따라 달라지므로 신고 시 사실관계 정리가 중요해요.</blockquote>',
      },
      {
        title: 'Q. 송금 직후 30분 안에 무엇을 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 5단계 행동 매뉴얼을 30분 안에 동시 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고 + 은행 지급정지 요청 (송금 직후 즉시)</strong> — 잔액이 남아있어야 환급 가능. 30분 이내가 골든타임.</li>\n<li><strong>2단계 — 플랫폼 신고 (당근·번개장터 앱 내)</strong> — 판매자 ID·매물·대화 캡처와 함께 신고. 플랫폼이 계정 정지·사기범 차단.</li>\n<li><strong>3단계 — 증거 캡처 (사이트 닫히기 전)</strong> — 매물 화면·판매자 프로필·대화 전체·송금 내역 PDF 저장.</li>\n<li><strong>4단계 — 경찰서 신고 + 사건사고사실확인원 발급 (24시간 내)</strong> — 통신사기피해환급법 적용 가능 케이스면 환급 신청 시 필수 서류.</li>\n<li><strong>5단계 — 송금 은행 피해구제 신청 (사고사실확인원 발급 후)</strong> — 은행 영업점 방문 또는 콜센터 접수. 잔액 보존되었다면 채권소멸공고(약 2개월) 후 환급 가능성.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결제 방식·송금 정황에 따라 적용 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 플랫폼·기관별 신고 채널은 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제 방식·플랫폼별로 채널이 갈립니다.</strong></p>\n<ul>\n<li><strong>당근마켓</strong> — 앱 내 "신고" → "사기·도용" 카테고리. 당근페이(안전결제) 사용 시 결제 완료 후 14일 내 환불 신청.</li>\n<li><strong>번개장터</strong> — 앱 고객센터 → "사기 신고". 번개페이 결제 시 자동 환불 절차.</li>\n<li><strong>중고나라</strong> — 카페 사기 신고게시판 + 두낫페이 안전결제 환급.</li>\n<li><strong>경찰청 ECRM</strong> — ecrm.police.go.kr (직접 피해자만 가능, 대리인은 경찰서 방문).</li>\n<li><strong>한국소비자원</strong> — 1372 (사업자 등록 판매자 대상).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "안전결제 수수료 아끼려고" 일반 계좌이체로 송금하면 회복 가능성이 크게 줄어듭니다. 안전결제·에스크로가 가장 강한 보호 수단이에요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182 (보이스피싱은 112)</li>\n<li><strong>금융감독원 보이스피싱 통합신고</strong> — 1332 / fss.or.kr</li>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr</li>\n<li><strong>한국인터넷진흥원(KISA)</strong> — 118 (피싱사이트·문자 신고)</li>\n<li><strong>대한법률구조공단</strong> — 132 (무료 법률상담, 자격 요건)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중고거래 송금과 부당이득 반환 책임',
        summary:
          '대법원 2024다216187 사건(대법원, 2024.06.27 선고)에서 법원은 중고거래 인터넷 사이트에서 보이스피싱 범죄자가 피해자의 은행 계좌로 이체된 금원의 부당이득 여부를 다루며, 판매자가 편취 사실에 대해 악의·중과실이 없었다면 중고거래 대금 취득은 법률상 원인이 있는 것으로 본다고 판시했습니다. 중고거래 미배송 사기에서도 판매자가 보이스피싱 범죄자와 무관하게 정상 거래로 인식했는지 여부가 환급·민사 트랙에서 핵심 쟁점이 된다는 시사점이 있습니다.',
        takeaway: '중고거래 미배송 사기는 판매자의 기망 의도 입증이 회복 트랙을 결정하므로, 매물 사진 도용·다른 피해자 사례 같은 정황을 함께 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '안전결제(당근페이·번개페이)로 결제했는데 환불은 어떻게 되나요?',
        answer:
          '<strong>플랫폼이 자동으로 환불 절차를 진행합니다.</strong> 미배송 신고 후 14일 내 자동 환불되는 경우가 많아요. 안전결제는 가장 회복 가능성 높은 결제 방식이라 가능하면 우선 사용 권장.',
      },
      {
        question: '판매자가 "택배 분실"이라며 핑계를 대는데 사기죠?',
        answer:
          '<strong>송장번호 미공개·연락 두절이 동반되면 사기 정황입니다.</strong> 정상 판매자는 송장번호 즉시 공유 + 분실 시 택배사 확인 협조. 송장 없이 핑계만 반복하면 즉시 신고하세요.',
      },
      {
        question: '계좌이체했는데 통신사기피해환급법 적용 가능한가요?',
        answer:
          '<strong>매물 사진 도용·가짜 상품 등 "재화 공급 가장" 정황이 있으면 적용 검토 가능합니다.</strong> 단순 채무불이행으로 분류되면 적용 어려워요. 사건사고사실확인원 발급 후 송금 은행 상담이 출발점.',
      },
      {
        question: '판매자가 외국인·외국 거주자면 회수가 어렵나요?',
        answer:
          '<strong>국내 입금 계좌·국내 IP 접속 정황이 있으면 수사 진행 가능합니다.</strong> 차명계좌 명의자도 공범·방조로 입건될 수 있어요. 환급법 트랙은 국내 계좌면 적용 가능.',
      },
      {
        question: '플랫폼은 책임이 없나요?',
        answer:
          '<strong>일반적으로 플랫폼은 거래 중개자라 직접 책임은 제한적입니다.</strong> 다만 안전결제 미사용분도 플랫폼이 신고 처리·계정 정지로 협력해야 하고, 본인 확인을 소홀히 한 책임이 인정되는 경우도 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'SNS 쇼핑몰 미배송 대응', href: '/guide/fraud/fraud-sns-shopping-no-delivery' },
      { label: '중고거래 에스크로 미사용 대응', href: '/guide/fraud/fraud-secondhand-escrow-fallback-response' },
      { label: '보이스피싱 100만원 이상 환급', href: '/guide/fraud/fraud-voice-phishing-100m-plus-recovery' },
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
    ],
  },

  // ─── 5. fraud / prepaid-card-purchase-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-prepaid-card-purchase-scam',
    keyword: '문화상품권 구매 사기 환불',
    questionKeyword: '문화상품권 80만원어치 샀는데 핀번호가 가짜였어요. 발행사에 사용정지 요청하면 되나요?',
    ctaKeyword: '상품권 구매 사기 환불 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '문화상품권 구매 사기 — 사용정지·환불 4단계 절차 | 로앤가이드',
      description:
        '문화상품권·도서상품권 등 선불 상품권 구매 사기를 당했다면 발행사 사용정지 요청 + 매장 환불 + 경찰 신고 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"카페 SNS 광고에서 문화상품권 5만원권을 4만원에 판다고 해서 16장(80만원) 샀어요. 핀번호 받고 사용하려는데 &lsquo;이미 사용된 핀번호&rsquo;라고 떠서 판매자에게 항의했더니 답이 없습니다." 문화상품권·도서상품권 등 선불 상품권 구매 사기는 발행사 사용정지 요청과 결제 수단별 환급 트랙을 동시 진행하는 것이 핵심입니다. 핀번호가 이미 사용된 경우 회복이 어렵지만 미사용 상태에서 즉시 사용정지 요청을 넣으면 환급 가능성이 살아있어요. 발행사 고객센터 전화 + 경찰 신고를 30분 내 동시 진행이 출발점입니다.</p>',
    sections: [
      {
        title: '상품권 사기로 보는 4가지 정황',
        content:
          '<p><strong style="color:#1e3a5f">아래 정황이 2개 이상이면 즉시 사용정지·신고 트랙으로 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>시중가보다 큰 폭(20~30%) 할인</strong> — 문화상품권 정상 할인은 통상 5~10%. 그 이상 할인은 사기·자금세탁 의심.</li>\n<li><strong>SNS·오픈채팅 광고 + 즉시 송금 요구</strong> — 정상 판매처는 카드 결제 가능. 계좌이체만 요구하면 의심 신호.</li>\n<li><strong>핀번호 사진·텍스트로만 전달</strong> — 정상 발행처는 실물 또는 발행사 인증 채널. 사진 핀번호는 도용·복사 가능성 큼.</li>\n<li><strong>판매자 신원 불명·차명계좌</strong> — 닉네임만, 입금 계좌 명의가 다른 사람.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 다수 피해자 합산 시 특정경제범죄가중처벌법(5억원 이상). 문화상품권은 전자금융거래법상 선불전자지급수단으로도 분류돼 발행사가 사용정지·환급을 처리할 수 있는 구조예요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사용정지·환불 4단계',
        content:
          '<p><strong style="color:#1e3a5f">발행사·경찰청·소비자원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 발행사 고객센터에 즉시 사용정지 요청 (구매 직후 30분 내)</strong> — 컬쳐랜드(컬쳐) 1577-2111 / 해피머니 1644-3611 / 도서문화상품권 1577-9919. 핀번호·구매 일시·결제 수단 전달.</li>\n<li><strong>2단계 — 결제 수단별 환급 트랙 동시 진행 (당일 내)</strong> — 카드 결제: 카드사 차지백 / 계좌이체: 송금 은행 지급정지 + 사건사고사실확인원 발급 / 간편결제: 결제사 환급 + 카드사 차지백 병행.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고 (ECRM 또는 관할 경찰서, 24시간 내)</strong> — 광고 캡처·판매자 정보·송금 내역·핀번호 사용 흔적 첨부.</li>\n<li><strong>4단계 — 한국소비자원 피해구제 신청 (1372)</strong> — 사업자 자율 해결 권고 30일. 다른 피해자와 함께 신청하면 우선순위 상승.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">핀번호 사용 여부·결제 수단에 따라 환불 가능성이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사용정지·환급·신고에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>구매 영수증·이체확인서</strong> — 결제 일시·금액·판매자 계좌.</li>\n<li><strong>핀번호 전체 + 사용 시도 화면 캡처</strong> — "이미 사용됨"·"유효하지 않음" 오류 메시지 포함.</li>\n<li><strong>판매자 광고·SNS 게시물 캡처</strong> — 판매자 ID·할인율·할인 사유.</li>\n<li><strong>판매자와의 대화 전체</strong> — 카카오톡·DM·이메일 시간순 정리.</li>\n<li><strong>발행사 사용정지 신청 접수증</strong> — 고객센터 전화 또는 홈페이지 신청 후 발급.</li>\n<li><strong>다른 피해자 진술</strong> — 같은 판매자 피해 사례(블로그·카페·오픈채팅).</li>\n<li><strong>사건사고사실확인원</strong> — 경찰서 신고 후 발급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 의심되어도 "혹시 진짜일까" 망설이며 시간을 끌면 핀번호가 모두 사용됩니다. 의심 즉시 발행사 사용정지부터 요청하세요.</blockquote>',
      },
      {
        title: '⚠️ 가해자 측 변명 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 상품권 사기 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"발행사 시스템 오류라 곧 해결"</strong> — 시간 끌기 변명. 정상 발행 핀번호면 발행사 시스템 오류는 거의 없습니다.</li>\n<li><strong>"다른 핀번호로 교환해주겠다"</strong> — 추가 사기 패턴. 새 핀번호도 가짜·이미 사용된 것일 가능성 높음.</li>\n<li><strong>"환불 위해 추가 수수료 송금" 요구</strong> — 100% 2차 사기. 절대 응하지 마세요.</li>\n<li><strong>"신고하면 부정 사용으로 본인이 처벌"</strong> — 협박 패턴. 피해자는 처벌 대상이 아니며, 발행사·경찰 모두 정상 신고로 처리합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 컬쳐랜드 1577-2111 / 해피머니 1644-3611 / 한국소비자원 1372 / 경찰청 ECRM(ecrm.police.go.kr) / KISA 118 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상품권업체 자금세탁 범죄수익 몰수·추징',
        summary:
          '대법원 2025도15768 사건(대법원, 2026.01.15 선고)에서 법원은 상품권업체를 운영하면서 보이스피싱 또는 인터넷도박 조직의 의뢰에 따라 자금세탁을 해주고 수수료를 받은 사건에서 범죄수익은닉규제법에 따라 해당 범죄수익을 몰수·추징할 수 있다고 판시했습니다. 상품권이 자금세탁 수단으로 악용되는 구조에서 발행사·운영업체의 책임 범위가 확장된다는 시사점이 있습니다.',
        takeaway: '문화상품권 사기는 단순 개인 피해를 넘어 자금세탁 구조의 일부일 수 있으므로, 신고 이력은 향후 같은 운영자 추적과 회수에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '핀번호가 이미 사용됐다고 뜨면 회복이 불가능한가요?',
        answer:
          '<strong>발행사에 사용 시점·사용처 조회를 요청해볼 수 있습니다.</strong> 사용처가 가맹점이면 가맹점 협조로 환수 가능성. 다만 시간이 지날수록 추적이 어려워져요.',
      },
      {
        question: '발행사가 "사용정지가 어렵다"고 거절하면요?',
        answer:
          '<strong>경찰 사건사고사실확인원 발급 후 재요청하면 처리율이 올라갑니다.</strong> 발행사도 무차별 정지는 어려우니 정식 사건 접수 후 협조 요청이 효과적이에요.',
      },
      {
        question: '카드 결제했는데 차지백이 가능한가요?',
        answer:
          '<strong>"용역·재화 미제공" 사유로 카드사 이의제기 가능합니다.</strong> 결제 후 90일 이내 권장. 핀번호가 가짜였음을 입증하는 발행사 회신 자료를 첨부하면 처리 빨라져요.',
      },
      {
        question: '간편결제(카카오페이·토스)로 보낸 경우는요?',
        answer:
          '<strong>간편결제사 + 연계 카드사 양쪽에 환급 신청.</strong> 충전금 결제는 일반 계좌이체와 동일하게 ECRM·KCA 트랙으로 진행돼요.',
      },
      {
        question: '같은 판매자에게 여러 명이 당했는데 공동 고소가 가능한가요?',
        answer:
          '<strong>다수 피해자 공동 고소가 수사 우선순위 상승에 유리합니다.</strong> 합산 피해액이 5천만원~5억원 넘으면 특정경제범죄가중처벌법 적용 검토 가능. 오픈채팅·카페에서 다른 피해자 모집 후 공동 진행 권장.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '상품권 재판매 사기 대응', href: '/guide/fraud/fraud-gift-card-resale-scam-response' },
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },
];
