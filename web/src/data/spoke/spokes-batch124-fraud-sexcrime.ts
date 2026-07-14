import { SpokePage } from '../spoke-pages';

// batch124 fraud(6)+sex-crime(4) — 10개 (2026-07-14)
//
// 고유 존재 이유:
// 1. fraud-forged-check-promissory-note-payment-track — 위조 대출승인서 편취와 분기. '거래대금으로 받은 당좌수표·약속어음이 위조·부도로 판명돼 물품·돈을 편취당함' 위조 유가증권 판단형 피해자 트랙(victim).
// 2. fraud-fuel-quantity-shortfall-adulteration-sale-track — 중고차 조작 판매와 분기. '주유소가 연료를 가열·물타기해 정량에 미달되게 넣어 판매' 정량 미달 편취 판단형 피해자 트랙(victim).
// 3. fraud-nonmedical-clinic-real-operator-prepay-victim-track — 명의대여 사무실 수임료 편취와 분기. '사무장병원(비의료인 실질운영)인 줄 모르고 고액 선결제했다가 부실운영·피해' 실질 운영자 특정 절차형 피해자 트랙(victim).
// 4. fraud-public-charge-exemption-deceit-falsely-accused-defense — 일반 편취고의 무고와 분기. '부담금·분담금 감면을 신청·처리받은 것을 담당공무원 기망 사기라며 고소' 침해행정 영역 사기 성립 판단형 방어 트랙(accused).
// 5. fraud-corporate-system-authority-abuse-record-falsification-falsely-accused-defense — 법인 공전자기록 불실기재 무고와 분기. '회사 전산시스템에 권한으로 입력한 정보가 허위·위작이라며 사전자기록위작·사기로 입건' 허위·목적 판단형 방어 트랙(accused).
// 6. fraud-telecom-line-lending-relay-falsely-accused-defense — 체크카드 교부 사기방조 무고와 분기. '내 명의 휴대폰·인터넷 회선을 개통해 쓰게 해줬다가 타인 통신 매개·전기통신사업법위반·사기로 입건' 매개·제공 예외 판단형 방어 트랙(accused).
// 7. sex-crime-illegal-filming-seizure-participation-right-defense — 준강간 고의 무고와 분기. '불법촬영 혐의로 휴대전화를 압수당했는데 압수·복제 과정에서 변호인 참여권·국선변호인 통지가 누락됨' 위법수집증거 증거능력 판단형 방어 트랙(accused).
// 8. sex-crime-screen-rephotograph-body-image-not-object-defense — 신상정보 제출 무고와 분기. '성관계 영상을 모니터로 재생해 화면을 재촬영·전송한 것이 카메라등이용촬영이라며 기소' 신체 직접촬영 해당성 판단형 방어 트랙(accused).
// 9. sex-crime-telecom-obscenity-revenge-anger-sexual-purpose-victim-track — 일반 통매음 피해와 분기. '헤어진 연인·지인이 분노·보복으로 성적 수치심 주는 메시지를 반복 전송' 성적 목적+분노 결합 절차형 피해자 트랙(victim).
// 10. sex-crime-illegal-filming-caught-in-act-seizure-evidence-victim-track — 온라인 전시 유포 피해와 분기. '공공장소에서 불법촬영범을 현장에서 붙잡아 현행범 체포·임의제출로 이어진 상황의 채증·신고' 현행범 임의제출 증거 절차형 피해자 트랙(victim).

export const spokesBatch124FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-forged-check-promissory-note-payment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-forged-check-promissory-note-payment-track',
    keyword: '물품대금 위조 수표 약속어음 교부 편취 사기',
    questionKeyword:
      '거래처에 물품을 넘기고 대금으로 당좌수표와 약속어음을 받았어요. 은행 발행처럼 보이는 용지에 금액·지급기일·서명·직인까지 다 찍혀 있어서 진짜인 줄 알고 물건을 먼저 넘겼는데, 막상 지급기일에 은행에 가져가니 부도 처리되고 나중엔 그 수표·어음 자체가 위조된 가짜라는 걸 알게 됐어요. 상대는 처음부터 대금을 줄 생각 없이 위조된 종이만 내밀고 물건을 챙겨 잠적한 것 같아요. 진짜 수표처럼 꾸민 위조 유가증권을 대금 대신 건네받고 물품을 편취당한 건데, 이걸 사기로 신고하고 물품·손해를 돌려받을 수 있는지, 위조·행사 부분도 함께 다룰 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '위조 수표·약속어음 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '위조 수표·약속어음 편취 대응 — 5단계 점검 | 로앤가이드',
      description:
        '대금으로 받은 수표·약속어음이 위조·부도로 판명돼 물건만 뺏겨 막막하다면, 형법 제347조 사기와 위조·행사 판단, 신고·회수까지 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「물품을 먼저 넘기고 대금으로 당좌수표나 약속어음을 받았는데, 금액·지급기일·서명·직인까지 진짜처럼 갖춰져 있어 정상 결제로 믿고 물건을 내줬다가, 지급기일에 부도가 나고 뒤늦게 그 수표·어음 자체가 위조된 가짜였다는 사실을 확인한 분의 상황입니다. 유가증권은 은행을 거쳐 결제되는 것이라 겉모습이 정교하면 일반 거래에서는 진위를 일일이 확인하기 어렵고, 그 신뢰를 발판으로 상대가 물건만 챙겨 잠적하면 대금도 물품도 한꺼번에 잃게 되어 사업 자금이 통째로 묶이는 큰 피해로 이어지기 쉽습니다. 특히 처음부터 대금을 지급할 의사 없이 위조된 종이만 내밀고 재물을 받아 갔다면, 단순한 대금 지연이나 부도가 아니라 위조 유가증권으로 신뢰를 만들어 물품을 편취한 것은 아닌지 의심이 짙어지실 거예요. 정상 거래라면 지급기일 전에 발행처·계좌를 확인할 여지가 있는데, 상대가 확인을 재촉하지 못하게 서두르거나 연락처가 곧 끊긴 정황이면 처음부터 편취를 위해 설계된 것은 아닌지 되짚어 볼 필요가 있습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 형법이 유가증권의 발행에 관한 위조·변조와 배서 등에 관한 위조·변조를 구분해 규정하고, 부정수표 단속법이 수표의 발행에 관한 위조·변조를 별도로 다루는 취지를 밝힌 사례 흐름이 있는 영역으로, 이러한 판단에 비추어 위조된 수표·어음을 대금 대신 건네받고 물품을 넘긴 경우에는 사기와 함께 유가증권 위조·행사 부분까지 다툴 여지가 있음을 검토해볼 수 있습니다. 위조 유가증권 교부 + 진정 결제 가장 + 물품 편취·잠적 결합은 ‘위조 수표·어음 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 수표·어음 원본 확보 ② 위조·부도 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 회수·반환 5중 트랙을 검토해볼 수 있는 영역. 받은 수표·어음 실물과 교부 정황, 은행 부도·위조 확인 자료를 시간순으로 모아두면 처음부터 위조 유가증권으로 기망한 것인지를 다투는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 위조 수표·약속어음 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 원본 확보·위조 입증·손해액·신고·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수표·어음 원본 확보</strong> — 받은 수표·어음 실물과 교부 경위·거래 서류 확보.</li>\n<li><strong>② 위조·부도 입증</strong> — 발행처·은행에 부도·위조 여부와 발행 사실을 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 넘긴 물품 가액·회수 불능액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·유가증권 위조·행사 신고 검토.</li>\n<li><strong>⑤ 회수·반환</strong> — 물품 반환·손해배상 등 민사 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지급기일 전에 발행처·계좌를 확인할 여지가 있었는지, 상대가 위조된 수표·어음을 진정한 결제수단인 것처럼 건네고 물품만 챙겼는지가 판단의 분기점입니다. 받은 유가증권 실물을 폐기하지 말고 원본 그대로 보존해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·거래 은행 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 수표·어음 원본 보존 (즉시)</strong> — 받은 실물과 뒷면 배서·교부 대화·거래명세를 원본대로 보존.</li>\n<li><strong>2단계 — 발행·부도 확인 (즉시)</strong> — 지급은행에 부도 사유와 발행 사실·위조 여부를 확인.</li>\n<li><strong>3단계 — 상대 특정 (병행)</strong> — 상호·연락처·계좌·거래 이력으로 상대를 특정.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 또는 경찰서 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 회수·반환 (2개월 내)</strong> — 물품 반환·손해배상 민사 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">위조 수표·약속어음 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 원본·위조·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>받은 수표·약속어음 원본 (위조 대상)</strong></li>\n<li><strong>은행 부도·발행 확인 자료 (위조·부도 입증)</strong></li>\n<li><strong>거래 계약·물품 인도·명세 (편취 대상)</strong></li>\n<li><strong>수표·어음 교부 당시 대화·문자</strong></li>\n<li><strong>상대 상호·연락처·계좌·거래 이력</strong></li>\n<li><strong>연락 두절·잠적 정황 기록</strong></li>\n<li><strong>손해액 산정 근거 (물품 가액·회수 불능액)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 수표·어음은 훼손하지 말고 원본 그대로 보존하고, 지급은행의 부도·위조 확인 결과와 물품 인도 내역을 함께 정리하면 위조 유가증권으로 기망했는지를 다투는 데 도움이 됩니다. 교부 당시 상대가 결제를 재촉하며 확인을 막은 정황이 있다면 함께 기록해두는 것이 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위조 여부</strong> — 받은 수표·어음이 실제 발행처와 무관하게 위조된 것인지.</li>\n<li><strong>기망 고의</strong> — 처음부터 지급 의사 없이 위조 종이로 속였는지.</li>\n<li><strong>편취 대상</strong> — 넘긴 물품·재물이 편취 대상인지.</li>\n<li><strong>죄명 병존</strong> — 사기와 유가증권 위조·행사가 함께 다뤄지는지.</li>\n<li><strong>상대 특정</strong> — 상호·계좌·거래 이력으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>지급은행 영업점 (부도·위조 확인)</strong></li>\n<li><strong>대한상사중재원·소관 거래 분쟁 상담 창구</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 수표의 발행에 관한 위조·변조와 처벌 체계',
        summary:
          '대법원 2019도12022(대법원, 2019.11.28 선고) 영역에서 법원은 형법 제214조가 유가증권의 발행에 관한 위조·변조와 배서·인수·보증 등에 관한 위조·변조를 구분해 규정하고 있고, 부정수표 단속법 제5조는 수표의 강한 유통성과 거래수단으로서의 중요성을 감안해 수표의 발행에 관한 위조·변조를 별도로 다루는 규정이라고 판시했습니다. 그러면서 수표의 배서를 위조·변조한 경우는 위 조항이 정한 수표의 발행에 관한 위조·변조에 해당하지 않는다고 보았습니다. 위조된 수표·어음을 대금 대신 건네받고 물품을 넘긴 사안을 살펴볼 때에도, 받은 유가증권이 발행 부분에서 위조된 것인지에 따라 사기와 함께 위조·행사 부분까지 다툴 여지가 있음을 검토해볼 수 있습니다.',
        takeaway:
          '위조 유가증권 교부 + 진정 결제 가장 + 물품 편취·잠적 결합 시 위조 수표·어음 편취 검토 영역 — 원본 보존·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '수표가 진짜처럼 보였는데도 사기가 되나요?',
        answer:
          '<strong>받은 수표·어음이 위조된 것인지가 핵심인 영역입니다.</strong> 지급은행에 부도 사유와 발행·위조 여부를 확인하세요.',
      },
      {
        question: '부도난 것과 위조된 것은 어떻게 다른가요?',
        answer:
          '<strong>단순 부도와 처음부터 위조된 종이는 다투는 방향이 다른 영역입니다.</strong> 은행 확인 결과와 발행처 조회 자료를 확보하세요.',
      },
      {
        question: '이미 물건을 넘겼는데 돌려받을 수 있나요?',
        answer:
          '<strong>형사 신고와 함께 민사 회수를 검토하는 영역입니다.</strong> 물품 인도 내역과 손해액 근거를 정리하세요.',
      },
      {
        question: '수표·어음 실물을 은행에 내면 증거가 없어지지 않나요?',
        answer:
          '<strong>원본과 확인 결과를 함께 남기는 것이 중요한 영역입니다.</strong> 제출 전 사본·사진을 남기고 접수 내역을 확보하세요.',
      },
      {
        question: '사기와 위조를 같이 신고할 수 있나요?',
        answer:
          '<strong>사기와 유가증권 위조·행사를 함께 다룰 여지가 있는 영역입니다.</strong> 교부 경위와 위조 확인 자료를 준비해 상담하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '금융기관 사칭 위조 대출승인서 편취', href: '/guide/fraud/fraud-financial-institution-impersonation-forged-loan-approval-track' },
      { label: '차용증 있는 사기 민사 구분', href: '/guide/fraud/fraud-loan-with-promissory-note-criminal-civil' },
      { label: '사기 고소 필요서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '사기 피해 어디부터 시작', href: '/guide/fraud/fraud-victim-where-to-start' },
    ],
  },

  // ─── 2. fraud-fuel-quantity-shortfall-adulteration-sale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-fuel-quantity-shortfall-adulteration-sale-track',
    keyword: '주유소 연료 정량 미달 물타기 판매 편취 사기',
    questionKeyword:
      '자주 가는 주유소에서 기름을 넣는데, 표시된 리터만큼 결제했는데도 주행거리나 연비가 이상하게 나빠져서 알아보니 정량보다 적게 넣거나 연료를 가열·물타기해 부피만 부풀려 파는 곳이라는 얘기를 들었어요. 계량기 숫자는 정상처럼 찍히지만 실제로 들어가는 양이 부족한 것 같아요. 소비자로서 표시된 양만큼 값을 냈는데 실제로는 정량에 미달하는 연료를 받은 거라, 이렇게 연료 정량을 속여 판매한 걸 사기나 관련 법 위반으로 신고하고 손해를 다툴 수 있는지, 어디에 어떻게 확인·신고해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '주유소 연료 정량 미달 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '주유소 연료 정량 미달 판매 편취 — 5단계 점검 | 로앤가이드',
      description:
        '표시된 리터만큼 값을 냈는데 정량에 미달하는 연료를 받아 손해가 의심된다면, 정량 미달 판단과 신고·검사 절차를 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「주유소에서 표시된 리터만큼 값을 치렀는데 연비·주행거리가 유독 나빠져, 정량보다 적게 넣거나 연료를 가열·물타기해 부피만 부풀려 판다는 이야기를 접하고 의심하게 된 분의 상황입니다. 계량기 숫자는 정상처럼 찍히기 때문에 소비자가 그 자리에서 실제 주입량을 검증하기는 매우 어렵고, 한두 번은 넘어가더라도 반복되면 적잖은 금액을 부당하게 더 낸 셈이 되어 억울함이 쌓이실 거예요. 표시된 양만큼 값을 냈다면 그만큼의 연료를 받는 것이 정상인데, 실제 주입량이 정량에 미달하거나 인위적으로 부피를 늘려 정량처럼 보이게 한 정황이면, 단순한 계량 오차를 넘어 정량을 속여 판매한 것은 아닌지 따져 볼 필요가 있습니다. 소비자 입장에서는 어디에 정량 검사를 요청하고 무엇을 근거로 손해를 다퉈야 하는지 막막하실 수밖에 없는데, 정량 미달은 계량기 조작뿐 아니라 온도를 높여 부피를 늘리는 방식 등 여러 형태로 나타날 수 있어 정황을 함께 정리해두는 것이 중요합니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하는 영역이고, 석유 및 석유대체연료 사업법은 사용공차를 벗어나 정량에 미달되게 판매하는 행위를 규율하는 영역입니다. 판례는 정량 미달 판매가 반드시 계량기 조작에 한정되지 않고, 연료를 가열해 부피를 늘려 정량에 미달되게 판매한 행위도 정량 미달 판매에 포함될 수 있다고 본 사례 흐름이 있는 영역으로, 이러한 판단에 비추어 계량기 숫자가 정상처럼 찍히더라도 실제 주입량이 정량에 미달하는지를 기준으로 다툴 여지가 있음을 검토해볼 수 있습니다. 정량 미달 정황 + 부피 부풀리기 + 반복 손해 결합은 ‘연료 정량 미달 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 결제·주입 기록 확보 ② 정량 검사 요청 ③ 손해액 정리 ④ 신고·검사 ⑤ 피해 구제 5중 트랙을 검토해볼 수 있는 영역. 결제 영수증과 주유 일시·주입량, 연비 변화 정황을 모아두고 한국석유관리원·관할 지자체에 정량 검사를 요청하면 정량 미달 여부를 확인하며 대응을 준비하는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주유소 연료 정량 미달 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록 확보·정량 검사·손해액·신고·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·주입 기록 확보</strong> — 영수증·주유 일시·표시 주입량·연비 변화 정리.</li>\n<li><strong>② 정량 검사 요청</strong> — 한국석유관리원·관할 지자체에 정량 검사·점검을 요청.</li>\n<li><strong>③ 손해액 정리</strong> — 반복 결제 대비 실제 주입량 부족분 기준 손해 정리.</li>\n<li><strong>④ 신고·검사</strong> — 형법 제347조 사기·석유사업법 위반 신고 검토.</li>\n<li><strong>⑤ 피해 구제</strong> — 소비자원 상담·민사 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정량 미달은 계량기 조작뿐 아니라 온도를 높여 부피를 늘리는 방식 등으로도 나타날 수 있어, 계량기 숫자가 정상처럼 찍히더라도 실제 주입량이 정량에 미달하는지가 판단의 분기점입니다. 결제 기록과 정량 검사 결과를 함께 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 한국석유관리원·관할 지자체 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·주입 기록 보존 (즉시)</strong> — 영수증·카드 내역·주유 일시·표시 주입량을 보존.</li>\n<li><strong>2단계 — 정량 검사 요청 (즉시)</strong> — 한국석유관리원·지자체에 정량 점검·검사를 요청.</li>\n<li><strong>3단계 — 손해 정리 (병행)</strong> — 반복 결제와 연비 변화로 손해 정황을 정리.</li>\n<li><strong>4단계 — 신고·상담 (1주)</strong> — 사기·석유사업법 위반 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 피해 구제 (2개월 내)</strong> — 한국소비자원 상담·민사 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">주유소 연료 정량 미달 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 기록·검사·구제 갈래입니다.</strong></p>\n<ul>\n<li><strong>주유 영수증·카드 결제 내역 (표시 주입량)</strong></li>\n<li><strong>주유 일시·주유소 정보 (거래 특정)</strong></li>\n<li><strong>연비·주행거리 변화 기록 (손해 정황)</strong></li>\n<li><strong>정량 검사·점검 요청·결과</strong></li>\n<li><strong>반복 이용 내역 (손해 누적)</strong></li>\n<li><strong>주유소 상호·사업자 정보</strong></li>\n<li><strong>손해액 산정 근거</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 영수증과 표시 주입량, 연비 변화 정황을 함께 모으고 한국석유관리원·지자체 정량 검사 결과를 확보하면 정량 미달 여부를 확인하는 데 도움이 됩니다. 특정 주유소를 반복 이용했다면 누적 손해를 정리해두는 것이 대응에 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정량 미달</strong> — 실제 주입량이 사용공차를 벗어나 정량에 미달하는지.</li>\n<li><strong>부피 부풀리기</strong> — 가열 등으로 부피를 늘려 정량처럼 보이게 했는지.</li>\n<li><strong>기망·손해</strong> — 표시량을 속여 값을 받아 소비자에게 손해가 생겼는지.</li>\n<li><strong>검사 결과</strong> — 정량 검사로 미달이 확인되는지.</li>\n<li><strong>반복성</strong> — 특정 주유소에서 반복 발생했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국석유관리원 (정량·품질 점검)</strong></li>\n<li><strong>관할 지방자치단체 (석유판매업 지도·단속)</strong></li>\n<li><strong>한국소비자원 1372 (소비자 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정량 미달 판매의 범위(가열로 부피를 늘린 경우)',
        summary:
          '대법원 2017도20752(대법원, 2019.12.13 선고) 영역에서 법원은 구 석유 및 석유대체연료 사업법이 정한 ‘사용공차를 벗어나 정량에 미달되게 판매하는 행위’는 그 수단이 계량기 등 기계 조작에 의한 것으로 한정되지 않는다고 판시했습니다. 그러면서 석유판매업자가 경유를 국제기준온도보다 훨씬 높게 가열해 부피를 증가시킨 다음 판매한 행위도, 기준온도로 환산했을 때 사용공차를 초과해 정량에 미달하는 것으로 측정되면 정량 미달 판매에 포함된다고 보았습니다. 계량기 숫자가 정상처럼 찍히는 주유소에서 정량 미달이 의심되는 사안을 살펴볼 때에도, 실제 주입량이 정량에 미달하는지를 기준으로 정량 검사와 신고를 준비할 수 있음을 검토해볼 수 있습니다.',
        takeaway:
          '정량 미달 정황 + 부피 부풀리기 + 반복 손해 결합 시 연료 정량 미달 편취 검토 영역 — 정량 검사·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '계량기 숫자는 정상인데도 정량 미달일 수 있나요?',
        answer:
          '<strong>연료를 가열해 부피를 늘리는 방식 등으로도 정량 미달이 될 수 있는 영역입니다.</strong> 한국석유관리원에 정량 검사를 요청하세요.',
      },
      {
        question: '소비자가 정량 미달을 어떻게 확인하나요?',
        answer:
          '<strong>정량 검사·점검을 관계 기관에 요청하는 영역입니다.</strong> 영수증·주유 일시·주입량을 준비해 검사를 요청하세요.',
      },
      {
        question: '한 번이 아니라 계속 그런 것 같은데 손해를 다툴 수 있나요?',
        answer:
          '<strong>반복 이용에 따른 누적 손해를 정리하는 영역입니다.</strong> 반복 결제 내역과 연비 변화를 함께 기록하세요.',
      },
      {
        question: '어디에 먼저 신고해야 하나요?',
        answer:
          '<strong>정량·품질은 한국석유관리원과 관할 지자체에서 다루는 영역입니다.</strong> 결제 기록을 준비해 검사·점검을 요청하세요.',
      },
      {
        question: '민사로 돈을 돌려받을 수도 있나요?',
        answer:
          '<strong>형사 신고와 별도로 소비자 피해 구제를 검토하는 영역입니다.</strong> 소비자원 상담과 손해액 근거를 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고차 주행거리 조작 매매 추적', href: '/guide/fraud/fraud-secondhand-car-mileage-tampering-track' },
      { label: '중고차 주행거리 되돌림 추적', href: '/guide/fraud/fraud-used-car-odometer-rollback-track' },
      { label: '사기 고소 준비', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '사기 피해 어디부터 시작', href: '/guide/fraud/fraud-victim-where-to-start' },
    ],
  },

  // ─── 3. fraud-nonmedical-clinic-real-operator-prepay-victim-track ───
  {
    domain: 'fraud',
    slug: 'fraud-nonmedical-clinic-real-operator-prepay-victim-track',
    keyword: '사무장병원 비의료인 실질운영 선결제 편취 사기',
    questionKeyword:
      '광고를 보고 찾아간 병원에서 장기 치료·시술 패키지를 권유받아 수백만 원을 선결제했어요. 상담과 운영은 원장이 아니라 이른바 실장·이사라는 사람이 다 주도했고, 나중에 알고 보니 실제로는 의료인이 아닌 사람이 자금을 대고 병원을 세워 운영하는 이른바 사무장병원이었어요. 얼마 지나지 않아 병원이 문을 닫거나 진료가 부실해져 남은 치료를 받지 못했는데, 명의를 빌려준 원장은 자기는 이름만 걸었다며 책임을 미루고 실질 운영자는 연락이 안 돼요. 의료인이 직접 운영하는 병원인 줄 알고 선결제했는데 비의료인이 실질 운영하며 돈을 받고 방치한 것 같아요. 이런 사무장병원 선결제 편취에서 실질 운영자를 어떻게 특정해 대응하는지 점검해볼 수 있나요?',
    ctaKeyword: '사무장병원 선결제 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사무장병원 선결제 편취 대응 — 5단계 점검 | 로앤가이드',
      description:
        '의료인이 운영하는 줄 알고 낸 치료비가 사무장병원 폐업·부실로 묶여 막막하다면, 실질 운영자 특정과 신고·회수를 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「광고를 보고 찾아간 병원에서 장기 치료·시술 패키지를 권유받아 수백만 원을 선결제했는데, 상담과 운영을 원장이 아니라 실장·이사라는 사람이 주도했고 뒤늦게 그곳이 의료인이 아닌 사람이 자금을 대고 세워 운영하는 이른바 사무장병원이었다는 사실을 알게 된 분의 상황입니다. 환자는 원장이 직접 진료하고 책임지는 병원이라 믿고 큰돈을 미리 냈는데, 얼마 지나지 않아 병원이 문을 닫거나 진료가 부실해져 남은 치료를 받지 못하면, 건강 문제로 찾은 곳에서 오히려 금전 피해까지 겹쳐 막막함이 배가되실 거예요. 게다가 명의를 빌려준 원장은 ‘이름만 걸었을 뿐’이라며 책임을 미루고, 실제 자금을 대고 운영하던 사람은 연락이 끊기면, 누구에게 남은 치료비를 물어야 할지조차 알기 어려워 발만 동동 구르게 되기 쉽습니다. 의료인이 직접 운영하는 병원인 줄 알고 선결제했는데 실제로는 비의료인이 개설·운영을 주도하며 돈을 받고 방치한 정황이면, 단순한 폐업이 아니라 실질 운영자가 누구인지를 가려 책임을 물어야 하는 사안일 수 있습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하는 영역이고, 의료법은 의료인·의료법인 등이 아닌 자의 의료기관 개설을 제한하는 영역입니다. 판례는 의료법인 명의로 개설된 의료기관을 실질적으로 비의료인이 개설·운영했다고 보려면 비의료인이 개설·운영에 주도적으로 관여했는지 등을 기준으로 판단해야 한다고 본 사례 흐름이 있는 영역으로, 이러한 판단기준에 비추어 상담·운영·자금·수익 귀속을 실제로 누가 주도했는지를 가려 실질 운영자를 특정할 여지가 있음을 검토해볼 수 있습니다. 비의료인 실질 운영 + 선결제 유도 + 폐업·방치 결합은 ‘사무장병원 선결제 편취’ 대응이 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 실질 운영자 확인 ③ 손해액 정리 ④ 형사 신고 ⑤ 회수·구제 5중 트랙을 검토해볼 수 있는 영역. 광고·상담에서 누가 원장으로 소개됐고 실제 상담·운영·자금을 누가 주도했는지를 대화와 서류로 확인해두면 실질 운영자를 특정해 책임을 묻는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사무장병원 선결제 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·실질 운영자·손해액·신고·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 광고·상담·치료 계약·선결제 내역 정리.</li>\n<li><strong>② 실질 운영자 확인</strong> — 상담·운영·자금·수익 귀속을 누가 주도했는지 확인.</li>\n<li><strong>③ 손해액 정리</strong> — 받지 못한 치료·환급 대상 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·의료법 위반 신고 검토.</li>\n<li><strong>⑤ 회수·구제</strong> — 환급·민사 청구·소비자 피해 구제 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명의를 빌려준 원장과 실제 운영을 주도한 비의료인 중 누가 개설·운영에 주도적으로 관여했는지가 실질 운영자 판단의 분기점입니다. 상담·운영·자금·수익 귀속을 누가 주도했는지를 대화·서류로 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·관할 보건소 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 광고·상담 대화·치료 계약서·선결제 영수증을 보존.</li>\n<li><strong>2단계 — 실질 운영자 확인 (즉시)</strong> — 실장·이사·원장 중 운영·자금을 주도한 사람을 확인.</li>\n<li><strong>3단계 — 보건소·기관 확인 (병행)</strong> — 관할 보건소·건강보험 관련 창구에 개설·운영 형태를 확인.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사기·의료법 위반 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 회수·구제 (2개월 내)</strong> — 환급·민사 청구·소비자 피해 구제를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사무장병원 선결제 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·운영·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원 광고·원장 소개 화면 (거래 조건)</strong></li>\n<li><strong>상담·치료 안내 대화 캡처 (기망 정황)</strong></li>\n<li><strong>치료 계약서·선결제 영수증 (피해 금액)</strong></li>\n<li><strong>실제 상담·운영 주도자 확인 자료</strong></li>\n<li><strong>실장·이사·원장·병원 사업자 정보</strong></li>\n<li><strong>폐업·진료 중단·환불 거부 기록</strong></li>\n<li><strong>받지 못한 치료·환급 대상 정리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상담과 운영을 실제로 누가 주도했는지, 자금과 수익이 누구에게 귀속됐는지를 대화·서류로 확인하면 실질 운영자를 특정하는 데 도움이 됩니다. 관할 보건소·건강보험 관련 창구에 개설·운영 형태를 확인한 결과를 함께 모으면 책임 주체를 가리는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실질 운영자</strong> — 비의료인이 개설·운영에 주도적으로 관여했는지.</li>\n<li><strong>기망 여부</strong> — 의료인이 직접 운영한다고 믿게 했는지.</li>\n<li><strong>명의 원장 책임</strong> — 이름만 빌려준 원장에게도 책임을 물을 수 있는지.</li>\n<li><strong>편취액</strong> — 받지 못한 치료·환급 대상이 피해액인지.</li>\n<li><strong>운영자 특정</strong> — 실장·이사·자금주를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>관할 보건소 (의료기관 개설·운영 확인)</strong></li>\n<li><strong>한국소비자원 1372 (의료·용역 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의료법인 명의 의료기관의 실질 개설·운영자 판단',
        summary:
          '대법원 2017도1807(대법원, 2023.07.17 선고) 영역에서 법원은 의료법인 명의로 개설된 의료기관을 실질적으로 비의료인이 개설·운영했다고 판단하려면, 비의료인이 의료기관의 개설·운영에 주도적으로 관여했는지 등을 기준으로 살펴야 한다고 판시했습니다. 그러면서 비의료인이 자금을 출연하거나 임원 지위에서 관여하는 것은 의료법인의 본질적 특성에 기초해 허용될 수 있는 행위이므로, 그러한 사정만으로 곧바로 비의료인이 의료기관을 개설·운영했다고 단정하기는 어렵고 주도적 관여 여부를 구체적으로 따져야 한다고 보았습니다. 사무장병원으로 의심되는 곳에 선결제했다가 피해를 본 사안을 살펴볼 때에도, 상담·운영·자금·수익 귀속을 실제로 누가 주도했는지를 기준으로 실질 운영자를 특정해 대응할 수 있음을 검토해볼 수 있습니다.',
        takeaway:
          '비의료인 실질 운영 + 선결제 유도 + 폐업·방치 결합 시 사무장병원 선결제 편취 검토 영역 — 실질 운영자 특정·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '원장이 아니라 실장이 다 처리했는데 누구 책임인가요?',
        answer:
          '<strong>실제 개설·운영을 누가 주도했는지가 핵심인 영역입니다.</strong> 상담·운영·자금 주도자를 대화·서류로 확인하세요.',
      },
      {
        question: '이름만 빌려준 원장에게도 물을 수 있나요?',
        answer:
          '<strong>명의 원장의 관여 정도도 함께 검토하는 영역입니다.</strong> 원장의 실제 진료·운영 관여 여부를 확인하세요.',
      },
      {
        question: '병원이 폐업했는데 남은 치료비를 돌려받을 수 있나요?',
        answer:
          '<strong>형사 신고와 함께 환급·민사 회수를 검토하는 영역입니다.</strong> 받지 못한 치료·환급 대상을 정리하세요.',
      },
      {
        question: '사무장병원인지 어떻게 확인하나요?',
        answer:
          '<strong>개설·운영 형태는 관할 보건소 등에서 확인하는 영역입니다.</strong> 병원 사업자 정보와 운영 정황을 준비해 문의하세요.',
      },
      {
        question: '어디에 먼저 상담하면 되나요?',
        answer:
          '<strong>법률·소비자 피해를 함께 상담하는 영역입니다.</strong> 대한법률구조공단 132와 소비자원 상담을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '무자격 명의대여 사무실 수임료 편취', href: '/guide/fraud/fraud-unlicensed-name-lending-professional-office-fee-track' },
      { label: '성형외과 패키지 선결제 폐업 추적', href: '/guide/fraud/fraud-cosmetic-surgery-package-prepay-closure-track' },
      { label: '의료기기 건강식품 허위판매', href: '/guide/fraud/fraud-medical-illegal-product-sale' },
      { label: '사기 고소 필요서류', href: '/guide/fraud/fraud-complaint-required-documents' },
    ],
  },

  // ─── 4. fraud-public-charge-exemption-deceit-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-public-charge-exemption-deceit-falsely-accused-defense',
    keyword: '부담금 감면 신청 담당공무원 기망 사기 무고 방어',
    questionKeyword:
      '개발·건축 관련해서 관청에 부담금(분담금) 감면·면제를 신청해 일부를 감면받았는데, 이후에 담당 공무원이 ‘사실과 다른 자료로 감면을 받아 부담금을 면했다, 이건 국가를 속인 사기다’며 저를 사기 혐의로 고소·입건했어요. 저는 요건에 맞는다고 판단해 신청한 것이고 서류도 실제 사정대로 낸 것인데, 이렇게 관청에 부과권한이 있는 부담금을 감면받은 것을 두고 사기죄로 몰릴 수 있다니 억울해요. 부담금 부과는 관청이 권력으로 하는 것인데 그걸 면했다고 사기가 되는 건지도 헷갈려요. 이런 부담금 감면 관련 사기 혐의에서 사기죄가 성립하는지를 어떻게 다투며 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '부담금 감면 사기 혐의 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '부담금 감면 사기 고소 방어 — 5단계 점검 | 로앤가이드',
      description:
        '관청에 부담금 감면을 받은 것을 사기라며 고소당해 막막하다면, 침해행정 영역 사기 성립 다툼과 방어 준비를 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「개발·건축 등과 관련해 관청에 부담금·분담금의 감면·면제를 신청해 일부를 감면받았는데, 이후 담당 공무원이 ‘사실과 다른 자료로 감면을 받아 부담금 부과를 면했다’며 사기 혐의로 고소·입건해 조사를 받게 된 분의 상황입니다. 요건에 맞는다고 판단해 실제 사정대로 신청했을 뿐인데, 어느 날 갑자기 국가를 속인 사기라는 무거운 죄명으로 몰리면, 행정 절차상 다툼으로 끝날 문제가 형사 사건으로 번진 데 대한 당혹감과 억울함이 한꺼번에 밀려오실 거예요. 특히 부담금 부과는 관청이 법률에 따라 권력작용으로 하는 것인데, 그 부과를 면했다는 사정만으로 재산 편취를 전제로 하는 사기죄가 성립하는지 자체가 헷갈려, 무엇을 근거로 다퉈야 할지 막막하실 수밖에 없습니다. 혐의를 받고 있다면, 감면을 신청한 경위와 제출 자료의 내용, 감면 요건에 대한 판단 근거를 차분히 정리해두는 것이 중요합니다. 사실과 다르게 처음부터 허위 자료로 부담금을 면탈하려 작정한 것처럼 몰린다면, 신청 당시의 사정과 자료의 진정성, 감면 요건에 관한 해석을 구체적으로 밝히는 것이 필요합니다. 관청이 권력작용으로 부과하는 부담금의 부과권한은 사기죄가 보호하는 재산권과 같은 것으로 볼 수 있는지부터 따져야 하는 영역입니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하는 영역입니다. 판례는 기망행위로 국가적·공공적 법익을 침해하는 경우라도 재산권 침해와 동일하게 평가할 수 있는 때에는 사기죄가 성립할 수 있으나, 부과권자가 권력작용으로 부담금을 부과하는 침해행정 영역에서 일반 국민이 담당 공무원을 기망해 그 재산권 제한을 면한 경우에는 부과권자의 권력작용을 사기죄의 보호법익인 재산권과 동일하게 평가할 수 없어 사기죄가 성립하지 않는다고 본 사례가 있는 영역으로, 이러한 판단에 비추어 부담금 감면이 사기죄에 해당하는지를 다툴 여지가 있습니다. 침해행정 영역 + 부담금 면탈 + 재산권 평가 결합은 ‘부담금 감면 사기 성립’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 신청 경위 정리 ② 자료 진정성 소명 ③ 사기 성립 다툼 ④ 조사 대응 ⑤ 법률 조력 5중 트랙을 검토해볼 수 있는 영역. 감면 신청 경위와 제출 자료, 감면 요건에 관한 판단 근거를 정리해두면 침해행정 영역에서 사기죄가 성립하는지를 다투는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 부담금 감면 사기 혐의 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청 경위·자료·사기 성립·조사 대응·조력 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신청 경위 정리</strong> — 부담금 감면 신청 경위·처리 과정 정리.</li>\n<li><strong>② 자료 진정성 소명</strong> — 제출 자료가 실제 사정에 부합함을 소명.</li>\n<li><strong>③ 사기 성립 다툼</strong> — 침해행정 영역에서 사기죄가 성립하는지 검토.</li>\n<li><strong>④ 조사 대응</strong> — 신청 경위와 요건 판단을 일관되게 설명 준비.</li>\n<li><strong>⑤ 법률 조력</strong> — 변호인 조력·국선변호인 제도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부과권자가 권력작용으로 부과하는 부담금의 부과권한을 사기죄의 보호법익인 재산권과 동일하게 평가할 수 있는지가 판단의 분기점입니다. 침해행정 영역에서 부담금을 면한 것이 사기죄에 해당하는지를 구체적으로 다투는 것이 방어의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 수사·형사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신청 경위 정리 (즉시)</strong> — 감면 신청서·제출 자료·처리 결과를 시간순으로 확보.</li>\n<li><strong>2단계 — 자료 진정성 정리 (즉시)</strong> — 제출 자료가 실제 사정에 맞는 근거를 정리.</li>\n<li><strong>3단계 — 쟁점 정리 (조사 전)</strong> — 침해행정 영역 사기 성립 여부 등 법적 쟁점을 정리.</li>\n<li><strong>4단계 — 조사 대응 (출석 시)</strong> — 신청 경위와 요건 판단 중심으로 진술하고 무리한 추측 진술을 피함.</li>\n<li><strong>5단계 — 법률 조력 (병행)</strong> — 국선변호인 제도, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">부담금 감면 사기 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 신청·자료·조사 갈래입니다.</strong></p>\n<ul>\n<li><strong>부담금 감면 신청서·첨부 자료 (신청 내용)</strong></li>\n<li><strong>감면 처리 결과·통지 (처리 경위)</strong></li>\n<li><strong>제출 자료의 근거·사실관계 정리 (진정성)</strong></li>\n<li><strong>감면 요건에 대한 판단 근거 (해석)</strong></li>\n<li><strong>담당 부서·처리 담당자 응대 기록</strong></li>\n<li><strong>경찰·검찰 출석요구서·사건 서류</strong></li>\n<li><strong>과거 유사 처분·행정 다툼 이력</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 감면 신청 경위와 제출 자료가 실제 사정에 부합하는 근거, 감면 요건에 관한 판단 근거를 정리하면 침해행정 영역에서 사기죄가 성립하는지를 다투는 데 도움이 됩니다. 행정상 부과·다툼과 형사 사기가 어떻게 구별되는지를 함께 정리해두는 것이 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>침해행정 영역</strong> — 부담금 부과가 권력작용에 의한 재산권 제한인지.</li>\n<li><strong>재산권 평가</strong> — 부과권한을 사기죄 보호법익과 동일하게 볼 수 있는지.</li>\n<li><strong>기망·자료</strong> — 제출 자료가 사실과 다른지, 실제 사정에 부합하는지.</li>\n<li><strong>요건 판단</strong> — 감면 요건에 대한 해석·판단이 합리적이었는지.</li>\n<li><strong>행정·형사 구별</strong> — 행정상 다툼과 형사 사기가 구별되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n<li><strong>대한변호사협회 법률상담센터</strong></li>\n<li><strong>관할 관청 담당 부서 (부과·처분 확인)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 침해행정 영역에서 부담금 면탈과 사기죄 성립',
        summary:
          '대법원 2019도2003(대법원, 2019.12.24 선고) 영역에서 법원은 기망행위로 국가적·공공적 법익을 침해하는 경우라도 그와 동시에 사기죄의 보호법익인 재산권을 침해하는 것과 동일하게 평가할 수 있는 때에는 사기죄가 성립할 수 있다고 밝히면서, 부과권자가 재화·용역의 제공과 관계없이 특정 공익사업과 관련해 권력작용으로 부담금을 부과하는 것은 재산권을 제한하는 침해행정에 속한다고 판시했습니다. 그러면서 이러한 침해행정 영역에서 일반 국민이 담당 공무원을 기망해 권력작용에 의한 재산권 제한을 면한 경우에는 부과권자의 직접적인 권력작용을 사기죄의 보호법익인 재산권과 동일하게 평가할 수 없어 사기죄가 성립할 수 없다고 보았습니다. 부담금 감면을 두고 사기 혐의를 받게 된 사안을 살펴볼 때에도, 침해행정 영역에서 부담금을 면한 것이 사기죄에 해당하는지를 기준으로 다툴 여지가 있음을 검토해볼 수 있습니다.',
        takeaway:
          '침해행정 영역 + 부담금 면탈 + 재산권 평가 결합 시 부담금 감면 사기 성립 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '부담금을 감면받은 것도 사기가 되나요?',
        answer:
          '<strong>침해행정 영역에서 부담금을 면한 것이 사기죄에 해당하는지가 핵심인 영역입니다.</strong> 부과의 성격과 신청 경위를 정리하세요.',
      },
      {
        question: '서류를 사실대로 냈는데 왜 사기라고 하나요?',
        answer:
          '<strong>제출 자료의 진정성과 요건 판단이 다뤄지는 영역입니다.</strong> 자료의 근거와 판단 경위를 소명하세요.',
      },
      {
        question: '행정상 다툼과 형사 사기는 어떻게 구별되나요?',
        answer:
          '<strong>행정 부과·처분과 형사 사기를 구별해 다투는 영역입니다.</strong> 부과·처분 경위와 사기 성립 요건을 함께 정리하세요.',
      },
      {
        question: '첫 조사에서 무엇을 조심해야 하나요?',
        answer:
          '<strong>신청 경위와 요건 판단을 일관되게 설명하는 것이 중요한 영역입니다.</strong> 추측 진술을 피하고 변호인 조력을 검토하세요.',
      },
      {
        question: '변호사 도움을 받을 방법이 있나요?',
        answer:
          '<strong>국선변호인 제도를 활용할 수 있는 영역입니다.</strong> 대한법률구조공단 132 상담이나 국선변호인 선정을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '사기 혐의 편취의사 종합 방어', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
      { label: '사기 무고 대응 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 피의자 조사 흔한 실수', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '사기 혐의 변호사 선임 시점', href: '/guide/fraud/fraud-accused-lawyer-retain-timing' },
    ],
  },

  // ─── 5. fraud-corporate-system-authority-abuse-record-falsification-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-corporate-system-authority-abuse-record-falsification-falsely-accused-defense',
    keyword: '회사 전산시스템 권한남용 허위입력 사전자기록위작 무고 방어',
    questionKeyword:
      '회사에서 전산시스템에 실적·거래·재고 같은 정보를 입력하는 업무를 맡아 처리해 왔는데, 뒤늦게 회사나 수사기관이 ‘그 입력이 허위이고 회사 시스템의 전자기록을 위작한 것이다, 그로 인해 사기·손해가 발생했다’며 저를 사전자기록위작·사기(방조) 혐의로 조사하겠다고 해요. 저는 부여받은 권한 범위에서 지시나 업무 관행대로 입력한 것이고, 없는 사실을 지어내 시스템을 속이려 한 게 아니에요. 그런데 권한이 있어도 남용하면 위작이 된다는 말을 들으니 겁이 나요. 이렇게 회사 전산 입력을 두고 사전자기록위작·사기 혐의를 받는 상황에서, 입력이 ‘허위’인지와 목적을 어떻게 다투며 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '전산 허위입력 사전자기록위작 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '사전자기록위작 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '회사 전산 입력을 사전자기록위작·사기라며 조사받아 막막하다면, 허위 여부와 목적 다툼을 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사에서 실적·거래·재고 같은 정보를 전산시스템에 입력하는 업무를 맡아 처리해 왔는데, 뒤늦게 회사나 수사기관으로부터 그 입력이 허위이고 시스템의 전자기록을 위작한 것이며 그로 인해 사기·손해가 발생했다며 사전자기록위작·사기(방조) 혐의로 조사를 받게 된 분의 상황입니다. 부여받은 권한 범위에서 지시나 업무 관행대로 입력했을 뿐인데, 어느 날 갑자기 시스템을 속여 회사 사무처리를 그르치게 한 사람처럼 몰리면, 성실히 일한 대가가 형사 사건이 되어 돌아온 데 대한 억울함과 두려움이 한꺼번에 밀려오실 거예요. 특히 ‘권한이 있어도 남용하면 위작이 된다’는 말 앞에서는, 정당한 업무 처리와 위작의 경계가 어디인지, 무엇을 근거로 다퉈야 할지 막막하실 수밖에 없습니다. 혐의를 받고 있다면, 입력을 하게 된 경위와 권한 범위, 입력 내용이 실제 사실에 부합하는지, 지시·관행이 있었는지를 차분히 정리해두는 것이 중요합니다. 사전자기록위작에서 ‘허위’의 정보 입력이란 입력 내용과 진실이 부합하지 않아 전자기록에 대한 공공의 신용을 위태롭게 하는 경우를 말하고, 여기에는 사무처리를 그르치게 할 목적도 요구되므로, 입력 내용이 사실에 부합하는지와 그러한 목적이 있었는지가 함께 다뤄지는 영역입니다. 사실과 다르게 처음부터 허위 정보를 지어내 시스템을 속이려 한 것처럼 몰린다면, 입력 경위와 권한 범위, 내용의 진정성을 구체적으로 밝히는 것이 필요합니다.」 형법은 사무처리를 그르치게 할 목적으로 타인의 전자기록 등 특수매체기록을 위작·변작한 경우를 사전자기록위작죄로 정하는 영역입니다. 판례는 사전자기록위작에서 ‘허위’의 정보 입력이란 입력 내용과 진실이 부합하지 않아 전자기록에 대한 공공의 신용을 위태롭게 하는 경우를 말하고, 권한을 부여받은 사람이라도 권한을 남용해 허위 정보를 입력함으로써 시스템 설치·운영 주체의 의사에 반하는 전자기록을 생성한 경우가 위작에 포함될 수 있다고 보면서도, ‘사무처리를 그르치게 할 목적’이 필요하다고 본 사례가 있는 영역으로, 이러한 판단에 비추어 입력이 허위인지와 목적이 있었는지를 다툴 여지가 있습니다. 권한 범위 + 허위 여부 + 목적 다툼 결합은 ‘사전자기록위작 성립’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 입력 경위 정리 ② 권한 범위 확인 ③ 허위·목적 다툼 ④ 조사 대응 ⑤ 법률 조력 5중 트랙을 검토해볼 수 있는 영역. 입력 경위와 권한 범위, 입력 내용의 근거와 지시·관행을 정리해두면 허위 여부와 목적을 다투는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전산 허위입력 사전자기록위작 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입력 경위·권한·허위·조사 대응·조력 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 입력 경위 정리</strong> — 어떤 정보를 왜 입력했는지 경위를 정리.</li>\n<li><strong>② 권한 범위 확인</strong> — 부여받은 입력 권한의 범위·업무 관행 확인.</li>\n<li><strong>③ 허위·목적 다툼</strong> — 입력 내용이 사실에 부합하는지, 사무처리를 그르치게 할 목적이 있었는지 검토.</li>\n<li><strong>④ 조사 대응</strong> — 입력 경위와 권한을 일관되게 설명 준비.</li>\n<li><strong>⑤ 법률 조력</strong> — 변호인 조력·국선변호인 제도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사전자기록위작의 ‘허위’란 입력 내용과 진실이 부합하지 않는 경우를 말하고, ‘사무처리를 그르치게 할 목적’도 요구됩니다. 입력 내용이 사실에 부합하는지와 그러한 목적이 있었는지를 구체적으로 다투는 것이 방어의 분기점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 수사·형사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 입력 경위 정리 (즉시)</strong> — 입력한 정보·일시·근거·지시 내역을 시간순으로 확보.</li>\n<li><strong>2단계 — 권한 범위 확인 (즉시)</strong> — 업무 분장·입력 권한·관행을 확인·정리.</li>\n<li><strong>3단계 — 진술 준비 (조사 전)</strong> — 입력 경위와 내용의 근거를 일관되게 설명할 준비.</li>\n<li><strong>4단계 — 조사 대응 (출석 시)</strong> — 권한 범위·입력 근거 중심으로 진술하고 무리한 추측 진술을 피함.</li>\n<li><strong>5단계 — 법률 조력 (병행)</strong> — 국선변호인 제도, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">전산 허위입력 사전자기록위작 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·권한·조사 갈래입니다.</strong></p>\n<ul>\n<li><strong>입력 내역·로그·근거 자료 (입력 경위)</strong></li>\n<li><strong>업무 분장·입력 권한 자료 (권한 범위)</strong></li>\n<li><strong>지시·보고·업무 관행 기록 (정당 업무)</strong></li>\n<li><strong>입력 내용의 사실 근거 자료 (허위 여부)</strong></li>\n<li><strong>관련 담당자·상급자 응대 내역</strong></li>\n<li><strong>경찰·검찰 출석요구서·사건 서류</strong></li>\n<li><strong>과거 유사 사건 연루 이력 없음 소명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입력 경위와 권한 범위, 입력 내용이 실제 사실에 부합하는 근거, 지시·업무 관행을 정리하면 입력이 허위인지와 목적이 있었는지를 다투는 데 도움이 됩니다. 시스템 로그·업무 분장 자료를 삭제하지 말고 그대로 보존하는 것이 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위 여부</strong> — 입력 내용이 진실과 부합하지 않는지.</li>\n<li><strong>목적</strong> — 사무처리를 그르치게 할 목적이 있었는지.</li>\n<li><strong>권한 범위</strong> — 부여받은 권한 안에서 정당하게 입력했는지.</li>\n<li><strong>지시·관행</strong> — 지시나 업무 관행에 따른 입력이었는지.</li>\n<li><strong>사기 결합</strong> — 사기·손해와의 관련성이 인정되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변호사협회 법률상담센터</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사전자기록위작의 ‘허위’ 입력과 목적',
        summary:
          '대법원 2019도11294(대법원, 2020.08.27 선고) 영역에서 법원은 전자기록에 관한 시스템에 ‘허위’의 정보를 입력한다는 것은 입력된 내용과 진실이 부합하지 않아 그 전자기록에 대한 공공의 신용을 위태롭게 하는 경우를 말하고, 형법이 정한 ‘사무처리를 그르치게 할 목적’이란 위작된 전자기록이 사용됨으로써 시스템을 운영하는 주체인 개인·법인의 사무처리를 잘못되게 하는 것을 말한다고 판시했습니다. 그러면서 법인이 설치·운영하는 전산망 시스템의 전자기록은 임직원과의 관계에서 ‘타인’의 전자기록에 해당하고, 권한을 부여받은 사람이라도 그 권한을 남용해 허위 정보를 입력해 운영 주체의 의사에 반하는 전자기록을 생성한 경우가 위작에 포함될 수 있다고 보았습니다. 회사 전산 입력을 두고 사전자기록위작 혐의를 받게 된 사안을 살펴볼 때에도, 입력이 ‘허위’인지와 ‘사무처리를 그르치게 할 목적’이 있었는지를 기준으로 다툴 여지가 있음을 검토해볼 수 있습니다.',
        takeaway:
          '권한 범위 + 허위 여부 + 목적 다툼 결합 시 사전자기록위작 성립 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '권한이 있는데도 입력이 위작이 될 수 있나요?',
        answer:
          '<strong>권한 범위와 입력 내용의 허위 여부가 함께 다뤄지는 영역입니다.</strong> 입력 경위와 권한 범위를 정리하세요.',
      },
      {
        question: '지시대로 입력했는데도 제 책임인가요?',
        answer:
          '<strong>지시·관행과 목적이 함께 검토되는 영역입니다.</strong> 지시·보고 내역과 업무 관행을 확보하세요.',
      },
      {
        question: '입력이 허위가 아니라는 걸 어떻게 밝히나요?',
        answer:
          '<strong>입력 내용이 사실에 부합하는지가 핵심인 영역입니다.</strong> 입력 내용의 근거 자료와 로그를 정리하세요.',
      },
      {
        question: '사기·손해까지 엮이면 어떻게 다투나요?',
        answer:
          '<strong>위작과 사기의 관련성을 구별해 다투는 영역입니다.</strong> 입력과 손해 발생 사이의 관계를 정리하세요.',
      },
      {
        question: '변호사 도움을 받을 방법이 있나요?',
        answer:
          '<strong>국선변호인 제도를 활용할 수 있는 영역입니다.</strong> 대한법률구조공단 132 상담이나 국선변호인 선정을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '법인 설립 범죄이용 불실기재 무고 방어', href: '/guide/fraud/fraud-corporate-registration-criminal-use-false-entry-falsely-accused-defense' },
      { label: '동업 정산 사기 무고 방어', href: '/guide/fraud/fraud-business-settlement-falsely-accused-defense' },
      { label: '사기 혐의 편취의사 종합 방어', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
      { label: '사기 피의자 조사 흔한 실수', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
    ],
  },

  // ─── 6. fraud-telecom-line-lending-relay-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-telecom-line-lending-relay-falsely-accused-defense',
    keyword: '휴대폰 인터넷 회선 명의개통 대여 전기통신사업법 사기 무고 방어',
    questionKeyword:
      '지인이나 업자가 ‘사업용으로 회선이 필요한데 신용이 안 돼서 그러니 명의만 빌려달라, 요금은 자기가 낸다’고 해서 제 명의로 휴대폰·인터넷 회선을 개통해 넘겨줬어요. 그런데 그 회선이 다른 사람들의 통신을 중계·매개하는 데 쓰였고, 저는 전기통신사업법 위반과 사기(방조) 혐의로 조사를 받게 됐어요. 저는 명의만 빌려주면 요금만 내면 되는 줄 알았지, 그 회선으로 타인 통신을 매개하거나 범죄에 쓰일 줄은 몰랐고 대가를 챙긴 것도 아니에요. 오히려 저도 속은 입장인데 회선을 빌려준 것만으로 몰리니 억울해요. 이렇게 명의 회선을 개통해줬다가 전기통신사업법·사기 혐의를 받는 상황에서 어떻게 다투며 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '명의 회선 개통 대여 사기 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '휴대폰 회선 명의대여 사기 방어 — 5단계 점검 | 로앤가이드',
      description:
        '명의만 빌려준 회선이 타인 통신 매개에 쓰여 전기통신사업법·사기로 조사받아 막막하다면, 매개·제공 다툼과 방어를 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인이나 업자가 ‘사업용 회선이 필요한데 신용이 안 되니 명의만 빌려달라, 요금은 자기가 낸다’고 해서 본인 명의로 휴대폰·인터넷 회선을 개통해 넘겨줬다가, 그 회선이 다른 사람들의 통신을 중계·매개하는 데 이용되어 전기통신사업법 위반·사기(방조) 혐의로 조사를 받게 된 분의 상황입니다. 명의만 빌려주면 요금만 내면 되는 줄 알았을 뿐인데, 어느 날 갑자기 자신의 회선이 타인 통신 매개나 범죄에 쓰였다는 이야기를 들으면, 도움을 준다고 한 일이 형사 사건이 되어 돌아온 현실에 머리가 하얘지고 억울함이 밀려오실 거예요. 특히 대가를 챙기기는커녕 오히려 자신도 속은 처지인데, 회선을 빌려준 것만으로 무거운 혐의를 받게 되면 앞으로 어떻게 될지 몰라 불안하실 수밖에 없습니다. 혐의를 받고 있다면, 회선을 개통해 넘기게 된 경위와 상대의 설명, 대가 유무, 실제 사용 목적에 대한 인식을 차분히 정리해두는 것이 중요합니다. 사실과 다르게 처음부터 타인 통신 매개나 범죄에 쓰일 줄 알면서 대가를 받고 회선을 넘긴 것처럼 몰린다면, 명의를 빌려주게 된 경위와 대가가 없었던 사정, 사용 목적을 몰랐던 정황을 구체적으로 밝히는 것이 필요합니다. 전기통신사업법은 전기통신역무를 이용해 타인의 통신을 매개하거나 타인의 통신용으로 제공하는 행위를 규율하면서 일정한 예외를 두고 있어, 회선을 넘긴 행위가 매개·제공에 해당하는지와 예외에 해당하는지가 함께 다뤄지는 영역입니다.」 판례는 전기통신사업법 제30조의 ‘타인의 통신을 매개’한다는 것은 전기통신역무를 이용해 다른 사람들 사이의 통신을 연결해 주는 행위를, ‘타인의 통신용으로 제공’한다는 것은 다른 사람이 통신을 위해 이용하도록 제공하는 행위를 의미한다고 보면서, 그 단서 각호에 해당하는 경우에는 금지되지 않는다고 본 사례가 있는 영역으로, 이러한 판단에 비추어 회선을 넘긴 행위가 매개·제공에 해당하는지와 예외에 해당하는지를 다툴 여지가 있습니다. 명의 회선 개통 + 대가 부존재 + 사용 목적 부지 결합은 ‘회선 매개·제공’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 개통 경위 정리 ② 대가 부존재 입증 ③ 인식·목적 다툼 ④ 조사 대응 ⑤ 법률 조력 5중 트랙을 검토해볼 수 있는 영역. 회선 개통·전달 경위와 상대의 설명, 요금 부담·대가 유무, 사용 목적에 대한 인식을 정리해두면 매개·제공 해당 여부와 인식을 다투는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 명의 회선 개통 대여 사기 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 개통 경위·대가 부존재·인식·조사 대응·조력 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 개통 경위 정리</strong> — 회선을 개통해 넘긴 경위·상대의 설명 정리.</li>\n<li><strong>② 대가 부존재 입증</strong> — 회선 대여의 대가를 받거나 약속한 사실이 없음을 정리.</li>\n<li><strong>③ 인식·목적 다툼</strong> — 타인 통신 매개·범죄 이용을 인식하지 못한 사정 검토.</li>\n<li><strong>④ 조사 대응</strong> — 개통 경위와 인식을 일관되게 설명 준비.</li>\n<li><strong>⑤ 법률 조력</strong> — 변호인 조력·국선변호인 제도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회선을 넘긴 행위가 ‘타인의 통신 매개·제공’에 해당하는지, 단서 각호의 예외에 해당하는지, 그리고 대가와 사용 목적에 대한 인식이 있었는지가 판단의 분기점입니다. 개통 경위와 대가·인식을 구체적으로 밝히는 것이 방어의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 수사·형사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 개통·전달 경위 정리 (즉시)</strong> — 개통 요청 대화·회선 전달·요금 부담 내역을 시간순으로 확보.</li>\n<li><strong>2단계 — 대가 부존재 정리 (즉시)</strong> — 대가 수수·약속이 없었던 사정을 정리.</li>\n<li><strong>3단계 — 진술 준비 (조사 전)</strong> — 개통 경위와 사용 목적에 대한 인식을 일관되게 설명할 준비.</li>\n<li><strong>4단계 — 조사 대응 (출석 시)</strong> — 기망당한 경위 중심으로 진술하고 무리한 인정·추측 진술을 피함.</li>\n<li><strong>5단계 — 법률 조력 (병행)</strong> — 국선변호인 제도, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">명의 회선 개통 대여 사기 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·대가·조사 갈래입니다.</strong></p>\n<ul>\n<li><strong>개통 요청·전달 대화 캡처 (기망 경위)</strong></li>\n<li><strong>회선 개통·명의 관련 서류 (개통 경위)</strong></li>\n<li><strong>요금 부담·정산 내역 (대가 부존재)</strong></li>\n<li><strong>사용 목적을 몰랐음을 보여주는 대화 (인식 정황)</strong></li>\n<li><strong>상대(지인·업자) 연락처·정보</strong></li>\n<li><strong>경찰 출석요구서·사건 관련 서류</strong></li>\n<li><strong>과거 유사 범행 연루 이력 없음 소명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회선을 개통해 넘기게 된 경위와 상대의 설명, 요금 부담·대가 유무, 사용 목적을 몰랐던 정황을 시간순으로 정리하면 매개·제공 해당 여부와 인식을 다투는 데 도움이 됩니다. 스스로 용도를 되물은 대화가 있다면 삭제하지 말고 보존하는 것이 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>매개·제공 해당</strong> — 회선을 넘긴 행위가 타인 통신 매개·제공에 해당하는지.</li>\n<li><strong>예외 해당</strong> — 단서 각호의 예외에 해당하는지.</li>\n<li><strong>대가 관계</strong> — 회선 대여의 대가를 수수·약속했는지.</li>\n<li><strong>인식·목적</strong> — 타인 통신 매개·범죄 이용을 인식했는지.</li>\n<li><strong>연루 이력</strong> — 과거 유사 범행에 연루된 적이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국인터넷진흥원 KISA (통신 관련 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — ‘타인의 통신 매개·제공’의 의미와 예외',
        summary:
          '대법원 2021도3520(대법원, 2021.07.29 선고) 영역에서 법원은 전기통신사업법 제30조 본문의 ‘타인의 통신을 매개’한다는 것은 전기통신사업자가 제공하는 전기통신역무를 이용해 다른 사람들 사이의 통신을 연결해 주는 행위를 의미하고, ‘타인의 통신용으로 제공’한다는 것은 그 역무를 다른 사람이 통신을 위해 이용하도록 제공하는 행위를 의미한다고 판시했습니다. 그러면서 통신이 매개되거나 역무를 제공받은 타인이 매개·제공을 요청하거나 그 행위에 관여했더라도 매개·제공에 해당할 수 있으나, 그 단서 각호의 경우에 해당하면 금지되지 않는다고 보았습니다. 명의 회선을 개통해 넘겼다가 혐의를 받게 된 사안을 살펴볼 때에도, 회선을 넘긴 행위가 매개·제공에 해당하는지와 예외에 해당하는지, 그리고 대가·인식이 인정되는지를 기준으로 다툴 여지가 있음을 검토해볼 수 있습니다.',
        takeaway:
          '명의 회선 개통 + 대가 부존재 + 사용 목적 부지 결합 시 회선 매개·제공 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '명의만 빌려준 건데도 혐의를 받나요?',
        answer:
          '<strong>회선을 넘긴 행위가 매개·제공에 해당하는지가 핵심인 영역입니다.</strong> 개통·전달 경위와 예외 해당 여부를 정리하세요.',
      },
      {
        question: '요금도 제가 안 냈는데 왜 제가 조사받나요?',
        answer:
          '<strong>대가 관계와 인식이 방어 근거가 되는 영역입니다.</strong> 요금 부담·정산 내역과 대가 부존재 사정을 확보하세요.',
      },
      {
        question: '범죄에 쓰일 줄 몰랐다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>사용 목적에 대한 인식으로 판단되는 영역입니다.</strong> 상대의 설명과 용도를 되물은 대화를 보존하세요.',
      },
      {
        question: '첫 조사에서 무엇을 조심해야 하나요?',
        answer:
          '<strong>개통 경위와 인식을 일관되게 설명하는 것이 중요한 영역입니다.</strong> 추측 진술을 피하고 변호인 조력을 검토하세요.',
      },
      {
        question: '변호사 도움을 받을 방법이 있나요?',
        answer:
          '<strong>국선변호인 제도를 활용할 수 있는 영역입니다.</strong> 대한법률구조공단 132 상담이나 국선변호인 선정을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '대출 상환 명목 체크카드 교부 방어', href: '/guide/fraud/fraud-loan-repayment-debit-card-handover-efta-falsely-accused-defense' },
      { label: '보이스피싱 통장 명의대여 방어', href: '/guide/fraud/fraud-voice-phishing-account-lender-defense' },
      { label: '통장 명의대여 무고 방어', href: '/guide/fraud/fraud-account-name-lending-unwitting-falsely-accused-defense' },
      { label: '대포통장 인출책 가담 무고 방어', href: '/guide/fraud/fraud-money-mule-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-illegal-filming-seizure-participation-right-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-illegal-filming-seizure-participation-right-defense',
    keyword: '불법촬영 혐의 압수수색 변호인 참여권 국선변호인 통지 증거능력 방어',
    questionKeyword:
      '불법촬영 혐의로 수사기관이 제 휴대전화를 압수해 갔어요. 그런데 그 휴대전화를 복제해 수사기관 사무실에서 파일을 탐색·출력하는 과정에서 저나 변호인에게 참여할 기회를 제대로 주지 않았고, 국선변호인에게 집행 일시·장소를 통지하지도 않은 것 같아요. 저는 그 과정을 지켜보지도 못했는데 그렇게 확보한 자료가 그대로 증거가 된다니 걱정돼요. 압수·수색 절차에 참여권 보장이나 통지 같은 절차가 지켜지지 않으면 그 증거를 다툴 수 있다는 이야기를 들었는데, 이렇게 불법촬영 혐의에서 압수 절차의 하자와 증거능력을 어떻게 다투며 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '불법촬영 압수 절차 증거능력 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '불법촬영 압수절차 증거능력 방어 — 5단계 점검 | 로앤가이드',
      description:
        '불법촬영 혐의로 휴대전화를 압수당했는데 참여권·통지 없이 자료가 확보돼 막막하다면, 압수 절차 하자와 증거능력 다툼을 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「불법촬영 혐의로 수사기관이 휴대전화를 압수해 간 뒤, 그 저장매체를 복제해 사무실에서 파일을 탐색·출력하는 과정에서 본인이나 변호인에게 참여할 기회를 제대로 보장하지 않았거나 국선변호인에게 집행 일시·장소를 통지하지 않은 정황이 있어 걱정하게 된 분의 상황입니다. 자신은 그 과정을 지켜보지도 못했는데 그렇게 확보된 자료가 그대로 증거로 쓰인다면, 방어할 기회조차 없이 불리해지는 것 같아 두렵고 막막하실 거예요. 혐의를 받고 있다면, 압수·수색이 언제 어떻게 이루어졌는지, 복제·탐색·출력 과정에 참여 기회가 보장됐는지, 변호인에게 집행 통지가 있었는지를 차분히 정리해두는 것이 중요합니다. 사실과 다르게 절차가 모두 적법하게 지켜진 것처럼 넘어간다면, 참여권이 보장되지 않았거나 통지가 누락된 정황을 구체적으로 밝히는 것이 필요합니다. 저장매체 압수·수색에서 복제본을 수사기관 사무실로 옮겨 복제·탐색·출력할 때에는 피압수자나 변호인에게 참여 기회를 보장해야 하고, 이러한 절차가 지켜지지 않으면 그 증거의 능력이 문제 될 수 있는 영역입니다.」 형사소송법은 압수·수색 절차에서 피압수자·변호인의 참여권을 보장하고, 적법한 절차에 따르지 않고 수집한 증거는 원칙적으로 증거로 할 수 없도록 정하는 영역입니다. 판례는 저장매체의 복제본을 수사기관 사무실 등으로 옮겨 복제·탐색·출력하는 경우에도 피압수자나 변호인에게 참여 기회를 보장해야 하고, 피압수자가 참여하지 않겠다는 의사를 밝혔더라도 특별한 사정이 없는 한 그 변호인에게는 미리 집행 일시·장소를 통지해 참여 기회를 별도로 보장해야 하며, 이러한 조치를 취하지 않고 수집한 증거는 원칙적으로 증거능력이 없다고 본 사례가 있는 영역으로, 이러한 판단에 비추어 압수 절차의 하자와 증거능력을 다툴 여지가 있습니다. 참여권 보장 여부 + 변호인 통지 + 증거능력 결합은 ‘압수 절차 위법’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 압수 경위 정리 ② 참여권·통지 확인 ③ 증거능력 다툼 ④ 조사·공판 대응 ⑤ 법률 조력 5중 트랙을 검토해볼 수 있는 영역. 압수·수색 일시와 복제·탐색·출력 경위, 참여 기회 보장·변호인 통지 여부를 정리해두면 절차 하자와 증거능력을 다투는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 불법촬영 압수 절차 증거능력 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 압수 경위·참여권·증거능력·조사 대응·조력 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 압수 경위 정리</strong> — 압수·수색과 복제·탐색·출력 경위를 정리.</li>\n<li><strong>② 참여권·통지 확인</strong> — 피압수자·변호인 참여 기회와 집행 통지가 있었는지 확인.</li>\n<li><strong>③ 증거능력 다툼</strong> — 절차 하자로 증거능력이 문제 되는지 검토.</li>\n<li><strong>④ 조사·공판 대응</strong> — 절차 하자를 일관되게 주장할 준비.</li>\n<li><strong>⑤ 법률 조력</strong> — 변호인 조력·국선변호인 제도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 복제본을 사무실로 옮겨 복제·탐색·출력할 때 참여 기회가 보장됐는지, 변호인에게 집행 통지가 있었는지가 판단의 분기점입니다. 이러한 절차가 지켜지지 않았다면 그 증거의 능력을 구체적으로 다투는 것이 방어의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 수사·형사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 압수 경위 정리 (즉시)</strong> — 압수·수색 일시·장소와 복제·탐색·출력 경위를 확보.</li>\n<li><strong>2단계 — 참여권·통지 확인 (즉시)</strong> — 참여 기회 보장·변호인 집행 통지 여부를 확인.</li>\n<li><strong>3단계 — 쟁점 정리 (조사·공판 전)</strong> — 절차 하자와 증거능력 쟁점을 정리.</li>\n<li><strong>4단계 — 조사·공판 대응 (출석 시)</strong> — 절차 하자를 일관되게 주장하고 무리한 추측 진술을 피함.</li>\n<li><strong>5단계 — 법률 조력 (병행)</strong> — 국선변호인 제도, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">불법촬영 압수 절차 증거능력 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 압수·절차·조사 갈래입니다.</strong></p>\n<ul>\n<li><strong>압수·수색 영장·압수조서 (압수 경위)</strong></li>\n<li><strong>복제·탐색·출력 과정 기록 (절차 경위)</strong></li>\n<li><strong>참여 기회 보장·불참 의사 관련 자료</strong></li>\n<li><strong>변호인 집행 통지 여부 확인 자료</strong></li>\n<li><strong>압수 목록·전자정보 상세목록</strong></li>\n<li><strong>경찰·검찰 출석요구서·사건 서류</strong></li>\n<li><strong>선임·국선변호인 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 압수·수색 일시와 복제·탐색·출력 경위, 참여 기회 보장·변호인 집행 통지 여부를 정리하면 절차 하자와 증거능력을 다투는 데 도움이 됩니다. 압수조서·전자정보 목록 등 절차 서류를 확보해두는 것이 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>참여 기회</strong> — 복제·탐색·출력 과정에 참여 기회가 보장됐는지.</li>\n<li><strong>변호인 통지</strong> — 변호인에게 집행 일시·장소가 통지됐는지.</li>\n<li><strong>증거능력</strong> — 절차 하자로 증거능력이 문제 되는지.</li>\n<li><strong>관련성</strong> — 혐의사실과 무관한 정보가 임의로 복제됐는지.</li>\n<li><strong>2차 증거</strong> — 위법 수집 증거를 기초로 한 자료인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n<li><strong>대한변호사협회 법률상담센터</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 압수·수색 참여권과 위법수집증거',
        summary:
          '대법원 2020도10729(대법원, 2020.11.26 선고) 영역에서 법원은 저장매체에 대한 압수·수색 과정에서 복제본을 수사기관 사무실 등으로 옮겨 복제·탐색·출력하는 경우에도 피압수자나 변호인에게 참여 기회를 보장하고 혐의사실과 무관한 전자정보의 임의적인 복제 등을 막기 위한 적절한 조치를 취해야 한다고 판시했습니다. 그러면서 변호인의 참여권은 피압수자의 보호를 위한 고유권이므로, 피압수자가 참여하지 않겠다는 의사를 명시했더라도 특별한 사정이 없는 한 그 변호인에게는 미리 집행 일시·장소를 통지해 참여 기회를 별도로 보장해야 하고, 이러한 절차를 지키지 않고 수집한 증거와 이를 기초로 한 2차 증거는 원칙적으로 증거로 할 수 없다고 보았습니다. 불법촬영 혐의로 휴대전화를 압수당한 사안을 살펴볼 때에도, 참여 기회 보장과 변호인 통지가 있었는지를 기준으로 절차 하자와 증거능력을 다툴 여지가 있음을 검토해볼 수 있습니다.',
        takeaway:
          '참여권 보장 여부 + 변호인 통지 + 증거능력 결합 시 압수 절차 위법 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '휴대전화를 이미 압수당했는데도 다툴 수 있나요?',
        answer:
          '<strong>압수·복제·탐색 과정의 절차가 지켜졌는지가 핵심인 영역입니다.</strong> 압수조서와 절차 경위를 확보하세요.',
      },
      {
        question: '제가 참여를 안 하겠다고 했으면 통지도 필요 없나요?',
        answer:
          '<strong>변호인 참여권은 별도로 보장되는 것으로 다뤄지는 영역입니다.</strong> 변호인 집행 통지 여부를 확인하세요.',
      },
      {
        question: '절차가 잘못되면 증거를 못 쓰게 되나요?',
        answer:
          '<strong>위법하게 수집한 증거의 능력이 다뤄지는 영역입니다.</strong> 절차 하자 정황을 구체적으로 정리하세요.',
      },
      {
        question: '혐의와 무관한 파일까지 봤다면 문제가 되나요?',
        answer:
          '<strong>혐의사실과 무관한 정보의 임의 복제도 쟁점이 되는 영역입니다.</strong> 압수 목록·전자정보 목록을 확보하세요.',
      },
      {
        question: '변호사 도움을 받을 방법이 있나요?',
        answer:
          '<strong>국선변호인 제도를 활용할 수 있는 영역입니다.</strong> 대한법률구조공단 132 상담이나 국선변호인 선정을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '혐의 받으면 어디부터', href: '/guide/sex-crime/accused-where-to-start' },
      { label: '성범죄 혐의 흔한 실수', href: '/guide/sex-crime/sex-crime-common-mistakes' },
      { label: '성범죄 무고 대응 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense' },
      { label: '지하철 불법촬영 추적', href: '/guide/sex-crime/sex-crime-subway-illegal-filming-track' },
    ],
  },

  // ─── 8. sex-crime-screen-rephotograph-body-image-not-object-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-screen-rephotograph-body-image-not-object-defense',
    keyword: '성관계 영상 화면 재촬영 카메라등이용촬영 신체 직접촬영 아님 방어',
    questionKeyword:
      '과거에 상대와 합의해서 촬영한 성관계 동영상이 있었는데, 그 영상 파일을 컴퓨터나 휴대폰 화면으로 재생한 뒤 그 화면을 다시 휴대폰 카메라로 찍은 사진이 문제가 됐어요. 상대가 그 사진을 두고 저를 카메라등이용촬영으로 고소했어요. 저는 사람의 신체를 몰래 직접 찍은 게 아니라 이미 있던 영상의 화면을 재촬영한 것뿐인데, 이것도 카메라등이용촬영죄가 되는 건지 헷갈려요. 신체 그 자체를 직접 촬영한 것과 영상 화면을 다시 찍은 것이 법적으로 같은지도 모르겠어요. 이렇게 영상 화면을 재촬영한 것을 두고 카메라등이용촬영 혐의를 받는 상황에서, 그 대상 해당 여부를 어떻게 다투며 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '영상 화면 재촬영 카메라등이용촬영 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '성관계 영상 화면 재촬영 방어 — 5단계 점검 | 로앤가이드',
      description:
        '영상 화면을 재촬영한 것을 카메라등이용촬영이라며 고소당해 막막하다면, 신체 직접촬영 해당 여부 다툼을 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「과거 상대와 합의해 촬영한 성관계 동영상 파일을 컴퓨터·휴대폰 화면으로 재생한 뒤 그 화면을 다시 휴대폰 카메라로 찍은 사진이 문제가 되어, 상대로부터 카메라등이용촬영으로 고소당해 조사를 받게 된 분의 상황입니다. 사람의 신체를 몰래 직접 촬영한 것이 아니라 이미 존재하던 영상의 화면을 재촬영한 것뿐인데, 이것까지 같은 죄로 다뤄지는지 알기 어려워, 무엇을 근거로 다퉈야 할지 막막하고 불안하실 거예요. 혐의를 받고 있다면, 문제가 된 사진이 어떤 파일을 어떤 방식으로 재생·재촬영한 것인지, 신체를 직접 촬영한 것인지 아니면 영상 화면을 다시 찍은 것인지를 차분히 정리해두는 것이 중요합니다. 사실과 다르게 신체를 직접 몰래 촬영한 것처럼 다뤄진다면, 문제가 된 사진이 신체 그 자체가 아니라 이미 있던 영상의 화면을 재촬영한 것이라는 점을 구체적으로 밝히는 것이 필요합니다. 성폭력처벌법은 카메라 등으로 다른 사람의 신체를 촬영하거나 그 촬영물을 반포·제공하는 행위 등을 규율하는데, 여기서 촬영의 대상이 ‘다른 사람의 신체’로 규정되어 있어 신체 그 자체를 직접 촬영한 것인지 여부가 함께 다뤄지는 영역입니다.」 성폭력처벌법 제14조는 성적 욕망 또는 수치심을 유발할 수 있는 다른 사람의 신체를 그 의사에 반하여 촬영하거나 그 촬영물을 반포·제공하는 행위 등을 규율하는 영역입니다. 판례는 이 조항이 촬영의 대상을 ‘다른 사람의 신체’로 규정하고 있으므로 신체 그 자체를 직접 촬영한 촬영물만 해당하고, 신체 이미지가 담긴 영상을 다시 촬영한 촬영물은 그 촬영물에 해당하지 않는다고 보면서, 성관계 동영상을 모니터로 재생해 화면을 촬영한 것은 위 조항의 촬영물에 해당하지 않는다고 본 사례가 있는 영역으로, 이러한 판단에 비추어 재촬영물이 카메라등이용촬영죄의 대상에 해당하는지를 다툴 여지가 있습니다. 신체 직접촬영 여부 + 화면 재촬영 + 대상 해당성 결합은 ‘카메라등이용촬영 대상’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 대상 파일 확인 ② 재촬영 경위 정리 ③ 대상 해당성 다툼 ④ 조사·공판 대응 ⑤ 법률 조력 5중 트랙을 검토해볼 수 있는 영역. 문제가 된 사진이 어떤 파일을 어떻게 재생·재촬영한 것인지, 신체를 직접 촬영한 것인지 여부를 정리해두면 대상 해당성을 다투는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 영상 화면 재촬영 카메라등이용촬영 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대상 파일·재촬영 경위·대상 해당성·조사 대응·조력 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대상 파일 확인</strong> — 문제가 된 사진이 어떤 영상·파일을 재촬영한 것인지 확인.</li>\n<li><strong>② 재촬영 경위 정리</strong> — 화면 재생·재촬영 방식과 경위를 정리.</li>\n<li><strong>③ 대상 해당성 다툼</strong> — 신체 직접촬영이 아니라 영상 화면 재촬영인지 검토.</li>\n<li><strong>④ 조사·공판 대응</strong> — 대상 해당성 쟁점을 일관되게 주장할 준비.</li>\n<li><strong>⑤ 법률 조력</strong> — 변호인 조력·국선변호인 제도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 촬영의 대상이 ‘다른 사람의 신체’로 규정되어 있어, 문제가 된 것이 신체 그 자체를 직접 촬영한 것인지 아니면 이미 있던 영상의 화면을 다시 촬영한 것인지가 판단의 분기점입니다. 대상 파일과 재촬영 경위를 구체적으로 밝히는 것이 방어의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 수사·형사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대상 파일 확인 (즉시)</strong> — 문제가 된 사진이 어떤 영상·파일을 재촬영한 것인지 확인.</li>\n<li><strong>2단계 — 재촬영 경위 정리 (즉시)</strong> — 화면 재생·재촬영 방식과 경위를 정리.</li>\n<li><strong>3단계 — 쟁점 정리 (조사·공판 전)</strong> — 신체 직접촬영 여부 등 대상 해당성 쟁점을 정리.</li>\n<li><strong>4단계 — 조사·공판 대응 (출석 시)</strong> — 대상 해당성 중심으로 주장하고 무리한 추측 진술을 피함.</li>\n<li><strong>5단계 — 법률 조력 (병행)</strong> — 국선변호인 제도, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">영상 화면 재촬영 카메라등이용촬영 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 대상·경위·조사 갈래입니다.</strong></p>\n<ul>\n<li><strong>문제가 된 사진·파일 정보 (대상 확인)</strong></li>\n<li><strong>원본 영상·파일의 존재·형태 (재촬영 대상)</strong></li>\n<li><strong>재생·재촬영 방식·경위 정리 (촬영 경위)</strong></li>\n<li><strong>신체 직접촬영 여부 관련 자료</strong></li>\n<li><strong>상대와의 관계·촬영 경위 내역</strong></li>\n<li><strong>경찰·검찰 출석요구서·사건 서류</strong></li>\n<li><strong>과거 유사 사건 연루 이력 없음 소명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 문제가 된 사진이 신체 그 자체를 직접 찍은 것인지, 이미 있던 영상의 화면을 다시 찍은 것인지를 대상 파일과 재촬영 경위로 정리하면 대상 해당성을 다투는 데 도움이 됩니다. 다만 반포·제공 등 다른 쟁점이 함께 문제 될 수 있어, 전체 경위를 함께 정리하는 것이 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대상 해당성</strong> — 신체 그 자체를 직접 촬영한 것인지, 영상 화면 재촬영인지.</li>\n<li><strong>촬영물 개념</strong> — 재촬영물이 해당 조항의 촬영물에 해당하는지.</li>\n<li><strong>다른 쟁점</strong> — 반포·제공 등 별도 쟁점이 함께 문제 되는지.</li>\n<li><strong>촬영 경위</strong> — 원본 영상의 촬영 경위·동의 여부.</li>\n<li><strong>연루 이력</strong> — 과거 유사 사건에 연루된 적이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n<li><strong>대한변호사협회 법률상담센터</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — ‘다른 사람의 신체’ 직접 촬영과 화면 재촬영',
        summary:
          '대법원 2017도3443(대법원, 2018.08.30 선고) 영역에서 법원은 성폭력처벌법 제14조가 촬영의 대상을 ‘다른 사람의 신체’로 규정하고 있으므로, 다른 사람의 신체 그 자체를 직접 촬영하는 행위만 이에 해당하고 신체 이미지가 담긴 영상을 촬영하는 행위는 해당하지 않는다고 판시했습니다. 그러면서 성관계 동영상을 컴퓨터로 재생한 후 모니터에 나타난 영상을 휴대전화 카메라로 촬영한 촬영물은 위 조항에서 규정한 촬영물에 해당하지 않는다고 보았습니다. 이미 있던 영상의 화면을 재촬영한 사진을 두고 카메라등이용촬영 혐의를 받게 된 사안을 살펴볼 때에도, 문제가 된 것이 신체 그 자체를 직접 촬영한 것인지 아니면 영상 화면을 다시 촬영한 것인지를 기준으로 대상 해당성을 다툴 여지가 있음을 검토해볼 수 있습니다.',
        takeaway:
          '신체 직접촬영 여부 + 화면 재촬영 + 대상 해당성 결합 시 카메라등이용촬영 대상 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '영상 화면을 다시 찍은 것도 카메라등이용촬영인가요?',
        answer:
          '<strong>신체 직접촬영인지 영상 화면 재촬영인지가 핵심인 영역입니다.</strong> 대상 파일과 재촬영 경위를 정리하세요.',
      },
      {
        question: '신체를 직접 찍은 것과 화면을 찍은 것이 다른가요?',
        answer:
          '<strong>대상이 신체 그 자체인지에 따라 다르게 다뤄지는 영역입니다.</strong> 문제가 된 사진의 대상을 명확히 정리하세요.',
      },
      {
        question: '그래도 다른 죄로 문제 될 수 있나요?',
        answer:
          '<strong>반포·제공 등 별도 쟁점이 함께 다뤄질 수 있는 영역입니다.</strong> 전체 경위를 함께 정리해 상담하세요.',
      },
      {
        question: '조사에서 무엇을 조심해야 하나요?',
        answer:
          '<strong>대상 해당성을 일관되게 주장하는 것이 중요한 영역입니다.</strong> 추측 진술을 피하고 변호인 조력을 검토하세요.',
      },
      {
        question: '변호사 도움을 받을 방법이 있나요?',
        answer:
          '<strong>국선변호인 제도를 활용할 수 있는 영역입니다.</strong> 대한법률구조공단 132 상담이나 국선변호인 선정을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '동의 촬영물 사후 유포 피해 추적', href: '/guide/sex-crime/sex-crime-consensual-footage-later-distribution-track' },
      { label: '성범죄 무고 대응 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense' },
      { label: '성범죄 혐의 흔한 실수', href: '/guide/sex-crime/sex-crime-common-mistakes' },
      { label: '혐의 받으면 어디부터', href: '/guide/sex-crime/accused-where-to-start' },
    ],
  },

  // ─── 9. sex-crime-telecom-obscenity-revenge-anger-sexual-purpose-victim-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-telecom-obscenity-revenge-anger-sexual-purpose-victim-track',
    keyword: '보복 분노 성적 메시지 통신매체이용음란 성적목적 피해',
    questionKeyword:
      '헤어진 연인이자 지인이 저에게 화가 났는지, 문자와 메신저로 성적으로 저를 비하하고 조롱하는 노골적인 표현이 담긴 메시지와 사진을 반복해서 보내요. 성적 욕망이 아니라 저에게 분풀이·보복하려고 그러는 것 같기도 한데, 그래서 오히려 이게 통신매체이용음란으로 신고가 되는 건지 헷갈려요. 상대는 자기는 성적인 의도가 아니라 화가 나서 그런 것뿐이라고 할 것 같아요. 이렇게 분노·보복성으로 보낸 성적 수치심을 주는 메시지도 통신매체이용음란 피해로 신고하고 대응할 수 있는지, 증거는 어떻게 모으고 어디에 신고해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '보복 성적 메시지 통매음 피해 대응 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보복 성적 메시지 통매음 피해 대응 — 5단계 점검 | 로앤가이드',
      description:
        '헤어진 상대가 분노·보복으로 성적 수치심 주는 메시지를 반복해 보내 힘들다면, 통매음 성립 판단과 증거·신고를 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헤어진 연인이자 지인이 문자·메신저로 성적으로 비하하고 조롱하는 노골적인 표현이 담긴 메시지와 사진을 반복해서 보내와 고통받는 분의 상황입니다. 상대가 성적 욕망보다는 분풀이·보복하려는 마음으로 그러는 것처럼 보여, 오히려 이것이 통신매체이용음란 피해로 신고될 수 있는지 헷갈리고, 상대가 ‘성적인 의도가 아니라 화가 나서 그런 것’이라고 둘러댈까 봐 신고를 망설이게 되기 쉽습니다. 하지만 성적 수치심을 주는 메시지를 반복해서 받는 것만으로도 일상이 무너지고, 언제 또 올지 모르는 연락에 휴대전화를 확인하는 것조차 두려워지는 고통이 얼마나 큰지 헤아리기 어렵습니다. 성적 수치심을 주는 표현을 반복해 보내는 행위는 그 동기가 분노·보복과 얽혀 있더라도 성적 목적이 함께 인정될 수 있어, 실제로 성적 의도가 있었는지와 무관하게 대응을 준비할 수 있습니다. 통신매체이용음란죄에서 말하는 ‘성적 욕망’에는 성행위를 목적으로 하는 욕망뿐 아니라 상대를 성적으로 비하·조롱해 성적 수치심을 줌으로써 심리적 만족을 얻으려는 욕망도 포함될 수 있고, 그것이 분노감과 결합되어 있더라도 마찬가지로 다뤄질 수 있는 영역입니다.」 성폭력처벌법 제13조는 자기 또는 다른 사람의 성적 욕망을 유발·만족시킬 목적으로 통신매체를 통해 성적 수치심이나 혐오감을 일으키는 말·글·그림·영상 등을 상대방에게 도달하게 한 행위를 규율하는 영역입니다. 판례는 이 죄의 ‘성적 욕망’에 상대를 성적으로 비하·조롱해 성적 수치심을 줌으로써 자신의 심리적 만족을 얻으려는 욕망도 포함되고, 그러한 성적 욕망이 상대에 대한 분노감과 결합되어 있더라도 달리 볼 것은 아니라고 본 사례가 있는 영역으로, 이러한 판단에 비추어 분노·보복성 메시지도 통신매체이용음란 피해로 다툴 여지가 있음을 검토해볼 수 있습니다. 성적 수치심 표현 + 반복 도달 + 분노 결합 목적 결합은 ‘통신매체이용음란 피해’ 대응이 가능한 트랙입니다. 피해자라면 ① 메시지 채증 ② 성적 목적 확인 ③ 도달·반복 정리 ④ 신고·수사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 받은 메시지·사진과 발신자 정보, 반복해 도달한 내역을 안전하게 채증해두면 성적 목적과 반복성을 확인하며 신고를 준비하는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 보복 성적 메시지 통매음 피해 대응 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채증·성적 목적·도달·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 메시지 채증</strong> — 받은 메시지·사진·발신자 정보를 안전하게 채증.</li>\n<li><strong>② 성적 목적 확인</strong> — 성적 비하·조롱으로 성적 수치심을 주었는지 확인.</li>\n<li><strong>③ 도달·반복 정리</strong> — 메시지가 반복해 도달한 일시·횟수 정리.</li>\n<li><strong>④ 신고·수사</strong> — 통신매체이용음란 신고·고소 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 피해자 상담·보호·국선변호사 제도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 성적 수치심을 주는 표현을 반복해 보내는 행위는 그 동기가 분노·보복과 얽혀 있더라도 성적 목적이 함께 인정될 수 있습니다. 받은 메시지와 도달 내역을 안전하게 채증하고 반복성을 정리하는 것이 대응의 분기점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 절차 5단계',
        content:
          '<p><strong>A. 경찰·피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지 채증 (즉시)</strong> — 받은 메시지·사진·발신 번호·일시를 캡처해 안전하게 보존.</li>\n<li><strong>2단계 — 상담·지원 연결 (즉시)</strong> — 여성긴급전화 1366·성폭력 상담 기관에 상담을 연결.</li>\n<li><strong>3단계 — 도달·반복 정리 (병행)</strong> — 메시지가 반복해 도달한 내역을 시간순으로 정리.</li>\n<li><strong>4단계 — 신고·고소 (준비 후)</strong> — 통신매체이용음란 신고·고소를 준비.</li>\n<li><strong>5단계 — 조력·지원 (전 과정)</strong> — 피해자 국선변호사, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보복 성적 메시지 통매음 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 채증·목적·지원 갈래입니다.</strong></p>\n<ul>\n<li><strong>받은 메시지·사진 캡처 (표현 내용)</strong></li>\n<li><strong>발신 번호·계정·발신자 정보 (가해자 특정)</strong></li>\n<li><strong>도달 일시·반복 횟수 기록 (반복성)</strong></li>\n<li><strong>상대와의 관계·이전 연락 내역</strong></li>\n<li><strong>성적 비하·조롱 표현 정리</strong></li>\n<li><strong>상담·병원 기록 (피해 정황)</strong></li>\n<li><strong>피해자 국선변호사·지원기관 연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 메시지·사진과 발신자 정보, 반복해 도달한 내역을 안전하게 채증하면 성적 목적과 반복성을 확인하는 데 도움이 됩니다. 메시지를 지우지 말고 원본 상태로 보존하고, 상대의 관계·이전 연락 내역도 함께 정리해두는 것이 대응에 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 확인되는 쟁점과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>성적 목적</strong> — 성적 비하·조롱으로 성적 수치심을 주었는지.</li>\n<li><strong>분노 결합</strong> — 성적 목적이 분노감과 결합되어 있어도 인정되는지.</li>\n<li><strong>도달·반복</strong> — 성적 표현이 상대에게 반복해 도달했는지.</li>\n<li><strong>가해자 특정</strong> — 발신 번호·계정으로 상대를 특정할 수 있는지.</li>\n<li><strong>채증 안전</strong> — 메시지를 원본대로 안전하게 확보했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성긴급전화 1366·성폭력 상담 기관 (24시간 상담)</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>성폭력범죄 피해자 국선변호사 제도</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통신매체이용음란죄의 ‘성적 욕망’과 분노 결합',
        summary:
          '대법원 2018도9775(대법원, 2018.09.13 선고) 영역에서 법원은 통신매체이용음란죄의 ‘자기 또는 다른 사람의 성적 욕망을 유발하거나 만족시킬 목적’이 있는지는 피고인과 피해자의 관계, 행위의 동기와 경위, 수단과 방법 등을 종합해 판단해야 한다고 밝히면서, ‘성적 욕망’에는 성행위·성관계를 목적으로 하는 욕망뿐 아니라 상대를 성적으로 비하·조롱하는 등 상대에게 성적 수치심을 줌으로써 자신의 심리적 만족을 얻으려는 욕망도 포함된다고 판시했습니다. 그러면서 이러한 성적 욕망이 상대에 대한 분노감과 결합되어 있더라도 달리 볼 것은 아니라고 보았습니다. 분노·보복성으로 성적 수치심을 주는 메시지를 반복해 받은 사안을 살펴볼 때에도, 성적 목적이 분노감과 결합되어 있는지와 무관하게 통신매체이용음란 피해로 채증과 신고를 준비할 수 있음을 검토해볼 수 있습니다.',
        takeaway:
          '성적 수치심 표현 + 반복 도달 + 분노 결합 목적 결합 시 통신매체이용음란 피해 대응 영역 — 채증·신고·피해자 지원 상담 권장.',
      },
    ],
    faq: [
      {
        question: '성적 의도가 아니라 화나서 보낸 거라는데도 신고되나요?',
        answer:
          '<strong>성적 목적이 분노감과 결합되어 있어도 다뤄질 수 있는 영역입니다.</strong> 받은 메시지를 원본대로 채증하세요.',
      },
      {
        question: '성적으로 비하·조롱하는 메시지도 해당하나요?',
        answer:
          '<strong>성적 비하·조롱으로 성적 수치심을 주는 표현도 다뤄지는 영역입니다.</strong> 표현 내용을 구체적으로 정리하세요.',
      },
      {
        question: '증거는 어떻게 모아야 하나요?',
        answer:
          '<strong>메시지·발신자 정보·도달 내역을 안전하게 채증하는 영역입니다.</strong> 메시지를 지우지 말고 원본대로 보존하세요.',
      },
      {
        question: '상대가 아는 사람인데 신고가 조심스러워요.',
        answer:
          '<strong>피해자 상담·보호 제도를 활용할 수 있는 영역입니다.</strong> 1366·성폭력 상담 기관과 국선변호사 조력을 검토하세요.',
      },
      {
        question: '어디에 신고하고 상담하면 되나요?',
        answer:
          '<strong>경찰 신고와 피해자 지원을 함께 진행하는 영역입니다.</strong> 채증 자료를 준비해 112·ECRM과 상담 기관을 연결하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '통신매체이용음란 메시지 추적', href: '/guide/sex-crime/sex-crime-telecom-obscene-message-track' },
      { label: 'SNS 메시지 통신매체이용음란 추적', href: '/guide/sex-crime/sex-crime-sns-message-cyber-obscenity-track' },
      { label: '전 연인 성관계 영상 유포 협박 추적', href: '/guide/sex-crime/sex-crime-ex-partner-intimate-video-distribution-threat-track' },
      { label: '성폭력 피해 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 10. sex-crime-illegal-filming-caught-in-act-seizure-evidence-victim-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-illegal-filming-caught-in-act-seizure-evidence-victim-track',
    keyword: '불법촬영 현행범 체포현장 임의제출 압수경위 증거 신고 피해',
    questionKeyword:
      '지하철이나 매장 같은 공공장소에서 누군가 휴대폰으로 저나 다른 사람의 신체를 몰래 촬영하는 것을 발견하고, 그 자리에서 붙잡아 현행범으로 신고했어요. 상대는 현장에서 휴대전화를 수사기관에 임의로 제출했는데, 정작 촬영한 파일이 지워져 있거나 자백을 뒤집으면 처벌이 안 되는 건 아닌지 걱정돼요. 현장에서 붙잡았을 때 목격한 상황이나 임의제출된 휴대전화가 증거가 되는지, 제가 무엇을 어떻게 남겨두고 신고해야 하는지 막막해요. 이렇게 불법촬영 현행범 상황에서 채증과 임의제출·목격 진술이 증거가 되는지 확인하고 신고를 어떻게 준비해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '불법촬영 현행범 채증 신고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '불법촬영 현행범 채증 신고 대응 — 5단계 점검 | 로앤가이드',
      description:
        '공공장소에서 불법촬영범을 현장에서 붙잡았는데 파일이 지워졌을까 불안하다면, 임의제출·목격 진술 증거와 신고 준비를 5단계로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지하철·매장 같은 공공장소에서 누군가 휴대폰으로 자신이나 다른 사람의 신체를 몰래 촬영하는 것을 발견해 그 자리에서 붙잡아 현행범으로 신고한 분의 상황입니다. 상대가 현장에서 휴대전화를 수사기관에 임의로 제출했더라도, 정작 촬영 파일이 지워져 있거나 상대가 나중에 자백을 뒤집으면 처벌이 어려워지는 것은 아닌지 불안하고, 놀란 상황에서 무엇을 어떻게 남겨두어야 하는지 몰라 막막하실 거예요. 잘못한 것은 상대인데 오히려 피해자가 증거를 걱정하며 스스로 움직여야 하는 상황이 얼마나 부담스러울지 헤아리기 어렵습니다. 하지만 현장에서 붙잡아 목격한 상황과 임의제출된 휴대전화는 수사·재판에서 중요한 자료가 될 수 있어, 파일이 삭제됐거나 진술이 번복될 가능성이 있더라도 대응을 준비할 수 있습니다. 현행범 체포현장이나 범죄 현장에서 소지자가 임의로 제출하는 물건은 영장 없이 압수할 수 있고, 압수 과정에서 남는 기록에 현장을 직접 목격한 사람의 진술이 담기면 그 자체가 독립적인 증거가 될 수 있는 영역입니다.」 형사소송법은 현행범 체포현장이나 범죄 현장에서 소지자 등이 임의로 제출하는 물건을 영장 없이 압수할 수 있도록 정하는 영역입니다. 판례는 불법촬영 현장에서 임의제출된 휴대전화의 압수조서 ‘압수경위’란에 현장을 직접 목격한 경찰관의 진술 내용이 담긴 경우, 이는 임의제출 절차의 적법성과 무관한 독립적인 증거가 될 수 있고, 현행범 체포현장이나 범죄 현장에서 임의로 제출하는 물건은 영장 없이 압수할 수 있으며 사후에 영장을 받을 필요도 없다고 본 사례가 있는 영역으로, 이러한 판단에 비추어 현장 채증과 임의제출·목격 진술을 증거로 준비할 여지가 있음을 검토해볼 수 있습니다. 현장 목격 + 임의제출 + 목격 진술 증거 결합은 ‘불법촬영 현행범 채증’ 대응이 가능한 트랙입니다. 피해자라면 ① 현장 채증 ② 임의제출 확인 ③ 목격 진술 정리 ④ 신고·수사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 현장 상황과 목격 내용, 임의제출·압수 경위를 안전하게 정리해두면 파일 삭제나 진술 번복 가능성에 대비해 신고를 준비하는 데 실질적인 근거가 됩니다. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 불법촬영 현행범 채증 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장 채증·임의제출·목격 진술·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 채증</strong> — 촬영 정황·현장 상황·목격 내용을 안전하게 기록.</li>\n<li><strong>② 임의제출 확인</strong> — 휴대전화 임의제출·압수 경위를 확인.</li>\n<li><strong>③ 목격 진술 정리</strong> — 현장을 직접 목격한 내용을 구체적으로 정리.</li>\n<li><strong>④ 신고·수사</strong> — 현행범 신고·고소·수사 협조를 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 피해자 상담·보호·국선변호사 제도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 현장에서 붙잡아 목격한 내용과 임의제출된 휴대전화는 중요한 자료가 될 수 있고, 압수 과정 기록에 담긴 목격 진술은 독립적인 증거가 될 수 있습니다. 파일 삭제·진술 번복 가능성에 대비해 현장 상황과 목격 내용을 정리하는 것이 대응의 분기점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 절차 5단계',
        content:
          '<p><strong>A. 경찰·피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 채증 (즉시)</strong> — 촬영 정황·현장 상황·목격 내용을 안전하게 기록·확보.</li>\n<li><strong>2단계 — 현행범 신고 (즉시)</strong> — 112에 신고하고 임의제출·현행범 절차에 협조.</li>\n<li><strong>3단계 — 목격 진술 정리 (병행)</strong> — 직접 목격한 상황을 시간순으로 구체적으로 정리.</li>\n<li><strong>4단계 — 수사 협조 (준비 후)</strong> — 진술·자료 제출 등 수사에 협조.</li>\n<li><strong>5단계 — 조력·지원 (전 과정)</strong> — 피해자 국선변호사, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">불법촬영 현행범 채증 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 채증·현장·지원 갈래입니다.</strong></p>\n<ul>\n<li><strong>촬영 정황·현장 상황 기록 (목격 내용)</strong></li>\n<li><strong>현장 목격자·동행자 정보 (진술 확보)</strong></li>\n<li><strong>임의제출·압수 경위 확인 (증거 경위)</strong></li>\n<li><strong>현장 CCTV·주변 정황 자료</strong></li>\n<li><strong>상대 인상착의·특정 자료</strong></li>\n<li><strong>신고·접수 내역</strong></li>\n<li><strong>피해자 국선변호사·지원기관 연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 현장에서 목격한 촬영 정황과 상황을 시간순으로 구체적으로 정리하고, 임의제출·압수 경위와 현장 CCTV·목격자 정보를 함께 확보하면 파일 삭제나 진술 번복 가능성에 대비하는 데 도움이 됩니다. 직접 상대를 제지하기 어려운 상황이라면 무리하지 말고 즉시 112에 신고하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 확인되는 쟁점과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임의제출 증거</strong> — 현행범 현장 임의제출물이 영장 없이 압수됐는지.</li>\n<li><strong>목격 진술</strong> — 현장 목격 진술이 독립적인 증거가 되는지.</li>\n<li><strong>파일 삭제 대비</strong> — 촬영 파일이 삭제됐을 가능성에 대비했는지.</li>\n<li><strong>진술 번복</strong> — 상대가 자백을 번복할 가능성에 대비했는지.</li>\n<li><strong>상대 특정</strong> — 인상착의·현장 정황으로 상대를 특정했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성긴급전화 1366·성폭력 상담 기관 (24시간 상담)</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>성폭력범죄 피해자 국선변호사 제도</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 현행범 현장 임의제출물과 압수경위 진술의 증거',
        summary:
          '대법원 2019도13290(대법원, 2019.11.14 선고) 영역에서 법원은 현행범 체포현장이나 범죄 현장에서 소지자 등이 임의로 제출하는 물건은 형사소송법 제218조에 따라 영장 없이 압수할 수 있고, 이때 검사나 사법경찰관이 별도로 사후에 영장을 받을 필요는 없다고 판시했습니다. 그러면서 지하철역에서 불법촬영을 하다 현행범으로 체포되면서 임의제출된 휴대전화의 압수조서 ‘압수경위’란에 현장을 직접 목격한 사법경찰관의 진술 내용이 기재된 경우, 이는 임의제출 절차의 적법성과 무관한 독립적인 증거에 해당한다고 볼 여지가 많다고 보았습니다. 공공장소에서 불법촬영범을 현장에서 붙잡은 사안을 살펴볼 때에도, 현장 채증과 임의제출·목격 진술이 증거가 될 수 있음을 기준으로 신고와 대응을 준비할 수 있음을 검토해볼 수 있습니다.',
        takeaway:
          '현장 목격 + 임의제출 + 목격 진술 증거 결합 시 불법촬영 현행범 채증 대응 영역 — 신고·수사 협조·피해자 지원 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 파일을 지웠으면 처벌이 안 되나요?',
        answer:
          '<strong>현장 목격과 임의제출 경위도 자료가 되는 영역입니다.</strong> 목격한 상황과 현장 정황을 구체적으로 정리하세요.',
      },
      {
        question: '현장에서 붙잡아 목격한 것도 증거가 되나요?',
        answer:
          '<strong>현장을 직접 목격한 진술이 독립적인 증거가 될 수 있는 영역입니다.</strong> 목격 내용을 시간순으로 정리하세요.',
      },
      {
        question: '상대가 나중에 안 했다고 번복하면 어떡하죠?',
        answer:
          '<strong>진술 번복 가능성에 대비해 증거를 함께 확보하는 영역입니다.</strong> 목격자·CCTV·현장 정황을 확보하세요.',
      },
      {
        question: '직접 붙잡기 무서운데 어떻게 해야 하나요?',
        answer:
          '<strong>무리한 제지보다 즉시 신고가 안전한 영역입니다.</strong> 상대 인상착의와 상황을 기억해 112에 신고하세요.',
      },
      {
        question: '심리적으로 힘든데 지원을 받을 수 있나요?',
        answer:
          '<strong>피해자 보호·지원을 함께 받을 수 있는 영역입니다.</strong> 1366·상담 기관과 국선변호사 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '지하철 불법촬영 추적', href: '/guide/sex-crime/sex-crime-subway-illegal-filming-track' },
      { label: '공중화장실 불법촬영 추적', href: '/guide/sex-crime/sex-crime-public-restroom-illegal-filming-track' },
      { label: '피해자 고소 필요서류', href: '/guide/sex-crime/victim-complaint-required-docs' },
      { label: '성폭력 피해 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },
];
