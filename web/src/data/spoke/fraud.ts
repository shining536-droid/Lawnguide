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
];
