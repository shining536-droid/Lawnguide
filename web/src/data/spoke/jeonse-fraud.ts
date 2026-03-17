import { SpokePage } from '../spoke-pages';

export const jeonseFraudPages: SpokePage[] = [
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-first-check',
    keyword: '전세사기 의심될 때 가장 먼저 확인할 것',
    questionKeyword: '전세사기가 의심되는데 뭘 먼저 확인해야 하나요?',
    ctaKeyword: '전세사기 확인 준비',
    type: '상황형',
    meta: {
      title: '전세사기 의심될 때 가장 먼저 확인할 것 | 로앤가이드',
      description: '전세사기가 의심될 때 가장 먼저 확인해야 할 등기부등본, 선순위 권리, 임대인 정보 등을 정리했습니다.',
    },
    intro: '계약금을 보내고 나니 불안합니다. 인터넷에서 전세사기 뉴스를 보면서 혹시 내 계약도 문제가 있는 건 아닌지 걱정됩니다. 주변에 물어봐도 "등기부등본을 떼봐"라는 말뿐인데 뭘 봐야 하는지 모르겠습니다. 확인할 순서를 정리했습니다.',
    timelineSteps: ['등기부등본 확인', '선순위 권리 점검', '임대인 정보 확인', '보증보험 검토'],
    sections: [
      {
        title: '등기부등본부터 떼보세요 — 근저당과 가압류가 핵심입니다',
        content:
          '<p><strong style="color:#1e3a5f">등기부등본에서 근저당과 가압류를 확인하세요</strong></p>\n<p><strong>대법원 인터넷등기소</strong>(iros.go.kr)에서 건물등기부등본을 발급받으세요. 을구에 기재된 <strong>근저당 설정 금액</strong>이 핵심입니다. 근저당 금액과 보증금을 합친 금액이 매매가의 70~80%를 넘으면 깡통전세 위험이 있습니다.</p>\n<p>갑구에 <strong>가압류, 가처분, 경매개시결정</strong>이 있다면 즉시 주의가 필요합니다. 이런 기재가 있으면 임대인의 재정 상태가 불안정하다는 신호입니다. 말소사항을 포함한 등기부등본을 발급받으면 과거 권리 변동까지 확인할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 건물 주소, 대법원 인터넷등기소(iros.go.kr) 접속, 발급 수수료 1,000원</blockquote>',
      },
      {
        title: '선순위 권리가 내 보증금보다 앞서는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">선순위 합계가 집값에 가까우면 보증금 회수가 어렵습니다</strong></p>\n<p>내 전입신고와 확정일자보다 먼저 설정된 근저당은 경매 시 <strong>우선 변제</strong>됩니다. 선순위 채권 합계가 집값에 가까우면 경매 후 내 보증금까지 돌아오지 않을 수 있습니다.</p>\n<p><strong>국토교통부 실거래가 공개시스템</strong>(rt.molit.go.kr)에서 주변 실거래가를 확인하세요. KB부동산 시세도 참고하면 좋습니다. (선순위 채권 합계 + 내 보증금)이 시세의 80%를 넘으면 위험 신호입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 등기부등본(을구 근저당 금액), 실거래가 확인(rt.molit.go.kr)</blockquote>',
      },
      {
        title: '임대인 본인이 맞는지, 건물 소유자인지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">계약서상 임대인과 등기부등본 소유자가 일치하는지 확인하세요</strong></p>\n<p>전세사기의 대표적 수법 중 하나가 <strong>소유자가 아닌 사람</strong>이 임대인을 사칭하는 것입니다. 등기부등본 갑구의 소유자 이름과 계약서의 임대인 이름이 일치하는지 반드시 확인하세요.</p>\n<p>대리인이 계약하는 경우에는 <strong>위임장과 인감증명서</strong>를 확인해야 합니다. 법인 소유 건물이면 법인등기부등본도 떼보세요. 건축물대장(정부24)에서 건물 용도가 주거용인지도 확인해두면 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 등기부등본(소유자 확인), 임대차계약서, 건축물대장(gov.kr)</blockquote>',
      },
      {
        title: '전세보증금 반환보증보험 가입 가능 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">보증보험 가입이 안 되면 위험 신호입니다</strong></p>\n<p>HUG(주택도시보증공사), SGI서울보증 등에서 <strong>전세보증금 반환보증보험</strong> 가입이 가능한지 확인하세요. 보증 기관이 가입을 거절한다면 해당 물건의 위험도가 높다는 의미일 수 있습니다.</p>\n<p>이미 계약한 상태라면 가능한 빨리 가입을 시도하세요. 전입신고와 확정일자가 완료된 상태여야 가입이 가능합니다. 보증 한도와 보증 기간도 꼼꼼히 확인해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 등기부등본, 임대차계약서, 전입신고 확인, HUG 콜센터(1566-9009)</blockquote>',
      },
    ],
    cases: [
      {
        title: '등기부등본의 근저당을 확인하지 않아 피해를 본 사례',
        summary:
          '전세사기피해자 지원 및 주거안정에 관한 특별법 제정 배경이 된 사건들에서, 계약 전 등기부등본의 근저당 설정 금액을 확인하지 않아 깡통전세 피해를 입은 사례가 다수 있었습니다.',
        takeaway:
          '비슷한 상황이라면 계약 전은 물론 계약 후에도 등기부등본을 주기적으로 확인하세요.',
      },
      {
        title: '대리인과 계약했는데 실제 소유자가 아니었던 사례',
        summary:
          '관련 사례에서도 임대인이라고 주장한 사람이 실제 소유자가 아니거나, 위조된 위임장을 사용한 경우가 자주 문제 됩니다.',
        takeaway:
          '비슷한 상황이라면 등기부등본 소유자와 계약 당사자의 일치 여부를 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '등기부등본은 어디서 떼나요?',
        answer: '<strong>대법원 인터넷등기소</strong>(iros.go.kr)에서 온라인 발급이 가능합니다. 수수료는 1,000원이며, 말소사항 포함으로 발급받는 것이 좋습니다.',
      },
      {
        question: '근저당 금액이 얼마 이상이면 위험한가요?',
        answer: '근저당 금액과 보증금을 합친 금액이 매매가의 <strong>70~80%</strong>를 넘으면 주의가 필요합니다. 국토교통부 실거래가 시스템에서 시세를 확인해보세요.',
      },
      {
        question: '전세사기 신고는 어디에 하나요?',
        answer: '<strong>경찰(112)</strong>에 사기 혐의로 신고하거나, 전세사기피해지원센터에 상담을 요청할 수 있습니다.',
      },
      {
        question: '이미 계약했는데 사기가 의심되면 어떻게 하나요?',
        answer: '즉시 등기부등본을 확인하고, <strong>전입신고와 확정일자</strong>를 확보하세요. 전세보증보험 가입도 빠르게 시도해보세요.',
      },
      {
        question: '공인중개사를 통했는데도 사기일 수 있나요?',
        answer: '중개사가 공모하는 경우도 있습니다. 등기부등본은 <strong>직접 확인</strong>하는 것이 가장 확실합니다.',
      },
      {
        question: '계약금을 이미 보냈는데 취소할 수 있나요?',
        answer: '사기 정황이 있으면 <strong>계약 취소 및 반환 청구</strong>가 가능합니다. 증거를 확보한 뒤 법률상담을 받아보세요.',
      },
      {
        question: '깡통전세는 정확히 뭔가요?',
        answer: '선순위 채권과 보증금을 합한 금액이 <strong>집값 이상</strong>인 상태를 말합니다. 경매 시 보증금 전액 회수가 어려워집니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 전세사기피해지원센터에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 전세 계약 위험도를 확인해보세요',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 피해자 인정 신청 전 준비 서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
      { label: '깡통전세 확인하는 방법과 대처법', href: '/guide/jeonse-fraud/shell-jeonse-check-response' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-victim-application-docs',
    keyword: '전세사기 피해자 인정 신청 전 준비 서류',
    questionKeyword: '전세사기 피해자 인정을 받으려면 어떤 서류가 필요한가요?',
    ctaKeyword: '전세사기 피해자 인정 준비',
    type: '준비서류형',
    meta: {
      title: '전세사기 피해자 인정 신청 전 준비 서류 | 로앤가이드',
      description: '전세사기 피해자 인정 신청에 필요한 서류와 절차를 항목별로 정리했습니다.',
    },
    intro: '전세사기 피해를 입었다는 건 알겠는데, "피해자 인정"을 받아야 지원을 받을 수 있다고 합니다. 어디에 신청하는 건지, 어떤 서류를 준비해야 하는지 막막합니다. 신청 전에 아래 서류를 먼저 확인해보세요.',
    sections: [
      {
        title: '피해자 인정 요건부터 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">전세사기피해자 지원 특별법의 요건을 먼저 확인하세요</strong></p>\n<p>「전세사기피해자 지원 및 주거안정에 관한 특별법」 제2조에 따라, 보증금 미반환과 임대인의 사기 정황, 경매·공매 진행 등이 피해자 인정의 핵심 요건입니다.</p>\n<p>피해자 유형(일반 임차인, 최우선변제 대상 등)에 따라 지원 범위가 달라질 수 있으므로 <strong>본인의 유형</strong>을 먼저 파악하세요. 신청 기한도 있으므로 특별법 시행령에서 기한을 반드시 확인해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 특별법 요건 확인, 본인 피해 유형 파악, 신청 기한 확인</blockquote>',
      },
      {
        title: '기본 서류를 준비하세요 — 계약서, 등기부등본, 전입신고 확인서',
        content:
          '<p><strong style="color:#1e3a5f">임대차계약서와 등기부등본이 가장 기본입니다</strong></p>\n<p><strong>임대차계약서</strong> 원본과 사본을 준비하세요. 건물등기부등본은 말소사항을 포함하여 발급받으면 과거 권리 변동까지 확인됩니다. 주민등록등본으로 전입 사실을 증명하고, 확정일자 부여 확인서도 함께 준비하세요.</p>\n<p>보증금 지급 증빙(<strong>계좌이체 내역서</strong>)은 실제로 보증금을 냈다는 핵심 증거입니다. 은행 인터넷뱅킹에서 직접 출력하거나 창구에서 발급받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 임대차계약서, 등기부등본(말소사항 포함), 주민등록등본, 확정일자 확인서, 이체 내역서</blockquote>',
      },
      {
        title: '피해 사실을 증명하는 서류를 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">보증금 미반환과 사기 정황을 증명하는 자료가 필요합니다</strong></p>\n<p>임대인에게 보증금 반환을 요청한 <strong>내용증명</strong> 발송 및 반송 기록을 준비하세요. 경매가 진행 중이라면 경매개시결정 통지서, 배당요구종기일 통지서도 필요합니다.</p>\n<p>임대인의 사기 정황을 보여주는 자료(허위 매물 광고, 다중 계약 증거, 임대인의 재정 파탄 자료 등)가 있으면 함께 제출하세요. 경찰에 <strong>고소장을 접수</strong>했다면 접수증도 첨부하면 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 내용증명 발송/반송 기록, 경매 통지서, 사기 정황 자료, 고소장 접수증</blockquote>',
      },
      {
        title: '신청 방법과 이후 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">관할 지자체 또는 전세사기피해지원센터에 신청하세요</strong></p>\n<p>관할 시·군·구청 또는 전세사기피해지원센터에 피해자 인정 신청을 합니다. <strong>피해자결정위원회</strong>가 심의하여 인정 여부를 결정합니다.</p>\n<p>인정 후에는 긴급경매유예, 법률지원(<strong>최대 250만원</strong>), 긴급 주거지원, 우선매수권 등의 지원을 받을 수 있습니다. 기각되면 이의신청이 가능하고, 추가 서류를 보완하여 재신청할 수도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 신청서 양식(지자체 확인), 모든 증빙 서류 사본</blockquote>',
      },
    ],
    cases: [
      {
        title: '다중 계약으로 피해를 입은 임차인이 피해자 인정을 받은 사례',
        summary:
          '전세사기피해자 지원 특별법 시행 이후, 하나의 건물에 보증금을 초과하는 다중 임대 계약이 체결되어 피해를 입은 임차인들이 피해자 인정을 받고 경매유예와 법률지원을 받은 사례가 있었습니다.',
        takeaway:
          '비슷한 상황이라면 등기부등본에서 다른 임차인의 임차권등기 여부와 경매 진행 상황을 확인해두세요.',
      },
      {
        title: '서류 미비로 피해자 인정이 지연된 사례',
        summary:
          '관련 사례에서도 보증금 지급 증빙이나 확정일자 기록이 누락되어 심의가 지연된 경우가 자주 문제 됩니다.',
        takeaway:
          '비슷한 상황이라면 계약서, 이체 내역, 확정일자 등 기본 서류를 빠짐없이 준비하세요.',
      },
    ],
    faq: [
      {
        question: '피해자 인정은 어디에 신청하나요?',
        answer: '관할 <strong>시·군·구청</strong> 또는 전세사기피해지원센터에 신청할 수 있습니다.',
      },
      {
        question: '신청 기한이 있나요?',
        answer: '특별법에 따른 <strong>신청 기한</strong>이 있으므로 시행령에서 반드시 확인하세요. 기한 경과 시 지원이 제한될 수 있습니다.',
      },
      {
        question: '피해자 인정을 받으면 어떤 지원을 받나요?',
        answer: '긴급경매유예, 법률지원(<strong>최대 250만원</strong>), 긴급 주거지원, 우선매수권 등을 받을 수 있습니다.',
      },
      {
        question: '임대인이 사기로 처벌받지 않아도 인정받을 수 있나요?',
        answer: '형사 처벌과 별개입니다. <strong>보증금 미반환</strong>과 피해 요건을 충족하면 인정받을 수 있습니다.',
      },
      {
        question: '기각되면 어떻게 하나요?',
        answer: '<strong>이의신청</strong>이 가능합니다. 추가 서류를 보완하여 재신청할 수도 있습니다.',
      },
      {
        question: '보증금 전액을 돌려받을 수 있나요?',
        answer: '피해자 인정이 보증금 <strong>전액 반환</strong>을 보장하지는 않습니다. 경매 배당 등 별도 절차를 통해 회수하게 됩니다.',
      },
      {
        question: '경찰 고소를 꼭 해야 하나요?',
        answer: '필수는 아니지만, 사기 정황을 <strong>소명하는 자료</strong>로 도움이 됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 전세사기피해지원센터에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 전세사기 피해 상황을 확인해보세요',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 의심될 때 가장 먼저 확인할 것', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '깡통전세 확인하는 방법과 대처법', href: '/guide/jeonse-fraud/shell-jeonse-check-response' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'shell-jeonse-check-response',
    keyword: '깡통전세 확인하는 방법과 대처법',
    questionKeyword: '깡통전세인지 어떻게 확인하고 대처해야 하나요?',
    ctaKeyword: '깡통전세 확인 준비',
    type: '실수/함정형',
    meta: {
      title: '깡통전세 확인하는 방법과 대처법 | 로앤가이드',
      description: '깡통전세 여부를 확인하는 방법과 이미 깡통전세에 해당할 때 대처법을 정리했습니다.',
    },
    intro: '"보증금이 집값보다 높을 수 있다"는 이야기를 듣고 불안해졌습니다. 혹시 내 전세가 깡통전세인 건 아닌지 확인하고 싶은데 어디서부터 봐야 하는지 모르겠습니다. 확인 방법과 대처법을 정리했습니다.',
    sections: [
      {
        title: '깡통전세가 뭔지 먼저 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">선순위 채권과 보증금 합계가 집값 이상이면 깡통전세입니다</strong></p>\n<p>깡통전세란 건물에 설정된 <strong>선순위 채권</strong>(근저당 등)과 보증금을 합한 금액이 주택 시세 이상인 상태를 말합니다. 이 경우 집이 경매에 넘어가면 보증금을 전액 돌려받기 어렵습니다.</p>\n<p>최근 집값 하락기에 깡통전세가 많이 발생하고 있습니다. 계약 당시에는 안전했더라도 입주 후 집값이 떨어지면 깡통전세가 될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 선순위 채권 + 보증금 ≥ 집값 → 깡통전세</blockquote>',
      },
      {
        title: '내 전세가 깡통전세인지 확인하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">등기부등본과 시세를 비교하면 알 수 있습니다</strong></p>\n<p>등기부등본 을구에서 <strong>근저당 설정 금액</strong>을 확인하세요. 근저당 채권최고액은 실제 대출금의 120~130% 수준으로 설정되는 경우가 많습니다.</p>\n<p><strong>국토교통부 실거래가 시스템</strong>(rt.molit.go.kr)과 KB부동산 시세로 현재 집값을 확인하세요. (근저당액 × 1.2~1.3) + 보증금이 시세를 넘으면 위험합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 등기부등본(을구), 실거래가 확인(rt.molit.go.kr), KB부동산 시세</blockquote>',
      },
      {
        title: '이미 깡통전세라면 지금 할 수 있는 것',
        content:
          '<p><strong style="color:#1e3a5f">보증보험 가입과 임대인 협의를 먼저 시도하세요</strong></p>\n<p><strong>전세보증금 반환보증보험</strong> 가입을 시도하세요. 가입이 가능하면 가장 확실한 안전장치입니다. 임대인에게 근저당 축소를 요청하는 것도 방법입니다(법적 강제는 어렵지만 내용증명으로 기록을 남기세요).</p>\n<p>상황이 심각하다면 계약 해지와 보증금 반환 청구를 검토해보세요. 이사를 결정했다면 <strong>임차권등기명령</strong>을 먼저 신청하여 대항력을 보전해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 전세보증보험 가입 문의(HUG 1566-9009), 등기부등본</blockquote>',
      },
      {
        title: '계약 전이라면 이렇게 예방하세요',
        content:
          '<p><strong style="color:#1e3a5f">계약 전 등기부등본 확인은 필수입니다</strong></p>\n<p>계약 전에 반드시 등기부등본을 확인하고, 보증금이 시세의 <strong>70% 이하</strong>인지 확인하세요. 전세보증보험 가입 가능 여부를 사전에 확인하는 것도 좋은 방법입니다.</p>\n<p>계약 후에는 <strong>전입신고와 확정일자</strong>를 즉시 완료하세요. 대법원 인터넷등기소에서 부동산 변동 알림 서비스를 신청해두면 등기 변동 시 문자로 알려줍니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 등기부등본, 실거래가 확인, 전세보증보험 사전 문의</blockquote>',
      },
    ],
    cases: [
      {
        title: '집값 하락으로 깡통전세가 된 사례',
        summary:
          '관련 사례에서도 계약 당시에는 안전했으나 입주 후 집값이 하락하면서 깡통전세가 된 경우가 자주 문제 됩니다. 선순위 근저당이 이미 설정된 상태에서 시세가 떨어지면 보증금 회수가 어려워집니다.',
        takeaway:
          '비슷한 상황이라면 등기부등본을 주기적으로 확인하고, 전세보증보험 가입 여부를 점검하세요.',
      },
      {
        title: '임대인이 추가 대출을 받아 깡통전세가 된 사례',
        summary:
          '관련 사례에서도 입주 후 임대인이 추가 근저당을 설정하여 깡통전세 상태가 된 경우가 자주 문제 됩니다.',
        takeaway:
          '비슷한 상황이라면 등기부등본 변동 알림 서비스를 신청해두세요.',
      },
    ],
    faq: [
      {
        question: '깡통전세인지 간단하게 확인하는 공식이 있나요?',
        answer: '(근저당액 × 1.2) + 보증금 > 시세이면 <strong>위험</strong>합니다. 실거래가와 KB시세를 함께 확인해보세요.',
      },
      {
        question: '등기부등본 변동 알림은 어떻게 신청하나요?',
        answer: '<strong>대법원 인터넷등기소</strong>에서 부동산 변동 알림 서비스를 신청할 수 있습니다.',
      },
      {
        question: '깡통전세인데 전세보증보험 가입이 되나요?',
        answer: '보증금이 감정가 대비 일정 비율 이하여야 <strong>가입이 가능</strong>합니다. 이미 초과 상태이면 가입이 불가능할 수 있습니다.',
      },
      {
        question: '임대인에게 근저당 줄여달라고 할 수 있나요?',
        answer: '법적 강제는 어렵지만 <strong>요청은 가능</strong>합니다. 내용증명으로 기록을 남겨두세요.',
      },
      {
        question: '깡통전세인데 경매가 시작되면 어떻게 하나요?',
        answer: '<strong>배당요구</strong>를 신청하세요. 소액임차인 최우선변제 해당 여부도 확인해보세요.',
      },
      {
        question: '전세 계약 해지를 요구할 수 있나요?',
        answer: '임대인의 의무 위반이 있으면 해지를 검토할 수 있지만, 단순 깡통전세만으로는 <strong>해지 사유</strong>가 되기 어렵습니다.',
      },
      {
        question: '집값이 오르면 깡통전세가 아니게 되나요?',
        answer: '시세가 회복되면 위험도가 낮아집니다. <strong>주기적으로 시세를 확인</strong>해보세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 전세사기피해지원센터에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 전세 계약 위험도를 확인해보세요',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 의심될 때 가장 먼저 확인할 것', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 피해자 인정 신청 전 준비 서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-victim-recognition-process',
    keyword: '전세사기 피해자 인정 신청 절차와 필요 서류',
    questionKeyword: '전세사기 피해자 인정 신청은 어떤 절차로 진행되고 어떤 서류가 필요한가요?',
    ctaKeyword: '전세사기 피해자 인정 신청',
    type: '절차형',
    meta: {
      title: '전세사기 피해자 인정 신청 절차와 필요 서류 | 로앤가이드',
      description: '전세사기 피해자 인정 신청 절차와 필요한 서류, 인정 후 받을 수 있는 지원 내용을 정리했습니다.',
    },
    intro: '전세보증금을 돌려받지 못하고 있습니다. 전세사기 피해자로 인정받으면 다양한 지원을 받을 수 있다는데, 절차가 복잡하고 어디서부터 시작해야 하는지 막막합니다. 피해자 인정 신청 절차와 필요 서류를 정리했습니다.',
    timelineSteps: ['피해자 인정 요건 확인', 'LH/주거복지센터 신청', '필요 서류 준비', '인정 후 지원 수령'],
    sections: [
      {
        title: '피해자 인정 요건부터 확인하세요 — 전세사기피해자지원법 기준',
        content:
          '<p><strong style="color:#1e3a5f">특별법이 정한 요건을 충족해야 피해자로 인정됩니다</strong></p>\n<p>「전세사기피해자 지원 및 주거안정에 관한 특별법」에 따라 ①<strong>보증금 미반환</strong>, ②임대인의 <strong>사기 정황</strong>(다중 계약, 깡통전세 등), ③경매·공매 진행 또는 보증금 회수 불가 상태 등이 핵심 요건입니다.</p>\n<p>피해자 유형(일반 임차인, 소액임차인, 최우선변제 대상 등)에 따라 <strong>지원 범위가 달라질 수 있으므로</strong> 본인의 상황을 먼저 파악하세요. 신청 기한도 시행령에서 반드시 확인해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: ①보증금 미반환 ②사기 정황 ③경매/보증금 회수 불가 — 특별법 제2조</blockquote>',
      },
      {
        title: 'LH 또는 주거복지센터에 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">관할 LH 주거복지센터 또는 지자체에 피해자 인정을 신청합니다</strong></p>\n<p><strong>LH 주거복지센터</strong>(1600-1004) 또는 관할 시·군·구청에 피해자 인정 신청서를 제출합니다. 전세사기피해지원센터에서 상담과 접수를 도와줍니다.</p>\n<p>신청 후 <strong>피해자결정위원회</strong>가 서류를 심의하여 인정 여부를 결정합니다. 심의 기간은 사안에 따라 다르지만, 서류가 완비되어야 지연 없이 진행됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신청처: LH 주거복지센터(1600-1004) / 시·군·구청 / 전세사기피해지원센터</blockquote>',
      },
      {
        title: '필요 서류를 빠짐없이 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">임대차계약서, 등기부등본, 보증금 미반환 증빙이 핵심입니다</strong></p>\n<p>기본 서류: ①<strong>임대차계약서</strong> 원본·사본, ②<strong>건물등기부등본</strong>(말소사항 포함), ③<strong>주민등록등본</strong>(전입 사실 증명), ④<strong>확정일자 부여 확인서</strong>, ⑤보증금 지급 증빙(<strong>계좌이체 내역서</strong>).</p>\n<p>피해 증빙: ⑥보증금 반환 요청 <strong>내용증명</strong> 발송 기록, ⑦경매개시결정 통지서(경매 진행 시), ⑧임대인의 사기 정황 자료(다중 계약 증거, 재정 파탄 자료 등), ⑨경찰 고소장 접수증(고소한 경우).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류: 계약서, 등기부등본, 전입확인, 이체내역, 내용증명, 경매통지서, 사기정황자료</blockquote>',
      },
      {
        title: '인정 후 받을 수 있는 지원 내용을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">긴급주거 지원부터 보증금 반환까지 다양한 지원이 있습니다</strong></p>\n<p>피해자로 인정되면 ①<strong>긴급경매유예</strong>(경매 절차 일시 중지), ②<strong>법률지원</strong>(최대 250만원), ③<strong>긴급 주거지원</strong>(임시 거처 제공), ④<strong>우선매수권</strong>(경매 시 해당 주택 우선 매수) 등을 받을 수 있습니다.</p>\n<p>기각되더라도 <strong>이의신청</strong>이 가능하고, 추가 서류를 보완하여 재신청할 수도 있습니다. 지원 내용은 피해 유형과 상황에 따라 달라지므로 센터에 구체적으로 문의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원: 경매유예, 법률지원(250만원), 긴급주거, 우선매수권 | 기각 시 이의신청 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '다중 계약 피해자가 인정을 받고 경매유예를 받은 사례',
        summary:
          '관련 사례에서도 임대인이 동일 건물에 보증금을 초과하는 다수의 임대 계약을 체결하여 피해를 입은 임차인들이 피해자 인정을 받아 경매유예와 법률지원을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 등기부등본에서 다른 임차인의 권리 설정 여부를 확인하고, 서류를 빠짐없이 준비하여 신청하세요.',
      },
      {
        title: '서류 미비로 심의가 지연된 사례',
        summary:
          '관련 사례에서도 보증금 지급 증빙이나 확정일자 기록이 누락되어 피해자 인정 심의가 수개월 지연된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 계약서, 이체 내역, 확정일자 등 기본 서류를 빠짐없이 확인하고 제출하세요.',
      },
    ],
    faq: [
      {
        question: '피해자 인정 신청은 어디에 하나요?',
        answer: '<strong>LH 주거복지센터</strong>(1600-1004) 또는 관할 시·군·구청에 신청할 수 있습니다.',
      },
      {
        question: '신청 기한이 있나요?',
        answer: '특별법 시행령에 따른 <strong>신청 기한</strong>이 있으므로 반드시 확인하세요. 기한 경과 시 지원이 제한됩니다.',
      },
      {
        question: '피해자 인정까지 얼마나 걸리나요?',
        answer: '서류가 완비된 경우 <strong>피해자결정위원회</strong> 심의를 거쳐 결정됩니다. 서류 미비 시 지연될 수 있습니다.',
      },
      {
        question: '임대인이 형사 처벌을 받지 않아도 인정되나요?',
        answer: '형사 처벌과 별개입니다. <strong>보증금 미반환</strong>과 피해 요건을 충족하면 인정받을 수 있습니다.',
      },
      {
        question: '경찰 고소를 꼭 해야 하나요?',
        answer: '필수는 아니지만, 사기 정황을 <strong>소명하는 자료</strong>로 활용되어 도움이 됩니다.',
      },
      {
        question: '기각되면 어떻게 하나요?',
        answer: '<strong>이의신청</strong>이 가능하며, 추가 서류를 보완하여 재신청할 수도 있습니다.',
      },
      {
        question: '보증금 전액을 돌려받을 수 있나요?',
        answer: '피해자 인정이 보증금 <strong>전액 반환을 보장하지는 않습니다</strong>. 경매 배당 등 별도 절차를 통해 회수하게 됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 전세사기피해지원센터에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 전세사기 피해 상황을 확인해보세요',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 의심될 때 가장 먼저 확인할 것', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '깡통전세 확인하는 방법과 대처법', href: '/guide/jeonse-fraud/shell-jeonse-check-response' },
      { label: '전세사기 피해자 인정 신청 전 준비 서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'shell-jeonse-verification-checklist',
    keyword: '깡통전세 확인 방법과 계약 전 체크리스트',
    questionKeyword: '깡통전세인지 확인하려면 계약 전에 뭘 체크해야 하나요?',
    ctaKeyword: '깡통전세 확인',
    type: '체크리스트형',
    meta: {
      title: '깡통전세 확인 방법과 계약 전 체크리스트 | 로앤가이드',
      description: '전세 계약 전 깡통전세 여부를 확인하는 방법과 안전한 계약을 위한 체크리스트를 정리했습니다.',
    },
    intro: '전세 계약을 앞두고 있는데 깡통전세가 걱정됩니다. 뉴스에서 전세사기 이야기를 보면서 불안해졌는데, 계약 전에 뭘 확인해야 안전한 건지 모르겠습니다. 계약 전 확인해야 할 항목을 정리했습니다.',
    timelineSteps: ['등기부등본 확인', '시세 대비 비율 확인', '보증보험 가능 여부', '체크리스트 점검'],
    sections: [
      {
        title: '등기부등본부터 확인하세요 — 근저당, 가등기, 신탁이 핵심입니다',
        content:
          '<p><strong style="color:#1e3a5f">등기부등본 을구의 근저당과 갑구의 가등기·신탁을 확인하세요</strong></p>\n<p><strong>대법원 인터넷등기소</strong>(iros.go.kr)에서 건물등기부등본을 발급받으세요(수수료 1,000원). 을구에서 <strong>근저당 설정 금액</strong>을 확인하고, 갑구에서 <strong>가등기, 가압류, 신탁 등기</strong>가 있는지 살펴보세요.</p>\n<p>신탁 등기가 되어 있으면 소유권이 신탁사에 있으므로 <strong>신탁사의 동의</strong> 없이 체결된 임대차 계약은 보호받기 어렵습니다. 가등기가 있으면 소유권 이전 위험이 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 을구(근저당 금액), 갑구(가등기/가압류/신탁) — 인터넷등기소(iros.go.kr)</blockquote>',
      },
      {
        title: '시세 대비 보증금 비율을 확인하세요 — 80% 이상이면 주의',
        content:
          '<p><strong style="color:#1e3a5f">선순위 채권 + 보증금이 시세의 80%를 넘으면 위험합니다</strong></p>\n<p><strong>국토교통부 실거래가 시스템</strong>(rt.molit.go.kr)과 KB부동산 시세에서 해당 주택의 현재 시세를 확인하세요. (선순위 근저당 금액 + 내 보증금)이 시세의 <strong>80%를 넘으면</strong> 깡통전세 위험이 높습니다.</p>\n<p>근저당 채권최고액은 실제 대출금의 120~130% 수준으로 설정되는 경우가 많으므로, 실제 대출 잔액은 은행에 확인하는 것이 더 정확합니다. 시세가 하락할 가능성도 고려하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: (근저당 + 보증금) ÷ 시세 ≥ 80% → 주의 필요 | 실거래가(rt.molit.go.kr)</blockquote>',
      },
      {
        title: '보증보험 가입 가능 여부를 확인하세요 — HUG, SGI',
        content:
          '<p><strong style="color:#1e3a5f">보증보험 가입이 거절되면 그 자체가 위험 신호입니다</strong></p>\n<p>계약 전에 <strong>HUG(주택도시보증공사)</strong>와 <strong>SGI서울보증</strong>에 전세보증금 반환보증보험 가입이 가능한지 먼저 확인하세요. 보증 기관이 가입을 거절한다면 해당 물건의 위험도가 높다는 의미입니다.</p>\n<p>보증보험에 가입하면 임대인이 보증금을 반환하지 않을 때 <strong>보증 기관이 대신 지급</strong>하므로 가장 확실한 안전장치입니다. 보증 한도와 보증료도 미리 확인해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: HUG(1566-9009) / SGI서울보증 — 가입 거절 시 위험 물건일 가능성 높음</blockquote>',
      },
      {
        title: '체크리스트를 정리하세요 — 등기, 시세, 보험, 세금체납',
        content:
          '<p><strong style="color:#1e3a5f">계약 전 반드시 확인해야 할 4가지 항목을 점검하세요</strong></p>\n<p>①<strong>등기부등본</strong>: 근저당·가등기·신탁·가압류 여부, 소유자와 임대인 일치 여부. ②<strong>시세 확인</strong>: 보증금이 시세의 70~80% 이하인지 확인. ③<strong>보증보험</strong>: HUG/SGI 가입 가능 여부 사전 확인. ④<strong>임대인 세금체납</strong>: 국세·지방세 완납증명서 요청(미납 시 보증금보다 세금이 우선 변제될 수 있음).</p>\n<p>이 4가지를 모두 통과해야 안전한 전세 계약입니다. 하나라도 불안하면 <strong>계약을 재검토</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크리스트: ①등기부등본 ②시세 대비 비율 ③보증보험 가입 ④세금체납 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '신탁 등기를 확인하지 않아 보증금을 잃은 사례',
        summary:
          '관련 사례에서도 등기부등본에 신탁 등기가 설정되어 있었으나 이를 확인하지 않고 계약하여 임대차 보호를 받지 못한 경우가 있습니다. 신탁사의 동의 없는 계약은 대항력이 인정되지 않았습니다.',
        takeaway:
          '비슷한 상황이라면 등기부등본 갑구에 신탁 등기가 있는지 반드시 확인하고, 있다면 신탁사에 임대 동의 여부를 확인하세요.',
      },
      {
        title: '보증보험 가입으로 보증금을 보전한 사례',
        summary:
          '관련 사례에서도 임대인이 보증금을 반환하지 못했으나, 전세보증금 반환보증보험에 가입되어 있어 HUG로부터 보증금을 전액 돌려받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 계약 전 보증보험 가입 가능 여부를 반드시 확인하고, 가능하면 즉시 가입하세요.',
      },
    ],
    faq: [
      {
        question: '등기부등본은 어디서 떼나요?',
        answer: '<strong>대법원 인터넷등기소</strong>(iros.go.kr)에서 온라인 발급이 가능합니다. 수수료는 1,000원이며, 말소사항 포함으로 발급받으세요.',
      },
      {
        question: '보증금이 시세의 몇 퍼센트 이하여야 안전한가요?',
        answer: '선순위 채권과 보증금 합계가 시세의 <strong>70~80% 이하</strong>이면 비교적 안전합니다.',
      },
      {
        question: '보증보험 가입 비용은 얼마인가요?',
        answer: '보증금 규모에 따라 다르며, 연간 보증금의 <strong>0.1~0.2%</strong> 수준입니다. HUG 콜센터(1566-9009)에서 확인하세요.',
      },
      {
        question: '임대인의 세금체납을 어떻게 확인하나요?',
        answer: '임대인에게 <strong>국세·지방세 완납증명서</strong> 제출을 요청하세요. 미납 시 보증금보다 세금이 우선 변제됩니다.',
      },
      {
        question: '신탁 등기가 있으면 무조건 위험한가요?',
        answer: '신탁사의 <strong>임대 동의</strong>가 있으면 계약이 보호될 수 있습니다. 반드시 신탁사에 확인하세요.',
      },
      {
        question: '공인중개사를 통하면 안전한가요?',
        answer: '중개사를 통해도 <strong>등기부등본은 직접 확인</strong>하는 것이 가장 확실합니다.',
      },
      {
        question: '계약 후에도 확인해야 할 것이 있나요?',
        answer: '계약 후 즉시 <strong>전입신고와 확정일자</strong>를 완료하고, 등기부등본 변동 알림 서비스를 신청하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 전세사기피해지원센터에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 전세 계약 위험도를 확인해보세요',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 의심될 때 가장 먼저 확인할 것', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '깡통전세 확인하는 방법과 대처법', href: '/guide/jeonse-fraud/shell-jeonse-check-response' },
      { label: '전세사기 피해자 인정 신청 전 준비 서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
    ],
  },
];
