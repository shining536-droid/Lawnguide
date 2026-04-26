import { SpokePage } from '../spoke-pages';

// batch47 inheritance 4개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 해외에 거주하는 한국 국적자가 국내 피상속인의 상속세 신고를 6개월 내 정확히 이행하도록 돕는 페이지다.
// 2. 이 페이지는 피상속인이 사망 직전에 생명보험 수익자를 변경해 다른 상속인이 보험금을 독식하는 상황에서 유류분·특별수익으로 다투도록 돕는 페이지다.
// 3. 이 페이지는 피상속인 사망 후 연금·급여가 계속 입금되어 이를 어떻게 처리해야 하는지 파악하고 부당이득 반환 위험을 피하도록 돕는 페이지다.
// 4. 이 페이지는 비상장주식을 상속받은 상속인이 상속세 및 증여세법상 보충적 평가방법과 감정평가 선택지를 정리해 세금 부담을 점검하도록 돕는 페이지다.

export const spokesBatch47Inheritance: SpokePage[] = [
  // ─── 1. inheritance / foreign-resident-tax-report ───
  {
    domain: 'inheritance',
    slug: 'inheritance-foreign-resident-tax-report',
    keyword: '해외거주자 상속세 신고',
    questionKeyword: '해외에 살고 있는데 한국 부모님 상속세를 어떻게 신고해야 하나요?',
    ctaKeyword: '해외거주자 상속세 신고 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외거주자 상속세 신고 5단계 절차 총정리 | 로앤가이드',
      description:
        '해외 거주 중 한국 피상속인의 상속이 개시됐다면 상속개시일로부터 6개월 내 국내 세무서에 신고해야 합니다. 기한·서류·공제 항목을 지금 확인하세요.',
    },
    intro:
      '<p>해외에 살다가 국내 부모님 부고를 받으면 슬픔보다 먼저 닥치는 게 "상속세를 어떻게, 언제까지 내야 하지?"라는 막막함입니다. 한국 거주자와 달리 해외 체류자는 서류 준비에 더 많은 시간이 걸리는데 신고 기한은 똑같이 적용됩니다. 절차를 잘못 알면 가산세까지 더해져 부담이 커질 수 있으니, 단계별로 미리 정리해두는 것이 가장 안전합니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 해외거주자 상속세 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">가정법원 절차·국세청 안내에 따른 공식 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속인 확정 (사망신고 1개월 내)</strong><br>국내 대리인(가족 또는 세무사)을 통해 사망신고 접수. 가족관계증명서·기본증명서·제적등본으로 상속인 확정.</li>\n<li><strong>2단계 — 안심상속 원스톱서비스 (사망 후 가능한 빨리)</strong><br>정부24에서 부동산·금융재산·자동차·세금·연금 일괄 조회. 해외 거주자는 위임장 공증으로 국내 대리인이 대신 조회 가능.</li>\n<li><strong>3단계 — 상속재산 평가 (2~3개월 내)</strong><br>상속개시일 현재 시가 기준. 부동산은 공시가격·기준시가, 금융재산은 잔고 기준. 평가 다툼 시 감정평가 검토.</li>\n<li><strong>4단계 — 상속세 신고서 제출 (6개월 내)</strong><br>피상속인 주소지 관할 세무서에 신고. 자진신고 세액공제 3% 적용 가능. 해외 거주자는 국내 세무사에게 위임 후 신고 가능.</li>\n<li><strong>5단계 — 분할납부·연부연납 (신고와 동시에 신청)</strong><br>1천만원 초과 시 2개월 내 분할납부, 2천만원 초과 시 최장 10년 연부연납 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 준비 자료, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">변호사·세무사 상담 전, 해외거주자 상속세 신고 절차와 공제 항목을 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">한정승인 필요서류, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '해외거주자가 꼭 챙겨야 할 서류 목록',
        content:
          '<p><strong style="color:#1e3a5f">국내 상속인과 달리 해외 공증·아포스티유가 추가됩니다.</strong></p>\n<ul>\n<li><strong>상속세 과세표준 신고서</strong> — 관할 세무서 양식, 국내 세무사 대리 작성 가능.</li>\n<li><strong>재산평가서</strong> — 공시지가 조회서 또는 감정평가서.</li>\n<li><strong>가족관계증명서·제적등본</strong> — 국내 동사무소 발급 또는 대사관 공증.</li>\n<li><strong>해외 거주 확인서류</strong> — 거주국 주민등록(영주권·체류증), 필요 시 아포스티유 인증.</li>\n<li><strong>위임장 (공증)</strong> — 국내 대리인이 세무 처리를 대신할 경우 공증 위임장 필수.</li>\n<li><strong>공제 증빙</strong> — 배우자공제(최소 5억), 일괄공제(5억) 등 적용 서류.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 5억(일괄공제) 또는 배우자가 있으면 10억 미만은 사실상 비과세 구간이지만, 신고 자체는 의무입니다. 기한 내 신고하지 않으면 3% 자진신고 공제를 받을 수 없고 가산세가 부과됩니다.</blockquote>',
      },
      {
        title: '기한을 놓쳤을 때 — 가산세와 구제 방법',
        content:
          '<p><strong style="color:#1e3a5f">6개월 기한을 넘기면 가산세가 누적됩니다. 그래도 빨리 신고하는 것이 낫습니다.</strong></p>\n<ul>\n<li><strong>무신고 가산세</strong> — 납부세액의 20% (부정 무신고 40%).</li>\n<li><strong>납부 지연 가산세</strong> — 미납 세액 × 일수 × 0.022%.</li>\n<li><strong>경정청구</strong> — 과다신고 시 법정신고기한 후 5년 내 환급 신청 검토 가능.</li>\n<li><strong>세무조사 리스크</strong> — 고가 부동산·금융자산이 많을수록 무신고 적발 시 조사 개시 가능성이 높아집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해외 거주가 기한 연장 사유로 인정되지는 않습니다. 국내 대리인에게 조기에 위임하는 것이 가장 안전한 접근입니다.</blockquote>',
      },
      {
        title: '공제 항목 — 절세 포인트 정리',
        content:
          '<p><strong style="color:#1e3a5f">공제 항목을 정확히 적용하면 세 부담을 크게 줄일 수 있습니다.</strong></p>\n<ul>\n<li><strong>기본공제 2억</strong> — 모든 상속에 적용.</li>\n<li><strong>일괄공제 5억</strong> — 기본공제 대신 선택 가능. 배우자 없으면 일괄공제 5억이 유리한 경우 많음.</li>\n<li><strong>배우자공제</strong> — 최소 5억~최대 30억. 배우자 법정상속분 한도.</li>\n<li><strong>금융재산 상속공제</strong> — 순금융재산의 20%, 최대 2억.</li>\n<li><strong>채무 공제</strong> — 피상속인의 확인된 채무·공과금 전액 공제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상속세는 상속인별이 아닌 피상속인 기준으로 먼저 산정 후 각 상속인에게 배분됩니다. 국세청 126 또는 대한법률구조공단 132에서 무료 상담을 검토해볼 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속세 비거주자·공익법인 적용 범위',
        summary:
          '대법원 2025두30806 사건(대법원, 2025.05.15 선고)에서 법원은 구 상속세 및 증여세법상 증여세 과세가액 불산입 조항이 거주자에게만 적용된다는 제한이 없으므로, 외국에서 활동하는 비거주자·비영리법인에도 공익법인 규정이 적용된다고 판시했습니다.',
        takeaway: '상속·증여세 조항 해석은 법문에 따르되, 비거주자라는 사실만으로 불이익이 추가되지 않는 경우가 있으므로 공제 적용 범위를 꼼꼼히 확인하는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '해외에 있으면 신고 기한이 연장되나요?',
        answer:
          '<strong>원칙적으로 연장되지 않습니다.</strong> 상속개시일이 속한 달의 말일부터 6개월이 기한이며, 해외 체류 여부와 무관하게 적용됩니다. 국내 세무사에게 위임해 처리하는 방법을 검토해보세요.',
      },
      {
        question: '해외 자산도 한국 상속세 신고에 포함해야 하나요?',
        answer:
          '<strong>피상속인이 한국 거주자라면 해외 자산도 과세 대상입니다.</strong> 별도 해외금융계좌 신고 의무(6월 말 기한)도 함께 확인해야 합니다.',
      },
      {
        question: '신고만 하면 바로 납부도 해야 하나요?',
        answer:
          '<strong>신고와 납부는 같은 기한입니다.</strong> 납부 능력이 부족하면 분할납부(1천만원 초과 시 2개월)·연부연납(2천만원 초과 시 최장 10년) 신청을 동시에 검토하세요.',
      },
      {
        question: '상속재산을 아직 분할하지 않았는데 신고는 어떻게 하나요?',
        answer:
          '<strong>분할 전이라도 법정상속분 기준으로 신고하고 나중에 경정청구로 정정할 수 있습니다.</strong> 기한 내 우선 신고한 뒤 분할협의가 확정되면 정정 신고를 검토해보세요.',
      },
      {
        question: '한국 세무사에게 어떻게 위임하나요?',
        answer:
          '<strong>위임장을 작성해 공증 후 세무사에게 전달하면 됩니다.</strong> 거주국 한국 대사관·영사관에서 위임장 공증을 받는 것이 일반적입니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고 기한과 가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '한정승인·상속포기 3개월 기한', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '해외 자산 상속 신고', href: '/guide/inheritance/inheritance-foreign-assets-declaration-report' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '상속세 경정청구', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
    ],
  },

  // ─── 2. inheritance / life-insurance-beneficiary-change-dispute ───
  {
    domain: 'inheritance',
    slug: 'inheritance-life-insurance-beneficiary-change-dispute',
    keyword: '사망 직전 생명보험 수익자 변경 분쟁',
    questionKeyword: '부모님이 돌아가시기 직전에 생명보험 수익자를 형제 중 한 명으로 바꿨는데 이의를 제기할 수 있나요?',
    ctaKeyword: '생명보험 수익자 변경 분쟁 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사망 전 생명보험 수익자 변경, 유류분·특별수익 다툼 4가지 | 로앤가이드',
      description:
        '피상속인이 사망 직전 생명보험 수익자를 특정 상속인으로 바꿨다면 유류분 침해·특별수익 산입 여부로 다툴 수 있습니다. 정황과 대응 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가시기 3개월 전에 생명보험 수익자를 큰형으로만 바꿔놨어요. 보험금이 3억인데 저한테는 한 푼도 없다고 합니다." 이런 상담이 늘고 있습니다. 생명보험 수익자 변경은 형식상 합법이지만, 사망 직전 급작스러운 변경·인지능력 문제·기타 상속인의 유류분 침해가 겹치면 여러 방향으로 다툴 소지가 있습니다. 서두르지 않으면 유류분 청구 시효(안 날 1년)가 지나버리니 서류부터 확보하는 것이 우선입니다.</p>',
    sections: [
      {
        title: 'Q. 생명보험 수익자 변경이 상속재산에 포함되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙적으로 보험금은 수익자의 고유 재산이지만, 상황에 따라 특별수익·유류분 판단에 영향을 줄 수 있습니다.</strong></p>\n<ul>\n<li><strong>수익자의 고유 재산 원칙</strong> — 생명보험 수익자는 수익자 지정 순간 보험금 청구권을 고유재산으로 취득합니다. 상속재산에 당연 포함되지는 않습니다.</li>\n<li><strong>특별수익 산입 가능성</strong> — 대법원은 "실질적으로 증여와 동일한 경우" 보험금을 특별수익으로 볼 수 있다는 입장입니다. 사망 직전 변경·수익자 단독화 패턴이 이에 해당할 소지가 있습니다.</li>\n<li><strong>유류분 산정 기초재산 포함 여부</strong> — 보험금이 특별수익으로 인정되면 유류분 산정 기초재산에 포함됩니다.</li>\n<li><strong>분리 원칙의 한계</strong> — 2024년 헌재 결정 이후 유류분 조항 일부 위헌으로 법 개정 논의 중이어서 최신 법리를 확인해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보험료를 누가 냈는지, 변경 시점, 피상속인의 의사 능력이 판단의 핵심 기준이 됩니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 정황이 다툼의 근거가 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 정황이 겹칠수록 특별수익 인정·유류분 청구 소지가 높아집니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변경 시점 확인</strong> — 사망 직전 1~6개월 내 수익자 변경 여부. 보험사에 변경 이력 조회 신청.</li>\n<li><strong>2단계 — 보험료 납부자 확인</strong> — 피상속인이 보험료를 전액 납부했다면 실질적 증여로 볼 소지 강화.</li>\n<li><strong>3단계 — 의사 능력 자료</strong> — 변경 당시 피상속인 병원 기록·인지 검사 결과. 의사 능력 결여 시 변경 행위 자체를 무효 다툼 가능.</li>\n<li><strong>4단계 — 유류분 계산</strong> — 상속재산 + 보험금 특별수익 산입 후 자신의 유류분(법정상속분의 1/2) 침해 여부 계산.</li>\n<li><strong>5단계 — 유류분 반환청구 소송</strong> — 침해 확인 시 안 날 1년, 상속개시 후 10년 이내 청구. 시효 관리 필수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유류분 침해 여부와 보험금 특별수익 산입 가능성을 AI로 미리 정리해볼 수 있습니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">한정승인 필요서류, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 수익자 변경 시 의사 능력이 부족했다면 어떻게 다투나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 의사표시 취소 또는 무효 확인 소송을 별도로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>의사 능력 결여</strong> — 치매·중증 질환 등으로 의사 능력이 없던 상태에서 한 수익자 변경은 무효 주장 가능.</li>\n<li><strong>증거 확보</strong> — 변경 시점 병원 기록·진단서·간병인 진술이 핵심 증거.</li>\n<li><strong>법원 접근</strong> — 보험사 측에 무효 주장이 거부되면 민사 소송으로 수익자 변경 무효 확인 청구.</li>\n<li><strong>소멸시효</strong> — 의사 능력 관련 무효 주장은 시효가 없으나, 취소 주장은 취소권 행사 가능 날부터 3년 이내.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의사 능력 다툼과 유류분 반환청구는 병행이 가능합니다. 어느 하나가 인정되면 나머지를 보완해주는 구조입니다.</blockquote>',
      },
      {
        title: 'Q. 보험금이 크면 유류분 청구가 실익이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험금이 특별수익으로 산입되는 경우 유류분 청구 실익이 상당할 수 있습니다.</strong></p>\n<ul>\n<li><strong>유류분 계산 예시</strong> — 상속재산 1억 + 보험금 특별수익 3억 = 기초 4억 → 자녀 1인 유류분(1/4 × 1/2 = 1/8) 5천만원. 실제 취득 0원이면 5천만원 청구 가능.</li>\n<li><strong>반환 방법</strong> — 원칙적으로 보험금에서 현금 반환. 협의가 안 되면 소송.</li>\n<li><strong>변호사 비용 고려</strong> — 소액이면 법률구조공단(132) 무료 지원 검토.</li>\n<li><strong>화해·조정</strong> — 가정법원 조정 신청이 소송보다 비용·시간 절약.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보험금이 특별수익으로 인정될지는 사건별로 다르므로, 섣불리 단정하기보다 전문가 검토 후 판단하는 것이 좋습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 생명보험 수익자 변경과 명시·설명의무 위반',
        summary:
          '대법원 2022다225897 사건(대법원, 2025.10.16 선고)에서 법원은 연금보험계약에서 보험료 산출기준·연금 변동 가능성을 명시·설명하지 않으면 약관 조항을 계약 내용으로 주장할 수 없다고 판시했습니다. 보험사가 수익자 변경 시 중요 내용을 설명하지 않았다면 변경 행위의 효력을 다툴 소지가 있습니다.',
        takeaway: '보험 수익자 변경 당시 보험사의 설명의무 이행 여부와 피상속인의 의사 능력을 함께 확인하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '보험금이 상속재산에 포함된다는 게 확실한가요?',
        answer:
          '<strong>원칙적으로 포함되지 않지만, 특별수익으로 산입될 소지가 있습니다.</strong> 보험료 납부자·변경 시점·실질적 증여 여부를 종합해 판단하며, 사건별로 달라질 수 있습니다.',
      },
      {
        question: '유류분 청구 시효가 언제 시작되나요?',
        answer:
          '<strong>"안 날"부터 1년, 상속개시 후 10년이 최종 기한입니다.</strong> 수익자 변경 사실을 나중에 알았다면 알게 된 시점부터 1년이 기준이 됩니다.',
      },
      {
        question: '형제가 이미 보험금을 인출했으면 어떻게 하나요?',
        answer:
          '<strong>인출해 소비했더라도 가액 반환 청구가 가능합니다.</strong> 현물 반환이 불가능하면 금전 반환 청구 방식으로 진행됩니다.',
      },
      {
        question: '가정법원 조정이 소송보다 빠른가요?',
        answer:
          '<strong>통상 빠르고 비용도 적게 듭니다.</strong> 조정이 성립되면 확정판결과 동일한 효력이 생기며, 불성립 시 심판(소송)으로 이어집니다.',
      },
      {
        question: '변호사 없이 유류분 청구를 직접 할 수 있나요?',
        answer:
          '<strong>가능하지만 증거 정리·계산이 복잡해 전문가 조력이 권장됩니다.</strong> 소액이라면 대한법률구조공단(132)에서 무료 상담을 받아보실 수 있습니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '생명보험 상속재산 포함 여부', href: '/guide/inheritance/inheritance-life-insurance-not-included' },
      { label: '유류분 반환청구 10년 기한', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
      { label: '유류분 증여 계산 범위', href: '/guide/inheritance/inheritance-forced-share-gift-calculation-scope' },
      { label: '상속재산분할 분쟁 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '유언 효력 분쟁 절차', href: '/guide/inheritance/inheritance-will-validity-dispute' },
    ],
  },

  // ─── 3. inheritance / pension-after-death-handling ───
  {
    domain: 'inheritance',
    slug: 'inheritance-pension-after-death-handling',
    keyword: '사망 후 연금 계속 입금 처리',
    questionKeyword: '아버지가 돌아가셨는데 국민연금이 계속 통장에 들어오고 있어요. 어떻게 해야 하나요?',
    ctaKeyword: '사망 후 연금 부당이득 처리 절차',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사망 후 연금·급여 계속 입금 시 처리 절차 4가지 | 로앤가이드',
      description:
        '피상속인 사망 후 국민연금·공무원연금이 계속 입금됐다면 부당이득으로 반환 의무가 생깁니다. 신고 절차와 상속인의 법적 책임을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가셨는데 국민연금이 두 달 치가 더 들어왔어요. 쓰면 안 되나요?" 사망 신고가 늦어지거나 연금공단에 신고를 미루면 수령 자격 없는 연금이 계속 입금됩니다. 이를 그냥 사용하면 부당이득 반환 의무가 생기고, 금액이 크면 사기죄 문제로 이어질 수도 있습니다. 빠른 신고와 정확한 반환 절차가 가장 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 사망 후 입금된 연금을 써도 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용하면 안 됩니다. 부당이득 반환 의무가 발생합니다.</strong></p>\n<ul>\n<li><strong>수급 자격 소멸</strong> — 피상속인 사망 시 국민연금·공무원연금·기초연금 수급권은 즉시 소멸합니다.</li>\n<li><strong>부당이득 반환 의무</strong> — 상속인이 사망 후 입금된 연금을 수령하면 연금공단에 반환해야 합니다.</li>\n<li><strong>고의 미신고 시 법적 리스크</strong> — 사망 사실을 알면서 신고를 미루고 계속 수령하면 사기죄로 고발될 소지가 있습니다.</li>\n<li><strong>은행 지급정지</strong> — 사망신고 후 금융거래 동결 전에 이미 입금된 금액은 별도 반환 절차가 필요합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "몰랐다"는 항변도 입금된 사실을 안 이상 반환 의무에서 벗어나기는 어렵습니다. 발견 즉시 신고하는 것이 가장 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 어떻게 신고하고 반환하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 연금 종류별로 신고 창구가 다릅니다. 아래 절차를 참고해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망신고 (1개월 내)</strong> — 관할 주민센터 또는 대사관에 사망신고. 가족관계등록부 상 사망 처리가 연금공단으로 자동 통보되는 경우도 있습니다.</li>\n<li><strong>2단계 — 연금공단 별도 신고</strong> — 국민연금(국민연금공단 1355), 공무원연금(공무원연금공단 1588-4321), 기초연금(주민센터)에 각각 사망 사실 통보.</li>\n<li><strong>3단계 — 과오 지급금 확인</strong> — 연금공단이 입금 내역을 확인해 과오 지급 금액을 통보합니다.</li>\n<li><strong>4단계 — 반환</strong> — 입금된 계좌에서 직접 이체하거나 연금공단 지정 계좌로 반환. 이미 인출해 사용했다면 별도 상환 협의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 준비, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사망 후 연금 처리·상속 재산 조회·한정승인 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">한정승인 필요서류, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 반환하지 않으면 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 연금공단이 환수 청구를 하고 불응 시 법적 조치가 이어질 수 있습니다.</strong></p>\n<ul>\n<li><strong>환수 청구</strong> — 연금공단은 과오 지급 사실을 확인하면 상속인에게 서면 청구를 합니다.</li>\n<li><strong>강제 집행</strong> — 상속인이 거부하면 민사 소송 → 강제 집행 절차가 개시될 수 있습니다.</li>\n<li><strong>형사 고발 위험</strong> — 고의로 신고하지 않고 장기간 수령한 경우 사기죄 고발 검토 대상이 될 소지가 있습니다.</li>\n<li><strong>상속 한정승인·포기와의 관계</strong> — 한정승인·포기를 했더라도 연금 과오 지급금 반환 의무는 별개로 발생할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 과오 지급금을 이미 인출해 사용했다면 연금공단에 먼저 연락해 분할 상환 협의를 요청하는 것이 법적 분쟁을 피하는 방법입니다.</blockquote>',
      },
      {
        title: 'Q. 유족연금은 어떻게 신청하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망신고 후 별도로 유족연금을 신청해야 합니다. 자동 전환되지 않습니다.</strong></p>\n<ul>\n<li><strong>국민연금 유족연금</strong> — 국민연금공단 방문 또는 온라인 신청. 배우자·자녀·부모 등 법정 순위 있음.</li>\n<li><strong>공무원연금 유족연금</strong> — 공무원연금공단에 별도 신청. 유족 범위·연금액 산정 기준이 다릅니다.</li>\n<li><strong>신청 기한</strong> — 법정 기한은 없으나 소멸시효(5년)가 적용될 수 있어 빠른 신청이 유리합니다.</li>\n<li><strong>과오 지급금과 별도</strong> — 유족연금 신청과 과오 지급금 반환은 별개 절차입니다. 두 가지 동시에 처리하는 것이 효율적입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연금공단 1355(국민연금) 또는 공단 홈페이지에서 유족연금 수급자격과 예상 금액을 먼저 조회해볼 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사망자 연금 손해배상채권과 상속인 공제 순서',
        summary:
          '대법원 2021다255853 사건(대법원, 2024.11.21 선고)에서 법원은 망인의 일실 퇴직연금 상당 손해배상채권은 상속인들이 상속분대로 공동상속하며, 직무상유족연금 공제는 수급권자인 상속인이 상속한 채권 한도 내에서만 이루어진다고 판시했습니다.',
        takeaway: '연금 수급권과 상속채권은 귀속 주체가 다를 수 있으므로, 상속 후 연금 처리는 수급자격·공제 순서를 정확히 확인하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '사망 후 입금된 연금을 모르고 사용했으면 어떻게 하나요?',
        answer:
          '<strong>지금이라도 연금공단에 신고하고 반환 의사를 밝히는 것이 좋습니다.</strong> 고의가 없었다는 사실을 소명하면 형사 처벌 위험은 낮아지지만, 반환 의무 자체는 남습니다.',
      },
      {
        question: '국민연금 사망신고는 어디서 하나요?',
        answer:
          '<strong>주민센터 사망신고가 자동 연계되지 않을 수 있어 국민연금공단(1355)에 별도 신고가 필요합니다.</strong> 팩스·방문·전화 모두 가능합니다.',
      },
      {
        question: '한정승인을 하면 과오 지급금도 한정적으로만 반환하면 되나요?',
        answer:
          '<strong>한정승인의 효과는 상속재산 한도 변제이지만, 과오 지급금은 상속재산이 아닌 부당이득으로 별도 취급될 수 있습니다.</strong> 법률구조공단(132) 상담을 검토해보세요.',
      },
      {
        question: '연금이 계속 들어오는 게 몇 달 됐는데 이자까지 내야 하나요?',
        answer:
          '<strong>부당이득 반환 시 이자(지연이자)가 붙을 수 있습니다.</strong> 연금공단이 청구하는 시점부터 이자가 발생하는 것이 일반적이니 빠른 자진 신고가 유리합니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속인 확정과 사망신고 절차', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '한정승인 준비서류 체크리스트', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속포기와 한정승인 비교', href: '/guide/inheritance/inheritance-limited-acceptance-vs-renunciation-choice' },
      { label: '특별한정승인 3개월 시작', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
      { label: '상속재산분할 절차', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
    ],
  },

  // ─── 4. inheritance / business-share-evaluation ───
  {
    domain: 'inheritance',
    slug: 'inheritance-business-share-evaluation',
    keyword: '비상장주식 상속 평가 방법',
    questionKeyword: '아버지 사업체의 비상장주식을 상속받았는데 상속세는 어떻게 계산되나요?',
    ctaKeyword: '비상장주식 상속 평가 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비상장주식 상속세 평가 5단계 절차 총정리 | 로앤가이드',
      description:
        '비상장주식은 상속세 및 증여세법상 보충적 평가방법(순손익가치 3·순자산가치 2)으로 평가합니다. 감정평가 선택지와 절세 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 회사가 비상장이라 주식 가격이 얼마인지도 모르겠어요. 상속세는 어떻게 내야 하나요?" 비상장주식은 시장 가격이 없어 상속세 신고 시 평가 방법을 잘못 선택하면 세금이 크게 달라집니다. 상속세 및 증여세법의 보충적 평가방법과 감정평가 옵션을 미리 정리해두면 불필요한 세 부담을 줄이는 데 도움이 될 수 있습니다.</p>',
    sections: [
      {
        title: '📌 이렇게 진행됩니다 — 비상장주식 상속세 평가 5단계',
        content:
          '<p><strong style="color:#1e3a5f">국세청 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시가 확인 (상속개시일 기준)</strong><br>상속개시일 전후 6개월 내 유사 거래 가격이 있으면 시가 적용. 비상장주식은 시가 없는 경우가 대부분.</li>\n<li><strong>2단계 — 보충적 평가방법 적용 (시가 없는 경우)</strong><br>상속세 및 증여세법 제63조 제1항 제1호 (나)목: 1주당 순손익가치 × 3 + 순자산가치 × 2 ÷ 5 가중평균.</li>\n<li><strong>3단계 — 순자산가치 하한 체크</strong><br>위 가중평균이 1주당 순자산가치 × 80% 미만이면 순자산가치 × 80%가 최저 평가액으로 적용됩니다.</li>\n<li><strong>4단계 — 감정평가 선택 검토</strong><br>보충적 평가방법보다 감정평가 결과가 낮을 경우 감정평가 결과를 시가로 사용 가능. 비용·세금 차이 비교 후 선택.</li>\n<li><strong>5단계 — 상속세 신고 (6개월 내)</strong><br>결정된 1주당 가액 × 상속주식 수 = 상속재산 가액 → 다른 상속재산과 합산해 신고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 준비, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">비상장주식 상속 평가 방법과 신고 서류를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">한정승인 필요서류, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '순손익가치와 순자산가치 — 어떻게 계산되나요?',
        content:
          '<p><strong style="color:#1e3a5f">두 가치를 3:2 비율로 가중평균하는 것이 원칙입니다.</strong></p>\n<ul>\n<li><strong>1주당 순손익가치</strong> — 최근 3년 순손익액의 가중평균 ÷ 발행주식총수 ÷ 이자율(10%). 회사 수익력을 반영.</li>\n<li><strong>1주당 순자산가치</strong> — 상속개시일 현재 순자산액(자산-부채) ÷ 발행주식총수. 회사 자산력을 반영.</li>\n<li><strong>최근 3년 순손익 비정상 시</strong> — 적자 지속·설립 초기·사업 변경 등으로 비정상적이면 순자산가치만으로 평가하는 예외 적용 가능.</li>\n<li><strong>자기주식 포함 시</strong> — 법인이 보유한 자기주식도 순자산에 포함되어 1주당 가액 산정에 영향을 줍니다(대법원 2025두33647 참조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 순손익가치가 낮으면 가중평균이 낮아져 세 부담이 줄어들 수 있습니다. 반면 최근 3년 순이익이 높은 회사는 세 부담이 크게 늘 수 있습니다.</blockquote>',
      },
      {
        title: '감정평가로 낮출 수 있는 경우 — 언제 유리한가요?',
        content:
          '<p><strong style="color:#1e3a5f">보충적 평가방법보다 감정평가 결과가 낮을 때 절세 효과가 있습니다.</strong></p>\n<ul>\n<li><strong>감정평가 선택 조건</strong> — 2 이상의 신용평가전문기관 또는 회계법인 감정 결과를 평균한 가액을 시가로 인정.</li>\n<li><strong>유리한 상황</strong> — 회사 순손익이 높지만 실제 주식 거래 가치는 낮은 경우, 업황 악화가 반영된 경우.</li>\n<li><strong>비용 고려</strong> — 감정평가 비용(통상 100~300만원)과 절세액을 비교해 선택.</li>\n<li><strong>세무조사 위험</strong> — 감정평가 결과가 보충적 평가방법 대비 현저히 낮으면 과세관청의 재조사 대상이 될 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 비상장주식 가액이 1억원 이상이면 세무사·회계사와 보충적 평가 vs 감정평가 시뮬레이션을 꼭 해보세요.</blockquote>',
      },
      {
        title: '분쟁 예방 — 공동상속인 간 주식 분할 처리',
        content:
          '<p><strong style="color:#1e3a5f">비상장주식을 공동상속할 때는 회사 경영권 분쟁 예방도 함께 고려해야 합니다.</strong></p>\n<ul>\n<li><strong>공유 vs 단독 취득</strong> — 주식을 공유 상태로 두면 의결권 행사에 1인 대표자 선임이 필요합니다(상법 제333조). 경영권 분쟁 방지를 위해 협의분할로 단독 취득이 유리할 수 있습니다.</li>\n<li><strong>명의개서 이행</strong> — 상속 확정 후 주주명부 명의개서를 하지 않으면 회사에 대한 주주권 주장이 제한될 수 있습니다.</li>\n<li><strong>상속재산분할 협의</strong> — 공동상속인 전원 합의로 분할협의서를 작성·공증해야 주식 이전이 가능합니다.</li>\n<li><strong>경정청구 여지</strong> — 평가 방법 선택이 잘못됐다면 법정신고기한 후 5년 이내 경정청구로 환급 신청을 검토할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 상속 후 명의개서를 장기간 하지 않으면 재산세 납세의무 분쟁이 발생할 수 있습니다. 상속개시 후 6개월 내 세금 신고와 동시에 명의개서도 진행하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 비상장주식 자기주식 보충적 평가방법 적용',
        summary:
          '대법원 2025두33647 사건(대법원, 2025.10.30 선고)에서 법원은 처분을 전제로 보유하는 자기주식도 양도성·자산성이 있어 비상장주식 보충적 평가방법 적용 대상이 되며, 1주당 가액 산정 시 자기주식을 순자산에 포함하는 산식을 적용해야 한다고 판시했습니다.',
        takeaway: '비상장주식 상속 시 자기주식이 있는 회사라면 보충적 평가방법 산식이 더 복잡해질 수 있어 전문 세무사의 검토가 필요합니다.',
      },
    ],
    faq: [
      {
        question: '상속받은 비상장주식을 팔고 싶은데 먼저 팔아도 되나요?',
        answer:
          '<strong>상속재산분할 협의 전에는 공동상속인 전원의 동의 없이 처분하기 어렵습니다.</strong> 분할협의를 먼저 완료하거나 법원 심판을 통해 단독 취득 확정 후 처분을 검토하세요.',
      },
      {
        question: '회사가 부실해서 주식 가치가 0인데도 상속세를 내야 하나요?',
        answer:
          '<strong>순자산가치가 음수(부채 초과)라면 0으로 평가되어 상속세가 없을 수 있습니다.</strong> 다만 다른 상속재산과 합산되므로 전체 공제 적용 후 확인해야 합니다.',
      },
      {
        question: '비상장주식 상속 시 취득세도 내야 하나요?',
        answer:
          '<strong>주식 취득에는 취득세가 부과되지 않습니다.</strong> 다만 회사 소유 부동산이 상속재산에 포함되면 해당 부동산에 취득세가 발생합니다.',
      },
      {
        question: '3년 순손익 자료가 없는 설립 초기 회사면 어떻게 하나요?',
        answer:
          '<strong>순손익가치를 산정할 수 없는 경우 순자산가치만으로 평가하는 예외가 적용될 수 있습니다.</strong> 구체적인 적용 요건은 세무사와 검토해보는 것이 좋습니다.',
      },
      {
        question: '과거에 비상장주식 상속세를 과다 납부한 것 같은데 환급받을 수 있나요?',
        answer:
          '<strong>법정신고기한으로부터 5년 이내 경정청구로 환급 신청을 검토해볼 수 있습니다.</strong> 평가방법이 잘못됐거나 공제 항목이 누락됐다면 세무사에게 경정청구 가능성을 확인해보세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고 기한과 가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '비상장주식 상속재산분할', href: '/guide/inheritance/inheritance-corporate-shares-distribution' },
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '공동상속인 분쟁 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '상속등기 절차와 서류', href: '/guide/inheritance/inheritance-registration-procedure-docs' },
    ],
  },
];
