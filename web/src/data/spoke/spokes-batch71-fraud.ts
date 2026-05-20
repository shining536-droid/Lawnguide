import { SpokePage } from '../spoke-pages';

// batch71 fraud — 5개 (2026-05-21)
//
// 고유 존재 이유:
// 1. fraud-livestream-product-review-misleading-undisclosed-paid-track — 라이브 커머스 호스트가 "직접 사용 후기"로 위장한 협찬 + 효능 과장 (기존 livestream-host-flash-sale-channel-closure·livestream-counterfeit-purchase·sns-shopping-no-delivery 와 분기: "라이브 호스트 채널 폐쇄·위조품·SNS 미배송"이 아닌 "협찬 미공개 + 직접 사용 가장 + 효능 과장 + 표시광고법" 영역. 표시광고법·전자상거래법·소비자기본법 결합 트랙).
// 2. fraud-art-painting-authentic-certificate-fake-track — 갤러리에서 감정서 첨부 진품 미술품 구매 후 위작 판정 (기존 fraud 도메인 신규 영역 — "미술품 + 감정서 위조 + 진품 보증 + 한국미술품감정연구센터 재감정 + 환불" 영역. 문화재보호법·민법 매매계약 하자담보책임·표시광고법 결합 트랙).
// 3. fraud-membership-club-prepaid-sudden-shutdown-track — 헬스장·필라테스·키즈카페 1년 회원권 선결제 후 갑작스러운 폐업·잠적 (기존 fraud 도메인 신규 영역 — "선결제 + 갑작스러운 폐업 + 회원권 환불 + 소비자분쟁조정" 영역. 할부거래법·방문판매법·소비자분쟁해결기준 결합 트랙).
// 4. fraud-online-job-recruit-deposit-required-vanish-track — 온라인 채용공고 "재택근무 가능, 보증금 50만원" 후 잠적 (기존 loan-broker-upfront-fee-vanish 와 분기: "대출 브로커 선납"이 아닌 "구인사기 + 채용 명목 보증금 요구 + 직업안정법 위반 + 첫 출근 후 잠적" 영역. 직업안정법·근로기준법·사기죄 결합 트랙).
// 5. fraud-secondhand-luxury-watch-fake-swap-track — 중고거래(번개장터·당근)에서 명품 시계 구매 후 가품 판정, 판매자 "사용 흔적" 변명 (기존 online-shopping-fake-store·secondhand-luxury-purchase 와 분기: "가짜 쇼핑몰·명품 일반"이 아닌 "명품 시계 + AS센터 진위 감정 + 사용 흔적 변명 + 중고거래 사기" 영역. 상표법·소비자분쟁해결기준·전자상거래법 결합 트랙).

export const spokesBatch71Fraud: SpokePage[] = [
  // ─── 1. fraud-livestream-product-review-misleading-undisclosed-paid-track ───
  {
    domain: 'fraud',
    slug: 'fraud-livestream-product-review-misleading-undisclosed-paid-track',
    keyword: '라이브 커머스 협찬 미공개 직접사용 가장',
    questionKeyword: '라이브 호스트가 "제가 6개월 직접 써본 결과 주름이 줄었다"며 추천한 화장품 28만원 구매, 알고 보니 광고비 받은 협찬 + 임상시험 데이터도 허위.',
    ctaKeyword: '라이브 커머스 협찬 미공개 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '라이브 커머스 협찬 미공개·효능 과장 — 5단계 환수 | 로앤가이드',
      description:
        '라이브 호스트가 "직접 써본 후기"로 위장한 협찬 추천에 속아 효능 없는 제품을 구매했다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인스타·유튜브 팔로워 32만명의 라이브 호스트가 \'제가 6개월간 직접 써본 결과 눈가 주름이 30% 줄었어요, 임상시험에서도 입증된 안티에이징 화장품\'이라며 추천한 제품을 28만원에 구매. 효능이 없어 환불을 요구하니 \'개인차\'라며 거부. 알고 보니 호스트는 제품사로부터 광고비 1,200만원을 받은 협찬이었는데 라이브에서는 \'협찬·광고\' 표시가 전혀 없었고, 임상시험 데이터도 식약처에 등록되지 않은 자체 설문조사였던 정황. 같은 호스트가 다른 제품에서도 \'직접 사용 후기\'를 표방하며 협찬을 미공개한 패턴이 SNS 신고 게시판에 누적된 상태였어요." 라이브 커머스 협찬 미공개 + 효능 과장은 ① 사기죄(형법 347조) — 직접 사용·효능 표시 기망 ② 표시·광고의 공정화에 관한 법률(공정위 추천·보증 심사지침 위반) ③ 전자상거래법(허위·과장 광고) ④ 한국소비자원 1372 + 공정위 신고 ⑤ 사이버 사기 고소 + 민사 부당이득 트랙이 검토 가능한 영역. 협찬 미공개 + 직접 사용 가장 + 효능 과장 + 임상 허위 표시가 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 라이브 캡처·결제 ② 협찬 사실 자료 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 라이브 협찬 미공개 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·공정위·소비자원·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 라이브 캡처·녹화·결제·"직접 사용" 발언 자료 보존</strong></li>\n<li><strong>② 협찬 사실 확인 (제품사 광고비 지급 내역·다른 영상 협찬 표시 비교)</strong></li>\n<li><strong>③ 공정위 추천·보증 심사지침 위반 신고 + 한국소비자원 1372 분쟁조정</strong></li>\n<li><strong>④ 경찰 사이버 사기 고소 (다수 피해자 집단)</strong></li>\n<li><strong>⑤ 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 표시·광고의 공정화에 관한 법률 + 공정위 추천·보증 등에 관한 표시·광고 심사지침은 "경제적 이해관계가 있는 추천·보증은 그 사실을 명확히 표시"하도록 의무화한 영역. 라이브에서 협찬·광고 표시 없이 "직접 사용 후기"로 가장했다면 표시광고법 + 사기 기망이 결합되는 영역으로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 공정위·소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (인지 당일)</strong> — 라이브 녹화·캡처·"직접 사용" 발언·결제 영수증.</li>\n<li><strong>2단계 — 협찬 사실 자료 확보 (1~2주 내)</strong> — 다른 호스트 협찬 표시 비교·SNS 폭로 게시글·제품사 보도자료.</li>\n<li><strong>3단계 — 공정위 추천·보증 심사지침 위반 신고 + 한국소비자원 1372 분쟁조정 (30~60일)</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다수 피해자 + 임상 허위 결합.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">라이브 협찬 미공개 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 라이브·협찬·효능 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>라이브 방송 녹화·캡처 (특히 "직접 사용" "협찬 없음" "임상 입증" 발언 시점)</strong></li>\n<li><strong>제품 결제 영수증·카드 명세·이체 내역</strong></li>\n<li><strong>호스트의 다른 영상·SNS에서 협찬 표시 비교 자료</strong></li>\n<li><strong>제품사 보도자료·인플루언서 마케팅 자료 (광고비 지급 정황)</strong></li>\n<li><strong>임상시험 데이터의 식약처 등록 여부 조회</strong></li>\n<li><strong>같은 호스트 협찬 미공개 피해자·폭로 게시글</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공정위 추천·보증 등에 관한 표시·광고 심사지침은 인플루언서·라이브 호스트가 경제적 대가를 받은 추천이라면 영상 내·게시글 내에 "광고·협찬·유료광고 포함" 등 명확히 표시해야 하는 영역. 표시가 누락된 채 "직접 사용 후기"로 가장했다면 위반 자료가 명확합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"직접 사용했다는 것도 사실" 항변</strong> — 협찬 사실 미공개 자체가 표시광고법 위반 + 거래 결정의 중요 사정.</li>\n<li><strong>효능 표시의 허위·과장</strong> — 임상시험 데이터의 식약처 등록 여부가 핵심 자료.</li>\n<li><strong>"개인차로 효능 차이" 주장</strong> — 표시한 효능과 실제 효능의 격차가 거래 결정 중요 사정.</li>\n<li><strong>플랫폼(인스타·유튜브) 책임</strong> — 협찬 표시 의무 위반에 대한 플랫폼 신고·계정 제재 별도 트랙.</li>\n<li><strong>제품사 책임 vs 호스트 책임</strong> — 제품사가 협찬 표시를 지시·요구하지 않았는지 별도 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>공정거래위원회 (표시광고법·추천보증 심사지침 신고)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>식품의약품안전처 (효능·임상 허위 표시 민원)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 광고 표현의 허위·과장 판단 영역',
        summary:
          '대법원 2025도15970(대법원, 2025.10.30 선고) 영역에서 법원은 광고가 단순한 과장·허위에 그치지 않고 일반 상거래의 관행과 신의칙에 비추어 시인할 수 있는 범위를 넘어 거래에서 중요한 사정에 관하여 구체적 사실을 거짓으로 표시한 경우에는 그 광고가 사기죄의 기망행위에 해당할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"라이브 호스트의 직접 사용 가장 + 협찬 미공개 + 효능·임상 표시 허위"는 거래 결정의 중요 사정에 관한 구체적 사실의 거짓 표시 영역. 시청자의 구매 결정이 그 표시에 의해 좌우됐다면 표시광고법 + 사기 기망이 결합된 영역으로 평가될 수 있는 자료.',
      },
    ],
    faq: [
      {
        question: '호스트가 "협찬 표시 깜빡했을 뿐"이라고 주장합니다',
        answer:
          '<strong>경제적 이해관계 표시는 의무 영역입니다.</strong> 다른 영상에서는 협찬 표시를 했는데 이 영상만 누락이면 고의 평가 자료가 추가될 수 있습니다.',
      },
      {
        question: '효능이 없다고 어떻게 입증하나요?',
        answer:
          '<strong>표시된 임상시험 데이터의 식약처 등록 여부·근거 논문·임상 기관 확인이 핵심 영역입니다.</strong> 등록되지 않은 자체 설문은 임상시험 표시 자격 없음.',
      },
      {
        question: '협찬받은 사실은 어떻게 확인하나요?',
        answer:
          '<strong>제품사 보도자료·인플루언서 마케팅 대행사 자료·SNS 폭로글이 단서가 되는 영역입니다.</strong> 공정위 조사 시 광고비 입출금 내역 영장 발부 가능.',
      },
      {
        question: '플랫폼(인스타·유튜브)도 신고할 수 있나요?',
        answer:
          '<strong>공정위 추천·보증 심사지침 위반은 플랫폼에 직접 신고 + 공정위 동시 신고가 가능한 영역입니다.</strong> 호스트 계정 제재·라벨 부착 요청.',
      },
      {
        question: '같은 호스트가 다른 제품에서도 협찬 미공개한다면?',
        answer:
          '<strong>반복 패턴은 거래 시점 기망 의사 입증 자료 영역입니다.</strong> 다수 피해자 집단 + 공정위 신고 + 사이버 고소 결합 권장.',
      },
      {
        question: '환불을 거부당하면 카드사 차지백이 되나요?',
        answer:
          '<strong>표시광고법·전자상거래법 위반 자료가 있으면 카드사 분쟁조정·차지백 요청 가능한 영역입니다.</strong> 한국소비자원 1372 분쟁조정 병행 권장.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '라이브 위조품', href: '/guide/fraud/fraud-livestream-counterfeit-purchase' },
      { label: 'SNS 쇼핑 미배송', href: '/guide/fraud/fraud-sns-shopping-no-delivery' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 2. fraud-art-painting-authentic-certificate-fake-track ───
  {
    domain: 'fraud',
    slug: 'fraud-art-painting-authentic-certificate-fake-track',
    keyword: '미술품 갤러리 감정서 진품 위작',
    questionKeyword: '갤러리에서 "감정서 첨부 진품" 보증으로 회화 4,200만원에 구입, 한국미술품감정연구센터 재감정 결과 위작 판정, 갤러리는 "감정서는 참고용"이라며 환불 거부.',
    ctaKeyword: '미술품 위작 감정서 환수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '미술품 갤러리 감정서 진품 보증·위작 — 5단계 환수 | 로앤가이드',
      description:
        '갤러리에서 감정서 첨부 진품으로 구입한 미술품이 재감정에서 위작으로 판정됐다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 유명 작가의 회화 작품을 강남의 한 갤러리에서 \'감정서 첨부 진품, 작가 유족·재단 검증 완료\'로 4,200만원에 구입. 6개월 뒤 보험 가입을 위해 한국미술품감정연구센터에 재감정을 의뢰하니 \'필치·안료·서명이 작가 작품 특징과 다르고 진품으로 보기 어렵다\'는 위작 판정이 나옴. 갤러리에 환불을 요구하니 \'감정서는 참고용일 뿐 보증서가 아니다\'며 책임을 회피하더니, 알고 보니 같은 갤러리가 다른 컬렉터들에게도 같은 작가 위작을 여러 점 판매한 정황이 미술 커뮤니티에 보고된 상태였어요." 미술품 갤러리 감정서 진품 보증 + 위작 판정은 ① 사기죄(형법 347조) — 진품·감정서·작가 검증 표시 기망 ② 민법 매매계약 하자담보책임·계약취소 ③ 표시·광고의 공정화에 관한 법률(허위 보증 표시) ④ 한국소비자원 1372 + 한국미술품감정연구센터 재감정 ⑤ 형사 고소 + 민사 손해배상 트랙이 검토 가능한 영역. 감정서 위조·작가 검증 허위 표시 + 위작 판정이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 매매계약·감정서·이체 ② 재감정 결과 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 미술품 위작 환수 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재감정·계약취소·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 매매계약서·감정서·이체·갤러리 진품 보증 약정 자료 보존</strong></li>\n<li><strong>② 한국미술품감정연구센터·작가 재단 공식 재감정 (2차 이상)</strong></li>\n<li><strong>③ 갤러리에 서면(내용증명)으로 계약취소·환불 청구</strong></li>\n<li><strong>④ 한국소비자원 1372 분쟁조정 + 공정위 표시광고법 신고</strong></li>\n<li><strong>⑤ 형사 사기 고소 + 민사 매매대금 반환·손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미술품 거래에서 갤러리·딜러가 "진품·감정서 첨부"를 명시하고 가격을 산정했다면 진품성은 거래 결정의 핵심 사정 영역. 재감정에서 위작이 확인됐다면 매매계약 하자담보책임(민법 580조) + 사기 기망이 결합되는 영역으로 평가될 수 있습니다. 공인된 감정기관 재감정이 핵심 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 한국미술품감정연구센터·소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (위작 의심 인지 당일)</strong> — 매매계약서·감정서·이체·갤러리 발언 캡처.</li>\n<li><strong>2단계 — 한국미술품감정연구센터·작가 재단 공식 재감정 의뢰 (1~2개월)</strong></li>\n<li><strong>3단계 — 갤러리에 내용증명 발송 (재감정 결과 + 계약취소·환불 청구, 7~14일 이행기한)</strong></li>\n<li><strong>4단계 — 한국소비자원 1372 분쟁조정 + 공정위 표시광고법 신고 (30~60일)</strong></li>\n<li><strong>5단계 — 형사 사기 고소 + 민사 매매대금 반환·손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">미술품 위작 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 작품·감정·갤러리 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>매매계약서·세금계산서·이체 자료 (구매 시점·금액)</strong></li>\n<li><strong>갤러리 제공 감정서 원본 + 작가 검증·유족 보증 표시 자료</strong></li>\n<li><strong>한국미술품감정연구센터·작가 재단 공식 재감정서</strong></li>\n<li><strong>작품 사진·서명·낙관·캔버스 뒷면 자료 (감정 비교용)</strong></li>\n<li><strong>갤러리 홍보 자료·전시 도록·홈페이지 진품 보증 표시 캡처</strong></li>\n<li><strong>다른 컬렉터의 같은 갤러리 위작 피해 사례·진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미술품 진위 판단은 공인 감정기관(한국미술품감정연구센터·한국화랑협회 감정위원회·작가 재단) 재감정이 결정적. 2개 이상 기관 교차 재감정이 진위 평가 신뢰도를 높이는 영역. 갤러리가 제공한 감정서 자체가 위조됐을 가능성도 별도 평가.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"감정서는 참고용·보증서 아님" 항변</strong> — 감정서가 가격 산정·구매 결정의 핵심 사정이었다면 표시 책임 평가.</li>\n<li><strong>갤러리의 선의 항변</strong> — 갤러리도 위작 인지하지 못했다면 사기 고의 부정 자료 vs 진품성 검증 의무 위반.</li>\n<li><strong>재감정 결과의 신뢰도</strong> — 2개 이상 공인기관 교차 재감정 권장.</li>\n<li><strong>매매계약 하자담보책임 (민법 580조)</strong> — 위작은 중대 하자, 계약취소·대금반환 청구권.</li>\n<li><strong>제척기간</strong> — 매수인이 하자를 안 날부터 6개월 내 권리행사(민법 582조), 단 형사 사기는 별개.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국미술품감정연구센터·한국화랑협회 감정위원회</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 (표시광고법 위반 신고)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중요 사정 고지의무와 진품성 표시 영역',
        summary:
          '대법원 2025도14142(대법원, 2025.10.16 선고) 영역에서 법원은 거래에서 매도인이 거래의 중요한 사정에 관하여 알고 있으면서도 거짓 사실을 표시하거나 진실을 고지하지 않은 경우 그러한 행위는 사기죄의 기망에 해당할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"미술품 갤러리의 진품·감정서·작가 검증 표시 + 재감정 위작 판정 + 동일 갤러리 반복 패턴"은 거래의 중요한 사정에 관한 표시·고지의무가 결합된 영역. 갤러리가 위작 가능성을 인지하고도 진품으로 표시했다면 사기 기망 평가 자료.',
      },
    ],
    faq: [
      {
        question: '갤러리가 "감정서는 참고용"이라고 합니다',
        answer:
          '<strong>감정서가 가격 산정·진품 보증 표시에 사용됐다면 거래 결정의 중요 사정 영역입니다.</strong> 매매계약 하자담보책임 별도 트랙.',
      },
      {
        question: '재감정 비용은 얼마나 드나요?',
        answer:
          '<strong>한국미술품감정연구센터 재감정은 작품 가액·복잡도에 따라 30~150만원 수준 영역입니다.</strong> 위작 입증되면 갤러리에 비용 청구 가능.',
      },
      {
        question: '매매계약 하자담보책임은 시효가 얼마나 되나요?',
        answer:
          '<strong>매수인이 위작 사실을 안 날부터 6개월 내 권리행사 영역입니다(민법 582조).</strong> 형사 사기는 7년 시효로 별개. 재감정 후 빠른 권리행사 권장.',
      },
      {
        question: '갤러리도 속았을 수 있다면 사기가 아닌가요?',
        answer:
          '<strong>갤러리 선의가 사실이라면 형사 사기는 어려울 수 있는 영역입니다.</strong> 다만 갤러리의 진품 검증 의무 위반·과실로 민사 손해배상은 가능.',
      },
      {
        question: '같은 갤러리에서 다른 피해자가 더 있다면?',
        answer:
          '<strong>반복 패턴은 갤러리의 사기 고의 입증 자료 영역입니다.</strong> 미술 커뮤니티·SNS 사례 수집 + 집단 고소 권장.',
      },
      {
        question: '경매·중개로 산 작품이면 책임은 누구에게?',
        answer:
          '<strong>경매사·중개인의 진품 검증 의무는 별도 평가 영역입니다.</strong> 경매사 약관·중개수수료 약정·매도인 신원 공개 여부 확인.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '사기 시효', href: '/guide/fraud/fraud-statute-of-limitations-period' },
      { label: '명품 중고거래', href: '/guide/fraud/fraud-secondhand-luxury-purchase' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 3. fraud-membership-club-prepaid-sudden-shutdown-track ───
  {
    domain: 'fraud',
    slug: 'fraud-membership-club-prepaid-sudden-shutdown-track',
    keyword: '회원권 선결제 갑작스러운 폐업 잠적',
    questionKeyword: '필라테스 1년 회원권 158만원 선결제 후 두 달 만에 "본사 사정으로 무기한 휴업" 공지, 카톡 단톡방 폐쇄·대표 잠적, 환불 거부.',
    ctaKeyword: '회원권 선결제 폐업 환불 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '필라테스·헬스장 회원권 선결제·갑작스러운 폐업 — 5단계 환수 | 로앤가이드',
      description:
        '헬스장·필라테스·키즈카페 등 1년 회원권을 선결제한 직후 갑자기 폐업·잠적했다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'1년 회원권 50% 할인, 신규 오픈 기념\'으로 158만원을 선결제한 필라테스 스튜디오가 두 달 만에 \'본사 사정으로 무기한 휴업\'을 공지하고는 카카오 단톡방을 폐쇄, 대표는 연락 두절. 결제 시점에는 신규 오픈한 지 한 달도 안 됐는데 \'곧 분점 확장 + 강사 충원\'을 약속하며 1년 선결제를 적극 유도하던 정황. 알고 보니 같은 대표가 다른 지역에서도 같은 패턴(\'오픈 기념 할인 + 1년 선결제 유도 + 두세 달 뒤 폐업\')을 반복한 정황이 맘카페·필라테스 커뮤니티에 보고된 상태였어요. 결제는 카드 일시불이었고 할부 항변권도 사용할 수 없는 상황." 회원권 선결제 + 갑작스러운 폐업은 ① 사기죄(형법 347조) — 영업 지속·할인 표시 기망 ② 할부거래법·방문판매법(선불식 할부거래·계속거래) ③ 소비자분쟁해결기준(체육시설 중도해지·환불) ④ 한국소비자원 1372 분쟁조정 ⑤ 형사 고소 + 민사 부당이득 트랙이 검토 가능한 영역. 신규 오픈 직후 + 1년 선결제 유도 + 두 달 내 폐업 + 반복 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 계약·결제 ② 영업 실태·반복 패턴 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회원권 선결제 폐업 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 카드사·소비자원·고소·민사·집단 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제 자료·계약서·홍보·운영 자료 보존</strong></li>\n<li><strong>② 카드사 분쟁조정·차지백 신청 (할부 시 항변권, 일시불 시 차지백)</strong></li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (소비자분쟁해결기준 체육시설 환불 기준 적용)</strong></li>\n<li><strong>④ 경찰 사기 고소 (대표 잠적·반복 패턴 자료)</strong></li>\n<li><strong>⑤ 민사 부당이득 반환·손해배상 + 다수 피해자 집단 트랙</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신규 오픈 시점에 영업 지속 가능성·재무 상태에 관한 표시가 거래 결정의 핵심 사정인 영역. 결제 시점부터 폐업 의사·자금난을 알고 있었다면 거래 시점 기망 의사가 결합된 영역으로 평가될 수 있습니다. 반복 패턴 + 동일 대표 다른 지역 폐업 이력이 결정적 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 카드사·소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (휴업·잠적 인지 당일)</strong> — 결제·계약·홍보·단톡방·휴업 공지 캡처.</li>\n<li><strong>2단계 — 카드사 분쟁조정·차지백 신청 (60~120일)</strong> — 할부 항변권 또는 비제공 차지백.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 소비자분쟁해결기준 체육시설 환불 기준.</li>\n<li><strong>4단계 — 경찰 사기 고소 (ecrm.cyber.go.kr)</strong> — 다른 지역 폐업 이력 + 다수 피해자.</li>\n<li><strong>5단계 — 민사 부당이득 반환·손해배상 (10년 시효) + 집단 트랙</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">회원권 폐업 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·운영·반복 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>회원권 계약서·결제 영수증·카드 명세·이체 내역</strong></li>\n<li><strong>홍보 자료 (할인·신규 오픈·분점 확장 약속 캡처)</strong></li>\n<li><strong>운영 기간·이용 실적·잔여 회차 자료</strong></li>\n<li><strong>휴업·잠적 공지·카톡 단톡방 캡처</strong></li>\n<li><strong>대표·법인 사업자등록·다른 지역 폐업 이력 자료 (반복 패턴)</strong></li>\n<li><strong>다른 피해자 진술서·맘카페·커뮤니티 게시글 모음</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소비자분쟁해결기준(공정위 고시)은 체육시설·필라테스·헬스장의 중도해지 환불 기준을 명시한 영역. 사업자 귀책으로 폐업 시 잔여 회차·미이용 기간 환불 청구 가능. 카드 결제라면 60일 내 차지백 또는 할부 항변권이 환수율을 높이는 핵심 경로.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"단순 경영 악화" 항변 vs 거래 시점 기망</strong> — 신규 오픈 직후 폐업·반복 패턴이 결정적 자료.</li>\n<li><strong>할부 항변권 적용 여부</strong> — 20만원 이상 3개월 이상 할부 시 카드사 항변권 행사.</li>\n<li><strong>일시불 차지백</strong> — 카드사 약관·서비스 미제공 사유로 60~120일 내 신청.</li>\n<li><strong>법인 명의·대표 개인 책임 분리</strong> — 법인 잔여재산 vs 대표 개인 자산 추적.</li>\n<li><strong>집단 소송·집단 고소</strong> — 다수 피해자 결합이 수사·민사 우선순위를 높임.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 (소비자분쟁해결기준·할부거래법 신고)</strong></li>\n<li><strong>금융감독원 (카드사 분쟁조정 1332)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래 시점 변제·이행 의사 부존재와 사기죄 영역',
        summary:
          '대법원 2025도17027(대법원, 2025.11.13 선고) 영역에서 법원은 사기죄에서 편취 고의는 거래 당시 변제할 의사나 능력이 없었던 사정을 종합해 판단해야 하고, 거래 당시 사업·재무 상황이 결과적으로 악화된 사정만으로 곧바로 편취 의사를 인정하기 어렵지만 거래 시점에 이미 이행 불능이 예견될 만한 정황이 있었다면 기망 고의가 인정될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"신규 오픈 직후 1년 선결제 유도 + 두 달 내 폐업 + 동일 대표 다른 지역 폐업 이력"은 거래 시점부터 이행 불능 예견 가능성이 결합된 영역. 반복 패턴이 사기 기망 의사 평가 자료로 평가될 수 있는 영역.',
      },
    ],
    faq: [
      {
        question: '카드 일시불로 결제했는데 환불 가능한가요?',
        answer:
          '<strong>일시불도 카드사 차지백(서비스 미제공·사업자 폐업)으로 60~120일 내 신청 가능한 영역입니다.</strong> 결제일로부터 시효 주의.',
      },
      {
        question: '할부 항변권은 언제 행사하나요?',
        answer:
          '<strong>20만원 이상 3개월 이상 할부라면 할부거래법상 항변권을 카드사에 직접 행사하는 영역입니다.</strong> 사업자 폐업·서비스 미제공이 사유.',
      },
      {
        question: '소비자분쟁해결기준상 환불 비율은?',
        answer:
          '<strong>체육시설은 잔여 회차·미이용 기간 비례 환불이 기준 영역입니다.</strong> 사업자 귀책 폐업 시 위약금 없이 전액 환불 청구 가능.',
      },
      {
        question: '같은 대표가 다른 지역에서 또 폐업한 이력이 있어요',
        answer:
          '<strong>반복 패턴은 거래 시점 기망 의사 입증의 핵심 자료 영역입니다.</strong> 다른 피해자와 결합한 집단 고소 권장.',
      },
      {
        question: '법인 명의면 대표 개인은 책임이 없나요?',
        answer:
          '<strong>법인 잔여재산이 없으면 대표 개인 자산 추적·민사 손해배상 청구가 가능한 영역입니다.</strong> 대표의 사기 고의 입증이 핵심.',
      },
      {
        question: '카톡 단톡방이 폐쇄됐는데 어떻게 다른 피해자를 찾나요?',
        answer:
          '<strong>맘카페·필라테스 커뮤니티·네이버 카페·지역 SNS에서 같은 상호 검색 영역입니다.</strong> 진술서·결제 자료 모아 집단 트랙.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '피해자 어디서부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },

  // ─── 4. fraud-online-job-recruit-deposit-required-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-job-recruit-deposit-required-vanish-track',
    keyword: '온라인 채용공고 보증금 구인사기 잠적',
    questionKeyword: '"재택근무 가능·월 280만원·교육비 명목 보증금 50만원" 채용공고에 입금 후 첫 출근 전날 연락 두절, 모집 카톡방·홈페이지 모두 폐쇄.',
    ctaKeyword: '구인사기 보증금 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 채용공고 보증금 요구·잠적 — 5단계 환수 | 로앤가이드',
      description:
        '온라인 구인공고에서 보증금·교육비 명목으로 선납을 요구하고 잠적한 구인사기를 당했다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'재택근무 가능, 월 280만원 보장, 단순 데이터 입력·간단 마케팅 보조\'로 SNS에 올라온 채용공고를 보고 카톡으로 면접. 합격 통보와 함께 \'장비 보증금 + 교육비 명목 50만원\'을 회사 계좌(법인명 X, 개인계좌)로 송금하라는 안내. \'첫 월급에서 환급 또는 한 달 근무 후 100% 반환\'을 약속받았어요. 송금 후 첫 출근일(재택근무 시작) 전날 갑자기 카톡 응답이 없고, 채용 사이트에서 공고가 삭제됐으며, 회사 홈페이지·전화도 모두 폐쇄. 알고 보니 같은 패턴(\'재택근무 + 보증금·교육비 명목 선납 + 첫 출근 직전 잠적\')으로 SNS·취업카페·디스코드에 수십 명의 피해자가 보고된 상태였어요." 구인사기 + 보증금 명목 선납은 ① 사기죄(형법 347조) — 채용·근로 의사 기망 ② 직업안정법(구인자의 금품 수수 금지·취업알선 수수료 위반) ③ 근로기준법(근로계약 전 금품 수수 금지) ④ 한국소비자원 1372 + 고용노동부 진정 ⑤ 사이버 사기 고소 + 민사 부당이득 트랙이 검토 가능한 영역. 채용 명목 + 보증금·교육비 명목 선납 + 첫 출근 직전 잠적 + 반복 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 공고·면접·이체 ② 반복 패턴 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구인사기 보증금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·계좌·노동부·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채용공고·면접 카톡·이체·홈페이지 자료 보존</strong></li>\n<li><strong>② 송금 계좌 지급정지·은행 사기계좌 신고 (즉시)</strong></li>\n<li><strong>③ 고용노동부 직업안정법 위반 진정 + 한국소비자원 1372 분쟁조정</strong></li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm.cyber.go.kr) — 다수 피해자 집단</strong></li>\n<li><strong>⑤ 민사 부당이득 반환·손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직업안정법은 구인자가 구직자에게 채용을 조건으로 금품·보증금·교육비 등을 받는 행위를 금지하는 영역. 어떤 명목이든 채용 전 금전 수수는 그 자체로 위법 자료. 첫 출근 직전 잠적 + 반복 패턴은 거래 시점부터 채용 의사 부존재 평가 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 은행·고용노동부·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (잠적 인지 당일)</strong> — 채용공고 캡처·카톡·이체·홈페이지.</li>\n<li><strong>2단계 — 송금 계좌 지급정지 + 은행 사기계좌 신고 (즉시, 112·은행 콜센터)</strong></li>\n<li><strong>3단계 — 고용노동부 직업안정법 위반 진정 (1주 내) + 한국소비자원 1372 분쟁조정</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다수 피해자 집단 + 계좌 추적.</li>\n<li><strong>5단계 — 민사 부당이득 반환·손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">구인사기 보증금 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 공고·면접·결제 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>채용공고 캡처 (SNS·구인 사이트·URL·게시 시점)</strong></li>\n<li><strong>면접·합격 통보·근로조건 안내 카톡·이메일 전문</strong></li>\n<li><strong>송금 이체 내역·예금주명·계좌번호</strong></li>\n<li><strong>회사 홈페이지·사업자등록증·법인 등기 자료 (실재 여부 확인)</strong></li>\n<li><strong>모집 카톡방·디스코드·취업카페 다른 피해자 명단</strong></li>\n<li><strong>잠적 시점 캡처 (공고 삭제·연락 두절 시점)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 송금 직후 1~3시간 내 은행 콜센터·112로 사기계좌 신고 + 지급정지 신청이 환수율을 가장 크게 좌우하는 영역. 전기통신금융사기 피해금 환급에 관한 특별법 적용 여부도 별도 검토 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"교육비·장비 보증금은 합법" 주장</strong> — 직업안정법상 채용 조건 금품 수수 금지에 해당.</li>\n<li><strong>개인계좌 송금</strong> — 법인계좌 아닌 개인계좌 요구 자체가 위험 신호.</li>\n<li><strong>지급정지 시한</strong> — 송금 직후 빠를수록 환수율 상승.</li>\n<li><strong>전기통신금융사기 특별법 적용</strong> — 보이스피싱 외 사기 유형 적용 여부 별도 평가.</li>\n<li><strong>다수 피해자 집단</strong> — 반복 패턴이 거래 시점 기망 의사 자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 (직업안정법 위반 진정, 국번없이 1350)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·사기계좌 신고)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래 시점 이행 의사 부존재와 편취 평가 영역',
        summary:
          '대법원 2025도11906(대법원, 2025.09.25 선고) 영역에서 법원은 사기죄에서 편취 의사는 거래 당시 변제 또는 이행할 의사나 능력이 있었는지에 의해 판단되고, 거래 후 사정 변경으로 이행이 어려워졌더라도 거래 시점에 이미 이행 불능이 예견되거나 기망의사로 거래에 임한 정황이 있다면 사기죄 평가의 자료가 된다고 본 사례 흐름이 있습니다.',
        takeaway: '"채용 명목 + 보증금·교육비 선납 유도 + 첫 출근 직전 잠적 + 반복 패턴"은 거래 시점부터 채용 의사·근로 제공 의사가 부존재한 정황이 결합된 영역. 동일 패턴 다수 피해자는 사기 기망 의사 평가 자료.',
      },
    ],
    faq: [
      {
        question: '보증금·교육비 명목 선납은 합법인가요?',
        answer:
          '<strong>직업안정법은 채용 조건으로 구직자에게 금품·보증금·교육비를 받는 행위를 금지하는 영역입니다.</strong> 명목이 무엇이든 채용 전 금전 수수는 위법.',
      },
      {
        question: '송금 직후 어떻게 빨리 환수하나요?',
        answer:
          '<strong>은행 콜센터·112로 즉시 사기계좌 신고 + 지급정지 신청이 환수율을 가장 크게 좌우하는 영역입니다.</strong> 송금 후 시간이 지날수록 환수 어려워짐.',
      },
      {
        question: '회사 사업자등록증을 봤는데도 사기일 수 있나요?',
        answer:
          '<strong>유령 법인·도용 사업자등록일 가능성이 있는 영역입니다.</strong> 법인 등기·대표 신원·실제 사무실 운영 여부 확인 권장.',
      },
      {
        question: '같은 패턴 피해자가 많으면 어떻게 모으나요?',
        answer:
          '<strong>구인 사이트 댓글·취업카페·디스코드 단톡방·SNS 검색 영역입니다.</strong> 피해 시점·금액·계좌 통합 후 집단 고소.',
      },
      {
        question: '고용노동부 진정이 형사 고소보다 빠른가요?',
        answer:
          '<strong>고용노동부 진정은 직업안정법 위반 별도 트랙으로 동시 진행이 환수율을 높이는 영역입니다.</strong> 사기 고소는 사법 절차.',
      },
      {
        question: '전기통신금융사기 피해금 환급 신청은?',
        answer:
          '<strong>은행 사기계좌 신고 후 채권소멸 공고 2개월 거쳐 환급되는 영역입니다.</strong> 사기 유형 인정 시 적용 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '대출 브로커 선납', href: '/guide/fraud/fraud-loan-broker-upfront-fee-vanish-track' },
      { label: '보이스피싱 환급', href: '/guide/fraud/fraud-voice-phishing-money-laundering-defense' },
      { label: '피해자 어디서부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 5. fraud-secondhand-luxury-watch-fake-swap-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-luxury-watch-fake-swap-track',
    keyword: '중고거래 명품 시계 가품 AS센터 감정',
    questionKeyword: '번개장터에서 롤렉스 서브마리너 720만원 구매(현장 직거래), 정품 AS센터 감정 결과 가품 판정, 판매자 "사용 흔적이라 위조 아님" 주장.',
    ctaKeyword: '중고 명품 시계 가품 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고거래 명품 시계 가품·AS센터 감정 — 5단계 환수 | 로앤가이드',
      description:
        '번개장터·당근 등 중고거래에서 구매한 명품 시계가 정품 AS센터 감정에서 가품 판정됐다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"번개장터에서 롤렉스 서브마리너 \'정품 보증·박스·보증서 풀세트\'로 720만원에 현장 직거래로 구매. 며칠 뒤 강남 롤렉스 공식 AS센터에 점검을 의뢰하니 \'무브먼트 구조와 시리얼 넘버 패턴이 정품과 다르고 케이스 각인도 위조\'라며 가품 판정. 판매자에게 환불을 요구하니 \'중고품이라 사용 흔적이 있을 뿐이지 위조는 아니다\'며 책임을 회피하더니, 알고 보니 같은 닉네임·계좌가 번개장터·당근에서 가품 시계를 여러 점 판매한 정황이 명품 시계 커뮤니티에 보고된 상태였어요. 직거래라 카드 차지백도 불가능한 상황." 중고 명품 시계 가품 + 판매자 부인은 ① 사기죄(형법 347조) — 정품·보증서 표시 기망 ② 상표법(위조 명품 판매·보유) ③ 민법 매매계약 하자담보책임·계약취소(민법 580조) ④ 한국소비자원 1372 + 플랫폼(번개장터·당근) 신고 ⑤ 형사 고소 + 민사 부당이득 트랙이 검토 가능한 영역. 정품·보증서 표시 + AS센터 감정 결과 가품 + 반복 판매 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 거래·이체·시계 ② AS센터 감정 결과 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 시계 가품 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. AS센터·플랫폼·고소·민사·집단 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 자료·이체·시계 사진·박스·보증서 자료 보존</strong></li>\n<li><strong>② 정품 AS센터·공식 부티크 진위 감정서 발급 (정식 서면)</strong></li>\n<li><strong>③ 플랫폼(번개장터·당근) 신고 + 판매자 계정 정지·이력 보존 요청</strong></li>\n<li><strong>④ 경찰 사기·상표법 위반 고소 (다수 피해자 집단)</strong></li>\n<li><strong>⑤ 민사 매매대금 반환·손해배상 + 한국소비자원 1372 분쟁조정</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 중고거래에서 "정품·보증서·박스 풀세트"가 가격 산정의 핵심이라면 진품성은 거래 결정의 중요 사정 영역. 공식 AS센터 감정에서 가품 판정이 나오면 매매계약 하자담보책임(민법 580조) + 사기 기망 + 상표법 위반이 결합되는 영역으로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. AS센터·플랫폼·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (가품 인지 당일)</strong> — 거래 카톡·이체·시계 사진·박스·보증서.</li>\n<li><strong>2단계 — 정품 AS센터·공식 부티크 진위 감정서 발급 (정식 서면, 1~2주)</strong></li>\n<li><strong>3단계 — 플랫폼(번개장터·당근) 신고 + 판매자 계정·이력 보존 (1주 내)</strong></li>\n<li><strong>4단계 — 경찰 사기·상표법 위반 고소 (ecrm.cyber.go.kr)</strong> — 같은 닉네임·계좌 반복 판매 자료.</li>\n<li><strong>5단계 — 민사 매매대금 반환·손해배상 (10년 시효) + 한국소비자원 1372 분쟁조정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 시계 가품 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·감정·반복 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>판매 게시글·정품 보증·박스·보증서 사진 캡처</strong></li>\n<li><strong>판매자와 카톡·메시지 (정품 약속·보증서 표시 발언)</strong></li>\n<li><strong>계좌 이체·현장 직거래 영수증·만남 장소·CCTV 단서</strong></li>\n<li><strong>정품 AS센터·공식 부티크 진위 감정서 정식 서면</strong></li>\n<li><strong>판매자 닉네임·계좌·휴대전화 + 같은 닉네임 과거 판매 이력 (반복 패턴)</strong></li>\n<li><strong>플랫폼(번개장터·당근) 신고 회신·판매자 계정 정지 자료</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명품 시계 진위는 공식 AS센터·공식 부티크의 정식 서면 감정서가 핵심 자료. 무브먼트·시리얼·각인·박스·보증서까지 종합 확인. 판매자가 "사용 흔적" 변명을 해도 위조 부품·시리얼 위조는 진품성과 무관한 별개 평가 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"사용 흔적이라 위조 아님" 항변</strong> — 무브먼트·시리얼·각인 위조는 사용 흔적과 무관한 별개 평가.</li>\n<li><strong>판매자 선의 항변</strong> — 본인도 속았다는 주장 vs 정품 보증·박스·보증서 표시 책임.</li>\n<li><strong>현장 직거래·계좌 이체</strong> — 카드 차지백 불가, 사기 고소·민사 트랙 중심.</li>\n<li><strong>플랫폼 책임</strong> — 통신판매중개업자 신원 확인·신고 처리 의무 별도 평가.</li>\n<li><strong>상표법 위반</strong> — 위조 명품 보유·판매는 사기와 별개 처벌 조항.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>정품 명품 AS센터·공식 부티크 (진위 감정)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>특허청 (상표법 위반 신고·위조품 침해 단속)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진품 표시·보증서 첨부와 거래 결정 중요 사정',
        summary:
          '대법원 2024도11686(대법원, 2024.12.12 선고) 영역에서 법원은 매도인이 상품의 진위·품질·출처 등 거래의 핵심 사정에 관하여 사실과 다른 표시를 하거나 정상 거래에서 반드시 고지해야 할 사정을 숨긴 채 매매를 성립시킨 경우 그러한 표시·고지의무 위반이 사기죄의 기망에 해당할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"중고 명품 시계의 정품·보증서·박스 풀세트 표시 + AS센터 가품 판정 + 동일 닉네임 반복 판매 패턴"은 거래의 핵심 사정에 관한 표시 책임이 결합된 영역. 판매자가 가품 가능성을 인지하고도 정품으로 표시했다면 사기 기망 평가 자료.',
      },
    ],
    faq: [
      {
        question: '판매자가 "본인도 속았다"고 주장합니다',
        answer:
          '<strong>판매자 선의 항변은 매입 경로·구입 가격·다른 판매 이력 종합 평가 영역입니다.</strong> 반복 판매·할인된 매입가는 선의 부정 자료.',
      },
      {
        question: '정품 AS센터 감정 비용은 얼마인가요?',
        answer:
          '<strong>롤렉스·오메가 등 공식 AS센터 점검은 무료~15만원 수준의 정식 진위 감정 영역입니다.</strong> 정식 서면 발급 요청이 핵심.',
      },
      {
        question: '직거래·계좌 이체라 환수가 어려운가요?',
        answer:
          '<strong>카드 차지백은 불가하지만 사기 고소·민사 부당이득·계좌 추적이 가능한 영역입니다.</strong> 판매자 계좌 동결 가능성 별도 평가.',
      },
      {
        question: '같은 닉네임이 다른 시계도 팔고 있어요',
        answer:
          '<strong>반복 판매는 거래 시점 기망 의사 입증의 결정적 자료 영역입니다.</strong> 다른 피해자 결합 + 상표법 위반 고소 권장.',
      },
      {
        question: '플랫폼(번개장터·당근)도 책임이 있나요?',
        answer:
          '<strong>통신판매중개업법상 플랫폼의 신원 확인·신고 처리 의무 범위 영역입니다.</strong> 플랫폼 신고로 계정 정지·이력 보존은 가능.',
      },
      {
        question: '상표법 위반 신고는 어디로 하나요?',
        answer:
          '<strong>특허청·관세청·경찰청 사이버 신고가 가능한 영역입니다.</strong> 위조품 보유·판매는 사기와 별개 처벌 조항.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '명품 중고거래', href: '/guide/fraud/fraud-secondhand-luxury-purchase' },
      { label: '사기 시효', href: '/guide/fraud/fraud-statute-of-limitations-period' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },
];
