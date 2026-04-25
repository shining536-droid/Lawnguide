import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. auction-property-with-tenant: 경매 낙찰 후 세입자가 점유 중인 물건을 취득한 매수인이 대항력·배당 여부를 판단하고 명도 절차를 준비하는 페이지
// 2. penalty-for-not-reporting: 아동성범죄를 목격하거나 인지했지만 신고하지 않은 경우 어떤 처벌을 받는지 궁금한 의무신고자(교사·의료인 등)를 위한 페이지
// 3. victim-report-required-documents: 아동성범죄 피해 아동의 보호자가 경찰 신고 전 어떤 서류·증거를 준비해야 하는지 안내하는 페이지
// 4. group-chat-bullying-qualification: 카카오톡 단체 채팅방에서 따돌림을 당한 학생의 보호자가 이것이 학교폭력에 해당하는지 판단하는 페이지
// 5. accused-as-perpetrator-parent-response: 학교폭력 가해자로 지목된 학생의 부모가 초기 72시간 안에 해야 할 증거 보전·진술 준비를 안내하는 페이지 (기존 school-violence-accused-parent-response는 학폭위 절차·조치 종류 중심, 이 페이지는 초기 72시간 대응·증거 보전 중심)

export const spokesBatch17_16to20: SpokePage[] = [
  {
    domain: 'real-estate-auction',
    slug: 'auction-property-with-tenant',
    keyword: '경매 물건 세입자 있을 때 대처법',
    questionKeyword: '경매로 낙찰받은 물건에 세입자가 있는데 어떻게 해야 하나요?',
    ctaKeyword: '경매 세입자 대처',
    type: '상황형',
    perspective: 'buyer',
    meta: {
      title: '경매 물건 세입자 있을 때 5단계 대처법 | 로앤가이드',
      description: '경매로 낙찰받았는데 세입자가 퇴거를 거부합니다. 대항력 확인부터 명도소송까지 5단계 절차를 지금 확인하세요.',
    },
    intro: '경매로 아파트를 낙찰받았는데, 기존 세입자가 나가지 않겠다고 합니다. 보증금을 돌려받아야 한다며 버티고 있고, 명도를 요구하면 오히려 자신에게 대항력이 있다고 주장합니다. 이사 계획은 틀어지고 잔금 납부 기한은 다가오는데 어떻게 해야 할지 막막합니다. 세입자가 있는 경매 물건을 낙찰받았을 때 가능한 한 확인해야 할 사항과 대처 절차를 정리했습니다.',
    sections: [
      {
        title: '첫째, 세입자의 대항력 유무를 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">대항력이 있는 세입자와 없는 세입자는 대처법이 완전히 다릅니다</strong></p>\n<p>세입자가 <strong>전입신고 + 확정일자</strong>를 갖추고, 그 날짜가 근저당권 설정일보다 <strong>앞서면</strong> 대항력이 인정될 수 있습니다. 대항력이 있는 세입자는 매수인에게 보증금 반환을 요구할 수 있고, 보증금을 돌려받기 전까지 퇴거를 거부할 수 있습니다.</p>\n<p>반대로 전입신고일이 근저당 설정일보다 <strong>늦으면</strong> 대항력이 없습니다. 이 경우 세입자는 배당 절차에서 보증금을 받고, 매수인에게는 퇴거 의무가 있습니다. 등기부등본과 배당표를 대조해서 세입자의 <strong>전입일·확정일자·근저당 설정일</strong>을 가능한 한 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 전입신고일 vs 근저당 설정일 비교 → 대항력 유무 판단</blockquote>',
      },
      {
        title: '둘째, 배당 결과에 따른 세입자 지위를 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">배당을 받았는지 여부가 명도 가능성을 결정합니다</strong></p>\n<p>대항력 있는 세입자라도 <strong>배당 절차에서 보증금 전액을 수령</strong>했다면 더 이상 매수인에게 보증금 반환을 요구할 수 없으므로 퇴거해야 합니다. 반면 배당에서 보증금을 전혀 받지 못했거나 일부만 받은 경우에는 <strong>잔액 상환 시까지 점유를 계속</strong>할 수 있습니다.</p>\n<p>대항력 없는 세입자는 배당 여부와 관계없이 매수인에게 <strong>인도 의무</strong>가 있습니다. 다만 실무에서는 이사비 등 <strong>합의금을 제시</strong>하여 원만하게 퇴거를 유도하는 것이 시간과 비용 면에서 유리합니다.</p>\n<p style="margin-top:12px;padding:10px 14px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-radius:8px;font-size:0.95em"><strong style="color:#d4a017">💬 지금 내 상황에 맞는 대응 전략 확인하기</strong> → <a href="/diagnosis/real-estate-auction" style="color:#1e3a5f;font-weight:bold">무료 진단 시작</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 배당 전액 수령 → 퇴거 의무 발생 | 미수령 → 잔액 상환까지 점유 가능</blockquote>',
      },
      {
        title: '셋째, 세입자와 명도 협의를 먼저 시도하세요',
        content:
          '<p><strong style="color:#1e3a5f">소송 전 협의가 시간과 비용을 크게 줄입니다</strong></p>\n<p>명도소송은 통상 <strong>6개월~1년</strong>이 소요되고 변호사 비용도 발생합니다. 따라서 먼저 세입자에게 <strong>이사비(통상 200~500만원)</strong>를 제시하고 자진 퇴거를 유도하는 것이 효율적입니다. 이사비 합의서에는 ①<strong>퇴거일</strong>, ②<strong>이사비 금액</strong>, ③<strong>미이행 시 위약금</strong>을 가능한 한 명시하세요.</p>\n<p>합의서 작성 시 <strong>내용증명</strong>을 먼저 보내 퇴거를 요구한 기록을 남기세요. 내용증명은 추후 명도소송에서 <strong>"협의를 시도했다"는 증거</strong>로 활용됩니다. 합의가 불발되면 즉시 법적 절차로 전환해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 내용증명 발송 → 이사비 합의 제안 → 합의서 작성 → 불발 시 소송</blockquote>',
      },
      {
        title: '넷째, 협의 불발 시 명도소송과 인도명령을 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">대항력 없는 세입자에게는 인도명령이 가장 빠른 해결책입니다</strong></p>\n<p>대항력 없는 세입자에 대해서는 <strong>매각대금 납부 후 6개월 이내</strong>에 법원에 인도명령을 신청할 수 있습니다(민사집행법 제136조). 인도명령은 통상 <strong>1~2주</strong> 만에 결정이 나오며, 명도소송(6개월~1년)보다 훨씬 빠릅니다.</p>\n<p>대항력 있는 세입자에게는 인도명령이 불가능하므로, <strong>부동산 인도 청구의 소(명도소송)</strong>를 제기해야 합니다. 소장에는 ①매각허가결정문, ②대금납부확인서, ③등기부등본, ④세입자의 점유 사실을 입증하는 자료를 첨부하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대항력 없음 → 인도명령(1~2주) | 대항력 있음 → 명도소송(6개월~1년)</blockquote>',
      },
      {
        title: '다섯째, 강제집행까지의 절차와 비용을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">판결이나 인도명령을 받아도 세입자가 안 나가면 강제집행이 필요합니다</strong></p>\n<p>인도명령이나 명도소송 판결이 확정되면, 법원에 <strong>강제집행 신청</strong>을 합니다. 집행관이 현장에 방문하여 <strong>1차 계고</strong>(퇴거 경고)를 하고, 이후에도 퇴거하지 않으면 <strong>2차 방문 시 강제 퇴거</strong>를 집행합니다. 강제집행 비용은 면적에 따라 다르지만 통상 <strong>150~400만원</strong> 수준입니다.</p>\n<p>강제집행 비용은 원칙적으로 <strong>채무자(세입자) 부담</strong>이지만, 실제 회수가 어려운 경우가 많으므로 매수인이 먼저 납부하고 추후 구상권을 행사하는 방식이 일반적입니다. 전체 절차가 길어질 수 있으므로 낙찰 직후부터 <strong>신속하게 대응</strong>하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">강제집행 비용: 150~400만원 | 절차: 집행 신청 → 1차 계고 → 2차 강제 퇴거</blockquote>',
      },
    ],
    cases: [
      {
        title: '경매 낙찰 후 세입자 보증금 우선변제권 — 대법원 2024다298448',
        summary:
          '대법원 2024다298448 사건(2025.09.11)에서 법원은 경매 절차에서 대항력을 갖춘 임차인이 배당요구를 하지 않은 경우에도 매수인에 대한 관계에서 보증금 반환청구권이 소멸하지 않으며, 임대차관계가 매수인에게 승계된다고 판시했습니다.',
        takeaway:
          '대항력 있는 세입자가 배당을 받지 않았다면 매수인이 보증금 반환 의무를 부담합니다. 낙찰 전 세입자의 대항력과 배당 상태를 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '세입자가 대항력이 있는지 어떻게 확인하나요?',
        answer:
          '등기부등본에서 <strong>근저당 설정일</strong>과 세입자의 <strong>전입신고일·확정일자</strong>를 비교하세요. 전입신고일이 근저당보다 앞서면 대항력이 있습니다. 법원 매각물건명세서에도 세입자 현황이 기재되어 있으니 함께 확인하세요.',
      },
      {
        question: '대항력 있는 세입자의 보증금은 누가 부담하나요?',
        answer:
          '대항력 있는 세입자가 배당에서 보증금을 받지 못했다면 <strong>매수인이 보증금 반환 의무</strong>를 승계합니다. 이 금액은 낙찰가에서 사실상 차감해야 하므로, 입찰 전에 가능한 한 계산에 포함해야 합니다.',
      },
      {
        question: '인도명령은 언제까지 신청해야 하나요?',
        answer:
          '민사집행법 제136조에 따라 <strong>매각대금 납부일로부터 6개월 이내</strong>에 신청해야 합니다. 기한을 넘기면 별도의 명도소송을 제기해야 하므로 낙찰 즉시 신청을 준비하세요.',
      },
      {
        question: '세입자가 이사비를 과도하게 요구하면 어떻게 하나요?',
        answer:
          '대항력이 없는 세입자라면 법적 퇴거 의무가 있으므로, <strong>적정 이사비(200~500만원)</strong>를 제시하되 과도한 요구에는 응하지 않아도 됩니다. 합의 불발 시 인도명령으로 빠르게 해결할 수 있습니다.',
      },
      {
        question: '경매 물건에 세입자가 여러 명이면 어떻게 하나요?',
        answer:
          '세입자마다 <strong>전입일·확정일자가 다르므로 대항력 유무를 개별적으로 판단</strong>해야 합니다. 매각물건명세서에 각 세입자의 현황이 기재되어 있으니, 입찰 전에 모든 세입자의 대항력과 배당 예상액을 계산하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 진단', href: '/diagnosis/real-estate-auction' },
      { label: '경매 입찰 절차와 준비 방법', href: '/spoke/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 낙찰 후 명도소송 절차', href: '/spoke/real-estate-auction/auction-eviction-lawsuit-process' },
      { label: '경매 권리분석 체크리스트', href: '/spoke/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '전세보증금 반환 청구', href: '/spoke/jeonse-fraud/jeonse-fraud-auction-bidding-guide' },
    ],
  },
  {
    domain: 'child-sex-crime',
    slug: 'penalty-for-not-reporting',
    keyword: '아동성범죄 신고 안 하면 처벌',
    questionKeyword: '아동성범죄를 알게 됐는데 신고 안 하면 처벌받나요?',
    ctaKeyword: '아동성범죄 신고의무 처벌',
    type: 'Q&A형',
    perspective: 'reporter',
    meta: {
      title: '아동성범죄 신고 안 하면? 의무신고자 과태료 3가지 | 로앤가이드',
      description: '아동학대나 성범죄를 목격했는데 신고하지 않으면 어떤 처벌을 받을까요? 의무신고자 범위와 과태료 기준을 지금 확인하세요.',
    },
    intro: '어린이집에서 동료 교사가 아이에게 이상한 행동을 하는 것을 목격했습니다. 확신은 없지만 찜찜한 마음이 가시지 않습니다. 신고해야 할 것 같은데, 괜히 오해였으면 불이익을 받을까 걱정됩니다. 반대로 신고하지 않았다가 나중에 처벌받는 건 아닌지 불안합니다. 아동성범죄 신고 의무와 미신고 시 처벌 기준을 정리했습니다.',
    sections: [
      {
        title: '첫째, 아동학대·성범죄 의무신고자 범위를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">교사, 의료인, 사회복지사 등 25개 직군이 의무신고자에 해당할 소지가 있습니다</strong></p>\n<p>아동복지법 제26조 및 아동학대범죄의 처벌 등에 관한 특례법 제10조에 따라, 직무상 아동학대를 알게 된 <strong>의무신고자</strong>는 즉시 신고해야 합니다. 교사, 유치원·어린이집 종사자, 의사·간호사, 사회복지사, 성폭력 상담원, 구급대원, 청소년 시설 종사자 등 <strong>25개 직군</strong>이 해당됩니다.</p>\n<p>아동·청소년의 성보호에 관한 법률 제34조는 아동·청소년 대상 <strong>성범죄 의심 사실</strong>을 알게 된 기관·시설 종사자에게도 신고 의무를 부과하고 있습니다. "확실하지 않아서"라는 이유로 신고를 미루면 오히려 <strong>과태료 부과 대상</strong>이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">의무신고자: 교사, 의료인, 사회복지사, 구급대원, 청소년 시설 종사자 등 25개 직군</blockquote>',
      },
      {
        title: '둘째, 신고하지 않으면 과태료와 형사처벌을 받을 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">미신고 시 최대 1,000만원의 과태료가 부과됩니다</strong></p>\n<p>아동학대범죄의 처벌 등에 관한 특례법 제63조에 따라, 의무신고자가 정당한 사유 없이 신고를 하지 않으면 <strong>1,000만원 이하의 과태료</strong>가 부과됩니다. 2020년 법 개정으로 과태료 상한이 500만원에서 1,000만원으로 인상되었습니다.</p>\n<p>특히 아동에 대한 성범죄가 발생했음을 알면서 신고하지 않은 경우, 아동복지법 제75조에 따라 <strong>별도의 과태료</strong>가 추가될 수 있습니다. 단순 과태료뿐 아니라, 미신고로 인해 아동에게 추가 피해가 발생하면 <strong>업무상 과실치상</strong> 등 형사 책임을 질 수도 있습니다.</p>\n<p style="margin-top:12px;padding:10px 14px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-radius:8px;font-size:0.95em"><strong style="color:#d4a017">💬 신고 의무 여부가 불확실하다면 AI로 먼저 확인하세요</strong> → <a href="/diagnosis/child-sex-crime" style="color:#1e3a5f;font-weight:bold">무료 진단 시작</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">과태료: 최대 1,000만원 | 추가 피해 발생 시 형사 책임 가능</blockquote>',
      },
      {
        title: '셋째, 신고 방법과 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">112 또는 아동보호전문기관(1577-0199)으로 즉시 신고하세요</strong></p>\n<p>아동학대 신고는 <strong>112(경찰)</strong> 또는 <strong>아동보호전문기관(1577-0199)</strong>으로 전화하면 됩니다. 아동·청소년 성범죄의 경우 <strong>117(여성긴급전화)</strong>로도 신고할 수 있습니다. 신고 시에는 ①아동의 이름·나이·주소, ②학대 의심 사실, ③가해자 정보를 알려주세요.</p>\n<p>가능한 한 <strong>확증</strong>이 있어야 신고할 수 있는 것이 아닙니다. "의심"만으로도 신고 가능하며, 신고 내용이 사실과 다르더라도 <strong>고의가 아닌 한 불이익을 받지 않습니다</strong>(아동학대범죄의 처벌 등에 관한 특례법 제10조 제3항). 신고자의 신원은 법적으로 보호됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 경로: 112 | 1577-0199 | 117 | 의심만으로 신고 가능, 신고자 보호</blockquote>',
      },
      {
        title: '넷째, 일반인(비의무신고자)도 신고할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">의무신고자가 아니더라도 누구나 아동학대를 신고할 수 있습니다</strong></p>\n<p>아동복지법 제25조에 따라 <strong>누구든지</strong> 아동학대 의심 사실을 신고할 수 있습니다. 의무신고자가 아닌 일반인이 신고하지 않았다고 해서 과태료가 부과되지는 않지만, 주변의 아동이 위험에 처해 있다면 <strong>적극적으로 신고하는 것이 아동을 보호하는 첫걸음</strong>입니다.</p>\n<p>익명 신고도 가능하며, 신고 후에는 아동보호전문기관이 현장 조사를 진행합니다. 현장 조사 결과에 따라 <strong>아동 격리 조치, 가해자 분리, 피해 아동 보호 조치</strong> 등이 이루어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">일반인: 과태료 없음, 단 누구나 신고 가능 | 익명 신고 OK</blockquote>',
      },
      {
        title: '다섯째, 의무신고 교육을 매년 이수해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">의무신고자는 매년 1시간 이상의 신고의무 교육을 받아야 합니다</strong></p>\n<p>아동학대범죄의 처벌 등에 관한 특례법 제10조의2에 따라, 의무신고자와 그 소속 기관의 장은 <strong>매년 1시간 이상</strong> 아동학대 신고의무에 관한 교육을 실시해야 합니다. 교육을 실시하지 않은 기관의 장에게는 <strong>300만원 이하의 과태료</strong>가 부과됩니다.</p>\n<p>교육 내용에는 ①아동학대의 정의와 유형, ②신고 절차와 방법, ③신고자 보호 제도가 포함됩니다. 중앙아동보호전문기관 홈페이지에서 <strong>온라인 무료 교육</strong>을 이수할 수 있으니, 교육 이수 여부를 지금 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">교육: 매년 1시간 이상 필수 | 미실시 기관 → 과태료 300만원</blockquote>',
      },
    ],
    cases: [
      {
        title: '아동에 대한 성적 학대행위의 기수 시점 — 대법원 2025도3890',
        summary:
          '대법원 2025도3890 사건(2025.07.18)에서 법원은 행위자가 통신매체를 통해 아동에게 성적 수치심을 주는 메시지를 전송한 경우, 아동이 이를 현실적으로 인식하지 못했더라도 객관적으로 접할 수 있는 상태에 이르렀다면 아동복지법 위반죄의 기수가 성립한다고 판시했습니다.',
        takeaway:
          '아동에 대한 성적 학대는 피해 아동이 인식하지 못한 상태에서도 범죄가 성립할 수 있습니다. 의심 행위를 목격하면 아동이 피해를 인지하기 전에 즉시 신고하세요.',
      },
    ],
    faq: [
      {
        question: '의심일 뿐인데 신고해도 되나요?',
        answer:
          '<strong>확증이 없어도 의심만으로 신고할 수 있습니다.</strong> 아동학대범죄의 처벌 등에 관한 특례법 제10조 제3항은 신고 내용이 사실과 다르더라도 고의가 아닌 한 신고자에게 불이익을 주지 못하도록 규정하고 있습니다.',
      },
      {
        question: '신고했는데 오해였으면 처벌받나요?',
        answer:
          '선의의 신고는 <strong>처벌 대상이 아닙니다</strong>. 다만 허위 사실을 알면서 고의로 신고한 경우에는 무고죄(형법 제156조)가 성립할 수 있으므로, 자신이 인지한 사실 그대로만 전달하세요.',
      },
      {
        question: '학원 강사도 의무신고자인가요?',
        answer:
          '<strong>네, 학원 종사자도 의무신고자에 포함됩니다.</strong> 아동복지법 시행령에서 정한 25개 직군에는 학원·교습소 종사자, 체육시설 종사자 등도 포함되어 있습니다.',
      },
      {
        question: '의무신고 과태료는 누구에게 부과되나요?',
        answer:
          '신고 의무를 이행하지 않은 <strong>해당 의무신고자 개인</strong>에게 부과됩니다. 소속 기관의 지시로 신고하지 않았더라도 개인에게 과태료가 부과될 수 있으므로, 기관의 압력에 상관없이 신고해야 합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '아동성범죄 진단', href: '/diagnosis/child-sex-crime' },
      { label: '아동성범죄 의무신고 절차', href: '/spoke/child-sex-crime/mandatory-reporting-procedure' },
      { label: '디지털 성범죄 피해 대응', href: '/guide/digital-sex-crime/deepfake-pornography-report-removal' },
      { label: '아동학대 신고 후 절차', href: '/guide/child-sex-crime' },
      { label: '성범죄 피해자 지원 제도', href: '/guide/sex-crime/sexual-assault-procedure-trial' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'group-chat-bullying-qualification',
    keyword: '카카오톡 단톡방 따돌림 학교폭력 해당',
    questionKeyword: '카카오톡 단체방에서 따돌림 당하면 학교폭력인가요?',
    ctaKeyword: '단톡방 따돌림 학교폭력',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '카카오톡 단톡방 따돌림, 학교폭력 해당 여부 3가지 기준 | 로앤가이드',
      description: '아이가 카카오톡 단체방에서 왕따를 당하고 있는데 학교폭력에 해당하는지 모르겠나요? 판단 기준 3가지와 신고 방법을 지금 확인하세요.',
    },
    intro: '아이의 카카오톡 단체 채팅방에서 특정 아이만 대화에서 제외하거나, 비하 발언을 하거나, 단체방에서 강제 퇴장시키는 일이 반복되고 있습니다. 아이는 학교 가기 싫다고 합니다. 이것이 학교폭력에 해당하는 건지, 신고하면 조치를 받을 수 있는 건지 궁금합니다. 온라인 따돌림이 학교폭력으로 인정되는 기준과 대응 방법을 정리했습니다.',
    sections: [
      {
        title: '첫째, 온라인 따돌림도 학교폭력에 해당할 소지가 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법은 사이버 따돌림을 명시적으로 규정하고 있습니다</strong></p>\n<p>학교폭력예방 및 대책에 관한 법률 제2조 제1호의2에서 <strong>"사이버 따돌림"</strong>이란 인터넷·휴대전화 등 정보통신기기를 이용하여 학생들이 특정 학생을 대상으로 지속적·반복적으로 심리적 공격을 가하거나, 특정 학생에 관한 개인정보·허위사실을 유포하여 상대방이 고통을 느끼도록 하는 모든 행위를 말합니다.</p>\n<p>카카오톡 단체 채팅방에서 특정 학생을 <strong>반복적으로 제외하거나, 비하 발언을 하거나, 강제 퇴장</strong>시키는 행위는 사이버 따돌림에 해당할 소지가 있습니다. 오프라인에서 직접 폭력을 행사하지 않았더라도 <strong>온라인에서의 반복적 배제와 공격</strong>은 법적으로 학교폭력입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">근거: 학교폭력예방법 제2조 제1호의2 "사이버 따돌림" | 반복적 배제·비하 = 학교폭력</blockquote>',
      },
      {
        title: '둘째, 학교폭력으로 인정되려면 3가지 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">지속성, 반복성, 피해 학생의 고통이 핵심 판단 기준입니다</strong></p>\n<p>사이버 따돌림이 학교폭력으로 인정되려면 ①<strong>지속성</strong>(일회성이 아닌 일정 기간 반복), ②<strong>집단성</strong>(다수의 학생이 참여하거나 묵인), ③<strong>피해 학생의 고통</strong>(정서적·심리적 피해가 실제 발생)이라는 3가지 요건이 필요합니다.</p>\n<p>단 한 번의 비하 발언은 학교폭력으로 인정되기 어려울 수 있지만, <strong>2~3회 이상 반복</strong>되었거나 여러 학생이 동조한 경우에는 충분히 학교폭력에 해당할 소지가 있습니다. 아이의 <strong>수면 장애, 등교 거부, 식욕 저하</strong> 등 구체적 피해 증상이 있다면 가능한 한 기록해두세요.</p>\n<p style="margin-top:12px;padding:10px 14px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-radius:8px;font-size:0.95em"><strong style="color:#d4a017">💬 우리 아이 상황이 학교폭력에 해당하는지 확인하기</strong> → <a href="/diagnosis/school-violence" style="color:#1e3a5f;font-weight:bold">무료 진단 시작</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3요건: ①지속성 ②집단성 ③피해 학생의 실제 고통 | 2~3회 반복 시 인정 가능</blockquote>',
      },
      {
        title: '셋째, 증거를 체계적으로 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">카카오톡 대화 내용은 삭제되기 전에 즉시 캡처하세요</strong></p>\n<p>카카오톡 단체 채팅방의 <strong>전체 대화 내용을 스크린샷</strong>으로 저장하세요. 캡처 시 ①<strong>날짜와 시간</strong>이 보이도록, ②<strong>발언자 닉네임</strong>이 식별 가능하도록, ③<strong>대화 전후 맥락</strong>이 드러나도록 넉넉히 캡처하는 것이 중요합니다.</p>\n<p>카카오톡의 <strong>"대화 내보내기"</strong> 기능을 사용하면 텍스트 파일로도 저장할 수 있습니다. 강제 퇴장된 경우에는 퇴장 전 다른 참여자에게 <strong>화면 녹화를 부탁</strong>해두면 유용한 증거가 됩니다. 아이가 겪은 <strong>심리적 변화(일기, 상담 기록)</strong>도 함께 보관하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 스크린샷(날짜+발언자+맥락) + 대화 내보내기 + 심리 변화 기록</blockquote>',
      },
      {
        title: '넷째, 학교에 학교폭력 신고를 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교 또는 117 학교폭력 신고센터에 접수하면 학폭위가 소집됩니다</strong></p>\n<p>학교 <strong>학교폭력 담당교사</strong>에게 직접 신고하거나, <strong>117 학교폭력 신고센터</strong>에 전화·문자·앱으로 신고할 수 있습니다. 신고 시 수집한 증거(대화 캡처, 아이의 진술)를 함께 제출하세요.</p>\n<p>신고가 접수되면 학교 전담기구가 <strong>사실 확인 조사</strong>를 진행하고, 그 결과를 교육지원청 <strong>학교폭력대책심의위원회(학폭위)</strong>에 보고합니다. 학폭위에서는 피해 학생 보호 조치와 가해 학생 조치를 심의·결정합니다. 보호자도 <strong>심의에 출석하여 의견을 진술</strong>할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 학교 담당교사 또는 117 | 절차: 신고 → 전담기구 조사 → 학폭위 심의</blockquote>',
      },
      {
        title: '다섯째, 피해 학생 보호 조치를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교에 즉각적인 보호 조치를 요구할 수 있습니다</strong></p>\n<p>학교폭력예방법 제16조에 따라 피해 학생에게는 ①<strong>심리상담 및 조언</strong>, ②<strong>일시보호</strong>, ③<strong>치료를 위한 요양</strong>, ④<strong>학급교체</strong>, ⑤<strong>전학 권고</strong> 등의 보호 조치가 내려질 수 있습니다. 이 중 <strong>심리상담과 치료비</strong>는 가해 학생 측이 부담합니다.</p>\n<p>학폭위 결정 전이라도 <strong>긴급한 경우 학교장이 우선 보호 조치</strong>를 취할 수 있습니다. 아이가 등교를 거부하는 상황이라면 즉시 학교에 <strong>"우선 보호 조치"</strong>를 요청하세요. 피해 학생의 출석은 학교장 판단으로 <strong>출석 인정</strong>이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보호 조치: 심리상담, 일시보호, 치료 요양, 학급교체 | 치료비 가해 측 부담</blockquote>',
      },
    ],
    cases: [
      {
        title: '학교폭력 처분에 대한 집행정지와 학교생활기록부 삭제 — 대법원 2025무565',
        summary:
          '대법원 2025무565 사건(2025.09.09)에서 법원은 학교폭력 관련 조치에 대한 집행정지결정이 있으면 그 즉시 학교생활기록부에 기재된 조치사항을 삭제해야 하며, "집행정지 중" 등의 문구만 부기하는 것은 삭제에 준하는 조치로 볼 수 없다고 판시했습니다.',
        takeaway:
          '학교폭력 조치에 불복하여 집행정지를 받으면 학생부 기재가 즉시 삭제됩니다. 가해 학생 측의 부당한 조치에 대해서는 적극적으로 불복 절차를 활용하세요.',
      },
    ],
    faq: [
      {
        question: '카카오톡 단톡방에서 강퇴당한 것도 학교폭력인가요?',
        answer:
          '반복적으로 강퇴하거나 새 단톡방을 만들어 <strong>특정 학생만 의도적으로 제외</strong>하는 행위는 사이버 따돌림에 해당할 수 있습니다. 1회성이 아닌 지속적·의도적 배제가 핵심 판단 기준입니다.',
      },
      {
        question: '가해 학생이 "장난이었다"고 하면 어떻게 되나요?',
        answer:
          '학교폭력의 성립 여부는 <strong>가해자의 의도가 아닌 피해자가 느끼는 고통</strong>을 기준으로 판단합니다. 가해 학생이 장난이라고 주장해도 피해 학생이 실제로 고통을 받았다면 학교폭력에 해당할 소지가 있습니다.',
      },
      {
        question: '증거가 삭제되었으면 신고할 수 없나요?',
        answer:
          '증거가 삭제되었더라도 <strong>신고는 가능합니다</strong>. 목격 학생의 진술, 아이의 심리 변화 기록 등 간접 증거도 활용됩니다. 다만 증거가 남아 있을 때 신고하는 것이 훨씬 유리합니다.',
      },
      {
        question: '학폭위에서 어떤 조치를 받을 수 있나요?',
        answer:
          '가해 학생에게는 <strong>1호(서면사과)부터 9호(퇴학)까지</strong> 조치가 가능합니다. 사이버 따돌림의 경우 대체로 2호(접촉 금지)~5호(특별교육) 수준의 조치가 내려지며, 심각한 경우 전학 조치도 가능합니다.',
      },
      {
        question: '학교폭력 신고하면 아이에게 불이익이 있나요?',
        answer:
          '<strong>피해 학생에게는 불이익이 없습니다.</strong> 피해 학생의 보호 조치는 학생부에 기재되지 않으며, 출석 인정도 가능합니다. 오히려 신고하지 않으면 피해가 지속될 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
      { label: '학교폭력 심의위원회 절차', href: '/spoke/school-violence/school-violence-committee-procedure' },
      { label: 'SNS 사이버불링 대응법', href: '/spoke/school-violence/school-violence-social-media-bullying' },
      { label: '학교폭력 조치 불복 절차', href: '/spoke/school-violence/school-violence-measures-appeal' },
      { label: '학교폭력 가해자 지목 시 대응', href: '/spoke/school-violence/school-violence-accused-parent-response' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'accused-as-perpetrator-parent-response',
    keyword: '학교폭력 가해자 지목 부모 초기 대응',
    questionKeyword: '아이가 학교폭력 가해자로 지목됐는데 부모가 먼저 해야 할 일이 뭔가요?',
    ctaKeyword: '학교폭력 가해자 부모 초기 대응',
    type: '상황형',
    perspective: 'perpetrator',
    meta: {
      title: '학교폭력 가해자 지목, 부모가 72시간 안에 할 5가지 | 로앤가이드',
      description: '아이가 학교폭력 가해자로 지목되어 당황하셨나요? 학폭위 전 72시간 안에 부모가 반드시 해야 할 증거 보전과 진술 준비를 지금 확인하세요.',
    },
    intro: '학교에서 전화가 왔습니다. 아이가 학교폭력 가해자로 지목되었고, 곧 학폭위가 열릴 예정이라고 합니다. 아이는 억울하다고 하고, 상대측 부모는 이미 증거를 정리하고 있습니다. 학폭위까지 시간이 얼마 없는데 무엇부터 해야 할지 모르겠습니다. 학폭위가 열리기 전 72시간 안에 부모가 가능한 한 해야 할 초기 대응을 정리했습니다.',
    sections: [
      {
        title: '첫째, 아이의 진술을 감정 없이 정확하게 기록하세요',
        content:
          '<p><strong style="color:#1e3a5f">비난보다 사실 확인이 먼저입니다</strong></p>\n<p>아이에게 <strong>"네가 뭘 잘못했느냐"</strong>고 다그치면 아이가 위축되어 정확한 사실을 말하지 못합니다. "무슨 일이 있었는지 차근차근 이야기해줄래?"라고 <strong>차분하게</strong> 물어보세요. ①<strong>사건 경위</strong>(언제, 어디서, 누가 있었는지), ②<strong>자녀의 행위</strong>, ③<strong>상대 학생의 행위</strong>를 시간순으로 정리하세요.</p>\n<p>아이의 진술을 <strong>그대로 받아적되, 해석이나 의견을 덧붙이지 마세요</strong>. 진술 내용은 학폭위에서 핵심 자료로 사용됩니다. 아이의 진술이 일관성 있게 유지되는 것이 중요하므로, <strong>1회만 차분하게 확인</strong>하고 반복 추궁은 삼가세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 비난 금지 → 차분한 질문 → 시간순 기록 → 1회만 확인</blockquote>',
      },
      {
        title: '둘째, 관련 증거를 72시간 안에 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">카카오톡 대화, CCTV, 목격자 진술을 빠르게 수집하세요</strong></p>\n<p>아이의 휴대전화에서 <strong>카카오톡 대화 내용, 문자 메시지</strong>를 캡처하세요. "대화 내보내기" 기능으로 텍스트 파일로도 저장해두세요. 사건 발생 장소에 <strong>CCTV</strong>가 있다면 학교에 보존을 요청하세요. CCTV는 통상 <strong>30일 이내에 삭제</strong>되므로 시간이 중요합니다.</p>\n<p>사건 당시 현장에 있었던 <strong>목격 학생의 이름과 연락처</strong>를 파악하세요. 목격 학생이 자녀에게 유리한 진술을 해줄 수 있다면, <strong>서면 진술서</strong>를 받아두는 것이 좋습니다. 다만 다른 학생에게 허위 진술을 부탁하는 것은 절대 금물입니다.</p>\n<p style="margin-top:12px;padding:10px 14px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-radius:8px;font-size:0.95em"><strong style="color:#d4a017">💬 혐의를 받고 있다면, AI가 대응 전략을 정리해드립니다</strong> → <a href="/diagnosis/school-violence" style="color:#1e3a5f;font-weight:bold">무료 진단 시작</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">72시간 체크: 카톡 캡처 + CCTV 보존 요청 + 목격 학생 진술 확보</blockquote>',
      },
      {
        title: '셋째, 학교 전담기구 조사에 대비하세요',
        content:
          '<p><strong style="color:#1e3a5f">전담기구 조사가 학폭위 결과를 좌우합니다</strong></p>\n<p>학교 전담기구는 신고 접수 후 <strong>사실 확인 조사</strong>를 진행합니다. 이 조사에서 아이가 <strong>어떻게 진술하느냐</strong>가 학폭위 심의 결과에 직접적인 영향을 미칩니다. 조사 전에 아이와 함께 ①사실관계, ②경위, ③반성 여부를 정리하세요.</p>\n<p>전담기구 조사 시 <strong>보호자도 동석을 요청</strong>할 수 있습니다. 동석이 허용되지 않더라도, 조사 전후에 아이와 <strong>충분히 대화</strong>하세요. 아이가 진술에서 일관성을 유지하되, 사실과 다른 내용을 말하지 않도록 안내하세요. <strong>거짓 진술은 오히려 더 불리한 결과</strong>를 초래합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전담기구 조사: 보호자 동석 가능 | 일관된 진술 + 사실 기반 답변 준비</blockquote>',
      },
      {
        title: '넷째, 피해 학생 측과의 합의 가능성을 판단하세요',
        content:
          '<p><strong style="color:#1e3a5f">학폭위 전 합의는 조치 경감에 가장 큰 영향을 미칩니다</strong></p>\n<p>아이에게 책임이 있는 부분이 확인되었다면, 피해 학생 보호자에게 <strong>진심 어린 사과</strong>를 전하세요. 합의 시에는 ①<strong>사과 내용</strong>, ②<strong>치료비 등 피해 보상</strong>, ③<strong>재발 방지 약속</strong>을 포함한 합의서를 작성하세요.</p>\n<p>합의서는 학폭위에 제출할 수 있으며, <strong>화해 여부</strong>는 조치 수위를 결정하는 핵심 요소입니다. 다만 아이가 억울한 부분이 있다면 <strong>무조건적인 합의보다 사실관계를 먼저 정리</strong>하세요. 합의와 사실관계 다툼은 병행할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의서: 사과 + 치료비 보상 + 재발 방지 | 학폭위에 제출 가능</blockquote>',
      },
      {
        title: '다섯째, 학폭위 출석 준비와 불복 절차를 미리 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">학폭위에서 보호자의 의견 진술이 결과를 바꿀 수 있습니다</strong></p>\n<p>학폭위 심의에 <strong>보호자가 출석</strong>하여 의견을 진술할 수 있습니다. 출석 시에는 ①수집한 증거, ②아이의 진술서, ③합의서(합의한 경우), ④아이의 반성문을 준비하세요. 감정적 대응보다 <strong>사실에 기반한 논리적 진술</strong>이 효과적입니다.</p>\n<p>학폭위 결과에 불복하려면 통보받은 날로부터 <strong>15일 이내에 행정심판</strong>을 청구할 수 있습니다. 4호(사회봉사) 이상의 조치는 <strong>학교생활기록부에 기재</strong>되며, 자녀의 진학에 영향을 줄 수 있으므로 신중하게 대응하세요. 필요시 <strong>학교폭력 전문 변호사</strong>의 조력을 받는 것도 고려하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">출석 준비: 증거 + 진술서 + 합의서 + 반성문 | 불복: 15일 내 행정심판</blockquote>',
      },
    ],
    cases: [
      {
        title: '학교폭력 자치위원회 구성 하자로 처분 무효 — 창원지법 2018구단12153',
        summary:
          '창원지법 2018구단12153 사건(2019.03.13)에서 법원은 학교폭력대책자치위원회 학부모위원 선출이 학부모전체회의가 아닌 비정규 절차로 이루어진 경우, 위원회 구성에 중대하고 명백한 하자가 있어 그에 따른 처분이 무효라고 판시했습니다.',
        takeaway:
          '학폭위 절차에 하자가 있으면 처분 자체가 무효가 될 수 있습니다. 학폭위의 구성·소집·심의 과정에서 절차적 문제가 없는지 꼼꼼히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '학폭위에 변호사를 대리인으로 보낼 수 있나요?',
        answer:
          '학폭위 심의에 <strong>변호사가 보호자와 함께 출석하여 조언</strong>하는 것은 가능합니다. 다만 변호사가 보호자를 대리하여 단독으로 출석하는 것은 인정되지 않으므로, 보호자가 가능한 한 직접 참석해야 합니다.',
      },
      {
        question: '상대 학생이 먼저 시비를 걸었는데도 가해자로 처리되나요?',
        answer:
          '쌍방 과실인 경우 <strong>양쪽 모두 가해학생과 피해학생으로 동시에 인정</strong>될 수 있습니다. 상대 학생이 먼저 시비를 건 사실을 입증하면 조치 수위를 경감받을 수 있으므로, 관련 증거를 확보하세요.',
      },
      {
        question: '학생부에 기재되면 언제 삭제되나요?',
        answer:
          '<strong>1~3호 조치는 졸업 즉시</strong>, 4~7호 조치는 졸업 후 <strong>2년 뒤</strong> 심의를 거쳐 삭제 여부가 결정됩니다. 8호(전학)와 9호(퇴학)는 졸업 후 <strong>4년 뒤</strong>에 심의합니다.',
      },
      {
        question: '아이가 잘못한 게 맞는데 조치를 줄일 수 있나요?',
        answer:
          '피해 학생과의 <strong>합의, 진심 어린 반성문, 재발 방지 노력</strong>이 확인되면 조치 수위가 경감될 수 있습니다. 학폭위 심의 전 피해 측과 합의하고, 아이의 반성문을 제출하세요.',
      },
      {
        question: '학폭위 결과가 부당하면 어떻게 불복하나요?',
        answer:
          '조치 통보일로부터 <strong>15일 이내에 행정심판</strong>을 청구할 수 있습니다. 행정심판은 시·도교육청 행정심판위원회에서 진행되며, 절차적 하자나 조치의 과중성을 주장할 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
      { label: '학교폭력 심의위원회 절차', href: '/spoke/school-violence/school-violence-committee-procedure' },
      { label: '학교폭력 조치 불복(행정심판)', href: '/spoke/school-violence/school-violence-measures-appeal' },
      { label: '학교폭력 가해학생 제재 방어', href: '/spoke/school-violence/perpetrator-sanction-defense' },
      { label: '학교폭력 허위 신고 대응법', href: '/spoke/school-violence/school-violence-false-report-response' },
    ],
  },
];
