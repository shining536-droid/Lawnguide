import { SpokePage } from '../spoke-pages';

export const inheritancePages: SpokePage[] = [
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-process',
    keyword: '상속 포기 기간과 절차',
    questionKeyword: '상속 포기는 언제까지 어떻게 하나요?',
    ctaKeyword: '상속 포기 절차',
    type: '절차형',
    meta: {
      title: '상속 포기 기간과 절차 | 로앤가이드',
      description: '상속 포기 신고 기간, 필요 서류, 법원 절차, 주의사항을 정리했습니다.',
    },
    intro: '부모님이 돌아가시고 빚이 있다는 걸 알게 됐습니다. 상속을 포기하고 싶은데, 기한이 있다고 들었습니다. 상속 포기 기간을 놓치면 빚을 떠안게 됩니다. 기한과 절차를 정리했습니다.',
    timelineSteps: ['기간 확인', '서류 준비', '법원 신고', '수리 확인'],
    sections: [
      {
        title: '상속 포기는 3개월 이내에 해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">상속 개시를 안 날로부터 3개월 이내에 신고해야 합니다</strong></p>\n<p><strong>민법 제1019조</strong>에 따라 상속인은 상속 개시가 있음을 <strong>안 날로부터 3개월 이내</strong>에 상속 포기를 해야 합니다. 보통은 피상속인이 사망한 날이 기산점이 됩니다.</p>\n<p>3개월을 넘기면 <strong>단순승인</strong>한 것으로 간주되어 빚을 포함한 모든 재산을 물려받게 됩니다. 기한을 절대 놓치지 마세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상속 안 날로부터 3개월 이내 | 미신고 시 단순승인(빚 포함 상속)</blockquote>',
      },
      {
        title: '필요 서류를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">가족관계증명서와 사망 관련 서류가 필요합니다</strong></p>\n<p>상속포기 신고에 필요한 서류: ①<strong>상속포기 심판청구서</strong>, ②피상속인 기본증명서(사망 기재), ③피상속인 가족관계증명서, ④상속인 기본증명서, ⑤상속인 가족관계증명서, ⑥주민등록등본입니다.</p>\n<p>서류는 정부24나 주민센터에서 발급받을 수 있습니다. 인지대와 송달료도 <strong>수만원</strong> 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류: 심판청구서, 기본증명서, 가족관계증명서, 주민등록등본</blockquote>',
      },
      {
        title: '가정법원에 상속포기 심판청구를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">피상속인의 마지막 주소지 관할 가정법원에 신청합니다</strong></p>\n<p>피상속인의 <strong>최후 주소지</strong> 관할 가정법원에 상속포기 심판청구서를 제출합니다. 우편 접수도 가능합니다.</p>\n<p>법원이 접수하면 통상 <strong>1~2개월</strong> 내에 심판이 이루어집니다. 특별한 문제가 없으면 상속포기가 수리됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 가정법원 심판청구 → 1~2개월 → 수리 결정</blockquote>',
      },
      {
        title: '상속 포기 후 다음 순위 상속인에게 알리세요',
        content:
          '<p><strong style="color:#1e3a5f">상속 포기 시 다음 순위 상속인에게 상속이 넘어갑니다</strong></p>\n<p>상속을 포기하면 <strong>처음부터 상속인이 아닌 것</strong>으로 봅니다. 따라서 다음 순위 상속인(예: 부모 → 형제자매)에게 상속이 넘어갑니다.</p>\n<p>다음 순위 상속인도 빚을 물려받지 않으려면 <strong>역시 3개월 이내에 상속 포기</strong>를 해야 합니다. 반드시 알려주세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 포기 → 다음 순위 상속인에게 전이 | 다음 순위도 포기 필요</blockquote>',
      },
    ],
    cases: [
      {
        title: '3개월 기한을 놓쳐 빚을 상속받은 사례',
        summary:
          '관련 사례에서도 상속인이 빚이 있는 줄 몰라 3개월 기한을 넘겨 단순승인이 된 경우가 있습니다. 다만 빚의 존재를 나중에 알게 된 경우 특별한정승인이 가능할 수 있습니다.',
        takeaway:
          '비슷한 상황이라면 사망 즉시 피상속인의 재산과 부채를 조회하고, 3개월 기한을 관리하세요.',
      },
      {
        title: '상속인 전원이 순차적으로 상속 포기한 사례',
        summary:
          '관련 사례에서도 1순위 상속인(자녀)이 포기한 후 2순위(부모), 3순위(형제자매)까지 순차적으로 상속 포기하여 빚 상속을 방지한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 상속 포기 시 다음 순위 상속인들에게 반드시 알려 함께 포기 절차를 진행하세요.',
      },
    ],
    faq: [
      {
        question: '상속 포기와 한정승인의 차이는?',
        answer: '상속 포기는 <strong>모든 것을 포기</strong>, 한정승인은 <strong>상속 재산 범위 내에서만</strong> 빚을 갚는 것입니다.',
      },
      {
        question: '상속 포기 후 철회할 수 있나요?',
        answer: '<strong>수리 후에는 철회가 불가</strong>합니다. 신중하게 결정하세요.',
      },
      {
        question: '미성년자도 상속 포기가 되나요?',
        answer: '<strong>법정대리인</strong>(부모 등)이 대신 신청합니다.',
      },
      {
        question: '피상속인의 재산·부채를 어떻게 조회하나요?',
        answer: '<strong>안심상속 원스톱 서비스</strong>(정부24)로 금융·부동산·세금 등을 일괄 조회할 수 있습니다.',
      },
      {
        question: '상속 포기해도 보험금은 받을 수 있나요?',
        answer: '수익자가 지정된 <strong>생명보험금</strong>은 상속 재산이 아니므로 받을 수 있습니다.',
      },
      {
        question: '상속 포기 비용은 얼마인가요?',
        answer: '인지대와 송달료 합쳐 <strong>수만원</strong> 수준입니다. 변호사 없이도 신청 가능합니다.',
      },
      {
        question: '상속 재산을 이미 처분했으면?',
        answer: '상속 재산을 <strong>처분하면 단순승인</strong>한 것으로 간주됩니다. 포기가 불가합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상속 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상속 진단', href: '/diagnosis/inheritance' },
      { label: '상속 빚이 더 많을 때 한정승인 방법', href: '/guide/inheritance/limited-inheritance-acceptance' },
      { label: '이혼 가이드', href: '/guide/divorce' },
      { label: '전세보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
    ],
  },
  {
    domain: 'inheritance',
    slug: 'limited-inheritance-acceptance',
    keyword: '상속 빚이 더 많을 때 한정승인 방법',
    questionKeyword: '상속 빚이 재산보다 많으면 어떻게 하나요?',
    ctaKeyword: '한정승인 절차',
    type: '상황형',
    meta: {
      title: '상속 빚이 더 많을 때 한정승인 방법 | 로앤가이드',
      description: '상속 빚이 재산보다 많을 때 한정승인 절차, 필요 서류, 주의사항을 정리했습니다.',
    },
    intro: '아버지가 돌아가시고 부동산과 예금이 있지만, 빚도 상당합니다. 재산보다 빚이 더 많은지 정확히 모르겠습니다. 상속 포기를 하자니 재산이 아깝고, 그냥 상속받자니 빚이 걱정됩니다. 이런 상황에서는 한정승인을 검토해보세요.',
    timelineSteps: ['재산·부채 조회', '서류 준비', '법원 한정승인', '채권자 공고'],
    sections: [
      {
        title: '한정승인이란 — 상속 재산 범위에서만 빚을 갚는 것입니다',
        content:
          '<p><strong style="color:#1e3a5f">상속받은 재산 한도 내에서만 채무를 변제합니다</strong></p>\n<p><strong>민법 제1028조</strong>에 따라 한정승인을 하면 <strong>상속 재산의 한도 내에서만</strong> 피상속인의 채무를 변제합니다. 빚이 재산보다 많더라도 초과분은 갚지 않아도 됩니다.</p>\n<p>상속 재산이 더 많으면 빚을 갚고 <strong>남은 재산을 상속</strong>받을 수 있습니다. 재산과 빚 규모가 불확실할 때 가장 안전한 선택입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상속 재산 한도 내에서만 빚 변제 | 초과 채무 면책</blockquote>',
      },
      {
        title: '3개월 이내에 법원에 한정승인 신고를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">상속 포기와 마찬가지로 3개월 기한이 있습니다</strong></p>\n<p>한정승인도 상속 개시를 <strong>안 날로부터 3개월 이내</strong>에 해야 합니다. 피상속인의 마지막 주소지 관할 가정법원에 신청합니다.</p>\n<p>필요 서류: ①한정승인 심판청구서, ②<strong>상속재산 목록</strong>(재산과 부채 일체), ③기본증명서, ④가족관계증명서, ⑤주민등록등본 등입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 3개월 이내 | 서류: 심판청구서 + 상속재산 목록(핵심)</blockquote>',
      },
      {
        title: '상속재산 목록을 정확히 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">재산과 부채를 빠짐없이 기재해야 합니다</strong></p>\n<p><strong>안심상속 원스톱 서비스</strong>(정부24)를 이용하면 금융, 부동산, 세금, 자동차 등을 일괄 조회할 수 있습니다. 금융감독원 상속인 금융거래 조회도 활용하세요.</p>\n<p>상속재산 목록에 <strong>고의로 누락</strong>하면 한정승인이 취소되고 단순승인으로 간주될 수 있으니 주의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조회: 안심상속 원스톱(정부24), 금융감독원 | 주의: 고의 누락 시 단순승인 간주</blockquote>',
      },
      {
        title: '한정승인 후 채권자 공고와 변제 절차',
        content:
          '<p><strong style="color:#1e3a5f">한정승인 수리 후 5일 이내에 채권자 공고를 해야 합니다</strong></p>\n<p>한정승인이 수리되면 <strong>5일 이내</strong>에 일반 채권자에 대한 공고를 해야 합니다. 알고 있는 채권자에게는 개별 최고도 필요합니다. 공고 기간은 <strong>2개월 이상</strong>입니다.</p>\n<p>공고 기간이 지나면 채권자에게 상속 재산에서 <strong>변제</strong>를 진행합니다. 우선순위에 따라 배당하고, 남은 재산이 있으면 상속인이 취득합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 수리 → 5일 내 채권자 공고(2개월) → 변제 → 잔여 재산 상속</blockquote>',
      },
    ],
    cases: [
      {
        title: '한정승인으로 초과 채무를 면한 사례',
        summary:
          '관련 사례에서도 상속 재산 5,000만원에 채무 8,000만원인 상황에서 한정승인을 하여, 5,000만원 한도에서만 채무를 변제하고 나머지 3,000만원은 면책된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 빚이 재산보다 많거나 불확실할 때 한정승인을 선택하세요.',
      },
      {
        title: '특별한정승인이 인정된 사례',
        summary:
          '관련 사례에서도 3개월 기한이 지났지만 빚의 존재를 사후에 알게 된 경우, 민법 제1019조 제3항에 따라 특별한정승인이 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 기한을 놓쳤더라도 빚을 나중에 알게 된 사정이 있으면 특별한정승인을 검토하세요.',
      },
    ],
    faq: [
      {
        question: '한정승인과 상속 포기 중 뭐가 나은가요?',
        answer: '빚이 확실히 더 많으면 <strong>상속 포기</strong>, 불확실하면 <strong>한정승인</strong>이 안전합니다.',
      },
      {
        question: '특별한정승인이란?',
        answer: '3개월 기한 후에 빚을 알게 된 경우 <strong>알게 된 날로부터 3개월 이내</strong>에 신청할 수 있습니다.',
      },
      {
        question: '한정승인 비용은 얼마인가요?',
        answer: '법원 인지대·송달료는 <strong>수만원</strong>이지만, 채권자 공고비(신문 공고)가 추가됩니다.',
      },
      {
        question: '상속인 중 일부만 한정승인할 수 있나요?',
        answer: '네, 상속인 각자가 <strong>개별적으로</strong> 한정승인, 포기, 단순승인을 선택할 수 있습니다.',
      },
      {
        question: '한정승인 후 상속세를 내야 하나요?',
        answer: '상속받는 재산이 있으면 <strong>상속세 신고 의무</strong>가 있습니다.',
      },
      {
        question: '채권자 공고를 안 하면 어떻게 되나요?',
        answer: '알고 있는 채권자에게 변제하지 않으면 <strong>한정승인의 효력</strong>에 영향이 있을 수 있습니다.',
      },
      {
        question: '한정승인 후 새로운 빚이 발견되면?',
        answer: '한정승인의 효력은 유지됩니다. <strong>상속 재산 한도</strong>에서 추가 변제합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상속 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상속 진단', href: '/diagnosis/inheritance' },
      { label: '상속 포기 기간과 절차', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '이혼 가이드', href: '/guide/divorce' },
      { label: '전세보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
    ],
  },
  {
    domain: 'inheritance',
    slug: 'limited-inheritance-acceptance-process',
    keyword: '상속 한정승인 절차와 기간 내 신청 방법',
    questionKeyword: '상속 한정승인은 어떤 절차로 어떻게 신청하나요?',
    ctaKeyword: '한정승인 신청',
    type: '절차형',
    meta: {
      title: '상속 한정승인 절차와 기간 내 신청 방법 | 로앤가이드',
      description:
        '상속 한정승인 신청 절차, 3개월 기한, 필요서류, 채권자 공고, 상속포기와 비교까지 정리했습니다.',
    },
    intro:
      '아버지가 갑자기 돌아가셨는데 부동산도 있고 빚도 있습니다. 빚이 얼마나 되는지 정확히 모르겠어서 상속 포기를 하기엔 아깝고, 그냥 받자니 빚이 두렵습니다. 이런 상황이라면 한정승인 절차를 기한 내에 밟아야 합니다. 한정승인 신청 절차를 단계별로 정리했습니다.',
    timelineSteps: ['기한 확인(3개월)', '서류 준비·재산조회', '법원 한정승인 신고', '채권자 공고·변제'],
    sections: [
      {
        title: '한정승인은 3개월 안에 신청해야 합니다 — 기한을 놓치면 단순승인',
        content:
          '<p><strong style="color:#1e3a5f">상속 개시를 안 날로부터 3개월 이내에 가정법원에 신고해야 합니다</strong></p>\n<p><strong>민법 제1028조</strong>에 따라 한정승인이란 상속받은 재산의 한도 내에서만 피상속인의 채무를 변제하겠다는 의사표시입니다. 핵심 기한은 <strong>민법 제1019조</strong>에 규정된 <strong>3개월</strong>입니다.</p>\n<p>상속인이 상속 개시가 있음을 <strong>안 날로부터 3개월</strong> 이내에 가정법원에 한정승인 신고를 해야 합니다. 통상 피상속인의 사망일이 기산점이 됩니다. 3개월을 넘기면 <strong>단순승인</strong>한 것으로 간주되어 빚 전부를 떠안게 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상속 안 날로부터 3개월 이내 신고 | 초과 시 단순승인 간주(빚 전액 상속)</blockquote>',
      },
      {
        title: '필요서류를 준비하고 상속재산을 조회하세요',
        content:
          '<p><strong style="color:#1e3a5f">상속재산 목록이 한정승인의 핵심 서류입니다</strong></p>\n<p>한정승인에 필요한 서류: ①<strong>한정승인 심판청구서</strong>, ②<strong>상속재산 목록</strong>(재산과 부채를 빠짐없이 기재), ③피상속인 기본증명서(사망 기재), ④피상속인 가족관계증명서, ⑤상속인 기본증명서·가족관계증명서, ⑥주민등록등본입니다.</p>\n<p>상속재산 조회는 <strong>안심상속 원스톱 서비스</strong>(정부24)를 이용하면 금융·부동산·세금·자동차·연금을 일괄 조회할 수 있습니다. <strong>금융감독원</strong> 상속인 금융거래 조회도 활용하세요. 상속재산 목록에 <strong>고의로 재산을 빠뜨리면</strong> 한정승인이 취소되고 단순승인으로 간주될 수 있으니 빠짐없이 기재해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류: 심판청구서 + 상속재산 목록(핵심) | 조회: 정부24 안심상속, 금융감독원</blockquote>',
      },
      {
        title: '가정법원에 한정승인 심판청구서를 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">피상속인의 마지막 주소지 관할 가정법원에 신청합니다</strong></p>\n<p>한정승인 심판청구서와 상속재산 목록, 첨부 서류를 갖추어 피상속인의 <strong>최후 주소지 관할 가정법원</strong>에 제출합니다. 방문 접수 외에 <strong>우편 접수</strong>도 가능하므로 기한이 임박한 경우 우편을 활용하세요.</p>\n<p>법원 인지대와 송달료는 합쳐서 <strong>수만원</strong> 수준입니다. 상속인이 여러 명인 경우 <strong>각자 개별적으로</strong> 한정승인, 상속 포기, 단순승인을 선택할 수 있습니다. 법원이 접수하면 통상 <strong>1~2개월</strong> 내에 심판이 이루어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 관할 가정법원 제출(방문·우편) → 1~2개월 심리 → 수리 결정</blockquote>',
      },
      {
        title: '한정승인 수리 후 채권자 공고와 변제 절차를 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">수리 후 5일 이내에 채권자 공고를 해야 합니다</strong></p>\n<p><strong>민법 제1032조</strong>에 따라 한정승인이 수리되면 <strong>5일 이내</strong>에 일반 채권자에 대한 공고를 해야 합니다. 공고는 <strong>관보 또는 신문</strong>에 게재하며, 비용은 수십만원 수준입니다. 알고 있는 채권자에게는 개별적으로 <strong>최고(催告)</strong>도 해야 합니다.</p>\n<p>공고 기간은 <strong>2개월 이상</strong>입니다. 공고 기간이 지나면 채권자에게 상속 재산에서 <strong>우선순위에 따라 변제</strong>를 진행합니다. 변제 후 남은 재산이 있으면 상속인이 취득합니다. 채권자 공고를 하지 않으면 한정승인의 효력에 문제가 생길 수 있으니 반드시 이행하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">채권자 공고: 수리 후 5일 내 신문 게재(2개월 이상) → 우선순위 변제 → 잔여 재산 상속</blockquote>',
      },
    ],
    cases: [
      {
        title: '3개월 기한 후 빚을 알게 되어 특별한정승인이 인정된 사례',
        summary:
          '관련 사례에서도 상속인이 피상속인의 사망 후 3개월이 지난 뒤에야 보증채무가 있다는 사실을 알게 된 경우, 민법 제1019조 제3항에 따라 그 사실을 안 날로부터 3개월 이내에 특별한정승인을 신청하여 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 기한을 놓쳤더라도 빚을 나중에 알게 된 경우 특별한정승인이 가능하니 즉시 법원에 신청하세요.',
      },
      {
        title: '상속재산 목록에 고의 누락하여 단순승인 간주된 사례',
        summary:
          '관련 사례에서도 한정승인 신고 시 상속재산 목록에 부동산 일부를 고의로 빠뜨렸다가 채권자가 이의를 제기하여 민법 제1026조에 따라 단순승인한 것으로 간주된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 상속재산 목록은 재산과 부채를 빠짐없이 정직하게 기재하세요.',
      },
    ],
    faq: [
      {
        question: '한정승인과 상속 포기는 어떻게 다른가요?',
        answer:
          '한정승인은 <strong>상속 재산 범위 내에서만 빚을 갚고 남은 재산은 상속</strong>받는 것이고, 상속 포기는 재산과 빚을 <strong>모두 포기</strong>하는 것입니다.',
      },
      {
        question: '한정승인 신청 기한 3개월은 언제부터 계산하나요?',
        answer:
          '<strong>상속 개시가 있음을 안 날</strong>부터 계산합니다. 통상 피상속인의 사망일이 기산점이 됩니다.',
      },
      {
        question: '특별한정승인이란 무엇인가요?',
        answer:
          '3개월 기한이 지난 후 빚의 존재를 알게 된 경우, <strong>알게 된 날로부터 3개월 이내</strong>에 신청할 수 있는 한정승인입니다(민법 제1019조 제3항).',
      },
      {
        question: '한정승인 비용은 얼마나 드나요?',
        answer:
          '법원 인지대·송달료는 <strong>수만원</strong>이고, 채권자 공고 비용(신문 게재료)이 <strong>수십만원</strong> 추가됩니다. 변호사 없이도 신청 가능합니다.',
      },
      {
        question: '상속인 중 일부만 한정승인할 수 있나요?',
        answer:
          '네, 상속인 각자가 <strong>개별적으로</strong> 한정승인, 상속 포기, 단순승인을 선택할 수 있습니다.',
      },
      {
        question: '한정승인 후 새로운 빚이 발견되면 어떻게 되나요?',
        answer:
          '한정승인의 효력은 그대로 유지됩니다. 새로 발견된 채무도 <strong>상속 재산 한도 내에서만</strong> 변제하면 됩니다.',
      },
      {
        question: '채권자 공고를 하지 않으면 어떻게 되나요?',
        answer:
          '채권자 공고를 하지 않으면 알고 있는 채권자에 대한 변제 책임이 남아 <strong>한정승인의 효력</strong>에 영향이 있을 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상속 상황에 맞는 한정승인 절차를 확인해보세요',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상속 진단', href: '/diagnosis/inheritance' },
      { label: '상속 포기 기간과 절차', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '상속 빚이 더 많을 때 한정승인 방법', href: '/guide/inheritance/limited-inheritance-acceptance' },
      { label: '이혼 가이드', href: '/guide/divorce' },
    ],
  },
];
