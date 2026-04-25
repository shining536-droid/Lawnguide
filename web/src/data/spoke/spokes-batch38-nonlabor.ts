import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch38 비노동 10개: 이혼 2 + 교통 2 + 사기 2 + 회생·파산 2 + 상속 1 + 스토킹 1
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 이혼 조정 이후 상대방 기망·재산은닉이 드러난 배우자에게 조정조서 취소·재소송 기준 안내.
// 2. 이혼 후 자녀 여권·해외여행 동의를 받지 못하는 친권자에게 단독 행사 허가 절차 안내.
// 3. 자전거로 타인 차량에 손해를 입힌 가해자에게 보험·민사 책임 범위와 합의 절차 안내.
// 4. 자녀가 스쿨버스 사고로 다친 보호자에게 운영자·기사·보험사 책임 구분과 배상 청구 안내.
// 5. 피싱 링크를 눌러 악성앱이 설치된 피해자에게 30분 내 긴급 대응 순서 안내.
// 6. SNS 복권·당첨 사기 피해자에게 기망 입증 자료와 회수 경로 안내.
// 7. 재혼한 배우자에게 기존 빚이 있는 경우 개인회생 영향 여부와 가계소득 산정 안내.
// 8. 보증인이 있는 채무자가 파산·회생 시 보증인에게 미치는 영향과 대응 안내.
// 9. 상속인 중 입양자 포함 시 법정상속분·유류분 분쟁 해결 기준 안내.
// 10. 스토킹 긴급응급조치 신청이 거부된 피해자에게 이의·재신청·잠정조치 경로 안내.

export const spokesBatch38Nonlabor: SpokePage[] = [
  // ─── 1. divorce / reconciliation-withdraw-standard ───
  {
    domain: 'divorce',
    slug: 'divorce-reconciliation-withdraw-standard',
    keyword: '이혼 조정조서 취소 무효',
    questionKeyword: '이혼 조정 끝났는데 취소하거나 다시 소송할 수 있나요?',
    ctaKeyword: '조정조서 취소 가능성 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '이혼 조정조서 취소·무효 주장 기준 | 로앤가이드',
      description:
        '이혼 조정 이후 기망·재산은닉이 드러나면 취소 주장이 가능합니다. 요건·기한·재소송 절차를 지금 확인하세요.',
    },
    intro:
      '<p>이혼 소송 중 조정으로 화해했는데 뒤늦게 상대방이 재산을 숨겼거나 기만적 진술을 한 사실이 드러날 때가 있습니다. 조정조서는 확정판결과 동일한 효력이 있어 단순 변심으로는 번복이 어렵지만, 착오·사기·강박이 있었다면 취소가 가능합니다. 요건·기한·재소송 절차를 정리합니다.</p>',
    sections: [
      {
        title: '조정조서의 법적 효력',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법·민사조정법에 따라 조정이 성립하면 조정조서는 확정판결과 동일한 효력을 갖습니다.</strong></p>\n<ul>\n<li><strong>기판력</strong> — 조정조서에 기재된 내용은 더 이상 다툴 수 없으며, 동일 쟁점의 재소송이 제한됩니다.</li>\n<li><strong>집행력</strong> — 이행하지 않으면 강제집행이 가능합니다.</li>\n<li><strong>이혼 효력</strong> — 조정조서로 이혼이 성립하며 별도 이혼신고가 요구됩니다.</li>\n<li><strong>단순 변심 불가</strong> — 후회만으로는 취소·무효 주장이 어렵습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 조정조서는 강한 효력을 가지므로 번복하려면 법적 사유(착오·사기·강박)가 구체적으로 입증되어야 합니다.</blockquote>',
      },
      {
        title: '취소 사유 — 착오·사기·강박',
        content:
          '<p><strong style="color:#1e3a5f">민법 제109조·110조에 따라 착오·사기·강박으로 조정에 이르렀다면 취소가 가능합니다.</strong></p>\n<ul>\n<li><strong>재산 은닉</strong> — 상대방이 재산 목록에서 일부를 숨기고 분할한 경우 "중요한 사실에 대한 기망"으로 취소 가능.</li>\n<li><strong>허위 진술</strong> — 소득·부채 등 핵심 사실에 대한 허위 진술이 조정 결정에 중대한 영향을 미친 경우.</li>\n<li><strong>강박·협박</strong> — 상대방 가족·측근 등으로부터 협박받은 상태에서 조정한 경우.</li>\n<li><strong>중대한 착오</strong> — 본인의 법적 착오가 아닌 사실관계에 대한 중대한 오해가 있었던 경우.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 조정조서 취소 가능성을 사안별로 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '취소권 행사 기한과 입증 책임',
        content:
          '<p><strong style="color:#1e3a5f">취소권은 사유를 안 날로부터 3년, 조정일로부터 10년 이내에 행사해야 하며, 주장자가 입증 책임을 집니다.</strong></p>\n<ul>\n<li><strong>3년 기한</strong> — 취소 사유(기망·강박 등)를 안 날로부터 3년 이내 취소 소송 제기.</li>\n<li><strong>10년 제척기간</strong> — 조정일부터 10년이 지나면 아예 불가.</li>\n<li><strong>입증 책임</strong> — 취소를 주장하는 쪽이 사유를 구체적으로 입증해야 함.</li>\n<li><strong>증거 유형</strong> — 은닉 재산 계좌 내역, 허위 진술 당시의 상반된 증빙, 협박 메시지·녹음 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 입증 자료 없이 감정적으로 취소 소송을 제기하면 패소 시 소송 비용 부담만 커집니다.</blockquote>',
      },
      {
        title: '양육비·양육권은 사정변경 시 변경 가능',
        content:
          '<p><strong style="color:#1e3a5f">조정조서의 양육비·양육권·면접교섭은 사정변경이 있으면 별도 심판으로 변경 가능합니다.</strong></p>\n<ul>\n<li><strong>사정변경의 원칙</strong> — 양육자·비양육자의 소득 변동, 자녀의 나이·상황 변화 등이 사유.</li>\n<li><strong>양육비 변경 심판</strong> — 가정법원에 양육비 감액·증액 심판 청구 가능.</li>\n<li><strong>양육권 변경</strong> — 양육자의 양육환경 악화(건강·재혼·이사 등) 시 변경 가능.</li>\n<li><strong>면접교섭 변경</strong> — 자녀의 복리·양육자의 상황에 따라 변경 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산분할은 취소가 어려워도 양육비·양육권은 사정변경 시 유연하게 변경할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부공동생활 침해와 불법행위',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 부부공동생활의 본질에 해당하는 이익이 침해되거나 방해된 경우 타방 배우자에게 정신적 고통을 가하는 불법행위가 성립한다고 판시했습니다.',
        takeaway:
          '이혼 조정 과정에서 중대한 기망·재산 은닉이 드러난 경우 조정조서의 효력을 다투어 추가 손해배상을 청구할 수 있는 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '단순히 후회하는 것만으로는 취소 어려운가요?',
        answer:
          '<strong>네, 변심만으로는 불가합니다.</strong> 착오·사기·강박 등 구체적 사유와 입증 자료가 필요합니다.',
      },
      {
        question: '재산 은닉이 나중에 발견되면 어디서부터 시작하나요?',
        answer:
          '<strong>금융 거래 내역·국세청 자료 조회를 통해 은닉 사실을 입증한 뒤 취소 소송을 준비하세요.</strong> 변호사를 통한 사실조회 신청이 효과적입니다.',
      },
      {
        question: '합의 이혼 후에도 재산분할 재청구 가능한가요?',
        answer:
          '<strong>협의이혼 성립 후 2년 이내에는 재산분할 청구가 가능합니다.</strong> 합의서에 "재산분할 종료" 문구가 있어도 사정 변화나 은닉 입증 시 다툴 여지가 있습니다.',
      },
      {
        question: '양육비 증액 신청은 언제 가능한가요?',
        answer:
          '<strong>수입·양육 환경 변동 등 사정변경이 있으면 언제든 가능합니다.</strong> 일반적으로 1~2년 간격으로 재조정하는 경우가 많습니다.',
      },
      {
        question: '취소 소송 중 기존 조정 효력은 어떻게 되나요?',
        answer:
          '<strong>취소 확정 전에는 조정조서가 유효합니다.</strong> 다만 강제집행 정지를 별도로 신청할 수 있어 필요시 활용하세요.',
      },
    ],
    cta: {
      text: '조정조서 취소 AI 점검',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 조정·소송 전략', href: '/guide/divorce/divorce-mediation-vs-trial-strategy' },
      { label: '부부 숨긴 재산 찾기', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '이혼 후 양육비 변경', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '재산분할 기본 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '이혼 사해행위 방지', href: '/guide/divorce/divorce-asset-disposal-grounds' },
    ],
  },

  // ─── 2. divorce / child-passport-single-parent ───
  {
    domain: 'divorce',
    slug: 'divorce-child-passport-single-parent',
    keyword: '이혼 자녀 여권 단독 친권',
    questionKeyword: '이혼 후 상대방 동의 없이 자녀 여권 발급 가능한가요?',
    ctaKeyword: '자녀 여권 단독 신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이혼 후 자녀 여권 단독 신청 절차 | 로앤가이드',
      description:
        '이혼 후 상대방이 자녀 여권·해외여행 동의를 거부할 때 단독 친권 행사 허가 절차와 준비 서류를 지금 확인하세요.',
    },
    intro:
      '<p>이혼 후 자녀와 해외여행·유학·방학 여행을 계획했는데 전 배우자가 여권 발급에 협조하지 않으면 막막합니다. 미성년 자녀 여권은 원칙적으로 친권자 전원의 동의가 필요하지만, 거부·연락두절 시엔 가정법원의 단독 행사 허가를 받아 진행할 수 있습니다. 요건·절차·준비 서류를 정리합니다.</p>',
    sections: [
      {
        title: '미성년 여권 발급의 원칙',
        content:
          '<p><strong style="color:#1e3a5f">여권법 시행령은 18세 미만 자녀의 여권 발급 시 친권자 전원의 동의를 요구합니다.</strong></p>\n<ul>\n<li><strong>공동 친권자</strong> — 이혼 후에도 공동 친권자 상태면 양측 동의서 제출 필요.</li>\n<li><strong>단독 친권자</strong> — 이혼 판결·조정에서 단독 친권자로 지정됐으면 본인만 동의 가능.</li>\n<li><strong>양육권과 친권 구분</strong> — 양육권만 본인에게 있어도 친권이 공동이면 동의 필요.</li>\n<li><strong>확인 방법</strong> — 이혼 판결문·가족관계증명서(상세)로 친권자 상태 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단독 친권자 vs 공동 친권자 구분이 여권 발급의 첫 단계입니다.</blockquote>',
      },
      {
        title: '친권 단독 행사 허가 심판 신청',
        content:
          '<p><strong style="color:#1e3a5f">공동 친권자인 상대방이 동의를 거부하면 가정법원에 친권 단독 행사 허가 심판을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>민법 제909조</strong> — 친권 행사에 관한 의견이 일치하지 않으면 가정법원이 결정.</li>\n<li><strong>자녀 복리 기준</strong> — 심판의 기준은 "자녀의 복리"이며 여행·유학의 목적·필요성이 중요.</li>\n<li><strong>신청서 작성</strong> — 친권자 정보·자녀 정보·여행 목적·거부 사유 등 구체적으로 기재.</li>\n<li><strong>소요 기간</strong> — 일반적으로 1~3개월. 긴급 시 신속 심리 요청 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 친권 단독 행사 허가 신청 요건과 전략을 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '필요 서류와 신청 시 유의사항',
        content:
          '<p><strong style="color:#1e3a5f">심판 청구 시 자녀의 복리와 여행의 필요성을 입증하는 서류를 빠짐없이 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>기본 서류</strong> — 가족관계증명서, 이혼 판결문·조정조서, 혼인관계증명서, 주민등록등본.</li>\n<li><strong>여행 목적 입증</strong> — 초청장, 항공권 예약 내역, 학교·학원 공문, 의료 관련 서류 등.</li>\n<li><strong>거부 사유 입증</strong> — 상대방의 거부 메시지·통화 녹취·이메일 등.</li>\n<li><strong>자녀 의견</strong> — 만 13세 이상이면 자녀 의견서도 유리한 증거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 여행·유학의 구체적 계획과 자녀 복리 기여도를 정리한 이유서를 별도로 작성하면 인용 가능성이 높아집니다.</blockquote>',
      },
      {
        title: '출입국 시 추가 확인 사항',
        content:
          '<p><strong style="color:#1e3a5f">여권 발급 후 해외여행 시에도 출입국 심사에서 추가 서류가 요구될 수 있어 사전 준비가 필요합니다.</strong></p>\n<ul>\n<li><strong>출국금지 조회</strong> — 법무부 출입국·외국인청 또는 정부24에서 자녀 출국금지 여부 사전 확인.</li>\n<li><strong>상대방 출국금지 신청 대비</strong> — 상대방이 아동 납치 방지 차원으로 출국금지를 신청할 수 있음.</li>\n<li><strong>지참 서류</strong> — 이혼 판결문·친권 단독 행사 허가서·가족관계증명서·자녀 신분증 등.</li>\n<li><strong>공항 도착 여유</strong> — 서류 확인 시간이 걸릴 수 있으므로 최소 3시간 전 공항 도착 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 공항에서 당일 출국금지를 알게 되면 여행이 좌절되므로 가능한 한 사전 조회가 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자녀 복리 중심의 친권 판단',
        summary:
          '대법원 2023다285162 사건(대법원, 2026.01.22 선고)에서 법원은 가사소송에서 자녀의 복리와 부모의 권리 행사 사이의 균형을 강조하며, 친권 행사 분쟁은 자녀 이익 중심으로 판단되어야 한다고 판시했습니다.',
        takeaway:
          '여권 발급·해외여행 등 친권 행사 사안에서 자녀의 교육·정서·복리를 구체적으로 입증하면 단독 행사 허가가 인정되기 쉽습니다.',
      },
    ],
    faq: [
      {
        question: '이혼 판결에 "친권자 엄마"라고 나오면 단독 신청 가능한가요?',
        answer:
          '<strong>"친권자 엄마 단독 지정" 문구가 있으면 단독 신청 가능합니다.</strong> 판결문에 공동·단독 구분이 애매하면 가족관계증명서(상세)로 확인하세요.',
      },
      {
        question: '상대방이 연락두절이면 어떻게 하나요?',
        answer:
          '<strong>연락두절 사실을 입증(주소불명·전화불통·송달불능 기록 등)하고 심판 청구하세요.</strong> 공시송달로 심리가 진행될 수 있습니다.',
      },
      {
        question: '여권 받은 후 다음 번엔 매번 심판 받아야 하나요?',
        answer:
          '<strong>원칙적으로 매번 필요합니다.</strong> 여권 유효기간 갱신이나 해외여행 건마다 단독 행사 허가가 필요할 수 있으므로 장기 계획이 있으면 판사에게 포괄적 허가를 요청하세요.',
      },
      {
        question: '신청부터 발급까지 얼마나 걸리나요?',
        answer:
          '<strong>심판 1~3개월 + 여권 발급 5~7일 정도입니다.</strong> 여행 일정을 여유 있게 잡아야 합니다.',
      },
      {
        question: '유학 목적이면 더 유리한가요?',
        answer:
          '<strong>네, 자녀 교육·진로 관련 목적은 자녀 복리 입증이 용이해 인용 가능성이 높습니다.</strong> 학교 공문·입학 증명서 등 구체 자료를 준비하세요.',
      },
    ],
    cta: {
      text: '자녀 여권 단독 신청 AI 점검',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 후 양육권 변경', href: '/guide/divorce/divorce-child-custody-father-strategy' },
      { label: '양육비 이행 강제', href: '/guide/divorce/divorce-child-support-enforcement-guide' },
      { label: '국제 양육권 분쟁', href: '/guide/divorce/divorce-international-child-custody-abduction' },
      { label: '면접교섭 거부 대응', href: '/guide/divorce/divorce-visitation-denied-response' },
      { label: '이혼 후 성·본 변경', href: '/guide/divorce' },
    ],
  },

  // ─── 3. traffic-accident / bicycle-car-damage ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-car-damage',
    keyword: '자전거 가해자 자동차 손상 배상',
    questionKeyword: '자전거로 차를 긁었는데 가해자 책임 어디까지인가요?',
    ctaKeyword: '자전거 대물 사고 책임 점검',
    type: '상황형',
    perspective: 'offender',
    meta: {
      title: '자전거로 차량 손상 시 가해자 책임 범위 | 로앤가이드',
      description:
        '자전거 사고로 차량에 손해를 입혔다면 도로교통법상 책임과 보험 처리·합의 절차를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>자전거를 타다 주차된 차량을 긁거나 차와 접촉사고가 나면 자전거도 도로교통법상 "차"로 분류되기 때문에 가해자 책임을 지게 됩니다. 민사 배상뿐 아니라 경우에 따라 형사 처벌까지 고려해야 하므로 즉시 올바른 순서로 대응하는 것이 중요합니다.</p>',
    sections: [
      {
        title: '자전거의 법적 지위 — 도로교통법상 "차"',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제2조 제17호는 자전거를 "차"로 규정하므로 자동차와 유사한 운전자 의무와 책임이 부과됩니다.</strong></p>\n<ul>\n<li><strong>운전자 의무</strong> — 안전운전·신호준수·사고 시 구호조치 의무.</li>\n<li><strong>뺑소니 적용</strong> — 사고 후 신원·연락처를 남기지 않고 떠나면 "사고 미조치(뺑소니)"로 형사 처벌 대상.</li>\n<li><strong>인적 피해 시</strong> — 피해자 부상 시 교통사고특례법·업무상과실치상 적용 가능.</li>\n<li><strong>물적 피해만</strong> — 차량 손상만 있으면 민사 배상이 주된 쟁점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거라고 안일하게 떠나면 뺑소니로 처벌받을 수 있습니다. 현장에서 연락처를 가능한 한 남기세요.</blockquote>',
      },
      {
        title: '현장 대응 — 연락처 교환·사진 촬영',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 연락처 교환·현장 사진·목격자 확보가 배상 협상의 핵심 자료입니다.</strong></p>\n<ul>\n<li><strong>연락처 교환</strong> — 피해 차주와 이름·전화번호·차량번호 상호 확인.</li>\n<li><strong>현장 사진</strong> — 사고 지점 위치, 차량 손상 부위, 자전거 상태, 주변 도로 표지 등.</li>\n<li><strong>목격자 확보</strong> — 주변 보행자·인근 상가 관계자 연락처 확보.</li>\n<li><strong>CCTV 위치 확인</strong> — 사고 지점 주변 CCTV 위치를 파악해 보존 요청 준비.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 자전거 사고 가해자의 대응 순서를 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보험 처리 — 자전거보험·일상배상책임보험',
        content:
          '<p><strong style="color:#1e3a5f">본인·가족의 자전거보험·일상배상책임보험·자동차보험 특약을 확인하면 수리비를 보험으로 처리할 수 있습니다.</strong></p>\n<ul>\n<li><strong>자전거보험</strong> — 직접 가입한 자전거보험의 대물배상 한도 내에서 처리 가능.</li>\n<li><strong>일상배상책임보험</strong> — 가정용 종합보험에 포함된 경우가 많으며, 자전거로 인한 대물 손해도 보상됩니다.</li>\n<li><strong>자동차보험 특약</strong> — 본인·가족의 자동차보험에 "자전거 배상 특약"이 있을 수 있습니다.</li>\n<li><strong>가족 명의 포함</strong> — 부모·배우자의 보험에 본인이 피보험자로 포함될 수 있으므로 가족 보험도 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 현장에서 현금 합의는 피하고, 가능한 한 보험 처리·합의서 절차를 거치세요.</blockquote>',
      },
      {
        title: '합의서 작성 — 후속 청구 방지',
        content:
          '<p><strong style="color:#1e3a5f">수리비 견적 확인 후 합의서를 작성할 때는 민·형사 전체에 대한 포괄 문구를 포함해야 재청구 위험을 줄일 수 있습니다.</strong></p>\n<ul>\n<li><strong>수리견적 확인</strong> — 정비소 견적서를 받아 정확한 손해액 산정.</li>\n<li><strong>합의서 필수 항목</strong> — 사고 일시·장소·당사자 정보·배상액·지급 방식·민형사 포기 조항.</li>\n<li><strong>포괄 합의 문구</strong> — "이 사건에 관한 일체의 민·형사상 이의를 제기하지 않는다" 기재.</li>\n<li><strong>공증 활용</strong> — 금액이 크면 공증을 받아 분쟁 방지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 부분 합의·구두 합의는 후일 피해자가 추가 청구할 수 있으니 가능한 한 서면으로 완결하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 초기 보상 후 추가 청구 가능성',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 교통사고 피해자가 초기 보상금을 수령한 이후에도 전보되지 않은 손해 부분에 대해 별도 청구할 수 있다고 판시했습니다.',
        takeaway:
          '자전거 사고에서도 초기 합의 후 추가 손해가 발생하면 재청구가 가능하므로, 가해자는 합의서에 후발 손해 포함 여부를 명확히 해야 합니다.',
      },
    ],
    faq: [
      {
        question: '자전거 사고도 경찰 신고해야 하나요?',
        answer:
          '<strong>인적 피해가 있으면 필수, 물적 피해만이면 양측 합의 시 신고 없이 가능합니다.</strong> 합의가 어렵거나 뺑소니 의혹이 있으면 가능한 한 신고하세요.',
      },
      {
        question: '자전거로 주차된 차만 긁었는데 뺑소니인가요?',
        answer:
          '<strong>연락처 없이 떠나면 사고 미조치로 처벌될 수 있습니다.</strong> 연락처·메모를 남기거나 차주에게 직접 연락해 사고 사실을 알리세요.',
      },
      {
        question: '보험이 없으면 어떻게 되나요?',
        answer:
          '<strong>본인이 자비로 배상해야 하며, 피해자가 민사소송을 제기할 수 있습니다.</strong> 금액이 크면 분할 합의·공증을 활용해 부담을 나누세요.',
      },
      {
        question: '합의가 안 되면 어떻게 되나요?',
        answer:
          '<strong>피해자가 소액사건 심판·민사소송을 제기할 수 있습니다.</strong> 3,000만 원 이하는 소액사건으로 간단히 진행됩니다.',
      },
      {
        question: '미성년자 자전거 사고는 누가 책임지나요?',
        answer:
          '<strong>미성년자의 경우 감독의무자(부모)도 공동 책임을 질 수 있습니다.</strong> 민법 제755조 감독자 책임이 적용됩니다.',
      },
    ],
    cta: {
      text: '자전거 가해자 대응 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 피해 대응 기본', href: '/guide/traffic-accident' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '뺑소니 가해자 대응', href: '/guide/traffic-accident' },
      { label: '교통사고 보험 청구 서류', href: '/guide/traffic-accident/insurance-claim-required-docs' },
      { label: '교통사고 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
    ],
  },

  // ─── 4. traffic-accident / school-bus-compensation ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-bus-compensation',
    keyword: '스쿨버스 어린이통학버스 사고 배상',
    questionKeyword: '스쿨버스에서 아이가 다쳤는데 어디에 보상 청구하나요?',
    ctaKeyword: '스쿨버스 사고 배상 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스쿨버스 사고 보상 — 운영자·기사·보험사 책임 구분 | 로앤가이드',
      description:
        '어린이통학버스 사고 시 운영자·기사·보험사의 책임과 배상 청구 절차를 정리했습니다. 특정범죄가중처벌법 적용도 지금 확인하세요.',
    },
    intro:
      '<p>자녀가 어린이집·유치원 통학버스에서 사고를 당하면 어디에, 어떻게 청구해야 하는지 막막합니다. 스쿨버스 사고는 일반 교통사고와 달리 운영자·기사·보험사 3주체의 책임 구조를 알아야 합니다. 특정범죄가중처벌법 적용 여부, 민사 배상 범위, 합의 주의사항을 정리합니다.</p>',
    sections: [
      {
        title: '어린이통학버스의 특수 법적 지위',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법상 어린이통학버스는 일반 차량보다 엄격한 규제를 받으며, 사고 시 가중 처벌이 적용됩니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제51조</strong> — 어린이통학버스 운전자는 어린이 승·하차 시 안전 확인 의무.</li>\n<li><strong>특정범죄가중처벌법 제5조의13</strong> — 어린이 보호구역 치사상 가중 처벌.</li>\n<li><strong>법정형</strong> — 치상 1년 이상 15년 이하 징역 또는 500만~3,000만 원 벌금. 치사 3년 이상 무기징역.</li>\n<li><strong>일반 교통사고와 차이</strong> — 어린이 피해자는 가중 처벌 대상이며 합의로 공소 제기가 제한되지 않음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 어린이 피해 사고는 일반 교통사고보다 법적 책임이 크므로 배상·처벌 절차를 분리해서 접근해야 합니다.</blockquote>',
      },
      {
        title: '책임 주체 3곳 — 운영자·기사·보험사',
        content:
          '<p><strong style="color:#1e3a5f">민사 배상 책임은 사용자(운영자), 운전기사, 자동차보험사 3곳이며, 청구 순서를 알아야 효율적 대응이 가능합니다.</strong></p>\n<ul>\n<li><strong>운영자(유치원·어린이집)</strong> — 민법 제756조 사용자책임. 어린이집·유치원이 기사의 업무상 행위로 인한 손해에 대해 연대책임.</li>\n<li><strong>운전기사</strong> — 민법 제750조 불법행위책임. 개인적으로도 배상 책임.</li>\n<li><strong>자동차보험사</strong> — 자동차손해배상보장법에 따른 보험금 지급. 차량에 가입된 종합보험.</li>\n<li><strong>청구 순서</strong> — 보험사 먼저 → 부족분은 운영자·기사에게 직접 청구.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 자녀 사고의 배상 청구 전략을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '어린이 피해의 특수 손해 항목',
        content:
          '<p><strong style="color:#1e3a5f">어린이는 성장기 영향·학습 지연·정신적 피해 등 장기 손해가 발생하므로 배상 항목이 일반 성인보다 확장됩니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 현재·향후 치료비, 재활 비용, 심리치료 비용 포함.</li>\n<li><strong>일실이익</strong> — 성인 후 예상 소득 손실. 장해가 남으면 장래 수입 감소분 계산.</li>\n<li><strong>위자료</strong> — 어린이의 정신적 고통은 일반 성인보다 크게 산정되는 경향.</li>\n<li><strong>가족 위자료</strong> — 부모·형제자매의 정신적 피해도 위자료 청구 가능.</li>\n<li><strong>개호비</strong> — 중상해 시 간병비·개호인 비용 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 초기 합의에 "향후 일체 이의 제기 없음" 조항이 들어가면 후유증 발견 시 추가 청구가 막힙니다. 문구 하나가 수천만 원 차이를 만들 수 있습니다.</blockquote>',
      },
      {
        title: '합의 시점 전략과 형사 분리',
        content:
          '<p><strong style="color:#1e3a5f">자녀의 경과 관찰 후 합의해야 하며, 민사 합의와 형사 처벌은 별개로 진행해야 합니다.</strong></p>\n<ul>\n<li><strong>경과 관찰 기간</strong> — 최소 6개월~1년 이상 관찰 후 합의. 뇌진탕·외상 후 스트레스 등은 장기 관찰 필요.</li>\n<li><strong>민사 합의 범위</strong> — 합의서에 "민사상 이의 포기"만 명시하고 형사 처벌은 별개 유지.</li>\n<li><strong>후발 손해 조항</strong> — "향후 후유증·추가 손해 발생 시 별도 청구 가능" 문구 포함.</li>\n<li><strong>형사 처벌 분리</strong> — 어린이 사고는 반의사불벌죄가 아닌 경우가 많아 합의만으로 공소 제기 차단이 어렵습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 운영자가 "형사 합의 조건으로 큰 배상"을 제안해도 어린이 피해는 공소 제기가 유지될 수 있으므로 독립적 판단이 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전보되지 않은 손해의 추가 청구',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자동차보험 피해자가 초기 보상금을 받은 이후에도 전보되지 않은 자기부담금·추가 손해에 대해 별도 청구할 수 있다고 판시했습니다.',
        takeaway:
          '스쿨버스 사고에서도 초기 보험 처리 후 후유증·장기 손해가 발생하면 추가 청구가 가능하므로 합의 전 관찰 기간을 확보해야 합니다.',
      },
    ],
    faq: [
      {
        question: '어린이집에서 "보험으로 처리될 테니 그냥 기다려라"고 하면 되나요?',
        answer:
          '<strong>보험 처리 외 추가 손해가 발생할 수 있으므로 운영자 책임·합의서 검토를 별도로 진행해야 합니다.</strong> 어린이 피해는 장기 관찰이 필요합니다.',
      },
      {
        question: '형사 처벌도 받는 기사와 합의할 필요 있나요?',
        answer:
          '<strong>민사 배상 합의는 필요하지만 형사 처벌은 별개입니다.</strong> 합의해도 특정범죄가중처벌법 적용 시 공소 제기가 유지될 수 있습니다.',
      },
      {
        question: '자녀 PTSD 치료도 청구 가능한가요?',
        answer:
          '<strong>네, 정신적 피해도 치료비·위자료 대상입니다.</strong> 정신건강의학과 진료 기록과 치료 계획서를 근거로 청구하세요.',
      },
      {
        question: '부모 위자료는 얼마 정도인가요?',
        answer:
          '<strong>사고 경중·자녀 상태에 따라 다르며 보통 1,000만~5,000만 원 범위입니다.</strong> 중상해 시에는 훨씬 커질 수 있습니다.',
      },
      {
        question: '운영자가 폐업하면 배상 받기 어려운가요?',
        answer:
          '<strong>자동차보험으로 대부분 커버됩니다.</strong> 보험 한도 초과분은 기사 개인·폐업 법인의 잔여 재산에 대한 민사 청구가 필요합니다.',
      },
    ],
    cta: {
      text: '스쿨버스 사고 배상 AI 점검',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 피해 대응 기본', href: '/guide/traffic-accident' },
      { label: '어린이 교통사고 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '합의 후 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
      { label: '교통사고 보험 청구 서류', href: '/guide/traffic-accident/insurance-claim-required-docs' },
    ],
  },

  // ─── 5. fraud / phishing-app-immediate-response ───
  {
    domain: 'fraud',
    slug: 'fraud-phishing-app-immediate-response',
    keyword: '피싱 앱 설치 즉시 대응',
    questionKeyword: '피싱 링크 눌러서 앱 설치됐는데 어떻게 해야 하나요?',
    ctaKeyword: '피싱 앱 긴급 대응 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '피싱 앱 설치 후 30분 긴급 대응 순서 | 로앤가이드',
      description:
        '피싱 링크 클릭으로 악성 앱이 설치됐다면 30분 내 처리해야 피해를 막을 수 있습니다. 통신 차단·지급정지·공장초기화 순서를 지금 확인하세요.',
    },
    intro:
      '<p>택배·건강보험·결혼식 안내 문자 링크를 무심코 클릭해 악성 앱이 설치되면 불과 몇 분 내 통장 잔액이 빠져나갈 수 있습니다. 1분 1초가 결정적이므로 통신 차단 → 지급정지 → 공장초기화의 순서를 정확히 알아야 합니다. 30분 안에 끝내야 할 긴급 대응을 정리합니다.</p>',
    sections: [
      {
        title: '1단계: 즉시 통신 차단',
        content:
          '<p><strong style="color:#1e3a5f">피싱 앱이 설치되면 SMS 인증·금융 앱 조회가 실시간으로 외부에 전달되므로 가장 먼저 통신을 차단해야 합니다.</strong></p>\n<ul>\n<li><strong>비행기 모드 전환</strong> — 휴대폰 비행기 모드로 모든 통신(SMS·데이터·전화) 차단.</li>\n<li><strong>와이파이·블루투스 해제</strong> — 비행기 모드에서도 자동 연결되지 않도록 개별 확인.</li>\n<li><strong>SIM 카드 분리</strong> — 가능하면 SIM을 빼 완전 차단.</li>\n<li><strong>원격 조작 방지</strong> — 피싱 앱은 원격 제어 권한을 가질 수 있으므로 통신 차단이 최우선.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통신 차단이 1초라도 늦으면 범인이 계속 조작할 수 있습니다. 비행기 모드가 가장 빠른 방법입니다.</blockquote>',
      },
      {
        title: '2단계: 지급정지·경찰·금감원 신고',
        content:
          '<p><strong style="color:#1e3a5f">통신 차단 후 30분 안에 은행 지급정지·경찰 신고·금감원 피해구제를 모두 처리해야 합니다.</strong></p>\n<ul>\n<li><strong>은행 고객센터</strong> — 다른 전화(가족 휴대폰 등)로 피해 은행 대표번호에 전화해 "피해 신고·전 계좌 지급정지" 요청.</li>\n<li><strong>경찰 112/182</strong> — 사건 접수 번호를 받아 금감원 신고의 근거로 사용.</li>\n<li><strong>금감원 1332</strong> — 전기통신금융사기 피해구제 신청. 연쇄 이체 계좌까지 정지 요청.</li>\n<li><strong>신분증·통장 정지</strong> — 주민등록증 분실 신고, 모든 카드·통장 지급정지까지 일괄 처리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-se:0.95em">변호사 상담 전, AI가 피싱 피해 후 30분 긴급 대응 계획을 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 공장초기화·새 SIM 발급',
        content:
          '<p><strong style="color:#1e3a5f">피싱 앱은 일반 삭제로 제거되지 않으므로 공장초기화가 필수입니다.</strong></p>\n<ul>\n<li><strong>공장초기화(Factory Reset)</strong> — 모든 앱·데이터를 제거. 수리센터·통신사 대리점에서 지원.</li>\n<li><strong>연락처 백업 주의</strong> — SMS·연락처에 악성 데이터가 있을 수 있으므로 신중하게 백업.</li>\n<li><strong>새 SIM 카드 발급</strong> — 통신사 대리점에서 새 SIM 발급으로 이전 번호의 악성 링크 차단.</li>\n<li><strong>OS 업데이트</strong> — 초기화 후 최신 OS·보안 패치 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 삭제만 한 뒤 재사용하면 잔존 악성코드로 재피해가 발생할 수 있으니 가능한 한 초기화하세요.</blockquote>',
      },
      {
        title: '4단계: 개인정보 보호·명의도용 대비',
        content:
          '<p><strong style="color:#1e3a5f">금전 유출 외에도 개인정보·인증서가 노출됐을 가능성이 크므로 명의도용 차단 조치를 가능한 한 해야 합니다.</strong></p>\n<ul>\n<li><strong>개인정보노출자 등록</strong> — 금융감독원 "개인정보노출자 사고예방 시스템"(pd.fss.or.kr)에 등록.</li>\n<li><strong>공인인증서·금융인증서 폐기</strong> — 즉시 모든 인증서 폐기·재발급.</li>\n<li><strong>신용정보원 조회</strong> — 명의로 개설된 계좌·카드 확인. 신규 대출 시도 차단.</li>\n<li><strong>휴대폰 명의도용 차단</strong> — 한국정보통신진흥협회 "명의도용 방지 서비스"로 신규 개통 차단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 명의도용 조치를 미루면 며칠 뒤 본인 명의의 대출·카드 개설·가상화폐 피해가 추가 발생할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위 정보 입력 기망의 사기죄 성립',
        summary:
          '대법원 2022다1862 사건(대법원, 2026.01.29 선고)에서 법원은 "컴퓨터 등 정보처리장치에 허위 정보를 입력하여 재산적 처분행위를 하는 사람을 착오에 빠뜨린 경우 사기죄의 기망행위에 해당한다"고 판시했습니다.',
        takeaway:
          '피싱 앱을 통한 사기 수법도 동일한 기망 구조로 처벌 대상이며, 피해자는 즉시 지급정지·피해구제 절차로 회수 가능성을 확보해야 합니다.',
      },
    ],
    faq: [
      {
        question: '피싱 앱을 눌렀는데 당시엔 돈이 안 빠져나갔다면 괜찮나요?',
        answer:
          '<strong>아닙니다. 악성 앱이 이미 설치됐다면 추후 피해가 발생할 수 있으니 지체 없이 공장초기화·개인정보 조치를 해야 합니다.</strong>',
      },
      {
        question: '자동이체·OTP 정보도 노출됐을까요?',
        answer:
          '<strong>네, 금융 앱 데이터 전체가 위험합니다.</strong> 모든 금융 계좌 비밀번호·OTP를 재설정하고 의심 거래를 모니터링해야 합니다.',
      },
      {
        question: '피해 회수 가능성은 얼마나 되나요?',
        answer:
          '<strong>30분 내 지급정지에 성공하면 회수 가능성이 높지만, 자금이 가상자산·대면편취로 전환되면 회수가 어렵습니다.</strong>',
      },
      {
        question: '통신사에 사고 신고해야 하나요?',
        answer:
          '<strong>네, 명의도용 방지를 위해 통신사에 신고하고 새 SIM 카드 발급을 받으세요.</strong> 한국정보통신진흥협회의 "명의도용 방지 서비스"도 활용하세요.',
      },
      {
        question: '형사 고소는 별도로 해야 하나요?',
        answer:
          '<strong>네, 피해구제 신청과 별개로 경찰에 사기·정보통신망법 위반으로 고소할 수 있습니다.</strong> 고소를 통해 수사기관이 계좌 추적·공범 검거에 나서게 됩니다.',
      },
    ],
    cta: {
      text: '피싱 앱 긴급 대응 AI 안내',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 피해 대응 기본', href: '/guide/fraud' },
      { label: '보이스피싱 피해구제 절차', href: '/guide/fraud/fraud-voice-phishing-relief-law-application' },
      { label: '보이스피싱 대포통장 방어', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '사기 고소장 작성', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '사기 증거 수집 가이드', href: '/guide/fraud/fraud-complaint-police-key-evidence-5' },
    ],
  },

  // ─── 6. fraud / sns-lottery-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-sns-lottery-scam',
    keyword: 'SNS 당첨 사기 복권 사기',
    questionKeyword: 'SNS로 "당첨됐다"는 메시지 받고 돈을 송금했는데 사기인가요?',
    ctaKeyword: 'SNS 당첨 사기 회수 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: 'SNS 당첨·복권 사기 피해 회수 가이드 | 로앤가이드',
      description:
        'SNS로 당첨 메시지 받고 수수료를 송금한 경우 사기죄 성립과 회수 방법을 정리했습니다. 증거·지급정지 절차를 지금 확인하세요.',
    },
    intro:
      '<p>인스타그램·페이스북·카카오톡으로 "당첨됐으니 수수료를 입금하라"는 메시지를 받고 송금한 경우 전형적 SNS 사기에 해당할 소지가 있습니다. 사기죄 성립 요건이 명확하고 형사 고소·민사 환수가 가능하지만, 시간이 지날수록 회수 가능성이 낮아집니다. 피해 즉시 대응과 회수 경로를 정리합니다.</p>',
    sections: [
      {
        title: 'SNS 당첨 사기의 기망 구조',
        content:
          '<p><strong style="color:#1e3a5f">SNS 당첨 사기는 "허위 당첨 통지 + 수수료·세금 명목 선입금 요구"의 구조를 취하며 전형적 사기죄 구성요건을 충족합니다.</strong></p>\n<ul>\n<li><strong>허위 당첨 통지</strong> — 실제로 당첨된 사실이 없는데 허위 메시지로 피해자를 기망.</li>\n<li><strong>수수료·세금 명목</strong> — 당첨금 지급 전 사전 입금이 필요하다는 명목으로 돈을 요구.</li>\n<li><strong>압박 전술</strong> — "오늘 내 입금 안 하면 당첨 취소" 등 시간 압박으로 판단력 저하 유도.</li>\n<li><strong>해외·대포통장 활용</strong> — 범인 추적이 어려운 해외 계정·대포통장을 경유해 피해금 이동.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정식 복권·이벤트는 사전 수수료를 요구하지 않습니다. 수수료 요구는 100% 사기로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '피해 즉시 대응 — 지급정지·증거 보전',
        content:
          '<p><strong style="color:#1e3a5f">피해 인지 직후 지급정지 신청과 증거 보전이 회수 가능성을 좌우합니다.</strong></p>\n<ul>\n<li><strong>은행 지급정지</strong> — 송금 은행 고객센터에 즉시 전화해 피해 신고·지급정지 요청.</li>\n<li><strong>금감원 1332 신고</strong> — 전기통신금융사기 피해구제 신청.</li>\n<li><strong>경찰 신고</strong> — 112 또는 사이버수사국(182) 신고로 사건 접수 번호 확보.</li>\n<li><strong>증거 보전</strong> — SNS 대화 캡처, 메시지 원문, 송금 내역, 범인 프로필 캡처 등 모두 백업.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 SNS 사기 피해 회수 경로와 순서를 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사 고소 전략',
        content:
          '<p><strong style="color:#1e3a5f">사기죄·정보통신망법 위반·전자금융법 위반 등으로 형사 고소하면 수사기관 강제 수사로 범인 검거·재산 보전이 가능합니다.</strong></p>\n<ul>\n<li><strong>사기죄(형법 제347조)</strong> — 10년 이하 징역 또는 2,000만 원 이하 벌금. 금액 크면 특경법 가중.</li>\n<li><strong>정보통신망법 위반</strong> — 기망으로 재산상 이익 취득 시 별도 처벌.</li>\n<li><strong>고소장 작성</strong> — 피해 경위·송금 시각·계좌 번호·SNS 대화 내용 등 구체적 기재.</li>\n<li><strong>관할</strong> — 본인 거주지 또는 송금지 경찰서. 사이버수사대 접수가 효율적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: SNS 계정 ID·프로필·채팅 내역을 고소장에 상세히 첨부하면 수사 속도가 빨라집니다.</blockquote>',
      },
      {
        title: '회수 경로 — 형사 + 민사 병행',
        content:
          '<p><strong style="color:#1e3a5f">피해 회수는 피해구제법·형사 추징·민사 손해배상의 3경로로 나누어 병행합니다.</strong></p>\n<ul>\n<li><strong>피해구제법</strong> — 지급정지된 잔액에 대해 채권소멸 절차로 피해자 환급.</li>\n<li><strong>형사 추징</strong> — 범인 검거 시 범죄수익 추징으로 회수 가능.</li>\n<li><strong>민사 손해배상</strong> — 범인 신원이 파악되면 민사소송·지급명령으로 회수.</li>\n<li><strong>해외 공조 제한</strong> — 범인이 해외에 있으면 회수가 매우 제한적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 피해금 회수 가능성은 범인이 국내인지·잔액이 남아 있는지에 크게 좌우됩니다. 빠른 지급정지가 최선의 방어입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위 정보 기망의 사기죄 성립',
        summary:
          '대법원 2022다1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 등 정보처리장치에 허위 정보를 입력하여 재산적 처분행위를 하는 사람을 착오에 빠뜨리는 행위가 사기죄의 기망행위에 해당한다고 판시했습니다.',
        takeaway:
          'SNS 허위 당첨 통지도 기망 구조가 동일하게 성립하며, 범인 검거·회수는 초기 대응 속도에 좌우되므로 즉시 신고가 필수입니다.',
      },
    ],
    faq: [
      {
        question: '수수료 10만 원만 송금했는데 신고할 가치가 있나요?',
        answer:
          '<strong>네, 금액과 무관하게 사기죄 성립할 수 있습니다.</strong> 본인 피해 금액이 작아도 같은 범인이 다수 피해자에게 사기를 저지를 수 있으므로 가능한 한 신고하세요.',
      },
      {
        question: '범인이 해외에 있으면 회수가 어려운가요?',
        answer:
          '<strong>국제 공조 한계로 회수가 매우 제한적입니다.</strong> 다만 국내 경유 계좌 잔액이 있으면 피해구제법 회수가 가능하므로 포기하지 마세요.',
      },
      {
        question: 'SNS 계정이 차단되면 어떻게 하나요?',
        answer:
          '<strong>차단 전 캡처한 자료가 결정적 증거가 됩니다.</strong> 계정이 차단됐어도 SNS 플랫폼에 수사 협조 요청을 통해 사용자 정보를 확보할 수 있습니다.',
      },
      {
        question: '피해자가 여러 명이면 집단 대응 가능한가요?',
        answer:
          '<strong>네, 공동 고소·집단 민사소송이 가능합니다.</strong> 피해자 수가 많으면 수사 우선순위가 높아지고 회수 가능성도 커집니다.',
      },
      {
        question: '송금 후 2일 지났는데 지급정지 가능한가요?',
        answer:
          '<strong>네, 즉시 신고하세요.</strong> 잔액이 남아 있으면 지급정지·채권소멸 절차로 일부 회수 가능성이 있습니다.',
      },
    ],
    cta: {
      text: 'SNS 당첨 사기 AI 점검',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 피해 대응 기본', href: '/guide/fraud' },
      { label: '보이스피싱 피해구제법', href: '/guide/fraud/fraud-voice-phishing-relief-law-application' },
      { label: '피싱 앱 긴급 대응', href: '/guide/fraud/fraud-phishing-app-immediate-response' },
      { label: '사기 고소장 작성', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '투자 사기 형사·민사', href: '/guide/fraud/investment-fraud-criminal-vs-civil' },
    ],
  },

  // ─── 7. rehabilitation / remarriage-spouse-debt ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-remarriage-spouse-debt',
    keyword: '재혼 배우자 빚 개인회생',
    questionKeyword: '재혼한 배우자에게 빚이 있으면 내 개인회생에 영향 있나요?',
    ctaKeyword: '재혼 배우자 채무 영향 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '재혼 배우자 채무와 내 개인회생 — 영향 범위 | 로앤가이드',
      description:
        '재혼한 배우자의 빚이 내 개인회생에 미치는 영향을 정리했습니다. 부부별산제·가계소득 산정·연대보증을 지금 확인하세요.',
    },
    intro:
      '<p>재혼한 배우자에게 결혼 전부터 있던 빚이나 신용 문제가 있을 때 "내 개인회생에 불이익이 오는 것 아닌가" 걱정됩니다. 부부별산제 원칙상 배우자 개인 채무는 본인에게 직접 책임이 없지만, 가계소득 산정·공동자산 추심 등 간접 영향은 있을 수 있습니다. 구체적 쟁점을 정리합니다.</p>',
    sections: [
      {
        title: '부부별산제 — 배우자 개인 채무와의 분리',
        content:
          '<p><strong style="color:#1e3a5f">민법 제830조는 부부별산제를 원칙으로 하며, 배우자의 단독 채무는 본인에게 법적 책임이 없습니다.</strong></p>\n<ul>\n<li><strong>별산제 원칙</strong> — 결혼 전 취득 재산과 결혼 후 단독 명의 재산은 각자의 특유재산.</li>\n<li><strong>단독 채무의 분리</strong> — 배우자가 단독으로 진 빚은 배우자 개인 책임.</li>\n<li><strong>공동 채무의 예외</strong> — 일상가사(식료품·주거비 등)로 인한 채무는 부부 연대 책임(민법 제832조).</li>\n<li><strong>연대보증 주의</strong> — 본인이 연대보증한 배우자 채무는 본인 책임이므로 사전 확인 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배우자의 단독 채무는 본인 개인회생에 직접적 영향이 없으나 연대보증·공동명의 여부를 가능한 한 점검해야 합니다.</blockquote>',
      },
      {
        title: '가계소득 산정 — 변제계획 영향',
        content:
          '<p><strong style="color:#1e3a5f">개인회생 변제계획상 가용소득 산정 시 가계 소득·지출이 반영되므로 배우자 소득도 영향을 미칩니다.</strong></p>\n<ul>\n<li><strong>최저생계비 공제</strong> — "본인+동거가족" 기준 최저생계비가 공제되며, 배우자·자녀 수가 많을수록 공제액 증가.</li>\n<li><strong>배우자 소득 합산</strong> — 가계 소득에 배우자 소득이 합산되어 가용소득이 늘어날 수 있음.</li>\n<li><strong>배우자 부양 시</strong> — 배우자가 무직·저소득이면 부양비용 공제로 본인 가용소득 감소 → 변제액 감소.</li>\n<li><strong>정확한 기재</strong> — 변제계획서에 가족 구성·소득·지출을 정확히 기재해야 함. 허위 기재는 회생 기각 사유.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 재혼 배우자 상황이 회생에 미치는 영향을 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공동명의 자산과 배우자 채권자 추심',
        content:
          '<p><strong style="color:#1e3a5f">부부 공동명의 자산이 있으면 배우자의 채권자가 공동 자산에 추심할 수 있어 간접 영향이 발생할 수 있습니다.</strong></p>\n<ul>\n<li><strong>공동명의 부동산</strong> — 본인 지분은 보호되나 배우자 지분에 대해 채권자가 가압류·강제경매 가능.</li>\n<li><strong>공동명의 차량·예금</strong> — 배우자 지분 또는 공동 지분에 대한 추심 위험.</li>\n<li><strong>본인 회생에 미치는 영향</strong> — 공동 자산이 불안정해지면 변제계획 이행에 영향.</li>\n<li><strong>공동 회생 검토</strong> — 배우자와 함께 회생·파산을 진행하는 것이 유리한 경우도 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공동명의 자산이 있으면 배우자도 함께 회생 신청을 검토해 가정 경제를 안정화하는 것이 실무적입니다.</blockquote>',
      },
      {
        title: '연대보증·공동 대출 확인',
        content:
          '<p><strong style="color:#1e3a5f">본인이 배우자 채무에 연대보증·공동 대출자로 서명했는지 먼저 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>신용정보원 조회</strong> — 한국신용정보원에서 본인 신용정보 조회로 연대보증·공동 대출 내역 확인.</li>\n<li><strong>대출 계약서 확인</strong> — 결혼 시 서명한 각종 서류에 연대보증 조항 포함 여부 점검.</li>\n<li><strong>연대보증 채무 포함</strong> — 연대보증 채무도 본인 회생 채무 목록에 포함해야 함.</li>\n<li><strong>무효 주장</strong> — 강박·기망으로 서명한 경우 무효 주장 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 결혼 시 감정적으로 서명한 연대보증서가 회생 변제계획에 큰 영향을 줄 수 있으므로 사전 확인이 필수입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인가된 회생계획의 해석 원칙',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 채무자회생법 제243조 등에 따른 인가된 회생계획의 해석과 변제 범위의 원칙을 확인했습니다.',
        takeaway:
          '본인이 성실히 변제계획을 이행하면 법적 지위가 보호되며, 배우자의 채무 상황과는 분리해 판단해야 합니다.',
      },
    ],
    faq: [
      {
        question: '배우자 빚을 내가 대신 갚아야 하나요?',
        answer:
          '<strong>연대보증하지 않은 배우자 단독 채무는 본인이 갚을 의무가 없습니다.</strong> 채권자가 본인에게 청구해도 법적 근거 없이 거절 가능합니다.',
      },
      {
        question: '배우자 소득이 많으면 내 회생이 어려워지나요?',
        answer:
          '<strong>가용소득이 늘어 월 변제액이 증가할 수 있습니다.</strong> 변제계획 수립 시 가계 구조를 정확히 반영해야 합니다.',
      },
      {
        question: '배우자 채권자가 내 집을 가압류할 수 있나요?',
        answer:
          '<strong>본인 단독 명의는 불가하나 공동명의는 배우자 지분에 대한 가압류가 가능합니다.</strong> 공동자산 구조를 미리 점검하세요.',
      },
      {
        question: '배우자와 같이 회생 신청할 수 있나요?',
        answer:
          '<strong>각자 개별 신청은 가능하며 공동 회생 제도는 없지만, 동시 진행으로 가정 경제 재건을 노릴 수 있습니다.</strong>',
      },
      {
        question: '이혼하면 배우자 채무 영향이 사라지나요?',
        answer:
          '<strong>이혼 후에는 배우자 단독 채무의 간접 영향(가계소득 합산 등)이 사라지지만 연대보증 채무는 남습니다.</strong>',
      },
    ],
    cta: {
      text: '재혼 배우자 빚 AI 점검',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 신청 절차', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 신청 서류', href: '/guide/rehabilitation/rehabilitation-application-required-docs' },
      { label: '개인회생 채권자 추심 중단', href: '/guide/rehabilitation/rehabilitation-creditor-collection-stop' },
      { label: '개인회생 기각 사유 예방', href: '/guide/rehabilitation/rehabilitation-rejection-reasons-prevention' },
      { label: '회생·파산 선택 비교', href: '/guide/rehabilitation/bankruptcy-vs-rehabilitation-comparison' },
    ],
  },

  // ─── 8. bankruptcy / guarantor-impact ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-guarantor-impact-response',
    keyword: '파산 연대보증인 영향 대응',
    questionKeyword: '제가 파산하면 제 보증인은 어떻게 되나요?',
    ctaKeyword: '보증인 영향 대응 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '파산·회생 시 보증인에게 미치는 영향과 대응 | 로앤가이드',
      description:
        '채무자가 파산·회생에 들어가도 보증인의 책임은 유지됩니다. 보증인 대응 전략과 법적 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>본인이 파산·개인회생에 들어가면 빚이 사라지거나 줄어들지만 연대보증인·보증인은 여전히 채권자의 청구에 직면합니다. 보증인의 법적 지위와 대응 방법을 미리 알지 못하면 가족·지인이 큰 피해를 볼 수 있습니다. 보증인 영향과 대응 전략을 정리합니다.</p>',
    sections: [
      {
        title: '보증인 책임의 독립성',
        content:
          '<p><strong style="color:#1e3a5f">채무자의 파산·회생과 무관하게 보증인의 채무 책임은 유지되며, 채권자는 보증인에게 직접 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>민법 제428조</strong> — 보증인은 주채무자가 이행하지 아니하는 채무를 이행할 의무.</li>\n<li><strong>면책의 상대적 효과</strong> — 주채무자 면책은 보증인에게 미치지 않음. 보증인은 계속 청구받을 수 있음.</li>\n<li><strong>연대보증의 엄격성</strong> — 연대보증인은 주채무자와 동일한 지위로 채권자가 선택적으로 청구 가능.</li>\n<li><strong>구상권 소멸</strong> — 주채무자가 면책되면 보증인의 구상권(변제 후 주채무자에게 청구할 권리)도 소멸.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 본인이 파산·회생에 들어가도 보증인은 여전히 채권자로부터 청구받습니다. 보증인 보호를 별도로 준비해야 합니다.</blockquote>',
      },
      {
        title: '회생·파산에서의 보증인 취급',
        content:
          '<p><strong style="color:#1e3a5f">주채무자의 회생·파산 절차에서 보증인은 원칙적으로 보호받지 못하지만 일부 예외적 조치가 가능합니다.</strong></p>\n<ul>\n<li><strong>회생계획 인가의 효과</strong> — 회생계획에 따라 주채무자가 변제할 금액을 보증인도 동일하게 채권자에게 갚을 수 있는 경우가 있음.</li>\n<li><strong>주채무자 면책 범위</strong> — 주채무자가 면책받은 범위만큼 보증인이 변제한 뒤 구상권 행사가 제한될 수 있음.</li>\n<li><strong>공동 회생 검토</strong> — 보증인도 심각한 채무 상태라면 별도의 개인회생·파산을 진행할 수 있음.</li>\n<li><strong>자발적 합의</strong> — 보증인이 채권자와 분할 변제·감액 협의를 통해 해결할 수 있음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 파산·회생이 보증인에게 미치는 영향을 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보증인의 대응 전략',
        content:
          '<p><strong style="color:#1e3a5f">보증인은 주채무자의 파산·회생을 이용할 수 있지만 자체 법적 수단도 갖추고 있습니다.</strong></p>\n<ul>\n<li><strong>보증채무 감액 협상</strong> — 채권자와 직접 교섭해 감액·분할변제 합의.</li>\n<li><strong>보증인의 개인회생</strong> — 보증채무로 인한 감당 불가 시 보증인도 개인회생 신청 가능.</li>\n<li><strong>보증채무 한도 확인</strong> — 근보증·신용보증 등 보증 한도와 기간 확인.</li>\n<li><strong>민법상 항변권</strong> — 최고·검색의 항변(단순보증), 공동보증인 상호간 분담 요구 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연대보증이 아닌 단순보증이면 "최고·검색의 항변권"으로 주채무자 재산 우선 집행을 요구할 수 있습니다.</blockquote>',
      },
      {
        title: '주채무자의 실무 대응',
        content:
          '<p><strong style="color:#1e3a5f">주채무자는 회생·파산 전에 보증인에게 상황을 알리고, 가능한 대응 방안을 함께 모색해야 합니다.</strong></p>\n<ul>\n<li><strong>사전 통지</strong> — 보증인에게 파산·회생 예정을 미리 알려 대응 시간을 제공.</li>\n<li><strong>구상금 청구 대비</strong> — 보증인이 변제 시 본인에게 구상금 청구 가능하지만, 본인이 면책 상태이면 구상권도 제한.</li>\n<li><strong>채권자와의 삼자 협의</strong> — 채권자·주채무자·보증인이 함께 감액·분할 합의를 시도.</li>\n<li><strong>법률 자문</strong> — 복잡한 사안은 변호사·법무사와 함께 전략 수립.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 본인이 면책받아도 보증인은 그대로 추심당할 수 있으니, 가족·지인 보증인을 위한 별도 대응이 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인가된 회생계획의 해석과 변제 효력',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 채무자회생법에 따른 인가된 회생계획의 해석과 변제 범위의 원칙을 확인했습니다.',
        takeaway:
          '회생계획의 효력 범위는 법이 정한 범위 내로 한정되며, 보증인의 책임은 원칙적으로 유지되므로 별도 대응이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '내가 면책받으면 보증인 빚도 사라지나요?',
        answer:
          '<strong>아닙니다. 보증채무는 별개로 유지됩니다.</strong> 채권자는 보증인에게 계속 청구할 수 있으며, 주채무자 면책이 보증인을 보호하지 않습니다.',
      },
      {
        question: '부모님이 보증인인데 어떻게 보호하나요?',
        answer:
          '<strong>채권자와 분할 변제·감액 협상을 병행하세요.</strong> 부모님도 심각한 채무 상황이면 개인회생·파산을 검토할 수 있습니다.',
      },
      {
        question: '보증인이 먼저 갚고 나중에 구상받을 수 있나요?',
        answer:
          '<strong>일반적으로 구상 가능하지만 주채무자가 면책되면 구상권이 소멸됩니다.</strong> 보증인은 사실상 회수가 어려워집니다.',
      },
      {
        question: '회생 계획에 보증인 조항을 넣을 수 있나요?',
        answer:
          '<strong>회생계획은 주채무자 중심이며 보증인을 직접 보호하는 조항은 제한적입니다.</strong> 보증인은 별도 협의·절차로 대응해야 합니다.',
      },
      {
        question: '보증인이 재산이 없어도 계속 청구받나요?',
        answer:
          '<strong>네, 채권자는 시효 내 언제든 청구할 수 있습니다.</strong> 재산이 없어도 미래 수입·소득에 대한 압류가 가능하므로 별도 회생·파산 필요.',
      },
    ],
    cta: {
      text: '보증인 영향 AI 점검',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산·회생 선택 비교', href: '/guide/rehabilitation/bankruptcy-vs-rehabilitation-comparison' },
      { label: '개인회생 신청 절차', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '파산 면책 불허가 채무', href: '/guide/bankruptcy/bankruptcy-non-dischargeable-debt-types' },
      { label: '회생 보증채무 포함', href: '/guide/rehabilitation/rehabilitation-suretyship-debt-included' },
      { label: '파산 전 점검 가이드', href: '/guide/bankruptcy' },
    ],
  },

  // ─── 9. inheritance / adopted-child-legal-share ───
  {
    domain: 'inheritance',
    slug: 'inheritance-adopted-child-legal-share',
    keyword: '입양자 상속 분쟁 법정상속분',
    questionKeyword: '입양한 자녀의 상속권은 친자녀와 동일한가요?',
    ctaKeyword: '입양자 상속권 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '입양자 상속권과 법정상속분 정리 | 로앤가이드',
      description:
        '입양자녀의 상속권은 친자녀와 동일하지만 친양자·일반 입양에 따라 차이가 있습니다. 분쟁 시 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>상속 분쟁에서 입양자녀의 상속권이 문제되는 경우가 많습니다. 친자녀와 입양자녀의 상속분이 동일한지, 친양자·일반 입양에 따라 차이가 있는지, 입양 이후 생부모와의 관계는 어떻게 되는지 정확한 이해가 필요합니다. 법정상속분·유류분 분쟁까지 정리합니다.</p>',
    sections: [
      {
        title: '친양자와 일반 입양의 법적 차이',
        content:
          '<p><strong style="color:#1e3a5f">민법은 입양을 친양자 입양과 일반 입양으로 구분하며, 친자녀 관계와 상속권에서 큰 차이가 있습니다.</strong></p>\n<ul>\n<li><strong>친양자 입양(민법 제908조의2 이하)</strong> — 입양으로 생부모와의 친족 관계가 완전히 끊어지고 양부모와 친생자 관계가 성립.</li>\n<li><strong>일반 입양(민법 제866조 이하)</strong> — 양부모와의 친족 관계가 성립하되 생부모와의 관계도 유지됨.</li>\n<li><strong>성·본 변경</strong> — 친양자는 양부모의 성·본을 따르며, 일반 입양은 생부의 성·본 유지가 기본.</li>\n<li><strong>신분증명</strong> — 가족관계증명서에서 친양자 입양 사실은 기본 조회에서 표시되지 않음(엄격한 비밀 보호).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 친양자는 생부모 쪽 상속권이 소멸되지만 일반 입양은 양쪽 모두의 상속권이 유지됩니다.</blockquote>',
      },
      {
        title: '입양자의 법정상속분과 친자녀 평등 원칙',
        content:
          '<p><strong style="color:#1e3a5f">양부모의 상속에서는 입양자녀도 친자녀와 동일한 법정상속분을 갖습니다.</strong></p>\n<ul>\n<li><strong>친자녀와 동일</strong> — 민법 제1009조: 같은 순위 상속인이 여럿이면 균등 상속.</li>\n<li><strong>양부모 상속권</strong> — 친양자·일반 입양 모두 양부모 사망 시 상속인.</li>\n<li><strong>생부모 상속권</strong> — 친양자는 생부모 상속에서 제외, 일반 입양은 상속권 유지.</li>\n<li><strong>손자녀 대습상속</strong> — 입양자녀가 먼저 사망한 경우 그 자녀가 대습상속.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 입양자 상속분쟁 상황을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '유류분 청구와 차별 분쟁',
        content:
          '<p><strong style="color:#1e3a5f">입양자녀가 상속에서 차별받았을 때 유류분 청구로 법정상속분의 절반을 확보할 수 있습니다.</strong></p>\n<ul>\n<li><strong>유류분 제도(민법 제1112조)</strong> — 직계비속·배우자는 법정상속분의 1/2, 직계존속·형제자매는 1/3을 유류분으로 청구 가능.</li>\n<li><strong>유류분 기초재산</strong> — 상속재산 + 상속개시 전 1년 이내 증여 + 일정 요건 충족 증여.</li>\n<li><strong>유류분 반환청구</strong> — 침해받은 유류분 권자는 수증자·수유자에게 반환 청구 가능.</li>\n<li><strong>소멸시효</strong> — 유류분 침해 사실을 안 날로부터 1년, 상속개시부터 10년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입양자녀라는 이유로 상속분쟁에서 불리하게 취급됐다면 유류분 청구가 강력한 구제 수단입니다.</blockquote>',
      },
      {
        title: '입양 사실 은폐 시 대응',
        content:
          '<p><strong style="color:#1e3a5f">다른 상속인이 입양 사실을 부정하거나 상속 제외를 시도하면 가족관계증명서·입양신고 자료로 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>입양신고 확인</strong> — 가족관계등록부에서 입양신고 기록 확인.</li>\n<li><strong>친양자 입양재판</strong> — 친양자 입양은 법원 재판으로 성립하므로 판결문이 근거.</li>\n<li><strong>공증·확인서류</strong> — 입양 당시 공증서, 양부모 동의서 등 보관 자료 확보.</li>\n<li><strong>상속 분쟁 시 소송</strong> — 상속회복청구·유류분반환청구 소송으로 권리 회복.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 상속회복청구권은 침해 사실을 안 날로부터 3년, 상속개시부터 10년 이내 행사해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자녀 복리와 권리 보호의 균형',
        summary:
          '대법원 2023다285162 사건(대법원, 2026.01.22 선고)에서 법원은 가사·상속 사안에서 당사자의 권리 보호와 가족 관계의 실질을 종합 고려해야 한다는 원칙을 확인했습니다.',
        takeaway:
          '입양자녀의 상속권은 법정상속분 원칙에 따라 보호되며, 차별·배제 시도가 있으면 상속회복·유류분 청구로 대응할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '일반 입양이면 생부모 상속도 받을 수 있나요?',
        answer:
          '<strong>네, 일반 입양은 생부모 쪽 친족 관계가 유지되어 양쪽 상속권 모두 가집니다.</strong> 친양자는 생부모 상속에서 제외됩니다.',
      },
      {
        question: '다른 상속인이 입양자 상속을 막으려 하면?',
        answer:
          '<strong>상속회복청구·유류분반환청구 소송으로 대응하세요.</strong> 가족관계증명서·입양 판결문이 핵심 증거입니다.',
      },
      {
        question: '양부모 유언으로 입양자 제외하면 어떻게 되나요?',
        answer:
          '<strong>유언 자체는 가능하지만 유류분(법정상속분의 1/2) 청구는 가능합니다.</strong> 유언에도 불구하고 최소한의 상속분이 보장됩니다.',
      },
      {
        question: '미성년자 입양도 성인 입양과 상속권이 같나요?',
        answer:
          '<strong>상속권에는 차이가 없습니다.</strong> 나이와 무관하게 입양 성립 후에는 친자녀와 동일한 상속권이 인정될 수 있습니다.',
      },
      {
        question: '입양 취소되면 상속권도 사라지나요?',
        answer:
          '<strong>네, 입양 취소 확정 시 상속권이 소멸됩니다.</strong> 이미 상속개시 후라면 상속관계 재조정이 필요합니다.',
      },
    ],
    cta: {
      text: '입양자 상속권 AI 점검',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속 분쟁 해결 기본', href: '/guide/inheritance' },
      { label: '유류분 청구 절차', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '법정상속분·순위 정리', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '상속재산 분할 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '유언 무효 소송', href: '/guide/inheritance/inheritance-will-validity-dispute' },
    ],
  },

  // ─── 10. stalking / emergency-measure-rejected ───
  {
    domain: 'stalking',
    slug: 'stalking-emergency-measure-rejected',
    keyword: '스토킹 긴급응급조치 거부 이의',
    questionKeyword: '스토킹 긴급응급조치 신청이 거부됐는데 어떻게 하나요?',
    ctaKeyword: '긴급응급조치 거부 대응 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스토킹 긴급응급조치 거부 시 대응 절차 | 로앤가이드',
      description:
        '스토킹 긴급응급조치 신청이 거부됐다면 잠정조치·이의신청 등 후속 경로가 있습니다. 단계별 대응을 지금 확인하세요.',
    },
    intro:
      '<p>스토킹 피해로 경찰에 긴급응급조치를 요청했는데 거부되거나 발동이 지연되면 피해자의 안전이 즉각 위협받습니다. 긴급응급조치가 불가능하더라도 잠정조치 신청, 피해자 보호시설, 민사 가처분 등 다양한 경로로 대응할 수 있습니다. 거부 시 구체적 대응 절차를 정리합니다.</p>',
    sections: [
      {
        title: '긴급응급조치의 법적 요건',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제4조는 경찰관이 스토킹행위를 제지하기 위해 현장에서 긴급응급조치를 직권으로 취할 수 있도록 규정합니다.</strong></p>\n<ul>\n<li><strong>조치 내용</strong> — 접근금지(100m 이내), 전기통신 이용 금지, 기타 필요한 조치.</li>\n<li><strong>요건</strong> — 스토킹행위가 실제로 있었거나 반복될 가능성이 높을 것.</li>\n<li><strong>기한</strong> — 긴급응급조치는 1개월 이내 잠정조치 청구가 없으면 실효.</li>\n<li><strong>거부 사유</strong> — 행위의 반복성 부족, 증거 미비, 관할 혼선 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 긴급응급조치는 경찰의 재량 행위이므로 거부될 수 있으나 다른 대응 경로가 확보되어 있습니다.</blockquote>',
      },
      {
        title: '거부 시 잠정조치 신청 경로',
        content:
          '<p><strong style="color:#1e3a5f">긴급응급조치가 거부되어도 법원의 잠정조치를 통해 접근금지·유치 조치를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>스토킹처벌법 제9조</strong> — 검사는 수사 중 피해자 보호 필요 시 잠정조치를 법원에 청구.</li>\n<li><strong>조치 종류</strong> — 서면 경고, 접근금지, 전기통신 금지, 최장 1개월 유치(교도소).</li>\n<li><strong>신청 경로</strong> — 경찰·검찰에 피해 내용 상세 진술 → 검사가 법원에 청구 → 법원 결정.</li>\n<li><strong>기간 연장</strong> — 정당한 사유가 있으면 법원이 잠정조치 기간을 연장 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 긴급응급조치 거부 후 대응 경로를 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '민사 접근금지 가처분 활용',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 절차와 병행해 민사 접근금지 가처분을 신청하면 신속한 보호를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>가처분 신청</strong> — 관할 지방법원에 "접근금지 가처분" 신청서 제출.</li>\n<li><strong>소요 기간</strong> — 긴급성이 인정되면 1~2주 내 결정.</li>\n<li><strong>위반 시 제재</strong> — 가처분 위반 시 간접강제(벌금·구속)가 부과됨.</li>\n<li><strong>증거 제출</strong> — 피해 일지, 메시지·통화 기록, 진단서 등 구체적 증거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형사 절차가 느리다면 민사 가처분으로 신속 보호를 확보하는 것이 실무적 대안입니다.</blockquote>',
      },
      {
        title: '피해자 보호시설·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">긴급 보호가 필요하면 여성긴급전화 1366, 스토킹·가정폭력 피해자 보호시설을 이용할 수 있습니다.</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담, 법률·의료·주거 연계 지원.</li>\n<li><strong>피해자 보호시설</strong> — 지역별 쉼터에서 단기·중기 거주 지원.</li>\n<li><strong>지자체 상담</strong> — 시·군·구청 가정폭력·스토킹 상담센터.</li>\n<li><strong>민간 단체</strong> — 한국여성의전화, 여성인권진흥원 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 긴급한 상황에서는 112 즉시 신고가 최우선이며, 보호시설 연계는 1366·지자체를 통해 이루어집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹행위의 객관적 판단',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹처벌법 제2조의 행위가 객관적·일반적으로 불안감·공포심을 일으키기에 충분한 정도라면 피해자의 현실적 인식 여부와 관계없이 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '객관적으로 불안감·공포심을 일으키는 행위가 반복적이면 스토킹범죄 성립이 인정되며, 긴급응급조치 거부 후에도 잠정조치·민사 가처분 등으로 보호를 확보할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '긴급응급조치 거부 사유는 무엇인가요?',
        answer:
          '<strong>행위의 반복성 부족, 증거 미비, 관할 혼선 등이 주된 사유입니다.</strong> 피해 일지·증거를 체계적으로 정리해 재신청하거나 잠정조치를 병행하세요.',
      },
      {
        question: '잠정조치 신청은 얼마나 걸리나요?',
        answer:
          '<strong>일반적으로 1~4주 소요됩니다.</strong> 긴급한 경우 신속 심리 요청이 가능합니다.',
      },
      {
        question: '민사 가처분과 잠정조치 차이는?',
        answer:
          '<strong>민사 가처분은 민사 법원이 내리는 예방 조치이며, 잠정조치는 스토킹처벌법상 형사 절차입니다.</strong> 둘을 병행하면 보호 효과가 커집니다.',
      },
      {
        question: '가해자가 접근금지 위반하면 어떻게 되나요?',
        answer:
          '<strong>스토킹처벌법상 잠정조치 위반은 2년 이하 징역 또는 2,000만 원 이하 벌금.</strong> 민사 가처분 위반은 간접강제 제재가 따릅니다.',
      },
      {
        question: '직장 동료 스토킹에도 조치 받을 수 있나요?',
        answer:
          '<strong>네, 직장 관계도 스토킹처벌법 대상입니다.</strong> 사내 신고 + 외부 긴급응급조치·잠정조치를 병행하세요.',
      },
    ],
    cta: {
      text: '긴급응급조치 거부 대응 AI 점검',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹 피해 대응 기본', href: '/guide/stalking' },
      { label: '스토킹 긴급응급조치 신청', href: '/guide/stalking/stalking-emergency-measure-application' },
      { label: '스토킹 잠정조치·접근금지', href: '/guide/stalking/stalking-penalty-restraining-order' },
      { label: '스토킹 증거 수집 FAQ', href: '/guide/stalking/stalking-evidence-collection-faq' },
      { label: '직장 내 스토킹 대응', href: '/guide/stalking/stalking-workplace-supervisor-report' },
    ],
  },
];
