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
      title: '상속 포기 3개월 기한·절차 총정리 | 로앤가이드',
      description: '상속 포기는 3개월 안에 해야 합니다. 민법 제1019조 기한, 가정법원 신고 절차, 필요 서류, 기한 도과 시 대응법까지 지금 확인하세요.',
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
      title: '상속 빚이 재산보다 많을 때 한정승인 방법 | 로앤가이드',
      description: '부모님 빚이 재산보다 많다면? 한정승인으로 상속 재산 범위 내에서만 갚을 수 있습니다. 3개월 기한, 필요 서류, 채권자 공고 절차를 바로 정리해보세요.',
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
      title: '한정승인 필요서류·신청 절차·3개월 기한 총정리 | 로앤가이드',
      description: '한정승인 필요서류가 궁금하다면 기본증명서부터 재산목록까지 전체 서류와 가정법원 신청 절차, 3개월 기한을 지금 확인하세요.',
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
      { label: '상속 가이드', href: '/guide/inheritance' },
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      { label: '한정승인과 상속포기 차이점 비교', href: '/guide/inheritance/limited-acceptance-vs-renunciation' },
      { label: '부모 사망 후 숨겨진 빚 발견했을 때', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
      { label: '상속포기 기한과 신고 절차', href: '/guide/inheritance/inheritance-renunciation-deadline' },
    ],
  },
  {
    domain: 'inheritance',
    slug: 'inheritance-hidden-debt-discovery',
    keyword: '부모 사망 후 숨겨진 빚 발견했을 때',
    questionKeyword: '부모님이 돌아가신 후 모르던 빚이 나왔는데 어떻게 하나요?',
    ctaKeyword: '상속 채무 발견 대응',
    type: '상황형',
    meta: {
      title: '부모 사망 후 숨겨진 빚 발견 시 즉시 대응법 | 로앤가이드',
      description: '부모님 돌아가신 후 몰랐던 빚이 나왔다면? 특별한정승인 신청 기한, 상속포기와 비교, 안심상속 원스톱 서비스 활용법을 바로 정리해보세요.',
    },
    intro:
      '아버지가 갑자기 돌아가셨습니다. 장례를 치르고 나니 은행과 대부업체에서 채무 독촉 연락이 오기 시작했습니다. 아버지가 빚이 있었다는 사실을 전혀 몰랐습니다. 상속인은 피상속인의 채무도 함께 상속받기 때문에, 빠르게 대응하지 않으면 부모의 빚을 고스란히 떠안게 됩니다. 지금 해야 할 일을 정리했습니다.',
    sections: [
      {
        title: '안심상속 원스톱 서비스로 채무 전체를 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">숨겨진 빚이 더 있을 수 있으므로 전체 재산·채무 조회부터 해야 합니다</strong></p>\n<p><strong>안심상속 원스톱 서비스</strong>는 정부24 또는 주민센터에서 신청할 수 있으며, 피상속인의 <strong>금융재산·채무, 부동산, 자동차, 국세·지방세 체납 내역</strong>을 한 번에 조회해줍니다. 사망일이 속한 달의 말일부터 <strong>6개월 이내</strong>에 신청할 수 있습니다.</p>\n<p>조회 결과가 나오기까지 통상 <strong>2~4주</strong>가 소요됩니다. 결과를 받기 전이라도 채무가 재산보다 많을 것이 확실하다면, 상속포기·한정승인 기한(3개월)이 지나지 않도록 미리 법률 상담을 받아두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신청: 정부24 또는 주민센터 | 조회 항목: 금융·부동산·차량·세금 체납 | 소요 기간: 2~4주</blockquote>',
      },
      {
        title: '3개월 이내에 상속포기 또는 한정승인을 결정하세요',
        content:
          '<p><strong style="color:#1e3a5f">상속 개시를 안 날로부터 3개월 이내에 가정법원에 신청해야 합니다</strong></p>\n<p><strong>상속포기</strong>는 재산과 채무 모두를 포기하는 것이고, <strong>한정승인</strong>은 상속받은 재산 범위 내에서만 채무를 갚겠다는 것입니다(민법 제1019조). 둘 다 <strong>상속 개시를 안 날로부터 3개월 이내</strong>에 피상속인의 마지막 주소지 관할 <strong>가정법원</strong>에 신청해야 합니다.</p>\n<p>채무가 재산보다 확실히 많으면 <strong>상속포기</strong>가 간편하고, 재산과 채무 규모를 정확히 모르겠으면 <strong>한정승인</strong>이 안전합니다. 한정승인을 선택하면 <strong>채권자 공고</strong>(관보 게재, 2개월 이상)를 해야 하는 추가 절차가 있으니 유의하세요.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">부모님 사망 후 숨겨진 빚이 발견되었다면, 지금 상황에 맞는 대응 방법을 <a href="/diagnosis/inheritance" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 상속 개시를 안 날로부터 3개월 | 상속포기: 전부 포기 | 한정승인: 재산 한도 내 변제</blockquote>',
      },
      {
        title: '3개월이 지났다면 특별한정승인을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">채무 초과 사실을 나중에 알았다면 안 날로부터 3개월 이내에 특별한정승인이 가능합니다</strong></p>\n<p>상속포기·한정승인 기한 3개월이 지났더라도, <strong>상속 채무가 상속 재산을 초과하는 사실을 중대한 과실 없이 나중에 알게 된 경우</strong>에는 <strong>특별한정승인</strong>(민법 제1019조 제3항)을 신청할 수 있습니다. <strong>그 사실을 안 날로부터 3개월 이내</strong>에 가정법원에 신청해야 합니다.</p>\n<p>특별한정승인이 인정되려면 ①<strong>채무 초과 사실을 몰랐다는 점</strong>, ②<strong>모른 데 중대한 과실이 없었다는 점</strong>을 소명해야 합니다. 채무 독촉 통지서, 우편 수령일, 금융거래 조회 결과 등 <strong>"언제 알게 되었는지"를 입증할 자료</strong>를 반드시 보관하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">특별한정승인: 민법 제1019조 제3항 | 채무 초과를 안 날로부터 3개월 이내 | 중대한 과실 없음 소명 필요</blockquote>',
      },
      {
        title: '상속포기 시 다음 순위 상속인에게 알려주세요',
        content:
          '<p><strong style="color:#1e3a5f">내가 상속을 포기하면 채무가 다음 순위 상속인에게 넘어갑니다</strong></p>\n<p>상속포기는 처음부터 상속인이 아니었던 것으로 간주되므로, <strong>다음 순위 상속인</strong>(자녀 → 부모 → 형제자매 → 4촌 이내 방계혈족)에게 상속권이 이전됩니다. 1순위인 자녀 전원이 포기하면 2순위인 <strong>피상속인의 부모</strong>에게, 부모도 포기하면 <strong>형제자매</strong>에게 채무가 넘어갑니다.</p>\n<p>따라서 상속포기를 했다면 반드시 <strong>다음 순위 상속인에게 알려서</strong> 그들도 기한 내에 상속포기 또는 한정승인을 할 수 있도록 해야 합니다. 알리지 않으면 예상치 못한 가족 간 분쟁이 발생할 수 있습니다. 모든 순위의 상속인이 포기하면 채무는 <strong>상속재산 범위 내에서만 청산</strong>됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">상속 순위: 자녀 → 부모 → 형제자매 | 포기 시 다음 순위에 통지 필수 | 전원 포기 → 재산 범위 내 청산</blockquote>',
      },
    ],
    cases: [
      {
        title: '채무 독촉장 수령 후 특별한정승인이 인정된 사례',
        summary:
          '상속 개시 6개월 후 대부업체 채무 독촉장을 처음 받은 상속인이 특별한정승인을 신청했고, 법원은 상속인이 피상속인과 별거하여 채무 존재를 알 수 없었던 점을 인정하여 특별한정승인을 허가했습니다.',
        takeaway:
          '3개월 기한이 지났더라도 포기하지 마세요. 채무를 알게 된 시점을 입증할 수 있는 자료(독촉장, 우편 수령증)를 보관하고 즉시 법원에 신청하세요.',
      },
      {
        title: '안심상속 서비스로 숨겨진 채무를 확인하고 한정승인한 사례',
        summary:
          '안심상속 원스톱 서비스 조회 결과 피상속인의 채무가 재산의 3배에 달하는 것이 확인되었습니다. 상속인은 3개월 이내에 한정승인을 신청하여 상속 재산 한도 내에서만 채무를 변제하고 나머지 채무를 면했습니다.',
        takeaway:
          '채무 규모를 정확히 모르겠다면 안심상속 서비스부터 신청하고, 결과를 기다리는 동안 한정승인 준비를 병행하세요.',
      },
    ],
    faq: [
      {
        question: '부모님이 돌아가신 후 빚이 있는지 어떻게 알 수 있나요?',
        answer: '<strong>안심상속 원스톱 서비스</strong>(정부24 또는 주민센터)를 신청하면 금융채무, 부동산, 세금 체납 등을 한 번에 조회할 수 있습니다.',
      },
      {
        question: '상속포기와 한정승인 중 어떤 걸 선택해야 하나요?',
        answer: '채무가 재산보다 확실히 많으면 <strong>상속포기</strong>, 정확한 규모를 모르겠으면 <strong>한정승인</strong>이 안전합니다.',
      },
      {
        question: '상속포기 기한 3개월은 언제부터 시작되나요?',
        answer: '<strong>상속 개시가 있음을 안 날</strong>(통상 사망일)로부터 3개월입니다. 사망 사실을 늦게 안 경우 그 날부터 기산됩니다.',
      },
      {
        question: '3개월이 지나면 정말 방법이 없나요?',
        answer: '채무가 재산을 초과하는 사실을 <strong>나중에 안 경우</strong>에는 <strong>특별한정승인</strong>(민법 제1019조 제3항)을 안 날로부터 3개월 이내에 신청할 수 있습니다.',
      },
      {
        question: '내가 상속포기하면 빚은 어떻게 되나요?',
        answer: '다음 순위 상속인에게 넘어갑니다. <strong>자녀 전원 포기 → 피상속인의 부모 → 형제자매</strong> 순서입니다. 반드시 다음 순위에 알려주세요.',
      },
      {
        question: '한정승인하면 채권자 공고를 꼭 해야 하나요?',
        answer: '네, 한정승인 후 <strong>관보에 채권자 공고</strong>를 하고 2개월 이상 기다려야 합니다. 공고를 하지 않으면 한정승인의 효력에 문제가 생길 수 있습니다.',
      },
      {
        question: '상속포기 신청 비용은 얼마인가요?',
        answer: '가정법원에 납부하는 <strong>인지대 약 5,000원</strong>과 <strong>송달료</strong>가 필요합니다. 변호사를 선임하면 별도 수임료가 발생합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 <strong>지방변호사회 무료 법률상담</strong>을 활용하세요. 기초생활수급자 등은 법률구조도 무료입니다.',
      },
    ],
    cta: {
      text: '1분 안에 상속 채무 발견 대응 준비사항 확인하기',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상속 가이드', href: '/guide/inheritance' },
      { label: '상속 포기 기간과 절차', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '한정승인 절차 안내', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속 진단', href: '/diagnosis/inheritance' },
    ],
  },
  {
    domain: 'inheritance',
    slug: 'inheritance-family-dispute-mediation',
    keyword: '상속 분쟁 조정 vs 소송 비교',
    questionKeyword: '상속 분쟁이 생겼는데 조정과 소송 중 뭐가 나은가요?',
    ctaKeyword: '상속 분쟁 해결',
    type: '비교형',
    meta: {
      title: '상속 분쟁 조정 vs 소송 5가지 비교 | 로앤가이드',
      description: '상속 분쟁, 조정이 나을까 소송이 나을까? 소요기간·비용·강제력·관계 영향·성공률 5가지 기준으로 비교하여 내 상황에 맞는 방법을 지금 확인하세요.',
    },
    intro:
      '아버지가 돌아가시고 형제들 사이에 갈등이 시작됐습니다. 큰형은 "집은 내가 받겠다"고 하고, 동생은 "균등 분할해야 한다"고 합니다. 대화로는 해결이 안 되는 상황입니다. 조정과 소송, 어떤 방법이 내 상황에 맞는지 비교해보세요.',
    comparison: {
      title: '상속 분쟁 해결 방법 비교: 조정 vs 소송',
      headers: ['구분', '가사조정', '소송(심판/재판)'],
      rows: [
        {
          label: '소요기간',
          values: ['3~6개월', '6개월~2년 이상'],
        },
        {
          label: '비용',
          values: ['인지대 낮음(소가의 1/5), 변호사 선택적', '인지대 높음, 변호사 선임 권장'],
        },
        {
          label: '공개여부',
          values: ['비공개(조정실 진행)', '공개(법정 변론)'],
        },
        {
          label: '강제력',
          values: ['조정 성립 시 판결과 동일한 효력', '판결 확정 시 강제집행 가능'],
        },
        {
          label: '관계 영향',
          values: ['합의 기반으로 관계 유지 가능', '대립 구조로 관계 악화 우려'],
        },
        {
          label: '결과 예측',
          values: ['당사자 합의에 따라 유연한 결과', '법률 기준에 따른 엄격한 판단'],
        },
      ],
    },
    sections: [
      {
        title: '가사조정은 법원에서 진행하지만 합의로 마무리됩니다',
        content:
          '<p><strong style="color:#1e3a5f">가정법원의 조정위원회가 중재하며, 합의가 되면 판결과 같은 효력이 생깁니다</strong></p>\n<p>상속 분쟁이 생기면 바로 소송을 제기하기보다 <strong>가사조정</strong>을 먼저 신청하는 경우가 많습니다. 실제로 가정법원은 상속재산분할 사건에서 <strong>조정 전치주의</strong>를 적용해, 심판 전에 먼저 조정을 시도합니다(가사소송법 제50조).</p>\n<p>조정위원회가 양측 이야기를 듣고 합리적인 분할안을 제시합니다. 양측이 수용하면 <strong>조정조서</strong>가 작성되고, 이는 확정판결과 동일한 효력이 있습니다. 비용이 적고, 비공개로 진행되어 가족 관계를 덜 손상시킬 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 가사조정 → 조정위원회 중재 → 합의 시 조정조서(판결과 동일 효력)</blockquote>',
      },
      {
        title: '조정이 안 되면 상속재산분할심판으로 넘어갑니다',
        content:
          '<p><strong style="color:#1e3a5f">조정 불성립 시 자동으로 심판 절차로 전환되어 법원이 분할 방법을 결정합니다</strong></p>\n<p>조정에서 합의가 안 되면 별도 신청 없이 <strong>상속재산분할심판</strong>으로 전환됩니다. 법원은 상속재산의 종류, 각 상속인의 기여도, 특별수익(생전 증여) 등을 종합적으로 고려해 분할 방법을 결정합니다.</p>\n<p>심판에서는 <strong>현물분할</strong>(각자 특정 재산을 가져가는 방식), <strong>대상분할</strong>(한 명이 재산을 갖고 다른 상속인에게 차액을 지급), <strong>경매분할</strong>(매각 후 대금을 나누는 방식) 중 하나를 선택합니다. 6개월~1년 이상 소요될 수 있습니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">조정과 소송 중 어떤 방법이 유리한지 궁금하다면 <a href="/diagnosis/inheritance" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">분할 방식: 현물분할 / 대상분할 / 경매분할 — 법원이 사정 고려해 결정</blockquote>',
      },
      {
        title: '유류분반환청구소송은 별도로 진행해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">유언이나 생전 증여로 법정 상속분을 침해당했다면 유류분반환청구가 필요합니다</strong></p>\n<p>피상속인이 유언으로 재산 전부를 특정인에게 주었거나, 생전에 과도한 증여를 했다면 다른 상속인은 <strong>유류분반환청구소송</strong>을 제기할 수 있습니다. 유류분은 직계비속의 경우 <strong>법정 상속분의 1/2</strong>입니다(민법 제1112조).</p>\n<p>유류분반환청구는 <strong>유류분 침해 사실을 안 날로부터 1년, 상속 개시일로부터 10년</strong> 이내에 해야 합니다. 기한을 놓치면 청구권이 소멸하므로 빠른 판단이 중요합니다. 이 소송은 조정 전치 대상이 아니므로 바로 소송을 제기할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 침해 안 날로부터 1년 / 상속 개시로부터 10년 | 유류분 = 법정 상속분의 1/2</blockquote>',
      },
      {
        title: '비용과 기간을 비교해서 내 상황에 맞는 방법을 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">분쟁 금액이 크고 합의 가능성이 낮으면 소송, 관계 유지가 중요하면 조정을 우선 검토하세요</strong></p>\n<p>조정은 인지대가 소송의 <strong>1/5</strong> 수준이고, 변호사 없이도 진행할 수 있어 비용 부담이 적습니다. 반면 소송은 인지대가 높고 변호사 선임이 사실상 필요하지만, 상대방이 비협조적일 때 <strong>강제적 해결</strong>이 가능합니다.</p>\n<p>형제 관계를 유지하고 싶다면 조정을 먼저 시도하고, 실패 시 심판으로 전환하는 것이 일반적입니다. 상대방이 재산을 빼돌리고 있거나 시간이 급한 경우에는 <strong>가압류 + 소송</strong>을 병행하는 것이 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 관계 유지 → 조정 우선 | 비협조·재산은닉 → 가압류 + 소송 병행</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2016다249190 — 상속재산분할과 특별수익 고려',
        summary:
          '법원은 상속재산분할 시 생전 증여(특별수익)를 고려해 구체적 상속분을 산정해야 한다고 판시하며, 한 상속인이 생전에 받은 부동산 증여를 특별수익으로 인정했습니다.',
        takeaway:
          '형제 중 한 명이 생전에 부동산을 받았다면 특별수익으로 공제됩니다. 생전 증여 내역을 꼼꼼히 확인하세요.',
      },
      {
        title: '대법원 2013다61381 — 유류분반환청구 기산점',
        summary:
          '유류분반환청구권의 소멸시효는 상속 개시와 반환해야 할 증여·유증이 있음을 안 때부터 기산한다고 판시했습니다.',
        takeaway:
          '유류분 침해 사실을 알게 된 시점이 중요합니다. 상속재산 조사를 통해 증여 사실을 파악하는 즉시 기한을 계산하세요.',
      },
    ],
    faq: [
      {
        question: '상속 분쟁에서 조정을 먼저 해야 하나요?',
        answer:
          '상속재산분할 사건은 가사소송법에 따라 조정 전치주의가 적용됩니다. 심판을 신청해도 법원이 먼저 조정에 회부하는 경우가 많으므로, 조정 준비를 함께 해두는 것이 좋습니다.',
      },
      {
        question: '조정이 실패하면 처음부터 다시 소송해야 하나요?',
        answer:
          '아닙니다. 조정이 불성립되면 자동으로 심판 절차로 전환됩니다. 별도로 소송을 제기할 필요가 없으므로, 조정에서 주장한 내용이 심판에서도 이어집니다.',
      },
      {
        question: '유류분반환청구는 조정 없이 바로 소송할 수 있나요?',
        answer:
          '네, 유류분반환청구소송은 조정 전치 대상이 아닙니다. 기한이 촉박한 경우 바로 소송을 제기할 수 있습니다. 다만 법원이 직권으로 조정에 회부할 수는 있습니다.',
      },
      {
        question: '상속 분쟁 조정 비용은 얼마나 드나요?',
        answer:
          '조정 신청 인지대는 소가의 약 0.2% 수준으로, 소송 인지대(소가의 약 0.5~1%)보다 낮습니다. 상속재산이 5억원인 경우 조정 인지대는 약 100만원, 소송 인지대는 약 250만원~500만원 수준입니다.',
      },
      {
        question: '형제가 부모님 생전에 아파트를 받았는데 상속분에서 빠지나요?',
        answer:
          '생전 증여는 특별수익으로 상속분 산정 시 고려됩니다. 아파트를 증여받은 형제는 그만큼 상속분이 줄어듭니다. 증여 시점의 시가를 기준으로 계산합니다.',
      },
      {
        question: '조정 성립 후 상대방이 합의 내용을 지키지 않으면 어떻게 하나요?',
        answer:
          '조정조서는 확정판결과 동일한 효력이 있으므로, 상대방이 이행하지 않으면 바로 강제집행을 신청할 수 있습니다. 별도의 소송이 필요 없습니다.',
      },
      {
        question: '상속재산에 부동산과 현금이 섞여 있으면 어떻게 나누나요?',
        answer:
          '법원은 각 상속인의 사정을 고려해 현물분할(각자 다른 재산 취득)이나 대상분할(한 명이 부동산을 갖고 차액 지급)을 결정합니다. 당사자 간 합의가 안 되면 경매로 매각 후 대금을 나눌 수도 있습니다.',
      },
      {
        question: '상속 분쟁 중 상대방이 재산을 처분하려 하면 어떻게 막나요?',
        answer:
          '법원에 처분금지가처분을 신청하세요. 부동산은 처분금지 등기가 가능하고, 예금은 채권가압류를 걸 수 있습니다. 재산 은닉이 의심되면 조기에 보전처분을 신청하는 것이 중요합니다.',
      },
    ],
    cta: {
      text: '1분 안에 상속 분쟁 해결 준비사항 확인하기',
      link: '/diagnosis/inheritance',
    },
    internalLinks: [
      { label: '상속 가이드', href: '/guide/inheritance' },
      { label: '상속 포기 기간과 절차', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '한정승인 절차 안내', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
      { label: '상속 숨은 빚 확인', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
      { label: '상속 진단', href: '/diagnosis/inheritance' },
    ],
  },
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-deadline',
    keyword: '상속 포기 신청 절차와 기한',
    questionKeyword: '상속 포기 기한은 언제까지이고 절차는 어떻게 되나요?',
    ctaKeyword: '상속 포기 기한 확인 무료 진단받기',
    type: '절차타임라인형',
    meta: {
      title: '상속 포기 신청 절차·기한 핵심 체크리스트 | 로앤가이드',
      description: '상속 포기 신청, 3개월 기한을 놓치면 빚을 떠안습니다. 민법 제1019조 기한, 가정법원 신고 절차, 기한 도과 시 특별한정승인 방법을 바로 정리해보세요.',
    },
    intro:
      '아버지가 갑자기 돌아가시고 한 달이 지났을 때 모르던 채무가 발견되었습니다. 은행 대출뿐 아니라 지인에게 빌린 사채까지 합하면 상속재산보다 빚이 훨씬 많습니다. 상속 포기를 해야 한다는 건 알겠는데, 언제까지 어디에 어떻게 신청해야 하는지 모르겠습니다. 기한을 넘기면 빚을 고스란히 떠안게 된다고 하니 불안합니다. 이 글에서는 상속 포기의 3개월 기한과 절차, 그리고 기한을 놓쳤을 때의 대응 방법을 정리합니다.',
    timelineSteps: ['기한 확인(3개월)', '서류 준비·작성', '가정법원 심판청구', '수리 결정·후속 조치'],
    sections: [
      {
        title: '상속 포기 3개월 기한: 기산점과 계산 방법',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1019조에 따라 상속 개시가 있음을 안 날로부터 3개월 이내에 상속 포기를 해야 합니다.</strong></p>\n<p>"상속 개시가 있음을 안 날"이란 통상 피상속인이 사망한 날입니다. 다만, 후순위 상속인은 선순위 상속인이 포기한 사실을 안 날이 기산점이 됩니다. 예를 들어 자녀 전원이 상속을 포기하면 손자녀나 부모가 상속인이 되는데, 이들은 선순위 포기 사실을 안 날부터 3개월을 계산합니다.</p>\n<p>3개월을 넘기면 민법 제1026조에 따라 단순승인한 것으로 간주되어, 피상속인의 채무를 포함한 모든 재산과 의무를 물려받게 됩니다. 기한 만료일이 공휴일이면 다음 영업일까지 연장되지만, 이에 의존하지 말고 여유 있게 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 상속 개시를 안 날로부터 3개월 / 도과 시 단순승인 간주 → 빚 포함 전부 상속</blockquote>',
      },
      {
        title: '필요 서류 준비와 심판청구서 작성',
        content:
          '<p><strong style="color:#1e3a5f">가정법원에 상속포기 심판청구서와 함께 가족관계 서류를 제출해야 합니다.</strong></p>\n<p>필요 서류는 다음과 같습니다. ①상속포기 심판청구서, ②피상속인의 기본증명서(사망 기재), ③피상속인의 가족관계증명서(상세), ④상속인 본인의 기본증명서, ⑤상속인 본인의 가족관계증명서, ⑥주민등록등본입니다. 미성년 상속인이 있으면 법정대리인(부 또는 모)이 대리하여 청구하며, 이해충돌이 있으면 특별대리인 선임이 필요합니다.</p>\n<p>심판청구서에는 피상속인과의 관계, 상속 개시일, 포기 사유를 기재합니다. 인지대 약 5,000원, 송달료 약 3~5만원 수준의 비용이 소요됩니다. 서류는 정부24 또는 주민센터에서 발급받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류: 심판청구서 + 기본증명서 + 가족관계증명서 + 주민등록등본 / 비용: 수만원 수준</blockquote>',
      },
      {
        title: '가정법원 심판청구와 수리 절차',
        content:
          '<p><strong style="color:#1e3a5f">피상속인의 마지막 주소지 관할 가정법원에 심판청구서를 접수하면, 법원이 심사 후 수리 결정을 내립니다.</strong></p>\n<p>관할법원은 피상속인의 최후 주소지를 관할하는 가정법원입니다. 접수 후 법원은 서류를 심사하고, 보정이 필요하면 보정명령을 내립니다. 심사에는 통상 1~2개월이 소요되며, 문제가 없으면 상속포기 수리 심판이 확정됩니다.</p>\n<p>수리 결정이 확정되면 상속인 지위가 소급하여 소멸하므로, 피상속인의 채무에 대한 변제 의무가 없어집니다. 수리 결정문은 추후 채권자의 변제 요구에 대응하기 위한 중요한 증거이므로 반드시 보관하세요. 상속 포기 후에는 후순위 상속인에게 상속권이 넘어가므로, 해당 친족에게 알려주어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">관할: 피상속인 최후 주소지 가정법원 / 심사 1~2개월 / 수리 후 후순위 상속인에게 통지 필요</blockquote>',
      },
      {
        title: '기한 도과 시 대응: 특별한정승인',
        content:
          '<p><strong style="color:#1e3a5f">3개월 기한을 넘겼더라도 상속채무의 존재를 몰랐다면 특별한정승인으로 구제받을 수 있습니다.</strong></p>\n<p>민법 제1019조 제3항에 따라, 상속인이 상속채무가 상속재산을 초과하는 사실을 <strong>중대한 과실 없이 기한 내에 알지 못한 경우</strong>, 그 사실을 안 날부터 3개월 이내에 특별한정승인을 할 수 있습니다. 이 경우 상속재산의 한도 내에서만 채무를 변제하면 됩니다.</p>\n<p>대법원 2019다232918 판결은 상속인이 피상속인의 채무 존재를 알 수 없었던 정당한 사유가 있는 경우 특별한정승인을 인정하고 있습니다. 다만 피상속인과 동거하면서 재산 상태를 알 수 있었던 경우에는 "중대한 과실 없이 몰랐다"는 주장이 받아들여지기 어렵습니다. 기한 도과의 사유를 소명할 자료(채무 통지서 수령일, 피상속인과의 관계 등)를 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한 도과 시: 특별한정승인(민법 제1019조 제3항) → 채무 초과 사실을 안 날부터 3개월 이내 신청</blockquote>',
      },
    ],
    cases: [
      {
        title: '사망 후 2개월 만에 발견된 사채로 상속 포기한 사례',
        summary:
          '관련 사례에서도 아버지 사망 후 2개월이 지나 사채업자가 찾아와 5,000만원의 차용증을 보여준 사례에서, 상속인이 즉시 가정법원에 상속포기 심판청구를 하여 3개월 기한 내에 수리 결정을 받고 채무 부담을 면한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 피상속인의 채무가 발견되는 즉시 상속 포기 절차를 시작하고, 3개월 기한을 절대 놓치지 마세요.',
      },
      {
        title: '기한 도과 후 특별한정승인으로 구제받은 사례',
        summary:
          '관련 사례에서도 오랫동안 연락이 끊겼던 부친이 사망한 지 1년 후에 채권추심 통지를 받은 상속인이, 채무 존재를 전혀 알지 못했음을 소명하여 특별한정승인이 인정되고 상속재산 범위 내에서만 변제 의무를 부담하게 된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 3개월 기한을 넘겼더라도 포기하지 말고, 채무의 존재를 몰랐다는 점을 입증할 자료를 모아 특별한정승인을 검토하세요.',
      },
    ],
    faq: [
      {
        question: '상속 포기와 한정승인의 차이는 무엇인가요?',
        answer:
          '<strong>상속 포기</strong>는 상속인 지위 자체를 포기하는 것이고, <strong>한정승인</strong>은 상속재산 범위 내에서만 채무를 갚겠다는 의사표시입니다. 빚이 재산보다 확실히 많으면 상속 포기, 재산과 빚의 규모가 불확실하면 한정승인이 유리합니다.',
      },
      {
        question: '상속 포기를 하면 다른 가족에게 빚이 넘어가나요?',
        answer:
          '네. 상속 포기 시 <strong>후순위 상속인</strong>에게 상속권이 이전됩니다. 자녀 전원이 포기하면 부모에게, 부모도 포기하면 형제자매에게 넘어가므로 관련 친족에게 반드시 알려야 합니다.',
      },
      {
        question: '상속 포기 전에 피상속인의 채무를 확인하는 방법이 있나요?',
        answer:
          '<strong>안심상속 원스톱 서비스</strong>(정부24)를 통해 피상속인의 금융채무, 부동산, 자동차, 세금 체납 등을 일괄 조회할 수 있습니다. 사망일로부터 6개월 이내에 신청 가능합니다.',
      },
      {
        question: '미성년 자녀도 상속 포기를 해야 하나요?',
        answer:
          '미성년 자녀도 상속인이므로 <strong>법정대리인(부 또는 모)이 대리</strong>하여 상속 포기를 해야 합니다. 부모와 자녀의 이해관계가 충돌하면 가정법원에 특별대리인 선임을 신청해야 합니다.',
      },
      {
        question: '상속 포기를 한 뒤 취소할 수 있나요?',
        answer:
          '원칙적으로 상속 포기는 <strong>취소가 불가능</strong>합니다. 다만 사기·강박에 의한 포기였음을 입증하면 민법 제1024조에 따라 취소가 가능하지만, 인정되기 매우 어렵습니다.',
      },
      {
        question: '상속 포기 후에도 피상속인의 보험금을 받을 수 있나요?',
        answer:
          '피상속인이 계약자이고 상속인이 <strong>수익자로 지정된 생명보험금</strong>은 상속재산이 아니라 수익자의 고유재산이므로, 상속 포기를 해도 받을 수 있습니다.',
      },
      {
        question: '상속 포기와 상속재산 분할협의는 다른 건가요?',
        answer:
          '완전히 다릅니다. <strong>상속재산 분할협의</strong>에서 "나는 안 받겠다"고 하는 것은 법적 상속 포기가 아닙니다. 법적 효력이 있는 상속 포기는 반드시 가정법원에 심판청구를 해야 합니다.',
      },
      {
        question: '3개월 기한 내에 서류를 다 준비하기 어려우면 어떻게 하나요?',
        answer:
          '기한 내에 <strong>심판청구서만이라도 먼저 접수</strong>하세요. 접수 후 보정명령으로 서류를 보완할 수 있습니다. 기한 내 접수가 핵심이며, 서류 보완은 접수 후에도 가능합니다.',
      },
    ],
    cta: { text: '상속 포기 기한과 절차, 지금 무료로 진단받아 보세요', link: '/diagnosis/inheritance' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상속 진단', href: '/diagnosis/inheritance' },
      { label: '상속 포기 기간과 절차', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '한정승인 절차 안내', href: '/guide/inheritance/limited-inheritance-acceptance-process' },
    ],
  },
];
