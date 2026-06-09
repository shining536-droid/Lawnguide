import { SpokePage } from '../spoke-pages';

// batch92 fraud(5) + sex-crime(5) — 10개 (2026-06-09)
//
// 고유 존재 이유:
// 1. fraud-overseas-direct-purchase-noshow-track — 일반 미배송류와 분기. '해외직구 구매대행을 받고 결제했는데 물건도 환불도 없이 잠적' 편취 범의·다수 피해 절차형 트랙(victim).
// 2. fraud-livestream-jewelry-fake-gemstone-track — 일반 라이브커머스 가품류와 분기. '라이브방송에서 천연보석이라며 판 제품이 합성·모조석' 기망·감정 절차형 트랙(victim).
// 3. fraud-rental-deposit-fake-agent-track — 일반 전월세 사기류와 분기. '가짜 중개·권한 없는 자가 월세보증금을 받고 잠적' 편취액·환급 절차형 트랙(victim).
// 4. fraud-pet-funeral-prepay-vanish-track — 일반 선결제 폐업류와 분기. '반려동물 장례·메모리얼을 선결제했는데 잠적·미이행' 편취 범의·공소시효 판단형 트랙(victim).
// 5. fraud-business-loan-civil-dispute-falsely-accused-defense — 일반 사기 무고류와 분기. '사업자금 대여·정산 다툼을 사기로 고소당함' 편취 범의·민사 채무불이행 구별 방어 판단형 트랙(accused).
// 6. sex-crime-photo-studio-posing-touch-track — 일반 추행류와 분기. '사진스튜디오 촬영 중 포즈 교정을 빙자한 신체 접촉' 추행 해당성·기습추행 판단형 트랙(victim).
// 7. sex-crime-yoga-class-correction-touch-track — 일반 추행류와 분기. '요가·필라테스 강습 중 자세 교정을 빙자한 접촉' 추행 해당성·증거 절차형 트랙(victim).
// 8. sex-crime-public-pool-changing-illegal-filming-track — 일반 불법촬영류와 분기. '공중 수영장·목욕탕 탈의실 몰래카메라 촬영' 압수·증거보전 절차형 트랙(victim).
// 9. sex-crime-telecom-obscene-message-track — 일반 사이버 음란류와 분기. '문자·메신저로 반복 전송된 성적 음란 메시지' 통신매체이용음란 해당성 판단형 트랙(victim).
// 10. sex-crime-office-party-contact-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 자리 신체 접촉을 추행으로 고소당함' 무죄추정·진술 신빙성 다툼 방어 판단형 트랙(accused).

export const spokesBatch92FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-overseas-direct-purchase-noshow-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-direct-purchase-noshow-track',
    keyword: '해외직구 구매대행 미배송 사기',
    questionKeyword: '해외 명품·전자제품을 ‘정품 구매대행, 직구가로 싸게 받아준다’는 말에 대금을 미리 입금했는데, 배송은 한없이 미뤄지다 물건도 환불도 없이 대행자가 연락을 끊고 잠적했어요. 처음부터 물건을 받아줄 의사 없이 대행료·물품대금만 끌어모은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '해외직구 구매대행 미배송 편취·환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외직구 구매대행 미배송 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '해외 구매대행에 대금을 입금했는데 물건도 환불도 없이 대행자가 잠적했다면, 형법 제347조 사기의 편취 범의 산정과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 명품·전자제품·한정 발매품을 ‘정품 구매대행, 현지 직구가로 싸게 받아준다’는 말을 믿고, 물품대금과 대행료를 합쳐 수십만원에서 수백만원을 미리 입금한 분의 상황입니다. 그런데 ‘통관이 늦어진다’, ‘현지 재고가 빠졌다’는 말만 반복되다 배송은 한없이 미뤄지고, 결국 물건도 환불도 없이 대행자가 메신저·계정을 닫고 잠적해, 처음부터 물건을 받아줄 의사·능력 없이 선입금만 끌어모은 건 아닌지 의심되고 막막하실 거예요. 여러 사람에게 같은 방식으로 돈을 받은 정황까지 보여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 구매·배송해줄 의사·능력 없이 직구가 미끼로 선입금만 유도한 정황은 기망행위로 평가될 여지가 있고, 대금 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 공소사실의 동일성을 해하지 않는 범위에서 공소장변경이 이루어지면 변경된 공소사실을 기준으로 심리·판단해야 한다고 보아 사기 사건에서 편취 대상·편취액 등 공소사실의 특정과 심판 범위를 신중히 다룬 사례 흐름이 있는 영역입니다. 선입금 + 미배송·미환불 + 연락 두절 결합은 ‘편취·환급’ 절차가 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 기망·편취 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외직구 구매대행 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 대행 광고·주문·대행료·물품대금 송금 내역 정리.</li>\n<li><strong>② 기망·편취 정황</strong> — 구매·배송 의사·능력 없이 직구가 미끼로 선입금만 받은 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환불이 있어도 교부한 입금액 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·동일 대행자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상의 배송 지연 다툼과 달리, 구매·배송해줄 의사·능력 없이 선입금을 받았는지가 사기 판단의 분기점입니다. 다수 피해의 편취액 합산은 공소사실 특정에 따라 죄책 범위가 달라지므로 송금 시점과 잠적 시점을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 대행 광고·주문·대화·대행료·물품대금 송금 보존.</li>\n<li><strong>2단계 — 미배송·잠적 정황 확인 (즉시)</strong> — 선입금 모집 시점과 미배송·연락 두절 시점 정리.</li>\n<li><strong>3단계 — 지급정지·이의 (병행)</strong> — 계좌 이체분 지급정지·카드 결제 이의제기 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 대행자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외직구 구매대행 미배송 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>구매대행 광고·정품 보장·직구가 안내 캡처 (유도 정황)</strong></li>\n<li><strong>주문·견적·대행 조건 대화 기록 (거래 내용)</strong></li>\n<li><strong>대행료·물품대금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>통관·재고·배송 지연 안내·미배송 대화</strong></li>\n<li><strong>연락 두절·계정 폐쇄·잠적 정황 자료</strong></li>\n<li><strong>동일 대행자 피해·모집 시점 자료</strong></li>\n<li><strong>대행자 닉네임·연락처·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직구가 미끼 선입금 모집 시점과 미배송·잠적 시점을 함께 정리하면 편취 정황이 선명해집니다. 같은 대행자·계좌 피해자를 모아 송금 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 구매·배송해줄 의사·능력 없이 선입금을 받았는지.</li>\n<li><strong>편취액</strong> — 일부 환불이 있어도 교부한 입금액 전부가 피해액인지.</li>\n<li><strong>다수 피해</strong> — 같은 방식 다수 피해 합산을 어떻게 특정·산정하는지.</li>\n<li><strong>단순 지연 항변</strong> — 통관·재고 지연 주장과 미이행 잠적의 구별.</li>\n<li><strong>대행자 특정</strong> — 닉네임·계좌·계정 기록으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·구매대행 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 공소사실의 특정과 심판 범위',
        summary:
          '대법원 2024도2200(대법원, 2025.03.13 선고) 영역에서 법원은 검사가 공소사실의 동일성을 해하지 않는 한도에서 공소장변경을 하여 공소사실이 변경되거나 심판대상이 달라진 경우에는 변경된 공소사실을 기준으로 새로이 심리·판단해야 하고, 단순한 오기 정정·내용 보충에 불과하면 반드시 제1심판결을 직권으로 파기할 필요는 없다고 판시했습니다. 구매대행 미배송으로 다수 피해의 편취 대상·편취액을 특정해 다투는 사안을 살펴볼 때에도 공소사실 특정·심판 범위 기준을 검토해볼 수 있습니다.',
        takeaway: '선입금 + 미배송·미환불 + 연락 두절 결합 시 편취·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '통관·재고 지연일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>구매·배송할 의사·능력 없이 선입금을 받았는지가 핵심인 영역입니다.</strong> 모집 시점·잠적 정황을 확보하세요.',
      },
      {
        question: '일부만 환불받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환불이 있어도 교부한 입금액 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '같은 대행자에게 당한 사람이 많은데 함께 대응하나요?',
        answer:
          '<strong>같은 대행자·계좌 피해는 묶어 공동 신고·자금 추적을 검토할 수 있는 영역입니다.</strong> 피해자별 송금 자료를 모으세요.',
      },
      {
        question: '카드로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>결제 이의·차지백으로 청구를 다퉈볼 수 있는 영역입니다.</strong> 미배송·잠적 정황을 정리해 이의신청하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '온라인 거래사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 2. fraud-livestream-jewelry-fake-gemstone-track ───
  {
    domain: 'fraud',
    slug: 'fraud-livestream-jewelry-fake-gemstone-track',
    keyword: '라이브커머스 보석 가품 사기',
    questionKeyword: '라이브 방송에서 ‘천연 다이아몬드·루비, 감정서 완비’라며 한정 특가로 판매하는 보석·주얼리를 믿고 샀는데, 받아보니 합성석·모조석이었고 감정서도 위조 의심이 들었어요. 판매자는 ‘천연이 맞다’며 환불을 거부하는데, 처음부터 가짜인 줄 알면서 천연이라 속여 판 이 거래를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '라이브커머스 보석 가품 편취·환급 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '라이브커머스 보석 가품 사기 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '천연보석이라던 라이브 방송 주얼리가 합성·모조석이고 판매자가 환불을 거부한다면, 형법 제347조 사기의 기망·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「라이브 커머스·홈쇼핑 방송에서 ‘천연 다이아몬드·루비·사파이어, 공인 감정서 완비, 오늘만 특가’라는 설명을 믿고 보석·주얼리를 산 분의 상황입니다. 그런데 받아보니 합성석·모조석으로 보이고 동봉된 감정서도 위조 의심이 들어, 판매자·방송사는 ‘천연이 맞다’며 환불을 거부하거나 연락을 미루고, 처음부터 가짜인 줄 알면서 천연이라 속여 판 건 아닌지 의심되고 막막하실 거예요. 특가 분위기에 휩쓸려 적지 않은 돈을 쓴 터라 돈도 물건도 애매해져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 합성·모조석을 천연으로 속여 대금을 받은 정황은 기망행위로 평가될 여지가 있고, 대금 결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 대화·방송 내용을 녹음한 파일은 원본이거나 인위적 개작 없이 복사된 사본임이 증명되어야 증거능력을 인정할 수 있고, 사본은 해시값 비교 등 원본과의 동일성 증명이 원칙이라고 보아 디지털 증거의 진정성·동일성을 엄격히 다룬 사례 흐름이 있는 영역입니다. 천연 보장 + 가품 인도 + 환불 거부 결합은 ‘기망·환급’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 라이브커머스 보석 가품 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 방송 화면·천연 보장·감정서·주문·결제 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 합성·모조석을 천연으로 속이거나 감정서를 위조해 거래를 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환불이 있어도 교부한 결제금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·동일 판매자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 품질 다툼과 달리, 가짜인 줄 알면서 또는 가짜일 수 있음을 용인하면서 천연이라 속였는지가 기망 판단의 분기점입니다. 방송 화면·천연 보장 멘트와 보석 감정 결과를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 방송 화면·천연 보장·감정서·주문·결제 내역 보존.</li>\n<li><strong>2단계 — 보석 감정 확보 (즉시)</strong> — 공인 보석감정기관에서 천연·합성 여부와 감정서 진위 확인.</li>\n<li><strong>3단계 — 지급정지·이의 (병행)</strong> — 카드 결제 이의·계좌 이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 판매자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">라이브커머스 보석 가품 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>방송 화면·천연 보장 멘트 캡처·녹화 (거래 조건)</strong></li>\n<li><strong>동봉 감정서·보증서 사진 (위조 정황)</strong></li>\n<li><strong>공인 감정기관 감정 결과 (가품 입증)</strong></li>\n<li><strong>수령품·각인·세팅 사진 (현품 상태)</strong></li>\n<li><strong>결제·카드 승인 내역 (피해 금액)</strong></li>\n<li><strong>환불 요청·거부·연락 대화 기록</strong></li>\n<li><strong>판매자·방송사·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 천연 보장 멘트와 위조 의심 감정서, 공인 감정 결과를 함께 모으면 기망·편취 정황이 선명해집니다. 방송 녹화 사본을 제출할 때는 인위적 개작 없는 원본 동일성을 함께 확보하면 증거 활용에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 가짜인 줄 알았거나 용인하며 천연이라 속였는지.</li>\n<li><strong>감정서 위조</strong> — 위조 감정서로 천연인 것처럼 믿게 했는지.</li>\n<li><strong>편취액</strong> — 일부 환불이 있어도 교부한 결제금 전부가 피해액인지.</li>\n<li><strong>증거 동일성</strong> — 방송 녹화 사본이 인위적 개작 없는 원본과 동일한지.</li>\n<li><strong>판매자 특정</strong> — 방송사·판매자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·홈쇼핑 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 방송·대화 녹음 사본의 증거능력과 동일성',
        summary:
          '대법원 2022도1864(대법원, 2025.02.27 선고) 영역에서 법원은 대화 내용을 녹음한 파일은 원본이거나 원본으로부터 인위적 개작 없이 복사된 사본임이 증명되어야 증거능력을 인정할 수 있고, 사인이 복사한 사본은 해시값 비교 등 원본과의 직접 비교로 동일성을 증명하는 것이 원칙이라고 판시했습니다. 라이브 방송의 천연 보장 멘트 녹화로 가품 기망을 다투는 사안을 살펴볼 때에도 사본의 원본 동일성 기준을 검토해볼 수 있습니다.',
        takeaway: '천연 보장 + 가품 인도 + 환불 거부 결합 시 기망·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 ‘천연인 줄 알았다’고 하면 사기가 안 되나요?',
        answer:
          '<strong>가짜일 수 있음을 용인하며 천연이라 속였다면 미필적 고의로 평가될 수 있는 영역입니다.</strong> 천연 보장 멘트·감정 결과를 확보하세요.',
      },
      {
        question: '가품이라는 걸 어떻게 증명하나요?',
        answer:
          '<strong>공인 보석감정기관 감정 결과로 합성·모조 여부를 입증하는 영역입니다.</strong> 수령품과 감정서를 함께 모으세요.',
      },
      {
        question: '방송 녹화를 증거로 쓸 수 있나요?',
        answer:
          '<strong>인위적 개작 없는 원본 동일성이 증명되어야 증거능력이 인정되는 영역입니다.</strong> 녹화 원본을 그대로 보존하세요.',
      },
      {
        question: '일부만 환불받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환불이 있어도 교부한 결제금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 결제 총액을 정리하세요.',
      },
      {
        question: '방송사·판매자를 어떻게 특정하나요?',
        answer:
          '<strong>방송 화면·판매자 정보·결제 기록으로 특정할 수 있는 영역입니다.</strong> 결제·판매자 기록부터 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '온라인 거래사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '편취액 산정 쟁점', href: '/guide/fraud/fraud-loss-amount-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 3. fraud-rental-deposit-fake-agent-track ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-deposit-fake-agent-track',
    keyword: '가짜 중개 월세보증금 사기',
    questionKeyword: '월세·반전세 방을 보러 갔다가 ‘집주인 위임받은 중개’라는 사람에게 계약하고 보증금·선월세를 입금했는데, 알고 보니 그 사람은 권한도 없고 실제 집주인은 임대를 내놓은 적도 없었어요. 가짜 중개·임대인이 보증금만 받고 잠적했는데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '가짜 중개 월세보증금 편취·환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가짜 중개 월세보증금 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '권한 없는 가짜 중개·임대인에게 월세보증금을 입금했는데 잠적당했다면, 형법 제347조 사기의 편취액 산정과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「월세·반전세 방을 구하러 다니다 ‘집주인에게 위임받은 중개인’ 또는 ‘대리 임대인’이라는 사람을 만나 방을 보고, 그 자리에서 계약서를 쓰고 보증금과 선월세를 입금한 분의 상황입니다. 그런데 입주하려 보니 같은 집에 이미 다른 세입자가 살고 있거나, 실제 집주인은 임대를 내놓은 적도 없고 그 사람에게 권한을 준 적도 없다고 해, 가짜 중개·임대인이 보증금만 받고 계약서·연락처를 닫고 잠적해, 처음부터 임대해줄 권한·의사 없이 보증금만 노린 건 아닌지 의심되고 막막하실 거예요. 당장 들어갈 집도 보증금도 사라져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 임대 권한·의사 없이 정당한 중개·임대인인 것처럼 속여 보증금을 받은 정황은 기망행위로 평가될 여지가 있고, 보증금 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 권한 없는 자가 받은 금전의 귀속·반환관계를 따질 때 그 금전의 소유·반환 주체를 법률관계에 따라 엄격히 판단해야 한다고 보아 잘못 교부된 금전의 귀속과 환급 가능성을 신중히 다룬 사례 흐름이 있는 영역입니다. 가짜 권한 + 보증금 교부 + 잠적 결합은 ‘편취·환급’ 절차가 가능한 트랙입니다. 피해자라면 ① 계약·송금 정리 ② 권한·기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가짜 중개 월세보증금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·권한·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·송금 정리</strong> — 임대차계약서·위임 주장·보증금·선월세 송금 내역 정리.</li>\n<li><strong>② 권한·기망 정황</strong> — 임대 권한·의사 없이 중개·임대인인 척 속였는지 정리.</li>\n<li><strong>③ 편취액</strong> — 보증금·선월세 등 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·동일 가해자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상의 임대차 다툼과 달리, 임대 권한·의사 없이 정당한 중개·임대인인 척 보증금을 받았는지가 사기 판단의 분기점입니다. 등기부·집주인 확인 없이 송금한 경위와 잠적 시점을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·송금 자료 보존 (즉시)</strong> — 계약서·위임 주장·보증금·선월세 송금·대화 보존.</li>\n<li><strong>2단계 — 권한·소유 확인 (즉시)</strong> — 등기부·실제 집주인·위임 여부를 확인해 권한 부재 정리.</li>\n<li><strong>3단계 — 지급정지·계좌 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버·일반 사기 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 가해자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가짜 중개 월세보증금 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·권한·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·특약·영수증 (계약 내용)</strong></li>\n<li><strong>위임장·신분증·중개 자격 주장 캡처 (권한 정황)</strong></li>\n<li><strong>보증금·선월세 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>등기부등본·실제 집주인 확인 자료 (권한 부재)</strong></li>\n<li><strong>방 안내·계약 당시 대화·녹취 기록</strong></li>\n<li><strong>잠적·연락 두절·동일 가해자 피해 자료</strong></li>\n<li><strong>가해자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기부상 실제 소유자와 계약 상대의 권한 부재를 대조하면 기망 정황이 선명해집니다. 같은 가해자·계좌의 다른 피해 사례를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대 권한·기망</strong> — 임대 권한·의사 없이 중개·임대인인 척 속였는지.</li>\n<li><strong>편취액</strong> — 보증금·선월세 등 교부한 금원 전부가 피해액인지.</li>\n<li><strong>금전 귀속·반환</strong> — 잘못 교부된 보증금의 귀속·반환 주체가 누구인지.</li>\n<li><strong>이중계약 항변</strong> — 단순 임대차 분쟁인지 권한 없는 기망인지.</li>\n<li><strong>가해자 특정</strong> — 신분증·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 권한 없는 수령 금전의 귀속과 반환관계',
        summary:
          '대법원 2023도16896(대법원, 2025.07.17 선고) 영역에서 법원은 채권양도 통지 등 대항요건을 갖추지 않은 채 채무자로부터 금전을 수령한 경우 특별한 사정이 없는 한 그 금전의 소유권 귀속·반환 주체는 법률관계에 따라 판단해야 한다고 보아, 권한·자격 없이 받은 금전의 귀속과 반환관계를 엄격히 다루었습니다. 권한 없는 가짜 중개·임대인이 보증금을 받은 사안에서 금전 귀속·환급 가능성을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '가짜 권한 + 보증금 교부 + 잠적 결합 시 편취·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계약서를 썼는데도 사기가 되나요?',
        answer:
          '<strong>계약서와 별개로 임대 권한·의사 없이 속였는지가 핵심인 영역입니다.</strong> 위임·권한 부재 정황을 확보하세요.',
      },
      {
        question: '권한이 없었다는 걸 어떻게 확인하나요?',
        answer:
          '<strong>등기부등본과 실제 집주인 확인으로 권한 부재를 입증하는 영역입니다.</strong> 소유자 정보부터 대조하세요.',
      },
      {
        question: '보증금과 선월세 모두 피해액인가요?',
        answer:
          '<strong>교부한 보증금·선월세 등 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '같은 사람에게 당한 피해자가 또 있어요.',
        answer:
          '<strong>같은 가해자·계좌 피해는 묶어 공동 신고·자금 추적을 검토할 수 있는 영역입니다.</strong> 피해자별 송금 자료를 모으세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '임대차 보증금 사기 대응', href: '/guide/fraud/fraud-rental-deposit-vanish-report' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 4. fraud-pet-funeral-prepay-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-funeral-prepay-vanish-track',
    keyword: '반려동물 장례 선결제 사기',
    questionKeyword: '반려동물이 무지개다리를 건너 장례·메모리얼(화장·유골함·납골)을 ‘미리 결제하면 할인’이라는 말에 선결제했는데, 막상 장례 당일 업체가 연락을 끊거나 약속한 서비스를 제공하지 않고 환불도 거부했어요. 처음부터 이행할 의사 없이 선결제만 받은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '반려동물 장례 선결제 편취 범의·환급 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '반려동물 장례 선결제 사기 — 5단계 편취 범의·환급 점검 | 로앤가이드',
      description:
        '반려동물 장례를 선결제했는데 업체가 잠적·미이행하고 환불을 거부한다면, 형법 제347조 사기의 편취 범의·공소시효와 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「오랜 시간 함께한 반려동물이 무지개다리를 건너, 황망한 마음에 장례·메모리얼 업체와 화장·유골함·납골·추모석 패키지를 ‘미리 결제하면 크게 할인된다’는 말에 선결제한 분의 상황입니다. 그런데 막상 장례 당일이나 이후 절차에서 업체가 연락을 끊거나, 약속한 화장·납골·유골함 제작을 제대로 하지 않고, 환불을 요구해도 ‘이미 진행됐다’며 거부해, 처음부터 이행할 의사·능력 없이 슬픔에 빠진 보호자에게 선결제만 받은 건 아닌지 의심되고 막막하실 거예요. 마지막 가는 길을 망친 것 같아 돈 문제를 넘어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 이행할 의사·능력 없이 할인을 미끼로 선결제만 유도한 정황은 기망행위로 평가될 여지가 있고, 선결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 공소시효 정지·공범 범위 등 절차 규정은 피고인에게 불리한 방향으로 지나치게 확장해석해서는 안 되고 엄격히 해석해야 한다고 보아, 다수 피해 사건에서 공소시효 기산·정지의 범위를 신중히 판단한 사례 흐름이 있는 영역입니다. 선결제 + 미이행·잠적 + 환불 거부 결합은 ‘편취 범의·환급’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 기망·편취 정황 ③ 편취액·시효 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반려동물 장례 선결제 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 장례·메모리얼 계약·약관·할인 안내·선결제 내역 정리.</li>\n<li><strong>② 기망·편취 정황</strong> — 이행 불가를 알면서 할인 미끼로 선결제만 받은 정황 정리.</li>\n<li><strong>③ 편취액·시효</strong> — 교부한 결제금 전부와 신고 가능 기간(공소시효) 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·지급정지·동일 업체 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상의 환불 다툼과 달리, 이행할 의사·능력 없이 할인 선결제를 받았는지가 사기 판단의 분기점입니다. 사기죄 공소시효는 통상 10년이므로 선결제 시점과 미이행·잠적 시점을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 장례·메모리얼 계약·약관·할인 안내·선결제·대화 보존.</li>\n<li><strong>2단계 — 미이행·잠적 정황 확인 (즉시)</strong> — 선결제 모집 시점과 미이행·연락 두절·환불 거부 시점 정리.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 결제 이의·계좌 이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사기 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 업체 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려동물 장례 선결제 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>장례·메모리얼 계약서·약관 (계약 내용)</strong></li>\n<li><strong>할인·선결제 안내·광고 캡처 (유도 정황)</strong></li>\n<li><strong>선결제·할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>장례 일정·미이행·환불 거부 대화 기록</strong></li>\n<li><strong>화장·납골·유골함 미제공 정황 자료</strong></li>\n<li><strong>동일 업체 피해·모집 시점 자료</strong></li>\n<li><strong>업체·사업자·결제 계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 할인 선결제 모집 시점과 미이행·잠적 시점을 함께 정리하면 편취 정황이 선명해집니다. 같은 업체 피해자를 모아 선결제 자료를 묶으면 편취액·시효 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 이행할 의사·능력 없이 선결제를 받았는지.</li>\n<li><strong>편취액</strong> — 일부 진행 주장이 있어도 교부한 결제금 전부가 피해액인지.</li>\n<li><strong>공소시효</strong> — 사기죄 공소시효(통상 10년) 내 신고·고소가 가능한지.</li>\n<li><strong>단순 미이행 항변</strong> — 경영난·일정 차질 주장과 기망의 구별.</li>\n<li><strong>업체 특정</strong> — 사업자·계좌·운영자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (장례·서비스 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공소시효 정지·절차 규정의 엄격해석',
        summary:
          '대법원 2024도15290(대법원, 2025.05.01 선고) 영역에서 법원은 형사소송법 제253조 제2항의 공범에 관한 공소시효 정지 규정은 공소제기 효력의 인적 범위를 확장하는 예외이므로 원칙적으로 엄격하게 해석하여야 하고 피고인에게 불리한 방향으로 지나치게 확장·유추해석해서는 안 된다고 판시했습니다. 반려동물 장례 선결제 사기에서 신고 가능 기간(공소시효)과 공범 범위를 살펴볼 때에도 이러한 엄격해석 기준을 검토해볼 수 있습니다.',
        takeaway: '선결제 + 미이행·잠적 + 환불 거부 결합 시 편취 범의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '경영난으로 못 한 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>이행할 의사·능력 없이 할인 선결제를 받았는지가 핵심인 영역입니다.</strong> 모집 시점·미이행 정황을 확보하세요.',
      },
      {
        question: '시간이 좀 지났는데 지금도 신고가 되나요?',
        answer:
          '<strong>사기죄 공소시효는 통상 10년이라 기간 내 신고를 검토할 수 있는 영역입니다.</strong> 선결제·미이행 시점을 정리하세요.',
      },
      {
        question: '일부 진행됐다는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 진행 주장이 있어도 교부한 결제금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 선결제 총액을 정리하세요.',
      },
      {
        question: '카드로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>결제 이의로 청구를 다퉈볼 수 있는 영역입니다.</strong> 미이행·거부 정황을 정리해 이의신청하세요.',
      },
      {
        question: '업체가 잠적했는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '선결제·폐업 거래사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '사기죄 공소시효', href: '/guide/fraud/fraud-statute-of-limitations-period' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 5. fraud-business-loan-civil-dispute-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-business-loan-civil-dispute-falsely-accused-defense',
    keyword: '사업자금 대여 분쟁 사기 무고',
    questionKeyword: '동업·거래 관계에서 사업자금을 빌리거나 받아 실제 사업에 썼는데, 사업이 어려워져 갚지 못하자 상대가 ‘처음부터 갚을 의사 없이 돈만 받았다’며 저를 사기로 고소했어요. 저는 편취할 의도도 없었고 자금을 사업에 실제로 사용했으며 정산이 어긋난 것뿐인데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '사업자금 대여 분쟁 사기 무고 범의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '사업자금 대여 분쟁 사기 무고 방어 — 5단계 범의 점검 | 로앤가이드',
      description:
        '사업자금을 빌렸다가 못 갚아 사기로 고소당했다면, 형법 제347조 사기의 편취 범의·민사 채무불이행 구별을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「동업·거래·투자 관계에서 사업 운영자금을 빌리거나 받아 실제로 사업에 투입했는데, 매출 부진·경기 악화로 사업이 어려워져 약속한 변제·정산을 하지 못하자, 손실을 본 상대가 ‘처음부터 갚을 의사 없이 돈만 받았다’며 저를 사기로 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 편취할 의도가 없었고 자금을 임차료·인건비·재료비 등 사업에 실제로 썼으며, 단지 사업 실패와 정산 다툼일 뿐인데, 변제 지체 사실만으로 사기로 몰려 당혹스럽고 억울하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 자금을 받을 당시 변제·이행할 의사와 능력이 있었는지, 즉 편취의 범의가 있었는지가 핵심 쟁점입니다. 판례는 공소장변경이 단순한 오기 정정이나 내용 보충에 그쳐 심판대상이 실질적으로 달라지지 않으면 반드시 원심을 파기할 필요가 없다고 보아, 사기 사건에서 공소사실의 특정과 범죄 성립 요건을 엄격히 따진 사례 흐름이 있는 영역입니다. 따라서 자금 사용처·사업 실체·정산 경위를 정리해 다툴 수 있는 영역입니다. 정상 자금 사용 + 사업 실체 자료 + 범의 다툼 결합은 ‘편취 범의’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 거래 경위 정리 ② 편취 범의 ③ 자금 사용처 ④ 정산·변제 노력 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사업자금 대여 분쟁 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래 경위·편취 범의·자금 사용처·정산 노력·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 경위 정리</strong> — 대여·투자·동업 약정·자금 수령 경위 정리.</li>\n<li><strong>② 편취 범의</strong> — 자금 수령 당시 변제·이행 의사·능력이 있었는지 객관 정황으로 검토.</li>\n<li><strong>③ 자금 사용처</strong> — 임차료·인건비·재료비 등 사업에 실제 사용한 자금 흐름 정리.</li>\n<li><strong>④ 정산·변제 노력</strong> — 일부 변제·정산 시도·소통 등 이행 노력 정리.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술·자료 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 변제하지 못한 결과만으로 곧바로 사기가 되는 것이 아니라, 자금을 받을 당시 변제·이행 의사 없이 받았는지가 분기점입니다. 범의와 자금 사용처는 객관적 사정으로 판단되므로 사업 사용 내역으로 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·자금 정리 (즉시)</strong> — 대여·투자 약정·자금 수령·사용 내역 정리.</li>\n<li><strong>2단계 — 자금 사용처 자료 확보 (1주)</strong> — 임차·인건비·재료비 등 사업 지출과 매출·운영 자료 확보.</li>\n<li><strong>3단계 — 범의·정산 쟁점 정리 (2주)</strong> — 편취 범의 부재와 사업 실패·정산 다툼 경위 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업자금 대여 분쟁 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래 경위·범의·자금 사용처 갈래입니다.</strong></p>\n<ul>\n<li><strong>대여·투자·동업 약정서·차용증 (거래 내용)</strong></li>\n<li><strong>자금 수령·사업 지출 내역 (자금 흐름)</strong></li>\n<li><strong>임차·인건비·재료비 등 사업 운영 자료 (이행·사용)</strong></li>\n<li><strong>매출·정산·재무 기록 (사업 실체)</strong></li>\n<li><strong>일부 변제·정산 시도·소통 기록</strong></li>\n<li><strong>고소장·상대 진술 모순·불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘자금 수령 당시 변제·이행 의사가 있었는지’입니다. 자금을 실제 사업에 쓴 지출 흐름과 매출·정산 기록으로 사용처를 정돈하고, 변제 지체가 사업 실패·정산 다툼 때문임을 구체적으로 짚으면 편취 범의 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 자금 수령 당시 변제·이행 의사·능력이 있었는지.</li>\n<li><strong>자금 사용처</strong> — 받은 돈을 실제 사업에 사용했는지.</li>\n<li><strong>채무불이행 구별</strong> — 민사 대여금·정산 다툼에 그치는지 기망인지.</li>\n<li><strong>사업 실패 vs 기망</strong> — 경기·매출 악화에 의한 실패인지 처음부터 기망인지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공소사실 특정과 범죄 성립 요건의 엄격 판단',
        summary:
          '대법원 2020도11949(대법원, 2024.12.12 선고) 영역에서 법원은 공소장변경이 피고인·변호인의 주장과 소송 진행경과에 비추어 단순한 오기 정정이나 내용 보충에 불과하여 심판대상이 실질적으로 달라지지 않으면 반드시 제1심판결을 직권으로 파기할 필요는 없다고 보아, 공소사실의 특정과 범죄 성립 요건을 엄격히 판단해야 한다고 판시했습니다. 사업자금 대여를 사기로 다투는 사안에서 편취 범의·공소사실 특정을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '정상 자금 사용 + 사업 실체 자료 + 범의 다툼 결합 시 편취 범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '못 갚았을 뿐인데 사기로 고소당했어요.',
        answer:
          '<strong>변제 지체만으로는 부족하고 자금 수령 당시 편취 범의가 있어야 하는 영역입니다.</strong> 자금 사용처·사업 자료를 정리하세요.',
      },
      {
        question: '갚을 의사가 있었음을 어떻게 보이나요?',
        answer:
          '<strong>자금을 사업에 실제 쓴 지출 흐름과 일부 변제·정산 시도로 다툴 수 있는 영역입니다.</strong> 지출·소통 기록을 모으세요.',
      },
      {
        question: '받은 돈을 사업에 쓴 게 유리한가요?',
        answer:
          '<strong>자금 사용처가 사업과 관련됐는지가 범의 판단에 영향을 주는 영역입니다.</strong> 지출 내역을 항목별로 정리하세요.',
      },
      {
        question: '민사 대여금과 형사 사기는 어떻게 구별되나요?',
        answer:
          '<strong>단순 채무불이행·정산 다툼에 그치는지, 편취 범의가 있는지로 갈리는 영역입니다.</strong> 사업 실패 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 거래·자금 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '편취 고의 입증', href: '/guide/fraud/fraud-intent-proof-track' },
      { label: '민사 채무불이행과 사기 구별', href: '/guide/fraud/fraud-civil-debt-distinction-track' },
      { label: '수사 진술 대응', href: '/guide/fraud/fraud-investigation-statement-response' },
    ],
  },

  // ─── 6. sex-crime-photo-studio-posing-touch-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-photo-studio-posing-touch-track',
    keyword: '사진스튜디오 포즈교정 추행',
    questionKeyword: '프로필·바디·웨딩 촬영을 위해 사진 스튜디오에 갔다가, 작가가 ‘포즈를 잡아준다’, ‘옷매무새를 만져준다’는 핑계로 제 가슴·허리·엉덩이 등을 만지거나 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느꼈어요. 촬영 중이라 항의도 못 했는데, 이런 스튜디오 촬영 중 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '사진스튜디오 포즈교정 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '사진스튜디오 포즈교정 추행 — 5단계 추행 해당성·증거 점검 | 로앤가이드',
      description:
        '사진 촬영 중 포즈 교정을 빌미로 신체 접촉을 당해 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·기습추행 기준을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「프로필·바디·웨딩·개인 화보 촬영을 위해 사진 스튜디오를 찾았다가, 작가·실장이 ‘포즈를 잡아준다’, ‘옷매무새·라인을 만져준다’는 핑계로 제 가슴·허리·엉덩이·허벅지 등을 만지거나 필요 이상으로 몸을 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 둘만 있는 촬영장이거나 ‘작가 지시’라는 분위기에 눌려 그 자리에서 제대로 항의하지 못한 채 촬영을 마치고 나와, 연출이었는지 추행이었는지 혼란스러워 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 폭행은 반드시 상대의 의사를 억압할 정도일 필요가 없고 폭행행위 자체가 추행으로 인정되는 ‘기습추행’도 포함되며, 추행은 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 성적 자유를 침해하는 행위로서 피해자의 의사·관계·경위·구체적 태양·주위 상황을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 연출 빙자 + 의사에 반한 접촉 + 회피 곤란 환경 결합은 ‘추행 해당성·증거’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 작가 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사진스튜디오 포즈교정 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·작가 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 촬영 일시·장소·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 연출을 넘어선 의사에 반한 접촉이 추행인지, 기습추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 스튜디오 CCTV·예약·촬영 원본 보존 요청.</li>\n<li><strong>④ 작가 특정</strong> — 예약·결제·근무 기록으로 작가 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포즈 교정을 빙자한 접촉이라도 의사에 반한 추행으로 평가될 수 있고 기습추행도 강제추행이 된다는 점이 분기점입니다. CCTV·촬영 원본은 보존 기간이 짧으므로 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 촬영 일시·장소·접촉 부위·방식·반복 정황 정리.</li>\n<li><strong>2단계 — CCTV·원본 확보 (즉시)</strong> — 스튜디오 CCTV·예약·촬영 원본 보존 요청.</li>\n<li><strong>3단계 — 시설·운영자 협조 (직후)</strong> — 스튜디오·업체에 영상·근무 기록 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사진스튜디오 포즈교정 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>촬영 일시·장소·접촉 정황 메모</strong></li>\n<li><strong>스튜디오 CCTV 보존 요청 자료</strong></li>\n<li><strong>예약·결제·촬영 계약 내역 (촬영 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>스태프·동행자·목격자 진술·연락처</strong></li>\n<li><strong>촬영 원본·접촉 부위 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 스튜디오 CCTV·촬영 원본은 보존 기간이 짧으므로 곧바로 시설·업체에 보존을 요청하는 것이 중요합니다. 예약·결제 기록으로 작가를 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 연출을 넘어선 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 추행으로 인정되는지.</li>\n<li><strong>연출 빙자</strong> — 포즈·옷매무새 교정을 빙자한 추행인지 정당한 연출인지.</li>\n<li><strong>작가 특정</strong> — 예약·결제·근무 기록으로 작가를 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·촬영 원본·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 신체 접촉 강제추행의 추행 판단',
        summary:
          '대법원 2023도162(대법원, 2023.04.13 선고) 영역에서 법원은 피해자의 신체에 손을 대어 만진 행위가 의사에 반하여 성적 자유를 침해하는 추행에 해당하는지는 피해자의 의사·관계·경위·구체적 태양·주위 상황을 종합해 신중히 판단해야 하고, 폭행행위 자체가 추행으로 인정되는 경우 강제추행이 성립한다고 판시했습니다. 사진 촬영 중 포즈 교정을 빙자한 의사에 반한 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '연출 빙자 + 의사에 반한 접촉 + 회피 곤란 환경 결합 시 추행 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '포즈 연출인지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>연출을 넘어선 의사에 반한 접촉인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '세게 잡은 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>폭행행위 자체가 추행으로 인정되는 기습추행도 강제추행이 되는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>작가 지시 분위기에 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '작가를 어떻게 특정하나요?',
        answer:
          '<strong>예약·결제·근무 기록과 CCTV로 특정할 수 있는 영역입니다.</strong> 스튜디오 영상·예약 기록 보존부터 요청하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-assault-report-procedure' },
      { label: '스튜디오 촬영 추행 대응', href: '/guide/sex-crime/sex-crime-photoshoot-studio-photographer-inappropriate-touch-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 7. sex-crime-yoga-class-correction-touch-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-yoga-class-correction-touch-track',
    keyword: '요가강습 자세교정 추행',
    questionKeyword: '요가·필라테스 강습을 받던 중 강사가 ‘자세 교정’, ‘호흡 보조’를 핑계로 제 가슴·골반·허벅지 등을 만지거나 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느꼈어요. 수업 중이라 항의도 못 했는데, 이런 요가 강습 중 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '요가강습 자세교정 추행 신고·증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '요가강습 자세교정 추행 — 5단계 추행 해당성·증거 점검 | 로앤가이드',
      description:
        '요가 강습 중 자세 교정을 빌미로 신체 접촉을 당해 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성과 증거 보전을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「요가·필라테스·PT 그룹 강습을 받던 중 강사가 ‘자세를 바로잡아준다’, ‘호흡·골반 정렬을 보조한다’는 핑계로 제 가슴·골반·허벅지·엉덩이 등을 만지거나 필요 이상으로 몸을 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 동작에 집중하던 중이라 순간 당황했고, ‘교정이 원래 이런 건가’ 헷갈려 그 자리에서 제대로 항의하지 못한 채 수업을 마치고 나와, 지도였는지 추행이었는지 혼란스러워 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 추행은 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서 폭행행위 자체가 추행으로 인정되는 기습추행도 포함되며, 추행 해당 여부는 피해자의 의사·관계·경위·구체적 태양·주위 상황을 종합해 신중히 판단해야 하고, 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 신빙성을 갖추어야 한다고 본 사례 흐름이 있는 영역입니다. 지도 빙자 + 의사에 반한 접촉 + 회피 곤란 환경 결합은 ‘추행 해당성·증거’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 강사 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 요가강습 자세교정 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·강사 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 강습 일시·장소·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 지도를 넘어선 의사에 반한 접촉이 추행인지, 기습추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 센터·강습장 CCTV, 수강 기록 보존 요청.</li>\n<li><strong>④ 강사 특정</strong> — 등록·예약·근무 기록으로 강사 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자세 교정을 빙자한 접촉이라도 의사에 반한 추행으로 평가될 수 있고 기습추행도 강제추행이 된다는 점이 분기점입니다. CCTV·수강 기록은 보존 기간이 짧으므로 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 강습 일시·장소·접촉 부위·방식·반복 정황 정리.</li>\n<li><strong>2단계 — CCTV·기록 확보 (즉시)</strong> — 센터·강습장 CCTV, 수강·예약 기록 보존 요청.</li>\n<li><strong>3단계 — 시설·운영자 협조 (직후)</strong> — 센터·업체에 영상·근무 기록 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요가강습 자세교정 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>강습 일시·장소·접촉 정황 메모</strong></li>\n<li><strong>센터·강습장 CCTV 보존 요청 자료</strong></li>\n<li><strong>수강 등록·예약·결제 내역 (강습 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>다른 수강생·목격자 진술·연락처</strong></li>\n<li><strong>운동복·신체 접촉 부위 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 센터 CCTV·수강 기록은 보존 기간이 짧으므로 곧바로 시설에 보존을 요청하는 것이 중요합니다. 등록·예약 기록으로 강사를 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도를 넘어선 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 추행으로 인정되는지.</li>\n<li><strong>지도 빙자</strong> — 자세 교정·호흡 보조를 빙자한 추행인지 정당한 지도인지.</li>\n<li><strong>진술 신빙성</strong> — 진술이 합리적 의심을 배제할 신빙성을 갖추는지.</li>\n<li><strong>증거 확보</strong> — CCTV·수강 기록·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술의 신빙성과 추행 판단',
        summary:
          '대법원 2020도16796(대법원, 2024.05.30 선고) 영역에서 법원은 진술 증거의 증거능력과 신빙성을 엄격히 따져야 하고, 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도의 신빙성을 갖추어야 유죄로 인정할 수 있다고 판시했습니다. 요가 강습 중 자세 교정을 빙자한 의사에 반한 접촉을 추행으로 다투는 사안에서 진술·정황의 신빙성을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 의사에 반한 접촉 + 회피 곤란 환경 결합 시 추행 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자세 교정인지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>지도를 넘어선 의사에 반한 접촉인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '세게 잡은 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>폭행행위 자체가 추행으로 인정되는 기습추행도 강제추행이 되는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>수업 중이라 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '강사를 어떻게 특정하나요?',
        answer:
          '<strong>등록·예약·근무 기록과 CCTV로 특정할 수 있는 영역입니다.</strong> 센터 영상·수강 기록 보존부터 요청하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-assault-report-procedure' },
      { label: 'PT 트레이너 추행 대응', href: '/guide/sex-crime/sex-crime-gym-pt-trainer-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 8. sex-crime-public-pool-changing-illegal-filming-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-public-pool-changing-illegal-filming-track',
    keyword: '공중 수영장 탈의실 불법촬영',
    questionKeyword: '공중 수영장·목욕탕·찜질방 탈의실이나 샤워실에서 누군가 휴대전화·소형 카메라로 제 몸을 몰래 촬영하는 것을 발견했거나, 천장·사물함 틈에서 몰래카메라가 나왔어요. 너무 놀랍고 수치스러운데, 이런 탈의실 불법촬영을 신고하고 가해자를 처벌할 수 있나요?',
    ctaKeyword: '공중 수영장 탈의실 불법촬영 신고·증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '수영장 탈의실 불법촬영 — 5단계 신고·증거보전 점검 | 로앤가이드',
      description:
        '수영장·목욕탕 탈의실에서 몰래 촬영당했거나 몰래카메라를 발견했다면, 성폭력처벌법 제14조 카메라등이용촬영죄의 증거보전과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「공중 수영장·목욕탕·찜질방의 탈의실·샤워실에서, 옆 사람이 휴대전화나 소형 카메라를 든 채 제 신체를 몰래 향하는 것을 발견했거나, 사물함 틈·천장·환풍구에서 몰래카메라가 나와 큰 충격과 수치심을 느낀 분의 상황입니다. 옷을 벗는 사적 공간이 촬영됐다는 사실에 놀라 그 자리에서 어떻게 대응해야 할지 막막했고, 영상이 어디로 퍼졌을지 두려워 잠도 못 이루실 만큼 답답하셨을 거예요.」 성폭력처벌법 제14조 제1항은 카메라나 그 밖에 이와 유사한 기능을 갖춘 기계장치를 이용하여 성적 욕망·수치심을 유발할 수 있는 사람의 신체를 그 의사에 반하여 촬영한 자를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 휴대전화 카메라 등으로 신체를 촬영한 사안에서, 압수된 휴대전화·영상물의 압수가 적법절차에 따른 것인지, 영장 기재 혐의사실과 관련성이 있는지를 검사가 증명해야 하고 위법수집증거는 배제될 수 있다고 보아 촬영물·기기 증거의 적법성을 엄격히 다룬 사례 흐름이 있는 영역입니다. 사적 공간 촬영 + 의사에 반한 촬영 + 기기 발견 결합은 ‘신고·증거보전’ 절차가 가능한 트랙입니다. 피해자라면 ① 현장·정황 정리 ② 촬영 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·삭제·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수영장 탈의실 불법촬영 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·촬영 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장·정황 정리</strong> — 일시·장소·기기·촬영 방향·발견 경위 정리.</li>\n<li><strong>② 촬영 해당성</strong> — 의사에 반해 신체를 촬영했는지, 미수·소지도 포함되는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 현장 보존, 기기·메모리·시설 CCTV 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·기기 등록·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·삭제·보호</strong> — 112·디지털성범죄피해자지원센터·해바라기센터 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사적 공간에서 의사에 반해 신체를 촬영했는지가 분기점이고, 촬영물·기기 증거는 적법하게 보전·압수돼야 합니다. 현장을 함부로 훼손하지 말고 시설·경찰에 즉시 알려 증거를 보전하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·증거 보존 (즉시)</strong> — 기기·메모리·촬영 방향·현장 상태를 훼손 없이 보존.</li>\n<li><strong>2단계 — 시설 협조·CCTV 확보 (즉시)</strong> — 수영장·목욕탕 측에 출입·CCTV 기록 보존 요청.</li>\n<li><strong>3단계 — 경찰 신고·기기 확보 (직후)</strong> — 112에 신고, 적법 절차로 기기·영상물 확보 협조.</li>\n<li><strong>4단계 — 삭제·확산 차단 (병행)</strong> — 디지털성범죄피해자지원센터에 삭제·확산 차단 지원 요청.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수영장 탈의실 불법촬영 신고·증거보전 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장·촬영 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·기기·촬영 방향 메모</strong></li>\n<li><strong>발견 당시 현장·기기 사진 (훼손 없이)</strong></li>\n<li><strong>수영장·목욕탕 CCTV·출입 기록 보존 요청 자료</strong></li>\n<li><strong>입장·결제·이용 내역 (이용 특정)</strong></li>\n<li><strong>직후 호소·신고·통화 기록</strong></li>\n<li><strong>목격자·시설 직원 진술·연락처</strong></li>\n<li><strong>디지털성범죄피해자지원센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기기·영상물 증거는 적법 절차로 압수·보전돼야 증거능력이 인정되므로 직접 기기를 임의로 다루지 말고 경찰·시설에 보존을 요청하는 것이 중요합니다. CCTV·출입 기록으로 가해자를 특정하면 신고에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영 해당성</strong> — 의사에 반해 신체를 촬영했는지, 미수·소지도 포함되는지.</li>\n<li><strong>증거 적법성</strong> — 기기·영상물 압수가 적법절차·관련성을 갖추었는지.</li>\n<li><strong>현장 보존</strong> — 기기·메모리·현장을 훼손 없이 보존했는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·기기 등록·목격자로 특정할 수 있는지.</li>\n<li><strong>확산 차단</strong> — 촬영물 삭제·유포 차단을 신속히 진행했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물 삭제·확산 차단 지원)</strong></li>\n<li><strong>여성긴급전화 1366·해바라기센터 (24시간 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 카메라이용촬영물·기기 증거의 적법성',
        summary:
          '대법원 2020도9431(대법원, 2024.03.12 선고) 영역에서 법원은 피고인이 휴대전화 카메라를 이용하여 신체를 촬영한 사안에서, 촬영물·기기의 압수가 적법절차에 따른 것이고 영장 기재 혐의사실과 관련성이 있다는 점은 검사가 증명해야 하며, 그 증명이 부족하면 위법수집증거로서 배제될 수 있다고 판시했습니다. 수영장 탈의실 불법촬영에서 기기·영상물 증거를 적법하게 보전·압수해야 하는 점을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '사적 공간 촬영 + 의사에 반한 촬영 + 기기 발견 결합 시 신고·증거보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '촬영물이 저장된 걸 못 봤는데도 신고가 되나요?',
        answer:
          '<strong>의사에 반한 촬영이면 미수·기기 소지도 다툼 대상이 되는 영역입니다.</strong> 기기·현장을 훼손 없이 보존하세요.',
      },
      {
        question: '제가 직접 휴대폰을 확인해도 되나요?',
        answer:
          '<strong>기기를 임의로 다루면 증거 적법성에 문제가 생길 수 있는 영역입니다.</strong> 경찰·시설에 보존을 요청하세요.',
      },
      {
        question: '몰래카메라를 발견했어요. 먼저 무엇부터 하나요?',
        answer:
          '<strong>현장을 훼손하지 말고 시설·경찰에 즉시 알려 보존하는 영역입니다.</strong> 발견 상태를 사진으로 남기세요.',
      },
      {
        question: '가해자를 어떻게 특정하나요?',
        answer:
          '<strong>CCTV·출입 기록·목격자로 특정할 수 있는 영역입니다.</strong> 시설 영상·이용 기록 보존부터 요청하세요.',
      },
      {
        question: '영상이 퍼졌을까 두려운데 어디에 도움을 청하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제·확산 차단 지원을 받아볼 수 있는 영역입니다.</strong> 함께 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '불법촬영 신고 절차', href: '/guide/sex-crime/sex-crime-illegal-filming-report-procedure' },
      { label: '탈의실 불법촬영 대응', href: '/guide/sex-crime/sex-crime-changing-room-illegal-filming-track' },
      { label: '촬영물 삭제·확산 차단', href: '/guide/sex-crime/sex-crime-takedown-spread-block-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-telecom-obscene-message-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-telecom-obscene-message-track',
    keyword: '통신매체이용음란 메시지',
    questionKeyword: '문자·카카오톡·SNS 메신저로 누군가 제게 성적인 음란한 말·사진·영상을 반복해서 보내 큰 수치심과 불쾌감을 느꼈어요. 모르는 번호이거나 아는 사람인데, 차단해도 다른 계정으로 또 보내요. 이런 통신매체로 보낸 음란 메시지를 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '통신매체이용음란 메시지 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '통신매체이용음란 메시지 — 5단계 해당성·증거 점검 | 로앤가이드',
      description:
        '문자·메신저로 음란한 말·사진을 반복 전송받아 수치심을 느꼈다면, 성폭력처벌법 제13조 통신매체이용음란의 해당성과 증거 보전을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「문자·카카오톡·인스타그램 DM·SNS 메신저를 통해 누군가 제게 성적인 음란한 말이나 노출 사진·영상, 성적 비하·요구 메시지를 일방적으로, 그것도 반복해서 보내 큰 수치심과 불쾌감을 느낀 분의 상황입니다. 모르는 번호일 때도 있고 아는 사람일 때도 있는데, 차단해도 다른 번호·계정으로 다시 보내와 ‘내 일상까지 감시당하나’ 불안하고, 어디까지가 처벌되는 것인지 막막하셨을 거예요.」 성폭력처벌법 제13조는 자기 또는 다른 사람의 성적 욕망을 유발하거나 만족시킬 목적으로 전화·우편·컴퓨터, 그 밖의 통신매체를 통하여 성적 수치심이나 혐오감을 일으키는 말·음향·글·그림·영상·물건을 상대방에게 도달하게 한 자를 2년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 통신매체이용음란죄의 ‘자기 또는 다른 사람의 성적 욕망을 유발하거나 만족시킬 목적’과 ‘성적 수치심·혐오감을 일으키는’ 표현인지는 행위자의 의도, 표현의 구체적 내용·맥락·상대방과의 관계 등을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 통신매체 + 성적 음란 표현 도달 + 반복 결합은 ‘해당성·증거’ 다툼이 가능한 트랙입니다. 피해자라면 ① 메시지 정리 ② 해당성 ③ 증거 보전 ④ 발신자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 통신매체이용음란 메시지 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 메시지·해당성·증거·발신자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 메시지 정리</strong> — 수신 일시·매체·내용·반복 횟수·발신 계정 정리.</li>\n<li><strong>② 해당성</strong> — 성적 욕망 유발·만족 목적과 성적 수치심·혐오 표현인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 메시지 원본·화면·계정 정보를 삭제 전 보존.</li>\n<li><strong>④ 발신자 특정</strong> — 번호·계정·IP 등으로 발신자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·디지털성범죄피해자지원센터·해바라기센터 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 성적 욕망 유발·만족 목적으로 성적 수치심·혐오를 일으키는 표현을 통신매체로 도달하게 했는지가 분기점입니다. 차단·삭제 전에 원본 메시지와 계정 정보를 그대로 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지·증거 보존 (즉시)</strong> — 메시지 원본·화면·발신 계정·수신 일시를 삭제 전 보존.</li>\n<li><strong>2단계 — 반복·다계정 정황 정리 (즉시)</strong> — 차단 후 다른 번호·계정 재전송 등 반복 정황 정리.</li>\n<li><strong>3단계 — 경찰 신고 (1주)</strong> — 사이버·성범죄 신고, 메시지·계정 자료 제출.</li>\n<li><strong>4단계 — 삭제·확산 차단 (병행)</strong> — 사진·영상이 포함되면 디지털성범죄피해자지원센터에 지원 요청.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">통신매체이용음란 메시지 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 메시지·해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>수신 일시·매체·발신 계정 메모</strong></li>\n<li><strong>메시지 원본·화면 캡처 (내용·맥락)</strong></li>\n<li><strong>반복·다계정 재전송 정황 자료</strong></li>\n<li><strong>발신 번호·아이디·프로필 정보 (발신자 특정)</strong></li>\n<li><strong>차단·신고 기록·통신사 자료</strong></li>\n<li><strong>직후 호소·상담·통화 기록</strong></li>\n<li><strong>디지털성범죄피해자지원센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 메시지 원본·발신 계정 정보를 삭제 전 그대로 보존하면 해당성·발신자 특정에 도움이 됩니다. 차단 후에도 다른 계정으로 반복 전송된 정황을 시간순으로 정리하면 반복·집착 정황을 보이기 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>목적 요건</strong> — 성적 욕망을 유발·만족시킬 목적이 있었는지.</li>\n<li><strong>표현 해당성</strong> — 성적 수치심·혐오감을 일으키는 표현인지 맥락으로 판단되는지.</li>\n<li><strong>도달 요건</strong> — 통신매체를 통해 상대방에게 도달하게 했는지.</li>\n<li><strong>발신자 특정</strong> — 번호·계정·IP로 발신자를 특정할 수 있는지.</li>\n<li><strong>증거 보전</strong> — 원본 메시지·계정 정보를 삭제 전 보존했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물·확산 차단 지원)</strong></li>\n<li><strong>여성긴급전화 1366·해바라기센터 (24시간 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통신매체이용음란죄의 목적·표현 판단',
        summary:
          '대법원 2023도7199(대법원, 2024.11.28 선고) 영역에서 법원은 성폭력처벌법 제13조 통신매체이용음란죄에서 ‘자기 또는 다른 사람의 성적 욕망을 유발하거나 만족시킬 목적’이 있었는지, 그리고 성적 수치심·혐오감을 일으키는 표현에 해당하는지는 행위자의 의도, 표현의 구체적 내용·맥락, 상대방과의 관계 등을 종합해 판단해야 한다고 판시했습니다. 문자·메신저로 음란 메시지를 반복 전송한 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '통신매체 + 성적 음란 표현 도달 + 반복 결합 시 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '말로만 보낸 것도 처벌이 되나요?',
        answer:
          '<strong>성적 수치심·혐오를 일으키는 말·글도 표현·맥락에 따라 해당하는 영역입니다.</strong> 메시지 원본을 보존하세요.',
      },
      {
        question: '한두 번 보낸 것도 신고가 되나요?',
        answer:
          '<strong>반복 여부와 무관하게 목적·표현 요건이 충족되면 다툼 대상이 되는 영역입니다.</strong> 수신 일시·내용을 정리하세요.',
      },
      {
        question: '차단했는데 다른 계정으로 또 보내요.',
        answer:
          '<strong>다계정 반복 전송 정황은 집착·고의를 보이는 데 도움이 되는 영역입니다.</strong> 재전송을 시간순으로 정리하세요.',
      },
      {
        question: '모르는 번호인데 발신자를 특정할 수 있나요?',
        answer:
          '<strong>번호·계정·통신 기록으로 발신자를 특정할 수 있는 영역입니다.</strong> 번호·아이디 정보부터 보존하세요.',
      },
      {
        question: '사진·영상까지 받았는데 어디에 도움을 청하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제·확산 차단 지원을 받아볼 수 있는 영역입니다.</strong> 함께 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '통신매체이용음란 신고', href: '/guide/sex-crime/sex-crime-telecom-obscenity-report-procedure' },
      { label: '사이버 음란 메시지 대응', href: '/guide/sex-crime/sex-crime-sns-message-cyber-obscenity-track' },
      { label: '촬영물 삭제·확산 차단', href: '/guide/sex-crime/sex-crime-takedown-spread-block-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 10. sex-crime-office-party-contact-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-office-party-contact-falsely-accused-defense',
    keyword: '회식 신체접촉 추행 무고',
    questionKeyword: '회식·송년회 자리에서 좁은 테이블·이동 중에 우연히 어깨·팔이 닿거나 부축하는 정도의 접촉이 있었을 뿐인데, 며칠 뒤 동료가 ‘그날 추행당했다’며 저를 고소·신고했어요. 저는 추행한 적도 없고 모두가 있던 자리였는데, 상대 진술만으로 몰리는 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '회식 신체접촉 추행 무고 무죄추정 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 신체접촉 추행 무고 방어 — 5단계 무죄추정·진술 점검 | 로앤가이드',
      description:
        '회식 자리 우연한 신체 접촉을 추행으로 고소당했다면, 무죄추정·진술 신빙성과 추행 해당성 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식·송년회·워크숍 자리에서, 좁은 테이블에 둘러앉거나 자리를 옮기는 과정에서 어깨·팔이 우연히 닿거나, 비틀거리는 동료를 부축하는 정도의 접촉이 있었을 뿐인데, 며칠 뒤 그 동료가 ‘그날 추행당했다’며 회사·경찰에 신고해 한순간에 가해자로 지목된 분의 상황입니다. 정작 본인은 추행한 적이 없고 여러 사람이 함께 있던 공개된 자리였는데, 상대의 진술과 분위기만으로 몰리는 것 같아 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 문제 된 접촉이 추행에 해당하는지, 우연·의례적 접촉인지, 상대 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지가 핵심 쟁점입니다. 판례는 형사피고인은 유죄 확정 전까지 무죄로 추정되고, 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도의 신빙성을 갖추고 객관적 정황·경험칙에 부합해야 유죄로 인정할 수 있으며, 진술조서 등 진술 증거의 증거능력·신빙성을 엄격히 따져야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 회식 경위·접촉 정황·진술 신빙성을 정리해 다툴 수 있는 영역입니다. 공개된 자리 + 우연·의례적 접촉 + 진술 신빙성 다툼 결합은 ‘무죄추정·진술’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 해당성 ③ 접촉 정황 ④ 진술 신빙성 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 신체접촉 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·접촉 정황·진술 신빙성·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 회식 일정·좌석·이동·접촉 경위·동석자 정리.</li>\n<li><strong>② 추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행으로 평가되는지 검토.</li>\n<li><strong>③ 접촉 정황</strong> — 우연·의례적·부축 등 접촉의 성격을 정황으로 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술이 객관적 정황·경험칙에 부합하는지 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진술이 사실상 유일한 증거인 경우 합리적 의심을 배제할 정도의 신빙성이 있어야 하고 무죄추정이 적용된다는 점이 분기점입니다. 회식 경위·좌석·동석자 정황으로 추행 해당성과 진술 신빙성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 회식 일정·좌석·이동·접촉 경위·동석자 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — 매장 CCTV·결제·좌석 배치·동석자 진술 등 객관 자료 확보.</li>\n<li><strong>3단계 — 해당성·진술 쟁점 정리 (2주)</strong> — 추행 해당성·접촉 정황·상대 진술의 모순·무죄추정 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 신체접촉 추행 무고 무죄추정·진술 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일정·좌석·이동 경위 메모</strong></li>\n<li><strong>매장 CCTV·결제·예약 기록 보존 요청 자료</strong></li>\n<li><strong>좌석 배치·동석자 위치 정황 자료</strong></li>\n<li><strong>전후 메시지·단체방·통화 기록 (분위기 정황)</strong></li>\n<li><strong>상대 진술 모순·정황 불부합 자료</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉이 추행에 해당하는지’와 ‘진술이 합리적 의심을 배제할 신빙성이 있는지’입니다. 공개된 자리·좌석 배치·동석자 정황으로 우연·의례적 접촉임을 정돈하고 상대 진술의 모순·정황 불부합을 구체적으로 짚으면 무죄추정·진술 신빙성 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>접촉의 성격</strong> — 우연·의례적·부축 등 접촉인지 의도적 추행인지.</li>\n<li><strong>진술 신빙성</strong> — 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지.</li>\n<li><strong>무죄추정</strong> — 검사의 증명이 확신에 이르지 못하면 피고인 이익으로 판단되는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 진술조서·진술의 신빙성',
        summary:
          '대법원 2024도11314(대법원, 2024.11.14 선고) 영역에서 법원은 진술 증거의 증거능력·신빙성을 엄격히 따져야 하고, 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도의 신빙성을 갖추고 객관적 정황·경험칙에 부합해야 유죄로 인정할 수 있으며 형사피고인은 무죄로 추정된다고 판시했습니다. 회식 자리 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 무죄추정·진술 신빙성 기준을 검토해볼 수 있습니다.',
        takeaway: '공개된 자리 + 우연·의례적 접촉 + 진술 신빙성 다툼 결합 시 무죄추정·진술 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대 진술만 있는데도 처벌될 수 있나요?',
        answer:
          '<strong>진술이 합리적 의심을 배제할 신빙성을 갖춰야 하고 무죄추정이 적용되는 영역입니다.</strong> 진술 모순·정황 불부합을 정리하세요.',
      },
      {
        question: '여럿이 있던 자리였는데 어떻게 보이나요?',
        answer:
          '<strong>좌석 배치·동석자·CCTV 정황으로 공개된 자리임을 다툴 수 있는 영역입니다.</strong> 좌석·동석자 정황을 모으세요.',
      },
      {
        question: '부축하다 닿은 것도 추행이 되나요?',
        answer:
          '<strong>우연·의례적 접촉인지, 의사에 반해 성적 자유를 침해했는지로 판단하는 영역입니다.</strong> 접촉 경위를 정리하세요.',
      },
      {
        question: '며칠 지나 신고됐는데 불리한가요?',
        answer:
          '<strong>신고 시점과 무관하게 진술 신빙성·객관 정황 부합으로 판단되는 영역입니다.</strong> CCTV·전후 기록을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '강제추행 무고 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense-track' },
      { label: '추행 해당성 다툼', href: '/guide/sex-crime/sex-crime-indecency-standard-track' },
      { label: '수사 진술 대응', href: '/guide/sex-crime/sex-crime-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/sex-crime/sex-crime-public-defender-track' },
    ],
  },
];
