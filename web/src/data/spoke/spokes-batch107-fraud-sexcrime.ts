import { SpokePage } from '../spoke-pages';

// batch107 fraud(6) + sex-crime(4) — 10개 (2026-06-24)
//
// 고유 존재 이유:
// 1. fraud-membership-gym-prepaid-closure-track — 일반 환불 분쟁과 분기. '헬스장 선불 회원권을 끊자마자 폐업·잠적해 환불 거부' 선불 회원권 폐업 기망 편취 절차형 트랙(victim).
// 2. fraud-overseas-job-placement-fee-track — 일반 취업 분쟁과 분기. '해외 취업을 알선해준다며 수수료만 받고 잠적' 해외 취업 알선 수수료 편취 판단형 트랙(victim).
// 3. fraud-nft-project-rugpull-investment-track — 일반 코인 분쟁과 분기. 'NFT 프로젝트가 로드맵을 미끼로 투자만 받고 러그풀' NFT 러그풀 투자 기망 편취 판단형 트랙(victim).
// 4. fraud-used-machinery-defect-concealment-track — 일반 중고 거래 분쟁과 분기. '중고 기계의 중대한 하자를 숨기고 정상인 것처럼 판매' 하자 은폐 고지의무 위반 편취 절차형 트랙(victim).
// 5. fraud-wedding-hall-package-false-estimate-track — 일반 예식 분쟁과 분기. '예식장 패키지를 허위 견적으로 속여 추가금 편취' 허위 견적 기망 편취 판단형 트랙(victim).
// 6. fraud-joint-business-seed-money-falsely-accused-defense — 일반 사기 무고류와 분기. '동업 사업자금을 편취했다며 사기로 고소당함' 편취 고의·동업 정산 방어 판단형 트랙(accused).
// 7. sex-crime-pilates-instructor-posture-correction-touch-report-track — 일반 추행류와 분기. '필라테스 강사가 자세교정을 빙자해 추행' 자세교정 가장 추행 해당성 판단형 트랙(victim).
// 8. sex-crime-club-dancefloor-grope-report-track — 일반 추행류와 분기. '클럽 댄스플로어에서 기습 추행을 당함' 기습추행 신고 절차 절차형 트랙(victim).
// 9. sex-crime-photo-studio-posing-pretext-touch-report-track — 일반 추행류와 분기. '사진관에서 포즈 지도를 빙자해 추행' 포즈 지도 가장 기습추행 해당성 판단형 트랙(victim).
// 10. sex-crime-crowded-bus-contact-falsely-accused-defense — 일반 성범죄 무고류와 분기. '만원 버스 접촉이 추행으로 고소' 우연 접촉·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch107FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-membership-gym-prepaid-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-membership-gym-prepaid-closure-track',
    keyword: '헬스장 선불 회원권 폐업 환불 기망 사기',
    questionKeyword: '헬스장·필라테스장에서 ‘장기로 끊으면 훨씬 싸다, 곧 시설도 확장한다’는 말을 믿고 12개월·24개월 선불 회원권과 PT를 한꺼번에 결제했어요. 그런데 얼마 지나지 않아 갑자기 문을 닫고 ‘본사 사정이다, 양도 절차 중이다’라며 환불을 미루다 사장과 연락이 끊겼어요. 알고 보니 폐업이 예정된 상태에서 회원권만 잔뜩 받아 챙긴 정황이고, 같은 시기 다른 회원들도 똑같이 당했는데, 이런 헬스장 선불 회원권 폐업 기망을 사기로 신고하고 결제한 돈을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '헬스장 선불 회원권 폐업 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 선불 회원권 폐업 기망 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '장기 할인을 미끼로 선불 회원권을 끊자마자 폐업·환불 거부로 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·필라테스장·요가원에서 ‘지금 장기로 끊으면 단가가 훨씬 싸다, 곧 시설도 새로 확장하고 강사도 늘린다’는 솔깃한 권유를 믿고, 한 달 단위보다 이득이라는 생각에 12개월·24개월짜리 선불 회원권과 PT 수십 회를 한꺼번에 결제한 분의 상황입니다. 그런데 막상 몇 주·몇 달 다니지도 못한 사이 어느 날 갑자기 문이 닫히고, ‘본사 사정이라 어쩔 수 없다, 다른 지점으로 양도 절차를 밟고 있으니 기다려라’며 환불을 차일피일 미루다가 결국 사장·운영자와 연락이 끊겨, 큰돈을 미리 낸 회원권이 통째로 묶여버린 채 막막하실 거예요. 알고 보니 이미 폐업이 예정되어 자금 사정이 어려운 상태에서 장기 회원권만 잔뜩 받아 챙긴 정황이고, 같은 시기 다른 회원들도 똑같이 당했다면 단순 폐업이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상적인 영업을 계속할 의사·능력이 없는데도 폐업 예정 사실을 숨기고 장기 회원권을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 재물 편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우에도 편취액은 교부받은 재물에서 대가를 공제한 차액이 아니라 교부받은 재물 전부라고 본 사례 흐름이 있는 영역으로, 일부 이용했더라도 결제한 회원권 대금 전부를 기준으로 편취 여부와 손해를 가려 다툴 여지가 있습니다. 폐업 예정 은폐 + 장기 선불 유도 + 환불 거부·잠적 결합은 ‘선불 회원권 폐업 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 폐업 예정·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 선불 회원권 폐업 환불 기망 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·폐업 예정·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 장기 할인 권유·회원권 계약서·결제 내역 정리.</li>\n<li><strong>② 폐업 예정·기망</strong> — 폐업 예정·자금난을 숨기고 장기 회원권을 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 일부 이용했어도 결제한 회원권 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 카드 할부 항변·계약 해지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경영난 폐업과 달리, 폐업 예정 사실을 숨긴 채 장기 선불 회원권을 집중적으로 받았는지가 판단의 분기점입니다. 폐업 직전 결제 정황과 다른 회원들의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 장기 할인 권유·회원권 계약서·결제·영수증 내역 캡처 보존.</li>\n<li><strong>2단계 — 폐업 예정 정황 입증 (즉시)</strong> — 폐업 직전 집중 결제·다른 회원 동일 피해·환불 거부 안내를 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·해지 요구 (병행)</strong> — 할부 결제면 신용카드사 할부항변권 행사와 계약 해지를 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 한국소비자원 피해구제·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 선불 회원권 폐업 기망 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·폐업 예정·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>장기 할인·확장 권유 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>회원권·PT 계약서·약관 (계약 내용)</strong></li>\n<li><strong>결제·영수증·할부 내역 (피해 금액)</strong></li>\n<li><strong>폐업 안내문·환불 거부 공지 기록</strong></li>\n<li><strong>다른 회원의 동일 피해·단체 채팅 기록</strong></li>\n<li><strong>운영자·상호·사업자등록·계좌 정보</strong></li>\n<li><strong>카드 할부항변·계약 해지 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폐업 직전 짧은 기간에 장기 회원권 결제가 몰렸다는 정황과 다른 회원들의 동일 피해를 함께 모으면 폐업 예정 은폐를 다투는 데 도움이 됩니다. 할부로 결제했다면 신용카드사 할부항변권 행사 가능 여부를 먼저 확인해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐업 예정·기망</strong> — 폐업 예정·자금난을 숨기고 장기 회원권을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영난 폐업인지 처음부터 편취였는지.</li>\n<li><strong>고지의무</strong> — 영업 지속 의사·능력을 알릴 신의칙상 의무가 있었는지.</li>\n<li><strong>편취액</strong> — 일부 이용했어도 결제한 대금 전부가 피해액인지.</li>\n<li><strong>운영자 특정</strong> — 상호·사업자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (회원권·체육시설 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (할부·결제 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취액과 대가 일부 지급',
        summary:
          '대법원 2007도6241(대법원, 2007.10.25 선고) 영역에서 법원은 상품의 거래를 매개로 자금을 받은 행위가 유사수신행위에 해당하는지의 판단 기준과 함께, 재물 편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우의 편취액에 관해 판단했습니다. 법원은 사기죄에서 대가가 일부 지급된 경우에도 편취액은 교부받은 재물에서 대가를 공제한 차액이 아니라 교부받은 재물 전부라고 보았습니다. 또 물품 거래를 빙자해 실제로는 투자금을 받은 정황이라면 그 실질을 따져 자금 수수의 성격을 판단해야 한다고 판시했습니다. 선불 회원권을 받고 곧 폐업한 사안을 살펴볼 때에도, 일부 이용했더라도 결제한 회원권 대금 전부를 기준으로 편취 여부와 손해를 검토해볼 수 있습니다.',
        takeaway: '폐업 예정 은폐 + 장기 선불 유도 + 환불 거부 결합 시 선불 회원권 폐업 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 경영난으로 폐업한 것 아닌가요?',
        answer:
          '<strong>폐업 예정을 숨기고 장기 회원권을 집중적으로 받았는지가 핵심인 영역입니다.</strong> 폐업 직전 결제 정황과 권유 대화를 확보하세요.',
      },
      {
        question: '일부는 다녔는데도 사기 피해인가요?',
        answer:
          '<strong>일부 이용했어도 결제한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 회원권 결제 총액을 정리하세요.',
      },
      {
        question: '다른 회원도 같이 당한 것 같아요.',
        answer:
          '<strong>같은 시기 다중 피해 정황은 편취·기망을 뒷받침하는 단서인 영역입니다.</strong> 회원 단체 채팅·피해 명단을 모으세요.',
      },
      {
        question: '카드 할부로 냈는데 막을 방법이 있나요?',
        answer:
          '<strong>할부 결제면 신용카드사 할부항변권 행사를 검토할 수 있는 영역입니다.</strong> 카드사에 잔여 할부 항변을 신속히 요청하세요.',
      },
      {
        question: '사장이 잠적해 연락이 안 돼요.',
        answer:
          '<strong>계약 해지·소비자원 피해구제·민사 반환으로 회수를 검토할 수 있는 영역입니다.</strong> 환불 거부 공지와 계좌 정보를 보관하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '헬스장 선불 회원권 폐업 추적', href: '/guide/fraud/fraud-prepaid-gym-membership-closure-norefund-track' },
      { label: '헬스장 회원권 폐업 환불', href: '/guide/fraud/fraud-gym-closure-membership-refund' },
      { label: '헬스·요가 선불 폐업 잠적 추적', href: '/guide/fraud/fraud-gym-yoga-membership-prepay-bankruptcy-vanish-track' },
      { label: '회원제 클럽 선불 갑작 폐업 추적', href: '/guide/fraud/fraud-membership-club-prepaid-sudden-shutdown-track' },
    ],
  },

  // ─── 2. fraud-overseas-job-placement-fee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-job-placement-fee-track',
    keyword: '해외 취업 알선 수수료 편취 사기',
    questionKeyword: '해외 취업 알선 업체·중개인이 ‘좋은 조건의 일자리가 확정됐다, 비자·항공·수속비와 알선 수수료를 먼저 내면 바로 출국시켜 준다’는 말을 믿고, 취업만 되면 된다는 생각에 수수료와 각종 비용을 먼저 입금했어요. 그런데 막상 돈을 보내고 나니 ‘서류가 늦어진다, 추가 비용이 더 필요하다’며 돈만 계속 요구하고, 정작 일자리는 실체가 없거나 출국은 무산된 채 연락이 끊겼어요. 알고 보니 취업을 시켜줄 의사 없이 수수료만 받아 챙긴 것 같은데, 이런 해외 취업 알선 수수료 편취를 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '해외 취업 알선 수수료 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '해외 취업 알선 수수료 편취 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '취업을 확정해준다며 알선 수수료·수속비만 받고 일자리는 실체가 없이 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 취업 알선 업체·브로커·중개인이 ‘현지 회사에 좋은 조건의 일자리가 이미 확정됐다, 자리가 한정되어 있으니 비자·항공·수속비와 알선 수수료를 먼저 입금해야 자리를 잡는다, 출국하면 급여에서 다시 정산해 준다’는 솔깃한 말을 믿고, 일단 취업만 되면 인생이 바뀐다는 기대에 수수료와 각종 비용을 서둘러 먼저 입금한 분의 상황입니다. 그런데 막상 돈을 보내고 나니 ‘현지 서류가 늦어진다, 비자 발급에 추가 비용이 더 든다, 마지막으로 한 번만 더 내면 출국 날짜가 잡힌다’며 추가 입금만 계속 요구하다가, 정작 약속한 일자리는 실체가 없거나 출국은 무산된 채 담당자·업체가 연락처를 닫고 사라져, 알고 보니 처음부터 취업을 시켜줄 의사 없이 수수료만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 새 출발을 꿈꾸며 어렵게 모은 돈을 보낸 거라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 취업을 알선·성사시킬 의사나 능력 없이 일자리가 확정된 것처럼 속여 수수료를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망행위를 수단으로 한 권리행사가 사기죄를 구성하는 경우가 있고, 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 일부 서비스가 있었더라도 교부한 수수료 전부를 기준으로 편취 여부와 손해를 가려 다툴 여지가 있습니다. 일자리 확정 가장 + 수수료·추가 비용 요구 + 무산·잠적 결합은 ‘해외 취업 알선 수수료 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 알선 빙자·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 취업 알선 수수료 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·알선 빙자·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 일자리 안내·수수료·수속비 요구·입금 내역 정리.</li>\n<li><strong>② 알선 빙자·기망</strong> — 취업 의사·능력 없이 일자리가 확정된 것처럼 속였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 수수료·수속비 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 알선 실패와 달리, 일자리가 확정된 것처럼 속여 수수료만 받고 추가 비용만 요구하다 잠적했는지가 판단의 분기점입니다. 일자리 확정 안내·수수료 요구 대화와 실체 없는 일자리·무산 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 일자리 안내·수수료·수속비 요구 대화·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 실체 없는 일자리 입증 (즉시)</strong> — 일자리 무산·추가 비용 반복 요구·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 취업 알선 수수료 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·알선·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>일자리·연봉·조건 안내 캡처 (거래 조건)</strong></li>\n<li><strong>수수료·비자·수속비 요구 대화 (기망 정황)</strong></li>\n<li><strong>수수료·추가 비용 입금 내역 (피해 금액)</strong></li>\n<li><strong>일자리 무산·서류 지연 안내 기록</strong></li>\n<li><strong>반복된 추가 입금 요구·연락 두절 기록</strong></li>\n<li><strong>업체·중개인·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일자리가 확정됐다는 안내와 수수료를 먼저 내라는 요구 대화를 함께 정리하면 알선 빙자 기망을 다투는 데 도움이 됩니다. 등록된 직업소개·해외취업 알선 업체인지 한국산업인력공단·고용노동부에서 확인한 자료도 보관해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>알선 빙자·기망</strong> — 취업 의사·능력 없이 일자리가 확정된 것처럼 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 알선 실패인지 처음부터 편취였는지.</li>\n<li><strong>일자리 실체</strong> — 약속한 일자리가 실재했는지.</li>\n<li><strong>편취액</strong> — 수수료·수속비 등 교부 금액 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·중개인·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (취업·투자사기 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 권리행사와 편취액',
        summary:
          '대법원 2017도21196(대법원, 2018.04.12 선고) 영역에서 법원은 기망행위를 수단으로 한 권리행사가 사기죄를 구성하는 경우가 있고, 금원 편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우에도 편취액은 교부받은 금원에서 대가를 공제한 차액이 아니라 교부받은 금원 전부라고 보았습니다. 이러한 법리는 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄에서도 마찬가지로 적용된다고 판시했습니다. 다만 업무상 배임을 가중처벌하려면 재산상 손해의 발생과 그 액수에 관한 증명이 있어야 한다는 점도 함께 밝혔습니다. 취업을 빙자해 수수료를 받은 사안을 살펴볼 때에도, 일부 서비스가 있었더라도 교부한 수수료 전부를 기준으로 편취 여부와 손해를 검토해볼 수 있습니다.',
        takeaway: '일자리 확정 가장 + 수수료 요구 + 무산·잠적 결합 시 해외 취업 알선 수수료 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '알선이 실패한 것뿐 아닌가요?',
        answer:
          '<strong>취업 의사·능력 없이 일자리가 확정된 것처럼 속였는지가 핵심인 영역입니다.</strong> 일자리 안내·수수료 요구 대화를 확보하세요.',
      },
      {
        question: '수수료를 먼저 내라는 게 정상인가요?',
        answer:
          '<strong>일자리 확정을 미끼로 한 선납 수수료 요구는 기망을 의심할 단서인 영역입니다.</strong> 요구 명목과 경위를 정리하세요.',
      },
      {
        question: '일자리가 실제로 있는지 어떻게 확인하나요?',
        answer:
          '<strong>현지 회사·구인 실체가 없거나 확인되지 않는지가 단서인 영역입니다.</strong> 안내된 회사·연락처의 실재 여부를 정리하세요.',
      },
      {
        question: '추가로 넣은 비용도 피해액인가요?',
        answer:
          '<strong>수수료와 추가 비용 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '방금 송금했는데 어떻게 하나요?',
        answer:
          '<strong>112·은행 지급정지로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속한 지급정지 요청이 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '해외 취업 중개 수수료 잠적 추적', href: '/guide/fraud/fraud-overseas-job-recruitment-broker-fee-vanish-track' },
      { label: '해외 취업 비자 비용 추적', href: '/guide/fraud/fraud-overseas-job-recruitment-visa-fee-track' },
      { label: '가짜 채용 교육비 선납 추적', href: '/guide/fraud/fraud-fake-job-offer-training-fee-prepayment-track' },
      { label: '취업 알선 선수수료 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
    ],
  },

  // ─── 3. fraud-nft-project-rugpull-investment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-nft-project-rugpull-investment-track',
    keyword: 'NFT 프로젝트 러그풀 투자 기망 사기',
    questionKeyword: 'NFT 프로젝트·민팅에 ‘로드맵대로 게임·커뮤니티가 출시되면 가치가 크게 오른다, 개발팀이 끝까지 책임진다’는 홍보를 믿고, 민팅 비용과 추가 투자금을 코인으로 입금했어요. 그런데 민팅이 끝나자 약속한 로드맵은 이행되지 않고, 공식 채널·SNS가 갑자기 폐쇄되며 운영진이 모금한 자금을 들고 잠적하는 이른바 러그풀이 일어났어요. 알고 보니 처음부터 개발 의사 없이 투자만 받아 챙긴 정황이고 같은 방식의 피해자가 다수인데, 이런 NFT 프로젝트 러그풀 투자 기망을 사기로 신고하고 투자금을 돌려받을 수 있나요?',
    ctaKeyword: 'NFT 프로젝트 러그풀 투자 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'NFT 러그풀 투자 기망 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '로드맵을 약속하며 받은 NFT 민팅·투자금만 챙기고 채널을 닫고 잠적하는 러그풀을 당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「NFT 프로젝트·민팅·커뮤니티 코인에 ‘로드맵대로 게임·메타버스·유틸리티가 차례로 출시되면 NFT 가치가 크게 오른다, 개발팀이 신원도 공개돼 있고 끝까지 책임진다, 지금 민팅에 참여하지 않으면 기회를 놓친다’는 홍보를 믿고, 좋은 프로젝트를 선점한다는 생각에 민팅 비용과 추가 투자금을 코인으로 입금한 분의 상황입니다. 그런데 막상 민팅이 끝나고 모금이 어느 정도 채워지자, 약속한 로드맵은 차일피일 미뤄지거나 이행되지 않고, 어느 순간 공식 디스코드·트위터·홈페이지가 갑자기 폐쇄되며 운영진이 모은 자금을 들고 사라지는 이른바 ‘러그풀’이 일어나, 손에 남은 건 가치가 폭락한 NFT뿐이라 막막하실 거예요. 알고 보니 처음부터 개발·운영 의사 없이 투자만 받아 챙긴 정황이고, 같은 방식으로 다수의 투자자가 함께 당했다면 단순 사업 실패가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 로드맵을 이행할 의사·능력 없이 실현될 것처럼 속여 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되었거나 전체 재산상 손해가 없더라도 성립에 영향이 없으며, 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, NFT가 일부 발행됐더라도 투자금 전부를 기준으로 편취 여부와 손해를 가려 다툴 여지가 있습니다. 로드맵 이행 가장 + 모금·투자 유도 + 채널 폐쇄·잠적 결합은 ‘NFT 러그풀 투자 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·투자 정리 ② 로드맵·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. NFT 프로젝트 러그풀 투자 기망 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·로드맵·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·투자 정리</strong> — 프로젝트 홍보·로드맵·민팅·추가 투자 입금 내역 정리.</li>\n<li><strong>② 로드맵·기망</strong> — 로드맵 이행 의사·능력 없이 실현될 것처럼 속였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — NFT가 발행됐어도 투자금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금·이체 계좌 지급정지·지갑 추적·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 사업 실패와 달리, 로드맵을 이행할 의사·능력 없이 실현될 것처럼 속여 모금만 받고 채널을 닫고 잠적했는지가 판단의 분기점입니다. 로드맵·홍보 게시물과 채널 폐쇄·자금 이동 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·투자 자료 보존 (즉시)</strong> — 프로젝트 홍보·로드맵·민팅·투자 입금·지갑 트랜잭션을 캡처 보존.</li>\n<li><strong>2단계 — 러그풀 정황 입증 (즉시)</strong> — 채널 폐쇄·운영진 잠적·모금 자금 이동·다중 피해를 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·추적 요청 (병행)</strong> — 원화 송금 계좌가 있으면 지급정지를, 지갑 주소는 거래소·수사기관에 추적 협조를 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">NFT 프로젝트 러그풀 투자 기망 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·로드맵·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>프로젝트 홍보·로드맵·백서 캡처 (거래 조건)</strong></li>\n<li><strong>민팅·투자 권유·책임 약속 대화 (기망 정황)</strong></li>\n<li><strong>민팅·투자 입금·지갑 트랜잭션 내역 (피해 금액)</strong></li>\n<li><strong>채널 폐쇄·운영진 잠적 정황 기록</strong></li>\n<li><strong>모금 자금 이동·지갑 추적 자료</strong></li>\n<li><strong>운영진·계정·연락처·계좌·지갑 주소 정보</strong></li>\n<li><strong>다른 피해자·커뮤니티 단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 디스코드·트위터·홈페이지는 운영진이 한순간에 폐쇄하므로 로드맵·홍보 게시물과 투자 권유 대화를 곧바로 캡처해두는 것이 중요합니다. 민팅·투자 지갑 트랜잭션 해시와 모금 자금이 옮겨간 지갑 주소를 정리하면 자금 추적과 편취를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>로드맵·기망</strong> — 이행 의사·능력 없이 실현될 것처럼 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 사업 실패인지 처음부터 편취였는지.</li>\n<li><strong>러그풀 정황</strong> — 채널 폐쇄·모금 자금 이동·잠적이 있었는지.</li>\n<li><strong>편취액</strong> — NFT가 발행됐어도 투자금 전부가 피해액인지.</li>\n<li><strong>운영진 특정</strong> — 계정·계좌·지갑 주소로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (가상자산·투자사기 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 금원 편취 사기죄의 성립과 편취액',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 바로 사기죄가 성립하고, 상당한 대가가 지급되었거나 피해자의 전체 재산상에 손해가 없더라도 사기죄 성립에는 영향이 없다고 보았습니다. 그 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 교부받은 금원에서 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 또 부실 재무제표 제출 등 기망행위와 자금 제공 결정 사이의 인과관계를 판단할 때 고려해야 할 사항도 함께 밝혔습니다. 로드맵을 약속하고 투자금을 받은 사안을 살펴볼 때에도, NFT가 일부 발행됐더라도 투자금 전부를 기준으로 편취 여부와 손해를 검토해볼 수 있습니다.',
        takeaway: '로드맵 이행 가장 + 모금·투자 유도 + 채널 폐쇄·잠적 결합 시 NFT 러그풀 투자 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 프로젝트가 실패한 것 아닌가요?',
        answer:
          '<strong>로드맵 이행 의사·능력 없이 실현될 것처럼 속였는지가 핵심인 영역입니다.</strong> 로드맵·홍보 게시물과 투자 권유 대화를 확보하세요.',
      },
      {
        question: '러그풀이라는 걸 어떻게 증명하나요?',
        answer:
          '<strong>채널 폐쇄·운영진 잠적·모금 자금 이동이 핵심 단서인 영역입니다.</strong> 폐쇄 정황과 지갑 자금 이동 내역을 정리하세요.',
      },
      {
        question: 'NFT를 받긴 했는데도 피해인가요?',
        answer:
          '<strong>NFT가 발행됐어도 투자금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 민팅·투자 입금 총액을 정리하세요.',
      },
      {
        question: '코인으로 보냈는데 추적이 되나요?',
        answer:
          '<strong>지갑 트랜잭션 해시로 자금 흐름을 추적해볼 수 있는 영역입니다.</strong> 거래소·수사기관에 추적 협조를 요청하세요.',
      },
      {
        question: '같은 방식으로 여러 명이 당했어요.',
        answer:
          '<strong>다중 피해 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 커뮤니티 피해자와 모금 정황을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: 'NFT 디지털 자산 투자 추적', href: '/guide/fraud/fraud-nft-digital-asset-investment-track' },
      { label: 'NFT 게임아이템 러그풀 잠적 추적', href: '/guide/fraud/fraud-nft-game-item-rugpull-developer-flee-track' },
      { label: 'NFT 발행사 잠적 러그풀', href: '/guide/fraud/fraud-nft-issuer-vanish-rugpull' },
      { label: '코인 투자사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
    ],
  },

  // ─── 4. fraud-used-machinery-defect-concealment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-machinery-defect-concealment-track',
    keyword: '중고 기계 하자 은폐 매매 사기',
    questionKeyword: '중고 기계·장비를 매매하면서 ‘정상 작동하고 큰 고장도 없다, 바로 쓸 수 있다’는 말을 믿고 시세에 맞춰 대금을 입금하고 인수했어요. 그런데 설치·시운전을 해보니 핵심 부품에 중대한 결함이 있거나 사고·수리 이력이 숨겨져 있어 정상 사용이 불가능했고, 알고 보니 판매자가 그 하자를 알면서도 고지하지 않고 정상인 것처럼 판 정황이었어요. 판매자에게 따지니 ‘몰랐다, 원래 중고는 그렇다’며 환불을 거부하는데, 이런 중고 기계 하자 은폐 매매를 사기로 신고하고 입금한 돈을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '중고 기계 하자 은폐 매매 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 기계 하자 은폐 매매 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '정상 작동한다는 말을 믿고 산 중고 기계에 숨겨진 중대한 하자가 드러나고 환불도 거부당했다면, 형법 제347조 고지의무 위반 사기 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「공장·작업장에서 쓸 중고 기계·장비·설비를 매매하면서 ‘정상적으로 작동하고 큰 고장도 없다, 점검도 다 해뒀으니 설치만 하면 바로 쓸 수 있다’는 판매자의 자신 있는 설명을 믿고, 시세에 맞춰 적지 않은 대금을 입금한 뒤 기계를 인수한 분의 상황입니다. 그런데 막상 설치하고 시운전을 해보니, 핵심 부품에 중대한 결함이 있거나 과거 사고·침수·대수리 이력이 숨겨져 있어 정상 가동이 되지 않고, 수리비가 기계 값에 맞먹을 정도로 들어가는 상황이 드러나, 알고 보니 판매자가 그 하자를 충분히 알면서도 고지하지 않고 멀쩡한 기계인 것처럼 판 정황이라 막막하실 거예요. 판매자에게 이를 따지니 ‘나도 몰랐다, 원래 중고는 그런 거다, 보고 샀으니 책임 없다’며 발뺌하고 환불을 거부해, 사업에 쓰려고 큰돈을 들인 만큼 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 사기죄의 기망에는 적극적 거짓말뿐 아니라, 거래상 신의칙상 고지의무가 있는 사실을 알면서도 숨겨 상대방을 착오에 빠뜨리는 부작위에 의한 기망도 포함되는 영역입니다. 판례는 거래의 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되는 경우 그 사정을 고지할 신의칙상 의무가 있고, 이를 묵비해 상대방을 기망하면 사기죄를 구성하며, 사기죄는 현실적 재산상 손해 발생을 요건으로 하지 않는다고 본 사례 흐름이 있는 영역으로, 하자를 알면서 숨겼는지를 가려 다툴 여지가 있습니다. 중대 하자 인식 + 고지의무 위반 은폐 + 환불 거부 결합은 ‘하자 은폐 매매 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 하자·고지의무 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 기계 하자 은폐 매매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·하자 은폐·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 매물 설명·정상 작동 고지·계약서·대금 입금 내역 정리.</li>\n<li><strong>② 하자·고지의무</strong> — 중대한 하자를 알면서 고지하지 않고 정상으로 속였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 매매대금·수리비 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기(부작위 기망 포함) 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 해제·대금 반환·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 중고 하자와 달리, 판매자가 중대한 하자·수리 이력을 알면서도 고지하지 않고 정상인 것처럼 팔았는지가 판단의 분기점입니다. 하자 진단 결과와 정상 작동을 강조한 판매자의 설명을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 매물 설명·정상 작동 고지 대화·계약서·대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 하자·은폐 입증 (즉시)</strong> — 정비·진단 결과로 중대한 결함·사고·수리 이력과 그 인식 정황을 확보.</li>\n<li><strong>3단계 — 해제·반환 요구 (병행)</strong> — 계약 해제와 매매대금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 기계 하자 은폐 매매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·하자·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>매물 광고·정상 작동 설명 캡처 (거래 조건)</strong></li>\n<li><strong>매매계약서·인수 확인서 (계약 내용)</strong></li>\n<li><strong>매매대금·수리비 입금·견적 내역 (피해 금액)</strong></li>\n<li><strong>정비·진단 결과·하자 사진·영상</strong></li>\n<li><strong>사고·수리·침수 이력 등 은폐 정황 자료</strong></li>\n<li><strong>판매자·상호·사업자·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정비소·전문가의 진단 결과로 하자가 거래 전부터 존재한 것임을 보여주고, 판매자가 정상 작동을 강조한 설명과 대비하면 고지의무 위반을 다투는 데 도움이 됩니다. 인수 직후 곧바로 하자 상태를 사진·영상으로 남겨 시점을 특정해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>하자·고지의무</strong> — 중대한 하자를 알면서 고지하지 않았는지.</li>\n<li><strong>부작위 기망</strong> — 알았다면 거래하지 않았을 사정을 묵비했는지.</li>\n<li><strong>판매자 인식</strong> — 매입·사용 경위로 하자를 알았는지.</li>\n<li><strong>편취액</strong> — 교부한 대금과 수리비가 손해로 평가되는지.</li>\n<li><strong>판매자 특정</strong> — 상호·사업자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고 거래·제품 하자 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위에 의한 기망과 고지의무',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 기망은 거래관계에서 지켜야 할 신의와 성실의 의무를 저버리는 모든 적극적·소극적 행위를 말하며, 반드시 법률행위의 중요 부분에 관한 허위표시일 필요는 없다고 보았습니다. 거래 상대방이 일정한 사정을 고지받았더라면 그 거래에 임하지 않았을 관계가 인정되는 경우에는 신의성실의 원칙상 그 사정을 고지할 의무가 있고, 이를 고지하지 않고 묵비한 것은 상대방을 기망한 것이 되어 사기죄를 구성한다고 판시했습니다. 또 사기죄는 재물·재산상 이익의 취득에 본질이 있고 상대방에게 현실적 재산상 손해가 발생함을 요건으로 하지 않는다고 보았습니다. 중대한 하자를 숨기고 기계를 판 사안을 살펴볼 때에도, 하자를 알면서 고지하지 않았는지를 기준으로 부작위 기망을 검토해볼 수 있습니다.',
        takeaway: '중대 하자 인식 + 고지의무 위반 은폐 + 환불 거부 결합 시 하자 은폐 매매 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '원래 중고라 하자가 있는 것 아닌가요?',
        answer:
          '<strong>중대한 하자를 알면서 고지하지 않고 정상으로 속였는지가 핵심인 영역입니다.</strong> 정상 작동 설명과 진단 결과를 확보하세요.',
      },
      {
        question: '보고 샀는데도 사기가 되나요?',
        answer:
          '<strong>외관으로 알기 어려운 하자를 묵비했다면 부작위 기망을 다투는 영역입니다.</strong> 숨겨진 결함·이력 정황을 정리하세요.',
      },
      {
        question: '판매자가 몰랐다고 발뺌해요.',
        answer:
          '<strong>매입·사용 경위로 인식 여부를 다투는 영역입니다.</strong> 수리·사고 이력과 매입 정황을 모으세요.',
      },
      {
        question: '수리비까지 들었는데 피해액인가요?',
        answer:
          '<strong>교부한 대금과 수리비가 손해로 평가될 수 있는 영역입니다.</strong> 매매대금과 수리 견적·내역을 정리하세요.',
      },
      {
        question: '환불을 거부해요.',
        answer:
          '<strong>계약 해제·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 환불 요청·거부 대화를 보관하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/guide/fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고 농기계 미인도 추적', href: '/guide/fraud/fraud-used-tractor-farm-machinery-no-delivery-track' },
      { label: '중고 전자제품 하자 은폐 추적', href: '/guide/fraud/fraud-second-hand-electronics-fake-defect-track' },
      { label: '중고차 침수 이력 은폐 추적', href: '/guide/fraud/fraud-used-car-flood-accident-history-conceal-track' },
      { label: '반려동물 질병 은폐 판매 추적', href: '/guide/fraud/fraud-pet-shop-sick-puppy-disease-concealment-track' },
    ],
  },

  // ─── 5. fraud-wedding-hall-package-false-estimate-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-hall-package-false-estimate-track',
    keyword: '예식장 패키지 허위 견적 기망 사기',
    questionKeyword: '예식장·웨딩 패키지를 계약하면서 ‘이 금액이면 식장·스드메·식대까지 다 포함이고 추가금은 거의 없다’는 견적을 믿고 계약금을 입금했어요. 그런데 막상 진행하니 ‘그건 최소 견적이라 옵션·인원·꽃·보증 인원이 늘면 별도다’라며 처음 설명과 전혀 다른 추가금을 계속 청구했고, 알고 보니 실제로는 불가능한 조건을 미끼로 일단 계약부터 잡은 허위 견적이었어요. 이미 낸 계약금은 위약금으로 묶고 추가금을 강요하는데, 이런 예식장 허위 견적 기망을 사기로 신고하고 부당하게 청구·편취된 돈을 돌려받을 수 있나요?',
    ctaKeyword: '예식장 패키지 허위 견적 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '예식장 허위 견적 기망 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '추가금이 거의 없다는 견적을 믿고 계약했는데 처음과 다른 추가금만 청구당하고 계약금도 묶였다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「결혼을 준비하며 예식장·웨딩홀 패키지를 계약할 때 ‘이 금액이면 식장 대관·스드메·식대·꽃까지 다 포함이라 추가금이 거의 없다, 지금 계약하면 이 조건이 보장된다’는 상담실장의 견적 설명을 믿고, 좋은 날짜를 잡아야 한다는 마음에 적지 않은 계약금을 입금한 분의 상황입니다. 그런데 막상 본 준비에 들어가니 ‘처음 견적은 최소 기준이라 옵션·드레스 업그레이드·꽃 장식·보증 인원이 조금만 늘어도 전부 별도다’라며 처음 설명과 전혀 다른 추가금을 줄줄이 청구하고, 알고 보니 그 최소 견적은 실제로는 적용이 불가능한 조건을 미끼로 일단 계약부터 잡으려 한 허위 견적이라, 결국 처음 안내받은 금액보다 훨씬 많은 돈을 내야 할 처지가 되어 막막하실 거예요. 이미 낸 계약금은 위약금으로 묶어두고 추가금 결제를 압박해, 인생에 한 번뿐인 행사라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실제로는 적용이 불가능한 조건을 가능한 것처럼 견적을 꾸며 계약금·추가금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사람을 기망해 대금을 받아 편취한 행위가 사기죄를 구성하는 경우, 그 기망이 다른 범죄의 수단으로 이루어졌더라도 사기죄는 보호법익·구성요건이 다른 별개의 범죄로 성립할 수 있다고 본 사례 흐름이 있는 영역으로, 허위 견적으로 받은 금원에 대해 편취 여부를 가려 다툴 여지가 있습니다. 허위 최소 견적 + 추가금 강요 + 계약금 묶기 결합은 ‘예식장 허위 견적 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 허위 견적·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 예식장 패키지 허위 견적 기망 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·허위 견적·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 최초 견적 설명·계약서·계약금·추가금 청구 내역 정리.</li>\n<li><strong>② 허위 견적·기망</strong> — 적용 불가능한 조건을 가능한 것처럼 견적을 꾸몄는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 계약금·부당 추가금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 해제·계약금 반환·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 옵션 추가와 달리, 처음부터 적용 불가능한 최소 견적을 미끼로 계약을 유도하고 처음 설명과 다른 추가금을 받았는지가 판단의 분기점입니다. 최초 견적 설명과 실제 청구된 추가금 내역을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 최초 견적서·상담 대화·계약서·계약금·추가금 청구 내역 캡처 보존.</li>\n<li><strong>2단계 — 허위 견적 입증 (즉시)</strong> — 처음 설명과 실제 적용 조건·추가금의 차이를 항목별로 대비해 확보.</li>\n<li><strong>3단계 — 해제·반환 요구 (병행)</strong> — 계약 해제와 계약금·부당 추가금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 한국소비자원 피해구제·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">예식장 패키지 허위 견적 기망 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·허위 견적·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>최초 견적서·패키지 안내 캡처 (거래 조건)</strong></li>\n<li><strong>추가금 거의 없다는 상담 대화 (기망 정황)</strong></li>\n<li><strong>계약서·약관·위약금 조항 (계약 내용)</strong></li>\n<li><strong>계약금·추가금 청구·결제 내역 (피해 금액)</strong></li>\n<li><strong>처음 설명과 다른 별도 청구 항목 비교 자료</strong></li>\n<li><strong>예식장·상담실장·상호·계좌 정보</strong></li>\n<li><strong>해제·반환 요구·거부 대화 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약 전 들은 ‘추가금 거의 없다’는 설명과 실제 청구된 추가금 항목을 표로 대비하면 허위 견적 기망을 다투는 데 도움이 됩니다. 상담 단계의 견적서·문자·녹취가 처음 조건을 입증하는 핵심 자료이니 빠짐없이 보관해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위 견적·기망</strong> — 적용 불가능한 조건을 가능한 것처럼 견적을 꾸몄는지.</li>\n<li><strong>편취 범의</strong> — 단순 옵션 추가인지 처음부터 편취였는지.</li>\n<li><strong>위약금 묶기</strong> — 계약금을 위약금으로 묶어 추가금을 강요했는지.</li>\n<li><strong>편취액</strong> — 계약금·부당 추가금이 손해로 평가되는지.</li>\n<li><strong>업체 특정</strong> — 예식장·상호·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (예식·웨딩 서비스 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (결제 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 편취와 별개 범죄의 성립',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 피고인이 위탁기관을 기망해 대금 등을 교부받아 편취한 행위와 위계로써 업무를 방해한 행위가 보호법익·구성요건적 행위의 양태·기수 시기 등이 서로 다른 별개의 범죄로 성립한다고 보았습니다. 어느 한 죄의 불법과 책임이 다른 죄의 불법과 책임을 모두 포함하지 않으므로, 사기죄가 성립하는 경우에도 위계에 의한 업무방해죄가 불가벌적 수반행위로 흡수되지 않고 별도로 성립하며 실체적 경합관계에 있다고 판시했습니다. 허위 견적으로 계약금·추가금을 받은 사안을 살펴볼 때에도, 기망으로 금원을 교부받았다면 그 편취 부분을 독립적으로 가려 검토해볼 수 있습니다.',
        takeaway: '허위 최소 견적 + 추가금 강요 + 계약금 묶기 결합 시 예식장 허위 견적 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '옵션이 추가된 것뿐 아닌가요?',
        answer:
          '<strong>적용 불가능한 최소 견적을 미끼로 계약을 유도했는지가 핵심인 영역입니다.</strong> 최초 견적 설명과 추가금 내역을 대비하세요.',
      },
      {
        question: '추가금이 거의 없다고 들었어요.',
        answer:
          '<strong>처음 설명과 실제 청구의 차이가 기망을 다투는 단서인 영역입니다.</strong> 상담 견적서·문자·녹취를 확보하세요.',
      },
      {
        question: '계약금을 위약금으로 묶어버렸어요.',
        answer:
          '<strong>부당한 위약금 묶기·추가금 강요는 편취 정황의 단서인 영역입니다.</strong> 위약금 조항과 압박 정황을 정리하세요.',
      },
      {
        question: '낸 돈을 돌려받을 수 있나요?',
        answer:
          '<strong>계약금·부당 추가금이 손해로 평가될 수 있는 영역입니다.</strong> 결제·청구 내역 전부를 정리하세요.',
      },
      {
        question: '어디에 도움을 청해야 하나요?',
        answer:
          '<strong>소비자원 피해구제·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 한국소비자원 1372 상담을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/guide/fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '예식장 선결제 취소 환불 거부 추적', href: '/guide/fraud/fraud-wedding-hall-prepaid-cancellation-no-refund-track' },
      { label: '예식장 선결제 갑작 폐업 추적', href: '/guide/fraud/fraud-wedding-hall-prepayment-sudden-closure-track' },
      { label: '성형 패키지 선결제 폐업 추적', href: '/guide/fraud/fraud-cosmetic-surgery-package-prepay-closure-track' },
      { label: '웨딩 스냅 스튜디오 선결제 폐업 추적', href: '/guide/fraud/fraud-wedding-snap-studio-prepay-closure-track' },
    ],
  },

  // ─── 6. fraud-joint-business-seed-money-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-joint-business-seed-money-falsely-accused-defense',
    keyword: '동업 사업자금 편취 사기 무고 방어',
    questionKeyword: '지인과 동업으로 사업을 시작하며 사업자금을 함께 모아 운영해 왔는데, 사업이 잘 안 되어 손실이 나고 자금이 줄자 동업자가 ‘처음부터 내 돈을 빼돌릴 생각으로 동업을 제안했다, 사업자금을 편취했다’며 저를 사기로 고소했어요. 저는 분명히 함께 사업을 하려고 자금을 모아 정상적으로 운영했고 일부는 실제 사업에 썼는데, 단지 사업 실패와 정산 분쟁을 사기로 몰아 한순간에 사기범 취급을 받아 너무 억울해요. 이렇게 동업 사업자금 문제가 사기로 고소된 상황에서 어떻게 방어해야 하나요?',
    ctaKeyword: '동업 사업자금 편취 사기 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동업 사업자금 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드',
      description:
        '동업으로 함께 모은 사업자금이 사업 실패로 줄었을 뿐인데 처음부터 편취했다며 사기로 고소돼 억울하다면, 편취 고의 판단과 무고 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·동료와 동업으로 사업을 시작하면서 사업자금을 함께 출자·모아 가게나 사업체를 운영해 오던 중, 매출이 기대에 못 미치고 손실이 누적되며 자금이 줄어들자, 동업자가 ‘처음부터 내 돈을 빼돌릴 생각으로 동업을 제안한 것이다, 사업자금을 편취했다’며 형사 고소를 해, 한순간에 사기범으로 몰린 분의 상황입니다. 저는 분명히 함께 사업을 하려는 의사로 자금을 모아 임대료·재료비·운영비 등 실제 사업에 사용하며 정상적으로 운영했는데도, 단지 사업 실패와 정산을 둘러싼 분쟁이 사기로 비화되어 너무 억울하고 막막하실 거예요. 한때 믿고 함께 시작한 사이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 동업으로 자금을 모은 경위와 그 돈이 실제 사업에 쓰였는지, 손실이 사업 자체의 실패에서 비롯된 것인지를 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 기망행위와 함께 불법영득의 의사 내지 편취의 고의가 있어야 하는 영역입니다. 판례는 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방이 착오에 빠져 있음을 알면서도 일정한 사실을 고지하지 않는 것을 말하고, 동업·거래에서 충분한 담보를 제공하는 등 객관적 사정이 있으면 변제·이행 의사와 능력을 인정할 여지가 있다고 보아, 단순한 사업 실패·정산 분쟁과 처음부터의 편취를 신중히 가린 사례 흐름이 있는 영역입니다. 또 형사피고인은 유죄 확정 전까지 무죄로 추정되고 범죄사실 인정은 합리적 의심이 없는 정도의 증명을 요하는 영역으로, 동업 의사와 자금 사용 실태를 가려 다툴 여지가 있습니다. 동업 의사 있는 출자 + 실제 사업 사용 + 사업 실패 손실 결합은 ‘편취 고의 부재·정산 분쟁’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 동업·출자 정리 ② 자금 사용 실태 ③ 손실 원인 ④ 편취 고의 부재 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동업 사업자금 편취 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동업·자금 사용·손실 원인·고의·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동업·출자 정리</strong> — 동업 약정·출자 경위·자금 모은 내역 정리.</li>\n<li><strong>② 자금 사용 실태</strong> — 모은 자금이 임대료·재료비 등 실제 사업에 쓰였는지 검토.</li>\n<li><strong>③ 손실 원인</strong> — 손실이 사업 자체의 실패에서 비롯됐는지 정리.</li>\n<li><strong>④ 편취 고의 부재</strong> — 처음부터 빼돌릴 의도가 없었음을 뒷받침할 정황 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 사업 실패·정산 분쟁과 달리, 처음부터 동업을 가장해 자금을 빼돌릴 의도가 있었는지가 판단의 분기점입니다. 동업 약정·정상 운영 이력과 자금이 사업에 실제 쓰인 정황을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동업·자금 자료 보존 (즉시)</strong> — 동업 약정서·출자 내역·사업자등록·운영 장부를 보존.</li>\n<li><strong>2단계 — 자금 사용 정리 (즉시)</strong> — 임대료·재료비·운영비 등 자금이 실제 사업에 쓰인 내역을 구체적으로 정리.</li>\n<li><strong>3단계 — 손실 원인 정리 (병행)</strong> — 매출 부진·시장 상황 등 손실 원인과 정산 경위를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">동업 사업자금 편취 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 동업·자금 사용·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>동업 약정서·출자 내역·지분 약정 (동업 관계)</strong></li>\n<li><strong>사업자등록·임대차계약·운영 장부 (사업 실체)</strong></li>\n<li><strong>임대료·재료비·운영비 지출 내역 (자금 사용)</strong></li>\n<li><strong>매출·손익 자료·손실 원인 정리 (사업 실패)</strong></li>\n<li><strong>정산·청산 협의·대화 기록 (정산 분쟁)</strong></li>\n<li><strong>동업자와의 전후 대화·합의 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출자받은 자금이 임대료·재료비·운영비 등 실제 사업에 쓰였음을 장부·계좌 이체로 보여주고, 손실이 사업 부진에서 비롯됐음을 매출·손익 자료로 정리하면 처음부터의 편취가 아니라 정산 분쟁임을 다투는 데 도움이 됩니다. 동업 약정과 지분·정산 협의 기록도 함께 모아두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 처음부터 동업을 가장해 자금을 빼돌릴 의도였는지.</li>\n<li><strong>정산 분쟁 구별</strong> — 단순 사업 실패·정산 다툼인지 편취였는지.</li>\n<li><strong>자금 사용처</strong> — 출자금이 실제 사업에 쓰였는지.</li>\n<li><strong>손실 원인</strong> — 손실이 사업 부진에서 비롯됐는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심이 남으면 피고인의 이익으로 보는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망·담보 제공과 편취 범의',
        summary:
          '대법원 2005도8645(대법원, 2006.02.23 선고) 영역에서 법원은 사기죄의 기망 중 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방이 착오에 빠져 있음을 알면서도 일정한 사실을 고지하지 않는 것을 말하고, 일반거래 경험칙상 상대방이 그 사실을 알았더라면 법률행위를 하지 않았을 것이 명백한 경우 신의칙상 고지의무가 인정된다고 보았습니다. 또 타인으로부터 돈을 차용하면서 충분한 담보를 제공했다면 특별한 사정이 없는 한 변제 의사와 능력이 없었다고 볼 수 없으나, 담보가치 평가에 중요한 사항을 알리지 않은 사정이 있으면 충분한 담보로 볼 수 없어 편취 범의가 인정될 수 있다고 판시했습니다. 동업 자금을 둘러싼 사안을 살펴볼 때에도, 동업 의사·자금 사용 실태와 객관적 사정을 종합해 편취 범의 인정 여부를 검토해볼 수 있습니다.',
        takeaway: '동업 의사 있는 출자 + 실제 사업 사용 + 사업 실패 손실 결합 시 편취 고의 부재·정산 분쟁 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '사업이 실패한 것뿐인데 사기가 되나요?',
        answer:
          '<strong>처음부터 동업을 가장해 자금을 빼돌릴 의도였는지가 핵심인 영역입니다.</strong> 동업 약정·정상 운영 이력을 정리하세요.',
      },
      {
        question: '자금을 실제 사업에 썼는데 도움이 되나요?',
        answer:
          '<strong>자금이 임대료·재료비 등 사업에 쓰인 정황은 편취 고의를 다투는 단서인 영역입니다.</strong> 장부·지출 내역을 정리하세요.',
      },
      {
        question: '손실이 난 건 어떻게 보이죠?',
        answer:
          '<strong>손실이 사업 부진에서 비롯됐음을 다투는 영역입니다.</strong> 매출·손익 자료로 손실 원인을 정리하세요.',
      },
      {
        question: '정산 분쟁인데 사기로 몰려요.',
        answer:
          '<strong>단순 정산·청산 분쟁과 편취를 구별해 다투는 영역입니다.</strong> 정산 협의·지분 약정 기록을 모으세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>동업 경위·자금 사용에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '동업 자금 유용 무고 방어', href: '/guide/fraud/fraud-joint-business-fund-misappropriation-falsely-accused-defense' },
      { label: '동업 수익 분배 빙자 무고 방어', href: '/guide/fraud/fraud-joint-business-profit-distribution-pretext-falsely-accused-defense' },
      { label: '동업 자본 손실 무고 방어', href: '/guide/fraud/fraud-business-partner-capital-loss-falsely-accused-defense' },
      { label: '사업 정산 무고 방어', href: '/guide/fraud/fraud-business-settlement-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-pilates-instructor-posture-correction-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-pilates-instructor-posture-correction-touch-report-track',
    keyword: '필라테스 강사 자세교정 빙자 추행 신고',
    questionKeyword: '필라테스·요가 수업에서 강사가 ‘자세를 교정해준다, 호흡을 잡아준다, 코어에 힘 들어가는 걸 확인한다’며 허리·골반·엉덩이·가슴 부근 등 민감한 부위에 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 교정인가 싶어 참았지만 갈수록 접촉이 노골적이고 특정 부위에 집중되며, 다른 회원에게도 비슷했다는 말을 들으니 단순 자세교정이 아니라 추행 같다는 생각이 들어요. 이런 필라테스 강사 자세교정 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하나요?',
    ctaKeyword: '필라테스 강사 자세교정 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '필라테스 자세교정 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '자세교정이라며 민감한 부위에 필요 이상으로 손을 대거나 밀착해 수치스러웠다면, 강제추행죄의 추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「필라테스·요가·PT 수업에서 강사에게 지도를 받던 중, 강사가 ‘자세를 교정해준다, 호흡을 잡아준다, 코어에 힘이 들어가는지 확인한다’는 명목으로 허리·골반·엉덩이·가슴 부근 등 민감한 부위에까지 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘운동은 원래 이렇게 자세를 잡아주나’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고 특정 부위에 집중되며, 1:1 수업이나 사람이 적은 시간대에 더 심해지고, 다른 회원에게도 비슷한 일이 있었다는 이야기까지 들으니, 단순한 자세교정이 아니라 교정을 빙자한 추행은 아닌지 의심되고, 신고해도 ‘운동 지도하다 닿은 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 건강을 위해 다닌 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 자세교정을 가장했더라도 운동 지도와 무관한 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 다만 판례는 공동체 내 구성원 사이의 신체접촉이 의례적·사회적으로 상당한 범주를 다소 벗어났더라도 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에까지 이르지 않은 경우에는 강제추행죄에 해당하지 않는다고 본 사례 흐름이 있는 영역으로, 접촉이 자세교정의 범주를 넘어 성적 자유를 침해하는지를 신중히 가려 다툴 여지가 있습니다. 자세교정 빙자 + 민감 부위 접촉 + 반복·노골 결합은 ‘자세교정 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 필라테스 강사 자세교정 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 수강 등록·수업 형태(1:1·그룹)·강사와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 운동과 무관한 민감 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 자세교정 범주를 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자연스러운 자세교정과 달리, 운동과 무관한 민감 부위를 만지거나 필요 이상 밀착해 교정의 범주를 넘어 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 회원의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 수업 형태·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 센터 CCTV·수업 예약·메시지·다른 회원의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">필라테스 강사 자세교정 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>수강 등록·수업 예약·결제 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>센터 CCTV·수업 일정 확보 요청 자료</strong></li>\n<li><strong>강사와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 회원의 유사 경험·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운동 센터 CCTV는 보관 기간이 짧아 빨리 지워질 수 있으니 보존을 요청하고 경찰에 신속히 알리는 것이 중요합니다. 접촉이 운동과 무관한 민감 부위에 집중됐는지, 1:1 수업·한산한 시간대에 반복됐는지를 구체적으로 기록하면 교정의 범주를 넘는 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 운동과 무관한 민감 부위 접촉·밀착인지.</li>\n<li><strong>교정 범주</strong> — 의례적·사회적으로 상당한 범위를 넘는지.</li>\n<li><strong>성적 자유 침해</strong> — 성적 자유를 침해하는 정도에 이르는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 신체접촉의 상당성',
        summary:
          '대법원 2023도10410(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 추행이 어떤 행위에 해당하는지 판단하는 기준을 밝히면서, 직장 등 공동체 내에서 구성원 사이에 발생한 신체접촉이 의례적·사회적으로 상당한 범주를 다소 벗어나 부적절한 성적 언동으로 받아들여질 여지가 있더라도, 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에까지 이르지 않은 경우에는 강제추행죄에 해당하지 않는다고 보았습니다. 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 자세교정을 빙자한 접촉 사안을 살펴볼 때에도, 접촉이 교정의 상당한 범주를 넘어 성적 자유를 침해하는지를 신중히 가려 추행 해당성을 검토해볼 수 있습니다.',
        takeaway: '자세교정 빙자 + 민감 부위 접촉 + 반복·노골 결합 시 자세교정 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '운동 지도하다 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>교정의 상당한 범주를 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 교정인 줄 알고 참았는데 신고할 수 있나요?',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 반복 정황과 시점을 정리하세요.',
      },
      {
        question: '1:1 수업이라 목격자가 없어요.',
        answer:
          '<strong>CCTV·예약 기록·메시지·유사 경험으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
      },
      {
        question: '다른 회원도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·목격은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 회원의 진술을 확보하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '헬스장 PT 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-pretext-touch-report-track' },
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '마사지샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-treatment-pretext-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-club-dancefloor-grope-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-dancefloor-grope-report-track',
    keyword: '클럽 댄스플로어 기습 추행 신고',
    questionKeyword: '클럽·라운지 댄스플로어에서 음악에 맞춰 춤을 추던 중, 모르는 사람이 사람이 붐비는 틈을 타 갑자기 등 뒤나 옆에서 몸을 밀착하고 엉덩이·허리·가슴 부근을 만지거나 더듬어 너무 불쾌하고 수치스러웠어요. 어둡고 시끄럽고 사람이 많은 공간이라 누가 그랬는지 순간적으로 특정하기 어려웠고 강하게 거부할 틈도 없었는데, 단순 부딪힘이 아니라 의도적인 추행 같다는 생각이 들어요. 이런 클럽 댄스플로어 기습 추행을 신고하려면 어떤 절차로 진행되는지, 어떤 자료를 모아 어떻게 대응해야 하나요?',
    ctaKeyword: '클럽 댄스플로어 기습 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '클럽 댄스플로어 기습 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '붐비는 댄스플로어에서 누군가 갑자기 몸을 만지고 더듬어 수치스러웠다면, 기습추행 신고 절차와 가해자 특정·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「클럽·라운지·페스티벌 댄스플로어에서 음악에 맞춰 춤을 추며 즐기던 중, 모르는 사람이 사람이 붐비는 틈을 타 갑자기 등 뒤나 옆에서 몸을 밀착해 오거나 엉덩이·허리·가슴 부근을 손으로 만지고 더듬어 너무 불쾌하고 수치스러웠던 분의 상황입니다. 조명이 어둡고 음악이 시끄럽고 사람이 빽빽한 공간이라 순간적으로 누가 그랬는지 특정하기 어려웠고, 처음에는 ‘붐벼서 닿은 건가’ 싶었지만 접촉이 반복되거나 노골적이어서 단순한 부딪힘이 아니라 의도적인 추행임이 분명한데, 강하게 항의하거나 곧바로 붙잡기도 어려운 상황에서 당하고 나니, 신고해도 ‘사람이 많아 닿은 것뿐’이라는 변명에 묻히거나 가해자를 못 잡을까 봐 막막하실 거예요. 즐기려고 간 자리에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 갑작스러운 신체 접촉처럼 폭행행위 자체가 곧 추행에 해당하는 이른바 기습추행이라면, 상대방의 항거를 곤란하게 할 정도의 폭행·협박이 아니더라도 의사에 반하는 유형력 행사가 있으면 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수하면, 폭행행위 자체가 추행행위로 인정되는 기습추행에서도 강제추행(미수 포함)이 성립할 수 있다고 본 사례 흐름이 있는 영역으로, 붐비는 공간의 갑작스러운 접촉이 우연한 부딪힘인지 의도적 추행인지를 가려 다툴 여지가 있습니다. 댄스플로어 기습 접촉 + 의사에 반하는 더듬기 + 밀집 공간 결합은 ‘클럽 기습 추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 댄스플로어 기습 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 입장·위치·동행자·접촉 순간의 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 갑작스러운 밀착·엉덩이·허리·가슴 부근 접촉 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 우연한 부딪힘인지 의사에 반하는 기습추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 가해자 특정·진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 붐벼서 닿은 것과 달리, 갑작스러운 밀착·더듬기가 의사에 반하는 유형력 행사로서 기습추행에 해당하는지가 판단의 분기점입니다. 접촉 부위·방식과 가해자 인상착의·CCTV 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보존·즉시 알림 (즉시)</strong> — 가능하면 현장에서 업소 직원·일행에게 알리고 가해자 인상착의·위치를 기록.</li>\n<li><strong>2단계 — CCTV·객관 자료 확보 (즉시)</strong> — 클럽 내·외부 CCTV·입장 기록·동행자 진술 보존을 요청.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 가해자 특정·진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 댄스플로어 기습 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/guide/sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>입장·위치·시간대·동행자 정리 (동선)</strong></li>\n<li><strong>접촉 부위·방식·직후 반응 기록 (행위 태양)</strong></li>\n<li><strong>클럽 내·외부 CCTV 보존 요청 자료</strong></li>\n<li><strong>가해자 인상착의·옷차림·특징 기록</strong></li>\n<li><strong>동행자·목격자 진술·연락처</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 클럽 CCTV는 보관 기간이 짧고 화면이 어두우니, 사건 직후 업소에 보존을 요청하고 경찰에 신속히 신고하는 것이 중요합니다. 가해자 인상착의·옷차림과 접촉 순간을 곧바로 메모하고 동행자에게 알린 기록을 남기면 가해자 특정과 진술 신빙성을 뒷받침하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 부딪힘인지 의사에 반하는 기습추행인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·인상착의·동행자 진술로 특정할 수 있는지.</li>\n<li><strong>밀집 공간</strong> — 붐비는 공간 변명에 가려지지 않는지.</li>\n<li><strong>객관 정황</strong> — CCTV·입장 기록·목격자가 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 직후 반응·진술의 일관성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 친고죄·고소기간 법리',
        summary:
          '대법원 2015도2390(대법원, 2018.06.28 선고) 영역에서 법원은 강제추행 등 성폭력범죄의 처벌과 관련해, 폭행행위 자체가 추행행위로 인정되는 기습추행을 포함한 추행의 성립과 함께, 친고죄였던 성폭력범죄의 고소기간 등 시행 전후 적용 법리를 정리했습니다. 또 등록대상 성범죄로 유죄판결이 확정되면 신상정보 제출의무가 법률 규정에 따라 당연히 발생한다고 보아, 추행의 성립과 그에 따른 법적 효과의 적용 기준을 밝혔습니다. 붐비는 댄스플로어에서 갑작스러운 접촉이 문제 된 사안을 살펴볼 때에도, 의사에 반하는 유형력 행사와 추행 해당성을 기준으로, 그리고 사건 시점에 따른 절차 법리를 함께 고려해 검토해볼 수 있습니다.',
        takeaway: '댄스플로어 기습 접촉 + 의사에 반하는 더듬기 + 밀집 공간 결합 시 클럽 기습 추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '붐벼서 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>의사에 반하는 밀착·더듬기인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 여부를 구체적으로 기록하세요.',
      },
      {
        question: '어둡고 사람이 많아 누군지 모르겠어요.',
        answer:
          '<strong>CCTV·인상착의·동행자 진술로 가해자를 특정해볼 수 있는 영역입니다.</strong> 인상착의를 곧바로 메모하세요.',
      },
      {
        question: '그 자리에서 못 잡았는데 신고할 수 있나요?',
        answer:
          '<strong>현장에서 못 잡았어도 사후 신고를 검토할 수 있는 영역입니다.</strong> CCTV 보존 요청과 직후 알림 기록을 남기세요.',
      },
      {
        question: 'CCTV가 어두워 잘 안 보이면요?',
        answer:
          '<strong>입장 기록·동행자 진술·직후 반응으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 확보하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '신고 절차와 보호 제도, AI로 확인하기', link: '/guide/sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '클럽 댄스플로어 낯선 사람 추행 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-stranger-groping-track' },
      { label: '클럽 댄스플로어 접촉 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-contact-track' },
      { label: '페스티벌 군중 추행 신고', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-report-track' },
      { label: '지하철 혼잡 시간 추행 신고', href: '/guide/sex-crime/sex-crime-subway-rush-hour-grope-report-track' },
    ],
  },

  // ─── 9. sex-crime-photo-studio-posing-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-photo-studio-posing-pretext-touch-report-track',
    keyword: '사진관 포즈 지도 빙자 추행 신고',
    questionKeyword: '사진관·스튜디오에서 프로필·바디·개인 촬영을 받던 중, 사진사가 ‘포즈를 잡아준다, 각도를 맞춘다, 옷매무새를 정리해준다’며 어깨·허리·골반·다리 등에 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 포즈 지도인가 싶어 참았지만 갈수록 접촉이 노골적이고 단둘이 있는 공간에서 더 심해지며, 다른 손님에게도 비슷했다는 말을 들으니 단순 지도가 아니라 추행 같다는 생각이 들어요. 이런 사진관 포즈 지도 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하나요?',
    ctaKeyword: '사진관 포즈 지도 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '사진관 포즈 지도 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '포즈를 잡아준다며 필요 이상으로 손을 대거나 밀착해 수치스러웠다면, 강제추행죄의 기습추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「사진관·스튜디오에서 프로필·바디 프로필·개인 촬영을 받던 중, 사진사가 ‘포즈를 잡아준다, 각도를 맞춰준다, 옷매무새·라인을 정리해준다’는 명목으로 어깨·허리·골반·다리 등에까지 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘촬영은 원래 이렇게 자세를 잡아주나’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고, 보조도 없이 사진사와 단둘이 있는 스튜디오에서 더 심해지며, 다른 손님에게도 비슷한 일이 있었다는 이야기까지 들으니, 단순한 포즈 지도가 아니라 지도를 빙자한 추행은 아닌지 의심되고, 신고해도 ‘촬영하다 닿은 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 좋은 사진을 남기려고 간 자리에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 포즈 지도를 가장했더라도 촬영과 무관한 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수하면, 폭행행위 자체가 추행행위로 인정되는 기습추행에서도 강제추행이 성립할 수 있다고 보면서, 추행 해당 여부는 피해자의 의사·연령, 행위자와의 관계, 경위, 구체적 행위 태양, 객관적 상황 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역으로, 접촉이 지도의 범주를 넘어 성적 자유를 침해하는지를 가려 다툴 여지가 있습니다. 포즈 지도 빙자 + 무관 부위 접촉 + 단둘 공간·반복 결합은 ‘포즈 지도 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사진관 포즈 지도 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 촬영 예약·촬영 형태·사진사와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 촬영과 무관한 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 포즈 지도 범주를 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자연스러운 포즈 지도와 달리, 촬영과 무관한 부위를 만지거나 필요 이상 밀착해 지도의 범주를 넘어 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 손님의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 촬영 형태·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 스튜디오 CCTV·예약·결제·메시지·다른 손님의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사진관 포즈 지도 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>촬영 예약·결제·계약 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>스튜디오 CCTV·촬영 일정 확보 요청 자료</strong></li>\n<li><strong>사진사와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 손님의 유사 경험·후기·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 스튜디오 CCTV는 보관 기간이 짧으니 보존을 요청하고 경찰에 신속히 알리는 것이 중요합니다. 접촉이 촬영과 무관한 부위에 집중됐는지, 보조 없이 단둘이 있는 상황에서 반복됐는지를 구체적으로 기록하면 지도의 범주를 넘는 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 촬영과 무관한 부위 접촉·밀착인지.</li>\n<li><strong>지도 범주</strong> — 포즈 지도의 상당한 범위를 넘는지.</li>\n<li><strong>기습추행</strong> — 갑작스러운 접촉이 의사에 반하는 유형력 행사인지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 추행의 판단 기준',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄의 폭행이 반드시 상대방의 의사를 억압할 정도일 필요는 없고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 성적 자유를 침해하는 행위를 말한다고 보았습니다. 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 하고, 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수하면 폭행행위 자체가 추행으로 인정되는 기습추행에서도 강제추행이 성립할 수 있다고 판시했습니다. 포즈 지도를 빙자한 접촉 사안을 살펴볼 때에도, 접촉이 지도의 범주를 넘어 성적 자유를 침해하는지를 신중히 가려 추행 해당성을 검토해볼 수 있습니다.',
        takeaway: '포즈 지도 빙자 + 무관 부위 접촉 + 단둘 공간·반복 결합 시 포즈 지도 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '촬영하다 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>지도의 상당한 범주를 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 포즈 지도인 줄 알고 참았어요.',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 반복 정황과 시점을 정리하세요.',
      },
      {
        question: '단둘이 있어서 목격자가 없어요.',
        answer:
          '<strong>CCTV·예약·결제·메시지·유사 경험으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
      },
      {
        question: '다른 손님도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·후기·목격은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 손님의 진술을 확보하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '사진관 포즈 지도 접촉 추적', href: '/guide/sex-crime/sex-crime-photo-studio-posing-touch-track' },
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '헬스장 PT 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-pretext-touch-report-track' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-crowded-bus-contact-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-crowded-bus-contact-falsely-accused-defense',
    keyword: '만원 버스 접촉 추행 무고 방어',
    questionKeyword: '출퇴근 시간 만원 버스에 빽빽하게 서서 가던 중, 버스가 흔들리고 사람이 밀리면서 옆이나 뒤에 있던 승객과 몸이 닿았을 뿐인데, 갑자기 한 승객이 ‘추행을 당했다’며 저를 지목하고 경찰에 신고했어요. 저는 추행할 의도가 전혀 없었고 혼잡한 차내에서 어쩔 수 없이 닿은 우연한 접촉이었는데, 한순간에 성범죄 가해자로 몰려 너무 억울하고 막막해요. 손잡이를 잡고 있었고 일부러 만진 적이 없는데, 이렇게 만원 버스 접촉이 추행으로 신고된 상황에서 어떻게 방어해야 하나요?',
    ctaKeyword: '만원 버스 접촉 추행 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '만원 버스 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '혼잡한 버스에서 흔들려 닿은 우연한 접촉인데 추행으로 신고돼 억울하다면, 추행 해당성·고의 판단과 무죄추정·진술 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출퇴근 시간 만원 버스·지하철에 빽빽하게 서서 가던 중, 버스가 급정거하거나 흔들리고 사람이 밀리면서 옆이나 뒤에 있던 승객과 몸이 닿았을 뿐인데, 갑자기 한 승객이 ‘추행을 당했다’며 저를 지목하고 경찰에 신고해, 한순간에 성범죄 가해자로 몰린 분의 상황입니다. 추행할 의도가 전혀 없었고 손잡이를 잡고 버티던 혼잡한 차내에서 어쩔 수 없이 닿은 우연한 접촉이었다고 생각하는데도, 직접 목격자가 없거나 상대 진술이 사실상 유일한 증거라 진술 다툼만 남을까 봐 너무 억울하고 막막하실 거예요. 평범하게 출근하던 길에 벌어진 일이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 접촉이 혼잡으로 인한 우연한 것이었는지와 추행의 고의가 없었다는 점을 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제298조 강제추행죄가 성립하려면 추행행위와 그에 대한 고의가 인정되어야 하는 영역입니다. 판례는 형사피고인은 유죄 확정 전까지 무죄로 추정되고, 범죄사실 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 다수가 통행하는 공개된 장소처럼 통상 추행이 이루어질 것으로 예상하기 곤란한 상황에서 직접증거로 피해자 진술이 사실상 유일한 경우, 그 진술이 합리적 의심을 배제할 만큼 신빙성이 있어야 유죄로 판단할 수 있다고 본 사례 흐름이 있는 영역입니다. 또 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로, 그 해당 여부는 피해자의 의사·연령, 행위자와의 관계, 경위, 구체적 행위 태양, 객관적 상황 등을 종합해 결정해야 하는 영역으로, 접촉의 우연성·고의 여부와 진술 신빙성을 가려 다툴 여지가 있습니다. 혼잡 차내 접촉 + 우연한 닿음 + 진술 중심 증거 결합은 ‘추행 해당성·고의 부재·진술 신빙성’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·동선 정리 ② 접촉 우연성 ③ 추행 해당성·고의 ④ 진술 신빙성 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 만원 버스 접촉 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 우연성·추행 해당성·진술 신빙성·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 탑승 시간·혼잡도·위치·손잡이 정황 정리.</li>\n<li><strong>② 접촉 우연성</strong> — 급정거·밀림 등 혼잡으로 인한 우연한 접촉인지 정리.</li>\n<li><strong>③ 추행 해당성·고의</strong> — 추행행위·고의가 인정될 만한 정황이 있는지 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술이 유일·일관·정황 부합하는지 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼잡으로 인한 우연한 접촉인지, 추행행위와 그에 대한 고의가 인정될 만한 정황이 있는지가 판단의 분기점입니다. 손잡이·위치·혼잡도 정황과 상대 진술이 유일 증거인지·정황에 부합하는지를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 탑승 시간·노선·교통카드 기록·혼잡도·위치 정황을 보존.</li>\n<li><strong>2단계 — 접촉 우연성 정리 (즉시)</strong> — 손잡이·짐·급정거·밀림 등 우연한 접촉이었음을 구체적으로 정리.</li>\n<li><strong>3단계 — 진술·정황 검토 (병행)</strong> — 상대 진술이 유일 증거인지, 일관·정황 부합하는지와 모순을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">만원 버스 접촉 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉 우연성·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>탑승 시간·노선·교통카드 기록 (동선)</strong></li>\n<li><strong>차내 혼잡도·위치·손잡이 정황 기록 (행위 태양)</strong></li>\n<li><strong>버스·정류장 CCTV·블랙박스 보존 요청 자료</strong></li>\n<li><strong>접촉 우연성 정리(짐·자세·급정거 등) 자료</strong></li>\n<li><strong>상대 진술의 일관성·모순·정황 불부합 정리</strong></li>\n<li><strong>당시 통화·메시지 등 행적 자료</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 버스 내·외부 CCTV는 보관 기간이 짧으니 노선·시간대를 특정해 빨리 보존을 요청하는 것이 중요합니다. 혼잡한 차내에서 손잡이를 잡고 있었던 자세·위치와 급정거·밀림 정황을 구체적으로 설명하고, 상대 진술이 유일 증거인지·정황과 모순되는 부분을 정리하면 추행 해당성·고의를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 혼잡으로 인한 우연한 접촉을 넘는 추행인지.</li>\n<li><strong>추행 고의</strong> — 추행행위와 그에 대한 고의가 인정되는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 유일·일관·정황에 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심이 남으면 피고인의 이익으로 보는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 피해자 진술의 신빙성',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄판결이 확정될 때까지 무죄로 추정되고, 범죄사실 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 검사가 제출한 증거만으로 그러한 확신을 가지게 하는 정도에 이르지 못하면 유죄의 의심이 들더라도 피고인의 이익으로 판단해야 한다고 보았습니다. 특히 낮 시간대 다수가 통행하는 공개된 장소처럼 통상 추행이 이루어질 것으로 예상하기 곤란한 상황에서 직접증거로 피해자 또는 밀접한 관계인의 진술이 유일한 경우, 그 진술이 합리적 의심을 배제할 만큼 신빙성이 있어야 유죄로 판단할 수 있다고 판시했습니다. 혼잡한 차내 접촉이 문제 된 사안을 살펴볼 때에도, 접촉의 우연성·고의 여부와 진술의 신빙성을 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '혼잡 차내 접촉 + 우연한 닿음 + 진술 중심 증거 결합 시 추행 해당성·고의 부재·진술 신빙성 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '흔들려서 닿은 것뿐인데 추행이 되나요?',
        answer:
          '<strong>혼잡으로 인한 우연한 접촉인지, 추행행위·고의가 있는지가 핵심인 영역입니다.</strong> 손잡이·위치·급정거 정황을 구체적으로 정리하세요.',
      },
      {
        question: '추행 의도가 없었다는 걸 어떻게 보이죠?',
        answer:
          '<strong>접촉 경위·자세·혼잡도 등 정황으로 고의 부재를 다투는 영역입니다.</strong> 당시 위치·자세와 우연한 접촉 정황을 정리하세요.',
      },
      {
        question: '상대 진술만 있고 목격자가 없어요.',
        answer:
          '<strong>진술이 유일 증거면 합리적 의심을 배제할 신빙성이 요구되는 영역입니다.</strong> CCTV·교통카드·행적 자료를 확보하세요.',
      },
      {
        question: 'CCTV로 다툴 수 있나요?',
        answer:
          '<strong>버스 내·외부 CCTV·블랙박스가 접촉 정황을 보여줄 수 있는 영역입니다.</strong> 노선·시간대를 특정해 보존을 신속히 요청하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>접촉 경위·고의 부재에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '시내버스 혼잡 추적', href: '/guide/sex-crime/sex-crime-city-bus-crowd-track' },
      { label: '지하철 혼잡 추행 추적', href: '/guide/sex-crime/sex-crime-crowded-subway-groping-track' },
      { label: '회식 후 음주 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
      { label: '클럽 무도장 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-club-dance-floor-contact-falsely-accused-defense' },
    ],
  },
];
