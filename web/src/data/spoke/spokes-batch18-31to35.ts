import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 31. 이 페이지는 [상해 가해자]의 [피해자와 합의를 진행해야 하는 상황]에서 [합의 절차와 타임라인 파악]을 돕는 페이지다.
// 32. 이 페이지는 [개인파산 신청을 준비하는 채무자]의 [필요한 서류를 빠짐없이 갖춰야 하는 상황]에서 [서류 전체 목록과 준비 요령 확인]을 돕는 페이지다.
// 33. 이 페이지는 [아동성범죄 혐의를 받고 있는 피의자]의 [처벌 수위가 어느 정도인지 궁금한 상황]에서 [죄명별 법정형과 양형 기준 확인]을 돕는 페이지다.
// 34. 이 페이지는 [불법촬영 피해자]의 [증거를 직접 캡처·보존해야 하는 상황]에서 [흔히 하는 실수와 올바른 증거 수집 방법 확인]을 돕는 페이지다.
// 35. 이 페이지는 [산재 사고가 발생한 사업장의 사업주]의 [형사책임 범위가 불확실한 상황]에서 [적용 법률과 대응 방법 확인]을 돕는 페이지다.

export const spokesBatch18_31to35: SpokePage[] = [
  {
    domain: 'assault',
    slug: 'injury-settlement-method',
    keyword: '상해죄 합의 방법',
    questionKeyword: '상해죄로 고소당했는데 합의는 어떻게 진행해야 하나요?',
    ctaKeyword: '상해 합의',
    type: '절차타임라인형',
    perspective: '가해자',
    meta: {
      title: '상해죄 합의 방법 4단계 절차 정리 | 로앤가이드',
      description: '상해 혐의를 받고 합의를 진행해야 하는데 어디서부터 시작해야 할지 막막하다면, 합의 절차 4단계를 확인하세요. 지금 확인하세요.',
    },
    intro: '갑자기 경찰서에서 연락이 왔습니다. 상해 혐의로 고소가 접수되었다는 내용입니다. 뒤늦게 상황을 정리하려 하지만, 피해자와 어떻게 합의해야 할지, 합의금은 얼마가 적정한지 아무것도 모르는 채 시간만 흐르고 있습니다. 합의가 형사처분 결과에 미치는 영향을 생각하면 하루라도 빨리 움직여야 합니다.',
    timelineSteps: ['피해 사실 확인 및 진단서 검토', '변호사 선임 및 합의 의사 전달', '합의금 협상 및 합의서 작성', '합의서 제출 후 처분 결과 확인'],
    sections: [
      {
        title: '첫째, 피해 사실과 상해진단서 내용을 정확히 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제257조에 따라 상해죄는 7년 이하의 징역, 10년 이하의 자격정지 또는 1천만원 이하의 벌금에 처합니다</strong></p>\n<p>합의를 시작하기 전에 피해자가 제출한 <strong>상해진단서의 내용과 치료 기간</strong>을 반드시 확인하세요. 진단서상 상해 부위와 피해자 주장이 일치하는지, 치료 기간이 실제 상해 정도에 비해 과도하지 않은지 검토해야 합니다.</p>\n<p>진단서는 피해자의 <strong>주관적 통증 호소</strong>에 의존해 발급되는 경우도 있으므로, 진단 일자와 상해 발생 시점 사이의 간격, 기왕증 유무 등을 꼼꼼히 살펴야 합니다. 진단서 내용에 따라 합의금 수준이 크게 달라집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 진단서 치료 기간 → 상해 부위 일치 여부 → 기왕증 존부 확인</blockquote>',
      },
      {
        title: '둘째, 변호사를 선임하고 합의 의사를 공식적으로 전달하세요',
        content:
          '<p><strong style="color:#1e3a5f">직접 피해자에게 연락하면 2차 피해로 간주될 수 있으므로 반드시 변호사를 통해 접촉하세요</strong></p>\n<p>수사 단계에서 피해자에게 직접 연락하면 <strong>증거인멸 시도나 협박</strong>으로 오해받을 수 있습니다. 변호사를 선임한 뒤 수사기관이나 피해자 측 대리인을 통해 합의 의사를 전달하는 것이 안전합니다.</p>\n<p>합의 의사를 전달할 때는 <strong>진심어린 반성의 표현</strong>과 함께 치료비 선지급 의사를 밝히면 합의 성공 확률이 높아집니다. 피해자 입장에서 가해자의 태도가 합의 수락 여부를 결정하는 핵심 요소입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 변호사 선임 → 수사기관 경유 합의 제안 → 치료비 선지급 제안</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=assault" style="color:#1565c0;font-weight:600">내 상해 사건 합의 전략 AI로 분석받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 합의금을 협상하고 법적 효력 있는 합의서를 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의서에는 피해자의 처벌불원 의사가 반드시 포함되어야 형사처분에 실질적 영향을 미칩니다</strong></p>\n<p>합의금은 <strong>치료비 실비 + 위자료</strong>로 구성됩니다. 진단서상 치료 기간이 2주 이하인 경미한 상해의 경우 100~300만원, 4주 이상 중상해의 경우 500~2,000만원 이상이 일반적인 범위입니다. 다만 구체적 사안에 따라 편차가 큽니다.</p>\n<p>합의서에는 ①합의금 액수 ②지급 방법 ③<strong>피해자의 처벌불원 의사</strong> ④향후 민·형사상 이의제기 포기 조항을 포함해야 합니다. 특히 폭행죄(형법 제260조)는 반의사불벌죄이므로 합의 후 피해자가 처벌을 원하지 않으면 공소를 제기할 수 없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의서 필수 항목: 합의금 + 처벌불원서 + 민형사 이의포기 조항</blockquote>',
      },
      {
        title: '넷째, 합의서를 수사기관에 제출하고 처분 결과를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의서는 검찰 송치 전 경찰 수사 단계에서 제출하는 것이 가장 유리합니다</strong></p>\n<p>합의서와 처벌불원서를 수사기관에 제출하면 검찰 단계에서 <strong>기소유예 또는 불기소 처분</strong>을 받을 가능성이 높아집니다. 특히 초범이고 상해 정도가 경미하며 피해자가 처벌을 원하지 않는 경우 기소유예로 종결되는 사례가 많습니다.</p>\n<p>이미 기소된 이후라도 합의서를 법원에 제출하면 <strong>양형에 유리하게 작용</strong>합니다. 합의 시기가 빠를수록 처분 결과에 긍정적 영향을 미치므로 가능한 한 신속하게 진행하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">제출 시기: 경찰 수사 단계(가장 유리) → 검찰 단계 → 재판 단계</blockquote>',
      },
    ],
    cases: [
      {
        title: '상해진단서의 증명력과 상해 인정 기준을 판시한 사례',
        summary:
          '대법원 2025도11886 사건(2025.12.04 선고)에서 법원은 상해진단서가 피해자의 주관적 통증 호소에 의존하여 발급된 경우, 진단 일자와 상해 발생 시점의 근접성, 기왕증 유무, 진료 경위 등을 면밀히 살펴 증명력을 판단해야 한다고 판시했습니다.',
        takeaway:
          '상해진단서가 있더라도 그 증명력이 항상 인정되는 것은 아닙니다. 합의 전 진단서의 객관성을 검토하고, 과도한 진단서에 대해서는 변호사와 함께 반박 자료를 준비하세요.',
      },
    ],
    faq: [
      {
        question: '상해죄와 폭행죄의 합의 효과가 다른가요?',
        answer: '네, 크게 다릅니다. <strong>폭행죄(형법 제260조)는 반의사불벌죄</strong>이므로 피해자가 처벌을 원하지 않으면 공소 자체를 제기할 수 없습니다. 반면 <strong>상해죄(형법 제257조)는 반의사불벌죄가 아니므로</strong> 합의하더라도 검찰이 기소할 수 있습니다. 다만 합의 사실이 양형에 매우 유리하게 작용합니다.',
      },
      {
        question: '합의금을 분할로 지급해도 되나요?',
        answer: '분할 지급도 가능하지만, <strong>피해자가 처벌불원서를 합의금 완납 조건으로 작성</strong>하는 경우가 많습니다. 수사기관에 합의서를 빨리 제출해야 하므로 가능하면 일시불로 지급하는 것이 유리합니다. 분할 시에는 공증받은 합의서를 작성하세요.',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 해야 하나요?',
        answer: '<strong>공탁 제도</strong>를 활용할 수 있습니다. 법원에 합의금 상당액을 공탁하면 피해 회복을 위해 노력했다는 증거가 됩니다. 공탁 사실은 양형에 참고 자료로 제출할 수 있으며, 검찰 처분 단계에서도 긍정적으로 고려됩니다.',
      },
      {
        question: '합의 후에도 전과 기록이 남나요?',
        answer: '검찰에서 <strong>기소유예 처분</strong>을 받으면 전과 기록이 남지 않습니다. 다만 수사 경력은 남습니다. 기소 후 합의하여 <strong>선고유예</strong>를 받으면 2년간 실효 없이 지나면 면소된 것으로 간주됩니다. 벌금형 이상은 전과 기록이 남습니다.',
      },
      {
        question: '합의 시 변호사 비용은 얼마나 드나요?',
        answer: '상해 사건 변호사 선임 비용은 사건의 경중에 따라 <strong>200~500만원</strong> 수준이 일반적입니다. 합의 교섭만 의뢰하는 경우 별도 협의가 가능하며, 대한법률구조공단(132)을 통해 무료 법률상담을 먼저 받아볼 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상해 사건에 맞는 합의 전략 확인하기',
      link: '/chat?domain=assault',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '폭행·상해 진단', href: '/diagnosis/assault' },
      { label: '상해죄 합의금 적정 금액 기준', href: '/guide/assault/assault-settlement-amount' },
      { label: '상해죄 초범 처벌 수위', href: '/guide/assault/first-offense-assault-penalty' },
      { label: '폭행죄 고소 취하 절차', href: '/guide/assault/assault-charge-withdrawal-process' },
    ],
  },
  {
    domain: 'bankruptcy',
    slug: 'application-required-documents-full-list',
    keyword: '개인파산 신청 시 필요한 서류 전체 목록',
    questionKeyword: '개인파산 신청하려면 서류를 뭘 준비해야 하나요?',
    ctaKeyword: '개인파산 신청 서류',
    type: '준비서류형',
    meta: {
      title: '개인파산 신청 서류 15가지 전체 목록 | 로앤가이드',
      description: '개인파산 신청을 준비하는데 어떤 서류가 필요한지 몰라서 답답하다면, 법원 제출용 서류 15가지를 확인하세요. 지금 확인하세요.',
    },
    intro: '빚이 감당할 수 없을 만큼 불어났습니다. 개인파산을 신청하기로 마음먹었지만, 법원에 뭘 내야 하는지조차 모르겠습니다. 서류 하나가 빠져도 보정명령이 나와 절차가 몇 주씩 지연됩니다. 한 번에 통과하려면 처음부터 꼼꼼하게 준비해야 합니다.',
    sections: [
      {
        title: '신청서 기본 서류 5가지를 먼저 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">채무자 회생 및 파산에 관한 법률 제317조에 따라 채무자가 직접 파산신청을 할 수 있습니다</strong></p>\n<p>개인파산 신청의 핵심 서류는 다음 5가지입니다. ①<strong>파산·면책 신청서</strong>(법원 양식) ②<strong>채권자목록</strong>(모든 채권자의 이름·주소·채권액 기재) ③<strong>재산목록</strong>(부동산·예금·보험·차량 등 전 재산) ④<strong>현재의 생활상황 진술서</strong>(수입·지출 내역) ⑤<strong>채무 증가 경위서</strong>(빚이 늘어난 과정을 시간순으로 기술).</p>\n<p>채권자목록에서 <strong>채권자를 누락하면 해당 채무가 면책되지 않을 수 있습니다</strong>. 대법원 2025마7576 사건에서도 채권자목록 누락이 면책 효력에 미치는 영향이 쟁점이 된 바 있으므로, 빠짐없이 기재하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기본 5종: 신청서 + 채권자목록 + 재산목록 + 생활상황 진술서 + 채무 증가 경위서</blockquote>',
      },
      {
        title: '소득·재산 증빙 서류 5가지를 빠짐없이 챙기세요',
        content:
          '<p><strong style="color:#1e3a5f">지급불능 상태를 증명하려면 소득 대비 채무가 과도함을 보여주는 자료가 필요합니다</strong></p>\n<p>소득 관련 서류는 ⑥<strong>소득금액증명원</strong>(국세청 홈택스 발급) ⑦<strong>급여명세서 또는 소득확인증명서</strong>(최근 3개월분) ⑧<strong>건강보험자격득실확인서</strong>입니다. 무직인 경우에는 고용보험 이력서와 구직 활동 증빙을 함께 제출합니다.</p>\n<p>재산 관련 서류는 ⑨<strong>부동산등기사항증명서</strong>(본인 명의 부동산이 있는 경우) ⑩<strong>금융거래확인서</strong>(전 금융기관 예금잔액·대출잔액 조회, 신용정보원 또는 각 은행에서 발급)입니다. 예금이 소액이라도 반드시 신고해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소득 3종 + 재산 2종: 소득금액증명 + 급여명세서 + 건강보험 + 부동산등기 + 금융거래확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=bankruptcy" style="color:#1565c0;font-weight:600">내 상황에 파산 신청이 가능한지 AI로 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '채무 증빙 및 기타 필수 서류 5가지를 마무리하세요',
        content:
          '<p><strong style="color:#1e3a5f">채무 증빙이 불충분하면 보정명령이 나와 절차가 수 주간 지연됩니다</strong></p>\n<p>채무 증빙 서류는 ⑪<strong>신용정보조회서</strong>(한국신용정보원 또는 올크레딧, 모든 채무 내역 확인) ⑫<strong>채무확인서 또는 독촉장</strong>(채권추심업체·금융기관 발송 서류) ⑬<strong>세금체납내역서</strong>(국세·지방세 체납이 있는 경우)입니다.</p>\n<p>기타 서류는 ⑭<strong>주민등록등본·초본</strong>(최근 3개월 이내 발급) ⑮<strong>가족관계증명서</strong>입니다. 부양가족이 있으면 부양가족의 소득 증빙도 함께 제출해야 합니다. 임대차계약서, 자동차등록증 사본 등 법원이 추가로 요구하는 서류도 있을 수 있으므로 관할 법원의 안내를 미리 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">채무 3종 + 기타 2종: 신용정보조회 + 채무확인서 + 세금체납 + 주민등록등초본 + 가족관계증명</blockquote>',
      },
    ],
    cases: [
      {
        title: '파산 면책절차에서 설명의무와 서류 제출의 중요성을 판시한 사례',
        summary:
          '대법원 2024마6789 사건(2024.12.26 선고)에서 법원은 파산관재인의 자료제출 요구에 채무자가 응하지 않은 것이 면책불허가 사유에 해당하는지 판단하면서, 요구된 자료가 파산절차 진행에 필수적인 내용인지를 기준으로 삼아야 한다고 판시했습니다.',
        takeaway:
          '서류를 성실히 준비하고 파산관재인의 요청에 적극 협조하는 것이 면책 허가를 받는 데 결정적입니다. 서류 누락이나 불성실한 대응은 면책불허가 사유가 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '서류를 혼자 준비하기 어려우면 어디서 도움받을 수 있나요?',
        answer: '<strong>대한법률구조공단(전화 132)</strong>에서 무료 법률상담과 서류 작성 도움을 받을 수 있습니다. 기초수급자·저소득층은 소송대리까지 무료로 지원받을 수 있으며, 각 지방법원 파산부에서도 신청 안내자료를 배포합니다.',
      },
      {
        question: '채권자목록에 빠진 채무는 어떻게 되나요?',
        answer: '채무자 회생 및 파산에 관한 법률 제566조 제7호에 따라 <strong>악의로 채권자목록에서 누락한 채무는 면책되지 않습니다</strong>. 신용정보조회서를 통해 모든 채무를 확인하고, 사적 채무(지인 빌린 돈 등)도 빠짐없이 기재하세요.',
      },
      {
        question: '서류 준비에 비용이 드나요?',
        answer: '대부분의 서류는 <strong>무료 또는 소액</strong>으로 발급받을 수 있습니다. 주민등록등본·가족관계증명서는 정부24에서 무료, 소득금액증명원은 홈택스에서 무료, 신용정보조회서는 올크레딧·나이스에서 연 3회 무료 조회가 가능합니다.',
      },
      {
        question: '파산 신청 후 추가 서류를 요구받으면 어떻게 하나요?',
        answer: '법원에서 <strong>보정명령</strong>을 내리면 지정된 기한(보통 14일) 안에 보정해야 합니다. 기한 내 보정하지 않으면 신청이 각하될 수 있으므로, 보정명령을 받으면 즉시 해당 서류를 준비하여 제출하세요.',
      },
      {
        question: '파산 신청 시 인지대와 송달료는 얼마인가요?',
        answer: '파산·면책 동시 신청 시 <strong>인지대 약 2,000원, 송달료 약 5~10만원</strong> 수준입니다. 송달료는 채권자 수에 따라 달라집니다. 인지액을 납부하기 어려운 경우 소송구조 신청을 통해 면제받을 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 파산 신청 가능 여부 확인하기',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '개인파산 진단', href: '/diagnosis/bankruptcy' },
      { label: '개인파산 면책 조건과 절차', href: '/guide/bankruptcy/personal-bankruptcy-discharge-conditions' },
      { label: '파산 신청 후 생활 제한 사항', href: '/guide/bankruptcy/post-bankruptcy-restrictions' },
      { label: '개인회생과 파산 차이 비교', href: '/guide/bankruptcy/rehabilitation-vs-bankruptcy-comparison' },
    ],
  },
  {
    domain: 'child-sex-crime',
    slug: 'child-crime-charge-penalty-level',
    keyword: '아동성범죄 혐의 처벌 수위',
    questionKeyword: '아동성범죄 혐의를 받으면 처벌이 어느 정도인가요?',
    ctaKeyword: '아동성범죄 처벌',
    type: '수치기한형',
    perspective: '가해자',
    meta: {
      title: '아동성범죄 처벌 수위 7가지 죄명별 정리 | 로앤가이드',
      description: '아동성범죄 혐의를 받고 있다면 죄명별 법정형과 양형 기준이 궁금하실 텐데, 7가지 유형별 처벌 수위를 확인하세요. 지금 확인하세요.',
    },
    intro: '경찰에서 아동·청소년 대상 성범죄 혐의로 조사를 받게 되었습니다. 구속될 수도 있다는 말에 머릿속이 하얘졌습니다. 내가 받을 수 있는 형량이 어느 정도인지, 신상공개나 취업제한 같은 부가처분은 어떤 것이 있는지 전혀 감이 잡히지 않습니다. 처벌 수위를 정확히 알아야 대응 전략을 세울 수 있습니다.',
    sections: [
      {
        title: '첫째, 아동·청소년 대상 주요 성범죄의 법정형을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률은 일반 성범죄보다 가중 처벌을 규정하고 있습니다</strong></p>\n<p>주요 죄명별 법정형은 다음과 같습니다. ①<strong>아동·청소년 강간</strong>: 무기징역 또는 5년 이상 유기징역 ②<strong>아동·청소년 강제추행</strong>: 2년 이상 유기징역 또는 1천만원~3천만원 벌금 ③<strong>13세 미만 미성년자 의제강간</strong>: 무기징역 또는 5년 이상 유기징역 ④<strong>아동·청소년 성착취물 제작</strong>: 무기징역 또는 5년 이상 유기징역 ⑤<strong>아동·청소년 성착취물 배포</strong>: 3년 이상 유기징역 ⑥<strong>아동·청소년 성착취물 소지</strong>: 1년 이상 유기징역 ⑦<strong>아동·청소년 대상 성매매</strong>: 1년 이상 유기징역.</p>\n<p>19세 미만의 사람이 아동·청소년에 해당하며, 가해자가 19세 이상일 때 13세 이상 16세 미만에 대해서도 의제강간·의제추행이 성립합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 아동 강간 무기/5년 이상 | 강제추행 2년 이상 | 성착취물 제작 5년 이상</blockquote>',
      },
      {
        title: '둘째, 형사처벌 외 부가처분의 범위를 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">유죄 판결 시 신상정보 공개·고지, 취업제한, 전자장치 부착 등이 함께 부과됩니다</strong></p>\n<p>아동성범죄 유죄 확정 시 받게 되는 부가처분은 다음과 같습니다. ①<strong>신상정보 공개·고지</strong>: 최장 10년간 인터넷에 공개되고 거주지 주변에 고지됩니다 ②<strong>취업제한</strong>: 아동·청소년 관련 기관에 최장 10년간 취업이 제한됩니다 ③<strong>전자장치 부착</strong>(전자발찌): 법원이 별도로 명할 수 있으며 최장 30년입니다 ④<strong>수강명령·치료프로그램 이수명령</strong>: 최대 500시간.</p>\n<p>이 부가처분들은 <strong>집행유예를 선고받아도 부과</strong>될 수 있으므로, 형사처벌 자체만큼이나 사회생활에 큰 영향을 미칩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">부가처분: 신상공개 10년 + 취업제한 10년 + 전자발찌 30년 + 수강명령 500시간</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=child-sex-crime" style="color:#1565c0;font-weight:600">내 혐의에 대한 예상 처벌 수위 AI로 분석받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 양형에 영향을 미치는 주요 참작 사유를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">양형위원회 기준에 따라 감경·가중 사유가 최종 형량을 좌우합니다</strong></p>\n<p><strong>감경 사유</strong>로는 ①초범 ②피해자와의 합의(다만 아동성범죄는 합의 효과가 제한적) ③심신미약 ④자수·자복 ⑤범행 가담 정도가 경미한 경우 등이 있습니다. <strong>가중 사유</strong>로는 ①피해자가 13세 미만 ②범행이 반복적·계획적 ③흉기 등 위험한 물건 사용 ④다수 피해자 존재 ⑤직계존비속·교사 등 신뢰관계 이용 등이 있습니다.</p>\n<p>특히 <strong>친족관계 이용 아동성범죄</strong>는 법정형의 하한이 가중되며, 대부분 실형이 선고됩니다. 변호사와 함께 양형 기준표를 확인하고 감경 사유를 최대한 소명하는 전략이 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경: 초범·자수·심신미약 | 가중: 13세 미만·반복범행·신뢰관계 이용</blockquote>',
      },
    ],
    cases: [
      {
        title: '아동·청소년 성착취물의 판단 기준을 판시한 사례',
        summary:
          '대법원 2024도17801 사건(2025.08.14 선고)에서 법원은 실제 아동·청소년의 얼굴에 타인의 나체를 합성한 딥페이크 영상은 아동·청소년이 직접 등장한 성착취물에는 해당하지 않으나, 아동·청소년으로 명백하게 인식될 수 있는 표현물이 등장하는 성착취물에는 해당할 수 있다고 판시했습니다.',
        takeaway:
          '딥페이크 합성물도 아동성착취물로 처벌받을 수 있습니다. 단순 소지만으로도 1년 이상의 징역에 해당하므로, 혐의를 받고 있다면 즉시 변호사와 대응 전략을 수립하세요.',
      },
    ],
    faq: [
      {
        question: '미성년자와 동의하에 관계했어도 처벌되나요?',
        answer: '네, <strong>13세 미만은 동의 여부와 무관하게 의제강간·의제추행</strong>이 성립합니다. 가해자가 19세 이상이고 피해자가 13세 이상 16세 미만인 경우에도 마찬가지입니다. 피해자의 동의는 법적으로 효력이 없습니다.',
      },
      {
        question: '아동성범죄도 집행유예가 가능한가요?',
        answer: '법정형의 하한이 3년 이하인 죄는 집행유예 선고가 가능합니다. 강제추행(2년 이상), 성착취물 소지(1년 이상) 등은 가능하지만, <strong>강간(5년 이상)이나 성착취물 제작(5년 이상)</strong>은 법정형 하한이 높아 집행유예가 매우 어렵습니다.',
      },
      {
        question: '수사 단계에서 구속되는 경우가 많은가요?',
        answer: '아동성범죄는 <strong>증거인멸·도주 우려</strong>가 인정되면 구속 가능성이 높습니다. 특히 피해자가 13세 미만이거나 범행이 반복적인 경우, 디지털 증거 삭제 우려가 있는 경우 구속영장이 발부되는 비율이 높습니다.',
      },
      {
        question: '신상공개를 피할 수 있는 방법이 있나요?',
        answer: '법원은 유죄 선고 시 <strong>공개명령과 고지명령을 원칙적으로 부과</strong>합니다. 다만 신상정보 공개로 인해 재범 방지 효과보다 피고인의 불이익이 현저히 큰 특별한 사정이 있으면 면제될 수 있으나, 실무상 면제 사례는 극히 드뭅니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 사건에 맞는 대응 전략 확인하기',
      link: '/chat?domain=child-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '아동성범죄 진단', href: '/diagnosis/child-sex-crime' },
      { label: '아동성착취물 소지 처벌 기준', href: '/guide/child-sex-crime/child-exploitation-material-penalty' },
      { label: '미성년자 의제강간 성립 요건', href: '/guide/child-sex-crime/statutory-rape-requirements' },
      { label: '성범죄 신상공개 기준과 절차', href: '/guide/child-sex-crime/sex-offender-disclosure-criteria' },
    ],
  },
  {
    domain: 'digital-sex-crime',
    slug: 'screenshot-evidence-common-mistakes',
    keyword: '불법촬영 증거 캡처 시 흔히 하는 실수',
    questionKeyword: '불법촬영 증거를 직접 캡처하려는데 어떤 실수를 피해야 하나요?',
    ctaKeyword: '불법촬영 증거',
    type: '실수함정형',
    meta: {
      title: '불법촬영 증거 캡처 실수 5가지 주의사항 | 로앤가이드',
      description: '불법촬영 피해 증거를 직접 캡처하다가 증거 능력을 잃는 실수가 많은데, 반드시 피해야 할 5가지를 확인하세요. 지금 확인하세요.',
    },
    intro: '불법촬영물이 유포된 것을 발견했습니다. 급한 마음에 바로 캡처를 하려 하지만, 잘못된 방법으로 수집한 증거는 법정에서 인정되지 않을 수 있습니다. 가해자를 처벌하고 영상 삭제까지 이끌어내려면 처음부터 올바른 방법으로 증거를 확보해야 합니다.',
    sections: [
      {
        title: '실수 1. URL 없이 화면만 캡처하는 것',
        content:
          '<p><strong style="color:#1e3a5f">게시물의 URL(웹주소)이 포함되지 않은 캡처는 증거 특정이 불가능합니다</strong></p>\n<p>많은 피해자가 급한 마음에 <strong>화면 일부만 캡처</strong>합니다. 하지만 URL이 빠지면 해당 게시물이 어디에 게시되었는지 특정할 수 없어 수사기관이 삭제 요청이나 추적을 진행하기 어렵습니다.</p>\n<p>캡처할 때는 반드시 <strong>브라우저 주소창이 보이는 상태에서 전체 화면을 캡처</strong>하세요. 모바일의 경우 앱 내 스크린샷보다 브라우저로 접속한 뒤 URL이 노출된 상태에서 캡처하는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수: URL 포함 전체 화면 캡처 → 게시물 위치 특정 가능하게</blockquote>',
      },
      {
        title: '실수 2. 캡처 일시를 기록하지 않는 것',
        content:
          '<p><strong style="color:#1e3a5f">증거의 시간적 맥락이 없으면 게시물 존재 시점을 증명할 수 없습니다</strong></p>\n<p>캡처한 화면에 <strong>날짜와 시간이 표시되지 않으면</strong> 나중에 해당 게시물이 언제 존재했는지 증명하기 어렵습니다. 가해자가 게시물을 삭제한 뒤 "그런 게시물을 올린 적 없다"고 부인할 수 있습니다.</p>\n<p>캡처 시 <strong>기기의 시계가 화면에 보이도록</strong> 설정하거나, 캡처 직후 파일 속성에서 생성 일시를 확인해두세요. 별도로 <strong>메모장이나 이메일에 캡처 일시와 경위를 바로 기록</strong>해두면 더 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 기기 시계 노출 + 파일 생성일시 확인 + 별도 메모 기록</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=digital-sex-crime" style="color:#1565c0;font-weight:600">내 증거 수집 방법이 올바른지 AI로 점검받기 &rarr;</a>\n</div>',
      },
      {
        title: '실수 3. 원본 파일을 편집하거나 이름을 바꾸는 것',
        content:
          '<p><strong style="color:#1e3a5f">원본 파일의 메타데이터가 변경되면 증거의 무결성이 훼손됩니다</strong></p>\n<p>캡처한 이미지 파일을 <strong>크롭(자르기)하거나 파일명을 변경</strong>하면 메타데이터(촬영 일시, 기기 정보 등)가 바뀌어 증거 원본으로서의 가치가 떨어집니다. 법원에서 위조·변조 의심을 받을 수 있습니다.</p>\n<p>캡처한 원본 파일은 <strong>별도 폴더에 그대로 보관</strong>하고, 필요 시 복사본을 만들어 편집하세요. 가능하면 <strong>클라우드(이메일 첨부, 구글드라이브 등)에 즉시 업로드</strong>하여 타임스탬프를 확보하면 더 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 원본 그대로 보관 → 복사본으로 편집 → 클라우드 백업으로 타임스탬프 확보</blockquote>',
      },
      {
        title: '실수 4. 게시자 정보와 댓글을 캡처하지 않는 것',
        content:
          '<p><strong style="color:#1e3a5f">게시자의 아이디·프로필·댓글은 가해자 특정의 핵심 증거입니다</strong></p>\n<p>불법촬영물 자체만 캡처하고 <strong>게시자의 아이디, 프로필 사진, 가입일</strong> 등을 놓치는 경우가 많습니다. 게시자가 탈퇴하면 이 정보를 다시 확인할 수 없습니다.</p>\n<p>게시물에 달린 <strong>댓글과 공유 횟수</strong>도 함께 캡처하세요. 유포 범위를 증명하는 데 중요한 자료가 됩니다. 특히 해당 게시물을 공유하거나 재유포한 계정도 함께 기록해두면 수사에 큰 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 캡처: 게시자 프로필 + 아이디 + 댓글 + 공유 수 + 재유포 계정</blockquote>',
      },
      {
        title: '실수 5. 신고 전에 게시물 삭제를 요청하는 것',
        content:
          '<p><strong style="color:#1e3a5f">증거 확보 전 삭제 요청을 하면 가해자가 증거를 인멸할 시간을 줍니다</strong></p>\n<p>피해자 심리상 당장 게시물을 내리고 싶지만, <strong>증거를 완벽하게 확보하기 전에 플랫폼이나 가해자에게 삭제를 요청</strong>하면 가해자가 계정을 삭제하거나 증거를 인멸할 수 있습니다.</p>\n<p>올바른 순서는 ①증거 캡처 완료 ②경찰 신고(사이버수사대 또는 디지털성범죄피해자지원센터 1366) ③수사기관의 보전 조치 확인 후 ④플랫폼에 삭제 요청입니다. <strong>디지털성범죄피해자지원센터(02-735-8994)</strong>에 연락하면 삭제 지원도 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 증거 확보 → 경찰 신고 → 보전 조치 → 삭제 요청</blockquote>',
      },
    ],
    cases: [
      {
        title: '디지털 성범죄 증거의 압수수색과 관련성 판단 기준을 판시한 사례',
        summary:
          '대법원 2023도11395 사건(2025.06.12 선고)에서 법원은 스마트폰을 이용한 불법촬영 범죄에서 같은 유형의 전자정보에서 발견되는 간접증거나 정황증거도 혐의사실과 구체적·개별적 연관관계를 인정할 수 있다고 판시했습니다.',
        takeaway:
          '디지털 증거는 법적으로 매우 중요하게 다뤄집니다. 피해자가 수집한 스크린샷도 원본성과 무결성이 확보되면 유력한 증거로 활용될 수 있으므로, 처음부터 올바른 방법으로 수집하세요.',
      },
    ],
    faq: [
      {
        question: '화면 녹화로 증거를 수집해도 되나요?',
        answer: '네, <strong>화면 녹화는 매우 효과적인 증거 수집 방법</strong>입니다. 특히 게시물이 빠르게 삭제될 위험이 있는 경우, URL이 보이는 상태에서 화면을 녹화하면 스크린샷보다 더 많은 정보를 담을 수 있습니다. 녹화 파일도 원본 그대로 보관하세요.',
      },
      {
        question: '해외 사이트에 유포된 경우에도 증거 수집이 유효한가요?',
        answer: '해외 사이트라도 <strong>증거 수집 자체는 국내법에 따라 유효</strong>합니다. 다만 삭제 요청과 가해자 추적에는 어려움이 있으므로, 디지털성범죄피해자지원센터(02-735-8994)를 통해 해외 사이트 삭제 지원을 받으세요.',
      },
      {
        question: '텔레그램 등 메신저에 유포된 경우는 어떻게 수집하나요?',
        answer: '텔레그램은 특성상 메시지가 빠르게 삭제될 수 있으므로, <strong>채널명·채팅방 이름·참여자 수·메시지 전송 시간</strong>이 보이는 상태에서 즉시 스크린샷을 찍어야 합니다. 대화방 초대 링크도 함께 캡처해두세요.',
      },
      {
        question: '증거를 수집하다가 불법촬영물을 소지한 것이 되나요?',
        answer: '<strong>수사기관에 제출할 목적</strong>으로 증거를 수집·보관하는 것은 범죄 피해 신고를 위한 정당한 행위입니다. 다만 증거 수집 후 즉시 수사기관에 제출하거나 디지털성범죄피해자지원센터에 상담하는 것이 안전합니다.',
      },
      {
        question: '공증받은 캡처만 증거로 인정되나요?',
        answer: '아닙니다. 공증은 증거의 신뢰도를 높여주지만 <strong>필수 요건은 아닙니다</strong>. 원본 파일의 메타데이터가 보존되어 있고 URL·일시 등이 확인 가능하면 증거로 사용할 수 있습니다. 더 확실하게 하려면 <strong>내용증명이나 전자공증</strong>을 활용하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 증거 수집 방법 점검받기',
      link: '/chat?domain=digital-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털 성범죄 진단', href: '/diagnosis/digital-sex-crime' },
      { label: '불법촬영 피해 신고 절차', href: '/guide/digital-sex-crime/illegal-filming-report-procedure' },
      { label: '디지털 성범죄 영상 삭제 요청 방법', href: '/guide/digital-sex-crime/digital-sex-crime-video-deletion' },
      { label: '불법촬영 가해자 처벌 수위', href: '/guide/digital-sex-crime/illegal-filming-penalty-level' },
    ],
  },
  {
    domain: 'industrial-accident1',
    slug: 'employer-criminal-liability-accident',
    keyword: '산재 사고 발생 시 사업주 형사책임',
    questionKeyword: '산재 사고가 발생하면 사업주도 형사처벌을 받나요?',
    ctaKeyword: '산재 사업주 형사책임',
    type: '상황형',
    meta: {
      title: '산재 사고 사업주 형사책임 3가지 법률 정리 | 로앤가이드',
      description: '사업장에서 산재 사고가 발생해 사업주 형사책임이 걱정된다면, 적용되는 3가지 법률과 대응 방법을 확인하세요. 지금 확인하세요.',
    },
    intro: '사업장에서 근로자가 추락하는 사고가 발생했습니다. 119에 신고하고 병원으로 이송했지만, 고용노동부 근로감독관이 현장에 나와 조사를 시작했습니다. 안전조치를 제대로 했는지, 형사처벌을 받게 되는 건 아닌지 머릿속이 복잡합니다. 사업주가 받을 수 있는 형사책임의 범위를 정확히 알아야 합니다.',
    sections: [
      {
        title: '첫째, 산업안전보건법상 안전조치의무 위반 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 제38조에 따라 사업주는 추락·감전·화재 등의 위험을 예방하기 위한 안전조치를 해야 합니다</strong></p>\n<p>사업주는 근로자가 작업하는 장소에서 <strong>추락·붕괴·감전 등의 위험</strong>을 방지하기 위해 안전난간 설치, 안전모·안전대 지급, 작업 중지 권한 부여 등의 조치를 취해야 합니다. 이를 위반하여 근로자가 사망하면 <strong>7년 이하의 징역 또는 1억원 이하의 벌금</strong>에 처합니다.</p>\n<p>안전조치의무 위반 여부는 <strong>개별 조항의 의무 내용과 해당 작업의 성격, 예상 가능한 위험</strong> 등을 종합하여 판단합니다. 형식적으로 안전장비를 비치했더라도 실질적인 착용 지도·감독이 없었다면 의무 위반으로 인정될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 안전조치 의무 = 설비 설치 + 보호구 지급 + 착용 감독까지 포함</blockquote>',
      },
      {
        title: '둘째, 중대재해처벌법 적용 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">중대재해처벌법은 사업주뿐 아니라 경영책임자에게도 직접 형사책임을 묻습니다</strong></p>\n<p>2022년 1월 27일 시행된 중대재해처벌법에 따라, 사업주 또는 경영책임자가 안전·보건 확보의무를 위반하여 <strong>중대산업재해</strong>(사망 1명 이상, 동일 사고로 6개월 이상 치료가 필요한 부상 2명 이상 등)가 발생하면 <strong>1년 이상의 징역 또는 10억원 이하의 벌금</strong>에 처합니다.</p>\n<p>중대재해처벌법은 상시 근로자 5인 이상 사업장에 적용됩니다. <strong>본사·지점·공장 등이 장소적으로 분리되어 있더라도</strong> 인사·노무·회계가 일체로 운영되면 전체 근로자 수를 합산하여 적용 여부를 판단합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">적용 기준: 5인 이상 사업장 + 사망 1명 이상 → 경영책임자 1년 이상 징역</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=industrial-accident1" style="color:#1565c0;font-weight:600">내 사업장 형사책임 범위 AI로 분석받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 업무상과실치사상죄 적용 가능성과 대응을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제268조에 따라 업무상 과실로 사람을 사상에 이르게 한 자는 5년 이하의 금고에 처합니다</strong></p>\n<p>산업안전보건법이나 중대재해처벌법과 별도로, <strong>형법상 업무상과실치사상죄</strong>도 적용될 수 있습니다. 사업주가 안전관리에 대한 업무상 주의의무를 다하지 않아 근로자가 사망하거나 부상한 경우 <strong>5년 이하의 금고 또는 2천만원 이하의 벌금</strong>에 처합니다.</p>\n<p>사고 발생 직후의 대응이 매우 중요합니다. ①<strong>사고 현장을 보존</strong>하고 CCTV 영상을 확보하세요 ②<strong>근로감독관 조사에 성실히 협조</strong>하되, 불리한 진술은 변호사 조언을 받은 후 하세요 ③안전관리 매뉴얼, 교육 이수 기록, 안전점검 일지 등 <strong>안전조치 이행 증거</strong>를 즉시 정리하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 현장 보존 + 변호사 선임 + 안전조치 이행 기록 정리</blockquote>',
      },
    ],
    cases: [
      {
        title: '중대재해처벌법상 사업장 범위와 사업주 책임을 판시한 사례',
        summary:
          '대법원 2025도15060 사건(2026.01.29 선고)에서 법원은 중대재해처벌법의 사업 또는 사업장이란 경영상의 일체를 이루면서 유기적으로 운영되는 경제적·사회적 활동단위를 의미하며, 본사·지점·공장이 장소적으로 분리되어 있더라도 인사·회계가 독립적으로 운영되지 않으면 전체 근로자 수를 합산해야 한다고 판시했습니다.',
        takeaway:
          '소규모 지점이라도 본사와 경영이 일체인 경우 중대재해처벌법이 적용될 수 있습니다. 사업장 분리 운영 여부를 사전에 점검하고, 안전관리 체계를 각 사업장별로 갖추어야 합니다.',
      },
    ],
    faq: [
      {
        question: '하도급 근로자가 다쳐도 원청 사업주가 책임지나요?',
        answer: '네, <strong>산업안전보건법 제63조</strong>에 따라 도급인은 관계수급인 근로자의 산업재해를 예방하기 위해 안전·보건 조치를 해야 합니다. 원청 사업주가 작업장 안전점검이나 안전시설 관리를 소홀히 했다면 형사책임을 질 수 있습니다.',
      },
      {
        question: '사업주가 현장에 없었어도 형사처벌을 받나요?',
        answer: '사업주가 현장에 없었더라도 <strong>안전관리체계 구축·이행의무를 위반</strong>했다면 처벌됩니다. 중대재해처벌법은 경영책임자에게 안전·보건 관리체계를 구축하고 필요한 인력·예산을 확보할 의무를 부과하고 있으므로, 현장 부재가 면책 사유가 되지 않습니다.',
      },
      {
        question: '근로자의 과실이 있어도 사업주 책임이 인정되나요?',
        answer: '근로자에게 과실이 있더라도 <strong>사업주의 안전조치의무 위반과 사고 사이에 인과관계가 인정되면</strong> 사업주 책임이 면제되지 않습니다. 다만 양형 단계에서 근로자의 과실 정도가 참작될 수 있습니다.',
      },
      {
        question: '산재보험에 가입되어 있으면 형사책임이 줄어드나요?',
        answer: '산재보험 가입 여부는 <strong>형사책임과 별개</strong>입니다. 산재보험은 근로자에 대한 보상 문제이고, 형사처벌은 사업주의 안전조치의무 위반에 대한 형사제재입니다. 다만 보험 가입과 적극적 피해 보상 노력은 양형에서 긍정적으로 고려될 수 있습니다.',
      },
      {
        question: '근로감독관 조사 시 변호사 동행이 가능한가요?',
        answer: '네, <strong>변호사 동행은 권리</strong>입니다. 근로감독관의 현장 조사나 진술 조사 시 변호사를 대동할 수 있으며, 불리한 진술을 강요받을 수 없습니다. 사고 직후 변호사를 선임하여 조사 대응 전략을 수립하는 것이 바람직합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 사업장 형사책임 범위 확인하기',
      link: '/chat?domain=industrial-accident1',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산업재해 진단', href: '/diagnosis/industrial-accident1' },
      { label: '산재 신청 절차 가이드', href: '/guide/industrial-accident1/work-injury-claim-process' },
      { label: '산재 보상금 산정 기준', href: '/guide/industrial-accident1/industrial-accident-compensation-calculation' },
      { label: '중대재해처벌법 적용 기준', href: '/guide/industrial-accident1/serious-accident-law-criteria' },
    ],
  },
];
