import { SpokePage } from '../spoke-pages';

// batch44 nonlabor2 14개: inheritance 4 + defamation 3 + jeonse 2 + child-support 1 + rehabilitation 1 + bankruptcy 1 + stalking 1 + dui 1
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 피상속인이 생명보험을 남긴 유족이 수익자 지정 여부에 따라 보험금이 상속재산인지·고유재산인지 구분해 세무·분할 쟁점을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 피상속인의 해외 부동산·예금을 상속받는 사람이 국외재산 신고·상속세 기한 내 납부 절차를 빠짐없이 준비하도록 돕는 페이지다.
// 3. 이 페이지는 자필·공정증서 유언장의 진위·효력을 다투려는 상속인이 필적감정·무효확인 소송 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 피상속인의 코인·SNS·클라우드 등 디지털자산을 상속인이 플랫폼별 접근·승계 절차로 확보하도록 돕는 페이지다.
// 5. 이 페이지는 단톡방 캡처만으로 명예훼손 고소를 준비하는 피해자가 증거능력·적법수집 여부를 점검하도록 돕는 페이지다.
// 6. 이 페이지는 딥페이크 합성물 피해자가 플랫폼에 신속삭제를 요청하고 디지털성범죄 신고 절차를 동시에 밟도록 돕는 페이지다.
// 7. 이 페이지는 퇴사 후 회사 리뷰를 썼다가 명예훼손 고소를 당한 전 직원이 사실적시·공익성 방어 논점을 정리하도록 돕는 페이지다.
// 8. 이 페이지는 집이 경매로 넘어갈 처지인 소액임차인이 최우선변제 요건과 배당 순위를 확인해 보증금을 지키도록 돕는 페이지다.
// 9. 이 페이지는 전세보증금 반환이 늦어진 세입자가 지연이자를 얼마·언제부터 청구할 수 있는지 정리하도록 돕는 페이지다.
// 10. 이 페이지는 해외 거주 중인 전 배우자에게서 양육비를 받지 못하는 부모가 국외 강제집행·해외 공조 절차를 준비하도록 돕는 페이지다.
// 11. 이 페이지는 배우자와 공동명의·연대보증을 쓴 채무자가 개인회생 신청 시 배우자 책임에 미치는 영향을 점검하도록 돕는 페이지다.
// 12. 이 페이지는 파산 직전 가족·지인에게 증여·명의이전을 한 채무자가 부인권 행사 대비 방어 논리를 정리하도록 돕는 페이지다.
// 13. 이 페이지는 오프라인 접촉 없이 온라인 메시지만 반복된 경우에도 스토킹처벌법이 적용되는지 점검하려는 피해자를 돕는 페이지다.
// 14. 이 페이지는 음주사고로 보험사가 면책 처리해 자비배상 청구를 받은 운전자가 구상금·보험 범위를 정리하도록 돕는 페이지다.

export const spokesBatch44Nonlabor2: SpokePage[] = [
  // ─── 1. inheritance / life-insurance-beneficiary-separate ───
  {
    domain: 'inheritance',
    slug: 'inheritance-life-insurance-beneficiary-separate',
    keyword: '생명보험 수익자 상속재산',
    questionKeyword: '돌아가신 아버지 생명보험금도 상속재산에 포함되나요?',
    ctaKeyword: '생명보험금 상속·세무 구분 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '생명보험금 상속재산 여부 4가지 구분 기준 | 로앤가이드',
      description:
        '생명보험 수익자가 누구로 지정되어 있느냐에 따라 보험금이 상속재산인지 유족 고유재산인지 달라집니다. 세무·한정승인·분할 영향까지 지금 확인하세요.',
    },
    intro:
      '<p>아버지가 돌아가신 뒤 보험사에서 1억 원이 입금됐습니다. "이 돈도 상속재산에 넣어야 하나, 한정승인 하면 빚 갚는 데 써야 하나" 막막합니다. 생명보험금은 수익자 지정 방식에 따라 민법상 상속재산·유족 고유재산이 나뉘고, 세법은 또 다른 기준을 적용합니다. 구분을 틀리면 세금·분할·빚 떠안기까지 달라집니다.</p>',
    sections: [
      {
        title: '민법상 구분 — 수익자 지정이 기준',
        content:
          '<p><strong style="color:#1e3a5f">보험계약자가 누구를 수익자로 지정했는지에 따라 상속재산 여부가 결정됩니다.</strong></p>\n<ul>\n<li><strong>특정 상속인 지정</strong> — "배우자 홍길동"처럼 이름으로 지정되면 그 사람의 고유재산. 상속재산 분할 대상 아님.</li>\n<li><strong>"상속인"으로 포괄 지정</strong> — 민법상 상속인 지위에서 받는 권리로, 통상 고유재산으로 봅니다.</li>\n<li><strong>피보험자 본인 지정</strong> — 수익자가 피보험자인 경우 보험금은 상속재산에 귀속, 분할 대상.</li>\n<li><strong>미지정</strong> — 약관·상법 제733조에 따라 상속인에게 분할 지급, 대개 고유재산 해석.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수익자가 특정 유족이면 그 유족의 "별도 주머니", 상속 빚에서 분리될 수 있습니다.</blockquote>',
      },
      {
        title: '세법상 간주상속재산 — 세금은 다른 기준',
        content:
          '<p><strong style="color:#1e3a5f">상속세는 민법과 달리 보험금도 "간주상속재산"으로 과세 대상이 될 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 간주 요건 확인</strong> — 피상속인이 보험료를 실제 부담했다면 상증세법 제8조로 상속재산 간주.</li>\n<li><strong>2단계 — 비과세 한도 점검</strong> — 자녀 5천만 원, 배우자 5억 원 등 기본공제는 그대로 적용.</li>\n<li><strong>3단계 — 신고 기한 준수</strong> — 상속개시일이 속한 달 말일부터 6개월 이내 상속세 신고.</li>\n<li><strong>4단계 — 계약자·피보험자·수익자 3자 확인</strong> — 이 조합이 세금 계산을 좌우.</li>\n<li><strong>5단계 — 전문가 검토</strong> — 민법상 고유재산이어도 세법상 과세될 수 있으므로 구분 필요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보험 수익자 지정과 민법·세법상 구분을 한번에 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '한정승인·상속포기와의 관계',
        content:
          '<p><strong style="color:#1e3a5f">고유재산 보험금은 빚을 떠안지 않아도 받을 수 있는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>고유재산이면 분리</strong> — 수익자 지정 보험금은 한정승인·포기 후에도 수령 가능.</li>\n<li><strong>상속재산이면 포기 시 불가</strong> — 피보험자 자신이 수익자이면 포기하면 보험금도 못 받음.</li>\n<li><strong>단순승인 간주 주의</strong> — 보험금을 상속재산처럼 관리·지출하면 단순승인 간주 위험.</li>\n<li><strong>기한 3개월 엄수</strong> — 상속개시 사실을 안 날부터 3개월 이내 한정승인·포기 선택.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수익자 지정 보험금은 별도 계좌로 관리해 상속재산과 섞이지 않도록 하세요.</blockquote>',
      },
      {
        title: '실무 체크 — 청구 서류와 분할 협의',
        content:
          '<p><strong style="color:#1e3a5f">수익자 변경 이력·계약서 원본을 보험사에서 받아 쟁점의 기초 자료로 확보하세요.</strong></p>\n<ul>\n<li><strong>보험증권·청약서</strong> — 계약자·피보험자·수익자 기재를 원본으로 확인.</li>\n<li><strong>보험료 납입 내역</strong> — 누가 실제 낸 돈인지 증빙해야 세법상 간주 판단 가능.</li>\n<li><strong>가족관계증명서·사망진단서</strong> — 청구 시 기본 서류, 유족관계 증명 필수.</li>\n<li><strong>분할 협의서</strong> — 공동수익자일 경우 배분 비율 명시 문서 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 수익자가 변경된 이력이 있다면 변경 시점이 임종 직전인지 등 유류분·증여 쟁점이 추가될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험금 수익자 지정의 법적 성격',
        summary:
          '대법원 2025다212863 사건(대법원 판결)에서 법원은 생명보험 수익자가 특정 상속인으로 지정된 경우 그 보험금은 민법상 상속재산이 아닌 수익자의 고유재산에 해당한다고 판시했습니다. 상속포기·한정승인과도 원칙적으로 분리됩니다.',
        takeaway:
          '수익자 지정 여부를 먼저 확인하면 상속 빚과 분리된 고유재산을 지킬 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '수익자 "법정상속인"으로만 돼 있으면 분할 대상인가요?',
        answer:
          '<strong>통상 각 상속인의 고유재산으로 보지만, 구체 사정에 따라 달라집니다.</strong> 약관·계약 문구와 판례 기준을 함께 봐야 합니다.',
      },
      {
        question: '보험금이 고유재산이면 상속세도 안 내나요?',
        answer:
          '<strong>아닙니다. 민법과 세법은 기준이 달라 보험료를 피상속인이 냈다면 과세 대상이 될 수 있습니다.</strong> 신고는 별도로 해야 합니다.',
      },
      {
        question: '상속포기 후에도 보험금 청구가 가능한가요?',
        answer:
          '<strong>수익자가 본인으로 지정되어 고유재산이라면 포기와 무관하게 청구할 수 있습니다.</strong> 다만 사용 방법에 주의해야 합니다.',
      },
      {
        question: '형제 몰래 혼자 보험금을 받아도 되나요?',
        answer:
          '<strong>특정 수익자 단독 지정이면 가능하나, 유류분 분쟁 소지가 남습니다.</strong> 분할이 예상되는 규모면 협의서를 먼저 준비하세요.',
      },
      {
        question: '종신보험·연금보험도 같은 기준이 적용되나요?',
        answer:
          '<strong>수익자 지정 구조가 같다면 동일 원칙이 적용됩니다.</strong> 단, 연금은 사망 이후 계속 지급 여부가 쟁점이 될 수 있습니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '한정승인 신청 절차', href: '/guide/inheritance/inheritance-limited-approval-procedure' },
      { label: '상속포기와 고유재산 구분', href: '/guide/inheritance/inheritance-waiver-separate-property' },
      { label: '상속세 신고 기한·공제', href: '/guide/inheritance/inheritance-tax-filing-deadline' },
      { label: '유류분 산정과 협의', href: '/guide/inheritance/inheritance-legal-reserve-portion' },
      { label: '상속재산 분할 협의서', href: '/guide/inheritance/inheritance-division-agreement' },
    ],
  },

  // ─── 2. inheritance / foreign-assets-declaration-report ───
  {
    domain: 'inheritance',
    slug: 'inheritance-foreign-assets-declaration-report',
    keyword: '해외재산 상속세 신고',
    questionKeyword: '미국 부동산을 상속받게 됐는데 어디에 어떻게 신고해야 하나요?',
    ctaKeyword: '해외재산 상속 절차·세무 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외재산 상속 신고 절차 5단계 체크 | 로앤가이드',
      description:
        '미국·일본·유럽 등 해외 부동산·예금을 상속받았다면 한국 상속세 신고와 현지 세무·환율 기준까지 모두 챙겨야 합니다. 기한·서류를 지금 확인하세요.',
    },
    intro:
      '<p>해외에서 사업하시던 부친이 돌아가시고, 한국과 미국에 부동산이 각각 남아있습니다. "어디에 먼저 신고하고, 환율은 언제 기준인지, 놓치면 가산세는 얼마인지" 하나도 모르는 채 시간만 흘러갑니다. 해외재산 상속은 한국·현지 이중 신고가 기본이고, 기한을 놓치면 가산세가 크게 붙는 영역입니다.</p>',
    sections: [
      {
        title: '국내 상속세 기본 — 해외재산도 포함',
        content:
          '<p><strong style="color:#1e3a5f">피상속인이 거주자였다면 국외재산까지 전부 한국에 신고해야 합니다.</strong></p>\n<ul>\n<li><strong>거주자 판단</strong> — 피상속인이 사망 당시 한국 거주자였는지가 과세 범위 결정.</li>\n<li><strong>과세 범위</strong> — 거주자는 전 세계 재산, 비거주자는 국내 소재 재산만.</li>\n<li><strong>기준 환율</strong> — 상속개시일 현재 기준환율로 원화 환산.</li>\n<li><strong>평가 방법</strong> — 해외 부동산은 시가 우선, 불명 시 보충적 평가 방법 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외재산을 빠뜨린 채 신고하면 추후 가산세·무신고 가산세까지 누적됩니다.</blockquote>',
      },
      {
        title: '5단계 신고 절차 — 기한과 순서',
        content:
          '<p><strong style="color:#1e3a5f">현지 검인·공증 → 환산 → 한국 상속세 신고 순으로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해외재산 목록화</strong> — 부동산·예금·주식·연금 전부 실사.</li>\n<li><strong>2단계 — 현지 검인(Probate) 이행</strong> — 미국은 주별, 일본은 등기 등 현지 절차.</li>\n<li><strong>3단계 — 평가액 환산</strong> — 상속개시일 기준환율 + 공신력 있는 평가자료.</li>\n<li><strong>4단계 — 한국 상속세 신고</strong> — 개시일 속한 달 말일부터 6개월(국외 거주자는 9개월) 이내.</li>\n<li><strong>5단계 — 외국납부세액공제</strong> — 현지에서 낸 세금을 한국 세액에서 공제 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 해외재산 평가·환율·기한과 필요 서류를 체크해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '서류 준비 — 현지·한국 모두 필요',
        content:
          '<p><strong style="color:#1e3a5f">현지 공증 서류는 아포스티유·영사 확인을 거쳐야 국내 제출이 가능합니다.</strong></p>\n<ul>\n<li><strong>사망진단서·가족관계증명서</strong> — 영문 번역 + 아포스티유 또는 영사 공증.</li>\n<li><strong>해외재산 목록</strong> — 부동산 등기, 계좌 잔액증명, 주식 보유내역.</li>\n<li><strong>감정평가·시세 자료</strong> — 현지 공인 감정서 또는 공신력 있는 시세.</li>\n<li><strong>현지 납부 증빙</strong> — 외국납부세액공제를 위한 영수증·증명서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 현지 변호사·회계사와 한국 세무대리인을 동시에 선임해 동일 시점 기준으로 평가가 맞는지 점검하세요.</blockquote>',
      },
      {
        title: '놓치면 큰 가산세 — 위험 신호 체크',
        content:
          '<p><strong style="color:#1e3a5f">신고 누락·과소신고·무신고 각각 가산세율이 다릅니다.</strong></p>\n<ul>\n<li><strong>무신고 가산세</strong> — 산출세액의 20%(부정 무신고 40%).</li>\n<li><strong>과소신고</strong> — 10%(부정 과소신고 40%).</li>\n<li><strong>납부지연</strong> — 미납세액에 하루 22/100,000 수준의 이자.</li>\n<li><strong>해외금융계좌 미신고</strong> — 5억 원 초과 시 별도 과태료까지 병행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해외재산은 과세관청 간 정보 교환으로 결국 드러나는 구조이므로 초기에 정직 신고가 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외재산 평가·신고 기준의 엄격성',
        summary:
          '대법원 2024누14742 사건(행정법원·고등법원)에서 법원은 해외재산 상속 시 평가 기준일·환율 기준을 정확히 적용해야 하고, 납세자가 임의로 유리한 시점을 택할 수 없다고 판시했습니다. 기준에 어긋난 과소신고는 가산세 부과 사유입니다.',
        takeaway:
          '상속개시일 기준환율·시가 평가를 정확히 지키는 것이 해외재산 신고의 출발점입니다.',
      },
    ],
    faq: [
      {
        question: '현지에서 이미 상속세를 냈는데 한국에 또 내나요?',
        answer:
          '<strong>전 세계 재산에 한국 상속세가 부과되지만, 외국납부세액공제로 이중과세는 조정됩니다.</strong> 영수증 증빙이 핵심입니다.',
      },
      {
        question: '피상속인이 비거주자면 한국 재산만 내면 되나요?',
        answer:
          '<strong>기본적으로 그렇습니다.</strong> 다만 상속인이 거주자면 해외재산 취득 이후 소득·보유에 대한 신고는 별도로 필요합니다.',
      },
      {
        question: '해외 은행 계좌를 상속인이 모르면 어떻게 찾나요?',
        answer:
          '<strong>현지 공적기록·세무 자료와 금융 조사업체, 한국 국세청의 해외금융 정보 등을 활용해 확인합니다.</strong> 현지 변호사 도움이 필요할 수 있습니다.',
      },
      {
        question: '상속세 낼 현금이 없으면 어떻게 하나요?',
        answer:
          '<strong>연부연납·물납 제도를 활용할 수 있습니다.</strong> 해외재산도 요건을 맞추면 분납이 가능하므로 미리 신청하세요.',
      },
      {
        question: '신고 기한을 놓쳤는데 지금이라도 해야 하나요?',
        answer:
          '<strong>네, 자진 수정신고로 가산세를 일부 감면받을 수 있습니다.</strong> 시간이 더 지날수록 불이익이 커지니 바로 진행하세요.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속세 신고 기한·공제', href: '/guide/inheritance/inheritance-tax-filing-deadline' },
      { label: '해외금융계좌 신고 의무', href: '/guide/inheritance/inheritance-foreign-account-report' },
      { label: '상속재산 평가 방법', href: '/guide/inheritance/inheritance-asset-valuation-method' },
      { label: '외국납부세액공제', href: '/guide/inheritance/inheritance-foreign-tax-credit' },
      { label: '상속재산 분할 협의서', href: '/guide/inheritance/inheritance-division-agreement' },
    ],
  },

  // ─── 3. inheritance / contested-will-validity-challenge ───
  {
    domain: 'inheritance',
    slug: 'inheritance-contested-will-validity-challenge',
    keyword: '유언장 효력 다툼 필적감정',
    questionKeyword: '아버지 자필 유언장이 진짜인지 의심되는데 어떻게 다투나요?',
    ctaKeyword: '유언장 무효확인·필적감정 준비',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유언장 효력 다투는 5단계 필적감정 절차 | 로앤가이드',
      description:
        '자필·공정증서 유언장이 진짜인지 효력이 있는지 의심스럽다면 필적감정·무효확인의 소 절차와 증거 수집 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"어머니 돌아가시고 형이 갑자기 유언장을 꺼냈는데 필체가 어색합니다." 상속 분쟁에서 유언장 진위 문제는 가장 흔한 쟁점 중 하나입니다. 민법은 자필·공정·녹음·비밀·구수증서 5가지 방식만을 인정하고, 하나라도 요건이 어긋나면 유언 자체가 무효가 됩니다. 다투려면 시한·입증 방법을 제대로 알아야 합니다.</p>',
    sections: [
      {
        title: '유언장 5가지 방식 요건 — 한 가지라도 어긋나면 무효',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1065조~제1072조 — 엄격한 형식을 지키지 않은 유언장은 효력이 없습니다.</strong></p>\n<ul>\n<li><strong>자필증서</strong> — 전문·연월일·주소·성명 모두 자필 + 날인(민법 제1066조).</li>\n<li><strong>공정증서</strong> — 증인 2명 + 공증인 앞에서 구술·필기·확인.</li>\n<li><strong>녹음</strong> — 유언자 + 증인의 구술 녹음.</li>\n<li><strong>비밀증서</strong> — 5일 이내 공증 또는 등기 확정일자.</li>\n<li><strong>구수증서</strong> — 질병 등 급박 상황 + 증인 2명 + 7일 이내 법원 확인 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "주소 누락"·"날인 없음" 같은 사소해 보이는 흠결도 전부 무효 사유입니다.</blockquote>',
      },
      {
        title: '5단계 다툼 절차 — 확정부터 소송까지',
        content:
          '<p><strong style="color:#1e3a5f">검인기일 → 감정 → 무효확인 소송 순으로 단계별 증거를 쌓아야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언장 검인 기일 출석</strong> — 법원에서 형식 요건 확인, 이의 진술 기록화.</li>\n<li><strong>2단계 — 원본 확보·사본 보관</strong> — 원본 열람·등사를 통해 필적·흠결 확인.</li>\n<li><strong>3단계 — 필적감정 신청</strong> — 국과수 또는 사감정 기관에 비교 자료 제출.</li>\n<li><strong>4단계 — 유언무효확인의 소</strong> — 가정법원에 제기, 공동상속인 모두 당사자.</li>\n<li><strong>5단계 — 가처분·분할 중지 병행</strong> — 확정 전 상속재산 처분 방지.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 유언장 형식 요건과 다툴 수 있는 쟁점을 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '필적감정 — 비교자료가 결정적',
        content:
          '<p><strong style="color:#1e3a5f">감정 정확도는 비교자료의 질과 양에 달려있습니다.</strong></p>\n<ul>\n<li><strong>동시기 자필</strong> — 유언 전후 1~2년 내 편지·일기·업무 기록.</li>\n<li><strong>공식 문서</strong> — 관공서 제출용 서명·은행 자필 신청서 등.</li>\n<li><strong>샘플 수량</strong> — 최소 5매 이상 확보하면 신뢰도가 크게 높아짐.</li>\n<li><strong>사감정 vs 국과수</strong> — 신속성은 사감정, 법정 신뢰성은 국과수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 병환 중 작성된 유언이라면 병원 기록·의사 진술도 필적의 흐트러짐을 뒷받침합니다.</blockquote>',
      },
      {
        title: '의사능력·강박 — 형식 외 무효 사유',
        content:
          '<p><strong style="color:#1e3a5f">형식은 갖췄어도 의사능력 결여나 강박이 입증되면 무효가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>의사능력</strong> — 치매·중증 질환 시기 작성 여부, 의무기록·요양병원 기록이 핵심.</li>\n<li><strong>강박·사기</strong> — 특정 상속인이 병원 동행·변호사 수배 등 전체 관여했는지.</li>\n<li><strong>격리 상황</strong> — 임종 직전 타 상속인 접근 차단 정황.</li>\n<li><strong>내용 이상</strong> — 평소 뜻과 전혀 다른 배분, 갑작스러운 수정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 의사능력 다툼은 의료기록 확보가 시간싸움이므로 원본이 폐기되기 전 신속히 열람 신청하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유언 형식 엄격 해석',
        summary:
          '대법원 2025두34851 사건에서 법원은 유언의 방식 요건은 엄격하게 해석해야 하고, 요건 흠결 유언장은 유언자의 의사가 명백하더라도 효력을 인정할 수 없다고 판시했습니다. 주소 누락·날인 누락도 예외 없이 무효 사유라는 취지입니다.',
        takeaway:
          '사소해 보이는 형식 흠결도 유언 전체를 무효로 만들 수 있으므로 초기에 확인해 다툴 실익을 판단하세요.',
      },
    ],
    faq: [
      {
        question: '유언장이 공정증서인데도 무효 주장이 가능한가요?',
        answer:
          '<strong>가능합니다. 증인 요건·의사능력·절차 위반이 있으면 다툴 수 있습니다.</strong> 공증사무소 녹취·증인 진술을 확보하세요.',
      },
      {
        question: '필적감정 비용이 얼마나 드나요?',
        answer:
          '<strong>사감정은 수백만 원 수준, 국과수는 공적 절차로 비교자료 품질에 따라 시간이 걸립니다.</strong> 분쟁 규모에 맞춰 선택하세요.',
      },
      {
        question: '유언 검인을 안 거치고 바로 소송 가능한가요?',
        answer:
          '<strong>자필증서는 검인 절차를 거치는 것이 원칙입니다.</strong> 병행해서 무효확인의 소를 제기할 수도 있습니다.',
      },
      {
        question: '유언장이 여러 개면 어떤 것이 우선인가요?',
        answer:
          '<strong>일반적으로 가장 최근 유언이 앞선 유언을 철회·변경하는 효과가 있습니다.</strong> 다만 내용 저촉 여부를 따져야 합니다.',
      },
      {
        question: '유언 집행자가 상속인 중 한 명이어도 되나요?',
        answer:
          '<strong>가능하지만 이해 충돌이 생길 수 있습니다.</strong> 분쟁 가능성이 크면 법원에 유언집행자 지정·해임 청구를 고려하세요.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '유언 형식 요건 총정리', href: '/guide/inheritance/inheritance-will-formal-requirements' },
      { label: '상속재산 분할 협의서', href: '/guide/inheritance/inheritance-division-agreement' },
      { label: '유류분 청구 절차', href: '/guide/inheritance/inheritance-legal-reserve-claim' },
      { label: '유언 집행자 지정·해임', href: '/guide/inheritance/inheritance-executor-appointment' },
      { label: '상속재산 처분 가처분', href: '/guide/inheritance/inheritance-asset-injunction' },
    ],
  },

  // ─── 4. inheritance / digital-assets-platform-access ───
  {
    domain: 'inheritance',
    slug: 'inheritance-digital-assets-platform-access',
    keyword: '디지털자산 상속 코인 계정',
    questionKeyword: '돌아가신 아버지 코인지갑·네이버·카톡 계정은 어떻게 상속받나요?',
    ctaKeyword: '디지털자산 상속 접근 절차',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '디지털자산 상속 4가지 플랫폼 접근 절차 | 로앤가이드',
      description:
        '코인·국내 포털·해외 SNS·클라우드 등 디지털자산은 플랫폼마다 상속 절차가 다릅니다. 필요한 서류와 기한을 지금 확인하세요.',
    },
    intro:
      '<p>부친이 거래소에 보유 중이던 코인, 네이버·카톡 사진, 구글 드라이브의 업무 자료가 어디 있는지조차 파악이 안 됩니다. "비밀번호도 모르는데 어떻게 상속받지?"라는 막막함에 방치하면 일부 자산은 영구 소실됩니다. 디지털자산은 플랫폼별로 상속 절차가 달라 순서를 아는 것이 출발입니다.</p>',
    sections: [
      {
        title: '디지털자산 4대 유형 — 절차가 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">암호화폐·국내 포털·해외 SNS·클라우드는 접근 경로가 각기 다릅니다.</strong></p>\n<ul>\n<li><strong>암호화폐 거래소</strong> — 업비트·빗썸 등 KYC 기반, 사망증명 + 상속인 지위 확인으로 이전 가능.</li>\n<li><strong>국내 포털(네이버·다음)</strong> — 계정 직접 승계는 제한, 데이터 열람·다운로드 요청 절차.</li>\n<li><strong>해외 SNS(구글·페이스북·인스타)</strong> — 추모계정 전환 또는 데이터 다운로드(미국법 기준).</li>\n<li><strong>클라우드·이메일</strong> — 구글·애플 등 별도 약관에 사망자 정책 명시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "계정 양도"가 아니라 "데이터 추출·자산 이전"이라는 프레임으로 접근해야 성공률이 높아집니다.</blockquote>',
      },
      {
        title: '표준 절차 5단계 — 모든 플랫폼 공통',
        content:
          '<p><strong style="color:#1e3a5f">증명서 구비 → 신청 → 검토 → 이전·다운로드 순으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망 사실 증명</strong> — 사망진단서, 가족관계증명서 영문본 준비.</li>\n<li><strong>2단계 — 상속인 지위 증명</strong> — 기본증명서·상속협의서·법원 결정문 등.</li>\n<li><strong>3단계 — 플랫폼 공식 양식 작성</strong> — 고객센터 또는 전용 페이지.</li>\n<li><strong>4단계 — 본인 인증</strong> — 신분증·공증·영사 확인(해외 플랫폼).</li>\n<li><strong>5단계 — 이전/다운로드 수령</strong> — 거래소는 지갑 이관, 데이터는 압축파일 전송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 플랫폼별 상속 접근 절차와 필요 서류를 바로 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '암호화폐 특별 주의 — 개인지갑과 거래소 다름',
        content:
          '<p><strong style="color:#1e3a5f">거래소는 절차가 있지만, 하드월렛 개인지갑은 시드문구가 없으면 회복 불가입니다.</strong></p>\n<ul>\n<li><strong>거래소 보관분</strong> — 실명계정 기준, 상속인 명의로 출금 또는 원화 이체.</li>\n<li><strong>개인지갑</strong> — 시드·개인키 없으면 복구 불가, 유품 수색이 유일한 길.</li>\n<li><strong>세무 신고</strong> — 상속개시일 기준 시가로 평가해 상속세 신고 포함.</li>\n<li><strong>거래소 해외법인</strong> — 한국 서류로 거부되면 현지 변호사 도움 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 고인의 책상·서류철·금고에서 시드문구가 적힌 종이·하드월렛을 먼저 찾아보세요. 사후 발견이 거의 불가능합니다.</blockquote>',
      },
      {
        title: '데이터 보존 요청 — 열람만이라도',
        content:
          '<p><strong style="color:#1e3a5f">자산 이전이 어려워도 데이터·추억 보존 경로는 있습니다.</strong></p>\n<ul>\n<li><strong>추모계정 전환</strong> — 페이스북·인스타그램은 사후 추모 모드로 보존.</li>\n<li><strong>데이터 다운로드 요청</strong> — 구글 "사망자 데이터 요청" 공식 양식 제공.</li>\n<li><strong>카카오·네이버</strong> — 유족 신청으로 게시물 삭제·메일 요청 가능.</li>\n<li><strong>백업 공유</strong> — 생전 "유산 관리자" 지정 기능(구글 비활성 계정 관리자).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 일부 플랫폼은 6개월~1년 내 신청해야 하고 이후에는 계정 자동 삭제되므로 시점이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래소 예탁 가상자산 상속성 인정',
        summary:
          '대법원 2022다220014 사건에서 법원은 거래소에 예탁된 가상자산에 대한 반환청구권은 재산권으로서 상속 대상이 된다고 판시했습니다. 단순한 "계정 권한"이 아니라 재산적 가치로 상속된다는 의미입니다.',
        takeaway:
          '거래소 보유 코인은 상속재산 목록에 가능한 한 포함해 세무·분할 절차를 밟아야 합니다.',
      },
    ],
    faq: [
      {
        question: '비밀번호를 모르면 코인을 절대 못 찾나요?',
        answer:
          '<strong>거래소 보관분은 상속 절차로 복구 가능하나, 개인지갑은 시드·개인키가 없으면 사실상 회복이 어렵습니다.</strong> 유품 수색이 최우선입니다.',
      },
      {
        question: '고인의 카톡·네이버 메일을 상속인이 읽을 수 있나요?',
        answer:
          '<strong>국내 포털은 직접 열람 승계를 허용하지 않고, 데이터 추출·삭제 요청 경로만 있습니다.</strong> 개인정보 보호 원칙 때문입니다.',
      },
      {
        question: '디지털자산도 상속세 신고 대상인가요?',
        answer:
          '<strong>가상자산·디지털 저작권 등 재산적 가치가 있는 것은 신고 대상입니다.</strong> 시가 평가가 어렵다면 전문가 평가가 필요합니다.',
      },
      {
        question: '해외 플랫폼은 한국 서류만으로 되나요?',
        answer:
          '<strong>상당수는 영문 번역 + 아포스티유·영사 확인을 추가로 요구합니다.</strong> 구글·애플 등은 자체 양식이 별도로 있습니다.',
      },
      {
        question: '추모계정으로만 전환하고 데이터는 그대로 두면 되나요?',
        answer:
          '<strong>당장 불편은 없으나, 비즈니스·업무 자료가 담긴 계정은 데이터 추출을 병행하는 편이 안전합니다.</strong> 후속 분쟁 예방에도 유리합니다.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-search-procedure' },
      { label: '가상자산 상속세 평가', href: '/guide/inheritance/inheritance-crypto-tax-valuation' },
      { label: '해외재산 상속 절차', href: '/guide/inheritance/inheritance-foreign-assets-declaration-report' },
      { label: '상속재산 분할 협의서', href: '/guide/inheritance/inheritance-division-agreement' },
      { label: '유언 집행자 지정·해임', href: '/guide/inheritance/inheritance-executor-appointment' },
    ],
  },

  // ─── 5. defamation / group-chat-screenshot-evidence-value ───
  {
    domain: 'defamation',
    slug: 'defamation-group-chat-screenshot-evidence-value',
    keyword: '단톡방 캡처 명예훼손 증거',
    questionKeyword: '단톡방 욕설을 캡처만 해도 명예훼손 고소할 수 있나요?',
    ctaKeyword: '단톡방 캡처 증거능력 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '단톡방 캡처 명예훼손 증거 4가지 체크 | 로앤가이드',
      description:
        '단톡방에서 받은 욕설·허위사실 캡처만으로도 명예훼손 고소가 가능한지, 증거능력과 적법수집 여부를 지금 확인하세요.',
    },
    intro:
      '<p>동료 10여 명이 있는 단톡방에 저를 겨냥한 허위사실이 올라왔습니다. 스크린샷은 바로 찍었지만 "이게 증거로 인정될까, 대화 참여자 동의 없이 찍은 건 문제되지 않을까" 걱정이 앞섭니다. 단톡방 캡처는 명예훼손·모욕 사건에서 가장 흔한 증거지만, 공연성·특정성·적법수집 3가지를 함께 따져야 합니다.</p>',
    sections: [
      {
        title: '공연성·특정성 — 성립 요건 먼저',
        content:
          '<p><strong style="color:#1e3a5f">단톡방 인원수·성격에 따라 공연성 인정 여부가 달라집니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정 다수 또는 전파 가능성 있는 특정 다수에게 도달.</li>\n<li><strong>단톡방 성격</strong> — 회사·학교 등 구성원 수·접근성·주제 범위가 판단 기준.</li>\n<li><strong>특정성</strong> — 피해자를 알아볼 수 있게 지칭(실명·별명·사진 등).</li>\n<li><strong>허위/사실</strong> — 사실적시 명예훼손(형법 제307조 제1항) vs 허위(제2항) 구분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "소수 친구만 있는 카톡"이라도 전파 가능성이 인정되면 공연성이 성립할 수 있습니다.</blockquote>',
      },
      {
        title: '캡처 증거능력 5단계 확보 절차',
        content:
          '<p><strong style="color:#1e3a5f">조작 의심을 차단하려면 원본 접근 + 메타데이터까지 보존해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 원본 대화 즉시 캡처</strong> — 시간·프로필·발언 전체 한 화면.</li>\n<li><strong>2단계 — 내보내기(txt)</strong> — 카카오톡 "대화 내보내기"로 타임스탬프 포함 전체 저장.</li>\n<li><strong>3단계 — 해시값·SHA 기록</strong> — 파일 해시값을 함께 보관해 위변조 방지 근거.</li>\n<li><strong>4단계 — 공증</strong> — 논쟁 큰 사건은 공증사무소 사실조회·전자문서 공증.</li>\n<li><strong>5단계 — 제3자 증인 확보</strong> — 같은 단톡방 인원에게 증언·진술서 요청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 단톡방 증거의 성립 요건과 고소 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '적법수집 — 본인이 참여한 대화는 문제없음',
        content:
          '<p><strong style="color:#1e3a5f">통신비밀보호법은 "대화에 참여하지 않은 사람"의 녹음·촬영을 금지합니다.</strong></p>\n<ul>\n<li><strong>본인 참여 대화</strong> — 단톡방 구성원 본인이 캡처한 것은 적법.</li>\n<li><strong>제3자 촬영</strong> — 대화에 참여하지 않은 사람이 단말기를 찍은 경우 증거능력 제한.</li>\n<li><strong>해킹·계정 도용</strong> — 타인 계정으로 접근해 얻은 자료는 위법 수집 증거.</li>\n<li><strong>전달 캡처</strong> — 제3자가 단톡방 캡처를 전달해 준 경우 수집자가 적법한지 중요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 참여한 단톡방 캡처는 원칙적으로 합법이며, 고소·소송 현장에서 가장 많이 쓰이는 증거입니다.</blockquote>',
      },
      {
        title: '고소·민사까지 — 병행 카드',
        content:
          '<p><strong style="color:#1e3a5f">형사 고소 + 민사 손해배상을 병행하면 실질 구제 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>형사 고소</strong> — 관할 경찰서 또는 사이버수사대, 명예훼손·모욕 구분.</li>\n<li><strong>민사 손해배상</strong> — 위자료·치료비·일실이익 청구, 시효 3년.</li>\n<li><strong>접근금지 가처분</strong> — 지속 비방 시 접근·게시 금지 가처분.</li>\n<li><strong>회사 내 조치</strong> — 취업규칙상 징계 요청, 인사위 증거 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 고소 전 지나친 항의·맞대응 글은 반소·쌍방 고소의 빌미가 될 수 있으니 자제하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단톡방·SNS 전파 가능성 기준',
        summary:
          '대법원 2022도15971 사건에서 법원은 특정 다수가 있는 단체대화방에서도 전파 가능성이 있으면 공연성이 인정되고, 사실적시 명예훼손이 성립한다고 판시했습니다. 인원수가 적더라도 확산 가능성이 핵심 기준입니다.',
        takeaway:
          '"소수 단톡"이라는 이유로 처벌을 피하기 어렵고, 피해자 역시 가해자 주장을 반박할 근거로 활용할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '지워진 대화는 복구 가능한가요?',
        answer:
          '<strong>본인 기기에서는 캐시·백업 복구가 가능할 수 있으나, 상대방이 삭제했다면 증거 확보는 어렵습니다.</strong> 가능한 한 즉시 캡처가 답입니다.',
      },
      {
        question: '닉네임·프로필만 나와 있어도 특정성이 인정되나요?',
        answer:
          '<strong>평소 불리는 별칭·직장·연령 등 주변 정보로 특정할 수 있으면 인정될 수 있습니다.</strong> 같은 대화방 사람들이 누구를 가리키는지 알면 충분합니다.',
      },
      {
        question: '사실만 말했는데도 명예훼손인가요?',
        answer:
          '<strong>사실이어도 명예훼손이 성립할 수 있습니다.</strong> 공익성·상당성이 인정되면 위법성이 조각될 수 있어 맥락이 중요합니다.',
      },
      {
        question: '감정적인 욕설은 명예훼손과 무엇이 다른가요?',
        answer:
          '<strong>구체적 사실 적시 없는 경멸 표현은 보통 모욕죄로 분류됩니다.</strong> 처벌 요건과 수위가 다르니 따로 판단해야 합니다.',
      },
      {
        question: '고소를 미루면 효력이 떨어지나요?',
        answer:
          '<strong>고소 기간은 원칙 6개월이지만 증거 확보는 빠를수록 좋습니다.</strong> 늦어질수록 대화 삭제·진술 번복이 생깁니다.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 vs 모욕 구분', href: '/guide/defamation/defamation-vs-insult-distinction' },
      { label: '사이버 명예훼손 고소 절차', href: '/guide/defamation/defamation-cyber-report-procedure' },
      { label: '단톡방 공연성 판단', href: '/guide/defamation/defamation-group-chat-publicity' },
      { label: '손해배상 청구 소송', href: '/guide/defamation/defamation-civil-damage-claim' },
      { label: '접근금지·게시금지 가처분', href: '/guide/defamation/defamation-injunction-procedure' },
    ],
  },

  // ─── 6. defamation / deepfake-victim-takedown-procedure ───
  {
    domain: 'defamation',
    slug: 'defamation-deepfake-victim-takedown-procedure',
    keyword: '딥페이크 피해 신속삭제',
    questionKeyword: '제 얼굴로 만든 딥페이크 영상이 퍼지고 있는데 어떻게 없애나요?',
    ctaKeyword: '딥페이크 삭제·신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '딥페이크 피해 신속삭제 5단계 대응 절차 | 로앤가이드',
      description:
        '본인 얼굴로 만들어진 딥페이크 합성물이 유포됐다면 24시간 내 삭제 요청·수사 의뢰·손해배상까지 동시에 준비해야 합니다. 지금 확인하세요.',
    },
    intro:
      '<p>어느 날 "네 얼굴이 성인물에 합성돼 돌아다닌다"는 연락을 받으면 손이 떨립니다. 딥페이크 피해는 전파 속도가 압도적으로 빠르기 때문에, 발견 즉시 24시간 내에 삭제·수사·증거 3축을 동시에 움직여야 합니다. 절차를 모르면 첫 하루를 놓쳐 확산이 걷잡을 수 없이 커집니다.</p>',
    sections: [
      {
        title: '신속삭제 경로 — 플랫폼별 창구',
        content:
          '<p><strong style="color:#1e3a5f">방심위·디성센터·경찰 사이버수사대·플랫폼 자체 신고를 동시에 진행하세요.</strong></p>\n<ul>\n<li><strong>디지털성범죄피해자지원센터(디성센터)</strong> — 24시간 상담·삭제 지원 공공기관.</li>\n<li><strong>방송통신심의위원회</strong> — 불법·유해 정보 시정요구, 국내 플랫폼에 구속력.</li>\n<li><strong>해외 플랫폼</strong> — X·텔레그램·디스코드 자체 신고 양식 + NCMEC 국제 공조.</li>\n<li><strong>경찰 사이버수사대</strong> — 112 또는 사이버수사 직접 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 국내 플랫폼은 시정요구 즉시 이행률이 높으니 방심위 신고를 가능한 한 병행하세요.</blockquote>',
      },
      {
        title: '5단계 대응 — 첫 24시간 행동',
        content:
          '<p><strong style="color:#1e3a5f">증거 보존 → 삭제 요청 → 수사 의뢰 → 심리지원 → 손해배상 순으로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존</strong> — URL·캡처·다운로드 링크·해시값 즉시 저장.</li>\n<li><strong>2단계 — 삭제 요청</strong> — 디성센터 + 방심위 + 플랫폼 동시 신청.</li>\n<li><strong>3단계 — 수사 의뢰</strong> — 경찰 사이버수사대, 성폭력처벌법 제14조의2 적용.</li>\n<li><strong>4단계 — 심리·법률 지원</strong> — 해바라기센터·디성센터 심리상담·변호사 지원.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 유포자 특정 후 위자료·치료비 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 딥페이크 삭제·수사 절차를 첫 24시간 기준으로 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 보존 — 지우지 말고 기록하라',
        content:
          '<p><strong style="color:#1e3a5f">감정적 충동으로 바로 삭제하면 가해자 특정이 어려워집니다.</strong></p>\n<ul>\n<li><strong>URL 기록</strong> — 업로드 채널·게시글·계정 정보 모두 캡처.</li>\n<li><strong>타임스탬프</strong> — 화면 녹화로 조회수·공유 흔적까지 영상 보존.</li>\n<li><strong>파일 다운로드</strong> — 원본 파일 해시값을 계산해 변조 방지.</li>\n<li><strong>수신 메시지</strong> — 협박·요구 메시지도 별도 스크린샷.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경찰은 URL + 캡처만으로도 수사가 가능합니다. 본인이 영상을 계속 보지 않아도 되니 심리 보호를 우선하세요.</blockquote>',
      },
      {
        title: '처벌 조항 — 제작·유포 모두 중벌',
        content:
          '<p><strong style="color:#1e3a5f">성폭력처벌법 제14조의2 — 허위영상물 제작·반포는 7년 이하 징역.</strong></p>\n<ul>\n<li><strong>제작·편집·합성</strong> — 성적 수치심 유발 영상은 제작만으로 처벌.</li>\n<li><strong>반포·판매</strong> — 반포·판매·임대·제공 행위 7년 이하.</li>\n<li><strong>영리 목적</strong> — 돈·대가가 개입되면 가중처벌 가능.</li>\n<li><strong>피해자 보호</strong> — 신원 비공개, 국선변호인 지원 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "재미로 만들었다"는 변명은 통하지 않습니다. 보관·전송 자체만으로 처벌되는 구조입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 딥페이크 유포와 신속 조치 필요성',
        summary:
          '대법원 2023도16586 사건에서 법원은 허위영상물 제작·반포 행위에 대해 피해자의 신속한 권리보호 필요성을 강조하며 중형을 선고했습니다. 플랫폼·수사기관의 초기 대응이 피해 확산 방지에 결정적이라는 취지입니다.',
        takeaway:
          '피해자는 개인이 감당하지 않고 공적 절차(디성센터·수사기관)를 즉시 가동해야 확산을 막을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '가해자를 전혀 모르는데도 신고가 되나요?',
        answer:
          '<strong>됩니다. URL·캡처만으로도 수사가 시작되고, 플랫폼 협조로 계정 추적이 진행됩니다.</strong> 본인은 신분이 보호된 상태로 기다릴 수 있습니다.',
      },
      {
        question: '국내 플랫폼은 얼마나 빨리 삭제해주나요?',
        answer:
          '<strong>방심위 시정요구·신고가 접수되면 대체로 24~72시간 내 삭제됩니다.</strong> 국내 사업자는 구속력이 높은 편입니다.',
      },
      {
        question: '해외 플랫폼도 신고하면 삭제되나요?',
        answer:
          '<strong>정책 위반이 명백하면 신고로 삭제 가능하지만 시일이 걸립니다.</strong> 디성센터를 통한 국제 공조가 훨씬 효과적입니다.',
      },
      {
        question: '민사 손해배상 가능한가요?',
        answer:
          '<strong>가능합니다. 위자료·치료비·일실이익 청구로 3년 내 소송을 제기할 수 있습니다.</strong> 형사 절차와 병행하면 증거 확보가 쉬워집니다.',
      },
      {
        question: '친구나 지인이 만든 경우도 처벌되나요?',
        answer:
          '<strong>친분 여부와 무관하게 처벌 대상입니다.</strong> 오히려 신원 특정이 쉬워 수사는 빠르게 진행됩니다.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '디지털성범죄 신고 절차', href: '/guide/defamation/defamation-digital-sex-crime-report' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-civil-damage-claim' },
      { label: '불법촬영물 삭제 요청', href: '/guide/defamation/defamation-illegal-filming-takedown' },
      { label: '사이버 명예훼손 고소 절차', href: '/guide/defamation/defamation-cyber-report-procedure' },
      { label: '피해자 법률·심리지원', href: '/guide/defamation/defamation-victim-support-program' },
    ],
  },

  // ─── 7. defamation / former-employee-review-glassdoor ───
  {
    domain: 'defamation',
    slug: 'defamation-former-employee-review-glassdoor',
    keyword: '전 직원 회사 리뷰 명예훼손',
    questionKeyword: '퇴사한 회사에 리뷰를 썼는데 명예훼손으로 고소당했어요?',
    ctaKeyword: '회사 리뷰 명예훼손 방어 준비',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '전 직원 회사 리뷰 명예훼손 Q&A 5가지 | 로앤가이드',
      description:
        '퇴사 후 쓴 잡플래닛·블라인드 리뷰로 명예훼손 고소를 받았다면 사실 적시·공익성·상당성 방어 논점을 지금 확인하세요.',
    },
    intro:
      '<p>"블라인드에 썼던 회사 후기 때문에 고소장이 왔다"는 연락을 받으면 당황스럽습니다. 내 경험을 솔직하게 쓴 것뿐인데 형사 고소라니 과하다는 생각도 들죠. 다만 사실적시 명예훼손은 의외로 쉽게 성립하고, 방어 포인트는 공익성과 상당성이라는 두 축에 집중됩니다. 답변 순서를 알아야 불리한 진술을 피할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q1. 사실만 적어도 처벌받나요?',
        content:
          '<p><strong style="color:#1e3a5f">사실 적시여도 공연성·특정성이 충족되면 처벌 대상입니다.</strong></p>\n<ul>\n<li><strong>형법 제307조 제1항</strong> — 사실 적시도 2년 이하 징역 또는 500만 원 이하 벌금.</li>\n<li><strong>제310조 위법성 조각</strong> — 공익성 + 상당성 입증 시 무죄 가능.</li>\n<li><strong>허위 적시</strong> — 같은 조 제2항, 형량 더 중함.</li>\n<li><strong>회사 vs 개인</strong> — 법인도 명예훼손 피해자가 될 수 있으나 요건이 다소 다름.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "사실만 썼다"가 방어가 아닌 시작점이며, 공익성·상당성을 추가로 입증해야 합니다.</blockquote>',
      },
      {
        title: 'Q2. 공익성 어떻게 주장하나요?',
        content:
          '<p><strong style="color:#1e3a5f">구직자 보호·제도 개선 관점에서 주장을 구성해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 표현 목적 정리</strong> — "회사 비방"이 아니라 "예비 구직자 보호" 취지 강조.</li>\n<li><strong>2단계 — 표현 범위 최소화</strong> — 필요 이상 사생활·개인 공격 여부 검토.</li>\n<li><strong>3단계 — 적시 내용의 진실성</strong> — 근로계약서·급여명세서·메시지 캡처 확보.</li>\n<li><strong>4단계 — 유사 제보 확인</strong> — 동료 리뷰·노동청 진정 등 일관된 사실 정리.</li>\n<li><strong>5단계 — 진술서 작성</strong> — 답변서·의견서에 공익 목적을 논리적으로 서술.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 리뷰 고소건의 공익성·상당성 방어 논점을 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q3. 표현의 적정성 — 어디까지 허용되나?',
        content:
          '<p><strong style="color:#1e3a5f">같은 사실이어도 모멸·비하 표현이 섞이면 위법성 조각이 어려워집니다.</strong></p>\n<ul>\n<li><strong>사실 ↔ 평가</strong> — "야근 강요" 사실 + "악덕 업체"라는 평가 구분.</li>\n<li><strong>개인 공격 금지</strong> — 특정인 실명·외모·가족 언급은 위험.</li>\n<li><strong>수위 조절</strong> — 비속어·조롱 표현은 위법성 조각 가능성을 낮춤.</li>\n<li><strong>표현 범위</strong> — 내가 겪은 경험 범위를 넘지 말 것.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 리뷰를 다시 읽어 사실·평가를 분리하고, 감정 표현만 수정해도 방어가 훨씬 쉬워집니다.</blockquote>',
      },
      {
        title: 'Q4·Q5. 삭제·합의·소송 — 선택지',
        content:
          '<p><strong style="color:#1e3a5f">삭제·사과·합의 조합이 초기 처벌 위험을 크게 낮춥니다.</strong></p>\n<ul>\n<li><strong>Q4. 지금 삭제해도 되나</strong> — 증거는 이미 회사가 확보했을 가능성 높아 삭제는 보조 수단.</li>\n<li><strong>합의 시도</strong> — 삭제·사과문 + 소정 금액으로 고소 취하 유도.</li>\n<li><strong>Q5. 변호사 필요 여부</strong> — 피의자 조사 전 가능한 한 상담, 진술서 작성 동행 권장.</li>\n<li><strong>회사 보복 징계</strong> — 재직 중 징계는 부당노동행위 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 섣부른 "사과문 작성"은 혐의 인정으로 해석될 수 있어 문안은 변호사와 함께 만들어야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 표현 자유와 명예권의 경계',
        summary:
          '대법원 2024도14555 사건에서 법원은 구체적 표현이 공익성·진실성·상당성을 갖춘 경우 위법성이 조각된다고 판시했습니다. 다만 과도한 비하·사생활 폭로가 포함되면 표현의 자유 보호 범위를 벗어난다는 취지입니다.',
        takeaway:
          '사실에 기반한 비판이라면 보호받을 여지가 있지만, 표현 방식이 과격하면 인정이 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '익명 게시판이면 신원이 드러나나요?',
        answer:
          '<strong>경찰 수사로 IP·계정 추적이 가능합니다.</strong> 익명이라고 완전히 안전한 것은 아니며 수사 협조를 전제로 추적됩니다.',
      },
      {
        question: '리뷰를 미리 지우면 문제가 사라지나요?',
        answer:
          '<strong>대부분 회사는 이미 캡처·공증을 확보했습니다.</strong> 삭제는 보조 수단일 뿐 고소 진행에는 영향이 제한적입니다.',
      },
      {
        question: '퇴직 후 NDA(비밀유지) 조항이 적용되나요?',
        answer:
          '<strong>영업비밀·개인정보는 보호받지만 근로조건·업무환경 공개는 일반적으로 허용됩니다.</strong> 계약서 조문을 정확히 확인하세요.',
      },
      {
        question: '민사 손해배상까지 같이 올 수 있나요?',
        answer:
          '<strong>예. 형사 고소와 별도로 민사 청구가 가능합니다.</strong> 위자료·영업손실 등 합쳐질 수 있어 동시 대응이 필요합니다.',
      },
      {
        question: '정당한 내부고발로 바뀌면 보호받나요?',
        answer:
          '<strong>공익신고자 보호법 대상에 해당하면 보복성 고소에서 별도 보호를 받습니다.</strong> 요건을 검토해 권익위 경로를 병행하세요.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/defamation-truth-disclosure-defense' },
      { label: '공익성·상당성 요건', href: '/guide/defamation/defamation-public-interest-requirement' },
      { label: '피의자 조사 대비', href: '/guide/defamation/defamation-suspect-investigation-prep' },
      { label: '민사 손해배상 대응', href: '/guide/defamation/defamation-civil-damage-defense' },
      { label: '합의금 협상 전략', href: '/guide/defamation/defamation-settlement-negotiation' },
    ],
  },

  // ─── 8. jeonse / auction-small-deposit-priority-repay ───
  {
    domain: 'jeonse',
    slug: 'jeonse-auction-small-deposit-priority-repay',
    keyword: '경매 소액임차인 최우선변제',
    questionKeyword: '집이 경매로 넘어갔는데 저는 소액임차인 최우선변제 받을 수 있나요?',
    ctaKeyword: '소액임차인 최우선변제 요건 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경매 소액임차인 최우선변제 4단계 확인법 | 로앤가이드',
      description:
        '집이 경매로 넘어가는 상황에서 소액임차인 최우선변제 기준, 지역별 금액, 배당 순위까지 지금 확인하세요.',
    },
    intro:
      '<p>"살던 집이 경매로 넘어간다"는 통지서를 받으면 보증금 전액이 날아갈까 봐 잠이 안 옵니다. 그러나 임대차보호법은 일정 금액 이하 "소액임차인"에게는 1순위 저당권자보다 먼저 일부를 돌려받을 수 있는 최우선변제권을 부여합니다. 지역·시기·계약 내용 3가지를 함께 맞춰야 실제로 배당받을 수 있습니다.</p>',
    sections: [
      {
        title: '소액임차인 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">보증금 기준·인도·전입신고·대항요건 시점까지 전부 갖춰야 합니다.</strong></p>\n<ul>\n<li><strong>보증금 상한</strong> — 지역별로 서울 1.65억, 수도권 과밀 1.45억 등 기준(시기별 변동).</li>\n<li><strong>주택의 인도</strong> — 실제 점유·열쇠 인수 상태.</li>\n<li><strong>전입신고</strong> — 주민등록 이전, 배당요구 종기 전까지.</li>\n<li><strong>최선순위 담보설정 전 대항요건</strong> — 저당권보다 앞서 인도·전입 갖추면 최우선변제 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "저당권 설정 시점"보다 앞서 전입·점유가 있어야 합니다. 하루 차이로 권리 순위가 바뀝니다.</blockquote>',
      },
      {
        title: '5단계 배당요구 절차',
        content:
          '<p><strong style="color:#1e3a5f">경매개시결정문 수령 → 배당요구 종기 확인 → 서류 제출이 핵심.</strong></p>\n<ol>\n<li><strong>1단계 — 경매 현황 확인</strong> — 법원경매정보, 사건번호·배당요구 종기일 체크.</li>\n<li><strong>2단계 — 임대차관계 증빙</strong> — 계약서·확정일자·전입신고 이력.</li>\n<li><strong>3단계 — 배당요구 신청서 제출</strong> — 종기 전 법원에 서면 제출.</li>\n<li><strong>4단계 — 우선변제금 계산</strong> — 지역별 한도액 + 지분 안분 여부.</li>\n<li><strong>5단계 — 배당기일 출석·이의</strong> — 배당표 확인, 부당 시 이의신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 소액임차 요건 충족 여부와 배당 예상액을 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '지역·시기별 한도 — 놓치면 안 될 숫자',
        content:
          '<p><strong style="color:#1e3a5f">계약 시점이 아니라 "저당권 설정 시점" 기준 법령이 적용됩니다.</strong></p>\n<ul>\n<li><strong>서울</strong> — 보증금 1.65억 이하, 우선변제 5,500만 원(기준일 기준, 변동 주의).</li>\n<li><strong>수도권 과밀</strong> — 보증금 1.45억 이하, 4,800만 원 수준.</li>\n<li><strong>광역시</strong> — 보증금 8,500만 원 이하, 2,800만 원 수준.</li>\n<li><strong>그 외 지역</strong> — 7,500만 원 이하, 2,500만 원 수준.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동일 주택 여러 임차인은 지분·면적 기준으로 안분되므로 본인이 예상한 액수보다 줄어들 수 있습니다.</blockquote>',
      },
      {
        title: '주의할 함정 — 순위 경쟁과 사후 전입',
        content:
          '<p><strong style="color:#1e3a5f">저당권보다 늦은 전입·쪼개기 전세는 최우선변제를 받기 어렵습니다.</strong></p>\n<ul>\n<li><strong>사후 전입</strong> — 저당권 설정 후 전입하면 일반채권자 순위.</li>\n<li><strong>쪼개기 계약</strong> — 보증금을 나눠 소액임차로 꾸민 경우 탈법적 목적 판단.</li>\n<li><strong>상가와 차이</strong> — 상가는 별도 법령·한도 적용.</li>\n<li><strong>전세권 설정</strong> — 전세권이 따로 있으면 기준이 달라지므로 구분 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "배당요구 종기"를 하루만 놓쳐도 최우선변제는 사라지므로 경매개시결정문을 받는 즉시 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 최우선변제 요건 판단 시점',
        summary:
          '대법원 2024다227606 사건에서 법원은 최우선변제권 요건의 충족 여부는 담보권 설정일·배당요구 종기일 등 기준 시점을 정확히 적용해야 하고, 전입·인도 시점이 담보권 이후이면 소액임차 보호의 대상이 되지 않는다고 판시했습니다.',
        takeaway:
          '저당권 설정 전에 실제 전입·인도가 있었는지가 핵심이므로 이사·전입신고 기록을 철저히 확보하세요.',
      },
    ],
    faq: [
      {
        question: '확정일자만 있고 전입이 늦으면 어떻게 되나요?',
        answer:
          '<strong>우선변제권은 확정일자 기준, 최우선변제는 전입·인도 시점 기준으로 나뉩니다.</strong> 둘 중 유리한 경로를 택해야 합니다.',
      },
      {
        question: '월세 계약도 소액임차인 보호를 받나요?',
        answer:
          '<strong>받습니다. 보증금이 기준 이하면 월세 여부와 상관없이 적용됩니다.</strong> 다만 월세 구조에 따라 실제 배당액은 달라집니다.',
      },
      {
        question: '배당요구 종기 지나면 끝인가요?',
        answer:
          '<strong>원칙적으로 종기 이후에는 배당요구가 불가합니다.</strong> 다만 이의 절차나 별도 소송 경로가 일부 있으니 변호사 상담 권장.',
      },
      {
        question: '임대인이 경매 시 고지를 안 해줬어요, 권리 주장이 가능한가요?',
        answer:
          '<strong>경매 현황은 법원경매정보 사이트에서 직접 확인할 수 있습니다.</strong> 고지 없음 자체는 권리에 영향을 주지 않으니 즉시 검색하세요.',
      },
      {
        question: '경매가 취하되면 어떻게 되나요?',
        answer:
          '<strong>기존 계약은 유지되고 보증금 반환 의무도 그대로입니다.</strong> 취하 이후 새로 경매가 개시되면 다시 요건을 따져야 합니다.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '우선변제권 vs 최우선변제권', href: '/guide/jeonse/jeonse-priority-vs-minimum-repay' },
      { label: '배당요구 종기 확인법', href: '/guide/jeonse/jeonse-auction-claim-deadline' },
      { label: '전세사기 피해자 특별법', href: '/guide/jeonse/jeonse-fraud-victim-special-law' },
      { label: '임차권등기명령 신청', href: '/guide/jeonse/jeonse-registration-order' },
      { label: '보증금 반환 소송 절차', href: '/guide/jeonse/jeonse-deposit-lawsuit-procedure' },
    ],
  },

  // ─── 9. jeonse / refund-overdue-interest-claim ───
  {
    domain: 'jeonse',
    slug: 'jeonse-refund-overdue-interest-claim',
    keyword: '전세보증금 지연이자',
    questionKeyword: '보증금 반환이 늦어지는데 지연이자도 받을 수 있나요?',
    ctaKeyword: '보증금 지연이자 산정·청구 준비',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세보증금 지연이자 5단계 청구 절차 | 로앤가이드',
      description:
        '계약 종료 후 보증금 반환이 늦어지면 연 5% 법정이자부터 최대 연 12% 지연손해금까지 청구할 수 있습니다. 요건·절차를 지금 확인하세요.',
    },
    intro:
      '<p>이사 날짜는 이미 지났는데 집주인은 "다음 세입자가 들어오면 드릴게요"라는 말만 반복합니다. 법은 기간이 끝나면 보증금을 즉시 돌려주도록 규정하고, 늦어지는 동안 지연이자를 청구할 수 있도록 보호합니다. 이자율·기산일·내용증명 3가지를 정확히 짚어야 합니다.</p>',
    sections: [
      {
        title: '지연이자 구조 — 단계별 이자율',
        content:
          '<p><strong style="color:#1e3a5f">반환 시점을 지나면 법정이자(연 5%)부터 시작해 소송 단계에서는 연 12%까지 올라갑니다.</strong></p>\n<ul>\n<li><strong>기본 지연이자</strong> — 민법 제397조, 연 5% 법정이자.</li>\n<li><strong>상행위 관련</strong> — 상법 적용되는 경우 연 6%.</li>\n<li><strong>소송촉진법</strong> — 소 제기 후 소송촉진법 시행령에 따라 최고 연 12%까지 가능.</li>\n<li><strong>약정이자</strong> — 계약서에 이자율을 별도 약정했다면 그 비율 우선.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 내용증명 발송 시점 + 소 제기 시점에 따라 이자율이 3단계로 뛰는 구조입니다.</blockquote>',
      },
      {
        title: '5단계 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 → 임차권등기 → 반환소송 → 강제집행 순으로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약 종료·반환 요청</strong> — 이사일·반환일 문자·이메일로 공식 확인.</li>\n<li><strong>2단계 — 내용증명 발송</strong> — 반환 지연 시점, 지연이자 청구 예고.</li>\n<li><strong>3단계 — 임차권등기명령</strong> — 이사 후에도 대항력·우선변제권 유지.</li>\n<li><strong>4단계 — 보증금 반환 소송</strong> — 지급명령 또는 본안, 소송촉진법 이율 주장.</li>\n<li><strong>5단계 — 강제집행</strong> — 부동산·예금 가압류, 경매 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 지연이자 계산·내용증명 문구·절차를 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '기산일 — "언제부터" 이자인지',
        content:
          '<p><strong style="color:#1e3a5f">반환 지체일 다음 날부터 지연이자가 발생합니다.</strong></p>\n<ul>\n<li><strong>계약 종료일</strong> — 이사·인도·퇴거 완료일이 반환 기한.</li>\n<li><strong>묵시적 갱신</strong> — 별도 합의 없으면 3개월 전 통지 기준 종료.</li>\n<li><strong>내용증명 수신일</strong> — 이자율 상승 근거로 중요 기록.</li>\n<li><strong>소 제기일</strong> — 소송촉진법 12% 이자 적용 기산점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 집 열쇠를 반환했는데도 임대인이 "아직 점유 중"이라고 우길 수 있으므로 인수인계 사진·날짜를 남기세요.</blockquote>',
      },
      {
        title: '실무 체크 — 이사 후에도 보호받는 법',
        content:
          '<p><strong style="color:#1e3a5f">임차권등기 없이 이사하면 대항력·우선변제권이 사라질 수 있습니다.</strong></p>\n<ul>\n<li><strong>임차권등기명령</strong> — 법원에 신청, 등기 완료 후 이사해야 안전.</li>\n<li><strong>주민등록 유지</strong> — 짧은 공백이라도 대항력 상실 위험.</li>\n<li><strong>보증보험 활용</strong> — HUG·SGI 가입자는 보증금 대지급 신청 병행.</li>\n<li><strong>가압류</strong> — 집주인의 다른 재산에 가압류로 회수 가능성 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "다음 세입자 오면 돈 드릴게요"는 법적 효력이 약하므로 기한을 정한 서면 약속으로 남기세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 반환 지연과 지연손해금 기준',
        summary:
          '대법원 2024다268508 사건에서 법원은 임대차 종료 후 보증금 반환이 지체된 경우 임대인은 계약 종료일 다음 날부터 법정이자 및 소송촉진법상 지연손해금을 지급할 의무가 있다고 판시했습니다. 새 임차인 확보 여부는 면책 사유가 되지 않습니다.',
        takeaway:
          '"새 세입자 못 구해서"는 집주인 사정일 뿐 지연이자 책임을 면제하지 않는다는 점을 기억하세요.',
      },
    ],
    faq: [
      {
        question: '임대인이 이자만 안 준다는데 가능한가요?',
        answer:
          '<strong>거부할 수 있는 사유가 아닙니다.</strong> 원금과 별도로 청구 가능하며, 지급명령·소송으로 회수할 수 있습니다.',
      },
      {
        question: '보증보험에 가입된 경우 바로 받을 수 있나요?',
        answer:
          '<strong>HUG·SGI 가입 조건을 충족하면 대지급으로 신속히 수령 가능합니다.</strong> 보증보험과 민사소송은 병행할 수 있습니다.',
      },
      {
        question: '내용증명 없이 바로 소송 가능한가요?',
        answer:
          '<strong>가능하지만, 내용증명은 지연이자 산정·합의 압박에 매우 유리합니다.</strong> 먼저 보내고 진행하는 편이 낫습니다.',
      },
      {
        question: '소액이면 지급명령이 빠른가요?',
        answer:
          '<strong>5천만 원 이하 등 단순 금전 청구는 지급명령이 유리합니다.</strong> 다만 이의가 있으면 본안 소송으로 전환됩니다.',
      },
      {
        question: '세입자가 원상회복 안 했다는 이유로 상계 가능한가요?',
        answer:
          '<strong>임대인이 청구 가능한 원상회복비·미납 임료 등에 한해 제한적으로 상계 주장이 가능합니다.</strong> 다만 근거 자료가 필수입니다.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '보증금 반환 소송 절차', href: '/guide/jeonse/jeonse-deposit-lawsuit-procedure' },
      { label: '임차권등기명령 신청', href: '/guide/jeonse/jeonse-registration-order' },
      { label: '내용증명 작성 가이드', href: '/guide/jeonse/jeonse-notice-letter-template' },
      { label: '전세보증보험 대지급 청구', href: '/guide/jeonse/jeonse-guarantee-claim-procedure' },
      { label: '우선변제권 vs 최우선변제권', href: '/guide/jeonse/jeonse-priority-vs-minimum-repay' },
    ],
  },

  // ─── 10. child-support / overseas-parent-enforcement ───
  {
    domain: 'child-support',
    slug: 'child-support-overseas-parent-enforcement',
    keyword: '해외 거주 양육비 강제집행',
    questionKeyword: '전 남편이 외국에 있는데 양육비 강제집행이 되나요?',
    ctaKeyword: '해외 양육비 강제집행 절차',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 양육비 강제집행 5단계 국제공조 절차 | 로앤가이드',
      description:
        '전 배우자가 외국에 거주하며 양육비를 미지급할 때 헤이그 아동부양협약·국제공조·국내재산 집행 등 가능한 경로를 지금 확인하세요.',
    },
    intro:
      '<p>이혼 후 상대가 해외로 출국해 연락조차 안 됩니다. "국내법으로는 강제집행이 된다고 들었는데, 외국에 사는 사람은 어떻게 하지?" 막막한 상황입니다. 헤이그 아동부양협약·국제공조·국내재산 집행 3가지 경로가 있어 순서대로 시도하면 포기하지 않고도 양육비를 받을 수 있습니다.</p>',
    sections: [
      {
        title: '접근 가능한 3가지 경로',
        content:
          '<p><strong style="color:#1e3a5f">국내재산 집행 + 헤이그 협약 + 현지 소송이 병행 가능합니다.</strong></p>\n<ul>\n<li><strong>국내 재산 집행</strong> — 상대가 해외에 있어도 국내 부동산·예금·급여가 있으면 집행 가능.</li>\n<li><strong>헤이그 아동부양협약</strong> — 가입국 상대방에게 양육비 지원 절차 진행.</li>\n<li><strong>현지 소송·집행</strong> — 외국 법원을 통한 집행, 변호사 선임 필요.</li>\n<li><strong>양육비이행관리원</strong> — 국내 절차 대행, 국제공조도 함께 지원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "외국이라 안 된다"는 단정은 잘못이며, 가입국 여부·재산 소재지에 따라 경로가 열립니다.</blockquote>',
      },
      {
        title: '5단계 절차 — 어디부터 시작하나',
        content:
          '<p><strong style="color:#1e3a5f">판결 확보 → 국내 재산 조회 → 해외 경로 선택 순으로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육비 판결·조정 확보</strong> — 가정법원 심판 또는 협의 조정.</li>\n<li><strong>2단계 — 양육비이행관리원 신청</strong> — 상담·재산조회·추심 대행.</li>\n<li><strong>3단계 — 국내 재산 집행</strong> — 통장·부동산·임금 압류 시도.</li>\n<li><strong>4단계 — 국제공조 신청</strong> — 헤이그 협약 가입국이면 중앙당국 경유 청구.</li>\n<li><strong>5단계 — 출국금지·운전면허 정지</strong> — 이행명령 불이행 시 제재 조치.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 해외 양육비 절차와 이행관리원 지원을 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '헤이그 아동부양협약 — 어디까지 되나',
        content:
          '<p><strong style="color:#1e3a5f">가입국 대상으로 양육비 판결 승인·집행을 신청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>적용 국가</strong> — 미국·유럽연합·호주 등 주요국 포함, 비가입국은 별도.</li>\n<li><strong>신청 기관</strong> — 대한민국 중앙당국(여성가족부) 또는 이행관리원.</li>\n<li><strong>승인 요건</strong> — 유효한 판결·조정, 상대방 특정, 번역 서류 구비.</li>\n<li><strong>비용</strong> — 공적 절차는 대부분 무료 또는 소액, 변호사비는 별도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판결문·조정조서를 영문 번역 + 아포스티유까지 준비해두면 국제공조 속도가 크게 빨라집니다.</blockquote>',
      },
      {
        title: '국내 지원 — 한시적 긴급 지원까지',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원의 긴급지원·한시적 선지급 제도를 활용하세요.</strong></p>\n<ul>\n<li><strong>한시적 양육비 긴급지원</strong> — 월 20만 원 수준 한도, 최대 9개월 지원.</li>\n<li><strong>채무 불이행자 명단 공개</strong> — 이행명령 불이행 시 성명·생년월일 공개 제재.</li>\n<li><strong>출국금지</strong> — 일정 채무액 이상 불이행자 출국 제한.</li>\n<li><strong>감치 명령</strong> — 불이행 지속 시 구금 최대 30일.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 감치명령 등은 국내 입국 시 집행 가능하므로 상대 귀국 정보를 이행관리원과 공유하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 이행명령과 감치 요건',
        summary:
          '대법원 2023스637 사건에서 법원은 양육비 이행명령을 정당한 사유 없이 이행하지 않는 경우 감치 처분이 가능하며, 해외 거주 등 사유만으로 면책되지 않는다고 판시했습니다. 이행관리원을 통한 절차적 신청이 필수 요건입니다.',
        takeaway:
          '해외 거주를 이유로 미지급이 정당화되지 않으며, 국내 제재·국제공조를 동시에 활용할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '상대가 어느 나라에 있는지 모르면 시작이 어려운가요?',
        answer:
          '<strong>이행관리원·법원의 사실조회·출입국 기록 조회로 소재를 추적할 수 있습니다.</strong> 먼저 국내 신청을 시작하세요.',
      },
      {
        question: '국내 계좌가 없으면 집행이 전혀 안 되나요?',
        answer:
          '<strong>부동산·임금·연금 등 국내 소재 재산이 있으면 집행 가능합니다.</strong> 현지 재산은 국제공조로 진행합니다.',
      },
      {
        question: '헤이그 미가입국이면 포기해야 하나요?',
        answer:
          '<strong>아닙니다. 양자 협정·현지 소송 등 개별 경로가 있습니다.</strong> 대사관·이행관리원을 통한 상담을 받으세요.',
      },
      {
        question: '비용이 얼마나 드나요?',
        answer:
          '<strong>이행관리원 공적 절차는 무료에 가깝고, 현지 변호사비는 사안별로 다릅니다.</strong> 긴급지원 제도를 먼저 활용하세요.',
      },
      {
        question: '미지급액이 너무 쌓였는데 시효가 걱정돼요.',
        answer:
          '<strong>양육비 채권은 단기 소멸시효 대상일 수 있어 중단 조치가 필요합니다.</strong> 소·지급명령 등으로 시효를 끊어두세요.',
      },
    ],
    cta: {
      text: '양육비 산정기준표, AI로 계산해보기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비이행관리원 지원', href: '/guide/child-support/child-support-enforcement-agency' },
      { label: '양육비 이행명령·감치', href: '/guide/child-support/child-support-contempt-detention' },
      { label: '양육비 한시적 긴급지원', href: '/guide/child-support/child-support-emergency-aid' },
      { label: '국제공조 절차 개관', href: '/guide/child-support/child-support-international-cooperation' },
      { label: '이혼 판결 집행 절차', href: '/guide/child-support/child-support-judgment-enforcement' },
    ],
  },

  // ─── 11. rehabilitation / co-borrower-spouse-impact ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-co-borrower-spouse-impact',
    keyword: '공동채무 배우자 개인회생 영향',
    questionKeyword: '배우자가 연대보증 선 대출이 있는데 저 혼자 회생 신청해도 되나요?',
    ctaKeyword: '공동채무·배우자 회생 영향 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '공동채무 배우자 개인회생 4가지 영향 분석 | 로앤가이드',
      description:
        '배우자가 공동명의·연대보증인으로 있는 대출이 있다면 본인만 개인회생을 신청해도 배우자에게 어떤 영향이 있는지 지금 확인하세요.',
    },
    intro:
      '<p>남편이 사업을 하다가 대출이 쌓였는데 제가 연대보증을 섰습니다. "남편이 개인회생을 신청하면 제게도 책임이 줄어드나" 궁금합니다. 결론부터 말하면, 회생은 신청인 본인만 보호하고 연대보증인·공동명의자에게는 영향을 주지 않는 경우가 많습니다. 구조를 아는 것이 가족 전체를 위한 전략의 출발입니다.</p>',
    sections: [
      {
        title: '회생의 기본 효과 — 본인만 보호',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 신청인 채무를 축소·분할할 뿐, 제3자 책임에는 원칙적으로 영향이 없습니다.</strong></p>\n<ul>\n<li><strong>변제계획 인가</strong> — 본인 채무 일부 감면·장기 분할 확정.</li>\n<li><strong>보증인 책임</strong> — 연대보증·공동명의자는 감면 효과를 받지 못함.</li>\n<li><strong>부부 별산제 원칙</strong> — 부부도 각자 재산·채무 독립이 기본.</li>\n<li><strong>공동채무</strong> — 부부 공동명의 계약은 배우자 책임이 남아 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회생은 본인 숨통을 틔우지만, 배우자 책임은 별도의 절차가 없으면 그대로 유지됩니다.</blockquote>',
      },
      {
        title: '사안별 영향 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">명의·보증·보유 재산을 순서대로 확인해야 전체 그림이 보입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약서 확인</strong> — 공동명의인지 단독인지, 연대보증 여부.</li>\n<li><strong>2단계 — 가산채권 분리</strong> — 본인 채무, 배우자 채무, 공동채무로 구분.</li>\n<li><strong>3단계 — 재산 명의</strong> — 주택·차량·예금 명의자 정리.</li>\n<li><strong>4단계 — 변제계획 수립</strong> — 본인 소득에서 가용소득 산정.</li>\n<li><strong>5단계 — 배우자 별도 대책</strong> — 필요 시 배우자도 회생·신용회복 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 공동채무 구조와 회생 전략을 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부부 공동 회생 — 함께 신청하는 경우',
        content:
          '<p><strong style="color:#1e3a5f">부부 모두 채무자이면 동시 신청으로 효율을 높일 수 있습니다.</strong></p>\n<ul>\n<li><strong>동시 신청 요건</strong> — 각자 회생 요건 충족 + 가용소득 별도 산정.</li>\n<li><strong>생활비 공제</strong> — 중복 공제 방지를 위해 가계비 통합 조정.</li>\n<li><strong>재산 정리</strong> — 공동명의 재산 처분·환가 방향 조율.</li>\n<li><strong>신용 영향</strong> — 부부 각자 개인 신용정보에 기록되어 사후 금융 제한.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소득이 한쪽에 몰려 있으면 동시 신청보다 한 명만 회생·다른 한 명은 신용회복 조합이 유리할 수 있습니다.</blockquote>',
      },
      {
        title: '대체 수단 — 회생 이외의 카드',
        content:
          '<p><strong style="color:#1e3a5f">배우자만 채무가 크다면 신용회복위원회 조정·개인회생·파산 중 최적 조합을 찾아야 합니다.</strong></p>\n<ul>\n<li><strong>신용회복위원회 조정</strong> — 은행권 채무 분할·이자 감면, 법원 절차 없음.</li>\n<li><strong>프리워크아웃</strong> — 연체 초기, 이자 감면 중심.</li>\n<li><strong>개인회생</strong> — 소득이 있을 때 5년 내 변제·잔여 면책.</li>\n<li><strong>개인파산</strong> — 변제능력이 없으면 면책 지향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 부부 중 한 쪽만 파산·회생한다고 끝이 아니며, 연대보증·가산채권이 있으면 다른 쪽에 고스란히 남습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증채무와 회생의 효력 범위',
        summary:
          '대법원 2024다221042 사건에서 법원은 개인회생 절차 개시 및 변제계획 인가의 효력은 원칙적으로 신청인에게만 미치고, 연대보증인·공동채무자에게는 면책 효력이 인정되지 않는다고 판시했습니다. 별도 절차가 필요하다는 취지입니다.',
        takeaway:
          '본인 회생만으로 배우자 연대보증이 사라지지 않으므로 가족 전체 전략을 함께 설계해야 합니다.',
      },
    ],
    faq: [
      {
        question: '배우자 모르게 회생 신청 가능한가요?',
        answer:
          '<strong>원칙적으로 본인 단독 신청이지만, 공동 재산·보증 관계가 있으면 알려지는 경우가 많습니다.</strong> 갈등 예방을 위해 사전 상의를 권장합니다.',
      },
      {
        question: '가압류·압류된 재산은 어떻게 되나요?',
        answer:
          '<strong>개시결정 후 강제집행이 중지될 수 있지만, 배우자 개별 재산은 보호 대상이 아닙니다.</strong> 별도 방어 전략이 필요합니다.',
      },
      {
        question: '배우자 신용에도 영향이 있나요?',
        answer:
          '<strong>직접 신용정보에 기록되지는 않지만, 공동대출·보증채무 연체로 간접 영향이 발생할 수 있습니다.</strong> 정리가 필요합니다.',
      },
      {
        question: '자녀 명의 재산에도 영향이 있나요?',
        answer:
          '<strong>명의가 자녀라면 원칙적으로 영향을 받지 않습니다.</strong> 다만 편취·은닉 의심이 있으면 부인권 대상이 될 수 있습니다.',
      },
      {
        question: '법인 대출 연대보증도 대상이 되나요?',
        answer:
          '<strong>개인자격 보증이면 신청 채무에 포함해야 하며, 법인 변제와 병행 협상이 중요합니다.</strong> 변호사 상담이 필요합니다.',
      },
    ],
    cta: {
      text: '개인회생 신청 자격, AI로 점검하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 신청 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements' },
      { label: '변제계획 수립 가이드', href: '/guide/rehabilitation/rehabilitation-repayment-plan' },
      { label: '부부 공동채무 처리', href: '/guide/rehabilitation/rehabilitation-couple-joint-debt' },
      { label: '신용회복위원회 조정', href: '/guide/rehabilitation/rehabilitation-credit-recovery-adjust' },
      { label: '개인파산과의 차이', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-compare' },
    ],
  },

  // ─── 12. bankruptcy / prior-gift-clawback-defense ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-prior-gift-clawback-defense',
    keyword: '파산 전 증여 부인권 방어',
    questionKeyword: '파산 전에 가족한테 넘긴 돈이 문제가 될 수 있나요?',
    ctaKeyword: '부인권 대비 방어 논리 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '파산 전 증여 부인권 방어 5가지 체크 | 로앤가이드',
      description:
        '파산 직전 가족·지인에게 돈이나 부동산을 넘긴 경우 파산관재인이 부인권을 행사할 수 있습니다. 방어 논리와 시기별 위험을 지금 확인하세요.',
    },
    intro:
      '<p>"파산 신청 전에 어머니 통장으로 3천만 원 보낸 게 있는데 문제되나요?"라는 질문은 실무에서 가장 자주 나오는 고민입니다. 파산관재인은 법에 따라 이런 이체·증여를 되돌리는 "부인권"을 행사할 수 있고, 경우에 따라 면책 거절로 이어지기도 합니다. 시기·성격·대가 3가지 축으로 점검해야 합니다.</p>',
    sections: [
      {
        title: '부인권 3가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제391조 — 고의·지급정지·무상 부인 3가지로 구성됩니다.</strong></p>\n<ul>\n<li><strong>고의부인</strong> — 채권자를 해치는 의도적 행위, 최대 소급 기간 없음(원칙 10년).</li>\n<li><strong>지급정지 후 부인</strong> — 변제 정지·파산신청 후의 처분, 비교적 짧은 소급.</li>\n<li><strong>무상부인</strong> — 6개월 내 무상 양도·증여 전반.</li>\n<li><strong>편파변제</strong> — 특정 채권자만 먼저 갚은 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 6개월 이내 증여·명의이전은 일단 의심 대상이며, 자료가 부족하면 부인 대상이 됩니다.</blockquote>',
      },
      {
        title: '방어 5단계 — 자료로 설명할 수 있어야',
        content:
          '<p><strong style="color:#1e3a5f">목적·대가·관계 3축을 입증 자료로 설명할 준비가 필요합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시기 정리</strong> — 채무 악화 시점, 지급정지·파산신청 시점과 대조.</li>\n<li><strong>2단계 — 성격 구분</strong> — 증여·대여·변제·원상복귀 등 법적 성격 구분.</li>\n<li><strong>3단계 — 대가 입증</strong> — 실제 현금·채무 상계 등 "등가성" 증거.</li>\n<li><strong>4단계 — 관계 설명</strong> — 가족이라도 금전 거래 기록·약정서 확보.</li>\n<li><strong>5단계 — 자발적 회복</strong> — 문제 소지 있으면 미리 환수 협의, 관재인 협조.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 부인권 대상 판단과 방어 논리를 정리해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사례별 위험도 — 가족·사업·지인',
        content:
          '<p><strong style="color:#1e3a5f">같은 금액도 상대·명목에 따라 부인 가능성이 크게 달라집니다.</strong></p>\n<ul>\n<li><strong>배우자·부모 송금</strong> — 무상부인 위험 최상, 생활비·대여 증빙 필요.</li>\n<li><strong>사업 정리금</strong> — 거래처 변제는 편파변제 가능성.</li>\n<li><strong>지인 대여 반환</strong> — 채무 변제 성격이면 부인 가능성 상대적 낮음.</li>\n<li><strong>명의이전</strong> — 부동산·차량 6개월 이내 이전은 매우 취약.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상환 약정서·이체 메모·용도 증빙을 건건이 남기는 것이 사후 분쟁에서 결정적입니다.</blockquote>',
      },
      {
        title: '면책 거절 리스크 — 무엇이 위험한가',
        content:
          '<p><strong style="color:#1e3a5f">은닉·허위 신청으로 판단되면 면책 자체가 거절될 수 있습니다.</strong></p>\n<ul>\n<li><strong>재산 은닉</strong> — 명의 이전·차명 계좌 사용 적발 시 면책 불허 사유.</li>\n<li><strong>허위 신청서</strong> — 재산·부채 누락, 면책 후에도 취소 가능.</li>\n<li><strong>악의 변제</strong> — 특정 지인만 먼저 갚고 다른 채권자 방치.</li>\n<li><strong>부인권 불응</strong> — 관재인 요구에 협조 안 하면 신뢰도 크게 하락.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 문제 소지가 있으면 사전에 자진 신고·환수하는 편이 면책 판정에 훨씬 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 무상행위 부인권의 인정 범위',
        summary:
          '대법원 2022다299829 사건에서 법원은 파산선고 전 일정 기간 내 채무자가 한 무상행위·증여는 원칙적으로 부인권 대상이며, 수익자가 선의라 하더라도 재산이 반환된다고 판시했습니다. 가족관계·친밀성은 면책 사유가 되지 않는 것이 원칙입니다.',
        takeaway:
          '"가족이라 당연히 줬다"는 주장은 통하지 않으며, 자료 없는 송금은 회수 리스크가 크다는 점을 기억하세요.',
      },
    ],
    faq: [
      {
        question: '부모님 생활비 보낸 것도 문제되나요?',
        answer:
          '<strong>정기적·합리적 생활비 범위라면 문제되지 않는 경우가 많습니다.</strong> 다만 고액 단발성 송금은 별도 증빙이 필요합니다.',
      },
      {
        question: '파산 직전 카드값 갚은 것도 편파변제인가요?',
        answer:
          '<strong>일반 생활 유지 범위 결제는 대부분 문제되지 않습니다.</strong> 다만 특정 채권자만 대규모로 먼저 갚으면 편파변제 위험이 있습니다.</strong>',
      },
      {
        question: '명의이전한 부동산이 문제되면 어떻게 되나요?',
        answer:
          '<strong>부인권이 행사되면 원상복구가 원칙입니다.</strong> 수익자도 반환 의무가 있으니 가족 간 협의가 필요합니다.',
      },
      {
        question: '관재인 요구를 거절할 수 있나요?',
        answer:
          '<strong>거절하면 면책 거부·소송으로 이어질 수 있습니다.</strong> 협조하면서 자료로 설명하는 편이 훨씬 유리합니다.',
      },
      {
        question: '자발적 환수하면 부인권이 사라지나요?',
        answer:
          '<strong>자진 반환은 면책 판정에 긍정 요소가 됩니다.</strong> 초기 단계에서 변호사와 협의해 환수 구조를 만들면 효과적입니다.',
      },
    ],
    cta: {
      text: '파산 면책 가능성, AI로 점검하기',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '개인파산 면책 요건', href: '/guide/bankruptcy/bankruptcy-discharge-requirements' },
      { label: '부인권 행사 절차', href: '/guide/bankruptcy/bankruptcy-avoidance-right-procedure' },
      { label: '재산 은닉 리스크', href: '/guide/bankruptcy/bankruptcy-asset-concealment-risk' },
      { label: '면책 거절 사유 정리', href: '/guide/bankruptcy/bankruptcy-discharge-denial-grounds' },
      { label: '개인회생과의 선택', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation' },
    ],
  },

  // ─── 13. stalking / online-only-still-applicable ───
  {
    domain: 'stalking',
    slug: 'stalking-online-only-still-applicable',
    keyword: '온라인만 스토킹처벌법',
    questionKeyword: '오프라인에서 만난 적 없고 DM만 계속 오는데 스토킹처벌법으로 되나요?',
    ctaKeyword: '온라인 스토킹 적용 가능성 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '온라인만 DM 스토킹처벌법 적용 Q&A 5가지 | 로앤가이드',
      description:
        '오프라인 접촉 없이 DM·문자·통화만 반복돼도 스토킹처벌법이 적용되는지, 증거 수집부터 신고 절차까지 지금 확인하세요.',
    },
    intro:
      '<p>모르는 사람이 SNS에서 매일 DM을 보내고, 차단하면 새 계정으로 또 옵니다. "만난 적도 없는데 이게 스토킹 맞나?" 혼란스럽습니다. 2021년 시행된 스토킹처벌법은 오프라인 접근 없이 온라인만으로도 반복성·불안감이 입증되면 성립할 수 있도록 구성돼 있습니다. 증거 수집과 신고 순서가 관건입니다.</p>',
    sections: [
      {
        title: 'Q1. 스토킹처벌법상 행위 어디까지인가',
        content:
          '<p><strong style="color:#1e3a5f">법 제2조 — 접근·따라다니기·물건 송부·전화·정보통신 5가지 유형.</strong></p>\n<ul>\n<li><strong>정보통신 이용</strong> — 문자·DM·이메일·전화·영상통화 전부 포함.</li>\n<li><strong>반복성</strong> — 상대 의사에 반해 지속·반복해야 성립.</li>\n<li><strong>불안·공포</strong> — 피해자가 객관적으로 느낄 수 있는 수준이면 인정.</li>\n<li><strong>방법 무관</strong> — 차단 우회·새 계정 반복은 고의성 강력 증거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "온라인만"이라는 이유로 처벌이 안 되는 구조가 아닙니다. 반복성·공포감이 핵심 기준입니다.</blockquote>',
      },
      {
        title: 'Q2. 증거 수집 5단계',
        content:
          '<p><strong style="color:#1e3a5f">원본 보존 → 횟수 정리 → 내 불안 표현 기록 → 112 신고 순으로 진행.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지 캡처</strong> — 시간·계정·내용 원본 보존, 삭제 금지.</li>\n<li><strong>2단계 — 횟수 타임라인</strong> — 날짜·시간·계정 변화까지 표로 정리.</li>\n<li><strong>3단계 — 거부 의사 표시</strong> — "그만 보내 달라"는 표시를 한 번은 기록으로 남김.</li>\n<li><strong>4단계 — 112 신고·고소</strong> — 관할 경찰서 또는 사이버수사대.</li>\n<li><strong>5단계 — 긴급응급·잠정조치 신청</strong> — 접근·통신 금지 명령 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 온라인 스토킹 사건의 증거·신고 절차를 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q3. 잠정조치·응급조치 — 뭐가 다른가',
        content:
          '<p><strong style="color:#1e3a5f">현장 초기에는 응급조치, 법원 결정으로는 잠정조치가 가능합니다.</strong></p>\n<ul>\n<li><strong>응급조치(경찰)</strong> — 즉시 제지·서면경고·분리 조치.</li>\n<li><strong>긴급응급조치</strong> — 접근·통신 금지 등 최대 1개월 이내 효력.</li>\n<li><strong>잠정조치(법원)</strong> — 기관에 의한 격리·통신 금지·유치 등 장기 조치.</li>\n<li><strong>위반 시 처벌</strong> — 잠정조치 위반은 별도 형사처벌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잠정조치는 집행이 실효적이므로 오프라인 위험이 없어도 "통신 금지"만 받아도 체감 위협을 크게 낮출 수 있습니다.</blockquote>',
      },
      {
        title: 'Q4·Q5. 처벌 수위·심리지원',
        content:
          '<p><strong style="color:#1e3a5f">기본 3년 이하, 흉기 등 위험 가중 시 5년 이하까지.</strong></p>\n<ul>\n<li><strong>Q4. 초범도 처벌되나</strong> — 초범이어도 반복성 입증되면 처벌 가능.</li>\n<li><strong>기본형량</strong> — 3년 이하 징역 또는 3천만 원 이하 벌금.</li>\n<li><strong>가중</strong> — 흉기·반복 등 가중 사유는 5년 이하.</li>\n<li><strong>Q5. 심리지원</strong> — 스마일센터·해바라기센터 무료 상담 이용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 신고 후에도 가해자 접근을 계속 경계해야 하며, 집·직장 주소 노출이 없는지 점검하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망만으로도 성립 가능',
        summary:
          '대법원 2025도9717 사건에서 법원은 오프라인 접근 없이 정보통신망을 통해 반복적으로 피해자에게 불안·공포를 유발한 경우에도 스토킹처벌법상 스토킹행위에 해당한다고 판시했습니다. 온라인 단독 사례에서도 적용이 가능함을 명확히 한 판례입니다.',
        takeaway:
          '"만난 적 없으니 안 된다"는 생각은 틀렸고, DM·통화 반복만으로도 신고·처벌이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '차단했더니 새 계정으로 오는데 같은 행위로 보나요?',
        answer:
          '<strong>동일인이 의도적으로 우회한 것이 확인되면 반복성·고의성 강력 증거입니다.</strong> 계정 변경 이력도 보존하세요.',
      },
      {
        question: '욕설·협박이 없으면 스토킹이 아닌가요?',
        answer:
          '<strong>욕설이 없어도 반복적 접근·연락 자체로 성립할 수 있습니다.</strong> 불안감 유발이 핵심입니다.',
      },
      {
        question: '해외에서 오는 DM은 처벌이 어려운가요?',
        answer:
          '<strong>가해자가 한국인이라면 국내 수사가 가능하고, 외국인이면 국제공조·플랫폼 협조를 활용합니다.</strong> 접수는 일단 가능합니다.',
      },
      {
        question: '합의하면 사건이 끝나나요?',
        answer:
          '<strong>반의사불벌죄가 아닌 경우도 있어 합의만으로 종료되지 않을 수 있습니다.</strong> 변호사와 함께 방향을 정하세요.',
      },
      {
        question: '가해자가 정신질환자라면 처벌이 어렵나요?',
        answer:
          '<strong>책임 능력 여부에 따라 결과는 달라지나 수사·보호 절차는 동일하게 진행됩니다.</strong> 피해자 보호가 우선입니다.',
      },
    ],
    cta: {
      text: '스토킹 고소 대응 순서, AI로 점검하기',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹처벌법 기본 구조', href: '/guide/stalking/stalking-law-basic-structure' },
      { label: '잠정조치·응급조치 신청', href: '/guide/stalking/stalking-emergency-measure-request' },
      { label: '사이버 스토킹 수사 절차', href: '/guide/stalking/stalking-cyber-investigation' },
      { label: '피해자 심리·법률 지원', href: '/guide/stalking/stalking-victim-support-program' },
      { label: '접근금지·통신금지 가처분', href: '/guide/stalking/stalking-restraining-order' },
    ],
  },

  // ─── 14. dui / civil-damage-insurance-refused ───
  {
    domain: 'dui',
    slug: 'dui-civil-damage-insurance-refused',
    keyword: '음주사고 보험 면책 자비배상',
    questionKeyword: '음주운전 사고 났는데 보험사가 면책이라며 자비로 물어내라네요?',
    ctaKeyword: '음주사고 구상금·보험 범위 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '음주사고 보험 면책 4가지 자비배상 기준 | 로앤가이드',
      description:
        '음주운전 사고로 보험사가 면책 처리하고 구상금을 청구하는 경우, 감경 여지·자비배상 범위·협상 순서를 지금 확인하세요.',
    },
    intro:
      '<p>음주운전 사고 후 며칠이 지나면 보험사에서 "사고처리는 했으나 운전자 과실이 커서 구상권을 행사하겠다"는 통지가 옵니다. 본인 차 수리비뿐 아니라 상대방 피해까지 수억 단위로 청구되는 경우도 있습니다. 면책 구조·구상금·감경 사유 3가지를 알아야 전체 부담을 줄일 수 있습니다.</p>',
    sections: [
      {
        title: '음주사고 보험 구조 — 면책과 구상',
        content:
          '<p><strong style="color:#1e3a5f">기본적으로 음주운전은 보험 면책 사유이며, 보험사는 구상권을 행사합니다.</strong></p>\n<ul>\n<li><strong>대인·대물 원칙</strong> — 피해자 보호를 위해 보험금은 지급되지만, 운전자 구상권 행사.</li>\n<li><strong>자차 담보</strong> — 음주는 자차 보상 원칙적으로 제외.</li>\n<li><strong>사고부담금</strong> — 음주·무면허 사고 시 운전자 부담금이 크게 상향.</li>\n<li><strong>정부보장사업</strong> — 피해자 우선 구제 후 가해자 구상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "보험 있으니 괜찮다"는 것은 오해이며, 보험금의 사실상 상당 부분이 가해자에게 돌아옵니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통지 받은 직후',
        content:
          '<p><strong style="color:#1e3a5f">재무적 타격을 최소화하려면 협상 순서를 지켜야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 구상금 산정 내역 확인</strong> — 보험사의 계산 근거·항목별 금액 요구.</li>\n<li><strong>2단계 — 책임 범위 확인</strong> — 본인 과실·피해 규모·면허 정지 여부 정리.</li>\n<li><strong>3단계 — 감경 사유 정리</strong> — 소득·부양가족·음주 경위 등 양형·감액 요소.</li>\n<li><strong>4단계 — 분할 납부 협상</strong> — 일시불 불가 시 장기 분납 요청.</li>\n<li><strong>5단계 — 개인회생·파산 검토</strong> — 감당 불가한 경우 채무조정 절차.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 구상금 협상·감경·채무조정 절차를 정리해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사·행정·민사 3중 부담',
        content:
          '<p><strong style="color:#1e3a5f">음주사고는 형사처벌·행정처분·민사배상이 동시에 움직입니다.</strong></p>\n<ul>\n<li><strong>형사</strong> — 도로교통법·특가법(위험운전치사상) 등.</li>\n<li><strong>행정</strong> — 면허 취소·정지, 이의신청·행정심판 가능.</li>\n<li><strong>민사</strong> — 보험사 구상, 피해자 별도 청구.</li>\n<li><strong>경제적 파급</strong> — 보험료 할증·향후 가입 제한.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 각 절차가 별도로 돌아가기 때문에 형사만 끝났다고 민사가 사라지지 않습니다.</blockquote>',
      },
      {
        title: '감경·면제 사유 — 놓치지 말아야',
        content:
          '<p><strong style="color:#1e3a5f">합의·반성·치료 프로그램 이수로 실질 부담을 낮출 수 있습니다.</strong></p>\n<ul>\n<li><strong>피해자 합의</strong> — 구상금·민사 모두에 완화 요소.</li>\n<li><strong>치료 프로그램</strong> — 알코올 의존 치료·교육 이수 제출.</li>\n<li><strong>반성문·탄원서</strong> — 양형 자료 + 행정심판에 유리.</li>\n<li><strong>장애·부양 사정</strong> — 경제 파탄 방지 관점에서 일부 감경 고려.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 감경 사유라도 서면·증빙으로 정리되지 않으면 반영되지 않습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 사고의 자기책임 원칙',
        summary:
          '대법원 2025도6752 사건에서 법원은 음주운전 사고의 경우 보험사 지급분에 대한 구상권 행사 및 운전자의 자기책임 원칙을 재확인했습니다. 단순 사정만으로 구상 책임이 면제되지 않으며, 사회적 책임이 크다는 취지입니다.',
        takeaway:
          '"보험으로 다 처리된다"는 기대는 근거가 없으며, 구상금·사고부담금이 가해자 개인에게 귀속됩니다.',
      },
    ],
    faq: [
      {
        question: '피해자와 합의하면 구상금이 없어지나요?',
        answer:
          '<strong>완전히 사라지는 것은 아니고, 규모와 민사 부담을 크게 줄일 수 있습니다.</strong> 합의 문구와 항목을 꼼꼼히 작성해야 합니다.',
      },
      {
        question: '면허 취소는 언제까지 이의제기 가능한가요?',
        answer:
          '<strong>처분 통지를 받은 날로부터 90일 이내 행정심판·행정소송이 가능합니다.</strong> 증거 수집이 빠를수록 유리합니다.',
      },
      {
        question: '구상금이 너무 커서 감당이 안 될 경우는요?',
        answer:
          '<strong>개인회생·파산으로 조정할 수 있습니다.</strong> 다만 음주운전에 의한 손해배상채권 일부는 비면책 채권이 될 수 있어 변호사 상담이 필수입니다.',
      },
      {
        question: '회사 차량 사고인데 개인에게 구상되나요?',
        answer:
          '<strong>음주운전에 한해 회사·사용자도 운전자에게 구상 가능합니다.</strong> 업무 중이어도 감면되지 않을 수 있습니다.',
      },
      {
        question: '혈중알코올농도 낮으면 감경이 되나요?',
        answer:
          '<strong>수치는 양형 요소이지만 면책 사유는 아닙니다.</strong> 낮아도 구상권은 여전히 행사되는 것이 일반적입니다.',
      },
    ],
    cta: {
      text: '음주운전 행정심판 준비서류, AI로 체크하기',
      link: '/chat?domain=dui',
    },
    internalLinks: [
      { label: '음주운전 처벌 기준표', href: '/guide/dui/dui-punishment-standard-table' },
      { label: '면허취소 행정심판 절차', href: '/guide/dui/dui-license-revocation-appeal' },
      { label: '구상금 협상·감경 가이드', href: '/guide/dui/dui-subrogation-negotiation' },
      { label: '피해자 합의 전략', href: '/guide/dui/dui-victim-settlement-strategy' },
      { label: '음주 관련 개인회생·파산', href: '/guide/dui/dui-rehabilitation-bankruptcy-option' },
    ],
  },
];
