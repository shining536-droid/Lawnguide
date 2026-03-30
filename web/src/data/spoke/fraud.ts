import { SpokePage } from '../spoke-pages';

export const fraudPages: SpokePage[] = [
  {
    domain: 'fraud',
    slug: 'used-market-fraud-evidence',
    keyword: '중고거래 사기 당했을 때 증거 모으는 법',
    questionKeyword: '중고거래 사기를 당했는데 증거를 어떻게 모아야 하나요?',
    ctaKeyword: '중고거래 사기 대응',
    type: '상황형',
    meta: {
      title: '중고거래 사기 증거 수집 5단계 총정리 | 로앤가이드',
      description: '중고거래 사기를 당했는데 증거가 없다면? 채팅 캡처, 계좌 추적, 거래 내역 확보까지 경찰 신고 전 반드시 모아야 할 증거 5가지를 지금 확인하세요.',
    },
    intro: '당근마켓에서 물건 값을 보냈는데 판매자가 연락이 끊겼습니다. 프로필도 삭제된 것 같고, 물건은 오지 않습니다. "사기니까 경찰에 신고하면 되겠지"라고 생각했는데, 증거가 없으면 수사가 어렵다고 합니다. 지금부터 뭘 모아야 하는지 정리했습니다.',
    timelineSteps: ['증거 수집', '경찰 신고', '고소장 제출', '민사 청구 검토'],
    sections: [
      {
        title: '삭제되기 전에 모든 화면을 캡처하세요 — 증거의 핵심입니다',
        content:
          '<p><strong style="color:#1e3a5f">대화, 프로필, 송금 내역을 지금 바로 캡처하세요</strong></p>\n<p>가장 먼저 해야 할 일은 <strong>삭제되기 전에 모든 기록을 확보</strong>하는 것입니다. 거래 대화(채팅) 전체를 캡처하세요. 판매자의 닉네임, 전화번호, 계좌번호가 나온 화면도 모두 저장합니다.</p>\n<p>상품 게시글, 송금 내역(<strong>이체확인서</strong>), 택배 송장번호(있으면)를 정리하세요. 캡처할 때는 날짜와 시간이 보이도록 전체 화면으로 찍는 것이 좋습니다. 대화 앱에서 내보내기 기능이 있다면 활용하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 대화 캡처, 판매자 프로필, 송금 내역(이체확인서), 상품 게시글</blockquote>',
      },
      {
        title: '경찰에 신고하세요 — 사이버수사대 활용',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 사이버범죄 신고시스템으로 신고하세요</strong></p>\n<p><strong>경찰청 사이버범죄 신고시스템</strong>(ecrm.police.go.kr) 또는 112로 신고할 수 있습니다. 신고 시 피해 금액, 상대방 정보(계좌번호, 전화번호, 닉네임), 거래 경위를 정리해서 제출하세요.</p>\n<p>사기죄는 <strong>형법 제347조</strong>에 해당하며, 기망행위(속이는 행위)→착오→처분행위→재산 손해의 구조로 성립합니다. 피해 금액이 적더라도 신고는 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 증거 자료 정리, 경찰청 사이버범죄 신고(ecrm.police.go.kr)</blockquote>',
      },
      {
        title: '고소장을 제출하면 수사가 본격적으로 시작됩니다',
        content:
          '<p><strong style="color:#1e3a5f">고소장에 피고소인 정보와 증거 목록을 기재하세요</strong></p>\n<p>고소장에는 피고소인 정보(이름, 계좌번호, 전화번호 등), <strong>범죄 사실</strong>(언제, 어떻게 속였는지), 증거 목록을 기재합니다. 경찰서 민원실에 직접 제출하거나 온라인으로 접수할 수 있습니다.</p>\n<p>고소 접수 후에는 수사관이 배정되어 수사가 진행됩니다. 수사 진행 상황은 경찰에 문의하면 확인할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 고소장 작성(피고소인 정보, 범죄 사실, 증거 목록)</blockquote>',
      },
      {
        title: '형사 절차와 별개로 민사 청구도 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명과 소액사건심판으로 돈을 돌려받을 수 있습니다</strong></p>\n<p>형사 절차와 별개로 <strong>내용증명</strong>을 보내 반환을 요청할 수 있습니다. 응하지 않으면 소액사건심판(3,000만원 이하)이나 지급명령을 활용하세요.</p>\n<p>다만 상대방의 재산을 파악하기 어려우면 강제집행의 실효성이 떨어질 수 있습니다. <strong>더치트</strong>(thecheat.co.kr) 같은 사기 피해 공유 사이트에서 동일 계좌 피해 사례를 확인해보는 것도 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 내용증명, 소액사건심판 또는 지급명령 신청</blockquote>',
      },
    ],
    cases: [
      {
        title: '채팅 기록으로 사기 의도를 입증한 사례',
        summary:
          '관련 사례에서도 중고거래 플랫폼의 대화 기록이 사기 의도를 입증하는 핵심 증거로 활용된 경우가 자주 있습니다. 판매자가 "배송했다"고 거짓 메시지를 보낸 기록이 기망 행위의 증거가 되었습니다.',
        takeaway:
          '비슷한 상황이라면 대화가 삭제되기 전에 전체 대화 내용을 캡처하고 별도로 저장해두세요.',
      },
      {
        title: '동일 수법으로 여러 명에게 사기를 친 범인이 검거된 사례',
        summary:
          '관련 사례에서도 같은 계좌로 여러 피해자가 신고하면서 합동 수사가 이루어진 경우가 있습니다. 더치트(thecheat.co.kr) 같은 사기 피해 공유 사이트에서 동일 계좌 피해 사례를 확인할 수 있습니다.',
        takeaway:
          '비슷한 상황이라면 상대방의 계좌번호로 더치트 등에서 다른 피해 사례가 있는지 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '피해 금액이 적어도 신고할 수 있나요?',
        answer: '금액과 관계없이 <strong>사기죄</strong>는 성립할 수 있습니다. 소액이라도 신고를 권장합니다.',
      },
      {
        question: '판매자 실명을 모르는데 고소할 수 있나요?',
        answer: '계좌번호, 전화번호 등으로 특정할 수 있습니다. <strong>"성명불상"</strong>으로도 고소가 가능합니다.',
      },
      {
        question: '더치트 같은 사이트에 등록하면 도움이 되나요?',
        answer: '동일 계좌 피해를 확인할 수 있고, <strong>합동 수사</strong>로 이어지는 경우도 있습니다.',
      },
      {
        question: '경찰 신고 후 수사가 얼마나 걸리나요?',
        answer: '사건에 따라 다르며, 통상 <strong>2~6개월</strong>입니다. 수사 진행 상황은 경찰에 문의할 수 있습니다.',
      },
      {
        question: '민사소송으로 돈을 돌려받을 수 있나요?',
        answer: '상대방에게 재산이 있으면 가능합니다. <strong>소액사건심판</strong>이나 지급명령을 활용해보세요.',
      },
      {
        question: '중고거래 플랫폼에 신고하면 어떤 도움을 받나요?',
        answer: '계정 정지와 거래 차단 조치가 가능합니다. 일부 플랫폼은 <strong>안전결제 환불</strong>을 지원합니다.',
      },
      {
        question: '직거래에서 물건을 받았는데 가품이면 사기인가요?',
        answer: '진품으로 속여 판매했다면 <strong>사기죄</strong>에 해당할 수 있습니다. 제품 감정서와 대화 기록을 확보하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 사기 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '투자 사기 의심될 때 먼저 확인할 3가지', href: '/guide/fraud/investment-fraud-checklist' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-complaint-preparation',
    keyword: '사기죄 고소장 쓰기 전에 정리할 것',
    questionKeyword: '사기죄 고소장을 쓰려는데 무엇을 정리해야 하나요?',
    ctaKeyword: '사기 고소 준비',
    type: '준비서류형',
    meta: {
      title: '사기죄 고소장 작성 전 준비할 3가지 핵심 | 로앤가이드',
      description: '사기죄 고소장을 쓰기 전에 꼭 정리해야 할 피의자 정보, 범죄 사실 요약, 증거 목록 3가지를 빠짐없이 바로 정리해보세요.',
    },
    intro: '돈을 빌려줬는데 "갚겠다"는 약속만 반복하고 결국 연락이 끊겼습니다. 사기인 것 같아서 고소하려는데, 고소장에 뭘 써야 하는지 막막합니다. 고소장을 쓰기 전에 아래 항목을 먼저 정리해보세요.',
    sections: [
      {
        title: '사기죄의 핵심을 먼저 이해하세요 — "처음부터 속일 생각이었는지"',
        content:
          '<p><strong style="color:#1e3a5f">단순 채무불이행과 사기는 다릅니다</strong></p>\n<p><strong>형법 제347조</strong> 사기죄는 기망행위→착오→처분행위→재산 손해의 구조로 성립합니다. 핵심은 "처음부터 갚을 의사나 능력이 없었는지"입니다.</p>\n<p>빌릴 당시의 재정 상태, 다른 피해자 유무, 허위 진술 등이 기망의 정황 증거가 됩니다. <strong>단순히 돈을 안 갚는 것</strong>만으로는 사기가 아닐 수 있으므로, 기망의 정황을 구체적으로 정리하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 처음부터 갚을 의사/능력 없이 빌렸다면 사기, 갚을 생각이었으나 못 갚는 건 채무불이행</blockquote>',
      },
      {
        title: '피고소인 정보를 최대한 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">성명, 연락처, 주소를 알면 수사가 빨라집니다</strong></p>\n<p>피고소인의 성명, 주민등록번호(알면), 연락처, 주소를 정리하세요. 모르는 정보가 있으면 <strong>계좌번호, 전화번호</strong> 등으로 특정할 수 있습니다.</p>\n<p>모든 정보를 모르더라도 "성명불상"으로 고소가 가능합니다. 수사기관이 금융기관 조회 등을 통해 신원을 파악합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 성명, 연락처, 주소, 계좌번호 등 알고 있는 정보 모두 정리</blockquote>',
      },
      {
        title: '범죄 사실을 시간 순서대로 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">언제, 어떻게 속였는지를 구체적으로 기재하세요</strong></p>\n<p>고소장의 범죄 사실은 <strong>시간 순서</strong>대로 구체적으로 기재해야 합니다. 언제 만났는지, 어떤 말로 속였는지, 얼마를 주었는지, 이후 어떻게 되었는지를 정리하세요.</p>\n<p>구체적인 날짜와 금액이 중요합니다. 약속한 내용과 실제 행동의 불일치를 명확히 보여주세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 날짜별 경위 정리, 약속 내용, 실제 결과, 피해 금액</blockquote>',
      },
      {
        title: '증거를 목록으로 만들어 첨부하세요',
        content:
          '<p><strong style="color:#1e3a5f">증거마다 "무엇을 증명하는 자료인지" 설명을 붙이세요</strong></p>\n<p><strong>이체 내역</strong>, 차용증, 계약서, 대화 기록(문자/카톡), 녹음 파일, 내용증명, 관련 서류를 모두 정리하세요. 대화 당사자가 녹음한 것은 원칙적으로 증거 사용이 가능합니다.</p>\n<p>증거마다 "이 자료는 ○○을 증명합니다"라는 설명을 붙여 <strong>증거 목록</strong>을 만들면 수사관이 사건을 빠르게 파악하는 데 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 이체 내역, 차용증, 대화 기록, 녹음, 내용증명 — 증거 목록 작성</blockquote>',
      },
    ],
    cases: [
      {
        title: '차용증 없이 이체 내역과 대화 기록으로 사기를 입증한 사례',
        summary:
          '관련 사례에서도 차용증이 없더라도 계좌 이체 내역과 카카오톡 대화에서 "반드시 갚겠다"는 약속이 기망 행위의 증거로 인정된 경우가 자주 있습니다.',
        takeaway:
          '비슷한 상황이라면 이체 내역과 상대방의 약속이 담긴 대화 기록을 시간순으로 정리해두세요.',
      },
      {
        title: '다수 피해자가 동일 인물을 고소하여 수사가 빨라진 사례',
        summary:
          '관련 사례에서도 여러 명이 같은 사람을 고소하면 합동 수사로 전환되어 수사 속도가 빨라지는 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 같은 피해를 입은 사람이 있는지 온라인 커뮤니티 등에서 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '사기죄 고소 시효는 얼마인가요?',
        answer: '고소 기한은 없습니다(친고죄 아님). <strong>공소시효는 10년</strong>입니다.',
      },
      {
        question: '돈을 빌려준 건데 사기가 되나요?',
        answer: '처음부터 갚을 <strong>의사나 능력</strong> 없이 빌렸다면 사기입니다. 단순 채무불이행과 구분이 필요합니다.',
      },
      {
        question: '고소장은 어디에 제출하나요?',
        answer: '가까운 <strong>경찰서 민원실</strong> 또는 온라인(ecrm.police.go.kr)으로 접수할 수 있습니다.',
      },
      {
        question: '변호사 없이 고소장을 쓸 수 있나요?',
        answer: '본인 작성이 가능합니다. <strong>대한법률구조공단</strong>에서 무료 도움을 받을 수도 있습니다.',
      },
      {
        question: '고소 후 합의하면 처벌이 달라지나요?',
        answer: '피해 회복 시 <strong>처벌 감경</strong>이 가능합니다. 합의금 수준과 피해 정도에 따라 달라집니다.',
      },
      {
        question: '녹음도 증거로 쓸 수 있나요?',
        answer: '대화 <strong>당사자가 녹음</strong>한 것은 원칙적으로 증거 사용이 가능합니다.',
      },
      {
        question: '고소와 고발은 뭐가 다른가요?',
        answer: '<strong>고소</strong>는 피해자가, 고발은 제3자가 하는 것입니다. 사기 피해자는 고소합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 사기 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '중고거래 사기 당했을 때 증거 모으는 법', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '투자 사기 의심될 때 먼저 확인할 3가지', href: '/guide/fraud/investment-fraud-checklist' },
      { label: '이혼 가이드', href: '/guide/divorce' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'investment-fraud-checklist',
    keyword: '투자 사기 의심될 때 먼저 확인할 3가지',
    questionKeyword: '투자 사기인 것 같은데 뭘 먼저 확인해야 하나요?',
    ctaKeyword: '투자 사기 확인 준비',
    type: '체크리스트형',
    meta: {
      title: '투자 사기 의심될 때 즉시 확인할 3가지 | 로앤가이드',
      description: '투자 사기가 의심된다면 지금 바로 확인하세요. 금감원 등록 여부, 수익 구조 분석, 증거 확보 방법까지 피해를 막는 3가지 체크포인트를 지금 확인하세요.',
    },
    intro: '"월 5% 확정 수익"이라는 말에 3천만원을 투자했는데, 두 달째 수익금이 안 들어옵니다. 연락은 되는데 "시스템 오류"라며 계속 기다리라고 합니다. 투자 사기인지 아닌지 판단하기 어렵습니다. 이 3가지를 먼저 확인해보세요.',
    sections: [
      {
        title: '업체가 정식 등록된 곳인지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원에서 업체 등록 여부를 조회하세요</strong></p>\n<p><strong>금융감독원 금융소비자정보포털</strong>(fine.fss.or.kr)에서 해당 업체가 정식으로 등록되어 있는지 확인하세요. 미등록 업체의 투자 권유는 불법일 가능성이 높습니다.</p>\n<p>인허가 없이 원금 보장과 고수익을 약속하며 자금을 모집하는 행위는 <strong>유사수신행위의 규제에 관한 법률</strong>로 처벌됩니다. 금감원 불법금융신고센터(1332)에 문의하면 확인할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 업체명, 금감원 금융소비자정보포털(fine.fss.or.kr) 조회</blockquote>',
      },
      {
        title: '수익 구조가 현실적인지 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">확정 고수익 약속은 전형적인 사기 수법입니다</strong></p>\n<p>"원금 보장 + 고수익"을 약속하는 금융상품은 현실에 존재하지 않습니다. <strong>확정 수익</strong>을 내세우며 투자금을 모집하는 것은 전형적인 사기 수법입니다.</p>\n<p>신규 투자금으로 기존 투자자에게 수익을 지급하는 <strong>폰지 사기</strong> 구조일 수 있습니다. 배당금 지급이 지연되거나 중단되는 것은 가장 위험한 신호입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">위험 신호: 확정 고수익 약속, 원금 보장, 배당 지연, 신규 투자 독려</blockquote>',
      },
      {
        title: '지금까지의 거래 기록을 모두 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">투자금 이체 내역부터 홍보 자료까지 모두 보관하세요</strong></p>\n<p><strong>투자금 이체 내역</strong>, 계약서·약정서, 수익금 입금 내역, 대화 기록(카톡/문자/이메일), 홍보 자료, 지인 소개 경위를 모두 정리하세요.</p>\n<p>날짜순으로 정리하면 사기 구조가 더 명확하게 보입니다. 홍보 자료에 "확정 수익", "원금 보장" 문구가 있으면 <strong>유사수신 증거</strong>가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 이체 내역, 계약서, 수익금 내역, 대화 기록, 홍보 자료 — 날짜순 정리</blockquote>',
      },
      {
        title: '신고와 법적 대응을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">금감원 신고와 경찰 고소를 병행하세요</strong></p>\n<p><strong>금감원 불법금융신고</strong>(1332)로 행정 조치를 요청하고, 경찰 사이버수사대에 형사 고소를 함께 진행하세요. 두 절차는 병행이 가능합니다.</p>\n<p>민사소송으로 투자금 반환을 청구할 수도 있습니다. 상대방 재산에 <strong>가압류</strong>를 걸어두면 재산 처분을 막을 수 있습니다. 다른 피해자가 있다면 합동 고소가 수사 속도를 높이는 데 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 금감원 신고(1332), 경찰 고소(ecrm.police.go.kr), 민사 가압류 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '확정 수익을 약속한 업체가 유사수신으로 적발된 사례',
        summary:
          '관련 사례에서도 "월 3~5% 확정 수익"을 약속하며 투자금을 모집한 업체가 유사수신행위의 규제에 관한 법률 위반으로 적발된 경우가 자주 있습니다.',
        takeaway:
          '비슷한 상황이라면 금감원에서 해당 업체의 등록 여부를 확인하고, 투자 권유 자료를 모두 보관해두세요.',
      },
      {
        title: '지인 소개로 투자했다가 피해를 본 사례',
        summary:
          '관련 사례에서도 지인이나 친척의 소개로 투자했다가 피해를 입은 경우가 자주 문제 됩니다. 소개자도 피해자인 경우가 많습니다.',
        takeaway:
          '비슷한 상황이라면 소개 경위, 소개자와의 대화 기록도 함께 정리해두세요.',
      },
    ],
    faq: [
      {
        question: '투자 사기인지 단순 손실인지 어떻게 구분하나요?',
        answer: '핵심은 "처음부터 <strong>속일 의도</strong>가 있었는지"입니다. 허위 정보 제공, 미등록 영업이 정황 증거가 됩니다.',
      },
      {
        question: '금감원 신고와 경찰 고소는 뭐가 다른가요?',
        answer: '금감원은 <strong>행정 조치</strong>(영업정지 등), 경찰은 형사 처벌입니다. 병행이 가능합니다.',
      },
      {
        question: '투자금을 돌려받을 수 있나요?',
        answer: '형사 절차와 별개로 <strong>민사소송</strong>이 가능합니다. 상대방 재산에 가압류를 검토해보세요.',
      },
      {
        question: '가상화폐 투자도 사기죄가 되나요?',
        answer: '기망행위가 있었다면 투자 대상과 관계없이 <strong>사기죄</strong>가 성립할 수 있습니다.',
      },
      {
        question: '유사수신은 뭔가요?',
        answer: '인허가 없이 <strong>원금 보장·고수익</strong>을 약속하며 자금을 모집하는 행위입니다.',
      },
      {
        question: '피해자가 여러 명이면 어떻게 하나요?',
        answer: '<strong>합동 고소</strong>로 수사 속도가 빨라집니다. 피해자 모임을 구성하는 것이 좋습니다.',
      },
      {
        question: '해외 업체도 고소할 수 있나요?',
        answer: '국내에서 피해가 발생했으면 <strong>국내 수사기관</strong>에 신고 가능합니다. 실효성은 사안에 따라 다릅니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 금감원(1332)에서 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 사기 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '중고거래 사기 당했을 때 증거 모으는 법', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'used-market-fraud-police-prep',
    keyword: '중고거래 사기 당했을 때 경찰 신고 전 준비할 것',
    questionKeyword: '중고거래 사기를 당했는데 경찰 신고 전에 뭘 준비해야 하나요?',
    ctaKeyword: '중고거래 사기 신고 준비',
    type: '상황형',
    meta: {
      title: '중고거래 사기 경찰 신고 전 핵심 체크리스트 | 로앤가이드',
      description: '중고거래 사기를 당해 경찰에 신고하려면? 증거 캡처, 계좌지급정지 신청, 고소장 작성법, 민사청구까지 신고 전 준비사항을 바로 정리해보세요.',
    },
    intro: '중고거래 앱에서 물건 값을 송금했는데 판매자가 잠수를 탔습니다. 물건은 오지 않고, 프로필은 삭제된 상태입니다. 경찰에 신고하려는데 막상 뭘 준비해서 가야 하는지 막막합니다. 신고 전에 반드시 챙겨야 할 것들을 정리해보세요.',
    timelineSteps: ['증거 캡처', '신고 접수', '고소장 작성', '계좌정지·민사청구'],
    sections: [
      {
        title: '대화·송금·프로필 — 삭제 전에 모두 캡처하세요',
        content:
          '<p><strong style="color:#1e3a5f">증거가 사라지기 전에 화면 캡처가 최우선입니다</strong></p>\n<p>경찰에 신고하기 전 가장 먼저 해야 할 일은 <strong>모든 기록을 캡처</strong>하는 것입니다. 거래 대화 전체(채팅 내용, 약속 시각, 물건 설명), 판매자 프로필(닉네임, 전화번호, 계좌번호), 송금 내역(<strong>이체확인서</strong>)을 빠짐없이 저장하세요.</p>\n<p>캡처할 때는 <strong>날짜와 시간이 표시되는 전체 화면</strong>으로 찍는 것이 좋습니다. 대화 앱에 내보내기 기능이 있다면 텍스트 파일로도 백업하세요. 상품 게시글 URL과 게시글 캡처도 함께 확보하면 수사에 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 대화 캡처(전체), 판매자 프로필, 이체확인서, 상품 게시글 캡처</blockquote>',
      },
      {
        title: '112 또는 사이버수사대에 신고 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 사이버범죄 신고시스템으로 접수할 수 있습니다</strong></p>\n<p><strong>경찰청 사이버범죄 신고시스템</strong>(ecrm.police.go.kr) 또는 112 전화로 신고할 수 있습니다. 온라인 접수가 편리하지만, 가까운 경찰서 민원실에 직접 방문해도 됩니다.</p>\n<p>신고 시 <strong>피해 금액, 상대방 정보(계좌번호·전화번호·닉네임), 거래 경위</strong>를 정리해서 제출하세요. 사기죄는 <strong>형법 제347조</strong>에 해당하며, 피해 금액이 적더라도 신고가 가능합니다. 신고 접수 번호를 반드시 받아두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 경로: ecrm.police.go.kr(온라인) / 112(전화) / 경찰서 민원실(방문)</blockquote>',
      },
      {
        title: '고소장 작성 시 이 3가지를 반드시 넣으세요',
        content:
          '<p><strong style="color:#1e3a5f">피고소인 정보, 범죄 사실, 증거 목록이 핵심입니다</strong></p>\n<p>고소장에는 ①<strong>피고소인 정보</strong>(이름·닉네임·계좌번호·전화번호 등 아는 것 모두), ②<strong>범죄 사실</strong>(언제, 어떤 플랫폼에서, 어떻게 속였는지를 시간 순서대로), ③<strong>증거 목록</strong>(캡처 자료, 이체확인서 등)을 기재합니다.</p>\n<p>피고소인 실명을 모르면 <strong>"성명불상"</strong>으로 기재해도 됩니다. 수사기관이 금융기관 조회를 통해 신원을 파악합니다. 고소장 제출 후에는 수사관이 배정되어 본격적인 수사가 시작됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">고소장 구성: 피고소인 정보 + 범죄 사실(시간순) + 증거 목록</blockquote>',
      },
      {
        title: '계좌지급정지 신청과 민사청구를 함께 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">송금한 계좌의 지급정지를 먼저 신청하세요</strong></p>\n<p>사기 피해를 당한 즉시 송금한 은행에 <strong>계좌지급정지</strong>를 신청하세요. <strong>전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법</strong>에 따라 피해 금액이 해당 계좌에 남아 있으면 환급받을 수 있습니다.</p>\n<p>형사 절차와 별개로 <strong>내용증명</strong>을 보내 반환을 요청하고, 응하지 않으면 <strong>소액사건심판</strong>(3,000만원 이하)이나 지급명령을 활용하세요. 더치트(thecheat.co.kr)에서 동일 계좌 피해 사례를 확인하는 것도 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">병행 조치: 계좌지급정지(은행) + 내용증명 + 소액사건심판/지급명령</blockquote>',
      },
    ],
    cases: [
      {
        title: '지급정지 신청으로 피해 금액을 환급받은 사례',
        summary:
          '관련 사례에서도 중고거래 사기 직후 은행에 계좌지급정지를 신청하여, 사기 계좌에 남아 있던 피해 금액을 환급받은 경우가 있습니다. 신고가 빠를수록 환급 가능성이 높아집니다.',
        takeaway:
          '비슷한 상황이라면 사기를 인지한 즉시 송금 은행에 계좌지급정지를 신청하세요.',
      },
      {
        title: '고소장에 증거 목록을 체계적으로 첨부하여 수사가 빨라진 사례',
        summary:
          '관련 사례에서도 피해자가 대화 캡처, 이체확인서, 상품 게시글을 날짜순으로 정리한 증거 목록을 첨부하자 수사관이 사건을 빠르게 파악하여 2개월 만에 검거가 이루어진 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 증거마다 "이 자료는 무엇을 증명하는지" 설명을 붙여 목록으로 정리해보세요.',
      },
    ],
    faq: [
      {
        question: '경찰 신고와 고소는 같은 건가요?',
        answer: '<strong>신고</strong>는 사건 발생 사실을 알리는 것이고, <strong>고소</strong>는 처벌을 요구하는 의사표시입니다. 고소장을 제출해야 수사가 본격적으로 시작됩니다.',
      },
      {
        question: '계좌지급정지는 언제까지 신청해야 하나요?',
        answer: '빠를수록 좋습니다. 사기범이 <strong>돈을 인출하기 전</strong>에 신청해야 환급 가능성이 높습니다.',
      },
      {
        question: '피해 금액이 소액이어도 고소할 수 있나요?',
        answer: '금액과 관계없이 <strong>사기죄</strong>는 성립할 수 있습니다. 소액이라도 고소를 권장합니다.',
      },
      {
        question: '판매자 실명을 모르면 어떻게 하나요?',
        answer: '<strong>"성명불상"</strong>으로 고소가 가능합니다. 계좌번호, 전화번호 등으로 수사기관이 신원을 파악합니다.',
      },
      {
        question: '온라인 신고와 경찰서 방문 중 뭐가 나은가요?',
        answer: '결과는 동일합니다. <strong>증거가 많으면 경찰서 방문</strong>이 편리하고, 간단한 사건은 온라인 접수도 좋습니다.',
      },
      {
        question: '고소 후 수사는 얼마나 걸리나요?',
        answer: '사건에 따라 다르며, 통상 <strong>2~6개월</strong>입니다. 수사 진행 상황은 배정된 수사관에게 문의하세요.',
      },
      {
        question: '더치트 같은 사이트에 등록하면 도움이 되나요?',
        answer: '동일 계좌 피해를 확인할 수 있고, <strong>합동 수사</strong>로 이어지는 경우도 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 사기 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '중고거래 사기 당했을 때 증거 모으는 법', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '투자 사기 의심될 때 먼저 확인할 3가지', href: '/guide/fraud/investment-fraud-checklist' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-accused-settlement-penalty',
    keyword: '사기 고소당했는데 합의하면 처벌 안 받나요',
    questionKeyword: '사기죄로 고소당했는데 합의하면 처벌을 안 받을 수 있나요?',
    ctaKeyword: '사기 혐의 대응',
    type: 'Q&A형',
    meta: {
      title: '사기 고소당했을 때 합의하면 처벌 안 받을까? | 로앤가이드',
      description: '사기죄로 고소당했는데 합의하면 정말 처벌을 안 받을까? 합의의 양형 감경 효과, 합의서 작성 시 주의사항, 변호사 선임 시기를 지금 확인하세요.',
    },
    intro: '거래 상대방이 사기로 고소를 했습니다. 정말 속일 생각은 아니었는데, 결과적으로 돈을 돌려주지 못한 상황입니다. 합의하면 처벌을 안 받을 수 있는지, 어떻게 대응해야 하는지 막막합니다. 혐의를 받고 있다면 아래 내용을 먼저 확인해보세요.',
    sections: [
      {
        title: '사기죄는 반의사불벌죄가 아닙니다 — 합의해도 기소될 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">피해자가 처벌을 원하지 않아도 검찰이 기소할 수 있습니다</strong></p>\n<p><strong>형법 제347조 사기죄</strong>는 반의사불벌죄가 아닙니다. 이는 피해자와 합의하여 고소를 취소하더라도, 검찰이 독자적으로 <strong>기소할 수 있다</strong>는 뜻입니다. 폭행죄처럼 "합의하면 끝"이 아니라는 점을 반드시 이해해야 합니다.</p>\n<p>다만 실무적으로 피해자와 합의가 이루어지면 검찰이 <strong>기소유예</strong>나 약식기소 등 관대한 처분을 내리는 경우가 많습니다. 합의 자체가 무의미한 것은 아니지만, 합의만으로 처벌을 완전히 피할 수 있다고 단정하면 안 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사기죄는 반의사불벌죄 아님 → 합의해도 기소 가능 → 그러나 양형에 큰 영향</blockquote>',
      },
      {
        title: '합의의 실질적 효과 — 기소유예·감경·집행유예',
        content:
          '<p><strong style="color:#1e3a5f">피해 회복은 양형에서 가장 중요한 감경 요소입니다</strong></p>\n<p>실무에서 합의는 <strong>양형에 매우 큰 영향</strong>을 미칩니다. 피해자에게 피해 금액을 전액 변제하고 합의한 경우, 검찰 단계에서는 <strong>기소유예</strong>(전과 기록 없음), 재판 단계에서는 <strong>형의 감경</strong>이나 <strong>집행유예</strong>를 받을 가능성이 높아집니다.</p>\n<p>특히 초범이고, 피해 금액이 크지 않으며, 피해자가 "처벌을 원하지 않는다"는 <strong>처벌불원서</strong>를 제출하면 기소유예 가능성이 상당합니다. 반대로 합의 없이 재판에 가면 실형 가능성도 있으므로, 합의 노력은 반드시 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의 효과: 기소유예(전과 없음) / 약식기소(벌금) / 집행유예 가능성 상승</blockquote>',
      },
      {
        title: '합의서 작성 시 반드시 포함해야 할 내용',
        content:
          '<p><strong style="color:#1e3a5f">합의금액, 처벌불원 의사, 추가 청구 포기를 명시하세요</strong></p>\n<p>합의서에는 ①<strong>합의 금액</strong>과 지급 방법(일시불/분할), ②피해자의 <strong>"고소 취소 및 처벌불원" 의사</strong>, ③피해자의 <strong>민·형사상 추가 청구 포기</strong> 문구를 반드시 포함해야 합니다.</p>\n<p>합의서는 <strong>공증</strong>을 받아두는 것이 안전합니다. 분할 지급의 경우 이행 조건과 불이행 시 처리 방안도 명시하세요. 합의서 작성 후에는 피해자가 직접 경찰이나 검찰에 <strong>고소 취소서</strong>와 <strong>처벌불원서</strong>를 제출해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의서 필수 항목: 합의 금액 + 처벌불원 의사 + 추가 청구 포기 + 공증 권장</blockquote>',
      },
      {
        title: '변호사 선임 시기와 진술 준비를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사 전에 변호사를 선임하는 것이 유리합니다</strong></p>\n<p>사기 혐의로 고소당하면 경찰에서 <strong>피의자 조사</strong>를 받게 됩니다. 이때 진술 내용이 이후 재판에 큰 영향을 미치므로, 가능하면 <strong>첫 조사 전에 변호사를 선임</strong>하는 것이 좋습니다.</p>\n<p>변호사는 ①합의 협상 대리, ②경찰·검찰 진술 준비, ③<strong>기망 의사(속일 생각) 부재</strong>에 대한 주장 구성, ④양형 의견서 작성 등을 도와줍니다. 경제적 여건이 어려우면 <strong>국선변호인</strong> 신청이나 <strong>대한법률구조공단</strong>(전화 132)을 활용해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시기: 경찰 조사 전 선임 권장 | 국선변호인·법률구조공단(132) 활용 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '합의 후 기소유예를 받은 사례',
        summary:
          '관련 사례에서도 사기 혐의를 받은 피의자가 피해자에게 피해 금액을 전액 변제하고 처벌불원서를 받은 뒤, 검찰에서 기소유예 처분을 받아 전과 기록 없이 마무리된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 가능한 한 빨리 피해 금액을 변제하고 합의서와 처벌불원서를 확보하세요.',
      },
      {
        title: '합의 없이 재판에서 실형이 선고된 사례',
        summary:
          '관련 사례에서도 피해 금액이 수천만원대이고 피해자와 합의가 이루어지지 않은 상태에서 재판에 넘겨져, 징역 1년의 실형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 피해 변제가 어렵더라도 일부 변제 노력과 반성문 등 양형 자료를 준비하세요.',
      },
    ],
    faq: [
      {
        question: '합의하면 전과 기록이 안 남나요?',
        answer: '검찰이 <strong>기소유예</strong> 처분을 하면 전과 기록이 남지 않습니다. 다만 기소유예가 확정될 때까지는 보장이 없습니다.',
      },
      {
        question: '합의금은 얼마가 적당한가요?',
        answer: '기본적으로 <strong>피해 금액 전액</strong>이 기준입니다. 상황에 따라 피해 금액 이상을 요구하는 경우도 있습니다.',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 하나요?',
        answer: '<strong>공탁</strong>(법원에 변제금을 맡기는 절차)을 활용하면 변제 의사를 증명할 수 있습니다.',
      },
      {
        question: '경찰 조사에서 뭐라고 진술해야 하나요?',
        answer: '변호사와 상의 후 진술하는 것이 안전합니다. <strong>묵비권</strong>을 행사할 수도 있습니다.',
      },
      {
        question: '사기죄 처벌 수위는 어느 정도인가요?',
        answer: '<strong>10년 이하 징역 또는 2,000만원 이하 벌금</strong>입니다. 피해 규모와 전과에 따라 달라집니다.',
      },
      {
        question: '분할로 합의금을 낼 수 있나요?',
        answer: '피해자가 동의하면 <strong>분할 변제</strong>도 가능합니다. 합의서에 분할 일정과 불이행 시 조건을 명시하세요.',
      },
      {
        question: '기소유예와 불기소는 다른 건가요?',
        answer: '<strong>기소유예</strong>는 혐의는 인정되나 기소하지 않는 것이고, <strong>혐의없음</strong>은 혐의 자체가 부정되는 것입니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 사기 혐의 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '중고거래 사기 당했을 때 증거 모으는 법', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'investment-fraud-evidence-collection',
    keyword: '투자 사기 피해 증거 모으는 법',
    questionKeyword: '투자 사기를 당한 것 같은데 증거를 어떻게 모아야 하나요?',
    ctaKeyword: '투자 사기 증거 수집',
    type: '상황형',
    meta: {
      title: '투자 사기 피해 증거 수집 4단계 총정리 | 로앤가이드',
      description: '투자 사기를 당했다면 증거부터 확보하세요. 계약서·홍보자료 보관, 수익률 약속 녹취, 금감원 신고, 경찰 고소까지 4단계를 바로 정리해보세요.',
    },
    intro: '"원금 보장에 월 수익 5%"라는 말에 투자금을 넣었는데, 수익금 인출이 안 됩니다. 추가 수수료를 내야 출금이 된다며 돈을 더 요구합니다. 사기인 것 같은데 어디서부터 증거를 모아야 할지 막막합니다. 지금 할 수 있는 것부터 정리해보세요.',
    timelineSteps: ['계약서·홍보자료 확보', '수익률 약속 증거', '금감원 신고', '경찰 고소·피해자 모임'],
    sections: [
      {
        title: '투자계약서와 홍보자료를 먼저 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">계약서, 약정서, 투자 설명 자료를 모두 보관하세요</strong></p>\n<p>투자할 때 받은 <strong>계약서, 약정서, 투자 설명서</strong>를 모두 확보하세요. 서면 계약서가 없더라도 카카오톡이나 이메일로 받은 투자 조건 설명, 홍보 자료, 수익률표를 캡처해두세요.</p>\n<p>특히 <strong>"원금 보장", "확정 수익", "무위험"</strong> 같은 문구가 포함된 자료는 핵심 증거가 됩니다. 인허가 없이 이런 조건으로 자금을 모집하는 것은 <strong>유사수신행위의 규제에 관한 법률</strong> 위반입니다. 업체 홈페이지, 블로그, SNS 게시물도 캡처하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 계약서, 약정서, 홍보자료, 수익률표, "원금보장" 문구 캡처</blockquote>',
      },
      {
        title: '수익률 약속과 실제 지급 내역을 비교 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">약속한 수익과 실제 지급 차이가 사기 증거의 핵심입니다</strong></p>\n<p>투자 권유 시 약속한 수익률과 실제 지급된 금액을 <strong>날짜별로 비교 정리</strong>하세요. "월 5% 수익"이라고 했는데 실제로 몇 회 지급되었고, 언제부터 중단되었는지가 중요합니다.</p>\n<p>투자금 이체 내역(<strong>이체확인서</strong>), 수익금 입금 내역, 추가 수수료 요구 대화 기록을 모두 정리하세요. 대화에서 수익률을 약속하는 발언, "출금하려면 수수료를 내라"는 요구가 담긴 메시지는 <strong>기망행위의 직접 증거</strong>가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">비교: 약속 수익률 vs 실제 지급 내역 — 날짜별 정리, 추가 수수료 요구 기록</blockquote>',
      },
      {
        title: '금감원(1332)에 불법투자 신고부터 하세요',
        content:
          '<p><strong style="color:#1e3a5f">금감원 불법금융신고센터에서 행정 조치를 받을 수 있습니다</strong></p>\n<p><strong>금융감독원 불법금융신고센터</strong>(전화 1332, 또는 금감원 홈페이지)에 해당 업체를 신고하세요. 금감원은 업체의 <strong>등록 여부 확인, 영업정지, 수사기관 통보</strong> 등 행정 조치를 취할 수 있습니다.</p>\n<p>금감원 금융소비자정보포털(fine.fss.or.kr)에서 해당 업체가 <strong>정식 등록</strong>되어 있는지도 확인하세요. 미등록 업체의 투자 권유는 그 자체로 불법입니다. 금감원 신고와 경찰 고소는 <strong>병행이 가능</strong>합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">금감원 신고: 전화 1332 / fine.fss.or.kr에서 업체 등록 여부 확인</blockquote>',
      },
      {
        title: '경찰 고소와 피해자 모임 구성을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">합동 고소가 수사 속도를 높이는 데 효과적입니다</strong></p>\n<p>증거가 정리되면 <strong>경찰 사이버수사대</strong>(ecrm.police.go.kr)에 형사 고소를 진행하세요. 고소장에는 피고소인 정보, 투자 경위, 피해 금액, 증거 목록을 시간순으로 기재합니다.</p>\n<p>투자 사기는 피해자가 여러 명인 경우가 많습니다. 온라인 카페, 커뮤니티에서 <strong>동일 업체 피해자</strong>를 찾아 피해자 모임을 구성하면 합동 고소가 가능합니다. 합동 고소는 수사기관이 <strong>사건의 규모와 심각성</strong>을 인지하게 해 수사 속도를 높이는 효과가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경찰 고소: ecrm.police.go.kr | 피해자 모임 → 합동 고소 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '홍보자료의 "확정 수익" 문구가 사기 증거로 인정된 사례',
        summary:
          '관련 사례에서도 업체가 배포한 홍보자료에 "월 3% 확정 수익, 원금 100% 보장"이라는 문구가 기재되어 있어, 이것이 기망행위의 핵심 증거로 인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 투자 권유 시 받은 홍보자료, 설명서, SNS 게시물을 모두 캡처해서 보관하세요.',
      },
      {
        title: '피해자 모임을 구성하여 합동 고소로 검거가 빨라진 사례',
        summary:
          '관련 사례에서도 같은 업체에 피해를 입은 30여 명이 피해자 모임을 구성하고 합동 고소를 진행하여, 단독 고소보다 수사가 빠르게 진행되어 3개월 만에 주범이 검거된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 온라인 카페나 커뮤니티에서 동일 업체 피해자가 있는지 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '투자 사기인지 단순 손실인지 어떻게 구분하나요?',
        answer: '핵심은 <strong>처음부터 속일 의도가 있었는지</strong>입니다. 허위 수익률 약속, 미등록 영업, 폰지 구조가 정황 증거입니다.',
      },
      {
        question: '추가 수수료를 내라는 건 사기인가요?',
        answer: '출금을 위해 <strong>추가 수수료를 반복 요구</strong>하는 것은 전형적인 투자 사기 수법입니다. 절대 추가 송금하지 마세요.',
      },
      {
        question: '해외 업체도 고소할 수 있나요?',
        answer: '국내에서 피해가 발생했으면 <strong>국내 수사기관</strong>에 신고 가능합니다. 다만 해외 소재 업체는 실효성이 제한될 수 있습니다.',
      },
      {
        question: '투자금을 돌려받을 수 있나요?',
        answer: '형사 절차와 별개로 <strong>민사소송</strong>으로 투자금 반환을 청구할 수 있습니다. 상대방 재산에 가압류를 검토하세요.',
      },
      {
        question: '가상화폐 투자 사기도 동일한가요?',
        answer: '기망행위가 있었다면 투자 대상과 관계없이 <strong>사기죄</strong>가 성립할 수 있습니다.',
      },
      {
        question: '금감원 신고와 경찰 고소를 둘 다 해야 하나요?',
        answer: '금감원은 <strong>행정 조치</strong>, 경찰은 <strong>형사 처벌</strong>입니다. 병행하면 더 효과적입니다.',
      },
      {
        question: '지인 소개로 투자했는데 지인도 고소해야 하나요?',
        answer: '소개자가 사기에 <strong>가담한 정황</strong>이 있으면 공범으로 고소할 수 있습니다. 단순 소개라면 소개자도 피해자일 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 금감원(1332)에서 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 사기 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '중고거래 사기 당했을 때 증거 모으는 법', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '개인파산 가이드', href: '/guide/bankruptcy' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-penalty-settlement-reduction',
    keyword: '사기죄 처벌 수위와 합의 시 감형 범위',
    questionKeyword: '사기죄로 고소당했는데 합의하면 얼마나 감형되나요?',
    ctaKeyword: '사기죄 합의 감형',
    type: '수치기한형',
    meta: {
      title: '사기죄 처벌 수위·합의 시 감형 범위 총정리 | 로앤가이드',
      description: '사기죄 형법 제347조 처벌은 10년 이하 징역 또는 2천만원 이하 벌금. 금액별 양형 기준과 합의 시 감형 범위, 합의서 작성 요령을 지금 확인하세요.',
    },
    intro: '거래 상대방에게 사기죄로 고소당했습니다. 의도적으로 속인 것은 아니었지만 결과적으로 피해가 발생해 형사 절차가 진행되고 있습니다. 처벌 수위가 어느 정도이고 합의하면 얼마나 감형되는지 궁금합니다. 혐의를 받고 있다면 아래 내용을 먼저 확인해보세요.',
    timelineSteps: ['처벌 수위 확인', '양형 기준 파악', '합의 절차 진행', '합의서 작성·제출'],
    sections: [
      {
        title: '사기죄 처벌 수위를 먼저 확인하세요 — 형법 제347조',
        content:
          '<p><strong style="color:#1e3a5f">사기죄는 10년 이하 징역 또는 2,000만원 이하 벌금입니다</strong></p>\n<p><strong>형법 제347조</strong>에 따라 사람을 기망하여 재물의 교부를 받거나 재산상의 이익을 취득한 자는 <strong>10년 이하 징역 또는 2,000만원 이하 벌금</strong>에 처해집니다. 상습범은 <strong>형법 제351조</strong>에 의해 형의 2분의 1까지 가중됩니다.</p>\n<p>특정경제범죄가중처벌법이 적용되는 경우 피해 금액에 따라 처벌이 더 무거워집니다. 피해 금액 <strong>5억원 이상</strong>이면 3년 이상 징역, <strong>50억원 이상</strong>이면 무기 또는 5년 이상 징역에 해당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌 수위: 일반 사기 10년/2,000만원 | 5억 이상 3년 이상 | 50억 이상 5년 이상</blockquote>',
      },
      {
        title: '양형 기준을 파악하세요 — 감경·가중 요소',
        content:
          '<p><strong style="color:#1e3a5f">대법원 양형위원회 기준이 실제 형량을 결정합니다</strong></p>\n<p><strong>대법원 양형위원회</strong>는 사기죄의 양형 기준을 피해 금액별로 구분합니다. 일반 사기(1억원 미만)는 기본 <strong>6월~1년6월</strong>, 감경 시 <strong>벌금~10월</strong>이 권고 범위입니다. 1억원 이상~5억원 미만은 기본 <strong>1년~3년</strong>으로 올라갑니다.</p>\n<p>감경 요소에는 ①<strong>피해 회복(합의)</strong>, ②<strong>초범</strong>, ③<strong>진지한 반성</strong>, ④범행 가담 정도가 경미한 경우가 포함됩니다. 가중 요소로는 ①<strong>동종 전과</strong>, ②<strong>피해 다수</strong>, ③<strong>계획적 범행</strong> 등이 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경 요소: 피해 회복(합의), 초범, 진지한 반성 | 가중 요소: 동종 전과, 피해 다수</blockquote>',
      },
      {
        title: '합의 시 감형 범위를 확인하세요 — 기소유예부터 집행유예까지',
        content:
          '<p><strong style="color:#1e3a5f">합의 여부가 실형과 집행유예를 가르는 핵심입니다</strong></p>\n<p>사기죄에서 피해자와 합의가 이루어지면 ①검찰 단계에서 <strong>기소유예</strong>(전과 기록 없음) 처분이 가능하고, ②재판 단계에서는 <strong>형의 감경</strong> 또는 <strong>집행유예</strong> 선고 가능성이 크게 높아집니다. 실무에서 피해 전액 변제 후 합의한 초범은 <strong>기소유예율이 70% 이상</strong>으로 알려져 있습니다.</p>\n<p>피해 금액이 <strong>1,000만원 이하</strong>이고 전액 변제 + 처벌불원서를 확보하면 기소유예 가능성이 높습니다. <strong>1,000만원~5,000만원</strong> 구간은 합의 시 약식기소(벌금형)나 집행유예가 많습니다. 합의 없이 재판에 가면 <strong>실형 선고</strong> 가능성이 있으므로 합의 노력은 반드시 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감형 범위: 전액 변제+합의 → 기소유예/벌금형/집행유예 | 합의 없으면 실형 가능</blockquote>',
      },
      {
        title: '합의서 작성 요령과 제출 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의서에 처벌불원 의사와 금액을 명확히 기재하세요</strong></p>\n<p>합의서에는 ①<strong>합의 금액</strong>과 지급 방법(일시불 또는 분할), ②피해자의 <strong>"고소 취소 및 처벌불원" 의사</strong>, ③<strong>민·형사상 추가 청구 포기</strong> 문구를 반드시 포함하세요. 합의서는 <strong>공증</strong>을 받아두는 것이 안전합니다.</p>\n<p>합의 후 피해자가 직접 수사기관(경찰 또는 검찰)에 <strong>고소 취소서</strong>와 <strong>처벌불원서</strong>를 제출해야 합니다. 피해자가 합의를 거부하는 경우 <strong>공탁</strong>(법원에 변제금을 맡기는 절차)으로 변제 의사를 증명할 수 있습니다. 공탁 사실은 양형에서 유리하게 참작됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의서 필수: 금액 + 처벌불원 + 추가 청구 포기 | 거부 시 공탁 활용</blockquote>',
      },
    ],
    cases: [
      {
        title: '피해 전액 변제 후 기소유예를 받은 사례',
        summary:
          '관련 사례에서도 사기 혐의를 받은 피의자가 피해자에게 피해 금액 1,500만원을 전액 변제하고 합의서와 처벌불원서를 확보하여, 검찰에서 기소유예 처분을 받아 전과 기록 없이 마무리된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 가능한 한 빨리 피해 금액을 전액 변제하고 처벌불원서를 확보하세요.',
      },
      {
        title: '합의 없이 재판에서 실형이 선고된 사례',
        summary:
          '관련 사례에서도 피해 금액이 3,000만원이고 동종 전과가 있는 피의자가 피해자와 합의에 실패하여, 재판에서 징역 1년6월의 실형이 선고된 경우가 있습니다. 합의 여부가 실형과 집행유예를 가른 사안이었습니다.',
        takeaway:
          '비슷한 상황이라면 전액 변제가 어렵더라도 일부라도 변제하고 반성문, 변제 계획서 등 양형 자료를 준비하세요.',
      },
    ],
    faq: [
      {
        question: '사기죄는 합의하면 처벌을 안 받을 수 있나요?',
        answer: '사기죄는 <strong>반의사불벌죄가 아니므로</strong> 합의해도 기소될 수 있습니다. 다만 실무에서 합의 시 기소유예나 감형이 이루어지는 경우가 많습니다.',
      },
      {
        question: '합의금은 피해 금액과 같아야 하나요?',
        answer: '기본적으로 <strong>피해 금액 전액 변제</strong>가 기준입니다. 상황에 따라 위자료를 추가로 요구하는 경우도 있습니다.',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 하나요?',
        answer: '<strong>공탁</strong>(법원에 변제금을 맡기는 절차)을 활용하면 변제 의사를 증명할 수 있어 양형에 유리합니다.',
      },
      {
        question: '기소유예와 불기소는 뭐가 다른가요?',
        answer: '<strong>기소유예</strong>는 혐의는 인정되나 기소하지 않는 것, <strong>혐의없음</strong>은 혐의 자체가 부정되는 것입니다.',
      },
      {
        question: '분할로 합의금을 낼 수 있나요?',
        answer: '피해자가 동의하면 <strong>분할 변제</strong>도 가능합니다. 합의서에 분할 일정과 불이행 시 조건을 명시하세요.',
      },
      {
        question: '변호사를 언제 선임해야 하나요?',
        answer: '<strong>경찰 조사 전</strong>에 선임하는 것이 가장 유리합니다. 첫 진술이 이후 재판에 큰 영향을 미칩니다.',
      },
      {
        question: '특경법이 적용되면 합의해도 소용없나요?',
        answer: '특경법 적용 사안에서도 합의는 <strong>양형에 큰 영향</strong>을 미칩니다. 다만 피해 금액이 크면 합의해도 실형 가능성이 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 사기 혐의 상황에 맞는 합의 전략을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '사기 고소당했는데 합의하면 처벌 안 받나요', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '폭행 합의금 적정 금액과 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'voice-phishing-immediate-5steps',
    keyword: '보이스피싱 당했을 때 즉시 해야 할 5가지',
    questionKeyword: '보이스피싱을 당했는데 지금 바로 뭘 해야 하나요?',
    ctaKeyword: '보이스피싱 피해 대응',
    type: '체크리스트형',
    meta: {
      title: '보이스피싱 당했을 때 즉시 해야 할 5가지 조치 | 로앤가이드',
      description: '보이스피싱을 당했다면 지금 바로 행동하세요. 계좌 지급정지, 112 신고, 개인정보 노출 차단, 피해구제 신청, 악성앱 삭제까지 골든타임 대응법을 지금 확인하세요.',
    },
    intro: '금융기관을 사칭한 전화에 속아 돈을 보냈습니다. 보내고 나서야 "이거 보이스피싱 아닌가?" 하는 생각이 들었습니다. 머릿속이 하얘지고 뭘 먼저 해야 할지 모르겠습니다. 지금 즉시 해야 할 5가지를 순서대로 정리했습니다. 1분이라도 빨리 행동할수록 피해 금액을 돌려받을 가능성이 높아집니다.',
    timelineSteps: ['계좌 지급정지', '경찰 신고', '개인정보 노출 차단', '피해구제 신청', '악성앱 삭제·기기 점검'],
    sections: [
      {
        title: '1단계: 송금한 은행에 즉시 계좌 지급정지를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">1분이라도 빨리 지급정지를 해야 합니다</strong></p>\n<p>보이스피싱을 인지한 즉시 <strong>송금한 은행</strong>의 고객센터에 전화하여 <strong>사기 이용 계좌 지급정지</strong>를 신청하세요. 또는 <strong>경찰(112)</strong>이나 <strong>금융감독원(1332)</strong>에 전화해도 지급정지를 연결해줍니다.</p>\n<p><strong>전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법</strong>(통신사기피해환급법)에 따라 피해 신고가 접수되면 해당 계좌가 즉시 지급정지됩니다. 사기범이 돈을 인출하기 전에 정지시키면 <strong>피해금 환급</strong>을 받을 수 있습니다. 시간이 핵심이므로 다른 조치보다 지급정지를 최우선으로 하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시: 송금 은행 고객센터 / 경찰 112 / 금감원 1332 → 계좌 지급정지</blockquote>',
      },
      {
        title: '2단계: 경찰에 신고하고 사건 접수번호를 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">112 신고 또는 가까운 경찰서에서 피해 신고를 하세요</strong></p>\n<p>계좌 지급정지 후 바로 <strong>경찰(112)</strong>에 보이스피싱 피해를 신고하세요. 가까운 경찰서에 직접 방문하거나 <strong>경찰청 사이버수사대</strong>(ecrm.police.go.kr)에 온라인으로 접수할 수도 있습니다.</p>\n<p>신고 시 <strong>피해 금액, 송금 시각, 상대방 계좌번호, 전화번호, 통화 내용</strong>을 정리하여 전달하세요. 통화 녹음이 있으면 핵심 증거가 됩니다. 사건 접수번호를 반드시 받아두세요. 이후 피해구제 신청에 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 경찰 112 / ecrm.police.go.kr | 준비: 피해 금액, 송금 시각, 계좌번호, 통화 녹음</blockquote>',
      },
      {
        title: '3단계: 개인정보 노출이 의심되면 즉시 차단 조치를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">명의도용 방지를 위해 개인정보노출자 사고예방시스템에 등록하세요</strong></p>\n<p>보이스피싱 과정에서 <strong>주민등록번호, 계좌번호, 비밀번호, 신분증 사진</strong> 등 개인정보를 알려줬다면 추가 피해 방지 조치가 필요합니다. <strong>금융감독원 개인정보노출자 사고예방시스템</strong>(pd.fss.or.kr)에 등록하면 본인 명의의 신규 계좌 개설이나 대출 실행이 차단됩니다.</p>\n<p>또한 <strong>한국정보통신진흥협회 명의도용방지서비스</strong>(msafer.or.kr)에서 본인 명의의 휴대폰 개통 여부를 확인하고, 추가 개통을 차단하세요. 기존 은행 계좌의 비밀번호도 즉시 변경하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">등록: pd.fss.or.kr(계좌·대출 차단) + msafer.or.kr(휴대폰 개통 차단) + 비밀번호 변경</blockquote>',
      },
      {
        title: '4단계: 피해구제 신청으로 돈을 돌려받을 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">통신사기피해환급법에 따라 피해금 환급을 신청하세요</strong></p>\n<p>경찰 신고와 계좌 지급정지가 완료되면, <strong>송금한 은행</strong>에 피해구제 신청을 하세요. 통신사기피해환급법 제5조에 따라 지급정지된 계좌에 피해금이 남아 있으면 <strong>피해 환급금</strong>으로 돌려받을 수 있습니다.</p>\n<p>피해구제 신청 후 <strong>금융감독원</strong>이 채권소멸 절차를 진행하고, 잔액이 확인되면 피해금을 환급합니다. 다만 사기범이 이미 인출한 금액은 환급이 어려울 수 있습니다. 지급정지가 빠를수록 <strong>환급 가능성</strong>이 높아지는 이유입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신청: 송금 은행에 피해구제 신청 → 금감원 채권소멸 절차 → 잔액 환급</blockquote>',
      },
    ],
    cases: [
      {
        title: '지급정지를 30분 내에 신청하여 피해금 전액을 환급받은 사례',
        summary:
          '관련 사례에서도 보이스피싱 피해를 인지한 직후 30분 내에 은행에 계좌 지급정지를 신청한 피해자가, 사기 계좌에 피해금이 그대로 남아 있어 전액 환급을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 보이스피싱을 인지한 즉시, 다른 어떤 조치보다 먼저 계좌 지급정지를 신청하세요.',
      },
      {
        title: '악성앱을 통해 추가 피해가 발생한 사례',
        summary:
          '관련 사례에서도 보이스피싱범이 보낸 링크를 클릭하여 악성앱이 설치된 후, 피해자의 연락처에 있는 지인들에게까지 사기 문자가 발송되어 추가 피해가 발생한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 출처 불명의 앱을 즉시 삭제하고, 스마트폰을 초기화하거나 백신 프로그램으로 점검하세요.',
      },
    ],
    faq: [
      {
        question: '보이스피싱 피해금을 돌려받을 수 있나요?',
        answer: '지급정지된 계좌에 피해금이 남아 있으면 <strong>통신사기피해환급법</strong>에 따라 환급받을 수 있습니다.',
      },
      {
        question: '지급정지는 어디에 전화해야 하나요?',
        answer: '<strong>송금한 은행 고객센터</strong>, 경찰 112, 금감원 1332 모두 가능합니다.',
      },
      {
        question: '이미 돈이 인출된 후라면 어떻게 하나요?',
        answer: '환급은 어렵지만, <strong>경찰 수사</strong>를 통해 범인 검거 후 민사 청구가 가능합니다.',
      },
      {
        question: '악성앱이 설치된 것 같으면 어떻게 하나요?',
        answer: '출처 불명의 앱을 삭제하고, <strong>스마트폰 초기화</strong>를 권장합니다. 백신 프로그램으로 검사도 하세요.',
      },
      {
        question: '신분증 사진을 보냈는데 어떻게 하나요?',
        answer: '<strong>금감원 개인정보노출자 사고예방시스템</strong>(pd.fss.or.kr)에 등록하여 명의도용을 차단하세요.',
      },
      {
        question: '가족이나 지인에게도 피해가 갈 수 있나요?',
        answer: '악성앱을 통해 연락처가 유출되면 <strong>지인 사칭 사기</strong>로 이어질 수 있습니다. 주변에 알려 주의를 당부하세요.',
      },
      {
        question: '보이스피싱 피해 신고 후 수사는 얼마나 걸리나요?',
        answer: '사건에 따라 다르며, 통상 <strong>3~6개월</strong>입니다. 사건 접수번호로 진행 상황을 확인할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 금감원(1332)에서 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 보이스피싱 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '중고거래 사기 당했을 때 증거 모으는 법', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '투자 사기 의심될 때 먼저 확인할 3가지', href: '/guide/fraud/investment-fraud-checklist' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-crime-establishment-requirements',
    keyword: '사기죄 성립 요건은 무엇인가요?',
    questionKeyword: '사기죄가 성립하려면 어떤 요건이 필요한가요?',
    ctaKeyword: '사기죄 성립 여부 확인',
    type: 'Q&A형',
    meta: {
      title: '사기죄 성립 요건 4가지 핵심 정리 | 로앤가이드',
      description: '사기죄가 성립하려면 어떤 요건이 필요할까? 형법 제347조 기망행위, 착오, 처분행위, 재산 이득까지 4가지 요건과 판례 기준을 바로 정리해보세요.',
    },
    intro: '거래 상대방이 약속을 지키지 않았습니다. 돈을 빌려주고 받지 못하거나, 물건 대금을 보냈는데 상품이 오지 않는 상황입니다. "사기 아닌가?"라는 생각이 들지만, 막상 고소하려니 "단순 채무불이행이지 사기는 아닙니다"라는 말을 듣기도 합니다. 사기죄가 성립하려면 정확히 어떤 요건이 갖춰져야 하는지, 법조문과 판례를 기준으로 정리했습니다.',
    sections: [
      {
        title: '기망행위 — 상대방을 속이는 행위가 있어야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">사기죄의 출발점은 "거짓말"이 아니라 "기망행위"입니다</strong></p>\n<p>형법 제347조의 사기죄가 성립하려면 먼저 <strong>기망행위</strong>가 있어야 합니다. 기망이란 사실을 허위로 고지하거나, 중요한 사실을 고의로 은폐하여 상대방의 판단을 그르치게 하는 행위입니다. 단순한 과장 광고와 기망은 구별됩니다.</p>\n<p>대법원은 "거래의 중요 부분에 관하여 구체적 사실을 거래 관행상 신의성실에 반하는 방법으로 허위 고지한 경우"를 기망행위로 봅니다(대법원 2017도9232). 작위뿐 아니라 <strong>부작위(알리지 않는 것)</strong>도 고지의무가 있는 경우 기망이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 거래의 중요 사항에 대해 허위로 말하거나 고의로 숨기면 기망행위에 해당</blockquote>',
      },
      {
        title: '착오와 처분행위 — 속아서 재산을 내놓아야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">기망 → 착오 → 처분행위의 인과관계가 핵심입니다</strong></p>\n<p>기망행위로 인해 피해자가 <strong>착오에 빠지고</strong>, 그 착오를 기초로 재산적 처분행위(돈 이체, 물건 교부 등)를 해야 합니다. 착오 없이 자발적으로 돈을 준 경우에는 사기가 성립하지 않습니다.</p>\n<p>대법원 판례(2017도9232)에 따르면 "피기망자의 착오와 처분행위 사이에 인과관계가 인정되어야" 합니다. 예컨대 투자 수익을 보장한다고 거짓말하여 투자금을 받았다면, 거짓 수익 보장(기망) → 수익이 날 것이라는 오판(착오) → 투자금 지급(처분행위)의 흐름이 성립합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "속아서 돈을 줬다"는 인과관계를 증명할 수 있어야 사기죄 성립</blockquote>',
      },
      {
        title: '편취의 고의 — 처음부터 속일 의도가 있었는지가 관건입니다',
        content:
          '<p><strong style="color:#1e3a5f">"나중에 못 갚은 것"과 "처음부터 갚을 생각이 없었던 것"은 다릅니다</strong></p>\n<p>사기죄는 <strong>고의범</strong>입니다. 행위 시점에 편취(재산을 빼앗으려는) 의사가 있어야 합니다. 대법원은 차용 사기에서 "차용 당시 변제 의사와 능력"을 핵심 판단 기준으로 봅니다. 빌릴 당시 이미 과도한 채무가 있었거나, 소득이 전혀 없었다면 편취의 고의가 추정될 수 있습니다.</p>\n<p>반대로, 빌릴 당시 충분한 수입이 있었는데 사업 실패로 못 갚게 된 경우에는 <strong>단순 채무불이행</strong>으로 판단되어 사기죄가 성립하지 않을 수 있습니다. 이 구분이 실무에서 가장 많은 다툼이 발생하는 부분입니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">내 상황이 사기죄에 해당하는지 궁금하다면 <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 사기 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 차용 당시의 재정 상태, 소득, 기존 채무 규모가 편취 고의 판단의 핵심 자료</blockquote>',
      },
      {
        title: '재산상 손해 — 피해자에게 실제 재산적 손해가 발생해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">재산적 손해가 없으면 사기죄 기수(旣遂)가 되지 않습니다</strong></p>\n<p>사기죄의 마지막 요건은 <strong>재산상 손해</strong>입니다. 피해자의 재산이 감소하거나 재산적 이익을 상실해야 합니다. 이체한 금액, 교부한 물건의 가치 등이 손해액이 됩니다. 손해액이 특정되지 않으면 수사 단계에서 어려움이 생길 수 있으므로, 구체적인 금액과 증거를 정리해두세요.</p>\n<p>참고로, 피해자가 속았더라도 실제 손해가 발생하기 전이면 <strong>사기 미수</strong>에 해당합니다(형법 제352조). 미수도 처벌 대상이지만, 기수보다 양형이 낮습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 이체 내역, 영수증, 계약서 등으로 피해 금액을 구체적으로 특정</blockquote>',
      },
    ],
    cases: [
      {
        title: '차용 당시 과다채무 상태에서 빌린 돈 — 사기죄 유죄(대법원 2017도9232)',
        summary:
          '피고인이 이미 수억 원의 채무를 지고 있으면서 "곧 큰 돈이 들어온다"고 거짓말하여 돈을 빌린 사건에서, 대법원은 차용 당시 변제 능력이 없었으므로 편취의 고의가 인정된다고 판단했습니다.',
        takeaway:
          '비슷한 상황이라면 상대방의 차용 당시 재정 상태(기존 채무, 소득)를 파악할 수 있는 자료를 확보하세요.',
      },
      {
        title: '사업 실패로 못 갚은 경우 — 사기죄 무죄',
        summary:
          '관련 판례에서 피고인이 차용 당시 정상적인 사업을 운영하고 있었고, 이후 사업 실패로 변제하지 못한 경우에는 편취 고의가 인정되지 않아 사기죄 무죄가 선고된 사례가 있습니다.',
        takeaway:
          '비슷한 상황이라면 상대방이 돈을 빌릴 당시 정말 갚을 능력이 있었는지를 기준으로 사기 성립 여부를 판단하세요.',
      },
    ],
    faq: [
      {
        question: '사기죄의 공소시효는 몇 년인가요?',
        answer: '사기죄의 공소시효는 <strong>10년</strong>입니다. 피해를 안 날로부터가 아니라 범죄 행위가 끝난 날부터 기산합니다.',
      },
      {
        question: '돈을 안 갚으면 무조건 사기인가요?',
        answer: '아닙니다. <strong>빌릴 때 갚을 의사와 능력이 있었다면</strong> 사기가 아니라 민사상 채무불이행입니다.',
      },
      {
        question: '사기죄 처벌 수위는 어느 정도인가요?',
        answer: '형법 제347조에 따라 <strong>10년 이하 징역 또는 2,000만원 이하 벌금</strong>입니다.',
      },
      {
        question: '사기 피해 금액이 적어도 고소할 수 있나요?',
        answer: '금액에 관계없이 고소 가능합니다. 다만 <strong>50만원 미만</strong>이면 수사 우선순위가 낮아질 수 있습니다.',
      },
      {
        question: '구두 약속만으로도 사기죄가 성립하나요?',
        answer: '네, <strong>구두 약속도 기망행위</strong>에 해당할 수 있습니다. 다만 입증이 어렵기 때문에 녹음이나 문자 등 증거가 중요합니다.',
      },
      {
        question: '사기 미수도 처벌되나요?',
        answer: '네, 형법 제352조에 따라 <strong>사기 미수</strong>도 처벌됩니다. 다만 기수보다 감경됩니다.',
      },
      {
        question: '사기죄와 횡령죄는 어떻게 다른가요?',
        answer: '사기는 <strong>속여서 재산을 취득</strong>하는 것이고, 횡령은 맡긴 재산을 빼돌리는 것입니다. 재산 취득 경위가 다릅니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상황이 사기죄에 해당하는지 무료로 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '사기죄 처벌 수위와 합의 시 감형 범위', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-accused-response',
    keyword: '사기 고소당했을때',
    questionKeyword: '사기로 고소당했는데 어떻게 대응해야 하나요?',
    ctaKeyword: '사기 고소 대응',
    type: '어디부터형',
    meta: {
      title: '사기 혐의 경찰 출석 전 준비 3단계 | 로앤가이드',
      description: '사기 혐의로 경찰 출석을 앞두고 있다면? 고소장 확인, 편취 고의 반박 자료, 합의 시점까지 출석 전 준비 3단계를 지금 확인하세요.',
    },
    intro: '출석요구서가 도착했습니다. 거래 상대방이 나를 사기죄로 고소한 것입니다. 돈을 못 갚은 것은 사실이지만, 처음부터 속일 의도는 없었습니다. 실직 때문에 변제가 늦어졌을 뿐인데, 이것이 사기가 되는 걸까요? 사기죄는 "편취의 고의"가 핵심입니다. 돈을 빌릴 당시 갚을 의사와 능력이 있었다면 사기가 아닐 수 있습니다. 그러나 이를 증명하려면 체계적인 준비가 필요합니다.',
    timelineSteps: ['출석 전 준비', '경찰 조사 대응', '합의 여부 결정', '검찰·재판 대비'],
    sections: [
      {
        title: '출석 전에 반드시 준비하세요 — 첫 진술이 사건의 방향을 좌우합니다',
        content:
          '<p><strong style="color:#1e3a5f">준비 없이 경찰 출석하면 불리한 진술을 남길 수 있습니다</strong></p>\n<p>사기 고소를 당하면 경찰에서 <strong>피의자 출석요구서</strong>가 옵니다. 이때 바로 출석하기보다 먼저 고소장 내용을 확인하세요. 형사소송법 제200조에 따라 출석요구에 응하지 않으면 체포영장이 발부될 수 있으므로, 일정을 조율하되 출석 자체를 거부하지는 마세요.</p>\n<p>고소인이 주장하는 사실관계를 파악한 뒤, 거래 경위, 대화 기록, 이체 내역 등 <strong>내 입장을 증명할 자료</strong>를 정리하세요. 변호사 조력을 받는 것이 가장 안전하지만, 최소한 사건 경위를 시간 순서대로 메모해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 고소장 확인, 거래 경위 정리, 증거 자료 수집, 변호사 상담 검토</blockquote>',
      },
      {
        title: '경찰 조사에서 진술권을 제대로 행사하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법상 피의자는 진술거부권이 있습니다</strong></p>\n<p>경찰 조사에서 가장 중요한 것은 <strong>진술거부권</strong>입니다. 헌법 제12조 제2항과 형사소송법 제244조의3에 따라, 불리한 진술을 거부할 수 있습니다. 모든 질문에 답해야 하는 것이 아닙니다.</p>\n<p>특히 "사기 의도가 있었느냐"는 질문에 대해 즉석에서 답변하면, 그 진술이 재판에서 불리하게 작용할 수 있습니다. 확실하지 않은 부분은 <strong>"확인 후 답변하겠다"</strong>고 말해도 됩니다. 조사 후 조서 내용을 반드시 꼼꼼히 확인하고 서명하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 진술거부권 행사 가능, 조서 내용 확인 후 서명, 불확실한 부분은 유보</blockquote>',
      },
      {
        title: '합의를 통해 형사처벌을 줄일 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">합의는 양형에 가장 큰 영향을 미치는 요소입니다</strong></p>\n<p>사기죄는 재산범죄이므로 <strong>피해 회복(합의)</strong>이 양형에 결정적입니다. 피해자와 합의하고 합의서와 처벌불원서를 받으면, 기소유예·선고유예·집행유예 등 유리한 처분을 받을 가능성이 높아집니다.</p>\n<p>합의 시에는 합의금 액수, 처벌불원 의사, 향후 민사 청구 포기 여부를 <strong>합의서에 명확히</strong> 기재해야 합니다. 합의금을 마련하기 어렵다면 <strong>공탁</strong>(형사소송법 제334조)을 통해 변제 의사를 증명하는 방법도 있습니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">사기 고소 대응 방법이 궁금하다면 <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 사기 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 합의금 마련, 합의서 작성, 처벌불원서 확보, 공탁 검토</blockquote>',
      },
      {
        title: '검찰 송치 후에도 대응할 수 있습니다 — 의견서 제출',
        content:
          '<p><strong style="color:#1e3a5f">검찰 단계에서 변호인 의견서 제출이 중요합니다</strong></p>\n<p>경찰 수사가 끝나면 사건이 검찰로 <strong>송치</strong>됩니다. 검찰에서는 기소 여부를 결정하는데, 이 단계에서 변호인 의견서를 제출하면 불기소 처분(혐의없음·기소유예)을 받을 가능성이 있습니다.</p>\n<p>의견서에는 ① 사기 고의가 없었다는 점, ② 피해 회복 노력, ③ 거래 경위에 대한 소명을 포함하세요. 형법 제347조 사기죄의 구성요건인 <strong>기망행위와 편취 고의</strong>가 없었음을 객관적 자료로 증명하는 것이 핵심입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 변호인 의견서, 편취 고의 부정 자료, 피해 회복 증빙, 탄원서</blockquote>',
      },
    ],
    cases: [
      {
        title: '채무불이행으로 판단되어 불기소 처분된 사례',
        summary:
          '피고소인이 돈을 빌릴 당시 안정적인 직장에 다니고 있었고, 이후 실직으로 인해 변제하지 못한 사건에서 검찰은 편취 고의를 인정하기 어렵다고 판단하여 혐의없음(불기소) 처분하였습니다.',
        takeaway:
          '비슷한 상황이라면 차용 당시의 재직증명서, 급여 내역 등 변제 능력을 증명할 수 있는 자료를 확보하세요.',
      },
      {
        title: '합의 후 기소유예 처분된 사례',
        summary:
          '사기 고소를 당한 피의자가 수사 중 피해자에게 피해 금액 전액을 변제하고 처벌불원서를 받은 사건에서, 검찰은 초범인 점과 피해 회복을 고려하여 기소유예 처분하였습니다.',
        takeaway:
          '비슷한 상황이라면 가능한 한 빨리 피해자에게 연락하여 피해 회복과 합의를 시도하세요.',
      },
    ],
    faq: [
      {
        question: '돈을 못 갚은 것과 사기는 어떻게 다른가요?',
        answer: '사기죄의 핵심은 <strong>편취의 고의</strong>입니다. 처음부터 갚을 의사 없이 빌린 것이라면 사기, 갚을 의사는 있었으나 사정이 변하여 못 갚은 것이라면 단순 채무불이행으로 형사 처벌 대상이 아닙니다.',
      },
      {
        question: '편취 고의가 없었다는 것을 어떻게 증명하나요?',
        answer: '차용 당시의 <strong>재직증명서, 급여 내역, 일부 변제 기록, 갚겠다는 대화 내용</strong> 등이 핵심 증거입니다. 돈을 빌릴 때 갚을 능력과 의사가 있었음을 객관적으로 보여주세요.',
      },
      {
        question: '합의금을 마련할 수 없으면 어떻게 되나요?',
        answer: '합의금 전액을 마련하기 어려우면 <strong>공탁</strong>(법원에 변제금을 맡기는 것)을 통해 변제 의사를 증명할 수 있습니다. 일부 공탁이라도 양형에 참작됩니다.',
      },
      {
        question: '합의는 언제 하는 것이 가장 효과적인가요?',
        answer: '<strong>검찰 기소 결정 전</strong>이 가장 효과적입니다. 기소 전 합의와 처벌불원서를 확보하면 기소유예 처분 가능성이 높아집니다.',
      },
      {
        question: '경찰 조사에서 "사기 의도가 있었느냐"는 질문에 어떻게 답하나요?',
        answer: '즉석에서 답하지 마세요. <strong>"변호사와 상의 후 답변하겠다"</strong>고 하거나, 편취 고의가 없었음을 보여주는 구체적 사실(당시 직장, 수입, 변제 계획)을 정리한 뒤 진술하세요.',
      },
      {
        question: '사기죄 처벌 수위는 어느 정도인가요?',
        answer: '형법 제347조에 따라 <strong>10년 이하 징역 또는 2,000만원 이하 벌금</strong>입니다. 피해 금액이 클수록 실형 가능성이 높아집니다.',
      },
    ],
    cta: {
      text: '사기 혐의를 받고 있다면 출석 전 대응 방법을 지금 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '고소당했는데 합의하면 처벌 안 받나요', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-false-accusation-defense',
    keyword: '사기 무고 대응',
    questionKeyword: '사기로 무고당했을 때 어떻게 대응해야 하나요?',
    ctaKeyword: '사기 무고 대응 방법',
    type: '상황형',
    meta: {
      title: '억울한 사기 고소, 무고 역고소 4단계 | 로앤가이드',
      description: '사실과 다르게 사기로 신고당했다면? 결백 증명 방법, 무고죄 역고소 요건, 손해배상 청구까지 4단계 대응법을 지금 확인하세요.',
    },
    intro: '중고거래에서 환불을 해줬는데도 상대방이 사기로 고소했습니다. 카카오톡에 환불 확인 메시지까지 있는데, 경찰에서 피의자로 출석하라는 연락이 왔습니다. 억울하지만 "결백하니까 알아서 풀리겠지"라고 방치하면 위험합니다. 수사기관은 고소인의 일방적 주장만으로 수사를 진행하므로, 적극적으로 반박하지 않으면 기소될 수 있습니다.',
    timelineSteps: ['고소 내용 파악', '반박 증거 수집', '수사 대응', '무고 반대고소 검토'],
    sections: [
      {
        title: '먼저 고소장 내용을 정확히 파악하세요 — 어떤 혐의인지 알아야 반박합니다',
        content:
          '<p><strong style="color:#1e3a5f">고소장에 기재된 "사기의 내용"을 구체적으로 확인하세요</strong></p>\n<p>출석요구서를 받으면 변호사를 통해 <strong>고소장 사본 열람</strong>을 요청하세요. 고소인이 주장하는 기망행위, 피해 금액, 시기 등을 구체적으로 파악해야 합니다. 형법 제347조의 사기죄는 기망행위가 핵심이므로, 고소인이 "어떤 거짓말에 속았다"고 주장하는지를 먼저 알아야 합니다.</p>\n<p>고소 내용을 파악한 뒤, 각 주장에 대해 <strong>반박할 수 있는 증거</strong>를 대응시켜 정리하세요. 고소인의 주장이 사실과 다른 부분을 명확히 하는 것이 첫 번째 단계입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 고소장 열람, 고소인 주장 항목별 정리, 반박 증거 대응표 작성</blockquote>',
      },
      {
        title: '사기 의도가 없었다는 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">편취 고의 부정이 무혐의의 핵심입니다</strong></p>\n<p>사기죄에서 가장 중요한 것은 <strong>편취의 고의</strong>입니다. 처음부터 속일 생각이 없었다는 점을 객관적으로 증명해야 합니다. 거래 당시의 이메일, 문자, 계약서, 이행 노력의 흔적(일부 변제, 물품 배송 시도 등)이 핵심 증거입니다.</p>\n<p>예를 들어 돈을 빌린 사건이라면 ① 차용 당시 <strong>안정적 소득</strong>이 있었다는 증거(급여 명세서, 재직증명서), ② 일부 변제한 이체 내역, ③ "곧 갚겠다"는 대화 내역 등이 편취 고의를 부정하는 자료가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 차용 당시 재정 증빙, 일부 변제 내역, 이행 노력 자료, 대화 기록</blockquote>',
      },
      {
        title: '수사 단계에서 적극적으로 소명하세요 — 의견서 제출',
        content:
          '<p><strong style="color:#1e3a5f">경찰·검찰 단계에서 의견서와 증거를 제출하세요</strong></p>\n<p>경찰 조사 시 <strong>변호인 의견서</strong>를 함께 제출하면 효과적입니다. 의견서에는 ① 사기 구성요건 미충족 사유, ② 고소인 주장의 허위 부분, ③ 정상 거래였음을 증명하는 자료를 포함하세요.</p>\n<p>검찰 송치 후에도 추가 의견서 제출이 가능합니다. 수사기관은 양쪽의 주장과 증거를 비교하므로, <strong>적극적으로 소명</strong>하는 것이 중요합니다. 수동적으로 기다리면 고소인의 일방적 주장에 의해 기소될 수 있습니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">사기 무고 대응 방법이 궁금하다면 <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 사기 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 의견서 + 증거 제출로 적극 소명, 검찰 단계에서도 추가 제출 가능</blockquote>',
      },
      {
        title: '무고죄 반대고소를 검토하세요 — 허위 고소에는 법적 책임이 따릅니다',
        content:
          '<p><strong style="color:#1e3a5f">형법 제156조 무고죄는 10년 이하 징역으로 처벌됩니다</strong></p>\n<p>상대방이 <strong>허위 사실</strong>로 고소한 것이 명백하다면, 형법 제156조 무고죄로 반대고소할 수 있습니다. 무고죄는 "타인으로 하여금 형사처분 또는 징계처분을 받게 할 목적으로 공무소 또는 공무원에 대하여 허위의 사실을 신고"하는 범죄입니다.</p>\n<p>무고죄 반대고소는 원래 사기 혐의에 대한 <strong>무혐의 처분 또는 무죄 판결</strong>을 받은 후에 하는 것이 일반적이지만, 수사 진행 중에도 가능합니다. 다만 무고죄 성립 요건은 엄격하여, 고소인이 "사실이 아닌 줄 알면서" 고소했다는 점을 증명해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 무고죄(형법 제156조) — 허위 사실을 알면서 고소한 경우 10년 이하 징역</blockquote>',
      },
    ],
    cases: [
      {
        title: '거래 분쟁을 사기로 고소한 사건 — 피고소인 무혐의 처분',
        summary:
          '중고거래에서 하자 있는 물건을 받은 구매자가 판매자를 사기로 고소했으나, 판매자가 하자 발생 후 교환·환불을 제안한 대화 기록을 제출하여 편취 고의가 부정되어 무혐의 처분을 받은 사례입니다.',
        takeaway:
          '비슷한 상황이라면 문제 발생 후 해결을 위해 노력한 흔적(대화 기록, 환불 시도 등)을 반드시 보관하세요.',
      },
      {
        title: '허위 사기 고소에 대해 무고죄 유죄 선고된 사례',
        summary:
          '채무자가 돈을 갚지 않자 채권자가 실제로는 사기가 아님을 알면서도 압박 수단으로 사기 고소를 했고, 이후 무고죄로 기소되어 유죄 판결을 받은 사례입니다.',
        takeaway:
          '비슷한 상황이라면 상대방이 금전 압박 목적으로 고소했다는 정황(합의 요구 문자, 협박성 발언 등)을 증거로 확보하세요.',
      },
    ],
    faq: [
      {
        question: '무혐의를 받으면 자동으로 무고가 성립하나요?',
        answer: '아닙니다. 무혐의와 무고는 별개입니다. 고소인이 <strong>"사실이 아닌 줄 알면서도 고의로 신고했다"</strong>는 점을 따로 증명해야 무고죄가 성립합니다.',
      },
      {
        question: '상대방이 금전 압박 목적으로 고소한 것 같은데 증거가 될까요?',
        answer: '네, <strong>"합의금을 주면 고소를 취소하겠다"는 문자, 협박성 연락</strong> 등은 허위 고소의 동기를 증명하는 핵심 증거입니다. 즉시 캡처하여 보관하세요.',
      },
      {
        question: '무고 역고소는 언제 하는 것이 유리한가요?',
        answer: '원래 사기 혐의에 대해 <strong>무혐의 처분이나 무죄 판결을 받은 후</strong>가 가장 유리합니다. 수사 중에도 가능하지만, 결과가 나온 후 하면 무고 입증이 쉬워집니다.',
      },
      {
        question: '무고죄로 고소하면 상대방은 어떤 처벌을 받나요?',
        answer: '형법 제156조에 따라 <strong>10년 이하 징역 또는 1,500만 원 이하 벌금</strong>에 해당합니다. 형사처벌 외에도 허위 고소로 인한 손해배상(민사)도 가능합니다.',
      },
      {
        question: '무혐의를 받으면 전과 기록이 남나요?',
        answer: '무혐의·불기소 처분을 받으면 <strong>전과 기록은 남지 않습니다</strong>. 다만 수사 경력은 10년간 보관되며 수사기관에서만 조회됩니다.',
      },
      {
        question: '허위 고소로 피해를 입었는데 손해배상을 받을 수 있나요?',
        answer: '네, 허위 고소로 정신적·경제적 피해를 입었다면 <strong>불법행위 손해배상(민법 제750조)</strong>을 청구할 수 있습니다. 변호사 비용, 정신적 고통 등을 포함하여 청구하세요.',
      },
    ],
    cta: {
      text: '사실과 다르게 사기로 신고당했다면 지금 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '사기죄 처벌 수위와 합의 시 감형 범위', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-report-deadline-amounts',
    keyword: '사기 피해 신고 기한과 금액별 대응법',
    questionKeyword: '사기 피해를 당했는데 신고 기한이 있나요? 금액에 따라 대응이 달라지나요?',
    ctaKeyword: '사기 피해 신고 기한',
    type: '수치기한형',
    meta: {
      title: '사기 피해 신고 기한·금액별 대응법 총정리 | 로앤가이드',
      description: '사기죄 공소시효는 10년, 하지만 신고는 빠를수록 유리합니다. 50만원 미만·이상·1억 이상 금액별 대응 차이와 신고·고소·민사 기한을 지금 확인하세요.',
    },
    intro: '3개월 전 지인 소개로 투자금 500만원을 맡겼는데, 어느 순간부터 연락이 끊겼습니다. 전화도 안 받고, 카카오톡 프로필도 사라졌습니다. "시간이 너무 지나면 신고도 못 하는 거 아닌가?" 걱정이 밀려옵니다. 사기 피해 신고에도 기한이 있는지, 금액에 따라 대응이 어떻게 달라지는지 정리해보세요.',
    timelineSteps: ['공소시효 확인', '금액별 대응 파악', '신고·고소 접수', '민사 병행 검토'],
    sections: [
      {
        title: '사기죄 공소시효는 10년입니다 — 아직 늦지 않았는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">사기죄의 공소시효는 범행일로부터 10년입니다</strong></p>\n<p>사기죄(<strong>형법 제347조</strong>)의 공소시효는 <strong>10년</strong>입니다. 피해를 인지한 시점이 아니라, 범행이 완성된 시점(돈을 편취당한 날)부터 기산됩니다. 3개월 전 피해라면 시효에는 전혀 문제가 없습니다.</p>\n<p>다만 <strong>민사상 손해배상 소멸시효</strong>는 별도입니다. 불법행위를 안 날로부터 <strong>3년</strong>, 불법행위일로부터 <strong>10년</strong>이 각각 적용되므로 형사와 민사 기한을 함께 파악하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 기한: 형사 공소시효 10년 | 민사 손해배상 소멸시효 3년(인지일 기준)</blockquote>',
      },
      {
        title: '금액에 따라 대응 방법이 달라집니다',
        content:
          '<p><strong style="color:#1e3a5f">50만원 미만, 50만원~1억원, 1억원 이상으로 나누어 대응하세요</strong></p>\n<p><strong>50만원 미만</strong>: 경찰 신고 후 소액사건심판(민사)을 병행하면 효율적입니다. 수사 우선순위가 낮을 수 있으므로 증거를 철저히 준비하세요. <strong>50만원 이상~1억원 미만</strong>: 고소장 제출과 함께 가압류 검토가 필요합니다. 상대 계좌를 파악하면 <strong>사전 가압류</strong>로 재산을 보전할 수 있습니다.</p>\n<p><strong>1억원 이상</strong>: <strong>특정경제범죄법</strong> 적용 대상이 됩니다. 5억원 이상이면 <strong>3년 이상 징역</strong>으로 형량이 크게 올라갑니다. 전문 변호사 선임과 함께 검찰 직접 고소도 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">금액별: 50만원 미만 → 소액심판 병행 | 50만원~1억 → 가압류 검토 | 1억 이상 → 특경법 적용</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">피해 금액과 상황에 따라 대응 방법이 달라집니다. <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 사기 진단</a>으로 지금 상황에 맞는 대응법을 확인해보세요.</p>',
      },
      {
        title: '신고→고소→민사, 순서를 잘 맞추세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 신고를 먼저 하고, 고소장과 민사를 순차적으로 진행하세요</strong></p>\n<p>첫 단계는 <strong>경찰 신고</strong>입니다. 112 또는 경찰청 사이버범죄 신고시스템(<strong>ecrm.police.go.kr</strong>)에서 접수합니다. 신고만으로는 수사 착수가 늦을 수 있으므로, 증거를 첨부한 <strong>고소장</strong>을 관할 경찰서에 별도 제출하세요.</p>\n<p>고소 접수 후에는 민사 절차를 병행합니다. <strong>내용증명</strong>으로 반환을 촉구하고, 응하지 않으면 <strong>지급명령</strong>이나 민사소송을 제기하세요. 형사 수사 중 확보된 상대방 인적사항을 민사에 활용할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: ①경찰 신고 → ②고소장 제출(증거 첨부) → ③내용증명 → ④민사 소송/지급명령</blockquote>',
      },
      {
        title: '기한 놓치지 않으려면 지금 바로 움직이세요',
        content:
          '<p><strong style="color:#1e3a5f">시효 내라도 시간이 지날수록 증거 확보와 재산 추적이 어려워집니다</strong></p>\n<p>공소시효가 10년이라고 안심하면 안 됩니다. 시간이 지나면 <strong>계좌 거래내역 보존 기한</strong>(5년)이 지나 증거가 사라지고, 상대방이 재산을 은닉할 가능성이 높아집니다. 빠를수록 수사와 재산 보전이 유리합니다.</p>\n<p><strong>가압류</strong>는 본안 소송 전에도 신청할 수 있습니다. 상대방 계좌를 알고 있다면 바로 가압류를 검토하세요. 부동산이나 차량 등록 정보도 확인하면 강제집행의 실효성을 높일 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 계좌 거래내역 보존 5년 | 가압류는 소송 전 가능 | 빠른 행동이 핵심</blockquote>',
      },
    ],
    cases: [
      {
        title: '투자 사기 피해자가 2년 뒤 고소하여 기소된 사례',
        summary:
          '관련 사례에서도 투자금 편취 후 2년이 지나 고소가 접수되었으나, 공소시효 내였고 송금 기록과 대화 캡처가 보존되어 있어 기소에 이른 경우가 있습니다. 피해자가 초기에 내용증명을 보내둔 것이 편취 의사 입증에 도움이 되었습니다.',
        takeaway:
          '비슷한 상황이라면 시효 내라 하더라도 증거를 빨리 확보하고 내용증명부터 발송해두세요.',
      },
      {
        title: '1억 이상 사기로 특경법 적용되어 중형 선고된 사례',
        summary:
          '관련 사례에서도 피해 금액이 1억 5천만원에 달하여 특정경제범죄법이 적용되었고, 일반 사기죄보다 훨씬 무거운 실형이 선고된 경우가 있습니다. 피해자 다수가 합동 고소하면서 수사가 빠르게 진행되었습니다.',
        takeaway:
          '비슷한 상황이라면 동일 피해자가 있는지 확인하고, 합동 고소를 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '사기 신고 기한이 지나면 아무것도 못 하나요?',
        answer: '형사 공소시효(<strong>10년</strong>)가 지나면 형사처벌은 불가하지만, 민사 소멸시효 내라면 <strong>손해배상 청구</strong>는 가능합니다.',
      },
      {
        question: '피해 금액이 30만원인데 경찰이 수사해주나요?',
        answer: '소액이라도 사기죄는 성립합니다. 다만 수사 우선순위가 낮을 수 있으므로 <strong>증거를 잘 정리</strong>해서 고소장을 제출하세요.',
      },
      {
        question: '특정경제범죄법은 얼마부터 적용되나요?',
        answer: '편취 금액 <strong>5억원 이상</strong>이면 3년 이상 징역, <strong>50억원 이상</strong>이면 무기 또는 5년 이상 징역에 해당합니다.',
      },
      {
        question: '민사 소멸시효 3년은 언제부터 계산하나요?',
        answer: '<strong>피해 사실을 안 날</strong>로부터 3년입니다. 모르고 있었다면 불법행위일로부터 10년까지 가능합니다.',
      },
      {
        question: '가압류는 어떻게 신청하나요?',
        answer: '관할 법원에 <strong>가압류 신청서</strong>와 소명자료를 제출합니다. 담보금(청구액의 10~30%)을 공탁해야 합니다.',
      },
      {
        question: '경찰 신고와 고소는 다른 건가요?',
        answer: '<strong>신고</strong>는 범죄 사실 알림이고, <strong>고소</strong>는 처벌 의사를 밝히며 수사를 요청하는 것입니다. 고소장을 제출해야 수사가 본격화됩니다.',
      },
      {
        question: '사기 피해 금액이 커지면 검찰에 직접 고소할 수 있나요?',
        answer: '가능합니다. <strong>1억원 이상</strong> 대형 사건은 검찰 직접 고소가 수사 속도 면에서 유리할 수 있습니다.',
      },
      {
        question: '공소시효 10년이면 천천히 해도 되나요?',
        answer: '시효 내라도 시간이 지나면 <strong>증거 소멸, 재산 은닉</strong>으로 어려워집니다. 가능한 한 빨리 움직이세요.',
      },
    ],
    cta: {
      text: '1분 안에 사기 피해 신고 기한 준비사항 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '사기죄 고소장 쓰기 전에 정리할 것', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '투자 사기 피해 체크리스트', href: '/guide/fraud/investment-fraud-checklist' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-suspect-interrogation-mistakes',
    keyword: '사기 피의자 조사에서 흔한 실수 5가지',
    questionKeyword: '사기로 조사받는데 어떤 실수를 피해야 하나요?',
    ctaKeyword: '사기 피의자 조사 대응',
    type: '실수함정형',
    meta: {
      title: '사기 피의자 조사에서 절대 피할 실수 5가지 | 로앤가이드',
      description: '사기 혐의를 받고 있다면 경찰 조사에서 이것만은 하지 마세요. 진술 번복, 증거 인멸 시도 등 처벌을 키우는 5가지 실수와 대응법을 바로 정리해보세요.',
    },
    intro: '평소처럼 출근 준비를 하는데 모르는 번호로 전화가 옵니다. 경찰서입니다. 사기 혐의로 출석하라는 통보를 받았습니다. 머릿속이 하얘지고, 무슨 말을 해야 할지 모르겠습니다. 혐의를 받고 있다면, 조사 전에 반드시 피해야 할 실수들을 확인해보세요.',
    timelineSteps: ['출석 준비', '진술 전략 수립', '증거 대응', '합의·양형 검토'],
    sections: [
      {
        title: '실수 ①② — 준비 없이 출석하고 모든 질문에 답변하는 것',
        content:
          '<p><strong style="color:#1e3a5f">아무 준비 없이 경찰서에 가면 불리한 진술이 기록됩니다</strong></p>\n<p>첫 번째 실수는 <strong>아무 준비 없이 출석</strong>하는 것입니다. 출석 전에 반드시 사건의 경위, 관련 서류, 자금 흐름을 정리해야 합니다. 조사관이 어떤 질문을 할지 예상하고 답변 방향을 미리 잡아두세요.</p>\n<p>두 번째 실수는 <strong>모든 질문에 성실히 답변</strong>하는 것입니다. 피의자에게는 <strong>진술거부권</strong>(형사소송법 제244조의3)이 있습니다. 불리한 질문에는 "변호사와 상의 후 답변하겠습니다"라고 말할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 출석 전 사건 정리 필수 | 진술거부권 행사 가능 | 불리한 질문은 유보</blockquote>',
      },
      {
        title: '실수 ③ — 감정적으로 대응하는 것',
        content:
          '<p><strong style="color:#1e3a5f">흥분하거나 억울함을 쏟아내면 조서에 불리하게 기재됩니다</strong></p>\n<p>세 번째 실수는 <strong>감정적 대응</strong>입니다. "제가 왜 사기꾼입니까!", "그 사람이 거짓말하는 겁니다!"와 같은 감정적 발언은 조서에 그대로 기재되고, 수사관에게도 좋은 인상을 주지 못합니다.</p>\n<p>침착하게 <strong>사실관계</strong>만 답변하세요. 의견을 물으면 "사실관계를 말씀드리겠습니다"라고 전제하고 이야기하세요. 조서 작성 후에는 반드시 <strong>내용을 꼼꼼히 확인</strong>하고, 틀린 부분은 정정을 요구하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 감정적 발언은 조서에 기록됨 | 사실관계 위주 답변 | 조서 확인·정정 필수</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">혐의를 받고 있다면, 조사 전에 대응 전략을 점검하세요. <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 사기 진단</a>으로 현재 상황에 맞는 방향을 확인해보세요.</p>',
      },
      {
        title: '실수 ④ — 증거를 임의로 제출하는 것',
        content:
          '<p><strong style="color:#1e3a5f">수사관 요청이라도 유리한 증거만 선별해서 제출하세요</strong></p>\n<p>네 번째 실수는 <strong>증거를 무작정 제출</strong>하는 것입니다. 수사관이 "통장 내역 다 가져오세요", "휴대폰 보여주세요"라고 하면 협조해야 한다고 생각하기 쉽습니다. 하지만 피의자는 <strong>자기에게 불리한 증거를 제출할 의무가 없습니다</strong>.</p>\n<p>제출 전에 해당 자료가 유리한지 불리한지 반드시 검토하세요. 가능하면 <strong>변호사와 함께</strong> 어떤 자료를 제출할지 상의한 뒤 선별적으로 제출하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 불리한 증거 제출 의무 없음 | 변호사 상의 후 선별 제출 | 압수수색영장 여부 확인</blockquote>',
      },
      {
        title: '실수 ⑤ — 합의 시기를 놓치는 것',
        content:
          '<p><strong style="color:#1e3a5f">합의는 검찰 송치 전이 가장 효과적입니다</strong></p>\n<p>다섯 번째 실수는 <strong>합의 타이밍을 놓치는 것</strong>입니다. 사기 사건에서 피해자와의 합의는 양형에 매우 큰 영향을 줍니다. 특히 <strong>경찰 수사 단계</strong>에서 합의가 이루어지면 불기소 의견으로 송치될 가능성이 높아집니다.</p>\n<p>검찰 송치 후에도 합의는 가능하지만, 기소 후에는 효과가 줄어듭니다. 합의서에는 <strong>피해 금액 전액 변제, 처벌불원 의사</strong>를 명확히 기재해야 합니다. 분할 변제도 가능하니 빨리 연락하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">타이밍: 경찰 단계 합의 → 불기소 가능성 높음 | 검찰 송치 후 → 효과 감소 | 기소 후 → 양형 참작만</blockquote>',
      },
    ],
    cases: [
      {
        title: '첫 조사에서 불리한 진술을 하여 기소된 사례',
        summary:
          '관련 사례에서도 피의자가 변호사 없이 첫 경찰 조사에 출석하여 "돈을 갚을 생각이 있었다"는 취지로 진술했으나, 조서에는 변제 의사가 불분명한 것으로 기재되어 기소에 이른 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 첫 조사 전에 반드시 변호사와 진술 방향을 상의하세요.',
      },
      {
        title: '빠른 합의로 불기소 처분을 받은 사례',
        summary:
          '관련 사례에서도 경찰 수사 단계에서 피해 금액 전액을 변제하고 피해자로부터 처벌불원서를 받아, 검찰에서 기소유예 처분을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 합의 가능한 금액을 빨리 마련하고, 경찰 단계에서 합의를 시도하세요.',
      },
    ],
    faq: [
      {
        question: '경찰에서 출석 요구가 왔는데 꼭 가야 하나요?',
        answer: '임의출석 요구는 거부할 수 있지만, 반복 불출석 시 <strong>체포영장</strong>이 발부될 수 있으므로 일정을 조율해서 출석하세요.',
      },
      {
        question: '변호사 없이 조사받아도 되나요?',
        answer: '가능하지만 권장하지 않습니다. 특히 첫 조사는 <strong>조서의 기초</strong>가 되므로 변호사 조력을 받는 것이 안전합니다.',
      },
      {
        question: '진술거부권을 행사하면 불리하지 않나요?',
        answer: '법적으로 진술거부는 <strong>불이익의 근거가 될 수 없습니다</strong>. 불리한 질문에는 적극적으로 활용하세요.',
      },
      {
        question: '핸드폰을 압수당할 수 있나요?',
        answer: '<strong>압수수색영장</strong>이 있어야 합니다. 영장 없이 임의 제출을 요구하면 거부할 수 있습니다.',
      },
      {
        question: '합의금은 얼마가 적당한가요?',
        answer: '원칙적으로 <strong>피해 금액 전액 + 위자료</strong>입니다. 전액이 어려우면 분할 변제 조건으로 합의서를 작성할 수 있습니다.',
      },
      {
        question: '조서에 서명하면 나중에 번복할 수 있나요?',
        answer: '서명 후 번복은 <strong>신빙성이 크게 떨어집니다</strong>. 조서 내용을 반드시 꼼꼼히 확인한 뒤 서명하세요.',
      },
      {
        question: '사기 혐의인데 구속될 수도 있나요?',
        answer: '도주·증거인멸 우려가 있으면 구속될 수 있습니다. <strong>피해 금액이 크거나 다수 피해자</strong>가 있으면 구속 가능성이 높아집니다.',
      },
      {
        question: '고소인과 직접 연락해서 합의해도 되나요?',
        answer: '가능하지만, 2차 분쟁 방지를 위해 <strong>변호사를 통한 합의</strong>가 안전합니다. 직접 연락은 협박으로 오해받을 수 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 사기 피의자 조사 대응 준비사항 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '사기 혐의를 받을 때 대응법', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기죄 처벌 수위와 합의 시 감형 범위', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '폭행 가해자로 입건됐을 때 첫 대응', href: '/guide/assault/assault-charged-first-response' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'loan-default-vs-fraud-checklist',
    keyword: '채무불이행 vs 사기 구별 체크리스트',
    questionKeyword: '돈을 못 갚았는데 사기라고 고소당했어요. 채무불이행과 사기는 어떻게 다른가요?',
    ctaKeyword: '채무불이행 사기 구별',
    type: '체크리스트형',
    meta: {
      title: '채무불이행 vs 사기죄 구별 핵심 체크리스트 | 로앤가이드',
      description: '돈을 못 갚았는데 사기로 고소당했다면? 채무불이행과 사기의 법적 구별 기준, 편취 고의 판단 요소, 혐의 벗는 대응법을 지금 확인하세요.',
    },
    intro: '2년 전 친구에게 3,000만원을 빌렸습니다. 사업이 잘 될 거라 확신했지만, 사업이 실패하면서 약속한 날짜에 갚지 못했습니다. 그런데 어느 날 사기죄로 고소장이 날아왔습니다. "못 갚은 것"과 "속인 것"은 분명 다른데, 사실과 다르게 신고되었다면 어떻게 대응해야 하는지 정리해보세요.',
    timelineSteps: ['사기 vs 채무불이행 구별', '차용 당시 상황 정리', '증거 확보', '수사 대응·합의'],
    sections: [
      {
        title: '사기와 채무불이행의 핵심 차이를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">빌릴 때 갚을 의사와 능력이 있었는지가 핵심 기준입니다</strong></p>\n<p><strong>사기죄</strong>는 처음부터 갚을 의사나 능력이 없으면서 돈을 빌린 경우에 성립합니다. 반면 <strong>채무불이행</strong>은 빌릴 때 갚을 의사와 능력이 있었지만 사정이 변해 못 갚게 된 경우입니다.</p>\n<p>대법원은 <strong>"차용 당시의 변제 의사와 변제 능력"</strong>을 핵심 판단 기준으로 봅니다(대법원 2017도2760 판결 등). 빌린 뒤 갚지 못한 것 자체만으로는 사기가 아닙니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 차용 당시 변제 의사 + 변제 능력 유무 | "못 갚음" ≠ "사기"</blockquote>',
      },
      {
        title: '대법원 판단 기준 체크리스트로 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">아래 항목에 해당하면 채무불이행(사기 아님)에 가깝습니다</strong></p>\n<p>① 차용 당시 <strong>정기적인 수입</strong>이 있었다 ② 빌린 돈을 <strong>약속한 용도</strong>에 사용했다 ③ 일부라도 <strong>변제한 사실</strong>이 있다 ④ 변제 의사를 <strong>문자·카톡</strong>으로 표현한 적이 있다 ⑤ 차용증에 <strong>변제 기한과 방법</strong>이 명시되어 있다</p>\n<p>반대로 사기에 가까운 징표는: ① <strong>수입이 없거나 이미 다수 채무</strong>가 있었다 ② 빌린 돈을 <strong>도박·유흥</strong>에 썼다 ③ 차용 직후 <strong>연락을 끊었다</strong> ④ <strong>허위 사업계획서</strong>를 보여주며 빌렸다</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 수입 유무, 자금 용도, 일부 변제 여부, 변제 의사 표현, 차용증 내용</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">사실과 다르게 신고되었다면, 지금 상황이 사기에 해당하는지 점검하세요. <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 사기 진단</a>으로 방향을 확인해보세요.</p>',
      },
      {
        title: '채무불이행을 입증할 증거를 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">차용 당시 변제 의사와 능력을 보여줄 자료가 핵심입니다</strong></p>\n<p><strong>재직증명서, 급여명세서, 사업자등록증</strong> 등 차용 당시 수입이 있었음을 보여주는 서류를 준비하세요. 빌린 돈을 약속한 용도에 사용했다는 <strong>계좌 이체 내역</strong>도 중요합니다.</p>\n<p>일부라도 갚은 기록(<strong>이체 내역, 현금 영수증</strong>), "곧 갚겠다"는 <strong>카톡·문자 메시지</strong>가 있으면 변제 의사의 강력한 증거가 됩니다. 차용증이 있다면 원본을 확보하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 차용 당시 재직증명·급여명세 | 자금 용도 이체 내역 | 일부 변제 기록 | 변제 의사 메시지</blockquote>',
      },
      {
        title: '수사 대응과 합의를 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">혐의를 부인하면서도 민사적 해결 의사를 보여주는 것이 유리합니다</strong></p>\n<p>경찰 조사에서는 <strong>"빌릴 때 갚을 의사와 능력이 있었다"</strong>는 점을 체크리스트에 맞춰 일관되게 진술하세요. 감정적 대응은 금물입니다. 증거 자료를 정리해서 제출하면 수사관 판단에 도움이 됩니다.</p>\n<p>동시에 민사적 해결도 진행하세요. 변제 계획서를 작성하고 일부라도 <strong>변제를 시작</strong>하면, 검찰 단계에서 불기소 가능성이 높아집니다. 고소인에게 <strong>변제 의사와 계획을 내용증명</strong>으로 알리는 것도 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 일관된 진술 + 증거 제출 | 변제 계획서 + 일부 변제 시작 | 내용증명으로 의사 전달</blockquote>',
      },
    ],
    cases: [
      {
        title: '사업 실패 후 미변제, 사기 무죄 판결 사례',
        summary:
          '관련 사례에서도 피고인이 사업 목적으로 차용하여 실제로 사업에 투자했으나 실패하여 변제하지 못한 경우, 차용 당시 변제 의사와 능력이 인정되어 사기 무죄가 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 차용 당시 수입과 자금 사용처를 입증할 수 있는 증거를 확보하세요.',
      },
      {
        title: '일부 변제 기록이 무혐의 결정에 결정적이었던 사례',
        summary:
          '관련 사례에서도 피고소인이 수차례 일부 변제한 이체 기록과 "조금만 더 기다려달라"는 카톡 메시지가 변제 의사의 증거로 인정되어 무혐의 처분을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 일부 변제 기록과 변제 의사를 표현한 메시지를 모두 보존하세요.',
      },
    ],
    faq: [
      {
        question: '돈을 못 갚으면 무조건 사기인가요?',
        answer: '아닙니다. <strong>빌릴 때 갚을 의사와 능력이 있었다면</strong> 채무불이행이지 사기가 아닙니다.',
      },
      {
        question: '차용증이 없으면 사기로 볼 수 있나요?',
        answer: '차용증 유무만으로 사기 여부가 결정되지는 않습니다. <strong>차용 당시의 전체 상황</strong>을 종합적으로 판단합니다.',
      },
      {
        question: '고소당했는데 돈을 갚으면 처벌을 안 받나요?',
        answer: '변제 후 고소인이 <strong>처벌불원서</strong>를 제출하면 불기소 가능성이 높아지지만, 갚는다고 자동으로 무죄가 되는 것은 아닙니다.',
      },
      {
        question: '대법원이 사기로 판단하는 핵심 기준이 뭔가요?',
        answer: '<strong>차용 당시의 변제 의사와 변제 능력</strong>입니다. 빌린 후 행동(연락 두절, 도박 사용 등)도 간접 증거로 봅니다.',
      },
      {
        question: '채무불이행이면 형사처벌은 안 받나요?',
        answer: '맞습니다. 채무불이행은 <strong>민사 문제</strong>이므로 형사처벌 대상이 아닙니다. 다만 민사 소송으로 변제 판결을 받을 수 있습니다.',
      },
      {
        question: '사기 고소를 취하하게 하려면 어떻게 하나요?',
        answer: '<strong>피해 금액을 변제</strong>하고 합의서와 처벌불원서를 받는 것이 가장 확실한 방법입니다.',
      },
      {
        question: '일부만 갚았는데 도움이 되나요?',
        answer: '일부 변제는 <strong>변제 의사의 증거</strong>가 됩니다. 금액이 적더라도 꾸준히 변제한 기록이 있으면 유리합니다.',
      },
      {
        question: '변호사 없이 경찰 조사에 가도 되나요?',
        answer: '사기 혐의는 진술 내용이 매우 중요하므로 <strong>변호사 조력</strong>을 받는 것을 강력히 권장합니다.',
      },
    ],
    cta: {
      text: '1분 안에 채무불이행 사기 구별 준비사항 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '사기 혐의를 받을 때 대응법', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기 무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '폭행 형사고소 vs 민사소송 비교', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'online-shopping-fraud-refund',
    keyword: '인터넷 쇼핑 사기 환불받는 절차',
    questionKeyword: '인터넷 쇼핑몰에서 사기당했는데 환불받으려면 어떻게 해야 하나요?',
    ctaKeyword: '인터넷 쇼핑 사기 환불',
    type: '절차형',
    meta: {
      title: '인터넷 쇼핑 사기 환불받는 4단계 절차 | 로앤가이드',
      description: '가짜 쇼핑몰이나 SNS 판매 사기를 당했다면? 카드사 결제취소, 경찰 신고, 소비자원 피해구제, 민사청구까지 환불받는 절차를 바로 정리해보세요.',
    },
    intro: '인스타그램 광고를 보고 유명 브랜드 가방을 반값에 샀는데, 도착한 건 싸구려 짝퉁이었습니다. 판매자에게 항의하려 했지만 프로필은 이미 삭제됐고, 메시지도 읽히지 않습니다. 카드값은 이번 달에 빠져나갈 예정인데, 환불받을 수 있는 방법이 있는지 막막합니다. 지금부터 환불까지의 절차를 정리해보겠습니다.',
    timelineSteps: ['증거 확보', '카드사 결제취소', '경찰 신고', '소비자원 피해구제'],
    sections: [
      {
        title: '결제 증거와 판매자 정보를 즉시 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">광고 화면, 결제 내역, 배송 기록을 지금 바로 캡처하세요</strong></p>\n<p>가장 먼저 해야 할 일은 <strong>판매자가 삭제하기 전에 모든 기록을 확보</strong>하는 것입니다. SNS 광고 화면, 상품 페이지, 판매자와의 대화 내용을 전체 화면으로 캡처하세요. 날짜와 시간이 보이도록 찍어야 증거로서 효력이 높아집니다.</p>\n<p><strong>카드 결제 내역</strong>(카드사 앱에서 확인), 계좌이체 내역, 택배 송장번호를 정리하세요. 도착한 상품이 가짜인 경우 <strong>정품과 비교한 사진</strong>도 촬영해두면 기망 행위 입증에 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: SNS 광고·상품 페이지 캡처, 결제 내역, 대화 기록, 수령 상품 사진</blockquote>',
      },
      {
        title: '카드사에 결제취소(이의제기)를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">신용카드 결제라면 카드사 이의제기로 환불받을 수 있습니다</strong></p>\n<p><strong>신용카드</strong>로 결제했다면 카드사에 전화해서 <strong>이의제기(차지백, chargeback)</strong>를 신청하세요. 전자상거래법 제18조에 따라 소비자는 상품 수령 후 <strong>7일 이내</strong> 청약철회가 가능하고, 사기에 해당하면 그 이후에도 결제취소를 요청할 수 있습니다.</p>\n<p>카드사에 증거 자료(상품 사진, 광고와 다른 점, 판매자 연락 불가 증빙)를 함께 제출하면 처리가 빨라집니다. 체크카드나 <strong>계좌이체</strong>의 경우 결제취소가 어려우므로 경찰 신고와 민사 청구를 병행해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 카드사 이의제기 신청, 증빙자료 제출 (전자상거래법 제18조)</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">인터넷 쇼핑 사기 피해를 입으셨다면, 지금 상황에서 어떤 절차를 밟아야 하는지 <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '경찰에 사기 신고하고 고소장을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">사이버범죄 신고시스템으로 온라인 사기를 신고하세요</strong></p>\n<p><strong>경찰청 사이버범죄 신고시스템</strong>(ecrm.police.go.kr)에서 온라인으로 신고할 수 있습니다. 신고 시 판매자 정보(계좌번호, 전화번호, SNS 계정명), 피해 금액, 거래 경위를 정리해서 제출하세요. 사기죄는 <strong>형법 제347조</strong>에 해당하며 10년 이하 징역 또는 2,000만원 이하 벌금입니다.</p>\n<p>같은 판매자에게 피해를 본 사람이 여러 명이면 <strong>공동 고소</strong>를 진행하는 것이 수사에 유리합니다. <strong>더치트</strong>(thecheat.co.kr)나 사기피해 커뮤니티에서 동일 피해자를 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: ecrm.police.go.kr 신고, 고소장 작성(피고소인 정보·범죄사실·증거목록)</blockquote>',
      },
      {
        title: '한국소비자원 피해구제와 민사 청구를 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">소비자원 피해구제 신청으로 조정을 받을 수 있습니다</strong></p>\n<p><strong>한국소비자원</strong>(1372 소비자상담센터)에 피해구제를 신청하면 판매자와의 조정을 중재해줍니다. 전자상거래법상 통신판매업자는 <strong>사업자등록</strong>과 <strong>통신판매업 신고</strong> 의무가 있으므로, 미신고 업체라면 이 자체가 위법 증거가 됩니다.</p>\n<p>판매자가 조정에 응하지 않으면 <strong>소액사건심판</strong>(3,000만원 이하)이나 <strong>지급명령</strong>을 통해 민사적으로 환불을 받을 수 있습니다. PG사(결제대행사)에도 판매자 정보 제공을 요청하면 민사 소송에 필요한 상대방 인적사항을 확보할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 1372 소비자상담센터 신청, 소액사건심판 또는 지급명령 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '가짜 쇼핑몰 운영자가 사기죄로 실형을 선고받은 사례',
        summary:
          '관련 사례에서도 유명 브랜드 로고를 도용한 가짜 쇼핑몰을 개설하고, 결제만 받은 뒤 상품을 보내지 않거나 짝퉁을 보낸 운영자가 사기죄로 징역형을 선고받은 경우가 있습니다. 피해자 수십 명의 결제 내역과 광고 캡처가 핵심 증거로 활용되었습니다.',
        takeaway:
          '비슷한 상황이라면 광고 화면과 결제 내역을 반드시 캡처하고, 동일 피해자를 모아 공동 고소를 검토해보세요.',
      },
      {
        title: '카드사 이의제기로 전액 환불받은 사례',
        summary:
          '관련 사례에서도 SNS 광고를 통해 구매한 상품이 광고와 전혀 다른 제품이었고, 구매자가 카드사에 이의제기를 신청하면서 상품 비교 사진과 판매자 연락 불가 증빙을 함께 제출하여 전액 결제취소를 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 카드사 이의제기 시 광고 내용과 실제 상품의 차이를 사진으로 명확히 증빙하세요.',
      },
    ],
    faq: [
      {
        question: '인터넷 쇼핑몰에서 짝퉁을 받았는데 사기인가요?',
        answer: '정품이라고 광고하고 <strong>짝퉁을 보냈다면 기망행위</strong>에 해당하여 사기죄가 성립할 수 있습니다.',
      },
      {
        question: '카드 결제가 아니라 계좌이체로 보냈는데 환불받을 수 있나요?',
        answer: '계좌이체는 카드사 이의제기가 불가능하므로 <strong>경찰 신고와 민사 소송</strong>을 통해 환불을 받아야 합니다.',
      },
      {
        question: '피해 금액이 소액인데도 신고할 수 있나요?',
        answer: '금액과 관계없이 신고 가능합니다. <strong>소액 피해자가 많으면</strong> 합산되어 수사가 활발해지는 경우도 많습니다.',
      },
      {
        question: 'SNS 판매자 계정이 삭제됐는데 어떻게 찾나요?',
        answer: '경찰에 신고하면 <strong>SNS 플랫폼에 가입자 정보 제공</strong>을 요청할 수 있고, 결제 시 사용된 계좌로도 추적이 가능합니다.',
      },
      {
        question: '전자상거래법상 청약철회 기간이 지났는데 환불받을 수 있나요?',
        answer: '사기에 해당하면 <strong>7일 청약철회 기간과 무관하게</strong> 카드사 이의제기나 민사 청구가 가능합니다.',
      },
      {
        question: '해외 쇼핑몰에서 사기당했는데도 신고할 수 있나요?',
        answer: '국내 경찰에 신고할 수 있고, <strong>한국소비자원 국제거래 피해구제</strong> 서비스도 이용 가능합니다.',
      },
      {
        question: '더치트에서 같은 계좌로 피해 본 사람이 있으면 어떻게 하나요?',
        answer: '<strong>공동 고소</strong>를 진행하면 수사가 빨라지고, 피해 규모가 커져 처벌 수위도 높아집니다.',
      },
      {
        question: '물건은 받았는데 품질이 너무 나쁜 경우도 사기인가요?',
        answer: '단순 품질 불만은 사기가 아니지만, <strong>광고 내용과 현저히 다른 상품</strong>을 보냈다면 기망행위로 볼 수 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 인터넷 쇼핑 사기 환불 준비사항 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '중고거래 사기 증거 모으는 법', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '사기 고소장 작성 가이드', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '폭행 치료비 청구 기한과 금액 기준', href: '/guide/assault/assault-medical-cost-timeline' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-accomplice-unknowing-defense',
    keyword: '모르고 사기에 가담했을 때 대응법',
    questionKeyword: '사기인 줄 모르고 가담했는데 공범으로 처벌받나요?',
    ctaKeyword: '사기 공범 혐의 대응',
    type: '상황형',
    meta: {
      title: '모르고 사기 가담했을 때 즉시 대응법 | 로앤가이드',
      description: '통장 대여, 명의 대여, 수금 알바로 사기 공범 혐의를 받고 있다면? 고의 부정 전략, 수사 단계별 대응법, 처벌 감경 방법을 지금 확인하세요.',
    },
    intro: '아는 선배가 "잠깐 통장 빌려달라"고 해서 빌려줬는데, 그 통장이 보이스피싱에 쓰였습니다. 경찰에서 사기 공범 혐의로 출석하라는 연락이 왔습니다. 단순히 부탁을 들어준 것뿐인데, 공범이라니 당황스럽습니다. 혐의를 받고 있다면 지금부터 어떻게 대응해야 하는지 정리해보겠습니다.',
    timelineSteps: ['상황 파악', '증거 확보', '진술 준비', '법적 대응'],
    sections: [
      {
        title: '공범 성립 요건부터 정확히 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">사기 공범은 "사기라는 사실을 알았는지"가 핵심입니다</strong></p>\n<p>사기 공범(공모공동정범)이 성립하려면 <strong>편취의 고의</strong>, 즉 "상대방을 속여 돈을 빼앗는다는 사실을 알면서 가담했는지"가 입증되어야 합니다. 단순히 통장을 빌려줬다는 사실만으로 자동으로 공범이 되는 것은 아닙니다.</p>\n<p>다만 <strong>전자금융거래법 제49조</strong>에 따라 접근매체(통장, 카드, OTP 등)를 양도하는 것 자체가 <strong>5년 이하 징역 또는 3,000만원 이하 벌금</strong>에 해당할 수 있으므로 주의가 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 공범 성립 = 사기 인식 + 가담 행위 | 통장 양도 자체도 별도 처벌 가능</blockquote>',
      },
      {
        title: '"몰랐다"는 주장을 뒷받침할 증거를 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">사기에 가담한 것이 아니라 속았다는 증거를 확보하세요</strong></p>\n<p>혐의를 받고 있다면 핵심은 <strong>"사기인 줄 몰랐다"는 점을 입증</strong>하는 것입니다. 선배나 지인이 통장을 빌려달라고 했을 때의 대화 내용(카톡, 문자)을 확보하세요. "사업 자금 잠깐 쓴다", "곧 돌려준다" 등의 메시지가 있으면 <strong>속아서 빌려준 정황</strong>이 됩니다.</p>\n<p>본인이 사기 수익금을 전혀 받지 않았다는 점, 범행 계획에 관여하지 않았다는 점도 중요합니다. <strong>금전 수수 내역</strong>이 없다면 통장 거래내역으로 이를 증명할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 통장 대여 경위 대화 기록, 금전 미수수 증빙, 범행 미관여 정황 자료</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">사기 공범 혐의로 출석 요구를 받으셨다면, 지금 상황에 맞는 대응 방법을 <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '경찰 조사에서 진술 실수를 피하세요',
        content:
          '<p><strong style="color:#1e3a5f">조사 전 변호인 조력을 받고, 불리한 진술을 피하세요</strong></p>\n<p>경찰 조사에서 가장 위험한 것은 <strong>"뭔가 이상하다고 느꼈다"는 취지의 진술</strong>입니다. 이 한마디가 "미필적 고의"(알 수도 있었는데 감수했다)의 근거가 됩니다. 진술 전에 반드시 <strong>변호사와 상담</strong>하세요.</p>\n<p>"이상함을 느꼈냐"는 질문에는 <strong>"전혀 의심하지 못했다"</strong>고 일관되게 답변해야 합니다. 수사관의 회유성 질문("솔직하게 말하면 선처해준다")에 흔들려 불리한 진술을 하면 번복이 매우 어렵습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: "이상하다고 느꼈다" 진술 금지 | 변호인 동석 요청 가능</blockquote>',
      },
      {
        title: '혐의별 법적 대응 전략을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">사기 공범 혐의와 전자금융거래법 위반 혐의를 구분해서 대응하세요</strong></p>\n<p><strong>사기 공범 혐의</strong>는 고의 부정(사기인 줄 몰랐음)으로 무혐의를 주장할 수 있습니다. 반면 <strong>전자금융거래법 위반</strong>(접근매체 양도)은 "몰랐다"는 항변이 통하기 어려우므로, 양형 사유(초범, 반성, 피해 회복 노력)를 준비하는 것이 현실적입니다.</p>\n<p>피해자와의 <strong>합의</strong>는 양형에 큰 영향을 미칩니다. 본인이 직접 사기 행위를 한 것이 아니더라도, 통장이 사기에 사용되어 피해가 발생했다면 피해 회복에 기여하는 것이 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 사기 공범 → 고의 부정 | 전자금융거래법 → 양형 사유 준비 | 피해 합의 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '통장 대여자가 사기 고의 부정으로 무죄를 받은 사례',
        summary:
          '관련 사례에서도 지인의 부탁으로 통장을 빌려줬는데 보이스피싱에 사용된 경우, 피고인이 보이스피싱이라는 사실을 전혀 알지 못했고 금전적 대가도 받지 않은 점이 인정되어 사기 공범 혐의에 대해 무죄가 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 통장을 빌려준 경위와 대가를 받지 않은 사실을 입증할 증거를 확보하세요.',
      },
      {
        title: '수금 알바를 하다 사기 공범으로 기소된 사례',
        summary:
          '관련 사례에서도 "물품 대금 수거 알바"라고 속아 현금을 수거·전달한 피고인이 사기 공범으로 기소되었으나, 알바 모집 광고와 지시 내용만 확인했을 뿐 사기 전모를 알지 못한 점이 참작되어 집행유예를 선고받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 알바 모집 광고, 지시 내용 등 "정상적인 업무로 믿었다"는 정황 자료를 보존하세요.',
      },
    ],
    faq: [
      {
        question: '통장을 빌려줬다는 이유만으로 처벌받나요?',
        answer: '사기 공범 여부와 별개로 <strong>전자금융거래법 위반</strong>으로 처벌받을 수 있습니다(5년 이하 징역/3,000만원 이하 벌금).',
      },
      {
        question: '보이스피싱인 줄 정말 몰랐으면 무죄인가요?',
        answer: '<strong>사기 고의가 없었음을 입증</strong>하면 사기 공범에 대해서는 무죄가 가능합니다. 다만 통장 양도 자체는 별도 처벌 대상입니다.',
      },
      {
        question: '돈을 한 푼도 안 받았는데도 공범인가요?',
        answer: '대가 수수 여부는 <strong>고의 판단의 중요한 참고자료</strong>이지만, 대가가 없더라도 사기를 알았다면 공범이 될 수 있습니다.',
      },
      {
        question: '경찰 조사에서 뭐라고 말해야 하나요?',
        answer: '"사기인 줄 전혀 몰랐다"고 <strong>일관되게 진술</strong>하되, 조사 전에 반드시 변호사와 상담하세요.',
      },
      {
        question: '명의를 빌려줬는데 대출 사기에 쓰였어요. 공범인가요?',
        answer: '대출 사기라는 사실을 알았는지가 핵심입니다. <strong>"명의만 빌려달라"는 요청 경위</strong>를 증명할 수 있으면 유리합니다.',
      },
      {
        question: '피해자와 합의하면 형을 줄일 수 있나요?',
        answer: '<strong>피해 회복은 양형에 가장 큰 영향</strong>을 미칩니다. 합의서와 처벌불원서를 확보하면 집행유예나 벌금형 가능성이 높아집니다.',
      },
      {
        question: '미필적 고의가 뭔가요?',
        answer: '"사기일 수도 있겠다"고 <strong>인식하면서도 감수</strong>한 경우입니다. "이상하다고 느꼈다"는 진술이 미필적 고의의 근거가 될 수 있어 주의가 필요합니다.',
      },
      {
        question: '공범 혐의와 방조 혐의는 다른 건가요?',
        answer: '공모공동정범은 <strong>정범과 동일하게 처벌</strong>되지만, 방조범은 정범보다 감경됩니다. 가담 정도에 따라 구분됩니다.',
      },
    ],
    cta: {
      text: '1분 안에 사기 공범 혐의 대응 준비사항 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '사기 혐의를 받을 때 대응법', href: '/guide/fraud/fraud-accused-response' },
      { label: '보이스피싱 즉시 대응 5단계', href: '/guide/fraud/voice-phishing-immediate-5steps' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '폭행 무고 대응 체크리스트', href: '/guide/assault/assault-false-accusation-counter' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'rental-fraud-false-accusation-defense',
    keyword: '임대차 분쟁인데 사기로 고소당했을 때',
    questionKeyword: '세입자와 보증금 분쟁 중인데 사기로 고소당했어요. 어떻게 대응하나요?',
    ctaKeyword: '임대차 사기 고소 대응',
    type: 'Q&A형',
    meta: {
      title: '임대차 분쟁 중 사기로 고소당했을 때 대응법 | 로앤가이드',
      description: '보증금 반환 분쟁 중 전세사기로 고소당했다면? 민사와 형사의 차이, 사기 고의 부정 방법, 무고죄 반소 가능성을 바로 정리해보세요.',
    },
    intro: '부동산 시세가 떨어져서 세입자에게 보증금을 즉시 돌려주지 못하고 있는데, 세입자가 "전세사기"라며 경찰에 사기죄로 고소장을 넣었습니다. 임대 계약 당시에는 시세가 충분했고, 고의로 속인 적이 없습니다. 사실과 다르게 신고되었다면 어떻게 대응해야 하는지 정리해보겠습니다.',
    timelineSteps: ['고소 내용 확인', '민사·형사 구분', '사기 고의 반박', '반대고소 검토'],
    sections: [
      {
        title: '임대차 분쟁과 사기는 법적으로 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">보증금 반환 지연은 민사 채무불이행이지 형사 사기가 아닙니다</strong></p>\n<p>사기죄(형법 제347조)가 성립하려면 <strong>계약 당시부터 속일 의도</strong>가 있어야 합니다. 임대 계약 체결 시 보증금을 돌려줄 의사와 능력이 있었다면, 이후 시세 하락으로 반환이 어려워진 것은 <strong>민사상 채무불이행</strong>일 뿐 사기가 아닙니다.</p>\n<p>대법원도 "계약 당시 이행 의사가 있었으나 <strong>사후적 사정 변경</strong>으로 이행하지 못한 경우는 사기에 해당하지 않는다"고 일관되게 판시하고 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계약 시 반환 의사·능력 있음 + 시세 하락으로 지연 = 채무불이행(민사) ≠ 사기(형사)</blockquote>',
      },
      {
        title: '계약 당시 반환 능력이 있었음을 입증하세요',
        content:
          '<p><strong style="color:#1e3a5f">임대 당시 부동산 시세와 재정 상태가 핵심 증거입니다</strong></p>\n<p>사실과 다르게 신고되었다면 <strong>계약 체결 시점의 부동산 시세</strong>를 증명하는 것이 가장 중요합니다. KB부동산 시세, 국토교통부 실거래가, 감정평가서 등으로 당시 매매가가 보증금을 충분히 커버했음을 보여주세요.</p>\n<p><strong>근저당 설정 현황</strong>(등기부등본), 본인의 다른 자산이나 소득 자료도 반환 능력의 증거가 됩니다. 세입자에게 보증금 반환 의사를 표현한 문자, 카톡 메시지도 반드시 보존하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 계약 당시 시세 자료(KB시세/실거래가), 등기부등본, 반환 의사 표현 메시지</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">보증금 분쟁으로 사기 고소를 받으셨다면, 지금 상황에 맞는 대응 방법을 <a href="/diagnosis/fraud" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '경찰·검찰 조사에서 일관된 진술이 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">"처음부터 돌려줄 생각이었다"는 점을 일관되게 진술하세요</strong></p>\n<p>수사기관 조사에서 가장 중요한 것은 <strong>"계약 당시 반환 의사가 있었고, 시세 하락이라는 예상치 못한 사정으로 지연되고 있다"</strong>는 점을 명확히 하는 것입니다. 현재도 반환을 위해 노력하고 있다는 점(부동산 매도 시도, 대출 알아보는 중 등)도 함께 진술하세요.</p>\n<p>"보증금을 언제까지 돌려주겠다"는 구체적 계획보다는, <strong>반환 의사와 노력의 과정</strong>을 보여주는 것이 효과적입니다. 변호사 조력 하에 진술서를 미리 준비하는 것을 권장합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 포인트: 계약 시 반환 의사 + 시세 하락이 원인 + 현재 반환 노력 중</blockquote>',
      },
      {
        title: '허위 고소라면 무고죄 반대고소도 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">세입자가 사기가 아님을 알면서 고소했다면 무고죄가 성립합니다</strong></p>\n<p><strong>무고죄</strong>(형법 제156조)는 타인으로 하여금 형사처벌을 받게 할 목적으로 허위 사실을 신고하는 범죄로, <strong>10년 이하 징역 또는 1,500만원 이하 벌금</strong>에 해당합니다. 세입자가 민사 분쟁임을 알면서도 형사 압박 수단으로 고소했다면 무고에 해당할 수 있습니다.</p>\n<p>다만 무고죄는 <strong>"허위라는 점을 인식하고 고소했는지"</strong>가 핵심이므로, 세입자가 진심으로 사기라고 믿었다면 성립이 어렵습니다. 변호사와 상담 후 반대고소 여부를 신중하게 결정하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">검토: 무고죄(형법 제156조) — 허위 인식 + 형사처벌 목적 신고 시 성립</blockquote>',
      },
    ],
    cases: [
      {
        title: '시세 하락으로 보증금을 반환하지 못한 임대인이 사기 무혐의를 받은 사례',
        summary:
          '관련 사례에서도 임대 계약 당시 부동산 시세가 보증금을 충분히 커버했으나, 이후 시세 급락으로 매도가 어려워져 보증금을 반환하지 못한 임대인에 대해, 계약 시 편취 고의가 인정되지 않아 무혐의 처분이 내려진 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 계약 당시 부동산 시세와 근저당 현황을 증명할 자료를 반드시 확보하세요.',
      },
    ],
    faq: [
      {
        question: '보증금을 못 돌려주면 무조건 전세사기인가요?',
        answer: '아닙니다. <strong>계약 당시 반환 의사와 능력이 있었다면</strong> 채무불이행이지 사기가 아닙니다.',
      },
      {
        question: '시세가 떨어져서 못 돌려주는 것도 사기인가요?',
        answer: '사후적 시세 하락은 <strong>예견할 수 없는 사정 변경</strong>이므로 사기 고의가 인정되기 어렵습니다.',
      },
      {
        question: '근저당이 많이 설정되어 있으면 사기로 볼 수 있나요?',
        answer: '계약 당시 <strong>근저당 합계 + 보증금이 시세를 초과</strong>했다면 사기 고의가 의심될 수 있습니다. 반대로 여유가 있었다면 사기가 아닙니다.',
      },
      {
        question: '세입자가 고소를 취하하게 하려면 어떻게 하나요?',
        answer: '<strong>보증금 일부라도 반환</strong>하고 구체적 반환 계획을 제시하면 합의와 고소 취하를 유도할 수 있습니다.',
      },
      {
        question: '임대인인데 변호사를 꼭 선임해야 하나요?',
        answer: '사기 혐의는 진술 하나로 결과가 달라지므로 <strong>변호사 조력을 강력히 권장</strong>합니다.',
      },
      {
        question: '세입자가 민사소송과 형사고소를 동시에 할 수 있나요?',
        answer: '가능합니다. 다만 <strong>민사와 형사는 별개 절차</strong>이며, 형사에서 무혐의가 나와도 민사 반환 의무는 남습니다.',
      },
      {
        question: '무고죄로 반대고소하면 효과가 있나요?',
        answer: '세입자가 <strong>허위임을 알면서 고소한 증거</strong>가 있으면 효과적입니다. 다만 입증이 어려울 수 있으므로 변호사와 상담 후 결정하세요.',
      },
      {
        question: '보증금 반환을 위해 노력한 기록이 왜 중요한가요?',
        answer: '부동산 매도 시도, 대출 상담 기록 등은 <strong>반환 의사의 직접적 증거</strong>가 되어 사기 고의 부정에 결정적입니다.',
      },
    ],
    cta: {
      text: '1분 안에 임대차 사기 고소 대응 준비사항 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 가이드', href: '/guide/fraud' },
      { label: '사기 무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '채무불이행과 사기 구별 체크리스트', href: '/guide/fraud/loan-default-vs-fraud-checklist' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '폭행 첫 대응 가이드', href: '/guide/assault/assault-charged-first-response' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-charge-rebuttal',
    keyword: '사기 혐의를 받았을 때 반박하는 방법',
    questionKeyword: '사기 혐의를 받았는데 어떻게 반박하나요?',
    ctaKeyword: '사기 혐의 반박 방법',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '사기 혐의 반박 방어 전략 핵심 정리 | 로앤가이드',
      description: '사기 혐의를 받고 있다면 방어 전략이 중요합니다. 편취 고의 부인, 채무불이행과 구별, 유리한 증거 확보법까지 핵심 방어 전략을 지금 확인하세요.',
    },
    intro: '거래 상대방이 경찰서에 사기로 고소했다는 연락을 받았습니다. 돈을 갚지 못한 것은 사실이지만, 처음부터 속일 생각은 없었습니다. 사업이 어려워져서 약속을 지키지 못한 것뿐인데, 사기죄가 성립하는 건지 혼란스럽습니다. 경찰 출석 요구서를 받은 지금, 무엇을 어떻게 준비해야 하는지 막막합니다. 사기 혐의에 대한 방어 전략을 단계별로 정리해드립니다.',
    timelineSteps: ['혐의 내용 확인', '편취 고의 반박 자료 수집', '경찰 조사 대응', '검찰·재판 대비'],
    sections: [
      {
        title: '사기죄 성립의 핵심은 "편취의 고의"입니다',
        content:
          '<p><strong style="color:#1e3a5f">돈을 못 갚은 것과 사기는 다릅니다 — 처음부터 속일 의사가 있었는지가 핵심입니다</strong></p>\n<p><strong>형법 제347조</strong>는 "사람을 기망하여 재물의 교부를 받거나 재산상의 이익을 취득한 자"를 처벌합니다. 여기서 핵심 구성요건은 <strong>기망행위</strong>와 <strong>편취의 고의</strong>입니다. 단순히 채무를 이행하지 못한 것(채무불이행)은 민사 문제이지, 형사상 사기죄가 아닙니다.</p>\n<p>대법원은 "차용 당시 변제할 의사와 능력이 있었다면, 그 후 사정이 변하여 변제하지 못하게 되었더라도 사기죄가 성립하지 않는다"고 일관되게 판시하고 있습니다(대법원 2017도16568 판결 등). 따라서 방어의 핵심은 <strong>거래 당시 이행 의사와 이행 능력이 있었음</strong>을 증명하는 것입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사기죄 핵심: 처음부터 속일 의사(편취의 고의) 유무 | 채무불이행 ≠ 사기</blockquote>',
      },
      {
        title: '편취의 고의를 부인할 수 있는 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">거래 당시 이행 의사와 능력이 있었음을 증명하는 자료가 필요합니다</strong></p>\n<p><strong>형사소송법 제307조</strong>에 따라 사실의 인정은 증거에 의해야 합니다. 사기 혐의를 반박하려면 다음 증거를 확보하세요. ① 거래 당시의 <strong>재정 상태 자료</strong>(통장 잔고, 매출 자료, 재산 목록), ② <strong>이행을 위한 노력</strong> 증거(일부 변제 기록, 물품 발주 내역, 업무 진행 이메일), ③ 채무 이행이 불가능해진 <strong>외부 사정</strong> 증거(경기 악화, 거래처 부도 등).</p>\n<p>특히 <strong>일부라도 변제한 기록</strong>이 있으면 편취의 고의를 부정하는 강력한 증거가 됩니다. 또한 상대방에게 사정을 설명하고 기한 연장을 요청한 <strong>문자·카카오톡 대화 기록</strong>도 이행 의사가 있었음을 보여주는 중요한 자료입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: 거래 당시 재정 상태 + 일부 변제 기록 + 이행 노력 자료 + 외부 사정 증빙</blockquote>',
      },
      {
        title: '경찰 조사에서 주의할 사항',
        content:
          '<p><strong style="color:#1e3a5f">조사 전에 진술 방향을 정리하고, 불리한 진술을 피하세요</strong></p>\n<p>경찰 출석 전에 사건의 경위를 <strong>시간순으로 정리</strong>해두세요. 거래 경위, 약속 내용, 이행 노력, 이행 불능 사유를 순서대로 작성합니다. 조사 시에는 <strong>진술거부권</strong>을 행사할 수 있으며, 변호인의 조력을 받을 권리가 있습니다.</p>\n<p>가장 중요한 것은 "돈을 갚겠다"는 식의 <strong>채무 인정 진술과 사기 인정 진술을 구별</strong>하는 것입니다. "돈을 아직 못 갚은 것은 맞지만 처음부터 속일 생각은 없었다"는 점을 명확히 하세요. 또한 고소인의 진술서를 열람하여 어떤 부분이 사실과 다른지 파악하는 것이 중요합니다. 피의자 지위에서 <strong>수사기록 열람·등사</strong>를 신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조사 전: 경위 시간순 정리 | 채무 인정 ≠ 사기 인정 구별 | 수사기록 열람 신청 가능</blockquote>',
      },
      {
        title: '합의와 민사 해결을 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">피해 회복은 형사 절차에서 가장 강력한 참작 사유입니다</strong></p>\n<p>사기 사건에서 고소인과의 <strong>합의</strong>는 검찰 처분과 법원 양형 모두에 결정적 영향을 미칩니다. 전액 변제 후 합의가 이루어지면 <strong>기소유예</strong> 처분을 받을 가능성이 높아지고, 기소 후에도 형이 크게 감경됩니다. 전액 변제가 어렵다면 <strong>분할 변제 합의서</strong>를 작성하고 1회분이라도 이행한 뒤 그 증빙을 제출하세요.</p>\n<p>합의가 어려운 경우에는 <strong>공탁</strong>을 활용할 수 있습니다. 피해금액을 법원에 공탁하면 피해 회복 의사를 증명하는 자료가 됩니다. 또한 민사적으로 채무를 이행하는 과정에서 고소 취하를 유도할 수 있으므로, 형사와 민사 대응을 <strong>병행</strong>하는 것이 전략적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의·변제 → 기소유예 가능성 ↑ | 전액 어려우면 공탁 활용 | 형사+민사 병행 대응</blockquote>',
      },
    ],
    cases: [
      {
        title: '차용 당시 변제 능력이 인정되어 무죄가 선고된 사례',
        summary:
          '관련 사례에서도 피고인이 금전을 차용할 당시 부동산과 사업 매출이 있어 변제 능력이 인정되었으나, 이후 경기 악화로 사업이 실패하여 변제하지 못한 경우, 법원이 편취의 고의를 인정하기 어렵다고 판단하여 무죄를 선고한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 거래 당시의 재산 상태와 수입을 증명할 수 있는 자료(통장거래내역, 부동산등기부, 매출자료)를 반드시 확보하세요.',
      },
      {
        title: '일부 변제 사실이 편취 고의 부정의 근거가 된 사례',
        summary:
          '관련 사례에서도 고소인에게 빌린 금액 중 일부를 수차례에 걸쳐 변제한 기록이 있는 경우, 법원이 "처음부터 편취할 의사가 있었다고 보기 어렵다"고 판단하여 무죄를 선고한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 일부라도 변제한 송금 기록, 현금 수령 확인 문자 등을 모두 정리하여 증거로 제출하세요.',
      },
    ],
    faq: [
      {
        question: '채무불이행과 사기죄는 어떻게 구별되나요?',
        answer: '<strong>처음부터 이행할 의사 없이</strong> 상대방을 속여 재물을 편취하면 사기죄이고, 이행 의사는 있었으나 사후 사정으로 이행하지 못한 것은 민사상 채무불이행입니다.',
      },
      {
        question: '사기 혐의로 경찰 출석 요구를 받았는데 꼭 가야 하나요?',
        answer: '출석 요구에 정당한 이유 없이 불응하면 <strong>체포영장</strong>이 발부될 수 있습니다. 반드시 출석하되, 사전에 진술 방향을 정리해두세요.',
      },
      {
        question: '변호사 없이 경찰 조사를 받아도 되나요?',
        answer: '가능하지만, 사기 혐의는 진술 내용이 매우 중요하므로 <strong>변호사 조력</strong>을 받는 것이 안전합니다. 국선변호인 선임이 어려우면 법률구조공단(132)을 이용하세요.',
      },
      {
        question: '고소인이 합의를 거부하면 어떻게 하나요?',
        answer: '합의가 안 되면 피해금액을 <strong>법원에 공탁</strong>하여 변제 의사를 증명하세요. 공탁 사실은 검찰과 법원에서 양형 참작 자료로 활용됩니다.',
      },
      {
        question: '사기죄로 유죄가 되면 형량은 어떻게 되나요?',
        answer: '형법 제347조에 따라 <strong>10년 이하 징역 또는 2,000만원 이하 벌금</strong>입니다. 피해금액과 전과에 따라 크게 달라집니다.',
      },
      {
        question: '고소 취하가 되면 사건이 끝나나요?',
        answer: '사기죄는 <strong>반의사불벌죄가 아니므로</strong> 고소 취하만으로 공소가 기각되지 않습니다. 다만 검찰이 기소 여부 결정 시 고소 취하를 참작합니다.',
      },
      {
        question: '사기 혐의와 별도로 민사 소송도 당할 수 있나요?',
        answer: '형사 고소와 <strong>민사 소송은 별개</strong>로 진행될 수 있습니다. 민사에서 패소하더라도 형사에서 무죄가 될 수 있고, 그 반대도 가능합니다.',
      },
      {
        question: '거짓 고소를 당한 경우 반대고소가 가능한가요?',
        answer: '상대방이 허위 사실로 고소한 경우 <strong>무고죄(형법 제156조)</strong>로 반대고소할 수 있습니다. 다만 무고죄 성립 요건이 엄격하므로 신중히 검토하세요.',
      },
    ],
    cta: {
      text: '1분 안에 사기 혐의 반박 준비사항 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '사기 진단', href: '/diagnosis/fraud' },
      { label: '사기 고소장 작성 준비', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '채무불이행과 사기 구별 체크리스트', href: '/guide/fraud/loan-default-vs-fraud-checklist' },
    ],
  },
];
