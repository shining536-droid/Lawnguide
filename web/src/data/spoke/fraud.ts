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
      title: '중고거래 사기 당했을 때 증거 모으는 법 | 로앤가이드',
      description: '중고거래 사기 피해를 입었을 때 증거를 수집하고 신고·고소하는 방법을 단계별로 정리했습니다.',
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
      title: '사기죄 고소장 쓰기 전에 정리할 것 | 로앤가이드',
      description: '사기죄 고소장 작성 전 정리해야 할 피의자 정보, 범죄 사실, 증거 목록을 항목별로 정리했습니다.',
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
      title: '투자 사기 의심될 때 먼저 확인할 3가지 | 로앤가이드',
      description: '투자 사기가 의심될 때 확인해야 할 업체 등록 여부, 수익 구조, 증거 수집 방법을 정리했습니다.',
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
      title: '중고거래 사기 경찰 신고 전 준비할 것 | 로앤가이드',
      description: '중고거래 사기 피해 시 경찰 신고 전 증거 캡처, 신고 절차, 고소장 작성, 계좌지급정지와 민사청구까지 단계별로 정리했습니다.',
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
      title: '사기 고소당했는데 합의하면 처벌 안 받나요 | 로앤가이드',
      description: '사기죄로 고소당했을 때 합의의 효과, 양형 감경, 합의서 작성 주의사항과 변호사 선임 시기를 정리했습니다.',
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
      title: '투자 사기 피해 증거 모으는 법 | 로앤가이드',
      description: '투자 사기 피해 시 계약서·홍보자료 확보, 수익률 약속 증거 수집, 금감원 신고, 경찰 고소까지 단계별로 정리했습니다.',
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
];
