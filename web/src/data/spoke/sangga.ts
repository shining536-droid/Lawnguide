import { SpokePage } from '../spoke-pages';

export const sanggaPages: SpokePage[] = [
  {
    domain: 'sangga',
    slug: 'commercial-lease-key-money',
    keyword: '상가 권리금 못 받았을 때 대응 방법',
    questionKeyword: '상가 권리금을 못 받았는데 어떻게 해야 하나요?',
    ctaKeyword: '상가 권리금 대응',
    type: '상황형',
    meta: {
      title: '상가 권리금 못 받았을 때 대응 방법 | 로앤가이드',
      description: '상가 권리금을 회수하지 못했을 때 법적 근거, 손해배상 청구 절차, 증거 준비 방법을 정리했습니다.',
    },
    intro: '5년 넘게 운영한 가게를 정리하려는데, 임대인이 새 임차인을 거부하면서 권리금을 받을 수 없게 됐습니다. 그동안 쌓아온 단골과 인테리어 비용을 고스란히 날리게 생겼습니다. 상가임대차보호법이 보호하는 권리금 회수 기회와 대응 방법을 정리했습니다.',
    timelineSteps: ['권리금 보호 확인', '임대인 방해 행위 확인', '내용증명 발송', '손해배상 청구'],
    sections: [
      {
        title: '상가임대차보호법은 권리금 회수 기회를 보장합니다',
        content:
          '<p><strong style="color:#1e3a5f">임대인은 정당한 사유 없이 권리금 회수를 방해할 수 없습니다</strong></p>\n<p><strong>상가임대차보호법 제10조의4</strong>에 따라, 임대차 기간이 끝나기 6개월 전부터 계약 종료 시까지 임차인은 새로운 임차인으로부터 권리금을 받을 수 있습니다. 임대인이 정당한 사유 없이 이를 방해하면 <strong>손해배상 책임</strong>을 집니다.</p>\n<p>다만 임대차 기간이 <strong>10년을 초과</strong>한 경우에는 권리금 보호가 적용되지 않을 수 있으니 계약 기간을 먼저 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 임대인의 부당한 권리금 회수 방해 → 손해배상 청구 가능</blockquote>',
      },
      {
        title: '임대인의 방해 행위 유형을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">4가지 유형의 방해 행위가 금지됩니다</strong></p>\n<p>①새 임차인과 임대차계약 <strong>체결을 거절</strong>하는 행위, ②새 임차인에게 현저히 높은 차임을 요구하는 행위, ③새 임차인에게 권리금 수수를 방해하는 행위, ④그 밖에 정당한 사유 없이 임차인의 권리금 회수를 방해하는 행위입니다.</p>\n<p>임대인이 "직접 사용하겠다"고 하면서 거절하는 경우, <strong>실제로 직접 사용할 의사</strong>가 있는지가 핵심 쟁점이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방해 유형: 계약 거절, 과도한 차임 요구, 권리금 수수 방해, 기타 부당한 방해</blockquote>',
      },
      {
        title: '내용증명으로 공식 의사를 전달하세요',
        content:
          '<p><strong style="color:#1e3a5f">임대인에게 신규 임차인 주선 사실을 서면으로 통지하세요</strong></p>\n<p>새로운 임차인을 찾아 임대인에게 <strong>내용증명</strong>으로 통지합니다. "신규 임차인 ○○○을 주선하오니 임대차계약을 체결해 주시기 바랍니다"라는 내용을 보내세요.</p>\n<p>임대인의 거절 의사가 확인되면 이것이 <strong>손해배상 청구의 증거</strong>가 됩니다. 새 임차인의 자격 요건(보증금 지급 능력 등)도 함께 소명해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 내용증명 발송, 신규 임차인 자격 소명, 거절 증거 확보</blockquote>',
      },
      {
        title: '손해배상 청구로 권리금을 회수하세요',
        content:
          '<p><strong style="color:#1e3a5f">임대인을 상대로 권리금 상당의 손해배상을 청구할 수 있습니다</strong></p>\n<p>임대인의 방해 행위가 확인되면 <strong>민사소송</strong>으로 손해배상을 청구합니다. 손해액은 신규 임차인이 지급하기로 한 권리금과 임대차 종료 당시의 권리금 중 <strong>낮은 금액</strong>을 기준으로 합니다.</p>\n<p>소송 전 <strong>대한법률구조공단</strong>이나 대한상사중재원의 분쟁조정을 먼저 활용할 수도 있습니다. 조정이 성립하면 소송 없이 해결할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 분쟁조정 시도 → 불성립 시 민사소송으로 손해배상 청구</blockquote>',
      },
    ],
    cases: [
      {
        title: '임대인이 직접 사용을 명목으로 거절했으나 손해배상이 인정된 사례',
        summary:
          '관련 사례에서도 임대인이 "직접 사용하겠다"며 신규 임차인과의 계약을 거절했으나, 실제로는 제3자에게 임대한 사실이 드러나 손해배상이 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 임대인의 직접 사용 주장이 진실인지 확인하고, 이후 실제 사용 현황을 기록해두세요.',
      },
      {
        title: '권리금 감정 평가를 통해 손해액이 산정된 사례',
        summary:
          '관련 사례에서도 권리금 액수에 대한 다툼이 있어 법원이 감정인을 선임하여 영업권, 시설권리금 등을 종합 평가한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 매출 자료, 인테리어 투자 내역, 단골 고객 현황 등을 정리해두세요.',
      },
    ],
    faq: [
      {
        question: '권리금 보호는 모든 상가에 적용되나요?',
        answer: '<strong>환산보증금</strong>이 일정 금액 이하인 상가에만 적용됩니다. 다만 2018년 개정으로 대부분의 상가에 적용됩니다.',
      },
      {
        question: '임대차 기간이 10년을 넘으면 권리금 보호가 안 되나요?',
        answer: '전체 임대차 기간이 <strong>10년을 초과</strong>하면 권리금 보호가 적용되지 않을 수 있습니다.',
      },
      {
        question: '권리금 계약서가 없으면 청구가 안 되나요?',
        answer: '계약서가 없어도 <strong>실제 권리금 수수 사실</strong>을 입증하면 청구할 수 있습니다. 계좌이체 내역 등이 증거가 됩니다.',
      },
      {
        question: '새 임차인을 몇 명이나 주선해야 하나요?',
        answer: '법적으로 정해진 수는 없지만, <strong>1~2명</strong>의 적격한 임차인을 주선하면 됩니다.',
      },
      {
        question: '임대인이 재건축을 이유로 거절하면?',
        answer: '<strong>1년 6개월 이내에 철거·재건축</strong>이 확정된 경우 정당한 사유로 인정될 수 있습니다.',
      },
      {
        question: '손해배상 소송 기간은 얼마나 걸리나요?',
        answer: '통상 <strong>6개월~1년</strong> 정도 소요됩니다. 조정을 먼저 시도하면 더 빨리 해결할 수 있습니다.',
      },
      {
        question: '권리금 분쟁조정은 어디서 하나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)이나 상가건물임대차분쟁조정위원회를 이용하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상가 권리금 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/sangga',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상가임대차 진단', href: '/diagnosis/sangga' },
      { label: '상가 계약 갱신 거절 시 대처법', href: '/guide/sangga/commercial-lease-renewal-rejection' },
      { label: '상가임대차 보증금 반환 절차', href: '/guide/sangga/commercial-deposit-return-process' },
      { label: '전세보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
    ],
  },
  {
    domain: 'sangga',
    slug: 'commercial-lease-renewal-rejection',
    keyword: '상가 계약 갱신 거절 시 대처법',
    questionKeyword: '상가 계약 갱신을 거절당했는데 어떻게 하나요?',
    ctaKeyword: '상가 갱신 거절 대응',
    type: '상황형',
    meta: {
      title: '상가 계약 갱신 거절 시 대처법 | 로앤가이드',
      description: '상가 계약 갱신 거절 시 임차인의 권리, 갱신요구권 행사 조건, 대응 절차를 정리했습니다.',
    },
    intro: '계약 만료를 앞두고 임대인이 갱신을 거부했습니다. 아직 10년이 안 됐는데 나가야 하는 건지, 보증금은 제대로 돌려받을 수 있는 건지 걱정됩니다. 상가임대차보호법상 갱신요구권과 대응 방법을 정리했습니다.',
    timelineSteps: ['갱신요구권 확인', '거절 사유 검토', '내용증명 발송', '분쟁조정/소송'],
    sections: [
      {
        title: '10년까지 계약 갱신을 요구할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">임차인에게는 최대 10년간 갱신요구권이 있습니다</strong></p>\n<p><strong>상가임대차보호법 제10조</strong>에 따라, 임차인은 최초 임대차 기간을 포함하여 전체 <strong>10년</strong>까지 계약 갱신을 요구할 수 있습니다. 임대인은 법에서 정한 사유가 없으면 이를 거절할 수 없습니다.</p>\n<p>갱신 요구는 임대차 기간 만료 <strong>6개월 전부터 1개월 전</strong>까지 해야 합니다. 이 기간을 놓치면 갱신요구권을 행사할 수 없으니 주의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 전체 10년까지 갱신 가능 | 만료 6개월~1개월 전에 요구</blockquote>',
      },
      {
        title: '임대인의 갱신 거절 사유가 정당한지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">법에서 정한 거절 사유에 해당하는지 따져봐야 합니다</strong></p>\n<p>임대인이 갱신을 거절할 수 있는 사유는 제한적입니다. ①<strong>3기 차임 연체</strong>, ②임차인의 의무 위반, ③상호 합의, ④임대인의 직접 사용(1년 6개월 이상), ⑤철거·재건축 등입니다.</p>\n<p>"직접 사용하겠다"는 거절이 가장 많은데, 실제로 <strong>1년 6개월 이상 직접 사용</strong>해야 합니다. 이를 어기면 손해배상 책임을 집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주요 거절 사유: 3기 차임 연체, 의무 위반, 직접 사용, 철거·재건축</blockquote>',
      },
      {
        title: '갱신요구권을 서면으로 행사하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명으로 갱신 요구 의사를 명확히 전달하세요</strong></p>\n<p>갱신 요구는 반드시 <strong>서면</strong>으로 하세요. 내용증명 우편이 가장 확실합니다. "상가임대차보호법 제10조에 따라 계약 갱신을 요구합니다"라고 명시하세요.</p>\n<p>임대인이 거절하면 그 <strong>거절 사유</strong>를 서면으로 받아두세요. 이후 분쟁조정이나 소송에서 핵심 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 내용증명으로 갱신 요구, 거절 사유 서면 확보</blockquote>',
      },
      {
        title: '부당한 거절이면 분쟁조정이나 소송으로 다투세요',
        content:
          '<p><strong style="color:#1e3a5f">정당한 사유 없는 갱신 거절은 무효입니다</strong></p>\n<p>임대인의 거절 사유가 법에서 정한 사유에 해당하지 않으면 갱신 거절은 <strong>효력이 없습니다</strong>. 이 경우 임대차관계가 동일 조건으로 갱신된 것으로 봅니다.</p>\n<p><strong>상가건물임대차분쟁조정위원회</strong>에 조정을 신청하거나, 법원에 임대차존속확인 소송을 제기할 수 있습니다. 조정은 무료이고 60일 이내에 결과가 나옵니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 분쟁조정 신청(무료, 60일) → 불성립 시 민사소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '임대인의 직접 사용 주장이 부당한 거절로 인정된 사례',
        summary:
          '관련 사례에서도 임대인이 "직접 사용하겠다"며 갱신을 거절했으나, 실제로는 제3자에게 임대하여 부당한 거절로 판단되고 손해배상이 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 임대인의 직접 사용 주장이 진실인지 확인하고, 이후 상가의 실제 사용 현황을 기록해두세요.',
      },
      {
        title: '갱신요구 기간을 놓쳐 권리를 잃은 사례',
        summary:
          '관련 사례에서도 임차인이 갱신 요구 기간(만료 6개월~1개월 전)을 놓쳐 갱신요구권을 행사하지 못한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 계약 만료일을 확인하고, 만료 6개월 전에 반드시 갱신 요구를 하세요.',
      },
    ],
    faq: [
      {
        question: '갱신요구권은 몇 번까지 쓸 수 있나요?',
        answer: '횟수 제한이 아니라 <strong>전체 임대차 기간 10년</strong>까지 갱신을 요구할 수 있습니다.',
      },
      {
        question: '갱신 시 차임(월세)을 올릴 수 있나요?',
        answer: '갱신 시 차임 인상은 <strong>5% 이내</strong>로 제한됩니다.',
      },
      {
        question: '3기 차임 연체란 뭔가요?',
        answer: '차임을 <strong>3회분</strong>에 해당하는 금액만큼 연체한 경우를 말합니다.',
      },
      {
        question: '10년이 지나면 어떻게 되나요?',
        answer: '갱신요구권이 소멸합니다. 다만 <strong>권리금 보호</strong>는 별도로 적용됩니다.',
      },
      {
        question: '묵시적 갱신이 되면 갱신요구권 기간에 포함되나요?',
        answer: '묵시적 갱신 기간도 <strong>전체 10년에 포함</strong>됩니다.',
      },
      {
        question: '임대인이 건물을 팔면 갱신요구권은?',
        answer: '대항력이 있으면 새 소유자에게도 <strong>갱신요구권을 주장</strong>할 수 있습니다.',
      },
      {
        question: '분쟁조정은 어디서 신청하나요?',
        answer: '<strong>상가건물임대차분쟁조정위원회</strong>(법원 소속)에 신청합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상가 계약 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/sangga',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상가임대차 진단', href: '/diagnosis/sangga' },
      { label: '상가 권리금 못 받았을 때 대응 방법', href: '/guide/sangga/commercial-lease-key-money' },
      { label: '상가임대차 보증금 반환 절차', href: '/guide/sangga/commercial-deposit-return-process' },
      { label: '전세보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
    ],
  },
  {
    domain: 'sangga',
    slug: 'commercial-deposit-return-process',
    keyword: '상가임대차 보증금 반환 절차',
    questionKeyword: '상가 보증금을 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '상가 보증금 반환',
    type: '절차형',
    meta: {
      title: '상가임대차 보증금 반환 절차 | 로앤가이드',
      description: '상가 보증금을 돌려받기 위한 내용증명, 임차권등기명령, 지급명령 등 단계별 절차를 정리했습니다.',
    },
    intro: '상가 계약이 끝났는데 임대인이 보증금을 돌려주지 않습니다. 새 세입자가 들어와야 준다고 하거나, 원상복구비를 공제하겠다며 미룹니다. 보증금을 확실하게 돌려받기 위한 법적 절차를 단계별로 정리했습니다.',
    timelineSteps: ['내용증명 발송', '임차권등기명령', '지급명령/소송', '강제집행'],
    sections: [
      {
        title: '내용증명으로 보증금 반환을 공식 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">서면으로 반환 의사를 명확히 전달하세요</strong></p>\n<p>계약 종료 후 보증금을 돌려주지 않으면 <strong>내용증명</strong>을 발송합니다. "계약이 종료되었으니 보증금 ○○만원을 ○일까지 반환해 주시기 바랍니다"라는 내용을 보내세요.</p>\n<p>내용증명은 법적 효력 자체보다 <strong>이후 소송에서 증거</strong>로 활용됩니다. 우체국에서 발송하면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">1단계: 내용증명으로 반환 요구 → 증거 확보</blockquote>',
      },
      {
        title: '임차권등기명령으로 대항력을 유지하세요',
        content:
          '<p><strong style="color:#1e3a5f">이사를 나가도 보증금 반환 권리를 유지할 수 있습니다</strong></p>\n<p>보증금을 받지 못한 채 이사를 나가면 <strong>대항력</strong>을 잃을 수 있습니다. <strong>임차권등기명령</strong>을 법원에 신청하면 이사 후에도 대항력과 우선변제권을 유지할 수 있습니다.</p>\n<p>관할 법원에 신청서, 임대차계약서 사본, 내용증명 사본 등을 제출합니다. 비용은 수만원 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">2단계: 임차권등기명령 신청 → 이사 후에도 대항력 유지</blockquote>',
      },
      {
        title: '지급명령 또는 소액소송으로 판결을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">금액에 따라 지급명령 또는 소액소송을 선택하세요</strong></p>\n<p>보증금이 <strong>3,000만원 이하</strong>이면 소액사건심판(소액소송)이 가능합니다. 1회 변론으로 빠르게 판결을 받을 수 있습니다. 금액이 크면 <strong>지급명령</strong>을 신청하세요. 임대인이 이의하지 않으면 확정판결과 같은 효력이 생깁니다.</p>\n<p>지급명령은 인지대가 소송의 <strong>1/10</strong>이어서 비용도 적게 듭니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3단계: 3,000만원 이하 → 소액소송 | 그 이상 → 지급명령 신청</blockquote>',
      },
      {
        title: '판결 후 강제집행으로 보증금을 회수하세요',
        content:
          '<p><strong style="color:#1e3a5f">판결이 확정되면 강제집행이 가능합니다</strong></p>\n<p>판결이나 지급명령이 확정되면 임대인의 재산에 <strong>강제집행</strong>을 할 수 있습니다. 부동산 경매, 예금 압류, 월세 채권 압류 등이 가능합니다.</p>\n<p>임대인에게 다른 재산이 없으면 <strong>건물 경매</strong>를 통해 보증금을 회수할 수 있습니다. 우선변제권이 있으면 경매 대금에서 먼저 배당받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">4단계: 강제집행 → 부동산 경매, 예금 압류 등으로 회수</blockquote>',
      },
    ],
    cases: [
      {
        title: '임차권등기명령으로 대항력을 유지한 사례',
        summary:
          '관련 사례에서도 임차인이 보증금을 돌려받지 못한 채 이사해야 했으나, 임차권등기명령을 통해 대항력을 유지하고 이후 경매에서 우선 배당받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 이사 전에 반드시 임차권등기명령을 신청하세요.',
      },
      {
        title: '지급명령으로 빠르게 보증금을 회수한 사례',
        summary:
          '관련 사례에서도 지급명령을 신청하여 임대인이 2주 내에 이의하지 않아 확정판결과 같은 효력을 얻고, 예금 압류로 보증금을 회수한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 소송 전에 지급명령을 먼저 시도해보세요. 비용과 시간을 절약할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '보증금 반환 청구 소멸시효는?',
        answer: '임대차 종료 후 <strong>10년</strong>입니다. 다만 빨리 행사하는 것이 유리합니다.',
      },
      {
        question: '원상복구비를 공제하겠다고 하면?',
        answer: '<strong>통상적인 사용에 의한 마모</strong>는 공제 대상이 아닙니다. 과도한 공제는 다툴 수 있습니다.',
      },
      {
        question: '임대인이 파산하면 보증금을 못 받나요?',
        answer: '우선변제권이 있으면 <strong>다른 채권자보다 우선</strong>하여 배당받을 수 있습니다.',
      },
      {
        question: '대항력은 어떻게 갖추나요?',
        answer: '<strong>사업자등록 + 건물 인도(점유)</strong>를 갖추면 대항력이 생깁니다.',
      },
      {
        question: '확정일자는 꼭 받아야 하나요?',
        answer: '확정일자가 있어야 <strong>우선변제권</strong>이 생깁니다. 반드시 받아두세요.',
      },
      {
        question: '새 세입자가 안 들어오면 보증금을 못 받나요?',
        answer: '아닙니다. 새 세입자 입주와 관계없이 <strong>계약 종료 시 반환 의무</strong>가 있습니다.',
      },
      {
        question: '소액임차인 최우선변제란?',
        answer: '일정 금액 이하의 보증금은 경매에서 <strong>최우선으로 배당</strong>받을 수 있는 제도입니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상가 보증금 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/sangga',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상가임대차 진단', href: '/diagnosis/sangga' },
      { label: '상가 권리금 못 받았을 때 대응 방법', href: '/guide/sangga/commercial-lease-key-money' },
      { label: '상가 계약 갱신 거절 시 대처법', href: '/guide/sangga/commercial-lease-renewal-rejection' },
      { label: '전세보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
    ],
  },
];
