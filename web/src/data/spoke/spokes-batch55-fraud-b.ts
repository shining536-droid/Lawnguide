import { SpokePage } from '../spoke-pages';

// batch55 fraud-b 2개:
// 1. 중고차 카히스토리·주행거리 조작 매수 → 매매계약 취소 + 사기 고소 (절차형)
// 2. 무고로 사기 고소를 당한 피고소인 → 무혐의·무고죄 역공 트랙 (Q&A형, accused)
//
// 고유 존재 이유:
// 1. 이 페이지는 카히스토리·주행거리 조작 중고차를 매수한 매수인이 매매계약 취소(민법 제110조 사기) + 자동차관리법 위반 신고 + 형법 제347조 사기 고소 5단계를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 거래분쟁·돈 안 갚았다는 등 사실관계 다투는 상대방으로부터 사기로 고소당한 피고소인이 무혐의 입증 자료 + 무고죄 역공 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch55FraudB: SpokePage[] = [
  // ─── 1. fraud / used-car-mileage-history-tampering ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-mileage-history-tampering',
    keyword: '중고차 카히스토리 주행거리 조작 매매계약 취소',
    questionKeyword: '중고차 카히스토리에 사고이력 없다고 해서 1,500만원에 샀는데 알고보니 주행거리·사고이력 조작이었어요. 계약 취소·고소 가능한가요?',
    ctaKeyword: '중고차 조작 매수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 조작 매수 5단계 대응 | 로앤가이드',
      description:
        '카히스토리·주행거리 조작 중고차 매수 피해라면 매매계약 취소 + 자동차관리법 + 사기 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"카히스토리에 &lsquo;무사고·주행거리 6만km&rsquo; 라고 적혀 있어 1,500만원에 매수했는데, 한 달 뒤 정비소 점검에서 실주행 11만km + 좌측 사이드멤버 교체 이력이 드러났어요. 매매상은 &lsquo;성능점검부에 적힌 그대로 팔았다&rsquo;고만 합니다." 카히스토리·주행거리 조작은 단순 환불 분쟁이 아니라 민법 제110조 사기 의사표시 취소 + 자동차관리법 제79조(미터기 조작·점검부 위조) + 형법 제347조 사기죄가 동시에 검토되는 영역입니다. 자동차 365 보험사고이력·정비소 점검결과서·매매상 광고 캡처를 확보하고 5단계로 진행해보세요. 매매상사 거래라면 자동차매매사업조합 보증금에서 우선 보전이 가능한 흐름도 검토해볼 수 있어요.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 매수 후 조작 발견 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자동차 365·KCA·자동차매매업관리규정 안내를 참고하면, 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차량 이력·정비점검 확보 (1주 내)</strong> — 자동차 365(car365.go.kr)에서 보험사고이력·소유권이전·총주행거리 조회. 정비소에서 사고·주행거리 점검결과서 발급(5만~15만원). 점검부와의 차이를 시각화해두면 도움이 됩니다.</li>\n<li><strong>2단계 — 매매상사·딜러에 내용증명 (2주 내)</strong> — "광고 + 점검부 + 실측 차이 확인. 매매계약 취소·환불·손해배상 청구" 발송. 매매계약서·광고 캡처·점검결과서 첨부.</li>\n<li><strong>3단계 — KCA 피해구제 + 시·구청 신고 (2~3주차)</strong> — 한국소비자원 1372 → 피해구제 신청. 자율 해결 30일 → 분쟁조정 30일. 동시에 관할 시·구청 자동차등록 부서에 자동차관리법 제79조 위반(미터기 조작·점검부 위조) 신고.</li>\n<li><strong>4단계 — 사기 형사 고소 (4~6주차)</strong> — 매매상이 이력을 알고도 은폐한 정황(점검부 작성·VHIMS 조회 기록·동일 차량 이전 광고)이 모이면 ECRM(ecrm.police.go.kr) 사기 고소. 경찰청 사이버수사대 또는 관할 경찰서 경제팀.</li>\n<li><strong>5단계 — 민사 손해배상 (6주차~)</strong> — 매매계약 취소(민법 제110조) + 시세 차액·정비비·위자료 청구. 매매상사라면 자동차매매사업조합 보증금에서 우선 보전 검토 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "성능점검부에 적힌 대로다"라는 매매상 답변은 자동차매매업관리규정상 매매상의 점검·고지 의무를 면제하지 않습니다. 점검부 자체의 위·변조도 별도 처벌 대상.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">단계별로 정리해두면 KCA·고소·민사 모두에 활용됩니다.</strong></p>\n<ul>\n<li><strong>매매 단계 자료</strong> — 매매계약서, 성능·상태점검기록부, 광고 캡처(매매상사 사이트·플랫폼·SNS), 카카오톡·문자 상담 내역.</li>\n<li><strong>차량 이력 자료</strong> — 자동차 365 보험사고이력 출력본, 자동차이력관리시스템(VHIMS) 조회 결과, 등록원부.</li>\n<li><strong>실측 자료</strong> — 정비소 점검결과서(주행거리·사고이력·교체부품 명시), 사진·영상(주행계기판·하부·도장면 단차), 견적서.</li>\n<li><strong>지급 자료</strong> — 송금 내역, 카드 매입전표, 인수증, 명의이전 영수증.</li>\n<li><strong>피해 입증 자료</strong> — 시세 차액 자료(엔카·KB차차차 동일조건 시세), 추가 정비비 견적, 차량 사용 차질 입증.</li>\n</ul>',
      },
      {
        title: '⚠️ 자주 하는 실수 + 검토 포인트',
        content:
          '<p><strong style="color:#1e3a5f">아래 실수는 회수 가능성을 떨어뜨립니다.</strong></p>\n<ul>\n<li><strong>매매상에 직접 환불 요구만 반복</strong> — 구두 협상은 시간만 흘러가고 매매상사 폐업·명의변경 리스크. 1주차에 내용증명부터.</li>\n<li><strong>차량 임의 수리·도색</strong> — 사고이력·교체 흔적이 사라져 입증이 어려워집니다. 점검결과서 발급 전엔 원상태 보존.</li>\n<li><strong>"본인이 점검 안 했으니 본인 책임" 수긍</strong> — 매매상의 점검·고지 의무는 매매상에게 있습니다. 자동차매매업관리규정 + KCA 분쟁조정 사례 다수.</li>\n<li><strong>형사 고소만 의지</strong> — 사기 입증 어렵다며 검찰 불기소되는 사례 있음. KCA 피해구제·시구청 행정처분·민사 동시 트랙이 회수율 높입니다.</li>\n<li><strong>같은 매매상 다른 피해자 무시</strong> — 5명 이상 모이면 공동 고소단·공동 KCA 신청으로 수사 우선순위 상승. 매매상 영업정지 신고도 효과적.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">매매상사·개인 직거래·딜러 알선 여부에 따라 회수 트랙이 달라집니다. 광고·점검부·실측 차이를 AI로 먼저 정리해보세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (중고차 환불·점검부 분쟁)</li>\n<li><strong>자동차 365</strong> — car365.go.kr (보험사고이력·소유권이전·주행거리 조회 무료)</li>\n<li><strong>관할 시·구청 자동차등록 부서</strong> — 자동차관리법 위반(미터기 조작·점검부 위조) 신고</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182, 경찰청 사이버수사대</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보처리장치 입력 매개 기망과 사람에 대한 사기죄',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 정보처리장치에 정보를 입력하여 그 결과로 재산적 처분행위를 하는 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립할 수 있다고 판시했습니다. 중고차 매매에서도 매매상이 자동차이력관리시스템·성능점검부에 허위 정보를 기재하여 매수인이 차량 상태를 잘못 인식한 채 매수에 이르렀다면, 단순 채무불이행을 넘어 사기 구조로 평가될 수 있다는 시사점이 있습니다.',
        takeaway: '카히스토리·주행거리 조작은 매매상의 처음부터의 인식·은폐 의도가 입증되면 사기·자동차관리법 위반·표시광고법으로 평가될 수 있어, 광고 캡처·점검부·정비소 점검결과서·자동차 365 조회 결과를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '카히스토리에 "무사고"였는데 알고보니 사고차였습니다. 해지 가능한가요?',
        answer:
          '<strong>매매상이 사고이력을 알고도 은폐했거나 점검부에 허위 기재한 정황이 있으면 민법 제110조에 따른 사기 의사표시 취소가 검토 가능합니다.</strong> 자동차 365 보험사고이력·정비소 점검결과서로 점검부와의 차이를 입증하는 것이 핵심.',
      },
      {
        question: '주행거리 차이가 5만km 이상이면 무조건 미터기 조작인가요?',
        answer:
          '<strong>큰 차이는 강한 정황이지만 단정은 어렵고 자동차 365·VHIMS 기록과 비교해야 합니다.</strong> 동일 차량의 정기검사·정비이력에 기록된 누적 주행거리와 매도 당시 주행거리를 시간순으로 대조하면 조작 여부 확인이 수월합니다.',
      },
      {
        question: '매매상사가 폐업했어요. 자동차매매사업조합 보증금으로 받을 수 있나요?',
        answer:
          '<strong>등록 매매상사라면 사업조합 공제·보증금에서 우선 보전을 검토해볼 수 있습니다.</strong> 관할 시·구청 자동차등록 부서·자동차매매사업조합에 보증금 청구 절차를 문의하면 됩니다. 단, 한도·요건은 사례별 차이가 있어요.',
      },
      {
        question: '구매 후 6개월 지났는데 늦지 않았나요?',
        answer:
          '<strong>사기 공소시효는 7년, 민법상 사기 취소는 안 날부터 3년·법률행위로부터 10년이라 충분합니다.</strong> KCA 분쟁조정은 사건 발생 후 3년 내가 권장. 점검·정황 발견 시점이 기산점으로 작용합니다.',
      },
      {
        question: '시세 차액 외에 위자료·정비비도 청구 가능한가요?',
        answer:
          '<strong>시세 차액 + 추가 정비비 + 차량 사용 차질 + 위자료까지 청구 가능한 사례가 있습니다.</strong> 사기 입증 시 위자료 100~300만원 수준으로 인정되는 사례가 보고되며, 매매상사라면 사업조합 보증금에서도 일부 보전을 검토해볼 수 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '중고차 미터기·사고이력 은폐 사기', href: '/guide/fraud/fraud-used-car-meter-history-concealed' },
      { label: '중고차 미터기 조작 사기 환불', href: '/guide/fraud/fraud-used-car-odometer-rollback' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: 'SNS 광고 환불 거부 사기', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
    ],
  },

  // ─── 2. fraud / falsely-accused-defense-counter-complaint ───
  {
    domain: 'fraud',
    slug: 'fraud-falsely-accused-defense-counter-complaint',
    keyword: '사기 고소 무고 방어 무고죄 역고소',
    questionKeyword: '거래분쟁이었을 뿐인데 상대방이 "처음부터 속였다"며 사기로 고소했어요. 무고일 때 어떻게 방어하나요?',
    ctaKeyword: '사기 무고 방어 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '사기 고소당했지만 무고일 때 4가지 방어 | 로앤가이드',
      description:
        '사실과 다르게 신고되어 사기 혐의를 받고 있다면 무혐의 입증 자료 + 무고죄 역고소 4가지 방어 전략을 지금 확인하세요.',
    },
    intro:
      '<p>"사업상 거래대금 정산이 늦어진 것뿐이었는데 상대가 &lsquo;처음부터 갚을 의사 없이 속였다&rsquo;며 사기로 고소했습니다. 출석요구서를 받고 나니 무엇부터 정리해야 할지 막막하시죠." 사기죄(형법 제347조)는 처음부터의 기망 의사·재산 처분 인과·편취 결과 모두가 입증돼야 성립합니다. 거래분쟁·채무불이행·해석 차이가 사실과 다르게 신고되었다면, 1) 처음부터 기망 의사가 없었음을 보여주는 자료 + 2) 변제 노력·이행 정황 + 3) 상대방의 허위 진술 정황을 단계적으로 정리하면서 무고죄(형법 제156조) 역고소를 검토해볼 수 있어요. 혐의를 받고 있다면 출석 전 진술 방향을 미리 점검해두는 것이 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 단순 거래분쟁과 사기는 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사기죄 성립 4요소를 점검하면 단순 채무불이행과 구별이 가능합니다.</strong></p>\n<ul>\n<li><strong>① 처음부터의 기망 의사</strong> — 계약·차용 시점에 갚을 능력·의사가 전혀 없었는지가 핵심. 거래 당시의 자금 사정·매출·자산이 자료로 남아 있는지 점검.</li>\n<li><strong>② 기망 행위와 인과관계</strong> — 상대가 잘못된 정보로 처분행위를 했는지. 정상 거래 정보가 공개돼 있었다면 사기 인과 다툼 여지.</li>\n<li><strong>③ 재산상 손해</strong> — 단순 지연·일부 변제 중이면 손해 발생 자체가 다툼. 변제 내역·정산 진행 자료 중요.</li>\n<li><strong>④ 편취 의사 입증</strong> — 검찰은 변제 노력·연락 유지·자산 처분 회피 정황을 종합 판단. 회피 정황이 없으면 단순 채무불이행 평가가 되는 경우가 있어요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 형법 제156조 무고죄(허위 사실 신고 + 형사처벌 받게 할 목적). 사실과 다르게 신고되었다면 무혐의 + 무고죄 역고소를 동시 검토할 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 출석 전 어떤 자료부터 정리해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계로 정리하면 진술 일관성을 유지하기 쉽습니다.</strong></p>\n<ul>\n<li><strong>① 거래·계약 시점 자금 자료</strong> — 거래 당시 통장 잔액·매출장부·세금계산서·재무제표. 갚을 의사·능력이 있었음을 객관 자료로 입증.</li>\n<li><strong>② 변제 노력 자료</strong> — 일부 변제 송금 내역, 변제 일정 협의 카톡·문자, 채무조정 시도, 추가 담보 제안.</li>\n<li><strong>③ 거래 진행 자료</strong> — 계약서·견적서·세금계산서·납품·용역 이행 자료(사진·영상·일정표). 정상 이행 진행 정황.</li>\n<li><strong>④ 상대방 허위·과장 정황</strong> — 상대가 다른 사람·다른 자리에서 다르게 말한 카톡·증인 진술, 처음 합의된 조건과 다른 주장 변경 흐름.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 합의·변제 시점·진술 방향에 따라 결과가 달라질 수 있습니다. AI로 먼저 정리해보세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 무고죄 역고소는 언제 검토하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 무고죄(형법 제156조)는 허위 사실 + 형사처벌 받게 할 목적이 핵심으로, 4가지 정황이 모이면 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본 사기 사건 무혐의·불기소 결정 확보</strong> — 무고죄는 통상 본 사건의 무혐의 처분 후 진행하는 사례가 많습니다. 불기소이유서 확보가 출발점.</li>\n<li><strong>2단계 — 상대방의 허위 인식 입증</strong> — 신고 당시 상대가 사실관계를 알고도 거짓으로 신고한 정황(다른 자리 발언·문자·증인 진술).</li>\n<li><strong>3단계 — 형사처벌 받게 할 목적 입증</strong> — 단순 분쟁이 아닌 처벌·압박 목적이 있었음을 정황으로. 합의금 압박·반복 협박 메시지 등.</li>\n<li><strong>4단계 — 무고 고소장 제출</strong> — 관할 경찰서 또는 검찰에 고소장 제출. 본 사건 불기소이유서 + 허위 입증 자료 + 목적 입증 자료 첨부.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 본 사기 사건이 진행 중인데 무고죄 먼저 고소하면 "역고소로 압박" 평가가 될 수 있어요. 본 사건 불기소·무죄 결정 확보 후 무고죄 트랙으로 가는 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">사실과 다르게 신고되었다면 다음 경로로 방어 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>대한법률구조공단</strong> — 132 / klac.or.kr (평일 9~18시 무료 상담, 자격 요건). 형사 피의자 무료 변호인 안내 검토.</li>\n<li><strong>국선변호인</strong> — 검찰 송치 후 법원에 국선변호인 선정 신청 가능(형사소송법 제33조 사유 해당 시).</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr (무고 고소 접수 가능)</li>\n<li><strong>관할 경찰서 경제팀·검찰</strong> — 사기 출석조사 진행 기관, 무고 고소 접수처</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 성립의 객관적 요건',
        summary:
          '대법원 2022다255454 사건(대법원, 선고)에서 법원은 사회 내부에 존재하는 특정한 거래의 바로거래의 일종이 이루어져 있다고 하기 위하여는 그러한 거래가 사회 통념상 일반적으로 바로거래를 영위하는 영업으로서 명확히 인정되거나 적어도 영업으로서 일반인이 아무런 의심을 가지지 않은 채 자연스레 거래를 받아들여지는 등의 일정한 거래실태가 거래관행으로서 확립되어 있다고 할 수 있을 정도의 영업의식이 필요하다는 취지로 판시했습니다. 사기죄 역시 처음부터의 기망 의사가 객관적 자료로 뒷받침되지 않으면 단순 거래분쟁·채무불이행으로 평가될 여지가 있다는 시사점이 있습니다.',
        takeaway: '거래 시점 자금 사정·변제 노력·이행 정황이 자료로 남아 있다면 처음부터의 기망 의사 입증이 어려워져 단순 채무불이행으로 평가될 수 있어, 출석 전 거래 시점부터의 자료를 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '사기로 고소당했는데 출석요구서가 왔어요. 그냥 가도 되나요?',
        answer:
          '<strong>혐의를 받고 있다면 출석 전 진술 방향과 자료를 미리 점검해두는 것이 안전합니다.</strong> 거래 시점 자금·변제 노력·계약서를 시간순으로 정리하고, 일관된 진술 흐름을 준비하세요. 132 또는 국선변호인 안내 검토.',
      },
      {
        question: '돈을 일부 갚았는데도 사기로 고소됐습니다. 사기 성립 가능한가요?',
        answer:
          '<strong>일부 변제·변제 노력은 처음부터의 기망 의사가 없었다는 강한 정황이 됩니다.</strong> 변제 송금 내역·일정 협의 카톡·추가 담보 제안 자료를 모두 모아두세요. 단순 채무불이행 평가로 이어지는 사례가 보고됩니다.',
      },
      {
        question: '상대방이 합의금을 과도하게 요구합니다. 응해야 하나요?',
        answer:
          '<strong>합의는 의무가 아니며, 사실관계 다툼 중인 사건에서 합의=인정으로 비칠 수 있어 신중히 검토해야 합니다.</strong> 무혐의 가능성이 높다면 합의 없이 진행하는 사례도 있고, 일부 변제 + 분쟁조정으로 가는 트랙도 있어요.',
      },
      {
        question: '무고죄 역고소는 본 사건 끝나기 전에 해도 되나요?',
        answer:
          '<strong>본 사건 진행 중 역고소는 "압박" 평가가 될 수 있어 본 사건 불기소·무죄 결정 확보 후 진행하는 사례가 일반적입니다.</strong> 다만 명백한 허위 정황이 강하면 동시 진행 사례도 있어 사실관계 강도에 따라 검토.',
      },
      {
        question: '무혐의 받으면 무고죄가 자동 성립하나요?',
        answer:
          '<strong>무혐의 = 무고 자동 성립이 아닙니다.</strong> 무고죄는 신고자가 허위라는 인식 + 형사처벌 받게 할 목적이 별도로 입증돼야 합니다. 단순 사실 오인·법률 해석 차이는 무고로 평가되지 않는 사례가 많아요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '중고차 미터기·사고이력 은폐 사기', href: '/guide/fraud/fraud-used-car-meter-history-concealed' },
      { label: 'SNS 광고 환불 거부 사기', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '명품 가품 판매 사기 환불', href: '/guide/fraud/fraud-luxury-fake-counterfeit' },
    ],
  },
];
