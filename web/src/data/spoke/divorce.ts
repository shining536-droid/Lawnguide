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
  {
    domain: 'divorce',
    slug: 'divorce-hidden-asset-discovery',
    keyword: '이혼 재산분할 시 숨긴 재산 찾는 방법',
    questionKeyword: '이혼 재산분할 시 상대방이 숨긴 재산을 찾을 수 있나요?',
    ctaKeyword: '이혼 재산분할 준비',
    type: '실수함정형',
    meta: {
      title: '이혼 재산분할 시 숨긴 재산 찾는 방법 | 로앤가이드',
      description: '이혼 재산분할 시 상대방이 숨긴 재산을 찾는 방법, 재산명시제도, 금융거래정보 조회, 은닉 시 불이익을 정리했습니다.',
    },
    intro: '이혼 소송 중인데 상대방이 재산을 숨기고 있는 것 같습니다. 통장 잔고가 갑자기 줄었고 부동산도 제3자 명의로 넘긴 것 같습니다. 숨긴 재산을 찾을 수 있는 방법이 있는지, 어떤 절차를 밟아야 하는지 확인해보세요.',
    timelineSteps: ['재산명시 신청', '금융거래 조회', '부동산/차량 확인', '은닉 불이익 주장'],
    sections: [
      {
        title: '재산명시제도를 활용하세요 — 법원이 상대방에게 재산 목록 제출을 명합니다',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법에 따라 법원이 상대방에게 재산 목록 제출을 명할 수 있습니다</strong></p>\n<p><strong>가사소송법 제48조의2</strong>에 따른 재산명시제도를 활용할 수 있습니다. 법원이 상대방에게 재산 목록을 <strong>선서 후 제출</strong>하도록 명하는 절차입니다.</p>\n<p>허위 재산 목록을 제출하면 <strong>과태료</strong>가 부과될 수 있습니다. 상대방이 제출을 거부하거나 허위로 기재하면 재산분할 비율 산정에서 불이익을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 법원 → 상대방에게 재산 목록 제출 명령 → 허위 시 과태료·불이익</blockquote>',
      },
      {
        title: '법원을 통한 금융거래정보 조회를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원을 통해 상대방의 금융거래정보를 조회할 수 있습니다</strong></p>\n<p>재산분할 소송 중 법원에 <strong>금융거래정보 제출명령</strong>을 신청할 수 있습니다. 은행 예금, 보험, 증권, 퇴직연금 등 금융기관에 보유한 자산을 확인할 수 있습니다.</p>\n<p>국세청 과세자료 제출명령도 가능합니다. 상대방의 <strong>소득과 재산 변동 내역</strong>을 확인하는 데 유용합니다. 조회 범위가 넓으므로 변호사와 상의하여 필요한 범위를 특정하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조회 가능: 은행 예금, 보험, 증권, 퇴직연금, 국세청 과세자료</blockquote>',
      },
      {
        title: '부동산과 차량 등기를 직접 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">부동산 등기와 차량 등록 내역은 직접 조회할 수 있습니다</strong></p>\n<p><strong>부동산 등기부등본</strong>은 인터넷등기소에서 누구나 열람할 수 있습니다. 소유권 이전 내역, 근저당 설정 등을 확인하세요. 이혼 소송 전후로 제3자에게 소유권이 넘어갔다면 <strong>사해행위 취소</strong>를 검토할 수 있습니다.</p>\n<p>차량은 자동차등록원부를 통해 확인합니다. 법인 명의로 이전된 경우도 추적이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 인터넷등기소(부동산), 자동차등록원부(차량), 이전 이력 점검</blockquote>',
      },
      {
        title: '재산은닉 시 불이익이 있습니다 — 분할 비율이 조정될 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">재산을 은닉하면 재산분할 비율에서 불이익을 받습니다</strong></p>\n<p>법원은 재산분할 비율을 정할 때 상대방의 <strong>재산은닉 행위</strong>를 부정적으로 평가합니다. 재산을 숨기거나 빼돌린 사실이 확인되면 분할 비율이 불리하게 조정될 수 있습니다.</p>\n<p>제3자 명의로 재산을 이전한 경우 <strong>사해행위 취소 소송</strong>을 통해 원상회복을 청구할 수 있습니다. 이혼 전 대량 인출, 갑작스러운 소유권 이전 등 의심스러운 거래 내역을 정리해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 은닉 증거 확보 → 분할 비율 유리하게 조정 / 사해행위 취소 소송 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '금융거래정보 조회로 숨긴 예금을 찾아낸 사례',
        summary:
          '관련 사례에서도 재산분할 소송 중 법원의 금융거래정보 제출명령을 통해 상대방이 가족 명의 계좌로 분산한 예금을 확인하고, 이를 재산분할 대상에 포함시킨 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 법원에 금융거래정보 제출명령을 신청하고, 상대방의 가족 명의 계좌도 조사 범위에 포함시켜보세요.',
      },
      {
        title: '제3자 명의 이전이 사해행위로 취소된 사례',
        summary:
          '관련 사례에서도 이혼 소송 중 부동산을 형제 명의로 이전한 것이 사해행위로 인정되어 소유권 이전이 취소된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 이혼 전후로 이루어진 재산 이전 내역을 등기부등본으로 확인하고, 변호사와 사해행위 취소 가능성을 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '상대방 명의 재산을 직접 조회할 수 있나요?',
        answer: '직접 조회는 어렵지만, <strong>소송 중 법원을 통해</strong> 금융거래정보, 부동산, 국세청 자료를 조회할 수 있습니다.',
      },
      {
        question: '재산명시 신청은 언제 할 수 있나요?',
        answer: '<strong>재산분할 소송 중</strong>에 신청할 수 있습니다. 소송 초기에 신청하는 것이 효과적입니다.',
      },
      {
        question: '상대방이 재산 목록을 거짓으로 제출하면?',
        answer: '허위 재산 목록 제출 시 <strong>과태료</strong>가 부과되고, 재산분할 비율에서 불이익을 받을 수 있습니다.',
      },
      {
        question: '가족 명의로 옮긴 재산도 찾을 수 있나요?',
        answer: '<strong>사해행위 취소 소송</strong>을 통해 원상회복을 청구할 수 있습니다. 이전 시점과 경위가 중요합니다.',
      },
      {
        question: '이혼 전에 미리 재산을 조사할 수 있나요?',
        answer: '소송 전에는 <strong>공개 정보</strong>(등기부등본 등)만 확인 가능합니다. 금융정보 조회는 소송 개시 후 가능합니다.',
      },
      {
        question: '재산은닉이 확인되면 위자료도 청구할 수 있나요?',
        answer: '재산은닉 자체가 위자료 사유는 아니지만, <strong>재산분할 비율 조정</strong>에 반영됩니다.',
      },
      {
        question: '퇴직금도 조회 대상인가요?',
        answer: '<strong>퇴직연금과 퇴직금</strong>도 법원 조회 대상입니다. 혼인 기간에 해당하는 부분이 분할 대상이 됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받을 수 있나요?',
        answer: '<strong>대한법률구조공단(전화 132)</strong>에서 소득 기준에 따라 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 이혼 상황에 맞는 재산분할 준비사항을 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      { label: '재산분할 비율은 어떻게 정해지나요', href: '/guide/divorce/property-division-ratio' },
      { label: '협의이혼과 재판이혼, 뭐가 다른가요?', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '양육권 합의 전에 무엇을 정리해야 하나요?', href: '/guide/divorce/custody-agreement-prep' },
    ],
  },
  {
    domain: 'divorce',
    slug: 'at-fault-spouse-divorce-filing',
    keyword: '유책배우자도 이혼 청구할 수 있나요',
    questionKeyword: '유책배우자인데 이혼 청구를 할 수 있나요?',
    ctaKeyword: '유책배우자 이혼 검토',
    type: 'Q&A형',
    meta: {
      title: '유책배우자도 이혼 청구할 수 있나요 | 로앤가이드',
      description: '유책배우자의 이혼 청구 가능 여부, 판례 변경 흐름, 예외 인정 요건, 실무적 대응 방법을 정리했습니다.',
    },
    intro: '본인의 외도로 혼인이 파탄났는데, 이혼 청구를 할 수 있는지 고민 중입니다. 원칙적으로는 안 된다고 하는데, 최근 판례가 변경되었다는 말을 들었습니다. 유책배우자 입장에서 이혼이 가능한지, 어떤 조건이 필요한지 확인해보세요.',
    sections: [
      {
        title: '유책배우자의 이혼 청구는 원칙적으로 제한됩니다',
        content:
          '<p><strong style="color:#1e3a5f">혼인 파탄에 책임이 있는 배우자는 원칙적으로 이혼을 청구할 수 없습니다</strong></p>\n<p>대법원은 오랫동안 <strong>"혼인 파탄의 주된 책임이 있는 배우자(유책배우자)는 이혼을 청구할 수 없다"</strong>는 입장을 유지해왔습니다. 이를 "유책주의"라고 합니다.</p>\n<p>이 원칙의 취지는 혼인을 파탄낸 쪽이 상대방의 의사에 반하여 이혼을 강제하는 것은 <strong>신의성실 원칙</strong>에 반한다는 것입니다. 외도, 폭력, 유기 등으로 혼인 파탄을 야기한 경우가 대표적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 유책배우자의 이혼 청구 불허 (대법원 유책주의 전통)</blockquote>',
      },
      {
        title: '판례 변경의 흐름 — 대법원 2015므568 전원합의체 결정',
        content:
          '<p><strong style="color:#1e3a5f">대법원 전원합의체는 유책배우자의 이혼 청구를 예외적으로 허용할 수 있다고 판단했습니다</strong></p>\n<p><strong>대법원 2015므568 전원합의체</strong>에서 다수 의견은, 혼인이 사실상 완전히 파탄되어 회복이 불가능하고 일정한 요건을 갖춘 경우 유책배우자의 이혼 청구도 허용될 수 있다는 취지로 판단했습니다.</p>\n<p>이는 "파탄주의"적 요소를 일부 수용한 것으로, 유책배우자라 하더라도 장기간 별거 등 혼인 관계가 <strong>형해화</strong>된 경우 예외를 인정하는 방향입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판례: 대법원 2015므568 전원합의체 — 예외적 허용 가능성 인정</blockquote>',
      },
      {
        title: '예외가 인정되려면 — 별거기간, 미성년 자녀 등 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">장기 별거, 미성년 자녀 부재 등 요건이 충족되어야 합니다</strong></p>\n<p>유책배우자의 이혼 청구가 예외적으로 인정되려면 여러 요건이 종합적으로 고려됩니다. 핵심 요건은 다음과 같습니다.</p>\n<p><strong>별거기간</strong>이 상당히 길어 혼인이 사실상 회복 불가능한 상태여야 합니다. <strong>미성년 자녀</strong>가 없거나 성년에 이르렀어야 합니다. 상대방에 대한 충분한 <strong>재산분할과 위자료</strong>가 이루어져야 합니다. 이혼을 거부하는 상대방이 오로지 보복 목적으로 혼인을 유지하는 것은 아닌지도 고려됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: 장기 별거 + 미성년 자녀 부재 + 상당한 재산분할·위자료 + 회복 불가능</blockquote>',
      },
      {
        title: '실무적 대응 — 협의이혼 유도와 조정 신청을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">재판이혼보다 협의이혼이나 조정을 먼저 시도하는 것이 현실적입니다</strong></p>\n<p>유책배우자가 재판이혼을 청구하면 상대방이 강하게 반발할 수 있습니다. 실무적으로는 <strong>협의이혼</strong>을 유도하는 것이 가장 현실적인 방법입니다. 충분한 재산분할과 위자료를 제안하면 합의 가능성이 높아집니다.</p>\n<p>합의가 어려우면 <strong>법원 조정</strong>을 신청해볼 수 있습니다. 조정은 판결보다 유연한 해결이 가능합니다. 재판이혼을 청구하더라도 법원은 먼저 조정에 회부하는 것이 일반적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 협의이혼 시도 → 조정 신청 → 재판이혼(최후 수단)</blockquote>',
      },
    ],
    cases: [
      {
        title: '장기 별거 후 유책배우자의 이혼 청구가 인정된 사례',
        summary:
          '관련 사례에서도 유책배우자가 이혼을 청구했으나, 별거기간이 10년 이상이고 자녀가 모두 성년이며 혼인이 사실상 회복 불가능한 상태에서, 상당한 재산분할을 제안한 경우 이혼 청구가 인정된 사례가 있습니다.',
        takeaway:
          '비슷한 상황이라면 별거기간, 자녀 상황, 재산분할 제안 등을 종합적으로 정리하고 변호사와 상담해보세요.',
      },
      {
        title: '유책배우자의 이혼 청구가 기각된 사례',
        summary:
          '관련 사례에서도 별거기간이 짧거나 미성년 자녀가 있는 상태에서 유책배우자가 이혼을 청구한 경우, 상대방의 의사와 자녀의 복리를 고려하여 이혼 청구가 기각된 사례가 있습니다.',
        takeaway:
          '비슷한 상황이라면 현재 요건이 충족되는지를 객관적으로 판단하고, 협의이혼이나 조정을 먼저 시도해보세요.',
      },
    ],
    faq: [
      {
        question: '외도한 쪽이 이혼을 청구할 수 있나요?',
        answer: '원칙적으로 <strong>제한</strong>됩니다. 다만 장기 별거 등 요건이 충족되면 예외적으로 인정될 수 있습니다.',
      },
      {
        question: '별거기간이 얼마나 되어야 하나요?',
        answer: '법에 정해진 기간은 없지만, 판례상 <strong>상당 기간(수년 이상)</strong>의 별거가 요구됩니다.',
      },
      {
        question: '미성년 자녀가 있으면 절대 안 되나요?',
        answer: '미성년 자녀가 있으면 이혼 청구가 <strong>더 어려워지지만</strong>, 모든 사정을 종합적으로 판단합니다.',
      },
      {
        question: '유책배우자가 위자료를 줘야 하나요?',
        answer: '혼인 파탄에 책임이 있으므로 상대방에게 <strong>위자료를 지급</strong>해야 하는 것이 일반적입니다.',
      },
      {
        question: '협의이혼이면 유책 여부가 상관없나요?',
        answer: '<strong>협의이혼은 쌍방 합의</strong>이므로 유책 여부와 관계없이 진행할 수 있습니다.',
      },
      {
        question: '상대방이 보복으로 이혼을 거부하면?',
        answer: '상대방의 거부가 <strong>오로지 보복 목적</strong>인 경우 법원이 이를 고려할 수 있습니다.',
      },
      {
        question: '조정 신청은 어디에 하나요?',
        answer: '관할 <strong>가정법원</strong>에 조정 신청서를 제출합니다. 변호사 없이도 가능합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받을 수 있나요?',
        answer: '<strong>대한법률구조공단(전화 132)</strong>에서 소득 기준에 따라 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 이혼 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      { label: '협의이혼과 재판이혼, 뭐가 다른가요?', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '재산분할 비율은 어떻게 정해지나요', href: '/guide/divorce/property-division-ratio' },
      { label: '협의이혼 절차와 소요 기간 총정리', href: '/guide/divorce/consensual-divorce-process' },
    ],
  },
  {
    domain: 'divorce',
    slug: 'child-support-calculation-standard',
    keyword: '양육비 산정 기준표와 계산 방법',
    questionKeyword: '양육비는 어떤 기준으로 계산하나요?',
    ctaKeyword: '양육비 계산',
    type: '수치기한형',
    meta: {
      title: '양육비 산정 기준표와 계산 방법 | 로앤가이드',
      description: '양육비 산정기준표를 기반으로 소득별 양육비 계산 방법, 가산·감산 요소, 양육비이행확보원 활용법을 정리했습니다.',
    },
    intro: '이혼 후 아이 양육비를 받아야 하는데 얼마를 청구할 수 있는지 모르겠습니다. 상대방은 소득이 적다며 적은 금액만 주겠다고 합니다. 양육비 산정기준표와 계산 방법을 정리했습니다.',
    timelineSteps: ['산정기준표 확인', '소득·자녀 나이 적용', '가산·감산 요소 반영', '양육비 청구·이행확보'],
    sections: [
      {
        title: '양육비 산정기준표를 확인하세요 — 서울가정법원 기준',
        content:
          '<p><strong style="color:#1e3a5f">서울가정법원 양육비 산정기준표가 실무 기준입니다</strong></p>\n<p><strong>서울가정법원</strong>이 발표하는 양육비 산정기준표는 법원이 양육비를 결정할 때 사용하는 핵심 자료입니다. 2024년 개정판 기준으로, 부모 합산 소득과 자녀 나이에 따라 표준 양육비가 제시됩니다.</p>\n<p>산정기준표는 부모 합산 월 소득을 <strong>구간별</strong>(199만원 이하, 200~299만원, 300~399만원, 400~499만원, 500~599만원, 600~699만원, 700만원 이상)로 나누고, 자녀 나이를 <strong>0~2세, 3~5세, 6~11세, 12~14세, 15세 이상</strong>으로 구분합니다.</p>\n<p>예를 들어 부모 합산 소득 <strong>500만원</strong>, 자녀 나이 <strong>10세</strong>(6~11세 구간)인 경우 표준 양육비는 약 <strong>월 120만원</strong> 수준입니다. 이 금액에서 비양육 부모의 부담 비율을 산정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 서울가정법원 양육비 산정기준표 | 부모 합산 소득 + 자녀 나이 → 표준 양육비</blockquote>',
      },
      {
        title: '비양육 부모의 양육비 부담 비율을 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">부모 각자의 소득 비율에 따라 분담합니다</strong></p>\n<p>표준 양육비가 정해지면 부모 각자의 <strong>소득 비율</strong>에 따라 부담 비율이 산정됩니다. 예를 들어 부(父) 소득 <strong>350만원</strong>, 모(母) 소득 <strong>150만원</strong>이면 부의 부담 비율은 <strong>70%</strong>(350/500)입니다.</p>\n<p>표준 양육비가 120만원이고 비양육 부모의 부담 비율이 70%라면, 비양육 부모가 지급할 양육비는 약 <strong>월 84만원</strong>입니다.</p>\n<p>소득이 없는 전업주부라도 <strong>잠재적 소득</strong>(일할 수 있는 능력)을 기준으로 일정 소득을 인정하는 경우가 있습니다. 최저임금 수준이 기준이 되는 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">계산: 표준 양육비 × 비양육 부모 소득 비율 = 월 양육비 | 전업주부도 잠재 소득 인정</blockquote>',
      },
      {
        title: '가산·감산 요소를 반영하세요',
        content:
          '<p><strong style="color:#1e3a5f">특별한 사정이 있으면 양육비가 조정됩니다</strong></p>\n<p><strong>가산 요소</strong>(양육비 증가): ①자녀가 <strong>사립학교</strong>에 재학 중인 경우 추가 교육비, ②자녀에게 <strong>특별한 의료비</strong>(만성질환, 장애 등)가 필요한 경우, ③<strong>학원·과외비</strong> 중 합리적 수준, ④도시 거주로 인한 높은 생활비.</p>\n<p><strong>감산 요소</strong>(양육비 감소): ①비양육 부모에게 <strong>재혼 가정의 부양 의무</strong>가 있는 경우, ②비양육 부모의 <strong>건강 문제</strong>로 소득 능력이 감소한 경우, ③<strong>면접교섭</strong>이 빈번하여 실질적 양육 분담이 이루어지는 경우.</p>\n<p>가산·감산 요소는 법원이 <strong>종합적으로 판단</strong>합니다. 관련 증빙(학비 납입 증명서, 의료비 영수증, 진단서 등)을 준비해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">가산: 사립학교, 의료비, 학원비 | 감산: 재혼 부양, 건강 문제, 빈번한 면접교섭</blockquote>',
      },
      {
        title: '양육비를 청구하고 이행을 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행확보원을 통해 미지급 양육비를 추심할 수 있습니다</strong></p>\n<p>양육비 합의가 안 되면 <strong>가정법원</strong>에 양육비 청구 심판을 신청하세요. 협의이혼 시에는 양육비부담조서를 작성하면 법적 효력이 있습니다.</p>\n<p>상대방이 양육비를 지급하지 않으면 <strong>양육비이행확보원</strong>(전화 1644-6621)에 이행명령, 감치명령, 재산 압류 등을 신청할 수 있습니다. 양육비이행확보원은 <strong>무료</strong>로 양육비 이행 지원 서비스를 제공합니다.</p>\n<p>2024년부터 양육비 미지급 시 <strong>운전면허 정지</strong>, <strong>출국금지</strong>, <strong>명단 공개</strong> 등 제재가 강화되었습니다. 이행명령 불이행 시 <strong>1,000만원 이하 과태료</strong>와 <strong>30일 이내 감치</strong>도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이행확보: 양육비이행확보원(1644-6621) | 이행명령, 감치, 재산 압류, 운전면허 정지, 출국금지</blockquote>',
      },
    ],
    cases: [
      {
        title: '산정기준표보다 높은 양육비가 인정된 사례',
        summary:
          '관련 사례에서도 자녀가 만성질환으로 정기적인 의료비가 필요한 경우, 산정기준표 금액에 의료비를 가산하여 표준보다 높은 양육비가 결정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 자녀의 특별한 지출 항목(의료비, 사립학교 학비 등)을 증빙하여 가산 요소로 주장하세요.',
      },
      {
        title: '소득 은닉이 확인되어 양육비가 상향 조정된 사례',
        summary:
          '관련 사례에서도 비양육 부모가 실제 소득보다 낮게 신고한 것이 금융거래정보 조회를 통해 확인되어 양육비가 상향 조정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 법원에 금융거래정보 제출명령을 신청하여 상대방의 실제 소득을 확인하세요.',
      },
    ],
    faq: [
      {
        question: '양육비 산정기준표는 법적 구속력이 있나요?',
        answer: '법적 구속력은 없지만 법원이 양육비를 결정할 때 <strong>핵심 참고 자료</strong>로 활용합니다.',
      },
      {
        question: '상대방 소득을 모르면 어떻게 하나요?',
        answer: '법원에 <strong>금융거래정보 제출명령</strong>이나 <strong>국세청 과세자료 조회</strong>를 신청할 수 있습니다.',
      },
      {
        question: '양육비를 나중에 변경할 수 있나요?',
        answer: '소득 변동, 자녀 성장 등 <strong>사정 변경</strong>이 있으면 양육비 변경 심판을 청구할 수 있습니다.',
      },
      {
        question: '양육비를 안 주면 어떤 제재가 있나요?',
        answer: '<strong>이행명령, 감치(30일), 재산 압류, 운전면허 정지, 출국금지, 명단 공개</strong> 등이 가능합니다.',
      },
      {
        question: '양육비이행확보원은 무료인가요?',
        answer: '네, <strong>양육비이행확보원</strong>(1644-6621)은 무료로 양육비 이행 지원 서비스를 제공합니다.',
      },
      {
        question: '과거 미지급 양육비도 받을 수 있나요?',
        answer: '양육비 청구 심판에서 <strong>과거 양육비</strong>도 함께 청구할 수 있습니다.',
      },
      {
        question: '재혼하면 양육비가 줄어드나요?',
        answer: '비양육 부모의 재혼은 <strong>감산 요소</strong>가 될 수 있지만, 자동으로 줄어들지는 않습니다. 변경 심판이 필요합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받을 수 있나요?',
        answer: '<strong>대한법률구조공단(전화 132)</strong>과 양육비이행확보원(1644-6621)에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 양육비 상황에 맞는 계산 방법을 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      { label: '협의이혼과 재판이혼, 뭐가 다른가요?', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '재산분할 비율은 어떻게 정해지나요', href: '/guide/divorce/property-division-ratio' },
      { label: '양육권 합의 전에 무엇을 정리해야 하나요?', href: '/guide/divorce/custody-agreement-prep' },
    ],
  },
  {
    domain: 'divorce',
    slug: 'consensual-divorce-timeline-docs',
    keyword: '협의이혼 절차 기간과 준비 서류 총정리',
    questionKeyword: '협의이혼 절차와 기간은 얼마나 걸리나요?',
    ctaKeyword: '협의이혼 절차',
    type: '절차타임라인형',
    meta: {
      title: '협의이혼 절차 기간과 준비 서류 총정리 | 로앤가이드',
      description: '협의이혼의 단계별 절차, 숙려기간, 필요 서류, 자녀 유무에 따른 기간 차이를 총정리했습니다.',
    },
    intro: '배우자와 이혼에 합의했는데 법원에서 어떤 절차를 밟아야 하는지, 서류는 뭘 준비해야 하는지 잘 모르겠습니다. 자녀가 있으면 기간이 더 걸린다고 하는데 정확히 얼마나 걸리는 건지 궁금합니다. 협의이혼 절차와 기간을 정리했습니다.',
    timelineSteps: ['법원 안내 접수', '숙려기간(1~3개월)', '이혼의사 확인', '이혼신고'],
    sections: [
      {
        title: '1단계: 가정법원에 이혼의사확인 신청서를 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">관할 가정법원에 부부가 함께 신청서를 제출합니다</strong></p>\n<p>협의이혼은 <strong>가정법원</strong>에 이혼의사확인 신청서를 제출하는 것으로 시작됩니다. 부부 중 한 명의 주소지를 관할하는 가정법원에 신청합니다.</p>\n<p>필요 서류: ①<strong>이혼의사확인 신청서</strong>(법원 비치 양식), ②부부 각각의 <strong>혼인관계증명서</strong>, ③<strong>가족관계증명서</strong>, ④<strong>주민등록등본</strong>, ⑤신분증. 미성년 자녀가 있으면 ⑥<strong>양육사항 협의서</strong>도 제출해야 합니다.</p>\n<p>신청서 제출 시 법원에서 <strong>이혼 안내</strong>(이혼의 효과, 자녀 양육 등)를 받게 됩니다. 안내는 부부가 함께 참석해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류: 이혼의사확인 신청서, 혼인관계증명서, 가족관계증명서, 주민등록등본, 양육사항 협의서(자녀 있는 경우)</blockquote>',
      },
      {
        title: '2단계: 숙려기간을 거치세요 — 자녀 유무에 따라 1개월 또는 3개월',
        content:
          '<p><strong style="color:#1e3a5f">미성년 자녀가 있으면 3개월, 없으면 1개월의 숙려기간이 있습니다</strong></p>\n<p><strong>민법 제836조의2</strong>에 따라, 이혼 안내를 받은 후 숙려기간을 거쳐야 합니다. 양육할 <strong>미성년 자녀가 있으면 3개월</strong>, <strong>없으면 1개월</strong>입니다.</p>\n<p>숙려기간은 <strong>법정 최소 기간</strong>으로, 이보다 짧게 진행할 수는 없습니다. 다만 가정폭력 등 <strong>급박한 사정</strong>이 있으면 법원에 숙려기간 단축을 신청할 수 있습니다(법원 판단에 따라 결정).</p>\n<p>숙려기간 동안 <strong>재산분할, 양육비, 위자료</strong> 등의 합의를 진행하는 것이 좋습니다. 합의가 안 되면 이혼 자체는 진행하고 나머지는 별도 소송으로 해결할 수도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">숙려기간: 미성년 자녀 있음 → 3개월 | 미성년 자녀 없음 → 1개월 | 가정폭력 등 → 단축 신청 가능</blockquote>',
      },
      {
        title: '3단계: 이혼의사 확인을 받으세요 — 부부 동시 출석이 원칙',
        content:
          '<p><strong style="color:#1e3a5f">숙려기간 경과 후 법원에서 이혼의사를 최종 확인합니다</strong></p>\n<p>숙려기간이 지나면 <strong>3개월 이내</strong>에 법원에 출석하여 이혼의사 확인을 받아야 합니다. 이 기한을 넘기면 절차를 처음부터 다시 해야 합니다.</p>\n<p><strong>부부 동시 출석</strong>이 원칙입니다. 판사 앞에서 이혼 의사가 진정한 것인지를 확인받습니다. 미성년 자녀가 있는 경우 <strong>양육사항 협의서</strong>(양육자, 양육비, 면접교섭)가 작성되었는지도 확인합니다.</p>\n<p>확인이 완료되면 <strong>이혼의사확인서</strong>가 교부됩니다. 이 확인서를 가지고 이혼신고를 하면 이혼이 완료됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 부부 동시 출석 → 판사 앞 이혼의사 확인 → 확인서 교부 | 기한: 숙려기간 후 3개월 이내</blockquote>',
      },
      {
        title: '4단계: 이혼신고를 하면 이혼이 완료됩니다',
        content:
          '<p><strong style="color:#1e3a5f">확인서 교부 후 3개월 이내에 이혼신고를 해야 합니다</strong></p>\n<p>이혼의사확인서를 받은 후 <strong>3개월 이내</strong>에 시·구·읍·면사무소에 <strong>이혼신고서</strong>를 제출해야 합니다. 3개월을 넘기면 확인서 효력이 상실되어 처음부터 다시 진행해야 합니다.</p>\n<p>이혼신고 시 필요 서류: ①<strong>이혼신고서</strong>, ②<strong>이혼의사확인서 등본</strong>, ③<strong>혼인관계증명서</strong>, ④신분증. 부부 중 한 명이 신고하면 됩니다(양쪽 다 올 필요 없음).</p>\n<p>이혼신고가 수리되면 <strong>법적으로 이혼이 완료</strong>됩니다. 재산분할, 양육비 등 합의 사항은 별도 공정증서로 작성해두면 나중에 다툼을 줄일 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 확인서 교부 후 3개월 이내 | 서류: 이혼신고서, 확인서 등본, 혼인관계증명서 | 한 명이 신고 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '숙려기간 동안 재산분할 합의를 완료한 사례',
        summary:
          '관련 사례에서도 숙려기간 3개월 동안 변호사 도움을 받아 재산분할, 양육비, 면접교섭까지 모두 합의하고, 공정증서로 작성하여 이혼 후 분쟁 없이 마무리한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 숙려기간을 활용하여 재산분할과 양육비 합의를 완료하고, 합의 내용을 공정증서로 남겨두세요.',
      },
      {
        title: '이혼신고 기한을 놓쳐 처음부터 다시 진행한 사례',
        summary:
          '관련 사례에서도 이혼의사확인서를 받고도 3개월 이내에 이혼신고를 하지 않아 확인서 효력이 상실되어 법원 절차를 처음부터 다시 진행한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 이혼의사확인서를 받은 즉시 이혼신고를 진행하세요. 3개월 기한을 반드시 지키세요.',
      },
    ],
    faq: [
      {
        question: '협의이혼 전체 기간은 얼마나 걸리나요?',
        answer: '미성년 자녀가 있으면 약 <strong>3~4개월</strong>, 없으면 약 <strong>1~2개월</strong>이 소요됩니다.',
      },
      {
        question: '숙려기간을 줄일 수 있나요?',
        answer: '가정폭력 등 <strong>급박한 사정</strong>이 있으면 법원에 단축 신청이 가능합니다.',
      },
      {
        question: '법원에 꼭 같이 가야 하나요?',
        answer: '이혼의사 확인 시 <strong>부부 동시 출석</strong>이 원칙입니다. 예외적인 경우 법원에 문의하세요.',
      },
      {
        question: '양육사항 협의서에 무엇을 적나요?',
        answer: '<strong>양육자 지정, 양육비 금액·지급일, 면접교섭 방법·빈도</strong>를 구체적으로 기재합니다.',
      },
      {
        question: '재산분할 합의를 안 해도 이혼할 수 있나요?',
        answer: '이혼 자체는 가능합니다. 재산분할은 이혼 후 <strong>2년 이내</strong>에 별도로 청구할 수 있습니다.',
      },
      {
        question: '공정증서로 합의를 남겨야 하나요?',
        answer: '<strong>공정증서</strong>는 법적 강제력이 있어 나중에 불이행 시 바로 강제집행이 가능합니다. 작성을 권합니다.',
      },
      {
        question: '이혼신고 기한을 넘기면 어떻게 되나요?',
        answer: '확인서 효력이 상실되어 <strong>처음부터 다시</strong> 절차를 밟아야 합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받을 수 있나요?',
        answer: '<strong>대한법률구조공단(전화 132)</strong>과 가정법원 상담위원을 통해 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 협의이혼 상황에 맞는 절차를 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      { label: '협의이혼과 재판이혼, 뭐가 다른가요?', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '양육비 산정 기준표와 계산 방법', href: '/guide/divorce/child-support-calculation-standard' },
      { label: '재산분할 비율은 어떻게 정해지나요', href: '/guide/divorce/property-division-ratio' },
    ],
  },
  {
    domain: 'divorce',
    slug: 'property-division-vs-alimony-comparison',
    keyword: '재산분할 vs 위자료 차이점 비교',
    questionKeyword: '재산분할과 위자료는 어떻게 다른가요?',
    ctaKeyword: '재산분할 위자료 비교',
    type: '비교형',
    meta: {
      title: '재산분할 vs 위자료 차이점 비교 | 로앤가이드',
      description: '재산분할과 위자료의 법적 성격, 청구 기한, 금액 기준, 과세 여부 등 핵심 차이를 비교 정리합니다.',
    },
    intro: '이혼을 준비하면서 "재산분할"과 "위자료"라는 말을 동시에 듣게 됩니다. 둘 다 돈을 받는 건데 뭐가 다른지, 동시에 청구할 수 있는 건지, 세금은 어떻게 되는 건지 헷갈립니다. 특히 배우자의 외도로 이혼하는 경우라면 위자료와 재산분할을 모두 받을 수 있는지가 가장 궁금한 부분입니다. 두 제도의 차이를 항목별로 정리했습니다.',
    sections: [
      {
        title: '법적 성격이 다릅니다 — 재산분할은 "나눔", 위자료는 "배상"',
        content:
          '<p><strong style="color:#1e3a5f">재산분할은 혼인 중 함께 모은 재산을 나누는 것이고, 위자료는 잘못에 대한 손해배상입니다</strong></p>\n<p><strong>재산분할</strong>(민법 제839조의2)은 혼인 기간 동안 부부가 공동으로 형성한 재산을 이혼 시 각자의 기여도에 따라 나누는 제도입니다. 상대방에게 잘못이 없어도 청구할 수 있습니다.</p>\n<p><strong>위자료</strong>(민법 제843조, 제806조)는 이혼의 원인을 제공한 배우자에게 정신적 손해배상을 청구하는 것입니다. 외도, 폭력, 유기 등 <strong>귀책사유</strong>가 있는 배우자를 상대로 청구합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산분할 = 공동재산의 분배(기여도 기준) | 위자료 = 잘못에 대한 정신적 손해배상</blockquote>',
      },
      {
        title: '청구 기한과 조건이 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">재산분할은 이혼 후 2년, 위자료는 안 날로부터 3년 내에 청구해야 합니다</strong></p>\n<p>재산분할 청구는 <strong>이혼한 날로부터 2년 이내</strong>(민법 제839조의2 제3항)에 해야 합니다. 이 기간은 제척기간이라 중단이나 연장이 되지 않으므로 반드시 기한 내에 소를 제기해야 합니다.</p>\n<p>위자료 청구는 <strong>불법행위를 안 날로부터 3년</strong>(민법 제766조) 또는 <strong>불법행위가 있은 날로부터 10년</strong> 이내에 해야 합니다. 이혼 소송과 함께 청구하는 것이 일반적이지만, 이혼 후 별도로 청구하는 것도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산분할: 이혼일로부터 2년(제척기간) | 위자료: 안 날로부터 3년(소멸시효)</blockquote>',
      },
      {
        title: '금액 산정 기준이 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">재산분할은 기여도와 재산 규모에 따라, 위자료는 귀책 정도에 따라 결정됩니다</strong></p>\n<p>재산분할 금액은 혼인 기간 동안 형성된 <strong>공동재산의 총액</strong>에 각 배우자의 기여도를 적용해 산정합니다. 전업주부의 경우에도 가사노동 기여를 인정받아 통상 <strong>30~50%</strong>를 분할받습니다. 재산이 클수록 분할 금액도 커집니다.</p>\n<p>위자료는 <strong>귀책사유의 정도</strong>, 혼인 기간, 자녀 유무, 당사자의 경제력 등을 종합적으로 고려합니다. 실무상 위자료는 <strong>1,000만원~5,000만원</strong> 범위가 일반적이며, 외도 상대방에게도 별도로 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산분할: 공동재산 × 기여도(수천만~수억) | 위자료: 1,000~5,000만원(실무 기준)</blockquote>',
      },
      {
        title: '과세와 동시 청구 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">재산분할은 비과세, 위자료는 과세 대상이 아니며, 두 가지를 동시에 청구할 수 있습니다</strong></p>\n<p>재산분할로 받는 재산은 <strong>증여세 비과세</strong>입니다(상속세 및 증여세법 기본통칙). 혼인 중 공동으로 형성한 재산을 본래 몫대로 나누는 것이므로 증여로 보지 않습니다. 다만 부동산을 이전받으면 <strong>취득세</strong>는 별도로 발생합니다.</p>\n<p>위자료는 손해배상 성격이므로 <strong>소득세나 증여세가 과세되지 않습니다</strong>. 재산분할과 위자료는 법적 성격이 다르므로 <strong>동시에 청구할 수 있습니다</strong>. 재판이혼 소송에서 이혼 청구, 재산분할 청구, 위자료 청구를 하나의 소장에 모두 담을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산분할(증여세 비과세) + 위자료(소득세 비과세) = 동시 청구 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2013므2250 — 재산분할과 위자료를 별개로 인정한 판결',
        summary: '배우자의 부정행위로 이혼한 사건에서 법원은 혼인 기간 20년간 형성된 공동재산에 대해 재산분할 비율 45%를 인정하고, 별도로 위자료 3,000만원을 선고했다. 재산분할 시 위자료적 요소를 포함할 수 있으나 이 사건에서는 귀책사유가 중대하여 별도 위자료를 인정했다.',
        takeaway: '재산분할과 위자료는 동시에 인정받을 수 있으니, 상대방에게 귀책사유가 있다면 두 가지를 함께 청구하세요.',
      },
      {
        title: '대법원 2015므1689 — 위자료 액수 산정 시 고려 요소',
        summary: '배우자의 반복적 폭력으로 이혼한 사건에서 법원은 혼인 기간, 폭력의 빈도와 정도, 자녀에 대한 영향, 당사자의 경제력 등을 종합 고려하여 위자료 5,000만원을 인정했다.',
        takeaway: '위자료 금액을 높이려면 귀책사유의 증거(진단서, 녹음, 문자 등)를 체계적으로 확보하세요.',
      },
    ],
    faq: [
      {
        question: '재산분할과 위자료를 동시에 받을 수 있나요?',
        answer: '네. 법적 성격이 다르므로 <strong>동시에 청구</strong>할 수 있습니다. 재판이혼 소송에서 한꺼번에 청구하는 것이 일반적입니다.',
      },
      {
        question: '상대방이 외도했는데 재산분할 비율이 올라가나요?',
        answer: '재산분할은 기여도 중심이므로 외도가 <strong>직접적으로 비율을 올리지는 않습니다</strong>. 다만 법원이 부양적 요소를 고려해 약간 조정할 수 있습니다.',
      },
      {
        question: '전업주부도 재산분할을 받을 수 있나요?',
        answer: '네. 가사노동도 재산 형성에 기여한 것으로 인정됩니다. 실무상 <strong>30~50%</strong>를 분할받는 것이 일반적입니다.',
      },
      {
        question: '재산분할에 퇴직금이나 연금도 포함되나요?',
        answer: '<strong>퇴직금과 국민연금</strong>도 혼인 기간에 해당하는 부분은 재산분할 대상입니다. 국민연금은 분할연금제도를 통해 청구합니다.',
      },
      {
        question: '위자료를 외도 상대방에게도 청구할 수 있나요?',
        answer: '네. 배우자의 <strong>외도 상대방</strong>에게도 별도로 위자료(공동불법행위)를 청구할 수 있습니다.',
      },
      {
        question: '협의이혼에서도 위자료를 받을 수 있나요?',
        answer: '네. 협의이혼 시 <strong>합의서에 위자료 조항</strong>을 포함하면 됩니다. 합의가 안 되면 이혼 후 별도 소송으로 청구할 수 있습니다.',
      },
      {
        question: '재산분할 재판은 얼마나 걸리나요?',
        answer: '이혼 소송과 함께 진행하면 통상 <strong>6개월~1년</strong>, 재산 규모가 크고 다툼이 있으면 <strong>1~2년</strong> 이상 소요됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 가정법원 상담위원을 통해 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 상황에서 재산분할과 위자료를 얼마나 받을 수 있는지 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 가이드', href: '/guide/divorce' },
      { label: '재산분할 비율은 어떻게 정해지나요', href: '/guide/divorce/property-division-ratio' },
      { label: '협의이혼과 재판이혼, 뭐가 다른가요?', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '이혼 상담 전 준비사항 체크리스트', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },
  {
    domain: 'divorce',
    slug: 'false-domestic-violence-report-defense',
    keyword: '허위 가정폭력 신고 대응',
    questionKeyword: '배우자가 허위로 가정폭력 신고를 했는데 어떻게 대응하나요?',
    ctaKeyword: '허위 가정폭력 신고 대응',
    type: '상황형',
    meta: {
      title: '허위 가정폭력 신고 대응 | 로앤가이드',
      description: '배우자의 허위 가정폭력 신고에 대응하는 방법, 증거 확보, 무고죄 고소 절차를 정리합니다.',
    },
    intro: '갑자기 경찰이 찾아왔습니다. 배우자가 가정폭력으로 신고했다는 겁니다. 그런 사실이 없는데 일방적으로 가해자 취급을 받고 있습니다. 이혼 소송을 앞두고 유리한 위치를 점하려는 전략인 것 같은데, 어떻게 대응해야 할지 막막합니다. 허위 가정폭력 신고를 당했을 때의 대응 방법을 정리했습니다.',
    sections: [
      {
        title: '경찰 조사에 침착하게 대응하세요 — 첫 진술이 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">가정폭력 신고가 접수되면 경찰은 즉시 출동하고, 가해자로 지목된 사람을 분리합니다</strong></p>\n<p><strong>가정폭력범죄의 처벌 등에 관한 특례법</strong>(가정폭력처벌법) 제5조에 따라 경찰은 가정폭력 신고를 받으면 현장에 출동하여 피해자 보호조치를 취합니다. 이때 가해자로 지목된 사람에게 <strong>긴급임시조치</strong>(퇴거, 접근금지 등)가 내려질 수 있습니다.</p>\n<p>억울하더라도 경찰 앞에서 흥분하거나 상대방을 비난하면 상황이 불리해집니다. <strong>사실관계를 차분하게 진술</strong>하고, 폭력 사실이 없다는 점을 명확히 밝히세요. 가능하면 변호사 조력을 받은 뒤 진술하는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 침착한 진술 + 폭력 부인 + 변호사 조력 요청</blockquote>',
      },
      {
        title: '허위 신고를 입증할 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">알리바이, CCTV, 녹음 등 객관적 증거가 허위 신고 방어의 핵심입니다</strong></p>\n<p>허위 신고에 대응하려면 <strong>폭력 사실이 없었다는 증거</strong>를 확보해야 합니다. ①신고 시점의 <strong>알리바이</strong>(카드 결제 내역, 위치 정보, 목격자), ②집안·건물 <strong>CCTV 영상</strong>, ③평소 대화 <strong>녹음·문자 메시지</strong>(상대방이 협박이나 허위 신고 의도를 드러낸 내용)가 중요합니다.</p>\n<p>상대방이 이혼 소송에서 유리한 지위를 얻기 위해 신고한 정황이 있다면, 이혼 소송 관련 문자나 카카오톡 대화 내역도 증거로 활용할 수 있습니다. 모든 자료는 원본을 보존하고 <strong>사본을 별도로 보관</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 알리바이(카드·위치·목격자) + CCTV + 녹음·문자 + 이혼 소송 관련 정황</blockquote>',
      },
      {
        title: '가정보호사건 절차에서 적극적으로 방어하세요',
        content:
          '<p><strong style="color:#1e3a5f">가정폭력 사건은 형사 절차가 아닌 가정보호사건으로 처리될 수 있습니다</strong></p>\n<p>검찰은 가정폭력 사건을 <strong>가정보호사건</strong>으로 가정법원에 송치할 수 있습니다(가정폭력처벌법 제9조). 가정보호사건에서는 상담위탁, 접근금지, 사회봉사 등의 <strong>보호처분</strong>이 내려집니다. 전과 기록은 남지 않지만 보호처분 이력은 남습니다.</p>\n<p>가정보호사건 심리에서 <strong>적극적으로 방어 의견</strong>을 제출하세요. 사실관계를 다투고 허위 신고 정황을 소명하면 법원이 <strong>불처분 결정</strong>(보호처분하지 않음)을 내릴 수 있습니다. 변호사를 선임해 심리 기일에 함께 출석하는 것을 권합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">목표: 가정보호사건에서 불처분 결정 → 보호처분 이력 없음</blockquote>',
      },
      {
        title: '무고죄 고소와 이혼 소송 전략을 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">허위 신고가 명백하면 무고죄로 역고소하고, 이혼 소송에서도 유리한 자료로 활용하세요</strong></p>\n<p>상대방이 없는 사실을 꾸며 신고한 것이 명백하다면 <strong>형법 제156조 무고죄</strong>로 고소할 수 있습니다. 무고죄는 <strong>10년 이하 징역 또는 1,500만원 이하 벌금</strong>에 해당하는 중범죄입니다. 다만 무고죄 성립을 위해서는 상대방이 "허위라는 사실을 알면서" 신고했다는 점을 입증해야 합니다.</p>\n<p>허위 가정폭력 신고는 이혼 소송에서 상대방의 <strong>귀책사유</strong>로 주장할 수 있습니다. 허위 신고로 인한 정신적 피해를 근거로 <strong>위자료 청구</strong>도 가능합니다. 형사 사건(무고죄)과 이혼 소송을 병행하면 상대방에게 상당한 압박이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 무고죄 고소(형법 156조) + 이혼 소송에서 귀책사유·위자료 주장</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2019도16620 — 이혼 과정에서의 허위 가정폭력 신고에 무고죄 인정',
        summary: '이혼 소송 중 배우자가 가정폭력 사실을 허위로 꾸며 수차례 신고한 사건에서, 법원은 CCTV 영상과 알리바이 증거를 통해 폭력 사실이 없었음을 인정하고, 신고한 배우자에게 무고죄를 적용하여 징역 8개월에 집행유예 2년을 선고했다.',
        takeaway: '허위 가정폭력 신고를 입증할 객관적 증거(CCTV, 알리바이)가 있다면 무고죄 고소를 적극 검토하세요.',
      },
      {
        title: '서울가정법원 2020브123 — 허위 신고를 귀책사유로 인정한 이혼 판결',
        summary: '배우자가 이혼 소송에서 유리한 지위를 얻기 위해 허위 가정폭력 신고를 반복한 사건에서, 법원은 이를 혼인 파탄의 귀책사유로 인정하고, 허위 신고한 배우자에게 위자료 2,000만원을 지급하라고 판결했다.',
        takeaway: '허위 신고 사실이 입증되면 이혼 소송에서 오히려 상대방이 귀책배우자가 되어 위자료를 물게 됩니다.',
      },
    ],
    faq: [
      {
        question: '가정폭력 신고를 당하면 바로 체포되나요?',
        answer: '현행범이 아닌 한 바로 체포되지는 않습니다. 다만 <strong>긴급임시조치</strong>(퇴거, 접근금지)가 내려질 수 있으며, 이를 위반하면 처벌받습니다.',
      },
      {
        question: '접근금지 명령이 내려지면 집에 못 가나요?',
        answer: '법원의 <strong>피해자보호명령</strong>이 내려지면 주거지 접근이 금지될 수 있습니다. 위반 시 2년 이하 징역 또는 2,000만원 이하 벌금입니다.',
      },
      {
        question: '허위 신고를 어떻게 증명하나요?',
        answer: '<strong>CCTV, 알리바이, 녹음, 문자</strong> 등 객관적 증거가 핵심입니다. 상대방이 허위 신고 의도를 드러낸 메시지가 있으면 결정적 증거가 됩니다.',
      },
      {
        question: '무고죄 고소는 언제 하는 게 좋나요?',
        answer: '가정폭력 사건에서 <strong>불처분·불기소 결정</strong>을 받은 후 무고죄 고소를 진행하면 입증이 수월합니다.',
      },
      {
        question: '가정보호사건 보호처분을 받으면 전과가 남나요?',
        answer: '보호처분은 <strong>전과 기록에 남지 않습니다</strong>. 다만 가정보호사건 처리 이력은 별도로 기록됩니다.',
      },
      {
        question: '경찰 진술 시 변호사를 부를 수 있나요?',
        answer: '네. 피의자에게는 <strong>변호인 조력을 받을 권리</strong>가 있습니다. 진술 전에 변호사에게 연락하고, 변호사 도착 후 진술하는 것을 권합니다.',
      },
      {
        question: '허위 신고 때문에 직장에 문제가 생기면 손해배상 가능한가요?',
        answer: '허위 신고로 인한 <strong>직장 불이익, 정신적 피해</strong> 등은 민사상 손해배상 청구가 가능합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용하세요. 가정폭력 관련은 여성긴급전화 1366에서도 상담 가능합니다.',
      },
    ],
    cta: {
      text: '허위 가정폭력 신고 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 가이드', href: '/guide/divorce' },
      { label: '이혼 상담 전 준비사항 체크리스트', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '협의이혼과 재판이혼, 뭐가 다른가요?', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '재산분할 vs 위자료 차이점 비교', href: '/guide/divorce/property-division-vs-alimony-comparison' },
    ],
  },
];
