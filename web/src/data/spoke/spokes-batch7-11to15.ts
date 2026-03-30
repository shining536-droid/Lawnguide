import { SpokePage } from '../spoke-pages';

export const spokesBatch7Pages11to15: SpokePage[] = [
  // 11. school-violence / victim-response-complete-checklist
  // 12. digital-sex-crime / deepfake-distribution-legal-response
  // 13. jeonse-fraud / empty-jeonse-verification-method
  // 14. jeonse / deposit-return-checklist
  {
    domain: 'jeonse',
    slug: 'deposit-return-checklist',
    keyword: '전세보증금 반환 체크리스트',
    questionKeyword: '전세 계약 만료 시 보증금을 안전하게 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '전세보증금 반환',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '전세보증금 반환 5단계 체크리스트 | 로앤가이드',
      description:
        '전세 만료인데 보증금을 못 받을까 불안하신가요? 계약 종료 통보부터 임차권등기명령, 보증보험 청구까지 지금 확인하세요.',
    },
    intro:
      '2년 전세 만료가 두 달 앞으로 다가왔습니다. 새 집도 구했고 이사도 준비 중인데, 집주인에게서 아무 연락이 없습니다. 혹시나 하는 마음에 전화했더니 "지금 돈이 없다, 좀 기다려달라"는 말을 들었습니다. 불안합니다. 이사는 가야 하는데 보증금을 못 받으면 새 집 계약을 할 수가 없습니다. 보증금을 확실하게 돌려받기 위해 지금 당장 해야 할 일들을 체크리스트로 정리했습니다.',
    sections: [
      {
        title: '계약 만료 2개월 전: 계약 종료 의사를 서면으로 통보하세요',
        content:
          '<p><strong style="color:#1e3a5f">묵시적 갱신을 막으려면 만료 2개월 전에 반드시 서면 통보해야 합니다</strong></p>\n<p><strong>주택임대차보호법 제6조</strong>에 따라 임차인이 계약 만료 <strong>2개월 전</strong>까지 해지 의사를 통보하지 않으면 동일 조건으로 묵시적 갱신됩니다. 내용증명 우편 또는 문자(카카오 공식 채널)로 <strong>계약 갱신 거절 및 보증금 반환 요청</strong>을 서면으로 남기세요.</p>\n<p>통보 시 ①<strong>임대차 계약 만료일</strong>, ②<strong>보증금 금액</strong>, ③<strong>반환 요청 계좌</strong>를 명시하세요. 문자 발송 시 발신번호·날짜·내용이 보존되는 카카오 공식 채널을 활용하면 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 만료 2개월 전 내용증명 발송 | 계약일·보증금·반환 계좌 명시 | 묵시적 갱신 방지</blockquote>',
      },
      {
        title: '계약 만료일: 이사 전 임차권등기명령을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">이사 전 임차권등기명령을 신청해야 대항력과 우선변제권이 유지됩니다</strong></p>\n<p>보증금을 돌려받지 못한 채 이사를 가면 <strong>전입신고 효력이 사라져</strong> 우선변제권을 잃게 됩니다. <strong>임차권등기명령</strong>을 신청하면 이사 후에도 기존 대항력·우선변제권이 유지됩니다.</p>\n<p>신청은 주택 소재지 <strong>관할 지방법원</strong>에 합니다. 신청 비용은 수만 원 수준이며, 인용 결정 후 등기부에 임차권이 기재됩니다. 이사 후 전출하기 전에 <strong>등기부등본에 임차권 기재 여부</strong>를 반드시 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 보증금 미반환 시 이사 전 임차권등기명령 신청 | 등기 완료 후 이사·전출</blockquote>',
      },
      {
        title: '보증금 반환 거부 시: 법적 절차를 즉시 시작하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 → 지급명령 → 강제집행 순서로 신속하게 진행하세요</strong></p>\n<p>집주인이 계속 보증금 반환을 거부하면 ①<strong>내용증명</strong>으로 법적 절차를 예고하고, ②<strong>지급명령</strong>(법원 독촉 절차, 2주 내 결정)을 신청하세요. 집주인이 이의를 제기하지 않으면 확정 판결과 동일한 효력이 발생합니다.</p>\n<p>집주인이 이의를 제기하면 <strong>소액사건심판</strong>(3,000만원 이하) 또는 <strong>민사소송</strong>으로 전환됩니다. 판결 후에는 집주인의 <strong>부동산·통장에 강제집행</strong>을 신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 내용증명 → 지급명령(2주) → 확정 → 강제집행 | 이의 시 소액소송 전환</blockquote>',
      },
      {
        title: '전세보증보험 가입자: 보증기관에 보험금을 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">HUG·HF 보증보험 가입자는 보증기관에 청구하면 대신 지급받을 수 있습니다</strong></p>\n<p>전세보증보험(HUG·HF)에 가입한 경우, 계약 만료 후 일정 기간(통상 <strong>1개월</strong>) 이내에 보증금을 돌려받지 못하면 <strong>보증기관에 보험금 청구</strong>가 가능합니다. 필요 서류: ①임대차계약서, ②보증금 미반환 사실 확인 서류(내용증명), ③등기부등본.</p>\n<p>보증기관이 먼저 보증금을 지급하고, 이후 집주인에게 구상권을 행사합니다. 보험금 지급 신청은 만료일 이후 <strong>가능한 한 빨리</strong> 하세요. 지연하면 보험금 청구 기간이 지날 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: HUG·HF 보험금 청구 | 만료 후 1개월 이내 신청 | 임대차계약서·내용증명·등기부 준비</blockquote>',
      },
    ],
    cases: [
      {
        title: '임차권등기명령으로 이사 후에도 우선변제권을 지킨 사례',
        summary:
          '관련 사례에서도 임차인이 보증금을 돌려받지 못한 채 새 집으로 이사해야 했고, 임차권등기명령을 신청하여 기존 대항력을 유지한 뒤 집주인 부동산에 강제집행하여 보증금을 회수한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 이사 전 임차권등기명령 신청이 필수입니다. 등기 완료를 확인한 후 이사하세요.',
      },
      {
        title: '지급명령으로 2주 만에 보증금을 받아낸 사례',
        summary:
          '관련 사례에서도 집주인이 보증금 반환을 미루자 임차인이 지급명령을 신청하였고, 집주인이 이의를 제기하지 않아 2주 만에 확정되어 통장 압류로 보증금을 전액 회수한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 집주인이 이유 없이 지연하면 지급명령을 즉시 신청하세요. 소송보다 빠르고 비용이 적습니다.',
      },
    ],
    faq: [
      {
        question: '묵시적 갱신이 되면 보증금 반환 시기가 어떻게 되나요?',
        answer:
          '묵시적 갱신 후 임차인은 <strong>언제든 해지 통보</strong>가 가능하며, 통보 후 3개월이 경과하면 계약이 종료됩니다.',
      },
      {
        question: '임차권등기명령 신청 비용은 얼마인가요?',
        answer:
          '인지대·송달료 포함 <strong>3~5만원</strong> 수준입니다. 보증금에 비하면 매우 적은 비용입니다.',
      },
      {
        question: '집주인이 잠수를 타고 연락이 안 됩니다',
        answer:
          '등기부등본에서 <strong>집주인 주소</strong>를 확인하여 내용증명을 발송하세요. 반송되더라도 발송 사실이 증거가 됩니다.',
      },
      {
        question: '전세가 경매로 넘어가면 보증금을 못 받나요?',
        answer:
          '<strong>전입신고+확정일자</strong>가 있으면 경매 배당에서 우선변제권이 인정됩니다. 순위에 따라 배당받을 수 있습니다.',
      },
      {
        question: '보증금 일부만 돌려준다고 하면 어떻게 하나요?',
        answer:
          '일부 지급을 수령하더라도 나머지 금액에 대한 <strong>채권이 소멸되지 않습니다</strong>. 나머지 금액도 별도 청구 가능합니다.',
      },
      {
        question: '집주인이 세입자를 구해야 한다고 합니다. 기다려야 하나요?',
        answer:
          '법적으로 새 세입자를 구하는 것은 <strong>집주인의 의무가 아닙니다</strong>. 보증금 반환은 계약 만료일에 이루어져야 합니다.',
      },
      {
        question: '강제집행을 하려면 무엇이 필요한가요?',
        answer:
          '법원의 <strong>확정 판결문 또는 지급명령 확정증명</strong>이 있으면 집주인의 부동산·예금에 강제집행을 신청할 수 있습니다.',
      },
      {
        question: '무료 법률 지원을 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단</strong>(☎132) 또는 주거 취약 계층은 주택도시보증공사(HUG) 임차권 분쟁 지원을 활용하세요.',
      },
    ],
    cta: {
      text: '전세보증금 반환이 걱정되신다면 무료 진단으로 확인해보세요',
      link: '/diagnosis/jeonse',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세 진단', href: '/diagnosis/jeonse' },
    ],
  },

  // 15. bankruptcy / overwhelming-credit-card-debt-bankruptcy
  {
    domain: 'bankruptcy',
    slug: 'overwhelming-credit-card-debt-bankruptcy',
    keyword: '카드빚 감당 안 될 때 개인파산 가능 여부',
    questionKeyword: '카드빚이 너무 많아서 감당이 안 될 때 개인파산을 신청할 수 있나요?',
    ctaKeyword: '개인파산 가능 여부 진단',
    type: '상황형',
    perspective: 'neutral',
    meta: {
      title: '카드빚 감당 안 될 때 개인파산 가능 여부 총정리 | 로앤가이드',
      description:
        '카드빚이 월 소득을 초과해 감당이 안 된다면? 개인파산 신청 요건, 면책 가능 여부, 개인회생과의 차이를 지금 확인하세요.',
    },
    intro:
      '카드 돌려막기를 3년째 하고 있습니다. A카드 결제일에 B카드로 현금서비스를 받고, B카드 결제일엔 C카드를 씁니다. 이제는 더 이상 받아줄 카드사가 없습니다. 총 채무가 4,500만원, 월 소득은 220만원, 이자만 매달 80만원입니다. 생활비를 빼면 이자조차 감당이 안 되는 상황입니다. 개인파산이라는 단어를 검색했지만, 나 같은 경우에 정말 가능한 건지, 파산하면 어떻게 되는 건지 몰라 망설이고 있습니다.',
    sections: [
      {
        title: '카드빚도 개인파산 신청이 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">신용카드 채무는 개인파산·면책 신청의 가장 일반적인 사유입니다</strong></p>\n<p><strong>채무자회생법 제305조</strong>에 따라 지급불능 상태의 채무자는 법원에 파산을 신청할 수 있습니다. 카드빚, 현금서비스, 카드론은 모두 신청 대상 채무에 해당합니다. <strong>지급불능</strong>이란 현재 소득과 재산으로 채무를 정상적으로 상환할 수 없는 상태를 말합니다.</p>\n<p>법원은 ①월 소득, ②생활비, ③채무 총액, ④재산 상태를 종합하여 지급불능 여부를 판단합니다. 일반적으로 소득에서 최저생계비를 제외한 금액으로 <strong>5년 내 전체 채무를 상환할 수 없는 경우</strong> 지급불능으로 인정됩니다. 자신의 상황을 숨김없이 법원에 제출하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 카드빚도 파산 신청 가능 | 지급불능 = 5년 내 상환 불가 상태 | 법원이 종합 판단</blockquote>',
      },
      {
        title: '개인파산 vs 개인회생: 어느 것이 맞나요?',
        content:
          '<p><strong style="color:#1e3a5f">소득이 있으면 개인회생, 소득이 없거나 매우 적으면 개인파산이 일반적입니다</strong></p>\n<p><strong>개인회생</strong>은 일정 소득이 있는 채무자가 법원의 인가를 받아 3~5년간 분할 상환하는 제도입니다. 반면 <strong>개인파산</strong>은 재산과 소득으로 전혀 상환이 불가한 경우 법원이 파산을 선고하고 면책결정을 통해 채무를 소멸시키는 제도입니다.</p>\n<p>카드빚 4,500만원에 월 소득 220만원이라면, 생활비 공제 후 가처분소득이 5만원 이하인 경우 개인파산이 더 적합할 수 있습니다. 법원에 따라 다르므로 <strong>법률구조공단</strong>에서 먼저 무료 상담을 받아보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구분: 소득 있음 → 개인회생(3~5년 상환) | 소득 없거나 극소 → 개인파산·면책(채무 소멸)</blockquote>',
      },
      {
        title: '면책 결정이 나면 카드빚이 소멸됩니다',
        content:
          '<p><strong style="color:#1e3a5f">법원의 면책결정이 확정되면 대부분의 카드 채무는 법적으로 소멸됩니다</strong></p>\n<p>파산선고 후 법원의 <strong>면책결정</strong>이 내려지면 신용카드 채무, 현금서비스, 카드론 등 대부분의 채무가 소멸됩니다. 다만 <strong>비면책채권</strong>(고의 불법행위로 인한 손해배상, 조세 채무, 양육비 등)은 면책되지 않습니다.</p>\n<p>면책 후 <strong>복권</strong>이 이루어지면 공무원·금융기관 등 취업 제한도 해소됩니다. 신용등급은 파산 이력으로 장기간 영향을 받지만, 면책 후 성실히 생활하면 <strong>5~7년 후 신용이 회복</strong>됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면책 효과: 카드채무 소멸 | 비면책채권(조세·양육비 등)은 제외 | 복권 후 취업 제한 해소</blockquote>',
      },
      {
        title: '파산 신청 전 반드시 알아야 할 불이익',
        content:
          '<p><strong style="color:#1e3a5f">파산은 면책 결정 전까지 일정한 법적 제약이 따릅니다</strong></p>\n<p>파산선고 후 ①<strong>공무원·금융기관 취업 제한</strong>(복권 전), ②법인 이사·감사 자격 제한, ③여권 발급 제한(일부 경우)이 적용될 수 있습니다. 단, 대부분의 일반 취업에는 제한이 없습니다.</p>\n<p>파산 신청 시 <strong>면책 불허 사유</strong>(사기적 채무 증가, 도박 채무 등)가 있으면 면책이 거부될 수 있습니다. 카드 돌려막기는 면책 불허 사유가 아닌 경우가 많지만, 신청 전 법률 전문가와 반드시 상담하세요. 법률구조공단의 무료 법률구조 서비스를 활용하면 비용 부담 없이 신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불이익: 파산 중 공직·금융기관 취업 제한 | 복권 후 해소 | 도박·사기 채무는 면책 불허 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '카드 돌려막기 채무로 파산·면책이 인정된 사례',
        summary:
          '관련 사례에서도 카드 돌려막기로 누적된 5,000만원의 채무에 대해 법원이 지급불능을 인정하고 파산을 선고한 뒤 면책결정을 내려 채무가 전액 소멸된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 카드 돌려막기도 면책 불허 사유가 아닐 수 있습니다. 법률구조공단에서 무료 상담을 먼저 받아보세요.',
      },
      {
        title: '개인파산 대신 개인회생을 선택해 3년 만에 채무를 정리한 사례',
        summary:
          '관련 사례에서도 카드빚 3,000만원에 월 소득 250만원인 채무자가 개인회생을 신청하여 변제 계획을 인가받고 3년간 성실히 납부하여 잔여 채무를 면제받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 소득이 일정 수준 있다면 개인파산보다 개인회생이 유리할 수 있습니다. 두 가지를 비교하여 선택하세요.',
      },
    ],
    faq: [
      {
        question: '개인파산을 신청하면 집이나 차가 모두 압류되나요?',
        answer:
          '<strong>생활에 필수적인 재산(최저 생활 유지 재산)</strong>은 파산재단에서 제외됩니다. 다만 고가 자산은 환가 대상이 됩니다.',
      },
      {
        question: '파산하면 직장에서 해고되나요?',
        answer:
          '일반 사기업 취업에는 제한이 없습니다. 다만 <strong>금융기관, 공무원, 법원·검찰 관련 직종</strong>은 복권 전 취업 제한이 있습니다.',
      },
      {
        question: '파산 신청 비용은 얼마인가요?',
        answer:
          '법원 비용은 <strong>수만 원</strong> 수준입니다. 변호사 없이 본인 신청도 가능하고, 법률구조공단에서 무료 대리도 받을 수 있습니다.',
      },
      {
        question: '파산·면책까지 얼마나 걸리나요?',
        answer:
          '통상 신청 후 <strong>6개월~1년</strong> 내에 면책 결정이 납니다. 사안에 따라 다를 수 있습니다.',
      },
      {
        question: '가족에게 피해가 가나요?',
        answer:
          '배우자나 가족의 <strong>재산에는 영향이 없습니다</strong>. 다만 연대보증인이 있다면 연대보증인에게 채권이 행사됩니다.',
      },
      {
        question: '도박 채무는 면책이 안 된다고 하는데 사실인가요?',
        answer:
          '도박으로 인한 채무는 <strong>면책 불허 사유</strong>에 해당할 수 있습니다. 채무 발생 경위를 정직하게 신고하세요.',
      },
      {
        question: '파산 후 신용카드를 다시 만들 수 있나요?',
        answer:
          '면책 후 <strong>5~7년 후</strong> 신용이 회복되면 카드 발급이 가능해집니다. 즉시 발급은 어렵습니다.',
      },
      {
        question: '무료로 파산 상담을 받으려면 어디로 연락하나요?',
        answer:
          '<strong>대한법률구조공단</strong>(☎132)에서 무료 상담과 법률구조 서비스를 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 카드빚 상황에서 개인파산이 가능한지 무료로 진단해보세요',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '파산·면책 진단', href: '/diagnosis/bankruptcy' },
    ],
  },
];
