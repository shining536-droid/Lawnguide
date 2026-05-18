import { SpokePage } from '../spoke-pages';

// batch69 fraud — 5개 (2026-05-19)
//
// 고유 존재 이유:
// 1. fraud-secondhand-motorcycle-helmet-bundle-disappear-track — 중고 오토바이 본체 + 헬멧·장비 묶음 패키지 거래 후 잠적 (기존 secondhand-* 시리즈와 분기: "다품목 묶음 + 고가 단일 거래 + 등록·명의이전 분쟁" 트랙, 자동차관리법 검토 영역).
// 2. fraud-overseas-buying-agent-double-billing-disappear-track — 해외구매대행 1회 결제 후 카드사·페이팔 이중 청구되거나 추가 관세·운송비 명목으로 재청구 후 잠적 (기존 overseas-shipping-money-scam / overseas-shop-card-chargeback 와 분기: "구매대행 + 이중과금 + 추가 청구 후 잠적" 트랙, 통신판매중개업법 + 카드 항변권 영역).
// 3. fraud-private-tutor-pre-payment-lessons-no-show-track — 개인 과외·취미 레슨(피아노·미술·코딩) 선결제 후 수업 미실시 (기존 academy-tuition-refund / cram-school-sudden-close 와 분기: "학원·교습소 환불(소비자분쟁) 트랙이 아닌 개인 간 직접 거래 + 선결제 + 미이행" 트랙, 부작위 기망 + 민사 부당이득 영역).
// 4. fraud-pet-shop-pedigree-falsified-different-breed-track — 펫샵·브리더가 혈통서를 위조했거나 다른 견종을 인도 (동물 거래 특수 트랙, 동물보호법·소비자분쟁해결기준·사기 결합 영역. 기존 fraud 라인업에 동물거래 트랙 자체가 없어 신설).
// 5. fraud-wedding-vendor-photographer-dress-deposit-loss-track — 결혼식 벤더(스튜디오·드레스·메이크업·예식장) 선예약금 후 잠적 (기존 event-deposit-cancel-vanish / celebrity-fanmeet-cancel-refund 와 분기: "시기 임박형(취소 불가) + 다중 벤더 묶음 + 큰 선급금" 트랙, 소비자분쟁해결기준 결혼중개·예식 영역).

export const spokesBatch69Fraud: SpokePage[] = [
  // ─── 1. fraud-secondhand-motorcycle-helmet-bundle-disappear-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-motorcycle-helmet-bundle-disappear-track',
    keyword: '중고 오토바이 헬멧 묶음 잠적',
    questionKeyword: '중고거래 사이트에서 125cc 오토바이 본체 + 헬멧·자켓·장갑·블랙박스 묶음 패키지 480만원 송금 후 매도인 잠적, 명의이전 서류 미인도.',
    ctaKeyword: '중고 오토바이 묶음 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 오토바이·헬멧 묶음 거래 잠적 — 5단계 환수 트랙 | 로앤가이드',
      description:
        '125cc 오토바이 본체 + 헬멧·장비 묶음을 중고거래로 송금했는데 매도인이 잠적하고 명의이전이 안 된다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고거래 사이트에서 125cc 오토바이를 \'헬멧·자켓·장갑·블랙박스 풀세트 포함, 정비 완료\'로 480만원에 매도한다는 게시글을 보고 직거래 약속 후 계좌 이체. 받기는 받았는데 \'명의이전 서류는 다음 주 우편으로 보낸다\'며 미루다가 일주일 뒤 연락 두절. 알고 보니 같은 매도인이 같은 차량 번호판으로 여러 사람에게 \'장비 묶음 + 정비 완료\' 패키지로 매도한 후 본체만 인도하고 명의이전·장비 일부를 누락한 정황이 오토바이 카페에 다수 보고된 상태였어요." 중고 오토바이 묶음 거래 + 매도인 잠적은 ① 사기죄(형법 347조) — 묶음 구성·정비 표시 기망 + 명의이전 의사 은닉 ② 자동차관리법(이륜자동차 사용신고·이전등록 의무 위반) ③ 한국소비자원 분쟁조정 ④ 사이버 사기 고소 ⑤ 민사 부당이득·손해배상 트랙이 검토 가능한 영역. 본체만 인도 + 장비 누락 + 명의이전 회피가 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 거래·이체·게시글 ② 본체 차대번호·번호판 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 오토바이 묶음 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·차량등록·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·게시글·이체 자료 보존</strong> — 중고거래 게시글 캡처·카톡·계좌 이체·통화 녹취.</li>\n<li><strong>② 본체 차대번호·번호판·등록증 확인</strong> — 명의이전 가능 여부·소유관계.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (개인간 직거래도 신청 가능)</strong></li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 같은 매도인 반복 패턴.</li>\n<li><strong>⑤ 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 묶음 구성·정비 완료 표시·명의이전 약속을 모두 갖춰 거래를 유도한 뒤 본체만 인도하고 잠적했다면 부작위 기망 + 묶음 표시 기망이 결합된 영역으로 평가될 수 있습니다. 같은 차량 번호판이 다수 거래에 사용된 정황은 반복 패턴 입증 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·소비자원·시·군·구청 이륜자동차 등록 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (잠적 인지 당일)</strong> — 게시글·카톡·이체·본체 사진·차대번호 촬영.</li>\n<li><strong>2단계 — 시·군·구청 차량등록사업소에 명의이전 가능 여부 확인 (1주 내)</strong> — 소유자 정보 조회.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 개인간 직거래도 접수 가능.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다른 피해자와 집단 고소 권장.</li>\n<li><strong>5단계 — 민사 부당이득 반환·손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 오토바이 묶음 거래 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·차량·매도인 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>중고거래 게시글 캡처 ("장비 풀세트 포함" "정비 완료" "명의이전 OK" 문구)</strong></li>\n<li><strong>매도인과 협상·약속 대화 (카톡·문자·통화 녹취)</strong></li>\n<li><strong>계좌 이체 내역·예금주명</strong></li>\n<li><strong>본체 인도 시 사진·차대번호·번호판 (가능 시)</strong></li>\n<li><strong>매도인 식별 단서 (실명·연락처·중고거래 ID)</strong></li>\n<li><strong>같은 매도인·같은 차량 반복 거래 사례 (카페·SNS 게시글)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이륜자동차는 사용신고·이전등록 의무가 있는 영역. 인도된 본체의 차대번호·번호판으로 시·군·구청에서 소유자 조회 시 본인이 아닌 것이 확인되면 명의이전 의사 자체가 없었던 정황으로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"본체는 인도했다" 주장</strong> — 묶음 구성(헬멧·장비) 누락과 명의이전 회피가 합쳐 평가됨.</li>\n<li><strong>중고거래 플랫폼 보호 범위</strong> — 에스크로·페이 사용 여부에 따른 환수율 차이.</li>\n<li><strong>이륜자동차 명의이전 의무</strong> — 자동차관리법 위반 별도 트랙.</li>\n<li><strong>같은 차량 다중 매도</strong> — 반복 패턴 + 사문서 위조 가능성 검토.</li>\n<li><strong>현금 이체 환수</strong> — 카드보다 환수율 낮은 영역, 즉시 지급정지 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>시·군·구청 차량등록사업소 (이륜자동차 명의·소유자 확인)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위에 의한 기망과 고지의무',
        summary:
          '대법원 2018도13696(대법원, 2020.06.25 선고) 영역에서 법원은 사기죄의 부작위에 의한 기망에 관해 법률상 고지의무의 근거가 되는 거래의 내용이나 거래관행 등 거래실정에 관한 사정이 인정되는 경우 거래 상대방이 그 사정을 알았더라면 거래를 하지 않았을 관계가 있는 한 사전 고지의무가 있고 이를 위반하면 기망으로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"묶음 구성·정비·명의이전 가능 표시 후 본체만 인도 + 잠적"은 묶음 표시 기망 + 부작위 기망이 결합되는 영역. 같은 차량 다중 매도 정황이 결정적 자료.',
      },
    ],
    faq: [
      {
        question: '매도인이 "본체는 인도했으니 사기 아니다"라고 합니다',
        answer:
          '<strong>묶음 구성·정비 완료 표시·명의이전 약속이 거래 결정에 영향을 미친 영역이라면 본체 인도만으로 면책되지 않는 영역입니다.</strong> 게시글·대화 내용이 핵심 자료.',
      },
      {
        question: '이륜자동차 명의이전을 못 받으면 어떻게 되나요?',
        answer:
          '<strong>차량 사용·등록상 책임이 본인에게 귀속되지 않는 영역입니다.</strong> 사고·과태료가 원 명의자에게 발생하므로 신속히 시·군·구청 차량등록사업소에 상담.',
      },
      {
        question: '중고거래 사이트 페이·에스크로를 쓰지 않았는데 보호받을 수 있나요?',
        answer:
          '<strong>플랫폼 보호 범위는 좁아지지만 사기 고소·민사 청구는 동일하게 가능한 영역입니다.</strong> 사이버 신고에서 IP·계정·계좌 추적으로 신원 확인 가능.',
      },
      {
        question: '같은 차량 번호판이 여러 사람에게 매도된 정황을 어떻게 입증하나요?',
        answer:
          '<strong>오토바이 카페·SNS 게시글 + 다른 피해자 진술 + 경찰 수사 협조로 입증 가능한 영역입니다.</strong> 반복 패턴은 거래 시점 기망 의사 입증의 결정적 자료.',
      },
      {
        question: '본체 차대번호·번호판을 안 찍어두면 추적이 어렵나요?',
        answer:
          '<strong>인도 시점에 촬영해두는 것이 가장 안전한 영역입니다.</strong> 못 찍었다면 인도 장소 CCTV·매도인 SNS 게시물·증인 진술로 보조 입증 가능.',
      },
      {
        question: '장비(헬멧·자켓) 일부만 누락한 경우도 사기인가요?',
        answer:
          '<strong>묶음 구성 표시가 거래 결정의 중요 사정으로 평가되는 영역이라면 일부 누락도 기망 + 부분 편취로 검토 가능한 영역입니다.</strong> 광고 게시글이 핵심 자료.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '중고거래 잠적', href: '/guide/fraud/fraud-secondhand-shipped-vanish-track' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },

  // ─── 2. fraud-overseas-buying-agent-double-billing-disappear-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-buying-agent-double-billing-disappear-track',
    keyword: '해외구매대행 이중청구 잠적',
    questionKeyword: '해외구매대행 사이트에서 명품 시계 280만원 1회 결제했는데 카드 명세서에 같은 금액이 두 번 청구, 사이트는 "추가 관세·운송비"라며 재청구 후 잠적.',
    ctaKeyword: '구매대행 이중청구 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외구매대행 이중청구·잠적 — 5단계 환수 트랙 | 로앤가이드',
      description:
        '해외구매대행 사이트에 1회 결제했는데 카드사·페이팔에 이중 청구되거나 추가 관세·운송비 명목 재청구 후 잠적했다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"해외구매대행 사이트에서 명품 시계를 280만원에 1회 결제. 며칠 뒤 카드 명세서를 보니 같은 금액이 두 번 청구되어 있고, 사이트에 문의하니 \'한 번은 결제 실패 후 재시도, 한 번은 정상 결제\'라며 환불을 거부. 며칠 후 사이트가 추가로 \'관세·국제운송비 110만원이 누락됐다\'며 재청구하기에 입금하니 그때부터 응대 차단, 상품 미배송, 사이트 폐쇄. 알고 보니 같은 사이트에서 \'결제 실패 → 재시도 + 관세·운송비 추가 청구 + 잠적\' 패턴으로 다수 피해자가 카드사·소비자원·해외직구 카페에 보고된 상태였어요." 해외구매대행 이중청구·재청구·잠적은 ① 사기죄(형법 347조) — 이중과금·허위 부대비용 ② 카드사 부정이용·이중청구 항변 ③ 한국소비자원 1372 분쟁조정 ④ 사이버 사기 고소(ecrm) ⑤ 통신판매중개업법·전자상거래법 위반 신고 트랙이 검토 가능한 영역. 결제 실패 표시 이용한 이중 청구 + 부대비용 허위 청구 + 사이트 폐쇄가 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 카드 명세서·결제 화면 ② 사이트 응대 자료 ③ 카드 항변·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구매대행 이중청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 카드사·소비자원·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·카드 명세서·사이트 응대 자료 보존</strong> — 결제 화면·이메일·카드 명세 캡처.</li>\n<li><strong>② 카드사 부정이용·이중청구 항변 (60일 내 권장)</strong> — 가맹점 분쟁 절차.</li>\n<li><strong>③ 한국소비자원 1372 + 공정위 전자상거래·통신판매중개업법 신고</strong></li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 사이트 폐쇄·운영자 추적.</li>\n<li><strong>⑤ 민사 부당이득·손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "결제 실패 표시" 후 같은 거래에 이중 청구 + 사후 "관세·운송비" 명목 추가 청구 후 잠적 패턴은 이중과금 + 허위 부대비용 청구가 결합된 영역으로 평가될 수 있습니다. 카드 명세서가 핵심 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 카드사·소비자원·관세청·공정위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (이중청구 인지 당일)</strong> — 카드 명세·결제 화면·이메일.</li>\n<li><strong>2단계 — 카드사 부정이용·이중청구 분쟁 신청 (60일 내)</strong> — 가맹점 분쟁 절차.</li>\n<li><strong>3단계 — 한국소비자원 1372 + 공정위 전자상거래·통신판매중개업법 신고 (30~60일)</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 사이트 운영자·계좌 추적.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효) + 관세청 신고</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">구매대행 이중청구·잠적 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·사이트·관세 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>주문·결제 화면 캡처 (1회 결제 표시·금액·날짜)</strong></li>\n<li><strong>카드 명세서·이중청구 부분 표시 (가맹점명·승인번호)</strong></li>\n<li><strong>사이트 환불 거절·관세 재청구 응대 (이메일·채팅 전문)</strong></li>\n<li><strong>관세·운송비 추가 청구 시 송장·증빙 (없으면 그 사실 자체)</strong></li>\n<li><strong>사이트 통신판매업 신고번호·사업자 정보 (사이트 하단·페이지 캡처)</strong></li>\n<li><strong>같은 사이트 피해자 SNS·카페 게시글</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정상 구매대행이라면 관세·운송비를 사전에 통합 견적으로 제시하는 것이 표준 영역. 사후 임의 추가 청구는 표시광고법·전자상거래법 위반 검토 자료로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"결제 실패 후 재시도" 주장</strong> — 카드사 가맹점 분쟁 절차에서 진위 확인.</li>\n<li><strong>관세·운송비 사후 청구</strong> — 사전 견적 미제시 시 표시광고법 검토.</li>\n<li><strong>사이트 폐쇄·운영자 잠적</strong> — 통신판매업 신고번호로 운영자 추적.</li>\n<li><strong>해외 결제·환불 거부</strong> — 카드사 분쟁(차지백) 60일 내 행사가 핵심.</li>\n<li><strong>페이팔·외화 결제</strong> — 페이팔 분쟁센터 별도 트랙 병행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372 (해외직구 분쟁상담실)</strong></li>\n<li><strong>공정거래위원회 통신판매중개·전자상거래 신고</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>관세청 (해외직구 신고·통관 확인)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 관세법위반·사기 결합 영역',
        summary:
          '대법원 2007도3394(대법원, 2007.07.13 선고) 영역에서 법원은 관세법 위반과 사기가 결합된 거래에서 관세·부대비용 표시·관련 서류의 진정성이 거래 상대방의 의사결정에 영향을 미치는 사정이라면 이를 위조·허위 표시한 행위가 사기 평가 대상이 될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"구매대행 이중청구 + 관세·운송비 허위 추가 청구"는 부대비용·관세 표시 기망이 결합되는 영역. 카드 명세서·결제 화면·사이트 응대 자료가 핵심.',
      },
    ],
    faq: [
      {
        question: '사이트가 "결제 실패 후 재시도"라며 환불을 거부합니다',
        answer:
          '<strong>카드사 가맹점 분쟁 절차에서 결제 실패 로그·승인 기록을 확인할 수 있는 영역입니다.</strong> 60일 내 카드사 분쟁 신청이 가장 효율적.',
      },
      {
        question: '관세·운송비 추가 청구는 정상 절차 아닌가요?',
        answer:
          '<strong>정상 구매대행은 사전 통합 견적이 표준 영역입니다.</strong> 사후 임의 추가 청구·송장 증빙 없는 청구는 표시광고법·전자상거래법 위반 검토 자료.',
      },
      {
        question: '해외 결제도 카드 항변권을 행사할 수 있나요?',
        answer:
          '<strong>해외 결제는 차지백(chargeback) 절차로 분쟁 신청이 가능한 영역입니다.</strong> 60일 내, 결제 화면·환불 거절 자료 첨부.',
      },
      {
        question: '사이트가 폐쇄됐는데 운영자를 어떻게 추적하나요?',
        answer:
          '<strong>통신판매업 신고번호·사업자등록번호·결제대행사(PG)·도메인 등록정보로 추적 가능한 영역입니다.</strong> 사이버 고소 시 영장 발부 검토.',
      },
      {
        question: '같은 사이트에서 다수 피해자가 있다면?',
        answer:
          '<strong>해외직구 카페·SNS에서 피해자 명단을 모아 집단 분쟁조정·집단 고소로 진행할 수 있는 영역입니다.</strong> 수사 우선순위 상승 효과.',
      },
      {
        question: '페이팔로 결제한 경우 어디에 신고하나요?',
        answer:
          '<strong>페이팔 분쟁센터에 분쟁 신청과 카드사 항변을 병행하는 것이 효율적인 영역입니다.</strong> 페이팔 결제도 결국 카드·계좌로 정산되므로 두 트랙 모두 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '해외 카드 차지백', href: '/guide/fraud/fraud-overseas-shop-card-chargeback' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 3. fraud-private-tutor-pre-payment-lessons-no-show-track ───
  {
    domain: 'fraud',
    slug: 'fraud-private-tutor-pre-payment-lessons-no-show-track',
    keyword: '개인 과외 선결제 수업 미실시',
    questionKeyword: '맘카페에서 개인 피아노 과외 20회분 120만원 선결제했는데 첫 2회 진행 후 강사가 일정 변경 반복 → 연락 두절, 환불 거부.',
    ctaKeyword: '개인 과외 선결제 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인 과외·레슨 선결제 후 수업 미실시 — 5단계 환수 | 로앤가이드',
      description:
        '맘카페·SNS에서 개인 피아노·미술·코딩 과외를 선결제했는데 강사가 수업 미실시·잠적·환불 거부라면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"맘카페에서 \'전공자 출신, 입시 경력 있는 피아노 과외\' 게시글을 보고 \'1회 6만원, 20회 패키지 결제 시 회당 5만원으로 할인\' 안내를 받아 120만원을 선결제. 첫 2회는 정상 진행, 3회차부터 \'개인 사정\'으로 일정이 미뤄지더니 한 달째 연락 두절. 환불을 요구해도 \'학원 아니라 환불 규정 없다\'며 거부. 알고 보니 같은 강사가 다른 맘카페·중고거래 사이트에서 같은 패턴으로 다수 학부모에게 선결제를 받은 후 잠적한 정황이 SNS에 보고됐어요." 개인 과외·레슨 선결제 + 미실시는 ① 사기죄(형법 347조) — 수업 진행 의사 은닉 + 패키지 결제 유도 ② 부작위 기망(고지의무 위반) ③ 한국소비자원 1372(개인간 거래도 접수) ④ 사이버 사기 고소(ecrm) ⑤ 민사 부당이득·잔여 회차 비례 환급 트랙이 검토 가능한 영역. "학원 아님" 주장 + 패키지 할인 유도 + 반복 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 광고·결제·일정 자료 ② 진행 회차·미실시 사실 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 개인 과외 선결제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·진행회차·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 광고·결제·일정 자료 보존</strong> — 맘카페 게시글·카톡·계좌 이체·일정표.</li>\n<li><strong>② 진행 회차·미실시 회차 정리</strong> — 잔여 회차 비례 환급 산정.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (개인간 거래도 접수)</strong></li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 같은 강사 반복 패턴 집단 고소.</li>\n<li><strong>⑤ 민사 부당이득 반환 (10년 시효) + 잔여 회차 환급</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 패키지 할인 결제를 유도한 뒤 수업을 진행할 의사가 없었음을 인지하면서도 잔여 회차 환불 의무를 회피하기 위해 "학원 아님"을 내세웠다면 부작위 기망 + 잔여 회차 편취가 결합된 영역으로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (잠적 인지 당일)</strong> — 게시글·카톡·이체·일정 변경 이력.</li>\n<li><strong>2단계 — 진행 회차·미실시 회차 산정 (회차당 단가·잔여 회차)</strong></li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 개인간 거래도 접수 가능.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다른 피해자 진술 첨부 집단 고소.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효) + 잔여 회차 환급</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">개인 과외 선결제 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·결제·진행 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>맘카페·SNS·중고거래 광고 게시글 캡처 ("패키지 할인" "전공자" 문구)</strong></li>\n<li><strong>강사와 협상·일정 대화 (카톡·문자·통화 녹취)</strong></li>\n<li><strong>계좌 이체·결제 영수증</strong></li>\n<li><strong>진행 회차 일정표·수업 사진·녹화 (가능 시)</strong></li>\n<li><strong>일정 변경·잠적 이력 (카톡 타임스탬프)</strong></li>\n<li><strong>같은 강사 반복 패턴·다른 피해자 진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 패키지 결제 자체는 합법 영역이지만, 결제 직후 수업 진행 의사 없이 잠적했거나 같은 강사가 다른 피해자에게 반복한 정황이라면 거래 시점 편취 의사 입증 자료로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"학원 아님, 환불 규정 없음" 주장</strong> — 개인 간 거래라도 잔여 회차 비례 환급은 부당이득 반환 영역.</li>\n<li><strong>진행 회차·미실시 회차 산정</strong> — 회차당 단가·일정표가 핵심 자료.</li>\n<li><strong>같은 강사 반복 패턴</strong> — 거래 시점 편취 의사 입증 자료.</li>\n<li><strong>현금 이체 결제</strong> — 카드 항변 트랙 부재, 민사 청구 우선.</li>\n<li><strong>강사 신원·실명 불명</strong> — 닉네임·계좌·연락처로 경찰 추적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372 (개인간 거래 분쟁상담)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>지역 평생교육진흥원 (개인교습자 신고 여부 확인)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기·학원·교습 결합 영역',
        summary:
          '대법원 2001도3003(대법원, 2003.06.27 선고) 영역에서 법원은 시설·인적 구성·교습 내용·수업료 수령 등을 종합해 그 운영 실태가 학원·교습 형태에 해당하는지 판단할 때 명칭이나 인가 여부만이 아니라 실질적인 운영 형태를 평가 대상으로 본 사례 흐름이 있습니다. 개인 과외라도 다수에게 정기적·계획적으로 수업료를 받았다면 그 평가에서 단순 \'개인 간 거래\'로 면책되지 않는 영역.',
        takeaway: '"학원 아님" 주장으로 환불 규정 자체를 부인하는 패턴은 실질 운영 형태에 따라 평가될 수 있는 영역. 패키지 결제 후 수업 미실시 + 반복 패턴이 결합되면 부당이득 반환 + 사기 검토 자료로 평가될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '강사가 "학원 아니라 환불 규정 없다"고 합니다',
        answer:
          '<strong>개인 간 거래라도 잔여 회차 비례 환급은 민사상 부당이득 반환 영역입니다.</strong> 진행 회차·미실시 회차를 산정해 청구 가능.',
      },
      {
        question: '진행 회차 산정은 어떻게 하나요?',
        answer:
          '<strong>총 결제액 ÷ 패키지 회차 = 회차당 단가, 회차당 단가 × 미실시 회차 = 환급 청구액으로 산정 가능한 영역입니다.</strong> 패키지 할인은 정상가 기준 또는 안분 비율 검토.',
      },
      {
        question: '같은 강사에게 다른 학부모도 피해를 입었습니다',
        answer:
          '<strong>반복 패턴은 거래 시점 편취 의사 입증의 결정적 자료 영역입니다.</strong> 다른 피해자와 SNS·맘카페에서 모아 집단 고소 권장.',
      },
      {
        question: '현금 이체로 결제했는데 환수 가능성이 있나요?',
        answer:
          '<strong>이체는 카드보다 환수율이 낮은 영역입니다.</strong> 다만 사기 고소·민사 부당이득 반환은 동일하게 가능, 강사 계좌·예금주명이 핵심 단서.',
      },
      {
        question: '강사 신원·실명을 모릅니다',
        answer:
          '<strong>닉네임·휴대전화·송금 계좌·SNS ID로 경찰 사이버 수사 협조로 추적 가능한 영역입니다.</strong> 계좌 명의가 본인이 아닐 수 있어 시간 소요.',
      },
      {
        question: '소비자원에 개인 간 거래도 분쟁 접수가 되나요?',
        answer:
          '<strong>한국소비자원 1372는 개인 간 거래 분쟁상담도 접수 가능한 영역입니다.</strong> 다만 분쟁조정 결정 효력은 강제력이 없어 민사 보전 병행 권장.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '학원 환불 거부', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },

  // ─── 4. fraud-pet-shop-pedigree-falsified-different-breed-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-shop-pedigree-falsified-different-breed-track',
    keyword: '펫샵 혈통서 위조 다른 견종',
    questionKeyword: '펫샵에서 "포메라니안 순종 혈통서 보장" 380만원 분양받았는데 동물병원 진단 결과 믹스견·발달 이상, 혈통서가 위조로 의심됨.',
    ctaKeyword: '펫샵 혈통서 위조 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '펫샵 혈통서 위조·다른 견종 인도 — 5단계 환수 트랙 | 로앤가이드',
      description:
        '펫샵·브리더가 혈통서를 위조했거나 다른 견종을 인도한 경우 동물보호법·소비자분쟁해결기준 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"펫샵에서 \'포메라니안 순종, 혈통서 보장, 부모견 챔피언\'으로 표시된 강아지를 380만원에 분양. 한 달 뒤 동물병원 진단 결과 \'순종 포메가 아닌 믹스견에 가깝다, 발달 이상도 동반\'이라는 소견. 인도받은 혈통서의 발급기관에 진위 확인을 의뢰했더니 \'해당 견공식 등록 이력 없음\'이라는 답변. 펫샵에 항의하니 \'분양 후 한 달은 환불 불가, 혈통서는 협력 단체 발급이라 책임 없음\'이라며 거부. 알고 보니 같은 펫샵에서 같은 패턴(혈통서 위조 + 다른 견종 인도 + 환불 거부)으로 다수 보호자가 동물 카페·SNS에 보고된 상태였어요." 펫샵 혈통서 위조·다른 견종 인도는 ① 사기죄(형법 347조) — 견종·혈통 기망 ② 사문서위조·행사(혈통서) ③ 동물보호법(생산·판매업 등록·관리 의무) ④ 소비자분쟁해결기준(반려동물 분쟁) ⑤ 민사 부당이득·치료비 손해배상 트랙이 검토 가능한 영역. 혈통서 진위 불일치 + 견종 판정 + 반복 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 분양·결제·혈통서 ② 동물병원·DNA 견종 진단 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 펫샵 혈통서 위조 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·진단·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 분양·결제·혈통서 자료 보존</strong> — 분양계약서·혈통서·결제 영수증·광고 캡처.</li>\n<li><strong>② 동물병원·DNA 견종 진단</strong> — 견종 판정·발달 이상 진단서.</li>\n<li><strong>③ 동물보호법 + 소비자분쟁해결기준 + 한국소비자원 1372 분쟁조정</strong></li>\n<li><strong>④ 경찰 사이버 사기·사문서위조 고소 (ecrm)</strong></li>\n<li><strong>⑤ 민사 부당이득·치료비 손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혈통서 발급기관에 등록 이력이 없거나 발급기관 자체가 존재하지 않는다면 사문서위조 + 견종 기망이 결합된 영역으로 평가될 수 있습니다. DNA 견종 진단·발달 이상 진단서가 가장 강력한 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·동물보호법·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (인지 당일)</strong> — 분양계약서·혈통서·광고·결제 영수증·인도 사진.</li>\n<li><strong>2단계 — 동물병원 진단서 + DNA 견종 검사 (1~3주)</strong> — 견종 판정·발달 이상 명시.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 + 시·군·구 동물보호 부서 신고 (30~60일)</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기·사문서위조 고소 (ecrm.cyber.go.kr)</strong> — 다수 피해자 집단.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 치료비·동물병원비 손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">펫샵 혈통서 위조 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 분양·진단·혈통서 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>분양계약서·광고 캡처 ("순종" "혈통서 보장" "챔피언 자견" 문구)</strong></li>\n<li><strong>결제 영수증·카드·이체 내역</strong></li>\n<li><strong>혈통서 원본 + 발급기관 진위 확인 회신</strong></li>\n<li><strong>동물병원 진단서 (견종 판정·건강 상태·발달 이상)</strong></li>\n<li><strong>DNA 견종 검사 보고서 (전문기관 발급)</strong></li>\n<li><strong>같은 펫샵 피해자 SNS·카페 게시글·진술</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한국애견협회(KKC) 등 공인 혈통서 발급기관은 견공식 등록번호 조회가 가능한 영역. 발급기관에 회신·등록 이력 부존재 답변을 서면으로 받아두면 사문서위조 입증 자료로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"분양 후 1개월 환불 불가" 약관</strong> — 동물 거래 약관규제법·소비자분쟁해결기준 검토.</li>\n<li><strong>"혈통서는 협력 단체 발급, 책임 없음" 주장</strong> — 펫샵의 표시·고지 의무 영역.</li>\n<li><strong>견종 판정 분쟁</strong> — DNA 검사·수의사 진단서가 핵심.</li>\n<li><strong>치료비 청구 범위</strong> — 발달 이상·유전 질환 치료비 + 위자료 검토.</li>\n<li><strong>동물보호법 위반 행정처분</strong> — 시·군·구 동물보호 부서 별도 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372 (반려동물 분쟁상담)</strong></li>\n<li><strong>시·군·구 동물보호 부서 (생산·판매업 신고 조회)</strong></li>\n<li><strong>농림축산식품부 동물보호관리시스템</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 기망과 거래 결정 사정',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 기망이란 거래관계에서 신의·성실의 의무를 저버리는 적극·소극 행위 일체를 의미하고 거래 상대방이 일정한 사정에 관한 고지를 받았더라면 거래를 하지 않았을 관계가 인정되면 사전 고지의무가 있다고 본 사례 흐름이 있습니다. 견종·혈통은 분양 거래 결정의 핵심 사정으로 평가되는 영역.',
        takeaway: '"순종·혈통서 보장" 표시 후 다른 견종 인도 + 혈통서 위조 결합은 견종 표시 기망 + 사문서위조가 함께 평가될 수 있는 영역. DNA 검사·발급기관 회신이 핵심 자료.',
      },
    ],
    faq: [
      {
        question: '펫샵이 "분양 후 1개월 환불 불가" 약관을 내세웁니다',
        answer:
          '<strong>동물 거래의 약관도 약관규제법·소비자분쟁해결기준에 의해 무효 검토 대상인 영역입니다.</strong> 견종 위반·혈통서 위조 결합 시 약관 무효 가능성.',
      },
      {
        question: 'DNA 견종 검사는 어디서 받나요?',
        answer:
          '<strong>동물병원·전문 유전자 분석업체에서 DNA 견종 검사가 가능한 영역입니다.</strong> 검사 비용 5만~15만원대, 발급 보고서가 핵심 입증 자료.',
      },
      {
        question: '혈통서 발급기관에 등록 이력이 없으면 어떻게 되나요?',
        answer:
          '<strong>사문서위조 + 행사 고소 자료로 평가될 수 있는 영역입니다.</strong> 발급기관 회신 서면을 받아두는 것이 결정적.',
      },
      {
        question: '치료비·동물병원비도 청구할 수 있나요?',
        answer:
          '<strong>유전·발달 이상으로 인한 치료비는 손해배상 청구 범위에 포함되는 영역입니다.</strong> 위자료도 별도 검토 가능.',
      },
      {
        question: '같은 펫샵 다른 피해자도 있다면?',
        answer:
          '<strong>동물 카페·SNS에서 피해자 명단을 모아 집단 분쟁조정·집단 고소로 진행할 수 있는 영역입니다.</strong> 행정처분·영업정지 가능성도 증가.',
      },
      {
        question: '동물보호법 위반 신고는 어디에 하나요?',
        answer:
          '<strong>시·군·구 동물보호 부서·농림축산식품부 동물보호관리시스템에 신고하면 생산·판매업 등록 위반 행정 조사가 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },

  // ─── 5. fraud-wedding-vendor-photographer-dress-deposit-loss-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-vendor-photographer-dress-deposit-loss-track',
    keyword: '웨딩 벤더 선예약금 잠적',
    questionKeyword: '결혼식 2개월 전 스튜디오·드레스·메이크업 패키지 480만원 + 예식장 계약금 300만원 입금했는데 업체가 잠적·예식장 이중 예약.',
    ctaKeyword: '웨딩 벤더 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '웨딩 벤더(촬영·드레스·예식장) 잠적 — 5단계 환수 트랙 | 로앤가이드',
      description:
        '결혼식 임박 시점에 스튜디오·드레스·메이크업·예식장 선예약금을 입금한 후 업체가 잠적·이중예약이라면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼식 2개월 전 웨딩 플래너 소개로 스튜디오·드레스·메이크업 패키지 480만원과 예식장 계약금 300만원을 입금. 한 달 뒤 스튜디오·드레스 업체 전화 두절, 예식장은 \'같은 날짜에 다른 신랑신부가 먼저 예약돼 있어 일정이 안 된다\'고 통보. 플래너에게 항의하니 \'본인은 중개만 했을 뿐 책임 없다\'며 응대 차단. 알고 보니 같은 플래너·같은 업체에서 \'결혼식 임박 + 패키지 묶음 + 예식장 이중예약 + 잠적\' 패턴으로 다수 신랑신부가 결혼 커뮤니티에 보고된 상태였어요." 웨딩 벤더 선예약금 잠적은 ① 사기죄(형법 347조) — 이행 의사 은닉 + 이중예약 ② 부작위 기망(고지의무 위반) ③ 소비자분쟁해결기준(결혼중개·예식·웨딩서비스 분야) ④ 한국소비자원 1372 + 공정위 신고 ⑤ 사이버 사기 고소 + 민사 부당이득·정신적 손해배상 트랙이 검토 가능한 영역. 임박 시점 + 패키지 묶음 + 이중예약 + 플래너 책임 회피가 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 계약·결제·일정 자료 ② 이중예약·잠적 사실 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 웨딩 벤더 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·소비자분쟁기준·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제·일정 자료 보존</strong> — 패키지 계약서·예식장 계약서·이체·플래너 대화.</li>\n<li><strong>② 이중예약·잠적 사실 서면 확인</strong> — 예식장 회신·다른 신랑신부 일정 확인.</li>\n<li><strong>③ 소비자분쟁해결기준(결혼중개·예식) + 한국소비자원 1372 + 공정위 신고</strong></li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm)</strong> — 다수 피해자 집단 고소.</li>\n<li><strong>⑤ 민사 부당이득 + 정신적 손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 결혼식 임박 시점에 패키지 묶음·예식장 계약금을 받은 뒤 이행 의사가 없는 상태에서 이중예약·잠적이 이뤄졌다면 부작위 기망 + 이중예약 + 선급금 편취가 결합된 영역으로 평가될 수 있습니다. 플래너의 중개 책임 회피도 별도 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·공정위·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (잠적·이중예약 인지 당일)</strong> — 계약서·이체·카톡·일정.</li>\n<li><strong>2단계 — 예식장·각 벤더 서면 회신 확보 (1주 내)</strong> — 이중예약·잠적 사실.</li>\n<li><strong>3단계 — 한국소비자원 1372 + 공정위 결혼중개·예식 분야 신고 (30~60일)</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 같은 플래너 다수 피해자 집단.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 정신적 손해배상 + 대체 비용 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">웨딩 벤더 선예약금 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·결제·일정 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>패키지 계약서·예식장 계약서·약관·취소 규정 사본</strong></li>\n<li><strong>결제 영수증·이체 내역·카드 매출전표</strong></li>\n<li><strong>플래너·업체 협상 대화 (카톡·문자·통화 녹취)</strong></li>\n<li><strong>예식장 이중예약 통보·서면 회신</strong></li>\n<li><strong>대체 업체·대체 일정 견적·실제 지출 영수증</strong></li>\n<li><strong>같은 플래너 피해자 결혼 커뮤니티 게시글·진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소비자분쟁해결기준에는 결혼중개·예식 분야 환급 규정이 있는 영역(이행 거절·이행 불능 시 대금 반환 + 위약금). 약관에 환불 금지 조항이 있어도 사업자의 일방 책임 사유라면 무효 검토 대상.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>예식장 이중예약</strong> — 사업자 귀책 사유 시 계약금 반환 + 위약금 영역.</li>\n<li><strong>플래너 "중개만 함" 주장</strong> — 사실상 계약 주체·수수료 수령 여부에 따라 책임 검토.</li>\n<li><strong>패키지 묶음 계약</strong> — 일부 이행·일부 미이행 시 안분 환급.</li>\n<li><strong>대체 비용·정신적 손해</strong> — 결혼식 차질로 인한 추가 비용·위자료 검토.</li>\n<li><strong>카드 결제 항변</strong> — 20만원 이상·3개월 이상 할부 90일 내 카드 항변.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372 (결혼중개·예식 분쟁상담)</strong></li>\n<li><strong>공정거래위원회 (결혼중개업법·전자상거래법 신고)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 편취 고의·일부 대가 지급의 평가',
        summary:
          '대법원 2022도768(대법원, 2022.04.14 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취 고의를 판단할 때 거래 시점의 이행 의사·능력과 거래 후 사정 변화를 종합 평가하고 재물편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우라도 편취액은 교부받은 재물 전부로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"결혼식 임박 시점 + 패키지 선급금 + 이중예약 + 잠적" 패턴은 거래 시점 이행 의사 부존재 + 부작위 기망이 결합되는 영역. 임박 시점·반복 패턴 입증이 결정적.',
      },
    ],
    faq: [
      {
        question: '예식장이 "다른 신랑신부가 먼저 예약돼 있다"며 일정을 못 잡아줍니다',
        answer:
          '<strong>사업자 귀책 사유에 의한 이행 불능 영역입니다.</strong> 계약금 반환 + 위약금(통상 계약금의 배액 또는 약관 기준) 청구 검토.',
      },
      {
        question: '플래너가 "중개만 했다"며 책임을 회피합니다',
        answer:
          '<strong>사실상 계약 주체로 활동하고 수수료를 수령했다면 부진정연대책임 검토 영역입니다.</strong> 결혼중개업법상 등록 여부도 신고 자료.',
      },
      {
        question: '대체 업체를 급히 구하느라 추가 비용이 발생했습니다',
        answer:
          '<strong>사업자 귀책에 의한 대체 비용은 손해배상 청구 범위에 포함될 수 있는 영역입니다.</strong> 견적·영수증 모두 보존.',
      },
      {
        question: '결혼식이 차질을 빚었는데 위자료도 청구되나요?',
        answer:
          '<strong>정신적 손해(위자료)는 사례에 따라 인정될 수 있는 영역입니다.</strong> 결혼식이라는 사정 자체가 위자료 가산 사정으로 평가된 사례 흐름이 있습니다.',
      },
      {
        question: '카드 할부로 결제했다면 환수 가능성이 있나요?',
        answer:
          '<strong>20만원 이상·3개월 이상 할부 결제는 90일 내 카드 항변권을 행사할 수 있는 영역입니다.</strong> 이중예약·이행 거절 자료 첨부.',
      },
      {
        question: '같은 플래너에게 다른 신랑신부도 피해를 입었습니다',
        answer:
          '<strong>결혼 커뮤니티·SNS에서 피해자 명단을 모아 집단 고소·집단 분쟁조정이 효율적인 영역입니다.</strong> 수사 우선순위 상승.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },
];
