import { SpokePage } from '../spoke-pages';

// batch87 fraud(6) + sex-crime(4) — 10개 (2026-06-04)
//
// 고유 존재 이유:
// 1. fraud-romance-military-impersonation-track — 일반 로맨스스캠류와 분기. '해외 파병 군인을 사칭해 호감을 쌓고 송금을 유도' 전기통신금융사기·형 폐지 여부 판단형 트랙(victim).
// 2. fraud-used-car-lease-takeover-track — 일반 중고차 사기류와 분기. '리스 차량 승계를 빌미로 보증금·승계비만 받고 잠적' 계약 당시 편취 고의·기망 단정 한계 판단형 트랙(victim).
// 3. fraud-monthly-rent-double-contract-track — 일반 전세사기류와 분기. '월세 이중계약으로 보증금을 중복 편취' 대가·담보 있어도 교부금 전부 편취액 판단형 트랙(victim).
// 4. fraud-online-shopping-nondelivery-track — 일반 미배송류와 분기. '온라인쇼핑 결제 후 상품 미배송·연락 두절' 제3자 교부형 사기·지급정지 절차형 트랙(victim).
// 5. fraud-membership-refund-refusal-track — 일반 환불거부 분쟁과 분기. '헬스장 멤버십 환불을 거부하며 폐업·잠적' 진정 피해자 특정·처분행위 판단형 트랙(victim).
// 6. fraud-borrowed-name-account-falsely-accused-defense — 일반 사기 무고류와 분기. '대포통장 명의대여·현금수거로 보이스피싱 공범 입건' 미필적 고의·간접사실 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-taxi-passenger-contact-track — 일반 추행류와 분기. '택시 안에서 승객·기사 사이 추행' 폭행·협박의 의미 변경 법리 판단형 트랙(victim).
// 8. sex-crime-lodging-hidden-cam-track — 일반 불법촬영류와 분기. '숙박업소 몰래카메라 촬영·시청' 공공연성·전시·상영 법리 절차형 트랙(victim).
// 9. sex-crime-synthetic-photo-sns-spread-track — 일반 유포류와 분기. '합성·딥페이크 사진을 SNS에 유포' 의사에 반한 반포 판단 기준 판단형 트랙(victim).
// 10. sex-crime-blackout-drunk-falsely-accused-defense — 일반 성범죄 무고류와 분기. '만취·블랙아웃 상태 추행으로 고소당함' 기습추행·추행 해당성 다툼 방어 판단형 트랙(accused).

export const spokesBatch87FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-romance-military-impersonation-track ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-military-impersonation-track',
    keyword: '군인 사칭 로맨스스캠 사기',
    questionKeyword: 'SNS·데이팅앱에서 해외 파병 군인이라는 사람과 몇 달간 연락하며 정이 들었는데, \'통관비·휴가비·송금 수수료가 필요하다\'며 돈을 요구해 여러 차례 송금했어요. 알고 보니 사진도 신분도 가짜였는데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '군인 사칭 로맨스스캠 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '군인 사칭 로맨스스캠 사기 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '해외 파병 군인을 사칭해 호감을 쌓고 명목별 송금을 유도당했다면, 형법 제347조 사기와 전기통신금융사기의 기망·편취를 따지고 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·데이팅앱에서 \'해외 파병 군인\', \'유엔 평화유지군\'이라며 다가온 상대와 몇 달간 사진·영상까지 주고받으며 정이 든 분의 상황입니다. 그런데 어느 순간부터 \'통관비\', \'휴가 신청비\', \'송금 수수료\', \'세관 보관료\'라는 명목으로 돈을 요구하기 시작했고, 시키는 대로 여러 차례 송금했지만 약속한 만남·정산은 끝내 이뤄지지 않은 채 사진도 신분도 모두 가짜였음을 알게 돼 막막하실 거예요. 마음까지 다친 상황이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 처음부터 존재하지 않는 신분·관계를 꾸며 호감을 이용해 송금을 유도한 정황은 기망행위로 평가될 여지가 있고, 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 전기통신금융사기 처벌 범위를 확대·강화한 법 개정 이후에도 종전 행위가 범죄를 구성하지 않게 돼 형이 폐지된 것은 아니라고 본 사례 흐름이 있는 영역입니다. 사칭 신분 + 호감 이용 + 명목별 송금 결합은 \'기망 고의·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 대화·송금 정리 ② 기망 고의 ③ 지급정지 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 군인 사칭 로맨스스캠 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대화·기망 고의·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대화·송금 정리</strong> — 신분 소개·호감 대화·명목별 입금 요구·송금 내역 정리.</li>\n<li><strong>② 기망 고의</strong> — 가짜 신분·관계로 호감을 이용해 송금을 유도한 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 국내 계좌 송금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·전기통신금융사기 신고 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 수법 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상 군인·기관은 통관비·수수료를 개인 계좌로 송금받지 않는다는 점이 분기점입니다. 추가 송금을 멈추고 대화·송금 흐름과 상대 계정을 그대로 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 추가 송금 중단·자료 보존 (즉시)</strong> — 대화·프로필·사진·명목·송금 내역 보존, 추가 송금 중단.</li>\n<li><strong>2단계 — 지급정지 요청 (즉시)</strong> — 국내 계좌 송금분은 은행·112로 지급정지 요청.</li>\n<li><strong>3단계 — 신분·계정 확인 (즉시)</strong> — 사진 역검색·계정·계좌로 동일 수법 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 피해구제·집단 대응 (2개월 내)</strong> — 은행 피해구제신청·동일 수법 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">군인 사칭 로맨스스캠 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 대화·기망 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>상대 프로필·사진·소개 신분 캡처 (사칭 정황)</strong></li>\n<li><strong>호감·관계 형성 대화 전체 (기망 경위)</strong></li>\n<li><strong>통관비·수수료 등 명목별 요구 메시지</strong></li>\n<li><strong>계좌이체·송금 내역 (피해 금액)</strong></li>\n<li><strong>상대 계좌·연락처·메신저 계정 정보</strong></li>\n<li><strong>사진 역검색·동일 수법 피해 조회 결과</strong></li>\n<li><strong>사건사고사실확인원·은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대가 보낸 사진을 역검색하면 도용된 이미지인 경우가 많아 사칭 정황을 보여주는 자료가 됩니다. 명목별로 언제 얼마를 보냈는지 시간 순으로 정리하면 기망 흐름이 선명해집니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 존재하지 않는 신분·관계로 송금을 유도했는지.</li>\n<li><strong>자발적 송금 항변</strong> — \'호의로 보낸 돈\'이라는 주장의 다툼.</li>\n<li><strong>전기통신금융사기</strong> — 비대면 송금 유도로 특별법 적용 소지가 있는지.</li>\n<li><strong>가해자 특정</strong> — 계정·계좌·아이피로 상대를 특정할 수 있는지.</li>\n<li><strong>해외 송금</strong> — 국외 계좌·환전을 거친 자금 추적 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (전기통신금융사기·피해구제 상담)</strong></li>\n<li><strong>한국인터넷진흥원 118 (계정·전자정보 침해 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신금융사기 처벌 개정과 형 폐지 여부',
        summary:
          '대법원 2024도7516(대법원, 2024.09.27 선고) 영역에서 법원은 전기통신금융사기 처벌 범위를 확대하고 법정형을 강화하기 위해 관련 특별법이 개정되었더라도, 종전에 형사처벌 대상으로 규정한 정보·명령 입력 행위가 범죄를 구성하지 않게 되어 그에 관한 형이 폐지된 것은 아니라고 판시했습니다. 군인 사칭으로 비대면 송금을 유도한 사안에서 기망·편취와 특별법 적용을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '사칭 신분 + 호감 이용 + 명목별 송금 결합 시 기망 고의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 좋아서 보낸 돈인데도 사기가 되나요?',
        answer:
          '<strong>가짜 신분·관계로 호감을 이용해 송금을 유도한 정황이 있으면 기망으로 다툴 수 있는 영역입니다.</strong> 소개 신분·대화를 확보하세요.',
      },
      {
        question: '상대가 정말 군인인지 어떻게 확인하나요?',
        answer:
          '<strong>사진 역검색·계정·계좌로 도용·사칭 정황을 확인하는 것이 핵심인 영역입니다.</strong> 프로필 사진부터 역검색해 보세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>국내 계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
      {
        question: '상대가 해외에 있다는데 신고가 되나요?',
        answer:
          '<strong>국내 송금 계좌·국내 조력자를 단서로 수사가 진행될 수 있는 영역입니다.</strong> 송금 계좌 정보를 모두 모으세요.',
      },
      {
        question: '같은 수법 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 계정·계좌 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '로맨스스캠 대응', href: '/guide/fraud/fraud-romance-scam-response-track' },
      { label: '전기통신금융사기 환급', href: '/guide/fraud/fraud-telecom-finance-refund-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 2. fraud-used-car-lease-takeover-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-lease-takeover-track',
    keyword: '중고차 리스승계 사기',
    questionKeyword: '시세보다 싼 리스 차량을 승계받기로 하고 \'승계비·보증금·이전 수수료\'를 먼저 보냈는데, 막상 명의 이전도 차량 인도도 되지 않고 상대는 연락이 끊겼어요. 알고 보니 리스료 연체에 다른 사람에게도 같은 차를 넘긴 정황이 있었는데, 사기로 돌려받을 수 있나요?',
    ctaKeyword: '중고차 리스승계 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 리스승계 사기 — 5단계 편취 고의·환급 점검 | 로앤가이드',
      description:
        '리스 차량 승계를 빌미로 승계비·보증금만 받고 잠적했다면, 형법 제347조 사기의 편취 고의를 계약 당시 이행 의사로 따지고 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「시세보다 저렴하게 리스·할부 차량을 승계받기로 하고 \'승계비\', \'보증금\', \'이전 수수료\', \'밀린 리스료\' 명목으로 돈을 먼저 보낸 분의 상황입니다. 그런데 약속한 명의 이전이나 차량 인도는 계속 미뤄지다 끝내 이뤄지지 않고, 알고 보니 리스료가 연체된 차량이거나 같은 차를 다른 사람에게도 넘긴 정황이 드러나 막막하실 거예요. 보낸 돈도 차도 모두 잃을까 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 처음부터 승계를 이행할 의사·능력 없이 비용만 받은 정황은 기망행위로 평가될 여지가 있고, 비용 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 편취에 의한 사기죄의 성립은 계약 당시를 기준으로 이행 의사·능력이 없음에도 속였는지로 판단하고, 거래의 내용·이행 과정 등을 종합해야 하며 행정법규 위반 사정만으로 곧바로 기망행위라 단정해서는 안 된다고 본 사례 흐름이 있는 영역입니다. 승계 빌미 + 선비용 + 미이행 결합은 \'편취 고의·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 편취 고의 ③ 지급정지 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 리스승계 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·편취 고의·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 승계 광고·계약·명목별 입금 요구·이체 내역 정리.</li>\n<li><strong>② 편취 고의</strong> — 승계 의사·능력 없이 비용만 받은 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 이체분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 수법 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약 당시 실제 승계·이전을 이행할 의사·능력이 있었는지가 기망 판단의 핵심입니다. 리스사 연체 여부·중복 양도 정황과 송금 흐름을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 광고·계약·대화·명목·이체 내역 보존.</li>\n<li><strong>2단계 — 리스·명의 실체 확인 (즉시)</strong> — 리스사·등록원부로 연체·중복 양도·실소유 확인.</li>\n<li><strong>3단계 — 지급정지·사기 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (이후)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 리스승계 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·편취 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>승계 광고·매물 설명 캡처 (거래 내용)</strong></li>\n<li><strong>승계 계약서·대화 (약속 내용)</strong></li>\n<li><strong>승계비·보증금·수수료 등 명목별 요구 메시지</strong></li>\n<li><strong>계좌이체·입금 내역 (피해 금액)</strong></li>\n<li><strong>리스사 연체·자동차등록원부 자료</strong></li>\n<li><strong>중복 양도·미이행·연락 두절 정황</strong></li>\n<li><strong>상대 상호·연락처·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 리스사·등록원부로 차량이 연체 상태인지, 같은 차가 다른 사람에게도 양도됐는지 확인하면 편취 고의 정황이 드러나는 경우가 많습니다. 명목별 송금 내역과 미이행 정황을 함께 정리하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 승계 의사·능력 없이 비용만 받았는지.</li>\n<li><strong>판단 시점</strong> — 계약 당시 이행 가능성이 있었는지.</li>\n<li><strong>단순 채무불이행 항변</strong> — \'사정상 못 했다\'는 주장과의 구별.</li>\n<li><strong>중복 양도</strong> — 같은 차를 여러 사람에게 넘긴 정황이 있는지.</li>\n<li><strong>판매자 특정</strong> — 상호·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고차·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의의 판단 시점과 기망행위 단정 한계',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 편취에 의한 사기죄의 성립은 계약 당시를 기준으로 일을 완성·이행할 의사·능력이 없음에도 속여 대가를 편취할 고의가 있었는지로 판단해야 하고, 거래의 내용·체결 경위·이행 과정 등을 종합해야 하며, 관련 행정법규를 위반한 사정만으로 곧바로 기망행위에 해당한다고 단정해서는 안 된다고 판시했습니다. 리스 차량 승계를 빌미로 비용만 받은 사안에서 편취 고의를 살펴볼 때에도 계약 당시 이행 의사를 기준으로 검토해볼 수 있습니다.',
        takeaway: '승계 빌미 + 선비용 + 미이행 결합 시 편취 고의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계약서까지 썼는데도 사기가 되나요?',
        answer:
          '<strong>계약 형식보다 당시 실제 이행 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 리스 연체·중복 양도 정황을 확보하세요.',
      },
      {
        question: '단순히 사정이 생겨 못 했다는데 어떻게 구별하나요?',
        answer:
          '<strong>계약 당시부터 이행 능력이 없었거나 속였는지로 갈리는 영역입니다.</strong> 거래 경위·이행 과정을 정리하세요.',
      },
      {
        question: '같은 차를 다른 사람에게도 넘겼다는데요?',
        answer:
          '<strong>중복 양도 정황은 편취 고의를 보여주는 자료가 되는 영역입니다.</strong> 등록원부·다른 피해자 자료를 모으세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
      {
        question: '같은 수법 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 계좌·상호 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '중고차 거래사기 대응', href: '/guide/fraud/fraud-used-car-deal-track' },
      { label: '편취 고의 입증', href: '/guide/fraud/fraud-intent-proof-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 3. fraud-monthly-rent-double-contract-track ───
  {
    domain: 'fraud',
    slug: 'fraud-monthly-rent-double-contract-track',
    keyword: '월세 이중계약 보증금 편취',
    questionKeyword: '집주인 대신 관리한다는 사람과 월세 계약을 하고 보증금을 보냈는데, 알고 보니 같은 집을 여러 명과 이중·삼중으로 계약하고 보증금만 챙겨 잠적했어요. 정작 집주인은 모른다고 하는데, 사기로 신고하고 보증금을 돌려받을 수 있나요?',
    ctaKeyword: '월세 이중계약 보증금 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '월세 이중계약 보증금 편취 — 5단계 편취액·환급 점검 | 로앤가이드',
      description:
        '같은 집을 이중계약해 보증금만 챙겨 잠적했다면, 형법 제347조 사기에서 대가·담보가 있어도 교부한 금원 전부가 편취액일 수 있고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「집주인 본인이나 \'위임받아 관리한다\'는 사람과 월세 계약을 맺고 보증금을 보냈는데, 알고 보니 같은 집을 여러 세입자와 이중·삼중으로 계약하고 보증금만 챙겨 잠적한 분의 상황입니다. 정작 집주인은 \'위임한 적 없다\'거나 \'나도 피해자\'라며 발뺌하고, 입주조차 못 한 채 보증금을 떼일까 막막하실 거예요. 살 집이 걸린 문제라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 계약·임대 권한이 없거나 동일 목적물을 중복 계약할 의도로 보증금을 받은 정황은 기망행위로 평가될 여지가 있고, 보증금 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취 사기죄에서 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 그 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역입니다. 중복 계약 + 권한 결여 + 보증금 편취 결합은 \'편취액·진정 피해자\' 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·송금 정리 ② 권한·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 월세 이중계약 보증금 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·권한 기망·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·송금 정리</strong> — 계약서·임대 권한 주장·보증금 송금 내역 정리.</li>\n<li><strong>② 권한·기망</strong> — 임대 권한 없이·중복 계약 의도로 받은 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환급·담보가 있어도 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약 상대가 임대 권한이 있었는지와 같은 집을 여럿과 계약했는지가 기망 판단의 핵심입니다. 등기부·집주인 확인 결과와 동일 목적물 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·송금 자료 보존 (즉시)</strong> — 계약서·위임 주장·대화·보증금 이체 내역 보존.</li>\n<li><strong>2단계 — 권한·소유 확인 (즉시)</strong> — 등기부·집주인 본인 확인, 위임 여부·중복 계약 조회.</li>\n<li><strong>3단계 — 지급정지·사기 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (이후)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">월세 이중계약 보증금 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·권한 기망·편취액 갈래입니다.</strong></p>\n<ul>\n<li><strong>월세 계약서·특약 (계약 내용)</strong></li>\n<li><strong>임대 권한·위임 주장 대화 (권한 정황)</strong></li>\n<li><strong>보증금·월세 이체 내역 (피해 금액)</strong></li>\n<li><strong>등기부등본·소유자 확인 자료</strong></li>\n<li><strong>집주인 위임 여부 확인 회신</strong></li>\n<li><strong>동일 목적물 중복 계약·피해 조회 결과</strong></li>\n<li><strong>상대 신원·계좌·연락처 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기부상 소유자와 계약 상대가 다른데 위임장도 불분명하면 권한 결여·기망 정황의 단서가 됩니다. 같은 집을 계약한 다른 세입자를 함께 찾으면 편취 고의와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대 권한</strong> — 계약 상대가 임대·위임 권한이 있었는지.</li>\n<li><strong>중복 계약</strong> — 같은 집을 여럿과 계약했는지.</li>\n<li><strong>편취액</strong> — 일부 환급·담보가 있어도 교부한 금원 전부가 피해액인지.</li>\n<li><strong>진정 피해자</strong> — 누가 실제 손해를 입은 피해자인지.</li>\n<li><strong>집주인 책임</strong> — 집주인 관여·표현대리 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가·담보가 있어도 교부금 전부가 편취액',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되거나 담보가 제공된 경우에도 편취액은 그 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 이중계약으로 보증금을 편취한 사안의 피해액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '중복 계약 + 권한 결여 + 보증금 편취 결합 시 편취액·진정 피해자 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '집주인이 모른다는데도 사기가 되나요?',
        answer:
          '<strong>계약 상대가 임대 권한 없이 보증금을 받았는지가 핵심인 영역입니다.</strong> 등기부·위임 여부를 확인하세요.',
      },
      {
        question: '일부라도 돌려준다는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환급·담보가 있어도 교부한 보증금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '같은 집을 여러 명과 계약했다는데요?',
        answer:
          '<strong>중복 계약 정황은 편취 고의를 보여주는 자료가 되는 영역입니다.</strong> 다른 세입자·계약을 함께 찾으세요.',
      },
      {
        question: '누가 진짜 피해자인지 어떻게 가리나요?',
        answer:
          '<strong>실제로 보증금을 교부해 손해를 입은 사람이 피해자가 되는 영역입니다.</strong> 송금·입주 관계를 정리하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '임대차 보증금 사기 대응', href: '/guide/fraud/fraud-deposit-scam-response-track' },
      { label: '편취액 산정 쟁점', href: '/guide/fraud/fraud-loss-amount-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 4. fraud-online-shopping-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-shopping-nondelivery-track',
    keyword: '온라인쇼핑 미배송 사기',
    questionKeyword: '온라인 쇼핑몰·SNS 마켓에서 물건을 주문하고 결제까지 마쳤는데, 약속한 날이 지나도 배송이 안 되고 판매자는 송장만 가짜로 등록하거나 연락이 끊겼어요. 환불도 안 해주는데, 사기로 신고하고 결제 금액을 돌려받을 수 있나요?',
    ctaKeyword: '온라인쇼핑 미배송 사기 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인쇼핑 미배송 사기 — 5단계 신고·환급 점검 | 로앤가이드',
      description:
        '결제했는데 상품이 오지 않고 판매자가 잠적했다면, 형법 제347조 사기의 기망·재물 교부와 지급정지·피해구제·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 쇼핑몰·SNS 마켓·중고거래에서 물건을 주문하고 결제까지 마쳤는데, 약속한 배송일이 지나도 상품이 오지 않는 분의 상황입니다. 판매자는 \'곧 보낸다\'며 미루다 가짜 송장만 등록하거나, 환불 요청에 답하지 않고 끝내 연락이 끊겨, 보낸 돈도 물건도 받지 못할까 막막하실 거예요. 결제는 이미 끝나 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 처음부터 발송할 의사·능력 없이 결제만 받은 정황은 기망행위로 평가될 여지가 있고, 결제·이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기망으로 재물 교부가 있으면 그 자체로 사기죄가 성립하고, 범인이 스스로 취득하지 않고 제3자에게 교부받게 한 경우에도 일정 요건 아래 사기죄가 성립할 수 있다고 본 사례 흐름이 있는 영역입니다. 결제 완료 + 미배송 + 연락 두절 결합은 \'기망·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 주문·결제 정리 ② 기망 정황 ③ 지급정지 ④ 형사 신고 ⑤ 피해구제·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인쇼핑 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 주문·기망 정황·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 주문·결제 정리</strong> — 주문 내역·결제·배송 약속·송장 정보 정리.</li>\n<li><strong>② 기망 정황</strong> — 발송 의사 없이 결제만 받거나 가짜 송장을 쓴 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌이체분은 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 피해구제·환급</strong> — 결제수단별 환불·피해구제·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계좌이체·간편송금은 지급정지·피해구제로, 신용카드·간편결제는 결제 취소·이의제기로 갈래가 나뉩니다. 가짜 송장·동일 계좌 다수 피해 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지·자료 보존 (즉시)</strong> — 계좌이체분은 은행·112로 지급정지 요청, 주문·결제·대화 보존.</li>\n<li><strong>2단계 — 판매자·계좌 조회 (즉시)</strong> — 상호·계좌·연락처로 사기 의심 거래·동일 피해 조회.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 소비자상담·결제 이의 (병행)</strong> — 한국소비자원 1372 상담, 카드·간편결제 이의제기.</li>\n<li><strong>5단계 — 환급·집단 대응 (이후)</strong> — 채권소멸 후 환급, 동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인쇼핑 미배송 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 주문·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>주문 내역·상품 페이지 캡처 (거래 내용)</strong></li>\n<li><strong>결제·계좌이체 영수증 (피해 금액)</strong></li>\n<li><strong>배송 약속·가짜 송장·조회 화면</strong></li>\n<li><strong>판매자와의 대화·환불 요청·연락 두절 정황</strong></li>\n<li><strong>판매자 상호·계좌·연락처 정보</strong></li>\n<li><strong>동일 계좌·판매자 피해 조회 결과</strong></li>\n<li><strong>사건사고사실확인원·결제 이의신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 송장번호가 가짜이거나 조회되지 않는 화면을 캡처해 두면 발송 의사가 없었다는 정황 자료가 됩니다. 같은 계좌·판매자로 여러 피해가 있으면 동일 수법 공동 신고에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 발송 의사·능력 없이 결제만 받았는지.</li>\n<li><strong>단순 배송 지연 항변</strong> — \'곧 보낸다\'는 주장과의 구별.</li>\n<li><strong>가짜 송장</strong> — 조회되지 않는 송장을 등록했는지.</li>\n<li><strong>결제수단</strong> — 계좌이체·카드·간편결제별 환급 갈래.</li>\n<li><strong>판매자 특정</strong> — 상호·계좌·계정으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 재물 교부와 제3자 교부형 사기',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 재물 편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 그 이익이 결과적으로 누구에게 귀속되는지는 사기죄 성부에 영향이 없으며, 범인이 직접 대금을 수령하지 않고 제3자가 교부받게 한 경우에도 일정한 관계가 인정되면 사기죄가 성립할 수 있다고 판시했습니다. 결제 후 미배송 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '결제 완료 + 미배송 + 연락 두절 결합 시 기망·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '배송이 늦은 것뿐일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>발송 의사·능력 없이 결제만 받았는지가 핵심인 영역입니다.</strong> 가짜 송장·연락 두절 정황을 확보하세요.',
      },
      {
        question: '계좌이체로 냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
      {
        question: '카드·간편결제로 냈으면 어떻게 하나요?',
        answer:
          '<strong>카드사·간편결제 이의제기·결제 취소를 함께 검토하는 영역입니다.</strong> 미배송 정황을 정리해 이의신청하세요.',
      },
      {
        question: '판매자가 연락을 끊었는데 신고가 되나요?',
        answer:
          '<strong>상호·계좌·계정으로 수사기관이 추적할 수 있는 영역입니다.</strong> 계좌로 사기 의심 거래를 먼저 조회해 보세요.',
      },
      {
        question: '금액이 작은데도 신고할 수 있나요?',
        answer:
          '<strong>소액이라도 사기는 성립할 수 있고 동일 피해를 묶으면 대응이 쉬워지는 영역입니다.</strong> 같은 계좌 피해를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '온라인 거래사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 5. fraud-membership-refund-refusal-track ───
  {
    domain: 'fraud',
    slug: 'fraud-membership-refund-refusal-track',
    keyword: '헬스장 멤버십 환불거부 사기',
    questionKeyword: '헬스장·필라테스 장기 멤버십을 결제했는데, 얼마 안 가 환불을 거부하더니 갑자기 폐업하거나 양도하고 사장은 연락이 끊겼어요. 처음부터 폐업할 걸 알고 회원을 모집한 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '헬스장 멤버십 환불거부 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 멤버십 환불거부 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '장기 멤버십 결제 후 환불 거부·폐업으로 돈이 묶였다면, 형법 제347조 사기에서 진정 피해자 특정과 처분행위 법리를 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·필라테스·PT 장기 멤버십을 \'지금 등록하면 대폭 할인\'이라는 말에 큰 금액으로 결제했는데, 얼마 지나지 않아 환불을 거부하더니 갑자기 폐업하거나 다른 사람에게 양도하고 사장은 연락이 끊긴 분의 상황입니다. 정작 운영이 어려운 걸 알면서도 회원을 계속 모집한 정황이 보여, 남은 이용 기간만큼의 돈을 떼일까 막막하실 거예요. 환불 규정도 복잡해 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 폐업·정상 운영 불가를 알면서도 이를 숨긴 채 장기 회원권을 판매한 정황은 기망행위로 평가될 여지가 있고, 결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기소된 사기 공소사실의 재산상 피해자와 공소장 기재 피해자가 다른 것이 판명된 경우 동일성을 해치지 않는 한 진정한 피해자를 가려 유죄로 인정해야 한다고 본 사례 흐름이 있는 영역입니다. 환불 거부 + 폐업·양도 + 모집 지속 결합은 \'기망·진정 피해자\' 다툼이 가능한 트랙입니다. 피해자라면 ① 결제·계약 정리 ② 기망 정황 ③ 진정 피해자 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 멤버십 환불거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·기망 정황·진정 피해자·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·계약 정리</strong> — 등록 계약·환불 규정·결제·이용 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 폐업·운영 불가를 알면서 회원을 모집한 정황 정리.</li>\n<li><strong>③ 진정 피해자</strong> — 실제 손해를 입은 회원·결제자 특정 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·피해구제·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 환불 분쟁과 달리, 폐업·운영 불가를 알면서도 장기 회원을 계속 모집했는지가 사기 판단의 분기점입니다. 모집 시점과 폐업 정황, 같은 피해 회원을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·계약 자료 보존 (즉시)</strong> — 계약·환불 규정·결제·대화·폐업 공지 보존.</li>\n<li><strong>2단계 — 운영·폐업 시점 확인 (즉시)</strong> — 모집 시점과 폐업·양도 시점, 동일 피해 회원 조회.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부 항변·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (이후)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 멤버십 환불거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 결제·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>등록 계약서·환불 규정 (계약 내용)</strong></li>\n<li><strong>결제·할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>할인·장기 등록 권유 광고·대화</strong></li>\n<li><strong>환불 거부·폐업·양도 공지 캡처</strong></li>\n<li><strong>이용 횟수·잔여 기간 자료 (손해 산정)</strong></li>\n<li><strong>동일 피해 회원·모집 시점 자료</strong></li>\n<li><strong>사업자·운영자 신원·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폐업·양도 직전까지 할인 행사로 장기 회원을 모집한 정황을 시점별로 모으면 기망 판단의 자료가 됩니다. 잔여 기간·이용 횟수를 정리하면 손해액 산정과 환급 검토에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 폐업·운영 불가를 알면서 회원을 모집했는지.</li>\n<li><strong>단순 환불 분쟁 항변</strong> — \'경영 악화일 뿐\'이라는 주장과의 구별.</li>\n<li><strong>진정 피해자</strong> — 실제 손해를 입은 회원·결제자가 누구인지.</li>\n<li><strong>손해액</strong> — 잔여 기간·이용 횟수를 반영한 피해 산정.</li>\n<li><strong>양수인 책임</strong> — 양도·인수 운영자의 환불 책임 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (헬스장·회원권 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (할부·결제 피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진정한 피해자 특정과 사기죄 인정',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기소된 사기 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것이 판명된 경우, 공소사실의 동일성을 해치지 않고 피고인의 방어권 행사에 실질적 불이익을 주지 않는 한 곧바로 무죄를 선고할 것이 아니라 진정한 피해자를 가려내어 그 피해자에 대한 사기죄로 처벌해야 한다고 판시했습니다. 멤버십 환불 거부·폐업 사안에서 실제 손해를 입은 피해자를 가릴 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '환불 거부 + 폐업·양도 + 모집 지속 결합 시 기망·진정 피해자 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 환불 분쟁인데도 사기가 되나요?',
        answer:
          '<strong>폐업·운영 불가를 알면서 회원을 모집했는지가 핵심인 영역입니다.</strong> 모집 시점과 폐업 정황을 확보하세요.',
      },
      {
        question: '사장이 경영이 어려웠을 뿐이라는데요?',
        answer:
          '<strong>모집 당시 정상 운영 의사·능력이 있었는지로 갈리는 영역입니다.</strong> 광고·할인 권유 시점을 정리하세요.',
      },
      {
        question: '가게가 양도됐는데 누구에게 받나요?',
        answer:
          '<strong>양도 경위와 인수 운영자의 책임 범위를 따지는 영역입니다.</strong> 양도·인수 공지와 계약을 확보하세요.',
      },
      {
        question: '카드 할부로 냈는데 환급이 되나요?',
        answer:
          '<strong>잔여 할부금 항변권 등 결제수단별 구제를 검토하는 영역입니다.</strong> 결제·계약 자료로 이의제기하세요.',
      },
      {
        question: '같은 피해 회원이 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 업소 피해 회원은 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 회원과 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '회원권·서비스 사기 대응', href: '/guide/fraud/fraud-membership-service-track' },
      { label: '폐업·환불 분쟁 대응', href: '/guide/fraud/fraud-closure-refund-track' },
      { label: '공동 고소·집단 대응', href: '/guide/fraud/fraud-joint-complaint-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 6. fraud-borrowed-name-account-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-borrowed-name-account-falsely-accused-defense',
    keyword: '대포통장 명의대여 무고',
    questionKeyword: '고액 아르바이트인 줄 알고 통장·체크카드를 빌려주거나 시키는 대로 현금을 수거해 전달했을 뿐인데, 알고 보니 보이스피싱이었다며 사기 공범으로 입건됐어요. 그게 범죄에 쓰이는 줄 정말 몰랐는데, 사실과 다른 이 혐의에 어떻게 방어하나요?',
    ctaKeyword: '대포통장 명의대여 미필적 고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '대포통장 명의대여 무고 방어 — 5단계 미필적 고의 점검 | 로앤가이드',
      description:
        '통장 대여·현금 수거로 보이스피싱 공범으로 입건됐다면, 미필적 고의·간접사실로 범의를 인정하는 법리와 인식 여부 다툼을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「\'고액 단기 알바\', \'수거 대행\'이라는 말에 통장·체크카드를 빌려주거나 시키는 대로 현금을 받아 전달했을 뿐인데, 알고 보니 보이스피싱이었다며 사기 공범·현금수거책으로 입건된 분의 상황입니다. 정작 그 돈이 범죄 피해금인 줄은 정말 몰랐는데 한순간에 가담자로 지목돼 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 보이스피싱 현금수거·계좌 대여에서 공모·범의가 인정되는지, 그리고 본인에게 미필적 고의조차 없었는지가 핵심 쟁점입니다. 판례는 보이스피싱 현금수거책의 공모·범의는 피해자의 현금을 수거한다는 사실을 인식하는 것으로 족하고 미필적 인식으로도 충분하나, 자신의 행위가 범죄에 이용되는 줄 모르고 행위에 나아간 경우에는 고의가 없어 죄책을 물을 수 없으며, 이때 범의·공모는 상당한 관련성이 있는 간접사실·정황사실을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 사실과 다르게 가담자로 지목된 경우 인식 여부와 정황을 정리해 다툴 수 있는 영역입니다. 명의 대여 + 미필적 고의 다툼 + 정황 검토 결합은 \'고의 부인·정황 다툼\' 방어가 가능한 트랙입니다. 사실과 다르게 입건됐다면 ① 경위 정리 ② 인식 여부 ③ 간접사실 ④ 공모 다툼 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대포통장 명의대여 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·인식 여부·간접사실·공모·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 모집 경위·업무 지시·통장 대여·수거 범위 정리.</li>\n<li><strong>② 인식 여부</strong> — 범죄 이용 사실을 알았는지·미필적 인식이 있었는지 검토.</li>\n<li><strong>③ 간접사실</strong> — 보수·업무 방식·이상 정황 등 관련 정황 정리.</li>\n<li><strong>④ 공모 다툼</strong> — 조직원과 의사의 결합이 있었는지 다툼.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자신의 행위가 범죄에 이용되는 줄 정말 몰랐다면 고의가 부정될 수 있으나, 범의·공모는 간접사실·정황을 종합해 판단된다는 점이 분기점입니다. 모집 경위·업무 방식·이상 신호 인식 여부를 정리해 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 모집 광고·지시 메시지·통장 대여·수거 내역 정리.</li>\n<li><strong>2단계 — 인식 정황 정리 (1주)</strong> — 범죄 이용을 몰랐던 정황·정상 업무로 오인한 경위 정리.</li>\n<li><strong>3단계 — 간접사실·공모 쟁점 정리 (2주)</strong> — 보수·업무 방식·이상 정황 등 간접사실, 공모 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 피해 회복·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대포통장 명의대여 미필적 고의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·인식 여부·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>모집 광고·구인 경위 기록 (가담 정황)</strong></li>\n<li><strong>업무 지시·연락 메시지 (지시 범위)</strong></li>\n<li><strong>통장 대여·현금 수거·전달 내역 (관여 사실)</strong></li>\n<li><strong>보수·대가 수수 자료 (정황 사실)</strong></li>\n<li><strong>범죄 이용을 몰랐던 정황 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n<li><strong>피해 회복·선처 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'범죄에 이용되는 줄 알았는지\'입니다. 모집 경위·업무 방식이 정상 업무로 보일 만했는지, 이상 신호를 인식할 수 있었는지를 정황별로 정돈하면 미필적 고의 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미필적 고의</strong> — 피해금 수거·범죄 이용을 미필적으로라도 인식했는지.</li>\n<li><strong>인식 부정</strong> — 정상 업무로 오인해 범죄 이용을 몰랐는지.</li>\n<li><strong>간접사실</strong> — 보수·업무 방식·이상 정황이 범의를 뒷받침하는지.</li>\n<li><strong>공모 여부</strong> — 조직원과 의사의 결합이 있었는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 현금수거책의 미필적 고의와 간접사실',
        summary:
          '대법원 2024도10141(대법원, 2024.12.12 선고) 영역에서 법원은 보이스피싱 현금수거책의 공모·범의는 피해자의 현금을 수거한다는 사실을 인식하는 것으로 족하고 미필적 인식으로도 충분하나, 자신의 행위가 범죄에 이용된다는 사실을 모르고 행위에 나아간 경우에는 고의가 없어 죄책을 물을 수 없으며, 공모·범의는 상당한 관련성이 있는 간접사실·정황사실을 종합하여 판단해야 한다고 판시했습니다. 통장 대여·현금 수거로 입건된 사안의 죄책을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '명의 대여 + 미필적 고의 다툼 + 정황 검토 결합 시 고의 부인·정황 다툼 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '범죄에 쓰이는 줄 몰랐는데도 처벌되나요?',
        answer:
          '<strong>범죄 이용을 정말 몰랐다면 고의가 부정될 수 있으나 정황을 종합해 판단하는 영역입니다.</strong> 몰랐던 정황을 정리하세요.',
      },
      {
        question: '미필적 고의라는 게 무슨 뜻인가요?',
        answer:
          '<strong>확정적 인식이 아니어도 범죄 이용 가능성을 인식·용인했는지가 핵심인 영역입니다.</strong> 이상 신호 인식 여부를 정리하세요.',
      },
      {
        question: '단순 알바인 줄 알았다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>모집 경위·업무 방식이 정상으로 보일 만했는지가 다툼의 자료가 되는 영역입니다.</strong> 광고·지시 메시지를 확보하세요.',
      },
      {
        question: '보수를 받았는데 더 불리한가요?',
        answer:
          '<strong>보수 수수는 간접사실의 하나일 뿐 인식·정황을 종합해 판단하는 영역입니다.</strong> 수수 맥락을 함께 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 공범·방조 방어', href: '/guide/fraud/fraud-accomplice-defense-track' },
      { label: '보이스피싱 수거책 무고 대응', href: '/guide/fraud/fraud-cash-collector-falsely-accused-track' },
      { label: '미필적 고의 다툼', href: '/guide/fraud/fraud-intent-dispute-track' },
      { label: '수사 진술 대응', href: '/guide/fraud/fraud-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/fraud/fraud-public-defender-track' },
    ],
  },

  // ─── 7. sex-crime-taxi-passenger-contact-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-passenger-contact-track',
    keyword: '택시 승객 추행',
    questionKeyword: '택시 안에서 기사 또는 동승자가 갑자기 허벅지나 어깨에 손을 대거나 몸을 더듬어 큰 불쾌감과 수치심을 느꼈어요. 좁은 차 안이라 그 순간엔 제대로 항의하지 못했는데, 이런 신체접촉도 추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '택시 승객 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '택시 승객 추행 — 5단계 강제추행·증거 점검 | 로앤가이드',
      description:
        '택시 안에서 갑작스러운 신체접촉을 당했다면, 형법 제298조 강제추행에서 폭행·협박의 의미를 새로 정의한 법리와 증거 보전까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「택시 안에서 기사 또는 동승자가 갑자기 허벅지·어깨에 손을 대거나 몸을 더듬어 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 좁고 밀폐된 차 안에서 운행 중이라 그 순간엔 제대로 항의하거나 빠져나오기 어려웠고, \'실수로 닿았다\'고 하면 어떻게 따져야 할지 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정하는 영역입니다. 판례는 강제추행죄의 \'폭행 또는 협박\'은 상대방의 항거를 곤란하게 할 정도일 것을 요하지 않고, 상대방의 신체에 불법한 유형력을 행사하거나 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것이라고 보아야 한다며 종래 법리를 변경한 사례 흐름이 있는 영역입니다. 갑작스러운 접촉 + 의사에 반함 + 밀폐 공간 결합은 \'강제추행·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 강제추행 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 승객 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·강제추행·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식·시각·차량 위치 정리.</li>\n<li><strong>② 강제추행</strong> — 의사에 반한 신체접촉이 추행에 해당하는지 정리.</li>\n<li><strong>③ 증거 보전</strong> — 블랙박스·택시 운행기록·직후 호소 정황 보전.</li>\n<li><strong>④ 가해자 특정</strong> — 차량번호·운행기록·결제 정보로 상대 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강제추행죄의 폭행·협박은 항거를 곤란하게 할 정도일 필요가 없다는 변경된 법리에 따라, 의사에 반한 갑작스러운 접촉도 추행으로 평가될 수 있는 영역입니다. 차량번호·운행기록·블랙박스 확보가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 운행 정보 보전 (즉시)</strong> — 차량번호·시각·승하차 위치를 메모하고 호출·결제 기록 확보.</li>\n<li><strong>2단계 — 직후 호소·진술 확보 (직후)</strong> — 지인·가족에게 즉시 알리고 직후 통화·메시지 남기기.</li>\n<li><strong>3단계 — 가해자 특정 (직후)</strong> — 호출앱·운행기록·차량번호로 상대 특정.</li>\n<li><strong>4단계 — 경찰 신고·진술 (준비 후)</strong> — 112 신고, 접촉 부위·방식·당시 상황 진술.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 승객 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·강제추행·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>접촉 부위·방식·시각·위치 메모</strong></li>\n<li><strong>차량번호·택시회사·호출앱 정보</strong></li>\n<li><strong>블랙박스·운행기록 보존 요청 자료</strong></li>\n<li><strong>호출·결제·승하차 기록 (시간 특정)</strong></li>\n<li><strong>직후 통화·메시지 기록 (즉시 호소 정황)</strong></li>\n<li><strong>동승자·목격자 진술·연락처</strong></li>\n<li><strong>해바라기센터 상담·진료 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 호출앱 기록과 결제 내역은 택시·운전자 특정의 강한 단서가 됩니다. 블랙박스·운행기록은 보존 기간이 짧으니 차량번호로 빨리 보존을 요청하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>강제추행</strong> — 의사에 반한 신체접촉이 추행으로 평가되는지.</li>\n<li><strong>우연한 접촉 항변</strong> — \'운행 중 실수로 닿았다\'는 주장의 다툼.</li>\n<li><strong>폭행·협박의 정도</strong> — 항거 곤란 정도가 아니어도 성립하는지.</li>\n<li><strong>추행의 고의</strong> — 의사에 반하는 유형력 행사 의도가 있었는지.</li>\n<li><strong>증거 시점</strong> — 블랙박스·운행기록 보존의 신속성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 폭행·협박 의미의 변경',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 \'폭행 또는 협박\'은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 상대방의 신체에 불법한 유형력을 행사하거나 일반적으로 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것이라고 보아야 한다며 종래의 판례 법리를 변경했습니다. 택시 안에서 갑자기 신체를 더듬은 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '갑작스러운 접촉 + 의사에 반함 + 밀폐 공간 결합 시 강제추행·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '세게 잡힌 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>항거를 곤란하게 할 정도가 아니어도 의사에 반한 접촉은 추행으로 평가될 수 있는 영역입니다.</strong> 접촉 부위·방식을 정리하세요.',
      },
      {
        question: '기사가 운전 중 실수로 닿았다고 하면요?',
        answer:
          '<strong>접촉 부위·방식·블랙박스 정황을 종합해 우연인지 판단하는 영역입니다.</strong> 운행기록을 신속히 확보하세요.',
      },
      {
        question: '택시를 어떻게 특정하나요?',
        answer:
          '<strong>호출앱·결제·운행기록으로 차량·운전자를 특정할 수 있는 영역입니다.</strong> 호출 기록부터 확보하세요.',
      },
      {
        question: '블랙박스가 없으면 입증이 어렵나요?',
        answer:
          '<strong>직후 호소·통화·동승자 진술 등 정황으로도 다툴 수 있는 영역입니다.</strong> 직후 정황을 구체적으로 남기세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-assault-report-procedure' },
      { label: '강제추행 폭행·협박 법리', href: '/guide/sex-crime/sex-crime-force-threat-standard-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 8. sex-crime-lodging-hidden-cam-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-lodging-hidden-cam-track',
    keyword: '숙박업소 몰래카메라',
    questionKeyword: '모텔·호텔·펜션에 묵었는데 콘센트·시계·TV 주변에서 몰래카메라가 의심되거나 발견됐어요. 제 모습이 촬영·저장됐을까 무섭고, 혹시 누군가에게 보여졌을까 불안한데, 이런 불법촬영을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '숙박업소 몰래카메라 신고·증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '숙박업소 몰래카메라 — 5단계 신고·증거 점검 | 로앤가이드',
      description:
        '숙박업소에서 몰래카메라가 의심·발견됐다면, 성폭력처벌법 제14조 카메라등이용촬영과 공공연한 전시·상영 법리, 현장 증거 보전까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「모텔·호텔·펜션에 묵던 중 콘센트·디지털시계·TV·화재감지기 주변에서 작은 렌즈나 몰래카메라가 의심되거나 발견돼 큰 충격과 수치심을 느낀 분의 상황입니다. 내 모습이 촬영·저장됐을지, 혹시 어딘가로 전송되거나 누군가에게 보여졌을지 두렵고, 그 자리에서 무엇을 만지면 증거가 사라질까 막막하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제14조 제1항은 카메라나 그 밖에 이와 유사한 기능의 기계장치를 이용해 성적 욕망 또는 수치심을 유발할 수 있는 사람의 신체를 의사에 반해 촬영한 자를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 같은 조 제2항의 \'공공연하게\' 전시·상영했다고 하려면 불특정 또는 다수인이 촬영물을 시청할 수 있는 상태에 이르러야 한다고 본 사례 흐름이 있는 영역입니다. 몰래 설치 + 신체 촬영 우려 + 전시·전송 위험 결합은 \'촬영·유포·증거 보전\' 절차가 가능한 트랙입니다. 피해자라면 ① 현장 정황 정리 ② 촬영·유포 ③ 증거 보전 ④ 설치자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 숙박업소 몰래카메라 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장 정황·촬영·유포·증거·설치자 특정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 정황 정리</strong> — 의심 위치·기기 형태·발견 경위·객실 정보 정리.</li>\n<li><strong>② 촬영·유포</strong> — 신체가 촬영·저장됐는지, 전송·전시 위험이 있는지 정리.</li>\n<li><strong>③ 증거 보전</strong> — 기기·객실 현상 보존, 임의 조작 없이 경찰 인계.</li>\n<li><strong>④ 설치자 특정</strong> — 숙소·관리자·이전 투숙·기기 정보로 설치자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·디지털성범죄피해자지원센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기기를 임의로 분해·삭제하면 증거가 훼손될 수 있어, 현상을 보존한 채 곧바로 신고해 경찰이 확보하게 하는 것이 핵심입니다. 촬영물이 다수인이 볼 수 있는 상태에 이르렀는지가 전시·상영 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현상 보존·신고 (즉시)</strong> — 기기를 만지지 말고 112 신고, 객실 현상 그대로 보존.</li>\n<li><strong>2단계 — 객실·숙소 정보 확보 (즉시)</strong> — 예약·객실·체크인 기록과 의심 기기 위치 사진 확보.</li>\n<li><strong>3단계 — 기기·저장매체 인계 (직후)</strong> — 경찰에 기기·메모리 인계, 촬영·저장 여부 분석 요청.</li>\n<li><strong>4단계 — 진술·피해 상담 (준비 후)</strong> — 경찰 진술, 디지털성범죄피해자지원센터 상담.</li>\n<li><strong>5단계 — 삭제·보호조치 (이후)</strong> — 촬영물 유포 시 삭제 지원·신변보호·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">숙박업소 몰래카메라 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장 정황·촬영·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>의심 기기 위치·형태 사진 (현상 보존)</strong></li>\n<li><strong>객실·예약·체크인 정보 (장소 특정)</strong></li>\n<li><strong>발견 경위·시각 메모</strong></li>\n<li><strong>숙소 측 통보·대응 기록</strong></li>\n<li><strong>기기·저장매체 경찰 인계 기록</strong></li>\n<li><strong>동행자·목격자 진술·연락처</strong></li>\n<li><strong>디지털성범죄피해자지원센터 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의심 기기는 위치·형태를 사진으로만 남기고 분해·전원 조작은 피해 경찰이 확보하게 하는 것이 안전합니다. 예약·체크인 기록은 장소·시간 특정의 단서가 되니 함께 보존하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영 행위</strong> — 신체를 의사에 반해 촬영·저장했는지.</li>\n<li><strong>공공연한 전시·상영</strong> — 다수인이 볼 수 있는 상태에 이르렀는지.</li>\n<li><strong>미수·기수</strong> — 설치만 했는지, 실제 촬영·저장에 이르렀는지.</li>\n<li><strong>설치자 특정</strong> — 숙소·관리자·이전 투숙자 중 누가 설치했는지.</li>\n<li><strong>유포 여부</strong> — 촬영물이 전송·유포됐는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물 삭제·상담 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 촬영물 전시·상영의 공공연성 요건',
        summary:
          '대법원 2024도18718(대법원, 2025.04.15 선고) 영역에서 법원은 성폭력처벌법 제14조 제2항에서 촬영물 등을 \'공공연하게\' 전시·상영했다고 하려면 불특정 또는 다수인이 촬영물 등을 시청할 수 있는 상태에 이르러야 하고, 이때 \'다수인\'인지는 상영 경위·상대방과의 관계 등을 종합해 판단해야 한다고 판시했습니다. 숙박업소 몰래카메라 촬영물의 촬영·전시 책임을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '몰래 설치 + 신체 촬영 우려 + 전시·전송 위험 결합 시 촬영·유포·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '카메라를 발견했는데 현장에서 무엇부터 하나요?',
        answer:
          '<strong>기기를 만지지 말고 곧바로 112에 신고해 경찰이 확보하게 하는 것이 핵심인 영역입니다.</strong> 위치·형태만 사진으로 남기세요.',
      },
      {
        question: '실제로 촬영됐는지 어떻게 확인하나요?',
        answer:
          '<strong>경찰의 기기·저장매체 분석으로 촬영·저장 여부를 확인하는 영역입니다.</strong> 기기를 임의 조작하지 마세요.',
      },
      {
        question: '설치만 됐고 촬영은 안 됐어도 처벌되나요?',
        answer:
          '<strong>촬영·저장에 이르렀는지에 따라 미수·기수가 갈리는 영역입니다.</strong> 기기 상태·메모리 분석이 중요합니다.',
      },
      {
        question: '촬영물이 유포됐다면 어떻게 하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제 지원을 받아볼 수 있는 영역입니다.</strong> 유포 정황을 캡처해 신고하세요.',
      },
      {
        question: '누가 설치했는지 모르는데 신고가 되나요?',
        answer:
          '<strong>숙소·예약·이전 투숙 기록으로 수사가 진행될 수 있는 영역입니다.</strong> 객실·예약 정보를 확보하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '불법촬영 신고 절차', href: '/guide/sex-crime/sex-crime-illegal-filming-report-procedure' },
      { label: '촬영물 삭제 지원', href: '/guide/sex-crime/sex-crime-image-deletion-support-track' },
      { label: '촬영·전시 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-synthetic-photo-sns-spread-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-synthetic-photo-sns-spread-track',
    keyword: '합성사진 SNS 유포',
    questionKeyword: '제 얼굴 사진을 음란한 이미지에 합성한 사진·영상이 SNS·단체방에 유포되고 있는 걸 알게 됐어요. 직접 찍힌 적은 없지만 마치 진짜처럼 보여 너무 수치스럽고 무서운데, 이런 합성물 유포를 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '합성사진 SNS 유포 신고·삭제 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '합성사진 SNS 유포 — 5단계 반포·삭제 점검 | 로앤가이드',
      description:
        '얼굴을 합성한 사진이 SNS에 유포됐다면, 성폭력처벌법 제14조의2 허위영상물·제14조 반포의 의사에 반한 반포 판단 법리와 삭제까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「내 얼굴 사진을 음란한 이미지·영상에 합성(딥페이크)한 자료가 SNS·단체대화방·커뮤니티에 유포되고 있는 것을 알게 돼 큰 충격과 수치심을 느낀 분의 상황입니다. 실제로 찍힌 적은 없지만 마치 진짜처럼 보여 가족·지인·직장에 퍼질까 무섭고, 어디까지 퍼졌는지조차 알 수 없어 막막하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제14조의2는 사람의 얼굴·신체·음성을 대상으로 성적 욕망 또는 수치심을 유발할 수 있는 형태로 편집·합성·가공한 허위영상물을 의사에 반해 반포한 자를 처벌하도록 규정하는 영역입니다. 판례는 제14조 제2항 반포죄는 반포 행위 시를 기준으로 촬영대상자의 의사에 반해 성립하고, 의사를 명확히 확인할 수 없는 경우에도 대상자·촬영자 관계, 내용, 특정 가능성, 반포 경위 등을 종합해 의사에 반한 반포인지를 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 얼굴 합성 + 성적 이미지 + 의사에 반한 유포 결합은 \'허위영상물·삭제\' 다툼이 가능한 트랙입니다. 피해자라면 ① 유포·합성 정리 ② 반포 판단 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·삭제 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 합성사진 SNS 유포 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 유포·반포 판단·증거·가해자 특정·삭제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유포·합성 정리</strong> — 합성물·게시 위치·유포 범위·원본 사진 정리.</li>\n<li><strong>② 반포 판단</strong> — 의사에 반해 합성물을 반포·게시했는지 정리.</li>\n<li><strong>③ 증거 보전</strong> — 게시물·URL·계정·캡처를 삭제 전 보전.</li>\n<li><strong>④ 가해자 특정</strong> — 계정·아이피·게시 경위로 상대 특정.</li>\n<li><strong>⑤ 신고·삭제</strong> — 경찰 신고·디지털성범죄피해자지원센터 삭제 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합성물은 빠르게 확산·삭제되므로 신고 전에 게시물·URL·계정을 그대로 캡처해 보전하는 것이 핵심입니다. 의사에 반한 반포인지는 내용·관계·특정 가능성·유포 경위를 종합해 판단되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 합성물·URL·게시 계정·확산 정황을 삭제 전 캡처 보전.</li>\n<li><strong>2단계 — 디지털성범죄피해자지원센터 상담 (즉시)</strong> — 삭제 지원·심리 지원·대응 자문.</li>\n<li><strong>3단계 — 경찰 신고 (직후)</strong> — 112·사이버범죄 신고, 합성·유포 증거 제출.</li>\n<li><strong>4단계 — 가해자 특정·추적 (조사 단계)</strong> — 계정·아이피·게시 경위로 상대 특정.</li>\n<li><strong>5단계 — 삭제·보호조치 (이후)</strong> — 유포물 삭제 지원·신변보호·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">합성사진 SNS 유포 신고·삭제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 유포·반포 판단·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>합성물·게시물 캡처 (유포 내용)</strong></li>\n<li><strong>게시 URL·플랫폼·단체방 정보 (확산 범위)</strong></li>\n<li><strong>합성에 쓰인 원본 사진·출처 정황</strong></li>\n<li><strong>게시 계정·아이디·프로필 정보</strong></li>\n<li><strong>유포 시각·확산 경위 기록</strong></li>\n<li><strong>디지털성범죄피해자지원센터 삭제 접수 기록</strong></li>\n<li><strong>경찰 신고·진정서 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합성물은 캡처와 함께 게시 URL·시각을 같이 남겨두면 확산 범위와 반포 경위를 보여주는 자료가 됩니다. 원본 사진의 출처를 짚으면 합성 경위와 가해자 특정에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위영상물</strong> — 편집·합성·가공한 성적 형태의 자료인지.</li>\n<li><strong>의사에 반한 반포</strong> — 내용·관계·특정 가능성 등으로 의사 반함이 인정되는지.</li>\n<li><strong>특정 가능성</strong> — 합성물에서 피해자를 특정할 수 있는지.</li>\n<li><strong>가해자 특정</strong> — 계정·아이피·경위로 상대를 특정할 수 있는지.</li>\n<li><strong>확산 범위</strong> — 다수인이 시청할 수 있는 상태에 이르렀는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (합성물 삭제·상담 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의사에 반한 반포의 판단 기준',
        summary:
          '대법원 2022도15414(대법원, 2023.06.15 선고) 영역에서 법원은 성폭력처벌법 제14조 제2항 위반죄는 반포 등 행위 시를 기준으로 촬영대상자의 의사에 반하여 성립하고, 대상자의 신원이 파악되지 않는 등 의사를 명확히 확인할 수 없는 경우에는 대상자와 촬영자의 관계·촬영 경위, 성적 수치심 유발 정도, 특정 가능성, 취득·반포 경위 등을 종합해 의사에 반한 반포인지를 판단해야 한다고 판시했습니다. 얼굴 합성물의 유포가 문제 되는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '얼굴 합성 + 성적 이미지 + 의사에 반한 유포 결합 시 허위영상물·삭제 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '실제로 찍힌 게 아니라 합성인데도 처벌되나요?',
        answer:
          '<strong>편집·합성한 성적 형태의 자료를 의사에 반해 반포하면 허위영상물로 다툴 수 있는 영역입니다.</strong> 합성물을 보전하세요.',
      },
      {
        question: '게시물이 삭제될까 봐 걱정인데 무엇부터 하나요?',
        answer:
          '<strong>신고 전에 게시물·URL·계정을 그대로 캡처해 보전하는 것이 핵심인 영역입니다.</strong> 삭제 전 증거부터 확보하세요.',
      },
      {
        question: '누가 올렸는지 모르는데 잡을 수 있나요?',
        answer:
          '<strong>계정·아이피·게시 경위로 수사가 진행될 수 있는 영역입니다.</strong> 게시 계정·URL을 모두 모으세요.',
      },
      {
        question: '합성물 삭제는 어디서 도와주나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제 지원을 받아볼 수 있는 영역입니다.</strong> 유포·게시 정보를 정리해 접수하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '허위영상물 신고 절차', href: '/guide/sex-crime/sex-crime-deepfake-report-procedure' },
      { label: '합성물 삭제 지원', href: '/guide/sex-crime/sex-crime-image-deletion-support-track' },
      { label: '유포·반포 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 10. sex-crime-blackout-drunk-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-blackout-drunk-falsely-accused-defense',
    keyword: '만취 블랙아웃 추행 무고',
    questionKeyword: '회식·술자리에서 다 함께 취했는데, 며칠 뒤 상대가 \'그날 추행당했다\'며 고소했어요. 저는 만취·블랙아웃이라 당시 상황이 잘 기억나지 않고 추행할 의도도 없었는데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '만취 블랙아웃 추행 해당성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '만취 블랙아웃 추행 무고 방어 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '술자리 신체접촉을 추행으로 고소당했다면, 기습추행·추행 해당성 판단 기준과 정황·진술 신빙성 다툼을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식·술자리에서 다 함께 취해 어울리던 중의 신체접촉을 두고, 며칠 뒤 상대가 \'그날 추행당했다\'며 고소해 한순간에 피의자로 지목된 분의 상황입니다. 정작 본인은 만취·블랙아웃으로 당시 상황이 잘 기억나지 않고 추행할 의도도 없었는데, 기억이 흐릿한 채로 혐의에 몰려 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 문제 된 접촉이 객관적으로 추행에 해당하는지, 그리고 그 판단에 어떤 사정을 종합해야 하는지가 핵심 쟁점입니다. 판례는 기습추행의 경우 추행과 동시에 저질러지는 폭행은 상대방의 의사를 억압할 정도일 필요가 없으나, 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 접촉의 경위·태양과 정황, 진술의 신빙성을 정리해 다툴 수 있는 영역입니다. 술자리 접촉 + 추행 해당성 다툼 + 정황 검토 결합은 \'추행 해당성·진술 신빙성\' 방어가 가능한 트랙입니다. 사실과 다르게 고소됐다면 ① 경위 정리 ② 추행 해당성 ③ 정황 검토 ④ 진술 신빙성 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 만취 블랙아웃 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·정황·진술 신빙성·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 술자리 경위·동석자·접촉 부위·당시 상황 정리.</li>\n<li><strong>② 추행 해당성</strong> — 접촉이 성적 의도의 추행으로 평가되는지 검토.</li>\n<li><strong>③ 정황 검토</strong> — CCTV·동석자 진술·당시 분위기 등 객관 정황 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 피해자 진술의 일관성·정황 부합 여부 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행 해당 여부는 접촉 부위·방식만이 아니라 경위·관계·당시 객관적 상황을 종합해 신중히 판단된다는 점이 분기점입니다. 술자리 정황·동석자 진술·CCTV로 접촉의 성격과 진술 신빙성을 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 술자리 경위·동석자·자리 배치·접촉 정황 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — CCTV·결제·메시지·동석자 진술 등 객관 자료 확보.</li>\n<li><strong>3단계 — 추행 해당성·신빙성 쟁점 정리 (2주)</strong> — 접촉 태양·경위와 진술의 일관성·정황 부합 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">만취 블랙아웃 추행 해당성 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>술자리 경위·참석자·자리 배치 메모</strong></li>\n<li><strong>주점·노래방 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·이동·시간 기록 (상황 특정)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>당시·사후 대화·메시지 기록</strong></li>\n<li><strong>피해자 진술 모순·정황 불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'접촉이 추행에 해당하는지\'와 \'진술이 정황에 부합하는지\'입니다. CCTV·동석자 진술·당시 분위기를 정돈하고 진술의 모순·불부합을 구체적으로 짚으면 추행 해당성·신빙성 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 접촉이 성적 의도의 추행으로 평가되는지.</li>\n<li><strong>종합 판단</strong> — 경위·관계·당시 객관 상황을 종합했는지.</li>\n<li><strong>진술 신빙성</strong> — 피해자 진술이 정황·경험칙에 부합하는지.</li>\n<li><strong>고의·우연</strong> — 의도된 접촉인지 우연한 접촉인지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 추행 해당성의 종합 판단',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 기습추행의 경우 추행과 동시에 저질러지는 폭행은 상대방의 의사를 억압할 정도일 필요가 없고, 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위태양, 주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합해 신중히 결정해야 한다고 판시했습니다. 술자리 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '술자리 접촉 + 추행 해당성 다툼 + 정황 검토 결합 시 추행 해당성·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '기억이 안 나는데 어떻게 방어하나요?',
        answer:
          '<strong>CCTV·동석자 진술·당시 정황 등 객관 자료로 다툴 수 있는 영역입니다.</strong> 술자리 경위·정황 자료를 모으세요.',
      },
      {
        question: '가볍게 스친 건데도 추행이 되나요?',
        answer:
          '<strong>접촉의 경위·관계·당시 상황을 종합해 추행 해당성을 판단하는 영역입니다.</strong> 접촉 태양·정황을 정리하세요.',
      },
      {
        question: '상대 진술만 있는데도 처벌될 수 있나요?',
        answer:
          '<strong>진술은 정황·경험칙에 부합하는 신빙성을 갖춰야 인정되는 영역입니다.</strong> 진술 모순·불부합을 정리하세요.',
      },
      {
        question: '며칠 지나 고소했는데 그게 유리한가요?',
        answer:
          '<strong>고소 시점은 정황의 하나일 뿐 경위·진술을 종합해 판단하는 영역입니다.</strong> 사후 대화·정황을 함께 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 무고 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense-track' },
      { label: '추행 해당성 다툼', href: '/guide/sex-crime/sex-crime-indecency-standard-track' },
      { label: '진술 신빙성 다툼', href: '/guide/sex-crime/sex-crime-statement-credibility-track' },
      { label: '수사 진술 대응', href: '/guide/sex-crime/sex-crime-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/sex-crime/sex-crime-public-defender-track' },
    ],
  },
];
