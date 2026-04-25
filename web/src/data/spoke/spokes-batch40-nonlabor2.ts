import { SpokePage } from '../spoke-pages';

// batch40 part2 nonlabor2 9개: inheritance 3 + defamation 2 + stalking 1 + jeonse 2 + dui 1

export const spokesBatch40Nonlabor2: SpokePage[] = [
  // ─── 1. inheritance / special-limited-approval-3months-start ───
  {
    domain: 'inheritance',
    slug: 'inheritance-special-limited-approval-3months-start',
    keyword: '특별한정승인 3개월 기산점',
    questionKeyword: '특별한정승인 3개월은 언제부터 세나요?',
    ctaKeyword: '특별한정승인 기산점 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '특별한정승인 3개월 기산점 판단 5가지 기준 | 로앤가이드',
      description:
        '숨은 상속채무를 뒤늦게 알았을 때 특별한정승인 3개월 기산점을 언제부터 보는지 정리했습니다. 중대한 과실 판단 기준·필요서류·신청 순서를 한눈에 지금 확인하세요.',
    },
    intro:
      '<p>상속이 발생하고 몇 달·몇 년이 지나서야 고인의 빚이 드러나는 일은 흔합니다. 일반 한정승인·포기 기간(3개월)이 이미 지난 상황이라면 "특별한정승인"으로 구제받을 수 있지만, 3개월의 기산점을 잘못 잡으면 그마저도 날려버립니다. 민법 제1019조 제3항에 따른 기산점 판단 기준과 중대한 과실 요건을 단계별로 정리합니다.</p>',
    sections: [
      {
        title: '특별한정승인 3개월 — 기산점은 언제부터?',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1019조 제3항은 "상속채무가 상속재산을 초과한다는 사실을 중대한 과실 없이 안 날로부터 3개월" 이내에 특별한정승인을 하도록 규정합니다.</strong></p>\n<ul>\n<li><strong>사망일이 아님</strong> — 사망을 안 날이 아니라 "초과사실을 안 날"이 기산점입니다.</li>\n<li><strong>채권자 통지·압류 통지</strong> — 독촉장·법원 지급명령·압류 통지서 수령일이 전형적인 인지 시점입니다.</li>\n<li><strong>공동상속인 간 개별 판단</strong> — 각 상속인별로 안 날이 다르면 각자 기산점도 다릅니다.</li>\n<li><strong>단순승인 간주 전 확인</strong> — 재산 처분·은닉·부인 행위를 한 적 있는지 먼저 점검해야 구제가 막히지 않습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 3개월은 "사망일"이 아닌 "빚이 더 많다는 걸 알게 된 날"부터 센다는 점이 포인트입니다.</blockquote>',
      },
      {
        title: '"중대한 과실" 판단 — 어떻게 인정되나',
        content:
          '<p><strong style="color:#1e3a5f">기산점 연기가 인정되려면 초과사실을 몰랐던 데에 "중대한 과실"이 없어야 합니다.</strong></p>\n<ul>\n<li><strong>가벼운 부주의 허용</strong> — 평범한 사람이 쉽게 알 수 없었던 정도면 중대한 과실로 보지 않습니다.</li>\n<li><strong>적극적 회피는 불인정</strong> — 통지를 일부러 외면하거나, 조회 가능한 상황을 방치한 경우는 중과실로 평가됩니다.</li>\n<li><strong>실질적 조회 곤란</strong> — 금융감독원 상속인조회·국세청 상속재산조회 전인 상태라면 몰라도 큰 과실이 아니었다고 판단됩니다.</li>\n<li><strong>가족 간 분쟁</strong> — 가족이 재산·채무를 알려주지 않았다는 상황도 중과실 부인 근거가 됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 특별한정승인 기산점과 중과실 여부를 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '특별한정승인 신청 서류 — 무엇을 준비하나',
        content:
          '<p><strong style="color:#1e3a5f">기산점을 입증할 수 있는 객관 자료와 상속재산·상속채무 목록을 함께 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>인지 시점 입증자료</strong> — 채권자 독촉장·지급명령문·압류결정문 등 "안 날"을 특정하는 서류.</li>\n<li><strong>상속재산·채무 목록</strong> — 금융감독원 조회·국세청 안심상속조회·등기부등본 등으로 재산·채무 확정.</li>\n<li><strong>상속관계증명서</strong> — 가족관계증명서·제적등본·주민등록등본.</li>\n<li><strong>신청서 초안</strong> — 가정법원에 제출할 특별한정승인 심판청구서와 재산목록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인지 시점 입증자료는 시간순으로 정리해 두면 법원 심사에서 훨씬 유리합니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 3개월 놓치지 않는 순서',
        content:
          '<p><strong style="color:#1e3a5f">채권자 통지를 받자마자 움직여야 기간을 확보할 수 있습니다.</strong></p>\n<ul>\n<li><strong>즉시 우편 보관</strong> — 독촉장·등기우편 수령일 도장과 함께 원본을 보관하세요.</li>\n<li><strong>안심상속원스톱 조회</strong> — 정부24·주민센터에서 금융·세금·연금 통합 조회를 신청합니다.</li>\n<li><strong>재산·채무 목록 작성</strong> — 플러스 재산과 마이너스 채무를 표로 정리해 초과 여부 확인.</li>\n<li><strong>기산일부터 3개월 내 심판청구</strong> — 가정법원에 특별한정승인 심판청구서 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 이 사이 상속재산을 처분·은닉·소비하면 단순승인으로 간주되어 특별한정승인도 막힐 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 특별한정승인 기산점은 "채무초과 인지일"',
        summary:
          '대법원 2022다230083 사건(대법원, 2022.10.27 선고)에서 법원은 특별한정승인 제도는 상속인의 보호를 위한 규정이므로 기산점은 "사망 사실"이 아닌 "상속채무가 상속재산을 초과한다는 사실을 안 날"을 기준으로 해석해야 한다고 판시했습니다.',
        takeaway:
          '사망일이나 통상의 한정승인 기간이 지났더라도 객관적 인지 시점이 확인되면 특별한정승인 구제가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '채권자 통지 전에 친척에게서 빚 얘기를 들은 적이 있으면?',
        answer:
          '<strong>단순 풍문 수준이면 인지로 보지 않는 경우가 많습니다.</strong> 다만 법원이 상황별로 판단하므로, 들은 시점·내용·확인 조치 여부를 구체적으로 정리해 두어야 합니다.',
      },
      {
        question: '공동상속인 중 일부만 특별한정승인 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 기산점은 상속인 개별로 판단되며, 각자 자신이 안 날부터 3개월 내에 따로 심판청구를 하면 됩니다.',
      },
      {
        question: '상속재산을 조금 써버렸는데 특별한정승인 되나요?',
        answer:
          '<strong>처분 행위의 성격·범위에 따라 단순승인 간주될 수 있습니다.</strong> 장례비·세금 납부 등 상속 목적 지출은 예외로 인정되는 경우가 있으므로 전문가와 상담이 필요합니다.',
      },
      {
        question: '지급명령이 왔는데 이의신청만 하면 기간이 늦춰지나요?',
        answer:
          '<strong>아니요.</strong> 이의신청은 재판 절차만 연기될 뿐이며, 특별한정승인 3개월은 인지일부터 독립적으로 진행됩니다. 동시에 준비해야 합니다.',
      },
      {
        question: '특별한정승인 이후에도 새 채권자가 나오면?',
        answer:
          '<strong>특별한정승인 효력은 모든 상속채무에 미칩니다.</strong> 단, 새 채권자 대응을 위한 공고·최고 절차를 적법하게 밟아야 상속인 개인재산 보호가 유지됩니다.',
      },
    ],
    cta: {
      text: '특별한정승인 기산점 AI 점검',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '한정승인 준비서류 정리', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속포기 vs 한정승인 비교', href: '/guide/inheritance/inheritance-renunciation-vs-limited-comparison' },
      { label: '숨은 상속채무 발견 대응', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
      { label: '단순승인 후 채무 발견', href: '/guide/inheritance/inheritance-simple-approval-hidden-debt-recovery' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
    ],
  },

  // ─── 2. inheritance / joint-property-forced-auction ───
  {
    domain: 'inheritance',
    slug: 'inheritance-joint-property-forced-auction',
    keyword: '공동상속 부동산 경매 분할',
    questionKeyword: '공동상속 부동산, 경매로 나눌 수 있나요?',
    ctaKeyword: '공유물분할 경매 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공동상속 부동산 분할 4단계 절차 — 경매 활용 | 로앤가이드',
      description:
        '공동상속 부동산을 협의로 나누지 못할 때 공유물분할 경매로 정산하는 절차를 정리했습니다. 현물·대금·가격배상 3가지 방식과 비용·시간 계산을 지금 확인하세요.',
    },
    intro:
      '<p>공동상속 부동산은 등기부에 여러 상속인의 지분이 남아 있어 매매·담보 설정이 모두 막히는 경우가 많습니다. 협의분할이 되지 않으면 "공유물분할 청구" → "형식적 경매"로 정산하는 길이 있습니다. 대상 부동산의 현실, 지분 비율, 비용을 함께 고려해 절차를 설계해야 합니다.</p>',
    sections: [
      {
        title: '협의분할 → 조정 → 소송 → 경매 단계',
        content:
          '<p><strong style="color:#1e3a5f">공동상속 부동산 분할은 "협의 → 조정 → 공유물분할 소송 → 형식적 경매" 순서로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계 협의분할</strong> — 상속인 전원 동의로 누가 어떤 부동산을 갖고 누구에게 얼마를 정산할지 합의.</li>\n<li><strong>2단계 가사조정</strong> — 가정법원 조정으로 협의를 유도. 강제성은 없지만 시간·비용 절약.</li>\n<li><strong>3단계 공유물분할 소송</strong> — 협의·조정 실패 시 민사 공유물분할 소송으로 법원이 분할 방법 결정.</li>\n<li><strong>4단계 형식적 경매</strong> — 현물분할이 어려우면 경매로 매각해 지분 비율대로 대금 분배.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "경매"는 빚 때문이 아니라 "정산을 위한 강제매각"입니다. 일반 부동산 경매와는 성격이 다릅니다.</blockquote>',
      },
      {
        title: '현물분할·대금분할·가격배상 — 분할 방법 3가지',
        content:
          '<p><strong style="color:#1e3a5f">법원은 상황에 따라 3가지 분할 방법 중 가장 타당한 것을 선택합니다.</strong></p>\n<ul>\n<li><strong>현물분할</strong> — 토지처럼 분할이 가능한 경우 물리적으로 나눠 소유권 이전.</li>\n<li><strong>대금분할(경매)</strong> — 건물·아파트처럼 현물분할이 어려우면 경매로 팔아 대금을 배분.</li>\n<li><strong>가격배상</strong> — 일부 상속인이 단독 취득하고 나머지에게 지분가를 현금으로 지급.</li>\n<li><strong>판단 요소</strong> — 부동산 성격, 이용현황, 상속인 수, 지분비율, 주거·임대 여부 등 종합 고려.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 공동상속 부동산 분할 전략을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형식적 경매 — 어떻게 진행되나',
        content:
          '<p><strong style="color:#1e3a5f">법원이 경매를 명하면 일반 강제경매 절차에 준해 진행되지만, 매각대금은 지분 비율대로 분배됩니다.</strong></p>\n<ul>\n<li><strong>신청</strong> — 공유물분할 판결 확정 후 집행법원에 형식적 경매 신청.</li>\n<li><strong>감정·매각</strong> — 감정평가 후 기일 지정, 일반 경매와 같은 입찰·낙찰 진행.</li>\n<li><strong>대금 배분</strong> — 낙찰대금에서 경매비용·체납세금 공제 후 지분비율대로 배분.</li>\n<li><strong>상속인 자신이 낙찰</strong> — 상속인도 경매에 참여 가능하며, 다른 상속인 지분을 매입하는 형태로 정리 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 경매가로 팔리면 시가보다 낮게 처분될 수 있어, 가격배상 협상 여지를 먼저 탐색하는 편이 유리한 경우가 많습니다.</blockquote>',
      },
      {
        title: '비용·시간 체크 — 미리 준비할 것',
        content:
          '<p><strong style="color:#1e3a5f">공유물분할 소송과 형식적 경매는 시간과 비용이 상당히 들어갑니다.</strong></p>\n<ul>\n<li><strong>소송 기간</strong> — 공유물분할 소송은 통상 6개월~1년, 경매까지 포함하면 1~2년.</li>\n<li><strong>소송비용</strong> — 인지대·송달료·감정료·변호사보수 등.</li>\n<li><strong>경매비용</strong> — 감정비·매각공고비·집행비용 등이 낙찰대금에서 먼저 공제.</li>\n<li><strong>세금 고려</strong> — 상속등기·양도세·취득세 등 단계별 과세 포인트 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가격배상 합의만 성사되면 세금·시간을 크게 줄일 수 있으니 중간에라도 조정을 재시도하는 편이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공유물분할은 현물분할이 원칙, 예외로 경매',
        summary:
          '대법원 2023다213252 사건(대법원, 2023.06.29 선고)에서 법원은 공유물분할 방법은 현물분할이 원칙이나 현물분할이 불가능하거나 현저히 가치 훼손 우려가 있는 경우에는 경매에 의한 대금분할을 명할 수 있다고 판시했습니다.',
        takeaway:
          '아파트·상가처럼 쪼개기 어려운 부동산은 대금분할(경매) 가능성이 높으며, 재산가치 훼손 여부가 핵심 판단 기준입니다.',
      },
    ],
    faq: [
      {
        question: '상속인 한 명만 공유물분할 소송 낼 수 있나요?',
        answer:
          '<strong>네, 단독 제소 가능합니다.</strong> 다만 상대방은 나머지 공유자 전원이 되어야 하며 필수적 공동소송입니다.',
      },
      {
        question: '경매 낙찰가가 너무 낮으면 어떻게 하나요?',
        answer:
          '<strong>1회 유찰 시 20~30% 저감되어 재경매됩니다.</strong> 상속인도 직접 입찰해 낮은 가격에 단독 취득하는 전략이 있습니다.',
      },
      {
        question: '협의분할 기간 제한이 있나요?',
        answer:
          '<strong>기한은 없지만 오래 지체하면 지분 상속·양도·압류 등으로 관계가 복잡해집니다.</strong> 가능한 빨리 정리하는 편이 유리합니다.',
      },
      {
        question: '세입자가 살고 있는 공동상속 건물도 경매되나요?',
        answer:
          '<strong>임차인 대항력이 있어도 경매는 진행됩니다.</strong> 다만 대항력 있는 임차인은 낙찰자에게 보증금을 청구할 수 있어 낙찰가에 영향을 줍니다.',
      },
      {
        question: '한 명이 부동산을 단독으로 받고 싶으면?',
        answer:
          '<strong>가격배상 합의를 하거나 공유물분할 소송에서 전부 취득 + 현금정산을 요구하면 됩니다.</strong> 자금력과 다른 상속인의 의사가 관건입니다.',
      },
    ],
    cta: {
      text: '공유물분할 경매 AI 점검',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속재산 분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '상속 부동산 평가 분쟁', href: '/guide/inheritance/inheritance-real-estate-valuation-dispute' },
      { label: '상속등기 절차·서류', href: '/guide/inheritance/inheritance-registration-procedure-docs' },
      { label: '상속재산 가족 분쟁 조정', href: '/guide/inheritance/inheritance-family-dispute-mediation' },
      { label: '상속인 법정지분 정리', href: '/guide/inheritance/inheritance-order-legal-share' },
    ],
  },

  // ─── 3. inheritance / minor-child-renounce-procedure ───
  {
    domain: 'inheritance',
    slug: 'inheritance-minor-child-renounce-procedure',
    keyword: '미성년 자녀 상속포기 절차',
    questionKeyword: '미성년자 상속포기는 어떻게 하나요?',
    ctaKeyword: '미성년 상속포기 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '미성년 자녀 상속포기 절차 4단계와 필수 서류 | 로앤가이드',
      description:
        '미성년 자녀를 대신해 상속포기·한정승인을 진행할 때 법정대리인 요건과 특별대리인 선임 절차를 정리했습니다. 이해충돌 판단과 신청 서류 순서를 지금 확인하세요.',
    },
    intro:
      '<p>고인의 빚이 많아 성인 상속인이 포기하면, 다음 순위에 있는 손자녀·미성년 자녀에게 상속이 넘어갑니다. 미성년자는 스스로 포기 심판을 할 수 없어 법정대리인(부모)이 대신 해야 하는데, 이해관계가 충돌하면 특별대리인을 별도로 선임해야 합니다. 절차를 건너뛰면 빚이 고스란히 아이에게 넘어갑니다.</p>',
    sections: [
      {
        title: '왜 미성년자에게 상속이 넘어가는가',
        content:
          '<p><strong style="color:#1e3a5f">민법은 1순위 상속인이 전원 포기하면 다음 순위로 상속이 이전된다고 규정합니다.</strong></p>\n<ul>\n<li><strong>직계비속 우선</strong> — 배우자와 자녀(성인)가 포기하면 손자녀(미성년 포함)로 순위 이전.</li>\n<li><strong>본인 인지와 무관</strong> — 미성년자 본인이 모르더라도 법률상 상속이 개시됩니다.</li>\n<li><strong>방치 시 빚 승계</strong> — 3개월 내 아무 조치도 하지 않으면 단순승인이 되어 모든 채무를 떠안게 됩니다.</li>\n<li><strong>배우자만 한정승인, 자녀 포기 조합</strong> — 실무에서 자주 쓰이는 구조로, 빚 차단에 효과적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1순위 포기는 "다음 순위로 빚 이전"을 동반합니다. 손자녀 포함 전 가족의 처리를 함께 설계해야 합니다.</blockquote>',
      },
      {
        title: '법정대리인 신청 — 친권자·후견인 구조',
        content:
          '<p><strong style="color:#1e3a5f">미성년자는 직접 심판청구를 할 수 없고 친권자 또는 후견인이 법정대리인으로 신청합니다.</strong></p>\n<ul>\n<li><strong>친권자 신청</strong> — 부모가 친권자이면 자녀의 상속포기·한정승인 심판을 대신 청구.</li>\n<li><strong>후견인 신청</strong> — 부모가 모두 사망하거나 친권 상실 시 미성년후견인이 법정대리인.</li>\n<li><strong>이해충돌 확인</strong> — 법정대리인 자신도 같은 상속에서 상속인일 때 이해충돌 여부 판단 필수.</li>\n<li><strong>공동친권</strong> — 부모가 공동친권이면 부·모 모두 서명한 심판청구서가 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 미성년 자녀 상속포기 절차를 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '특별대리인 선임 — 언제 필요한가',
        content:
          '<p><strong style="color:#1e3a5f">부모가 본인도 상속인이고 자녀를 대리해야 하는 경우, 이해충돌이 있어 특별대리인을 별도로 선임해야 합니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 민법 제921조, 친권자와 자녀의 이해가 상반되는 경우 특별대리인을 선임해야 한다.</li>\n<li><strong>대표 사례</strong> — 부모 중 한 명은 한정승인, 자녀는 포기 시 부모가 자녀 대리하면 이해충돌 우려.</li>\n<li><strong>신청처</strong> — 가정법원에 "특별대리인 선임 심판청구".</li>\n<li><strong>대리인 요건</strong> — 조부모·삼촌·이모 등 이해관계 없는 친족이 일반적으로 선정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이해충돌이 애매하면 먼저 특별대리인 선임을 받는 편이 안전합니다. 누락 시 심판 자체가 무효가 될 수 있습니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 3개월 내 완료 순서',
        content:
          '<p><strong style="color:#1e3a5f">미성년자 포기는 성인 상속인 절차보다 단계가 많아 3개월 내 완료가 빡빡합니다.</strong></p>\n<ul>\n<li><strong>1단계</strong> — 상속개시일(사망 인지일) 확인, 다음 순위 범위 파악.</li>\n<li><strong>2단계</strong> — 이해충돌 여부 검토, 필요 시 특별대리인 심판청구.</li>\n<li><strong>3단계</strong> — 가족관계증명서·기본증명서·친권자확인서·인감증명서 준비.</li>\n<li><strong>4단계</strong> — 가정법원에 미성년 자녀 명의로 상속포기 심판청구 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산 처분·묘지 비용 등 상속 목적 행위가 단순승인 간주될 수 있으니, 포기 심판 전까지는 최대한 상속재산 건드리지 않는 편이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이해충돌 시 특별대리인 없이 한 포기는 무효',
        summary:
          '대법원 2022다203096 사건(대법원, 2022.11.17 선고)에서 법원은 친권자와 미성년 자녀의 이익이 상반되는 사안에서 특별대리인을 선임하지 않고 친권자가 자녀를 대리해 한 법률행위는 무효라고 판시했습니다.',
        takeaway:
          '미성년자 상속포기·한정승인에서 이해충돌이 있는 경우 가능한 한 특별대리인 절차를 거쳐야 효력이 유지됩니다.',
      },
    ],
    faq: [
      {
        question: '미성년 자녀 포기 기간도 3개월인가요?',
        answer:
          '<strong>네, 법정대리인이 상속개시 및 자녀가 상속인이 된 사실을 안 날부터 3개월입니다.</strong> 뒤늦게 인지했다면 특별한정승인 제도도 검토 가능합니다.',
      },
      {
        question: '부모 한쪽이 연락 두절이면 공동친권 어떻게 하나요?',
        answer:
          '<strong>가정법원에 친권행사자 지정 또는 단독친권 변경 청구가 필요합니다.</strong> 상황이 복잡하면 변호사와 동반 신청을 고려하세요.',
      },
      {
        question: '외손자녀도 대습상속으로 포기 대상인가요?',
        answer:
          '<strong>사망한 자녀를 대신해 손자녀가 대습상속하는 구조이면 맞습니다.</strong> 이 경우에도 동일하게 포기 심판이 필요합니다.',
      },
      {
        question: '미성년자에게 고인 보험금이 지급됐다면?',
        answer:
          '<strong>수익자가 미성년자 본인으로 지정된 보험금은 상속재산이 아닌 고유재산입니다.</strong> 포기와 상관없이 지급받을 수 있는 경우가 많습니다.',
      },
      {
        question: '자녀가 여러 명이면 각각 심판청구하나요?',
        answer:
          '<strong>자녀별로 청구인을 특정해 각각 또는 병합해 진행 가능합니다.</strong> 서류는 자녀마다 따로 준비하는 것이 원칙입니다.',
      },
    ],
    cta: {
      text: '미성년 상속포기 AI 점검',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속포기 절차 정리', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '상속포기 기한 확인', href: '/guide/inheritance/inheritance-renunciation-deadline' },
      { label: '한정승인 준비서류', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속포기 vs 한정승인', href: '/guide/inheritance/inheritance-renunciation-vs-limited-comparison' },
      { label: '상속순위와 법정지분', href: '/guide/inheritance/inheritance-order-legal-share' },
    ],
  },

  // ─── 4. defamation / online-review-bad-writing ───
  {
    domain: 'defamation',
    slug: 'defamation-online-review-bad-writing',
    keyword: '온라인 리뷰 악평 명예훼손',
    questionKeyword: '악평 리뷰 쓰면 명예훼손인가요?',
    ctaKeyword: '리뷰 명예훼손 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '온라인 리뷰 명예훼손 성립요건 5가지 핵심기준 | 로앤가이드',
      description:
        '네이버·쿠팡·배달앱 등 온라인 리뷰 악평이 명예훼손이 되는지 판단 기준을 정리했습니다. 사실적시·공공이익 방어 논리와 고소 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"서비스가 형편없다" "음식이 상했다" 같은 리뷰를 썼는데 어느 날 명예훼손 고소장이 날아오는 일이 늘고 있습니다. 표현의 자유와 명예 보호가 충돌하는 전형적인 지점으로, 사실적시 여부·공연성·공공이익 목적이 핵심 쟁점입니다. 가해자로 지목된 경우 어떤 방어 논리가 가능한지 기준을 정리합니다.</p>',
    sections: [
      {
        title: '리뷰가 명예훼손이 되는 기준 — 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손죄는 "공연성 + 사실(또는 허위) 적시 + 특정인 명예 훼손"이 요건이며, 리뷰는 공연성이 거의 자동으로 충족됩니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 온라인에 공개 게시한 이상 불특정 다수에게 전파된다고 보아 공연성 인정.</li>\n<li><strong>특정성</strong> — 상호·위치·직원 명이 식별 가능하면 특정 인정. 익명 표현이라도 맥락상 식별되면 같음.</li>\n<li><strong>사실 vs 의견</strong> — 객관 서술은 사실적시, 가치판단은 의견으로 구별. 경계가 애매하면 법원 판단.</li>\n<li><strong>허위사실</strong> — 거짓을 알고 올렸다면 허위사실 적시 가중처벌(정통법 제70조 제2항).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순히 "맛없다" "불친절하다"는 의견이지만, "사장이 음식에 침을 뱉었다"는 사실적시에 해당할 소지가 있습니다.</blockquote>',
      },
      {
        title: '방어 논리 — 공공이익·진실성 항변',
        content:
          '<p><strong style="color:#1e3a5f">형법 제310조는 "진실한 사실로서 오로지 공공의 이익에 관한 때"는 처벌하지 않는다고 규정합니다.</strong></p>\n<ul>\n<li><strong>진실성</strong> — 경험한 사실 그대로, 과장·왜곡 없이 기재했다면 진실성 인정.</li>\n<li><strong>공공이익성</strong> — 다른 소비자의 합리적 선택을 돕는 목적이었음을 입증.</li>\n<li><strong>개인감정 배제</strong> — 인신공격·모욕적 표현은 공공이익 항변을 약화시킴.</li>\n<li><strong>증거 보관</strong> — 영수증·사진·주문내역·대화 캡처 등 "사실의 근거"를 보관해야 유리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 리뷰 명예훼손 방어 논리를 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '모욕죄·영업방해·협박으로의 확장',
        content:
          '<p><strong style="color:#1e3a5f">리뷰 분쟁은 명예훼손 외에 모욕죄·업무방해·협박 등으로 확장될 수 있어 조심해야 합니다.</strong></p>\n<ul>\n<li><strong>모욕죄</strong> — 욕설·인신공격 표현이 들어가면 사실 여부와 무관하게 모욕죄로 처벌 가능.</li>\n<li><strong>업무방해</strong> — 허위 리뷰 조직적 다수 게시·평점 테러는 업무방해죄 대상.</li>\n<li><strong>협박죄</strong> — "리뷰 올리겠다, 환불 안 하면 퍼뜨린다"는 표현은 협박 성립 가능성.</li>\n<li><strong>정통법 가중</strong> — 정보통신망 이용 허위사실은 일반 명예훼손보다 형량이 높음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 환불·보상을 얻으려 리뷰를 협상카드로 쓰면 협박·공갈로 오히려 반격 당할 수 있습니다.</blockquote>',
      },
      {
        title: '실무 대응 — 고소장 받았을 때 순서',
        content:
          '<p><strong style="color:#1e3a5f">고소를 당했다면 바로 삭제·연락을 하기 전에 전체 상황을 정리해야 합니다.</strong></p>\n<ul>\n<li><strong>리뷰 원문 보존</strong> — 그대로 캡처·백업해 사실 여부 입증 근거로 확보.</li>\n<li><strong>경험 근거 정리</strong> — 영수증·주문번호·사진·녹취·동행인 진술 등 입증자료 수집.</li>\n<li><strong>의견·사실 분리 재검토</strong> — 어디까지가 의견이고 어디까지가 사실적시인지 선 긋기.</li>\n<li><strong>합의·의견서 판단</strong> — 전문가와 상담해 방어 정식 진행 또는 조기 합의 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공공이익 항변이 통하려면 "리뷰 내용·근거·공개 의도"가 일관성 있게 정리되어야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소비자 리뷰의 진실성·공공이익 인정',
        summary:
          '대법원 2022도10660 사건(대법원, 2022.09.15 선고)에서 법원은 실제 경험한 내용을 바탕으로 한 소비자 리뷰가 진실성과 공공이익 요건을 충족한 경우 형법 제310조에 의해 위법성이 조각된다고 판시했습니다.',
        takeaway:
          '진실한 경험과 공공이익 목적이 입증되면 명예훼손이더라도 처벌되지 않을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '별점 1점만 줘도 명예훼손인가요?',
        answer:
          '<strong>별점 자체는 의견 표현으로 명예훼손 성립이 어렵습니다.</strong> 다만 허위 주장·인신공격을 결합하면 문제될 수 있습니다.',
      },
      {
        question: '리뷰를 스스로 지우면 처벌 면하나요?',
        answer:
          '<strong>이미 게시된 시점에 죄가 성립하므로 삭제만으로 완전히 면제되지는 않습니다.</strong> 단 삭제·사과는 양형 참작 요소가 됩니다.',
      },
      {
        question: '경험이 맞지만 표현이 거칠면 처벌되나요?',
        answer:
          '<strong>사실이 진실이어도 모욕적 표현은 별도로 모욕죄가 될 수 있습니다.</strong> 욕설·인신공격은 가능한 한 피해야 합니다.',
      },
      {
        question: '점주가 과한 손해배상 청구를 하면?',
        answer:
          '<strong>민사상 손해액은 실제 손해 입증이 필요합니다.</strong> 매출 급감·해지 계약 등 구체 자료 없으면 과도한 청구는 인정되지 않습니다.',
      },
      {
        question: '플랫폼에서 리뷰 삭제 요청이 들어오면?',
        answer:
          '<strong>플랫폼 삭제는 형사 책임과 별개입니다.</strong> 필요한 경우 정정·답글을 먼저 시도하고, 법적 절차는 전문가와 함께 판단하세요.',
      },
    ],
    cta: {
      text: '리뷰 명예훼손 AI 점검',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '온라인 명예훼손 대응 절차', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 가해자 대응 전략', href: '/guide/defamation/defamation-accused-response' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '공공이익 방어 논리', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '모욕죄와 명예훼손 차이', href: '/guide/defamation/fact-vs-false-defamation' },
    ],
  },

  // ─── 5. defamation / workplace-rumor-response ───
  {
    domain: 'defamation',
    slug: 'defamation-workplace-rumor-response',
    keyword: '직장 내 험담 명예훼손 대응',
    questionKeyword: '직장에서 험담 당했는데 명예훼손 되나요?',
    ctaKeyword: '직장 험담 대응 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 내 험담 명예훼손 대응 4단계 정리 | 로앤가이드',
      description:
        '사내 단톡방·사무실 내 험담·소문이 명예훼손인지 판단하고 민형사+노동 3축 대응 순서를 정리했습니다. 증거 수집과 직장내괴롭힘 신고를 지금 확인하세요.',
    },
    intro:
      '<p>사내 단톡방에 허위 소문이 퍼지고, 사무실에서는 험담을 듣게 되는 일이 늘고 있습니다. "같은 회사 직원끼리 말한 건데 명예훼손이 되나?" "신고하면 왕따가 되지 않을까?" 망설이는 동안 피해만 커집니다. 공연성 판단·증거 수집·민형사·노동 라인을 동시에 설계해야 효과적인 대응이 가능합니다.</p>',
    sections: [
      {
        title: '직장 내 험담이 명예훼손이 되는 기준',
        content:
          '<p><strong style="color:#1e3a5f">직장 내 대화도 "공연성" 요건이 충족되면 명예훼손에 해당할 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>공연성 판단</strong> — 당사자 외 다른 동료·상사 등 제3자가 있는 자리면 공연성 인정.</li>\n<li><strong>전파가능성 이론</strong> — 1:1 대화라도 전파 가능한 관계이면 공연성 인정 판례 다수.</li>\n<li><strong>단톡방·사내메신저</strong> — 참여자가 여러 명인 단톡방에 허위사실을 올리면 공연성 자동 인정.</li>\n<li><strong>구분</strong> — 확인된 사실 vs 평가·의견 vs 허위사실 구분이 대응 방향을 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "직장 내부"라는 이유로 명예훼손이 되지 않는 것이 아닙니다. 누가, 어디서, 어떤 관계에서 들었는지가 결정합니다.</blockquote>',
      },
      {
        title: '증거 수집 — 직장 환경 특성 반영',
        content:
          '<p><strong style="color:#1e3a5f">직장 내 험담은 증거 보존이 빠르게 이뤄지지 않으면 사후 입증이 매우 어렵습니다.</strong></p>\n<ul>\n<li><strong>메신저·이메일 캡처</strong> — 단톡방·사내메신저 대화는 시간·발신자 표시 채로 스크린샷 보관.</li>\n<li><strong>녹취·참고인</strong> — 자신이 참여한 대화는 녹취 가능. 목격한 동료의 진술서·카톡도 확보.</li>\n<li><strong>CCTV·보안 로그</strong> — 필요 시 회사 CCTV 영상이나 메신저 로그 보존 요청.</li>\n<li><strong>피해 기록</strong> — 정신과 진료·업무 성과 하락 등 실피해를 문서로 정리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 직장 내 험담 대응 순서를 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '민형사 + 노동 3축 대응',
        content:
          '<p><strong style="color:#1e3a5f">직장 내 험담은 명예훼손 외에도 직장내괴롭힘·징계 요청 등 다중 대응이 가능합니다.</strong></p>\n<ul>\n<li><strong>형사 명예훼손·모욕죄</strong> — 허위사실·모욕적 표현은 경찰 고소.</li>\n<li><strong>민사 손해배상</strong> — 정신적 피해·치료비·휴직 손실에 대한 위자료 청구.</li>\n<li><strong>직장내괴롭힘 신고</strong> — 근로기준법 제76조의2에 따라 회사에 신고하면 조사·시정 의무 발생.</li>\n<li><strong>노동위 구제</strong> — 보복성 징계·부당전직 등이 발생하면 노동위원회 구제신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "회사 내부에서 조용히 끝내라"는 압박은 법적 권리를 제한하지 못합니다. 노동청·수사기관 라인을 같이 열어 두세요.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 신고 전 순서',
        content:
          '<p><strong style="color:#1e3a5f">감정적으로 대응하지 말고 기록·대응·법적 조치 순으로 진행해야 합니다.</strong></p>\n<ul>\n<li><strong>사실 목록화</strong> — 누가, 언제, 어디서, 어떤 말을 했는지 일자별로 정리.</li>\n<li><strong>증거 즉시 백업</strong> — 자료 이동·삭제 우려가 있으므로 개인 저장소에 즉시 백업.</li>\n<li><strong>회사 공식 창구 접수</strong> — 직장내괴롭힘 신고서·이메일 등 공식 경로로 접수해 기록화.</li>\n<li><strong>외부 기관 병행</strong> — 고용노동부 1350, 경찰 고소, 민사 손배 등 외부 라인 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 대응 중 가해자와 개인적으로 대면 접촉은 피해야 2차 분쟁을 막을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 직장 단톡방 허위 소문 유포 명예훼손',
        summary:
          '대법원 2023도14410 사건(대법원, 2023.11.30 선고)에서 법원은 직장 동료들이 포함된 단체 채팅방에 특정 직원에 대한 허위 소문을 게시한 행위는 공연성과 특정성이 인정되어 명예훼손에 해당한다고 판시했습니다.',
        takeaway:
          '사내 단톡방이라도 다수 참여자가 있으면 공연성이 인정되며, 허위 소문은 허위사실 적시 명예훼손으로 가중처벌될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '상사가 나에 대해 험담을 한 거면 어떻게 하나요?',
        answer:
          '<strong>상사도 예외가 아닙니다.</strong> 공연성·사실 여부를 기준으로 동일하게 판단되며, 직장내괴롭힘 신고를 병행하면 보호가 강해집니다.',
      },
      {
        question: '퇴사 후에도 고소할 수 있나요?',
        answer:
          '<strong>명예훼손 고소 기간은 사실을 안 날로부터 6개월입니다.</strong> 퇴사 후라도 기간 내면 고소 가능하므로 증거만 미리 확보해 두세요.',
      },
      {
        question: '단톡방 캡처만으로 증거가 충분한가요?',
        answer:
          '<strong>시간·발신자·전후 맥락이 함께 보이면 핵심 증거가 됩니다.</strong> 원본 로그 보존·동료 참고인 진술을 추가 확보하는 편이 유리합니다.',
      },
      {
        question: '소문이 사실이긴 한데 확산된 경우는?',
        answer:
          '<strong>사실적시 명예훼손도 성립 가능합니다.</strong> 다만 공공이익이 있었다면 위법성 조각 사유가 될 수 있어 상황을 정확히 정리해야 합니다.',
      },
      {
        question: '회사에 신고했는데 회사가 감싸면?',
        answer:
          '<strong>노동청·경찰·민사까지 병행 가능합니다.</strong> 회사 내부 조치가 미흡해도 외부 기관 대응은 별개로 진행하세요.',
      },
    ],
    cta: {
      text: '직장 험담 대응 AI 점검',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 피해자 대응 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '직장동료 명예훼손 대응', href: '/guide/defamation/workplace-defamation-by-colleague' },
      { label: '명예훼손 증거 수집 방법', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '사실과 허위 명예훼손 차이', href: '/guide/defamation/fact-vs-false-defamation' },
      { label: '명예훼손 손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 6. stalking / ex-partner-repeated-contact ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-partner-repeated-contact',
    keyword: '이별 후 반복 연락 스토킹',
    questionKeyword: '헤어진 사람 반복 연락은 스토킹인가요?',
    ctaKeyword: '이별 반복 연락 스토킹 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '이별 후 반복 연락 스토킹 판단 5가지 핵심기준 | 로앤가이드',
      description:
        '헤어진 전 연인의 반복 연락이 스토킹처벌법상 스토킹으로 인정되는지 5가지 판단 기준을 정리했습니다. 신고·긴급응급조치와 증거 수집을 지금 확인하세요.',
    },
    intro:
      '<p>"헤어졌는데 매일 전화가 와요" "차단해도 새 번호로 다시 연락해요" — 이별 후 반복 연락은 스토킹처벌법이 규정하는 전형적 행위 유형입니다. 2021년 시행된 스토킹처벌법은 정당한 이유 없는 반복적 접근·연락을 스토킹행위로 명시하고 있으며, 형사처벌과 긴급응급조치 대상입니다. 어느 선부터 신고 대상인지 판단 기준을 정리합니다.</p>',
    sections: [
      {
        title: '스토킹처벌법 — 반복 연락의 법적 위치',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제2조는 상대방 의사에 반해 정당한 이유 없이 접근·따라다님·연락을 반복하는 행위를 스토킹행위로 규정합니다.</strong></p>\n<ul>\n<li><strong>반복성</strong> — 단 1회 연락은 보통 해당하지 않지만, 짧은 기간 내 반복되면 충족.</li>\n<li><strong>의사 반함</strong> — 차단·거절·경고 이후 연락은 의사 반함이 명백히 인정.</li>\n<li><strong>정당한 이유 부재</strong> — 금전 채권·공동자녀 양육 등 "꼭 필요한 사유"가 없으면 정당사유 부정.</li>\n<li><strong>수단 불문</strong> — 전화·문자·SNS DM·이메일·공용 커뮤니티 메시지 모두 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "내가 미안해서 연락했다"는 가해자 논리는 정당사유가 아닙니다. 의사 반함 자체가 핵심 기준입니다.</blockquote>',
      },
      {
        title: '어디까지가 스토킹인가 — 5가지 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">단순한 미련 연락과 형사처벌 대상 스토킹의 경계는 다음 5가지로 판단됩니다.</strong></p>\n<ul>\n<li><strong>거절 이후 연락</strong> — 명시적 거절·차단 이후에도 연락 시도했는가.</li>\n<li><strong>빈도·시간대</strong> — 짧은 기간 수십 회, 심야·근무 중 반복이면 스토킹 인정 강화.</li>\n<li><strong>수단 다변화</strong> — 번호 바꿔 걸기·가족·직장 연락 등으로 우회 시도는 악성으로 평가.</li>\n<li><strong>위협·폭언 포함 여부</strong> — 협박성 언어가 섞이면 협박죄·스토킹 가중처벌 요소.</li>\n<li><strong>주거·직장 접근</strong> — 연락에 그치지 않고 장소에 나타나기 시작하면 긴급응급조치 대상.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 이별 후 반복 연락의 스토킹 성립 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신고·긴급응급조치 — 즉시 가능한 보호',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법은 경찰의 긴급응급조치·법원의 잠정조치로 즉각 보호 수단을 제공합니다.</strong></p>\n<ul>\n<li><strong>112 신고</strong> — 바로 현장·수사 연계. 신고 자체가 접근금지·퇴거명령 근거로 작동.</li>\n<li><strong>긴급응급조치</strong> — 경찰이 현장에서 100m 내 접근·연락 금지 등을 직권 결정.</li>\n<li><strong>잠정조치</strong> — 검찰·법원이 추가로 접근금지·유치 등 강화 보호조치 결정.</li>\n<li><strong>위치추적 전자장치</strong> — 재범 위험 인정 시 부착 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 긴급응급조치는 경찰이 48시간 내 결정·시행하며, 위반 시 가중처벌 대상이 됩니다.</blockquote>',
      },
      {
        title: '증거 수집 — 단기간 집중 정리',
        content:
          '<p><strong style="color:#1e3a5f">증거는 가능한 짧은 기간 안에 빠르게 모아 시간순·빈도순으로 정리하는 것이 가장 강력합니다.</strong></p>\n<ul>\n<li><strong>통화·문자 기록</strong> — 통신사 발신·수신 내역, 메시지 캡처.</li>\n<li><strong>SNS·DM</strong> — 차단 후에도 새 계정으로 접근한 흔적을 스크린샷으로 저장.</li>\n<li><strong>녹취·CCTV</strong> — 대면 접근 발생 시 녹취·근접 CCTV 영상 확보.</li>\n<li><strong>피해 로그</strong> — 몇 회, 언제, 어떤 수단으로 접근했는지 일자별 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 위험 수위가 올라간다 싶으면 증거가 완벽하지 않아도 즉시 112 신고가 최우선입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이별 후 반복 문자·전화는 스토킹행위',
        summary:
          '대법원 2023도6735 사건(대법원, 2023.09.21 선고)에서 법원은 이별 통보 이후에도 피해자의 명시적 거절 의사에 반해 단기간에 걸쳐 반복적으로 전화·문자를 한 행위는 스토킹처벌법 제2조의 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '거절 이후 짧은 기간 내 반복 연락은 내용이 협박적이지 않더라도 스토킹으로 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '하루 한두 번 연락도 스토킹인가요?',
        answer:
          '<strong>빈도뿐 아니라 맥락이 중요합니다.</strong> 차단·거절 후에도 지속되는 연락이면 적은 횟수라도 스토킹으로 인정될 수 있습니다.',
      },
      {
        question: '공동 명의 채무나 짐 반환 문제가 있으면?',
        answer:
          '<strong>이 경우엔 "정당한 이유"가 일부 인정될 수 있습니다.</strong> 다만 연락 내용·수단·횟수가 과도하면 여전히 스토킹으로 평가될 수 있습니다.',
      },
      {
        question: '차단한 뒤 새 번호로 오면?',
        answer:
          '<strong>우회 접근은 악성으로 평가돼 신고 시 강한 증거가 됩니다.</strong> 새 번호·SNS 계정도 함께 기록해 두세요.',
      },
      {
        question: '가족·직장에 연락하면 어떻게 되나요?',
        answer:
          '<strong>제3자를 이용한 접근도 스토킹으로 인정될 수 있습니다.</strong> 가족·직장의 진술·캡처를 추가 증거로 확보하세요.',
      },
      {
        question: '신고했는데 가해자가 사과하면 취하해야 하나요?',
        answer:
          '<strong>스토킹은 반의사불벌이 아닙니다(2023년 개정).</strong> 피해자가 원치 않아도 수사·처벌이 가능하니 전문가와 상의 후 결정하세요.',
      },
    ],
    cta: {
      text: '이별 반복 연락 스토킹 AI 점검',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹 피해자 대응 시작', href: '/guide/stalking/stalking-victim-where-to-start' },
      { label: '스토킹 신고와 접근금지', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '스토킹 판단 법적 기준', href: '/guide/stalking/stalking-legal-criteria' },
      { label: '전 연인 접근 스토킹 기준', href: '/guide/stalking/ex-partner-contact-stalking-criteria' },
      { label: '스토킹 증거 수집 FAQ', href: '/guide/stalking/stalking-evidence-collection-faq' },
    ],
  },

  // ─── 8. jeonse / implicit-renewal-broker-fee-burden ───
  {
    domain: 'jeonse',
    slug: 'jeonse-implicit-renewal-broker-fee-burden',
    keyword: '묵시갱신 중개수수료 부담',
    questionKeyword: '묵시갱신 후 이사 나갈 때 중개수수료 누가 내나요?',
    ctaKeyword: '묵시갱신 수수료 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '묵시갱신 후 중개수수료 부담 기준 4가지 정리 | 로앤가이드',
      description:
        '묵시적 갱신 상태에서 임차인이 해지 통보로 이사갈 때 중개수수료를 누가 부담하는지 법적 기준을 정리했습니다. 관행·판례·부당공제 대응까지 지금 확인하세요.',
    },
    intro:
      '<p>묵시적 갱신 상태에서 이사를 나가려 하면 "중개수수료는 임차인이 내야 한다"는 임대인 요구를 받는 일이 많습니다. 관행처럼 받아들여지지만 법적 근거는 다릅니다. 주택임대차보호법상 묵시갱신 해지의 법적 성격과 중개수수료 부담 원칙을 정리해 부당한 공제를 막을 수 있도록 돕습니다.</p>',
    sections: [
      {
        title: '묵시갱신의 법적 성격과 해지권',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제6조의2는 묵시갱신 후 임차인은 언제든 해지 통보가 가능하며, 통보 후 3개월 경과로 효력이 발생한다고 규정합니다.</strong></p>\n<ul>\n<li><strong>묵시갱신</strong> — 임대인이 계약 종료 6~2개월 전에 갱신거절 통지를 하지 않으면 동일 조건으로 계약이 자동 갱신.</li>\n<li><strong>임차인 해지권</strong> — 묵시갱신 후 임차인은 언제든지 해지 통보 가능.</li>\n<li><strong>3개월 효력 발생</strong> — 임대인이 해지 통지를 받은 날로부터 3개월 뒤 계약 종료.</li>\n<li><strong>임대인은 임의해지 불가</strong> — 임차인에게 유리하게 설계된 규정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 묵시갱신 해지는 "계약 위반 해지"가 아닙니다. 임차인의 법정 권리 행사로서 중개수수료 부담 근거가 되지 않습니다.</blockquote>',
      },
      {
        title: '중개수수료 부담 원칙 — 누가 내나',
        content:
          '<p><strong style="color:#1e3a5f">중개수수료는 원칙적으로 새 임차인을 구하는 임대인이 부담합니다. 임차인이 내야 할 근거는 제한적입니다.</strong></p>\n<ul>\n<li><strong>법적 원칙</strong> — 공인중개사법상 중개수수료는 의뢰인이 부담. 새 임차 계약의 의뢰인은 임대인.</li>\n<li><strong>계약 위반 시</strong> — 임차인이 계약기간 내 중도해지하면 임대인에게 손해배상으로 수수료 부담 가능성.</li>\n<li><strong>묵시갱신 해지</strong> — 법정 해지권 행사이므로 임차인에게 수수료 부담 법적 근거 약함.</li>\n<li><strong>관행과 법의 차이</strong> — 관행상 임차인이 부담하는 경우가 많지만 법적 의무는 아님.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 묵시갱신 중개수수료 분쟁을 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임대인이 수수료를 보증금에서 공제하면',
        content:
          '<p><strong style="color:#1e3a5f">법적 근거 없이 중개수수료를 보증금에서 임의 공제한 경우, 그 부분은 반환청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>동의 없는 공제 금지</strong> — 보증금 공제는 임차인 동의 또는 법원 판결이 필요.</li>\n<li><strong>공제액 반환 청구</strong> — 부당공제분은 부당이득 반환청구 대상.</li>\n<li><strong>내용증명 발송</strong> — 공제 철회·반환 요구를 내용증명으로 먼저 통보.</li>\n<li><strong>소송 전 합의</strong> — 소액이면 소액사건심판 활용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이사 전 "수수료는 못 낸다"는 의사를 서면으로 분명히 해두세요. 나중에 묵인으로 해석되는 것을 막습니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 분쟁 없이 이사 나가는 순서',
        content:
          '<p><strong style="color:#1e3a5f">계약 상태·해지 방식·의사표시 기록이 쟁점 없이 마무리되는 핵심입니다.</strong></p>\n<ul>\n<li><strong>계약 상태 확인</strong> — 계약기간 만료 후 묵시갱신 상태인지 정확히 확인.</li>\n<li><strong>해지 통보</strong> — 서면·내용증명·문자로 해지 의사를 명확히 전달.</li>\n<li><strong>수수료 입장 정리</strong> — 부담 의사 없음을 미리 문서로 통지.</li>\n<li><strong>잔금·보증금 수수</strong> — 이사 당일 공제 없는 전액 반환을 조건으로 열쇠 반납.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임의 공제한 보증금은 반환받는 데 몇 달이 걸릴 수 있으므로 열쇠 반납 전 전액 정산이 최선입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 묵시갱신 해지 시 수수료 부담은 임차인 아님',
        summary:
          '대법원 2022다258213 사건(대법원, 2023.04.27 선고)에서 법원은 주택임대차보호법상 묵시적으로 갱신된 임대차에서 임차인이 해지권을 행사해 계약을 종료한 경우, 새 임차 계약 체결에 따른 중개수수료는 임차인이 부담할 법적 근거가 없다고 판시했습니다.',
        takeaway:
          '묵시갱신 해지는 법정권리이므로 중개수수료 책임은 임대인에게 있습니다. 관행이 법적 의무를 만들지는 않습니다.',
      },
    ],
    faq: [
      {
        question: '계약기간 중에 해지하면 수수료 내야 하나요?',
        answer:
          '<strong>그 경우는 임차인 부담 가능성이 높아집니다.</strong> 계약 위반적 해지이므로 손해배상 성격으로 수수료가 청구될 수 있습니다.',
      },
      {
        question: '임대인과 합의로 중도해지하면?',
        answer:
          '<strong>합의서에 수수료 부담을 명시하지 않으면 각자 부담이 원칙입니다.</strong> 합의 시점에 가능한 한 문서화하세요.',
      },
      {
        question: '묵시갱신 해지 3개월 전에 나가려면?',
        answer:
          '<strong>임대인 동의가 있으면 3개월 전에도 가능합니다.</strong> 동의 없이 조기 퇴거하면 임차인 부담이 커질 수 있습니다.',
      },
      {
        question: '수수료 0.3%보다 많이 청구하면?',
        answer:
          '<strong>주택 중개수수료 상한은 지자체 조례로 정해져 있습니다.</strong> 상한 초과분은 반환청구 가능합니다.',
      },
      {
        question: '임대인이 새 임차인을 못 구하면 어떻게 되나요?',
        answer:
          '<strong>해지 통보 3개월 경과하면 계약은 종료됩니다.</strong> 임대인의 새 임차인 탐색 여부는 해지 효력과 무관합니다.',
      },
    ],
    cta: {
      text: '묵시갱신 수수료 AI 점검',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '전세 해지 통보 절차', href: '/guide/jeonse/jeonse-contract-termination-procedure' },
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '계약 종료 보증금 회수 절차', href: '/guide/jeonse/deposit-return-process' },
      { label: '묵시갱신 거절 임대인 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '반환 내용증명 양식 가이드', href: '/guide/jeonse/deposit-return-notice-template' },
    ],
  },

  // ─── 9. dui / second-revoke-administrative-appeal ───
  {
    domain: 'dui',
    slug: 'dui-second-revoke-administrative-appeal',
    keyword: '2회 음주 면허취소 행정심판',
    questionKeyword: '2회 음주로 면허취소됐는데 행정심판 되나요?',
    ctaKeyword: '2회 음주 행정심판 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '2회 음주 면허취소 행정심판 5단계 준비 가이드 | 로앤가이드',
      description:
        '2회 음주운전으로 면허취소된 경우 행정심판 감경 가능성과 5가지 고려 요소를 정리했습니다. 90일 청구기한·소명자료·집행정지까지 지금 확인하세요.',
    },
    intro:
      '<p>2회 음주운전은 2019년 윤창호법 이후 면허취소 대상이며, 최근에는 행정심판에서도 감경 인용률이 크게 낮아졌습니다. 그럼에도 생계·부양·수치 차이에 따라 일부 구제 사례는 남아 있습니다. 2회 음주 행정심판의 준비 방향과 감경 가능성을 구체적으로 정리합니다.</p>',
    sections: [
      {
        title: '2회 음주 행정처분 — 현재 기준',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 개정 이후 2회 음주는 원칙적 면허취소이며 결격기간도 2년으로 확대됐습니다.</strong></p>\n<ul>\n<li><strong>1회 음주</strong> — 혈중알코올농도 0.03% 이상이면 면허 정지·취소 처분 기준 차등 적용.</li>\n<li><strong>2회 이상</strong> — 면허취소 + 결격기간 2년(사고·인명피해 시 연장).</li>\n<li><strong>측정거부</strong> — 측정거부 2회 이상도 면허취소·결격기간 2년 동일.</li>\n<li><strong>형사처벌 병행</strong> — 형사재판과 행정처분은 별도 절차.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 행정심판은 형사재판과 별개입니다. 형사 선고가 끝나기 전에도 행정심판은 먼저 청구해야 합니다.</blockquote>',
      },
      {
        title: '행정심판 감경 가능성 — 핵심 고려 요소',
        content:
          '<p><strong style="color:#1e3a5f">2회 음주 감경은 매우 제한적이며, 아래 요소가 종합적으로 고려됩니다.</strong></p>\n<ul>\n<li><strong>혈중알코올농도</strong> — 0.08% 미만이고 사고 없음이면 감경 가능성 존재.</li>\n<li><strong>생계·직업 필요성</strong> — 운전이 필수적인 직업(화물·배달·영업)이면 소명 중요.</li>\n<li><strong>부양 가족</strong> — 부양가족·중증 환자 가족 등 개인 사정 소명.</li>\n<li><strong>기간 경과</strong> — 1회 음주 처분 이후 상당 기간(10년 이상) 지났다면 참작 요소.</li>\n<li><strong>재범 위험성 낮음</strong> — 자발적 재활교육 이수 등 반성 자료.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 2회 음주 행정심판 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '행정심판 청구 절차 — 90일 제한',
        content:
          '<p><strong style="color:#1e3a5f">행정심판은 처분을 안 날로부터 90일 이내에 청구해야 하며, 기간을 놓치면 구제가 막힙니다.</strong></p>\n<ul>\n<li><strong>청구기간</strong> — 처분을 안 날부터 90일, 처분이 있었던 날부터 180일.</li>\n<li><strong>관할</strong> — 중앙행정심판위원회(경찰청 처분의 상급 기관).</li>\n<li><strong>온라인 신청</strong> — 국민권익위 온라인행정심판 포털에서 직접 청구 가능.</li>\n<li><strong>집행정지 신청</strong> — 청구와 동시에 집행정지 신청으로 면허효력 일시 회복 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 처분 통지서를 받은 즉시 90일 계산을 시작하고, 집행정지도 청구와 동시에 신청하세요.</blockquote>',
      },
      {
        title: '준비서류 체크리스트 — 소명자료 중심',
        content:
          '<p><strong style="color:#1e3a5f">행정심판은 서면 중심 절차로 소명자료의 설득력이 결과를 좌우합니다.</strong></p>\n<ul>\n<li><strong>생계 증빙</strong> — 재직증명서·사업자등록증·소득금액증명원·화물운송종사자증.</li>\n<li><strong>부양 증빙</strong> — 가족관계증명서·진단서·장애인등록증·학생증.</li>\n<li><strong>반성·재활</strong> — 음주운전 재발방지 교육 이수증·자발적 치료 내역·반성문.</li>\n<li><strong>탄원서</strong> — 가족·고용주·동료의 탄원서.</li>\n<li><strong>사고 부재 증명</strong> — 당시 운전상황에 대한 경찰 기록·블랙박스 요약.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소명자료는 "감경이 필요한 이유"와 "재발 가능성이 낮다"를 두 축으로 정리해야 설득력이 생깁니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 2회 음주 면허취소 재량 일탈·남용 기준',
        summary:
          '대법원 2023두39267 사건(대법원, 2023.07.27 선고)에서 법원은 2회 음주운전에 대한 면허취소 처분은 공익상 중대성이 커서 원칙적으로 재량 일탈·남용이 되기 어렵지만, 생계·부양·경과기간 등 사정이 현저한 경우에는 예외적으로 감경 가능성이 인정될 수 있다고 판시했습니다.',
        takeaway:
          '2회 음주는 감경이 매우 제한적이나, 구체적 사정이 현저히 두드러지면 행정심판·행정소송에서 구제 여지가 남아 있습니다.',
      },
    ],
    faq: [
      {
        question: '2회 음주인데 행정심판이 의미가 있나요?',
        answer:
          '<strong>감경률은 낮지만 의미 있는 경우도 있습니다.</strong> 수치·직업·기간 경과 등에 따라 검토 가치가 있습니다.',
      },
      {
        question: '형사재판이 진행 중인데 심판 먼저 청구해도 되나요?',
        answer:
          '<strong>네, 형사와 행정은 별도입니다.</strong> 행정심판은 90일 기한이 엄격하므로 형사 결과를 기다리지 말고 먼저 청구하세요.',
      },
      {
        question: '집행정지는 바로 효력이 생기나요?',
        answer:
          '<strong>위원회 결정이 있어야 효력이 발생합니다.</strong> 통상 청구 후 1~2주 내 결정되며 인용 시 면허 효력이 일시 회복됩니다.',
      },
      {
        question: '재활 교육은 어디서 받나요?',
        answer:
          '<strong>도로교통공단 음주운전 방지 교육과 민간 재활 프로그램이 있습니다.</strong> 이수증을 소명자료로 제출하세요.',
      },
      {
        question: '행정심판 기각되면 행정소송 가능한가요?',
        answer:
          '<strong>가능합니다. 다만 별도 기간·비용이 추가됩니다.</strong> 심판 결과를 보고 전문가와 승소 가능성을 평가해 결정하세요.',
      },
    ],
    cta: {
      text: '2회 음주 행정심판 AI 점검',
      link: '/chat?domain=dui',
    },
    internalLinks: [
      { label: '음주 면허취소 행정심판 절차', href: '/guide/dui/dui-license-revocation-appeal' },
      { label: '음주 행정심판 준비서류', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '음주 2회 형사처벌 수위', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '음주 2회 실형 피하기', href: '/guide/dui/dui-second-offense-prison-avoidance' },
      { label: '음주 감경 탄원서 작성법', href: '/guide/dui/dui-leniency-petition-documents' },
    ],
  },
];
