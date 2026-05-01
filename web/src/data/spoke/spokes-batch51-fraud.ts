import { SpokePage } from '../spoke-pages';

// batch51 fraud 5개: 보증금만 받고 잠적 위생/하자 미고지 + 일자리 빙자 교육비/장비비 선결제 + 가짜 자선/재난모금 기부 사기 + 해외구매대행 회수(차지백·국제분쟁조정) + 의료기기/건강식품 허위판매·다단계
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 임대·권리금 보증금만 받고 위생·하자 같은 중요 사실을 숨긴 채 잠적한 사기 피해자가 부작위 기망 입증 + 카드 차지백 + KCA 피해구제 + 사기 고소를 어떻게 정리해야 하는지 돕는 페이지다.
// 2. 이 페이지는 채용·일자리 제안 빙자로 교육비·장비비·보증금을 선결제 요구한 사기 피해자가 KCA 피해구제 + 경찰 신고 + 노동위원회 트랙 분기를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 가짜 자선단체·재난 모금 사기를 당한 기부자가 기부금단체 등록 조회 + 카드 차지백 + 환불 + 경찰 신고 절차를 검토하도록 돕는 페이지다.
// 4. 이 페이지는 해외구매대행 사이트 결제 후 미배송·반품 거절 피해자가 카드사 차지백 + 국제분쟁조정 + ODR 회수 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 의료기기·건강식품 허위판매·다단계 사기를 당한 피해자가 KCA 피해구제 + 식약처/공정위 신고 + 경찰 사기 고소를 어떻게 병행해야 하는지 돕는 페이지다.

export const spokesBatch51Fraud: SpokePage[] = [
  // ─── 1. fraud / deposit-only-withholding-trick ───
  {
    domain: 'fraud',
    slug: 'fraud-deposit-only-withholding-trick',
    keyword: '보증금만 받고 잠적 사기 환급',
    questionKeyword: '권리금·보증금 1억 보냈는데 위생 하자 숨기고 양도자가 잠적했어요. 사기로 받을 수 있나요?',
    ctaKeyword: '보증금 잠적 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '보증금만 받고 잠적 사기 — 부작위 기망 환급 5단계 | 로앤가이드',
      description:
        '권리금·임대 보증금 받고 위생·하자 숨긴 채 잠적했다면 부작위 기망 입증 + 카드 차지백 + KCA 피해구제 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"고시텔 권리금 1억원에 양수계약을 체결했는데, 양도 다음 날 가보니 객실마다 빈대가 가득해서 영업이 불가능했어요. 양도자는 이 사실을 한마디도 안 알려줬고 지금은 연락이 안 됩니다." 보증금·권리금만 받고 중요한 사실을 숨긴 채 잠적하는 사기는 단순 채무불이행처럼 보이지만, 알고도 고지하지 않은 위생·하자·법적 제한이 있다면 형법 제347조 부작위 기망에 의한 사기가 성립할 수 있습니다. 잠적 직후 1주가 회수의 골든타임이라, 가압류와 사기 고소를 동시에 검토하는 것이 출발점이에요.</p>',
    sections: [
      {
        title: 'Q. 단순 잠적과 사기를 가르는 기준은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 4가지 정황 중 2개 이상이면 부작위 기망에 의한 사기 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>중요 사실 미고지</strong> — 위생 문제(빈대·곰팡이·누수), 영업정지 처분, 임대인 동의 부재, 시설 노후 같은 결정적 정보를 알면서도 숨김.</li>\n<li><strong>계약 체결 직후 잠적</strong> — 보증금·권리금 입금 후 인수인계 협조 거부, 연락 두절, 사무실 폐쇄.</li>\n<li><strong>다른 피해자 동시 발생</strong> — 같은 시기 같은 양도자에게 같은 패턴의 피해 사례.</li>\n<li><strong>차명계좌·허위 정보</strong> — 입금 계좌 명의 불일치, 사업자등록증 위조, 신원 정보 거짓.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부작위 기망은 "고지의무가 있는데 알면서 숨긴 경우" 인정. 거래 안전과 신의칙상 알려야 했던 사항을 숨겼다면 단순 채무불이행이 아니라 사기로 평가될 수 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">한국소비자원·법원·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가압류 신청 (잠적 인지 후 1주 내)</strong> — 양도자 부동산·통장·차량을 보전. 시간이 늦어질수록 재산 빼돌릴 위험. 보전금액은 보증금·권리금 + 추가 손해 합산.</li>\n<li><strong>2단계 — 카드 결제분 차지백 신청 (결제 후 90일 내 권장)</strong> — 권리금·보증금을 카드로 결제했다면 "용역 미제공" 사유로 카드사 이의제기. 통상 90일 권장, 최대 180일.</li>\n<li><strong>3단계 — 한국소비자원 피해구제 (1372)</strong> — 사업자 자율 해결 권고 30일. 응답 없으면 분쟁조정위원회 회부.</li>\n<li><strong>4단계 — 경찰서 사기 고소 (관할 또는 ECRM)</strong> — 부작위 기망 정황·다른 피해자 진술·중요 사실 미고지 입증자료 첨부. 다수 피해자 발견 시 공동 고소단 구성.</li>\n<li><strong>5단계 — 부대 배상명령 또는 민사 소송</strong> — 형사 1심 변론종결 전 부대 배상명령 신청 시 별도 민사 없이 형사 절차에서 배상금 확정 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">미고지 사실의 종류·시점에 따라 부작위 기망 입증 트랙이 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">고소·차지백·가압류 신청에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>양수도계약서·임대차계약서</strong> — 보증금·권리금·일정·양도자 인적사항.</li>\n<li><strong>이체확인서·카드 영수증</strong> — 결제 일시·방법·금액.</li>\n<li><strong>중요 사실 미고지 입증자료</strong> — 양도 후 발견된 위생·하자·법적 제한 증빙(사진·동영상·전문가 점검 보고서).</li>\n<li><strong>양도자와의 대화 전체</strong> — 카카오톡·문자·녹취. 미고지·은폐 정황 포함.</li>\n<li><strong>다른 피해자 진술</strong> — 같은 양도자 피해 사례, 카페·블로그·오픈채팅 캡처.</li>\n<li><strong>현장 점검 비용 영수증</strong> — 방역·수리·실측 견적.</li>\n<li><strong>사업자등록증·면허증 사본</strong> — 양도자 신원 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "곧 연락 오겠지" 하며 1~2달 기다리면 양도자가 재산을 빼돌립니다. 잠적 정황이 보이면 즉시 가압류부터 검토하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 보증금 잠적 사건에서 양도자 측이 자주 주장하는 변명입니다.</strong></p>\n<ul>\n<li><strong>"몰랐다, 우리도 피해자다"</strong> — 운영 기간이 길고 고지의무 사항이 명백하면 "몰랐다"는 주장이 받아들여지기 어렵습니다.</li>\n<li><strong>"중개인에게 알려줬다"</strong> — 중개인이 양수인에게 전달했다는 객관적 증거(녹음·문자) 없으면 인정되기 어려움.</li>\n<li><strong>"양수인 쪽이 충분히 점검할 기회 있었다"</strong> — 통상 양수인이 발견하기 어려운 위생·법적 하자는 양도자 고지의무 우선 인정 경향.</li>\n<li><strong>합의 명목 추가 송금 요구</strong> — "잠시만 기다려 달라, 일부 환급할게"는 시간 끌기 패턴. 추가 송금 절대 금지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국소비자원 1372 / 경찰청 ECRM(ecrm.police.go.kr) / 법원 보전소송 안내(scourt.go.kr) / 대한법률구조공단 132 / 범죄피해자지원센터 1577-1295.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도 시 위생상태 미고지와 부작위 기망 사기',
        summary:
          '서울북부지법 2024고단3486 사건(서울북부지법, 2025.11.06 선고)에서 법원은 운영 중이던 고시텔 객실에 빈대가 만연한 위생 상태를 숨긴 채 권리금 1억원에 양수도계약을 체결한 피고인에게 사기죄 유죄를 선고했습니다. 정상적인 거주·영업이 어려운 빈대 발생 사실은 양수도계약 체결 시 반드시 고지해야 할 중요한 사항임에도 이를 알리지 않은 것은 부작위 기망에 해당한다고 판시했습니다.',
        takeaway: '보증금·권리금 잠적 사건은 "알면서도 숨긴 중요 사실"이 입증되면 부작위 기망 사기 인정 가능성이 있으므로, 양도 전후 위생·하자·법적 제한을 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '양도자가 "본인도 몰랐다"고 우기면 사기 입증이 어렵지 않나요?',
        answer:
          '<strong>운영 기간·시설 점검 이력·방역 기록 같은 정황이 있으면 "몰랐다" 주장이 깨질 수 있습니다.</strong> 위생·하자가 명백하고 일정 기간 운영했다면 알았다고 평가될 가능성이 높아요.',
      },
      {
        question: '계약 시 중개인이 끼어 있었는데 중개인에게도 책임을 물을 수 있나요?',
        answer:
          '<strong>중개인이 중요 사실을 알면서 미고지·은폐에 가담했다면 공동 책임 검토 가능합니다.</strong> 공인중개사의 경우 손해배상 + 자격정지 처분도 가능. 중개사고배상책임보험으로 일부 회수 길도 있어요.',
      },
      {
        question: '양도자가 1인 자영업자라 가압류할 재산이 없을 것 같은데요?',
        answer:
          '<strong>채무 불이행자 명부 등재·재산명시 신청을 검토해볼 수 있습니다.</strong> 향후 부동산·차량 취득 시 즉시 강제집행. 형사 유죄 후 재산이 드러나면 그때도 강제집행 가능해요.',
      },
      {
        question: '계약 해제하고 환불받는 게 더 빠르지 않나요?',
        answer:
          '<strong>양도자가 잠적했으면 합의 해제가 사실상 불가능합니다.</strong> 일방적 해제 통보 + 가압류 + 부당이득반환 청구가 현실적인 트랙. 형사 고소를 병행하면 합의 의사를 끌어내는 데 도움이 돼요.',
      },
      {
        question: '권리금만 카드 결제하고 보증금은 계좌이체했는데 회수 트랙이 다른가요?',
        answer:
          '<strong>카드 결제분은 차지백, 계좌이체분은 가압류·민사·형사 트랙으로 갈립니다.</strong> 카드 차지백은 비교적 빠르고, 계좌이체분은 가압류 조기 보전이 핵심. 두 트랙은 동시에 진행할 수 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '인테리어 선입금 사기 회수', href: '/guide/fraud/fraud-construction-deposit-scam-recovery' },
      { label: '온라인 카페·커뮤니티 회비 환급', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 2. fraud / employment-job-offer-deposit-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-employment-job-offer-deposit-scam',
    keyword: '취업 사기 교육비 환급',
    questionKeyword: '취업 제안받고 교육비 200만원 보냈는데 일자리도 없고 연락도 끊겼어요. 어떻게 받나요?',
    ctaKeyword: '취업 사기 환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '취업 사기 — 교육비·장비비 환급 4단계 절차 정리 | 로앤가이드',
      description:
        '채용 빙자로 교육비·장비비·보증금 선결제 사기 피해자라면 KCA 피해구제 + 경찰 신고 + 노동위 트랙 분기 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"채용 공고 보고 면접 갔더니 &lsquo;정식 입사 전 교육 이수 필수, 교육비 200만원·작업복·장비 300만원 자비 부담&rsquo;이라고 해서 송금했어요. 교육 시작일은 계속 연기되고 결국 사무실이 사라졌습니다." 취업·일자리 제안을 빙자한 사기는 직업안정법 위반 + 사기죄 + 근로기준법 위반이 동시에 성립하는 경우가 많습니다. 송금 직후 30일이 회수 골든타임이라, KCA 피해구제·경찰 신고·노동위 신고를 동시에 검토해볼 수 있어요. 다른 피해자가 함께 발견되면 공동 고소단 구성이 수사 우선순위 상승에 도움이 됩니다.</p>',
    sections: [
      {
        title: '취업 사기 vs 정상 채용 구분 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 2개 이상이면 사기 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>입사 전 자비 송금 요구</strong> — 정상 회사는 교육비·장비비를 회사가 부담. 직업안정법 제32조도 구직자에게 금품 수령 금지.</li>\n<li><strong>고수익 보장 + 단기 입금 압박</strong> — "월 500만원 보장, 오늘 안에 입금"은 전형적 패턴.</li>\n<li><strong>회사명·사업자등록 불일치</strong> — 면접 장소와 사업자등록증 주소가 다름, 차명 계좌 입금.</li>\n<li><strong>직무·근무지 모호</strong> — 구체적 업무 설명 없이 "연락만 잘 받으면 된다", "재택만 하면 된다".</li>\n<li><strong>계약서 미제공·간이 서명</strong> — 정식 근로계약서 없이 양식 1장에 서명만 받음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 직업안정법 제46조(채용시 금품 수수 금지 위반은 5년 이하 징역). 다수 피해자 합산 5억원 이상이면 특정경제범죄가중처벌법 적용 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 4단계',
        content:
          '<p><strong style="color:#1e3a5f">한국소비자원·경찰청·고용노동부 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 증거 보전 + 가압류 신청 (잠적 인지 후 1주 내)</strong> — 채용 공고·면접 녹취·송금 내역·회사 정보 캡처. 회사 부동산·통장 가압류 검토.</li>\n<li><strong>2단계 — 한국소비자원 피해구제 신청 (1372)</strong> — "용역 미제공" 사유로 신청. 사전 상담 → 신청 → 사실조사·합의권고 (30일 이내). 응답 없으면 분쟁조정위 회부.</li>\n<li><strong>3단계 — 고용노동부 + 경찰 신고 동시 진행</strong> — 고용노동부 1350(직업안정법 위반 신고) + 경찰 ECRM(ecrm.police.go.kr, 사기죄 고소). 다수 피해자 공동 고소면 우선순위 상승.</li>\n<li><strong>4단계 — 부대 배상명령 또는 민사 소송 (3천만원 이하 소액사건)</strong> — 형사 1심 변론종결 전 부대 배상명령 신청 시 별도 민사 없이 형사 절차에서 배상금 확정 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 명목·회사 형태에 따라 적용 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신고·환급·고소에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>채용 공고 캡처</strong> — 사이트(잡코리아·사람인·SNS)·게시일·공고 내용 전체.</li>\n<li><strong>면접 녹취·메시지</strong> — "교육비 송금 필수" 발언 포함.</li>\n<li><strong>송금 영수증·이체확인서</strong> — 결제 일시·금액·수신 계좌.</li>\n<li><strong>근로계약서·교육신청서</strong> — 회사가 작성·제공한 모든 서면.</li>\n<li><strong>회사 정보</strong> — 사업자등록증·면접 장소 주소·홈페이지·SNS 캡처.</li>\n<li><strong>다른 피해자 진술</strong> — 같은 회사 피해 사례.</li>\n<li><strong>피해구제 신청서</strong> — kca.go.kr 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 회사가 "곧 입사일 통보"한다며 시간을 끄는 동안 추가 송금하면 피해 금액이 커집니다. 입사 전 자비 송금 요구 자체가 위험 신호예요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 취업 사기에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"교육 후 환급해드린다"</strong> — 입사 후 월급에서 차감 또는 일정 근속 후 환급은 정상 회사도 종종 있지만, 결국 환급 안 되거나 잠적이 일반적 패턴.</li>\n<li><strong>"보증금은 본인 보호 차원"</strong> — 구직자에게 보증금 요구는 직업안정법 위반. 사기 정황 신호.</li>\n<li><strong>"우리 회사가 운영하는 다른 사이트로 결제"</strong> — 차명 결제 경로. 회사 공식 계좌 외 결제 요구는 의심.</li>\n<li><strong>"계약서는 입사 후 작성"</strong> — 정상 회사는 입사 전 또는 입사 즉시 계약서 작성. 미루면 잠적 직전 패턴.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국소비자원 1372 / 고용노동부 1350 / 경찰청 ECRM(ecrm.police.go.kr) / 대한법률구조공단 132 / 범죄피해자지원센터 1577-1295.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망 + 위계 업무방해는 별개 범죄',
        summary:
          '대법원 2024도18174 사건(대법원, 2025.09.25 선고)에서 법원은 행위자가 기망과 별도로 일련의 위계행위로 상대방의 심사·결정 업무를 방해한 경우, 사기죄와 위계에 의한 업무방해죄가 별개로 성립한다고 판시했습니다. 취업 사기에서도 허위 채용 공고·허위 회사 명의 등 별개의 위계 행위가 결합되면 사기죄 외에 위계 업무방해 등 추가 죄책 검토가 가능해 다수 피해자 사건의 양형이 무거워질 수 있습니다.',
        takeaway: '취업 사기는 단순 사기죄에 더해 직업안정법 위반·위계 업무방해까지 결합될 수 있어, 신고 시 채용 공고·면접 녹취 같은 위계 행위 증거를 함께 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '실제 면접도 봤고 회사도 존재하는데 사기로 볼 수 있나요?',
        answer:
          '<strong>"실재 회사·실재 면접"이라도 입사 의사·능력 없이 교육비만 편취할 의도였다면 사기 검토 가능합니다.</strong> 다른 피해자가 동시에 있는지, 송금 후 잠적·연락 두절 시점이 일관된지 정황 확인이 핵심.',
      },
      {
        question: '계약서를 안 썼는데 회수가 어렵지 않나요?',
        answer:
          '<strong>면접 녹취·카카오톡·송금 내역만으로도 사기 고소·민사 청구 가능합니다.</strong> 정식 계약서가 있을 때보다 입증 부담은 크지만 채용 공고와 송금 사실의 결합으로 충분히 진행돼요.',
      },
      {
        question: '회사가 "이미 사용한 교육비"라며 환급 거부하면요?',
        answer:
          '<strong>실제 교육 제공 사실 + 비용 내역을 입증해야 회사 주장이 인정됩니다.</strong> 교육이 형식적이거나 미실시 상태로 송금만 받았다면 부당이득반환 청구 가능. 영수증·강사 신원·교재 같은 증빙을 회사가 제출하지 못하면 환급 인정 가능성 높아요.',
      },
      {
        question: '소비자원 + 경찰 + 고용노동부 동시 신고해도 되나요?',
        answer:
          '<strong>3개 채널 동시 진행 가능합니다.</strong> 각 절차 시한이 따로 흘러가니 하나라도 놓치지 마세요. 소비자원 30일·경찰 사이버수사 진행·고용노동부 직업안정법 위반 조사가 병렬로 갑니다.',
      },
      {
        question: '면접관 개인이 아니라 회사 명의 계좌로 송금했는데 누구를 고소하나요?',
        answer:
          '<strong>회사 + 대표자 + 면접관 다 같이 고소 가능합니다.</strong> 실제 운영 주체와 차명·바지사장 여부에 따라 형사 책임 범위가 달라지므로 신고 시 회사 등기부등본·사업자등록증·면접관 신분증 사본을 모두 첨부.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '온라인 카페·커뮤니티 회비 환급', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '사기 형사 부대 배상명령', href: '/guide/fraud/fraud-victim-criminal-attached-civil-claim' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 3. fraud / fake-charity-donation-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-charity-donation-scam',
    keyword: '가짜 자선단체 기부 사기',
    questionKeyword: '재난 모금이라며 SNS에서 50만원 기부했는데 단체가 가짜였어요. 환불 가능한가요?',
    ctaKeyword: '자선단체 기부 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '가짜 자선단체 기부 사기 — 단체 조회·환불 4단계 | 로앤가이드',
      description:
        '재난 모금·자선단체를 사칭한 기부 사기를 당했다면 기부금단체 등록 조회 + 카드 차지백 + 환불 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"SNS에 &lsquo;산불 피해 이재민 긴급 모금&rsquo;이라며 사진과 사연이 돌아 카드로 50만원 기부했어요. 며칠 후 보니 같은 단체가 다른 이름으로 여러 모금을 돌리고 있고, 행정안전부 기부금단체 명단에는 등록도 안 되어 있더군요." 가짜 자선단체·재난 모금 사기는 사회 분위기·연민을 이용해 단기간에 다수 피해자를 만드는 패턴입니다. 결제 직후 7일 내 카드 차지백을 시도하면 회수 가능성이 가장 높고, 기부금 모집 등록 여부 조회 + 경찰 신고 + KCA 피해구제를 병행해볼 수 있어요.</p>',
    sections: [
      {
        title: 'Q. 가짜 자선단체로 보는 5가지 정황은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 정황 중 2개 이상이면 즉시 차지백·신고 트랙으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>기부금 모집 등록 미확인</strong> — 행정안전부 1365자원봉사 또는 시·도 기부금단체 명단에 등록 없음. 등록 없는 모집은 기부금품법 위반.</li>\n<li><strong>SNS·오픈채팅 단발성 모금</strong> — 정식 단체는 홈페이지·기부영수증 발급체계가 있음. SNS DM·오픈채팅 결제 요구만 있으면 의심.</li>\n<li><strong>모금 사진·사연 도용</strong> — 다른 사건 사진·해외 뉴스 사진을 가져와 한국 사연으로 둔갑.</li>\n<li><strong>차명 계좌·개인 계좌 입금 요구</strong> — 정상 단체는 단체 명의 공식 계좌. 개인명·차명은 자금세탁 의심.</li>\n<li><strong>기부영수증 거부·발급 불가</strong> — 정식 등록 단체는 세제혜택 영수증 발급 가능. 거부하면 미등록 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기부금품의 모집 및 사용에 관한 법률 제16조는 등록 없이 1천만원 이상 모집 시 3년 이하 징역. 형법 제347조 사기죄 + 다수 피해자 합산 5억원 이상이면 특정경제범죄가중처벌법.</blockquote>',
      },
      {
        title: 'Q. 환불 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제 수단·등록 여부에 따라 4가지 트랙으로 갈립니다.</strong></p>\n<ul>\n<li><strong>카드 결제 → 카드사 차지백</strong> — "용역 미제공" 사유로 결제 후 90일 내 이의제기. 가장 회수 가능성 높음.</li>\n<li><strong>간편결제 → 결제사 + 카드사 양쪽 환급</strong> — 카카오페이·네이버페이는 결제사 고객센터 + 연계 카드사 양쪽 동시 신청.</li>\n<li><strong>계좌이체 → 송금 은행 지급정지 + 사건사고사실확인원</strong> — 통신사기피해환급법 적용 가능 케이스(가짜 단체 = 재화/용역 가장)면 환급 트랙. 잔액 보존이 핵심.</li>\n<li><strong>정식 등록 단체 + 사용 부적정 → 행안부 신고</strong> — 등록은 됐지만 모집 목적 외 사용 의혹은 행정안전부 또는 시·도청에 사용내역 공개 청구.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결제 수단·단체 등록 여부에 따라 환불 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 신고 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 기부금 모집 등록 조회 (당일 내)</strong> — 행정안전부 1365자원봉사 또는 거주 시·도청 기부금품 모집 등록 명단 확인. 미등록이면 기부금품법 위반 신고.</li>\n<li><strong>2단계 — 카드사 차지백 + 결제사 환급 (결제 후 7일 내 권장)</strong> — 가장 빠른 회수 트랙.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고 (ECRM)</strong> — ecrm.police.go.kr. 사기죄 + 기부금품법 위반 병합 고소. 다수 피해자 공동 고소 시 우선순위 상승.</li>\n<li><strong>4단계 — 한국소비자원 피해구제 (1372)</strong> — 사업자 자율 해결 권고 30일.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "좋은 일에 쓴 거니까" 포기하면 가해자가 다른 사연으로 같은 수법 반복합니다. 신고 이력은 향후 같은 운영자 추적의 출발점이에요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>행정안전부 기부금품 모집 등록 조회</strong> — 1365자원봉사 / mois.go.kr</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr</li>\n<li><strong>금융감독원 (계좌이체 환급)</strong> — 1332 / fss.or.kr</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n<li><strong>범죄피해자지원센터</strong> — 1577-1295 (전국 56개 센터)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 컴퓨터등사용사기는 사람에 대한 사기죄',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 등 정보처리장치에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 직접 대상으로 한 것이 아니라도, 그 정보처리 결과를 통해 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. 가짜 자선단체가 SNS·홈페이지를 통해 허위 사연을 게시하고 결제를 유도한 경우에도, 정보 입력을 매개로 한 기망 행위로 평가될 수 있다는 시사점이 있습니다.',
        takeaway: '가짜 모금 사기는 SNS 게시물·홈페이지·결제 시스템이 결합된 기망 구조라 사람에 대한 사기죄로 평가될 수 있으며, 게시물 캡처와 결제 흐름을 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '50만원 한 번 기부한 정도인데 신고할 가치가 있나요?',
        answer:
          '<strong>다수 피해자 신고가 누적되어야 가해자가 추적·기소됩니다.</strong> 본인 기부 금액이 적어도 같은 단체 누적 피해가 큰 경우가 많아요. ECRM 신고는 5분이면 가능.',
      },
      {
        question: '카드 차지백은 어떤 사유로 신청해야 하나요?',
        answer:
          '<strong>"용역 미제공" 또는 "허위 가맹점"으로 이의제기.</strong> 기부 약속이 이행되지 않았거나 단체가 가짜라는 점을 카드사에 설명. 통상 결제 후 90일 권장, 약관에 따라 180일까지도 접수 가능.',
      },
      {
        question: '기부영수증을 받았는데도 가짜 단체일 수 있나요?',
        answer:
          '<strong>위조된 기부영수증을 발급하는 사례도 있습니다.</strong> 영수증의 단체 등록번호·주소·발급기관을 행정안전부 명단과 대조. 영수증 위조면 별도 사문서위조죄까지 추가될 수 있어요.',
      },
      {
        question: '실제 등록 단체인데 사용처가 의심스러운 경우는요?',
        answer:
          '<strong>등록 단체는 행정안전부·시도청에 사용내역 공개 의무가 있습니다.</strong> 정보공개 청구로 사용내역 확인 → 부정 사용 의혹이 확인되면 신고. 정식 등록이라도 모집 목적 외 사용은 처벌 대상.',
      },
      {
        question: '연락처가 외국 단체로 되어 있는데 회수가 어렵지 않나요?',
        answer:
          '<strong>국내 결제·국내 카드사를 거쳤다면 차지백은 그대로 적용됩니다.</strong> 형사 고소는 국내 입금 계좌·국내 IP 정황이 있으면 진행. 카드사 차지백 우선, 형사 신고 병행이 안전한 트랙.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: '온라인 카페·커뮤니티 회비 환급', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 4. fraud / overseas-shipping-money-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-shipping-money-scam',
    keyword: '해외구매대행 사기 회수',
    questionKeyword: '해외구매대행 사이트에서 명품 80만원 결제했는데 가짜였어요. 카드 차지백·국제분쟁조정 어떻게 신청해요?',
    ctaKeyword: '해외구매대행 사기 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외구매대행 사기 회수 — 차지백·국제분쟁조정 5단계 | 로앤가이드',
      description:
        '해외구매대행 사이트에서 사기 결제 후 미배송·반품거절·가품 피해라면 카드사 차지백 + 국제분쟁조정 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"인스타그램 광고 보고 들어간 해외 명품 구매대행 사이트에서 80만원짜리 가방을 결제했어요. 한 달 후 도착한 상품은 명백한 가품이었고, 환불 요청하니 &lsquo;본사가 외국이라 처리 어렵다&rsquo;는 답만 돌아옵니다." 해외구매대행 사기는 국내 사이트지만 본사·재고가 외국이라 일반 환불이 어려운 구조라 카드사 차지백이 가장 강력한 회수 수단입니다. 결제 후 90일이 핵심 시한이고, 국제분쟁조정·KCA 피해구제·ECRM 신고를 동시 검토해볼 수 있어요. 사이트 폐쇄 전 증거 보전이 출발점입니다.</p>',
    sections: [
      {
        title: '결제 수단·사이트 형태별 회수 트랙 4가지',
        content:
          '<p><strong style="color:#1e3a5f">결제 방식과 사이트 형태에 따라 회수 절차가 갈립니다.</strong></p>\n<ul>\n<li><strong>국내 카드사 결제 → 차지백</strong> — 가장 강력. "재화 미제공·가품" 사유로 카드사 이의제기. 90일 권장, 약관에 따라 180일.</li>\n<li><strong>간편결제(카카오페이·네이버페이) → 결제사 + 카드사 병행</strong> — 결제사 환급 + 연계 카드사 차지백 동시 진행.</li>\n<li><strong>해외 카드 결제 → 비자·마스터 글로벌 차지백</strong> — 한국 사이트라도 결제 통화가 USD/EUR이면 글로벌 차지백 룰 적용. 카드사 통해 신청.</li>\n<li><strong>가상자산·해외 송금 → 회수 거의 불가</strong> — 형사 고소 외 트랙 제한적. 통신사기피해환급법 적용 어려움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전자상거래법 청약철회권은 한국에 사업자 등록이 있는 경우만 적용. 해외 본사 직판은 청약철회 트랙 어려워 차지백·국제분쟁조정·민사가 주된 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">한국소비자원·카드사·국제소비자분쟁기구 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 즉시 보전 (24시간 내)</strong> — 사이트 화면·상품 페이지·결제 내역·판매자 약관·반품 정책·받은 상품 사진/동영상 모두 캡처·저장. 사이트 폐쇄 전 보전.</li>\n<li><strong>2단계 — 판매자 환불 요청 + 거절 회신 보전 (1주 내)</strong> — 차지백 신청 시 "판매자에게 환불 요청했으나 거절" 증빙 필수. 이메일·고객센터 채팅 기록 PDF 저장.</li>\n<li><strong>3단계 — 카드사 차지백 신청 (결제 후 90일 내 권장)</strong> — 카드사 고객센터에 "재화 미제공·가품" 사유로 이의제기. 증빙 자료 + 환불 거절 이메일 첨부.</li>\n<li><strong>4단계 — 한국소비자원 + 국제분쟁조정 신청 (KCA·ICPEN ODR)</strong> — KCA 1372 사전 상담 → 피해구제. 해외 사업자면 ICPEN(국제소비자보호집행네트워크) ODR 시스템(econsumer.gov)에 영문 신청 가능.</li>\n<li><strong>5단계 — 경찰 ECRM 신고 + 민사 청구 (필요 시)</strong> — 동일 사이트 다수 피해자면 공동 고소단 구성. 차지백·KCA 결과에 따라 민사·형사 추가 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사이트 형태·결제 방식에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">차지백·국제분쟁조정 신청에 아래 자료를 미리 정리해두면 처리 속도가 빨라집니다.</strong></p>\n<ul>\n<li><strong>주문 확인 이메일·결제 영수증</strong> — 사업자 정보·주문번호·금액.</li>\n<li><strong>사이트 캡처</strong> — 상품 상세·반품 정책·고객센터 안내·약관 페이지.</li>\n<li><strong>판매자 환불 요청·거절 회신</strong> — 이메일·채팅·전화 녹취 시간순 정리.</li>\n<li><strong>받은 상품 사진/동영상</strong> — 가품 확인용 정품과 비교 사진, 포장 상태, 라벨.</li>\n<li><strong>광고·유입 경로 캡처</strong> — 인스타·페이스북·구글 광고 + URL.</li>\n<li><strong>사업자등록 정보 조회 결과</strong> — 한국 등록 여부 (ftc.go.kr 사업자정보공개).</li>\n<li><strong>피해구제 신청서·차지백 요청서</strong> — kca.go.kr·카드사 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 가품 받았는데 "그냥 손해 봤다"며 포기하면 다른 피해자가 계속 늘어납니다. 차지백은 본인이 직접 신청해야 하고, 사이트 폐쇄 후엔 증거 확보가 어려워요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 해외구매대행 사기에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"본사 정책상 환불 불가"</strong> — 한국 카드 결제건은 한국 카드사 약관·차지백 룰 적용. 본사 정책과 별개.</li>\n<li><strong>"반품비를 본인이 부담해야 환불"</strong> — 가품·재화 미제공이면 반품비 본인 부담 의무 없음. 이 조건 응하면 환불 안 되는 경우 다수.</li>\n<li><strong>"추가 수수료 송금하면 환급"</strong> — 100% 2차 사기. 절대 응하지 마세요.</li>\n<li><strong>판매자가 "한국에는 법적 권한 없다"고 주장</strong> — 한국 카드 결제 + 한국 소비자에 대한 판매라면 한국 법 적용 가능. 차지백·KCA 트랙 진행 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국소비자원 1372 / 카드사 고객센터 / 경찰청 ECRM(ecrm.police.go.kr) / ICPEN 국제소비자분쟁(econsumer.gov) / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 자금 이동과 재산국외도피죄 고의 판단',
        summary:
          '대법원 2025도8824 사건(대법원, 2025.09.25 선고)에서 법원은 처음부터 해외에서의 사용을 예정하지 않고 즉시 국내에 반입할 목적으로 자금을 해외 송금한 경우, 재산국외도피죄의 고의가 인정되지 않는다고 판시했습니다. 해외구매대행 사기 사건에서도 자금 흐름이 해외 단순 통과인지, 해외 은닉 의도인지에 따라 적용되는 처벌 조항과 회수 트랙이 달라진다는 시사점이 있습니다.',
        takeaway: '해외구매대행 사기는 자금 흐름·결제 통화·사이트 운영 주체의 국적에 따라 트랙이 갈리므로 결제 통화·승인 국가·환불 거절 회신을 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '카드 차지백은 무조건 받을 수 있나요?',
        answer:
          '<strong>"용역·재화 미제공" 또는 "가품" 입증 자료가 있어야 카드사가 승인합니다.</strong> 단순 변심·배송 지연은 차지백 사유 안 됨. 판매자 환불 거절 이메일이 강력한 증빙이에요.',
      },
      {
        question: '받은 상품이 가품인지 확신이 안 서는데요?',
        answer:
          '<strong>브랜드 정품 인증센터·전문 감정업체에서 감정서 발급 가능합니다.</strong> 명품·가전·시계는 감정 비용 5~30만원 정도. 차지백·KCA 신청 시 감정서가 있으면 처리 속도가 빨라져요.',
      },
      {
        question: '국제분쟁조정(ODR)은 어떻게 신청하나요?',
        answer:
          '<strong>econsumer.gov(ICPEN)에 영문 신청서 작성.</strong> 사업자 정보·결제 내역·환불 거절 회신 첨부. 한국에서 신청한 사건은 한국 KCA를 통해 해외 회원국으로 이송돼요. 처리 기간은 통상 60~90일.',
      },
      {
        question: '한국 사이트인데 본사가 해외라면 어디에 신고하나요?',
        answer:
          '<strong>한국 사업자 등록이 있으면 한국 트랙(KCA·ECRM) 우선.</strong> 사업자정보공개(ftc.go.kr)에서 등록 확인 가능. 미등록이면 한국 소비자 대상 영업이라도 형사 신고 + 차지백 트랙 검토.',
      },
      {
        question: '결제 후 6개월이 지났는데 차지백이 가능한가요?',
        answer:
          '<strong>일반적으로 90일 권장이지만 카드사 약관에 따라 180일까지도 접수 가능합니다.</strong> 6개월이면 어렵지만 카드사에 즉시 문의해보고, 안 되면 KCA·민사 트랙 검토. 시간이 늦을수록 입증 부담이 커져요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: 'SNS 쇼핑몰 미배송 대응', href: '/guide/fraud/fraud-sns-shopping-no-delivery' },
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '온라인 카페·커뮤니티 회비 환급', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 5. fraud / medical-illegal-product-sale ───
  {
    domain: 'fraud',
    slug: 'fraud-medical-illegal-product-sale',
    keyword: '의료기기 건강식품 허위판매 사기',
    questionKeyword: '"암·당뇨에 효과 있다"며 다단계로 의료기기 300만원 결제했는데 가짜였어요. 환불받을 수 있나요?',
    ctaKeyword: '의료기기 허위판매 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '의료기기·건강식품 허위판매 사기 — 환불 4단계 정리 | 로앤가이드',
      description:
        '의료기기·건강식품 허위·과장 판매 또는 다단계 사기 피해라면 KCA 피해구제 + 식약처/공정위 신고 + 경찰 사기 고소 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"동네 건강 강좌에서 &lsquo;암·당뇨에 효과 입증된 의료기기&rsquo;라며 300만원에 결제했어요. 알고 보니 식약처 허가도 안 받은 일반 가전이고, 환불 요청하니 &lsquo;본사 정책상 7일 지났다&rsquo;고 거부합니다." 의료기기·건강식품 허위판매와 다단계 사기는 노년층·만성질환자 같은 취약층을 대상으로 한 패턴이 많습니다. 의료기기법·식품표시광고법 + 사기죄 + 방문판매법 위반이 동시에 검토될 수 있어 KCA·식약처·공정위·경찰을 동시 신고하는 다트랙 접근이 회수 가능성을 높여요. 결제 후 14일이 청약철회 핵심 시한입니다.</p>',
    sections: [
      {
        title: 'Q. 허위판매로 보는 5가지 정황은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 정황 중 2개 이상이면 허위판매·사기 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>질병 치료·예방 효과 단정</strong> — "암·당뇨·고혈압 치료" 단정은 의료기기·건강식품 모두 광고 금지. 식품표시광고법 제8조·의료기기법 제24조 위반.</li>\n<li><strong>식약처 허가·인증번호 부재 또는 위조</strong> — 정상 의료기기는 식약처 허가번호가 있고 mfds.go.kr에서 조회 가능.</li>\n<li><strong>다단계·홍보관·체험회 계약 압박</strong> — "오늘만 할인", "지금 결제 안 하면 못 받는다" 단기 결정 압박.</li>\n<li><strong>현금 결제·일시불 강요</strong> — 카드 결제·할부 거부는 청약철회·차지백 차단 의도.</li>\n<li><strong>고령·취약층 집중 모집</strong> — 무료 강좌·관광·식사 미끼로 노년층 대량 모집.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 방문판매법 제8조 청약철회 14일 + 다단계는 별도 청약철회 90일. 형법 제347조 사기죄 + 방문판매법 위반(7년 이하)·의료기기법 위반(5년 이하)이 결합될 수 있어요.</blockquote>',
      },
      {
        title: 'Q. 환불 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제 시점·계약 형태에 따라 4가지 트랙으로 갈립니다.</strong></p>\n<ul>\n<li><strong>방문판매·홍보관 계약 (14일 내) → 청약철회</strong> — 방문판매법 제8조에 따라 14일 이내 무조건 청약철회 가능. 내용증명 발송이 출발.</li>\n<li><strong>다단계 가입 (90일 내) → 청약철회</strong> — 방문판매법 제17조 다단계는 90일 청약철회. 일반 방문판매보다 길게 보장.</li>\n<li><strong>14일/90일 경과 → 사기 + 허위 광고 트랙</strong> — KCA 피해구제 + 식약처/공정위 허위 광고 신고 + 경찰 사기 고소.</li>\n<li><strong>카드 결제분 → 차지백 병행</strong> — "재화 가장·허위 광고" 사유로 카드사 이의제기. 청약철회·KCA와 동시 진행.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약 형태·결제 시점에 따라 환불 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고는 어디에 어떻게 해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 신고 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 청약철회 내용증명 발송 (14일/90일 시한 내)</strong> — 본사 주소로 청약철회 내용증명. 양식은 KCA·공정위 홈페이지 다운로드. 내용증명 발송일이 청약철회 효력 발생일.</li>\n<li><strong>2단계 — 한국소비자원 + 카드사 차지백 (결제 후 90일 내)</strong> — KCA 1372 사전 상담 → 피해구제. 카드 결제분은 차지백 병행.</li>\n<li><strong>3단계 — 식약처 + 공정위 허위 광고 신고</strong> — 식약처 1577-1255(허가 미취득 의료기기·식품표시광고법 위반). 공정위 1372(과장·허위 광고).</li>\n<li><strong>4단계 — 경찰 사이버범죄 신고 (ECRM)</strong> — 사기죄 + 방문판매법 위반 병합 고소. 다수 피해자 공동 고소면 우선순위 상승.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "어르신이 자발적으로 사신 거라 어쩔 수 없다"며 포기하면 같은 업체가 다른 가족을 노립니다. 청약철회 시한 안이면 무조건 환불 가능, 시한 지나도 사기·허위 광고 트랙으로 회수 시도해보세요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr</li>\n<li><strong>식품의약품안전처</strong> — 1577-1255 / mfds.go.kr (허가번호 조회·허위 광고 신고)</li>\n<li><strong>공정거래위원회</strong> — 1372 / ftc.go.kr (방문판매법·다단계 위반 신고)</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n<li><strong>범죄피해자지원센터</strong> — 1577-1295 (전국 56개 센터)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영리 무면허 의료행위와 사기죄 결합 처벌',
        summary:
          '대법원 2024도3736 사건(대법원, 2025.11.13 선고)에서 법원은 의사가 의사 아닌 사람과 공모해 영리 목적으로 무면허 의료행위를 업으로 한 경우, 의사도 보건범죄 단속에 관한 특별조치법 제5조 제1호 위반죄의 공동정범으로 죄책을 진다고 판시했습니다. 의료기기·건강식품 허위판매 사기에서도 의료인이 공모·조력한 정황이 있으면 사기죄 외에 보건범죄단속법·의료법 위반이 결합되어 처벌 강도가 높아질 수 있다는 시사점이 있습니다.',
        takeaway: '의료기기·건강식품 허위판매는 단순 사기를 넘어 보건범죄·의료법·식품표시광고법 위반이 결합될 수 있어, 신고 시 광고 캡처·강사 발언 녹취·결제 내역을 함께 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '청약철회 14일이 지났는데 환불 가능한가요?',
        answer:
          '<strong>다단계는 90일까지 청약철회 가능, 그 외 시한 지나면 사기·허위 광고 트랙.</strong> KCA 피해구제 + 식약처 허위 광고 신고 + 경찰 사기 고소 병행. 시한 후라도 회수 가능성은 남아 있어요.',
      },
      {
        question: '현금으로 결제했는데도 차지백 같은 거 있나요?',
        answer:
          '<strong>현금 결제는 차지백 불가, 청약철회 + KCA + 형사 트랙으로 회수.</strong> 다음번부턴 가능하면 카드 할부 결제 권장. 14일/90일 청약철회 안에 내용증명 발송이 가장 강력한 출발.',
      },
      {
        question: '본사가 "이미 사용했으니 환불 불가"라며 거부합니다',
        answer:
          '<strong>방문판매법 청약철회는 사용 여부와 무관하게 14일/90일 보장됩니다.</strong> 단, 사용 흔적이 명백하면 일부 감액될 수 있음. 식약처 미허가·허위 광고가 입증되면 사용 여부 무관하게 환불 청구 강해져요.',
      },
      {
        question: '어머니가 다단계 가입까지 한 경우 어떻게 풀어야 하나요?',
        answer:
          '<strong>다단계는 90일 청약철회 가능 + 가족이 공정위에 다단계 위반 신고 가능.</strong> 가입 자체를 취소하면 이후 추가 매입·계약도 무효 처리. 노인 보호 차원에서 즉시 전문 상담(132 또는 시니어 보호 전문기관) 권장.',
      },
      {
        question: '식약처 허가받은 정상 의료기기인데 광고만 과장된 경우는요?',
        answer:
          '<strong>허가는 받았어도 광고가 과장이면 식품표시광고법·의료기기법 위반.</strong> 공정위·식약처에 허위·과장 광고 신고 + KCA 피해구제. 카드 차지백은 "광고와 다른 재화 제공" 사유로 시도 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: '온라인 카페·커뮤니티 회비 환급', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },
];
