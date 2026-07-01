import { SpokePage } from '../spoke-pages';

// batch114 fraud(6) + sex-crime(4) — 10개 (2026-07-01)
//
// 고유 존재 이유:
// 1. fraud-online-lecture-course-refund-refusal-track — 일반 환불 분쟁과 분기. '환불 보장을 내세운 온라인 강의 선결제 후 환불을 거부·기망' 환불 거부 기망 편취 판단형 트랙(victim).
// 2. fraud-gym-pt-prepaid-sudden-closure-track — 일반 폐업 분쟁과 분기. '헬스장 PT를 선결제받고 갑자기 폐업해 환불 없이 잠적' 선결제 후 폐업 편취 절차형 트랙(victim).
// 3. fraud-used-farm-equipment-defect-concealed-resale-track — 일반 중고거래 분쟁과 분기. '중고 농기계 하자를 숨기고 정상품처럼 되판' 하자 은폐 재판매 기망 편취 판단형 트랙(victim).
// 4. fraud-subscription-box-prepaid-nondelivery-track — 일반 미배송 분쟁과 분기. '정기구독 박스를 선결제받고 배송 없이 잠적' 선결제 미배송 편취 절차형 트랙(victim).
// 5. fraud-romance-pretext-coin-investment-lure-track — 일반 투자 분쟁과 분기. '호감을 빌미로 코인 투자를 유인해 돈을 편취' 로맨스 빙자 코인 투자 유인 판단형 트랙(victim).
// 6. fraud-joint-business-profit-share-dispute-falsely-accused-defense — 일반 사기 무고류와 분기. '동업 수익 배분 분쟁이 사기 고의로 고소됨' 편취 범의·민사 채무불이행 구별 방어 판단형 트랙(accused).
// 7. sex-crime-subway-escalator-touch-report-track — 일반 추행류와 분기. '지하철 에스컬레이터에서 신체를 추행' 추행 해당성·고의 판단형 트랙(victim).
// 8. sex-crime-gym-pt-guidance-touch-report-track — 일반 추행류와 분기. '헬스장 PT 지도 중 신체를 추행' PT 지도 빙자 추행 신고 절차형 트랙(victim).
// 9. sex-crime-taxi-backseat-touch-report-track — 일반 추행류와 분기. '택시 뒷좌석에서 신체를 추행' 택시 추행 해당성 판단형 트랙(victim).
// 10. sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense — 일반 성범죄 무고류와 분기. '만원버스 접촉이 추행으로 고소' 추행 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch114FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-online-lecture-course-refund-refusal-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-lecture-course-refund-refusal-track',
    keyword: '온라인 강의 환불 거부 기망 사기',
    questionKeyword: '온라인 강의·인터넷 강좌 업체가 ‘언제든 100% 환불 보장, 마음에 안 들면 전액 돌려준다’며 환불 규정을 강조해서 믿고 적지 않은 수강료를 결제했는데, 막상 환불을 요청하니 ‘규정상 안 된다, 이미 수강한 부분이 있다’며 처음 광고와 전혀 다른 이유로 환불을 거부했어요. 알고 보니 애초에 환불해줄 의사 없이 환불 보장만 내세워 결제만 받은 정황이고, 같은 강의를 산 다른 수강생들도 똑같이 환불을 거부당했어요. 이런 온라인 강의 환불 거부 기망을 사기로 신고하고 낸 수강료를 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '온라인 강의 환불 거부·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 환불 거부 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '100% 환불 보장을 믿고 결제한 온라인 강의가 막상 환불을 거부당해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 강의 플랫폼·인터넷 강좌·클래스 판매 업체에서 ‘언제든 100% 환불 보장, 마음에 들지 않으면 조건 없이 전액 돌려준다, 부담 없이 시작하라’며 환불 규정을 앞세운 광고·상담을 믿고, 언제든 그만두고 돌려받으면 된다는 생각으로 적지 않은 수강료를 한 번에 결제한 분의 상황입니다. 그런데 막상 강의가 기대와 다르거나 사정이 생겨 환불을 요청하니, ‘규정상 환불이 안 된다, 이미 일부를 수강했다, 이벤트가·할인가라 환불 대상이 아니다’라며 처음 강조한 환불 보장과 전혀 다른 이유를 대며 환불을 거부하거나, 위약금·수수료를 과도하게 떼고 연락을 미루어, 믿고 낸 돈이 묶이게 되어 막막하실 거예요. 환불 규정을 다시 확인하려 해도 광고 화면·상담 내용과 실제 약관이 다르고, 알고 보니 같은 강의를 결제한 다른 수강생들도 똑같이 환불 보장을 믿었다가 거부당했다면 단순 규정 다툼이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 환불해줄 의사 없이 환불 보장만 미끼로 내세워 결제만 집중적으로 받은 정황이면 단순 계약 분쟁으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 환불해줄 의사 없이 ‘100% 환불 보장’을 내세워 수강료를 받았다면 적극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 여러 피해자에게 각각 기망행위를 하여 재물을 편취한 경우 원칙적으로 피해자별로 독립한 사기죄가 성립하고, 다만 피해법익이 동일하다고 평가될 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역으로, 결제 당시의 환불 이행 의사와 피해 규모를 가려 다툴 여지가 있습니다. 환불 의사 결여 + 환불 보장 광고 + 환불 거부·잠적 결합은 ‘환불 거부 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 환불 거부·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 환불 거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·환불 거부·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 환불 보장 광고·상담·결제 내역 정리.</li>\n<li><strong>② 환불 거부·기망</strong> — 광고와 다른 환불 거부 사유·환불 이행 의사 결여 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 결제 수강료 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 규정 다툼과 달리, 환불해줄 의사 없이 ‘환불 보장’을 내세워 결제만 받았는지가 판단의 분기점입니다. 환불 보장을 강조한 광고·상담 화면과 실제 거부 사유, 다른 수강생의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 환불 보장 광고·상담·약관·결제·카드 내역 캡처 보존.</li>\n<li><strong>2단계 — 환불 거부·기망 입증 (즉시)</strong> — 광고와 다른 거부 사유·환불 요청·거부 대화를 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·결제 취소, 계좌 지급정지를 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 환불 거부 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·환불 거부·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>환불 보장 광고·상담 캡처 (거래 조건)</strong></li>\n<li><strong>수강 신청·약관·결제 화면 (계약 내용)</strong></li>\n<li><strong>수강료 결제·카드 할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>광고와 다른 환불 거부 사유·약관 대비 자료</strong></li>\n<li><strong>환불 요청·거부·지연 대화 기록</strong></li>\n<li><strong>업체·판매자·사업자·계좌 정보</strong></li>\n<li><strong>다른 수강생의 동일 피해·후기·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 전 본 환불 보장 광고·상담 화면과 실제 적용된 약관·거부 사유를 항목별로 대비하면 환불 의사 없이 결제만 받았는지를 다투는 데 도움이 됩니다. 카드 결제였다면 항변권 행사 시한을 챙기고, 같은 강의를 결제한 다른 수강생을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>환불 이행 의사</strong> — 결제 당시 환불해줄 의사가 있었는지.</li>\n<li><strong>환불 보장 광고</strong> — 광고와 다른 사유로 환불을 거부했는지.</li>\n<li><strong>편취 범의</strong> — 단순 규정 다툼인지 처음부터 결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 환불되지 않은 수강료가 피해액인지.</li>\n<li><strong>피해 규모</strong> — 다수 수강생 피해가 죄수·피해액에 어떻게 반영되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인 강의·환불 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자에 대한 사기죄의 죄수와 포괄일죄 판단',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수의 피해자에 대하여 각각 기망행위를 하여 각 피해자로부터 재물을 편취한 경우에는 범의가 단일하고 범행방법이 동일하더라도 각 피해자의 피해법익은 독립한 것이므로 이를 포괄일죄로 볼 수 없고 피해자별로 독립한 사기죄가 성립한다고 보았습니다. 다만 피해자들의 피해법익이 동일하다고 볼 수 있는 사정이 있는 경우에는 이들에 대한 사기죄를 포괄하여 일죄로 볼 수 있다고 하면서, 부부인 피해자들을 기망해 공동재산인 건물을 처분하여 마련한 돈을 편취한 사안에서 기망행위의 공통성, 재산 교부에 관한 의사결정의 공통성, 재산의 형성·유지 과정 등 여러 사정을 고려하면 피해법익이 동일하다고 평가될 수 있어 포괄일죄를 구성한다고 판시했습니다. 환불 보장을 내세워 여러 수강생에게서 수강료를 받고 환불을 거부한 사안을 살펴볼 때에도, 피해자별로 별개의 사기죄가 성립하는지, 피해 규모를 어떻게 산정하는지를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '환불 의사 결여 + 환불 보장 광고 + 환불 거부·잠적 결합 시 환불 거부 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '환불 규정을 이유로 거부하는데도 사기인가요?',
        answer:
          '<strong>결제 당시 환불해줄 의사가 있었는지가 핵심인 영역입니다.</strong> 환불 보장 광고와 실제 거부 사유를 대비해 확보하세요.',
      },
      {
        question: '일부 강의를 수강했는데도 다툴 수 있나요?',
        answer:
          '<strong>수강 여부와 별개로 환불 보장 기망을 따지는 영역입니다.</strong> 광고·상담 화면과 약관 차이를 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 할부 항변권으로 잔여 대금을 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '약관에 환불 불가라고 적혀 있으면 못 받나요?',
        answer:
          '<strong>광고와 약관이 다르면 기망·편취를 다툴 수 있는 영역입니다.</strong> 결제 전 본 광고 화면을 캡처로 보존하세요.',
      },
      {
        question: '다른 수강생도 같이 거부당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·후기·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 강의 환불 거부 추적', href: '/guide/fraud/fraud-online-course-refund-refusal-track' },
      { label: '온라인 강의 환불 거부 잠적 추적', href: '/guide/fraud/fraud-online-lecture-refund-refusal-disappear-track' },
      { label: '온라인 강의 환불보장 광고 잠적 추적', href: '/guide/fraud/fraud-online-course-refund-guarantee-ad-block-vanish-track' },
      { label: '학원 수강료 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
    ],
  },

  // ─── 2. fraud-gym-pt-prepaid-sudden-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-gym-pt-prepaid-sudden-closure-track',
    keyword: '헬스장 PT 선결제 후 폐업 기망 사기',
    questionKeyword: '헬스장·PT 스튜디오가 ‘장기 등록하면 크게 할인된다, 오래 운영할 테니 걱정 말라’고 해서 헬스장 이용권과 PT 세션을 한꺼번에 선결제했는데, 얼마 지나지 않아 갑자기 문을 닫고 트레이너·업주가 환불도 없이 연락을 끊고 잠적했어요. 알고 보니 이미 폐업·임대료 체납 상태였는데도 그 사정을 숨기고 선결제만 집중적으로 받은 정황이고, 다른 회원들도 똑같이 선결제 후 못 받았어요. 이런 헬스장 PT 선결제 후 폐업 기망을 사기로 신고하고 선결제한 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '헬스장 PT 선결제 후 폐업 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 선결제 폐업 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '할인을 미끼로 헬스장 PT를 선결제했는데 갑자기 폐업하고 환불 없이 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·PT 스튜디오·필라테스 센터에서 ‘지금 장기로 등록하면 회당 단가가 훨씬 싸다, 오래 운영할 곳이니 믿고 길게 끊으라’며 할인을 앞세운 권유를 믿고, 꾸준히 운동하려는 마음으로 헬스장 이용권과 PT 세션 수십 회를 한꺼번에 선결제한 분의 상황입니다. 그런데 얼마 지나지 않아 센터가 갑자기 문을 닫거나 담당 트레이너가 사라지고, 환불·잔여 세션 이전에 관한 안내도 없이 업주가 연락을 끊고 잠적해, 결제한 돈에 해당하는 서비스는 대부분 받지도 못한 채 이용권만 종이가 되어 막막하실 거예요. 뒤늦게 알고 보니 이미 임대료가 밀리고 폐업이 예정된 상태였는데도 그 사정을 숨긴 채 ‘오래 운영한다’며 선결제를 집중적으로 받았고, 같은 시기에 장기 등록한 다른 회원들도 똑같이 서비스를 받지 못하고 환불을 거부당했다면 단순 폐업 사고가 아닐 수 있어 더 답답하셨을 거예요. 정상 운영이 어려운 사정을 알면서도 이를 숨기고 선결제만 받은 정황이면 단순 경영 실패로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 폐업이 임박하거나 정상 이행이 불가능한 사정을 숨기고 오래 운영할 것처럼 가장해 선결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기 사건에서 공소장에 기재된 피해자와 실제 재산상 피해자가 다른 것이 밝혀진 경우 법원은 무죄로 단정할 것이 아니라 진정한 피해자를 가려내어 그에 대한 사기죄로 처벌해야 한다고 본 사례 흐름이 있는 영역으로, 편취의 상대방과 손해의 귀속을 정확히 가려 다툴 여지가 있습니다. 정상 운영 곤란 은폐 + 장기 선결제 유도 + 폐업·잠적 결합은 ‘선결제 후 폐업 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 폐업·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 PT 선결제 후 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·폐업·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 장기 할인 권유·이용권·PT 선결제 내역 정리.</li>\n<li><strong>② 폐업·기망</strong> — 폐업·임대료 체납 사정 은폐와 선결제 유도 여부 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 이용하지 못한 잔여 이용권·PT 선결제액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경영 실패와 달리, 폐업이 임박한 사정을 숨기고 오래 운영할 것처럼 가장해 선결제를 받았는지가 판단의 분기점입니다. 장기 등록을 권유한 대화와 폐업·잠적 시점, 다른 회원의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 장기 할인 권유·이용권·PT 계약·선결제 영수증·카드 내역 보존.</li>\n<li><strong>2단계 — 폐업·잠적 입증 (즉시)</strong> — 폐업 공고·환불 거부·연락 두절·임대료 체납 정황과 잔여 세션을 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·결제 취소, 계좌 지급정지를 요청하고 잔여 금액 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 선결제 후 폐업 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·폐업·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>장기 할인 권유·운영 약속 캡처 (거래 조건)</strong></li>\n<li><strong>이용권·PT 계약서·회원 약관 (계약 내용)</strong></li>\n<li><strong>선결제 영수증·카드 할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>잔여 이용권·PT 세션 확인 자료 (손해 산정)</strong></li>\n<li><strong>폐업 공고·연락 두절·환불 거부 기록</strong></li>\n<li><strong>업주·트레이너·사업자·계좌 정보</strong></li>\n<li><strong>다른 회원의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 장기 등록을 권유한 시점과 폐업·잠적 시점의 간격, 그 무렵 임대료 체납·양도 정황을 정리하면 정상 운영이 어려운 사정을 숨기고 선결제만 받았는지를 다투는 데 도움이 됩니다. 카드 결제였다면 항변권 행사 시한을 챙기고, 같은 시기에 장기 등록한 다른 회원을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정상 운영 의사</strong> — 선결제 당시 정상 운영·이행 능력이 있었는지.</li>\n<li><strong>폐업 사정 은폐</strong> — 임박한 폐업·체납 사정을 숨겼는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영 실패인지 처음부터 선결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 이용하지 못한 잔여 선결제액이 피해액인지.</li>\n<li><strong>책임 주체</strong> — 업주·양수인·트레이너 중 책임 주체가 누구인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (체육시설·선결제 폐업 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산상 피해자가 공소장 기재와 다른 경우의 처리',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기소된 사기 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것이 판명된 경우, 공소사실의 동일성을 해하지 않고 피고인의 방어권 행사에 실질적 불이익을 주지 않는 한 공소장변경절차 없이 직권으로 실제 피해자를 적시하여 유죄로 인정하여야 한다고 보았습니다. 그리고 허위의 근저당권자가 집행법원을 기망하여 원인무효인 근저당권에 기해 임의경매를 신청하고 배당금을 지급받은 경우 집행법원의 배당표 작성과 배당금 교부행위는 부동산 매수인의 처분행위에 갈음하는 효력을 가진다고 하면서, 진정한 피해자가 누구인지 가려내지 않은 채 곧바로 무죄로 판단한 원심에 법리오해가 있다고 판시했습니다. 헬스장·PT를 선결제받고 폐업해 잠적한 사안을 살펴볼 때에도, 실제로 재산상 손해를 입은 피해자가 누구인지와 편취의 상대방을 정확히 가려 사기죄 성부를 검토해볼 수 있습니다.',
        takeaway: '정상 운영 곤란 은폐 + 장기 선결제 유도 + 폐업·잠적 결합 시 선결제 후 폐업 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 경영이 어려워 폐업한 것 아닌가요?',
        answer:
          '<strong>선결제 당시 정상 운영·이행 의사가 있었는지가 핵심인 영역입니다.</strong> 장기 등록 권유와 폐업 시점의 간격을 확보하세요.',
      },
      {
        question: '폐업 사정을 숨긴 걸 어떻게 입증하나요?',
        answer:
          '<strong>임대료 체납·양도 정황과 선결제 유도 시점이 단서인 영역입니다.</strong> 권유 대화와 폐업 공고 시점을 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 할부 항변권으로 잔여 대금을 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '잔여 세션만큼만 돌려받을 수 있나요?',
        answer:
          '<strong>이용하지 못한 잔여 선결제액을 기준으로 반환을 다투는 영역입니다.</strong> 잔여 이용권·세션 내역을 정리하세요.',
      },
      {
        question: '다른 회원도 같이 못 받은 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·계약 시점·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '헬스장 회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-membership-prepaid-sudden-closure-track' },
      { label: '헬스장 PT 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-pt-prepay-closure-track' },
      { label: '선결제 헬스장 폐업 환불거부 추적', href: '/guide/fraud/fraud-prepaid-gym-membership-closure-norefund-track' },
      { label: '헬스장 장기 회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-longterm-membership-prepaid-closure-track' },
    ],
  },

  // ─── 3. fraud-used-farm-equipment-defect-concealed-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-farm-equipment-defect-concealed-resale-track',
    keyword: '중고 농기계 하자 은폐 판매 기망 사기',
    questionKeyword: '중고 거래로 트랙터·경운기 같은 농기계를 사면서 판매자가 ‘엔진·미션 다 정상이고 큰 고장 없이 잘 쓰던 물건이다, 바로 농사에 쓸 수 있다’고 해서 믿고 적지 않은 돈을 주고 샀어요. 그런데 막상 받아 정비소·농기계상에 점검을 맡기니 엔진·유압·미션에 심각한 하자가 있어 수리비가 많이 들고 정상 작업이 어려운 물건이었고, 거래 전 설명·사진도 하자를 가린 것이었어요. 판매자에게 따지니 ‘몰랐다, 환불은 안 된다’며 발뺌하다 연락을 끊었는데, 처음부터 하자를 알면서 숨기고 정상품처럼 되판 정황이에요. 이런 중고 농기계 하자 은폐 판매 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 농기계 하자 은폐·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 농기계 하자 은폐 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '큰 고장 없다는 말을 믿고 산 중고 농기계에서 심각한 하자가 드러나고 환불도 거부당했다면, 형법 제347조 사기·고지의무 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·농기계 매매상·직거래로 트랙터·경운기·이앙기 같은 농기계를 사면서 판매자에게서 ‘엔진·미션·유압 다 정상이고 큰 고장 없이 잘 쓰던 물건이다, 손볼 것 없이 바로 농사에 투입할 수 있다’는 말을 믿고, 한 철 농사를 맡길 장비라는 생각으로 적지 않은 대금을 주고 물건을 받은 분의 상황입니다. 그런데 막상 인수해 정비소·농기계상에 점검을 맡겨보니, 겉보기와 달리 엔진 출력 저하·유압 누유·미션 손상 같은 심각한 하자가 있어 정상 작업이 어렵고 수리·정비에 적지 않은 비용이 드는 물건이었으며, 거래 전 들은 설명과 받은 사진마저 하자가 드러나지 않게 손보거나 특정 각도로만 찍은 것이어서, 멀쩡한 농기계를 산 줄 알았다가 하자 장비를 정상 값에 산 셈이 되어 막막하실 거예요. 판매자에게 따지니 ‘나도 몰랐다, 거래가 끝났으니 환불은 못 한다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 비슷하게 하자를 숨기고 여러 사람에게 정상품처럼 되판 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 작업 성능·가치에 영향을 주는 하자를 알면서도 ‘정상’이라고 적극적으로 속이거나 중요한 하자를 알리지 않은 채 정상 시세로 팔았다면 적극적·소극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 처분행위와 관련해, 기망으로 착오에 빠진 피기망자가 그 행위의 의미나 결과를 제대로 인식하지 못한 채 재산상 손해를 초래하는 행위를 하였더라도 그 행위 자체에 대한 인식이 있으면 처분행위와 처분의사가 인정된다고 본 사례 흐름이 있는 영역으로, 하자 고지의무 위반과 기망·처분을 가려 다툴 여지가 있습니다. 하자 은폐 + 설명·사진 가림 + 환불 거부·발뺌 결합은 ‘하자 은폐 재판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 하자·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 농기계 하자 은폐 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·하자 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 정상 강조 설명·거래 대화·결제 내역 정리.</li>\n<li><strong>② 하자·기망 입증</strong> — 정비소·농기계상 점검 소견·하자 사진으로 하자를 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 정상 시세로 지급한 대금·수리비 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 하자를 알면서 ‘정상’이라고 속였는지, 작업 성능·가치에 영향을 주는 중요한 하자를 알리지 않았는지가 판단의 분기점입니다. 정상을 강조한 대화와 점검 소견, 같은 판매자의 반복 재판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 정상 강조 설명·거래 대화·결제·인도 내역 캡처 보존.</li>\n<li><strong>2단계 — 하자 입증 (즉시)</strong> — 정비소·농기계상 점검 소견서, 엔진·유압·미션 하자 사진·수리 견적 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 농기계 하자 은폐 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·하자·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>정상 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고 거래글·합의 내용·약정 (계약 내용)</strong></li>\n<li><strong>농기계 대금·운송비 결제 내역 (피해 금액)</strong></li>\n<li><strong>정비소·농기계상 점검 소견서·수리 견적</strong></li>\n<li><strong>엔진·유압·미션 하자 사진·거래 전 사진 대비 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 재판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정비소·농기계상 점검 소견과 하자 부위 사진으로 하자의 정도와 작업 성능 영향을 명확히 하고, 판매자가 ‘정상’을 강조한 대화와 거래 전 사진을 실제 상태와 대비하면 은폐 재판매 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 사람에게도 비슷하게 판 흔적을 함께 모으면 반복 재판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>하자 여부</strong> — 실제로 작업 성능에 영향을 주는 하자가 있는지.</li>\n<li><strong>고지의무 위반</strong> — 가치에 영향을 주는 하자를 알리지 않았는지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 은폐 재판매였는지.</li>\n<li><strong>편취액</strong> — 정상 시세 대금·수리비가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·하자 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망으로 인한 착오와 사기죄의 처분행위·처분의사',
        summary:
          '대법원 2016도13362(대법원, 2017.02.16 선고) 영역에서 법원은 사기죄의 기망은 거래관계에서 지켜야 할 신의칙에 반하는 행위로서 사람으로 하여금 착오를 일으키게 하는 것을 말하고, 그 착오는 사실에 관한 것이든 법률관계·법률효과에 관한 것이든 상관없으며, 처분행위 자체나 그 동기·목적에 관한 것이든 제한이 없다고 보았습니다. 그리고 피기망자가 기망당한 결과 자신의 작위 또는 부작위가 갖는 의미를 제대로 인식하지 못하여 그러한 행위가 초래하는 결과를 인식하지 못하였더라도, 그와 같은 착오 상태에서 재산상 손해를 초래하는 행위를 하기에 이르렀다면 피기망자의 처분행위와 그에 상응하는 처분의사가 있다고 보아야 한다고 판시했습니다. 하자를 숨기고 정상품처럼 농기계를 되판 사안을 살펴볼 때에도, 매수인이 하자를 알았다면 그 값에 사지 않았을 사정을 고지하지 않은 채 대금을 받았는지를 기준으로 기망과 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '하자 은폐 + 설명·사진 가림 + 환불 거부·발뺌 결합 시 하자 은폐 재판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 몰랐다고 하는데도 사기인가요?',
        answer:
          '<strong>하자를 알면서 숨겼거나 고지의무를 어겼는지가 핵심인 영역입니다.</strong> 정상 강조 대화와 점검 소견을 확보하세요.',
      },
      {
        question: '농기계 하자를 어떻게 입증하나요?',
        answer:
          '<strong>정비소·농기계상 점검 소견이 핵심 단서인 영역입니다.</strong> 하자 부위 사진과 수리 견적을 함께 확보하세요.',
      },
      {
        question: '사진에는 멀쩡해 보였는데 다툴 수 있나요?',
        answer:
          '<strong>하자가 안 보이게 찍은 사진과 실제 상태의 차이가 단서인 영역입니다.</strong> 거래 전 사진과 점검 사진을 대비해 정리하세요.',
      },
      {
        question: '직거래라 현금으로 줬으면 환급이 안 되나요?',
        answer:
          '<strong>현금 거래여도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래 자료와 점검 소견을 정리하세요.',
      },
      {
        question: '같은 판매자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 재판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 판매자의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고 기계 하자 은폐 추적', href: '/guide/fraud/fraud-used-machinery-defect-concealment-track' },
      { label: '중고 트랙터 농기계 미인도 추적', href: '/guide/fraud/fraud-used-tractor-farm-machinery-no-delivery-track' },
      { label: '중고차 침수 사고 은폐 추적', href: '/guide/fraud/fraud-used-car-flood-damage-concealed-track' },
      { label: '중고 카메라 렌즈 곰팡이 은폐 재판매', href: '/guide/fraud/fraud-used-camera-lens-fungus-concealed-resale-track' },
    ],
  },

  // ─── 4. fraud-subscription-box-prepaid-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-subscription-box-prepaid-nondelivery-track',
    keyword: '정기구독 박스 선결제 미배송 기망 사기',
    questionKeyword: '정기구독 박스 업체·SNS 셀러가 ‘매달 알찬 구성으로 보내준다, 몇 개월치 선결제하면 크게 할인된다’고 해서 정기구독료를 몇 개월치 한 번에 선결제했는데, 첫 달부터 배송이 안 되거나 한두 번 오다 끊기고 이후로는 아예 발송되지 않았어요. 환불을 요구하니 ‘물류가 밀린다, 곧 보낸다’며 미루다 결국 연락을 끊고 잠적했어요. 알고 보니 처음부터 정상 배송할 의사나 능력 없이 선결제만 받은 정황이고 다른 구독자들도 같이 못 받았는데, 이런 정기구독 박스 선결제 미배송 기망을 사기로 신고하고 선결제한 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '정기구독 박스 선결제 미배송 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정기구독 박스 미배송 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '몇 개월치 선결제한 정기구독 박스가 배송 없이 끊기고 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「정기구독 박스 업체·SNS 셀러·오픈마켓 판매자에게서 ‘매달 알찬 구성의 상품을 정기적으로 보내준다, 지금 3개월·6개월치를 한 번에 선결제하면 훨씬 싸고 사은품도 준다’는 말을 믿고, 매달 챙겨 받는 재미를 기대하며 정기구독료를 여러 달치 한꺼번에 선결제한 분의 상황입니다. 그런데 정작 첫 달부터 배송이 되지 않거나, 한두 번 오다가 끊기고 이후로는 아예 발송·배송 조회조차 되지 않아, 결제한 개월 수에 해당하는 상품 대부분을 받지 못한 채 돈만 묶이게 되어 막막하실 거예요. 환불·정상 배송을 요구하니 ‘물류가 밀렸다, 재고가 곧 들어온다, 다음 달에 몰아 보낸다’며 차일피일 미루다, 끝내 계정·연락처를 닫고 잠적해, 같은 시기에 구독한 다른 구독자들도 똑같이 상품을 못 받고 환불을 거부당했다면 단순 배송 지연이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 정상 배송할 의사나 능력 없이 정기구독을 가장해 선결제만 집중적으로 받은 정황이면 단순 거래 사고로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 상품을 배송할 의사·능력 없이 정기구독처럼 가장해 여러 달치 선결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 물건을 건축·공급할 의사나 능력 없이 피해자들을 기망하여 대금을 편취하였다는 사기 공소사실이 별개의 다른 죄와는 행위 태양·보호법익이 달라 동일한 사건으로 볼 수 없다고 본 사례 흐름이 있는 영역으로, 선결제 당시의 이행 의사·능력을 가려 다툴 여지가 있습니다. 배송 의사·능력 결여 + 배송 중단·지연 + 미배송·잠적 결합은 ‘선결제 미배송 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미배송·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 정기구독 박스 선결제 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미배송·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 정기구독 약속·배송 안내·선결제 내역 정리.</li>\n<li><strong>② 미배송·기망</strong> — 배송 중단·미배송·발송 의사 결여 여부 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 받지 못한 개월분 선결제액 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 상품을 배송할 의사·능력 없이 정기구독을 가장해 선결제를 받았는지가 판단의 분기점입니다. 배송 약속 대화와 배송 중단·잠적 정황, 다른 구독자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 정기구독 약속·배송 안내·결제·배송 조회 캡처 보존.</li>\n<li><strong>2단계 — 미배송·중단 입증 (즉시)</strong> — 배송 조회 불가·발송 중단·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·정기결제 취소, 계좌 지급정지를 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">정기구독 박스 선결제 미배송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미배송·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>정기구독 약속·구성 안내 캡처 (거래 조건)</strong></li>\n<li><strong>구독 신청·결제 화면·상품 정보 (계약 내용)</strong></li>\n<li><strong>선결제·정기결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>받은 회차·미배송 회차 확인 자료 (손해 산정)</strong></li>\n<li><strong>배송 조회 불가·발송 중단·환불 거부 대화 기록</strong></li>\n<li><strong>업체·셀러·계정·계좌 정보</strong></li>\n<li><strong>다른 구독자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제한 개월 수와 실제로 받은 회차를 대비하고, 배송 조회 화면·발송 중단 시점과 잠적 시점의 흐름을 정리하면 배송 의사 없이 선결제만 받았는지를 다투는 데 도움이 됩니다. 카드 정기결제였다면 결제 취소·항변권 시한을 챙기고, 같은 시기에 구독한 다른 구독자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>배송 의사·능력</strong> — 선결제 당시 정상 배송할 의사·능력이 있었는지.</li>\n<li><strong>배송 중단</strong> — 첫 회차부터 또는 중도에 발송이 끊겼는지.</li>\n<li><strong>편취 범의</strong> — 단순 물류 지연인지 처음부터 선결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 받지 못한 개월분 선결제액이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (정기구독·미배송 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공급 의사·능력 없는 대금 편취 사기의 성립과 사건의 동일성',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 공소사실이나 범죄사실의 동일성 여부는 피고인의 행위와 사회적 사실관계를 기본으로 하되 규범적 요소도 고려하여 판단하여야 한다고 보았습니다. 그러면서 아파트를 건축하여 분양할 의사나 능력 없이 피해자들을 기망하여 분양대금을 편취하였다는 특정경제범죄 가중처벌 등에 관한 법률 위반(사기) 공소사실은, 이미 유죄가 확정된 다른 위반죄의 범죄사실과 행위 태양이나 보호법익에 비추어 동일하다고 보기 어렵고 한 죄나 상상적 경합관계에 있다고 볼 수도 없다고 판시했습니다. 정기구독을 가장해 여러 달치 선결제를 받고 상품을 배송하지 않은 사안을 살펴볼 때에도, 결제 당시 상품을 정상적으로 공급할 의사와 능력이 있었는지를 기준으로 기망에 의한 대금 편취가 성립하는지를 가려 검토해볼 수 있습니다.',
        takeaway: '배송 의사·능력 결여 + 배송 중단·지연 + 미배송·잠적 결합 시 선결제 미배송 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 물류가 밀려 지연된 것 아닌가요?',
        answer:
          '<strong>선결제 당시 정상 배송할 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 발송 중단·미배송·잠적 정황을 확보하세요.',
      },
      {
        question: '한두 번은 배송됐는데도 사기인가요?',
        answer:
          '<strong>받지 못한 회차를 기준으로 편취를 다투는 영역입니다.</strong> 결제 개월 수와 실제 받은 회차를 대비하세요.',
      },
      {
        question: '카드 정기결제였는데 막을 수 있나요?',
        answer:
          '<strong>정기결제 취소·카드 항변권으로 다툴 수 있는 영역입니다.</strong> 결제 취소와 항변권을 시한 전에 신청하세요.',
      },
      {
        question: 'SNS 셀러라 신원을 모르는데 신고되나요?',
        answer:
          '<strong>결제·계좌·계정 정보로도 신고를 검토할 수 있는 영역입니다.</strong> 결제·배송·연락 자료를 정리해 접수하세요.',
      },
      {
        question: '다른 구독자도 같이 못 받은 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·결제 시점·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '정기구독 박스 선결제 잠적 추적', href: '/guide/fraud/fraud-subscription-box-prepay-vanish-track' },
      { label: '밀키트 구독 자동결제 환불 추적', href: '/guide/fraud/fraud-mealkit-subscription-auto-renewal-refund-track' },
      { label: '크라우드펀딩 리워드 미배송 추적', href: '/guide/fraud/fraud-crowdfunding-reward-nondelivery-track' },
      { label: '인플루언서 공동구매 미배송 추적', href: '/guide/fraud/fraud-influencer-groupbuy-nondelivery-track' },
    ],
  },

  // ─── 5. fraud-romance-pretext-coin-investment-lure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-pretext-coin-investment-lure-track',
    keyword: '로맨스 빙자 코인 투자 유인 기망 사기',
    questionKeyword: 'SNS·데이팅앱에서 알게 된 상대가 다정하게 연락을 주고받으며 호감·연인 감정을 쌓더니 ‘믿을 만한 코인 거래소·투자처가 있다, 나만 아는 정보라 확실히 수익이 난다’며 코인 투자를 권했어요. 처음엔 소액을 넣자 수익이 나는 것처럼 보여 믿고 점점 큰돈을 송금·이체했는데, 막상 출금하려니 ‘수수료·세금을 더 내야 한다, 계정이 묶였다’며 계속 돈을 요구하다 결국 연락을 끊고 사라졌어요. 알고 보니 거래소 화면도 조작이고 처음부터 호감을 빌미로 투자금을 편취할 목적이었던 정황인데, 이런 로맨스 빙자 코인 투자 유인 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '로맨스 빙자 코인 투자 유인·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '로맨스 빙자 코인 투자 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '호감을 쌓은 상대의 권유로 코인에 투자했다가 출금이 막히고 연락이 끊겨 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·데이팅앱·오픈채팅에서 우연히 알게 된 상대가 매일 다정하게 안부를 묻고 사진·영상통화로 신뢰를 쌓으며 호감이나 연인 감정을 키우더니, 어느 순간 ‘내가 아는 확실한 코인 거래소·투자처가 있다, 나만 아는 정보라 손해 볼 일이 없다, 같이 하면 미래를 함께 준비할 수 있다’며 코인·가상자산 투자를 권한 상황에 놓인 분의 이야기입니다. 처음에는 의심스러워 소액만 넣었는데 거래소 화면에 수익이 나는 것처럼 보이자 믿음이 생겨, 상대가 안내한 사이트·지갑으로 점점 큰 금액을 송금·이체했는데, 막상 원금과 수익을 출금하려 하니 ‘수수료·세금을 먼저 내야 출금된다, 계정이 일시 정지됐다, 인증금을 넣어야 한다’며 계속 추가 입금을 요구하다, 결국 연락처·계정을 닫고 사라져 돈도 사람도 잃게 되어 막막하실 거예요. 뒤늦게 보니 거래소·수익 화면이 조작된 것이고 애초에 호감을 빌미로 투자금을 편취할 목적이었던 정황이면 단순 투자 손실로 보기 어려워 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 처음부터 투자·반환 의사 없이 조작된 거래소·수익 화면으로 호감을 이용해 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 성립 여부는 기망행위가 있었는지를 기준으로 판단해야 하고, 재물의 교부 당시 상대를 착오에 빠뜨리는 기망이 있었는지가 핵심이라고 본 사례 흐름이 있는 영역으로, 투자를 권할 당시의 기망 여부와 편취 목적을 가려 다툴 여지가 있습니다. 조작 화면·정보 가장 + 호감·신뢰 이용 + 출금 거부·잠적 결합은 ‘로맨스 빙자 코인 투자 유인 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 관계·거래 정리 ② 기망·조작 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 로맨스 빙자 코인 투자 유인 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관계·거래 정리</strong> — 알게 된 경위·대화·투자 권유·송금 내역 정리.</li>\n<li><strong>② 기망·조작 입증</strong> — 거래소·수익 화면 조작·정보 가장·출금 거부 여부 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 송금·추가 입금액 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 호감을 빌미로 조작된 화면·거짓 정보로 착오에 빠뜨려 투자금을 받았는지가 판단의 분기점입니다. 투자를 권한 대화와 조작·출금 거부 정황, 송금 흐름을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관계·거래 자료 보존 (즉시)</strong> — 알게 된 경위·대화·투자 권유·거래소 화면·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 기망·조작 입증 (즉시)</strong> — 수익 화면 조작·출금 거부·추가 요구·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·계좌 신고 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 거래소·지갑 정보를 정리.</li>\n<li><strong>4단계 — 경찰·금감원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">로맨스 빙자 코인 투자 유인 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관계·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>알게 된 경위·프로필·대화 캡처 (관계 정황)</strong></li>\n<li><strong>투자 권유·정보 제공 대화 (기망 내용)</strong></li>\n<li><strong>송금·이체·추가 입금 내역 (피해 금액)</strong></li>\n<li><strong>거래소·수익·잔고 화면 캡처 (조작 정황)</strong></li>\n<li><strong>출금 거부·수수료·인증금 요구 대화 기록</strong></li>\n<li><strong>상대 계정·연락처·안내받은 지갑·계좌 정보</strong></li>\n<li><strong>같은 수법 피해자·피해 사례 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대와 알게 된 경위부터 투자 권유·송금·출금 거부·잠적까지의 흐름을 시간순으로 정리하고, 수익이 나는 것처럼 보인 거래소 화면과 출금 시 요구받은 수수료·인증금 대화를 함께 보존하면 조작된 정보로 착오에 빠뜨렸는지를 다투는 데 도움이 됩니다. 송금 계좌·지갑 주소를 특정해 신속히 지급정지를 요청하는 것이 회수에 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 여부</strong> — 조작된 화면·거짓 정보로 착오를 일으켰는지.</li>\n<li><strong>편취 목적</strong> — 호감을 빌미로 처음부터 편취를 노렸는지.</li>\n<li><strong>투자 손실 항변</strong> — 단순 투자 손실 주장에 가려지지 않는지.</li>\n<li><strong>편취액</strong> — 송금·추가 입금액 전부가 피해액인지.</li>\n<li><strong>상대 특정</strong> — 계정·지갑·계좌로 상대를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>보이스피싱·사이버사기 통합신고 (112)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄에서 기망행위의 존부와 성립 판단',
        summary:
          '대법원 2015도17452(대법원, 2016.03.24 선고) 영역에서 법원은 피고인이 피해자에게 자동차를 매도하겠다고 하여 인도하고 소유권이전등록에 필요한 서류까지 교부해 피해자가 언제든 소유권이전등록을 마칠 수 있게 되었다면, 뒤에 미리 부착해 둔 위치추적장치로 자동차를 다시 가져갈 의사가 있었더라도 자동차의 소유권을 이전할 의사가 없었다고 볼 수 없다고 보았습니다. 그리고 매도 당시 곧바로 다시 가져갈 의사를 숨겼더라도 그것만으로는 기망이라 할 수 없어, 결국 매도 당시 기망행위가 없었으므로 사기죄를 인정한 원심에 법리오해가 있다고 판시했습니다. 즉 사기죄의 성립은 재물 교부 당시 상대를 착오에 빠뜨리는 기망행위가 있었는지를 기준으로 판단해야 한다는 취지입니다. 호감을 이용해 코인 투자를 권하며 조작된 화면으로 투자금을 받은 사안을 살펴볼 때에도, 투자를 권할 당시 거짓 정보·조작으로 상대를 착오에 빠뜨리는 기망이 있었는지를 기준으로 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '조작 화면·정보 가장 + 호감·신뢰 이용 + 출금 거부·잠적 결합 시 로맨스 빙자 코인 투자 유인 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '제가 투자 판단을 한 건데도 사기인가요?',
        answer:
          '<strong>조작된 화면·거짓 정보로 착오에 빠졌는지가 핵심인 영역입니다.</strong> 투자 권유 대화와 수익 화면을 확보하세요.',
      },
      {
        question: '수익이 나는 것처럼 보였는데 조작인가요?',
        answer:
          '<strong>거래소·잔고 화면 조작은 기망의 단서가 되는 영역입니다.</strong> 화면 캡처와 출금 거부 대화를 보존하세요.',
      },
      {
        question: '출금할 때 수수료를 내라는 것도 수법인가요?',
        answer:
          '<strong>출금을 미끼로 추가 입금을 요구하는 정황이 단서인 영역입니다.</strong> 수수료·인증금 요구 대화를 정리하세요.',
      },
      {
        question: '코인으로 보냈는데 추적·회수가 되나요?',
        answer:
          '<strong>지갑 주소·거래 내역으로 추적·신고를 검토할 수 있는 영역입니다.</strong> 지갑·송금 자료를 정리해 신속히 신고하세요.',
      },
      {
        question: '상대 신원을 모르는데 신고할 수 있나요?',
        answer:
          '<strong>계정·계좌·연락 자료로 신고를 검토할 수 있는 영역입니다.</strong> 대화·프로필·송금 정보를 모아 접수하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '로맨스 빙자 코인 투자 추적', href: '/guide/fraud/fraud-romance-pretext-coin-investment-track' },
      { label: '데이팅앱 로맨스 투자 유인 추적', href: '/guide/fraud/fraud-romance-dating-app-investment-lure-track' },
      { label: '로맨스 투자 유인 추적', href: '/guide/fraud/fraud-romance-investment-lure-track' },
      { label: '해외 지인 로맨스 투자 사기 추적', href: '/guide/fraud/fraud-romance-scam-overseas-friend-investment-track' },
    ],
  },

  // ─── 6. fraud-joint-business-profit-share-dispute-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-joint-business-profit-share-dispute-falsely-accused-defense',
    keyword: '동업 수익 배분 분쟁 사기 고의 무고 방어',
    questionKeyword: '지인과 함께 동업으로 사업을 하며 자금을 모으고 수익을 나누기로 했는데, 사업이 기대만큼 안 되고 수익 배분·정산을 두고 다툼이 생기자 상대가 ‘처음부터 나를 속여 투자·자금을 받아 가로챘다’며 저를 사기로 고소했어요. 저는 동업 당시 실제로 사업을 함께 운영했고 정산이 늦어진 것일 뿐 처음부터 편취할 생각은 전혀 없었는데, 손실과 배분 분쟁이 사기 고의로 몰려 너무 억울해요. 동업 계약·자금 흐름·정산 자료도 있는데, 이렇게 동업 수익 배분 분쟁이 사기로 고소된 상황에서 편취 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '동업 수익 배분 분쟁 사기 고의·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동업 수익 배분 분쟁 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '동업 정산·수익 배분 다툼이 사기 고의로 고소돼 억울하다면, 형법 제347조 편취 범의 판단과 민사 채무불이행 구별·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·동료와 함께 동업으로 사업을 시작하며 각자 자금을 대고 역할을 나눠 수익을 배분하기로 했는데, 사업이 기대만큼 성과를 내지 못하거나 정산·수익 배분을 두고 이견이 생기자, 상대가 ‘처음부터 나를 속여 투자금·운영자금을 받아 가로챈 것’이라며 저를 사기로 고소해, 한순간에 사기 피의자로 몰린 분의 상황입니다. 저는 동업 당시 실제로 사업장을 함께 운영하고 비용을 집행했으며 정산이 늦어졌거나 손실이 났을 뿐 처음부터 돈을 편취할 생각은 전혀 없었는데, 사업 부진과 배분 분쟁이라는 민사적 다툼이 형사 사기 고의로 둔갑해 억울하고 막막하실 거예요. 동업 관계에서는 자금이 오가고 손익이 엇갈리는 것이 자연스러운데도 결과가 나빠졌다는 이유만으로 ‘처음부터 속였다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 동업 계약의 경위와 자금 흐름, 실제 사업 운영과 정산 내역을 차분히 정리해 자금을 받을 당시 편취할 고의가 없었고 실제로 사업을 함께했다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 재물·이익을 받을 당시 상대를 기망하여 착오에 빠뜨리고 편취할 고의가 있어야 하는 영역입니다. 판례는 사기죄의 성립 여부는 행위 당시를 기준으로 판단해야 하므로, 돈을 받을 당시에는 변제·이행할 의사와 능력이 있었다면 그 후 이행하지 못하였더라도 이는 민사상 채무불이행에 불과하고, 상대가 위험을 예상할 수 있었던 관계 등에서는 이후 제대로 이행하지 못했다는 사실만으로 편취 범의를 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 자금을 받을 당시의 이행 의사·능력과 실제 사업 운영을 종합해 편취 고의가 인정되는지를 가려 다툴 여지가 있는 영역입니다. 동업 경위·자금 흐름 + 실제 운영·정산 + 편취 고의 다툼 결합은 ‘사기 고의 부재·민사 채무불이행 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 동업 경위 정리 ② 자금 흐름·운영 ③ 정산·손익 검토 ④ 편취 고의 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동업 수익 배분 분쟁 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·자금 흐름·정산·편취 고의·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동업 경위 정리</strong> — 동업 시작 경위·역할 분담·계약·약정 정리.</li>\n<li><strong>② 자금 흐름·운영</strong> — 투자·운영자금 흐름과 실제 사업 운영·비용 집행 정리.</li>\n<li><strong>③ 정산·손익 검토</strong> — 정산 지연·손실 발생 경위와 배분 다툼의 성격 검토.</li>\n<li><strong>④ 편취 고의</strong> — 자금을 받을 당시 이행 의사·능력이 있었는지 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 사업 운영·정산 자료가 편취 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자금을 받을 당시 편취할 고의가 있었는지(사기), 아니면 실제 동업 후 손실·정산 다툼이 생긴 것인지(민사 채무불이행)가 판단의 분기점입니다. 동업 경위와 자금 흐름, 실제 운영·정산 자료를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동업·자금 자료 보존 (즉시)</strong> — 동업 계약·약정·투자·운영자금 이체·비용 집행 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 실제 운영·정산 정리 (즉시)</strong> — 사업장 운영·거래·매출·손익·정산 내역과 배분 다툼의 경위를 정리.</li>\n<li><strong>3단계 — 편취 고의·구별 검토 (병행)</strong> — 자금 수령 당시 이행 의사·능력, 민사 채무불이행과의 구별점을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동업 수익 배분 분쟁 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·자금·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>동업 계약서·약정·역할 분담 자료 (동업 경위)</strong></li>\n<li><strong>투자·운영자금 이체·입출금 내역 (자금 흐름)</strong></li>\n<li><strong>사업장 운영·거래·매출·비용 집행 자료 (실제 운영)</strong></li>\n<li><strong>정산·손익·배분 관련 자료 (정산 정황)</strong></li>\n<li><strong>당시 대화·메시지·회계 자료 (경위 입증)</strong></li>\n<li><strong>손실·경영 상황을 보여주는 객관 자료</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동업 시작 경위와 자금 흐름, 실제 사업 운영·비용 집행·정산 내역을 시간순으로 정리하면 자금을 받을 당시 편취 고의가 있었는지, 아니면 손실·정산 다툼인지를 다투는 데 도움이 됩니다. 사업이 실제로 운영됐고 손실·정산 지연이 경영 상황에서 비롯됐다는 객관 자료를 함께 정리해 민사 채무불이행과의 구별점을 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 자금을 받을 당시 편취할 고의가 있었는지.</li>\n<li><strong>실제 운영</strong> — 동업으로 실제 사업을 운영·집행했는지.</li>\n<li><strong>민사·형사 구별</strong> — 손실·정산 다툼이 채무불이행인지 사기인지.</li>\n<li><strong>손익 경위</strong> — 손실·정산 지연이 경영 상황에서 비롯됐는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용·거래에서 편취 범의의 판단 기준과 채무불이행의 구별',
        summary:
          '대법원 2012도14516(대법원, 2016.04.28 선고) 영역에서 법원은 사기죄가 성립하는지는 행위 당시를 기준으로 판단하여야 하므로, 소비대차 거래에서 차주가 돈을 빌릴 당시에는 변제할 의사와 능력을 가지고 있었다면 그 후에 변제하지 못하였더라도 이는 민사상 채무불이행에 불과하고 형사상 사기죄가 성립하지 않는다고 보았습니다. 그리고 대주와 차주 사이의 인적 관계나 계속적인 거래 관계 등으로 대주가 장래의 변제 지체·변제불능에 대한 위험을 예상하거나 충분히 예상할 수 있었던 경우에는, 차용 당시 중요한 사항에 관하여 허위 사실을 말하였다는 등의 다른 사정이 없다면, 그 후 제대로 변제하지 못하였다는 사실만으로 변제능력에 관하여 대주를 기망하였다거나 편취의 범의가 있었다고 단정할 수 없다고 판시했습니다. 동업 자금이 오간 뒤 손실·정산 다툼이 사기로 고소된 사안을 살펴볼 때에도, 자금을 받을 당시의 이행 의사·능력을 기준으로 편취 고의와 민사 채무불이행을 구별해 방어를 검토해볼 수 있습니다.',
        takeaway: '동업 경위·자금 흐름 + 실제 운영·정산 + 편취 고의 다툼 결합 시 사기 고의 부재·채무불이행 구별 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '사업이 잘 안됐다는 이유로 사기가 되나요?',
        answer:
          '<strong>자금을 받을 당시 편취 고의가 있었는지가 핵심인 영역입니다.</strong> 실제 운영·자금 흐름·손익 자료를 정리하세요.',
      },
      {
        question: '정산이 늦어진 것도 사기로 보나요?',
        answer:
          '<strong>정산 지연은 채무불이행과 사기를 구별해 따지는 영역입니다.</strong> 정산 경위와 손익 자료를 정리하세요.',
      },
      {
        question: '동업 계약서가 있으면 방어에 도움이 되나요?',
        answer:
          '<strong>계약·자금 흐름은 실제 동업을 뒷받침하는 자료인 영역입니다.</strong> 계약·이체·운영 내역을 함께 정리하세요.',
      },
      {
        question: '상대가 처음부터 속였다고 주장해요.',
        answer:
          '<strong>행위 당시 이행 의사·능력이 기준이 되는 영역입니다.</strong> 자금 수령 당시 정황과 운영 자료를 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>동업 경위·자금 흐름 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '동업 수익 배분 빙자 무고 방어', href: '/guide/fraud/fraud-joint-business-profit-distribution-pretext-falsely-accused-defense' },
      { label: '동업 수익 분배 무고 방어', href: '/guide/fraud/fraud-business-partnership-profit-distribution-falsely-accused-defense' },
      { label: '동업 자금 유용 무고 방어', href: '/guide/fraud/fraud-joint-business-fund-misappropriation-falsely-accused-defense' },
      { label: '동업 종잣돈 무고 방어', href: '/guide/fraud/fraud-joint-business-seed-money-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-subway-escalator-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-subway-escalator-touch-report-track',
    keyword: '지하철 에스컬레이터 추행 신고',
    questionKeyword: '지하철역 에스컬레이터를 타고 오르내리는데 바로 뒤·옆에 서 있던 사람이 몸을 바짝 붙이더니 엉덩이·허리 쪽에 손을 대거나 밀착해 비벼 너무 불쾌하고 수치스러웠어요. 좁은 계단식 에스컬레이터라 피하기도 어려웠고 사람이 많아 누가 했는지 곧바로 붙잡거나 항의하기도 힘들었어요. 처음엔 사람이 붐벼 닿은 건가 싶었지만 접촉이 노골적이고 반복돼 단순한 스침이 아니라 추행이라는 생각이 들었어요. 이런 지하철 에스컬레이터 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '지하철 에스컬레이터 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '지하철 에스컬레이터 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '지하철 에스컬레이터에서 뒤·옆 사람이 신체를 만지는 접촉을 당해 수치스러웠다면, 강제추행·공중밀집장소 추행 해당성 판단과 CCTV 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지하철·전철역의 계단식 에스컬레이터나 무빙워크를 타고 오르내리던 중, 바로 뒤나 옆에 서 있던 사람이 좁고 붐비는 상황을 틈타 몸을 바짝 붙이더니 엉덩이·허리·허벅지 등 신체에 손을 대거나, 몸을 밀착해 비비는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 에스컬레이터는 폭이 좁고 앞뒤로 서게 되어 몸을 피하거나 자리를 옮기기 어렵고, 사람이 많아 누가 했는지 곧바로 붙잡거나 큰 소리로 항의하기도 힘든 데다, 짧은 시간에 이동이 끝나 순식간에 상황이 지나가버려, 처음에는 ‘붐벼서 어쩌다 닿은 건가’ 싶었지만 접촉이 멈추지 않고 손의 움직임이 점점 노골적이어서 단순한 우연이 아니라 혼잡을 틈탄 추행이라는 생각이 들었지만, 정신을 차리고 보니 가해자는 인파 속으로 사라져 신고해도 ‘붐벼서 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 매일 이용하는 이동 공간에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를, 성폭력처벌법 제11조는 대중교통수단·공중이 밀집하는 장소에서 사람을 추행한 경우를 처벌하는 영역입니다. 좁고 붐비는 에스컬레이터에서 의사에 반해 엉덩이·허리 등 민감한 부위를 만지거나 밀착해 비빈 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 어떤 행위가 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이른 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 하고, 문제가 되는 행위마다 추행행위와 그에 대한 고의가 인정되어야 한다고 본 사례 흐름이 있는 영역으로, 혼잡을 틈탄 접촉이 추행에 해당하는지를 가려 다툴 여지가 있습니다. 좁은 동선 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합은 ‘에스컬레이터 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 에스컬레이터 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 역명·시간대·에스컬레이터 위치·혼잡도 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허리 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 혼잡·좁은 동선을 이용한 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 붐벼서 닿았다는 변명과 달리, 좁고 붐비는 동선을 틈타 의사에 반해 민감 부위를 만지거나 밀착해 비볐는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 역사·에스컬레이터 CCTV, 교통카드 이용 내역을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 역명·시간대·에스컬레이터 위치·접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·객관 자료 확보 (즉시)</strong> — 역사·에스컬레이터·개찰구 CCTV, 교통카드·결제 내역, 목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰·지하철보안관에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 에스컬레이터 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>역명·이용 시간대·에스컬레이터 동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>역사·에스컬레이터·개찰구 CCTV 보존 요청 자료</strong></li>\n<li><strong>교통카드·결제·이용 입증 자료</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 지하철 역사에는 에스컬레이터·개찰구·승강장에 CCTV가 많으므로 시간대와 위치를 특정해 역무실·경찰을 통해 신속히 보존을 요청하고, 보관 기간이 짧으니 서둘러야 합니다. 좁은 동선에서 우연으로 설명되지 않는 접촉이 반복됐다는 점과 직후 반응을 구체적으로 기록하면 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 스침을 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>추행 고의</strong> — 의사에 반하는 접촉과 추행 고의가 인정되는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘붐벼서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·교통카드·동행자로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고·지하철경찰대</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 판단 방법과 행위마다의 추행 고의',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄에서 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자기결정권을 침해하는 것을 의미하며, 어떤 행위가 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황과 그 시대의 성적 도덕관념을 종합적으로 고려해 신중히 결정해야 한다고 보았습니다. 또 강제추행죄는 특별한 사정이 없는 한 행위마다 1개의 범죄가 성립하고, 성립하려면 문제가 되는 행위마다 폭행·협박 외에 추행행위와 그에 대한 고의가 인정되어야 하며, 추행의 고의에 대한 증명이 부족하다면 설령 유죄의 의심이 가더라도 유죄로 판단할 수 없다고 판시했습니다. 좁고 붐비는 에스컬레이터에서 접촉이 이루어진 사안을 살펴볼 때에도, 접촉의 구체적 태양과 정황을 종합해 추행 해당성과 고의를 기준으로 강제추행·공중밀집장소 추행 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '좁은 동선 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합 시 에스컬레이터 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '붐벼서 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 스침을 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 기록하세요.',
      },
      {
        question: '순식간에 지나가 증거가 없는데 신고되나요?',
        answer:
          '<strong>CCTV·교통카드·목격자로 정황을 보강할 수 있는 영역입니다.</strong> 시간대·위치를 특정해 보존을 요청하세요.',
      },
      {
        question: '누가 했는지 못 봤는데 가해자를 특정할 수 있나요?',
        answer:
          '<strong>역사 CCTV·개찰구 기록으로 특정을 다툴 수 있는 영역입니다.</strong> 이용 시간대와 동선을 특정해 자료를 모으세요.',
      },
      {
        question: '그 자리에서 항의하지 못했어요.',
        answer:
          '<strong>즉시 대응하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지·자리 이동을 정리하세요.',
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
      { label: '혼잡 버스 출퇴근 추행 신고', href: '/guide/sex-crime/sex-crime-crowded-bus-rush-hour-touch-report-track' },
      { label: '엘리베이터 밀폐공간 추행 신고', href: '/guide/sex-crime/sex-crime-elevator-enclosed-space-touch-report-track' },
      { label: '축제 인파 추행 신고', href: '/guide/sex-crime/sex-crime-festival-crowd-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-gym-pt-guidance-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-gym-pt-guidance-touch-report-track',
    keyword: '헬스장 PT 지도 중 추행 신고',
    questionKeyword: '헬스장에서 PT(개인 트레이닝)를 받는데 트레이너가 ‘자세를 교정해준다, 자극 부위를 잡아준다’며 필요 이상으로 가슴·엉덩이·허벅지 안쪽 등 민감한 부위에 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 운동 지도라 그런가 싶어 참았는데 접촉이 반복되고 노골적이어서 단순 지도가 아니라 추행이라는 생각이 들었어요. 일대일 수업이라 목격자가 없고 트레이너는 ‘지도 과정일 뿐’이라고 할 것 같아 걱정돼요. 이런 헬스장 PT 지도 중 추행을 신고하려면 어떤 절차로 진행되는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '헬스장 PT 지도 중 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 지도 중 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '헬스장 PT 지도를 빌미로 트레이너가 신체를 만지는 접촉을 당해 수치스러웠다면, 강제추행 신고 절차와 CCTV·수업 기록 확보·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·PT 스튜디오에서 개인 트레이닝(PT)을 받던 중, 트레이너가 ‘자세를 교정해준다, 자극 부위를 잡아준다, 호흡을 봐준다’며 운동 지도라는 명목으로 필요 이상 가슴·엉덩이·허벅지 안쪽·골반 등 민감한 부위에 손을 대거나, 뒤에서 몸을 바짝 밀착하는 등 단순한 운동 보조로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘운동 지도라 그런가’ 싶어 참거나 어색하게 넘어갔는데, 접촉이 특정 부위에 반복되고 점점 노골적이어서 단순 지도가 아니라 추행이라는 생각이 들었지만, 일대일 수업이라 다른 목격자가 없고 트레이너가 ‘정상적인 지도 과정이었다’고 해명할 것 같아 신고해도 받아들여질지 막막하실 거예요. 건강을 위해 돈을 내고 배우러 간 자리에서 지도자라는 신뢰를 빌미로 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행으로 정해 처벌하고, 이때 폭행은 상대의 의사에 반하는 유형력의 행사를 포함하는 것으로 해석되는 영역입니다. 운동 지도에 필요한 범위를 넘어 의사에 반해 민감한 부위를 반복적으로 만지거나 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강간·강제추행 등 성폭력범죄의 성립과 관련해 피해자의 상태와 행위 당시의 구체적 사정을 신중히 살펴야 하고, 행위자에게 범행 성립에 필요한 인식이 있었는지도 함께 판단해야 한다고 본 사례 흐름이 있는 영역으로, 지도를 빙자한 접촉이 추행에 해당하는지와 그 고의를 가려 다툴 여지가 있습니다. 지도 명목 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합은 ‘PT 지도 빙자 추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·수업 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 PT 지도 중 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·수업 정리</strong> — 헬스장·트레이너·수업 일시·구성·PT 계약 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 가슴·엉덩이·허벅지 안쪽 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 지도에 필요한 범위를 넘은 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상 지도라는 해명과 달리, 지도에 필요한 범위를 넘어 의사에 반해 민감 부위를 반복적으로 만지거나 밀착했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 헬스장 CCTV·수업 기록·대화를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·수업 자료 보존 (즉시)</strong> — 헬스장·트레이너·수업 일시·접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·수업 자료 확보 (즉시)</strong> — 운동장·수업 공간 CCTV, PT 계약·예약·출입 기록, 목격자·다른 회원 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 지도 중 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>헬스장·트레이너·수업 일시 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>운동장·수업 공간 CCTV 보존 요청 자료</strong></li>\n<li><strong>PT 계약·예약·출입·결제 기록 (이용 입증)</strong></li>\n<li><strong>트레이너와의 대화·메시지·항의 기록</strong></li>\n<li><strong>목격자·다른 회원 진술·연락처</strong></li>\n<li><strong>당일·직후 심경·진료·상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헬스장 운동 공간에는 CCTV가 설치된 경우가 많으므로 수업 시간대와 위치를 특정해 업주·경찰을 통해 신속히 보존을 요청하고, 보관 기간이 짧으니 서둘러야 합니다. 일대일 수업이라 목격자가 없더라도 접촉 부위·방식·반복과 직후 나눈 대화·항의, 다른 회원의 유사 경험을 함께 기록하면 지도에 필요한 범위를 넘은 추행인지를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도에 필요한 범위를 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>지도 명목 항변</strong> — ‘정상적인 자세 교정’ 해명에 가려지지 않는지.</li>\n<li><strong>추행 고의</strong> — 의사에 반하는 접촉과 추행 고의가 인정되는지.</li>\n<li><strong>반복성</strong> — 특정 부위에 접촉이 반복됐는지.</li>\n<li><strong>피해자 진술</strong> — 목격자 없이도 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성폭력범죄의 성립과 행위자의 인식 판단',
        summary:
          '대법원 2016도4404(대법원, 2021.02.25 선고) 영역에서 법원은 성폭력처벌법 제6조가 신체적인 장애가 있는 사람에 대한 강간·강제추행 등을 가중처벌하는 규정임을 전제로, 여기서 ‘신체적인 장애가 있는 사람’이란 신체적 기능이나 구조 등의 문제로 일상생활이나 사회생활에서 상당한 제약을 받는 사람을 의미한다고 보았습니다. 그러면서 장애와 관련된 피해자의 상태는 개인별로 차이가 있어 그 상태를 충분히 고려해야 하고 비장애인의 시각에서 함부로 장애가 없다고 단정해서는 안 되며, 이 죄가 성립하려면 행위자도 범행 당시 피해자에게 그러한 신체적 장애가 있음을 인식하여야 한다고 판시했습니다. 즉 성폭력범죄의 성립을 판단할 때에는 피해자의 구체적 상태와 함께 행위자의 인식·고의를 신중히 살펴야 한다는 취지입니다. PT 지도를 빙자한 신체 접촉이 문제 된 사안을 살펴볼 때에도, 접촉의 구체적 태양과 지도의 필요 범위, 행위자의 고의를 기준으로 추행 해당 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '지도 명목 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합 시 PT 지도 빙자 추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '자세 교정이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>지도에 필요한 범위를 넘는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 기록하세요.',
      },
      {
        question: '일대일 수업이라 목격자가 없는데 신고되나요?',
        answer:
          '<strong>CCTV·대화·직후 반응으로 정황을 보강할 수 있는 영역입니다.</strong> 수업 시간대와 위치를 특정해 보존을 요청하세요.',
      },
      {
        question: '처음엔 참고 넘어갔는데 뒤늦게 신고해도 되나요?',
        answer:
          '<strong>즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 접촉 반복 정황과 직후 대화를 정리하세요.',
      },
      {
        question: '다른 회원도 비슷한 일을 겪은 것 같아요.',
        answer:
          '<strong>유사 피해는 추행 정황을 뒷받침하는 자료가 되는 영역입니다.</strong> 다른 회원의 경험·진술을 함께 모으세요.',
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
      { label: '헬스장 PT 자세교정 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-posture-correction-touch-report-track' },
      { label: '개인지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-private-tutoring-guidance-pretext-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-taxi-backseat-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-backseat-touch-report-track',
    keyword: '택시 뒷좌석 추행 신고',
    questionKeyword: '늦은 밤 택시를 타고 뒷좌석에 앉아 가는데 기사가 정차·신호 대기 중이거나 안전벨트를 봐준다는 핑계로 뒤로 손을 뻗어 허벅지·어깨·가슴 쪽에 손을 대거나, 성적인 말을 하며 신체를 만져 너무 불쾌하고 무서웠어요. 밀폐된 차 안이라 도망치기도 어려웠고 겁이 나 곧바로 강하게 항의하지 못했어요. 나중에 생각하니 단순 실수가 아니라 명백한 추행인데, 기사는 ‘벨트를 매주려다 닿았다’고 할 것 같아 걱정돼요. 이런 택시 뒷좌석 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '택시 뒷좌석 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '택시 뒷좌석 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '택시 뒷좌석에서 기사가 신체를 만지는 추행을 당해 무서웠다면, 강제추행 해당성 판단과 블랙박스·운행기록 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「늦은 밤이나 인적이 드문 시간에 택시를 타고 뒷좌석에 앉아 이동하던 중, 기사가 신호 대기·정차 중이거나 ‘안전벨트를 매준다, 짐을 봐준다’는 핑계로 뒤로 손을 뻗어 허벅지·어깨·가슴 등 신체에 손을 대거나, 성적인 농담·말을 건네며 몸을 만지는 등 단순한 실수로는 설명되지 않는 접촉을 해 너무 불쾌하고 무서웠던 분의 상황입니다. 밀폐된 차 안에서 운전자와 단둘이 있는 상황이라 곧바로 내리거나 도망치기 어렵고, 겁이 나 큰 소리로 항의하거나 강하게 저항하지 못한 채 목적지까지 참고 온 경우도 많아, 나중에 생각할수록 단순한 접촉이 아니라 명백한 추행이라는 생각이 들지만, 기사가 ‘벨트를 매주려다 어쩌다 닿았다, 그런 의도가 아니었다’고 해명할 것 같아 신고해도 받아들여질지 막막하실 거예요. 안전하게 데려다줄 것이라 믿고 탄 공간에서 겪은 일이라 더 답답하고 무서우셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행으로 정해 처벌하고, 이때 폭행은 상대의 의사에 반하는 유형력의 행사를 포함하는 것으로 해석되는 영역입니다. 밀폐된 택시 안에서 의사에 반해 허벅지·가슴 등 민감한 부위를 만지거나 성적 언동을 곁들인 접촉을 한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄에서 추행에 해당하는지는 피해자의 의사·성별·나이, 행위자와의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 하고, 강제추행죄는 자수범이 아니어서 다양한 형태로 범할 수 있다고 본 사례 흐름이 있는 영역으로, 택시 안에서의 접촉이 추행에 해당하는지를 가려 다툴 여지가 있습니다. 밀폐 공간 이용 + 민감 부위 접촉·성적 언동 + 도주 곤란 결합은 ‘택시 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·운행 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 뒷좌석 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·운행 정리</strong> — 탑승 시간대·승하차 위치·택시 정보·운행 경로 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허벅지·어깨·가슴 접촉·성적 언동·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 밀폐 공간에서 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 벨트를 매주려다 닿았다는 해명과 달리, 밀폐된 차 안에서 의사에 반해 민감 부위를 만지거나 성적 언동을 곁들여 접촉했는지가 판단의 분기점입니다. 접촉 부위·방식·언동과 택시 블랙박스·운행기록·호출 내역을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·운행 자료 보존 (즉시)</strong> — 탑승 시간대·승하차 위치·택시 번호·접촉 부위·방식·언동을 기록·보존.</li>\n<li><strong>2단계 — 블랙박스·운행 자료 확보 (즉시)</strong> — 택시 블랙박스·운행기록, 호출 앱·결제 내역, 승하차 지점 CCTV, 목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 뒷좌석 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>탑승 시간대·승하차 위치·경로 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·성적 언동·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>택시 번호·기사 정보·호출 앱·결제 내역 (택시 특정)</strong></li>\n<li><strong>블랙박스·운행기록 보존 요청 자료</strong></li>\n<li><strong>승하차 지점 CCTV 보존 요청 자료</strong></li>\n<li><strong>당일·직후 메시지·통화·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시는 호출 앱·결제 내역·운행기록으로 차량과 기사를 특정할 수 있고 블랙박스에 음성·영상이 남는 경우가 많으므로, 탑승 시간대와 승하차 지점을 특정해 경찰·운수회사를 통해 신속히 보존을 요청하는 것이 중요합니다. 겁이 나 즉시 항의하지 못했더라도 접촉 부위·방식·성적 언동과 직후 반응을 구체적으로 기록하면 밀폐 공간에서의 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 접촉을 넘는 민감 부위 접촉·성적 언동인지.</li>\n<li><strong>벨트 해명</strong> — ‘벨트를 매주려다 닿았다’ 해명에 가려지지 않는지.</li>\n<li><strong>도주 곤란</strong> — 밀폐 공간에서 즉시 대응이 어려웠던 사정이 고려되는지.</li>\n<li><strong>기사 특정</strong> — 호출·결제·운행기록으로 기사를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄에서 추행의 판단 기준과 범행 형태',
        summary:
          '대법원 2016도17733(대법원, 2018.02.08 선고) 영역에서 법원은 강제추행죄에서 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것을 의미하고, 이에 해당하는지는 피해자의 의사·성별·나이, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합적으로 고려하여 신중히 결정해야 한다고 보았습니다. 또 강제추행죄는 정범 자신이 직접 실행하여야 성립하는 자수범이 아니어서, 처벌되지 않는 타인을 도구로 삼거나 피해자를 도구로 삼아 그 신체를 이용해 추행하는 형태로도 범할 수 있다고 판시했습니다. 밀폐된 택시 안에서 기사가 신체를 만진 사안을 살펴볼 때에도, 접촉의 구체적 태양과 정황을 종합해 의사에 반하는 추행에 해당하는지를 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '밀폐 공간 이용 + 민감 부위 접촉·성적 언동 + 도주 곤란 결합 시 택시 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '벨트를 매주려다 닿았다는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 접촉을 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·성적 언동을 구체적으로 기록하세요.',
      },
      {
        question: '겁이 나 강하게 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>밀폐 공간에서 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·통화를 정리하세요.',
      },
      {
        question: '택시 정보를 몰라도 기사를 특정할 수 있나요?',
        answer:
          '<strong>호출 앱·결제·운행기록으로 특정을 다툴 수 있는 영역입니다.</strong> 탑승 시간대와 승하차 지점을 특정해 자료를 모으세요.',
      },
      {
        question: '블랙박스 영상은 어떻게 확보하나요?',
        answer:
          '<strong>운행기록·블랙박스는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 경찰·운수회사에 즉시 보존을 요청하세요.',
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
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
      { label: '택시 뒷좌석 잠든 승객 추행 신고', href: '/guide/sex-crime/sex-crime-taxi-back-seat-sleeping-passenger-touch-report-track' },
      { label: '택시 승객·기사 추행 신고', href: '/guide/sex-crime/sex-crime-taxi-passenger-driver-touch-report-track' },
      { label: '혼잡 버스 출퇴근 추행 신고', href: '/guide/sex-crime/sex-crime-crowded-bus-rush-hour-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense',
    keyword: '만원버스 접촉 오해 추행 무고 방어',
    questionKeyword: '출퇴근 시간 만원버스에 사람이 빽빽하게 몰린 채 서 있었는데, 버스가 흔들리고 밀리는 과정에서 앞·옆 사람과 몸이 닿았어요. 그런데 옆에 있던 사람이 ‘일부러 몸을 만졌다’며 저를 공중밀집장소 추행으로 신고·고소했어요. 저는 추행할 의도가 전혀 없었고 붐비는 버스에서 밀려 어쩔 수 없이 닿은 것뿐인데, 접촉이 있었다는 이유만으로 한순간에 성추행 가해자로 몰려 너무 억울해요. 버스 혼잡도·이동 경로·손 위치 같은 정황도 있는데, 이렇게 만원버스 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '만원버스 접촉 오해 추행 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '만원버스 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '만원버스에서 밀려 닿은 접촉이 추행으로 고소돼 억울하다면, 공중밀집장소 추행 고의 판단과 간접사실·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출퇴근 시간대 만원버스·혼잡한 시내버스에 사람이 빽빽하게 몰린 채 손잡이를 잡고 서 있었는데, 버스가 출발·정차하거나 급정거하고 승객들이 밀리는 과정에서 앞이나 옆 사람과 몸이 닿을 수밖에 없었고, 그 접촉을 두고 옆에 있던 상대가 ‘일부러 몸을 만졌다, 추행당했다’며 저를 공중밀집장소에서의 추행으로 신고·고소해, 한순간에 성추행 피의자로 몰린 분의 상황입니다. 저는 추행할 의도가 전혀 없었고 붐비는 버스에서 밀리고 흔들려 어쩔 수 없이 닿은 것뿐인데, 신체 접촉이 있었다는 사실과 상대의 일방적 느낌만으로 가해자로 단정될까 봐 억울하고 막막하실 거예요. 혼잡한 대중교통에서는 원치 않는 접촉이 흔히 생기는데도 접촉이 있었다는 이유만으로 ‘고의로 만졌다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 버스의 혼잡도와 이동 경로, 손·가방의 위치, 접촉이 일어난 경위를 차분히 정리해 추행의 고의가 없었고 혼잡으로 인한 불가피한 접촉이었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 성폭력처벌법 제11조의 공중밀집장소에서의 추행죄가 성립하려면, 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 피고인이 추행의 고의를 부인하는 경우 고의와 상당한 관련성이 있는 간접사실을 증명하는 방법으로 판단할 수밖에 없고, 이때 피고인의 나이·경력, 행위에 이르게 된 경위, 구체적 행위 태양, 행위 전후의 정황 등 객관적 사정을 종합해야 하며, 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 혼잡한 버스에서의 접촉 경위와 정황을 종합해 추행 고의가 인정되는지를 가려 다툴 여지가 있는 영역입니다. 혼잡·이동 정황 + 접촉 경위 + 고의 부인·간접사실 다툼 결합은 ‘추행 고의 부재·정황 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·혼잡 정리 ② 접촉 경위·손 위치 ③ 고의 간접사실 검토 ④ 진술 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 만원버스 접촉 오해 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 경위·고의 간접사실·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·혼잡 정리</strong> — 탑승 시간대·노선·혼잡도·이동 경로 정리.</li>\n<li><strong>② 접촉 경위·손 위치</strong> — 밀림·흔들림 경위와 손·가방 위치·자세 정리.</li>\n<li><strong>③ 고의 간접사실 검토</strong> — 추행 고의를 뒷받침·배척하는 간접사실 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술의 일관성·구체성·정황 부합 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 혼잡·경로·손 위치가 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의사에 반해 추행할 고의로 접촉했는지(추행), 아니면 혼잡으로 밀려 불가피하게 닿은 것인지(고의 부재)가 판단의 분기점입니다. 버스 혼잡도와 이동 경로, 손·가방 위치 같은 간접사실을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·혼잡 자료 보존 (즉시)</strong> — 탑승 시간대·노선·혼잡도·승하차 위치·이동 경로를 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 경위·손 위치 정리 (즉시)</strong> — 밀림·흔들림 경위, 손·가방·소지품 위치와 자세를 정리.</li>\n<li><strong>3단계 — 고의 간접사실·진술 검토 (병행)</strong> — 추행 고의를 배척하는 간접사실과 상대 진술의 일관성·정황 부합을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">만원버스 접촉 오해 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>탑승 시간대·노선·혼잡도 자료 (경위)</strong></li>\n<li><strong>교통카드·환승·결제 내역 (이동 입증)</strong></li>\n<li><strong>버스 내·정류장 CCTV 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>손·가방·소지품 위치·자세 정리 (접촉 경위)</strong></li>\n<li><strong>당시 통화·메시지·목적지 정황 (동선 입증)</strong></li>\n<li><strong>목격자·동승자 진술·연락처</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 탑승 시간대·노선·혼잡도와 교통카드·환승 내역, 버스 내·정류장 CCTV를 시간순으로 정리하면 접촉이 혼잡으로 인한 불가피한 것이었는지, 추행할 고의가 있었는지를 다투는 데 도움이 됩니다. 손·가방·소지품의 위치와 자세, 상대 진술이 시점·내용에 따라 달라지거나 객관 정황과 어긋나는 부분을 함께 정리해 고의 간접사실과 진술 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>접촉 경위</strong> — 혼잡·밀림으로 인한 불가피한 접촉이었는지.</li>\n<li><strong>고의 간접사실</strong> — 손 위치·자세·정황이 고의를 배척하는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 객관 정황과 맞는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 고의의 간접사실 증명과 무죄추정의 원칙',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 성폭력처벌법 제11조의 공중 밀집 장소에서의 추행죄가 성립하려면 주관적 구성요건으로서 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사가 있어야 하고, 피고인이 추행의 고의를 부인하는 경우에는 고의와 상당한 관련성이 있는 간접사실을 증명하는 방법으로 판단할 수밖에 없다고 보았습니다. 이때 피고인의 나이·지능·판단능력, 직업과 경력, 행위에 이르게 된 경위와 동기, 피고인과 상대의 관계, 구체적 행위 태양과 행위 전후의 정황 등 객관적 사정을 종합하여야 하고, 고의로 추행하였다고 볼 만한 징표와 어긋나는 사실의 의문점이 해소되어야 한다고 하였습니다. 나아가 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 한다고 판시했습니다. 만원버스에서의 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 혼잡·경위·손 위치 등 간접사실과 진술의 신빙성을 종합해 추행 고의가 증명되는지를 기준으로 방어를 검토해볼 수 있습니다.',
        takeaway: '혼잡·이동 정황 + 접촉 경위 + 고의 부인·간접사실 다툼 결합 시 추행 고의 부재·정황 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '접촉이 있었다는 이유만으로 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 있었는지가 핵심인 영역입니다.</strong> 혼잡·밀림 경위와 손·가방 위치를 정리하세요.',
      },
      {
        question: '붐벼서 밀린 것뿐인데 어떻게 방어하나요?',
        answer:
          '<strong>혼잡·경위는 고의를 배척하는 간접사실이 되는 영역입니다.</strong> 노선·혼잡도·CCTV·교통카드 자료를 모으세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성과 정황 부합을 따지는 영역입니다.</strong> 진술의 일관성·객관 정황 부합 여부를 정리하세요.',
      },
      {
        question: '버스 CCTV로 정황을 밝힐 수 있나요?',
        answer:
          '<strong>버스 내·정류장 영상은 접촉 경위를 보여주는 자료인 영역입니다.</strong> 시간대·노선을 특정해 보존을 요청하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>접촉 경위·손 위치에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '만원버스 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-falsely-accused-defense' },
      { label: '회식 술자리 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
      { label: '클럽 무대 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-club-dance-floor-contact-falsely-accused-defense' },
      { label: '회식 만취 오해 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-intoxicated-misunderstanding-falsely-accused-defense' },
    ],
  },
];
