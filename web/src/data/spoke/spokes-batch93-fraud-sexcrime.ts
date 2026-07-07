import { SpokePage } from '../spoke-pages';

// batch93 fraud(6) + sex-crime(4) — 10개 (2026-06-10)
//
// 고유 존재 이유:
// 1. fraud-used-car-flood-damage-concealed-track — 일반 중고차 하자류와 분기. '침수 이력을 숨기고 무사고로 속여 판 중고차' 고지의무·기망·편취 판단형 트랙(victim).
// 2. fraud-online-course-refund-refusal-track — 일반 서비스 환불류와 분기. '평생수강·전액환불이라던 온라인 강의가 환불을 거부' 기망·편취 판단형 트랙(victim).
// 3. fraud-crypto-signal-room-investment-track — 일반 코인 투자류와 분기. '코인 리딩방·자동매매로 수익 보장이라며 입금받고 잠적' 투자 기망·편취액 판단형 트랙(victim).
// 4. fraud-luxury-consignment-nonpayment-track — 일반 위탁판매류와 분기. '명품을 위탁판매 맡겼는데 팔고도 정산금을 안 주고 잠적' 고지의무·정산 절차형 트랙(victim).
// 5. fraud-loan-pretext-voice-phishing-track — 일반 보이스피싱류와 분기. '저금리 대환대출 빙자로 앱 설치·계좌이체를 유도당함' 지급정지·환급 절차형 트랙(victim).
// 6. fraud-joint-venture-fund-recovery-falsely-accused-defense — 일반 사기 무고류와 분기. '동업자금 회수·정산 다툼을 사기로 고소당함' 편취 범의·공모 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-karaoke-assistant-track — 일반 추행류와 분기. '노래방 도우미·접객 중 강제추행' 폭행·협박 의미·기습추행 판단형 트랙(victim).
// 8. sex-crime-foot-massage-shop-track — 일반 추행류와 분기. '발마사지·스파 업소 시술 중 추행' 기습추행·추행 해당성 판단형 트랙(victim).
// 9. sex-crime-subway-upskirt-track — 일반 불법촬영류와 분기. '지하철 객실에서 다리·치마 속 불법촬영' 카메라등이용촬영·증거보전 절차형 트랙(victim).
// 10. sex-crime-club-afterparty-falsely-accused-defense — 일반 성범죄 무고류와 분기. '동호회 뒤풀이 자리 신체 접촉을 추행으로 고소당함' 진술 신빙성 다툼 방어 판단형 트랙(accused).

export const spokesBatch93FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-flood-damage-concealed-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-flood-damage-concealed-track',
    keyword: '침수차 미고지 중고차 사기',
    questionKeyword: '무사고·정상차라는 말을 믿고 중고차를 샀는데, 정비소에 갔다가 시트 밑·엔진룸에서 흙·녹 흔적이 나와 침수 이력을 숨긴 침수차라는 걸 알게 됐어요. 딜러는 ‘몰랐다’며 환불을 거부하는데, 침수 사실을 알면서 숨기고 판 이 거래를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '침수차 미고지 고지의무·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '침수차 미고지 중고차 사기 — 5단계 고지의무·편취 점검 | 로앤가이드',
      description:
        '무사고라던 중고차가 침수 이력을 숨긴 침수차이고 딜러가 환불을 거부한다면, 형법 제347조 사기의 고지의무·기망 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘무사고, 침수·사고 이력 전혀 없는 정상차’라는 딜러 설명과 성능점검기록부를 믿고 중고차를 사서 며칠 몰다가, 정비소 점검이나 누전·곰팡이 냄새로 시트 레일 밑·안전벨트 끝·엔진룸 깊숙한 곳에서 흙·녹·오염 흔적을 발견하고, 보험개발원 카히스토리 조회에서 침수 전손·분손 이력이 드러나 충격받은 분의 상황입니다. 딜러는 ‘우리도 몰랐다’, ‘성능점검상 이상 없었다’며 환불·교환을 거부하거나 연락을 미루고, 처음부터 침수 사실을 알면서 숨기고 무사고로 속여 판 건 아닌지 의심되고 막막하실 거예요. 큰돈을 들인 차가 침수차였다는 사실에 안전까지 걱정돼 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 침수 이력은 차량 가치·안전에 직결되는 중요한 사정이어서, 알면서도 이를 고지하지 않은 채 무사고로 속여 매도했다면 신의칙상 고지의무 위반에 의한 기망행위로 평가될 여지가 있고, 매매대금 교부라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 거래 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 신의성실의 원칙상 사전에 그 사정을 고지할 의무가 있고, 이를 묵비하면 부작위에 의한 기망으로 사기죄를 구성할 수 있다고 본 사례 흐름이 있는 영역입니다. 침수 인지 + 미고지 + 무사고 표시 결합은 ‘고지의무·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·차량 정리 ② 침수 인지·고지의무 ③ 편취액 ④ 형사 신고 ⑤ 환급·배상 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 침수차 미고지 중고차 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·고지의무·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·차량 정리</strong> — 매매계약서·성능점검기록부·무사고 표시·대금 송금 내역 정리.</li>\n<li><strong>② 침수 인지·고지의무</strong> — 딜러가 침수 이력을 알면서 숨겼는지, 고지의무가 있었는지 검토.</li>\n<li><strong>③ 편취액</strong> — 침수차 시세 차액이 아니라 교부한 매매대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·배상</strong> — 계약 취소·대금 반환·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 품질 불만과 달리, 침수 이력을 알면서 고지하지 않고 무사고로 속였는지가 기망 판단의 분기점입니다. 카히스토리·정비소 침수 소견과 매도 당시 무사고 표시를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·차량 자료 보존 (즉시)</strong> — 계약서·성능점검기록부·무사고 표시·대금 송금·대화 보존.</li>\n<li><strong>2단계 — 침수 입증 확보 (즉시)</strong> — 카히스토리 조회·정비소 침수 소견·침수 흔적 사진 확보.</li>\n<li><strong>3단계 — 환불·계약취소 요구 (병행)</strong> — 딜러·매매상사에 침수 미고지 통지·계약취소 요구.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사기 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 대금 반환·배상 (2개월 내)</strong> — 매매조합 공제·민사 대금 반환·손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">침수차 미고지 중고차 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·고지의무·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>중고차 매매계약서·특약 (계약 내용)</strong></li>\n<li><strong>성능·상태점검기록부·무사고 표시 (고지 정황)</strong></li>\n<li><strong>카히스토리·보험 침수 이력 조회 (침수 입증)</strong></li>\n<li><strong>정비소 침수 소견서·점검 견적 (가품·하자)</strong></li>\n<li><strong>시트 밑·엔진룸 침수 흔적 사진 (현품 상태)</strong></li>\n<li><strong>대금 송금·할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>딜러·매매상사·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카히스토리 침수 이력과 매도 당시 무사고 표시를 대조하면 고지의무 위반 정황이 선명해집니다. 정비소 침수 소견서와 흔적 사진을 함께 모으면 침수 인지·기망 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>침수 인지</strong> — 딜러가 침수 이력을 알면서 숨겼는지.</li>\n<li><strong>고지의무</strong> — 침수 사실이 신의칙상 고지의무 대상인지.</li>\n<li><strong>편취액</strong> — 시세 차액이 아니라 교부한 매매대금 전부가 피해액인지.</li>\n<li><strong>단순 하자 항변</strong> — 모르고 판 품질 하자인지 알면서 숨긴 기망인지.</li>\n<li><strong>딜러 특정</strong> — 매매상사·계약서·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고차 거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반에 의한 부작위 기망',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득에 있고, 편취의 범의는 범행 전후 거래의 내용·이행과정 등 객관적 사정을 종합해 계약 당시를 기준으로 판단해야 한다고 판시했습니다. 침수 이력처럼 거래에 중요한 사정을 알면서 고지하지 않고 무사고로 속여 매도한 사안을 살펴볼 때에도 고지의무·기망 판단 기준을 검토해볼 수 있습니다.',
        takeaway: '침수 인지 + 미고지 + 무사고 표시 결합 시 고지의무·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '딜러가 ‘몰랐다’고 하면 사기가 안 되나요?',
        answer:
          '<strong>침수 이력을 알면서 숨겼는지가 핵심인 영역입니다.</strong> 카히스토리·정비 소견과 무사고 표시를 함께 확보하세요.',
      },
      {
        question: '침수차라는 걸 어떻게 증명하나요?',
        answer:
          '<strong>카히스토리 조회와 정비소 침수 소견으로 입증하는 영역입니다.</strong> 시트 밑·엔진룸 흔적 사진도 함께 모으세요.',
      },
      {
        question: '성능점검기록부에 정상이라 적혀 있어요.',
        answer:
          '<strong>점검 표시와 실제 침수 사실의 불일치가 고지의무 다툼의 출발점인 영역입니다.</strong> 기록부와 침수 입증을 대조하세요.',
      },
      {
        question: '차값 일부만 손해인가요, 전부인가요?',
        answer:
          '<strong>시세 차액이 아니라 교부한 매매대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 대금 총액을 정리하세요.',
      },
      {
        question: '환불 거부당했는데 어디에 도움을 청하나요?',
        answer:
          '<strong>한국소비자원·매매조합 공제와 경찰 신고를 함께 검토할 수 있는 영역입니다.</strong> 계약·침수 자료부터 정돈하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '동업 수익 분배 사기 고의 무고 방어', href: '/guide/fraud/fraud-business-partnership-profit-distribution-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 2. fraud-online-course-refund-refusal-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-course-refund-refusal-track',
    keyword: '온라인 강의 환불거부 사기',
    questionKeyword: '‘평생 수강, 효과 없으면 전액 환불, 취업·합격 보장’이라는 광고를 믿고 수백만원짜리 온라인 강의·패키지를 결제했는데, 막상 환불을 요구하니 약관을 들이밀며 거부하거나 업체가 연락을 끊었어요. 처음부터 환불해줄 의사 없이 보장 문구로 결제만 유도한 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '온라인 강의 환불거부 기망·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 환불거부 사기 — 5단계 기망·편취 점검 | 로앤가이드',
      description:
        '전액환불·합격보장이라던 온라인 강의가 환불을 거부하거나 업체가 잠적했다면, 형법 제347조 사기의 기망·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘평생 수강 가능, 효과 없으면 100% 전액 환불, 일정 점수·합격·취업 보장’이라는 상담사·광고 문구를 믿고 수십만원에서 수백만원짜리 온라인 강의·인강 패키지·코칭 프로그램을 결제한 분의 상황입니다. 그런데 막상 환불을 요구하니 ‘이미 수강을 시작했다’, ‘환불 불가 약관에 동의했다’며 거부하거나, 보장 조건을 갖춰도 차일피일 미루다 업체가 폐업·잠적해, 처음부터 환불해줄 의사 없이 보장 문구로 결제만 끌어모은 건 아닌지 의심되고 막막하실 거예요. 강의는 제대로 듣지도 못했는데 큰돈만 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 이행·환불 의사·능력 없이 보장 문구를 미끼로 결제만 유도했다면 기망행위로 평가될 여지가 있고, 결제금 교부가 있으면 그 자체로 재산침해가 인정될 수 있으며, 본인이 직접 돈을 받지 않고 운영사·제3자가 받게 한 경우에도 사기죄가 성립할 수 있다는 흐름이 있는 영역입니다. 판례는 기망행위로 스스로 재물을 취득하지 않고 제3자로 하여금 교부받게 한 경우에도, 제3자에게 재물을 취득하게 할 의사가 미필적으로라도 있으면 사기죄가 성립할 수 있다고 본 사례 흐름이 있는 영역입니다. 보장 문구 + 환불 거부 + 잠적 결합은 ‘기망·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 보장·기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 환불거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 광고·전액환불·합격보장 문구·상담·결제 내역 정리.</li>\n<li><strong>② 보장·기망 정황</strong> — 환불·이행 의사 없이 보장 문구로 결제를 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 수강·할인이 있어도 교부한 결제금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·지급정지·동일 업체 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 환불 거부 분쟁과 달리, 처음부터 환불·이행 의사 없이 보장 문구로 결제만 유도했는지가 사기 판단의 분기점입니다. 광고·상담 보장 멘트와 환불 거부·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 광고·전액환불·합격보장 문구·상담·결제·대화 보존.</li>\n<li><strong>2단계 — 보장·거부 정황 정리 (즉시)</strong> — 결제 유도 보장 멘트와 환불 거부·잠적 시점 정리.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부항변·결제 이의·계좌 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사기 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 업체 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 환불거부 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>광고·랜딩·전액환불·합격보장 문구 캡처 (유도 정황)</strong></li>\n<li><strong>상담·계약·약관 동의 화면 기록 (거래 조건)</strong></li>\n<li><strong>결제·카드 승인·할부 내역 (피해 금액)</strong></li>\n<li><strong>환불 요청·거부·연락 두절 대화 기록</strong></li>\n<li><strong>수강 진도·미이행·보장 조건 충족 자료</strong></li>\n<li><strong>동일 업체 피해·폐업·모집 시점 자료</strong></li>\n<li><strong>업체·운영사·결제 계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 직전 보장 멘트와 환불 거부·잠적 정황을 함께 정리하면 기망 정황이 선명해집니다. 같은 업체 피해자를 모아 결제 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 환불·이행 의사 없이 보장 문구로 결제를 유도했는지.</li>\n<li><strong>약관 항변</strong> — 환불 불가 약관이 보장 광고와 모순되는지.</li>\n<li><strong>편취액</strong> — 일부 수강이 있어도 교부한 결제금 전부가 피해액인지.</li>\n<li><strong>제3자 수령</strong> — 운영사·제3자가 받았어도 편취 의사가 있었는지.</li>\n<li><strong>업체 특정</strong> — 운영사·계좌·상담사로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·강의 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 교부형 편취와 미필적 취득 의사',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 기망행위로 스스로 재물을 취득하지 않고 제3자로 하여금 교부받게 한 경우에도 제3자에게 재물을 취득하게 할 의사가 미필적으로라도 있으면 사기죄가 성립하고, 기망으로 인한 재물 교부가 있으면 그 이익의 최종 귀속과 무관하게 사기죄가 성립한다고 판시했습니다. 보장 문구로 결제를 유도하고 운영사·제3자가 결제금을 받은 강의 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '보장 문구 + 환불 거부 + 잠적 결합 시 기망·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '환불 불가 약관에 동의했는데도 사기가 되나요?',
        answer:
          '<strong>약관과 별개로 보장 문구로 결제만 유도했는지가 핵심인 영역입니다.</strong> 전액환불·보장 멘트와 거부 정황을 확보하세요.',
      },
      {
        question: '강의를 조금 들었는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 수강이 있어도 교부한 결제금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 결제 총액을 정리하세요.',
      },
      {
        question: '결제는 운영사 계좌로 갔는데 사기가 되나요?',
        answer:
          '<strong>제3자가 받았어도 취득하게 할 의사가 있으면 사기로 평가될 수 있는 영역입니다.</strong> 결제 흐름과 운영 주체를 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>카드 할부항변·결제 이의로 청구를 다퉈볼 수 있는 영역입니다.</strong> 미이행·거부 정황을 정리해 이의신청하세요.',
      },
      {
        question: '업체가 폐업했는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 폐업·잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '등록금 대납 빙자 사기', href: '/guide/fraud/fraud-tuition-payment-scam-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 3. fraud-crypto-signal-room-investment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-signal-room-investment-track',
    keyword: '코인 리딩방 투자 사기',
    questionKeyword: '오픈채팅·텔레그램 코인 리딩방에서 ‘전문가 시그널, 자동매매로 원금보장·고수익’이라는 말을 믿고 거래소·전용 사이트에 입금했는데, 처음엔 수익이 찍히다가 출금을 요청하니 ‘세금·수수료를 더 넣어야 한다’며 막더니 결국 방과 사이트가 사라졌어요. 처음부터 수익을 줄 의사 없이 입금만 끌어모은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '코인 리딩방 투자 편취·편취액 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '코인 리딩방 투자 사기 — 5단계 편취·편취액 점검 | 로앤가이드',
      description:
        '코인 리딩방·자동매매에 입금했다가 출금이 막히고 방·사이트가 사라졌다면, 형법 제347조 사기의 편취 범의·편취액 산정과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「오픈채팅·텔레그램·인스타 DM으로 초대된 코인 리딩방·투자방에서 ‘전문가 시그널, 자동매매 봇, 원금보장 고수익’이라는 말과 화려한 수익 인증을 믿고, 지정한 거래소·전용 투자 사이트에 입금한 분의 상황입니다. 처음 한두 번은 약간의 수익이 찍히고 소액 출금도 되다가, 큰 금액을 출금하려 하니 ‘출금 수수료·세금·증거금을 먼저 넣어야 한다’, ‘계정이 동결됐다’며 추가 입금만 요구하고, 결국 리딩방·사이트가 통째로 사라져, 처음부터 수익을 돌려줄 의사 없이 입금만 끌어모은 건 아닌지 의심되고 막막하실 거예요. 노후자금·대출금까지 넣은 터라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 수익을 지급할 의사·능력 없이 가짜 수익 화면·시그널로 입금을 유도했다면 기망행위로 평가될 여지가 있고, 입금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 그 공제 차액이 아니라 교부받은 금원 전부라고 보아, 일부 출금·수익 지급이 있어도 입금 총액을 편취액으로 본 사례 흐름이 있는 영역입니다. 가짜 수익 + 출금 차단 + 잠적 결합은 ‘편취·편취액’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 기망·편취 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 리딩방 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 리딩방 대화·시그널·수익 화면·입금 내역 정리.</li>\n<li><strong>② 기망·편취 정황</strong> — 수익 지급 의사 없이 가짜 수익·출금 차단으로 입금을 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 출금·수익 지급이 있어도 교부한 입금액 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·동일 조직 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 가짜 수익 화면·출금 차단으로 입금만 끌어모았는지가 사기 판단의 분기점입니다. 일부 출금이 있어도 입금 총액이 편취액으로 평가될 수 있으니 입금·출금 시점을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 리딩방 대화·시그널·수익 화면·입금·출금 거부 보존.</li>\n<li><strong>2단계 — 지급정지 요청 (즉시)</strong> — 송금 계좌·간편결제 지급정지를 신속 요청.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (직후)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제 신청 (피해 직후)</strong> — 통신사기피해환급법에 따른 피해구제·계좌 추적 검토.</li>\n<li><strong>5단계 — 집단 대응 (2개월 내)</strong> — 동일 조직 피해자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 리딩방 투자 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>리딩방·DM 대화·전문가 시그널 캡처 (유도 정황)</strong></li>\n<li><strong>수익 인증·전용 사이트 화면 캡처 (가짜 수익)</strong></li>\n<li><strong>입금·송금·코인 전송 내역 (피해 금액)</strong></li>\n<li><strong>출금 거부·추가 입금 요구 대화 기록</strong></li>\n<li><strong>거래소·지갑 주소·계좌 정보 (자금 추적)</strong></li>\n<li><strong>리딩방·사이트 폐쇄·잠적 정황 자료</strong></li>\n<li><strong>운영자·계좌·도메인 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가짜 수익 화면과 출금 거부·추가 입금 요구 대화를 함께 정리하면 편취 정황이 선명해집니다. 지갑 주소·계좌·입금 시점을 묶어 두면 자금 추적과 편취액 산정에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 수익 지급 의사 없이 가짜 수익으로 입금을 유도했는지.</li>\n<li><strong>편취액</strong> — 일부 출금·수익 지급이 있어도 입금 전부가 피해액인지.</li>\n<li><strong>투자 손실 항변</strong> — 정상 투자 손실인지 처음부터 기망인지.</li>\n<li><strong>자금 추적</strong> — 계좌·지갑 주소로 자금 흐름을 추적할 수 있는지.</li>\n<li><strong>조직 특정</strong> — 운영자·계좌·도메인으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (불법 투자·유사수신 신고)</strong></li>\n<li><strong>한국소비자원 1372 (피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 지급에도 편취액은 교부 금원 전부',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 그 공제 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 코인 리딩방에서 소액 출금·수익 지급이 있었더라도 입금 총액을 편취액으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '가짜 수익 + 출금 차단 + 잠적 결합 시 편취·편취액 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '처음엔 출금도 됐는데 사기가 되나요?',
        answer:
          '<strong>초기 소액 출금은 신뢰 유도 수단으로 평가될 수 있는 영역입니다.</strong> 이후 출금 차단·추가 입금 요구 정황을 확보하세요.',
      },
      {
        question: '일부 수익을 받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 출금·수익이 있어도 교부한 입금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금·출금 내역을 모두 정리하세요.',
      },
      {
        question: '코인으로 보냈는데 추적이 되나요?',
        answer:
          '<strong>지갑 주소·거래소 정보로 자금 흐름을 추적할 여지가 있는 영역입니다.</strong> 전송 주소·해시를 보존하세요.',
      },
      {
        question: '계좌로 입금한 건 멈출 수 있나요?',
        answer:
          '<strong>송금 계좌 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
      {
        question: '같은 리딩방 피해자가 많아요. 함께 대응하나요?',
        answer:
          '<strong>같은 조직·계좌 피해는 묶어 공동 신고·자금 추적을 검토할 수 있는 영역입니다.</strong> 피해자별 입금 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '웨딩 벤더 선예약금 잠적', href: '/guide/fraud/fraud-wedding-vendor-photographer-dress-deposit-loss-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 4. fraud-luxury-consignment-nonpayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-luxury-consignment-nonpayment-track',
    keyword: '명품 위탁판매 미정산 사기',
    questionKeyword: '명품 가방·시계를 위탁판매 업체·중고샵에 맡겼는데, 업체가 ‘판매됐다’면서도 정산금을 주지 않거나, 물건을 팔거나 잡혀 놓고 ‘아직 안 팔렸다’며 시간만 끌다 연락을 끊고 잠적했어요. 처음부터 정산해줄 의사 없이 물건만 받아 챙긴 것 같은데, 사기로 신고하고 물건값·정산금을 돌려받을 수 있나요?',
    ctaKeyword: '명품 위탁판매 미정산 고지의무·정산 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '명품 위탁판매 미정산 사기 — 5단계 정산·환급 점검 | 로앤가이드',
      description:
        '명품을 위탁판매 맡겼는데 업체가 정산금을 주지 않고 잠적했다면, 형법 제347조 사기의 고지의무·편취 판단과 정산·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「쓰지 않는 명품 가방·시계·주얼리를 ‘빠르게 좋은 값에 팔아준다’는 위탁판매 업체·중고 명품샵에 맡기고 정산을 기다린 분의 상황입니다. 그런데 업체가 ‘아직 안 팔렸다’며 시간만 끌거나, 정작 ‘판매 완료’라면서도 정산금을 차일피일 미루고, 알고 보니 물건을 이미 팔거나 전당·담보로 잡혀 놓고도 정산하지 않은 채 연락을 끊고 잠적해, 처음부터 정산해줄 의사 없이 물건만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 값비싼 물건과 돈을 한꺼번에 잃은 것 같아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정산·반환 의사·능력 없이 정상적인 위탁판매인 것처럼 속여 물건을 받았다면 기망행위로 평가될 여지가 있고, 자력 악화·판매대금 유용 등 위탁자가 알았다면 맡기지 않았을 사정을 고지하지 않은 것도 부작위에 의한 기망으로 평가될 여지가 있는 영역입니다. 판례는 거래 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 신의성실의 원칙상 사전 고지의무가 있고 이를 묵비하면 기망에 해당하며, 현실적 손해 발생이 사기죄의 요건은 아니라고 본 사례 흐름이 있는 영역입니다. 미정산 + 판매·담보 은닉 + 잠적 결합은 ‘고지의무·정산’ 다툼이 가능한 트랙입니다. 피해자라면 ① 위탁·정산 정리 ② 고지의무·기망 정황 ③ 편취 대상·금액 ④ 형사 신고 ⑤ 반환·정산 청구 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 명품 위탁판매 미정산 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 위탁·고지의무·편취 대상·신고·정산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위탁·정산 정리</strong> — 위탁계약·접수증·감정가·정산 약정·연락 내역 정리.</li>\n<li><strong>② 고지의무·기망 정황</strong> — 정산·반환 의사 없이 위탁판매인 척 속였거나 판매·담보 사실을 숨겼는지 정리.</li>\n<li><strong>③ 편취 대상·금액</strong> — 맡긴 물건과 판매대금·정산금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·횡령 신고·고소 검토.</li>\n<li><strong>⑤ 반환·정산 청구</strong> — 물건 반환·정산금 청구·지급정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 정산 지연과 달리, 정산·반환 의사 없이 물건만 받거나 판매·담보 사실을 숨겼는지가 분기점입니다. 위탁 접수증과 판매·정산·연락 두절 시점을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정산 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 위탁·정산 자료 보존 (즉시)</strong> — 위탁계약·접수증·감정가·정산 약정·대화 보존.</li>\n<li><strong>2단계 — 판매·은닉 정황 확인 (즉시)</strong> — 실제 판매·전당·담보 여부와 정산 거부·잠적 시점 정리.</li>\n<li><strong>3단계 — 반환·정산 통지 (병행)</strong> — 내용증명으로 물건 반환·정산금 지급 요구.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사기·횡령 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 청구·집단 대응 (2개월 내)</strong> — 민사 반환·정산 청구·동일 업체 공동 신고 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">명품 위탁판매 미정산 사기 정산·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 위탁·고지의무·정산 갈래입니다.</strong></p>\n<ul>\n<li><strong>위탁판매 계약서·접수증 (위탁 내용)</strong></li>\n<li><strong>물건 감정가·진품 확인·사진 (대상·가치)</strong></li>\n<li><strong>정산 약정·수수료·지급 조건 자료</strong></li>\n<li><strong>판매 완료·미정산·정산 거부 대화 기록</strong></li>\n<li><strong>판매·전당·담보 은닉 정황 자료</strong></li>\n<li><strong>반환·정산 요구 내용증명·연락 기록</strong></li>\n<li><strong>업체·운영자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위탁 접수증과 정산 약정, 판매·정산 거부 대화를 함께 정리하면 고지의무 위반·기망 정황이 선명해집니다. 같은 업체 피해자를 모아 위탁·정산 자료를 묶으면 편취 대상 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고지의무·기망</strong> — 정산·반환 의사 없이 위탁판매인 척 속였는지.</li>\n<li><strong>편취 대상</strong> — 물건 자체인지 판매대금·정산금인지.</li>\n<li><strong>사기·횡령 구별</strong> — 위탁물 처분·정산금 유용이 어느 죄책에 가까운지.</li>\n<li><strong>손해 발생</strong> — 현실적 손해가 없어도 사기 성립 여지가 있는지.</li>\n<li><strong>업체 특정</strong> — 운영자·계좌·매장 정보로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (위탁판매·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반 묵비와 사기죄 성립',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 거래 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 신의성실의 원칙상 사전에 그 사정을 고지할 의무가 있고, 이를 묵비하면 부작위에 의한 기망으로 사기죄를 구성하며, 피해자에게 현실적 손해가 발생함을 요건으로 하지 않는다고 판시했습니다. 위탁판매 업체가 정산·반환 의사 없이 또는 판매·담보 사실을 숨기고 물건을 받은 사안을 살펴볼 때에도 고지의무·기망 기준을 검토해볼 수 있습니다.',
        takeaway: '미정산 + 판매·담보 은닉 + 잠적 결합 시 고지의무·정산 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '아직 안 팔렸다는데 사기가 되나요?',
        answer:
          '<strong>실제 판매·담보 여부와 정산 거부 정황이 핵심인 영역입니다.</strong> 위탁 접수증과 정산·연락 기록을 확보하세요.',
      },
      {
        question: '물건을 돌려달라는데 안 줘요. 어떻게 하나요?',
        answer:
          '<strong>내용증명으로 반환·정산을 요구하고 사기·횡령을 함께 검토할 수 있는 영역입니다.</strong> 위탁·판매 자료를 정리하세요.',
      },
      {
        question: '사기인지 횡령인지 헷갈려요.',
        answer:
          '<strong>위탁 당시 기망 여부와 위탁물 처분 경위로 죄책이 갈리는 영역입니다.</strong> 위탁 경위와 처분 정황을 정리하세요.',
      },
      {
        question: '아직 손해가 확정되지 않았는데 신고가 되나요?',
        answer:
          '<strong>현실적 손해가 확정되지 않아도 기망·교부로 사기 성립 여지가 있는 영역입니다.</strong> 위탁·정산 거부 정황을 정리하세요.',
      },
      {
        question: '업체가 잠적했는데 정산금을 받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '가축 위탁 사육 수익 보장 투자 기망 사기', href: '/guide/fraud/fraud-livestock-consignment-breeding-return-track' },
      { label: '단톡방 코인 시세조작 사기', href: '/guide/fraud/fraud-chatroom-coin-pump-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 5. fraud-loan-pretext-voice-phishing-track ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-pretext-voice-phishing-track',
    keyword: '대출빙자 보이스피싱 사기',
    questionKeyword: '‘저금리 대환대출, 기존 대출을 먼저 갚아야 한도가 나온다’는 금융기관 사칭 전화를 믿고, 시키는 대로 앱을 깔고 안내받은 계좌로 기존 대출 상환금·수수료를 이체했는데 알고 보니 전부 보이스피싱이었어요. 돈이 빠져나간 지 얼마 안 됐는데, 지급정지하고 피해금을 돌려받을 수 있나요?',
    ctaKeyword: '대출빙자 보이스피싱 지급정지·환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대출빙자 보이스피싱 — 5단계 지급정지·환급 점검 | 로앤가이드',
      description:
        '저금리 대환대출 빙자 전화에 앱을 깔고 계좌이체를 했다가 보이스피싱을 당했다면, 통신사기피해환급법의 지급정지·채권소멸·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘기존 대출을 저금리 대환대출로 갈아탈 수 있는데, 한도가 나오려면 기존 대출을 먼저 갚거나 신용점수를 맞춰야 한다’는 은행·캐피탈 사칭 전화를 받고, 상담사가 시키는 대로 원격제어·악성 앱을 설치하고 안내받은 계좌로 상환금·보증료·수수료를 이체한 분의 상황입니다. 그런데 정작 대출은 실행되지 않고, 통화가 끊긴 뒤에야 번호 가로채기·앱 조작으로 진짜 은행 연결까지 막혀 있었다는 걸 알아채 보이스피싱임을 깨닫고, 큰돈이 순식간에 빠져나가 막막하고 손이 떨리실 거예요. 빨리 막아야 하는데 어디부터 해야 할지 몰라 더 답답하셨을 거예요.」 형법 제347조 사기 및 컴퓨터등사용사기와 함께, 전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법은 전기통신금융사기 피해자에 대한 지급정지·채권소멸·피해금 환급 절차를 규정하는 영역입니다. 송금·이체 직후 신속한 지급정지 신청은 계좌에 남은 피해금의 환급 가능성과 직결될 수 있습니다. 판례는 위 특별법의 개정으로 처벌 범위가 확대·강화되었더라도 종전 행위에 대한 형이 폐지된 것이 아니라고 보아 전기통신금융사기 행위의 가벌성과 적용 법령을 명확히 한 사례 흐름이 있는 영역입니다. 사칭 전화 + 앱 설치 + 계좌이체 결합은 ‘지급정지·환급’ 절차가 가능한 트랙입니다. 피해자라면 ① 피해 정리 ② 지급정지 ③ 신고·확인원 ④ 피해구제·채권소멸 ⑤ 환급·기기 점검 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대출빙자 보이스피싱 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 피해·지급정지·신고·피해구제·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 피해 정리</strong> — 사칭 통화·앱 설치·이체 계좌·송금 내역 정리.</li>\n<li><strong>② 지급정지</strong> — 송금 은행·112에 즉시 지급정지 요청.</li>\n<li><strong>③ 신고·확인원</strong> — 경찰 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>④ 피해구제·채권소멸</strong> — 통신사기피해환급법에 따른 피해구제 신청·채권소멸 공고 검토.</li>\n<li><strong>⑤ 환급·기기 점검</strong> — 환급금 수령·악성 앱 제거·명의도용 점검 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보이스피싱 피해는 지급정지 시점이 환급 가능성을 좌우합니다. 이체 직후 곧바로 은행·112에 지급정지를 요청하고, 계좌에 남은 금액 범위에서 피해구제를 신청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 지급정지 (즉시)</strong> — 112·송금 은행 콜센터에 지급정지를 요청.</li>\n<li><strong>2단계 — 경찰 신고·확인원 (직후)</strong> — 경찰 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>3단계 — 피해구제 신청 (피해 직후)</strong> — 송금 은행에 피해구제 신청서 제출.</li>\n<li><strong>4단계 — 채권소멸 공고 (약 2개월)</strong> — 금융감독원 채권소멸 절차 진행 확인.</li>\n<li><strong>5단계 — 환급·기기 점검 (공고 후)</strong> — 환급금 수령, 악성 앱 제거·명의도용 점검.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대출빙자 보이스피싱 지급정지·환급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 피해·지급정지·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>사칭 통화 녹음·문자·앱 설치 안내 기록 (수법)</strong></li>\n<li><strong>이체·송금 내역·받는 계좌 정보 (피해 금액)</strong></li>\n<li><strong>지급정지 접수번호·은행 콜센터 기록</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고)</strong></li>\n<li><strong>피해구제 신청서·신분증 (환급)</strong></li>\n<li><strong>설치된 악성 앱·원격제어 흔적 캡처</strong></li>\n<li><strong>대출 사칭 업체·번호·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 지급정지 접수번호와 사건사고사실확인원을 먼저 확보하면 피해구제 신청이 빨라집니다. 악성 앱·원격제어 흔적은 명의도용·추가 피해 점검에 필요하니 함께 보존하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지급정지 시점</strong> — 이체 직후 신속 지급정지로 잔액을 보전했는지.</li>\n<li><strong>환급 범위</strong> — 계좌에 남은 피해금 범위에서 환급이 검토되는지.</li>\n<li><strong>대면편취·출금형</strong> — 송금형 외 수법도 환급 절차 대상인지.</li>\n<li><strong>명의도용</strong> — 앱·원격제어로 추가 대출·결제가 이뤄졌는지.</li>\n<li><strong>계좌 추적</strong> — 받는 계좌·중간 계좌를 추적할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·피해구제 상담)</strong></li>\n<li><strong>금융감독원 보이스피싱 지킴이 (통합 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신금융사기 처벌의 가벌성 유지',
        summary:
          '대법원 2024도7516(대법원, 2024.09.27 선고) 영역에서 법원은 전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법이 처벌 범위를 확대하고 법정형을 강화하는 방향으로 개정되었더라도, 종전 규정에 따라 처벌 대상이던 정보 입력 행위가 범죄를 구성하지 않게 되어 형이 폐지된 것은 아니라고 판시했습니다. 대출빙자 보이스피싱으로 이체·정보 입력이 이뤄진 사안에서 적용 법령과 가벌성을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '사칭 전화 + 앱 설치 + 계좌이체 결합 시 지급정지·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '방금 이체했는데 가장 먼저 뭘 해야 하나요?',
        answer:
          '<strong>112·송금 은행에 즉시 지급정지를 요청하는 것이 가장 먼저인 영역입니다.</strong> 받는 계좌·이체 내역을 준비해 신속히 신고하세요.',
      },
      {
        question: '돈이 이미 빠졌는데도 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액 범위에서 피해구제·환급을 검토할 수 있는 영역입니다.</strong> 지급정지가 빠를수록 환급 여지가 큽니다.',
      },
      {
        question: '앱을 깔았는데 다른 피해가 생길까요?',
        answer:
          '<strong>악성 앱·원격제어로 명의도용·추가 결제 위험이 있는 영역입니다.</strong> 앱 제거·명의도용 점검을 함께 진행하세요.',
      },
      {
        question: '대출 상환금으로 보낸 건데도 보이스피싱인가요?',
        answer:
          '<strong>기존 대출 상환 빙자도 전형적 대출사기형 수법인 영역입니다.</strong> 사칭 통화·안내 계좌 정황을 정리하세요.',
      },
      {
        question: '받는 계좌가 여러 개로 쪼개졌어요.',
        answer:
          '<strong>중간 계좌도 추적·지급정지 대상이 될 수 있는 영역입니다.</strong> 모든 송금 경로를 정리해 신고하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '보이스피싱 지급정지 범위', href: '/guide/fraud/voice-phishing-payment-freeze-scope' },
      { label: '무인매장 키오스크 결제 사기', href: '/guide/fraud/fraud-unmanned-store-payment-fraud' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 6. fraud-joint-venture-fund-recovery-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-joint-venture-fund-recovery-falsely-accused-defense',
    keyword: '동업자금 회수 분쟁 사기 무고',
    questionKeyword: '동업으로 함께 사업을 하면서 자금을 투입·회수하고 손익을 나눴는데, 사업이 어려워지고 정산이 어긋나자 동업자가 ‘처음부터 자기 돈을 빼돌릴 작정으로 끌어들였다’며 저를 사기로 고소했어요. 저는 함께 출자해 운영했고 자금도 사업에 썼으며 정산 다툼일 뿐인데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '동업자금 회수 분쟁 사기 무고 범의·공모 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동업자금 분쟁 사기 무고 방어 — 5단계 범의·공모 점검 | 로앤가이드',
      description:
        '동업자금 회수·정산 다툼을 사기로 고소당했다면, 형법 제347조 사기의 편취 범의·공모 입증 기준과 민사 정산 구별을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「동업·공동사업으로 함께 자금을 출자하고 사업을 운영하며 손익과 정산을 나누다, 매출 부진·자금 사정으로 사업이 어려워지고 출자금 회수·정산이 어긋나자, 손실을 본 동업자가 ‘처음부터 자기 돈만 빼돌릴 작정으로 동업으로 끌어들였다’, ‘공모해 편취했다’며 저를 사기로 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 함께 출자해 사업을 실제로 운영했고 자금도 임차료·인건비·재료비 등 사업에 사용했으며, 단지 동업 실패와 정산 다툼일 뿐인데, 결과적으로 손실이 났다는 이유로 사기·공모로 몰려 당혹스럽고 억울하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 동업·출자 당시 편취의 범의가 있었는지, 그리고 공모공동정범으로 다투어질 경우 공모와 범의가 엄격한 증명으로 인정되는지가 핵심 쟁점입니다. 판례는 공모공동정범에서 공모·범의는 범죄사실로서 엄격한 증명이 요구되고, 실행행위 관여 사실을 인정하면서도 공모·범의를 부인하는 경우 상당한 관련성이 있는 간접사실로 합리적으로 입증해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 출자·자금 사용·정산 경위를 정리해 다툴 수 있는 영역입니다. 공동 출자 + 자금 사업 사용 + 정산 다툼 결합은 ‘편취 범의·공모’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 동업 경위 정리 ② 편취 범의·공모 ③ 자금 사용처 ④ 정산·회수 경위 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동업자금 회수 분쟁 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동업 경위·편취 범의·자금 사용처·정산 경위·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동업 경위 정리</strong> — 동업 약정·출자 비율·역할 분담·운영 경위 정리.</li>\n<li><strong>② 편취 범의·공모</strong> — 출자 당시 편취 의사가 있었는지, 공모가 엄격히 증명되는지 검토.</li>\n<li><strong>③ 자금 사용처</strong> — 임차료·인건비·재료비 등 사업에 실제 사용한 자금 흐름 정리.</li>\n<li><strong>④ 정산·회수 경위</strong> — 손익 분배·출자금 회수·정산 다툼 경위 정리.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술·자료 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 동업 실패·정산 다툼 결과만으로 곧바로 사기가 되는 것이 아니라, 출자 당시 편취 범의가 있었는지와 공모가 엄격히 증명되는지가 분기점입니다. 범의·공모는 객관적 간접사실로 판단되므로 출자·자금 사용 내역으로 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동업·자금 정리 (즉시)</strong> — 동업 약정·출자·운영·정산 내역 정리.</li>\n<li><strong>2단계 — 자금 사용처 자료 확보 (1주)</strong> — 임차·인건비·재료비 등 사업 지출과 매출·운영 자료 확보.</li>\n<li><strong>3단계 — 범의·공모 쟁점 정리 (2주)</strong> — 편취 범의 부재와 공모 증명의 한계, 정산 다툼 경위 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">동업자금 회수 분쟁 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 동업 경위·범의·자금 사용처 갈래입니다.</strong></p>\n<ul>\n<li><strong>동업계약서·출자 약정·지분 자료 (거래 내용)</strong></li>\n<li><strong>출자금 입금·사업 지출 내역 (자금 흐름)</strong></li>\n<li><strong>임차·인건비·재료비 등 사업 운영 자료 (이행·사용)</strong></li>\n<li><strong>매출·손익·정산 기록 (사업 실체)</strong></li>\n<li><strong>출자금 회수·정산 협의·소통 기록</strong></li>\n<li><strong>고소장·상대 진술 모순·불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘출자 당시 편취 범의가 있었는지’와 ‘공모가 엄격히 증명되는지’입니다. 함께 출자·운영한 사업 실체와 자금 사용 흐름을 정돈하고, 손실이 동업 실패·정산 다툼 때문임을 구체적으로 짚으면 범의·공모 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 출자·동업 당시 편취 의사가 있었는지.</li>\n<li><strong>공모 증명</strong> — 공모·범의가 엄격한 증명으로 인정되는지.</li>\n<li><strong>자금 사용처</strong> — 받은 돈을 실제 사업에 사용했는지.</li>\n<li><strong>정산 다툼 구별</strong> — 민사 출자금·정산 다툼에 그치는지 기망인지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공모공동정범의 공모·범의 엄격 증명',
        summary:
          '대법원 2000도1899(대법원, 2000.07.07 선고) 영역에서 법원은 공모공동정범에서 공모·범의는 범죄사실을 구성하므로 엄격한 증명이 요구되고, 실행행위 관여 사실을 인정하면서도 공모·범의를 부인하는 경우 상당한 관련성이 있는 간접사실을 합리적으로 판단하는 방법으로 입증해야 한다고 판시했습니다. 동업자금 회수·정산 다툼을 사기·공모로 다투는 사안에서 편취 범의와 공모의 증명을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '공동 출자 + 자금 사업 사용 + 정산 다툼 결합 시 편취 범의·공모 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '동업하다 손해났을 뿐인데 사기로 고소당했어요.',
        answer:
          '<strong>동업 손실만으로는 부족하고 출자 당시 편취 범의가 있어야 하는 영역입니다.</strong> 출자·자금 사용·정산 자료를 정리하세요.',
      },
      {
        question: '공모했다고 하는데 어떻게 다투나요?',
        answer:
          '<strong>공모·범의는 엄격한 증명이 요구되는 영역입니다.</strong> 역할 분담·운영 경위와 상대 진술의 불부합을 짚으세요.',
      },
      {
        question: '받은 돈을 사업에 쓴 게 유리한가요?',
        answer:
          '<strong>자금 사용처가 사업과 관련됐는지가 범의 판단에 영향을 주는 영역입니다.</strong> 지출 내역을 항목별로 정리하세요.',
      },
      {
        question: '민사 정산과 형사 사기는 어떻게 구별되나요?',
        answer:
          '<strong>단순 출자금·정산 다툼에 그치는지, 편취 범의가 있는지로 갈리는 영역입니다.</strong> 동업 실패·정산 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 동업·자금 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '투자금 회수 지연 사기 고의 무고 방어', href: '/guide/fraud/fraud-investment-return-delay-intent-falsely-accused-defense' },
      { label: '가짜 쇼핑몰 사기', href: '/guide/fraud/fraud-fake-ecommerce-site-response' },
    ],
  },

  // ─── 7. sex-crime-karaoke-assistant-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-karaoke-assistant-track',
    keyword: '노래방 도우미 추행',
    questionKeyword: '노래방·유흥업소에서 도우미·접객 일을 하던 중, 손님이 ‘일하는 사람한테는 이래도 된다’는 식으로 갑자기 제 가슴·허벅지·엉덩이를 만지거나 끌어안아 큰 수치심과 모욕감을 느꼈어요. 일하는 자리라 제대로 항의하지 못했는데, 이런 접객 중 강제추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '노래방 도우미 추행 강제추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '노래방 도우미 추행 — 5단계 강제추행 해당성 점검 | 로앤가이드',
      description:
        '노래방·접객 중 손님이 신체를 만지거나 끌어안아 수치심을 느꼈다면, 형법 제298조 강제추행의 폭행·기습추행 기준을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「노래방·유흥주점에서 도우미·접객 일을 하던 중, 손님이 ‘돈 냈으니 괜찮다’, ‘일하는 사람한테는 이래도 된다’는 듯 갑자기 제 가슴·허벅지·엉덩이를 만지거나 강제로 끌어안고 입을 맞추려 해 큰 수치심과 모욕감을 느낀 분의 상황입니다. 일하는 자리이고 분위기에 눌려 그 자리에서 제대로 거부·항의하지 못한 채 시간을 버티고 나와, ‘이런 일을 하면 신고해도 인정될까’ 싶어 위축되고 막막하셨을 거예요. 직업과 무관하게 누구나 성적 자기결정권이 있는데도 ‘일이니까’라는 시선에 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 폭행 또는 협박은 상대의 항거를 곤란하게 할 정도일 것을 요하지 않고, 상대의 신체에 불법한 유형력을 행사하거나 공포심을 일으킬 정도의 해악을 고지하는 것으로 충분하며, 폭행행위 자체가 추행으로 인정되는 기습추행도 강제추행에 포함된다고 본 사례 흐름이 있는 영역입니다. 직업·장소와 무관하게 의사에 반한 접촉 + 기습 결합은 ‘강제추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 손님 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노래방 도우미 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·손님 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 일시·장소·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의사에 반한 접촉이 강제추행·기습추행인지, 항거곤란이 요건이 아닌 점 검토.</li>\n<li><strong>③ 증거 보전</strong> — 업소 CCTV·예약·호출 기록 보존 요청.</li>\n<li><strong>④ 손님 특정</strong> — 예약·결제·동석자·CCTV로 손님 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직업·장소와 무관하게 의사에 반한 접촉은 강제추행으로 평가될 수 있고, 항거를 곤란하게 할 정도가 아니어도 기습추행이 성립할 수 있다는 점이 분기점입니다. 업소 CCTV는 보존 기간이 짧으므로 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 일시·장소·접촉 부위·방식·반복 정황 정리.</li>\n<li><strong>2단계 — CCTV·기록 확보 (즉시)</strong> — 업소 CCTV·예약·호출·결제 기록 보존 요청.</li>\n<li><strong>3단계 — 업소·운영자 협조 (직후)</strong> — 업소에 영상·동석자 기록 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노래방 도우미 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·접촉 정황 메모</strong></li>\n<li><strong>업소 CCTV 보존 요청 자료</strong></li>\n<li><strong>예약·호출·결제·동석자 기록 (손님 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>동료·종업원·목격자 진술·연락처</strong></li>\n<li><strong>옷·신체 접촉 부위 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 업소 CCTV·호출 기록은 보존 기간이 짧으므로 곧바로 업소에 보존을 요청하는 것이 중요합니다. 예약·결제·동석자 기록으로 손님을 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>폭행·협박 정도</strong> — 항거곤란이 아니어도 유형력 행사·기습추행이 성립하는지.</li>\n<li><strong>직업·동의 항변</strong> — 접객이라 동의했다는 주장과 의사에 반한 접촉의 구별.</li>\n<li><strong>손님 특정</strong> — 예약·결제·CCTV로 손님을 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·동석자 진술·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 폭행·협박의 의미와 기습추행',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 폭행 또는 협박은 상대의 항거를 곤란하게 할 정도일 것을 요하지 않고, 상대의 신체에 불법한 유형력을 행사하거나 일반적으로 공포심을 일으킬 정도의 해악을 고지하는 것으로 충분하다고 종래 법리를 변경해 판시했습니다. 접객 중 의사에 반한 신체 접촉을 강제추행으로 다투는 사안을 살펴볼 때에도 폭행·협박의 의미와 기습추행 기준을 검토해볼 수 있습니다.',
        takeaway: '직업·장소와 무관한 의사에 반한 접촉 + 기습 결합 시 강제추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '접객 일을 하는데도 강제추행이 되나요?',
        answer:
          '<strong>직업·장소와 무관하게 의사에 반한 접촉은 추행으로 평가될 수 있는 영역입니다.</strong> 접촉 부위·방식·거부 정황을 정리하세요.',
      },
      {
        question: '세게 누른 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>항거를 곤란하게 할 정도가 아니어도 기습추행이 성립할 수 있는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>일하는 자리라 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '손님을 어떻게 특정하나요?',
        answer:
          '<strong>예약·결제·동석자 기록과 CCTV로 특정할 수 있는 영역입니다.</strong> 업소 영상·호출 기록 보존부터 요청하세요.',
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
      { label: '마사지샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-treatment-pretext-touch-report-track' },
      { label: '마사지샵·스파 시술자 부적절 접촉 피해', href: '/guide/sex-crime/sex-crime-massage-shop-therapist-inappropriate-touch-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '마사지샵 시술 중 접촉 추행 무고 방어', href: '/guide/sex-crime/sex-crime-massage-shop-customer-falsely-accused-defense' },
    ],
  },

  // ─── 8. sex-crime-foot-massage-shop-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-foot-massage-shop-track',
    keyword: '발마사지 업소 추행',
    questionKeyword: '발마사지·스파·테라피 업소에서 관리를 받던 중, 관리사가 ‘마사지 동작’이라는 핑계로 제 허벅지 안쪽·가슴·엉덩이 등을 만지거나 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느꼈어요. 시술 중이라 항의도 못 했는데, 이런 마사지 업소 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '발마사지 업소 추행 기습추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '발마사지 업소 추행 — 5단계 기습추행 해당성 점검 | 로앤가이드',
      description:
        '마사지·스파 시술 중 관리사가 신체를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 기습추행·추행 해당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「발마사지·전신 스파·테라피 업소에서 관리를 받으려 누웠다가, 관리사가 ‘마사지 동작’, ‘혈자리·림프 관리’라는 핑계로 제 허벅지 안쪽·가슴·엉덩이·골반 등을 만지거나 필요 이상으로 몸을 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 어두운 관리실에 둘만 있고 시술 중이라 ‘원래 이런 동작인가’ 헷갈려 그 자리에서 제대로 항의하지 못한 채 관리를 마치고 나와, 정상 시술이었는지 추행이었는지 혼란스러워 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 폭행행위 자체가 추행으로 인정되는 기습추행의 경우 그 폭행은 상대의 의사를 억압할 정도일 필요 없이 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문하고, 추행 여부는 피해자의 의사·성별·연령·관계·경위·구체적 태양·주위 상황 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 시술 빙자 + 의사에 반한 접촉 + 회피 곤란 환경 결합은 ‘기습추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 관리사 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 발마사지 업소 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·관리사 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 시술 일시·장소·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 시술을 넘어선 의사에 반한 접촉이 추행인지, 기습추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 업소 예약·결제·관리실 CCTV 보존 요청.</li>\n<li><strong>④ 관리사 특정</strong> — 예약·근무·배정 기록으로 관리사 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 마사지 동작을 빙자한 접촉이라도 의사에 반하면 추행으로 평가될 수 있고, 의사에 반하는 유형력이 있으면 힘의 대소를 불문하고 기습추행이 될 수 있다는 점이 분기점입니다. 예약·CCTV는 보존 기간이 짧으므로 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 시술 일시·장소·접촉 부위·방식·반복 정황 정리.</li>\n<li><strong>2단계 — 예약·CCTV 확보 (즉시)</strong> — 업소 예약·결제·관리실 CCTV 보존 요청.</li>\n<li><strong>3단계 — 업소·운영자 협조 (직후)</strong> — 업소에 영상·근무·배정 기록 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">발마사지 업소 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>시술 일시·장소·접촉 정황 메모</strong></li>\n<li><strong>업소 예약·결제·시술 내역 (시술 특정)</strong></li>\n<li><strong>관리실·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>다른 이용자·종업원·목격자 진술·연락처</strong></li>\n<li><strong>접촉 부위·시술 태양 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예약·결제·CCTV는 보존 기간이 짧으므로 곧바로 업소에 보존을 요청하는 것이 중요합니다. 예약·근무 배정 기록으로 관리사를 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술을 넘어선 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행</strong> — 의사에 반하는 유형력이면 힘의 대소를 불문하고 추행이 되는지.</li>\n<li><strong>시술 빙자</strong> — 마사지 동작을 빙자한 추행인지 정당한 시술인지.</li>\n<li><strong>관리사 특정</strong> — 예약·근무·배정 기록으로 관리사를 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·정황·진술로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 폭행 정도와 추행 판단',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 기습추행의 경우 추행행위와 동시에 저질러지는 폭행행위는 상대의 의사를 억압할 정도일 필요 없이 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문하고, 추행 여부는 피해자의 의사·성별·연령·관계·경위·구체적 태양·주위 상황을 종합해 신중히 판단해야 한다고 판시했습니다. 마사지 시술을 빙자한 의사에 반한 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '시술 빙자 + 의사에 반한 접촉 + 회피 곤란 환경 결합 시 기습추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '마사지 동작인지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>시술을 넘어선 의사에 반한 접촉인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '세게 만진 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>의사에 반하는 유형력이면 힘의 대소를 불문하고 기습추행이 되는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: '시술 중이라 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>시술 중이라 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '관리사를 어떻게 특정하나요?',
        answer:
          '<strong>예약·근무·배정 기록과 CCTV로 특정할 수 있는 영역입니다.</strong> 업소 영상·예약 기록 보존부터 요청하세요.',
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
      { label: '네일샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-nail-salon-service-pretext-touch-report-track' },
      { label: '마사지샵 불법 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-forced-touch-report-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '마사지샵 업주 강제추행', href: '/guide/sex-crime/sex-crime-massage-shop-owner-track' },
    ],
  },

  // ─── 9. sex-crime-subway-upskirt-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-subway-upskirt-track',
    keyword: '지하철 객실 불법촬영',
    questionKeyword: '지하철·전철 객실이나 에스컬레이터에서 누군가 휴대전화를 제 다리·치마 아래로 들이대고 몰래 촬영하는 것을 발견했거나, 셀카봉·각도를 이용해 제 신체를 찍는 것 같아 너무 놀랐어요. 현장에서 바로 잡지는 못했는데, 이런 지하철 불법촬영을 신고하고 가해자를 처벌할 수 있나요?',
    ctaKeyword: '지하철 객실 불법촬영 신고·증거보전 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '지하철 객실 불법촬영 — 5단계 신고·증거보전 점검 | 로앤가이드',
      description:
        '지하철 객실·에스컬레이터에서 몰래 촬영당했다면, 성폭력처벌법 제14조 카메라등이용촬영죄의 증거보전과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출퇴근길 지하철·전철 객실이나 에스컬레이터·계단에서, 옆이나 뒤에 선 사람이 휴대전화를 제 다리·치마·하반신 쪽으로 비스듬히 들이대거나 셀카봉·반사 각도를 이용해 제 신체를 몰래 촬영하는 것을 발견하고 큰 충격과 수치심을 느낀 분의 상황입니다. 사람이 많고 움직이는 공간이라 그 자리에서 곧바로 휴대전화를 확인하거나 붙잡지 못한 채 내려야 했고, 이미 찍힌 영상이 어디로 퍼졌을지 두려워 잠도 못 이루실 만큼 막막하셨을 거예요.」 성폭력처벌법 제14조 제1항은 카메라나 그 밖에 이와 유사한 기능을 갖춘 기계장치를 이용하여 성적 욕망·수치심을 유발할 수 있는 사람의 신체를 그 의사에 반하여 촬영한 자를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 위 조항의 보호법익이 피해자의 성적 자유, 함부로 촬영당하지 않을 자유, 그 의사에 반해 촬영물이 유포되지 않을 자유라고 보아, 촬영·유포 행위의 가벌성과 보호 범위를 폭넓게 인정한 사례 흐름이 있는 영역입니다. 사적 신체 촬영 + 의사에 반한 촬영 + 공공장소 결합은 ‘신고·증거보전’ 절차가 가능한 트랙입니다. 피해자라면 ① 현장·정황 정리 ② 촬영 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·삭제·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 객실 불법촬영 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·촬영 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장·정황 정리</strong> — 일시·호선·역·차량 번호·촬영 방향·인상착의 정리.</li>\n<li><strong>② 촬영 해당성</strong> — 의사에 반해 신체를 촬영했는지, 미수·소지도 포함되는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 역사·차량 CCTV, 목격자, 직접 찍은 정황 사진 보전.</li>\n<li><strong>④ 가해자 특정</strong> — 역무원·경찰 협조, CCTV·교통카드로 가해자 특정.</li>\n<li><strong>⑤ 신고·삭제·보호</strong> — 112·지하철 보안관·디지털성범죄피해자지원센터 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공공장소에서 의사에 반해 신체를 촬영했는지가 분기점이고, 현장에서 바로 잡지 못해도 역사·차량 CCTV로 가해자를 특정할 여지가 있습니다. 일시·호선·차량 번호를 정확히 적어 즉시 역무원·경찰에 알리는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·정황 기록 (즉시)</strong> — 일시·호선·역·차량 번호·촬영 방향·인상착의를 곧바로 기록.</li>\n<li><strong>2단계 — 역무원·보안관 협조 (즉시)</strong> — 지하철 보안관·역무실에 알려 CCTV 보존 요청.</li>\n<li><strong>3단계 — 경찰 신고·기기 확보 (직후)</strong> — 112·지하철경찰대 신고, 적법 절차로 기기·영상 확보 협조.</li>\n<li><strong>4단계 — 삭제·확산 차단 (병행)</strong> — 디지털성범죄피해자지원센터에 삭제·확산 차단 지원 요청.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 객실 불법촬영 신고·증거보전 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장·촬영 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·호선·역·차량 번호·촬영 방향 메모</strong></li>\n<li><strong>가해자 인상착의·동선 정황 기록</strong></li>\n<li><strong>역사·차량 CCTV 보존 요청 자료</strong></li>\n<li><strong>직접 촬영한 정황 사진·영상 (현장 자료)</strong></li>\n<li><strong>목격자·동승자 진술·연락처</strong></li>\n<li><strong>교통카드·승하차 기록 (동선 특정)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 역사·차량 CCTV는 보존 기간이 짧으므로 곧바로 역무원·경찰에 보존을 요청하는 것이 중요합니다. 일시·호선·차량 번호와 인상착의·동선을 정확히 기록하면 가해자 특정에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영 해당성</strong> — 의사에 반해 성적 수치심 유발 신체를 촬영했는지.</li>\n<li><strong>미수·소지</strong> — 촬영 미수·촬영물 소지도 처벌 대상이 되는지.</li>\n<li><strong>현장 미검거</strong> — 즉시 붙잡지 못해도 CCTV로 특정할 수 있는지.</li>\n<li><strong>증거 적법성</strong> — 기기·영상이 적법 절차로 확보됐는지.</li>\n<li><strong>유포·확산</strong> — 촬영물이 이미 유포됐는지, 삭제·차단이 필요한지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·지하철경찰대 (현장 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (삭제·확산 차단 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 카메라등이용촬영죄의 보호법익과 성적 자유',
        summary:
          '대법원 2024도18718(대법원, 2025.04.15 선고) 영역에서 법원은 성폭력처벌법 제14조의 보호법익은 피해자의 성적 자기결정권·인격권 보호와 건전한 성풍속 확립으로서, 구체적으로 인격체인 피해자의 성적 자유, 함부로 촬영당하지 않을 자유, 그 의사에 반해 촬영물이 유포되지 않을 자유를 보호하기 위한 것이라고 판시했습니다. 지하철에서 의사에 반해 신체를 촬영·유포한 사안을 살펴볼 때에도 이러한 보호법익 기준을 검토해볼 수 있습니다.',
        takeaway: '사적 신체 촬영 + 의사에 반한 촬영 + 공공장소 결합 시 신고·증거보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '현장에서 못 잡았는데도 신고가 되나요?',
        answer:
          '<strong>역사·차량 CCTV로 가해자를 특정할 여지가 있는 영역입니다.</strong> 일시·호선·차량 번호·인상착의를 즉시 기록하세요.',
      },
      {
        question: '찍은 것 같은데 확실하지 않아요. 신고해도 되나요?',
        answer:
          '<strong>촬영 미수도 처벌 대상이 될 수 있는 영역입니다.</strong> 촬영 방향·기기·정황을 구체적으로 적어 신고하세요.',
      },
      {
        question: '제가 그 사람을 찍어도 되나요?',
        answer:
          '<strong>정황 확보 자료가 될 수 있으나 적법 절차 확보가 중요한 영역입니다.</strong> 역무원·경찰에 알려 CCTV·기기 확보를 요청하세요.',
      },
      {
        question: '이미 촬영물이 퍼졌을까 걱정돼요.',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제·확산 차단 지원을 받아볼 수 있는 영역입니다.</strong> 신고와 함께 지원을 요청하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>여성긴급전화 1366·디지털성범죄피해자지원센터에서 상담을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '지하철 불법촬영', href: '/guide/sex-crime/sex-crime-subway-illegal-filming-track' },
      { label: '공중화장실 불법촬영', href: '/guide/sex-crime/sex-crime-public-restroom-hidden-camera-track' },
      { label: '협박 성적영상 유포', href: '/guide/sex-crime/sex-crime-sextortion-image-threat-track' },
      { label: '마사지샵 추행', href: '/guide/sex-crime/sex-crime-massage-shop-track' },
    ],
  },

  // ─── 10. sex-crime-club-afterparty-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-afterparty-falsely-accused-defense',
    keyword: '동호회 뒤풀이 추행 무고',
    questionKeyword: '동호회·모임 뒤풀이 술자리에서 좁은 자리에 끼어 앉거나 부축·인사 과정에서 생긴 접촉을 두고, 상대가 저를 강제추행으로 고소했어요. 저는 추행할 의도도 없었고 우연한 접촉이거나 사실과 다른 부분이 있는데, 상대 진술 위주로 수사가 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어하나요?',
    ctaKeyword: '동호회 뒤풀이 추행 무고 진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동호회 뒤풀이 추행 무고 방어 — 5단계 진술 신빙성 점검 | 로앤가이드',
      description:
        '뒤풀이 자리 접촉을 강제추행으로 고소당했다면, 형법 제298조 추행 해당성과 피해자 진술의 신빙성 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「동호회·동창·회사 모임 뒤풀이 술자리에서, 좁은 테이블에 끼어 앉거나 자리를 옮기며 부축·인사·건배를 하는 과정에서 생긴 신체 접촉을 두고, 상대가 ‘추행을 당했다’며 저를 강제추행으로 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 추행할 의도가 전혀 없었고 우연한 접촉이거나 상대 진술과 사실관계가 다른 부분이 있는데, 직접 증거가 상대 진술 위주이고 술자리라 기억·정황이 엇갈려 어떻게 다퉈야 할지 막막하고 억울하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 혐의를 받고 있다면, 문제 된 접촉이 추행에 해당하는지, 그리고 직접 증거가 사실상 피해자 진술뿐인 경우 그 진술이 합리적 의심을 배제할 신빙성을 갖추었는지가 핵심 쟁점입니다. 판례는 피고인이 공소사실을 부인하고 직접 증거가 사실상 피해자 진술이 유일한 성범죄 사건에서, 진술의 주요 부분이 일관되고 구체적인지, 논리·경험칙에 부합하는지, 객관적 사실과 모순되지 않는지, 허위 진술 동기가 있는지를 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 접촉 경위·정황·진술 모순을 정리해 다툴 수 있는 영역입니다. 우연·일상 접촉 + 진술 위주 + 정황 다툼 결합은 ‘추행 해당성·진술 신빙성’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 해당성 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동호회 뒤풀이 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 술자리 좌석·동선·접촉 경위·시간대 정리.</li>\n<li><strong>② 추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 피해자 진술이 일관·구체·객관 사실과 부합하는지 검토.</li>\n<li><strong>④ 정황·증거</strong> — CCTV·동석자 진술·메시지로 정황을 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉 사실이 있다는 것만으로 곧바로 추행이 되는 것이 아니라, 그 접촉이 추행에 해당하는지와 피해자 진술이 합리적 의심을 배제할 신빙성을 갖추는지가 분기점입니다. 술자리 정황·동석자 진술로 진술의 일관성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·좌석 정리 (즉시)</strong> — 술자리 좌석·동선·접촉 경위·시간대 정리.</li>\n<li><strong>2단계 — 정황·증거 확보 (1주)</strong> — CCTV·동석자 진술·메시지·결제 기록 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 피해자 진술과 객관 정황의 불부합·모순 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동호회 뒤풀이 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>술자리 좌석·동선·접촉 경위 메모</strong></li>\n<li><strong>업소·이동 경로 CCTV 보존 요청 자료</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>사건 전후 메시지·통화·SNS 기록</strong></li>\n<li><strong>결제·예약·시간대 객관 자료 (동선 특정)</strong></li>\n<li><strong>피해자 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉이 추행에 해당하는지’와 ‘피해자 진술이 합리적 의심을 배제할 신빙성을 갖추는지’입니다. 좌석·동선·시간대 같은 객관 정황과 동석자 진술을 정돈해 진술의 일관성·부합 여부를 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>진술 신빙성</strong> — 피해자 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>우연·일상 접촉</strong> — 좁은 자리·부축 등 우연한 접촉인지 추행인지.</li>\n<li><strong>허위 동기</strong> — 허위로 불리한 진술을 할 동기·이유가 있는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술이 유일한 성범죄의 신빙성 판단',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하고 직접 증거가 사실상 피해자 진술이 유일한 성범죄 사건에서, 진술 내용의 주요 부분이 일관·구체적인지, 논리·경험칙에 부합하고 객관적 사실과 모순되지 않는지, 허위로 불리한 진술을 할 동기가 있는지를 종합해 신중히 판단해야 한다고 판시했습니다. 뒤풀이 자리 접촉을 추행으로 다투는 사안에서 진술 신빙성과 추행 해당성을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '우연·일상 접촉 + 진술 위주 + 정황 다툼 결합 시 추행 해당성·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '우연히 닿은 것뿐인데 추행으로 고소당했어요.',
        answer:
          '<strong>접촉 사실만으로는 부족하고 추행 해당성과 진술 신빙성이 핵심인 영역입니다.</strong> 좌석·동선·접촉 경위를 정리하세요.',
      },
      {
        question: '상대 진술뿐인데도 처벌되나요?',
        answer:
          '<strong>진술이 유일한 증거면 합리적 의심을 배제할 신빙성이 요구되는 영역입니다.</strong> 진술 모순·객관 정황 불부합을 짚으세요.',
      },
      {
        question: '술자리라 기억이 흐릿한데 불리한가요?',
        answer:
          '<strong>객관 정황·동석자 진술로 사실관계를 보강할 수 있는 영역입니다.</strong> CCTV·메시지·결제 기록을 확보하세요.',
      },
      {
        question: '상대가 왜 이렇게 진술하는지 모르겠어요.',
        answer:
          '<strong>허위로 불리한 진술을 할 동기·경위도 신빙성 판단 요소인 영역입니다.</strong> 사건 전후 관계·정황을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 경위·정황 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 무고 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '성범죄 무고 방어 전략', href: '/guide/sex-crime/sex-crime-false-accusation-defense' },
      { label: '마사지샵 시술 중 추행', href: '/guide/sex-crime/sex-crime-massage-shop-treatment-track' },
      { label: '화상과외 음란행위 노출', href: '/guide/sex-crime/sex-crime-online-video-tutoring-indecent-exposure-track' },
      { label: '성범죄 초범 처벌 수위와 대응 방법', href: '/guide/sex-crime/sex-crime-first-offense-response' },
    ],
  },
];
