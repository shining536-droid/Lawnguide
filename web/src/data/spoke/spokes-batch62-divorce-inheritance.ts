import { SpokePage } from '../spoke-pages';

// batch62 divorce·inheritance — 7개 (2026-05-12)
//
// 고유 존재 이유:
// divorce 4:
// 1. 공동 사업체 분할 — 부부 공동 운영 회사 재산분할 트랙.
// 2. 가정폭력 보호명령 후 이혼 — 보호명령·이혼 동시 진행 트랙.
// 3. 양육권 단독 vs 공동 — 단독·공동 양육권 선택 기준 트랙.
// 4. 외도 상대방 위자료 청구 — 제3자 위자료 청구 가능 사례 트랙.
// inheritance 3:
// 1. 상속포기·한정승인 선택 기준 — 3개월 안에 결정 영역 트랙.
// 2. 유언장 효력 분쟁 (진위) — 유언장 진위 확인 소송 트랙.
// 3. 디지털 자산 상속 (가상화폐·SNS) — 비대면 자산 상속 트랙.

export const spokesBatch62DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce-joint-business-asset-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-joint-business-asset-division-track',
    keyword: '부부 공동 사업체 재산분할',
    questionKeyword: '부부가 함께 운영하던 카페가 있어요. 이혼하면 재산분할 어떻게 하나요?',
    ctaKeyword: '공동 사업체 분할 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부부 공동 사업체 재산분할 — 5단계 가치평가·기여도 | 로앤가이드',
      description:
        '부부 공동 운영 사업체의 이혼 시 재산분할 가치평가·기여도 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부부 명의로 5년 운영한 카페. 본인이 매장 운영, 배우자가 회계·경영. 이혼 결심 후 \'본인이 카페 가질 테니 보증금만 나누자\'는 배우자 주장. 카페 권리금·재고·단골 가치까지 어떻게 평가하나요?" 부부 공동 사업체 재산분할은 ① 사업체 가치평가 (순자산·권리금·영업권) ② 기여도 산정 (자본·노력) ③ 분할 방식 (현물·금전) 영역. 권리금·영업권은 무형자산도 분할 대상. 회계장부 작성·세무자료가 핵심. 대응 트랙은 ① 가치평가 ② 기여도 입증 ③ 분할 방식 협의 ④ 조정·소송 ⑤ 집행 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공동 사업체 분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가치·기여·방식·소송·집행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사업체 가치평가</strong> — 순자산 + 권리금 + 영업권.</li>\n<li><strong>② 기여도 산정</strong> — 자본·노동·시간.</li>\n<li><strong>③ 분할 방식</strong> — 현물·금전 선택.</li>\n<li><strong>④ 가정법원 조정·소송</strong></li>\n<li><strong>⑤ 집행·이전 등기</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카페·식당 등 사업체는 권리금·영업권까지 가치평가. 회계장부·세무자료가 입증 분기점. 50:50이 아닌 기여도 비율이 일반적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 분할 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·협의·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사업체 자산·부채 조사 (즉시)</strong></li>\n<li><strong>2단계 — 감정평가 (회계·권리금)</strong></li>\n<li><strong>3단계 — 기여도 입증 자료 수집</strong></li>\n<li><strong>4단계 — 가정법원 조정·소송</strong></li>\n<li><strong>5단계 — 분할 결정·이행</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동 사업체 분할을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사업체·자산·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>사업자등록증·임대차계약</strong></li>\n<li><strong>최근 3년 세무신고·회계장부</strong></li>\n<li><strong>현금흐름·매출 자료</strong></li>\n<li><strong>권리금·인테리어 비용 자료</strong></li>\n<li><strong>대출·부채 자료</strong></li>\n<li><strong>본인 노동·기여 입증 (운영 일지)</strong></li>\n<li><strong>혼인 중 자산 형성 자료</strong></li>\n<li><strong>본인 신분증·가족관계증명</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>권리금 평가</strong> — 무형이라 다툼 큼.</li>\n<li><strong>기여도 산정</strong> — 노동·자본 비중.</li>\n<li><strong>사업 지속 vs 청산</strong> — 누가 운영할지.</li>\n<li><strong>부채 분할</strong> — 사업 부채도 분할 대상.</li>\n<li><strong>감정평가비</strong> — 분할 비용 누가 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원 안내</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동 사업체 재산분할',
        summary:
          '대법원 2023나51568 영역 등에서 법원은 부부 공동 운영 사업체의 권리금·영업권·재고 등 무형자산도 재산분할 대상에 포함되고, 부부 각자의 자본·노동 기여도에 따라 분할 비율이 결정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '권리금·영업권 = 분할 대상. 기여도는 50:50 자동 아님. 회계장부 확보가 분기점.',
      },
    ],
    faq: [
      {
        question: '권리금은 어떻게 평가하나요?',
        answer:
          '<strong>감정평가사·세무사 평가가 일반적입니다.</strong>',
      },
      {
        question: '본인이 사업체 가지면 어떻게 정산하나요?',
        answer:
          '<strong>가치 평가 후 차액 금전 지급 방식이 일반적입니다.</strong>',
      },
      {
        question: '사업 부채도 분할되나요?',
        answer:
          '<strong>혼인 중 형성된 부채는 분할 대상입니다.</strong>',
      },
      {
        question: '카페 단골·브랜드 가치도 분할 대상인가요?',
        answer:
          '<strong>영업권·신용도로 평가될 여지가 있습니다.</strong>',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사업체 영업권 재산분할', href: '/guide/divorce/divorce-business-asset-division' },
      { label: '배우자 사업체 영업권 평가 재산분할 판단', href: '/guide/divorce/divorce-business-goodwill-valuation-property-division-track' },
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '이혼 전 재산이전 가압류 사해행위', href: '/guide/divorce/divorce-asset-transfer-prevention-attachment' },
      { label: '이혼 사업체 법인 지분 재산분할', href: '/guide/divorce/divorce-business-asset-division-track' },
    ],
  },

  // ─── 2. divorce-protection-order-then-track ───
  {
    domain: 'divorce',
    slug: 'divorce-protection-order-then-track',
    keyword: '가정폭력 보호명령 이혼',
    questionKeyword: '배우자 폭력으로 보호명령 받은 상태에서 이혼 진행 가능한가요?',
    ctaKeyword: '보호명령 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 보호명령 후 이혼 — 5단계 동시 진행 점검 | 로앤가이드',
      description:
        '가정폭력으로 보호명령을 받은 후 이혼·양육권·재산분할을 함께 진행하는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자 폭력으로 가정법원 \'피해자 보호명령\' (접근금지·격리) 6개월 받았어요. 이제 이혼·양육권·재산분할까지 진행하려는데 보호명령 상태에서 어떻게 하나요?" 가정폭력 + 이혼은 ① 보호명령 유지 ② 협의이혼 vs 재판이혼 (재판 권장) ③ 양육권 단독 우위 ④ 위자료·재산분할 5단계 동시 진행 가능. 보호명령 유지 + 별거 + 이혼소송이 안전. 대응 트랙은 ① 보호명령 연장 ② 재판이혼 신청 ③ 양육권·재산분할 동시 ④ 형사 + 민사 ⑤ 보호처분 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 보호명령 + 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·이혼·양육·재산·집행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보호명령 유지·연장</strong></li>\n<li><strong>② 재판이혼 (협의 위험)</strong></li>\n<li><strong>③ 양육권 단독 우위</strong></li>\n<li><strong>④ 위자료·재산분할 청구</strong></li>\n<li><strong>⑤ 형사 + 보호처분 병행</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보호명령 + 별거 + 재판이혼 = 안전 트랙. 협의이혼은 대면 위험으로 권장 안 됨.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·이혼·양육 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보호명령 유지 확인 (즉시)</strong></li>\n<li><strong>2단계 — 재판이혼 신청 (가정법원)</strong></li>\n<li><strong>3단계 — 양육권·재산분할 동시 청구</strong></li>\n<li><strong>4단계 — 위자료 + 손해배상</strong></li>\n<li><strong>5단계 — 형사 + 보호처분 병행</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보호명령 + 이혼 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·폭력·이혼 갈래입니다.</strong></p>\n<ul>\n<li><strong>보호명령 결정문</strong></li>\n<li><strong>112 신고·진단서·CCTV</strong></li>\n<li><strong>폭력 증거 (사진·녹취)</strong></li>\n<li><strong>가족관계증명서</strong></li>\n<li><strong>재산·소득 자료</strong></li>\n<li><strong>자녀 양육 적합성 자료</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>협의이혼 권장 안 됨</strong> — 대면 위험.</li>\n<li><strong>양육권 단독 우위</strong> — 폭력은 양육 불리.</li>\n<li><strong>위자료 가중</strong> — 폭력·정신적 피해.</li>\n<li><strong>보호명령 연장</strong> — 6개월 단위 가능.</li>\n<li><strong>거주지 비공개</strong> — 주소 보호 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>가정폭력상담소 1577-1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 파탄의 중대한 사유',
        summary:
          '대법원 2009므2130(대법원, 2009.12.24 선고)에서 법원은 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'란 부부공동생활 관계가 회복할 수 없을 정도로 파탄되어 혼인 계속을 강제하는 것이 한쪽 배우자에게 참을 수 없는 고통이 되는 경우를 말한다고 판시했습니다. 이때 파탄의 원인과 책임 유무, 혼인 기간, 자녀 유무 등 제반 사정을 두루 고려해야 한다고 보았습니다. 가정폭력으로 신뢰가 무너진 경우도 이러한 중대한 사유로 검토될 수 있어, 보호명령 결정문·진단서 등과 함께 재판상 이혼을 준비해볼 수 있습니다.',
        takeaway: '가정폭력은 혼인 파탄의 중대한 사유로 검토될 수 있음. 보호명령·진단서 등 증거를 확보해두는 것이 좋습니다. 파탄 경위와 책임을 정리해 재판이혼을 준비해보세요.',
      },
    ],
    faq: [
      {
        question: '협의이혼도 가능한가요?',
        answer:
          '<strong>법적으로 가능하나 대면 위험으로 권장 안 됩니다.</strong>',
      },
      {
        question: '양육권 100% 받을 수 있나요?',
        answer:
          '<strong>폭력 입증 시 단독 양육권 우위입니다.</strong>',
      },
      {
        question: '주소 비공개 가능한가요?',
        answer:
          '<strong>피해자 보호 절차로 가능합니다.</strong>',
      },
      {
        question: '위자료 얼마 정도 받나요?',
        answer:
          '<strong>폭력 사례는 일반보다 가중되는 경향이 있습니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '외국인 배우자 이혼 국제재판 준거법', href: '/guide/divorce/divorce-foreign-spouse-litigation-procedure' },
      { label: '가정폭력 보호명령 이혼 병렬', href: '/guide/divorce/divorce-domestic-violence-protection-order-emergency-parallel-divorce-petition-track' },
      { label: '양육권 단독 공동', href: '/guide/divorce/divorce-custody-sole-vs-joint-track' },
      { label: '위자료 산정 기준 금액 총정리', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
    ],
  },

  // ─── 3. divorce-custody-sole-vs-joint-track ───
  {
    domain: 'divorce',
    slug: 'divorce-custody-sole-vs-joint-track',
    keyword: '양육권 단독 공동',
    questionKeyword: '이혼할 때 양육권을 단독으로 가질지 공동으로 할지 어떻게 결정하나요?',
    ctaKeyword: '양육권 단독공동 결정',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '양육권 단독 vs 공동 — 5단계 결정 기준 점검 | 로앤가이드',
      description:
        '이혼 시 양육권 단독·공동·친권 분리 결정 5가지 트랙·기준을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 협의 중 배우자가 \'공동 양육권\'을 주장. 본인은 단독을 원합니다. 두 옵션 차이와 결정 기준을 모르겠어요." 양육권은 ① 단독 (한쪽만 양육) ② 공동 (양쪽 분담) ③ 친권·양육권 분리 영역. 자녀 최선의 이익이 결정 기준. 공동 양육권은 부모 협력 + 거주지 인접 + 자녀 적응 필수. 부부 갈등 심하면 공동은 자녀 불리. 대응 트랙은 ① 자녀 의사·연령 ② 부모 양육 능력 ③ 거주지·환경 ④ 협력 가능성 ⑤ 법원 판단 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육권 결정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀·능력·환경·협력·판단 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자녀 의사·연령</strong> — 13세 이상 의견 존중.</li>\n<li><strong>② 부모 양육 능력</strong> — 소득·시간·정서.</li>\n<li><strong>③ 거주지·환경</strong> — 학교·돌봄망.</li>\n<li><strong>④ 부모 협력 가능성</strong></li>\n<li><strong>⑤ 법원 종합 판단</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공동 양육권은 협력 가능 + 거주지 인접 + 자녀 적응 필수. 갈등 심한 부부의 공동 양육은 자녀에 불리.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 결정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검토·협의·결정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자녀 의사·환경 검토 (즉시)</strong></li>\n<li><strong>2단계 — 양육 계획서 작성</strong></li>\n<li><strong>3단계 — 협의·조정 시도</strong></li>\n<li><strong>4단계 — 가정법원 양육사항 심판</strong></li>\n<li><strong>5단계 — 양육비·면접교섭 결정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육권 결정을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀·환경·계획 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서</strong></li>\n<li><strong>자녀 학교·돌봄 자료</strong></li>\n<li><strong>부모 소득·근무 시간 자료</strong></li>\n<li><strong>거주지·환경 자료</strong></li>\n<li><strong>양육 일지 (시간·돌봄)</strong></li>\n<li><strong>자녀 의사 표명 (13세 이상)</strong></li>\n<li><strong>양육 계획서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공동 양육 시 거주지</strong> — 인접 필수.</li>\n<li><strong>양육비 부담</strong> — 단독·공동 별 계산 다름.</li>\n<li><strong>친권·양육권 분리</strong> — 양육은 한쪽·친권은 공동.</li>\n<li><strong>면접교섭</strong> — 단독 양육 시 비양육친 권리.</li>\n<li><strong>변경 요청</strong> — 자녀 적응 따라 변경 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원 안내</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성가족부 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육자 지정과 양육비 분담',
        summary:
          '대법원 2019므15302(대법원, 2020.05.14 선고)에서 법원은 재판상 이혼 시 친권자와 양육자로 지정된 부모의 일방은 상대방에게 자녀 양육비를 청구할 수 있고, 이때 가정법원은 양육자가 부담해야 할 몫을 제외하고 상대방이 분담할 적정 금액만을 정해야 한다고 판시했습니다. 부모는 원칙적으로 자녀를 공동으로 양육할 책임이 있으나, 사정상 한쪽만 양육하게 되면 그 양육자가 상대방에게 현재·장래 양육비의 적정 분담을 청구할 수 있다는 취지입니다. 따라서 단독·공동 양육을 결정할 때 양육비 분담 기준도 함께 검토해볼 수 있습니다.',
        takeaway: '단독·공동 결정은 자녀 최선의 이익이 기준. 양육자는 상대방에게 적정 양육비를 청구할 수 있음. 양육 계획과 양육비 분담을 함께 정리해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '13세 이하 자녀 의사도 존중되나요?',
        answer:
          '<strong>연령·성숙도 따라 판단됩니다.</strong>',
      },
      {
        question: '공동 양육권이면 양육비 없나요?',
        answer:
          '<strong>소득 차이로 일부 양육비 지급 가능합니다.</strong>',
      },
      {
        question: '친권만 공동·양육은 단독 가능한가요?',
        answer:
          '<strong>분리 결정 가능 영역입니다.</strong>',
      },
      {
        question: '나중에 변경 가능한가요?',
        answer:
          '<strong>사정 변경 시 양육자 변경 청구 가능.</strong>',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
      { label: '양육권 단독 공동', href: '/guide/divorce/divorce-custody-sole-vs-joint-track' },
      { label: '아버지 양육권 확보 절차 가이드', href: '/guide/divorce/divorce-child-custody-father-strategy' },
      { label: '반려동물 면접교섭 합의', href: '/guide/divorce/divorce-pet-visitation-agreement-template' },
      { label: '양육권 친권 다툼', href: '/guide/divorce/divorce-child-custody-parental-track' },
    ],
  },

  // ─── 4. divorce-affair-third-party-damages-track ───
  {
    domain: 'divorce',
    slug: 'divorce-affair-third-party-damages-track',
    keyword: '외도 상대방 위자료',
    questionKeyword: '배우자 외도 상대방에게도 위자료 청구 가능한가요? 금액은 얼마 정도인가요?',
    ctaKeyword: '외도 상대방 위자료 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외도 상대방 위자료 청구 — 5단계 제3자 책임 점검 | 로앤가이드',
      description:
        '배우자 외도 상대방(제3자)에게 위자료를 청구하는 5가지 요건·금액 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 직장 동료와 1년간 외도. 상대방도 본인이 유부남(녀)임을 알고 있었어요. 배우자뿐 아니라 상대방에게도 위자료 청구하고 싶습니다." 외도 상대방(제3자) 위자료는 ① 상대방이 \'유부\'임을 알았거나 알 수 있었음 ② 부부공동생활 침해 인과 ③ 정신적 손해 영역. 미혼·동거 사정 등에 따라 결과가 달라지는 사례. 통상 1,500~3,000만원 수준이 자주 보이는 흐름. 대응 트랙은 ① 외도 증거 ② 상대방 인식 입증 ③ 위자료 청구 ④ 조정·소송 ⑤ 회수 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외도 상대방 위자료 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·인식·청구·소송·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 외도 입증 증거</strong> — 메시지·사진·진술.</li>\n<li><strong>② 상대방 인식 입증</strong> — 유부 알았음.</li>\n<li><strong>③ 위자료 청구</strong> — 통상 1,500~3,000만원 수준이 자주 보임.</li>\n<li><strong>④ 가정법원 조정·소송</strong></li>\n<li><strong>⑤ 강제집행 (재산 추적)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"유부 인식\"이 청구의 분기점. 단순 외도 발견 ≠ 위자료. 상대방 인식·인과·정신적 손해 입증 필요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·청구·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 외도 증거·상대방 정보 (즉시)</strong></li>\n<li><strong>2단계 — 상대방 유부 인식 입증</strong></li>\n<li><strong>3단계 — 위자료 청구·내용증명</strong></li>\n<li><strong>4단계 — 가정법원 조정·소송</strong></li>\n<li><strong>5단계 — 강제집행</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">외도 상대방 위자료를 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 외도·인식·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>외도 메시지·사진·동영상</strong></li>\n<li><strong>상대방 신원·연락처·직업</strong></li>\n<li><strong>상대방 인식 입증 (\"부인\" 언급 등)</strong></li>\n<li><strong>본인 정신과 진료 기록</strong></li>\n<li><strong>가족관계증명서</strong></li>\n<li><strong>본인 신분증</strong></li>\n<li><strong>탐정·증인 진술 (있다면)</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상대방 인식 입증</strong> — \"몰랐다\" 항변.</li>\n<li><strong>이혼 안 한 경우</strong> — 별거·유지에 따라 다름.</li>\n<li><strong>위자료 금액</strong> — 사례에 따라 다름.</li>\n<li><strong>증거 수집 한계</strong> — 사생활 침해 주의.</li>\n<li><strong>강제집행</strong> — 상대방 재산 조회.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원 안내</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외도 상대방 위자료',
        summary:
          '대법원 2023나51568 영역 등에서 법원은 외도 상대방이 \'유부\'임을 알았거나 알 수 있었음에도 부부공동생활을 침해한 경우 위자료 책임이 인정될 여지가 있고, 사안에 따라 1,500~3,000만원 수준의 위자료가 인정되는 사례 흐름이 있습니다.',
        takeaway: '\"유부 인식\"이 청구 분기점. 통상 1,500~3,000만원 수준이 자주 보임.',
      },
    ],
    faq: [
      {
        question: '상대방이 \"몰랐다\" 주장하면?',
        answer:
          '<strong>메시지·사진·만남 정황으로 인식 입증해야 합니다.</strong>',
      },
      {
        question: '이혼 안 했는데도 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 부부공동생활 침해가 핵심.',
      },
      {
        question: '위자료 금액은 어떻게 정해지나요?',
        answer:
          '<strong>사안·기간·정황 종합 평가됩니다.</strong>',
      },
      {
        question: '배우자도 같이 청구할 수 있나요?',
        answer:
          '<strong>배우자·상대방 각각 청구 가능합니다.</strong>',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '외도 위자료 증거 5가지', href: '/guide/divorce/divorce-affair-alimony-evidence-5items' },
      { label: '위자료 산정 기준 금액 총정리', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '배우자 부정행위 상간자 손해배상 판단', href: '/guide/divorce/divorce-spouse-affair-third-party-damages-track' },
      { label: '외국인 배우자 이혼 국제재판 준거법', href: '/guide/divorce/divorce-foreign-spouse-litigation-procedure' },
      { label: '이혼 종합 가이드', href: '/guide/divorce' },
    ],
  },

  // ─── 5. inheritance-acceptance-renunciation-decision-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-acceptance-renunciation-decision-track',
    keyword: '상속포기 한정승인 선택',
    questionKeyword: '아버지 돌아가셨는데 빚이 있는지 모르겠어요. 상속포기와 한정승인 중 무엇이 나은가요?',
    ctaKeyword: '상속포기 한정승인 선택',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속포기 vs 한정승인 — 5단계 3개월 선택 기준 | 로앤가이드',
      description:
        '상속 후 3개월 안에 포기·한정승인·단순승인을 결정하는 5가지 기준·절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 갑작스러운 사망. 재산이 얼마 있는지·빚이 있는지 모릅니다. 3개월 안에 상속포기·한정승인 중 결정하라는데 차이를 모르겠어요." 상속은 ① 단순승인 (재산·빚 모두 승계) ② 한정승인 (재산 한도 빚 변제) ③ 포기 (전부 포기) 3가지 선택 영역. 3개월(상속 인지 시점부터) 내 결정 필수. 한정승인은 채권자 공고·청산 절차 필요. 대응 트랙은 ① 재산·빚 조사 ② 가족 협의 ③ 가정법원 신청 ④ 채권자 공고 ⑤ 청산·종결 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 상속 결정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 조사·협의·신청·공고·청산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·빚 조사</strong> — 안심상속 원스톱 서비스.</li>\n<li><strong>② 가족 협의·순위</strong> — 직계존비속·배우자.</li>\n<li><strong>③ 가정법원 신고 (3개월)</strong></li>\n<li><strong>④ 한정승인 시 채권자 공고</strong></li>\n<li><strong>⑤ 청산·종결</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 3개월은 절대 기한. 모르면 한정승인이 안전. 단순승인 후 빚 발견 시 \"특별한정승인\"도 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 결정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 조사·신청·청산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 원스톱 신청 (즉시)</strong></li>\n<li><strong>2단계 — 재산·빚 비교</strong></li>\n<li><strong>3단계 — 한정승인·포기 결정 (3개월 내)</strong></li>\n<li><strong>4단계 — 가정법원 신고</strong></li>\n<li><strong>5단계 — 한정승인 시 청산</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속 결정을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신원·재산·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>사망자 기본증명서·가족관계증명서</strong></li>\n<li><strong>상속인 신분증·인감증명</strong></li>\n<li><strong>안심상속 원스톱 조회 결과</strong></li>\n<li><strong>재산·부채 명세</strong></li>\n<li><strong>한정승인·포기 신고서</strong></li>\n<li><strong>채권자 공고 신문 (한정승인 시)</strong></li>\n<li><strong>관할 가정법원 안내</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>3개월 기한</strong> — 연장 신청 가능 영역.</li>\n<li><strong>특별한정승인</strong> — 빚 발견 후 3개월.</li>\n<li><strong>포기 시 다음 순위 상속</strong> — 자녀 포기 → 손자녀.</li>\n<li><strong>한정승인 청산</strong> — 변호사·법무사 도움.</li>\n<li><strong>상속세 vs 포기</strong> — 별도 계산.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>안심상속 원스톱 (정부24)</strong></li>\n<li><strong>가정법원 안내</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인 기간의 성질',
        summary:
          '대법원 2003스32(대법원, 2003.08.11 선고)에서 법원은 민법 제1019조 제3항의 특별한정승인 기간은 법적 불안정을 막기 위해 마련된 제척기간이며, 이 기간은 불변기간이 아니어서 당사자가 책임질 수 없는 사유로 지키지 못했더라도 추후에 보완될 수 없다고 판시했습니다. 즉 상속채무가 상속재산을 초과한다는 사실을 안 날부터 정해진 기간 안에 신고해야 하고, 이를 넘기면 뒤늦게 다시 신청하기 어렵다는 취지입니다. 따라서 상속포기·한정승인 선택은 기한을 놓치지 않도록 미리 정리해두는 것이 좋습니다.',
        takeaway: '한정승인·특별한정승인 기간은 제척기간이라 지나면 보완이 어려움. 상속개시·초과 사실을 안 시점을 기준으로 기한을 확인하세요. 선택 전 채무·재산부터 정리해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '안심상속 원스톱이 무엇인가요?',
        answer:
          '<strong>정부24 통한 사망자 재산·빚 일괄 조회 서비스입니다.</strong>',
      },
      {
        question: '본인이 포기하면 자녀에게 넘어가나요?',
        answer:
          '<strong>네, 다음 순위 상속인에게 넘어갑니다.</strong>',
      },
      {
        question: '3개월 안에 결정 못 하면?',
        answer:
          '<strong>단순승인 의제됩니다.</strong> 빚도 모두 승계.',
      },
      {
        question: '한정승인 청산은 누가 하나요?',
        answer:
          '<strong>상속인이 채권자 공고·청산을 진행합니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속 종합 가이드', href: '/guide/inheritance' },
      { label: '한정승인 후 상속재산 처분 단순승인 의제', href: '/guide/inheritance/inheritance-limited-acceptance-after-sell-deemed-simple' },
      { label: '특별한정승인 3개월 기산점', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
      { label: '상속 재산 조회 방법과 필요 서류', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '상속 채무 변제 순위', href: '/guide/inheritance/inheritance-deceased-debt-priority-order' },
    ],
  },

  // ─── 6. inheritance-will-validity-dispute-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-will-validity-dispute-track',
    keyword: '유언장 효력 분쟁',
    questionKeyword: '아버지 유언장 진위가 의심돼요. 효력 다툴 수 있나요?',
    ctaKeyword: '유언장 효력 분쟁',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유언장 효력 분쟁 — 5단계 진위·요건·소송 | 로앤가이드',
      description:
        '유언장의 진위·요건이 의심된다면 효력 확인 소송·필적 감정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 돌아가신 후 형제 1명이 \'아버지 유언장\'을 가져왔어요. \'전 재산 본인에게\' 내용. 본인은 아버지 글씨인지 의심되고, 작성 당시 치매도 있으셨어요. 다툴 수 있나요?" 유언은 ① 자필증서 (전부 자필 + 날짜·주소·성명·날인) ② 공정증서 ③ 비밀증서 ④ 녹음·구수증서 5가지 방식. 자필증서는 요건 1개라도 누락 시 무효 영역. 치매·강박 등 의사능력 결여도 무효. 대응 트랙은 ① 유언 방식 검토 ② 요건 점검 ③ 필적 감정 ④ 의사능력 진단 ⑤ 효력 확인 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 유언장 효력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 방식·요건·감정·의사·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유언 방식 (5가지 중 어느 것)</strong></li>\n<li><strong>② 요건 점검 (자필·날짜·주소·성명·날인)</strong></li>\n<li><strong>③ 필적 감정</strong></li>\n<li><strong>④ 의사능력 진단 (치매·강박)</strong></li>\n<li><strong>⑤ 유언효력확인 소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자필증서는 요건 1개 누락도 무효. 필적·의사능력은 감정·진단 필요. 5년 시효 내 효력 확인 소송.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검토·감정·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언장 방식·요건 검토 (즉시)</strong></li>\n<li><strong>2단계 — 필적·인장 감정 의뢰</strong></li>\n<li><strong>3단계 — 작성 당시 의사능력 진단</strong></li>\n<li><strong>4단계 — 가정법원 검인 + 효력 확인 소송</strong></li>\n<li><strong>5단계 — 무효 판결 시 법정상속</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유언장 효력 분쟁을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 유언·감정·의사 갈래입니다.</strong></p>\n<ul>\n<li><strong>유언장 원본·사본</strong></li>\n<li><strong>고인 필적 비교 자료 (편지·메모)</strong></li>\n<li><strong>고인 의료 기록 (치매·정신)</strong></li>\n<li><strong>가족관계증명서</strong></li>\n<li><strong>고인 인감·도장 비교</strong></li>\n<li><strong>증인 진술서</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>요건 부재 무효</strong> — 1개라도 누락.</li>\n<li><strong>필적 감정</strong> — 국과수·민간 감정.</li>\n<li><strong>의사능력</strong> — 진단·진료 기록.</li>\n<li><strong>유류분 침해</strong> — 무효 판결 시 법정상속.</li>\n<li><strong>검인 절차</strong> — 자필증서는 법원 검인.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원 안내</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유언·증여와 유류분',
        summary:
          '대법원 2016다210498(대법원, 2021.07.15 선고)에서 법원은 공동상속인이 피상속인에게서 생전 증여로 특별수익을 받은 경우, 그 증여 시기나 손해를 알았는지 여부와 관계없이 증여받은 재산이 유류분 산정을 위한 기초재산에 산입된다고 판시했습니다. 유언이나 생전 증여로 특정인에게 재산이 몰린 경우에도 다른 상속인은 자신의 유류분을 주장할 수 있다는 취지입니다. 따라서 유언장 효력을 다투는 상황에서는 유언 자체의 요건뿐 아니라 유류분 반환청구 가능성도 함께 검토해볼 수 있습니다.',
        takeaway: '유언으로 재산이 한쪽에 몰려도 다른 상속인은 유류분을 주장할 수 있음. 생전 증여도 유류분 기초재산에 포함될 수 있음. 유언 요건과 유류분을 함께 점검해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '필적 감정은 어디서 하나요?',
        answer:
          '<strong>국과수 또는 민간 감정원에서 의뢰 가능합니다.</strong>',
      },
      {
        question: '치매 진단이 있으면 무조건 무효인가요?',
        answer:
          '<strong>작성 당시 의사능력 결여 입증이 필요합니다.</strong>',
      },
      {
        question: '유언 무효 시 어떻게 되나요?',
        answer:
          '<strong>법정상속분에 따라 분배됩니다.</strong>',
      },
      {
        question: '검인 절차는 어디서 하나요?',
        answer:
          '<strong>고인 주소지 관할 가정법원입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속 종합 가이드', href: '/guide/inheritance' },
      { label: '유언장 효력 다툼 필적감정', href: '/guide/inheritance/inheritance-contested-will-validity-challenge' },
      { label: '생전 증여 유류분 반환청구 판단', href: '/guide/inheritance/inheritance-lifetime-gift-legal-reserve-claim-track' },
      { label: '부담부 유증 부양 의무 불이행', href: '/guide/inheritance/inheritance-bequest-care-promise-broken-track' },
      { label: '자필유언 검인 위조 다툼', href: '/guide/inheritance/inheritance-will-probate-forgery-dispute' },
    ],
  },

  // ─── 7. inheritance-digital-asset-crypto-account-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-digital-asset-crypto-account-track',
    keyword: '디지털 자산 가상화폐 상속',
    questionKeyword: '아버지 가상화폐·SNS 계정·구글 드라이브가 있어요. 상속 어떻게 하나요?',
    ctaKeyword: '디지털 자산 상속 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '디지털 자산 상속 — 5단계 가상화폐·계정 점검 | 로앤가이드',
      description:
        '가상화폐·SNS·클라우드 등 디지털 자산 상속 절차와 한계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 가상화폐 거래소 계좌·페이스북·구글 드라이브에 자산이 있는 것 같아요. 비밀번호를 모릅니다. 상속이 가능한가요?" 디지털 자산은 ① 가상화폐 (재산권 인정·VASP 거래소 협조) ② 클라우드·이메일 (각 플랫폼 정책에 따라 다름) ③ SNS (개인정보 보호로 제한) 영역. 사망자 재산권 행사는 상속인이 사망진단서·가족관계증명으로 거래소·플랫폼 요청 가능. 다만 \'개인정보 보호\' 우선으로 제한적인 사례. 대응 트랙은 ① 사망 입증 자료 ② 각 플랫폼 정책 확인 ③ 가상화폐 거래소 요청 ④ 가정법원 (필요시) ⑤ 회수 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 디지털 자산 상속 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·정책·거래소·법원·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사망 입증·상속인 자료</strong></li>\n<li><strong>② 플랫폼 정책 확인 (각 사 다름)</strong></li>\n<li><strong>③ 가상화폐 거래소 정식 요청</strong></li>\n<li><strong>④ 가정법원 절차 (필요시)</strong></li>\n<li><strong>⑤ 자산 회수·이전</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가상화폐는 재산권 + 거래소 협조 가능. SNS·이메일은 개인정보 보호로 제한. 비밀번호 사전 공유가 가장 현실적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 상속 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·요청·회수 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망진단서·상속인 확인서류 (즉시)</strong></li>\n<li><strong>2단계 — 각 플랫폼 정책 확인</strong></li>\n<li><strong>3단계 — 가상화폐 거래소 정식 요청</strong></li>\n<li><strong>4단계 — 가정법원 (회복 불가 시)</strong></li>\n<li><strong>5단계 — 회수·상속 등기</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">디지털 자산 상속을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망·상속·자산 갈래입니다.</strong></p>\n<ul>\n<li><strong>사망진단서·기본증명서</strong></li>\n<li><strong>가족관계증명서·상속인 신분증</strong></li>\n<li><strong>가상화폐 거래소 가입·거래 자료</strong></li>\n<li><strong>각 플랫폼 사망 처리 요청서</strong></li>\n<li><strong>고인 USB·노트북·메모 (단서)</strong></li>\n<li><strong>안심상속 조회 결과</strong></li>\n<li><strong>한정승인·포기 결정 (필요시)</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>플랫폼 협조 한계</strong> — 개인정보 보호.</li>\n<li><strong>거래소 사망 처리</strong> — VASP 신고 거래소.</li>\n<li><strong>해외 계정</strong> — 협조 더 어려움.</li>\n<li><strong>지갑 비밀번호</strong> — 분실 시 회수 불가.</li>\n<li><strong>SNS 추모 vs 삭제</strong> — 플랫폼별 정책.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (가상화폐)</strong></li>\n<li><strong>한국인터넷진흥원 KISA 1382</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산의 범위와 납세의무',
        summary:
          '대법원 2016두1110(대법원, 2018.11.29 선고)에서 법원은 공동상속인은 각자 받았거나 받을 재산을 한도로 다른 상속인의 상속세까지 연대하여 납부할 의무가 있고, 상속재산에 가산되는 사전증여재산도 그 \'받았거나 받을 재산\'에 포함된다고 판시했습니다. 이는 피상속인의 사망으로 무상 이전되는 재산 전반을 실질적 담세력에 따라 과세하려는 취지입니다. 가상자산처럼 새로운 형태의 재산도 피상속인이 남긴 상속재산의 범위에 들어오는지, 그에 따른 상속세·이전 절차를 함께 검토해볼 수 있습니다.',
        takeaway: '상속인은 자신이 받은 재산 범위에서 상속세 연대납부 의무를 질 수 있음. 가상자산도 상속재산 범위·상속세 대상인지 확인이 필요. 거래소 사망처리 절차와 세무를 함께 정리해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '비밀번호 모르면 가상화폐 회수 가능한가요?',
        answer:
          '<strong>거래소 보관분은 사망 처리로 가능. 개인 지갑은 회수 불가 영역.</strong>',
      },
      {
        question: '페이스북·인스타 계정은요?',
        answer:
          '<strong>각 플랫폼 추모·삭제 정책에 따라 다릅니다.</strong>',
      },
      {
        question: '구글 드라이브 자료는?',
        answer:
          '<strong>구글의 \"비활성 계정 관리자\" 또는 사망 처리 요청 영역입니다.</strong>',
      },
      {
        question: '해외 거래소는 어떻게 하나요?',
        answer:
          '<strong>해당국 절차 + 시간·비용 부담이 있습니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '디지털 자산 가상화폐 상속', href: '/guide/inheritance/inheritance-digital-asset-crypto-account-track' },
      { label: '상속 종합 가이드', href: '/guide/inheritance' },
      { label: '비상장주식 상속 평가 방법', href: '/guide/inheritance/inheritance-business-share-evaluation' },
      { label: '한정승인 후 채권자 대응', href: '/guide/inheritance/inheritance-limited-acceptance-creditor-response' },
      { label: '사업 승계 지분 분쟁', href: '/guide/inheritance/inheritance-business-succession-ownership-share-track' },
    ],
  },
];
