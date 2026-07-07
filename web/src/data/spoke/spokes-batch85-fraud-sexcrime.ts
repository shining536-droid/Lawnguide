import { SpokePage } from '../spoke-pages';

// batch85 fraud(6) + sex-crime(4) — 10개 (2026-06-02)
//
// 고유 존재 이유:
// 1. fraud-secondhand-luxury-bag-counterfeit-track — 일반 중고거래류와 분기. '정품이라며 판 중고 명품백이 가품이었던' 부작위 기망·고지의무 판단형 트랙(victim).
// 2. fraud-monthly-rent-double-contract-deposit-track — 일반 부동산 사기류와 분기. '월세 이중계약으로 보증금을 편취당한' 기망·재물교부·증거 판단형 트랙(victim).
// 3. fraud-online-mall-nondelivery-prepayment-track — 일반 미배송류와 분기. '온라인몰에 선결제했으나 물건이 오지 않고 잠적' 편취 고의·지급정지 절차형 트랙(victim).
// 4. fraud-romance-overseas-remittance-track — 일반 로맨스스캠류와 분기. '연인 관계를 가장해 해외송금을 유도' 편취액 전부·송금 판단형 트랙(victim).
// 5. fraud-unlisted-stock-pre-ipo-track — 일반 투자사기류와 분기. '상장 임박을 미끼로 비상장주식 투자를 유도' 피해자별 죄수·편취 판단형 트랙(victim).
// 6. fraud-voice-phishing-cashout-courier-falsely-accused-defense — 일반 사기 무고류와 분기. '보이스피싱 현금수거 가담으로 입건' 공모·고의 부인 방어 판단형 트랙(accused).
// 7. sex-crime-taxi-passenger-asleep-track — 일반 추행류와 분기. '택시에서 잠든 승객을 추행' 준강제추행·심신상실·항거불능 판단형 트랙(victim).
// 8. sex-crime-massage-shop-treatment-track — 일반 강제추행류와 분기. '마사지·시술 중 추행' 폭행·협박 의미 변경 법리 판단형 트랙(victim).
// 9. sex-crime-deepfake-synthetic-image-track — 일반 불법촬영류와 분기. '딥페이크 합성 성착취물 제작·유포' 반포·상영 공연성 절차형 트랙(victim).
// 10. sex-crime-workplace-superior-contact-falsely-accused-defense — 일반 성범죄 무고류와 분기. '직장 상사 신체접촉을 추행으로 고소당함' 기습추행·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch85FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-secondhand-luxury-bag-counterfeit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-luxury-bag-counterfeit-track',
    keyword: '중고 명품백 가품 판매 사기',
    questionKeyword: '중고 거래로 \'100% 정품\'이라는 명품백을 시세에 가깝게 샀는데, 정품 감정을 받아보니 가품이라는 결과가 나왔어요. 판매자는 \'본인도 정품인 줄 알았다\'며 발뺌하는데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고 명품백 가품 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 명품백 가품 판매 사기 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '정품이라던 중고 명품백이 가품으로 감정됐다면, 형법 제347조 사기의 부작위 기망·고지의무, 정품 시세와 가품 가치의 차액 손해, 계약 해제·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래로 \'100% 정품\', \'정품 영수증 있음\'이라는 명품백을 정품 시세에 가깝게 샀는데, 막상 정품 감정을 받아보니 가품이라는 결과가 나온 분의 상황입니다. 판매자는 \'본인도 정품인 줄 알았다\'며 발뺌하고, 큰돈을 주고 가품을 떠안은 셈이라 막막하실 거예요. 어디서부터 따져야 할지 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고, 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품임을 알거나 의심하면서도 정품이라 표시·고지하고 정품 시세로 판 정황은 기망행위로 평가될 여지가 있고, 매매대금 지급이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 부작위에 의한 기망에서 법률상 고지의무의 근거가 되는 거래 내용·거래관행 등 거래실정에 관한 사실의 증명책임이 검사에게 있다고 보고, 고지의무 인정 범위를 신중히 판단해온 사례 흐름이 있는 영역입니다. 정품 표시 + 가품 감정 + 정품 시세 매도 결합은 \'고지의무·기망 고의\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·물건 정리 ② 기망·고지 ③ 손해 산정 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품백 가품 판매 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 고지·손해 산정·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·물건 정리</strong> — 거래 글·정품 표시 문구·대화·물품·감정 결과 정리.</li>\n<li><strong>② 기망·고지</strong> — 가품을 정품으로 표시·고지하고 정품 시세로 판 정황 정리.</li>\n<li><strong>③ 손해 산정</strong> — 지급한 대금과 가품의 실제 가치 차액 등 손해 정리.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 매매계약 해제·손해배상·부당이득 반환 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'정품\'이라는 표시·고지와 실제 가품의 불일치, 그리고 판매자가 가품 가능성을 알거나 의심했는지가 기망 판단의 핵심입니다. 거래 글의 정품 표시 문구와 공신력 있는 감정 결과를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·물건 자료 보존 (즉시)</strong> — 거래 글·정품 표시·대화·결제 내역·물품 현상 보존.</li>\n<li><strong>2단계 — 정품 감정 확보 (1주)</strong> — 공신력 있는 감정으로 가품 여부·근거를 서면화.</li>\n<li><strong>3단계 — 경찰 신고·소비자상담 (병행)</strong> — 사이버범죄 신고 ECRM·한국소비자원 1372 상담.</li>\n<li><strong>4단계 — 기망 정황 제출 (조사 단계)</strong> — 정품 표시·정품 시세 매도·감정 결과 정황 제출.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 계약 해제·손해배상·차액 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품백 가품 판매 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 고지·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래 글·정품 표시 문구 캡처 (고지 내용)</strong></li>\n<li><strong>판매자와의 대화·고지 기록 (정품 보증 정황)</strong></li>\n<li><strong>정품 감정서·감정 근거 (가품 입증)</strong></li>\n<li><strong>물품 사진·시리얼·부속품 현상</strong></li>\n<li><strong>대금 결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>정품 시세 자료 (차액 손해 산정)</strong></li>\n<li><strong>판매자 계정·연락처·거래 이력 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'100% 정품\', \'정품 보장\' 같은 표시 문구와 공신력 있는 감정 결과를 대조하면 기망 정황이 드러나는 경우가 많습니다. 거래 글·대화 원본과 정품 시세 자료를 함께 정리하면 차액 손해 뒷받침에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 가품임을 알거나 의심하면서 정품으로 표시·고지했는지.</li>\n<li><strong>고지의무</strong> — 거래 내용·거래관행상 가품 가능성을 알릴 의무가 있었는지.</li>\n<li><strong>판매자 인식</strong> — \'본인도 정품인 줄 알았다\'는 항변의 다툼(미필적 인식 포함).</li>\n<li><strong>손해 산정</strong> — 정품 시세와 가품 가치의 차액.</li>\n<li><strong>거래 형태</strong> — 개인 직거래·플랫폼·중개 책임 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·물품 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 고지의무의 증명책임',
        summary:
          '대법원 2022도16422(대법원, 2023.06.29 선고) 영역에서 법원은 사기죄에서 부작위에 의한 기망이 인정되려면 법률상 고지의무가 있어야 하고, 그 고지의무의 근거가 되는 거래의 내용이나 거래관행 등 거래실정에 관한 사실은 검사가 주장·증명할 책임이 있다고 보면서, 고지의무가 있었다거나 피해자가 착오 상태에서 처분했다고 단정하기 어렵다며 유죄로 본 원심에 법리오해의 잘못이 있다고 판시했습니다. 정품이라며 판 명품백이 가품이었던 사안에서 고지의무·기망 성립을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '정품 표시 + 가품 감정 + 정품 시세 매도 결합 시 고지의무·기망 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 자기도 몰랐다는데 사기가 되나요?',
        answer:
          '<strong>가품임을 알거나 미필적으로 의심한 정황이 있는지가 핵심인 영역입니다.</strong> 정품 표시 문구·대화를 정리하세요.',
      },
      {
        question: '가품이라는 걸 어떻게 입증하나요?',
        answer:
          '<strong>공신력 있는 정품 감정 결과가 핵심 증거가 되는 영역입니다.</strong> 감정서와 그 근거를 서면으로 확보하세요.',
      },
      {
        question: '\'정품\'이라고 글에만 적혀 있어도 다툴 수 있나요?',
        answer:
          '<strong>거래 글의 표시 문구도 고지 내용으로 다툼의 자료가 되는 영역입니다.</strong> 거래 글 원본을 캡처해 보존하세요.',
      },
      {
        question: '이미 가방을 사용했는데도 환급이 되나요?',
        answer:
          '<strong>계약 해제·차액 손해배상으로 다툼을 검토할 수 있는 영역입니다.</strong> 정품 시세와의 차액을 정리하세요.',
      },
      {
        question: '형사와 민사를 같이 진행할 수 있나요?',
        answer:
          '<strong>사기 고소와 계약 해제·손해배상은 병행해볼 수 있는 영역입니다.</strong> 자료를 갖춰 함께 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '중고거래 에스크로 미이행 사기', href: '/guide/fraud/fraud-secondhand-escrow-fallback-response' },
      { label: '사기/재산범죄 종합 가이드', href: '/guide/fraud' },
      { label: '월세 원룸 이중임대 보증금 사기', href: '/guide/fraud/fraud-oneroom-double-contract-track' },
      { label: '경매 가짜 입찰자 가격 부풀리기', href: '/guide/fraud/fraud-auction-shill-bidding-fake-bidder-track' },
    ],
  },

  // ─── 2. fraud-monthly-rent-double-contract-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-monthly-rent-double-contract-deposit-track',
    keyword: '월세 이중계약 보증금 편취',
    questionKeyword: '집주인이라는 사람과 월세 계약을 하고 보증금을 보냈는데, 알고 보니 그 집은 이미 다른 사람과 계약된 집이거나 계약 권한이 없는 사람이었어요. 같은 집을 여러 명에게 계약한 이중계약 같은데, 보증금을 돌려받을 수 있나요?',
    ctaKeyword: '월세 이중계약 보증금 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '월세 이중계약 보증금 편취 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '계약 권한 없는 사람과 월세 이중계약 후 보증금을 잃었다면, 형법 제347조 사기의 기망 고의와 재물 교부, 등기부 권리관계 확인, 계약 무효·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「집주인 또는 대리인이라는 사람과 월세 계약을 하고 보증금을 보냈는데, 알고 보니 그 집은 이미 다른 사람과 계약돼 있거나 계약 권한이 없는 사람이었던 분의 상황입니다. 같은 집을 여러 명에게 계약하거나, 권한 없이 보증금만 받아 가로챈 이중계약 정황이라 큰돈을 잃을까 막막하실 거예요. 입주도 못 하고 연락도 끊겨 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 계약 권한·진정한 임대 의사 없이 정상 계약인 것처럼 속여 보증금을 받은 정황은 기망행위로 평가될 여지가 있고, 보증금 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 한편 수사 과정에서 휴대전화 등 전자정보가 혐의사실 관련성 없이 임의로 출력·복제됐다면 위법수집증거 문제가 다퉈질 수 있는 사례 흐름도 있는 영역입니다. 권한 없는 계약 + 이중계약 + 보증금 이체 결합은 \'기망 고의·재물 교부\' 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·송금 정리 ② 기망 고의 ③ 권리관계 확인 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 월세 이중계약 보증금 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·기망 고의·권리관계·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·송금 정리</strong> — 임대차계약서·상대 신분·보증금 이체 내역·대화 정리.</li>\n<li><strong>② 기망 고의</strong> — 계약 권한·임대 의사 없이 정상 계약처럼 속인 정황 정리.</li>\n<li><strong>③ 권리관계 확인</strong> — 등기부·집주인 본인 여부·기존 계약 존부 확인.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 계약 무효·보증금 반환·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상대가 진정한 임대 권한이 있었는지, 같은 집을 이미 다른 사람과 계약했는지가 기망 판단의 핵심입니다. 등기부등본으로 소유자·권리관계를 확인하고 보증금 이체 내역을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·송금 자료 보존 (즉시)</strong> — 계약서·신분증 사본·보증금 이체·대화 보존.</li>\n<li><strong>2단계 — 권리관계 확인 (1주)</strong> — 등기부등본·소유자 본인 여부·기존 계약 존부 확인.</li>\n<li><strong>3단계 — 지급정지·경찰 신고 (병행)</strong> — 보증금 송금분 지급정지 요청·사이버범죄 신고.</li>\n<li><strong>4단계 — 기망 정황 제출 (조사 단계)</strong> — 권한 없는 계약·이중계약 정황 제출.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 계약 무효·보증금 반환·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">월세 이중계약 보증금 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·기망 고의·권리관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 (계약 내용·당사자)</strong></li>\n<li><strong>상대 신분증·위임장·명함 (권한 정황)</strong></li>\n<li><strong>보증금 이체·영수증 내역 (피해 금액)</strong></li>\n<li><strong>부동산 등기부등본 (소유자·권리관계)</strong></li>\n<li><strong>기존 계약·다른 임차인 정황 자료 (이중계약)</strong></li>\n<li><strong>계약·연락 과정 대화 기록</strong></li>\n<li><strong>상대 계좌·연락처 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기부등본상 소유자와 계약 상대가 일치하는지, 위임 권한이 진정한지가 핵심입니다. 계약서·이체 내역과 상대 신분 자료를 함께 모으고, 같은 집의 다른 임차인 정황이 있으면 이중계약 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 계약 권한·임대 의사 없이 보증금만 받으려 했는지.</li>\n<li><strong>대리권·위임</strong> — 대리인의 위임 권한이 진정했는지.</li>\n<li><strong>이중계약</strong> — 같은 집을 여러 명에게 계약했는지.</li>\n<li><strong>증거의 적법성</strong> — 휴대전화 등 전자정보 압수가 관련성 범위를 지켰는지.</li>\n<li><strong>책임 주체</strong> — 명의 집주인·대리인·중개인 책임 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (부동산 거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전자정보 압수의 관련성과 위법수집증거',
        summary:
          '대법원 2022도11923(대법원, 2025.08.14 선고) 영역에서 법원은 압수 목적물이 전자정보 저장매체인 경우 수사기관은 혐의사실과 관련 있는 정보의 범위를 정해 출력·복제해야 하고, 관련성 구분 없이 임의로 전자정보를 문서로 출력하거나 파일로 복제하는 행위는 원칙적으로 영장주의에 반하는 위법한 압수이며, 사후에 영장을 받아도 위법성이 치유되지 않는다고 판시했습니다. 사기 사건에서 휴대전화 등 자료가 어떻게 수집됐는지를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '권한 없는 계약 + 이중계약 + 보증금 이체 결합 시 기망 고의·재물 교부 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계약서를 받았는데도 사기가 되나요?',
        answer:
          '<strong>계약 권한·임대 의사 없이 보증금만 받으려 한 정황이 있으면 기망으로 다툴 수 있는 영역입니다.</strong> 등기부·상대 신분을 확인하세요.',
      },
      {
        question: '집주인 본인인지 어떻게 확인하나요?',
        answer:
          '<strong>등기부등본상 소유자와 신분증·위임장을 대조하는 것이 핵심인 영역입니다.</strong> 권리관계 자료를 확보하세요.',
      },
      {
        question: '대리인과 계약했는데 누구에게 책임을 묻나요?',
        answer:
          '<strong>대리권의 진정성에 따라 명의 집주인·대리인 책임이 갈리는 영역입니다.</strong> 위임 관계를 확인해 청구 대상을 정하세요.',
      },
      {
        question: '같은 집에 다른 세입자가 있다는데 어떻게 하나요?',
        answer:
          '<strong>이중계약 정황은 기망 입증의 중요한 자료가 되는 영역입니다.</strong> 다른 임차인·기존 계약 정황을 모으세요.',
      },
      {
        question: '보증금을 빨리 돌려받으려면 무엇부터 하나요?',
        answer:
          '<strong>이체 직후라면 지급정지·피해구제를 먼저 검토할 수 있는 영역입니다.</strong> 송금 계좌 정보부터 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '부동산 직거래 가계약금 잠적 사기', href: '/guide/fraud/fraud-real-estate-direct-deal-deposit-vanish' },
      { label: '사기/재산범죄 종합 가이드', href: '/guide/fraud' },
      { label: '지인 금전 차용 변제의사 사기 무고', href: '/guide/fraud/fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense' },
      { label: '인테리어 선입금 사기 환급', href: '/guide/fraud/fraud-construction-deposit-scam-recovery' },
    ],
  },

  // ─── 3. fraud-online-mall-nondelivery-prepayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-mall-nondelivery-prepayment-track',
    keyword: '온라인몰 선결제 미배송 사기',
    questionKeyword: '온라인 쇼핑몰에서 할인 상품을 보고 선결제(현금·계좌이체)했는데, 배송일이 한참 지나도 물건이 오지 않고 판매자는 연락이 끊겼어요. 알고 보니 같은 피해자가 여럿이던데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '온라인몰 선결제 미배송 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인몰 선결제 미배송 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '온라인몰에 선결제했는데 물건이 안 오고 판매자가 잠적했다면, 형법 제347조 사기의 편취 고의를 계약 당시 이행 의사로 따지고, 계좌이체분 지급정지까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 쇼핑몰·SNS 마켓에서 할인 상품을 보고 \'선입금하면 빨리 보내준다\'는 말에 현금·계좌이체로 선결제한 분의 상황입니다. 그런데 배송일이 한참 지나도 물건은 오지 않고 판매자는 연락이 끊겼고, 알고 보니 같은 수법에 당한 피해자가 여럿이라는 이야기까지 들려 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 처음부터 배송·이행 의사·능력 없이 선결제만 받은 정황은 기망행위로 평가될 여지가 있으나, 단순 배송 지연·채무불이행과는 구별이 필요합니다. 판례는 편취에 의한 사기죄의 고의는 계약 당시를 기준으로 일을 완성·이행할 의사·능력이 없음에도 속였는지로 판단하고, 거래의 내용·체결 경위·이행 과정을 종합해야 한다고 본 사례 흐름이 있는 영역입니다. 선결제 + 미배송 + 연락 두절 결합은 \'편취 고의·지급정지·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 주문·결제 정리 ② 편취 고의 ③ 지급정지 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인몰 선결제 미배송 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 주문·편취 고의·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 주문·결제 정리</strong> — 주문 화면·상품 글·결제(계좌이체·현금) 내역·약속 배송일 정리.</li>\n<li><strong>② 편취 고의</strong> — 처음부터 배송 의사·능력 없이 선결제만 받은 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 이체분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 피해 공동 신고·소비자상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카드가 아닌 계좌이체·현금 선결제는 안전결제 보호를 못 받는 경우가 많아, 계약 당시 배송 의사·능력이 있었는지와 같은 수법 피해가 여럿인지가 핵심입니다. 계좌 이체분은 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지·자료 보존 (즉시)</strong> — 계좌 이체분은 은행·112로 지급정지 요청, 주문·결제·대화 보존.</li>\n<li><strong>2단계 — 사기 의심 거래 조회 (즉시)</strong> — 사이버범죄 신고시스템·더치트 등으로 동일 계좌·피해 조회.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 소비자상담·피해구제 (병행)</strong> — 한국소비자원 1372 상담·은행 피해구제신청.</li>\n<li><strong>5단계 — 환급·집단 대응 (이후)</strong> — 채권소멸 후 환급, 동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인몰 선결제 미배송 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 주문·편취 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>주문 화면·상품 판매 글 캡처 (거래 내용)</strong></li>\n<li><strong>계좌이체·현금 결제 내역 (피해 금액)</strong></li>\n<li><strong>약속 배송일·배송 안내 기록 (이행 약속)</strong></li>\n<li><strong>판매자와의 대화·연락 두절 정황</strong></li>\n<li><strong>판매 계좌·연락처·쇼핑몰 정보</strong></li>\n<li><strong>동일 계좌·동일 피해 조회 결과</strong></li>\n<li><strong>사건사고사실확인원·은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판매 계좌번호로 사기 의심 거래를 조회하면 동일 피해 정황이 드러나는 경우가 많습니다. 주문·결제·배송 약속을 시간 순으로 정리하고, 같은 계좌 피해 사례를 모아두면 편취 고의 정황과 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 계약 당시 배송 의사·능력이 있었는지.</li>\n<li><strong>단순 지연과 구별</strong> — 배송 지연·채무불이행인지, 처음부터 편취인지.</li>\n<li><strong>결제 수단</strong> — 계좌이체·현금이면 안전결제 보호 밖이라 지급정지 검토.</li>\n<li><strong>판매자 특정</strong> — 계좌·연락처·쇼핑몰로 판매자를 특정할 수 있는지.</li>\n<li><strong>동일 피해</strong> — 같은 계좌로 다수 피해가 발생했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의의 판단 시점과 기망행위 단정 한계',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 도급 등 편취에 의한 사기죄의 고의는 계약 당시를 기준으로 일을 완성·이행할 의사·능력이 없음에도 속였는지로 판단해야 하고, 거래의 내용·체결 경위·이행 과정을 종합해야 하며, 관련 행정법규 등을 위반한 사정만으로 곧바로 기망행위라 단정해서는 안 된다고 판시했습니다. 선결제만 받고 물건을 보내지 않은 사안에서 편취 고의를 살펴볼 때에도 계약 당시 이행 의사·능력을 기준으로 검토해볼 수 있습니다.',
        takeaway: '선결제 + 미배송 + 연락 두절 결합 시 편취 고의·지급정지 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 배송이 늦는 건지 사기인지 어떻게 구별하나요?',
        answer:
          '<strong>계약 당시 배송 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 연락 두절·동일 피해 정황을 정리하세요.',
      },
      {
        question: '계좌이체로 냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
      {
        question: '판매자 계좌번호만 아는데 신고가 되나요?',
        answer:
          '<strong>계좌·연락처로 수사기관이 추적할 수 있는 영역입니다.</strong> 계좌로 사기 의심 거래를 먼저 조회해 보세요.',
      },
      {
        question: '같은 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 계좌 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
      {
        question: '소비자원과 경찰 중 어디부터 가나요?',
        answer:
          '<strong>지급정지·신고는 경찰, 환급·분쟁은 소비자원으로 병행 검토하는 영역입니다.</strong> 주문·결제 자료를 함께 준비하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '사기/재산범죄 종합 가이드', href: '/guide/fraud' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '동업자금 회수 분쟁 사기 무고', href: '/guide/fraud/fraud-joint-venture-fund-recovery-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 4. fraud-romance-overseas-remittance-track ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-overseas-remittance-track',
    keyword: '로맨스스캠 해외송금 유도',
    questionKeyword: 'SNS·데이팅앱에서 만난 외국인 연인이 \'세관 비용\'·\'투자\'·\'급한 사정\'이라며 여러 차례 해외송금을 유도했어요. 사랑한다는 말에 계속 보냈는데 알고 보니 로맨스스캠 같아요. 보낸 돈을 돌려받을 수 있나요?',
    ctaKeyword: '로맨스스캠 해외송금 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '로맨스스캠 해외송금 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '연인을 가장한 상대가 세관비·투자 명목으로 해외송금을 반복 유도했다면, 형법 제347조 사기에서 보낸 금원 전부가 편취액일 수 있고, 지급정지까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·데이팅앱에서 만난 외국인 연인이 신뢰를 쌓은 뒤 \'세관 비용\', \'투자 수익\', \'급한 병원비\'라며 여러 차례 해외송금·계좌이체를 유도한 분의 상황입니다. 사랑한다는 말과 곧 만나자는 약속에 의심을 미루고 계속 돈을 보냈는데, 알고 보니 실체가 없는 로맨스스캠 정황이라 충격과 함께 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 연인 관계를 가장해 거짓 명목으로 송금을 반복 유도한 정황은 기망행위로 평가될 여지가 있고, 국내 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지를 검토할 수 있습니다. 판례는 금원 편취 사기죄에서 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 교부받은 금원 전부라고 본 사례 흐름이 있는 영역입니다. 연인 가장 + 거짓 명목 + 반복 송금 결합은 \'편취액·지급정지·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 관계·송금 정리 ② 기망 고의 ③ 지급정지 ④ 형사 신고 ⑤ 환급·추적 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 로맨스스캠 해외송금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·기망 고의·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관계·송금 정리</strong> — 만남 경위·대화·송금 명목·국내외 송금 내역 정리.</li>\n<li><strong>② 기망 고의</strong> — 연인 관계를 가장해 거짓 명목으로 송금을 유도한 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 국내 계좌 송금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·전기통신금융사기 신고 검토.</li>\n<li><strong>⑤ 환급·추적</strong> — 피해구제·자금 흐름 추적·해외송금 회수 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'세관 비용\'·\'투자\'·\'급한 사정\' 등 명목을 바꿔가며 송금을 반복 요구하는 흐름이 전형적인 로맨스스캠 기망 정황입니다. 추가 송금을 멈추고 국내 계좌 송금분의 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 추가 송금 중단·자료 보존 (즉시)</strong> — 대화·송금 명목·이체 내역 보존, 추가 송금 중단.</li>\n<li><strong>2단계 — 지급정지 요청 (즉시)</strong> — 국내 계좌 송금분은 은행·112로 지급정지 요청.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제·금감원 상담 (2개월 내)</strong> — 은행 피해구제신청·금융감독원 1332 상담.</li>\n<li><strong>5단계 — 자금 추적·해외 송금 대응 (이후)</strong> — 자금 흐름 추적·해외 송금 회수·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">로맨스스캠 해외송금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관계·기망 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>만남·대화 기록(앱·메신저) 캡처 (관계 가장 정황)</strong></li>\n<li><strong>송금 요구 명목·메시지 (기망 정황)</strong></li>\n<li><strong>국내 계좌이체·해외송금 내역 (피해 금액)</strong></li>\n<li><strong>상대 프로필·사진·연락처 (인물 특정)</strong></li>\n<li><strong>송금 계좌·환전·송금업체 정보</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명목을 바꿔가며 송금을 요구한 메시지와 송금 내역을 시간 순으로 정리하는 것이 핵심입니다. 국내 계좌로 보낸 부분은 지급정지·피해구제 대상이 될 수 있으니 송금 계좌 정보부터 확보해두면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 연인 관계를 가장해 거짓 명목으로 송금을 유도했는지.</li>\n<li><strong>편취액 산정</strong> — 일부 \'갚겠다\'는 말이 있어도 보낸 금원 전부가 피해액인지.</li>\n<li><strong>자발적 송금 항변</strong> — \'스스로 보낸 것\'이라는 상대 주장의 다툼.</li>\n<li><strong>송금 경로</strong> — 국내 계좌인지, 해외송금·코인인지에 따른 회수 가능성.</li>\n<li><strong>인물 특정</strong> — 외국인·대포통장 등으로 상대를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (로맨스스캠·피해구제 상담)</strong></li>\n<li><strong>한국인터넷진흥원 118 (개인정보·계정 침해 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 금원 편취 사기죄의 편취액 산정 기준',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되거나 담보가 제공된 경우에도 편취액은 그 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 보아야 한다고 판시했습니다. 연인을 가장한 상대에게 거짓 명목으로 송금한 사안에서 편취액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '연인 가장 + 거짓 명목 + 반복 송금 결합 시 편취액·지급정지 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 좋아서 보낸 건데도 사기가 되나요?',
        answer:
          '<strong>연인 관계를 가장해 거짓 명목으로 송금을 유도한 정황이 있으면 기망으로 다툴 수 있는 영역입니다.</strong> 대화·송금 명목을 확보하세요.',
      },
      {
        question: '나중에 갚는다고 했는데 피해액은 얼마인가요?',
        answer:
          '<strong>갚겠다는 말과 무관하게 보낸 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 흐름을 전부 정리하세요.',
      },
      {
        question: '해외로 보냈는데도 돌려받을 수 있나요?',
        answer:
          '<strong>국내 계좌로 보낸 부분은 지급정지·피해구제를 검토할 수 있는 영역입니다.</strong> 송금 경로별로 구분해 정리하세요.',
      },
      {
        question: '상대가 외국인이라 못 잡는 것 아닌가요?',
        answer:
          '<strong>국내 송금 계좌·대포통장 정황으로 수사가 진행될 수 있는 영역입니다.</strong> 가진 자료를 모두 모아 신고하세요.',
      },
      {
        question: '아직 사기인지 확신이 안 서는데 어떻게 하나요?',
        answer:
          '<strong>추가 송금을 멈추고 상담·신고를 먼저 검토하는 것이 중요한 영역입니다.</strong> 더 보내기 전에 전문기관에 확인하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '로맨스 스캠 회복', href: '/guide/fraud/fraud-romance-scam-recovery-steps' },
      { label: '사기/재산범죄 종합 가이드', href: '/guide/fraud' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 5. fraud-unlisted-stock-pre-ipo-track ───
  {
    domain: 'fraud',
    slug: 'fraud-unlisted-stock-pre-ipo-track',
    keyword: '비상장주식 상장임박 투자 사기',
    questionKeyword: '\'곧 상장되면 몇 배 오른다\'는 말에 비상장주식에 투자했는데, 상장은 무산되고 회사도 실체가 없거나 주식이 휴지조각이 됐어요. 부부가 함께 큰돈을 넣었는데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '비상장주식 상장임박 투자 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '비상장주식 상장임박 투자 사기 — 5단계 편취·죄수 점검 | 로앤가이드',
      description:
        '상장 임박을 미끼로 비상장주식에 투자했다 휴지조각이 됐다면, 형법 제347조 사기의 기망 고의와 부부 공동 투자 시 피해자별 죄수·편취액, 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「\'곧 상장되면 몇 배로 오른다\', \'상장 직전 물량을 특별히 배정한다\'는 말에 비상장주식에 투자한 분의 상황입니다. 그런데 약속한 상장은 무산되고 회사는 실체가 없거나 주식은 사실상 휴지조각이 됐고, 부부가 공동재산을 모아 함께 큰돈을 넣은 터라 충격과 함께 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 상장 가능성·수익을 허위·과장해 투자를 유도한 정황은 기망행위로 평가될 여지가 있고, 자본시장법 위반 등도 함께 문제될 수 있습니다. 판례는 다수 피해자에게 각각 기망해 재물을 편취하면 원칙적으로 피해자별로 독립한 사기죄가 성립하되, 부부처럼 피해법익의 동일성이 인정되는 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역입니다. 상장 미끼 + 허위 수익 + 공동 투자 결합은 \'기망 고의·편취액·죄수\' 다툼이 가능한 트랙입니다. 피해자라면 ① 투자·송금 정리 ② 기망 고의 ③ 편취액·죄수 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 비상장주식 상장임박 투자 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·기망 고의·편취액·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·송금 정리</strong> — 권유 경위·투자 설명자료·주식 매매·송금 내역 정리.</li>\n<li><strong>② 기망 고의</strong> — 상장 가능성·수익을 허위·과장해 투자를 유도한 정황 정리.</li>\n<li><strong>③ 편취액·죄수</strong> — 부부 등 공동 투자 시 편취액·죄수 관계 정리.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기·자본시장법 위반 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 자금 추적·손해배상·부당이득 반환 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'곧 상장\'·\'확정 수익\'이라는 단정적 설명과 실제 상장 가능성·회사 실체의 불일치가 기망 판단의 핵심입니다. 부부가 함께 투자했다면 피해자별 죄수·편취액 산정도 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·송금 자료 보존 (즉시)</strong> — 권유 설명자료·대화·계약·송금 내역 보존.</li>\n<li><strong>2단계 — 회사·주식 실체 확인 (1주)</strong> — 법인 등기·재무·상장 추진 여부·주식 실재 확인.</li>\n<li><strong>3단계 — 지급정지·경찰 신고 (병행)</strong> — 국내 계좌 송금분 지급정지 요청·사이버범죄 신고.</li>\n<li><strong>4단계 — 금감원·자본시장 상담 (2개월 내)</strong> — 금융감독원 1332 투자사기·불공정거래 상담.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 자금 추적·손해배상·부당이득 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">비상장주식 상장임박 투자 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·기망 고의·편취액 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유 설명자료·홍보물 (상장·수익 약속)</strong></li>\n<li><strong>권유자와의 대화·녹취 (기망 정황)</strong></li>\n<li><strong>주식 매매계약·주주명부 자료</strong></li>\n<li><strong>송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>회사 법인등기·재무·상장 추진 자료</strong></li>\n<li><strong>부부·공동 투자 시 각자 명의 송금 내역</strong></li>\n<li><strong>상대·법인 연락처·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'곧 상장\'·\'원금 보장\'·\'확정 수익\' 같은 단정적 권유 자료와 실제 상장 추진·회사 재무 상태를 대조하면 기망 정황이 드러나는 경우가 많습니다. 부부가 각자 명의로 송금했다면 송금 내역을 명의별로 정리해두면 편취액·죄수 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 상장 가능성·수익을 허위·과장해 유도했는지.</li>\n<li><strong>투자 위험 항변</strong> — \'정상 투자 위험\'이라는 상대 주장의 다툼.</li>\n<li><strong>편취액·죄수</strong> — 부부 등 다수 피해 시 피해자별 죄수·포괄일죄 여부.</li>\n<li><strong>자본시장법</strong> — 무인가 영업·부정거래 등 추가 위반 소지.</li>\n<li><strong>자금 흐름</strong> — 투자금이 법인·개인으로 흩어진 경우의 추적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·불공정거래 신고)</strong></li>\n<li><strong>한국거래소·금융투자협회 (비상장·상장 정보 확인)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자 사기죄의 죄수와 포괄일죄 판단',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수 피해자에게 각각 기망해 재물을 편취한 경우 범의가 단일하고 범행방법이 동일하더라도 피해자별로 독립한 사기죄가 성립함이 원칙이나, 부부인 피해자들처럼 기망의 공통성·재산 형성과 교부 경위 등에 비추어 피해법익의 동일성이 인정되면 이들에 대한 사기죄를 포괄일죄로 볼 수 있다고 판시했습니다. 부부가 함께 비상장주식에 투자한 사안에서 편취액·죄수를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '상장 미끼 + 허위 수익 + 공동 투자 결합 시 기망 고의·편취액·죄수 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 투자 위험을 알고 넣은 건데 사기가 되나요?',
        answer:
          '<strong>상장 가능성·수익을 허위·과장해 유도한 정황이 있으면 기망으로 다툴 수 있는 영역입니다.</strong> 권유 설명자료를 확보하세요.',
      },
      {
        question: '회사가 실재하는지 어떻게 확인하나요?',
        answer:
          '<strong>법인등기·재무·상장 추진 여부 확인이 핵심인 영역입니다.</strong> 공시·등기 자료로 실체를 점검하세요.',
      },
      {
        question: '부부가 함께 투자했는데 피해액은 어떻게 계산하나요?',
        answer:
          '<strong>각자 명의 송금 내역을 기준으로 편취액·죄수를 따지는 영역입니다.</strong> 명의별 송금 내역을 정리하세요.',
      },
      {
        question: '상장이 늦어지는 건지 사기인지 어떻게 구별하나요?',
        answer:
          '<strong>실제 상장 추진 정황과 권유 내용의 일치 여부가 판단 요소인 영역입니다.</strong> 약속과 실제를 대조해 정리하세요.',
      },
      {
        question: '주식이 휴지조각이 됐는데 돌려받을 방법이 있나요?',
        answer:
          '<strong>자금 추적·손해배상·국내 송금분 지급정지를 검토할 수 있는 영역입니다.</strong> 송금·계좌 정보부터 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '사기/재산범죄 종합 가이드', href: '/guide/fraud' },
      { label: '상장예정 비상장주식 투자 권유 사기 고의 무고 방어', href: '/guide/fraud/fraud-pre-ipo-unlisted-stock-investment-falsely-accused-defense' },
      { label: '딥페이크 셀럽 투자 사기 피해 구제', href: '/guide/fraud/fraud-deepfake-celebrity-investment-relief' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 6. fraud-voice-phishing-cashout-courier-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-voice-phishing-cashout-courier-falsely-accused-defense',
    keyword: '보이스피싱 인출책 가담 무고',
    questionKeyword: '\'채권 수금\'·\'단순 심부름\'이라는 구인 글을 보고 현금을 받아 전달했을 뿐인데, 알고 보니 보이스피싱 피해금이라며 사기 공범(현금수거책)으로 입건됐어요. 범행인 줄 전혀 몰랐는데 어떻게 방어하나요?',
    ctaKeyword: '보이스피싱 현금수거 공모·고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '보이스피싱 현금수거 방어 — 5단계 공모·고의 점검 | 로앤가이드',
      description:
        '단순 심부름인 줄 알고 현금을 전달했다 보이스피싱 현금수거책 혐의로 입건됐다면, 사기 공모공동정범의 공모·고의와 범죄 이용을 몰랐다는 정황을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「\'채권 수금\', \'단순 현금 심부름\', \'고수익 단기 알바\'라는 구인 글을 보고 시키는 대로 현금을 받아 전달했을 뿐인데, 그 돈이 보이스피싱 피해금이라며 사기 공범(현금수거책) 혐의로 입건된 분의 상황입니다. 정상적인 일인 줄 알았는데 한순간에 조직 가담자로 지목돼 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 사기 공모공동정범이 성립하려면 정범의 사기 범행에 공동가공한다는 의사의 결합(공모)과 범행의 고의가 인정돼야 한다는 점이 핵심 쟁점입니다. 판례는 보이스피싱 현금수거책의 공모·범의는 미필적 인식으로도 충분하지만, 자신의 행위가 범죄에 이용된다는 사실을 모르고 행위에 나아간 경우에는 고의가 없어 죄책을 물을 수 없고, 고의를 부인하면 간접사실·정황사실을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 단순 전달이라는 사정만으로 곧바로 공모·고의가 인정되는 것은 아니라는 평가가 가능한 영역입니다. 구인 빌미 + 현금 전달 + 범행 인식 다툼 결합은 \'공모·고의 부인\' 방어가 가능한 트랙입니다. 사실과 다르게 가담자로 지목됐다면 ① 경위 정리 ② 인식 다툼 ③ 정황 검토 ④ 증거 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 보이스피싱 현금수거 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·인식·정황·증거·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 구인 글·면접·지시·현금 수거·전달 과정 정리.</li>\n<li><strong>② 인식 다툼</strong> — 자신의 행위가 사기 범행에 이용된다는 인식이 있었는지 검토.</li>\n<li><strong>③ 정황 검토</strong> — 보수·근무 형태·지시 방식 등 간접사실 검토.</li>\n<li><strong>④ 증거 검토</strong> — 구인·대화·이동·전달 정황 등 객관 자료 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 현금수거책의 공모·고의는 미필적 인식으로도 인정될 수 있으나, 범죄에 이용된다는 사실을 정말 몰랐는지가 분기점입니다. 단순 전달이라는 사정만으로 곧바로 고의가 인정되는 것은 아니어서, 구인 경위·인식 부족 정황을 정리해 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 구인 글·면접·지시·현금 수거·전달 경위 정리.</li>\n<li><strong>2단계 — 인식 부족 정황 확보 (1주)</strong> — 범행 인식이 없었음을 보여주는 대화·정황 확보.</li>\n<li><strong>3단계 — 공모·고의 쟁점 정리 (2주)</strong> — 미필적 인식 여부·간접사실 평가 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 피해 회복·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">보이스피싱 현금수거 공모·고의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·인식·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>구인 글·모집 공고 캡처 (제안 경위)</strong></li>\n<li><strong>면접·지시·전달 지시 대화 기록 (인식 정황)</strong></li>\n<li><strong>현금 수거·전달 동선·시간 자료 (행위 태양)</strong></li>\n<li><strong>보수·정산 내역 (정황 사실)</strong></li>\n<li><strong>정상 업무로 인식한 정황 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n<li><strong>피해 회복·선처 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'사기 범행에 이용된다는 인식이 있었는지\'입니다. 구인 글·지시 대화를 확보하고, 현금을 받아 전달하기까지의 동선·정산 정황을 시간 순으로 정돈해 인식이 없었음을 뒷받침하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공모 성부</strong> — 정범과 의사의 결합(공모)이 인정되는지.</li>\n<li><strong>고의·미필적 인식</strong> — 범죄에 이용된다는 점을 인식·용인했는지.</li>\n<li><strong>인식 부정 정황</strong> — 정상 업무로 믿을 만한 사정이 있었는지.</li>\n<li><strong>간접사실 평가</strong> — 보수·지시 방식 등 정황을 어떻게 평가할지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 현금수거책의 공모·고의 인정 방법',
        summary:
          '대법원 2024도10141(대법원, 2024.12.12 선고) 영역에서 법원은 사기 공모공동정범의 공모는 의사의 결합만 있으면 되고 기망방법을 구체적으로 몰랐어도 공모관계를 부정할 수 없으나, 자신의 행위가 범죄에 이용된다는 사실을 모르고 행위에 나아간 경우에는 고의가 없어 죄책을 물을 수 없고, 보이스피싱 현금수거책이 공모·고의를 부인하면 상당한 관련성이 있는 간접사실·정황사실을 종합해 범의·공모를 인정할 수 있는지 신중히 살펴야 한다고 판시했습니다. 단순 심부름인 줄 알았다는 사안의 죄책을 살펴볼 때에도 이러한 법리를 검토해볼 수 있습니다.',
        takeaway: '구인 빌미 + 현금 전달 + 범행 인식 다툼 결합 시 공모·고의 부인 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '현금을 받아 전달만 했는데도 처벌 대상이 되나요?',
        answer:
          '<strong>범죄에 이용된다는 인식이 있었는지가 핵심으로, 단순 전달만으로 고의가 곧바로 인정되는 것은 아닌 영역입니다.</strong> 구인 경위를 정리하세요.',
      },
      {
        question: '범행인 줄 몰랐다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>구인 글·지시 대화·정상 업무로 믿은 정황이 인식 다툼의 자료가 되는 영역입니다.</strong> 대화·동선 기록을 확보하세요.',
      },
      {
        question: '미필적으로라도 의심했으면 무조건 처벌인가요?',
        answer:
          '<strong>의심 정도와 정황을 종합해 신중히 판단하는 영역으로, 단정적으로 보기 어렵습니다.</strong> 인식 정황을 구체적으로 정리하세요.',
      },
      {
        question: '보수를 받았는데 더 불리한가요?',
        answer:
          '<strong>보수 수령은 간접사실의 하나일 뿐, 범행 인식 여부를 종합해 판단하는 영역입니다.</strong> 정산·지시 맥락을 함께 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기/재산범죄 종합 가이드', href: '/guide/fraud' },
      { label: '메신저 피싱 가족 사칭 4단계 환급', href: '/guide/fraud/fraud-kakao-family-phishing-4step-refund' },
      { label: '보험금 사기 공모 가담 무고 방어', href: '/guide/fraud/fraud-insurance-conspiracy-falsely-accused' },
      { label: '사기 고소당했을때', href: '/guide/fraud/fraud-accused-response' },
      { label: '비트코인 콜드월렛 사기', href: '/guide/fraud/fraud-bitcoin-cold-wallet-scam' },
    ],
  },

  // ─── 7. sex-crime-taxi-passenger-asleep-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-passenger-asleep-track',
    keyword: '택시 승객 잠든 사이 추행',
    questionKeyword: '술에 취해 택시에서 잠들었는데, 깨어 보니 기사가 제 몸을 만진 것 같은 정황이 있었어요. 당시엔 잠들어서 제대로 저항하지 못했는데, 이런 경우도 추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '택시 잠든 사이 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '택시 잠든 사이 추행 — 5단계 준강제추행·증거 점검 | 로앤가이드',
      description:
        '술에 취해 택시에서 잠든 사이 추행 정황을 겪었다면, 형법 제299조 준강제추행의 심신상실·항거불능과 패싱아웃·블랙아웃 구별, 증거 보전·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「술에 취해 택시에서 잠이 들었는데, 깨어 보니 기사가 몸을 만진 것 같은 정황이 남아 있어 큰 충격과 수치심을 느낀 분의 상황입니다. 잠든 상태라 그 자리에서 저항하거나 거부하지 못했고, 기억도 단편적이라 신고가 될지 막막하셨을 거예요.」 형법 제299조는 사람의 심신상실 또는 항거불능 상태를 이용하여 추행한 경우를 준강제추행죄로 정하는 영역입니다. 판례는 피해자가 깊은 잠에 빠져 있거나 술 등으로 일시적으로 의식을 잃은 상태였다면 준강제추행죄의 심신상실 또는 항거불능 상태에 해당할 수 있고, 음주로 수면상태에 빠진 의식상실(패싱아웃)과 기억만 잃는 알코올 블랙아웃을 구별해 사정을 종합 판단한다고 본 사례 흐름이 있는 영역입니다. 음주·수면 + 신체접촉 + 저항 곤란 결합은 \'심신상실·항거불능·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 상태·정황 정리 ② 심신상실·항거불능 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 잠든 사이 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상태·심신상실·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상태·정황 정리</strong> — 음주 정도·승차 시각·수면·깨어난 직후 정황 정리.</li>\n<li><strong>② 심신상실·항거불능</strong> — 깊은 잠·의식상실로 저항이 곤란했던 상태 정리.</li>\n<li><strong>③ 증거 보전</strong> — 택시 내·차량 블랙박스·운행 기록·신체 흔적 보전.</li>\n<li><strong>④ 가해자 특정</strong> — 택시 회사·차량번호·운행 기록으로 기사 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 깊은 잠·의식상실로 저항이 곤란한 상태였다면 준강제추행의 심신상실·항거불능에 해당할 수 있는 영역입니다. 차량 블랙박스·운행 기록과 깨어난 직후 정황을 빨리 보전하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 옷·신체 상태를 그대로 두고 택시 운행 기록·블랙박스 확보 요청.</li>\n<li><strong>2단계 — 해바라기센터 방문 (24~72시간)</strong> — 증거채취·심리 지원, 진료 기록 확보.</li>\n<li><strong>3단계 — 차량·기사 특정 (직후)</strong> — 카드 결제·앱 호출·차량번호로 택시·기사 특정.</li>\n<li><strong>4단계 — 경찰 신고·진술 (준비 후)</strong> — 112 신고, 음주·수면 상태와 정황 진술.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 잠든 사이 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상태·심신상실·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 정도·승하차 시각·수면 정황 메모</strong></li>\n<li><strong>택시 호출 앱·카드 결제·영수증 (차량 특정)</strong></li>\n<li><strong>차량 블랙박스·운행 기록 보존 요청 자료</strong></li>\n<li><strong>깨어난 직후 신체·옷 상태 사진</strong></li>\n<li><strong>직후 통화·메시지 기록 (즉시 호소 정황)</strong></li>\n<li><strong>해바라기센터 증거채취·진료 기록</strong></li>\n<li><strong>동승자·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시는 호출 앱·카드 결제·차량번호로 차량·기사 특정이 비교적 수월합니다. 블랙박스·운행 기록은 시간이 지나면 삭제될 수 있으니 빨리 보존을 요청하고, 깨어난 직후 상태와 즉시 호소 정황을 남겨두면 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>심신상실·항거불능</strong> — 깊은 잠·의식상실로 저항이 곤란했는지.</li>\n<li><strong>블랙아웃과 구별</strong> — 기억만 잃은 블랙아웃인지, 의식을 잃은 패싱아웃인지.</li>\n<li><strong>이용행위</strong> — 그 상태를 이용해 추행했는지.</li>\n<li><strong>가해자 특정</strong> — 택시·기사를 운행 기록으로 특정할 수 있는지.</li>\n<li><strong>증거 시점</strong> — 블랙박스·운행 기록 보존의 신속성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 준강제추행의 심신상실·항거불능과 블랙아웃 구별',
        summary:
          '대법원 2018도9781(대법원, 2021.02.04 선고) 영역에서 법원은 준강제추행죄의 보호법익은 성적 자기결정권이고, 피해자가 깊은 잠에 빠져 있거나 술 등으로 일시적으로 의식을 잃어 정상적인 판단·대응 능력을 행사할 수 없는 상태였다면 심신상실 또는 항거불능 상태에 해당한다고 보면서, 기억만 잃는 알코올 블랙아웃과 의식을 잃는 패싱아웃을 구별해 객관적 정황을 종합 판단해야 한다고 판시했습니다. 택시에서 잠든 사이의 추행 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '음주·수면 + 신체접촉 + 저항 곤란 결합 시 심신상실·항거불능·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '잠들어서 저항을 못 했는데도 추행이 되나요?',
        answer:
          '<strong>깊은 잠·의식상실 상태를 이용한 추행은 준강제추행으로 평가될 수 있는 영역입니다.</strong> 음주·수면 정황을 정리하세요.',
      },
      {
        question: '기억이 단편적인데 신고가 되나요?',
        answer:
          '<strong>블랙박스·운행 기록 등 객관 정황으로 보완할 수 있는 영역입니다.</strong> 차량 기록을 빨리 보존 요청하세요.',
      },
      {
        question: '기사가 \'아무 일 없었다\'고 하면 어떻게 되나요?',
        answer:
          '<strong>블랙박스·신체 흔적·직후 호소 정황을 종합해 판단하는 영역입니다.</strong> 객관 증거를 신속히 확보하세요.',
      },
      {
        question: '택시 기사를 어떻게 특정하나요?',
        answer:
          '<strong>호출 앱·카드 결제·차량번호로 회사·기사를 특정할 수 있는 영역입니다.</strong> 결제·호출 기록을 모으세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·증거채취 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '엘리베이터 밀폐공간 추행 신고', href: '/guide/sex-crime/sex-crime-elevator-enclosed-space-touch-report-track' },
      { label: '클럽 댄스플로어 강제추행', href: '/guide/sex-crime/sex-crime-club-dancefloor-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '요양시설 노인 성폭력 피해', href: '/guide/sex-crime/sex-crime-elder-care-facility-victim-track' },
      { label: '클럽 페스티벌 공중밀집 추행', href: '/guide/sex-crime/sex-crime-club-festival-crowd-molestation-track' },
    ],
  },

  // ─── 8. sex-crime-massage-shop-treatment-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-treatment-track',
    keyword: '마사지샵 시술 중 추행',
    questionKeyword: '마사지·시술을 받던 중 관리사가 시술과 무관한 부위를 만지거나 불필요하게 신체에 접촉했어요. 시술인 척했지만 분명히 불쾌하고 추행 같았는데, 강하게 저항하지 못했어도 추행으로 신고할 수 있나요?',
    ctaKeyword: '마사지 시술 중 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '마사지 시술 중 추행 — 5단계 추행·증거 점검 | 로앤가이드',
      description:
        '마사지·시술 중 관리사가 무관한 부위를 만지거나 밀착했다면, 형법 제298조 강제추행의 폭행을 항거 곤란 정도로 보지 않는 변경 법리와 추행 해당성을 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「마사지·피부 시술을 받던 중, 관리사가 시술과 무관한 부위를 만지거나 불필요하게 몸에 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 누워서 시술받는 상황이라 그 자리에서 강하게 저항하기 어려웠고, \'시술에 필요한 접촉이었다\'고 하면 어떻게 따져야 할지 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정하는 영역입니다. 판례는 강제추행죄의 \'폭행 또는 협박\'은 상대방의 항거를 곤란하게 할 정도일 필요가 없고 신체에 대한 불법한 유형력의 행사로 충분하다고 종래 법리를 변경했으며, 추행 해당 여부는 관계·경위·행위태양·상황을 종합해 판단한다고 본 사례 흐름이 있는 영역입니다. 시술 빙자 + 무관 부위 접촉 + 저항 곤란 결합은 \'추행 해당성·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 시술 필요성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지 시술 중 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·시술 필요성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식·반복 여부, 거부 의사 표시 정리.</li>\n<li><strong>② 시술 필요성</strong> — 해당 접촉이 시술에 통상 필요한 범위였는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 예약·결제·시술 기록·매장 CCTV·메시지 확보.</li>\n<li><strong>④ 가해자 특정</strong> — 관리사 성명·소속·근무 기록 등 특정 자료 확보.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강제추행의 폭행은 항거를 곤란하게 할 정도까지 요하지 않아, 시술을 빙자한 신체접촉도 추행으로 평가될 수 있는 영역입니다. 시술에 통상 필요한 범위를 넘어선 부위·방식·반복인지와 예약·결제·CCTV 기록을 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 매장·복도 CCTV 보존 요청, 예약·결제·메시지 확보.</li>\n<li><strong>2단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담으로 대응 방향 정리.</li>\n<li><strong>3단계 — 가해자·소속 특정 (직후)</strong> — 관리사 성명·소속·근무 기록 확보.</li>\n<li><strong>4단계 — 경찰 신고·진술 (준비 후)</strong> — 112 신고, 행위태양·시술 필요성 진술.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지 시술 중 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·시술 필요성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·방식 메모 (구체적 행위태양)</strong></li>\n<li><strong>예약·결제·시술 일지 (관계·시간 입증)</strong></li>\n<li><strong>매장·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>관리사 성명·소속·근무 정보 (가해자 특정)</strong></li>\n<li><strong>시술 전후 메시지·통화 기록 (거부·호소 정황)</strong></li>\n<li><strong>다른 이용자·목격자 진술</strong></li>\n<li><strong>심리상담·진료 기록 (피해 영향)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 마사지·시술 매장은 예약·결제·CCTV로 시간·가해자 특정이 비교적 수월합니다. 시술에 통상 필요한 접촉을 넘어선 부위·방식·반복을 구체적으로 메모하고, 시술 전후 거부·호소 메시지를 남겨두면 추행 해당성 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술인지, 성적 수치심을 일으키는 추행인지.</li>\n<li><strong>시술 필요성</strong> — 접촉이 시술에 통상 필요한 범위였는지.</li>\n<li><strong>폭행 의미</strong> — 항거 곤란 정도까지 요하지 않는 변경 법리의 적용.</li>\n<li><strong>가해자 특정</strong> — 관리사·소속을 특정할 수 있는지.</li>\n<li><strong>증거 시점</strong> — CCTV 보존·즉시 신고의 중요성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 폭행·협박의 의미 변경과 추행 판단',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 \'폭행 또는 협박\'은 상대방의 항거를 곤란하게 할 정도로 강력할 것을 요하지 않고 신체에 대한 불법한 유형력의 행사(폭행)나 공포심을 일으킬 정도의 해악 고지(협박)로 충분하다고 종래 법리를 변경했으며, 추행 해당 여부는 관계·경위·구체적 행위태양·주위 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 시술을 빙자한 신체접촉이 추행에 해당하는지를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '시술 빙자 + 무관 부위 접촉 + 저항 곤란 결합 시 추행 해당성·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시술에 필요한 접촉이라고 하면 추행이 아닌가요?',
        answer:
          '<strong>시술에 통상 필요한 범위를 넘어선 부위·방식·반복인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 정리하세요.',
      },
      {
        question: '강하게 저항을 못 했는데 불리한가요?',
        answer:
          '<strong>강제추행의 폭행은 항거 곤란 정도까지 요하지 않는 영역입니다.</strong> 누운 상태·시술 상황으로 저항이 어려웠던 사정을 정리하세요.',
      },
      {
        question: '관리사가 \'실수\'라고 하면 어떻게 되나요?',
        answer:
          '<strong>접촉의 반복·부위·방식을 종합해 추행 여부를 판단하는 영역입니다.</strong> 행위태양과 정황을 구체적으로 확보하세요.',
      },
      {
        question: '매장 CCTV를 볼 수 있나요?',
        answer:
          '<strong>매장·복도 CCTV는 보존 요청 후 수사기관을 통해 확인할 수 있는 영역입니다.</strong> 삭제 전에 빨리 보존을 요청하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '축제 인파 기습 추행 신고', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-report-track' },
      { label: '회식 만취 추행', href: '/guide/sex-crime/sex-crime-company-dinner-intoxication-contact-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '만취 항거불능 준강간 피해', href: '/guide/sex-crime/sex-crime-incapacitated-drug-alcohol-victim-track' },
      { label: '성범죄 혐의 받을 때 흔히 하는 실수', href: '/guide/sex-crime/sex-crime-common-mistakes' },
    ],
  },

  // ─── 9. sex-crime-deepfake-synthetic-image-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-deepfake-synthetic-image-track',
    keyword: '딥페이크 합성 성착취물 제작',
    questionKeyword: '누군가 제 얼굴을 음란물에 합성한 딥페이크 영상·사진을 만들어 SNS·단체방에 유포했어요. 너무 수치스럽고 더 퍼질까 두려운데, 어떻게 신고하고 삭제·차단과 처벌을 요청할 수 있나요?',
    ctaKeyword: '딥페이크 합성물 신고·삭제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '딥페이크 합성 성착취물 — 5단계 신고·삭제 점검 | 로앤가이드',
      description:
        '내 얼굴을 합성한 딥페이크 성착취물이 유포됐다면, 성폭력처벌법 제14조의2의 편집·합성·반포 처벌과 \'공공연하게\'의 의미, 증거 보전·삭제까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「누군가 내 얼굴을 음란물에 합성한 딥페이크 영상·사진을 만들어 SNS·단체방·웹사이트에 유포한 사실을 알게 된 분의 상황입니다. 실제로 한 적 없는 일인데도 마치 사실처럼 퍼지고, 더 확산될까 두려워 잠도 못 이룰 만큼 막막하실 거예요. 어디에 신고하고 어떻게 내릴 수 있을지 답답하셨을 거예요.」 성폭력처벌법 제14조의2는 반포 등을 목적으로 사람의 얼굴 등을 성적 욕망·수치심을 유발할 수 있는 형태로 편집·합성·가공하거나 이를 반포한 행위를 처벌하는 영역입니다. 판례는 촬영물 유포 처벌 조항의 입법 취지가 정보통신망을 통한 급속한 확산으로 피해자에게 큰 고통을 주는 유포 행위를 촬영자와 동일하게 처벌하려는 것이라고 보고, \'공공연하게\' 전시·상영은 불특정 또는 다수인이 시청할 수 있는 상태를 요한다고 본 사례 흐름이 있는 영역입니다. 합성물 제작 + 정보통신망 유포 + 확산 우려 결합은 \'신고·증거 보전·삭제차단\' 절차가 가능한 트랙입니다. 피해자라면 ① 게시물·URL 정리 ② 증거 보전 ③ 삭제·차단 ④ 형사 신고 ⑤ 가해자 특정·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 딥페이크 합성 성착취물 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물·증거 보전·삭제차단·신고·가해자 특정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물·URL 정리</strong> — 합성물 게시 위치·URL·계정·유포 경로 정리.</li>\n<li><strong>② 증거 보전</strong> — 화면 캡처·URL·게시 일시·확산 범위 보전(임의 재유포 금지).</li>\n<li><strong>③ 삭제·차단</strong> — 디지털성범죄피해자지원센터·방심위에 삭제·차단 요청.</li>\n<li><strong>④ 형사 신고</strong> — 성폭력처벌법 제14조의2 등 신고·고소 검토.</li>\n<li><strong>⑤ 가해자 특정·보호</strong> — 계정·게시 정보로 가해자 특정·신변보호 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합성물은 빠르게 확산되므로 증거 보전과 삭제·차단을 동시에 진행하는 것이 핵심입니다. 직접 재유포하지 말고 URL·게시 정보를 정리해 전문 지원기관·수사기관에 맡기는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 디지털성범죄피해자지원센터·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 게시물 URL·화면 캡처·게시 일시·계정 정보 보존.</li>\n<li><strong>2단계 — 삭제·차단 지원 신청 (즉시)</strong> — 디지털성범죄피해자지원센터에 삭제·차단 지원 신청.</li>\n<li><strong>3단계 — 경찰 신고·고소 (1주)</strong> — 사이버성폭력 신고·고소, 증거 자료 제출.</li>\n<li><strong>4단계 — 방심위 심의 요청 (병행)</strong> — 방송통신심의위원회에 불법정보 심의·시정 요청.</li>\n<li><strong>5단계 — 가해자 특정·피해회복 (이후)</strong> — 계정·게시 정보 수사로 가해자 특정, 보호·손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">딥페이크 합성물 신고·삭제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 게시물·증거 보전·삭제차단 갈래입니다.</strong></p>\n<ul>\n<li><strong>합성물 게시 URL·화면 캡처 (게시 위치·내용)</strong></li>\n<li><strong>게시 일시·확산 범위·조회 정황 자료</strong></li>\n<li><strong>유포 계정·단체방·발신자 정보</strong></li>\n<li><strong>원본 사진 출처·도용 경위 정황</strong></li>\n<li><strong>삭제·차단 지원 신청서 (지원센터)</strong></li>\n<li><strong>방심위 심의·신고 접수 자료</strong></li>\n<li><strong>심리상담·피해 영향 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: URL·게시 일시·계정 정보가 삭제·차단과 가해자 특정의 핵심 자료입니다. 직접 다운로드·재유포는 피하고, 캡처와 URL을 정리해 디지털성범죄피해자지원센터·수사기관에 맡기면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>합성·편집 해당성</strong> — 성적 욕망·수치심을 유발하는 편집·합성·가공인지.</li>\n<li><strong>반포·전시</strong> — 정보통신망 유포·전시가 \'공공연하게\' 이뤄졌는지.</li>\n<li><strong>다수인 인식</strong> — 불특정 또는 다수인이 시청할 수 있는 상태였는지.</li>\n<li><strong>가해자 특정</strong> — 계정·게시 정보로 발신자를 특정할 수 있는지.</li>\n<li><strong>증거·확산 시점</strong> — 보존·삭제·차단의 신속성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (삭제·차단 지원)</strong></li>\n<li><strong>방송통신심의위원회 (불법정보 심의·시정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 촬영물 유포 처벌의 취지와 공연성 요건',
        summary:
          '대법원 2024도18718(대법원, 2025.04.15 선고) 영역에서 법원은 성폭력처벌법 제14조 제2항의 입법 취지가 정보통신망을 통한 급속한 유포로 피해자에게 엄청난 고통을 주는 유포 행위를 촬영자와 동일하게 처벌하려는 데 있다고 보면서, 전시·상영은 \'공공연하게\' 이뤄질 것을 요하고 이는 불특정 또는 다수인이 시청할 수 있는 상태에 이르러야 한다고 판시했습니다. 합성 성착취물을 단체방·SNS에 올린 사안에서 유포·공연성을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '합성물 제작 + 정보통신망 유포 + 확산 우려 결합 시 신고·증거 보전·삭제차단 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '실제로 찍힌 게 아니라 합성인데도 처벌되나요?',
        answer:
          '<strong>얼굴 등을 성적으로 편집·합성·가공한 행위도 처벌 대상으로 다툴 수 있는 영역입니다.</strong> 합성물·게시 정보를 보존하세요.',
      },
      {
        question: '이미 퍼진 영상을 어떻게 내릴 수 있나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터·방심위 삭제·차단 지원을 신청할 수 있는 영역입니다.</strong> URL·게시 위치를 정리하세요.',
      },
      {
        question: '증거를 모으려면 제가 다운받아도 되나요?',
        answer:
          '<strong>임의 다운로드·재유포는 피하고 캡처·URL 보존을 권하는 영역입니다.</strong> 보존 방법은 지원센터·수사기관에 문의하세요.',
      },
      {
        question: '익명 계정이 올렸는데 잡을 수 있나요?',
        answer:
          '<strong>계정·게시 정보로 수사기관이 발신자를 추적할 수 있는 영역입니다.</strong> 가진 URL·계정 정보를 모두 제출하세요.',
      },
      {
        question: '단체방에만 올렸는데도 유포가 되나요?',
        answer:
          '<strong>불특정 또는 다수인이 볼 수 있는 상태인지가 쟁점이 되는 영역입니다.</strong> 방 인원·확산 정황을 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '딥페이크 지인합성 유포', href: '/guide/sex-crime/sex-crime-deepfake-acquaintance-photo-track' },
      { label: '회식 동료 추행 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-coworker-accusation-falsely-accused-defense' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '마사지샵 준강간 피해', href: '/guide/sex-crime/sex-crime-massage-shop-quasi-rape-victim-track' },
      { label: '회식 음주 후 추행 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-drunk-touch-falsely-accused-defense' },
    ],
  },

  // ─── 10. sex-crime-workplace-superior-contact-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-workplace-superior-contact-falsely-accused-defense',
    keyword: '직장 상사 신체접촉 추행 무고',
    questionKeyword: '직장에서 격려·인사 차원의 신체접촉이나 우연한 접촉을 했을 뿐인데, 부하 직원이 이를 강제추행으로 고소했어요. 사실과 다르게 추행으로 신고된 것 같은데, 어떻게 방어하고 소명해야 하나요?',
    ctaKeyword: '직장 상사 추행 무고 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '직장 상사 추행 무고 방어 — 5단계 진술·기습추행 점검 | 로앤가이드',
      description:
        '직장 내 가벼운 접촉을 강제추행으로 고소당해 사실과 다르게 신고됐다면, 형법 제298조 기습추행 법리와 피해자 진술 신빙성, 행위태양·맥락을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「직장에서 격려·인사 차원의 가벼운 접촉이나 우연한 신체접촉을 했을 뿐인데, 부하 직원이 이를 강제추행으로 고소해 한순간에 가해자로 지목된 분의 상황입니다. 의도한 적 없는 일이 추행으로 신고돼 당혹스럽고, 직장 생활과 명예까지 걸려 억울하고 막막하실 거예요.」 혐의를 받고 있다면, 강제추행죄에는 폭행행위 자체가 추행으로 인정되는 기습추행이 포함되고 그 폭행은 의사를 억압할 정도까지 요하지 않는다는 점, 그리고 추행 해당 여부는 피해자 진술의 신빙성과 객관적 정황을 종합해 판단된다는 점이 핵심 쟁점입니다. 판례는 추행 해당 여부를 피해자의 의사·성별·연령, 관계, 경위, 구체적 행위태양·상황 등을 종합해 신중히 판단해야 한다고 보면서, 일관된 피해자 진술과 이에 부합하는 목격자 진술 등 정황을 함께 살펴 판단해온 사례 흐름이 있는 영역입니다. 따라서 접촉 사실이 있더라도 그 경위·태양·맥락에 따라 추행 성립을 다툴 여지가 있는 영역입니다. 직장 접촉 + 추행 고소 + 진술 신빙성 다툼 결합은 \'진술 신빙성·기습추행\' 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 행위태양·맥락 ③ 진술 검토 ④ 증거 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 상사 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·행위태양·진술·증거·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 접촉 시점·상황·관계·전후 맥락을 시간 순으로 정리.</li>\n<li><strong>② 행위태양·맥락</strong> — 접촉의 부위·방식·우연성·업무 맥락 등 추행 성립 요소 검토.</li>\n<li><strong>③ 진술 검토</strong> — 고소인 진술의 일관성·객관 정황 부합 여부 검토.</li>\n<li><strong>④ 증거 검토</strong> — CCTV·동석자 진술·메시지 등 객관 자료 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기습추행은 의사를 억압할 정도의 폭행을 요하지 않으므로, 접촉 사실 자체보다 그 경위·태양·맥락과 고소인 진술의 신빙성이 분기점입니다. 사실과 다르게 신고된 부분이 있다면 객관 정황으로 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 접촉 시점·상황·관계·전후 맥락 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — CCTV·동석자 진술·메시지 등 부합·반박 정황 확보.</li>\n<li><strong>3단계 — 진술 신빙성 쟁점 정리 (2주)</strong> — 고소인 진술의 일관성·정황 부합 여부 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 합의·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 상사 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·행위태양·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>접촉 시점·상황·관계 메모 (전후 맥락)</strong></li>\n<li><strong>사건 장소·회식·회의 등 정황 자료</strong></li>\n<li><strong>현장 CCTV 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>전후 메시지·통화 기록 (관계·맥락)</strong></li>\n<li><strong>고소 내용·진술 모순 정황 메모</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'접촉의 경위·태양·맥락\'과 \'고소인 진술의 신빙성\'입니다. 현장 CCTV·동석자 진술을 빨리 확보하고, 사건 전후 관계와 메시지를 시간 순으로 정돈해두면 객관 정황으로 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연·업무 맥락인지, 성적 수치심을 일으키는 추행인지.</li>\n<li><strong>기습추행 법리</strong> — 의사를 억압할 정도까지 요하지 않는 폭행의 의미.</li>\n<li><strong>진술 신빙성</strong> — 고소인 진술의 일관성·객관 정황 부합 여부.</li>\n<li><strong>맥락·경위</strong> — 관계·상황·전후 맥락이 추행 판단에 미치는 영향.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 진술 신빙성에 따른 추행 판단',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에 폭행행위 자체가 추행으로 인정되는 기습추행이 포함되고 이때의 폭행은 의사를 억압할 정도까지 요하지 않으며, 추행 해당 여부는 피해자의 의사·관계·경위·구체적 행위태양·주위 상황 등을 종합해 신중히 판단해야 한다고 보면서, 일관된 피해자 진술과 이에 부합하는 목격자 진술 등 정황을 함께 살펴 판단해야 한다고 판시했습니다. 직장 내 접촉이 추행에 해당하는지를 다툴 때에도 진술 신빙성과 객관 정황을 함께 검토해볼 수 있습니다.',
        takeaway: '직장 접촉 + 추행 고소 + 진술 신빙성 다툼 결합 시 진술 신빙성·기습추행 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '격려·인사로 한 접촉인데도 추행이 되나요?',
        answer:
          '<strong>접촉의 부위·방식·경위·맥락을 종합해 추행 여부를 판단하는 영역으로, 단정하기 어렵습니다.</strong> 전후 맥락을 구체적으로 정리하세요.',
      },
      {
        question: '저는 의도가 없었는데 기습추행이 되나요?',
        answer:
          '<strong>기습추행은 의사를 억압할 정도의 폭행을 요하지 않으나, 추행 해당성은 행위태양·맥락으로 다투는 영역입니다.</strong> 경위를 정돈하세요.',
      },
      {
        question: '사실과 다르게 신고된 부분은 어떻게 보여주나요?',
        answer:
          '<strong>CCTV·동석자 진술 등 객관 정황으로 고소 내용과의 불일치를 다투는 영역입니다.</strong> 객관 자료를 빨리 확보하세요.',
      },
      {
        question: '고소인 진술만으로 처벌되나요?',
        answer:
          '<strong>진술의 일관성과 객관 정황 부합 여부를 종합해 판단하는 영역입니다.</strong> 진술 모순·정황 자료를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 무고를 당했을 때 반대고소 가능한지', href: '/guide/sex-crime/sex-crime-false-accusation-counter' },
      { label: '회식 후 동료 강제추행 무고', href: '/guide/sex-crime/sex-crime-company-dinner-falsely-accused-defense' },
      { label: '회식 후 동료 추행 무고', href: '/guide/sex-crime/sex-crime-workplace-afterparty-falsely-accused-defense' },
      { label: '성범죄 초범 처벌 수위와 대응 방법', href: '/guide/sex-crime/sex-crime-first-offense-response' },
      { label: '공중화장실 불법촬영', href: '/guide/sex-crime/sex-crime-public-restroom-hidden-camera-track' },
    ],
  },
];
