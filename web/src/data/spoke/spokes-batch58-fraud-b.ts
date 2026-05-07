import { SpokePage } from '../spoke-pages';

// batch58 fraud B — 2개:
// 1. 중고거래 사기 가해자 (오인송금·실수 주장 방어)
// 2. 해외쇼핑몰 사기 + 카드사 차지백(chargeback)
//
// 고유 존재 이유:
// 1. 이 페이지는 중고거래로 사기 고소를 당한 판매자가 '오인송금·단순 변제지체' 주장으로 편취의사 방어 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 해외쇼핑몰에서 카드 결제 후 상품 미배송·가품 받은 피해자가 카드사 차지백(chargeback) + 한국소비자원 국제거래 4단계 회수 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58FraudB: SpokePage[] = [
  // ─── 1. fraud / fraud-secondhand-accused-misremit-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-accused-misremit-defense',
    keyword: '중고거래 사기 가해자 방어',
    questionKeyword: '중고거래로 사기 고소를 당했어요. 단순 변제지체·오인송금이라고 주장할 수 있나요?',
    ctaKeyword: '중고거래 사기 방어 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '중고거래 사기 고소 방어 — 편취의사 5가지 반박 | 로앤가이드',
      description:
        '중고거래로 사기 고소를 당했다면 편취의사 부정·단순 변제지체 항변 5가지 반박 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"당근마켓에 노트북을 80만원에 올렸고 입금 받은 뒤 갑자기 일이 꼬여서 발송이 며칠 늦어졌어요. 그 사이 구매자가 \'사기로 고소했다\' 연락이 왔습니다." 중고거래 판매자가 사기 고소를 받았다면 편취의사(처음부터 속일 의도) 유무가 핵심 쟁점이 될 수 있는 사안입니다. 형법 제347조 사기죄는 \'행위 당시\' 편취의사가 있어야 성립하고, 거래 시점에 변제·이행 의사·능력이 있었지만 사후 사정으로 이행이 늦어진 사례라면 편취의사 부정 항변이 검토 가능한 영역이에요. 다만 \'늦었으니 결국 발송했다\'만으로는 부족하고, 거래 시점의 실제 보유·이행 노력·연락 단절 여부 등 객관 자료로 다툼해야 하는 영역입니다. 혐의를 받고 있다면 처음부터 속일 의도가 있었다는 검찰 입증을 다투는 방향으로 정리해두는 것이 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 중고거래 사기 방어 5가지 반박 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 편취의사 부정 + 단순 변제지체 + 객관 자료 5축으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 시점 보유·이행 능력 입증</strong> — 게시 당시 실제 물건 보유 사진·구매 영수증·재고 정황. 처음부터 없는 물건을 판 게 아님을 객관적으로 다툼.</li>\n<li><strong>② 연락 유지 정황</strong> — 카톡·문자 회신 기록. 잠적·차단·번호 변경 없으면 편취의사 약함을 다툼할 수 있는 영역.</li>\n<li><strong>③ 사후 사정 변동 입증</strong> — 발송 지연 사유(질병·이사·가족사·물품 파손 등). 거래 후 발생한 사정이라면 \'행위 당시\' 편취의사 부정 가능 영역.</li>\n<li><strong>④ 환불·이행 노력 자료</strong> — 환불 제안·재발송 시도·대체 보상 제안 정황. 회피가 아닌 해결 노력으로 평가될 여지.</li>\n<li><strong>⑤ 단일 거래 vs 다수 피해자 구조</strong> — 같은 판매자가 다수 동시 미발송이면 사기 의도 강화. 본 건이 단일 거래 1회 분쟁이라면 편취의사 다툼 여지 큼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사기죄는 \'행위 당시\' 편취의사가 있어야 성립. 거래 후 사정 변동으로 이행이 지연된 사례라면 \'민사상 채무불이행\'으로 정리될 가능성이 검토되는 영역. 단, 다수 동시 미발송·잠적 정황이 있으면 다툼 어려워질 수 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 환불·합의 검토 → 진술 준비 → 변호인 검토 → 처분 대응 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 거래 게시글 캡처·물건 보유 사진·발송 시도 정황·카톡 전체 백업. 구매자에게 보낸 환불·이행 제안 메시지 별도 보존.</li>\n<li><strong>2단계 — 환불·합의 우선 검토 (1주 내)</strong> — 송금액 환불 + 사과 + 거래 종결 합의서. 합의 시 고소 취소 가능성 영역. 단 합의금이 부풀려지면 별도 다툼 검토.</li>\n<li><strong>3단계 — 경찰 진술 준비 (조사 1~2주 전)</strong> — 거래 시점 보유·이행 의사·사후 사정 변동 시간순 정리. \'언제부터 못 보냈나\' \'그 사이 무엇을 했나\' 답변 일관성 확보.</li>\n<li><strong>4단계 — 변호인 검토 (조사 전 권장)</strong> — 다수 피해자 구조·금액 1천만원 초과 등 사안 무거우면 변호인 동행. 대한법률구조공단 132 무료 상담 검토.</li>\n<li><strong>5단계 — 검찰 처분 대응 (송치 후)</strong> — 불기소 의견 청구 시 의견서 제출. 약식기소 시 정식재판청구 검토. 합의·변제 자료 추가 보강.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고거래 사기 방어 5단계 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래 자료 + 사후 사정 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>중고거래 게시글 캡처</strong> — 게시일·물건 사진·가격·설명. 당근마켓·번개장터·중고나라 게시글 원본.</li>\n<li><strong>물건 실제 보유 자료</strong> — 구매 영수증·박스·시리얼 번호·자택 보관 사진(타임스탬프 포함).</li>\n<li><strong>거래 채팅 전체 백업</strong> — 첫 문의부터 분쟁까지 전체. 카톡 PDF 내보내기 + 스크린샷 병행.</li>\n<li><strong>입금 내역</strong> — 송금 시점·금액·계좌. 본인 계좌 입금 확인.</li>\n<li><strong>발송 시도·지연 사유 자료</strong> — 택배 예약 캡처·병원 진단서·가족 상황 자료 등 사후 사정 입증.</li>\n<li><strong>환불·합의 시도 자료</strong> — 환불 제안 메시지·송금 시도·대체 보상 제안.</li>\n<li><strong>본인 거래 이력</strong> — 동일 플랫폼 과거 거래 후기·평점. 다수 분쟁 이력 없음 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카톡 백업은 PDF 내보내기 기능 활용 시 시간순 보존이 안정적이고 위·변조 의심을 줄일 수 있는 영역. 대화 일부만 캡처하면 \'유리한 부분만\' 의심 빌미가 될 수 있어요.</blockquote>',
      },
      {
        title: '⚠️ 흔한 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 하는 실수와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"고소장 보면 별거 아니던데" 무대응</strong> — 출석 요구 무시 시 체포영장 가능 영역. 1차 출석에 자료 준비해 가는 것이 회복 어려운 불이익 방지.</li>\n<li><strong>구매자 차단·번호 변경</strong> — 잠적 정황으로 평가될 수 있어 편취의사 다툼이 어려워지는 영역. 연락 유지 + 환불 제안 채널 유지가 안전.</li>\n<li><strong>구매자에게 "사기 아니야 그만해" 협박성 메시지</strong> — 별도 협박·강요 시비 가능 영역. 객관 자료로 이행 의사 입증하는 방향이 안전.</li>\n<li><strong>"민사로 가라" 강경 회피</strong> — 형사 사기 고소가 진행되면 별개 트랙. 환불·합의 거부 정황은 편취의사 정황으로 평가될 여지.</li>\n<li><strong>거래 게시글 즉시 삭제</strong> — 증거인멸 의심 빌미가 될 수 있어 다툼 약화. 캡처 후 그대로 두는 것이 안전.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담 (소득 요건 충족 시 무료 변론 검토).</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong> — 사기 사건 처리 단계 안내.</li>\n<li><strong>대한변호사협회 변호사 검색</strong> — 사기 형사 전담 검색.</li>\n<li><strong>각 지방검찰청 민원실</strong> — 처분 결과 조회.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래 시점 변제 의사·능력 있으면 사기죄 부정',
        summary:
          '서울중앙지방법원 2015고단6421 사건(2016.04.25 선고)은 사기죄 성립 시점·편취의사 판단에 관한 사례로 검토되는 판례입니다. 같은 취지로 대법원은 사기죄가 성립하는지 판단하는 기준 시점은 \'행위 당시\'이고, 차주가 돈을 빌릴 당시에 변제할 의사와 능력을 가지고 있었으나 그 후 변제하지 않고 있는 경우 사기죄가 성립하지 않는다는 입장을 확인해왔습니다. 또한 대주가 장래의 변제 지체·변제불능 위험을 예상하거나 충분히 예상할 수 있었던 경우, 차주가 그 후 제대로 변제하지 못했다는 사실만으로 변제능력 기망이나 편취 범의가 인정된다고 단정할 수 없다고 판시했습니다.',
        takeaway: '중고거래로 사기 고소를 받았다면, 거래 시점 물건 보유·이행 의사·연락 유지·사후 사정 변동을 객관 자료로 정리해 \'행위 당시\' 편취의사 부정 트랙을 검토할 수 있는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '발송이 일주일 늦었을 뿐인데 사기 고소를 당했어요',
        answer:
          '<strong>거래 시점 이행 의사·능력이 있었다면 단순 변제지체 항변이 검토되는 영역입니다.</strong> 게시글·물건 보유 사진·발송 시도 자료 + 연락 유지 정황으로 \'행위 당시\' 편취의사 다툼.',
      },
      {
        question: '환불해주면 합의되나요?',
        answer:
          '<strong>환불 + 사과 + 합의서로 고소 취소 가능성이 검토되는 영역입니다.</strong> 다만 합의금 부풀림은 별도 다툼 검토. 합의서에 \'민·형사 책임 일체 종결\' 명시가 안전.',
      },
      {
        question: '경찰서에서 출석 요구가 왔는데 안 가도 되나요?',
        answer:
          '<strong>1차 출석 요구를 무시하면 체포영장이 발부될 수 있는 영역입니다.</strong> 일정 조정은 가능하지만 무대응은 위험. 자료 준비 후 출석 + 진술 준비.',
      },
      {
        question: '구매자가 단톡에 "이 사람 사기꾼" 올렸어요',
        answer:
          '<strong>명예훼손 별도 검토 가능합니다.</strong> 게시글 캡처 + 게시자 정보 보존. 다만 사기 다툼이 미해결 상태에서 명예훼손 맞고소는 분쟁 확대 위험. 시점 신중히 결정.',
      },
      {
        question: '변호사 비용이 부담스러워요',
        answer:
          '<strong>대한법률구조공단 132 무료 상담을 먼저 검토해보세요.</strong> 소득·재산 요건 충족 시 무료 변론 가능 영역. 사기 금액·사안에 따라 국선변호인 선정 검토도 가능.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 대응 전략', href: '/guide/fraud/fraud-accused-response' },
      { label: '편취의사 부정 항변', href: '/guide/fraud/fraud-charge-rebuttal' },
      { label: '사기 합의·감경 효과', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '중고거래 미발송 피해자', href: '/guide/fraud/fraud-second-hand-goods-noshow-platform' },
      { label: '경찰 조사 흔한 실수', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
    ],
  },

  // ─── 2. fraud / fraud-overseas-shop-card-chargeback ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-shop-card-chargeback',
    keyword: '해외쇼핑몰 사기 차지백',
    questionKeyword: '해외쇼핑몰에서 카드 결제했는데 상품이 안 와요. 차지백(chargeback) 신청 가능한가요?',
    ctaKeyword: '해외쇼핑 차지백 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '해외쇼핑몰 사기 4단계 차지백 회수 가이드 | 로앤가이드',
      description:
        '해외쇼핑몰 카드 결제 후 미배송·가품을 받았다면 카드사 차지백 + 국제거래 분쟁조정 4단계 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인스타에서 본 해외 직구 쇼핑몰에서 25만원어치 결제했는데 두 달이 지나도 상품이 안 와요. 사이트는 잠잠하고 이메일 회신도 없습니다." 해외쇼핑몰에서 카드 결제 후 미배송·가품·과다청구를 당한 사안은 카드사 차지백(chargeback) + 국제거래 분쟁조정 + 한국소비자원 국제거래센터 + 소액 민사 4단계 회수 트랙으로 검토할 수 있는 영역입니다. VISA·MasterCard 글로벌 차지백 규정은 \'상품 미수령\'·\'상품 광고와 다름\'·\'중복 청구\' 등을 분쟁 사유로 인정하고 있고, 결제일로부터 통상 120일 내 신청이 가능한 영역이에요. 국내 카드사가 1차 거부해도 글로벌 카드사 본사에 재신청·이의제기 트랙이 있어, 자료를 정리해두면 회수 가능성이 검토 가능한 사안입니다.</p>',
    sections: [
      {
        title: 'Q. 해외쇼핑몰 사기 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 카드사 차지백·국제 분쟁조정·한국소비자원·민사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 카드사 차지백 (VISA·MasterCard 규정)</strong> — \'상품 미수령\' \'광고와 다름\' \'중복 청구\' 등 분쟁 사유로 신청. 통상 결제일 120일 내, 일부 사유는 540일까지 영역.</li>\n<li><strong>② 국제 분쟁조정 (한국소비자원 국제거래센터, crossborder.kca.go.kr)</strong> — 해외 사업자와의 분쟁 무료 조정. 평균 30~60일 처리.</li>\n<li><strong>③ 글로벌 카드사 본사 재신청</strong> — 국내 카드사 1차 거부 시 VISA·MasterCard 본사에 재이의 제기 트랙. 영문 자료 + 거래 증빙 추가.</li>\n<li><strong>④ 민사 청구·국제소송</strong> — 대규모 피해자 발생 시 소비자단체소송 검토. 단 해외 피고는 송달·집행 한계 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 차지백은 카드사 vs 가맹점(쇼핑몰) 분쟁이라 \'카드사가 가맹점에 청구한 결제대금을 되돌리는\' 구조. 신청 자체는 무료, 결과 통상 60~90일. 카드사가 1차 거부해도 자료 보강 후 재신청·금감원 1332 민원 트랙이 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 차지백 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 카드사 분쟁 신청 → 보강 → 분쟁조정 → 본사 이의 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 결제 영수증·주문 확인 메일·쇼핑몰 광고 캡처·미배송 정황·이메일 회신 단절 기록.</li>\n<li><strong>2단계 — 쇼핑몰에 환불 요청 (1~2주)</strong> — 환불 요청 이메일 송부 + 답변 없을 시 캡처. 차지백 신청 시 \'사업자에게 먼저 시도했음\' 자료가 가산점.</li>\n<li><strong>3단계 — 카드사 차지백 신청 (결제일 120일 내)</strong> — 카드사 고객센터 → 분쟁조정 신청서 작성. 사유: 상품 미수령·광고와 다름·중복 청구 중 선택.</li>\n<li><strong>4단계 — 한국소비자원 국제거래센터 (1372 또는 crossborder.kca.go.kr)</strong> — 차지백 거부 시 무료 분쟁조정. 영문 자료 직접 안 만들어도 센터가 보조 영역.</li>\n<li><strong>5단계 — 카드사 1차 거부 시 글로벌 본사 이의 (60일)</strong> — VISA·MasterCard 본사 재이의. 영문 거래 증빙 + 추가 자료. 금감원 1332 민원 병행 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외쇼핑몰 차지백 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제 자료 + 분쟁 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>카드 결제 영수증·승인 내역</strong> — 결제일·금액·통화·가맹점명. 카드사 앱·문자 캡처.</li>\n<li><strong>쇼핑몰 주문 확인 메일</strong> — 주문번호·예상 배송일·발송 약속.</li>\n<li><strong>광고·상품 페이지 캡처</strong> — 결제 시점 광고 vs 실제 받은 물품 차이. 광고 페이지 URL + 캡처 시간.</li>\n<li><strong>배송 추적 정보 부재 자료</strong> — 송장번호 미발급·추적 불가 캡처. 발송 약속 후 도착하지 않은 정황.</li>\n<li><strong>환불 요청 이메일·답변 단절 자료</strong> — 송신 시점·내용·답변 무응답 캡처.</li>\n<li><strong>SNS·커뮤니티 동일 피해자 정황</strong> — 같은 쇼핑몰 피해 게시글. 다수 피해 = 사기 의도 정황.</li>\n<li><strong>사이트 운영 정황</strong> — 사이트 폐쇄·연락처 변경·도메인 이전 자료. archive.org 캡처 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인스타·페이스북 광고로 유입된 사이트 사기는 광고 캡처 + 광고 클릭 시점 + 결제 시점 시간순 정리가 차지백 인정 가능성을 높이는 영역. 광고가 사라지기 전 캡처가 핵심.</blockquote>',
      },
      {
        title: '⚠️ 흔한 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 하는 실수와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"한 달만 더 기다려보자" 시간 끌기</strong> — 차지백 신청 기한(통상 120일)을 놓치는 사례. 결제일로부터 카운트되니 30~60일 안에 신청이 안전.</li>\n<li><strong>쇼핑몰에 환불 요청 없이 곧장 차지백</strong> — 카드사가 \'사업자 협의 시도 부족\' 사유로 거부할 여지. 1~2주 환불 요청 후 차지백.</li>\n<li><strong>광고 캡처 누락</strong> — 사이트가 광고 내용을 수정·삭제하면 \'광고와 다름\' 입증이 어려운 영역. 결제 직후 캡처 + URL 보존.</li>\n<li><strong>국내 쇼핑몰처럼 청약철회 7일 적용 시도</strong> — 해외 사업자는 전자상거래법 적용이 제한적인 사례. 차지백 트랙으로 분기.</li>\n<li><strong>카드사 1차 거부 = 끝 단정</strong> — 자료 보강 후 재신청 + 금감원 1332 민원 + 글로벌 본사 이의 트랙이 남아있는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 국제거래센터 (1372 / crossborder.kca.go.kr)</strong> — 해외 사업자 분쟁조정 무료.</li>\n<li><strong>금융감독원 1332</strong> — 카드사 분쟁 민원.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong> — 사기 의심 신고.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 광고와 실제 차이 + 처분의사 유발 기망',
        summary:
          '대법원 2024도1932 사건(대법원, 2025.09.11 선고)에서 법원은 사업자가 위탁받은 업무를 의뢰받은 대로 진행하지 않으면서도 비용을 계속 청구·수령한 행위를 기망에 의한 처분 유도 영역으로 평가하는 취지로 판시했습니다. 같은 흐름에서 해외쇼핑몰이 광고와 다른 상품을 보내거나 발송 의사·능력이 부족한 상태에서 결제만 받는 사례라면, 광고와 실제 차이·이행 부재 정황이 차지백 분쟁 사유로 평가될 여지가 있다는 시사점이 있습니다.',
        takeaway: '해외쇼핑몰 미배송·광고와 다름 사례는 광고 캡처·결제 자료·환불 요청 자료를 정리하면 카드사 차지백 + 국제거래 분쟁조정 회수 트랙이 검토 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '결제한 지 6개월 지났어요. 차지백 가능한가요?',
        answer:
          '<strong>일반 분쟁 사유는 120일 한도지만, 일부 사유(상품 미수령 등)는 540일까지 가능한 영역입니다.</strong> 카드사에 사유 명확히 기재 후 신청. 기한 도과면 한국소비자원 분쟁조정으로 분기.',
      },
      {
        question: '카드사가 "사업자 책임이라 안 된다"고 거부했어요',
        answer:
          '<strong>1차 거부 후 자료 보강 + 재신청이 가능한 영역입니다.</strong> 광고 캡처·환불 요청 자료·다른 피해자 정황 추가. 금감원 1332 민원 + 글로벌 본사 이의 트랙 병행.',
      },
      {
        question: '체크카드로 결제했어요. 차지백 되나요?',
        answer:
          '<strong>VISA·MasterCard 체크카드도 차지백 규정 적용 영역입니다.</strong> 다만 일부 카드사·해외전용 직불카드는 제한이 있어 카드사 약관 확인 필수.',
      },
      {
        question: '인스타 광고 보고 결제했는데 그 광고도 사라졌어요',
        answer:
          '<strong>광고 캡처가 없으면 입증이 어려운 영역이지만, 같은 광고를 본 다른 피해자 정황으로 보강 가능합니다.</strong> SNS 댓글·커뮤니티 게시글·archive.org 검색.',
      },
      {
        question: '이미 가품이 도착했어요. 반품해야 차지백 되나요?',
        answer:
          '<strong>가품 사례는 \'광고와 다른 상품\' 분쟁으로 차지백 신청 가능 영역입니다.</strong> 가품 사진·진품 비교·감정 자료 보존. 일부 카드사는 반송 후 차지백을 요구하니 사전 확인.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '온라인 쇼핑몰 환불 사기', href: '/guide/fraud/fraud-online-shopping-fake-store-recovery' },
      { label: '해외 배송비 추가 요구 사기', href: '/guide/fraud/fraud-overseas-shipping-money-scam' },
      { label: 'SNS 광고 환불 거부', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '구독 자동결제 사기', href: '/guide/fraud/fraud-subscription-autorenewal-deceptive' },
      { label: '사기 신고 기한·금액', href: '/guide/fraud/fraud-report-deadline-amounts' },
    ],
  },
];
