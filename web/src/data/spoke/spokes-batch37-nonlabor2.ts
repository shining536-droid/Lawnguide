import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch37 비노동2 6개: 파산 1 + 회생 1 + 상속 2 + 명예 1 + 스토킹 1
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 파산 면책을 고려하는 채무자에게 면책 불허가 되는 채무 유형과 대응 전략을 안내한다.
// 2. 개인회생을 신청하려는 근로자에게 회사·가족에게 통보되는지 여부와 개인정보 보호 방법을 안내한다.
// 3. 생명보험금이 상속재산에 포함되는지 궁금한 상속인에게 보험금 수익자 지정의 효력을 안내한다.
// 4. 단순승인 후 숨겨진 빚을 발견한 상속인에게 특별한정승인 청구 요건과 기한을 안내한다.
// 5. 카카오톡 단체방에서 뒷담화로 명예훼손 피해를 입은 피해자에게 고소 가능성과 증거 확보를 안내한다.
// 6. 직장 내 스토킹 피해자에게 회사 신고·사내 대응·외부 신고 경로를 안내한다.

export const spokesBatch37Nonlabor2: SpokePage[] = [
  // ─── 1. bankruptcy / non-dischargeable-debt-types ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-non-dischargeable-debt-types',
    keyword: '파산 면책 불허가 채무 유형',
    questionKeyword: '파산해도 면책이 안 되는 빚은 어떤 종류인가요?',
    ctaKeyword: '면책 불허가 채무 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '파산 면책 불허가 채무 유형 총정리 | 로앤가이드',
      description:
        '파산해도 면책받지 못하는 채무가 있습니다. 벌금·조세·악의적 채무 등 비면책채권을 미리 확인하고 대응 전략을 지금 확인하세요.',
    },
    intro:
      '<p>파산 면책을 받으면 모든 빚이 사라지는 줄 알고 신청했다가, 일부 빚은 그대로 남아 있는 상황이 생길 수 있습니다. 채무자회생법은 공익·도의적 이유로 면책되지 않는 채무를 명시적으로 규정하고 있습니다. 어떤 빚이 면책 대상에서 제외되는지, 사전 대응 전략은 무엇인지 정리합니다.</p>',
    sections: [
      {
        title: '비면책채권의 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제566조는 파산 면책 결정의 효력이 미치지 않는 채권(비면책채권)을 열거하고 있습니다.</strong></p>\n<ul>\n<li><strong>국세·지방세·관세 등 조세</strong> — 공익적 성격으로 면책 대상에서 제외됩니다.</li>\n<li><strong>벌금·과료·형사추징금·과태료</strong> — 형사·행정 제재 성격의 금전 부담은 면책되지 않습니다.</li>\n<li><strong>고의적 불법행위로 인한 손해배상</strong> — 불법행위에 기한 손해배상 중 고의·중과실에 의한 것은 면책 제외됩니다.</li>\n<li><strong>양육비·부양료</strong> — 가족 간 부양 의무는 면책 대상이 아닙니다.</li>\n<li><strong>채권자 명부 누락 채권</strong> — 악의로 누락한 채권은 원칙적으로 면책되지 않습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일반 금융 채무는 대부분 면책 대상이지만, 공공·가족·고의 불법 관련 채무는 제외되는 경우가 많습니다.</blockquote>',
      },
      {
        title: '고의적 불법행위 채무의 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">고의적 불법행위에 기한 손해배상은 면책되지 않지만, 과실 불법행위는 면책 대상이 될 수 있어 구분이 중요합니다.</strong></p>\n<ul>\n<li><strong>고의 인정 사례</strong> — 사기·횡령·배임·폭행·모욕 등으로 인정된 손해배상은 면책 제외.</li>\n<li><strong>중과실 인정</strong> — 중과실(예: 음주운전 교통사고)도 면책 제외로 판단되는 경우가 늘고 있습니다.</li>\n<li><strong>경과실은 면책 가능</strong> — 단순 과실에 기한 손해배상은 원칙적으로 면책 대상입니다.</li>\n<li><strong>채권자 이의</strong> — 채권자가 면책 불허가 사유를 적극 주장하지 않으면 포괄적 면책 결정이 내려질 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 채무의 면책 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '면책 신청 전 점검해야 할 사항',
        content:
          '<p><strong style="color:#1e3a5f">면책 신청 전 본인 채무의 성격을 정확히 분류하고, 비면책채권에 대한 별도 전략을 세워야 합니다.</strong></p>\n<ul>\n<li><strong>채권자 명부 정리</strong> — 채권자·채무액을 빠짐없이 기재해야 하며, 누락은 악의가 아닌 과실로도 면책 제외 사유가 될 수 있습니다.</li>\n<li><strong>조세·공과금 점검</strong> — 국세·지방세 체납 내역을 확인하고, 분납·감면 신청 등 별도 방안을 모색해야 합니다.</li>\n<li><strong>형사 확정 여부</strong> — 형사 판결이 확정된 벌금·추징금은 면책 불가능합니다.</li>\n<li><strong>양육비·부양료 정리</strong> — 이혼 후 양육비는 별도로 처리하며, 개인회생 변제계획에 포함되는 경우도 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일부 채무가 면책 제외라도 전체 채무의 대부분이 면책 대상이라면 파산 신청의 실익이 있을 수 있습니다.</blockquote>',
      },
      {
        title: '비면책채권에 대한 대응 전략',
        content:
          '<p><strong style="color:#1e3a5f">면책되지 않는 채무는 분납·감면·이의 등의 대안으로 대응해야 하며, 방치하면 압류·강제집행 리스크가 큽니다.</strong></p>\n<ul>\n<li><strong>조세 분납·감면</strong> — 국세·지방세는 징수 유예·분납 신청이 가능하며, 저소득·질병 사유가 있으면 감면도 검토됩니다.</li>\n<li><strong>벌금 분납</strong> — 검찰청 형집행법에 따른 벌금 분납 허가 신청이 가능합니다.</li>\n<li><strong>양육비 이행 강제</strong> — 양육비 미지급은 이행명령·감치·운전면허 정지 등 다양한 제재가 있으므로 성실한 이행이 필수입니다.</li>\n<li><strong>개인회생 고려</strong> — 비면책채권 규모가 크면 개인회생으로 변제계획을 세우는 것이 실무적일 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 면책 후에도 비면책채권에 대한 추심이 계속되므로, 신청 전부터 대응 계획을 함께 마련해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 회생계획의 해석과 변제 범위',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 채무자회생법 제243조 등에 따른 인가된 회생계획의 해석에 관하여 인가 범위와 변제 효력의 원칙을 확인했습니다.',
        takeaway:
          '회생·파산 절차에서 면책·변제의 효력은 법이 정한 범위 내에서만 인정되며, 비면책채권은 별도 대응이 필요하다는 원칙이 재확인되었습니다.',
      },
    ],
    faq: [
      {
        question: '신용카드 대금도 면책되지 않을 수 있나요?',
        answer:
          '<strong>일반 신용카드 대금은 면책 대상이지만, 사기·허위 카드 사용은 고의 불법행위로 면책 제외될 수 있습니다.</strong> 성실한 사용 이력은 면책 대상입니다.',
      },
      {
        question: '파산 후에도 양육비는 계속 줘야 하나요?',
        answer:
          '<strong>네, 양육비는 면책 대상이 아닙니다.</strong> 파산 후에도 소득에 따라 양육비 지급 의무가 유지되며, 미지급 시 이행 강제 수단이 적용됩니다.',
      },
      {
        question: '국세 체납이 있으면 파산 신청이 거부되나요?',
        answer:
          '<strong>신청은 가능하지만 국세는 면책되지 않습니다.</strong> 파산 신청과 별개로 국세청과 분납·감면 협의를 병행해야 합니다.',
      },
      {
        question: '음주운전 합의금도 면책이 안 되나요?',
        answer:
          '<strong>음주운전은 중과실로 판단되는 경우가 많아 면책 제외될 가능성이 높습니다.</strong> 구체적 사안에 따라 다르니 변호사 상담이 필요합니다.',
      },
      {
        question: '채권자 명부에서 빠진 빚도 면책되나요?',
        answer:
          '<strong>악의 누락은 면책 제외, 과실 누락은 사안별 판단입니다.</strong> 채권자를 최대한 빠짐없이 기재하는 것이 원칙이며, 누락 시 법원에 추가 신고해야 합니다.',
      },
    ],
    cta: {
      text: '면책 불허가 채무 AI 점검',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '개인파산 신청 전 점검', href: '/guide/bankruptcy' },
      { label: '파산 면책 절차 가이드', href: '/guide/bankruptcy' },
      { label: '파산·회생 중 선택', href: '/guide/rehabilitation/bankruptcy-vs-rehabilitation-comparison' },
      { label: '상속 채무 면책 가이드', href: '/guide/bankruptcy/bankruptcy-inheritance-debt-discharge-guide' },
      { label: '파산 후 신용 회복', href: '/guide/bankruptcy' },
    ],
  },

  // ─── 2. rehabilitation / workplace-family-notification ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-workplace-family-notification',
    keyword: '개인회생 회사 가족 통보',
    questionKeyword: '개인회생 신청하면 회사·가족에게 알려지나요?',
    ctaKeyword: '개인회생 통보 범위 확인',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '개인회생 신청 — 회사·가족에게 알려지나요? | 로앤가이드',
      description:
        '개인회생 신청 시 회사·가족에게 통보되는지 여부, 송달 주소 관리, 급여 압류 해제 과정을 정리했습니다. 개인정보 보호 방법을 지금 확인하세요.',
    },
    intro:
      '<p>개인회생을 신청하고 싶지만 회사나 가족에게 알려질까 걱정됩니다. 법원은 채권자에게만 통지하고 회사에 직접 통보하지는 않지만, 급여 압류 해제 과정에서 인사팀이 인지할 수도 있습니다. 송달 주소 관리·포괄적 금지명령 영향·불이익 방어 방법까지 정리합니다.</p>',
    sections: [
      {
        title: '법원 통보의 범위 — 회사는 대상이 아닙니다',
        content:
          '<p><strong style="color:#1e3a5f">법원은 개인회생 결정 시 채무자와 채권자에게만 송달하며, 회사는 채권자가 아니라면 통지 대상이 아닙니다.</strong></p>\n<ul>\n<li><strong>송달 대상</strong> — 채무자(본인), 회생위원, 채권자 목록에 기재된 채권자.</li>\n<li><strong>회사 통보 없음</strong> — 회사가 채권자(임금·대여금 등)가 아니라면 법원으로부터 통지를 받지 않습니다.</li>\n<li><strong>신용정보 공유</strong> — 한국신용정보원에 신용 정보가 등록되지만 회사가 임의로 이를 조회할 권한은 없습니다.</li>\n<li><strong>가족 통보 없음</strong> — 가족 역시 채권자가 아니면 법원 통지 대상이 아닙니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사·가족이 채권자가 아니라면 법원이 직접 통보하지 않습니다. 다만 간접 경로로 인지될 수 있습니다.</blockquote>',
      },
      {
        title: '급여 압류 해제 과정에서의 간접 인지',
        content:
          '<p><strong style="color:#1e3a5f">이미 급여에 가압류·압류가 있던 상태에서 회생을 신청하면, 법원이 제3채무자(회사)에 압류 해제를 통지하면서 인사팀이 인지할 수 있습니다.</strong></p>\n<ul>\n<li><strong>포괄적 금지명령</strong> — 회생 개시 결정 시 기존 압류·강제집행이 중지·해제됩니다.</li>\n<li><strong>제3채무자 통지</strong> — 법원이 압류 해제를 회사에 통지하게 됩니다.</li>\n<li><strong>통지 내용</strong> — 압류 해제 사실만 통지되며, 회생의 구체적 원인은 기재되지 않습니다.</li>\n<li><strong>해명 전략</strong> — 인사팀이 알게 될 가능성이 있다면 먼저 간단히 "법적 절차로 압류가 해제된다"고 안내해 오해를 줄이는 것이 실무적입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 회생 신청 시 회사 인지 리스크를 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '송달 주소 관리 — 자택으로 설정하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원 서류의 송달 주소를 본인 자택으로 지정하고, 등기 수령을 안정적으로 받을 수 있는 상태를 유지해야 합니다.</strong></p>\n<ul>\n<li><strong>자택 주소 기재</strong> — 회생 신청서·채권자 명부 등에 송달 주소를 가능한 한 자택으로 기재합니다.</li>\n<li><strong>직장 주소 회피</strong> — 직장 주소를 기재하면 법원 등기우편이 회사로 가게 되어 인사팀이 인지할 수 있습니다.</li>\n<li><strong>등기 수령 확인</strong> — 자택에서 등기 수령이 가능한 시간대를 확보하거나, 가족에게 수령 권한을 미리 안내해둡니다.</li>\n<li><strong>변경 시 신고</strong> — 절차 진행 중 주소가 변경되면 법원에 즉시 주소 변경 신고를 해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부득이하게 가족에게 알려지는 것이 걱정된다면 변호사 사무소 주소를 송달 장소로 지정하는 옵션도 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '회생 이유 해고·불이익 방어',
        content:
          '<p><strong style="color:#1e3a5f">회생 신청을 이유로 해고·불이익을 주는 것은 부당해고로 노동위원회 구제가 가능합니다.</strong></p>\n<ul>\n<li><strong>근로기준법 제23조</strong> — 정당한 이유 없이 해고·감봉·강등·전직 등 불이익을 줄 수 없습니다. 회생 신청은 적법한 절차로 정당한 이유가 되지 않습니다.</li>\n<li><strong>사직 강요 무효</strong> — 회생을 이유로 사직서 서명을 강요당한 경우, 의사 형성의 자유가 침해된 서명은 무효 주장이 가능합니다.</li>\n<li><strong>노동위원회 구제</strong> — 해고 통지일로부터 3개월 이내에 지방노동위원회에 부당해고 구제신청을 제출합니다.</li>\n<li><strong>증거 확보</strong> — 회생 인지 후 불이익이 발생한 시점·경위를 기록하고, 관련 이메일·카톡 등을 보관합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사직서 서명을 요구받으면 즉석에서 서명하지 말고 가능한 한 전문가 상담을 받은 뒤 판단하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인가된 회생계획의 안정성',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 인가된 회생계획의 해석과 변제 범위에 관한 원칙을 확인하며, 채무자가 성실히 이행할 때 법적 지위가 안정적으로 보장된다는 취지를 판시했습니다.',
        takeaway:
          '개인회생에 들어간 근로자가 성실히 변제를 이행하는 한 직장 생활과 법률 절차를 병행할 수 있으며, 회생 신청을 이유로 한 불이익은 법적으로 허용되지 않습니다.',
      },
    ],
    faq: [
      {
        question: '신용정보에 등록되면 회사가 조회할 수 있나요?',
        answer:
          '<strong>회사가 직원의 신용정보를 임의로 조회할 권한은 제한적입니다.</strong> 금융업·보안업 등 특수 업무를 제외하면 본인 동의 없이 신용정보 조회가 불가능합니다.',
      },
      {
        question: '급여 압류가 이미 있는 상태에서도 회사가 안 알게 하는 방법이 있나요?',
        answer:
          '<strong>압류 해제 통지는 불가피하게 회사에 전달됩니다.</strong> 선제적으로 인사팀에 간단히 "법적 절차로 해제된다"고 안내하는 것이 불필요한 오해를 줄이는 실무적 선택입니다.',
      },
      {
        question: '가족에게 알리지 않고 회생 신청이 가능한가요?',
        answer:
          '<strong>가족이 채권자가 아니라면 법원 통지 대상이 아닙니다.</strong> 송달 주소를 가족과 분리된 주소로 설정하거나, 변호사 사무소 송달을 활용할 수 있습니다.',
      },
      {
        question: '배우자가 연대보증인이면 어떻게 되나요?',
        answer:
          '<strong>연대보증인은 채권자가 연대보증인에게 직접 청구할 수 있습니다.</strong> 채무자 본인의 회생은 연대보증인의 책임에 영향을 주지 않으므로, 배우자와 별도 전략이 필요합니다.',
      },
      {
        question: '회생 신청 중 이직하면 어떻게 되나요?',
        answer:
          '<strong>이직 자체는 가능하지만 법원에 보고해야 합니다.</strong> 소득 변동이 있으면 변제계획 수정이 필요하며, 새 직장에서 급여 압류 해제·원천징수 관련 절차가 재진행될 수 있습니다.',
      },
    ],
    cta: {
      text: '개인회생 통보 리스크 AI 점검',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 신청 절차', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 신청 서류', href: '/guide/rehabilitation/rehabilitation-application-required-docs' },
      { label: '개인회생 채권자 추심 중단', href: '/guide/rehabilitation/rehabilitation-creditor-collection-stop' },
      { label: '개인회생 중 이직·소득변동', href: '/guide/rehabilitation' },
      { label: '개인회생 기각 사유 예방', href: '/guide/rehabilitation/rehabilitation-rejection-reasons-prevention' },
    ],
  },

  // ─── 3. inheritance / life-insurance-not-included ───
  {
    domain: 'inheritance',
    slug: 'inheritance-life-insurance-not-included',
    keyword: '생명보험금 상속재산 포함 여부',
    questionKeyword: '생명보험금도 상속재산에 포함되나요?',
    ctaKeyword: '보험금 상속·분할 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '생명보험금 상속재산 포함 여부와 분할 | 로앤가이드',
      description:
        '생명보험금이 상속재산에 포함되는지 수익자 지정 방식에 따라 다릅니다. 고유재산·상속재산 구분과 유류분 판단을 지금 확인하세요.',
    },
    intro:
      '<p>돌아가신 분이 들어둔 생명보험금이 있는데 이것이 상속재산에 들어가는지, 아니면 수익자 고유재산으로 빠지는지 혼란이 생깁니다. 보험 계약의 수익자 지정 방식에 따라 결론이 달라지며, 상속 포기·한정승인·유류분 판단에도 영향을 줍니다. 판례 원칙과 실무 기준을 정리합니다.</p>',
    sections: [
      {
        title: '수익자 지정 방식에 따른 법적 분류',
        content:
          '<p><strong style="color:#1e3a5f">생명보험금은 수익자를 특정인으로 지정했는지 여부에 따라 상속재산 포함 여부가 달라집니다.</strong></p>\n<ul>\n<li><strong>특정 수익자 지정</strong> — 피보험자가 아닌 특정인(자녀·배우자 등)을 수익자로 지정한 경우, 보험금은 해당 수익자의 고유재산이며 상속재산에 포함되지 않습니다.</li>\n<li><strong>상속인 또는 법정상속인</strong> — 수익자를 단순히 "상속인" 또는 "법정상속인"이라고만 지정한 경우, 판례는 보험금이 수익자의 고유재산이라고 보는 것이 주류이지만 구체적 사안에 따라 달라질 수 있습니다.</li>\n<li><strong>피보험자 자신</strong> — 수익자를 피보험자 본인으로 지정했다가 사망한 경우엔 보험금이 상속재산에 포함됩니다.</li>\n<li><strong>수익자 미지정</strong> — 수익자를 지정하지 않은 경우에는 원칙적으로 상속재산에 포함됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수익자 지정이 명확하면 보험금은 상속재산이 아닌 고유재산으로 분류되는 것이 원칙입니다.</blockquote>',
      },
      {
        title: '고유재산 인정 시의 실무적 효과',
        content:
          '<p><strong style="color:#1e3a5f">보험금이 수익자의 고유재산이면 상속 포기·한정승인·유류분 판단 등에서 여러 실무적 차이가 발생합니다.</strong></p>\n<ul>\n<li><strong>상속 포기와의 관계</strong> — 상속을 포기해도 고유재산인 보험금은 받을 수 있습니다. 빚이 많은 상속에서 중요한 쟁점입니다.</li>\n<li><strong>한정승인과의 관계</strong> — 한정승인 시에도 고유재산 보험금은 한정승인 대상이 아닙니다.</li>\n<li><strong>채권자 추심</strong> — 피상속인의 채권자는 고유재산인 보험금에 대해 원칙적으로 추심할 수 없습니다.</li>\n<li><strong>상속세 부담</strong> — 상속세법상 보험금도 상속세 과세 대상에 포함됩니다(상속세 및 증여세법 제8조). 민사상 분류와 세무상 분류가 다릅니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보험금의 상속재산 여부와 처리 방법을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '유류분·기여분 판단에서의 위치',
        content:
          '<p><strong style="color:#1e3a5f">고유재산 보험금이라도 유류분 산정이나 기여분 주장에서 일정 부분 고려될 수 있습니다.</strong></p>\n<ul>\n<li><strong>유류분 기초재산 포함 여부</strong> — 판례는 보험금을 증여·유증에 준하는 것으로 보아 유류분 기초재산에 포함시키기도 합니다. 사안별 판단이 필요합니다.</li>\n<li><strong>특별수익 공제</strong> — 수익자가 상속인이라면 일부 판례는 보험금을 특별수익으로 보아 상속분에서 공제하기도 합니다.</li>\n<li><strong>기여분 산정</strong> — 피상속인에게 특별 기여한 상속인의 기여분 산정 시 보험금 수령 여부가 고려될 수 있습니다.</li>\n<li><strong>실무적 조정</strong> — 상속인 간 분쟁이 있으면 조정·소송을 통해 종합적 조정이 이루어집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험금이 유류분 분쟁에서 일부 고려될 수 있으므로 수령 후 바로 처분·분산하지 말고 분쟁 가능성을 점검하세요.</blockquote>',
      },
      {
        title: '실무 절차 — 보험금 수령과 분쟁 대응',
        content:
          '<p><strong style="color:#1e3a5f">보험금 청구·수령은 계약자의 사망신고 후 보험사 절차를 거치며, 분쟁 시에는 법적 절차로 대응합니다.</strong></p>\n<ul>\n<li><strong>필수 서류</strong> — 사망진단서, 가족관계증명서, 보험증권, 수익자 신분증, 보험금 청구서.</li>\n<li><strong>수익자 지정 확인</strong> — 보험증권상 수익자 기재와 실제 수령 권리자를 확인합니다.</li>\n<li><strong>분쟁 발생 시</strong> — 상속인 간 분쟁이 있으면 보험금 수령을 잠시 보류하고, 가정법원 조정·상속 소송으로 해결합니다.</li>\n<li><strong>세금 신고</strong> — 상속세 과세 대상이므로 상속개시일로부터 6개월 이내에 상속세 신고·납부해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보험금 수령 후 상속인 간 분쟁이 발생하면 수령 보험금에 대한 반환 청구가 있을 수 있으므로, 수령 전 상속 상황을 종합적으로 검토해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 수익자 고유재산의 원칙',
        summary:
          '대법원은 일관되게 피보험자가 아닌 특정인을 수익자로 지정한 생명보험금은 수익자의 고유재산이며 상속재산에 포함되지 않는다고 판시해왔습니다. 다만 유류분 산정 등에서 특정 사안에 따라 증여·유증에 준해 고려될 수 있습니다.',
        takeaway:
          '보험금은 원칙적으로 수익자 고유재산이므로 상속 포기·한정승인 시에도 수령 가능하지만, 유류분 분쟁에서는 사안별로 고려될 수 있어 분쟁 가능성을 사전에 점검해야 합니다.',
      },
    ],
    faq: [
      {
        question: '자녀가 수익자인 경우 자녀가 상속 포기해도 받을 수 있나요?',
        answer:
          '<strong>네, 고유재산이므로 상속 포기와 무관하게 수령 가능합니다.</strong> 빚이 많은 상속에서 상속 포기 + 보험금 수령의 조합이 실무적으로 활용됩니다.',
      },
      {
        question: '수익자가 "법정상속인"으로만 기재되어 있으면 어떻게 되나요?',
        answer:
          '<strong>판례는 대체로 수익자 고유재산으로 보지만, 구체적 사안에 따라 다를 수 있습니다.</strong> 계약 체결 경위·의사 해석에 따라 판단이 갈리므로 변호사 검토가 필요합니다.',
      },
      {
        question: '상속세는 어떻게 계산되나요?',
        answer:
          '<strong>보험금도 상속세 과세 대상이며 상속재산에 포함되어 계산됩니다.</strong> 민사상 상속재산이 아니어도 세법상 상속재산으로 취급되므로 신고·납부가 필요합니다.',
      },
      {
        question: '보험금이 유류분에 포함될 수 있나요?',
        answer:
          '<strong>판례는 사안에 따라 증여·유증에 준해 유류분 기초재산에 포함시키기도 합니다.</strong> 유류분 분쟁 가능성이 있다면 전문가 상담을 받고 대응하세요.',
      },
      {
        question: '채권자가 보험금에 압류할 수 있나요?',
        answer:
          '<strong>피상속인의 채권자는 원칙적으로 고유재산 보험금을 추심할 수 없습니다.</strong> 다만 수익자 본인의 개인 채무에 대해서는 보험금이 재산으로 취급되어 추심 대상이 될 수 있습니다.',
      },
    ],
    cta: {
      text: '생명보험금 상속 AI 분석',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속 분쟁 해결 기본 가이드', href: '/guide/inheritance' },
      { label: '상속 재산 범위 정리', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '상속 포기 vs 한정승인', href: '/guide/inheritance/inheritance-limited-vs-renounce' },
      { label: '유류분 청구 절차', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '상속재산 분할 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
    ],
  },

  // ─── 4. inheritance / simple-approval-hidden-debt-recovery ───
  {
    domain: 'inheritance',
    slug: 'inheritance-simple-approval-hidden-debt-recovery',
    keyword: '상속 단순승인 숨겨진 빚 특별한정승인',
    questionKeyword: '상속받은 뒤에 숨겨진 빚을 발견했는데 어떻게 해야 하나요?',
    ctaKeyword: '특별한정승인 청구 가능 여부 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속 후 숨겨진 빚 발견 — 특별한정승인 구제 | 로앤가이드',
      description:
        '상속받은 후 숨겨진 빚을 발견했다면 특별한정승인 청구로 구제받을 수 있습니다. 요건·기한·증거를 지금 확인하세요.',
    },
    intro:
      '<p>상속을 받은 지 몇 달 뒤, 피상속인의 숨겨진 빚이나 보증 채무가 드러나면 큰 충격입니다. 단순승인 후에는 빚도 전부 상속인 책임이지만, 몰랐던 채무에 대해서는 "특별한정승인"으로 구제받을 수 있습니다. 민법 제1019조 제3항의 특별한정승인 요건과 절차를 정리합니다.</p>',
    sections: [
      {
        title: '특별한정승인의 법적 근거와 의의',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1019조 제3항은 상속인이 중대한 과실 없이 상속채무가 상속재산을 초과한다는 사실을 알지 못한 경우 일정 기간 내에 한정승인을 할 수 있도록 규정하고 있습니다.</strong></p>\n<ul>\n<li><strong>기본 원칙</strong> — 상속 개시를 안 날로부터 3개월 이내에 한정승인 또는 포기를 하지 않으면 단순승인으로 간주됩니다.</li>\n<li><strong>특별한정승인 예외</strong> — 상속 채무 초과 사실을 중대한 과실 없이 몰랐을 때, 해당 사실을 안 날로부터 3개월 이내에 한정승인 청구가 가능합니다.</li>\n<li><strong>한정승인 효과</strong> — 상속재산 범위 내에서만 채무 변제 의무를 지므로, 상속인의 고유재산은 보호됩니다.</li>\n<li><strong>입증 책임</strong> — "중대한 과실 없이 몰랐음"을 상속인이 입증해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순승인 후라도 숨겨진 빚을 발견하면 3개월 안에 특별한정승인을 청구해 구제받을 수 있습니다.</blockquote>',
      },
      {
        title: '중대한 과실의 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">특별한정승인은 중대한 과실 없이 채무 초과 사실을 몰랐어야 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>중과실의 기준</strong> — 조금만 주의를 기울였으면 알 수 있었던 채무를 조사하지 않은 경우 중대한 과실로 판단됩니다.</li>\n<li><strong>통상 과실 인정</strong> — 피상속인과 평소 교류가 적었거나, 피상속인이 채무를 숨긴 경우 등은 통상 과실로 중과실 아닌 경우가 많습니다.</li>\n<li><strong>조사 의무의 범위</strong> — 상속인에게 요구되는 조사 의무는 일반인 수준이며, 전문적 조사 의무는 없습니다.</li>\n<li><strong>피상속인의 은닉</strong> — 피상속인이 의도적으로 채무를 숨긴 경우엔 상속인의 중과실 인정이 어렵습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 특별한정승인 청구 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '특별한정승인 신고 절차',
        content:
          '<p><strong style="color:#1e3a5f">특별한정승인은 가정법원에 신고서를 제출하여 심판을 받는 절차로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계: 서류 준비</strong> — 한정승인 신고서, 상속인·피상속인 가족관계증명서, 상속재산 목록, 상속 채무 목록, 채무를 몰랐음을 입증할 자료.</li>\n<li><strong>2단계: 가정법원 신고</strong> — 상속 개시 당시의 피상속인 주소지 관할 가정법원에 신고합니다.</li>\n<li><strong>3단계: 심판 절차</strong> — 법원이 특별한정승인 요건을 심사합니다. 사실관계가 복잡하면 심문 기일이 지정될 수 있습니다.</li>\n<li><strong>4단계: 수리·공고</strong> — 법원이 한정승인을 수리하면 관보·신문 공고를 통해 채권자에게 알리고, 상속인은 상속재산 범위 내에서 변제 책임을 집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 특별한정승인은 3개월 기한이 엄격하게 적용되므로, 숨겨진 빚을 발견하면 즉시 변호사 상담을 받고 신속히 절차를 시작하세요.</blockquote>',
      },
      {
        title: '한정승인 후 변제 절차와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">특별한정승인이 수리되면 상속재산 목록대로 채권자들에게 안분 변제하는 절차를 거칩니다.</strong></p>\n<ul>\n<li><strong>공고·최고</strong> — 법정 기간(2개월 이상) 동안 채권자들의 신고를 받기 위한 공고와 최고 절차를 진행합니다.</li>\n<li><strong>변제 순서</strong> — 우선권이 있는 채권자(세금 등) 먼저 변제하고, 나머지는 채권액 비율로 안분 변제합니다.</li>\n<li><strong>고유재산 보호</strong> — 상속재산이 부족해도 상속인 본인의 재산으로 추가 변제할 의무는 없습니다.</li>\n<li><strong>사해행위 금지</strong> — 한정승인 후 상속재산을 임의로 처분하거나 은닉하면 한정승인이 무효가 될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 한정승인을 받은 후에도 상속재산 관리를 소홀히 하거나 임의 처분하면 단순승인으로 간주되어 고유재산까지 책임지게 됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 특별한정승인 요건의 엄격 해석',
        summary:
          '대법원은 특별한정승인의 "중대한 과실 없이 몰랐음" 요건에 관해, 일반인의 주의 의무를 기준으로 구체적 사실관계를 종합 판단해야 한다고 일관되게 판시해왔습니다. 피상속인과의 교류 정도, 채무 은닉 여부, 조사 가능성 등이 주요 고려 요소입니다.',
        takeaway:
          '특별한정승인은 중과실 없음을 상속인이 입증해야 하므로, 피상속인과의 교류 상황·채무 은닉 경위·조사 경위 등을 구체적으로 기록·입증할 준비가 필요합니다.',
      },
    ],
    faq: [
      {
        question: '단순승인 후 채무가 드러나면 언제까지 신청 가능한가요?',
        answer:
          '<strong>채무 초과 사실을 안 날로부터 3개월 이내입니다.</strong> 이 기한은 엄격하게 적용되므로 발견 즉시 변호사 상담을 받고 절차를 시작해야 합니다.',
      },
      {
        question: '상속재산을 이미 처분했는데 특별한정승인이 가능한가요?',
        answer:
          '<strong>원칙적으로 어렵지만 구체적 사안에 따라 판단됩니다.</strong> 임의 처분이 한정승인 청구에 영향을 주므로, 처분 후엔 전문가 상담이 필수입니다.',
      },
      {
        question: '신용정보 조회로 사전에 빚을 확인할 수 있나요?',
        answer:
          '<strong>사망 후 상속인은 한국신용정보원 등에 피상속인 신용정보 조회를 신청할 수 있습니다.</strong> 상속 결정 전에 조회해 채무 규모를 파악하는 것이 안전합니다.',
      },
      {
        question: '공동상속인 중 일부만 특별한정승인을 할 수 있나요?',
        answer:
          '<strong>네, 상속인별로 개별 선택이 가능합니다.</strong> 각자의 판단에 따라 한정승인·포기·단순승인을 결정할 수 있습니다.',
      },
      {
        question: '특별한정승인 비용은 얼마나 드나요?',
        answer:
          '<strong>신고 수수료는 저렴하지만 변호사 선임 시 사안 복잡도에 따라 200만~500만 원 수준이 일반적입니다.</strong> 법률구조공단·시민법률상담 등도 활용 가능합니다.',
      },
    ],
    cta: {
      text: '특별한정승인 AI 점검',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속 분쟁 해결 기본 가이드', href: '/guide/inheritance' },
      { label: '한정승인 절차 가이드', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속 포기 기한', href: '/guide/inheritance/inheritance-renunciation-deadline' },
      { label: '숨겨진 채무 발견 대응', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
      { label: '상속 포기 vs 한정승인', href: '/guide/inheritance/inheritance-limited-vs-renounce' },
    ],
  },

  // ─── 5. defamation / group-chat-leak-complaint ───
  {
    domain: 'defamation',
    slug: 'defamation-group-chat-leak-complaint',
    keyword: '카톡 단체방 명예훼손 고소',
    questionKeyword: '카톡 단체방에서 뒷담화 당했는데 명예훼손으로 고소 가능한가요?',
    ctaKeyword: '단체방 명예훼손 고소 가능성 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '카톡 단체방 뒷담화 명예훼손 고소 가능? | 로앤가이드',
      description:
        '카톡 단체방·회사 단톡방에서 뒷담화를 당했다면 명예훼손 고소가 가능합니다. 공연성·특정성 요건과 증거 확보 방법을 지금 확인하세요.',
    },
    intro:
      '<p>회사·동창 단톡방에서 본인에 대한 뒷담화가 오간 사실을 알게 됐습니다. 사적 공간인 단톡방에서도 명예훼손이 성립할 수 있는지, 고소하려면 어떤 증거가 필요한지 정리합니다. 대법원 판례는 3인 이상이 참여한 단톡방의 공연성을 넓게 인정하고 있으며, 캡처·원본 보관이 결정적입니다.</p>',
    sections: [
      {
        title: '명예훼손의 법적 요건 — 공연성·특정성·사실 적시',
        content:
          '<p><strong style="color:#1e3a5f">형법 제307조의 명예훼손죄는 공연성, 특정성, 사실·허위 사실 적시의 세 가지 요건이 충족되어야 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정 또는 다수인이 인식할 수 있는 상태. 판례는 "전파 가능성 있음"도 공연성으로 인정합니다.</li>\n<li><strong>특정성</strong> — 피해자가 누구인지 특정 가능해야 합니다. 이름·직책·별명 등으로 특정됩니다.</li>\n<li><strong>사실 적시</strong> — 사실이든 허위든 상관없이 성립하나, 허위 사실은 법정형이 가중됩니다(제309조).</li>\n<li><strong>단순 의견·추상적 욕설</strong> — 사실 적시가 아닌 의견 표명·모욕적 표현은 모욕죄(제311조)로 처리될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카톡 단체방도 3인 이상 참여 시 공연성이 인정되어 명예훼손이 성립할 수 있습니다.</blockquote>',
      },
      {
        title: '단체방 공연성 판단 — 3인 이상이 핵심',
        content:
          '<p><strong style="color:#1e3a5f">카톡 단체방의 공연성은 참여자 수와 전파 가능성을 종합 고려해 판단됩니다.</strong></p>\n<ul>\n<li><strong>3인 이상 단톡방</strong> — 본인과 상대방을 제외한 제3자가 있으면 공연성이 인정될 가능성이 높습니다.</li>\n<li><strong>전파 가능성</strong> — 참여자들이 내용을 외부에 전달할 가능성이 있는 관계(회사 동료·동호회 등)라면 공연성이 강하게 인정될 수 있습니다.</li>\n<li><strong>폐쇄적 소수 관계</strong> — 가족 간 단톡방처럼 폐쇄적 관계에서는 공연성이 부정될 수 있으나, 구체적 사안에 따라 다릅니다.</li>\n<li><strong>공개 플랫폼</strong> — 오픈채팅방·회사 공개 채널은 공연성이 명백합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 단톡방 명예훼손 성립 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보와 보관 — 원본·캡처·공증',
        content:
          '<p><strong style="color:#1e3a5f">단체방 명예훼손은 대화 내용의 원본 보존이 가장 중요하며, 증거 확보 방식에 따라 증명력이 달라집니다.</strong></p>\n<ul>\n<li><strong>전체 맥락 캡처</strong> — 문제 발언뿐 아니라 전후 맥락을 포함해 캡처합니다. 맥락이 없으면 발언의 의미가 왜곡 해석될 수 있습니다.</li>\n<li><strong>화면 녹화</strong> — 스크롤을 포함한 화면 녹화로 연속성을 보존하면 증명력이 높아집니다.</li>\n<li><strong>참여자 명단 확인</strong> — 단톡방 참여자 수·목록을 캡처해 공연성 입증에 활용합니다.</li>\n<li><strong>공증 또는 증거보전</strong> — 중요한 발언은 공증인 사무소에서 공증을 받거나 법원 증거보전 신청을 활용합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대방이 대화를 삭제할 가능성이 있으므로 발견 즉시 모든 자료를 백업하세요.</blockquote>',
      },
      {
        title: '고소·합의·민사 병행',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손 고소는 경찰·검찰에 접수하며, 형사·민사 병행이 일반적인 전략입니다.</strong></p>\n<ul>\n<li><strong>반의사불벌죄</strong> — 형법 제312조: 명예훼손은 피해자의 처벌 불원 의사로 공소 제기가 제한됩니다. 합의가 가능하다는 뜻입니다.</li>\n<li><strong>고소 기한</strong> — 고소는 범죄 행위일부터 6개월(친고·반의사불벌 일부) 또는 소멸시효 내 가능하며, 구체적으로는 변호사 확인이 필요합니다.</li>\n<li><strong>민사 손해배상</strong> — 형사 고소와 별도로 정신적 손해배상(위자료) 청구 가능. 민사 소멸시효 3년.</li>\n<li><strong>사내 징계</strong> — 회사 단톡방이라면 사내 징계·인사위원회 제재도 병행 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 시 합의서에 구체적 내용을 명시하고, 합의 후 재발 방지 조항을 포함하는 것이 실무적입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예훼손 고소장 작성 실무',
        summary:
          '대법원 2022도10369 사건 등에서 법원은 명예훼손의 공연성·특정성·사실 적시 요건에 대한 해석 기준을 제시해왔으며, 사이버 공간·단체 대화방에서도 전파 가능성이 있으면 공연성이 인정된다는 실무 원칙을 확인했습니다.',
        takeaway:
          '단체 대화방도 3인 이상 참여하거나 전파 가능성이 인정되면 공연성이 충족되며, 구체적 발언·대상·참여자를 입증하면 명예훼손이 성립할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '2인 대화방에서의 뒷담화도 명예훼손인가요?',
        answer:
          '<strong>2인만의 대화는 원칙적으로 공연성이 부정됩니다.</strong> 다만 해당 제3자가 불특정 다수에게 전파할 가능성이 명백한 경우엔 예외적으로 공연성이 인정될 수 있습니다.',
      },
      {
        question: '사실을 말한 것도 명예훼손인가요?',
        answer:
          '<strong>사실 적시도 명예훼손이 성립할 수 있습니다.</strong> 다만 공공의 이익을 위한 것이면 위법성이 조각됩니다(형법 제310조).',
      },
      {
        question: '상대방이 메시지를 삭제했으면 고소가 어려운가요?',
        answer:
          '<strong>캡처·녹화·증인 진술로 입증할 수 있습니다.</strong> 원본이 사라져도 2차 증거로 입증이 가능하므로 포기하지 마세요.',
      },
      {
        question: '회사 단톡방에서의 명예훼손은 사내 징계도 가능한가요?',
        answer:
          '<strong>네, 사내 징계와 형사 절차는 별개로 진행됩니다.</strong> 회사 취업규칙상 직장 내 괴롭힘·명예훼손 관련 징계 조항이 있으면 사내 제재도 요구할 수 있습니다.',
      },
      {
        question: '합의하면 고소가 자동 취소되나요?',
        answer:
          '<strong>피해자가 처벌불원 의사를 표시하면 공소 제기가 제한됩니다(반의사불벌죄).</strong> 합의서에 처벌불원 의사를 명시하고 수사기관에 제출하면 불기소 또는 공소 취소로 연결됩니다.',
      },
    ],
    cta: {
      text: '단톡방 명예훼손 AI 점검',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 피해 대응 가이드', href: '/guide/defamation' },
      { label: '명예훼손 고소장 작성법', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '온라인 명예훼손 증거 수집', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '명예훼손 합의 시 고려 사항', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '직장 내 명예훼손 대응', href: '/guide/defamation/defamation-employer-review-response' },
    ],
  },

  // ─── 6. stalking / workplace-supervisor-report ───
  {
    domain: 'stalking',
    slug: 'stalking-workplace-supervisor-report',
    keyword: '직장 내 스토킹 회사 신고 절차',
    questionKeyword: '직장 내 스토킹을 당하고 있는데 회사에 어떻게 신고하나요?',
    ctaKeyword: '직장 스토킹 신고·대응 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 내 스토킹 신고·대응 절차 총정리 | 로앤가이드',
      description:
        '직장 내 스토킹 피해자를 위한 사내 신고·외부 신고·보호 조치 절차를 정리했습니다. 증거 확보와 법적 대응을 지금 확인하세요.',
    },
    intro:
      '<p>같은 회사 동료·상사·거래처로부터 지속적 연락이나 스토킹 행위를 당하는 경우, 단순한 업무 관계로 넘길 수 없는 상황이 됩니다. 스토킹처벌법과 직장 내 괴롭힘 조항이 모두 관련되며, 사내 신고와 외부 신고를 어떻게 병행할지 전략이 필요합니다. 보호 조치·증거 확보·법적 대응까지 정리합니다.</p>',
    sections: [
      {
        title: '스토킹의 법적 정의와 직장 내 적용',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법은 피해자에게 불안감·공포심을 주는 특정 행위를 스토킹으로 규정하며, 직장 내 관계도 적용 대상입니다.</strong></p>\n<ul>\n<li><strong>스토킹처벌법 제2조</strong> — 접근·경로 따라다니기, 의사 반하는 연락, 물건 두기·지켜보기 등이 스토킹행위로 규정됩니다.</li>\n<li><strong>반복성 요건</strong> — "지속적 또는 반복적"이어야 스토킹범죄로 처벌 대상으로 검토될 수 있습니다.</li>\n<li><strong>직장 동료 포함</strong> — 상사·동료·거래처 등 직장 관계자도 스토킹 가해자가 될 수 있으며, 업무 관계를 이유로 예외가 인정되지 않습니다.</li>\n<li><strong>처벌</strong> — 3년 이하 징역 또는 3,000만 원 이하 벌금. 흉기·위험한 물건 사용 시 5년 이하 징역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직장 관계라도 의사에 반하는 반복적 연락·접근은 스토킹범죄로 처벌 대상으로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '사내 신고 절차 — 직장 내 괴롭힘 연계',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제76조의2는 직장 내 괴롭힘을 금지하며, 사내 신고 창구를 통한 보호 조치가 가능합니다.</strong></p>\n<ul>\n<li><strong>사내 신고 창구</strong> — 인사팀·감사팀·산업안전보건위원회 등 공식 창구에 서면 신고합니다.</li>\n<li><strong>사용자 조치 의무</strong> — 근로기준법 제76조의3: 사용자는 지체 없이 조사하고 피해자 보호 조치(근무장소 변경, 유급휴가 등)를 취해야 합니다.</li>\n<li><strong>불이익 금지</strong> — 신고를 이유로 해고·불이익을 가하면 근로기준법 위반으로 형사 처벌 대상입니다.</li>\n<li><strong>회사 미이행 시</strong> — 회사가 조사·보호 조치를 이행하지 않으면 지방노동청에 진정을 제기할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 직장 스토킹 대응 절차를 본인 상황에 맞게 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '외부 신고 — 경찰·여성긴급전화',
        content:
          '<p><strong style="color:#1e3a5f">외부 신고는 경찰·여성긴급전화(1366)·정부 상담 등을 통해 긴급 보호 조치를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰 112 신고</strong> — 즉시 신고 시 긴급응급조치(접근금지 100m·전기통신 금지)가 현장에서 취해질 수 있습니다.</li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담, 긴급 피난처 연계, 법률·의료 지원 안내.</li>\n<li><strong>잠정조치 신청</strong> — 경찰·검찰 수사 단계에서 법원 결정으로 접근금지·유치 잠정조치를 신청할 수 있습니다.</li>\n<li><strong>스토킹 보호시설</strong> — 긴급 피난이 필요하면 지역별 스토킹·가정폭력 피해자 보호시설 이용이 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 긴급응급조치는 112 신고로 즉시 발동되며, 이후 법원 잠정조치로 연장·강화됩니다.</blockquote>',
      },
      {
        title: '증거 확보와 법적 대응 전략',
        content:
          '<p><strong style="color:#1e3a5f">직장 스토킹은 업무 관계 특성상 증거 확보가 까다로우므로 체계적 기록이 중요합니다.</strong></p>\n<ul>\n<li><strong>시간·장소·행위 기록</strong> — 일자·시각·장소·행위 내용을 일지로 남기고, 가능한 범위에서 동료 증언도 확보합니다.</li>\n<li><strong>문자·메신저 보관</strong> — 카톡·문자·회사 메신저의 모든 원문을 보관합니다. 삭제 전에 캡처·백업.</li>\n<li><strong>CCTV 요청</strong> — 회사 내 CCTV가 있는 경우 보존 요청을 서면으로 회사에 제출합니다.</li>\n<li><strong>진단서·상담 기록</strong> — 정신적 피해에 대한 정신건강의학과 진료·상담 기록이 위자료 산정·처벌 양정에서 중요한 증거가 됩니다.</li>\n<li><strong>형사 고소 + 민사 손배</strong> — 형사 고소로 처벌을 추구하고, 민사 손해배상으로 경제적 회복을 병행합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 가해자를 회유하거나 몰래 녹음하는 경우에도 상대방 의사에 반하면 본인이 문제가 될 수 있으므로, 본인이 당사자로 참여한 대화만 녹음하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹행위의 객관적 판단 기준',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹처벌법 제2조 제1호 각 목의 행위가 객관적·일반적으로 불안감·공포심을 일으키기에 충분한 정도라면, 피해자의 현실적 인식 여부와 관계없이 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '직장 내 스토킹도 피해자 인식 여부와 무관하게 성립할 수 있으며, 객관적으로 반복적·지속적이고 불안감을 일으키는 행위라면 처벌 대상입니다.',
      },
    ],
    faq: [
      {
        question: '직장 상사가 개인 SNS로 지속 연락하는 것도 스토킹인가요?',
        answer:
          '<strong>의사에 반하는 반복적 연락이면 스토킹에 해당할 수 있습니다.</strong> 거부 의사를 명확히 밝힌 후에도 계속 연락이 오면 스토킹 증거가 됩니다.',
      },
      {
        question: '회사가 신고를 막으면 어떻게 하나요?',
        answer:
          '<strong>외부 기관 신고를 병행하세요.</strong> 경찰 112, 여성긴급전화 1366, 노동청 진정 등 외부 경로로 동시 대응하면 회사의 무대응에 대응할 수 있습니다.',
      },
      {
        question: '스토킹 가해자가 해고됐는데도 계속 연락하면 어떻게 하나요?',
        answer:
          '<strong>고용관계 종료와 무관하게 스토킹 성립할 수 있습니다.</strong> 퇴사 후에도 접근금지 잠정조치·긴급응급조치를 요청할 수 있으며, 위반 시 별도 처벌 대상으로 검토될 수 있습니다.',
      },
      {
        question: '가해자가 고위 임원이라 회사가 불이익을 줄 것 같은데 어떻게 해야 하나요?',
        answer:
          '<strong>외부 기관을 먼저 활용하세요.</strong> 경찰·노동청에 먼저 신고해 법적 절차를 확보한 후 사내 대응을 병행하면 보호 효과가 큽니다.</p>',
      },
      {
        question: '증거가 주관적 메시지뿐인데 처벌 가능할까요?',
        answer:
          '<strong>메시지 내용·빈도·시간대·거부 의사 표명 기록을 종합하면 처벌이 가능합니다.</strong> 반복성과 거부 의사 명시가 핵심 증거이며, 정신과 진료 기록까지 보완하면 설득력이 커집니다.',
      },
    ],
    cta: {
      text: '직장 스토킹 대응 AI 점검',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹 피해 대응 가이드', href: '/guide/stalking' },
      { label: '스토킹 긴급응급조치 신청', href: '/guide/stalking/stalking-emergency-measure-application' },
      { label: '스토킹 잠정조치 절차', href: '/guide/stalking/stalking-penalty-restraining-order' },
      { label: '스토킹 증거 수집', href: '/guide/stalking/stalking-evidence-collection-faq' },
      { label: '스토킹 고소 취하 영향', href: '/guide/stalking/stalking-complaint-withdrawal-effect' },
    ],
  },
];
