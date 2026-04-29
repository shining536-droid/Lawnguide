import { SpokePage } from '../spoke-pages';

// batch50 divorce 4 + inheritance 4 = 8개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 외국인 배우자와 결혼한 한국인이 국제이혼 관할·송달·외국 판결 승인을 정리해 한국 법원에서 이혼 절차를 진행하도록 돕는 페이지다.
// 2. 이 페이지는 혼전 재산계약·재산분할 약정을 미리 체결한 부부가 이혼 단계에서 약정 효력 다툼을 정리하고 강행규정 위반 여부를 검토하도록 돕는 페이지다.
// 3. 이 페이지는 이혼을 앞둔 배우자가 국민연금 분할연금 수급 요건과 신청 절차를 정리해 60세 이후 분할연금 청구를 누락하지 않도록 돕는 페이지다.
// 4. 이 페이지는 재혼 가정에서 의붓자녀(전 배우자 자녀) 양육권·면접교섭권을 다투는 사람이 입양 관계 정비와 친권 확정 절차를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 피상속인이 차명계좌·은닉자산을 남긴 의심이 있는 상속인이 사실조회·금융정보조회·유류분반환청구 절차를 정리해 숨은 재산을 찾도록 돕는 페이지다.
// 6. 이 페이지는 가업 주식·자산을 상속받게 된 가업승계인이 가업상속공제 600억 한도와 10년 사후관리 요건을 정리해 상속세 절세 신청을 누락하지 않도록 돕는 페이지다.
// 7. 이 페이지는 자선단체·공익법인 유언기부를 받았거나 다투는 사람이 유증·사인증여 효력과 유류분 침해 여부를 정리하도록 돕는 페이지다.
// 8. 이 페이지는 해외자산(외화예금·해외부동산)을 상속받은 상속인이 6개월 신고기한·외환신고·증여세협약을 정리해 신고 누락 가산세를 피하도록 돕는 페이지다.

export const spokesBatch50DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce / international-jurisdiction-spouse ───
  {
    domain: 'divorce',
    slug: 'divorce-international-jurisdiction-spouse',
    keyword: '국제이혼 관할',
    questionKeyword: '외국인 배우자와 한국에서 이혼하려면 어떻게 진행하나요?',
    ctaKeyword: '국제이혼 관할·송달 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '국제이혼 외국인 배우자 관할·송달 절차 4단계 | 로앤가이드',
      description:
        '외국인 배우자와의 이혼에서 한국 법원 관할 인정 기준과 해외 송달, 외국 판결 승인 절차를 정리해야 할지 막막하실 거예요. 지금 확인하세요.',
    },
    intro:
      '<p>국제결혼 후 이혼을 결심하면 "한국에서 소송이 가능한지, 외국인 배우자에게 어떻게 송달하는지, 본국 판결을 한국에서 인정받을 수 있는지" 같은 절차 문제가 먼저 떠오릅니다. 국제사법 제2조·제66조는 가사사건에도 실질적 관련이 있으면 한국 법원 관할을 인정하고, 외국 판결 승인은 민사소송법 제217조 요건을 충족해야 합니다. 어떤 단계로 검토하면 좋은지 정리해보겠습니다.</p>',
    sections: [
      {
        title: '한국 법원 관할이 인정되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">국제사법 제2조에 따라 사건과 한국에 실질적 관련이 있으면 한국 법원이 관할권을 가질 수 있습니다.</strong></p>\n<ul>\n<li><strong>관할 인정 사례 — 부부 마지막 주소지가 한국</strong> — 부부가 한국에 주소지를 두고 살다 외국인 배우자가 출국한 경우. 한국 법원 관할 인정 가능성이 높습니다.</li>\n<li><strong>관할 인정 사례 — 한국인 배우자 거주지</strong> — 외국인 배우자가 한국에 거주 중이거나 한국에 자녀를 두고 있다면 한국 관할 인정 폭이 넓어집니다.</li>\n<li><strong>관할 인정 사례 — 응소 관할</strong> — 외국인 배우자가 소장 부본을 적법하게 송달받고 적극적으로 응소했다면 관할 인정에 긍정적으로 고려될 수 있습니다.</li>\n<li><strong>관할 부정 가능성 — 양 당사자 모두 외국 거주</strong> — 한국과의 실질적 관련이 약하면 한국 관할이 부정될 소지가 있어 본국 또는 거주국 법원에서 진행해야 할 수 있습니다.</li>\n<li><strong>준거법</strong> — 국제사법 제66조에 따라 부부 공통 본국법, 공통 일상거소지법, 가장 밀접한 관련국법 순으로 적용됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한국에서 소를 제기하더라도 외국인 배우자가 본국에서 별도 이혼 소송을 제기하면 국제 이중소송 문제가 생길 수 있어 시기 조율이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 국제이혼 4단계',
        content:
          '<p><strong style="color:#1e3a5f">관할 검토 → 해외 송달 → 본안 진행 → 외국 판결 승인 흐름으로 정리됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관할·준거법 검토 (소 제기 전)</strong> — 한국 법원 관할 여부를 국제사법 제2조 기준으로 점검. 부부 마지막 주소지·자녀 거주지·재산 소재지 자료 정리.</li>\n<li><strong>2단계 — 조정신청 + 해외 송달 (3~6개월)</strong> — 가정법원에 조정 신청. 외국 거주 배우자에게 헤이그 송달협약(가입국)·영사 송달 또는 공시송달로 진행. 통상 송달에만 3~6개월 소요됩니다.</li>\n<li><strong>3단계 — 본안 변론·판결 (6개월~1년+)</strong> — 조정 불성립 시 본안 진행. 통역·번역공증이 필요할 수 있어 일정이 길어질 수 있습니다. 통상 외도·유기 입증을 함께 정리.</li>\n<li><strong>4단계 — 외국 판결 승인·집행 (필요 시)</strong> — 본국에서 받은 판결을 한국에서 활용하려면 민사소송법 제217조 승인 요건(상호 보증·송달 적법 등) 검토. 한국 법원 승인 결정 후 집행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">국제이혼 관할·송달·승인 절차와 필요 서류, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">국제이혼은 일반 이혼보다 번역공증·아포스티유 자료가 추가로 필요합니다.</strong></p>\n<ul>\n<li><strong>신분 자료</strong> — 본인 가족관계증명서·혼인관계증명서·기본증명서 / 외국인 배우자 여권 사본·외국인등록증·본국 신분증명서</li>\n<li><strong>혼인 입증 자료</strong> — 국제결혼 신고서·외국 혼인증명서(아포스티유 또는 영사인증) + 한국어 번역공증</li>\n<li><strong>주소·거주 자료</strong> — 부부 주민등록등본·외국인 배우자 거주지 입증서류·항공권/체류허가 자료(관할 입증용)</li>\n<li><strong>이혼 사유 자료</strong> — 부정행위·유기 입증자료(메시지·녹취·진단서)·자녀 양육 현황 자료</li>\n<li><strong>해외 송달 자료</strong> — 헤이그 송달협약 가입국 여부 확인·외국인 배우자 정확한 주소·통역료 예치금</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국인 배우자가 헤이그 송달협약 비가입국에 거주하면 영사송달·공시송달이 필요해 송달에만 6개월~1년이 걸릴 수 있습니다. 일정에 여유를 두고 신청하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 국제이혼에서 자주 막히는 지점',
        content:
          '<p><strong style="color:#1e3a5f">관할·송달·준거법·승인 4가지 단계에서 절차가 복잡해질 수 있습니다.</strong></p>\n<ul>\n<li><strong>관할 부정</strong> — 외국인 배우자가 한국에 거주하지 않고 자녀도 본국에 있다면 한국 관할이 부정될 수 있어 본국 진행이 빠를 수도.</li>\n<li><strong>송달 지연</strong> — 헤이그 송달협약 비가입국·주소 불명일 때 공시송달까지 6개월 이상 걸릴 수 있어 일정이 지연됩니다.</li>\n<li><strong>준거법 적용</strong> — 부부 공통 본국법이 적용될 수 있어 한국법과 다른 결과(예: 외도 위자료 인정 범위)가 나올 소지가 있습니다.</li>\n<li><strong>외국 판결 승인 거부</strong> — 본국 판결을 한국에서 활용하려면 민사소송법 제217조 요건 미충족 시 승인이 거부될 수 있어 주의.</li>\n<li><strong>변호사 상담을 검토해보세요</strong> — 국제이혼은 통역·번역·송달 비용이 추가되어 사선 변호사 조력이 도움이 됩니다. 무료 상담은 대한법률구조공단(132)에서 확인 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 본국에서 먼저 이혼 판결을 받고도 한국 가족관계등록부에 반영이 안 된 경우가 많습니다. 한국에서 별도 승인 절차를 거쳐야 정정이 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가사사건 국제재판관할 인정 기준',
        summary:
          '대법원 2018스34 사건(대법원, 2021.02.04 선고)에서 법원은 국제사법 제2조가 가사사건에도 적용되며 \'실질적 관련의 유무\'를 판단할 때 당사자의 거주지·재산 소재지·자녀 양육지 등 사건과 법정지의 관련성을 종합 고려해야 하고, 피고가 소장 부본을 적법하게 송달받고 적극적으로 응소한 사정을 대한민국 법원의 관할권을 인정하는 데 긍정적으로 고려할 수 있다고 판시했습니다.',
        takeaway: '한국과의 실질적 관련성 + 응소 사정이 한국 관할 인정의 핵심 기준으로 작동합니다.',
      },
    ],
    faq: [
      {
        question: '외국인 배우자가 본국에 가버렸는데 한국에서 이혼이 가능한가요?',
        answer:
          '<strong>부부의 마지막 주소지가 한국이거나 자녀가 한국에 있다면 한국 관할이 인정될 가능성이 높습니다.</strong> 송달이 까다롭지만 영사송달·공시송달로 진행할 수 있습니다.',
      },
      {
        question: '본국에서 받은 이혼 판결은 한국에서 자동 인정되나요?',
        answer:
          '<strong>자동은 아닙니다. 민사소송법 제217조 승인 요건을 충족해야 합니다.</strong> 상호 보증·적법한 송달·공서양속 위반 없음 등을 확인 후 한국 법원에서 승인 결정을 받아야 가족관계등록부에 반영됩니다.',
      },
      {
        question: '재산이 외국에 있으면 분할은 어떻게 하나요?',
        answer:
          '<strong>한국 법원에서 분할 판결을 받았더라도 외국 자산에 대한 집행은 그 나라 절차를 따라야 합니다.</strong> 해당국과 한국 사이의 상호 승인 협정이 있는지 검토가 필요합니다.',
      },
      {
        question: '국제이혼은 보통 얼마나 걸리나요?',
        answer:
          '<strong>송달이 핵심 변수로 평균 1년~1년 6개월이 자주 보입니다.</strong> 헤이그 협약 가입국이면 단축이 가능하고, 비가입국·주소 불명이면 더 길어질 수 있어 일정에 여유가 필요합니다.',
      },
      {
        question: '국제이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 다문화가족지원센터(1577-1366)에서도 외국인 배우자 대상 상담이 가능하고, 사선 변호사 조력은 비용이 들지만 통역·번역까지 묶어 진행할 수 있어 효율적일 수 있습니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '외도 부인 배우자 증거 보강', href: '/guide/divorce/divorce-affair-denial-evidence-strengthening' },
      { label: '양육비 미지급 강제집행 절차', href: '/guide/divorce/child-support-enforcement-process' },
      { label: '사실혼 파기 위자료 청구 절차', href: '/guide/divorce/divorce-de-facto-marriage-alimony-claim' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 2. divorce / prenup-property-validity ───
  {
    domain: 'divorce',
    slug: 'divorce-prenup-property-validity',
    keyword: '혼전 재산계약 효력',
    questionKeyword: '결혼 전에 작성한 재산분할 약정도 이혼 시 효력이 있나요?',
    ctaKeyword: '혼전계약·재산분할 약정 효력 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '혼전 재산계약 효력 분쟁 4가지 쟁점 정리 | 로앤가이드',
      description:
        '결혼 전에 작성한 재산분할 약정이 이혼 시 그대로 인정되는지 막막하실 거예요. 민법 제829조 등기·강행규정 위반 사례와 효력 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>요즘은 결혼 전에 "재산은 각자 명의를 유지한다", "이혼 시 분할하지 않는다" 같은 혼전 재산계약을 작성하는 부부가 늘고 있습니다. 그런데 막상 이혼이 현실이 되면 "이 약정이 그대로 인정될까?" 의문이 듭니다. 민법 제829조 부부재산계약 등기 요건, 강행규정 위반 여부, 재산분할청구권 사전 포기의 한계 등을 함께 검토하면 효력 다툼의 윤곽이 보입니다.</p>',
    sections: [
      {
        title: 'Q. 혼전에 작성한 재산계약은 무조건 효력이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 민법 제829조 등기 요건을 충족해야 제3자 대항력이 있고, 강행규정 위반이면 무효가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>부부재산계약 (민법 제829조)</strong> — 혼인 성립 전에 부부재산에 관한 약정을 한 경우, 혼인신고 전 등기해야 제3자에 대항할 수 있습니다.</li>\n<li><strong>등기 누락 시 한계</strong> — 등기하지 않으면 부부 사이에서만 효력이 있을 수 있고, 채권자 등 제3자에게는 주장 어려운 경우가 많습니다.</li>\n<li><strong>강행규정 위반 무효</strong> — 부양·협조의무 면제, 양육비 사전 포기 등 강행규정 위반 조항은 효력이 인정되지 않을 소지가 큽니다.</li>\n<li><strong>이혼 후 재산분할청구권 사전 포기</strong> — 이혼 후 재산분할청구권을 결혼 전에 미리 포기하는 약정은 원칙적으로 인정되지 않는다는 판례 경향.</li>\n<li><strong>실무 활용</strong> — 부부 사이의 재산 관리 기준·비용 분담·특유재산 명시 등 \'운영 규칙\'으로는 효과가 있어 자료로 활용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼전 계약은 등기 + 강행규정 미위반이라는 두 축을 충족해야 안정적입니다. 단순 사문서로 작성된 계약은 효력 다툼이 잦습니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 조항은 효력이 인정되고 어떤 조항은 무효인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 부부 자치 영역은 인정될 수 있지만, 강행규정·공서양속 위반은 무효 가능성이 큽니다.</strong></p>\n<ol>\n<li><strong>① 효력 인정 가능 — 특유재산 명시</strong> — "결혼 전 보유 재산은 분할 대상에서 제외한다"는 조항. 등기 + 자료 입증 시 인정 폭이 넓음.</li>\n<li><strong>② 효력 인정 가능 — 생활비 분담 비율</strong> — "생활비는 50:50 분담" 같은 운영 규칙. 부부 자치 영역으로 인정될 소지.</li>\n<li><strong>③ 효력 인정 가능 — 가사노동 가치 평가</strong> — "전업주부 기여도를 50%로 평가" 같은 사전 합의. 재산분할 비율 산정에 참작될 수 있습니다.</li>\n<li><strong>④ 무효 가능성 — 재산분할청구권 사전 포기</strong> — "이혼 시 재산분할을 청구하지 않는다" 약정은 협의이혼 단계 직전이 아니면 무효될 가능성이 큽니다.</li>\n<li><strong>⑤ 무효 가능성 — 양육비·친권 사전 포기</strong> — 자녀 복리 침해 조항(양육비 면제·친권 사전 포기 등)은 강행규정 위반으로 효력 없습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">혼전 계약 조항별 효력과 다툼 포인트, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 효력 다툼이 생기면 어떤 단계로 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원에서 재산분할 심판을 청구하면서 약정 효력 여부를 함께 다투는 흐름이 일반적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정서·등기 자료 정리</strong> — 혼전 계약 원본·작성 경위·증인·등기 여부 확인. 등기 없으면 부부 간 효력에 한정될 수 있음 인지.</li>\n<li><strong>2단계 — 조정신청 (가정법원)</strong> — 이혼 + 재산분할 청구 시 약정 효력 여부를 조정 단계에서 다툼. 조정 성립 시 약정 일부 수정·승인 가능.</li>\n<li><strong>3단계 — 본안 심판</strong> — 조정 불성립 시 본안 변론. 약정 효력은 강행규정 위반·공서양속 위반·등기 여부 종합 판단.</li>\n<li><strong>4단계 — 항소·상고 검토</strong> — 1심 판단에 불복 시 항소·상고. 약정 효력은 사실관계가 핵심이므로 자료 보강이 결정적.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼전 계약 작성 시 변호사 조력으로 등기·강행규정 검토를 함께 받으면 다툼 시 효력 인정 가능성이 크게 올라갑니다.</blockquote>',
      },
      {
        title: 'Q. 약정이 무효가 되어도 영향이 남나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정 자체는 무효라도 부부 의사·재산 관리 자료로 재산분할 비율 산정에 참작될 수 있습니다.</strong></p>\n<ul>\n<li><strong>비율 산정 자료</strong> — 약정에 명시된 기여도·자금 분담 비율은 재산분할 비율 결정 시 참작 사정 중 하나.</li>\n<li><strong>특유재산 입증</strong> — 등기 없는 사문서 약정도 결혼 전 보유 재산임을 증명하는 자료로 활용 가능.</li>\n<li><strong>위자료 산정</strong> — 약정 위반 행위가 위자료 산정 시 참작될 수 있는 경우도 있습니다.</li>\n<li><strong>재산분할청구권 사후 포기는 가능</strong> — 협의이혼 직전 단계에서의 포기 합의는 인정되는 경향. 사후 협의는 가능성이 큼.</li>\n<li><strong>변호사 상담 검토</strong> — 약정 효력 다툼은 사실관계 의존도가 높아 사건별 검토가 안전. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "약정이 무효라서 의미 없겠지"라고 판단하면 손해입니다. 무효 약정도 비율 산정·기여도 입증에 활용될 수 있어 자료로 보존해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할청구권 사전 포기 효력',
        summary:
          '대법원 2013므2250 사건(대법원, 2016.01.29 선고)에서 법원은 재산분할청구권을 혼인이 해소되기 전에 미리 포기하는 것은 허용되지 않으며, 아직 이혼하지 않은 당사자가 장차 협의상 이혼할 것을 합의하는 과정에서 이를 전제로 재산분할청구권을 포기하는 서면을 작성한 경우에도 원칙적으로 재산분할에 관한 협의로서의 포기약정으로 보기 어렵다고 판시했습니다.',
        takeaway: '혼인 해소 전 재산분할청구권 사전 포기는 원칙적으로 인정되지 않아, 혼전 계약의 효력 한계를 미리 인지해야 합니다.',
      },
    ],
    faq: [
      {
        question: '결혼 전에 변호사 입회 하에 작성한 약정도 무효일 수 있나요?',
        answer:
          '<strong>변호사 입회 자체가 효력을 보장하지는 않습니다.</strong> 등기·강행규정 위반 여부가 핵심이며, 강행규정 위반 조항은 변호사가 입회했더라도 무효될 수 있습니다.',
      },
      {
        question: '약정 등기는 어떻게 하나요?',
        answer:
          '<strong>혼인신고 전에 부부재산계약등기소(가정법원)에 신청해야 합니다.</strong> 혼인신고 후에는 부부재산계약 등기 자체가 어려워질 수 있어 시기 관리가 중요합니다.',
      },
      {
        question: '약정 내용을 결혼 후 변경할 수 있나요?',
        answer:
          '<strong>원칙적으로 혼인 중에는 부부재산계약을 변경하기 어렵습니다(민법 제829조 제2항).</strong> 다만 부부재산제도가 정상적으로 운영되지 않는 등 특별 사유 시 가정법원 허가를 거쳐 변경 가능.',
      },
      {
        question: '외국에서 작성한 prenup도 한국에서 효력이 있나요?',
        answer:
          '<strong>국제사법 제65조 등에 따라 부부재산제 준거법이 정해집니다.</strong> 외국법 기준 작성·등기된 약정도 한국에서 일정 요건 충족 시 인정될 수 있어 사건별 검토가 필요합니다.',
      },
      {
        question: '혼전 계약에 변호사 도움이 꼭 필요한가요?',
        answer:
          '<strong>강행규정·등기 검토를 위해 변호사 조력이 권장됩니다.</strong> 무료 상담은 대한법률구조공단(132)에서 받을 수 있고, 사선 변호사 조력은 효력 인정 가능성을 크게 높일 수 있습니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '특유재산 재산분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '재산분할 비율 산정 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 3. divorce / pension-split-formula ───
  {
    domain: 'divorce',
    slug: 'divorce-pension-split-formula',
    keyword: '국민연금 분할연금 신청',
    questionKeyword: '이혼 후 배우자 국민연금을 나눠 받을 수 있나요?',
    ctaKeyword: '국민연금 분할연금 신청 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '국민연금 분할연금 신청 4가지 요건과 절차 | 로앤가이드',
      description:
        '이혼한 배우자의 국민연금 분할 수령이 가능한지 막막하실 거예요. 혼인 5년·60세 요건과 분할연금 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>이혼하면서 "배우자 국민연금도 나눠 받을 수 있을까?" 궁금해하시는 분들이 많습니다. 국민연금법 제64조는 일정 요건을 충족한 이혼 배우자에게 분할연금 청구권을 인정하고 있어 60세 이후 평생 일정 비율을 받을 수 있습니다. 다만 혼인기간 5년 이상·이혼·60세 도달·상대방 노령연금 수급 4가지 요건이 모두 충족되어야 신청이 가능합니다.</p>',
    sections: [
      {
        title: '분할연금 4가지 수급 요건',
        content:
          '<p><strong style="color:#1e3a5f">국민연금법 제64조에 따라 4가지 요건이 모두 충족되어야 분할연금 청구권이 인정됩니다.</strong></p>\n<ul>\n<li><strong>① 혼인기간 5년 이상</strong> — 가입 기간 중 혼인기간이 5년 이상이어야 합니다. 사실혼 기간도 국민연금공단에서 사실혼 등록 시 포함될 수 있습니다.</li>\n<li><strong>② 이혼 (또는 사실혼 해소)</strong> — 이혼 사실이 가족관계등록부에 기재되어야 합니다. 사실혼 해소도 입증 시 인정될 소지가 있습니다.</li>\n<li><strong>③ 본인 60세 도달</strong> — 분할연금은 본인이 노령연금 수급 연령(통상 60~65세)에 도달해야 신청 가능. 조기 신청은 불가.</li>\n<li><strong>④ 상대방(전 배우자) 노령연금 수급권 발생</strong> — 전 배우자가 노령연금 수급 자격을 갖췄거나 수급 중이어야 합니다.</li>\n<li><strong>분할 비율</strong> — 원칙은 혼인기간 중 가입 기간에 해당하는 노령연금액의 50%. 협의·재판으로 별도 비율 결정 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분할연금은 한 번 신청하면 평생 지급되어 노후 보장 효과가 큽니다. 이혼 후 60세 도달 시점에 신청을 잊지 않는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 분할연금 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">국민연금공단 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 수급권 발생 시점 확인 (이혼 후 60세 도달)</strong> — 본인 노령연금 수급 연령 도달 + 전 배우자 노령연금 수급 시점 확인. 둘 중 늦은 시점이 분할연금 청구 가능 시점.</li>\n<li><strong>2단계 — 청구권 발생 후 5년 이내 신청 (시효 주의)</strong> — 분할연금 수급권 발생일부터 5년 이내에 청구하지 않으면 시효 소멸 가능. 60세 도달 후 즉시 신청이 안전.</li>\n<li><strong>3단계 — 국민연금공단 방문·온라인 신청</strong> — 가까운 국민연금공단 지사 또는 \'내 곁에 국민연금\' 앱·홈페이지에서 신청. 가족관계증명서·이혼 입증 자료 첨부.</li>\n<li><strong>4단계 — 연금 분할 비율 결정 확인</strong> — 이혼 시 협의·심판으로 별도 비율을 결정한 경우 그 비율 적용. 별도 결정 없으면 50% 기본 적용.</li>\n<li><strong>5단계 — 매월 분할연금 수령</strong> — 결정 후 본인 계좌로 매월 분할연금 입금. 본인 사망 시까지 계속 수령.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">분할연금 신청 자료와 비율 결정 방법, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신분 자료 + 혼인 자료 + 이혼 자료 3가지 묶음으로 준비합니다.</strong></p>\n<ul>\n<li><strong>신분 자료</strong> — 본인 신분증·통장 사본·기본증명서</li>\n<li><strong>혼인·이혼 자료</strong> — 혼인관계증명서(혼인 시작일·종료일 표시)·가족관계증명서</li>\n<li><strong>분할 비율 자료</strong> — 협의이혼서 또는 재판 판결문(연금분할 별도 결정 시)·재산분할 합의서</li>\n<li><strong>국민연금 가입 자료</strong> — 본인 가입증명·전 배우자 가입 사실 확인(공단 조회 가능)</li>\n<li><strong>신청서</strong> — 분할연금 지급 청구서(국민연금공단 양식)</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 시 재산분할 합의에서 \'국민연금 분할 비율을 별도 결정\'한 자료가 있으면 분할연금 비율이 그대로 적용됩니다. 재산분할 단계에서 함께 협의해두면 편리합니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 분할연금 신청에서 놓치는 부분',
        content:
          '<p><strong style="color:#1e3a5f">시효 도과·요건 미충족·비율 다툼이 자주 발생합니다.</strong></p>\n<ul>\n<li><strong>5년 시효 도과</strong> — 수급권 발생일부터 5년 이내 청구하지 않으면 시효 소멸. 60세 도달 즉시 청구가 안전.</li>\n<li><strong>혼인기간 5년 미만</strong> — 가입기간 중 혼인기간이 5년 미만이면 분할연금 신청 자체가 어려울 수 있음.</li>\n<li><strong>전 배우자 노령연금 미수급</strong> — 전 배우자가 노령연금 수급 자격을 아직 갖추지 못했다면 분할연금 청구 불가. 양쪽 모두 60세 이상 + 가입 10년 이상 충족 필요.</li>\n<li><strong>분할 비율 다툼</strong> — 50%가 원칙이지만 재산분할 협의·심판에서 별도 결정한 경우 그 비율 적용. 별도 결정 시 자료를 명확히 보관해야.</li>\n<li><strong>변호사 상담 검토</strong> — 분할연금 비율 다툼이 큰 사건은 사선 변호사 조력이 도움. 무료 상담은 국민연금공단(1355)·법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "이혼하면 자동으로 분할연금이 나오겠지"라는 오해가 많습니다. 본인이 60세 도달 후 직접 신청해야 지급이 시작됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 분할연금 비율 별도 결정 효력',
        summary:
          '대법원 2022두42228 관련 사건 흐름과 함께 분할연금 비율을 이혼 및 재산분할 절차에서 별도 결정한 경우 그 결정이 우선 적용되는지 다툰 사건이 다수 있습니다. 대법원 2017두52207 사건(대법원, 2019.06.13 선고)에서는 협의이혼이나 재판상 이혼 절차에서 국민연금법상 연금 분할에 관하여 별도로 결정되었는지 여부를 종합 고려해야 한다고 정리한 바 있습니다.',
        takeaway: '이혼 시 재산분할 협의에서 분할연금 비율을 별도로 정해두면 50% 기본 비율 대신 협의 비율이 그대로 적용될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '이혼 직후에 바로 분할연금을 받을 수 있나요?',
        answer:
          '<strong>본인이 60세에 도달하기 전에는 받을 수 없습니다.</strong> 이혼 후 본인 노령연금 수급 연령 도달 + 전 배우자 노령연금 수급권 발생이라는 두 시점이 모두 충족되어야 청구 가능합니다.',
      },
      {
        question: '재혼하면 분할연금이 끊기나요?',
        answer:
          '<strong>재혼 사실 자체로 끊기지는 않습니다.</strong> 분할연금은 본인 사망 시까지 지급되며, 재혼은 원칙적으로 영향을 미치지 않습니다(노령연금 수급권자 사망 시 일부 영향 가능).',
      },
      {
        question: '사실혼이었는데도 분할연금이 가능한가요?',
        answer:
          '<strong>국민연금공단에 사실혼 사실을 등록·입증하면 인정될 수 있습니다.</strong> 사실혼 등록 자료·동거 입증 자료가 있으면 사실혼 기간도 혼인기간 산정에 포함될 소지가 있습니다.',
      },
      {
        question: '분할 비율을 50%가 아닌 다른 비율로 정할 수 있나요?',
        answer:
          '<strong>이혼 협의·재판에서 별도 비율을 결정하면 그 비율이 적용됩니다.</strong> 재산분할 합의서에 "국민연금 분할 비율 60:40" 같이 명시하면 50% 기본 적용 대신 협의 비율 우선.',
      },
      {
        question: '분할연금 무료 상담은 어디서 받나요?',
        answer:
          '<strong>국민연금공단 콜센터(1355) 또는 가까운 지사에서 무료 상담을 받을 수 있습니다.</strong> 분할 비율 다툼은 대한법률구조공단(132)·가사 전문 변호사 상담을 검토해보세요.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 비율 산정 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '특유재산 재산분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 4. divorce / step-child-custody-claim ───
  {
    domain: 'divorce',
    slug: 'divorce-step-child-custody-claim',
    keyword: '의붓자녀 양육권',
    questionKeyword: '재혼해서 키운 의붓자녀의 양육권·면접교섭권을 청구할 수 있나요?',
    ctaKeyword: '의붓자녀 양육권·면접교섭권 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '재혼 의붓자녀 양육권·면접교섭권 5가지 정리 | 로앤가이드',
      description:
        '재혼 가정에서 의붓자녀 양육권·면접교섭권 다툼이 막막하실 거예요. 입양 여부와 친권 관계에 따른 청구 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>재혼 가정에서 의붓자녀(전 배우자 자녀)를 친자녀처럼 키워온 경우 이혼 단계에서 "양육권을 청구할 수 있을까, 면접교섭권은 인정될까"라는 질문이 자주 떠오릅니다. 친양자 입양·일반 입양 여부에 따라 권리가 크게 달라지고, 입양이 없었다면 친권자(생부모)와의 관계가 우선합니다. 입양 관계 정비와 청구 가능성을 함께 정리해보겠습니다.</p>',
    sections: [
      {
        title: 'Q. 의붓자녀에게 양육권을 행사할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 입양 여부에 따라 결과가 크게 달라집니다.</strong></p>\n<ul>\n<li><strong>친양자 입양 (민법 제908조의2)</strong> — 가정법원 허가로 친양자 입양된 경우 친자녀와 동일한 친권·양육권. 양부모로서 양육권 청구 가능.</li>\n<li><strong>일반 입양</strong> — 양부모와 친부모 모두 친권 보유. 이혼 시 양육권 다툼 가능하지만 친생부모와 비교 검토.</li>\n<li><strong>입양 없음 — 사실상 양육</strong> — 친권자는 생부모. 이혼 시 양부모(의붓부모)는 양육권 청구가 어려운 경우가 많음.</li>\n<li><strong>면접교섭권</strong> — 입양이 없었더라도 자녀 복리에 부합하면 가정법원이 면접교섭권을 인정할 수 있다는 견해(자녀 정서적 안정 고려).</li>\n<li><strong>실무 핵심</strong> — 재혼 시점부터 입양 여부를 명확히 정리해두는 것이 후일 양육권 다툼의 출발점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의붓자녀 양육권의 출발점은 "입양 관계가 있었는가"입니다. 입양이 없었다면 친생부모의 친권이 우선합니다.</blockquote>',
      },
      {
        title: 'Q. 친양자 입양과 일반 입양은 어떻게 다른가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 친양자 입양은 친생부모와의 관계가 단절되고, 일반 입양은 양가 관계가 모두 유지됩니다.</strong></p>\n<ol>\n<li><strong>① 친양자 입양 (민법 제908조의2)</strong> — 가정법원 허가 + 친생부모 동의 + 자녀 복리 인정 시 성립. 친생부모와의 친자관계 종료, 양부모와 친자관계 형성.</li>\n<li><strong>② 일반 입양 (민법 제866조 이하)</strong> — 입양 신고로 성립. 양부모와 친자관계 형성되지만 친생부모와의 관계도 유지(친생부모 부양·상속 관계 존속).</li>\n<li><strong>③ 효과 차이 — 양육권</strong> — 친양자: 양부모가 단독 친권자. 일반 입양: 양부모·친부모 모두 친권자(이혼 시 양육권 다툼 가능).</li>\n<li><strong>④ 효과 차이 — 상속</strong> — 친양자: 양가에서만 상속. 일반 입양: 양가·친가 모두에서 상속 가능.</li>\n<li><strong>⑤ 입양 미진행 시</strong> — 단순 동거·재혼 자녀로는 친권·양육권이 발생하지 않음. 의붓부모는 사실상 양육인일 뿐 법적 양육권 없음.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">의붓자녀 양육권·면접교섭권 청구 자료와 절차, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 입양 없이 키워온 자녀에 대해 면접교섭권만 청구할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀 복리 관점에서 가정법원이 인정할 소지가 있어 사건별 검토가 필요합니다.</strong></p>\n<ul>\n<li><strong>친권자가 아닌 사람의 면접교섭권</strong> — 민법 제837조의2는 부모와 자녀 사이의 면접교섭권을 규정하지만, 의붓부모도 자녀 복리 관점에서 인정될 가능성이 있다는 실무 경향.</li>\n<li><strong>인정 자료</strong> — 동거 기간·양육 기여도·자녀 정서적 유대·자녀 의사 등이 핵심 판단 자료.</li>\n<li><strong>제3자 면접교섭권</strong> — 조부모·친족 등 제3자도 자녀 복리에 부합하면 면접교섭권을 인정받은 사례가 있어 의붓부모도 유추 적용 가능성.</li>\n<li><strong>한계</strong> — 친생부모가 강하게 반대하면 자녀 정서적 갈등 우려로 인정이 어려워질 수 있음.</li>\n<li><strong>합의 우선</strong> — 가정법원 결정 전에 친생부모와 면접교섭 합의를 도모하는 것이 자녀 복리·갈등 최소화에 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자녀가 일정 연령(통상 만 13세 이상) 이상이면 자녀 의사가 결정에 큰 영향을 미칩니다. 자녀와의 정서적 유대 자료(편지·메시지·사진)를 보관하는 것이 좋습니다.</blockquote>',
      },
      {
        title: 'Q. 의붓자녀 양육비를 받을 수 있나요? (반대 케이스)',
        content:
          '<p><strong style="color:#1e3a5f">A. 친양자 입양된 경우만 양부모 양육비 의무가 발생합니다.</strong></p>\n<ul>\n<li><strong>친양자 입양 시</strong> — 양부모로서 친자녀와 동일한 양육비 의무. 이혼 시 양육비 청구 대상.</li>\n<li><strong>일반 입양 시</strong> — 양부모·친부모 모두 양육비 의무. 다만 친생부모 자력 우선 검토되는 경향.</li>\n<li><strong>입양 없음 시</strong> — 의붓부모는 법적 양육비 의무 없음. 친생부모(상대 배우자)에게만 양육비 청구 가능.</li>\n<li><strong>실무 — 합의 양육비</strong> — 입양이 없어도 도덕적·정서적 차원에서 합의로 양육비를 지급하는 경우는 있지만 강제집행 어려움.</li>\n<li><strong>입양 정비 필요성</strong> — 재혼 시점부터 입양 여부를 명확히 정리하는 것이 후일 양육비·상속 문제를 단순화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 입양 없이 키워온 자녀에 대해서는 의붓부모도 친생부모도 모두 권리·의무가 애매해질 수 있어, 재혼 시점에 입양 여부를 명확히 결정하는 것이 자녀 복리에 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 친권자 변경·자녀 복리 우선',
        summary:
          '대법원 2017므11856 사건(대법원, 2018.05.17 선고)에서 법원은 친권자·양육자 지정·변경은 자녀의 복리를 최우선으로 고려해야 하며, 부모 일방의 사정만으로 결정해서는 안 되고 자녀의 연령·의사·생활환경·정서적 유대 등 종합 사정을 고려해야 한다고 판시했습니다.',
        takeaway: '의붓자녀 양육권·면접교섭권 다툼에서도 자녀 복리가 최우선 기준이 되어 정서적 유대 자료가 결정적입니다.',
      },
    ],
    faq: [
      {
        question: '재혼하면서 입양 신고를 안 했는데 지금이라도 가능한가요?',
        answer:
          '<strong>친생부모 동의 + 가정법원 허가 요건이 충족되면 친양자 입양 신청 가능합니다.</strong> 다만 자녀가 성년이 됐다면 친양자 입양은 어렵고 일반 입양만 가능할 수 있습니다.',
      },
      {
        question: '의붓자녀가 친생부모 쪽으로 가고 싶어 하면 어떻게 되나요?',
        answer:
          '<strong>자녀 복리·자녀 의사가 핵심 기준입니다.</strong> 일정 연령(통상 만 13세 이상) 이상이면 자녀 의사가 매우 중요하게 반영되어 친생부모와 살게 될 가능성이 높습니다.',
      },
      {
        question: '입양 없이 키운 의붓자녀의 면접교섭은 무조건 안 되나요?',
        answer:
          '<strong>자녀 복리 관점에서 인정될 소지는 있습니다.</strong> 동거 기간·정서적 유대·자녀 의사가 인정되면 가정법원이 면접교섭을 허용할 가능성이 있어 사건별 검토가 필요합니다.',
      },
      {
        question: '친양자 입양된 자녀의 친생부모 친권은 어떻게 되나요?',
        answer:
          '<strong>친양자 입양 시 친생부모와의 친자관계가 종료되어 친권도 소멸합니다.</strong> 양부모만 친권자가 되며, 이혼 시 양부모 사이에서 양육권을 다툽니다.',
      },
      {
        question: '의붓자녀 양육권 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받을 수 있습니다.</strong> 가정법원 가사조사관 제도도 활용 가능하며, 자녀 복리 관련 다툼은 가사 전문 변호사 조력을 검토해보세요.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 미지급 강제집행 절차', href: '/guide/divorce/child-support-enforcement-process' },
      { label: '친권자·양육권 지정 기준', href: '/guide/divorce/divorce-custody-criteria' },
      { label: '면접교섭권 행사 절차', href: '/guide/divorce/divorce-visitation-procedure' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판상 이혼 절차 총정리', href: '/guide/divorce/divorce-litigation-procedure-comprehensive' },
    ],
  },

  // ─── 5. inheritance / trust-account-hidden-asset ───
  {
    domain: 'inheritance',
    slug: 'inheritance-trust-account-hidden-asset',
    keyword: '차명계좌 은닉자산 상속',
    questionKeyword: '돌아가신 분이 차명계좌에 자산을 숨겨두신 것 같은데 어떻게 찾나요?',
    ctaKeyword: '은닉자산·차명계좌 발견 청구 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '상속 차명계좌·은닉자산 찾는 4가지 절차 | 로앤가이드',
      description:
        '돌아가신 분이 차명계좌·은닉자산을 남겨두신 것 같아 막막하실 거예요. 사실조회·금융정보조회·유류분반환청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가셨는데 형이 차명계좌로 돈을 다 빼돌린 것 같아요." 상속 분쟁에서 가장 흔한 시나리오 중 하나입니다. 다행히 우리 법은 가정법원 사실조회·금융정보조회·국세청 자료 요청 등 여러 경로로 은닉자산을 추적할 수 있도록 보장하고, 유류분반환청구 시효(1년/10년) 안에 청구하면 본인 몫을 찾을 수 있는 길이 있습니다. 어떤 단계로 접근하면 좋은지 정리해보겠습니다.</p>',
    sections: [
      {
        title: 'Q. 차명계좌·은닉자산을 어떻게 찾을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원 사실조회·금융정보조회 + 국세청 상속재산 자료가 핵심 경로입니다.</strong></p>\n<ul>\n<li><strong>① 가정법원 사실조회 신청</strong> — 상속재산분할심판 또는 유류분반환청구 본안에서 금융기관·국세청에 사실조회를 신청. 차명계좌 단서가 있으면 조회 폭이 넓어집니다.</li>\n<li><strong>② 안심상속 원스톱 서비스</strong> — 정부24·주민센터에서 사망자 명의 금융자산·부동산·연금·세금 정보를 일괄 조회. 상속 개시 6개월 내 신청.</li>\n<li><strong>③ 금융감독원 상속인 금융거래 조회</strong> — 사망자 명의 금융계좌 일괄 조회. 차명계좌는 직접 안 나오지만 자금 흐름 단서.</li>\n<li><strong>④ 국세청 상속세 신고 자료</strong> — 상속세 신고 후 국세청이 차명계좌·증여 자료를 별도 조사. 상속인은 국세청 자료를 활용 가능.</li>\n<li><strong>⑤ 사망 직전 자금 흐름 추적</strong> — 사망 1~10년 전 통장 거래내역에서 거액 출금·이체 단서. 차명계좌·증여 의심 자료로 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 차명계좌는 직접 발견이 어렵지만 \'사망 직전 자금 흐름\' + \'국세청 조사 자료\'를 결합하면 단서가 드러나는 경우가 많습니다.</blockquote>',
      },
      {
        title: 'Q. 발견한 은닉자산을 어떤 청구로 가져올 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속재산분할청구·유류분반환청구·부당이득반환청구 3가지 경로를 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>① 상속재산분할청구 (협의 결렬 시 심판)</strong> — 발견된 자산을 상속재산에 포함시켜 법정상속분에 따라 분할. 공동상속인 간 분쟁 시 가정법원 심판으로 진행.</li>\n<li><strong>② 유류분반환청구 (1년/10년 시효)</strong> — 특정 상속인이 차명계좌·증여로 유류분을 침해했다면 침해받은 만큼 반환 청구. 침해를 안 날부터 1년, 상속개시일부터 10년 시효.</li>\n<li><strong>③ 부당이득반환청구 (10년 시효)</strong> — 특정 상속인이 사망 직후 임의 인출했다면 부당이득으로 반환 청구. 상속재산분할 절차와 별개로 진행 가능.</li>\n<li><strong>④ 형사 고소 (절도·횡령)</strong> — 상속인이 사망자 명의 통장을 임의 인출했다면 절도·횡령 성립 가능. 형사 절차와 민사 청구 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">은닉자산 추적과 유류분·부당이득반환 절차, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료가 결정적 입증력을 가지나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 자금 출처·시점·이체처가 명확한 자료가 가장 강한 입증력을 가집니다.</strong></p>\n<ul>\n<li><strong>사망자 명의 통장 거래내역</strong> — 사망 1~10년 전 입출금 내역 + 거액 이체처. 안심상속·금감원 조회로 발급.</li>\n<li><strong>상속인 명의 통장 입금 내역</strong> — 사망자에서 특정 상속인 통장으로 거액 입금이 있다면 차명·증여 의심 단서.</li>\n<li><strong>국세청 상속세 조사 자료</strong> — 국세청은 차명계좌 추적 권한이 있어 조사 결과를 상속인이 활용 가능.</li>\n<li><strong>부동산 등기부등본</strong> — 사망자가 상속인 명의로 부동산을 매수해준 경우 매수 자금 출처 추적.</li>\n<li><strong>증여세 신고서</strong> — 사망 10년 내 증여는 상속재산에 합산. 신고서가 있으면 정확한 시점·금액 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사망 직전 1~3년 자금 흐름이 가장 다툼이 많습니다. 거액 출금·이체가 발견되면 받은 사람을 상대로 즉시 사실조회·소송 검토하는 것이 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 시효를 놓치면 청구가 불가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구 종류별로 시효가 달라 빨리 시작하는 것이 안전합니다.</strong></p>\n<ul>\n<li><strong>유류분반환청구 시효</strong> — 침해를 안 날부터 1년, 상속개시일부터 10년. 1년 시효는 매우 짧아 발견 즉시 청구해야.</li>\n<li><strong>부당이득반환청구 시효</strong> — 10년. 상대적으로 길지만 자료 멸실 위험 있어 빠른 시작 권장.</li>\n<li><strong>형사 고소 (절도·횡령)</strong> — 공소시효 7~10년. 형사 처벌과 별개로 민사 청구는 위 시효에 따름.</li>\n<li><strong>상속세 부과 제척기간</strong> — 신고 후 10년, 사기·기타 부정행위 시 15년. 차명계좌가 발견되면 국세청이 추징할 수 있음.</li>\n<li><strong>변호사 상담 검토</strong> — 시효 임박 시 빠른 청구가 중요. 무료 상담은 대한법률구조공단(132)에서 받아보실 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 유류분 1년 시효는 매우 짧습니다. 차명계좌·증여 사실을 알게 된 즉시 가사·민사 전문 변호사 상담을 통해 청구 시점을 확정하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유류분 산정 기초재산 판단 기준',
        summary:
          '대법원 2023다304568 사건(대법원, 2024.06.13 선고)에서 법원은 피상속인의 재산처분행위가 유류분 산정의 기초재산에 산입되는 증여에 해당하는지 판단할 때 재산처분행위의 법적 성질을 형식적으로만 파악하지 않고, 실질적으로 피상속인의 재산을 감소시키는 무상처분에 해당하는지 여부를 종합 판단해야 한다고 판시했습니다.',
        takeaway: '차명계좌·은닉자산도 실질적으로 무상처분이라면 유류분 산정 기초재산에 산입될 수 있어, 형식이 아닌 실질로 다투는 것이 효과적입니다.',
      },
    ],
    faq: [
      {
        question: '안심상속 원스톱 서비스로 차명계좌도 나오나요?',
        answer:
          '<strong>차명계좌는 직접 나오지 않습니다.</strong> 다만 사망자 명의 금융자산·부동산은 일괄 조회되며, 거래내역을 받아서 거액 이체처를 추적하는 출발점으로 활용할 수 있습니다.',
      },
      {
        question: '국세청에 차명계좌 조사를 요청할 수 있나요?',
        answer:
          '<strong>상속세 신고 시 의심 정황을 함께 제출하면 국세청이 자체 조사를 할 수 있습니다.</strong> 국세청 조사 결과는 상속인이 향후 민사 소송에서 자료로 활용 가능합니다.',
      },
      {
        question: '형사 고소도 함께 진행해야 하나요?',
        answer:
          '<strong>사망 직후 임의 인출이 명백하면 절도·횡령 고소를 검토할 수 있습니다.</strong> 형사 절차에서 자금 흐름이 드러나면 민사 청구 입증에도 도움이 됩니다.',
      },
      {
        question: '차명계좌 명의자가 부인하면 어떻게 입증하나요?',
        answer:
          '<strong>자금 출처 추적 + 사망자와의 자금 이체 내역으로 입증합니다.</strong> 명의자가 자금 출처를 본인 자력이라고 주장하면 그 자력 입증 책임이 명의자에게 넘어갈 수 있어 다툼 여지.',
      },
      {
        question: '은닉자산 발견 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 자료 추적·소송 진행은 사선 변호사 조력이 효과적이며, 시효 임박 사건은 즉시 상담을 권장드립니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 필요서류 정리', href: '/guide/inheritance/inheritance-renunciation-vs-limited' },
      { label: '상속세 6개월 신고 절차', href: '/guide/inheritance/inheritance-tax-six-month-filing' },
      { label: '상속 빚 발견 시 대응', href: '/guide/inheritance/inheritance-overdue-debt-discovery' },
      { label: '상속 분할 비율 산정', href: '/guide/inheritance/inheritance-property-division-formula' },
      { label: '상속 빚이 더 많을 때', href: '/guide/inheritance/inheritance-debt-more-than-asset' },
    ],
  },

  // ─── 6. inheritance / business-succession-tax-deduction ───
  {
    domain: 'inheritance',
    slug: 'inheritance-business-succession-tax-deduction',
    keyword: '가업상속공제 600억',
    questionKeyword: '가업을 상속받을 때 상속세 절세 공제는 어떻게 받나요?',
    ctaKeyword: '가업상속공제 신청 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '가업상속공제 600억 한도 신청 5단계 절차 | 로앤가이드',
      description:
        '중소·중견기업 가업을 상속받을 때 600억 한도 공제와 10년 사후관리 요건이 막막하실 거예요. 신청 절차와 유지 의무를 지금 확인하세요.',
    },
    intro:
      '<p>가족 사업체를 상속받게 되면 거액의 상속세 부담이 가장 큰 걱정거리입니다. 다행히 상속세 및 증여세법 제18조의2는 일정 요건을 충족한 가업 상속에 대해 최대 600억원 한도로 공제를 인정하고, 가업 영위 기간에 따라 한도가 차등 적용됩니다. 다만 10년 사후관리 의무를 지키지 못하면 추징되므로 신청 단계부터 사후 운영까지 전체를 함께 살펴봐야 합니다.</p>',
    sections: [
      {
        title: '가업상속공제 핵심 요건과 한도',
        content:
          '<p><strong style="color:#1e3a5f">상속세및증여세법 제18조의2에 따라 일정 요건 충족 시 최대 600억원 공제 가능합니다.</strong></p>\n<ul>\n<li><strong>피상속인 요건</strong> — 가업을 10년 이상 영위 + 상속개시일까지 가업 대표 또는 일정 지분 보유.</li>\n<li><strong>상속인 요건</strong> — 18세 이상 + 상속개시일 전 2년 이상 가업 종사 + 상속개시 후 신고기한까지 임원 취임 + 2년 내 대표 취임.</li>\n<li><strong>가업 요건</strong> — 중소기업 또는 일정 규모 이하 중견기업. 부동산 임대업·금융업 등 일부 업종 제외.</li>\n<li><strong>공제 한도</strong> — 가업 영위기간 10년 이상 300억, 20년 이상 400억, 30년 이상 600억원 한도(2024년 개정 기준).</li>\n<li><strong>주식·자산 분리 적용</strong> — 가업 관련 자산만 공제 대상. 부동산 임대용 자산은 분리되어 별도 평가될 소지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가업 영위기간이 길수록 공제 한도가 커지므로 피상속인 생전부터 가업 종사 자료를 정리해두는 것이 절세 효과를 극대화합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가업상속공제 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">상속세 신고 시 함께 신청하고 10년 사후관리 의무를 이행하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 요건 검토 (상속개시 직후)</strong> — 피상속인 영위기간·상속인 종사기간·가업 업종을 점검. 요건 충족 여부를 세무사·변호사와 함께 확인.</li>\n<li><strong>2단계 — 자료 준비 (3개월 내)</strong> — 가업 재무제표·주주명부·사업자등록증·상속인 종사 자료(4대보험·근로계약·임원 등기) 정리.</li>\n<li><strong>3단계 — 상속세 신고 시 공제 신청 (6개월 내)</strong> — 상속개시일이 속하는 달의 말일부터 6개월 이내 상속세 신고 + 가업상속공제 신청서 제출.</li>\n<li><strong>4단계 — 세무서 심사·공제 결정</strong> — 관할 세무서가 요건 심사 후 공제 인정 또는 부분 인정. 보완 요청 시 기한 내 자료 제출.</li>\n<li><strong>5단계 — 10년 사후관리 (정기 보고)</strong> — 가업 유지·임원 유지·고용 유지·자산 처분 제한 등 사후관리 요건 이행. 위반 시 공제 추징.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가업상속공제 신청 자료와 사후관리 의무, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">피상속인 요건 + 상속인 요건 + 가업 자료 3가지 묶음으로 준비합니다.</strong></p>\n<ul>\n<li><strong>피상속인 자료</strong> — 사업자등록증(영위기간 10년 이상 입증)·법인 정관·주주명부·이사회 의사록·대표이사 등기부</li>\n<li><strong>상속인 자료</strong> — 상속인 4대보험 가입 자료(2년 이상 종사)·근로계약서·임원 등기·신분증·기본증명서</li>\n<li><strong>가업 재무자료</strong> — 최근 3년 재무제표·세무조정계산서·자산 명세서·법인세 신고서</li>\n<li><strong>상속세 신고 자료</strong> — 상속세 신고서·가업상속공제 신청서·재산평가서·상속재산분할협의서</li>\n<li><strong>사후관리 자료</strong> — 매년 가업 유지·고용 유지·자산 명세 보고서(세무서 제출)</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가업상속공제는 신청 자료가 방대해 상속개시 직후부터 세무사·가업승계 전문가와 함께 일정 관리하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 사후관리 위반 시 추징',
        content:
          '<p><strong style="color:#1e3a5f">10년 사후관리 의무 위반 시 공제받은 세액을 모두 추징당할 수 있습니다.</strong></p>\n<ul>\n<li><strong>가업 휴·폐업</strong> — 10년 내 가업 휴·폐업 시 추징. 다만 상속인 사망·해산 등 부득이 사유는 예외.</li>\n<li><strong>주식 처분</strong> — 상속인이 상속받은 주식의 일정 비율 이상을 10년 내 처분 시 추징. 처분 시점·비율 관리 중요.</li>\n<li><strong>임원 유지 위반</strong> — 상속인이 임원을 유지하지 못하면 추징. 본인 의지와 관계없이 사내 갈등으로 임원에서 물러나면 추징 위험.</li>\n<li><strong>고용 유지 위반</strong> — 상속개시 시 고용 인원의 일정 비율 이상을 유지하지 못하면 추징. 경영 악화·구조조정 시 주의.</li>\n<li><strong>변호사·세무사 상담 검토</strong> — 사후관리는 매년 점검이 필요하며, 무료 상담은 중소벤처기업부 가업승계 지원센터·대한법률구조공단(132)에서 받아보실 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사후관리 위반은 추징 + 가산세까지 부과될 수 있어 600억 공제가 한순간에 사라질 수 있습니다. 매년 정기 점검이 필수입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 비상장주식 평가 방법의 적정성',
        summary:
          '대법원 2021두53320 사건(대법원, 2025.01.09 선고)에서 법원은 비상장주식 1주당 순손익가치 산정 시 최근 3년간 순손익액이 비정상적이거나 산정이 불합리한 사유가 있으면 시행규칙상 산식만으로 평가할 수 없고, 신용평가전문기관·회계법인의 추정이익 평균가액 등 다른 방법을 검토해야 한다고 판시했습니다.',
        takeaway: '가업 주식 평가가 가업상속공제 한도에 직결되어 평가 방법을 재무 자료와 함께 면밀히 검토하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '부동산 임대업도 가업상속공제 대상인가요?',
        answer:
          '<strong>부동산 임대업은 원칙적으로 제외됩니다.</strong> 가업상속공제는 제조업·서비스업 등 적극적 사업이 대상이며, 부동산 임대·금융업·소비성 서비스업 등 일부 업종은 적용 제외.',
      },
      {
        question: '상속인이 여러 명인데 모두 공제 받을 수 있나요?',
        answer:
          '<strong>가업을 상속받은 상속인이 공제 대상입니다.</strong> 협의분할로 1인이 가업 주식을 단독 상속하는 경우가 일반적이며, 여러 명이 받으면 각자 요건 충족 여부를 별도 검토.',
      },
      {
        question: '피상속인이 갑자기 돌아가셔서 상속인이 가업 종사 2년이 안 되면요?',
        answer:
          '<strong>일정 부득이 사유는 예외 인정이 가능합니다.</strong> 다만 원칙적으로 2년 종사 요건이 엄격해 상속 전부터 자녀의 가업 참여 자료를 정리해두는 것이 안전합니다.',
      },
      {
        question: '10년 사후관리는 매년 어떻게 보고하나요?',
        answer:
          '<strong>매년 사업연도 종료 후 일정 기한 내에 관할 세무서에 사후관리 명세서를 제출해야 합니다.</strong> 위반 시 추징되므로 매년 정기 점검과 세무사 협조가 필수.',
      },
      {
        question: '가업승계 무료 상담은 어디서 받나요?',
        answer:
          '<strong>중소벤처기업부 가업승계 지원센터(www.smes.go.kr)에서 무료 상담을 받아보실 수 있습니다.</strong> 세무·법률 측면은 대한법률구조공단(132)·세무 전문가 조력을 함께 검토해보세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 6개월 신고 절차', href: '/guide/inheritance/inheritance-tax-six-month-filing' },
      { label: '한정승인 필요서류 정리', href: '/guide/inheritance/inheritance-renunciation-vs-limited' },
      { label: '상속재산 분할협의 절차', href: '/guide/inheritance/inheritance-property-division-formula' },
      { label: '상속 빚 발견 시 대응', href: '/guide/inheritance/inheritance-overdue-debt-discovery' },
      { label: '상속 빚이 더 많을 때', href: '/guide/inheritance/inheritance-debt-more-than-asset' },
    ],
  },

  // ─── 7. inheritance / charity-bequest-validity ───
  {
    domain: 'inheritance',
    slug: 'inheritance-charity-bequest-validity',
    keyword: '자선단체 유언기부',
    questionKeyword: '돌아가신 분이 재산을 자선단체에 기부하셨는데 유류분 청구가 가능한가요?',
    ctaKeyword: '유언기부·유류분 침해 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '자선단체 유언기부 효력과 유류분 5가지 쟁점 | 로앤가이드',
      description:
        '돌아가신 분이 자선단체에 유언기부하셨는데 본인 몫이 줄어 막막하실 거예요. 유증 효력과 유류분 침해 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가시면서 전 재산을 자선단체에 기부하라고 유언을 남겼는데, 우리 가족 몫은 어떻게 되나요?" 유언기부는 고인의 의사를 존중해야 하지만 동시에 가족 상속인의 유류분도 보호되어야 합니다. 유증 효력 검토 + 공익법인 자격 확인 + 유류분 침해 청구를 단계적으로 정리하면 본인 몫을 확보할 수 있는 길이 보입니다.</p>',
    sections: [
      {
        title: 'Q. 유언기부는 무조건 효력이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 유언이 민법 형식 요건을 충족하고 자선단체가 수증 자격이 있어야 효력이 인정됩니다.</strong></p>\n<ul>\n<li><strong>유언 형식 요건 (민법 제1065조 이하)</strong> — 자필증서·녹음·공정증서·비밀증서·구수증서 5가지 중 하나로 작성. 형식 미충족 시 무효.</li>\n<li><strong>자필증서 핵심 요건</strong> — 본인 전문 자필 + 연·월·일 + 주소 + 성명 + 날인. 하나라도 빠지면 무효 가능.</li>\n<li><strong>유증 vs 사인증여</strong> — 유언 형식 미충족 시 사인증여로 인정될 소지가 있어 본안에서 다툴 수 있는 영역.</li>\n<li><strong>수증자(자선단체) 자격</strong> — 공익법인·종교법인·재단법인 등이 일반적. 비영리법인이라면 정관·등기 상태 확인 필요.</li>\n<li><strong>실무 다툼 — 의사능력</strong> — 작성 당시 치매·정신질환 등으로 의사능력이 부족했다는 입증이 있으면 유언 무효 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유언 형식 요건과 의사능력 두 축에서 다툼이 자주 발생합니다. 무효가 인정되면 법정상속분으로 분할.</blockquote>',
      },
      {
        title: 'Q. 유언이 유효해도 유류분 청구가 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 유언으로 자선단체에 전액 기부했더라도 직계비속·배우자 등 유류분권자는 유류분 침해를 청구할 수 있습니다.</strong></p>\n<ol>\n<li><strong>① 유류분 권리자 (민법 제1112조)</strong> — 직계비속·배우자(법정상속분의 1/2), 직계존속·형제자매(법정상속분의 1/3). 형제자매는 2024년 헌재 결정으로 폐지.</li>\n<li><strong>② 유류분 산정 방법</strong> — (상속개시 시 재산 + 증여재산 - 채무) × 유류분 비율 - 본인 받은 재산 = 부족액.</li>\n<li><strong>③ 자선단체 기부도 유류분 산입</strong> — 사망 1년 내 증여 또는 유증은 유류분 산정 기초재산에 산입. 유류분 부족액 발생 시 청구 가능.</li>\n<li><strong>④ 자선단체 상대 반환청구</strong> — 유류분 침해액만큼 자선단체에 반환 청구. 단체가 이미 기부금을 사용했어도 법인격 존속 시 청구 가능.</li>\n<li><strong>⑤ 시효 (1년/10년)</strong> — 유증 사실을 안 날부터 1년, 상속개시일부터 10년. 자선단체 기부는 언론 보도 등으로 빠르게 알려지는 경우가 많아 시효 관리 필수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유언기부 유류분 침해 산정과 청구 절차, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 자선단체가 정상 공익법인이 아니면 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 공익법인 자격 미충족 시 증여세 비과세가 부정될 수 있고, 유증 자체도 다툼 여지가 생깁니다.</strong></p>\n<ul>\n<li><strong>공익법인 자격 확인</strong> — 종교·교육·자선·학술 등 공익 목적 + 정관·등기 정상 상태. 국세청 공익법인 등록 여부 확인.</li>\n<li><strong>증여세 비과세 (상증법 제48조)</strong> — 공익법인이 출연받은 재산은 증여세 과세가액 불산입. 자격 부정 시 단체에 거액 증여세 부과.</li>\n<li><strong>유증 자체 효력</strong> — 단체가 법인격이 없거나 해산 상태라면 유증 자체가 무효될 소지. 법정상속분 분할로 회귀.</li>\n<li><strong>국외 공익법인</strong> — 외국 공익법인도 일정 요건 충족 시 공익법인으로 인정될 수 있다는 판례. 국내 활동·정관·사업 자료 검토.</li>\n<li><strong>실무 — 단체 존속 여부 우선 확인</strong> — 유증 시점과 상속 시점 사이에 단체가 해산했는지 등기 사항으로 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자선단체로 유증된 사건은 단체 자격·정관·실제 사업 활동을 함께 검증하면 다툴 수 있는 폭이 커집니다.</blockquote>',
      },
      {
        title: 'Q. 유류분 청구는 어떻게 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원 또는 민사법원에 유류분반환청구 소장을 제출하는 흐름이 일반적입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 유류분 부족액 산정</strong> — 상속재산·증여·유증을 모두 합산 후 유류분 비율 적용. 세무사·변호사 협조 권장.</li>\n<li><strong>2단계 — 자선단체에 반환 청구 통지</strong> — 내용증명으로 유류분 침해액 반환 요구. 협의 가능성 모색.</li>\n<li><strong>3단계 — 본안 소송 (1년 시효 내)</strong> — 협의 결렬 시 민사 본안 소송. 침해를 안 날부터 1년 내 청구해야 시효 보전.</li>\n<li><strong>4단계 — 보전처분</strong> — 단체 자산 처분 우려 시 가압류·가처분 신청. 본안과 병행 가능.</li>\n<li><strong>변호사 상담 검토</strong> — 유류분 산정·시효·자선단체 자격 다툼이 복잡해 사선 변호사 조력이 효과적. 무료 상담은 대한법률구조공단(132).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자선단체가 거액 기부금을 이미 사용한 경우에도 법인격이 존속하면 청구 가능합니다. 다만 회수 실효성을 위해 빠른 보전처분이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국 공익법인의 공익법인 등 해당성',
        summary:
          '대법원 2025두30806 사건(대법원, 2025.05.15 선고)에서 법원은 종교·교화 사업을 외국에서 수행하는 비거주자 또는 본점이 외국에 있는 비영리법인도 구 상속세 및 증여세법 제48조 제1항의 \'공익법인 등\'에 해당해 증여세 과세가액 불산입이 적용될 수 있다고 판시했습니다.',
        takeaway: '국내 공익법인뿐 아니라 외국 공익법인도 일정 요건 충족 시 인정될 수 있어 단체 자격을 정관·사업 자료로 검증하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '유언이 자필증서인데 일부만 자필이고 나머지는 인쇄된 경우 효력은요?',
        answer:
          '<strong>자필증서는 전문 자필이 원칙으로 일부 인쇄·타이핑이 섞이면 무효될 가능성이 큽니다.</strong> 다만 사인증여로의 효력 인정 여지가 있어 본안에서 다툴 수 있습니다.',
      },
      {
        question: '자선단체가 이미 기부금을 사용했으면 못 받나요?',
        answer:
          '<strong>법인격이 존속하면 단체 일반 자산에서 반환받을 수 있습니다.</strong> 다만 단체 재정 상황에 따라 실효성이 달라질 수 있어 빠른 보전처분이 안전합니다.',
      },
      {
        question: '유류분 청구 1년 시효는 언제부터 시작되나요?',
        answer:
          '<strong>유증·증여 사실과 침해 사실을 안 날부터 1년입니다.</strong> 자선단체 기부는 보도·고인 유언장 공개 등으로 빨리 알려지는 경우가 많아 발견 즉시 청구해야 안전합니다.',
      },
      {
        question: '형제자매도 유류분을 청구할 수 있나요?',
        answer:
          '<strong>형제자매 유류분은 헌법재판소 결정(2024.04.25)으로 폐지되었습니다.</strong> 직계비속·배우자만 유류분권자이며, 직계존속도 가능합니다.',
      },
      {
        question: '유언무효·유류분 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 유언 무효·자선단체 자격·유류분 산정은 사실관계가 복잡해 가사·민사 전문 변호사 조력을 검토해보세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 필요서류 정리', href: '/guide/inheritance/inheritance-renunciation-vs-limited' },
      { label: '상속세 6개월 신고 절차', href: '/guide/inheritance/inheritance-tax-six-month-filing' },
      { label: '상속 분할 비율 산정', href: '/guide/inheritance/inheritance-property-division-formula' },
      { label: '상속 빚 발견 시 대응', href: '/guide/inheritance/inheritance-overdue-debt-discovery' },
      { label: '상속 빚이 더 많을 때', href: '/guide/inheritance/inheritance-debt-more-than-asset' },
    ],
  },

  // ─── 8. inheritance / overseas-asset-declaration ───
  {
    domain: 'inheritance',
    slug: 'inheritance-overseas-asset-declaration',
    keyword: '해외자산 상속신고',
    questionKeyword: '돌아가신 분이 해외 부동산·외화예금을 남기셨는데 어떻게 신고하나요?',
    ctaKeyword: '해외자산 상속신고·외환신고 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '해외자산 상속신고 6개월 외환신고 5단계 | 로앤가이드',
      description:
        '돌아가신 분이 해외 부동산·외화예금을 남기셨는데 신고 절차가 막막하실 거예요. 6개월 내 신고와 외환신고 흐름을 지금 확인하세요.',
    },
    intro:
      '<p>해외에 부동산이나 외화예금을 보유한 분이 돌아가시면 "한국에서 신고해야 하는지, 외환신고는 어떻게 하는지, 이중과세는 어떻게 해결하는지" 같은 질문이 한꺼번에 쏟아집니다. 거주자·비거주자 구분, 6개월 신고기한, 외환거래법상 외화 송금 절차, 한·외 조세협약을 단계별로 정리하면 신고 누락 가산세를 피하고 국외자산을 안전하게 정리할 수 있습니다.</p>',
    sections: [
      {
        title: '거주자 vs 비거주자 — 과세 범위 차이',
        content:
          '<p><strong style="color:#1e3a5f">상증법 제3조에 따라 피상속인 거주자 여부에 따라 과세 범위가 달라집니다.</strong></p>\n<ul>\n<li><strong>피상속인 거주자 (모든 재산 과세)</strong> — 국내·국외 모든 상속재산에 한국 상속세 부과. 해외 부동산·외화예금도 포함.</li>\n<li><strong>피상속인 비거주자 (국내 재산만 과세)</strong> — 한국에 있는 상속재산에만 한국 상속세 부과. 해외자산은 해당국 절차에 따름.</li>\n<li><strong>거주자 판정 기준</strong> — 국내 주소 또는 183일 이상 거소. 출국 후 영구귀국 의사·생활근거지 종합 판단.</li>\n<li><strong>이중과세 방지 — 조세협약</strong> — 한국과 협약 체결국 자산은 외국 납부세액 공제. 미체결국은 별도 검토.</li>\n<li><strong>실무 — 사망 직전 거주 형태</strong> — 사망 직전 거주 기간·재산 위치·가족 거주지가 거주자 판정의 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해외 이주 후 출국한 피상속인이라도 한국 생활근거지가 남아 있으면 거주자로 판단되어 국외 재산까지 과세될 수 있어 자료 정리가 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 해외자산 상속 5단계',
        content:
          '<p><strong style="color:#1e3a5f">상속개시 → 자산 파악 → 신고 → 외환절차 → 분할 송금 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거주자 여부·자산 파악 (상속개시 직후)</strong> — 피상속인 거주자 여부 확인 + 해외 자산 목록 작성(은행 계좌·부동산 등기·증권 보유). 영사관·외국 세무 협조 활용.</li>\n<li><strong>2단계 — 평가·번역공증 (3개월 내)</strong> — 해외 부동산은 현지 감정평가서. 외화 자산은 상속개시일 환율로 원화 환산. 번역공증·아포스티유 자료 준비.</li>\n<li><strong>3단계 — 한국 상속세 신고 (6개월 내)</strong> — 상속개시일이 속하는 달의 말일부터 6개월 이내 관할 세무서 신고. 외국 납부세액 공제 신청 가능.</li>\n<li><strong>4단계 — 해당국 상속세·이전 절차</strong> — 자산 소재국 상속세 신고·등기이전. 외국 변호사·세무사 협조가 일반적. 한·외 조세협약 적용.</li>\n<li><strong>5단계 — 외환신고·국내 송금 (자산 처분 시)</strong> — 외환거래법상 한국으로 자금 송금 시 외국환은행 신고. 거액 송금은 사전·사후 신고 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외자산 신고와 외환절차, AI가 상황에 맞춰 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">국내 상속서류 + 해외 자산서류 + 번역·인증 자료 3가지 묶음으로 준비합니다.</strong></p>\n<ul>\n<li><strong>국내 상속 자료</strong> — 사망진단서·기본증명서·가족관계증명서·상속재산분할협의서·인감증명서</li>\n<li><strong>해외 자산 자료</strong> — 해외 부동산 등기부등본·외화예금 잔고증명서·증권 보유증명서·해외 보험 가입증명서</li>\n<li><strong>평가·환산 자료</strong> — 해외 자산 감정평가서·상속개시일 환율 자료·외국 회계자료</li>\n<li><strong>번역·인증 자료</strong> — 한국어 번역공증서·아포스티유 또는 영사인증서</li>\n<li><strong>외환신고 자료</strong> — 외국환은행 신고서·자금 출처 증빙·송금 사유서</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해외 자료는 번역공증·아포스티유 발급에 1~2개월이 걸릴 수 있어 6개월 신고기한 관리에 여유를 두는 것이 안전합니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 신고 누락·이중과세',
        content:
          '<p><strong style="color:#1e3a5f">신고 누락·외환신고 위반·이중과세 미공제로 거액 손실이 발생할 수 있습니다.</strong></p>\n<ul>\n<li><strong>신고 누락 가산세</strong> — 상속세 무신고 시 무신고가산세(20~40%) + 납부불성실가산세 부과. 해외자산 누락은 추징 + 가산세로 거액 손실.</li>\n<li><strong>제척기간 연장</strong> — 일반 상속세 제척기간 10년이지만 해외 자산을 신고 누락하면 15년으로 연장될 수 있음.</li>\n<li><strong>외환신고 위반</strong> — 외환거래법 위반 시 과태료·형사처벌 가능. 거액 송금 시 사전 신고 검토 필수.</li>\n<li><strong>이중과세 미공제</strong> — 한국과 해당국에 모두 상속세 납부했는데 외국 납부세액 공제 신청을 누락하면 이중 부담. 신고서 작성 시 반드시 공제 신청.</li>\n<li><strong>변호사·세무사 상담 검토</strong> — 해외자산 상속은 국내·해외 양쪽 세무·법률이 얽혀 사선 전문가 조력이 효과적. 무료 상담은 대한법률구조공단(132)에서 받아보실 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해외자산은 한국 국세청이 자동으로 알지 못해도 추후 외국 송금·금융조사 등으로 드러날 수 있습니다. 6개월 신고기한 내 자진 신고가 가장 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 비거주자 피상속인의 국외 재산 과세 범위',
        summary:
          '대법원 2022두64143 사건(대법원, 2024.09.12 선고)에서 법원은 피상속인이 비거주자인 경우 구 상속세 및 증여세법 제3조의2 제1항·제3항의 \'상속인 각자가 받았거나 받을 재산\'에는 상속세 과세대상인 \'국내에 있는 상속재산\'만 포함되고 \'국외에 있는 상속재산\'은 포함되지 않는다고 판시했습니다.',
        takeaway: '피상속인 거주자 여부가 국외자산 과세 범위를 결정하는 핵심 기준이라 거주자 판정 자료부터 정리해두는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '피상속인이 한국에 거주했지만 사망 직전에 해외로 나갔으면 어떻게 되나요?',
        answer:
          '<strong>사망 직전 생활근거지·재산 위치·가족 거주지를 종합 판단합니다.</strong> 형식적 출국만으로 비거주자가 되지 않으며, 한국 생활근거지가 남아 있으면 거주자로 보아 국외 재산까지 과세될 소지.',
      },
      {
        question: '해외 부동산을 한국으로 가져올 때 송금 절차는?',
        answer:
          '<strong>외국환은행에 외환신고 후 송금합니다.</strong> 거액(통상 미화 1만달러 이상)은 자금 출처 증빙·송금 사유서 제출이 일반적. 외환거래법 위반 시 과태료 위험.',
      },
      {
        question: '해당국에 이미 상속세를 냈으면 한국에서는 안 내도 되나요?',
        answer:
          '<strong>한국이 거주자 과세 시 한국 상속세는 별도 부과되지만, 외국 납부세액 공제로 이중과세를 방지합니다.</strong> 신고서에 외국 납부세액 공제 신청을 반드시 포함해야.',
      },
      {
        question: '신고기한 6개월을 넘기면 어떻게 되나요?',
        answer:
          '<strong>무신고가산세(20~40%) + 납부불성실가산세가 부과됩니다.</strong> 해외자산 누락은 제척기간이 15년으로 연장될 수 있어 추후에라도 자진 신고가 안전합니다.',
      },
      {
        question: '해외자산 상속 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 해외 세무·외환절차는 사선 변호사·세무사 조력이 효과적이며, 영사관·재외동포재단도 외국 절차 안내가 가능합니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 6개월 신고 절차', href: '/guide/inheritance/inheritance-tax-six-month-filing' },
      { label: '한정승인 필요서류 정리', href: '/guide/inheritance/inheritance-renunciation-vs-limited' },
      { label: '상속 분할 비율 산정', href: '/guide/inheritance/inheritance-property-division-formula' },
      { label: '상속 빚 발견 시 대응', href: '/guide/inheritance/inheritance-overdue-debt-discovery' },
      { label: '상속 빚이 더 많을 때', href: '/guide/inheritance/inheritance-debt-more-than-asset' },
    ],
  },
];
