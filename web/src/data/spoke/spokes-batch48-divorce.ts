import { SpokePage } from '../spoke-pages';

// batch48 divorce 4개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 외국인 배우자와 이혼을 검토하는 사람이 결혼이민(F-6) 체류자격에 미치는 영향과 책임 없는 사유 입증 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 협의이혼을 마친 뒤 누락된 재산을 발견한 사람이 이혼일로부터 2년 이내 추가 재산분할 청구 절차를 준비하도록 돕는 페이지다.
// 3. 이 페이지는 30년 이상 혼인 후 황혼이혼을 검토하는 사람이 장기 부양·협조 기여를 재산분할 비율 산정에 반영시키는 근거를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 배우자 가정폭력 피해를 겪고 있는 사람이 이혼 청구와 가정폭력 보호명령을 동시에 진행하는 절차를 준비하도록 돕는 페이지다.

export const spokesBatch48Divorce: SpokePage[] = [
  // ─── 1. divorce / foreign-spouse-visa-impact ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-visa-impact',
    keyword: '외국인 배우자 이혼 체류자격',
    questionKeyword: '외국인 배우자와 이혼하면 결혼이민 체류자격은 어떻게 되나요?',
    ctaKeyword: '외국인 배우자 이혼 체류자격 영향 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 이혼 체류자격 영향 4단계 정리 | 로앤가이드',
      description:
        '결혼이민(F-6) 체류자격을 가진 외국인 배우자와 이혼할 때 체류자격 변경·연장 기준과 책임 없는 사유 입증 절차를 지금 확인하세요.',
    },
    intro:
      '<p>외국인 배우자와 이혼을 검토하는 분들이 가장 걱정하시는 것은 "이혼하면 한국에서 더 살 수 있나요?"라는 체류 문제입니다. 결혼이민(F-6) 체류자격은 혼인 유지를 전제로 부여되는 자격이라 이혼이 체류 기간·연장에 직접 영향을 줍니다. 다만 본인에게 책임이 없는 사유로 혼인이 파탄된 경우 체류자격 변경(F-6-3)이 인정될 수 있어, 이혼 절차와 체류자격 정리를 함께 준비하는 것이 안전합니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 외국인 배우자 이혼·체류 4단계',
        content:
          '<p><strong style="color:#1e3a5f">이혼 절차와 체류자격 변경 신청을 병렬로 진행하면 체류 단절 위험을 줄일 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이혼 사유와 책임 정리</strong> — 협의이혼 또는 재판이혼 결정. 외국인 배우자의 책임으로 혼인이 파탄된 경우 출입국관리법 시행령상 결혼이민 체류자격 유지(F-6-3) 신청 근거가 됩니다. 사유와 증거 자료(폭행·외도·유기 등)를 미리 정리.</li>\n<li><strong>2단계 — 가정법원 절차 진행</strong> — 협의이혼은 의사확인 + 숙려기간(자녀 있으면 3개월·없으면 1개월). 재판이혼은 조정전치 후 본안 소송으로 진행됩니다.</li>\n<li><strong>3단계 — 출입국·외국인청 신고 및 체류자격 변경</strong> — 이혼 후 14일 이내 출입국·외국인청에 신고. 본인에게 책임이 없는 사유로 혼인이 파탄된 경우 결혼이민 체류자격 유지(F-6-3) 신청 검토 가능.</li>\n<li><strong>4단계 — 자녀 양육·재산분할·위자료 정리</strong> — 미성년 자녀를 양육하는 경우 결혼이민 체류자격 유지 사유로 인정될 수 있습니다. 재산분할 청구는 이혼일로부터 2년 이내(민법 제839조의2 제척기간) 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 배우자 이혼 시 체류자격 변경 절차와 입증 자료, AI가 상황별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '결혼이민(F-6) 체류자격 — 이혼 후 유지 가능한 경우',
        content:
          '<p><strong style="color:#1e3a5f">출입국관리법 시행령 [별표 1] 제28호의4 (다)목은 본인에게 책임이 없는 사유로 정상적인 혼인관계를 유지할 수 없는 사람에게 체류자격을 인정합니다.</strong></p>\n<ul>\n<li><strong>본인 책임 없는 사유로 인정될 수 있는 경우</strong> — 한국인 배우자의 폭행·외도·유기·가출 등으로 혼인 파탄. 가정법원 판결문에서 한국인 배우자 유책 인정이 입증 자료가 됩니다.</li>\n<li><strong>미성년 자녀 양육</strong> — 한국 국적 미성년 자녀를 양육 중이면 자녀 양육을 위한 체류자격(F-6-2) 유지 가능성이 있습니다.</li>\n<li><strong>혼인기간·생활 안정성</strong> — 혼인 기간이 길고 한국 사회 생활 기반이 갖춰진 경우 체류자격 유지 인정 가능성이 높아질 수 있습니다.</li>\n<li><strong>경제적 자립 여부</strong> — 직업·소득·세금 납부 이력이 있으면 자격 유지 심사에서 긍정적으로 작용할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 출입국·외국인청 심사는 사실관계 종합 판단이므로, 이혼 판결문에 한국인 배우자 책임 인정 문언이 포함되도록 청구 취지를 정리하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">이혼 진행과 체류자격 변경 신청에 공통으로 필요한 서류를 미리 모아두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>가족관계 서류</strong> — 혼인관계증명서·기본증명서·가족관계증명서(발급 1개월 이내)</li>\n<li><strong>이혼 결과 증명</strong> — 협의이혼의사확인서 또는 가정법원 판결문(확정 후)</li>\n<li><strong>체류 관련 서류</strong> — 외국인등록증·여권 사본·출입국기록</li>\n<li><strong>책임 없는 사유 입증</strong> — 진단서·녹취·문자·사진·증인 진술서 등 한국인 배우자 유책 입증 자료</li>\n<li><strong>경제·생활 자료</strong> — 재직증명서·소득금액증명원·임대차계약서·자녀 학교 재학증명서</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 소장 작성 시 한국인 배우자의 유책 사유를 구체적으로 적시하면 이후 출입국 심사에서 활용할 수 있는 근거가 됩니다.</blockquote>',
      },
      {
        title: '재산분할·양육비 — 외국인 배우자도 동일하게 청구 가능',
        content:
          '<p><strong style="color:#1e3a5f">국적과 무관하게 한국 가정법원에서 재산분할·양육비·위자료 청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>국제재판관할</strong> — 부부 중 한쪽이 한국에 주소를 두고 있으면 한국 가정법원에 청구할 수 있는 경우가 일반적입니다(국제사법 제2조 실질적 관련성 기준).</li>\n<li><strong>재산분할 청구권</strong> — 외국인 배우자도 한국인 배우자와 동일하게 혼인 중 형성된 공동재산에 대한 분할 청구권이 있습니다.</li>\n<li><strong>양육비 산정</strong> — 미성년 자녀 양육비는 양육비 산정기준표를 토대로 결정. 외국인 배우자가 양육자가 되는 경우에도 동일.</li>\n<li><strong>위자료</strong> — 한국인 배우자의 유책행위(폭행·외도 등)로 혼인이 파탄된 경우, 위자료 청구 가능. 소멸시효는 이혼일로부터 3년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재산분할 청구 제척기간은 이혼일로부터 2년입니다. 본국 귀국과 한국 잔류 어느 쪽을 선택해도 청구권이 자동 소멸하지 않으니, 기한 내 청구하는 것이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 결혼이민 체류자격과 본인 책임 없는 사유',
        summary:
          '대법원 2018두66869 사건(대법원, 2019.07.04 선고)에서 법원은 결혼이민(F-6) 체류자격에 관한 출입국관리법 시행령상 "자신에게 책임이 없는 사유로 정상적인 혼인관계를 유지할 수 없는 사람"의 입법 취지를 명확히 하면서, 한국인 배우자의 책임으로 혼인이 파탄된 외국인 배우자가 체류자격을 유지할 수 있는 근거를 확인했습니다.',
        takeaway: '한국인 배우자의 유책으로 인한 이혼은 외국인 배우자의 결혼이민 체류자격 유지 근거가 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '이혼 후 즉시 출국해야 하나요?',
        answer:
          '<strong>이혼이 곧바로 강제출국으로 이어지지는 않습니다.</strong> 다만 결혼이민(F-6) 체류자격 사유가 소멸하므로, 본인 책임 없는 사유로 혼인이 파탄된 경우 체류자격 유지 신청을 하거나 다른 체류자격(취업·자녀 양육 등)으로 변경 신청을 하는 절차를 검토해볼 수 있습니다.',
      },
      {
        question: '한국인 배우자가 이혼에 동의하지 않으면 어떻게 되나요?',
        answer:
          '<strong>가정법원에 재판이혼을 청구할 수 있습니다.</strong> 민법 제840조의 이혼사유(부정행위·악의의 유기·심히 부당한 대우 등)가 입증되면 일방 청구로도 이혼이 가능하며, 이 판결문이 책임 없는 사유 입증 자료가 됩니다.',
      },
      {
        question: '미성년 자녀가 한국 국적이면 체류 유지에 도움이 되나요?',
        answer:
          '<strong>한국 국적 자녀를 양육하는 경우 자녀 양육을 위한 체류자격(F-6-2) 유지 가능성이 있습니다.</strong> 양육권을 본인이 갖는 것으로 합의·판결되었음을 입증하는 서류와 자녀와의 동거 사실을 입증할 자료를 함께 준비하는 것이 좋습니다.',
      },
      {
        question: '이혼 후 본국에 귀국했는데 한국에서 재산분할을 청구할 수 있나요?',
        answer:
          '<strong>이혼일로부터 2년 이내라면 본국에 거주하고 있어도 한국 가정법원에 재산분할 청구가 가능합니다.</strong> 한국 변호사 선임을 통해 대리 진행하거나, 화상회의·서면 진행 방식을 활용하는 절차를 검토해볼 수 있습니다.',
      },
      {
        question: '한국어가 서툴러서 절차 진행이 걱정됩니다. 도움받을 수 있는 곳이 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 외국인 대상 무료 법률상담을 운영하고 있습니다.</strong> 다누리콜센터(1577-1366)에서 다국어 상담을 받을 수 있고, 가정법원에서도 통역 지원이 가능한 경우가 있으니 사전에 요청해두는 것이 좋습니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '국제이혼 관할법원과 절차', href: '/guide/divorce/divorce-foreign-spouse-procedure-jurisdiction' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '이혼 후 위자료 청구 시효', href: '/guide/divorce/divorce-alimony-claim-deadline' },
    ],
  },

  // ─── 2. divorce / post-judgment-property-omission-claim ───
  {
    domain: 'divorce',
    slug: 'divorce-post-judgment-property-omission-claim',
    keyword: '협의이혼 후 누락 재산 추가 분할 청구',
    questionKeyword: '협의이혼할 때 빠뜨린 재산을 나중에 알았는데 추가로 분할 청구할 수 있나요?',
    ctaKeyword: '이혼 후 누락 재산 추가 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이혼 후 빠뜨린 재산, 2년 안에 추가 청구 4단계 절차 | 로앤가이드',
      description:
        '협의이혼 후 누락된 재산을 발견했을 때 이혼일로부터 2년 이내 추가 재산분할 청구가 가능한지, 어떤 절차로 진행하는지 지금 확인하세요.',
    },
    intro:
      '<p>"협의이혼할 때는 몰랐던 배우자 명의 부동산이 있었어요"라는 사례가 의외로 많습니다. 이혼 후 뒤늦게 누락된 재산을 발견하면 마음이 무너지지만, 다행히 민법 제839조의2는 이혼일로부터 2년 이내 재산분할 청구를 보장하고 있습니다. 누락된 재산만 별도로 청구할 수 있는지, 어떤 자료로 입증하는지 순서대로 정리해두면 권리를 지킬 수 있습니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 누락 재산 추가 청구 4단계',
        content:
          '<p><strong style="color:#1e3a5f">이혼 후 누락 재산 발견 시점부터 가정법원 심판 청구까지 4단계로 정리할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 누락 재산 확인 및 자료 수집</strong> — 부동산 등기부등본·금융거래확인서·자동차 등록증·보험 해약환급금 내역 발급. 이혼 시점에 존재했던 재산이라는 점을 입증하는 것이 핵심입니다.</li>\n<li><strong>2단계 — 제척기간 점검</strong> — 이혼일(협의이혼 신고일 또는 판결 확정일)로부터 2년 이내인지 확인. 민법 제839조의2 제3항. 1년 6개월 시점이면 즉시 절차 착수가 안전.</li>\n<li><strong>3단계 — 가정법원 재산분할 심판 청구</strong> — 마류 가사비송사건으로 청구. 청구취지에 누락 재산 항목을 구체적으로 명시하고, 기존 협의 내용과의 관계를 정리합니다.</li>\n<li><strong>4단계 — 보전처분 검토</strong> — 청구 후 처분 우려가 있는 부동산은 처분금지 가처분, 예금 등은 가압류 신청을 검토. 본안 심판과 병행 가능합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">누락 재산 추가 청구 절차와 입증 자료, AI가 상황별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '추가 청구가 가능한 경우 — 3가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">기존 협의서에 명시되지 않은 재산이거나 은닉된 재산이면 추가 청구 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>유형 1 — 협의서에 누락된 재산</strong> — 이혼 협의서에 분할 대상으로 기재되지 않은 부동산·예금·주식 등이 있었다면, 그 재산에 한해 추가 청구 검토 가능.</li>\n<li><strong>유형 2 — 은닉·기망으로 알지 못한 재산</strong> — 배우자가 의도적으로 숨겼거나 거짓으로 알린 재산은 협의 자체의 효력에 다툼 여지. 사해행위 또는 협의의 착오·기망 주장도 검토 대상.</li>\n<li><strong>유형 3 — 협의서가 포괄적 합의 형태가 아닌 경우</strong> — "이로써 모든 재산분할을 종결한다"는 포괄적 청산 조항이 없으면 누락 재산만 별도 청구 가능성이 비교적 높습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 협의서에 "이로써 일체의 재산분할을 마친다"는 포괄적 청산 조항이 있으면 추가 청구가 어려워질 수 있어, 협의서 문구를 먼저 확인해야 합니다.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">가정법원 심판청구 시 필요한 핵심 서류입니다.</strong></p>\n<ul>\n<li><strong>이혼 관계 서류</strong> — 혼인관계증명서(이혼 이력 포함)·기본증명서·가족관계증명서</li>\n<li><strong>기존 협의 내용</strong> — 협의이혼의사확인서 사본·재산분할 합의서 원본</li>\n<li><strong>누락 재산 입증</strong> — 부동산등기부등본·금융거래확인서·국세청 재산조회 자료·보험 해약환급금 조회·차량 등록원부</li>\n<li><strong>이혼 시점 재산 보유 입증</strong> — 부동산 거래 이력·통장 거래내역(이혼일 기준)·주식 거래 내역</li>\n<li><strong>은닉·기망 입증(해당 시)</strong> — 배우자의 거짓 진술 녹취·메신저 대화·재산 보유를 모를 수 없었던 정황 자료</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 직접 조회하기 어려운 배우자 명의 재산은 가정법원에 재산명시·재산조회 신청을 함께 진행하면 강제력이 생깁니다.</blockquote>',
      },
      {
        title: '제척기간 2년이 임박했을 때 — 즉시 해야 할 것',
        content:
          '<p><strong style="color:#1e3a5f">제척기간 2년은 도과하면 권리 자체가 소멸하므로, 시간이 부족할 때는 임시 조치를 먼저 진행하는 것이 안전합니다.</strong></p>\n<ul>\n<li><strong>심판청구 즉시 접수</strong> — 청구취지가 다소 불완전해도 우선 접수해 제척기간 내 청구로 인정받는 것을 우선시. 보정은 이후 가능.</li>\n<li><strong>가압류·가처분 검토</strong> — 청구 즉시 또는 동시에 보전처분 신청. 배우자가 재산을 처분하기 전에 묶어두는 효과.</li>\n<li><strong>변호사 상담을 검토해보세요</strong> — 가사 전문 변호사가 청구 적법성과 입증 전략을 조기에 검토하면 절차 진행이 수월해집니다. 무료 상담은 대한법률구조공단(132)에서 받아보실 수 있습니다.</li>\n<li><strong>합의 시도와 병행</strong> — 청구를 접수해두고 협상으로 합의에 이르면 취하 가능. 단, 시효가 도과하면 협상 우위가 사라지므로 청구 접수가 우선.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "이혼한 지 1년 6개월 됐고 여유 있으니까 천천히 해야지"라는 판단은 위험합니다. 서류 준비·법원 심리 기간을 고려하면 이혼일로부터 1년 8개월 시점에는 청구가 접수되어 있어야 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 후 2년 이내 재산분할 청구',
        summary:
          '대법원 2023므11819 사건(대법원, 2023.12.21 선고)에서 법원은 협의상 또는 재판상 이혼을 하였으나 재산분할을 하지 않아 이혼 후 2년 이내에 최초로 법원에 민법 제839조의2에 따라 재산분할청구를 한 경우, 제척기간 내 이루어진 청구에 대하여 법원이 분할 대상과 가액을 직권으로 조사·판단할 수 있다고 판시했습니다.',
        takeaway: '이혼 후 2년 이내라면 누락 재산에 대한 추가 분할 청구가 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '협의서에 "재산분할 종결"이라고 적혀있는데도 추가 청구가 가능한가요?',
        answer:
          '<strong>"재산분할 종결" 문구가 포괄적 청산 합의로 해석되면 추가 청구가 어려울 수 있습니다.</strong> 다만 배우자가 재산을 은닉했거나 거짓으로 진술했다면 합의의 효력 자체를 다툴 여지가 있어, 협의서 문구와 합의 경위를 함께 검토하는 것이 좋습니다.',
      },
      {
        question: '제척기간 2년은 협의이혼 신고일 기준인가요, 가족관계등록부 기재일 기준인가요?',
        answer:
          '<strong>협의이혼은 이혼 신고가 수리된 날, 재판이혼은 판결 확정일이 기산일입니다.</strong> 가족관계등록부 기재일과 다를 수 있어 정확한 기산일을 먼저 확인하는 것이 안전합니다.',
      },
      {
        question: '배우자 명의 재산을 어떻게 확인하나요?',
        answer:
          '<strong>가정법원에 재산명시·재산조회를 신청하면 부동산·금융자산·자동차 등에 대한 조회가 가능합니다.</strong> 청구 접수와 동시에 신청하는 것이 효율적이며, 본인이 직접 신용정보원·금융감독원 등에 조회하기 어려운 부분도 법원을 통해 확인할 수 있습니다.',
      },
      {
        question: '누락된 재산이 이혼 직전에 처분된 경우에도 청구가 가능한가요?',
        answer:
          '<strong>혼인 파탄 이후 공동재산과 무관하게 처분된 재산은 분할 대상에 포함하도록 주장할 수 있는 경우가 있습니다.</strong> 처분 시기·금액·용처를 입증하면 분할 대상에 포함시켜 청구하는 절차를 검토해볼 수 있습니다.',
      },
      {
        question: '이혼 후 1년 11개월이 지났는데 지금이라도 진행할 수 있나요?',
        answer:
          '<strong>제척기간 내라면 즉시 가정법원에 심판청구를 접수하는 것을 권장합니다.</strong> 청구취지를 정밀하게 다듬는 것보다 우선 접수해 시효 내 청구로 인정받고, 보정·증거 보강은 이후에 진행하는 절차도 가능합니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '배우자 은닉 재산 찾는 절차', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '이혼 재산분할 기준 총정리', href: '/guide/divorce/property-division-ratio' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 3. divorce / late-life-30years-property-division ───
  {
    domain: 'divorce',
    slug: 'divorce-late-life-30years-property-division',
    keyword: '황혼이혼 30년 재산분할',
    questionKeyword: '30년 결혼 후 황혼이혼할 때 재산분할 비율은 어떻게 정해지나요?',
    ctaKeyword: '황혼이혼 재산분할 기여도 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '황혼이혼 30년 재산분할, 기여도 50% 인정되는 5가지 근거 | 로앤가이드',
      description:
        '30년 이상 혼인한 황혼이혼에서 재산분할 비율을 결정하는 부양·협조 기여 인정 기준과 입증 자료를 지금 확인하세요.',
    },
    intro:
      '<p>"30년을 함께 살았는데 이제 와서 이혼이라니, 그동안 내 기여는 어떻게 인정받나요?"라는 고민이 황혼이혼의 가장 큰 쟁점입니다. 장기 혼인의 경우 가사·자녀 양육·배우자 직장 생활 지원 등 기여가 누적되어 있어, 법원은 명의와 무관하게 부부 공동 형성 재산을 폭넓게 분할 대상으로 보는 경향이 있습니다. 어떤 기여가 어떻게 입증되는지 정리해보겠습니다.</p>',
    sections: [
      {
        title: 'Q. 30년 혼인의 재산분할 비율은 일반적으로 어떻게 정해지나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 비율은 사건마다 다르지만, 장기 혼인일수록 가사·부양 기여가 폭넓게 인정되어 50% 안팎으로 검토되는 사례가 많습니다.</strong></p>\n<ul>\n<li><strong>법원의 종합 판단</strong> — 민법 제839조의2 제2항에 따라 법원은 당사자 쌍방의 협력으로 이룩한 재산의 액수와 그 밖의 사정을 종합 고려해 분할 비율을 정합니다.</li>\n<li><strong>혼인 기간의 영향</strong> — 30년 이상 장기 혼인은 부부공동생활을 통한 공동 형성·유지 기여가 누적되어 인정되는 경향. 단기 혼인보다 비율이 높게 검토될 수 있습니다.</li>\n<li><strong>전업주부도 동일한 기준</strong> — 전업주부였더라도 가사 노동·자녀 양육·배우자 직장 생활 지원이 재산 형성 기여로 평가되어 30~50% 인정 사례가 보입니다.</li>\n<li><strong>특유재산 예외</strong> — 혼인 전 보유 또는 상속·증여로 취득한 특유재산은 원칙적으로 분할 대상에서 제외될 수 있으나, 장기 혼인 동안 가치 유지·증식에 본인 기여가 있었다면 부분적으로 분할 대상으로 검토되는 경우가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비율 단정은 어렵지만, 장기 혼인 + 명백한 기여 입증 = 50% 안팎 인정 사례가 자주 보입니다. 사건별 차이가 크므로 자료 정리가 핵심.</blockquote>',
      },
      {
        title: 'Q. 어떤 기여가 분할 비율에 반영되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가사·양육·간병·사업 보조·부양 등 다양한 기여가 인정 대상입니다.</strong></p>\n<ol>\n<li><strong>가사 노동</strong> — 30년 가사 관리, 자녀 양육, 가정 경제 운영 — 통상 가장 큰 비중으로 인정.</li>\n<li><strong>자녀 양육</strong> — 자녀의 학교·병원·진로 지원 기록. 자녀 수가 많고 양육 기간이 길수록 기여도 인정 폭이 넓어집니다.</li>\n<li><strong>배우자 사업·직장 지원</strong> — 배우자가 직장이나 사업에 집중할 수 있도록 가정 운영을 전담한 사실. 사업 보조(서류·접대·인맥)도 별도 기여.</li>\n<li><strong>간병·부양</strong> — 시부모·친정 부모 간병, 배우자 질병 간호 등 부양 기여. 장기 간병은 별도 가산 사유로 검토되는 경우가 있습니다.</li>\n<li><strong>경제적 지원</strong> — 본인 명의 자금으로 부동산 매입에 기여한 사실, 결혼 전 재산 일부를 가정 경제에 투입한 사실 등.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">30년 혼인 기여도 입증 전략과 분할 비율 산정 근거, AI가 상황별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 분할 대상 재산은 어디까지 포함되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 부동산·예금·주식·연금·퇴직금·보험까지 폭넓게 검토됩니다.</strong></p>\n<ul>\n<li><strong>부동산</strong> — 주택·상가·토지. 명의와 무관하게 혼인 중 형성된 부분은 분할 대상.</li>\n<li><strong>예금·주식·펀드</strong> — 본인·배우자 명의 모두 조회 대상. 가정법원 재산조회 절차 활용 가능.</li>\n<li><strong>퇴직연금·국민연금</strong> — 국민연금은 분할연금(혼인기간 5년 이상 + 수급 요건 충족) 별도 신청. 공무원·사학연금도 별도 분할 가능. 퇴직금은 이혼 시점 평가액 기준으로 분할 대상에 포함될 수 있습니다.</li>\n<li><strong>보험 해약환급금</strong> — 종신·연금·저축성 보험의 이혼 시점 해약환급금이 분할 대상.</li>\n<li><strong>채무</strong> — 부부 공동 기여 채무는 차감, 일방의 사업·도박 채무는 차감 제외 주장 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 30년 혼인이면 보험·연금이 누적되어 있을 가능성이 높습니다. 부동산·예금만 보지 말고 무형 자산까지 빠짐없이 조회해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: 'Q. 협의가 안 되면 어떤 절차로 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원 조정전치 후 본안 심판으로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계 — 협의 시도</strong> — 가족 또는 변호사 매개로 분할 비율·항목 협의. 합의 시 협의이혼 의사확인서 또는 공증 합의서로 정리.</li>\n<li><strong>2단계 — 가정법원 조정 신청</strong> — 협의 결렬 시 조정 신청. 통상 2~4개월 소요. 조정 성립 시 판결과 동일 효력.</li>\n<li><strong>3단계 — 본안 심판 청구</strong> — 조정 불성립 시 재산분할 심판으로 이행. 법원이 직권으로 분할 대상·가액을 조사·판단(2025스595 판례 취지).</li>\n<li><strong>4단계 — 보전처분</strong> — 절차 중 배우자 처분 우려 재산은 가압류·가처분 신청. 본안과 병행 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 황혼이혼은 분할 재산이 많고 평가가 복잡해 통상 1년 안팎의 기간이 소요됩니다. 변호사 상담을 검토해보시는 것이 도움이 됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 장기 혼인 부양·협조 기여와 재산분할',
        summary:
          '대법원 2025므10730 사건(대법원, 2025.09.04 선고)에서 법원은 민법 제840조 제6호에서 정한 이혼사유인 "혼인을 계속하기 어려운 중대한 사유가 있을 때"의 의미와 판단 기준을 정리하면서, 혼인생활 중 부양·협조의무 등을 통하여 공동으로 이룩한 재산이 재산분할의 기초가 된다고 확인했습니다.',
        takeaway: '장기 혼인의 부양·협조 기여는 재산분할 비율 산정에서 핵심 근거로 작용할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '30년 전업주부였는데 50% 분할이 가능한가요?',
        answer:
          '<strong>장기 혼인 + 명백한 가사·양육 기여가 입증되면 50% 안팎으로 인정되는 사례가 보입니다.</strong> 다만 사건마다 결과가 달라 단정은 어렵고, 기여 입증 자료(자녀 학교·의료 기록, 가사 영수증 등)를 폭넓게 정리하는 것이 중요합니다.',
      },
      {
        question: '결혼 전 남편이 갖고 있던 부동산도 분할 대상인가요?',
        answer:
          '<strong>혼인 전 특유재산은 원칙적으로 분할 대상이 아닙니다.</strong> 다만 30년 혼인 기간 동안 본인의 기여로 가치가 유지·증식된 부분이 있다면 그 증가분에 한해 부분적으로 분할 대상으로 주장하는 절차를 검토해볼 수 있습니다.',
      },
      {
        question: '국민연금도 분할되나요?',
        answer:
          '<strong>국민연금법상 분할연금 제도가 있어 혼인기간 5년 이상이면 분할연금 신청이 가능합니다.</strong> 본인 연령 요건과 배우자 수급 요건이 모두 충족되어야 하며, 재산분할과 별도로 국민연금공단에 신청해야 합니다.',
      },
      {
        question: '시부모를 30년 간병한 기여도 인정되나요?',
        answer:
          '<strong>장기간 시부모 간병은 부양 기여로 인정될 수 있습니다.</strong> 간병 기간·내용·의료 기록·가족 진술 등을 자료로 정리해 청구 시 함께 제출하는 절차를 검토할 수 있습니다.',
      },
      {
        question: '남편이 외도해서 이혼하는데 위자료도 받을 수 있나요?',
        answer:
          '<strong>유책배우자에 대한 위자료 청구가 가능합니다.</strong> 이혼일로부터 3년 이내 청구해야 하며, 외도 입증 자료(통화·문자·사진·증인 진술)를 함께 준비합니다. 상간자에 대해서도 별도 위자료 청구를 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 비율 산정 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '이혼 공무원 연금 분할 절차', href: '/guide/divorce/divorce-public-servant-pension-split' },
      { label: '특유재산과 기여도 평가', href: '/guide/divorce/divorce-property-division-inheritance' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 4. divorce / domestic-violence-protection-order-parallel ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-protection-order-parallel',
    keyword: '가정폭력 이혼 보호명령 동시 진행',
    questionKeyword: '남편의 가정폭력으로 이혼하려는데 보호명령도 같이 받을 수 있나요?',
    ctaKeyword: '가정폭력 이혼·보호명령 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 이혼·피해자보호명령 4단계 동시 진행 절차 | 로앤가이드',
      description:
        '가정폭력 피해를 겪고 있는 배우자가 이혼 청구와 피해자보호명령을 동시에 진행하는 절차와 안전 확보 방법을 지금 확인하세요.',
    },
    intro:
      '<p>가정폭력 피해는 이혼 절차를 시작하는 것 자체가 두려운 일입니다. "소송하다 더 위험해지는 건 아닐까"라는 걱정이 가장 큽니다. 다행히 가정폭력처벌법은 피해자보호명령 제도를 두어, 이혼 소송과 별개로 즉시 격리·접근금지를 받을 수 있도록 보장하고 있습니다. 이혼·보호명령·형사고소를 병행 진행해 안전과 권리를 함께 지키는 절차를 정리해보겠습니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 가정폭력 이혼·보호명령 4단계',
        content:
          '<p><strong style="color:#1e3a5f">안전 확보를 우선하면서 이혼·보호명령·형사 절차를 병렬로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 안전 확보 (긴급 시 112 신고)</strong> — 폭력 상황에서는 112 신고. 출동 경찰의 응급조치(가해자 분리·격리)로 임시 안전 확보. 진단서·신고 접수증·사진·녹음 보관.</li>\n<li><strong>2단계 — 피해자보호명령 청구</strong> — 가정법원에 피해자보호명령 청구 가능(가정폭력처벌법 제55조). 접근금지·전기통신금지·퇴거 등을 명할 수 있으며, 임시보호명령은 신속히 결정될 수 있는 것이 일반적입니다.</li>\n<li><strong>3단계 — 이혼 청구</strong> — 가정법원에 재판이혼 청구. 민법 제840조 제3호("배우자로부터 심히 부당한 대우를 받았을 때") 또는 제6호 사유로 청구. 위자료·재산분할·친권·양육비 함께 청구.</li>\n<li><strong>4단계 — 형사고소 검토</strong> — 별도로 폭행·상해죄 고소 가능. 가정폭력처벌법 제2조 가정폭력범죄로 처벌. 임시조치(접근금지·격리)와 형사 처벌이 병행됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가정폭력 이혼·보호명령 절차와 안전 자료, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '피해자보호명령 — 6가지 보호 조치',
        content:
          '<p><strong style="color:#1e3a5f">가정폭력처벌법 제55조의2는 피해자가 직접 가정법원에 청구하는 보호명령 제도를 두고 있습니다.</strong></p>\n<ul>\n<li><strong>퇴거 등 격리</strong> — 가해자에게 피해자 또는 가족 구성원의 주거나 점유하는 방실에서 퇴거 명령.</li>\n<li><strong>주거·직장 100m 접근금지</strong> — 피해자 또는 가족의 주거·직장 등에서 일정 거리 이내 접근 금지.</li>\n<li><strong>전기통신 접근금지</strong> — 전화·문자·SNS·카톡 등 전기통신을 이용한 접근 금지.</li>\n<li><strong>친권행사 제한</strong> — 가해자가 친권자인 경우 친권 행사 제한 명령.</li>\n<li><strong>면접교섭권 제한</strong> — 자녀에 대한 면접교섭권 행사 제한.</li>\n<li><strong>임시보호명령(긴급)</strong> — 본안 결정 전 신속 결정 가능. 위반 시 형사처벌 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보호명령 위반은 가정폭력처벌법상 형사처벌 대상이 되어, 위반 발생 시 즉시 112 신고 후 위반 사실을 가정법원에 보고하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">이혼·보호명령·형사고소 모두에 공통으로 활용할 수 있는 자료입니다.</strong></p>\n<ul>\n<li><strong>가족관계 서류</strong> — 혼인관계증명서·기본증명서·가족관계증명서</li>\n<li><strong>피해 입증 자료</strong> — 진단서(상해 부위·치료 일수)·병원 진료 기록·약 처방전·신체 사진(부상 부위, 날짜 표시)</li>\n<li><strong>폭력 정황 자료</strong> — 112 신고 접수번호·경찰 출동 기록·녹음·문자·메신저 캡처(폭언·협박)</li>\n<li><strong>증인 진술</strong> — 자녀·이웃·친지 등 목격자의 서면 진술서</li>\n<li><strong>안전 계획 자료</strong> — 가해자 회피 가능한 임시 거주지(가족·친지 주소·여성긴급전화 1366 연계 쉼터 정보)</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폭력 발생 시점·장소·내용을 시간 순으로 기록한 일지가 보호명령과 이혼 소송에서 결정적 입증 자료가 됩니다.</blockquote>',
      },
      {
        title: '안전 확보 — 무료 지원 기관 안내',
        content:
          '<p><strong style="color:#1e3a5f">가정폭력 피해자에게는 다양한 무료 지원 제도가 마련되어 있습니다.</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담·긴급 보호·쉼터 연계. 신변 위협 시 즉시 도움 요청 가능.</li>\n<li><strong>해바라기센터</strong> — 폭력 피해자 대상 의료·심리·법률·수사 지원을 한 곳에서 통합 제공.</li>\n<li><strong>가정폭력 보호시설(쉼터)</strong> — 가해자 분리 + 안전 거주 + 자녀 동반 가능. 1366을 통해 연계.</li>\n<li><strong>대한법률구조공단(132)</strong> — 가정폭력 피해자 무료 법률 상담 및 소송 지원. 보호명령·이혼 청구 대리도 검토 가능.</li>\n<li><strong>국선변호사 지정</strong> — 가정폭력처벌법상 피해자에게 국선변호사 지정 가능. 형사 절차에서 도움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 1366·132는 무료 상담 창구입니다. 변호사 사선 상담은 비용이 들 수 있으므로, 무료 기관 활용을 우선 검토해보시는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당한 대우와 이혼사유',
        summary:
          '대법원 2020므14763 사건(대법원, 2021.03.25 선고)에서 법원은 민법 제840조 제3호에서 정한 이혼사유인 "배우자로부터 심히 부당한 대우를 받았을 때"의 의미와 제6호 "혼인을 계속하기 어려운 중대한 사유가 있을 때"의 판단 기준을 정리하면서, 가정폭력 등 부당한 대우가 이혼사유로 인정되는 근거를 확인했습니다.',
        takeaway: '가정폭력은 민법 제840조 제3호·제6호 이혼사유에 해당할 수 있어 재판이혼 청구 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '보호명령을 받기 전에 형사고소를 먼저 해야 하나요?',
        answer:
          '<strong>형사고소와 보호명령은 별개 절차로, 어느 한쪽이 선행 요건은 아닙니다.</strong> 안전 확보가 급하면 보호명령을 먼저 청구하고, 처벌이 필요하다면 형사고소를 별도로 진행하는 절차를 검토해볼 수 있습니다. 두 절차는 동시 진행 가능합니다.',
      },
      {
        question: '진단서가 없으면 가정폭력 입증이 어렵나요?',
        answer:
          '<strong>진단서는 강력한 입증 자료지만 유일한 자료는 아닙니다.</strong> 신고 접수번호·경찰 출동 기록·녹음·문자·증인 진술 등을 종합해 입증할 수 있습니다. 폭력 발생 직후 병원 진료를 받아두는 것이 안전합니다.',
      },
      {
        question: '자녀가 함께 있는데 보호명령으로 안전을 지킬 수 있나요?',
        answer:
          '<strong>보호명령에는 자녀에 대한 친권 행사 제한·면접교섭 제한·접근금지가 포함될 수 있습니다.</strong> 자녀 동반 입소가 가능한 가정폭력 보호시설(쉼터)도 1366을 통해 연계받을 수 있습니다.',
      },
      {
        question: '가해자가 보호명령을 위반하면 어떻게 되나요?',
        answer:
          '<strong>보호명령 위반은 가정폭력처벌법상 형사처벌 대상입니다.</strong> 위반 즉시 112 신고와 함께 가정법원에 위반 사실을 보고하는 것이 중요하며, 추가 임시조치 또는 본안 보호명령 강화로 이어질 수 있습니다.',
      },
      {
        question: '이혼 소송 중 가해자가 협박하면 어떻게 대응하나요?',
        answer:
          '<strong>가정법원에 임시보호명령 추가 청구를 신청하거나, 별도로 형사고소를 검토할 수 있습니다.</strong> 협박 내용은 즉시 녹음·캡처 보관하고, 여성긴급전화 1366에 상담을 받아 안전 계획을 보강하는 절차를 검토해보세요.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '가정폭력 이혼·보호조치 가이드', href: '/guide/divorce/domestic-violence-divorce-protection' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
      { label: '정신적 학대 입증 자료 정리', href: '/guide/divorce/divorce-mental-abuse-evidence-collection' },
      { label: '이혼 후 위자료 청구 시효', href: '/guide/divorce/divorce-alimony-claim-deadline' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
    ],
  },
];
