import { SpokePage } from '../spoke-pages';

export const divorcePages: SpokePage[] = [
  {
    domain: 'divorce',
    slug: 'consensual-vs-trial-divorce',
    keyword: '협의이혼 vs 재판이혼 차이 총정리',
    questionKeyword: '협의이혼과 재판이혼, 뭐가 다른가요?',
    ctaKeyword: '이혼 상담 준비사항',
    type: '비교형',
    meta: {
      title: '협의이혼 vs 재판이혼 차이 총정리 | 로앤가이드',
      description:
        '협의이혼과 재판이혼의 절차, 기간, 비용, 재산분할 차이를 비교합니다. 내 상황에 맞는 이혼 절차를 확인해보세요.',
    },
    intro:
      '남편과 대화가 끊긴 지 6개월이 넘었습니다. 협의이혼을 해야 하는지 재판이혼을 해야 하는지, 양육권과 재산분할까지 생각하면 막막합니다. 두 절차의 차이를 먼저 정리해보세요.',
    timelineSteps: ['합의 시도', '서류 준비', '협의이혼/재판이혼', '양육권/재산분할'],
    sections: [
      {
        title: '상대방이 이혼에 동의한다면 — 협의이혼으로 빠르게 정리할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 동의한다면 협의이혼으로 빠르게 정리할 수 있습니다</strong></p>\n<p>부부 둘 다 "이혼하자"는 데 동의하고 있다면 협의이혼을 선택할 수 있습니다. <strong>가정법원</strong>에 이혼의사 확인을 신청한 뒤 숙려기간을 거치고, 법원에서 최종 확인을 받으면 이혼신고로 마무리됩니다.</p>\n<p>양육할 자녀가 있으면 숙려기간이 <strong>3개월</strong>, 없으면 <strong>1개월</strong>입니다(민법 제836조의2). 이 기간 동안 재산분할이나 양육비에 대해 합의하는 경우가 많습니다.</p>\n<p>변호사 없이도 진행할 수 있어 비용 부담이 적고, 전체적으로 <strong>1~4개월</strong>이면 마무리되는 편입니다. 다만, 재산분할이나 양육권에 대한 합의가 안 되면 나머지는 별도 소송으로 가야 할 수 있으니 합의 내용을 꼼꼼히 정리해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 혼인관계증명서, 이혼의사확인 신청서, 양육사항 협의서(자녀 있는 경우)</blockquote>',
      },
      {
        title: '상대방이 거부하거나 잘못이 있다면 — 재판이혼을 검토해보세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 거부하거나 귀책사유가 있다면 재판이혼을 검토하세요</strong></p>\n<p>배우자가 이혼에 동의하지 않거나, 부정행위·폭력 등 <strong>민법 제840조</strong>에 해당하는 사유가 있다면 재판이혼을 검토하게 됩니다. 법원에 소송을 제기하면 먼저 조정을 거치고, 조정이 안 되면 변론을 통해 판결이 나옵니다. 빠르면 <strong>6개월</strong>, 복잡한 사건은 1~2년 이상 걸리기도 합니다. 소송인지대와 송달료가 발생하고, 변호사를 선임하면 별도 비용이 추가됩니다. 대신 법원이 재산분할 비율, 양육권, 위자료를 한꺼번에 결정해주므로, 상대방이 협조하지 않는 상황에서는 오히려 확실한 해결 방법이 될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 소장, 혼인관계증명서, 귀책사유 입증자료(문자, 사진, 진단서 등)</blockquote>',
      },
      {
        title: '재산분할은 어떻게 달라지나요 — 합의 vs 법원 결정',
        content:
          '<p><strong style="color:#1e3a5f">재산분할 방식은 합의냐 법원 결정이냐에 따라 크게 달라집니다</strong></p>\n<p>협의이혼에서는 부부가 직접 재산 목록을 정리하고 분할 비율을 합의합니다. "아파트는 내가 갖고 대출은 네가 갚는다" 같은 식이죠. 합의가 안 되면 이혼 후 <strong>2년 이내</strong>에 별도로 청구할 수 있습니다(민법 제839조의2). 재판이혼에서는 법원이 혼인 기간, 재산 형성 기여도, 부채 상황 등을 종합적으로 따져서 분할 비율을 정합니다. 전업주부의 <strong>가사노동</strong>도 기여도로 인정되는 경우가 많으므로, 소득이 없더라도 재산분할 청구를 포기하지 않는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 부부 명의 재산·부채 목록, 등기부등본, 예금잔액증명서</blockquote>',
      },
      {
        title: '아이가 있을 때 — 양육권과 양육비, 언제 정해야 하나요',
        content:
          '<p><strong style="color:#1e3a5f">미성년 자녀가 있다면 양육권자 지정은 필수입니다</strong></p>\n<p>협의이혼에서는 부부가 합의해서 정하고, 합의가 안 되면 법원이 결정합니다. 재판이혼에서는 법원이 자녀의 연령, 의사, 양육환경, 부모의 양육 능력을 종합적으로 고려해서 판단합니다(민법 제837조). 양육비는 <strong>서울가정법원 양육비 산정기준표</strong>를 참고하면 대략적인 금액을 확인해볼 수 있습니다. 면접교섭(비양육 부모의 만남 권리)도 함께 정해두는 것이 좋습니다. 나중에 다투지 않으려면 양육비 금액, 지급일, 면접교섭 빈도까지 구체적으로 합의서에 적어두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 양육사항 협의서, 양육비 산정기준표 확인, 면접교섭 일정 초안</blockquote>',
      },
      {
        title: '내 상황에서 어떤 절차가 맞을까 — 판단 기준 정리',
        content:
          '<p><strong style="color:#1e3a5f">비용, 기간, 정서적 부담을 모두 고려해서 절차를 선택하세요</strong></p>\n<p>이혼 자체에는 동의하지만 조건(재산, 양육권)에서 이견이 있다면, 일단 협의이혼을 진행하고 나머지는 별도 소송으로 해결하는 방법도 있습니다. 상대방이 이혼을 완전히 거부하거나, 폭력·외도 등으로 위자료를 청구하고 싶다면 재판이혼이 더 적합합니다. 급한 경우(폭력, 스토킹)에는 법원에 <strong>접근금지 가처분</strong>을 먼저 신청하는 것도 검토해보세요. 판단이 어렵다면 <strong>법률구조공단(전화 132)</strong> 무료 상담을 활용해보는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 혼인 파탄 경위 메모, 상대방 태도 정리, 우선순위 목록(재산/양육/위자료)</blockquote>',
      },
    ],
    comparison: {
      title: '협의이혼과 재판이혼 비교표',
      headers: ['구분', '협의이혼', '재판이혼'],
      rows: [
        {
          label: '요건',
          values: [
            '부부 쌍방의 이혼 합의',
            '민법 제840조의 이혼 사유(부정행위, 악의 유기, 폭력 등)',
          ],
        },
        {
          label: '절차',
          values: [
            '이혼의사 확인 신청 → 숙려기간 → 법원 확인 → 이혼신고',
            '소송 제기 → 조정 → 변론 → 판결',
          ],
        },
        {
          label: '소요기간',
          values: ['약 1~4개월', '약 6개월~2년 이상'],
        },
        {
          label: '비용',
          values: [
            '법원 수수료 소액, 변호사 선임 선택',
            '소송인지대·송달료 + 변호사 비용 추가 가능',
          ],
        },
        {
          label: '재산분할',
          values: [
            '당사자 합의, 불성립 시 별도 청구',
            '법원이 기여도·혼인기간 등 종합 고려하여 결정',
          ],
        },
        {
          label: '양육권',
          values: [
            '당사자 합의, 합의 불성립 시 법원 결정',
            '법원이 자녀 복리를 기준으로 직권 결정',
          ],
        },
      ],
    },
    cases: [
      {
        title: '혼인신고 없이 10년 넘게 살다가 헤어진 사례',
        summary:
          '실제로 혼인신고를 하지 않고 오랫동안 함께 살다가 상대방의 귀책사유로 관계가 파탄된 경우가 있었습니다. 이 사건에서는 "사실혼이라도 부당하게 관계가 깨어졌다면 위자료를 청구할 수 있는지"가 다퉈졌습니다(대법원 97므544,551).',
        takeaway:
          '비슷한 상황이라면 혼인 형태와 관계없이 관계 파탄의 경위와 상대방의 귀책사유를 보여줄 자료를 먼저 정리해두는 것이 좋습니다.',
      },
      {
        title: '이혼의사 확인 절차에 하자가 있었던 사례',
        summary:
          '실제로 협의이혼 절차에서 이혼의사 확인이 제대로 이루어지지 않아 이혼의 효력이 문제가 된 경우가 있었습니다. 이 사건에서는 "절차적 하자가 이혼의 효력에 어떤 영향을 미치는지"가 다퉈졌습니다(대법원 84므9).',
        takeaway:
          '비슷한 상황이라면 이혼 절차의 각 단계를 빠뜨리지 않고, 관련 서류를 꼼꼼히 정리해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '이혼하는 데 시간이 얼마나 걸리나요?',
        answer:
          '협의이혼은 <strong>숙려기간 포함 1~4개월</strong>, 재판이혼은 6개월~2년 이상 걸릴 수 있습니다. 자녀 유무, 재산 규모, 상대방의 태도에 따라 달라지므로 본인 상황을 기준으로 확인해보세요.',
      },
      {
        question: '배우자가 이혼을 거부하면 어떻게 하나요?',
        answer:
          '상대방이 동의하지 않으면 협의이혼은 불가능합니다. <strong>민법 제840조</strong>의 이혼 사유(부정행위, 유기, 폭력 등)에 해당하는지 확인하고, 해당된다면 재판이혼을 검토해보세요.',
      },
      {
        question: '이혼 비용이 얼마나 드나요?',
        answer:
          '협의이혼은 법원 수수료가 소액이고 변호사 없이도 가능합니다. 재판이혼은 소송인지대·송달료에 변호사 비용까지 합하면 <strong>수백만 원 이상</strong> 들 수 있습니다. 법률구조공단에서 소득 기준에 따라 무료 지원을 받을 수 있으니 확인해보세요.',
      },
      {
        question: '전업주부인데 재산분할을 받을 수 있나요?',
        answer:
          '<strong>가사노동과 양육</strong>으로 재산 형성에 기여한 부분이 인정되므로 소득이 없어도 재산분할 청구가 가능합니다. 혼인 기간 중 가사·양육에 참여한 내역을 구체적으로 정리해보세요.',
      },
      {
        question: '아이를 내가 키우고 싶은데 어떻게 해야 하나요?',
        answer:
          '법원은 <strong>자녀의 복리</strong>를 최우선으로 봅니다. 현재 누가 주로 양육하고 있는지, 양육환경이 안정적인지, 아이의 의사는 어떤지 등이 판단 기준입니다. 양육 참여 내역과 양육 계획을 구체적으로 정리해두세요.',
      },
      {
        question: '숙려기간을 줄일 수 있나요?',
        answer:
          '원칙적으로 자녀가 있으면 <strong>3개월</strong>, 없으면 1개월은 의무입니다. 다만 가정폭력 등 급박한 사정이 있으면 법원이 단축할 수 있으므로, 해당 사유가 있다면 법원에 문의해보세요.',
      },
      {
        question: '위자료는 얼마나 받을 수 있나요?',
        answer:
          '위자료는 혼인 기간, 귀책사유의 정도, 경제적 상황 등에 따라 달라집니다. 정해진 기준 금액은 없으며 법원이 사안별로 판단합니다. 상대방의 잘못을 입증할 자료(<strong>문자, 사진, 진단서</strong> 등)를 정리해두면 도움이 됩니다.',
      },
      {
        question: '이혼 후에도 재산분할을 청구할 수 있나요?',
        answer:
          '이혼 후 <strong>2년 이내</strong>에 청구할 수 있습니다(민법 제839조의2). 기한이 지나면 청구가 어려워지므로, 이혼 전에 재산 목록을 미리 정리해두는 것이 좋습니다.',
      },
    ],
    cta: {
      text: '내 이혼 상황에 맞는 준비사항과 다음 단계를 정리해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      {
        label: '양육권 합의 전에 무엇을 정리해야 하나요?',
        href: '/guide/divorce/custody-agreement-prep',
      },
    ],
  },
  {
    domain: 'divorce',
    slug: 'divorce-consultation-prep',
    keyword: '이혼 상담 전 준비할 서류 체크리스트',
    questionKeyword: '이혼 상담 전에 어떤 서류를 준비해야 하나요?',
    ctaKeyword: '이혼 상담 준비사항',
    type: '준비서류형',
    meta: {
      title: '이혼 상담 전 준비할 서류 체크리스트 | 로앤가이드',
      description:
        '이혼 상담 전 준비해야 할 서류를 항목별로 정리했습니다. 재산, 소득, 양육 관련 서류를 미리 확인해보세요.',
    },
    intro:
      '변호사 상담 예약을 잡았는데 뭘 들고 가야 할지 모르겠습니다. 상담 시간은 30분인데 준비 없이 가면 핵심을 놓칩니다. 아래 체크리스트를 기준으로 하나씩 확인해보세요.',
    sections: [
      {
        title: '가장 먼저 챙길 것 — 혼인관계증명서와 가족관계증명서',
        content:
          '<p><strong style="color:#1e3a5f">혼인관계증명서와 가족관계증명서를 가장 먼저 준비하세요</strong></p>\n<p>이혼 상담의 출발점은 "지금 법적으로 혼인 상태인지"를 확인하는 것입니다. <strong>혼인관계증명서</strong>는 현재 혼인 상태를, <strong>가족관계증명서</strong>는 자녀 유무와 가족 구성을 보여줍니다.</p>\n<p>주민등록등본도 현재 거주지와 세대 구성을 확인하는 데 필요합니다. 정부24나 주민센터에서 발급받을 수 있으며, "상세" 증명서로 떼면 과거 이력까지 나옵니다.</p>\n<p>이 세 장만 있어도 상담사가 기본 상황을 빠르게 파악할 수 있으니 반드시 준비해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 혼인관계증명서(상세), 가족관계증명서(상세), 주민등록등본</blockquote>',
      },
      {
        title: '재산 정리가 핵심 — 부동산, 예금, 보험, 대출 서류',
        content:
          '<p><strong style="color:#1e3a5f">재산분할 상담을 위해 부부 명의 재산과 부채를 정리하세요</strong></p>\n<p>부동산은 <strong>등기부등본</strong>과 공시지가 확인서를 준비하고, 금융재산은 예금잔액증명서, 보험증권 사본, 주식·펀드 거래내역서를 챙기세요. 주택담보대출이나 신용대출이 있다면 <strong>대출잔액증명서</strong>도 필요합니다. "결혼 전부터 있던 재산"과 "결혼 후 함께 모은 재산"을 구분해서 정리해두면 재산분할 기여도를 판단하는 데 도움이 됩니다. 상대방 명의 재산은 소송 중 법원을 통해 조회할 수 있으니, 지금은 알고 있는 범위에서 메모해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 등기부등본, 예금잔액증명서, 보험증권 사본, 대출잔액증명서</blockquote>',
      },
      {
        title: '소득과 생활비 증빙 — 양육비 산정의 기초가 됩니다',
        content:
          '<p><strong style="color:#1e3a5f">양육비 산정을 위해 소득과 생활비 증빙을 준비하세요</strong></p>\n<p>양육비와 부양료는 부부 각자의 소득 수준을 기초로 정해집니다. <strong>근로소득원천징수영수증</strong>이나 소득금액증명원을 준비하세요. 자영업자는 종합소득세 신고서가 필요합니다. 카드 사용내역이나 통장 거래내역으로 월별 생활비 규모도 확인해두면 좋습니다. 특히 자녀의 학원비, 병원비, 보험료 같은 양육 관련 지출을 따로 정리해두면 양육비 산정 시 중요한 참고자료가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 근로소득원천징수영수증, 소득금액증명원, 카드·통장 거래내역</blockquote>',
      },
      {
        title: '아이가 있다면 — 양육 관련 서류도 미리 챙겨보세요',
        content:
          '<p><strong style="color:#1e3a5f">미성년 자녀가 있다면 양육환경을 보여주는 자료를 준비하세요</strong></p>\n<p>양육권과 면접교섭에 대해서도 상담받게 됩니다. 자녀의 <strong>재학증명서</strong>, 건강검진 기록, 병원 진료 기록 등 현재 양육 환경을 보여주는 자료를 준비하세요. 학교 행사 참석 기록, 등하교 담당 내역 같은 것도 양육 참여도를 보여주는 자료가 됩니다. 법원은 양육권 판단 시 자녀의 복리를 최우선으로 봅니다(민법 제837조). "누가 실질적으로 아이를 돌봐왔는지"를 보여줄 수 있는 자료가 있으면 함께 가져가보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 재학증명서, 건강검진 기록, 양육 참여 내역 메모</blockquote>',
      },
      {
        title: '상담 효율을 높이는 마지막 준비 — 질문 목록과 경위 정리',
        content:
          '<p><strong style="color:#1e3a5f">질문 목록과 혼인 파탄 경위를 메모로 정리해 가세요</strong></p>\n<p>위 서류 외에도 혼인 파탄의 경위를 보여주는 자료가 있으면 도움이 됩니다. 문자메시지, 녹음, <strong>진단서</strong> 등은 재판이혼 시 이혼 사유 입증에 참고될 수 있습니다. 다만 녹음이나 촬영 자료는 수집 방법에 따라 증거능력이 제한될 수 있으니 상담에서 확인해보세요. 그리고 반드시 "내가 궁금한 것"을 메모로 정리해 가세요. <strong>30분 상담</strong>에서 핵심을 놓치지 않으려면 질문 목록이 가장 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 혼인 파탄 경위 메모, 질문 목록, 증거자료(문자·녹음·진단서)</blockquote>',
      },
    ],
    cases: [
      {
        title: '결혼 후 함께 모은 재산을 나누게 된 사례',
        summary:
          '실제로 사실혼 관계가 깨지면서 함께 모은 재산을 어떻게 나눌지 다툰 경우가 있었습니다. 이 사건에서는 "재산의 취득 시기, 출처, 각자의 기여도를 종합적으로 고려해야 한다"는 점이 다퉈졌습니다(대법원 94므1379,1386).',
        takeaway:
          '비슷한 상황이라면 혼인 기간 중 재산 형성에 대한 본인의 기여(소득 증빙, 가사노동 내역, 공동 투자 기록)를 먼저 정리해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '서류 없이 상담 가도 되나요?',
        answer:
          '가능은 하지만, 핵심 서류가 없으면 상담사가 구체적인 방향을 제시하기 어렵습니다. 최소한 <strong>혼인관계증명서와 가족관계증명서</strong>는 준비해보세요.',
      },
      {
        question: '상대방 이름으로 된 재산도 조회할 수 있나요?',
        answer:
          '직접 조회는 어렵지만, 소송 중에는 <strong>법원을 통해 재산조회</strong>가 가능합니다. 지금은 알고 있는 범위에서 메모해두면 됩니다.',
      },
      {
        question: '혼인관계증명서는 어디서 떼나요?',
        answer:
          '<strong>정부24</strong> 온라인 또는 가까운 주민센터에서 발급받을 수 있습니다. "상세" 증명서로 신청하면 과거 이력까지 확인 가능합니다.',
      },
      {
        question: '무료 이혼 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(전화 132)</strong>에서 소득 기준에 따라 무료 상담을 받을 수 있습니다. 각 지방변호사회 무료 법률상담도 활용해보세요.',
      },
      {
        question: '문자메시지나 카톡 대화도 증거가 되나요?',
        answer:
          '혼인 파탄 경위를 소명하는 참고자료로 활용될 수 있습니다. 상대방 프로필과 <strong>대화 일시가 보이도록</strong> 전체 화면을 캡처해두세요.',
      },
      {
        question: '소득이 없는데 양육비를 받을 수 있나요?',
        answer:
          '양육비는 <strong>비양육 부모가 부담</strong>하는 것이므로, 본인 소득이 없어도 상대방의 소득 기준으로 양육비를 청구할 수 있습니다. 상대방의 소득 자료를 파악해두세요.',
      },
      {
        question: '부동산 감정평가를 꼭 받아야 하나요?',
        answer:
          '필수는 아니지만, <strong>시가와 공시지가 차이</strong>가 크다면 받아두는 것이 좋습니다. 소송 중에는 법원이 감정을 명할 수도 있습니다.',
      },
      {
        question: '상담 전에 이혼 사유를 꼭 정해야 하나요?',
        answer:
          '정하지 않아도 괜찮습니다. 혼인생활의 주요 문제점을 <strong>시간 순서대로 메모</strong>해가면 상담사가 적합한 절차를 판단하는 데 도움이 됩니다.',
      },
    ],
    cta: {
      text: '내 이혼 상황에 맞는 준비사항과 다음 단계를 정리해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      {
        label: '협의이혼과 재판이혼, 뭐가 다른가요?',
        href: '/guide/divorce/consensual-vs-trial-divorce',
      },
    ],
  },
  {
    domain: 'divorce',
    slug: 'custody-agreement-prep',
    keyword: '양육권 합의 전 정리할 것',
    questionKeyword: '양육권 합의 전에 무엇을 정리해야 하나요?',
    ctaKeyword: '양육권 합의 준비사항',
    type: '상황형',
    meta: {
      title: '양육권 합의 전 정리할 것 | 로앤가이드',
      description:
        '양육권 합의 전 확인해야 할 사항을 정리합니다. 양육환경, 양육비, 면접교섭 등 핵심 준비항목을 확인해보세요.',
    },
    intro:
      '이혼 합의는 어느 정도 되었는데 아이 문제에서 멈췄습니다. 누가 키울지, 양육비는 얼마인지, 면접교섭은 어떻게 할지 — 정해야 할 게 많습니다. 감정보다 준비가 먼저입니다. 합의 전에 아래 사항들을 정리해보세요.',
    sections: [
      {
        title: '아이를 누가 키울지 — 합의 전에 먼저 정리할 것',
        content:
          '<p><strong style="color:#1e3a5f">양육권 합의 전에 내가 아이를 키울 수 있는 여건을 먼저 점검하세요</strong></p>\n<p>양육권이란 아이를 직접 보호하고, 교육하고, 일상적인 생활을 관리하는 권리와 의무입니다. <strong>민법 제837조</strong>는 이혼 시 양육할 사람을 부부가 합의해서 정하도록 하고 있습니다.</p>\n<p>합의가 안 되면 법원이 결정하게 됩니다. 양육권은 친권과 다른 개념이라는 점도 알아두세요 — 친권자와 양육권자를 다르게 지정할 수도 있습니다.</p>\n<p>합의에 앞서 주거 안정성, 근무시간, 돌봄 지원 여부 등을 구체적으로 정리해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 주거 환경 정리, 근무시간표, 돌봄 지원(조부모·어린이집 등) 확인</blockquote>',
      },
      {
        title: '법원은 무엇을 보나요 — 양육권 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">법원은 아이의 복리를 최우선으로 보고 양육권을 결정합니다</strong></p>\n<p>구체적으로는 아이의 나이, 아이 본인의 의사(의사를 표현할 수 있는 나이인 경우), 지금까지 누가 주로 돌봐왔는지, 부모 각자의 경제적 능력과 시간적 여건, <strong>주거 환경의 안정성</strong> 등이 판단 기준입니다. "엄마니까 당연히 양육권을 받는다"는 법에 없습니다. 아이에게 더 안정적인 환경을 제공할 수 있는 쪽이 유리합니다. 현재 양육에 어떻게 참여하고 있는지, 앞으로 어떤 <strong>양육 계획</strong>이 있는지를 구체적으로 정리해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 양육 참여 내역(등하교, 식사, 병원 등), 양육 계획서 초안</blockquote>',
      },
      {
        title: '양육비는 얼마가 적당한지 — 산정 기준 살펴보기',
        content:
          '<p><strong style="color:#1e3a5f">양육비는 부모 소득과 아이의 필요에 따라 산정됩니다</strong></p>\n<p>양육비는 아이를 키우지 않는 부모도 반드시 부담해야 합니다. 부모 각자의 소득, 아이의 나이와 교육 단계, 생활 수준이 산정 기준입니다. <strong>서울가정법원 양육비 산정기준표</strong>를 참고하면 대략적인 금액 범위를 확인해볼 수 있습니다. 합의할 때는 금액뿐 아니라 지급일, 지급 방법도 구체적으로 정해두세요. 대학 등록금, 큰 병원비 같은 <strong>특별비용</strong>은 어떻게 나눌 것인지도 미리 논의해두면 나중에 다툼을 줄일 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 양육비 산정기준표 확인, 월별 양육비 지출 내역 정리</blockquote>',
      },
      {
        title: '아이를 안 키우는 부모의 만남 — 면접교섭 정하기',
        content:
          '<p><strong style="color:#1e3a5f">면접교섭은 구체적인 일정과 방법까지 정해두세요</strong></p>\n<p>면접교섭권은 양육권이 없는 부모가 아이와 정기적으로 만나고 교류할 수 있는 권리입니다(<strong>민법 제837조의2</strong>). 합의할 때 "매주 토요일 오후 2시~일요일 오후 6시" 같이 구체적으로 정해두는 것이 좋습니다. 방학 때는 어떻게 할 것인지, 명절이나 생일은 어떻게 나눌 것인지도 정해두세요. 내용이 구체적일수록 이후 분쟁이 줄어듭니다. 아이가 의사를 표현할 수 있는 나이(보통 <strong>만 13세 이상</strong>)라면 아이의 의견도 꼭 들어보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 면접교섭 일정 초안(주말, 방학, 명절 포함), 아이 의견 확인</blockquote>',
      },
      {
        title: '합의서를 쓸 때 놓치지 말아야 할 것 — 실효성 확보',
        content:
          '<p><strong style="color:#1e3a5f">합의서는 반드시 서면으로 남기고 공증까지 받아두세요</strong></p>\n<p>협의이혼의 경우 <strong>양육사항 협의서</strong>를 법원에 제출해야 합니다. 합의서에는 양육권자, 양육비 금액과 지급 방법, 면접교섭 방법, 특별비용 분담 등을 빠짐없이 적어야 합니다. 가장 중요한 것은 "상대방이 안 지켰을 때 강제할 수 있는지"입니다. <strong>공증</strong>을 받아두거나, 법원 조정조서로 만들면 불이행 시 별도 소송 없이 바로 강제집행이 가능합니다. 합의서 최종 확인 전에 빠뜨린 항목이 없는지 꼭 체크해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 양육사항 협의서 양식, 공증사무소 확인, 체크리스트 최종 점검</blockquote>',
      },
    ],
    cases: [
      {
        title: '양육환경의 안정성이 결정적이었던 사례',
        summary:
          '실제로 이혼 과정에서 부모 양쪽이 모두 양육권을 주장한 경우가 있었습니다. 이 사건에서는 "자녀의 양육환경 계속성과 안정성이 가장 중요한 판단 요소"라는 점이 다퉈졌습니다(대법원 97므544,551).',
        takeaway:
          '비슷한 상황이라면 현재 아이의 양육 참여 내역, 생활 패턴, 학교생활 등을 구체적으로 정리해두는 것이 좋습니다.',
      },
      {
        title: '부모의 잘못보다 아이의 안정이 우선된 사례',
        summary:
          '실제로 한쪽 부모에게 귀책사유가 있었지만, 양육권은 아이의 안정적인 성장 환경을 기준으로 판단된 경우가 있었습니다. 이 사건에서는 "부모의 유책 여부보다 자녀의 복리가 우선"이라는 점이 확인되었습니다(대법원 84므9).',
        takeaway:
          '비슷한 상황이라면 아이의 현재 생활 패턴, 정서적 안정 상태, 앞으로의 양육 계획을 객관적으로 정리해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '아이를 내가 키우려면 양육권만 받으면 되나요?',
        answer:
          '<strong>양육권과 친권</strong>은 다른 개념입니다. 양육권은 직접 돌보는 권리, 친권은 재산 관리 등 포괄적 권리입니다. 둘 다 받는 것이 일반적이지만 나눠서 지정할 수도 있으니 확인해보세요.',
      },
      {
        question: '아이가 어리면 엄마가 양육권을 받나요?',
        answer:
          '법에 그런 규정은 없습니다. 다만 영유아의 경우 <strong>주양육자와의 유대관계</strong>가 고려 요소가 될 수 있습니다. 중요한 건 누가 더 안정적인 양육환경을 제공할 수 있는지입니다.',
      },
      {
        question: '양육권 합의 후에 바꿀 수 있나요?',
        answer:
          '사정이 변하면 법원에 <strong>양육자 변경 심판</strong>을 청구할 수 있습니다. 양육환경 변화, 양육권자의 부적격 사유, 아이의 의사 변화 등이 변경 사유가 됩니다.',
      },
      {
        question: '상대방이 아이를 안 만나게 하면 어떻게 하나요?',
        answer:
          '면접교섭이 합의서나 판결로 정해져 있다면 법원에 <strong>이행명령</strong>을 신청할 수 있습니다. 그래도 안 지키면 과태료가 부과됩니다. 거부 사실을 날짜별로 기록해두세요.',
      },
      {
        question: '양육비를 안 주면 어떻게 하나요?',
        answer:
          '공증받은 합의서나 법원 조정조서가 있으면 바로 <strong>강제집행(급여 압류 등)</strong>이 가능합니다. 양육비이행관리원에 이행확보 지원도 신청할 수 있으니 활용해보세요.',
      },
      {
        question: '아이 의견은 얼마나 반영되나요?',
        answer:
          '보통 <strong>만 13세 이상</strong>이면 법원이 아이의 의견을 직접 듣습니다. 다만 아이의 의사만으로 결정되지는 않고, 전체적인 복리를 종합적으로 봅니다.',
      },
      {
        question: '공동양육도 가능한가요?',
        answer:
          '합의하면 가능하지만, 법적으로 <strong>양육권자는 한쪽으로 지정</strong>해야 합니다. 실질적 양육 분담 방식을 합의서에 구체적으로 적어두는 것이 중요합니다.',
      },
      {
        question: '양육권 합의서에 공증을 꼭 받아야 하나요?',
        answer:
          '필수는 아니지만 강력히 권합니다. <strong>공증</strong>이 있으면 상대방이 안 지킬 때 별도 소송 없이 바로 강제집행이 가능합니다.',
      },
    ],
    cta: {
      text: '내 이혼 상황에 맞는 준비사항과 다음 단계를 정리해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
      { label: '개인회생 가이드', href: '/guide/rehabilitation' },
      {
        label: '이혼 상담 전에 어떤 서류를 준비해야 하나요?',
        href: '/guide/divorce/divorce-consultation-prep',
      },
    ],
  },
  {
    domain: 'divorce',
    slug: 'property-division-ratio',
    keyword: '재산분할 비율은 어떻게 정해지나요',
    questionKeyword: '이혼 시 재산분할 비율은 어떻게 정해지나요?',
    ctaKeyword: '재산분할 준비사항',
    type: 'Q&A형',
    meta: {
      title: '재산분할 비율은 어떻게 정해지나요 | 로앤가이드',
      description:
        '이혼 시 재산분할 비율의 결정 기준, 기여도 인정 범위, 특유재산과 공동재산의 구분을 정리했습니다.',
    },
    intro:
      '이혼을 결심했는데 재산분할이 가장 걱정됩니다. "반반이 원칙"이라는 말도 있고 "기여도에 따라 다르다"는 말도 있습니다. 내 상황에서 얼마나 받을 수 있는지 기준을 먼저 확인해보세요.',
    sections: [
      {
        title: '재산분할의 기본 원칙을 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">재산분할은 혼인 중 함께 형성한 재산을 기여도에 따라 나누는 것입니다</strong></p>\n<p><strong>민법 제839조의2</strong>에 따라 혼인 중 부부가 함께 형성한 재산을 나누게 됩니다. 기여도란 재산 형성에 대한 각자의 기여를 말합니다.</p>\n<p>법원은 혼인 기간, 재산 형성 경위, 부양, <strong>가사노동</strong>, 양육을 종합적으로 고려합니다. "반반"이 원칙은 아니지만, 실무적으로 <strong>40~60%</strong> 범위에서 결정되는 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 기여도 = 소득 + 가사노동 + 양육 + 재산 형성 기여를 종합 판단</blockquote>',
      },
      {
        title: '특유재산과 공동재산을 구분하세요',
        content:
          '<p><strong style="color:#1e3a5f">혼인 전 재산과 혼인 중 재산은 분할 대상이 다릅니다</strong></p>\n<p><strong>특유재산</strong>은 혼인 전 개인 재산이나 상속·증여받은 재산으로, 원칙적으로 분할 대상이 아닙니다. <strong>공동재산</strong>은 혼인 중 함께 형성한 재산으로 분할 대상이 됩니다.</p>\n<p>다만 특유재산도 유지·증식에 상대방의 기여가 있으면 <strong>일부 분할 대상</strong>이 될 수 있습니다. 부채도 공동생활을 위한 부채이면 분할 시 고려됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 혼인 전 재산과 혼인 후 재산을 구분하여 목록 작성</blockquote>',
      },
      {
        title: '전업주부도 기여도를 인정받을 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">가사노동과 양육도 재산 형성에 대한 기여로 인정됩니다</strong></p>\n<p>대법원 판례에서 전업주부의 기여도를 <strong>30~50%</strong> 인정한 사례가 다수 있습니다. 혼인 기간이 길수록 기여도가 높게 인정되는 경향이 있습니다.</p>\n<p><strong>소득 증빙이 없어도</strong> 재산분할 청구가 가능합니다. 가사와 양육에 전념한 기간, 구체적인 양육 내역을 정리해두면 기여도 입증에 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 가사·양육 참여 내역, 혼인 기간 정리</blockquote>',
      },
      {
        title: '재산분할 청구를 위해 준비할 것',
        content:
          '<p><strong style="color:#1e3a5f">재산·부채 목록과 증빙서류를 미리 준비하세요</strong></p>\n<p>부부 명의 <strong>재산·부채 목록</strong>을 작성하고, 등기부등본, 예금잔액증명, 보험증권, 대출잔액증명을 준비하세요.</p>\n<p>혼인 전 재산을 입증할 자료(혼인 전 통장 내역, 상속 서류)도 중요합니다. 이혼 후 <strong>2년 이내</strong>에 청구해야 합니다(민법 제839조의2). 기한을 놓치면 청구가 어려워지니 주의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 등기부등본, 예금잔액증명, 보험증권, 대출잔액증명, 혼인 전 재산 자료</blockquote>',
      },
    ],
    cases: [
      {
        title: '전업주부의 기여도가 50%로 인정된 사례',
        summary:
          '관련 사례에서도 20년 이상 혼인 생활을 유지하면서 가사와 양육을 전담한 전업주부의 기여도가 50%로 인정된 경우가 있습니다(민법 제839조의2 참조).',
        takeaway:
          '비슷한 상황이라면 혼인 기간 중 가사·양육에 참여한 내역을 구체적으로 정리해두세요.',
      },
      {
        title: '혼인 전 재산이 분할 대상에서 제외된 사례',
        summary:
          '관련 사례에서도 혼인 전에 부모로부터 상속받은 부동산이 분할 대상에서 제외된 경우가 있습니다. 다만 상대방이 해당 재산의 유지·관리에 기여한 부분은 별도로 인정될 수 있습니다.',
        takeaway:
          '비슷한 상황이라면 혼인 전 재산의 취득 시기와 출처를 증명할 서류를 준비해두세요.',
      },
    ],
    faq: [
      {
        question: '재산분할은 꼭 반반인가요?',
        answer:
          '<strong>법정 비율은 없습니다.</strong> 기여도에 따라 결정되며, 실무적으로 40~60% 범위에서 정해지는 경우가 많습니다.',
      },
      {
        question: '배우자 이름으로 된 재산도 분할 대상인가요?',
        answer:
          '혼인 중 취득한 재산은 <strong>명의와 관계없이</strong> 분할 대상이 될 수 있습니다. 재산의 형성 시기와 경위가 중요합니다.',
      },
      {
        question: '빚도 나눠야 하나요?',
        answer:
          '혼인 중 <strong>공동생활을 위한 부채</strong>는 분할 시 고려됩니다. 개인 도박 빚 등 개인적 부채는 제외될 수 있습니다.',
      },
      {
        question: '이혼 후에도 재산분할 청구할 수 있나요?',
        answer:
          '이혼 후 <strong>2년 이내</strong>에 청구할 수 있습니다(민법 제839조의2). 기한을 넘기지 않도록 주의하세요.',
      },
      {
        question: '재산을 숨기면 어떻게 되나요?',
        answer:
          '소송 중 법원을 통해 <strong>재산조회</strong>가 가능합니다. 금융, 부동산, 국세청 자료를 통해 확인할 수 있습니다.',
      },
      {
        question: '퇴직금도 분할 대상인가요?',
        answer:
          '<strong>혼인 기간에 해당하는 퇴직금</strong>은 분할 대상입니다. 퇴직 전이라도 장래 퇴직금 청구가 가능합니다.',
      },
      {
        question: '재산분할과 위자료는 다른 건가요?',
        answer:
          '<strong>별개의 청구</strong>입니다. 위자료는 정신적 손해배상이고, 재산분할은 공동재산의 분배입니다. 각각 따로 청구할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(전화 132)</strong>에서 소득 기준에 따라 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 이혼 상황에 맞는 재산분할 준비사항을 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      {
        label: '협의이혼과 재판이혼, 뭐가 다른가요?',
        href: '/guide/divorce/consensual-vs-trial-divorce',
      },
      {
        label: '이혼 후 양육비 안 줄 때 대처법',
        href: '/guide/divorce/child-support-non-payment',
      },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
    ],
  },
  {
    domain: 'divorce',
    slug: 'child-support-non-payment',
    keyword: '이혼 후 양육비 안 줄 때 대처법',
    questionKeyword: '이혼 후 양육비를 안 주는데 어떻게 해야 하나요?',
    ctaKeyword: '양육비 이행확보',
    type: '상황형',
    meta: {
      title: '이혼 후 양육비 안 줄 때 대처법 | 로앤가이드',
      description:
        '이혼 후 양육비를 지급하지 않을 때 이행명령, 강제집행, 양육비이행관리원 활용 방법을 정리했습니다.',
    },
    intro:
      '이혼할 때 양육비 월 100만원으로 합의했는데, 석 달째 한 푼도 안 들어옵니다. 연락하면 "형편이 안 된다"는 말만 반복합니다. 아이 학원비는 밀리고 있는데 어떻게 해야 하는지 막막합니다. 양육비를 받기 위한 절차를 정리했습니다.',
    timelineSteps: ['합의서/판결 확인', '이행명령 신청', '강제집행', '양육비이행관리원'],
    sections: [
      {
        title: '양육비 합의서나 판결이 있는지 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">공증받은 합의서나 판결문이 있으면 바로 강제집행이 가능합니다</strong></p>\n<p><strong>공증받은 합의서</strong>, 법원 조정조서, 판결문이 있으면 별도 소송 없이 바로 강제집행을 신청할 수 있습니다.</p>\n<p>구두 합의만 있는 경우에는 먼저 <strong>양육비 청구 소송</strong> 또는 조정 신청을 진행해야 합니다. 협의이혼 시 양육비 부담 조서가 법원에 제출되었는지도 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 공증 합의서, 법원 조정조서, 판결문 중 하나가 있는지 점검</blockquote>',
      },
      {
        title: '법원에 이행명령을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">이행명령은 비교적 빠르게 처리되는 강력한 수단입니다</strong></p>\n<p>가정법원에 양육비 <strong>이행명령</strong>을 신청할 수 있습니다(가사소송법 제64조). 이행명령을 위반하면 <strong>과태료(1,000만원 이하)</strong> 또는 30일 이내 감치가 가능합니다.</p>\n<p>이행명령은 비교적 빠르게 처리되므로, 양육비 미지급이 시작되면 빨리 신청하는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 양육비 부담 조서 또는 판결문 사본, 미지급 내역 정리</blockquote>',
      },
      {
        title: '강제집행으로 급여와 재산을 압류하세요',
        content:
          '<p><strong style="color:#1e3a5f">급여 압류가 가장 실효성 있는 방법입니다</strong></p>\n<p><strong>급여 압류</strong>는 월급의 1/2까지 압류할 수 있어 가장 효과적입니다. 예금 압류, 부동산 경매도 가능합니다.</p>\n<p>집행문 부여를 받은 후 진행하게 됩니다. 상대방의 <strong>직장 정보</strong>가 있으면 급여 압류가 가장 빠르고 확실한 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 집행문 부여 신청, 상대방 직장 정보 또는 재산 정보 파악</blockquote>',
      },
      {
        title: '양육비이행관리원을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원에서 무료로 이행 지원을 받을 수 있습니다</strong></p>\n<p><strong>양육비이행관리원(1644-6621)</strong>에서 양육비 이행 독촉, 재산 조회, 법률 지원을 무료로 받을 수 있습니다.</p>\n<p><strong>출국금지</strong>, 면허정지 등 간접강제 신청도 가능합니다. 한시적 양육비 긴급지원(월 최대 20만원)도 운영하고 있으니, 당장 생활이 어려운 경우 활용해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">연락처: 양육비이행관리원 1644-6621 (무료 상담)</blockquote>',
      },
    ],
    cases: [
      {
        title: '급여 압류로 양육비를 받아낸 사례',
        summary:
          '관련 사례에서도 양육비를 장기간 미지급한 상대방의 급여를 압류하여 매월 양육비를 확보한 경우가 자주 있습니다. 급여 압류는 직장 정보가 있으면 가장 효과적인 방법입니다.',
        takeaway:
          '비슷한 상황이라면 상대방의 직장 정보를 파악하고, 공증받은 합의서나 판결문을 준비해두세요.',
      },
      {
        title: '양육비이행관리원을 통해 출국금지가 적용된 사례',
        summary:
          '관련 사례에서도 양육비를 장기간 미지급하고 재산을 은닉한 상대방에 대해 양육비이행관리원을 통해 출국금지가 적용된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 양육비이행관리원에 상담을 신청해보세요.',
      },
    ],
    faq: [
      {
        question: '양육비를 안 주면 형사처벌이 되나요?',
        answer:
          '직접 형사처벌은 아니지만, <strong>이행명령 위반 시 감치(30일 이내)</strong>가 가능합니다. 과태료도 1,000만원 이하로 부과될 수 있습니다.',
      },
      {
        question: '양육비 합의서에 공증이 없으면 어떻게 하나요?',
        answer:
          '<strong>양육비 청구 조정 또는 소송</strong>을 먼저 진행해야 합니다. 판결 확정 후 강제집행이 가능합니다.',
      },
      {
        question: '상대방이 무직이면 어떻게 하나요?',
        answer:
          '<strong>재산 압류</strong>가 가능합니다. 양육비이행관리원에서 재산조회를 지원받을 수 있습니다.',
      },
      {
        question: '양육비 금액을 변경할 수 있나요?',
        answer:
          '사정 변경 시 <strong>양육비 증감 청구</strong>가 가능합니다(가사소송법). 소득 변화, 자녀 성장 등이 사유가 됩니다.',
      },
      {
        question: '과거 미지급분도 청구할 수 있나요?',
        answer:
          '합의서나 판결이 있으면 <strong>밀린 양육비 전액</strong>을 청구할 수 있습니다. 지연이자도 청구 가능합니다.',
      },
      {
        question: '양육비이행관리원은 무료인가요?',
        answer:
          '<strong>상담과 이행 지원은 무료</strong>입니다. 긴급 양육비 지원(월 최대 20만원)도 운영하고 있습니다.',
      },
      {
        question: '면접교섭을 거부하면서 양육비만 청구할 수 있나요?',
        answer:
          '<strong>양육비와 면접교섭은 별개</strong>입니다. 면접교섭 거부는 별도 이행명령 대상이며, 양육비 청구와는 관계없이 진행됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>양육비이행관리원(1644-6621)</strong>과 대한법률구조공단(전화 132)에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 이혼 상황에 맞는 양육비 대응 방법을 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      {
        label: '양육권 합의 전에 무엇을 정리해야 하나요?',
        href: '/guide/divorce/custody-agreement-prep',
      },
      {
        label: '재산분할 비율은 어떻게 정해지나요',
        href: '/guide/divorce/property-division-ratio',
      },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
    ],
  },
  {
    domain: 'divorce',
    slug: 'consensual-divorce-process',
    keyword: '협의이혼 절차와 소요 기간 총정리',
    questionKeyword: '협의이혼 절차는 어떻게 되고 얼마나 걸리나요?',
    ctaKeyword: '협의이혼 준비사항',
    type: '절차/타임라인형',
    meta: {
      title: '협의이혼 절차와 소요 기간 총정리 | 로앤가이드',
      description:
        '협의이혼의 전체 절차, 숙려기간, 필요 서류, 소요 기간을 단계별로 정리했습니다.',
    },
    intro:
      '부부가 이혼에 합의했는데 절차가 어떻게 되는지 모르겠습니다. 서류는 뭘 준비해야 하는지, 얼마나 걸리는지, 양육비와 재산분할도 같이 정해야 하는지 궁금합니다. 협의이혼의 전체 절차를 처음부터 끝까지 정리했습니다.',
    timelineSteps: ['서류 준비', '이혼의사 확인 신청', '숙려기간', '법원 확인', '이혼신고'],
    sections: [
      {
        title: '1단계: 서류를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">협의이혼에 필요한 서류를 먼저 챙기세요</strong></p>\n<p><strong>혼인관계증명서</strong>, 가족관계증명서, 주민등록등본을 준비합니다. 자녀가 있는 경우 <strong>양육사항 협의서</strong>가 필수입니다.</p>\n<p>재산분할 합의서는 필수는 아니지만 이 단계에서 작성해두는 것을 권장합니다. <strong>이혼의사확인 신청서</strong>는 법원 양식을 사용합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 혼인관계증명서, 가족관계증명서, 주민등록등본, 양육사항 협의서, 신청서</blockquote>',
      },
      {
        title: '2단계: 가정법원에 이혼의사 확인을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">부부가 함께 관할 가정법원에 출석하여 신청합니다</strong></p>\n<p>부부가 <strong>함께 관할 가정법원</strong>에 출석하여 이혼의사 확인을 신청합니다. 일부 법원에서는 온라인 접수도 가능합니다.</p>\n<p>접수가 완료되면 <strong>숙려기간</strong>이 시작됩니다. 접수 시 양육사항 협의서도 함께 제출합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 부부 동시 출석이 원칙. 관할법원은 부부 주소지 기준</blockquote>',
      },
      {
        title: '3단계: 숙려기간을 거칩니다',
        content:
          '<p><strong style="color:#1e3a5f">자녀 유무에 따라 숙려기간이 달라집니다</strong></p>\n<p>양육할 자녀가 있으면 <strong>3개월</strong>, 없으면 <strong>1개월</strong>의 숙려기간을 거칩니다(민법 제836조의2).</p>\n<p>가정폭력 등 급박한 사유가 있으면 법원에 <strong>단축 신청</strong>이 가능합니다. 이 기간 동안 법원 상담위원의 상담을 받을 수도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 숙려기간을 활용하여 재산분할과 양육비 합의를 마무리하세요</blockquote>',
      },
      {
        title: '4단계: 법원에 출석하여 이혼의사를 확인받으세요',
        content:
          '<p><strong style="color:#1e3a5f">숙려기간 경과 후 3개월 이내에 법원에 출석해야 합니다</strong></p>\n<p>숙려기간이 지난 후 <strong>3개월 이내</strong>에 부부가 법원에 출석하여 판사 앞에서 이혼 의사를 최종 확인합니다.</p>\n<p>양육사항 협의가 자녀의 복리에 반한다고 판단되면 <strong>보정 명령</strong>이 내려질 수 있습니다. 확인이 완료되면 확인서가 교부됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 3개월 이내 미출석 시 처음부터 다시 진행해야 합니다</blockquote>',
      },
      {
        title: '5단계: 이혼신고로 마무리하세요',
        content:
          '<p><strong style="color:#1e3a5f">확인서 교부일로부터 3개월 이내에 이혼신고를 해야 합니다</strong></p>\n<p>확인서를 받은 날로부터 <strong>3개월 이내</strong>에 시·구·읍·면사무소에 이혼신고를 합니다.</p>\n<p><strong>이혼신고서</strong>, 이혼의사확인서, 혼인관계증명서를 제출하면 됩니다. 신고가 완료되면 법적으로 이혼이 성립합니다. 3개월 이내에 신고하지 않으면 확인서의 효력이 상실되니 주의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">마무리: 이혼신고서 + 이혼의사확인서 + 혼인관계증명서 → 신고 완료</blockquote>',
      },
    ],
    cases: [
      {
        title: '양육사항 협의서 내용이 보정 명령을 받은 사례',
        summary:
          '관련 사례에서도 양육사항 협의서에 양육비 금액이 구체적으로 기재되지 않거나 면접교섭 방법이 누락되어 법원에서 보정 명령을 내린 경우가 자주 있습니다.',
        takeaway:
          '비슷한 상황이라면 양육사항 협의서에 양육비 금액, 지급일, 면접교섭 빈도와 방법을 구체적으로 적어두세요.',
      },
      {
        title: '숙려기간 중 재산분할을 합의한 사례',
        summary:
          '관련 사례에서도 숙려기간 동안 부부가 재산분할과 양육비에 대해 합의를 완료하고, 공증까지 받아둔 경우 이혼 후 분쟁이 크게 줄어든 사례가 있습니다.',
        takeaway:
          '비슷한 상황이라면 숙려기간을 활용하여 재산분할과 양육비 합의를 마무리하고 공증을 받아두세요.',
      },
    ],
    faq: [
      {
        question: '협의이혼은 전체적으로 얼마나 걸리나요?',
        answer:
          '자녀 유무에 따라 <strong>1~4개월</strong>이 소요됩니다. 서류 준비 + 숙려기간 + 신고 기간을 합한 것입니다.',
      },
      {
        question: '변호사 없이 진행할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 법원 양식을 활용하면 됩니다. 다만 복잡한 재산분할이 있는 경우 전문가 도움을 권장합니다.',
      },
      {
        question: '숙려기간을 줄일 수 있나요?',
        answer:
          '가정폭력 등 <strong>급박한 사정</strong>이 있으면 법원에 단축 신청이 가능합니다. 일반적인 경우에는 단축이 어렵습니다.',
      },
      {
        question: '재산분할 합의를 꼭 해야 하나요?',
        answer:
          '<strong>필수는 아닙니다.</strong> 합의가 안 되면 이혼 후 2년 이내에 별도 소송으로 청구할 수 있습니다.',
      },
      {
        question: '법원에 꼭 같이 가야 하나요?',
        answer:
          '이혼의사 확인 시 <strong>부부 동시 출석</strong>이 원칙입니다. 일부 예외가 인정되는 경우도 있으니 법원에 문의하세요.',
      },
      {
        question: '이혼신고를 안 하면 어떻게 되나요?',
        answer:
          '확인서 교부 후 <strong>3개월 내 신고하지 않으면 효력이 상실</strong>됩니다. 처음부터 다시 진행해야 합니다.',
      },
      {
        question: '협의이혼 중에 재판이혼으로 바꿀 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 합의가 결렬되면 언제든 재판이혼으로 전환할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(전화 132)</strong>과 가정법원 상담위원을 통해 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 이혼 절차에 맞는 준비사항을 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      {
        label: '협의이혼과 재판이혼, 뭐가 다른가요?',
        href: '/guide/divorce/consensual-vs-trial-divorce',
      },
      {
        label: '이혼 상담 전에 어떤 서류를 준비해야 하나요?',
        href: '/guide/divorce/divorce-consultation-prep',
      },
      {
        label: '재산분할 비율은 어떻게 정해지나요',
        href: '/guide/divorce/property-division-ratio',
      },
    ],
  },
];
