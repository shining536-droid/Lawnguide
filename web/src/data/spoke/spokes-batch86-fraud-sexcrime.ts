import { SpokePage } from '../spoke-pages';

// batch86 fraud(6) + sex-crime(4) — 10개 (2026-06-03)
//
// 고유 존재 이유:
// 1. fraud-nft-digital-asset-investment-track — 일반 코인·투자사기류와 분기. 'NFT·디지털자산 상승을 미끼로 투자를 유도' 편취액 전부·특경법 가액 산정 판단형 트랙(victim).
// 2. fraud-prepaid-giftcard-pin-resale-track — 일반 미배송류와 분기. '상품권 핀번호를 중복 판매해 사용 불가로 만든' 기망 고의·계약 당시 판단 판단형 트랙(victim).
// 3. fraud-loan-advance-fee-track — 일반 대출사기류와 분기. '대출을 빙자해 수수료·보증금만 받고 잠적' 고지의무·묵비 기망 판단형 트랙(victim).
// 4. fraud-coin-principal-guarantee-track — 일반 코인 투자류와 분기. '원금보장·확정수익을 내세워 코인 투자를 유도' 편취액 전부·일부 대가 판단형 트랙(victim).
// 5. fraud-job-placement-deposit-track — 일반 취업사기류와 분기. '취업을 빌미로 보증금·연수비를 받고 채용하지 않은' 편취 범의·환급 절차형 트랙(victim).
// 6. fraud-staged-insurance-claim-falsely-accused-defense — 일반 사기 무고류와 분기. '보험사기 가담으로 입건' 실행 착수·예비·방조 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-club-dancefloor-contact-track — 일반 추행류와 분기. '클럽 댄스플로어에서 기습추행' 폭행 자체가 추행·기습추행 미수 판단형 트랙(victim).
// 8. sex-crime-subway-illegal-filming-track — 일반 불법촬영류와 분기. '지하철에서 불법촬영' 신체 직접 촬영·복제물 법리 절차형 트랙(victim).
// 9. sex-crime-sextortion-image-threat-track — 일반 유포·협박류와 분기. '성적 영상으로 협박·유포 위협' 촬영물이용협박·성착취물 판단형 트랙(victim).
// 10. sex-crime-medical-exam-falsely-accused-defense — 일반 성범죄 무고류와 분기. '의료 진찰 중 추행으로 고소당함' 무죄추정·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch86FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-nft-digital-asset-investment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-nft-digital-asset-investment-track',
    keyword: 'NFT 디지털자산 투자 사기',
    questionKeyword: '\'곧 가치가 몇 배로 오른다\'는 말에 NFT·디지털자산을 사들였는데, 프로젝트는 잠적하고 자산은 사실상 거래조차 안 되는 휴지조각이 됐어요. 큰돈을 넣었는데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: 'NFT 디지털자산 투자 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'NFT 디지털자산 투자 사기 — 5단계 편취·가액 점검 | 로앤가이드',
      description:
        '가치 상승을 미끼로 NFT·디지털자산에 투자했다 휴지조각이 됐다면, 형법 제347조 사기에서 교부한 금원 전부가 편취액일 수 있고 특경법 가액 산정·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「\'한정 발행이라 곧 가치가 몇 배 오른다\', \'로드맵대로 가면 확정 수익\'이라는 말에 NFT·디지털자산을 사들인 분의 상황입니다. 그런데 약속한 로드맵은 이행되지 않고 프로젝트 운영진은 잠적했으며, 자산은 사실상 거래조차 되지 않는 휴지조각이 돼 큰돈을 잃을까 막막하실 거예요. 신생 자산이라 어디서부터 따져야 할지 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고, 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가치·수익 가능성을 허위·과장해 매수를 유도한 정황은 기망행위로 평가될 여지가 있고, 매수대금 지급이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취 사기죄에서 대가가 일부 지급된 경우에도 편취액은 차액이 아니라 교부받은 금원 전부이고, 다만 특정경제범죄법 제3조로 가중하려면 편취 가액을 엄격·신중히 산정해야 하며 가액을 구체적으로 산정할 수 없으면 같은 조를 적용할 수 없다고 본 사례 흐름이 있는 영역입니다. 가치 미끼 + 허위 수익 + 매수대금 교부 결합은 \'편취액·가액 산정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 기망 고의 ③ 편취액·가액 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. NFT 디지털자산 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 고의·편취액·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 권유 경위·로드맵·홍보물·매수·송금 내역 정리.</li>\n<li><strong>② 기망 고의</strong> — 가치·수익 가능성을 허위·과장해 매수를 유도한 정황 정리.</li>\n<li><strong>③ 편취액·가액</strong> — 교부한 금원 전부와 특경법 가액 산정 가능성 정리.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기·특경법 위반 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 자금 추적·손해배상·부당이득 반환 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'확정 수익\'·\'곧 상장\'이라는 단정적 설명과 실제 프로젝트 실체·거래 가능성의 불일치가 기망 판단의 핵심입니다. 대가가 일부 있어도 보낸 금원 전부가 편취액으로 평가될 수 있으니 송금 흐름을 빠짐없이 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 권유 메시지·로드맵·지갑·거래 해시·송금 내역 보존.</li>\n<li><strong>2단계 — 프로젝트 실체 확인 (1주)</strong> — 발행 주체·백서·운영진·거래소 상장 여부 확인.</li>\n<li><strong>3단계 — 지급정지·경찰 신고 (병행)</strong> — 국내 계좌 송금분 지급정지 요청·사이버범죄 신고.</li>\n<li><strong>4단계 — 금감원·가상자산 상담 (2개월 내)</strong> — 금융감독원 1332 투자사기 상담·자금 흐름 자문.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 지갑·계좌 추적·손해배상·부당이득 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">NFT 디지털자산 투자 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 고의·편취액 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유 메시지·로드맵·백서 캡처 (수익 약속)</strong></li>\n<li><strong>권유자·운영진과의 대화·녹취 (기망 정황)</strong></li>\n<li><strong>지갑 주소·거래 해시·민팅 기록 (매수 사실)</strong></li>\n<li><strong>원화 입금·코인 매수 송금 내역 (피해 금액)</strong></li>\n<li><strong>프로젝트 발행 주체·운영진 신원 정보</strong></li>\n<li><strong>거래소 상장·시세·거래 가능성 자료</strong></li>\n<li><strong>상대 계좌·연락처·커뮤니티 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'한정 발행\'·\'확정 수익\' 같은 권유 자료와 실제 거래 가능성·운영진 실체를 대조하면 기망 정황이 드러나는 경우가 많습니다. 지갑 주소·거래 해시는 자금 흐름 추적의 단서가 되니 거래 내역과 함께 보존해두면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 가치·수익 가능성을 허위·과장해 매수를 유도했는지.</li>\n<li><strong>투자 위험 항변</strong> — \'정상 투자 변동\'이라는 상대 주장의 다툼.</li>\n<li><strong>편취액</strong> — 일부 가치가 남아도 교부한 금원 전부가 피해액인지.</li>\n<li><strong>특경법 가액</strong> — 편취 가액 5억·50억 이상 산정 가능 여부.</li>\n<li><strong>자금 추적</strong> — 지갑·거래소를 거친 자금 흐름 추적 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·가상자산 피해 상담)</strong></li>\n<li><strong>한국인터넷진흥원 118 (계정·전자정보 침해 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취액 산정과 특경법 가액 적용의 한계',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 대가를 공제한 차액이 아니라 교부받은 금원 전부이고 이는 특정경제범죄법 위반죄에서도 마찬가지이나, 가액에 따라 가중 처벌하는 특정경제범죄법 제3조를 적용할 때에는 편취 가액을 엄격·신중히 산정해야 하며 그 가액을 구체적으로 산정할 수 없는 경우에는 같은 조를 적용할 수 없다고 판시했습니다. NFT·디지털자산 투자 사안에서 편취액·가액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '가치 미끼 + 허위 수익 + 매수대금 교부 결합 시 편취액·가액 산정 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 투자 위험을 알고 산 건데 사기가 되나요?',
        answer:
          '<strong>가치·수익 가능성을 허위·과장해 매수를 유도한 정황이 있으면 기망으로 다툴 수 있는 영역입니다.</strong> 권유 메시지·로드맵을 확보하세요.',
      },
      {
        question: '자산에 약간의 가치가 남았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 가치와 무관하게 교부한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금·매수 내역을 전부 정리하세요.',
      },
      {
        question: '지갑·코인으로 보냈는데도 추적이 되나요?',
        answer:
          '<strong>지갑 주소·거래 해시·거래소 기록으로 자금 흐름을 추적할 수 있는 영역입니다.</strong> 거래 해시부터 보존하세요.',
      },
      {
        question: '프로젝트가 실재했는지 어떻게 확인하나요?',
        answer:
          '<strong>발행 주체·운영진·거래소 상장 여부 확인이 핵심인 영역입니다.</strong> 백서·공시·상장 정보로 실체를 점검하세요.',
      },
      {
        question: '피해 금액이 큰데 가중처벌이 되나요?',
        answer:
          '<strong>편취 가액이 5억·50억 이상으로 산정되면 특경법 가중을 검토하는 영역입니다.</strong> 명의별 송금 내역을 모아 가액을 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '투자사기 기망 입증', href: '/guide/fraud/fraud-investment-deception-track' },
      { label: '가상자산 사기 대응', href: '/guide/fraud/fraud-crypto-asset-response-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 2. fraud-prepaid-giftcard-pin-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-prepaid-giftcard-pin-resale-track',
    keyword: '상품권 핀번호 중복판매 편취',
    questionKeyword: '온라인에서 상품권 핀번호(기프티콘 코드)를 싸게 샀는데, 막상 등록하려니 이미 사용됐거나 다른 사람에게도 같은 번호를 팔아 쓸 수 없었어요. 판매자는 연락이 끊겼는데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '상품권 핀번호 중복판매 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '상품권 핀번호 중복판매 사기 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '싸게 산 상품권 핀번호가 이미 사용됐거나 중복 판매됐다면, 형법 제347조 사기의 편취 고의를 계약 당시 이행 의사로 따지고 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 중고·SNS에서 상품권 핀번호나 기프티콘 코드를 시세보다 싸게 샀는데, 막상 등록·사용하려니 이미 사용됐거나 동일한 번호를 여러 사람에게 중복 판매해 정작 쓸 수 없었던 분의 상황입니다. 판매자는 \'먼저 등록한 사람이 쓴 것\'이라며 발뺌하거나 아예 연락이 끊겨 막막하실 거예요. 금액이 적지 않아 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 처음부터 정상 사용이 불가능한 번호이거나 같은 번호를 중복 판매할 의도로 대금을 받은 정황은 기망행위로 평가될 여지가 있고, 대금 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 편취에 의한 사기죄의 범의는 계약 당시를 기준으로 이행 의사·능력 없이 속였는지로 판단하고, 자백이 없으면 거래의 내용·이행 과정 등 객관적 사정을 종합해야 한다고 본 사례 흐름이 있는 영역입니다. 중복 판매 + 사용 불가 + 연락 두절 결합은 \'편취 고의·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 편취 고의 ③ 사용 불가 입증 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상품권 핀번호 중복판매 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·편취 고의·사용 불가·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 판매 글·핀번호·대화·이체 내역·약속 정리.</li>\n<li><strong>② 편취 고의</strong> — 사용 불가·중복 판매를 알면서 대금을 받은 정황 정리.</li>\n<li><strong>③ 사용 불가 입증</strong> — 등록 거부 화면·기사용 조회 결과 확보.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 같은 번호를 여러 명에게 판 정황과 계약 당시 정상 사용이 불가능했음을 알고 있었는지가 기망 판단의 핵심입니다. 등록 거부·기사용 조회 화면을 캡처해두고 동일 번호 피해 사례를 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·핀번호·대화·이체 내역 보존.</li>\n<li><strong>2단계 — 사용 불가 확인 (즉시)</strong> — 발행사에 핀번호 사용·중복 등록 여부 조회·서면화.</li>\n<li><strong>3단계 — 지급정지·사기 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (이후)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">상품권 핀번호 중복판매 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·편취 고의·사용 불가 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·상품 설명 캡처 (거래 내용)</strong></li>\n<li><strong>구매한 핀번호·코드 (대상 특정)</strong></li>\n<li><strong>등록 거부·기사용 조회 화면 (사용 불가 입증)</strong></li>\n<li><strong>계좌이체·결제 내역 (피해 금액)</strong></li>\n<li><strong>판매자와의 대화·연락 두절 정황</strong></li>\n<li><strong>발행사 확인 회신·중복 등록 자료</strong></li>\n<li><strong>동일 번호·동일 계좌 피해 조회 결과</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발행사에 핀번호 사용·중복 등록 시점을 조회해 서면으로 받아두면 사용 불가 입증에 강한 자료가 됩니다. 같은 번호·같은 계좌 피해를 함께 모으면 편취 고의 정황과 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 사용 불가·중복 판매를 알면서 대금을 받았는지.</li>\n<li><strong>판단 시점</strong> — 계약 당시 정상 사용이 가능했는지.</li>\n<li><strong>먼저 등록 항변</strong> — \'다른 구매자가 먼저 썼다\'는 주장의 다툼.</li>\n<li><strong>판매자 특정</strong> — 계좌·연락처·계정으로 특정할 수 있는지.</li>\n<li><strong>동일 피해</strong> — 같은 번호·계좌로 다수 피해가 있었는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·상품권 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 판단 시점과 기망행위 단정 한계',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 편취에 의한 사기죄의 성립은 계약 당시를 기준으로 일을 완성·이행할 의사·능력이 없음에도 속여 대금을 편취할 고의가 있었는지로 판단해야 하고, 거래의 내용·체결 경위·이행 과정 등을 종합해야 하며, 관련 행정법규를 위반한 사정만으로 곧바로 기망행위라 단정해서는 안 된다고 판시했습니다. 핀번호 중복 판매·사용 불가 사안에서 편취 범의를 살펴볼 때에도 계약 당시 이행 의사를 기준으로 검토해볼 수 있습니다.',
        takeaway: '중복 판매 + 사용 불가 + 연락 두절 결합 시 편취 고의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '다른 사람이 먼저 썼다는데 사기가 되나요?',
        answer:
          '<strong>같은 번호를 중복 판매했거나 사용 불가를 알면서 팔았는지가 핵심인 영역입니다.</strong> 발행사 조회 결과를 확보하세요.',
      },
      {
        question: '핀번호가 이미 사용됐다는 걸 어떻게 입증하나요?',
        answer:
          '<strong>발행사에 사용·중복 등록 시점을 조회해 서면으로 받는 것이 핵심인 영역입니다.</strong> 등록 거부 화면도 캡처하세요.',
      },
      {
        question: '판매자가 연락을 끊었는데 신고가 되나요?',
        answer:
          '<strong>계좌·연락처·계정으로 수사기관이 추적할 수 있는 영역입니다.</strong> 계좌로 사기 의심 거래를 먼저 조회해 보세요.',
      },
      {
        question: '금액이 작은데도 신고할 수 있나요?',
        answer:
          '<strong>소액이라도 사기는 성립할 수 있고 동일 피해를 묶으면 대응이 쉬워지는 영역입니다.</strong> 같은 번호 피해를 모으세요.',
      },
      {
        question: '계좌이체로 냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '상품권·기프티콘 사기 대응', href: '/guide/fraud/fraud-giftcard-deal-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '공동 고소·집단 대응', href: '/guide/fraud/fraud-joint-complaint-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 3. fraud-loan-advance-fee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-advance-fee-track',
    keyword: '대출 빙자 수수료 편취',
    questionKeyword: '급전이 필요해 대출 문자·전화를 받고 \'저신용도 가능, 수수료·보증금만 내면 즉시 대출\'이라는 말에 선입금했는데, 대출은 실행되지 않고 연락이 끊겼어요. 보낸 수수료를 사기로 돌려받을 수 있나요?',
    ctaKeyword: '대출 빙자 수수료 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '대출 빙자 수수료 편취 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '대출을 빙자해 수수료·보증금만 받고 잠적했다면, 형법 제347조 사기의 고지의무·묵비에 의한 기망과 계좌이체분 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「급전이 필요한 상황에서 \'저신용도 누구나 가능\', \'수수료·보증금·인지대만 먼저 내면 즉시 대출\'이라는 문자·전화를 받고 시키는 대로 돈을 선입금한 분의 상황입니다. 그런데 약속한 대출은 실행되지 않고 추가 비용만 계속 요구하다 연락이 끊겨, 급한 마음에 보낸 돈까지 잃을까 막막하실 거예요. 절박했던 만큼 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 대출을 실행할 의사·능력 없이 수수료 명목으로 돈만 받은 정황은 기망행위로 평가될 여지가 있고, 선입금 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 기망은 거래상 신의칙에 비추어 고지할 의무 있는 사정을 묵비한 경우도 포함하고, 상대가 그 사정을 알았다면 거래에 임하지 않았을 관계가 인정되면 고지의무 위반으로 사기죄가 성립할 수 있으며, 현실적 손해 발생을 요건으로 하지 않는다고 본 사례 흐름이 있는 영역입니다. 대출 빙자 + 선수수료 + 연락 두절 결합은 \'고지의무·묵비 기망\' 다툼이 가능한 트랙입니다. 피해자라면 ① 권유·송금 정리 ② 기망·고지 ③ 지급정지 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대출 빙자 수수료 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·기망 고지·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유·송금 정리</strong> — 대출 광고·통화·명목별 입금 요구·이체 내역 정리.</li>\n<li><strong>② 기망·고지</strong> — 대출 의사·능력 없이 수수료만 받은 정황·고지의무 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 이체분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·전기통신금융사기 신고 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 수법 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상 금융기관은 대출 실행 전에 수수료·보증금을 선입금받지 않는다는 점이 분기점입니다. 추가 입금을 멈추고 계좌 이체분의 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 추가 입금 중단·자료 보존 (즉시)</strong> — 광고·통화·명목·이체 내역 보존, 추가 입금 중단.</li>\n<li><strong>2단계 — 지급정지 요청 (즉시)</strong> — 계좌 이체분은 은행·112로 지급정지 요청.</li>\n<li><strong>3단계 — 제도권 여부 확인 (즉시)</strong> — 금융소비자정보포털·금감원으로 정식 등록 업체인지 확인.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 피해구제·집단 대응 (2개월 내)</strong> — 은행 피해구제신청·동일 수법 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대출 빙자 수수료 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권유·기망 고지·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>대출 광고·문자·통화 녹취 (권유 정황)</strong></li>\n<li><strong>수수료·보증금·인지대 등 명목별 요구 메시지</strong></li>\n<li><strong>계좌이체·입금 내역 (피해 금액)</strong></li>\n<li><strong>상대 상호·담당자·연락처 정보</strong></li>\n<li><strong>대출 미실행·연락 두절 정황</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어떤 명목으로 얼마를 언제 보냈는지 시간 순으로 정리하면 기망 정황이 선명해집니다. 정식 등록 업체인지 확인한 결과와 송금 계좌 정보를 함께 모아두면 지급정지·피해구제에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·고지의무</strong> — 대출 의사·능력 없음을 알리지 않고 수수료만 받았는지.</li>\n<li><strong>정상 수수료 항변</strong> — \'정당한 비용\'이라는 상대 주장의 다툼.</li>\n<li><strong>손해 발생</strong> — 현실적 손해가 없어도 교부 자체로 사기인지.</li>\n<li><strong>제도권 여부</strong> — 정식 등록 대부업·금융기관인지.</li>\n<li><strong>판매자 특정</strong> — 상호·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (불법 대출·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (금융·소비 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반·묵비에 의한 기망과 손해 요건',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 기망은 거래상 지켜야 할 신의칙에 반하는 행위를 널리 포함하고, 상대가 일정한 사정을 고지받았다면 거래에 임하지 않았을 관계가 인정되면 그 사정을 알릴 신의칙상 의무가 있으므로 이를 묵비한 것은 기망에 해당하며, 사기죄는 현실적 손해 발생을 요건으로 하지 않는다고 판시했습니다. 대출을 빙자해 수수료만 받은 사안에서 고지의무·기망을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '대출 빙자 + 선수수료 + 연락 두절 결합 시 고지의무·묵비 기망 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 직접 수수료를 보낸 건데도 사기가 되나요?',
        answer:
          '<strong>대출 의사·능력 없이 수수료만 받으려 한 정황이 있으면 기망으로 다툴 수 있는 영역입니다.</strong> 명목별 요구 메시지를 확보하세요.',
      },
      {
        question: '정상 업체가 받는 수수료라는데 어떻게 구별하나요?',
        answer:
          '<strong>정식 금융기관은 대출 실행 전 수수료를 선입금받지 않는 점이 핵심인 영역입니다.</strong> 제도권 등록 여부를 확인하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
      {
        question: '대출이 안 됐을 뿐 손해는 없다는데요?',
        answer:
          '<strong>현실적 손해가 없어도 수수료 교부 자체로 사기가 평가될 수 있는 영역입니다.</strong> 입금·요구 내역을 정리하세요.',
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
      { label: '대출사기 대응', href: '/guide/fraud/fraud-loan-scam-response-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '고지의무 위반 기망 입증', href: '/guide/fraud/fraud-nondisclosure-deception-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 4. fraud-coin-principal-guarantee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-coin-principal-guarantee-track',
    keyword: '코인 투자 원금보장 사기',
    questionKeyword: '\'원금은 100% 보장되고 매달 수익이 나온다\'는 말에 코인 투자에 큰돈을 넣었는데, 처음 몇 번 수익을 주더니 출금이 막히고 운영진은 잠적했어요. 일부 돈은 돌려받았는데, 나머지를 사기로 돌려받을 수 있나요?',
    ctaKeyword: '코인 투자 원금보장 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '코인 투자 원금보장 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '원금보장·확정수익을 내세운 코인 투자에서 출금이 막혔다면, 형법 제347조 사기에서 일부 수익을 돌려받았어도 교부한 금원 전부가 편취액일 수 있고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「\'원금은 100% 보장되고 매달 확정 수익이 나온다\', \'대표가 직접 운용한다\'는 말에 코인·가상자산 투자에 큰돈을 넣은 분의 상황입니다. 처음 몇 번은 약속대로 수익을 주더니 어느 순간 출금이 막히고 추가 입금을 권유하다 운영진은 잠적했고, 일부는 돌려받았지만 나머지 큰 금액이 묶여 막막하실 거예요. 받은 돈이 있어 사기가 될지 헷갈려 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 원금보장·확정수익이 사실상 불가능함에도 이를 내세워 투자를 유도한 정황은 기망행위로 평가될 여지가 있고, 투자금 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취 사기죄에서 대가가 일부 지급된 경우에도 편취액은 차액이 아니라 교부받은 금원 전부이고, 기망행위를 수단으로 한 권리행사도 사기죄를 구성할 수 있다고 본 사례 흐름이 있는 영역입니다. 원금보장 약속 + 출금 차단 + 일부 환급 결합은 \'편취액·기망 고의\' 다툼이 가능한 트랙입니다. 피해자라면 ① 투자·송금 정리 ② 기망 고의 ③ 편취액 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 투자 원금보장 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·기망 고의·편취액·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·송금 정리</strong> — 권유 경위·원금보장 약속·입출금·송금 내역 정리.</li>\n<li><strong>② 기망 고의</strong> — 불가능한 원금보장·확정수익으로 투자를 유도한 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 수익을 돌려받았어도 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기·유사수신·특경법 위반 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 자금 추적·손해배상·부당이득 반환 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'원금 100% 보장\'·\'확정 수익\'은 사실상 불가능한 약속이라는 점과 초기 수익 지급이 신뢰를 쌓기 위한 미끼였는지가 기망 판단의 핵심입니다. 일부 돌려받은 돈이 있어도 보낸 금원 전부가 편취액으로 평가될 수 있으니 입출금 흐름을 빠짐없이 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·송금 자료 보존 (즉시)</strong> — 원금보장 약속·대화·입출금·송금 내역 보존.</li>\n<li><strong>2단계 — 운영 주체 확인 (1주)</strong> — 운영진·법인·거래소·유사수신 여부 확인.</li>\n<li><strong>3단계 — 지급정지·경찰 신고 (병행)</strong> — 국내 계좌 송금분 지급정지 요청·사이버범죄 신고.</li>\n<li><strong>4단계 — 금감원·유사수신 상담 (2개월 내)</strong> — 금융감독원 1332 유사수신·투자사기 상담.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 자금 추적·손해배상·부당이득 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 투자 원금보장 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·기망 고의·편취액 갈래입니다.</strong></p>\n<ul>\n<li><strong>원금보장·수익 약속 메시지·홍보물 캡처</strong></li>\n<li><strong>권유자·운영진과의 대화·녹취 (기망 정황)</strong></li>\n<li><strong>투자금 입금·일부 수익 출금 내역 (입출금 흐름)</strong></li>\n<li><strong>거래소·플랫폼 잔고·출금 차단 화면</strong></li>\n<li><strong>운영 법인·대표·거래소 신원 정보</strong></li>\n<li><strong>유사수신·다단계 구조 정황 자료</strong></li>\n<li><strong>상대 계좌·지갑·커뮤니티 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 초기 수익 지급은 신뢰를 쌓기 위한 미끼인 경우가 많아, 입금 총액과 받은 수익을 함께 정리하면 편취액 산정에 도움이 됩니다. 출금 차단 화면과 원금보장 약속 메시지를 대조하면 기망 정황이 선명해집니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 불가능한 원금보장·확정수익으로 투자를 유도했는지.</li>\n<li><strong>일부 환급 항변</strong> — \'수익을 줬으니 사기가 아니다\'라는 주장의 다툼.</li>\n<li><strong>편취액</strong> — 받은 수익을 빼지 않고 교부한 금원 전부가 피해액인지.</li>\n<li><strong>유사수신</strong> — 다단계·돌려막기 구조 등 추가 위반 소지.</li>\n<li><strong>자금 추적</strong> — 계좌·지갑을 거친 자금 흐름 추적 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·투자사기 신고)</strong></li>\n<li><strong>한국인터넷진흥원 118 (계정·전자정보 침해 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 대가가 지급된 사기죄의 편취액',
        summary:
          '대법원 2017도21196(대법원, 2018.04.12 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 대가 상당액을 공제한 차액이 아니라 교부받은 금원 전부이고 이는 특정경제범죄법 위반죄에서도 마찬가지이며, 기망행위를 수단으로 한 권리행사도 그 정도가 권리행사로 용인할 범위를 넘으면 사기죄를 구성할 수 있다고 판시했습니다. 원금보장을 내세운 코인 투자에서 일부 수익을 돌려받은 사안의 편취액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '원금보장 약속 + 출금 차단 + 일부 환급 결합 시 편취액·기망 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '처음에 수익을 받았는데도 사기가 되나요?',
        answer:
          '<strong>초기 수익이 신뢰를 쌓기 위한 미끼였다면 기망으로 다툴 수 있는 영역입니다.</strong> 입출금 흐름 전체를 정리하세요.',
      },
      {
        question: '일부를 돌려받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>받은 수익을 빼지 않고 교부한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액과 수익을 함께 정리하세요.',
      },
      {
        question: '원금보장이라고 한 게 왜 문제가 되나요?',
        answer:
          '<strong>사실상 불가능한 원금보장·확정수익을 내세운 점이 기망 정황이 되는 영역입니다.</strong> 약속 메시지를 캡처해 두세요.',
      },
      {
        question: '출금이 막혔는데 어떻게 대응하나요?',
        answer:
          '<strong>출금 차단 화면을 보존하고 국내 송금분 지급정지를 먼저 검토하는 영역입니다.</strong> 계좌·지갑 정보를 확보하세요.',
      },
      {
        question: '코인으로 보냈는데도 추적이 되나요?',
        answer:
          '<strong>계좌·지갑·거래소 기록으로 자금 흐름을 추적할 수 있는 영역입니다.</strong> 거래 내역을 빠짐없이 보존하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '코인 투자사기 대응', href: '/guide/fraud/fraud-crypto-investment-response-track' },
      { label: '유사수신·다단계 대응', href: '/guide/fraud/fraud-illegal-fundraising-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 5. fraud-job-placement-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-job-placement-deposit-track',
    keyword: '취업 빙자 보증금 편취',
    questionKeyword: '\'정규직 채용을 보장한다, 보증금·연수비·교육비만 먼저 내라\'는 말에 돈을 보냈는데, 채용은 미뤄지다 무산되고 회사·소개자는 연락이 끊겼어요. 취업을 빌미로 돈만 받은 것 같은데, 사기로 돌려받을 수 있나요?',
    ctaKeyword: '취업 빙자 보증금 편취 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '취업 빙자 보증금 편취 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '취업을 빌미로 보증금·연수비만 받고 채용하지 않았다면, 형법 제347조 사기의 편취 범의를 계약 당시 채용 의사로 따지고 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「\'정규직 채용을 보장한다\', \'자리를 잡아줄 테니 보증금·연수비·교육비만 먼저 내라\'는 말에 취업을 기대하며 돈을 보낸 분의 상황입니다. 그런데 채용은 계속 미뤄지다 무산되고, 회사·소개자는 \'사정이 생겼다\'며 발뺌하거나 연락이 끊겨, 일자리도 돈도 잃을까 막막하실 거예요. 절박한 구직 상황이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 처음부터 채용 의사·능력 없이 취업을 빌미로 돈만 받은 정황은 기망행위로 평가될 여지가 있고, 보증금 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 편취에 의한 사기죄의 범의는 자백이 없으면 피고인의 재력·환경·범행 내용·이행 과정 등 객관적 사정을 종합해 판단하고 미필적 고의로도 충분하며, 거래 당시를 기준으로 변제·이행 의사·능력이 없으면서 속였는지로 본다고 한 사례 흐름이 있는 영역입니다. 채용 빌미 + 선보증금 + 채용 무산 결합은 \'편취 범의·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 권유·송금 정리 ② 편취 범의 ③ 지급정지 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 취업 빙자 보증금 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·편취 범의·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유·송금 정리</strong> — 채용 약속·명목별 입금 요구·이체 내역·대화 정리.</li>\n<li><strong>② 편취 범의</strong> — 채용 의사·능력 없이 돈만 받은 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 이체분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 수법 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상 채용은 입사 전에 보증금·연수비를 구직자에게 받지 않는다는 점이 분기점입니다. 계약 당시 실제 채용 의사·능력이 있었는지와 같은 수법 피해가 여럿인지를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지·자료 보존 (즉시)</strong> — 계좌 이체분은 은행·112로 지급정지 요청, 채용 약속·이체 보존.</li>\n<li><strong>2단계 — 회사·구인 실체 확인 (즉시)</strong> — 사업자등록·실제 채용 절차·동일 계좌 피해 조회.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 소비자상담·피해구제 (병행)</strong> — 한국소비자원 1372 상담·은행 피해구제신청.</li>\n<li><strong>5단계 — 환급·집단 대응 (이후)</strong> — 채권소멸 후 환급, 동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">취업 빙자 보증금 편취 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권유·편취 범의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>채용 약속·구인 공고 캡처 (취업 빌미)</strong></li>\n<li><strong>보증금·연수비·교육비 등 명목별 요구 메시지</strong></li>\n<li><strong>계좌이체·입금 내역 (피해 금액)</strong></li>\n<li><strong>회사·소개자 상호·담당자·연락처 정보</strong></li>\n<li><strong>채용 무산·연락 두절 정황</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채용 약속과 명목별 입금 요구를 시간 순으로 정리하면 편취 범의 정황이 드러나는 경우가 많습니다. 사업자등록·실제 채용 절차 여부와 같은 계좌 피해 사례를 함께 모아두면 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 계약 당시 채용 의사·능력이 있었는지.</li>\n<li><strong>정상 비용 항변</strong> — \'정당한 교육비·예치금\'이라는 주장의 다툼.</li>\n<li><strong>채용 무산 사유</strong> — 단순 사정 변경인지, 처음부터 편취인지.</li>\n<li><strong>책임 주체</strong> — 회사·소개자·중간 알선자 책임 범위.</li>\n<li><strong>동일 피해</strong> — 같은 계좌·수법으로 다수 피해가 있었는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (구직·교육비 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 판단 방법과 미필적 고의',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 범의는 자백이 없으면 범행 전후 피고인의 재력·환경·범행 내용·거래의 이행 과정 등 객관적 사정을 종합해 판단할 수밖에 없고 그 범의는 확정적 고의가 아닌 미필적 고의로도 충분하며, 거래 당시를 기준으로 대금을 변제·이행할 의사·능력이 없음에도 속여 재물을 편취할 고의가 있었는지로 판단해야 한다고 판시했습니다. 취업을 빌미로 보증금만 받은 사안에서 편취 범의를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '채용 빌미 + 선보증금 + 채용 무산 결합 시 편취 범의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '회사가 사정이 생겼다는데 사기가 되나요?',
        answer:
          '<strong>계약 당시 채용 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 채용 약속·명목별 입금 요구를 정리하세요.',
      },
      {
        question: '정당한 교육비라는데 어떻게 구별하나요?',
        answer:
          '<strong>정상 채용은 입사 전 보증금을 구직자에게 받지 않는 점이 분기점인 영역입니다.</strong> 사업자·채용 절차를 확인하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
      {
        question: '회사와 소개자 중 누구에게 책임을 묻나요?',
        answer:
          '<strong>채용 약속·돈을 받은 주체에 따라 책임이 갈리는 영역입니다.</strong> 관여 정황을 정리해 청구 대상을 정하세요.',
      },
      {
        question: '같은 수법 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 계좌·수법 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '취업·구직 사기 대응', href: '/guide/fraud/fraud-job-scam-response-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '공동 고소·집단 대응', href: '/guide/fraud/fraud-joint-complaint-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 6. fraud-staged-insurance-claim-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-staged-insurance-claim-falsely-accused-defense',
    keyword: '보험사기 가담 무고',
    questionKeyword: '지인의 부탁으로 보험 가입·서류 작성에 이름만 빌려줬을 뿐인데, 알고 보니 보험금 편취를 위한 사기였다며 공범으로 입건됐어요. 정작 보험금을 타거나 사고를 꾸미는 데는 관여하지 않았는데, 어떻게 방어하나요?',
    ctaKeyword: '보험사기 가담 실행착수·방조 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '보험사기 가담 무고 방어 — 5단계 실행착수·방조 점검 | 로앤가이드',
      description:
        '보험 가입·서류에 이름만 빌려줬다 보험사기 공범으로 입건됐다면, 하자 있는 보험계약 체결만으로는 실행 착수로 보기 어렵다는 법리와 방조·예비 다툼을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인의 부탁으로 보험 가입이나 서류 작성에 이름·명의를 빌려줬을 뿐인데, 알고 보니 보험금을 노린 사기였다며 공범으로 입건된 분의 상황입니다. 정작 사고를 꾸미거나 보험금을 직접 타는 데는 관여하지 않았는데 한순간에 가담자로 지목돼 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 보험금 편취 사기죄에서 어느 단계의 행위가 실행의 착수에 해당하는지, 그리고 가담 정도가 방조·예비에 그치는지가 핵심 쟁점입니다. 판례는 유효요건을 갖추지 못한 하자 있는 보험계약을 체결한 행위만으로는 특별한 사정이 없는 한 보험금 편취 기망행위의 실행에 착수한 것으로 볼 수 없고 이는 예비행위에 지나지 않으며, 다만 정범의 실행 착수 전 장래 실행을 예상하고 이를 용이하게 한 경우 종범이 성립할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 명의 대여·서류 작성만으로 곧바로 기수 공범이 인정되는 것은 아니라는 평가가 가능한 영역입니다. 명의 대여 + 실행 착수 다툼 + 방조 여부 결합은 \'실행착수·방조 부인\' 방어가 가능한 트랙입니다. 사실과 다르게 가담자로 지목됐다면 ① 경위 정리 ② 관여 단계 ③ 실행 착수 ④ 방조·고의 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 보험사기 가담 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·관여 단계·실행착수·방조 고의·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 부탁 경위·가입·서류 작성·관여 범위 정리.</li>\n<li><strong>② 관여 단계</strong> — 계약 체결·예비 단계에 그쳤는지 검토.</li>\n<li><strong>③ 실행 착수</strong> — 하자 있는 계약 체결만으로 실행 착수인지 다툼.</li>\n<li><strong>④ 방조·고의</strong> — 장래 편취를 예상·용이하게 한 방조 고의가 있었는지 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 하자 있는 보험계약 체결만으로는 보험금 편취의 실행 착수로 보기 어렵고 예비에 그칠 수 있다는 점이 분기점입니다. 명의·서류 관여가 어느 단계까지였는지와 방조 고의 유무를 정리해 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 부탁 경위·가입·서류 작성·관여 범위 정리.</li>\n<li><strong>2단계 — 관여 단계 정리 (1주)</strong> — 계약 체결·예비 단계까지인지, 사고·청구 관여 여부 정리.</li>\n<li><strong>3단계 — 실행착수·방조 쟁점 정리 (2주)</strong> — 실행 착수 시점·방조 고의 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 피해 회복·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">보험사기 가담 실행착수·방조 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·관여 단계·고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>부탁·권유 경위 대화 기록 (가담 정황)</strong></li>\n<li><strong>보험 가입·서류 작성 자료 (관여 범위)</strong></li>\n<li><strong>사고·보험금 청구 미관여 정황 자료</strong></li>\n<li><strong>금전·대가 수수 여부 자료 (정황 사실)</strong></li>\n<li><strong>편취 계획을 몰랐던 정황 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n<li><strong>피해 회복·선처 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'어느 단계까지 관여했고 편취 계획을 알았는지\'입니다. 가입·서류 작성에 그쳤고 사고·청구에는 관여하지 않은 정황을 시간 순으로 정돈하면 실행착수·방조 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실행 착수</strong> — 하자 있는 계약 체결만으로 기망 실행에 착수했는지.</li>\n<li><strong>예비와 구별</strong> — 관여가 예비행위에 그쳤는지.</li>\n<li><strong>방조 고의</strong> — 장래 편취를 예상·용이하게 한 인식이 있었는지.</li>\n<li><strong>공모 여부</strong> — 정범과 의사의 결합이 있었는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 하자 있는 보험계약과 실행 착수·방조',
        summary:
          '대법원 2013도7494(대법원, 2013.11.14 선고) 영역에서 법원은 제3자가 피보험자인 것처럼 가장해 유효요건을 갖추지 못한 하자 있는 보험계약을 체결한 행위만으로는 보험의 본질을 해칠 특별한 사정이 없는 한 보험금 편취 기망행위의 실행 착수로 볼 수 없고 이는 예비행위에 지나지 않으나, 종범은 정범의 실행 착수 이전에 장래의 실행행위를 예상하고 이를 용이하게 하기 위해 방조한 경우에도 이후 정범이 실행에 나아갔다면 성립할 수 있다고 판시했습니다. 명의·서류만 빌려준 사안의 죄책을 살펴볼 때에도 이러한 법리를 검토해볼 수 있습니다.',
        takeaway: '명의 대여 + 실행 착수 다툼 + 방조 여부 결합 시 실행착수·방조 부인 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '이름만 빌려줬는데도 처벌 대상이 되나요?',
        answer:
          '<strong>하자 있는 계약 체결만으로는 실행 착수로 보기 어려워 곧바로 기수 공범이 되는 것은 아닌 영역입니다.</strong> 관여 단계를 정리하세요.',
      },
      {
        question: '사고나 청구에는 관여 안 했는데 어떻게 보여주나요?',
        answer:
          '<strong>가입·서류에 그쳤고 사고·청구 미관여 정황이 다툼의 자료가 되는 영역입니다.</strong> 관여 범위 자료를 확보하세요.',
      },
      {
        question: '편취 계획을 몰랐는데도 방조가 되나요?',
        answer:
          '<strong>장래 편취를 예상·용인했는지가 방조 고의의 핵심인 영역입니다.</strong> 계획을 몰랐던 정황을 구체적으로 정리하세요.',
      },
      {
        question: '대가를 받았는데 더 불리한가요?',
        answer:
          '<strong>대가 수수는 간접사실의 하나일 뿐 관여 단계·고의를 종합해 판단하는 영역입니다.</strong> 수수 맥락을 함께 정리하세요.',
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
      { label: '보험사기 가담 무고 대응', href: '/guide/fraud/fraud-insurance-falsely-accused-track' },
      { label: '실행착수·예비 다툼', href: '/guide/fraud/fraud-attempt-preparation-dispute-track' },
      { label: '수사 진술 대응', href: '/guide/fraud/fraud-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/fraud/fraud-public-defender-track' },
    ],
  },

  // ─── 7. sex-crime-club-dancefloor-contact-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-dancefloor-contact-track',
    keyword: '클럽 댄스플로어 추행',
    questionKeyword: '클럽 댄스플로어에서 모르는 사람이 갑자기 뒤에서 껴안거나 몸을 더듬었어요. 사람이 붐벼서 그 순간엔 제대로 항의하지 못했는데, 이런 기습적인 신체접촉도 추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '클럽 댄스플로어 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '클럽 댄스플로어 추행 — 5단계 기습추행·증거 점검 | 로앤가이드',
      description:
        '클럽 댄스플로어에서 기습적인 신체접촉을 당했다면, 형법 제298조 강제추행에서 폭행 자체가 추행인 기습추행 법리와 미수 성립·증거 보전까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「붐비는 클럽 댄스플로어에서 모르는 사람이 갑자기 뒤에서 껴안거나 몸을 더듬어 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 사람이 많고 어두워 그 순간엔 제대로 항의하거나 상대를 붙잡지 못했고, \'춤추다 부딪힌 것\'이라고 하면 어떻게 따져야 할지 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정하는 영역입니다. 판례는 폭행행위 자체가 추행행위라고 인정되는 이른바 기습추행의 경우 그 폭행은 상대방의 의사를 억압할 정도일 필요가 없고, 추행의 고의로 의사에 반하는 유형력을 행사해 실행에 착수했으나 추행 결과에 이르지 못하면 강제추행미수가 성립한다고 본 사례 흐름이 있는 영역입니다. 갑작스러운 접촉 + 의사에 반함 + 즉시 항의 곤란 결합은 \'기습추행·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 기습추행 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 댄스플로어 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·기습추행·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식·시각·당시 상황 정리.</li>\n<li><strong>② 기습추행</strong> — 의사에 반한 갑작스러운 신체접촉이 추행에 해당하는지 정리.</li>\n<li><strong>③ 증거 보전</strong> — 클럽 CCTV·동행자 진술·직후 호소 정황 보전.</li>\n<li><strong>④ 가해자 특정</strong> — 인상착의·CCTV·동행 일행으로 상대 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기습추행은 폭행 자체가 추행으로 평가될 수 있어 항거를 곤란하게 할 정도의 폭행이 없어도 성립할 수 있는 영역입니다. 어둡고 붐비는 환경이라 CCTV·동행자 진술 확보가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 정황 보전 (즉시)</strong> — 시각·위치·인상착의를 메모하고 클럽 측에 CCTV 보존 요청.</li>\n<li><strong>2단계 — 직후 호소·진술 확보 (직후)</strong> — 동행자·직원에게 즉시 알리고 직후 통화·메시지 남기기.</li>\n<li><strong>3단계 — 가해자 특정 (직후)</strong> — CCTV·동행 일행·결제 정보로 상대 특정.</li>\n<li><strong>4단계 — 경찰 신고·진술 (준비 후)</strong> — 112 신고, 접촉 부위·방식·당시 상황 진술.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 댄스플로어 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·기습추행·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>접촉 부위·방식·시각·위치 메모</strong></li>\n<li><strong>클럽 CCTV 보존 요청 자료</strong></li>\n<li><strong>동행자·목격자 진술·연락처</strong></li>\n<li><strong>직후 통화·메시지 기록 (즉시 호소 정황)</strong></li>\n<li><strong>입장·결제·예약 정보 (시간 특정)</strong></li>\n<li><strong>가해자 인상착의·동행 일행 정보</strong></li>\n<li><strong>해바라기센터 상담·진료 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 클럽 CCTV는 보존 기간이 짧아 빨리 보존을 요청하는 것이 핵심입니다. 갑작스러운 접촉 부위·방식과 직후 호소 정황을 구체적으로 남기면 기습추행 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기습추행</strong> — 폭행 자체가 추행으로 평가되는 접촉인지.</li>\n<li><strong>우연한 접촉 항변</strong> — \'춤추다 부딪혔다\'는 주장의 다툼.</li>\n<li><strong>추행의 고의</strong> — 의사에 반하는 유형력 행사 의도가 있었는지.</li>\n<li><strong>미수 성립</strong> — 접촉에 이르지 못해도 실행 착수가 있었는지.</li>\n<li><strong>증거 시점</strong> — CCTV·동행자 진술 보존의 신속성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 강제추행미수의 성립',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄에는 폭행행위 자체가 추행행위라고 인정되는 경우도 포함되고 이때 폭행은 상대방의 의사를 억압할 정도일 필요가 없으며, 추행의 고의로 의사에 반하는 유형력을 행사해 실행에 착수했으나 추행 결과에 이르지 못하면 강제추행미수가 성립하고 이는 기습추행에도 적용된다고 판시했습니다. 클럽에서 갑자기 껴안거나 더듬은 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '갑작스러운 접촉 + 의사에 반함 + 즉시 항의 곤란 결합 시 기습추행·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '붐벼서 항의를 못 했는데도 추행이 되나요?',
        answer:
          '<strong>의사에 반한 갑작스러운 접촉은 기습추행으로 평가될 수 있는 영역입니다.</strong> 접촉 부위·방식을 정리하세요.',
      },
      {
        question: '상대가 춤추다 부딪혔다고 하면 어떻게 되나요?',
        answer:
          '<strong>접촉 부위·방식·CCTV 정황을 종합해 우연인지 판단하는 영역입니다.</strong> 객관 정황을 신속히 확보하세요.',
      },
      {
        question: '몸이 닿기 직전이었는데도 처벌이 되나요?',
        answer:
          '<strong>실행 착수가 인정되면 강제추행미수로 다툴 수 있는 영역입니다.</strong> 당시 동작·상황을 구체적으로 정리하세요.',
      },
      {
        question: '가해자를 모르는데 어떻게 특정하나요?',
        answer:
          '<strong>CCTV·동행 일행·결제 정보로 상대를 특정할 수 있는 영역입니다.</strong> CCTV 보존부터 빨리 요청하세요.',
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
      { label: '기습추행 입증', href: '/guide/sex-crime/sex-crime-surprise-indecent-proof-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 8. sex-crime-subway-illegal-filming-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-subway-illegal-filming-track',
    keyword: '지하철 불법촬영',
    questionKeyword: '지하철·계단에서 누군가 휴대폰으로 제 신체를 몰래 촬영하는 걸 발견했어요. 휴대폰을 보니 제 사진·영상이 있었는데, 당황해서 어떻게 해야 할지 몰랐어요. 이런 불법촬영을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '지하철 불법촬영 신고·증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '지하철 불법촬영 — 5단계 신고·증거 점검 | 로앤가이드',
      description:
        '지하철에서 신체를 몰래 촬영당했다면, 성폭력처벌법 제14조 카메라등이용촬영의 신체 직접 촬영·복제물 법리와 현장 증거 보전·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지하철·에스컬레이터·계단에서 누군가 휴대폰을 들이대 신체를 몰래 촬영하는 것을 발견하고 큰 충격과 수치심을 느낀 분의 상황입니다. 휴대폰 화면에 본인 사진·영상이 보였지만 당황해 그 자리에서 어떻게 대응할지 몰랐고, 상대가 자료를 지워버릴까 막막하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제14조 제1항은 카메라나 그 밖에 이와 유사한 기능의 기계장치를 이용해 성적 욕망 또는 수치심을 유발할 수 있는 사람의 신체를 의사에 반해 촬영한 자를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 위 조항은 사람의 신체 그 자체를 직접 촬영한 행위를 대상으로 하고, 촬영물의 복제물도 반포 등 규정의 적용 대상이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 몰래 촬영 + 신체 대상 + 의사에 반함 결합은 \'촬영 행위·증거 보전\' 절차가 가능한 트랙입니다. 피해자라면 ① 현장 정황 정리 ② 촬영 행위 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 불법촬영 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장 정황·촬영 행위·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 정황 정리</strong> — 발견 시각·위치·촬영 동작·휴대폰 화면 정황 정리.</li>\n<li><strong>② 촬영 행위</strong> — 신체를 의사에 반해 직접 촬영했는지 정리.</li>\n<li><strong>③ 증거 보전</strong> — 휴대폰 화면·역사 CCTV·목격자 진술 보전.</li>\n<li><strong>④ 가해자 특정</strong> — 현장 인계·CCTV·역 직원 협조로 상대 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 지하철보안관·경찰 신고·디지털성범죄피해자지원센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 불법촬영은 촬영물 삭제·도주가 빨라 현장에서 곧바로 신고하고 휴대폰·CCTV를 보전하는 것이 핵심입니다. 신체를 의사에 반해 직접 촬영했는지가 촬영죄 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 신고·보안관 호출 (즉시)</strong> — 지하철보안관·역 직원에게 알리고 112 신고.</li>\n<li><strong>2단계 — 휴대폰·화면 보전 (즉시)</strong> — 상대 휴대폰 자료 삭제 전 경찰 인계·화면 확보 요청.</li>\n<li><strong>3단계 — CCTV·목격자 확보 (직후)</strong> — 역사 CCTV 보존 요청·목격자 진술 확보.</li>\n<li><strong>4단계 — 진술·피해 상담 (준비 후)</strong> — 경찰 진술, 디지털성범죄피해자지원센터 상담.</li>\n<li><strong>5단계 — 삭제·보호조치 (이후)</strong> — 촬영물 유포 시 삭제 지원·신변보호·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 불법촬영 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장 정황·촬영 행위·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>발견 시각·위치·촬영 동작 메모</strong></li>\n<li><strong>상대 휴대폰 화면·촬영물 확인 정황</strong></li>\n<li><strong>역사·차량 CCTV 보존 요청 자료</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>지하철보안관·역 직원 인계 기록</strong></li>\n<li><strong>가해자 인상착의·소지품 정보</strong></li>\n<li><strong>디지털성범죄피해자지원센터 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대 휴대폰의 촬영물은 핵심 증거지만 임의로 빼앗기보다 보안관·경찰에 인계해 적법하게 확보하는 것이 안전합니다. 역사 CCTV는 보존 기간이 짧으니 곧바로 보존을 요청하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영 행위</strong> — 신체를 의사에 반해 직접 촬영했는지.</li>\n<li><strong>촬영물·복제물</strong> — 저장·복제한 자료가 처벌 대상 촬영물인지.</li>\n<li><strong>미수·기수</strong> — 촬영을 시도했으나 저장에 이르지 못했는지.</li>\n<li><strong>증거 확보 방법</strong> — 휴대폰·CCTV를 적법하게 확보했는지.</li>\n<li><strong>유포 여부</strong> — 촬영물이 전송·유포됐는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물 삭제·상담 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 카메라등이용촬영죄의 신체 직접 촬영과 복제물',
        summary:
          '대법원 2024도16133(대법원, 2025.06.05 선고) 영역에서 법원은 성폭력처벌법 제14조 제1항의 \'사람의 신체를 촬영한 행위\'는 사람의 신체 그 자체를 직접 촬영하는 행위를 대상으로 하고, 영상통화로 전송된 신체 영상정보를 녹화·저장한 동영상은 제14조 제2항 후단의 촬영물의 복제물에 해당하며 제4항의 촬영물 등은 처벌 대상 촬영·반포 등 행위가 전제된 것을 의미한다고 판시했습니다. 지하철에서 신체를 직접 몰래 촬영한 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '몰래 촬영 + 신체 대상 + 의사에 반함 결합 시 촬영 행위·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '촬영당한 걸 발견했는데 현장에서 무엇부터 하나요?',
        answer:
          '<strong>곧바로 보안관·112에 알려 휴대폰 삭제 전 적법 확보를 요청하는 것이 핵심인 영역입니다.</strong> 자료를 임의로 빼앗지 마세요.',
      },
      {
        question: '상대가 이미 사진을 지웠다면 처벌이 안 되나요?',
        answer:
          '<strong>복구·CCTV·목격 정황으로 촬영 사실을 입증할 수 있는 영역입니다.</strong> CCTV 보존부터 빨리 요청하세요.',
      },
      {
        question: '저장은 안 하고 비추기만 했어도 처벌되나요?',
        answer:
          '<strong>촬영 시도·실행 착수 여부에 따라 미수·기수가 갈리는 영역입니다.</strong> 당시 동작·화면 정황을 정리하세요.',
      },
      {
        question: '촬영물이 이미 유포됐다면 어떻게 하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제 지원을 받아볼 수 있는 영역입니다.</strong> 유포 정황을 캡처해 신고하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '불법촬영 신고 절차', href: '/guide/sex-crime/sex-crime-illegal-filming-report-procedure' },
      { label: '촬영물 삭제 지원', href: '/guide/sex-crime/sex-crime-image-deletion-support-track' },
      { label: '추행·촬영 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-sextortion-image-threat-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-sextortion-image-threat-track',
    keyword: '협박 성적영상 유포',
    questionKeyword: '온라인에서 알게 된 사람에게 성적인 사진·영상을 보냈는데, 이제 와서 \'돈을 보내지 않으면 가족·지인에게 유포하겠다\'며 협박해요. 영상이 퍼질까 무서운데, 이런 협박과 유포 위협을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '협박 성적영상 유포 신고·대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '협박 성적영상 유포 — 5단계 촬영물협박·대응 점검 | 로앤가이드',
      description:
        '성적 영상으로 유포하겠다는 협박을 받았다면, 성폭력처벌법 제14조의3 촬영물등이용협박과 동의 촬영물도 성착취물이 될 수 있다는 법리, 증거 보전까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인에서 알게 된 사람에게 신뢰했던 마음에 성적인 사진·영상을 보냈는데, 이제 와서 \'돈을 보내지 않으면\', \'요구를 들어주지 않으면 가족·지인·직장에 유포하겠다\'며 협박당하는 분의 상황입니다. 영상이 퍼질까 두렵고 누구에게 말하기도 어려워 혼자 끙끙 앓으며 막막하실 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제14조의3은 촬영물 등을 이용해 사람을 협박한 자를 1년 이상의 유기징역에 처하도록 규정하는 영역입니다. 또한 대상이 아동·청소년이면 아동·청소년의 성보호에 관한 법률상 성착취물 관련 규정이 적용될 수 있습니다. 판례는 객관적으로 아동·청소년이 등장해 성적 행위를 하는 영상물을 제작한 이상 동의 아래 촬영했거나 사적 소지가 목적이었더라도 성착취물 제작에 해당한다고 본 사례 흐름이 있는 영역입니다. 성적 영상 + 유포 위협 + 금전·요구 강요 결합은 \'촬영물협박·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 협박·영상 정리 ② 협박 행위 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·삭제 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 협박 성적영상 유포 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 협박·협박 행위·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 협박·영상 정리</strong> — 협박 메시지·요구 내용·영상 전달 경위 정리.</li>\n<li><strong>② 협박 행위</strong> — 촬영물을 이용해 유포를 빌미로 협박했는지 정리.</li>\n<li><strong>③ 증거 보전</strong> — 협박 대화·계정·송금 요구 내역 보전.</li>\n<li><strong>④ 가해자 특정</strong> — 계정·계좌·아이피 등으로 상대 특정.</li>\n<li><strong>⑤ 신고·삭제</strong> — 경찰 신고·디지털성범죄피해자지원센터 삭제 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 요구에 응하면 협박이 반복·심화되는 경우가 많아, 추가 송금·요구 수용을 멈추고 협박 대화를 그대로 보존하는 것이 핵심입니다. 대상이 미성년자면 성착취물 관련 규정이 함께 적용될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 요구 중단·증거 보전 (즉시)</strong> — 추가 송금·요구 수용 중단, 협박 대화·계정 캡처 보존.</li>\n<li><strong>2단계 — 디지털성범죄피해자지원센터 상담 (즉시)</strong> — 삭제 지원·심리 지원·대응 자문.</li>\n<li><strong>3단계 — 경찰 신고 (직후)</strong> — 112·사이버범죄 신고, 협박 증거 제출.</li>\n<li><strong>4단계 — 가해자 특정·추적 (조사 단계)</strong> — 계정·계좌·아이피 등으로 상대 특정.</li>\n<li><strong>5단계 — 삭제·보호조치 (이후)</strong> — 유포물 삭제 지원·신변보호·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">협박 성적영상 유포 신고·삭제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 협박·협박 행위·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>협박 메시지·대화 전체 캡처 (요구·위협 내용)</strong></li>\n<li><strong>영상·사진 전달 경위 기록</strong></li>\n<li><strong>송금 요구·계좌·코인 지갑 정보</strong></li>\n<li><strong>상대 계정·프로필·아이디 정보</strong></li>\n<li><strong>유포·유포 위협 정황 캡처</strong></li>\n<li><strong>디지털성범죄피해자지원센터 상담·삭제 접수 기록</strong></li>\n<li><strong>경찰 신고·진정서 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 협박 대화는 삭제·차단 전에 화면 전체를 캡처해 두는 것이 핵심입니다. 요구에 응하지 말고 디지털성범죄피해자지원센터에 먼저 연락하면 삭제 지원과 대응 방향을 함께 정리하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영물이용협박</strong> — 촬영물을 빌미로 유포를 협박했는지.</li>\n<li><strong>동의 촬영물</strong> — 동의로 보낸 영상도 성착취물·협박 대상이 되는지.</li>\n<li><strong>대상 연령</strong> — 미성년자면 성착취물 규정이 적용되는지.</li>\n<li><strong>가해자 특정</strong> — 계정·계좌·아이피로 상대를 특정할 수 있는지.</li>\n<li><strong>유포 여부</strong> — 실제 유포로 추가 죄책이 발생했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물 삭제·상담 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 동의 촬영물도 성착취물 제작에 해당할 수 있음',
        summary:
          '대법원 2025도7992(대법원, 2025.08.14 선고) 영역에서 법원은 청소년성보호법상 아동·청소년성착취물은 아동·청소년이 등장해 성적 행위를 하는 내용을 표현한 영상물을 뜻하고, 객관적으로 그러한 영상물을 제작한 이상 대상 아동·청소년의 동의 아래 촬영했거나 사적 소지·보관을 1차적 목적으로 제작했더라도 성착취물 제작에 해당하지 않는다고 볼 수 없다고 판시했습니다. 성적 영상을 빌미로 협박·유포가 문제 되는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '성적 영상 + 유포 위협 + 금전·요구 강요 결합 시 촬영물협박·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 동의해서 보낸 영상인데도 협박이 되나요?',
        answer:
          '<strong>동의로 보낸 영상도 이를 빌미로 협박하면 촬영물이용협박으로 다툴 수 있는 영역입니다.</strong> 협박 대화를 보존하세요.',
      },
      {
        question: '요구대로 돈을 보내면 끝나지 않나요?',
        answer:
          '<strong>요구에 응하면 협박이 반복·심화되는 경우가 많은 영역입니다.</strong> 송금을 멈추고 먼저 상담·신고를 검토하세요.',
      },
      {
        question: '아직 유포는 안 됐는데도 신고할 수 있나요?',
        answer:
          '<strong>유포 전 협박 단계도 촬영물이용협박으로 신고를 검토할 수 있는 영역입니다.</strong> 위협 메시지를 캡처하세요.',
      },
      {
        question: '상대가 누군지 모르는데 잡을 수 있나요?',
        answer:
          '<strong>계정·계좌·아이피 등으로 수사가 진행될 수 있는 영역입니다.</strong> 가진 자료를 모두 모아 신고하세요.',
      },
      {
        question: '영상 삭제는 어디서 도와주나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제 지원을 받아볼 수 있는 영역입니다.</strong> 유포·계정 정보를 정리해 접수하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '촬영물이용협박 신고 절차', href: '/guide/sex-crime/sex-crime-image-threat-report-procedure' },
      { label: '촬영물 삭제 지원', href: '/guide/sex-crime/sex-crime-image-deletion-support-track' },
      { label: '성착취물 대응', href: '/guide/sex-crime/sex-crime-exploitation-material-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 10. sex-crime-medical-exam-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-medical-exam-falsely-accused-defense',
    keyword: '의료 진찰 중 추행 무고',
    questionKeyword: '의사·의료진으로서 정상적인 진찰·시술을 했을 뿐인데, 환자가 진료 중 신체접촉을 추행으로 고소했어요. 진료에 필요한 접촉이었는데 추행으로 몰려 억울합니다. 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '의료 진찰 중 추행 진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '의료 진찰 중 추행 무고 방어 — 5단계 진술 신빙성 점검 | 로앤가이드',
      description:
        '정상 진찰 중 신체접촉을 추행으로 고소당했다면, 무죄추정 원칙과 진술이 유일 증거일 때 요구되는 신빙성, 진료 필요성 입증을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「의사·의료진으로서 정상적인 진찰·검사·시술을 했을 뿐인데, 환자가 진료 중의 신체접촉을 추행이라며 고소해 한순간에 피의자로 지목된 분의 상황입니다. 진단·치료에 필요한 접촉이었는데 추행으로 몰려 직업적 신뢰까지 흔들릴까 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 추행 해당 여부와 함께 피해자 진술이 유일한 증거일 때 그 진술이 합리적 의심을 배제할 정도의 신빙성을 갖추었는지가 핵심 쟁점입니다. 판례는 형사피고인은 유죄 확정 전까지 무죄로 추정되고 유죄 인정은 합리적 의심이 없는 정도의 증명을 요하며, 추행 행위가 예상되기 어려운 상황에서 피해자 진술이 유일한 증거라면 그 진술이 객관적 정황·경험칙에 비추어 신빙성이 있어야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 진료 필요성·정황과 진술의 모순을 정리해 다툴 수 있는 영역입니다. 진료 행위 + 진술 신빙성 다툼 + 정황 부합 결합은 \'무죄추정·진술 신빙성\' 방어가 가능한 트랙입니다. 사실과 다르게 고소됐다면 ① 경위 정리 ② 진료 필요성 ③ 진술 신빙성 ④ 정황 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 의료 진찰 중 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·진료 필요성·진술 신빙성·정황·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 진료 경위·접촉 부위·시술 내용·동석자 정리.</li>\n<li><strong>② 진료 필요성</strong> — 접촉이 진단·치료에 필요한 표준 행위였는지 정리.</li>\n<li><strong>③ 진술 신빙성</strong> — 피해자 진술이 유일 증거인지, 신빙성을 갖췄는지 검토.</li>\n<li><strong>④ 정황 검토</strong> — 진료기록·동석 정황·시간 등 객관 자료 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피해자 진술이 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 신빙성을 갖췄는지가 분기점입니다. 진료 필요성·표준 절차·동석 정황을 정리해 진술의 신빙성을 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 진료기록·접촉 부위·시술 내용·동석자 정리.</li>\n<li><strong>2단계 — 진료 필요성 정리 (1주)</strong> — 표준 진료 절차·필요 접촉임을 보여주는 자료 확보.</li>\n<li><strong>3단계 — 진술 신빙성 쟁점 정리 (2주)</strong> — 진술의 일관성·정황 부합 여부 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">의료 진찰 중 추행 진술 신빙성 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·진료 필요성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>진료기록·차트·처방 내역 (접촉 경위)</strong></li>\n<li><strong>표준 진료 절차·가이드라인 자료 (필요성)</strong></li>\n<li><strong>간호사·동석자·보호자 진술·연락처</strong></li>\n<li><strong>진료실 구조·CCTV·예약 시간 자료</strong></li>\n<li><strong>피해자 진술 모순·정황 불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n<li><strong>동종 진료 관행·전문가 의견 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'접촉이 진료에 필요했는지\'와 \'진술이 정황에 부합하는지\'입니다. 진료기록·표준 절차·동석 정황을 정돈하고 진술의 모순·불부합을 구체적으로 짚으면 신빙성 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진료 필요성</strong> — 접촉이 진단·치료에 필요한 표준 행위였는지.</li>\n<li><strong>추행 해당성</strong> — 접촉이 성적 의도의 추행으로 평가되는지.</li>\n<li><strong>진술 신빙성</strong> — 유일 증거인 진술이 정황·경험칙에 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심이 없는 정도로 증명됐는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 유일 진술의 신빙성 요건',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄 확정 전까지 무죄로 추정되고 유죄 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 추행 행위가 이루어질 것으로 예상하기 곤란한 상황에서 피해자 진술이 유일한 증거인 경우 그 진술은 내용 자체의 합리성과 객관적 정황·경험칙에 비추어 합리적 의심을 배제할 정도의 신빙성을 갖추어야 한다고 판시했습니다. 진료 중 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '진료 행위 + 진술 신빙성 다툼 + 정황 부합 결합 시 무죄추정·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '진료에 필요한 접촉이었는데도 추행이 되나요?',
        answer:
          '<strong>접촉이 진단·치료에 필요한 표준 행위였는지가 핵심인 영역입니다.</strong> 진료기록·표준 절차 자료를 확보하세요.',
      },
      {
        question: '환자 진술만 있는데도 처벌될 수 있나요?',
        answer:
          '<strong>유일 진술은 정황·경험칙에 부합하는 신빙성을 갖춰야 인정되는 영역입니다.</strong> 진술 모순·불부합을 정리하세요.',
      },
      {
        question: '동석자가 없었는데 어떻게 방어하나요?',
        answer:
          '<strong>진료기록·진료실 구조·시간 등 객관 정황으로 다툴 수 있는 영역입니다.</strong> 표준 절차·정황 자료를 모으세요.',
      },
      {
        question: '진료 관행을 어떻게 보여주나요?',
        answer:
          '<strong>동종 진료 관행·가이드라인·전문가 의견이 다툼의 자료가 되는 영역입니다.</strong> 관련 자료를 확보하세요.',
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
      { label: '진술 신빙성 다툼', href: '/guide/sex-crime/sex-crime-statement-credibility-track' },
      { label: '진료 중 접촉 분쟁 대응', href: '/guide/sex-crime/sex-crime-medical-contact-dispute-track' },
      { label: '수사 진술 대응', href: '/guide/sex-crime/sex-crime-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/sex-crime/sex-crime-public-defender-track' },
    ],
  },
];
